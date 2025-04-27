import { v4 as uuidv4 } from "uuid";

// Define types for our task fields
interface BaseField {
  id: string;
  name: string;
  required: boolean;
  __typename: string;
}

interface NumberField extends BaseField {
  __typename: "NumberField";
  value?: number;
}

interface SingleLineTextField extends BaseField {
  __typename: "SingleLineTextField";
  value?: string;
}

interface MultiLineTextField extends BaseField {
  __typename: "MultiLineTextField";
  value?: string;
}

interface SelectDropdownField extends BaseField {
  __typename: "SelectDropdownField";
  value?: string;
  options: string[];
}

interface CheckBoxField extends BaseField {
  __typename: "CheckBoxField";
  checked: boolean;
}

interface RadioButtonField extends BaseField {
  __typename: "RadioButtonField";
  value?: string;
  options: string[];
}

interface StatusField extends BaseField {
  __typename: "StatusField";
  value: "TODO" | "IN_PROGRESS" | "DONE" | "CANCELLED";
  options: string[];
}

interface DateField extends BaseField {
  __typename: "DateField";
  value?: number;
}

interface DateTimeField extends BaseField {
  __typename: "DateTimeField";
  value?: number;
}

type TaskField =
  | NumberField
  | SingleLineTextField
  | MultiLineTextField
  | SelectDropdownField
  | CheckBoxField
  | RadioButtonField
  | StatusField
  | DateField
  | DateTimeField;

interface Task {
  id: string;
  title: string;
  description?: string;
  status: "TODO" | "IN_PROGRESS" | "DONE" | "CANCELLED";
  dueDate?: number;
  fields: TaskField[];
  createdAt: number;
  updatedAt: number;
}

// Sample tasks data
export const tasks: Task[] = [
  {
    id: uuidv4(),
    title: "Complete Project Proposal",
    description: "Create a detailed proposal for the new project",
    status: "IN_PROGRESS",
    dueDate: Date.now() + 7 * 24 * 60 * 60 * 1000, // 7 days from now
    fields: [
      {
        id: uuidv4(),
        __typename: "NumberField",
        name: "Budget",
        value: 5000,
        required: true,
      },
      {
        id: uuidv4(),
        __typename: "MultiLineTextField",
        name: "Project Description",
        value:
          "This project aims to create a new task management system with dynamic field types.",
        required: true,
      },
      {
        id: uuidv4(),
        __typename: "SelectDropdownField",
        name: "Priority",
        value: "High",
        options: ["Low", "Medium", "High", "Critical"],
        required: true,
      },
      {
        id: uuidv4(),
        __typename: "CheckBoxField",
        name: "Requires Approval",
        checked: true,
        required: false,
      },
    ],
    createdAt: Date.now() - 14 * 24 * 60 * 60 * 1000, // 14 days ago
    updatedAt: Date.now() - 2 * 24 * 60 * 60 * 1000, // 2 days ago
  },
  {
    id: uuidv4(),
    title: "Schedule Team Meeting",
    description: "Organize a meeting to discuss project progress",
    status: "TODO",
    dueDate: Date.now() + 2 * 24 * 60 * 60 * 1000, // 2 days from now
    fields: [
      {
        id: uuidv4(),
        __typename: "DateTimeField",
        name: "Meeting Time",
        value: Date.now() + 2 * 24 * 60 * 60 * 1000 + 10 * 60 * 60 * 1000, // 2 days from now at 10 AM
        required: true,
      },
      {
        id: uuidv4(),
        __typename: "SingleLineTextField",
        name: "Meeting Room",
        value: "Conference Room A",
        required: true,
      },
      {
        id: uuidv4(),
        __typename: "RadioButtonField",
        name: "Meeting Type",
        value: "In-person",
        options: ["In-person", "Virtual", "Hybrid"],
        required: true,
      },
    ],
    createdAt: Date.now() - 5 * 24 * 60 * 60 * 1000, // 5 days ago
    updatedAt: Date.now() - 1 * 24 * 60 * 60 * 1000, // 1 day ago
  },
  {
    id: uuidv4(),
    title: "Review Code Changes",
    description:
      "Review the latest code changes for the task manager application",
    status: "DONE",
    dueDate: Date.now() - 1 * 24 * 60 * 60 * 1000, // 1 day ago
    fields: [
      {
        id: uuidv4(),
        __typename: "StatusField",
        name: "Code Quality",
        value: "DONE",
        required: true,
        options: ["TODO", "IN_PROGRESS", "DONE", "CANCELLED"],
      },
      {
        id: uuidv4(),
        __typename: "MultiLineTextField",
        name: "Review Comments",
        value: "The code looks good. A few minor issues were fixed.",
        required: false,
      },
    ],
    createdAt: Date.now() - 3 * 24 * 60 * 60 * 1000, // 3 days ago
    updatedAt: Date.now() - 12 * 60 * 60 * 1000, // 12 hours ago
  },
];

// Function to find a task by ID
export function findTask(id: string): Task | undefined {
  return tasks.find((task) => task.id === id);
}

// Function to get all tasks with pagination
export function allTasks({
  after,
  first = 10,
  orderBy,
}: {
  after?: string;
  first?: number;
  orderBy?: { createdAt?: "asc" | "desc"; dueDate?: "asc" | "desc" };
} = {}) {
  const sortedTasks = [...tasks];

  // Apply sorting
  if (orderBy) {
    if (orderBy.createdAt) {
      sortedTasks.sort((a, b) => {
        return orderBy.createdAt === "asc"
          ? a.createdAt - b.createdAt
          : b.createdAt - a.createdAt;
      });
    } else if (orderBy.dueDate) {
      sortedTasks.sort((a, b) => {
        const aDate = a.dueDate || Number.MAX_SAFE_INTEGER;
        const bDate = b.dueDate || Number.MAX_SAFE_INTEGER;
        return orderBy.dueDate === "asc" ? aDate - bDate : bDate - aDate;
      });
    }
  }

  // Apply pagination
  let startIndex = 0;
  if (after) {
    const afterIndex = sortedTasks.findIndex(
      (task) => `c-${task.id}` === after
    );
    if (afterIndex !== -1) {
      startIndex = afterIndex + 1;
    }
  }

  const paginatedTasks = sortedTasks.slice(startIndex, startIndex + first);

  return {
    edges: paginatedTasks.map((task) => ({
      node: task,
      cursor: `c-${task.id}`,
    })),
    pageInfo: {
      startCursor:
        paginatedTasks.length > 0 ? `c-${paginatedTasks[0].id}` : null,
      endCursor:
        paginatedTasks.length > 0
          ? `c-${paginatedTasks[paginatedTasks.length - 1].id}`
          : null,
      hasNextPage: startIndex + first < sortedTasks.length,
      hasPreviousPage: startIndex > 0,
    },
  };
}
