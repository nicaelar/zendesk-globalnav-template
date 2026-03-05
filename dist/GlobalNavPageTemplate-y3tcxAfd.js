import { jsx as e, jsxs as n, Fragment as y } from "react/jsx-runtime";
import { useState as C, useRef as ye, useEffect as ke } from "react";
import o from "styled-components";
import { ThemeProvider as Ie } from "@zendeskgarden/react-theming";
import { U as Se, R as ze, z as $e, O as me, V as ve, K as Ae, W as Pe, S as Te, Q as Me, T as Be, J as Ne, a4 as Ge, i as L, M, X as W, v as k, E as Fe, y as O, a as je, Y as De, l as q, k as m, B as F, o as l, e as Le, G as A, H as E, g as ie, u as oe, t as We, $ as Ee, s as He, F as Ke, A as Re, c as qe, d as Qe, p as Oe, P as Ve, w as te, N as Je, f as re, a2 as Ue, D as ae, a1 as Xe, x as Ze, r as le, L as ce, m as Ye, h as _e, I as se, q as en, n as nn, C as on, b as tn, Z as rn, _ as an } from "./GlobalNavIcons-D6JQQ4hD.js";
import { Avatar as I } from "@zendeskgarden/react-avatars";
import { XL as u } from "@zendeskgarden/react-typography";
const ln = o.div`
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
`, cn = o.button`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 12px;
  width: 100%;
  border: none;
  background-color: ${(i) => i.$isActive ? "#293239" : "transparent"};
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.15s;
  font-family: 'SF Pro Text', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.154px;
  color: ${(i) => i.$isActive ? "white" : "#293239"};
  text-align: left;

  &:hover {
    background-color: ${(i) => i.$isActive ? "#293239" : "rgba(0, 0, 0, 0.04)"};
  }

  &:active {
    background-color: ${(i) => i.$isActive ? "#293239" : "rgba(0, 0, 0, 0.08)"};
  }
`, sn = o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
`, Q = [
  { id: "support", name: "Support", icon: Se },
  { id: "knowledge", name: "Knowledge", icon: ze },
  { id: "ai-agents", name: "AI agents", icon: $e },
  { id: "chat", name: "Chat", icon: me },
  { id: "voice", name: "Voice", icon: ve },
  { id: "analytics", name: "Analytics", icon: Ae },
  { id: "workforce-management", name: "Workforce management", icon: Pe },
  { id: "quality-assurance", name: "Quality assurance", icon: Te },
  { id: "community", name: "Community", icon: Me },
  { id: "sales", name: "Sales", icon: Be },
  { id: "admin-center", name: "Admin center", icon: Ne }
], dn = ({ currentProduct: i = "support", onSelectProduct: x, onClose: t }) => {
  const f = (a) => {
    x?.(a), t?.();
  };
  return /* @__PURE__ */ e(ln, { children: Q.map((a) => {
    const v = a.icon, r = a.id === i;
    return /* @__PURE__ */ n(
      cn,
      {
        $isActive: r,
        onClick: () => f(a.id),
        children: [
          /* @__PURE__ */ e(sn, { children: /* @__PURE__ */ e(v, { size: 20, color: r ? "white" : "#5C6970" }) }),
          /* @__PURE__ */ e("span", { children: a.name })
        ]
      },
      a.id
    );
  }) });
}, pn = o.header`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  background-color: #f8f9f9;
  width: 100%;
  height: 48px;
  position: relative;
  z-index: 10;
`, hn = o.div`
  display: flex;
  align-items: center;
  gap: 8px;
`, gn = o.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding-right: 4px;
`, S = o.div`
  display: flex;
  align-items: center;
  gap: 8px;
`, un = o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  width: 40px;
`, H = o.div`
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
`, xn = o.span`
  font-family: 'SF Pro Text', sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: -0.154px;
  color: #293239;
`, de = o.div`
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
`, j = o.div`
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
`, B = o.div`
  width: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`, N = o.div`
  width: 1px;
  height: 24px;
  background-color: #d8dcde;
`, fn = o.button`
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
`, K = o.button`
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
`, b = o.button`
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
`, bn = o.div`
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
`;
o.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
const mn = ({ currentProduct: i = "support", onProductChange: x }) => {
  const [t, f] = C(!1), a = ye(null), v = (w) => {
    x?.(w);
  };
  ke(() => {
    const w = (D) => {
      a.current && !a.current.contains(D.target) && f(!1);
    };
    if (t)
      return document.addEventListener("mousedown", w), () => document.removeEventListener("mousedown", w);
  }, [t]);
  const r = Q.find((w) => w.id === i) || Q[0], T = i === "admin-center", V = i === "knowledge", J = i === "ai-agents", U = i === "workforce-management", X = i === "quality-assurance", Z = i === "analytics";
  return /* @__PURE__ */ n(pn, { children: [
    /* @__PURE__ */ n(hn, { children: [
      /* @__PURE__ */ e(un, { children: /* @__PURE__ */ e(Ge, { size: 20 }) }),
      /* @__PURE__ */ n(
        H,
        {
          ref: a,
          onClick: () => f(!t),
          children: [
            /* @__PURE__ */ e(xn, { children: r.name }),
            /* @__PURE__ */ e(L, { size: 12 }),
            t && /* @__PURE__ */ e(
              dn,
              {
                currentProduct: i,
                onSelectProduct: v,
                onClose: () => f(!1)
              }
            )
          ]
        }
      )
    ] }),
    /* @__PURE__ */ e(gn, { children: T ? (
      // Admin Center Header
      /* @__PURE__ */ n(y, { children: [
        /* @__PURE__ */ n("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
          /* @__PURE__ */ e(B, { children: /* @__PURE__ */ e(N, {}) }),
          /* @__PURE__ */ e(de, { children: "Camera obscura" })
        ] }),
        /* @__PURE__ */ n(S, { children: [
          /* @__PURE__ */ n(j, { children: [
            /* @__PURE__ */ e(M, { size: 16 }),
            /* @__PURE__ */ e("span", { children: "Search admin center" })
          ] }),
          /* @__PURE__ */ e(b, { children: /* @__PURE__ */ e(W, { size: 20 }) }),
          /* @__PURE__ */ e(I, { size: "small", backgroundColor: "#f8f9f9", children: /* @__PURE__ */ e(k, { size: 16, color: "#5C6970" }) })
        ] })
      ] })
    ) : V ? (
      // Knowledge Header
      /* @__PURE__ */ n(y, { children: [
        /* @__PURE__ */ n("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
          /* @__PURE__ */ e(B, { children: /* @__PURE__ */ e(N, {}) }),
          /* @__PURE__ */ n(H, { children: [
            /* @__PURE__ */ e("span", { style: { fontSize: "12px", fontWeight: 600, lineHeight: "16px", letterSpacing: "-0.0004px", color: "#293239" }, children: "Joe's Coffee" }),
            /* @__PURE__ */ e(L, { size: 12 })
          ] })
        ] }),
        /* @__PURE__ */ n(S, { children: [
          /* @__PURE__ */ n("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
            /* @__PURE__ */ e(K, { size: "small", children: "Create content" }),
            /* @__PURE__ */ e(K, { size: "small", disabled: !0, children: "Help center" })
          ] }),
          /* @__PURE__ */ e(b, { children: /* @__PURE__ */ e(W, { size: 20 }) }),
          /* @__PURE__ */ e(I, { size: "small", backgroundColor: "#f8f9f9", children: /* @__PURE__ */ e(k, { size: 16, color: "#5C6970" }) })
        ] })
      ] })
    ) : J ? (
      // AI Agents Header
      /* @__PURE__ */ n(y, { children: [
        /* @__PURE__ */ n("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
          /* @__PURE__ */ e(B, { children: /* @__PURE__ */ e(N, {}) }),
          /* @__PURE__ */ e(de, { children: "Camera obscura" })
        ] }),
        /* @__PURE__ */ n(S, { children: [
          /* @__PURE__ */ n(H, { children: [
            /* @__PURE__ */ e("span", { style: { fontSize: "12px", fontWeight: 600, lineHeight: "16px", letterSpacing: "-0.0004px", color: "#293239" }, children: "Test bot" }),
            /* @__PURE__ */ e(L, { size: 12 })
          ] }),
          /* @__PURE__ */ e(b, { children: /* @__PURE__ */ e(W, { size: 20 }) }),
          /* @__PURE__ */ e(I, { size: "small", backgroundColor: "#f8f9f9", children: /* @__PURE__ */ e(k, { size: 16, color: "#5C6970" }) })
        ] })
      ] })
    ) : U ? (
      // Workforce Management Header
      /* @__PURE__ */ n(y, { children: [
        /* @__PURE__ */ e("div", {}),
        /* @__PURE__ */ n(S, { children: [
          /* @__PURE__ */ n(j, { children: [
            /* @__PURE__ */ e(M, { size: 16 }),
            /* @__PURE__ */ e("span", { children: "Search" })
          ] }),
          /* @__PURE__ */ e(b, { children: /* @__PURE__ */ e(Fe, { size: 20 }) }),
          /* @__PURE__ */ e(I, { size: "small", backgroundColor: "#f8f9f9", children: /* @__PURE__ */ e(k, { size: 16, color: "#5C6970" }) })
        ] })
      ] })
    ) : X ? (
      // Quality Assurance Header
      /* @__PURE__ */ n(y, { children: [
        /* @__PURE__ */ e("div", {}),
        /* @__PURE__ */ n(S, { children: [
          /* @__PURE__ */ n(j, { children: [
            /* @__PURE__ */ e(M, { size: 16 }),
            /* @__PURE__ */ e("span", { children: "Search" })
          ] }),
          /* @__PURE__ */ e(I, { size: "small", backgroundColor: "#f8f9f9", children: /* @__PURE__ */ e(k, { size: 16, color: "#5C6970" }) })
        ] })
      ] })
    ) : Z ? (
      // Analytics Header
      /* @__PURE__ */ n(y, { children: [
        /* @__PURE__ */ e("div", {}),
        /* @__PURE__ */ n(S, { children: [
          /* @__PURE__ */ n(j, { children: [
            /* @__PURE__ */ e(M, { size: 16 }),
            /* @__PURE__ */ e("span", { children: "Search" })
          ] }),
          /* @__PURE__ */ e(I, { size: "small", backgroundColor: "#f8f9f9", children: /* @__PURE__ */ e(k, { size: 16, color: "#5C6970" }) })
        ] })
      ] })
    ) : (
      // Default Header
      /* @__PURE__ */ n(y, { children: [
        /* @__PURE__ */ n("div", { style: { display: "flex", alignItems: "center" }, children: [
          /* @__PURE__ */ e(B, { children: /* @__PURE__ */ e(N, {}) }),
          /* @__PURE__ */ n(fn, { children: [
            /* @__PURE__ */ e(O, { size: 12 }),
            /* @__PURE__ */ e("span", { children: "Add" })
          ] })
        ] }),
        /* @__PURE__ */ n(S, { children: [
          /* @__PURE__ */ n("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
            /* @__PURE__ */ e(b, { children: /* @__PURE__ */ e(M, { size: 20 }) }),
            /* @__PURE__ */ e(K, { size: "small", disabled: !0, children: "Conversations" }),
            /* @__PURE__ */ e(b, { children: /* @__PURE__ */ e(me, { size: 20 }) }),
            /* @__PURE__ */ e(b, { children: /* @__PURE__ */ e(ve, { size: 20 }) })
          ] }),
          /* @__PURE__ */ e(B, { children: /* @__PURE__ */ e(N, {}) }),
          /* @__PURE__ */ n(b, { children: [
            /* @__PURE__ */ e(je, { size: 20 }),
            /* @__PURE__ */ e(bn, { children: "1" })
          ] }),
          /* @__PURE__ */ e(b, { children: /* @__PURE__ */ e(De, { size: 20 }) }),
          /* @__PURE__ */ e(I, { size: "small", backgroundColor: "#f8f9f9", children: /* @__PURE__ */ e(k, { size: 16, color: "#5C6970" }) })
        ] })
      ] })
    ) })
  ] });
}, vn = o.div`
  display: flex;
  flex-direction: column;
  width: 240px;
  height: 100%;
  background-color: #f8f9f9;
  padding: 8px;
`, Cn = o.div`
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 12px 12px 12px 12px;
  width: 100%;
`, wn = o.h2`
  flex: 1;
  font-family: 'SF Pro Text', sans-serif;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.45px;
  color: #2f3941;
  margin: 0;
  padding: 4px 0;
`, yn = o.button`
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
`, pe = o.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding-bottom: 12px;
  width: 100%;
`, P = o.div`
  display: flex;
  align-items: center;
  height: 32px;
  padding: 0 8px 0 12px;
  border-radius: 8px;
  background-color: ${(i) => i.$isCurrent ? "#293239" : "transparent"};
  cursor: pointer;
  transition: background-color 0.15s;

  &:hover {
    background-color: ${(i) => i.$isCurrent ? "#293239" : "rgba(92, 105, 112, 0.08)"};
  }

  &:active {
    background-color: ${(i) => i.$isCurrent ? "#293239" : "rgba(92, 105, 112, 0.16)"};
  }
`, g = o.p`
  flex: 1;
  font-family: 'SF Pro Text', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.154px;
  color: ${(i) => i.$isCurrent ? "white" : "#2f3941"};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0;
`, z = o.div`
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
`, kn = o.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`, In = o.div`
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
`, Sn = o.div`
  display: flex;
  flex: 1;
  gap: 8px;
  align-items: center;
  padding: 12px 8px 12px 8px;
`, zn = o.p`
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
`, $n = o.div`
  flex: 1;
  height: 1px;
  background-color: #d8dcde;
`, An = o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 100%;
`, $ = o(P)`
  padding-left: ${(i) => i.$depth * 24 + 12}px;
`, Pn = () => {
  const [i, x] = C(!0);
  return /* @__PURE__ */ n(vn, { children: [
    /* @__PURE__ */ n(Cn, { children: [
      /* @__PURE__ */ e(wn, { children: "Knowledge" }),
      /* @__PURE__ */ e(yn, { children: /* @__PURE__ */ e(O, { size: 20, color: "#5C6970" }) })
    ] }),
    /* @__PURE__ */ e(pe, { children: /* @__PURE__ */ e(P, { $isCurrent: !0, children: /* @__PURE__ */ e(g, { $isCurrent: !0, children: "Sources" }) }) }),
    /* @__PURE__ */ n(kn, { children: [
      /* @__PURE__ */ n(In, { onClick: () => x(!i), children: [
        /* @__PURE__ */ n(Sn, { children: [
          /* @__PURE__ */ e(zn, { children: "Content" }),
          /* @__PURE__ */ e($n, {})
        ] }),
        /* @__PURE__ */ e(An, { children: i ? /* @__PURE__ */ e(q, { size: 16, color: "#5C6970" }) : /* @__PURE__ */ e(m, { size: 16, color: "#5C6970" }) })
      ] }),
      i && /* @__PURE__ */ n(pe, { children: [
        /* @__PURE__ */ n(P, { children: [
          /* @__PURE__ */ e(g, { children: "All content" }),
          /* @__PURE__ */ e(z, { children: "24" })
        ] }),
        /* @__PURE__ */ n($, { $depth: 0, children: [
          /* @__PURE__ */ e(m, { size: 16, color: "#5C6970" }),
          /* @__PURE__ */ e(g, { style: { marginLeft: "8px" }, children: "Joe's Coffee" }),
          /* @__PURE__ */ e(z, { children: "24" })
        ] }),
        /* @__PURE__ */ n($, { $depth: 1, children: [
          /* @__PURE__ */ e(m, { size: 16, color: "#5C6970" }),
          /* @__PURE__ */ e(g, { style: { marginLeft: "8px" }, children: "Getting Started" })
        ] }),
        /* @__PURE__ */ n($, { $depth: 1, children: [
          /* @__PURE__ */ e(m, { size: 16, color: "#5C6970" }),
          /* @__PURE__ */ e(g, { style: { marginLeft: "8px" }, children: "Troubleshooting Guides" })
        ] }),
        /* @__PURE__ */ n($, { $depth: 1, children: [
          /* @__PURE__ */ e(m, { size: 16, color: "#5C6970" }),
          /* @__PURE__ */ e(g, { style: { marginLeft: "8px" }, children: "Product FAQs" })
        ] }),
        /* @__PURE__ */ n($, { $depth: 1, children: [
          /* @__PURE__ */ e(m, { size: 16, color: "#5C6970" }),
          /* @__PURE__ */ e(g, { style: { marginLeft: "8px" }, children: "Policies and Procedures" })
        ] }),
        /* @__PURE__ */ n($, { $depth: 0, children: [
          /* @__PURE__ */ e(m, { size: 16, color: "#5C6970" }),
          /* @__PURE__ */ e(g, { style: { marginLeft: "8px" }, children: "Confluence" }),
          /* @__PURE__ */ e(z, { children: "124" })
        ] }),
        /* @__PURE__ */ n(P, { children: [
          /* @__PURE__ */ e(g, { children: "Content blocks" }),
          /* @__PURE__ */ e(z, { children: "0" })
        ] }),
        /* @__PURE__ */ n(P, { children: [
          /* @__PURE__ */ e(g, { children: "Procedures" }),
          /* @__PURE__ */ e(z, { children: "12" })
        ] }),
        /* @__PURE__ */ n(P, { children: [
          /* @__PURE__ */ e(g, { children: "Media" }),
          /* @__PURE__ */ e(z, { children: "0" })
        ] })
      ] })
    ] })
  ] });
}, Tn = o.div`
  display: flex;
  flex-direction: column;
  width: 240px;
  height: 100%;
  background-color: #f8f9f9;
  padding: 8px;
  overflow-y: auto;
  overflow-x: hidden;
`, Mn = o.div`
  display: flex;
  gap: 8px;
  align-items: flex-start;
  padding: 12px;
  width: 100%;
`, Bn = o.h2`
  flex: 1;
  font-family: 'SF Pro Text', sans-serif;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.45px;
  color: #293239;
  margin: 0;
  padding: 4px 0;
`, Ce = o.button`
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
`, c = o(Ce)`
  width: 24px;
  height: 24px;
  border-radius: 4px;
`, R = o.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding-bottom: 12px;
  width: 100%;
`, s = o.div`
  display: flex;
  align-items: center;
  gap: 8px;
  height: 32px;
  padding: 0 8px 0 12px;
  border-radius: 8px;
  background-color: ${(i) => i.$isCurrent ? "#293239" : "transparent"};
  cursor: pointer;
  transition: background-color 0.15s;

  &:hover {
    background-color: ${(i) => i.$isCurrent ? "#293239" : "rgba(92, 105, 112, 0.08)"};
  }

  &:active {
    background-color: ${(i) => i.$isCurrent ? "#293239" : "rgba(92, 105, 112, 0.16)"};
  }
`, d = o.div`
  display: flex;
  flex: 1;
  gap: 8px;
  align-items: center;
  min-width: 0;
`, p = o.p`
  flex: 1;
  font-family: 'SF Pro Text', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.154px;
  color: ${(i) => i.$isCurrent ? "white" : "#293239"};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0;
`, G = o.div`
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
`, he = o.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`, ge = o.div`
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
`, ue = o.div`
  display: flex;
  flex: 1;
  gap: 8px;
  align-items: center;
  padding: 12px 4px 12px 8px;
`, xe = o.p`
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
`, fe = o.div`
  flex: 1;
  height: 1px;
  background-color: #d8dcde;
  min-width: 0;
`, be = o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 100%;
  flex-shrink: 0;
`, Nn = () => {
  const [i, x] = C("agents"), [t, f] = C(!0), [a, v] = C(!0), r = (T) => {
    x(T);
  };
  return /* @__PURE__ */ n(Tn, { children: [
    /* @__PURE__ */ n(Mn, { children: [
      /* @__PURE__ */ e(Bn, { children: "AI agents" }),
      /* @__PURE__ */ e(Ce, { "aria-label": "Add new", children: /* @__PURE__ */ e(O, { size: 20, color: "#5C6970" }) })
    ] }),
    /* @__PURE__ */ n(R, { children: [
      /* @__PURE__ */ n(
        s,
        {
          $isCurrent: i === "agents",
          onClick: () => r("agents"),
          children: [
            /* @__PURE__ */ n(d, { children: [
              /* @__PURE__ */ e(F, { size: 20, color: i === "agents" ? "white" : "#5C6970" }),
              /* @__PURE__ */ e(p, { $isCurrent: i === "agents", children: "Agents" })
            ] }),
            /* @__PURE__ */ e(c, { "aria-label": "More options", children: /* @__PURE__ */ e(l, { size: 16, color: i === "agents" ? "white" : "#5C6970" }) })
          ]
        }
      ),
      /* @__PURE__ */ n(
        s,
        {
          $isCurrent: i === "conversations",
          onClick: () => r("conversations"),
          children: [
            /* @__PURE__ */ n(d, { children: [
              /* @__PURE__ */ e(Le, { size: 20, color: "#5C6970" }),
              /* @__PURE__ */ e(p, { $isCurrent: i === "conversations", children: "Conversations" })
            ] }),
            /* @__PURE__ */ e(c, { "aria-label": "More options", children: /* @__PURE__ */ e(l, { size: 16, color: "#5C6970" }) })
          ]
        }
      ),
      /* @__PURE__ */ n(
        s,
        {
          $isCurrent: i === "settings",
          onClick: () => r("settings"),
          children: [
            /* @__PURE__ */ n(d, { children: [
              /* @__PURE__ */ e(A, { size: 20, color: "#5C6970" }),
              /* @__PURE__ */ e(p, { $isCurrent: i === "settings", children: "Settings" })
            ] }),
            /* @__PURE__ */ e(c, { "aria-label": "More options", children: /* @__PURE__ */ e(l, { size: 16, color: "#5C6970" }) })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ n(he, { children: [
      /* @__PURE__ */ n(ge, { onClick: () => f(!t), children: [
        /* @__PURE__ */ n(ue, { children: [
          /* @__PURE__ */ e(xe, { children: "Agent Management" }),
          /* @__PURE__ */ e(fe, {})
        ] }),
        /* @__PURE__ */ e(be, { children: t ? /* @__PURE__ */ e(q, { size: 16, color: "#5C6970" }) : /* @__PURE__ */ e(m, { size: 16, color: "#5C6970" }) })
      ] }),
      t && /* @__PURE__ */ n(R, { children: [
        /* @__PURE__ */ n(
          s,
          {
            $isCurrent: i === "agent-builder",
            onClick: () => r("agent-builder"),
            children: [
              /* @__PURE__ */ n(d, { children: [
                /* @__PURE__ */ e(p, { $isCurrent: i === "agent-builder", children: "Agent builder" }),
                /* @__PURE__ */ e(G, { children: "123" })
              ] }),
              /* @__PURE__ */ e(c, { "aria-label": "More options", children: /* @__PURE__ */ e(l, { size: 16, color: "#5C6970" }) })
            ]
          }
        ),
        /* @__PURE__ */ n(
          s,
          {
            $isCurrent: i === "templates",
            onClick: () => r("templates"),
            children: [
              /* @__PURE__ */ n(d, { children: [
                /* @__PURE__ */ e(p, { $isCurrent: i === "templates", children: "Templates" }),
                /* @__PURE__ */ e(G, { children: "123" })
              ] }),
              /* @__PURE__ */ e(c, { "aria-label": "More options", children: /* @__PURE__ */ e(l, { size: 16, color: "#5C6970" }) })
            ]
          }
        ),
        /* @__PURE__ */ n(
          s,
          {
            $isCurrent: i === "workflows",
            onClick: () => r("workflows"),
            children: [
              /* @__PURE__ */ n(d, { children: [
                /* @__PURE__ */ e(p, { $isCurrent: i === "workflows", children: "Workflows" }),
                /* @__PURE__ */ e(G, { children: "123" })
              ] }),
              /* @__PURE__ */ e(c, { "aria-label": "More options", children: /* @__PURE__ */ e(l, { size: 16, color: "#5C6970" }) })
            ]
          }
        ),
        /* @__PURE__ */ n(
          s,
          {
            $isCurrent: i === "monitoring",
            onClick: () => r("monitoring"),
            children: [
              /* @__PURE__ */ n(d, { children: [
                /* @__PURE__ */ e(p, { $isCurrent: i === "monitoring", children: "Monitoring" }),
                /* @__PURE__ */ e(G, { children: "123" })
              ] }),
              /* @__PURE__ */ e(c, { "aria-label": "More options", children: /* @__PURE__ */ e(l, { size: 16, color: "#5C6970" }) })
            ]
          }
        ),
        /* @__PURE__ */ n(
          s,
          {
            $isCurrent: i === "permissions",
            onClick: () => r("permissions"),
            children: [
              /* @__PURE__ */ n(d, { children: [
                /* @__PURE__ */ e(p, { $isCurrent: i === "permissions", children: "Permissions" }),
                /* @__PURE__ */ e(G, { children: "123" })
              ] }),
              /* @__PURE__ */ e(c, { "aria-label": "More options", children: /* @__PURE__ */ e(l, { size: 16, color: "#5C6970" }) })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ n(he, { children: [
      /* @__PURE__ */ n(ge, { onClick: () => v(!a), children: [
        /* @__PURE__ */ n(ue, { children: [
          /* @__PURE__ */ e(xe, { children: "Data & Integration" }),
          /* @__PURE__ */ e(fe, {})
        ] }),
        /* @__PURE__ */ e(be, { children: a ? /* @__PURE__ */ e(q, { size: 16, color: "#5C6970" }) : /* @__PURE__ */ e(m, { size: 16, color: "#5C6970" }) })
      ] }),
      a && /* @__PURE__ */ n(R, { children: [
        /* @__PURE__ */ n(
          s,
          {
            $isCurrent: i === "data-sources",
            onClick: () => r("data-sources"),
            children: [
              /* @__PURE__ */ e(d, { children: /* @__PURE__ */ e(p, { $isCurrent: i === "data-sources", children: "Data sources" }) }),
              /* @__PURE__ */ e(c, { "aria-label": "More options", children: /* @__PURE__ */ e(l, { size: 16, color: "#5C6970" }) })
            ]
          }
        ),
        /* @__PURE__ */ n(
          s,
          {
            $isCurrent: i === "knowledge-base",
            onClick: () => r("knowledge-base"),
            children: [
              /* @__PURE__ */ e(d, { children: /* @__PURE__ */ e(p, { $isCurrent: i === "knowledge-base", children: "Knowledge base" }) }),
              /* @__PURE__ */ e(c, { "aria-label": "More options", children: /* @__PURE__ */ e(l, { size: 16, color: "#5C6970" }) })
            ]
          }
        ),
        /* @__PURE__ */ n(
          s,
          {
            $isCurrent: i === "integrations",
            onClick: () => r("integrations"),
            children: [
              /* @__PURE__ */ e(d, { children: /* @__PURE__ */ e(p, { $isCurrent: i === "integrations", children: "Integrations" }) }),
              /* @__PURE__ */ e(c, { "aria-label": "More options", children: /* @__PURE__ */ e(l, { size: 16, color: "#5C6970" }) })
            ]
          }
        ),
        /* @__PURE__ */ n(
          s,
          {
            $isCurrent: i === "api-connections",
            onClick: () => r("api-connections"),
            children: [
              /* @__PURE__ */ e(d, { children: /* @__PURE__ */ e(p, { $isCurrent: i === "api-connections", children: "API connections" }) }),
              /* @__PURE__ */ e(c, { "aria-label": "More options", children: /* @__PURE__ */ e(l, { size: 16, color: "#5C6970" }) })
            ]
          }
        ),
        /* @__PURE__ */ n(
          s,
          {
            $isCurrent: i === "webhooks",
            onClick: () => r("webhooks"),
            children: [
              /* @__PURE__ */ e(d, { children: /* @__PURE__ */ e(p, { $isCurrent: i === "webhooks", children: "Webhooks" }) }),
              /* @__PURE__ */ e(c, { "aria-label": "More options", children: /* @__PURE__ */ e(l, { size: 16, color: "#5C6970" }) })
            ]
          }
        ),
        /* @__PURE__ */ n(
          s,
          {
            $isCurrent: i === "logs",
            onClick: () => r("logs"),
            children: [
              /* @__PURE__ */ e(d, { children: /* @__PURE__ */ e(p, { $isCurrent: i === "logs", children: "Logs" }) }),
              /* @__PURE__ */ e(c, { "aria-label": "More options", children: /* @__PURE__ */ e(l, { size: 16, color: "#5C6970" }) })
            ]
          }
        )
      ] })
    ] })
  ] });
}, Gn = o.div`
  flex: 1;
  width: 100%;
  padding: 24px;
  overflow: auto;
`, Fn = () => /* @__PURE__ */ n(Gn, { children: [
  /* @__PURE__ */ e(u, { tag: "h1", style: { marginBottom: "16px" }, children: "Support's main content area" }),
  /* @__PURE__ */ e("p", { children: "This is where your Support page content will be displayed." })
] }), jn = o.div`
  flex: 1;
  width: 100%;
  padding: 24px;
  overflow: auto;
`, Dn = () => /* @__PURE__ */ n(jn, { children: [
  /* @__PURE__ */ e(u, { tag: "h1", style: { marginBottom: "16px" }, children: "Knowledge's main content area" }),
  /* @__PURE__ */ e("p", { children: "This is where your Knowledge page content will be displayed." })
] }), Ln = o.div`
  flex: 1;
  width: 100%;
  padding: 24px;
  overflow: auto;
`, Wn = () => /* @__PURE__ */ n(Ln, { children: [
  /* @__PURE__ */ e(u, { tag: "h1", style: { marginBottom: "16px" }, children: "AI agents's main content area" }),
  /* @__PURE__ */ e("p", { children: "This is where your AI agents page content will be displayed." })
] }), En = o.div`
  flex: 1;
  width: 100%;
  padding: 24px;
  overflow: auto;
`, Hn = () => /* @__PURE__ */ n(En, { children: [
  /* @__PURE__ */ e(u, { tag: "h1", style: { marginBottom: "16px" }, children: "Chat's main content area" }),
  /* @__PURE__ */ e("p", { children: "This is where your Chat page content will be displayed." })
] }), Kn = o.div`
  flex: 1;
  width: 100%;
  padding: 24px;
  overflow: auto;
`, Rn = () => /* @__PURE__ */ n(Kn, { children: [
  /* @__PURE__ */ e(u, { tag: "h1", style: { marginBottom: "16px" }, children: "Voice's main content area" }),
  /* @__PURE__ */ e("p", { children: "This is where your Voice page content will be displayed." })
] }), qn = o.div`
  flex: 1;
  width: 100%;
  padding: 24px;
  overflow: auto;
`, Qn = () => /* @__PURE__ */ n(qn, { children: [
  /* @__PURE__ */ e(u, { tag: "h1", style: { marginBottom: "16px" }, children: "Analytics's main content area" }),
  /* @__PURE__ */ e("p", { children: "This is where your Analytics page content will be displayed." })
] }), On = o.div`
  flex: 1;
  width: 100%;
  padding: 24px;
  overflow: auto;
`, Vn = () => /* @__PURE__ */ n(On, { children: [
  /* @__PURE__ */ e(u, { tag: "h1", style: { marginBottom: "16px" }, children: "Workforce management's main content area" }),
  /* @__PURE__ */ e("p", { children: "This is where your Workforce management page content will be displayed." })
] }), Jn = o.div`
  flex: 1;
  width: 100%;
  padding: 24px;
  overflow: auto;
`, Un = () => /* @__PURE__ */ n(Jn, { children: [
  /* @__PURE__ */ e(u, { tag: "h1", style: { marginBottom: "16px" }, children: "Quality assurance's main content area" }),
  /* @__PURE__ */ e("p", { children: "This is where your Quality assurance page content will be displayed." })
] }), Xn = o.div`
  flex: 1;
  width: 100%;
  padding: 24px;
  overflow: auto;
`, Zn = () => /* @__PURE__ */ n(Xn, { children: [
  /* @__PURE__ */ e(u, { tag: "h1", style: { marginBottom: "16px" }, children: "Community's main content area" }),
  /* @__PURE__ */ e("p", { children: "This is where your Community page content will be displayed." })
] }), Yn = o.div`
  flex: 1;
  width: 100%;
  padding: 24px;
  overflow: auto;
`, _n = () => /* @__PURE__ */ n(Yn, { children: [
  /* @__PURE__ */ e(u, { tag: "h1", style: { marginBottom: "16px" }, children: "Sales's main content area" }),
  /* @__PURE__ */ e("p", { children: "This is where your Sales page content will be displayed." })
] }), ei = o.div`
  flex: 1;
  width: 100%;
  padding: 24px;
  overflow: auto;
`, ni = () => /* @__PURE__ */ n(ei, { children: [
  /* @__PURE__ */ e(u, { tag: "h1", style: { marginBottom: "16px" }, children: "Admin center's main content area" }),
  /* @__PURE__ */ e("p", { children: "This is where your Admin center page content will be displayed." })
] }), ii = o.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
  background-color: #f8f9f9;
  position: relative;
  isolation: isolate;
`, oi = o.div`
  display: flex;
  flex: 1;
  width: 100%;
  z-index: 1;
  overflow: hidden;
`, ti = o.div`
  display: flex;
`, ri = o.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 56px;
  height: 100%;
  padding: 12px 0;
  background-color: #f8f9f9;
  position: relative;
`, ai = o.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 231px;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(92, 105, 112, 0.08));
  pointer-events: none;
`, li = o.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  z-index: 1;
`, ci = o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 48px;
`, si = o.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  background-color: ${(i) => i.$isActive ? "#293239" : "transparent"};
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s;
  padding: 0;

  &:hover {
    background-color: ${(i) => i.$isActive ? "#293239" : "rgba(0, 0, 0, 0.08)"};
  }
`, di = o.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  z-index: 1;
`, pi = o.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 56px;
  height: 48px;
  padding: 0 16px;
`, hi = o.div`
  width: 23px;
  height: 1px;
  background-color: #d8dcde;
`, gi = o.button`
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
`, ui = o.main`
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
`, yi = () => {
  const [i, x] = C(0), [t, f] = C("support"), [a, v] = C(!1), r = (h) => {
    f(h), x(0), v(!1);
  }, D = t === "admin-center" ? [
    { id: 0, icon: E, label: "Home" },
    { id: 1, icon: ie, label: "Account" },
    { id: 2, icon: oe, label: "People" },
    { id: 3, icon: We, label: "Channels" },
    { id: 4, icon: Ee, label: "AI" },
    { id: 5, icon: He, label: "Workspaces" },
    { id: 6, icon: Ke, label: "Objects & rules" },
    { id: 7, icon: Re, label: "Apps and integrations" }
  ] : t === "knowledge" ? [
    { id: 0, icon: E, label: "Home" },
    { id: 1, icon: qe, label: "Knowledge" },
    { id: 2, icon: Qe, label: "Moderate content" },
    { id: 3, icon: Oe, label: "Arrange content" },
    { id: 4, icon: Ve, label: "Customize design" },
    { id: 5, icon: te, label: "User permissions" },
    { id: 6, icon: A, label: "Settings" }
  ] : t === "ai-agents" ? [
    { id: 0, icon: F, label: "Analytics" },
    { id: 1, icon: Je, label: "Content" },
    { id: 2, icon: re, label: "Conversations" },
    { id: 3, icon: A, label: "Settings" },
    { id: 4, icon: null, label: "separator" },
    // Separator
    { id: 5, icon: Ue, label: "AI agent management" },
    { id: 6, icon: te, label: "Permissions" },
    { id: 7, icon: ae, label: "Database" },
    { id: 8, icon: Xe, label: "Apps" },
    { id: 9, icon: Ze, label: "Integrations" }
  ] : t === "analytics" ? [
    { id: 0, icon: le, label: "Real-time monitoring" },
    { id: 1, icon: ce, label: "Dashboard" },
    { id: 2, icon: F, label: "Reports" },
    { id: 3, icon: ae, label: "Data" },
    { id: 4, icon: Ye, label: "Export" },
    { id: 5, icon: A, label: "Settings" }
  ] : t === "quality-assurance" ? [
    { id: 0, icon: ce, label: "Dashboard" },
    { id: 1, icon: re, label: "Conversations" },
    { id: 2, icon: _e, label: "Reviews" },
    { id: 3, icon: se, label: "Inbox" },
    { id: 4, icon: en, label: "Training" }
  ] : t === "workforce-management" ? [
    { id: 0, icon: le, label: "Real-time monitoring" },
    { id: 1, icon: F, label: "Analytics" },
    { id: 2, icon: nn, label: "Forecasting" },
    { id: 3, icon: on, label: "Scheduling" },
    { id: 4, icon: oe, label: "Team" },
    { id: 5, icon: A, label: "Settings" }
  ] : [
    { id: 0, icon: E, label: "Home" },
    { id: 1, icon: se, label: "Inbox" },
    { id: 2, icon: tn, label: "Contacts" },
    { id: 3, icon: ie, label: "Organization" },
    { id: 4, icon: rn, label: "Custom Objects" },
    { id: 5, icon: F, label: "Analytics" },
    { id: 6, icon: A, label: "Settings" }
  ], Y = t === "knowledge", _ = t === "ai-agents", we = Y || _;
  return /* @__PURE__ */ e(Ie, { children: /* @__PURE__ */ n(ii, { children: [
    /* @__PURE__ */ e(
      mn,
      {
        currentProduct: t,
        onProductChange: r
      }
    ),
    /* @__PURE__ */ n(oi, { children: [
      /* @__PURE__ */ n(ti, { children: [
        /* @__PURE__ */ n(ri, { children: [
          /* @__PURE__ */ e(ai, {}),
          /* @__PURE__ */ e(li, { children: D.map((h) => {
            if (h.label === "separator")
              return /* @__PURE__ */ e(pi, { children: /* @__PURE__ */ e(hi, {}) }, h.id);
            const ee = i === h.id, ne = typeof h.icon == "function" ? h.icon : null;
            return /* @__PURE__ */ e(ci, { children: /* @__PURE__ */ e(
              si,
              {
                $isActive: ee,
                onClick: () => x(h.id),
                "aria-label": h.label,
                children: ne ? /* @__PURE__ */ e(ne, { size: 20, color: ee ? "white" : "#5C6970" }) : h.icon
              }
            ) }, h.id);
          }) }),
          /* @__PURE__ */ e(di, { children: we && /* @__PURE__ */ e(
            gi,
            {
              onClick: () => v(!a),
              "aria-label": a ? "Collapse" : "Expand",
              children: /* @__PURE__ */ e(an, { size: 20, color: "#5C6970" })
            }
          ) })
        ] }),
        Y && a && /* @__PURE__ */ e(Pn, {}),
        _ && a && /* @__PURE__ */ e(Nn, {})
      ] }),
      /* @__PURE__ */ n(ui, { children: [
        t === "support" && /* @__PURE__ */ e(Fn, {}),
        t === "knowledge" && /* @__PURE__ */ e(Dn, {}),
        t === "ai-agents" && /* @__PURE__ */ e(Wn, {}),
        t === "chat" && /* @__PURE__ */ e(Hn, {}),
        t === "voice" && /* @__PURE__ */ e(Rn, {}),
        t === "analytics" && /* @__PURE__ */ e(Qn, {}),
        t === "workforce-management" && /* @__PURE__ */ e(Vn, {}),
        t === "quality-assurance" && /* @__PURE__ */ e(Un, {}),
        t === "community" && /* @__PURE__ */ e(Zn, {}),
        t === "sales" && /* @__PURE__ */ e(_n, {}),
        t === "admin-center" && /* @__PURE__ */ e(ni, {})
      ] })
    ] })
  ] }) });
};
export {
  Wn as A,
  Hn as C,
  yi as G,
  Dn as K,
  dn as P,
  Un as Q,
  _n as S,
  mn as T,
  Rn as V,
  Vn as W,
  Nn as a,
  ni as b,
  Qn as c,
  Zn as d,
  Pn as e,
  Fn as f,
  Q as p
};
//# sourceMappingURL=GlobalNavPageTemplate-y3tcxAfd.js.map
