webpackJsonp([91],{"2aJ3":function(t,e){},"44WN":function(t,e,r){"use strict";e.a=function(){return{options:{type:Array,required:!0},value:[String,Number],fillMode:{type:Boolean,default:!1},fillPlaceholder:{type:String,default:"其他"},fillLabel:{type:String,default:"其他"},disabled:Boolean,selectedLabelStyle:Object}}},DCqN:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("xcgb-box",[r("xcgb-head",{attrs:{title:"网点",keepalive:!1,leftOptions:[{type:"left_arrow_black"}],rightOptions:[{type:"fenqi_black"},{type:"service_black"}]}}),t._v(" "),r("div",{staticClass:"main"},[r("div",{staticClass:"titleBar"},[r("div",{staticClass:"airportName"},[t._v("佛山")]),t._v(" "),r("i",{staticClass:"icon_change",on:{click:function(e){t.show=!0}}})]),t._v(" "),r("div",{staticClass:"scroller",on:{scroll:t.refresh_branch}},[r("div",[t._l(t.branchList,function(e,n){return t.ready?r("div",{staticClass:"branchList",on:{click:function(r){t.toView07(e)}}},[r("div",{staticClass:"list"},[r("div",{staticClass:"title"},[t._v(t._s(e.markName))]),t._v(" "),r("div",{staticClass:"desc"},[t._v(t._s(e.bussTime))]),t._v(" "),r("div",{staticClass:"subtitle"},[r("span",[t._v(t._s(e.partnerName))]),t._v(" "),r("span",[t._v(t._s(e.address))])])])]):t._e()}),t._v(" "),r("load-more",{attrs:{"show-loading":t.loading,tip:"加载中","background-color":"#fbf9fe"}})],2)]),t._v(" "),r("div",{staticClass:"airportList"},[r("div",{staticClass:"list"})]),t._v(" "),r("div",[r("popup",{attrs:{false:"top",position:"top"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[r("div",{staticClass:"popup"},[r("div",{staticClass:"Bar"},[r("i",{staticClass:"icon_back back",on:{click:function(e){t.show=!1}}})]),t._v(" "),r("group",[t.ready?r("radio",{attrs:{title:"title",options:t.options},nativeOn:{click:function(e){t.show=!1}},model:{value:t.airportChosen,callback:function(e){t.airportChosen=e},expression:"airportChosen"}}):t._e()],1)],1)])],1)])],1)},i=[],o={render:n,staticRenderFns:i};e.a=o},J0Oq:function(t,e,r){"use strict";e.__esModule=!0;var n=r("rVsN"),i=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default=function(t){return function(){var e=t.apply(this,arguments);return new i.default(function(t,r){function n(o,a){try{var s=e[o](a),c=s.value}catch(t){return void r(t)}if(!s.done)return i.default.resolve(c).then(function(t){n("next",t)},function(t){n("throw",t)});t(c)}return n("next")})}}},Jdfd:function(t,e,r){"use strict";function n(t){r("eWKb")}Object.defineProperty(e,"__esModule",{value:!0});var i=(r("ppeU"),r("MHJ4")),o=r("DCqN"),a=r("C7Lr"),s=n,c=a(i.a,o.a,!1,s,null,null);e.default=c.exports},JwlZ:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"weui-cells_radio",class:t.disabled?"vux-radio-disabled":""},[t._l(t.options,function(e,n){return r("label",{staticClass:"weui-cell weui-cell_radio weui-check__label",attrs:{for:"radio_"+t.uuid+"_"+n}},[r("div",{staticClass:"weui-cell__bd"},[t._t("each-item",[r("p",[r("img",{directives:[{name:"show",rawName:"v-show",value:e&&e.icon,expression:"one && one.icon"}],staticClass:"vux-radio-icon",attrs:{src:e.icon}}),t._v(" "),r("span",{staticClass:"vux-radio-label",style:t.currentValue===t.getKey(e)?t.selectedLabelStyle||"":""},[t._v(t._s(t._f("getValue")(e)))])])],{icon:e.icon,label:t.getValue(e),index:n,selected:t.currentValue===t.getKey(e)})],2),t._v(" "),r("div",{staticClass:"weui-cell__ft"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.currentValue,expression:"currentValue"}],staticClass:"weui-check",attrs:{type:"radio",id:t.disabled?"":"radio_"+t.uuid+"_"+n},domProps:{value:t.getKey(e),checked:t._q(t.currentValue,t.getKey(e))},on:{change:function(r){t.currentValue=t.getKey(e)}}}),t._v(" "),r("span",{staticClass:"weui-icon-checked"})])])}),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.fillMode,expression:"fillMode"}],staticClass:"weui-cell"},[r("div",{staticClass:"weui-cell__hd"},[r("label",{staticClass:"weui-label",attrs:{for:""}},[t._v(t._s(t.fillLabel))])]),t._v(" "),r("div",{staticClass:"weui-cell__bd"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.fillValue,expression:"fillValue"}],staticClass:"weui-input needsclick",attrs:{type:"text",placeholder:t.fillPlaceholder},domProps:{value:t.fillValue},on:{blur:function(e){t.isFocus=!1},focus:function(e){t.onFocus()},input:function(e){e.target.composing||(t.fillValue=e.target.value)}}})]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:""===t.value&&!t.isFocus,expression:"value==='' && !isFocus"}],staticClass:"weui-cell__ft"},[r("i",{staticClass:"weui-icon-warn"})])])],2)},i=[],o={render:n,staticRenderFns:i};e.a=o},MHJ4:function(t,e,r){"use strict";var n=r("lC5x"),i=r.n(n),o=r("J0Oq"),a=r.n(o),s=r("rVsN"),c=r.n(s),u=r("cTn1"),l=r("sm8H"),f=r("CKVb"),h=r("aPD3");e.a={name:"myGradeView06",components:{Popup:u.a,Radio:l.a,Group:f.a,LoadMore:h.a},data:function(){return{show:!1,ready:!1,branchList:[],airportList:[],airportChosen:"",loading:!1}},watch:{airportChosen:function(t,e){console.log(t)}},methods:{toView07:function(t){this.$store.commit("myGradeStore/setDetail07",t),this.$router.push({name:"my_grade_branchDetail"})},refresh_branch:function(t){if(console.log(t),t.target.childNodes[0].offsetHeight-t.target.scrollTop-t.target.offsetHeight>0)return!1;this.loading=!0;var e=this;setTimeout(function(){window.client.request({url:"/api/MH0329.json",success:function(t){var r=t.root.cd.result.kColl,n=e.branchList.concat(r);e.branchList=n,e.loading=!1}})},2e3)},sure:function(){this.$vux.toast.show({text:"领取成功",type:"text"}),this.show=!1},init:function(){var t=(this.$store.state.detail,this),e=function(t){return new c.a(function(t,e){window.client.request({url:"/api/MH0329.json",success:function(e){e.root.cd.result.kColl;t(e)}})})},r=function(t){return new c.a(function(t,e){window.client.request({url:"/api/MH0326.json",success:function(e){e.root.cd.result.kColl;t(e)}})})};!function(){var n=a()(i.a.mark(function n(){var o,a;return i.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e();case 2:return o=n.sent,n.next=5,r();case 5:a=n.sent,console.log("网点数据",o),console.log("机场数据",a),t.branchList=o.root.cd.result.kColl,t.airportList=a.root.cd.result.kColl,t.options=a.root.cd.result.kColl.map(function(t,e){return{key:e,value:t.airportName}}),t.ready=!0;case 12:case"end":return n.stop()}},n,this)}));return function(){return n.apply(this,arguments)}}()()}},computed:{},mounted:function(){this.init()}}},NzjL:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"vux-loadmore weui-loadmore",class:{"weui-loadmore_line":!t.showLoading,"weui-loadmore_dot":!t.showLoading&&!t.tip}},[t.showLoading?r("i",{staticClass:"weui-loading"}):t._e(),t._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:t.tip||!t.showLoading,expression:"tip || !showLoading"}],staticClass:"weui-loadmore__tips"},[t._v(t._s(t.tip))])])},i=[],o={render:n,staticRenderFns:i};e.a=o},Qj86:function(t,e,r){"use strict";Boolean,String},XqSp:function(t,e,r){var n=function(){return this}()||Function("return this")(),i=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,o=i&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,t.exports=r("k9rz"),i)n.regeneratorRuntime=o;else try{delete n.regeneratorRuntime}catch(t){n.regeneratorRuntime=void 0}},aPD3:function(t,e,r){"use strict";function n(t){r("2aJ3")}var i=(r("Qj86"),r("wzHF")),o=r("NzjL"),a=r("C7Lr"),s=n,c=a(i.a,o.a,!1,s,null,null);e.a=c.exports},dl3a:function(t,e,r){"use strict";r.d(e,"a",function(){return o}),r.d(e,"b",function(){return a}),r.d(e,"c",function(){return s});var n=r("hRKE"),i=r.n(n),o=function(t){return"object"===(void 0===t?"undefined":i()(t))?t.value:t},a=function(t){return"object"===(void 0===t?"undefined":i()(t))?t.key:t},s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments[1];if(!t.length)return e;if("string"==typeof t[0])return e;var r=t.filter(function(t){return t.key===e});return r.length?r[0].value||r[0].label:e}},eWKb:function(t,e){},jf31:function(t,e,r){"use strict";function n(t,e){for(var r=t.length;r--;)if(t[r]===e)return!0;return!1}var i=r("qWCq"),o=r("dl3a"),a=r("44WN");e.a={name:"radio",mixins:[i.a],filters:{getValue:o.a,getKey:o.b},props:r.i(a.a)(),created:function(){this.handleChangeEvent=!0},methods:{getValue:o.a,getKey:o.b,onFocus:function(){this.currentValue=this.fillValue||"",this.isFocus=!0}},watch:{value:function(t){this.currentValue=t},currentValue:function(t){var e=n(this.options,t);""!==t&&e&&(this.fillValue=""),this.$emit("on-change",t,r.i(o.c)(this.options,t)),this.$emit("input",t)},fillValue:function(t){this.fillMode&&this.isFocus&&(this.currentValue=t)}},data:function(){return{fillValue:"",isFocus:!1,currentValue:this.value}}}},k9rz:function(t,e){!function(e){"use strict";function r(t,e,r,n){var o=e&&e.prototype instanceof i?e:i,a=Object.create(o.prototype),s=new d(n||[]);return a._invoke=u(t,r,s),a}function n(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function i(){}function o(){}function a(){}function s(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function c(t){function e(r,i,o,a){var s=n(t[r],t,i);if("throw"!==s.type){var c=s.arg,u=c.value;return u&&"object"==typeof u&&y.call(u,"__await")?Promise.resolve(u.__await).then(function(t){e("next",t,o,a)},function(t){e("throw",t,o,a)}):Promise.resolve(u).then(function(t){c.value=t,o(c)},a)}a(s.arg)}function r(t,r){function n(){return new Promise(function(n,i){e(t,r,n,i)})}return i=i?i.then(n,n):n()}var i;this._invoke=r}function u(t,e,r){var i=k;return function(o,a){if(i===V)throw new Error("Generator is already running");if(i===E){if("throw"===o)throw a;return v()}for(r.method=o,r.arg=a;;){var s=r.delegate;if(s){var c=l(s,r);if(c){if(c===j)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(i===k)throw i=E,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);i=V;var u=n(t,e,r);if("normal"===u.type){if(i=r.done?E:N,u.arg===j)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(i=E,r.method="throw",r.arg=u.arg)}}}function l(t,e){var r=t.iterator[e.method];if(r===g){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=g,l(t,e),"throw"===e.method))return j;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return j}var i=n(r,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,j;var o=i.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=g),e.delegate=null,j):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,j)}function f(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function h(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function d(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(f,this),this.reset(!0)}function p(t){if(t){var e=t[_];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(y.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=g,e.done=!0,e};return n.next=n}}return{next:v}}function v(){return{value:g,done:!0}}var g,m=Object.prototype,y=m.hasOwnProperty,w="function"==typeof Symbol?Symbol:{},_=w.iterator||"@@iterator",b=w.asyncIterator||"@@asyncIterator",x=w.toStringTag||"@@toStringTag",C="object"==typeof t,L=e.regeneratorRuntime;if(L)return void(C&&(t.exports=L));L=e.regeneratorRuntime=C?t.exports:{},L.wrap=r;var k="suspendedStart",N="suspendedYield",V="executing",E="completed",j={},O={};O[_]=function(){return this};var F=Object.getPrototypeOf,q=F&&F(F(p([])));q&&q!==m&&y.call(q,_)&&(O=q);var P=a.prototype=i.prototype=Object.create(O);o.prototype=P.constructor=a,a.constructor=o,a[x]=o.displayName="GeneratorFunction",L.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===o||"GeneratorFunction"===(e.displayName||e.name))},L.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,a):(t.__proto__=a,x in t||(t[x]="GeneratorFunction")),t.prototype=Object.create(P),t},L.awrap=function(t){return{__await:t}},s(c.prototype),c.prototype[b]=function(){return this},L.AsyncIterator=c,L.async=function(t,e,n,i){var o=new c(r(t,e,n,i));return L.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},s(P),P[x]="Generator",P[_]=function(){return this},P.toString=function(){return"[object Generator]"},L.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},L.values=p,d.prototype={constructor:d,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=g,this.done=!1,this.delegate=null,this.method="next",this.arg=g,this.tryEntries.forEach(h),!t)for(var e in this)"t"===e.charAt(0)&&y.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=g)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){function e(e,n){return o.type="throw",o.arg=t,r.next=e,n&&(r.method="next",r.arg=g),!!n}if(this.done)throw t;for(var r=this,n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],o=i.completion;if("root"===i.tryLoc)return e("end");if(i.tryLoc<=this.prev){var a=y.call(i,"catchLoc"),s=y.call(i,"finallyLoc");if(a&&s){if(this.prev<i.catchLoc)return e(i.catchLoc,!0);if(this.prev<i.finallyLoc)return e(i.finallyLoc)}else if(a){if(this.prev<i.catchLoc)return e(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return e(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&y.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=t,o.arg=e,i?(this.method="next",this.next=i.finallyLoc,j):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),j},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),h(r),j}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;h(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:p(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=g),j}}}(function(){return this}()||Function("return this")())},lC5x:function(t,e,r){t.exports=r("XqSp")},ppeU:function(t,e,r){"use strict";var n=r("lC5x"),i=r.n(n),o=r("J0Oq"),a=r.n(o),s=r("rVsN"),c=r.n(s),u=r("cTn1"),l=r("sm8H"),f=r("CKVb"),h=r("aPD3");u.a,l.a,f.a,h.a},qyAu:function(t,e,r){"use strict";function n(t,e){for(var r=t.length;r--;)if(t[r]===e)return!0;return!1}var i=r("qWCq"),o=r("dl3a"),a=r("44WN");i.a,o.a,o.b,r.i(a.a)(),o.a,o.b},r36s:function(t,e){},sm8H:function(t,e,r){"use strict";function n(t){r("r36s")}var i=(r("qyAu"),r("jf31")),o=r("JwlZ"),a=r("C7Lr"),s=n,c=a(i.a,o.a,!1,s,null,null);e.a=c.exports},wzHF:function(t,e,r){"use strict";e.a={name:"load-more",props:{showLoading:{type:Boolean,default:!0},tip:String}}}});