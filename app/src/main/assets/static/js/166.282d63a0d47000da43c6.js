webpackJsonp([166],{"45uB":function(t,e,s){"use strict";var i=s("7+S+");e.a={name:"cell-box",props:{isLink:Boolean,link:[String,Object],borderIntent:{type:Boolean,default:!0},noFlex:Boolean,alignItems:String},computed:{style:function(){if(this.alignItems)return{"align-items":this.alignItems}},className:function(){return{"vux-tap-active":this.isLink||!!this.link,"weui-cell_access":this.isLink||!!this.link,"vux-cell-no-border-intent":!this.borderIntent}}},methods:{onClick:function(){this.link&&s.i(i.a)(this.link,this.$router)}}}},F2IS:function(t,e,s){"use strict";var i=s("CKVb"),n=s("gpPJ"),a=s("swb9");i.a,n.a,a.a},J4vk:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("xcgb-box",[s("xcgb-head",{attrs:{title:"确认订单",alpha:1,keepAlive:!1,leftOptions:[{type:"left_arrow_black"}]}}),t._v(" "),s("div",{staticClass:"main"},[s("group",{attrs:{gutter:"0"}},[s("cell-box",[s("div",[s("div",{staticClass:"name"},[t._v("星巴克咖啡大促销30元代金券星巴克咖啡大促销30元代金券")]),t._v(" "),s("div",{staticClass:"priceAndNumber"},[s("span",[t._v("¥ "+t._s(t.price)+".00")]),s("span",[t._v("数量：1")])])])])],1),t._v(" "),s("group",[s("cell",{attrs:{title:"付款卡片",value:"6258****6820 聪明卡","is-link":""}})],1),t._v(" "),s("group",[s("cell",{attrs:{title:"付款方式"}}),t._v(" "),s("cell-box",[s("div",{staticClass:"paymentRadio"},[s("div",{class:{choiced:1===t.state},on:{click:function(e){t.paymentChange(1)}}},[t._v("广发信用卡")]),t._v(" "),s("div",{class:{choiced:2===t.state},on:{click:function(e){t.paymentChange(2)}}},[t._v("广发信用卡+积分")]),t._v(" "),s("div",{class:{choiced:3===t.state},on:{click:function(e){t.paymentChange(3)}}},[t._v("积分")])])])],1),t._v(" "),3===t.state?s("group",[s("div",{staticClass:"jifen"},[s("div",{staticClass:"line1"},[s("div",[t._v("抵扣积分")]),t._v(" "),t.notEnough?t._e():s("div",[t._v(t._s(t.consume.integral)+"积分")]),t._v(" "),t.notEnough?s("div",[t._v("积分不足")]):t._e()]),t._v(" "),s("div",{staticClass:"line2"},[t._v("抵扣后剩余"+t._s(t.leftIntegral)+"积分")]),t._v(" "),s("div",{staticClass:"line3"},[t._v(t._s(t.proportion)+"积分=1元")])])]):t._e(),t._v(" "),2===t.state?s("group",[s("div",{staticClass:"jifen"},[s("div",{staticClass:"line1"},[s("div",[t._v("抵扣积分")]),t._v(" "),t.notEnough?t._e():s("div",{staticClass:"choiceNumber"},[s("div",{class:{gray:1===t.numberSelect},on:{click:function(e){t.choice("down")}}},[t._v("-")]),t._v(" "),s("div",[t._v(t._s(t.consume.integral)+"分"),s("span",[t._v("/"+t._s(t.consume.money)+"元")])]),t._v(" "),s("div",{class:{gray:t.numberSelect===t.maxRange},on:{click:function(e){t.choice("up")}}},[t._v("+")])]),t._v(" "),t.notEnough?s("div",[t._v("积分不足")]):t._e()]),t._v(" "),s("div",{staticClass:"line2"},[t._v("抵扣后剩余"+t._s(t.leftIntegral)+"积分")]),t._v(" "),s("div",{staticClass:"line3"},[t._v("最高可用"+t._s(100*t.discount)+"%，"+t._s(t.proportion)+"积分=1元")])])]):t._e()],1),t._v(" "),s("div",[s("group",{staticStyle:{"border-top":"1px solid #e5e5e5"},attrs:{gutter:"0"}},[s("cell",[s("div",{staticClass:"spend",attrs:{slot:"title"},slot:"title"},[s("div",{staticClass:"price",attrs:{slot:"title",after:t.afterText},slot:"title"},[t._v(t._s(t.spend1))]),t._v(" "),2===t.state?s("div",{staticClass:"price",attrs:{slot:"title",after:"积分"},slot:"title"},[s("span",[t._v("+")]),t._v(t._s(t.spend2))]):t._e()]),t._v(" "),s("div",{staticClass:"btn"},[t._v("提交订单")])])],1)],1)],1)},n=[],a={render:i,staticRenderFns:n};e.a=a},"NLH/":function(t,e,s){"use strict";var i=s("CKVb"),n=s("gpPJ"),a=s("swb9");e.a={data:function(){return{maxRange:0,numberSelect:0,spend1:0,spend2:0,afterText:"元",notEnough:!1,leftIntegral:1e6,state:1,hasIntegral:1e6,price:20,discount:.5,proportion:600,consume:{integral:0,money:0}}},watch:{state:function(t){switch(t){case 1:this.afterText="元",this.spend1=this.price,this.consume.money=this.price,this.consume.integral=0;break;case 2:this.afterText="元";var e=this.price*this.discount*this.proportion;this.notEnough=this.hasIntegral<600,e>this.hasIntegral?this.maxRange=parseInt(this.hasIntegral/this.proportion):this.maxRange=parseInt(e/this.proportion),this.numberSelect=this.maxRange,this.consume.integral=this.maxRange*this.proportion,this.consume.money=this.price-this.maxRange,this.leftIntegral=this.hasIntegral-this.consume.integral,this.spend1=this.consume.money,this.spend2=this.consume.integral;break;case 3:this.afterText="积分",this.consume.integral=this.price*this.discount*this.proportion,this.spend1=this.consume.integral,this.notEnough=this.consume.integral>this.hasIntegral,this.leftIntegral=this.notEnough?this.hasIntegral:this.hasIntegral-this.consume.integral,this.consume.money=0}}},components:{Group:i.a,Cell:n.a,CellBox:a.a},methods:{paymentChange:function(t){this.state=t},choice:function(t){this.numberSelect="down"===t?this.numberSelect-1==0?1:this.numberSelect-1:this.numberSelect+1>this.maxRange?this.maxRange:this.numberSelect+1,this.consume.integral=this.numberSelect*this.proportion,this.consume.money=this.price-this.numberSelect,this.spend1=this.consume.money,this.spend2=this.consume.integral,this.leftIntegral=this.hasIntegral-this.consume.integral,console.log(this.numberSelect,this.maxRange)}}}},RzoO:function(t,e){},kauM:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"vux-cell-box weui-cell",class:t.className,style:t.style,on:{click:t.onClick}},[t._t("default")],2)},n=[],a={render:i,staticRenderFns:n};e.a=a},qJoS:function(t,e,s){"use strict";function i(t){s("RzoO")}Object.defineProperty(e,"__esModule",{value:!0});var n=(s("F2IS"),s("NLH/")),a=s("J4vk"),o=s("C7Lr"),c=i,l=o(n.a,a.a,!1,c,"data-v-33ad2fb0",null);e.default=l.exports},s43q:function(t,e){},swb9:function(t,e,s){"use strict";function i(t){s("s43q")}var n=(s("vSXs"),s("45uB")),a=s("kauM"),o=s("C7Lr"),c=i,l=o(n.a,a.a,!1,c,null,null);e.a=l.exports},vSXs:function(t,e,s){"use strict";var i=s("7+S+");Boolean,String,Object,Boolean,Boolean,String}});