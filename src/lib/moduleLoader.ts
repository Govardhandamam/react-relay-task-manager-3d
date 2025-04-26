// Module loader implementation for dynamic loading of components
interface Loader {
  kind: "pending" | "registered";
  resolve?: (value: unknown) => void;
  reject?: (reason?: unknown) => void;
  loaderFn?: () => Promise<unknown>;
}

const loaders = new Map<string, Loader>();
const loadedModules = new Map<string, unknown>();
const failedModules = new Map<string, Error>();
const pendingLoaders = new Map<string, Promise<unknown>>();

export default function moduleLoader(name: string) {
  return {
    getError() {
      return failedModules.get(name);
    },
    resetError() {
      failedModules.delete(name);
    },
    get() {
      const loadedModule = loadedModules.get(name);
      return loadedModule == null
        ? null
        : (loadedModule as { default: unknown }).default;
    },
    load() {
      const loader = loaders.get(name);
      if (loader == null) {
        const promise = new Promise((resolve, reject) => {
          loaders.set(name, {
            kind: "pending",
            resolve,
            reject,
          });
        });
        pendingLoaders.set(name, promise);
        return promise;
      } else if (loader.kind === "registered" && loader.loaderFn) {
        return loader.loaderFn().then(
          (loadedModule) => {
            loadedModules.set(name, loadedModule);
            return (loadedModule as { default: unknown }).default;
          },
          (error: Error) => {
            failedModules.set(name, error);
            throw error;
          }
        );
      } else if (loader.kind === "pending") {
        return pendingLoaders.get(name);
      }
    },
  };
}

export function registerLoader(name: string, loaderFn: () => Promise<unknown>) {
  const loader = loaders.get(name);
  if (loader == null) {
    loaders.set(name, {
      kind: "registered",
      loaderFn,
    });
  } else if (loader.kind === "pending" && loader.resolve && loader.reject) {
    loaderFn().then(
      (loadedModule) => {
        loadedModules.set(name, loadedModule);
        pendingLoaders.delete(name);
        loader.resolve!((loadedModule as { default: unknown }).default);
      },
      (error: Error) => {
        failedModules.set(name, error);
        pendingLoaders.delete(name);
        loader.reject!(error);
      }
    );
  }
}
