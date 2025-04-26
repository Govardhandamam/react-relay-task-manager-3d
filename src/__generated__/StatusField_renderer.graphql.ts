/**
 * @generated SignedSource<<04639b7651bc0f35445edbcbc076b698>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type StatusField_renderer$data = {
  readonly id: string;
  readonly name: string;
  readonly options: ReadonlyArray<string>;
  readonly required: boolean | null | undefined;
  readonly value: string | null | undefined;
  readonly " $fragmentType": "StatusField_renderer";
};
export type StatusField_renderer$key = {
  readonly " $data"?: StatusField_renderer$data;
  readonly " $fragmentSpreads": FragmentRefs<"StatusField_renderer">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "StatusField_renderer",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "value",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "options",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "required",
      "storageKey": null
    }
  ],
  "type": "StatusField",
  "abstractKey": null
};

(node as any).hash = "48b65af7a63b748e047e73e423d4b1d9";

export default node;
