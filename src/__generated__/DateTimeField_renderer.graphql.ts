/**
 * @generated SignedSource<<ed6603dfc992a2e6833c20c8d4b69e46>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type DateTimeField_renderer$data = {
  readonly id: string;
  readonly name: string;
  readonly required: boolean | null | undefined;
  readonly value: string | null | undefined;
  readonly " $fragmentType": "DateTimeField_renderer";
};
export type DateTimeField_renderer$key = {
  readonly " $data"?: DateTimeField_renderer$data;
  readonly " $fragmentSpreads": FragmentRefs<"DateTimeField_renderer">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "DateTimeField_renderer",
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
  "type": "DateTimeField",
  "abstractKey": null
};

(node as any).hash = "b6559dd73ad72676dd92556bdf6e4ce7";

export default node;
