(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{46:function(e,t,a){e.exports=a(81)},51:function(e,t,a){},81:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(18),i=a.n(r),s=(a(51),a(10)),c=a(11),o=a(13),m=a(12),u=a(14),h=a(7),d=a(82),p=a(83),g=a(84),b=a(96),E=a(85),y=a(86),f=a(87),w=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).toggle=a.toggle.bind(Object(h.a)(Object(h.a)(a))),a.state={isOpen:!1},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){this.props.classes;return l.a.createElement("div",null," ",l.a.createElement(d.a,{style:{backgroundColor:"#7F3F98"},dark:!0,expand:"md"},l.a.createElement(p.a,{href:"/"},"CricFantasy"),l.a.createElement(g.a,{onClick:this.toggle}),l.a.createElement(b.a,{isOpen:this.state.isOpen,navbar:!0},l.a.createElement(E.a,{className:"ml-auto",navbar:!0},l.a.createElement(y.a,null,l.a.createElement(f.a,{href:"/signin"},"Login")),l.a.createElement(y.a,null,l.a.createElement(f.a,{href:"/register"},"Register"))))))}}]),t}(l.a.Component),O=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(w,null),l.a.createElement("style",null,"body { background-color: black; }"))}}]),t}(n.Component),v=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).toggle=a.toggle.bind(Object(h.a)(Object(h.a)(a))),a.state={isOpen:!1},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){this.props.classes;return l.a.createElement("div",null," ",l.a.createElement(d.a,{style:{backgroundColor:"#7F3F98"},dark:!0,expand:"md"},l.a.createElement(p.a,null,"CricFantasy"),l.a.createElement(g.a,{onClick:this.toggle}),l.a.createElement(b.a,{isOpen:this.state.isOpen,navbar:!0},l.a.createElement(E.a,{className:"ml-auto",navbar:!0},l.a.createElement(y.a,null,l.a.createElement(f.a,{href:"/dashboard"},"Dashboard")),l.a.createElement(y.a,null,l.a.createElement(f.a,{href:"/rules"},"Scoring rules")),l.a.createElement(y.a,null,l.a.createElement(f.a,{href:"/"},"Logout"))))))}}]),t}(l.a.Component),C=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(v,null),l.a.createElement("style",null,"body { background-color: black; }"))}}]),t}(n.Component),j=a(43),k=a(17),N=a(19),F=a(88),I=a(89),S=a(90),x=a(91),A=a(92),q=a(93),D=a(94),z=a(95),B=a(20),P=a.n(B),L=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).onFormSubmit=function(e){e.preventDefault(),""==a.state.email|""==a.state.password?alert("Please check your input fields"):P.a.post("/api/signin",null,{params:{email:a.state.email,password:a.state.password}}).catch(function(e){alert(e),a.state.error=1}).then(function(e){1!=a.state.error&&a.props.history.push("home?".concat(a.state.email))})},a.state={email:"",password:"",error:0},a.handleInputChange=a.handleInputChange.bind(Object(h.a)(Object(h.a)(a))),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"handleInputChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(N.a)({},a,n))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(O,null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(F.a,{style:{width:"40%",verticalAlign:"center",margin:"auto",padding:5,display:"block",backgroundColor:"#2E353B",horizontalAlign:"center"}},l.a.createElement(I.a,{style:{backgroundColor:"#CD853F",color:"white"}},l.a.createElement("strong",null,"Sign in")),l.a.createElement(S.a,null,l.a.createElement(x.a,null,l.a.createElement(A.a,null,l.a.createElement(q.a,{for:"email",style:{color:"white"}},"Email"),l.a.createElement(D.a,{onChange:this.handleInputChange,style:{width:"100%"},type:"email",name:"email",id:"email",value:this.state.email,required:!0})),l.a.createElement(A.a,null,l.a.createElement(q.a,{for:"password",style:{color:"white"}},"Password"),l.a.createElement(D.a,{onChange:this.handleInputChange,style:{width:"100%"},type:"password",name:"password",id:"password",value:this.state.password,required:!0})),l.a.createElement(z.a,{style:{verticalAlign:"center",margin:"auto",padding:10,display:"block",horizontalAlign:"center",backgroundColor:"#7F3F98"},type:"submit",onClick:this.onFormSubmit},"Sign in")))))}}]),t}(n.Component),R=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).onFormSubmit=function(e){e.preventDefault(),""==a.state.email|""==a.state.password|""==a.state.firstName|""==a.state.lastName|""==a.state.teamName?alert("Please check your input fields"):P.a.post("/api/register",null,{params:{email:a.state.email,password:a.state.password,firstName:a.state.firstName,lastName:a.state.lastName,teamName:a.state.teamName}}).then(function(e){alert(e.data)})},a.state={email:"",password:"",firstName:"",lastName:"",teamName:""},a.handleInputChange=a.handleInputChange.bind(Object(h.a)(Object(h.a)(a))),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"handleInputChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(N.a)({},a,n))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(O,null),l.a.createElement("br",null),l.a.createElement(F.a,{style:{width:"40%",verticalAlign:"center",margin:"auto",padding:5,display:"block",backgroundColor:"#2E353B",horizontalAlign:"center"}},l.a.createElement(I.a,{style:{backgroundColor:"#CD853F",color:"white"}},l.a.createElement("strong",null,"Register")),l.a.createElement(S.a,null,l.a.createElement(x.a,{onSubmit:this.onFormSubmit},l.a.createElement(A.a,null,l.a.createElement(q.a,{for:"firstName",style:{color:"white"}},"First Name"),l.a.createElement(D.a,{onChange:this.handleInputChange,style:{width:"100%"},type:"text",name:"firstName",id:"firstName",value:this.state.firstName,required:!0})),l.a.createElement(A.a,null,l.a.createElement(q.a,{for:"lastName",style:{color:"white"}},"Last Name"),l.a.createElement(D.a,{onChange:this.handleInputChange,style:{width:"100%"},type:"text",name:"lastName",id:"lastName",value:this.state.lastName,required:!0})),l.a.createElement(A.a,null,l.a.createElement(q.a,{for:"teamName",style:{color:"white"}},"Team Name"),l.a.createElement(D.a,{onChange:this.handleInputChange,style:{width:"100%"},type:"text",name:"teamName",id:"teamName",value:this.state.teamName,required:!0})),l.a.createElement(A.a,null,l.a.createElement(q.a,{for:"email",style:{color:"white"}},"Email"),l.a.createElement(D.a,{onChange:this.handleInputChange,style:{width:"100%"},type:"email",name:"email",id:"email",value:this.state.email,required:!0})),l.a.createElement(A.a,null,l.a.createElement(q.a,{for:"password",style:{color:"white"}},"Password"),l.a.createElement(D.a,{onChange:this.handleInputChange,style:{width:"100%"},type:"password",name:"password",id:"password",value:this.state.password,required:!0})),l.a.createElement(z.a,{style:{verticalAlign:"center",margin:"auto",padding:10,display:"block",horizontalAlign:"center",backgroundColor:"#7F3F98"},type:"submit",onClick:this.onFormSubmit},"Register")))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(78);var J=l.a.createElement(j.a,null,l.a.createElement("div",null,l.a.createElement(k.a,{path:"/",exact:!0,component:O}),l.a.createElement(k.a,{path:"/signin",exact:!0,component:L}),l.a.createElement(k.a,{path:"/register",exact:!0,component:R}),l.a.createElement(k.a,{path:"/home",exact:!1,component:C})));i.a.render(J,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[46,1,2]]]);
//# sourceMappingURL=main.31d394b1.chunk.js.map