(this.webpackJsonpmonkeys=this.webpackJsonpmonkeys||[]).push([[0],{51:function(e){e.exports=JSON.parse('{"people":[{"id":0,"name":"person 1","swear_words":"952","n_word_count":"10","activity_index":"0.14","description":"Actual Clown"},{"id":1,"name":"person 2","swear_words":"1494","n_word_count":"9","activity_index":"0.52","description":"Gaping Ape"},{"id":2,"name":"person 3","swear_words":"9743","n_word_count":"5","activity_index":"0.24","description":"Bonobo"},{"id":3,"name":"person 4","swear_words":"632","n_word_count":"103","activity_index":"0.82","description":"ooga booga"},{"id":4,"name":"person 5","swear_words":"4213","n_word_count":"1","activity_index":"0.72","description":"circus"},{"id":5,"name":"person 6","swear_words":"1423","n_word_count":"25","activity_index":"0.47","description":"monkey"}]}')},59:function(e,a,t){e.exports={container:"Cards_container__3bjn6",card:"Cards_card__eGUfZ"}},68:function(e,a,t){e.exports={container:"App_container__1MQN3",image:"App_image__3byI1"}},80:function(e,a,t){e.exports=t(93)},88:function(e,a,t){},93:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(9),i=t.n(c),l=t(57),o=t(58),d=t(70),s=t(71),u=function(){return r.a.createElement("h1",null,"Chart")},m=t(127),p=t(131),g=t(95),b=t(59),h=t.n(b),f=function(){return r.a.createElement(m.a,{className:h.a.card},r.a.createElement(p.a,null,r.a.createElement(g.a,{variant:"h2"},"Group Chat of Monkeys")))},E=t(19),_=t(64),v=t(3),w=t(132),y=t(133),k=t(134),C=t(148),O=t(152),x=t(135),j=t(10),S=t(136),P=t(151),N=t(96),A=t(94),I=t(138),B=t(139),G=t(140),M=t(150),W=t(141),D=t(142),J=t(66),R=t.n(J),H=t(67),U=t.n(H),q=(t(88),t(51));function z(e,a,t,n,r){return{name:e,swear_word_count:a,fat:t,carbs:n,protein:r}}z("Cupcake",305,3.7,67,4.3),z("Donut",452,25,51,4.9),z("Eclair",262,16,24,6),z("Frozen yoghurt",159,6,24,4),z("Gingerbread",356,16,49,3.9),z("Honeycomb",408,3.2,87,6.5),z("Ice cream sandwich",237,9,37,4.3),z("Jelly Bean",375,0,94,0),z("KitKat",518,26,65,7),z("Lollipop",392,.2,98,0),z("Marshmallow",318,0,81,2),z("Nougat",360,19,9,37),z("Oreo",437,18,63,4);function F(e,a,t){return a[t]<e[t]?-1:a[t]>e[t]?1:0}var K=[{id:"name",numeric:!1,disablePadding:!0,label:"User"},{id:"description",numeric:!1,disablePadding:!1,label:"Nickname"},{id:"swear_words_count",numeric:!0,disablePadding:!1,label:"Swear Word Count"},{id:"n_word_count",numeric:!0,disablePadding:!1,label:"N Word Count"},{id:"activity_index",numeric:!0,disablePadding:!1,label:"Activity Index"}];function L(e){var a=e.classes,t=e.onSelectAllClick,n=e.order,c=e.orderBy,i=e.numSelected,l=e.rowCount,o=e.onRequestSort;return r.a.createElement(w.a,null,r.a.createElement(y.a,null,r.a.createElement(k.a,{padding:"checkbox"},r.a.createElement(C.a,{indeterminate:i>0&&i<l,checked:l>0&&i===l,onChange:t,inputProps:{"aria-label":"select all users"}})),K.map((function(e){return r.a.createElement(k.a,{key:e.id,align:e.numeric?"right":"left",padding:e.disablePadding?"none":"default",sortDirection:c===e.id&&n},r.a.createElement(O.a,{active:c===e.id,direction:c===e.id?n:"asc",onClick:(t=e.id,function(e){o(e,t)})},e.label,c===e.id?r.a.createElement("span",{className:a.visuallyHidden},"desc"===n?"sorted descending":"sorted ascending"):null));var t}))))}var T=Object(x.a)((function(e){return{root:{paddingLeft:e.spacing(2),paddingRight:e.spacing(1)},highlight:"light"===e.palette.type?{color:e.palette.secondary.main,backgroundColor:Object(j.d)(e.palette.secondary.light,.85)}:{color:e.palette.text.primary,backgroundColor:e.palette.secondary.dark},title:{flex:"1 1 100%"}}})),Q=function(e){var a=T(),t=e.numSelected;return r.a.createElement(S.a,{className:Object(v.a)(a.root,Object(_.a)({},a.highlight,t>0))},t>0?r.a.createElement(g.a,{className:a.title,color:"inherit",variant:"subtitle1",component:"div"},t," selected"):r.a.createElement(g.a,{className:a.title,variant:"h6",id:"tableTitle",component:"div"},"Group Members"),t>0?r.a.createElement(P.a,{title:"Delete"},r.a.createElement(N.a,{"aria-label":"delete"},r.a.createElement(R.a,null))):r.a.createElement(P.a,{title:"Filter list"},r.a.createElement(N.a,{"aria-label":"filter list"},r.a.createElement(U.a,null))))},Z=Object(x.a)((function(e){return{root:{width:"100%"},paper:{width:"100%",marginBottom:e.spacing(2)},table:{minWidth:750},visuallyHidden:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",top:20,width:1}}}));function V(e){var a=Z(),t=r.a.useState("asc"),n=Object(E.a)(t,2),c=n[0],i=n[1],l=r.a.useState("swear_word_count"),o=Object(E.a)(l,2),d=o[0],s=o[1],u=r.a.useState([]),m=Object(E.a)(u,2),p=m[0],g=m[1],b=r.a.useState(0),h=Object(E.a)(b,2),f=h[0],_=h[1],v=r.a.useState(!1),w=Object(E.a)(v,2),O=w[0],x=w[1],j=r.a.useState(5),S=Object(E.a)(j,2),P=S[0],N=S[1],J=r.a.useState(e.users),R=Object(E.a)(J,2),H=R[0],U=(R[1],P-Math.min(P,H.length-f*P));return r.a.createElement("div",{className:a.root},r.a.createElement(A.a,{className:a.paper},r.a.createElement(Q,{numSelected:p.length}),r.a.createElement(I.a,null,r.a.createElement(B.a,{className:a.table,"aria-labelledby":"tableTitle",size:O?"small":"medium","aria-label":"enhanced table"},r.a.createElement(L,{classes:a,numSelected:p.length,order:c,orderBy:d,onSelectAllClick:function(e){if(e.target.checked){var a=H.map((function(e){return e.name}));g(a)}else g([])},onRequestSort:function(e,a){i(d===a&&"asc"===c?"desc":"asc"),s(a)},rowCount:H.length}),r.a.createElement(G.a,null,function(e,a){var t=e.map((function(e,a){return[e,a]}));return t.sort((function(e,t){var n=a(e[0],t[0]);return 0!==n?n:e[1]-t[1]})),t.map((function(e){return e[0]}))}(H,function(e,a){return"desc"===e?function(e,t){return F(e,t,a)}:function(e,t){return-F(e,t,a)}}(c,d)).slice(f*P,f*P+P).map((function(e,a){var t,n=(t=e.name,-1!==p.indexOf(t)),c="enhanced-table-checkbox-".concat(a);return r.a.createElement(y.a,{hover:!0,onClick:function(a){return function(e,a){var t=p.indexOf(a),n=[];-1===t?n=n.concat(p,a):0===t?n=n.concat(p.slice(1)):t===p.length-1?n=n.concat(p.slice(0,-1)):t>0&&(n=n.concat(p.slice(0,t),p.slice(t+1))),g(n)}(0,e.name)},role:"checkbox","aria-checked":n,tabIndex:-1,key:e.name,selected:n},r.a.createElement(k.a,{padding:"checkbox"},r.a.createElement(C.a,{checked:n,inputProps:{"aria-labelledby":c}})),r.a.createElement(k.a,{component:"th",id:c,scope:"row",padding:"none"},e.name),r.a.createElement(k.a,{align:"left"},e.description),r.a.createElement(k.a,{align:"right"},e.swear_words),r.a.createElement(k.a,{align:"right"},e.n_word_count),r.a.createElement(k.a,{align:"right"},e.activity_index))})),U>0&&r.a.createElement(y.a,{style:{height:(O?33:53)*U}},r.a.createElement(k.a,{colSpan:6}))))),r.a.createElement(M.a,{rowsPerPageOptions:[5,10,25],component:"div",count:H.length,rowsPerPage:P,page:f,onChangePage:function(e,a){_(a)},onChangeRowsPerPage:function(e){N(parseInt(e.target.value,10)),_(0)}})),r.a.createElement(W.a,{control:r.a.createElement(D.a,{checked:O,onChange:function(e){x(e.target.checked)}}),label:"Dense padding"}))}var X=t(153),Y=t(143),$=t(155),ee=t(147),ae=Object(x.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:500,maxWidth:700}}}));var te=function(e){var a=ae(),t=r.a.useState(""),n=Object(E.a)(t,2),c=n[0],i=n[1],l=e.users.map((function(e){return r.a.createElement(X.a,{value:e.name},e.name)}));return r.a.createElement(Y.a,{variant:"outlined",className:a.formControl},r.a.createElement($.a,{id:"demo-simple-select-outlined-label"},"User"),r.a.createElement(ee.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",value:c,onChange:function(e){i(e.target.value)},label:"user"},l))},ne=t(68),re=t.n(ne),ce=function(e){Object(s.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={People:q.people},e}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:re.a.container},r.a.createElement(f,null),r.a.createElement(V,{users:this.state.People}),r.a.createElement(te,{users:this.state.People}),r.a.createElement(u,null))}}]),t}(n.Component),ie=t(69),le=t(145),oe=t(146),de=t(144),se=Object(ie.a)({palette:{type:"dark",primary:de.a}});i.a.render(r.a.createElement(le.a,{theme:se},r.a.createElement(oe.a,null),r.a.createElement(ce,null)),document.getElementById("root"))}},[[80,1,2]]]);
//# sourceMappingURL=main.5b17bf98.chunk.js.map