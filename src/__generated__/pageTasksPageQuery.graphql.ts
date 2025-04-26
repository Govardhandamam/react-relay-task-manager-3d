/**
 * @generated SignedSource<<a4f46b9f1b33535235406ab3650fa680>>
 * @relayHash 9be5a3f3a884431b8b7805af43b8e813
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 9be5a3f3a884431b8b7805af43b8e813
// @indirectDataDrivenDependency TaskFieldRenderer_field.renderer {"branches":{"CheckBoxField":{"component":"CheckBoxField","fragment":"CheckBoxField_renderer$normalization.graphql"},"DateField":{"component":"DateField","fragment":"DateField_renderer$normalization.graphql"},"DateTimeField":{"component":"DateTimeField","fragment":"DateTimeField_renderer$normalization.graphql"},"MultiLineTextField":{"component":"MultiLineTextField","fragment":"MultiLineTextField_renderer$normalization.graphql"},"NumberField":{"component":"NumberField","fragment":"NumberField_renderer$normalization.graphql"},"RadioButtonField":{"component":"RadioButtonField","fragment":"RadioButtonField_renderer$normalization.graphql"},"SelectDropdownField":{"component":"SelectDropdownField","fragment":"SelectDropdownField_renderer$normalization.graphql"},"SingleLineTextField":{"component":"SingleLineTextField","fragment":"SingleLineTextField_renderer$normalization.graphql"},"StatusField":{"component":"StatusField","fragment":"StatusField_renderer$normalization.graphql"}},"plural":false}

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type pageTasksPageQuery$variables = Record<PropertyKey, never>;
export type pageTasksPageQuery$data = {
  readonly tasks: ReadonlyArray<{
    readonly fields: ReadonlyArray<{
      readonly " $fragmentSpreads": FragmentRefs<"TaskFieldRenderer_field">;
    }>;
    readonly id: string;
    readonly title: string;
  }>;
};
export type pageTasksPageQuery = {
  response: pageTasksPageQuery$data;
  variables: pageTasksPageQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "pageTasksPageQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Task",
        "kind": "LinkedField",
        "name": "tasks",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
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
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "pageTasksPageQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Task",
        "kind": "LinkedField",
        "name": "tasks",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "TaskField",
            "kind": "LinkedField",
            "name": "fields",
            "plural": true,
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
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "__typename",
                    "storageKey": null
                  },
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      {
                        "args": null,
                        "documentName": "TaskFieldRenderer_field",
                        "fragmentName": "NumberField_renderer",
                        "fragmentPropName": "renderer",
                        "kind": "ModuleImport"
                      },
                      (v0/*: any*/)
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
                      },
                      (v0/*: any*/)
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
                      },
                      (v0/*: any*/)
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
                      },
                      (v0/*: any*/)
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
                      },
                      (v0/*: any*/)
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
                      },
                      (v0/*: any*/)
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
                      },
                      (v0/*: any*/)
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
                      },
                      (v0/*: any*/)
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
                      },
                      (v0/*: any*/)
                    ],
                    "type": "DateTimeField",
                    "abstractKey": null
                  }
                ],
                "storageKey": "renderer(supported:\"3XZImz\")"
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": "9be5a3f3a884431b8b7805af43b8e813",
    "metadata": {},
    "name": "pageTasksPageQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "7ca1f96c1e38d8a1da278415e7020d71";

import { PreloadableQueryRegistry } from 'relay-runtime';
PreloadableQueryRegistry.set(node.params.id, node);

export default node;
