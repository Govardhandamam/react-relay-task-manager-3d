"use client";
import React from "react";
import { PreloadedQuery, usePreloadedQuery } from "react-relay";
import PageTaskQuery, {
  type pageTasksPageQuery,
} from "../__generated__/pageTasksPageQuery.graphql";
import { TaskFieldRenderer } from "@/components/TaskFieldRenderer";

export const Tasks = (props: { queryRef: unknown | undefined }) => {
  const data = usePreloadedQuery<pageTasksPageQuery>(
    PageTaskQuery,
    props.queryRef as PreloadedQuery<pageTasksPageQuery>
  );
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Tasks</h1>
      <div className="space-y-8">
        {data.tasks.map((task) => (
          <div key={task.id} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">{task.title}</h2>
            <div className="space-y-4">
              {task.fields.map((field) => (
                <TaskFieldRenderer
                  key={field.id}
                  data={field}
                  onChange={(value: unknown) => {
                    console.log(`Field ${field.name} changed to:`, value);
                  }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
