webpackJsonp([301],{"/oue":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("xcgb-box",[n("xcgb-head",{attrs:{title:"协议",keepAlive:!1,leftOptions:[{type:"left_arrow_black"}]}}),t._v(" "),n("div",{staticClass:"main"},[n("div",{staticClass:"agreement"},[n("h3",{staticClass:"agreeTitle"},[t._v(t._s(t.title))]),t._v(" "),n("p",{domProps:{innerHTML:t._s(t.content)}}),t._v(" "),n("p",{staticClass:"tip"},[t._v("温馨提示")]),t._v(" "),n("div",[t._v(t._s(t.agreeTip))])])])],1)},r=[],c={render:a,staticRenderFns:r};e.a=c},"DK+M":function(t,e,n){"use strict";function a(t){n("JpmU")}Object.defineProperty(e,"__esModule",{value:!0});var r=(n("E+Dj"),n("t4xv")),c=n("/oue"),i=n("C7Lr"),s=a,o=i(r.a,c.a,!1,s,null,null);e.default=o.exports},"E+Dj":function(t,e,n){"use strict"},JpmU:function(t,e){},t4xv:function(t,e,n){"use strict";e.a={name:"agreement",data:function(){return{title:"",content:"",agreeTip:""}},created:function(){var t=this;window.client.request({url:"/api/agreement.json",adapter:"CommonAdapter",procedure:"control",parameters:{funName:"second_accept",type:"json",value:"U2FsdGVkX1/or9Cx8lRAGnakSiZXsAEtOmR+53t9OeIT4rLKz8t7Sk0UtWzy3TrWl+phYXU/2MoO/wmJ0RwLXGTuXZh39XDMHhfcUV+zKNuQOC/U0fkzcg==",cdbank_sign:"4ac49c47d2357880cf041012b793e5ae",cdbank_timeStamp:"20171127112126"},success:function(e){var n=e.root.cd;t.title=n.title,t.content=n.text,t.agreeTip=n.tips}})}}}});