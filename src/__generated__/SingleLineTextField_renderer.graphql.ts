/**
 * @generated SignedSource<<92d676f7ffdc7a2626ce1862861c41f5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SingleLineTextField_renderer$data = {
  readonly id: string;
  readonly name: string;
  readonly required: boolean | null | undefined;
  readonly value: string | null | undefined;
  readonly " $fragmentType": "SingleLineTextField_renderer";
};
export type SingleLineTextField_renderer$key = {
  readonly " $data"?: SingleLineTextField_renderer$data;
  readonly " $fragmentSpreads": FragmentRefs<"SingleLineTextField_renderer">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SingleLineTextField_renderer",
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
  "type": "SingleLineTextField",
  "abstractKey": null
};

(node as any).hash = "576b4b2ecec8cde7c98022d77dcbc604";

export default node;
