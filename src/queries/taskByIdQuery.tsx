import { graphql } from "react-relay";
export const taskByIdQuery = graphql`
  query taskByIdQuery($id: ID!) {
    task(id: $id) {
      ...TaskFragment
    }
  }
`;
