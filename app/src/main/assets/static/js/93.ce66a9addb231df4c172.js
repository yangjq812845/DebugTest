webpackJsonp([93],{"/5DR":function(t,e){},"44WN":function(t,e,i){"use strict";e.a=function(){return{options:{type:Array,required:!0},value:[String,Number],fillMode:{type:Boolean,default:!1},fillPlaceholder:{type:String,default:"其他"},fillLabel:{type:String,default:"其他"},disabled:Boolean,selectedLabelStyle:Object}}},"4jVk":function(t,e,i){"use strict";i.d(e,"b",function(){return n}),i.d(e,"a",function(){return a});var n={options:{type:Array,required:!0},value:[String,Number],fillMode:{type:Boolean,default:!1},fillPlaceholder:{type:String,default:"其他"},fillLabel:{type:String,default:"其他"},disabled:Boolean,selectedLabelStyle:Object},a={title:[String,Number],value:[String,Number,Array],isLink:Boolean,isLoading:Boolean,inlineDesc:[String,Number],primary:{type:String,default:"title"},link:[String,Object],valueAlign:[String,Boolean,Number],borderIntent:{type:Boolean,default:!0},disabled:Boolean,arrowDirection:String,alignItems:String}},"8v0u":function(t,e){function i(t,e,i){if("function"==typeof Array.prototype.find)return t.find(e,i);i=i||this;var n,a=t.length;if("function"!=typeof e)throw new TypeError(e+" is not a function");for(n=0;n<a;n++)if(e.call(i,t[n],n,t))return t[n]}t.exports=i},HrLf:function(t,e,i){"use strict";var n=i("hRKE"),a=i.n(n),s=i("4YfN"),o=i.n(s),r=i("4jVk"),l=i("8v0u"),c=i.n(l),u=i("CKVb"),d=i("gpPJ"),p=i("cTn1"),h=i("sm8H"),f=i("Jp5S");delete r.a.value;u.a,p.a,h.a,d.a,f.a,o()({placeholder:String,readonly:Boolean},r.a,r.b,{showAddCard:{type:Boolean,default:!1},displayV:String,listCards:{key:String,value:String},options:""})},JwlZ:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"weui-cells_radio",class:t.disabled?"vux-radio-disabled":""},[t._l(t.options,function(e,n){return i("label",{staticClass:"weui-cell weui-cell_radio weui-check__label",attrs:{for:"radio_"+t.uuid+"_"+n}},[i("div",{staticClass:"weui-cell__bd"},[t._t("each-item",[i("p",[i("img",{directives:[{name:"show",rawName:"v-show",value:e&&e.icon,expression:"one && one.icon"}],staticClass:"vux-radio-icon",attrs:{src:e.icon}}),t._v(" "),i("span",{staticClass:"vux-radio-label",style:t.currentValue===t.getKey(e)?t.selectedLabelStyle||"":""},[t._v(t._s(t._f("getValue")(e)))])])],{icon:e.icon,label:t.getValue(e),index:n,selected:t.currentValue===t.getKey(e)})],2),t._v(" "),i("div",{staticClass:"weui-cell__ft"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.currentValue,expression:"currentValue"}],staticClass:"weui-check",attrs:{type:"radio",id:t.disabled?"":"radio_"+t.uuid+"_"+n},domProps:{value:t.getKey(e),checked:t._q(t.currentValue,t.getKey(e))},on:{change:function(i){t.currentValue=t.getKey(e)}}}),t._v(" "),i("span",{staticClass:"weui-icon-checked"})])])}),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.fillMode,expression:"fillMode"}],staticClass:"weui-cell"},[i("div",{staticClass:"weui-cell__hd"},[i("label",{staticClass:"weui-label",attrs:{for:""}},[t._v(t._s(t.fillLabel))])]),t._v(" "),i("div",{staticClass:"weui-cell__bd"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.fillValue,expression:"fillValue"}],staticClass:"weui-input needsclick",attrs:{type:"text",placeholder:t.fillPlaceholder},domProps:{value:t.fillValue},on:{blur:function(e){t.isFocus=!1},focus:function(e){t.onFocus()},input:function(e){e.target.composing||(t.fillValue=e.target.value)}}})]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:""===t.value&&!t.isFocus,expression:"value==='' && !isFocus"}],staticClass:"weui-cell__ft"},[i("i",{staticClass:"weui-icon-warn"})])])],2)},a=[],s={render:n,staticRenderFns:a};e.a=s},TewV:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("xcgb-box",[n("xcgb-head",{attrs:{title:"安全卫士",keepAlive:!1,leftOptions:[{type:"left_arrow_black"}]}}),t._v(" "),n("div",{staticClass:"main"},[n("div",{staticClass:"cancelSecurityGuard"},[n("div",{staticClass:"popup-group"},[n("group",{attrs:{gutter:0}},[n("popup-radio",{attrs:{title:"",options:t.options1,showAddCard:!0},scopedSlots:t._u([{key:"each-item",fn:function(e){return[n("p",[n("img",{staticClass:"vux-radio-icon",attrs:{src:i("xeYi")}}),t._v(" "+t._s(e.label)+"\n              ")])]}}]),model:{value:t.msgAcc,callback:function(e){t.msgAcc=e},expression:"msgAcc"}},[n("img",{staticStyle:{display:"block","margin-right":".36rem"},attrs:{slot:"icon",width:"30",src:i("xeYi"),alt:"cgbLogo"},slot:"icon"})])],1),t._v(" "),n("group",[n("x-input",{attrs:{title:"手机号",placeholder:"请输入银行预留手机号",max:11},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}}),t._v(" "),n("x-input",{attrs:{title:"验证码",placeholder:"请输入短信验证码",max:6},model:{value:t.messageCode,callback:function(e){t.messageCode=e},expression:"messageCode"}},[n("x-button",{staticClass:"getVcode",attrs:{slot:"right",type:"",mini:""},nativeOn:{click:function(e){return t.getVcode(e)}},slot:"right"},[t.sendMsgDisabled?n("span",{staticClass:"obtain_contentp"},[t._v(t._s(t.time+"s"))]):t._e(),t._v(" "),t.sendMsgDisabled?t._e():n("span",{staticClass:"obtain_contentd"},[t._v("获取")])])],1)],1),t._v(" "),n("x-button",{class:t.classType,attrs:{type:"warn",disabled:!t.status},nativeOn:{click:function(e){return t.next(e)}}},[t._v("确认取消")])],1)])])],1)},a=[],s={render:n,staticRenderFns:a};e.a=s},"Zlr+":function(t,e,i){"use strict";var n=i("fvyU"),a=i("IXui"),s=i("gpPJ"),o=i("CKVb"),r=i("u7Zk");e.a={name:"cancelSecurityGuard",data:function(){return{msgAcc:"",options1:[],phone:"",messageCode:"",time:"60",sendMsgDisabled:!1,accountNo:"",PARAM:"",msgType:""}},components:{XInput:n.a,XButton:a.a,Cell:s.a,Group:o.a,PopupRadio:r.a},computed:{status:function(){return""!=this.phone&&this.messageCode.length>5},classType:function(){return this.status?"confirmCancel_red":"confirmCancel"}},methods:{getProtect:function(t){return this.$store.getters.getProtect(t)},createArr:function(t){for(var e=[],i=0;i<t.length;i++)t==this.options1&&e.push(this.getProtect(this.options1[i].smsFeeAccNo));return e},getVcode:function(){this.sendMsgDisabled=!0;var t=window.setInterval(function(){this.time--<=0&&(this.time=60,this.sendMsgDisabled=!1,window.clearInterval(t))},1e3),e=this.phone,i=/^1[3|4|5|7|8][0-9]{9}$/;return""==e?(this.$vux.toast.show({text:"请输入手机号码",type:"text",height:"10rem",width:"60%"}),!1):e.length<11?(this.$vux.toast.show({text:"手机号长度小于11位，请重新输入",type:"text",height:"10rem",width:"60%"}),!1):i.test(this.phone)?void this.loadMH0211():(this.$vux.toast.show({text:"输入手机号不正确！",type:"text",height:"10rem",width:"60%"}),!1)},loadMH0211:function(){this.accountNo&&(this.PARAM=this.accountNo.slice(this.accountNo.length-4)),window.client.request({url:"api/MH0211.json",adapterName:"CommonAdapter",isLogin:!0,funName:"second_MH0211",params:"[{ 'tranCode':'MH0211','srcChannel':'MH','busCode':'22','accountNo':"+this.accountNo+",'mobileNo':"+this.phone+",'PARAM1':"+this.PARAM+",'PARAM2':'信用卡','PARAM3':'发现精彩','PARAM4':'取消'}]",success:function(t){var e=t.body;"0"==e.errorCode?"0"==e.optionFlag?this.$vux.toast.show({text:"已向尾号为"+this.mobileNo.slice("7")+"的手机号码发送验证码，60s后方能重新获取，短信验证码120秒内有效。",type:"text",height:"10rem",width:"60%"}):this.$vux.toast.show({text:"您刚已获取了短信验证码，无需重新获取。",type:"text",height:"10rem",width:"60%"}):"EBMB9018"==e.ec&&this.$vux.toast.show({text:"当前业务您已连续获取10次短信验证码未验证通过了，请您明天再来。",type:"text",height:"10rem",width:"60%"})},error:function(){console.log("MH0211接口异常")}})},next:function(){this.loadMH0164()},loadMH0164:function(){}},created:function(){var t=this;window.client.request({url:"/api/MH0166li.json",adapter:"CommonAdapter",procedure:"control",parameters:'[{"funName":"second_MH0166","type":"json","value":"U2FsdGVkX1++XvKWuGyJ4po0QFlzfJI8rrKdtZfGwRn9UAm3QJq6PRQ4kC3QQuz/","cdbank_sign":"172d6a049890982409e3df2c867e629f","cdbank_timeStamp":"20171124152827"}]',success:function(e){var i=e.root.cd.result[0].kColl;t.options1=e.root.cd.result[0].kColl,t.options1=t.createArr(t.options1),t.msgAcc=t.options1[0];var n=t.$store.getters.getStateKey("WL-Authentication-Success.UserInfoAuthRealm.attributes.data.defaultAccountNo").defaultAccountNo;t.accountNo=n;for(var a=0;a<i.length;a++)if(i[a].smsFeeAccNo==n&&i[a].smsSignAccNo==n){var s=t.$store.getters.getStateKey().mobileNo,o=i[a].smsIncomeFireAmount,r=i[a].smsPayFireAmount;t.msgType="01"==i[a].smsFeeType?"包月(4元/月)":"包年(48元/年)",t.msgAcc=_.protect(n),t.mobileNo=_.protect(s),t.inLow=o,t.outLow=r}}})}}},b2hD:function(t,e,i){"use strict";var n=i("fvyU"),a=i("IXui"),s=i("gpPJ"),o=i("CKVb"),r=i("u7Zk");n.a,a.a,s.a,o.a,r.a},degl:function(t,e,i){"use strict";function n(t){i("/5DR")}Object.defineProperty(e,"__esModule",{value:!0});var a=(i("b2hD"),i("Zlr+")),s=i("TewV"),o=i("C7Lr"),r=n,l=o(a.a,s.a,!1,r,null,null);e.default=l.exports},dl3a:function(t,e,i){"use strict";i.d(e,"a",function(){return s}),i.d(e,"b",function(){return o}),i.d(e,"c",function(){return r});var n=i("hRKE"),a=i.n(n),s=function(t){return"object"===(void 0===t?"undefined":a()(t))?t.value:t},o=function(t){return"object"===(void 0===t?"undefined":a()(t))?t.key:t},r=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments[1];if(!t.length)return e;if("string"==typeof t[0])return e;var i=t.filter(function(t){return t.key===e});return i.length?i[0].value||i[0].label:e}},fr0w:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("cell",{staticClass:"select-card",attrs:{title:t.displayID,value:t.currentValue,"is-link":!t.readonly,"value-align":t.valueAlign},nativeOn:{click:function(e){return t.show(e)}}},[!t.displayValue&&t.placeholder?n("span",{staticClass:"vux-cell-placeholder"},[t._v(t._s(t.placeholder))]):t._e(),t._v(" "),n("span",{attrs:{slot:"icon"},slot:"icon"},[t._t("icon",[t._v("套餐类型"),n("span",{staticClass:"select-span"},[t._v(t._s(t.package))])])],2),t._v(" "),n("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[n("popup",{staticClass:"select-card-popup",staticStyle:{"background-color":"#f6f6f6"},on:{"on-hide":function(e){t.$emit("on-hide")},"on-show":function(e){t.$emit("on-show")}},model:{value:t.showPopup,callback:function(e){t.showPopup=e},expression:"showPopup"}},[t._t("popup-header",null,{options:t.options,value:t.currentValue}),t._v(" "),n("div",{staticClass:"popup-title"},[n("img",{attrs:{src:i("x0Ou"),alt:""},on:{click:t.hide}}),t._v(" "),n("span",[t._v("请选择")])]),t._v(" "),n("radio",{staticStyle:{"background-color":"#fff"},attrs:{options:t.options,"fill-mode":!1},on:{"on-change":t.onValueChange},scopedSlots:t._u([{key:"each-item",fn:function(e){return[t._t("each-item",[n("p",[n("img",{directives:[{name:"show",rawName:"v-show",value:e.icon,expression:"props.icon"}],staticClass:"vux-radio-icon",attrs:{src:e.icon}}),t._v(" "),n("span",{staticClass:"vux-radio-label"},[t._v(t._s(e.label))])])],{icon:e.icon,label:e.label,index:e.index})]}}]),model:{value:t.currentValue,callback:function(e){t.currentValue=e},expression:"currentValue"}}),t._v(" "),t.showAddCard?n("group",{attrs:{gutter:10}},[t._l(t.listCards,function(e,i){return n("cell",{key:i,attrs:{title:e.key,isLink:!0,item:e.key},nativeOn:{click:function(i){t.toAddCard(e.key)}}})}),t._v(" "),n("cell",{attrs:{title:"添加卡片",isLink:!0},nativeOn:{click:function(e){t.toAddCard("a")}}})],2):t._e()],2)],1)])},a=[],s={render:n,staticRenderFns:a};e.a=s},jf31:function(t,e,i){"use strict";function n(t,e){for(var i=t.length;i--;)if(t[i]===e)return!0;return!1}var a=i("qWCq"),s=i("dl3a"),o=i("44WN");e.a={name:"radio",mixins:[a.a],filters:{getValue:s.a,getKey:s.b},props:i.i(o.a)(),created:function(){this.handleChangeEvent=!0},methods:{getValue:s.a,getKey:s.b,onFocus:function(){this.currentValue=this.fillValue||"",this.isFocus=!0}},watch:{value:function(t){this.currentValue=t},currentValue:function(t){var e=n(this.options,t);""!==t&&e&&(this.fillValue=""),this.$emit("on-change",t,i.i(s.c)(this.options,t)),this.$emit("input",t)},fillValue:function(t){this.fillMode&&this.isFocus&&(this.currentValue=t)}},data:function(){return{fillValue:"",isFocus:!1,currentValue:this.value}}}},kR1L:function(t,e){},qCHm:function(t,e,i){"use strict";var n=i("hRKE"),a=i.n(n),s=i("4YfN"),o=i.n(s),r=i("4jVk"),l=i("8v0u"),c=i.n(l),u=i("CKVb"),d=i("gpPJ"),p=i("cTn1"),h=i("sm8H"),f=i("Jp5S");delete r.a.value,e.a={name:"selectCard",components:{Group:u.a,Popup:p.a,Radio:h.a,Cell:d.a},directives:{TransferDom:f.a},props:o()({placeholder:String,readonly:Boolean},r.a,r.b,{showAddCard:{type:Boolean,default:!1},displayV:String,listCards:{key:String,value:String},options:""}),data:function(){return{showPopup:!1,currentValue:this.value,package:"",displayID:""}},computed:{displayValue:function(){var t=this;if(!this.options.length)return"";if("object"===a()(this.options[0])){var e=c()(this.options,function(e){return e.key===t.currentValue});if(e)return e.value}return this.currentValue}},methods:{onValueChange:function(t){this.hide(),this.package=t,this.$emit("changeStyle",t)},show:function(){this.readonly||(this.showPopup=!0)},hide:function(){this.showPopup=!1},toAddCard:function(t){this.showPopup=!1,"a"==t?console.log("跳转到挂卡页面"):this.displayID=t}},watch:{value:function(t){this.currentValue=t},currentValue:function(t){this.$emit("input",t),this.$emit("on-change",t)}},created:function(){this.displayID=void 0==this.options[0]?this.displayV:this.options[0],this.package=this.options[0]},updated:function(){this.displayID=void 0==this.options[0]?this.displayV:this.options[0]}}},qyAu:function(t,e,i){"use strict";function n(t,e){for(var i=t.length;i--;)if(t[i]===e)return!0;return!1}var a=i("qWCq"),s=i("dl3a"),o=i("44WN");a.a,s.a,s.b,i.i(o.a)(),s.a,s.b},r36s:function(t,e){},sm8H:function(t,e,i){"use strict";function n(t){i("r36s")}var a=(i("qyAu"),i("jf31")),s=i("JwlZ"),o=i("C7Lr"),r=n,l=o(a.a,s.a,!1,r,null,null);e.a=l.exports},u7Zk:function(t,e,i){"use strict";function n(t){i("kR1L")}var a=(i("HrLf"),i("qCHm")),s=i("fr0w"),o=i("C7Lr"),r=n,l=o(a.a,s.a,!1,r,null,null);e.a=l.exports},x0Ou:function(t,e,i){t.exports=i.p+"static/img/nav_icon_close.png"},xeYi:function(t,e,i){t.exports=i.p+"static/img/cgbLogo.png"}});