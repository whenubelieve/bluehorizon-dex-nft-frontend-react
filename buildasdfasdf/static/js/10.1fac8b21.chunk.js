(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[10],{1427:function(e,t,n){"use strict";n.r(t);var c,r,o,a=n(4),s=n.n(a),i=n(12),b=n(1),l=n(2),j=n(49),u=n(75),d=n(74),x=n(69),p=n(65),O=n(839),h=n(371),f=n(15),m=n(241),v=n(932),g=n(367),w=n(805),k=n(860),S=n(897),y=n(5),C=n(6),B=n(779),I=n(37),A=n(816),L=n(807),X=n(0),V=Object(C.e)(l.m)(c||(c=Object(y.a)(["\n  background-color: ",";\n  border: 1px solid ",";\n  border-radius: 16px;\n"])),(function(e){return e.theme.colors.background}),(function(e){return e.theme.colors.cardBorder})),D=function(e){var t=e.proposal,n=Object(f.b)().t,c=new Date(1e3*t.start),r=new Date(1e3*t.end);return Object(X.jsxs)(l.u,{mb:"16px",children:[Object(X.jsx)(l.x,{children:Object(X.jsx)(l.W,{as:"h3",scale:"md",children:n("Details")})}),Object(X.jsxs)(l.v,{children:[Object(X.jsxs)(l.U,{alignItems:"center",mb:"8px",children:[Object(X.jsx)(l.Xb,{color:"textSubtle",children:n("Identifier")}),Object(X.jsx)(l.gb,{href:"".concat(L.b,"/").concat(t.id),ml:"8px",children:t.id.slice(0,8)})]}),Object(X.jsxs)(l.U,{alignItems:"center",mb:"8px",children:[Object(X.jsx)(l.Xb,{color:"textSubtle",children:n("Creator")}),Object(X.jsx)(l.gb,{href:Object(I.e)(t.author,"address"),ml:"8px",children:Object(A.a)(t.author)})]}),Object(X.jsxs)(l.U,{alignItems:"center",mb:"16px",children:[Object(X.jsx)(l.Xb,{color:"textSubtle",children:n("Snapshot")}),Object(X.jsx)(l.gb,{href:Object(I.e)(t.snapshot,"block"),ml:"8px",children:t.snapshot})]}),Object(X.jsxs)(V,{p:"16px",children:[Object(X.jsx)(k.a,{proposalState:t.state,mb:"8px"}),Object(X.jsxs)(l.U,{alignItems:"center",children:[Object(X.jsx)(l.Xb,{color:"textSubtle",fontSize:"14px",children:n("Start Date")}),Object(X.jsx)(l.Xb,{ml:"8px",children:Object(B.default)(c,"yyyy-MM-dd HH:mm")})]}),Object(X.jsxs)(l.U,{alignItems:"center",children:[Object(X.jsx)(l.Xb,{color:"textSubtle",fontSize:"14px",children:n("End Date")}),Object(X.jsx)(l.Xb,{ml:"8px",children:Object(B.default)(r,"yyyy-MM-dd HH:mm")})]})]})]})]})},E=n(840),P=n.n(E),N=Object(C.e)(l.Xb)(r||(r=Object(y.a)(["\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"]))),U=function(e){var t=e.choices,n=e.votes,c=Object(f.b)().t,r=Object(w.a)(n),o=Object(O.e)(),a=Object(j.c)().account,s=Object(w.f)(n);return Object(X.jsxs)(l.u,{children:[Object(X.jsx)(l.x,{children:Object(X.jsx)(l.W,{as:"h3",scale:"md",children:c("Current Results")})}),Object(X.jsxs)(l.v,{children:[o===p.g.IDLE&&t.map((function(e,t){var n=r[e]||[],o=Object(w.f)(n),i=s.eq(0)?0:o.div(s).times(100).toNumber(),b=n.some((function(e){return a&&e.voter.toLowerCase()===a.toLowerCase()}));return Object(X.jsxs)(l.m,{mt:t>0?"24px":"0px",children:[Object(X.jsxs)(l.U,{alignItems:"center",mb:"8px",children:[Object(X.jsx)(N,{mb:"4px",title:e,children:e}),b&&Object(X.jsxs)(l.Vb,{variant:"success",outline:!0,ml:"8px",children:[Object(X.jsx)(l.E,{mr:"4px"})," ",c("Voted")]})]}),Object(X.jsx)(l.m,{mb:"4px",children:Object(X.jsx)(l.Hb,{primaryStep:i,scale:"sm"})}),Object(X.jsxs)(l.U,{alignItems:"center",justifyContent:"space-between",children:[Object(X.jsx)(l.Xb,{color:"textSubtle",children:c("%total% Votes",{total:o.toFormat(3)})}),Object(X.jsxs)(l.Xb,{children:[i.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}),"%"]})]})]},e)})),o===p.g.LOADING&&P()(t.length).map((function(e,t){return Object(X.jsx)(l.m,{mt:t>0?"24px":"0px",children:Object(X.jsx)(l.Mb,{height:"36px",mb:"4px"})},e)}))]})]})},z=n(3),T=n(9),M=n(30),F=n(93),H=n(110),W=n(13),q=n(191),J=n(26),K=n(94);!function(e){e.MAIN="main",e.DETAILS="details"}(o||(o={}));var G,Y,R,Q,_,Z,$,ee,te=n(867),ne=function(e){var t=e.vote,n=e.total,c=e.isPending,r=e.isLoading,o=e.onConfirm,a=e.onViewDetails,s=e.onDismiss,i=Object(f.b)().t;return Object(X.jsxs)(X.Fragment,{children:[Object(X.jsxs)(te.a,{children:[Object(X.jsx)(l.Xb,{color:"secondary",mb:"8px",textTransform:"uppercase",fontSize:"12px",bold:!0,children:i("Voting For")}),Object(X.jsx)(N,{bold:!0,fontSize:"20px",mb:"8px",title:t.label,children:t.label}),Object(X.jsx)(l.Xb,{color:"secondary",mb:"8px",textTransform:"uppercase",fontSize:"12px",bold:!0,children:i("Your Voting Power")}),r?Object(X.jsx)(l.Mb,{height:"64px",mb:"24px"}):Object(X.jsxs)(te.b,{onClick:a,style:{cursor:"pointer"},children:[Object(X.jsx)(l.Xb,{bold:!0,fontSize:"20px",children:n.toFormat(3)}),Object(X.jsx)(l.Z,{scale:"sm",variant:"text",children:Object(X.jsx)(l.I,{width:"24px"})})]}),Object(X.jsx)(l.Xb,{as:"p",color:"textSubtle",fontSize:"14px",children:i("Are you sure you want to vote for the above choice? This action cannot be undone.")})]}),Object(X.jsx)(l.q,{isLoading:c,endIcon:c?Object(X.jsx)(l.h,{spin:!0,color:"currentColor"}):null,disabled:r||n.eq(0),width:"100%",mb:"8px",onClick:o,children:i("Confirm Vote")}),Object(X.jsx)(l.q,{variant:"secondary",width:"100%",onClick:s,children:i("Cancel")})]})},ce=n(898),re=n(899),oe=function(e){var t,n=e.onSuccess,c=e.proposalId,r=e.vote,a=e.block,u=e.onDismiss,d=Object(b.useState)(o.MAIN),x=Object(T.a)(d,2),O=x[0],h=x[1],m=Object(b.useState)(!0),v=Object(T.a)(m,2),g=v[0],k=v[1],S=Object(b.useState)(!1),y=Object(T.a)(S,2),C=y[0],B=y[1],I=Object(j.c)().account,A=Object(f.b)().t,L=Object(F.a)().toastError,V=Object(J.a)().library,D=Object(K.a)().theme,E=Object(re.a)(a,g),P=E.isLoading,N=E.total,U=E.cakeBalance,M=E.cakeVaultBalance,H=E.cakePoolBalance,G=E.poolsBalance,Y=E.cakeBnbLpBalance,R=E.verificationHash,Q=O===o.MAIN,_=Q?null:function(){return h(o.MAIN)},Z=(t={},Object(W.a)(t,o.MAIN,A("Confirm Vote")),Object(W.a)(t,o.DETAILS,A("Voting Power")),t),$=function(){k(!1),u()},ee=function(){var e=Object(i.a)(s.a.mark((function e(){var t,o,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,B(!0),t=JSON.stringify(Object(z.a)(Object(z.a)({},Object(w.e)()),{},{type:p.f.VOTE,payload:{proposal:c,choice:r.value,metadata:{votingPower:N.toString(),verificationHash:R}}})),e.next=5,Object(q.c)(V,I,t);case 5:return o=e.sent,a={address:I,msg:t,sig:o},e.next=9,Object(w.i)(a);case 9:return B(!1),e.next=12,n();case 12:$(),e.next=20;break;case 15:e.prev=15,e.t0=e.catch(0),B(!1),L(A("Error"),null===e.t0||void 0===e.t0?void 0:e.t0.message),console.error(e.t0);case 20:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(){return e.apply(this,arguments)}}();return Object(X.jsx)(l.sb,{title:Z[O],onBack:_,onDismiss:u,hideCloseButton:!Q,headerBackground:D.colors.gradients.cardHeader,children:Object(X.jsxs)(l.m,{mb:"24px",width:"320px",children:[O===o.MAIN&&Object(X.jsx)(ne,{vote:r,isLoading:P,isPending:C,total:N,onConfirm:ee,onViewDetails:function(){return h(o.DETAILS)},onDismiss:$}),O===o.DETAILS&&Object(X.jsx)(ce.a,{total:N,cakeBalance:U,cakeVaultBalance:M,cakePoolBalance:H,poolsBalance:G,cakeBnbLpBalance:Y})]})})},ae=["proposal"],se=C.e.label(G||(G=Object(y.a)(["\n  align-items: center;\n  border: 1px solid ",";\n  border-radius: 16px;\n  cursor: ",";\n  display: flex;\n  margin-bottom: 16px;\n  padding: 16px;\n"])),(function(e){var t=e.theme,n=e.isChecked;return t.colors[n?"success":"cardBorder"]}),(function(e){return e.isDisabled?"not-allowed":"pointer"})),ie=C.e.div(Y||(Y=Object(y.a)(["\n  flex: 1;\n  padding-left: 16px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  width: 0;\n"]))),be=function(e){var t=e.proposal,n=Object(M.a)(e,ae),c=Object(b.useState)(null),r=Object(T.a)(c,2),o=r[0],a=r[1],u=Object(f.b)().t,d=Object(F.a)().toastSuccess,p=Object(x.b)(),O=Object(j.c)().account,m=function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:d(u("Vote cast!")),p(Object(h.d)({proposalId:t.id,block:Number(t.snapshot)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=Object(l.tc)(Object(X.jsx)(oe,{onSuccess:m,proposalId:t.id,vote:o,block:Number(t.snapshot)})),g=Object(T.a)(v,1)[0];return Object(X.jsxs)(l.u,Object(z.a)(Object(z.a)({},n),{},{children:[Object(X.jsx)(l.x,{children:Object(X.jsx)(l.W,{as:"h3",scale:"md",children:u("Cast your vote")})}),Object(X.jsxs)(l.v,{children:[t.choices.map((function(e,t){var n=t+1===(null===o||void 0===o?void 0:o.value);return Object(X.jsxs)(se,{isChecked:n,isDisabled:!O,children:[Object(X.jsx)("div",{style:{flexShrink:0},children:Object(X.jsx)(l.Jb,{scale:"sm",value:e,checked:n,onChange:function(){a({label:e,value:t+1})},disabled:!O})}),Object(X.jsx)(ie,{children:Object(X.jsx)(l.Xb,{as:"span",title:e,children:e})})]},e)})),O?Object(X.jsx)(l.q,{onClick:g,disabled:null===o,children:u("Cast Vote")}):Object(X.jsx)(H.a,{})]})]}))},le=n(271),je=n.n(le),ue=Object(C.e)(l.U)(R||(R=Object(y.a)(["\n  border-bottom: 1px solid ",";\n  padding: 16px 24px;\n"])),(function(e){return e.theme.colors.cardBorder})),de=Object(C.e)(l.Mb)(Q||(Q=Object(y.a)(["\n  flex: 1;\n"]))),xe=function(){return Object(X.jsx)(l.m,{children:P()(10).map((function(e){return Object(X.jsxs)(ue,{children:[Object(X.jsx)(l.Mb,{height:"21px",mr:"32px",width:"100px"}),Object(X.jsx)(de,{height:"21px",mr:"32px",width:"100%"}),Object(X.jsx)(de,{height:"21px",width:"100%"})]},e)}))})},pe=n(18),Oe=n.n(pe),he=Object(C.e)(l.m).attrs({alignItems:"center"})(_||(_=Object(y.a)(["\n  grid-area: address;\n"]))),fe=Object(C.e)(l.m)(Z||(Z=Object(y.a)(["\n  grid-area: choice;\n  overflow: hidden;\n"]))),me=Object(C.e)(l.m)($||($=Object(y.a)(["\n  justify-self: end;\n  grid-area: vote;\n"]))),ve=Object(C.e)(l.V)(ee||(ee=Object(y.a)(["\n  border-bottom: 1px solid ",";\n  grid-gap: 8px;\n  grid-template-areas: 'address choice vote';\n  grid-template-columns: minmax(110px, 200px) 1fr 1fr;\n  padding: 8px 16px;\n\n  "," {\n    grid-gap: 16px;\n    padding: 16px 24px;\n  }\n"])),(function(e){return e.theme.colors.cardBorder}),(function(e){return e.theme.mediaQueries.sm})),ge=function(e){var t,n=e.vote,c=e.isVoter,r=Object(f.b)().t,o=!!(null===(t=n.metadata)||void 0===t?void 0:t.votingPower),a=o?new Oe.a(n.metadata.votingPower).toFormat(3):"--";return Object(X.jsxs)(ve,{children:[Object(X.jsx)(he,{children:Object(X.jsxs)(l.U,{alignItems:"center",children:[Object(X.jsx)(l.gb,{href:Object(I.e)(n.voter,"address"),children:Object(A.a)(n.voter)}),c&&Object(X.jsxs)(l.Vb,{variant:"success",outline:!0,ml:"8px",children:[Object(X.jsx)(l.E,{mr:"4px"})," ",r("Voted")]})]})}),Object(X.jsx)(fe,{children:Object(X.jsx)(N,{title:n.proposal.choices[n.choice-1],children:n.proposal.choices[n.choice-1]})}),Object(X.jsx)(me,{children:Object(X.jsxs)(l.U,{alignItems:"center",justifyContent:"end",children:[Object(X.jsx)(l.Xb,{title:n.metadata.votingPower,children:a}),o&&Object(X.jsx)(l.gb,{href:"".concat(L.b,"/").concat(n.id)})]})})]})},we=function(e){var t;return parseFloat(null===e||void 0===e||null===(t=e.metadata)||void 0===t?void 0:t.votingPower)},ke=function(e){var t=e.votes,n=Object(b.useState)(!1),c=Object(T.a)(n,2),r=c[0],o=c[1],a=Object(f.b)().t,s=Object(j.c)().account,i=je()(t,[we,"created"],["desc","desc"]),u=r?i:i.slice(0,20),d=Object(O.e)()===p.g.IDLE;return Object(X.jsxs)(l.u,{children:[Object(X.jsx)(l.x,{children:Object(X.jsxs)(l.U,{alignItems:"center",justifyContent:"space-between",children:[Object(X.jsx)(l.W,{as:"h3",scale:"md",children:a("Votes (%count%)",{count:t.length.toLocaleString()})}),!d&&Object(X.jsx)(l.h,{spin:!0,width:"22px"})]})}),!d&&Object(X.jsx)(xe,{}),d&&u.length>0&&Object(X.jsxs)(X.Fragment,{children:[Object(X.jsxs)(ve,{children:[Object(X.jsx)(he,{children:Object(X.jsx)(l.Xb,{fontSize:"12px",color:"textSubtle",textTransform:"uppercase",bold:!0,children:a("Voter")})}),Object(X.jsx)(fe,{children:Object(X.jsx)(l.Xb,{fontSize:"12px",color:"textSubtle",textTransform:"uppercase",bold:!0,children:a("Decision")})}),Object(X.jsx)(me,{children:Object(X.jsx)(l.Xb,{fontSize:"12px",color:"textSubtle",textTransform:"uppercase",bold:!0,children:a("Vote Weight")})})]}),u.map((function(e){var t=s&&e.voter.toLowerCase()===s.toLowerCase();return Object(X.jsx)(ge,{vote:e,isVoter:t},e.id)})),Object(X.jsx)(l.U,{alignItems:"center",justifyContent:"center",py:"8px",px:"24px",children:Object(X.jsx)(l.q,{width:"100%",onClick:function(){o(!r)},variant:"text",endIcon:r?Object(X.jsx)(l.J,{color:"primary",width:"21px"}):Object(X.jsx)(l.G,{color:"primary",width:"21px"}),disabled:!d,children:a(r?"Hide":"See All")})})]}),d&&0===u.length&&Object(X.jsx)(l.U,{alignItems:"center",justifyContent:"center",py:"32px",children:Object(X.jsx)(l.W,{as:"h5",children:a("No votes found")})})]})};t.default=function(){var e=Object(u.i)().id,t=Object(O.a)(e),n=Object(f.b)().t,c=Object(j.c)().account,r=Object(x.b)(),o=Object(O.d)(e),a=Object(O.e)(),y=Object(O.b)(),C=c&&o.some((function(e){return e.voter.toLowerCase()===c.toLowerCase()})),B=null!==t&&void 0!==t?t:{},I=B.id,A=void 0===I?null:I,L=B.snapshot,V=void 0===L?null:L,E=a===p.g.LOADING||y===p.g.LOADING;return Object(b.useEffect)((function(){r(Object(h.b)(e))}),[e,r]),Object(b.useEffect)((function(){A&&V&&function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r(Object(h.d)({proposalId:A,block:Number(V)}));case 2:r(Object(h.e)({proposalId:A,snapshot:V}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[A,V,r]),t?Object(X.jsxs)(m.a,{py:"40px",children:[Object(X.jsx)(l.m,{mb:"40px",children:Object(X.jsx)(l.q,{as:d.a,to:"/voting",variant:"text",startIcon:Object(X.jsx)(l.b,{color:"primary",width:"24px"}),px:"0",children:n("Back to Vote Overview")})}),Object(X.jsxs)(S.a,{children:[Object(X.jsxs)(l.m,{children:[Object(X.jsxs)(l.m,{mb:"32px",children:[Object(X.jsxs)(l.U,{alignItems:"center",mb:"8px",children:[Object(X.jsx)(k.a,{proposalState:t.state}),Object(X.jsx)(k.b,{isCoreProposal:Object(w.h)(t),ml:"8px"})]}),Object(X.jsx)(l.W,{as:"h1",scale:"xl",mb:"16px",children:t.title}),Object(X.jsx)(l.m,{children:Object(X.jsx)(v.a,{children:t.body})})]}),!E&&!C&&t.state===p.d.ACTIVE&&Object(X.jsx)(be,{proposal:t,mb:"16px"}),Object(X.jsx)(ke,{votes:o})]}),Object(X.jsxs)(l.m,{children:[Object(X.jsx)(D,{proposal:t}),Object(X.jsx)(U,{choices:t.choices,votes:o})]})]})]}):Object(X.jsx)(g.a,{})}},805:function(e,t,n){"use strict";n.d(t,"h",(function(){return h})),n.d(t,"c",(function(){return f})),n.d(t,"b",(function(){return m})),n.d(t,"d",(function(){return v})),n.d(t,"e",(function(){return g})),n.d(t,"i",(function(){return w})),n.d(t,"g",(function(){return k})),n.d(t,"a",(function(){return S})),n.d(t,"f",(function(){return y}));var c=n(13),r=n(36),o=n(3),a=n(4),s=n.n(a),i=n(12),b=n(18),l=n.n(b),j=n(24),u=n(99),d=n(33),x=n(65),p=n(97),O=n(807),h=function(e){return e.author.toLowerCase()===O.a.toLowerCase()},f=function(e,t){switch(t){case x.e.COMMUNITY:return e.filter((function(e){return!h(e)}));case x.e.CORE:return e.filter((function(e){return h(e)}));case x.e.ALL:default:return e}},m=function(e,t){return e.filter((function(e){return e.state===t}))},v=function(){return{plugins:{},network:56,strategies:[{name:"cake",params:{symbol:"CAKE",address:Object(j.f)(),decimals:18}}]}},g=function(){return{version:O.e,timestamp:(Date.now()/1e3).toFixed(),space:O.c}},w=function(){var e=Object(i.a)(s.a.mark((function e(t){var n,c,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(u.e,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)});case 2:if((n=e.sent).ok){e.next=8;break}return e.next=6,n.json();case 6:throw c=e.sent,new Error(null===c||void 0===c?void 0:c.error_description);case 8:return e.next=10,n.json();case 10:return r=e.sent,e.abrupt("return",r);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(i.a)(s.a.mark((function e(t,n,c){var r,o,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=c,e.t0){e.next=5;break}return e.next=4,p.a.getBlockNumber();case 4:e.t0=e.sent;case 5:return r=e.t0,e.next=8,fetch("".concat(u.f,"/power"),{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({address:t,block:r,poolAddresses:n})});case 8:return o=e.sent,e.next=11,o.json();case 11:return a=e.sent,e.abrupt("return",a.data);case 13:case"end":return e.stop()}}),e)})));return function(t,n,c){return e.apply(this,arguments)}}(),S=function(e){return e.reduce((function(e,t){var n=t.proposal.choices[t.choice-1];return Object(o.a)(Object(o.a)({},e),{},Object(c.a)({},n,e[n]?[].concat(Object(r.a)(e[n]),[t]):[t]))}),{})},y=function(e){return e.reduce((function(e,t){var n,c=new l.a(null===(n=t.metadata)||void 0===n?void 0:n.votingPower);return e.plus(c)}),d.d)}},807:function(e,t,n){"use strict";n.d(t,"d",(function(){return c})),n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o})),n.d(t,"e",(function(){return a})),n.d(t,"c",(function(){return s})),n.d(t,"f",(function(){return i}));var c=10,r="0x6eaf1b33b8672c5dc40aB8f4bA3A0111723126c7",o="https://gateway.ipfs.io/ipfs",a="0.1.3",s="cake.eth",i=10},816:function(e,t,n){"use strict";t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:4;return"".concat(e.substring(0,t),"...").concat(e.substring(e.length-n))}},839:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return o})),n.d(t,"d",(function(){return a})),n.d(t,"e",(function(){return s})),n.d(t,"b",(function(){return i}));var c=n(35),r=function(){var e=Object(c.c)((function(e){return e.voting.proposals}));return Object.values(e)},o=function(e){return Object(c.c)((function(t){return t.voting.proposals[e]}))},a=function(e){var t=Object(c.c)((function(t){return t.voting.votes[e]}));return t?t.filter((function(e){return!0!==e._inValid})):[]},s=function(){return Object(c.c)((function(e){return e.voting.voteLoadingStatus}))},i=function(){return Object(c.c)((function(e){return e.voting.proposalLoadingStatus}))}},860:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return j}));var c=n(3),r=n(30),o=(n(1),n(188)),a=n(65),s=n(0),i=["proposalState"],b=["isCoreProposal"],l=function(e){var t=e.proposalState,n=Object(r.a)(e,i);return t===a.d.ACTIVE?Object(s.jsx)(o.h,Object(c.a)({},n)):t===a.d.PENDING?Object(s.jsx)(o.g,Object(c.a)({},n)):Object(s.jsx)(o.a,Object(c.a)({},n))},j=function(e){var t=e.isCoreProposal,n=Object(r.a)(e,b);return t?Object(s.jsx)(o.d,Object(c.a)({},n)):Object(s.jsx)(o.b,Object(c.a)({},n))}},867:function(e,t,n){"use strict";n.d(t,"b",(function(){return b})),n.d(t,"a",(function(){return l}));var c,r=n(3),o=n(5),a=(n(1),n(2)),s=n(6),i=n(0),b=s.e.div(c||(c=Object(o.a)(["\n  align-items: center;\n  border: 1px solid ",";\n  border-radius: 12px;\n  display: flex;\n  height: 64px;\n  justify-content: space-between;\n  margin-bottom: 24px;\n  padding: 0 16px;\n"])),(function(e){return e.theme.colors.cardBorder})),l=function(e){return Object(i.jsx)(a.m,Object(r.a)({mb:"24px",maxWidth:"320px"},e))}},897:function(e,t,n){"use strict";var c,r=n(5),o=n(6).e.div(c||(c=Object(r.a)(["\n  align-items: start;\n  display: grid;\n  grid-gap: 32px;\n  grid-template-columns: minmax(0, 1fr);\n\n  "," {\n    grid-template-columns: 1fr 332px;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg}));t.a=o},898:function(e,t,n){"use strict";n(1);var c=n(2),r=n(15),o=n(867),a=n(0);t.a=function(e){var t=e.total,n=e.cakeBalance,s=e.cakeVaultBalance,i=e.cakePoolBalance,b=e.poolsBalance,l=e.cakeBnbLpBalance,j=Object(r.b)().t;return Object(a.jsxs)(o.a,{mb:"0",children:[Object(a.jsx)(c.Xb,{as:"p",mb:"24px",fontSize:"14px",color:"textSubtle",children:j("Your voting power is determined by the amount of CAKE you held at the block detailed below. CAKE held in other places does not contribute to your voting power.")}),Object(a.jsx)(c.Xb,{color:"secondary",textTransform:"uppercase",mb:"4px",bold:!0,fontSize:"14px",children:j("Overview")}),Object(a.jsxs)(o.b,{children:[Object(a.jsx)(c.Xb,{color:"secondary",children:j("Your Voting Power")}),Object(a.jsx)(c.Xb,{bold:!0,fontSize:"20px",children:t.toFormat(3)})]}),Object(a.jsx)(c.Xb,{color:"secondary",textTransform:"uppercase",mb:"4px",bold:!0,fontSize:"14px",children:j("Your Cake Held Now")}),Object(a.jsxs)(c.U,{alignItems:"center",justifyContent:"space-between",mb:"4px",children:[Object(a.jsx)(c.Xb,{color:"textSubtle",fontSize:"16px",children:j("Wallet")}),Object(a.jsx)(c.Xb,{textAlign:"right",children:n.toFormat(3)})]}),Object(a.jsxs)(c.U,{alignItems:"center",justifyContent:"space-between",mb:"4px",children:[Object(a.jsx)(c.Xb,{color:"textSubtle",fontSize:"16px",children:j("Manual CAKE Pool")}),Object(a.jsx)(c.Xb,{textAlign:"right",children:i.toFormat(3)})]}),Object(a.jsxs)(c.U,{alignItems:"center",justifyContent:"space-between",mb:"4px",children:[Object(a.jsx)(c.Xb,{color:"textSubtle",fontSize:"16px",children:j("Auto CAKE Pool")}),Object(a.jsx)(c.Xb,{textAlign:"right",children:s.toFormat(3)})]}),Object(a.jsxs)(c.U,{alignItems:"center",justifyContent:"space-between",mb:"4px",children:[Object(a.jsx)(c.Xb,{color:"textSubtle",fontSize:"16px",children:j("Other Syrup Pools")}),Object(a.jsx)(c.Xb,{textAlign:"right",children:b.toFormat(3)})]}),Object(a.jsxs)(c.U,{alignItems:"center",justifyContent:"space-between",mb:"4px",children:[Object(a.jsx)(c.Xb,{color:"textSubtle",fontSize:"16px",children:j("CAKE BNB LP")}),Object(a.jsx)(c.Xb,{textAlign:"right",children:l.toFormat(3)})]})]})}},899:function(e,t,n){"use strict";var c=n(4),r=n.n(c),o=n(3),a=n(12),s=n(9),i=n(1),b=n(49),l=n(33),j=n(184),u=n(24),d=n(97),x=n(18),p=n.n(x),O=n(805),h={verificationHash:null,cakeBalance:l.d,cakeVaultBalance:l.d,cakePoolBalance:l.d,poolsBalance:l.d,cakeBnbLpBalance:l.d,total:l.d};t.a=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=Object(b.c)(),c=n.account,l=Object(i.useState)(h),x=Object(s.a)(l,2),f=x[0],m=x[1],v=Object(i.useState)(!!c),g=Object(s.a)(v,2),w=g[0],k=g[1];return Object(i.useEffect)((function(){c&&t&&function(){var n=Object(a.a)(r.a.mark((function n(){var a,s,i,b,l,x,h,f,v,g,w;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(k(!0),n.prev=1,n.t0=e,n.t0){n.next=7;break}return n.next=6,d.a.getBlockNumber();case 6:n.t0=n.sent;case 7:return a=n.t0,n.next=10,Object(j.b)(a);case 10:return s=n.sent,i=s.map((function(e){var t=e.contractAddress;return Object(u.a)(t)})),n.next=14,Object(O.g)(c,i,a);case 14:b=n.sent,l=b.cakeBalance,x=b.cakeBnbLpBalance,h=b.cakePoolBalance,f=b.total,v=b.poolsBalance,g=b.cakeVaultBalance,w=b.verificationHash,t&&m((function(e){return Object(o.a)(Object(o.a)({},e),{},{verificationHash:w,cakeBalance:new p.a(l),cakeBnbLpBalance:new p.a(x),cakePoolBalance:new p.a(h),poolsBalance:new p.a(v),cakeVaultBalance:new p.a(g),total:new p.a(f)})}));case 23:return n.prev=23,k(!1),n.finish(23);case 26:case"end":return n.stop()}}),n,null,[[1,,23,26]])})));return function(){return n.apply(this,arguments)}}()()}),[c,e,m,t,k]),Object(o.a)(Object(o.a)({},f),{},{isLoading:w})}},932:function(e,t,n){"use strict";var c,r,o,a=n(3),s=(n(1),n(939)),i=n.n(s),b=n(975),l=n.n(b),j=n(5),u=n(2),d=n(6),x=n(0),p=d.e.table(c||(c=Object(j.a)(["\n  margin-bottom: 32px;\n  margin-top: 32px;\n  width: 100%;\n\n  td,\n  th {\n    color: ",";\n    padding: 8px;\n  }\n"])),(function(e){return e.theme.colors.text})),O=d.e.div(r||(r=Object(j.a)(["\n  color: ",";\n  margin-bottom: 16px;\n  margin-top: 16px;\n\n  li {\n    margin-bottom: 8px;\n  }\n"])),(function(e){return e.theme.colors.text})),h=function(e){return Object(x.jsx)(u.W,Object(a.a)({as:"h4",scale:"lg",my:"16px"},e))},f={h1:h,h2:h,h3:h,h4:h,h5:h,h6:h,p:function(e){return Object(x.jsx)("p",{children:"Error  REACTMARKDOWN"})},table:p,ol:function(e){return Object(x.jsx)(O,Object(a.a)({as:"ol"},e))},ul:function(e){return Object(x.jsx)(O,Object(a.a)({as:"ul"},e))},pre:d.e.pre(o||(o=Object(j.a)(["\n  color: ",";\n  margin-bottom: 16px;\n  margin-top: 16px;\n  max-width: 100%;\n  overflow-x: auto;\n"])),(function(e){return e.theme.colors.text}))};t.a=function(e){return Object(x.jsx)(i.a,Object(a.a)({remarkPlugins:[l.a],components:f},e))}}}]);
//# sourceMappingURL=10.1fac8b21.chunk.js.map