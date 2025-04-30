import React from "react";

import { getPreloadedQuery } from "@/lib/relay/getServerSideProps";
import { Tasks } from "@/components/Tasks";
import { pageTasksPageQuery } from "@/queries/tasksQuery";

const TasksPage = async () => {
  const queryRef = await getPreLoadedProps();
  return <Tasks queryRef={queryRef} />;
};

async function getPreLoadedProps() {
  return await getPreloadedQuery(pageTasksPageQuery, {});
}

export default TasksPage;
