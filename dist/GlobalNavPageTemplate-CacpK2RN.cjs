"use strict";const e=require("react/jsx-runtime"),u=require("react"),o=require("styled-components"),ue=require("@zendeskgarden/react-theming"),n=require("./GlobalNavIcons-DfAm9O78.cjs"),C=require("@zendeskgarden/react-avatars"),h=require("@zendeskgarden/react-typography"),je=o.div`
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
`,be=o.button`
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
`,fe=o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
`,P=[{id:"support",name:"Support",icon:n.ProductSupportIcon},{id:"knowledge",name:"Knowledge",icon:n.ProductKnowledgeIcon},{id:"ai-agents",name:"AI agents",icon:n.ProductAIAgentsIcon},{id:"chat",name:"Chat",icon:n.ProductChatIcon},{id:"voice",name:"Voice",icon:n.ProductVoiceIcon},{id:"analytics",name:"Analytics",icon:n.ProductAnalyticsIcon},{id:"workforce-management",name:"Workforce management",icon:n.ProductWorkforceManagementIcon},{id:"quality-assurance",name:"Quality assurance",icon:n.ProductQualityAssuranceIcon},{id:"community",name:"Community",icon:n.ProductCommunityIcon},{id:"sales",name:"Sales",icon:n.ProductSalesIcon},{id:"admin-center",name:"Admin center",icon:n.ProductAdminCenterIcon}],Y=({currentProduct:i="support",onSelectProduct:g,onClose:t})=>{const j=r=>{g?.(r),t?.()};return e.jsx(je,{children:P.map(r=>{const f=r.icon,s=r.id===i,v=s?"white":"#5C6970";return e.jsxs(be,{$isActive:s,onClick:()=>j(r.id),children:[e.jsx(fe,{children:e.jsx(f,{size:20,color:v})}),e.jsx("span",{children:r.name})]},r.id)})})},me=o.header`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  background-color: #f8f9f9;
  width: 100%;
  height: 48px;
  position: relative;
  z-index: 10;
`,ve=o.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,Ce=o.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding-right: 4px;
`,w=o.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,we=o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  width: 40px;
`,L=o.div`
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
`,ye=o.span`
  font-family: 'SF Pro Text', sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: -0.154px;
  color: #293239;
`,W=o.div`
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
`,A=o.div`
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
`,S=o.div`
  width: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`,z=o.div`
  width: 1px;
  height: 24px;
  background-color: #d8dcde;
`,Ie=o.button`
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
`,N=o.button`
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
`,b=o.button`
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
`,ke=o.div`
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
`;const _=({currentProduct:i="support",onProductChange:g})=>{const[t,j]=u.useState(!1),r=u.useRef(null),f=m=>{g?.(m)};u.useEffect(()=>{const m=F=>{r.current&&!r.current.contains(F.target)&&j(!1)};if(t)return document.addEventListener("mousedown",m),()=>document.removeEventListener("mousedown",m)},[t]);const s=P.find(m=>m.id===i)||P[0],v=i==="admin-center",M=i==="knowledge",T=i==="ai-agents",B=i==="workforce-management",G=i==="quality-assurance",D=i==="analytics";return e.jsxs(me,{children:[e.jsxs(ve,{children:[e.jsx(we,{children:e.jsx(n.ZendeskLogoIcon,{size:20})}),e.jsxs(L,{ref:r,onClick:()=>j(!t),children:[e.jsx(ye,{children:s.name}),e.jsx(n.ChevronDownIcon,{size:12}),t&&e.jsx(Y,{currentProduct:i,onSelectProduct:f,onClose:()=>j(!1)})]})]}),e.jsx(Ce,{children:v?e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(S,{children:e.jsx(z,{})}),e.jsx(W,{children:"Camera obscura"})]}),e.jsxs(w,{children:[e.jsxs(A,{children:[e.jsx(n.MagnifyingGlassIcon,{size:16}),e.jsx("span",{children:"Search admin center"})]}),e.jsx(b,{children:e.jsx(n.RescueRingIcon,{size:20})}),e.jsx(C.Avatar,{size:"small",backgroundColor:"#f8f9f9",children:e.jsx(n.PersonIcon,{size:16,color:"#5C6970"})})]})]}):M?e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(S,{children:e.jsx(z,{})}),e.jsxs(L,{children:[e.jsx("span",{style:{fontSize:"12px",fontWeight:600,lineHeight:"16px",letterSpacing:"-0.0004px",color:"#293239"},children:"Joe's Coffee"}),e.jsx(n.ChevronDownIcon,{size:12})]})]}),e.jsxs(w,{children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(N,{size:"small",children:"Create content"}),e.jsx(N,{size:"small",disabled:!0,children:"Help center"})]}),e.jsx(b,{children:e.jsx(n.RescueRingIcon,{size:20})}),e.jsx(C.Avatar,{size:"small",backgroundColor:"#f8f9f9",children:e.jsx(n.PersonIcon,{size:16,color:"#5C6970"})})]})]}):T?e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(S,{children:e.jsx(z,{})}),e.jsx(W,{children:"Camera obscura"})]}),e.jsxs(w,{children:[e.jsxs(L,{children:[e.jsx("span",{style:{fontSize:"12px",fontWeight:600,lineHeight:"16px",letterSpacing:"-0.0004px",color:"#293239"},children:"Test bot"}),e.jsx(n.ChevronDownIcon,{size:12})]}),e.jsx(b,{children:e.jsx(n.RescueRingIcon,{size:20})}),e.jsx(C.Avatar,{size:"small",backgroundColor:"#f8f9f9",children:e.jsx(n.PersonIcon,{size:16,color:"#5C6970"})})]})]}):B?e.jsxs(e.Fragment,{children:[e.jsx("div",{}),e.jsxs(w,{children:[e.jsxs(A,{children:[e.jsx(n.MagnifyingGlassIcon,{size:16}),e.jsx("span",{children:"Search"})]}),e.jsx(b,{children:e.jsx(n.EarthIcon,{size:20})}),e.jsx(C.Avatar,{size:"small",backgroundColor:"#f8f9f9",children:e.jsx(n.PersonIcon,{size:16,color:"#5C6970"})})]})]}):G?e.jsxs(e.Fragment,{children:[e.jsx("div",{}),e.jsxs(w,{children:[e.jsxs(A,{children:[e.jsx(n.MagnifyingGlassIcon,{size:16}),e.jsx("span",{children:"Search"})]}),e.jsx(C.Avatar,{size:"small",backgroundColor:"#f8f9f9",children:e.jsx(n.PersonIcon,{size:16,color:"#5C6970"})})]})]}):D?e.jsxs(e.Fragment,{children:[e.jsx("div",{}),e.jsxs(w,{children:[e.jsxs(A,{children:[e.jsx(n.MagnifyingGlassIcon,{size:16}),e.jsx("span",{children:"Search"})]}),e.jsx(C.Avatar,{size:"small",backgroundColor:"#f8f9f9",children:e.jsx(n.PersonIcon,{size:16,color:"#5C6970"})})]})]}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[e.jsx(S,{children:e.jsx(z,{})}),e.jsxs(Ie,{children:[e.jsx(n.PlusIcon,{size:12}),e.jsx("span",{children:"Add"})]})]}),e.jsxs(w,{children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(b,{children:e.jsx(n.MagnifyingGlassIcon,{size:20})}),e.jsx(N,{size:"small",disabled:!0,children:"Conversations"}),e.jsx(b,{children:e.jsx(n.ProductChatIcon,{size:20})}),e.jsx(b,{children:e.jsx(n.ProductVoiceIcon,{size:20})})]}),e.jsx(S,{children:e.jsx(z,{})}),e.jsxs(b,{children:[e.jsx(n.BellIcon,{size:20}),e.jsx(ke,{children:"1"})]}),e.jsx(b,{children:e.jsx(n.RocketIcon,{size:20})}),e.jsx(C.Avatar,{size:"small",backgroundColor:"#f8f9f9",children:e.jsx(n.PersonIcon,{size:16,color:"#5C6970"})})]})]})})]})},Se=o.div`
  display: flex;
  flex-direction: column;
  width: 240px;
  height: 100%;
  background-color: #f8f9f9;
  padding: 8px;
`,ze=o.div`
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 12px 12px 12px 12px;
  width: 100%;
`,$e=o.h2`
  flex: 1;
  font-family: 'SF Pro Text', sans-serif;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.45px;
  color: #2f3941;
  margin: 0;
  padding: 4px 0;
`,Ae=o.button`
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
`,E=o.div`
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
`,p=o.p`
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
`,Pe=o.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,Me=o.div`
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
`,Te=o.div`
  display: flex;
  flex: 1;
  gap: 8px;
  align-items: center;
  padding: 12px 8px 12px 8px;
`,Be=o.p`
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
`,Ge=o.div`
  flex: 1;
  height: 1px;
  background-color: #d8dcde;
`,De=o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 100%;
`,I=o(k)`
  padding-left: ${i=>i.$depth*24+12}px;
`,ee=()=>{const[i,g]=u.useState(!0);return e.jsxs(Se,{children:[e.jsxs(ze,{children:[e.jsx($e,{children:"Knowledge"}),e.jsx(Ae,{children:e.jsx(n.PlusIcon,{size:20,color:"#5C6970"})})]}),e.jsx(E,{children:e.jsx(k,{$isCurrent:!0,children:e.jsx(p,{$isCurrent:!0,children:"Sources"})})}),e.jsxs(Pe,{children:[e.jsxs(Me,{onClick:()=>g(!i),children:[e.jsxs(Te,{children:[e.jsx(Be,{children:"Content"}),e.jsx(Ge,{})]}),e.jsx(De,{children:i?e.jsx(n.ChevronUpIcon,{size:16,color:"#5C6970"}):e.jsx(n.ChevronRightIcon,{size:16,color:"#5C6970"})})]}),i&&e.jsxs(E,{children:[e.jsxs(k,{children:[e.jsx(p,{children:"All content"}),e.jsx(y,{children:"24"})]}),e.jsxs(I,{$depth:0,children:[e.jsx(n.ChevronRightIcon,{size:16,color:"#5C6970"}),e.jsx(p,{style:{marginLeft:"8px"},children:"Joe's Coffee"}),e.jsx(y,{children:"24"})]}),e.jsxs(I,{$depth:1,children:[e.jsx(n.ChevronRightIcon,{size:16,color:"#5C6970"}),e.jsx(p,{style:{marginLeft:"8px"},children:"Getting Started"})]}),e.jsxs(I,{$depth:1,children:[e.jsx(n.ChevronRightIcon,{size:16,color:"#5C6970"}),e.jsx(p,{style:{marginLeft:"8px"},children:"Troubleshooting Guides"})]}),e.jsxs(I,{$depth:1,children:[e.jsx(n.ChevronRightIcon,{size:16,color:"#5C6970"}),e.jsx(p,{style:{marginLeft:"8px"},children:"Product FAQs"})]}),e.jsxs(I,{$depth:1,children:[e.jsx(n.ChevronRightIcon,{size:16,color:"#5C6970"}),e.jsx(p,{style:{marginLeft:"8px"},children:"Policies and Procedures"})]}),e.jsxs(I,{$depth:0,children:[e.jsx(n.ChevronRightIcon,{size:16,color:"#5C6970"}),e.jsx(p,{style:{marginLeft:"8px"},children:"Confluence"}),e.jsx(y,{children:"124"})]}),e.jsxs(k,{children:[e.jsx(p,{children:"Content blocks"}),e.jsx(y,{children:"0"})]}),e.jsxs(k,{children:[e.jsx(p,{children:"Procedures"}),e.jsx(y,{children:"12"})]}),e.jsxs(k,{children:[e.jsx(p,{children:"Media"}),e.jsx(y,{children:"0"})]})]})]})]})},Fe=o.div`
  display: flex;
  flex-direction: column;
  width: 240px;
  height: 100%;
  background-color: #f8f9f9;
  padding: 8px;
  overflow-y: auto;
  overflow-x: hidden;
`,Le=o.div`
  display: flex;
  gap: 8px;
  align-items: flex-start;
  padding: 12px;
  width: 100%;
`,Ne=o.h2`
  flex: 1;
  font-family: 'SF Pro Text', sans-serif;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.45px;
  color: #293239;
  margin: 0;
  padding: 4px 0;
`,ne=o.button`
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
`,a=o(ne)`
  width: 24px;
  height: 24px;
  border-radius: 4px;
`,R=o.div`
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
`,X=o.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,Q=o.div`
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
`,O=o.div`
  display: flex;
  flex: 1;
  gap: 8px;
  align-items: center;
  padding: 12px 4px 12px 8px;
`,U=o.p`
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
`,J=o.div`
  flex: 1;
  height: 1px;
  background-color: #d8dcde;
  min-width: 0;
`,Z=o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 100%;
  flex-shrink: 0;
`,ie=()=>{const[i,g]=u.useState("agents"),[t,j]=u.useState(!0),[r,f]=u.useState(!0),s=v=>{g(v)};return e.jsxs(Fe,{children:[e.jsxs(Le,{children:[e.jsx(Ne,{children:"AI agents"}),e.jsx(ne,{"aria-label":"Add new",children:e.jsx(n.PlusIcon,{size:20,color:"#5C6970"})})]}),e.jsxs(R,{children:[e.jsxs(c,{$isCurrent:i==="agents",onClick:()=>s("agents"),children:[e.jsxs(l,{children:[e.jsx(n.BarChartSquareIcon,{size:20,color:i==="agents"?"white":"#5C6970"}),e.jsx(d,{$isCurrent:i==="agents",children:"Agents"})]}),e.jsx(a,{"aria-label":"More options",children:e.jsx(n.DotsVerticalIcon,{size:16,color:i==="agents"?"white":"#5C6970"})})]}),e.jsxs(c,{$isCurrent:i==="conversations",onClick:()=>s("conversations"),children:[e.jsxs(l,{children:[e.jsx(n.BubbleIcon,{size:20,color:"#5C6970"}),e.jsx(d,{$isCurrent:i==="conversations",children:"Conversations"})]}),e.jsx(a,{"aria-label":"More options",children:e.jsx(n.DotsVerticalIcon,{size:16,color:"#5C6970"})})]}),e.jsxs(c,{$isCurrent:i==="settings",onClick:()=>s("settings"),children:[e.jsxs(l,{children:[e.jsx(n.GearIcon,{size:20,color:"#5C6970"}),e.jsx(d,{$isCurrent:i==="settings",children:"Settings"})]}),e.jsx(a,{"aria-label":"More options",children:e.jsx(n.DotsVerticalIcon,{size:16,color:"#5C6970"})})]})]}),e.jsxs(X,{children:[e.jsxs(Q,{onClick:()=>j(!t),children:[e.jsxs(O,{children:[e.jsx(U,{children:"Agent Management"}),e.jsx(J,{})]}),e.jsx(Z,{children:t?e.jsx(n.ChevronUpIcon,{size:16,color:"#5C6970"}):e.jsx(n.ChevronRightIcon,{size:16,color:"#5C6970"})})]}),t&&e.jsxs(R,{children:[e.jsxs(c,{$isCurrent:i==="agent-builder",onClick:()=>s("agent-builder"),children:[e.jsxs(l,{children:[e.jsx(d,{$isCurrent:i==="agent-builder",children:"Agent builder"}),e.jsx($,{children:"123"})]}),e.jsx(a,{"aria-label":"More options",children:e.jsx(n.DotsVerticalIcon,{size:16,color:"#5C6970"})})]}),e.jsxs(c,{$isCurrent:i==="templates",onClick:()=>s("templates"),children:[e.jsxs(l,{children:[e.jsx(d,{$isCurrent:i==="templates",children:"Templates"}),e.jsx($,{children:"123"})]}),e.jsx(a,{"aria-label":"More options",children:e.jsx(n.DotsVerticalIcon,{size:16,color:"#5C6970"})})]}),e.jsxs(c,{$isCurrent:i==="workflows",onClick:()=>s("workflows"),children:[e.jsxs(l,{children:[e.jsx(d,{$isCurrent:i==="workflows",children:"Workflows"}),e.jsx($,{children:"123"})]}),e.jsx(a,{"aria-label":"More options",children:e.jsx(n.DotsVerticalIcon,{size:16,color:"#5C6970"})})]}),e.jsxs(c,{$isCurrent:i==="monitoring",onClick:()=>s("monitoring"),children:[e.jsxs(l,{children:[e.jsx(d,{$isCurrent:i==="monitoring",children:"Monitoring"}),e.jsx($,{children:"123"})]}),e.jsx(a,{"aria-label":"More options",children:e.jsx(n.DotsVerticalIcon,{size:16,color:"#5C6970"})})]}),e.jsxs(c,{$isCurrent:i==="permissions",onClick:()=>s("permissions"),children:[e.jsxs(l,{children:[e.jsx(d,{$isCurrent:i==="permissions",children:"Permissions"}),e.jsx($,{children:"123"})]}),e.jsx(a,{"aria-label":"More options",children:e.jsx(n.DotsVerticalIcon,{size:16,color:"#5C6970"})})]})]})]}),e.jsxs(X,{children:[e.jsxs(Q,{onClick:()=>f(!r),children:[e.jsxs(O,{children:[e.jsx(U,{children:"Data & Integration"}),e.jsx(J,{})]}),e.jsx(Z,{children:r?e.jsx(n.ChevronUpIcon,{size:16,color:"#5C6970"}):e.jsx(n.ChevronRightIcon,{size:16,color:"#5C6970"})})]}),r&&e.jsxs(R,{children:[e.jsxs(c,{$isCurrent:i==="data-sources",onClick:()=>s("data-sources"),children:[e.jsx(l,{children:e.jsx(d,{$isCurrent:i==="data-sources",children:"Data sources"})}),e.jsx(a,{"aria-label":"More options",children:e.jsx(n.DotsVerticalIcon,{size:16,color:"#5C6970"})})]}),e.jsxs(c,{$isCurrent:i==="knowledge-base",onClick:()=>s("knowledge-base"),children:[e.jsx(l,{children:e.jsx(d,{$isCurrent:i==="knowledge-base",children:"Knowledge base"})}),e.jsx(a,{"aria-label":"More options",children:e.jsx(n.DotsVerticalIcon,{size:16,color:"#5C6970"})})]}),e.jsxs(c,{$isCurrent:i==="integrations",onClick:()=>s("integrations"),children:[e.jsx(l,{children:e.jsx(d,{$isCurrent:i==="integrations",children:"Integrations"})}),e.jsx(a,{"aria-label":"More options",children:e.jsx(n.DotsVerticalIcon,{size:16,color:"#5C6970"})})]}),e.jsxs(c,{$isCurrent:i==="api-connections",onClick:()=>s("api-connections"),children:[e.jsx(l,{children:e.jsx(d,{$isCurrent:i==="api-connections",children:"API connections"})}),e.jsx(a,{"aria-label":"More options",children:e.jsx(n.DotsVerticalIcon,{size:16,color:"#5C6970"})})]}),e.jsxs(c,{$isCurrent:i==="webhooks",onClick:()=>s("webhooks"),children:[e.jsx(l,{children:e.jsx(d,{$isCurrent:i==="webhooks",children:"Webhooks"})}),e.jsx(a,{"aria-label":"More options",children:e.jsx(n.DotsVerticalIcon,{size:16,color:"#5C6970"})})]}),e.jsxs(c,{$isCurrent:i==="logs",onClick:()=>s("logs"),children:[e.jsx(l,{children:e.jsx(d,{$isCurrent:i==="logs",children:"Logs"})}),e.jsx(a,{"aria-label":"More options",children:e.jsx(n.DotsVerticalIcon,{size:16,color:"#5C6970"})})]})]})]})]})},Re=o.div`
  flex: 1;
  width: 100%;
  padding: 24px;
  overflow: auto;
`,oe=()=>e.jsxs(Re,{children:[e.jsx(h.XL,{tag:"h1",style:{marginBottom:"16px"},children:"Support's main content area"}),e.jsx("p",{children:"This is where your Support page content will be displayed."})]}),qe=o.div`
  flex: 1;
  width: 100%;
  padding: 24px;
  overflow: auto;
`,te=()=>e.jsxs(qe,{children:[e.jsx(h.XL,{tag:"h1",style:{marginBottom:"16px"},children:"Knowledge's main content area"}),e.jsx("p",{children:"This is where your Knowledge page content will be displayed."})]}),Ve=o.div`
  flex: 1;
  width: 100%;
  padding: 24px;
  overflow: auto;
`,se=()=>e.jsxs(Ve,{children:[e.jsx(h.XL,{tag:"h1",style:{marginBottom:"16px"},children:"AI agents's main content area"}),e.jsx("p",{children:"This is where your AI agents page content will be displayed."})]}),He=o.div`
  flex: 1;
  width: 100%;
  padding: 24px;
  overflow: auto;
`,re=()=>e.jsxs(He,{children:[e.jsx(h.XL,{tag:"h1",style:{marginBottom:"16px"},children:"Chat's main content area"}),e.jsx("p",{children:"This is where your Chat page content will be displayed."})]}),Ke=o.div`
  flex: 1;
  width: 100%;
  padding: 24px;
  overflow: auto;
`,ae=()=>e.jsxs(Ke,{children:[e.jsx(h.XL,{tag:"h1",style:{marginBottom:"16px"},children:"Voice's main content area"}),e.jsx("p",{children:"This is where your Voice page content will be displayed."})]}),We=o.div`
  flex: 1;
  width: 100%;
  padding: 24px;
  overflow: auto;
`,ce=()=>e.jsxs(We,{children:[e.jsx(h.XL,{tag:"h1",style:{marginBottom:"16px"},children:"Analytics's main content area"}),e.jsx("p",{children:"This is where your Analytics page content will be displayed."})]}),Ee=o.div`
  flex: 1;
  width: 100%;
  padding: 24px;
  overflow: auto;
`,le=()=>e.jsxs(Ee,{children:[e.jsx(h.XL,{tag:"h1",style:{marginBottom:"16px"},children:"Workforce management's main content area"}),e.jsx("p",{children:"This is where your Workforce management page content will be displayed."})]}),Xe=o.div`
  flex: 1;
  width: 100%;
  padding: 24px;
  overflow: auto;
`,de=()=>e.jsxs(Xe,{children:[e.jsx(h.XL,{tag:"h1",style:{marginBottom:"16px"},children:"Quality assurance's main content area"}),e.jsx("p",{children:"This is where your Quality assurance page content will be displayed."})]}),Qe=o.div`
  flex: 1;
  width: 100%;
  padding: 24px;
  overflow: auto;
`,xe=()=>e.jsxs(Qe,{children:[e.jsx(h.XL,{tag:"h1",style:{marginBottom:"16px"},children:"Community's main content area"}),e.jsx("p",{children:"This is where your Community page content will be displayed."})]}),Oe=o.div`
  flex: 1;
  width: 100%;
  padding: 24px;
  overflow: auto;
`,pe=()=>e.jsxs(Oe,{children:[e.jsx(h.XL,{tag:"h1",style:{marginBottom:"16px"},children:"Sales's main content area"}),e.jsx("p",{children:"This is where your Sales page content will be displayed."})]}),Ue=o.div`
  flex: 1;
  width: 100%;
  padding: 24px;
  overflow: auto;
`,he=()=>e.jsxs(Ue,{children:[e.jsx(h.XL,{tag:"h1",style:{marginBottom:"16px"},children:"Admin center's main content area"}),e.jsx("p",{children:"This is where your Admin center page content will be displayed."})]}),Je=o.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
  background-color: #f8f9f9;
  position: relative;
  isolation: isolate;
`,Ze=o.div`
  display: flex;
  flex: 1;
  width: 100%;
  z-index: 1;
  overflow: hidden;
`,Ye=o.div`
  display: flex;
`,_e=o.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 56px;
  height: 100%;
  padding: 12px 0;
  background-color: #f8f9f9;
  position: relative;
`,en=o.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 231px;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(92, 105, 112, 0.08));
  pointer-events: none;
`,nn=o.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  z-index: 1;
`,on=o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 48px;
`,tn=o.button`
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
`,sn=o.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  z-index: 1;
`,rn=o.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 56px;
  height: 48px;
  padding: 0 16px;
`,an=o.div`
  width: 23px;
  height: 1px;
  background-color: #d8dcde;
`,cn=o.button`
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
`,ln=o.main`
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
`,dn=()=>{const[i,g]=u.useState(0),[t,j]=u.useState("support"),[r,f]=u.useState(!1),s=x=>{j(x),g(0),f(!1)},v=[{id:0,icon:n.HomeIcon,label:"Home"},{id:1,icon:n.InboxIcon,label:"Inbox"},{id:2,icon:n.BookContactsIcon,label:"Contacts"},{id:3,icon:n.BuildingIcon,label:"Organization"},{id:4,icon:n.ShapesIcon,label:"Custom Objects"},{id:5,icon:n.BarChartSquareIcon,label:"Analytics"},{id:6,icon:n.GearIcon,label:"Settings"}],M=[{id:0,icon:n.HomeIcon,label:"Home"},{id:1,icon:n.BuildingIcon,label:"Account"},{id:2,icon:n.PeopleIcon,label:"People"},{id:3,icon:n.PaperPlaneIcon,label:"Channels"},{id:4,icon:n.SparkleIcon,label:"AI"},{id:5,icon:n.MonitorIcon,label:"Workspaces"},{id:6,icon:n.FlowIcon,label:"Objects & rules"},{id:7,icon:n.AppsIcon,label:"Apps and integrations"}],T=[{id:0,icon:n.HomeIcon,label:"Home"},{id:1,icon:n.BookOpenIcon,label:"Knowledge"},{id:2,icon:n.BubbleCheckIcon,label:"Moderate content"},{id:3,icon:n.FoldersIcon,label:"Arrange content"},{id:4,icon:n.PaletteIcon,label:"Customize design"},{id:5,icon:n.PersonKeyIcon,label:"User permissions"},{id:6,icon:n.GearIcon,label:"Settings"}],B=[{id:0,icon:n.BarChartSquareIcon,label:"Analytics"},{id:1,icon:n.NotePencilIcon,label:"Content"},{id:2,icon:n.BubblesIcon,label:"Conversations"},{id:3,icon:n.GearIcon,label:"Settings"},{id:4,icon:null,label:"separator"},{id:5,icon:n.WrenchIcon,label:"AI agent management"},{id:6,icon:n.PersonKeyIcon,label:"Permissions"},{id:7,icon:n.DatabaseIcon,label:"Database"},{id:8,icon:n.SquareGridCircleIcon,label:"Apps"},{id:9,icon:n.PlugIcon,label:"Integrations"}],G=[{id:0,icon:n.LineGraphSquareIcon,label:"Real-time monitoring"},{id:1,icon:n.LayoutGridIcon,label:"Dashboard"},{id:2,icon:n.BarChartSquareIcon,label:"Reports"},{id:3,icon:n.DatabaseIcon,label:"Data"},{id:4,icon:n.CloudArrowDownIcon,label:"Export"},{id:5,icon:n.GearIcon,label:"Settings"}],D=[{id:0,icon:n.LayoutGridIcon,label:"Dashboard"},{id:1,icon:n.BubblesIcon,label:"Conversations"},{id:2,icon:n.CheckSquareIcon,label:"Reviews"},{id:3,icon:n.InboxIcon,label:"Inbox"},{id:4,icon:n.GraduateCapIcon,label:"Training"}],m=[{id:0,icon:n.LineGraphSquareIcon,label:"Real-time monitoring"},{id:1,icon:n.BarChartSquareIcon,label:"Analytics"},{id:2,icon:n.CloudSunIcon,label:"Forecasting"},{id:3,icon:n.CalendarIcon,label:"Scheduling"},{id:4,icon:n.PeopleIcon,label:"Team"},{id:5,icon:n.GearIcon,label:"Settings"}],F=t==="admin-center"?M:t==="knowledge"?T:t==="ai-agents"?B:t==="analytics"?G:t==="quality-assurance"?D:t==="workforce-management"?m:v,q=t==="knowledge",V=t==="ai-agents",ge=q||V;return e.jsx(ue.ThemeProvider,{children:e.jsxs(Je,{children:[e.jsx(_,{currentProduct:t,onProductChange:s}),e.jsxs(Ze,{children:[e.jsxs(Ye,{children:[e.jsxs(_e,{children:[e.jsx(en,{}),e.jsx(nn,{children:F.map(x=>{if(x.label==="separator")return e.jsx(rn,{children:e.jsx(an,{})},x.id);const H=i===x.id,K=typeof x.icon=="function"?x.icon:null;return e.jsx(on,{children:e.jsx(tn,{$isActive:H,onClick:()=>g(x.id),"aria-label":x.label,children:K?e.jsx(K,{size:20,color:H?"white":"#5C6970"}):x.icon})},x.id)})}),e.jsx(sn,{children:ge&&e.jsx(cn,{onClick:()=>f(!r),"aria-label":r?"Collapse":"Expand",children:e.jsx(n.SidebarIcon,{size:20,color:"#5C6970"})})})]}),q&&r&&e.jsx(ee,{}),V&&r&&e.jsx(ie,{})]}),e.jsxs(ln,{children:[t==="support"&&e.jsx(oe,{}),t==="knowledge"&&e.jsx(te,{}),t==="ai-agents"&&e.jsx(se,{}),t==="chat"&&e.jsx(re,{}),t==="voice"&&e.jsx(ae,{}),t==="analytics"&&e.jsx(ce,{}),t==="workforce-management"&&e.jsx(le,{}),t==="quality-assurance"&&e.jsx(de,{}),t==="community"&&e.jsx(xe,{}),t==="sales"&&e.jsx(pe,{}),t==="admin-center"&&e.jsx(he,{})]})]})]})})};exports.AIAgentsMainContent=se;exports.AIAgentsSubnav=ie;exports.AdminCenterMainContent=he;exports.AnalyticsMainContent=ce;exports.ChatMainContent=re;exports.CommunityMainContent=xe;exports.GlobalNavPageTemplate=dn;exports.KnowledgeMainContent=te;exports.KnowledgeSubnav=ee;exports.ProductTrayDropdown=Y;exports.QualityAssuranceMainContent=de;exports.SalesMainContent=pe;exports.SupportMainContent=oe;exports.TopBar=_;exports.VoiceMainContent=ae;exports.WorkforceManagementMainContent=le;exports.products=P;
//# sourceMappingURL=GlobalNavPageTemplate-CacpK2RN.cjs.map
