webpackJsonp([305],{U27U:function(t,a,s){"use strict";var n=s("4YfN"),e=s.n(n),i=s("gpPJ"),r={"银联":"MH0229","本行":"MH0067","钱袋子":"MH0225"},o={"储蓄卡自动还款":"repay_setting_cxkRepay","广发基金钱袋子自动还款":"repay_setting_qdzRepay"};i.a},X5qd:function(t,a,s){"use strict";function n(t){s("eE7d")}Object.defineProperty(a,"__esModule",{value:!0});var e=(s("U27U"),s("rG92")),i=s("y0w1"),r=s("C7Lr"),o=n,c=r(e.a,i.a,!1,o,null,null);a.default=c.exports},eE7d:function(t,a){},rG92:function(t,a,s){"use strict";var n=s("4YfN"),e=s.n(n),i=s("gpPJ"),r={"银联":"MH0229","本行":"MH0067","钱袋子":"MH0225"},o={"储蓄卡自动还款":"repay_setting_cxkRepay","广发基金钱袋子自动还款":"repay_setting_qdzRepay"};a.a={name:"detail",components:{Cell:i.a},data:function(){return{params:this.$store.state.repaySettingStore.detail||this.$route.params||{}}},computed:{},methods:{modify:function(t){this.$router.push({name:o[t],params:e()({},this.params,{modify:!0})})},unSign:function(){var t=this;this.$vux.confirm.show({content:"确认撤消"+this.params.road+"？",confirmText:"撤消",cancelText:"暂不",onConfirm:function(){window.client.request({url:"/api/"+r[t.params.name]+".json",adapter:"CommonAdapter",isLogin:!0,funName:r[t.params.name],encrypt:!0,parameters:{creditCardNo:"select_cardVal"},success:function(a){t.$vux.toast.show({text:"撤消成功",onHide:function(){t.$router.go(-1)}})}})}})}},created:function(){console.log(this.params)}}},y0w1:function(t,a,s){"use strict";var n=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("xcgb-box",[s("xcgb-head",{attrs:{title:"详情",keepAlive:!1,leftOptions:[{type:"left_arrow_black"}]}}),t._v(" "),s("div",{staticClass:"main"},[s("div",{staticClass:"road"},[t._v(t._s(t.params.road))]),t._v(" "),s("div",{staticClass:"panel"},[s("div",{staticClass:"in-card"},[s("span",[t._v("还款卡片")]),s("span",[t._v(t._s(t.params.inCard))])]),t._v(" "),s("div",{staticClass:"in-currency"},[s("span",[t._v("还款币种")]),s("span",[t._v("人民币")])])]),t._v(" "),s("div",{staticClass:"panel"},[s("div",{staticClass:"out-card"},[s("span",[t._v("扣款卡片")]),s("span",[t._v(t._s(t.params.outCard))])]),t._v(" "),s("div",{staticClass:"out-money"},[s("span",[t._v("扣款金额")]),s("span",[t._v("每月账单金额")])]),t._v(" "),s("div",{staticClass:"out-currency"},[s("span",[t._v("扣款币种")]),s("span",[t._v("人民币")])])]),t._v(" "),s("cell",{staticClass:"how-to-auto-repay",attrs:{"is-link":"",title:"如何自动还款"}}),t._v(" "),s("ul",[s("li",{on:{click:function(a){t.modify(t.params.road)}}},[t._v("修改")]),t._v(" "),s("li",{on:{click:function(a){t.unSign()}}},[t._v("撤销")])])],1)],1)},e=[],i={render:n,staticRenderFns:e};a.a=i}});