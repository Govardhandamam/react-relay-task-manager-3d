import fs from "fs";
import { graphql } from "graphql";
import {
  schema,
  rootValue,
  dataDrivenDependencies,
} from "../../../lib/graphql";
import path from "path";
import getConfig from "next/config";
import { NextRequest, NextResponse } from "next/server";

const QUERY_MAP_FILE = path.resolve(
  getConfig().serverRuntimeConfig.projectRoot,
  "./queryMap.json"
);
const queryMap = JSON.parse(fs.readFileSync(QUERY_MAP_FILE, "utf8"));

export async function POST(req: NextRequest) {
  const requestParams = await req.json();
  dataDrivenDependencies.reset();
  const response = await graphql({
    schema,
    rootValue,
    source: requestParams.id ? queryMap[requestParams.id] : requestParams.query,
    variableValues: requestParams.variables,
  });
  if (response?.errors != null) {
    console.error("GraphQL Server Errors", response.errors);
  }

  response.extensions = {
    modules: dataDrivenDependencies.getModules(),
  };

  return NextResponse.json(response);
}

export async function GET() {
  const response = {
    message: "GQL server working",
    extensions: { modules: dataDrivenDependencies.getModules() },
  };
  return NextResponse.json(response);
}
