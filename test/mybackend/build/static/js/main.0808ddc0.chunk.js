(this.webpackJsonpmyfrontend=this.webpackJsonpmyfrontend||[]).push([[0],{18:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),r=n(10),i=n.n(r),c=(n(18),n(7)),o=n.n(c),u=n(8),l=n(3),p=n(4),h=n(6),d=n(5),b=n(1),j=new function e(){Object(l.a)(this,e),Object(b.h)(this,{loading:!0,isLoggedIn:!1,username:"",email:""})},m=(n.p,n(9),n(2)),f=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){var e=this;return Object(m.jsx)("div",{className:"submitButton",children:Object(m.jsx)("button",{className:"btn",disabled:this.props.disabled,onClick:function(){return e.props.onClick()},children:this.props.text})})}}]),n}(s.a.Component),g=n(13),v=n(12),O=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){var e=this;return Object(m.jsx)("div",{className:"inputField",children:Object(m.jsx)("input",{className:"input",type:this.props.type,placeholder:this.props.placeholder,value:this.props.value,onChange:function(t){return e.props.onChange(t.target.value)}})})}}]),n}(s.a.Component),x=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={username:"",email:"",password:"",buttonDisabled:!1},a}return Object(p.a)(n,[{key:"setInputValue",value:function(e,t){(t=t.trim()).length>12||this.setState(Object(v.a)({},e,t))}},{key:"resetForm",value:function(){this.setState({username:"",email:"",password:"",buttonDisabled:!1})}},{key:"doLogin",value:function(){var e=Object(u.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.state.username){e.next=2;break}return e.abrupt("return");case 2:if(this.state.email){e.next=4;break}return e.abrupt("return");case 4:if(this.state.password){e.next=6;break}return e.abrupt("return");case 6:return this.setState({buttonDisabled:!0}),e.prev=7,e.next=10,fetch("/login",{method:"post",headers:{Accept:"application/json","Component-Type":"application/json"},body:JSON.stringify({username:this.state.username,email:this.state.email,password:this.state.password})});case 10:return t=e.sent,e.next=13,t.json();case 13:(n=e.sent)&&n.success?(j.isLoggedIn=!0,j.username=n.username,j.email=n.email):n&&!1===n.success&&(this.resetForm(),alert(n.msg)),e.next=21;break;case 17:e.prev=17,e.t0=e.catch(7),console.log(e.t0),this.resetForm();case 21:case"end":return e.stop()}}),e,this,[[7,17]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(m.jsxs)("div",{className:"loginForm",children:["Login",Object(m.jsx)(O,{className:"input",placeholder:"UserName",value:this.state.username?this.state.username:"",onChange:function(t){return e.setInputValue("username",t)}}),Object(m.jsx)(O,{className:"input",placeholder:"Email",value:this.state.email?this.state.email:"",onChange:function(t){return e.setInputValue("email",t)}}),Object(m.jsx)(O,{className:"input",placeholder:"Password",value:this.state.password?this.state.password:"",onChange:function(t){return e.setInputValue("password",t)}}),Object(m.jsx)(f,{text:"Login",disabled:this.state.buttonDisabled,onClick:function(){return e.doLogin()}})]})}}]),n}(s.a.Component),y=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=Object(u.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/isLoggedIn",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"}});case 3:return t=e.sent,e.next=6,t.json();case 6:(n=e.sent)&&n.success?(j.loading=!1,j.isLoggedIn=!0,j.username=n.username):(j.loading=!1,j.isLoggedIn=!1),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),j.loading=!1,j.isLoggedIn=!1;case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"doLogOut",value:function(){var e=Object(u.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/logout",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"}});case 3:return t=e.sent,e.next=6,t.json();case 6:(n=e.sent)&&n.success&&(j.isLoggedIn=!1,j.username=""),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return j.loading?Object(m.jsx)("div",{className:"app",children:Object(m.jsx)("div",{className:"container",children:"Loading, Please Wait..."})}):(j.isLoggedIn&&j.username,Object(m.jsx)("div",{className:"app",children:Object(m.jsx)("div",{className:"container",children:Object(m.jsx)(x,{})})}))}}]),n}(s.a.Component),k=Object(g.a)(y),w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),r(e),i(e)}))};i.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(k,{})}),document.getElementById("root")),w()},9:function(e,t,n){}},[[22,1,2]]]);
//# sourceMappingURL=main.0808ddc0.chunk.js.map