/**
 * @generated SignedSource<<c50b8cf7dd8f09db83969b7d629ef6a6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CheckBoxField_renderer$data = {
  readonly checked: boolean | null | undefined;
  readonly id: string;
  readonly name: string;
  readonly required: boolean | null | undefined;
  readonly " $fragmentType": "CheckBoxField_renderer";
};
export type CheckBoxField_renderer$key = {
  readonly " $data"?: CheckBoxField_renderer$data;
  readonly " $fragmentSpreads": FragmentRefs<"CheckBoxField_renderer">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CheckBoxField_renderer",
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
      "name": "checked",
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
  "type": "CheckBoxField",
  "abstractKey": null
};

(node as any).hash = "d045f81424637e44bd2bb5d0582b18cd";

export default node;
