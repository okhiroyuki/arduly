(function(e){function t(t){for(var n,c,r=t[0],l=t[1],p=t[2],u=0,d=[];u<r.length;u++)c=r[u],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&d.push(a[c][0]),a[c]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);s&&s(t);while(d.length)d.shift()();return i.push.apply(i,p||[]),o()}function o(){for(var e,t=0;t<i.length;t++){for(var o=i[t],n=!0,r=1;r<o.length;r++){var l=o[r];0!==a[l]&&(n=!1)}n&&(i.splice(t--,1),e=c(c.s=o[0]))}return e}var n={},a={app:0},i=[];function c(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.m=e,c.c=n,c.d=function(e,t,o){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(o,n,function(t){return e[t]}.bind(null,n));return o},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var p=0;p<r.length;p++)t(r[p]);var s=l;i.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"034f":function(e,t,o){"use strict";o("85ec")},"55c6":function(e,t,o){},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-app",[o("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[o("v-app-bar-nav-icon"),o("v-toolbar-title",[e._v("Arduly")])],1),o("v-main",[o("BlocklyComponent",{ref:"foo",attrs:{id:"blockly",options:e.options},on:{move:e.updateCode}}),o("p",{attrs:{id:"code"}},[o("pre",{domProps:{innerHTML:e._s(e.code)}})])],1),o("v-footer",{attrs:{padless:""}},[o("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[e._v(" "+e._s((new Date).getFullYear())+" — "),o("strong",[e._v("Arduly")])])],1)],1)},i=[],c=o("fc06"),r=o.n(c),l=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",{ref:"blocklyDiv",staticClass:"blocklyDiv"}),o("xml",{ref:"blocklyToolbox",staticStyle:{display:"none"}},[e._t("default")],2)],1)},p=[],s=o("54ca"),u=o.n(s),d={name:"BlocklyComponent",props:["options"],data:function(){return{workspace:null}},mounted:function(){var e=this.$props.options||{};e.toolbox||(e.toolbox=this.$refs.blocklyToolbox),this.workspace=u.a.inject(this.$refs.blocklyDiv,e),this.workspace.addChangeListener(this.onEvent)},methods:{onEvent:function(e){e.type===u.a.Events.MOVE&&this.$emit("move")}}},b=d,f=(o("656b"),o("2877")),m=Object(f["a"])(b,l,p,!1,null,"c05a62b8",null),k=m.exports,h=(o("99af"),o("b7fd"));
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
h["Blocks"].stock_buy_simple={init:function(){this.appendValueInput("Number").setCheck("Number").appendField("Buy Stock ID").appendField(new h["FieldNumber"](0),"ID").appendField("For amount").appendField(new h["FieldNumber"](0),"Amount").appendField("At Price").appendField(new h["FieldNumber"](0),"Price"),this.setPreviousStatement(!0,null),this.setNextStatement(!0,"String"),this.setColour(230),this.setTooltip("buy id"),this.setHelpUrl("https://example.com")}},h["JavaScript"].stock_buy_simple=function(e){var t=e.getFieldValue("ID"),o=e.getFieldValue("Amount"),n=e.getFieldValue("Price"),a=h["JavaScript"].valueToCode(e,"Number",h["JavaScript"].ORDER_ATOMIC),i="buy(".concat(t,",").concat(o,",").concat(n,",").concat(a,");\n");return i},h["Blocks"].stock_buy_prog={init:function(){this.appendValueInput("Number").setCheck("Number").appendField("Buy Stock ID"),this.appendValueInput("NAME").setCheck("Number").appendField("For amount"),this.appendValueInput("NAME").setCheck("Number").appendField("At Price"),this.setPreviousStatement(!0,null),this.setNextStatement(!0,"String"),this.setColour(230),this.setTooltip("buy id"),this.setHelpUrl("https://example.com")}},h["JavaScript"].stock_buy_prog=function(e){var t=h["JavaScript"].valueToCode(e,"Number",h["JavaScript"].ORDER_ATOMIC),o=h["JavaScript"].valueToCode(e,"NAME",h["JavaScript"].ORDER_ATOMIC),n="buy(".concat(t,",").concat(o,",").concat(o,");\n");return n},h["Blocks"].stock_fetch_price={init:function(){this.appendValueInput("Fetch").setCheck("Number").appendField("Fetch Price of Stock ID:"),this.appendDummyInput().appendField("And set to:").appendField(new h["FieldVariable"]("item"),"variable"),this.setInputsInline(!0),this.setPreviousStatement(!0,null),this.setNextStatement(!0,null),this.setColour(230),this.setTooltip("fetch stock price"),this.setHelpUrl("https://example.com")}},h["JavaScript"].stock_fetch_price=function(e){var t=h["JavaScript"].valueToCode(e,"Fetch",h["JavaScript"].ORDER_ATOMIC),o=h["JavaScript"].variableDB_.getName(e.getFieldValue("variable"),h["Variables"].NAME_TYPE),n="fetch_price(".concat(t,",").concat(o,");\n");return n};var v=o("3d20"),y=o.n(v),_=function(e){return e};h["prompt"]=function(e,t,o){y.a.fire({title:"Variable:",input:"text",inputAttributes:{autocapitalize:"off"},showCancelButton:!0,confirmButtonText:"Look up",showLoaderOnConfirm:!0,allowOutsideClick:function(){return!y.a.isLoading()}}).then((function(e){e.value&&o(_(e.value))}))};var g={name:"app",components:{BlocklyComponent:k},data:function(){return{code:"",options:{media:"media/",grid:{spacing:25,length:3,colour:"#ccc",snap:!0},zoom:{controls:!0,wheel:!0,startScale:1,maxScale:3,minScale:.3,scaleSpeed:1.2,pinch:!0},toolbox:{kind:"categoryToolbox",contents:[{kind:"category",name:"Logic",colour:"%{BKY_LOGIC_HUE}",contents:[{kind:"block",type:"controls_if"},{kind:"block",type:"logic_compare"},{kind:"block",type:"logic_operation"},{kind:"block",type:"logic_negate"},{kind:"block",type:"logic_boolean"}]},{kind:"category",name:"Loops",colour:"%{BKY_MATH_HUE}",contents:[{kind:"block",blockxml:"<block type='controls_repeat_ext'><value name='TIMES'><block type='math_number'><field name='NUM'>10</field></block></value></block>"},{kind:"block",type:"controls_whileUntil"}]},{kind:"category",name:"Math",colour:"%{BKY_MATH_HUE}",contents:[{kind:"block",blockxml:"<block type='math_number'><field name='NUM'>123</field></block>"},{kind:"block",type:"math_arithmetic"},{kind:"block",type:"math_single"}]},{kind:"category",name:"Text",colour:"%{BKY_TEXTS_HUE}",contents:[{kind:"block",type:"text"},{kind:"block",type:"text_length"},{kind:"block",type:"text_print"}]},{kind:"category",name:"Variables",colour:"%{BKY_VARIABLES_HUE}",custom:"VARIABLE"},{kind:"category",name:"Stocks",colour:"%{BKY_LOOPS_HUE}",contents:[{kind:"block",type:"stock_buy_simple"},{kind:"block",type:"stock_buy_prog"},{kind:"block",type:"stock_fetch_price"}]}]}}}},methods:{updateCode:function(){this.code=r.a.workspaceToCode(this.$refs.foo.workspace)}}},S=g,x=(o("034f"),o("6544")),C=o.n(x),T=o("7496"),w=o("40dc"),F=o("5bc1"),O=o("62ad"),E=o("553a"),A=o("f6c4"),N=o("2a7f"),V=Object(f["a"])(S,a,i,!1,null,null,null),I=V.exports;C()(V,{VApp:T["a"],VAppBar:w["a"],VAppBarNavIcon:F["a"],VCol:O["a"],VFooter:E["a"],VMain:A["a"],VToolbarTitle:N["a"]});var B=o("f309");n["a"].use(B["a"]);var M=new B["a"]({});n["a"].config.productionTip=!1,n["a"].config.ignoredElements=["field","block","category","xml","mutation","value","sep"],new n["a"]({vuetify:M,render:function(e){return e(I)}}).$mount("#app")},"656b":function(e,t,o){"use strict";o("55c6")},"85ec":function(e,t,o){}});
//# sourceMappingURL=app.25eae050.js.map