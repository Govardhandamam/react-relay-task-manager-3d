import {
  GraphQLTaggedNode,
  Variables,
  createOperationDescriptor,
  getRequest,
} from "relay-runtime";
import { getClientEnvironment } from "./environment";

export async function getPreloadedQuery(
  gqlQuery: GraphQLTaggedNode,
  variables: Variables
) {
  const environment = getClientEnvironment();
  const request = getRequest(gqlQuery);
  const operation = createOperationDescriptor(request, variables);
  const queryProps = await environment.execute({ operation }).toPromise();
  return queryProps;
}
