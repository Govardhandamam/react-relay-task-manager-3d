import {
  GraphQLBoolean,
  GraphQLEnumType,
  GraphQLFloat,
  GraphQLID,
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLScalarType,
  GraphQLSchema,
  GraphQLString,
  GraphQLUnionType,
} from "graphql";

import { allTasks, findTask } from "./tasks";

const seenDataDrivenDependencies = new Set();

export const dataDrivenDependencies = {
  reset() {
    seenDataDrivenDependencies.clear();
  },
  getModules() {
    return Array.from(seenDataDrivenDependencies);
  },
};

const DateTimeType = new GraphQLScalarType({
  name: "DateTime",
  serialize: (value) => value,
});

// Define field types
const NumberFieldType = new GraphQLObjectType({
  name: "NumberField",
  fields: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    value: { type: GraphQLFloat },
    required: { type: new GraphQLNonNull(GraphQLBoolean) },
  },
});

const SingleLineTextFieldType = new GraphQLObjectType({
  name: "SingleLineTextField",
  fields: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    value: { type: GraphQLString },
    required: { type: new GraphQLNonNull(GraphQLBoolean) },
  },
});

const MultiLineTextFieldType = new GraphQLObjectType({
  name: "MultiLineTextField",
  fields: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    value: { type: GraphQLString },
    required: { type: new GraphQLNonNull(GraphQLBoolean) },
  },
});

const SelectDropdownFieldType = new GraphQLObjectType({
  name: "SelectDropdownField",
  fields: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    value: { type: GraphQLString },
    options: {
      type: new GraphQLNonNull(
        new GraphQLList(new GraphQLNonNull(GraphQLString))
      ),
    },
    required: { type: new GraphQLNonNull(GraphQLBoolean) },
  },
});

const CheckBoxFieldType = new GraphQLObjectType({
  name: "CheckBoxField",
  fields: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    checked: { type: new GraphQLNonNull(GraphQLBoolean) },
    required: { type: new GraphQLNonNull(GraphQLBoolean) },
  },
});

const RadioButtonFieldType = new GraphQLObjectType({
  name: "RadioButtonField",
  fields: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    value: { type: GraphQLString },
    options: {
      type: new GraphQLNonNull(
        new GraphQLList(new GraphQLNonNull(GraphQLString))
      ),
    },
    required: { type: new GraphQLNonNull(GraphQLBoolean) },
  },
});

const TaskStatusEnum = new GraphQLEnumType({
  name: "TaskStatus",
  values: {
    TODO: { value: "TODO" },
    IN_PROGRESS: { value: "IN_PROGRESS" },
    DONE: { value: "DONE" },
    CANCELLED: { value: "CANCELLED" },
  },
});

const StatusFieldType = new GraphQLObjectType({
  name: "StatusField",
  fields: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    value: { type: new GraphQLNonNull(TaskStatusEnum) },
    required: { type: new GraphQLNonNull(GraphQLBoolean) },
  },
});

const DateFieldType = new GraphQLObjectType({
  name: "DateField",
  fields: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    value: { type: DateTimeType },
    required: { type: new GraphQLNonNull(GraphQLBoolean) },
  },
});

const DateTimeFieldType = new GraphQLObjectType({
  name: "DateTimeField",
  fields: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    value: { type: DateTimeType },
    required: { type: new GraphQLNonNull(GraphQLBoolean) },
  },
});

// Define the TaskField union
const TaskFieldUnion = new GraphQLUnionType({
  name: "TaskField",
  types: [
    NumberFieldType,
    SingleLineTextFieldType,
    MultiLineTextFieldType,
    SelectDropdownFieldType,
    CheckBoxFieldType,
    RadioButtonFieldType,
    StatusFieldType,
    DateFieldType,
    DateTimeFieldType,
  ],
  resolveType(value) {
    return value.__typename;
  },
});

// Define the Task type
const TaskType = new GraphQLObjectType({
  name: "Task",
  fields: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    title: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: GraphQLString },
    status: { type: new GraphQLNonNull(TaskStatusEnum) },
    dueDate: { type: DateTimeType },
    fields: {
      type: new GraphQLNonNull(
        new GraphQLList(new GraphQLNonNull(TaskFieldUnion))
      ),
    },
    createdAt: { type: new GraphQLNonNull(DateTimeType) },
    updatedAt: { type: new GraphQLNonNull(DateTimeType) },
  },
});

// Define the TaskConnectionEdge type
const TaskConnectionEdgeType = new GraphQLObjectType({
  name: "TaskConnectionEdge",
  fields: {
    node: { type: TaskType },
    cursor: { type: GraphQLString },
  },
});

// Define the TaskConnectionPageInfo type
const TaskConnectionPageInfoType = new GraphQLObjectType({
  name: "TaskConnectionPageInfo",
  fields: {
    startCursor: { type: GraphQLString },
    endCursor: { type: GraphQLString },
    hasNextPage: { type: GraphQLBoolean },
    hasPreviousPage: { type: GraphQLBoolean },
  },
});

// Define the TaskConnection type
const TaskConnectionType = new GraphQLObjectType({
  name: "TaskConnection",
  fields: {
    edges: { type: new GraphQLList(TaskConnectionEdgeType) },
    pageInfo: { type: TaskConnectionPageInfoType },
  },
});

// Define the Order enum
const OrderEnum = new GraphQLEnumType({
  name: "Order",
  values: {
    asc: { value: "asc" },
    desc: { value: "desc" },
  },
});

// Define the OrderBy input type
const OrderByInput = new GraphQLInputObjectType({
  name: "OrderBy",
  fields: {
    createdAt: { type: OrderEnum },
    dueDate: { type: OrderEnum },
  },
});

// Define the Viewer type
const ViewerType = new GraphQLObjectType({
  name: "Viewer",
  fields: {
    allTasks: {
      args: {
        first: { type: GraphQLInt },
        after: { type: GraphQLString },
        orderBy: { type: OrderByInput },
      },
      type: TaskConnectionType,
    },
  },
});

// Define the Query type
const QueryType = new GraphQLObjectType({
  name: "Query",
  fields: {
    viewer: { type: ViewerType },
    task: {
      type: TaskType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
      },
    },
  },
});

// Create the schema
export const schema = new GraphQLSchema({
  query: QueryType,
});

// The rootValue provides a resolver function for each API endpoint
export const rootValue = {
  viewer: () => {
    return {
      allTasks,
    };
  },
  task: ({ id }: { id: string }) => {
    return findTask(id);
  },
};
