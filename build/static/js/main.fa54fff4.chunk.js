(this["webpackJsonpees-visualizer"]=this["webpackJsonpees-visualizer"]||[]).push([[0],{42:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n(1),i=n.n(s),r=n(18),c=n.n(r),o=(n(42),n(3)),l=n(66),u=n(64),d=n.p+"static/media/cire.142e653c.jpg";function h(e){return Object(a.jsx)("button",{title:e.title,id:e.id,className:"btn text-btn",onClick:e.handleClick,style:{opacity:e.disabled?".4":"1",pointerEvents:e.disabled?"none":"visible",color:e.active?"#0AFFEF":"white"},children:e.label})}var f=n(67);function b(e){var t=Object(s.useState)(0),n=Object(o.a)(t,2),i=n[0],r=n[1];function c(t){r(t),e.handleChangeTab(t)}return Object(a.jsxs)(u.a,{container:!0,className:"flat-big f-color1",style:{width:"98vw",position:"relative",margin:"auto",top:"1rem",overflow:"hidden",borderRadius:"10px"},children:[Object(a.jsx)(u.a,{item:!0,xs:6,md:2,children:Object(a.jsx)(l.a,{component:"h2",p:1,mt:2,ml:1,children:Object(a.jsx)("a",{href:"https://facebook.com/e.echemane",children:" EEs Visualizer "})})}),Object(a.jsx)(u.a,{item:!0,xs:12,md:8,children:Object(a.jsxs)(l.a,{display:"flex",justifyContent:"center",alignItems:"center",mt:1,children:[Object(a.jsx)(h,{active:0===i,handleClick:function(){return c(0)},className:"app-tabs",label:"Sorting",id:"sort-v-btn",value:"0"}),Object(a.jsx)(h,{active:1===i,handleClick:function(){return c(1)},className:"app-tabs",label:"Searching",id:"search-v-btn",value:"1"}),Object(a.jsx)(h,{active:2===i,handleClick:function(){return c(2)},className:"app-tabs",label:"Path Finding",id:"pathFinding-v-btn",value:"2"})]})}),Object(a.jsx)(u.a,{item:!0,xs:4,md:2,className:"abs-right",children:Object(a.jsx)(l.a,{p:1,mt:1,mr:1,children:Object(a.jsx)("a",{title:"Eric Echemane",href:"https://github.com/EricEchemane",target:"_blank",rel:"noreferrer",children:Object(a.jsx)(f.a,{alt:"Eric Echemane",src:d,className:"avatar"})})})})]})}function j(e){return Object(a.jsx)("button",{title:e.title,id:e.id,className:"oval flat btn b-accent ",onClick:e.handleClick,style:{opacity:e.disabled?".4":"1",pointerEvents:e.disabled?"none":"visible",padding:".2rem 1.7rem"},children:e.label})}function p(e){return Object(a.jsx)("button",{title:e.title,id:e.id,className:"oval flat btn "+e.type,onClick:e.handleClick,style:{opacity:e.disabled?".4":"1",pointerEvents:e.disabled?"none":"visible",padding:"0 2rem",borderRadius:"30px",color:"error"===e.type?"white":"$b-prime",fontSize:"1.2rem"},children:e.label})}function v(e){var t,n=Object(s.useState)(e.toggleOn),i=Object(o.a)(n,2),r=i[0],c=i[1];return t=r?"oval thin-inset toggle-btn-on "+e.color:"oval thin-inset toggle-btn ",Object(a.jsx)("div",{title:e.title,className:t,id:e.id,onClick:function(t){return c(!r),void e.handleClick()},style:{width:"50px",height:"16px",opacity:e.disabled?".4":"1",pointerEvents:e.disabled?"none":"visible"}})}function m(e){return Object(a.jsxs)("div",{className:"d-inline relative slider",style:{opacity:e.disabled?".4":"1",pointerEvents:e.disabled?"none":"visible",overflow:"hidden",padding:".5rem"},children:[Object(a.jsx)("input",{onInput:function(t){return function(t){var n=t.target.value,a=document.getElementById(e.id);a&&(a.style.width=n/2+"px"),e.onInput(n)}(t)},className:"slider-"+e.color,type:"range",min:e.min,max:e.max,value:e.value,title:e.title,step:"1",style:{width:e.max/2+"px"}}),Object(a.jsx)("div",{className:"slider-progress-"+e.color,id:e.id})]})}var g=n(22),O=n.n(g),x="yellowgreen",y="purple",S="#dd6f74",C="#0AFFEF",w=document.getElementsByClassName("bars");function N(e,t){w[e]&&(w[e].style.transition="0ms",w[e].style.backgroundColor=t)}function E(e,t){w[e]&&(w[e].style.height=t+"px")}var L=[],k=40,F=!1,M=[];function A(e,t,n,a,s){if(k=200-t,F=n,M=[],I(0,(L=Object.assign([],e)).length-1),s)return M;!function(){for(var e=function(e){if(e%3!==2){var t=e%3===0?y:C;setTimeout((function(){N(M[e][0],t),N(M[e][1],t)}),e*k)}else setTimeout((function(){E(M[e][0],M[e][1])}),e*k)},t=0;t<M.length;t++)e(t)}(),a(M.length)}function I(e,t){if(!(e>=t)){var n=Math.floor((t+e)/2);I(e,n),I(n+1,t),function(e,t,n){var a=t-e+1,s=n-t,i=L.slice(e,t+1),r=L.slice(t+1),c=0,o=0,l=e;for(;c<a&&o<s;)M.push([l,e+a+o]),M.push([l,e+a+o]),F?i[c]>r[o]?(M.push([l,i[c]]),L[l]=i[c],c++,l++):(M.push([l,r[o]]),L[l]=r[o],o++,l++):i[c]<r[o]?(M.push([l,i[c]]),L[l]=i[c],c++,l++):(M.push([l,r[o]]),L[l]=r[o],o++,l++);for(;c<a;)M.push([e+c,e+c]),M.push([e+c,e+c]),M.push([l,i[c]]),L[l]=i[c],c++,l++;for(;o<s;)M.push([n+o,n+o]),M.push([n+o,n+o]),M.push([l,r[o]]),L[l]=r[o],o++,l++}(e,n,t)}}var T=[],D=40,B=[],P=!1,_="change",z="revert",R="swap_change",q="swap_revert";function H(e,t){if(!(e>=t)){var n=(e+t)/2;n=Math.floor(n);var a,s=T[n];a=P?function(e,t,n){for(;e<=t;){for(;T[e]>n;)B.push([_,e,n]),B.push([z,e,n]),e++;for(;T[t]<n;)B.push([_,t,n]),B.push([z,t,n]),t--;if(e<=t){B.push([R,e,t]),B.push([q,e,t]);var a=T[e];T[e]=T[t],T[t]=a,e++,t--}}return e}(e,t,s):function(e,t,n){for(;e<=t;){for(;T[e]<n;)B.push([_,e,n]),B.push([z,e,n]),e++;for(;T[t]>n;)B.push([_,t,n]),B.push([z,t,n]),t--;if(e<=t){B.push([R,e,t]),B.push([q,e,t]);var a=T[e];T[e]=T[t],T[t]=a,e++,t--}}return e}(e,t,s),H(e,a-1),H(a,t)}}function V(e,t,n,a,s){if(D=200-t,P=n,T=Object.assign([],e),B=[],H(0,T.length-1),s)return B;!function(){for(var e=function(e){var t=B[e][0],n=B[e][1],a=B[e][2];t===_?setTimeout((function(){N(n,y),N(a,S)}),e*D):t===z?setTimeout((function(){N(n,C),N(a,C)}),e*D):t===R?setTimeout((function(){N(n,x),N(a,x),E(n,T[n]),E(a,T[a])}),e*D):setTimeout((function(){N(n,C),N(a,C)}),e*D)},t=0;t<B.length;t++)e(t)}(),a(B.length)}var J=[],K=40,W=[],G=!1,Q="change",U="revert",$="swap_change",X="swap_revert";function Y(e,t,n,a,s){if(K=200-t,G=n,J=Object.assign([],e),W=[],function(){for(var e=J.length/2,t=e=Math.floor(e);t>=0;t--)Z(J.length,t);for(var n=J.length-1;n>0;n--){W.push([$,n,0]),W.push([X,n,0]);var a=J[0];J[0]=J[n],J[n]=a,Z(n,0)}}(),s)return W;!function(){for(var e=function(e){var t=W[e][0],n=W[e][1],a=W[e][2];t===Q?setTimeout((function(){N(n,y),N(a,S)}),e*K):t===U?setTimeout((function(){N(n,C),N(a,C)}),e*K):t===$?setTimeout((function(){N(n,x),N(a,x),E(n,J[n]),E(a,J[a])}),e*K):setTimeout((function(){N(n,C),N(a,C)}),e*K)},t=0;t<W.length;t++)e(t)}(),a(W.length)}function Z(e,t){if(!(t>=e)){var n=2*t+1,a=2*t+2;if(n<e)if(W.push([Q,n,t]),W.push([U,n,t]),G){if(J[n]<J[t]){W.push([$,n,t]),W.push([X,n,t]);var s=J[n];J[n]=J[t],J[t]=s}}else if(J[n]>J[t]){W.push([$,n,t]),W.push([X,n,t]);var i=J[n];J[n]=J[t],J[t]=i}if(a<e)if(W.push([Q,a,t]),W.push([U,a,t]),G){if(J[a]<J[t]){W.push([$,a,t]),W.push([X,a,t]);var r=J[a];J[a]=J[t],J[t]=r}}else if(J[a]>J[t]){W.push([$,a,t]),W.push([X,a,t]);var c=J[a];J[a]=J[t],J[t]=c}Z(e,n),Z(e,a)}}var ee=40,te=[],ne=[],ae="change",se="revert",ie="swap_change";function re(e,t,n,a,s){te=new Array(e.length),te=Object.assign([],e),ee=200-t,ne=[];for(var i=Math.floor(te.length/2);i>=1;){for(var r=i;r<te.length;r++)for(var c=r-i;c>=0;c-=i){if(ne.push([ae,c+i,c]),ne.push([se,c+i,c]),n){if(te[c+i]<te[c])break}else if(te[c+i]>te[c])break;ne.push([ie,c+i,c]),ne.push(["swap_revert",c+i,c]);var o=te[c+i];te[c+i]=te[c],te[c]=o}i=Math.floor(i/2)}if(s)return ne;!function(){for(var e=function(e){var t=ne[e][0],n=ne[e][1],a=ne[e][2];t===ae?setTimeout((function(){N(n,y),N(a,S)}),e*ee):t===se?setTimeout((function(){N(n,C),N(a,C)}),e*ee):t===ie?setTimeout((function(){N(n,x),N(a,x),E(n,te[n]),E(a,te[a])}),e*ee):setTimeout((function(){N(n,C),N(a,C)}),e*ee)},t=0;t<ne.length;t++)e(t)}(),a(ne.length)}var ce=40,oe=[],le=[],ue="change",de="revert",he="swap_change",fe="swap_revert";function be(e,t,n,a,s){oe=new Array(e.length),oe=Object.assign([],e),ce=200-t,le=[];for(var i=oe.length,r=1;r<i;r++)if(le.push([ue,r,r-1]),le.push([de,r,r-1]),n){if(oe[r-1]<oe[r])for(var c=r;c>0;c--)if(le.push([ue,c,c-1]),le.push([de,c,c-1]),oe[c]>oe[c-1]){le.push([he,c,c-1]),le.push([fe,c,c-1]);var o=oe[c];oe[c]=oe[c-1],oe[c-1]=o}}else if(oe[r-1]>oe[r])for(var l=r;l>0;l--)if(le.push([ue,l,l-1]),le.push([de,l,l-1]),oe[l]<oe[l-1]){le.push([he,l,l-1]),le.push([fe,l,l-1]);var u=oe[l];oe[l]=oe[l-1],oe[l-1]=u}if(s)return le;!function(){for(var e=function(e){var t=le[e][0],n=le[e][1],a=le[e][2];t===ue?setTimeout((function(){N(n,y),N(a,S)}),e*ce):t===de?setTimeout((function(){N(n,C),N(a,C)}),e*ce):t===he?setTimeout((function(){N(n,x),N(a,x),E(n,oe[n]),E(a,oe[a])}),e*ce):setTimeout((function(){N(n,C),N(a,C)}),e*ce)},t=0;t<le.length;t++)e(t)}(),a(le.length)}var je=40,pe=[],ve=[],me="change",ge="revert",Oe="swap_change",xe="swap_revert";function ye(){for(var e=function(e){var t=ve[e][0],n=ve[e][1],a=ve[e][2];t===me?setTimeout((function(){N(n,y),N(a,S)}),e*je):t===ge?setTimeout((function(){N(n,C),N(a,C)}),e*je):t===Oe?setTimeout((function(){N(n,x),N(a,x),E(n,pe[n]),E(a,pe[a])}),e*je):setTimeout((function(){N(n,C),N(a,C)}),e*je)},t=0;t<ve.length;t++)e(t)}var Se=!0;function Ce(e){var t=Object(s.useState)(!1),n=Object(o.a)(t,2),i=n[0],r=n[1],c=Object(s.useState)("Choose an algorithm"),u=Object(o.a)(c,2),d=u[0],h=u[1],f=Object(s.useState)(180),b=Object(o.a)(f,2),g=b[0],x=b[1],y=Object(s.useState)(!0),S=Object(o.a)(y,2),C=S[0],w=S[1],N=Object(s.useState)(!1),E=Object(o.a)(N,2),L=E[0],k=E[1],F=Object(s.useState)(!1),M=Object(o.a)(F,2),I=M[0],T=M[1],D=Object(s.useState)(!1),B=Object(o.a)(D,2),P=B[0],_=B[1],z=Object(s.useState)(!1),R=Object(o.a)(z,2),q=R[0],H=R[1],J=Object(s.useState)(!1),K=Object(o.a)(J,2),W=K[0],G=K[1],Q=["Merge Sort","Quick Sort","Heap Sort","Shell Sort","Insertion Sort","Selection Sort","Bubble Sort"],U=Object(s.useState)(150),$=Object(o.a)(U,2),X=$[0],Z=$[1];function ee(e){for(var t=document.getElementsByClassName("bars"),n=0;n<t.length;n++)t[n]&&(t[n].style.backgroundColor="#0AFFEF",t[n].style.transition=".2s ease");for(var a=[],s=0;s<e;s++){var i=Math.floor(299*Math.random()+2);a.push(i)}return a}var te=Object(s.useState)(ee(150)),ne=Object(o.a)(te,2),ae=ne[0],se=ne[1];function ie(e){setTimeout((function(){k(!1),T(!1),_(!1),G(!1)}),e*(200-g))}return Object(a.jsxs)(l.a,{p:4,className:"flat",style:{width:"98vw",height:"80vh",position:"relative",margin:"auto",top:"1rem",overflow:"hidden",borderRadius:"10px"},children:[Object(a.jsx)(l.a,{id:"sorting-windows",children:Object(a.jsxs)("div",{className:"bars-container",children:[Object(a.jsxs)("div",{className:"algo-options",children:[Object(a.jsxs)(l.a,{className:"sorting-algorithms",hidden:!i,children:[Object(a.jsxs)("div",{style:{pointerEvents:"none"},children:[" ",Object(a.jsx)(l.a,{p:2,pl:1,children:"  "})," "]}),Q.map((function(e,t){return Object(a.jsxs)("div",{children:[" ",Object(a.jsxs)(l.a,{p:1,pl:2,onClick:function(){h(e),r(!1),w(!1)},children:[" ",e," "]})," "]},t)}))]}),Object(a.jsx)(l.a,{flex:1,onClick:function(){r(!i)},children:d}),Object(a.jsxs)(l.a,{onClick:function(){r(!i)},display:"flex",justifyContent:"center",alignItems:"center",children:[" ",Object(a.jsx)(O.a,{})," "]})]}),ae.map((function(e,t){return Object(a.jsx)("div",{className:"bars",style:{height:e+"px"},children:" "},t)}))]})}),Object(a.jsx)("div",{id:"scroll",children:Object(a.jsxs)(l.a,{className:"sorting-panel",children:[Object(a.jsx)(l.a,{m:1,display:"flex",flexDirection:"column",alignContent:"center",justifyContent:"center",children:Object(a.jsx)(j,{disabled:L,label:"Generate New Array",handleClick:function(){se(ee(X)),Se||(w(!1),Se=!1)}})}),Object(a.jsxs)(l.a,{m:1,display:"flex",flexDirection:"column",alignContent:"center",justifyContent:"center",children:[Object(a.jsx)(l.a,{pb:1,textAlign:"center",children:" Change Array Size "}),Object(a.jsx)(m,{disabled:I,id:"array_size",onInput:function(e){return function(e){Z(e),se(ee(e)),Se||w(!1)}(e)},color:"accent",min:5,max:300,value:X})]}),Object(a.jsxs)(l.a,{m:1,display:"flex",flexDirection:"column",alignContent:"center",justifyContent:"center",children:[Object(a.jsx)(l.a,{pb:1,textAlign:"center",children:" Change Speed "}),Object(a.jsx)(m,{disabled:P,id:"sorting-speed",onInput:function(e){return function(e){x(e)}(e)},color:"error",min:5,max:198,value:g})]}),Object(a.jsxs)(l.a,{m:2,style:{position:"relative",bottom:"2px"},display:"flex",flexDirection:"column",alignContent:"center",justifyContent:"center",children:[Object(a.jsx)(l.a,{pb:1,textAlign:"center",children:" Descending "}),Object(a.jsx)(v,{disabled:W,toggleOn:q,color:"accent",title:"Descending",handleClick:function(){H(!q),Se||(w(!1),Se=!1)}})]}),Object(a.jsx)(l.a,{m:1,display:"flex",flexDirection:"column",alignContent:"center",justifyContent:"center",children:Object(a.jsx)(p,{label:"Sort !",disabled:C,handleClick:function(){for(var e=document.getElementsByClassName("bars"),t=0;t<e.length;t++)e[t]&&(e[t].style.backgroundColor="red");var n=Q.indexOf(d);Se=!1,w(!0),T(!0),_(!0),k(!0),G(!0),0===n?A(ae,g,q,ie):1===n?V(ae,g,q,ie):2===n?Y(ae,g,q,ie):3===n?re(ae,g,q,ie):4===n?be(ae,g,q,ie):5===n?function(e,t,n,a,s){pe=new Array(e.length),pe=Object.assign([],e),je=200-t,ve=[];var i,r,c,o=pe.length;for(i=0;i<o-1;i++){for(c=i,r=i+1;r<o;r++)ve.push([me,r,c]),ve.push([ge,r,c]),n?pe[r]>pe[c]&&(c=r):pe[r]<pe[c]&&(c=r);ve.push([Oe,i,c]),ve.push([xe,i,c]);var l=pe[c];pe[c]=pe[i],pe[i]=l}if(s)return ve;ye(),a(ve.length)}(ae,g,q,ie):6===n&&function(e,t,n,a,s){pe=new Array(e.length),pe=Object.assign([],e),je=200-t,ve=[];for(var i=pe.length,r=0;r<i-1;r++)for(var c=r+1;c<i;c++)if(ve.push([me,r,c]),ve.push([ge,r,c]),n){if(pe[r]<pe[c]){ve.push([Oe,r,c]),ve.push([xe,r,c]);var o=pe[r];pe[r]=pe[c],pe[c]=o}}else if(pe[r]>pe[c]){ve.push([Oe,r,c]),ve.push([xe,r,c]);var l=pe[r];pe[r]=pe[c],pe[c]=l}if(s)return ve;ye(),a(ve.length)}(ae,g,q,ie)},title:"Start sorting",type:"error"})})]})})]})}var we=Object(s.memo)(Ce),Ne=n(30);function Ee(e){return Object(a.jsx)("input",{type:e.type,className:"thin-inset textInput",placeholder:e.placeHolder,autoFocus:e.autofocus,onInput:function(t){var n=t.target.value;e.handleInput(n)},id:e.id,style:{color:e.error?"#FF555D":"white",width:e.fullWidth?"100%":"auto"}})}var Le=[],ke=[];function Fe(e,t){return Le=[],ke=[],function(e,t){for(var n=0;n<e.length;n++){var a=void 0;if(e[n]==t)return a={state:1,lookupIndex:n,steps:n+1},void Le.push(a);a={state:0,lookupIndex:n,steps:n+1},Le.push(a),a={state:-1,lookupIndex:n,steps:n+1},Le.push(a)}}(e,t),function(e,t){var n=new Array(e.length);Me(n=(n=Object.assign([],e)).sort((function(e,t){return e-t})),t,0,n.length-1,0)}(e,t),[Le,ke]}function Me(e,t,n,a,s){if(n>a)return-1;s+=1;var i,r=(a+n+1)/2,c=e[r=Math.floor(r)];return c==t?(i={state:1,lookupIndex:r,steps:s},ke.push(i),r):(i={state:0,lookupIndex:r,steps:s},ke.push(i),i={state:-1,lookupIndex:r,steps:s},ke.push(i),t<c?Me(e,t,n,r-1,s):Me(e,t,r+1,a,s))}function Ae(){var e=Object(s.useState)(200),t=Object(o.a)(e,2),n=t[0],i=t[1],r=Object(s.useState)(-1),c=Object(o.a)(r,2),u=c[0],d=c[1],h=Object(s.useState)(te(n)),f=Object(o.a)(h,2),b=f[0],v=f[1],m=Object(s.useState)(300),g=Object(o.a)(m,2),O=g[0],x=g[1],y=Object(s.useRef)(ee()),S=Object(s.useState)("Linear Search"),C=Object(o.a)(S,2),w=C[0],N=C[1],E=Object(s.useState)("Binary Search"),L=Object(o.a)(E,2),k=L[0],F=L[1],M=Object(s.useState)("white"),A=Object(o.a)(M,2),I=A[0],T=A[1],D=Object(s.useState)("white"),B=Object(o.a)(D,2),P=B[0],_=B[1],z=Object(s.useState)([]),R=Object(o.a)(z,2),q=R[0],H=(R[1],Object(s.useState)(!1)),V=Object(o.a)(H,2),J=V[0],K=V[1],W=Object(s.useState)(!1),G=Object(o.a)(W,2),Q=G[0],U=G[1];function $(e,t){for(var n=e.length,a=0;a<n;a++){var s=e[a],i=s.state,r=s.steps,c=s.lookupIndex,o="#dd6f74";if(0===i)Y(t,c,o,a);else{if(-1!==i)return Y(t,c,"yellowgreen",a),void X("linear-bar"===t?"linear-bar":"binary-bar",c,r,a);Y(t,c,o,a)}}}function X(e,t,n,a){q.push(setTimeout((function(){if("binary-bar"===e)return U(!0),F("Found at index ".concat(t," in ").concat(n," steps.")),void _("yellowgreen");K(!0),N("Found at index ".concat(t," in ").concat(n," steps.")),T("yellowgreen")}),a*(301-O)))}function Y(e,t,n,a){q.push(setTimeout((function(){Z(e,t,n)}),a*(301-O)))}function Z(e,t,n){var a=document.getElementsByClassName(e);a[t]&&(a[t].style.backgroundColor=n)}function ee(){new Array(b.length);return Object.assign([],b).sort((function(e,t){return e-t}))}function te(e){document.getElementsByClassName("bars");for(var t=[],n=0;n<e;n++){var a=Math.floor(110*Math.random()+1);t.push(a)}return t}return Object(s.useEffect)((function(){y.current=ee()}),[b]),Object(a.jsxs)(l.a,{p:4,className:"flat searchVisualizerContainer ",style:{width:"98vw",height:"80vh",position:"relative",margin:"auto",top:"1rem",overflow:"hidden",borderRadius:"10px"},children:[Object(a.jsx)(l.a,{display:"flex",className:"searchItemInput rgba2 transparent",children:Object(a.jsxs)(l.a,{margin:"auto",flex:1,className:"transparent",children:[Object(a.jsx)(l.a,{component:"span",mr:1,children:"Search for :"}),Object(a.jsx)(Ee,{handleInput:function(e){d(e)},type:"number",placeHolder:"Any positive integer"})]})}),Object(a.jsxs)(l.a,{className:"linearSearch rgba2",children:[Object(a.jsxs)("h3",{className:"searchLabel",style:{color:I},children:[" ",w," "]}),Object(a.jsx)("div",{children:b.map((function(e,t){return Object(a.jsx)("div",{style:{height:"".concat(e,"px")},className:"linear-bar"},t)}))})]}),Object(a.jsxs)(l.a,{className:"binarySearch rgba2",children:[Object(a.jsxs)("h3",{className:"searchLabel",style:{color:P},children:[" ",k," "]}),Object(a.jsx)("div",{children:y.current.map((function(e,t){return Object(a.jsx)("div",{style:{height:"".concat(e,"px")},className:"binary-bar"},t)}))})]}),Object(a.jsx)(l.a,{className:"searchingVisualizerPanel rgba2",children:Object(a.jsxs)("div",{children:[Object(a.jsx)(l.a,{ml:2,mr:2,children:Object(a.jsx)(j,{label:"New Array",handleClick:function(){v(te(n));for(var e=0;e<b.length;e++)Z("linear-bar",e,"#0AFFEF"),Z("binary-bar",e,"#0AFFEF");T("white"),_("white"),F("Binary Search"),N("Linear Search")}})}),Object(a.jsxs)(l.a,{ml:2,mr:2,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",children:[Object(a.jsx)(l.a,{p:1,children:"Change Size"}),Object(a.jsx)("input",{id:"searchArray-change-size-slider",type:"range",onInput:function(e){var t;t=e.target.value,i(t),v(te(n))},value:n,min:10,max:300})]}),Object(a.jsxs)(l.a,{ml:2,mr:2,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",children:[Object(a.jsx)(l.a,{p:1,children:"Change Speed"}),Object(a.jsx)("input",{id:"searchArray-change-speed-slider",type:"range",value:O,onInput:function(e){x(e.target.value)},min:10,max:200})]}),Object(a.jsx)(l.a,{ml:2,mr:2,children:Object(a.jsx)(p,{type:"accent",label:"Search",handleClick:function(){if(K(!1),U(!1),u<0)alert("Please input a positive integer.");else{for(var e=0;e<b.length;e++)Z("linear-bar",e,"#0AFFEF"),Z("binary-bar",e,"#0AFFEF");F("Searching binary..."),N("Searching linearly..."),_("rgba(255,255,255,.7)"),T("rgba(255,255,255,.7)");var t=Fe(b,u),n=t[0],a=t[1];$(n,"linear-bar"),n.length===2*b.length&&q.push(setTimeout((function(){N("Item ".concat(u," not found.")),T("red")}),2*b.length*(301-O))),$(a,"binary-bar");var s=2*Math.floor(Math.log2(b.length));a.length!==s&&a.length!==s+2||q.push(setTimeout((function(){U(!0),F("Item ".concat(u," not found.")),_("red")}),s*(301-O)))}}})}),Object(a.jsx)(l.a,{ml:2,mr:2,children:Object(a.jsx)(p,{type:"error",label:"stop",handleClick:function(){var e,t=Object(Ne.a)(q);try{for(t.s();!(e=t.n()).done;){var n=e.value;clearTimeout(n)}}catch(a){t.e(a)}finally{t.f()}J||(N("Search stopped."),T("yellow")),Q||(F("Search stopped."),_("yellow"))}})})]})})]})}var Ie=Object(s.memo)(Ae);function Te(e){var t=Object(s.useContext)($e),n=Object(s.useState)(e.isStart),i=Object(o.a)(n,2),r=i[0],c=i[1],l=Object(s.useState)(e.isFinish),u=Object(o.a)(l,2),d=u[0],h=u[1],f=r?"node start":d?"node finish":"node",b=document.getElementsByClassName("node");return Object(s.useEffect)((function(){b=document.getElementsByClassName("node"),e.clearPath(),e.onMouseEnter(t.s,e.id,!0)}),[d]),Object(s.useEffect)((function(){b=document.getElementsByClassName("node"),e.clearPath(),e.onMouseEnter(e.id,t.f,!0)}),[r]),Object(a.jsx)("div",{onDragOver:function(e){e.preventDefault()},onDrop:function(n){n.preventDefault(),"start"===b[t.prev].classList[1]?(b[e.id].classList.add("start"),b[t.prev].classList.remove("start"),e.changeStart(e.id),c(!0)):"finish"===b[t.prev].classList[1]&&(b[e.id].classList.add("finish"),b[t.prev].classList.remove("finish"),e.changeFinish(e.id),h(!0)),b[e.id].setAttribute("draggable","true")},onDragStart:function(t){b[e.id].setAttribute("draggable","false"),e.changePrev(e.id)},onMouseEnter:function(n){if(n.preventDefault(),!r&&!d&&t.MouseDown){var a=(b=document.getElementsByClassName("node"))[e.id].classList.contains("obstacle");if(n.ctrlKey)b[e.id].classList.contains("weight")?b[e.id].classList.remove("weight"):b[e.id].classList.add("weight");else a?b[e.id].classList.remove("obstacle"):b[e.id].classList.add("obstacle");e.clearPath(),e.onMouseEnter(t.s,t.f,!0)}},onMouseDown:function(n){if(!r&&!d){n.preventDefault();var a=(b=document.getElementsByClassName("node"))[e.id].classList.contains("obstacle");if(n.ctrlKey)b[e.id].classList.contains("weight")?b[e.id].classList.remove("weight"):b[e.id].classList.add("weight");else a?b[e.id].classList.remove("obstacle"):b[e.id].classList.add("obstacle");e.clearPath(),e.onMouseEnter(t.s,t.f,!0),e.onMouseDown(!0)}},onMouseUp:function(){e.onMouseDown(!1),t.prev===e.id&&(console.log(b[e.id]),console.log(b[e.id+1]))},draggable:r||d,className:f,id:e.id})}var De=Object(s.memo)(Te),Be=n(31),Pe=document.getElementsByClassName("node");function _e(e,t){Pe[e].setAttribute("data-distance",t.toString())}function ze(e){var t=Pe[e].getAttribute("data-distance");return t?parseInt(t):1e3}function Re(e){return Pe[e].classList.contains("obstacle")}function qe(e){var t=e-50,n=e+50,a=e+1,s=e-1,i=[];return n<700&&!Re(n)&&i.push(Pe[n]),a<700&&!Re(a)&&i.push(Pe[a]),s>=51&&!Re(s)&&i.push(Pe[s]),t>=51&&!Re(t)&&i.push(Pe[t]),i}function He(e,t){Pe[e].setAttribute("data-parent",t)}function Ve(e){var t;return Pe[e]&&(t=Pe[e].getAttribute("data-parent")),t}function Je(e){for(var t=[],n=Ve(e);"none"!==n;){var a=0;n&&(a=parseInt(n)),t.push(a),n=Ve(a)}return t}var Ke=function(e,t){!function(){for(var e=0;e<750;e++)Pe[e].setAttribute("data-distance","1000"),Pe[e].setAttribute("data-parent","none")}(),_e(e,0);for(var n={},a=[Pe[e]],s=[];a.length>0;){var i=a.shift();if(i){for(var r=parseInt(i.id),c=qe(r),o=0;o<c.length;o++){var l=c[o],u=parseInt(l.id),d=ze(u),h=Pe[u].classList.contains("weight")?2:1,f=ze(r)+h;if(f<d&&(_e(u,f),He(u,r.toString())),u===t)return[s,Je(u)];n[u]||(a.push(l),n[u]=!0,s.push(u))}n[r]=!0}}return[s,[]]},We=[],Ge=function e(t){Object(Be.a)(this,e),this.data=void 0,this.parent=void 0,this.data=t,this.parent=void 0};function Qe(e,t,n){var a;We=[];var s,i=[];if(0===n)s=Ue(e,t);else if(1===n)s=Ue(e,t,!0);else if(2===n){return Ke(e,t)}for(s=null===(a=s)||void 0===a?void 0:a.parent;void 0!=s;)i.push(s.data),s=s.parent;return[We,i]}function Ue(e,t,n){var a=document.getElementsByClassName("node"),s=new Set;s.add(e);var i=new Ge(e),r=[];for(r.push(i);r.length>0;){var c,o=void 0;if((null===(c=o=n?r.pop():r.shift())||void 0===c?void 0:c.data)===t)return o;if(o){var l=o.data,u=l+1,d=l+50,h=l-50,f=l-1;if(f>=0&&!s.has(f)&&!a[f].classList.contains("obstacle")){s.add(f);var b=new Ge(f);b.parent=o,r.push(b),We.push(f)}if(u<749&&!s.has(u)&&!a[u].classList.contains("obstacle")){s.add(u);var j=new Ge(u);j.parent=o,r.push(j),We.push(u)}if(d<749&&!s.has(d)&&!a[d].classList.contains("obstacle")){s.add(d);var p=new Ge(d);p.parent=o,r.push(p),We.push(d)}if(h>=0&&!s.has(h)&&!a[h].classList.contains("obstacle")){s.add(h);var v=new Ge(h);v.parent=o,r.push(v),We.push(h)}}}}var $e=Object(s.createContext)({});function Xe(){var e=document.getElementsByClassName("node"),t=Object(s.useState)(!1),n=Object(o.a)(t,2),i=n[0],r=n[1],c=Object(s.useState)({id:-1,name:"Choose Algorithm"}),u=Object(o.a)(c,2),d=u[0],h=u[1],f=Object(s.useState)(93),b=Object(o.a)(f,2),v=b[0],m=b[1],g=Object(s.useRef)([{id:0,name:"Breadth First Search"},{id:1,name:"Depth First Search"},{id:2,name:"Dijkstra's Algorithm"}]);Object(s.useEffect)((function(){V()}),[]);var x=Object(s.useState)([]),y=Object(o.a)(x,2),S=y[0],C=y[1],w=Object(s.useState)(105),N=Object(o.a)(w,2),E=N[0],L=N[1],k=Object(s.useState)(645),F=Object(o.a)(k,2),M=F[0],A=F[1],I=Object(s.useState)(-1),T=Object(o.a)(I,2),D=T[0],B=T[1],P=Object(s.useState)(!1),_=Object(o.a)(P,2),z=_[0],R=_[1];function q(t,n,a){if(a)for(var s=Qe(n,t,d.id)[1],i=0;i<s.length&&s[i]!==M;i++)e[s[i]]&&e[s[i]].classList.add("path");else{G(),Q();var r=Qe(n,t,d.id);!function(e,t){for(var n=0;n<e.length;n++)e[n]!==E&&H(e[n],n,t)}(r[0],"visited"),setTimeout((function(){!function(t){for(var n=0;n<t.length;n++)t[n]!==M&&H(t[n],4*n,"path");void 0===e[t[t.length-1]]&&window.alert("There is no possible path.")}(r[1]),setTimeout((function(){Q()}),r[1].length*(120-v))}),r[0].length*(100-v))}}function H(t,n,a){setTimeout((function(){if("path"===a)e[t].classList.remove("visited"),e[t].classList.add(a);else if(e[t]){if(t===M)return;e[t].classList.add(a)}}),n*(100-v))}function V(){for(var t=0;t<50;t++)e[t]&&(e[t].style.transition=".1s ease-in"),e[t].classList.add("obstacle");for(var n=50;n<750;n+=50)e[n]&&(e[n].style.transition=".1s ease-in"),e[n].classList.add("obstacle");for(var a=99;a<750;a+=50)e[a]&&(e[a].style.transition=".1s ease-in"),e[a].classList.add("obstacle");for(var s=700;s<750;s++)e[s]&&(e[s].style.transition=".1s ease-in"),e[s].classList.add("obstacle")}function J(e){L(e)}function K(e){A(e)}Object(s.useMemo)((function(){for(var e=[],t=0;t<750;t++)e.push(Object(a.jsx)(De,{clearPath:G,onMouseEnter:q,changeStart:J,changeFinish:K,changePrev:function(e){B(e)},onMouseDown:function(e){R(e)},isStart:t===E,isFinish:t===M,id:t},t));C(e)}),[E,M,d]);function W(){for(var e=document.querySelectorAll(".obstacle"),t=0;t<e.length;t++)e[t].classList.remove("obstacle")}function G(){for(var e=document.querySelectorAll(".path"),t=0;t<e.length;t++)e[t].classList.remove("path")}function Q(){for(var e=document.querySelectorAll(".visited"),t=0;t<e.length;t++)e[t].classList.remove("visited")}var U=g.current.map((function(e){return Object(a.jsxs)("div",{onClick:function(){var t;document.getElementsByClassName("pathfinding-algoOptions")[0].style.border="none",t=e.id,h(g.current[t]),r(!1)},children:[" ",e.name," "]},e.id)}));function $(t){!e[t]||e[t].classList.contains("finish")||e[t].classList.contains("start")||e[t].classList.add("obstacle")}function X(e,t,n,a){if(!(t<2||n<3)){a&&(G(),W(),V());for(var s=Math.floor(t/2),i=Math.floor(n/2),r=e+s,c=e+50*i,o=Math.floor(Math.random()*i+1),l=0;l<i;l++)l!==o&&l!==o-1&&$(r+50*l);var u=n-i;o=Math.floor(Math.random()*u);for(var d=0;d<u;d++)d!==o&&d!==o-1&&$(r+50*i+50*d);for(var h=Math.floor(Math.random()*s+1),f=0;f<s;f++)f!==h&&h-1!==f&&h+1!==f&&$(c+f);var b=t-s;h=Math.floor(Math.random()*b);for(var j=0;j<b;j++)j!==h&&h-1!==j&&h+1!==j&&$(c+j+s);X(e,s,i),X(e+s-1,b,i),X(c+100,s,u),X(c+100+s,b,u)}}return Object(a.jsxs)(l.a,{p:4,className:"flat",style:{width:"98vw",height:"80vh",position:"relative",margin:"auto",top:"1rem",overflow:"hidden",borderRadius:"10px"},children:[Object(a.jsxs)("div",{className:"pathfinding-algoOptions",children:[Object(a.jsxs)("div",{className:"pathfinding-algo-dropdown",onClick:function(){r((function(e){return!e}))},children:[Object(a.jsxs)("div",{children:[" ",d.name," "]}),Object(a.jsx)(O.a,{})]}),Object(a.jsx)(l.a,{hidden:!i,children:Object(a.jsx)("div",{className:"pathAlgo-options",children:U})})]}),Object(a.jsx)("div",{className:"search-field",children:Object(a.jsx)($e.Provider,{value:{MouseDown:z,prev:D,s:E,f:M},children:Object(a.jsx)("div",{id:"draggable-field",children:S})})}),Object(a.jsx)("div",{className:"pathFinding-panel",children:Object(a.jsxs)("div",{children:[Object(a.jsxs)(l.a,{pl:2,pr:2,display:"flex",flexDirection:"column",alignItems:"center",children:[Object(a.jsx)(l.a,{m:1,children:"Change Speed"}),Object(a.jsx)("input",{"aria-label":"pathfinding-speed",type:"range",min:.1,max:98,value:v,onChange:function(e){var t=e.target.value;m(t)}})]}),Object(a.jsx)(l.a,{pl:2,pr:2,display:"flex",flexDirection:"column",alignItems:"center",children:Object(a.jsx)(j,{label:"Reset Field",handleClick:function(){h({id:-1,name:"Choose Algorithm"}),W(),G(),Q(),function(){for(var e=document.querySelectorAll(".weight"),t=0;t<e.length;t++)e[t].classList.remove("weight")}(),V()}})}),Object(a.jsx)(l.a,{pl:2,pr:2,display:"flex",flexDirection:"column",alignItems:"center",children:Object(a.jsx)(j,{label:"Random Walls",handleClick:function(){W(),V(),G();for(var t=0;t<750;t++)!e[t]||e[t].classList.contains("obstacle")||e[t].classList.contains("finish")||e[t].classList.contains("start")||Math.floor(50*Math.random())<14&&e[t].classList.add("obstacle")}})}),Object(a.jsx)(l.a,{pl:2,pr:2,display:"flex",flexDirection:"column",alignItems:"center",children:Object(a.jsx)(j,{label:"Create Maze",handleClick:function(){X(51,48,13,!0)}})}),Object(a.jsx)(l.a,{pl:2,pr:2,display:"flex",flexDirection:"column",alignItems:"center",children:Object(a.jsx)(p,{handleClick:function(){-1!==d.id?(document.getElementsByClassName("pathfinding-algoOptions")[0].style.border="none",q(E,M,!1)):document.getElementsByClassName("pathfinding-algoOptions")[0].style.border="2px solid red"},type:"error",label:"Find the path!"})})]})})]})}var Ye=i.a.memo(Xe);n(51);var Ze=function(){var e=Object(s.useState)(0),t=Object(o.a)(e,2),n=t[0],i=t[1];return Object(a.jsxs)(l.a,{children:[Object(a.jsx)(b,{handleChangeTab:function(e){i(e)}}),Object(a.jsx)(l.a,{hidden:0!==n,mt:3,className:"f-color1",children:Object(a.jsx)(we,{})}),Object(a.jsx)(l.a,{hidden:1!==n,mt:3,className:"f-color1",children:Object(a.jsx)(Ie,{})}),Object(a.jsx)(l.a,{hidden:2!==n,mt:3,className:"f-color1",children:Object(a.jsx)(Ye,{})})]})},et=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,70)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),s(e),i(e),r(e)}))};c.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(Ze,{})}),document.getElementById("root")),et()}},[[52,1,2]]]);
//# sourceMappingURL=main.fa54fff4.chunk.js.map