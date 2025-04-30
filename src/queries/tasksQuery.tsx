import { graphql } from "react-relay";
export const pageTasksPageQuery = graphql`
  query tasksQuery @preloadable {
    tasks {
      id
      title
      fields {
        ...TaskFieldRenderer_field
      }
    }
  }
`;
