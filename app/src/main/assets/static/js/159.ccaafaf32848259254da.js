webpackJsonp([159],{"+7I6":function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("xcgb-box",[n("xcgb-head",{attrs:{title:"添加信用卡",keepAlive:!1,leftOptions:[{type:"left_arrow_black"}]}}),e._v(" "),n("div",{staticClass:"main"},[n("p",{staticClass:"nwarnTips"},[e._v("您查询的卡片将添加到发现精彩")]),e._v(" "),n("group",{attrs:{gutter:"0"}},[n("x-input",{attrs:{title:"卡号",disabled:""},model:{value:e.accountNo,callback:function(t){e.accountNo=t},expression:"accountNo"}})],1),e._v(" "),n("group",[n("x-input",{attrs:{title:"身份证号",disabled:""},model:{value:e.certNo,callback:function(t){e.certNo=t},expression:"certNo"}}),e._v(" "),n("x-input",{attrs:{title:"姓名"},model:{value:e.userName,callback:function(t){e.userName=t},expression:"userName"}})],1),e._v(" "),n("group",[n("x-input",{attrs:{title:"手机号",disabled:""},model:{value:e.mobileNo,callback:function(t){e.mobileNo=t},expression:"mobileNo"}}),e._v(" "),n("x-input",{attrs:{title:"验证码",max:6},model:{value:e.smsCode,callback:function(t){e.smsCode=t},expression:"smsCode"}},[n("get-vcode-btn",{attrs:{slot:"right"},slot:"right"})],1)],1),e._v(" "),n("x-button",{attrs:{disabled:!e.clickControl}},[e._t("default",[e._v("确认添加")])],2)],1)],1)},r=[],a={render:o,staticRenderFns:r};t.a=a},"/rlA":function(e,t,n){"use strict";function o(e){n("t435")}var r=(n("o0jH"),n("bK72")),a=n("aWTp"),s=n("C7Lr"),c=o,i=s(r.a,a.a,!1,c,null,null);t.a=i.exports},"3+3O":function(e,t,n){"use strict";function o(e){n("kS4T")}Object.defineProperty(t,"__esModule",{value:!0});var r=(n("Csw4"),n("rckN")),a=n("+7I6"),s=n("C7Lr"),c=o,i=s(r.a,a.a,!1,c,null,null);t.default=i.exports},Csw4:function(e,t,n){"use strict";var o=n("CKVb"),r=n("fvyU"),a=n("/rlA");o.a,r.a,a.a},aWTp:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("x-button",{staticClass:"getVcodeBtn",attrs:{type:"",disabled:e.clickControl,mini:""},nativeOn:{click:function(t){return e.getVcode(t)}}},[e.sendMsg?n("span",{staticClass:"count_backwards"},[e._v(e._s(e.time+"s"))]):e._e(),e._v(" "),e.sendMsg?e._e():n("span",[e._v("获取")])])},r=[],a={render:o,staticRenderFns:r};t.a=a},bK72:function(e,t,n){"use strict";var o=n("rVsN"),r=n.n(o),a=n("IXui"),s=n("vp6S");t.a={name:"getVcodeBtn",data:function(){return{clickControl:!1,sendMsg:!1,time:59}},props:["vcodeFlag"],components:{XButton:a.a},methods:{getVcode:function(){var e=this,t=function(t){return new r.a(function(n,o){var r=t.slice(t.length-4,t.length-1);e.$vux.toast.show({type:"text",text:"已向尾号为 "+r+" 的手机号发送验证码",width:"4rem"}),n()})},o=function(){e.sendMsg=!0,e.clickControl=!0,e.$emit("getVcodeFun");var t=setInterval(function(){e.time--<=0&&(e.time=60,e.sendMsg=!1,e.clickControl=!1,window.clearInterval(t))},1e3)};console.log(this.vcodeFlag),"rCardSelfAct"!==this.vcodeFlag&&"vCardOpenSwip"!==this.vcodeFlag||n.i(s.d)().then(t).then(o)}}}},kS4T:function(e,t){},o0jH:function(e,t,n){"use strict";var o=n("rVsN"),r=n.n(o),a=n("IXui"),s=n("vp6S");a.a},rckN:function(e,t,n){"use strict";var o=n("CKVb"),r=n("fvyU"),a=n("/rlA");t.a={name:"vCardAddCard",data:function(){return{accountNo:"",certNo:"",userName:"",mobileNo:"",smsCode:""}},computed:{clickControl:function(){var e=/\w+/,t=/^\d{6}$/;return e.test(this.userName)&&t.test(this.smsCode)}},components:{Group:o.a,XInput:r.a,getVcodeBtn:a.a},methods:{},created:function(){}}},t435:function(e,t){},vp6S:function(e,t,n){"use strict";n.d(t,"e",function(){return c}),n.d(t,"c",function(){return i}),n.d(t,"d",function(){return u}),n.d(t,"a",function(){return d}),n.d(t,"b",function(){return l});var o=n("4YfN"),r=n.n(o),a=n("rVsN"),s=n.n(a),c=function(e,t){return new s.a(function(n,o){var a={url:"/api/CAMH0638.json",adapter:"CommonAdapter",funName:"",parameters:{tranCode:"MH0638",srcChannel:"MH",transferFlowNoNew:"",mobileNo:e,customerId:t,custName:"",endTime:"",startTime:""}};window.client.request(r()({},a,{success:function(e){var t=e.header,r=e.body;if("0"===t.errorCode){var a=r.showCard,s=r.cardInfos;n({showCard:a,cardInfos:s})}else o(r.em)}}))})},i=function(e){return new s.a(function(t,n){var o={url:"api/CAMH0234.json",adapter:"CommonAdapter",funName:"second_MH0234",isLogin:!0,parameters:{tranCode:"MH0234",srcChannel:"MH",cardNo:e}};window.client.request(r()({},o,{success:function(e){var o=e.header,r=e.body;"0"===o.errorCode?t(r.cardActiveCheck):n(r.em)}}))})},u=function(){return new s.a(function(e,t){var n={url:"api/CAMH0314.json",adapter:"CommonAdapter",funName:"",isLogin:!0,parameters:{mobileNo:"",busCode:"CA",SMSID:"F6",TEMPLATEID:"057F600258",STDINFOTYP:encodeURI("激活信用卡"),smsLimitFlag:"Y",SMSFlag:"1",TRADETYPE:encodeURI("发现精彩")}};window.client.request(r()({},n,{success:function(n){var o=n.header,r=n.body;"0"===o.errorCode&&"0"===r.ec?(e(r.mobileNo),console.log("R卡激活发送验证码")):t(r.em)}}))})},d=function(e){return new s.a(function(t,n){var o={url:"api/CAMH0083.json",adapter:"CommonAdapter",funName:"MH0083_unlogin",isLogin:!0,parameters:{tranCode:"MH0083",srcChannel:"MH",creditCardNo:"",certType:"",certNo:"",cardValidPeriod:"",cvv2Code:"",mobile:"",isNeedFlag:"1"}};window.client.request(r()({},o,{success:function(n){var o=n.header,r=n.body;"0"===o.errorCode&&"0"===r.ec?(t(),console.log("R卡校验成功正式激活")):e.$vux.toast.show({type:"text",text:r.em})}}))})},l=function(){return new s.a(function(e,t){var n={url:"api/CAMH0083.json",adapter:"CommonAdapter",funName:"MH0311_unlogin",isLogin:!0,parameters:{mobileNo:"",smsCode:"",busCode:"CO",safeToolType:"",accountNo:"",tranRange:"",validDate:"",CVV2:""}};window.client.request(r()({},n,{success:function(e){var t=e.header,n=e.body;"0"===t.errorCode&&"0"===n.ec?jQuery.goPage("cdbank_marketingCard","cdbank_marketingCard_open_body"):"PP010110"==n.ec||"PP010109"==n.ec?that.$vux.toast.show({type:"text",text:n.em}):that.$vux.alert.show({title:"卡片开通失败",content:"失败原因：系统错误",buttonText:"确认"})}}))})}}});