(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{136:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(9),i=t.n(l),o=(t(92),t(22)),c=t(23),m=t(27),s=t(24),d=t(26),u=t(40),p=t(165),f=t(166),g=t(167),h=t(177),b=t(168),E=t(169),y=t(170),w=(t(93),function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(m.a)(this,Object(s.a)(a).call(this,e))).toggle=t.toggle.bind(Object(u.a)(Object(u.a)(t))),t.state={isOpen:!1},t}return Object(d.a)(a,e),Object(c.a)(a,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){this.props.classes;return r.a.createElement("div",null," ",r.a.createElement(p.a,{color:"primary",dark:!0,expand:"md"},r.a.createElement(f.a,{href:"/"},"CricFantasy"),r.a.createElement(g.a,{onClick:this.toggle}),r.a.createElement(h.a,{isOpen:this.state.isOpen,navbar:!0},r.a.createElement(b.a,{className:"ml-auto",navbar:!0},r.a.createElement(E.a,null,r.a.createElement(y.a,{href:"/signin"},"Login")),r.a.createElement(E.a,null,r.a.createElement(y.a,{href:"/register"},"Register"))))))}}]),a}(r.a.Component)),v=function(e){function a(){return Object(o.a)(this,a),Object(m.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"bg"},r.a.createElement(w,null))}}]),a}(n.Component),O=t(79),j=t(28),k=t(6),x=t(81),N=t(171),C=t(174),W=t(175),F=t(172),L=t(176),q=Object(x.a)({palette:{primary:{main:"#1a237e",contrastText:"#fff"},secondary:{light:"#ffd470",main:"#f4a340",dark:"#bd7406",contrastText:"#000"},background:{default:"#212121"}}}),G=function(e){function a(){return Object(o.a)(this,a),Object(m.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",null," ",r.a.createElement(N.a,{theme:q},r.a.createElement(v,null)," ",r.a.createElement("br",null),r.a.createElement("br",null)," ",r.a.createElement(F.a,{className:e.card,style:{width:"30%",verticalAlign:"center",margin:"auto",padding:10,display:"block",backgroundColor:"#ff6e40",horizontalAlign:"center"}},r.a.createElement(C.a,{variant:"h5",component:"h2",style:{color:"#1a237e",paddingLeft:10}},"Sign In"),r.a.createElement("form",{className:e.container},r.a.createElement(W.a,{required:!0,style:{backgroundColor:"white"},id:"outlined-email-input",label:"Email",className:e.textField,type:"email",name:"email",autoComplete:"email",margin:"normal",variant:"filled",fullWidth:"true"}),r.a.createElement(W.a,{required:!0,style:{backgroundColor:"white"},id:"outlined-password-input",label:"Password",className:e.textField,type:"password",autoComplete:"current-password",margin:"normal",variant:"filled",fullWidth:"true"}),r.a.createElement(L.a,{size:"small",color:"primary",style:{paddingLeft:10,margin:"auto"}},"SIGN IN")))))}}]),a}(n.Component),R=Object(k.a)(function(e){return{root:{flexGrow:1},card:{minWidth:275},title:{flexGrow:1},textField:{color:"white",marginLeft:e.spacing(1),marginRight:e.spacing(1)},container:{display:"flex",flexWrap:"wrap"}}})(G),T=Object(x.a)({palette:{primary:{main:"#1a237e",contrastText:"#fff"},secondary:{light:"#ffd470",main:"#f4a340",dark:"#bd7406",contrastText:"#000"},background:{default:"#212121"}}}),A=function(e){function a(){return Object(o.a)(this,a),Object(m.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",null," ",r.a.createElement(N.a,{theme:T},r.a.createElement(v,null)," ",r.a.createElement("br",null),r.a.createElement("br",null)," ",r.a.createElement(F.a,{className:e.card,style:{width:"40%",verticalAlign:"center",margin:"auto",padding:10,display:"block",backgroundColor:"#D79922",horizontalAlign:"center"}},r.a.createElement(C.a,{variant:"h5",component:"h2",style:{paddingLeft:10}},"Register"),r.a.createElement("form",{className:e.container},r.a.createElement(W.a,{required:!0,style:{backgroundColor:"white"},id:"outlined-firstName-input",label:"First Name",className:e.textField,name:"firstName",margin:"normal",variant:"filled",fullWidth:"true"}),r.a.createElement(W.a,{required:!0,style:{backgroundColor:"white"},id:"outlined-lastName-input",label:"Last Name",className:e.textField,name:"lastName",margin:"normal",variant:"filled",fullWidth:"true"}),r.a.createElement(W.a,{required:!0,style:{backgroundColor:"white"},id:"outlined-teamName-input",label:"Enter your Team Name",className:e.textField,name:"teamName",margin:"normal",variant:"filled",fullWidth:"true"}),r.a.createElement(W.a,{required:!0,style:{backgroundColor:"white"},id:"outlined-email-input",label:"Email",className:e.textField,type:"email",name:"email",autoComplete:"email",margin:"normal",variant:"filled",fullWidth:"true"}),r.a.createElement(W.a,{required:!0,style:{backgroundColor:"white"},id:"outlined-password-input",label:"Password",className:e.textField,type:"password",autoComplete:"current-password",margin:"normal",variant:"filled",fullWidth:"true"}),r.a.createElement(L.a,{style:{paddingLeft:10,margin:"auto"}},"Register")))))}}]),a}(n.Component),I=Object(k.a)(function(e){return{root:{flexGrow:1},card:{minWidth:275},title:{flexGrow:1},textField:{color:"white",marginLeft:e.spacing(1),marginRight:e.spacing(1)},container:{display:"flex",flexWrap:"wrap"}}})(A);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(134);var z=r.a.createElement(O.a,null,r.a.createElement("div",null,r.a.createElement(j.a,{path:"/",exact:!0,component:v}),r.a.createElement(j.a,{path:"/signin",exact:!0,component:R}),r.a.createElement(j.a,{path:"/register",exact:!0,component:I})));i.a.render(z,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},87:function(e,a,t){e.exports=t(136)},92:function(e,a,t){}},[[87,1,2]]]);
//# sourceMappingURL=main.7f1cc234.chunk.js.map