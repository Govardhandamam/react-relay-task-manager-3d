"use client";
import React, { use } from "react";
import { useLazyLoadQuery } from "react-relay";
import { taskByIdQuery } from "@/queries/taskByIdQuery";
import { type taskByIdQuery as TaskByIdQueryType } from "@/__generated__/taskByIdQuery.graphql";
import { TaskComponent } from "@/components/Task";
import { Suspense } from "react";

const Loading = () => {
  return <div>Loading...</div>;
};

function TaskContent({ slug }: { slug: string }) {
  const data = useLazyLoadQuery<TaskByIdQueryType>(
    taskByIdQuery,
    { id: slug },
    { fetchPolicy: "store-or-network" }
  );

  if (!data?.task) {
    return <Loading />;
  }

  return <TaskComponent taskRef={data.task} />;
}

export default function TasksPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);

  return (
    <Suspense fallback={<Loading />}>
      <TaskContent slug={slug} />
    </Suspense>
  );
}
