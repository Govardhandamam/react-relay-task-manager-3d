"use client";
import React from "react";
import { useLazyLoadQuery } from "react-relay";
import { taskByIdQuery } from "@/queries/taskByIdQuery";
import { type taskByIdQuery as TaskByIdQueryType } from "@/__generated__/taskByIdQuery.graphql";
import { TaskComponent } from "@/components/Task";

export default function TasksPage({ params }: { params: { slug: string } }) {
  const data = useLazyLoadQuery<TaskByIdQueryType>(taskByIdQuery, {
    id: params.slug,
  });

  if (!data?.task) {
    return <div>Loading task...</div>;
  }

  return <TaskComponent taskRef={data.task} />;
}
