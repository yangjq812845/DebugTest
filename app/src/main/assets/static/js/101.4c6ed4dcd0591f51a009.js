webpackJsonp([101],{"0Qor":function(e,a,r){"use strict";r.d(a,"g",function(){return i}),r.d(a,"e",function(){return b}),r.d(a,"c",function(){return f}),r.d(a,"h",function(){return d}),r.d(a,"i",function(){return u}),r.d(a,"j",function(){return l}),r.d(a,"k",function(){return p}),r.d(a,"f",function(){return C}),r.d(a,"d",function(){return m}),r.d(a,"m",function(){return h}),r.d(a,"l",function(){return y}),r.d(a,"b",function(){return v}),r.d(a,"a",function(){return k});var t=r("YTJj"),n=(r.n(t),r("a3Yh")),o=r.n(n),c=r("rVsN"),s=r.n(c),i=function(){return new s.a(function(e,a){window.client.request({url:"/api/MH0003.json",adapter:"CommonAdapter",procedure:"MH0003",parameters:"[{'tranCode':'MH0003','srcChannel':'MH'}]",success:function(r){var t=r.root;if("0"==t.ec){for(var n=[],o=t.cd.result.kColl,c=0;c<o.length;c++)n.push({key:o[c].aprShowMsg,value:o[c].aprValue});e(n)}else a(t.em)},error:function(){console.log("loadMH0003错误")}})})},d=function(e){return new s.a(function(a,r){window.client.request({url:"/api/MH0078.json",adapter:"CommonAdapter",isLogin:!0,procedure:"second_MH0078",parameters:"[{'tranCode':'MH0078','srcChannel':'MH','cardNo':"+e+"}]",success:function(e){"0"==e.header.errorCode||"1"==e.header.errorCode?a(e.header.errorCode):r(e.header.errorMsg)},error:function(){console.log("MH0078接口错误")}})})},u=function(e){return new s.a(function(a,r){window.client.request({url:"/api/MH0234.json",adapter:"CommonAdapter",procedure:"MH0234",parameters:"[{'tranCode':'MH0234','cardNo':"+e+"}]",success:function(e){"0"==e.header.errorCode?a(e.body.getCardNo):r(e.header.errorMsg)},error:function(){console.log("loadMH0234接口错误")}})})},l=function(e){var a=e.keyFactor,r=e.isActive,t=e.submitType,n=e.getUserInfo;console.log(a);var o=(a.activeFlag=r,a);return new s.a(function(e,a){window.client.request({url:"/api/MH0321.json",adapter:"CommonAdapter",procedure:"MH0321",parameters:"["+o+"]",success:function(a){var o=a.body;if("0"==o.ec){var c={};if("Y"==r)switch(o.returnCode){case"00":c={resBody:o,num:"04",fixedCardState:"activeSuccess"};break;case"01":c={resBody:o,num:"04",fixedCardState:"canActive"};break;case"10":case"20":c={resBody:o,num:"04",fixedCardState:"activeFailure"}}else if("1"==t)c={resBody:o,num:"04",fixedCardState:"activeSuccess"};else if("2"==t&&"01"==o.returnCode)c={resBody:o,num:"04",fixedCardState:"canActive"};else{if("3"!=t||"01"!=o.returnCode&&"10"!=o.returnCode&&"20"!=o.returnCode)return!1;c={resBody:o,num:"04",fixedCardState:"cannotActive"}}e(c)}else void 0!=n.CardType&&("JK_card"==n.CardType?b("您的登录手机号与在我行预留的手机号不一致,建议试用预留手机号注册/登录"):"BF_card"==n.CardType&&b("您的登录手机号与在我行预留的手机号不一致,建议试用预留手机号注册/登录"))},error:function(){console.log("loadMH0321接口错误")}})})},p=function(e){var a=e.accountNo,r=e.certType,t=e.certNo;return new s.a(function(e,n){window.client.request({url:"/api/MH0320.json",adapter:"CommonAdapter",procedure:"MH0320",parameters:"[{'tranCode':'MH0320','srcChannel':'MH','accountNo':"+a+",'certType':"+r+",'certNo':"+t+"}]",success:function(a){if("0"==a.body.ec)if("0"==a.body.optionFlag){var r=a.body.mobileNo;console.log(r.length-4);var t=r.substr(r.length-4,4);console.log(t),b("已向尾号为"+t+"的手机号发送验证码"),e("1")}else b("请稍后再重新获取!"),n("0");else console.log(a.body.em)},error:function(){console.log("loadMH0320错误")}})})},b=function(e){__Vue__.$vux.toast.show({text:e,type:"text",height:"10rem",width:"60%"})},f=function(e,a){var r="";switch(e+="",a){case"1":r=e.replace(/(\d{4})/g,"$1 ");break;case"2":r=e.split(" ").join("");break;case"3":r=e.substr(0,4)+"****"+e.substr(e.length-4,4);break;default:r=e}return r},C=function(e){var a=e.customerId,r=e.mobileNo;return new s.a(function(e,t){window.client.request({url:"/api/MH0348.json",adapter:"CommonAdapter",procedure:"MH0348",parameters:"'tranCode':'MH0348','srcChannel':'MH','transferFlowNoNew':'1111111111','customerId':"+a+",'mobileNo':"+r,success:function(a){"0"==a.body.ec?e("00"==a.body.pswdStatus?!0:!1):console.log(a.body.em)},error:function(){console.log("MH0348接口错误!")}})})},m=function(e){var a=e.cardNo,r=e.cerdNo,t=e.num,n=e.option,c=e.name,i=e.mobileNo;return new s.a(function(e,s){var d,u=(d={tranCode:"MH0437",bankNo:"171002",fwdCode:"03069201",ClientManager:"03069201",transferKindOTra:"100003",acctNo:a},o()(d,"tranCode","MH0437"),o()(d,"srcChannel","MH"),d);"0"==t?(u.idno=encodeURI(r),u.idtype=n,u.custName=encodeURI(c)):u.oBankMobileNo=i,window.client.request({url:"/api/MH0437.json",adapter:"CommonAdapter",procedure:"MH0437",parameters:"["+u+"]",success:function(a){if("0"==a.body.ec){var r={};r.relNo=a.body.relNo,r.xid=a.body.xid,r.hostReturnTime=a.body.hostReturnTime,r.all=!0,e(r)}else b(a.body.em)},error:function(){console.log("MH0437接口错误!")}})})},h=function(e){var a=e.cardNo,r=e.mobileNo;return new s.a(function(e,t){window.client.request({url:"/api/MH0345li.json",adapter:"CommonAdapter",procedure:"MH0435",parameters:"[{'tranCode':'','srcChannel':'','merId':'','transType':'','data':'','signData':'','remark':'','accNo':"+a+",'phone':"+r+"}]",success:function(a){"0"==a.header.errorCode&&"0"==a.body.ec?e(a.body):b(a.body.em)},error:function(){console.log("MH0345接口错误!")}})})},y=function(e){var a=e.cardNo;return new s.a(function(e,r){window.client.request({url:"/api/MH0346.json",adapter:"CommonAdapter",procedure:"second_MH0346",parameters:'[{"tranCode": "", "srcChannel": "", "mobileNo": "", "txnType": "", "txnSubType": "",  "bizType": "", "accessType": "", "channelType": "", "acqInsCode": "", "merId": "", "merName": "", "merAbbr": "", "subMerId": "", "subMerName": "", "subMerAbbr": "", "orderId": "", "txnTime": "","accNo": "", "customerInfo": "", "encryptCertId": "", "encryptCard": '+a+',\t"cardFrontNo": '+a.substr(0,6)+', "cardEndNo": '+a.substr(a.length-4,a.length)+"}]",success:function(a){"0"==a.header.errorCode&&"0"==a.body.ec?e(a.body):b(a.header.em)},error:function(){console.log("MH0346接口错误")}})})},k=function(e){var a="",r="default",t="black";switch(e){case"CGB":a="广发银行",r="00",t="red";break;case"BOC":a="中国银行",r="01",t="red";break;case"ICBC":a="工商银行",r="02",t="red";break;case"CMB":a="招商银行",r="03",t="red";break;case"HXB":a="华夏银行",r="04",t="red";break;case"CNCB":a="中信银行",r="05",t="red";break;case"BCCB":a="北京银行",r="06",t="red";break;case"GZCB":a="广州银行",r="07",t="red";break;case"CCB":a="建设银行",r="08",t="blue";break;case"BOCOM":a="交通银行",r="09",t="blue";break;case"SPDB":a="浦发银行",r="10",t="blue";break;case"BOS":a="上海银行",r="11",t="blue";break;case"ABC":a="农业银行",r="12",t="green";break;case"CMBC":a="民生银行",r="13",t="green";break;case"PSBC":a="邮政储蓄银行",r="14",t="green";break;case"PAB":a="平安银行",r="15",t="yellow";break;case"CEB":a="光大银行",r="16",t="purple";break;case"DGCB":a="东莞银行";break;case"BOHC":a="渤海银行";break;case"BOJS":a="江苏银行";break;case"BOLY":a="洛阳银行";break;case"BOSZS":a="石嘴山银行";break;case"CBCRB":a="重庆北碚稠州村镇银行";break;case"CQRCB":a="重庆农商银行";break;case"GHCRB":a="花都稠村镇银行";break;case"FUXINBANK":a="阜新银行";break;case"GXNX":a="广西农村信用社";break;case"GDRCC":a="广东农村信用社";break;case"HBXH":a="湖北农村信用社";break;case"HEBNX":a="河北农村信用社";break;case"AHRCU":a="安徽农村信用社";break;case"BRCB":a="北京农商银行";break;case"GRCB":a="广州农商银行";break;case"JLCB":a="吉林银行";break;case"JLPRCU":a="吉林农村信用社";break;case"JNBANK":a="济宁银行";break;case"JSRCU":a="江苏农村信用社";break;case"JNRCB":a="江南农商银行";break;case"JYRB":a="江苏江阴农商银行";break;case"LJB":a="龙江银行";break;case"KSRB":a="昆山农商银行";break;case"QHRCU":a="青海农村信用社";break;case"RCCOSD":a="山东农村信用社";break;case"SCRCU":a="四川农村信用社";break;case"SDEBANK":a="佛山顺德农村信用社";break;case"SDRCB":a="顺德农商银行";break;case"SZRB":a="深圳农商银行";break;case"TJBHB":a="天津滨海农商银行";break;case"XMCCB":a="厦门银行";break;case"YCCCB":a="宁夏银行";break;case"YDRCB":a="山西尧都农商银行";break;case"YZRB":a="宁波鄞州农村合作银行";break;case"ZYCCB":a="遵义商业银行";break;case"GHB":a="广东华兴银行";break;case"SDB":a="深圳发展银行";break;default:a=card.issInsName}return a.length>10&&(a=a.substring(0,10)+"..."),{bank:a,LOGO:r,color:t}},v=function(e){var a="";switch(e){case"1":a="理财通卡";break;case"2":a="信用卡";break;case"3":a="定期存折";break;case"4":a="活期存折";break;case"5":a="定期存单";break;case"00":a="未知";break;case"01":a="储蓄卡";break;case"02":a="信用卡";break;case"03":a="准贷记账户";break;case"04":a="借贷合一账户";break;case"05":a="预付费账户";break;case"06":a="半开放预付费账户"}return a}},"2hw5":function(e,a,r){"use strict";var t=r("hArn");a.a={name:"check-icon",components:{Icon:t.a},methods:{updateValue:function(){this.$emit("update:value",!this.value)}},props:{value:{type:Boolean,default:!1},type:{type:String,default:"default"}}}},"3zbh":function(e,a,r){"use strict";var t=function(){var e=this,a=e.$createElement;return(e._self._c||a)("p",{staticClass:"vux-divider"},[e._t("default")],2)},n=[],o={render:t,staticRenderFns:n};a.a=o},"I/np":function(e,a,r){"use strict";var t=r("neaj"),n=r("bfy7"),o=r("0Qor");a.a={name:"register_success",data:function(){return{demo2:!0,addCardType:"4",cardNo:"",mobileNo:"",backPage:""}},computed:{rtext:function(){return"3"!=this.addCardType&&"4"!=this.addCardType?"添加卡片":"开通线上消费"},tips:function(){return"0"==this.addCardType||"1"==this.addCardType||"5"==this.addCardType?"<p>您的卡片仅可线上消费</p><p>如需开通扫码付，请点击下方按钮</p><p>或在“卡片管理”操作</p>":"2"==this.addCardType?"<p>您的卡片仅可线上消费</p><p></p>如需开通扫码付，请在“卡片管理”操作</p>":void 0},title:function(){return"3"!=this.addCardType&&"4"!=this.addCardType?"银行卡添加成功":"线上消费开通成功"},btnName:function(){return"2"==this.addCardType||"3"==this.addCardType?"继续支付":"4"==this.addCardType?"完成":"继续开通扫码付"}},components:{CheckIcon:t.a,Divider:n.a},methods:{external:function(){console.log("外部链接")},goAgreement:function(){this.$router.push({name:"user_protocol"})},gpPay:function(){var e=this;"继续支付"==this.btnName?console.log("返回继续支付"):"继续开通扫码付"==this.btnName?(console.log("监听第三方(银联)返回事件"),r.i(o.l)({cardNo:this.cardNo}).then(function(a){var r={};r.cardNo=e.cardNo,r.backPage=e.backPage,r.addCardType=e.addCardType,r.successFlag="1"==a.successFlag,e.$router.push({name:"registerOpenResult"},r)}),r.i(o.m)({mobileNo:this.mobileNo,cardNo:this.cardNo}).then(function(a){var r={url:a.url,accNo:decodeURIComponent(a.accNo),accType:a.accType,accessType:a.accessType,backUrl:a.backUrl,bizType:a.bizType,certId:a.certId,channelType:a.channelType,customerInfo:decodeURIComponent(a.customerInfoMo),encoding:a.encoding,frontUrl:a.frontUrl,merId:a.merId,orderId:a.orderId,payTimeout:a.payTimeout,signMethod:a.signMethod,tokenPayData:a.tokenPayData,txnSubType:a.txnSubType,txnTime:a.txnTime,txnType:a.txnType,version:a.version,encryptCertId:a.encryptCertId,signature:decodeURIComponent(a.signData)};e.$router.push({name:"showwebviewpost",params:r})})):"完成"==this.btnName&&("0"==this.addCardType?console.log("首次加挂他行卡成功时退出登陆"):"1"!=this.addCardType&&"4"!=this.addCardType||this.getCardInfo())},getCardInfo:function(){for(var e,a=this.$store.getters.getStateKey("WL-Authentication-Success.UserInfoAuthRealm.attributes.data").data,r=[],t=0;t<a.length;t++)if((e=a[t].encryptCard)==this.orParams.cardNo){r=getBankLogoColor(a[t].dispose_org),r.bank=a[t].issInsName2,r.bank.length>10&&(r.bank=r.bank.substr(0,10)+"..."),r.flag=a[t].flag,r.type=a[t].recAccountType,r.cardType=getCardType(r.type),r.cardNumber=e,r.number="**** **** **** "+e.substr(e.length-4,e.length),r.scanFlag=a[t].scanFlag,r.consumerFlag=a[t].consumeFlag,r.alias=a[t].alias,r.prodLev1Name=r.bank+r.cardType;var n=r.alias&&r.alias.length?" - "+r.alias:"2"==r.type&&r.prodLev1Name.length&&"广发信用卡"!=r.prodLev1Name?" - "+r.prodLev1Name:"";r.cardName=n;break}this.$router.push({name:"credit_info_cardDetail",cardInfo:r})}},created:function(){this.addCardType=this.$route.params.addCardType,this.cardNo=this.$route.params.cardNo,this.backPage=this.$route.parmams.backPage,this.mobileNo=this.$route.params.mobileNo,"0"==this.addCardType?console.log("重新登录"):"1"==this.addCardType||"4"==this.addCardType?console.log("跳转卡片详情页！"):console.log("跳转到扫码付")}}},JboF:function(e,a,r){"use strict";a.a={name:"divider"}},OetK:function(e,a,r){"use strict";var t=r("neaj"),n=r("bfy7"),o=r("0Qor");t.a,n.a},OmWI:function(e,a){},SPHO:function(e,a,r){"use strict";var t=function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("div",{staticClass:"vux-check-icon",on:{click:e.updateValue}},[r("icon",{directives:[{name:"show",rawName:"v-show",value:"default"===e.type&&e.value,expression:"type === 'default' && value"}],attrs:{type:"success"}}),e._v(" "),r("icon",{directives:[{name:"show",rawName:"v-show",value:"plain"===e.type&&e.value,expression:"type === 'plain' && value"}],attrs:{type:"success_circle"}}),e._v(" "),r("icon",{directives:[{name:"show",rawName:"v-show",value:!e.value,expression:"!value"}],attrs:{type:"circle"}}),e._v(" "),r("span",[e._t("default")],2)],1)},n=[],o={render:t,staticRenderFns:n};a.a=o},Uq6Z:function(e,a,r){"use strict";function t(e){r("apgO")}Object.defineProperty(a,"__esModule",{value:!0});var n=(r("OetK"),r("I/np")),o=r("nJfD"),c=r("C7Lr"),s=t,i=c(n.a,o.a,!1,s,null,null);a.default=i.exports},YTJj:function(e,a,r){"use strict";a.__esModule=!0,a.default=function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}},apgO:function(e,a){},bfy7:function(e,a,r){"use strict";function t(e){r("kUNP")}var n=(r("zgmn"),r("JboF")),o=r("3zbh"),c=r("C7Lr"),s=t,i=c(n.a,o.a,!1,s,null,null);a.a=i.exports},f8Pl:function(e,a,r){e.exports=r.p+"static/img/chenggong@3x.png"},kUNP:function(e,a){},nJfD:function(e,a,r){"use strict";var t=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("xcgb-box",[t("xcgb-head",{attrs:{title:e.rtext,keepAlive:!1,rightOptions:[{type:"text",str:"完成",color:"#222"}]},on:{rightHandler:e.gpPay}}),e._v(" "),t("div",{staticClass:"main"},[t("div",{staticClass:"success"},[t("img",{attrs:{src:r("f8Pl"),alt:""}}),e._v(" "),t("p",{staticClass:"notes"},[e._v(e._s(e.title))]),e._v(" "),t("div",{staticClass:"accNo",domProps:{innerHTML:e._s(e.tips)}}),e._v(" "),t("button",{staticClass:"sucBtn",on:{click:function(a){e.gpPay()}}},[e._v(e._s(e.btnName))]),e._v(" "),t("check-icon",{attrs:{value:e.demo2,type:"plain"},on:{"update:value":function(a){e.demo2=a}}},[t("span",[e._v("已阅读并同意")]),t("br"),e._v(" "),t("a",{on:{click:function(a){e.goAgreement()}}},[e._v("《广发银行发现精彩客户端扫码付款用户协议》")])]),e._v(" "),t("div",{staticClass:"floor"},[t("divider",[e._v("\n          新卡尝鲜\n        ")]),e._v(" "),t("img",{attrs:{src:r("vV5x"),alt:""},on:{click:function(a){e.external()}}})],1)],1)])],1)},n=[],o={render:t,staticRenderFns:n};a.a=o},neaj:function(e,a,r){"use strict";function t(e){r("OmWI")}var n=(r("s7ZW"),r("2hw5")),o=r("SPHO"),c=r("C7Lr"),s=t,i=c(n.a,o.a,!1,s,null,null);a.a=i.exports},s7ZW:function(e,a,r){"use strict";var t=r("hArn");t.a,Boolean,String},vV5x:function(e,a,r){e.exports=r.p+"static/img/09.png"},zgmn:function(e,a,r){"use strict"}});