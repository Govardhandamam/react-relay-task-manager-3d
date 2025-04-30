/**
 * @generated SignedSource<<31f923c377c1d3dd402f2885117017b4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @dataDrivenDependency TaskFieldRenderer_field.renderer {"branches":{"CheckBoxField":{"component":"CheckBoxField","fragment":"CheckBoxField_renderer$normalization.graphql"},"DateField":{"component":"DateField","fragment":"DateField_renderer$normalization.graphql"},"DateTimeField":{"component":"DateTimeField","fragment":"DateTimeField_renderer$normalization.graphql"},"MultiLineTextField":{"component":"MultiLineTextField","fragment":"MultiLineTextField_renderer$normalization.graphql"},"NumberField":{"component":"NumberField","fragment":"NumberField_renderer$normalization.graphql"},"RadioButtonField":{"component":"RadioButtonField","fragment":"RadioButtonField_renderer$normalization.graphql"},"SelectDropdownField":{"component":"SelectDropdownField","fragment":"SelectDropdownField_renderer$normalization.graphql"},"SingleLineTextField":{"component":"SingleLineTextField","fragment":"SingleLineTextField_renderer$normalization.graphql"},"StatusField":{"component":"StatusField","fragment":"StatusField_renderer$normalization.graphql"}},"plural":false}

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TaskFieldRenderer_field$data = ReadonlyArray<{
  readonly renderer: {
    readonly __fragmentPropName?: string | null | undefined;
    readonly __module_component?: string | null | undefined;
    readonly " $fragmentSpreads": FragmentRefs<"CheckBoxField_renderer" | "DateField_renderer" | "DateTimeField_renderer" | "MultiLineTextField_renderer" | "NumberField_renderer" | "RadioButtonField_renderer" | "SelectDropdownField_renderer" | "SingleLineTextField_renderer" | "StatusField_renderer">;
  } | null | undefined;
  readonly " $fragmentType": "TaskFieldRenderer_field";
}>;
export type TaskFieldRenderer_field$key = ReadonlyArray<{
  readonly " $data"?: TaskFieldRenderer_field$data;
  readonly " $fragmentSpreads": FragmentRefs<"TaskFieldRenderer_field">;
}>;

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "TaskFieldRenderer_field",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "supported",
          "value": "3XZImz"
        }
      ],
      "concreteType": null,
      "kind": "LinkedField",
      "name": "renderer",
      "plural": false,
      "selections": [
        {
          "kind": "InlineFragment",
          "selections": [
            {
              "args": null,
              "documentName": "TaskFieldRenderer_field",
              "fragmentName": "NumberField_renderer",
              "fragmentPropName": "renderer",
              "kind": "ModuleImport"
            }
          ],
          "type": "NumberField",
          "abstractKey": null
        },
        {
          "kind": "InlineFragment",
          "selections": [
            {
              "args": null,
              "documentName": "TaskFieldRenderer_field",
              "fragmentName": "SingleLineTextField_renderer",
              "fragmentPropName": "renderer",
              "kind": "ModuleImport"
            }
          ],
          "type": "SingleLineTextField",
          "abstractKey": null
        },
        {
          "kind": "InlineFragment",
          "selections": [
            {
              "args": null,
              "documentName": "TaskFieldRenderer_field",
              "fragmentName": "MultiLineTextField_renderer",
              "fragmentPropName": "renderer",
              "kind": "ModuleImport"
            }
          ],
          "type": "MultiLineTextField",
          "abstractKey": null
        },
        {
          "kind": "InlineFragment",
          "selections": [
            {
              "args": null,
              "documentName": "TaskFieldRenderer_field",
              "fragmentName": "SelectDropdownField_renderer",
              "fragmentPropName": "renderer",
              "kind": "ModuleImport"
            }
          ],
          "type": "SelectDropdownField",
          "abstractKey": null
        },
        {
          "kind": "InlineFragment",
          "selections": [
            {
              "args": null,
              "documentName": "TaskFieldRenderer_field",
              "fragmentName": "CheckBoxField_renderer",
              "fragmentPropName": "renderer",
              "kind": "ModuleImport"
            }
          ],
          "type": "CheckBoxField",
          "abstractKey": null
        },
        {
          "kind": "InlineFragment",
          "selections": [
            {
              "args": null,
              "documentName": "TaskFieldRenderer_field",
              "fragmentName": "RadioButtonField_renderer",
              "fragmentPropName": "renderer",
              "kind": "ModuleImport"
            }
          ],
          "type": "RadioButtonField",
          "abstractKey": null
        },
        {
          "kind": "InlineFragment",
          "selections": [
            {
              "args": null,
              "documentName": "TaskFieldRenderer_field",
              "fragmentName": "StatusField_renderer",
              "fragmentPropName": "renderer",
              "kind": "ModuleImport"
            }
          ],
          "type": "StatusField",
          "abstractKey": null
        },
        {
          "kind": "InlineFragment",
          "selections": [
            {
              "args": null,
              "documentName": "TaskFieldRenderer_field",
              "fragmentName": "DateField_renderer",
              "fragmentPropName": "renderer",
              "kind": "ModuleImport"
            }
          ],
          "type": "DateField",
          "abstractKey": null
        },
        {
          "kind": "InlineFragment",
          "selections": [
            {
              "args": null,
              "documentName": "TaskFieldRenderer_field",
              "fragmentName": "DateTimeField_renderer",
              "fragmentPropName": "renderer",
              "kind": "ModuleImport"
            }
          ],
          "type": "DateTimeField",
          "abstractKey": null
        }
      ],
      "storageKey": "renderer(supported:\"3XZImz\")"
    }
  ],
  "type": "TaskField",
  "abstractKey": null
};

(node as any).hash = "dfa6ddc42f394fb9b27c208a17f02209";

export default node;
