webpackJsonp([251],{"3x0B":function(t,a,e){"use strict";var s=e("IXui");a.a={name:"cancle",components:{XButton:s.a},data:function(){return{pageParams:this.$route.params,isShow:!0}},methods:{getParams:function(){this.pageParams.ec&&"0"==this.pageParams.ec?this.isShow=!0:this.isShow=!1},toBack:function(){this.$router.push({name:""})}},created:function(){this.getParams()}}},FZbt:function(t,a,e){"use strict";var s=e("IXui");s.a},K5LJ:function(t,a,e){"use strict";function s(t){e("tXjZ")}Object.defineProperty(a,"__esModule",{value:!0});var n=(e("FZbt"),e("3x0B")),i=e("yjU8"),r=e("C7Lr"),c=s,o=r(n.a,i.a,!1,c,null,null);a.default=o.exports},KeN9:function(t,a,e){t.exports=e.p+"static/img/background_success.png"},tXjZ:function(t,a){},yjU8:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("xcgb-box",[s("xcgb-head",{attrs:{title:"我的定额",keepAlive:!1,leftOptions:[{type:"left_arrow_black"}]}}),t._v(" "),s("div",{staticClass:"main"},[t.isShow?s("img",{attrs:{src:e("KeN9"),width:"100%"}}):s("p",[t._v(t._s(t.pageParams.em))]),t._v(" "),s("div",{staticClass:"toBack"},[s("x-button",{attrs:{type:"warn"}},[t._v("返回")])],1)])],1)},n=[],i={render:s,staticRenderFns:n};a.a=i}});