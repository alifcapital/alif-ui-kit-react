import './index.css';
var ii = Object.defineProperty, si = Object.defineProperties;
var ci = Object.getOwnPropertyDescriptors;
var ln = Object.getOwnPropertySymbols;
var no = Object.prototype.hasOwnProperty, ro = Object.prototype.propertyIsEnumerable;
var to = (e, t, n) => t in e ? ii(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, q = (e, t) => {
  for (var n in t || (t = {}))
    no.call(t, n) && to(e, n, t[n]);
  if (ln)
    for (var n of ln(t))
      ro.call(t, n) && to(e, n, t[n]);
  return e;
}, fe = (e, t) => si(e, ci(t));
var we = (e, t) => {
  var n = {};
  for (var r in e)
    no.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && ln)
    for (var r of ln(e))
      t.indexOf(r) < 0 && ro.call(e, r) && (n[r] = e[r]);
  return n;
};
var Ie = (e, t, n) => new Promise((r, o) => {
  var i = (u) => {
    try {
      c(n.next(u));
    } catch (l) {
      o(l);
    }
  }, s = (u) => {
    try {
      c(n.throw(u));
    } catch (l) {
      o(l);
    }
  }, c = (u) => u.done ? r(u.value) : Promise.resolve(u.value).then(i, s);
  c((n = n.apply(e, t)).next());
});
import * as A from "react";
import Te, { useState as re, useLayoutEffect as Ye, useEffect as de, useMemo as vt, useRef as ye, useCallback as dt, createContext as br, createElement as me, useContext as qo, forwardRef as Le, Children as St, isValidElement as Qt, cloneElement as Ar, Fragment as Vo, useReducer as ui, PureComponent as li } from "react";
import * as fi from "react-dom";
import { flushSync as Go, createPortal as di } from "react-dom";
function pi(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var wr = { exports: {} }, Gt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var oo;
function vi() {
  if (oo)
    return Gt;
  oo = 1;
  var e = Te, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(c, u, l) {
    var d, f = {}, p = null, v = null;
    l !== void 0 && (p = "" + l), u.key !== void 0 && (p = "" + u.key), u.ref !== void 0 && (v = u.ref);
    for (d in u)
      r.call(u, d) && !i.hasOwnProperty(d) && (f[d] = u[d]);
    if (c && c.defaultProps)
      for (d in u = c.defaultProps, u)
        f[d] === void 0 && (f[d] = u[d]);
    return { $$typeof: t, type: c, key: p, ref: v, props: f, _owner: o.current };
  }
  return Gt.Fragment = n, Gt.jsx = s, Gt.jsxs = s, Gt;
}
var Kt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ao;
function mi() {
  return ao || (ao = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Te, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), c = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), g = Symbol.iterator, y = "@@iterator";
    function b(a) {
      if (a === null || typeof a != "object")
        return null;
      var m = g && a[g] || a[y];
      return typeof m == "function" ? m : null;
    }
    var x = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(a) {
      {
        for (var m = arguments.length, C = new Array(m > 1 ? m - 1 : 0), T = 1; T < m; T++)
          C[T - 1] = arguments[T];
        S("error", a, C);
      }
    }
    function S(a, m, C) {
      {
        var T = x.ReactDebugCurrentFrame, M = T.getStackAddendum();
        M !== "" && (m += "%s", C = C.concat([M]));
        var W = C.map(function(j) {
          return String(j);
        });
        W.unshift("Warning: " + m), Function.prototype.apply.call(console[a], console, W);
      }
    }
    var E = !1, h = !1, $ = !1, R = !1, L = !1, N;
    N = Symbol.for("react.module.reference");
    function ae(a) {
      return !!(typeof a == "string" || typeof a == "function" || a === r || a === i || L || a === o || a === l || a === d || R || a === v || E || h || $ || typeof a == "object" && a !== null && (a.$$typeof === p || a.$$typeof === f || a.$$typeof === s || a.$$typeof === c || a.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      a.$$typeof === N || a.getModuleId !== void 0));
    }
    function ie(a, m, C) {
      var T = a.displayName;
      if (T)
        return T;
      var M = m.displayName || m.name || "";
      return M !== "" ? C + "(" + M + ")" : C;
    }
    function oe(a) {
      return a.displayName || "Context";
    }
    function Q(a) {
      if (a == null)
        return null;
      if (typeof a.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof a == "function")
        return a.displayName || a.name || null;
      if (typeof a == "string")
        return a;
      switch (a) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case i:
          return "Profiler";
        case o:
          return "StrictMode";
        case l:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof a == "object")
        switch (a.$$typeof) {
          case c:
            var m = a;
            return oe(m) + ".Consumer";
          case s:
            var C = a;
            return oe(C._context) + ".Provider";
          case u:
            return ie(a, a.render, "ForwardRef");
          case f:
            var T = a.displayName || null;
            return T !== null ? T : Q(a.type) || "Memo";
          case p: {
            var M = a, W = M._payload, j = M._init;
            try {
              return Q(j(W));
            } catch (D) {
              return null;
            }
          }
        }
      return null;
    }
    var B = Object.assign, te = 0, V, ne, se, ge, P, k, H;
    function G() {
    }
    G.__reactDisabledLog = !0;
    function z() {
      {
        if (te === 0) {
          V = console.log, ne = console.info, se = console.warn, ge = console.error, P = console.group, k = console.groupCollapsed, H = console.groupEnd;
          var a = {
            configurable: !0,
            enumerable: !0,
            value: G,
            writable: !0
          };
          Object.defineProperties(console, {
            info: a,
            log: a,
            warn: a,
            error: a,
            group: a,
            groupCollapsed: a,
            groupEnd: a
          });
        }
        te++;
      }
    }
    function X() {
      {
        if (te--, te === 0) {
          var a = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: B({}, a, {
              value: V
            }),
            info: B({}, a, {
              value: ne
            }),
            warn: B({}, a, {
              value: se
            }),
            error: B({}, a, {
              value: ge
            }),
            group: B({}, a, {
              value: P
            }),
            groupCollapsed: B({}, a, {
              value: k
            }),
            groupEnd: B({}, a, {
              value: H
            })
          });
        }
        te < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var I = x.ReactCurrentDispatcher, F;
    function U(a, m, C) {
      {
        if (F === void 0)
          try {
            throw Error();
          } catch (M) {
            var T = M.stack.trim().match(/\n( *(at )?)/);
            F = T && T[1] || "";
          }
        return `
` + F + a;
      }
    }
    var K = !1, Y;
    {
      var he = typeof WeakMap == "function" ? WeakMap : Map;
      Y = new he();
    }
    function _(a, m) {
      if (!a || K)
        return "";
      {
        var C = Y.get(a);
        if (C !== void 0)
          return C;
      }
      var T;
      K = !0;
      var M = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var W;
      W = I.current, I.current = null, z();
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
              T = be;
            }
            Reflect.construct(a, [], j);
          } else {
            try {
              j.call();
            } catch (be) {
              T = be;
            }
            a.call(j.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (be) {
            T = be;
          }
          a();
        }
      } catch (be) {
        if (be && T && typeof be.stack == "string") {
          for (var D = be.stack.split(`
`), ce = T.stack.split(`
`), Z = D.length - 1, ee = ce.length - 1; Z >= 1 && ee >= 0 && D[Z] !== ce[ee]; )
            ee--;
          for (; Z >= 1 && ee >= 0; Z--, ee--)
            if (D[Z] !== ce[ee]) {
              if (Z !== 1 || ee !== 1)
                do
                  if (Z--, ee--, ee < 0 || D[Z] !== ce[ee]) {
                    var ve = `
` + D[Z].replace(" at new ", " at ");
                    return a.displayName && ve.includes("<anonymous>") && (ve = ve.replace("<anonymous>", a.displayName)), typeof a == "function" && Y.set(a, ve), ve;
                  }
                while (Z >= 1 && ee >= 0);
              break;
            }
        }
      } finally {
        K = !1, I.current = W, X(), Error.prepareStackTrace = M;
      }
      var Re = a ? a.displayName || a.name : "", Vt = Re ? U(Re) : "";
      return typeof a == "function" && Y.set(a, Vt), Vt;
    }
    function Ee(a, m, C) {
      return _(a, !1);
    }
    function Be(a) {
      var m = a.prototype;
      return !!(m && m.isReactComponent);
    }
    function Se(a, m, C) {
      if (a == null)
        return "";
      if (typeof a == "function")
        return _(a, Be(a));
      if (typeof a == "string")
        return U(a);
      switch (a) {
        case l:
          return U("Suspense");
        case d:
          return U("SuspenseList");
      }
      if (typeof a == "object")
        switch (a.$$typeof) {
          case u:
            return Ee(a.render);
          case f:
            return Se(a.type, m, C);
          case p: {
            var T = a, M = T._payload, W = T._init;
            try {
              return Se(W(M), m, C);
            } catch (j) {
            }
          }
        }
      return "";
    }
    var Oe = Object.prototype.hasOwnProperty, Qe = {}, at = x.ReactDebugCurrentFrame;
    function Fe(a) {
      if (a) {
        var m = a._owner, C = Se(a.type, a._source, m ? m.type : null);
        at.setExtraStackFrame(C);
      } else
        at.setExtraStackFrame(null);
    }
    function At(a, m, C, T, M) {
      {
        var W = Function.call.bind(Oe);
        for (var j in a)
          if (W(a, j)) {
            var D = void 0;
            try {
              if (typeof a[j] != "function") {
                var ce = Error((T || "React class") + ": " + C + " type `" + j + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[j] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ce.name = "Invariant Violation", ce;
              }
              D = a[j](m, j, T, C, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Z) {
              D = Z;
            }
            D && !(D instanceof Error) && (Fe(M), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", T || "React class", C, j, typeof D), Fe(null)), D instanceof Error && !(D.message in Qe) && (Qe[D.message] = !0, Fe(M), w("Failed %s type: %s", C, D.message), Fe(null));
          }
      }
    }
    var Nt = Array.isArray;
    function De(a) {
      return Nt(a);
    }
    function Mn(a) {
      {
        var m = typeof Symbol == "function" && Symbol.toStringTag, C = m && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return C;
      }
    }
    function In(a) {
      try {
        return jt(a), !1;
      } catch (m) {
        return !0;
      }
    }
    function jt(a) {
      return "" + a;
    }
    function Lt(a) {
      if (In(a))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Mn(a)), jt(a);
    }
    var Me = x.ReactCurrentOwner, Bn = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ft, Mt, it;
    it = {};
    function Wn(a) {
      if (Oe.call(a, "ref")) {
        var m = Object.getOwnPropertyDescriptor(a, "ref").get;
        if (m && m.isReactWarning)
          return !1;
      }
      return a.ref !== void 0;
    }
    function Un(a) {
      if (Oe.call(a, "key")) {
        var m = Object.getOwnPropertyDescriptor(a, "key").get;
        if (m && m.isReactWarning)
          return !1;
      }
      return a.key !== void 0;
    }
    function zn(a, m) {
      if (typeof a.ref == "string" && Me.current && m && Me.current.stateNode !== m) {
        var C = Q(Me.current.type);
        it[C] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Q(Me.current.type), a.ref), it[C] = !0);
      }
    }
    function qn(a, m) {
      {
        var C = function() {
          Ft || (Ft = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", m));
        };
        C.isReactWarning = !0, Object.defineProperty(a, "key", {
          get: C,
          configurable: !0
        });
      }
    }
    function Vn(a, m) {
      {
        var C = function() {
          Mt || (Mt = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", m));
        };
        C.isReactWarning = !0, Object.defineProperty(a, "ref", {
          get: C,
          configurable: !0
        });
      }
    }
    var Gn = function(a, m, C, T, M, W, j) {
      var D = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: a,
        key: m,
        ref: C,
        props: j,
        // Record the component responsible for creating this element.
        _owner: W
      };
      return D._store = {}, Object.defineProperty(D._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(D, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: T
      }), Object.defineProperty(D, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: M
      }), Object.freeze && (Object.freeze(D.props), Object.freeze(D)), D;
    };
    function Kn(a, m, C, T, M) {
      {
        var W, j = {}, D = null, ce = null;
        C !== void 0 && (Lt(C), D = "" + C), Un(m) && (Lt(m.key), D = "" + m.key), Wn(m) && (ce = m.ref, zn(m, M));
        for (W in m)
          Oe.call(m, W) && !Bn.hasOwnProperty(W) && (j[W] = m[W]);
        if (a && a.defaultProps) {
          var Z = a.defaultProps;
          for (W in Z)
            j[W] === void 0 && (j[W] = Z[W]);
        }
        if (D || ce) {
          var ee = typeof a == "function" ? a.displayName || a.name || "Unknown" : a;
          D && qn(j, ee), ce && Vn(j, ee);
        }
        return Gn(a, D, ce, M, T, Me.current, j);
      }
    }
    var st = x.ReactCurrentOwner, It = x.ReactDebugCurrentFrame;
    function $e(a) {
      if (a) {
        var m = a._owner, C = Se(a.type, a._source, m ? m.type : null);
        It.setExtraStackFrame(C);
      } else
        It.setExtraStackFrame(null);
    }
    var ct;
    ct = !1;
    function ut(a) {
      return typeof a == "object" && a !== null && a.$$typeof === t;
    }
    function Bt() {
      {
        if (st.current) {
          var a = Q(st.current.type);
          if (a)
            return `

Check the render method of \`` + a + "`.";
        }
        return "";
      }
    }
    function Yn(a) {
      {
        if (a !== void 0) {
          var m = a.fileName.replace(/^.*[\\\/]/, ""), C = a.lineNumber;
          return `

Check your code at ` + m + ":" + C + ".";
        }
        return "";
      }
    }
    var Wt = {};
    function Hn(a) {
      {
        var m = Bt();
        if (!m) {
          var C = typeof a == "string" ? a : a.displayName || a.name;
          C && (m = `

Check the top-level render call using <` + C + ">.");
        }
        return m;
      }
    }
    function Ut(a, m) {
      {
        if (!a._store || a._store.validated || a.key != null)
          return;
        a._store.validated = !0;
        var C = Hn(m);
        if (Wt[C])
          return;
        Wt[C] = !0;
        var T = "";
        a && a._owner && a._owner !== st.current && (T = " It was passed a child from " + Q(a._owner.type) + "."), $e(a), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', C, T), $e(null);
      }
    }
    function zt(a, m) {
      {
        if (typeof a != "object")
          return;
        if (De(a))
          for (var C = 0; C < a.length; C++) {
            var T = a[C];
            ut(T) && Ut(T, m);
          }
        else if (ut(a))
          a._store && (a._store.validated = !0);
        else if (a) {
          var M = b(a);
          if (typeof M == "function" && M !== a.entries)
            for (var W = M.call(a), j; !(j = W.next()).done; )
              ut(j.value) && Ut(j.value, m);
        }
      }
    }
    function Xn(a) {
      {
        var m = a.type;
        if (m == null || typeof m == "string")
          return;
        var C;
        if (typeof m == "function")
          C = m.propTypes;
        else if (typeof m == "object" && (m.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        m.$$typeof === f))
          C = m.propTypes;
        else
          return;
        if (C) {
          var T = Q(m);
          At(C, a.props, "prop", T, a);
        } else if (m.PropTypes !== void 0 && !ct) {
          ct = !0;
          var M = Q(m);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", M || "Unknown");
        }
        typeof m.getDefaultProps == "function" && !m.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Jn(a) {
      {
        for (var m = Object.keys(a.props), C = 0; C < m.length; C++) {
          var T = m[C];
          if (T !== "children" && T !== "key") {
            $e(a), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", T), $e(null);
            break;
          }
        }
        a.ref !== null && ($e(a), w("Invalid attribute `ref` supplied to `React.Fragment`."), $e(null));
      }
    }
    function qt(a, m, C, T, M, W) {
      {
        var j = ae(a);
        if (!j) {
          var D = "";
          (a === void 0 || typeof a == "object" && a !== null && Object.keys(a).length === 0) && (D += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ce = Yn(M);
          ce ? D += ce : D += Bt();
          var Z;
          a === null ? Z = "null" : De(a) ? Z = "array" : a !== void 0 && a.$$typeof === t ? (Z = "<" + (Q(a.type) || "Unknown") + " />", D = " Did you accidentally export a JSX literal instead of a component?") : Z = typeof a, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Z, D);
        }
        var ee = Kn(a, m, C, M, W);
        if (ee == null)
          return ee;
        if (j) {
          var ve = m.children;
          if (ve !== void 0)
            if (T)
              if (De(ve)) {
                for (var Re = 0; Re < ve.length; Re++)
                  zt(ve[Re], a);
                Object.freeze && Object.freeze(ve);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              zt(ve, a);
        }
        return a === r ? Jn(ee) : Xn(ee), ee;
      }
    }
    function Zn(a, m, C) {
      return qt(a, m, C, !0);
    }
    function Qn(a, m, C) {
      return qt(a, m, C, !1);
    }
    var er = Qn, tr = Zn;
    Kt.Fragment = r, Kt.jsx = er, Kt.jsxs = tr;
  }()), Kt;
}
process.env.NODE_ENV === "production" ? wr.exports = vi() : wr.exports = mi();
var O = wr.exports;
function Ko(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = Ko(e[t])) && (r && (r += " "), r += n);
    else
      for (t in e)
        e[t] && (r && (r += " "), r += t);
  return r;
}
function J() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = Ko(e)) && (r && (r += " "), r += t);
  return r;
}
var Ve = /* @__PURE__ */ ((e) => (e.Large = "large", e.Medium = "medium", e.Small = "small", e))(Ve || {}), Ge = /* @__PURE__ */ ((e) => (e.Contained = "contained", e.Outlined = "outlined", e.Text = "text", e))(Ge || {}), lt = /* @__PURE__ */ ((e) => (e.Primary = "primary", e.Secondary = "secondary", e.Green = "green", e))(lt || {}), hi = /* @__PURE__ */ ((e) => (e.Submit = "submit", e.Reset = "reset", e.Button = "button", e))(hi || {});
const gi = Te.forwardRef((e, t) => {
  const {
    id: n,
    ariaLabel: r,
    className: o,
    children: i,
    disabled: s,
    rounded: c,
    endIcon: u,
    startIcon: l,
    color: d = lt.Primary,
    withIcon: f,
    size: p = Ve.Medium,
    variant: v = Ge.Contained,
    type: g = "button",
    hasFullWith: y = !1,
    onClick: b
  } = e, x = () => {
    b && b();
  };
  return /* @__PURE__ */ O.jsx(
    "button",
    {
      onClick: x,
      ref: t,
      type: g,
      "aria-label": r,
      id: n,
      disabled: s,
      className: J({
        Button: !0,
        "Button-contained": v === Ge.Contained,
        "Button-outlined": v === Ge.Outlined,
        "Button-outlined-disable": !!s && v === Ge.Outlined,
        "Button-text": v === Ge.Text,
        "Button-text-small": p === Ve.Small && v === Ge.Text,
        "Button-text-large": p === Ve.Large && v === Ge.Text,
        "Button-text-disable": !!s && v === Ge.Text,
        "Button-primary": p === Ve.Medium,
        "Button-primary-disable": !!s && d === lt.Primary,
        "Button-secondary": d === lt.Secondary,
        "Button-secondary-disable": !!s && d === lt.Secondary,
        "Button-green": d === lt.Green,
        "Button-green-disable": !!s && d === lt.Green,
        "Button-small": p === Ve.Small,
        "Button-large": p === Ve.Large,
        "Button-round": !!c,
        "Button-only_icon": !!f,
        "Button-only_icon-small": !!f && p === Ve.Small,
        "Button-only_icon-large": !!f && p === Ve.Large,
        "Button-fullWidth": y,
        [o || ""]: !!o
      }),
      children: /* @__PURE__ */ O.jsxs("div", { className: "Button-children", children: [
        l && /* @__PURE__ */ O.jsx("span", { className: "Button-icon-left", children: l }),
        i,
        u && /* @__PURE__ */ O.jsx("span", { className: "Button-icon-right", children: u })
      ] })
    }
  );
});
gi.displayName = "Button";
var xr = { exports: {} }, Yt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var io;
function yi() {
  if (io)
    return Yt;
  io = 1;
  var e = Te, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(c, u, l) {
    var d, f = {}, p = null, v = null;
    l !== void 0 && (p = "" + l), u.key !== void 0 && (p = "" + u.key), u.ref !== void 0 && (v = u.ref);
    for (d in u)
      r.call(u, d) && !i.hasOwnProperty(d) && (f[d] = u[d]);
    if (c && c.defaultProps)
      for (d in u = c.defaultProps, u)
        f[d] === void 0 && (f[d] = u[d]);
    return { $$typeof: t, type: c, key: p, ref: v, props: f, _owner: o.current };
  }
  return Yt.Fragment = n, Yt.jsx = s, Yt.jsxs = s, Yt;
}
var fn = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var so;
function bi() {
  return so || (so = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Te, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), c = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), g = Symbol.iterator, y = "@@iterator";
    function b(a) {
      if (a === null || typeof a != "object")
        return null;
      var m = g && a[g] || a[y];
      return typeof m == "function" ? m : null;
    }
    var x = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(a) {
      {
        for (var m = arguments.length, C = new Array(m > 1 ? m - 1 : 0), T = 1; T < m; T++)
          C[T - 1] = arguments[T];
        S("error", a, C);
      }
    }
    function S(a, m, C) {
      {
        var T = x.ReactDebugCurrentFrame, M = T.getStackAddendum();
        M !== "" && (m += "%s", C = C.concat([M]));
        var W = C.map(function(j) {
          return String(j);
        });
        W.unshift("Warning: " + m), Function.prototype.apply.call(console[a], console, W);
      }
    }
    var E = !1, h = !1, $ = !1, R = !1, L = !1, N;
    N = Symbol.for("react.module.reference");
    function ae(a) {
      return !!(typeof a == "string" || typeof a == "function" || a === r || a === i || L || a === o || a === l || a === d || R || a === v || E || h || $ || typeof a == "object" && a !== null && (a.$$typeof === p || a.$$typeof === f || a.$$typeof === s || a.$$typeof === c || a.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      a.$$typeof === N || a.getModuleId !== void 0));
    }
    function ie(a, m, C) {
      var T = a.displayName;
      if (T)
        return T;
      var M = m.displayName || m.name || "";
      return M !== "" ? C + "(" + M + ")" : C;
    }
    function oe(a) {
      return a.displayName || "Context";
    }
    function Q(a) {
      if (a == null)
        return null;
      if (typeof a.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof a == "function")
        return a.displayName || a.name || null;
      if (typeof a == "string")
        return a;
      switch (a) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case i:
          return "Profiler";
        case o:
          return "StrictMode";
        case l:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof a == "object")
        switch (a.$$typeof) {
          case c:
            var m = a;
            return oe(m) + ".Consumer";
          case s:
            var C = a;
            return oe(C._context) + ".Provider";
          case u:
            return ie(a, a.render, "ForwardRef");
          case f:
            var T = a.displayName || null;
            return T !== null ? T : Q(a.type) || "Memo";
          case p: {
            var M = a, W = M._payload, j = M._init;
            try {
              return Q(j(W));
            } catch (D) {
              return null;
            }
          }
        }
      return null;
    }
    var B = Object.assign, te = 0, V, ne, se, ge, P, k, H;
    function G() {
    }
    G.__reactDisabledLog = !0;
    function z() {
      {
        if (te === 0) {
          V = console.log, ne = console.info, se = console.warn, ge = console.error, P = console.group, k = console.groupCollapsed, H = console.groupEnd;
          var a = {
            configurable: !0,
            enumerable: !0,
            value: G,
            writable: !0
          };
          Object.defineProperties(console, {
            info: a,
            log: a,
            warn: a,
            error: a,
            group: a,
            groupCollapsed: a,
            groupEnd: a
          });
        }
        te++;
      }
    }
    function X() {
      {
        if (te--, te === 0) {
          var a = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: B({}, a, {
              value: V
            }),
            info: B({}, a, {
              value: ne
            }),
            warn: B({}, a, {
              value: se
            }),
            error: B({}, a, {
              value: ge
            }),
            group: B({}, a, {
              value: P
            }),
            groupCollapsed: B({}, a, {
              value: k
            }),
            groupEnd: B({}, a, {
              value: H
            })
          });
        }
        te < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var I = x.ReactCurrentDispatcher, F;
    function U(a, m, C) {
      {
        if (F === void 0)
          try {
            throw Error();
          } catch (M) {
            var T = M.stack.trim().match(/\n( *(at )?)/);
            F = T && T[1] || "";
          }
        return `
` + F + a;
      }
    }
    var K = !1, Y;
    {
      var he = typeof WeakMap == "function" ? WeakMap : Map;
      Y = new he();
    }
    function _(a, m) {
      if (!a || K)
        return "";
      {
        var C = Y.get(a);
        if (C !== void 0)
          return C;
      }
      var T;
      K = !0;
      var M = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var W;
      W = I.current, I.current = null, z();
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
              T = be;
            }
            Reflect.construct(a, [], j);
          } else {
            try {
              j.call();
            } catch (be) {
              T = be;
            }
            a.call(j.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (be) {
            T = be;
          }
          a();
        }
      } catch (be) {
        if (be && T && typeof be.stack == "string") {
          for (var D = be.stack.split(`
`), ce = T.stack.split(`
`), Z = D.length - 1, ee = ce.length - 1; Z >= 1 && ee >= 0 && D[Z] !== ce[ee]; )
            ee--;
          for (; Z >= 1 && ee >= 0; Z--, ee--)
            if (D[Z] !== ce[ee]) {
              if (Z !== 1 || ee !== 1)
                do
                  if (Z--, ee--, ee < 0 || D[Z] !== ce[ee]) {
                    var ve = `
` + D[Z].replace(" at new ", " at ");
                    return a.displayName && ve.includes("<anonymous>") && (ve = ve.replace("<anonymous>", a.displayName)), typeof a == "function" && Y.set(a, ve), ve;
                  }
                while (Z >= 1 && ee >= 0);
              break;
            }
        }
      } finally {
        K = !1, I.current = W, X(), Error.prepareStackTrace = M;
      }
      var Re = a ? a.displayName || a.name : "", Vt = Re ? U(Re) : "";
      return typeof a == "function" && Y.set(a, Vt), Vt;
    }
    function Ee(a, m, C) {
      return _(a, !1);
    }
    function Be(a) {
      var m = a.prototype;
      return !!(m && m.isReactComponent);
    }
    function Se(a, m, C) {
      if (a == null)
        return "";
      if (typeof a == "function")
        return _(a, Be(a));
      if (typeof a == "string")
        return U(a);
      switch (a) {
        case l:
          return U("Suspense");
        case d:
          return U("SuspenseList");
      }
      if (typeof a == "object")
        switch (a.$$typeof) {
          case u:
            return Ee(a.render);
          case f:
            return Se(a.type, m, C);
          case p: {
            var T = a, M = T._payload, W = T._init;
            try {
              return Se(W(M), m, C);
            } catch (j) {
            }
          }
        }
      return "";
    }
    var Oe = Object.prototype.hasOwnProperty, Qe = {}, at = x.ReactDebugCurrentFrame;
    function Fe(a) {
      if (a) {
        var m = a._owner, C = Se(a.type, a._source, m ? m.type : null);
        at.setExtraStackFrame(C);
      } else
        at.setExtraStackFrame(null);
    }
    function At(a, m, C, T, M) {
      {
        var W = Function.call.bind(Oe);
        for (var j in a)
          if (W(a, j)) {
            var D = void 0;
            try {
              if (typeof a[j] != "function") {
                var ce = Error((T || "React class") + ": " + C + " type `" + j + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[j] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ce.name = "Invariant Violation", ce;
              }
              D = a[j](m, j, T, C, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Z) {
              D = Z;
            }
            D && !(D instanceof Error) && (Fe(M), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", T || "React class", C, j, typeof D), Fe(null)), D instanceof Error && !(D.message in Qe) && (Qe[D.message] = !0, Fe(M), w("Failed %s type: %s", C, D.message), Fe(null));
          }
      }
    }
    var Nt = Array.isArray;
    function De(a) {
      return Nt(a);
    }
    function Mn(a) {
      {
        var m = typeof Symbol == "function" && Symbol.toStringTag, C = m && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return C;
      }
    }
    function In(a) {
      try {
        return jt(a), !1;
      } catch (m) {
        return !0;
      }
    }
    function jt(a) {
      return "" + a;
    }
    function Lt(a) {
      if (In(a))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Mn(a)), jt(a);
    }
    var Me = x.ReactCurrentOwner, Bn = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ft, Mt, it;
    it = {};
    function Wn(a) {
      if (Oe.call(a, "ref")) {
        var m = Object.getOwnPropertyDescriptor(a, "ref").get;
        if (m && m.isReactWarning)
          return !1;
      }
      return a.ref !== void 0;
    }
    function Un(a) {
      if (Oe.call(a, "key")) {
        var m = Object.getOwnPropertyDescriptor(a, "key").get;
        if (m && m.isReactWarning)
          return !1;
      }
      return a.key !== void 0;
    }
    function zn(a, m) {
      if (typeof a.ref == "string" && Me.current && m && Me.current.stateNode !== m) {
        var C = Q(Me.current.type);
        it[C] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Q(Me.current.type), a.ref), it[C] = !0);
      }
    }
    function qn(a, m) {
      {
        var C = function() {
          Ft || (Ft = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", m));
        };
        C.isReactWarning = !0, Object.defineProperty(a, "key", {
          get: C,
          configurable: !0
        });
      }
    }
    function Vn(a, m) {
      {
        var C = function() {
          Mt || (Mt = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", m));
        };
        C.isReactWarning = !0, Object.defineProperty(a, "ref", {
          get: C,
          configurable: !0
        });
      }
    }
    var Gn = function(a, m, C, T, M, W, j) {
      var D = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: a,
        key: m,
        ref: C,
        props: j,
        // Record the component responsible for creating this element.
        _owner: W
      };
      return D._store = {}, Object.defineProperty(D._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(D, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: T
      }), Object.defineProperty(D, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: M
      }), Object.freeze && (Object.freeze(D.props), Object.freeze(D)), D;
    };
    function Kn(a, m, C, T, M) {
      {
        var W, j = {}, D = null, ce = null;
        C !== void 0 && (Lt(C), D = "" + C), Un(m) && (Lt(m.key), D = "" + m.key), Wn(m) && (ce = m.ref, zn(m, M));
        for (W in m)
          Oe.call(m, W) && !Bn.hasOwnProperty(W) && (j[W] = m[W]);
        if (a && a.defaultProps) {
          var Z = a.defaultProps;
          for (W in Z)
            j[W] === void 0 && (j[W] = Z[W]);
        }
        if (D || ce) {
          var ee = typeof a == "function" ? a.displayName || a.name || "Unknown" : a;
          D && qn(j, ee), ce && Vn(j, ee);
        }
        return Gn(a, D, ce, M, T, Me.current, j);
      }
    }
    var st = x.ReactCurrentOwner, It = x.ReactDebugCurrentFrame;
    function $e(a) {
      if (a) {
        var m = a._owner, C = Se(a.type, a._source, m ? m.type : null);
        It.setExtraStackFrame(C);
      } else
        It.setExtraStackFrame(null);
    }
    var ct;
    ct = !1;
    function ut(a) {
      return typeof a == "object" && a !== null && a.$$typeof === t;
    }
    function Bt() {
      {
        if (st.current) {
          var a = Q(st.current.type);
          if (a)
            return `

Check the render method of \`` + a + "`.";
        }
        return "";
      }
    }
    function Yn(a) {
      {
        if (a !== void 0) {
          var m = a.fileName.replace(/^.*[\\\/]/, ""), C = a.lineNumber;
          return `

Check your code at ` + m + ":" + C + ".";
        }
        return "";
      }
    }
    var Wt = {};
    function Hn(a) {
      {
        var m = Bt();
        if (!m) {
          var C = typeof a == "string" ? a : a.displayName || a.name;
          C && (m = `

Check the top-level render call using <` + C + ">.");
        }
        return m;
      }
    }
    function Ut(a, m) {
      {
        if (!a._store || a._store.validated || a.key != null)
          return;
        a._store.validated = !0;
        var C = Hn(m);
        if (Wt[C])
          return;
        Wt[C] = !0;
        var T = "";
        a && a._owner && a._owner !== st.current && (T = " It was passed a child from " + Q(a._owner.type) + "."), $e(a), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', C, T), $e(null);
      }
    }
    function zt(a, m) {
      {
        if (typeof a != "object")
          return;
        if (De(a))
          for (var C = 0; C < a.length; C++) {
            var T = a[C];
            ut(T) && Ut(T, m);
          }
        else if (ut(a))
          a._store && (a._store.validated = !0);
        else if (a) {
          var M = b(a);
          if (typeof M == "function" && M !== a.entries)
            for (var W = M.call(a), j; !(j = W.next()).done; )
              ut(j.value) && Ut(j.value, m);
        }
      }
    }
    function Xn(a) {
      {
        var m = a.type;
        if (m == null || typeof m == "string")
          return;
        var C;
        if (typeof m == "function")
          C = m.propTypes;
        else if (typeof m == "object" && (m.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        m.$$typeof === f))
          C = m.propTypes;
        else
          return;
        if (C) {
          var T = Q(m);
          At(C, a.props, "prop", T, a);
        } else if (m.PropTypes !== void 0 && !ct) {
          ct = !0;
          var M = Q(m);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", M || "Unknown");
        }
        typeof m.getDefaultProps == "function" && !m.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Jn(a) {
      {
        for (var m = Object.keys(a.props), C = 0; C < m.length; C++) {
          var T = m[C];
          if (T !== "children" && T !== "key") {
            $e(a), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", T), $e(null);
            break;
          }
        }
        a.ref !== null && ($e(a), w("Invalid attribute `ref` supplied to `React.Fragment`."), $e(null));
      }
    }
    function qt(a, m, C, T, M, W) {
      {
        var j = ae(a);
        if (!j) {
          var D = "";
          (a === void 0 || typeof a == "object" && a !== null && Object.keys(a).length === 0) && (D += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ce = Yn(M);
          ce ? D += ce : D += Bt();
          var Z;
          a === null ? Z = "null" : De(a) ? Z = "array" : a !== void 0 && a.$$typeof === t ? (Z = "<" + (Q(a.type) || "Unknown") + " />", D = " Did you accidentally export a JSX literal instead of a component?") : Z = typeof a, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Z, D);
        }
        var ee = Kn(a, m, C, M, W);
        if (ee == null)
          return ee;
        if (j) {
          var ve = m.children;
          if (ve !== void 0)
            if (T)
              if (De(ve)) {
                for (var Re = 0; Re < ve.length; Re++)
                  zt(ve[Re], a);
                Object.freeze && Object.freeze(ve);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              zt(ve, a);
        }
        return a === r ? Jn(ee) : Xn(ee), ee;
      }
    }
    function Zn(a, m, C) {
      return qt(a, m, C, !0);
    }
    function Qn(a, m, C) {
      return qt(a, m, C, !1);
    }
    var er = Qn, tr = Zn;
    fn.Fragment = r, fn.jsx = er, fn.jsxs = tr;
  }()), fn;
}
process.env.NODE_ENV === "production" ? xr.exports = yi() : xr.exports = bi();
var Ne = xr.exports;
const Yo = ({
  width: e = "25",
  height: t = "25",
  color: n = "currentColor"
}) => /* @__PURE__ */ Ne.jsx(
  "svg",
  {
    width: e,
    height: t,
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ Ne.jsx(
      "path",
      {
        d: "M14.0615 6.91846L8.06152 12.9185L14.0615 18.9185",
        stroke: n,
        strokeWidth: "2",
        strokeLinecap: "square",
        strokeLinejoin: "round"
      }
    )
  }
);
Yo.displayName = "ChevronLeftSmall";
const Nr = ({
  width: e = "25",
  height: t = "25",
  color: n = "currentColor"
}) => /* @__PURE__ */ Ne.jsx(
  "svg",
  {
    width: e,
    height: t,
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ Ne.jsx(
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
Nr.displayName = "RightNext";
const jr = ({
  width: e = "25",
  height: t = "25",
  color: n = "currentColor"
}) => /* @__PURE__ */ Ne.jsx(
  "svg",
  {
    width: e,
    height: t,
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ Ne.jsx(
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
jr.displayName = "SelectOpenDown";
const Ho = ({ width: e = "25", height: t = "25", color: n = "currentColor" }) => /* @__PURE__ */ Ne.jsx(
  "svg",
  {
    width: e,
    height: t,
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ Ne.jsx(
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
Ho.displayName = "EyeOff";
const Xo = ({ width: e = "25", height: t = "25", color: n = "currentColor" }) => /* @__PURE__ */ Ne.jsx(
  "svg",
  {
    width: e,
    height: t,
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ Ne.jsx(
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
Xo.displayName = "EyeOn";
const Lr = ({ width: e = "25", height: t = "25", color: n = "currentColor" }) => /* @__PURE__ */ Ne.jsx(
  "svg",
  {
    width: e,
    height: t,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ Ne.jsx(
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
Lr.displayName = "Check";
var ft = /* @__PURE__ */ ((e) => (e.Text = "text", e.Number = "number", e.Password = "password", e.Telephone = "tel", e.Email = "email", e))(ft || {}), wt = /* @__PURE__ */ ((e) => (e.Small = "small", e.Medium = "medium", e))(wt || {}), Ht = /* @__PURE__ */ ((e) => (e.Light = "light", e.Dark = "dark", e))(Ht || {});
const wi = Te.forwardRef((e, t) => {
  const I = e, {
    id: n,
    value: r,
    defaultValue: o,
    className: i,
    disabled: s,
    endIcon: c,
    startIcon: u,
    isError: l,
    isHint: d,
    helperText: f,
    placeholder: p,
    label: v,
    type: g,
    name: y,
    ariaLabel: b,
    autoComplete: x,
    size: w = wt.Medium,
    theme: S = Ht.Light,
    onBlur: E,
    onChange: h,
    onFocus: $,
    onKeyDown: R,
    onKeyUp: L,
    requiredSymbol: N
  } = I, ae = we(I, [
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
  ]), [ie, oe] = re(""), [Q, B] = re(!1), [te, V] = re(g), [ne, se] = Te.useState(!1), ge = (F) => {
    oe(F.target.value), h && h(F);
  }, P = (F) => {
    E && E(F);
  }, k = (F) => {
    $ && $(F);
  }, H = (F) => {
    R && R(F);
  }, G = (F) => {
    L && L(F);
  }, z = () => {
    se((F) => !F);
  }, X = (F) => {
    F.animationName === "onAutoFillStart" && B(!0);
  };
  return Ye(() => {
    (o || r) && oe(" ");
  }, [o, r]), de(() => {
    g === ft.Password && V(ne ? ft.Text : ft.Password);
  }, [ne, g]), de(() => {
    ie.length === 0 && B(!1);
  }, [ie]), /* @__PURE__ */ O.jsxs(
    "div",
    {
      className: J({
        Input: !0,
        "Input-without-heading ": !!v,
        [i || ""]: !!i
      }),
      children: [
        v && /* @__PURE__ */ O.jsxs(
          "label",
          {
            className: J({
              InputLabel: !0,
              "InputLabel-small": w === wt.Small
            }),
            htmlFor: n,
            children: [
              v,
              N && /* @__PURE__ */ O.jsx(
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
        /* @__PURE__ */ O.jsxs(
          "div",
          {
            className: J({
              "InputBase-root": !0,
              "Input-disabled": s,
              "InputBase-error": !!l,
              "InputBase-root-dark": S === Ht.Dark
            }),
            children: [
              g !== ft.Password && u && /* @__PURE__ */ O.jsx("div", { className: "InputBase-icon-start", children: u }),
              /* @__PURE__ */ O.jsxs(
                "div",
                {
                  className: J({
                    InputBaseInner: !0
                  }),
                  children: [
                    !v && /* @__PURE__ */ O.jsx(
                      "label",
                      {
                        style: {
                          zIndex: Q ? 1 : 0
                        },
                        className: J({
                          InputLabel: !0,
                          "InputLabel-medium-align-center": w === wt.Medium,
                          "InputLabel-small-align-center": w === wt.Small,
                          "InputLabel-position-fixed": ie.length > 0 || Q
                        }),
                        htmlFor: n,
                        children: p
                      }
                    ),
                    /* @__PURE__ */ O.jsx(
                      "input",
                      q({
                        defaultValue: !r && o ? o : void 0,
                        "aria-label": b,
                        autoComplete: x,
                        className: J({
                          "InputBase-input": !0,
                          "InputBase-input-dark": S === Ht.Dark,
                          "InputBase-input-small": w === wt.Small,
                          "InputBase-autofill-font": Q
                        }),
                        disabled: s,
                        name: y,
                        type: te,
                        id: n,
                        value: r,
                        onAnimationStart: X,
                        onChange: ge,
                        onBlur: P,
                        onFocus: k,
                        onKeyDown: H,
                        onKeyUp: G,
                        placeholder: v ? p : "",
                        ref: t
                      }, ae)
                    )
                  ]
                }
              ),
              g !== ft.Password && c && /* @__PURE__ */ O.jsx("div", { className: "InputBase-icon-end", children: c }),
              g === ft.Password && /* @__PURE__ */ O.jsx(
                "button",
                {
                  type: "button",
                  "aria-label": "toggle password visibility",
                  className: "InputBase-icon-end",
                  onClick: z,
                  children: ne ? /* @__PURE__ */ O.jsx(Xo, {}) : /* @__PURE__ */ O.jsx(Ho, {})
                }
              )
            ]
          }
        ),
        f && /* @__PURE__ */ O.jsx(
          "p",
          {
            className: J({
              "Input-helper-text": !0,
              "Input-hint-text": !!d,
              "Input-error-text": !!l,
              "Input-helper-text-dark": !l && S === Ht.Dark
            }),
            children: f
          }
        )
      ]
    }
  );
});
wi.displayName = "Input";
var Ae = /* @__PURE__ */ ((e) => (e.Light = "light", e.Dark = "dark", e.Green = "green", e))(Ae || {}), xt = /* @__PURE__ */ ((e) => (e.Small = "small", e.Medium = "medium", e.Large = "large", e))(xt || {});
const xi = Te.forwardRef((e, t) => {
  const {
    id: n,
    name: r,
    disabled: o,
    children: i,
    value: s,
    label: c,
    className: u,
    onChange: l,
    ariaLabel: d,
    error: f,
    theme: p = Ae.Light,
    size: v = xt.Medium
  } = e, [g, y] = re(!1), [b, x] = re(!1), [w, S] = re(o), E = ($) => {
    w || (y(!g), l && l(!g, $));
  }, h = ($) => {
    if (($.key === "Enter" || $.key === " ") && !w) {
      const R = {
        target: {
          ariaLabel: d,
          name: r
        }
      };
      y(!g), l && l(!g, R);
    }
  };
  return de(() => {
    S(o);
  }, [o]), de(() => {
    y(typeof s == "boolean" ? s : !1);
  }, [s]), de(() => {
    x(!!f);
  }, [f]), /* @__PURE__ */ O.jsx("div", { className: "Checkbox", children: /* @__PURE__ */ O.jsxs("label", { children: [
    /* @__PURE__ */ O.jsx(
      "div",
      {
        className: J({
          "Checkbox-checked": g,
          "Checkbox-dark-checked": g && p === Ae.Dark,
          "Checkbox-green-checked": g && p === Ae.Green,
          "Checkbox-unchecked": !g,
          "Checkbox-error": b,
          "Checkbox-disabled": w,
          "Checkbox-green-disabled": w && p === Ae.Green,
          "Checkbox-dark-disabled": w && p === Ae.Dark,
          "Checkbox-dark": p === Ae.Dark,
          "Checkbox-green": p === Ae.Green,
          [u || ""]: !!u
        }),
        children: /* @__PURE__ */ O.jsxs(
          "div",
          {
            className: J({
              "Checkbox-container": !0,
              "Checkbox-large": v === xt.Large,
              "Checkbox-medium": v === xt.Medium,
              "Checkbox-small": v === xt.Small
            }),
            role: "input",
            tabIndex: 0,
            onKeyDown: h,
            children: [
              /* @__PURE__ */ O.jsx(
                "input",
                {
                  ref: t,
                  id: n,
                  type: "checkbox",
                  onChange: E,
                  "aria-label": d,
                  tabIndex: -1,
                  disabled: w
                }
              ),
              g && !w && /* @__PURE__ */ O.jsx(Lr, {})
            ]
          }
        )
      }
    ),
    (c || i) && /* @__PURE__ */ O.jsx(
      "div",
      {
        className: J({
          "Checkbox-label": !0,
          "Checkbox-label-small": v === xt.Small,
          "Checkbox-label-dark": p === Ae.Dark,
          "Checkbox-label-green": p === Ae.Green,
          "Checkbox-label-disabled": w,
          "Checkbox-label-dark-disabled": w && p === Ae.Dark,
          "Checkbox-label-green-disabled": w && p === Ae.Green
        }),
        children: c || i
      }
    )
  ] }) });
});
xi.displayName = "Checkbox";
var We = /* @__PURE__ */ ((e) => (e.Light = "light", e.Dark = "dark", e.Green = "green", e))(We || {}), Ke = /* @__PURE__ */ ((e) => (e.Small = "small", e.Medium = "medium", e.Large = "large", e))(Ke || {});
const Ci = Te.forwardRef((e, t) => {
  const {
    id: n,
    name: r,
    className: o,
    checked: i,
    disabled: s,
    ariaLabel: c,
    label: u,
    theme: l = We.Light,
    size: d = Ke.Medium,
    onChange: f
  } = e, [p, v] = re(!1), [g, y] = re(s), b = (w) => {
    g || (v(!p), f && f(!p, w));
  }, x = (w) => {
    if ((w.key === "Enter" || w.key === " ") && !g) {
      const S = {
        target: {
          ariaLabel: c,
          name: r
        }
      };
      v(!p), f && f(!p, S);
    }
  };
  return de(() => {
    y(s);
  }, [s]), de(() => {
    v(typeof i == "boolean" ? i : !1);
  }, [i]), /* @__PURE__ */ O.jsx("div", { className: "Switch", children: /* @__PURE__ */ O.jsxs("label", { children: [
    /* @__PURE__ */ O.jsxs(
      "div",
      {
        className: J({
          "Switch-light": l === We.Light,
          "Switch-dark": l === We.Dark,
          "Switch-green": l === We.Green,
          "Switch-large": d === Ke.Large,
          "Switch-medium": d === Ke.Medium,
          "Switch-small": d === Ke.Small,
          "Switch-light-active": p && l === We.Light,
          "Switch-dark-active": p && l === We.Dark,
          "Switch-green-active": p && l === We.Green,
          "Switch-large-active": p && d === Ke.Large,
          "Switch-medium-active": p && d === Ke.Medium,
          "Switch-small-active": p && d === Ke.Small,
          "Switch-disabled": g,
          [o || ""]: !!o
        }),
        tabIndex: 0,
        role: "input",
        onKeyDown: x,
        children: [
          /* @__PURE__ */ O.jsx(
            "input",
            {
              ref: t,
              "aria-label": c,
              tabIndex: -1,
              type: "checkbox",
              name: r,
              id: n,
              onChange: b
            }
          ),
          /* @__PURE__ */ O.jsx(
            "div",
            {
              className: J({
                "Switch-ellipse": !0
              })
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ O.jsx(
      "div",
      {
        className: J({
          "Switch-label": !0,
          "Switch-label-small": d === Ke.Small,
          "Switch-label-dark": l === We.Dark,
          "Switch-label-green": l === We.Green
        }),
        children: u
      }
    )
  ] }) });
});
Ci.displayName = "Switch";
var Cr = /* @__PURE__ */ ((e) => (e.Large = "large", e.Small = "small", e))(Cr || {});
const sl = (e) => {
  var h;
  const {
    className: t,
    size: n = Cr.Large,
    tabs: r,
    gap: o,
    activeTab: i,
    activeColor: s,
    tabMarginBottom: c = 16
  } = e, [u, l] = re((h = r[0]) == null ? void 0 : h.id), [d, f] = re(6), [p, v] = re(0), [g, y] = re("none"), [b, x] = re(0), w = vt(() => r.find(($) => $.id === u), [u, r]), S = ye(new Array(r.length)), E = ($, R, L) => {
    R !== u && (y("left 200ms linear, width 200ms linear"), f($.currentTarget.offsetLeft), v($.currentTarget.offsetWidth), l(R), L && L(R));
  };
  return Ye(() => {
    if (i) {
      const $ = r.findIndex((R) => R.id === i);
      x($), l(i);
    }
  }, [i, r]), Ye(() => {
    var L, N;
    const $ = (L = S.current[b]) == null ? void 0 : L.offsetWidth, R = (N = S.current[b]) == null ? void 0 : N.offsetLeft;
    v($), f(R);
  }, [b]), /* @__PURE__ */ O.jsxs("div", { className: "Tabs", children: [
    /* @__PURE__ */ O.jsxs(
      "div",
      {
        style: { gap: o },
        className: J({
          "Tabs-base": !0,
          [t || ""]: !!t
        }),
        children: [
          r == null ? void 0 : r.map(($, R) => /* @__PURE__ */ O.jsx(
            "button",
            {
              ref: (L) => S.current[R] = L,
              "aria-label": $.label,
              disabled: $.disabled,
              className: J({
                "Tab-root": !0,
                "Tab-root-active": u === $.id,
                "Tab-root-small": n === Cr.Small
              }),
              onClick: (L) => E(L, $.id, $.onClick),
              children: /* @__PURE__ */ O.jsx(
                "div",
                {
                  style: { marginBottom: c },
                  className: J({
                    "Tab-label": !0
                  }),
                  children: $.label
                }
              )
            },
            $.id
          )),
          /* @__PURE__ */ O.jsx(
            "div",
            {
              style: {
                left: d,
                width: p,
                transition: g,
                backgroundColor: s
              },
              className: "Tab-active-line"
            }
          )
        ]
      }
    ),
    w && w.content && /* @__PURE__ */ O.jsx("div", { className: "Tab-content", children: w.content })
  ] });
};
const Ei = Te.forwardRef((e, t) => {
  const {
    className: n,
    color: r,
    ariaLabel: o,
    content: i,
    header: s,
    contentMarginTop: c = 0,
    isOpen: u,
    onChange: l
  } = e, [d, f] = re(u), p = ye(null), v = (b, x) => {
    const w = b.scrollHeight;
    b.style.height = (x ? w : 0) + "px";
  }, g = () => {
    f(!d), l && l(!d), p.current && v(p.current, !d);
  }, y = (b) => {
    (b.key === "Enter" || b.key === " ") && (f(!d), l && l(!d), p.current && v(p.current, !d));
  };
  return Ye(() => {
    const b = typeof u == "boolean" ? u : !1;
    p.current && v(p.current, b), f(b);
  }, [u]), /* @__PURE__ */ O.jsxs(
    "div",
    {
      className: J({
        Accordion: !0,
        [n || ""]: !!n
      }),
      children: [
        /* @__PURE__ */ O.jsxs(
          "div",
          {
            ref: t,
            tabIndex: 0,
            className: "Accordion-heading",
            role: "button",
            "aria-expanded": "true",
            "aria-label": o,
            onClick: g,
            onKeyDown: y,
            children: [
              /* @__PURE__ */ O.jsx("div", { style: { color: r }, className: "Accordion-heading-label", children: s }),
              /* @__PURE__ */ O.jsx(
                "div",
                {
                  className: J({
                    "Accordion-heading-arrow": !0,
                    "Accordion-heading-arrow-up": d
                  }),
                  children: /* @__PURE__ */ O.jsx(jr, { width: "24", height: "24", color: r })
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ O.jsx(
          "div",
          {
            style: { marginTop: c },
            ref: p,
            className: J({
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
Ei.displayName = "Accordion";
var bn = /* @__PURE__ */ ((e) => (e.Large = "large", e.Medium = "medium", e))(bn || {});
const cl = (e) => {
  var f;
  const { className: t, size: n = bn.Medium, tags: r, gap: o, activeTag: i, activeColor: s } = e, [c, u] = re((f = r[0]) == null ? void 0 : f.id), l = vt(() => r.find((p) => p.id === c), [c, r]), d = (p, v) => {
    u(p), v && v(p);
  };
  return Ye(() => {
    i && u(i);
  }, [i]), /* @__PURE__ */ O.jsxs("div", { className: "Tags", children: [
    /* @__PURE__ */ O.jsx(
      "div",
      {
        style: { gap: o },
        className: J({
          "Tags-base": !0,
          [t || ""]: !!t
        }),
        children: r == null ? void 0 : r.map((p) => /* @__PURE__ */ O.jsx(
          "button",
          {
            "aria-label": p.label,
            id: p.id,
            disabled: p.disabled,
            style: { backgroundColor: c === p.id ? s : "" },
            className: J({
              Tag: !0,
              "Tag-medium": n === bn.Medium,
              "Tag-large": n === bn.Large,
              "Tag-active": c === p.id,
              [t || ""]: !!t
            }),
            onClick: () => d(p.id, p.onClick),
            children: /* @__PURE__ */ O.jsxs("div", { className: "Tag-label", children: [
              p.startIcon && /* @__PURE__ */ O.jsx("span", { className: "Tag-icon-left", children: p.startIcon }),
              p.label,
              p.endIcon && /* @__PURE__ */ O.jsx("span", { className: "Tag-icon-right", children: p.endIcon })
            ] })
          },
          p.id
        ))
      }
    ),
    l && l.content && /* @__PURE__ */ O.jsx("div", { className: "Tag-content", children: l.content })
  ] });
};
var Xt = /* @__PURE__ */ ((e) => (e.Large = "large", e.Medium = "medium", e))(Xt || {}), wn = /* @__PURE__ */ ((e) => (e.Round = "round", e.Square = "square", e))(wn || {});
const ul = (e) => {
  var $;
  const {
    className: t,
    size: n = Xt.Medium,
    variant: r = wn.Round,
    tags: o,
    gap: i,
    activeTag: s,
    activeColor: c,
    backgroundColor: u
  } = e, [l, d] = re(($ = o[0]) == null ? void 0 : $.id), [f, p] = re(6), [v, g] = re(0), [y, b] = re("none"), [x, w] = re(0), S = vt(() => o.find((R) => R.id === l), [l, o]), E = ye(new Array(o.length)), h = (R, L, N) => {
    L !== l && (b("left 200ms linear, width 200ms linear"), p(R.currentTarget.offsetLeft), g(R.currentTarget.offsetWidth), d(L), N && N(L));
  };
  return Ye(() => {
    if (s) {
      const R = o.findIndex((L) => L.id === s);
      w(R), d(s);
    }
  }, [s, o]), Ye(() => {
    var N, ae;
    const R = (N = E.current[x]) == null ? void 0 : N.offsetWidth, L = (ae = E.current[x]) == null ? void 0 : ae.offsetLeft;
    g(R), p(L);
  }, [x]), /* @__PURE__ */ O.jsxs("div", { className: "SwitchTags", children: [
    /* @__PURE__ */ O.jsxs(
      "div",
      {
        style: { gap: i, backgroundColor: u },
        className: J({
          "SwitchTags-base": !0,
          "SwitchTags-base-round": r === wn.Round,
          "SwitchTags-base-square": r === wn.Square,
          [t || ""]: !!t
        }),
        children: [
          o == null ? void 0 : o.map((R, L) => /* @__PURE__ */ O.jsxs(
            "button",
            {
              ref: (N) => E.current[L] = N,
              "aria-label": R.label,
              id: R.id,
              disabled: R.disabled,
              className: J({
                SwitchTag: !0,
                "SwitchTag-medium": n === Xt.Medium,
                "SwitchTag-large": n === Xt.Large,
                "SwitchTag-active": l === R.id,
                [t || ""]: !!t
              }),
              onClick: (N) => h(N, R.id, R.onClick),
              children: [
                R.startIcon && /* @__PURE__ */ O.jsx("span", { className: "SwitchTag-icon-left", children: R.startIcon }),
                R.label,
                R.endIcon && /* @__PURE__ */ O.jsx("span", { className: "SwitchTag-icon-right", children: R.endIcon })
              ]
            },
            R.id
          )),
          /* @__PURE__ */ O.jsx(
            "div",
            {
              style: {
                left: f,
                width: v,
                transition: y,
                backgroundColor: c
              },
              className: J({
                ActiveTab: !0,
                "ActiveTab-small": n === Xt.Medium
              })
            }
          )
        ]
      }
    ),
    S && S.content && /* @__PURE__ */ O.jsx("div", { className: "Tag-content", children: S.content })
  ] });
};
const Si = Te.forwardRef((e, t) => {
  const { id: n, ariaLabel: r, children: o, onClick: i } = e, s = () => {
    i && i();
  };
  return /* @__PURE__ */ O.jsx(
    "button",
    {
      type: "button",
      onClick: s,
      ref: t,
      "aria-label": r,
      id: n,
      className: "IconButton",
      tabIndex: -1,
      children: /* @__PURE__ */ O.jsx("div", { style: { display: "flex" }, tabIndex: 0, children: o })
    }
  );
});
Si.displayName = "IconButton";
function Ce() {
  return Ce = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Ce.apply(this, arguments);
}
function pt(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function Oi(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function Jo(...e) {
  return (t) => e.forEach(
    (n) => Oi(n, t)
  );
}
function ht(...e) {
  return dt(Jo(...e), e);
}
function Zo(e, t = []) {
  let n = [];
  function r(i, s) {
    const c = /* @__PURE__ */ br(s), u = n.length;
    n = [
      ...n,
      s
    ];
    function l(f) {
      const x = f, { scope: p, children: v } = x, g = we(x, ["scope", "children"]), y = (p == null ? void 0 : p[e][u]) || c, b = vt(
        () => g,
        Object.values(g)
      );
      return /* @__PURE__ */ me(y.Provider, {
        value: b
      }, v);
    }
    function d(f, p) {
      const v = (p == null ? void 0 : p[e][u]) || c, g = qo(v);
      if (g)
        return g;
      if (s !== void 0)
        return s;
      throw new Error(`\`${f}\` must be used within \`${i}\``);
    }
    return l.displayName = i + "Provider", [
      l,
      d
    ];
  }
  const o = () => {
    const i = n.map((s) => /* @__PURE__ */ br(s));
    return function(c) {
      const u = (c == null ? void 0 : c[e]) || i;
      return vt(
        () => ({
          [`__scope${e}`]: fe(q({}, c), {
            [e]: u
          })
        }),
        [
          c,
          u
        ]
      );
    };
  };
  return o.scopeName = e, [
    r,
    Pi(o, ...t)
  ];
}
function Pi(...e) {
  const t = e[0];
  if (e.length === 1)
    return t;
  const n = () => {
    const r = e.map(
      (o) => ({
        useScope: o(),
        scopeName: o.scopeName
      })
    );
    return function(i) {
      const s = r.reduce((c, { useScope: u, scopeName: l }) => {
        const f = u(i)[`__scope${l}`];
        return q(q({}, c), f);
      }, {});
      return vt(
        () => ({
          [`__scope${t.scopeName}`]: s
        }),
        [
          s
        ]
      );
    };
  };
  return n.scopeName = t.scopeName, n;
}
const Fr = /* @__PURE__ */ Le((e, t) => {
  const s = e, { children: n } = s, r = we(s, ["children"]), o = St.toArray(n), i = o.find($i);
  if (i) {
    const c = i.props.children, u = o.map((l) => l === i ? St.count(c) > 1 ? St.only(null) : /* @__PURE__ */ Qt(c) ? c.props.children : null : l);
    return /* @__PURE__ */ me(Er, Ce({}, r, {
      ref: t
    }), /* @__PURE__ */ Qt(c) ? /* @__PURE__ */ Ar(c, void 0, u) : null);
  }
  return /* @__PURE__ */ me(Er, Ce({}, r, {
    ref: t
  }), n);
});
Fr.displayName = "Slot";
const Er = /* @__PURE__ */ Le((e, t) => {
  const o = e, { children: n } = o, r = we(o, ["children"]);
  return /* @__PURE__ */ Qt(n) ? /* @__PURE__ */ Ar(n, fe(q({}, Ri(r, n.props)), {
    ref: t ? Jo(t, n.ref) : n.ref
  })) : St.count(n) > 1 ? St.only(null) : null;
});
Er.displayName = "SlotClone";
const Ti = ({ children: e }) => /* @__PURE__ */ me(Vo, null, e);
function $i(e) {
  return /* @__PURE__ */ Qt(e) && e.type === Ti;
}
function Ri(e, t) {
  const n = q({}, t);
  for (const r in t) {
    const o = e[r], i = t[r];
    /^on[A-Z]/.test(r) ? o && i ? n[r] = (...c) => {
      i(...c), o(...c);
    } : o && (n[r] = o) : r === "style" ? n[r] = q(q({}, o), i) : r === "className" && (n[r] = [
      o,
      i
    ].filter(Boolean).join(" "));
  }
  return q(q({}, e), n);
}
const ki = [
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
], sn = ki.reduce((e, t) => {
  const n = /* @__PURE__ */ Le((r, o) => {
    const u = r, { asChild: i } = u, s = we(u, ["asChild"]), c = i ? Fr : t;
    return de(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ me(c, Ce({}, s, {
      ref: o
    }));
  });
  return n.displayName = `Primitive.${t}`, fe(q({}, e), {
    [t]: n
  });
}, {});
function _i(e, t) {
  e && Go(
    () => e.dispatchEvent(t)
  );
}
function tt(e) {
  const t = ye(e);
  return de(() => {
    t.current = e;
  }), vt(
    () => (...n) => {
      var r;
      return (r = t.current) === null || r === void 0 ? void 0 : r.call(t, ...n);
    },
    []
  );
}
function Di(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = tt(e);
  de(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r), () => t.removeEventListener("keydown", r);
  }, [
    n,
    t
  ]);
}
const Sr = "dismissableLayer.update", Ai = "dismissableLayer.pointerDownOutside", Ni = "dismissableLayer.focusOutside";
let co;
const ji = /* @__PURE__ */ br({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Li = /* @__PURE__ */ Le((e, t) => {
  var n;
  const L = e, { disableOutsidePointerEvents: r = !1, onEscapeKeyDown: o, onPointerDownOutside: i, onFocusOutside: s, onInteractOutside: c, onDismiss: u } = L, l = we(L, ["disableOutsidePointerEvents", "onEscapeKeyDown", "onPointerDownOutside", "onFocusOutside", "onInteractOutside", "onDismiss"]), d = qo(ji), [f, p] = re(null), v = (n = f == null ? void 0 : f.ownerDocument) !== null && n !== void 0 ? n : globalThis == null ? void 0 : globalThis.document, [, g] = re({}), y = ht(
    t,
    (N) => p(N)
  ), b = Array.from(d.layers), [x] = [
    ...d.layersWithOutsidePointerEventsDisabled
  ].slice(-1), w = b.indexOf(x), S = f ? b.indexOf(f) : -1, E = d.layersWithOutsidePointerEventsDisabled.size > 0, h = S >= w, $ = Fi((N) => {
    const ae = N.target, ie = [
      ...d.branches
    ].some(
      (oe) => oe.contains(ae)
    );
    !h || ie || (i == null || i(N), c == null || c(N), N.defaultPrevented || u == null || u());
  }, v), R = Mi((N) => {
    const ae = N.target;
    [
      ...d.branches
    ].some(
      (oe) => oe.contains(ae)
    ) || (s == null || s(N), c == null || c(N), N.defaultPrevented || u == null || u());
  }, v);
  return Di((N) => {
    S === d.layers.size - 1 && (o == null || o(N), !N.defaultPrevented && u && (N.preventDefault(), u()));
  }, v), de(() => {
    if (f)
      return r && (d.layersWithOutsidePointerEventsDisabled.size === 0 && (co = v.body.style.pointerEvents, v.body.style.pointerEvents = "none"), d.layersWithOutsidePointerEventsDisabled.add(f)), d.layers.add(f), uo(), () => {
        r && d.layersWithOutsidePointerEventsDisabled.size === 1 && (v.body.style.pointerEvents = co);
      };
  }, [
    f,
    v,
    r,
    d
  ]), de(() => () => {
    f && (d.layers.delete(f), d.layersWithOutsidePointerEventsDisabled.delete(f), uo());
  }, [
    f,
    d
  ]), de(() => {
    const N = () => g({});
    return document.addEventListener(Sr, N), () => document.removeEventListener(Sr, N);
  }, []), /* @__PURE__ */ me(sn.div, Ce({}, l, {
    ref: y,
    style: q({
      pointerEvents: E ? h ? "auto" : "none" : void 0
    }, e.style),
    onFocusCapture: pt(e.onFocusCapture, R.onFocusCapture),
    onBlurCapture: pt(e.onBlurCapture, R.onBlurCapture),
    onPointerDownCapture: pt(e.onPointerDownCapture, $.onPointerDownCapture)
  }));
});
function Fi(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = tt(e), r = ye(!1), o = ye(() => {
  });
  return de(() => {
    const i = (c) => {
      if (c.target && !r.current) {
        let l = function() {
          Qo(Ai, n, u, {
            discrete: !0
          });
        };
        const u = {
          originalEvent: c
        };
        c.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = l, t.addEventListener("click", o.current, {
          once: !0
        })) : l();
      } else
        t.removeEventListener("click", o.current);
      r.current = !1;
    }, s = window.setTimeout(() => {
      t.addEventListener("pointerdown", i);
    }, 0);
    return () => {
      window.clearTimeout(s), t.removeEventListener("pointerdown", i), t.removeEventListener("click", o.current);
    };
  }, [
    t,
    n
  ]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function Mi(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = tt(e), r = ye(!1);
  return de(() => {
    const o = (i) => {
      i.target && !r.current && Qo(Ni, n, {
        originalEvent: i
      }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [
    t,
    n
  ]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function uo() {
  const e = new CustomEvent(Sr);
  document.dispatchEvent(e);
}
function Qo(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, i = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, {
    once: !0
  }), r ? _i(o, i) : o.dispatchEvent(i);
}
let nr = 0;
function Ii() {
  de(() => {
    var e, t;
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (e = n[0]) !== null && e !== void 0 ? e : lo()), document.body.insertAdjacentElement("beforeend", (t = n[1]) !== null && t !== void 0 ? t : lo()), nr++, () => {
      nr === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(
        (r) => r.remove()
      ), nr--;
    };
  }, []);
}
function lo() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
const rr = "focusScope.autoFocusOnMount", or = "focusScope.autoFocusOnUnmount", fo = {
  bubbles: !1,
  cancelable: !0
}, Bi = /* @__PURE__ */ Le((e, t) => {
  const y = e, { loop: n = !1, trapped: r = !1, onMountAutoFocus: o, onUnmountAutoFocus: i } = y, s = we(y, ["loop", "trapped", "onMountAutoFocus", "onUnmountAutoFocus"]), [c, u] = re(null), l = tt(o), d = tt(i), f = ye(null), p = ht(
    t,
    (b) => u(b)
  ), v = ye({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  de(() => {
    if (r) {
      let b = function(E) {
        if (v.paused || !c)
          return;
        const h = E.target;
        c.contains(h) ? f.current = h : et(f.current, {
          select: !0
        });
      }, x = function(E) {
        if (v.paused || !c)
          return;
        const h = E.relatedTarget;
        h !== null && (c.contains(h) || et(f.current, {
          select: !0
        }));
      }, w = function(E) {
        if (document.activeElement === document.body)
          for (const $ of E)
            $.removedNodes.length > 0 && et(c);
      };
      document.addEventListener("focusin", b), document.addEventListener("focusout", x);
      const S = new MutationObserver(w);
      return c && S.observe(c, {
        childList: !0,
        subtree: !0
      }), () => {
        document.removeEventListener("focusin", b), document.removeEventListener("focusout", x), S.disconnect();
      };
    }
  }, [
    r,
    c,
    v.paused
  ]), de(() => {
    if (c) {
      vo.add(v);
      const b = document.activeElement;
      if (!c.contains(b)) {
        const w = new CustomEvent(rr, fo);
        c.addEventListener(rr, l), c.dispatchEvent(w), w.defaultPrevented || (Wi(Gi(ea(c)), {
          select: !0
        }), document.activeElement === b && et(c));
      }
      return () => {
        c.removeEventListener(rr, l), setTimeout(() => {
          const w = new CustomEvent(or, fo);
          c.addEventListener(or, d), c.dispatchEvent(w), w.defaultPrevented || et(b != null ? b : document.body, {
            select: !0
          }), c.removeEventListener(or, d), vo.remove(v);
        }, 0);
      };
    }
  }, [
    c,
    l,
    d,
    v
  ]);
  const g = dt((b) => {
    if (!n && !r || v.paused)
      return;
    const x = b.key === "Tab" && !b.altKey && !b.ctrlKey && !b.metaKey, w = document.activeElement;
    if (x && w) {
      const S = b.currentTarget, [E, h] = Ui(S);
      E && h ? !b.shiftKey && w === h ? (b.preventDefault(), n && et(E, {
        select: !0
      })) : b.shiftKey && w === E && (b.preventDefault(), n && et(h, {
        select: !0
      })) : w === S && b.preventDefault();
    }
  }, [
    n,
    r,
    v.paused
  ]);
  return /* @__PURE__ */ me(sn.div, Ce({
    tabIndex: -1
  }, s, {
    ref: p,
    onKeyDown: g
  }));
});
function Wi(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (et(r, {
      select: t
    }), document.activeElement !== n)
      return;
}
function Ui(e) {
  const t = ea(e), n = po(t, e), r = po(t.reverse(), e);
  return [
    n,
    r
  ];
}
function ea(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}
function po(e, t) {
  for (const n of e)
    if (!zi(n, {
      upTo: t
    }))
      return n;
}
function zi(e, { upTo: t }) {
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
function qi(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function et(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== n && qi(e) && t && e.select();
  }
}
const vo = Vi();
function Vi() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = mo(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = mo(e, t), (n = e[0]) === null || n === void 0 || n.resume();
    }
  };
}
function mo(e, t) {
  const n = [
    ...e
  ], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function Gi(e) {
  return e.filter(
    (t) => t.tagName !== "A"
  );
}
const Rt = globalThis != null && globalThis.document ? Ye : () => {
}, Ki = A["useId".toString()] || (() => {
});
let Yi = 0;
function Hi(e) {
  const [t, n] = A.useState(Ki());
  return Rt(() => {
    e || n(
      (r) => r != null ? r : String(Yi++)
    );
  }, [
    e
  ]), e || (t ? `radix-${t}` : "");
}
const Xi = ["top", "right", "bottom", "left"], nt = Math.min, ke = Math.max, Tn = Math.round, dn = Math.floor, rt = (e) => ({
  x: e,
  y: e
}), Ji = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Zi = {
  start: "end",
  end: "start"
};
function Or(e, t, n) {
  return ke(e, nt(t, n));
}
function He(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Xe(e) {
  return e.split("-")[0];
}
function _t(e) {
  return e.split("-")[1];
}
function Mr(e) {
  return e === "x" ? "y" : "x";
}
function Ir(e) {
  return e === "y" ? "height" : "width";
}
function Dt(e) {
  return ["top", "bottom"].includes(Xe(e)) ? "y" : "x";
}
function Br(e) {
  return Mr(Dt(e));
}
function Qi(e, t, n) {
  n === void 0 && (n = !1);
  const r = _t(e), o = Br(e), i = Ir(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = $n(s)), [s, $n(s)];
}
function es(e) {
  const t = $n(e);
  return [Pr(e), t, Pr(t)];
}
function Pr(e) {
  return e.replace(/start|end/g, (t) => Zi[t]);
}
function ts(e, t, n) {
  const r = ["left", "right"], o = ["right", "left"], i = ["top", "bottom"], s = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? o : r : t ? r : o;
    case "left":
    case "right":
      return t ? i : s;
    default:
      return [];
  }
}
function ns(e, t, n, r) {
  const o = _t(e);
  let i = ts(Xe(e), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), t && (i = i.concat(i.map(Pr)))), i;
}
function $n(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Ji[t]);
}
function rs(e) {
  return q({
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }, e);
}
function ta(e) {
  return typeof e != "number" ? rs(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Rn(e) {
  return fe(q({}, e), {
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function ho(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = Dt(t), s = Br(t), c = Ir(s), u = Xe(t), l = i === "y", d = r.x + r.width / 2 - o.width / 2, f = r.y + r.height / 2 - o.height / 2, p = r[c] / 2 - o[c] / 2;
  let v;
  switch (u) {
    case "top":
      v = {
        x: d,
        y: r.y - o.height
      };
      break;
    case "bottom":
      v = {
        x: d,
        y: r.y + r.height
      };
      break;
    case "right":
      v = {
        x: r.x + r.width,
        y: f
      };
      break;
    case "left":
      v = {
        x: r.x - o.width,
        y: f
      };
      break;
    default:
      v = {
        x: r.x,
        y: r.y
      };
  }
  switch (_t(t)) {
    case "start":
      v[s] -= p * (n && l ? -1 : 1);
      break;
    case "end":
      v[s] += p * (n && l ? -1 : 1);
      break;
  }
  return v;
}
const os = (e, t, n) => Ie(void 0, null, function* () {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: i = [],
    platform: s
  } = n, c = i.filter(Boolean), u = yield s.isRTL == null ? void 0 : s.isRTL(t);
  let l = yield s.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: d,
    y: f
  } = ho(l, r, u), p = r, v = {}, g = 0;
  for (let y = 0; y < c.length; y++) {
    const {
      name: b,
      fn: x
    } = c[y], {
      x: w,
      y: S,
      data: E,
      reset: h
    } = yield x({
      x: d,
      y: f,
      initialPlacement: r,
      placement: p,
      strategy: o,
      middlewareData: v,
      rects: l,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    if (d = w != null ? w : d, f = S != null ? S : f, v = fe(q({}, v), {
      [b]: q(q({}, v[b]), E)
    }), h && g <= 50) {
      g++, typeof h == "object" && (h.placement && (p = h.placement), h.rects && (l = h.rects === !0 ? yield s.getElementRects({
        reference: e,
        floating: t,
        strategy: o
      }) : h.rects), {
        x: d,
        y: f
      } = ho(l, p, u)), y = -1;
      continue;
    }
  }
  return {
    x: d,
    y: f,
    placement: p,
    strategy: o,
    middlewareData: v
  };
});
function en(e, t) {
  return Ie(this, null, function* () {
    var n;
    t === void 0 && (t = {});
    const {
      x: r,
      y: o,
      platform: i,
      rects: s,
      elements: c,
      strategy: u
    } = e, {
      boundary: l = "clippingAncestors",
      rootBoundary: d = "viewport",
      elementContext: f = "floating",
      altBoundary: p = !1,
      padding: v = 0
    } = He(t, e), g = ta(v), b = c[p ? f === "floating" ? "reference" : "floating" : f], x = Rn(yield i.getClippingRect({
      element: (n = yield i.isElement == null ? void 0 : i.isElement(b)) == null || n ? b : b.contextElement || (yield i.getDocumentElement == null ? void 0 : i.getDocumentElement(c.floating)),
      boundary: l,
      rootBoundary: d,
      strategy: u
    })), w = f === "floating" ? fe(q({}, s.floating), {
      x: r,
      y: o
    }) : s.reference, S = yield i.getOffsetParent == null ? void 0 : i.getOffsetParent(c.floating), E = (yield i.isElement == null ? void 0 : i.isElement(S)) ? (yield i.getScale == null ? void 0 : i.getScale(S)) || {
      x: 1,
      y: 1
    } : {
      x: 1,
      y: 1
    }, h = Rn(i.convertOffsetParentRelativeRectToViewportRelativeRect ? yield i.convertOffsetParentRelativeRectToViewportRelativeRect({
      rect: w,
      offsetParent: S,
      strategy: u
    }) : w);
    return {
      top: (x.top - h.top + g.top) / E.y,
      bottom: (h.bottom - x.bottom + g.bottom) / E.y,
      left: (x.left - h.left + g.left) / E.x,
      right: (h.right - x.right + g.right) / E.x
    };
  });
}
const go = (e) => ({
  name: "arrow",
  options: e,
  fn(n) {
    return Ie(this, null, function* () {
      const {
        x: r,
        y: o,
        placement: i,
        rects: s,
        platform: c,
        elements: u,
        middlewareData: l
      } = n, {
        element: d,
        padding: f = 0
      } = He(e, n) || {};
      if (d == null)
        return {};
      const p = ta(f), v = {
        x: r,
        y: o
      }, g = Br(i), y = Ir(g), b = yield c.getDimensions(d), x = g === "y", w = x ? "top" : "left", S = x ? "bottom" : "right", E = x ? "clientHeight" : "clientWidth", h = s.reference[y] + s.reference[g] - v[g] - s.floating[y], $ = v[g] - s.reference[g], R = yield c.getOffsetParent == null ? void 0 : c.getOffsetParent(d);
      let L = R ? R[E] : 0;
      (!L || !(yield c.isElement == null ? void 0 : c.isElement(R))) && (L = u.floating[E] || s.floating[y]);
      const N = h / 2 - $ / 2, ae = L / 2 - b[y] / 2 - 1, ie = nt(p[w], ae), oe = nt(p[S], ae), Q = ie, B = L - b[y] - oe, te = L / 2 - b[y] / 2 + N, V = Or(Q, te, B), ne = !l.arrow && _t(i) != null && te != V && s.reference[y] / 2 - (te < Q ? ie : oe) - b[y] / 2 < 0, se = ne ? te < Q ? te - Q : te - B : 0;
      return {
        [g]: v[g] + se,
        data: q({
          [g]: V,
          centerOffset: te - V - se
        }, ne && {
          alignmentOffset: se
        }),
        reset: ne
      };
    });
  }
}), as = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    fn(n) {
      return Ie(this, null, function* () {
        var r, o;
        const {
          placement: i,
          middlewareData: s,
          rects: c,
          initialPlacement: u,
          platform: l,
          elements: d
        } = n, Q = He(e, n), {
          mainAxis: f = !0,
          crossAxis: p = !0,
          fallbackPlacements: v,
          fallbackStrategy: g = "bestFit",
          fallbackAxisSideDirection: y = "none",
          flipAlignment: b = !0
        } = Q, x = we(Q, [
          "mainAxis",
          "crossAxis",
          "fallbackPlacements",
          "fallbackStrategy",
          "fallbackAxisSideDirection",
          "flipAlignment"
        ]);
        if ((r = s.arrow) != null && r.alignmentOffset)
          return {};
        const w = Xe(i), S = Xe(u) === u, E = yield l.isRTL == null ? void 0 : l.isRTL(d.floating), h = v || (S || !b ? [$n(u)] : es(u));
        !v && y !== "none" && h.push(...ns(u, b, y, E));
        const $ = [u, ...h], R = yield en(n, x), L = [];
        let N = ((o = s.flip) == null ? void 0 : o.overflows) || [];
        if (f && L.push(R[w]), p) {
          const B = Qi(i, c, E);
          L.push(R[B[0]], R[B[1]]);
        }
        if (N = [...N, {
          placement: i,
          overflows: L
        }], !L.every((B) => B <= 0)) {
          var ae, ie;
          const B = (((ae = s.flip) == null ? void 0 : ae.index) || 0) + 1, te = $[B];
          if (te)
            return {
              data: {
                index: B,
                overflows: N
              },
              reset: {
                placement: te
              }
            };
          let V = (ie = N.filter((ne) => ne.overflows[0] <= 0).sort((ne, se) => ne.overflows[1] - se.overflows[1])[0]) == null ? void 0 : ie.placement;
          if (!V)
            switch (g) {
              case "bestFit": {
                var oe;
                const ne = (oe = N.map((se) => [se.placement, se.overflows.filter((ge) => ge > 0).reduce((ge, P) => ge + P, 0)]).sort((se, ge) => se[1] - ge[1])[0]) == null ? void 0 : oe[0];
                ne && (V = ne);
                break;
              }
              case "initialPlacement":
                V = u;
                break;
            }
          if (i !== V)
            return {
              reset: {
                placement: V
              }
            };
        }
        return {};
      });
    }
  };
};
function yo(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function bo(e) {
  return Xi.some((t) => e[t] >= 0);
}
const is = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    fn(n) {
      return Ie(this, null, function* () {
        const {
          rects: r
        } = n, s = He(e, n), {
          strategy: o = "referenceHidden"
        } = s, i = we(s, [
          "strategy"
        ]);
        switch (o) {
          case "referenceHidden": {
            const c = yield en(n, fe(q({}, i), {
              elementContext: "reference"
            })), u = yo(c, r.reference);
            return {
              data: {
                referenceHiddenOffsets: u,
                referenceHidden: bo(u)
              }
            };
          }
          case "escaped": {
            const c = yield en(n, fe(q({}, i), {
              altBoundary: !0
            })), u = yo(c, r.floating);
            return {
              data: {
                escapedOffsets: u,
                escaped: bo(u)
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
function ss(e, t) {
  return Ie(this, null, function* () {
    const {
      placement: n,
      platform: r,
      elements: o
    } = e, i = yield r.isRTL == null ? void 0 : r.isRTL(o.floating), s = Xe(n), c = _t(n), u = Dt(n) === "y", l = ["left", "top"].includes(s) ? -1 : 1, d = i && u ? -1 : 1, f = He(t, e);
    let {
      mainAxis: p,
      crossAxis: v,
      alignmentAxis: g
    } = typeof f == "number" ? {
      mainAxis: f,
      crossAxis: 0,
      alignmentAxis: null
    } : q({
      mainAxis: 0,
      crossAxis: 0,
      alignmentAxis: null
    }, f);
    return c && typeof g == "number" && (v = c === "end" ? g * -1 : g), u ? {
      x: v * d,
      y: p * l
    } : {
      x: p * l,
      y: v * d
    };
  });
}
const cs = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    fn(n) {
      return Ie(this, null, function* () {
        var r, o;
        const {
          x: i,
          y: s,
          placement: c,
          middlewareData: u
        } = n, l = yield ss(n, e);
        return c === ((r = u.offset) == null ? void 0 : r.placement) && (o = u.arrow) != null && o.alignmentOffset ? {} : {
          x: i + l.x,
          y: s + l.y,
          data: fe(q({}, l), {
            placement: c
          })
        };
      });
    }
  };
}, us = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    fn(n) {
      return Ie(this, null, function* () {
        const {
          x: r,
          y: o,
          placement: i
        } = n, x = He(e, n), {
          mainAxis: s = !0,
          crossAxis: c = !1,
          limiter: u = {
            fn: (w) => {
              let {
                x: S,
                y: E
              } = w;
              return {
                x: S,
                y: E
              };
            }
          }
        } = x, l = we(x, [
          "mainAxis",
          "crossAxis",
          "limiter"
        ]), d = {
          x: r,
          y: o
        }, f = yield en(n, l), p = Dt(Xe(i)), v = Mr(p);
        let g = d[v], y = d[p];
        if (s) {
          const w = v === "y" ? "top" : "left", S = v === "y" ? "bottom" : "right", E = g + f[w], h = g - f[S];
          g = Or(E, g, h);
        }
        if (c) {
          const w = p === "y" ? "top" : "left", S = p === "y" ? "bottom" : "right", E = y + f[w], h = y - f[S];
          y = Or(E, y, h);
        }
        const b = u.fn(fe(q({}, n), {
          [v]: g,
          [p]: y
        }));
        return fe(q({}, b), {
          data: {
            x: b.x - r,
            y: b.y - o
          }
        });
      });
    }
  };
}, ls = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: r,
        placement: o,
        rects: i,
        middlewareData: s
      } = t, {
        offset: c = 0,
        mainAxis: u = !0,
        crossAxis: l = !0
      } = He(e, t), d = {
        x: n,
        y: r
      }, f = Dt(o), p = Mr(f);
      let v = d[p], g = d[f];
      const y = He(c, t), b = typeof y == "number" ? {
        mainAxis: y,
        crossAxis: 0
      } : q({
        mainAxis: 0,
        crossAxis: 0
      }, y);
      if (u) {
        const S = p === "y" ? "height" : "width", E = i.reference[p] - i.floating[S] + b.mainAxis, h = i.reference[p] + i.reference[S] - b.mainAxis;
        v < E ? v = E : v > h && (v = h);
      }
      if (l) {
        var x, w;
        const S = p === "y" ? "width" : "height", E = ["top", "left"].includes(Xe(o)), h = i.reference[f] - i.floating[S] + (E && ((x = s.offset) == null ? void 0 : x[f]) || 0) + (E ? 0 : b.crossAxis), $ = i.reference[f] + i.reference[S] + (E ? 0 : ((w = s.offset) == null ? void 0 : w[f]) || 0) - (E ? b.crossAxis : 0);
        g < h ? g = h : g > $ && (g = $);
      }
      return {
        [p]: v,
        [f]: g
      };
    }
  };
}, fs = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    fn(n) {
      return Ie(this, null, function* () {
        const {
          placement: r,
          rects: o,
          platform: i,
          elements: s
        } = n, R = He(e, n), {
          apply: c = () => {
          }
        } = R, u = we(R, [
          "apply"
        ]), l = yield en(n, u), d = Xe(r), f = _t(r), p = Dt(r) === "y", {
          width: v,
          height: g
        } = o.floating;
        let y, b;
        d === "top" || d === "bottom" ? (y = d, b = f === ((yield i.isRTL == null ? void 0 : i.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (b = d, y = f === "end" ? "top" : "bottom");
        const x = g - l[y], w = v - l[b], S = !n.middlewareData.shift;
        let E = x, h = w;
        if (p) {
          const L = v - l.left - l.right;
          h = f || S ? nt(w, L) : L;
        } else {
          const L = g - l.top - l.bottom;
          E = f || S ? nt(x, L) : L;
        }
        if (S && !f) {
          const L = ke(l.left, 0), N = ke(l.right, 0), ae = ke(l.top, 0), ie = ke(l.bottom, 0);
          p ? h = v - 2 * (L !== 0 || N !== 0 ? L + N : ke(l.left, l.right)) : E = g - 2 * (ae !== 0 || ie !== 0 ? ae + ie : ke(l.top, l.bottom));
        }
        yield c(fe(q({}, n), {
          availableWidth: h,
          availableHeight: E
        }));
        const $ = yield i.getDimensions(s.floating);
        return v !== $.width || g !== $.height ? {
          reset: {
            rects: !0
          }
        } : {};
      });
    }
  };
};
function ot(e) {
  return na(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function _e(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Ze(e) {
  var t;
  return (t = (na(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function na(e) {
  return e instanceof Node || e instanceof _e(e).Node;
}
function Je(e) {
  return e instanceof Element || e instanceof _e(e).Element;
}
function ze(e) {
  return e instanceof HTMLElement || e instanceof _e(e).HTMLElement;
}
function wo(e) {
  return typeof ShadowRoot == "undefined" ? !1 : e instanceof ShadowRoot || e instanceof _e(e).ShadowRoot;
}
function cn(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = je(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function ds(e) {
  return ["table", "td", "th"].includes(ot(e));
}
function Wr(e) {
  const t = Ur(), n = je(e);
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function ps(e) {
  let t = kt(e);
  for (; ze(t) && !Nn(t); ) {
    if (Wr(t))
      return t;
    t = kt(t);
  }
  return null;
}
function Ur() {
  return typeof CSS == "undefined" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Nn(e) {
  return ["html", "body", "#document"].includes(ot(e));
}
function je(e) {
  return _e(e).getComputedStyle(e);
}
function jn(e) {
  return Je(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  };
}
function kt(e) {
  if (ot(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    wo(e) && e.host || // Fallback.
    Ze(e)
  );
  return wo(t) ? t.host : t;
}
function ra(e) {
  const t = kt(e);
  return Nn(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : ze(t) && cn(t) ? t : ra(t);
}
function tn(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = ra(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = _e(o);
  return i ? t.concat(s, s.visualViewport || [], cn(o) ? o : [], s.frameElement && n ? tn(s.frameElement) : []) : t.concat(o, tn(o, [], n));
}
function oa(e) {
  const t = je(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = ze(e), i = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, c = Tn(n) !== i || Tn(r) !== s;
  return c && (n = i, r = s), {
    width: n,
    height: r,
    $: c
  };
}
function zr(e) {
  return Je(e) ? e : e.contextElement;
}
function Ot(e) {
  const t = zr(e);
  if (!ze(t))
    return rt(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = oa(t);
  let s = (i ? Tn(n.width) : n.width) / r, c = (i ? Tn(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: s,
    y: c
  };
}
const vs = /* @__PURE__ */ rt(0);
function aa(e) {
  const t = _e(e);
  return !Ur() || !t.visualViewport ? vs : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function ms(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== _e(e) ? !1 : t;
}
function mt(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = zr(e);
  let s = rt(1);
  t && (r ? Je(r) && (s = Ot(r)) : s = Ot(e));
  const c = ms(i, n, r) ? aa(i) : rt(0);
  let u = (o.left + c.x) / s.x, l = (o.top + c.y) / s.y, d = o.width / s.x, f = o.height / s.y;
  if (i) {
    const p = _e(i), v = r && Je(r) ? _e(r) : r;
    let g = p.frameElement;
    for (; g && r && v !== p; ) {
      const y = Ot(g), b = g.getBoundingClientRect(), x = je(g), w = b.left + (g.clientLeft + parseFloat(x.paddingLeft)) * y.x, S = b.top + (g.clientTop + parseFloat(x.paddingTop)) * y.y;
      u *= y.x, l *= y.y, d *= y.x, f *= y.y, u += w, l += S, g = _e(g).frameElement;
    }
  }
  return Rn({
    width: d,
    height: f,
    x: u,
    y: l
  });
}
function hs(e) {
  let {
    rect: t,
    offsetParent: n,
    strategy: r
  } = e;
  const o = ze(n), i = Ze(n);
  if (n === i)
    return t;
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = rt(1);
  const u = rt(0);
  if ((o || !o && r !== "fixed") && ((ot(n) !== "body" || cn(i)) && (s = jn(n)), ze(n))) {
    const l = mt(n);
    c = Ot(n), u.x = l.x + n.clientLeft, u.y = l.y + n.clientTop;
  }
  return {
    width: t.width * c.x,
    height: t.height * c.y,
    x: t.x * c.x - s.scrollLeft * c.x + u.x,
    y: t.y * c.y - s.scrollTop * c.y + u.y
  };
}
function gs(e) {
  return Array.from(e.getClientRects());
}
function ia(e) {
  return mt(Ze(e)).left + jn(e).scrollLeft;
}
function ys(e) {
  const t = Ze(e), n = jn(e), r = e.ownerDocument.body, o = ke(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = ke(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + ia(e);
  const c = -n.scrollTop;
  return je(r).direction === "rtl" && (s += ke(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: c
  };
}
function bs(e, t) {
  const n = _e(e), r = Ze(e), o = n.visualViewport;
  let i = r.clientWidth, s = r.clientHeight, c = 0, u = 0;
  if (o) {
    i = o.width, s = o.height;
    const l = Ur();
    (!l || l && t === "fixed") && (c = o.offsetLeft, u = o.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: c,
    y: u
  };
}
function ws(e, t) {
  const n = mt(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = ze(e) ? Ot(e) : rt(1), s = e.clientWidth * i.x, c = e.clientHeight * i.y, u = o * i.x, l = r * i.y;
  return {
    width: s,
    height: c,
    x: u,
    y: l
  };
}
function xo(e, t, n) {
  let r;
  if (t === "viewport")
    r = bs(e, n);
  else if (t === "document")
    r = ys(Ze(e));
  else if (Je(t))
    r = ws(t, n);
  else {
    const o = aa(e);
    r = fe(q({}, t), {
      x: t.x - o.x,
      y: t.y - o.y
    });
  }
  return Rn(r);
}
function sa(e, t) {
  const n = kt(e);
  return n === t || !Je(n) || Nn(n) ? !1 : je(n).position === "fixed" || sa(n, t);
}
function xs(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = tn(e, [], !1).filter((c) => Je(c) && ot(c) !== "body"), o = null;
  const i = je(e).position === "fixed";
  let s = i ? kt(e) : e;
  for (; Je(s) && !Nn(s); ) {
    const c = je(s), u = Wr(s);
    !u && c.position === "fixed" && (o = null), (i ? !u && !o : !u && c.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || cn(s) && !u && sa(e, s)) ? r = r.filter((d) => d !== s) : o = c, s = kt(s);
  }
  return t.set(e, r), r;
}
function Cs(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? xs(t, this._c) : [].concat(n), r], c = s[0], u = s.reduce((l, d) => {
    const f = xo(t, d, o);
    return l.top = ke(f.top, l.top), l.right = nt(f.right, l.right), l.bottom = nt(f.bottom, l.bottom), l.left = ke(f.left, l.left), l;
  }, xo(t, c, o));
  return {
    width: u.right - u.left,
    height: u.bottom - u.top,
    x: u.left,
    y: u.top
  };
}
function Es(e) {
  return oa(e);
}
function Ss(e, t, n) {
  const r = ze(t), o = Ze(t), i = n === "fixed", s = mt(e, !0, i, t);
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const u = rt(0);
  if (r || !r && !i)
    if ((ot(t) !== "body" || cn(o)) && (c = jn(t)), r) {
      const l = mt(t, !0, i, t);
      u.x = l.x + t.clientLeft, u.y = l.y + t.clientTop;
    } else
      o && (u.x = ia(o));
  return {
    x: s.left + c.scrollLeft - u.x,
    y: s.top + c.scrollTop - u.y,
    width: s.width,
    height: s.height
  };
}
function Co(e, t) {
  return !ze(e) || je(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function ca(e, t) {
  const n = _e(e);
  if (!ze(e))
    return n;
  let r = Co(e, t);
  for (; r && ds(r) && je(r).position === "static"; )
    r = Co(r, t);
  return r && (ot(r) === "html" || ot(r) === "body" && je(r).position === "static" && !Wr(r)) ? n : r || ps(e) || n;
}
const Os = function(e) {
  return Ie(this, null, function* () {
    let {
      reference: t,
      floating: n,
      strategy: r
    } = e;
    const o = this.getOffsetParent || ca, i = this.getDimensions;
    return {
      reference: Ss(t, yield o(n), r),
      floating: q({
        x: 0,
        y: 0
      }, yield i(n))
    };
  });
};
function Ps(e) {
  return je(e).direction === "rtl";
}
const Ts = {
  convertOffsetParentRelativeRectToViewportRelativeRect: hs,
  getDocumentElement: Ze,
  getClippingRect: Cs,
  getOffsetParent: ca,
  getElementRects: Os,
  getClientRects: gs,
  getDimensions: Es,
  getScale: Ot,
  isElement: Je,
  isRTL: Ps
};
function $s(e, t) {
  let n = null, r;
  const o = Ze(e);
  function i() {
    clearTimeout(r), n && n.disconnect(), n = null;
  }
  function s(c, u) {
    c === void 0 && (c = !1), u === void 0 && (u = 1), i();
    const {
      left: l,
      top: d,
      width: f,
      height: p
    } = e.getBoundingClientRect();
    if (c || t(), !f || !p)
      return;
    const v = dn(d), g = dn(o.clientWidth - (l + f)), y = dn(o.clientHeight - (d + p)), b = dn(l), w = {
      rootMargin: -v + "px " + -g + "px " + -y + "px " + -b + "px",
      threshold: ke(0, nt(1, u)) || 1
    };
    let S = !0;
    function E(h) {
      const $ = h[0].intersectionRatio;
      if ($ !== u) {
        if (!S)
          return s();
        $ ? s(!1, $) : r = setTimeout(() => {
          s(!1, 1e-7);
        }, 100);
      }
      S = !1;
    }
    try {
      n = new IntersectionObserver(E, fe(q({}, w), {
        // Handle <iframe>s
        root: o.ownerDocument
      }));
    } catch (h) {
      n = new IntersectionObserver(E, w);
    }
    n.observe(e);
  }
  return s(!0), i;
}
function Rs(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: c = typeof IntersectionObserver == "function",
    animationFrame: u = !1
  } = r, l = zr(e), d = o || i ? [...l ? tn(l) : [], ...tn(t)] : [];
  d.forEach((x) => {
    o && x.addEventListener("scroll", n, {
      passive: !0
    }), i && x.addEventListener("resize", n);
  });
  const f = l && c ? $s(l, n) : null;
  let p = -1, v = null;
  s && (v = new ResizeObserver((x) => {
    let [w] = x;
    w && w.target === l && v && (v.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      v && v.observe(t);
    })), n();
  }), l && !u && v.observe(l), v.observe(t));
  let g, y = u ? mt(e) : null;
  u && b();
  function b() {
    const x = mt(e);
    y && (x.x !== y.x || x.y !== y.y || x.width !== y.width || x.height !== y.height) && n(), y = x, g = requestAnimationFrame(b);
  }
  return n(), () => {
    d.forEach((x) => {
      o && x.removeEventListener("scroll", n), i && x.removeEventListener("resize", n);
    }), f && f(), v && v.disconnect(), v = null, u && cancelAnimationFrame(g);
  };
}
const ks = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = q({
    platform: Ts
  }, n), i = fe(q({}, o.platform), {
    _c: r
  });
  return os(e, t, fe(q({}, o), {
    platform: i
  }));
}, _s = (e) => {
  function t(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const {
        element: r,
        padding: o
      } = typeof e == "function" ? e(n) : e;
      return r && t(r) ? r.current != null ? go({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? go({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
};
var xn = typeof document != "undefined" ? Ye : de;
function kn(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n != t.length)
        return !1;
      for (r = n; r-- !== 0; )
        if (!kn(e[r], t[r]))
          return !1;
      return !0;
    }
    if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!{}.hasOwnProperty.call(t, o[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      const i = o[r];
      if (!(i === "_owner" && e.$$typeof) && !kn(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function ua(e) {
  return typeof window == "undefined" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Eo(e, t) {
  const n = ua(e);
  return Math.round(t * n) / n;
}
function So(e) {
  const t = A.useRef(e);
  return xn(() => {
    t.current = e;
  }), t;
}
function Ds(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: o,
    elements: {
      reference: i,
      floating: s
    } = {},
    transform: c = !0,
    whileElementsMounted: u,
    open: l
  } = e, [d, f] = A.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [p, v] = A.useState(r);
  kn(p, r) || v(r);
  const [g, y] = A.useState(null), [b, x] = A.useState(null), w = A.useCallback((V) => {
    V != $.current && ($.current = V, y(V));
  }, [y]), S = A.useCallback((V) => {
    V !== R.current && (R.current = V, x(V));
  }, [x]), E = i || g, h = s || b, $ = A.useRef(null), R = A.useRef(null), L = A.useRef(d), N = So(u), ae = So(o), ie = A.useCallback(() => {
    if (!$.current || !R.current)
      return;
    const V = {
      placement: t,
      strategy: n,
      middleware: p
    };
    ae.current && (V.platform = ae.current), ks($.current, R.current, V).then((ne) => {
      const se = fe(q({}, ne), {
        isPositioned: !0
      });
      oe.current && !kn(L.current, se) && (L.current = se, fi.flushSync(() => {
        f(se);
      }));
    });
  }, [p, t, n, ae]);
  xn(() => {
    l === !1 && L.current.isPositioned && (L.current.isPositioned = !1, f((V) => fe(q({}, V), {
      isPositioned: !1
    })));
  }, [l]);
  const oe = A.useRef(!1);
  xn(() => (oe.current = !0, () => {
    oe.current = !1;
  }), []), xn(() => {
    if (E && ($.current = E), h && (R.current = h), E && h) {
      if (N.current)
        return N.current(E, h, ie);
      ie();
    }
  }, [E, h, ie, N]);
  const Q = A.useMemo(() => ({
    reference: $,
    floating: R,
    setReference: w,
    setFloating: S
  }), [w, S]), B = A.useMemo(() => ({
    reference: E,
    floating: h
  }), [E, h]), te = A.useMemo(() => {
    const V = {
      position: n,
      left: 0,
      top: 0
    };
    if (!B.floating)
      return V;
    const ne = Eo(B.floating, d.x), se = Eo(B.floating, d.y);
    return c ? q(fe(q({}, V), {
      transform: "translate(" + ne + "px, " + se + "px)"
    }), ua(B.floating) >= 1.5 && {
      willChange: "transform"
    }) : {
      position: n,
      left: ne,
      top: se
    };
  }, [n, c, B.floating, d.x, d.y]);
  return A.useMemo(() => fe(q({}, d), {
    update: ie,
    refs: Q,
    elements: B,
    floatingStyles: te
  }), [d, ie, Q, B, te]);
}
function As(e) {
  const [t, n] = re(void 0);
  return Rt(() => {
    if (e) {
      n({
        width: e.offsetWidth,
        height: e.offsetHeight
      });
      const r = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length)
          return;
        const i = o[0];
        let s, c;
        if ("borderBoxSize" in i) {
          const u = i.borderBoxSize, l = Array.isArray(u) ? u[0] : u;
          s = l.inlineSize, c = l.blockSize;
        } else
          s = e.offsetWidth, c = e.offsetHeight;
        n({
          width: s,
          height: c
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
const la = "Popper", [fa, da] = Zo(la), [Ns, pa] = fa(la), js = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = re(null);
  return /* @__PURE__ */ me(Ns, {
    scope: t,
    anchor: r,
    onAnchorChange: o
  }, n);
}, Ls = "PopperAnchor", Fs = /* @__PURE__ */ Le((e, t) => {
  const u = e, { __scopePopper: n, virtualRef: r } = u, o = we(u, ["__scopePopper", "virtualRef"]), i = pa(Ls, n), s = ye(null), c = ht(t, s);
  return de(() => {
    i.onAnchorChange((r == null ? void 0 : r.current) || s.current);
  }), r ? null : /* @__PURE__ */ me(sn.div, Ce({}, o, {
    ref: c
  }));
}), va = "PopperContent", [Ms, ll] = fa(va), Is = /* @__PURE__ */ Le((e, t) => {
  var n, r, o, i, s, c, u, l;
  const Se = e, { __scopePopper: d, side: f = "bottom", sideOffset: p = 0, align: v = "center", alignOffset: g = 0, arrowPadding: y = 0, avoidCollisions: b = !0, collisionBoundary: x = [], collisionPadding: w = 0, sticky: S = "partial", hideWhenDetached: E = !1, updatePositionStrategy: h = "optimized", onPlaced: $ } = Se, R = we(Se, ["__scopePopper", "side", "sideOffset", "align", "alignOffset", "arrowPadding", "avoidCollisions", "collisionBoundary", "collisionPadding", "sticky", "hideWhenDetached", "updatePositionStrategy", "onPlaced"]), L = pa(va, d), [N, ae] = re(null), ie = ht(
    t,
    (Oe) => ae(Oe)
  ), [oe, Q] = re(null), B = As(oe), te = (n = B == null ? void 0 : B.width) !== null && n !== void 0 ? n : 0, V = (r = B == null ? void 0 : B.height) !== null && r !== void 0 ? r : 0, ne = f + (v !== "center" ? "-" + v : ""), se = typeof w == "number" ? w : q({
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }, w), ge = Array.isArray(x) ? x : [
    x
  ], P = ge.length > 0, k = {
    padding: se,
    boundary: ge.filter(Bs),
    // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
    altBoundary: P
  }, { refs: H, floatingStyles: G, placement: z, isPositioned: X, middlewareData: I } = Ds({
    // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
    strategy: "fixed",
    placement: ne,
    whileElementsMounted: (...Oe) => Rs(...Oe, {
      animationFrame: h === "always"
    }),
    elements: {
      reference: L.anchor
    },
    middleware: [
      cs({
        mainAxis: p + V,
        alignmentAxis: g
      }),
      b && us(q({
        mainAxis: !0,
        crossAxis: !1,
        limiter: S === "partial" ? ls() : void 0
      }, k)),
      b && as(q({}, k)),
      fs(fe(q({}, k), {
        apply: ({ elements: Oe, rects: Qe, availableWidth: at, availableHeight: Fe }) => {
          const { width: At, height: Nt } = Qe.reference, De = Oe.floating.style;
          De.setProperty("--radix-popper-available-width", `${at}px`), De.setProperty("--radix-popper-available-height", `${Fe}px`), De.setProperty("--radix-popper-anchor-width", `${At}px`), De.setProperty("--radix-popper-anchor-height", `${Nt}px`);
        }
      })),
      oe && _s({
        element: oe,
        padding: y
      }),
      Ws({
        arrowWidth: te,
        arrowHeight: V
      }),
      E && is(q({
        strategy: "referenceHidden"
      }, k))
    ]
  }), [F, U] = ma(z), K = tt($);
  Rt(() => {
    X && (K == null || K());
  }, [
    X,
    K
  ]);
  const Y = (o = I.arrow) === null || o === void 0 ? void 0 : o.x, he = (i = I.arrow) === null || i === void 0 ? void 0 : i.y, _ = ((s = I.arrow) === null || s === void 0 ? void 0 : s.centerOffset) !== 0, [Ee, Be] = re();
  return Rt(() => {
    N && Be(window.getComputedStyle(N).zIndex);
  }, [
    N
  ]), /* @__PURE__ */ me("div", {
    ref: H.setFloating,
    "data-radix-popper-content-wrapper": "",
    style: fe(q({}, G), {
      transform: X ? G.transform : "translate(0, -200%)",
      // keep off the page when measuring
      minWidth: "max-content",
      zIndex: Ee,
      "--radix-popper-transform-origin": [
        (c = I.transformOrigin) === null || c === void 0 ? void 0 : c.x,
        (u = I.transformOrigin) === null || u === void 0 ? void 0 : u.y
      ].join(" ")
    }),
    dir: e.dir
  }, /* @__PURE__ */ me(Ms, {
    scope: d,
    placedSide: F,
    onArrowChange: Q,
    arrowX: Y,
    arrowY: he,
    shouldHideArrow: _
  }, /* @__PURE__ */ me(sn.div, Ce({
    "data-side": F,
    "data-align": U
  }, R, {
    ref: ie,
    style: fe(q({}, R.style), {
      // if the PopperContent hasn't been placed yet (not all measurements done)
      // we prevent animations so that users's animation don't kick in too early referring wrong sides
      animation: X ? void 0 : "none",
      // hide the content if using the hide middleware and should be hidden
      opacity: (l = I.hide) !== null && l !== void 0 && l.referenceHidden ? 0 : void 0
    })
  }))));
});
function Bs(e) {
  return e !== null;
}
const Ws = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var n, r, o, i, s;
    const { placement: c, rects: u, middlewareData: l } = t, f = ((n = l.arrow) === null || n === void 0 ? void 0 : n.centerOffset) !== 0, p = f ? 0 : e.arrowWidth, v = f ? 0 : e.arrowHeight, [g, y] = ma(c), b = {
      start: "0%",
      center: "50%",
      end: "100%"
    }[y], x = ((r = (o = l.arrow) === null || o === void 0 ? void 0 : o.x) !== null && r !== void 0 ? r : 0) + p / 2, w = ((i = (s = l.arrow) === null || s === void 0 ? void 0 : s.y) !== null && i !== void 0 ? i : 0) + v / 2;
    let S = "", E = "";
    return g === "bottom" ? (S = f ? b : `${x}px`, E = `${-v}px`) : g === "top" ? (S = f ? b : `${x}px`, E = `${u.floating.height + v}px`) : g === "right" ? (S = `${-v}px`, E = f ? b : `${w}px`) : g === "left" && (S = `${u.floating.width + v}px`, E = f ? b : `${w}px`), {
      data: {
        x: S,
        y: E
      }
    };
  }
});
function ma(e) {
  const [t, n = "center"] = e.split("-");
  return [
    t,
    n
  ];
}
const Us = js, zs = Fs, qs = Is;
function Vs(e, t) {
  return ui((n, r) => {
    const o = t[n][r];
    return o != null ? o : n;
  }, e);
}
const ha = (e) => {
  const { present: t, children: n } = e, r = Gs(t), o = typeof n == "function" ? n({
    present: r.isPresent
  }) : St.only(n), i = ht(r.ref, o.ref);
  return typeof n == "function" || r.isPresent ? /* @__PURE__ */ Ar(o, {
    ref: i
  }) : null;
};
ha.displayName = "Presence";
function Gs(e) {
  const [t, n] = re(), r = ye({}), o = ye(e), i = ye("none"), s = e ? "mounted" : "unmounted", [c, u] = Vs(s, {
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
  return de(() => {
    const l = pn(r.current);
    i.current = c === "mounted" ? l : "none";
  }, [
    c
  ]), Rt(() => {
    const l = r.current, d = o.current;
    if (d !== e) {
      const p = i.current, v = pn(l);
      e ? u("MOUNT") : v === "none" || (l == null ? void 0 : l.display) === "none" ? u("UNMOUNT") : u(d && p !== v ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [
    e,
    u
  ]), Rt(() => {
    if (t) {
      const l = (f) => {
        const v = pn(r.current).includes(f.animationName);
        f.target === t && v && Go(
          () => u("ANIMATION_END")
        );
      }, d = (f) => {
        f.target === t && (i.current = pn(r.current));
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
    ].includes(c),
    ref: dt((l) => {
      l && (r.current = getComputedStyle(l)), n(l);
    }, [])
  };
}
function pn(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function Ks({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [r, o] = Ys({
    defaultProp: t,
    onChange: n
  }), i = e !== void 0, s = i ? e : r, c = tt(n), u = dt((l) => {
    if (i) {
      const f = typeof l == "function" ? l(e) : l;
      f !== e && c(f);
    } else
      o(l);
  }, [
    i,
    e,
    o,
    c
  ]);
  return [
    s,
    u
  ];
}
function Ys({ defaultProp: e, onChange: t }) {
  const n = re(e), [r] = n, o = ye(r), i = tt(t);
  return de(() => {
    o.current !== r && (i(r), o.current = r);
  }, [
    r,
    o,
    i
  ]), n;
}
var Hs = function(e) {
  if (typeof document == "undefined")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, gt = /* @__PURE__ */ new WeakMap(), vn = /* @__PURE__ */ new WeakMap(), mn = {}, ar = 0, ga = function(e) {
  return e && (e.host || ga(e.parentNode));
}, Xs = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = ga(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, Js = function(e, t, n, r) {
  var o = Xs(t, Array.isArray(e) ? e : [e]);
  mn[n] || (mn[n] = /* @__PURE__ */ new WeakMap());
  var i = mn[n], s = [], c = /* @__PURE__ */ new Set(), u = new Set(o), l = function(f) {
    !f || c.has(f) || (c.add(f), l(f.parentNode));
  };
  o.forEach(l);
  var d = function(f) {
    !f || u.has(f) || Array.prototype.forEach.call(f.children, function(p) {
      if (c.has(p))
        d(p);
      else {
        var v = p.getAttribute(r), g = v !== null && v !== "false", y = (gt.get(p) || 0) + 1, b = (i.get(p) || 0) + 1;
        gt.set(p, y), i.set(p, b), s.push(p), y === 1 && g && vn.set(p, !0), b === 1 && p.setAttribute(n, "true"), g || p.setAttribute(r, "true");
      }
    });
  };
  return d(t), c.clear(), ar++, function() {
    s.forEach(function(f) {
      var p = gt.get(f) - 1, v = i.get(f) - 1;
      gt.set(f, p), i.set(f, v), p || (vn.has(f) || f.removeAttribute(r), vn.delete(f)), v || f.removeAttribute(n);
    }), ar--, ar || (gt = /* @__PURE__ */ new WeakMap(), gt = /* @__PURE__ */ new WeakMap(), vn = /* @__PURE__ */ new WeakMap(), mn = {});
  };
}, Zs = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = t || Hs(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), Js(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, Ue = function() {
  return Ue = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, Ue.apply(this, arguments);
};
function ya(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function Qs(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, i; r < o; r++)
      (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
var Cn = "right-scroll-bar-position", En = "width-before-scroll-bar", ec = "with-scroll-bars-hidden", tc = "--removed-body-scroll-bar-size";
function nc(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function rc(e, t) {
  var n = re(function() {
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
          var o = n.value;
          o !== r && (n.value = r, n.callback(r, o));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
function ba(e, t) {
  return rc(t || null, function(n) {
    return e.forEach(function(r) {
      return nc(r, n);
    });
  });
}
function wa(e) {
  return e;
}
function xa(e, t) {
  t === void 0 && (t = wa);
  var n = [], r = !1, o = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(i) {
      var s = t(i, r);
      return n.push(s), function() {
        n = n.filter(function(c) {
          return c !== s;
        });
      };
    },
    assignSyncMedium: function(i) {
      for (r = !0; n.length; ) {
        var s = n;
        n = [], s.forEach(i);
      }
      n = {
        push: function(c) {
          return i(c);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(i) {
      r = !0;
      var s = [];
      if (n.length) {
        var c = n;
        n = [], c.forEach(i), s = n;
      }
      var u = function() {
        var d = s;
        s = [], d.forEach(i);
      }, l = function() {
        return Promise.resolve().then(u);
      };
      l(), n = {
        push: function(d) {
          s.push(d), l();
        },
        filter: function(d) {
          return s = s.filter(d), n;
        }
      };
    }
  };
  return o;
}
function qr(e, t) {
  return t === void 0 && (t = wa), xa(e, t);
}
function Ca(e) {
  e === void 0 && (e = {});
  var t = xa(null);
  return t.options = Ue({ async: !0, ssr: !1 }, e), t;
}
var Ea = function(e) {
  var t = e.sideCar, n = ya(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return A.createElement(r, Ue({}, n));
};
Ea.isSideCarExport = !0;
function oc(e, t) {
  return e.useMedium(t), Ea;
}
var Sa = Ca(), ir = function() {
}, Ln = A.forwardRef(function(e, t) {
  var n = A.useRef(null), r = A.useState({
    onScrollCapture: ir,
    onWheelCapture: ir,
    onTouchMoveCapture: ir
  }), o = r[0], i = r[1], s = e.forwardProps, c = e.children, u = e.className, l = e.removeScrollBar, d = e.enabled, f = e.shards, p = e.sideCar, v = e.noIsolation, g = e.inert, y = e.allowPinchZoom, b = e.as, x = b === void 0 ? "div" : b, w = ya(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]), S = p, E = ba([n, t]), h = Ue(Ue({}, w), o);
  return A.createElement(
    A.Fragment,
    null,
    d && A.createElement(S, { sideCar: Sa, removeScrollBar: l, shards: f, noIsolation: v, inert: g, setCallbacks: i, allowPinchZoom: !!y, lockRef: n }),
    s ? A.cloneElement(A.Children.only(c), Ue(Ue({}, h), { ref: E })) : A.createElement(x, Ue({}, h, { className: u, ref: E }), c)
  );
});
Ln.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Ln.classNames = {
  fullWidth: En,
  zeroRight: Cn
};
var Oo, ac = function() {
  if (Oo)
    return Oo;
  if (typeof __webpack_nonce__ != "undefined")
    return __webpack_nonce__;
};
function ic() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = ac();
  return t && e.setAttribute("nonce", t), e;
}
function sc(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function cc(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var uc = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = ic()) && (sc(t, n), cc(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, lc = function() {
  var e = uc();
  return function(t, n) {
    A.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, Oa = function() {
  var e = lc(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, fc = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, sr = function(e) {
  return parseInt(e || "", 10) || 0;
}, dc = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [sr(n), sr(r), sr(o)];
}, pc = function(e) {
  if (e === void 0 && (e = "margin"), typeof window == "undefined")
    return fc;
  var t = dc(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, vc = Oa(), mc = function(e, t, n, r) {
  var o = e.left, i = e.top, s = e.right, c = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(ec, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(c, "px ").concat(r, `;
  }
  body {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(i, `px;
    padding-right: `).concat(s, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(c, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(c, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(Cn, ` {
    right: `).concat(c, "px ").concat(r, `;
  }
  
  .`).concat(En, ` {
    margin-right: `).concat(c, "px ").concat(r, `;
  }
  
  .`).concat(Cn, " .").concat(Cn, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(En, " .").concat(En, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body {
    `).concat(tc, ": ").concat(c, `px;
  }
`);
}, hc = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r, i = A.useMemo(function() {
    return pc(o);
  }, [o]);
  return A.createElement(vc, { styles: mc(i, !t, o, n ? "" : "!important") });
}, Tr = !1;
if (typeof window != "undefined")
  try {
    var hn = Object.defineProperty({}, "passive", {
      get: function() {
        return Tr = !0, !0;
      }
    });
    window.addEventListener("test", hn, hn), window.removeEventListener("test", hn, hn);
  } catch (e) {
    Tr = !1;
  }
var yt = Tr ? { passive: !1 } : !1, gc = function(e) {
  return e.tagName === "TEXTAREA";
}, Pa = function(e, t) {
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !gc(e) && n[t] === "visible")
  );
}, yc = function(e) {
  return Pa(e, "overflowY");
}, bc = function(e) {
  return Pa(e, "overflowX");
}, Po = function(e, t) {
  var n = t;
  do {
    typeof ShadowRoot != "undefined" && n instanceof ShadowRoot && (n = n.host);
    var r = Ta(e, n);
    if (r) {
      var o = $a(e, n), i = o[1], s = o[2];
      if (i > s)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== document.body);
  return !1;
}, wc = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, xc = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Ta = function(e, t) {
  return e === "v" ? yc(t) : bc(t);
}, $a = function(e, t) {
  return e === "v" ? wc(t) : xc(t);
}, Cc = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, Ec = function(e, t, n, r, o) {
  var i = Cc(e, window.getComputedStyle(t).direction), s = i * r, c = n.target, u = t.contains(c), l = !1, d = s > 0, f = 0, p = 0;
  do {
    var v = $a(e, c), g = v[0], y = v[1], b = v[2], x = y - b - i * g;
    (g || x) && Ta(e, c) && (f += x, p += g), c = c.parentNode;
  } while (
    // portaled content
    !u && c !== document.body || // self content
    u && (t.contains(c) || t === c)
  );
  return (d && (o && f === 0 || !o && s > f) || !d && (o && p === 0 || !o && -s > p)) && (l = !0), l;
}, gn = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, To = function(e) {
  return [e.deltaX, e.deltaY];
}, $o = function(e) {
  return e && "current" in e ? e.current : e;
}, Sc = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, Oc = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, Pc = 0, bt = [];
function Tc(e) {
  var t = A.useRef([]), n = A.useRef([0, 0]), r = A.useRef(), o = A.useState(Pc++)[0], i = A.useState(function() {
    return Oa();
  })[0], s = A.useRef(e);
  A.useEffect(function() {
    s.current = e;
  }, [e]), A.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var y = Qs([e.lockRef.current], (e.shards || []).map($o), !0).filter(Boolean);
      return y.forEach(function(b) {
        return b.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), y.forEach(function(b) {
          return b.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var c = A.useCallback(function(y, b) {
    if ("touches" in y && y.touches.length === 2)
      return !s.current.allowPinchZoom;
    var x = gn(y), w = n.current, S = "deltaX" in y ? y.deltaX : w[0] - x[0], E = "deltaY" in y ? y.deltaY : w[1] - x[1], h, $ = y.target, R = Math.abs(S) > Math.abs(E) ? "h" : "v";
    if ("touches" in y && R === "h" && $.type === "range")
      return !1;
    var L = Po(R, $);
    if (!L)
      return !0;
    if (L ? h = R : (h = R === "v" ? "h" : "v", L = Po(R, $)), !L)
      return !1;
    if (!r.current && "changedTouches" in y && (S || E) && (r.current = h), !h)
      return !0;
    var N = r.current || h;
    return Ec(N, b, y, N === "h" ? S : E, !0);
  }, []), u = A.useCallback(function(y) {
    var b = y;
    if (!(!bt.length || bt[bt.length - 1] !== i)) {
      var x = "deltaY" in b ? To(b) : gn(b), w = t.current.filter(function(h) {
        return h.name === b.type && h.target === b.target && Sc(h.delta, x);
      })[0];
      if (w && w.should) {
        b.cancelable && b.preventDefault();
        return;
      }
      if (!w) {
        var S = (s.current.shards || []).map($o).filter(Boolean).filter(function(h) {
          return h.contains(b.target);
        }), E = S.length > 0 ? c(b, S[0]) : !s.current.noIsolation;
        E && b.cancelable && b.preventDefault();
      }
    }
  }, []), l = A.useCallback(function(y, b, x, w) {
    var S = { name: y, delta: b, target: x, should: w };
    t.current.push(S), setTimeout(function() {
      t.current = t.current.filter(function(E) {
        return E !== S;
      });
    }, 1);
  }, []), d = A.useCallback(function(y) {
    n.current = gn(y), r.current = void 0;
  }, []), f = A.useCallback(function(y) {
    l(y.type, To(y), y.target, c(y, e.lockRef.current));
  }, []), p = A.useCallback(function(y) {
    l(y.type, gn(y), y.target, c(y, e.lockRef.current));
  }, []);
  A.useEffect(function() {
    return bt.push(i), e.setCallbacks({
      onScrollCapture: f,
      onWheelCapture: f,
      onTouchMoveCapture: p
    }), document.addEventListener("wheel", u, yt), document.addEventListener("touchmove", u, yt), document.addEventListener("touchstart", d, yt), function() {
      bt = bt.filter(function(y) {
        return y !== i;
      }), document.removeEventListener("wheel", u, yt), document.removeEventListener("touchmove", u, yt), document.removeEventListener("touchstart", d, yt);
    };
  }, []);
  var v = e.removeScrollBar, g = e.inert;
  return A.createElement(
    A.Fragment,
    null,
    g ? A.createElement(i, { styles: Oc(o) }) : null,
    v ? A.createElement(hc, { gapMode: "margin" }) : null
  );
}
const $c = oc(Sa, Tc);
var Ra = A.forwardRef(function(e, t) {
  return A.createElement(Ln, Ue({}, e, { ref: t, sideCar: $c }));
});
Ra.classNames = Ln.classNames;
const Rc = Ra, ka = "Popover", [_a, fl] = Zo(ka, [
  da
]), Vr = da(), [kc, un] = _a(ka), _c = (e) => {
  const { __scopePopover: t, children: n, open: r, defaultOpen: o, onOpenChange: i, modal: s = !1 } = e, c = Vr(t), u = ye(null), [l, d] = re(!1), [f = !1, p] = Ks({
    prop: r,
    defaultProp: o,
    onChange: i
  });
  return /* @__PURE__ */ me(Us, c, /* @__PURE__ */ me(kc, {
    scope: t,
    contentId: Hi(),
    triggerRef: u,
    open: f,
    onOpenChange: p,
    onOpenToggle: dt(
      () => p(
        (v) => !v
      ),
      [
        p
      ]
    ),
    hasCustomAnchor: l,
    onCustomAnchorAdd: dt(
      () => d(!0),
      []
    ),
    onCustomAnchorRemove: dt(
      () => d(!1),
      []
    ),
    modal: s
  }, n));
}, Dc = "PopoverTrigger", Ac = /* @__PURE__ */ Le((e, t) => {
  const u = e, { __scopePopover: n } = u, r = we(u, ["__scopePopover"]), o = un(Dc, n), i = Vr(n), s = ht(t, o.triggerRef), c = /* @__PURE__ */ me(sn.button, Ce({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": o.open,
    "aria-controls": o.contentId,
    "data-state": Aa(o.open)
  }, r, {
    ref: s,
    onClick: pt(e.onClick, o.onOpenToggle)
  }));
  return o.hasCustomAnchor ? c : /* @__PURE__ */ me(zs, Ce({
    asChild: !0
  }, i), c);
}), Nc = "PopoverPortal", [dl, jc] = _a(Nc, {
  forceMount: void 0
}), nn = "PopoverContent", Lc = /* @__PURE__ */ Le((e, t) => {
  const n = jc(nn, e.__scopePopover), s = e, { forceMount: r = n.forceMount } = s, o = we(s, ["forceMount"]), i = un(nn, e.__scopePopover);
  return /* @__PURE__ */ me(ha, {
    present: r || i.open
  }, i.modal ? /* @__PURE__ */ me(Fc, Ce({}, o, {
    ref: t
  })) : /* @__PURE__ */ me(Mc, Ce({}, o, {
    ref: t
  })));
}), Fc = /* @__PURE__ */ Le((e, t) => {
  const n = un(nn, e.__scopePopover), r = ye(null), o = ht(t, r), i = ye(!1);
  return de(() => {
    const s = r.current;
    if (s)
      return Zs(s);
  }, []), /* @__PURE__ */ me(Rc, {
    as: Fr,
    allowPinchZoom: !0
  }, /* @__PURE__ */ me(Da, Ce({}, e, {
    ref: o,
    trapFocus: n.open,
    disableOutsidePointerEvents: !0,
    onCloseAutoFocus: pt(e.onCloseAutoFocus, (s) => {
      var c;
      s.preventDefault(), i.current || (c = n.triggerRef.current) === null || c === void 0 || c.focus();
    }),
    onPointerDownOutside: pt(e.onPointerDownOutside, (s) => {
      const c = s.detail.originalEvent, u = c.button === 0 && c.ctrlKey === !0, l = c.button === 2 || u;
      i.current = l;
    }, {
      checkForDefaultPrevented: !1
    }),
    onFocusOutside: pt(
      e.onFocusOutside,
      (s) => s.preventDefault(),
      {
        checkForDefaultPrevented: !1
      }
    )
  })));
}), Mc = /* @__PURE__ */ Le((e, t) => {
  const n = un(nn, e.__scopePopover), r = ye(!1), o = ye(!1);
  return /* @__PURE__ */ me(Da, Ce({}, e, {
    ref: t,
    trapFocus: !1,
    disableOutsidePointerEvents: !1,
    onCloseAutoFocus: (i) => {
      var s;
      if ((s = e.onCloseAutoFocus) === null || s === void 0 || s.call(e, i), !i.defaultPrevented) {
        var c;
        r.current || (c = n.triggerRef.current) === null || c === void 0 || c.focus(), i.preventDefault();
      }
      r.current = !1, o.current = !1;
    },
    onInteractOutside: (i) => {
      var s, c;
      (s = e.onInteractOutside) === null || s === void 0 || s.call(e, i), i.defaultPrevented || (r.current = !0, i.detail.originalEvent.type === "pointerdown" && (o.current = !0));
      const u = i.target;
      ((c = n.triggerRef.current) === null || c === void 0 ? void 0 : c.contains(u)) && i.preventDefault(), i.detail.originalEvent.type === "focusin" && o.current && i.preventDefault();
    }
  }));
}), Da = /* @__PURE__ */ Le((e, t) => {
  const g = e, { __scopePopover: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: i, disableOutsidePointerEvents: s, onEscapeKeyDown: c, onPointerDownOutside: u, onFocusOutside: l, onInteractOutside: d } = g, f = we(g, ["__scopePopover", "trapFocus", "onOpenAutoFocus", "onCloseAutoFocus", "disableOutsidePointerEvents", "onEscapeKeyDown", "onPointerDownOutside", "onFocusOutside", "onInteractOutside"]), p = un(nn, n), v = Vr(n);
  return Ii(), /* @__PURE__ */ me(Bi, {
    asChild: !0,
    loop: !0,
    trapped: r,
    onMountAutoFocus: o,
    onUnmountAutoFocus: i
  }, /* @__PURE__ */ me(Li, {
    asChild: !0,
    disableOutsidePointerEvents: s,
    onInteractOutside: d,
    onEscapeKeyDown: c,
    onPointerDownOutside: u,
    onFocusOutside: l,
    onDismiss: () => p.onOpenChange(!1)
  }, /* @__PURE__ */ me(qs, Ce({
    "data-state": Aa(p.open),
    role: "dialog",
    id: p.contentId
  }, v, f, {
    ref: t,
    style: fe(q({}, f.style), {
      "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
      "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
      "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
    })
  }))));
});
function Aa(e) {
  return e ? "open" : "closed";
}
const Ic = _c;
const Bc = (e) => {
  const g = e, {
    open: t,
    onOpenChange: n,
    onTriggerClick: r,
    ariaLabel: o,
    triggerElement: i,
    children: s,
    popoverClassName: c,
    contentClassName: u,
    noStyle: l = !1,
    sideOffset: d = 18,
    align: f = "end",
    triggerTabindex: p
  } = g, v = we(g, [
    "open",
    "onOpenChange",
    "onTriggerClick",
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
  return /* @__PURE__ */ O.jsx(
    "div",
    {
      className: J({
        [c || ""]: !!c,
        Popover: !l
      }),
      children: /* @__PURE__ */ O.jsxs(Ic, { open: t, onOpenChange: n, children: [
        i && /* @__PURE__ */ O.jsx(
          Ac,
          {
            "aria-label": o,
            tabIndex: p,
            className: "Popover-trigger",
            onClick: r,
            children: i
          }
        ),
        t && s && /* @__PURE__ */ O.jsx(
          Lc,
          fe(q({
            align: f,
            sideOffset: d,
            className: J({
              [u || ""]: !!u,
              "Popover-content": !!u || !l
            })
          }, v), {
            children: s
          })
        )
      ] })
    }
  );
};
var Pe = /* @__PURE__ */ ((e) => (e.Small = "small", e.Medium = "medium", e))(Pe || {}), Ct = /* @__PURE__ */ ((e) => (e.Default = "default", e.Custom = "custom", e))(Ct || {});
const Wc = Te.forwardRef(
  (e, t) => {
    const {
      items: n,
      selected: r,
      label: o,
      ariaLabel: i,
      size: s = Pe.Medium,
      error: c,
      isDisabled: u,
      onChange: l,
      type: d,
      className: f
    } = e, [p, v] = re(!1), [g, y] = re(), b = () => v(!p), x = (h) => {
      y(h), l && l(h), v(!1);
    }, w = (h) => {
      h.target === h.currentTarget && h.preventDefault();
    }, S = (h) => {
      (h.key === "Enter" || h.key === " ") && v(!p);
    }, E = (h, $) => {
      (h.key === "Enter" || h.key === " ") && (y($), l && l($), v(!1));
    };
    return de(() => {
      y(r);
    }, [r]), /* @__PURE__ */ O.jsxs(
      "div",
      {
        className: J({
          Dropdown: !0,
          "Dropdown-disabled": u,
          [f || ""]: !!f
        }),
        children: [
          o && /* @__PURE__ */ O.jsx(
            "div",
            {
              className: J({
                "Dropdown-label": !0,
                "Dropdown-label-medium": s === Pe.Medium,
                "Dropdown-label-small": s === Pe.Small
              }),
              children: o
            }
          ),
          /* @__PURE__ */ O.jsx(
            Bc,
            {
              open: p,
              ariaLabel: i,
              contentClassName: J({
                "Dropdown-popover-content": !0,
                "Dropdown-popover-content-medium": s === Pe.Medium,
                "Dropdown-popover-content-small": s === Pe.Small
              }),
              popoverClassName: "Dropdown-popover",
              sideOffset: 0,
              onOpenChange: b,
              onTriggerClick: w,
              align: "start",
              triggerTabindex: -1,
              triggerElement: /* @__PURE__ */ O.jsx(
                "div",
                {
                  ref: t,
                  className: J({
                    "Dropdown-root": !0,
                    "Dropdown-root-small": d === Ct.Default && s === Pe.Small,
                    "Dropdown-root-medium": d === Ct.Default && s === Pe.Medium,
                    "Dropdown-root-error": !!c,
                    "Dropdown-root-active": p
                  }),
                  tabIndex: 0,
                  "aria-label": i,
                  role: "trigger",
                  onKeyDown: S,
                  children: /* @__PURE__ */ O.jsxs("div", { className: "Dropdown-base", children: [
                    d === Ct.Custom ? e.renderSelectedValue(g) : g == null ? void 0 : g.label,
                    /* @__PURE__ */ O.jsx(
                      "div",
                      {
                        className: J({
                          "Dropdown-input-icon": !0,
                          "Dropdown-input-icon-up": p
                        }),
                        children: /* @__PURE__ */ O.jsx(jr, {})
                      }
                    )
                  ] })
                }
              ),
              children: /* @__PURE__ */ O.jsx(
                "div",
                {
                  className: J({
                    "Dropdown-list": !0,
                    "Dropdown-list-medium": s === Pe.Medium,
                    "Dropdown-list-small": s === Pe.Small
                  }),
                  onClick: (h) => h.nativeEvent.stopImmediatePropagation(),
                  children: n.map((h) => /* @__PURE__ */ O.jsxs(
                    "div",
                    {
                      className: J({
                        "Dropdown-list-item": !0,
                        "Dropdown-list-item-small": s === Pe.Small,
                        "Dropdown-list-item-medium": s === Pe.Medium
                      }),
                      tabIndex: 0,
                      role: "button",
                      onClick: () => x(h),
                      onKeyDown: ($) => E($, h),
                      children: [
                        d === Ct.Custom ? e.renderItem(h) : h.label,
                        (g == null ? void 0 : g.value) === h.value && /* @__PURE__ */ O.jsx("div", { className: "Dropdown-list-active-item", children: d === Ct.Custom ? e.customActiveIcon : /* @__PURE__ */ O.jsx(Lr, { color: "", width: "24", height: "24" }) })
                      ]
                    },
                    h.id
                  ))
                }
              )
            }
          ),
          c && /* @__PURE__ */ O.jsx(
            "div",
            {
              className: J({
                "Dropdown-error-text": !0,
                "Dropdown-error-text-medium": s === Pe.Medium,
                "Dropdown-error-text-small": s === Pe.Small
              }),
              children: c
            }
          )
        ]
      }
    );
  }
);
Wc.displayName = "Dropdown";
const pl = (e) => {
  const { items: t, onLabelClick: n } = e, r = (o, i) => {
    i || n && n(o);
  };
  return /* @__PURE__ */ O.jsx("nav", { "aria-label": "Breadcrumb", className: "Breadcrumbs", children: /* @__PURE__ */ O.jsx("ol", { className: "Breadcrumbs-list", children: t.map((o, i) => {
    const s = t.length - 1 === i;
    return /* @__PURE__ */ O.jsxs(Vo, { children: [
      /* @__PURE__ */ O.jsx(
        "li",
        {
          "aria-current": s ? "page" : void 0,
          className: J({
            "Breadcrumbs-item": !0,
            "Breadcrumbs-item-current": s
          }),
          children: Qt(o.label) ? o.label : /* @__PURE__ */ O.jsx(
            "button",
            {
              onClick: () => r(o, s),
              "aria-label": typeof o.label == "string" ? o.label : void 0,
              className: "Breadcrumbs-button",
              children: o.label
            }
          )
        }
      ),
      !s && /* @__PURE__ */ O.jsx("div", { "aria-hidden": "true", className: "Breadcrumbs-separator", children: /* @__PURE__ */ O.jsx(Nr, { height: "16", width: "16" }) })
    ] }, o.key);
  }) }) });
};
var Sn = /* @__PURE__ */ ((e) => (e.Medium = "medium", e.Small = "small", e))(Sn || {});
const cr = 100, vl = ({
  progress: e,
  size: t = Sn.Medium,
  className: n,
  id: r,
  indicatorColor: o
}) => /* @__PURE__ */ O.jsx(
  "div",
  {
    role: "progressbar",
    "aria-valuemin": 0,
    "aria-valuenow": Math.min(e, cr),
    "aria-valuemax": cr,
    id: r,
    className: J({
      ProgressBar: !0,
      "ProgressBar-medium": t === Sn.Medium,
      "ProgressBar-small": t === Sn.Small,
      [n || ""]: !!n
    }),
    children: /* @__PURE__ */ O.jsx(
      "div",
      {
        className: "ProgressBar-indicator",
        style: { width: `${Math.min(e, cr)}%`, backgroundColor: o }
      }
    )
  }
);
function Uc(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var $r = { exports: {} }, yn = { exports: {} }, ue = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ro;
function zc() {
  if (Ro)
    return ue;
  Ro = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, v = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, b = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
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
            case o:
            case f:
              return h;
            default:
              switch (h = h && h.$$typeof, h) {
                case c:
                case d:
                case g:
                case v:
                case s:
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
  function E(h) {
    return S(h) === l;
  }
  return ue.AsyncMode = u, ue.ConcurrentMode = l, ue.ContextConsumer = c, ue.ContextProvider = s, ue.Element = t, ue.ForwardRef = d, ue.Fragment = r, ue.Lazy = g, ue.Memo = v, ue.Portal = n, ue.Profiler = i, ue.StrictMode = o, ue.Suspense = f, ue.isAsyncMode = function(h) {
    return E(h) || S(h) === u;
  }, ue.isConcurrentMode = E, ue.isContextConsumer = function(h) {
    return S(h) === c;
  }, ue.isContextProvider = function(h) {
    return S(h) === s;
  }, ue.isElement = function(h) {
    return typeof h == "object" && h !== null && h.$$typeof === t;
  }, ue.isForwardRef = function(h) {
    return S(h) === d;
  }, ue.isFragment = function(h) {
    return S(h) === r;
  }, ue.isLazy = function(h) {
    return S(h) === g;
  }, ue.isMemo = function(h) {
    return S(h) === v;
  }, ue.isPortal = function(h) {
    return S(h) === n;
  }, ue.isProfiler = function(h) {
    return S(h) === i;
  }, ue.isStrictMode = function(h) {
    return S(h) === o;
  }, ue.isSuspense = function(h) {
    return S(h) === f;
  }, ue.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === r || h === l || h === i || h === o || h === f || h === p || typeof h == "object" && h !== null && (h.$$typeof === g || h.$$typeof === v || h.$$typeof === s || h.$$typeof === c || h.$$typeof === d || h.$$typeof === b || h.$$typeof === x || h.$$typeof === w || h.$$typeof === y);
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
var ko;
function qc() {
  return ko || (ko = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, v = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, b = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
    function S(_) {
      return typeof _ == "string" || typeof _ == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      _ === r || _ === l || _ === i || _ === o || _ === f || _ === p || typeof _ == "object" && _ !== null && (_.$$typeof === g || _.$$typeof === v || _.$$typeof === s || _.$$typeof === c || _.$$typeof === d || _.$$typeof === b || _.$$typeof === x || _.$$typeof === w || _.$$typeof === y);
    }
    function E(_) {
      if (typeof _ == "object" && _ !== null) {
        var Ee = _.$$typeof;
        switch (Ee) {
          case t:
            var Be = _.type;
            switch (Be) {
              case u:
              case l:
              case r:
              case i:
              case o:
              case f:
                return Be;
              default:
                var Se = Be && Be.$$typeof;
                switch (Se) {
                  case c:
                  case d:
                  case g:
                  case v:
                  case s:
                    return Se;
                  default:
                    return Ee;
                }
            }
          case n:
            return Ee;
        }
      }
    }
    var h = u, $ = l, R = c, L = s, N = t, ae = d, ie = r, oe = g, Q = v, B = n, te = i, V = o, ne = f, se = !1;
    function ge(_) {
      return se || (se = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), P(_) || E(_) === u;
    }
    function P(_) {
      return E(_) === l;
    }
    function k(_) {
      return E(_) === c;
    }
    function H(_) {
      return E(_) === s;
    }
    function G(_) {
      return typeof _ == "object" && _ !== null && _.$$typeof === t;
    }
    function z(_) {
      return E(_) === d;
    }
    function X(_) {
      return E(_) === r;
    }
    function I(_) {
      return E(_) === g;
    }
    function F(_) {
      return E(_) === v;
    }
    function U(_) {
      return E(_) === n;
    }
    function K(_) {
      return E(_) === i;
    }
    function Y(_) {
      return E(_) === o;
    }
    function he(_) {
      return E(_) === f;
    }
    le.AsyncMode = h, le.ConcurrentMode = $, le.ContextConsumer = R, le.ContextProvider = L, le.Element = N, le.ForwardRef = ae, le.Fragment = ie, le.Lazy = oe, le.Memo = Q, le.Portal = B, le.Profiler = te, le.StrictMode = V, le.Suspense = ne, le.isAsyncMode = ge, le.isConcurrentMode = P, le.isContextConsumer = k, le.isContextProvider = H, le.isElement = G, le.isForwardRef = z, le.isFragment = X, le.isLazy = I, le.isMemo = F, le.isPortal = U, le.isProfiler = K, le.isStrictMode = Y, le.isSuspense = he, le.isValidElementType = S, le.typeOf = E;
  }()), le;
}
var _o;
function Na() {
  return _o || (_o = 1, process.env.NODE_ENV === "production" ? yn.exports = zc() : yn.exports = qc()), yn.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var ur, Do;
function Vc() {
  if (Do)
    return ur;
  Do = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function r(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var s = {}, c = 0; c < 10; c++)
        s["_" + String.fromCharCode(c)] = c;
      var u = Object.getOwnPropertyNames(s).map(function(d) {
        return s[d];
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
  return ur = o() ? Object.assign : function(i, s) {
    for (var c, u = r(i), l, d = 1; d < arguments.length; d++) {
      c = Object(arguments[d]);
      for (var f in c)
        t.call(c, f) && (u[f] = c[f]);
      if (e) {
        l = e(c);
        for (var p = 0; p < l.length; p++)
          n.call(c, l[p]) && (u[l[p]] = c[l[p]]);
      }
    }
    return u;
  }, ur;
}
var lr, Ao;
function Gr() {
  if (Ao)
    return lr;
  Ao = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return lr = e, lr;
}
var fr, No;
function ja() {
  return No || (No = 1, fr = Function.call.bind(Object.prototype.hasOwnProperty)), fr;
}
var dr, jo;
function Gc() {
  if (jo)
    return dr;
  jo = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = Gr(), n = {}, r = ja();
    e = function(i) {
      var s = "Warning: " + i;
      typeof console != "undefined" && console.error(s);
      try {
        throw new Error(s);
      } catch (c) {
      }
    };
  }
  function o(i, s, c, u, l) {
    if (process.env.NODE_ENV !== "production") {
      for (var d in i)
        if (r(i, d)) {
          var f;
          try {
            if (typeof i[d] != "function") {
              var p = Error(
                (u || "React class") + ": " + c + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw p.name = "Invariant Violation", p;
            }
            f = i[d](s, d, u, c, null, t);
          } catch (g) {
            f = g;
          }
          if (f && !(f instanceof Error) && e(
            (u || "React class") + ": type specification of " + c + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof f + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), f instanceof Error && !(f.message in n)) {
            n[f.message] = !0;
            var v = l ? l() : "";
            e(
              "Failed " + c + " type: " + f.message + (v != null ? v : "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, dr = o, dr;
}
var pr, Lo;
function Kc() {
  if (Lo)
    return pr;
  Lo = 1;
  var e = Na(), t = Vc(), n = Gr(), r = ja(), o = Gc(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(c) {
    var u = "Warning: " + c;
    typeof console != "undefined" && console.error(u);
    try {
      throw new Error(u);
    } catch (l) {
    }
  });
  function s() {
    return null;
  }
  return pr = function(c, u) {
    var l = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function f(P) {
      var k = P && (l && P[l] || P[d]);
      if (typeof k == "function")
        return k;
    }
    var p = "<<anonymous>>", v = {
      array: x("array"),
      bigint: x("bigint"),
      bool: x("boolean"),
      func: x("function"),
      number: x("number"),
      object: x("object"),
      string: x("string"),
      symbol: x("symbol"),
      any: w(),
      arrayOf: S,
      element: E(),
      elementType: h(),
      instanceOf: $,
      node: ae(),
      objectOf: L,
      oneOf: R,
      oneOfType: N,
      shape: oe,
      exact: Q
    };
    function g(P, k) {
      return P === k ? P !== 0 || 1 / P === 1 / k : P !== P && k !== k;
    }
    function y(P, k) {
      this.message = P, this.data = k && typeof k == "object" ? k : {}, this.stack = "";
    }
    y.prototype = Error.prototype;
    function b(P) {
      if (process.env.NODE_ENV !== "production")
        var k = {}, H = 0;
      function G(X, I, F, U, K, Y, he) {
        if (U = U || p, Y = Y || F, he !== n) {
          if (u) {
            var _ = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw _.name = "Invariant Violation", _;
          } else if (process.env.NODE_ENV !== "production" && typeof console != "undefined") {
            var Ee = U + ":" + F;
            !k[Ee] && // Avoid spamming the console because they are often not actionable except for lib authors
            H < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + Y + "` prop on `" + U + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), k[Ee] = !0, H++);
          }
        }
        return I[F] == null ? X ? I[F] === null ? new y("The " + K + " `" + Y + "` is marked as required " + ("in `" + U + "`, but its value is `null`.")) : new y("The " + K + " `" + Y + "` is marked as required in " + ("`" + U + "`, but its value is `undefined`.")) : null : P(I, F, U, K, Y);
      }
      var z = G.bind(null, !1);
      return z.isRequired = G.bind(null, !0), z;
    }
    function x(P) {
      function k(H, G, z, X, I, F) {
        var U = H[G], K = V(U);
        if (K !== P) {
          var Y = ne(U);
          return new y(
            "Invalid " + X + " `" + I + "` of type " + ("`" + Y + "` supplied to `" + z + "`, expected ") + ("`" + P + "`."),
            { expectedType: P }
          );
        }
        return null;
      }
      return b(k);
    }
    function w() {
      return b(s);
    }
    function S(P) {
      function k(H, G, z, X, I) {
        if (typeof P != "function")
          return new y("Property `" + I + "` of component `" + z + "` has invalid PropType notation inside arrayOf.");
        var F = H[G];
        if (!Array.isArray(F)) {
          var U = V(F);
          return new y("Invalid " + X + " `" + I + "` of type " + ("`" + U + "` supplied to `" + z + "`, expected an array."));
        }
        for (var K = 0; K < F.length; K++) {
          var Y = P(F, K, z, X, I + "[" + K + "]", n);
          if (Y instanceof Error)
            return Y;
        }
        return null;
      }
      return b(k);
    }
    function E() {
      function P(k, H, G, z, X) {
        var I = k[H];
        if (!c(I)) {
          var F = V(I);
          return new y("Invalid " + z + " `" + X + "` of type " + ("`" + F + "` supplied to `" + G + "`, expected a single ReactElement."));
        }
        return null;
      }
      return b(P);
    }
    function h() {
      function P(k, H, G, z, X) {
        var I = k[H];
        if (!e.isValidElementType(I)) {
          var F = V(I);
          return new y("Invalid " + z + " `" + X + "` of type " + ("`" + F + "` supplied to `" + G + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return b(P);
    }
    function $(P) {
      function k(H, G, z, X, I) {
        if (!(H[G] instanceof P)) {
          var F = P.name || p, U = ge(H[G]);
          return new y("Invalid " + X + " `" + I + "` of type " + ("`" + U + "` supplied to `" + z + "`, expected ") + ("instance of `" + F + "`."));
        }
        return null;
      }
      return b(k);
    }
    function R(P) {
      if (!Array.isArray(P))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), s;
      function k(H, G, z, X, I) {
        for (var F = H[G], U = 0; U < P.length; U++)
          if (g(F, P[U]))
            return null;
        var K = JSON.stringify(P, function(he, _) {
          var Ee = ne(_);
          return Ee === "symbol" ? String(_) : _;
        });
        return new y("Invalid " + X + " `" + I + "` of value `" + String(F) + "` " + ("supplied to `" + z + "`, expected one of " + K + "."));
      }
      return b(k);
    }
    function L(P) {
      function k(H, G, z, X, I) {
        if (typeof P != "function")
          return new y("Property `" + I + "` of component `" + z + "` has invalid PropType notation inside objectOf.");
        var F = H[G], U = V(F);
        if (U !== "object")
          return new y("Invalid " + X + " `" + I + "` of type " + ("`" + U + "` supplied to `" + z + "`, expected an object."));
        for (var K in F)
          if (r(F, K)) {
            var Y = P(F, K, z, X, I + "." + K, n);
            if (Y instanceof Error)
              return Y;
          }
        return null;
      }
      return b(k);
    }
    function N(P) {
      if (!Array.isArray(P))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var k = 0; k < P.length; k++) {
        var H = P[k];
        if (typeof H != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + se(H) + " at index " + k + "."
          ), s;
      }
      function G(z, X, I, F, U) {
        for (var K = [], Y = 0; Y < P.length; Y++) {
          var he = P[Y], _ = he(z, X, I, F, U, n);
          if (_ == null)
            return null;
          _.data && r(_.data, "expectedType") && K.push(_.data.expectedType);
        }
        var Ee = K.length > 0 ? ", expected one of type [" + K.join(", ") + "]" : "";
        return new y("Invalid " + F + " `" + U + "` supplied to " + ("`" + I + "`" + Ee + "."));
      }
      return b(G);
    }
    function ae() {
      function P(k, H, G, z, X) {
        return B(k[H]) ? null : new y("Invalid " + z + " `" + X + "` supplied to " + ("`" + G + "`, expected a ReactNode."));
      }
      return b(P);
    }
    function ie(P, k, H, G, z) {
      return new y(
        (P || "React class") + ": " + k + " type `" + H + "." + G + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + z + "`."
      );
    }
    function oe(P) {
      function k(H, G, z, X, I) {
        var F = H[G], U = V(F);
        if (U !== "object")
          return new y("Invalid " + X + " `" + I + "` of type `" + U + "` " + ("supplied to `" + z + "`, expected `object`."));
        for (var K in P) {
          var Y = P[K];
          if (typeof Y != "function")
            return ie(z, X, I, K, ne(Y));
          var he = Y(F, K, z, X, I + "." + K, n);
          if (he)
            return he;
        }
        return null;
      }
      return b(k);
    }
    function Q(P) {
      function k(H, G, z, X, I) {
        var F = H[G], U = V(F);
        if (U !== "object")
          return new y("Invalid " + X + " `" + I + "` of type `" + U + "` " + ("supplied to `" + z + "`, expected `object`."));
        var K = t({}, H[G], P);
        for (var Y in K) {
          var he = P[Y];
          if (r(P, Y) && typeof he != "function")
            return ie(z, X, I, Y, ne(he));
          if (!he)
            return new y(
              "Invalid " + X + " `" + I + "` key `" + Y + "` supplied to `" + z + "`.\nBad object: " + JSON.stringify(H[G], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(P), null, "  ")
            );
          var _ = he(F, Y, z, X, I + "." + Y, n);
          if (_)
            return _;
        }
        return null;
      }
      return b(k);
    }
    function B(P) {
      switch (typeof P) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !P;
        case "object":
          if (Array.isArray(P))
            return P.every(B);
          if (P === null || c(P))
            return !0;
          var k = f(P);
          if (k) {
            var H = k.call(P), G;
            if (k !== P.entries) {
              for (; !(G = H.next()).done; )
                if (!B(G.value))
                  return !1;
            } else
              for (; !(G = H.next()).done; ) {
                var z = G.value;
                if (z && !B(z[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function te(P, k) {
      return P === "symbol" ? !0 : k ? k["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && k instanceof Symbol : !1;
    }
    function V(P) {
      var k = typeof P;
      return Array.isArray(P) ? "array" : P instanceof RegExp ? "object" : te(k, P) ? "symbol" : k;
    }
    function ne(P) {
      if (typeof P == "undefined" || P === null)
        return "" + P;
      var k = V(P);
      if (k === "object") {
        if (P instanceof Date)
          return "date";
        if (P instanceof RegExp)
          return "regexp";
      }
      return k;
    }
    function se(P) {
      var k = ne(P);
      switch (k) {
        case "array":
        case "object":
          return "an " + k;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + k;
        default:
          return k;
      }
    }
    function ge(P) {
      return !P.constructor || !P.constructor.name ? p : P.constructor.name;
    }
    return v.checkPropTypes = o, v.resetWarningCache = o.resetWarningCache, v.PropTypes = v, v;
  }, pr;
}
var vr, Fo;
function Yc() {
  if (Fo)
    return vr;
  Fo = 1;
  var e = Gr();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, vr = function() {
    function r(s, c, u, l, d, f) {
      if (f !== e) {
        var p = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw p.name = "Invariant Violation", p;
      }
    }
    r.isRequired = r;
    function o() {
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
      arrayOf: o,
      element: r,
      elementType: r,
      instanceOf: o,
      node: r,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: n,
      resetWarningCache: t
    };
    return i.PropTypes = i, i;
  }, vr;
}
if (process.env.NODE_ENV !== "production") {
  var Hc = Na(), Xc = !0;
  $r.exports = Kc()(Hc.isElement, Xc);
} else
  $r.exports = Yc()();
var pe = $r.exports;
const La = /* @__PURE__ */ pi(pe);
var Rr = "data-focus-lock", Fa = "data-focus-lock-disabled", Jc = "data-no-focus-lock", Zc = "data-autofocus-inside", Qc = "data-no-autofocus", mr = {
  width: "1px",
  height: "0px",
  padding: 0,
  overflow: "hidden",
  position: "fixed",
  top: "1px",
  left: "1px"
};
process.env.NODE_ENV !== "production" && La.node;
var Ma = qr({}, function(e) {
  var t = e.target, n = e.currentTarget;
  return {
    target: t,
    currentTarget: n
  };
}), Ia = qr(), eu = qr(), tu = Ca({
  async: !0
  // focus-lock sidecar is not required on the server
  // however, it might be required for JSDOM tests
  // ssr: true,
}), nu = [], Kr = /* @__PURE__ */ A.forwardRef(function(t, n) {
  var r, o = A.useState(), i = o[0], s = o[1], c = A.useRef(), u = A.useRef(!1), l = A.useRef(null), d = t.children, f = t.disabled, p = t.noFocusGuards, v = t.persistentFocus, g = t.crossFrame, y = t.autoFocus, b = t.allowTextSelection, x = t.group, w = t.className, S = t.whiteList, E = t.hasPositiveIndices, h = t.shards, $ = h === void 0 ? nu : h, R = t.as, L = R === void 0 ? "div" : R, N = t.lockProps, ae = N === void 0 ? {} : N, ie = t.sideCar, oe = t.returnFocus, Q = t.focusOptions, B = t.onActivation, te = t.onDeactivation, V = A.useState({}), ne = V[0], se = A.useCallback(function() {
    l.current = l.current || document && document.activeElement, c.current && B && B(c.current), u.current = !0;
  }, [B]), ge = A.useCallback(function() {
    u.current = !1, te && te(c.current);
  }, [te]);
  de(function() {
    f || (l.current = null);
  }, []);
  var P = A.useCallback(function(U) {
    var K = l.current;
    if (K && K.focus) {
      var Y = typeof oe == "function" ? oe(K) : oe;
      if (Y) {
        var he = typeof Y == "object" ? Y : void 0;
        l.current = null, U ? Promise.resolve().then(function() {
          return K.focus(he);
        }) : K.focus(he);
      }
    }
  }, [oe]), k = A.useCallback(function(U) {
    u.current && Ma.useMedium(U);
  }, []), H = Ia.useMedium, G = A.useCallback(function(U) {
    c.current !== U && (c.current = U, s(U));
  }, []);
  process.env.NODE_ENV !== "production" && (typeof b != "undefined" && console.warn("React-Focus-Lock: allowTextSelection is deprecated and enabled by default"), A.useEffect(function() {
    !c.current && typeof L != "string" && console.error("FocusLock: could not obtain ref to internal node");
  }, []));
  var z = Ce((r = {}, r[Fa] = f && "disabled", r[Rr] = x, r), ae), X = p !== !0, I = X && p !== "tail", F = ba([n, G]);
  return /* @__PURE__ */ A.createElement(A.Fragment, null, X && [
    // nearest focus guard
    /* @__PURE__ */ A.createElement("div", {
      key: "guard-first",
      "data-focus-guard": !0,
      tabIndex: f ? -1 : 0,
      style: mr
    }),
    // first tabbed element guard
    E ? /* @__PURE__ */ A.createElement("div", {
      key: "guard-nearest",
      "data-focus-guard": !0,
      tabIndex: f ? -1 : 1,
      style: mr
    }) : null
  ], !f && /* @__PURE__ */ A.createElement(ie, {
    id: ne,
    sideCar: tu,
    observed: i,
    disabled: f,
    persistentFocus: v,
    crossFrame: g,
    autoFocus: y,
    whiteList: S,
    shards: $,
    onActivation: se,
    onDeactivation: ge,
    returnFocus: P,
    focusOptions: Q
  }), /* @__PURE__ */ A.createElement(L, Ce({
    ref: F
  }, z, {
    className: w,
    onBlur: H,
    onFocus: k
  }), d), I && /* @__PURE__ */ A.createElement("div", {
    "data-focus-guard": !0,
    tabIndex: f ? -1 : 0,
    style: mr
  }));
});
Kr.propTypes = process.env.NODE_ENV !== "production" ? {
  children: pe.node,
  disabled: pe.bool,
  returnFocus: pe.oneOfType([pe.bool, pe.object, pe.func]),
  focusOptions: pe.object,
  noFocusGuards: pe.bool,
  hasPositiveIndices: pe.bool,
  allowTextSelection: pe.bool,
  autoFocus: pe.bool,
  persistentFocus: pe.bool,
  crossFrame: pe.bool,
  group: pe.string,
  className: pe.string,
  whiteList: pe.func,
  shards: pe.arrayOf(pe.any),
  as: pe.oneOfType([pe.string, pe.func, pe.object]),
  lockProps: pe.object,
  onActivation: pe.func,
  onDeactivation: pe.func,
  sideCar: pe.any.isRequired
} : {};
Kr.defaultProps = {
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
const Ba = Kr;
function kr(e, t) {
  return kr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, kr(e, t);
}
function ru(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, kr(e, t);
}
function rn(e) {
  "@babel/helpers - typeof";
  return rn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, rn(e);
}
function ou(e, t) {
  if (rn(e) !== "object" || e === null)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (rn(r) !== "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function au(e) {
  var t = ou(e, "string");
  return rn(t) === "symbol" ? t : String(t);
}
function iu(e, t, n) {
  return t = au(t), t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function su(e, t) {
  if (process.env.NODE_ENV !== "production") {
    if (typeof e != "function")
      throw new Error("Expected reducePropsToState to be a function.");
    if (typeof t != "function")
      throw new Error("Expected handleStateChangeOnClient to be a function.");
  }
  function n(r) {
    return r.displayName || r.name || "Component";
  }
  return function(o) {
    if (process.env.NODE_ENV !== "production" && typeof o != "function")
      throw new Error("Expected WrappedComponent to be a React component.");
    var i = [], s;
    function c() {
      s = e(i.map(function(l) {
        return l.props;
      })), t(s);
    }
    var u = /* @__PURE__ */ function(l) {
      ru(d, l);
      function d() {
        return l.apply(this, arguments) || this;
      }
      d.peek = function() {
        return s;
      };
      var f = d.prototype;
      return f.componentDidMount = function() {
        i.push(this), c();
      }, f.componentDidUpdate = function() {
        c();
      }, f.componentWillUnmount = function() {
        var v = i.indexOf(this);
        i.splice(v, 1), c();
      }, f.render = function() {
        return /* @__PURE__ */ Te.createElement(o, this.props);
      }, d;
    }(li);
    return iu(u, "displayName", "SideEffect(" + n(o) + ")"), u;
  };
}
var qe = function(e) {
  for (var t = Array(e.length), n = 0; n < e.length; ++n)
    t[n] = e[n];
  return t;
}, _n = function(e) {
  return Array.isArray(e) ? e : [e];
}, Wa = function(e) {
  return Array.isArray(e) ? e[0] : e;
}, cu = function(e) {
  if (e.nodeType !== Node.ELEMENT_NODE)
    return !1;
  var t = window.getComputedStyle(e, null);
  return !t || !t.getPropertyValue ? !1 : t.getPropertyValue("display") === "none" || t.getPropertyValue("visibility") === "hidden";
}, Ua = function(e) {
  return e.parentNode && e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    e.parentNode.host
  ) : e.parentNode;
}, za = function(e) {
  return e === document || e && e.nodeType === Node.DOCUMENT_NODE;
}, uu = function(e, t) {
  return !e || za(e) || !cu(e) && t(Ua(e));
}, qa = function(e, t) {
  var n = e.get(t);
  if (n !== void 0)
    return n;
  var r = uu(t, qa.bind(void 0, e));
  return e.set(t, r), r;
}, lu = function(e, t) {
  return e && !za(e) ? pu(e) ? t(Ua(e)) : !1 : !0;
}, Va = function(e, t) {
  var n = e.get(t);
  if (n !== void 0)
    return n;
  var r = lu(t, Va.bind(void 0, e));
  return e.set(t, r), r;
}, Ga = function(e) {
  return e.dataset;
}, fu = function(e) {
  return e.tagName === "BUTTON";
}, Ka = function(e) {
  return e.tagName === "INPUT";
}, Ya = function(e) {
  return Ka(e) && e.type === "radio";
}, du = function(e) {
  return !((Ka(e) || fu(e)) && (e.type === "hidden" || e.disabled));
}, pu = function(e) {
  var t = e.getAttribute(Qc);
  return ![!0, "true", ""].includes(t);
}, Yr = function(e) {
  var t;
  return !!(e && (!((t = Ga(e)) === null || t === void 0) && t.focusGuard));
}, Dn = function(e) {
  return !Yr(e);
}, vu = function(e) {
  return !!e;
}, mu = function(e, t) {
  var n = e.tabIndex - t.tabIndex, r = e.index - t.index;
  if (n) {
    if (!e.tabIndex)
      return 1;
    if (!t.tabIndex)
      return -1;
  }
  return n || r;
}, Ha = function(e, t, n) {
  return qe(e).map(function(r, o) {
    return {
      node: r,
      index: o,
      tabIndex: n && r.tabIndex === -1 ? (r.dataset || {}).focusGuard ? 0 : -1 : r.tabIndex
    };
  }).filter(function(r) {
    return !t || r.tabIndex >= 0;
  }).sort(mu);
}, hu = [
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
], Hr = hu.join(","), gu = "".concat(Hr, ", [data-focus-guard]"), Xa = function(e, t) {
  return qe((e.shadowRoot || e).children).reduce(function(n, r) {
    return n.concat(r.matches(t ? gu : Hr) ? [r] : [], Xa(r));
  }, []);
}, yu = function(e, t) {
  var n;
  return e instanceof HTMLIFrameElement && (!((n = e.contentDocument) === null || n === void 0) && n.body) ? Fn([e.contentDocument.body], t) : [e];
}, Fn = function(e, t) {
  return e.reduce(function(n, r) {
    var o, i = Xa(r, t), s = (o = []).concat.apply(o, i.map(function(c) {
      return yu(c, t);
    }));
    return n.concat(
      // add all tabbables inside and within shadow DOMs in DOM order
      s,
      // add if node is tabbable itself
      r.parentNode ? qe(r.parentNode.querySelectorAll(Hr)).filter(function(c) {
        return c === r;
      }) : []
    );
  }, []);
}, bu = function(e) {
  var t = e.querySelectorAll("[".concat(Zc, "]"));
  return qe(t).map(function(n) {
    return Fn([n]);
  }).reduce(function(n, r) {
    return n.concat(r);
  }, []);
}, Xr = function(e, t) {
  return qe(e).filter(function(n) {
    return qa(t, n);
  }).filter(function(n) {
    return du(n);
  });
}, Mo = function(e, t) {
  return t === void 0 && (t = /* @__PURE__ */ new Map()), qe(e).filter(function(n) {
    return Va(t, n);
  });
}, _r = function(e, t, n) {
  return Ha(Xr(Fn(e, n), t), !0, n);
}, Io = function(e, t) {
  return Ha(Xr(Fn(e), t), !1);
}, wu = function(e, t) {
  return Xr(bu(e), t);
}, Pt = function(e, t) {
  return e.shadowRoot ? Pt(e.shadowRoot, t) : Object.getPrototypeOf(e).contains !== void 0 && Object.getPrototypeOf(e).contains.call(e, t) ? !0 : qe(e.children).some(function(n) {
    var r;
    if (n instanceof HTMLIFrameElement) {
      var o = (r = n.contentDocument) === null || r === void 0 ? void 0 : r.body;
      return o ? Pt(o, t) : !1;
    }
    return Pt(n, t);
  });
}, xu = function(e) {
  for (var t = /* @__PURE__ */ new Set(), n = e.length, r = 0; r < n; r += 1)
    for (var o = r + 1; o < n; o += 1) {
      var i = e[r].compareDocumentPosition(e[o]);
      (i & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0 && t.add(o), (i & Node.DOCUMENT_POSITION_CONTAINS) > 0 && t.add(r);
    }
  return e.filter(function(s, c) {
    return !t.has(c);
  });
}, Ja = function(e) {
  return e.parentNode ? Ja(e.parentNode) : e;
}, Jr = function(e) {
  var t = _n(e);
  return t.filter(Boolean).reduce(function(n, r) {
    var o = r.getAttribute(Rr);
    return n.push.apply(n, o ? xu(qe(Ja(r).querySelectorAll("[".concat(Rr, '="').concat(o, '"]:not([').concat(Fa, '="disabled"])')))) : [r]), n;
  }, []);
}, Cu = function(e) {
  try {
    return e();
  } catch (t) {
    return;
  }
}, on = function(e) {
  if (e === void 0 && (e = document), !(!e || !e.activeElement)) {
    var t = e.activeElement;
    return t.shadowRoot ? on(t.shadowRoot) : t instanceof HTMLIFrameElement && Cu(function() {
      return t.contentWindow.document;
    }) ? on(t.contentWindow.document) : t;
  }
}, Eu = function(e, t) {
  return e === t;
}, Su = function(e, t) {
  return !!qe(e.querySelectorAll("iframe")).some(function(n) {
    return Eu(n, t);
  });
}, Za = function(e, t) {
  return t === void 0 && (t = on(Wa(e).ownerDocument)), !t || t.dataset && t.dataset.focusGuard ? !1 : Jr(e).some(function(n) {
    return Pt(n, t) || Su(n, t);
  });
}, Ou = function(e) {
  e === void 0 && (e = document);
  var t = on(e);
  return t ? qe(e.querySelectorAll("[".concat(Jc, "]"))).some(function(n) {
    return Pt(n, t);
  }) : !1;
}, Pu = function(e, t) {
  return t.filter(Ya).filter(function(n) {
    return n.name === e.name;
  }).filter(function(n) {
    return n.checked;
  })[0] || e;
}, Zr = function(e, t) {
  return Ya(e) && e.name ? Pu(e, t) : e;
}, Tu = function(e) {
  var t = /* @__PURE__ */ new Set();
  return e.forEach(function(n) {
    return t.add(Zr(n, e));
  }), e.filter(function(n) {
    return t.has(n);
  });
}, Bo = function(e) {
  return e[0] && e.length > 1 ? Zr(e[0], e) : e[0];
}, Wo = function(e, t) {
  return e.length > 1 ? e.indexOf(Zr(e[t], e)) : t;
}, Qa = "NEW_FOCUS", $u = function(e, t, n, r) {
  var o = e.length, i = e[0], s = e[o - 1], c = Yr(n);
  if (!(n && e.indexOf(n) >= 0)) {
    var u = n !== void 0 ? t.indexOf(n) : -1, l = r ? t.indexOf(r) : u, d = r ? e.indexOf(r) : -1, f = u - l, p = t.indexOf(i), v = t.indexOf(s), g = Tu(t), y = n !== void 0 ? g.indexOf(n) : -1, b = y - (r ? g.indexOf(r) : u), x = Wo(e, 0), w = Wo(e, o - 1);
    if (u === -1 || d === -1)
      return Qa;
    if (!f && d >= 0)
      return d;
    if (u <= p && c && Math.abs(f) > 1)
      return w;
    if (u >= v && c && Math.abs(f) > 1)
      return x;
    if (f && Math.abs(b) > 1)
      return d;
    if (u <= p)
      return w;
    if (u > v)
      return x;
    if (f)
      return Math.abs(f) > 1 ? d : (o + d + f) % o;
  }
}, Ru = function(e) {
  return function(t) {
    var n, r = (n = Ga(t)) === null || n === void 0 ? void 0 : n.autofocus;
    return (
      // @ts-expect-error
      t.autofocus || //
      r !== void 0 && r !== "false" || //
      e.indexOf(t) >= 0
    );
  };
}, ku = function(e, t, n) {
  var r = e.map(function(i) {
    var s = i.node;
    return s;
  }), o = Mo(r.filter(Ru(n)));
  return o && o.length ? Bo(o) : Bo(Mo(t));
}, Dr = function(e, t) {
  return t === void 0 && (t = []), t.push(e), e.parentNode && Dr(e.parentNode.host || e.parentNode, t), t;
}, hr = function(e, t) {
  for (var n = Dr(e), r = Dr(t), o = 0; o < n.length; o += 1) {
    var i = n[o];
    if (r.indexOf(i) >= 0)
      return i;
  }
  return !1;
}, ei = function(e, t, n) {
  var r = _n(e), o = _n(t), i = r[0], s = !1;
  return o.filter(Boolean).forEach(function(c) {
    s = hr(s || c, c) || s, n.filter(Boolean).forEach(function(u) {
      var l = hr(i, u);
      l && (!s || Pt(l, s) ? s = l : s = hr(l, s));
    });
  }), s;
}, _u = function(e, t) {
  return e.reduce(function(n, r) {
    return n.concat(wu(r, t));
  }, []);
}, Du = function(e, t) {
  var n = /* @__PURE__ */ new Map();
  return t.forEach(function(r) {
    return n.set(r.node, r);
  }), e.map(function(r) {
    return n.get(r);
  }).filter(vu);
}, Au = function(e, t) {
  var n = on(_n(e).length > 0 ? document : Wa(e).ownerDocument), r = Jr(e).filter(Dn), o = ei(n || e, e, r), i = /* @__PURE__ */ new Map(), s = Io(r, i), c = _r(r, i).filter(function(v) {
    var g = v.node;
    return Dn(g);
  });
  if (!(!c[0] && (c = s, !c[0]))) {
    var u = Io([o], i).map(function(v) {
      var g = v.node;
      return g;
    }), l = Du(u, c), d = l.map(function(v) {
      var g = v.node;
      return g;
    }), f = $u(d, u, n, t);
    if (f === Qa) {
      var p = ku(s, d, _u(r, i));
      if (p)
        return { node: p };
      console.warn("focus-lock: cannot find any node to move focus into");
      return;
    }
    return f === void 0 ? f : l[f];
  }
}, Nu = function(e) {
  var t = Jr(e).filter(Dn), n = ei(e, e, t), r = /* @__PURE__ */ new Map(), o = _r([n], r, !0), i = _r(t, r).filter(function(s) {
    var c = s.node;
    return Dn(c);
  }).map(function(s) {
    var c = s.node;
    return c;
  });
  return o.map(function(s) {
    var c = s.node, u = s.index;
    return {
      node: c,
      index: u,
      lockItem: i.indexOf(c) >= 0,
      guard: Yr(c)
    };
  });
}, ju = function(e, t) {
  "focus" in e && e.focus(t), "contentWindow" in e && e.contentWindow && e.contentWindow.focus();
}, gr = 0, yr = !1, ti = function(e, t, n) {
  n === void 0 && (n = {});
  var r = Au(e, t);
  if (!yr && r) {
    if (gr > 2) {
      console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"), yr = !0, setTimeout(function() {
        yr = !1;
      }, 1);
      return;
    }
    gr++, ju(r.node, n.focusOptions), gr--;
  }
};
function Qr(e) {
  setTimeout(e, 1);
}
var Lu = function() {
  return document && document.activeElement === document.body;
}, Fu = function() {
  return Lu() || Ou();
}, Tt = null, Et = null, $t = null, an = !1, Mu = function() {
  return !0;
}, Iu = function(t) {
  return (Tt.whiteList || Mu)(t);
}, Bu = function(t, n) {
  $t = {
    observerNode: t,
    portaledElement: n
  };
}, Wu = function(t) {
  return $t && $t.portaledElement === t;
};
function Uo(e, t, n, r) {
  var o = null, i = e;
  do {
    var s = r[i];
    if (s.guard)
      s.node.dataset.focusAutoGuard && (o = s);
    else if (s.lockItem) {
      if (i !== e)
        return;
      o = null;
    } else
      break;
  } while ((i += n) !== t);
  o && (o.node.tabIndex = 0);
}
var Uu = function(t) {
  return t && "current" in t ? t.current : t;
}, zu = function(t) {
  return t ? !!an : an === "meanwhile";
}, qu = function e(t, n, r) {
  return n && // find host equal to active element and check nested active element
  (n.host === t && (!n.activeElement || r.contains(n.activeElement)) || n.parentNode && e(t, n.parentNode, r));
}, Vu = function(t, n) {
  return n.some(function(r) {
    return qu(t, r, r);
  });
}, An = function() {
  var t = !1;
  if (Tt) {
    var n = Tt, r = n.observed, o = n.persistentFocus, i = n.autoFocus, s = n.shards, c = n.crossFrame, u = n.focusOptions, l = r || $t && $t.portaledElement, d = document && document.activeElement;
    if (l) {
      var f = [l].concat(s.map(Uu).filter(Boolean));
      if ((!d || Iu(d)) && (o || zu(c) || !Fu() || !Et && i) && (l && !// active element is "inside" working area
      (Za(f) || // check for shadow-dom contained elements
      d && Vu(d, f) || Wu(d)) && (document && !Et && d && !i ? (d.blur && d.blur(), document.body.focus()) : (t = ti(f, Et, {
        focusOptions: u
      }), $t = {})), an = !1, Et = document && document.activeElement), document) {
        var p = document && document.activeElement, v = Nu(f), g = v.map(function(y) {
          var b = y.node;
          return b;
        }).indexOf(p);
        g > -1 && (v.filter(function(y) {
          var b = y.guard, x = y.node;
          return b && x.dataset.focusAutoGuard;
        }).forEach(function(y) {
          var b = y.node;
          return b.removeAttribute("tabIndex");
        }), Uo(g, v.length, 1, v), Uo(g, -1, -1, v));
      }
    }
  }
  return t;
}, ni = function(t) {
  An() && t && (t.stopPropagation(), t.preventDefault());
}, eo = function() {
  return Qr(An);
}, Gu = function(t) {
  var n = t.target, r = t.currentTarget;
  r.contains(n) || Bu(r, n);
}, Ku = function() {
  return null;
};
process.env.NODE_ENV !== "production" && La.node.isRequired;
var ri = function() {
  an = "just", Qr(function() {
    an = "meanwhile";
  });
}, Yu = function() {
  document.addEventListener("focusin", ni), document.addEventListener("focusout", eo), window.addEventListener("blur", ri);
}, Hu = function() {
  document.removeEventListener("focusin", ni), document.removeEventListener("focusout", eo), window.removeEventListener("blur", ri);
};
function Xu(e) {
  return e.filter(function(t) {
    var n = t.disabled;
    return !n;
  });
}
function Ju(e) {
  var t = e.slice(-1)[0];
  t && !Tt && Yu();
  var n = Tt, r = n && t && t.id === n.id;
  Tt = t, n && !r && (n.onDeactivation(), e.filter(function(o) {
    var i = o.id;
    return i === n.id;
  }).length || n.returnFocus(!t)), t ? (Et = null, (!r || n.observed !== t.observed) && t.onActivation(), An(), Qr(An)) : (Hu(), Et = null);
}
Ma.assignSyncMedium(Gu);
Ia.assignMedium(eo);
eu.assignMedium(function(e) {
  return e({
    moveFocusInside: ti,
    focusInside: Za
  });
});
const Zu = su(Xu, Ju)(Ku);
var oi = /* @__PURE__ */ A.forwardRef(function(t, n) {
  return /* @__PURE__ */ A.createElement(Ba, Ce({
    sideCar: Zu,
    ref: n
  }, t));
}), ai = Ba.propTypes || {};
ai.sideCar;
var Qu = Uc(ai, ["sideCar"]);
oi.propTypes = process.env.NODE_ENV !== "production" ? Qu : {};
const el = oi;
const tl = (e) => {
  const { children: t, open: n, onOpenChange: r, disableBackdropClick: o, disableEscapeKey: i, contentClassName: s } = e, [c, u] = re(!0), l = ye(null);
  return de(() => (c && n && (document.body.style.overflow = "hidden"), () => {
    document.body.style.overflow = "visible";
  }), [c, n]), de(() => {
    if (o)
      return;
    const d = (f) => {
      !l.current || l.current.contains(f.target) || (r(), u(!1));
    };
    return document.addEventListener("mousedown", d), document.addEventListener("touchstart", d), () => {
      document.removeEventListener("mousedown", d), document.removeEventListener("touchstart", d);
    };
  }, [o, r]), de(() => {
    if (i)
      return;
    const d = (f) => {
      f.key === "Escape" && (r(), u(!1));
    };
    return document.addEventListener("keydown", d), () => {
      document.removeEventListener("keydown", d);
    };
  }, [o, i, r]), /* @__PURE__ */ O.jsx("div", { className: "Modal-backdrop", children: /* @__PURE__ */ O.jsx(
    "div",
    {
      ref: l,
      "aria-modal": "true",
      role: "dialog",
      className: J({
        "Modal-content": !0,
        [s || ""]: !!s
      }),
      children: t
    }
  ) });
}, ml = (e) => {
  const {
    open: t,
    onOpenChange: n,
    children: r,
    disableBackdropClick: o = !1,
    disableEscapeKey: i = !1,
    contentClassName: s
  } = e;
  return t ? /* @__PURE__ */ O.jsx(O.Fragment, { children: di(
    /* @__PURE__ */ O.jsx(el, { children: /* @__PURE__ */ O.jsx("div", { className: "Modal", children: /* @__PURE__ */ O.jsx(
      tl,
      {
        open: t,
        onOpenChange: n,
        disableBackdropClick: o,
        disableEscapeKey: i,
        contentClassName: s,
        children: r
      }
    ) }) }),
    document.body
  ) }) : null;
};
const zo = "...";
var On = /* @__PURE__ */ ((e) => (e.ROUNDED = "rounded", e.SQUARED = "squared", e))(On || {});
const hl = (e) => {
  const {
    currentPage: t,
    onPageChange: n,
    pageCount: r,
    boundaryCount: o = 1,
    siblingCount: i = 1,
    buttonAriaLabel: s = "Go to page",
    nextButtonAriaLabel: c = "Go to next page",
    prevButtonAriaLabel: u = "Go to previous page",
    variant: l = On.SQUARED
  } = e, d = (w, S) => {
    const E = S - w + 1;
    return Array.from({ length: E }, (h, $) => w + $);
  }, f = d(1, Math.min(o, r)), p = d(Math.max(r - o + 1, o + 1), r), v = Math.max(
    Math.min(t - i, r - o - i * 2 - 1),
    o + 2
  ), g = Math.min(
    Math.max(t + i, o + i * 2 + 2),
    p.length > 0 ? p[0] - 2 : r - 1
  ), y = () => v > o + 2 ? [zo] : o + 1 < r - o ? [o + 1] : [], b = () => g < r - o - 1 ? [zo] : r - o > o ? [r - o] : [], x = [
    ...f,
    ...y(),
    ...d(v, g),
    ...b(),
    ...p
  ];
  return /* @__PURE__ */ O.jsxs("div", { className: "Pagination", role: "pagination", children: [
    /* @__PURE__ */ O.jsx(
      "button",
      {
        className: "Pagination-arrow-button",
        "aria-label": u,
        "aria-controls": "prev",
        disabled: t === 1,
        "aria-disabled": t === 1,
        onClick: () => n(t - 1),
        children: /* @__PURE__ */ O.jsx(Yo, {})
      }
    ),
    x.map((w, S) => /* @__PURE__ */ O.jsx(
      "button",
      fe(q({
        className: J({
          "Pagination-number-button": !0,
          "Pagination-number-button-squared": l === On.SQUARED,
          "Pagination-number-button-rounded": l === On.ROUNDED
        })
      }, typeof w == "number" ? {
        "aria-current": t === w,
        "aria-label": `${s} ${w}`,
        onClick: () => n(w)
      } : {}), {
        children: w
      }),
      S
    )),
    /* @__PURE__ */ O.jsx(
      "button",
      {
        "aria-label": c,
        className: "Pagination-arrow-button",
        "aria-controls": "next",
        disabled: t === r,
        "aria-disabled": t === r,
        onClick: () => n(t + 1),
        children: /* @__PURE__ */ O.jsx(Nr, {})
      }
    )
  ] });
};
const gl = (e) => {
  const {
    id: t,
    ariaLabel: n,
    name: r,
    className: o,
    value: i = 0,
    disabled: s,
    min: c = 0,
    max: u = 100,
    onChange: l
  } = e, d = (p) => {
    l && l(+p.target.value);
  }, f = (p) => Math.min(100, Math.max(0, (p - c) / (u - c) * 100));
  return /* @__PURE__ */ O.jsx(
    "div",
    {
      className: J({
        Slider: !0,
        [o || ""]: !!o
      }),
      children: /* @__PURE__ */ O.jsxs("div", { className: "Slider-progress", children: [
        /* @__PURE__ */ O.jsx(
          "div",
          {
            className: "Slider-track",
            style: { width: `${i && f(i)}%` }
          }
        ),
        /* @__PURE__ */ O.jsx(
          "input",
          {
            id: t,
            name: r,
            "aria-label": n,
            type: "range",
            value: i,
            min: c,
            max: u,
            disabled: s,
            className: J({
              "Slider-range": !0,
              "Slider-thumb-disabled": s
            }),
            onChange: d
          }
        )
      ] })
    }
  );
};
var Jt = /* @__PURE__ */ ((e) => (e.Light = "light", e.Dark = "dark", e.Green = "green", e))(Jt || {}), Zt = /* @__PURE__ */ ((e) => (e.Small = "small", e.Medium = "medium", e.Large = "large", e))(Zt || {}), Pn = /* @__PURE__ */ ((e) => (e.row = "row", e.column = "column", e))(Pn || {});
const nl = ({
  options: e = [],
  value: t = ((p) => (p = e[0]) == null ? void 0 : p.value)(),
  onChange: n,
  disabled: r = !1,
  name: o,
  size: i = Zt.Medium,
  theme: s = Jt.Green,
  error: c = !1,
  variant: u = Pn.row,
  className: l = "",
  ariaLabel: d = "RadioGroup",
  gap: f = 12
}) => {
  const [v, g] = re(t), y = (x) => {
    v !== x.value && (g(x.value), n && n(x.value));
  }, b = (x, w) => {
    (x.key === "Enter" || x.key === " ") && !r && y(w);
  };
  return !isNaN(t) && v !== t && g(t), /* @__PURE__ */ O.jsx(
    "div",
    {
      style: { gap: f + "px" },
      "aria-label": d,
      className: J({
        RadioGroup: !0,
        "RadioGroup-disabled": r,
        "RadioGroup-row": u === Pn.row,
        "RadioGroup-column": u === Pn.column,
        "RadioGroup-dark": s === Jt.Dark,
        "RadioGroup-green": s === Jt.Green,
        "RadioGroup-light": s === Jt.Light,
        [l || ""]: !!l
      }),
      children: e.map((x) => {
        const w = v === x.value;
        return /* @__PURE__ */ O.jsxs(
          "label",
          {
            className: J({
              "RadioGroup-button": !0,
              "RadioGroup-button-checked": w,
              "RadioGroup-button-unchecked": !w,
              "RadioGroup-button-disabled": x.disabled || r,
              "RadioGroup-button-error": c,
              [x.className || ""]: !!x.className
            }),
            children: [
              /* @__PURE__ */ O.jsx(
                "input",
                {
                  type: "radio",
                  checked: w,
                  className: J({
                    "Radio-input": !0,
                    "Radio-input-order-1": x.labelOrder === "left",
                    "Radio-input-large": i === Zt.Large,
                    "Radio-input-medium": i === Zt.Medium,
                    "Radio-input-small": i === Zt.Small
                  }),
                  onChange: () => y(x),
                  tabIndex: -1,
                  name: o,
                  "aria-label": x.ariaLabel || "Radio",
                  disabled: x.disabled || r
                }
              ),
              x.label && /* @__PURE__ */ O.jsx(
                "div",
                {
                  onKeyDown: (S) => b(S, x),
                  tabIndex: x.disabled ? void 0 : 0,
                  className: J({
                    "RadioGroup-button-label": !0,
                    "RadioGroup-button-label-order-0": x.labelOrder === "left"
                  }),
                  style: { order: x.labelOrder },
                  children: x.label
                }
              )
            ]
          },
          x.key
        );
      })
    }
  );
};
nl.displayName = "RadioGroup";
var xe = /* @__PURE__ */ ((e) => (e.DisplayOne = "display-1", e.DisplayTwo = "display-2", e.HeadingOne = "heading-1", e.HeadingTwo = "heading-2", e.HeadingTwoMedium = "heading-2-medium", e.HeadingThree = "heading-3", e.HeadingThreeMedium = "heading-3-medium", e.HeadingRegular = "heading-regular", e.HeadingSubtitle = "heading-subtitle", e.HeadingSubtitleMedium = "heading-subtitle-medium", e.HeadingSmall = "heading-small", e.BodyBig = "body-big", e.BodyNormal = "body-normal", e.BodySmall = "body-small", e.BodyParagraph = "body-paragraph", e.AllCaptions = "all-captions", e.Caption = "caption", e))(xe || {});
const rl = Te.forwardRef((e, t) => {
  const s = e, { variant: n = xe.BodyNormal, children: r, className: o } = s, i = we(s, ["variant", "children", "className"]);
  return /* @__PURE__ */ O.jsx(
    "div",
    fe(q({}, i), {
      ref: t,
      className: J({
        Typography: !0,
        "Typography-display_1": n === xe.DisplayOne,
        "Typography-display_2": n === xe.DisplayTwo,
        "Typography-heading_1": n === xe.HeadingOne,
        "Typography-heading_2": n === xe.HeadingTwo,
        "Typography-heading_2-medium": n === xe.HeadingTwoMedium,
        "Typography-heading_3": n === xe.HeadingThree,
        "Typography-heading_3-medium": n === xe.HeadingThreeMedium,
        "Typography-heading-regular": n === xe.HeadingRegular,
        "Typography-heading-subtitle": n === xe.HeadingSubtitle,
        "Typography-heading-subtitle-medium": n === xe.HeadingSubtitleMedium,
        "Typography-heading-small": n === xe.HeadingSmall,
        "Typography-body-big": n === xe.BodyBig,
        "Typography-body-normal": n === xe.BodyNormal,
        "Typography-body-small": n === xe.BodySmall,
        "Typography-body-paragraph": n === xe.BodyParagraph,
        "Typography-caption": n === xe.Caption,
        "Typography-all-captions": n === xe.AllCaptions,
        [o || ""]: !!o
      }),
      children: r
    })
  );
});
rl.displayName = "Typography";
export {
  Ei as Accordion,
  lt as BUTTON_COLOR,
  Ve as BUTTON_SIZE,
  hi as BUTTON_TYPE,
  Ge as BUTTON_VARIANT,
  pl as Breadcrumbs,
  gi as Button,
  xt as CHECKBOX_SIZE,
  Ae as CHECKBOX_THEME,
  xi as Checkbox,
  Pe as DROPDOWN_SIZE,
  Ct as DROPDOWN_TYPE,
  Wc as Dropdown,
  wt as INPUT_SIZE,
  Ht as INPUT_THEME,
  ft as INPUT_TYPE,
  Si as IconButton,
  wi as Input,
  ml as Modal,
  On as PAGINATION_VARIANTS,
  Sn as PROGRESS_BAR_SIZE,
  hl as Pagination,
  Bc as Popover,
  vl as ProgressBar,
  Zt as RADIO_GROUP_SIZE,
  Jt as RADIO_GROUP_THEME,
  Pn as RADIO_GROUP_VARIANT,
  nl as RadioGroup,
  Ke as SWITCH_SIZE,
  Xt as SWITCH_TAGS_SIZE,
  wn as SWITCH_TAGS_VARIANT,
  We as SWITCH_THEME,
  gl as Slider,
  Ci as Switch,
  ul as SwitchTags,
  Cr as TABS_SIZE,
  bn as TAGS_SIZE,
  xe as TYPOGRAPHY_VARIANT,
  sl as Tabs,
  cl as Tags,
  rl as Typography
};
