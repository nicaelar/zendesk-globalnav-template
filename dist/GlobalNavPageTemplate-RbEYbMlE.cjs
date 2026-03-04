"use strict";const e=require("react/jsx-runtime"),x=require("react"),o=require("styled-components"),G=require("@zendeskgarden/react-theming"),n=require("./GlobalNavIcons-D5YqVduF.cjs"),C=require("@zendeskgarden/react-avatars"),R=o.div`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  width: 256px;
  background-color: white;
  border: 1px solid #d8dcde;
  border-radius: 8px;
  box-shadow: 0px 16px 24px 0px rgba(10, 13, 14, 0.16);
  padding: 4px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 2px;
`,L=o.button`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 12px;
  width: 100%;
  border: none;
  background-color: ${i=>i.$isActive?"#293239":"transparent"};
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.15s;
  font-family: 'SF Pro Text', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.154px;
  color: ${i=>i.$isActive?"white":"#293239"};
  text-align: left;

  &:hover {
    background-color: ${i=>i.$isActive?"#293239":"rgba(0, 0, 0, 0.04)"};
  }

  &:active {
    background-color: ${i=>i.$isActive?"#293239":"rgba(0, 0, 0, 0.08)"};
  }
`,H=o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
`,y=[{id:"support",name:"Support",icon:n.ProductSupportIcon},{id:"knowledge",name:"Knowledge",icon:n.ProductKnowledgeIcon},{id:"ai-agents",name:"AI agents",icon:n.ProductAIAgentsIcon},{id:"chat",name:"Chat",icon:n.ProductChatIcon},{id:"voice",name:"Voice",icon:n.ProductVoiceIcon},{id:"analytics",name:"Analytics",icon:n.ProductAnalyticsIcon},{id:"workforce-management",name:"Workforce management",icon:n.ProductWorkforceManagementIcon},{id:"quality-assurance",name:"Quality assurance",icon:n.ProductQualityAssuranceIcon},{id:"community",name:"Community",icon:n.ProductCommunityIcon},{id:"sales",name:"Sales",icon:n.ProductSalesIcon},{id:"admin-center",name:"Admin center",icon:n.ProductAdminCenterIcon}],B=({currentProduct:i="support",onSelectProduct:l,onClose:r})=>{const d=t=>{l?.(t),r?.()};return e.jsx(R,{children:y.map(t=>{const p=t.icon,h=t.id===i,j=h?"white":"#5C6970";return e.jsxs(L,{$isActive:h,onClick:()=>d(t.id),children:[e.jsx(H,{children:e.jsx(p,{size:20,color:j})}),e.jsx("span",{children:t.name})]},t.id)})})},D=o.header`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  background-color: #f8f9f9;
  width: 100%;
  height: 48px;
  position: relative;
  z-index: 10;
`,K=o.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,M=o.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding-right: 4px;
`,k=o.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,q=o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  width: 40px;
`,$=o.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.15s;

  &:hover {
    background-color: rgba(92, 105, 112, 0.08);
  }

  &:active {
    background-color: rgba(92, 105, 112, 0.16);
  }
`,E=o.span`
  font-family: 'SF Pro Text', sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: -0.154px;
  color: #293239;
`,O=o.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 6px 12px;
  border-radius: 8px;
  font-family: 'SF Pro Text', sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: -0.0004px;
  color: #293239;
`,W=o.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 320px;
  min-width: 240px;
  padding: 6px 12px;
  background-color: white;
  border: 1px solid #b0b8be;
  border-radius: 8px;
  font-family: 'SF Pro Text', sans-serif;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.154px;
  color: #5c6970;
  cursor: pointer;
  transition: all 0.15s;

  &:hover {
    border-color: #87929d;
  }

  &:focus-within {
    border-color: #1f73b7;
    outline: none;
  }
`,m=o.div`
  width: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`,v=o.div`
  width: 1px;
  height: 24px;
  background-color: #d8dcde;
`,Q=o.button`
  display: flex;
  align-items: center;
  gap: 8px;
  height: 32px;
  padding: 6px 12px;
  border: none;
  background-color: transparent;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.15s;
  font-family: 'SF Pro Text', sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: -0.0004px;
  color: #293239;

  &:hover {
    background-color: rgba(92, 105, 112, 0.08);
  }

  &:active {
    background-color: rgba(92, 105, 112, 0.16);
  }

  &:disabled {
    color: #848f99;
    cursor: not-allowed;
  }
`,S=o.button`
  display: flex;
  align-items: center;
  gap: 8px;
  height: 32px;
  padding: 6px 12px;
  border: none;
  background-color: transparent;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.15s;
  font-family: 'SF Pro Text', sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: -0.0004px;
  color: #293239;

  &:hover {
    background-color: rgba(92, 105, 112, 0.08);
  }

  &:active {
    background-color: rgba(92, 105, 112, 0.16);
  }

  &:disabled {
    color: #848f99;
    cursor: not-allowed;
    background-color: transparent;
  }
`,g=o.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  background-color: transparent;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.15s;
  padding: 0;
  position: relative;

  &:hover {
    background-color: rgba(92, 105, 112, 0.08);
  }

  &:active {
    background-color: rgba(92, 105, 112, 0.16);
  }

  &:disabled {
    cursor: not-allowed;
  }
`,V=o.div`
  position: absolute;
  top: -4px;
  right: -4px;
  width: 16px;
  height: 16px;
  background-color: #d93f4c;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'SF Pro Text', sans-serif;
  font-size: 10px;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.12px;
  color: white;
`;o.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;const N=({currentProduct:i="support",onProductChange:l})=>{const[r,d]=x.useState(!1),t=x.useRef(null),p=a=>{l?.(a)};x.useEffect(()=>{const a=I=>{t.current&&!t.current.contains(I.target)&&d(!1)};if(r)return document.addEventListener("mousedown",a),()=>document.removeEventListener("mousedown",a)},[r]);const h=y.find(a=>a.id===i)||y[0],j=i==="admin-center",w=i==="knowledge";return e.jsxs(D,{children:[e.jsxs(K,{children:[e.jsx(q,{children:e.jsx(n.ZendeskLogoIcon,{size:20})}),e.jsxs($,{ref:t,onClick:()=>d(!r),children:[e.jsx(E,{children:h.name}),e.jsx(n.ChevronDownIcon,{size:12}),r&&e.jsx(B,{currentProduct:i,onSelectProduct:p,onClose:()=>d(!1)})]})]}),e.jsx(M,{children:j?e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(m,{children:e.jsx(v,{})}),e.jsx(O,{children:"Camera obscura"})]}),e.jsxs(k,{children:[e.jsxs(W,{children:[e.jsx(n.MagnifyingGlassIcon,{size:16}),e.jsx("span",{children:"Search admin center"})]}),e.jsx(g,{children:e.jsx(n.RescueRingIcon,{size:20})}),e.jsx(C.Avatar,{size:"small",backgroundColor:"#f8f9f9",children:e.jsx(n.PersonIcon,{size:16,color:"#5C6970"})})]})]}):w?e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(m,{children:e.jsx(v,{})}),e.jsxs($,{children:[e.jsx("span",{style:{fontSize:"12px",fontWeight:600,lineHeight:"16px",letterSpacing:"-0.0004px",color:"#293239"},children:"Joe's Coffee"}),e.jsx(n.ChevronDownIcon,{size:12})]})]}),e.jsxs(k,{children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(S,{size:"small",children:"Create content"}),e.jsx(S,{size:"small",disabled:!0,children:"Help center"})]}),e.jsx(g,{children:e.jsx(n.RescueRingIcon,{size:20})}),e.jsx(C.Avatar,{size:"small",backgroundColor:"#f8f9f9",children:e.jsx(n.PersonIcon,{size:16,color:"#5C6970"})})]})]}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[e.jsx(m,{children:e.jsx(v,{})}),e.jsxs(Q,{children:[e.jsx(n.PlusIcon,{size:12}),e.jsx("span",{children:"Add"})]})]}),e.jsxs(k,{children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(g,{children:e.jsx(n.MagnifyingGlassIcon,{size:20})}),e.jsx(S,{size:"small",disabled:!0,children:"Conversations"}),e.jsx(g,{children:e.jsx(n.ProductChatIcon,{size:20})}),e.jsx(g,{children:e.jsx(n.ProductVoiceIcon,{size:20})})]}),e.jsx(m,{children:e.jsx(v,{})}),e.jsxs(g,{children:[e.jsx(n.BellIcon,{size:20}),e.jsx(V,{children:"1"})]}),e.jsx(C.Avatar,{size:"small",backgroundColor:"#f8f9f9",children:e.jsx(n.PersonIcon,{size:16,color:"#5C6970"})})]})]})})]})},J=o.div`
  display: flex;
  flex-direction: column;
  width: 240px;
  height: 100%;
  background-color: #f8f9f9;
  padding: 8px;
`,U=o.div`
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 12px 12px 12px 12px;
  width: 100%;
`,Z=o.h2`
  flex: 1;
  font-family: 'SF Pro Text', sans-serif;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.45px;
  color: #2f3941;
  margin: 0;
  padding: 4px 0;
`,X=o.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  background-color: transparent;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.15s;
  padding: 0;

  &:hover {
    background-color: rgba(92, 105, 112, 0.08);
  }

  &:active {
    background-color: rgba(92, 105, 112, 0.16);
  }
`,T=o.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding-bottom: 12px;
  width: 100%;
`,b=o.div`
  display: flex;
  align-items: center;
  height: 32px;
  padding: 0 8px 0 12px;
  border-radius: 8px;
  background-color: ${i=>i.$isCurrent?"#293239":"transparent"};
  cursor: pointer;
  transition: background-color 0.15s;

  &:hover {
    background-color: ${i=>i.$isCurrent?"#293239":"rgba(92, 105, 112, 0.08)"};
  }

  &:active {
    background-color: ${i=>i.$isCurrent?"#293239":"rgba(92, 105, 112, 0.16)"};
  }
`,s=o.p`
  flex: 1;
  font-family: 'SF Pro Text', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.154px;
  color: ${i=>i.$isCurrent?"white":"#2f3941"};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0;
`,u=o.div`
  display: flex;
  align-items: center;
  justify-center: center;
  min-width: 20px;
  height: 20px;
  padding: 2px 8px;
  background-color: rgba(92, 105, 112, 0.16);
  border-radius: 16px;
  font-family: 'SF Pro Text', sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: -0.0004px;
  color: #49545c;
  text-align: center;
`,Y=o.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,_=o.div`
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 4px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.15s;

  &:hover {
    background-color: rgba(92, 105, 112, 0.08);
  }

  &:active {
    background-color: rgba(92, 105, 112, 0.16);
  }
`,ee=o.div`
  display: flex;
  flex: 1;
  gap: 8px;
  align-items: center;
  padding: 12px 8px 12px 8px;
`,ne=o.p`
  flex: 1;
  font-family: 'SF Pro Text', sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: -0.0004px;
  color: #68737d;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0;
`,oe=o.div`
  flex: 1;
  height: 1px;
  background-color: #d8dcde;
`,ie=o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 100%;
`,f=o(b)`
  padding-left: ${i=>i.$depth*24+12}px;
`,F=()=>{const[i,l]=x.useState(!0);return e.jsxs(J,{children:[e.jsxs(U,{children:[e.jsx(Z,{children:"Knowledge"}),e.jsx(X,{children:e.jsx(n.PlusIcon,{size:20,color:"#5C6970"})})]}),e.jsx(T,{children:e.jsx(b,{$isCurrent:!0,children:e.jsx(s,{$isCurrent:!0,children:"Sources"})})}),e.jsxs(Y,{children:[e.jsxs(_,{onClick:()=>l(!i),children:[e.jsxs(ee,{children:[e.jsx(ne,{children:"Content"}),e.jsx(oe,{})]}),e.jsx(ie,{children:i?e.jsx(n.ChevronUpIcon,{size:16,color:"#5C6970"}):e.jsx(n.ChevronRightIcon,{size:16,color:"#5C6970"})})]}),i&&e.jsxs(T,{children:[e.jsxs(b,{children:[e.jsx(s,{children:"All content"}),e.jsx(u,{children:"24"})]}),e.jsxs(f,{$depth:0,children:[e.jsx(n.ChevronRightIcon,{size:16,color:"#5C6970"}),e.jsx(s,{style:{marginLeft:"8px"},children:"Joe's Coffee"}),e.jsx(u,{children:"24"})]}),e.jsxs(f,{$depth:1,children:[e.jsx(n.ChevronRightIcon,{size:16,color:"#5C6970"}),e.jsx(s,{style:{marginLeft:"8px"},children:"Getting Started"})]}),e.jsxs(f,{$depth:1,children:[e.jsx(n.ChevronRightIcon,{size:16,color:"#5C6970"}),e.jsx(s,{style:{marginLeft:"8px"},children:"Troubleshooting Guides"})]}),e.jsxs(f,{$depth:1,children:[e.jsx(n.ChevronRightIcon,{size:16,color:"#5C6970"}),e.jsx(s,{style:{marginLeft:"8px"},children:"Product FAQs"})]}),e.jsxs(f,{$depth:1,children:[e.jsx(n.ChevronRightIcon,{size:16,color:"#5C6970"}),e.jsx(s,{style:{marginLeft:"8px"},children:"Policies and Procedures"})]}),e.jsxs(f,{$depth:0,children:[e.jsx(n.ChevronRightIcon,{size:16,color:"#5C6970"}),e.jsx(s,{style:{marginLeft:"8px"},children:"Confluence"}),e.jsx(u,{children:"124"})]}),e.jsxs(b,{children:[e.jsx(s,{children:"Content blocks"}),e.jsx(u,{children:"0"})]}),e.jsxs(b,{children:[e.jsx(s,{children:"Procedures"}),e.jsx(u,{children:"12"})]}),e.jsxs(b,{children:[e.jsx(s,{children:"Media"}),e.jsx(u,{children:"0"})]})]})]})]})},te=o.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
  background-color: #f8f9f9;
  position: relative;
  isolation: isolate;
`,re=o.div`
  display: flex;
  flex: 1;
  width: 100%;
  z-index: 1;
  overflow: hidden;
`,se=o.div`
  display: flex;
`,ce=o.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 56px;
  height: 100%;
  padding: 12px 0;
  background-color: #f8f9f9;
  position: relative;
`,le=o.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 231px;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(92, 105, 112, 0.08));
  pointer-events: none;
`,ae=o.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  z-index: 1;
`,de=o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 48px;
`,xe=o.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  background-color: ${i=>i.$isActive?"#293239":"transparent"};
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s;
  padding: 0;

  &:hover {
    background-color: ${i=>i.$isActive?"#293239":"rgba(0, 0, 0, 0.08)"};
  }
`,pe=o.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  z-index: 1;
`,he=o.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  background-color: white;
  border-radius: 24px;
  cursor: pointer;
  transition: all 0.15s;
  padding: 0;
  box-shadow: 0px 4px 8px 0px rgba(10, 13, 14, 0.16);

  &:hover {
    background-color: rgba(92, 105, 112, 0.08);
  }

  &:active {
    background-color: rgba(92, 105, 112, 0.16);
  }
`,ge=o.main`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: white;
  border: 1px solid transparent;
  border-top-left-radius: 8px;
  box-shadow: 0px 0px 4px 0px rgba(10, 13, 14, 0.16);
  overflow: hidden;
`,ue=o.div`
  flex: 1;
  width: 100%;
  padding: 24px;
  overflow: auto;
`,fe=()=>{const[i,l]=x.useState(0),[r,d]=x.useState("support"),[t,p]=x.useState(!1),h=c=>{d(c),l(0),p(!1)},j=[{id:0,icon:n.HomeIcon,label:"Home"},{id:1,icon:n.InboxIcon,label:"Inbox"},{id:2,icon:n.BookContactsIcon,label:"Contacts"},{id:3,icon:n.BuildingIcon,label:"Organization"},{id:4,icon:n.ShapesIcon,label:"Custom Objects"},{id:5,icon:n.BarChartSquareIcon,label:"Analytics"},{id:6,icon:n.GearIcon,label:"Settings"}],w=[{id:0,icon:n.HomeIcon,label:"Home"},{id:1,icon:n.BuildingIcon,label:"Account"},{id:2,icon:n.PeopleIcon,label:"People"},{id:3,icon:n.PaperPlaneIcon,label:"Channels"},{id:4,icon:n.SparkleIcon,label:"AI"},{id:5,icon:n.MonitorIcon,label:"Workspaces"},{id:6,icon:n.FlowIcon,label:"Objects & rules"},{id:7,icon:n.AppsIcon,label:"Apps and integrations"}],a=[{id:0,icon:n.HomeIcon,label:"Home"},{id:1,icon:n.BookOpenIcon,label:"Knowledge"},{id:2,icon:n.BubbleCheckIcon,label:"Moderate content"},{id:3,icon:n.FoldersIcon,label:"Arrange content"},{id:4,icon:n.PaletteIcon,label:"Customize design"},{id:5,icon:n.PersonKeyIcon,label:"User permissions"},{id:6,icon:n.GearIcon,label:"Settings"}],I=r==="admin-center"?w:r==="knowledge"?a:j,z=r==="knowledge";return e.jsx(G.ThemeProvider,{children:e.jsxs(te,{children:[e.jsx(N,{currentProduct:r,onProductChange:h}),e.jsxs(re,{children:[e.jsxs(se,{children:[e.jsxs(ce,{children:[e.jsx(le,{}),e.jsx(ae,{children:I.map(c=>{const P=i===c.id,A=typeof c.icon=="function"?c.icon:null;return e.jsx(de,{children:e.jsx(xe,{$isActive:P,onClick:()=>l(c.id),"aria-label":c.label,children:A?e.jsx(A,{size:20,color:P?"white":"#5C6970"}):c.icon})},c.id)})}),e.jsx(pe,{children:z&&e.jsx(he,{onClick:()=>p(!t),"aria-label":t?"Collapse":"Expand",children:e.jsx(n.SidebarIcon,{size:20,color:"#5C6970"})})})]}),z&&t&&e.jsx(F,{})]}),e.jsx(ge,{children:e.jsxs(ue,{children:[e.jsx("h1",{children:"Content Area"}),e.jsx("p",{children:"This is where your page content will be displayed."})]})})]})]})})};exports.GlobalNavPageTemplate=fe;exports.KnowledgeSubnav=F;exports.ProductTrayDropdown=B;exports.TopBar=N;exports.products=y;
//# sourceMappingURL=GlobalNavPageTemplate-RbEYbMlE.cjs.map
