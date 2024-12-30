import{br as e,bs as je,bt as Ce,r,bu as Se,bv as ye,bw as we,bx as ae,by as be,bz as ve,bA as Te,bB as Ne,bC as ke,bD as Le,bE as Ae,bF as Ie,bG as Me}from"./vendor-731e06c7.js";import{S as Pe,E as Ee,A as qe,a as Be,b as Re,D as ze,c as $e}from"./fluentui-icons-f1d41e7a.js";import{S as x,I as Fe,P as Oe,B as F,T as re,a as Ge,b as He,c as Qe,D as De,d as Ve,e as Ue,C as se,f as Ke,g as We}from"./fluentui-react-5415e8fa.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))d(n);new MutationObserver(n=>{for(const c of n)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&d(u)}).observe(document,{childList:!0,subtree:!0});function i(n){const c={};return n.integrity&&(c.integrity=n.integrity),n.referrerPolicy&&(c.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?c.credentials="include":n.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function d(n){if(n.ep)return;n.ep=!0;const c=i(n);fetch(n.href,c)}})();const Je="_layout_1dkox_1",Xe="_header_1dkox_7",Ye="_headerContainer_1dkox_12",Ze="_headerTitleContainer_1dkox_20",et="_headerLogo_1dkox_28",tt="_headerTitle_1dkox_20",st="_headerRightText_1dkox_37",V={layout:Je,header:Xe,headerContainer:Ye,headerTitleContainer:Ze,headerLogo:et,headerTitle:tt,headerRightText:st},nt=()=>e.jsxs("div",{className:V.layout,children:[e.jsx("header",{className:V.header,role:"banner",children:e.jsx("div",{className:V.headerContainer,children:e.jsx(e.Fragment,{})})}),e.jsx(je,{})]}),ot="_container_ggo0d_1",at="_chatRoot_ggo0d_8",rt="_chatContainer_ggo0d_13",it="_chatEmptyState_ggo0d_21",ct="_chatEmptyStateTitle_ggo0d_31",lt="_chatEmptyStateSubtitle_ggo0d_38",dt="_chatMessageStream_ggo0d_54",ut="_chatMessageGpt_ggo0d_66",ht="_chatMessageGptMinWidth_ggo0d_73",gt="_chatInput_ggo0d_78",mt="_chatAnalysisPanel_ggo0d_91",pt="_chatSettingsSeparator_ggo0d_99",_t="_loadingLogo_ggo0d_105",xt="_commandsContainer_ggo0d_109",ft="_commandButton_ggo0d_114",l={container:ot,chatRoot:at,chatContainer:rt,chatEmptyState:it,chatEmptyStateTitle:ct,chatEmptyStateSubtitle:lt,chatMessageStream:dt,chatMessageGpt:ut,chatMessageGptMinWidth:ht,chatInput:gt,chatAnalysisPanel:mt,chatSettingsSeparator:pt,loadingLogo:_t,commandsContainer:xt,commandButton:ft};var y=(t=>(t.Hybrid="hybrid",t.Vectors="vectors",t.Text="text",t))(y||{});const jt="_answerContainer_qz1fg_1",Ct="_answerLogo_qz1fg_11",St="_answerText_qz1fg_15",yt="_selected_qz1fg_34",wt="_referenceMetadata_qz1fg_38",bt="_citationLearnMore_qz1fg_43",vt="_citation_qz1fg_43",Tt="_followupQuestionsList_qz1fg_65",Nt="_followupQuestionLearnMore_qz1fg_69",kt="_followupQuestion_qz1fg_65",Lt="_supContainer_qz1fg_88",At="_retryButton_qz1fg_117",It="_loadingdots_qz1fg_139",Mt="_loading_qz1fg_139",_={answerContainer:jt,answerLogo:Ct,answerText:St,selected:yt,referenceMetadata:wt,citationLearnMore:bt,citation:vt,followupQuestionsList:Tt,followupQuestionLearnMore:Nt,followupQuestion:kt,supContainer:Lt,retryButton:At,loadingdots:It,loading:Mt};function Pt(t,s,i){const d=[];let n=t.trim();if(s){let g=n.length;for(let h=n.length-1;h>=0&&n[h]!=="]";h--)if(n[h]==="["){g=h;break}n=n.substring(0,g)}return{answerHtml:n.split(/\[([^\]]+)\]/g).map((g,S)=>{if(S%2===0)return g;{let h;return d.indexOf(g)!==-1?h=d.indexOf(g)+1:(d.push(g),h=d.length),Ce(e.jsx("a",{className:"supContainer",title:g,children:e.jsx("sup",{children:h})}))}}).join(""),citations:d}}const ie=()=>e.jsx(Pe,{primaryFill:"rgba(115, 118, 225, 1)","aria-hidden":"true","aria-label":"Answer logo"}),ne=({answer:t,isSelected:s,isStreaming:i,onCitationClicked:d,onThoughtProcessClicked:n,onSupportingContentClicked:c,onFollowupQuestionClicked:u,showFollowupQuestions:g})=>{const S=t.context.followup_questions,h=t.message.content,m=r.useMemo(()=>Pt(h,i),[t]),v=Se.sanitize(m.answerHtml);return e.jsxs(x,{className:`${_.answerContainer} ${s&&_.selected}`,verticalAlign:"space-between",children:[e.jsx(x.Item,{children:e.jsxs(x,{horizontal:!0,horizontalAlign:"space-between",children:[e.jsx(ie,{}),e.jsx("div",{children:e.jsx(Fe,{style:{color:"black"},iconProps:{iconName:"Lightbulb"},title:"Show thought process",ariaLabel:"Show thought process",onClick:()=>n(),disabled:!t.context.thoughts?.length})})]})}),e.jsx(x.Item,{grow:!0,children:e.jsx("div",{className:_.answerText,dangerouslySetInnerHTML:{__html:v}})}),!!m.citations.length&&e.jsx(x.Item,{children:e.jsxs(x,{horizontal:!0,wrap:!0,tokens:{childrenGap:5},children:[e.jsx("span",{className:_.citationLearnMore,children:"References:"}),e.jsx("ol",{children:m.citations.map((p,k)=>{const f=t.context.data_points[p];return f?e.jsxs("li",{children:[e.jsx("h4",{children:f.name}),e.jsxs("p",{className:_.referenceMetadata,children:["Brand: ",f.brand]}),e.jsxs("p",{className:_.referenceMetadata,children:["Price: ",f.price]}),e.jsx("p",{children:f.description})]},p):null})})]})}),!!S?.length&&g&&u&&e.jsx(x.Item,{children:e.jsxs(x,{horizontal:!0,wrap:!0,className:`${m.citations.length?_.followupQuestionsList:""}`,tokens:{childrenGap:6},children:[e.jsx("span",{className:_.followupQuestionLearnMore,children:"Follow-up questions:"}),S.map((p,k)=>e.jsx("a",{className:_.followupQuestion,title:p,onClick:()=>u(p),children:`${p}`},k))]})})]})},Et=()=>{const t=ye({from:{opacity:0},to:{opacity:1}});return e.jsx(we.div,{style:{...t},children:e.jsxs(x,{className:_.answerContainer,verticalAlign:"space-between",children:[e.jsx(ie,{}),e.jsx(x.Item,{grow:!0,children:e.jsxs("p",{className:_.answerText,children:["Generating answer",e.jsx("span",{className:_.loadingdots})]})})]})})},qt=({error:t,onRetry:s})=>e.jsxs(x,{className:_.answerContainer,verticalAlign:"space-between",children:[e.jsx(Ee,{"aria-hidden":"true","aria-label":"Error icon",primaryFill:"red"}),e.jsx(x.Item,{grow:!0,children:e.jsx("p",{className:_.answerText,children:t})}),e.jsx(Oe,{className:_.retryButton,onClick:s,text:"Retry"})]}),Bt="_questionInputContainer_hiipw_1",Rt="_questionInputTextArea_hiipw_12",zt="_questionInputButtonsContainer_hiipw_17",U={questionInputContainer:Bt,questionInputTextArea:Rt,questionInputButtonsContainer:zt},$t=({onSend:t,disabled:s,placeholder:i,clearOnSend:d,initQuestion:n})=>{const[c,u]=r.useState("");r.useEffect(()=>{n&&u(n)},[n]);const g=()=>{s||!c.trim()||(t(c),d&&u(""))},S=v=>{v.key==="Enter"&&!v.shiftKey&&(v.preventDefault(),g())},h=()=>{console.log("Add attachment")},m=(v,p)=>{p?p.length<=1e3&&u(p):u("")};return e.jsxs(x,{horizontal:!0,className:U.questionInputContainer,children:[e.jsx(F,{size:"large",icon:e.jsx(qe,{primaryFill:"rgb(137, 139, 173)"}),onClick:g}),e.jsx(re,{className:U.questionInputTextArea,placeholder:i,multiline:!0,resizable:!1,borderless:!0,value:c,onChange:m,onKeyDown:S}),e.jsx("div",{className:U.questionInputButtonsContainer,children:e.jsx(Ge,{content:"Ask question button",relationship:"label",children:e.jsx(F,{size:"large",icon:e.jsx(Be,{primaryFill:"rgb(228, 229, 238)"}),onClick:h})})})]})},Ft="_examplesNavList_bnsga_1",Ot="_example_bnsga_1",Gt="_exampleText_bnsga_29",K={examplesNavList:Ft,example:Ot,exampleText:Gt},Ht=({text:t,value:s,onClick:i})=>e.jsx("div",{className:K.example,onClick:()=>i(s),children:e.jsx("p",{className:K.exampleText,children:t})}),Qt=["Start Trading","learnig","help","career","help","market Update","Companies and asset","Emergency Center"],Dt=({onExampleClicked:t})=>e.jsx("ul",{className:K.examplesNavList,children:Qt.map((s,i)=>e.jsx("li",{children:e.jsx(Ht,{text:s,value:s,onClick:t})},i))}),Vt="_container_1p3pb_1",Ut="_message_1p3pb_9",oe={container:Vt,message:Ut},$=({message:t})=>e.jsx("div",{className:oe.container,children:e.jsx("div",{className:oe.message,children:t})}),Kt="_thoughtProcess_1ooqd_1",Wt="_tList_1ooqd_8",Jt="_tListItem_1ooqd_14",Xt="_tStep_1ooqd_40",Yt="_tCodeBlock_1ooqd_47",Zt="_tProp_1ooqd_51",es="_citationImg_1ooqd_60",q={thoughtProcess:Kt,tList:Wt,tListItem:Jt,tStep:Xt,tCodeBlock:Yt,tProp:Zt,citationImg:es};var N=(t=>(t.ThoughtProcessTab="thoughtProcess",t.SupportingContentTab="supportingContent",t.CitationTab="citation",t))(N||{});ae.registerLanguage("json",be);const ts=({thoughts:t})=>e.jsx("ul",{className:q.tList,children:t.map((s,i)=>e.jsxs("li",{className:q.tListItem,children:[e.jsx("div",{className:q.tStep,children:s.title}),e.jsx(x,{horizontal:!0,tokens:{childrenGap:5},children:s.props&&(Object.keys(s.props)||[]).map(d=>e.jsxs("span",{className:q.tProp,children:[d,": ",JSON.stringify(s.props?.[d])]}))}),Array.isArray(s.description)?e.jsx(ae,{language:"json",wrapLongLines:!0,className:q.tCodeBlock,style:ve,children:JSON.stringify(s.description,null,2)}):e.jsx("div",{children:s.description})]},i))});const ss={disabled:!0,style:{color:"grey"}},ns=({answer:t,activeTab:s,activeCitation:i,citationHeight:d,className:n,onActiveTabChanged:c})=>{const u=!t.context.thoughts;t.context.data_points;const[g,S]=r.useState(""),h=async()=>{if(i){const m=i.indexOf("#")?i.split("#")[1]:"",p=await(await fetch(i,{method:"GET"})).blob();let k=URL.createObjectURL(p);m&&(k+="#"+m),S(k)}};return r.useEffect(()=>{h()},[]),e.jsx(He,{className:n,selectedKey:s,onLinkClick:m=>m&&c(m.props.itemKey),children:e.jsx(Qe,{itemKey:N.ThoughtProcessTab,headerText:"Thought process",headerButtonProps:u?ss:void 0,children:e.jsx(ts,{thoughts:t.context.thoughts||[]})})})},os="_container_cfwv2_1",as={container:os},rs=({className:t,onClick:s})=>e.jsx("div",{className:`${as.container} ${t??""}`,children:e.jsx(F,{icon:e.jsx(Re,{}),onClick:s,children:"Developer settings"})}),is="_container_cfwv2_1",cs={container:is},ls=({className:t,disabled:s,onClick:i})=>e.jsx("div",{className:`${cs.container} ${t??""}`,children:e.jsx(F,{icon:e.jsx(ze,{}),disabled:s,onClick:i,children:"Clear chat"})}),ds="_container_1pzrp_1",us={container:ds},hs=({updateRetrievalMode:t})=>{const[s,i]=r.useState(y.Hybrid),d=(n,c)=>{i(c?.data||y.Hybrid),t(c?.data||y.Hybrid)};return e.jsx(x,{className:us.container,tokens:{childrenGap:10},children:e.jsx(De,{label:"Retrieval mode",options:[{key:"hybrid",text:"Vectors + Text (Hybrid)",selected:s==y.Hybrid,data:y.Hybrid},{key:"vectors",text:"Vectors",selected:s==y.Vectors,data:y.Vectors},{key:"text",text:"Text",selected:s==y.Text,data:y.Text}],required:!0,onChange:d})})},gs=()=>{const[t,s]=r.useState(!1),[i,d]=r.useState(""),[n,c]=r.useState(.3),[u,g]=r.useState(3),[S,h]=r.useState(y.Hybrid),[m,v]=r.useState(!0),[p,k]=r.useState(!0),f=r.useRef(""),O=r.useRef(null),[B,R]=r.useState(!1),[W,G]=r.useState(!1),[z,H]=r.useState(),[J,Q]=r.useState(),[I,L]=r.useState(void 0),[M,X]=r.useState(0),[w,D]=r.useState([]),[Y,Z]=r.useState([]),[ee,_s]=r.useState("morning"),[ce,xs]=r.useState("emmanuel"),le=async(o,a,j)=>{let A="",b={context:{data_points:{},followup_questions:null,thoughts:[]},message:{content:"",role:"assistant"}};const T=C=>new Promise(xe=>{setTimeout(()=>{A+=C;const fe={...b,message:{content:A,role:b.message.role}};Z([...a,[o,fe]]),xe(null)},33)});try{G(!0);for await(const C of j)C.context&&(b.context={...b.context,...C.context}),C.delta&&C.delta.role&&(b.message.role=C.delta.role),C.delta&&C.delta.content&&(R(!1),await T(C.delta.content))}finally{G(!1)}return b.message.content=A,b},P=async o=>{f.current=o,z&&H(void 0),R(!0),Q(void 0),L(void 0);try{const j=[...w.flatMap(T=>[{content:T[0],role:"user"},{content:T[1].message.content,role:"assistant"}]),{content:o,role:"user"}],A={context:{overrides:{use_advanced_flow:m,top:u,retrieval_mode:S,prompt_template:i.length===0?void 0:i,temperature:n}},sessionState:w.length?w[w.length-1][1].sessionState:null},b=new Te("/chat");if(p){const T=await b.getStreamedCompletion(j,A),C=await le(o,w,T);D([...w,[o,C]])}else{const T=await b.getCompletion(j,A);D([...w,[o,T]])}}catch(a){H(a)}finally{R(!1)}},de=()=>{f.current="",z&&H(void 0),Q(void 0),L(void 0),D([]),Z([]),R(!1),G(!1)};r.useEffect(()=>O.current?.scrollIntoView({behavior:"smooth"}),[B]),r.useEffect(()=>O.current?.scrollIntoView({behavior:"auto"}),[Y]);const ue=(o,a)=>{d(a||"")},he=(o,a,j)=>{c(o)},ge=(o,a)=>{g(parseInt(a||"3"))},me=(o,a)=>{v(!!a)},pe=(o,a)=>{k(!!a)},_e=o=>{P(o)},te=(o,a)=>{J===o&&I===N.CitationTab&&M===a?L(void 0):(Q(o),L(N.CitationTab)),X(a)},E=(o,a)=>{L(I===o&&M===a?void 0:o),X(a)};return e.jsxs("div",{className:l.container,children:[e.jsxs("div",{className:l.commandsContainer,children:[e.jsx(ls,{className:l.commandButton,onClick:de,disabled:!f.current||B}),e.jsx(rs,{className:l.commandButton,onClick:()=>s(!t)})]}),e.jsxs("div",{className:l.chatRoot,children:[e.jsxs("div",{className:l.chatContainer,children:[f.current?e.jsxs("div",{className:l.chatMessageStream,children:[W&&Y.map((o,a)=>e.jsxs("div",{children:[e.jsx($,{message:o[0]}),e.jsx("div",{className:l.chatMessageGpt,children:e.jsx(ne,{isStreaming:!0,answer:o[1],isSelected:!1,onCitationClicked:j=>te(j,a),onThoughtProcessClicked:()=>E(N.ThoughtProcessTab,a),onSupportingContentClicked:()=>E(N.SupportingContentTab,a),onFollowupQuestionClicked:j=>P(j)},a)})]},a)),!W&&w.map((o,a)=>e.jsxs("div",{children:[e.jsx($,{message:o[0]}),e.jsx("div",{className:l.chatMessageGpt,children:e.jsx(ne,{isStreaming:!1,answer:o[1],isSelected:M===a&&I!==void 0,onCitationClicked:j=>te(j,a),onThoughtProcessClicked:()=>E(N.ThoughtProcessTab,a),onSupportingContentClicked:()=>E(N.SupportingContentTab,a),onFollowupQuestionClicked:j=>P(j)},a)})]},a)),B&&e.jsxs(e.Fragment,{children:[e.jsx($,{message:f.current}),e.jsx("div",{className:l.chatMessageGptMinWidth,children:e.jsx(Et,{})})]}),z?e.jsxs(e.Fragment,{children:[e.jsx($,{message:f.current}),e.jsx("div",{className:l.chatMessageGptMinWidth,children:e.jsx(qt,{error:z.toString(),onRetry:()=>P(f.current)})})]}):null,e.jsx("div",{ref:O})]}):e.jsxs("div",{className:l.chatEmptyState,children:[e.jsx($e,{fontSize:"120px",primaryFill:"rgba(115, 118, 225, 1)","aria-hidden":"true","aria-label":"Chat logo"}),e.jsxs("h1",{className:l.chatEmptyStateTitle,children:["  Good ",ee.charAt(0).toUpperCase()+ee.slice(1)," ",ce," "]}),e.jsx(Dt,{onExampleClicked:_e})]}),e.jsx("div",{className:l.chatInput,children:e.jsx($t,{clearOnSend:!0,placeholder:"ask me any question (e.g. how do i start trading with GENiE?",disabled:B,onSend:o=>P(o)})})]}),w.length>0&&I&&e.jsx(ns,{className:l.chatAnalysisPanel,activeCitation:J,onActiveTabChanged:o=>E(o,M),citationHeight:"810px",answer:w[M][1],activeTab:I}),e.jsxs(Ve,{headerText:"Configure answer generation",isOpen:t,isBlocking:!1,onDismiss:()=>s(!1),closeButtonAriaLabel:"Close",onRenderFooterContent:()=>e.jsx(Ue,{onClick:()=>s(!1),children:"Close"}),isFooterAtBottom:!0,children:[e.jsx(se,{className:l.chatSettingsSeparator,checked:m,label:"Use advanced flow with query rewriting and filter formulation. Not compatible with Ollama models.",onChange:me}),e.jsx("h3",{children:"Settings for database search:"}),e.jsx(Ke,{className:l.chatSettingsSeparator,label:"Retrieve this many matching rows:",min:1,max:50,defaultValue:u.toString(),onChange:ge}),e.jsx(hs,{updateRetrievalMode:o=>h(o)}),e.jsx("h3",{children:"Settings for final chat completion:"}),e.jsx(re,{className:l.chatSettingsSeparator,defaultValue:i,label:"Override prompt template",multiline:!0,autoAdjustHeight:!0,onChange:ue}),e.jsx(We,{className:l.chatSettingsSeparator,label:"Temperature",min:0,max:1,step:.1,defaultValue:n,onChange:he,showValue:!0,snapToStep:!0}),e.jsx(se,{className:l.chatSettingsSeparator,checked:p,label:"Stream chat completion responses",onChange:pe})]})]})]})};var ms=e.jsx(nt,{});Ne();const ps=ke([{path:"/",element:ms,children:[{index:!0,element:e.jsx(gs,{})},{path:"*",lazy:()=>Me(()=>import("./NoPage-9637d5f9.js"),["assets/NoPage-9637d5f9.js","assets/vendor-731e06c7.js","assets/fluentui-react-5415e8fa.js"])}]}]);Le.createRoot(document.getElementById("root")).render(e.jsx(Ae.StrictMode,{children:e.jsx(Ie,{router:ps})}));
//# sourceMappingURL=index-0ccb9fa1.js.map