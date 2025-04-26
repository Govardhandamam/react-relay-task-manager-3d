import React from "react";
import { graphql } from "react-relay";
import { getPreloadedQuery } from "@/lib/relay/getServerSideProps";
import { Tasks } from "@/components/Tasks";

const pageTasksPageQuery = graphql`
  query pageTasksPageQuery @preloadable {
    tasks {
      id
      title
      fields {
        ...TaskFieldRenderer_field
      }
    }
  }
`;

const TasksPage = async () => {
  const queryRef = await getPreLoadedProps();
  return <Tasks queryRef={queryRef} />;
};

async function getPreLoadedProps() {
  return await getPreloadedQuery(pageTasksPageQuery, {});
}

export default TasksPage;
