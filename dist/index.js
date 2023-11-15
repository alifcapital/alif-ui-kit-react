import './index.css';
var Za = Object.defineProperty, Qa = Object.defineProperties;
var ei = Object.getOwnPropertyDescriptors;
var cn = Object.getOwnPropertySymbols;
var Kr = Object.prototype.hasOwnProperty, Xr = Object.prototype.propertyIsEnumerable;
var Gr = (e, t, n) => t in e ? Za(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, K = (e, t) => {
  for (var n in t || (t = {}))
    Kr.call(t, n) && Gr(e, n, t[n]);
  if (cn)
    for (var n of cn(t))
      Xr.call(t, n) && Gr(e, n, t[n]);
  return e;
}, pe = (e, t) => Qa(e, ei(t));
var xe = (e, t) => {
  var n = {};
  for (var r in e)
    Kr.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && cn)
    for (var r of cn(e))
      t.indexOf(r) < 0 && Xr.call(e, r) && (n[r] = e[r]);
  return n;
};
var Fe = (e, t, n) => new Promise((r, a) => {
  var i = (u) => {
    try {
      s(n.next(u));
    } catch (l) {
      a(l);
    }
  }, c = (u) => {
    try {
      s(n.throw(u));
    } catch (l) {
      a(l);
    }
  }, s = (u) => u.done ? r(u.value) : Promise.resolve(u.value).then(i, c);
  s((n = n.apply(e, t)).next());
});
import * as D from "react";
import _e, { useState as oe, useLayoutEffect as He, useEffect as fe, useMemo as vt, useRef as ge, useCallback as ft, createContext as vr, createElement as me, useContext as Io, forwardRef as Ne, Children as Ct, isValidElement as Xt, cloneElement as Tr, Fragment as Fo, useReducer as ti, PureComponent as ni } from "react";
import * as ri from "react-dom";
import { flushSync as Lo } from "react-dom";
function oi(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var pr = { exports: {} }, zt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jr;
function ai() {
  if (Jr)
    return zt;
  Jr = 1;
  var e = _e, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(s, u, l) {
    var d, f = {}, v = null, p = null;
    l !== void 0 && (v = "" + l), u.key !== void 0 && (v = "" + u.key), u.ref !== void 0 && (p = u.ref);
    for (d in u)
      r.call(u, d) && !i.hasOwnProperty(d) && (f[d] = u[d]);
    if (s && s.defaultProps)
      for (d in u = s.defaultProps, u)
        f[d] === void 0 && (f[d] = u[d]);
    return { $$typeof: t, type: s, key: v, ref: p, props: f, _owner: a.current };
  }
  return zt.Fragment = n, zt.jsx = c, zt.jsxs = c, zt;
}
var qt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zr;
function ii() {
  return Zr || (Zr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = _e, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), s = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), y = Symbol.iterator, g = "@@iterator";
    function b(o) {
      if (o === null || typeof o != "object")
        return null;
      var m = y && o[y] || o[g];
      return typeof m == "function" ? m : null;
    }
    var E = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function x(o) {
      {
        for (var m = arguments.length, w = new Array(m > 1 ? m - 1 : 0), P = 1; P < m; P++)
          w[P - 1] = arguments[P];
        S("error", o, w);
      }
    }
    function S(o, m, w) {
      {
        var P = E.ReactDebugCurrentFrame, L = P.getStackAddendum();
        L !== "" && (m += "%s", w = w.concat([L]));
        var W = w.map(function(j) {
          return String(j);
        });
        W.unshift("Warning: " + m), Function.prototype.apply.call(console[o], console, W);
      }
    }
    var C = !1, h = !1, $ = !1, R = !1, I = !1, N;
    N = Symbol.for("react.module.reference");
    function ae(o) {
      return !!(typeof o == "string" || typeof o == "function" || o === r || o === i || I || o === a || o === l || o === d || R || o === p || C || h || $ || typeof o == "object" && o !== null && (o.$$typeof === v || o.$$typeof === f || o.$$typeof === c || o.$$typeof === s || o.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      o.$$typeof === N || o.getModuleId !== void 0));
    }
    function ie(o, m, w) {
      var P = o.displayName;
      if (P)
        return P;
      var L = m.displayName || m.name || "";
      return L !== "" ? w + "(" + L + ")" : w;
    }
    function re(o) {
      return o.displayName || "Context";
    }
    function Z(o) {
      if (o == null)
        return null;
      if (typeof o.tag == "number" && x("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof o == "function")
        return o.displayName || o.name || null;
      if (typeof o == "string")
        return o;
      switch (o) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case i:
          return "Profiler";
        case a:
          return "StrictMode";
        case l:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case s:
            var m = o;
            return re(m) + ".Consumer";
          case c:
            var w = o;
            return re(w._context) + ".Provider";
          case u:
            return ie(o, o.render, "ForwardRef");
          case f:
            var P = o.displayName || null;
            return P !== null ? P : Z(o.type) || "Memo";
          case v: {
            var L = o, W = L._payload, j = L._init;
            try {
              return Z(j(W));
            } catch (A) {
              return null;
            }
          }
        }
      return null;
    }
    var B = Object.assign, ee = 0, Y, te, ce, ye, O, _, G;
    function z() {
    }
    z.__reactDisabledLog = !0;
    function V() {
      {
        if (ee === 0) {
          Y = console.log, te = console.info, ce = console.warn, ye = console.error, O = console.group, _ = console.groupCollapsed, G = console.groupEnd;
          var o = {
            configurable: !0,
            enumerable: !0,
            value: z,
            writable: !0
          };
          Object.defineProperties(console, {
            info: o,
            log: o,
            warn: o,
            error: o,
            group: o,
            groupCollapsed: o,
            groupEnd: o
          });
        }
        ee++;
      }
    }
    function X() {
      {
        if (ee--, ee === 0) {
          var o = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: B({}, o, {
              value: Y
            }),
            info: B({}, o, {
              value: te
            }),
            warn: B({}, o, {
              value: ce
            }),
            error: B({}, o, {
              value: ye
            }),
            group: B({}, o, {
              value: O
            }),
            groupCollapsed: B({}, o, {
              value: _
            }),
            groupEnd: B({}, o, {
              value: G
            })
          });
        }
        ee < 0 && x("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var M = E.ReactCurrentDispatcher, F;
    function U(o, m, w) {
      {
        if (F === void 0)
          try {
            throw Error();
          } catch (L) {
            var P = L.stack.trim().match(/\n( *(at )?)/);
            F = P && P[1] || "";
          }
        return `
` + F + o;
      }
    }
    var q = !1, H;
    {
      var he = typeof WeakMap == "function" ? WeakMap : Map;
      H = new he();
    }
    function k(o, m) {
      if (!o || q)
        return "";
      {
        var w = H.get(o);
        if (w !== void 0)
          return w;
      }
      var P;
      q = !0;
      var L = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var W;
      W = M.current, M.current = null, V();
      try {
        if (m) {
          var j = function() {
            throw Error();
          };
          if (Object.defineProperty(j.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(j, []);
            } catch (be) {
              P = be;
            }
            Reflect.construct(o, [], j);
          } else {
            try {
              j.call();
            } catch (be) {
              P = be;
            }
            o.call(j.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (be) {
            P = be;
          }
          o();
        }
      } catch (be) {
        if (be && P && typeof be.stack == "string") {
          for (var A = be.stack.split(`
`), se = P.stack.split(`
`), J = A.length - 1, Q = se.length - 1; J >= 1 && Q >= 0 && A[J] !== se[Q]; )
            Q--;
          for (; J >= 1 && Q >= 0; J--, Q--)
            if (A[J] !== se[Q]) {
              if (J !== 1 || Q !== 1)
                do
                  if (J--, Q--, Q < 0 || A[J] !== se[Q]) {
                    var ve = `
` + A[J].replace(" at new ", " at ");
                    return o.displayName && ve.includes("<anonymous>") && (ve = ve.replace("<anonymous>", o.displayName)), typeof o == "function" && H.set(o, ve), ve;
                  }
                while (J >= 1 && Q >= 0);
              break;
            }
        }
      } finally {
        q = !1, M.current = W, X(), Error.prepareStackTrace = L;
      }
      var Te = o ? o.displayName || o.name : "", Yt = Te ? U(Te) : "";
      return typeof o == "function" && H.set(o, Yt), Yt;
    }
    function Ee(o, m, w) {
      return k(o, !1);
    }
    function Le(o) {
      var m = o.prototype;
      return !!(m && m.isReactComponent);
    }
    function Ce(o, m, w) {
      if (o == null)
        return "";
      if (typeof o == "function")
        return k(o, Le(o));
      if (typeof o == "string")
        return U(o);
      switch (o) {
        case l:
          return U("Suspense");
        case d:
          return U("SuspenseList");
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case u:
            return Ee(o.render);
          case f:
            return Ce(o.type, m, w);
          case v: {
            var P = o, L = P._payload, W = P._init;
            try {
              return Ce(W(L), m, w);
            } catch (j) {
            }
          }
        }
      return "";
    }
    var Se = Object.prototype.hasOwnProperty, Ze = {}, ot = E.ReactDebugCurrentFrame;
    function je(o) {
      if (o) {
        var m = o._owner, w = Ce(o.type, o._source, m ? m.type : null);
        ot.setExtraStackFrame(w);
      } else
        ot.setExtraStackFrame(null);
    }
    function At(o, m, w, P, L) {
      {
        var W = Function.call.bind(Se);
        for (var j in o)
          if (W(o, j)) {
            var A = void 0;
            try {
              if (typeof o[j] != "function") {
                var se = Error((P || "React class") + ": " + w + " type `" + j + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[j] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw se.name = "Invariant Violation", se;
              }
              A = o[j](m, j, P, w, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (J) {
              A = J;
            }
            A && !(A instanceof Error) && (je(L), x("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", P || "React class", w, j, typeof A), je(null)), A instanceof Error && !(A.message in Ze) && (Ze[A.message] = !0, je(L), x("Failed %s type: %s", w, A.message), je(null));
          }
      }
    }
    var Dt = Array.isArray;
    function ke(o) {
      return Dt(o);
    }
    function Dn(o) {
      {
        var m = typeof Symbol == "function" && Symbol.toStringTag, w = m && o[Symbol.toStringTag] || o.constructor.name || "Object";
        return w;
      }
    }
    function Nn(o) {
      try {
        return Nt(o), !1;
      } catch (m) {
        return !0;
      }
    }
    function Nt(o) {
      return "" + o;
    }
    function jt(o) {
      if (Nn(o))
        return x("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Dn(o)), Nt(o);
    }
    var Ie = E.ReactCurrentOwner, jn = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, It, Ft, at;
    at = {};
    function In(o) {
      if (Se.call(o, "ref")) {
        var m = Object.getOwnPropertyDescriptor(o, "ref").get;
        if (m && m.isReactWarning)
          return !1;
      }
      return o.ref !== void 0;
    }
    function Fn(o) {
      if (Se.call(o, "key")) {
        var m = Object.getOwnPropertyDescriptor(o, "key").get;
        if (m && m.isReactWarning)
          return !1;
      }
      return o.key !== void 0;
    }
    function Ln(o, m) {
      if (typeof o.ref == "string" && Ie.current && m && Ie.current.stateNode !== m) {
        var w = Z(Ie.current.type);
        at[w] || (x('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Z(Ie.current.type), o.ref), at[w] = !0);
      }
    }
    function Mn(o, m) {
      {
        var w = function() {
          It || (It = !0, x("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", m));
        };
        w.isReactWarning = !0, Object.defineProperty(o, "key", {
          get: w,
          configurable: !0
        });
      }
    }
    function Bn(o, m) {
      {
        var w = function() {
          Ft || (Ft = !0, x("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", m));
        };
        w.isReactWarning = !0, Object.defineProperty(o, "ref", {
          get: w,
          configurable: !0
        });
      }
    }
    var Wn = function(o, m, w, P, L, W, j) {
      var A = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: o,
        key: m,
        ref: w,
        props: j,
        // Record the component responsible for creating this element.
        _owner: W
      };
      return A._store = {}, Object.defineProperty(A._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(A, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: P
      }), Object.defineProperty(A, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: L
      }), Object.freeze && (Object.freeze(A.props), Object.freeze(A)), A;
    };
    function Un(o, m, w, P, L) {
      {
        var W, j = {}, A = null, se = null;
        w !== void 0 && (jt(w), A = "" + w), Fn(m) && (jt(m.key), A = "" + m.key), In(m) && (se = m.ref, Ln(m, L));
        for (W in m)
          Se.call(m, W) && !jn.hasOwnProperty(W) && (j[W] = m[W]);
        if (o && o.defaultProps) {
          var J = o.defaultProps;
          for (W in J)
            j[W] === void 0 && (j[W] = J[W]);
        }
        if (A || se) {
          var Q = typeof o == "function" ? o.displayName || o.name || "Unknown" : o;
          A && Mn(j, Q), se && Bn(j, Q);
        }
        return Wn(o, A, se, L, P, Ie.current, j);
      }
    }
    var it = E.ReactCurrentOwner, Lt = E.ReactDebugCurrentFrame;
    function Pe(o) {
      if (o) {
        var m = o._owner, w = Ce(o.type, o._source, m ? m.type : null);
        Lt.setExtraStackFrame(w);
      } else
        Lt.setExtraStackFrame(null);
    }
    var ct;
    ct = !1;
    function st(o) {
      return typeof o == "object" && o !== null && o.$$typeof === t;
    }
    function Mt() {
      {
        if (it.current) {
          var o = Z(it.current.type);
          if (o)
            return `

Check the render method of \`` + o + "`.";
        }
        return "";
      }
    }
    function Vn(o) {
      {
        if (o !== void 0) {
          var m = o.fileName.replace(/^.*[\\\/]/, ""), w = o.lineNumber;
          return `

Check your code at ` + m + ":" + w + ".";
        }
        return "";
      }
    }
    var Bt = {};
    function Yn(o) {
      {
        var m = Mt();
        if (!m) {
          var w = typeof o == "string" ? o : o.displayName || o.name;
          w && (m = `

Check the top-level render call using <` + w + ">.");
        }
        return m;
      }
    }
    function Wt(o, m) {
      {
        if (!o._store || o._store.validated || o.key != null)
          return;
        o._store.validated = !0;
        var w = Yn(m);
        if (Bt[w])
          return;
        Bt[w] = !0;
        var P = "";
        o && o._owner && o._owner !== it.current && (P = " It was passed a child from " + Z(o._owner.type) + "."), Pe(o), x('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', w, P), Pe(null);
      }
    }
    function Ut(o, m) {
      {
        if (typeof o != "object")
          return;
        if (ke(o))
          for (var w = 0; w < o.length; w++) {
            var P = o[w];
            st(P) && Wt(P, m);
          }
        else if (st(o))
          o._store && (o._store.validated = !0);
        else if (o) {
          var L = b(o);
          if (typeof L == "function" && L !== o.entries)
            for (var W = L.call(o), j; !(j = W.next()).done; )
              st(j.value) && Wt(j.value, m);
        }
      }
    }
    function zn(o) {
      {
        var m = o.type;
        if (m == null || typeof m == "string")
          return;
        var w;
        if (typeof m == "function")
          w = m.propTypes;
        else if (typeof m == "object" && (m.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        m.$$typeof === f))
          w = m.propTypes;
        else
          return;
        if (w) {
          var P = Z(m);
          At(w, o.props, "prop", P, o);
        } else if (m.PropTypes !== void 0 && !ct) {
          ct = !0;
          var L = Z(m);
          x("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", L || "Unknown");
        }
        typeof m.getDefaultProps == "function" && !m.getDefaultProps.isReactClassApproved && x("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function qn(o) {
      {
        for (var m = Object.keys(o.props), w = 0; w < m.length; w++) {
          var P = m[w];
          if (P !== "children" && P !== "key") {
            Pe(o), x("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", P), Pe(null);
            break;
          }
        }
        o.ref !== null && (Pe(o), x("Invalid attribute `ref` supplied to `React.Fragment`."), Pe(null));
      }
    }
    function Vt(o, m, w, P, L, W) {
      {
        var j = ae(o);
        if (!j) {
          var A = "";
          (o === void 0 || typeof o == "object" && o !== null && Object.keys(o).length === 0) && (A += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var se = Vn(L);
          se ? A += se : A += Mt();
          var J;
          o === null ? J = "null" : ke(o) ? J = "array" : o !== void 0 && o.$$typeof === t ? (J = "<" + (Z(o.type) || "Unknown") + " />", A = " Did you accidentally export a JSX literal instead of a component?") : J = typeof o, x("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", J, A);
        }
        var Q = Un(o, m, w, L, W);
        if (Q == null)
          return Q;
        if (j) {
          var ve = m.children;
          if (ve !== void 0)
            if (P)
              if (ke(ve)) {
                for (var Te = 0; Te < ve.length; Te++)
                  Ut(ve[Te], o);
                Object.freeze && Object.freeze(ve);
              } else
                x("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ut(ve, o);
        }
        return o === r ? qn(Q) : zn(Q), Q;
      }
    }
    function Hn(o, m, w) {
      return Vt(o, m, w, !0);
    }
    function Gn(o, m, w) {
      return Vt(o, m, w, !1);
    }
    var Kn = Gn, Xn = Hn;
    qt.Fragment = r, qt.jsx = Kn, qt.jsxs = Xn;
  }()), qt;
}
process.env.NODE_ENV === "production" ? pr.exports = ai() : pr.exports = ii();
var T = pr.exports;
function Mo(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = Mo(e[t])) && (r && (r += " "), r += n);
    else
      for (t in e)
        e[t] && (r && (r += " "), r += t);
  return r;
}
function ne() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = Mo(e)) && (r && (r += " "), r += t);
  return r;
}
var Ye = /* @__PURE__ */ ((e) => (e.Large = "large", e.Medium = "medium", e.Small = "small", e))(Ye || {}), ze = /* @__PURE__ */ ((e) => (e.Contained = "contained", e.Outlined = "outlined", e.Text = "text", e))(ze || {}), ut = /* @__PURE__ */ ((e) => (e.Primary = "primary", e.Secondary = "secondary", e.Green = "green", e))(ut || {}), ci = /* @__PURE__ */ ((e) => (e.Submit = "submit", e.Reset = "reset", e.Button = "button", e))(ci || {});
const si = _e.forwardRef((e, t) => {
  const {
    id: n,
    ariaLabel: r,
    className: a,
    children: i,
    disabled: c,
    rounded: s,
    endIcon: u,
    startIcon: l,
    color: d = ut.Primary,
    withIcon: f,
    size: v = Ye.Medium,
    variant: p = ze.Contained,
    type: y = "button",
    onClick: g
  } = e, b = () => {
    g && g();
  };
  return /* @__PURE__ */ T.jsx(
    "button",
    {
      onClick: b,
      ref: t,
      type: y,
      "aria-label": r,
      id: n,
      disabled: c,
      className: ne({
        Button: !0,
        "Button-contained": p === ze.Contained,
        "Button-outlined": p === ze.Outlined,
        "Button-outlined-disable": !!c && p === ze.Outlined,
        "Button-text": p === ze.Text,
        "Button-text-small": v === Ye.Small && p === ze.Text,
        "Button-text-large": v === Ye.Large && p === ze.Text,
        "Button-text-disable": !!c && p === ze.Text,
        "Button-primary": v === Ye.Medium,
        "Button-primary-disable": !!c && d === ut.Primary,
        "Button-secondary": d === ut.Secondary,
        "Button-secondary-disable": !!c && d === ut.Secondary,
        "Button-green": d === ut.Green,
        "Button-green-disable": !!c && d === ut.Green,
        "Button-small": v === Ye.Small,
        "Button-large": v === Ye.Large,
        "Button-round": !!s,
        "Button-only_icon": !!f,
        "Button-only_icon-small": !!f && v === Ye.Small,
        "Button-only_icon-large": !!f && v === Ye.Large,
        [a || ""]: !!a
      }),
      children: /* @__PURE__ */ T.jsxs("div", { className: "Button-children", children: [
        l && /* @__PURE__ */ T.jsx("span", { className: "Button-icon-left", children: l }),
        i,
        u && /* @__PURE__ */ T.jsx("span", { className: "Button-icon-right", children: u })
      ] })
    }
  );
});
si.displayName = "Button";
var mr = { exports: {} }, Ht = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qr;
function ui() {
  if (Qr)
    return Ht;
  Qr = 1;
  var e = _e, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(s, u, l) {
    var d, f = {}, v = null, p = null;
    l !== void 0 && (v = "" + l), u.key !== void 0 && (v = "" + u.key), u.ref !== void 0 && (p = u.ref);
    for (d in u)
      r.call(u, d) && !i.hasOwnProperty(d) && (f[d] = u[d]);
    if (s && s.defaultProps)
      for (d in u = s.defaultProps, u)
        f[d] === void 0 && (f[d] = u[d]);
    return { $$typeof: t, type: s, key: v, ref: p, props: f, _owner: a.current };
  }
  return Ht.Fragment = n, Ht.jsx = c, Ht.jsxs = c, Ht;
}
var sn = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var eo;
function li() {
  return eo || (eo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = _e, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), s = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), y = Symbol.iterator, g = "@@iterator";
    function b(o) {
      if (o === null || typeof o != "object")
        return null;
      var m = y && o[y] || o[g];
      return typeof m == "function" ? m : null;
    }
    var E = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function x(o) {
      {
        for (var m = arguments.length, w = new Array(m > 1 ? m - 1 : 0), P = 1; P < m; P++)
          w[P - 1] = arguments[P];
        S("error", o, w);
      }
    }
    function S(o, m, w) {
      {
        var P = E.ReactDebugCurrentFrame, L = P.getStackAddendum();
        L !== "" && (m += "%s", w = w.concat([L]));
        var W = w.map(function(j) {
          return String(j);
        });
        W.unshift("Warning: " + m), Function.prototype.apply.call(console[o], console, W);
      }
    }
    var C = !1, h = !1, $ = !1, R = !1, I = !1, N;
    N = Symbol.for("react.module.reference");
    function ae(o) {
      return !!(typeof o == "string" || typeof o == "function" || o === r || o === i || I || o === a || o === l || o === d || R || o === p || C || h || $ || typeof o == "object" && o !== null && (o.$$typeof === v || o.$$typeof === f || o.$$typeof === c || o.$$typeof === s || o.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      o.$$typeof === N || o.getModuleId !== void 0));
    }
    function ie(o, m, w) {
      var P = o.displayName;
      if (P)
        return P;
      var L = m.displayName || m.name || "";
      return L !== "" ? w + "(" + L + ")" : w;
    }
    function re(o) {
      return o.displayName || "Context";
    }
    function Z(o) {
      if (o == null)
        return null;
      if (typeof o.tag == "number" && x("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof o == "function")
        return o.displayName || o.name || null;
      if (typeof o == "string")
        return o;
      switch (o) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case i:
          return "Profiler";
        case a:
          return "StrictMode";
        case l:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case s:
            var m = o;
            return re(m) + ".Consumer";
          case c:
            var w = o;
            return re(w._context) + ".Provider";
          case u:
            return ie(o, o.render, "ForwardRef");
          case f:
            var P = o.displayName || null;
            return P !== null ? P : Z(o.type) || "Memo";
          case v: {
            var L = o, W = L._payload, j = L._init;
            try {
              return Z(j(W));
            } catch (A) {
              return null;
            }
          }
        }
      return null;
    }
    var B = Object.assign, ee = 0, Y, te, ce, ye, O, _, G;
    function z() {
    }
    z.__reactDisabledLog = !0;
    function V() {
      {
        if (ee === 0) {
          Y = console.log, te = console.info, ce = console.warn, ye = console.error, O = console.group, _ = console.groupCollapsed, G = console.groupEnd;
          var o = {
            configurable: !0,
            enumerable: !0,
            value: z,
            writable: !0
          };
          Object.defineProperties(console, {
            info: o,
            log: o,
            warn: o,
            error: o,
            group: o,
            groupCollapsed: o,
            groupEnd: o
          });
        }
        ee++;
      }
    }
    function X() {
      {
        if (ee--, ee === 0) {
          var o = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: B({}, o, {
              value: Y
            }),
            info: B({}, o, {
              value: te
            }),
            warn: B({}, o, {
              value: ce
            }),
            error: B({}, o, {
              value: ye
            }),
            group: B({}, o, {
              value: O
            }),
            groupCollapsed: B({}, o, {
              value: _
            }),
            groupEnd: B({}, o, {
              value: G
            })
          });
        }
        ee < 0 && x("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var M = E.ReactCurrentDispatcher, F;
    function U(o, m, w) {
      {
        if (F === void 0)
          try {
            throw Error();
          } catch (L) {
            var P = L.stack.trim().match(/\n( *(at )?)/);
            F = P && P[1] || "";
          }
        return `
` + F + o;
      }
    }
    var q = !1, H;
    {
      var he = typeof WeakMap == "function" ? WeakMap : Map;
      H = new he();
    }
    function k(o, m) {
      if (!o || q)
        return "";
      {
        var w = H.get(o);
        if (w !== void 0)
          return w;
      }
      var P;
      q = !0;
      var L = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var W;
      W = M.current, M.current = null, V();
      try {
        if (m) {
          var j = function() {
            throw Error();
          };
          if (Object.defineProperty(j.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(j, []);
            } catch (be) {
              P = be;
            }
            Reflect.construct(o, [], j);
          } else {
            try {
              j.call();
            } catch (be) {
              P = be;
            }
            o.call(j.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (be) {
            P = be;
          }
          o();
        }
      } catch (be) {
        if (be && P && typeof be.stack == "string") {
          for (var A = be.stack.split(`
`), se = P.stack.split(`
`), J = A.length - 1, Q = se.length - 1; J >= 1 && Q >= 0 && A[J] !== se[Q]; )
            Q--;
          for (; J >= 1 && Q >= 0; J--, Q--)
            if (A[J] !== se[Q]) {
              if (J !== 1 || Q !== 1)
                do
                  if (J--, Q--, Q < 0 || A[J] !== se[Q]) {
                    var ve = `
` + A[J].replace(" at new ", " at ");
                    return o.displayName && ve.includes("<anonymous>") && (ve = ve.replace("<anonymous>", o.displayName)), typeof o == "function" && H.set(o, ve), ve;
                  }
                while (J >= 1 && Q >= 0);
              break;
            }
        }
      } finally {
        q = !1, M.current = W, X(), Error.prepareStackTrace = L;
      }
      var Te = o ? o.displayName || o.name : "", Yt = Te ? U(Te) : "";
      return typeof o == "function" && H.set(o, Yt), Yt;
    }
    function Ee(o, m, w) {
      return k(o, !1);
    }
    function Le(o) {
      var m = o.prototype;
      return !!(m && m.isReactComponent);
    }
    function Ce(o, m, w) {
      if (o == null)
        return "";
      if (typeof o == "function")
        return k(o, Le(o));
      if (typeof o == "string")
        return U(o);
      switch (o) {
        case l:
          return U("Suspense");
        case d:
          return U("SuspenseList");
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case u:
            return Ee(o.render);
          case f:
            return Ce(o.type, m, w);
          case v: {
            var P = o, L = P._payload, W = P._init;
            try {
              return Ce(W(L), m, w);
            } catch (j) {
            }
          }
        }
      return "";
    }
    var Se = Object.prototype.hasOwnProperty, Ze = {}, ot = E.ReactDebugCurrentFrame;
    function je(o) {
      if (o) {
        var m = o._owner, w = Ce(o.type, o._source, m ? m.type : null);
        ot.setExtraStackFrame(w);
      } else
        ot.setExtraStackFrame(null);
    }
    function At(o, m, w, P, L) {
      {
        var W = Function.call.bind(Se);
        for (var j in o)
          if (W(o, j)) {
            var A = void 0;
            try {
              if (typeof o[j] != "function") {
                var se = Error((P || "React class") + ": " + w + " type `" + j + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[j] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw se.name = "Invariant Violation", se;
              }
              A = o[j](m, j, P, w, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (J) {
              A = J;
            }
            A && !(A instanceof Error) && (je(L), x("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", P || "React class", w, j, typeof A), je(null)), A instanceof Error && !(A.message in Ze) && (Ze[A.message] = !0, je(L), x("Failed %s type: %s", w, A.message), je(null));
          }
      }
    }
    var Dt = Array.isArray;
    function ke(o) {
      return Dt(o);
    }
    function Dn(o) {
      {
        var m = typeof Symbol == "function" && Symbol.toStringTag, w = m && o[Symbol.toStringTag] || o.constructor.name || "Object";
        return w;
      }
    }
    function Nn(o) {
      try {
        return Nt(o), !1;
      } catch (m) {
        return !0;
      }
    }
    function Nt(o) {
      return "" + o;
    }
    function jt(o) {
      if (Nn(o))
        return x("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Dn(o)), Nt(o);
    }
    var Ie = E.ReactCurrentOwner, jn = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, It, Ft, at;
    at = {};
    function In(o) {
      if (Se.call(o, "ref")) {
        var m = Object.getOwnPropertyDescriptor(o, "ref").get;
        if (m && m.isReactWarning)
          return !1;
      }
      return o.ref !== void 0;
    }
    function Fn(o) {
      if (Se.call(o, "key")) {
        var m = Object.getOwnPropertyDescriptor(o, "key").get;
        if (m && m.isReactWarning)
          return !1;
      }
      return o.key !== void 0;
    }
    function Ln(o, m) {
      if (typeof o.ref == "string" && Ie.current && m && Ie.current.stateNode !== m) {
        var w = Z(Ie.current.type);
        at[w] || (x('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Z(Ie.current.type), o.ref), at[w] = !0);
      }
    }
    function Mn(o, m) {
      {
        var w = function() {
          It || (It = !0, x("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", m));
        };
        w.isReactWarning = !0, Object.defineProperty(o, "key", {
          get: w,
          configurable: !0
        });
      }
    }
    function Bn(o, m) {
      {
        var w = function() {
          Ft || (Ft = !0, x("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", m));
        };
        w.isReactWarning = !0, Object.defineProperty(o, "ref", {
          get: w,
          configurable: !0
        });
      }
    }
    var Wn = function(o, m, w, P, L, W, j) {
      var A = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: o,
        key: m,
        ref: w,
        props: j,
        // Record the component responsible for creating this element.
        _owner: W
      };
      return A._store = {}, Object.defineProperty(A._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(A, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: P
      }), Object.defineProperty(A, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: L
      }), Object.freeze && (Object.freeze(A.props), Object.freeze(A)), A;
    };
    function Un(o, m, w, P, L) {
      {
        var W, j = {}, A = null, se = null;
        w !== void 0 && (jt(w), A = "" + w), Fn(m) && (jt(m.key), A = "" + m.key), In(m) && (se = m.ref, Ln(m, L));
        for (W in m)
          Se.call(m, W) && !jn.hasOwnProperty(W) && (j[W] = m[W]);
        if (o && o.defaultProps) {
          var J = o.defaultProps;
          for (W in J)
            j[W] === void 0 && (j[W] = J[W]);
        }
        if (A || se) {
          var Q = typeof o == "function" ? o.displayName || o.name || "Unknown" : o;
          A && Mn(j, Q), se && Bn(j, Q);
        }
        return Wn(o, A, se, L, P, Ie.current, j);
      }
    }
    var it = E.ReactCurrentOwner, Lt = E.ReactDebugCurrentFrame;
    function Pe(o) {
      if (o) {
        var m = o._owner, w = Ce(o.type, o._source, m ? m.type : null);
        Lt.setExtraStackFrame(w);
      } else
        Lt.setExtraStackFrame(null);
    }
    var ct;
    ct = !1;
    function st(o) {
      return typeof o == "object" && o !== null && o.$$typeof === t;
    }
    function Mt() {
      {
        if (it.current) {
          var o = Z(it.current.type);
          if (o)
            return `

Check the render method of \`` + o + "`.";
        }
        return "";
      }
    }
    function Vn(o) {
      {
        if (o !== void 0) {
          var m = o.fileName.replace(/^.*[\\\/]/, ""), w = o.lineNumber;
          return `

Check your code at ` + m + ":" + w + ".";
        }
        return "";
      }
    }
    var Bt = {};
    function Yn(o) {
      {
        var m = Mt();
        if (!m) {
          var w = typeof o == "string" ? o : o.displayName || o.name;
          w && (m = `

Check the top-level render call using <` + w + ">.");
        }
        return m;
      }
    }
    function Wt(o, m) {
      {
        if (!o._store || o._store.validated || o.key != null)
          return;
        o._store.validated = !0;
        var w = Yn(m);
        if (Bt[w])
          return;
        Bt[w] = !0;
        var P = "";
        o && o._owner && o._owner !== it.current && (P = " It was passed a child from " + Z(o._owner.type) + "."), Pe(o), x('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', w, P), Pe(null);
      }
    }
    function Ut(o, m) {
      {
        if (typeof o != "object")
          return;
        if (ke(o))
          for (var w = 0; w < o.length; w++) {
            var P = o[w];
            st(P) && Wt(P, m);
          }
        else if (st(o))
          o._store && (o._store.validated = !0);
        else if (o) {
          var L = b(o);
          if (typeof L == "function" && L !== o.entries)
            for (var W = L.call(o), j; !(j = W.next()).done; )
              st(j.value) && Wt(j.value, m);
        }
      }
    }
    function zn(o) {
      {
        var m = o.type;
        if (m == null || typeof m == "string")
          return;
        var w;
        if (typeof m == "function")
          w = m.propTypes;
        else if (typeof m == "object" && (m.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        m.$$typeof === f))
          w = m.propTypes;
        else
          return;
        if (w) {
          var P = Z(m);
          At(w, o.props, "prop", P, o);
        } else if (m.PropTypes !== void 0 && !ct) {
          ct = !0;
          var L = Z(m);
          x("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", L || "Unknown");
        }
        typeof m.getDefaultProps == "function" && !m.getDefaultProps.isReactClassApproved && x("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function qn(o) {
      {
        for (var m = Object.keys(o.props), w = 0; w < m.length; w++) {
          var P = m[w];
          if (P !== "children" && P !== "key") {
            Pe(o), x("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", P), Pe(null);
            break;
          }
        }
        o.ref !== null && (Pe(o), x("Invalid attribute `ref` supplied to `React.Fragment`."), Pe(null));
      }
    }
    function Vt(o, m, w, P, L, W) {
      {
        var j = ae(o);
        if (!j) {
          var A = "";
          (o === void 0 || typeof o == "object" && o !== null && Object.keys(o).length === 0) && (A += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var se = Vn(L);
          se ? A += se : A += Mt();
          var J;
          o === null ? J = "null" : ke(o) ? J = "array" : o !== void 0 && o.$$typeof === t ? (J = "<" + (Z(o.type) || "Unknown") + " />", A = " Did you accidentally export a JSX literal instead of a component?") : J = typeof o, x("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", J, A);
        }
        var Q = Un(o, m, w, L, W);
        if (Q == null)
          return Q;
        if (j) {
          var ve = m.children;
          if (ve !== void 0)
            if (P)
              if (ke(ve)) {
                for (var Te = 0; Te < ve.length; Te++)
                  Ut(ve[Te], o);
                Object.freeze && Object.freeze(ve);
              } else
                x("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ut(ve, o);
        }
        return o === r ? qn(Q) : zn(Q), Q;
      }
    }
    function Hn(o, m, w) {
      return Vt(o, m, w, !0);
    }
    function Gn(o, m, w) {
      return Vt(o, m, w, !1);
    }
    var Kn = Gn, Xn = Hn;
    sn.Fragment = r, sn.jsx = Kn, sn.jsxs = Xn;
  }()), sn;
}
process.env.NODE_ENV === "production" ? mr.exports = ui() : mr.exports = li();
var We = mr.exports;
const Bo = ({
  width: e = "25",
  height: t = "25",
  color: n = "currentColor"
}) => /* @__PURE__ */ We.jsx(
  "svg",
  {
    width: e,
    height: t,
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ We.jsx(
      "path",
      {
        d: "M10.0615 6.91846L16.0615 12.9185L10.0615 18.9185",
        stroke: n,
        strokeWidth: "2",
        strokeLinecap: "square",
        strokeLinejoin: "round"
      }
    )
  }
);
Bo.displayName = "RightNext";
const $r = ({
  width: e = "25",
  height: t = "25",
  color: n = "currentColor"
}) => /* @__PURE__ */ We.jsx(
  "svg",
  {
    width: e,
    height: t,
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ We.jsx(
      "path",
      {
        d: "M6.06152 9.91846L12.0615 15.9185L18.0615 9.91846",
        stroke: n,
        strokeWidth: "2",
        strokeLinecap: "square",
        strokeLinejoin: "round"
      }
    )
  }
);
$r.displayName = "SelectOpenDown";
const Wo = ({ width: e = "25", height: t = "25", color: n = "currentColor" }) => /* @__PURE__ */ We.jsx(
  "svg",
  {
    width: e,
    height: t,
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ We.jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M5.82032 4.50537L6.52742 5.21248L20.1474 18.8325L20.8545 19.5396L19.4403 20.9538L18.7332 20.2467L17.8442 19.3577L17.8266 19.3677C16.0623 20.3764 14.0668 20.911 12.0345 20.9196L12.0303 20.9196C6.54866 20.9196 2.84121 17.0479 1.23877 14.9408C0.787352 14.3639 0.541992 13.6523 0.541992 12.9196C0.541992 12.1871 0.787212 11.4757 1.23839 10.8988C2.40849 9.35649 3.82856 8.02264 5.4385 6.95198L5.11321 6.62669L4.4061 5.91958L5.82032 4.50537ZM6.88489 8.39837C5.31901 9.38114 3.94415 10.6399 2.82724 12.1136L2.81612 12.128C2.63855 12.3536 2.54199 12.6325 2.54199 12.9196C2.54199 13.2067 2.63855 13.4856 2.81612 13.7112L2.82651 13.7246C4.32641 15.6987 7.51628 18.9186 12.0281 18.9196C13.5378 18.9129 15.0229 18.5565 16.3679 17.8814L14.5664 16.0799C13.9327 16.4808 13.1935 16.6988 12.4318 16.6996C11.6403 16.7014 10.8662 16.4682 10.2073 16.0299C9.5482 15.5914 9.03394 14.9671 8.7298 14.2361C8.42567 13.505 8.34538 12.7001 8.499 11.9234C8.59541 11.436 8.78122 10.9734 9.04455 10.558L6.88489 8.39837ZM10.491 12.1824C10.4796 12.225 10.4696 12.2681 10.461 12.3115C10.3842 12.6999 10.4243 13.1024 10.5764 13.4679C10.7284 13.8333 10.9855 14.1454 11.3152 14.3647C11.6448 14.584 12.0321 14.7006 12.4279 14.6996L12.4294 14.6996C12.6053 14.6995 12.7788 14.6761 12.9457 14.6314L10.491 12.1824ZM12.4318 16.6996C12.4316 16.6996 12.4314 16.6996 12.4312 16.6996L12.4303 15.6996L12.4328 16.6996C12.4324 16.6996 12.4321 16.6996 12.4318 16.6996ZM10.4803 4.93961H11.4803H12.0303C17.5119 4.93961 21.2194 8.81135 22.8218 10.9184C23.2732 11.4953 23.5186 12.2069 23.5186 12.9396C23.5186 13.6752 23.2713 14.3894 22.8165 14.9675C22.369 15.537 21.8927 16.0833 21.3896 16.6042L20.695 17.3236L19.2563 15.9342L19.951 15.2149C20.4069 14.7428 20.8385 14.2478 21.244 13.7317L21.2444 13.7312C21.422 13.5056 21.5186 13.2267 21.5186 12.9396C21.5186 12.6525 21.422 12.3736 21.2444 12.148L21.234 12.1346C19.7339 10.1602 16.5433 6.93961 12.0303 6.93961H11.4803H10.4803V4.93961Z",
        fill: n
      }
    )
  }
);
Wo.displayName = "EyeOff";
const Uo = ({ width: e = "25", height: t = "25", color: n = "currentColor" }) => /* @__PURE__ */ We.jsx(
  "svg",
  {
    width: e,
    height: t,
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ We.jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M2.82433 12.1233C4.36074 10.1376 7.56441 6.91943 12.0615 6.91943C16.5585 6.91943 19.7622 10.1376 21.2986 12.1233C21.6698 12.6031 21.6698 13.2358 21.2986 13.7156C19.7622 15.7012 16.5585 18.9194 12.0615 18.9194C7.56441 18.9194 4.36074 15.7012 2.82433 13.7156C2.45309 13.2358 2.45309 12.6031 2.82433 12.1233ZM12.0615 4.91943C6.59165 4.91943 2.86942 8.79681 1.24255 10.8994C0.313681 12.0998 0.313681 13.739 1.24255 14.9395C2.86942 17.0421 6.59165 20.9194 12.0615 20.9194C17.5313 20.9194 21.2535 17.0421 22.8804 14.9395C23.8092 13.739 23.8092 12.0998 22.8804 10.8994C21.2535 8.79681 17.5313 4.91943 12.0615 4.91943ZM10.0615 12.9194C10.0615 11.8149 10.9569 10.9194 12.0615 10.9194C13.166 10.9194 14.0615 11.8149 14.0615 12.9194C14.0615 14.024 13.166 14.9194 12.0615 14.9194C10.9569 14.9194 10.0615 14.024 10.0615 12.9194ZM12.0615 8.91943C9.85232 8.91943 8.06146 10.7103 8.06146 12.9194C8.06146 15.1286 9.85232 16.9194 12.0615 16.9194C14.2706 16.9194 16.0615 15.1286 16.0615 12.9194C16.0615 10.7103 14.2706 8.91943 12.0615 8.91943Z",
        fill: n
      }
    )
  }
);
Uo.displayName = "EyeOn";
const Rr = ({ width: e = "25", height: t = "25", color: n = "currentColor" }) => /* @__PURE__ */ We.jsx(
  "svg",
  {
    width: e,
    height: t,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ We.jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M21.4144 6.00015L20.7073 6.70726L9.70726 17.7073C9.31673 18.0978 8.68357 18.0978 8.29304 17.7073L3.29304 12.7073L2.58594 12.0002L4.00015 10.5859L4.70726 11.293L9.00015 15.5859L19.293 5.29304L20.0002 4.58594L21.4144 6.00015Z",
        fill: n
      }
    )
  }
);
Rr.displayName = "Check";
var lt = /* @__PURE__ */ ((e) => (e.Text = "text", e.Number = "number", e.Password = "password", e.Telephone = "tel", e.Email = "email", e))(lt || {}), bt = /* @__PURE__ */ ((e) => (e.Small = "small", e.Medium = "medium", e))(bt || {}), Gt = /* @__PURE__ */ ((e) => (e.Light = "light", e.Dark = "dark", e))(Gt || {});
const fi = _e.forwardRef((e, t) => {
  const M = e, {
    id: n,
    value: r,
    defaultValue: a,
    className: i,
    disabled: c,
    endIcon: s,
    startIcon: u,
    isError: l,
    isHint: d,
    helperText: f,
    placeholder: v,
    label: p,
    type: y,
    name: g,
    ariaLabel: b,
    autoComplete: E,
    size: x = bt.Medium,
    theme: S = Gt.Light,
    onBlur: C,
    onChange: h,
    onFocus: $,
    onKeyDown: R,
    onKeyUp: I,
    requiredSymbol: N
  } = M, ae = xe(M, [
    "id",
    "value",
    "defaultValue",
    "className",
    "disabled",
    "endIcon",
    "startIcon",
    "isError",
    "isHint",
    "helperText",
    "placeholder",
    "label",
    "type",
    "name",
    "ariaLabel",
    "autoComplete",
    "size",
    "theme",
    "onBlur",
    "onChange",
    "onFocus",
    "onKeyDown",
    "onKeyUp",
    "requiredSymbol"
  ]), [ie, re] = oe(""), [Z, B] = oe(!1), [ee, Y] = oe(y), [te, ce] = _e.useState(!1), ye = (F) => {
    re(F.target.value), h && h(F);
  }, O = (F) => {
    C && C(F);
  }, _ = (F) => {
    $ && $(F);
  }, G = (F) => {
    R && R(F);
  }, z = (F) => {
    I && I(F);
  }, V = () => {
    ce((F) => !F);
  }, X = (F) => {
    F.animationName === "onAutoFillStart" && B(!0);
  };
  return He(() => {
    (a || r) && re(" ");
  }, [a, r]), fe(() => {
    y === lt.Password && Y(te ? lt.Text : lt.Password);
  }, [te, y]), fe(() => {
    ie.length === 0 && B(!1);
  }, [ie]), /* @__PURE__ */ T.jsxs(
    "div",
    {
      className: ne({
        Input: !0,
        "Input-without-heading ": !!p,
        [i || ""]: !!i
      }),
      children: [
        p && /* @__PURE__ */ T.jsxs(
          "label",
          {
            className: ne({
              InputLabel: !0,
              "InputLabel-small": x === bt.Small
            }),
            htmlFor: n,
            children: [
              p,
              N && /* @__PURE__ */ T.jsx(
                "span",
                {
                  style: {
                    color: typeof N == "object" ? N.color : void 0
                  },
                  children: N && "*"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ T.jsxs(
          "div",
          {
            className: ne({
              "InputBase-root": !0,
              "Input-disabled": c,
              "InputBase-error": !!l,
              "InputBase-root-dark": S === Gt.Dark
            }),
            children: [
              y !== lt.Password && u && /* @__PURE__ */ T.jsx("div", { className: "InputBase-icon-start", children: u }),
              /* @__PURE__ */ T.jsxs(
                "div",
                {
                  className: ne({
                    InputBaseInner: !0
                  }),
                  children: [
                    !p && /* @__PURE__ */ T.jsx(
                      "label",
                      {
                        style: {
                          zIndex: Z ? 1 : 0
                        },
                        className: ne({
                          InputLabel: !0,
                          "InputLabel-medium-align-center": x === bt.Medium,
                          "InputLabel-small-align-center": x === bt.Small,
                          "InputLabel-position-fixed": ie.length > 0 || Z
                        }),
                        htmlFor: n,
                        children: v
                      }
                    ),
                    /* @__PURE__ */ T.jsx(
                      "input",
                      K({
                        defaultValue: !r && a ? a : void 0,
                        "aria-label": b,
                        autoComplete: E,
                        className: ne({
                          "InputBase-input": !0,
                          "InputBase-input-dark": S === Gt.Dark,
                          "InputBase-input-small": x === bt.Small,
                          "InputBase-autofill-font": Z
                        }),
                        disabled: c,
                        name: g,
                        type: ee,
                        id: n,
                        value: r,
                        onAnimationStart: X,
                        onChange: ye,
                        onBlur: O,
                        onFocus: _,
                        onKeyDown: G,
                        onKeyUp: z,
                        placeholder: p ? v : "",
                        ref: t
                      }, ae)
                    )
                  ]
                }
              ),
              y !== lt.Password && s && /* @__PURE__ */ T.jsx("div", { className: "InputBase-icon-end", children: s }),
              y === lt.Password && /* @__PURE__ */ T.jsx(
                "button",
                {
                  type: "button",
                  "aria-label": "toggle password visibility",
                  className: "InputBase-icon-end",
                  onClick: V,
                  children: te ? /* @__PURE__ */ T.jsx(Uo, {}) : /* @__PURE__ */ T.jsx(Wo, {})
                }
              )
            ]
          }
        ),
        f && /* @__PURE__ */ T.jsx(
          "p",
          {
            className: ne({
              "Input-helper-text": !0,
              "Input-hint-text": !!d,
              "Input-error-text": !!l,
              "Input-helper-text-dark": !l && S === Gt.Dark
            }),
            children: f
          }
        )
      ]
    }
  );
});
fi.displayName = "Input";
var Ae = /* @__PURE__ */ ((e) => (e.Light = "light", e.Dark = "dark", e.Green = "green", e))(Ae || {}), wt = /* @__PURE__ */ ((e) => (e.Small = "small", e.Medium = "medium", e.Large = "large", e))(wt || {});
const di = _e.forwardRef((e, t) => {
  const {
    id: n,
    name: r,
    disabled: a,
    children: i,
    value: c,
    label: s,
    className: u,
    onChange: l,
    ariaLabel: d,
    error: f,
    theme: v = Ae.Light,
    size: p = wt.Medium
  } = e, [y, g] = oe(!1), [b, E] = oe(!1), [x, S] = oe(a), C = ($) => {
    x || (g(!y), l && l(!y, $));
  }, h = ($) => {
    if (($.key === "Enter" || $.key === " ") && !x) {
      const R = {
        target: {
          ariaLabel: d,
          name: r
        }
      };
      g(!y), l && l(!y, R);
    }
  };
  return fe(() => {
    S(a);
  }, [a]), fe(() => {
    g(typeof c == "boolean" ? c : !1);
  }, [c]), fe(() => {
    E(!!f);
  }, [f]), /* @__PURE__ */ T.jsx("div", { className: "Checkbox", children: /* @__PURE__ */ T.jsxs("label", { children: [
    /* @__PURE__ */ T.jsx(
      "div",
      {
        className: ne({
          "Checkbox-checked": y,
          "Checkbox-dark-checked": y && v === Ae.Dark,
          "Checkbox-green-checked": y && v === Ae.Green,
          "Checkbox-unchecked": !y,
          "Checkbox-error": b,
          "Checkbox-disabled": x,
          "Checkbox-green-disabled": x && v === Ae.Green,
          "Checkbox-dark-disabled": x && v === Ae.Dark,
          "Checkbox-dark": v === Ae.Dark,
          "Checkbox-green": v === Ae.Green,
          [u || ""]: !!u
        }),
        children: /* @__PURE__ */ T.jsxs(
          "div",
          {
            className: ne({
              "Checkbox-container": !0,
              "Checkbox-large": p === wt.Large,
              "Checkbox-medium": p === wt.Medium,
              "Checkbox-small": p === wt.Small
            }),
            role: "input",
            tabIndex: 0,
            onKeyDown: h,
            children: [
              /* @__PURE__ */ T.jsx(
                "input",
                {
                  ref: t,
                  id: n,
                  type: "checkbox",
                  onChange: C,
                  "aria-label": d,
                  tabIndex: -1,
                  disabled: x
                }
              ),
              y && !x && /* @__PURE__ */ T.jsx(Rr, {})
            ]
          }
        )
      }
    ),
    (s || i) && /* @__PURE__ */ T.jsx(
      "div",
      {
        className: ne({
          "Checkbox-label": !0,
          "Checkbox-label-small": p === wt.Small,
          "Checkbox-label-dark": v === Ae.Dark,
          "Checkbox-label-green": v === Ae.Green,
          "Checkbox-label-disabled": x,
          "Checkbox-label-dark-disabled": x && v === Ae.Dark,
          "Checkbox-label-green-disabled": x && v === Ae.Green
        }),
        children: s || i
      }
    )
  ] }) });
});
di.displayName = "Checkbox";
var Me = /* @__PURE__ */ ((e) => (e.Light = "light", e.Dark = "dark", e.Green = "green", e))(Me || {}), qe = /* @__PURE__ */ ((e) => (e.Small = "small", e.Medium = "medium", e.Large = "large", e))(qe || {});
const vi = _e.forwardRef((e, t) => {
  const {
    id: n,
    name: r,
    className: a,
    checked: i,
    disabled: c,
    ariaLabel: s,
    label: u,
    theme: l = Me.Light,
    size: d = qe.Medium,
    onChange: f
  } = e, [v, p] = oe(!1), [y, g] = oe(c), b = (x) => {
    y || (p(!v), f && f(!v, x));
  }, E = (x) => {
    if ((x.key === "Enter" || x.key === " ") && !y) {
      const S = {
        target: {
          ariaLabel: s,
          name: r
        }
      };
      p(!v), f && f(!v, S);
    }
  };
  return fe(() => {
    g(c);
  }, [c]), fe(() => {
    p(typeof i == "boolean" ? i : !1);
  }, [i]), /* @__PURE__ */ T.jsx("div", { className: "Switch", children: /* @__PURE__ */ T.jsxs("label", { children: [
    /* @__PURE__ */ T.jsxs(
      "div",
      {
        className: ne({
          "Switch-light": l === Me.Light,
          "Switch-dark": l === Me.Dark,
          "Switch-green": l === Me.Green,
          "Switch-large": d === qe.Large,
          "Switch-medium": d === qe.Medium,
          "Switch-small": d === qe.Small,
          "Switch-light-active": v && l === Me.Light,
          "Switch-dark-active": v && l === Me.Dark,
          "Switch-green-active": v && l === Me.Green,
          "Switch-large-active": v && d === qe.Large,
          "Switch-medium-active": v && d === qe.Medium,
          "Switch-small-active": v && d === qe.Small,
          "Switch-disabled": y,
          [a || ""]: !!a
        }),
        tabIndex: 0,
        role: "input",
        onKeyDown: E,
        children: [
          /* @__PURE__ */ T.jsx(
            "input",
            {
              ref: t,
              "aria-label": s,
              tabIndex: -1,
              type: "checkbox",
              name: r,
              id: n,
              onChange: b
            }
          ),
          /* @__PURE__ */ T.jsx(
            "div",
            {
              className: ne({
                "Switch-ellipse": !0
              })
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ T.jsx(
      "div",
      {
        className: ne({
          "Switch-label": !0,
          "Switch-label-small": d === qe.Small,
          "Switch-label-dark": l === Me.Dark,
          "Switch-label-green": l === Me.Green
        }),
        children: u
      }
    )
  ] }) });
});
vi.displayName = "Switch";
var hr = /* @__PURE__ */ ((e) => (e.Large = "large", e.Small = "small", e))(hr || {});
const Xu = (e) => {
  var h;
  const {
    className: t,
    size: n = hr.Large,
    tabs: r,
    gap: a,
    activeTab: i,
    activeColor: c,
    tabMarginBottom: s = 16
  } = e, [u, l] = oe((h = r[0]) == null ? void 0 : h.id), [d, f] = oe(6), [v, p] = oe(0), [y, g] = oe("none"), [b, E] = oe(0), x = vt(() => r.find(($) => $.id === u), [u, r]), S = ge(new Array(r.length)), C = ($, R, I) => {
    R !== u && (g("left 200ms linear, width 200ms linear"), f($.currentTarget.offsetLeft), p($.currentTarget.offsetWidth), l(R), I && I(R));
  };
  return He(() => {
    if (i) {
      const $ = r.findIndex((R) => R.id === i);
      E($), l(i);
    }
  }, [i, r]), He(() => {
    var I, N;
    const $ = (I = S.current[b]) == null ? void 0 : I.offsetWidth, R = (N = S.current[b]) == null ? void 0 : N.offsetLeft;
    p($), f(R);
  }, [b]), /* @__PURE__ */ T.jsxs("div", { className: "Tabs", children: [
    /* @__PURE__ */ T.jsxs(
      "div",
      {
        style: { gap: a },
        className: ne({
          "Tabs-base": !0,
          [t || ""]: !!t
        }),
        children: [
          r == null ? void 0 : r.map(($, R) => /* @__PURE__ */ T.jsx(
            "button",
            {
              ref: (I) => S.current[R] = I,
              "aria-label": $.label,
              disabled: $.disabled,
              className: ne({
                "Tab-root": !0,
                "Tab-root-active": u === $.id,
                "Tab-root-small": n === hr.Small
              }),
              onClick: (I) => C(I, $.id, $.onClick),
              children: /* @__PURE__ */ T.jsx(
                "div",
                {
                  style: { marginBottom: s },
                  className: ne({
                    "Tab-label": !0
                  }),
                  children: $.label
                }
              )
            },
            $.id
          )),
          /* @__PURE__ */ T.jsx(
            "div",
            {
              style: {
                left: d,
                width: v,
                transition: y,
                backgroundColor: c
              },
              className: "Tab-active-line"
            }
          )
        ]
      }
    ),
    x && x.content && /* @__PURE__ */ T.jsx("div", { className: "Tab-content", children: x.content })
  ] });
};
const pi = _e.forwardRef((e, t) => {
  const {
    className: n,
    color: r,
    ariaLabel: a,
    content: i,
    header: c,
    contentMarginTop: s = 0,
    isOpen: u,
    onChange: l
  } = e, [d, f] = oe(u), v = ge(null), p = (b, E) => {
    const x = b.scrollHeight;
    b.style.height = (E ? x : 0) + "px";
  }, y = () => {
    f(!d), l && l(!d), v.current && p(v.current, !d);
  }, g = (b) => {
    (b.key === "Enter" || b.key === " ") && (f(!d), l && l(!d), v.current && p(v.current, !d));
  };
  return He(() => {
    const b = typeof u == "boolean" ? u : !1;
    v.current && p(v.current, b), f(b);
  }, [u]), /* @__PURE__ */ T.jsxs(
    "div",
    {
      className: ne({
        Accordion: !0,
        [n || ""]: !!n
      }),
      children: [
        /* @__PURE__ */ T.jsxs(
          "div",
          {
            ref: t,
            tabIndex: 0,
            className: "Accordion-heading",
            role: "button",
            "aria-expanded": "true",
            "aria-label": a,
            onClick: y,
            onKeyDown: g,
            children: [
              /* @__PURE__ */ T.jsx("div", { style: { color: r }, className: "Accordion-heading-label", children: c }),
              /* @__PURE__ */ T.jsx(
                "div",
                {
                  className: ne({
                    "Accordion-heading-arrow": !0,
                    "Accordion-heading-arrow-up": d
                  }),
                  children: /* @__PURE__ */ T.jsx($r, { width: "24", height: "24", color: r })
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ T.jsx(
          "div",
          {
            style: { marginTop: s },
            ref: v,
            className: ne({
              "Accordion-details": !0,
              "Accordion-details-open": d
            }),
            children: i
          }
        )
      ]
    }
  );
});
pi.displayName = "Accordion";
var hn = /* @__PURE__ */ ((e) => (e.Large = "large", e.Medium = "medium", e))(hn || {});
const Ju = (e) => {
  var f;
  const { className: t, size: n = hn.Medium, tags: r, gap: a, activeTag: i, activeColor: c } = e, [s, u] = oe((f = r[0]) == null ? void 0 : f.id), l = vt(() => r.find((v) => v.id === s), [s, r]), d = (v, p) => {
    u(v), p && p(v);
  };
  return He(() => {
    i && u(i);
  }, [i]), /* @__PURE__ */ T.jsxs("div", { className: "Tags", children: [
    /* @__PURE__ */ T.jsx(
      "div",
      {
        style: { gap: a },
        className: ne({
          "Tags-base": !0,
          [t || ""]: !!t
        }),
        children: r == null ? void 0 : r.map((v) => /* @__PURE__ */ T.jsx(
          "button",
          {
            "aria-label": v.label,
            id: v.id,
            disabled: v.disabled,
            style: { backgroundColor: s === v.id ? c : "" },
            className: ne({
              Tag: !0,
              "Tag-medium": n === hn.Medium,
              "Tag-large": n === hn.Large,
              "Tag-active": s === v.id,
              [t || ""]: !!t
            }),
            onClick: () => d(v.id, v.onClick),
            children: /* @__PURE__ */ T.jsxs("div", { className: "Tag-label", children: [
              v.startIcon && /* @__PURE__ */ T.jsx("span", { className: "Tag-icon-left", children: v.startIcon }),
              v.label,
              v.endIcon && /* @__PURE__ */ T.jsx("span", { className: "Tag-icon-right", children: v.endIcon })
            ] })
          },
          v.id
        ))
      }
    ),
    l && l.content && /* @__PURE__ */ T.jsx("div", { className: "Tag-content", children: l.content })
  ] });
};
var Kt = /* @__PURE__ */ ((e) => (e.Large = "large", e.Medium = "medium", e))(Kt || {}), yn = /* @__PURE__ */ ((e) => (e.Round = "round", e.Square = "square", e))(yn || {});
const Zu = (e) => {
  var $;
  const {
    className: t,
    size: n = Kt.Medium,
    variant: r = yn.Round,
    tags: a,
    gap: i,
    activeTag: c,
    activeColor: s,
    backgroundColor: u
  } = e, [l, d] = oe(($ = a[0]) == null ? void 0 : $.id), [f, v] = oe(6), [p, y] = oe(0), [g, b] = oe("none"), [E, x] = oe(0), S = vt(() => a.find((R) => R.id === l), [l, a]), C = ge(new Array(a.length)), h = (R, I, N) => {
    I !== l && (b("left 200ms linear, width 200ms linear"), v(R.currentTarget.offsetLeft), y(R.currentTarget.offsetWidth), d(I), N && N(I));
  };
  return He(() => {
    if (c) {
      const R = a.findIndex((I) => I.id === c);
      x(R), d(c);
    }
  }, [c, a]), He(() => {
    var N, ae;
    const R = (N = C.current[E]) == null ? void 0 : N.offsetWidth, I = (ae = C.current[E]) == null ? void 0 : ae.offsetLeft;
    y(R), v(I);
  }, [E]), /* @__PURE__ */ T.jsxs("div", { className: "SwitchTags", children: [
    /* @__PURE__ */ T.jsxs(
      "div",
      {
        style: { gap: i, backgroundColor: u },
        className: ne({
          "SwitchTags-base": !0,
          "SwitchTags-base-round": r === yn.Round,
          "SwitchTags-base-square": r === yn.Square,
          [t || ""]: !!t
        }),
        children: [
          a == null ? void 0 : a.map((R, I) => /* @__PURE__ */ T.jsxs(
            "button",
            {
              ref: (N) => C.current[I] = N,
              "aria-label": R.label,
              id: R.id,
              disabled: R.disabled,
              className: ne({
                SwitchTag: !0,
                "SwitchTag-medium": n === Kt.Medium,
                "SwitchTag-large": n === Kt.Large,
                "SwitchTag-active": l === R.id,
                [t || ""]: !!t
              }),
              onClick: (N) => h(N, R.id, R.onClick),
              children: [
                R.startIcon && /* @__PURE__ */ T.jsx("span", { className: "SwitchTag-icon-left", children: R.startIcon }),
                R.label,
                R.endIcon && /* @__PURE__ */ T.jsx("span", { className: "SwitchTag-icon-right", children: R.endIcon })
              ]
            },
            R.id
          )),
          /* @__PURE__ */ T.jsx(
            "div",
            {
              style: {
                left: f,
                width: p,
                transition: g,
                backgroundColor: s
              },
              className: ne({
                ActiveTab: !0,
                "ActiveTab-small": n === Kt.Medium
              })
            }
          )
        ]
      }
    ),
    S && S.content && /* @__PURE__ */ T.jsx("div", { className: "Tag-content", children: S.content })
  ] });
};
const mi = _e.forwardRef((e, t) => {
  const { id: n, ariaLabel: r, children: a, onClick: i } = e, c = () => {
    i && i();
  };
  return /* @__PURE__ */ T.jsx(
    "button",
    {
      type: "button",
      onClick: c,
      ref: t,
      "aria-label": r,
      id: n,
      className: "IconButton",
      tabIndex: -1,
      children: /* @__PURE__ */ T.jsx("div", { style: { display: "flex" }, tabIndex: 0, children: a })
    }
  );
});
mi.displayName = "IconButton";
function we() {
  return we = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, we.apply(this, arguments);
}
function dt(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(a) {
    if (e == null || e(a), n === !1 || !a.defaultPrevented)
      return t == null ? void 0 : t(a);
  };
}
function hi(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function Vo(...e) {
  return (t) => e.forEach(
    (n) => hi(n, t)
  );
}
function mt(...e) {
  return ft(Vo(...e), e);
}
function Yo(e, t = []) {
  let n = [];
  function r(i, c) {
    const s = /* @__PURE__ */ vr(c), u = n.length;
    n = [
      ...n,
      c
    ];
    function l(f) {
      const E = f, { scope: v, children: p } = E, y = xe(E, ["scope", "children"]), g = (v == null ? void 0 : v[e][u]) || s, b = vt(
        () => y,
        Object.values(y)
      );
      return /* @__PURE__ */ me(g.Provider, {
        value: b
      }, p);
    }
    function d(f, v) {
      const p = (v == null ? void 0 : v[e][u]) || s, y = Io(p);
      if (y)
        return y;
      if (c !== void 0)
        return c;
      throw new Error(`\`${f}\` must be used within \`${i}\``);
    }
    return l.displayName = i + "Provider", [
      l,
      d
    ];
  }
  const a = () => {
    const i = n.map((c) => /* @__PURE__ */ vr(c));
    return function(s) {
      const u = (s == null ? void 0 : s[e]) || i;
      return vt(
        () => ({
          [`__scope${e}`]: pe(K({}, s), {
            [e]: u
          })
        }),
        [
          s,
          u
        ]
      );
    };
  };
  return a.scopeName = e, [
    r,
    yi(a, ...t)
  ];
}
function yi(...e) {
  const t = e[0];
  if (e.length === 1)
    return t;
  const n = () => {
    const r = e.map(
      (a) => ({
        useScope: a(),
        scopeName: a.scopeName
      })
    );
    return function(i) {
      const c = r.reduce((s, { useScope: u, scopeName: l }) => {
        const f = u(i)[`__scope${l}`];
        return K(K({}, s), f);
      }, {});
      return vt(
        () => ({
          [`__scope${t.scopeName}`]: c
        }),
        [
          c
        ]
      );
    };
  };
  return n.scopeName = t.scopeName, n;
}
const _r = /* @__PURE__ */ Ne((e, t) => {
  const c = e, { children: n } = c, r = xe(c, ["children"]), a = Ct.toArray(n), i = a.find(bi);
  if (i) {
    const s = i.props.children, u = a.map((l) => l === i ? Ct.count(s) > 1 ? Ct.only(null) : /* @__PURE__ */ Xt(s) ? s.props.children : null : l);
    return /* @__PURE__ */ me(yr, we({}, r, {
      ref: t
    }), /* @__PURE__ */ Xt(s) ? /* @__PURE__ */ Tr(s, void 0, u) : null);
  }
  return /* @__PURE__ */ me(yr, we({}, r, {
    ref: t
  }), n);
});
_r.displayName = "Slot";
const yr = /* @__PURE__ */ Ne((e, t) => {
  const a = e, { children: n } = a, r = xe(a, ["children"]);
  return /* @__PURE__ */ Xt(n) ? /* @__PURE__ */ Tr(n, pe(K({}, wi(r, n.props)), {
    ref: t ? Vo(t, n.ref) : n.ref
  })) : Ct.count(n) > 1 ? Ct.only(null) : null;
});
yr.displayName = "SlotClone";
const gi = ({ children: e }) => /* @__PURE__ */ me(Fo, null, e);
function bi(e) {
  return /* @__PURE__ */ Xt(e) && e.type === gi;
}
function wi(e, t) {
  const n = K({}, t);
  for (const r in t) {
    const a = e[r], i = t[r];
    /^on[A-Z]/.test(r) ? a && i ? n[r] = (...s) => {
      i(...s), a(...s);
    } : a && (n[r] = a) : r === "style" ? n[r] = K(K({}, a), i) : r === "className" && (n[r] = [
      a,
      i
    ].filter(Boolean).join(" "));
  }
  return K(K({}, e), n);
}
const xi = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
], rn = xi.reduce((e, t) => {
  const n = /* @__PURE__ */ Ne((r, a) => {
    const u = r, { asChild: i } = u, c = xe(u, ["asChild"]), s = i ? _r : t;
    return fe(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ me(s, we({}, c, {
      ref: a
    }));
  });
  return n.displayName = `Primitive.${t}`, pe(K({}, e), {
    [t]: n
  });
}, {});
function Ei(e, t) {
  e && Lo(
    () => e.dispatchEvent(t)
  );
}
function et(e) {
  const t = ge(e);
  return fe(() => {
    t.current = e;
  }), vt(
    () => (...n) => {
      var r;
      return (r = t.current) === null || r === void 0 ? void 0 : r.call(t, ...n);
    },
    []
  );
}
function Ci(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = et(e);
  fe(() => {
    const r = (a) => {
      a.key === "Escape" && n(a);
    };
    return t.addEventListener("keydown", r), () => t.removeEventListener("keydown", r);
  }, [
    n,
    t
  ]);
}
const gr = "dismissableLayer.update", Si = "dismissableLayer.pointerDownOutside", Oi = "dismissableLayer.focusOutside";
let to;
const Pi = /* @__PURE__ */ vr({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Ti = /* @__PURE__ */ Ne((e, t) => {
  var n;
  const I = e, { disableOutsidePointerEvents: r = !1, onEscapeKeyDown: a, onPointerDownOutside: i, onFocusOutside: c, onInteractOutside: s, onDismiss: u } = I, l = xe(I, ["disableOutsidePointerEvents", "onEscapeKeyDown", "onPointerDownOutside", "onFocusOutside", "onInteractOutside", "onDismiss"]), d = Io(Pi), [f, v] = oe(null), p = (n = f == null ? void 0 : f.ownerDocument) !== null && n !== void 0 ? n : globalThis == null ? void 0 : globalThis.document, [, y] = oe({}), g = mt(
    t,
    (N) => v(N)
  ), b = Array.from(d.layers), [E] = [
    ...d.layersWithOutsidePointerEventsDisabled
  ].slice(-1), x = b.indexOf(E), S = f ? b.indexOf(f) : -1, C = d.layersWithOutsidePointerEventsDisabled.size > 0, h = S >= x, $ = $i((N) => {
    const ae = N.target, ie = [
      ...d.branches
    ].some(
      (re) => re.contains(ae)
    );
    !h || ie || (i == null || i(N), s == null || s(N), N.defaultPrevented || u == null || u());
  }, p), R = Ri((N) => {
    const ae = N.target;
    [
      ...d.branches
    ].some(
      (re) => re.contains(ae)
    ) || (c == null || c(N), s == null || s(N), N.defaultPrevented || u == null || u());
  }, p);
  return Ci((N) => {
    S === d.layers.size - 1 && (a == null || a(N), !N.defaultPrevented && u && (N.preventDefault(), u()));
  }, p), fe(() => {
    if (f)
      return r && (d.layersWithOutsidePointerEventsDisabled.size === 0 && (to = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), d.layersWithOutsidePointerEventsDisabled.add(f)), d.layers.add(f), no(), () => {
        r && d.layersWithOutsidePointerEventsDisabled.size === 1 && (p.body.style.pointerEvents = to);
      };
  }, [
    f,
    p,
    r,
    d
  ]), fe(() => () => {
    f && (d.layers.delete(f), d.layersWithOutsidePointerEventsDisabled.delete(f), no());
  }, [
    f,
    d
  ]), fe(() => {
    const N = () => y({});
    return document.addEventListener(gr, N), () => document.removeEventListener(gr, N);
  }, []), /* @__PURE__ */ me(rn.div, we({}, l, {
    ref: g,
    style: K({
      pointerEvents: C ? h ? "auto" : "none" : void 0
    }, e.style),
    onFocusCapture: dt(e.onFocusCapture, R.onFocusCapture),
    onBlurCapture: dt(e.onBlurCapture, R.onBlurCapture),
    onPointerDownCapture: dt(e.onPointerDownCapture, $.onPointerDownCapture)
  }));
});
function $i(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = et(e), r = ge(!1), a = ge(() => {
  });
  return fe(() => {
    const i = (s) => {
      if (s.target && !r.current) {
        let l = function() {
          zo(Si, n, u, {
            discrete: !0
          });
        };
        const u = {
          originalEvent: s
        };
        s.pointerType === "touch" ? (t.removeEventListener("click", a.current), a.current = l, t.addEventListener("click", a.current, {
          once: !0
        })) : l();
      } else
        t.removeEventListener("click", a.current);
      r.current = !1;
    }, c = window.setTimeout(() => {
      t.addEventListener("pointerdown", i);
    }, 0);
    return () => {
      window.clearTimeout(c), t.removeEventListener("pointerdown", i), t.removeEventListener("click", a.current);
    };
  }, [
    t,
    n
  ]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function Ri(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = et(e), r = ge(!1);
  return fe(() => {
    const a = (i) => {
      i.target && !r.current && zo(Oi, n, {
        originalEvent: i
      }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", a), () => t.removeEventListener("focusin", a);
  }, [
    t,
    n
  ]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function no() {
  const e = new CustomEvent(gr);
  document.dispatchEvent(e);
}
function zo(e, t, n, { discrete: r }) {
  const a = n.originalEvent.target, i = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && a.addEventListener(e, t, {
    once: !0
  }), r ? Ei(a, i) : a.dispatchEvent(i);
}
let Jn = 0;
function _i() {
  fe(() => {
    var e, t;
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (e = n[0]) !== null && e !== void 0 ? e : ro()), document.body.insertAdjacentElement("beforeend", (t = n[1]) !== null && t !== void 0 ? t : ro()), Jn++, () => {
      Jn === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(
        (r) => r.remove()
      ), Jn--;
    };
  }, []);
}
function ro() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
const Zn = "focusScope.autoFocusOnMount", Qn = "focusScope.autoFocusOnUnmount", oo = {
  bubbles: !1,
  cancelable: !0
}, ki = /* @__PURE__ */ Ne((e, t) => {
  const g = e, { loop: n = !1, trapped: r = !1, onMountAutoFocus: a, onUnmountAutoFocus: i } = g, c = xe(g, ["loop", "trapped", "onMountAutoFocus", "onUnmountAutoFocus"]), [s, u] = oe(null), l = et(a), d = et(i), f = ge(null), v = mt(
    t,
    (b) => u(b)
  ), p = ge({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  fe(() => {
    if (r) {
      let b = function(C) {
        if (p.paused || !s)
          return;
        const h = C.target;
        s.contains(h) ? f.current = h : Qe(f.current, {
          select: !0
        });
      }, E = function(C) {
        if (p.paused || !s)
          return;
        const h = C.relatedTarget;
        h !== null && (s.contains(h) || Qe(f.current, {
          select: !0
        }));
      }, x = function(C) {
        if (document.activeElement === document.body)
          for (const $ of C)
            $.removedNodes.length > 0 && Qe(s);
      };
      document.addEventListener("focusin", b), document.addEventListener("focusout", E);
      const S = new MutationObserver(x);
      return s && S.observe(s, {
        childList: !0,
        subtree: !0
      }), () => {
        document.removeEventListener("focusin", b), document.removeEventListener("focusout", E), S.disconnect();
      };
    }
  }, [
    r,
    s,
    p.paused
  ]), fe(() => {
    if (s) {
      io.add(p);
      const b = document.activeElement;
      if (!s.contains(b)) {
        const x = new CustomEvent(Zn, oo);
        s.addEventListener(Zn, l), s.dispatchEvent(x), x.defaultPrevented || (Ai(Fi(qo(s)), {
          select: !0
        }), document.activeElement === b && Qe(s));
      }
      return () => {
        s.removeEventListener(Zn, l), setTimeout(() => {
          const x = new CustomEvent(Qn, oo);
          s.addEventListener(Qn, d), s.dispatchEvent(x), x.defaultPrevented || Qe(b != null ? b : document.body, {
            select: !0
          }), s.removeEventListener(Qn, d), io.remove(p);
        }, 0);
      };
    }
  }, [
    s,
    l,
    d,
    p
  ]);
  const y = ft((b) => {
    if (!n && !r || p.paused)
      return;
    const E = b.key === "Tab" && !b.altKey && !b.ctrlKey && !b.metaKey, x = document.activeElement;
    if (E && x) {
      const S = b.currentTarget, [C, h] = Di(S);
      C && h ? !b.shiftKey && x === h ? (b.preventDefault(), n && Qe(C, {
        select: !0
      })) : b.shiftKey && x === C && (b.preventDefault(), n && Qe(h, {
        select: !0
      })) : x === S && b.preventDefault();
    }
  }, [
    n,
    r,
    p.paused
  ]);
  return /* @__PURE__ */ me(rn.div, we({
    tabIndex: -1
  }, c, {
    ref: v,
    onKeyDown: y
  }));
});
function Ai(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (Qe(r, {
      select: t
    }), document.activeElement !== n)
      return;
}
function Di(e) {
  const t = qo(e), n = ao(t, e), r = ao(t.reverse(), e);
  return [
    n,
    r
  ];
}
function qo(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const a = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || a ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}
function ao(e, t) {
  for (const n of e)
    if (!Ni(n, {
      upTo: t
    }))
      return n;
}
function Ni(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden")
    return !0;
  for (; e; ) {
    if (t !== void 0 && e === t)
      return !1;
    if (getComputedStyle(e).display === "none")
      return !0;
    e = e.parentElement;
  }
  return !1;
}
function ji(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Qe(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== n && ji(e) && t && e.select();
  }
}
const io = Ii();
function Ii() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = co(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = co(e, t), (n = e[0]) === null || n === void 0 || n.resume();
    }
  };
}
function co(e, t) {
  const n = [
    ...e
  ], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function Fi(e) {
  return e.filter(
    (t) => t.tagName !== "A"
  );
}
const $t = globalThis != null && globalThis.document ? He : () => {
}, Li = D["useId".toString()] || (() => {
});
let Mi = 0;
function Bi(e) {
  const [t, n] = D.useState(Li());
  return $t(() => {
    e || n(
      (r) => r != null ? r : String(Mi++)
    );
  }, [
    e
  ]), e || (t ? `radix-${t}` : "");
}
const Wi = ["top", "right", "bottom", "left"], tt = Math.min, $e = Math.max, En = Math.round, un = Math.floor, nt = (e) => ({
  x: e,
  y: e
}), Ui = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Vi = {
  start: "end",
  end: "start"
};
function br(e, t, n) {
  return $e(e, tt(t, n));
}
function Ge(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ke(e) {
  return e.split("-")[0];
}
function _t(e) {
  return e.split("-")[1];
}
function kr(e) {
  return e === "x" ? "y" : "x";
}
function Ar(e) {
  return e === "y" ? "height" : "width";
}
function kt(e) {
  return ["top", "bottom"].includes(Ke(e)) ? "y" : "x";
}
function Dr(e) {
  return kr(kt(e));
}
function Yi(e, t, n) {
  n === void 0 && (n = !1);
  const r = _t(e), a = Dr(e), i = Ar(a);
  let c = a === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (c = Cn(c)), [c, Cn(c)];
}
function zi(e) {
  const t = Cn(e);
  return [wr(e), t, wr(t)];
}
function wr(e) {
  return e.replace(/start|end/g, (t) => Vi[t]);
}
function qi(e, t, n) {
  const r = ["left", "right"], a = ["right", "left"], i = ["top", "bottom"], c = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? a : r : t ? r : a;
    case "left":
    case "right":
      return t ? i : c;
    default:
      return [];
  }
}
function Hi(e, t, n, r) {
  const a = _t(e);
  let i = qi(Ke(e), n === "start", r);
  return a && (i = i.map((c) => c + "-" + a), t && (i = i.concat(i.map(wr)))), i;
}
function Cn(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Ui[t]);
}
function Gi(e) {
  return K({
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }, e);
}
function Ho(e) {
  return typeof e != "number" ? Gi(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Sn(e) {
  return pe(K({}, e), {
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function so(e, t, n) {
  let {
    reference: r,
    floating: a
  } = e;
  const i = kt(t), c = Dr(t), s = Ar(c), u = Ke(t), l = i === "y", d = r.x + r.width / 2 - a.width / 2, f = r.y + r.height / 2 - a.height / 2, v = r[s] / 2 - a[s] / 2;
  let p;
  switch (u) {
    case "top":
      p = {
        x: d,
        y: r.y - a.height
      };
      break;
    case "bottom":
      p = {
        x: d,
        y: r.y + r.height
      };
      break;
    case "right":
      p = {
        x: r.x + r.width,
        y: f
      };
      break;
    case "left":
      p = {
        x: r.x - a.width,
        y: f
      };
      break;
    default:
      p = {
        x: r.x,
        y: r.y
      };
  }
  switch (_t(t)) {
    case "start":
      p[c] -= v * (n && l ? -1 : 1);
      break;
    case "end":
      p[c] += v * (n && l ? -1 : 1);
      break;
  }
  return p;
}
const Ki = (e, t, n) => Fe(void 0, null, function* () {
  const {
    placement: r = "bottom",
    strategy: a = "absolute",
    middleware: i = [],
    platform: c
  } = n, s = i.filter(Boolean), u = yield c.isRTL == null ? void 0 : c.isRTL(t);
  let l = yield c.getElementRects({
    reference: e,
    floating: t,
    strategy: a
  }), {
    x: d,
    y: f
  } = so(l, r, u), v = r, p = {}, y = 0;
  for (let g = 0; g < s.length; g++) {
    const {
      name: b,
      fn: E
    } = s[g], {
      x,
      y: S,
      data: C,
      reset: h
    } = yield E({
      x: d,
      y: f,
      initialPlacement: r,
      placement: v,
      strategy: a,
      middlewareData: p,
      rects: l,
      platform: c,
      elements: {
        reference: e,
        floating: t
      }
    });
    if (d = x != null ? x : d, f = S != null ? S : f, p = pe(K({}, p), {
      [b]: K(K({}, p[b]), C)
    }), h && y <= 50) {
      y++, typeof h == "object" && (h.placement && (v = h.placement), h.rects && (l = h.rects === !0 ? yield c.getElementRects({
        reference: e,
        floating: t,
        strategy: a
      }) : h.rects), {
        x: d,
        y: f
      } = so(l, v, u)), g = -1;
      continue;
    }
  }
  return {
    x: d,
    y: f,
    placement: v,
    strategy: a,
    middlewareData: p
  };
});
function Jt(e, t) {
  return Fe(this, null, function* () {
    var n;
    t === void 0 && (t = {});
    const {
      x: r,
      y: a,
      platform: i,
      rects: c,
      elements: s,
      strategy: u
    } = e, {
      boundary: l = "clippingAncestors",
      rootBoundary: d = "viewport",
      elementContext: f = "floating",
      altBoundary: v = !1,
      padding: p = 0
    } = Ge(t, e), y = Ho(p), b = s[v ? f === "floating" ? "reference" : "floating" : f], E = Sn(yield i.getClippingRect({
      element: (n = yield i.isElement == null ? void 0 : i.isElement(b)) == null || n ? b : b.contextElement || (yield i.getDocumentElement == null ? void 0 : i.getDocumentElement(s.floating)),
      boundary: l,
      rootBoundary: d,
      strategy: u
    })), x = f === "floating" ? pe(K({}, c.floating), {
      x: r,
      y: a
    }) : c.reference, S = yield i.getOffsetParent == null ? void 0 : i.getOffsetParent(s.floating), C = (yield i.isElement == null ? void 0 : i.isElement(S)) ? (yield i.getScale == null ? void 0 : i.getScale(S)) || {
      x: 1,
      y: 1
    } : {
      x: 1,
      y: 1
    }, h = Sn(i.convertOffsetParentRelativeRectToViewportRelativeRect ? yield i.convertOffsetParentRelativeRectToViewportRelativeRect({
      rect: x,
      offsetParent: S,
      strategy: u
    }) : x);
    return {
      top: (E.top - h.top + y.top) / C.y,
      bottom: (h.bottom - E.bottom + y.bottom) / C.y,
      left: (E.left - h.left + y.left) / C.x,
      right: (h.right - E.right + y.right) / C.x
    };
  });
}
const uo = (e) => ({
  name: "arrow",
  options: e,
  fn(n) {
    return Fe(this, null, function* () {
      const {
        x: r,
        y: a,
        placement: i,
        rects: c,
        platform: s,
        elements: u,
        middlewareData: l
      } = n, {
        element: d,
        padding: f = 0
      } = Ge(e, n) || {};
      if (d == null)
        return {};
      const v = Ho(f), p = {
        x: r,
        y: a
      }, y = Dr(i), g = Ar(y), b = yield s.getDimensions(d), E = y === "y", x = E ? "top" : "left", S = E ? "bottom" : "right", C = E ? "clientHeight" : "clientWidth", h = c.reference[g] + c.reference[y] - p[y] - c.floating[g], $ = p[y] - c.reference[y], R = yield s.getOffsetParent == null ? void 0 : s.getOffsetParent(d);
      let I = R ? R[C] : 0;
      (!I || !(yield s.isElement == null ? void 0 : s.isElement(R))) && (I = u.floating[C] || c.floating[g]);
      const N = h / 2 - $ / 2, ae = I / 2 - b[g] / 2 - 1, ie = tt(v[x], ae), re = tt(v[S], ae), Z = ie, B = I - b[g] - re, ee = I / 2 - b[g] / 2 + N, Y = br(Z, ee, B), te = !l.arrow && _t(i) != null && ee != Y && c.reference[g] / 2 - (ee < Z ? ie : re) - b[g] / 2 < 0, ce = te ? ee < Z ? ee - Z : ee - B : 0;
      return {
        [y]: p[y] + ce,
        data: K({
          [y]: Y,
          centerOffset: ee - Y - ce
        }, te && {
          alignmentOffset: ce
        }),
        reset: te
      };
    });
  }
}), Xi = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    fn(n) {
      return Fe(this, null, function* () {
        var r, a;
        const {
          placement: i,
          middlewareData: c,
          rects: s,
          initialPlacement: u,
          platform: l,
          elements: d
        } = n, Z = Ge(e, n), {
          mainAxis: f = !0,
          crossAxis: v = !0,
          fallbackPlacements: p,
          fallbackStrategy: y = "bestFit",
          fallbackAxisSideDirection: g = "none",
          flipAlignment: b = !0
        } = Z, E = xe(Z, [
          "mainAxis",
          "crossAxis",
          "fallbackPlacements",
          "fallbackStrategy",
          "fallbackAxisSideDirection",
          "flipAlignment"
        ]);
        if ((r = c.arrow) != null && r.alignmentOffset)
          return {};
        const x = Ke(i), S = Ke(u) === u, C = yield l.isRTL == null ? void 0 : l.isRTL(d.floating), h = p || (S || !b ? [Cn(u)] : zi(u));
        !p && g !== "none" && h.push(...Hi(u, b, g, C));
        const $ = [u, ...h], R = yield Jt(n, E), I = [];
        let N = ((a = c.flip) == null ? void 0 : a.overflows) || [];
        if (f && I.push(R[x]), v) {
          const B = Yi(i, s, C);
          I.push(R[B[0]], R[B[1]]);
        }
        if (N = [...N, {
          placement: i,
          overflows: I
        }], !I.every((B) => B <= 0)) {
          var ae, ie;
          const B = (((ae = c.flip) == null ? void 0 : ae.index) || 0) + 1, ee = $[B];
          if (ee)
            return {
              data: {
                index: B,
                overflows: N
              },
              reset: {
                placement: ee
              }
            };
          let Y = (ie = N.filter((te) => te.overflows[0] <= 0).sort((te, ce) => te.overflows[1] - ce.overflows[1])[0]) == null ? void 0 : ie.placement;
          if (!Y)
            switch (y) {
              case "bestFit": {
                var re;
                const te = (re = N.map((ce) => [ce.placement, ce.overflows.filter((ye) => ye > 0).reduce((ye, O) => ye + O, 0)]).sort((ce, ye) => ce[1] - ye[1])[0]) == null ? void 0 : re[0];
                te && (Y = te);
                break;
              }
              case "initialPlacement":
                Y = u;
                break;
            }
          if (i !== Y)
            return {
              reset: {
                placement: Y
              }
            };
        }
        return {};
      });
    }
  };
};
function lo(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function fo(e) {
  return Wi.some((t) => e[t] >= 0);
}
const Ji = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    fn(n) {
      return Fe(this, null, function* () {
        const {
          rects: r
        } = n, c = Ge(e, n), {
          strategy: a = "referenceHidden"
        } = c, i = xe(c, [
          "strategy"
        ]);
        switch (a) {
          case "referenceHidden": {
            const s = yield Jt(n, pe(K({}, i), {
              elementContext: "reference"
            })), u = lo(s, r.reference);
            return {
              data: {
                referenceHiddenOffsets: u,
                referenceHidden: fo(u)
              }
            };
          }
          case "escaped": {
            const s = yield Jt(n, pe(K({}, i), {
              altBoundary: !0
            })), u = lo(s, r.floating);
            return {
              data: {
                escapedOffsets: u,
                escaped: fo(u)
              }
            };
          }
          default:
            return {};
        }
      });
    }
  };
};
function Zi(e, t) {
  return Fe(this, null, function* () {
    const {
      placement: n,
      platform: r,
      elements: a
    } = e, i = yield r.isRTL == null ? void 0 : r.isRTL(a.floating), c = Ke(n), s = _t(n), u = kt(n) === "y", l = ["left", "top"].includes(c) ? -1 : 1, d = i && u ? -1 : 1, f = Ge(t, e);
    let {
      mainAxis: v,
      crossAxis: p,
      alignmentAxis: y
    } = typeof f == "number" ? {
      mainAxis: f,
      crossAxis: 0,
      alignmentAxis: null
    } : K({
      mainAxis: 0,
      crossAxis: 0,
      alignmentAxis: null
    }, f);
    return s && typeof y == "number" && (p = s === "end" ? y * -1 : y), u ? {
      x: p * d,
      y: v * l
    } : {
      x: v * l,
      y: p * d
    };
  });
}
const Qi = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    fn(n) {
      return Fe(this, null, function* () {
        const {
          x: r,
          y: a
        } = n, i = yield Zi(n, e);
        return {
          x: r + i.x,
          y: a + i.y,
          data: i
        };
      });
    }
  };
}, ec = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    fn(n) {
      return Fe(this, null, function* () {
        const {
          x: r,
          y: a,
          placement: i
        } = n, E = Ge(e, n), {
          mainAxis: c = !0,
          crossAxis: s = !1,
          limiter: u = {
            fn: (x) => {
              let {
                x: S,
                y: C
              } = x;
              return {
                x: S,
                y: C
              };
            }
          }
        } = E, l = xe(E, [
          "mainAxis",
          "crossAxis",
          "limiter"
        ]), d = {
          x: r,
          y: a
        }, f = yield Jt(n, l), v = kt(Ke(i)), p = kr(v);
        let y = d[p], g = d[v];
        if (c) {
          const x = p === "y" ? "top" : "left", S = p === "y" ? "bottom" : "right", C = y + f[x], h = y - f[S];
          y = br(C, y, h);
        }
        if (s) {
          const x = v === "y" ? "top" : "left", S = v === "y" ? "bottom" : "right", C = g + f[x], h = g - f[S];
          g = br(C, g, h);
        }
        const b = u.fn(pe(K({}, n), {
          [p]: y,
          [v]: g
        }));
        return pe(K({}, b), {
          data: {
            x: b.x - r,
            y: b.y - a
          }
        });
      });
    }
  };
}, tc = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: r,
        placement: a,
        rects: i,
        middlewareData: c
      } = t, {
        offset: s = 0,
        mainAxis: u = !0,
        crossAxis: l = !0
      } = Ge(e, t), d = {
        x: n,
        y: r
      }, f = kt(a), v = kr(f);
      let p = d[v], y = d[f];
      const g = Ge(s, t), b = typeof g == "number" ? {
        mainAxis: g,
        crossAxis: 0
      } : K({
        mainAxis: 0,
        crossAxis: 0
      }, g);
      if (u) {
        const S = v === "y" ? "height" : "width", C = i.reference[v] - i.floating[S] + b.mainAxis, h = i.reference[v] + i.reference[S] - b.mainAxis;
        p < C ? p = C : p > h && (p = h);
      }
      if (l) {
        var E, x;
        const S = v === "y" ? "width" : "height", C = ["top", "left"].includes(Ke(a)), h = i.reference[f] - i.floating[S] + (C && ((E = c.offset) == null ? void 0 : E[f]) || 0) + (C ? 0 : b.crossAxis), $ = i.reference[f] + i.reference[S] + (C ? 0 : ((x = c.offset) == null ? void 0 : x[f]) || 0) - (C ? b.crossAxis : 0);
        y < h ? y = h : y > $ && (y = $);
      }
      return {
        [v]: p,
        [f]: y
      };
    }
  };
}, nc = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    fn(n) {
      return Fe(this, null, function* () {
        const {
          placement: r,
          rects: a,
          platform: i,
          elements: c
        } = n, R = Ge(e, n), {
          apply: s = () => {
          }
        } = R, u = xe(R, [
          "apply"
        ]), l = yield Jt(n, u), d = Ke(r), f = _t(r), v = kt(r) === "y", {
          width: p,
          height: y
        } = a.floating;
        let g, b;
        d === "top" || d === "bottom" ? (g = d, b = f === ((yield i.isRTL == null ? void 0 : i.isRTL(c.floating)) ? "start" : "end") ? "left" : "right") : (b = d, g = f === "end" ? "top" : "bottom");
        const E = y - l[g], x = p - l[b], S = !n.middlewareData.shift;
        let C = E, h = x;
        if (v) {
          const I = p - l.left - l.right;
          h = f || S ? tt(x, I) : I;
        } else {
          const I = y - l.top - l.bottom;
          C = f || S ? tt(E, I) : I;
        }
        if (S && !f) {
          const I = $e(l.left, 0), N = $e(l.right, 0), ae = $e(l.top, 0), ie = $e(l.bottom, 0);
          v ? h = p - 2 * (I !== 0 || N !== 0 ? I + N : $e(l.left, l.right)) : C = y - 2 * (ae !== 0 || ie !== 0 ? ae + ie : $e(l.top, l.bottom));
        }
        yield s(pe(K({}, n), {
          availableWidth: h,
          availableHeight: C
        }));
        const $ = yield i.getDimensions(c.floating);
        return p !== $.width || y !== $.height ? {
          reset: {
            rects: !0
          }
        } : {};
      });
    }
  };
};
function rt(e) {
  return Go(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Re(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Je(e) {
  var t;
  return (t = (Go(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Go(e) {
  return e instanceof Node || e instanceof Re(e).Node;
}
function Xe(e) {
  return e instanceof Element || e instanceof Re(e).Element;
}
function Ue(e) {
  return e instanceof HTMLElement || e instanceof Re(e).HTMLElement;
}
function vo(e) {
  return typeof ShadowRoot == "undefined" ? !1 : e instanceof ShadowRoot || e instanceof Re(e).ShadowRoot;
}
function on(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: a
  } = De(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(a);
}
function rc(e) {
  return ["table", "td", "th"].includes(rt(e));
}
function Nr(e) {
  const t = jr(), n = De(e);
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function oc(e) {
  let t = Rt(e);
  for (; Ue(t) && !Rn(t); ) {
    if (Nr(t))
      return t;
    t = Rt(t);
  }
  return null;
}
function jr() {
  return typeof CSS == "undefined" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Rn(e) {
  return ["html", "body", "#document"].includes(rt(e));
}
function De(e) {
  return Re(e).getComputedStyle(e);
}
function _n(e) {
  return Xe(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  };
}
function Rt(e) {
  if (rt(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    vo(e) && e.host || // Fallback.
    Je(e)
  );
  return vo(t) ? t.host : t;
}
function Ko(e) {
  const t = Rt(e);
  return Rn(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Ue(t) && on(t) ? t : Ko(t);
}
function Zt(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const a = Ko(e), i = a === ((r = e.ownerDocument) == null ? void 0 : r.body), c = Re(a);
  return i ? t.concat(c, c.visualViewport || [], on(a) ? a : [], c.frameElement && n ? Zt(c.frameElement) : []) : t.concat(a, Zt(a, [], n));
}
function Xo(e) {
  const t = De(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const a = Ue(e), i = a ? e.offsetWidth : n, c = a ? e.offsetHeight : r, s = En(n) !== i || En(r) !== c;
  return s && (n = i, r = c), {
    width: n,
    height: r,
    $: s
  };
}
function Ir(e) {
  return Xe(e) ? e : e.contextElement;
}
function St(e) {
  const t = Ir(e);
  if (!Ue(t))
    return nt(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: a,
    $: i
  } = Xo(t);
  let c = (i ? En(n.width) : n.width) / r, s = (i ? En(n.height) : n.height) / a;
  return (!c || !Number.isFinite(c)) && (c = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: c,
    y: s
  };
}
const ac = /* @__PURE__ */ nt(0);
function Jo(e) {
  const t = Re(e);
  return !jr() || !t.visualViewport ? ac : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function ic(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Re(e) ? !1 : t;
}
function pt(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const a = e.getBoundingClientRect(), i = Ir(e);
  let c = nt(1);
  t && (r ? Xe(r) && (c = St(r)) : c = St(e));
  const s = ic(i, n, r) ? Jo(i) : nt(0);
  let u = (a.left + s.x) / c.x, l = (a.top + s.y) / c.y, d = a.width / c.x, f = a.height / c.y;
  if (i) {
    const v = Re(i), p = r && Xe(r) ? Re(r) : r;
    let y = v.frameElement;
    for (; y && r && p !== v; ) {
      const g = St(y), b = y.getBoundingClientRect(), E = De(y), x = b.left + (y.clientLeft + parseFloat(E.paddingLeft)) * g.x, S = b.top + (y.clientTop + parseFloat(E.paddingTop)) * g.y;
      u *= g.x, l *= g.y, d *= g.x, f *= g.y, u += x, l += S, y = Re(y).frameElement;
    }
  }
  return Sn({
    width: d,
    height: f,
    x: u,
    y: l
  });
}
function cc(e) {
  let {
    rect: t,
    offsetParent: n,
    strategy: r
  } = e;
  const a = Ue(n), i = Je(n);
  if (n === i)
    return t;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = nt(1);
  const u = nt(0);
  if ((a || !a && r !== "fixed") && ((rt(n) !== "body" || on(i)) && (c = _n(n)), Ue(n))) {
    const l = pt(n);
    s = St(n), u.x = l.x + n.clientLeft, u.y = l.y + n.clientTop;
  }
  return {
    width: t.width * s.x,
    height: t.height * s.y,
    x: t.x * s.x - c.scrollLeft * s.x + u.x,
    y: t.y * s.y - c.scrollTop * s.y + u.y
  };
}
function sc(e) {
  return Array.from(e.getClientRects());
}
function Zo(e) {
  return pt(Je(e)).left + _n(e).scrollLeft;
}
function uc(e) {
  const t = Je(e), n = _n(e), r = e.ownerDocument.body, a = $e(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = $e(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let c = -n.scrollLeft + Zo(e);
  const s = -n.scrollTop;
  return De(r).direction === "rtl" && (c += $e(t.clientWidth, r.clientWidth) - a), {
    width: a,
    height: i,
    x: c,
    y: s
  };
}
function lc(e, t) {
  const n = Re(e), r = Je(e), a = n.visualViewport;
  let i = r.clientWidth, c = r.clientHeight, s = 0, u = 0;
  if (a) {
    i = a.width, c = a.height;
    const l = jr();
    (!l || l && t === "fixed") && (s = a.offsetLeft, u = a.offsetTop);
  }
  return {
    width: i,
    height: c,
    x: s,
    y: u
  };
}
function fc(e, t) {
  const n = pt(e, !0, t === "fixed"), r = n.top + e.clientTop, a = n.left + e.clientLeft, i = Ue(e) ? St(e) : nt(1), c = e.clientWidth * i.x, s = e.clientHeight * i.y, u = a * i.x, l = r * i.y;
  return {
    width: c,
    height: s,
    x: u,
    y: l
  };
}
function po(e, t, n) {
  let r;
  if (t === "viewport")
    r = lc(e, n);
  else if (t === "document")
    r = uc(Je(e));
  else if (Xe(t))
    r = fc(t, n);
  else {
    const a = Jo(e);
    r = pe(K({}, t), {
      x: t.x - a.x,
      y: t.y - a.y
    });
  }
  return Sn(r);
}
function Qo(e, t) {
  const n = Rt(e);
  return n === t || !Xe(n) || Rn(n) ? !1 : De(n).position === "fixed" || Qo(n, t);
}
function dc(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Zt(e, [], !1).filter((s) => Xe(s) && rt(s) !== "body"), a = null;
  const i = De(e).position === "fixed";
  let c = i ? Rt(e) : e;
  for (; Xe(c) && !Rn(c); ) {
    const s = De(c), u = Nr(c);
    !u && s.position === "fixed" && (a = null), (i ? !u && !a : !u && s.position === "static" && !!a && ["absolute", "fixed"].includes(a.position) || on(c) && !u && Qo(e, c)) ? r = r.filter((d) => d !== c) : a = s, c = Rt(c);
  }
  return t.set(e, r), r;
}
function vc(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: a
  } = e;
  const c = [...n === "clippingAncestors" ? dc(t, this._c) : [].concat(n), r], s = c[0], u = c.reduce((l, d) => {
    const f = po(t, d, a);
    return l.top = $e(f.top, l.top), l.right = tt(f.right, l.right), l.bottom = tt(f.bottom, l.bottom), l.left = $e(f.left, l.left), l;
  }, po(t, s, a));
  return {
    width: u.right - u.left,
    height: u.bottom - u.top,
    x: u.left,
    y: u.top
  };
}
function pc(e) {
  return Xo(e);
}
function mc(e, t, n) {
  const r = Ue(t), a = Je(t), i = n === "fixed", c = pt(e, !0, i, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const u = nt(0);
  if (r || !r && !i)
    if ((rt(t) !== "body" || on(a)) && (s = _n(t)), r) {
      const l = pt(t, !0, i, t);
      u.x = l.x + t.clientLeft, u.y = l.y + t.clientTop;
    } else
      a && (u.x = Zo(a));
  return {
    x: c.left + s.scrollLeft - u.x,
    y: c.top + s.scrollTop - u.y,
    width: c.width,
    height: c.height
  };
}
function mo(e, t) {
  return !Ue(e) || De(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function ea(e, t) {
  const n = Re(e);
  if (!Ue(e))
    return n;
  let r = mo(e, t);
  for (; r && rc(r) && De(r).position === "static"; )
    r = mo(r, t);
  return r && (rt(r) === "html" || rt(r) === "body" && De(r).position === "static" && !Nr(r)) ? n : r || oc(e) || n;
}
const hc = function(e) {
  return Fe(this, null, function* () {
    let {
      reference: t,
      floating: n,
      strategy: r
    } = e;
    const a = this.getOffsetParent || ea, i = this.getDimensions;
    return {
      reference: mc(t, yield a(n), r),
      floating: K({
        x: 0,
        y: 0
      }, yield i(n))
    };
  });
};
function yc(e) {
  return De(e).direction === "rtl";
}
const gc = {
  convertOffsetParentRelativeRectToViewportRelativeRect: cc,
  getDocumentElement: Je,
  getClippingRect: vc,
  getOffsetParent: ea,
  getElementRects: hc,
  getClientRects: sc,
  getDimensions: pc,
  getScale: St,
  isElement: Xe,
  isRTL: yc
};
function bc(e, t) {
  let n = null, r;
  const a = Je(e);
  function i() {
    clearTimeout(r), n && n.disconnect(), n = null;
  }
  function c(s, u) {
    s === void 0 && (s = !1), u === void 0 && (u = 1), i();
    const {
      left: l,
      top: d,
      width: f,
      height: v
    } = e.getBoundingClientRect();
    if (s || t(), !f || !v)
      return;
    const p = un(d), y = un(a.clientWidth - (l + f)), g = un(a.clientHeight - (d + v)), b = un(l), x = {
      rootMargin: -p + "px " + -y + "px " + -g + "px " + -b + "px",
      threshold: $e(0, tt(1, u)) || 1
    };
    let S = !0;
    function C(h) {
      const $ = h[0].intersectionRatio;
      if ($ !== u) {
        if (!S)
          return c();
        $ ? c(!1, $) : r = setTimeout(() => {
          c(!1, 1e-7);
        }, 100);
      }
      S = !1;
    }
    try {
      n = new IntersectionObserver(C, pe(K({}, x), {
        // Handle <iframe>s
        root: a.ownerDocument
      }));
    } catch (h) {
      n = new IntersectionObserver(C, x);
    }
    n.observe(e);
  }
  return c(!0), i;
}
function wc(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: a = !0,
    ancestorResize: i = !0,
    elementResize: c = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: u = !1
  } = r, l = Ir(e), d = a || i ? [...l ? Zt(l) : [], ...Zt(t)] : [];
  d.forEach((E) => {
    a && E.addEventListener("scroll", n, {
      passive: !0
    }), i && E.addEventListener("resize", n);
  });
  const f = l && s ? bc(l, n) : null;
  let v = -1, p = null;
  c && (p = new ResizeObserver((E) => {
    let [x] = E;
    x && x.target === l && p && (p.unobserve(t), cancelAnimationFrame(v), v = requestAnimationFrame(() => {
      p && p.observe(t);
    })), n();
  }), l && !u && p.observe(l), p.observe(t));
  let y, g = u ? pt(e) : null;
  u && b();
  function b() {
    const E = pt(e);
    g && (E.x !== g.x || E.y !== g.y || E.width !== g.width || E.height !== g.height) && n(), g = E, y = requestAnimationFrame(b);
  }
  return n(), () => {
    d.forEach((E) => {
      a && E.removeEventListener("scroll", n), i && E.removeEventListener("resize", n);
    }), f && f(), p && p.disconnect(), p = null, u && cancelAnimationFrame(y);
  };
}
const xc = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), a = K({
    platform: gc
  }, n), i = pe(K({}, a.platform), {
    _c: r
  });
  return Ki(e, t, pe(K({}, a), {
    platform: i
  }));
}, Ec = (e) => {
  function t(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const {
        element: r,
        padding: a
      } = typeof e == "function" ? e(n) : e;
      return r && t(r) ? r.current != null ? uo({
        element: r.current,
        padding: a
      }).fn(n) : {} : r ? uo({
        element: r,
        padding: a
      }).fn(n) : {};
    }
  };
};
var gn = typeof document != "undefined" ? He : fe;
function On(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, r, a;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n != t.length)
        return !1;
      for (r = n; r-- !== 0; )
        if (!On(e[r], t[r]))
          return !1;
      return !0;
    }
    if (a = Object.keys(e), n = a.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!{}.hasOwnProperty.call(t, a[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      const i = a[r];
      if (!(i === "_owner" && e.$$typeof) && !On(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function ta(e) {
  return typeof window == "undefined" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function ho(e, t) {
  const n = ta(e);
  return Math.round(t * n) / n;
}
function yo(e) {
  const t = D.useRef(e);
  return gn(() => {
    t.current = e;
  }), t;
}
function Cc(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: a,
    elements: {
      reference: i,
      floating: c
    } = {},
    transform: s = !0,
    whileElementsMounted: u,
    open: l
  } = e, [d, f] = D.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [v, p] = D.useState(r);
  On(v, r) || p(r);
  const [y, g] = D.useState(null), [b, E] = D.useState(null), x = D.useCallback((Y) => {
    Y != $.current && ($.current = Y, g(Y));
  }, [g]), S = D.useCallback((Y) => {
    Y !== R.current && (R.current = Y, E(Y));
  }, [E]), C = i || y, h = c || b, $ = D.useRef(null), R = D.useRef(null), I = D.useRef(d), N = yo(u), ae = yo(a), ie = D.useCallback(() => {
    if (!$.current || !R.current)
      return;
    const Y = {
      placement: t,
      strategy: n,
      middleware: v
    };
    ae.current && (Y.platform = ae.current), xc($.current, R.current, Y).then((te) => {
      const ce = pe(K({}, te), {
        isPositioned: !0
      });
      re.current && !On(I.current, ce) && (I.current = ce, ri.flushSync(() => {
        f(ce);
      }));
    });
  }, [v, t, n, ae]);
  gn(() => {
    l === !1 && I.current.isPositioned && (I.current.isPositioned = !1, f((Y) => pe(K({}, Y), {
      isPositioned: !1
    })));
  }, [l]);
  const re = D.useRef(!1);
  gn(() => (re.current = !0, () => {
    re.current = !1;
  }), []), gn(() => {
    if (C && ($.current = C), h && (R.current = h), C && h) {
      if (N.current)
        return N.current(C, h, ie);
      ie();
    }
  }, [C, h, ie, N]);
  const Z = D.useMemo(() => ({
    reference: $,
    floating: R,
    setReference: x,
    setFloating: S
  }), [x, S]), B = D.useMemo(() => ({
    reference: C,
    floating: h
  }), [C, h]), ee = D.useMemo(() => {
    const Y = {
      position: n,
      left: 0,
      top: 0
    };
    if (!B.floating)
      return Y;
    const te = ho(B.floating, d.x), ce = ho(B.floating, d.y);
    return s ? K(pe(K({}, Y), {
      transform: "translate(" + te + "px, " + ce + "px)"
    }), ta(B.floating) >= 1.5 && {
      willChange: "transform"
    }) : {
      position: n,
      left: te,
      top: ce
    };
  }, [n, s, B.floating, d.x, d.y]);
  return D.useMemo(() => pe(K({}, d), {
    update: ie,
    refs: Z,
    elements: B,
    floatingStyles: ee
  }), [d, ie, Z, B, ee]);
}
function Sc(e) {
  const [t, n] = oe(void 0);
  return $t(() => {
    if (e) {
      n({
        width: e.offsetWidth,
        height: e.offsetHeight
      });
      const r = new ResizeObserver((a) => {
        if (!Array.isArray(a) || !a.length)
          return;
        const i = a[0];
        let c, s;
        if ("borderBoxSize" in i) {
          const u = i.borderBoxSize, l = Array.isArray(u) ? u[0] : u;
          c = l.inlineSize, s = l.blockSize;
        } else
          c = e.offsetWidth, s = e.offsetHeight;
        n({
          width: c,
          height: s
        });
      });
      return r.observe(e, {
        box: "border-box"
      }), () => r.unobserve(e);
    } else
      n(void 0);
  }, [
    e
  ]), t;
}
const na = "Popper", [ra, oa] = Yo(na), [Oc, aa] = ra(na), Pc = (e) => {
  const { __scopePopper: t, children: n } = e, [r, a] = oe(null);
  return /* @__PURE__ */ me(Oc, {
    scope: t,
    anchor: r,
    onAnchorChange: a
  }, n);
}, Tc = "PopperAnchor", $c = /* @__PURE__ */ Ne((e, t) => {
  const u = e, { __scopePopper: n, virtualRef: r } = u, a = xe(u, ["__scopePopper", "virtualRef"]), i = aa(Tc, n), c = ge(null), s = mt(t, c);
  return fe(() => {
    i.onAnchorChange((r == null ? void 0 : r.current) || c.current);
  }), r ? null : /* @__PURE__ */ me(rn.div, we({}, a, {
    ref: s
  }));
}), ia = "PopperContent", [Rc, Qu] = ra(ia), _c = /* @__PURE__ */ Ne((e, t) => {
  var n, r, a, i, c, s, u, l;
  const Ce = e, { __scopePopper: d, side: f = "bottom", sideOffset: v = 0, align: p = "center", alignOffset: y = 0, arrowPadding: g = 0, avoidCollisions: b = !0, collisionBoundary: E = [], collisionPadding: x = 0, sticky: S = "partial", hideWhenDetached: C = !1, updatePositionStrategy: h = "optimized", onPlaced: $ } = Ce, R = xe(Ce, ["__scopePopper", "side", "sideOffset", "align", "alignOffset", "arrowPadding", "avoidCollisions", "collisionBoundary", "collisionPadding", "sticky", "hideWhenDetached", "updatePositionStrategy", "onPlaced"]), I = aa(ia, d), [N, ae] = oe(null), ie = mt(
    t,
    (Se) => ae(Se)
  ), [re, Z] = oe(null), B = Sc(re), ee = (n = B == null ? void 0 : B.width) !== null && n !== void 0 ? n : 0, Y = (r = B == null ? void 0 : B.height) !== null && r !== void 0 ? r : 0, te = f + (p !== "center" ? "-" + p : ""), ce = typeof x == "number" ? x : K({
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }, x), ye = Array.isArray(E) ? E : [
    E
  ], O = ye.length > 0, _ = {
    padding: ce,
    boundary: ye.filter(kc),
    // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
    altBoundary: O
  }, { refs: G, floatingStyles: z, placement: V, isPositioned: X, middlewareData: M } = Cc({
    // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
    strategy: "fixed",
    placement: te,
    whileElementsMounted: (...Se) => wc(...Se, {
      animationFrame: h === "always"
    }),
    elements: {
      reference: I.anchor
    },
    middleware: [
      Qi({
        mainAxis: v + Y,
        alignmentAxis: y
      }),
      b && ec(K({
        mainAxis: !0,
        crossAxis: !1,
        limiter: S === "partial" ? tc() : void 0
      }, _)),
      b && Xi(K({}, _)),
      nc(pe(K({}, _), {
        apply: ({ elements: Se, rects: Ze, availableWidth: ot, availableHeight: je }) => {
          const { width: At, height: Dt } = Ze.reference, ke = Se.floating.style;
          ke.setProperty("--radix-popper-available-width", `${ot}px`), ke.setProperty("--radix-popper-available-height", `${je}px`), ke.setProperty("--radix-popper-anchor-width", `${At}px`), ke.setProperty("--radix-popper-anchor-height", `${Dt}px`);
        }
      })),
      re && Ec({
        element: re,
        padding: g
      }),
      Ac({
        arrowWidth: ee,
        arrowHeight: Y
      }),
      C && Ji(K({
        strategy: "referenceHidden"
      }, _))
    ]
  }), [F, U] = ca(V), q = et($);
  $t(() => {
    X && (q == null || q());
  }, [
    X,
    q
  ]);
  const H = (a = M.arrow) === null || a === void 0 ? void 0 : a.x, he = (i = M.arrow) === null || i === void 0 ? void 0 : i.y, k = ((c = M.arrow) === null || c === void 0 ? void 0 : c.centerOffset) !== 0, [Ee, Le] = oe();
  return $t(() => {
    N && Le(window.getComputedStyle(N).zIndex);
  }, [
    N
  ]), /* @__PURE__ */ me("div", {
    ref: G.setFloating,
    "data-radix-popper-content-wrapper": "",
    style: pe(K({}, z), {
      transform: X ? z.transform : "translate(0, -200%)",
      // keep off the page when measuring
      minWidth: "max-content",
      zIndex: Ee,
      "--radix-popper-transform-origin": [
        (s = M.transformOrigin) === null || s === void 0 ? void 0 : s.x,
        (u = M.transformOrigin) === null || u === void 0 ? void 0 : u.y
      ].join(" ")
    }),
    dir: e.dir
  }, /* @__PURE__ */ me(Rc, {
    scope: d,
    placedSide: F,
    onArrowChange: Z,
    arrowX: H,
    arrowY: he,
    shouldHideArrow: k
  }, /* @__PURE__ */ me(rn.div, we({
    "data-side": F,
    "data-align": U
  }, R, {
    ref: ie,
    style: pe(K({}, R.style), {
      // if the PopperContent hasn't been placed yet (not all measurements done)
      // we prevent animations so that users's animation don't kick in too early referring wrong sides
      animation: X ? void 0 : "none",
      // hide the content if using the hide middleware and should be hidden
      opacity: (l = M.hide) !== null && l !== void 0 && l.referenceHidden ? 0 : void 0
    })
  }))));
});
function kc(e) {
  return e !== null;
}
const Ac = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var n, r, a, i, c;
    const { placement: s, rects: u, middlewareData: l } = t, f = ((n = l.arrow) === null || n === void 0 ? void 0 : n.centerOffset) !== 0, v = f ? 0 : e.arrowWidth, p = f ? 0 : e.arrowHeight, [y, g] = ca(s), b = {
      start: "0%",
      center: "50%",
      end: "100%"
    }[g], E = ((r = (a = l.arrow) === null || a === void 0 ? void 0 : a.x) !== null && r !== void 0 ? r : 0) + v / 2, x = ((i = (c = l.arrow) === null || c === void 0 ? void 0 : c.y) !== null && i !== void 0 ? i : 0) + p / 2;
    let S = "", C = "";
    return y === "bottom" ? (S = f ? b : `${E}px`, C = `${-p}px`) : y === "top" ? (S = f ? b : `${E}px`, C = `${u.floating.height + p}px`) : y === "right" ? (S = `${-p}px`, C = f ? b : `${x}px`) : y === "left" && (S = `${u.floating.width + p}px`, C = f ? b : `${x}px`), {
      data: {
        x: S,
        y: C
      }
    };
  }
});
function ca(e) {
  const [t, n = "center"] = e.split("-");
  return [
    t,
    n
  ];
}
const Dc = Pc, Nc = $c, jc = _c;
function Ic(e, t) {
  return ti((n, r) => {
    const a = t[n][r];
    return a != null ? a : n;
  }, e);
}
const sa = (e) => {
  const { present: t, children: n } = e, r = Fc(t), a = typeof n == "function" ? n({
    present: r.isPresent
  }) : Ct.only(n), i = mt(r.ref, a.ref);
  return typeof n == "function" || r.isPresent ? /* @__PURE__ */ Tr(a, {
    ref: i
  }) : null;
};
sa.displayName = "Presence";
function Fc(e) {
  const [t, n] = oe(), r = ge({}), a = ge(e), i = ge("none"), c = e ? "mounted" : "unmounted", [s, u] = Ic(c, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return fe(() => {
    const l = ln(r.current);
    i.current = s === "mounted" ? l : "none";
  }, [
    s
  ]), $t(() => {
    const l = r.current, d = a.current;
    if (d !== e) {
      const v = i.current, p = ln(l);
      e ? u("MOUNT") : p === "none" || (l == null ? void 0 : l.display) === "none" ? u("UNMOUNT") : u(d && v !== p ? "ANIMATION_OUT" : "UNMOUNT"), a.current = e;
    }
  }, [
    e,
    u
  ]), $t(() => {
    if (t) {
      const l = (f) => {
        const p = ln(r.current).includes(f.animationName);
        f.target === t && p && Lo(
          () => u("ANIMATION_END")
        );
      }, d = (f) => {
        f.target === t && (i.current = ln(r.current));
      };
      return t.addEventListener("animationstart", d), t.addEventListener("animationcancel", l), t.addEventListener("animationend", l), () => {
        t.removeEventListener("animationstart", d), t.removeEventListener("animationcancel", l), t.removeEventListener("animationend", l);
      };
    } else
      u("ANIMATION_END");
  }, [
    t,
    u
  ]), {
    isPresent: [
      "mounted",
      "unmountSuspended"
    ].includes(s),
    ref: ft((l) => {
      l && (r.current = getComputedStyle(l)), n(l);
    }, [])
  };
}
function ln(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function Lc({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [r, a] = Mc({
    defaultProp: t,
    onChange: n
  }), i = e !== void 0, c = i ? e : r, s = et(n), u = ft((l) => {
    if (i) {
      const f = typeof l == "function" ? l(e) : l;
      f !== e && s(f);
    } else
      a(l);
  }, [
    i,
    e,
    a,
    s
  ]);
  return [
    c,
    u
  ];
}
function Mc({ defaultProp: e, onChange: t }) {
  const n = oe(e), [r] = n, a = ge(r), i = et(t);
  return fe(() => {
    a.current !== r && (i(r), a.current = r);
  }, [
    r,
    a,
    i
  ]), n;
}
var Bc = function(e) {
  if (typeof document == "undefined")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, ht = /* @__PURE__ */ new WeakMap(), fn = /* @__PURE__ */ new WeakMap(), dn = {}, er = 0, ua = function(e) {
  return e && (e.host || ua(e.parentNode));
}, Wc = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = ua(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, Uc = function(e, t, n, r) {
  var a = Wc(t, Array.isArray(e) ? e : [e]);
  dn[n] || (dn[n] = /* @__PURE__ */ new WeakMap());
  var i = dn[n], c = [], s = /* @__PURE__ */ new Set(), u = new Set(a), l = function(f) {
    !f || s.has(f) || (s.add(f), l(f.parentNode));
  };
  a.forEach(l);
  var d = function(f) {
    !f || u.has(f) || Array.prototype.forEach.call(f.children, function(v) {
      if (s.has(v))
        d(v);
      else {
        var p = v.getAttribute(r), y = p !== null && p !== "false", g = (ht.get(v) || 0) + 1, b = (i.get(v) || 0) + 1;
        ht.set(v, g), i.set(v, b), c.push(v), g === 1 && y && fn.set(v, !0), b === 1 && v.setAttribute(n, "true"), y || v.setAttribute(r, "true");
      }
    });
  };
  return d(t), s.clear(), er++, function() {
    c.forEach(function(f) {
      var v = ht.get(f) - 1, p = i.get(f) - 1;
      ht.set(f, v), i.set(f, p), v || (fn.has(f) || f.removeAttribute(r), fn.delete(f)), p || f.removeAttribute(n);
    }), er--, er || (ht = /* @__PURE__ */ new WeakMap(), ht = /* @__PURE__ */ new WeakMap(), fn = /* @__PURE__ */ new WeakMap(), dn = {});
  };
}, Vc = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), a = t || Bc(e);
  return a ? (r.push.apply(r, Array.from(a.querySelectorAll("[aria-live]"))), Uc(r, a, n, "aria-hidden")) : function() {
    return null;
  };
}, Be = function() {
  return Be = Object.assign || function(t) {
    for (var n, r = 1, a = arguments.length; r < a; r++) {
      n = arguments[r];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, Be.apply(this, arguments);
};
function la(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
}
function Yc(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, a = t.length, i; r < a; r++)
      (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
var bn = "right-scroll-bar-position", wn = "width-before-scroll-bar", zc = "with-scroll-bars-hidden", qc = "--removed-body-scroll-bar-size";
function Hc(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Gc(e, t) {
  var n = oe(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var a = n.value;
          a !== r && (n.value = r, n.callback(r, a));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
function fa(e, t) {
  return Gc(t || null, function(n) {
    return e.forEach(function(r) {
      return Hc(r, n);
    });
  });
}
function da(e) {
  return e;
}
function va(e, t) {
  t === void 0 && (t = da);
  var n = [], r = !1, a = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(i) {
      var c = t(i, r);
      return n.push(c), function() {
        n = n.filter(function(s) {
          return s !== c;
        });
      };
    },
    assignSyncMedium: function(i) {
      for (r = !0; n.length; ) {
        var c = n;
        n = [], c.forEach(i);
      }
      n = {
        push: function(s) {
          return i(s);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(i) {
      r = !0;
      var c = [];
      if (n.length) {
        var s = n;
        n = [], s.forEach(i), c = n;
      }
      var u = function() {
        var d = c;
        c = [], d.forEach(i);
      }, l = function() {
        return Promise.resolve().then(u);
      };
      l(), n = {
        push: function(d) {
          c.push(d), l();
        },
        filter: function(d) {
          return c = c.filter(d), n;
        }
      };
    }
  };
  return a;
}
function Fr(e, t) {
  return t === void 0 && (t = da), va(e, t);
}
function pa(e) {
  e === void 0 && (e = {});
  var t = va(null);
  return t.options = Be({ async: !0, ssr: !1 }, e), t;
}
var ma = function(e) {
  var t = e.sideCar, n = la(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return D.createElement(r, Be({}, n));
};
ma.isSideCarExport = !0;
function Kc(e, t) {
  return e.useMedium(t), ma;
}
var ha = pa(), tr = function() {
}, kn = D.forwardRef(function(e, t) {
  var n = D.useRef(null), r = D.useState({
    onScrollCapture: tr,
    onWheelCapture: tr,
    onTouchMoveCapture: tr
  }), a = r[0], i = r[1], c = e.forwardProps, s = e.children, u = e.className, l = e.removeScrollBar, d = e.enabled, f = e.shards, v = e.sideCar, p = e.noIsolation, y = e.inert, g = e.allowPinchZoom, b = e.as, E = b === void 0 ? "div" : b, x = la(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]), S = v, C = fa([n, t]), h = Be(Be({}, x), a);
  return D.createElement(
    D.Fragment,
    null,
    d && D.createElement(S, { sideCar: ha, removeScrollBar: l, shards: f, noIsolation: p, inert: y, setCallbacks: i, allowPinchZoom: !!g, lockRef: n }),
    c ? D.cloneElement(D.Children.only(s), Be(Be({}, h), { ref: C })) : D.createElement(E, Be({}, h, { className: u, ref: C }), s)
  );
});
kn.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
kn.classNames = {
  fullWidth: wn,
  zeroRight: bn
};
var go, Xc = function() {
  if (go)
    return go;
  if (typeof __webpack_nonce__ != "undefined")
    return __webpack_nonce__;
};
function Jc() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = Xc();
  return t && e.setAttribute("nonce", t), e;
}
function Zc(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Qc(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var es = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = Jc()) && (Zc(t, n), Qc(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, ts = function() {
  var e = es();
  return function(t, n) {
    D.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, ya = function() {
  var e = ts(), t = function(n) {
    var r = n.styles, a = n.dynamic;
    return e(r, a), null;
  };
  return t;
}, ns = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, nr = function(e) {
  return parseInt(e || "", 10) || 0;
}, rs = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], a = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [nr(n), nr(r), nr(a)];
}, os = function(e) {
  if (e === void 0 && (e = "margin"), typeof window == "undefined")
    return ns;
  var t = rs(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, as = ya(), is = function(e, t, n, r) {
  var a = e.left, i = e.top, c = e.right, s = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(zc, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(s, "px ").concat(r, `;
  }
  body {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(a, `px;
    padding-top: `).concat(i, `px;
    padding-right: `).concat(c, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(s, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(s, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(bn, ` {
    right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(wn, ` {
    margin-right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(bn, " .").concat(bn, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(wn, " .").concat(wn, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body {
    `).concat(qc, ": ").concat(s, `px;
  }
`);
}, cs = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, a = r === void 0 ? "margin" : r, i = D.useMemo(function() {
    return os(a);
  }, [a]);
  return D.createElement(as, { styles: is(i, !t, a, n ? "" : "!important") });
}, xr = !1;
if (typeof window != "undefined")
  try {
    var vn = Object.defineProperty({}, "passive", {
      get: function() {
        return xr = !0, !0;
      }
    });
    window.addEventListener("test", vn, vn), window.removeEventListener("test", vn, vn);
  } catch (e) {
    xr = !1;
  }
var yt = xr ? { passive: !1 } : !1, ss = function(e) {
  return e.tagName === "TEXTAREA";
}, ga = function(e, t) {
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !ss(e) && n[t] === "visible")
  );
}, us = function(e) {
  return ga(e, "overflowY");
}, ls = function(e) {
  return ga(e, "overflowX");
}, bo = function(e, t) {
  var n = t;
  do {
    typeof ShadowRoot != "undefined" && n instanceof ShadowRoot && (n = n.host);
    var r = ba(e, n);
    if (r) {
      var a = wa(e, n), i = a[1], c = a[2];
      if (i > c)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== document.body);
  return !1;
}, fs = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, ds = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, ba = function(e, t) {
  return e === "v" ? us(t) : ls(t);
}, wa = function(e, t) {
  return e === "v" ? fs(t) : ds(t);
}, vs = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, ps = function(e, t, n, r, a) {
  var i = vs(e, window.getComputedStyle(t).direction), c = i * r, s = n.target, u = t.contains(s), l = !1, d = c > 0, f = 0, v = 0;
  do {
    var p = wa(e, s), y = p[0], g = p[1], b = p[2], E = g - b - i * y;
    (y || E) && ba(e, s) && (f += E, v += y), s = s.parentNode;
  } while (
    // portaled content
    !u && s !== document.body || // self content
    u && (t.contains(s) || t === s)
  );
  return (d && (a && f === 0 || !a && c > f) || !d && (a && v === 0 || !a && -c > v)) && (l = !0), l;
}, pn = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, wo = function(e) {
  return [e.deltaX, e.deltaY];
}, xo = function(e) {
  return e && "current" in e ? e.current : e;
}, ms = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, hs = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, ys = 0, gt = [];
function gs(e) {
  var t = D.useRef([]), n = D.useRef([0, 0]), r = D.useRef(), a = D.useState(ys++)[0], i = D.useState(function() {
    return ya();
  })[0], c = D.useRef(e);
  D.useEffect(function() {
    c.current = e;
  }, [e]), D.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(a));
      var g = Yc([e.lockRef.current], (e.shards || []).map(xo), !0).filter(Boolean);
      return g.forEach(function(b) {
        return b.classList.add("allow-interactivity-".concat(a));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(a)), g.forEach(function(b) {
          return b.classList.remove("allow-interactivity-".concat(a));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var s = D.useCallback(function(g, b) {
    if ("touches" in g && g.touches.length === 2)
      return !c.current.allowPinchZoom;
    var E = pn(g), x = n.current, S = "deltaX" in g ? g.deltaX : x[0] - E[0], C = "deltaY" in g ? g.deltaY : x[1] - E[1], h, $ = g.target, R = Math.abs(S) > Math.abs(C) ? "h" : "v";
    if ("touches" in g && R === "h" && $.type === "range")
      return !1;
    var I = bo(R, $);
    if (!I)
      return !0;
    if (I ? h = R : (h = R === "v" ? "h" : "v", I = bo(R, $)), !I)
      return !1;
    if (!r.current && "changedTouches" in g && (S || C) && (r.current = h), !h)
      return !0;
    var N = r.current || h;
    return ps(N, b, g, N === "h" ? S : C, !0);
  }, []), u = D.useCallback(function(g) {
    var b = g;
    if (!(!gt.length || gt[gt.length - 1] !== i)) {
      var E = "deltaY" in b ? wo(b) : pn(b), x = t.current.filter(function(h) {
        return h.name === b.type && h.target === b.target && ms(h.delta, E);
      })[0];
      if (x && x.should) {
        b.cancelable && b.preventDefault();
        return;
      }
      if (!x) {
        var S = (c.current.shards || []).map(xo).filter(Boolean).filter(function(h) {
          return h.contains(b.target);
        }), C = S.length > 0 ? s(b, S[0]) : !c.current.noIsolation;
        C && b.cancelable && b.preventDefault();
      }
    }
  }, []), l = D.useCallback(function(g, b, E, x) {
    var S = { name: g, delta: b, target: E, should: x };
    t.current.push(S), setTimeout(function() {
      t.current = t.current.filter(function(C) {
        return C !== S;
      });
    }, 1);
  }, []), d = D.useCallback(function(g) {
    n.current = pn(g), r.current = void 0;
  }, []), f = D.useCallback(function(g) {
    l(g.type, wo(g), g.target, s(g, e.lockRef.current));
  }, []), v = D.useCallback(function(g) {
    l(g.type, pn(g), g.target, s(g, e.lockRef.current));
  }, []);
  D.useEffect(function() {
    return gt.push(i), e.setCallbacks({
      onScrollCapture: f,
      onWheelCapture: f,
      onTouchMoveCapture: v
    }), document.addEventListener("wheel", u, yt), document.addEventListener("touchmove", u, yt), document.addEventListener("touchstart", d, yt), function() {
      gt = gt.filter(function(g) {
        return g !== i;
      }), document.removeEventListener("wheel", u, yt), document.removeEventListener("touchmove", u, yt), document.removeEventListener("touchstart", d, yt);
    };
  }, []);
  var p = e.removeScrollBar, y = e.inert;
  return D.createElement(
    D.Fragment,
    null,
    y ? D.createElement(i, { styles: hs(a) }) : null,
    p ? D.createElement(cs, { gapMode: "margin" }) : null
  );
}
const bs = Kc(ha, gs);
var xa = D.forwardRef(function(e, t) {
  return D.createElement(kn, Be({}, e, { ref: t, sideCar: bs }));
});
xa.classNames = kn.classNames;
const ws = xa, Ea = "Popover", [Ca, el] = Yo(Ea, [
  oa
]), Lr = oa(), [xs, an] = Ca(Ea), Es = (e) => {
  const { __scopePopover: t, children: n, open: r, defaultOpen: a, onOpenChange: i, modal: c = !1 } = e, s = Lr(t), u = ge(null), [l, d] = oe(!1), [f = !1, v] = Lc({
    prop: r,
    defaultProp: a,
    onChange: i
  });
  return /* @__PURE__ */ me(Dc, s, /* @__PURE__ */ me(xs, {
    scope: t,
    contentId: Bi(),
    triggerRef: u,
    open: f,
    onOpenChange: v,
    onOpenToggle: ft(
      () => v(
        (p) => !p
      ),
      [
        v
      ]
    ),
    hasCustomAnchor: l,
    onCustomAnchorAdd: ft(
      () => d(!0),
      []
    ),
    onCustomAnchorRemove: ft(
      () => d(!1),
      []
    ),
    modal: c
  }, n));
}, Cs = "PopoverTrigger", Ss = /* @__PURE__ */ Ne((e, t) => {
  const u = e, { __scopePopover: n } = u, r = xe(u, ["__scopePopover"]), a = an(Cs, n), i = Lr(n), c = mt(t, a.triggerRef), s = /* @__PURE__ */ me(rn.button, we({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": a.open,
    "aria-controls": a.contentId,
    "data-state": Oa(a.open)
  }, r, {
    ref: c,
    onClick: dt(e.onClick, a.onOpenToggle)
  }));
  return a.hasCustomAnchor ? s : /* @__PURE__ */ me(Nc, we({
    asChild: !0
  }, i), s);
}), Os = "PopoverPortal", [tl, Ps] = Ca(Os, {
  forceMount: void 0
}), Qt = "PopoverContent", Ts = /* @__PURE__ */ Ne((e, t) => {
  const n = Ps(Qt, e.__scopePopover), c = e, { forceMount: r = n.forceMount } = c, a = xe(c, ["forceMount"]), i = an(Qt, e.__scopePopover);
  return /* @__PURE__ */ me(sa, {
    present: r || i.open
  }, i.modal ? /* @__PURE__ */ me($s, we({}, a, {
    ref: t
  })) : /* @__PURE__ */ me(Rs, we({}, a, {
    ref: t
  })));
}), $s = /* @__PURE__ */ Ne((e, t) => {
  const n = an(Qt, e.__scopePopover), r = ge(null), a = mt(t, r), i = ge(!1);
  return fe(() => {
    const c = r.current;
    if (c)
      return Vc(c);
  }, []), /* @__PURE__ */ me(ws, {
    as: _r,
    allowPinchZoom: !0
  }, /* @__PURE__ */ me(Sa, we({}, e, {
    ref: a,
    trapFocus: n.open,
    disableOutsidePointerEvents: !0,
    onCloseAutoFocus: dt(e.onCloseAutoFocus, (c) => {
      var s;
      c.preventDefault(), i.current || (s = n.triggerRef.current) === null || s === void 0 || s.focus();
    }),
    onPointerDownOutside: dt(e.onPointerDownOutside, (c) => {
      const s = c.detail.originalEvent, u = s.button === 0 && s.ctrlKey === !0, l = s.button === 2 || u;
      i.current = l;
    }, {
      checkForDefaultPrevented: !1
    }),
    onFocusOutside: dt(
      e.onFocusOutside,
      (c) => c.preventDefault(),
      {
        checkForDefaultPrevented: !1
      }
    )
  })));
}), Rs = /* @__PURE__ */ Ne((e, t) => {
  const n = an(Qt, e.__scopePopover), r = ge(!1), a = ge(!1);
  return /* @__PURE__ */ me(Sa, we({}, e, {
    ref: t,
    trapFocus: !1,
    disableOutsidePointerEvents: !1,
    onCloseAutoFocus: (i) => {
      var c;
      if ((c = e.onCloseAutoFocus) === null || c === void 0 || c.call(e, i), !i.defaultPrevented) {
        var s;
        r.current || (s = n.triggerRef.current) === null || s === void 0 || s.focus(), i.preventDefault();
      }
      r.current = !1, a.current = !1;
    },
    onInteractOutside: (i) => {
      var c, s;
      (c = e.onInteractOutside) === null || c === void 0 || c.call(e, i), i.defaultPrevented || (r.current = !0, i.detail.originalEvent.type === "pointerdown" && (a.current = !0));
      const u = i.target;
      ((s = n.triggerRef.current) === null || s === void 0 ? void 0 : s.contains(u)) && i.preventDefault(), i.detail.originalEvent.type === "focusin" && a.current && i.preventDefault();
    }
  }));
}), Sa = /* @__PURE__ */ Ne((e, t) => {
  const y = e, { __scopePopover: n, trapFocus: r, onOpenAutoFocus: a, onCloseAutoFocus: i, disableOutsidePointerEvents: c, onEscapeKeyDown: s, onPointerDownOutside: u, onFocusOutside: l, onInteractOutside: d } = y, f = xe(y, ["__scopePopover", "trapFocus", "onOpenAutoFocus", "onCloseAutoFocus", "disableOutsidePointerEvents", "onEscapeKeyDown", "onPointerDownOutside", "onFocusOutside", "onInteractOutside"]), v = an(Qt, n), p = Lr(n);
  return _i(), /* @__PURE__ */ me(ki, {
    asChild: !0,
    loop: !0,
    trapped: r,
    onMountAutoFocus: a,
    onUnmountAutoFocus: i
  }, /* @__PURE__ */ me(Ti, {
    asChild: !0,
    disableOutsidePointerEvents: c,
    onInteractOutside: d,
    onEscapeKeyDown: s,
    onPointerDownOutside: u,
    onFocusOutside: l,
    onDismiss: () => v.onOpenChange(!1)
  }, /* @__PURE__ */ me(jc, we({
    "data-state": Oa(v.open),
    role: "dialog",
    id: v.contentId
  }, p, f, {
    ref: t,
    style: pe(K({}, f.style), {
      "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
      "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
      "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
    })
  }))));
});
function Oa(e) {
  return e ? "open" : "closed";
}
const _s = Es;
const ks = (e) => {
  const y = e, {
    open: t,
    onOpenChange: n,
    onTriggelClick: r,
    ariaLabel: a,
    triggerElement: i,
    children: c,
    popoverClassName: s,
    contentClassName: u,
    noStyle: l = !1,
    sideOffset: d = 18,
    align: f = "end",
    triggerTabindex: v
  } = y, p = xe(y, [
    "open",
    "onOpenChange",
    "onTriggelClick",
    "ariaLabel",
    "triggerElement",
    "children",
    "popoverClassName",
    "contentClassName",
    "noStyle",
    "sideOffset",
    "align",
    "triggerTabindex"
  ]);
  return /* @__PURE__ */ T.jsx(
    "div",
    {
      className: ne({
        [s || ""]: !!s,
        Popover: !l
      }),
      children: /* @__PURE__ */ T.jsxs(_s, { open: t, onOpenChange: n, children: [
        i && /* @__PURE__ */ T.jsx(
          Ss,
          {
            "aria-label": a,
            tabIndex: v,
            className: "Popover-trigger",
            onClick: r,
            children: i
          }
        ),
        t && c && /* @__PURE__ */ T.jsx(
          Ts,
          pe(K({
            align: f,
            sideOffset: d,
            className: ne({
              [u || ""]: !!u,
              "Popover-content": !!u || !l
            })
          }, p), {
            children: c
          })
        )
      ] })
    }
  );
};
var Oe = /* @__PURE__ */ ((e) => (e.Small = "small", e.Medium = "medium", e))(Oe || {}), xt = /* @__PURE__ */ ((e) => (e.Default = "default", e.Custom = "custom", e))(xt || {});
const As = _e.forwardRef(
  (e, t) => {
    const {
      items: n,
      selected: r,
      label: a,
      ariaLabel: i,
      size: c = Oe.Medium,
      error: s,
      isDisabled: u,
      onChange: l,
      type: d,
      className: f
    } = e, [v, p] = oe(!1), [y, g] = oe(), b = () => p(!v), E = (h) => {
      g(h), l && l(h), p(!1);
    }, x = (h) => {
      h.target === h.currentTarget && h.preventDefault();
    }, S = (h) => {
      (h.key === "Enter" || h.key === " ") && p(!v);
    }, C = (h, $) => {
      (h.key === "Enter" || h.key === " ") && (g($), l && l($), p(!1));
    };
    return fe(() => {
      g(r);
    }, [r]), /* @__PURE__ */ T.jsxs(
      "div",
      {
        className: ne({
          Dropdown: !0,
          "Dropdown-disabled": u,
          [f || ""]: !!f
        }),
        children: [
          a && /* @__PURE__ */ T.jsx(
            "div",
            {
              className: ne({
                "Dropdown-label": !0,
                "Dropdown-label-medium": c === Oe.Medium,
                "Dropdown-label-small": c === Oe.Small
              }),
              children: a
            }
          ),
          /* @__PURE__ */ T.jsx(
            ks,
            {
              open: v,
              ariaLabel: i,
              contentClassName: ne({
                "Dropdown-popover-content": !0,
                "Dropdown-popover-content-medium": c === Oe.Medium,
                "Dropdown-popover-content-small": c === Oe.Small
              }),
              popoverClassName: "Dropdown-popover",
              sideOffset: 0,
              onOpenChange: b,
              onTriggelClick: x,
              align: "start",
              triggerTabindex: -1,
              triggerElement: /* @__PURE__ */ T.jsx(
                "div",
                {
                  ref: t,
                  className: ne({
                    "Dropdown-root": !0,
                    "Dropdown-root-small": d === xt.Default && c === Oe.Small,
                    "Dropdown-root-medium": d === xt.Default && c === Oe.Medium,
                    "Dropdown-root-error": !!s,
                    "Dropdown-root-active": v
                  }),
                  tabIndex: 0,
                  "aria-label": i,
                  role: "trigger",
                  onKeyDown: S,
                  children: /* @__PURE__ */ T.jsxs("div", { className: "Dropdown-base", children: [
                    d === xt.Custom ? e.renderSelectedValue(y) : y == null ? void 0 : y.label,
                    /* @__PURE__ */ T.jsx(
                      "div",
                      {
                        className: ne({
                          "Dropdown-input-icon": !0,
                          "Dropdown-input-icon-up": v
                        }),
                        children: /* @__PURE__ */ T.jsx($r, {})
                      }
                    )
                  ] })
                }
              ),
              children: /* @__PURE__ */ T.jsx(
                "div",
                {
                  className: ne({
                    "Dropdown-list": !0,
                    "Dropdown-list-medium": c === Oe.Medium,
                    "Dropdown-list-small": c === Oe.Small
                  }),
                  onClick: (h) => h.nativeEvent.stopImmediatePropagation(),
                  children: n.map((h) => /* @__PURE__ */ T.jsxs(
                    "div",
                    {
                      className: ne({
                        "Dropdown-list-item": !0,
                        "Dropdown-list-item-small": c === Oe.Small,
                        "Dropdown-list-item-medium": c === Oe.Medium
                      }),
                      tabIndex: 0,
                      role: "button",
                      onClick: () => E(h),
                      onKeyDown: ($) => C($, h),
                      children: [
                        d === xt.Custom ? e.renderItem(h) : h.label,
                        (y == null ? void 0 : y.value) === h.value && /* @__PURE__ */ T.jsx("div", { className: "Dropdown-list-active-item", children: d === xt.Custom ? e.customActiveIcon : /* @__PURE__ */ T.jsx(Rr, { color: "", width: "24", height: "24" }) })
                      ]
                    },
                    h.id
                  ))
                }
              )
            }
          ),
          s && /* @__PURE__ */ T.jsx(
            "div",
            {
              className: ne({
                "Dropdown-error-text": !0,
                "Dropdown-error-text-medium": c === Oe.Medium,
                "Dropdown-error-text-small": c === Oe.Small
              }),
              children: s
            }
          )
        ]
      }
    );
  }
);
As.displayName = "Dropdown";
const nl = (e) => {
  const { items: t, onLabelClick: n } = e, r = (a, i) => {
    i || n && n(a);
  };
  return /* @__PURE__ */ T.jsx("nav", { "aria-label": "Breadcrumb", className: "Breadcrumbs", children: /* @__PURE__ */ T.jsx("ol", { className: "Breadcrumbs-list", children: t.map((a, i) => {
    const c = t.length - 1 === i;
    return /* @__PURE__ */ T.jsxs(Fo, { children: [
      /* @__PURE__ */ T.jsx(
        "li",
        {
          "aria-current": c ? "page" : void 0,
          className: ne({
            "Breadcrumbs-item": !0,
            "Breadcrumbs-item-current": c
          }),
          children: Xt(a.label) ? a.label : /* @__PURE__ */ T.jsx(
            "button",
            {
              onClick: () => r(a, c),
              "aria-label": typeof a.label == "string" ? a.label : void 0,
              className: "Breadcrumbs-button",
              children: a.label
            }
          )
        }
      ),
      !c && /* @__PURE__ */ T.jsx("div", { "aria-hidden": "true", className: "Breadcrumbs-separator", children: /* @__PURE__ */ T.jsx(Bo, { height: "16", width: "16" }) })
    ] }, a.key);
  }) }) });
};
var xn = /* @__PURE__ */ ((e) => (e.Medium = "medium", e.Small = "small", e))(xn || {});
const rl = ({
  progress: e,
  size: t = xn.Medium,
  className: n,
  id: r,
  indicatorColor: a
}) => /* @__PURE__ */ T.jsx(
  "div",
  {
    role: "progressbar",
    "aria-valuemin": 0,
    "aria-valuenow": e,
    "aria-valuemax": 100,
    id: r,
    className: ne({
      ProgressBar: !0,
      "ProgressBar-medium": t === xn.Medium,
      "ProgressBar-small": t === xn.Small,
      [n || ""]: !!n
    }),
    children: /* @__PURE__ */ T.jsx(
      "div",
      {
        className: "ProgressBar-indicator",
        style: { width: `${e}%`, backgroundColor: a }
      }
    )
  }
);
function Ds(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), a, i;
  for (i = 0; i < r.length; i++)
    a = r[i], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
var Er = { exports: {} }, mn = { exports: {} }, ue = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Eo;
function Ns() {
  if (Eo)
    return ue;
  Eo = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, c = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, g = e ? Symbol.for("react.block") : 60121, b = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, x = e ? Symbol.for("react.scope") : 60119;
  function S(h) {
    if (typeof h == "object" && h !== null) {
      var $ = h.$$typeof;
      switch ($) {
        case t:
          switch (h = h.type, h) {
            case u:
            case l:
            case r:
            case i:
            case a:
            case f:
              return h;
            default:
              switch (h = h && h.$$typeof, h) {
                case s:
                case d:
                case y:
                case p:
                case c:
                  return h;
                default:
                  return $;
              }
          }
        case n:
          return $;
      }
    }
  }
  function C(h) {
    return S(h) === l;
  }
  return ue.AsyncMode = u, ue.ConcurrentMode = l, ue.ContextConsumer = s, ue.ContextProvider = c, ue.Element = t, ue.ForwardRef = d, ue.Fragment = r, ue.Lazy = y, ue.Memo = p, ue.Portal = n, ue.Profiler = i, ue.StrictMode = a, ue.Suspense = f, ue.isAsyncMode = function(h) {
    return C(h) || S(h) === u;
  }, ue.isConcurrentMode = C, ue.isContextConsumer = function(h) {
    return S(h) === s;
  }, ue.isContextProvider = function(h) {
    return S(h) === c;
  }, ue.isElement = function(h) {
    return typeof h == "object" && h !== null && h.$$typeof === t;
  }, ue.isForwardRef = function(h) {
    return S(h) === d;
  }, ue.isFragment = function(h) {
    return S(h) === r;
  }, ue.isLazy = function(h) {
    return S(h) === y;
  }, ue.isMemo = function(h) {
    return S(h) === p;
  }, ue.isPortal = function(h) {
    return S(h) === n;
  }, ue.isProfiler = function(h) {
    return S(h) === i;
  }, ue.isStrictMode = function(h) {
    return S(h) === a;
  }, ue.isSuspense = function(h) {
    return S(h) === f;
  }, ue.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === r || h === l || h === i || h === a || h === f || h === v || typeof h == "object" && h !== null && (h.$$typeof === y || h.$$typeof === p || h.$$typeof === c || h.$$typeof === s || h.$$typeof === d || h.$$typeof === b || h.$$typeof === E || h.$$typeof === x || h.$$typeof === g);
  }, ue.typeOf = S, ue;
}
var le = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Co;
function js() {
  return Co || (Co = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, c = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, g = e ? Symbol.for("react.block") : 60121, b = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, x = e ? Symbol.for("react.scope") : 60119;
    function S(k) {
      return typeof k == "string" || typeof k == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      k === r || k === l || k === i || k === a || k === f || k === v || typeof k == "object" && k !== null && (k.$$typeof === y || k.$$typeof === p || k.$$typeof === c || k.$$typeof === s || k.$$typeof === d || k.$$typeof === b || k.$$typeof === E || k.$$typeof === x || k.$$typeof === g);
    }
    function C(k) {
      if (typeof k == "object" && k !== null) {
        var Ee = k.$$typeof;
        switch (Ee) {
          case t:
            var Le = k.type;
            switch (Le) {
              case u:
              case l:
              case r:
              case i:
              case a:
              case f:
                return Le;
              default:
                var Ce = Le && Le.$$typeof;
                switch (Ce) {
                  case s:
                  case d:
                  case y:
                  case p:
                  case c:
                    return Ce;
                  default:
                    return Ee;
                }
            }
          case n:
            return Ee;
        }
      }
    }
    var h = u, $ = l, R = s, I = c, N = t, ae = d, ie = r, re = y, Z = p, B = n, ee = i, Y = a, te = f, ce = !1;
    function ye(k) {
      return ce || (ce = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), O(k) || C(k) === u;
    }
    function O(k) {
      return C(k) === l;
    }
    function _(k) {
      return C(k) === s;
    }
    function G(k) {
      return C(k) === c;
    }
    function z(k) {
      return typeof k == "object" && k !== null && k.$$typeof === t;
    }
    function V(k) {
      return C(k) === d;
    }
    function X(k) {
      return C(k) === r;
    }
    function M(k) {
      return C(k) === y;
    }
    function F(k) {
      return C(k) === p;
    }
    function U(k) {
      return C(k) === n;
    }
    function q(k) {
      return C(k) === i;
    }
    function H(k) {
      return C(k) === a;
    }
    function he(k) {
      return C(k) === f;
    }
    le.AsyncMode = h, le.ConcurrentMode = $, le.ContextConsumer = R, le.ContextProvider = I, le.Element = N, le.ForwardRef = ae, le.Fragment = ie, le.Lazy = re, le.Memo = Z, le.Portal = B, le.Profiler = ee, le.StrictMode = Y, le.Suspense = te, le.isAsyncMode = ye, le.isConcurrentMode = O, le.isContextConsumer = _, le.isContextProvider = G, le.isElement = z, le.isForwardRef = V, le.isFragment = X, le.isLazy = M, le.isMemo = F, le.isPortal = U, le.isProfiler = q, le.isStrictMode = H, le.isSuspense = he, le.isValidElementType = S, le.typeOf = C;
  }()), le;
}
var So;
function Pa() {
  return So || (So = 1, process.env.NODE_ENV === "production" ? mn.exports = Ns() : mn.exports = js()), mn.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var rr, Oo;
function Is() {
  if (Oo)
    return rr;
  Oo = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function r(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function a() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var c = {}, s = 0; s < 10; s++)
        c["_" + String.fromCharCode(s)] = s;
      var u = Object.getOwnPropertyNames(c).map(function(d) {
        return c[d];
      });
      if (u.join("") !== "0123456789")
        return !1;
      var l = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(d) {
        l[d] = d;
      }), Object.keys(Object.assign({}, l)).join("") === "abcdefghijklmnopqrst";
    } catch (d) {
      return !1;
    }
  }
  return rr = a() ? Object.assign : function(i, c) {
    for (var s, u = r(i), l, d = 1; d < arguments.length; d++) {
      s = Object(arguments[d]);
      for (var f in s)
        t.call(s, f) && (u[f] = s[f]);
      if (e) {
        l = e(s);
        for (var v = 0; v < l.length; v++)
          n.call(s, l[v]) && (u[l[v]] = s[l[v]]);
      }
    }
    return u;
  }, rr;
}
var or, Po;
function Mr() {
  if (Po)
    return or;
  Po = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return or = e, or;
}
var ar, To;
function Ta() {
  return To || (To = 1, ar = Function.call.bind(Object.prototype.hasOwnProperty)), ar;
}
var ir, $o;
function Fs() {
  if ($o)
    return ir;
  $o = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = Mr(), n = {}, r = Ta();
    e = function(i) {
      var c = "Warning: " + i;
      typeof console != "undefined" && console.error(c);
      try {
        throw new Error(c);
      } catch (s) {
      }
    };
  }
  function a(i, c, s, u, l) {
    if (process.env.NODE_ENV !== "production") {
      for (var d in i)
        if (r(i, d)) {
          var f;
          try {
            if (typeof i[d] != "function") {
              var v = Error(
                (u || "React class") + ": " + s + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw v.name = "Invariant Violation", v;
            }
            f = i[d](c, d, u, s, null, t);
          } catch (y) {
            f = y;
          }
          if (f && !(f instanceof Error) && e(
            (u || "React class") + ": type specification of " + s + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof f + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), f instanceof Error && !(f.message in n)) {
            n[f.message] = !0;
            var p = l ? l() : "";
            e(
              "Failed " + s + " type: " + f.message + (p != null ? p : "")
            );
          }
        }
    }
  }
  return a.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, ir = a, ir;
}
var cr, Ro;
function Ls() {
  if (Ro)
    return cr;
  Ro = 1;
  var e = Pa(), t = Is(), n = Mr(), r = Ta(), a = Fs(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(s) {
    var u = "Warning: " + s;
    typeof console != "undefined" && console.error(u);
    try {
      throw new Error(u);
    } catch (l) {
    }
  });
  function c() {
    return null;
  }
  return cr = function(s, u) {
    var l = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function f(O) {
      var _ = O && (l && O[l] || O[d]);
      if (typeof _ == "function")
        return _;
    }
    var v = "<<anonymous>>", p = {
      array: E("array"),
      bigint: E("bigint"),
      bool: E("boolean"),
      func: E("function"),
      number: E("number"),
      object: E("object"),
      string: E("string"),
      symbol: E("symbol"),
      any: x(),
      arrayOf: S,
      element: C(),
      elementType: h(),
      instanceOf: $,
      node: ae(),
      objectOf: I,
      oneOf: R,
      oneOfType: N,
      shape: re,
      exact: Z
    };
    function y(O, _) {
      return O === _ ? O !== 0 || 1 / O === 1 / _ : O !== O && _ !== _;
    }
    function g(O, _) {
      this.message = O, this.data = _ && typeof _ == "object" ? _ : {}, this.stack = "";
    }
    g.prototype = Error.prototype;
    function b(O) {
      if (process.env.NODE_ENV !== "production")
        var _ = {}, G = 0;
      function z(X, M, F, U, q, H, he) {
        if (U = U || v, H = H || F, he !== n) {
          if (u) {
            var k = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw k.name = "Invariant Violation", k;
          } else if (process.env.NODE_ENV !== "production" && typeof console != "undefined") {
            var Ee = U + ":" + F;
            !_[Ee] && // Avoid spamming the console because they are often not actionable except for lib authors
            G < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + H + "` prop on `" + U + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), _[Ee] = !0, G++);
          }
        }
        return M[F] == null ? X ? M[F] === null ? new g("The " + q + " `" + H + "` is marked as required " + ("in `" + U + "`, but its value is `null`.")) : new g("The " + q + " `" + H + "` is marked as required in " + ("`" + U + "`, but its value is `undefined`.")) : null : O(M, F, U, q, H);
      }
      var V = z.bind(null, !1);
      return V.isRequired = z.bind(null, !0), V;
    }
    function E(O) {
      function _(G, z, V, X, M, F) {
        var U = G[z], q = Y(U);
        if (q !== O) {
          var H = te(U);
          return new g(
            "Invalid " + X + " `" + M + "` of type " + ("`" + H + "` supplied to `" + V + "`, expected ") + ("`" + O + "`."),
            { expectedType: O }
          );
        }
        return null;
      }
      return b(_);
    }
    function x() {
      return b(c);
    }
    function S(O) {
      function _(G, z, V, X, M) {
        if (typeof O != "function")
          return new g("Property `" + M + "` of component `" + V + "` has invalid PropType notation inside arrayOf.");
        var F = G[z];
        if (!Array.isArray(F)) {
          var U = Y(F);
          return new g("Invalid " + X + " `" + M + "` of type " + ("`" + U + "` supplied to `" + V + "`, expected an array."));
        }
        for (var q = 0; q < F.length; q++) {
          var H = O(F, q, V, X, M + "[" + q + "]", n);
          if (H instanceof Error)
            return H;
        }
        return null;
      }
      return b(_);
    }
    function C() {
      function O(_, G, z, V, X) {
        var M = _[G];
        if (!s(M)) {
          var F = Y(M);
          return new g("Invalid " + V + " `" + X + "` of type " + ("`" + F + "` supplied to `" + z + "`, expected a single ReactElement."));
        }
        return null;
      }
      return b(O);
    }
    function h() {
      function O(_, G, z, V, X) {
        var M = _[G];
        if (!e.isValidElementType(M)) {
          var F = Y(M);
          return new g("Invalid " + V + " `" + X + "` of type " + ("`" + F + "` supplied to `" + z + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return b(O);
    }
    function $(O) {
      function _(G, z, V, X, M) {
        if (!(G[z] instanceof O)) {
          var F = O.name || v, U = ye(G[z]);
          return new g("Invalid " + X + " `" + M + "` of type " + ("`" + U + "` supplied to `" + V + "`, expected ") + ("instance of `" + F + "`."));
        }
        return null;
      }
      return b(_);
    }
    function R(O) {
      if (!Array.isArray(O))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), c;
      function _(G, z, V, X, M) {
        for (var F = G[z], U = 0; U < O.length; U++)
          if (y(F, O[U]))
            return null;
        var q = JSON.stringify(O, function(he, k) {
          var Ee = te(k);
          return Ee === "symbol" ? String(k) : k;
        });
        return new g("Invalid " + X + " `" + M + "` of value `" + String(F) + "` " + ("supplied to `" + V + "`, expected one of " + q + "."));
      }
      return b(_);
    }
    function I(O) {
      function _(G, z, V, X, M) {
        if (typeof O != "function")
          return new g("Property `" + M + "` of component `" + V + "` has invalid PropType notation inside objectOf.");
        var F = G[z], U = Y(F);
        if (U !== "object")
          return new g("Invalid " + X + " `" + M + "` of type " + ("`" + U + "` supplied to `" + V + "`, expected an object."));
        for (var q in F)
          if (r(F, q)) {
            var H = O(F, q, V, X, M + "." + q, n);
            if (H instanceof Error)
              return H;
          }
        return null;
      }
      return b(_);
    }
    function N(O) {
      if (!Array.isArray(O))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), c;
      for (var _ = 0; _ < O.length; _++) {
        var G = O[_];
        if (typeof G != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ce(G) + " at index " + _ + "."
          ), c;
      }
      function z(V, X, M, F, U) {
        for (var q = [], H = 0; H < O.length; H++) {
          var he = O[H], k = he(V, X, M, F, U, n);
          if (k == null)
            return null;
          k.data && r(k.data, "expectedType") && q.push(k.data.expectedType);
        }
        var Ee = q.length > 0 ? ", expected one of type [" + q.join(", ") + "]" : "";
        return new g("Invalid " + F + " `" + U + "` supplied to " + ("`" + M + "`" + Ee + "."));
      }
      return b(z);
    }
    function ae() {
      function O(_, G, z, V, X) {
        return B(_[G]) ? null : new g("Invalid " + V + " `" + X + "` supplied to " + ("`" + z + "`, expected a ReactNode."));
      }
      return b(O);
    }
    function ie(O, _, G, z, V) {
      return new g(
        (O || "React class") + ": " + _ + " type `" + G + "." + z + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + V + "`."
      );
    }
    function re(O) {
      function _(G, z, V, X, M) {
        var F = G[z], U = Y(F);
        if (U !== "object")
          return new g("Invalid " + X + " `" + M + "` of type `" + U + "` " + ("supplied to `" + V + "`, expected `object`."));
        for (var q in O) {
          var H = O[q];
          if (typeof H != "function")
            return ie(V, X, M, q, te(H));
          var he = H(F, q, V, X, M + "." + q, n);
          if (he)
            return he;
        }
        return null;
      }
      return b(_);
    }
    function Z(O) {
      function _(G, z, V, X, M) {
        var F = G[z], U = Y(F);
        if (U !== "object")
          return new g("Invalid " + X + " `" + M + "` of type `" + U + "` " + ("supplied to `" + V + "`, expected `object`."));
        var q = t({}, G[z], O);
        for (var H in q) {
          var he = O[H];
          if (r(O, H) && typeof he != "function")
            return ie(V, X, M, H, te(he));
          if (!he)
            return new g(
              "Invalid " + X + " `" + M + "` key `" + H + "` supplied to `" + V + "`.\nBad object: " + JSON.stringify(G[z], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(O), null, "  ")
            );
          var k = he(F, H, V, X, M + "." + H, n);
          if (k)
            return k;
        }
        return null;
      }
      return b(_);
    }
    function B(O) {
      switch (typeof O) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !O;
        case "object":
          if (Array.isArray(O))
            return O.every(B);
          if (O === null || s(O))
            return !0;
          var _ = f(O);
          if (_) {
            var G = _.call(O), z;
            if (_ !== O.entries) {
              for (; !(z = G.next()).done; )
                if (!B(z.value))
                  return !1;
            } else
              for (; !(z = G.next()).done; ) {
                var V = z.value;
                if (V && !B(V[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function ee(O, _) {
      return O === "symbol" ? !0 : _ ? _["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && _ instanceof Symbol : !1;
    }
    function Y(O) {
      var _ = typeof O;
      return Array.isArray(O) ? "array" : O instanceof RegExp ? "object" : ee(_, O) ? "symbol" : _;
    }
    function te(O) {
      if (typeof O == "undefined" || O === null)
        return "" + O;
      var _ = Y(O);
      if (_ === "object") {
        if (O instanceof Date)
          return "date";
        if (O instanceof RegExp)
          return "regexp";
      }
      return _;
    }
    function ce(O) {
      var _ = te(O);
      switch (_) {
        case "array":
        case "object":
          return "an " + _;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + _;
        default:
          return _;
      }
    }
    function ye(O) {
      return !O.constructor || !O.constructor.name ? v : O.constructor.name;
    }
    return p.checkPropTypes = a, p.resetWarningCache = a.resetWarningCache, p.PropTypes = p, p;
  }, cr;
}
var sr, _o;
function Ms() {
  if (_o)
    return sr;
  _o = 1;
  var e = Mr();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, sr = function() {
    function r(c, s, u, l, d, f) {
      if (f !== e) {
        var v = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw v.name = "Invariant Violation", v;
      }
    }
    r.isRequired = r;
    function a() {
      return r;
    }
    var i = {
      array: r,
      bigint: r,
      bool: r,
      func: r,
      number: r,
      object: r,
      string: r,
      symbol: r,
      any: r,
      arrayOf: a,
      element: r,
      elementType: r,
      instanceOf: a,
      node: r,
      objectOf: a,
      oneOf: a,
      oneOfType: a,
      shape: a,
      exact: a,
      checkPropTypes: n,
      resetWarningCache: t
    };
    return i.PropTypes = i, i;
  }, sr;
}
if (process.env.NODE_ENV !== "production") {
  var Bs = Pa(), Ws = !0;
  Er.exports = Ls()(Bs.isElement, Ws);
} else
  Er.exports = Ms()();
var de = Er.exports;
const $a = /* @__PURE__ */ oi(de);
var Cr = "data-focus-lock", Ra = "data-focus-lock-disabled", Us = "data-no-focus-lock", Vs = "data-autofocus-inside", Ys = "data-no-autofocus", ur = {
  width: "1px",
  height: "0px",
  padding: 0,
  overflow: "hidden",
  position: "fixed",
  top: "1px",
  left: "1px"
};
process.env.NODE_ENV !== "production" && $a.node;
var _a = Fr({}, function(e) {
  var t = e.target, n = e.currentTarget;
  return {
    target: t,
    currentTarget: n
  };
}), ka = Fr(), zs = Fr(), qs = pa({
  async: !0
  // focus-lock sidecar is not required on the server
  // however, it might be required for JSDOM tests
  // ssr: true,
}), Hs = [], Br = /* @__PURE__ */ D.forwardRef(function(t, n) {
  var r, a = D.useState(), i = a[0], c = a[1], s = D.useRef(), u = D.useRef(!1), l = D.useRef(null), d = t.children, f = t.disabled, v = t.noFocusGuards, p = t.persistentFocus, y = t.crossFrame, g = t.autoFocus, b = t.allowTextSelection, E = t.group, x = t.className, S = t.whiteList, C = t.hasPositiveIndices, h = t.shards, $ = h === void 0 ? Hs : h, R = t.as, I = R === void 0 ? "div" : R, N = t.lockProps, ae = N === void 0 ? {} : N, ie = t.sideCar, re = t.returnFocus, Z = t.focusOptions, B = t.onActivation, ee = t.onDeactivation, Y = D.useState({}), te = Y[0], ce = D.useCallback(function() {
    l.current = l.current || document && document.activeElement, s.current && B && B(s.current), u.current = !0;
  }, [B]), ye = D.useCallback(function() {
    u.current = !1, ee && ee(s.current);
  }, [ee]);
  fe(function() {
    f || (l.current = null);
  }, []);
  var O = D.useCallback(function(U) {
    var q = l.current;
    if (q && q.focus) {
      var H = typeof re == "function" ? re(q) : re;
      if (H) {
        var he = typeof H == "object" ? H : void 0;
        l.current = null, U ? Promise.resolve().then(function() {
          return q.focus(he);
        }) : q.focus(he);
      }
    }
  }, [re]), _ = D.useCallback(function(U) {
    u.current && _a.useMedium(U);
  }, []), G = ka.useMedium, z = D.useCallback(function(U) {
    s.current !== U && (s.current = U, c(U));
  }, []);
  process.env.NODE_ENV !== "production" && (typeof b != "undefined" && console.warn("React-Focus-Lock: allowTextSelection is deprecated and enabled by default"), D.useEffect(function() {
    !s.current && typeof I != "string" && console.error("FocusLock: could not obtain ref to internal node");
  }, []));
  var V = we((r = {}, r[Ra] = f && "disabled", r[Cr] = E, r), ae), X = v !== !0, M = X && v !== "tail", F = fa([n, z]);
  return /* @__PURE__ */ D.createElement(D.Fragment, null, X && [
    // nearest focus guard
    /* @__PURE__ */ D.createElement("div", {
      key: "guard-first",
      "data-focus-guard": !0,
      tabIndex: f ? -1 : 0,
      style: ur
    }),
    // first tabbed element guard
    C ? /* @__PURE__ */ D.createElement("div", {
      key: "guard-nearest",
      "data-focus-guard": !0,
      tabIndex: f ? -1 : 1,
      style: ur
    }) : null
  ], !f && /* @__PURE__ */ D.createElement(ie, {
    id: te,
    sideCar: qs,
    observed: i,
    disabled: f,
    persistentFocus: p,
    crossFrame: y,
    autoFocus: g,
    whiteList: S,
    shards: $,
    onActivation: ce,
    onDeactivation: ye,
    returnFocus: O,
    focusOptions: Z
  }), /* @__PURE__ */ D.createElement(I, we({
    ref: F
  }, V, {
    className: x,
    onBlur: G,
    onFocus: _
  }), d), M && /* @__PURE__ */ D.createElement("div", {
    "data-focus-guard": !0,
    tabIndex: f ? -1 : 0,
    style: ur
  }));
});
Br.propTypes = process.env.NODE_ENV !== "production" ? {
  children: de.node,
  disabled: de.bool,
  returnFocus: de.oneOfType([de.bool, de.object, de.func]),
  focusOptions: de.object,
  noFocusGuards: de.bool,
  hasPositiveIndices: de.bool,
  allowTextSelection: de.bool,
  autoFocus: de.bool,
  persistentFocus: de.bool,
  crossFrame: de.bool,
  group: de.string,
  className: de.string,
  whiteList: de.func,
  shards: de.arrayOf(de.any),
  as: de.oneOfType([de.string, de.func, de.object]),
  lockProps: de.object,
  onActivation: de.func,
  onDeactivation: de.func,
  sideCar: de.any.isRequired
} : {};
Br.defaultProps = {
  children: void 0,
  disabled: !1,
  returnFocus: !1,
  focusOptions: void 0,
  noFocusGuards: !1,
  autoFocus: !0,
  persistentFocus: !1,
  crossFrame: !0,
  hasPositiveIndices: void 0,
  allowTextSelection: void 0,
  group: void 0,
  className: void 0,
  whiteList: void 0,
  shards: void 0,
  as: "div",
  lockProps: {},
  onActivation: void 0,
  onDeactivation: void 0
};
const Aa = Br;
function Sr(e, t) {
  return Sr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, a) {
    return r.__proto__ = a, r;
  }, Sr(e, t);
}
function Gs(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Sr(e, t);
}
function en(e) {
  "@babel/helpers - typeof";
  return en = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, en(e);
}
function Ks(e, t) {
  if (en(e) !== "object" || e === null)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (en(r) !== "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Xs(e) {
  var t = Ks(e, "string");
  return en(t) === "symbol" ? t : String(t);
}
function Js(e, t, n) {
  return t = Xs(t), t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Zs(e, t) {
  if (process.env.NODE_ENV !== "production") {
    if (typeof e != "function")
      throw new Error("Expected reducePropsToState to be a function.");
    if (typeof t != "function")
      throw new Error("Expected handleStateChangeOnClient to be a function.");
  }
  function n(r) {
    return r.displayName || r.name || "Component";
  }
  return function(a) {
    if (process.env.NODE_ENV !== "production" && typeof a != "function")
      throw new Error("Expected WrappedComponent to be a React component.");
    var i = [], c;
    function s() {
      c = e(i.map(function(l) {
        return l.props;
      })), t(c);
    }
    var u = /* @__PURE__ */ function(l) {
      Gs(d, l);
      function d() {
        return l.apply(this, arguments) || this;
      }
      d.peek = function() {
        return c;
      };
      var f = d.prototype;
      return f.componentDidMount = function() {
        i.push(this), s();
      }, f.componentDidUpdate = function() {
        s();
      }, f.componentWillUnmount = function() {
        var p = i.indexOf(this);
        i.splice(p, 1), s();
      }, f.render = function() {
        return /* @__PURE__ */ _e.createElement(a, this.props);
      }, d;
    }(ni);
    return Js(u, "displayName", "SideEffect(" + n(a) + ")"), u;
  };
}
var Ve = function(e) {
  for (var t = Array(e.length), n = 0; n < e.length; ++n)
    t[n] = e[n];
  return t;
}, Pn = function(e) {
  return Array.isArray(e) ? e : [e];
}, Da = function(e) {
  return Array.isArray(e) ? e[0] : e;
}, Qs = function(e) {
  if (e.nodeType !== Node.ELEMENT_NODE)
    return !1;
  var t = window.getComputedStyle(e, null);
  return !t || !t.getPropertyValue ? !1 : t.getPropertyValue("display") === "none" || t.getPropertyValue("visibility") === "hidden";
}, Na = function(e) {
  return e.parentNode && e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    e.parentNode.host
  ) : e.parentNode;
}, ja = function(e) {
  return e === document || e && e.nodeType === Node.DOCUMENT_NODE;
}, eu = function(e, t) {
  return !e || ja(e) || !Qs(e) && t(Na(e));
}, Ia = function(e, t) {
  var n = e.get(t);
  if (n !== void 0)
    return n;
  var r = eu(t, Ia.bind(void 0, e));
  return e.set(t, r), r;
}, tu = function(e, t) {
  return e && !ja(e) ? ou(e) ? t(Na(e)) : !1 : !0;
}, Fa = function(e, t) {
  var n = e.get(t);
  if (n !== void 0)
    return n;
  var r = tu(t, Fa.bind(void 0, e));
  return e.set(t, r), r;
}, La = function(e) {
  return e.dataset;
}, nu = function(e) {
  return e.tagName === "BUTTON";
}, Ma = function(e) {
  return e.tagName === "INPUT";
}, Ba = function(e) {
  return Ma(e) && e.type === "radio";
}, ru = function(e) {
  return !((Ma(e) || nu(e)) && (e.type === "hidden" || e.disabled));
}, ou = function(e) {
  var t = e.getAttribute(Ys);
  return ![!0, "true", ""].includes(t);
}, Wr = function(e) {
  var t;
  return !!(e && (!((t = La(e)) === null || t === void 0) && t.focusGuard));
}, Tn = function(e) {
  return !Wr(e);
}, au = function(e) {
  return !!e;
}, iu = function(e, t) {
  var n = e.tabIndex - t.tabIndex, r = e.index - t.index;
  if (n) {
    if (!e.tabIndex)
      return 1;
    if (!t.tabIndex)
      return -1;
  }
  return n || r;
}, Wa = function(e, t, n) {
  return Ve(e).map(function(r, a) {
    return {
      node: r,
      index: a,
      tabIndex: n && r.tabIndex === -1 ? (r.dataset || {}).focusGuard ? 0 : -1 : r.tabIndex
    };
  }).filter(function(r) {
    return !t || r.tabIndex >= 0;
  }).sort(iu);
}, cu = [
  "button:enabled",
  "select:enabled",
  "textarea:enabled",
  "input:enabled",
  // elements with explicit roles will also use explicit tabindex
  // '[role="button"]',
  "a[href]",
  "area[href]",
  "summary",
  "iframe",
  "object",
  "embed",
  "audio[controls]",
  "video[controls]",
  "[tabindex]",
  "[contenteditable]",
  "[autofocus]"
], Ur = cu.join(","), su = "".concat(Ur, ", [data-focus-guard]"), Ua = function(e, t) {
  return Ve((e.shadowRoot || e).children).reduce(function(n, r) {
    return n.concat(r.matches(t ? su : Ur) ? [r] : [], Ua(r));
  }, []);
}, uu = function(e, t) {
  var n;
  return e instanceof HTMLIFrameElement && (!((n = e.contentDocument) === null || n === void 0) && n.body) ? An([e.contentDocument.body], t) : [e];
}, An = function(e, t) {
  return e.reduce(function(n, r) {
    var a, i = Ua(r, t), c = (a = []).concat.apply(a, i.map(function(s) {
      return uu(s, t);
    }));
    return n.concat(
      // add all tabbables inside and within shadow DOMs in DOM order
      c,
      // add if node is tabbable itself
      r.parentNode ? Ve(r.parentNode.querySelectorAll(Ur)).filter(function(s) {
        return s === r;
      }) : []
    );
  }, []);
}, lu = function(e) {
  var t = e.querySelectorAll("[".concat(Vs, "]"));
  return Ve(t).map(function(n) {
    return An([n]);
  }).reduce(function(n, r) {
    return n.concat(r);
  }, []);
}, Vr = function(e, t) {
  return Ve(e).filter(function(n) {
    return Ia(t, n);
  }).filter(function(n) {
    return ru(n);
  });
}, ko = function(e, t) {
  return t === void 0 && (t = /* @__PURE__ */ new Map()), Ve(e).filter(function(n) {
    return Fa(t, n);
  });
}, Or = function(e, t, n) {
  return Wa(Vr(An(e, n), t), !0, n);
}, Ao = function(e, t) {
  return Wa(Vr(An(e), t), !1);
}, fu = function(e, t) {
  return Vr(lu(e), t);
}, Ot = function(e, t) {
  return e.shadowRoot ? Ot(e.shadowRoot, t) : Object.getPrototypeOf(e).contains !== void 0 && Object.getPrototypeOf(e).contains.call(e, t) ? !0 : Ve(e.children).some(function(n) {
    var r;
    if (n instanceof HTMLIFrameElement) {
      var a = (r = n.contentDocument) === null || r === void 0 ? void 0 : r.body;
      return a ? Ot(a, t) : !1;
    }
    return Ot(n, t);
  });
}, du = function(e) {
  for (var t = /* @__PURE__ */ new Set(), n = e.length, r = 0; r < n; r += 1)
    for (var a = r + 1; a < n; a += 1) {
      var i = e[r].compareDocumentPosition(e[a]);
      (i & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0 && t.add(a), (i & Node.DOCUMENT_POSITION_CONTAINS) > 0 && t.add(r);
    }
  return e.filter(function(c, s) {
    return !t.has(s);
  });
}, Va = function(e) {
  return e.parentNode ? Va(e.parentNode) : e;
}, Yr = function(e) {
  var t = Pn(e);
  return t.filter(Boolean).reduce(function(n, r) {
    var a = r.getAttribute(Cr);
    return n.push.apply(n, a ? du(Ve(Va(r).querySelectorAll("[".concat(Cr, '="').concat(a, '"]:not([').concat(Ra, '="disabled"])')))) : [r]), n;
  }, []);
}, vu = function(e) {
  try {
    return e();
  } catch (t) {
    return;
  }
}, tn = function(e) {
  if (e === void 0 && (e = document), !(!e || !e.activeElement)) {
    var t = e.activeElement;
    return t.shadowRoot ? tn(t.shadowRoot) : t instanceof HTMLIFrameElement && vu(function() {
      return t.contentWindow.document;
    }) ? tn(t.contentWindow.document) : t;
  }
}, pu = function(e, t) {
  return e === t;
}, mu = function(e, t) {
  return !!Ve(e.querySelectorAll("iframe")).some(function(n) {
    return pu(n, t);
  });
}, Ya = function(e, t) {
  return t === void 0 && (t = tn(Da(e).ownerDocument)), !t || t.dataset && t.dataset.focusGuard ? !1 : Yr(e).some(function(n) {
    return Ot(n, t) || mu(n, t);
  });
}, hu = function(e) {
  e === void 0 && (e = document);
  var t = tn(e);
  return t ? Ve(e.querySelectorAll("[".concat(Us, "]"))).some(function(n) {
    return Ot(n, t);
  }) : !1;
}, yu = function(e, t) {
  return t.filter(Ba).filter(function(n) {
    return n.name === e.name;
  }).filter(function(n) {
    return n.checked;
  })[0] || e;
}, zr = function(e, t) {
  return Ba(e) && e.name ? yu(e, t) : e;
}, gu = function(e) {
  var t = /* @__PURE__ */ new Set();
  return e.forEach(function(n) {
    return t.add(zr(n, e));
  }), e.filter(function(n) {
    return t.has(n);
  });
}, Do = function(e) {
  return e[0] && e.length > 1 ? zr(e[0], e) : e[0];
}, No = function(e, t) {
  return e.length > 1 ? e.indexOf(zr(e[t], e)) : t;
}, za = "NEW_FOCUS", bu = function(e, t, n, r) {
  var a = e.length, i = e[0], c = e[a - 1], s = Wr(n);
  if (!(n && e.indexOf(n) >= 0)) {
    var u = n !== void 0 ? t.indexOf(n) : -1, l = r ? t.indexOf(r) : u, d = r ? e.indexOf(r) : -1, f = u - l, v = t.indexOf(i), p = t.indexOf(c), y = gu(t), g = n !== void 0 ? y.indexOf(n) : -1, b = g - (r ? y.indexOf(r) : u), E = No(e, 0), x = No(e, a - 1);
    if (u === -1 || d === -1)
      return za;
    if (!f && d >= 0)
      return d;
    if (u <= v && s && Math.abs(f) > 1)
      return x;
    if (u >= p && s && Math.abs(f) > 1)
      return E;
    if (f && Math.abs(b) > 1)
      return d;
    if (u <= v)
      return x;
    if (u > p)
      return E;
    if (f)
      return Math.abs(f) > 1 ? d : (a + d + f) % a;
  }
}, wu = function(e) {
  return function(t) {
    var n, r = (n = La(t)) === null || n === void 0 ? void 0 : n.autofocus;
    return (
      // @ts-expect-error
      t.autofocus || //
      r !== void 0 && r !== "false" || //
      e.indexOf(t) >= 0
    );
  };
}, xu = function(e, t, n) {
  var r = e.map(function(i) {
    var c = i.node;
    return c;
  }), a = ko(r.filter(wu(n)));
  return a && a.length ? Do(a) : Do(ko(t));
}, Pr = function(e, t) {
  return t === void 0 && (t = []), t.push(e), e.parentNode && Pr(e.parentNode.host || e.parentNode, t), t;
}, lr = function(e, t) {
  for (var n = Pr(e), r = Pr(t), a = 0; a < n.length; a += 1) {
    var i = n[a];
    if (r.indexOf(i) >= 0)
      return i;
  }
  return !1;
}, qa = function(e, t, n) {
  var r = Pn(e), a = Pn(t), i = r[0], c = !1;
  return a.filter(Boolean).forEach(function(s) {
    c = lr(c || s, s) || c, n.filter(Boolean).forEach(function(u) {
      var l = lr(i, u);
      l && (!c || Ot(l, c) ? c = l : c = lr(l, c));
    });
  }), c;
}, Eu = function(e, t) {
  return e.reduce(function(n, r) {
    return n.concat(fu(r, t));
  }, []);
}, Cu = function(e, t) {
  var n = /* @__PURE__ */ new Map();
  return t.forEach(function(r) {
    return n.set(r.node, r);
  }), e.map(function(r) {
    return n.get(r);
  }).filter(au);
}, Su = function(e, t) {
  var n = tn(Pn(e).length > 0 ? document : Da(e).ownerDocument), r = Yr(e).filter(Tn), a = qa(n || e, e, r), i = /* @__PURE__ */ new Map(), c = Ao(r, i), s = Or(r, i).filter(function(p) {
    var y = p.node;
    return Tn(y);
  });
  if (!(!s[0] && (s = c, !s[0]))) {
    var u = Ao([a], i).map(function(p) {
      var y = p.node;
      return y;
    }), l = Cu(u, s), d = l.map(function(p) {
      var y = p.node;
      return y;
    }), f = bu(d, u, n, t);
    if (f === za) {
      var v = xu(c, d, Eu(r, i));
      if (v)
        return { node: v };
      console.warn("focus-lock: cannot find any node to move focus into");
      return;
    }
    return f === void 0 ? f : l[f];
  }
}, Ou = function(e) {
  var t = Yr(e).filter(Tn), n = qa(e, e, t), r = /* @__PURE__ */ new Map(), a = Or([n], r, !0), i = Or(t, r).filter(function(c) {
    var s = c.node;
    return Tn(s);
  }).map(function(c) {
    var s = c.node;
    return s;
  });
  return a.map(function(c) {
    var s = c.node, u = c.index;
    return {
      node: s,
      index: u,
      lockItem: i.indexOf(s) >= 0,
      guard: Wr(s)
    };
  });
}, Pu = function(e, t) {
  "focus" in e && e.focus(t), "contentWindow" in e && e.contentWindow && e.contentWindow.focus();
}, fr = 0, dr = !1, Ha = function(e, t, n) {
  n === void 0 && (n = {});
  var r = Su(e, t);
  if (!dr && r) {
    if (fr > 2) {
      console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"), dr = !0, setTimeout(function() {
        dr = !1;
      }, 1);
      return;
    }
    fr++, Pu(r.node, n.focusOptions), fr--;
  }
};
function qr(e) {
  setTimeout(e, 1);
}
var Tu = function() {
  return document && document.activeElement === document.body;
}, $u = function() {
  return Tu() || hu();
}, Pt = null, Et = null, Tt = null, nn = !1, Ru = function() {
  return !0;
}, _u = function(t) {
  return (Pt.whiteList || Ru)(t);
}, ku = function(t, n) {
  Tt = {
    observerNode: t,
    portaledElement: n
  };
}, Au = function(t) {
  return Tt && Tt.portaledElement === t;
};
function jo(e, t, n, r) {
  var a = null, i = e;
  do {
    var c = r[i];
    if (c.guard)
      c.node.dataset.focusAutoGuard && (a = c);
    else if (c.lockItem) {
      if (i !== e)
        return;
      a = null;
    } else
      break;
  } while ((i += n) !== t);
  a && (a.node.tabIndex = 0);
}
var Du = function(t) {
  return t && "current" in t ? t.current : t;
}, Nu = function(t) {
  return t ? !!nn : nn === "meanwhile";
}, ju = function e(t, n, r) {
  return n && // find host equal to active element and check nested active element
  (n.host === t && (!n.activeElement || r.contains(n.activeElement)) || n.parentNode && e(t, n.parentNode, r));
}, Iu = function(t, n) {
  return n.some(function(r) {
    return ju(t, r, r);
  });
}, $n = function() {
  var t = !1;
  if (Pt) {
    var n = Pt, r = n.observed, a = n.persistentFocus, i = n.autoFocus, c = n.shards, s = n.crossFrame, u = n.focusOptions, l = r || Tt && Tt.portaledElement, d = document && document.activeElement;
    if (l) {
      var f = [l].concat(c.map(Du).filter(Boolean));
      if ((!d || _u(d)) && (a || Nu(s) || !$u() || !Et && i) && (l && !// active element is "inside" working area
      (Ya(f) || // check for shadow-dom contained elements
      d && Iu(d, f) || Au(d)) && (document && !Et && d && !i ? (d.blur && d.blur(), document.body.focus()) : (t = Ha(f, Et, {
        focusOptions: u
      }), Tt = {})), nn = !1, Et = document && document.activeElement), document) {
        var v = document && document.activeElement, p = Ou(f), y = p.map(function(g) {
          var b = g.node;
          return b;
        }).indexOf(v);
        y > -1 && (p.filter(function(g) {
          var b = g.guard, E = g.node;
          return b && E.dataset.focusAutoGuard;
        }).forEach(function(g) {
          var b = g.node;
          return b.removeAttribute("tabIndex");
        }), jo(y, p.length, 1, p), jo(y, -1, -1, p));
      }
    }
  }
  return t;
}, Ga = function(t) {
  $n() && t && (t.stopPropagation(), t.preventDefault());
}, Hr = function() {
  return qr($n);
}, Fu = function(t) {
  var n = t.target, r = t.currentTarget;
  r.contains(n) || ku(r, n);
}, Lu = function() {
  return null;
};
process.env.NODE_ENV !== "production" && $a.node.isRequired;
var Ka = function() {
  nn = "just", qr(function() {
    nn = "meanwhile";
  });
}, Mu = function() {
  document.addEventListener("focusin", Ga), document.addEventListener("focusout", Hr), window.addEventListener("blur", Ka);
}, Bu = function() {
  document.removeEventListener("focusin", Ga), document.removeEventListener("focusout", Hr), window.removeEventListener("blur", Ka);
};
function Wu(e) {
  return e.filter(function(t) {
    var n = t.disabled;
    return !n;
  });
}
function Uu(e) {
  var t = e.slice(-1)[0];
  t && !Pt && Mu();
  var n = Pt, r = n && t && t.id === n.id;
  Pt = t, n && !r && (n.onDeactivation(), e.filter(function(a) {
    var i = a.id;
    return i === n.id;
  }).length || n.returnFocus(!t)), t ? (Et = null, (!r || n.observed !== t.observed) && t.onActivation(), $n(), qr($n)) : (Bu(), Et = null);
}
_a.assignSyncMedium(Fu);
ka.assignMedium(Hr);
zs.assignMedium(function(e) {
  return e({
    moveFocusInside: Ha,
    focusInside: Ya
  });
});
const Vu = Zs(Wu, Uu)(Lu);
var Xa = /* @__PURE__ */ D.forwardRef(function(t, n) {
  return /* @__PURE__ */ D.createElement(Aa, we({
    sideCar: Vu,
    ref: n
  }, t));
}), Ja = Aa.propTypes || {};
Ja.sideCar;
var Yu = Ds(Ja, ["sideCar"]);
Xa.propTypes = process.env.NODE_ENV !== "production" ? Yu : {};
const zu = Xa;
const qu = ({
  children: e,
  open: t,
  onOpenChange: n,
  disableBackdropClick: r,
  disableEscapeKey: a
}) => {
  const [i, c] = oe(!0), s = ge(null);
  return fe(() => (i && t && (document.body.style.overflow = "hidden"), () => {
    document.body.style.overflow = "visible";
  }), [i, t]), fe(() => {
    if (r)
      return;
    const u = (l) => {
      !s.current || s.current.contains(l.target) || (n(), c(!1));
    };
    return document.addEventListener("mousedown", u), document.addEventListener("touchstart", u), () => {
      document.removeEventListener("mousedown", u), document.removeEventListener("touchstart", u);
    };
  }, [r, n]), fe(() => {
    if (a)
      return;
    const u = (l) => {
      l.key === "Escape" && (n(), c(!1));
    };
    return document.addEventListener("keydown", u), () => {
      document.removeEventListener("keydown", u);
    };
  }, [r, a, n]), /* @__PURE__ */ T.jsx("div", { className: "Modal-backdrop", children: /* @__PURE__ */ T.jsx("div", { ref: s, "aria-modal": "true", role: "dialog", className: "Modal-content", children: e }) });
}, ol = ({
  open: e,
  onOpenChange: t,
  children: n,
  disableBackdropClick: r = !1,
  disableEscapeKey: a = !1
}) => e ? /* @__PURE__ */ T.jsx(zu, { children: /* @__PURE__ */ T.jsx("div", { className: "Modal", children: /* @__PURE__ */ T.jsx(
  qu,
  {
    open: e,
    onOpenChange: t,
    disableBackdropClick: r,
    disableEscapeKey: a,
    children: n
  }
) }) }) : null;
export {
  pi as Accordion,
  ut as BUTTON_COLOR,
  Ye as BUTTON_SIZE,
  ci as BUTTON_TYPE,
  ze as BUTTON_VARIANT,
  nl as Breadcrumbs,
  si as Button,
  wt as CHECKBOX_SIZE,
  Ae as CHECKBOX_THEME,
  di as Checkbox,
  Oe as DROPDOWN_SIZE,
  xt as DROPDOWN_TYPE,
  As as Dropdown,
  bt as INPUT_SIZE,
  Gt as INPUT_THEME,
  lt as INPUT_TYPE,
  mi as IconButton,
  fi as Input,
  ol as Modal,
  xn as PROGRESS_BAR_SIZE,
  ks as Popover,
  rl as ProgressBar,
  qe as SWITCH_SIZE,
  Kt as SWITCH_TAGS_SIZE,
  yn as SWITCH_TAGS_VARIANT,
  Me as SWITCH_THEME,
  vi as Switch,
  Zu as SwitchTags,
  hr as TABS_SIZE,
  hn as TAGS_SIZE,
  Xu as Tabs,
  Ju as Tags
};
