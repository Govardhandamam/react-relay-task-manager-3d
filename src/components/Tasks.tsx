"use client";
import React from "react";
import { PreloadedQuery, usePreloadedQuery } from "react-relay";
import { type tasksQuery as PageTaskQueryType } from "../__generated__/tasksQuery.graphql";
import { pageTasksPageQuery } from "@/queries/tasksQuery";
import { TaskComponent } from "./Task";

export const Tasks = (props: { queryRef: unknown | undefined }) => {
  const data = usePreloadedQuery<PageTaskQueryType>(
    pageTasksPageQuery,
    props.queryRef as PreloadedQuery<PageTaskQueryType>
  );

  if (!data || !data.tasks) {
    return <div>Loading tasks...</div>;
  }
  return (
    <div className="container mx-auto px-4 py-4">
      <h1 className="text-3xl font-bold mb-8">Tasks</h1>
      {data.tasks.map((task) => (
        <TaskComponent key={task.id} taskRef={task} />
      ))}
    </div>
  );
};
