webpackJsonp([54],{"/Mnx":function(e,t,s){"use strict";function a(e){s("ho7r")}Object.defineProperty(t,"__esModule",{value:!0});var i=(s("1gTo"),s("R0zq")),n=s("a+Nd"),o=s("C7Lr"),r=a,l=o(i.a,n.a,!1,r,null,null);t.default=l.exports},"1HA+":function(e,t){},"1gTo":function(e,t,s){"use strict";var a=s("3cXf"),i=s.n(a),n=s("fvyU"),o=s("IXui"),r=s("gpPJ"),l=s("CKVb"),c=s("4s6/"),u=s("neaj"),d=s("f4gh"),p=s("Nqtu"),f=s("sT18"),h=s("u7Zk"),v=s("HX9k");n.a,o.a,r.a,l.a,c.a,u.a,d.a,p.a,h.a,v.a},"1vb5":function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("group",{attrs:{gutter:0}},[s("cell",{attrs:{"is-link":""},nativeOn:{click:function(t){return e.selectCard(t)}}},[s("i",{attrs:{slot:"title"},slot:"title"}),e._v(" "),s("span",{staticClass:"curCard",attrs:{slot:"title"},slot:"title"},[e._v("\n        "+e._s(e.cardNoAndName)+"\n      ")])])],1),e._v(" "),s("select-card",{attrs:{cardList:e.cardArr},on:{clickNormalItem:e.clickNormalCard},model:{value:e.cardFlag,callback:function(t){e.cardFlag=t},expression:"cardFlag"}})],1)},i=[],n={render:a,staticRenderFns:i};t.a=n},"2hw5":function(e,t,s){"use strict";var a=s("hArn");t.a={name:"check-icon",components:{Icon:a.a},methods:{updateValue:function(){this.$emit("update:value",!this.value)}},props:{value:{type:Boolean,default:!1},type:{type:String,default:"default"}}}},"44WN":function(e,t,s){"use strict";t.a=function(){return{options:{type:Array,required:!0},value:[String,Number],fillMode:{type:Boolean,default:!1},fillPlaceholder:{type:String,default:"其他"},fillLabel:{type:String,default:"其他"},disabled:Boolean,selectedLabelStyle:Object}}},"4jVk":function(e,t,s){"use strict";s.d(t,"b",function(){return a}),s.d(t,"a",function(){return i});var a={options:{type:Array,required:!0},value:[String,Number],fillMode:{type:Boolean,default:!1},fillPlaceholder:{type:String,default:"其他"},fillLabel:{type:String,default:"其他"},disabled:Boolean,selectedLabelStyle:Object},i={title:[String,Number],value:[String,Number,Array],isLink:Boolean,isLoading:Boolean,inlineDesc:[String,Number],primary:{type:String,default:"title"},link:[String,Object],valueAlign:[String,Boolean,Number],borderIntent:{type:Boolean,default:!0},disabled:Boolean,arrowDirection:String,alignItems:String}},"8v0u":function(e,t){function s(e,t,s){if("function"==typeof Array.prototype.find)return e.find(t,s);s=s||this;var a,i=e.length;if("function"!=typeof t)throw new TypeError(t+" is not a function");for(a=0;a<i;a++)if(t.call(s,e[a],a,e))return e[a]}e.exports=s},HX9k:function(e,t,s){"use strict";function a(e){s("1HA+")}var i=(s("oe7C"),s("YrSv")),n=s("1vb5"),o=s("C7Lr"),r=a,l=o(i.a,n.a,!1,r,null,null);t.a=l.exports},HrLf:function(e,t,s){"use strict";var a=s("hRKE"),i=s.n(a),n=s("4YfN"),o=s.n(n),r=s("4jVk"),l=s("8v0u"),c=s.n(l),u=s("CKVb"),d=s("gpPJ"),p=s("cTn1"),f=s("sm8H"),h=s("Jp5S");delete r.a.value;u.a,p.a,f.a,d.a,h.a,o()({placeholder:String,readonly:Boolean},r.a,r.b,{showAddCard:{type:Boolean,default:!1},displayV:String,listCards:{key:String,value:String},options:""})},JwlZ:function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"weui-cells_radio",class:e.disabled?"vux-radio-disabled":""},[e._l(e.options,function(t,a){return s("label",{staticClass:"weui-cell weui-cell_radio weui-check__label",attrs:{for:"radio_"+e.uuid+"_"+a}},[s("div",{staticClass:"weui-cell__bd"},[e._t("each-item",[s("p",[s("img",{directives:[{name:"show",rawName:"v-show",value:t&&t.icon,expression:"one && one.icon"}],staticClass:"vux-radio-icon",attrs:{src:t.icon}}),e._v(" "),s("span",{staticClass:"vux-radio-label",style:e.currentValue===e.getKey(t)?e.selectedLabelStyle||"":""},[e._v(e._s(e._f("getValue")(t)))])])],{icon:t.icon,label:e.getValue(t),index:a,selected:e.currentValue===e.getKey(t)})],2),e._v(" "),s("div",{staticClass:"weui-cell__ft"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.currentValue,expression:"currentValue"}],staticClass:"weui-check",attrs:{type:"radio",id:e.disabled?"":"radio_"+e.uuid+"_"+a},domProps:{value:e.getKey(t),checked:e._q(e.currentValue,e.getKey(t))},on:{change:function(s){e.currentValue=e.getKey(t)}}}),e._v(" "),s("span",{staticClass:"weui-icon-checked"})])])}),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:e.fillMode,expression:"fillMode"}],staticClass:"weui-cell"},[s("div",{staticClass:"weui-cell__hd"},[s("label",{staticClass:"weui-label",attrs:{for:""}},[e._v(e._s(e.fillLabel))])]),e._v(" "),s("div",{staticClass:"weui-cell__bd"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.fillValue,expression:"fillValue"}],staticClass:"weui-input needsclick",attrs:{type:"text",placeholder:e.fillPlaceholder},domProps:{value:e.fillValue},on:{blur:function(t){e.isFocus=!1},focus:function(t){e.onFocus()},input:function(t){t.target.composing||(e.fillValue=t.target.value)}}})]),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:""===e.value&&!e.isFocus,expression:"value==='' && !isFocus"}],staticClass:"weui-cell__ft"},[s("i",{staticClass:"weui-icon-warn"})])])],2)},i=[],n={render:a,staticRenderFns:i};t.a=n},OmWI:function(e,t){},R0zq:function(e,t,s){"use strict";var a=s("3cXf"),i=s.n(a),n=s("fvyU"),o=s("IXui"),r=s("gpPJ"),l=s("CKVb"),c=s("4s6/"),u=s("neaj"),d=s("f4gh"),p=s("Nqtu"),f=s("sT18"),h=s("u7Zk"),v=s("HX9k");t.a={name:"openSecurityGuard",data:function(){return{typeLists1:["包月(4元/月)","包年(48元/年)"],msgType:"",inLow:"",outLow:"",mobileNo:"",messageCode:"",time:"60",sendMsgDisabled:!1,demo2:!0,showToastFlag:!1,show:!1,text:"",props:{label:11231233123},subCard:"0",subCardFlag:"",result:"",result_15:"",sst_smsStatus:"",sst_ReservedField2:"",sst_resultArry:{},comboDes:"",loadMH0161_1:"",result_162:"",firmMobile:"",information:{},soleId:"0",list:"",deputy:""}},computed:{getUserInfo:function(){return this.$store.getters.getStateKey("WL-Authentication-Success.UserInfoAuthRealm.attributes.data").data},status:function(){if(""!=this.inLow&&""!=this.outLOw&&""!=this.mobileNo&&this.messageCode.length>5&&1==this.demo2)return!0}},components:{XInput:n.a,XButton:o.a,Cell:r.a,Group:l.a,XSwitch:c.a,CheckIcon:u.a,Toast:d.a,Countdown:p.a,PopupRadio:h.a,Esel:v.a},methods:{changeStyle:function(e){console.log("后期测试"+e),this.comboDes_li="01",this.comboDes=e},oninputPhone:function(){var e=/^1[3|4|5|7|8][0-9]{9}$/;11!=this.mobileNo.length||e.test(this.mobileNo)||s.i(f.a)("输入手机号不正确！")},confirmOpen:function(){1==this.loadMH0161_1?0!=this.sst_resultArry.sst_smsStatus&&1!=this.sst_resultArry.sst_smsStatus||"99999999"==this.sst_resultArry.sst_ReservedField2?this.loadMH0161_15(this.customerId,this.deputy):(this.show=!1,s.i(f.a)("您已经开通我行瞬时通服务,无法开通安全卫士。")):this.show=!1},getVcode:function(){var e=this;if(console.log(123),this.getUserInfo.customerId){var t=this.getUserInfo.customerId.slice(this.getUserInfo.customerId.length-4);s.i(f.b)({accountNo:this.getUserInfo.customerId,mobileNo:this.mobileNo,param:t}).then(function(t){s.i(f.a)(t),e.sendMsgDisabled=!0;var a=window.setInterval(function(){this.time--<=0&&(this.time=60,this.sendMsgDisabled=!1,window.clearInterval(a))},1e3)}).catch(function(e){s.i(f.a)(e)})}},goDeal:function(){this.$router.push({name:"security_center_agreement"})},sendDebit:function(){var e=/^1[3|4|5|7|8][0-9]{9}$/,t=this.inLow,a=this.outLow,i=this.messageCode;return""==t?(s.i(f.a)("转入起点金额不能为空，请重新输入。"),!1):""==a?(s.i(f.a)("转入起点金额不能为空，请重新输入。"),!1):""==this.mobileNo?(s.i(f.a)("手机号不能为空，请重新输入。"),!1):this.mobileNo.length<11?(s.i(f.a)("手机号长度小于11位，请重新输入。"),!1):e.test(this.mobileNo)?""==i?(s.i(f.a)("短信验证码不能为空，请重新输入。"),!1):i.length<6?(s.i(f.a)("短信验证码长度小于6位，请重新输入。"),!1):/^[0-9]{6}$/.test(i)?void this.dredge(this.getUserInfo.customerId,this.deputy):(s.i(f.a)("短信验证码格式错误，请重新输入"),!1):(s.i(f.a)("手机号格式错误，请重新输入！"),!1)},loadMH0161:function(e,t){var s=this,a="";a=t?"MH0161":"MH0381",window.client.request({ifpUrl:"/mp/MP1080.do",url:"/api/MH0161li.json",isLogin:!0,adapterName:"CommonAdapter",funName:""+a,parameters:{smsSignAccNo:e,smsId:"11"},success:function(e){s.sst_resultArry.sst_smsStatus="-1",s.sst_resultArry.sst_ReservedField2="-1","0"==e.ec?(s.sst_smsStatus=e.smsStatus,s.sst_ReservedField2=e.ReservedField2,s.sst_resultArry.sst_smsStatus==s.sst_smsStatus&&s.sst_smsStatus,s.sst_resultArry.sst_ReservedField2==s.sst_ReservedField2&&s.sst_ReservedField2,s.loadMH0161_1=1):(s.loadMH0161_1=0,s.$vux.toast.show({text:"MH0161接口",type:"text",height:"10rem",width:"60%"}))},error:function(){console.log(a+"'接口错误'")}})},loadMH0161_15:function(e,t){var a=this,i="";i=t?"MH0161":"MH0381",window.client.request({url:"/api/MH0161li.json",isLogin:!0,adapterName:"CommonAdapter",funName:""+i,parameters:"{'smsSignAccNo':"+e+",'smsId':'15'}",success:function(e){if("0"!=e.ec)return s.i(f.a)("MH0161_15接口"),!1;var t=e.smsStatus;"0"==t||"1"==t?a.$router.push({name:"security_guard_securityGuard"}):a.show=!0},error:function(){console.log("接口loadMH0161_15错误")}})},loadMH0179:function(){var e=this;window.client.request({url:"/api/MH0179.json",adapterName:"CommonAdapter",isLogin:!0,funName:"second_MH0179",params:"[{'tranCode':'MH0179','srcChannel':'MH','cardNo':"+this.accountNo+"}]",success:function(t){var a=t.root;"0"==a.ec&&a.cd.firmMobile?e.firmMobile=a.cd.firmMobile:s.i(f.a)("未能查询到关联的手机号码")},error:function(){console.log("MH0179接口错误")}})},esel:function(e){console.log(e)},dredge:function(e,t){var a=this;var n="";n="包月(4元/月)"==this.comboDes?0:1;var o={smsId:"15",feeAcctType:"1",personalData:"",modelPerData:"",mobileNum:"1",iOpenGuardMobileList:{smsStatus:"0"},busCode:"22"};o.signUpAcct=e,o.feeAcct=e,o.feeType=n,o.smsId="15",o.inStartAmout=this.inLow,o.outStartAmout=this.outLow,o.smsCode=this.messageCode,o.mobileNo=this.mobileNo,s.i(f.c)(o).then(function(t){var s={comboDes:n,cash_in:a.inLow,cash_out:a.outLow,mobileNo:t,cardNo:e,flag:"0"},o=i()(s);sessionStorage.setItem("information",o),a.$router.push({name:"security_guard_success"})}).catch(function(e){a.$router.push({name:"security_guard_fail"})})}},beforeCreate:function(){var e=this.$route.params,t=i()(e);sessionStorage.setItem("information",t)},created:function(){if("00"==this.getUserInfo.userLogonType){var e=this.$route.params;if(void 0!=e){var t="1"==e.subCardFlag?"1":"0";this.list&&(this.list.cardNoAndName.substring(6,7)&&"1"==t?this.deputy="1":this.deputy="0")}this.loadMH0161(this.getUserInfo.customerId,this.deputy)}else this.$router.push({name:"cdbank_add_credit"})}}},SPHO:function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"vux-check-icon",on:{click:e.updateValue}},[s("icon",{directives:[{name:"show",rawName:"v-show",value:"default"===e.type&&e.value,expression:"type === 'default' && value"}],attrs:{type:"success"}}),e._v(" "),s("icon",{directives:[{name:"show",rawName:"v-show",value:"plain"===e.type&&e.value,expression:"type === 'plain' && value"}],attrs:{type:"success_circle"}}),e._v(" "),s("icon",{directives:[{name:"show",rawName:"v-show",value:!e.value,expression:"!value"}],attrs:{type:"circle"}}),e._v(" "),s("span",[e._t("default")],2)],1)},i=[],n={render:a,staticRenderFns:i};t.a=n},YrSv:function(e,t,s){"use strict";var a=s("CKVb"),i=s("gpPJ");t.a={name:"",data:function(){return{cardFlag:!1,cardNoAndName:""}},components:{Group:a.a,Cell:i.a},computed:{getUserInfo:function(){return this.$store.getters.getStateKey("WL-Authentication-Success.UserInfoAuthRealm.attributes.data").data},cardArr:function(){var e={};e.normal=[];for(var t=this.getUserInfo.creditCardList,s=0;s<t.length;s++){var a={};a.value=t[s].accountNo,a.key=t[s].accountNo.substr(0,4)+"****"+t[s].accountNo.substr(t[s].accountNo.length-4,4)+" "+t[s].cardType,a.iconType="CGB",a.selected=!1,e.normal.push(a)}return e}},methods:{clickNormalCard:function(e){this.cardNoAndName=e.key,this.$emit("card",e)},selectCard:function(){this.cardFlag=!0}},created:function(){var e=JSON.parse(sessionStorage.getItem("information"));void 0==e||null==e?(this.cardNoAndName=this.cardArr.normal[0].key,this.$emit("card",this.cardArr.normal)):(this.cardNoAndName=e.cardNoAndName,this.$emit("card",e))}}},"a+Nd":function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("xcgb-box",[s("xcgb-head",{attrs:{title:"安全卫士",keepAlive:!1,leftOptions:[{type:"left_arrow_black"}]}}),e._v(" "),s("div",{staticClass:"main"},[s("div",{staticClass:"openSecurityGuard"},[s("div",{staticClass:"popup-group"},[s("group",{attrs:{gutter:0}},[s("esel",{on:{card:e.esel}})],1),e._v(" "),e.show?s("group",{attrs:{gutter:10}},[s("popup-radio",{staticClass:"combo",style:{textAlign:"left"},attrs:{title:"套餐类型",options:e.typeLists1,showAddCard:!1},on:{changeStyle:e.changeStyle},scopedSlots:e._u([{key:"each-item",fn:function(t){return[e._v(" "+e._s(t.label)+" ")]}}])})],1):e._e()],1),e._v(" "),e.show?s("group",[s("x-input",{attrs:{title:"转入起点",type:"number",placeholder:"请输入短信通知最低金额"},model:{value:e.inLow,callback:function(t){e.inLow=t},expression:"inLow"}}),e._v(" "),s("x-input",{attrs:{title:"转出起点",type:"number",placeholder:"请输入短信通知最低金额"},model:{value:e.outLow,callback:function(t){e.outLow=t},expression:"outLow"}})],1):e._e(),e._v(" "),e.show?s("group",[s("x-input",{attrs:{title:"手机号码",type:"text",max:11,placeholder:"请输入您的手机号码"},on:{input:e.oninputPhone},model:{value:e.mobileNo,callback:function(t){e.mobileNo=t},expression:"mobileNo"}}),e._v(" "),s("x-input",{attrs:{title:"验证码",max:6,placeholder:"请输入短信验证码"},model:{value:e.messageCode,callback:function(t){e.messageCode=t},expression:"messageCode"}},[s("x-button",{staticClass:"getVcode",attrs:{slot:"right",type:"button",mini:""},nativeOn:{click:function(t){return e.getVcode(t)}},slot:"right"},[e.sendMsgDisabled?s("span",{staticClass:"obtain_contentp"},[e._v(e._s(e.time+"s"))]):e._e(),e._v(" "),e.sendMsgDisabled?e._e():s("span",{staticClass:"obtain_contentd"},[e._v("获取")])])],1)],1):e._e(),e._v(" "),e.show?e._e():s("p",{staticClass:"contain"},[e._v("如卡片开通广发卡交易安全卫士服务，将在保障期内享受免费即时交易短信服务，未避免重复扣费，该卡之前开通的瞬时通服务将于到期日后不再自动续订。")]),e._v(" "),s("div",{staticClass:"tips"},[e.show?s("check-icon",{attrs:{value:e.demo2,type:"plain"},on:{"update:value":function(t){e.demo2=t}}},[s("span",[e._v("已阅读并同意")]),s("a",{on:{click:e.goDeal}},[e._v("《广发银行安全卫士业务章程》")])]):e._e()],1),e._v(" "),e.show?s("x-button",{attrs:{type:"primary",disabled:!e.status},nativeOn:{click:function(t){return e.sendDebit(t)}}},[e._v("确认开通")]):e._e(),e._v(" "),e.show?e._e():s("x-button",{attrs:{type:"primary"},nativeOn:{click:function(t){return e.confirmOpen(t)}}},[e._v("确认")]),e._v(" "),s("toast",{attrs:{value:e.showToastFlag,type:"text",width:"80%"}},[s("p",{staticClass:"tips"},[e._v(e._s(e.text))])])],1)])],1)},i=[],n={render:a,staticRenderFns:i};t.a=n},dl3a:function(e,t,s){"use strict";s.d(t,"a",function(){return n}),s.d(t,"b",function(){return o}),s.d(t,"c",function(){return r});var a=s("hRKE"),i=s.n(a),n=function(e){return"object"===(void 0===e?"undefined":i()(e))?e.value:e},o=function(e){return"object"===(void 0===e?"undefined":i()(e))?e.key:e},r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1];if(!e.length)return t;if("string"==typeof e[0])return t;var s=e.filter(function(e){return e.key===t});return s.length?s[0].value||s[0].label:t}},fr0w:function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("cell",{staticClass:"select-card",attrs:{title:e.displayID,value:e.currentValue,"is-link":!e.readonly,"value-align":e.valueAlign},nativeOn:{click:function(t){return e.show(t)}}},[!e.displayValue&&e.placeholder?a("span",{staticClass:"vux-cell-placeholder"},[e._v(e._s(e.placeholder))]):e._e(),e._v(" "),a("span",{attrs:{slot:"icon"},slot:"icon"},[e._t("icon",[e._v("套餐类型"),a("span",{staticClass:"select-span"},[e._v(e._s(e.package))])])],2),e._v(" "),a("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[a("popup",{staticClass:"select-card-popup",staticStyle:{"background-color":"#f6f6f6"},on:{"on-hide":function(t){e.$emit("on-hide")},"on-show":function(t){e.$emit("on-show")}},model:{value:e.showPopup,callback:function(t){e.showPopup=t},expression:"showPopup"}},[e._t("popup-header",null,{options:e.options,value:e.currentValue}),e._v(" "),a("div",{staticClass:"popup-title"},[a("img",{attrs:{src:s("x0Ou"),alt:""},on:{click:e.hide}}),e._v(" "),a("span",[e._v("请选择")])]),e._v(" "),a("radio",{staticStyle:{"background-color":"#fff"},attrs:{options:e.options,"fill-mode":!1},on:{"on-change":e.onValueChange},scopedSlots:e._u([{key:"each-item",fn:function(t){return[e._t("each-item",[a("p",[a("img",{directives:[{name:"show",rawName:"v-show",value:t.icon,expression:"props.icon"}],staticClass:"vux-radio-icon",attrs:{src:t.icon}}),e._v(" "),a("span",{staticClass:"vux-radio-label"},[e._v(e._s(t.label))])])],{icon:t.icon,label:t.label,index:t.index})]}}]),model:{value:e.currentValue,callback:function(t){e.currentValue=t},expression:"currentValue"}}),e._v(" "),e.showAddCard?a("group",{attrs:{gutter:10}},[e._l(e.listCards,function(t,s){return a("cell",{key:s,attrs:{title:t.key,isLink:!0,item:t.key},nativeOn:{click:function(s){e.toAddCard(t.key)}}})}),e._v(" "),a("cell",{attrs:{title:"添加卡片",isLink:!0},nativeOn:{click:function(t){e.toAddCard("a")}}})],2):e._e()],2)],1)])},i=[],n={render:a,staticRenderFns:i};t.a=n},ho7r:function(e,t){},jf31:function(e,t,s){"use strict";function a(e,t){for(var s=e.length;s--;)if(e[s]===t)return!0;return!1}var i=s("qWCq"),n=s("dl3a"),o=s("44WN");t.a={name:"radio",mixins:[i.a],filters:{getValue:n.a,getKey:n.b},props:s.i(o.a)(),created:function(){this.handleChangeEvent=!0},methods:{getValue:n.a,getKey:n.b,onFocus:function(){this.currentValue=this.fillValue||"",this.isFocus=!0}},watch:{value:function(e){this.currentValue=e},currentValue:function(e){var t=a(this.options,e);""!==e&&t&&(this.fillValue=""),this.$emit("on-change",e,s.i(n.c)(this.options,e)),this.$emit("input",e)},fillValue:function(e){this.fillMode&&this.isFocus&&(this.currentValue=e)}},data:function(){return{fillValue:"",isFocus:!1,currentValue:this.value}}}},kR1L:function(e,t){},neaj:function(e,t,s){"use strict";function a(e){s("OmWI")}var i=(s("s7ZW"),s("2hw5")),n=s("SPHO"),o=s("C7Lr"),r=a,l=o(i.a,n.a,!1,r,null,null);t.a=l.exports},oe7C:function(e,t,s){"use strict";var a=s("CKVb"),i=s("gpPJ");a.a,i.a},qCHm:function(e,t,s){"use strict";var a=s("hRKE"),i=s.n(a),n=s("4YfN"),o=s.n(n),r=s("4jVk"),l=s("8v0u"),c=s.n(l),u=s("CKVb"),d=s("gpPJ"),p=s("cTn1"),f=s("sm8H"),h=s("Jp5S");delete r.a.value,t.a={name:"selectCard",components:{Group:u.a,Popup:p.a,Radio:f.a,Cell:d.a},directives:{TransferDom:h.a},props:o()({placeholder:String,readonly:Boolean},r.a,r.b,{showAddCard:{type:Boolean,default:!1},displayV:String,listCards:{key:String,value:String},options:""}),data:function(){return{showPopup:!1,currentValue:this.value,package:"",displayID:""}},computed:{displayValue:function(){var e=this;if(!this.options.length)return"";if("object"===i()(this.options[0])){var t=c()(this.options,function(t){return t.key===e.currentValue});if(t)return t.value}return this.currentValue}},methods:{onValueChange:function(e){this.hide(),this.package=e,this.$emit("changeStyle",e)},show:function(){this.readonly||(this.showPopup=!0)},hide:function(){this.showPopup=!1},toAddCard:function(e){this.showPopup=!1,"a"==e?console.log("跳转到挂卡页面"):this.displayID=e}},watch:{value:function(e){this.currentValue=e},currentValue:function(e){this.$emit("input",e),this.$emit("on-change",e)}},created:function(){this.displayID=void 0==this.options[0]?this.displayV:this.options[0],this.package=this.options[0]},updated:function(){this.displayID=void 0==this.options[0]?this.displayV:this.options[0]}}},qyAu:function(e,t,s){"use strict";function a(e,t){for(var s=e.length;s--;)if(e[s]===t)return!0;return!1}var i=s("qWCq"),n=s("dl3a"),o=s("44WN");i.a,n.a,n.b,s.i(o.a)(),n.a,n.b},r36s:function(e,t){},s7ZW:function(e,t,s){"use strict";var a=s("hArn");a.a,Boolean,String},sT18:function(e,t,s){"use strict";s.d(t,"c",function(){return n}),s.d(t,"a",function(){return r}),s.d(t,"b",function(){return l});var a=s("rVsN"),i=s.n(a),n=function(e){return new i.a(function(t,s){window.client.request({ifpUrl:"/mp/MP1081.do",url:"/api/MH0162.json",adapterName:"CommonAdapter",isLogin:!0,parameters:e,success:function(e){if("0"==e.ec){var a=e.cd.smsMobile;t(a)}else if("PP010110"==e.ec||"PP010109"==e.ec||"EMSBNULL"==e.ec||"PA040304"==e.ec){var i=o(e.ec,e.em);r(i)}else s(!0)},error:function(){console.log("MH0162接口错误")}})})},o=function(e){var t=e.ec,s=e.em,a="";switch(t){case"EBMB9018":a="当前业务您已连续获取10次短信验证码未验证通过了，请您明天再来。";break;case"PP010110":case"EBMB2055":case"EMSBNULL":case"PA040304":a="短信验证码输入有误，请重新输入。";break;case"PP010109":a="您的短信验证码输入有误或已超时，请重新输入。";break;case"EBMB2054":a="短信验证码已超时，请重新获取，谢谢！";break;case"CW0000P7":case"CW0000P9":case"CW0000P8":a="亲，您的美元账户有欠款或存款，无法开通人民币世界通服务。";break;case"CW000045":a="亲，您的卡片目前已超额，请还款后再申请哦!";break;default:a=s}return a},r=function(e){__Vue__.$vux.toast.show({text:e,type:"text",height:"10rem",width:"60%"})},l=function(e){var t=e.accountNo,s=e.mobileNo,a=e.param;return new i.a(function(e,i){window.client.request({ifpUrl:"/mp/MP1099.do",url:"/api/MH0211.json",adapterName:"CommonAdapter",isLogin:!0,parameters:{accountNo:t,mobileNo:s,PARAM1:a,PARAM2:"信用卡",PARAM3:"发现精彩",PARAM4:"开通"},success:function(t){console.log(t),"0"==t.ec?"0"==t.cd.optionFlag?e("已向尾号为"+s.slice(7)+"的手机号码发送验证码，60s后方能重新获取，短信验证码120秒内有效。"):i("您刚已获取了短信验证码，无需重新获取。"):"EBMB9018"==t.ec&&i("当前业务您已连续获取10次短信验证码未验证通过了，请您明天再来。")},error:function(){console.log("MH0211接口出错")}})})}},sm8H:function(e,t,s){"use strict";function a(e){s("r36s")}var i=(s("qyAu"),s("jf31")),n=s("JwlZ"),o=s("C7Lr"),r=a,l=o(i.a,n.a,!1,r,null,null);t.a=l.exports},u7Zk:function(e,t,s){"use strict";function a(e){s("kR1L")}var i=(s("HrLf"),s("qCHm")),n=s("fr0w"),o=s("C7Lr"),r=a,l=o(i.a,n.a,!1,r,null,null);t.a=l.exports},x0Ou:function(e,t,s){e.exports=s.p+"static/img/nav_icon_close.png"}});