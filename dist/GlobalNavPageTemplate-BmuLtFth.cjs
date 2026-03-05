"use strict";const e=require("react/jsx-runtime"),b=require("react"),o=require("styled-components"),de=require("@zendeskgarden/react-theming"),v=require("@zendeskgarden/react-avatars"),n=require("./GlobalNavIcons-DfAm9O78.cjs"),u=require("@zendeskgarden/react-typography"),xe=o.div`
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
`,pe=o.button`
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
`,he=o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
`,B=[{id:"support",name:"Support",icon:n.ProductSupportIcon},{id:"knowledge",name:"Knowledge",icon:n.ProductKnowledgeIcon},{id:"ai-agents",name:"AI agents",icon:n.ProductAIAgentsIcon},{id:"chat",name:"Chat",icon:n.ProductChatIcon},{id:"voice",name:"Voice",icon:n.ProductVoiceIcon},{id:"analytics",name:"Analytics",icon:n.ProductAnalyticsIcon},{id:"workforce-management",name:"Workforce management",icon:n.ProductWorkforceManagementIcon},{id:"quality-assurance",name:"Quality assurance",icon:n.ProductQualityAssuranceIcon},{id:"community",name:"Community",icon:n.ProductCommunityIcon},{id:"sales",name:"Sales",icon:n.ProductSalesIcon},{id:"admin-center",name:"Admin center",icon:n.ProductAdminCenterIcon}],E=({currentProduct:i="support",onSelectProduct:p,onClose:s})=>{const h=r=>{p?.(r),s?.()};return e.jsx(xe,{children:B.map(r=>{const j=r.icon,t=r.id===i,m=t?"white":"#5C6970";return e.jsxs(pe,{$isActive:t,onClick:()=>h(r.id),children:[e.jsx(he,{children:e.jsx(j,{size:20,color:m})}),e.jsx("span",{children:r.name})]},r.id)})})},ge=o.header`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  background-color: #f8f9f9;
  width: 100%;
  height: 48px;
  position: relative;
  z-index: 10;
`,ue=o.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,je=o.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding-right: 4px;
`,C=o.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,be=o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  width: 40px;
`,G=o.div`
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
`,fe=o.span`
  font-family: 'SF Pro Text', sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: -0.154px;
  color: #293239;
`,L=o.div`
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
`,T=o.div`
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
`,A=o.div`
  width: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`,z=o.div`
  width: 1px;
  height: 24px;
  background-color: #d8dcde;
`,me=o.button`
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
`,D=o.button`
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
`,f=o.button`
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
`,ve=o.div`
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
`;const X=({currentProduct:i="support",onProductChange:p})=>{const[s,h]=b.useState(!1),r=b.useRef(null),j=w=>{p?.(w)};b.useEffect(()=>{const w=le=>{r.current&&!r.current.contains(le.target)&&h(!1)};if(s)return document.addEventListener("mousedown",w),()=>document.removeEventListener("mousedown",w)},[s]);const t=B.find(w=>w.id===i)||B[0],m=i==="admin-center",S=i==="knowledge",x=i==="ai-agents",M=i==="workforce-management",P=i==="quality-assurance",ce=i==="analytics";return e.jsxs(ge,{children:[e.jsxs(ue,{children:[e.jsx(be,{children:e.jsx(n.ZendeskLogoIcon,{size:20})}),e.jsxs(G,{ref:r,onClick:()=>h(!s),children:[e.jsx(fe,{children:t.name}),e.jsx(n.ChevronDownIcon,{size:12}),s&&e.jsx(E,{currentProduct:i,onSelectProduct:j,onClose:()=>h(!1)})]})]}),e.jsx(je,{children:m?e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(A,{children:e.jsx(z,{})}),e.jsx(L,{children:"Camera obscura"})]}),e.jsxs(C,{children:[e.jsxs(T,{children:[e.jsx(n.MagnifyingGlassIcon,{size:16}),e.jsx("span",{children:"Search admin center"})]}),e.jsx(f,{children:e.jsx(n.RescueRingIcon,{size:20})}),e.jsx(v.Avatar,{size:"small",backgroundColor:"#f8f9f9",children:e.jsx(n.PersonIcon,{size:16,color:"#5C6970"})})]})]}):S?e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(A,{children:e.jsx(z,{})}),e.jsxs(G,{children:[e.jsx("span",{style:{fontSize:"12px",fontWeight:600,lineHeight:"16px",letterSpacing:"-0.0004px",color:"#293239"},children:"Joe's Coffee"}),e.jsx(n.ChevronDownIcon,{size:12})]})]}),e.jsxs(C,{children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(D,{size:"small",children:"Create content"}),e.jsx(D,{size:"small",disabled:!0,children:"Help center"})]}),e.jsx(f,{children:e.jsx(n.RescueRingIcon,{size:20})}),e.jsx(v.Avatar,{size:"small",backgroundColor:"#f8f9f9",children:e.jsx(n.PersonIcon,{size:16,color:"#5C6970"})})]})]}):x?e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(A,{children:e.jsx(z,{})}),e.jsx(L,{children:"Camera obscura"})]}),e.jsxs(C,{children:[e.jsxs(G,{children:[e.jsx("span",{style:{fontSize:"12px",fontWeight:600,lineHeight:"16px",letterSpacing:"-0.0004px",color:"#293239"},children:"Test bot"}),e.jsx(n.ChevronDownIcon,{size:12})]}),e.jsx(f,{children:e.jsx(n.RescueRingIcon,{size:20})}),e.jsx(v.Avatar,{size:"small",backgroundColor:"#f8f9f9",children:e.jsx(n.PersonIcon,{size:16,color:"#5C6970"})})]})]}):M?e.jsxs(e.Fragment,{children:[e.jsx("div",{}),e.jsxs(C,{children:[e.jsxs(T,{children:[e.jsx(n.MagnifyingGlassIcon,{size:16}),e.jsx("span",{children:"Search"})]}),e.jsx(f,{children:e.jsx(n.EarthIcon,{size:20})}),e.jsx(v.Avatar,{size:"small",backgroundColor:"#f8f9f9",children:e.jsx(n.PersonIcon,{size:16,color:"#5C6970"})})]})]}):P?e.jsxs(e.Fragment,{children:[e.jsx("div",{}),e.jsxs(C,{children:[e.jsxs(T,{children:[e.jsx(n.MagnifyingGlassIcon,{size:16}),e.jsx("span",{children:"Search"})]}),e.jsx(v.Avatar,{size:"small",backgroundColor:"#f8f9f9",children:e.jsx(n.PersonIcon,{size:16,color:"#5C6970"})})]})]}):ce?e.jsxs(e.Fragment,{children:[e.jsx("div",{}),e.jsxs(C,{children:[e.jsxs(T,{children:[e.jsx(n.MagnifyingGlassIcon,{size:16}),e.jsx("span",{children:"Search"})]}),e.jsx(v.Avatar,{size:"small",backgroundColor:"#f8f9f9",children:e.jsx(n.PersonIcon,{size:16,color:"#5C6970"})})]})]}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[e.jsx(A,{children:e.jsx(z,{})}),e.jsxs(me,{children:[e.jsx(n.PlusIcon,{size:12}),e.jsx("span",{children:"Add"})]})]}),e.jsxs(C,{children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(f,{children:e.jsx(n.MagnifyingGlassIcon,{size:20})}),e.jsx(D,{size:"small",disabled:!0,children:"Conversations"}),e.jsx(f,{children:e.jsx(n.ProductChatIcon,{size:20})}),e.jsx(f,{children:e.jsx(n.ProductVoiceIcon,{size:20})})]}),e.jsx(A,{children:e.jsx(z,{})}),e.jsxs(f,{children:[e.jsx(n.BellIcon,{size:20}),e.jsx(ve,{children:"1"})]}),e.jsx(f,{children:e.jsx(n.RocketIcon,{size:20})}),e.jsx(v.Avatar,{size:"small",backgroundColor:"#f8f9f9",children:e.jsx(n.PersonIcon,{size:16,color:"#5C6970"})})]})]})})]})},Ce=o.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 56px;
  height: 100%;
  padding: 12px 0;
  background-color: #f8f9f9;
  position: relative;
`,we=o.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 231px;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(92, 105, 112, 0.08));
  pointer-events: none;
`,ye=o.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  z-index: 1;
`,Ie=o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 48px;
`,ke=o.button`
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
`,Se=o.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  z-index: 1;
`,Ae=o.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 56px;
  height: 48px;
  padding: 0 16px;
`,ze=o.div`
  width: 23px;
  height: 1px;
  background-color: #d8dcde;
`,$e=o.button`
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
`,Me=[{id:0,icon:n.HomeIcon,label:"Home"},{id:1,icon:n.InboxIcon,label:"Inbox"},{id:2,icon:n.BookContactsIcon,label:"Contacts"},{id:3,icon:n.BuildingIcon,label:"Organization"},{id:4,icon:n.ShapesIcon,label:"Custom Objects"},{id:5,icon:n.BarChartSquareIcon,label:"Analytics"},{id:6,icon:n.GearIcon,label:"Settings"}],Pe=[{id:0,icon:n.HomeIcon,label:"Home"},{id:1,icon:n.BuildingIcon,label:"Account"},{id:2,icon:n.PeopleIcon,label:"People"},{id:3,icon:n.PaperPlaneIcon,label:"Channels"},{id:4,icon:n.SparkleIcon,label:"AI"},{id:5,icon:n.MonitorIcon,label:"Workspaces"},{id:6,icon:n.FlowIcon,label:"Objects & rules"},{id:7,icon:n.AppsIcon,label:"Apps and integrations"}],Te=[{id:0,icon:n.HomeIcon,label:"Home"},{id:1,icon:n.BookOpenIcon,label:"Knowledge"},{id:2,icon:n.BubbleCheckIcon,label:"Moderate content"},{id:3,icon:n.FoldersIcon,label:"Arrange content"},{id:4,icon:n.PaletteIcon,label:"Customize design"},{id:5,icon:n.PersonKeyIcon,label:"User permissions"},{id:6,icon:n.GearIcon,label:"Settings"}],Be=[{id:0,icon:n.BarChartSquareIcon,label:"Analytics"},{id:1,icon:n.NotePencilIcon,label:"Content"},{id:2,icon:n.BubblesIcon,label:"Conversations"},{id:3,icon:n.GearIcon,label:"Settings"},{id:4,icon:null,label:"separator"},{id:5,icon:n.WrenchIcon,label:"AI agent management"},{id:6,icon:n.PersonKeyIcon,label:"Permissions"},{id:7,icon:n.DatabaseIcon,label:"Database"},{id:8,icon:n.SquareGridCircleIcon,label:"Apps"},{id:9,icon:n.PlugIcon,label:"Integrations"}],Ge=[{id:0,icon:n.LineGraphSquareIcon,label:"Real-time monitoring"},{id:1,icon:n.LayoutGridIcon,label:"Dashboard"},{id:2,icon:n.BarChartSquareIcon,label:"Reports"},{id:3,icon:n.DatabaseIcon,label:"Data"},{id:4,icon:n.CloudArrowDownIcon,label:"Export"},{id:5,icon:n.GearIcon,label:"Settings"}],De=[{id:0,icon:n.LayoutGridIcon,label:"Dashboard"},{id:1,icon:n.BubblesIcon,label:"Conversations"},{id:2,icon:n.CheckSquareIcon,label:"Reviews"},{id:3,icon:n.InboxIcon,label:"Inbox"},{id:4,icon:n.GraduateCapIcon,label:"Training"}],Fe=[{id:0,icon:n.LineGraphSquareIcon,label:"Real-time monitoring"},{id:1,icon:n.BarChartSquareIcon,label:"Analytics"},{id:2,icon:n.CloudSunIcon,label:"Forecasting"},{id:3,icon:n.CalendarIcon,label:"Scheduling"},{id:4,icon:n.PeopleIcon,label:"Team"},{id:5,icon:n.GearIcon,label:"Settings"}],Q=({currentProduct:i,activeNavItem:p,setActiveNavItem:s,isSubnavExpanded:h,setIsSubnavExpanded:r})=>{const j=i==="admin-center"?Pe:i==="knowledge"?Te:i==="ai-agents"?Be:i==="analytics"?Ge:i==="quality-assurance"?De:i==="workforce-management"?Fe:Me,S=i==="knowledge"||i==="ai-agents";return e.jsxs(Ce,{children:[e.jsx(we,{}),e.jsx(ye,{children:j.map(x=>{if(x.label==="separator")return e.jsx(Ae,{children:e.jsx(ze,{})},x.id);const M=p===x.id,P=typeof x.icon=="function"?x.icon:null;return e.jsx(Ie,{children:e.jsx(ke,{$isActive:M,onClick:()=>s(x.id),"aria-label":x.label,children:P?e.jsx(P,{size:20,color:M?"white":"#5C6970"}):x.icon})},x.id)})}),e.jsx(Se,{children:S&&e.jsx($e,{onClick:()=>r(!h),"aria-label":h?"Collapse":"Expand",children:e.jsx(n.SidebarIcon,{size:20,color:"#5C6970"})})})]})},Le=o.div`
  display: flex;
  flex-direction: column;
  width: 240px;
  height: 100%;
  background-color: #f8f9f9;
  padding: 8px;
`,Ne=o.div`
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 12px 12px 12px 12px;
  width: 100%;
`,Re=o.h2`
  flex: 1;
  font-family: 'SF Pro Text', sans-serif;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.45px;
  color: #2f3941;
  margin: 0;
  padding: 4px 0;
`,qe=o.button`
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
`,N=o.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding-bottom: 12px;
  width: 100%;
`,k=o.div`
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
`,g=o.p`
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
`,y=o.div`
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
`,Ve=o.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,Ke=o.div`
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
`,He=o.div`
  display: flex;
  flex: 1;
  gap: 8px;
  align-items: center;
  padding: 12px 8px 12px 8px;
`,We=o.p`
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
`,Ee=o.div`
  flex: 1;
  height: 1px;
  background-color: #d8dcde;
`,Xe=o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 100%;
`,I=o(k)`
  padding-left: ${i=>i.$depth*24+12}px;
`,O=()=>{const[i,p]=b.useState(!0);return e.jsxs(Le,{children:[e.jsxs(Ne,{children:[e.jsx(Re,{children:"Knowledge"}),e.jsx(qe,{children:e.jsx(n.PlusIcon,{size:20,color:"#5C6970"})})]}),e.jsx(N,{children:e.jsx(k,{$isCurrent:!0,children:e.jsx(g,{$isCurrent:!0,children:"Sources"})})}),e.jsxs(Ve,{children:[e.jsxs(Ke,{onClick:()=>p(!i),children:[e.jsxs(He,{children:[e.jsx(We,{children:"Content"}),e.jsx(Ee,{})]}),e.jsx(Xe,{children:i?e.jsx(n.ChevronUpIcon,{size:16,color:"#5C6970"}):e.jsx(n.ChevronRightIcon,{size:16,color:"#5C6970"})})]}),i&&e.jsxs(N,{children:[e.jsxs(k,{children:[e.jsx(g,{children:"All content"}),e.jsx(y,{children:"24"})]}),e.jsxs(I,{$depth:0,children:[e.jsx(n.ChevronRightIcon,{size:16,color:"#5C6970"}),e.jsx(g,{style:{marginLeft:"8px"},children:"Joe's Coffee"}),e.jsx(y,{children:"24"})]}),e.jsxs(I,{$depth:1,children:[e.jsx(n.ChevronRightIcon,{size:16,color:"#5C6970"}),e.jsx(g,{style:{marginLeft:"8px"},children:"Getting Started"})]}),e.jsxs(I,{$depth:1,children:[e.jsx(n.ChevronRightIcon,{size:16,color:"#5C6970"}),e.jsx(g,{style:{marginLeft:"8px"},children:"Troubleshooting Guides"})]}),e.jsxs(I,{$depth:1,children:[e.jsx(n.ChevronRightIcon,{size:16,color:"#5C6970"}),e.jsx(g,{style:{marginLeft:"8px"},children:"Product FAQs"})]}),e.jsxs(I,{$depth:1,children:[e.jsx(n.ChevronRightIcon,{size:16,color:"#5C6970"}),e.jsx(g,{style:{marginLeft:"8px"},children:"Policies and Procedures"})]}),e.jsxs(I,{$depth:0,children:[e.jsx(n.ChevronRightIcon,{size:16,color:"#5C6970"}),e.jsx(g,{style:{marginLeft:"8px"},children:"Confluence"}),e.jsx(y,{children:"124"})]}),e.jsxs(k,{children:[e.jsx(g,{children:"Content blocks"}),e.jsx(y,{children:"0"})]}),e.jsxs(k,{children:[e.jsx(g,{children:"Procedures"}),e.jsx(y,{children:"12"})]}),e.jsxs(k,{children:[e.jsx(g,{children:"Media"}),e.jsx(y,{children:"0"})]})]})]})]})},Qe=o.div`
  display: flex;
  flex-direction: column;
  width: 240px;
  height: 100%;
  background-color: #f8f9f9;
  padding: 8px;
  overflow-y: auto;
  overflow-x: hidden;
`,Oe=o.div`
  display: flex;
  gap: 8px;
  align-items: flex-start;
  padding: 12px;
  width: 100%;
`,Ue=o.h2`
  flex: 1;
  font-family: 'SF Pro Text', sans-serif;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.45px;
  color: #293239;
  margin: 0;
  padding: 4px 0;
`,U=o.button`
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
  flex-shrink: 0;

  &:hover {
    background-color: rgba(92, 105, 112, 0.08);
  }

  &:active {
    background-color: rgba(92, 105, 112, 0.16);
  }
`,a=o(U)`
  width: 24px;
  height: 24px;
  border-radius: 4px;
`,F=o.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding-bottom: 12px;
  width: 100%;
`,c=o.div`
  display: flex;
  align-items: center;
  gap: 8px;
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
`,l=o.div`
  display: flex;
  flex: 1;
  gap: 8px;
  align-items: center;
  min-width: 0;
`,d=o.p`
  flex: 1;
  font-family: 'SF Pro Text', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.154px;
  color: ${i=>i.$isCurrent?"white":"#293239"};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0;
`,$=o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 20px;
  height: 16px;
  padding: 2px 8px;
  background-color: rgba(92, 105, 112, 0.16);
  border-radius: 16px;
  font-family: 'SF Pro Text', sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: -0.0004px;
  color: #2f3941;
  text-align: center;
  flex-shrink: 0;
`,R=o.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,q=o.div`
  display: flex;
  align-items: center;
  min-height: 40px;
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
`,V=o.div`
  display: flex;
  flex: 1;
  gap: 8px;
  align-items: center;
  padding: 12px 4px 12px 8px;
`,K=o.p`
  font-family: 'SF Pro Text', sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: -0.0004px;
  color: #5c6970;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0;
  flex-shrink: 0;
`,H=o.div`
  flex: 1;
  height: 1px;
  background-color: #d8dcde;
  min-width: 0;
`,W=o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 100%;
  flex-shrink: 0;
`,J=()=>{const[i,p]=b.useState("agents"),[s,h]=b.useState(!0),[r,j]=b.useState(!0),t=m=>{p(m)};return e.jsxs(Qe,{children:[e.jsxs(Oe,{children:[e.jsx(Ue,{children:"AI agents"}),e.jsx(U,{"aria-label":"Add new",children:e.jsx(n.PlusIcon,{size:20,color:"#5C6970"})})]}),e.jsxs(F,{children:[e.jsxs(c,{$isCurrent:i==="agents",onClick:()=>t("agents"),children:[e.jsxs(l,{children:[e.jsx(n.BarChartSquareIcon,{size:20,color:i==="agents"?"white":"#5C6970"}),e.jsx(d,{$isCurrent:i==="agents",children:"Agents"})]}),e.jsx(a,{"aria-label":"More options",children:e.jsx(n.DotsVerticalIcon,{size:16,color:i==="agents"?"white":"#5C6970"})})]}),e.jsxs(c,{$isCurrent:i==="conversations",onClick:()=>t("conversations"),children:[e.jsxs(l,{children:[e.jsx(n.BubbleIcon,{size:20,color:"#5C6970"}),e.jsx(d,{$isCurrent:i==="conversations",children:"Conversations"})]}),e.jsx(a,{"aria-label":"More options",children:e.jsx(n.DotsVerticalIcon,{size:16,color:"#5C6970"})})]}),e.jsxs(c,{$isCurrent:i==="settings",onClick:()=>t("settings"),children:[e.jsxs(l,{children:[e.jsx(n.GearIcon,{size:20,color:"#5C6970"}),e.jsx(d,{$isCurrent:i==="settings",children:"Settings"})]}),e.jsx(a,{"aria-label":"More options",children:e.jsx(n.DotsVerticalIcon,{size:16,color:"#5C6970"})})]})]}),e.jsxs(R,{children:[e.jsxs(q,{onClick:()=>h(!s),children:[e.jsxs(V,{children:[e.jsx(K,{children:"Agent Management"}),e.jsx(H,{})]}),e.jsx(W,{children:s?e.jsx(n.ChevronUpIcon,{size:16,color:"#5C6970"}):e.jsx(n.ChevronRightIcon,{size:16,color:"#5C6970"})})]}),s&&e.jsxs(F,{children:[e.jsxs(c,{$isCurrent:i==="agent-builder",onClick:()=>t("agent-builder"),children:[e.jsxs(l,{children:[e.jsx(d,{$isCurrent:i==="agent-builder",children:"Agent builder"}),e.jsx($,{children:"123"})]}),e.jsx(a,{"aria-label":"More options",children:e.jsx(n.DotsVerticalIcon,{size:16,color:"#5C6970"})})]}),e.jsxs(c,{$isCurrent:i==="templates",onClick:()=>t("templates"),children:[e.jsxs(l,{children:[e.jsx(d,{$isCurrent:i==="templates",children:"Templates"}),e.jsx($,{children:"123"})]}),e.jsx(a,{"aria-label":"More options",children:e.jsx(n.DotsVerticalIcon,{size:16,color:"#5C6970"})})]}),e.jsxs(c,{$isCurrent:i==="workflows",onClick:()=>t("workflows"),children:[e.jsxs(l,{children:[e.jsx(d,{$isCurrent:i==="workflows",children:"Workflows"}),e.jsx($,{children:"123"})]}),e.jsx(a,{"aria-label":"More options",children:e.jsx(n.DotsVerticalIcon,{size:16,color:"#5C6970"})})]}),e.jsxs(c,{$isCurrent:i==="monitoring",onClick:()=>t("monitoring"),children:[e.jsxs(l,{children:[e.jsx(d,{$isCurrent:i==="monitoring",children:"Monitoring"}),e.jsx($,{children:"123"})]}),e.jsx(a,{"aria-label":"More options",children:e.jsx(n.DotsVerticalIcon,{size:16,color:"#5C6970"})})]}),e.jsxs(c,{$isCurrent:i==="permissions",onClick:()=>t("permissions"),children:[e.jsxs(l,{children:[e.jsx(d,{$isCurrent:i==="permissions",children:"Permissions"}),e.jsx($,{children:"123"})]}),e.jsx(a,{"aria-label":"More options",children:e.jsx(n.DotsVerticalIcon,{size:16,color:"#5C6970"})})]})]})]}),e.jsxs(R,{children:[e.jsxs(q,{onClick:()=>j(!r),children:[e.jsxs(V,{children:[e.jsx(K,{children:"Data & Integration"}),e.jsx(H,{})]}),e.jsx(W,{children:r?e.jsx(n.ChevronUpIcon,{size:16,color:"#5C6970"}):e.jsx(n.ChevronRightIcon,{size:16,color:"#5C6970"})})]}),r&&e.jsxs(F,{children:[e.jsxs(c,{$isCurrent:i==="data-sources",onClick:()=>t("data-sources"),children:[e.jsx(l,{children:e.jsx(d,{$isCurrent:i==="data-sources",children:"Data sources"})}),e.jsx(a,{"aria-label":"More options",children:e.jsx(n.DotsVerticalIcon,{size:16,color:"#5C6970"})})]}),e.jsxs(c,{$isCurrent:i==="knowledge-base",onClick:()=>t("knowledge-base"),children:[e.jsx(l,{children:e.jsx(d,{$isCurrent:i==="knowledge-base",children:"Knowledge base"})}),e.jsx(a,{"aria-label":"More options",children:e.jsx(n.DotsVerticalIcon,{size:16,color:"#5C6970"})})]}),e.jsxs(c,{$isCurrent:i==="integrations",onClick:()=>t("integrations"),children:[e.jsx(l,{children:e.jsx(d,{$isCurrent:i==="integrations",children:"Integrations"})}),e.jsx(a,{"aria-label":"More options",children:e.jsx(n.DotsVerticalIcon,{size:16,color:"#5C6970"})})]}),e.jsxs(c,{$isCurrent:i==="api-connections",onClick:()=>t("api-connections"),children:[e.jsx(l,{children:e.jsx(d,{$isCurrent:i==="api-connections",children:"API connections"})}),e.jsx(a,{"aria-label":"More options",children:e.jsx(n.DotsVerticalIcon,{size:16,color:"#5C6970"})})]}),e.jsxs(c,{$isCurrent:i==="webhooks",onClick:()=>t("webhooks"),children:[e.jsx(l,{children:e.jsx(d,{$isCurrent:i==="webhooks",children:"Webhooks"})}),e.jsx(a,{"aria-label":"More options",children:e.jsx(n.DotsVerticalIcon,{size:16,color:"#5C6970"})})]}),e.jsxs(c,{$isCurrent:i==="logs",onClick:()=>t("logs"),children:[e.jsx(l,{children:e.jsx(d,{$isCurrent:i==="logs",children:"Logs"})}),e.jsx(a,{"aria-label":"More options",children:e.jsx(n.DotsVerticalIcon,{size:16,color:"#5C6970"})})]})]})]})]})},Je=o.div`
  flex: 1;
  width: 100%;
  padding: 24px;
  overflow: auto;
`,Z=()=>e.jsxs(Je,{children:[e.jsx(u.XL,{tag:"h1",style:{marginBottom:"16px"},children:"Support's main content area"}),e.jsx("p",{children:"This is where your Support page content will be displayed."})]}),Ze=o.div`
  flex: 1;
  width: 100%;
  padding: 24px;
  overflow: auto;
`,Y=()=>e.jsxs(Ze,{children:[e.jsx(u.XL,{tag:"h1",style:{marginBottom:"16px"},children:"Knowledge's main content area"}),e.jsx("p",{children:"This is where your Knowledge page content will be displayed."})]}),Ye=o.div`
  flex: 1;
  width: 100%;
  padding: 24px;
  overflow: auto;
`,_=()=>e.jsxs(Ye,{children:[e.jsx(u.XL,{tag:"h1",style:{marginBottom:"16px"},children:"AI agents's main content area"}),e.jsx("p",{children:"This is where your AI agents page content will be displayed."})]}),_e=o.div`
  flex: 1;
  width: 100%;
  padding: 24px;
  overflow: auto;
`,ee=()=>e.jsxs(_e,{children:[e.jsx(u.XL,{tag:"h1",style:{marginBottom:"16px"},children:"Chat's main content area"}),e.jsx("p",{children:"This is where your Chat page content will be displayed."})]}),en=o.div`
  flex: 1;
  width: 100%;
  padding: 24px;
  overflow: auto;
`,ne=()=>e.jsxs(en,{children:[e.jsx(u.XL,{tag:"h1",style:{marginBottom:"16px"},children:"Voice's main content area"}),e.jsx("p",{children:"This is where your Voice page content will be displayed."})]}),nn=o.div`
  flex: 1;
  width: 100%;
  padding: 24px;
  overflow: auto;
`,ie=()=>e.jsxs(nn,{children:[e.jsx(u.XL,{tag:"h1",style:{marginBottom:"16px"},children:"Analytics's main content area"}),e.jsx("p",{children:"This is where your Analytics page content will be displayed."})]}),on=o.div`
  flex: 1;
  width: 100%;
  padding: 24px;
  overflow: auto;
`,oe=()=>e.jsxs(on,{children:[e.jsx(u.XL,{tag:"h1",style:{marginBottom:"16px"},children:"Workforce management's main content area"}),e.jsx("p",{children:"This is where your Workforce management page content will be displayed."})]}),sn=o.div`
  flex: 1;
  width: 100%;
  padding: 24px;
  overflow: auto;
`,se=()=>e.jsxs(sn,{children:[e.jsx(u.XL,{tag:"h1",style:{marginBottom:"16px"},children:"Quality assurance's main content area"}),e.jsx("p",{children:"This is where your Quality assurance page content will be displayed."})]}),tn=o.div`
  flex: 1;
  width: 100%;
  padding: 24px;
  overflow: auto;
`,te=()=>e.jsxs(tn,{children:[e.jsx(u.XL,{tag:"h1",style:{marginBottom:"16px"},children:"Community's main content area"}),e.jsx("p",{children:"This is where your Community page content will be displayed."})]}),rn=o.div`
  flex: 1;
  width: 100%;
  padding: 24px;
  overflow: auto;
`,re=()=>e.jsxs(rn,{children:[e.jsx(u.XL,{tag:"h1",style:{marginBottom:"16px"},children:"Sales's main content area"}),e.jsx("p",{children:"This is where your Sales page content will be displayed."})]}),an=o.div`
  flex: 1;
  width: 100%;
  padding: 24px;
  overflow: auto;
`,ae=()=>e.jsxs(an,{children:[e.jsx(u.XL,{tag:"h1",style:{marginBottom:"16px"},children:"Admin center's main content area"}),e.jsx("p",{children:"This is where your Admin center page content will be displayed."})]}),cn=o.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
  background-color: #f8f9f9;
  position: relative;
  isolation: isolate;
`,ln=o.div`
  display: flex;
  flex: 1;
  width: 100%;
  z-index: 1;
  overflow: hidden;
`,dn=o.div`
  display: flex;
`,xn=o.main`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  margin-top: 4px;
  isolation: isolate;
  background: #FFFFFF;
  box-shadow: 0px 0px 4px rgba(10, 13, 14, 0.16);
  border-radius: 8px 0px 0px 0px;
  flex: 1;
  align-self: stretch;
`,pn=()=>{const[i,p]=b.useState(0),[s,h]=b.useState("support"),[r,j]=b.useState(!1),t=x=>{h(x),p(0),j(!1)},m=s==="knowledge",S=s==="ai-agents";return e.jsx(de.ThemeProvider,{children:e.jsxs(cn,{children:[e.jsx(X,{currentProduct:s,onProductChange:t}),e.jsxs(ln,{children:[e.jsxs(dn,{children:[e.jsx(Q,{currentProduct:s,activeNavItem:i,setActiveNavItem:p,isSubnavExpanded:r,setIsSubnavExpanded:j}),m&&r&&e.jsx(O,{}),S&&r&&e.jsx(J,{})]}),e.jsxs(xn,{children:[s==="support"&&e.jsx(Z,{}),s==="knowledge"&&e.jsx(Y,{}),s==="ai-agents"&&e.jsx(_,{}),s==="chat"&&e.jsx(ee,{}),s==="voice"&&e.jsx(ne,{}),s==="analytics"&&e.jsx(ie,{}),s==="workforce-management"&&e.jsx(oe,{}),s==="quality-assurance"&&e.jsx(se,{}),s==="community"&&e.jsx(te,{}),s==="sales"&&e.jsx(re,{}),s==="admin-center"&&e.jsx(ae,{})]})]})]})})};exports.AIAgentsMainContent=_;exports.AIAgentsSubnav=J;exports.AdminCenterMainContent=ae;exports.AnalyticsMainContent=ie;exports.ChatMainContent=ee;exports.CommunityMainContent=te;exports.GlobalNavPageTemplate=pn;exports.KnowledgeMainContent=Y;exports.KnowledgeSubnav=O;exports.MainNav=Q;exports.ProductTrayDropdown=E;exports.QualityAssuranceMainContent=se;exports.SalesMainContent=re;exports.SupportMainContent=Z;exports.TopBar=X;exports.VoiceMainContent=ne;exports.WorkforceManagementMainContent=oe;exports.products=B;
//# sourceMappingURL=GlobalNavPageTemplate-BmuLtFth.cjs.map
