webpackJsonp([302],{"P1//":function(e,t){},ROsE:function(e,t,n){"use strict";var a=n("gpPJ"),i=n("CKVb"),r=n("4s6/");t.a={name:"securityTools",data:function(){return{fingerprintFlag:!1,faceFlag:!1,showFinger:!0,showFace:!0}},components:{Group:i.a,Cell:a.a,XSwitch:r.a},created:function(){this.judgeState(),console.log("created"),this.chooseSecurityTools()},methods:{chooseSecurityTools:function(){var e=this;window.client.getClientInfo().then(function(t){var n=t.XiTong,a=parseFloat(t.ModelVersion);"IOS"==n?e.showFinger=a>=8:"Android"==n&&(e.showFinger=a>=6)})},judgeState:function(){"true"==localStorage.fingerprintSettingState?this.fingerprintFlag=!0:"false"==localStorage.fingerprintSettingState&&(this.fingerprintFlag=!1),"true"==localStorage.faceState?this.faceFlag=!0:"false"==localStorage.faceState&&(this.faceFlag=!1)},finChange:function(e){this.fingerprintFlag=e,localStorage.fingerprintSettingState=e,e?this.$router.push({name:"fingerprint_setting_fingerVerify"}):e||this.$router.push({name:"fingerprint_setting_loginPswVerify",params:{sourcePage:"finger",openOrClose:"close"}})},faceChange:function(e){this.faceFlag=e,localStorage.faceState=e,e?this.$router.push({name:"fingerprint_setting_faceVerify"}):e||this.$router.push({name:"fingerprint_setting_loginPswVerify",params:{sourcePage:"face",openOrClose:"close"}})}}}},T771:function(e,t,n){"use strict";var a=n("gpPJ"),i=n("CKVb"),r=n("4s6/");i.a,a.a,r.a},TDe9:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("xcgb-box",[n("xcgb-head",{attrs:{title:"安全工具",keepAlive:!1,leftOptions:[{type:"left_arrow_black"}]}}),e._v(" "),n("div",{staticClass:"main"},[n("group",[e.showFinger?n("x-switch",{attrs:{title:"指纹"},on:{"on-change":e.finChange},model:{value:e.fingerprintFlag,callback:function(t){e.fingerprintFlag=t},expression:"fingerprintFlag"}}):e._e(),e._v(" "),e.showFace?n("x-switch",{attrs:{title:"刷脸"},on:{"on-change":e.faceChange},model:{value:e.faceFlag,callback:function(t){e.faceFlag=t},expression:"faceFlag"}}):e._e(),e._v(" "),n("cell",{attrs:{title:"手势",link:{name:"account_safe_gesturePsw"}}})],1)],1)],1)},i=[],r={render:a,staticRenderFns:i};t.a=r},fY83:function(e,t,n){"use strict";function a(e){n("P1//")}Object.defineProperty(t,"__esModule",{value:!0});var i=(n("T771"),n("ROsE")),r=n("TDe9"),o=n("C7Lr"),s=a,c=o(i.a,r.a,!1,s,null,null);t.default=c.exports}});