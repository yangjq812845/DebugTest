webpackJsonp([348],{"+3jz":function(t,e){},"8BLB":function(t,e,s){"use strict"},JLji:function(t,e,s){"use strict";e.a={name:"updateTelPsd",data:function(){return{password:"",psw:"",encryptPsw:""}},computed:{pwdBox:function(){return this.psw.length<1?["","","","","",""]:this.psw.concat(new Array(6-this.psw.length)).slice(0,6)}},methods:{showkeyboard:function(){console.log("调起键盘"),window.client.showPswKeyboard({isSpecialPassWordRequired:!1,maxSize:"6",ps:"AE0"})},hidekeyboard:function(){console.log("隐藏键盘"),window.client.hidePswKeyboard()},inputMsg:function(t){this.encryptPsw=t.data.psw,this.psw="●".repeat(6).substring(0,t.data.len)},passwordChange:function(t){var e=this;if(6==this.password.length){var s={};s.password=this.password,window.client.request({url:"/api/MH0504.json",ifpUrl:"/mp/MP1179.do",adapter:"CommonAdapter",funName:"second_MH0504",encrypt:!0,paramters:s,success:function(t){if("0"==t.transState){var s={pageId:"telUpdatepwd",telPwdInfoRandom:t.telPwdInfo_Random};e.$router.push({name:"cardPwd_manage_inputTelPsd",params:s})}},processException:function(t,s){var n=s.hostErrorMessage;""!=n&&null!=n&&void 0!=n||(n=t.errorMsg),n.indexOf(!0)?e.$vux.alert.show({title:"电话服务密码输入错误",content:n,buttonText:"确认"}):-1!=n.indexOf("密码连续错误")?e.$vux.alert.show({title:"电话服务密码输入错误",content:n,buttonText:"重试"}):e.$vux.alert.show({content:n})}}),this.hidekeyboard()}}},created:function(){document.addEventListener("inputMsg",this.inputMsg,!1)},destroyed:function(){document.removeEventListener("inputMsg",this.inputMsg,!1)}}},fwMS:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("xcgb-box",[s("xcgb-head",{attrs:{title:"修改电话服务密码",keepAlive:!1,leftOptions:[{type:"left_arrow_black"}]}}),t._v(" "),s("div",{staticClass:"main"},[s("h1",{staticClass:"tips-title"},[t._v("请输入原电话服务密码")]),t._v(" "),s("div",{staticClass:"pwd-box"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"pwd-input",attrs:{type:"tel",maxlength:"6"},domProps:{value:t.password},on:{focus:t.showkeyboard,blur:t.hidekeyboard,input:[function(e){e.target.composing||(t.password=e.target.value)},t.passwordChange]}}),t._v(" "),s("div",{staticClass:"fake-box"},t._l(t.pwdBox,function(t,e){return s("input",{attrs:{type:"password",readonly:""},domProps:{value:t}})}))])])],1)},a=[],o={render:n,staticRenderFns:a};e.a=o},psXX:function(t,e,s){"use strict";function n(t){s("+3jz")}Object.defineProperty(e,"__esModule",{value:!0});var a=(s("8BLB"),s("JLji")),o=s("fwMS"),i=s("C7Lr"),r=n,d=i(a.a,o.a,!1,r,null,null);e.default=d.exports}});