(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{136:function(t,e,n){t.exports={header:"Header_header__3DeAq"}},140:function(t,e,n){},141:function(t,e,n){t.exports={item:"Post_item__288uQ"}},142:function(t,e,n){},26:function(t,e,n){t.exports={nav:"Nav_nav__2hth2",item:"Nav_item__1W6dT",activeLink:"Nav_activeLink__2vev1",active:"Nav_active__2u5aq"}},27:function(t,e,n){t.exports={container:"Users_container__24lju",box:"Users_box__2b-RK",ava:"Users_ava__2DOrr",textArea:"Users_textArea__1lN72",nameMessageArea:"Users_nameMessageArea__1PiZY",countruCityArea:"Users_countruCityArea__2mF15",button:"Users_button__2IRaI",activePage:"Users_activePage__1PvTQ",boxes:"Users_boxes__2jUHr",pageNumberStyle:"Users_pageNumberStyle__2aHnj"}},299:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(11),s=n(42),i=n(5),c=n(131),u=n.n(c).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"a40d8e19-8ad7-4404-b77e-7dea185478ff"}}),l=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return u.get("users?count=".concat(t,"&page=").concat(e)).then((function(t){return t.data}))},j=function(t){return u.delete("follow/".concat(t))},d=function(t){return u.post("follow/".concat(t))},b=function(){return u.get("auth/me").then((function(t){return t.data}))},O=function(t){return u.post("/auth/login",t)},h=function(){return u.delete("/auth/login")},p={setStatusAuthor:function(t){return u.put("/profile/status",{status:t}).then((function(t){return t.data}))},getStatusAuthor:function(t){return u.get("/profile/status/".concat(t)).then((function(t){return t.data}))},getProfileUser:function(t){return u.get("profile/".concat(t)).then((function(t){return t.data}))}},f=function(t){return{type:"GET_STATUS_USER",status:t}},g={posts:[{id:1,message:"Hi, how are you?",likeCount:12},{id:2,message:"It's my first post",likeCount:11}],profileUser:null,statusAuthor:""},m=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADDPOST":return Object(i.a)(Object(i.a)({},t),{},{posts:[].concat(Object(s.a)(t.posts),[{message:e.text,id:3,likeCount:10}])});case"ADD_PROFILE_USER":return Object(i.a)(Object(i.a)({},t),{},{profileUser:Object(i.a)(Object(i.a)({},t.profileUser),e.model)});case"GET_STATUS_USER":return Object(i.a)(Object(i.a)({},t),{},{statusAuthor:e.status});default:return t}},x={dialogs:[{name:"Andrey",id:1},{name:"Vova",id:2},{name:"Igor",id:3}],message:[{message:"Hi hello",id:1},{message:"Good morning",id:2}]},v=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADDDIALOG":var n={name:"Sergey E",id:7},a={message:e.text,id:7};return Object(i.a)(Object(i.a)({},t),{},{dialogs:[].concat(Object(s.a)(t.dialogs),[n]),message:[].concat(Object(s.a)(t.message),[a])});default:return t}},A={users:[],pageSize:3,totalCount:10,actionPage:2,isLoaded:!1,statusButton:!1,followArrButton:[],followBoolButton:!1},_=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"FOLLOW":return Object(i.a)(Object(i.a)({},t),{},{users:t.users.map((function(t){return t.id===e.userId?Object(i.a)(Object(i.a)({},t),{},{followed:!0}):t}))});case"UNFOLLOW":return Object(i.a)(Object(i.a)({},t),{},{users:t.users.map((function(t){return t.id===e.userId?Object(i.a)(Object(i.a)({},t),{},{followed:!1}):t}))});case"SETUSER":return Object(i.a)(Object(i.a)({},t),{},{users:Object(s.a)(e.users)});case"SET_TOTAL_COUNT":return Object(i.a)(Object(i.a)({},t),{},{totalCount:e.totalCount});case"SET_ACTION_PAGE":return Object(i.a)(Object(i.a)({},t),{},{actionPage:e.actionPage});case"SET_LOADED":return Object(i.a)(Object(i.a)({},t),{},{isLoaded:e.isLoaded});case"IS_DISABLED_BUTTON":return Object(i.a)(Object(i.a)({},t),{},{followArrButton:e.followBoolButton?[].concat(Object(s.a)(t.followArrButton),[e.id]):t.followArrButton.filter((function(t){return t!==e.id}))});default:return t}},S=function(t){return{type:"FOLLOW",userId:t}},L=function(t){return{type:"UNFOLLOW",userId:t}},N=function(t){return{type:"SETUSER",users:t}},y=function(t){return{type:"SET_TOTAL_COUNT",totalCount:t}},C=function(t){return{type:"SET_ACTION_PAGE",actionPage:t}},P=function(t){return{type:"SET_LOADED",isLoaded:t}},I=function(t,e){return{type:"IS_DISABLED_BUTTON",followBoolButton:t,id:e}},w=n(35),U={id:null,email:null,login:null,isLog:!1},k=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"GET_AUTHOR":return Object(i.a)(Object(i.a)({},t),e.payload);default:return t}},E=function(t,e,n,a){return{type:"GET_AUTHOR",payload:{id:t,email:n,login:e,isLog:a}}},T=function(){return function(t){return b().then((function(e){if(0===e.resultCode){var n=e.data,a=n.id,r=n.login,o=n.email;t(E(a,o,r,!0))}}))}},D=n(132),B=n(130),F={initialazed:!1,captcha:""},R=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"INITIAL_SUCCESS":return Object(i.a)(Object(i.a)({},t),{},{initialazed:!0});default:return t}},M=Object(o.c)({profilePage:m,dialogsPage:v,usersPage:_,author:k,form:B.a,app:R}),G=Object(o.e)(M,Object(o.a)(D.a));window.store=G;var z=G,W=n(36),H=n.n(W),q=n(12),K=n(38),J=n(39),Z=n(41),Q=n(40),V=n(91),Y=n.n(V),X=n(26),$=n.n(X),tt=n(17),et=n(1);function nt(){return Object(et.jsxs)("nav",{className:$.a.nav,children:[Object(et.jsx)("div",{className:$.a.item,children:Object(et.jsx)(tt.b,{to:"/profile",activeClassName:$.a.activeLink,children:"Profile"})}),Object(et.jsx)("div",{className:"".concat($.a.item," ").concat($.a.active),children:Object(et.jsx)(tt.b,{to:"/message",activeClassName:$.a.activeLink,children:"Message"})}),Object(et.jsx)("div",{className:$.a.item,children:Object(et.jsx)(tt.b,{to:"/users",activeClassName:$.a.activeLink,children:"Users"})}),Object(et.jsx)("div",{className:$.a.item,children:Object(et.jsx)(tt.b,{to:"/login",activeClassName:$.a.activeLink,children:"Login"})})]})}var at=n(8),rt=n(27),ot=n.n(rt),st=n.p+"static/media/user.73a7815d.svg",it=function(t){for(var e=t.totalCount,n=t.pageSize,a=t.clickActionPage,r=t.users,o=t.unFollow,s=t.follow,i=t.actionPage,c=t.followArrButton,u=Math.ceil(e/(100*n)),l=[],j=1;j<u;j++)l.push(j);return Object(et.jsxs)("div",{className:ot.a.container,children:[Object(et.jsx)("div",{className:ot.a.boxes,children:l.map((function(t){return Object(et.jsx)("div",{className:"".concat(t===i?ot.a.activePage:""," ").concat(ot.a.pageNumberStyle),onClick:function(e){a(t)},children:t})}))}),r.map((function(t){return Object(et.jsxs)("div",{className:ot.a.box,children:[Object(et.jsxs)("div",{className:ot.a.ava,children:[Object(et.jsx)(tt.b,{to:"/profile/"+t.id,activeClassName:ot.a.activeLink,children:Object(et.jsx)("img",{src:null===t.photos.small?st:t.photos.small})}),t.followed?Object(et.jsx)("button",{disabled:c.some((function(e){return e==t.id})),onClick:function(){o(t.id)},children:"UNFollow"}):Object(et.jsx)("button",{disabled:c.some((function(e){return e==t.id})),onClick:function(){s(t.id)},children:"follow"})]}),Object(et.jsx)("div",{className:ot.a.textArea,children:Object(et.jsxs)("div",{className:ot.a.nameMessageArea,children:[Object(et.jsx)("div",{children:t.name}),Object(et.jsx)("div",{children:t.status})]})})]},t.id)})),Object(et.jsx)("button",{className:ot.a.button,children:"Show more"})]})},ct=n.p+"static/media/Preloader.9dd581ae.gif";var ut=function(){return Object(et.jsx)("div",{style:{backgroundColor:"white"},children:Object(et.jsx)("img",{src:ct})})},lt=n(135);var jt=Object(lt.a)((function(t){return t.usersPage.users}),(function(t){return t.filter((function(t){return!0}))}));function dt(t){return t.usersPage.pageSize}function bt(t){return t.usersPage.totalCount}function Ot(t){return t.usersPage.actionPage}function ht(t){return t.usersPage.isLoaded}function pt(t){return t.usersPage.followArrButton}function ft(t){return t.usersPage.followBoolButton}var gt=function(t){Object(Z.a)(n,t);var e=Object(Q.a)(n);function n(){var t;Object(K.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).clickActionPage=function(e){t.props.getUser(t.props.pageSize,e)},t}return Object(J.a)(n,[{key:"componentDidMount",value:function(){this.props.getUser(this.props.pageSize,this.props.actionPage)}},{key:"render",value:function(){return Object(et.jsxs)(et.Fragment,{children:[this.props.isLoaded?Object(et.jsx)(ut,{}):null,Object(et.jsx)(it,{totalCount:this.props.totalCount,pageSize:this.props.pageSize,clickActionPage:this.clickActionPage,users:this.props.users,unFollow:this.props.unFollowBlock,follow:this.props.followBlock,actionPage:this.props.actionPage,followArrButton:this.props.followArrButton})]})}}]),n}(r.a.Component),mt=Object(q.b)((function(t){return{users:jt(t),pageSize:dt(t),totalCount:bt(t),actionPage:Ot(t),isLoaded:ht(t),followArrButton:pt(t),followBoolButton:ft(t)}}),{followBlock:function(t){return function(e){e(I(!0,t)),d(t).then((function(n){0==n.data.resultCode&&e(S(t)),e(I(!1,t))}))}},unFollowBlock:function(t){return function(e){e(I(!0,t)),j(t).then((function(n){0==n.data.resultCode&&e(L(t)),e(I(!1,t))}))}},isdisabledButton:I,getUser:function(t,e){return function(n){n(P(!0)),l(t,e).then((function(t){n(P(!1)),n(N(t.items)),n(y(t.totalCount)),n(C(e))}))}}})(gt),xt=n(136),vt=n.n(xt),At=n(316);function _t(t){return Object(et.jsx)("div",{className:vt.a.header,children:Object(et.jsxs)("header",{children:[t.isLog?Object(et.jsxs)("div",{children:[Object(et.jsx)("div",{children:t.login}),Object(et.jsx)("div",{children:t.email}),Object(et.jsx)("div",{children:t.idAuthor}),Object(et.jsx)("h1",{children:"Hello"})]}):Object(et.jsx)(tt.b,{to:"/login",children:"Login"}),t.isLog&&Object(et.jsx)(At.a,{variant:"contained",color:"secondary",type:"button",onClick:function(){t.logOutAuthor()},children:"Log Out"})]})})}var St=function(t){Object(Z.a)(n,t);var e=Object(Q.a)(n);function n(){return Object(K.a)(this,n),e.apply(this,arguments)}return Object(J.a)(n,[{key:"render",value:function(){return Object(et.jsx)(_t,{idAuthor:this.props.idAuthor,email:this.props.email,login:this.props.login,isLog:this.props.isLog,logOutAuthor:this.props.logOutAuthor})}}]),n}(r.a.Component),Lt=Object(q.b)((function(t){return{idAuthor:t.author.id,email:t.author.email,login:t.author.login,isLog:t.author.isLog}}),{getAuthor:T,logOutAuthor:function(){return function(t){h().then((function(e){0===e.data.resultCode&&t(E(null,null,null,!1))}))}}})(St),Nt=n(31),yt=n.n(Nt),Ct=function(t){return Object(et.jsx)("div",{className:yt.a.message,children:t.message})},Pt=function(t){var e="/message/".concat(t.id);return Object(et.jsx)("div",{className:yt.a.dialogsItem,children:Object(et.jsx)(tt.b,{to:e,className:yt.a.dialog,children:t.name})})},It=n(128),wt=n(129),Ut=function(t){var e=t.children,n=t.label,a=t.meta,r=a.touched,o=a.error;return Object(et.jsxs)("div",{children:[Object(et.jsx)("label",{children:n}),Object(et.jsxs)("div",{children:[e,r&&o&&Object(et.jsx)("span",{children:o})]})]})},kt=function(t){return Object(et.jsx)(Ut,Object(i.a)(Object(i.a)({},t),{},{children:Object(et.jsx)("textarea",Object(i.a)(Object(i.a)({},t.input),{},{placeholder:t.label},t))}))},Et=function(t){return Object(et.jsx)(Ut,Object(i.a)(Object(i.a)({},t),{},{children:Object(et.jsx)("input",Object(i.a)(Object(i.a)({},t.input),{},{placeholder:t.label},t))}))},Tt=function(t){return Object(et.jsx)(Ut,Object(i.a)(Object(i.a)({},t),{},{children:Object(et.jsx)("input",Object(i.a)(Object(i.a)({},t.input),{},{placeholder:t.label},t))}))};function Dt(t,e,n,a,r){return Object(et.jsx)(It.a,{type:r,name:t,component:e,label:n,validate:a})}var Bt,Ft,Rt=function(t){return t||"number"===typeof t?void 0:"Required"},Mt=(Bt=7,function(t){return t&&t.length<Bt?"Must be ".concat(Bt," characters or less"):void 0}),Gt=(Ft=20,function(t){return t&&t.length>Ft?"Must be ".concat(Ft," characters or less"):void 0}),zt=Object(wt.a)({form:"dialogsForm"})((function(t){return Object(et.jsx)("form",{onSubmit:t.handleSubmit,children:Object(et.jsxs)("div",{className:yt.a.dialogsWrapper,children:[Object(et.jsx)(It.a,{name:"textarea",type:"text",component:kt,label:"Enter message",validate:[Rt,Gt]}),Object(et.jsx)("button",{children:"Add post"})]})})})),Wt=n(143),Ht=function(t){return{isLog:t.author.isLog}};var qt=Object(o.d)(Object(q.b)((function(t){return{dialogsPage:t.dialogsPage}}),(function(t){return{addDialog:function(e){t(function(t){return{type:"ADDDIALOG",text:t}}(e))}}})),(function(t){return Object(q.b)(Ht)((function(e){var n=e.isLog,a=Object(Wt.a)(e,["isLog"]);return n?Object(et.jsx)(t,Object(i.a)({},a)):Object(et.jsx)(at.a,{to:"/login"})}))}))((function(t){var e=t.dialogsPage,n=t.addDialog,a=e,r=a.dialogs.map((function(t){return Object(et.jsx)(Pt,{name:t.name})})),o=a.message.map((function(t){return Object(et.jsx)(Ct,{message:t.message})}));return Object(et.jsxs)("div",{className:yt.a.dialogs,children:[Object(et.jsx)("div",{className:yt.a.dialogsItem,children:r}),Object(et.jsx)("div",{className:yt.a.messages,children:o}),Object(et.jsx)(zt,{onSubmit:function(t){n(t.textarea)}})]})})),Kt=n(140),Jt=n.n(Kt),Zt=n(141),Qt=n.n(Zt);function Vt(t){return Object(et.jsxs)("div",{className:Qt.a.item,children:[t.message,t.likeCount]})}var Yt=n(97),Xt=n.n(Yt),$t=Object(q.b)((function(t){return{profilePagePosts:t.profilePage.posts}}),{addPost:function(t){return{type:"ADDPOST",text:t}}})((function(t){var e=t.profilePagePosts,n=t.addPost,a=e.map((function(t){return Object(et.jsx)(Vt,{message:t.message,likeCount:t.likeCount})}));return Object(et.jsxs)("div",{className:Xt.a.postsBlock,children:[Object(et.jsx)("h3",{children:"My posts"}),Object(et.jsx)(te,{onSubmit:function(t){n(t.textarea)}}),Object(et.jsx)("div",{className:Xt.a.posts,children:a})]})})),te=Object(wt.a)({form:"myPostsForm"})((function(t){return Object(et.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(et.jsx)("div",{children:Object(et.jsx)(It.a,{name:"textarea",type:"text",component:kt,label:"Enter message",validate:[Rt,Gt]})}),Object(et.jsx)("div",{children:Object(et.jsx)("button",{type:"submit",children:"Submit"})})]})})),ee=n(142),ne=n.n(ee),ae=n(98),re=r.a.memo((function(t){var e=t.statusAuthor,n=t.setStatusAuthor,r=Object(a.useState)(!1),o=Object(ae.a)(r,2),s=o[0],i=o[1],c=Object(a.useState)(t.statusAuthor),u=Object(ae.a)(c,2),l=u[0],j=u[1];Object(a.useEffect)((function(){j(e)}),[e]);return Object(et.jsxs)("div",{children:[!s&&Object(et.jsx)("div",{children:Object(et.jsx)("span",{onDoubleClick:function(){return i(!0)},children:e||"double click here to change the status!!"})}),s&&Object(et.jsx)("div",{children:Object(et.jsx)("input",{autoFocus:!0,onBlur:function(){i(!1),n(l)},value:l,onChange:function(t){j(t.currentTarget.value)}})})]})})),oe=function(t){var e,n,a=t.profileUser,r=t.statusAuthor,o=t.setStatusAuthor;return Object(et.jsxs)("div",{className:ne.a.profileInfo,children:[Object(et.jsxs)("div",{children:[Object(et.jsx)("div",{children:Object(et.jsx)("img",{src:"".concat(a&&(null===(e=a.photos)||void 0===e?void 0:e.large)?a.photos.small:st)})}),Object(et.jsx)("div",{children:a&&a.fullName}),Object(et.jsx)("div",{children:a&&(null===(n=a.contacts)||void 0===n?void 0:n.github)}),Object(et.jsx)("div",{children:a&&a.lookingForAJobDescription})]}),Object(et.jsx)("div",{children:Object(et.jsx)(re,{statusAuthor:r,setStatusAuthor:o})})]})},se=function(t){var e=t.profileUser,n=t.statusAuthor,a=t.setStatusAuthor;return Object(et.jsxs)("div",{className:Jt.a.profile,children:[Object(et.jsx)(oe,{profileUser:e,statusAuthor:n,setStatusAuthor:a}),Object(et.jsx)($t,{})]})},ie=function(t){Object(Z.a)(n,t);var e=Object(Q.a)(n);function n(){return Object(K.a)(this,n),e.apply(this,arguments)}return Object(J.a)(n,[{key:"componentDidMount",value:function(){var t=+this.props.match.params.userId;t?(this.props.getProfileUser(t),this.props.getStatusAuthor(t)):(t=this.props.authorId)||this.props.history.push("/login")}},{key:"render",value:function(){return Object(et.jsx)(et.Fragment,{children:Object(et.jsx)(se,{profileUser:this.props.profileUser,statusAuthor:this.props.statusAuthor,setStatusAuthor:this.props.setStatusAuthor})})}}]),n}(r.a.Component),ce=Object(o.d)(Object(q.b)((function(t){return{profileUser:t.profilePage.profileUser,statusAuthor:t.profilePage.statusAuthor,authorId:t.author.id}}),{getProfileUser:function(t){return function(e){p.getProfileUser(t).then((function(t){e({type:"ADD_PROFILE_USER",model:t})}))}},getStatusAuthor:function(t){return function(e){p.getStatusAuthor(t).then((function(t){e(f(t))}))}},setStatusAuthor:function(t){return function(e){p.setStatusAuthor(t).then((function(n){0===n.resultCode&&e(f(t))}))}}}),at.g)(ie),ue=n(313),le=n(314),je=n(315);var de=function(t){return Object(et.jsx)("form",{onSubmit:t.handleSubmit,children:Object(et.jsx)(ue.a,{style:{width:"400px"},children:Object(et.jsxs)(le.a,{children:[Object(et.jsx)(je.a,{style:{padding:"10px 0px"},container:!0,item:!0,xs:8,spacing:1,children:Dt("email",Et,"enter email: lismgmk2@gmail.com",[Rt],"text")}),Object(et.jsx)(je.a,{style:{padding:"10px 0px"},container:!0,item:!0,xs:8,spacing:1,children:Dt("password",Et,"enter password: '12345890'",[Rt,Mt],"password")}),Object(et.jsx)(je.a,{style:{padding:"10px 0px"},container:!0,item:!0,xs:8,spacing:1,children:Dt("rememberMe",Tt,"rememberMe",[],"checkBox")}),t.error&&Object(et.jsx)("div",{children:t.error}),Object(et.jsx)(je.a,{style:{padding:"10px 0px"},container:!0,item:!0,xs:8,spacing:1,children:Object(et.jsxs)("div",{children:[Object(et.jsx)(At.a,{variant:"contained",color:"secondary",type:"submit",disabled:t.pristine||t.submitting,children:"Submit"}),Object(et.jsx)(At.a,{variant:"contained",color:"secondary",type:"button",disabled:t.pristine||t.submitting,onClick:t.reset,children:"Clear Values"})]})})]})})})},be=Object(wt.a)({form:"loginForm"})(de),Oe=Object(q.b)((function(t){return{statusAuthor:t.profilePage.statusAuthor,isLog:t.author.isLog,captcha:t.app.captcha}}),{logInAuthor:function(t){return function(e){O(t).then((function(t){if(0===t.data.resultCode)e(T());else{var n=t.data.messages.length>0?t.data.messages[0]:"Some error";e(Object(w.a)("loginForm",{_error:n}))}}))}}})((function(t){var e=t.isLog,n=t.captcha,a=t.logInAuthor;return e?Object(et.jsx)(at.a,{to:"/profile"}):Object(et.jsx)(be,{onSubmit:function(t){return a(t)},captcha:n})})),he=function(t){Object(Z.a)(n,t);var e=Object(Q.a)(n);function n(){return Object(K.a)(this,n),e.apply(this,arguments)}return Object(J.a)(n,[{key:"componentDidMount",value:function(){this.props.getInitialAuthor()}},{key:"render",value:function(){return this.props.initialazed?Object(et.jsxs)("div",{className:Y.a.appWrapper,children:[Object(et.jsx)(Lt,{}),Object(et.jsx)(nt,{}),Object(et.jsx)("div",{className:Y.a.main,children:Object(et.jsxs)(at.d,{children:[Object(et.jsx)(at.b,{path:"/",exact:!0,render:function(){return Object(et.jsx)(at.a,{to:pe.SOCIAL_NETWORK})}}),Object(et.jsx)(at.b,{exact:!0,path:pe.SOCIAL_NETWORK,render:function(){return Object(et.jsx)(ce,{})}}),Object(et.jsx)(at.b,{exact:!0,path:pe.SOCIAL_PROFILE,render:function(){return Object(et.jsx)(ce,{})}}),Object(et.jsx)(at.b,{exact:!0,path:pe.SOCIAL_USERS,render:function(){return Object(et.jsx)(mt,{})}}),Object(et.jsx)(at.b,{path:pe.SOCIAL_LOGIN,render:function(){return Object(et.jsx)(Oe,{})}}),Object(et.jsx)(at.b,{path:pe.SOCIAL_MESSAGE,render:function(){return Object(et.jsx)(qt,{})}}),Object(et.jsx)(at.b,{path:pe.SOCIAL_404,render:function(){return Object(et.jsx)("h1",{children:"404: PAGE NOT FOUND"})}}),Object(et.jsx)(at.a,{from:"*",to:pe.SOCIAL_404})]})})]}):Object(et.jsx)(ut,{})}}]),n}(r.a.Component),pe={SOCIAL_NETWORK:"/Social-Network",SOCIAL_PROFILE:"/Social-Network/profile",SOCIAL_MESSAGE:"/Social-Network/message",SOCIAL_USERS:"/Social-Network/users",SOCIAL_LOGIN:"/Social-Network/login",SOCIAL_404:"/Social-Network/404"},fe=Object(o.d)(Object(q.b)((function(t){return{initialazed:t.app.initialazed}}),{getInitialAuthor:function(){return function(t){t(T()).then((function(){t({type:"INITIAL_SUCCESS"})}))}}}),at.g)(he),ge=function(){H.a.render(Object(et.jsx)(tt.a,{children:Object(et.jsx)(q.a,{store:z,children:Object(et.jsx)(fe,{})})}),document.getElementById("root"))};ge(),z.subscribe((function(){ge()}))},31:function(t,e,n){t.exports={dialogs:"Dialogs_dialogs__3ZNsw",dialogsItem:"Dialogs_dialogsItem__1yqes",messages:"Dialogs_messages__1Ttja",message:"Dialogs_message__3s4ub",active:"Dialogs_active__DBF9A"}},91:function(t,e,n){t.exports={appWrapper:"App_appWrapper__5tq-f",main:"App_main__2-cSZ"}},97:function(t,e,n){}},[[299,1,2]]]);
//# sourceMappingURL=main.fb281dfc.chunk.js.map