import {
  Environment,
  Network,
  RecordSource,
  Store,
  FetchFunction,
  RequestParameters,
  Variables,
  OperationLoader,
  NormalizationSplitOperation,
} from "relay-runtime";
import moduleLoader from "../moduleLoader";

const fetchRelay: FetchFunction = async (
  request: RequestParameters,
  variables: Variables
) => {
  console.log("Relay request:", { id: request.id, name: request.name });

  const response = await fetch("http://localhost:3000/api/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: request.id,
      query: request.text,
      variables,
    }),
  });

  const result = await response.json();

  if (result.errors) {
    console.error("GraphQL errors:", result.errors);
  }

  return result;
};
const IS_SERVER = typeof window === typeof undefined;
const CLIENT_DEBUG = false;
const SERVER_DEBUG = false;

function createEnvironment() {
  // Operation loader is reponsible for loading JS modules/components
  // for data-processing and rendering
  const operationLoader: OperationLoader = {
    get: (name: string): NormalizationSplitOperation | null | undefined => {
      const result = moduleLoader(name).get();
      return result as NormalizationSplitOperation | null | undefined;
    },
    load: async (
      reference: unknown
    ): Promise<NormalizationSplitOperation | null | undefined> => {
      const name = reference as string;
      const result = await moduleLoader(name).load();
      return result as NormalizationSplitOperation | null | undefined;
    },
  };
  const environment = new Environment({
    network: Network.create(fetchRelay),
    store: new Store(new RecordSource(), { operationLoader }),
    operationLoader,
    isServer: IS_SERVER,
    log(event) {
      if ((IS_SERVER && SERVER_DEBUG) || (!IS_SERVER && CLIENT_DEBUG)) {
        console.debug("[relay environment event]", event);
      }
    },
  });
  return environment;
}

let environment: Environment | undefined;

export function getClientEnvironment() {
  if (IS_SERVER) {
    return createEnvironment();
  }

  if (!environment) {
    environment = createEnvironment();
  }

  return environment;
}
