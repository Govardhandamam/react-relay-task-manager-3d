/**
 * @generated SignedSource<<61a559d8218a809b59bf8c46878b8804>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SelectDropdownField_renderer$data = {
  readonly id: string;
  readonly name: string;
  readonly options: ReadonlyArray<string>;
  readonly required: boolean | null | undefined;
  readonly value: string | null | undefined;
  readonly " $fragmentType": "SelectDropdownField_renderer";
};
export type SelectDropdownField_renderer$key = {
  readonly " $data"?: SelectDropdownField_renderer$data;
  readonly " $fragmentSpreads": FragmentRefs<"SelectDropdownField_renderer">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SelectDropdownField_renderer",
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
  "type": "SelectDropdownField",
  "abstractKey": null
};

(node as any).hash = "40d41773fad87d0ea352e747b535d9d3";

export default node;
