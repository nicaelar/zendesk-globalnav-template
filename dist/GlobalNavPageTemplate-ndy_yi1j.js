import { jsx as e, jsxs as n, Fragment as w } from "react/jsx-runtime";
import { useState as C, useRef as fe, useEffect as be } from "react";
import o from "styled-components";
import { ThemeProvider as me } from "@zendeskgarden/react-theming";
import { Avatar as y } from "@zendeskgarden/react-avatars";
import { U as ve, R as Ce, z as we, O as oe, V as te, K as ye, W as ke, S as Ie, Q as ze, T as Se, J as $e, a4 as Ae, i as W, M, X as H, v as k, E as Te, y as V, a as Pe, Y as Me, H as J, g as re, u as ae, t as Be, $ as Ge, s as Fe, F as Ne, A as je, c as De, d as Le, p as Ke, P as We, w as le, G as P, B as N, N as He, f as ce, a2 as Ee, D as se, a1 as Re, x as qe, r as de, L as pe, m as Qe, h as Oe, I as he, q as Ve, n as Je, C as Ue, b as Xe, Z as Ze, _ as Ye, l as Q, k as v, o as l, e as _e } from "./GlobalNavIcons-D6JQQ4hD.js";
import { XL as f } from "@zendeskgarden/react-typography";
const en = o.div`
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
`, nn = o.button`
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
`, on = o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
`, O = [
  { id: "support", name: "Support", icon: ve },
  { id: "knowledge", name: "Knowledge", icon: Ce },
  { id: "ai-agents", name: "AI agents", icon: we },
  { id: "chat", name: "Chat", icon: oe },
  { id: "voice", name: "Voice", icon: te },
  { id: "analytics", name: "Analytics", icon: ye },
  { id: "workforce-management", name: "Workforce management", icon: ke },
  { id: "quality-assurance", name: "Quality assurance", icon: Ie },
  { id: "community", name: "Community", icon: ze },
  { id: "sales", name: "Sales", icon: Se },
  { id: "admin-center", name: "Admin center", icon: $e }
], tn = ({ currentProduct: i = "support", onSelectProduct: g, onClose: t }) => {
  const x = (r) => {
    g?.(r), t?.();
  };
  return /* @__PURE__ */ e(en, { children: O.map((r) => {
    const b = r.icon, a = r.id === i;
    return /* @__PURE__ */ n(
      nn,
      {
        $isActive: a,
        onClick: () => x(r.id),
        children: [
          /* @__PURE__ */ e(on, { children: /* @__PURE__ */ e(b, { size: 20, color: a ? "white" : "#5C6970" }) }),
          /* @__PURE__ */ e("span", { children: r.name })
        ]
      },
      r.id
    );
  }) });
}, rn = o.header`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  background-color: #f8f9f9;
  width: 100%;
  height: 48px;
  position: relative;
  z-index: 10;
`, an = o.div`
  display: flex;
  align-items: center;
  gap: 8px;
`, ln = o.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding-right: 4px;
`, I = o.div`
  display: flex;
  align-items: center;
  gap: 8px;
`, cn = o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  width: 40px;
`, E = o.div`
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
`, sn = o.span`
  font-family: 'SF Pro Text', sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: -0.154px;
  color: #293239;
`, U = o.div`
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
`, K = o.div`
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
`, G = o.div`
  width: 1px;
  height: 24px;
  background-color: #d8dcde;
`, dn = o.button`
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
`, R = o.button`
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
`, m = o.button`
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
`, pn = o.div`
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
const hn = ({ currentProduct: i = "support", onProductChange: g }) => {
  const [t, x] = C(!1), r = fe(null), b = (S) => {
    g?.(S);
  };
  be(() => {
    const S = (ue) => {
      r.current && !r.current.contains(ue.target) && x(!1);
    };
    if (t)
      return document.addEventListener("mousedown", S), () => document.removeEventListener("mousedown", S);
  }, [t]);
  const a = O.find((S) => S.id === i) || O[0], z = i === "admin-center", j = i === "knowledge", h = i === "ai-agents", D = i === "workforce-management", L = i === "quality-assurance", xe = i === "analytics";
  return /* @__PURE__ */ n(rn, { children: [
    /* @__PURE__ */ n(an, { children: [
      /* @__PURE__ */ e(cn, { children: /* @__PURE__ */ e(Ae, { size: 20 }) }),
      /* @__PURE__ */ n(
        E,
        {
          ref: r,
          onClick: () => x(!t),
          children: [
            /* @__PURE__ */ e(sn, { children: a.name }),
            /* @__PURE__ */ e(W, { size: 12 }),
            t && /* @__PURE__ */ e(
              tn,
              {
                currentProduct: i,
                onSelectProduct: b,
                onClose: () => x(!1)
              }
            )
          ]
        }
      )
    ] }),
    /* @__PURE__ */ e(ln, { children: z ? (
      // Admin Center Header
      /* @__PURE__ */ n(w, { children: [
        /* @__PURE__ */ n("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
          /* @__PURE__ */ e(B, { children: /* @__PURE__ */ e(G, {}) }),
          /* @__PURE__ */ e(U, { children: "Camera obscura" })
        ] }),
        /* @__PURE__ */ n(I, { children: [
          /* @__PURE__ */ n(K, { children: [
            /* @__PURE__ */ e(M, { size: 16 }),
            /* @__PURE__ */ e("span", { children: "Search admin center" })
          ] }),
          /* @__PURE__ */ e(m, { children: /* @__PURE__ */ e(H, { size: 20 }) }),
          /* @__PURE__ */ e(y, { size: "small", backgroundColor: "#f8f9f9", children: /* @__PURE__ */ e(k, { size: 16, color: "#5C6970" }) })
        ] })
      ] })
    ) : j ? (
      // Knowledge Header
      /* @__PURE__ */ n(w, { children: [
        /* @__PURE__ */ n("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
          /* @__PURE__ */ e(B, { children: /* @__PURE__ */ e(G, {}) }),
          /* @__PURE__ */ n(E, { children: [
            /* @__PURE__ */ e("span", { style: { fontSize: "12px", fontWeight: 600, lineHeight: "16px", letterSpacing: "-0.0004px", color: "#293239" }, children: "Joe's Coffee" }),
            /* @__PURE__ */ e(W, { size: 12 })
          ] })
        ] }),
        /* @__PURE__ */ n(I, { children: [
          /* @__PURE__ */ n("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
            /* @__PURE__ */ e(R, { size: "small", children: "Create content" }),
            /* @__PURE__ */ e(R, { size: "small", disabled: !0, children: "Help center" })
          ] }),
          /* @__PURE__ */ e(m, { children: /* @__PURE__ */ e(H, { size: 20 }) }),
          /* @__PURE__ */ e(y, { size: "small", backgroundColor: "#f8f9f9", children: /* @__PURE__ */ e(k, { size: 16, color: "#5C6970" }) })
        ] })
      ] })
    ) : h ? (
      // AI Agents Header
      /* @__PURE__ */ n(w, { children: [
        /* @__PURE__ */ n("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
          /* @__PURE__ */ e(B, { children: /* @__PURE__ */ e(G, {}) }),
          /* @__PURE__ */ e(U, { children: "Camera obscura" })
        ] }),
        /* @__PURE__ */ n(I, { children: [
          /* @__PURE__ */ n(E, { children: [
            /* @__PURE__ */ e("span", { style: { fontSize: "12px", fontWeight: 600, lineHeight: "16px", letterSpacing: "-0.0004px", color: "#293239" }, children: "Test bot" }),
            /* @__PURE__ */ e(W, { size: 12 })
          ] }),
          /* @__PURE__ */ e(m, { children: /* @__PURE__ */ e(H, { size: 20 }) }),
          /* @__PURE__ */ e(y, { size: "small", backgroundColor: "#f8f9f9", children: /* @__PURE__ */ e(k, { size: 16, color: "#5C6970" }) })
        ] })
      ] })
    ) : D ? (
      // Workforce Management Header
      /* @__PURE__ */ n(w, { children: [
        /* @__PURE__ */ e("div", {}),
        /* @__PURE__ */ n(I, { children: [
          /* @__PURE__ */ n(K, { children: [
            /* @__PURE__ */ e(M, { size: 16 }),
            /* @__PURE__ */ e("span", { children: "Search" })
          ] }),
          /* @__PURE__ */ e(m, { children: /* @__PURE__ */ e(Te, { size: 20 }) }),
          /* @__PURE__ */ e(y, { size: "small", backgroundColor: "#f8f9f9", children: /* @__PURE__ */ e(k, { size: 16, color: "#5C6970" }) })
        ] })
      ] })
    ) : L ? (
      // Quality Assurance Header
      /* @__PURE__ */ n(w, { children: [
        /* @__PURE__ */ e("div", {}),
        /* @__PURE__ */ n(I, { children: [
          /* @__PURE__ */ n(K, { children: [
            /* @__PURE__ */ e(M, { size: 16 }),
            /* @__PURE__ */ e("span", { children: "Search" })
          ] }),
          /* @__PURE__ */ e(y, { size: "small", backgroundColor: "#f8f9f9", children: /* @__PURE__ */ e(k, { size: 16, color: "#5C6970" }) })
        ] })
      ] })
    ) : xe ? (
      // Analytics Header
      /* @__PURE__ */ n(w, { children: [
        /* @__PURE__ */ e("div", {}),
        /* @__PURE__ */ n(I, { children: [
          /* @__PURE__ */ n(K, { children: [
            /* @__PURE__ */ e(M, { size: 16 }),
            /* @__PURE__ */ e("span", { children: "Search" })
          ] }),
          /* @__PURE__ */ e(y, { size: "small", backgroundColor: "#f8f9f9", children: /* @__PURE__ */ e(k, { size: 16, color: "#5C6970" }) })
        ] })
      ] })
    ) : (
      // Default Header
      /* @__PURE__ */ n(w, { children: [
        /* @__PURE__ */ n("div", { style: { display: "flex", alignItems: "center" }, children: [
          /* @__PURE__ */ e(B, { children: /* @__PURE__ */ e(G, {}) }),
          /* @__PURE__ */ n(dn, { children: [
            /* @__PURE__ */ e(V, { size: 12 }),
            /* @__PURE__ */ e("span", { children: "Add" })
          ] })
        ] }),
        /* @__PURE__ */ n(I, { children: [
          /* @__PURE__ */ n("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
            /* @__PURE__ */ e(m, { children: /* @__PURE__ */ e(M, { size: 20 }) }),
            /* @__PURE__ */ e(R, { size: "small", disabled: !0, children: "Conversations" }),
            /* @__PURE__ */ e(m, { children: /* @__PURE__ */ e(oe, { size: 20 }) }),
            /* @__PURE__ */ e(m, { children: /* @__PURE__ */ e(te, { size: 20 }) })
          ] }),
          /* @__PURE__ */ e(B, { children: /* @__PURE__ */ e(G, {}) }),
          /* @__PURE__ */ n(m, { children: [
            /* @__PURE__ */ e(Pe, { size: 20 }),
            /* @__PURE__ */ e(pn, { children: "1" })
          ] }),
          /* @__PURE__ */ e(m, { children: /* @__PURE__ */ e(Me, { size: 20 }) }),
          /* @__PURE__ */ e(y, { size: "small", backgroundColor: "#f8f9f9", children: /* @__PURE__ */ e(k, { size: 16, color: "#5C6970" }) })
        ] })
      ] })
    ) })
  ] });
}, gn = o.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 56px;
  height: 100%;
  padding: 12px 0;
  background-color: #f8f9f9;
  position: relative;
`, xn = o.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 231px;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(92, 105, 112, 0.08));
  pointer-events: none;
`, un = o.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  z-index: 1;
`, fn = o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 48px;
`, bn = o.button`
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
`, mn = o.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  z-index: 1;
`, vn = o.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 56px;
  height: 48px;
  padding: 0 16px;
`, Cn = o.div`
  width: 23px;
  height: 1px;
  background-color: #d8dcde;
`, wn = o.button`
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
`, yn = [
  { id: 0, icon: J, label: "Home" },
  { id: 1, icon: he, label: "Inbox" },
  { id: 2, icon: Xe, label: "Contacts" },
  { id: 3, icon: re, label: "Organization" },
  { id: 4, icon: Ze, label: "Custom Objects" },
  { id: 5, icon: N, label: "Analytics" },
  { id: 6, icon: P, label: "Settings" }
], kn = [
  { id: 0, icon: J, label: "Home" },
  { id: 1, icon: re, label: "Account" },
  { id: 2, icon: ae, label: "People" },
  { id: 3, icon: Be, label: "Channels" },
  { id: 4, icon: Ge, label: "AI" },
  { id: 5, icon: Fe, label: "Workspaces" },
  { id: 6, icon: Ne, label: "Objects & rules" },
  { id: 7, icon: je, label: "Apps and integrations" }
], In = [
  { id: 0, icon: J, label: "Home" },
  { id: 1, icon: De, label: "Knowledge" },
  { id: 2, icon: Le, label: "Moderate content" },
  { id: 3, icon: Ke, label: "Arrange content" },
  { id: 4, icon: We, label: "Customize design" },
  { id: 5, icon: le, label: "User permissions" },
  { id: 6, icon: P, label: "Settings" }
], zn = [
  { id: 0, icon: N, label: "Analytics" },
  { id: 1, icon: He, label: "Content" },
  { id: 2, icon: ce, label: "Conversations" },
  { id: 3, icon: P, label: "Settings" },
  { id: 4, icon: null, label: "separator" },
  { id: 5, icon: Ee, label: "AI agent management" },
  { id: 6, icon: le, label: "Permissions" },
  { id: 7, icon: se, label: "Database" },
  { id: 8, icon: Re, label: "Apps" },
  { id: 9, icon: qe, label: "Integrations" }
], Sn = [
  { id: 0, icon: de, label: "Real-time monitoring" },
  { id: 1, icon: pe, label: "Dashboard" },
  { id: 2, icon: N, label: "Reports" },
  { id: 3, icon: se, label: "Data" },
  { id: 4, icon: Qe, label: "Export" },
  { id: 5, icon: P, label: "Settings" }
], $n = [
  { id: 0, icon: pe, label: "Dashboard" },
  { id: 1, icon: ce, label: "Conversations" },
  { id: 2, icon: Oe, label: "Reviews" },
  { id: 3, icon: he, label: "Inbox" },
  { id: 4, icon: Ve, label: "Training" }
], An = [
  { id: 0, icon: de, label: "Real-time monitoring" },
  { id: 1, icon: N, label: "Analytics" },
  { id: 2, icon: Je, label: "Forecasting" },
  { id: 3, icon: Ue, label: "Scheduling" },
  { id: 4, icon: ae, label: "Team" },
  { id: 5, icon: P, label: "Settings" }
], Tn = ({
  currentProduct: i,
  activeNavItem: g,
  setActiveNavItem: t,
  isSubnavExpanded: x,
  setIsSubnavExpanded: r
}) => {
  const b = i === "admin-center" ? kn : i === "knowledge" ? In : i === "ai-agents" ? zn : i === "analytics" ? Sn : i === "quality-assurance" ? $n : i === "workforce-management" ? An : yn, j = i === "knowledge" || i === "ai-agents";
  return /* @__PURE__ */ n(gn, { children: [
    /* @__PURE__ */ e(xn, {}),
    /* @__PURE__ */ e(un, { children: b.map((h) => {
      if (h.label === "separator")
        return /* @__PURE__ */ e(vn, { children: /* @__PURE__ */ e(Cn, {}) }, h.id);
      const D = g === h.id, L = typeof h.icon == "function" ? h.icon : null;
      return /* @__PURE__ */ e(fn, { children: /* @__PURE__ */ e(
        bn,
        {
          $isActive: D,
          onClick: () => t(h.id),
          "aria-label": h.label,
          children: L ? /* @__PURE__ */ e(L, { size: 20, color: D ? "white" : "#5C6970" }) : h.icon
        }
      ) }, h.id);
    }) }),
    /* @__PURE__ */ e(mn, { children: j && /* @__PURE__ */ e(
      wn,
      {
        onClick: () => r(!x),
        "aria-label": x ? "Collapse" : "Expand",
        children: /* @__PURE__ */ e(Ye, { size: 20, color: "#5C6970" })
      }
    ) })
  ] });
}, Pn = o.div`
  display: flex;
  flex-direction: column;
  width: 240px;
  height: 100%;
  background-color: #f8f9f9;
  padding: 8px;
`, Mn = o.div`
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 12px 12px 12px 12px;
  width: 100%;
`, Bn = o.h2`
  flex: 1;
  font-family: 'SF Pro Text', sans-serif;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.45px;
  color: #2f3941;
  margin: 0;
  padding: 4px 0;
`, Gn = o.button`
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
`, X = o.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding-bottom: 12px;
  width: 100%;
`, T = o.div`
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
`, u = o.p`
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
`, $ = o.div`
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
`, Fn = o.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`, Nn = o.div`
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
`, jn = o.div`
  display: flex;
  flex: 1;
  gap: 8px;
  align-items: center;
  padding: 12px 8px 12px 8px;
`, Dn = o.p`
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
`, Ln = o.div`
  flex: 1;
  height: 1px;
  background-color: #d8dcde;
`, Kn = o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 100%;
`, A = o(T)`
  padding-left: ${(i) => i.$depth * 24 + 12}px;
`, Wn = () => {
  const [i, g] = C(!0);
  return /* @__PURE__ */ n(Pn, { children: [
    /* @__PURE__ */ n(Mn, { children: [
      /* @__PURE__ */ e(Bn, { children: "Knowledge" }),
      /* @__PURE__ */ e(Gn, { children: /* @__PURE__ */ e(V, { size: 20, color: "#5C6970" }) })
    ] }),
    /* @__PURE__ */ e(X, { children: /* @__PURE__ */ e(T, { $isCurrent: !0, children: /* @__PURE__ */ e(u, { $isCurrent: !0, children: "Sources" }) }) }),
    /* @__PURE__ */ n(Fn, { children: [
      /* @__PURE__ */ n(Nn, { onClick: () => g(!i), children: [
        /* @__PURE__ */ n(jn, { children: [
          /* @__PURE__ */ e(Dn, { children: "Content" }),
          /* @__PURE__ */ e(Ln, {})
        ] }),
        /* @__PURE__ */ e(Kn, { children: i ? /* @__PURE__ */ e(Q, { size: 16, color: "#5C6970" }) : /* @__PURE__ */ e(v, { size: 16, color: "#5C6970" }) })
      ] }),
      i && /* @__PURE__ */ n(X, { children: [
        /* @__PURE__ */ n(T, { children: [
          /* @__PURE__ */ e(u, { children: "All content" }),
          /* @__PURE__ */ e($, { children: "24" })
        ] }),
        /* @__PURE__ */ n(A, { $depth: 0, children: [
          /* @__PURE__ */ e(v, { size: 16, color: "#5C6970" }),
          /* @__PURE__ */ e(u, { style: { marginLeft: "8px" }, children: "Joe's Coffee" }),
          /* @__PURE__ */ e($, { children: "24" })
        ] }),
        /* @__PURE__ */ n(A, { $depth: 1, children: [
          /* @__PURE__ */ e(v, { size: 16, color: "#5C6970" }),
          /* @__PURE__ */ e(u, { style: { marginLeft: "8px" }, children: "Getting Started" })
        ] }),
        /* @__PURE__ */ n(A, { $depth: 1, children: [
          /* @__PURE__ */ e(v, { size: 16, color: "#5C6970" }),
          /* @__PURE__ */ e(u, { style: { marginLeft: "8px" }, children: "Troubleshooting Guides" })
        ] }),
        /* @__PURE__ */ n(A, { $depth: 1, children: [
          /* @__PURE__ */ e(v, { size: 16, color: "#5C6970" }),
          /* @__PURE__ */ e(u, { style: { marginLeft: "8px" }, children: "Product FAQs" })
        ] }),
        /* @__PURE__ */ n(A, { $depth: 1, children: [
          /* @__PURE__ */ e(v, { size: 16, color: "#5C6970" }),
          /* @__PURE__ */ e(u, { style: { marginLeft: "8px" }, children: "Policies and Procedures" })
        ] }),
        /* @__PURE__ */ n(A, { $depth: 0, children: [
          /* @__PURE__ */ e(v, { size: 16, color: "#5C6970" }),
          /* @__PURE__ */ e(u, { style: { marginLeft: "8px" }, children: "Confluence" }),
          /* @__PURE__ */ e($, { children: "124" })
        ] }),
        /* @__PURE__ */ n(T, { children: [
          /* @__PURE__ */ e(u, { children: "Content blocks" }),
          /* @__PURE__ */ e($, { children: "0" })
        ] }),
        /* @__PURE__ */ n(T, { children: [
          /* @__PURE__ */ e(u, { children: "Procedures" }),
          /* @__PURE__ */ e($, { children: "12" })
        ] }),
        /* @__PURE__ */ n(T, { children: [
          /* @__PURE__ */ e(u, { children: "Media" }),
          /* @__PURE__ */ e($, { children: "0" })
        ] })
      ] })
    ] })
  ] });
}, Hn = o.div`
  display: flex;
  flex-direction: column;
  width: 240px;
  height: 100%;
  background-color: #f8f9f9;
  padding: 8px;
  overflow-y: auto;
  overflow-x: hidden;
`, En = o.div`
  display: flex;
  gap: 8px;
  align-items: flex-start;
  padding: 12px;
  width: 100%;
`, Rn = o.h2`
  flex: 1;
  font-family: 'SF Pro Text', sans-serif;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.45px;
  color: #293239;
  margin: 0;
  padding: 4px 0;
`, ge = o.button`
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
`, c = o(ge)`
  width: 24px;
  height: 24px;
  border-radius: 4px;
`, q = o.div`
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
`, F = o.div`
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
`, Z = o.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`, Y = o.div`
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
`, _ = o.div`
  display: flex;
  flex: 1;
  gap: 8px;
  align-items: center;
  padding: 12px 4px 12px 8px;
`, ee = o.p`
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
`, ne = o.div`
  flex: 1;
  height: 1px;
  background-color: #d8dcde;
  min-width: 0;
`, ie = o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 100%;
  flex-shrink: 0;
`, qn = () => {
  const [i, g] = C("agents"), [t, x] = C(!0), [r, b] = C(!0), a = (z) => {
    g(z);
  };
  return /* @__PURE__ */ n(Hn, { children: [
    /* @__PURE__ */ n(En, { children: [
      /* @__PURE__ */ e(Rn, { children: "AI agents" }),
      /* @__PURE__ */ e(ge, { "aria-label": "Add new", children: /* @__PURE__ */ e(V, { size: 20, color: "#5C6970" }) })
    ] }),
    /* @__PURE__ */ n(q, { children: [
      /* @__PURE__ */ n(
        s,
        {
          $isCurrent: i === "agents",
          onClick: () => a("agents"),
          children: [
            /* @__PURE__ */ n(d, { children: [
              /* @__PURE__ */ e(N, { size: 20, color: i === "agents" ? "white" : "#5C6970" }),
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
          onClick: () => a("conversations"),
          children: [
            /* @__PURE__ */ n(d, { children: [
              /* @__PURE__ */ e(_e, { size: 20, color: "#5C6970" }),
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
          onClick: () => a("settings"),
          children: [
            /* @__PURE__ */ n(d, { children: [
              /* @__PURE__ */ e(P, { size: 20, color: "#5C6970" }),
              /* @__PURE__ */ e(p, { $isCurrent: i === "settings", children: "Settings" })
            ] }),
            /* @__PURE__ */ e(c, { "aria-label": "More options", children: /* @__PURE__ */ e(l, { size: 16, color: "#5C6970" }) })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ n(Z, { children: [
      /* @__PURE__ */ n(Y, { onClick: () => x(!t), children: [
        /* @__PURE__ */ n(_, { children: [
          /* @__PURE__ */ e(ee, { children: "Agent Management" }),
          /* @__PURE__ */ e(ne, {})
        ] }),
        /* @__PURE__ */ e(ie, { children: t ? /* @__PURE__ */ e(Q, { size: 16, color: "#5C6970" }) : /* @__PURE__ */ e(v, { size: 16, color: "#5C6970" }) })
      ] }),
      t && /* @__PURE__ */ n(q, { children: [
        /* @__PURE__ */ n(
          s,
          {
            $isCurrent: i === "agent-builder",
            onClick: () => a("agent-builder"),
            children: [
              /* @__PURE__ */ n(d, { children: [
                /* @__PURE__ */ e(p, { $isCurrent: i === "agent-builder", children: "Agent builder" }),
                /* @__PURE__ */ e(F, { children: "123" })
              ] }),
              /* @__PURE__ */ e(c, { "aria-label": "More options", children: /* @__PURE__ */ e(l, { size: 16, color: "#5C6970" }) })
            ]
          }
        ),
        /* @__PURE__ */ n(
          s,
          {
            $isCurrent: i === "templates",
            onClick: () => a("templates"),
            children: [
              /* @__PURE__ */ n(d, { children: [
                /* @__PURE__ */ e(p, { $isCurrent: i === "templates", children: "Templates" }),
                /* @__PURE__ */ e(F, { children: "123" })
              ] }),
              /* @__PURE__ */ e(c, { "aria-label": "More options", children: /* @__PURE__ */ e(l, { size: 16, color: "#5C6970" }) })
            ]
          }
        ),
        /* @__PURE__ */ n(
          s,
          {
            $isCurrent: i === "workflows",
            onClick: () => a("workflows"),
            children: [
              /* @__PURE__ */ n(d, { children: [
                /* @__PURE__ */ e(p, { $isCurrent: i === "workflows", children: "Workflows" }),
                /* @__PURE__ */ e(F, { children: "123" })
              ] }),
              /* @__PURE__ */ e(c, { "aria-label": "More options", children: /* @__PURE__ */ e(l, { size: 16, color: "#5C6970" }) })
            ]
          }
        ),
        /* @__PURE__ */ n(
          s,
          {
            $isCurrent: i === "monitoring",
            onClick: () => a("monitoring"),
            children: [
              /* @__PURE__ */ n(d, { children: [
                /* @__PURE__ */ e(p, { $isCurrent: i === "monitoring", children: "Monitoring" }),
                /* @__PURE__ */ e(F, { children: "123" })
              ] }),
              /* @__PURE__ */ e(c, { "aria-label": "More options", children: /* @__PURE__ */ e(l, { size: 16, color: "#5C6970" }) })
            ]
          }
        ),
        /* @__PURE__ */ n(
          s,
          {
            $isCurrent: i === "permissions",
            onClick: () => a("permissions"),
            children: [
              /* @__PURE__ */ n(d, { children: [
                /* @__PURE__ */ e(p, { $isCurrent: i === "permissions", children: "Permissions" }),
                /* @__PURE__ */ e(F, { children: "123" })
              ] }),
              /* @__PURE__ */ e(c, { "aria-label": "More options", children: /* @__PURE__ */ e(l, { size: 16, color: "#5C6970" }) })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ n(Z, { children: [
      /* @__PURE__ */ n(Y, { onClick: () => b(!r), children: [
        /* @__PURE__ */ n(_, { children: [
          /* @__PURE__ */ e(ee, { children: "Data & Integration" }),
          /* @__PURE__ */ e(ne, {})
        ] }),
        /* @__PURE__ */ e(ie, { children: r ? /* @__PURE__ */ e(Q, { size: 16, color: "#5C6970" }) : /* @__PURE__ */ e(v, { size: 16, color: "#5C6970" }) })
      ] }),
      r && /* @__PURE__ */ n(q, { children: [
        /* @__PURE__ */ n(
          s,
          {
            $isCurrent: i === "data-sources",
            onClick: () => a("data-sources"),
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
            onClick: () => a("knowledge-base"),
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
            onClick: () => a("integrations"),
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
            onClick: () => a("api-connections"),
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
            onClick: () => a("webhooks"),
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
            onClick: () => a("logs"),
            children: [
              /* @__PURE__ */ e(d, { children: /* @__PURE__ */ e(p, { $isCurrent: i === "logs", children: "Logs" }) }),
              /* @__PURE__ */ e(c, { "aria-label": "More options", children: /* @__PURE__ */ e(l, { size: 16, color: "#5C6970" }) })
            ]
          }
        )
      ] })
    ] })
  ] });
}, Qn = o.div`
  flex: 1;
  width: 100%;
  padding: 24px;
  overflow: auto;
`, On = () => /* @__PURE__ */ n(Qn, { children: [
  /* @__PURE__ */ e(f, { tag: "h1", style: { marginBottom: "16px" }, children: "Support's main content area" }),
  /* @__PURE__ */ e("p", { children: "This is where your Support page content will be displayed." })
] }), Vn = o.div`
  flex: 1;
  width: 100%;
  padding: 24px;
  overflow: auto;
`, Jn = () => /* @__PURE__ */ n(Vn, { children: [
  /* @__PURE__ */ e(f, { tag: "h1", style: { marginBottom: "16px" }, children: "Knowledge's main content area" }),
  /* @__PURE__ */ e("p", { children: "This is where your Knowledge page content will be displayed." })
] }), Un = o.div`
  flex: 1;
  width: 100%;
  padding: 24px;
  overflow: auto;
`, Xn = () => /* @__PURE__ */ n(Un, { children: [
  /* @__PURE__ */ e(f, { tag: "h1", style: { marginBottom: "16px" }, children: "AI agents's main content area" }),
  /* @__PURE__ */ e("p", { children: "This is where your AI agents page content will be displayed." })
] }), Zn = o.div`
  flex: 1;
  width: 100%;
  padding: 24px;
  overflow: auto;
`, Yn = () => /* @__PURE__ */ n(Zn, { children: [
  /* @__PURE__ */ e(f, { tag: "h1", style: { marginBottom: "16px" }, children: "Chat's main content area" }),
  /* @__PURE__ */ e("p", { children: "This is where your Chat page content will be displayed." })
] }), _n = o.div`
  flex: 1;
  width: 100%;
  padding: 24px;
  overflow: auto;
`, ei = () => /* @__PURE__ */ n(_n, { children: [
  /* @__PURE__ */ e(f, { tag: "h1", style: { marginBottom: "16px" }, children: "Voice's main content area" }),
  /* @__PURE__ */ e("p", { children: "This is where your Voice page content will be displayed." })
] }), ni = o.div`
  flex: 1;
  width: 100%;
  padding: 24px;
  overflow: auto;
`, ii = () => /* @__PURE__ */ n(ni, { children: [
  /* @__PURE__ */ e(f, { tag: "h1", style: { marginBottom: "16px" }, children: "Analytics's main content area" }),
  /* @__PURE__ */ e("p", { children: "This is where your Analytics page content will be displayed." })
] }), oi = o.div`
  flex: 1;
  width: 100%;
  padding: 24px;
  overflow: auto;
`, ti = () => /* @__PURE__ */ n(oi, { children: [
  /* @__PURE__ */ e(f, { tag: "h1", style: { marginBottom: "16px" }, children: "Workforce management's main content area" }),
  /* @__PURE__ */ e("p", { children: "This is where your Workforce management page content will be displayed." })
] }), ri = o.div`
  flex: 1;
  width: 100%;
  padding: 24px;
  overflow: auto;
`, ai = () => /* @__PURE__ */ n(ri, { children: [
  /* @__PURE__ */ e(f, { tag: "h1", style: { marginBottom: "16px" }, children: "Quality assurance's main content area" }),
  /* @__PURE__ */ e("p", { children: "This is where your Quality assurance page content will be displayed." })
] }), li = o.div`
  flex: 1;
  width: 100%;
  padding: 24px;
  overflow: auto;
`, ci = () => /* @__PURE__ */ n(li, { children: [
  /* @__PURE__ */ e(f, { tag: "h1", style: { marginBottom: "16px" }, children: "Community's main content area" }),
  /* @__PURE__ */ e("p", { children: "This is where your Community page content will be displayed." })
] }), si = o.div`
  flex: 1;
  width: 100%;
  padding: 24px;
  overflow: auto;
`, di = () => /* @__PURE__ */ n(si, { children: [
  /* @__PURE__ */ e(f, { tag: "h1", style: { marginBottom: "16px" }, children: "Sales's main content area" }),
  /* @__PURE__ */ e("p", { children: "This is where your Sales page content will be displayed." })
] }), pi = o.div`
  flex: 1;
  width: 100%;
  padding: 24px;
  overflow: auto;
`, hi = () => /* @__PURE__ */ n(pi, { children: [
  /* @__PURE__ */ e(f, { tag: "h1", style: { marginBottom: "16px" }, children: "Admin center's main content area" }),
  /* @__PURE__ */ e("p", { children: "This is where your Admin center page content will be displayed." })
] }), gi = o.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
  background-color: #f8f9f9;
  position: relative;
  isolation: isolate;
`, xi = o.div`
  display: flex;
  flex: 1;
  width: 100%;
  z-index: 1;
  overflow: hidden;
`, ui = o.div`
  display: flex;
`, fi = o.main`
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
`, Ii = () => {
  const [i, g] = C(0), [t, x] = C("support"), [r, b] = C(!1);
  return /* @__PURE__ */ e(me, { children: /* @__PURE__ */ n(gi, { children: [
    /* @__PURE__ */ e(
      hn,
      {
        currentProduct: t,
        onProductChange: (h) => {
          x(h), g(0), b(!1);
        }
      }
    ),
    /* @__PURE__ */ n(xi, { children: [
      /* @__PURE__ */ n(ui, { children: [
        /* @__PURE__ */ e(
          Tn,
          {
            currentProduct: t,
            activeNavItem: i,
            setActiveNavItem: g,
            isSubnavExpanded: r,
            setIsSubnavExpanded: b
          }
        ),
        t === "knowledge" && r && /* @__PURE__ */ e(Wn, {}),
        t === "ai-agents" && r && /* @__PURE__ */ e(qn, {})
      ] }),
      /* @__PURE__ */ n(fi, { children: [
        t === "support" && /* @__PURE__ */ e(On, {}),
        t === "knowledge" && /* @__PURE__ */ e(Jn, {}),
        t === "ai-agents" && /* @__PURE__ */ e(Xn, {}),
        t === "chat" && /* @__PURE__ */ e(Yn, {}),
        t === "voice" && /* @__PURE__ */ e(ei, {}),
        t === "analytics" && /* @__PURE__ */ e(ii, {}),
        t === "workforce-management" && /* @__PURE__ */ e(ti, {}),
        t === "quality-assurance" && /* @__PURE__ */ e(ai, {}),
        t === "community" && /* @__PURE__ */ e(ci, {}),
        t === "sales" && /* @__PURE__ */ e(di, {}),
        t === "admin-center" && /* @__PURE__ */ e(hi, {})
      ] })
    ] })
  ] }) });
};
export {
  Xn as A,
  Yn as C,
  Ii as G,
  Jn as K,
  Tn as M,
  tn as P,
  ai as Q,
  di as S,
  hn as T,
  ei as V,
  ti as W,
  qn as a,
  hi as b,
  ii as c,
  ci as d,
  Wn as e,
  On as f,
  O as p
};
//# sourceMappingURL=GlobalNavPageTemplate-ndy_yi1j.js.map
