import { NextResponse } from "next/server";
import { graphql } from "graphql";
import { buildSchema } from "graphql/utilities";
import { readFileSync } from "fs";
import { join } from "path";

// Sample data generator
const generateRandomFields = () => {
  const fieldTypes = [
    "NumberField",
    "SingleLineTextField",
    "MultiLineTextField",
    "SelectDropdownField",
    "CheckBoxField",
    "RadioButtonField",
    "StatusField",
    "DateField",
    "DateTimeField",
  ];

  // Randomly select 3 field types
  const selectedTypes = fieldTypes.sort(() => Math.random() - 0.5).slice(0, 3);

  return selectedTypes.map((type, index) => {
    const baseField = {
      id: `field-${index}`,
      name: `Field ${index + 1}`,
      required: Math.random() > 0.5,
      renderer: {
        __typename: type,
      },
    };

    switch (type) {
      case "NumberField":
        return {
          ...baseField,
          renderer: {
            ...baseField.renderer,
            value: Math.floor(Math.random() * 100),
          },
        };
      case "SingleLineTextField":
      case "MultiLineTextField":
        return {
          ...baseField,
          renderer: {
            ...baseField.renderer,
            value: `Sample text for ${type}`,
          },
        };
      case "SelectDropdownField":
      case "RadioButtonField":
      case "StatusField":
        return {
          ...baseField,
          renderer: {
            ...baseField.renderer,
            value: "option1",
            options: ["option1", "option2", "option3"],
          },
        };
      case "CheckBoxField":
        return {
          ...baseField,
          renderer: {
            ...baseField.renderer,
            checked: Math.random() > 0.5,
          },
        };
      case "DateField":
      case "DateTimeField":
        return {
          ...baseField,
          renderer: {
            ...baseField.renderer,
            value: new Date().toISOString(),
          },
        };
      default:
        return baseField;
    }
  });
};

const tasks = [
  {
    id: "1",
    title: "Task 1",
    fields: generateRandomFields(),
  },
  {
    id: "2",
    title: "Task 2",
    fields: generateRandomFields(),
  },
  {
    id: "3",
    title: "Task 3",
    fields: generateRandomFields(),
  },
];

export async function POST(req: Request) {
  try {
    const schemaPath = join(process.cwd(), "src", "schema", "schema.graphql");
    const schemaString = readFileSync(schemaPath, "utf8");
    const schema = buildSchema(schemaString);

    const { query, variables } = await req.json();

    const result = await graphql({
      schema,
      source: query,
      variableValues: variables,
      rootValue: {
        tasks: () => tasks,
      },
    });

    return NextResponse.json(result);
  } catch (error) {
    console.error("GraphQL API Error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
