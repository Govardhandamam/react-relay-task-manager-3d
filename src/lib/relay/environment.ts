import {
  Environment,
  Network,
  RecordSource,
  Store,
  FetchFunction,
  RequestParameters,
  Variables,
} from "relay-runtime";

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

function createEnvironment() {
  return new Environment({
    network: Network.create(fetchRelay),
    store: new Store(new RecordSource()),
  });
}

let environment: Environment | undefined;

export function getClientEnvironment() {
  if (typeof window === "undefined") {
    return createEnvironment();
  }

  if (!environment) {
    environment = createEnvironment();
  }

  return environment;
}
