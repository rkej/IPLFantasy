(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{78:function(e,a,t){e.exports=t(99)},83:function(e,a,t){},99:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(9),i=t.n(l),o=(t(83),t(22)),c=t(23),m=t(26),s=t(24),u=t(27),d=t(72),f=t(136),p=t(4),h=t(132),g=t(133),b=t(135),E=t(131),y=t(134),w=t(66),x=t.n(w),v=t(101),j=t(68),k=t.n(j),O=t(67),N=t.n(O),C=function(e){function a(){return Object(o.a)(this,a),Object(m.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=Object(p.a)({root:{boxShadow:"none",textTransform:"none",fontSize:16,lineHeight:1.5,fontFamily:["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(","),"&:active":{boxShadow:"none"}}})(E.a),a=Object(d.a)({palette:{primary:{main:"#19388a",contrastText:"#fff"},secondary:{light:"#ffd470",main:"#f4a340",dark:"#bd7406",contrastText:"#000"},background:{default:"#212121"}}}),t=this.props.classes;return r.a.createElement(v.a,{theme:a}," ",r.a.createElement("div",{className:t.root},r.a.createElement(h.a,{position:"static"},r.a.createElement(g.a,null,r.a.createElement(y.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"Menu"},r.a.createElement(x.a,null)),r.a.createElement(b.a,{variant:"h6",className:t.title},"IPL Fantasy Web-App"),r.a.createElement(e,{variant:"extended",color:"inherit",className:t.menuButton,href:"/signin"},r.a.createElement(N.a,null),"\xa0\xa0Login"),r.a.createElement(e,{color:"inherit",className:t.menuButton,href:"/register"},r.a.createElement(k.a,null),"\xa0\xa0Register")))))}}]),a}(n.Component),F=Object(p.a)(function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}})(C),W=t(141),S=Object(d.a)({palette:{primary:{main:"#1a237e",contrastText:"#fff"},secondary:{light:"#ffd470",main:"#f4a340",dark:"#bd7406",contrastText:"#000"},background:{default:"#212121"}}}),T=function(e){function a(){return Object(o.a)(this,a),Object(m.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(f.a,{theme:S},r.a.createElement(F,null),r.a.createElement(W.a,null)))}}]),a}(n.Component),L=t(70),I=t(28),q=t(49),A=t.n(q),B=t(69),G=t(138),R=t(137),z=Object(d.a)({palette:{primary:{main:"#1a237e",contrastText:"#fff"},secondary:{light:"#ffd470",main:"#f4a340",dark:"#bd7406",contrastText:"#000"},background:{default:"#212121"}}}),M=function(e){function a(){return Object(o.a)(this,a),Object(m.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=Object(B.a)(A.a.mark(function e(){return A.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/signin");case 2:e.sent;case 3:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",null," ",r.a.createElement(v.a,{theme:z},r.a.createElement(T,null)," ",r.a.createElement("br",null),r.a.createElement("br",null)," ",r.a.createElement(R.a,{className:e.card,style:{width:"30%",verticalAlign:"center",margin:"auto",padding:10,display:"block",backgroundColor:"#ff6e40",horizontalAlign:"center"}},r.a.createElement(b.a,{variant:"h5",component:"h2",style:{color:"#1a237e",paddingLeft:10}},"Sign In"),r.a.createElement("form",{className:e.container},r.a.createElement(G.a,{required:!0,style:{backgroundColor:"white"},id:"outlined-email-input",label:"Email",className:e.textField,type:"email",name:"email",autoComplete:"email",margin:"normal",variant:"filled",fullWidth:"true"}),r.a.createElement(G.a,{required:!0,style:{backgroundColor:"white"},id:"outlined-password-input",label:"Password",className:e.textField,type:"password",autoComplete:"current-password",margin:"normal",variant:"filled",fullWidth:"true"}),r.a.createElement(E.a,{size:"small",color:"primary",style:{paddingLeft:10,margin:"auto"}},"SIGN IN")))))}}]),a}(n.Component),P=Object(p.a)(function(e){return{root:{flexGrow:1},card:{minWidth:275},title:{flexGrow:1},textField:{color:"white",marginLeft:e.spacing(1),marginRight:e.spacing(1)},container:{display:"flex",flexWrap:"wrap"}}})(M),U=Object(d.a)({palette:{primary:{main:"#1a237e",contrastText:"#fff"},secondary:{light:"#ffd470",main:"#f4a340",dark:"#bd7406",contrastText:"#000"},background:{default:"#212121"}}}),H=function(e){function a(){return Object(o.a)(this,a),Object(m.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",null," ",r.a.createElement(v.a,{theme:U},r.a.createElement(T,null)," ",r.a.createElement("br",null),r.a.createElement("br",null)," ",r.a.createElement(R.a,{className:e.card,style:{width:"40%",verticalAlign:"center",margin:"auto",padding:10,display:"block",backgroundColor:"#ff6e40",horizontalAlign:"center"}},r.a.createElement(b.a,{variant:"h5",component:"h2",style:{color:"#1a237e",paddingLeft:10}},"Register"),r.a.createElement("form",{className:e.container},r.a.createElement(G.a,{required:!0,style:{backgroundColor:"white"},id:"outlined-firstName-input",label:"First Name",className:e.textField,name:"firstName",margin:"normal",variant:"filled"}),r.a.createElement(G.a,{required:!0,style:{backgroundColor:"white"},id:"outlined-lastName-input",label:"Last Name",className:e.textField,name:"lastName",margin:"normal",variant:"filled"}),r.a.createElement(G.a,{required:!0,style:{backgroundColor:"white"},id:"outlined-teamName-input",label:"Enter your Team Name",className:e.textField,name:"teamName",margin:"normal",variant:"filled",fullWidth:"true"}),r.a.createElement(G.a,{required:!0,style:{backgroundColor:"white"},id:"outlined-email-input",label:"Email",className:e.textField,type:"email",name:"email",autoComplete:"email",margin:"normal",variant:"filled",fullWidth:"true"}),r.a.createElement(G.a,{required:!0,style:{backgroundColor:"white"},id:"outlined-password-input",label:"Password",className:e.textField,type:"password",autoComplete:"current-password",margin:"normal",variant:"filled",fullWidth:"true"}),r.a.createElement(E.a,{style:{paddingLeft:10,margin:"auto",color:"#1a237e"}},"Register")))))}}]),a}(n.Component),J=Object(p.a)(function(e){return{root:{flexGrow:1},card:{minWidth:275},title:{flexGrow:1},textField:{color:"white",marginLeft:e.spacing(1),marginRight:e.spacing(1)},container:{display:"flex",flexWrap:"wrap"}}})(H);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var D=r.a.createElement(L.a,null,r.a.createElement("div",null,r.a.createElement(I.a,{path:"/",exact:!0,component:T}),r.a.createElement(I.a,{path:"/signin",exact:!0,component:P}),r.a.createElement(I.a,{path:"/register",exact:!0,component:J})));i.a.render(D,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[78,1,2]]]);
//# sourceMappingURL=main.af932801.chunk.js.map