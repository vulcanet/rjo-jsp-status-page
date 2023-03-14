(this["webpackJsonpissue-status"]=this["webpackJsonpissue-status"]||[]).push([[0],{36:function(n,t,e){},37:function(n,t,e){},48:function(n,t,e){"use strict";e.r(t);var o,a,r,c,i,s,u,l,d,b,j,p,g,x,O,m,f,h,v,w,S,C,_,k,E=e(1),I=e.n(E),A=e(20),P=e.n(A),y=(e(36),e(5)),T=e(3),N=(e(37),e(4)),D={message:"All Systems Operational",backgroundColour:"#3da751"},R={message:"Some systems are experiencing issues",backgroundColour:"#4990e2"},F={message:"Some systems are experiencing a major outage",backgroundColour:"#d94430"},L=function(n,t){return 100*n.filter((function(n){return n.labels.find((function(n){return n.name===t}))})).length/n.length},M=e(8),z=e.n(M),J=e(0),Y=N.a.div(o||(o=Object(T.a)(["\n  background-color: ",";\n  color: white;\n  padding: 16px;\n  border-radius: 3px;\n  margin-bottom: 32px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  transition: 0.3s;\n"])),(function(n){return n.backgroundColour?n.backgroundColour:"#b1b1b1"})),W=N.a.h2(a||(a=Object(T.a)(["\n  font-size: 20px;\n  margin: 0;\n  font-weight: normal;\n"]))),B=N.a.button(r||(r=Object(T.a)(["\n  background-color: transparent;\n  color: white;\n  text-decoration: underline;\n  border: none;\n  cursor: pointer;\n  text-align: right;\n  padding: 0;\n"]))),U=N.a.code(c||(c=Object(T.a)(["\n  white-space: pre-wrap;\n  display: block;\n"]))),H=function(n){var t=n.loading,e=n.error,o=n.components,a=n.refetch,r=function(n){var t=Object(E.useState)(),e=Object(y.a)(t,2),o=e[0],a=e[1];return Object(E.useEffect)((function(){var t=!1;L(n,"operational")<70&&(a(R),t=!0),L(n,"major outage")>0&&(a(F),t=!0),t||a(D)}),[n]),[o]}(o),c=Object(y.a)(r,1)[0],i=function(n,t){var e=Object(E.useState)(z()(new Date(localStorage.getItem("issueStatusLastFetchcomponent"))).fromNow()),o=Object(y.a)(e,2),a=o[0],r=o[1];return Object(E.useEffect)((function(){var t=setInterval((function(){new Date(localStorage.getItem("issueStatusLastFetchcomponent"))<new Date-24e4?n((function(){r(z()(new Date(localStorage.getItem("issueStatusLastFetchcomponent"))).fromNow())})):r(z()(new Date(localStorage.getItem("issueStatusLastFetchcomponent"))).fromNow())}),1e3);return function(){clearInterval(t)}}),[n]),Object(E.useEffect)((function(){r(z()(new Date(localStorage.getItem("issueStatusLastFetchcomponent"))).fromNow())}),[t]),[a]}(a,t),s=Object(y.a)(i,1)[0];return Object(J.jsxs)(J.Fragment,{children:[e.hasError&&Object(J.jsxs)(U,{children:[Object(J.jsx)("div",{children:"An error occured"}),Object(J.jsx)("div",{children:"You may have exceeded the rate limit. Try again in 1 hour to fetch the latest data."}),JSON.stringify(e.errors,null,3)]}),Object(J.jsxs)(Y,{backgroundColour:null===c||void 0===c?void 0:c.backgroundColour,children:[Object(J.jsx)(W,{children:null===c||void 0===c?void 0:c.message}),Object(J.jsx)(B,{onClick:a,children:t?"reloading":s})]})]})},K=function(n){var t=Object(E.useState)([]),e=Object(y.a)(t,2),o=e[0],a=e[1],r=Object(E.useState)(),c=Object(y.a)(r,2),i=c[0],s=c[1],u=Object(E.useState)(!0),l=Object(y.a)(u,2),d=l[0],b=l[1];return Object(E.useEffect)((function(){new Date(localStorage.getItem("issueStatusLastFetch".concat(n)))<new Date-24e4?V(b,s,a,n):(a(JSON.parse(localStorage.getItem("issueStatus".concat(n)))),b(!1),s())}),[n]),[d,i,o||[],function(){return V(b,s,a,n)}]},V=function(n,t,e,o){n(!0),fetch("https://api.github.com/repos/".concat("vulcanet/rjo-jsp-status-page","/issues?state=all&labels=issue status,").concat(o,"&per_page=100")).then((function(n){return n.json()})).then((function(a){t(),localStorage.setItem("issueStatusLastFetch".concat(o),new Date),localStorage.setItem("issueStatus".concat(o),JSON.stringify(a)),e(a),n(!1)})).catch((function(a){t(a.toString()),localStorage.setItem("issueStatusLastFetch".concat(o),new Date),e(JSON.parse(localStorage.getItem("issueStatus".concat(o)))),n(!1)}))},G=(N.a.h1(i||(i=Object(T.a)(["\n  text-align: center;\n  margin-top: 0;\n  margin-bottom: 0;\n"]))),N.a.img(s||(s=Object(T.a)([""])))),$=N.a.div(u||(u=Object(T.a)(["\n  text-align: center;\n  margin-bottom: 16px;\n"]))),q=function(){return Object(J.jsx)($,{children:Object(J.jsx)(G,{src:"https://raw.githubusercontent.com/vulcanet/rjo-jsp-status-page/master/public/vulcanet_logo_pg_status.png",alt:"Converja Status"})})},Q=N.a.div(l||(l=Object(T.a)(["\n  width: 100%;\n  height: 44px;\n  border-radius: 3px;\n  background-color: #f7f8f9;\n\n  :not(:last-child) {\n    margin-bottom: 8px;\n  }\n"]))),X={operational:{name:"Operational",colour:"#247234",backgroundColour:"rgba(61, 167, 81, 0.1)"},performanceIssues:{name:"Performance Issues",colour:"#2f5888",backgroundColour:"rgba(73, 144, 226, 0.1)"},partialOutage:{name:"Partial Outage",colour:"#74582a",backgroundColour:"rgba(255, 198, 103, 0.1)"},majorOutage:{name:"Major Outage",colour:"#8e3b31",backgroundColour:"rgba(217, 68, 48, 0.1)"},unknown:{name:"Unknown",colour:"#6e6b6b",backgroundColour:"rgba(177, 177, 177, 0.1)"}},Z=N.a.div(d||(d=Object(T.a)(["\n  color: ",";\n  background-color: ",";\n  padding: 5px 12px;\n  border-radius: 16px;\n  font-size: 13px;\n  transition: 0.3s;\n"])),(function(n){return n.colour}),(function(n){return n.backgroundColour})),nn=function(n){var t=function(n){var t=Object(E.useState)(),e=Object(y.a)(t,2),o=e[0],a=e[1];return Object(E.useEffect)((function(){a(Object.values(X).find((function(t){return n.find((function(n){return n.name===t.name.toLowerCase()}))})))}),[n]),o||a(X.unknown),[o]}(n.labels),e=Object(y.a)(t,1)[0];return Object(J.jsx)(Z,{colour:null===e||void 0===e?void 0:e.colour,backgroundColour:null===e||void 0===e?void 0:e.backgroundColour,children:null===e||void 0===e?void 0:e.name})},tn=N.a.div(b||(b=Object(T.a)(["\n  background-color: #f7f8f9;\n  padding: 8px 16px;\n  border-radius: 3px;\n  justify-content: space-between;\n  align-items: center;\n  display: flex;\n\n  :not(:last-child) {\n    margin-bottom: 8px;\n  }\n"]))),en=function(n){var t=n.component;return Object(J.jsxs)(tn,{children:[t.title," ",Object(J.jsx)(nn,{labels:t.labels})]})},on=function(){var n=Object(E.useState)(),t=Object(y.a)(n,2),e=t[0],o=t[1];return Object(E.useEffect)((function(){o(!0)}),[]),[e]},an=function(n){var t=n.loading,e=n.components,o=on(),a=Object(y.a)(o,1)[0];return!t||a?(null===e||void 0===e?void 0:e.length)>0?null===e||void 0===e?void 0:e.map((function(n){return Object(J.jsx)(en,{component:n},n.id)})):Object(J.jsx)("p",{children:"No Components found."}):Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)(Q,{}),Object(J.jsx)(Q,{}),Object(J.jsx)(Q,{})]})},rn=e(26),cn=N.a.div(j||(j=Object(T.a)(["\n  transition: 0.3s;\n  border-left: 16px solid\n    ",";\n  background-color: white;\n  border-radius: 3px;\n  padding: 16px;\n  box-shadow: 0px 0px 33px -32px rgba(0, 0, 0, 0.75);\n  margin-top: 8px;\n\n  :not(:last-child) {\n    margin-bottom: 16px;\n  }\n"])),(function(n){return n.active?"rgba(177, 177, 177,0.2)":"rgba(73, 144, 226, 0.2)"})),sn=N.a.div(p||(p=Object(T.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 3px;\n"]))),un=N.a.div(g||(g=Object(T.a)(["\n  margin-right: 16px;\n  font-weight: bold;\n  margin-bottom: 8px;\n  color: #1e1e1e;\n"]))),ln=N.a.div(x||(x=Object(T.a)(["\n  white-space: break-spaces;\n  color: #1e1e1e;\n"]))),dn=N.a.div(O||(O=Object(T.a)(["\n  color: ",";\n  background-color: ",";\n  padding: 5px 12px;\n  border-radius: 16px;\n  font-size: 13px;\n  transition: 0.3s;\n"])),(function(n){return n.active?"#6e6b6b":"#2f5888"}),(function(n){return n.active?"rgba(177, 177, 177, 0.1)":"rgba(73, 144, 226, 0.1)"})),bn=N.a.div(m||(m=Object(T.a)(["\n  font-size: 13px;\n  color: #6e6b6b;\n  font-weight: bold;\n"]))),jn=function(n){var t=n.incident;return Object(J.jsxs)(cn,{active:t.closed_at,children:[Object(J.jsxs)(sn,{children:[Object(J.jsx)(bn,{children:z()(t.created_at).format("MMMM Do YYYY, h:mm a").toUpperCase()}),Object(J.jsx)(dn,{active:t.closed_at,children:t.closed_at?"Closed":"Active"})]}),Object(J.jsx)(un,{children:t.title}),Object(J.jsx)(ln,{children:Object(J.jsx)(rn.a,{children:t.body})})]})},pn=N.a.div(f||(f=Object(T.a)(["\n  width: 100%;\n  height: 84px;\n  border-radius: 3px;\n  background-color: white;\n  box-shadow: 0px 0px 33px -32px rgba(0, 0, 0, 0.75);\n\n  :not(:last-child) {\n    margin-bottom: 8px;\n  }\n"]))),gn=N.a.div(h||(h=Object(T.a)(["\n  margin: 32px auto 0 auto;\n  max-width: 1040px;\n"]))),xn=N.a.div(v||(v=Object(T.a)(["\n  padding: 0 16px;\n  font-size: 20px;\n  margin-bottom: 16px;\n"]))),On=N.a.div(w||(w=Object(T.a)(["\n  margin: 0 8px;\n"]))),mn=function(n){var t=n.loading,e=n.incidents,o=on(),a=Object(y.a)(o,1)[0];return Object(J.jsxs)(gn,{children:[Object(J.jsx)(xn,{children:"Incidents"}),!t||a?(null===e||void 0===e?void 0:e.length)>0?null===e||void 0===e?void 0:e.map((function(n){return Object(J.jsx)(jn,{incident:n},n.id)})):Object(J.jsx)(On,{children:"No Incidents found."}):Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)(pn,{}),Object(J.jsx)(pn,{}),Object(J.jsx)(pn,{})]})]})},fn=N.a.div(S||(S=Object(T.a)(["\n  display: flex;\n  justify-content: space-between;\n  margin-top: 16px;\n"]))),hn=N.a.a(C||(C=Object(T.a)(["\n  color: #6e6b6b;\n  font-size: 13px;\n  text-decoration: none;\n  transition: 0.3s;\n  display: ",";\n\n  :hover {\n    opacity: 0.9;\n  }\n"])),(function(n){return n.visible?"block":"none"})),vn=function(){return Object(J.jsxs)(fn,{children:[Object(J.jsx)("div",{}),Object(J.jsx)(hn,{visible:"false"!==Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_MANIFEST:"https://raw.githubusercontent.com/vulcanet/rjo-jsp-status-page/master/.issuestatus/manifest.json",REACT_APP_FAVICON:"https://vulcanet.com.br/wp-content/uploads/2021/05/cropped-Vulcanet-Sistemas-e-Engenharia-h152-icon-32x32.png",REACT_APP_TITLE:"Converja Status",REACT_APP_DESCRIPTION:"Simple, modern and flexible status page",REACT_APP_LOGO:"https://raw.githubusercontent.com/vulcanet/rjo-jsp-status-page/master/public/vulcanet_logo_pg_status.png",REACT_APP_NAME:"Converja Status",REACT_APP_REPOSITORY:"vulcanet/rjo-jsp-status-page"}).REACT_APP_BRANDING,href:"https://github.com/tadhglewis/issue-status",rel:"noopener",target:"_blank",children:"Powered by Issue Status"})]})},wn=N.a.div(_||(_=Object(T.a)(["\n  max-width: 1008px;\n  padding: 16px;\n  margin: 16px auto;\n"]))),Sn=N.a.div(k||(k=Object(T.a)(["\n  box-shadow: 0px 0px 33px -32px rgba(0, 0, 0, 0.75);\n  border-radius: 3px;\n  background-color: white;\n  padding: 16px;\n"]))),Cn=function(){var n=K("component"),t=Object(y.a)(n,4),e=t[0],o=t[1],a=t[2],r=t[3],c=K("incident"),i=Object(y.a)(c,4),s=i[0],u=i[1],l=i[2],d=i[3];return Object(J.jsxs)(wn,{children:[Object(J.jsx)(q,{}),Object(J.jsxs)(Sn,{children:[Object(J.jsx)(H,{loading:e||s,error:{hasError:o||u,errors:{componentsError:o,incidentsError:u}},components:a,refetch:function(){r(),d()}}),Object(J.jsx)(an,{loading:e,components:a})]}),Object(J.jsx)(mn,{loading:s,incidents:l}),Object(J.jsx)(vn,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));P.a.render(Object(J.jsx)(I.a.StrictMode,{children:Object(J.jsx)(Cn,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[48,1,2]]]);
//# sourceMappingURL=main.c53fcecd.chunk.js.map