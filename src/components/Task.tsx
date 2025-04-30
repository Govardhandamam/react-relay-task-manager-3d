"use client";
import React from "react";
import { TaskFieldRenderer } from "@/components/TaskFieldRenderer";
import { graphql, useFragment } from "react-relay";
import { TaskFragment$key } from "@/__generated__/TaskFragment.graphql";

export function TaskComponent({ taskRef }: { taskRef: TaskFragment$key }) {
  const data = useFragment<TaskFragment$key>(
    graphql`
      fragment TaskFragment on Task {
        id
        title
        fields {
          ...TaskFieldRenderer_field
        }
      }
    `,
    taskRef
  );
  return (
    <div className="container mx-auto px-4 py-4">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl text-gray-700 font-semibold mb-4">
          {data?.title}
        </h2>
        <div className="space-y-4">
          <TaskFieldRenderer data={data?.fields} />
        </div>
      </div>
    </div>
  );
}
