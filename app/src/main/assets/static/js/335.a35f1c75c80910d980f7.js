webpackJsonp([335],{"2I3s":function(t,e,i){"use strict"},Dxzm:function(t,e,i){"use strict";e.a={name:"setFingerOrFacePsw",data:function(){return{title:"",src:""}},methods:{renderPage:function(){var t=this.$route.params.renderParam;"face"===t?(this.title="刷脸密码设置",this.src="~@a/security/kaiqi@2x.png"):"finger"===t&&(this.title="指纹密码设置",this.src="~@a/security/fpsetting_01.png")},fingerOrFaceVerify:function(){var t=this,e=this.$route.renderParam;"finger"===e?window.client.fingerprinIdentification().then(function(e,i){if(!0===e){var r=void 0,n=void 0,a=void 0,s=void 0;r=i.split("|"),n=r[2],a=t.$store.getters.getStateKey("WL-Authentication-Success.UserInfoAuthRealm.attributes.data").data,s=t.$route.params.status;a.mobileNo,a.sessionId;"on"===s&&t.$router.push({name:"fingerprint_setting_loginPswVerify",params:{status:"on",renderParam:"finger"}})}}).catch(function(t){alert(t)}):"face"===e&&(window.client.faceIdentification(),this.$router.push({name:"fingerprint_setting_loginPswVerify",params:{status:"on",renderParam:"face"}}))}},created:function(){this.renderPage()}}},Gjim:function(t,e,i){"use strict";var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("xcgb-box",[i("xcgb-head",{attrs:{title:t.title,keepAlive:!1,leftOptions:[{type:"left_arrow_black"}]}}),t._v(" "),i("div",{staticClass:"main"},[i("img",{staticClass:"faceOrFingerImg",attrs:{src:t.src}}),t._v(" "),i("x-button",{on:{clickHandler:t.fingerOrFaceVerify}},[t._t("default",[t._v("下一步")])],2)],1)],1)},n=[],a={render:r,staticRenderFns:n};e.a=a},dKBQ:function(t,e,i){"use strict";function r(t){i("ktXg")}Object.defineProperty(e,"__esModule",{value:!0});var n=(i("2I3s"),i("Dxzm")),a=i("Gjim"),s=i("C7Lr"),c=r,o=s(n.a,a.a,!1,c,null,null);e.default=o.exports},ktXg:function(t,e){}});