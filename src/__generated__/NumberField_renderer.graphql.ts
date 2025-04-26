/**
 * @generated SignedSource<<f43897dc6119c0f950ddae27d952f966>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type NumberField_renderer$data = {
  readonly id: string;
  readonly max: number | null | undefined;
  readonly min: number | null | undefined;
  readonly name: string;
  readonly required: boolean | null | undefined;
  readonly value: string | null | undefined;
  readonly " $fragmentType": "NumberField_renderer";
};
export type NumberField_renderer$key = {
  readonly " $data"?: NumberField_renderer$data;
  readonly " $fragmentSpreads": FragmentRefs<"NumberField_renderer">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "NumberField_renderer",
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
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "min",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "max",
      "storageKey": null
    }
  ],
  "type": "NumberField",
  "abstractKey": null
};

(node as any).hash = "df7367f3b22d20e93ff5585d8518b702";

export default node;
