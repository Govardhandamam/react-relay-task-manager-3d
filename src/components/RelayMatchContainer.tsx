import React from "react";
import MatchContainer from "react-relay/lib/relay-hooks/MatchContainer";
import moduleLoader from "../lib/moduleLoader";
import ErrorBoundary from "./ErrorBoundary";
import { Button } from "./LayoutComponents";

// Define the ModuleLoaderError class before using it
class ModuleLoaderError extends Error {
  moduleLoaderName: string;
  error: Error;

  constructor(moduleLoaderName: string, error: Error) {
    super("ModuleLoaderError: " + error.message);
    this.moduleLoaderName = moduleLoaderName;
    this.error = error;
  }
}

interface RelayMatchContainerProps {
  match: unknown;
}

export default function RelayMatchContainer({
  match,
}: RelayMatchContainerProps) {
  return (
    <ErrorBoundary
      shouldCatchError={(error) => error instanceof ModuleLoaderError}
      renderError={(error, resetError) => {
        // Type assertion to handle the ModuleLoaderError properties
        const moduleError = error as ModuleLoaderError;
        return (
          <div className="bg-red-200 rounded-md px-2 py-1 inline-block">
            Failed to load {moduleError.moduleLoaderName}{" "}
            <Button
              size="small"
              onClick={() => {
                moduleLoader(moduleError.moduleLoaderName).resetError();
                resetError();
              }}
            >
              Reload
            </Button>
          </div>
        );
      }}
    >
      <MatchContainer
        match={match}
        loader={(name: string) => {
          const loader = moduleLoader(name);
          const error = loader.getError();
          if (error) {
            throw new ModuleLoaderError(name, error);
          }
          const loadedModule = loader.get();
          if (loadedModule != null) {
            return loadedModule;
          }
          throw loader.load();
        }}
      />
    </ErrorBoundary>
  );
}
