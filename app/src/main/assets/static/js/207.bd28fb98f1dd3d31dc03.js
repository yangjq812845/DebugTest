webpackJsonp([207],{"9XRv":function(s,t,a){s.exports=a.p+"static/img/submitFail.png"},cV3y:function(s,t,a){"use strict";var e=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("xcgb-box",[a("xcgb-head",{attrs:{title:"分期结果",keepAlive:!1,leftOptions:[{type:"left_arrow_black",preventGoBack:!0}],rightOptions:[{type:"text",str:"完成"}]},on:{rightHandler:s.backHome,leftHandler:s.backHome}}),s._v(" "),a("div",{staticClass:"main"},[a("div",{staticClass:"instalment-result"},[a("img",{attrs:{src:s.imgUrl[s.imgUrlFlag]}}),s._v(" "),a("div",{staticClass:"success-tips"},[s._v(s._s(s.successTips))]),s._v(" "),a("div",{staticClass:"wait-bank-confirm"},[s._v(s._s(s.waitBankComfirm))]),s._v(" "),s.isSuccess?a("div",{staticClass:"already-success"},[a("div",{staticClass:"instalment-amt"},[a("span",{staticClass:"amt-head"},[s._v("分期金额：")]),s._v(" "),a("span",{staticClass:"success-apply-amt"},[s._v("¥"+s._s(s._f("amtFilter")(s.successApplyAmt)))])]),s._v(" "),a("div",{attrs:{id:"success-remain-amt"}},[a("span",{staticClass:"amt-head"},[s._v("分期后本期剩余应还：")]),s._v(" "),a("span",{staticClass:"success-apply-amt"},[s._v("¥"+s._s(s._f("amtFilter")(s.successRemainAmt)))])])]):s._e()]),s._v(" "),a("div",{staticClass:"reviewRecordButton",on:{click:function(t){s.reviewInstalmentRecord()}}},[s._v("查看分期记录")])])],1)},i=[],c={render:e,staticRenderFns:i};t.a=c},doXX:function(s,t,a){s.exports=a.p+"static/img/successImg.png"},fEUs:function(s,t,a){"use strict";function e(s){a("sAyu")}Object.defineProperty(t,"__esModule",{value:!0});var i=(a("hjqZ"),a("zIZE")),c=a("cV3y"),n=a("C7Lr"),r=e,l=n(i.a,c.a,!1,r,null,null);t.default=l.exports},hjqZ:function(s,t,a){"use strict"},sAyu:function(s,t){},zIZE:function(s,t,a){"use strict";t.a={name:"expenseResult",data:function(){return{pageParams:this.$route.params.pageParams||{resultCode:"0000",accountNo:"2232344543534534",billsDate:"6",installmentAmt:"5000",remainAmt:"3000",bills:"12"},imgUrl:[a("doXX"),a("9XRv")],imgUrlFlag:0,successTips:"账单分期申请成功！",waitBankComfirm:"2-4个工作日内将有审批结果,请您留意短信通知",successApplyAmt:"999.99",successRemainAmt:"888.88"}},computed:{isSuccess:function(){var s=this.pageParams.resultCode;return"0000"==s||"0010"==s||"0020"==s},isWaitBankConfirm:function(){var s=this.pageParams.resultCode;return"0210"==s||"0200"==s}},methods:{backHome:function(){window.client.goBack(-2)},reviewInstalmentRecord:function(){this.$router.push({name:"cdbank_instalment_inquire",params:{accountNo:this.pageParams.accountNo}})},getResult:function(s){s.accountNo;this.isSuccess?(this.waitBankComfirm="您的"+s.billsDate+"月账单已经成功办理分期，感谢您对广发信用卡的支持。",this.successApplyAmt=s.installmentAmt,this.successRemainAmt=s.remainAmt):this.isWaitBankConfirm?this.successTips="账单分期申请已受理！":(this.imgUrlFlag=1,this.successTips="账单分期申请失败！",this.waitBankComfirm="您的账单分期业务申请暂未能获批，请您多使用广发卡并保持良好的用卡记录。")}},filters:{amtFilter:function(s){return(1*s).toFixed(2)}},created:function(){this.getResult(this.pageParams)}}}});