(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{136:function(t,e,n){t.exports={header:"Header_header__3DeAq"}},140:function(t,e,n){},141:function(t,e,n){t.exports={item:"Post_item__288uQ"}},142:function(t,e,n){},26:function(t,e,n){t.exports={nav:"Nav_nav__2hth2",item:"Nav_item__1W6dT",activeLink:"Nav_activeLink__2vev1",active:"Nav_active__2u5aq"}},27:function(t,e,n){t.exports={container:"Users_container__24lju",box:"Users_box__2b-RK",ava:"Users_ava__2DOrr",textArea:"Users_textArea__1lN72",nameMessageArea:"Users_nameMessageArea__1PiZY",countruCityArea:"Users_countruCityArea__2mF15",button:"Users_button__2IRaI",activePage:"Users_activePage__1PvTQ",boxes:"Users_boxes__2jUHr",pageNumberStyle:"Users_pageNumberStyle__2aHnj"}},299:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),s=n(11),o=n(42),i=n(5),c=n(131),u=n.n(c).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"a40d8e19-8ad7-4404-b77e-7dea185478ff"}}),l=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return u.get("users?count=".concat(t,"&page=").concat(e)).then((function(t){return t.data}))},d=function(t){return u.delete("follow/".concat(t))},j=function(t){return u.post("follow/".concat(t))},b=function(){return u.get("auth/me").then((function(t){return t.data}))},h=function(t){return u.post("/auth/login",t)},p=function(){return u.delete("/auth/login")},O={setStatusAuthor:function(t){return u.put("/profile/status",{status:t}).then((function(t){return t.data}))},getStatusAuthor:function(t){return u.get("/profile/status/".concat(t)).then((function(t){return t.data}))},getProfileUser:function(t){return u.get("profile/".concat(t)).then((function(t){return t.data}))}},f=function(t){return{type:"GET_STATUS_USER",status:t}},g={posts:[{id:1,message:"Hi, how are you?",likeCount:12},{id:2,message:"It's my first post",likeCount:11}],profileUser:null,statusAuthor:""},m=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADDPOST":return Object(i.a)(Object(i.a)({},t),{},{posts:[].concat(Object(o.a)(t.posts),[{message:e.text,id:3,likeCount:10}])});case"ADD_PROFILE_USER":return Object(i.a)(Object(i.a)({},t),{},{profileUser:Object(i.a)(Object(i.a)({},t.profileUser),e.model)});case"GET_STATUS_USER":return Object(i.a)(Object(i.a)({},t),{},{statusAuthor:e.status});default:return t}},x={dialogs:[{name:"Andrey",id:1},{name:"Vova",id:2},{name:"Igor",id:3}],message:[{message:"Hi hello",id:1},{message:"Good morning",id:2}]},v=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADDDIALOG":var n={name:"Sergey E",id:7},a={message:e.text,id:7};return Object(i.a)(Object(i.a)({},t),{},{dialogs:[].concat(Object(o.a)(t.dialogs),[n]),message:[].concat(Object(o.a)(t.message),[a])});default:return t}},_={users:[],pageSize:3,totalCount:10,actionPage:2,isLoaded:!1,statusButton:!1,followArrButton:[],followBoolButton:!1},A=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"FOLLOW":return Object(i.a)(Object(i.a)({},t),{},{users:t.users.map((function(t){return t.id===e.userId?Object(i.a)(Object(i.a)({},t),{},{followed:!0}):t}))});case"UNFOLLOW":return Object(i.a)(Object(i.a)({},t),{},{users:t.users.map((function(t){return t.id===e.userId?Object(i.a)(Object(i.a)({},t),{},{followed:!1}):t}))});case"SETUSER":return Object(i.a)(Object(i.a)({},t),{},{users:Object(o.a)(e.users)});case"SET_TOTAL_COUNT":return Object(i.a)(Object(i.a)({},t),{},{totalCount:e.totalCount});case"SET_ACTION_PAGE":return Object(i.a)(Object(i.a)({},t),{},{actionPage:e.actionPage});case"SET_LOADED":return Object(i.a)(Object(i.a)({},t),{},{isLoaded:e.isLoaded});case"IS_DISABLED_BUTTON":return Object(i.a)(Object(i.a)({},t),{},{followArrButton:e.followBoolButton?[].concat(Object(o.a)(t.followArrButton),[e.id]):t.followArrButton.filter((function(t){return t!==e.id}))});default:return t}},S=function(t){return{type:"FOLLOW",userId:t}},y=function(t){return{type:"UNFOLLOW",userId:t}},P=function(t){return{type:"SETUSER",users:t}},N=function(t){return{type:"SET_TOTAL_COUNT",totalCount:t}},L=function(t){return{type:"SET_ACTION_PAGE",actionPage:t}},C=function(t){return{type:"SET_LOADED",isLoaded:t}},w=function(t,e){return{type:"IS_DISABLED_BUTTON",followBoolButton:t,id:e}},U=n(35),k={id:null,email:null,login:null,isLog:!1},I=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"GET_AUTHOR":return Object(i.a)(Object(i.a)({},t),e.payload);default:return t}},T=function(t,e,n,a){return{type:"GET_AUTHOR",payload:{id:t,email:n,login:e,isLog:a}}},D=function(){return function(t){return b().then((function(e){if(0===e.resultCode){var n=e.data,a=n.id,r=n.login,s=n.email;t(T(a,s,r,!0))}}))}},B=n(132),E=n(130),F={initialazed:!1,captcha:""},R=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"INITIAL_SUCCESS":return Object(i.a)(Object(i.a)({},t),{},{initialazed:!0});default:return t}},z=Object(s.c)({profilePage:m,dialogsPage:v,usersPage:A,author:I,form:E.a,app:R}),M=Object(s.e)(z,Object(s.a)(B.a));window.store=M;var G=M,W=n(36),H=n.n(W),q=n(12),J=n(38),Z=n(39),K=n(41),Q=n(40),V=n(91),Y=n.n(V),X=n(26),$=n.n(X),tt=n(17),et=n(1);function nt(){return Object(et.jsxs)("nav",{className:$.a.nav,children:[Object(et.jsx)("div",{className:$.a.item,children:Object(et.jsx)(tt.b,{to:"/profile",activeClassName:$.a.activeLink,children:"Profile"})}),Object(et.jsx)("div",{className:"".concat($.a.item," ").concat($.a.active),children:Object(et.jsx)(tt.b,{to:"/message",activeClassName:$.a.activeLink,children:"Message"})}),Object(et.jsx)("div",{className:$.a.item,children:Object(et.jsx)(tt.b,{to:"/users",activeClassName:$.a.activeLink,children:"Users"})}),Object(et.jsx)("div",{className:$.a.item,children:Object(et.jsx)(tt.b,{to:"/login",activeClassName:$.a.activeLink,children:"Login"})})]})}var at=n(8),rt=n(27),st=n.n(rt),ot=n.p+"static/media/user.73a7815d.svg",it=function(t){for(var e=t.totalCount,n=t.pageSize,a=t.clickActionPage,r=t.users,s=t.unFollow,o=t.follow,i=t.actionPage,c=t.followArrButton,u=Math.ceil(e/(100*n)),l=[],d=1;d<u;d++)l.push(d);return Object(et.jsxs)("div",{className:st.a.container,children:[Object(et.jsx)("div",{className:st.a.boxes,children:l.map((function(t){return Object(et.jsx)("div",{className:"".concat(t===i?st.a.activePage:""," ").concat(st.a.pageNumberStyle),onClick:function(e){a(t)},children:t})}))}),r.map((function(t){return Object(et.jsxs)("div",{className:st.a.box,children:[Object(et.jsxs)("div",{className:st.a.ava,children:[Object(et.jsx)(tt.b,{to:"/profile/"+t.id,activeClassName:st.a.activeLink,children:Object(et.jsx)("img",{src:null===t.photos.small?ot:t.photos.small})}),t.followed?Object(et.jsx)("button",{disabled:c.some((function(e){return e==t.id})),onClick:function(){s(t.id)},children:"UNFollow"}):Object(et.jsx)("button",{disabled:c.some((function(e){return e==t.id})),onClick:function(){o(t.id)},children:"follow"})]}),Object(et.jsx)("div",{className:st.a.textArea,children:Object(et.jsxs)("div",{className:st.a.nameMessageArea,children:[Object(et.jsx)("div",{children:t.name}),Object(et.jsx)("div",{children:t.status})]})})]},t.id)})),Object(et.jsx)("button",{className:st.a.button,children:"Show more"})]})},ct=n.p+"static/media/Preloader.9dd581ae.gif";var ut=function(){return Object(et.jsx)("div",{style:{backgroundColor:"white"},children:Object(et.jsx)("img",{src:ct})})},lt=n(135);var dt=Object(lt.a)((function(t){return t.usersPage.users}),(function(t){return t.filter((function(t){return!0}))}));function jt(t){return t.usersPage.pageSize}function bt(t){return t.usersPage.totalCount}function ht(t){return t.usersPage.actionPage}function pt(t){return t.usersPage.isLoaded}function Ot(t){return t.usersPage.followArrButton}function ft(t){return t.usersPage.followBoolButton}var gt=function(t){Object(K.a)(n,t);var e=Object(Q.a)(n);function n(){var t;Object(J.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))).clickActionPage=function(e){t.props.getUser(t.props.pageSize,e)},t}return Object(Z.a)(n,[{key:"componentDidMount",value:function(){this.props.getUser(this.props.pageSize,this.props.actionPage)}},{key:"render",value:function(){return Object(et.jsxs)(et.Fragment,{children:[this.props.isLoaded?Object(et.jsx)(ut,{}):null,Object(et.jsx)(it,{totalCount:this.props.totalCount,pageSize:this.props.pageSize,clickActionPage:this.clickActionPage,users:this.props.users,unFollow:this.props.unFollowBlock,follow:this.props.followBlock,actionPage:this.props.actionPage,followArrButton:this.props.followArrButton})]})}}]),n}(r.a.Component),mt=Object(q.b)((function(t){return{users:dt(t),pageSize:jt(t),totalCount:bt(t),actionPage:ht(t),isLoaded:pt(t),followArrButton:Ot(t),followBoolButton:ft(t)}}),{followBlock:function(t){return function(e){e(w(!0,t)),j(t).then((function(n){0==n.data.resultCode&&e(S(t)),e(w(!1,t))}))}},unFollowBlock:function(t){return function(e){e(w(!0,t)),d(t).then((function(n){0==n.data.resultCode&&e(y(t)),e(w(!1,t))}))}},isdisabledButton:w,getUser:function(t,e){return function(n){n(C(!0)),l(t,e).then((function(t){n(C(!1)),n(P(t.items)),n(N(t.totalCount)),n(L(e))}))}}})(gt),xt=n(136),vt=n.n(xt),_t=n(316);function At(t){return Object(et.jsx)("div",{className:vt.a.header,children:Object(et.jsxs)("header",{children:[t.isLog?Object(et.jsxs)("div",{children:[Object(et.jsx)("div",{children:t.login}),Object(et.jsx)("div",{children:t.email}),Object(et.jsx)("div",{children:t.idAuthor}),Object(et.jsx)("h1",{children:"Hello"})]}):Object(et.jsx)(tt.b,{to:"/login",children:"Login"}),t.isLog&&Object(et.jsx)(_t.a,{variant:"contained",color:"secondary",type:"button",onClick:function(){t.logOutAuthor()},children:"Log Out"})]})})}var St=function(t){Object(K.a)(n,t);var e=Object(Q.a)(n);function n(){return Object(J.a)(this,n),e.apply(this,arguments)}return Object(Z.a)(n,[{key:"render",value:function(){return Object(et.jsx)(At,{idAuthor:this.props.idAuthor,email:this.props.email,login:this.props.login,isLog:this.props.isLog,logOutAuthor:this.props.logOutAuthor})}}]),n}(r.a.Component),yt=Object(q.b)((function(t){return{idAuthor:t.author.id,email:t.author.email,login:t.author.login,isLog:t.author.isLog}}),{getAuthor:D,logOutAuthor:function(){return function(t){p().then((function(e){0===e.data.resultCode&&t(T(null,null,null,!1))}))}}})(St),Pt=n(31),Nt=n.n(Pt),Lt=function(t){return Object(et.jsx)("div",{className:Nt.a.message,children:t.message})},Ct=function(t){var e="/message/".concat(t.id);return Object(et.jsx)("div",{className:Nt.a.dialogsItem,children:Object(et.jsx)(tt.b,{to:e,className:Nt.a.dialog,children:t.name})})},wt=n(128),Ut=n(129),kt=function(t){var e=t.children,n=t.label,a=t.meta,r=a.touched,s=a.error;return Object(et.jsxs)("div",{children:[Object(et.jsx)("label",{children:n}),Object(et.jsxs)("div",{children:[e,r&&s&&Object(et.jsx)("span",{children:s})]})]})},It=function(t){return Object(et.jsx)(kt,Object(i.a)(Object(i.a)({},t),{},{children:Object(et.jsx)("textarea",Object(i.a)(Object(i.a)({},t.input),{},{placeholder:t.label},t))}))},Tt=function(t){return Object(et.jsx)(kt,Object(i.a)(Object(i.a)({},t),{},{children:Object(et.jsx)("input",Object(i.a)(Object(i.a)({},t.input),{},{placeholder:t.label},t))}))},Dt=function(t){return Object(et.jsx)(kt,Object(i.a)(Object(i.a)({},t),{},{children:Object(et.jsx)("input",Object(i.a)(Object(i.a)({},t.input),{},{placeholder:t.label},t))}))};function Bt(t,e,n,a,r){return Object(et.jsx)(wt.a,{type:r,name:t,component:e,label:n,validate:a})}var Et,Ft,Rt=function(t){return t||"number"===typeof t?void 0:"Required"},zt=(Et=7,function(t){return t&&t.length<Et?"Must be ".concat(Et," characters or less"):void 0}),Mt=(Ft=20,function(t){return t&&t.length>Ft?"Must be ".concat(Ft," characters or less"):void 0}),Gt=Object(Ut.a)({form:"dialogsForm"})((function(t){return Object(et.jsx)("form",{onSubmit:t.handleSubmit,children:Object(et.jsxs)("div",{className:Nt.a.dialogsWrapper,children:[Object(et.jsx)(wt.a,{name:"textarea",type:"text",component:It,label:"Enter message",validate:[Rt,Mt]}),Object(et.jsx)("button",{children:"Add post"})]})})})),Wt=n(143),Ht=function(t){return{isLog:t.author.isLog}};var qt=Object(s.d)(Object(q.b)((function(t){return{dialogsPage:t.dialogsPage}}),(function(t){return{addDialog:function(e){t(function(t){return{type:"ADDDIALOG",text:t}}(e))}}})),(function(t){return Object(q.b)(Ht)((function(e){var n=e.isLog,a=Object(Wt.a)(e,["isLog"]);return n?Object(et.jsx)(t,Object(i.a)({},a)):Object(et.jsx)(at.a,{to:"/login"})}))}))((function(t){var e=t.dialogsPage,n=t.addDialog,a=e,r=a.dialogs.map((function(t){return Object(et.jsx)(Ct,{name:t.name})})),s=a.message.map((function(t){return Object(et.jsx)(Lt,{message:t.message})}));return Object(et.jsxs)("div",{className:Nt.a.dialogs,children:[Object(et.jsx)("div",{className:Nt.a.dialogsItem,children:r}),Object(et.jsx)("div",{className:Nt.a.messages,children:s}),Object(et.jsx)(Gt,{onSubmit:function(t){n(t.textarea)}})]})})),Jt=n(140),Zt=n.n(Jt),Kt=n(141),Qt=n.n(Kt);function Vt(t){return Object(et.jsxs)("div",{className:Qt.a.item,children:[t.message,t.likeCount]})}var Yt=n(97),Xt=n.n(Yt),$t=Object(q.b)((function(t){return{profilePagePosts:t.profilePage.posts}}),{addPost:function(t){return{type:"ADDPOST",text:t}}})((function(t){var e=t.profilePagePosts,n=t.addPost,a=e.map((function(t){return Object(et.jsx)(Vt,{message:t.message,likeCount:t.likeCount})}));return Object(et.jsxs)("div",{className:Xt.a.postsBlock,children:[Object(et.jsx)("h3",{children:"My posts"}),Object(et.jsx)(te,{onSubmit:function(t){n(t.textarea)}}),Object(et.jsx)("div",{className:Xt.a.posts,children:a})]})})),te=Object(Ut.a)({form:"myPostsForm"})((function(t){return Object(et.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(et.jsx)("div",{children:Object(et.jsx)(wt.a,{name:"textarea",type:"text",component:It,label:"Enter message",validate:[Rt,Mt]})}),Object(et.jsx)("div",{children:Object(et.jsx)("button",{type:"submit",children:"Submit"})})]})})),ee=n(142),ne=n.n(ee),ae=n(98),re=r.a.memo((function(t){var e=t.statusAuthor,n=t.setStatusAuthor,r=Object(a.useState)(!1),s=Object(ae.a)(r,2),o=s[0],i=s[1],c=Object(a.useState)(t.statusAuthor),u=Object(ae.a)(c,2),l=u[0],d=u[1];Object(a.useEffect)((function(){d(e)}),[e]);return Object(et.jsxs)("div",{children:[!o&&Object(et.jsx)("div",{children:Object(et.jsx)("span",{onDoubleClick:function(){return i(!0)},children:e||"double click here to change the status!!"})}),o&&Object(et.jsx)("div",{children:Object(et.jsx)("input",{autoFocus:!0,onBlur:function(){i(!1),n(l)},value:l,onChange:function(t){d(t.currentTarget.value)}})})]})})),se=function(t){var e,n,a=t.profileUser,r=t.statusAuthor,s=t.setStatusAuthor;return Object(et.jsxs)("div",{className:ne.a.profileInfo,children:[Object(et.jsxs)("div",{children:[Object(et.jsx)("div",{children:Object(et.jsx)("img",{src:"".concat(a&&(null===(e=a.photos)||void 0===e?void 0:e.large)?a.photos.small:ot)})}),Object(et.jsx)("div",{children:a&&a.fullName}),Object(et.jsx)("div",{children:a&&(null===(n=a.contacts)||void 0===n?void 0:n.github)}),Object(et.jsx)("div",{children:a&&a.lookingForAJobDescription})]}),Object(et.jsx)("div",{children:Object(et.jsx)(re,{statusAuthor:r,setStatusAuthor:s})})]})},oe=function(t){var e=t.profileUser,n=t.statusAuthor,a=t.setStatusAuthor;return Object(et.jsxs)("div",{className:Zt.a.profile,children:[Object(et.jsx)(se,{profileUser:e,statusAuthor:n,setStatusAuthor:a}),Object(et.jsx)($t,{})]})},ie=function(t){Object(K.a)(n,t);var e=Object(Q.a)(n);function n(){return Object(J.a)(this,n),e.apply(this,arguments)}return Object(Z.a)(n,[{key:"componentDidMount",value:function(){var t=+this.props.match.params.userId;t?(this.props.getProfileUser(t),this.props.getStatusAuthor(t)):(t=this.props.authorId)||this.props.history.push("/login")}},{key:"render",value:function(){return Object(et.jsx)(et.Fragment,{children:Object(et.jsx)(oe,{profileUser:this.props.profileUser,statusAuthor:this.props.statusAuthor,setStatusAuthor:this.props.setStatusAuthor})})}}]),n}(r.a.Component),ce=Object(s.d)(Object(q.b)((function(t){return{profileUser:t.profilePage.profileUser,statusAuthor:t.profilePage.statusAuthor,authorId:t.author.id}}),{getProfileUser:function(t){return function(e){O.getProfileUser(t).then((function(t){e({type:"ADD_PROFILE_USER",model:t})}))}},getStatusAuthor:function(t){return function(e){O.getStatusAuthor(t).then((function(t){e(f(t))}))}},setStatusAuthor:function(t){return function(e){O.setStatusAuthor(t).then((function(n){0===n.resultCode&&e(f(t))}))}}}),at.f)(ie),ue=n(313),le=n(314),de=n(315);var je=function(t){return Object(et.jsx)("form",{onSubmit:t.handleSubmit,children:Object(et.jsx)(ue.a,{style:{width:"400px"},children:Object(et.jsxs)(le.a,{children:[Object(et.jsx)(de.a,{style:{padding:"10px 0px"},container:!0,item:!0,xs:8,spacing:1,children:Bt("email",Tt,"enter email: lismgmk2@gmail.com",[Rt],"text")}),Object(et.jsx)(de.a,{style:{padding:"10px 0px"},container:!0,item:!0,xs:8,spacing:1,children:Bt("password",Tt,"enter password: '12345890'",[Rt,zt],"password")}),Object(et.jsx)(de.a,{style:{padding:"10px 0px"},container:!0,item:!0,xs:8,spacing:1,children:Bt("rememberMe",Dt,"rememberMe",[],"checkBox")}),t.error&&Object(et.jsx)("div",{children:t.error}),Object(et.jsx)(de.a,{style:{padding:"10px 0px"},container:!0,item:!0,xs:8,spacing:1,children:Object(et.jsxs)("div",{children:[Object(et.jsx)(_t.a,{variant:"contained",color:"secondary",type:"submit",disabled:t.pristine||t.submitting,children:"Submit"}),Object(et.jsx)(_t.a,{variant:"contained",color:"secondary",type:"button",disabled:t.pristine||t.submitting,onClick:t.reset,children:"Clear Values"})]})})]})})})},be=Object(Ut.a)({form:"loginForm"})(je),he=Object(q.b)((function(t){return{statusAuthor:t.profilePage.statusAuthor,isLog:t.author.isLog,captcha:t.app.captcha}}),{logInAuthor:function(t){return function(e){h(t).then((function(t){if(0===t.data.resultCode)e(D());else{var n=t.data.messages.length>0?t.data.messages[0]:"Some error";e(Object(U.a)("loginForm",{_error:n}))}}))}}})((function(t){var e=t.isLog,n=t.captcha,a=t.logInAuthor;return e?Object(et.jsx)(at.a,{to:"/profile"}):Object(et.jsx)(be,{onSubmit:function(t){return a(t)},captcha:n})})),pe=function(t){Object(K.a)(n,t);var e=Object(Q.a)(n);function n(){return Object(J.a)(this,n),e.apply(this,arguments)}return Object(Z.a)(n,[{key:"componentDidMount",value:function(){this.props.getInitialAuthor()}},{key:"render",value:function(){return this.props.initialazed?Object(et.jsxs)("div",{className:Y.a.appWrapper,children:[Object(et.jsx)(yt,{}),Object(et.jsx)(nt,{}),Object(et.jsxs)("div",{className:Y.a.main,children:[Object(et.jsx)(at.b,{path:"/profile",render:function(){return Object(et.jsx)(ce,{})}}),Object(et.jsx)(at.b,{path:"/message",render:function(){return Object(et.jsx)(qt,{})}}),Object(et.jsx)(at.b,{path:"/login",component:he}),Object(et.jsx)(at.b,{path:"/users",render:function(){return Object(et.jsx)(mt,{})}})]})]}):Object(et.jsx)(ut,{})}}]),n}(r.a.Component),Oe=Object(s.d)(Object(q.b)((function(t){return{initialazed:t.app.initialazed}}),{getInitialAuthor:function(){return function(t){t(D()).then((function(){t({type:"INITIAL_SUCCESS"})}))}}}),at.f)(pe),fe=function(){H.a.render(Object(et.jsx)(tt.a,{children:Object(et.jsx)(q.a,{store:G,children:Object(et.jsx)(Oe,{})})}),document.getElementById("root"))};fe(),G.subscribe((function(){fe()}))},31:function(t,e,n){t.exports={dialogs:"Dialogs_dialogs__3ZNsw",dialogsItem:"Dialogs_dialogsItem__1yqes",messages:"Dialogs_messages__1Ttja",message:"Dialogs_message__3s4ub",active:"Dialogs_active__DBF9A"}},91:function(t,e,n){t.exports={appWrapper:"App_appWrapper__5tq-f",main:"App_main__2-cSZ"}},97:function(t,e,n){}},[[299,1,2]]]);
//# sourceMappingURL=main.9beba643.chunk.js.map