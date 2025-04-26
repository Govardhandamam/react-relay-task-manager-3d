/**
 * @generated SignedSource<<a763bb4bdf5c424ee69a0d7c746e3700>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type DateField_renderer$data = {
  readonly id: string;
  readonly name: string;
  readonly required: boolean | null | undefined;
  readonly value: string | null | undefined;
  readonly " $fragmentType": "DateField_renderer";
};
export type DateField_renderer$key = {
  readonly " $data"?: DateField_renderer$data;
  readonly " $fragmentSpreads": FragmentRefs<"DateField_renderer">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "DateField_renderer",
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
      "name": "required",
      "storageKey": null
    }
  ],
  "type": "DateField",
  "abstractKey": null
};

(node as any).hash = "fef2efdb01bc90146314cf485b62da7d";

export default node;
