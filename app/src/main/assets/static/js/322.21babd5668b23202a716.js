webpackJsonp([322],{"Qf3+":function(t,e,s){"use strict";var o=s("CKVb"),n=s("IXui"),i=s("fvyU"),a=s("f4gh");o.a,n.a,i.a,a.a},"R0/W":function(t,e,s){"use strict";function o(t){s("dGno")}Object.defineProperty(e,"__esModule",{value:!0});var n=(s("Qf3+"),s("V8SG")),i=s("rcyH"),a=s("C7Lr"),r=o,c=a(n.a,i.a,!1,r,null,null);e.default=c.exports},V8SG:function(t,e,s){"use strict";var o=s("CKVb"),n=s("IXui"),i=s("fvyU"),a=s("f4gh");e.a={name:"quickRegister",data:function(){return{mobileNo:this.$route.params.mobileNo,signStr:this.$route.params.signStr,psw:"",encryptPsw:"",rpsw:"",encryptRpsw:"",showToastFlag:!1,text:"",complexFlag:""}},computed:{status:function(){return this.psw&&this.rpsw}},components:{Group:o.a,XButton:n.a,XInput:i.a,Toast:a.a},methods:{showToast:function(t){this.showToastFlag=!0,this.text=t},showPswKeyboard:function(t){console.log(t),window.client.showPswKeyboard({isSpecialPassWordRequired:!1,maxSize:"12",ps:"AE0",isRegister:!0,mobileNo:this.mobileNo,pswIndex:t})},hidePswKeyboard:function(){console.log("111111"),window.client.hidePswKeyboard()},register:function(){var t=this;if(this.psw!=this.rpsw)return void this.showToast("两次输入的密码不一样，请重新输入。");switch(this.complexFlag){case 0:break;case 4:return void this.showToast("密码位数不合法，不在8-12位之间");case 1:return void this.showToast("密码是纯数字、纯字母、纯特殊字符");case 3:return void this.showToast("密码为简单密码，如连续8位相同的数字或字母，连续的8位顺序递增或者递减的数字或字母 ");case 2:return void this.showToast("密码局部包含登录手机号中连续字符")}window.client.getClientInfo().then(function(e){window.client.request({url:"../api/second_MH0319.json",adapter:"CommonAdapter",procedure:"second_MH0319",parameters:{transferFlowNoNew:(new Date).getTime(),logonPassword:t.encryptPsw,mobileNo:t.mobileNo,signStr:t.signStr,equipment_id:e.equipment_id,imei:"",clientIP:e.IP,clientMacAdress:e.MAC,mobileType:e.Model,mobileOS:e.XiTong+e.ModelVersion,softVersion:e.Version,wdBranchX:e.wdBranchX,wdBranchY:e.wdBranchY,logonPasswordConfirm:t.encryptRpsw},success:function(e){var s=e.invocationResult;0!=s.root.ec&&"0"!=s.root.ec||(t.$store.commit("setUserInfo",s),t.$router.push({name:"sign_regsterEnd"})),console.log(e)}})})},inputMsg:function(t){this.complexFlag=t.data.complexFlag,"0"==t.data.pswIndex?(this.encryptPsw=t.data.psw,this.psw="●".repeat(12).substring(0,t.data.len)):(this.encryptRpsw=t.data.psw,this.rpsw="●".repeat(12).substring(0,t.data.len))}},created:function(){document.addEventListener("inputMsg",this.inputMsg,!1)},beforeDestroy:function(){document.removeEventListener("inputMsg",this.inputMsg,!1)}}},dGno:function(t,e){},rcyH:function(t,e,s){"use strict";var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("xcgb-box",[s("xcgb-head",{attrs:{title:"快速注册",keepAlive:!1,leftOptions:[{type:"left_arrow_black"}]}}),t._v(" "),s("div",{staticClass:"main"},[s("group",{attrs:{title:"该手机号可以注册发现精彩"}},[s("x-input",{attrs:{value:t.mobileNo,readonly:""}}),t._v(" "),s("x-input",{attrs:{placeholder:"8-12位密码，需含数字/字母/符号中两种",readonly:""},nativeOn:{click:function(e){e.stopPropagation(),t.showPswKeyboard("0")}},model:{value:t.psw,callback:function(e){t.psw=e},expression:"psw"}}),t._v(" "),s("x-input",{attrs:{placeholder:"再次输入密码",readonly:""},nativeOn:{click:function(e){e.stopPropagation(),t.showPswKeyboard("1")}},model:{value:t.rpsw,callback:function(e){t.rpsw=e},expression:"rpsw"}})],1),t._v(" "),s("x-button",{staticClass:"register",attrs:{"action-type":"button",disabled:!t.status},nativeOn:{click:function(e){return t.register(e)}}},[t._v("注册")]),t._v(" "),s("toast",{attrs:{type:"text",width:"auto"},model:{value:t.showToastFlag,callback:function(e){t.showToastFlag=e},expression:"showToastFlag"}},[s("p",{staticClass:"tips"},[t._v(t._s(t.text))])])],1)],1)},n=[],i={render:o,staticRenderFns:n};e.a=i}});