/**
 * @generated SignedSource<<bf7a20db294fece412a55d4dae89cb95>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MultiLineTextField_renderer$data = {
  readonly id: string;
  readonly name: string;
  readonly required: boolean | null | undefined;
  readonly value: string | null | undefined;
  readonly " $fragmentType": "MultiLineTextField_renderer";
};
export type MultiLineTextField_renderer$key = {
  readonly " $data"?: MultiLineTextField_renderer$data;
  readonly " $fragmentSpreads": FragmentRefs<"MultiLineTextField_renderer">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MultiLineTextField_renderer",
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
  "type": "MultiLineTextField",
  "abstractKey": null
};

(node as any).hash = "76911d1e5e79b5ce1fffd46dd04fcf74";

export default node;
