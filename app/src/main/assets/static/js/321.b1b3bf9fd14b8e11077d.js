webpackJsonp([321],{DK44:function(t,e,a){"use strict";var n=a("IXui");n.a},KGCa:function(t,e,a){"use strict";var n=a("IXui");e.a={name:"regsterEnd",components:{XButton:n.a},methods:{completed:function(){this.$router.push({name:"home_site"})},addCard:function(){this.$router.push({name:"cdbank_add_credit"})},activeCard:function(){this.$router.push({name:"activeCard"})}}}},aBN8:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("xcgb-box",[a("xcgb-head",{attrs:{title:"快速注册",keepAlive:!1,leftOptions:[{type:"left_arrow_black",preventGoBack:!0}],rightOptions:[{type:"text",str:"完成"}]},on:{leftHandler:t.completed,rightHandler:t.completed}}),t._v(" "),a("div",{staticClass:"main"},[a("div",{staticClass:"tips"},[a("i")]),t._v(" "),a("x-button",{staticClass:"add-card",attrs:{"action-type":"button"},nativeOn:{click:function(e){return t.addCard(e)}}},[t._v("添加卡片到APP")]),t._v(" "),a("p",[t._v("添加卡片后即可领取APP专享优惠")]),t._v(" "),a("x-button",{staticClass:"active-card",attrs:{"action-type":"button"},nativeOn:{click:function(e){return t.activeCard(e)}}},[t._v("激活卡片")])],1)],1)},i=[],r={render:n,staticRenderFns:i};e.a=r},oucQ:function(t,e){},pnZk:function(t,e,a){"use strict";function n(t){a("oucQ")}Object.defineProperty(e,"__esModule",{value:!0});var i=(a("DK44"),a("KGCa")),r=a("aBN8"),c=a("C7Lr"),s=n,o=c(i.a,r.a,!1,s,null,null);e.default=o.exports}});