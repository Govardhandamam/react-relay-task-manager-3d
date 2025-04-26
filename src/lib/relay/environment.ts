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
  const response = await fetch("http://localhost:3000/api/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: request.text,
      variables,
    }),
  });

  return response.json();
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
