webpackJsonp([362],{"+4Sg":function(i,s,t){"use strict";var a=function(){var i=this,s=i.$createElement,t=i._self._c||s;return t("xcgb-box",[t("xcgb-head",{attrs:{title:"分类",alpha:1,keepAlive:!1,leftOptions:[{type:"left_arrow_black"}],rightOptions:[{type:"index_icon"}]},on:{rightHandler:i.goHome}}),i._v(" "),t("section",{staticClass:"main cgb-classify"},[t("div",{staticClass:"classify-menu"},[t("div",{staticClass:"cgb-classify-menu"},[t("ul",{staticClass:"classify-menu-list"},i._l(i.classifyMenu,function(s,a){return t("li",{key:a,class:{active:a==i.nowIndex},on:{click:function(t){i.menuChange(a,s.parent_id)}}},[i._v("\n            "+i._s(s.level_nm.length>5?s.level_nm.substr(0,5)+"...":s.level_nm)+"\n          ")])}))])]),i._v(" "),t("div",{staticClass:"classify-details"},[t("div",{staticClass:"cgb-classify-details"},[t("ul",{staticClass:"classify-list"},i._l(i.classifyDetails,function(s,a){return t("li",{key:a,on:{click:function(t){i.goClassifyProduct(s.level_nm)}}},[t("img",{attrs:{src:s.picture_url,alt:""}}),i._v(" "),t("span",[i._v(i._s(s.level_nm))])])}))])])])],1)},n=[],e={render:a,staticRenderFns:n};s.a=e},IFCp:function(i,s,t){"use strict";var a=t("4YfN"),n=t.n(a),e=t("HVJf");s.a={name:"classify",data:function(){return{nowIndex:"0"}},computed:n()({},t.i(e.c)("activityClassification",{classifyMenu:"menu",allDetails:"allDetails",classifyDetails:"classifyDetails"})),components:{},methods:n()({},t.i(e.d)("activityClassification",["click"]),t.i(e.e)("activityClassification",["loadMAL311"]),{goHome:function(){this.$router.push({name:"home_index"})},goClassifyProduct:function(i){this.$router.push({name:"activity_classification_classifyProduct",params:{brandName:i}})},menuChange:function(i,s){this.click(s),this.nowIndex=i}}),mounted:function(){this.loadMAL311()}}},aiJw:function(i,s,t){"use strict";var a=t("4YfN"),n=t.n(a),e=t("HVJf");n()({},t.i(e.c)("activityClassification",{classifyMenu:"menu",allDetails:"allDetails",classifyDetails:"classifyDetails"})),n()({},t.i(e.d)("activityClassification",["click"]),t.i(e.e)("activityClassification",["loadMAL311"]),{goHome:function(){this.$router.push({name:"home_index"})},goClassifyProduct:function(i){this.$router.push({name:"activity_classification_classifyProduct",params:{brandName:i}})},menuChange:function(i,s){this.click(s),this.nowIndex=i}})},ebXu:function(i,s,t){"use strict";function a(i){t("k2n9")}Object.defineProperty(s,"__esModule",{value:!0});var n=(t("aiJw"),t("IFCp")),e=t("+4Sg"),c=t("C7Lr"),l=a,o=c(n.a,e.a,!1,l,"data-v-2c6a94d0",null);s.default=o.exports},k2n9:function(i,s){}});