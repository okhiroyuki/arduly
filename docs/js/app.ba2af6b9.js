(function(e){function t(t){for(var n,r,l=t[0],i=t[1],p=t[2],s=0,d=[];s<l.length;s++)r=l[s],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&d.push(a[r][0]),a[r]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);u&&u(t);while(d.length)d.shift()();return c.push.apply(c,p||[]),o()}function o(){for(var e,t=0;t<c.length;t++){for(var o=c[t],n=!0,l=1;l<o.length;l++){var i=o[l];0!==a[i]&&(n=!1)}n&&(c.splice(t--,1),e=r(r.s=o[0]))}return e}var n={},a={app:0},c=[];function r(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=n,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="src/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var p=0;p<l.length;p++)t(l[p]);var u=i;c.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"034f":function(e,t,o){"use strict";o("85ec")},"55c6":function(e,t,o){},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-app",[o("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[o("v-app-bar-nav-icon"),o("v-toolbar-title",[e._v("Arduly")])],1),o("v-main",[o("BlocklyComponent",{ref:"foo",attrs:{id:"blockly",options:e.options},on:{move:e.updateCode}}),o("p",{attrs:{id:"code"}},[o("pre",{domProps:{innerHTML:e._s(e.code)}})])],1),o("v-footer",{attrs:{padless:""}},[o("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[e._v(" "+e._s((new Date).getFullYear())+" — "),o("strong",[e._v("Arduly")])])],1)],1)},c=[],r=o("fc06"),l=o.n(r),i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",{ref:"blocklyDiv",staticClass:"blocklyDiv"}),o("xml",{ref:"blocklyToolbox",staticStyle:{display:"none"}},[e._t("default")],2)],1)},p=[],u=o("54ca"),s=o.n(u),d={name:"BlocklyComponent",props:["options"],data:function(){return{workspace:null}},mounted:function(){var e=this.$props.options||{};e.toolbox||(e.toolbox=this.$refs.blocklyToolbox),this.workspace=s.a.inject(this.$refs.blocklyDiv,e),this.workspace.addChangeListener(this.onEvent)},methods:{onEvent:function(e){e.type===s.a.Events.MOVE&&this.$emit("move")}}},b=d,f=(o("656b"),o("2877")),m=Object(f["a"])(b,i,p,!1,null,"c05a62b8",null),h=m.exports,k=(o("99af"),o("b7fd"));
/**
 * @license
 *
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
k["Blocks"].stock_buy_simple={init:function(){this.appendValueInput("Number").setCheck("Number").appendField("Buy Stock ID").appendField(new k["FieldNumber"](0),"ID").appendField("For amount").appendField(new k["FieldNumber"](0),"Amount").appendField("At Price").appendField(new k["FieldNumber"](0),"Price"),this.setPreviousStatement(!0,null),this.setNextStatement(!0,"String"),this.setColour(230),this.setTooltip("buy id"),this.setHelpUrl("https://example.com")}},k["JavaScript"].stock_buy_simple=function(e){var t=e.getFieldValue("ID"),o=e.getFieldValue("Amount"),n=e.getFieldValue("Price"),a=k["JavaScript"].valueToCode(e,"Number",k["JavaScript"].ORDER_ATOMIC),c="buy(".concat(t,",").concat(o,",").concat(n,",").concat(a,");\n");return c},k["Blocks"].stock_buy_prog={init:function(){this.appendValueInput("Number").setCheck("Number").appendField("Buy Stock ID"),this.appendValueInput("NAME").setCheck("Number").appendField("For amount"),this.appendValueInput("NAME").setCheck("Number").appendField("At Price"),this.setPreviousStatement(!0,null),this.setNextStatement(!0,"String"),this.setColour(230),this.setTooltip("buy id"),this.setHelpUrl("https://example.com")}},k["JavaScript"].stock_buy_prog=function(e){var t=k["JavaScript"].valueToCode(e,"Number",k["JavaScript"].ORDER_ATOMIC),o=k["JavaScript"].valueToCode(e,"NAME",k["JavaScript"].ORDER_ATOMIC),n="buy(".concat(t,",").concat(o,",").concat(o,");\n");return n},k["Blocks"].stock_fetch_price={init:function(){this.appendValueInput("Fetch").setCheck("Number").appendField("Fetch Price of Stock ID:"),this.appendDummyInput().appendField("And set to:").appendField(new k["FieldVariable"]("item"),"variable"),this.setInputsInline(!0),this.setPreviousStatement(!0,null),this.setNextStatement(!0,null),this.setColour(230),this.setTooltip("fetch stock price"),this.setHelpUrl("https://example.com")}},k["JavaScript"].stock_fetch_price=function(e){var t=k["JavaScript"].valueToCode(e,"Fetch",k["JavaScript"].ORDER_ATOMIC),o=k["JavaScript"].variableDB_.getName(e.getFieldValue("variable"),k["Variables"].NAME_TYPE),n="fetch_price(".concat(t,",").concat(o,");\n");return n};var v=o("3d20"),y=o.n(v),_=function(e){return e};k["prompt"]=function(e,t,o){y.a.fire({title:"Variable:",input:"text",inputAttributes:{autocapitalize:"off"},showCancelButton:!0,confirmButtonText:"Look up",showLoaderOnConfirm:!0,allowOutsideClick:function(){return!y.a.isLoading()}}).then((function(e){e.value&&o(_(e.value))}))};var g={name:"app",components:{BlocklyComponent:h},data:function(){return{code:"",options:{media:"media/",grid:{spacing:25,length:3,colour:"#ccc",snap:!0},zoom:{controls:!0,wheel:!0,startScale:1,maxScale:3,minScale:.3,scaleSpeed:1.2,pinch:!0},toolbox:'<xml>\n          <category name="Logic" colour="%{BKY_LOGIC_HUE}">\n            <block type="controls_if"></block>\n            <block type="logic_compare"></block>\n            <block type="logic_operation"></block>\n            <block type="logic_negate"></block>\n            <block type="logic_boolean"></block>\n          </category>\n          <category name="Loops" colour="%{BKY_LOOPS_HUE}">\n            <block type="controls_repeat_ext">\n              <value name="TIMES">\n                <block type="math_number">\n                  <field name="NUM">10</field>\n                </block>\n              </value>\n            </block>\n            <block type="controls_whileUntil"></block>\n          </category>\n          <category name="Math" colour="%{BKY_MATH_HUE}">\n            <block type="math_number">\n              <field name="NUM">123</field>\n            </block>\n            <block type="math_arithmetic"></block>\n            <block type="math_single"></block>\n          </category>\n          <category name="Text" colour="%{BKY_TEXTS_HUE}">\n            <block type="text"></block>\n            <block type="text_length"></block>\n            <block type="text_print"></block>\n          </category>\n          <category name="Variables" custom="VARIABLE" colour="%{BKY_VARIABLES_HUE}">\n            </category>\n          <category name="Stocks" colour="%{BKY_LOOPS_HUE}">\n            <block type="stock_buy_simple"></block>\n            <block type="stock_buy_prog"></block>\n            <block type="stock_fetch_price"></block>\n          </category>\n        </xml>'}}},methods:{updateCode:function(){this.code=l.a.workspaceToCode(this.$refs.foo.workspace)}}},S=g,x=(o("034f"),o("6544")),C=o.n(x),O=o("7496"),w=o("40dc"),F=o("5bc1"),T=o("62ad"),E=o("553a"),A=o("f6c4"),N=o("2a7f"),V=Object(f["a"])(S,a,c,!1,null,null,null),I=V.exports;C()(V,{VApp:O["a"],VAppBar:w["a"],VAppBarNavIcon:F["a"],VCol:T["a"],VFooter:E["a"],VMain:A["a"],VToolbarTitle:N["a"]});var B=o("f309");n["a"].use(B["a"]);var M=new B["a"]({});n["a"].config.productionTip=!1,n["a"].config.ignoredElements=["field","block","category","xml","mutation","value","sep"],new n["a"]({vuetify:M,render:function(e){return e(I)}}).$mount("#app")},"656b":function(e,t,o){"use strict";o("55c6")},"85ec":function(e,t,o){}});
//# sourceMappingURL=app.ba2af6b9.js.map