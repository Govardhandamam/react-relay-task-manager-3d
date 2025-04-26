/**
 * @generated SignedSource<<3aa4659f19a74975fe09a6c9ed20aef9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RadioButtonField_renderer$data = {
  readonly id: string;
  readonly name: string;
  readonly options: ReadonlyArray<string>;
  readonly required: boolean | null | undefined;
  readonly value: string | null | undefined;
  readonly " $fragmentType": "RadioButtonField_renderer";
};
export type RadioButtonField_renderer$key = {
  readonly " $data"?: RadioButtonField_renderer$data;
  readonly " $fragmentSpreads": FragmentRefs<"RadioButtonField_renderer">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RadioButtonField_renderer",
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
  "type": "RadioButtonField",
  "abstractKey": null
};

(node as any).hash = "de2635dbb7c695e10b893125cc3adbb4";

export default node;
