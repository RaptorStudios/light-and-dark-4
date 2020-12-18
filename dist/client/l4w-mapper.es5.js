"use strict";

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e67) { throw _e67; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e68) { didErr = true; err = _e68; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! For license information please see l4w-mapper.js.LICENSE.txt */
var L4W_mapper;

L4W_mapper = function () {
  var e = {
    98: function _(e, t, n) {
      var i = n(15),
          o = n(645)(i);
      o.push([e.id, "\n.dialogNodeDetails[data-v-73ccf623]{\n    text-align: left;\n    padding: 0.5em;\n}\n.dialogEdgeDetails[data-v-73ccf623]{\n    text-align: left;\n\tborder: 1px dotted black;\n    margin: 0.5em;\n    padding: 0.5em;\n}\n.elementId[data-v-73ccf623] {\n    float: right;\n    font-size: smaller;\n\tcolor: rgb(80, 80, 80);\n}\n.dialogSelectionDetails[data-v-73ccf623]{\n\tborder: 1px dotted black;\n\tmargin: 0.5em;\n}\n.dialogMessage[data-v-73ccf623]{\n\tfloat: left;\n\tborder: 10px solid black;\n\tmargin: 0.5em;\n}\n.message[data-v-73ccf623]{\n    width: 21em;\n    height: 3em;\n    font-family: Oldenburg, Verdana, Geneva, Arial, Helvetica, sans-serif;\n    font-display: swap;\n    font-size: medium;\n    resize: vertical;\n}\n.nodeClosingTimeout[data-v-73ccf623]{\n    width: 6em;\n}\n", "", {
        version: 3,
        sources: ["webpack://./src/client/components/DialogEditor.vue"],
        names: [],
        mappings: ";AAmTA;IACA,gBAAA;IACA,cAAA;AACA;AACA;IACA,gBAAA;CACA,wBAAA;IACA,aAAA;IACA,cAAA;AACA;AACA;IACA,YAAA;IACA,kBAAA;CACA,sBAAA;AACA;AACA;CACA,wBAAA;CACA,aAAA;AACA;AACA;CACA,WAAA;CACA,wBAAA;CACA,aAAA;AACA;AACA;IACA,WAAA;IACA,WAAA;IACA,qEAAA;IACA,kBAAA;IACA,iBAAA;IACA,gBAAA;AACA;AACA;IACA,UAAA;AACA",
        sourcesContent: ['<template>\n    <div>\n        <div>\n            \x3c!-- Dialog node editor --\x3e\n            <div class="dialogNodeDetails">\n                <div class="elementId">N{{ node.id }}</div>\n                <textarea ref="dialogNodeMessage" class="message" type="text" placeholder="<message>" v-model="node.message"/><br>\n                \x3c!-- TODO Generic message: <select id="genericMessage"></select><br/> --\x3e\n                Face: <select ref="nodes" v-model="node.face" v-on:change="onFaceChange($event, node)">\n                    <option selected value="">&nbsp;</option>\n                    <option v-for="option in faces" v-bind:key="option" v-bind:value="option">\n                        {{ option }}\n                    </option>\n                </select>\n                Name: <input v-model="node.name" /><br />\n                Autoclose in <input ref="nodeClosingTimeout" type="number" min="0" max="10000" step="1" v-model="node.closingTimeout"/> msec<br>\n                <br>\n                <div style="float:none"/>\n                \x3c!-- Disabled edges selection, until it is needed bad enough to justify fixing the render stack overflow problem --\x3e\n                \x3c!--\n                Connect to <select ref="edges" v-on:change="onEdgeChange($event)">\n                    <option selected disabled value="">&nbsp;</option>\n                    <option v-for="option in edgeIds" v-bind:key="option" v-bind:value="option">\n                        {{ option }}\n                    </option>\n                </select> or \n                --\x3e\n                <button v-on:click="addEdge()">Create new edge</button>\n                <br>\n            </div>\n            \n            \x3c!-- Dialog edge editor --\x3e\n            <div class="dialogEdgeDetails" v-for="edge in node.edges" v-bind:key="edge.id">\n                <div class="elementId">E{{ edge.id }}</div>\n                <textarea ref="dialogEdgeMessage" class="message" type="text" placeholder="<message>" v-model="edge.message"/><br>\n\n                Condition <select ref="edgeCondition" v-model="edge.condition">\n                    <option v-for="option in edgeConditions" v-bind:key="option" v-bind:value="option">\n                        {{ option }}\n                    </option>\n                </select><br>\n                <div v-if="edge.condition">Cond. param: <input class="edgeConditionParameters" type="text" v-model="edge.conditionParams"/><br></div>\n\n                Script <select ref="edgeScript" v-model="edge.script" v-on:change="onScriptChange($event, edge)">\n                    <option v-for="option in edgeScripts" v-bind:key="option[0]" v-bind:value="option[0]">\n                        {{  option[0] + " (" + option[1] + ")" }}\n                    </option>\n                </select><br>\n                <div v-if="edge.script !== undefined">\n                    Action <select ref="edgeAction" v-model="edge.action">\n                        <option v-for="option in edge.actions" v-bind:key="option" v-bind:value="option">\n                            {{  option }}\n                        </option>\n                    </select>\n                </div>\n                \n                <div style="float:none"/>\n                <button style="color:red;float:right" title="Remove this edge (if disconnected, will be deleted when saving)" v-on:click="deleteEdge(edge)">Remove</button>\n                <br>\n                <br>\n                Connect to <select ref="nodes" v-model="edge.nodeId" v-on:change="onNodeChange($event, edge)">\n                    <option selected disabled value="">&nbsp;</option>\n                    <option v-for="option in nodeIds" v-bind:key="option" v-bind:value="option">\n                        {{ option }}\n                    </option>\n                </select>\n                <span v-if="edge.nodeId === undefined"> or <button v-on:click="addNode(edge)">Create new node</button></span>\n                <span v-else> or <button style="color:red" title="Remove this node (if disconnected, will be deleted when saving)" v-on:click="deleteNode(edge)">Remove node</button></span>            \n            </div>\n        </div>\n\n        \x3c!-- TODO --\x3e\n        \x3c!--\n        <div id="genericMessageArea" style="display:block">\n            <div class="dialogMessage">\n                Message &amp; GenericMessage editor\n\n                // A message that can be resolved to different strings, based on some conditions\n                IGenericMessage\n                    id: number; // ID of the generic string\n                    description: string; // Description of the generic string\n                    condition?: string; // Name of function that returns true if this state can be active (see Conditions.ts)\n                    values: IGenericMessageValue[]; // Array of possible values for this generic message\n                    \n                // Single value that could be used for a generic message\n                IGenericMessageValue\n                    message: string; // String of the message\n                    conditionParams: string; // Parameters to be used for evaluating the condition\n            </div>\n        </div>\n        --\x3e\n\t</div>\n</template>\n\n<script lang="ts">\nimport Vue, { PropType } from "vue"\nimport { Resource } from "../core/util/Resource";\nimport { DataDefaults } from "../../common/DataDefaults";\nimport { ResourceType } from "../../common/Constants";\nimport { Utils } from "../../common/Utils";\nimport { IDialogNode, IDialogEdge } from "../../common/model/Dialog";\nimport { DialogManager } from "../core/manager/DialogManager";\nimport { MapperPage } from "../tool/mapper/MapperPage";\n\nexport default Vue.extend({\n    name: "dialog-editor",\n    props: {\n        node: {\n            type: Object as PropType<IDialogNode>,\n            required: true\n        },\n        dialog: {\n            type: Object as PropType<IDialogNode>,\n            required: true\n        },\n        disconnectedNodes: {\n            type: Array as () => Array<IDialogNode>,\n            required: true\n        },\n        nodeIds: {\n            type: Array as () => Array<number>,\n            required: true\n        },\n        edgeIds: {\n            type: Array as () => Array<number>,\n            required: true\n        },\n        edgeConditions: {\n            type: Array as () => Array<string>,\n            default: function() {\n                return [];\n            }\n        },\n        edgeScripts: {\n            type: Map,\n            default: function() {\n                return new Map<string,string>();\n            }\n        },\n        edgeActions: {\n            type: Array as () => Array<string>,\n            default: function() {\n                return [];\n            }\n        },\n        faces: {\n            type: Array as () => Array<string>,\n            default: function() {\n                return [];\n            }\n        }\n    },\n    mounted: function() {\n        // Populate static comboboxes\n        for(let condition of Resource.listEventStateConditions()) {\n            this.edgeConditions.push(condition);\n        }\n        for(let script of Resource.listScriptClasses()) {\n            this.edgeScripts.set(script[0], script[1]);\n        }\n        if(this.node.edges !== undefined) {\n            for(let edge of this.node.edges) {\n                // Reload edge actions\n                loadEdgeScriptActions(edge);\n            }\n        }\n        let moduleContext = this;\n        Resource.listResources(ResourceType.FACE, function(list?: string[]) {\n            if(list !== undefined) {\n                for(let face of list) {\n                    moduleContext.faces.push(face);\n                }\n            }\n        });\n    },\n\n    updated: function() {\n        let edges = <HTMLSelectElement[]> this.$refs.edges;\n        if(edges !== undefined && edges[0].options !== undefined) {\n            // Reset at the first option (the empty one)\n            edges[0].options[0].selected = true;\n        }\n        let nodes = <HTMLSelectElement[]> this.$refs.nodes;\n        if(nodes !== undefined && edges !== undefined) {\n            for(let edge of edges) {\n                // Reset at the first option (the empty one)\n                if(edge.options !== undefined) {\n                    edge.options[0].selected = true;\n                }\n            }\n        }\n        // Focus node message, or last edge message\n        if(this.node !== undefined) {\n            if(Utils.isEmpty(this.node.edges)) {\n                if(this.$refs.dialogNodeMessage != undefined) {\n                    (<HTMLElement> this.$refs.dialogNodeMessage).focus();\n                }\n            } else {\n                if(this.node.edges![this.node.edges!.length - 1].message === undefined) {\n                    let lastEdge = this.$refs.dialogEdgeMessage[this.node.edges!.length - 1];\n                    lastEdge.focus();\n                }\n            }\n        }\n    },\n    methods: {\n        addEdge() {\n            if(this.node.edgeIds === undefined) {\n                Vue.set(this.node, "edgeIds", []);\n            }\n            if(this.node.edges === undefined) {\n                Vue.set(this.node, "edges", []);\n            }\n            let edgeId = getNextId(this.edgeIds);\n            this.node.edgeIds!.push(edgeId);\n            this.node.edges!.push(DataDefaults.getDialogEdge(edgeId));\n            this.edgeIds.push(edgeId);\n        },\n        deleteEdge(edge: IDialogEdge) {\n            this.node.edgeIds!.splice(this.node.edgeIds!.indexOf(edge.id), 1);\n            this.node.edges!.splice(this.node.edges!.indexOf(edge), 1);\n        },\n        addNode(edge: IDialogEdge) {\n            let nodeId = getNextId(this.nodeIds);\n            Vue.set(edge, "nodeId", nodeId);\n            Vue.set(edge, "node", DataDefaults.getDialogNode(nodeId));\n            this.nodeIds.push(nodeId);\n            // When creating a new node, immediately select it\n            MapperPage.loadDialogEditor(nodeId);\n        },\n        deleteNode(edge: IDialogEdge) {\n            // Back it up, so that it can be selected\n            // even if it it disconnected from the tree\n            this.disconnectedNodes.push(edge.node!);\n            Vue.set(edge, "nodeId", undefined);\n            Vue.set(edge, "node", undefined);\n        },\n        onEdgeChange(event: Event) {\n            let edgeId = parseInt((<HTMLSelectElement> event.target).selectedOptions.item(0)!.value);\n            if(this.node.edgeIds === undefined) {\n                Vue.set(this.node, "edgeIds", []);\n            } else if(this.node.edgeIds.includes(edgeId)) {\n                // Edge already connected, cannot duplicate it\n                return;\n            }\n            if(this.node.edges === undefined) {\n                Vue.set(this.node, "edges", []);\n            }\n            let edge = DialogManager.search(this.dialog, edgeId, true);\n            if(edge !== undefined) {\n                this.node.edgeIds!.push(edgeId);\n                this.node.edges!.push(<IDialogEdge> edge);\n            }\n        },\n        onNodeChange(event: Event, edge: IDialogEdge) {\n            let isNodeReferenced = true;\n            let nodeId = parseInt((<HTMLSelectElement> event.target).selectedOptions.item(0)!.value);\n            // Search it in the dialog tree\n            let node = DialogManager.search(this.dialog, nodeId, false);\n            if(node === undefined) {\n                // Search it in the disconnected nodes\n                for(let disconnectedNode of this.disconnectedNodes) {\n                    if(disconnectedNode.id === nodeId) {\n                        node = disconnectedNode;\n                        isNodeReferenced = false;\n                    }\n                }\n            }\n            if(node !== undefined) {\n                Vue.set(edge, "nodeReferenced", isNodeReferenced);\n                Vue.set(edge, "nodeId", nodeId);\n                Vue.set(edge, "node", <IDialogNode> node);\n            }\n        },\n        onScriptChange(event: Event, edge: IDialogEdge) {\n            loadEdgeScriptActions(edge);\n        },\n        onFaceChange(event: Event, node: IDialogNode) {\n            if(node.name === undefined && !Utils.isEmpty(node.face)) {\n                // Initialize the name for this dialog node with the selected faceset file name\n                node.name = node.face!.replace(".png","").replace(".jpg","");\n            }\n        }\n    }\n})\n\nfunction getNextId(ids: number[]): number {\n    let maxId = DataDefaults.DEFAULT_ID;\n    for(let id of ids) {\n        if(id > maxId) {\n            maxId = id;\n        }\n    }\n    return maxId + 1;\n}\n\nfunction loadEdgeScriptActions(edge: IDialogEdge): void {\n    if(edge.script !== undefined) {\n        Vue.set(edge, "actions", []);\n        for(let action of Resource.listScriptActions(edge.script)) {\n            edge.actions!.push(action);\n        }\n    }\n}\n<\/script>\n\n<style scoped>\n.dialogNodeDetails{\n    text-align: left;\n    padding: 0.5em;\n}\n.dialogEdgeDetails{\n    text-align: left;\n\tborder: 1px dotted black;\n    margin: 0.5em;\n    padding: 0.5em;\n}\n.elementId {\n    float: right;\n    font-size: smaller;\n\tcolor: rgb(80, 80, 80);\n}\n.dialogSelectionDetails{\n\tborder: 1px dotted black;\n\tmargin: 0.5em;\n}\n.dialogMessage{\n\tfloat: left;\n\tborder: 10px solid black;\n\tmargin: 0.5em;\n}\n.message{\n    width: 21em;\n    height: 3em;\n    font-family: Oldenburg, Verdana, Geneva, Arial, Helvetica, sans-serif;\n    font-display: swap;\n    font-size: medium;\n    resize: vertical;\n}\n.nodeClosingTimeout{\n    width: 6em;\n}\n</style>'],
        sourceRoot: ""
      }]), e.exports = o;
    },
    489: function _(e, t, n) {
      var i = n(15),
          o = n(645)(i);
      o.push([e.id, '\nul[data-v-06f2eb40] {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n}\n.dialogSummaryRow[data-v-06f2eb40] {\n\t-webkit-user-select: none;  /* Chrome all / Safari all */\n\t-moz-user-select: none;     /* Firefox all */\n\t-ms-user-select: none;      /* IE 10+ */\n\tuser-select: none;          /* Likely future */  \n\tborder: 1px solid transparent;\n    cursor: pointer;\n    display: inline-block; /* Avoid newLine after list custom symbol */\n}\n.dialogSummaryRow[data-v-06f2eb40]:hover {\n\tborder: 1px dotted blue;\n}\n.edge[data-v-06f2eb40] {\n    font-style: italic;\n    display: inline-block;\n}\n.edge[data-v-06f2eb40]:before {\n    content: ">"; /* Insert content as new list symbol */\n    margin-right: 6px;\n    font-style: italic;\n}\n.elementId[data-v-06f2eb40] {\n    display: inline-block;\n\tfont-size: smaller;\n\tcolor: rgb(80, 80, 80);\n}\n.dialogSummarySubnode[data-v-06f2eb40] {\n    margin-left: 2em;\n}\n.endElement[data-v-06f2eb40] {\n    width: 100%;\n    height: 0.5em;\n    border-top:1px solid black;\n}\n.jumpElement[data-v-06f2eb40] {\n    width: 100%;\n    height: 0.5em;\n    border-top:1px dashed black;\n}\n.selectedNode[data-v-06f2eb40] {\n    background: lightyellow;\n}\n.unselectedNode[data-v-06f2eb40] {\n    background: white;\n}\n', "", {
        version: 3,
        sources: ["webpack://./src/client/components/DialogSummary.vue"],
        names: [],
        mappings: ";AAgEA;IACA,gBAAA;IACA,UAAA;IACA,SAAA;AACA;AACA;CACA,yBAAA,GAAA,4BAAA;CACA,sBAAA,MAAA,gBAAA;CACA,qBAAA,OAAA,WAAA;CACA,iBAAA,WAAA,kBAAA;CACA,6BAAA;IACA,eAAA;IACA,qBAAA,EAAA,2CAAA;AACA;AACA;CACA,uBAAA;AACA;AACA;IACA,kBAAA;IACA,qBAAA;AACA;AACA;IACA,YAAA,EAAA,sCAAA;IACA,iBAAA;IACA,kBAAA;AACA;AACA;IACA,qBAAA;CACA,kBAAA;CACA,sBAAA;AACA;AACA;IACA,gBAAA;AACA;AACA;IACA,WAAA;IACA,aAAA;IACA,0BAAA;AACA;AACA;IACA,WAAA;IACA,aAAA;IACA,2BAAA;AACA;AACA;IACA,uBAAA;AACA;AACA;IACA,iBAAA;AACA",
        sourcesContent: ['<template>\n    <div :class="[ selectedNodeId.id === node.id ? \'selectedNode\' : \'unselectedNode\' ]">\n        <div class="dialogSummaryRow" v-bind:onclick="\'L4W_mapper.MapperPage.loadDialogEditor(\' + node.id + \')\'">\n            <a v-bind:name="node.id" />\n            {{ node.message | str_limit() }} <div class="elementId">N{{ node.id }}</div>\n        </div>\n        <ul>\n            <li v-for="edge in node.edges" v-bind:key="edge.id">\n                <div class="dialogSummaryRow" v-bind:onclick="\'L4W_mapper.MapperPage.loadDialogEditor(\' + node.id + \')\'">\n                    <div class="edge">{{ edge.message | str_limit() }}</div> <div class="elementId">E{{ edge.id }}</div>\n                </div>\n                <div v-if="edge.node !== undefined" class="dialogSummarySubnode">\n                    <div v-if="!edge.nodeReferenced">\n                        \x3c!-- Recursive template render --\x3e\n                        <dialog-summary :node="edge.node" :selected-node-id="selectedNodeId" />\n                    </div>\n                    <div v-else>\n                        \x3c!-- To avoid repetition, only include message --\x3e\n                        <div class="dialogSummaryRow unselectedNode" v-bind:onclick="\'L4W_mapper.MapperPage.loadDialogEditor(\' + edge.node.id + \')\'">\n                            {{ edge.node.message | str_limit() }} <div class="elementId"><a v-bind:href="\'#\' + edge.node.id">(N{{ edge.node.id }})</a></div>\n                        </div>\n                        <div class="jumpElement" />\n                    </div>\n                </div>\n            </li>\n        </ul>\n        <div class="endElement" />\n    </div>\n</template>\n\n<script lang="ts">\nimport Vue, { PropType } from "vue"\nimport { IDialogNode } from "../../common/model/Dialog";\n\nexport default Vue.extend({\n    name: "dialog-summary",\n    props: {\n        node: {\n            type: Object as PropType<IDialogNode>,\n            required: true\n        },\n        selectedNodeId: {\n            type: Object as PropType<{ id: number }>,\n            required: true\n        }\n    }\n})\n\nVue.filter("str_limit", function (value: string, size?: number) {\n    if (value === undefined) {\n        return "";\n    } \n    value = value.toString();\n    if(size === undefined) {\n        size = 45;\n    }\n    if (value.length <= size) {\n        return value;\n    }\n    return value.substr(0, size) + "...";\n});\n<\/script>\n\n<style scoped>\nul {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n}\n.dialogSummaryRow {\n\t-webkit-user-select: none;  /* Chrome all / Safari all */\n\t-moz-user-select: none;     /* Firefox all */\n\t-ms-user-select: none;      /* IE 10+ */\n\tuser-select: none;          /* Likely future */  \n\tborder: 1px solid transparent;\n    cursor: pointer;\n    display: inline-block; /* Avoid newLine after list custom symbol */\n}\n.dialogSummaryRow:hover {\n\tborder: 1px dotted blue;\n}\n.edge {\n    font-style: italic;\n    display: inline-block;\n}\n.edge:before {\n    content: ">"; /* Insert content as new list symbol */\n    margin-right: 6px;\n    font-style: italic;\n}\n.elementId {\n    display: inline-block;\n\tfont-size: smaller;\n\tcolor: rgb(80, 80, 80);\n}\n.dialogSummarySubnode {\n    margin-left: 2em;\n}\n.endElement {\n    width: 100%;\n    height: 0.5em;\n    border-top:1px solid black;\n}\n.jumpElement {\n    width: 100%;\n    height: 0.5em;\n    border-top:1px dashed black;\n}\n.selectedNode {\n    background: lightyellow;\n}\n.unselectedNode {\n    background: white;\n}\n</style>'],
        sourceRoot: ""
      }]), e.exports = o;
    },
    201: function _(e, t, n) {
      var i = n(15),
          o = n(645)(i);
      o.push([e.id, "\n.root[data-v-08ab550b] {\n    width: auto;\n    text-align: center;\n    margin-bottom: 1em;\n}\n.root div[data-v-08ab550b] {\n    margin:0.5em;\n    text-align: center;\n}\n.statusIcon[data-v-08ab550b] {\n    margin: 0.5em;\n    border-radius: 100%;\n    width: 40px;\n    height: 40px;\n}\n.loggedIcon[data-v-08ab550b] {\n    border-width: 2px;\n    border-style: solid;\n    border-color: green;\n    background-color: lightgreen;\n}\n.unloggedIcon[data-v-08ab550b] {\n    border-width: 2px;\n    border-style: dashed;\n    border-color: gray;\n    background-color: lightgray;\n}\n.loading[data-v-08ab550b] {\n    width: 2em;\n    height: 2em;\n}\n", "", {
        version: 3,
        sources: ["webpack://./src/client/components/Login.vue"],
        names: [],
        mappings: ";AAwMA;IACA,WAAA;IACA,kBAAA;IACA,kBAAA;AACA;AACA;IACA,YAAA;IACA,kBAAA;AACA;AACA;IACA,aAAA;IACA,mBAAA;IACA,WAAA;IACA,YAAA;AACA;AACA;IACA,iBAAA;IACA,mBAAA;IACA,mBAAA;IACA,4BAAA;AACA;AACA;IACA,iBAAA;IACA,oBAAA;IACA,kBAAA;IACA,2BAAA;AACA;AACA;IACA,UAAA;IACA,WAAA;AACA",
        sourcesContent: ['<template>\n    <div class="root">\n        <script type="application/javascript" async defer crossorigin="anonymous" src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v6.0&appId=1885551381575204"><\/script>\n        <script type="application/javascript" async defer src="https://apis.google.com/js/platform.js?onload=gAsyncInit"><\/script>\n        <div v-show="!loginStatus">\n            \x3c!-- <img class="statusIcon unloggedIcon" src="/style/ui/unlogged.png" alt="Unlogged icon" title="You are not currently logged in"> --\x3e\n            \x3c!-- Google login --\x3e\n            <div class="g-signin2" data-onsuccess="gLoginCallback" data-theme="dark"></div>\n            \x3c!-- Facebook login --\x3e\n            <div class="fb-login-button" data-size="large" data-button-type="login_with" data-layout="default" data-auto-logout-link="false"\n                data-use-continue-as="false" data-width="" data-scope="email" ></div>\n            <br>\n            <slot name="unlogged"></slot>\n        </div>\n        <div v-if="loginStatus">\n            <img class="statusIcon loggedIcon" src="/style/ui/logged.png" alt="Logged icon" title="You are currently logged in!">\n            <br>\n            <div v-if="flagLoggingOut">\n                <img class="loading" src="/style/ui/spinner.gif" alt="logging out..." />\n            </div>\n            <div v-else>\n                <button v-on:click="logout">Logout</button>\n                <br><br>\n                <slot name="logged"></slot>\n            </div>\n        </div>\n    </div>\n</template>\n\n<script lang="ts">\nimport Vue from "vue"\nimport { Resource } from "../core/util/Resource"\nimport { AuthService, IAuthRequest, IAuthResponse } from "../../common/ServerAPI"\n\ndeclare let FB: any; // Loaded from Facebook script\ndeclare let gapi: any; // Loaded from Google script\n\ninterface FBLoginResponse {\n    status: "connected" | "not_authorized" | "unknown",\n    authResponse?: {\n        accessToken: string,\n        expiresIn: any,\n        signedRequest: any,\n        userID: string\n    }\n}\n\nexport default Vue.extend({\n    name: "login",\n    props: {\n        showIcons: {\n            type: Boolean,\n            required: false,\n            default: true\n        }\n    },\n    data: function (): {\n        loginStatus: boolean,\n        loginService?: AuthService,\n        fbToken?: string,\n        flagLoggingOut: boolean\n    } {\n        return {\n            loginStatus: false,\n            loginService: undefined,\n            fbToken: undefined,\n            flagLoggingOut: false\n       }\n    },\n    created: function() {\n        // Add Google login meta tags\n        let meta = document.createElement("meta");\n        meta.name = "google-signin-scope";\n        meta.content = "profile email";\n        document.head.appendChild(meta);\n\n        meta = document.createElement("meta");\n        meta.name = "google-signin-client_id";\n        meta.content = "106250700124-f3tm8cc2l6raccir6e5fi9osccuvhaj0.apps.googleusercontent.com";\n        document.head.appendChild(meta);\n\n        // Init Facebook login\n        let vueScope = this;\n        window["fbAsyncInit"] = function() {\n            FB.init({\n                appId: "1885551381575204",\n                autoLogAppEvents: false,\n                cookie: true,\n                xfbml: false,\n                version : "v6.0"\n            });\n            FB.Event.subscribe("auth.statusChange", function(response: FBLoginResponse) {\n                vueScope.fbLoginStatusChangeCallback(response);\n            });\n            FB.getLoginStatus(function(response: FBLoginResponse) {\n                vueScope.fbLoginStatusChangeCallback(response);\n            });\n        };\n\n        // Init Google login\n        window["gAsyncInit"] = function() {\n            gapi.load("auth2", function() {\n                const authInstance = gapi.auth2.getAuthInstance();\n                if(authInstance.isSignedIn.get()) {\n                    Vue.set(vueScope, "loginStatus", true);\n                    Vue.set(vueScope, "loginService", "google");\n                }\n            });\n        };\n        window["gLoginCallback"] = this.gLoginCallback;\n    },\n    methods: {\n        logoutCallback: function() {\n            Vue.set(this, "loginStatus", false);\n            Vue.set(this, "loginService", undefined);\n            Vue.set(this, "flagLoggingOut", false);\n        },\n        logout: function logout() {\n            // Check which service is used, only logout from that service\n            if(this.loginStatus) {\n                switch(this.loginService) {\n                case "facebook":\n                    // Facebook logout\n                    if(this.fbToken !== undefined) {\n                        // Since Facebook logout is slow, display an animation and hide the buttons\n                        Vue.set(this, "flagLoggingOut", true);\n                        let vueScope = this;\n                        // Remove permission, so that the user is asked to authenticate the app again\n                        // (seems like FB.logout() isn\'t enough, if you refresh the page you are still logged)\n                        FB.api("/me/permissions", "delete", {\n                            access_token: vueScope.fbToken\n                        }, function(response: any) {\n                            if(response.success !== true) {\n                                console.error("Facebook permission revoking failed: ", response);\n                            }\n                            FB.logout(function(response: FBLoginResponse)  {\n                                vueScope.logoutCallback();\n                            });\n                        });\n                        this.fbToken = undefined;\n                    }\n                    break;\n                case "google":\n                    // Google logout\n                    let auth2 = gapi.auth2.getAuthInstance();\n                    auth2.signOut().then(this.logoutCallback());\n                    break;\n                default:\n                    console.error("Unexpected loginService: " + this.loginService);\n                }\n                Resource.sendGETRequest("logout", function(response?: string) {\n                    // Nothing to do\n                });\n            } else {\n                console.error("Cannot logout, user is not currently logged in")\n            }\n        },\n        fbLoginStatusChangeCallback: function(response: FBLoginResponse) {\n            if(response.status === "connected") {\n                this.fbToken = response.authResponse!.accessToken;\n                let request: IAuthRequest = {\n                    service: "facebook",\n                    token: response.authResponse!.accessToken,\n                    userId: response.authResponse!.userID\n                };\n                this.doLogin(request);\n            }\n        },\n        gLoginCallback: function(googleUser: any) {\n            let request: IAuthRequest = {\n                service: "google",\n                token: googleUser.getAuthResponse().id_token\n            };\n            this.doLogin(request);\n        },\n        doLogin(request: IAuthRequest) {\n            let vueScope = this;\n            Resource.sendPOSTRequest("/auth", JSON.stringify(request), function(response?: string) {\n                if(response !== undefined) {\n                    try {\n                        let authResponse: IAuthResponse = JSON.parse(response);\n                        if(authResponse.result) {\n                            Vue.set(vueScope, "loginStatus", true);\n                            Vue.set(vueScope, "loginService", request.service);\n                            return;\n                        }\n                    } catch(e) {\n                        console.error(response);\n                    }\n                }\n                Vue.set(vueScope, "loginStatus", false);\n                Vue.set(vueScope, "loginService", undefined);\n                console.error("Logged with " + request.service + " failed");\n            });\n        }\n    }\n});\n<\/script>\n\n<style scoped>\n.root {\n    width: auto;\n    text-align: center;\n    margin-bottom: 1em;\n}\n.root div {\n    margin:0.5em;\n    text-align: center;\n}\n.statusIcon {\n    margin: 0.5em;\n    border-radius: 100%;\n    width: 40px;\n    height: 40px;\n}\n.loggedIcon {\n    border-width: 2px;\n    border-style: solid;\n    border-color: green;\n    background-color: lightgreen;\n}\n.unloggedIcon {\n    border-width: 2px;\n    border-style: dashed;\n    border-color: gray;\n    background-color: lightgray;\n}\n.loading {\n    width: 2em;\n    height: 2em;   \n}\n</style>'],
        sourceRoot: ""
      }]), e.exports = o;
    },
    645: function _(e) {
      "use strict";

      e.exports = function (e) {
        var t = [];
        return t.toString = function () {
          return this.map(function (t) {
            var n = e(t);
            return t[2] ? "@media ".concat(t[2], " {").concat(n, "}") : n;
          }).join("");
        }, t.i = function (e, n, i) {
          "string" == typeof e && (e = [[null, e, ""]]);
          var o = {};
          if (i) for (var r = 0; r < this.length; r++) {
            var a = this[r][0];
            null != a && (o[a] = !0);
          }

          for (var s = 0; s < e.length; s++) {
            var l = [].concat(e[s]);
            i && o[l[0]] || (n && (l[2] ? l[2] = "".concat(n, " and ").concat(l[2]) : l[2] = n), t.push(l));
          }
        }, t;
      };
    },
    15: function _(e) {
      "use strict";

      function t(e, t) {
        (null == t || t > e.length) && (t = e.length);

        for (var n = 0, i = new Array(t); n < t; n++) {
          i[n] = e[n];
        }

        return i;
      }

      e.exports = function (e) {
        var n,
            i,
            o = (i = 4, function (e) {
          if (Array.isArray(e)) return e;
        }(n = e) || function (e, t) {
          if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
            var n = [],
                i = !0,
                o = !1,
                r = void 0;

            try {
              for (var a, s = e[Symbol.iterator](); !(i = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); i = !0) {
                ;
              }
            } catch (e) {
              o = !0, r = e;
            } finally {
              try {
                i || null == s["return"] || s["return"]();
              } finally {
                if (o) throw r;
              }
            }

            return n;
          }
        }(n, i) || function (e, n) {
          if (e) {
            if ("string" == typeof e) return t(e, n);
            var i = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === i && e.constructor && (i = e.constructor.name), "Map" === i || "Set" === i ? Array.from(e) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? t(e, n) : void 0;
          }
        }(n, i) || function () {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }()),
            r = o[1],
            a = o[3];

        if ("function" == typeof btoa) {
          var s = btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
              l = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),
              c = "/*# ".concat(l, " */"),
              d = a.sources.map(function (e) {
            return "/*# sourceURL=".concat(a.sourceRoot || "").concat(e, " */");
          });
          return [r].concat(d).concat([c]).join("\n");
        }

        return [r].join("\n");
      };
    },
    632: function _(e, t, n) {
      "use strict";

      n.r(t), n.d(t, {
        Constant: function Constant() {
          return Rs;
        },
        Mapper: function Mapper() {
          return El;
        },
        MapperPage: function MapperPage() {
          return _l;
        }
      });
      var i = {};
      n.r(i), n.d(i, {
        BaseScript: function BaseScript() {
          return Zs;
        },
        DEFAULT_DIALOG: function DEFAULT_DIALOG() {
          return Xs;
        },
        DEFAULT_MESSAGE: function DEFAULT_MESSAGE() {
          return Qs;
        },
        Script1: function Script1() {
          return tl;
        },
        Transports: function Transports() {
          return el;
        }
      });
      var o = Object.freeze({});

      function r(e) {
        return null == e;
      }

      function a(e) {
        return null != e;
      }

      function s(e) {
        return !0 === e;
      }

      function l(e) {
        return "string" == typeof e || "number" == typeof e || "symbol" == _typeof(e) || "boolean" == typeof e;
      }

      function c(e) {
        return null !== e && "object" == _typeof(e);
      }

      var d = Object.prototype.toString;

      function u(e) {
        return "[object Object]" === d.call(e);
      }

      function f(e) {
        var t = parseFloat(String(e));
        return t >= 0 && Math.floor(t) === t && isFinite(e);
      }

      function p(e) {
        return a(e) && "function" == typeof e.then && "function" == typeof e["catch"];
      }

      function g(e) {
        return null == e ? "" : Array.isArray(e) || u(e) && e.toString === d ? JSON.stringify(e, null, 2) : String(e);
      }

      function h(e) {
        var t = parseFloat(e);
        return isNaN(t) ? e : t;
      }

      function v(e, t) {
        for (var n = Object.create(null), i = e.split(","), o = 0; o < i.length; o++) {
          n[i[o]] = !0;
        }

        return t ? function (e) {
          return n[e.toLowerCase()];
        } : function (e) {
          return n[e];
        };
      }

      var m = v("slot,component", !0),
          y = v("key,ref,slot,slot-scope,is");

      function A(e, t) {
        if (e.length) {
          var n = e.indexOf(t);
          if (n > -1) return e.splice(n, 1);
        }
      }

      var b = Object.prototype.hasOwnProperty;

      function E(e, t) {
        return b.call(e, t);
      }

      function _(e) {
        var t = Object.create(null);
        return function (n) {
          return t[n] || (t[n] = e(n));
        };
      }

      var C = /-(\w)/g,
          w = _(function (e) {
        return e.replace(C, function (e, t) {
          return t ? t.toUpperCase() : "";
        });
      }),
          S = _(function (e) {
        return e.charAt(0).toUpperCase() + e.slice(1);
      }),
          I = /\B([A-Z])/g,
          T = _(function (e) {
        return e.replace(I, "-$1").toLowerCase();
      }),
          k = Function.prototype.bind ? function (e, t) {
        return e.bind(t);
      } : function (e, t) {
        function n(n) {
          var i = arguments.length;
          return i ? i > 1 ? e.apply(t, arguments) : e.call(t, n) : e.call(t);
        }

        return n._length = e.length, n;
      };

      function x(e, t) {
        t = t || 0;

        for (var n = e.length - t, i = new Array(n); n--;) {
          i[n] = e[n + t];
        }

        return i;
      }

      function M(e, t) {
        for (var n in t) {
          e[n] = t[n];
        }

        return e;
      }

      function N(e) {
        for (var t = {}, n = 0; n < e.length; n++) {
          e[n] && M(t, e[n]);
        }

        return t;
      }

      function D(e, t, n) {}

      var O = function O(e, t, n) {
        return !1;
      },
          L = function L(e) {
        return e;
      };

      function R(e, t) {
        if (e === t) return !0;
        var n = c(e),
            i = c(t);
        if (!n || !i) return !n && !i && String(e) === String(t);

        try {
          var o = Array.isArray(e),
              r = Array.isArray(t);
          if (o && r) return e.length === t.length && e.every(function (e, n) {
            return R(e, t[n]);
          });
          if (e instanceof Date && t instanceof Date) return e.getTime() === t.getTime();
          if (o || r) return !1;
          var a = Object.keys(e),
              s = Object.keys(t);
          return a.length === s.length && a.every(function (n) {
            return R(e[n], t[n]);
          });
        } catch (e) {
          return !1;
        }
      }

      function P(e, t) {
        for (var n = 0; n < e.length; n++) {
          if (R(e[n], t)) return n;
        }

        return -1;
      }

      function B(e) {
        var t = !1;
        return function () {
          t || (t = !0, e.apply(this, arguments));
        };
      }

      var j = "data-server-rendered",
          F = ["component", "directive", "filter"],
          U = ["beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated", "errorCaptured", "serverPrefetch"],
          W = {
        optionMergeStrategies: Object.create(null),
        silent: !1,
        productionTip: !1,
        devtools: !1,
        performance: !1,
        errorHandler: null,
        warnHandler: null,
        ignoredElements: [],
        keyCodes: Object.create(null),
        isReservedTag: O,
        isReservedAttr: O,
        isUnknownElement: O,
        getTagNamespace: D,
        parsePlatformTagName: L,
        mustUseProp: O,
        async: !0,
        _lifecycleHooks: U
      },
          H = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

      function G(e) {
        var t = (e + "").charCodeAt(0);
        return 36 === t || 95 === t;
      }

      function V(e, t, n, i) {
        Object.defineProperty(e, t, {
          value: n,
          enumerable: !!i,
          writable: !0,
          configurable: !0
        });
      }

      var q,
          z = new RegExp("[^" + H.source + ".$_\\d]"),
          Y = ("__proto__" in {}),
          K = "undefined" != typeof window,
          J = "undefined" != typeof WXEnvironment && !!WXEnvironment.platform,
          Q = J && WXEnvironment.platform.toLowerCase(),
          X = K && window.navigator.userAgent.toLowerCase(),
          Z = X && /msie|trident/.test(X),
          ee = X && X.indexOf("msie 9.0") > 0,
          te = X && X.indexOf("edge/") > 0,
          ne = (X && X.indexOf("android"), X && /iphone|ipad|ipod|ios/.test(X) || "ios" === Q),
          ie = (X && /chrome\/\d+/.test(X), X && /phantomjs/.test(X), X && X.match(/firefox\/(\d+)/)),
          oe = {}.watch,
          re = !1;
      if (K) try {
        var ae = {};
        Object.defineProperty(ae, "passive", {
          get: function get() {
            re = !0;
          }
        }), window.addEventListener("test-passive", null, ae);
      } catch (e) {}

      var se = function se() {
        return void 0 === q && (q = !K && !J && void 0 !== n.g && n.g.process && "server" === n.g.process.env.VUE_ENV), q;
      },
          le = K && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

      function ce(e) {
        return "function" == typeof e && /native code/.test(e.toString());
      }

      var de,
          ue = "undefined" != typeof Symbol && ce(Symbol) && "undefined" != typeof Reflect && ce(Reflect.ownKeys);
      de = "undefined" != typeof Set && ce(Set) ? Set : function () {
        function e() {
          this.set = Object.create(null);
        }

        return e.prototype.has = function (e) {
          return !0 === this.set[e];
        }, e.prototype.add = function (e) {
          this.set[e] = !0;
        }, e.prototype.clear = function () {
          this.set = Object.create(null);
        }, e;
      }();

      var fe = D,
          pe = 0,
          ge = function ge() {
        this.id = pe++, this.subs = [];
      };

      ge.prototype.addSub = function (e) {
        this.subs.push(e);
      }, ge.prototype.removeSub = function (e) {
        A(this.subs, e);
      }, ge.prototype.depend = function () {
        ge.target && ge.target.addDep(this);
      }, ge.prototype.notify = function () {
        for (var e = this.subs.slice(), t = 0, n = e.length; t < n; t++) {
          e[t].update();
        }
      }, ge.target = null;
      var he = [];

      function ve(e) {
        he.push(e), ge.target = e;
      }

      function me() {
        he.pop(), ge.target = he[he.length - 1];
      }

      var ye = function ye(e, t, n, i, o, r, a, s) {
        this.tag = e, this.data = t, this.children = n, this.text = i, this.elm = o, this.ns = void 0, this.context = r, this.fnContext = void 0, this.fnOptions = void 0, this.fnScopeId = void 0, this.key = t && t.key, this.componentOptions = a, this.componentInstance = void 0, this.parent = void 0, this.raw = !1, this.isStatic = !1, this.isRootInsert = !0, this.isComment = !1, this.isCloned = !1, this.isOnce = !1, this.asyncFactory = s, this.asyncMeta = void 0, this.isAsyncPlaceholder = !1;
      },
          Ae = {
        child: {
          configurable: !0
        }
      };

      Ae.child.get = function () {
        return this.componentInstance;
      }, Object.defineProperties(ye.prototype, Ae);

      var be = function be(e) {
        void 0 === e && (e = "");
        var t = new ye();
        return t.text = e, t.isComment = !0, t;
      };

      function Ee(e) {
        return new ye(void 0, void 0, void 0, String(e));
      }

      function _e(e) {
        var t = new ye(e.tag, e.data, e.children && e.children.slice(), e.text, e.elm, e.context, e.componentOptions, e.asyncFactory);
        return t.ns = e.ns, t.isStatic = e.isStatic, t.key = e.key, t.isComment = e.isComment, t.fnContext = e.fnContext, t.fnOptions = e.fnOptions, t.fnScopeId = e.fnScopeId, t.asyncMeta = e.asyncMeta, t.isCloned = !0, t;
      }

      var Ce = Array.prototype,
          we = Object.create(Ce);
      ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach(function (e) {
        var t = Ce[e];
        V(we, e, function () {
          for (var n = [], i = arguments.length; i--;) {
            n[i] = arguments[i];
          }

          var o,
              r = t.apply(this, n),
              a = this.__ob__;

          switch (e) {
            case "push":
            case "unshift":
              o = n;
              break;

            case "splice":
              o = n.slice(2);
          }

          return o && a.observeArray(o), a.dep.notify(), r;
        });
      });
      var Se = Object.getOwnPropertyNames(we),
          Ie = !0;

      function Te(e) {
        Ie = e;
      }

      var ke = function ke(e) {
        this.value = e, this.dep = new ge(), this.vmCount = 0, V(e, "__ob__", this), Array.isArray(e) ? (Y ? function (e, t) {
          e.__proto__ = t;
        }(e, we) : function (e, t, n) {
          for (var i = 0, o = n.length; i < o; i++) {
            var r = n[i];
            V(e, r, t[r]);
          }
        }(e, we, Se), this.observeArray(e)) : this.walk(e);
      };

      function xe(e, t) {
        var n;
        if (c(e) && !(e instanceof ye)) return E(e, "__ob__") && e.__ob__ instanceof ke ? n = e.__ob__ : Ie && !se() && (Array.isArray(e) || u(e)) && Object.isExtensible(e) && !e._isVue && (n = new ke(e)), t && n && n.vmCount++, n;
      }

      function Me(e, t, n, i, o) {
        var r = new ge(),
            a = Object.getOwnPropertyDescriptor(e, t);

        if (!a || !1 !== a.configurable) {
          var s = a && a.get,
              l = a && a.set;
          s && !l || 2 !== arguments.length || (n = e[t]);
          var c = !o && xe(n);
          Object.defineProperty(e, t, {
            enumerable: !0,
            configurable: !0,
            get: function get() {
              var t = s ? s.call(e) : n;
              return ge.target && (r.depend(), c && (c.dep.depend(), Array.isArray(t) && Oe(t))), t;
            },
            set: function set(t) {
              var i = s ? s.call(e) : n;
              t === i || t != t && i != i || s && !l || (l ? l.call(e, t) : n = t, c = !o && xe(t), r.notify());
            }
          });
        }
      }

      function Ne(e, t, n) {
        if (Array.isArray(e) && f(t)) return e.length = Math.max(e.length, t), e.splice(t, 1, n), n;
        if (t in e && !(t in Object.prototype)) return e[t] = n, n;
        var i = e.__ob__;
        return e._isVue || i && i.vmCount ? n : i ? (Me(i.value, t, n), i.dep.notify(), n) : (e[t] = n, n);
      }

      function De(e, t) {
        if (Array.isArray(e) && f(t)) e.splice(t, 1);else {
          var n = e.__ob__;
          e._isVue || n && n.vmCount || E(e, t) && (delete e[t], n && n.dep.notify());
        }
      }

      function Oe(e) {
        for (var t = void 0, n = 0, i = e.length; n < i; n++) {
          (t = e[n]) && t.__ob__ && t.__ob__.dep.depend(), Array.isArray(t) && Oe(t);
        }
      }

      ke.prototype.walk = function (e) {
        for (var t = Object.keys(e), n = 0; n < t.length; n++) {
          Me(e, t[n]);
        }
      }, ke.prototype.observeArray = function (e) {
        for (var t = 0, n = e.length; t < n; t++) {
          xe(e[t]);
        }
      };
      var Le = W.optionMergeStrategies;

      function $e(e, t) {
        if (!t) return e;

        for (var n, i, o, r = ue ? Reflect.ownKeys(t) : Object.keys(t), a = 0; a < r.length; a++) {
          "__ob__" !== (n = r[a]) && (i = e[n], o = t[n], E(e, n) ? i !== o && u(i) && u(o) && $e(i, o) : Ne(e, n, o));
        }

        return e;
      }

      function Re(e, t, n) {
        return n ? function () {
          var i = "function" == typeof t ? t.call(n, n) : t,
              o = "function" == typeof e ? e.call(n, n) : e;
          return i ? $e(i, o) : o;
        } : t ? e ? function () {
          return $e("function" == typeof t ? t.call(this, this) : t, "function" == typeof e ? e.call(this, this) : e);
        } : t : e;
      }

      function Pe(e, t) {
        var n = t ? e ? e.concat(t) : Array.isArray(t) ? t : [t] : e;
        return n ? function (e) {
          for (var t = [], n = 0; n < e.length; n++) {
            -1 === t.indexOf(e[n]) && t.push(e[n]);
          }

          return t;
        }(n) : n;
      }

      function Be(e, t, n, i) {
        var o = Object.create(e || null);
        return t ? M(o, t) : o;
      }

      Le.data = function (e, t, n) {
        return n ? Re(e, t, n) : t && "function" != typeof t ? e : Re(e, t);
      }, U.forEach(function (e) {
        Le[e] = Pe;
      }), F.forEach(function (e) {
        Le[e + "s"] = Be;
      }), Le.watch = function (e, t, n, i) {
        if (e === oe && (e = void 0), t === oe && (t = void 0), !t) return Object.create(e || null);
        if (!e) return t;
        var o = {};

        for (var r in M(o, e), t) {
          var a = o[r],
              s = t[r];
          a && !Array.isArray(a) && (a = [a]), o[r] = a ? a.concat(s) : Array.isArray(s) ? s : [s];
        }

        return o;
      }, Le.props = Le.methods = Le.inject = Le.computed = function (e, t, n, i) {
        if (!e) return t;
        var o = Object.create(null);
        return M(o, e), t && M(o, t), o;
      }, Le.provide = Re;

      var je = function je(e, t) {
        return void 0 === t ? e : t;
      };

      function Fe(e, t, n) {
        if ("function" == typeof t && (t = t.options), function (e, t) {
          var n = e.props;

          if (n) {
            var i,
                o,
                r = {};
            if (Array.isArray(n)) for (i = n.length; i--;) {
              "string" == typeof (o = n[i]) && (r[w(o)] = {
                type: null
              });
            } else if (u(n)) for (var a in n) {
              o = n[a], r[w(a)] = u(o) ? o : {
                type: o
              };
            }
            e.props = r;
          }
        }(t), function (e, t) {
          var n = e.inject;

          if (n) {
            var i = e.inject = {};
            if (Array.isArray(n)) for (var o = 0; o < n.length; o++) {
              i[n[o]] = {
                from: n[o]
              };
            } else if (u(n)) for (var r in n) {
              var a = n[r];
              i[r] = u(a) ? M({
                from: r
              }, a) : {
                from: a
              };
            }
          }
        }(t), function (e) {
          var t = e.directives;
          if (t) for (var n in t) {
            var i = t[n];
            "function" == typeof i && (t[n] = {
              bind: i,
              update: i
            });
          }
        }(t), !t._base && (t["extends"] && (e = Fe(e, t["extends"], n)), t.mixins)) for (var i = 0, o = t.mixins.length; i < o; i++) {
          e = Fe(e, t.mixins[i], n);
        }
        var r,
            a = {};

        for (r in e) {
          s(r);
        }

        for (r in t) {
          E(e, r) || s(r);
        }

        function s(i) {
          var o = Le[i] || je;
          a[i] = o(e[i], t[i], n, i);
        }

        return a;
      }

      function Ue(e, t, n, i) {
        if ("string" == typeof n) {
          var o = e[t];
          if (E(o, n)) return o[n];
          var r = w(n);
          if (E(o, r)) return o[r];
          var a = S(r);
          return E(o, a) ? o[a] : o[n] || o[r] || o[a];
        }
      }

      function We(e, t, n, i) {
        var o = t[e],
            r = !E(n, e),
            a = n[e],
            s = Ve(Boolean, o.type);
        if (s > -1) if (r && !E(o, "default")) a = !1;else if ("" === a || a === T(e)) {
          var l = Ve(String, o.type);
          (l < 0 || s < l) && (a = !0);
        }

        if (void 0 === a) {
          a = function (e, t, n) {
            if (E(t, "default")) {
              var i = t["default"];
              return e && e.$options.propsData && void 0 === e.$options.propsData[n] && void 0 !== e._props[n] ? e._props[n] : "function" == typeof i && "Function" !== He(t.type) ? i.call(e) : i;
            }
          }(i, o, e);

          var c = Ie;
          Te(!0), xe(a), Te(c);
        }

        return a;
      }

      function He(e) {
        var t = e && e.toString().match(/^\s*function (\w+)/);
        return t ? t[1] : "";
      }

      function Ge(e, t) {
        return He(e) === He(t);
      }

      function Ve(e, t) {
        if (!Array.isArray(t)) return Ge(t, e) ? 0 : -1;

        for (var n = 0, i = t.length; n < i; n++) {
          if (Ge(t[n], e)) return n;
        }

        return -1;
      }

      function qe(e, t, n) {
        ve();

        try {
          if (t) for (var i = t; i = i.$parent;) {
            var o = i.$options.errorCaptured;
            if (o) for (var r = 0; r < o.length; r++) {
              try {
                if (!1 === o[r].call(i, e, t, n)) return;
              } catch (e) {
                Ye(e, i, "errorCaptured hook");
              }
            }
          }
          Ye(e, t, n);
        } finally {
          me();
        }
      }

      function ze(e, t, n, i, o) {
        var r;

        try {
          (r = n ? e.apply(t, n) : e.call(t)) && !r._isVue && p(r) && !r._handled && (r["catch"](function (e) {
            return qe(e, i, o + " (Promise/async)");
          }), r._handled = !0);
        } catch (e) {
          qe(e, i, o);
        }

        return r;
      }

      function Ye(e, t, n) {
        if (W.errorHandler) try {
          return W.errorHandler.call(null, e, t, n);
        } catch (t) {
          t !== e && Ke(t);
        }
        Ke(e);
      }

      function Ke(e, t, n) {
        if (!K && !J || "undefined" == typeof console) throw e;
        console.error(e);
      }

      var Je,
          Qe = !1,
          Xe = [],
          Ze = !1;

      function et() {
        Ze = !1;
        var e = Xe.slice(0);
        Xe.length = 0;

        for (var t = 0; t < e.length; t++) {
          e[t]();
        }
      }

      if ("undefined" != typeof Promise && ce(Promise)) {
        var tt = Promise.resolve();
        Je = function Je() {
          tt.then(et), ne && setTimeout(D);
        }, Qe = !0;
      } else if (Z || "undefined" == typeof MutationObserver || !ce(MutationObserver) && "[object MutationObserverConstructor]" !== MutationObserver.toString()) Je = "undefined" != typeof setImmediate && ce(setImmediate) ? function () {
        setImmediate(et);
      } : function () {
        setTimeout(et, 0);
      };else {
        var nt = 1,
            it = new MutationObserver(et),
            ot = document.createTextNode(String(nt));
        it.observe(ot, {
          characterData: !0
        }), Je = function Je() {
          nt = (nt + 1) % 2, ot.data = String(nt);
        }, Qe = !0;
      }

      function rt(e, t) {
        var n;
        if (Xe.push(function () {
          if (e) try {
            e.call(t);
          } catch (e) {
            qe(e, t, "nextTick");
          } else n && n(t);
        }), Ze || (Ze = !0, Je()), !e && "undefined" != typeof Promise) return new Promise(function (e) {
          n = e;
        });
      }

      var at = new de();

      function st(e) {
        lt(e, at), at.clear();
      }

      function lt(e, t) {
        var n,
            i,
            o = Array.isArray(e);

        if (!(!o && !c(e) || Object.isFrozen(e) || e instanceof ye)) {
          if (e.__ob__) {
            var r = e.__ob__.dep.id;
            if (t.has(r)) return;
            t.add(r);
          }

          if (o) for (n = e.length; n--;) {
            lt(e[n], t);
          } else for (n = (i = Object.keys(e)).length; n--;) {
            lt(e[i[n]], t);
          }
        }
      }

      var ct = _(function (e) {
        var t = "&" === e.charAt(0),
            n = "~" === (e = t ? e.slice(1) : e).charAt(0),
            i = "!" === (e = n ? e.slice(1) : e).charAt(0);
        return {
          name: e = i ? e.slice(1) : e,
          once: n,
          capture: i,
          passive: t
        };
      });

      function dt(e, t) {
        function n() {
          var e = arguments,
              i = n.fns;
          if (!Array.isArray(i)) return ze(i, null, arguments, t, "v-on handler");

          for (var o = i.slice(), r = 0; r < o.length; r++) {
            ze(o[r], null, e, t, "v-on handler");
          }
        }

        return n.fns = e, n;
      }

      function ut(e, t, n, i, o, a) {
        var l, c, d, u;

        for (l in e) {
          c = e[l], d = t[l], u = ct(l), r(c) || (r(d) ? (r(c.fns) && (c = e[l] = dt(c, a)), s(u.once) && (c = e[l] = o(u.name, c, u.capture)), n(u.name, c, u.capture, u.passive, u.params)) : c !== d && (d.fns = c, e[l] = d));
        }

        for (l in t) {
          r(e[l]) && i((u = ct(l)).name, t[l], u.capture);
        }
      }

      function ft(e, t, n) {
        var i;
        e instanceof ye && (e = e.data.hook || (e.data.hook = {}));
        var o = e[t];

        function l() {
          n.apply(this, arguments), A(i.fns, l);
        }

        r(o) ? i = dt([l]) : a(o.fns) && s(o.merged) ? (i = o).fns.push(l) : i = dt([o, l]), i.merged = !0, e[t] = i;
      }

      function pt(e, t, n, i, o) {
        if (a(t)) {
          if (E(t, n)) return e[n] = t[n], o || delete t[n], !0;
          if (E(t, i)) return e[n] = t[i], o || delete t[i], !0;
        }

        return !1;
      }

      function gt(e) {
        return l(e) ? [Ee(e)] : Array.isArray(e) ? vt(e) : void 0;
      }

      function ht(e) {
        return a(e) && a(e.text) && !1 === e.isComment;
      }

      function vt(e, t) {
        var n,
            i,
            o,
            c,
            d = [];

        for (n = 0; n < e.length; n++) {
          r(i = e[n]) || "boolean" == typeof i || (c = d[o = d.length - 1], Array.isArray(i) ? i.length > 0 && (ht((i = vt(i, (t || "") + "_" + n))[0]) && ht(c) && (d[o] = Ee(c.text + i[0].text), i.shift()), d.push.apply(d, i)) : l(i) ? ht(c) ? d[o] = Ee(c.text + i) : "" !== i && d.push(Ee(i)) : ht(i) && ht(c) ? d[o] = Ee(c.text + i.text) : (s(e._isVList) && a(i.tag) && r(i.key) && a(t) && (i.key = "__vlist" + t + "_" + n + "__"), d.push(i)));
        }

        return d;
      }

      function mt(e, t) {
        if (e) {
          for (var n = Object.create(null), i = ue ? Reflect.ownKeys(e) : Object.keys(e), o = 0; o < i.length; o++) {
            var r = i[o];

            if ("__ob__" !== r) {
              for (var a = e[r].from, s = t; s;) {
                if (s._provided && E(s._provided, a)) {
                  n[r] = s._provided[a];
                  break;
                }

                s = s.$parent;
              }

              if (!s && "default" in e[r]) {
                var l = e[r]["default"];
                n[r] = "function" == typeof l ? l.call(t) : l;
              }
            }
          }

          return n;
        }
      }

      function yt(e, t) {
        if (!e || !e.length) return {};

        for (var n = {}, i = 0, o = e.length; i < o; i++) {
          var r = e[i],
              a = r.data;
          if (a && a.attrs && a.attrs.slot && delete a.attrs.slot, r.context !== t && r.fnContext !== t || !a || null == a.slot) (n["default"] || (n["default"] = [])).push(r);else {
            var s = a.slot,
                l = n[s] || (n[s] = []);
            "template" === r.tag ? l.push.apply(l, r.children || []) : l.push(r);
          }
        }

        for (var c in n) {
          n[c].every(At) && delete n[c];
        }

        return n;
      }

      function At(e) {
        return e.isComment && !e.asyncFactory || " " === e.text;
      }

      function bt(e, t, n) {
        var i,
            r = Object.keys(t).length > 0,
            a = e ? !!e.$stable : !r,
            s = e && e.$key;

        if (e) {
          if (e._normalized) return e._normalized;
          if (a && n && n !== o && s === n.$key && !r && !n.$hasNormal) return n;

          for (var l in i = {}, e) {
            e[l] && "$" !== l[0] && (i[l] = Et(t, l, e[l]));
          }
        } else i = {};

        for (var c in t) {
          c in i || (i[c] = _t(t, c));
        }

        return e && Object.isExtensible(e) && (e._normalized = i), V(i, "$stable", a), V(i, "$key", s), V(i, "$hasNormal", r), i;
      }

      function Et(e, t, n) {
        var i = function i() {
          var e = arguments.length ? n.apply(null, arguments) : n({});
          return (e = e && "object" == _typeof(e) && !Array.isArray(e) ? [e] : gt(e)) && (0 === e.length || 1 === e.length && e[0].isComment) ? void 0 : e;
        };

        return n.proxy && Object.defineProperty(e, t, {
          get: i,
          enumerable: !0,
          configurable: !0
        }), i;
      }

      function _t(e, t) {
        return function () {
          return e[t];
        };
      }

      function Ct(e, t) {
        var n, i, o, r, s;
        if (Array.isArray(e) || "string" == typeof e) for (n = new Array(e.length), i = 0, o = e.length; i < o; i++) {
          n[i] = t(e[i], i);
        } else if ("number" == typeof e) for (n = new Array(e), i = 0; i < e; i++) {
          n[i] = t(i + 1, i);
        } else if (c(e)) if (ue && e[Symbol.iterator]) {
          n = [];

          for (var l = e[Symbol.iterator](), d = l.next(); !d.done;) {
            n.push(t(d.value, n.length)), d = l.next();
          }
        } else for (r = Object.keys(e), n = new Array(r.length), i = 0, o = r.length; i < o; i++) {
          s = r[i], n[i] = t(e[s], s, i);
        }
        return a(n) || (n = []), n._isVList = !0, n;
      }

      function wt(e, t, n, i) {
        var o,
            r = this.$scopedSlots[e];
        r ? (n = n || {}, i && (n = M(M({}, i), n)), o = r(n) || t) : o = this.$slots[e] || t;
        var a = n && n.slot;
        return a ? this.$createElement("template", {
          slot: a
        }, o) : o;
      }

      function St(e) {
        return Ue(this.$options, "filters", e) || L;
      }

      function It(e, t) {
        return Array.isArray(e) ? -1 === e.indexOf(t) : e !== t;
      }

      function Tt(e, t, n, i, o) {
        var r = W.keyCodes[t] || n;
        return o && i && !W.keyCodes[t] ? It(o, i) : r ? It(r, e) : i ? T(i) !== t : void 0;
      }

      function kt(e, t, n, i, o) {
        if (n && c(n)) {
          var r;
          Array.isArray(n) && (n = N(n));

          var a = function a(_a2) {
            if ("class" === _a2 || "style" === _a2 || y(_a2)) r = e;else {
              var s = e.attrs && e.attrs.type;
              r = i || W.mustUseProp(t, s, _a2) ? e.domProps || (e.domProps = {}) : e.attrs || (e.attrs = {});
            }
            var l = w(_a2),
                c = T(_a2);
            l in r || c in r || (r[_a2] = n[_a2], o && ((e.on || (e.on = {}))["update:" + _a2] = function (e) {
              n[_a2] = e;
            }));
          };

          for (var s in n) {
            a(s);
          }
        }

        return e;
      }

      function xt(e, t) {
        var n = this._staticTrees || (this._staticTrees = []),
            i = n[e];
        return i && !t || Nt(i = n[e] = this.$options.staticRenderFns[e].call(this._renderProxy, null, this), "__static__" + e, !1), i;
      }

      function Mt(e, t, n) {
        return Nt(e, "__once__" + t + (n ? "_" + n : ""), !0), e;
      }

      function Nt(e, t, n) {
        if (Array.isArray(e)) for (var i = 0; i < e.length; i++) {
          e[i] && "string" != typeof e[i] && Dt(e[i], t + "_" + i, n);
        } else Dt(e, t, n);
      }

      function Dt(e, t, n) {
        e.isStatic = !0, e.key = t, e.isOnce = n;
      }

      function Ot(e, t) {
        if (t && u(t)) {
          var n = e.on = e.on ? M({}, e.on) : {};

          for (var i in t) {
            var o = n[i],
                r = t[i];
            n[i] = o ? [].concat(o, r) : r;
          }
        }

        return e;
      }

      function Lt(e, t, n, i) {
        t = t || {
          $stable: !n
        };

        for (var o = 0; o < e.length; o++) {
          var r = e[o];
          Array.isArray(r) ? Lt(r, t, n) : r && (r.proxy && (r.fn.proxy = !0), t[r.key] = r.fn);
        }

        return i && (t.$key = i), t;
      }

      function $t(e, t) {
        for (var n = 0; n < t.length; n += 2) {
          var i = t[n];
          "string" == typeof i && i && (e[t[n]] = t[n + 1]);
        }

        return e;
      }

      function Rt(e, t) {
        return "string" == typeof e ? t + e : e;
      }

      function Pt(e) {
        e._o = Mt, e._n = h, e._s = g, e._l = Ct, e._t = wt, e._q = R, e._i = P, e._m = xt, e._f = St, e._k = Tt, e._b = kt, e._v = Ee, e._e = be, e._u = Lt, e._g = Ot, e._d = $t, e._p = Rt;
      }

      function Bt(e, t, n, i, r) {
        var a,
            l = this,
            c = r.options;
        E(i, "_uid") ? (a = Object.create(i))._original = i : (a = i, i = i._original);
        var d = s(c._compiled),
            u = !d;
        this.data = e, this.props = t, this.children = n, this.parent = i, this.listeners = e.on || o, this.injections = mt(c.inject, i), this.slots = function () {
          return l.$slots || bt(e.scopedSlots, l.$slots = yt(n, i)), l.$slots;
        }, Object.defineProperty(this, "scopedSlots", {
          enumerable: !0,
          get: function get() {
            return bt(e.scopedSlots, this.slots());
          }
        }), d && (this.$options = c, this.$slots = this.slots(), this.$scopedSlots = bt(e.scopedSlots, this.$slots)), c._scopeId ? this._c = function (e, t, n, o) {
          var r = Vt(a, e, t, n, o, u);
          return r && !Array.isArray(r) && (r.fnScopeId = c._scopeId, r.fnContext = i), r;
        } : this._c = function (e, t, n, i) {
          return Vt(a, e, t, n, i, u);
        };
      }

      function jt(e, t, n, i, o) {
        var r = _e(e);

        return r.fnContext = n, r.fnOptions = i, t.slot && ((r.data || (r.data = {})).slot = t.slot), r;
      }

      function Ft(e, t) {
        for (var n in t) {
          e[w(n)] = t[n];
        }
      }

      Pt(Bt.prototype);
      var Ut = {
        init: function init(e, t) {
          if (e.componentInstance && !e.componentInstance._isDestroyed && e.data.keepAlive) {
            var n = e;
            Ut.prepatch(n, n);
          } else (e.componentInstance = function (e, t) {
            var n = {
              _isComponent: !0,
              _parentVnode: e,
              parent: t
            },
                i = e.data.inlineTemplate;
            return a(i) && (n.render = i.render, n.staticRenderFns = i.staticRenderFns), new e.componentOptions.Ctor(n);
          }(e, nn)).$mount(t ? e.elm : void 0, t);
        },
        prepatch: function prepatch(e, t) {
          var n = t.componentOptions;
          !function (e, t, n, i, r) {
            var a = i.data.scopedSlots,
                s = e.$scopedSlots,
                l = !!(a && !a.$stable || s !== o && !s.$stable || a && e.$scopedSlots.$key !== a.$key),
                c = !!(r || e.$options._renderChildren || l);

            if (e.$options._parentVnode = i, e.$vnode = i, e._vnode && (e._vnode.parent = i), e.$options._renderChildren = r, e.$attrs = i.data.attrs || o, e.$listeners = n || o, t && e.$options.props) {
              Te(!1);

              for (var d = e._props, u = e.$options._propKeys || [], f = 0; f < u.length; f++) {
                var p = u[f],
                    g = e.$options.props;
                d[p] = We(p, g, t, e);
              }

              Te(!0), e.$options.propsData = t;
            }

            n = n || o;
            var h = e.$options._parentListeners;
            e.$options._parentListeners = n, tn(e, n, h), c && (e.$slots = yt(r, i.context), e.$forceUpdate());
          }(t.componentInstance = e.componentInstance, n.propsData, n.listeners, t, n.children);
        },
        insert: function insert(e) {
          var t,
              n = e.context,
              i = e.componentInstance;
          i._isMounted || (i._isMounted = !0, ln(i, "mounted")), e.data.keepAlive && (n._isMounted ? ((t = i)._inactive = !1, dn.push(t)) : an(i, !0));
        },
        destroy: function destroy(e) {
          var t = e.componentInstance;
          t._isDestroyed || (e.data.keepAlive ? sn(t, !0) : t.$destroy());
        }
      },
          Wt = Object.keys(Ut);

      function Ht(e, t, n, i, l) {
        if (!r(e)) {
          var d = n.$options._base;

          if (c(e) && (e = d.extend(e)), "function" == typeof e) {
            var u;
            if (r(e.cid) && void 0 === (e = function (e, t) {
              if (s(e.error) && a(e.errorComp)) return e.errorComp;
              if (a(e.resolved)) return e.resolved;
              var n = Yt;
              if (n && a(e.owners) && -1 === e.owners.indexOf(n) && e.owners.push(n), s(e.loading) && a(e.loadingComp)) return e.loadingComp;

              if (n && !a(e.owners)) {
                var i = e.owners = [n],
                    o = !0,
                    l = null,
                    d = null;
                n.$on("hook:destroyed", function () {
                  return A(i, n);
                });

                var u = function u(e) {
                  for (var t = 0, n = i.length; t < n; t++) {
                    i[t].$forceUpdate();
                  }

                  e && (i.length = 0, null !== l && (clearTimeout(l), l = null), null !== d && (clearTimeout(d), d = null));
                },
                    f = B(function (n) {
                  e.resolved = Kt(n, t), o ? i.length = 0 : u(!0);
                }),
                    g = B(function (t) {
                  a(e.errorComp) && (e.error = !0, u(!0));
                }),
                    h = e(f, g);

                return c(h) && (p(h) ? r(e.resolved) && h.then(f, g) : p(h.component) && (h.component.then(f, g), a(h.error) && (e.errorComp = Kt(h.error, t)), a(h.loading) && (e.loadingComp = Kt(h.loading, t), 0 === h.delay ? e.loading = !0 : l = setTimeout(function () {
                  l = null, r(e.resolved) && r(e.error) && (e.loading = !0, u(!1));
                }, h.delay || 200)), a(h.timeout) && (d = setTimeout(function () {
                  d = null, r(e.resolved) && g(null);
                }, h.timeout)))), o = !1, e.loading ? e.loadingComp : e.resolved;
              }
            }(u = e, d))) return function (e, t, n, i, o) {
              var r = be();
              return r.asyncFactory = e, r.asyncMeta = {
                data: t,
                context: n,
                children: i,
                tag: o
              }, r;
            }(u, t, n, i, l);
            t = t || {}, xn(e), a(t.model) && function (e, t) {
              var n = e.model && e.model.prop || "value",
                  i = e.model && e.model.event || "input";
              (t.attrs || (t.attrs = {}))[n] = t.model.value;
              var o = t.on || (t.on = {}),
                  r = o[i],
                  s = t.model.callback;
              a(r) ? (Array.isArray(r) ? -1 === r.indexOf(s) : r !== s) && (o[i] = [s].concat(r)) : o[i] = s;
            }(e.options, t);

            var f = function (e, t, n) {
              var i = t.options.props;

              if (!r(i)) {
                var o = {},
                    s = e.attrs,
                    l = e.props;
                if (a(s) || a(l)) for (var c in i) {
                  var d = T(c);
                  pt(o, l, c, d, !0) || pt(o, s, c, d, !1);
                }
                return o;
              }
            }(t, e);

            if (s(e.options.functional)) return function (e, t, n, i, r) {
              var s = e.options,
                  l = {},
                  c = s.props;
              if (a(c)) for (var d in c) {
                l[d] = We(d, c, t || o);
              } else a(n.attrs) && Ft(l, n.attrs), a(n.props) && Ft(l, n.props);
              var u = new Bt(n, l, r, i, e),
                  f = s.render.call(null, u._c, u);
              if (f instanceof ye) return jt(f, n, u.parent, s);

              if (Array.isArray(f)) {
                for (var p = gt(f) || [], g = new Array(p.length), h = 0; h < p.length; h++) {
                  g[h] = jt(p[h], n, u.parent, s);
                }

                return g;
              }
            }(e, f, t, n, i);
            var g = t.on;

            if (t.on = t.nativeOn, s(e.options["abstract"])) {
              var h = t.slot;
              t = {}, h && (t.slot = h);
            }

            !function (e) {
              for (var t = e.hook || (e.hook = {}), n = 0; n < Wt.length; n++) {
                var i = Wt[n],
                    o = t[i],
                    r = Ut[i];
                o === r || o && o._merged || (t[i] = o ? Gt(r, o) : r);
              }
            }(t);
            var v = e.options.name || l;
            return new ye("vue-component-" + e.cid + (v ? "-" + v : ""), t, void 0, void 0, void 0, n, {
              Ctor: e,
              propsData: f,
              listeners: g,
              tag: l,
              children: i
            }, u);
          }
        }
      }

      function Gt(e, t) {
        var n = function n(_n2, i) {
          e(_n2, i), t(_n2, i);
        };

        return n._merged = !0, n;
      }

      function Vt(e, t, n, i, o, r) {
        return (Array.isArray(n) || l(n)) && (o = i, i = n, n = void 0), s(r) && (o = 2), function (e, t, n, i, o) {
          if (a(n) && a(n.__ob__)) return be();
          if (a(n) && a(n.is) && (t = n.is), !t) return be();
          var r, s, l;
          (Array.isArray(i) && "function" == typeof i[0] && ((n = n || {}).scopedSlots = {
            "default": i[0]
          }, i.length = 0), 2 === o ? i = gt(i) : 1 === o && (i = function (e) {
            for (var t = 0; t < e.length; t++) {
              if (Array.isArray(e[t])) return Array.prototype.concat.apply([], e);
            }

            return e;
          }(i)), "string" == typeof t) ? (s = e.$vnode && e.$vnode.ns || W.getTagNamespace(t), r = W.isReservedTag(t) ? new ye(W.parsePlatformTagName(t), n, i, void 0, void 0, e) : n && n.pre || !a(l = Ue(e.$options, "components", t)) ? new ye(t, n, i, void 0, void 0, e) : Ht(l, n, e, i, t)) : r = Ht(t, n, e, i);
          return Array.isArray(r) ? r : a(r) ? (a(s) && qt(r, s), a(n) && function (e) {
            c(e.style) && st(e.style), c(e["class"]) && st(e["class"]);
          }(n), r) : be();
        }(e, t, n, i, o);
      }

      function qt(e, t, n) {
        if (e.ns = t, "foreignObject" === e.tag && (t = void 0, n = !0), a(e.children)) for (var i = 0, o = e.children.length; i < o; i++) {
          var l = e.children[i];
          a(l.tag) && (r(l.ns) || s(n) && "svg" !== l.tag) && qt(l, t, n);
        }
      }

      var zt,
          Yt = null;

      function Kt(e, t) {
        return (e.__esModule || ue && "Module" === e[Symbol.toStringTag]) && (e = e["default"]), c(e) ? t.extend(e) : e;
      }

      function Jt(e) {
        return e.isComment && e.asyncFactory;
      }

      function Qt(e) {
        if (Array.isArray(e)) for (var t = 0; t < e.length; t++) {
          var n = e[t];
          if (a(n) && (a(n.componentOptions) || Jt(n))) return n;
        }
      }

      function Xt(e, t) {
        zt.$on(e, t);
      }

      function Zt(e, t) {
        zt.$off(e, t);
      }

      function en(e, t) {
        var n = zt;
        return function i() {
          var o = t.apply(null, arguments);
          null !== o && n.$off(e, i);
        };
      }

      function tn(e, t, n) {
        zt = e, ut(t, n || {}, Xt, Zt, en, e), zt = void 0;
      }

      var nn = null;

      function on(e) {
        var t = nn;
        return nn = e, function () {
          nn = t;
        };
      }

      function rn(e) {
        for (; e && (e = e.$parent);) {
          if (e._inactive) return !0;
        }

        return !1;
      }

      function an(e, t) {
        if (t) {
          if (e._directInactive = !1, rn(e)) return;
        } else if (e._directInactive) return;

        if (e._inactive || null === e._inactive) {
          e._inactive = !1;

          for (var n = 0; n < e.$children.length; n++) {
            an(e.$children[n]);
          }

          ln(e, "activated");
        }
      }

      function sn(e, t) {
        if (!(t && (e._directInactive = !0, rn(e)) || e._inactive)) {
          e._inactive = !0;

          for (var n = 0; n < e.$children.length; n++) {
            sn(e.$children[n]);
          }

          ln(e, "deactivated");
        }
      }

      function ln(e, t) {
        ve();
        var n = e.$options[t],
            i = t + " hook";
        if (n) for (var o = 0, r = n.length; o < r; o++) {
          ze(n[o], e, null, e, i);
        }
        e._hasHookEvent && e.$emit("hook:" + t), me();
      }

      var cn = [],
          dn = [],
          un = {},
          fn = !1,
          pn = !1,
          gn = 0,
          hn = 0,
          vn = Date.now;

      if (K && !Z) {
        var mn = window.performance;
        mn && "function" == typeof mn.now && vn() > document.createEvent("Event").timeStamp && (vn = function vn() {
          return mn.now();
        });
      }

      function yn() {
        var e, t;

        for (hn = vn(), pn = !0, cn.sort(function (e, t) {
          return e.id - t.id;
        }), gn = 0; gn < cn.length; gn++) {
          (e = cn[gn]).before && e.before(), t = e.id, un[t] = null, e.run();
        }

        var n = dn.slice(),
            i = cn.slice();
        gn = cn.length = dn.length = 0, un = {}, fn = pn = !1, function (e) {
          for (var t = 0; t < e.length; t++) {
            e[t]._inactive = !0, an(e[t], !0);
          }
        }(n), function (e) {
          for (var t = e.length; t--;) {
            var n = e[t],
                i = n.vm;
            i._watcher === n && i._isMounted && !i._isDestroyed && ln(i, "updated");
          }
        }(i), le && W.devtools && le.emit("flush");
      }

      var An = 0,
          bn = function bn(e, t, n, i, o) {
        this.vm = e, o && (e._watcher = this), e._watchers.push(this), i ? (this.deep = !!i.deep, this.user = !!i.user, this.lazy = !!i.lazy, this.sync = !!i.sync, this.before = i.before) : this.deep = this.user = this.lazy = this.sync = !1, this.cb = n, this.id = ++An, this.active = !0, this.dirty = this.lazy, this.deps = [], this.newDeps = [], this.depIds = new de(), this.newDepIds = new de(), this.expression = "", "function" == typeof t ? this.getter = t : (this.getter = function (e) {
          if (!z.test(e)) {
            var t = e.split(".");
            return function (e) {
              for (var n = 0; n < t.length; n++) {
                if (!e) return;
                e = e[t[n]];
              }

              return e;
            };
          }
        }(t), this.getter || (this.getter = D)), this.value = this.lazy ? void 0 : this.get();
      };

      bn.prototype.get = function () {
        var e;
        ve(this);
        var t = this.vm;

        try {
          e = this.getter.call(t, t);
        } catch (e) {
          if (!this.user) throw e;
          qe(e, t, 'getter for watcher "' + this.expression + '"');
        } finally {
          this.deep && st(e), me(), this.cleanupDeps();
        }

        return e;
      }, bn.prototype.addDep = function (e) {
        var t = e.id;
        this.newDepIds.has(t) || (this.newDepIds.add(t), this.newDeps.push(e), this.depIds.has(t) || e.addSub(this));
      }, bn.prototype.cleanupDeps = function () {
        for (var e = this.deps.length; e--;) {
          var t = this.deps[e];
          this.newDepIds.has(t.id) || t.removeSub(this);
        }

        var n = this.depIds;
        this.depIds = this.newDepIds, this.newDepIds = n, this.newDepIds.clear(), n = this.deps, this.deps = this.newDeps, this.newDeps = n, this.newDeps.length = 0;
      }, bn.prototype.update = function () {
        this.lazy ? this.dirty = !0 : this.sync ? this.run() : function (e) {
          var t = e.id;

          if (null == un[t]) {
            if (un[t] = !0, pn) {
              for (var n = cn.length - 1; n > gn && cn[n].id > e.id;) {
                n--;
              }

              cn.splice(n + 1, 0, e);
            } else cn.push(e);

            fn || (fn = !0, rt(yn));
          }
        }(this);
      }, bn.prototype.run = function () {
        if (this.active) {
          var e = this.get();

          if (e !== this.value || c(e) || this.deep) {
            var t = this.value;
            if (this.value = e, this.user) try {
              this.cb.call(this.vm, e, t);
            } catch (e) {
              qe(e, this.vm, 'callback for watcher "' + this.expression + '"');
            } else this.cb.call(this.vm, e, t);
          }
        }
      }, bn.prototype.evaluate = function () {
        this.value = this.get(), this.dirty = !1;
      }, bn.prototype.depend = function () {
        for (var e = this.deps.length; e--;) {
          this.deps[e].depend();
        }
      }, bn.prototype.teardown = function () {
        if (this.active) {
          this.vm._isBeingDestroyed || A(this.vm._watchers, this);

          for (var e = this.deps.length; e--;) {
            this.deps[e].removeSub(this);
          }

          this.active = !1;
        }
      };
      var En = {
        enumerable: !0,
        configurable: !0,
        get: D,
        set: D
      };

      function _n(e, t, n) {
        En.get = function () {
          return this[t][n];
        }, En.set = function (e) {
          this[t][n] = e;
        }, Object.defineProperty(e, n, En);
      }

      var Cn = {
        lazy: !0
      };

      function wn(e, t, n) {
        var i = !se();
        "function" == typeof n ? (En.get = i ? Sn(t) : In(n), En.set = D) : (En.get = n.get ? i && !1 !== n.cache ? Sn(t) : In(n.get) : D, En.set = n.set || D), Object.defineProperty(e, t, En);
      }

      function Sn(e) {
        return function () {
          var t = this._computedWatchers && this._computedWatchers[e];
          if (t) return t.dirty && t.evaluate(), ge.target && t.depend(), t.value;
        };
      }

      function In(e) {
        return function () {
          return e.call(this, this);
        };
      }

      function Tn(e, t, n, i) {
        return u(n) && (i = n, n = n.handler), "string" == typeof n && (n = e[n]), e.$watch(t, n, i);
      }

      var kn = 0;

      function xn(e) {
        var t = e.options;

        if (e["super"]) {
          var n = xn(e["super"]);

          if (n !== e.superOptions) {
            e.superOptions = n;

            var i = function (e) {
              var t,
                  n = e.options,
                  i = e.sealedOptions;

              for (var o in n) {
                n[o] !== i[o] && (t || (t = {}), t[o] = n[o]);
              }

              return t;
            }(e);

            i && M(e.extendOptions, i), (t = e.options = Fe(n, e.extendOptions)).name && (t.components[t.name] = e);
          }
        }

        return t;
      }

      function Mn(e) {
        this._init(e);
      }

      function Nn(e) {
        return e && (e.Ctor.options.name || e.tag);
      }

      function Dn(e, t) {
        return Array.isArray(e) ? e.indexOf(t) > -1 : "string" == typeof e ? e.split(",").indexOf(t) > -1 : (n = e, !("[object RegExp]" !== d.call(n)) && e.test(t));
        var n;
      }

      function On(e, t) {
        var n = e.cache,
            i = e.keys,
            o = e._vnode;

        for (var r in n) {
          var a = n[r];

          if (a) {
            var s = Nn(a.componentOptions);
            s && !t(s) && Ln(n, r, i, o);
          }
        }
      }

      function Ln(e, t, n, i) {
        var o = e[t];
        !o || i && o.tag === i.tag || o.componentInstance.$destroy(), e[t] = null, A(n, t);
      }

      !function (e) {
        e.prototype._init = function (e) {
          var t = this;
          t._uid = kn++, t._isVue = !0, e && e._isComponent ? function (e, t) {
            var n = e.$options = Object.create(e.constructor.options),
                i = t._parentVnode;
            n.parent = t.parent, n._parentVnode = i;
            var o = i.componentOptions;
            n.propsData = o.propsData, n._parentListeners = o.listeners, n._renderChildren = o.children, n._componentTag = o.tag, t.render && (n.render = t.render, n.staticRenderFns = t.staticRenderFns);
          }(t, e) : t.$options = Fe(xn(t.constructor), e || {}, t), t._renderProxy = t, t._self = t, function (e) {
            var t = e.$options,
                n = t.parent;

            if (n && !t["abstract"]) {
              for (; n.$options["abstract"] && n.$parent;) {
                n = n.$parent;
              }

              n.$children.push(e);
            }

            e.$parent = n, e.$root = n ? n.$root : e, e.$children = [], e.$refs = {}, e._watcher = null, e._inactive = null, e._directInactive = !1, e._isMounted = !1, e._isDestroyed = !1, e._isBeingDestroyed = !1;
          }(t), function (e) {
            e._events = Object.create(null), e._hasHookEvent = !1;
            var t = e.$options._parentListeners;
            t && tn(e, t);
          }(t), function (e) {
            e._vnode = null, e._staticTrees = null;
            var t = e.$options,
                n = e.$vnode = t._parentVnode,
                i = n && n.context;
            e.$slots = yt(t._renderChildren, i), e.$scopedSlots = o, e._c = function (t, n, i, o) {
              return Vt(e, t, n, i, o, !1);
            }, e.$createElement = function (t, n, i, o) {
              return Vt(e, t, n, i, o, !0);
            };
            var r = n && n.data;
            Me(e, "$attrs", r && r.attrs || o, null, !0), Me(e, "$listeners", t._parentListeners || o, null, !0);
          }(t), ln(t, "beforeCreate"), function (e) {
            var t = mt(e.$options.inject, e);
            t && (Te(!1), Object.keys(t).forEach(function (n) {
              Me(e, n, t[n]);
            }), Te(!0));
          }(t), function (e) {
            e._watchers = [];
            var t = e.$options;
            t.props && function (e, t) {
              var n = e.$options.propsData || {},
                  i = e._props = {},
                  o = e.$options._propKeys = [];
              e.$parent && Te(!1);

              var r = function r(_r2) {
                o.push(_r2);
                var a = We(_r2, t, n, e);
                Me(i, _r2, a), _r2 in e || _n(e, "_props", _r2);
              };

              for (var a in t) {
                r(a);
              }

              Te(!0);
            }(e, t.props), t.methods && function (e, t) {
              for (var n in e.$options.props, t) {
                e[n] = "function" != typeof t[n] ? D : k(t[n], e);
              }
            }(e, t.methods), t.data ? function (e) {
              var t = e.$options.data;
              u(t = e._data = "function" == typeof t ? function (e, t) {
                ve();

                try {
                  return e.call(t, t);
                } catch (e) {
                  return qe(e, t, "data()"), {};
                } finally {
                  me();
                }
              }(t, e) : t || {}) || (t = {});

              for (var n = Object.keys(t), i = e.$options.props, o = (e.$options.methods, n.length); o--;) {
                var r = n[o];
                i && E(i, r) || G(r) || _n(e, "_data", r);
              }

              xe(t, !0);
            }(e) : xe(e._data = {}, !0), t.computed && function (e, t) {
              var n = e._computedWatchers = Object.create(null),
                  i = se();

              for (var o in t) {
                var r = t[o],
                    a = "function" == typeof r ? r : r.get;
                i || (n[o] = new bn(e, a || D, D, Cn)), o in e || wn(e, o, r);
              }
            }(e, t.computed), t.watch && t.watch !== oe && function (e, t) {
              for (var n in t) {
                var i = t[n];
                if (Array.isArray(i)) for (var o = 0; o < i.length; o++) {
                  Tn(e, n, i[o]);
                } else Tn(e, n, i);
              }
            }(e, t.watch);
          }(t), function (e) {
            var t = e.$options.provide;
            t && (e._provided = "function" == typeof t ? t.call(e) : t);
          }(t), ln(t, "created"), t.$options.el && t.$mount(t.$options.el);
        };
      }(Mn), function (e) {
        Object.defineProperty(e.prototype, "$data", {
          get: function get() {
            return this._data;
          }
        }), Object.defineProperty(e.prototype, "$props", {
          get: function get() {
            return this._props;
          }
        }), e.prototype.$set = Ne, e.prototype.$delete = De, e.prototype.$watch = function (e, t, n) {
          var i = this;
          if (u(t)) return Tn(i, e, t, n);
          (n = n || {}).user = !0;
          var o = new bn(i, e, t, n);
          if (n.immediate) try {
            t.call(i, o.value);
          } catch (e) {
            qe(e, i, 'callback for immediate watcher "' + o.expression + '"');
          }
          return function () {
            o.teardown();
          };
        };
      }(Mn), function (e) {
        var t = /^hook:/;
        e.prototype.$on = function (e, n) {
          var i = this;
          if (Array.isArray(e)) for (var o = 0, r = e.length; o < r; o++) {
            i.$on(e[o], n);
          } else (i._events[e] || (i._events[e] = [])).push(n), t.test(e) && (i._hasHookEvent = !0);
          return i;
        }, e.prototype.$once = function (e, t) {
          var n = this;

          function i() {
            n.$off(e, i), t.apply(n, arguments);
          }

          return i.fn = t, n.$on(e, i), n;
        }, e.prototype.$off = function (e, t) {
          var n = this;
          if (!arguments.length) return n._events = Object.create(null), n;

          if (Array.isArray(e)) {
            for (var i = 0, o = e.length; i < o; i++) {
              n.$off(e[i], t);
            }

            return n;
          }

          var r,
              a = n._events[e];
          if (!a) return n;
          if (!t) return n._events[e] = null, n;

          for (var s = a.length; s--;) {
            if ((r = a[s]) === t || r.fn === t) {
              a.splice(s, 1);
              break;
            }
          }

          return n;
        }, e.prototype.$emit = function (e) {
          var t = this,
              n = t._events[e];

          if (n) {
            n = n.length > 1 ? x(n) : n;

            for (var i = x(arguments, 1), o = 'event handler for "' + e + '"', r = 0, a = n.length; r < a; r++) {
              ze(n[r], t, i, t, o);
            }
          }

          return t;
        };
      }(Mn), function (e) {
        e.prototype._update = function (e, t) {
          var n = this,
              i = n.$el,
              o = n._vnode,
              r = on(n);
          n._vnode = e, n.$el = o ? n.__patch__(o, e) : n.__patch__(n.$el, e, t, !1), r(), i && (i.__vue__ = null), n.$el && (n.$el.__vue__ = n), n.$vnode && n.$parent && n.$vnode === n.$parent._vnode && (n.$parent.$el = n.$el);
        }, e.prototype.$forceUpdate = function () {
          this._watcher && this._watcher.update();
        }, e.prototype.$destroy = function () {
          var e = this;

          if (!e._isBeingDestroyed) {
            ln(e, "beforeDestroy"), e._isBeingDestroyed = !0;
            var t = e.$parent;
            !t || t._isBeingDestroyed || e.$options["abstract"] || A(t.$children, e), e._watcher && e._watcher.teardown();

            for (var n = e._watchers.length; n--;) {
              e._watchers[n].teardown();
            }

            e._data.__ob__ && e._data.__ob__.vmCount--, e._isDestroyed = !0, e.__patch__(e._vnode, null), ln(e, "destroyed"), e.$off(), e.$el && (e.$el.__vue__ = null), e.$vnode && (e.$vnode.parent = null);
          }
        };
      }(Mn), function (e) {
        Pt(e.prototype), e.prototype.$nextTick = function (e) {
          return rt(e, this);
        }, e.prototype._render = function () {
          var e,
              t = this,
              n = t.$options,
              i = n.render,
              o = n._parentVnode;
          o && (t.$scopedSlots = bt(o.data.scopedSlots, t.$slots, t.$scopedSlots)), t.$vnode = o;

          try {
            Yt = t, e = i.call(t._renderProxy, t.$createElement);
          } catch (n) {
            qe(n, t, "render"), e = t._vnode;
          } finally {
            Yt = null;
          }

          return Array.isArray(e) && 1 === e.length && (e = e[0]), e instanceof ye || (e = be()), e.parent = o, e;
        };
      }(Mn);
      var $n = [String, RegExp, Array],
          Rn = {
        KeepAlive: {
          name: "keep-alive",
          "abstract": !0,
          props: {
            include: $n,
            exclude: $n,
            max: [String, Number]
          },
          created: function created() {
            this.cache = Object.create(null), this.keys = [];
          },
          destroyed: function destroyed() {
            for (var e in this.cache) {
              Ln(this.cache, e, this.keys);
            }
          },
          mounted: function mounted() {
            var e = this;
            this.$watch("include", function (t) {
              On(e, function (e) {
                return Dn(t, e);
              });
            }), this.$watch("exclude", function (t) {
              On(e, function (e) {
                return !Dn(t, e);
              });
            });
          },
          render: function render() {
            var e = this.$slots["default"],
                t = Qt(e),
                n = t && t.componentOptions;

            if (n) {
              var i = Nn(n),
                  o = this.include,
                  r = this.exclude;
              if (o && (!i || !Dn(o, i)) || r && i && Dn(r, i)) return t;
              var a = this.cache,
                  s = this.keys,
                  l = null == t.key ? n.Ctor.cid + (n.tag ? "::" + n.tag : "") : t.key;
              a[l] ? (t.componentInstance = a[l].componentInstance, A(s, l), s.push(l)) : (a[l] = t, s.push(l), this.max && s.length > parseInt(this.max) && Ln(a, s[0], s, this._vnode)), t.data.keepAlive = !0;
            }

            return t || e && e[0];
          }
        }
      };
      !function (e) {
        var t = {
          get: function get() {
            return W;
          }
        };
        Object.defineProperty(e, "config", t), e.util = {
          warn: fe,
          extend: M,
          mergeOptions: Fe,
          defineReactive: Me
        }, e.set = Ne, e["delete"] = De, e.nextTick = rt, e.observable = function (e) {
          return xe(e), e;
        }, e.options = Object.create(null), F.forEach(function (t) {
          e.options[t + "s"] = Object.create(null);
        }), e.options._base = e, M(e.options.components, Rn), function (e) {
          e.use = function (e) {
            var t = this._installedPlugins || (this._installedPlugins = []);
            if (t.indexOf(e) > -1) return this;
            var n = x(arguments, 1);
            return n.unshift(this), "function" == typeof e.install ? e.install.apply(e, n) : "function" == typeof e && e.apply(null, n), t.push(e), this;
          };
        }(e), function (e) {
          e.mixin = function (e) {
            return this.options = Fe(this.options, e), this;
          };
        }(e), function (e) {
          e.cid = 0;
          var t = 1;

          e.extend = function (e) {
            e = e || {};
            var n = this,
                i = n.cid,
                o = e._Ctor || (e._Ctor = {});
            if (o[i]) return o[i];

            var r = e.name || n.options.name,
                a = function a(e) {
              this._init(e);
            };

            return (a.prototype = Object.create(n.prototype)).constructor = a, a.cid = t++, a.options = Fe(n.options, e), a["super"] = n, a.options.props && function (e) {
              var t = e.options.props;

              for (var n in t) {
                _n(e.prototype, "_props", n);
              }
            }(a), a.options.computed && function (e) {
              var t = e.options.computed;

              for (var n in t) {
                wn(e.prototype, n, t[n]);
              }
            }(a), a.extend = n.extend, a.mixin = n.mixin, a.use = n.use, F.forEach(function (e) {
              a[e] = n[e];
            }), r && (a.options.components[r] = a), a.superOptions = n.options, a.extendOptions = e, a.sealedOptions = M({}, a.options), o[i] = a, a;
          };
        }(e), function (e) {
          F.forEach(function (t) {
            e[t] = function (e, n) {
              return n ? ("component" === t && u(n) && (n.name = n.name || e, n = this.options._base.extend(n)), "directive" === t && "function" == typeof n && (n = {
                bind: n,
                update: n
              }), this.options[t + "s"][e] = n, n) : this.options[t + "s"][e];
            };
          });
        }(e);
      }(Mn), Object.defineProperty(Mn.prototype, "$isServer", {
        get: se
      }), Object.defineProperty(Mn.prototype, "$ssrContext", {
        get: function get() {
          return this.$vnode && this.$vnode.ssrContext;
        }
      }), Object.defineProperty(Mn, "FunctionalRenderContext", {
        value: Bt
      }), Mn.version = "2.6.12";

      var Pn = v("style,class"),
          Bn = v("input,textarea,option,select,progress"),
          jn = function jn(e, t, n) {
        return "value" === n && Bn(e) && "button" !== t || "selected" === n && "option" === e || "checked" === n && "input" === e || "muted" === n && "video" === e;
      },
          Fn = v("contenteditable,draggable,spellcheck"),
          Un = v("events,caret,typing,plaintext-only"),
          Wn = v("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"),
          Hn = "http://www.w3.org/1999/xlink",
          Gn = function Gn(e) {
        return ":" === e.charAt(5) && "xlink" === e.slice(0, 5);
      },
          Vn = function Vn(e) {
        return Gn(e) ? e.slice(6, e.length) : "";
      },
          qn = function qn(e) {
        return null == e || !1 === e;
      };

      function zn(e, t) {
        return {
          staticClass: Yn(e.staticClass, t.staticClass),
          "class": a(e["class"]) ? [e["class"], t["class"]] : t["class"]
        };
      }

      function Yn(e, t) {
        return e ? t ? e + " " + t : e : t || "";
      }

      function Kn(e) {
        return Array.isArray(e) ? function (e) {
          for (var t, n = "", i = 0, o = e.length; i < o; i++) {
            a(t = Kn(e[i])) && "" !== t && (n && (n += " "), n += t);
          }

          return n;
        }(e) : c(e) ? function (e) {
          var t = "";

          for (var n in e) {
            e[n] && (t && (t += " "), t += n);
          }

          return t;
        }(e) : "string" == typeof e ? e : "";
      }

      var Jn = {
        svg: "http://www.w3.org/2000/svg",
        math: "http://www.w3.org/1998/Math/MathML"
      },
          Qn = v("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),
          Xn = v("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", !0),
          Zn = function Zn(e) {
        return Qn(e) || Xn(e);
      };

      function ei(e) {
        return Xn(e) ? "svg" : "math" === e ? "math" : void 0;
      }

      var ti = Object.create(null),
          ni = v("text,number,password,search,email,tel,url");

      function ii(e) {
        return "string" == typeof e ? document.querySelector(e) || document.createElement("div") : e;
      }

      var oi = Object.freeze({
        createElement: function createElement(e, t) {
          var n = document.createElement(e);
          return "select" !== e || t.data && t.data.attrs && void 0 !== t.data.attrs.multiple && n.setAttribute("multiple", "multiple"), n;
        },
        createElementNS: function createElementNS(e, t) {
          return document.createElementNS(Jn[e], t);
        },
        createTextNode: function createTextNode(e) {
          return document.createTextNode(e);
        },
        createComment: function createComment(e) {
          return document.createComment(e);
        },
        insertBefore: function insertBefore(e, t, n) {
          e.insertBefore(t, n);
        },
        removeChild: function removeChild(e, t) {
          e.removeChild(t);
        },
        appendChild: function appendChild(e, t) {
          e.appendChild(t);
        },
        parentNode: function parentNode(e) {
          return e.parentNode;
        },
        nextSibling: function nextSibling(e) {
          return e.nextSibling;
        },
        tagName: function tagName(e) {
          return e.tagName;
        },
        setTextContent: function setTextContent(e, t) {
          e.textContent = t;
        },
        setStyleScope: function setStyleScope(e, t) {
          e.setAttribute(t, "");
        }
      }),
          ri = {
        create: function create(e, t) {
          ai(t);
        },
        update: function update(e, t) {
          e.data.ref !== t.data.ref && (ai(e, !0), ai(t));
        },
        destroy: function destroy(e) {
          ai(e, !0);
        }
      };

      function ai(e, t) {
        var n = e.data.ref;

        if (a(n)) {
          var i = e.context,
              o = e.componentInstance || e.elm,
              r = i.$refs;
          t ? Array.isArray(r[n]) ? A(r[n], o) : r[n] === o && (r[n] = void 0) : e.data.refInFor ? Array.isArray(r[n]) ? r[n].indexOf(o) < 0 && r[n].push(o) : r[n] = [o] : r[n] = o;
        }
      }

      var si = new ye("", {}, []),
          li = ["create", "activate", "update", "remove", "destroy"];

      function ci(e, t) {
        return e.key === t.key && (e.tag === t.tag && e.isComment === t.isComment && a(e.data) === a(t.data) && function (e, t) {
          if ("input" !== e.tag) return !0;
          var n,
              i = a(n = e.data) && a(n = n.attrs) && n.type,
              o = a(n = t.data) && a(n = n.attrs) && n.type;
          return i === o || ni(i) && ni(o);
        }(e, t) || s(e.isAsyncPlaceholder) && e.asyncFactory === t.asyncFactory && r(t.asyncFactory.error));
      }

      function di(e, t, n) {
        var i,
            o,
            r = {};

        for (i = t; i <= n; ++i) {
          a(o = e[i].key) && (r[o] = i);
        }

        return r;
      }

      var ui = {
        create: fi,
        update: fi,
        destroy: function destroy(e) {
          fi(e, si);
        }
      };

      function fi(e, t) {
        (e.data.directives || t.data.directives) && function (e, t) {
          var n,
              i,
              o,
              r = e === si,
              a = t === si,
              s = gi(e.data.directives, e.context),
              l = gi(t.data.directives, t.context),
              c = [],
              d = [];

          for (n in l) {
            i = s[n], o = l[n], i ? (o.oldValue = i.value, o.oldArg = i.arg, vi(o, "update", t, e), o.def && o.def.componentUpdated && d.push(o)) : (vi(o, "bind", t, e), o.def && o.def.inserted && c.push(o));
          }

          if (c.length) {
            var u = function u() {
              for (var n = 0; n < c.length; n++) {
                vi(c[n], "inserted", t, e);
              }
            };

            r ? ft(t, "insert", u) : u();
          }

          if (d.length && ft(t, "postpatch", function () {
            for (var n = 0; n < d.length; n++) {
              vi(d[n], "componentUpdated", t, e);
            }
          }), !r) for (n in s) {
            l[n] || vi(s[n], "unbind", e, e, a);
          }
        }(e, t);
      }

      var pi = Object.create(null);

      function gi(e, t) {
        var n,
            i,
            o = Object.create(null);
        if (!e) return o;

        for (n = 0; n < e.length; n++) {
          (i = e[n]).modifiers || (i.modifiers = pi), o[hi(i)] = i, i.def = Ue(t.$options, "directives", i.name);
        }

        return o;
      }

      function hi(e) {
        return e.rawName || e.name + "." + Object.keys(e.modifiers || {}).join(".");
      }

      function vi(e, t, n, i, o) {
        var r = e.def && e.def[t];
        if (r) try {
          r(n.elm, e, n, i, o);
        } catch (i) {
          qe(i, n.context, "directive " + e.name + " " + t + " hook");
        }
      }

      var mi = [ri, ui];

      function yi(e, t) {
        var n = t.componentOptions;

        if (!(a(n) && !1 === n.Ctor.options.inheritAttrs || r(e.data.attrs) && r(t.data.attrs))) {
          var i,
              o,
              s = t.elm,
              l = e.data.attrs || {},
              c = t.data.attrs || {};

          for (i in a(c.__ob__) && (c = t.data.attrs = M({}, c)), c) {
            o = c[i], l[i] !== o && Ai(s, i, o);
          }

          for (i in (Z || te) && c.value !== l.value && Ai(s, "value", c.value), l) {
            r(c[i]) && (Gn(i) ? s.removeAttributeNS(Hn, Vn(i)) : Fn(i) || s.removeAttribute(i));
          }
        }
      }

      function Ai(e, t, n) {
        e.tagName.indexOf("-") > -1 ? bi(e, t, n) : Wn(t) ? qn(n) ? e.removeAttribute(t) : (n = "allowfullscreen" === t && "EMBED" === e.tagName ? "true" : t, e.setAttribute(t, n)) : Fn(t) ? e.setAttribute(t, function (e, t) {
          return qn(t) || "false" === t ? "false" : "contenteditable" === e && Un(t) ? t : "true";
        }(t, n)) : Gn(t) ? qn(n) ? e.removeAttributeNS(Hn, Vn(t)) : e.setAttributeNS(Hn, t, n) : bi(e, t, n);
      }

      function bi(e, t, n) {
        if (qn(n)) e.removeAttribute(t);else {
          if (Z && !ee && "TEXTAREA" === e.tagName && "placeholder" === t && "" !== n && !e.__ieph) {
            var i = function i(t) {
              t.stopImmediatePropagation(), e.removeEventListener("input", i);
            };

            e.addEventListener("input", i), e.__ieph = !0;
          }

          e.setAttribute(t, n);
        }
      }

      var Ei = {
        create: yi,
        update: yi
      };

      function _i(e, t) {
        var n = t.elm,
            i = t.data,
            o = e.data;

        if (!(r(i.staticClass) && r(i["class"]) && (r(o) || r(o.staticClass) && r(o["class"])))) {
          var s = function (e) {
            for (var t = e.data, n = e, i = e; a(i.componentInstance);) {
              (i = i.componentInstance._vnode) && i.data && (t = zn(i.data, t));
            }

            for (; a(n = n.parent);) {
              n && n.data && (t = zn(t, n.data));
            }

            return o = t.staticClass, r = t["class"], a(o) || a(r) ? Yn(o, Kn(r)) : "";
            var o, r;
          }(t),
              l = n._transitionClasses;

          a(l) && (s = Yn(s, Kn(l))), s !== n._prevClass && (n.setAttribute("class", s), n._prevClass = s);
        }
      }

      var Ci,
          wi,
          Si,
          Ii,
          Ti,
          ki,
          xi = {
        create: _i,
        update: _i
      },
          Mi = /[\w).+\-_$\]]/;

      function Ni(e) {
        var t,
            n,
            i,
            o,
            r,
            a = !1,
            s = !1,
            l = !1,
            c = !1,
            d = 0,
            u = 0,
            f = 0,
            p = 0;

        for (i = 0; i < e.length; i++) {
          if (n = t, t = e.charCodeAt(i), a) 39 === t && 92 !== n && (a = !1);else if (s) 34 === t && 92 !== n && (s = !1);else if (l) 96 === t && 92 !== n && (l = !1);else if (c) 47 === t && 92 !== n && (c = !1);else if (124 !== t || 124 === e.charCodeAt(i + 1) || 124 === e.charCodeAt(i - 1) || d || u || f) {
            switch (t) {
              case 34:
                s = !0;
                break;

              case 39:
                a = !0;
                break;

              case 96:
                l = !0;
                break;

              case 40:
                f++;
                break;

              case 41:
                f--;
                break;

              case 91:
                u++;
                break;

              case 93:
                u--;
                break;

              case 123:
                d++;
                break;

              case 125:
                d--;
            }

            if (47 === t) {
              for (var g = i - 1, h = void 0; g >= 0 && " " === (h = e.charAt(g)); g--) {
                ;
              }

              h && Mi.test(h) || (c = !0);
            }
          } else void 0 === o ? (p = i + 1, o = e.slice(0, i).trim()) : v();
        }

        function v() {
          (r || (r = [])).push(e.slice(p, i).trim()), p = i + 1;
        }

        if (void 0 === o ? o = e.slice(0, i).trim() : 0 !== p && v(), r) for (i = 0; i < r.length; i++) {
          o = Di(o, r[i]);
        }
        return o;
      }

      function Di(e, t) {
        var n = t.indexOf("(");
        if (n < 0) return '_f("' + t + '")(' + e + ")";
        var i = t.slice(0, n),
            o = t.slice(n + 1);
        return '_f("' + i + '")(' + e + (")" !== o ? "," + o : o);
      }

      function Oi(e, t) {
        console.error("[Vue compiler]: " + e);
      }

      function Li(e, t) {
        return e ? e.map(function (e) {
          return e[t];
        }).filter(function (e) {
          return e;
        }) : [];
      }

      function $i(e, t, n, i, o) {
        (e.props || (e.props = [])).push(Gi({
          name: t,
          value: n,
          dynamic: o
        }, i)), e.plain = !1;
      }

      function Ri(e, t, n, i, o) {
        (o ? e.dynamicAttrs || (e.dynamicAttrs = []) : e.attrs || (e.attrs = [])).push(Gi({
          name: t,
          value: n,
          dynamic: o
        }, i)), e.plain = !1;
      }

      function Pi(e, t, n, i) {
        e.attrsMap[t] = n, e.attrsList.push(Gi({
          name: t,
          value: n
        }, i));
      }

      function Bi(e, t, n, i, o, r, a, s) {
        (e.directives || (e.directives = [])).push(Gi({
          name: t,
          rawName: n,
          value: i,
          arg: o,
          isDynamicArg: r,
          modifiers: a
        }, s)), e.plain = !1;
      }

      function ji(e, t, n) {
        return n ? "_p(" + t + ',"' + e + '")' : e + t;
      }

      function Fi(e, t, n, i, r, a, s, l) {
        var c;
        (i = i || o).right ? l ? t = "(" + t + ")==='click'?'contextmenu':(" + t + ")" : "click" === t && (t = "contextmenu", delete i.right) : i.middle && (l ? t = "(" + t + ")==='click'?'mouseup':(" + t + ")" : "click" === t && (t = "mouseup")), i.capture && (delete i.capture, t = ji("!", t, l)), i.once && (delete i.once, t = ji("~", t, l)), i.passive && (delete i.passive, t = ji("&", t, l)), i["native"] ? (delete i["native"], c = e.nativeEvents || (e.nativeEvents = {})) : c = e.events || (e.events = {});
        var d = Gi({
          value: n.trim(),
          dynamic: l
        }, s);
        i !== o && (d.modifiers = i);
        var u = c[t];
        Array.isArray(u) ? r ? u.unshift(d) : u.push(d) : c[t] = u ? r ? [d, u] : [u, d] : d, e.plain = !1;
      }

      function Ui(e, t, n) {
        var i = Wi(e, ":" + t) || Wi(e, "v-bind:" + t);
        if (null != i) return Ni(i);

        if (!1 !== n) {
          var o = Wi(e, t);
          if (null != o) return JSON.stringify(o);
        }
      }

      function Wi(e, t, n) {
        var i;
        if (null != (i = e.attrsMap[t])) for (var o = e.attrsList, r = 0, a = o.length; r < a; r++) {
          if (o[r].name === t) {
            o.splice(r, 1);
            break;
          }
        }
        return n && delete e.attrsMap[t], i;
      }

      function Hi(e, t) {
        for (var n = e.attrsList, i = 0, o = n.length; i < o; i++) {
          var r = n[i];
          if (t.test(r.name)) return n.splice(i, 1), r;
        }
      }

      function Gi(e, t) {
        return t && (null != t.start && (e.start = t.start), null != t.end && (e.end = t.end)), e;
      }

      function Vi(e, t, n) {
        var i = n || {},
            o = i.number,
            r = "$$v";
        i.trim && (r = "(typeof $$v === 'string'? $$v.trim(): $$v)"), o && (r = "_n(" + r + ")");
        var a = qi(t, r);
        e.model = {
          value: "(" + t + ")",
          expression: JSON.stringify(t),
          callback: "function ($$v) {" + a + "}"
        };
      }

      function qi(e, t) {
        var n = function (e) {
          if (e = e.trim(), Ci = e.length, e.indexOf("[") < 0 || e.lastIndexOf("]") < Ci - 1) return (Ii = e.lastIndexOf(".")) > -1 ? {
            exp: e.slice(0, Ii),
            key: '"' + e.slice(Ii + 1) + '"'
          } : {
            exp: e,
            key: null
          };

          for (wi = e, Ii = Ti = ki = 0; !Yi();) {
            Ki(Si = zi()) ? Qi(Si) : 91 === Si && Ji(Si);
          }

          return {
            exp: e.slice(0, Ti),
            key: e.slice(Ti + 1, ki)
          };
        }(e);

        return null === n.key ? e + "=" + t : "$set(" + n.exp + ", " + n.key + ", " + t + ")";
      }

      function zi() {
        return wi.charCodeAt(++Ii);
      }

      function Yi() {
        return Ii >= Ci;
      }

      function Ki(e) {
        return 34 === e || 39 === e;
      }

      function Ji(e) {
        var t = 1;

        for (Ti = Ii; !Yi();) {
          if (Ki(e = zi())) Qi(e);else if (91 === e && t++, 93 === e && t--, 0 === t) {
            ki = Ii;
            break;
          }
        }
      }

      function Qi(e) {
        for (var t = e; !Yi() && (e = zi()) !== t;) {
          ;
        }
      }

      var Xi;

      function Zi(e, t, n) {
        var i = Xi;
        return function o() {
          var r = t.apply(null, arguments);
          null !== r && no(e, o, n, i);
        };
      }

      var eo = Qe && !(ie && Number(ie[1]) <= 53);

      function to(e, t, n, i) {
        if (eo) {
          var o = hn,
              r = t;

          t = r._wrapper = function (e) {
            if (e.target === e.currentTarget || e.timeStamp >= o || e.timeStamp <= 0 || e.target.ownerDocument !== document) return r.apply(this, arguments);
          };
        }

        Xi.addEventListener(e, t, re ? {
          capture: n,
          passive: i
        } : n);
      }

      function no(e, t, n, i) {
        (i || Xi).removeEventListener(e, t._wrapper || t, n);
      }

      function io(e, t) {
        if (!r(e.data.on) || !r(t.data.on)) {
          var n = t.data.on || {},
              i = e.data.on || {};
          Xi = t.elm, function (e) {
            if (a(e.__r)) {
              var t = Z ? "change" : "input";
              e[t] = [].concat(e.__r, e[t] || []), delete e.__r;
            }

            a(e.__c) && (e.change = [].concat(e.__c, e.change || []), delete e.__c);
          }(n), ut(n, i, to, no, Zi, t.context), Xi = void 0;
        }
      }

      var oo,
          ro = {
        create: io,
        update: io
      };

      function ao(e, t) {
        if (!r(e.data.domProps) || !r(t.data.domProps)) {
          var n,
              i,
              o = t.elm,
              s = e.data.domProps || {},
              l = t.data.domProps || {};

          for (n in a(l.__ob__) && (l = t.data.domProps = M({}, l)), s) {
            n in l || (o[n] = "");
          }

          for (n in l) {
            if (i = l[n], "textContent" === n || "innerHTML" === n) {
              if (t.children && (t.children.length = 0), i === s[n]) continue;
              1 === o.childNodes.length && o.removeChild(o.childNodes[0]);
            }

            if ("value" === n && "PROGRESS" !== o.tagName) {
              o._value = i;
              var c = r(i) ? "" : String(i);
              so(o, c) && (o.value = c);
            } else if ("innerHTML" === n && Xn(o.tagName) && r(o.innerHTML)) {
              (oo = oo || document.createElement("div")).innerHTML = "<svg>" + i + "</svg>";

              for (var d = oo.firstChild; o.firstChild;) {
                o.removeChild(o.firstChild);
              }

              for (; d.firstChild;) {
                o.appendChild(d.firstChild);
              }
            } else if (i !== s[n]) try {
              o[n] = i;
            } catch (e) {}
          }
        }
      }

      function so(e, t) {
        return !e.composing && ("OPTION" === e.tagName || function (e, t) {
          var n = !0;

          try {
            n = document.activeElement !== e;
          } catch (e) {}

          return n && e.value !== t;
        }(e, t) || function (e, t) {
          var n = e.value,
              i = e._vModifiers;

          if (a(i)) {
            if (i.number) return h(n) !== h(t);
            if (i.trim) return n.trim() !== t.trim();
          }

          return n !== t;
        }(e, t));
      }

      var lo = {
        create: ao,
        update: ao
      },
          co = _(function (e) {
        var t = {},
            n = /:(.+)/;
        return e.split(/;(?![^(]*\))/g).forEach(function (e) {
          if (e) {
            var i = e.split(n);
            i.length > 1 && (t[i[0].trim()] = i[1].trim());
          }
        }), t;
      });

      function uo(e) {
        var t = fo(e.style);
        return e.staticStyle ? M(e.staticStyle, t) : t;
      }

      function fo(e) {
        return Array.isArray(e) ? N(e) : "string" == typeof e ? co(e) : e;
      }

      var po,
          go = /^--/,
          ho = /\s*!important$/,
          vo = function vo(e, t, n) {
        if (go.test(t)) e.style.setProperty(t, n);else if (ho.test(n)) e.style.setProperty(T(t), n.replace(ho, ""), "important");else {
          var i = yo(t);
          if (Array.isArray(n)) for (var o = 0, r = n.length; o < r; o++) {
            e.style[i] = n[o];
          } else e.style[i] = n;
        }
      },
          mo = ["Webkit", "Moz", "ms"],
          yo = _(function (e) {
        if (po = po || document.createElement("div").style, "filter" !== (e = w(e)) && e in po) return e;

        for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < mo.length; n++) {
          var i = mo[n] + t;
          if (i in po) return i;
        }
      });

      function Ao(e, t) {
        var n = t.data,
            i = e.data;

        if (!(r(n.staticStyle) && r(n.style) && r(i.staticStyle) && r(i.style))) {
          var o,
              s,
              l = t.elm,
              c = i.staticStyle,
              d = i.normalizedStyle || i.style || {},
              u = c || d,
              f = fo(t.data.style) || {};
          t.data.normalizedStyle = a(f.__ob__) ? M({}, f) : f;

          var p = function (e, t) {
            for (var n, i = {}, o = e; o.componentInstance;) {
              (o = o.componentInstance._vnode) && o.data && (n = uo(o.data)) && M(i, n);
            }

            (n = uo(e.data)) && M(i, n);

            for (var r = e; r = r.parent;) {
              r.data && (n = uo(r.data)) && M(i, n);
            }

            return i;
          }(t);

          for (s in u) {
            r(p[s]) && vo(l, s, "");
          }

          for (s in p) {
            (o = p[s]) !== u[s] && vo(l, s, null == o ? "" : o);
          }
        }
      }

      var bo = {
        create: Ao,
        update: Ao
      },
          Eo = /\s+/;

      function _o(e, t) {
        if (t && (t = t.trim())) if (e.classList) t.indexOf(" ") > -1 ? t.split(Eo).forEach(function (t) {
          return e.classList.add(t);
        }) : e.classList.add(t);else {
          var n = " " + (e.getAttribute("class") || "") + " ";
          n.indexOf(" " + t + " ") < 0 && e.setAttribute("class", (n + t).trim());
        }
      }

      function Co(e, t) {
        if (t && (t = t.trim())) if (e.classList) t.indexOf(" ") > -1 ? t.split(Eo).forEach(function (t) {
          return e.classList.remove(t);
        }) : e.classList.remove(t), e.classList.length || e.removeAttribute("class");else {
          for (var n = " " + (e.getAttribute("class") || "") + " ", i = " " + t + " "; n.indexOf(i) >= 0;) {
            n = n.replace(i, " ");
          }

          (n = n.trim()) ? e.setAttribute("class", n) : e.removeAttribute("class");
        }
      }

      function wo(e) {
        if (e) {
          if ("object" == _typeof(e)) {
            var t = {};
            return !1 !== e.css && M(t, So(e.name || "v")), M(t, e), t;
          }

          return "string" == typeof e ? So(e) : void 0;
        }
      }

      var So = _(function (e) {
        return {
          enterClass: e + "-enter",
          enterToClass: e + "-enter-to",
          enterActiveClass: e + "-enter-active",
          leaveClass: e + "-leave",
          leaveToClass: e + "-leave-to",
          leaveActiveClass: e + "-leave-active"
        };
      }),
          Io = K && !ee,
          To = "transition",
          ko = "animation",
          xo = "transition",
          Mo = "transitionend",
          No = "animation",
          Do = "animationend";

      Io && (void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend && (xo = "WebkitTransition", Mo = "webkitTransitionEnd"), void 0 === window.onanimationend && void 0 !== window.onwebkitanimationend && (No = "WebkitAnimation", Do = "webkitAnimationEnd"));
      var Oo = K ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout : function (e) {
        return e();
      };

      function Lo(e) {
        Oo(function () {
          Oo(e);
        });
      }

      function $o(e, t) {
        var n = e._transitionClasses || (e._transitionClasses = []);
        n.indexOf(t) < 0 && (n.push(t), _o(e, t));
      }

      function Ro(e, t) {
        e._transitionClasses && A(e._transitionClasses, t), Co(e, t);
      }

      function Po(e, t, n) {
        var i = jo(e, t),
            o = i.type,
            r = i.timeout,
            a = i.propCount;
        if (!o) return n();

        var s = o === To ? Mo : Do,
            l = 0,
            c = function c() {
          e.removeEventListener(s, d), n();
        },
            d = function d(t) {
          t.target === e && ++l >= a && c();
        };

        setTimeout(function () {
          l < a && c();
        }, r + 1), e.addEventListener(s, d);
      }

      var Bo = /\b(transform|all)(,|$)/;

      function jo(e, t) {
        var n,
            i = window.getComputedStyle(e),
            o = (i[xo + "Delay"] || "").split(", "),
            r = (i[xo + "Duration"] || "").split(", "),
            a = Fo(o, r),
            s = (i[No + "Delay"] || "").split(", "),
            l = (i[No + "Duration"] || "").split(", "),
            c = Fo(s, l),
            d = 0,
            u = 0;
        return t === To ? a > 0 && (n = To, d = a, u = r.length) : t === ko ? c > 0 && (n = ko, d = c, u = l.length) : u = (n = (d = Math.max(a, c)) > 0 ? a > c ? To : ko : null) ? n === To ? r.length : l.length : 0, {
          type: n,
          timeout: d,
          propCount: u,
          hasTransform: n === To && Bo.test(i[xo + "Property"])
        };
      }

      function Fo(e, t) {
        for (; e.length < t.length;) {
          e = e.concat(e);
        }

        return Math.max.apply(null, t.map(function (t, n) {
          return Uo(t) + Uo(e[n]);
        }));
      }

      function Uo(e) {
        return 1e3 * Number(e.slice(0, -1).replace(",", "."));
      }

      function Wo(e, t) {
        var n = e.elm;
        a(n._leaveCb) && (n._leaveCb.cancelled = !0, n._leaveCb());
        var i = wo(e.data.transition);

        if (!r(i) && !a(n._enterCb) && 1 === n.nodeType) {
          for (var o = i.css, s = i.type, l = i.enterClass, d = i.enterToClass, u = i.enterActiveClass, f = i.appearClass, p = i.appearToClass, g = i.appearActiveClass, v = i.beforeEnter, m = i.enter, y = i.afterEnter, A = i.enterCancelled, b = i.beforeAppear, E = i.appear, _ = i.afterAppear, C = i.appearCancelled, w = i.duration, S = nn, I = nn.$vnode; I && I.parent;) {
            S = I.context, I = I.parent;
          }

          var T = !S._isMounted || !e.isRootInsert;

          if (!T || E || "" === E) {
            var k = T && f ? f : l,
                x = T && g ? g : u,
                M = T && p ? p : d,
                N = T && b || v,
                D = T && "function" == typeof E ? E : m,
                O = T && _ || y,
                L = T && C || A,
                $ = h(c(w) ? w.enter : w),
                R = !1 !== o && !ee,
                P = Vo(D),
                j = n._enterCb = B(function () {
              R && (Ro(n, M), Ro(n, x)), j.cancelled ? (R && Ro(n, k), L && L(n)) : O && O(n), n._enterCb = null;
            });
            e.data.show || ft(e, "insert", function () {
              var t = n.parentNode,
                  i = t && t._pending && t._pending[e.key];
              i && i.tag === e.tag && i.elm._leaveCb && i.elm._leaveCb(), D && D(n, j);
            }), N && N(n), R && ($o(n, k), $o(n, x), Lo(function () {
              Ro(n, k), j.cancelled || ($o(n, M), P || (Go($) ? setTimeout(j, $) : Po(n, s, j)));
            })), e.data.show && (t && t(), D && D(n, j)), R || P || j();
          }
        }
      }

      function Ho(e, t) {
        var n = e.elm;
        a(n._enterCb) && (n._enterCb.cancelled = !0, n._enterCb());
        var i = wo(e.data.transition);
        if (r(i) || 1 !== n.nodeType) return t();

        if (!a(n._leaveCb)) {
          var o = i.css,
              s = i.type,
              l = i.leaveClass,
              d = i.leaveToClass,
              u = i.leaveActiveClass,
              f = i.beforeLeave,
              p = i.leave,
              g = i.afterLeave,
              v = i.leaveCancelled,
              m = i.delayLeave,
              y = i.duration,
              A = !1 !== o && !ee,
              b = Vo(p),
              E = h(c(y) ? y.leave : y),
              _ = n._leaveCb = B(function () {
            n.parentNode && n.parentNode._pending && (n.parentNode._pending[e.key] = null), A && (Ro(n, d), Ro(n, u)), _.cancelled ? (A && Ro(n, l), v && v(n)) : (t(), g && g(n)), n._leaveCb = null;
          });

          m ? m(C) : C();
        }

        function C() {
          _.cancelled || (!e.data.show && n.parentNode && ((n.parentNode._pending || (n.parentNode._pending = {}))[e.key] = e), f && f(n), A && ($o(n, l), $o(n, u), Lo(function () {
            Ro(n, l), _.cancelled || ($o(n, d), b || (Go(E) ? setTimeout(_, E) : Po(n, s, _)));
          })), p && p(n, _), A || b || _());
        }
      }

      function Go(e) {
        return "number" == typeof e && !isNaN(e);
      }

      function Vo(e) {
        if (r(e)) return !1;
        var t = e.fns;
        return a(t) ? Vo(Array.isArray(t) ? t[0] : t) : (e._length || e.length) > 1;
      }

      function qo(e, t) {
        !0 !== t.data.show && Wo(t);
      }

      var zo = function (e) {
        var t,
            n,
            i = {},
            o = e.modules,
            c = e.nodeOps;

        for (t = 0; t < li.length; ++t) {
          for (i[li[t]] = [], n = 0; n < o.length; ++n) {
            a(o[n][li[t]]) && i[li[t]].push(o[n][li[t]]);
          }
        }

        function d(e) {
          var t = c.parentNode(e);
          a(t) && c.removeChild(t, e);
        }

        function u(e, t, n, o, r, l, d) {
          if (a(e.elm) && a(l) && (e = l[d] = _e(e)), e.isRootInsert = !r, !function (e, t, n, o) {
            var r = e.data;

            if (a(r)) {
              var l = a(e.componentInstance) && r.keepAlive;
              if (a(r = r.hook) && a(r = r.init) && r(e, !1), a(e.componentInstance)) return f(e, t), p(n, e.elm, o), s(l) && function (e, t, n, o) {
                for (var r, s = e; s.componentInstance;) {
                  if (a(r = (s = s.componentInstance._vnode).data) && a(r = r.transition)) {
                    for (r = 0; r < i.activate.length; ++r) {
                      i.activate[r](si, s);
                    }

                    t.push(s);
                    break;
                  }
                }

                p(n, e.elm, o);
              }(e, t, n, o), !0;
            }
          }(e, t, n, o)) {
            var u = e.data,
                h = e.children,
                v = e.tag;
            a(v) ? (e.elm = e.ns ? c.createElementNS(e.ns, v) : c.createElement(v, e), y(e), g(e, h, t), a(u) && m(e, t), p(n, e.elm, o)) : s(e.isComment) ? (e.elm = c.createComment(e.text), p(n, e.elm, o)) : (e.elm = c.createTextNode(e.text), p(n, e.elm, o));
          }
        }

        function f(e, t) {
          a(e.data.pendingInsert) && (t.push.apply(t, e.data.pendingInsert), e.data.pendingInsert = null), e.elm = e.componentInstance.$el, h(e) ? (m(e, t), y(e)) : (ai(e), t.push(e));
        }

        function p(e, t, n) {
          a(e) && (a(n) ? c.parentNode(n) === e && c.insertBefore(e, t, n) : c.appendChild(e, t));
        }

        function g(e, t, n) {
          if (Array.isArray(t)) for (var i = 0; i < t.length; ++i) {
            u(t[i], n, e.elm, null, !0, t, i);
          } else l(e.text) && c.appendChild(e.elm, c.createTextNode(String(e.text)));
        }

        function h(e) {
          for (; e.componentInstance;) {
            e = e.componentInstance._vnode;
          }

          return a(e.tag);
        }

        function m(e, n) {
          for (var o = 0; o < i.create.length; ++o) {
            i.create[o](si, e);
          }

          a(t = e.data.hook) && (a(t.create) && t.create(si, e), a(t.insert) && n.push(e));
        }

        function y(e) {
          var t;
          if (a(t = e.fnScopeId)) c.setStyleScope(e.elm, t);else for (var n = e; n;) {
            a(t = n.context) && a(t = t.$options._scopeId) && c.setStyleScope(e.elm, t), n = n.parent;
          }
          a(t = nn) && t !== e.context && t !== e.fnContext && a(t = t.$options._scopeId) && c.setStyleScope(e.elm, t);
        }

        function A(e, t, n, i, o, r) {
          for (; i <= o; ++i) {
            u(n[i], r, e, t, !1, n, i);
          }
        }

        function b(e) {
          var t,
              n,
              o = e.data;
          if (a(o)) for (a(t = o.hook) && a(t = t.destroy) && t(e), t = 0; t < i.destroy.length; ++t) {
            i.destroy[t](e);
          }
          if (a(t = e.children)) for (n = 0; n < e.children.length; ++n) {
            b(e.children[n]);
          }
        }

        function E(e, t, n) {
          for (; t <= n; ++t) {
            var i = e[t];
            a(i) && (a(i.tag) ? (_(i), b(i)) : d(i.elm));
          }
        }

        function _(e, t) {
          if (a(t) || a(e.data)) {
            var n,
                o = i.remove.length + 1;

            for (a(t) ? t.listeners += o : t = function (e, t) {
              function n() {
                0 == --n.listeners && d(e);
              }

              return n.listeners = t, n;
            }(e.elm, o), a(n = e.componentInstance) && a(n = n._vnode) && a(n.data) && _(n, t), n = 0; n < i.remove.length; ++n) {
              i.remove[n](e, t);
            }

            a(n = e.data.hook) && a(n = n.remove) ? n(e, t) : t();
          } else d(e.elm);
        }

        function C(e, t, n, i) {
          for (var o = n; o < i; o++) {
            var r = t[o];
            if (a(r) && ci(e, r)) return o;
          }
        }

        function w(e, t, n, o, l, d) {
          if (e !== t) {
            a(t.elm) && a(o) && (t = o[l] = _e(t));
            var f = t.elm = e.elm;
            if (s(e.isAsyncPlaceholder)) a(t.asyncFactory.resolved) ? T(e.elm, t, n) : t.isAsyncPlaceholder = !0;else if (s(t.isStatic) && s(e.isStatic) && t.key === e.key && (s(t.isCloned) || s(t.isOnce))) t.componentInstance = e.componentInstance;else {
              var p,
                  g = t.data;
              a(g) && a(p = g.hook) && a(p = p.prepatch) && p(e, t);
              var v = e.children,
                  m = t.children;

              if (a(g) && h(t)) {
                for (p = 0; p < i.update.length; ++p) {
                  i.update[p](e, t);
                }

                a(p = g.hook) && a(p = p.update) && p(e, t);
              }

              r(t.text) ? a(v) && a(m) ? v !== m && function (e, t, n, i, o) {
                for (var s, l, d, f = 0, p = 0, g = t.length - 1, h = t[0], v = t[g], m = n.length - 1, y = n[0], b = n[m], _ = !o; f <= g && p <= m;) {
                  r(h) ? h = t[++f] : r(v) ? v = t[--g] : ci(h, y) ? (w(h, y, i, n, p), h = t[++f], y = n[++p]) : ci(v, b) ? (w(v, b, i, n, m), v = t[--g], b = n[--m]) : ci(h, b) ? (w(h, b, i, n, m), _ && c.insertBefore(e, h.elm, c.nextSibling(v.elm)), h = t[++f], b = n[--m]) : ci(v, y) ? (w(v, y, i, n, p), _ && c.insertBefore(e, v.elm, h.elm), v = t[--g], y = n[++p]) : (r(s) && (s = di(t, f, g)), r(l = a(y.key) ? s[y.key] : C(y, t, f, g)) ? u(y, i, e, h.elm, !1, n, p) : ci(d = t[l], y) ? (w(d, y, i, n, p), t[l] = void 0, _ && c.insertBefore(e, d.elm, h.elm)) : u(y, i, e, h.elm, !1, n, p), y = n[++p]);
                }

                f > g ? A(e, r(n[m + 1]) ? null : n[m + 1].elm, n, p, m, i) : p > m && E(t, f, g);
              }(f, v, m, n, d) : a(m) ? (a(e.text) && c.setTextContent(f, ""), A(f, null, m, 0, m.length - 1, n)) : a(v) ? E(v, 0, v.length - 1) : a(e.text) && c.setTextContent(f, "") : e.text !== t.text && c.setTextContent(f, t.text), a(g) && a(p = g.hook) && a(p = p.postpatch) && p(e, t);
            }
          }
        }

        function S(e, t, n) {
          if (s(n) && a(e.parent)) e.parent.data.pendingInsert = t;else for (var i = 0; i < t.length; ++i) {
            t[i].data.hook.insert(t[i]);
          }
        }

        var I = v("attrs,class,staticClass,staticStyle,key");

        function T(e, t, n, i) {
          var o,
              r = t.tag,
              l = t.data,
              c = t.children;
          if (i = i || l && l.pre, t.elm = e, s(t.isComment) && a(t.asyncFactory)) return t.isAsyncPlaceholder = !0, !0;
          if (a(l) && (a(o = l.hook) && a(o = o.init) && o(t, !0), a(o = t.componentInstance))) return f(t, n), !0;

          if (a(r)) {
            if (a(c)) if (e.hasChildNodes()) {
              if (a(o = l) && a(o = o.domProps) && a(o = o.innerHTML)) {
                if (o !== e.innerHTML) return !1;
              } else {
                for (var d = !0, u = e.firstChild, p = 0; p < c.length; p++) {
                  if (!u || !T(u, c[p], n, i)) {
                    d = !1;
                    break;
                  }

                  u = u.nextSibling;
                }

                if (!d || u) return !1;
              }
            } else g(t, c, n);

            if (a(l)) {
              var h = !1;

              for (var v in l) {
                if (!I(v)) {
                  h = !0, m(t, n);
                  break;
                }
              }

              !h && l["class"] && st(l["class"]);
            }
          } else e.data !== t.text && (e.data = t.text);

          return !0;
        }

        return function (e, t, n, o) {
          if (!r(t)) {
            var l,
                d = !1,
                f = [];
            if (r(e)) d = !0, u(t, f);else {
              var p = a(e.nodeType);
              if (!p && ci(e, t)) w(e, t, f, null, null, o);else {
                if (p) {
                  if (1 === e.nodeType && e.hasAttribute(j) && (e.removeAttribute(j), n = !0), s(n) && T(e, t, f)) return S(t, f, !0), e;
                  l = e, e = new ye(c.tagName(l).toLowerCase(), {}, [], void 0, l);
                }

                var g = e.elm,
                    v = c.parentNode(g);
                if (u(t, f, g._leaveCb ? null : v, c.nextSibling(g)), a(t.parent)) for (var m = t.parent, y = h(t); m;) {
                  for (var A = 0; A < i.destroy.length; ++A) {
                    i.destroy[A](m);
                  }

                  if (m.elm = t.elm, y) {
                    for (var _ = 0; _ < i.create.length; ++_) {
                      i.create[_](si, m);
                    }

                    var C = m.data.hook.insert;
                    if (C.merged) for (var I = 1; I < C.fns.length; I++) {
                      C.fns[I]();
                    }
                  } else ai(m);

                  m = m.parent;
                }
                a(v) ? E([e], 0, 0) : a(e.tag) && b(e);
              }
            }
            return S(t, f, d), t.elm;
          }

          a(e) && b(e);
        };
      }({
        nodeOps: oi,
        modules: [Ei, xi, ro, lo, bo, K ? {
          create: qo,
          activate: qo,
          remove: function remove(e, t) {
            !0 !== e.data.show ? Ho(e, t) : t();
          }
        } : {}].concat(mi)
      });

      ee && document.addEventListener("selectionchange", function () {
        var e = document.activeElement;
        e && e.vmodel && tr(e, "input");
      });
      var Yo = {
        inserted: function inserted(e, t, n, i) {
          "select" === n.tag ? (i.elm && !i.elm._vOptions ? ft(n, "postpatch", function () {
            Yo.componentUpdated(e, t, n);
          }) : Ko(e, t, n.context), e._vOptions = [].map.call(e.options, Xo)) : ("textarea" === n.tag || ni(e.type)) && (e._vModifiers = t.modifiers, t.modifiers.lazy || (e.addEventListener("compositionstart", Zo), e.addEventListener("compositionend", er), e.addEventListener("change", er), ee && (e.vmodel = !0)));
        },
        componentUpdated: function componentUpdated(e, t, n) {
          if ("select" === n.tag) {
            Ko(e, t, n.context);
            var i = e._vOptions,
                o = e._vOptions = [].map.call(e.options, Xo);
            o.some(function (e, t) {
              return !R(e, i[t]);
            }) && (e.multiple ? t.value.some(function (e) {
              return Qo(e, o);
            }) : t.value !== t.oldValue && Qo(t.value, o)) && tr(e, "change");
          }
        }
      };

      function Ko(e, t, n) {
        Jo(e, t), (Z || te) && setTimeout(function () {
          Jo(e, t);
        }, 0);
      }

      function Jo(e, t, n) {
        var i = t.value,
            o = e.multiple;

        if (!o || Array.isArray(i)) {
          for (var r, a, s = 0, l = e.options.length; s < l; s++) {
            if (a = e.options[s], o) r = P(i, Xo(a)) > -1, a.selected !== r && (a.selected = r);else if (R(Xo(a), i)) return void (e.selectedIndex !== s && (e.selectedIndex = s));
          }

          o || (e.selectedIndex = -1);
        }
      }

      function Qo(e, t) {
        return t.every(function (t) {
          return !R(t, e);
        });
      }

      function Xo(e) {
        return "_value" in e ? e._value : e.value;
      }

      function Zo(e) {
        e.target.composing = !0;
      }

      function er(e) {
        e.target.composing && (e.target.composing = !1, tr(e.target, "input"));
      }

      function tr(e, t) {
        var n = document.createEvent("HTMLEvents");
        n.initEvent(t, !0, !0), e.dispatchEvent(n);
      }

      function nr(e) {
        return !e.componentInstance || e.data && e.data.transition ? e : nr(e.componentInstance._vnode);
      }

      var ir = {
        model: Yo,
        show: {
          bind: function bind(e, t, n) {
            var i = t.value,
                o = (n = nr(n)).data && n.data.transition,
                r = e.__vOriginalDisplay = "none" === e.style.display ? "" : e.style.display;
            i && o ? (n.data.show = !0, Wo(n, function () {
              e.style.display = r;
            })) : e.style.display = i ? r : "none";
          },
          update: function update(e, t, n) {
            var i = t.value;
            !i != !t.oldValue && ((n = nr(n)).data && n.data.transition ? (n.data.show = !0, i ? Wo(n, function () {
              e.style.display = e.__vOriginalDisplay;
            }) : Ho(n, function () {
              e.style.display = "none";
            })) : e.style.display = i ? e.__vOriginalDisplay : "none");
          },
          unbind: function unbind(e, t, n, i, o) {
            o || (e.style.display = e.__vOriginalDisplay);
          }
        }
      },
          or = {
        name: String,
        appear: Boolean,
        css: Boolean,
        mode: String,
        type: String,
        enterClass: String,
        leaveClass: String,
        enterToClass: String,
        leaveToClass: String,
        enterActiveClass: String,
        leaveActiveClass: String,
        appearClass: String,
        appearActiveClass: String,
        appearToClass: String,
        duration: [Number, String, Object]
      };

      function rr(e) {
        var t = e && e.componentOptions;
        return t && t.Ctor.options["abstract"] ? rr(Qt(t.children)) : e;
      }

      function ar(e) {
        var t = {},
            n = e.$options;

        for (var i in n.propsData) {
          t[i] = e[i];
        }

        var o = n._parentListeners;

        for (var r in o) {
          t[w(r)] = o[r];
        }

        return t;
      }

      function sr(e, t) {
        if (/\d-keep-alive$/.test(t.tag)) return e("keep-alive", {
          props: t.componentOptions.propsData
        });
      }

      var lr = function lr(e) {
        return e.tag || Jt(e);
      },
          cr = function cr(e) {
        return "show" === e.name;
      },
          dr = {
        name: "transition",
        props: or,
        "abstract": !0,
        render: function render(e) {
          var t = this,
              n = this.$slots["default"];

          if (n && (n = n.filter(lr)).length) {
            var i = this.mode,
                o = n[0];
            if (function (e) {
              for (; e = e.parent;) {
                if (e.data.transition) return !0;
              }
            }(this.$vnode)) return o;
            var r = rr(o);
            if (!r) return o;
            if (this._leaving) return sr(e, o);
            var a = "__transition-" + this._uid + "-";
            r.key = null == r.key ? r.isComment ? a + "comment" : a + r.tag : l(r.key) ? 0 === String(r.key).indexOf(a) ? r.key : a + r.key : r.key;
            var s = (r.data || (r.data = {})).transition = ar(this),
                c = this._vnode,
                d = rr(c);

            if (r.data.directives && r.data.directives.some(cr) && (r.data.show = !0), d && d.data && !function (e, t) {
              return t.key === e.key && t.tag === e.tag;
            }(r, d) && !Jt(d) && (!d.componentInstance || !d.componentInstance._vnode.isComment)) {
              var u = d.data.transition = M({}, s);
              if ("out-in" === i) return this._leaving = !0, ft(u, "afterLeave", function () {
                t._leaving = !1, t.$forceUpdate();
              }), sr(e, o);

              if ("in-out" === i) {
                if (Jt(r)) return c;

                var f,
                    p = function p() {
                  f();
                };

                ft(s, "afterEnter", p), ft(s, "enterCancelled", p), ft(u, "delayLeave", function (e) {
                  f = e;
                });
              }
            }

            return o;
          }
        }
      },
          ur = M({
        tag: String,
        moveClass: String
      }, or);

      function fr(e) {
        e.elm._moveCb && e.elm._moveCb(), e.elm._enterCb && e.elm._enterCb();
      }

      function pr(e) {
        e.data.newPos = e.elm.getBoundingClientRect();
      }

      function gr(e) {
        var t = e.data.pos,
            n = e.data.newPos,
            i = t.left - n.left,
            o = t.top - n.top;

        if (i || o) {
          e.data.moved = !0;
          var r = e.elm.style;
          r.transform = r.WebkitTransform = "translate(" + i + "px," + o + "px)", r.transitionDuration = "0s";
        }
      }

      delete ur.mode;
      var hr = {
        Transition: dr,
        TransitionGroup: {
          props: ur,
          beforeMount: function beforeMount() {
            var e = this,
                t = this._update;

            this._update = function (n, i) {
              var o = on(e);
              e.__patch__(e._vnode, e.kept, !1, !0), e._vnode = e.kept, o(), t.call(e, n, i);
            };
          },
          render: function render(e) {
            for (var t = this.tag || this.$vnode.data.tag || "span", n = Object.create(null), i = this.prevChildren = this.children, o = this.$slots["default"] || [], r = this.children = [], a = ar(this), s = 0; s < o.length; s++) {
              var l = o[s];
              l.tag && null != l.key && 0 !== String(l.key).indexOf("__vlist") && (r.push(l), n[l.key] = l, (l.data || (l.data = {})).transition = a);
            }

            if (i) {
              for (var c = [], d = [], u = 0; u < i.length; u++) {
                var f = i[u];
                f.data.transition = a, f.data.pos = f.elm.getBoundingClientRect(), n[f.key] ? c.push(f) : d.push(f);
              }

              this.kept = e(t, null, c), this.removed = d;
            }

            return e(t, null, r);
          },
          updated: function updated() {
            var e = this.prevChildren,
                t = this.moveClass || (this.name || "v") + "-move";
            e.length && this.hasMove(e[0].elm, t) && (e.forEach(fr), e.forEach(pr), e.forEach(gr), this._reflow = document.body.offsetHeight, e.forEach(function (e) {
              if (e.data.moved) {
                var n = e.elm,
                    i = n.style;
                $o(n, t), i.transform = i.WebkitTransform = i.transitionDuration = "", n.addEventListener(Mo, n._moveCb = function e(i) {
                  i && i.target !== n || i && !/transform$/.test(i.propertyName) || (n.removeEventListener(Mo, e), n._moveCb = null, Ro(n, t));
                });
              }
            }));
          },
          methods: {
            hasMove: function hasMove(e, t) {
              if (!Io) return !1;
              if (this._hasMove) return this._hasMove;
              var n = e.cloneNode();
              e._transitionClasses && e._transitionClasses.forEach(function (e) {
                Co(n, e);
              }), _o(n, t), n.style.display = "none", this.$el.appendChild(n);
              var i = jo(n);
              return this.$el.removeChild(n), this._hasMove = i.hasTransform;
            }
          }
        }
      };
      Mn.config.mustUseProp = jn, Mn.config.isReservedTag = Zn, Mn.config.isReservedAttr = Pn, Mn.config.getTagNamespace = ei, Mn.config.isUnknownElement = function (e) {
        if (!K) return !0;
        if (Zn(e)) return !1;
        if (e = e.toLowerCase(), null != ti[e]) return ti[e];
        var t = document.createElement(e);
        return e.indexOf("-") > -1 ? ti[e] = t.constructor === window.HTMLUnknownElement || t.constructor === window.HTMLElement : ti[e] = /HTMLUnknownElement/.test(t.toString());
      }, M(Mn.options.directives, ir), M(Mn.options.components, hr), Mn.prototype.__patch__ = K ? zo : D, Mn.prototype.$mount = function (e, t) {
        return function (e, t, n) {
          var i;
          return e.$el = t, e.$options.render || (e.$options.render = be), ln(e, "beforeMount"), i = function i() {
            e._update(e._render(), n);
          }, new bn(e, i, D, {
            before: function before() {
              e._isMounted && !e._isDestroyed && ln(e, "beforeUpdate");
            }
          }, !0), n = !1, null == e.$vnode && (e._isMounted = !0, ln(e, "mounted")), e;
        }(this, e = e && K ? ii(e) : void 0, t);
      }, K && setTimeout(function () {
        W.devtools && le && le.emit("init", Mn);
      }, 0);

      var vr,
          mr = /\{\{((?:.|\r?\n)+?)\}\}/g,
          yr = /[-.*+?^${}()|[\]\/\\]/g,
          Ar = _(function (e) {
        var t = e[0].replace(yr, "\\$&"),
            n = e[1].replace(yr, "\\$&");
        return new RegExp(t + "((?:.|\\n)+?)" + n, "g");
      }),
          br = {
        staticKeys: ["staticClass"],
        transformNode: function transformNode(e, t) {
          t.warn;
          var n = Wi(e, "class");
          n && (e.staticClass = JSON.stringify(n));
          var i = Ui(e, "class", !1);
          i && (e.classBinding = i);
        },
        genData: function genData(e) {
          var t = "";
          return e.staticClass && (t += "staticClass:" + e.staticClass + ","), e.classBinding && (t += "class:" + e.classBinding + ","), t;
        }
      },
          Er = {
        staticKeys: ["staticStyle"],
        transformNode: function transformNode(e, t) {
          t.warn;
          var n = Wi(e, "style");
          n && (e.staticStyle = JSON.stringify(co(n)));
          var i = Ui(e, "style", !1);
          i && (e.styleBinding = i);
        },
        genData: function genData(e) {
          var t = "";
          return e.staticStyle && (t += "staticStyle:" + e.staticStyle + ","), e.styleBinding && (t += "style:(" + e.styleBinding + "),"), t;
        }
      },
          _r = v("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr"),
          Cr = v("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source"),
          wr = v("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track"),
          Sr = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,
          Ir = /^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,
          Tr = "[a-zA-Z_][\\-\\.0-9_a-zA-Z" + H.source + "]*",
          kr = "((?:" + Tr + "\\:)?" + Tr + ")",
          xr = new RegExp("^<" + kr),
          Mr = /^\s*(\/?)>/,
          Nr = new RegExp("^<\\/" + kr + "[^>]*>"),
          Dr = /^<!DOCTYPE [^>]+>/i,
          Or = /^<!\--/,
          Lr = /^<!\[/,
          $r = v("script,style,textarea", !0),
          Rr = {},
          Pr = {
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&amp;": "&",
        "&#10;": "\n",
        "&#9;": "\t",
        "&#39;": "'"
      },
          Br = /&(?:lt|gt|quot|amp|#39);/g,
          jr = /&(?:lt|gt|quot|amp|#39|#10|#9);/g,
          Fr = v("pre,textarea", !0),
          Ur = function Ur(e, t) {
        return e && Fr(e) && "\n" === t[0];
      };

      function Wr(e, t) {
        var n = t ? jr : Br;
        return e.replace(n, function (e) {
          return Pr[e];
        });
      }

      var Hr,
          Gr,
          Vr,
          qr,
          zr,
          Yr,
          Kr,
          Jr,
          Qr = /^@|^v-on:/,
          Xr = /^v-|^@|^:|^#/,
          Zr = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,
          ea = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/,
          ta = /^\(|\)$/g,
          na = /^\[.*\]$/,
          ia = /:(.*)$/,
          oa = /^:|^\.|^v-bind:/,
          ra = /\.[^.\]]+(?=[^\]]*$)/g,
          aa = /^v-slot(:|$)|^#/,
          sa = /[\r\n]/,
          la = /\s+/g,
          ca = _(function (e) {
        return (vr = vr || document.createElement("div")).innerHTML = e, vr.textContent;
      }),
          da = "_empty_";

      function ua(e, t, n) {
        return {
          type: 1,
          tag: e,
          attrsList: t,
          attrsMap: ma(t),
          rawAttrsMap: {},
          parent: n,
          children: []
        };
      }

      function fa(e, t) {
        var n;
        !function (e) {
          var t = Ui(e, "key");
          t && (e.key = t);
        }(e), e.plain = !e.key && !e.scopedSlots && !e.attrsList.length, function (e) {
          var t = Ui(e, "ref");
          t && (e.ref = t, e.refInFor = function (e) {
            for (var t = e; t;) {
              if (void 0 !== t["for"]) return !0;
              t = t.parent;
            }

            return !1;
          }(e));
        }(e), function (e) {
          var t;
          "template" === e.tag ? (t = Wi(e, "scope"), e.slotScope = t || Wi(e, "slot-scope")) : (t = Wi(e, "slot-scope")) && (e.slotScope = t);
          var n = Ui(e, "slot");

          if (n && (e.slotTarget = '""' === n ? '"default"' : n, e.slotTargetDynamic = !(!e.attrsMap[":slot"] && !e.attrsMap["v-bind:slot"]), "template" === e.tag || e.slotScope || Ri(e, "slot", n, function (e, t) {
            return e.rawAttrsMap[":slot"] || e.rawAttrsMap["v-bind:slot"] || e.rawAttrsMap.slot;
          }(e))), "template" === e.tag) {
            var i = Hi(e, aa);

            if (i) {
              var o = ha(i),
                  r = o.name,
                  a = o.dynamic;
              e.slotTarget = r, e.slotTargetDynamic = a, e.slotScope = i.value || da;
            }
          } else {
            var s = Hi(e, aa);

            if (s) {
              var l = e.scopedSlots || (e.scopedSlots = {}),
                  c = ha(s),
                  d = c.name,
                  u = c.dynamic,
                  f = l[d] = ua("template", [], e);
              f.slotTarget = d, f.slotTargetDynamic = u, f.children = e.children.filter(function (e) {
                if (!e.slotScope) return e.parent = f, !0;
              }), f.slotScope = s.value || da, e.children = [], e.plain = !1;
            }
          }
        }(e), "slot" === (n = e).tag && (n.slotName = Ui(n, "name")), function (e) {
          var t;
          (t = Ui(e, "is")) && (e.component = t), null != Wi(e, "inline-template") && (e.inlineTemplate = !0);
        }(e);

        for (var i = 0; i < Vr.length; i++) {
          e = Vr[i](e, t) || e;
        }

        return function (e) {
          var t,
              n,
              i,
              o,
              r,
              a,
              s,
              l,
              c = e.attrsList;

          for (t = 0, n = c.length; t < n; t++) {
            if (i = o = c[t].name, r = c[t].value, Xr.test(i)) {
              if (e.hasBindings = !0, (a = va(i.replace(Xr, ""))) && (i = i.replace(ra, "")), oa.test(i)) i = i.replace(oa, ""), r = Ni(r), (l = na.test(i)) && (i = i.slice(1, -1)), a && (a.prop && !l && "innerHtml" === (i = w(i)) && (i = "innerHTML"), a.camel && !l && (i = w(i)), a.sync && (s = qi(r, "$event"), l ? Fi(e, '"update:"+(' + i + ")", s, null, !1, 0, c[t], !0) : (Fi(e, "update:" + w(i), s, null, !1, 0, c[t]), T(i) !== w(i) && Fi(e, "update:" + T(i), s, null, !1, 0, c[t])))), a && a.prop || !e.component && Kr(e.tag, e.attrsMap.type, i) ? $i(e, i, r, c[t], l) : Ri(e, i, r, c[t], l);else if (Qr.test(i)) i = i.replace(Qr, ""), (l = na.test(i)) && (i = i.slice(1, -1)), Fi(e, i, r, a, !1, 0, c[t], l);else {
                var d = (i = i.replace(Xr, "")).match(ia),
                    u = d && d[1];
                l = !1, u && (i = i.slice(0, -(u.length + 1)), na.test(u) && (u = u.slice(1, -1), l = !0)), Bi(e, i, o, r, u, l, a, c[t]);
              }
            } else Ri(e, i, JSON.stringify(r), c[t]), !e.component && "muted" === i && Kr(e.tag, e.attrsMap.type, i) && $i(e, i, "true", c[t]);
          }
        }(e), e;
      }

      function pa(e) {
        var t;

        if (t = Wi(e, "v-for")) {
          var n = function (e) {
            var t = e.match(Zr);

            if (t) {
              var n = {};
              n["for"] = t[2].trim();
              var i = t[1].trim().replace(ta, ""),
                  o = i.match(ea);
              return o ? (n.alias = i.replace(ea, "").trim(), n.iterator1 = o[1].trim(), o[2] && (n.iterator2 = o[2].trim())) : n.alias = i, n;
            }
          }(t);

          n && M(e, n);
        }
      }

      function ga(e, t) {
        e.ifConditions || (e.ifConditions = []), e.ifConditions.push(t);
      }

      function ha(e) {
        var t = e.name.replace(aa, "");
        return t || "#" !== e.name[0] && (t = "default"), na.test(t) ? {
          name: t.slice(1, -1),
          dynamic: !0
        } : {
          name: '"' + t + '"',
          dynamic: !1
        };
      }

      function va(e) {
        var t = e.match(ra);

        if (t) {
          var n = {};
          return t.forEach(function (e) {
            n[e.slice(1)] = !0;
          }), n;
        }
      }

      function ma(e) {
        for (var t = {}, n = 0, i = e.length; n < i; n++) {
          t[e[n].name] = e[n].value;
        }

        return t;
      }

      var ya = /^xmlns:NS\d+/,
          Aa = /^NS\d+:/;

      function ba(e) {
        return ua(e.tag, e.attrsList.slice(), e.parent);
      }

      var Ea,
          _a,
          Ca,
          wa = [br, Er, {
        preTransformNode: function preTransformNode(e, t) {
          if ("input" === e.tag) {
            var n,
                i = e.attrsMap;
            if (!i["v-model"]) return;

            if ((i[":type"] || i["v-bind:type"]) && (n = Ui(e, "type")), i.type || n || !i["v-bind"] || (n = "(" + i["v-bind"] + ").type"), n) {
              var o = Wi(e, "v-if", !0),
                  r = o ? "&&(" + o + ")" : "",
                  a = null != Wi(e, "v-else", !0),
                  s = Wi(e, "v-else-if", !0),
                  l = ba(e);
              pa(l), Pi(l, "type", "checkbox"), fa(l, t), l.processed = !0, l["if"] = "(" + n + ")==='checkbox'" + r, ga(l, {
                exp: l["if"],
                block: l
              });
              var c = ba(e);
              Wi(c, "v-for", !0), Pi(c, "type", "radio"), fa(c, t), ga(l, {
                exp: "(" + n + ")==='radio'" + r,
                block: c
              });
              var d = ba(e);
              return Wi(d, "v-for", !0), Pi(d, ":type", n), fa(d, t), ga(l, {
                exp: o,
                block: d
              }), a ? l["else"] = !0 : s && (l.elseif = s), l;
            }
          }
        }
      }],
          Sa = {
        expectHTML: !0,
        modules: wa,
        directives: {
          model: function model(e, t, n) {
            var i = t.value,
                o = t.modifiers,
                r = e.tag,
                a = e.attrsMap.type;
            if (e.component) return Vi(e, i, o), !1;
            if ("select" === r) !function (e, t, n) {
              var i = 'var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return ' + (n && n.number ? "_n(val)" : "val") + "});";
              Fi(e, "change", i = i + " " + qi(t, "$event.target.multiple ? $$selectedVal : $$selectedVal[0]"), null, !0);
            }(e, i, o);else if ("input" === r && "checkbox" === a) !function (e, t, n) {
              var i = n && n.number,
                  o = Ui(e, "value") || "null",
                  r = Ui(e, "true-value") || "true",
                  a = Ui(e, "false-value") || "false";
              $i(e, "checked", "Array.isArray(" + t + ")?_i(" + t + "," + o + ")>-1" + ("true" === r ? ":(" + t + ")" : ":_q(" + t + "," + r + ")")), Fi(e, "change", "var $$a=" + t + ",$$el=$event.target,$$c=$$el.checked?(" + r + "):(" + a + ");if(Array.isArray($$a)){var $$v=" + (i ? "_n(" + o + ")" : o) + ",$$i=_i($$a,$$v);if($$el.checked){$$i<0&&(" + qi(t, "$$a.concat([$$v])") + ")}else{$$i>-1&&(" + qi(t, "$$a.slice(0,$$i).concat($$a.slice($$i+1))") + ")}}else{" + qi(t, "$$c") + "}", null, !0);
            }(e, i, o);else if ("input" === r && "radio" === a) !function (e, t, n) {
              var i = n && n.number,
                  o = Ui(e, "value") || "null";
              $i(e, "checked", "_q(" + t + "," + (o = i ? "_n(" + o + ")" : o) + ")"), Fi(e, "change", qi(t, o), null, !0);
            }(e, i, o);else if ("input" === r || "textarea" === r) !function (e, t, n) {
              var i = e.attrsMap.type,
                  o = n || {},
                  r = o.lazy,
                  a = o.number,
                  s = o.trim,
                  l = !r && "range" !== i,
                  c = r ? "change" : "range" === i ? "__r" : "input",
                  d = "$event.target.value";
              s && (d = "$event.target.value.trim()"), a && (d = "_n(" + d + ")");
              var u = qi(t, d);
              l && (u = "if($event.target.composing)return;" + u), $i(e, "value", "(" + t + ")"), Fi(e, c, u, null, !0), (s || a) && Fi(e, "blur", "$forceUpdate()");
            }(e, i, o);else if (!W.isReservedTag(r)) return Vi(e, i, o), !1;
            return !0;
          },
          text: function text(e, t) {
            t.value && $i(e, "textContent", "_s(" + t.value + ")", t);
          },
          html: function html(e, t) {
            t.value && $i(e, "innerHTML", "_s(" + t.value + ")", t);
          }
        },
        isPreTag: function isPreTag(e) {
          return "pre" === e;
        },
        isUnaryTag: _r,
        mustUseProp: jn,
        canBeLeftOpenTag: Cr,
        isReservedTag: Zn,
        getTagNamespace: ei,
        staticKeys: (Ca = wa, Ca.reduce(function (e, t) {
          return e.concat(t.staticKeys || []);
        }, []).join(","))
      },
          Ia = _(function (e) {
        return v("type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap" + (e ? "," + e : ""));
      });

      function Ta(e, t) {
        e && (Ea = Ia(t.staticKeys || ""), _a = t.isReservedTag || O, ka(e), xa(e, !1));
      }

      function ka(e) {
        if (e["static"] = function (e) {
          return 2 !== e.type && (3 === e.type || !(!e.pre && (e.hasBindings || e["if"] || e["for"] || m(e.tag) || !_a(e.tag) || function (e) {
            for (; e.parent;) {
              if ("template" !== (e = e.parent).tag) return !1;
              if (e["for"]) return !0;
            }

            return !1;
          }(e) || !Object.keys(e).every(Ea))));
        }(e), 1 === e.type) {
          if (!_a(e.tag) && "slot" !== e.tag && null == e.attrsMap["inline-template"]) return;

          for (var t = 0, n = e.children.length; t < n; t++) {
            var i = e.children[t];
            ka(i), i["static"] || (e["static"] = !1);
          }

          if (e.ifConditions) for (var o = 1, r = e.ifConditions.length; o < r; o++) {
            var a = e.ifConditions[o].block;
            ka(a), a["static"] || (e["static"] = !1);
          }
        }
      }

      function xa(e, t) {
        if (1 === e.type) {
          if ((e["static"] || e.once) && (e.staticInFor = t), e["static"] && e.children.length && (1 !== e.children.length || 3 !== e.children[0].type)) return void (e.staticRoot = !0);
          if (e.staticRoot = !1, e.children) for (var n = 0, i = e.children.length; n < i; n++) {
            xa(e.children[n], t || !!e["for"]);
          }
          if (e.ifConditions) for (var o = 1, r = e.ifConditions.length; o < r; o++) {
            xa(e.ifConditions[o].block, t);
          }
        }
      }

      var Ma = /^([\w$_]+|\([^)]*?\))\s*=>|^function(?:\s+[\w$]+)?\s*\(/,
          Na = /\([^)]*?\);*$/,
          Da = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/,
          Oa = {
        esc: 27,
        tab: 9,
        enter: 13,
        space: 32,
        up: 38,
        left: 37,
        right: 39,
        down: 40,
        "delete": [8, 46]
      },
          La = {
        esc: ["Esc", "Escape"],
        tab: "Tab",
        enter: "Enter",
        space: [" ", "Spacebar"],
        up: ["Up", "ArrowUp"],
        left: ["Left", "ArrowLeft"],
        right: ["Right", "ArrowRight"],
        down: ["Down", "ArrowDown"],
        "delete": ["Backspace", "Delete", "Del"]
      },
          $a = function $a(e) {
        return "if(" + e + ")return null;";
      },
          Ra = {
        stop: "$event.stopPropagation();",
        prevent: "$event.preventDefault();",
        self: $a("$event.target !== $event.currentTarget"),
        ctrl: $a("!$event.ctrlKey"),
        shift: $a("!$event.shiftKey"),
        alt: $a("!$event.altKey"),
        meta: $a("!$event.metaKey"),
        left: $a("'button' in $event && $event.button !== 0"),
        middle: $a("'button' in $event && $event.button !== 1"),
        right: $a("'button' in $event && $event.button !== 2")
      };

      function Pa(e, t) {
        var n = t ? "nativeOn:" : "on:",
            i = "",
            o = "";

        for (var r in e) {
          var a = Ba(e[r]);
          e[r] && e[r].dynamic ? o += r + "," + a + "," : i += '"' + r + '":' + a + ",";
        }

        return i = "{" + i.slice(0, -1) + "}", o ? n + "_d(" + i + ",[" + o.slice(0, -1) + "])" : n + i;
      }

      function Ba(e) {
        if (!e) return "function(){}";
        if (Array.isArray(e)) return "[" + e.map(function (e) {
          return Ba(e);
        }).join(",") + "]";
        var t = Da.test(e.value),
            n = Ma.test(e.value),
            i = Da.test(e.value.replace(Na, ""));

        if (e.modifiers) {
          var o = "",
              r = "",
              a = [];

          for (var s in e.modifiers) {
            if (Ra[s]) r += Ra[s], Oa[s] && a.push(s);else if ("exact" === s) {
              var l = e.modifiers;
              r += $a(["ctrl", "shift", "alt", "meta"].filter(function (e) {
                return !l[e];
              }).map(function (e) {
                return "$event." + e + "Key";
              }).join("||"));
            } else a.push(s);
          }

          return a.length && (o += function (e) {
            return "if(!$event.type.indexOf('key')&&" + e.map(ja).join("&&") + ")return null;";
          }(a)), r && (o += r), "function($event){" + o + (t ? "return " + e.value + "($event)" : n ? "return (" + e.value + ")($event)" : i ? "return " + e.value : e.value) + "}";
        }

        return t || n ? e.value : "function($event){" + (i ? "return " + e.value : e.value) + "}";
      }

      function ja(e) {
        var t = parseInt(e, 10);
        if (t) return "$event.keyCode!==" + t;
        var n = Oa[e],
            i = La[e];
        return "_k($event.keyCode," + JSON.stringify(e) + "," + JSON.stringify(n) + ",$event.key," + JSON.stringify(i) + ")";
      }

      var Fa = {
        on: function on(e, t) {
          e.wrapListeners = function (e) {
            return "_g(" + e + "," + t.value + ")";
          };
        },
        bind: function bind(e, t) {
          e.wrapData = function (n) {
            return "_b(" + n + ",'" + e.tag + "'," + t.value + "," + (t.modifiers && t.modifiers.prop ? "true" : "false") + (t.modifiers && t.modifiers.sync ? ",true" : "") + ")";
          };
        },
        cloak: D
      },
          Ua = function Ua(e) {
        this.options = e, this.warn = e.warn || Oi, this.transforms = Li(e.modules, "transformCode"), this.dataGenFns = Li(e.modules, "genData"), this.directives = M(M({}, Fa), e.directives);
        var t = e.isReservedTag || O;
        this.maybeComponent = function (e) {
          return !!e.component || !t(e.tag);
        }, this.onceId = 0, this.staticRenderFns = [], this.pre = !1;
      };

      function Wa(e, t) {
        var n = new Ua(t);
        return {
          render: "with(this){return " + (e ? Ha(e, n) : '_c("div")') + "}",
          staticRenderFns: n.staticRenderFns
        };
      }

      function Ha(e, t) {
        if (e.parent && (e.pre = e.pre || e.parent.pre), e.staticRoot && !e.staticProcessed) return Ga(e, t);
        if (e.once && !e.onceProcessed) return Va(e, t);
        if (e["for"] && !e.forProcessed) return Ya(e, t);
        if (e["if"] && !e.ifProcessed) return qa(e, t);

        if ("template" !== e.tag || e.slotTarget || t.pre) {
          if ("slot" === e.tag) return function (e, t) {
            var n = e.slotName || '"default"',
                i = Xa(e, t),
                o = "_t(" + n + (i ? "," + i : ""),
                r = e.attrs || e.dynamicAttrs ? ts((e.attrs || []).concat(e.dynamicAttrs || []).map(function (e) {
              return {
                name: w(e.name),
                value: e.value,
                dynamic: e.dynamic
              };
            })) : null,
                a = e.attrsMap["v-bind"];
            return !r && !a || i || (o += ",null"), r && (o += "," + r), a && (o += (r ? "" : ",null") + "," + a), o + ")";
          }(e, t);
          var n;
          if (e.component) n = function (e, t, n) {
            var i = t.inlineTemplate ? null : Xa(t, n, !0);
            return "_c(" + e + "," + Ka(t, n) + (i ? "," + i : "") + ")";
          }(e.component, e, t);else {
            var i;
            (!e.plain || e.pre && t.maybeComponent(e)) && (i = Ka(e, t));
            var o = e.inlineTemplate ? null : Xa(e, t, !0);
            n = "_c('" + e.tag + "'" + (i ? "," + i : "") + (o ? "," + o : "") + ")";
          }

          for (var r = 0; r < t.transforms.length; r++) {
            n = t.transforms[r](e, n);
          }

          return n;
        }

        return Xa(e, t) || "void 0";
      }

      function Ga(e, t) {
        e.staticProcessed = !0;
        var n = t.pre;
        return e.pre && (t.pre = e.pre), t.staticRenderFns.push("with(this){return " + Ha(e, t) + "}"), t.pre = n, "_m(" + (t.staticRenderFns.length - 1) + (e.staticInFor ? ",true" : "") + ")";
      }

      function Va(e, t) {
        if (e.onceProcessed = !0, e["if"] && !e.ifProcessed) return qa(e, t);

        if (e.staticInFor) {
          for (var n = "", i = e.parent; i;) {
            if (i["for"]) {
              n = i.key;
              break;
            }

            i = i.parent;
          }

          return n ? "_o(" + Ha(e, t) + "," + t.onceId++ + "," + n + ")" : Ha(e, t);
        }

        return Ga(e, t);
      }

      function qa(e, t, n, i) {
        return e.ifProcessed = !0, za(e.ifConditions.slice(), t, n, i);
      }

      function za(e, t, n, i) {
        if (!e.length) return i || "_e()";
        var o = e.shift();
        return o.exp ? "(" + o.exp + ")?" + r(o.block) + ":" + za(e, t, n, i) : "" + r(o.block);

        function r(e) {
          return n ? n(e, t) : e.once ? Va(e, t) : Ha(e, t);
        }
      }

      function Ya(e, t, n, i) {
        var o = e["for"],
            r = e.alias,
            a = e.iterator1 ? "," + e.iterator1 : "",
            s = e.iterator2 ? "," + e.iterator2 : "";
        return e.forProcessed = !0, (i || "_l") + "((" + o + "),function(" + r + a + s + "){return " + (n || Ha)(e, t) + "})";
      }

      function Ka(e, t) {
        var n = "{",
            i = function (e, t) {
          var n = e.directives;

          if (n) {
            var i,
                o,
                r,
                a,
                s = "directives:[",
                l = !1;

            for (i = 0, o = n.length; i < o; i++) {
              r = n[i], a = !0;
              var c = t.directives[r.name];
              c && (a = !!c(e, r, t.warn)), a && (l = !0, s += '{name:"' + r.name + '",rawName:"' + r.rawName + '"' + (r.value ? ",value:(" + r.value + "),expression:" + JSON.stringify(r.value) : "") + (r.arg ? ",arg:" + (r.isDynamicArg ? r.arg : '"' + r.arg + '"') : "") + (r.modifiers ? ",modifiers:" + JSON.stringify(r.modifiers) : "") + "},");
            }

            return l ? s.slice(0, -1) + "]" : void 0;
          }
        }(e, t);

        i && (n += i + ","), e.key && (n += "key:" + e.key + ","), e.ref && (n += "ref:" + e.ref + ","), e.refInFor && (n += "refInFor:true,"), e.pre && (n += "pre:true,"), e.component && (n += 'tag:"' + e.tag + '",');

        for (var o = 0; o < t.dataGenFns.length; o++) {
          n += t.dataGenFns[o](e);
        }

        if (e.attrs && (n += "attrs:" + ts(e.attrs) + ","), e.props && (n += "domProps:" + ts(e.props) + ","), e.events && (n += Pa(e.events, !1) + ","), e.nativeEvents && (n += Pa(e.nativeEvents, !0) + ","), e.slotTarget && !e.slotScope && (n += "slot:" + e.slotTarget + ","), e.scopedSlots && (n += function (e, t, n) {
          var i = e["for"] || Object.keys(t).some(function (e) {
            var n = t[e];
            return n.slotTargetDynamic || n["if"] || n["for"] || Ja(n);
          }),
              o = !!e["if"];
          if (!i) for (var r = e.parent; r;) {
            if (r.slotScope && r.slotScope !== da || r["for"]) {
              i = !0;
              break;
            }

            r["if"] && (o = !0), r = r.parent;
          }
          var a = Object.keys(t).map(function (e) {
            return Qa(t[e], n);
          }).join(",");
          return "scopedSlots:_u([" + a + "]" + (i ? ",null,true" : "") + (!i && o ? ",null,false," + function (e) {
            for (var t = 5381, n = e.length; n;) {
              t = 33 * t ^ e.charCodeAt(--n);
            }

            return t >>> 0;
          }(a) : "") + ")";
        }(e, e.scopedSlots, t) + ","), e.model && (n += "model:{value:" + e.model.value + ",callback:" + e.model.callback + ",expression:" + e.model.expression + "},"), e.inlineTemplate) {
          var r = function (e, t) {
            var n = e.children[0];

            if (n && 1 === n.type) {
              var i = Wa(n, t.options);
              return "inlineTemplate:{render:function(){" + i.render + "},staticRenderFns:[" + i.staticRenderFns.map(function (e) {
                return "function(){" + e + "}";
              }).join(",") + "]}";
            }
          }(e, t);

          r && (n += r + ",");
        }

        return n = n.replace(/,$/, "") + "}", e.dynamicAttrs && (n = "_b(" + n + ',"' + e.tag + '",' + ts(e.dynamicAttrs) + ")"), e.wrapData && (n = e.wrapData(n)), e.wrapListeners && (n = e.wrapListeners(n)), n;
      }

      function Ja(e) {
        return 1 === e.type && ("slot" === e.tag || e.children.some(Ja));
      }

      function Qa(e, t) {
        var n = e.attrsMap["slot-scope"];
        if (e["if"] && !e.ifProcessed && !n) return qa(e, t, Qa, "null");
        if (e["for"] && !e.forProcessed) return Ya(e, t, Qa);
        var i = e.slotScope === da ? "" : String(e.slotScope),
            o = "function(" + i + "){return " + ("template" === e.tag ? e["if"] && n ? "(" + e["if"] + ")?" + (Xa(e, t) || "undefined") + ":undefined" : Xa(e, t) || "undefined" : Ha(e, t)) + "}",
            r = i ? "" : ",proxy:true";
        return "{key:" + (e.slotTarget || '"default"') + ",fn:" + o + r + "}";
      }

      function Xa(e, t, n, i, o) {
        var r = e.children;

        if (r.length) {
          var a = r[0];

          if (1 === r.length && a["for"] && "template" !== a.tag && "slot" !== a.tag) {
            var s = n ? t.maybeComponent(a) ? ",1" : ",0" : "";
            return "" + (i || Ha)(a, t) + s;
          }

          var l = n ? function (e, t) {
            for (var n = 0, i = 0; i < e.length; i++) {
              var o = e[i];

              if (1 === o.type) {
                if (Za(o) || o.ifConditions && o.ifConditions.some(function (e) {
                  return Za(e.block);
                })) {
                  n = 2;
                  break;
                }

                (t(o) || o.ifConditions && o.ifConditions.some(function (e) {
                  return t(e.block);
                })) && (n = 1);
              }
            }

            return n;
          }(r, t.maybeComponent) : 0,
              c = o || es;
          return "[" + r.map(function (e) {
            return c(e, t);
          }).join(",") + "]" + (l ? "," + l : "");
        }
      }

      function Za(e) {
        return void 0 !== e["for"] || "template" === e.tag || "slot" === e.tag;
      }

      function es(e, t) {
        return 1 === e.type ? Ha(e, t) : 3 === e.type && e.isComment ? function (e) {
          return "_e(" + JSON.stringify(e.text) + ")";
        }(e) : "_v(" + (2 === (n = e).type ? n.expression : ns(JSON.stringify(n.text))) + ")";
        var n;
      }

      function ts(e) {
        for (var t = "", n = "", i = 0; i < e.length; i++) {
          var o = e[i],
              r = ns(o.value);
          o.dynamic ? n += o.name + "," + r + "," : t += '"' + o.name + '":' + r + ",";
        }

        return t = "{" + t.slice(0, -1) + "}", n ? "_d(" + t + ",[" + n.slice(0, -1) + "])" : t;
      }

      function ns(e) {
        return e.replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
      }

      function is(e, t) {
        try {
          return new Function(e);
        } catch (n) {
          return t.push({
            err: n,
            code: e
          }), D;
        }
      }

      function os(e) {
        var t = Object.create(null);
        return function (n, i, o) {
          (i = M({}, i)).warn, delete i.warn;
          var r = i.delimiters ? String(i.delimiters) + n : n;
          if (t[r]) return t[r];
          var a = e(n, i),
              s = {},
              l = [];
          return s.render = is(a.render, l), s.staticRenderFns = a.staticRenderFns.map(function (e) {
            return is(e, l);
          }), t[r] = s;
        };
      }

      new RegExp("\\b" + "do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments".split(",").join("\\b|\\b") + "\\b"), new RegExp("\\b" + "delete,typeof,void".split(",").join("\\s*\\([^\\)]*\\)|\\b") + "\\s*\\([^\\)]*\\)");
      var rs,
          as,
          ss = (rs = function rs(e, t) {
        var n = function (e, t) {
          Hr = t.warn || Oi, Yr = t.isPreTag || O, Kr = t.mustUseProp || O, Jr = t.getTagNamespace || O, t.isReservedTag, Vr = Li(t.modules, "transformNode"), qr = Li(t.modules, "preTransformNode"), zr = Li(t.modules, "postTransformNode"), Gr = t.delimiters;
          var n,
              i,
              o = [],
              r = !1 !== t.preserveWhitespace,
              a = t.whitespace,
              s = !1,
              l = !1;

          function c(e) {
            if (d(e), s || e.processed || (e = fa(e, t)), o.length || e === n || n["if"] && (e.elseif || e["else"]) && ga(n, {
              exp: e.elseif,
              block: e
            }), i && !e.forbidden) if (e.elseif || e["else"]) a = e, (c = function (e) {
              for (var t = e.length; t--;) {
                if (1 === e[t].type) return e[t];
                e.pop();
              }
            }(i.children)) && c["if"] && ga(c, {
              exp: a.elseif,
              block: a
            });else {
              if (e.slotScope) {
                var r = e.slotTarget || '"default"';
                (i.scopedSlots || (i.scopedSlots = {}))[r] = e;
              }

              i.children.push(e), e.parent = i;
            }
            var a, c;
            e.children = e.children.filter(function (e) {
              return !e.slotScope;
            }), d(e), e.pre && (s = !1), Yr(e.tag) && (l = !1);

            for (var u = 0; u < zr.length; u++) {
              zr[u](e, t);
            }
          }

          function d(e) {
            if (!l) for (var t; (t = e.children[e.children.length - 1]) && 3 === t.type && " " === t.text;) {
              e.children.pop();
            }
          }

          return function (e, t) {
            for (var n, i, o = [], r = t.expectHTML, a = t.isUnaryTag || O, s = t.canBeLeftOpenTag || O, l = 0; e;) {
              if (n = e, i && $r(i)) {
                var c = 0,
                    d = i.toLowerCase(),
                    u = Rr[d] || (Rr[d] = new RegExp("([\\s\\S]*?)(</" + d + "[^>]*>)", "i")),
                    f = e.replace(u, function (e, n, i) {
                  return c = i.length, $r(d) || "noscript" === d || (n = n.replace(/<!\--([\s\S]*?)-->/g, "$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g, "$1")), Ur(d, n) && (n = n.slice(1)), t.chars && t.chars(n), "";
                });
                l += e.length - f.length, e = f, I(d, l - c, l);
              } else {
                var p = e.indexOf("<");

                if (0 === p) {
                  if (Or.test(e)) {
                    var g = e.indexOf("--\x3e");

                    if (g >= 0) {
                      t.shouldKeepComment && t.comment(e.substring(4, g), l, l + g + 3), C(g + 3);
                      continue;
                    }
                  }

                  if (Lr.test(e)) {
                    var h = e.indexOf("]>");

                    if (h >= 0) {
                      C(h + 2);
                      continue;
                    }
                  }

                  var v = e.match(Dr);

                  if (v) {
                    C(v[0].length);
                    continue;
                  }

                  var m = e.match(Nr);

                  if (m) {
                    var y = l;
                    C(m[0].length), I(m[1], y, l);
                    continue;
                  }

                  var A = w();

                  if (A) {
                    S(A), Ur(A.tagName, e) && C(1);
                    continue;
                  }
                }

                var b = void 0,
                    E = void 0,
                    _ = void 0;

                if (p >= 0) {
                  for (E = e.slice(p); !(Nr.test(E) || xr.test(E) || Or.test(E) || Lr.test(E) || (_ = E.indexOf("<", 1)) < 0);) {
                    p += _, E = e.slice(p);
                  }

                  b = e.substring(0, p);
                }

                p < 0 && (b = e), b && C(b.length), t.chars && b && t.chars(b, l - b.length, l);
              }

              if (e === n) {
                t.chars && t.chars(e);
                break;
              }
            }

            function C(t) {
              l += t, e = e.substring(t);
            }

            function w() {
              var t = e.match(xr);

              if (t) {
                var n,
                    i,
                    o = {
                  tagName: t[1],
                  attrs: [],
                  start: l
                };

                for (C(t[0].length); !(n = e.match(Mr)) && (i = e.match(Ir) || e.match(Sr));) {
                  i.start = l, C(i[0].length), i.end = l, o.attrs.push(i);
                }

                if (n) return o.unarySlash = n[1], C(n[0].length), o.end = l, o;
              }
            }

            function S(e) {
              var n = e.tagName,
                  l = e.unarySlash;
              r && ("p" === i && wr(n) && I(i), s(n) && i === n && I(n));

              for (var c = a(n) || !!l, d = e.attrs.length, u = new Array(d), f = 0; f < d; f++) {
                var p = e.attrs[f],
                    g = p[3] || p[4] || p[5] || "",
                    h = "a" === n && "href" === p[1] ? t.shouldDecodeNewlinesForHref : t.shouldDecodeNewlines;
                u[f] = {
                  name: p[1],
                  value: Wr(g, h)
                };
              }

              c || (o.push({
                tag: n,
                lowerCasedTag: n.toLowerCase(),
                attrs: u,
                start: e.start,
                end: e.end
              }), i = n), t.start && t.start(n, u, c, e.start, e.end);
            }

            function I(e, n, r) {
              var a, s;
              if (null == n && (n = l), null == r && (r = l), e) for (s = e.toLowerCase(), a = o.length - 1; a >= 0 && o[a].lowerCasedTag !== s; a--) {
                ;
              } else a = 0;

              if (a >= 0) {
                for (var c = o.length - 1; c >= a; c--) {
                  t.end && t.end(o[c].tag, n, r);
                }

                o.length = a, i = a && o[a - 1].tag;
              } else "br" === s ? t.start && t.start(e, [], !0, n, r) : "p" === s && (t.start && t.start(e, [], !1, n, r), t.end && t.end(e, n, r));
            }

            I();
          }(e, {
            warn: Hr,
            expectHTML: t.expectHTML,
            isUnaryTag: t.isUnaryTag,
            canBeLeftOpenTag: t.canBeLeftOpenTag,
            shouldDecodeNewlines: t.shouldDecodeNewlines,
            shouldDecodeNewlinesForHref: t.shouldDecodeNewlinesForHref,
            shouldKeepComment: t.comments,
            outputSourceRange: t.outputSourceRange,
            start: function start(e, r, a, d, u) {
              var f = i && i.ns || Jr(e);
              Z && "svg" === f && (r = function (e) {
                for (var t = [], n = 0; n < e.length; n++) {
                  var i = e[n];
                  ya.test(i.name) || (i.name = i.name.replace(Aa, ""), t.push(i));
                }

                return t;
              }(r));
              var p,
                  g = ua(e, r, i);
              f && (g.ns = f), "style" !== (p = g).tag && ("script" !== p.tag || p.attrsMap.type && "text/javascript" !== p.attrsMap.type) || se() || (g.forbidden = !0);

              for (var h = 0; h < qr.length; h++) {
                g = qr[h](g, t) || g;
              }

              s || (function (e) {
                null != Wi(e, "v-pre") && (e.pre = !0);
              }(g), g.pre && (s = !0)), Yr(g.tag) && (l = !0), s ? function (e) {
                var t = e.attrsList,
                    n = t.length;
                if (n) for (var i = e.attrs = new Array(n), o = 0; o < n; o++) {
                  i[o] = {
                    name: t[o].name,
                    value: JSON.stringify(t[o].value)
                  }, null != t[o].start && (i[o].start = t[o].start, i[o].end = t[o].end);
                } else e.pre || (e.plain = !0);
              }(g) : g.processed || (pa(g), function (e) {
                var t = Wi(e, "v-if");
                if (t) e["if"] = t, ga(e, {
                  exp: t,
                  block: e
                });else {
                  null != Wi(e, "v-else") && (e["else"] = !0);
                  var n = Wi(e, "v-else-if");
                  n && (e.elseif = n);
                }
              }(g), function (e) {
                null != Wi(e, "v-once") && (e.once = !0);
              }(g)), n || (n = g), a ? c(g) : (i = g, o.push(g));
            },
            end: function end(e, t, n) {
              var r = o[o.length - 1];
              o.length -= 1, i = o[o.length - 1], c(r);
            },
            chars: function chars(e, t, n) {
              if (i && (!Z || "textarea" !== i.tag || i.attrsMap.placeholder !== e)) {
                var o,
                    c,
                    d,
                    u = i.children;
                (e = l || e.trim() ? "script" === (o = i).tag || "style" === o.tag ? e : ca(e) : u.length ? a ? "condense" === a && sa.test(e) ? "" : " " : r ? " " : "" : "") && (l || "condense" !== a || (e = e.replace(la, " ")), !s && " " !== e && (c = function (e, t) {
                  var n = t ? Ar(t) : mr;

                  if (n.test(e)) {
                    for (var i, o, r, a = [], s = [], l = n.lastIndex = 0; i = n.exec(e);) {
                      (o = i.index) > l && (s.push(r = e.slice(l, o)), a.push(JSON.stringify(r)));
                      var c = Ni(i[1].trim());
                      a.push("_s(" + c + ")"), s.push({
                        "@binding": c
                      }), l = o + i[0].length;
                    }

                    return l < e.length && (s.push(r = e.slice(l)), a.push(JSON.stringify(r))), {
                      expression: a.join("+"),
                      tokens: s
                    };
                  }
                }(e, Gr)) ? d = {
                  type: 2,
                  expression: c.expression,
                  tokens: c.tokens,
                  text: e
                } : " " === e && u.length && " " === u[u.length - 1].text || (d = {
                  type: 3,
                  text: e
                }), d && u.push(d));
              }
            },
            comment: function comment(e, t, n) {
              if (i) {
                var o = {
                  type: 3,
                  text: e,
                  isComment: !0
                };
                i.children.push(o);
              }
            }
          }), n;
        }(e.trim(), t);

        !1 !== t.optimize && Ta(n, t);
        var i = Wa(n, t);
        return {
          ast: n,
          render: i.render,
          staticRenderFns: i.staticRenderFns
        };
      }, function (e) {
        function t(t, n) {
          var i = Object.create(e),
              o = [],
              r = [];
          if (n) for (var a in n.modules && (i.modules = (e.modules || []).concat(n.modules)), n.directives && (i.directives = M(Object.create(e.directives || null), n.directives)), n) {
            "modules" !== a && "directives" !== a && (i[a] = n[a]);
          }

          i.warn = function (e, t, n) {
            (n ? r : o).push(e);
          };

          var s = rs(t.trim(), i);
          return s.errors = o, s.tips = r, s;
        }

        return {
          compile: t,
          compileToFunctions: os(t)
        };
      })(Sa),
          ls = (ss.compile, ss.compileToFunctions);

      function cs(e) {
        return (as = as || document.createElement("div")).innerHTML = e ? '<a href="\n"/>' : '<div a="\n"/>', as.innerHTML.indexOf("&#10;") > 0;
      }

      var ds = !!K && cs(!1),
          us = !!K && cs(!0),
          fs = _(function (e) {
        var t = ii(e);
        return t && t.innerHTML;
      }),
          ps = Mn.prototype.$mount;

      Mn.prototype.$mount = function (e, t) {
        if ((e = e && ii(e)) === document.body || e === document.documentElement) return this;
        var n = this.$options;

        if (!n.render) {
          var i = n.template;
          if (i) {
            if ("string" == typeof i) "#" === i.charAt(0) && (i = fs(i));else {
              if (!i.nodeType) return this;
              i = i.innerHTML;
            }
          } else e && (i = function (e) {
            if (e.outerHTML) return e.outerHTML;
            var t = document.createElement("div");
            return t.appendChild(e.cloneNode(!0)), t.innerHTML;
          }(e));

          if (i) {
            var o = ls(i, {
              outputSourceRange: !1,
              shouldDecodeNewlines: ds,
              shouldDecodeNewlinesForHref: us,
              delimiters: n.delimiters,
              comments: n.comments
            }, this),
                r = o.render,
                a = o.staticRenderFns;
            n.render = r, n.staticRenderFns = a;
          }
        }

        return ps.call(this, e, t);
      }, Mn.compile = ls;
      var gs = Mn;

      var hs = function hs() {
        var e = this,
            t = e.$createElement,
            n = e._self._c || t;
        return n("div", {
          "class": [e.selectedNodeId.id === e.node.id ? "selectedNode" : "unselectedNode"]
        }, [n("div", {
          staticClass: "dialogSummaryRow",
          attrs: {
            onclick: "L4W_mapper.MapperPage.loadDialogEditor(" + e.node.id + ")"
          }
        }, [n("a", {
          attrs: {
            name: e.node.id
          }
        }), e._v("\n        " + e._s(e._f("str_limit")(e.node.message)) + " "), n("div", {
          staticClass: "elementId"
        }, [e._v("N" + e._s(e.node.id))])]), e._v(" "), n("ul", e._l(e.node.edges, function (t) {
          return n("li", {
            key: t.id
          }, [n("div", {
            staticClass: "dialogSummaryRow",
            attrs: {
              onclick: "L4W_mapper.MapperPage.loadDialogEditor(" + e.node.id + ")"
            }
          }, [n("div", {
            staticClass: "edge"
          }, [e._v(e._s(e._f("str_limit")(t.message)))]), e._v(" "), n("div", {
            staticClass: "elementId"
          }, [e._v("E" + e._s(t.id))])]), e._v(" "), void 0 !== t.node ? n("div", {
            staticClass: "dialogSummarySubnode"
          }, [t.nodeReferenced ? n("div", [n("div", {
            staticClass: "dialogSummaryRow unselectedNode",
            attrs: {
              onclick: "L4W_mapper.MapperPage.loadDialogEditor(" + t.node.id + ")"
            }
          }, [e._v("\n                        " + e._s(e._f("str_limit")(t.node.message)) + " "), n("div", {
            staticClass: "elementId"
          }, [n("a", {
            attrs: {
              href: "#" + t.node.id
            }
          }, [e._v("(N" + e._s(t.node.id) + ")")])])]), e._v(" "), n("div", {
            staticClass: "jumpElement"
          })]) : n("div", [n("dialog-summary", {
            attrs: {
              node: t.node,
              "selected-node-id": e.selectedNodeId
            }
          })], 1)]) : e._e()]);
        }), 0), e._v(" "), n("div", {
          staticClass: "endElement"
        })]);
      };

      hs._withStripped = !0;
      var vs = gs.extend({
        name: "dialog-summary",
        props: {
          node: {
            type: Object,
            required: !0
          },
          selectedNodeId: {
            type: Object,
            required: !0
          }
        }
      });
      gs.filter("str_limit", function (e, t) {
        return void 0 === e ? "" : (void 0 === t && (t = 45), (e = e.toString()).length <= t ? e : e.substr(0, t) + "...");
      });
      var ms = vs;

      function ys(e, t, n, i, o, r, a, s) {
        var l,
            c = "function" == typeof e ? e.options : e;
        if (t && (c.render = t, c.staticRenderFns = n, c._compiled = !0), i && (c.functional = !0), r && (c._scopeId = "data-v-" + r), a ? (l = function l(e) {
          (e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), o && o.call(this, e), e && e._registeredComponents && e._registeredComponents.add(a);
        }, c._ssrRegister = l) : o && (l = s ? function () {
          o.call(this, (c.functional ? this.parent : this).$root.$options.shadowRoot);
        } : o), l) if (c.functional) {
          c._injectStyles = l;
          var d = c.render;

          c.render = function (e, t) {
            return l.call(t), d(e, t);
          };
        } else {
          var u = c.beforeCreate;
          c.beforeCreate = u ? [].concat(u, l) : [l];
        }
        return {
          exports: e,
          options: c
        };
      }

      n(657);
      var As = ys(ms, hs, [], !1, null, "06f2eb40", null);
      As.options.__file = "src/client/components/DialogSummary.vue";
      var bs = As.exports;

      var Es,
          _s,
          Cs,
          ws,
          Ss = function Ss() {
        var e = this,
            t = e.$createElement,
            n = e._self._c || t;
        return n("div", [n("div", [n("div", {
          staticClass: "dialogNodeDetails"
        }, [n("div", {
          staticClass: "elementId"
        }, [e._v("N" + e._s(e.node.id))]), e._v(" "), n("textarea", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: e.node.message,
            expression: "node.message"
          }],
          ref: "dialogNodeMessage",
          staticClass: "message",
          attrs: {
            type: "text",
            placeholder: "<message>"
          },
          domProps: {
            value: e.node.message
          },
          on: {
            input: function input(t) {
              t.target.composing || e.$set(e.node, "message", t.target.value);
            }
          }
        }), n("br"), e._v(" "), e._v("\n                Face: "), n("select", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: e.node.face,
            expression: "node.face"
          }],
          ref: "nodes",
          on: {
            change: [function (t) {
              var n = Array.prototype.filter.call(t.target.options, function (e) {
                return e.selected;
              }).map(function (e) {
                return "_value" in e ? e._value : e.value;
              });
              e.$set(e.node, "face", t.target.multiple ? n : n[0]);
            }, function (t) {
              return e.onFaceChange(t, e.node);
            }]
          }
        }, [n("option", {
          attrs: {
            selected: "",
            value: ""
          }
        }, [e._v(" ")]), e._v(" "), e._l(e.faces, function (t) {
          return n("option", {
            key: t,
            domProps: {
              value: t
            }
          }, [e._v("\n                        " + e._s(t) + "\n                    ")]);
        })], 2), e._v("\n                Name: "), n("input", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: e.node.name,
            expression: "node.name"
          }],
          domProps: {
            value: e.node.name
          },
          on: {
            input: function input(t) {
              t.target.composing || e.$set(e.node, "name", t.target.value);
            }
          }
        }), n("br"), e._v("\n                Autoclose in "), n("input", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: e.node.closingTimeout,
            expression: "node.closingTimeout"
          }],
          ref: "nodeClosingTimeout",
          attrs: {
            type: "number",
            min: "0",
            max: "10000",
            step: "1"
          },
          domProps: {
            value: e.node.closingTimeout
          },
          on: {
            input: function input(t) {
              t.target.composing || e.$set(e.node, "closingTimeout", t.target.value);
            }
          }
        }), e._v(" msec"), n("br"), e._v(" "), n("br"), e._v(" "), n("div", {
          staticStyle: {
            "float": "none"
          }
        }), e._v(" "), n("button", {
          on: {
            click: function click(t) {
              return e.addEdge();
            }
          }
        }, [e._v("Create new edge")]), e._v(" "), n("br")]), e._v(" "), e._l(e.node.edges, function (t) {
          return n("div", {
            key: t.id,
            staticClass: "dialogEdgeDetails"
          }, [n("div", {
            staticClass: "elementId"
          }, [e._v("E" + e._s(t.id))]), e._v(" "), n("textarea", {
            directives: [{
              name: "model",
              rawName: "v-model",
              value: t.message,
              expression: "edge.message"
            }],
            ref: "dialogEdgeMessage",
            refInFor: !0,
            staticClass: "message",
            attrs: {
              type: "text",
              placeholder: "<message>"
            },
            domProps: {
              value: t.message
            },
            on: {
              input: function input(n) {
                n.target.composing || e.$set(t, "message", n.target.value);
              }
            }
          }), n("br"), e._v("\n\n                Condition "), n("select", {
            directives: [{
              name: "model",
              rawName: "v-model",
              value: t.condition,
              expression: "edge.condition"
            }],
            ref: "edgeCondition",
            refInFor: !0,
            on: {
              change: function change(n) {
                var i = Array.prototype.filter.call(n.target.options, function (e) {
                  return e.selected;
                }).map(function (e) {
                  return "_value" in e ? e._value : e.value;
                });
                e.$set(t, "condition", n.target.multiple ? i : i[0]);
              }
            }
          }, e._l(e.edgeConditions, function (t) {
            return n("option", {
              key: t,
              domProps: {
                value: t
              }
            }, [e._v("\n                        " + e._s(t) + "\n                    ")]);
          }), 0), n("br"), e._v(" "), t.condition ? n("div", [e._v("Cond. param: "), n("input", {
            directives: [{
              name: "model",
              rawName: "v-model",
              value: t.conditionParams,
              expression: "edge.conditionParams"
            }],
            staticClass: "edgeConditionParameters",
            attrs: {
              type: "text"
            },
            domProps: {
              value: t.conditionParams
            },
            on: {
              input: function input(n) {
                n.target.composing || e.$set(t, "conditionParams", n.target.value);
              }
            }
          }), n("br")]) : e._e(), e._v("\n\n                Script "), n("select", {
            directives: [{
              name: "model",
              rawName: "v-model",
              value: t.script,
              expression: "edge.script"
            }],
            ref: "edgeScript",
            refInFor: !0,
            on: {
              change: [function (n) {
                var i = Array.prototype.filter.call(n.target.options, function (e) {
                  return e.selected;
                }).map(function (e) {
                  return "_value" in e ? e._value : e.value;
                });
                e.$set(t, "script", n.target.multiple ? i : i[0]);
              }, function (n) {
                return e.onScriptChange(n, t);
              }]
            }
          }, e._l(e.edgeScripts, function (t) {
            return n("option", {
              key: t[0],
              domProps: {
                value: t[0]
              }
            }, [e._v("\n                        " + e._s(t[0] + " (" + t[1] + ")") + "\n                    ")]);
          }), 0), n("br"), e._v(" "), void 0 !== t.script ? n("div", [e._v("\n                    Action "), n("select", {
            directives: [{
              name: "model",
              rawName: "v-model",
              value: t.action,
              expression: "edge.action"
            }],
            ref: "edgeAction",
            refInFor: !0,
            on: {
              change: function change(n) {
                var i = Array.prototype.filter.call(n.target.options, function (e) {
                  return e.selected;
                }).map(function (e) {
                  return "_value" in e ? e._value : e.value;
                });
                e.$set(t, "action", n.target.multiple ? i : i[0]);
              }
            }
          }, e._l(t.actions, function (t) {
            return n("option", {
              key: t,
              domProps: {
                value: t
              }
            }, [e._v("\n                            " + e._s(t) + "\n                        ")]);
          }), 0)]) : e._e(), e._v(" "), n("div", {
            staticStyle: {
              "float": "none"
            }
          }), e._v(" "), n("button", {
            staticStyle: {
              color: "red",
              "float": "right"
            },
            attrs: {
              title: "Remove this edge (if disconnected, will be deleted when saving)"
            },
            on: {
              click: function click(n) {
                return e.deleteEdge(t);
              }
            }
          }, [e._v("Remove")]), e._v(" "), n("br"), e._v(" "), n("br"), e._v("\n                Connect to "), n("select", {
            directives: [{
              name: "model",
              rawName: "v-model",
              value: t.nodeId,
              expression: "edge.nodeId"
            }],
            ref: "nodes",
            refInFor: !0,
            on: {
              change: [function (n) {
                var i = Array.prototype.filter.call(n.target.options, function (e) {
                  return e.selected;
                }).map(function (e) {
                  return "_value" in e ? e._value : e.value;
                });
                e.$set(t, "nodeId", n.target.multiple ? i : i[0]);
              }, function (n) {
                return e.onNodeChange(n, t);
              }]
            }
          }, [n("option", {
            attrs: {
              selected: "",
              disabled: "",
              value: ""
            }
          }, [e._v(" ")]), e._v(" "), e._l(e.nodeIds, function (t) {
            return n("option", {
              key: t,
              domProps: {
                value: t
              }
            }, [e._v("\n                        " + e._s(t) + "\n                    ")]);
          })], 2), e._v(" "), void 0 === t.nodeId ? n("span", [e._v(" or "), n("button", {
            on: {
              click: function click(n) {
                return e.addNode(t);
              }
            }
          }, [e._v("Create new node")])]) : n("span", [e._v(" or "), n("button", {
            staticStyle: {
              color: "red"
            },
            attrs: {
              title: "Remove this node (if disconnected, will be deleted when saving)"
            },
            on: {
              click: function click(n) {
                return e.deleteNode(t);
              }
            }
          }, [e._v("Remove node")])])]);
        })], 2)]);
      };

      Ss._withStripped = !0, function (e) {
        e[e.OK = 200] = "OK", e[e.NO_CONTENT = 204] = "NO_CONTENT", e[e.MOVED_PERMANENTLY = 301] = "MOVED_PERMANENTLY", e[e.NOT_MODIFIED = 304] = "NOT_MODIFIED", e[e.BAD_REQUEST = 400] = "BAD_REQUEST", e[e.FORBIDDEN = 403] = "FORBIDDEN", e[e.NOT_FOUND = 404] = "NOT_FOUND", e[e.REQUEST_TOO_LONG = 413] = "REQUEST_TOO_LONG", e[e.IM_A_TEAPOT = 418] = "IM_A_TEAPOT", e[e.INTERNAL_SERVER_ERROR = 500] = "INTERNAL_SERVER_ERROR", e[e.NOT_IMPLEMENTED = 501] = "NOT_IMPLEMENTED";
      }(Es || (Es = {})), function (e) {
        e.LOCATION = "Location";
      }(_s || (_s = {})), function (e) {
        e.CHAR = "charset", e.FACE = "faceset", e.FAVICON = "favicon", e.SKIN = "skin", e.TILE = "tile", e.TILESET = "tileset", e.PICTURE = "picture", e.POINTER = "pointer", e.MAP = "map", e.TREE = "tree", e.STRING = "string", e.DIALOG = "dialog", e.GENERIC_MESSAGE = "generic-message", e.CONFIGURATION = "configuration", e.SAVE = "save";
      }(Cs || (Cs = {})), function (e) {
        var t = !1,
            n = [];

        var i = function i() {
          _classCallCheck(this, i);
        };

        i.UP = "ArrowUp", i.DOWN = "ArrowDown", i.LEFT = "ArrowLeft", i.RIGHT = "ArrowRight", i.CTRL = "Control", i.ALT = "Alt", i.ENTER = "Enter", i.SPACEBAR = " ", i.CAPS = "CapsLock", i.SHIFT = "Shift", i.W = "w", i.A = "a", i.D = "d", i.S = "s", i.P = "p", i.F1 = "F1", i.F2 = "F2", i.F3 = "F3", i.F4 = "F4", i.F5 = "F5", i.F6 = "F6", i.N_0 = "0", i.N_1 = "1", i.N_2 = "2", i.N_3 = "3", i.N_4 = "4", i.N_5 = "5", i.N_6 = "6", i.N_7 = "7", i.N_8 = "8", i.N_9 = "9", e.Keys = i;

        var o = function o() {
          _classCallCheck(this, o);
        };

        function r() {
          var _iterator = _createForOfIteratorHelper(n),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var _e2 = _step.value;

              try {
                _e2();
              } catch (e) {
                console.error("Error executing onAction callback:"), console.error(e);
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          n = [];
        }

        o.LEFT = 1, o.RIGHT = 2, o.MIDDLE = 4, e.MouseButtons = o, e.init = function (n, o, a, s, l, c, d, u, f, p, g, h, v, m, y) {
          var A,
              b = !1;

          a[i.P] = function (e) {
            b ? (g(), b = !1) : (p(), b = !0);
          };

          var E = !1;

          function _(e) {
            var t = {
              x: e.clientX,
              y: e.clientY
            };
            return o.mapPositionToGrid(t);
          }

          n.addEventListener("click", function (e) {
            var n = _(e);

            t || l(n.i, n.j, n.x, n.y), r();
          }), n.addEventListener("mousemove", function (e) {
            var t = _(e);

            E ? u(t.i, t.j, e.buttons) : f(t.i, t.j);
          }), n.addEventListener("mousedown", function (e) {
            E = !0;

            var t = _(e);

            c(t.i, t.j, t.x, t.y, e.buttons), r();
          }), n.addEventListener("mouseup", function (e) {
            E = !1;

            var t = _(e);

            d(t.i, t.j, e.buttons);
          }), n.addEventListener("mouseout", function (e) {
            E ? u(void 0, void 0, e.buttons) : f(void 0, void 0);
          }), n.addEventListener("contextmenu", function (e) {
            e.preventDefault();

            var t = _(e);

            v(t.i, t.j);
          }), n.addEventListener("dblclick", function (e) {
            var t = _(e);

            m(t.i, t.j);
          }), n.addEventListener("wheel", function (e) {
            var t = _(e);

            y(t.i, t.j);
          }, {
            passive: !0
          }), n.addEventListener("touchstart", function (e) {
            var t = _(e);

            c(t.i, t.j, t.x, t.y), r();
          }, {
            passive: !0
          }), n.addEventListener("touchend", function (e) {
            var t = _(e);

            u(void 0, void 0), d(t.i, t.j);
          }, {
            passive: !0
          }), n.addEventListener("touchcancel", function (e) {
            var t = _(e);

            u(void 0, void 0), d(t.i, t.j);
          }, {
            passive: !0
          }), n.addEventListener("touchmove", function (e) {
            var t = _(e);

            u(t.i, t.j);
          }, {
            passive: !0
          }), document.addEventListener("keydown", function (t) {
            var n = a[t.key];
            void 0 !== n && n(t), t.key === e.Keys.SPACEBAR && (r(), t.preventDefault()), A = t.key;
          }), document.addEventListener("keyup", function (e) {
            e.key === A && s();
          }), document.addEventListener("visibilitychange", function () {
            document.hidden ? (p(), b = !0) : (g(), b = !1);
          }), window.addEventListener("resize", function (e) {
            h();
          }), document.addEventListener("orientationchange", function () {
            h();
          });
        }, e.escapeText = function (e) {
          return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
        }, e.addActionCallback = function (e) {
          n.push(e);
        }, e.disableActionEvents = function () {
          t = !0;
        }, e.enableActionEvents = function () {
          t = !1;
        };
      }(ws || (ws = {}));
      var Is = [];

      function Ts(e, t) {
        var n;

        switch (e) {
          case 0:
            n = ws.Keys.N_0;
            break;

          case 1:
            n = ws.Keys.N_1;
            break;

          case 2:
            n = ws.Keys.N_2;
            break;

          case 3:
            n = ws.Keys.N_3;
            break;

          case 4:
            n = ws.Keys.N_4;
            break;

          case 5:
            n = ws.Keys.N_5;
            break;

          case 6:
            n = ws.Keys.N_6;
            break;

          case 7:
            n = ws.Keys.N_7;
            break;

          case 8:
            n = ws.Keys.N_8;
            break;

          case 9:
            n = ws.Keys.N_9;
            break;

          default:
            return void console.error("Unexpected numericKey: " + e);
        }

        var i = function i(e) {
          e.key === n && (t(e), function () {
            var _iterator2 = _createForOfIteratorHelper(Is),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var _e3 = _step2.value;
                document.removeEventListener("keydown", _e3);
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            Is = [];
          }());
        };

        Is.push(i), document.addEventListener("keydown", i);
      }

      var ks = function ks() {
        _classCallCheck(this, ks);
      };

      var xs, Ms, Ns, Ds;
      ks.NONE = 0, ks.UP = Math.pow(2, 0), ks.DOWN = Math.pow(2, 1), ks.LEFT = Math.pow(2, 2), ks.RIGHT = Math.pow(2, 3), ks.ALL = ks.UP + ks.DOWN + ks.LEFT + ks.RIGHT, function (e) {
        e.IT = "it", e.EN = "en";
      }(xs || (xs = {})), function (e) {
        e[e.BASIC = 0] = "BASIC", e[e.D_STAR_LITE = 1] = "D_STAR_LITE";
      }(Ms || (Ms = {})), function (e) {
        function t(e) {
          return null == e || void 0 === e || ("string" == typeof e ? "" === e : "object" == _typeof(e) && "size" in e ? 0 === e.size : e.constructor === Array || e.constructor === String ? 0 === e.length : e.constructor === Object && 0 === Object.keys(e).length);
        }

        e.isEmpty = t, e.unitTestIsEmpty = function () {
          var e = new Map();
          console.assert(t(e), "empty ES6 map"), e.set("a", "a"), console.assert(!t(e), "not empty ES6 map"), e["delete"]("a"), console.assert(t(e), "empty ES6 map (deleted key)"), e = [], console.assert(t(e), "empty array"), e[0] = 1, console.assert(!t(e), "not empty array"), e = new Array(), console.assert(t(e), "empty Array"), e = e.push("1"), console.assert(!t(e), "not empty Array"), e = "", console.assert(t(e), "empty string"), e = "a", console.assert(!t(e), "not empty string"), e = new Object(), console.assert(t(e), "empty Object"), e.a = 1, console.assert(!t(e), "not empty Object"), delete e.a, console.assert(t(e), "empty Object (deleted property)"), e = {}, console.assert(t(e), "empty {}"), e.a = 1, console.assert(!t(e), "not empty {}"), delete e.a, console.assert(t(e), "empty {} (deleted property)"), console.assert(!t(!0), "not empty boolean (true)"), console.assert(!t(!1), "not empty boolean (false)"), console.assert(!t(0), "not empty number"), console.assert(!t(0), "not empty float");
        }, e.mergeMaps = function (e, t) {
          var n = new Map();

          function i(e, t, i) {
            n.set(t, e);
          }

          return t.forEach(i), e.forEach(i), n;
        }, e.isNumeric = function (e) {
          return !isNaN(parseFloat(e)) && isFinite(e);
        }, e.convertStringToEnum = function (e, t) {
          return e[Object.keys(e).filter(function (n) {
            return e[n] === t;
          })[0]];
        };
        var n = "abcdefghijklmnopqrstuvwxyz0123456789";
        e.getRandomString = function (e) {
          return void 0 === e && (e = 8), _toConsumableArray(Array(e)).map(function (e) {
            return n[~~(Math.random() * n.length)];
          }).join("");
        }, e.now = function () {
          return new Date().getTime();
        };
      }(Ns || (Ns = {})), function (e) {
        function t(e, t) {
          return e.i + e.j * t;
        }

        function n(e, t) {
          var n = {
            i: e.i,
            j: e.j
          };

          switch (t) {
            case 0:
              n.j -= 1;
              break;

            case 2:
              n.j += 1;
              break;

            case 3:
              n.i -= 1;
              break;

            case 1:
              n.i += 1;
              break;

            case 4:
              break;

            default:
              console.error("Unexpected case: " + t);
          }

          return n;
        }

        function i(e, t) {
          return (e & t) === t && t !== ks.NONE;
        }

        function o(e, t) {
          var n = ks.NONE;

          switch (t) {
            case 0:
              n = ks.UP;
              break;

            case 2:
              n = ks.DOWN;
              break;

            case 3:
              n = ks.LEFT;
              break;

            case 1:
              n = ks.RIGHT;
          }

          return i(e, n);
        }

        function r(e, t, n, i) {
          var o = ks.NONE;
          return n && void 0 !== e.blocks && t < e.blocks.length && (o |= e.blocks[t]), i && void 0 !== e.dynamicBlocks && t < e.dynamicBlocks.length && (o |= e.dynamicBlocks[t]), o;
        }

        function a(e) {
          switch (e) {
            case 0:
              return 2;

            case 2:
              return 0;

            case 3:
              return 1;

            case 1:
              return 3;

            default:
              return 4;
          }
        }

        function s(e) {
          switch (e) {
            case 0:
              return "˄ up";

            case 2:
              return "˅ down";

            case 3:
              return "˂ left";

            case 1:
              return "˃ right";

            default:
              return "  none";
          }
        }

        e.mergeRectangles = function (e, t) {
          if (void 0 === e) return t;
          if (void 0 === t) return e;
          var n, i, o, r;
          return n = e.x < t.x ? e.x : t.x, i = e.y < t.y ? e.y : t.y, r = e.x + e.w > t.x + t.w ? e.x + e.w - n : t.x + t.w - n, o = e.y + e.h > t.y + t.h ? e.y + e.h - i : t.y + t.h - i, {
            x: n,
            y: i,
            w: r,
            h: o
          };
        }, e.resetSelect = function (e) {
          for (var _t2 = e.length - 1; _t2 >= 0; _t2--) {
            e.remove(_t2);
          }
        }, e.gidToCell = function (e, t) {
          return {
            i: e % t,
            j: Math.floor(e / t)
          };
        }, e.cellToGid = t, e.getDirectionTarget = n, e.isBlockDirectionBlocked = i, e.isDirectionEnumBlocked = o, e.isMovementBlocked = function (i, r, s, l) {
          var c = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : !1;
          var d;
          d = t({
            i: r,
            j: s
          }, i.width);
          var u,
              f = e.getMapStaticBlock(i, d),
              p = t(n({
            i: r,
            j: s
          }, l), i.width);
          return u = c ? e.getMapStaticBlock(i, p) : e.getMapBlocks(i, p), o(f, l) || o(u, a(l));
        }, e.getBlock = function (e, t, n, i) {
          var o = 0;
          return o |= e ? ks.UP : 0, o |= t ? ks.DOWN : 0, o |= n ? ks.LEFT : 0, o |= i ? ks.RIGHT : 0, o;
        }, e.getMapBlocks = function (e, t) {
          return r(e, t, !0, !0);
        }, e.getMapStaticBlock = function (e, t) {
          return r(e, t, !0, !1);
        }, e.getMapDynamicBlock = function (e, t) {
          return r(e, t, !1, !0);
        }, e.isDirectionsOpposed = function (e, t) {
          return a(e) === t;
        }, e.getOpposedDirections = a, e.getNextAbsoluteDirection = function (e, t) {
          if (0 === t || 4 === e) return e;
          var n = [0, 1, 2, 3],
              i = 0;

          for (var _i2 = 0, _n3 = n; _i2 < _n3.length; _i2++) {
            var _t3 = _n3[_i2];
            if (e === _t3) break;
            i++;
          }

          switch (t) {
            case 3:
              i--;
              break;

            case 1:
              i++;
              break;

            case 2:
              i += 2;
          }

          return i < 0 ? i = n.length - 1 : i >= n.length && (i -= n.length), n[i];
        }, e.getDirection = function (e, t) {
          var n,
              i = e.i - t.i,
              o = e.j - t.j;
          return n = Math.abs(i) > Math.abs(o) ? i > 0 ? 1 : 3 : o > 0 ? 2 : o < 0 ? 0 : 4, n;
        }, e.moveToDirection = function (e, t) {
          var n = {
            i: e.i,
            j: e.j
          };

          switch (t) {
            case 0:
              n.j -= 1;
              break;

            case 2:
              n.j += 1;
              break;

            case 3:
              n.i -= 1;
              break;

            case 1:
              n.i += 1;
          }

          return n;
        }, e.getCellDistance = function (e, t) {
          return Math.abs(e.i - t.i) + Math.abs(e.j - t.j);
        }, e.getPointDistance = function (e, t) {
          return Math.abs(e.x - t.x) + Math.abs(e.y - t.y);
        }, e.getRandomBoolean = function () {
          return Math.random() >= .5;
        }, e.getRandomInteger = function (e, t) {
          return Math.floor(Math.random() * (t - e + 1)) + e;
        }, e.normalizeZIndex = function (e) {
          return !Ns.isEmpty(e) && !Number.isNaN(e) && e >= 0 && e <= 4 ? e : 0;
        }, e.getDirectionName = s, e.getBlockName = function (e) {
          var t = "free";
          return i(e, ks.UP) && (t = s(0)), i(e, ks.DOWN) && (t += s(2)), i(e, ks.LEFT) && (t += s(3)), i(e, ks.RIGHT) && (t += s(1)), t;
        }, e.getSelectionAreaName = function (e) {
          switch (e) {
            case 0:
              return "⬒ up";

            case 1:
              return "⬓ down";

            case 2:
              return "◧ left";

            case 3:
              return "◨ right";

            case 4:
              return "▣ center";

            default:
              return "  none";
          }
        };
      }(Ds || (Ds = {}));
      var Os = {
        maps: {
          start: {
            map: "0",
            i: 0,
            j: 0
          }
        },
        hero: {
          name: "Fart",
          charaset: "fart.png"
        },
        ui: {
          lang: xs.EN,
          skin: "ld3-webskin1.png",
          enableCLI: !0
        }
      };
      var Ls, $s, Rs, Ps, Bs, js;
      !function (e) {
        function t(e) {
          return {
            id: Ns.getRandomString(),
            name: void 0 !== e ? e : "Map",
            height: 20,
            width: 25,
            layers: [{
              data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              type: "tilelayer",
              x: 0,
              y: 0
            }, {
              type: "tilelayer",
              x: 0,
              y: 0
            }, {
              type: "tilelayer",
              x: 0,
              y: 0
            }, {
              type: "tilelayer",
              x: 0,
              y: 0
            }],
            nextobjectid: 2,
            tileset: {
              firstgid: 1,
              image: "002-Woods01.png",
              blocks: [],
              onTop: []
            },
            events: []
          };
        }

        function n() {
          return {
            lang: Os.ui.lang,
            skin: Os.ui.skin,
            flagAntialiasing: !1,
            flagDouble: !1,
            flagNatural: !1
          };
        }

        function i() {
          return {
            id: -1,
            name: "NPC",
            i: 0,
            j: 0,
            states: [{
              direction: 2,
              condition: "always",
              trigger: 0
            }],
            memory: {},
            script: "BaseScript",
            currentState: 0
          };
        }

        function o() {
          var e = {
            id: -1,
            name: "NPC",
            i: 0,
            j: 0,
            states: [{
              direction: 2,
              condition: "always",
              trigger: 0
            }],
            memory: {},
            script: "BaseScript",
            currentState: 0
          };
          return e.name = Os.hero.name, e.i = Os.maps.start.i, e.j = Os.maps.start.j, e.states = [], e.states[0] = {
            direction: 2,
            condition: "always",
            trigger: 0
          }, e.states[0].charaset = Os.hero.charaset, e;
        }

        function r() {
          return {
            direction: 2,
            condition: "always",
            trigger: 0
          };
        }

        e.DEFAULT_ID = -1, e.DEFAULT_ID_STR = e.DEFAULT_ID + "", e.FIRST_ELEM_ID = 0, e.DEFAULT_STR = "", e.getDialogNode = function (t) {
          return {
            id: void 0 !== t ? t : e.DEFAULT_ID
          };
        }, e.getDialogEdge = function (t) {
          return {
            id: void 0 !== t ? t : e.DEFAULT_ID
          };
        }, e.getEmptyMap = function (e) {
          var n = t(e);

          var _iterator3 = _createForOfIteratorHelper(n.layers),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var _e4 = _step3.value;
              _e4.data = void 0;
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }

          return n;
        }, e.getMap = t, e.getTileset = function () {
          return {
            firstgid: 1,
            image: "002-Woods01.png",
            blocks: [],
            onTop: []
          };
        }, e.getSave = function () {
          return {
            id: e.FIRST_ELEM_ID,
            timestamp: Ns.now(),
            currentMap: Os.maps.start.map,
            hero: o(),
            maps: [],
            config: n()
          };
        }, e.getConfig = n, e.getEvent = i, e.getHero = o, e.getEventState = r, e.getString = function () {
          return "";
        }, e.getTree = function () {
          return {};
        }, e.getCharacter = function () {
          return {
            direction: 2
          };
        };
      }(Ls || (Ls = {})), function (e) {
        var t = "dialogContainer",
            n = "userInput";
        var i, o;

        function r() {
          var e = document.getElementById(t);
          null !== e ? (e.classList.replace("hiddenFadeOut", "visibleFadeIn"), setTimeout(function () {
            e.style.display = "none";
          }, 200), ws.disableActionEvents()) : console.error("Element not foud: dialogContainer");
        }

        function a() {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
          ws.enableActionEvents();
          var n = document.getElementById(t);
          null !== n ? (n.classList.remove("visibleFadeIn"), n.classList.add("hiddenFadeOut"), setTimeout(function () {
            n.style.display = "none";
          }, 200), void 0 === o || e || o()) : console.error("Element not foud: dialogContainer");
        }

        function s(e) {
          void 0 !== e ? setTimeout(function () {
            a();
          }, e) : setTimeout(function () {
            ws.addActionCallback(function () {
              a();
            });
          }, 500);
        }

        function l(e, t, n) {
          nl.load(e, Cs.STRING, function (t) {
            Ns.isEmpty(t) || "string" != typeof t ? (console.error("Error while loading string: " + e), n()) : n(t);
          }, t);
        }

        function c(e, t, n) {
          e !== Ls.DEFAULT_ID ? nl.load(e + "", Cs.DIALOG, function (t) {
            if (Ns.isEmpty(t) || "string" != typeof t) console.error("Error while loading dialog: " + e), n(Ls.getDialogNode(Ls.FIRST_ELEM_ID));else {
              var _e5 = JSON.parse(t),
                  _i3 = function (e, t, n) {
                var i = new Map(),
                    o = new Map();

                var _iterator4 = _createForOfIteratorHelper(t),
                    _step4;

                try {
                  for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                    var _e6 = _step4.value;
                    i.set(_e6.id, _e6);
                  }
                } catch (err) {
                  _iterator4.e(err);
                } finally {
                  _iterator4.f();
                }

                var _iterator5 = _createForOfIteratorHelper(n),
                    _step5;

                try {
                  for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                    var _e7 = _step5.value;
                    o.set(_e7.id, _e7);
                  }
                } catch (err) {
                  _iterator5.e(err);
                } finally {
                  _iterator5.f();
                }

                if (i.has(e)) {
                  var _t4 = i.get(e);

                  return d(_t4, i, o), _t4;
                }

                return console.error("Cannot reconstruct dialog tree from node: " + e), Ls.getDialogNode();
              }(Ls.FIRST_ELEM_ID, _e5.nodes, _e5.edges);

              n(_i3);
            }
          }) : n(Ls.getDialogNode(Ls.FIRST_ELEM_ID));
        }

        function d(e, t, n) {
          if (e.referenced = !0, !Ns.isEmpty(e.edgeIds)) {
            var _iterator6 = _createForOfIteratorHelper(e.edgeIds),
                _step6;

            try {
              for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                var _i4 = _step6.value;

                if (n.has(_i4)) {
                  var _o2 = n.get(_i4);

                  if (void 0 === e.edges && (e.edges = []), e.edges.push(_o2), void 0 !== _o2.nodeId) if (t.has(_o2.nodeId)) {
                    var _e8 = t.get(_o2.nodeId);

                    _o2.node = _e8, _e8.referenced && (_o2.nodeReferenced = !0), d(_e8, t, n);
                  } else console.error("Cannot reconstruct dialog tree from edge: " + _o2.id + ", node not found: " + _o2.nodeId);
                } else console.error("Cannot reconstruct dialog tree from node: " + e.id + ", edge not found: " + _i4);
              }
            } catch (err) {
              _iterator6.e(err);
            } finally {
              _iterator6.f();
            }
          }
        }

        function u(e, t, n, i) {
          if (t.has(e.id)) return;
          t.set(e.id, e);
          var o = e.edges;

          if (!Ns.isEmpty(o)) {
            i && delete e.edges;

            var _iterator7 = _createForOfIteratorHelper(o),
                _step7;

            try {
              for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                var _e9 = _step7.value;
                if (n.has(_e9.id)) continue;
                n.set(_e9.id, _e9);
                var _o3 = _e9.node;
                void 0 !== _o3 && (i && delete _e9.node, u(_o3, t, n));
              }
            } catch (err) {
              _iterator7.e(err);
            } finally {
              _iterator7.f();
            }
          }
        }

        function f(e, t, a, l, c, d) {
          var u = document.getElementById("dialogFrame"),
              h = document.getElementById("dialogFace"),
              v = document.getElementById("dialogName"),
              m = document.getElementById("dialogArea");
          if (null === h) return void console.error("Element not foud: dialogFace");
          if (null === v || null === v.firstChild) return void console.error("Element not foud: dialogName");
          if (null === m) return void console.error("Element not foud: dialogArea");
          if (null === u) return void console.error("Element not foud: dialogFrame");
          r(), Ns.isEmpty(c) ? console.error("skin is not defined!") : u.style.borderImageSource = "url('/assets/skin/" + c + "')";
          var y = l.face;
          void 0 !== y ? (h.style.display = "block", h.style.backgroundImage = "url('/assets/faceset/" + y + "')") : h.style.display = "none", v.firstChild.textContent = a;

          var A = function (e) {
            var t;
            return void 0 !== e.genericMessage && (t = function (e) {
              var t = i.get(e);

              if (void 0 !== t && !Ns.isEmpty(t.values)) {
                var _e10, _n4;

                if (_e10 = void 0 === t.condition ? t.values : t.values.filter(function (e) {
                  return p(t.condition, e.conditionParams);
                }), 0 === _e10.length) return;
                return _n4 = 1 === _e10.length ? 0 : Ds.getRandomInteger(0, _e10.length - 1), _e10[_n4].message;
              }
            }(e.genericMessage)), void 0 === t && (t = e.message), void 0 !== t && (t = t), t;
          }(l);

          m.innerText = void 0 !== A ? A : "";
          var b = document.getElementById("dialogEdgeArea");
          if (null === b) return void console.error("Element not foud: dialogEdgeArea");

          for (; b.firstChild;) {
            b.removeChild(b.firstChild);
          }

          o = void 0;
          var E = [];

          if (void 0 !== l.edges) {
            var _iterator8 = _createForOfIteratorHelper(l.edges),
                _step8;

            try {
              for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                var _e11 = _step8.value;
                p(_e11.condition) && E.push(_e11);
              }
            } catch (err) {
              _iterator8.e(err);
            } finally {
              _iterator8.f();
            }
          }

          var _ = function _(i) {
            if (void 0 !== i.action) {
              var _o4,
                  _r3 = document.getElementById(n);

              if (null === _r3) return void console.warn("Input required");
              _o4 = _r3.value, _o4 = _o4.trim(), _o4 = ws.escapeText(_o4), g(i, e, t, _o4);
            } else void 0 !== i.node ? f(e, t, a, i.node, c, d) : s(0);
          };

          if (0 === E.length) s(l.closingTimeout);else if (1 === E.length && void 0 === E[0].message) {
            if (void 0 === E[0].inputType) o = function o() {
              _(E[0]);
            }, s(l.closingTimeout);else {
              var _e12 = document.createElement("input");

              switch (E[0].inputType) {
                case 1:
                  _e12.type = "number";
                  break;

                case 0:
                  _e12.type = "text";
                  break;

                default:
                  console.error("Unexpected DialogInputType for edge: " + E[0].id);
              }

              _e12.id = n, b.appendChild(_e12);
            }
          } else {
            var _e13 = 1;

            var _iterator9 = _createForOfIteratorHelper(E),
                _step9;

            try {
              var _loop = function _loop() {
                var t = _step9.value;
                var n = document.createElement("div");
                n.classList.add("l4wDialogEdge"), b.appendChild(n), void 0 !== t.message && (n.innerText = t.message);

                var i = function i(e) {
                  n.classList.add("l4wDialogEdgeSelected"), setTimeout(function () {
                    _(t);
                  }, 100);
                };

                n.onclick = i, Ts(_e13, i), _e13++;
              };

              for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                _loop();
              }
            } catch (err) {
              _iterator9.e(err);
            } finally {
              _iterator9.f();
            }
          }
        }

        function p(e, t) {
          return void 0 === e || (e in Vs ? Vs[e](t) : (console.error('Condition not found: "' + e + '", on event.'), !1));
        }

        function g(e, t, n, i) {
          var o = e.script;
          if (void 0 === o) return !1;
          var r = new o[o](event, n, t);
          if (Ns.isEmpty(r)) return console.error('Script "' + o + '" not found (dialog edge: ' + e.id + ")"), !1;
          var a = e.action;
          if (void 0 === a) return !1;
          if (!(a in r)) return console.error('Action "' + a + '" not found in script "' + o + '" (dialog edge: ' + e.id + ")"), !1;

          try {
            return r[a](i);
          } catch (e) {
            console.error(e);
          }

          return !1;
        }

        function h(e, t, n, i, o) {
          if (!i.has(e.id)) {
            if (!n && e.id === t) return e;
            i.set(e.id, e);
            var _r4 = e.edges;

            if (!Ns.isEmpty(_r4)) {
              var _iterator10 = _createForOfIteratorHelper(_r4),
                  _step10;

              try {
                for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                  var _e14 = _step10.value;

                  if (!o.has(_e14.id)) {
                    if (n && _e14.id === t) return _e14;
                    o.set(_e14.id, _e14);
                    var _r5 = _e14.node;

                    if (void 0 !== _r5) {
                      var _e15 = h(_r5, t, n, i, o);

                      if (void 0 !== _e15) return _e15;
                    }
                  }
                }
              } catch (err) {
                _iterator10.e(err);
              } finally {
                _iterator10.f();
              }
            }
          }
        }

        e.openDialog = r, e.closeDialog = a, e.loadString = l, e.saveString = function (e, t, n) {
          var i = JSON.stringify(t);
          nl.save(e + "", i, Cs.STRING, function (t, i) {
            if (void 0 !== t) {
              var _e16 = parseInt(t);

              if (isNaN(_e16)) return console.error("Error while saving string"), void n();
            }

            n(e);
          });
        }, e.loadDialog = c, e.saveDialog = function (e, t, n) {
          var i = new Map(),
              o = new Map();
          u(t, i, o, !0);
          var r = {
            nodes: Array.from(i.values()),
            edges: Array.from(o.values())
          };
          nl.save(e + "", JSON.stringify(r), Cs.DIALOG, function (t, i) {
            i ? (Ns.isNumeric(t) && (e = parseInt(t)), n(e)) : n();
          });
        }, e.deconstructDialogTree = u, e.loadGenericMessages = function (e, t, n) {
          isNaN(e) ? n(!1) : nl.load(e + "", Cs.GENERIC_MESSAGE, function (t) {
            Ns.isEmpty(t) || "string" != typeof t ? (console.error("Error while loading dialog: " + e), n(!1)) : (i = JSON.parse(t), n(!0));
          });
        }, e.showComplexDialog = function (e, t, n, i, o, r) {
          c(i, o.lang, function (a) {
            void 0 === a ? console.error("Error while loading dialog: " + i) : f(e, t, n, a, o.skin, r);
          });
        }, e.showSimpleDialog = function (e, t, n, i, o, r) {
          l(i, o.lang, function (i) {
            var a = Ls.getDialogNode();
            a.message = i, f(e, t, n, a, o.skin, r);
          });
        }, e.launchAction = g, e.search = function (e, t, n) {
          return h(e, t, void 0 !== n && n, new Map(), new Map());
        };
      }($s || ($s = {})), function (e) {
        e.DOUBLE_PI = 2 * Math.PI;

        var t = function t() {
          _classCallCheck(this, t);
        };

        t.YELLOW = "yellow", t.RED = "red", t.WHITE = "white", t.GREY = "grey", t.BLACK = "black", t.AQUA = "aqua", t.DARKBLUE = "darkblue", t.GREEN = "green", t.LIME = "lime", e.Color = t;

        var n = function n() {
          _classCallCheck(this, n);
        };

        n.GET = "GET", n.POST = "POST", e.RequestType = n;

        var i = function i() {
          _classCallCheck(this, i);
        };

        var o, r, a;
        i.JSON = "application/json", e.MimeType = i, e.MEDIUM_MSPEED = .128, e.VERY_LOW_MSPEED = e.MEDIUM_MSPEED * (1 - .9), e.LOW_MSPEED = .5 * e.MEDIUM_MSPEED, e.MEDIUM_LOW_MSPEED = .8 * e.MEDIUM_MSPEED, e.MEDIUM_HIGH_MSPEED = 1.2 * e.MEDIUM_MSPEED, e.HIGH_MSPEED = 1.5 * e.MEDIUM_MSPEED, e.VERY_HIGH_MSPEED = 1.9 * e.MEDIUM_MSPEED, e.MEDIUM_FREQUENCY = .006, e.VERY_LOW_FREQUENCY = e.MEDIUM_FREQUENCY * (1 - .9), e.LOW_FREQUENCY = .5 * e.MEDIUM_FREQUENCY, e.MEDIUM_LOW_FREQUENCY = .8 * e.MEDIUM_FREQUENCY, e.MEDIUM_HIGH_FREQUENCY = 1.2 * e.MEDIUM_FREQUENCY, e.HIGH_FREQUENCY = 1.5 * e.MEDIUM_FREQUENCY, e.VERY_HIGH_FREQUENCY = 1.9 * e.MEDIUM_FREQUENCY, function (e) {
          e[e.LOW = 0] = "LOW", e[e.MID = 1] = "MID", e[e.TOP = 2] = "TOP", e[e.EVENTS = 3] = "EVENTS";
        }(o = e.MapLayer || (e.MapLayer = {})), function (e) {
          e[e.APPLY = 0] = "APPLY", e[e.ERASE = 1] = "ERASE", e[e.EVENTS = 2] = "EVENTS";
        }(r = e.EditMode || (e.EditMode = {})), function (e) {
          e[e.BLOCKS = 0] = "BLOCKS", e[e.ONTOP = 1] = "ONTOP";
        }(a = e.TileEditMode || (e.TileEditMode = {}));
      }(Rs || (Rs = {})), function (e) {
        function t(e, t) {
          switch (parseInt(t + "")) {
            case 0:
              e.frequencyVal = Rs.VERY_LOW_FREQUENCY;
              break;

            case 1:
              e.frequencyVal = Rs.LOW_FREQUENCY;
              break;

            case 2:
              e.frequencyVal = Rs.MEDIUM_LOW_FREQUENCY;
              break;

            case 3:
              e.frequencyVal = Rs.MEDIUM_FREQUENCY;
              break;

            case 4:
              e.frequencyVal = Rs.MEDIUM_HIGH_FREQUENCY;
              break;

            case 5:
              e.frequencyVal = Rs.HIGH_FREQUENCY;
              break;

            case 6:
              e.frequencyVal = Rs.VERY_HIGH_FREQUENCY;
              break;

            default:
              e.frequencyVal = Rs.MEDIUM_FREQUENCY;
          }
        }

        function n(e, t) {
          switch (parseInt(t + "")) {
            case 0:
              e.mSpeed = Rs.VERY_LOW_MSPEED;
              break;

            case 1:
              e.mSpeed = Rs.LOW_MSPEED;
              break;

            case 2:
              e.mSpeed = Rs.MEDIUM_LOW_MSPEED;
              break;

            case 3:
              e.mSpeed = Rs.MEDIUM_MSPEED;
              break;

            case 4:
              e.mSpeed = Rs.MEDIUM_HIGH_MSPEED;
              break;

            case 5:
              e.mSpeed = Rs.HIGH_MSPEED;
              break;

            case 6:
              e.mSpeed = Rs.VERY_HIGH_MSPEED;
              break;

            default:
              e.mSpeed = Rs.MEDIUM_MSPEED;
          }
        }

        e.setFrequency = t, e.setSpeed = n, e.isVisible = function (e, t) {
          return !(void 0 === e || t !== (0 !== Ds.normalizeZIndex(e.onTop)) || !Ns.isEmpty(e.visible) && !e.visible || !Ns.isEmpty(e.opacity) && 0 === e.opacity || Ns.isEmpty(e.charaset));
        }, e.initTransientData = function (e, i) {
          return void 0 === i && (i = Ls.getCharacter()), n(i, i.speed), t(i, i.frequency), i;
        };
      }(Ps || (Ps = {})), function (e) {
        e.showError = function (e, t) {
          null !== e ? (void 0 !== t && t.clear(e), e.fillStyle = "#000000", e.font = "bold 20px Oldenburg", e.fillText("An error occurred :(", 60, 60)) : console.error("Context is null");
        };
      }(Bs || (Bs = {})), function (e) {
        e.loadTileset = function (e, t, n) {
          nl.load(e + "", Cs.TILESET, function (i) {
            if (Ns.isEmpty(i)) console.error("Error while loading tileset: " + e), n();else try {
              var _e17 = JSON.parse(i);

              n(_e17);
            } catch (i) {
              "SyntaxError" === i.name ? console.error("Error while parsing tileset: " + e) : "TypeError" === i.name ? console.error("Error while reading tileset: " + e) : console.error(i), Bs.showError(t), n();
            }
          });
        }, e.initTransientData = function (e) {
          void 0 !== e.imageData && (e.imageWidth = e.imageData.width, e.imageHeight = e.imageData.height);
        };
      }(js || (js = {}));

      var Fs = function Fs() {
        _classCallCheck(this, Fs);

        this.showGrid = !1, this.showEditorGrid = !1, this.showFPS = !1, this.showCellNumbers = !1, this.showFocus = !1, this.enableSelection = !1, this.showBlocks = !1, this.showOnTops = !1, this.enableAntialiasing = !0, this.fps = 0;
      };

      function Us() {}

      var Ws,
          Hs,
          Gs,
          Vs,
          qs = window.requestAnimationFrame || function (e) {
        return window.setTimeout(e, 40), Math.floor(100 * Math.random());
      },
          zs = window.cancelAnimationFrame;

      var Ys = /*#__PURE__*/function () {
        function Ys(e) {
          _classCallCheck(this, Ys);

          this.renderingConfiguration = new Fs(), this.grid = e, this.context = e.getContext(), this.paused = !1, this.focus = this.grid.mapCellToCanvas({
            i: 0,
            j: 0
          }), this.pointer = {
            i: 0,
            j: 0
          };
        }

        _createClass(Ys, [{
          key: "start",
          value: function start(e) {
            this.changeScale();
            var t = this,
                n = qs(function () {
              t.mainGameLoop(n);
            });
          }
        }, {
          key: "mainGameLoop",
          value: function mainGameLoop(e) {
            var t = this,
                n = qs(function () {
              t.mainGameLoop(n);
            });
            !this.paused && this.mainGameLoop_pre() ? (this.render(this.map, this.context), this.mainGameLoop_post()) : zs(e);
          }
        }, {
          key: "mainGameLoop_pre",
          value: function mainGameLoop_pre() {
            return !0;
          }
        }, {
          key: "mainGameLoop_post",
          value: function mainGameLoop_post() {}
        }, {
          key: "renderPointer",
          value: function renderPointer() {
            if (void 0 !== this.pointer) {
              var _e18 = this.grid.mapCellToCanvas(this.pointer);

              this.context.save(), this.context.beginPath(), this.context.fillStyle = Rs.Color.YELLOW, this.context.scale(2, 1), this.context.arc(Math.floor((_e18.x + this.grid.cellW / 2) / 2), _e18.y + this.grid.cellH - 4, 8, 0, Rs.DOUBLE_PI), this.context.closePath(), this.context.globalAlpha = .4, this.context.fill(), this.context.restore();
            }
          }
        }, {
          key: "renderFocus",
          value: function renderFocus() {
            null != this.focus.x && null != this.focus.y && this.renderingConfiguration.showFocus && (this.context.save(), this.context.beginPath(), this.context.fillStyle = Rs.Color.BLACK, this.context.arc(this.focus.x + Math.floor(this.grid.cellW / 2), this.focus.y + Math.floor(this.grid.cellH / 2), 15, 0, Rs.DOUBLE_PI), this.context.closePath(), this.context.fill(), this.context.restore());
          }
        }, {
          key: "toggleGrid",
          value: function toggleGrid(e) {
            this.renderingConfiguration.showGrid = null != e ? e : !this.renderingConfiguration.showGrid;
          }
        }, {
          key: "toggleGridMode",
          value: function toggleGridMode() {
            this.renderingConfiguration.showGrid ? this.renderingConfiguration.showBlocks ? (this.toggleGrid(), this.toggleBlocks()) : this.toggleBlocks() : this.toggleGrid();
          }
        }, {
          key: "toggleCellNumbering",
          value: function toggleCellNumbering(e) {
            this.renderingConfiguration.showCellNumbers = null != e ? e : !this.renderingConfiguration.showCellNumbers;
          }
        }, {
          key: "toggleFocus",
          value: function toggleFocus(e) {
            this.renderingConfiguration.showFocus = null != e ? e : !this.renderingConfiguration.showFocus;
          }
        }, {
          key: "toggleBlocks",
          value: function toggleBlocks(e) {
            this.renderingConfiguration.showBlocks = null != e ? e : !this.renderingConfiguration.showBlocks;
          }
        }, {
          key: "toggleOnTops",
          value: function toggleOnTops(e) {
            this.renderingConfiguration.showOnTops = null != e ? e : !this.renderingConfiguration.showOnTops;
          }
        }, {
          key: "toggleAntialiasing",
          value: function toggleAntialiasing(e) {
            this.renderingConfiguration.enableAntialiasing = null != e ? e : !this.renderingConfiguration.enableAntialiasing, "webkitImageSmoothingEnabled" in this.context && (this.context.webkitImageSmoothingEnabled = this.renderingConfiguration.enableAntialiasing), "msImageSmoothingEnabled" in this.context && (this.context.msImageSmoothingEnabled = this.renderingConfiguration.enableAntialiasing), void 0 !== this.context.imageSmoothingEnabled && (this.context.imageSmoothingEnabled = this.renderingConfiguration.enableAntialiasing);
          }
        }, {
          key: "updatePointer",
          value: function updatePointer(e, t) {
            this.pointer = void 0 === e || void 0 === t ? void 0 : {
              i: e,
              j: t
            };
          }
        }, {
          key: "moveFocusToDirection",
          value: function moveFocusToDirection(e) {
            if (void 0 !== e) switch (e) {
              case 0:
                this.focus.y -= +this.grid.cellH;
                break;

              case 2:
                this.focus.y += +this.grid.cellH;
                break;

              case 3:
                this.focus.x -= +this.grid.cellW;
                break;

              case 1:
                this.focus.x += +this.grid.cellW;
                break;

              case 4:
                break;

              default:
                console.error("Unexpected case: " + e);
            }
            this.grid.changeTranslation(this.focus.x, this.focus.y, this.map.width, this.map.height);
          }
        }, {
          key: "moveFocusToTarget",
          value: function moveFocusToTarget(e) {
            this.focus = this.grid.mapCellToCanvas(e), this.grid.changeTranslation(this.focus.x, this.focus.y, this.map.width, this.map.height);
          }
        }, {
          key: "resetTranslation",
          value: function resetTranslation() {
            this.grid.resetTranslation();
          }
        }, {
          key: "reapplyTranslation",
          value: function reapplyTranslation() {
            this.grid.reappyTranslation();
          }
        }, {
          key: "changeScale",
          value: function changeScale() {
            try {
              this.context.setTransform(1, 0, 0, 1, 0, 0), this.context.scale(this.grid.scaleX, this.grid.scaleY);
            } catch (e) {
              console.error(e);
            }
          }
        }, {
          key: "togglePause",
          value: function togglePause(e) {
            this.paused = null != e ? e : !this.paused, this.paused ? this.pauseStartTime = Ns.now() : (void 0 === this.pauseStartTime && (this.pauseStartTime = 0), this.pauseDuration = Ns.now() - this.pauseStartTime, this.pauseStartTime = void 0);
          }
        }, {
          key: "changeMap",
          value: function changeMap(e, t) {
            this.togglePause(!0), Ns.isEmpty(e) && (console.error("Uninitialized map"), console.trace()), this.map = e, this.changeTile(e.tileset.image, function (e) {
              setTimeout(function () {
                Hs.initTransientData(e), e.togglePause(!1);
              }), t(e);
            });
          }
        }, {
          key: "changeTile",
          value: function changeTile(e, t) {
            var n = this;
            js.loadTileset(e, this.context, function (i) {
              if (void 0 === i) return console.error("Cannot change tile, tileset not found: " + e), void t(n);
              n.map.tileset = i, nl.load(i.image, Cs.TILE, function (e) {
                n.map.tileset.imageData = e, t(n);
              });
            });
          }
        }, {
          key: "getSceneHeight",
          value: function getSceneHeight() {
            return this.map.height;
          }
        }, {
          key: "getSceneWidth",
          value: function getSceneWidth() {
            return this.map.width;
          }
        }, {
          key: "render",
          value: function render(e, t) {
            var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
            var i = this.redrawArea.y,
                o = this.redrawArea.y + this.redrawArea.h,
                r = this.redrawArea.x,
                a = this.redrawArea.x + this.redrawArea.w;

            if (!Ns.isEmpty(e) && void 0 !== e.tileset.imageData) {
              for (var _s2 = i; _s2 <= o; _s2++) {
                for (var _i5 = r; _i5 <= a; _i5++) {
                  var _o5 = Ds.cellToGid({
                    i: _i5,
                    j: _s2
                  }, e.width);

                  for (var _r6 = Rs.MapLayer.LOW; _r6 <= Rs.MapLayer.TOP; _r6++) {
                    var _a3 = this.map.layers[_r6];
                    if (void 0 === _a3 || void 0 === _a3.data || _a3.data.length < _o5) continue;
                    var _l2 = _a3.data[_o5];
                    if (Ns.isEmpty(_l2)) continue;
                    var _c = 0;
                    void 0 !== e.tileset.onTop && (_c = Ds.normalizeZIndex(e.tileset.onTop[_l2])), 0 !== _c && n || (this.applyLayerCustomizations(_r6), Ns.isEmpty(_a3.opacity) || (t.globalAlpha = _a3.opacity), this.renderCell(t, e.tileset, _l2, _i5, _s2), t.globalAlpha = 1, this.removeLayerCustomizations(_r6));
                  }

                  Hs.renderUI(this.map, this.grid, this.context, this.renderingConfiguration, _i5, _s2, !1);
                }
              }

              this.renderPointer();

              for (var _s3 = i; _s3 <= o; _s3++) {
                for (var _o6 = r; _o6 <= a && n; _o6++) {
                  for (var _n5 = i; _n5 <= _s3; _n5++) {
                    var _i6 = Ds.cellToGid({
                      i: _o6,
                      j: _n5
                    }, e.width);

                    for (var _r7 = Rs.MapLayer.LOW; _r7 <= Rs.MapLayer.TOP; _r7++) {
                      var _a4 = this.map.layers[_r7];
                      if (void 0 === _a4 || void 0 === _a4.data || _a4.data.length < _i6) continue;
                      var _l3 = _a4.data[_i6];
                      if (Ns.isEmpty(_l3)) continue;
                      var _c2 = 0;
                      void 0 !== e.tileset.onTop && (_c2 = Ds.normalizeZIndex(e.tileset.onTop[_l3])), _c2 > 0 && _n5 + _c2 === _s3 && (this.applyLayerCustomizations(_r7), Ns.isEmpty(_a4.opacity) || (t.globalAlpha = _a4.opacity), this.renderCell(t, e.tileset, _l3, _o6, _n5), t.globalAlpha = 1, this.removeLayerCustomizations(_r7));
                    }
                  }
                }

                for (var _e19 = r; _e19 <= a; _e19++) {
                  this.renderDynamicElements(i, o, r, a, _e19, _s3, !1);
                }
              }

              for (var _e20 = i; _e20 <= o; _e20++) {
                for (var _t5 = r; _t5 <= a; _t5++) {
                  this.renderDynamicElements(i, o, r, a, _t5, _e20, !0), Hs.renderUI(this.map, this.grid, this.context, this.renderingConfiguration, _t5, _e20, !0);
                }
              }
            }

            Hs.renderGlobalUI(this.grid, this.context, this.renderingConfiguration), this.renderFocus();
          }
        }, {
          key: "renderCell",
          value: function renderCell(e, t, n, i, o) {
            var r = Ds.gidToCell(n, Math.floor(t.imageWidth / this.grid.cellW));
            e.drawImage(t.imageData, Math.floor(r.i * this.grid.cellW), Math.floor(r.j * this.grid.cellH), this.grid.cellW, this.grid.cellH, Math.floor(i * this.grid.cellW), Math.floor(o * this.grid.cellH), this.grid.cellW, this.grid.cellH);
          }
        }, {
          key: "applyLayerCustomizations",
          value: function applyLayerCustomizations(e) {}
        }, {
          key: "removeLayerCustomizations",
          value: function removeLayerCustomizations(e) {}
        }, {
          key: "onFocusCellChange",
          value: function onFocusCellChange() {}
        }, {
          key: "onFocusPixelChange",
          value: function onFocusPixelChange(e, t) {}
        }, {
          key: "getMap",
          value: function getMap() {
            return this.map;
          }
        }]);

        return Ys;
      }();

      !function (e) {
        function t(e) {
          return {
            id: e.id,
            memory: e.memory
          };
        }

        e.getSave = function (e, n) {
          if (Ns.isEmpty(e) || Ns.isEmpty(n)) return Ls.getSave();
          var i = new Array();

          if (!Ns.isEmpty(e.events)) {
            var _iterator11 = _createForOfIteratorHelper(e.events),
                _step11;

            try {
              for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                var _n6 = _step11.value;
                i.push(t(_n6));
              }
            } catch (err) {
              _iterator11.e(err);
            } finally {
              _iterator11.f();
            }
          }

          var o = Ls.getSave();
          return o.currentMap = e.id, o.hero = n, o.maps[e.id] = {
            events: i
          }, o;
        }, e.loadMapSave = function (e, t, n, i) {
          Hs.loadMap(t, e.context.canvas, function (t) {
            var o = t;
            !function (e, t) {
              if (Ns.isEmpty(e) || Ns.isEmpty(t.events) || Ns.isEmpty(e.maps[t.id])) return;
              var n = e.maps[t.id].events;

              if (!Ns.isEmpty(n)) {
                var _iterator12 = _createForOfIteratorHelper(n),
                    _step12;

                try {
                  for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
                    var _e21 = _step12.value;

                    var _iterator13 = _createForOfIteratorHelper(t.events),
                        _step13;

                    try {
                      for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
                        var _n7 = _step13.value;
                        _e21.id === _n7.id && (_n7.memory = _e21.memory);
                      }
                    } catch (err) {
                      _iterator13.e(err);
                    } finally {
                      _iterator13.f();
                    }
                  }
                } catch (err) {
                  _iterator12.e(err);
                } finally {
                  _iterator12.f();
                }
              }
            }(e.save, o), e.changeMap(o, function () {
              if (e.resetTranslation(), e.hero.i = n.i, e.hero.j = n.j, Gs.initTransientData(o, e.grid, e.hero), e.focus = e.grid.mapCellToCanvas(n), !Ns.isEmpty(e.map.events)) for (var _t6 = 0; _t6 < e.map.events.length; _t6++) {
                var _n8 = Gs.initTransientData(e.map, e.grid, e.map.events[_t6]);

                void 0 !== _n8 && (e.map.events[_t6] = _n8);
              }
              i(!0);
            });
          });
        };
      }(Ws || (Ws = {}));

      var Ks = /*#__PURE__*/function (_Ys) {
        _inherits(Ks, _Ys);

        var _super = _createSuper(Ks);

        function Ks(e, t) {
          var _this;

          _classCallCheck(this, Ks);

          _this = _super.call(this, e), _this.FPS = 20, _this.refreshInterval = 1e3 / _this.FPS, _this.autoFPS = !0, _this.secondFPS = 0, _this.countFPS = 0, _this.lastFPS = 0, _this.fpsPerformance = [22, 21, 20], _this.launcher = t;
          return _this;
        }

        _createClass(Ks, [{
          key: "mainGameLoop_pre",
          value: function mainGameLoop_pre() {
            if (!_get(_getPrototypeOf(Ks.prototype), "mainGameLoop_pre", this).call(this)) return !1;
            var e = !1,
                t = this,
                n = Ns.now();

            if (!Ns.isEmpty(this.hero)) {
              var _i7 = Gs.update(this.hero, this, this.hero, this.action, n, this.pauseDuration);

              void 0 !== _i7 && this.launcher(this.hero, this, this.hero, _i7), e = Gs.manageMovements(this.map, this.grid, this.hero, function (e, n) {
                t.grid.changeTranslation(t.focus.x + e, t.focus.y + n, t.map.width, t.map.height);
              }, function (e, n) {
                t.focus.x += e, t.focus.y += n;
              });
            }

            if (!Ns.isEmpty(this.map.events)) {
              var _iterator14 = _createForOfIteratorHelper(this.map.events),
                  _step14;

              try {
                for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
                  var _t7 = _step14.value;

                  var _i8 = Gs.update(_t7, this, this.hero, this.action, n, this.pauseDuration);

                  void 0 !== _i8 && this.launcher(_t7, this, this.hero, _i8), e = e || Gs.manageMovements(this.map, this.grid, _t7, Us, Us);
                }
              } catch (err) {
                _iterator14.e(err);
              } finally {
                _iterator14.f();
              }

              this.action = void 0;
            }

            return e && Hs.updateDynamicData(t.hero, this.map), this.paused || (this.pauseDuration = void 0), this.redrawArea = this.getRedrawArea(), !0;
          }
        }, {
          key: "mainGameLoop_post",
          value: function mainGameLoop_post() {
            _get(_getPrototypeOf(Ks.prototype), "mainGameLoop_post", this).call(this), this.renderFPS();
          }
        }, {
          key: "getRedrawArea",
          value: function getRedrawArea(e) {
            var t = this.grid.getBoundariesX(this.focus.x, this.getSceneWidth()),
                n = this.grid.getBoundariesY(this.focus.y, this.getSceneHeight());
            return {
              x: t.min,
              y: n.min,
              h: n.max - n.min,
              w: t.max - t.min
            };
          }
        }, {
          key: "toggleFPS",
          value: function toggleFPS(e) {
            this.renderingConfiguration.showFPS = null != e ? e : !this.renderingConfiguration.showFPS;
          }
        }, {
          key: "renderFPS",
          value: function renderFPS() {
            var e = Math.floor(Ns.now() / 1e3);
            if (e === this.secondFPS) this.countFPS++;else if (this.lastFPS = this.countFPS, this.countFPS = 1, this.secondFPS = e, !0 === this.autoFPS) {
              this.fpsPerformance.shift(), this.fpsPerformance[2] = this.lastFPS;

              var _e22 = (this.fpsPerformance[0] + this.fpsPerformance[1] + this.fpsPerformance[2]) / 3;

              this.FPS = Math.ceil(_e22) + 2;
            }
            this.renderingConfiguration.showFPS && (this.context.fillStyle = Rs.Color.RED, this.context.font = "bold 18px Oldenburg", this.context.fillText("" + this.lastFPS, this.grid.getCurrentTranslation().x + 10, this.grid.getCurrentTranslation().y + 20));
          }
        }, {
          key: "renderDynamicElements",
          value: function renderDynamicElements(e, t, n, i, o, r, a) {
            try {
              Gs.isVisible(this.hero, e, t, n, i, o, r, a) && Gs.render(this.grid, this.hero, this.context, !0);
            } catch (e) {
              console.error(e);
            }

            if (!Ns.isEmpty(this.map.events)) {
              var _iterator15 = _createForOfIteratorHelper(this.map.events),
                  _step15;

              try {
                for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
                  var _s4 = _step15.value;

                  try {
                    Gs.isVisible(_s4, e, t, n, i, o, r, a) && Gs.render(this.grid, _s4, this.context, !0, this.pointer);
                  } catch (e) {
                    console.error(e);
                  }
                }
              } catch (err) {
                _iterator15.e(err);
              } finally {
                _iterator15.f();
              }
            }
          }
        }, {
          key: "loadSave",
          value: function loadSave(e, t) {
            var n, i;

            if (void 0 === e) {
              if (!Ns.isEmpty(this.map)) return void t(!1);
              n = Os.maps.start.map, i = Ls.getHero();
            } else this.save = e, n = e.currentMap, i = e.hero;

            var o = Gs.initTransientData(this.map, this.grid, i);
            void 0 === o ? console.error("Cannot initialize hero event") : this.hero = o, Ws.loadMapSave(this, n, i, t);
          }
        }, {
          key: "registerAction",
          value: function registerAction(e, t) {
            this.action = {
              i: e,
              j: t
            };
          }
        }, {
          key: "startHeroMovement",
          value: function startHeroMovement(e, t) {
            if (e < 0 || e >= this.map.width || t < 0 || t >= this.map.height) return !1;
            var n = this;
            return Gs.startMovement(this.hero, e, t, function (e) {
              n.registerAction(e.i, e.j);
            });
          }
        }, {
          key: "isDialogOpen",
          value: function isDialogOpen() {
            return void 0 !== this.dialogName && void 0 !== this.dialogSkin;
          }
        }, {
          key: "setLanguage",
          value: function setLanguage(e) {
            void 0 === this.save && (this.save = Ls.getSave()), this.save.config.lang = e;
          }
        }, {
          key: "toggleNaturalScale",
          value: function toggleNaturalScale(e, t) {
            this.grid.toggleNaturalScale(e, t), this.grid.refreshCanvasSize(), this.changeScale(), this.reapplyTranslation();
          }
        }]);

        return Ks;
      }(Ys);

      !function (e) {
        function t(e, t) {
          t.dynamicBlocks = [];

          for (var _e23 = 0; _e23 < t.height * t.width; _e23++) {
            t.dynamicBlocks[_e23] = 0;
          }

          var n = new Array();
          void 0 !== e && n.push(e), void 0 !== t.events && (n = n.concat(t.events));

          var _iterator16 = _createForOfIteratorHelper(n),
              _step16;

          try {
            for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
              var _e24 = _step16.value;

              var _n9 = Gs.getState(_e24);

              if (void 0 === _n9 || Ns.isEmpty(_n9.block) || _n9.block) {
                var _n10 = Ds.cellToGid(_e24, t.width);

                t.dynamicBlocks[_n10] = ks.ALL;
              }
            }
          } catch (err) {
            _iterator16.e(err);
          } finally {
            _iterator16.f();
          }
        }

        function n(e, t, n, i, o) {
          var r = Ds.getDirectionTarget({
            i: t,
            j: n
          }, i),
              a = !1;
          return void 0 !== o && 4 === Ds.getDirection(r, o) && (a = !0), Ds.isMovementBlocked(e, t, n, i, a);
        }

        e.loadMap = function (e, t, n) {
          nl.load(e + "", Cs.MAP, function (i) {
            if (Ns.isEmpty(i)) console.error("Error while loading map: " + e), n();else try {
              var _e25 = JSON.parse(i);

              if (!Ns.isEmpty(_e25.events)) {
                _e25.maxEventId = 0;

                var _iterator17 = _createForOfIteratorHelper(_e25.events),
                    _step17;

                try {
                  for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
                    var _t8 = _step17.value;
                    _t8.id > _e25.maxEventId && (_e25.maxEventId = _t8.id);
                  }
                } catch (err) {
                  _iterator17.e(err);
                } finally {
                  _iterator17.f();
                }
              }

              n(_e25);
            } catch (o) {
              "SyntaxError" === o.name ? console.error("Error while parsing map: " + e) : "TypeError" === o.name ? console.error("Error while reading map: " + e) : console.error(o), console.error(i), Bs.showError(t.getContext("2d")), n();
            }
          });
        }, e.renderUI = function (e, t, n, i, o, r, a) {
          if ((a || i.showGrid || i.showEditorGrid || i.showFocus || i.showBlocks || i.showOnTops) && (!a || i.showFPS || i.showCellNumbers || i.showFocus) && !Ns.isEmpty(i)) {
            if (!a && i.showBlocks && !Ns.isEmpty(e) && (!Ns.isEmpty(e.blocks) || !Ns.isEmpty(e.dynamicBlocks))) {
              n.save(), n.globalAlpha = .5, n.fillStyle = Rs.Color.YELLOW, n.strokeStyle = Rs.Color.BLACK, n.lineWidth = 2;

              var _i9 = Ns.isEmpty(e.blocks) ? ks.NONE : e.blocks[r * e.width + o],
                  _a5 = Ns.isEmpty(e.dynamicBlocks) ? ks.NONE : e.dynamicBlocks[r * e.width + o];

              (_i9 > ks.NONE || _a5 > ks.NONE) && (_a5 > ks.NONE && (n.fillStyle = Rs.Color.GREEN), Ds.isBlockDirectionBlocked(_i9 | _a5, ks.UP) && (n.beginPath(), n.moveTo(o * t.cellW, r * t.cellH), n.lineTo((o + .5) * t.cellW, (r + .2) * t.cellH), n.lineTo((o + 1) * t.cellW, r * t.cellH), n.fill(), n.stroke()), Ds.isBlockDirectionBlocked(_i9 | _a5, ks.DOWN) && (n.beginPath(), n.moveTo(o * t.cellW, (r + 1) * t.cellH), n.lineTo((o + .5) * t.cellW, (r + .8) * t.cellH), n.lineTo((o + 1) * t.cellW, (r + 1) * t.cellH), n.fill(), n.stroke()), Ds.isBlockDirectionBlocked(_i9 | _a5, ks.LEFT) && (n.beginPath(), n.moveTo(o * t.cellW, r * t.cellH), n.lineTo((o + .2) * t.cellW, (r + .5) * t.cellH), n.lineTo(o * t.cellW, (r + 1) * t.cellH), n.fill(), n.stroke()), Ds.isBlockDirectionBlocked(_i9 | _a5, ks.RIGHT) && (n.beginPath(), n.moveTo((o + 1) * t.cellW, r * t.cellH), n.lineTo((o + .8) * t.cellW, (r + .5) * t.cellH), n.lineTo((o + 1) * t.cellW, (r + 1) * t.cellH), n.fill(), n.stroke())), n.restore();
            }

            if (!a && i.showOnTops && !Ns.isEmpty(e) && !Ns.isEmpty(e.tileset.onTop)) {
              var _i10 = Ds.cellToGid({
                i: o,
                j: r
              }, e.width);

              Ds.normalizeZIndex(e.tileset.onTop[_i10]) > 0 && (n.save(), n.globalAlpha = .6, n.beginPath(), n.fillStyle = Rs.Color.AQUA, n.arc(Math.floor((o + .5) * t.cellW), Math.floor((r + .5) * t.cellH), 10, 0, Rs.DOUBLE_PI), n.closePath(), n.fill(), n.fillStyle = Rs.Color.DARKBLUE, n.font = "bold 14px Arial", n.fillText("" + e.tileset.onTop[_i10], (o + .35) * t.cellW, (r + .65) * t.cellH), n.restore());
            }

            !a && i.showGrid && (n.strokeStyle = Rs.Color.RED, n.strokeRect(o * t.cellW, r * t.cellH, t.cellW, t.cellH)), !a && i.showEditorGrid && (n.save(), n.globalAlpha = .4, n.strokeStyle = Rs.Color.GREY, n.strokeRect(o * t.cellW, r * t.cellH, t.cellW, t.cellH), n.restore()), !a && i.showCellNumbers && (n.fillStyle = Rs.Color.RED, n.font = "bold 10px Arial", n.fillText(o + "," + r, o * t.cellW + 1, r * t.cellH + 10));
          }
        }, e.renderGlobalUI = function (e, t, n) {
          if (n.enableSelection && (void 0 !== n.selectCellStart || void 0 !== n.selectEventCell)) {
            var _i11, _o7;

            t.save();
            var _r8 = e.cellW,
                _a6 = e.cellH;

            if (void 0 !== n.selectCellStart) {
              if (_i11 = n.selectCellStart.i * e.cellW, _o7 = n.selectCellStart.j * e.cellH, void 0 !== n.selectCellEnd) {
                var _t9 = n.selectCellEnd.i * e.cellW,
                    _s5 = n.selectCellEnd.j * e.cellH;

                _i11 > _t9 ? (_r8 = _i11 - _t9, _i11 = _t9) : _r8 = _t9 - _i11, _o7 > _s5 ? (_a6 = _o7 - _s5, _o7 = _s5) : _a6 = _s5 - _o7, _r8 += e.cellW, _a6 += e.cellH;
              }

              t.strokeStyle = Rs.Color.RED, t.lineWidth = 3;
            } else _i11 = n.selectEventCell.i * e.cellW, _o7 = n.selectEventCell.j * e.cellH, t.strokeStyle = Rs.Color.LIME, t.lineWidth = 2;

            t.strokeRect(_i11, _o7, _r8, _a6), t.restore();
          }
        }, e.resizeMap = function (e, t, n) {
          var i = e.width,
              o = n,
              r = e.height,
              a = t;
          if (i === o && r === a || Ns.isEmpty(e)) return;
          var s,
              l,
              c = Math.min(i, o);
          if (o < i) s = i - o;else {
            l = [];

            for (var _e26 = 0; _e26 < o - i; _e26++) {
              l[_e26] = void 0;
            }
          }

          for (var _t10 = 0; _t10 < e.layers.length; _t10++) {
            var _n11 = e.layers[_t10];

            if (void 0 !== _n11.data) {
              if (i !== o) for (var _e27 = 0; _e27 < r; _e27++) {
                void 0 !== s ? _n11.data.splice(c + _e27 * o, s) : void 0 !== l ? _n11.data.splice(c + _e27 * o, 0, l) : console.error("Unexpected case");
              }

              if (r > a && (_n11.data.length = o * a), r < a) {
                var _e28 = [];

                for (var _t11 = 0; _t11 < o - i; _t11++) {
                  _e28[_t11] = void 0;
                }

                for (var _t12 = i; _t12 < o; _t12++) {
                  _n11.data.concat(_e28);
                }
              }
            }
          }

          e.height = t, e.width = n;
        }, e.initTransientData = function (e) {
          var n,
              i = e.map,
              o = e.grid;
          if (e instanceof Ks && (n = e.hero), js.initTransientData(i.tileset), function (e) {
            if (e.blocks = [], !Ns.isEmpty(e.layers) && !Ns.isEmpty(e.tileset.blocks)) {
              for (var _t13 = 0; _t13 < e.height * e.width; _t13++) {
                e.blocks[_t13] = 0;
              }

              for (var _t14 = 0; _t14 < e.layers.length; _t14++) {
                var _n12 = e.layers[_t14];
                if (void 0 !== _n12.data) for (var _t15 = 0; _t15 < _n12.data.length; _t15++) {
                  var _i12 = _n12.data[_t15];
                  if (Ns.isEmpty(_i12) || _i12 < 0 || _i12 >= e.tileset.blocks.length) continue;
                  if (void 0 !== e.tileset.onTop && Ds.normalizeZIndex(e.tileset.onTop[_i12]) > 0) continue;
                  var _o8 = e.tileset.blocks[_i12];
                  Ns.isEmpty(_o8) && (_o8 = ks.NONE), e.blocks[_t15] = _o8;
                }
              }
            }
          }(i), t(n, i), Ns.isEmpty(i.events)) i.events = [];else {
            var _iterator18 = _createForOfIteratorHelper(i.events),
                _step18;

            try {
              for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
                var _e29 = _step18.value;
                Gs.initTransientData(i, o, _e29);
              }
            } catch (err) {
              _iterator18.e(err);
            } finally {
              _iterator18.f();
            }
          }
          i.width = parseInt(i.width + ""), i.height = parseInt(i.height + "");
        }, e.updateDynamicData = function (e, n) {
          t(e, n);
        }, e.isMovementTowardsTargetBlocked = n, e.pathFinder = function (e, t, i) {
          var o = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : Ms.D_STAR_LITE;
          var r = Ns.now(),
              a = i.i - t.i,
              s = i.j - t.j;
          if (0 === a && 0 === s) return 4;
          {
            var _M = 4;

            switch (o) {
              case Ms.BASIC:
                Math.abs(a) > Math.abs(s) ? (_M = a > 0 ? 1 : 3, n(e, t.i, t.j, _M, i) && (_M = s > 0 ? 2 : 0)) : (_M = s > 0 ? 2 : 0, n(e, t.i, t.j, _M, i) && (_M = a > 0 ? 1 : 3)), n(e, t.i, t.j, _M, i) && (_M = 4);
                break;

              case Ms.D_STAR_LITE:
                {
                  var h = function h(e) {
                    return [Math.min(A(e), b(e)) + w(f, e) + _o9, Math.min(A(e), b(e))];
                  };

                  var v = function v(e) {
                    A(e) !== b(e) ? (e.key = h(e), T(e)) : function (e) {
                      var _iterator19 = _createForOfIteratorHelper(c),
                          _step19;

                      try {
                        for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
                          var _t16 = _step19.value;
                          if (I(e, _t16)) return !0;
                        }
                      } catch (err) {
                        _iterator19.e(err);
                      } finally {
                        _iterator19.f();
                      }

                      return !1;
                    }(e) && k(e);
                  };

                  var m = function m(e, t) {
                    t > _n13 && (t = _n13);
                    var i = Ds.cellToGid(e.cell, g);
                    d[i] = t;
                  };

                  var y = function y(e, t) {
                    t > _n13 && (t = _n13);
                    var i = Ds.cellToGid(e.cell, g);
                    u[i] = t;
                  };

                  var A = function A(e) {
                    var t = Ds.cellToGid(e.cell, g);
                    return d[t];
                  };

                  var b = function b(e) {
                    var t = Ds.cellToGid(e.cell, g);
                    return u[t];
                  };

                  var E = function E(t) {
                    var n = Ds.cellToGid(t.cell, e.width),
                        i = [];
                    return 0 !== t.cell.i && i.push(l[n - 1]), t.cell.i < e.width - 1 && i.push(l[n + 1]), n - e.width >= 0 && i.push(l[n - e.width]), n + e.width < l.length && i.push(l[n + e.width]), i;
                  };

                  var _ = function _(t) {
                    var n = Ds.cellToGid(t.cell, e.width),
                        i = [];
                    return 0 !== t.cell.i && i.push(l[n - 1]), t.cell.i < e.width - 1 && i.push(l[n + 1]), n - e.width >= 0 && i.push(l[n - e.width]), n + e.width < l.length && i.push(l[n + e.width]), i;
                  };

                  var C = function C(t, i) {
                    var o = Ds.getDirection(i.cell, t.cell),
                        r = 4 === Ds.getDirection(i.cell, p.cell);
                    return Ds.isMovementBlocked(e, t.cell.i, t.cell.j, o, r) ? _n13 : 1;
                  };

                  var w = function w(e, t) {
                    return Math.abs(e.cell.i - t.cell.i) + Math.abs(e.cell.j - t.cell.j);
                  };

                  var S = function S(e, t) {
                    return e[0] === t[0] && e[1] === t[1] ? 0 : e[0] > t[0] || e[0] === t[0] && e[1] > t[1] ? 1 : -1;
                  };

                  var I = function I(e, t) {
                    return e.cell.i === t.cell.i && e.cell.j === t.cell.j;
                  };

                  var T = function T(e) {
                    var _iterator20 = _createForOfIteratorHelper(c),
                        _step20;

                    try {
                      for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
                        var _t17 = _step20.value;
                        if (I(e, _t17)) return void (_t17.key = e.key);
                      }
                    } catch (err) {
                      _iterator20.e(err);
                    } finally {
                      _iterator20.f();
                    }

                    c.push(e);
                  };

                  var k = function k(e) {
                    var t = [];

                    var _iterator21 = _createForOfIteratorHelper(c),
                        _step21;

                    try {
                      for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
                        var _n14 = _step21.value;
                        I(e, _n14) || t.push(_n14);
                      }
                    } catch (err) {
                      _iterator21.e(err);
                    } finally {
                      _iterator21.f();
                    }

                    c = t;
                  };

                  var x = function x() {
                    var e;

                    var _iterator22 = _createForOfIteratorHelper(c),
                        _step22;

                    try {
                      for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
                        var _t18 = _step22.value;
                        (void 0 === e || S(_t18.key, e.key) < 0) && (e = _t18);
                      }
                    } catch (err) {
                      _iterator22.e(err);
                    } finally {
                      _iterator22.f();
                    }

                    return void 0 === e && (e = {
                      cell: {
                        i: -1,
                        j: -1
                      },
                      key: [_n13, _n13]
                    }), e;
                  };

                  var l, c, d, u;
                  var _n13 = Number.MAX_SAFE_INTEGER;
                  var f, p;
                  var _o9 = 0;
                  var g = e.width;
                  f = {
                    cell: t
                  }, p = {
                    cell: i
                  }, _M = function () {
                    for (function () {
                      l = [];

                      for (var _t19 = 0; _t19 < e.height; _t19++) {
                        for (var _n16 = 0; _n16 < e.width; _n16++) {
                          var _e31 = {
                            cell: {
                              i: _n16,
                              j: _t19
                            }
                          };
                          l.push(_e31);
                        }
                      }

                      d = [], u = [], c = [], _o9 = 0;

                      var _iterator23 = _createForOfIteratorHelper(l),
                          _step23;

                      try {
                        for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
                          var _e32 = _step23.value;
                          m(_e32, _n13), y(_e32, _n13);
                        }
                      } catch (err) {
                        _iterator23.e(err);
                      } finally {
                        _iterator23.f();
                      }

                      y(p, 0);
                      var t = p;
                      t.key = [w(f, p), 0], c.push(t);
                    }(), function () {
                      for (; S(x().key, h(f)) < 0 || b(f) > A(f);) {
                        var _e33 = x(),
                            _t20 = _e33,
                            _i13 = _e33.key,
                            _o10 = h(_t20);

                        if (S(_i13, _o10) < 0) _t20.key = _o10, T(_t20);else if (A(_t20) > b(_t20)) {
                          m(_t20, b(_t20)), k(_t20);

                          var _iterator24 = _createForOfIteratorHelper(_(_t20)),
                              _step24;

                          try {
                            for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
                              var _e34 = _step24.value;
                              I(_e34, p) || y(_e34, Math.min(b(_e34), C(_e34, _t20) + A(_t20))), v(_e34);
                            }
                          } catch (err) {
                            _iterator24.e(err);
                          } finally {
                            _iterator24.f();
                          }
                        } else {
                          var _e35 = A(_t20);

                          m(_t20, _n13);

                          var _i14 = _(_t20);

                          _i14.push(_t20);

                          var _iterator25 = _createForOfIteratorHelper(_i14),
                              _step25;

                          try {
                            for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
                              var _o11 = _step25.value;

                              if ((b(_o11) === C(_o11, _t20) + _e35 || b(_o11) === _n13 && (C(_o11, _t20) === _n13 || _e35 === _n13)) && !I(_o11, p)) {
                                var _e36 = void 0;

                                var _iterator26 = _createForOfIteratorHelper(E(_o11)),
                                    _step26;

                                try {
                                  for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
                                    var _t21 = _step26.value;

                                    var _i15 = C(_o11, _t21) + A(_t21);

                                    _i15 > _n13 && (_i15 = _n13), (void 0 === _e36 || _e36 > _i15) && (_e36 = _i15);
                                  }
                                } catch (err) {
                                  _iterator26.e(err);
                                } finally {
                                  _iterator26.f();
                                }

                                y(_o11, _e36);
                              }

                              v(_o11);
                            }
                          } catch (err) {
                            _iterator25.e(err);
                          } finally {
                            _iterator25.f();
                          }
                        }
                      }
                    }(); !I(f, p);) {
                      var _e30 = void 0,
                          _n15 = void 0;

                      var _iterator27 = _createForOfIteratorHelper(E(f)),
                          _step27;

                      try {
                        for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
                          var _t22 = _step27.value;

                          var _i16 = C(f, _t22) + A(_t22);

                          (void 0 === _n15 || _n15 > _i16) && (_n15 = _i16, _e30 = _t22);
                        }
                      } catch (err) {
                        _iterator27.e(err);
                      } finally {
                        _iterator27.f();
                      }

                      return f = _e30, Ds.getDirection(f.cell, t);
                    }

                    return 4;
                  }();
                }
            }

            4 !== _M && (Gs.addDirectionToPath(t, _M, 3), void 0 === t.path && (t.path = []), 3 === t.path.length && t.path[0] === t.path[2] && Ds.isDirectionsOpposed(t.path[0], t.path[1]) && (_M = 4));

            var _N = Ns.now() - r;

            return _N > 10 && console.debug("Path found in: " + _N), _M;
          }
        };
      }(Hs || (Hs = {})), function (e) {
        function t(e, t) {
          var n = e.states[t].condition;
          return n in Vs ? Vs[n](e) : (console.error('Condition not found: "' + n + '", on event: ' + e.name), !1);
        }

        function n(e, t, n, i) {
          return e.newTarget = {
            i: t,
            j: n
          }, e.newOnTargetReached = i, !0;
        }

        function i(e) {
          e.path = void 0, e.movementStartTime = void 0, e.movementDirection = void 0, e.target = void 0;
        }

        function o(e) {
          var t = r(e);

          if (void 0 !== t) {
            var _e37 = t.mSpeed;
            if (!Ns.isEmpty(_e37)) return _e37;
          }

          return Rs.MEDIUM_MSPEED;
        }

        function r(e) {
          if (void 0 !== e && void 0 !== e.currentState && void 0 !== e.states) return e.states[e.currentState];
        }

        function a(e, t) {
          var n = t.states[t.currentState].direction;
          void 0 === n && (n = 4);
          var i = Ds.getNextAbsoluteDirection(n, 0),
              o = Hs.isMovementTowardsTargetBlocked(e, t.i, t.j, i) ? 0 : 3,
              r = Hs.isMovementTowardsTargetBlocked(e, t.i, t.j, 4) ? 0 : 2,
              a = Hs.isMovementTowardsTargetBlocked(e, t.i, t.j, 4) ? 0 : 2,
              s = o + r + a + (Hs.isMovementTowardsTargetBlocked(e, t.i, t.j, 4) ? 0 : 1),
              l = 4;

          if (s > 0) {
            var _e38 = Ds.getRandomInteger(1, s);

            _e38 -= o, _e38 <= 0 ? l = i : (_e38 -= r, _e38 <= 0 || (_e38 -= a), l = 4);
          }

          return Ds.getDirectionTarget(t, l);
        }

        e.update = function (e, i, o, r, s) {
          var l = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

          if (Ns.isEmpty(e.movementStartTime) || (e.movementStartTime += l), !Ns.isEmpty(e.states)) {
            var _s6 = -1;

            for (var _n17 = e.states.length - 1; _n17 >= 0; _n17--) {
              if (t(e, _n17)) {
                _s6 = _n17;
                break;
              }
            }

            if (e.currentState = _s6, e === o) return;
            if (-1 !== e.currentState && void 0 !== e.states[e.currentState].movement && void 0 === e.movementStartTime && function (e, t) {
              var i,
                  _o13,
                  r = t.states[t.currentState].movement;

              switch (r.strategy) {
                case "target":
                  void 0 === r.target && (console.warn("event: " + t.id + " has strategy=target, but target is undefined. Will fallback to random"), r.target = a(e, t)), i = r.target;
                  break;

                case "event":
                  var _s7;

                  var _iterator28 = _createForOfIteratorHelper(e.events),
                      _step28;

                  try {
                    for (_iterator28.s(); !(_step28 = _iterator28.n()).done;) {
                      var _t23 = _step28.value;
                      _t23.id === r.eventId && (_s7 = _t23);
                    }
                  } catch (err) {
                    _iterator28.e(err);
                  } finally {
                    _iterator28.f();
                  }

                  if (void 0 === _s7) return void console.error("Cannot find event: " + r.eventId);

                  var _l4 = Hs.pathFinder(e, t, _s7, r.pathfinder);

                  i = Ds.getDirectionTarget(t, _l4), _o13 = function o(i) {
                    var a = Hs.pathFinder(e, t, _s7, r.pathfinder);

                    if (4 !== a) {
                      var _e39 = Ds.getDirectionTarget(t, a);

                      n(t, _e39.i, _e39.j, _o13);
                    } else setTimeout(function () {
                      _o13(i);
                    }, 1e3);
                  };
                  break;

                case "random":
                  i = a(e, t), _o13 = function _o12() {
                    setTimeout(function () {
                      var i = a(e, t);
                      n(t, i.i, i.j, _o13);
                    }, r.pause);
                  };
                  break;

                default:
                  return void console.error("Unexpected movement strategy: " + r.strategy + " for event: " + t.id);
              }

              void 0 !== i && n(t, i.i, i.j, _o13);
            }(i.getMap(), e), function (e, t, n, i) {
              switch (e.states[t].trigger) {
                case 0:
                  if (void 0 === i || i.i !== e.i || i.j !== e.j) return !1;

                case 1:
                  var _o14 = Math.abs(e.i - n.i),
                      _r9 = Math.abs(e.j - n.j);

                  return 0 === _o14 && _r9 <= 1 || _o14 <= 1 && 0 === _r9;

                case 2:
                  return e.i === n.i && e.j === n.j;

                case 3:
                  return !0;

                default:
                  return console.error("Unexpected case: " + e.states[t].trigger), !1;
              }
            }(e, e.currentState, o, r)) return e.currentState;
          }
        }, e.startMovement = n, e.stopMovement = i, e.manageMovements = function e(t, n, r, a, s) {
          var l = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
          var c = !1;

          if (!Ns.isEmpty(r.movementStartTime)) {
            if (0 === l && (l = Ns.now() - r.movementStartTime), void 0 === r.target) return console.error("No target set for movement"), !0;

            var _e40,
                _d = r.target,
                _u = function (e, t, n) {
              var i = 4,
                  o = Ds.cellToGid(n, e.width),
                  r = Ds.getMapStaticBlock(e, o),
                  a = Ds.getMapDynamicBlock(e, o);
              if (Ds.isBlockDirectionBlocked(r, ks.ALL) && !Ds.isBlockDirectionBlocked(a, ks.ALL) || o < 0 || o >= e.width * e.height) i = 4;else if (Ns.isEmpty(t.movementDirection) || 4 !== t.movementDirection) {
                try {
                  i = Hs.pathFinder(e, t, n);
                } catch (t) {
                  console.error(t);
                }

                var _r10 = Ds.getDirectionTarget(t, i),
                    _a7 = Ds.cellToGid(_r10, e.width),
                    _s8 = Ds.getMapDynamicBlock(e, _a7);

                Ds.isDirectionEnumBlocked(_s8, Ds.getOpposedDirections(i)) && (i = 4, _a7 === o && void 0 !== t.onTargetReached && t.onTargetReached(n));
              } else i = t.movementDirection;
              return i;
            }(t, r, _d),
                _f = 0,
                _p = 0;

            switch (_u) {
              case 3:
                _f = Math.min(n.cellW, Math.floor(o(r) * l)), _e40 = _f, _f *= -1;
                break;

              case 1:
                _f = Math.min(n.cellW, Math.floor(o(r) * l)), _e40 = _f;
                break;

              case 0:
                _p = Math.min(n.cellH, Math.floor(o(r) * l)), _e40 = _p, _p *= -1;
                break;

              case 2:
                _p = Math.min(n.cellH, Math.floor(o(r) * l)), _e40 = _p;
                break;

              case 4:
                i(r), void 0 !== r.onTargetReached && r.onTargetReached(_d);
            }

            if (4 !== _u && (void 0 !== r.states[r.currentState] && (r.states[r.currentState].direction = _u), r.movementDirection = _u, r.position = {
              x: r.i * n.cellW + _f,
              y: r.j * n.cellH + _p
            }, a(_f, _p), _e40 === n.cellW)) {
              c = !0, r.movementDirection = void 0, r.movementStartTime = Ns.now(), l -= Math.floor(_e40 / o(r));

              var _t24 = n.mapCanvasToCell(r.position);

              r.i = _t24.i, r.j = _t24.j, s(_f, _p);

              var _a8 = n.mapCellToCanvas(r.target);

              (!Ns.isEmpty(r.newTarget) || r.position.x === _a8.x && r.position.y === _a8.y) && i(r);
            }
          }

          return !Ns.isEmpty(r.newTarget) && Ns.isEmpty(r.movementStartTime) && (r.target = r.newTarget, r.onTargetReached = r.newOnTargetReached, r.newTarget = void 0, r.newOnTargetReached = void 0, r.movementStartTime = Ns.now(), c = c || e(t, n, r, a, s, l)), c;
        }, e.addDirectionToPath = function (e, t, n) {
          void 0 === e.path && (e.path = []), e.path[e.path.length - 1] !== t && e.path.push(t), !Ns.isEmpty(n) && e.path.length > n && e.path.shift();
        }, e.render = function (e, t, n, i, o) {
          var a,
              s = r(t);
          if (void 0 !== s) if (Ns.isEmpty(s.charaset) ? Ns.isEmpty(s.gid) : a = nl.loadImageFromCache(s.charaset, Cs.CHAR), void 0 !== t.position) {
            if (i || (n.save(), n.strokeStyle = Rs.Color.GREEN, n.lineWidth = 2, n.strokeRect(t.position.x, t.position.y, e.cellW, e.cellH)), void 0 !== a) {
              var _r11 = Math.floor(a.width / 4),
                  _l5 = Math.floor(a.height / 4),
                  _c3 = _r11,
                  _d2 = _l5;

              i || (_l5 > _r11 ? (_c3 = Math.floor(_r11 * e.cellH / _l5), _d2 = e.cellH) : (_d2 = Math.floor(_l5 * e.cellW / _r11), _c3 = e.cellW));

              var _u2,
                  _f2 = 0;

              if (_u2 = Ns.isEmpty(s.frequencyVal) ? Rs.MEDIUM_FREQUENCY : s.frequencyVal, Ns.isEmpty(t.target)) {
                if (1 === s.rotation || 2 === s.rotation) {
                  Ns.isEmpty(s.animationStartTime) && (s.animationStartTime = Ns.now());

                  var _e41 = Ns.now() - s.animationStartTime;

                  _u2 /= 4;

                  var _t25 = Math.floor(_e41 * _u2 % 4);

                  2 === s.rotation && (3 === _t25 ? _t25 = 1 : 1 === _t25 && (_t25 = 3)), s.direction = _t25;
                } else s.animationStartTime = void 0;
              } else {
                Ns.isEmpty(s.animationStartTime) && (s.animationStartTime = Ns.now());

                var _e42 = Ns.now() - s.animationStartTime;

                switch (Math.floor(_e42 * _u2 % 4)) {
                  case 1:
                    _f2 = _r11;
                    break;

                  case 2:
                    _f2 = 2 * _r11;
                    break;

                  case 3:
                    _f2 = 3 * _r11;
                }
              }
              var _p2 = 0;

              switch (s.direction) {
                case 3:
                  _p2 = _l5;
                  break;

                case 1:
                  _p2 = 2 * _l5;
                  break;

                case 0:
                  _p2 = 3 * _l5;
              }

              var _g = t.position.x + Math.floor((e.cellW - _c3) / 2),
                  _h = t.position.y + Math.floor(-_d2 + e.cellH);

              n.save(), Ns.isEmpty(s.opacity) || 100 === s.opacity || (n.globalAlpha = s.opacity / 100), void 0 !== o && o.i === t.i && o.j === t.j && (n.shadowColor = Rs.Color.YELLOW, n.shadowBlur = 8), n.drawImage(a, _f2, _p2, _r11, _l5, _g, _h, _c3, _d2), n.restore();
            }
          } else console.error("Event position undefined: " + t);
        }, e.isVisible = function (e, t, n, i, o, a, s, l) {
          return e.i === a && e.j === s && !!Ps.isVisible(r(e), l) && e.i >= i && e.i <= o && e.j >= t && e.j <= n;
        }, e.saveMem = function (e, t, n) {
          Ns.isEmpty(e.memory) && (e.memory = {}), e.memory[t] = n;
        }, e.loadMem = function (e, t) {
          if (!Ns.isEmpty(e.memory)) return e.memory[t];
        }, e.deleteMem = function (e, t) {
          Ns.isEmpty(e.memory) || delete e.memory[t];
        }, e.initTransientData = function (t, n, o) {
          if (Ps.initTransientData(n, e.getState(o)), void 0 !== o) return i(o), o.position = {
            x: o.i * n.cellW,
            y: o.j * n.cellH
          }, o;
        }, e.getState = r;
      }(Gs || (Gs = {}));

      var Js = /*#__PURE__*/function () {
        function Js(e, t, n) {
          _classCallCheck(this, Js);

          this.event = e, this.hero = t, this.scene = n;
        }

        _createClass(Js, [{
          key: "getConfig",
          value: function getConfig() {
            return void 0 !== this.scene.save && void 0 !== this.scene.save.config ? this.scene.save.config : Ls.getConfig();
          }
        }, {
          key: "showSimpleDialog",
          value: function showSimpleDialog(e, t) {
            var n = this.getConfig();
            return $s.showSimpleDialog(this.scene, this.hero, this.event.name, e, n, t), !0;
          }
        }, {
          key: "showComplexDialog",
          value: function showComplexDialog(e, t) {
            var n = this.getConfig();
            return $s.showComplexDialog(this.scene, this.hero, this.event.name, e, n, t), !0;
          }
        }, {
          key: "moveToTarget",
          value: function moveToTarget(e, t) {
            return Gs.startMovement(this.event, e.i, e.j, t), !0;
          }
        }, {
          key: "stepToTarget",
          value: function stepToTarget(e, t) {
            var n = Ds.getDirection(e, this.event);
            return this.stepToDirection(n, t);
          }
        }, {
          key: "stepToDirection",
          value: function stepToDirection(e, t) {
            var n = Ds.moveToDirection(this.event, e);
            return this.moveToTarget(n, t);
          }
        }, {
          key: "stepFromTarget",
          value: function stepFromTarget(e, t) {
            var n = Ds.getDirection(e, this.event);
            return n = Ds.getOpposedDirections(n), this.stepToDirection(n, t);
          }
        }, {
          key: "wait",
          value: function wait(e) {
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;

            var n = function n(e) {
              var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
              return new Promise(e <= 0 ? function (e, t) {
                e(!0);
              } : t ? function (t, i) {
                n(e - 100, !0).then(function () {
                  setTimeout(function () {
                    console.log("TIMER: " + e), t(!0);
                  }, 97);
                });
              } : function (t, n) {
                setTimeout(function () {
                  t(!0);
                }, e);
              });
            };

            return n(e, t);
          }
        }, {
          key: "saveMem",
          value: function saveMem(e, t) {
            Gs.saveMem(this.event, e, t);
          }
        }, {
          key: "loadMem",
          value: function loadMem(e) {
            return Gs.loadMem(this.event, e);
          }
        }, {
          key: "incrementStateVar",
          value: function incrementStateVar() {
            var e = this.loadMem(Js.STATE_VAR),
                t = 0;
            return void 0 !== e && (t = Number.parseInt(e), Number.isNaN(t) && (t = 0)), t++, this.saveMem(Js.STATE_VAR, t + ""), t;
          }
        }, {
          key: "setStateVar",
          value: function setStateVar(e) {
            this.saveMem(Js.STATE_VAR, e + "");
          }
        }, {
          key: "goToMap",
          value: function goToMap(e, t) {
            var n = this.scene;
            Ws.loadMapSave(n, e, t, function () {
              n.moveFocusToTarget(t), Gs.stopMovement(n.hero);
            });
          }
        }, {
          key: "changeSkin",
          value: function changeSkin(e) {
            this.scene.save.config.skin = e;
          }
        }]);

        return Js;
      }();

      Js.tooltip = "(no description provided)", Js.STATE_VAR = "state", function (e) {
        function t(e, t) {
          var n = e.memory[Js.STATE_VAR],
              i = Number.parseInt(n);
          return !Number.isNaN(i) && i === t;
        }

        e.always = function (e) {
          return !0;
        }, e.isStateVar0 = function (e) {
          return t(e, 0);
        }, e.isStateVar1 = function (e) {
          return t(e, 1);
        }, e.isStateVar2 = function (e) {
          return t(e, 2);
        }, e.isStateVar3 = function (e) {
          return t(e, 3);
        }, e.isStateVar4 = function (e) {
          return t(e, 4);
        }, e.isStateVar5 = function (e) {
          return t(e, 5);
        }, e.isStateVar6 = function (e) {
          return t(e, 6);
        }, e.isStateVar7 = function (e) {
          return t(e, 7);
        }, e.isStateVar8 = function (e) {
          return t(e, 8);
        }, e.isStateVar9 = function (e) {
          return t(e, 9);
        };
      }(Vs || (Vs = {}));
      var Qs = "msg",
          Xs = "dlg";

      var Zs = /*#__PURE__*/function (_Js) {
        _inherits(Zs, _Js);

        var _super2 = _createSuper(Zs);

        function Zs(e, t, n) {
          _classCallCheck(this, Zs);

          return _super2.call(this, e, t, n);
        }

        _createClass(Zs, [{
          key: "speak",
          value: function speak() {
            var e = this.loadMem(Qs + (this.event.currentState + 1));
            Ns.isEmpty(e) && (e = this.loadMem(Qs)), this.showSimpleDialog(e, Us);
          }
        }, {
          key: "dialog",
          value: function dialog() {
            var e = this.event.states[this.event.currentState];
            void 0 !== e.dialog && this.showComplexDialog(e.dialog, Us);
          }
        }]);

        return Zs;
      }(Js);

      Zs.tooltip = "Basic script with simple actions, mainly for generic NPCs";

      var el = /*#__PURE__*/function (_Js2) {
        _inherits(el, _Js2);

        var _super3 = _createSuper(el);

        function el() {
          _classCallCheck(this, el);

          return _super3.apply(this, arguments);
        }

        _createClass(el, [{
          key: "forest",
          value: function forest() {
            this.goToMap("1", {
              i: 15,
              j: 1
            });
          }
        }, {
          key: "farm",
          value: function farm() {
            this.goToMap("0", {
              i: 15,
              j: 17
            }), this.hero.movementDirection = 0;
          }
        }]);

        return el;
      }(Js);

      el.tooltip = "Provide transportation from one map to another";

      var tl = /*#__PURE__*/function (_Js3) {
        _inherits(tl, _Js3);

        var _super4 = _createSuper(tl);

        function tl() {
          _classCallCheck(this, tl);

          return _super4.apply(this, arguments);
        }

        _createClass(tl, [{
          key: "testAction",
          value: function testAction() {
            return this.showSimpleDialog("2", Us), !0;
          }
        }, {
          key: "giantTest",
          value: function giantTest() {
            this.showSimpleDialog("4", Us);
            var e = this;
            return this.wait(1e3).then(function () {
              e.stepFromTarget(e.hero);
            }), this.incrementStateVar(), !0;
          }
        }, {
          key: "giantTest2",
          value: function giantTest2() {
            this.showSimpleDialog("5", Us);
            var e = this;
            return this.wait(1e3).then(function () {
              e.stepFromTarget(e.hero);
            }), this.incrementStateVar(), !0;
          }
        }, {
          key: "giantTest3",
          value: function giantTest3() {
            this.showSimpleDialog("6", Us);
            var e = this;
            return this.moveToTarget({
              i: 0,
              j: 0
            }, function () {
              e.setStateVar(0);
            }), !0;
          }
        }, {
          key: "move3ToRight",
          value: function move3ToRight() {
            return this.moveToTarget({
              i: this.event.i + 3,
              j: this.event.j
            }), !0;
          }
        }]);

        return tl;
      }(Js);

      var nl;

      function il(e) {
        var t = Ls.DEFAULT_ID;

        var _iterator29 = _createForOfIteratorHelper(e),
            _step29;

        try {
          for (_iterator29.s(); !(_step29 = _iterator29.n()).done;) {
            var _n18 = _step29.value;
            _n18 > t && (t = _n18);
          }
        } catch (err) {
          _iterator29.e(err);
        } finally {
          _iterator29.f();
        }

        return t + 1;
      }

      function ol(e) {
        if (void 0 !== e.script) {
          gs.set(e, "actions", []);

          var _iterator30 = _createForOfIteratorHelper(nl.listScriptActions(e.script)),
              _step30;

          try {
            for (_iterator30.s(); !(_step30 = _iterator30.n()).done;) {
              var _t26 = _step30.value;
              e.actions.push(_t26);
            }
          } catch (err) {
            _iterator30.e(err);
          } finally {
            _iterator30.f();
          }
        }
      }

      tl.tooltip = "Script for tests", function (e) {
        var t = base_path + "data/",
            n = base_path + "assets/",
            o = base_path + "assetlist/",
            r = base_path + "edit/";
        var a = new Map();
        var s,
            l = new Map(),
            c = new Map();

        function d(e, t, n) {
          f(Rs.RequestType.GET, void 0, e, t, n);
        }

        function u(e, t, n) {
          f(Rs.RequestType.POST, t, e, n);
        }

        function f(e, t, n, i, o) {
          var r = new XMLHttpRequest();
          r.onload = function (e) {
            i(this.responseText);
          }, r.onerror = function (e) {
            console.error("Error for request to: " + n), console.error(e), i();
          }, r.ontimeout = function () {
            console.error("Timeout for request to: " + n), i();
          }, r.open(e, n, !0);

          try {
            void 0 !== o && r.setRequestHeader("lang", o), Ns.isEmpty(t) || e !== Rs.RequestType.POST ? r.send() : r.send(t);
          } catch (e) {
            "NetworkError" === e.name ? console.error("If you are working locally on Chrome, please launch it with option --allow-file-access-from-files") : (console.error(e), console.trace()), i();
          }
        }

        function p(e, i, o, r) {
          Ns.isEmpty(e) && (console.error("Trying to load empty file!"), console.trace());

          var s = function (e, i) {
            var o;

            switch (i) {
              case Cs.CHAR:
              case Cs.FACE:
              case Cs.SKIN:
              case Cs.PICTURE:
              case Cs.TILE:
                o = n;
                break;

              case Cs.MAP:
              case Cs.SAVE:
              case Cs.STRING:
              case Cs.DIALOG:
              case Cs.GENERIC_MESSAGE:
              case Cs.TILESET:
                o = t;
                break;

              default:
                console.error("Unexpected resource type"), console.trace();
            }

            return o + i + "/" + e;
          }(e, i);

          if (void 0 === s) return console.error("Error while loading file: " + e + "/" + i), void o();

          switch (i) {
            case Cs.CHAR:
            case Cs.FACE:
            case Cs.SKIN:
            case Cs.TILE:
            case Cs.PICTURE:
              var _t27 = new Image();

              _t27.onload = function () {
                a.set(i + "@" + e, _t27), o(_t27);
              }, _t27.src = s;
              break;

            case Cs.MAP:
            case Cs.SAVE:
            case Cs.STRING:
            case Cs.DIALOG:
            case Cs.GENERIC_MESSAGE:
            case Cs.TILESET:
              d(s, o, r);
              break;

            default:
              console.error("Unexpected resource type"), console.trace(), o(void 0);
          }
        }

        function g(e, t) {
          var n = a.get(t + "@" + e);
          return Ns.isEmpty(n) && p(e, t, function (n) {
            void 0 === n || "string" == typeof n ? console.error("Error while reading image: " + e) : a.set(t + "@" + e, n);
          }), n;
        }

        e.loadProperties = function (e) {
          var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "l4w";
          l.has(n) ? e(l.get(n)) : d(t + Cs.CONFIGURATION + "/" + n + ".properties", function (t) {
            var i;
            void 0 !== t ? (i = function (e) {
              var t = new Map(),
                  n = e.split("\n");

              for (var i = 0; i < n.length; i++) {
                var _e43 = n[i].trim();

                if ("" !== _e43 && 0 !== _e43.indexOf("#")) {
                  var _n19 = _e43.split("="),
                      _o15 = +_n19[1];

                  isNaN(_o15) ? t.has(_n19[1]) ? t.set(_n19[0], t.get(_n19[1])) : console.error("Error parsing properties file at line " + i + ": " + _o15) : t.set(_n19[0], _o15);
                }
              }

              return t;
            }(t), l.set(n, i)) : i = new Map(), e(i);
          });
        }, e.sendGETRequest = d, e.sendPOSTRequest = u, e.load = p, e.loadImageFromCache = g, e.loadDefaultImage = function (e) {
          return g("404.png", e);
        }, e.save = function (e, t, n, i) {
          var o = function (e, t) {
            return r + t + "/" + e;
          }(e, n);

          u(o, t, function (e) {
            void 0 !== e ? n === Cs.STRING || n === Cs.DIALOG || n === Cs.GENERIC_MESSAGE ? i(e, !0) : i(void 0, !0) : (console.error("Empty response for: " + o), i(void 0, !1));
          });
        }, e.listResources = function (e, t) {
          d(o + e, function (e) {
            if (void 0 !== e) {
              var _n20 = JSON.parse(e);

              if (void 0 !== _n20) return void t(_n20);
            }

            console.error("Empty response from " + o), t([]);
          });
        }, e.listScriptClasses = function () {
          if (void 0 !== s) return s;
          var e = Object.keys(i).filter(function (e) {
            try {
              return i[e].prototype instanceof Js;
            } catch (e) {
              return !1;
            }
          }),
              t = new Map();

          var _iterator31 = _createForOfIteratorHelper(e),
              _step31;

          try {
            for (_iterator31.s(); !(_step31 = _iterator31.n()).done;) {
              var _n21 = _step31.value;
              t.set(_n21, i[_n21].tooltip);
            }
          } catch (err) {
            _iterator31.e(err);
          } finally {
            _iterator31.f();
          }

          return s = t, t;
        }, e.listScriptActions = function (e) {
          if (c.has(e)) return c.get(e);
          var t = new i[e](void 0, void 0, void 0),
              n = Object.getOwnPropertyNames(Object.getPrototypeOf(t)).filter(function (e) {
            try {
              return "constructor" !== e && !Ns.isEmpty(e) && "function" == typeof t[e];
            } catch (e) {
              return !1;
            }
          });
          return c.set(e, n), n;
        }, e.listEventStateConditions = function () {
          return Object.keys(Vs);
        };
      }(nl || (nl = {}));
      var rl = gs.extend({
        name: "dialog-editor",
        props: {
          node: {
            type: Object,
            required: !0
          },
          dialog: {
            type: Object,
            required: !0
          },
          disconnectedNodes: {
            type: Array,
            required: !0
          },
          nodeIds: {
            type: Array,
            required: !0
          },
          edgeIds: {
            type: Array,
            required: !0
          },
          edgeConditions: {
            type: Array,
            "default": function _default() {
              return [];
            }
          },
          edgeScripts: {
            type: Map,
            "default": function _default() {
              return new Map();
            }
          },
          edgeActions: {
            type: Array,
            "default": function _default() {
              return [];
            }
          },
          faces: {
            type: Array,
            "default": function _default() {
              return [];
            }
          }
        },
        mounted: function mounted() {
          var _iterator32 = _createForOfIteratorHelper(nl.listEventStateConditions()),
              _step32;

          try {
            for (_iterator32.s(); !(_step32 = _iterator32.n()).done;) {
              var _e45 = _step32.value;
              this.edgeConditions.push(_e45);
            }
          } catch (err) {
            _iterator32.e(err);
          } finally {
            _iterator32.f();
          }

          var _iterator33 = _createForOfIteratorHelper(nl.listScriptClasses()),
              _step33;

          try {
            for (_iterator33.s(); !(_step33 = _iterator33.n()).done;) {
              var _e46 = _step33.value;
              this.edgeScripts.set(_e46[0], _e46[1]);
            }
          } catch (err) {
            _iterator33.e(err);
          } finally {
            _iterator33.f();
          }

          if (void 0 !== this.node.edges) {
            var _iterator34 = _createForOfIteratorHelper(this.node.edges),
                _step34;

            try {
              for (_iterator34.s(); !(_step34 = _iterator34.n()).done;) {
                var _e44 = _step34.value;
                ol(_e44);
              }
            } catch (err) {
              _iterator34.e(err);
            } finally {
              _iterator34.f();
            }
          }

          var e = this;
          nl.listResources(Cs.FACE, function (t) {
            if (void 0 !== t) {
              var _iterator35 = _createForOfIteratorHelper(t),
                  _step35;

              try {
                for (_iterator35.s(); !(_step35 = _iterator35.n()).done;) {
                  var _n22 = _step35.value;
                  e.faces.push(_n22);
                }
              } catch (err) {
                _iterator35.e(err);
              } finally {
                _iterator35.f();
              }
            }
          });
        },
        updated: function updated() {
          var e = this.$refs.edges;

          if (void 0 !== e && void 0 !== e[0].options && (e[0].options[0].selected = !0), void 0 !== this.$refs.nodes && void 0 !== e) {
            var _iterator36 = _createForOfIteratorHelper(e),
                _step36;

            try {
              for (_iterator36.s(); !(_step36 = _iterator36.n()).done;) {
                var _t28 = _step36.value;
                void 0 !== _t28.options && (_t28.options[0].selected = !0);
              }
            } catch (err) {
              _iterator36.e(err);
            } finally {
              _iterator36.f();
            }
          }

          void 0 !== this.node && (Ns.isEmpty(this.node.edges) ? null != this.$refs.dialogNodeMessage && this.$refs.dialogNodeMessage.focus() : void 0 === this.node.edges[this.node.edges.length - 1].message && this.$refs.dialogEdgeMessage[this.node.edges.length - 1].focus());
        },
        methods: {
          addEdge: function addEdge() {
            void 0 === this.node.edgeIds && gs.set(this.node, "edgeIds", []), void 0 === this.node.edges && gs.set(this.node, "edges", []);
            var e = il(this.edgeIds);
            this.node.edgeIds.push(e), this.node.edges.push(Ls.getDialogEdge(e)), this.edgeIds.push(e);
          },
          deleteEdge: function deleteEdge(e) {
            this.node.edgeIds.splice(this.node.edgeIds.indexOf(e.id), 1), this.node.edges.splice(this.node.edges.indexOf(e), 1);
          },
          addNode: function addNode(e) {
            var t = il(this.nodeIds);
            gs.set(e, "nodeId", t), gs.set(e, "node", Ls.getDialogNode(t)), this.nodeIds.push(t), _l.loadDialogEditor(t);
          },
          deleteNode: function deleteNode(e) {
            this.disconnectedNodes.push(e.node), gs.set(e, "nodeId", void 0), gs.set(e, "node", void 0);
          },
          onEdgeChange: function onEdgeChange(e) {
            var t = parseInt(e.target.selectedOptions.item(0).value);
            if (void 0 === this.node.edgeIds) gs.set(this.node, "edgeIds", []);else if (this.node.edgeIds.includes(t)) return;
            void 0 === this.node.edges && gs.set(this.node, "edges", []);
            var n = $s.search(this.dialog, t, !0);
            void 0 !== n && (this.node.edgeIds.push(t), this.node.edges.push(n));
          },
          onNodeChange: function onNodeChange(e, t) {
            var n = !0,
                i = parseInt(e.target.selectedOptions.item(0).value),
                o = $s.search(this.dialog, i, !1);

            if (void 0 === o) {
              var _iterator37 = _createForOfIteratorHelper(this.disconnectedNodes),
                  _step37;

              try {
                for (_iterator37.s(); !(_step37 = _iterator37.n()).done;) {
                  var _e47 = _step37.value;
                  _e47.id === i && (o = _e47, n = !1);
                }
              } catch (err) {
                _iterator37.e(err);
              } finally {
                _iterator37.f();
              }
            }

            void 0 !== o && (gs.set(t, "nodeReferenced", n), gs.set(t, "nodeId", i), gs.set(t, "node", o));
          },
          onScriptChange: function onScriptChange(e, t) {
            ol(t);
          },
          onFaceChange: function onFaceChange(e, t) {
            void 0 !== t.name || Ns.isEmpty(t.face) || (t.name = t.face.replace(".png", "").replace(".jpg", ""));
          }
        }
      });
      n(40);
      var al = ys(rl, Ss, [], !1, null, "73ccf623", null);
      al.options.__file = "src/client/components/DialogEditor.vue";
      var sl = al.exports;

      var ll = function ll() {
        var e = this,
            t = e.$createElement,
            n = e._self._c || t;
        return n("div", {
          staticClass: "root"
        }, [n("script", {
          attrs: {
            type: "application/javascript",
            async: "",
            defer: "",
            crossorigin: "anonymous",
            src: "https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v6.0&appId=1885551381575204"
          }
        }), e._v(" "), n("script", {
          attrs: {
            type: "application/javascript",
            async: "",
            defer: "",
            src: "https://apis.google.com/js/platform.js?onload=gAsyncInit"
          }
        }), e._v(" "), n("div", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: !e.loginStatus,
            expression: "!loginStatus"
          }]
        }, [n("div", {
          staticClass: "g-signin2",
          attrs: {
            "data-onsuccess": "gLoginCallback",
            "data-theme": "dark"
          }
        }), e._v(" "), n("div", {
          staticClass: "fb-login-button",
          attrs: {
            "data-size": "large",
            "data-button-type": "login_with",
            "data-layout": "default",
            "data-auto-logout-link": "false",
            "data-use-continue-as": "false",
            "data-width": "",
            "data-scope": "email"
          }
        }), e._v(" "), n("br"), e._v(" "), e._t("unlogged")], 2), e._v(" "), e.loginStatus ? n("div", [n("img", {
          staticClass: "statusIcon loggedIcon",
          attrs: {
            src: "/style/ui/logged.png",
            alt: "Logged icon",
            title: "You are currently logged in!"
          }
        }), e._v(" "), n("br"), e._v(" "), e.flagLoggingOut ? n("div", [n("img", {
          staticClass: "loading",
          attrs: {
            src: "/style/ui/spinner.gif",
            alt: "logging out..."
          }
        })]) : n("div", [n("button", {
          on: {
            click: e.logout
          }
        }, [e._v("Logout")]), e._v(" "), n("br"), n("br"), e._v(" "), e._t("logged")], 2)]) : e._e()]);
      };

      ll._withStripped = !0;
      var cl = gs.extend({
        name: "login",
        props: {
          showIcons: {
            type: Boolean,
            required: !1,
            "default": !0
          }
        },
        data: function data() {
          return {
            loginStatus: !1,
            loginService: void 0,
            fbToken: void 0,
            flagLoggingOut: !1
          };
        },
        created: function created() {
          var e = document.createElement("meta");
          e.name = "google-signin-scope", e.content = "profile email", document.head.appendChild(e), e = document.createElement("meta"), e.name = "google-signin-client_id", e.content = "106250700124-f3tm8cc2l6raccir6e5fi9osccuvhaj0.apps.googleusercontent.com", document.head.appendChild(e);
          var t = this;
          window.fbAsyncInit = function () {
            FB.init({
              appId: "1885551381575204",
              autoLogAppEvents: !1,
              cookie: !0,
              xfbml: !1,
              version: "v6.0"
            }), FB.Event.subscribe("auth.statusChange", function (e) {
              t.fbLoginStatusChangeCallback(e);
            }), FB.getLoginStatus(function (e) {
              t.fbLoginStatusChangeCallback(e);
            });
          }, window.gAsyncInit = function () {
            gapi.load("auth2", function () {
              gapi.auth2.getAuthInstance().isSignedIn.get() && (gs.set(t, "loginStatus", !0), gs.set(t, "loginService", "google"));
            });
          }, window.gLoginCallback = this.gLoginCallback;
        },
        methods: {
          logoutCallback: function logoutCallback() {
            gs.set(this, "loginStatus", !1), gs.set(this, "loginService", void 0), gs.set(this, "flagLoggingOut", !1);
          },
          logout: function logout() {
            if (this.loginStatus) {
              switch (this.loginService) {
                case "facebook":
                  if (void 0 !== this.fbToken) {
                    gs.set(this, "flagLoggingOut", !0);

                    var _e48 = this;

                    FB.api("/me/permissions", "delete", {
                      access_token: _e48.fbToken
                    }, function (t) {
                      !0 !== t.success && console.error("Facebook permission revoking failed: ", t), FB.logout(function (t) {
                        _e48.logoutCallback();
                      });
                    }), this.fbToken = void 0;
                  }

                  break;

                case "google":
                  gapi.auth2.getAuthInstance().signOut().then(this.logoutCallback());
                  break;

                default:
                  console.error("Unexpected loginService: " + this.loginService);
              }

              nl.sendGETRequest("logout", function (e) {});
            } else console.error("Cannot logout, user is not currently logged in");
          },
          fbLoginStatusChangeCallback: function fbLoginStatusChangeCallback(e) {
            if ("connected" === e.status) {
              this.fbToken = e.authResponse.accessToken;
              var _t29 = {
                service: "facebook",
                token: e.authResponse.accessToken,
                userId: e.authResponse.userID
              };
              this.doLogin(_t29);
            }
          },
          gLoginCallback: function gLoginCallback(e) {
            var t = {
              service: "google",
              token: e.getAuthResponse().id_token
            };
            this.doLogin(t);
          },
          doLogin: function doLogin(e) {
            var t = this;
            nl.sendPOSTRequest("/auth", JSON.stringify(e), function (n) {
              if (void 0 !== n) try {
                if (JSON.parse(n).result) return gs.set(t, "loginStatus", !0), void gs.set(t, "loginService", e.service);
              } catch (e) {
                console.error(n);
              }
              gs.set(t, "loginStatus", !1), gs.set(t, "loginService", void 0), console.error("Logged with " + e.service + " failed");
            });
          }
        }
      });
      n(564);
      var dl = ys(cl, ll, [], !1, null, "08ab550b", null);
      dl.options.__file = "src/client/components/Login.vue";
      var ul = dl.exports;

      var fl = function fl() {
        var e = this,
            t = e.$createElement,
            n = e._self._c || t;
        return n("div", {
          staticStyle: {
            border: "1px solid black",
            position: "relative"
          },
          attrs: {
            id: "eventPanel"
          }
        }, [e._m(0), e._v(" "), n("div", {
          staticStyle: {
            "font-style": "italic"
          },
          attrs: {
            id: "scriptTooltip"
          }
        }), e._v(" "), n("br"), e._v(" "), e._m(1), e._v(" "), n("event-state-editor"), e._v(" "), n("table", {
          staticStyle: {
            width: "100%"
          }
        }), e._v("\n\t\tMemory"), n("br"), e._v(" "), n("input", {
          staticStyle: {
            width: "5em"
          },
          attrs: {
            id: "key",
            type: "text",
            placeholder: "Key",
            title: 'Standard keys:\nmsg1: message displayed by "speak" Action (the number represent the state number)\nstate: variable used by Conditions "isStateVar0", "isStateVar1", ...\n'
          }
        }), e._v(" "), n("input", {
          staticStyle: {
            width: "8em"
          },
          attrs: {
            id: "val",
            type: "text",
            placeholder: "Value"
          }
        }), e._v(" "), n("button", {
          attrs: {
            onclick: "L4W_mapper.MapperPage.addMemory();"
          }
        }, [e._v("+")]), e._v(" "), n("table", {
          staticStyle: {
            border: "1px solid black",
            position: "relative",
            "margin-left": "10px"
          },
          attrs: {
            id: "memory"
          }
        }), e._v(" "), n("br"), e._v(" "), n("button", {
          attrs: {
            id: "saveEvent",
            onclick: "L4W_mapper.MapperPage.saveEvent()",
            title: "This will confirm the event details"
          }
        }, [e._v("Save event")]), e._v(" "), n("button", {
          staticStyle: {
            color: "red"
          },
          attrs: {
            id: "deleteEvent",
            onclick: "L4W_mapper.MapperPage.deleteEvent()",
            title: "This will delete the currently selected event"
          }
        }, [e._v("Delete event ☠")])], 1);
      };

      fl._withStripped = !0;

      var pl = function pl() {
        var e = this;
        e.$createElement;
        return e._self._c, e._m(0);
      };

      pl._withStripped = !0;
      var gl = ys(gs.extend({
        name: "event-state-editor",
        props: {}
      }), pl, [function () {
        var e = this,
            t = e.$createElement,
            n = e._self._c || t;
        return n("table", {
          staticStyle: {
            border: "1px solid black",
            position: "relative",
            "margin-left": "10px",
            "background-color": "#ffffd0",
            width: "90%"
          },
          attrs: {
            id: "eventState"
          }
        }, [n("tbody", {
          attrs: {
            onchange: "L4W_mapper.MapperPage.eventModified()"
          }
        }, [n("tr", [n("td", [e._v("Condition")]), e._v(" "), n("td", [n("select", {
          attrs: {
            id: "condition"
          }
        })])]), e._v(" "), n("tr", [n("td", [e._v("Trigger")]), e._v(" "), n("td", [n("select", {
          attrs: {
            id: "trigger"
          }
        })])]), e._v(" "), n("tr", [n("td", [e._v("Action")]), e._v(" "), n("td", [n("select", {
          staticStyle: {
            "background-color": "#d0ffd0"
          },
          attrs: {
            id: "action"
          }
        })])]), e._v(" "), n("tr", [n("td", [e._v("Dialog")]), e._v(" "), n("td", [n("input", {
          attrs: {
            id: "toggleDialogEditor",
            type: "checkbox",
            onclick: "L4W_mapper.MapperPage.toggleDialogEditor()"
          }
        })])]), e._v(" "), n("tr", [n("td", [e._v(" ")]), e._v(" "), n("td")]), e._v(" "), n("tr", [n("td", [e._v("Charaset")]), e._v(" "), n("td", [n("select", {
          attrs: {
            id: "charasets"
          }
        })])]), e._v(" "), n("tr", [n("td", [e._v("Visible")]), e._v(" "), n("td", [n("input", {
          attrs: {
            id: "visible",
            type: "checkbox",
            checked: ""
          }
        })])]), e._v(" "), n("tr", [n("td", [e._v("Opacity")]), e._v(" "), n("td", [n("input", {
          staticStyle: {
            width: "3em"
          },
          attrs: {
            id: "opacity",
            type: "number",
            min: "0",
            max: "100",
            step: "1",
            value: "100"
          }
        })])]), e._v(" "), n("tr", [n("td", [e._v("Direction")]), e._v(" "), n("td", [n("select", {
          attrs: {
            id: "direction"
          }
        })])]), e._v(" "), n("tr", [n("td", [e._v("Speed")]), e._v(" "), n("td", [n("select", {
          attrs: {
            id: "speed"
          }
        })])]), e._v(" "), n("tr", [n("td", [e._v("Frequency")]), e._v(" "), n("td", [n("select", {
          attrs: {
            id: "frequency"
          }
        })])]), e._v(" "), n("tr", [n("td", [e._v("Rotation")]), e._v(" "), n("td", [n("select", {
          attrs: {
            id: "rotation"
          }
        })])]), e._v(" "), n("tr", [n("td", [e._v("On top")]), e._v(" "), n("td", [n("select", {
          attrs: {
            id: "ontop"
          }
        })])]), e._v(" "), n("tr", [n("td", [e._v("Blocking")]), e._v(" "), n("td", [n("input", {
          attrs: {
            id: "block",
            type: "checkbox",
            checked: ""
          }
        })])])]), e._v(" "), n("tfoot", [n("tr", [n("td"), e._v(" "), n("td", [n("button", {
          staticStyle: {
            color: "red"
          },
          attrs: {
            onclick: "L4W_mapper.MapperPage.deleteEventState()",
            title: "This will delete the currently selected state"
          }
        }, [e._v("Delete state ☠")])])])])]);
      }], !1, null, "3f31e932", null);
      gl.options.__file = "src/client/components/EventStateEditor.vue";
      var hl = gl.exports;
      var vl = ys(gs.extend({
        components: {
          EventStateEditor: hl
        },
        name: "event-editor",
        props: {}
      }), fl, [function () {
        var e = this,
            t = e.$createElement,
            n = e._self._c || t;
        return n("table", {
          staticStyle: {
            width: "100%"
          }
        }, [n("tr", [n("td", [e._v("Name")]), e._v(" "), n("td", [n("input", {
          attrs: {
            id: "name",
            type: "text",
            placeholder: "Event name",
            onchange: "L4W_mapper.MapperPage.eventModified();"
          }
        })])]), e._v(" "), n("tr", [n("td", [e._v("Position")]), e._v(" "), n("td", {
          attrs: {
            onchange: "L4W_mapper.MapperPage.changeEventPosition()"
          }
        }, [n("input", {
          staticStyle: {
            width: "3em"
          },
          attrs: {
            id: "eventi",
            type: "number",
            min: "0",
            max: "999",
            step: "1"
          }
        }), e._v(" "), n("input", {
          staticStyle: {
            width: "3em"
          },
          attrs: {
            id: "eventj",
            type: "number",
            min: "0",
            max: "999",
            step: "1"
          }
        })])]), e._v(" "), n("tr", [n("td", [e._v("Script")]), e._v(" "), n("td", [n("select", {
          staticStyle: {
            "background-color": "#d0ffd0"
          },
          attrs: {
            id: "script",
            onchange: "L4W_mapper.MapperPage.changeEventScript();"
          }
        })])])]);
      }, function () {
        var e = this,
            t = e.$createElement,
            n = e._self._c || t;
        return n("table", {
          staticStyle: {
            width: "100%"
          }
        }, [n("tr", [n("td", [e._v("State")]), e._v(" "), n("td", [n("input", {
          staticStyle: {
            "background-color": "#ffffd0"
          },
          attrs: {
            id: "state",
            type: "number",
            min: "1",
            max: "99",
            value: "1",
            onchange: "L4W_mapper.MapperPage.loadEventState();"
          }
        })]), e._v(" "), n("td", [e._v("of")]), e._v(" "), n("td", {
          attrs: {
            id: "tot"
          }
        }, [e._v("1")])])]);
      }], !1, null, "575aebc9", null);
      vl.options.__file = "src/client/components/EventEditor.vue";
      var ml = vl.exports;

      var yl, Al, bl, El, _l;

      !function (e) {
        e.check = function () {
          !function () {
            var e = document.createElement("canvas");
            if (!e.getContext || !e.getContext("2d")) console.error("HTML5 canvas is not supported");
          }();
        }, e.serviceWorker = function () {
          return void 0 === navigator.serviceWorker ? (console.warn("Service Workers are not supported"), !1) : "localhost" !== location.hostname && "https" !== location.protocol || (console.warn("Service Workers won't work when using local self-signed certificates. This could be fixed by trusting them, or using browser flags."), !1);
        }, e.webWorker = function () {
          return void 0 !== window.Worker || (console.warn("Web Workers are not supported"), !1);
        }, e.webSpeech = function () {
          return void 0 !== window.SpeechSynthesisUtterance || (console.warn("Web Speech API are not supported"), !1);
        };
      }(yl || (yl = {}));

      var Cl = /*#__PURE__*/function (_Ys2) {
        _inherits(Cl, _Ys2);

        var _super5 = _createSuper(Cl);

        function Cl(e) {
          var _this2;

          _classCallCheck(this, Cl);

          _this2 = _super5.call(this, e), _this2.renderingConfiguration.showEditorGrid = !0, _this2.renderingConfiguration.enableSelection = !0, _this2.renderingConfiguration.enableAntialiasing = !1, _this2.requestedNewFrame = !0;
          return _this2;
        }

        _createClass(Cl, [{
          key: "mainGameLoop_pre",
          value: function mainGameLoop_pre() {
            if (!_get(_getPrototypeOf(Cl.prototype), "mainGameLoop_pre", this).call(this)) return !1;
            if (void 0 === this.pointer && !this.requestedNewFrame) return !1;
            var e = void 0 === this.oldDrawArea || this.requestedNewFrame;
            return this.requestedNewFrame && (this.requestedNewFrame = !1), this.newDrawArea = this.getRedrawArea(e), this.redrawArea = Ds.mergeRectangles(this.oldDrawArea, this.newDrawArea), this.grid.clear(this.context, this.redrawArea), !0;
          }
        }, {
          key: "mainGameLoop_post",
          value: function mainGameLoop_post() {
            _get(_getPrototypeOf(Cl.prototype), "mainGameLoop_post", this).call(this), this.oldDrawArea = this.newDrawArea;
          }
        }, {
          key: "render",
          value: function render(e, t) {
            _get(_getPrototypeOf(Cl.prototype), "render", this).call(this, e, t, !1);
          }
        }, {
          key: "getRedrawArea",
          value: function getRedrawArea(e, t) {
            var n;
            n = e ? void 0 : this.pointer;
            var i = this.grid.getBoundariesX(this.focus.x, this.getSceneWidth(), n, t),
                o = this.grid.getBoundariesY(this.focus.y, this.getSceneHeight(), n, t);
            return {
              x: i.min,
              y: o.min,
              h: o.max - o.min,
              w: i.max - i.min
            };
          }
        }, {
          key: "toggleEditorGrid",
          value: function toggleEditorGrid(e) {
            this.renderingConfiguration.showEditorGrid = null != e ? e : !this.renderingConfiguration.showEditorGrid, this.requestedNewFrame = !0;
          }
        }, {
          key: "renderPointer",
          value: function renderPointer() {
            void 0 !== this.pointer && (this.context.save(), this.context.globalAlpha = .4, this.context.fillStyle = Rs.Color.YELLOW, this.context.fillRect(this.pointer.i * this.grid.cellW, this.pointer.j * this.grid.cellH, this.grid.cellW, this.grid.cellH), this.context.restore());
          }
        }, {
          key: "select",
          value: function select(e, t) {
            void 0 !== e && void 0 !== t && (this.renderingConfiguration.selectCellStart = {
              i: e,
              j: t
            }, this.renderingConfiguration.selectCellEnd = void 0);
          }
        }, {
          key: "selectEnd",
          value: function selectEnd(e, t) {
            void 0 !== e && void 0 !== t && (this.renderingConfiguration.selectCellEnd = {
              i: e,
              j: t
            });
          }
        }, {
          key: "cleanSelection",
          value: function cleanSelection() {
            this.renderingConfiguration.selectCellStart = void 0, this.renderingConfiguration.selectCellEnd = void 0, this.requestedNewFrame = !0;
          }
        }, {
          key: "getSelectionArea",
          value: function getSelectionArea() {
            if (void 0 === this.renderingConfiguration.selectCellStart) return;
            var e,
                t,
                n = this.renderingConfiguration.selectCellStart.i,
                i = this.renderingConfiguration.selectCellStart.j;

            if (void 0 !== this.renderingConfiguration.selectCellEnd) {
              if (e = this.renderingConfiguration.selectCellEnd.i, t = this.renderingConfiguration.selectCellEnd.j, n > e) {
                var _t30 = n;
                n = e, e = _t30;
              }

              if (i > t) {
                var _e49 = i;
                i = t, t = _e49;
              }
            } else e = this.renderingConfiguration.selectCellStart.i, t = this.renderingConfiguration.selectCellStart.j;

            return {
              x: n,
              y: i,
              w: e - n,
              h: t - i
            };
          }
        }, {
          key: "renderDynamicElements",
          value: function renderDynamicElements(e, t, n, i, o, r, a) {}
        }]);

        return Cl;
      }(Ys);

      var wl = /*#__PURE__*/function (_Cl) {
        _inherits(wl, _Cl);

        var _super6 = _createSuper(wl);

        function wl() {
          _classCallCheck(this, wl);

          return _super6.apply(this, arguments);
        }

        _createClass(wl, [{
          key: "updateSize",
          value: function updateSize(e, t) {
            this.map.width = Math.floor(e / this.grid.cellW), this.map.height = Math.floor(t / this.grid.cellH), this.grid.updateSize(this.map.width, this.map.height), this.requestedNewFrame = !0;
          }
        }, {
          key: "getRedrawArea",
          value: function getRedrawArea(e) {
            var t = this.getSelectionArea();
            return _get(_getPrototypeOf(wl.prototype), "getRedrawArea", this).call(this, e, t);
          }
        }, {
          key: "select",
          value: function select(e, t) {
            _get(_getPrototypeOf(wl.prototype), "select", this).call(this, e, t), this.requestedNewFrame = !0;
          }
        }]);

        return wl;
      }(Cl);

      var Sl = /*#__PURE__*/function (_wl) {
        _inherits(Sl, _wl);

        var _super7 = _createSuper(Sl);

        function Sl(e, t) {
          var _this3;

          _classCallCheck(this, Sl);

          _this3 = _super7.call(this, e), _this3.map = Ls.getEmptyMap("tilePicker"), t(_assertThisInitialized(_this3));
          return _this3;
        }

        _createClass(Sl, [{
          key: "setMapper",
          value: function setMapper(e) {
            this.mapper = e;
          }
        }, {
          key: "select",
          value: function select(e, t) {
            Ns.isEmpty(this.mapper) || this.mapper.cleanSelection(), _get(_getPrototypeOf(Sl.prototype), "select", this).call(this, e, t);
          }
        }]);

        return Sl;
      }(wl);

      !function (e) {
        e[e.game = 0] = "game", e[e.mapper = 1] = "mapper", e[e.tilePicker = 2] = "tilePicker";
      }(Al || (Al = {}));

      var Il = /*#__PURE__*/function (_ref) {
        _inherits(Il, _ref);

        var _super8 = _createSuper(Il);

        function Il(e, t, n, i) {
          var _this4;

          _classCallCheck(this, Il);

          _this4 = _super8.call(this, e, t, n), _this4.overriddenProps = void 0 !== i ? i : new Map();
          return _this4;
        }

        _createClass(Il, [{
          key: "deferredInit",
          value: function deferredInit(e) {
            switch (Ns.isEmpty(this.overriddenProps) || (e = Ns.mergeMaps(this.overriddenProps, e)), _get(_getPrototypeOf(Il.prototype), "deferredInit", this).call(this, e), this.gridType) {
              case Al.mapper:
                this.canvasScales = [], this.canvasScales.push(e.get("canvasScaleD")), this.canvasScales.push(e.get("canvasScaleC")), this.canvasScales.push(e.get("canvasScaleB")), this.canvasScales.push(e.get("canvasScaleA"));
                var _t31 = this.canvasScales.length;
                this.rowsList = new Array(_t31), this.columnsList = new Array(_t31);

                var _n23 = _t31 - 1;

                for (var _e50 = 0; _e50 < _t31; _e50++) {
                  this.rowsList[_e50] = Math.floor(this.rows / this.canvasScales[_e50]), this.columnsList[_e50] = Math.floor(this.columns / this.canvasScales[_e50]);
                }

                this.selectScale(_n23);
                break;

              case Al.tilePicker:
                this.scaleX = 1, this.scaleY = 1;
                break;

              default:
                console.error("Unexpected gridType case: " + this.gridType);
            }
          }
        }, {
          key: "selectScale",
          value: function selectScale(e) {
            this.scaleX = this.canvasScales[e], this.scaleY = this.canvasScales[e];
          }
        }, {
          key: "updateSize",
          value: function updateSize(e, t) {
            this.rows = e, this.columns = t, this.updateSizingDerivates();
          }
        }, {
          key: "getBoundariesX",
          value: function getBoundariesX(e, t, n, i) {
            return void 0 !== n ? void 0 !== i ? {
              min: n.i,
              max: n.i + i.w
            } : {
              min: n.i,
              max: n.i
            } : _get(_getPrototypeOf(Il.prototype), "getBoundariesX", this).call(this, e, t);
          }
        }, {
          key: "getBoundariesY",
          value: function getBoundariesY(e, t, n, i) {
            return void 0 !== n ? void 0 !== i ? {
              min: n.j,
              max: n.j + i.h
            } : {
              min: n.j,
              max: n.j
            } : _get(_getPrototypeOf(Il.prototype), "getBoundariesY", this).call(this, e, t);
          }
        }, {
          key: "getVisibleRectangle",
          value: function getVisibleRectangle(e, t, n) {
            var i = this.checkBoundariesLimit(e.x, e.x + e.w, t, !0),
                o = this.checkBoundariesLimit(e.y, e.y + e.h, n, !0);
            return {
              x: i.min,
              y: o.min,
              w: i.max - i.min,
              h: o.max - o.min
            };
          }
        }]);

        return Il;
      }( /*#__PURE__*/function () {
        function _class(e, t, n) {
          _classCallCheck(this, _class);

          var i;
          this.canvas = e, this.currentTranslation = {
            x: 0,
            y: 0
          }, this.gridType = n, i = this, nl.loadProperties(function (e) {
            i.deferredInit(e), i.updateSizingDerivates(), i.refreshCanvasSize(), t(i);
          });
        }

        _createClass(_class, [{
          key: "deferredInit",
          value: function deferredInit(e) {
            this.cellH = e.get("cellHeight"), this.cellW = e.get("cellWidth"), this.rows = e.get(Al[this.gridType] + "Rows"), this.columns = e.get(Al[this.gridType] + "Columns");
          }
        }, {
          key: "updateSizingDerivates",
          value: function updateSizingDerivates() {
            this.baseH = this.cellH * this.rows, this.baseW = this.cellW * this.columns, this.halfRows = Math.floor(this.rows / 2), this.halfColumns = Math.floor(this.columns / 2);
          }
        }, {
          key: "refreshCanvasSize",
          value: function refreshCanvasSize() {
            this.canvas.width = Math.floor(this.baseW * this.scaleX), this.canvas.height = Math.floor(this.baseH * this.scaleY);
          }
        }, {
          key: "clear",
          value: function clear(e, t) {
            void 0 === t ? e.clearRect(this.currentTranslation.x, this.currentTranslation.y, this.baseW, this.baseH) : e.clearRect(this.currentTranslation.x + t.x * this.cellW, this.currentTranslation.y + t.y * this.cellH, (t.w + 1) * this.cellW, (t.h + 1) * this.cellH);
          }
        }, {
          key: "mapPositionToGrid",
          value: function mapPositionToGrid(e) {
            var t = this.canvas.getBoundingClientRect(),
                n = Math.floor((e.x - t.left) / this.scaleX + this.currentTranslation.x),
                i = Math.floor((e.y - t.top) / this.scaleY + this.currentTranslation.y);
            return {
              i: Math.floor((e.x - t.left) / (this.cellW * this.scaleX) + this.currentTranslation.x / this.cellW),
              j: Math.floor((e.y - t.top) / (this.cellH * this.scaleY) + this.currentTranslation.y / this.cellH),
              x: n,
              y: i
            };
          }
        }, {
          key: "mapCellToCanvas",
          value: function mapCellToCanvas(e) {
            return {
              x: e.i * this.cellW,
              y: e.j * this.cellH
            };
          }
        }, {
          key: "mapCanvasToCell",
          value: function mapCanvasToCell(e) {
            return {
              i: Math.floor(e.x / this.cellW),
              j: Math.floor(e.y / this.cellH)
            };
          }
        }, {
          key: "changeTranslation",
          value: function changeTranslation(e, t, n, i) {
            var o = e - this.halfColumns * this.cellW;
            if (o < 0) o = 0;else {
              var _e51 = (n - this.columns) * this.cellW;

              o > _e51 && (o = _e51);
            }
            var r = t - this.halfRows * this.cellH;
            if (r < 0) r = 0;else {
              var _e52 = (i - this.rows) * this.cellH;

              r > _e52 && (r = _e52);
            }
            return this.applyTranslate(o, r);
          }
        }, {
          key: "reappyTranslation",
          value: function reappyTranslation() {
            var e = this.currentTranslation.x,
                t = this.currentTranslation.y;
            this.currentTranslation.x = 0, this.currentTranslation.y = 0, this.applyTranslate(e, t);
          }
        }, {
          key: "applyTranslate",
          value: function applyTranslate(e, t) {
            return this.getContext().translate(this.currentTranslation.x - e, this.currentTranslation.y - t), this.currentTranslation = {
              x: e,
              y: t
            }, this.currentTranslation;
          }
        }, {
          key: "getCurrentTranslation",
          value: function getCurrentTranslation() {
            return this.currentTranslation;
          }
        }, {
          key: "resetTranslation",
          value: function resetTranslation() {
            this.getContext().translate(this.currentTranslation.x, this.currentTranslation.y), this.currentTranslation = {
              x: 0,
              y: 0
            };
          }
        }, {
          key: "getBoundariesX",
          value: function getBoundariesX(e, t) {
            var n = Math.floor(e / this.cellW),
                i = n - this.halfColumns - 1,
                o = n + this.halfColumns + 1;
            return this.checkBoundariesLimit(i, o, t);
          }
        }, {
          key: "getBoundariesY",
          value: function getBoundariesY(e, t) {
            var n = Math.floor(e / this.cellH),
                i = n - this.halfRows - 1,
                o = n + this.halfRows + 1;
            return this.checkBoundariesLimit(i, o, t);
          }
        }, {
          key: "checkBoundariesLimit",
          value: function checkBoundariesLimit(e, t, n, i) {
            return e < 0 && (void 0 !== i && i || (t -= e), e = 0), t >= n && (void 0 !== i && i || (e -= t - n + 1), t = n - 1), {
              min: e,
              max: t
            };
          }
        }, {
          key: "getContext",
          value: function getContext() {
            return this.canvas.getContext("2d");
          }
        }]);

        return _class;
      }());

      !function (e) {
        var t;
        e.start = function (e, n) {
          void 0 !== t ? n(t) : new Il(e, function (i) {
            new Sl(i, function (o) {
              t = o, function (e, n) {
                var i = new Map();
                ws.init(e, n, i, Us, Us, function (e, n, i, o, r) {
                  (Ns.isEmpty(r) || r === ws.MouseButtons.LEFT) && t.select(e, n);
                }, function (e, n, i) {
                  (Ns.isEmpty(i) || i === ws.MouseButtons.LEFT) && t.selectEnd(e, n);
                }, function (e, n, i) {
                  t.requestedNewFrame = !0, (Ns.isEmpty(i) || i === ws.MouseButtons.LEFT) && t.selectEnd(e, n), t.updatePointer(e, n);
                }, function (e, n) {
                  t.updatePointer(e, n);
                }, Us, Us, Us, function (e, n) {
                  t.cleanSelection();
                }, Us, Us);
              }(e, i), t.start(e), n(t);
            });
          }, Al.tilePicker);
        }, e.loadTile = function (t, n) {
          var i = document.getElementById("canvasTile"),
              o = i.getContext("2d"),
              r = document.getElementById("canvasSelector");
          o.clearRect(0, 0, i.width, i.height), nl.load(t, Cs.TILE, function (t) {
            var a = new Image();
            a.src = t.src, document.getElementById("tilePanel").style.height = a.naturalHeight + "", i.height = a.naturalHeight, i.width = a.naturalWidth, r.height = a.naturalHeight, r.width = a.naturalWidth, o.drawImage(t, 0, 0), e.start(r, n);
          });
        }, e.saveData = function (e) {
          var t = $("#mapPanel").jstree(!0).get_json("#", {
            flat: !1,
            no_state: !0,
            no_id: !1,
            no_children: !1,
            no_data: !1
          });
          nl.sendPOSTRequest("/edit/" + Cs.TREE + "/maps", JSON.stringify(t), function (t) {
            e(void 0 !== t, t);
          });
        }, e.setMapper = function (e) {
          t.setMapper(e);
        };
      }(bl || (bl = {}));

      var Tl = /*#__PURE__*/function (_Cl2) {
        _inherits(Tl, _Cl2);

        var _super9 = _createSuper(Tl);

        function Tl(e, t) {
          var _this5;

          _classCallCheck(this, Tl);

          _this5 = _super9.call(this, e), _this5.activeLayer = Rs.MapLayer.MID, document.getElementById(_l.BUTTON_ID_LAYER + _this5.activeLayer).disabled = !0, t(_assertThisInitialized(_this5));
          return _this5;
        }

        _createClass(Tl, [{
          key: "renderPointer",
          value: function renderPointer() {
            if (void 0 !== this.pointer) {
              var _e53 = this.getSelectionArea();

              void 0 === _e53 ? _get(_getPrototypeOf(Tl.prototype), "renderPointer", this).call(this) : (this.context.save(), this.context.globalAlpha = .4, this.context.fillStyle = Rs.Color.GREY, this.context.fillRect(this.pointer.i * this.grid.cellW, this.pointer.j * this.grid.cellH, (_e53.w + 1) * this.grid.cellW, (_e53.h + 1) * this.grid.cellH), this.context.restore());
            }
          }
        }, {
          key: "mainGameLoop_pre",
          value: function mainGameLoop_pre() {
            return !!_get(_getPrototypeOf(Tl.prototype), "mainGameLoop_pre", this).call(this);
          }
        }, {
          key: "getRedrawArea",
          value: function getRedrawArea(e) {
            var t;
            return void 0 !== this.tilePicker && (t = this.tilePicker.getSelectionArea()), _get(_getPrototypeOf(Tl.prototype), "getRedrawArea", this).call(this, e, t);
          }
        }, {
          key: "getSceneHeight",
          value: function getSceneHeight() {
            return this.map.height;
          }
        }, {
          key: "getSceneWidth",
          value: function getSceneWidth() {
            return this.map.width;
          }
        }, {
          key: "select",
          value: function select(e, t) {
            _get(_getPrototypeOf(Tl.prototype), "select", this).call(this, e, t);
          }
        }, {
          key: "apply",
          value: function apply(e, t) {
            var n = !1,
                i = this.tilePicker.getSelectionArea(),
                o = e + t * this.map.width;

            switch (Ns.isEmpty(this.map.layers[this.activeLayer].data) && (this.map.layers[this.activeLayer].data = []), this.editMode) {
              case Rs.EditMode.APPLY:
                if (void 0 === i) return !1;

                var _r12 = Math.floor(this.map.tileset.imageWidth / this.grid.cellW),
                    _a9 = i.x + i.y * _r12;

                for (var _t32 = 0; _t32 <= i.h; _t32++) {
                  for (var _s9 = 0; _s9 <= i.w; _s9++) {
                    if (e + _s9 < this.map.width) {
                      var _e54 = _s9 + _t32 * _r12,
                          _i17 = _s9 + _t32 * this.map.width;

                      this.map.layers[this.activeLayer].data[o + _i17] !== _a9 + _e54 && (n = !0, this.map.layers[this.activeLayer].data[o + _i17] = _a9 + _e54);
                    }
                  }
                }

                break;

              case Rs.EditMode.ERASE:
                void 0 === i && (i = {
                  x: 0,
                  y: 0,
                  w: 0,
                  h: 0
                });

                for (var _t33 = 0; _t33 <= i.h; _t33++) {
                  for (var _r13 = 0; _r13 <= i.w; _r13++) {
                    if (e + _r13 < this.map.width) {
                      var _e55 = _r13 + _t33 * this.map.width;

                      void 0 !== this.map.layers[this.activeLayer].data[o + _e55] && (n = !0, this.map.layers[this.activeLayer].data[o + _e55] = void 0);
                    }
                  }
                }

                break;

              case Rs.EditMode.EVENTS:
                this.selectEvent(e, t) && (this.renderingConfiguration.selectEventCell = {
                  i: e,
                  j: t
                });
                break;

              default:
                console.error("Unexpected case");
            }

            return n;
          }
        }, {
          key: "selectEvent",
          value: function selectEvent(e, t) {
            var n;
            if (!_l.confirmCloseEventDetails()) return !1;

            if (!Ns.isEmpty(this.map.events)) {
              var _iterator38 = _createForOfIteratorHelper(this.map.events),
                  _step38;

              try {
                for (_iterator38.s(); !(_step38 = _iterator38.n()).done;) {
                  var _i18 = _step38.value;

                  if (_i18.i === e && _i18.j === t) {
                    n = _i18;
                    break;
                  }
                }
              } catch (err) {
                _iterator38.e(err);
              } finally {
                _iterator38.f();
              }
            }

            return void 0 === n && (n = Ls.getEvent(), n.i = e, n.j = t), _l.loadEvent(n, !1), !0;
          }
        }, {
          key: "getSelectionArea",
          value: function getSelectionArea() {
            return Ns.isEmpty(this.tilePicker) ? void 0 : this.tilePicker.getSelectionArea();
          }
        }, {
          key: "renderDynamicElements",
          value: function renderDynamicElements(e, t, n, i, o, r, a) {
            if (!Ns.isEmpty(this.map.events)) {
              var _iterator39 = _createForOfIteratorHelper(this.map.events),
                  _step39;

              try {
                for (_iterator39.s(); !(_step39 = _iterator39.n()).done;) {
                  var _e56 = _step39.value;

                  try {
                    Gs.render(this.grid, _e56, this.context, !1);
                  } catch (e) {
                    console.error(e);
                  }
                }
              } catch (err) {
                _iterator39.e(err);
              } finally {
                _iterator39.f();
              }
            }
          }
        }, {
          key: "applyLayerCustomizations",
          value: function applyLayerCustomizations(e) {
            e > this.activeLayer ? this.context.globalAlpha = Tl.UPPER_LEVEL_OPACITY : e < this.activeLayer && (this.context.globalAlpha = Tl.LOWER_LEVEL_OPACITY);
          }
        }, {
          key: "removeLayerCustomizations",
          value: function removeLayerCustomizations(e) {
            this.context.globalAlpha = 1;
          }
        }, {
          key: "resizeMap",
          value: function resizeMap(e, t) {
            Hs.resizeMap(this.map, e, t), this.grid.updateSize(e, t);
          }
        }, {
          key: "changeMap",
          value: function changeMap(e, t) {
            if (this.editMode === Rs.EditMode.EVENTS && !_l.confirmCloseEventDetails()) return !1;
            var n = this;
            return _get(_getPrototypeOf(Tl.prototype), "changeMap", this).call(this, e, function (i) {
              t(i), n.resizeMap(e.height, e.width), Tl.onMapSizeChange(n);
            }), !0;
          }
        }, {
          key: "setTilePicker",
          value: function setTilePicker(e) {
            this.tilePicker = e;
          }
        }, {
          key: "setActiveLayer",
          value: function setActiveLayer(e) {
            this.activeLayer = e, this.requestedNewFrame = !0;
          }
        }, {
          key: "setSelectedEventCell",
          value: function setSelectedEventCell(e) {
            this.renderingConfiguration.selectEventCell = e;
          }
        }, {
          key: "setEditMode",
          value: function setEditMode(e) {
            this.editMode = e, this.requestedNewFrame = !0;
          }
        }, {
          key: "getMap",
          value: function getMap() {
            return this.map;
          }
        }], [{
          key: "onMapSizeChange",
          value: function onMapSizeChange(e) {
            var t = document.getElementById("zoom");
            e.grid.selectScale(+t.value), e.grid.refreshCanvasSize(), e.changeScale(), e.requestedNewFrame = !0;
          }
        }]);

        return Tl;
      }(Cl);

      Tl.LOWER_LEVEL_OPACITY = .8, Tl.UPPER_LEVEL_OPACITY = .4, function (e) {
        function t(e, t, i, o) {
          Hs.loadMap(i, t, function (t) {
            if (void 0 === t) return console.error("Cannot init mapper, cannot load map: " + i), void o(e);
            e.changeMap(t, function () {
              n(Rs.EditMode.APPLY), o(e);
            });
          });
        }

        function n(t) {
          e.mapper.setEditMode(t);
          var n = t === Rs.EditMode.EVENTS;
          n ? e.mapper.apply(0, 0) : (_l.finishEventEditing(), e.mapper.setSelectedEventCell(void 0)), document.getElementById(_l.BUTTON_ID_MODE + "0").disabled = !1, document.getElementById(_l.BUTTON_ID_MODE + "1").disabled = !1, document.getElementById(_l.BUTTON_ID_MODE + "2").disabled = !1, document.getElementById(_l.BUTTON_ID_MODE + t).disabled = !0, document.getElementById("layersPanel").hidden = n, document.getElementById("tilePanel").hidden = n, document.getElementById("eventPanel").hidden = !n;
        }

        e.start = function (n, i, o) {
          Ns.isEmpty(e.mapper) ? new Il(n, function (r) {
            new Tl(r, function (a) {
              e.mapper = a, function (e, t, n) {
                var i = new Map();
                i[ws.Keys.F2] = function (e) {
                  t.toggleEditorGrid(), e.preventDefault();
                }, i[ws.Keys.F3] = function (e) {
                  t.toggleCellNumbering(), e.preventDefault();
                }, i[ws.Keys.F4] = function (e) {
                  t.toggleFocus(), e.preventDefault();
                }, ws.init(e, n, i, Us, Us, function (e, n, i, o, r) {
                  r === ws.MouseButtons.LEFT ? t.apply(e, n) && _l.changeEditState(!0) : t.select(e, n);
                }, function (e, n, i) {
                  i === ws.MouseButtons.LEFT && t.selectEnd(e, n);
                }, function (e, n, i) {
                  i === ws.MouseButtons.LEFT ? t.apply(e, n) && _l.changeEditState(!0) : (t.selectEnd(e, n), t.requestedNewFrame = !0), t.updatePointer(e, n);
                }, function (e, n) {
                  t.updatePointer(e, n);
                }, Us, Us, Us, function (e, n) {
                  t.cleanSelection();
                }, Us, Us);
              }(n, a, r), function (e, t, n) {
                document.getElementById("zoom").onchange = function (e) {
                  Tl.onMapSizeChange(t);
                };
              }(0, a), t(a, n, i, function (e, t) {
                o(a), a.start(n);
              });
            });
          }, Al.mapper) : t(e.mapper, n, i, o);
        }, e.changeTile = function (t, n) {
          e.mapper.togglePause(!0), e.mapper.changeTile(t, function (t) {
            e.mapper.togglePause(!1), e.mapper.requestedNewFrame = !0;
          }), e.mapper.setTilePicker(n);
        }, e.changeSize = function (t, n) {
          e.mapper.resizeMap(t, n), e.mapper.requestedNewFrame = !0;
        }, e.reloadMap = function (t) {
          var n = _l.getActiveMap(),
              i = document.getElementById("canvas1");

          Hs.loadMap(n, i, function (n) {
            if (void 0 === n) return void t(!1);
            var i = e.mapper.changeMap(n, function () {
              t(i), _l.changeEditState(!1);
            });
          });
        }, e.saveMap = function (t) {
          var n = _l.getActiveMap(),
              i = JSON.stringify(e.mapper.getMap());

          nl.save(n + "", i, Cs.MAP, function (e, n) {
            void 0 !== n ? t(n) : (console.error("Undefined save result"), t(!1));
          });
        }, e.setMode = n, e.changeEventPosition = function (t, n, i) {
          t.i = n, t.j = i, Gs.initTransientData(e.mapper.map, e.mapper.grid, t), e.mapper.renderingConfiguration.selectEventCell = {
            i: n,
            j: i
          };
        }, e.setActiveLayer = function (t) {
          document.getElementById(_l.BUTTON_ID_LAYER + "0").disabled = !1, document.getElementById(_l.BUTTON_ID_LAYER + "1").disabled = !1, document.getElementById(_l.BUTTON_ID_LAYER + "2").disabled = !1, document.getElementById(_l.BUTTON_ID_LAYER + t).disabled = !0, e.mapper.setActiveLayer(t);
        }, e.deleteEvent = function (t) {
          if (!Ns.isEmpty(t.id)) for (var _n24 = 0; _n24 < e.mapper.map.events.length; _n24++) {
            var _i19 = e.mapper.map.events[_n24];
            if (t.id === _i19.id) return void e.mapper.map.events.splice(_n24, 1);
          }
        }, e.addEvent = function (t) {
          if (Ns.isEmpty(t.id) || t.id === Ls.DEFAULT_ID) {
            var _n25 = 0;
            void 0 !== e.mapper.map.maxEventId && (_n25 = e.mapper.map.maxEventId + 1), t.id = _n25, e.mapper.map.maxEventId = _n25, e.mapper.map.events.push(t), Gs.initTransientData(e.mapper.map, e.mapper.grid, t);
          }

          _l.changeEditState(!0);
        }, e.isCellAvailable = function (t, n, i) {
          var _iterator40 = _createForOfIteratorHelper(e.mapper.map.events),
              _step40;

          try {
            for (_iterator40.s(); !(_step40 = _iterator40.n()).done;) {
              var _o16 = _step40.value;
              if (_o16.i === n && _o16.j === i && _o16 !== t) return !1;
            }
          } catch (err) {
            _iterator40.e(err);
          } finally {
            _iterator40.f();
          }

          return !0;
        };
      }(El || (El = {})), function (e) {
        e.PAGE_TITLE = document.title, e.BUTTON_ID_MODE = "mode", e.BUTTON_ID_LAYER = "layer";
        var t,
            n,
            i,
            o,
            r,
            a,
            s = !1;
        var l = ["Very low", "Low", "Medium-low", "Medium", "Medium-high", "High", "Very high"];

        function c() {
          return $("#mapPanel").jstree(!0).get_selected(!0)[0];
        }

        function d(t) {
          document.title = t ? e.PAGE_TITLE + "*" : e.PAGE_TITLE, $("#saveButton")[0].disabled = !t, $("#reloadButton")[0].disabled = !t;
          var n = $("#mapPanel").jstree(!0),
              i = n.get_json("#", {
            flat: !0,
            no_state: !0,
            no_id: !1,
            no_children: !1,
            no_data: !0
          });
          $.each(i, function (e, i) {
            t ? n.disable_node(i.id) : n.enable_node(i.id);
          });
        }

        function u() {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
          if (void 0 === n) return void console.error("Current event undefined, cannot load its state");
          e && p();
          var i = document.getElementById("state").valueAsNumber;
          Ns.isEmpty(n.states) && (n.states = []), i > n.states.length && (n.states[i - 1] = Ls.getEventState());
          var o = n.states[i - 1];
          t = o, function (e) {
            var t = nl.listEventStateConditions(),
                n = document.getElementById("condition");
            Ds.resetSelect(n);
            var i = n.options,
                o = 0;

            var _iterator41 = _createForOfIteratorHelper(t),
                _step41;

            try {
              for (_iterator41.s(); !(_step41 = _iterator41.n()).done;) {
                var _r14 = _step41.value;
                i[o] = new Option(_r14), _r14 === e.condition && (n.selectedIndex = o), o++;
              }
            } catch (err) {
              _iterator41.e(err);
            } finally {
              _iterator41.f();
            }
          }(o);
          var r = document.getElementById("trigger"),
              a = r.options;
          0 === a.length && (a[0] = new Option("Click"), a[1] = new Option("Touch"), a[2] = new Option("Over"), a[3] = new Option("(auto)")), void 0 !== o.trigger && Ns.isNumeric(o.trigger) ? r.selectedIndex = o.trigger : r.selectedIndex = 0, f(), document.getElementById("tot").innerText = n.states.length + "", function () {
            var e = document.getElementById("charasets");
            nl.listResources(Cs.CHAR, function (n) {
              Ds.resetSelect(e);
              var i = e.options;
              if (i[0] = new Option(""), void 0 !== n) for (var _o17 = 0; _o17 < n.length; _o17++) {
                i[_o17 + 1] = new Option(n[_o17]), n[_o17] === t.charaset && (e.selectedIndex = _o17 + 1);
              }
            });
            var n = t.visible;
            void 0 === n && (n = !0), document.getElementById("visible").checked = n;
            var i = Number.parseInt(t.opacity + "");
            (Ns.isEmpty(i) || Number.isNaN(i) || i < 0 || i > 100) && (i = 100), document.getElementById("opacity").valueAsNumber = i;
            var o = document.getElementById("direction");

            if (0 === o.length) {
              var _e57 = o.options;
              _e57[0] = new Option("Up"), _e57[1] = new Option("Right"), _e57[2] = new Option("Down"), _e57[3] = new Option("Left");
            }

            var r = Number.parseInt(t.direction + "");
            (Ns.isEmpty(r) || Number.isNaN(r) || r < 0 || r > 4) && (r = 2), document.getElementById("direction").selectedIndex = r;
            var a = 0,
                s = document.getElementById("speed").options,
                c = document.getElementById("frequency").options;

            if (0 === s.length || 0 === c.length) {
              var _iterator42 = _createForOfIteratorHelper(l),
                  _step42;

              try {
                for (_iterator42.s(); !(_step42 = _iterator42.n()).done;) {
                  var _e58 = _step42.value;
                  s[a] = new Option(_e58), c[a] = new Option(_e58), a++;
                }
              } catch (err) {
                _iterator42.e(err);
              } finally {
                _iterator42.f();
              }
            }

            var d = Number.parseInt(t.speed + "");
            (Ns.isEmpty(d) || Number.isNaN(d) || d < 0 || d > 6) && (d = 3), document.getElementById("speed").selectedIndex = d;
            var u = Number.parseInt(t.frequency + "");
            (Ns.isEmpty(u) || Number.isNaN(u) || u < 0 || u > 6) && (u = 3), document.getElementById("frequency").selectedIndex = u;
            var f = document.getElementById("rotation").options;
            0 === f.length && (f[0] = new Option("Off"), f[1] = new Option("Clockwise"), f[2] = new Option("Counterclockwise"));
            var p = Number.parseInt(t.rotation + "");
            (Ns.isEmpty(p) || Number.isNaN(p) || p < 0 || p > 2) && (p = 0), document.getElementById("rotation").selectedIndex = p;
            var g = document.getElementById("ontop").options;
            0 === g.length && (g[0] = new Option("Off"), g[1] = new Option("Liv. 1"), g[2] = new Option("Liv. 2"), g[3] = new Option("Liv. 3"), g[4] = new Option("Liv. 4"));
            var h = Number.parseInt(t.onTop + "");
            (Ns.isEmpty(h) || Number.isNaN(h) || h < 0 || h > 4) && (h = 0), document.getElementById("ontop").selectedIndex = h;
            var v = t.block;
            void 0 === v && (v = !0), document.getElementById("block").checked = v;
          }();
        }

        function f() {
          var e = document.getElementById("script").value,
              n = document.getElementById("action");

          if (Ds.resetSelect(n), !Ns.isEmpty(e)) {
            var _i20 = nl.listScriptActions(e);

            _i20.push("");

            var _o18 = n.options,
                _r15 = 0;
            n.selectedIndex = -1;

            var _iterator43 = _createForOfIteratorHelper(_i20),
                _step43;

            try {
              for (_iterator43.s(); !(_step43 = _iterator43.n()).done;) {
                var _e59 = _step43.value;
                _o18[_r15] = new Option(_e59), (_e59 === t.action || "" === _e59 && void 0 === t.action) && (n.selectedIndex = _r15), _r15++;
              }
            } catch (err) {
              _iterator43.e(err);
            } finally {
              _iterator43.f();
            }
          }
        }

        function p() {
          t.condition = document.getElementById("condition").value, t.trigger = document.getElementById("trigger").selectedIndex, t.action = document.getElementById("action").value, t.charaset = document.getElementById("charasets").value;
          var e = document.getElementById("visible").checked;
          e && (e = void 0), t.visible = e;
          var n = document.getElementById("opacity").valueAsNumber;
          (Ns.isEmpty(n) || Number.isNaN(n) || n < 0 || n >= 100) && (n = void 0), t.opacity = n;
          var i = document.getElementById("direction").selectedIndex;
          (Ns.isEmpty(i) || i < 0 || i > 3) && (i = 4), t.direction = i;
          var o = document.getElementById("speed").selectedIndex,
              r = document.getElementById("frequency").selectedIndex;
          (Ns.isEmpty(o) || o < 0 || o > 6 || 3 === o) && (o = void 0), (Ns.isEmpty(r) || r < 0 || r > 6 || 3 === r) && (r = void 0), t.speed = o, t.frequency = r;
          var a = document.getElementById("rotation").selectedIndex;
          (Ns.isEmpty(a) || a <= 0 || a > 2) && (a = void 0), t.rotation = a;
          var s = document.getElementById("ontop").selectedIndex;
          (Ns.isEmpty(s) || s <= 0 || s > 4) && (s = void 0), t.onTop = s;
          var l = document.getElementById("block").checked;
          l && (l = void 0), t.block = l;
        }

        function g(e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;

          if (void 0 !== e) {
            if (t && !h()) return !1;
            e.currentState = 0;
          } else e = Ls.getEvent();

          n = e, document.getElementById("eventi").style.removeProperty("color"), document.getElementById("eventj").style.removeProperty("color"), v(!1), document.getElementById("name").value = e.name, document.getElementById("eventi").valueAsNumber = e.i, document.getElementById("eventj").valueAsNumber = e.j;
          var i = document.getElementById("script");
          Ds.resetSelect(i);
          var o = nl.listScriptClasses();
          o.set("", "");
          var r = i.options,
              a = 0;

          var _iterator44 = _createForOfIteratorHelper(o),
              _step44;

          try {
            for (_iterator44.s(); !(_step44 = _iterator44.n()).done;) {
              var _e61 = _step44.value;
              r[a] = new Option(_e61[0]), r[a].title = _e61[1], (_e61[0] === n.script || "" === _e61[0] && void 0 === n.script) && (i.selectedIndex = a), a++;
            }
          } catch (err) {
            _iterator44.e(err);
          } finally {
            _iterator44.f();
          }

          if (document.getElementById("state").valueAsNumber = 1, u(!1), function () {
            document.getElementById("key").value = "", document.getElementById("val").value = "";
            var e = document.getElementById("memory");

            for (; e.hasChildNodes();) {
              e.removeChild(e.lastChild);
            }
          }(), !Ns.isEmpty(n.memory)) for (var _e60 in n.memory) {
            m(_e60, n.memory[_e60]);
          }
          return !0;
        }

        function h() {
          return !s || void 0 === n || confirm("Event details not saved. If you continue, details of the currently selected event will be lost. Are you sure you want to continue?");
        }

        function v() {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
          s = e, document.getElementById("saveEvent").disabled = !e, El.mapper.requestedNewFrame = !0;
        }

        function m(e, t) {
          var i = document.getElementById("memory"),
              o = i.rows;

          for (var _n26 = 0; _n26 < o.length; _n26++) {
            if (o[_n26].id === e) return void (i.rows[_n26].cells[1].childNodes[0].value = t);
          }

          var r,
              a,
              s,
              l = document.getElementById("memory").rows.length,
              c = document.getElementById("memory").insertRow(l);
          c.id = e, r = c.insertCell(), a = document.createElement("input"), a.type = "text", a.style.width = "5em", a.disabled = !0, a.value = e, r.appendChild(a), r = c.insertCell(), a = document.createElement("input"), a.type = "text", a.style.width = "8em", a.disabled = !0, a.value = t, r.appendChild(a), r = c.insertCell(), s = document.createElement("button"), s.onclick = function () {
            var t = document.getElementById("memory"),
                i = t.rows;

            for (var _n27 = 0; _n27 < i.length; _n27++) {
              if (i[_n27].id === e) {
                t.deleteRow(_n27);
                break;
              }
            }

            void 0 !== n ? Gs.deleteMem(n, e) : console.error("Current event undefined, cannot delete memory");
          }, s.innerText = "-", r.appendChild(s);
        }

        e.start = function () {
          yl.check(), void 0 === o && (o = new gs({
            el: "#eventEditorVue",
            components: {
              "event-editor": ml
            },
            data: {}
          })), function () {
            if (void 0 === r) {
              var _e62 = {
                id: Ls.FIRST_ELEM_ID
              };
              r = new gs({
                el: "#dialogSummaryVue",
                components: {
                  "dialog-summary": bs
                },
                data: {
                  root: Ls.getDialogNode(),
                  selectedNodeId: _e62
                }
              });
            }

            void 0 === a && (a = new gs({
              el: "#dialogEditorVue",
              components: {
                "dialog-editor": gs.extend(sl)
              },
              data: {
                root: Ls.getDialogNode(),
                dialog: Ls.getDialogNode(),
                disconnectedNodes: [Ls.getDialogNode()],
                nodeIds: new Array(Ls.FIRST_ELEM_ID),
                edgeIds: new Array(Ls.FIRST_ELEM_ID),
                edgeConditions: [],
                edgeScripts: new Map(),
                edgeActions: []
              }
            }));
          }(), new gs({
            el: "#loginVue",
            components: {
              login: ul
            }
          });
          var e = {
            core: {
              animation: !1,
              data: {
                url: base_path + "data/" + Cs.TREE + "/maps",
                dataType: "json"
              },
              check_callback: !0,
              error: function error() {
                console.warn("jsTree error on dialogTree");
              },
              multiple: !1
            },
            plugins: ["contextmenu", "dnd", "unique"]
          };
          $("#mapPanel").jstree(e);
          var t = document.getElementById("canvas1");
          $("#mapPanel").on("create_node.jstree ready.jstree rename_node.jstree delete_node.jstree changed.jstree", function (e, n) {
            switch (e.type) {
              case "ready":
                if (void 0 === c()) {
                  var _e63 = $("#mapPanel").jstree(!0).get_json("#", {
                    flat: !0,
                    no_state: !0,
                    no_id: !1,
                    no_children: !1,
                    no_data: !0
                  });

                  _e63.length > 0 && $("#mapPanel").jstree(!0).select_node(_e63[0]);
                }

                $("#mapPanel").jstree("open_all");
                break;

              case "create_node":
                var _i21 = n.node.id.split("_").pop();

                isNaN(parseInt(_i21)) && (console.info("Cannot generate a sequential numeric id for node: " + n.node.id), _i21 = Ns.getRandomString()), $("#mapPanel").jstree(!0).set_id(n.node, _i21);

              case "rename_node":
              case "delete_node":
                d(!0);
                break;

              case "changed":
                switch (n.action) {
                  case "ready":
                    break;

                  case "delete_node":
                    var _e64 = $("#mapPanel").jstree(!0).get_prev_dom(n.node);

                    $("#mapPanel").jstree(!0).select_node(_e64);
                    break;

                  case "model":
                  case "select_node":
                    $("#mapDetailPanel").show();

                    var _i22 = c();

                    El.start(t, _i22.id, function (e) {
                      void 0 !== e.map ? ($("#mapSizeW").val(e.map.width + ""), $("#mapSizeH").val(e.map.height + ""), void 0 !== e.map.tileset && document.getElementById("tiles").value !== e.map.tileset.image && ($("#tiles").val(e.map.tileset.image), bl.loadTile(e.map.tileset.image, function (t) {
                        e.setTilePicker(t), bl.setMapper(e);
                      }))) : console.error("Map is undefined, for id: " + _i22.id);
                    });
                    break;

                  case "deselect_all":
                    break;

                  default:
                    console.error('Unexpected event "changed" action: ' + n.action);
                }

                break;

              default:
                console.error("Unexpected event type: " + e.type);
            }
          }), nl.loadProperties(function (e) {
            var t = +e.get("cellWidth") * +e.get("tileColumns") + 2;
            $("#toolsPanel").width(t);
          }), $.getJSON(base_path + "assetlist/tile", function (e) {
            var t = document.getElementById("tiles");

            for (var _n28 = 0; _n28 < e.length; _n28++) {
              t.options.add(new Option(e[_n28], e[_n28]));
            }
          });
        }, e.changeSize = function () {
          var e = parseInt($("#mapSizeW").val()),
              t = parseInt($("#mapSizeH").val());
          El.changeSize(t, e), d(!0);
        }, e.loadNews = function () {}, e.changeTile = function () {
          var e = document.getElementById("tiles").value;
          bl.loadTile(e, function (t) {
            El.changeTile(e, t);
          }), d(!0);
        }, e.save = function () {
          (Ns.isEmpty(n) || h()) && bl.saveData(function (t, n) {
            t ? El.saveMap(function (t) {
              t ? e.changeEditState(!1) : console.error("Map save failed");
            }) : console.error("Tilepicker save failed");
          });
        }, e.reload = function () {
          El.reloadMap(function (e) {
            e && $("#mapPanel").jstree(!0).refresh(!0, !1);
          });
        }, e.getActiveMap = function () {
          return c().id;
        }, e.changeEditState = d, e.changeEventPosition = function () {
          if (void 0 === n) return void console.error("Current event undefined, cannot change its position");
          var e = document.getElementById("eventi").valueAsNumber,
              t = document.getElementById("eventj").valueAsNumber;
          El.isCellAvailable(n, e, t) ? (v(), El.changeEventPosition(n, e, t), document.getElementById("eventi").style.removeProperty("color"), document.getElementById("eventj").style.removeProperty("color")) : (v(!1), document.getElementById("eventi").style.color = Rs.Color.RED, document.getElementById("eventj").style.color = Rs.Color.RED);
        }, e.changeEventScript = function () {
          v(), f();
        }, e.deleteEvent = function () {
          void 0 !== n ? (El.deleteEvent(n), v(), g(void 0, !1)) : console.error("Current event undefined, cannot delete it");
        }, e.deleteEventState = function () {
          if (void 0 === n) return void console.error("Current event undefined, cannot delete its state");
          var e = document.getElementById("state").valueAsNumber;
          (e > 1 || 1 === e && n.states.length > 1) && e <= n.states.length && (n.states.splice(e - 1, 1), e > 1 && (document.getElementById("state").valueAsNumber -= 1), v(), u(!1));
        }, e.loadEventState = u, e.loadEvent = g, e.saveEvent = function () {
          if (void 0 !== n) {
            if (n.name = document.getElementById("name").value, n.i = document.getElementById("eventi").valueAsNumber, n.j = document.getElementById("eventj").valueAsNumber, n.script = document.getElementById("script").value, p(), void 0 !== t.dialog) {
              var _e65 = t;
              $s.saveDialog(t.dialog, r.$data.root, function (n) {
                void 0 !== n ? _e65.dialog = n : console.error("Could not save dialog, returned dialog id is undefined: " + t.dialog);
              });
            }

            El.addEvent(n), e.eventModified(!1);
          }
        }, e.finishEventEditing = function () {
          return !!h() && (n = void 0, v(!1), !0);
        }, e.confirmCloseEventDetails = h, e.eventModified = v, e.addMemory = function () {
          if (void 0 === n) return void console.error("Current event undefined, cannot add to its memory");
          var e = document.getElementById("key").value,
              t = document.getElementById("val").value;
          Ns.isEmpty(e) || Ns.isEmpty(t) || (v(), Gs.saveMem(n, e, t), m(e, t), document.getElementById("key").value = "", document.getElementById("val").value = "");
        }, e.createNode = function () {
          return Ls.getDialogNode();
        }, e.createEdge = function () {
          return Ls.getDialogEdge();
        }, e.toggleDialogEditor = function () {
          var e = document.getElementById("dialogPanel").style;

          if (document.getElementById("toggleDialogEditor").checked) {
            e.display = "block";
            var _n29 = t.dialog;
            if (void 0 === _n29) _n29 = Ls.DEFAULT_ID;else if (_n29 === i) return;
            $s.loadDialog(_n29, Os.ui.lang, function (e) {
              void 0 !== e && (r.$data.root = e, t.dialog = _n29, i = _n29);
            });
          } else e.display = "none";
        }, e.loadDialogEditor = function (e) {
          var t = r.$data.root;

          if (a.$data.root = $s.search(t, e), void 0 === a.$data.dialog || a.$data.dialog.id !== t.id) {
            var _e66 = new Map(),
                _n30 = new Map();

            $s.deconstructDialogTree(t, _e66, _n30), a.$data.nodeIds = Array.from(_e66.keys()), a.$data.edgeIds = Array.from(_n30.keys());
          }

          a.$data.dialog = t, r.$data.selectedNodeId.id = e;
          var n = document.getElementById("dialogEditPanel");
          null !== n && (n.style.display = "block");
        }, e.listEventStateConditions = function () {
          return nl.listEventStateConditions();
        };
      }(_l || (_l = {}));
    },
    40: function _(e, t, n) {
      var i = n(98);
      "string" == typeof i && (i = [[e.id, i, ""]]), i.locals && (e.exports = i.locals), (0, n(346).Z)("4369edce", i, !1, {});
    },
    657: function _(e, t, n) {
      var i = n(489);
      "string" == typeof i && (i = [[e.id, i, ""]]), i.locals && (e.exports = i.locals), (0, n(346).Z)("3e8ba50c", i, !1, {});
    },
    564: function _(e, t, n) {
      var i = n(201);
      "string" == typeof i && (i = [[e.id, i, ""]]), i.locals && (e.exports = i.locals), (0, n(346).Z)("56feccaa", i, !1, {});
    },
    346: function _(e, t, n) {
      "use strict";

      function i(e, t) {
        for (var n = [], i = {}, o = 0; o < t.length; o++) {
          var r = t[o],
              a = r[0],
              s = {
            id: e + ":" + o,
            css: r[1],
            media: r[2],
            sourceMap: r[3]
          };
          i[a] ? i[a].parts.push(s) : n.push(i[a] = {
            id: a,
            parts: [s]
          });
        }

        return n;
      }

      n.d(t, {
        Z: function Z() {
          return g;
        }
      });
      var o = "undefined" != typeof document;
      if ("undefined" != typeof DEBUG && DEBUG && !o) throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");

      var r = {},
          a = o && (document.head || document.getElementsByTagName("head")[0]),
          s = null,
          l = 0,
          c = !1,
          d = function d() {},
          u = null,
          f = "data-vue-ssr-id",
          p = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());

      function g(e, t, n, o) {
        c = n, u = o || {};
        var a = i(e, t);
        return h(a), function (t) {
          for (var n = [], o = 0; o < a.length; o++) {
            var s = a[o];
            (l = r[s.id]).refs--, n.push(l);
          }

          for (t ? h(a = i(e, t)) : a = [], o = 0; o < n.length; o++) {
            var l;

            if (0 === (l = n[o]).refs) {
              for (var c = 0; c < l.parts.length; c++) {
                l.parts[c]();
              }

              delete r[l.id];
            }
          }
        };
      }

      function h(e) {
        for (var t = 0; t < e.length; t++) {
          var n = e[t],
              i = r[n.id];

          if (i) {
            i.refs++;

            for (var o = 0; o < i.parts.length; o++) {
              i.parts[o](n.parts[o]);
            }

            for (; o < n.parts.length; o++) {
              i.parts.push(m(n.parts[o]));
            }

            i.parts.length > n.parts.length && (i.parts.length = n.parts.length);
          } else {
            var a = [];

            for (o = 0; o < n.parts.length; o++) {
              a.push(m(n.parts[o]));
            }

            r[n.id] = {
              id: n.id,
              refs: 1,
              parts: a
            };
          }
        }
      }

      function v() {
        var e = document.createElement("style");
        return e.type = "text/css", a.appendChild(e), e;
      }

      function m(e) {
        var t,
            n,
            i = document.querySelector("style[" + f + '~="' + e.id + '"]');

        if (i) {
          if (c) return d;
          i.parentNode.removeChild(i);
        }

        if (p) {
          var o = l++;
          i = s || (s = v()), t = b.bind(null, i, o, !1), n = b.bind(null, i, o, !0);
        } else i = v(), t = E.bind(null, i), n = function n() {
          i.parentNode.removeChild(i);
        };

        return t(e), function (i) {
          if (i) {
            if (i.css === e.css && i.media === e.media && i.sourceMap === e.sourceMap) return;
            t(e = i);
          } else n();
        };
      }

      var y,
          A = (y = [], function (e, t) {
        return y[e] = t, y.filter(Boolean).join("\n");
      });

      function b(e, t, n, i) {
        var o = n ? "" : i.css;
        if (e.styleSheet) e.styleSheet.cssText = A(t, o);else {
          var r = document.createTextNode(o),
              a = e.childNodes;
          a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(r, a[t]) : e.appendChild(r);
        }
      }

      function E(e, t) {
        var n = t.css,
            i = t.media,
            o = t.sourceMap;
        if (i && e.setAttribute("media", i), u.ssrId && e.setAttribute(f, t.id), o && (n += "\n/*# sourceURL=" + o.sources[0] + " */", n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */"), e.styleSheet) e.styleSheet.cssText = n;else {
          for (; e.firstChild;) {
            e.removeChild(e.firstChild);
          }

          e.appendChild(document.createTextNode(n));
        }
      }
    }
  },
      t = {};

  function n(i) {
    if (t[i]) return t[i].exports;
    var o = t[i] = {
      id: i,
      exports: {}
    };
    return e[i](o, o.exports, n), o.exports;
  }

  return n.d = function (e, t) {
    for (var i in t) {
      n.o(t, i) && !n.o(e, i) && Object.defineProperty(e, i, {
        enumerable: !0,
        get: t[i]
      });
    }
  }, n.g = function () {
    if ("object" == (typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis))) return globalThis;

    try {
      return this || new Function("return this")();
    } catch (e) {
      if ("object" == (typeof window === "undefined" ? "undefined" : _typeof(window))) return window;
    }
  }(), n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, n.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, n(632);
}();
