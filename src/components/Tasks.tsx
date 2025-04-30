"use client";
import React from "react";
import { PreloadedQuery, usePreloadedQuery } from "react-relay";
import { type tasksQuery as PageTaskQueryType } from "../__generated__/tasksQuery.graphql";
import { TaskFieldRenderer } from "@/components/TaskFieldRenderer";
import { pageTasksPageQuery } from "@/queries/tasksQuery";

export const Tasks = (props: { queryRef: unknown | undefined }) => {
  const data = usePreloadedQuery<PageTaskQueryType>(
    pageTasksPageQuery,
    props.queryRef as PreloadedQuery<PageTaskQueryType>
  );

  if (!data || !data.tasks) {
    return <div>Loading tasks...</div>;
  }
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Tasks</h1>
      <div className="space-y-8">
        {data.tasks.map((task) => (
          <div key={task.id} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">{task.title}</h2>
            <div className="space-y-4">
              <TaskFieldRenderer data={task.fields} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
