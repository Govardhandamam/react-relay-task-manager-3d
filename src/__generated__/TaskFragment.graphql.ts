/**
 * @generated SignedSource<<2e9f25f09e8c063d53b5d2284d78a001>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TaskFragment$data = {
  readonly fields: ReadonlyArray<{
    readonly " $fragmentSpreads": FragmentRefs<"TaskFieldRenderer_field">;
  }>;
  readonly id: string;
  readonly title: string;
  readonly " $fragmentType": "TaskFragment";
};
export type TaskFragment$key = {
  readonly " $data"?: TaskFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"TaskFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TaskFragment",
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
      "name": "title",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "TaskField",
      "kind": "LinkedField",
      "name": "fields",
      "plural": true,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "TaskFieldRenderer_field"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Task",
  "abstractKey": null
};

(node as any).hash = "b8f2c63f1da7fb57cbbee563bdc0a012";

export default node;
