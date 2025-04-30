/**
 * @generated SignedSource<<ef471400526ce76bb112ad06fcd3f0e0>>
 * @relayHash 8ca778f87fed09062b3b6f2fcf90d8fb
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 8ca778f87fed09062b3b6f2fcf90d8fb

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type taskByIdQuery$variables = {
  id: string;
};
export type taskByIdQuery$data = {
  readonly task: {
    readonly " $fragmentSpreads": FragmentRefs<"TaskFragment">;
  } | null | undefined;
};
export type taskByIdQuery = {
  response: taskByIdQuery$data;
  variables: taskByIdQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "taskByIdQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Task",
        "kind": "LinkedField",
        "name": "task",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "TaskFragment"
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "taskByIdQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Task",
        "kind": "LinkedField",
        "name": "task",
        "plural": false,
        "selections": [
          (v2/*: any*/),
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
                      (v2/*: any*/)
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
                      (v2/*: any*/)
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
                      (v2/*: any*/)
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
                      (v2/*: any*/)
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
                      (v2/*: any*/)
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
                      (v2/*: any*/)
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
                      (v2/*: any*/)
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
                      (v2/*: any*/)
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
                      (v2/*: any*/)
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
    "id": "8ca778f87fed09062b3b6f2fcf90d8fb",
    "metadata": {},
    "name": "taskByIdQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "a7b58bcf38b84c4862c5d2ec7fc6d33f";

export default node;
