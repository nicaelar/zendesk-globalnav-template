import { jsx as e, jsxs as o, Fragment as k } from "react/jsx-runtime";
import { useState as m, useRef as W, useEffect as q } from "react";
import n from "styled-components";
import { ThemeProvider as J } from "@zendeskgarden/react-theming";
import { y as Q, v as U, q as V, t as R, z as D, s as Z, E as X, w as Y, u as _, x as ee, r as ne, Z as oe, C as F, M as G, R as L, n as I, p as O, a as ie, i as te, h as p, H as S, f as H, m as re, l as ce, K as ae, k as le, F as de, A as se, c as pe, d as he, j as ge, P as xe, o as ue, G as K, I as fe, b as be, S as me, B as ve, J as ye } from "./GlobalNavIcons-BE5P7B_O.js";
import { Avatar as z } from "@zendeskgarden/react-avatars";
const we = n.div`
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
`, Ce = n.button`
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
`, ke = n.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
`, $ = [
  { id: "support", name: "Support", icon: Q },
  { id: "knowledge", name: "Knowledge", icon: U },
  { id: "ai-agents", name: "AI agents", icon: V },
  { id: "chat", name: "Chat", icon: R },
  { id: "voice", name: "Voice", icon: D },
  { id: "analytics", name: "Analytics", icon: Z },
  { id: "workforce-management", name: "Workforce management", icon: X },
  { id: "quality-assurance", name: "Quality assurance", icon: Y },
  { id: "community", name: "Community", icon: _ },
  { id: "sales", name: "Sales", icon: ee },
  { id: "admin-center", name: "Admin center", icon: ne }
], Ie = ({ currentProduct: i = "support", onSelectProduct: l, onClose: r }) => {
  const d = (t) => {
    l?.(t), r?.();
  };
  return /* @__PURE__ */ e(we, { children: $.map((t) => {
    const h = t.icon, g = t.id === i;
    return /* @__PURE__ */ o(
      Ce,
      {
        $isActive: g,
        onClick: () => d(t.id),
        children: [
          /* @__PURE__ */ e(ke, { children: /* @__PURE__ */ e(h, { size: 20, color: g ? "white" : "#5C6970" }) }),
          /* @__PURE__ */ e("span", { children: t.name })
        ]
      },
      t.id
    );
  }) });
}, Se = n.header`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  background-color: #f8f9f9;
  width: 100%;
  height: 48px;
  position: relative;
  z-index: 10;
`, ze = n.div`
  display: flex;
  align-items: center;
  gap: 8px;
`, Pe = n.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding-right: 4px;
`, P = n.div`
  display: flex;
  align-items: center;
  gap: 8px;
`, Ae = n.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  width: 40px;
`, E = n.div`
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
`, $e = n.span`
  font-family: 'SF Pro Text', sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: -0.154px;
  color: #293239;
`, Te = n.div`
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
`, je = n.div`
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
`, v = n.div`
  width: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`, y = n.div`
  width: 1px;
  height: 24px;
  background-color: #d8dcde;
`, Ne = n.button`
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
`, A = n.button`
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
`, x = n.button`
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
`, Be = n.div`
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
n.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
const Fe = ({ currentProduct: i = "support", onProductChange: l }) => {
  const [r, d] = m(!1), t = W(null), h = (s) => {
    l?.(s);
  };
  q(() => {
    const s = (C) => {
      t.current && !t.current.contains(C.target) && d(!1);
    };
    if (r)
      return document.addEventListener("mousedown", s), () => document.removeEventListener("mousedown", s);
  }, [r]);
  const g = $.find((s) => s.id === i) || $[0], w = i === "admin-center", T = i === "knowledge";
  return /* @__PURE__ */ o(Se, { children: [
    /* @__PURE__ */ o(ze, { children: [
      /* @__PURE__ */ e(Ae, { children: /* @__PURE__ */ e(oe, { size: 20 }) }),
      /* @__PURE__ */ o(
        E,
        {
          ref: t,
          onClick: () => d(!r),
          children: [
            /* @__PURE__ */ e($e, { children: g.name }),
            /* @__PURE__ */ e(F, { size: 12 }),
            r && /* @__PURE__ */ e(
              Ie,
              {
                currentProduct: i,
                onSelectProduct: h,
                onClose: () => d(!1)
              }
            )
          ]
        }
      )
    ] }),
    /* @__PURE__ */ e(Pe, { children: w ? (
      // Admin Center Header
      /* @__PURE__ */ o(k, { children: [
        /* @__PURE__ */ o("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
          /* @__PURE__ */ e(v, { children: /* @__PURE__ */ e(y, {}) }),
          /* @__PURE__ */ e(Te, { children: "Camera obscura" })
        ] }),
        /* @__PURE__ */ o(P, { children: [
          /* @__PURE__ */ o(je, { children: [
            /* @__PURE__ */ e(G, { size: 16 }),
            /* @__PURE__ */ e("span", { children: "Search admin center" })
          ] }),
          /* @__PURE__ */ e(x, { children: /* @__PURE__ */ e(L, { size: 20 }) }),
          /* @__PURE__ */ e(z, { size: "small", backgroundColor: "#f8f9f9", children: /* @__PURE__ */ e(I, { size: 16, color: "#5C6970" }) })
        ] })
      ] })
    ) : T ? (
      // Knowledge Header
      /* @__PURE__ */ o(k, { children: [
        /* @__PURE__ */ o("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
          /* @__PURE__ */ e(v, { children: /* @__PURE__ */ e(y, {}) }),
          /* @__PURE__ */ o(E, { children: [
            /* @__PURE__ */ e("span", { style: { fontSize: "12px", fontWeight: 600, lineHeight: "16px", letterSpacing: "-0.0004px", color: "#293239" }, children: "Joe's Coffee" }),
            /* @__PURE__ */ e(F, { size: 12 })
          ] })
        ] }),
        /* @__PURE__ */ o(P, { children: [
          /* @__PURE__ */ o("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
            /* @__PURE__ */ e(A, { size: "small", children: "Create content" }),
            /* @__PURE__ */ e(A, { size: "small", disabled: !0, children: "Help center" })
          ] }),
          /* @__PURE__ */ e(x, { children: /* @__PURE__ */ e(L, { size: 20 }) }),
          /* @__PURE__ */ e(z, { size: "small", backgroundColor: "#f8f9f9", children: /* @__PURE__ */ e(I, { size: 16, color: "#5C6970" }) })
        ] })
      ] })
    ) : (
      // Default Header
      /* @__PURE__ */ o(k, { children: [
        /* @__PURE__ */ o("div", { style: { display: "flex", alignItems: "center" }, children: [
          /* @__PURE__ */ e(v, { children: /* @__PURE__ */ e(y, {}) }),
          /* @__PURE__ */ o(Ne, { children: [
            /* @__PURE__ */ e(O, { size: 12 }),
            /* @__PURE__ */ e("span", { children: "Add" })
          ] })
        ] }),
        /* @__PURE__ */ o(P, { children: [
          /* @__PURE__ */ o("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
            /* @__PURE__ */ e(x, { children: /* @__PURE__ */ e(G, { size: 20 }) }),
            /* @__PURE__ */ e(A, { size: "small", disabled: !0, children: "Conversations" }),
            /* @__PURE__ */ e(x, { children: /* @__PURE__ */ e(R, { size: 20 }) }),
            /* @__PURE__ */ e(x, { children: /* @__PURE__ */ e(D, { size: 20 }) })
          ] }),
          /* @__PURE__ */ e(v, { children: /* @__PURE__ */ e(y, {}) }),
          /* @__PURE__ */ o(x, { children: [
            /* @__PURE__ */ e(ie, { size: 20 }),
            /* @__PURE__ */ e(Be, { children: "1" })
          ] }),
          /* @__PURE__ */ e(z, { size: "small", backgroundColor: "#f8f9f9", children: /* @__PURE__ */ e(I, { size: 16, color: "#5C6970" }) })
        ] })
      ] })
    ) })
  ] });
}, Ge = n.div`
  display: flex;
  flex-direction: column;
  width: 240px;
  height: 100%;
  background-color: #f8f9f9;
  padding: 8px;
`, Le = n.div`
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 12px 12px 12px 12px;
  width: 100%;
`, He = n.h2`
  flex: 1;
  font-family: 'SF Pro Text', sans-serif;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.45px;
  color: #2f3941;
  margin: 0;
  padding: 4px 0;
`, Ke = n.button`
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
`, M = n.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding-bottom: 12px;
  width: 100%;
`, b = n.div`
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
`, c = n.p`
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
`, u = n.div`
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
`, Ee = n.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`, Me = n.div`
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
`, Re = n.div`
  display: flex;
  flex: 1;
  gap: 8px;
  align-items: center;
  padding: 12px 8px 12px 8px;
`, De = n.p`
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
`, Oe = n.div`
  flex: 1;
  height: 1px;
  background-color: #d8dcde;
`, We = n.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 100%;
`, f = n(b)`
  padding-left: ${(i) => i.$depth * 24 + 12}px;
`, qe = () => {
  const [i, l] = m(!0);
  return /* @__PURE__ */ o(Ge, { children: [
    /* @__PURE__ */ o(Le, { children: [
      /* @__PURE__ */ e(He, { children: "Knowledge" }),
      /* @__PURE__ */ e(Ke, { children: /* @__PURE__ */ e(O, { size: 20, color: "#5C6970" }) })
    ] }),
    /* @__PURE__ */ e(M, { children: /* @__PURE__ */ e(b, { $isCurrent: !0, children: /* @__PURE__ */ e(c, { $isCurrent: !0, children: "Sources" }) }) }),
    /* @__PURE__ */ o(Ee, { children: [
      /* @__PURE__ */ o(Me, { onClick: () => l(!i), children: [
        /* @__PURE__ */ o(Re, { children: [
          /* @__PURE__ */ e(De, { children: "Content" }),
          /* @__PURE__ */ e(Oe, {})
        ] }),
        /* @__PURE__ */ e(We, { children: i ? /* @__PURE__ */ e(te, { size: 16, color: "#5C6970" }) : /* @__PURE__ */ e(p, { size: 16, color: "#5C6970" }) })
      ] }),
      i && /* @__PURE__ */ o(M, { children: [
        /* @__PURE__ */ o(b, { children: [
          /* @__PURE__ */ e(c, { children: "All content" }),
          /* @__PURE__ */ e(u, { children: "24" })
        ] }),
        /* @__PURE__ */ o(f, { $depth: 0, children: [
          /* @__PURE__ */ e(p, { size: 16, color: "#5C6970" }),
          /* @__PURE__ */ e(c, { style: { marginLeft: "8px" }, children: "Joe's Coffee" }),
          /* @__PURE__ */ e(u, { children: "24" })
        ] }),
        /* @__PURE__ */ o(f, { $depth: 1, children: [
          /* @__PURE__ */ e(p, { size: 16, color: "#5C6970" }),
          /* @__PURE__ */ e(c, { style: { marginLeft: "8px" }, children: "Getting Started" })
        ] }),
        /* @__PURE__ */ o(f, { $depth: 1, children: [
          /* @__PURE__ */ e(p, { size: 16, color: "#5C6970" }),
          /* @__PURE__ */ e(c, { style: { marginLeft: "8px" }, children: "Troubleshooting Guides" })
        ] }),
        /* @__PURE__ */ o(f, { $depth: 1, children: [
          /* @__PURE__ */ e(p, { size: 16, color: "#5C6970" }),
          /* @__PURE__ */ e(c, { style: { marginLeft: "8px" }, children: "Product FAQs" })
        ] }),
        /* @__PURE__ */ o(f, { $depth: 1, children: [
          /* @__PURE__ */ e(p, { size: 16, color: "#5C6970" }),
          /* @__PURE__ */ e(c, { style: { marginLeft: "8px" }, children: "Policies and Procedures" })
        ] }),
        /* @__PURE__ */ o(f, { $depth: 0, children: [
          /* @__PURE__ */ e(p, { size: 16, color: "#5C6970" }),
          /* @__PURE__ */ e(c, { style: { marginLeft: "8px" }, children: "Confluence" }),
          /* @__PURE__ */ e(u, { children: "124" })
        ] }),
        /* @__PURE__ */ o(b, { children: [
          /* @__PURE__ */ e(c, { children: "Content blocks" }),
          /* @__PURE__ */ e(u, { children: "0" })
        ] }),
        /* @__PURE__ */ o(b, { children: [
          /* @__PURE__ */ e(c, { children: "Procedures" }),
          /* @__PURE__ */ e(u, { children: "12" })
        ] }),
        /* @__PURE__ */ o(b, { children: [
          /* @__PURE__ */ e(c, { children: "Media" }),
          /* @__PURE__ */ e(u, { children: "0" })
        ] })
      ] })
    ] })
  ] });
}, Je = n.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
  background-color: #f8f9f9;
  position: relative;
  isolation: isolate;
`, Qe = n.div`
  display: flex;
  flex: 1;
  width: 100%;
  z-index: 1;
  overflow: hidden;
`, Ue = n.div`
  display: flex;
`, Ve = n.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 56px;
  height: 100%;
  padding: 12px 0;
  background-color: #f8f9f9;
  position: relative;
`, Ze = n.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 231px;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(92, 105, 112, 0.08));
  pointer-events: none;
`, Xe = n.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  z-index: 1;
`, Ye = n.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 48px;
`, _e = n.button`
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
`, en = n.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  z-index: 1;
`, nn = n.button`
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
`, on = n.main`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: white;
  border: 1px solid transparent;
  border-top-left-radius: 8px;
  box-shadow: 0px 0px 4px 0px rgba(10, 13, 14, 0.16);
  overflow: hidden;
`, tn = n.div`
  flex: 1;
  width: 100%;
  padding: 24px;
  overflow: auto;
`, pn = () => {
  const [i, l] = m(0), [r, d] = m("support"), [t, h] = m(!1), g = (a) => {
    d(a), l(0), h(!1);
  }, C = r === "admin-center" ? [
    { id: 0, icon: S, label: "Home" },
    { id: 1, icon: H, label: "Account" },
    { id: 2, icon: re, label: "People" },
    { id: 3, icon: ce, label: "Channels" },
    { id: 4, icon: ae, label: "AI" },
    { id: 5, icon: le, label: "Workspaces" },
    { id: 6, icon: de, label: "Objects & rules" },
    { id: 7, icon: se, label: "Apps and integrations" }
  ] : r === "knowledge" ? [
    { id: 0, icon: S, label: "Home" },
    { id: 1, icon: pe, label: "Knowledge" },
    { id: 2, icon: he, label: "Moderate content" },
    { id: 3, icon: ge, label: "Arrange content" },
    { id: 4, icon: xe, label: "Customize design" },
    { id: 5, icon: ue, label: "User permissions" },
    { id: 6, icon: K, label: "Settings" }
  ] : [
    { id: 0, icon: S, label: "Home" },
    { id: 1, icon: fe, label: "Inbox" },
    { id: 2, icon: be, label: "Contacts" },
    { id: 3, icon: H, label: "Organization" },
    { id: 4, icon: me, label: "Custom Objects" },
    { id: 5, icon: ve, label: "Analytics" },
    { id: 6, icon: K, label: "Settings" }
  ], j = r === "knowledge";
  return /* @__PURE__ */ e(J, { children: /* @__PURE__ */ o(Je, { children: [
    /* @__PURE__ */ e(
      Fe,
      {
        currentProduct: r,
        onProductChange: g
      }
    ),
    /* @__PURE__ */ o(Qe, { children: [
      /* @__PURE__ */ o(Ue, { children: [
        /* @__PURE__ */ o(Ve, { children: [
          /* @__PURE__ */ e(Ze, {}),
          /* @__PURE__ */ e(Xe, { children: C.map((a) => {
            const N = i === a.id, B = typeof a.icon == "function" ? a.icon : null;
            return /* @__PURE__ */ e(Ye, { children: /* @__PURE__ */ e(
              _e,
              {
                $isActive: N,
                onClick: () => l(a.id),
                "aria-label": a.label,
                children: B ? /* @__PURE__ */ e(B, { size: 20, color: N ? "white" : "#5C6970" }) : a.icon
              }
            ) }, a.id);
          }) }),
          /* @__PURE__ */ e(en, { children: j && /* @__PURE__ */ e(
            nn,
            {
              onClick: () => h(!t),
              "aria-label": t ? "Collapse" : "Expand",
              children: /* @__PURE__ */ e(ye, { size: 20, color: "#5C6970" })
            }
          ) })
        ] }),
        j && t && /* @__PURE__ */ e(qe, {})
      ] }),
      /* @__PURE__ */ e(on, { children: /* @__PURE__ */ o(tn, { children: [
        /* @__PURE__ */ e("h1", { children: "Content Area" }),
        /* @__PURE__ */ e("p", { children: "This is where your page content will be displayed." })
      ] }) })
    ] })
  ] }) });
};
export {
  pn as G,
  qe as K,
  Ie as P,
  Fe as T,
  $ as p
};
//# sourceMappingURL=GlobalNavPageTemplate-DD0mGBcY.js.map
