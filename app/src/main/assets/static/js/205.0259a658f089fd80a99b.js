webpackJsonp([205],{"/75B":function(t,s){},HsUD:function(t,s,i){t.exports=i.p+"static/img/img001.png"},"Ji/5":function(t,s,i){t.exports=i.p+"static/img/img002.png"},hSUV:function(t,s,i){"use strict";function o(t){i("/75B")}Object.defineProperty(s,"__esModule",{value:!0});var e=(i("wSGv"),i("wwQ+")),n=i("syPn"),a=i("C7Lr"),c=o,r=a(e.a,n.a,!1,c,null,null);s.default=r.exports},syPn:function(t,s,i){"use strict";var o=function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("xcgb-box",[o("xcgb-head",{attrs:{title:"收藏夹",keepAlive:!1,alpha:1,leftOptions:[{type:"left_arrow_black"}]}}),t._v(" "),o("div",{staticClass:"main"},[o("div",{staticClass:"collectionArea"},[o("div",{directives:[{name:"show",rawName:"v-show",value:0==t.length,expression:"length == 0"}],staticClass:"available"},[t._v("\n\t\t\t\t您暂无收藏商品。\n\t\t\t")]),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:0!==t.length,expression:"length!== 0"}],staticClass:"list"},[o("ul",t._l(t.product.resultList0,function(s,e){return o("li",{staticClass:"product"},[o("img",{staticClass:"productPhone",attrs:{src:s.picture_url,alt:""},on:{click:function(i){t.details(s.goods_id,s.ordertype_id)}}}),t._v(" "),o("div",{staticClass:"productRight",on:{click:function(i){t.details(s.goods_id,s.ordertype_id)}}},[o("p",{staticClass:"productRight1"},[t._v(t._s(s.goods_nm))]),t._v(" "),o("p",{staticClass:"productRight2"},[t._v("￥"+t._s(s.goods_price_f)+"*"),o("span",[t._v(t._s(s.stages_num)+"期")])]),t._v(" "),o("p",{staticClass:"productRight3"},[t._v("积分可抵30%")]),t._v(" "),o("img",{staticClass:"integral",attrs:{src:i("HsUD"),alt:""}})]),t._v(" "),o("div",{staticClass:"cancel"},[o("img",{attrs:{src:i("Ji/5"),alt:""}}),t._v(" "),o("x-button",{staticClass:"collectionLast",attrs:{type:"primary"},nativeOn:{click:function(i){t.pname(s.goods_id,"middle")}}},[t._v("取消")]),t._v(" "),o("toast",{attrs:{type:"text",time:800,"is-show-mask":"",text:t.omit,position:t.position},model:{value:t.showPositionValue,callback:function(s){t.showPositionValue=s},expression:"showPositionValue"}})],1)])}))])])])],1)},e=[],n={render:o,staticRenderFns:e};s.a=n},wSGv:function(t,s,i){"use strict";var o=i("IXui"),e=i("f4gh");o.a,e.a},"wwQ+":function(t,s,i){"use strict";var o=i("IXui"),e=i("f4gh");s.a={name:"cgbNewFav",data:function(){return{product:"",length:"1",cust_id:"",result:"",position:"default",showPositionValue:!1,omit:""}},components:{XButton:o.a,Toast:e.a},methods:{goBack:function(){window.client.goBack()},details:function(t,s){console.log(t),console.log(s)},updata:function(){var t=this.cust_id;this.showPositionValue=!0,this.loadMAL302(t)},pname:function(t,s){var i=this;this.position=s,window.client.request({url:"/api/MAL303.json",adapter:"newCommonMallAdapter",procedure:"MAL303",parameters:'[{"tranCode":"MAL303","origin":"09","mallType":"01","id":'+t+',"cust_id":'+this.cust_id+"}]",success:function(t){i.result=t.invocationResult;var s=i;"000000"==i.result.returnCode?setTimeout(function(){s.updata(),s.omit="删除成功"},500):(s.omit="删除失败",s.showPositionValue=!0)},error:function(t){console.log(t)}})},showPosition:function(t){this.position=t,this.showPositionValue=!0},loadMAL302:function(t){var s=this;window.client.request({url:"/api/MAL302.json",adapter:"newCommonMallAdapter",procedure:"MAL302",parameters:'[{"tranCode":"MAL302","origin":"09","cust_id":'+t+',"currentPage":"1","rowsPage":"10"}]',success:function(t){s.product=t.invocationResult,s.cust_id=s.cust_id,s.length=t.invocationResult.resultList0.length},error:function(t){console.log(t)}})}},created:function(){this.cust_id=this.$store.getters.getStateKey().customerId;var t=this.cust_id;this.loadMAL302(t)}}}});