(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5e4fae4c"],{"0411":function(t,e,r){"use strict";r("c08d")},"3d4f":function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal fade",attrs:{id:"new-reply-modal",tabindex:"-1","aria-labelledby":"newReplyModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog"},[a("div",{staticClass:"modal-content"},[t._m(0),a("div",{staticClass:"modal-body d-flex flex-column"},[a("div",{staticClass:"tweet-card d-flex"},[a("div",{staticClass:"h-100 d-flex flex-column"},[a("img",{staticClass:"avatar",attrs:{src:t.tweet.User.avatar,alt:"",width:"50px",height:"50px"}}),a("div",{staticClass:"border ms-4"})]),a("div",{staticClass:"tweet-info d-flex flex-column"},[a("div",{staticClass:"h-100"},[a("span",{staticClass:"text-name me-2"},[t._v(t._s(t.tweet.User.name))]),a("span",{staticClass:"text-account"},[t._v("@"+t._s(t.tweet.User.account)+"．"+t._s(t._f("fromNow")(t.tweet.createdAt)))])]),a("div",{staticClass:"tweet-content"},[t._v(" "+t._s(t.tweet.description)+" ")]),a("div",[a("span",{staticClass:"text-account"},[t._v("回覆給")]),a("span",{staticClass:"text-tag ms-2"},[t._v("@"+t._s(t.tweet.User.name))])])])]),a("div",{staticClass:"reply-content d-flex"},[a("div",[a("img",{staticClass:"avatar",attrs:{width:"50px",src:t.currentUser.avatar,alt:""}})]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.comment,expression:"comment"}],staticClass:"input-new-tweet mt-2",attrs:{rows:"5",cols:"50",placeholder:"推你的回覆"},domProps:{value:t.comment},on:{input:function(e){e.target.composing||(t.comment=e.target.value)}}})])]),a("div",{staticClass:"modal-footer"},[t.isError?a("span",{staticClass:"text-danger"},[t._v(t._s(t.errorMsg))]):t._e(),a("button",{staticClass:"btn-active",attrs:{type:"submit"},on:{click:t.handleSubmit}},[t._v(" 回覆 ")])])])]),!1!==t.alertStatus?a("div",{staticClass:"alert d-flex fixed-top",attrs:{id:"alert",role:"alert"}},[a("div",{staticClass:"ms-2 mx-auto my-auto text-alert"},[t._v(t._s(t.alertMsg))]),a("div",{staticClass:"ms-auto"},["error"===t.alertStatus?a("img",{attrs:{src:r("ba0e")}}):"success"===t.alertStatus?a("img",{attrs:{src:r("08f6")}}):t._e()])]):t._e()])},s=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"modal-header"},[r("button",{staticClass:"btn-close",attrs:{type:"button","data-bs-dismiss":"modal","aria-label":"Close"}})])}],n=r("1da1"),i=r("5530"),c=(r("96cf"),r("d9e2"),r("c1df")),o=r.n(c),u=r("2f62"),l=r("6783"),d={name:"NewReplyModal",props:{tweet:{type:[Array,Object]}},data:function(){return{comment:"",alertMsg:"",alertStatus:!1,isError:!1,errorMsg:""}},computed:Object(i["a"])({},Object(u["b"])(["currentUser"])),filters:{fromNow:function(t){return t?o()(t).fromNow():"-"}},methods:{alertShow:function(){var t=this,e=r("7b17"),a=document.querySelector("#alert");e.Alert.getInstance(a),setTimeout((function(){t.alertStatus=!1}),2e3)},hideModal:function(){var t=r("7b17"),e=document.querySelector("#new-reply-modal"),a=t.Modal.getInstance(e);setTimeout((function(){a.hide()}),1e3)},handleSubmit:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,t.comment){e.next=5;break}return t.isError=!0,t.errorMsg="內容不可空白",e.abrupt("return");case 5:return e.next=7,l["a"].postTweetReply({id:t.tweet.id,comment:t.comment});case 7:if(r=e.sent,a=r.data,"error"!==a.status){e.next=11;break}throw new Error(a.message);case 11:t.$emit("after-reply-submit",{tweetId:t.tweet.id,replyCount:t.tweet.replyCount+1}),t.$emit("after-single-reply",{User:t.currentUser,comment:t.comment,created_at:(new Date).toISOString()}),t.alertMsg="留言成功",t.alertStatus="success",t.alertShow(),t.comment="",t.hideModal(),e.next=26;break;case 20:e.prev=20,e.t0=e["catch"](0),t.comment="",t.alertMsg=e.t0.response.data.message,t.alertStatus="error",t.alertShow();case 26:case"end":return e.stop()}}),e,null,[[0,20]])})))()}}},f=d,m=(r("78c9"),r("2877")),p=Object(m["a"])(f,a,s,!1,null,"424fbc06",null);e["a"]=p.exports},"46ef":function(t,e,r){},"4c78":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex flex-column vh-100"},[a("div",{staticClass:"title menu-text"},[t._v("首頁")]),a("NewTweet",{on:{"after-new-tweet":t.afterNewTweet}}),a("div",{staticClass:"border"}),a("div",{attrs:{id:"tweet-list"}},[t.isLoading?a("Spinner"):t._e(),t._l(t.allTweets,(function(e){return a("div",{key:e.id,staticClass:"tweet-card d-flex"},[a("router-link",{attrs:{to:{name:"user-profile",params:{userId:e.User.id}}}},[a("img",{staticClass:"avatar",attrs:{width:"50px",src:e.User.avatar,alt:""}})]),a("div",{staticClass:"tweet-info d-flex flex-column"},[a("div",{},[a("span",{staticClass:"text-name me-2"},[t._v(t._s(e.User.name))]),a("span",{staticClass:"text-account"},[t._v("@"+t._s(e.User.account)+"．"+t._s(t._f("fromNow")(e.createdAt)))])]),a("div",{staticClass:"tweet-content"},[a("router-link",{attrs:{to:{name:"single-tweet",params:{tweetId:e.id,tweet:e}}}},[t._v(" "+t._s(e.description)+" ")])],1),a("div",{staticClass:"action mt-auto my-1"},[a("button",{staticClass:"btn-reply",attrs:{"data-bs-toggle":"modal","data-bs-target":"#new-reply-modal"},on:{click:function(r){return t.handleReplyModal(e)}}},[a("img",{attrs:{src:r("6211"),width:"12px"}}),a("span",{staticClass:"text-like-reply"},[t._v(" "+t._s(e.replyCount)+" ")])]),e.isLike?a("button",{staticClass:"btn-like",attrs:{disabled:t.isProcessing},on:{click:function(r){return t.deleteLike(e.id)}}},[a("img",{attrs:{src:r("9267"),width:"12px"}}),a("span",{staticClass:"text-like-reply"},[t._v(t._s(e.likeCount))])]):a("button",{staticClass:"btn-like",attrs:{disabled:t.isProcessing},on:{click:function(r){return t.addLike(e.id)}}},[a("img",{attrs:{src:r("cb58"),width:"12px"}}),a("span",{staticClass:"text-like-reply"},[t._v(t._s(e.likeCount))])])])])],1)}))],2),a("NewReplyModal",{attrs:{tweet:t.tweetActive},on:{"after-reply-submit":t.afterReplySubmit}}),!1!==t.alertStatus?a("div",{staticClass:"alert d-flex fixed-top",attrs:{id:"alert",role:"alert"}},[a("div",{staticClass:"ms-2 mx-auto my-auto text-alert"},[t._v(t._s(t.alertMsg))]),a("div",{staticClass:"ms-auto"},["error"===t.alertStatus?a("img",{attrs:{src:r("ba0e")}}):"success"===t.alertStatus?a("img",{attrs:{src:r("08f6")}}):t._e()])]):t._e()],1)},s=[],n=r("1da1"),i=r("5530"),c=(r("96cf"),r("d81d"),r("d9e2"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex",attrs:{id:"new-tweet"}},[a("div",[a("img",{staticClass:"avatar",attrs:{width:"50px",src:t.currentUser.avatar,alt:""}})]),a("div",{staticClass:"d-flex flex-column"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],staticClass:"input-new-tweet mt-2",attrs:{rows:"1",cols:"65",placeholder:"有什麼新鮮事？"},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}}),a("div",{staticClass:"mt-auto ms-auto"},[t.isError?a("span",{staticClass:"text-danger"},[t._v(t._s(t.errorMsg))]):t._e(),a("button",{staticClass:"btn-active post",attrs:{type:"submit",disabled:t.isProcessing},on:{click:function(e){return e.preventDefault(),t.handleSubmit.apply(null,arguments)}}},[t._v(" 推文 ")])])]),!1!==t.alertStatus?a("div",{staticClass:"alert d-flex fixed-top",attrs:{id:"alert",role:"alert"}},[a("div",{staticClass:"ms-2 mx-auto my-auto text-alert"},[t._v(t._s(t.alertMsg))]),a("div",{staticClass:"ms-auto"},["error"===t.alertStatus?a("img",{attrs:{src:r("ba0e")}}):"success"===t.alertStatus?a("img",{attrs:{src:r("08f6")}}):t._e()])]):t._e()])}),o=[],u=(r("a4d3"),r("e01a"),r("b0c0"),r("2f62")),l=r("6783"),d={name:"NewTweet",data:function(){return{description:"",isError:!1,errorMsg:"",isProcessing:!1,alertMsg:"",alertStatus:!1}},computed:Object(i["a"])({},Object(u["b"])(["currentUser","newTweets"])),methods:{alertShow:function(){var t=this,e=r("7b17"),a=document.querySelector("#alert");e.Alert.getInstance(a),setTimeout((function(){t.alertStatus=!1}),2e3)},handleSubmit:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var r,a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,t.description){e.next=7;break}return t.isError=!0,t.errorMsg="內容不可空白",e.abrupt("return");case 7:if(!(t.description.length>140)){e.next=13;break}return t.isError=!0,t.errorMsg="字數不可超過 140 字",e.abrupt("return");case 13:t.isError=!1;case 14:return t.isProcessing=!0,e.next=17,l["a"].postTweet({description:t.description});case 17:r=e.sent,a=r.data,console.log(a),s={UserId:t.currentUser.id,description:t.description,replyCount:0,likeCount:0,createdAt:(new Date).toISOString(),User:{avatar:t.currentUser.avatar,name:t.currentUser.name,account:t.currentUser.account}},t.$store.commit("setNewTweet",s),t.$emit("after-new-tweet"),t.alertMsg="推文成功",t.alertStatus="success",t.alertShow(),t.isProcessing=!1,t.description="",e.next=35;break;case 30:e.prev=30,e.t0=e["catch"](0),t.alertMsg=e.t0.response.data.message,t.alertStatus="error",t.alertShow();case 35:case"end":return e.stop()}}),e,null,[[0,30]])})))()}}},f=d,m=(r("0411"),r("2877")),p=Object(m["a"])(f,c,o,!1,null,"316e6fdd",null),v=p.exports,w=r("2375"),b=r("3d4f"),g=r("c1df"),h=r.n(g),x={name:"TweetList",components:{NewTweet:v,NewReplyModal:b["a"],Spinner:w["a"]},data:function(){return{allTweets:[],isLoading:!0,alertMsg:"",alertStatus:!1,tweetActive:[],isProcessing:!1}},computed:Object(i["a"])({},Object(u["b"])(["newTweets"])),filters:{fromNow:function(t){return t?h()(t).fromNow():"-"}},created:function(){this.fetchTweets()},methods:{alertShow:function(){var t=this,e=r("7b17"),a=document.querySelector("#alert");e.Alert.getInstance(a),setTimeout((function(){t.alertStatus=!1}),2e3)},setNewTweets:function(){this.allTweets.unshift(Object(i["a"])({},this.newTweets[0]))},handleReplyModal:function(t){this.tweetActive=Object(i["a"])({},t)},fetchTweets:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l["a"].getTweets();case 3:r=e.sent,a=r.data,t.allTweets=a.map((function(t){return Object(i["a"])({},t)})),t.isLoading=!1,e.next=15;break;case 9:e.prev=9,e.t0=e["catch"](0),t.isLoading=!1,t.alertMsg="取得推文失敗，請稍後再試",t.alertStatus="error",t.alertShow();case 15:case"end":return e.stop()}}),e,null,[[0,9]])})))()},addLike:function(t){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){var a,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,l["a"].addLike({id:t});case 3:if(a=r.sent,s=a.data,e.isProcessing=!0,"error"!==s.status){r.next=8;break}throw new Error(s.message);case 8:e.allTweets=e.allTweets.map((function(e){return e.id!==t?e:Object(i["a"])(Object(i["a"])({},e),{},{likeCount:e.likeCount+1,isLike:!0})})),e.isProcessing=!1,r.next=17;break;case 12:r.prev=12,r.t0=r["catch"](0),e.alertMsg="按讚失敗，請稍後再試",e.alertStatus="error",e.alertShow();case 17:case"end":return r.stop()}}),r,null,[[0,12]])})))()},deleteLike:function(t){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){var a,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,l["a"].deleteLike({id:t});case 3:if(a=r.sent,s=a.data,"error"!==s.status){r.next=7;break}throw new Error(s.message);case 7:e.isProcessing=!0,e.allTweets=e.allTweets.map((function(e){return e.id!==t?e:Object(i["a"])(Object(i["a"])({},e),{},{likeCount:e.likeCount-1,isLike:!1})})),e.isProcessing=!1,r.next=18;break;case 12:r.prev=12,r.t0=r["catch"](0),e.isProcessing=!1,e.alertMsg="取消讚失敗，請稍後再試",e.alertStatus="error",e.alertShow();case 18:case"end":return r.stop()}}),r,null,[[0,12]])})))()},afterNewTweet:function(){this.fetchTweets()},afterReplySubmit:function(t){var e=t.tweetId,r=t.replyCount;this.allTweets=this.allTweets.map((function(t){return t.id!==e?t:Object(i["a"])(Object(i["a"])({},t),{},{replyCount:r})}))}},watch:{newTweets:function(){this.newTweets.length>0&&this.setNewTweets()}}},C=x,y=(r("5f29"),Object(m["a"])(C,a,s,!1,null,"59e4177e",null));e["default"]=y.exports},"5f29":function(t,e,r){"use strict";r("46ef")},6211:function(t,e,r){t.exports=r.p+"img/Reply.c76ba41a.svg"},6783:function(t,e,r){"use strict";r("a4d3"),r("e01a");var a=r("2fa3");e["a"]={getTweets:function(){return a["b"].get("/tweets")},getOneTweet:function(t){var e=t.id;return a["b"].get("/tweets/".concat(e))},postTweet:function(t){var e=t.description;return a["b"].post("/tweets",{description:e})},getTweetReplies:function(t){var e=t.id;return a["b"].get("/tweets/".concat(e,"/replies"))},postTweetReply:function(t){var e=t.id,r=t.comment;return a["b"].post("/tweets/".concat(e,"/replies"),{comment:r})},addLike:function(t){var e=t.id;return a["b"].post("/tweets/".concat(e,"/like"))},deleteLike:function(t){var e=t.id;return a["b"].post("/tweets/".concat(e,"/unlike"))}}},7156:function(t,e,r){var a=r("1626"),s=r("861d"),n=r("d2bb");t.exports=function(t,e,r){var i,c;return n&&a(i=e.constructor)&&i!==r&&s(c=i.prototype)&&c!==r.prototype&&n(t,c),t}},"78c9":function(t,e,r){"use strict";r("bedf")},9267:function(t,e,r){t.exports=r.p+"img/LikeActive.b9abe96b.svg"},ab36:function(t,e,r){var a=r("861d"),s=r("9112");t.exports=function(t,e){a(e)&&"cause"in e&&s(t,"cause",e.cause)}},b980:function(t,e,r){var a=r("d039"),s=r("5c6c");t.exports=!a((function(){var t=Error("a");return!("stack"in t)||(Object.defineProperty(t,"stack",s(1,7)),7!==t.stack)}))},bedf:function(t,e,r){},c08d:function(t,e,r){},c770:function(t,e,r){var a=r("e330"),s=a("".replace),n=function(t){return String(Error(t).stack)}("zxcasd"),i=/\n\s*at [^:]*:[^\n]*/,c=i.test(n);t.exports=function(t,e){if(c&&"string"==typeof t)while(e--)t=s(t,i,"");return t}},cb58:function(t,e,r){t.exports=r.p+"img/Like.236f4f7d.svg"},d81d:function(t,e,r){"use strict";var a=r("23e7"),s=r("b727").map,n=r("1dde"),i=n("map");a({target:"Array",proto:!0,forced:!i},{map:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}})},d9e2:function(t,e,r){var a=r("23e7"),s=r("da84"),n=r("2ba4"),i=r("e5cb"),c="WebAssembly",o=s[c],u=7!==Error("e",{cause:7}).cause,l=function(t,e){var r={};r[t]=i(t,e,u),a({global:!0,forced:u},r)},d=function(t,e){if(o&&o[t]){var r={};r[t]=i(c+"."+t,e,u),a({target:c,stat:!0,forced:u},r)}};l("Error",(function(t){return function(e){return n(t,this,arguments)}})),l("EvalError",(function(t){return function(e){return n(t,this,arguments)}})),l("RangeError",(function(t){return function(e){return n(t,this,arguments)}})),l("ReferenceError",(function(t){return function(e){return n(t,this,arguments)}})),l("SyntaxError",(function(t){return function(e){return n(t,this,arguments)}})),l("TypeError",(function(t){return function(e){return n(t,this,arguments)}})),l("URIError",(function(t){return function(e){return n(t,this,arguments)}})),d("CompileError",(function(t){return function(e){return n(t,this,arguments)}})),d("LinkError",(function(t){return function(e){return n(t,this,arguments)}})),d("RuntimeError",(function(t){return function(e){return n(t,this,arguments)}}))},e01a:function(t,e,r){"use strict";var a=r("23e7"),s=r("83ab"),n=r("da84"),i=r("e330"),c=r("1a2d"),o=r("1626"),u=r("3a9b"),l=r("577e"),d=r("9bf2").f,f=r("e893"),m=n.Symbol,p=m&&m.prototype;if(s&&o(m)&&(!("description"in p)||void 0!==m().description)){var v={},w=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:l(arguments[0]),e=u(p,this)?new m(t):void 0===t?m():m(t);return""===t&&(v[e]=!0),e};f(w,m),w.prototype=p,p.constructor=w;var b="Symbol(test)"==String(m("test")),g=i(p.toString),h=i(p.valueOf),x=/^Symbol\((.*)\)[^)]+$/,C=i("".replace),y=i("".slice);d(p,"description",{configurable:!0,get:function(){var t=h(this),e=g(t);if(c(v,t))return"";var r=b?y(e,7,-1):C(e,x,"$1");return""===r?void 0:r}}),a({global:!0,forced:!0},{Symbol:w})}},e391:function(t,e,r){var a=r("577e");t.exports=function(t,e){return void 0===t?arguments.length<2?"":e:a(t)}},e5cb:function(t,e,r){"use strict";var a=r("d066"),s=r("1a2d"),n=r("9112"),i=r("3a9b"),c=r("d2bb"),o=r("e893"),u=r("7156"),l=r("e391"),d=r("ab36"),f=r("c770"),m=r("b980"),p=r("c430");t.exports=function(t,e,r,v){var w=v?2:1,b=t.split("."),g=b[b.length-1],h=a.apply(null,b);if(h){var x=h.prototype;if(!p&&s(x,"cause")&&delete x.cause,!r)return h;var C=a("Error"),y=e((function(t,e){var r=l(v?e:t,void 0),a=v?new h(t):new h;return void 0!==r&&n(a,"message",r),m&&n(a,"stack",f(a.stack,2)),this&&i(x,this)&&u(a,this,y),arguments.length>w&&d(a,arguments[w]),a}));if(y.prototype=x,"Error"!==g&&(c?c(y,C):o(y,C,{name:!0})),o(y,h),!p)try{x.name!==g&&n(x,"name",g),x.constructor=y}catch(k){}return y}}}}]);
//# sourceMappingURL=chunk-5e4fae4c.9a8c9673.js.map