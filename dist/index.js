import './index.css';
var mo = Object.defineProperty, go = Object.defineProperties;
var bo = Object.getOwnPropertyDescriptors;
var Ht = Object.getOwnPropertySymbols;
var rr = Object.prototype.hasOwnProperty, or = Object.prototype.propertyIsEnumerable;
var nr = (e, t, n) => t in e ? mo(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, j = (e, t) => {
  for (var n in t || (t = {}))
    rr.call(t, n) && nr(e, n, t[n]);
  if (Ht)
    for (var n of Ht(t))
      or.call(t, n) && nr(e, n, t[n]);
  return e;
}, Q = (e, t) => go(e, bo(t));
var oe = (e, t) => {
  var n = {};
  for (var o in e)
    rr.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && Ht)
    for (var o of Ht(e))
      t.indexOf(o) < 0 && or.call(e, o) && (n[o] = e[o]);
  return n;
};
var Ee = (e, t, n) => new Promise((o, i) => {
  var a = (l) => {
    try {
      s(n.next(l));
    } catch (u) {
      i(u);
    }
  }, c = (l) => {
    try {
      s(n.throw(l));
    } catch (u) {
      i(u);
    }
  }, s = (l) => l.done ? o(l.value) : Promise.resolve(l.value).then(a, c);
  s((n = n.apply(e, t)).next());
});
import * as L from "react";
import Pe, { useState as V, useLayoutEffect as je, useEffect as te, useMemo as it, useRef as re, useCallback as rt, createContext as Fn, createElement as ee, useContext as kr, forwardRef as ye, Children as pt, isValidElement as an, cloneElement as Kn, Fragment as yo, useReducer as wo } from "react";
import * as xo from "react-dom";
import { flushSync as Tr } from "react-dom";
var Mn = { exports: {} }, Lt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ir;
function Co() {
  if (ir)
    return Lt;
  ir = 1;
  var e = Pe, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(s, l, u) {
    var v, p = {}, d = null, h = null;
    u !== void 0 && (d = "" + u), l.key !== void 0 && (d = "" + l.key), l.ref !== void 0 && (h = l.ref);
    for (v in l)
      o.call(l, v) && !a.hasOwnProperty(v) && (p[v] = l[v]);
    if (s && s.defaultProps)
      for (v in l = s.defaultProps, l)
        p[v] === void 0 && (p[v] = l[v]);
    return { $$typeof: t, type: s, key: d, ref: h, props: p, _owner: i.current };
  }
  return Lt.Fragment = n, Lt.jsx = c, Lt.jsxs = c, Lt;
}
var jt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ar;
function $o() {
  return ar || (ar = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Pe, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), y = Symbol.iterator, w = "@@iterator";
    function g(r) {
      if (r === null || typeof r != "object")
        return null;
      var f = y && r[y] || r[w];
      return typeof f == "function" ? f : null;
    }
    var x = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function b(r) {
      {
        for (var f = arguments.length, m = new Array(f > 1 ? f - 1 : 0), C = 1; C < f; C++)
          m[C - 1] = arguments[C];
        E("error", r, m);
      }
    }
    function E(r, f, m) {
      {
        var C = x.ReactDebugCurrentFrame, T = C.getStackAddendum();
        T !== "" && (f += "%s", m = m.concat([T]));
        var D = m.map(function(O) {
          return String(O);
        });
        D.unshift("Warning: " + f), Function.prototype.apply.call(console[r], console, D);
      }
    }
    var $ = !1, S = !1, k = !1, R = !1, _ = !1, N;
    N = Symbol.for("react.module.reference");
    function X(r) {
      return !!(typeof r == "string" || typeof r == "function" || r === o || r === a || _ || r === i || r === u || r === v || R || r === h || $ || S || k || typeof r == "object" && r !== null && (r.$$typeof === d || r.$$typeof === p || r.$$typeof === c || r.$$typeof === s || r.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      r.$$typeof === N || r.getModuleId !== void 0));
    }
    function Y(r, f, m) {
      var C = r.displayName;
      if (C)
        return C;
      var T = f.displayName || f.name || "";
      return T !== "" ? m + "(" + T + ")" : m;
    }
    function q(r) {
      return r.displayName || "Context";
    }
    function B(r) {
      if (r == null)
        return null;
      if (typeof r.tag == "number" && b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof r == "function")
        return r.displayName || r.name || null;
      if (typeof r == "string")
        return r;
      switch (r) {
        case o:
          return "Fragment";
        case n:
          return "Portal";
        case a:
          return "Profiler";
        case i:
          return "StrictMode";
        case u:
          return "Suspense";
        case v:
          return "SuspenseList";
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case s:
            var f = r;
            return q(f) + ".Consumer";
          case c:
            var m = r;
            return q(m._context) + ".Provider";
          case l:
            return Y(r, r.render, "ForwardRef");
          case p:
            var C = r.displayName || null;
            return C !== null ? C : B(r.type) || "Memo";
          case d: {
            var T = r, D = T._payload, O = T._init;
            try {
              return B(O(D));
            } catch (P) {
              return null;
            }
          }
        }
      return null;
    }
    var I = Object.assign, U = 0, W, H, K, ae, we, pe, _e;
    function Re() {
    }
    Re.__reactDisabledLog = !0;
    function Ge() {
      {
        if (U === 0) {
          W = console.log, H = console.info, K = console.warn, ae = console.error, we = console.group, pe = console.groupCollapsed, _e = console.groupEnd;
          var r = {
            configurable: !0,
            enumerable: !0,
            value: Re,
            writable: !0
          };
          Object.defineProperties(console, {
            info: r,
            log: r,
            warn: r,
            error: r,
            group: r,
            groupCollapsed: r,
            groupEnd: r
          });
        }
        U++;
      }
    }
    function Oe() {
      {
        if (U--, U === 0) {
          var r = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: I({}, r, {
              value: W
            }),
            info: I({}, r, {
              value: H
            }),
            warn: I({}, r, {
              value: K
            }),
            error: I({}, r, {
              value: ae
            }),
            group: I({}, r, {
              value: we
            }),
            groupCollapsed: I({}, r, {
              value: pe
            }),
            groupEnd: I({}, r, {
              value: _e
            })
          });
        }
        U < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ie = x.ReactCurrentDispatcher, Z;
    function xe(r, f, m) {
      {
        if (Z === void 0)
          try {
            throw Error();
          } catch (T) {
            var C = T.stack.trim().match(/\n( *(at )?)/);
            Z = C && C[1] || "";
          }
        return `
` + Z + r;
      }
    }
    var ve = !1, Ce;
    {
      var yt = typeof WeakMap == "function" ? WeakMap : Map;
      Ce = new yt();
    }
    function qe(r, f) {
      if (!r || ve)
        return "";
      {
        var m = Ce.get(r);
        if (m !== void 0)
          return m;
      }
      var C;
      ve = !0;
      var T = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var D;
      D = ie.current, ie.current = null, Ge();
      try {
        if (f) {
          var O = function() {
            throw Error();
          };
          if (Object.defineProperty(O.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(O, []);
            } catch (ne) {
              C = ne;
            }
            Reflect.construct(r, [], O);
          } else {
            try {
              O.call();
            } catch (ne) {
              C = ne;
            }
            r.call(O.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ne) {
            C = ne;
          }
          r();
        }
      } catch (ne) {
        if (ne && C && typeof ne.stack == "string") {
          for (var P = ne.stack.split(`
`), z = C.stack.split(`
`), F = P.length - 1, M = z.length - 1; F >= 1 && M >= 0 && P[F] !== z[M]; )
            M--;
          for (; F >= 1 && M >= 0; F--, M--)
            if (P[F] !== z[M]) {
              if (F !== 1 || M !== 1)
                do
                  if (F--, M--, M < 0 || P[F] !== z[M]) {
                    var J = `
` + P[F].replace(" at new ", " at ");
                    return r.displayName && J.includes("<anonymous>") && (J = J.replace("<anonymous>", r.displayName)), typeof r == "function" && Ce.set(r, J), J;
                  }
                while (F >= 1 && M >= 0);
              break;
            }
        }
      } finally {
        ve = !1, ie.current = D, Oe(), Error.prepareStackTrace = T;
      }
      var ue = r ? r.displayName || r.name : "", Dt = ue ? xe(ue) : "";
      return typeof r == "function" && Ce.set(r, Dt), Dt;
    }
    function wt(r, f, m) {
      return qe(r, !1);
    }
    function xt(r) {
      var f = r.prototype;
      return !!(f && f.isReactComponent);
    }
    function he(r, f, m) {
      if (r == null)
        return "";
      if (typeof r == "function")
        return qe(r, xt(r));
      if (typeof r == "string")
        return xe(r);
      switch (r) {
        case u:
          return xe("Suspense");
        case v:
          return xe("SuspenseList");
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case l:
            return wt(r.render);
          case p:
            return he(r.type, f, m);
          case d: {
            var C = r, T = C._payload, D = C._init;
            try {
              return he(D(T), f, m);
            } catch (O) {
            }
          }
        }
      return "";
    }
    var se = Object.prototype.hasOwnProperty, We = {}, Xe = x.ReactDebugCurrentFrame;
    function $e(r) {
      if (r) {
        var f = r._owner, m = he(r.type, r._source, f ? f.type : null);
        Xe.setExtraStackFrame(m);
      } else
        Xe.setExtraStackFrame(null);
    }
    function Ct(r, f, m, C, T) {
      {
        var D = Function.call.bind(se);
        for (var O in r)
          if (D(r, O)) {
            var P = void 0;
            try {
              if (typeof r[O] != "function") {
                var z = Error((C || "React class") + ": " + m + " type `" + O + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof r[O] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw z.name = "Invariant Violation", z;
              }
              P = r[O](f, O, C, m, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (F) {
              P = F;
            }
            P && !(P instanceof Error) && ($e(T), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", C || "React class", m, O, typeof P), $e(null)), P instanceof Error && !(P.message in We) && (We[P.message] = !0, $e(T), b("Failed %s type: %s", m, P.message), $e(null));
          }
      }
    }
    var $t = Array.isArray;
    function me(r) {
      return $t(r);
    }
    function vn(r) {
      {
        var f = typeof Symbol == "function" && Symbol.toStringTag, m = f && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return m;
      }
    }
    function hn(r) {
      try {
        return St(r), !1;
      } catch (f) {
        return !0;
      }
    }
    function St(r) {
      return "" + r;
    }
    function Et(r) {
      if (hn(r))
        return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", vn(r)), St(r);
    }
    var Se = x.ReactCurrentOwner, mn = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Pt, Rt, Ze;
    Ze = {};
    function gn(r) {
      if (se.call(r, "ref")) {
        var f = Object.getOwnPropertyDescriptor(r, "ref").get;
        if (f && f.isReactWarning)
          return !1;
      }
      return r.ref !== void 0;
    }
    function bn(r) {
      if (se.call(r, "key")) {
        var f = Object.getOwnPropertyDescriptor(r, "key").get;
        if (f && f.isReactWarning)
          return !1;
      }
      return r.key !== void 0;
    }
    function yn(r, f) {
      if (typeof r.ref == "string" && Se.current && f && Se.current.stateNode !== f) {
        var m = B(Se.current.type);
        Ze[m] || (b('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', B(Se.current.type), r.ref), Ze[m] = !0);
      }
    }
    function wn(r, f) {
      {
        var m = function() {
          Pt || (Pt = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", f));
        };
        m.isReactWarning = !0, Object.defineProperty(r, "key", {
          get: m,
          configurable: !0
        });
      }
    }
    function xn(r, f) {
      {
        var m = function() {
          Rt || (Rt = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", f));
        };
        m.isReactWarning = !0, Object.defineProperty(r, "ref", {
          get: m,
          configurable: !0
        });
      }
    }
    var Cn = function(r, f, m, C, T, D, O) {
      var P = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: r,
        key: f,
        ref: m,
        props: O,
        // Record the component responsible for creating this element.
        _owner: D
      };
      return P._store = {}, Object.defineProperty(P._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(P, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: C
      }), Object.defineProperty(P, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: T
      }), Object.freeze && (Object.freeze(P.props), Object.freeze(P)), P;
    };
    function $n(r, f, m, C, T) {
      {
        var D, O = {}, P = null, z = null;
        m !== void 0 && (Et(m), P = "" + m), bn(f) && (Et(f.key), P = "" + f.key), gn(f) && (z = f.ref, yn(f, T));
        for (D in f)
          se.call(f, D) && !mn.hasOwnProperty(D) && (O[D] = f[D]);
        if (r && r.defaultProps) {
          var F = r.defaultProps;
          for (D in F)
            O[D] === void 0 && (O[D] = F[D]);
        }
        if (P || z) {
          var M = typeof r == "function" ? r.displayName || r.name || "Unknown" : r;
          P && wn(O, M), z && xn(O, M);
        }
        return Cn(r, P, z, T, C, Se.current, O);
      }
    }
    var Je = x.ReactCurrentOwner, Ot = x.ReactDebugCurrentFrame;
    function le(r) {
      if (r) {
        var f = r._owner, m = he(r.type, r._source, f ? f.type : null);
        Ot.setExtraStackFrame(m);
      } else
        Ot.setExtraStackFrame(null);
    }
    var Qe;
    Qe = !1;
    function et(r) {
      return typeof r == "object" && r !== null && r.$$typeof === t;
    }
    function kt() {
      {
        if (Je.current) {
          var r = B(Je.current.type);
          if (r)
            return `

Check the render method of \`` + r + "`.";
        }
        return "";
      }
    }
    function Sn(r) {
      {
        if (r !== void 0) {
          var f = r.fileName.replace(/^.*[\\\/]/, ""), m = r.lineNumber;
          return `

Check your code at ` + f + ":" + m + ".";
        }
        return "";
      }
    }
    var Tt = {};
    function En(r) {
      {
        var f = kt();
        if (!f) {
          var m = typeof r == "string" ? r : r.displayName || r.name;
          m && (f = `

Check the top-level render call using <` + m + ">.");
        }
        return f;
      }
    }
    function At(r, f) {
      {
        if (!r._store || r._store.validated || r.key != null)
          return;
        r._store.validated = !0;
        var m = En(f);
        if (Tt[m])
          return;
        Tt[m] = !0;
        var C = "";
        r && r._owner && r._owner !== Je.current && (C = " It was passed a child from " + B(r._owner.type) + "."), le(r), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', m, C), le(null);
      }
    }
    function _t(r, f) {
      {
        if (typeof r != "object")
          return;
        if (me(r))
          for (var m = 0; m < r.length; m++) {
            var C = r[m];
            et(C) && At(C, f);
          }
        else if (et(r))
          r._store && (r._store.validated = !0);
        else if (r) {
          var T = g(r);
          if (typeof T == "function" && T !== r.entries)
            for (var D = T.call(r), O; !(O = D.next()).done; )
              et(O.value) && At(O.value, f);
        }
      }
    }
    function Pn(r) {
      {
        var f = r.type;
        if (f == null || typeof f == "string")
          return;
        var m;
        if (typeof f == "function")
          m = f.propTypes;
        else if (typeof f == "object" && (f.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        f.$$typeof === p))
          m = f.propTypes;
        else
          return;
        if (m) {
          var C = B(f);
          Ct(m, r.props, "prop", C, r);
        } else if (f.PropTypes !== void 0 && !Qe) {
          Qe = !0;
          var T = B(f);
          b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", T || "Unknown");
        }
        typeof f.getDefaultProps == "function" && !f.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Rn(r) {
      {
        for (var f = Object.keys(r.props), m = 0; m < f.length; m++) {
          var C = f[m];
          if (C !== "children" && C !== "key") {
            le(r), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", C), le(null);
            break;
          }
        }
        r.ref !== null && (le(r), b("Invalid attribute `ref` supplied to `React.Fragment`."), le(null));
      }
    }
    function Nt(r, f, m, C, T, D) {
      {
        var O = X(r);
        if (!O) {
          var P = "";
          (r === void 0 || typeof r == "object" && r !== null && Object.keys(r).length === 0) && (P += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var z = Sn(T);
          z ? P += z : P += kt();
          var F;
          r === null ? F = "null" : me(r) ? F = "array" : r !== void 0 && r.$$typeof === t ? (F = "<" + (B(r.type) || "Unknown") + " />", P = " Did you accidentally export a JSX literal instead of a component?") : F = typeof r, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", F, P);
        }
        var M = $n(r, f, m, T, D);
        if (M == null)
          return M;
        if (O) {
          var J = f.children;
          if (J !== void 0)
            if (C)
              if (me(J)) {
                for (var ue = 0; ue < J.length; ue++)
                  _t(J[ue], r);
                Object.freeze && Object.freeze(J);
              } else
                b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              _t(J, r);
        }
        return r === o ? Rn(M) : Pn(M), M;
      }
    }
    function On(r, f, m) {
      return Nt(r, f, m, !0);
    }
    function kn(r, f, m) {
      return Nt(r, f, m, !1);
    }
    var Tn = kn, An = On;
    jt.Fragment = o, jt.jsx = Tn, jt.jsxs = An;
  }()), jt;
}
process.env.NODE_ENV === "production" ? Mn.exports = Co() : Mn.exports = $o();
var A = Mn.exports;
function Ar(e) {
  var t, n, o = "";
  if (typeof e == "string" || typeof e == "number")
    o += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = Ar(e[t])) && (o && (o += " "), o += n);
    else
      for (t in e)
        e[t] && (o && (o += " "), o += t);
  return o;
}
function G() {
  for (var e, t, n = 0, o = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = Ar(e)) && (o && (o += " "), o += t);
  return o;
}
var Ne = /* @__PURE__ */ ((e) => (e.Large = "large", e.Medium = "medium", e.Small = "small", e))(Ne || {}), De = /* @__PURE__ */ ((e) => (e.Contained = "contained", e.Outlined = "outlined", e.Text = "text", e))(De || {}), tt = /* @__PURE__ */ ((e) => (e.Primary = "primary", e.Secondary = "secondary", e.Green = "green", e))(tt || {}), So = /* @__PURE__ */ ((e) => (e.Submit = "submit", e.Reset = "reset", e.Button = "button", e))(So || {});
const Eo = Pe.forwardRef((e, t) => {
  const {
    id: n,
    ariaLabel: o,
    className: i,
    children: a,
    disabled: c,
    rounded: s,
    endIcon: l,
    startIcon: u,
    color: v = tt.Primary,
    withIcon: p,
    size: d = Ne.Medium,
    variant: h = De.Contained,
    type: y = "button",
    onClick: w
  } = e, g = () => {
    w && w();
  };
  return /* @__PURE__ */ A.jsx(
    "button",
    {
      onClick: g,
      ref: t,
      type: y,
      "aria-label": o,
      id: n,
      disabled: c,
      className: G({
        Button: !0,
        "Button-contained": h === De.Contained,
        "Button-outlined": h === De.Outlined,
        "Button-outlined-disable": !!c && h === De.Outlined,
        "Button-text": h === De.Text,
        "Button-text-small": d === Ne.Small && h === De.Text,
        "Button-text-large": d === Ne.Large && h === De.Text,
        "Button-text-disable": !!c && h === De.Text,
        "Button-primary": d === Ne.Medium,
        "Button-primary-disable": !!c && v === tt.Primary,
        "Button-secondary": v === tt.Secondary,
        "Button-secondary-disable": !!c && v === tt.Secondary,
        "Button-green": v === tt.Green,
        "Button-green-disable": !!c && v === tt.Green,
        "Button-small": d === Ne.Small,
        "Button-large": d === Ne.Large,
        "Button-round": !!s,
        "Button-only_icon": !!p,
        "Button-only_icon-small": !!p && d === Ne.Small,
        "Button-only_icon-large": !!p && d === Ne.Large,
        [i || ""]: !!i
      }),
      children: /* @__PURE__ */ A.jsxs("div", { className: "Button-children", children: [
        u && /* @__PURE__ */ A.jsx("span", { className: "Button-icon-left", children: u }),
        a,
        l && /* @__PURE__ */ A.jsx("span", { className: "Button-icon-right", children: l })
      ] })
    }
  );
});
Eo.displayName = "Button";
var Bn = { exports: {} }, It = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cr;
function Po() {
  if (cr)
    return It;
  cr = 1;
  var e = Pe, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(s, l, u) {
    var v, p = {}, d = null, h = null;
    u !== void 0 && (d = "" + u), l.key !== void 0 && (d = "" + l.key), l.ref !== void 0 && (h = l.ref);
    for (v in l)
      o.call(l, v) && !a.hasOwnProperty(v) && (p[v] = l[v]);
    if (s && s.defaultProps)
      for (v in l = s.defaultProps, l)
        p[v] === void 0 && (p[v] = l[v]);
    return { $$typeof: t, type: s, key: d, ref: h, props: p, _owner: i.current };
  }
  return It.Fragment = n, It.jsx = c, It.jsxs = c, It;
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
var sr;
function Ro() {
  return sr || (sr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Pe, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), y = Symbol.iterator, w = "@@iterator";
    function g(r) {
      if (r === null || typeof r != "object")
        return null;
      var f = y && r[y] || r[w];
      return typeof f == "function" ? f : null;
    }
    var x = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function b(r) {
      {
        for (var f = arguments.length, m = new Array(f > 1 ? f - 1 : 0), C = 1; C < f; C++)
          m[C - 1] = arguments[C];
        E("error", r, m);
      }
    }
    function E(r, f, m) {
      {
        var C = x.ReactDebugCurrentFrame, T = C.getStackAddendum();
        T !== "" && (f += "%s", m = m.concat([T]));
        var D = m.map(function(O) {
          return String(O);
        });
        D.unshift("Warning: " + f), Function.prototype.apply.call(console[r], console, D);
      }
    }
    var $ = !1, S = !1, k = !1, R = !1, _ = !1, N;
    N = Symbol.for("react.module.reference");
    function X(r) {
      return !!(typeof r == "string" || typeof r == "function" || r === o || r === a || _ || r === i || r === u || r === v || R || r === h || $ || S || k || typeof r == "object" && r !== null && (r.$$typeof === d || r.$$typeof === p || r.$$typeof === c || r.$$typeof === s || r.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      r.$$typeof === N || r.getModuleId !== void 0));
    }
    function Y(r, f, m) {
      var C = r.displayName;
      if (C)
        return C;
      var T = f.displayName || f.name || "";
      return T !== "" ? m + "(" + T + ")" : m;
    }
    function q(r) {
      return r.displayName || "Context";
    }
    function B(r) {
      if (r == null)
        return null;
      if (typeof r.tag == "number" && b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof r == "function")
        return r.displayName || r.name || null;
      if (typeof r == "string")
        return r;
      switch (r) {
        case o:
          return "Fragment";
        case n:
          return "Portal";
        case a:
          return "Profiler";
        case i:
          return "StrictMode";
        case u:
          return "Suspense";
        case v:
          return "SuspenseList";
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case s:
            var f = r;
            return q(f) + ".Consumer";
          case c:
            var m = r;
            return q(m._context) + ".Provider";
          case l:
            return Y(r, r.render, "ForwardRef");
          case p:
            var C = r.displayName || null;
            return C !== null ? C : B(r.type) || "Memo";
          case d: {
            var T = r, D = T._payload, O = T._init;
            try {
              return B(O(D));
            } catch (P) {
              return null;
            }
          }
        }
      return null;
    }
    var I = Object.assign, U = 0, W, H, K, ae, we, pe, _e;
    function Re() {
    }
    Re.__reactDisabledLog = !0;
    function Ge() {
      {
        if (U === 0) {
          W = console.log, H = console.info, K = console.warn, ae = console.error, we = console.group, pe = console.groupCollapsed, _e = console.groupEnd;
          var r = {
            configurable: !0,
            enumerable: !0,
            value: Re,
            writable: !0
          };
          Object.defineProperties(console, {
            info: r,
            log: r,
            warn: r,
            error: r,
            group: r,
            groupCollapsed: r,
            groupEnd: r
          });
        }
        U++;
      }
    }
    function Oe() {
      {
        if (U--, U === 0) {
          var r = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: I({}, r, {
              value: W
            }),
            info: I({}, r, {
              value: H
            }),
            warn: I({}, r, {
              value: K
            }),
            error: I({}, r, {
              value: ae
            }),
            group: I({}, r, {
              value: we
            }),
            groupCollapsed: I({}, r, {
              value: pe
            }),
            groupEnd: I({}, r, {
              value: _e
            })
          });
        }
        U < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ie = x.ReactCurrentDispatcher, Z;
    function xe(r, f, m) {
      {
        if (Z === void 0)
          try {
            throw Error();
          } catch (T) {
            var C = T.stack.trim().match(/\n( *(at )?)/);
            Z = C && C[1] || "";
          }
        return `
` + Z + r;
      }
    }
    var ve = !1, Ce;
    {
      var yt = typeof WeakMap == "function" ? WeakMap : Map;
      Ce = new yt();
    }
    function qe(r, f) {
      if (!r || ve)
        return "";
      {
        var m = Ce.get(r);
        if (m !== void 0)
          return m;
      }
      var C;
      ve = !0;
      var T = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var D;
      D = ie.current, ie.current = null, Ge();
      try {
        if (f) {
          var O = function() {
            throw Error();
          };
          if (Object.defineProperty(O.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(O, []);
            } catch (ne) {
              C = ne;
            }
            Reflect.construct(r, [], O);
          } else {
            try {
              O.call();
            } catch (ne) {
              C = ne;
            }
            r.call(O.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ne) {
            C = ne;
          }
          r();
        }
      } catch (ne) {
        if (ne && C && typeof ne.stack == "string") {
          for (var P = ne.stack.split(`
`), z = C.stack.split(`
`), F = P.length - 1, M = z.length - 1; F >= 1 && M >= 0 && P[F] !== z[M]; )
            M--;
          for (; F >= 1 && M >= 0; F--, M--)
            if (P[F] !== z[M]) {
              if (F !== 1 || M !== 1)
                do
                  if (F--, M--, M < 0 || P[F] !== z[M]) {
                    var J = `
` + P[F].replace(" at new ", " at ");
                    return r.displayName && J.includes("<anonymous>") && (J = J.replace("<anonymous>", r.displayName)), typeof r == "function" && Ce.set(r, J), J;
                  }
                while (F >= 1 && M >= 0);
              break;
            }
        }
      } finally {
        ve = !1, ie.current = D, Oe(), Error.prepareStackTrace = T;
      }
      var ue = r ? r.displayName || r.name : "", Dt = ue ? xe(ue) : "";
      return typeof r == "function" && Ce.set(r, Dt), Dt;
    }
    function wt(r, f, m) {
      return qe(r, !1);
    }
    function xt(r) {
      var f = r.prototype;
      return !!(f && f.isReactComponent);
    }
    function he(r, f, m) {
      if (r == null)
        return "";
      if (typeof r == "function")
        return qe(r, xt(r));
      if (typeof r == "string")
        return xe(r);
      switch (r) {
        case u:
          return xe("Suspense");
        case v:
          return xe("SuspenseList");
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case l:
            return wt(r.render);
          case p:
            return he(r.type, f, m);
          case d: {
            var C = r, T = C._payload, D = C._init;
            try {
              return he(D(T), f, m);
            } catch (O) {
            }
          }
        }
      return "";
    }
    var se = Object.prototype.hasOwnProperty, We = {}, Xe = x.ReactDebugCurrentFrame;
    function $e(r) {
      if (r) {
        var f = r._owner, m = he(r.type, r._source, f ? f.type : null);
        Xe.setExtraStackFrame(m);
      } else
        Xe.setExtraStackFrame(null);
    }
    function Ct(r, f, m, C, T) {
      {
        var D = Function.call.bind(se);
        for (var O in r)
          if (D(r, O)) {
            var P = void 0;
            try {
              if (typeof r[O] != "function") {
                var z = Error((C || "React class") + ": " + m + " type `" + O + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof r[O] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw z.name = "Invariant Violation", z;
              }
              P = r[O](f, O, C, m, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (F) {
              P = F;
            }
            P && !(P instanceof Error) && ($e(T), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", C || "React class", m, O, typeof P), $e(null)), P instanceof Error && !(P.message in We) && (We[P.message] = !0, $e(T), b("Failed %s type: %s", m, P.message), $e(null));
          }
      }
    }
    var $t = Array.isArray;
    function me(r) {
      return $t(r);
    }
    function vn(r) {
      {
        var f = typeof Symbol == "function" && Symbol.toStringTag, m = f && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return m;
      }
    }
    function hn(r) {
      try {
        return St(r), !1;
      } catch (f) {
        return !0;
      }
    }
    function St(r) {
      return "" + r;
    }
    function Et(r) {
      if (hn(r))
        return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", vn(r)), St(r);
    }
    var Se = x.ReactCurrentOwner, mn = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Pt, Rt, Ze;
    Ze = {};
    function gn(r) {
      if (se.call(r, "ref")) {
        var f = Object.getOwnPropertyDescriptor(r, "ref").get;
        if (f && f.isReactWarning)
          return !1;
      }
      return r.ref !== void 0;
    }
    function bn(r) {
      if (se.call(r, "key")) {
        var f = Object.getOwnPropertyDescriptor(r, "key").get;
        if (f && f.isReactWarning)
          return !1;
      }
      return r.key !== void 0;
    }
    function yn(r, f) {
      if (typeof r.ref == "string" && Se.current && f && Se.current.stateNode !== f) {
        var m = B(Se.current.type);
        Ze[m] || (b('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', B(Se.current.type), r.ref), Ze[m] = !0);
      }
    }
    function wn(r, f) {
      {
        var m = function() {
          Pt || (Pt = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", f));
        };
        m.isReactWarning = !0, Object.defineProperty(r, "key", {
          get: m,
          configurable: !0
        });
      }
    }
    function xn(r, f) {
      {
        var m = function() {
          Rt || (Rt = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", f));
        };
        m.isReactWarning = !0, Object.defineProperty(r, "ref", {
          get: m,
          configurable: !0
        });
      }
    }
    var Cn = function(r, f, m, C, T, D, O) {
      var P = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: r,
        key: f,
        ref: m,
        props: O,
        // Record the component responsible for creating this element.
        _owner: D
      };
      return P._store = {}, Object.defineProperty(P._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(P, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: C
      }), Object.defineProperty(P, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: T
      }), Object.freeze && (Object.freeze(P.props), Object.freeze(P)), P;
    };
    function $n(r, f, m, C, T) {
      {
        var D, O = {}, P = null, z = null;
        m !== void 0 && (Et(m), P = "" + m), bn(f) && (Et(f.key), P = "" + f.key), gn(f) && (z = f.ref, yn(f, T));
        for (D in f)
          se.call(f, D) && !mn.hasOwnProperty(D) && (O[D] = f[D]);
        if (r && r.defaultProps) {
          var F = r.defaultProps;
          for (D in F)
            O[D] === void 0 && (O[D] = F[D]);
        }
        if (P || z) {
          var M = typeof r == "function" ? r.displayName || r.name || "Unknown" : r;
          P && wn(O, M), z && xn(O, M);
        }
        return Cn(r, P, z, T, C, Se.current, O);
      }
    }
    var Je = x.ReactCurrentOwner, Ot = x.ReactDebugCurrentFrame;
    function le(r) {
      if (r) {
        var f = r._owner, m = he(r.type, r._source, f ? f.type : null);
        Ot.setExtraStackFrame(m);
      } else
        Ot.setExtraStackFrame(null);
    }
    var Qe;
    Qe = !1;
    function et(r) {
      return typeof r == "object" && r !== null && r.$$typeof === t;
    }
    function kt() {
      {
        if (Je.current) {
          var r = B(Je.current.type);
          if (r)
            return `

Check the render method of \`` + r + "`.";
        }
        return "";
      }
    }
    function Sn(r) {
      {
        if (r !== void 0) {
          var f = r.fileName.replace(/^.*[\\\/]/, ""), m = r.lineNumber;
          return `

Check your code at ` + f + ":" + m + ".";
        }
        return "";
      }
    }
    var Tt = {};
    function En(r) {
      {
        var f = kt();
        if (!f) {
          var m = typeof r == "string" ? r : r.displayName || r.name;
          m && (f = `

Check the top-level render call using <` + m + ">.");
        }
        return f;
      }
    }
    function At(r, f) {
      {
        if (!r._store || r._store.validated || r.key != null)
          return;
        r._store.validated = !0;
        var m = En(f);
        if (Tt[m])
          return;
        Tt[m] = !0;
        var C = "";
        r && r._owner && r._owner !== Je.current && (C = " It was passed a child from " + B(r._owner.type) + "."), le(r), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', m, C), le(null);
      }
    }
    function _t(r, f) {
      {
        if (typeof r != "object")
          return;
        if (me(r))
          for (var m = 0; m < r.length; m++) {
            var C = r[m];
            et(C) && At(C, f);
          }
        else if (et(r))
          r._store && (r._store.validated = !0);
        else if (r) {
          var T = g(r);
          if (typeof T == "function" && T !== r.entries)
            for (var D = T.call(r), O; !(O = D.next()).done; )
              et(O.value) && At(O.value, f);
        }
      }
    }
    function Pn(r) {
      {
        var f = r.type;
        if (f == null || typeof f == "string")
          return;
        var m;
        if (typeof f == "function")
          m = f.propTypes;
        else if (typeof f == "object" && (f.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        f.$$typeof === p))
          m = f.propTypes;
        else
          return;
        if (m) {
          var C = B(f);
          Ct(m, r.props, "prop", C, r);
        } else if (f.PropTypes !== void 0 && !Qe) {
          Qe = !0;
          var T = B(f);
          b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", T || "Unknown");
        }
        typeof f.getDefaultProps == "function" && !f.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Rn(r) {
      {
        for (var f = Object.keys(r.props), m = 0; m < f.length; m++) {
          var C = f[m];
          if (C !== "children" && C !== "key") {
            le(r), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", C), le(null);
            break;
          }
        }
        r.ref !== null && (le(r), b("Invalid attribute `ref` supplied to `React.Fragment`."), le(null));
      }
    }
    function Nt(r, f, m, C, T, D) {
      {
        var O = X(r);
        if (!O) {
          var P = "";
          (r === void 0 || typeof r == "object" && r !== null && Object.keys(r).length === 0) && (P += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var z = Sn(T);
          z ? P += z : P += kt();
          var F;
          r === null ? F = "null" : me(r) ? F = "array" : r !== void 0 && r.$$typeof === t ? (F = "<" + (B(r.type) || "Unknown") + " />", P = " Did you accidentally export a JSX literal instead of a component?") : F = typeof r, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", F, P);
        }
        var M = $n(r, f, m, T, D);
        if (M == null)
          return M;
        if (O) {
          var J = f.children;
          if (J !== void 0)
            if (C)
              if (me(J)) {
                for (var ue = 0; ue < J.length; ue++)
                  _t(J[ue], r);
                Object.freeze && Object.freeze(J);
              } else
                b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              _t(J, r);
        }
        return r === o ? Rn(M) : Pn(M), M;
      }
    }
    function On(r, f, m) {
      return Nt(r, f, m, !0);
    }
    function kn(r, f, m) {
      return Nt(r, f, m, !1);
    }
    var Tn = kn, An = On;
    Kt.Fragment = o, Kt.jsx = Tn, Kt.jsxs = An;
  }()), Kt;
}
process.env.NODE_ENV === "production" ? Bn.exports = Po() : Bn.exports = Ro();
var ze = Bn.exports;
const _r = ({
  width: e = "25",
  height: t = "25",
  color: n = "currentColor"
}) => /* @__PURE__ */ ze.jsx(
  "svg",
  {
    width: e,
    height: t,
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ ze.jsx(
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
_r.displayName = "SelectOpenDown";
const Nr = ({ width: e = "25", height: t = "25", color: n = "currentColor" }) => /* @__PURE__ */ ze.jsx(
  "svg",
  {
    width: e,
    height: t,
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ ze.jsx(
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
Nr.displayName = "EyeOff";
const Dr = ({ width: e = "25", height: t = "25", color: n = "currentColor" }) => /* @__PURE__ */ ze.jsx(
  "svg",
  {
    width: e,
    height: t,
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ ze.jsx(
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
Dr.displayName = "EyeOn";
const Lr = ({ width: e = "25", height: t = "25", color: n = "currentColor" }) => /* @__PURE__ */ ze.jsx(
  "svg",
  {
    width: e,
    height: t,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ ze.jsx(
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
var nt = /* @__PURE__ */ ((e) => (e.Text = "text", e.Number = "number", e.Password = "password", e.Telephone = "tel", e.Email = "email", e))(nt || {}), ft = /* @__PURE__ */ ((e) => (e.Small = "small", e.Medium = "medium", e))(ft || {}), Ft = /* @__PURE__ */ ((e) => (e.Light = "light", e.Dark = "dark", e))(Ft || {});
const Oo = Pe.forwardRef((e, t) => {
  const ie = e, {
    id: n,
    value: o,
    defaultValue: i,
    className: a,
    disabled: c,
    endIcon: s,
    startIcon: l,
    isError: u,
    isHint: v,
    helperText: p,
    placeholder: d,
    label: h,
    type: y,
    name: w,
    ariaLabel: g,
    autoComplete: x,
    size: b = ft.Medium,
    theme: E = Ft.Light,
    onBlur: $,
    onChange: S,
    onFocus: k,
    onKeyDown: R,
    onKeyUp: _,
    requiredSymbol: N
  } = ie, X = oe(ie, [
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
  ]), [Y, q] = V(""), [B, I] = V(!1), [U, W] = V(y), [H, K] = Pe.useState(!1), ae = (Z) => {
    q(Z.target.value), S && S(Z);
  }, we = (Z) => {
    $ && $(Z);
  }, pe = (Z) => {
    k && k(Z);
  }, _e = (Z) => {
    R && R(Z);
  }, Re = (Z) => {
    _ && _(Z);
  }, Ge = () => {
    K((Z) => !Z);
  }, Oe = (Z) => {
    Z.animationName === "onAutoFillStart" && I(!0);
  };
  return je(() => {
    (i || o) && q(" ");
  }, [i, o]), te(() => {
    y === nt.Password && W(H ? nt.Text : nt.Password);
  }, [H, y]), te(() => {
    Y.length === 0 && I(!1);
  }, [Y]), /* @__PURE__ */ A.jsxs(
    "div",
    {
      className: G({
        Input: !0,
        "Input-without-heading ": !!h,
        [a || ""]: !!a
      }),
      children: [
        h && /* @__PURE__ */ A.jsxs(
          "label",
          {
            className: G({
              InputLabel: !0,
              "InputLabel-small": b === ft.Small
            }),
            htmlFor: n,
            children: [
              h,
              N && /* @__PURE__ */ A.jsx(
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
        /* @__PURE__ */ A.jsxs(
          "div",
          {
            className: G({
              "InputBase-root": !0,
              "Input-disabled": c,
              "InputBase-error": !!u,
              "InputBase-root-dark": E === Ft.Dark
            }),
            children: [
              y !== nt.Password && l && /* @__PURE__ */ A.jsx("div", { className: "InputBase-icon-start", children: l }),
              /* @__PURE__ */ A.jsxs(
                "div",
                {
                  className: G({
                    InputBaseInner: !0
                  }),
                  children: [
                    !h && /* @__PURE__ */ A.jsx(
                      "label",
                      {
                        style: {
                          zIndex: B ? 1 : 0
                        },
                        className: G({
                          InputLabel: !0,
                          "InputLabel-medium-align-center": b === ft.Medium,
                          "InputLabel-small-align-center": b === ft.Small,
                          "InputLabel-position-fixed": Y.length > 0 || B
                        }),
                        htmlFor: n,
                        children: d
                      }
                    ),
                    /* @__PURE__ */ A.jsx(
                      "input",
                      j({
                        defaultValue: !o && i ? i : void 0,
                        "aria-label": g,
                        autoComplete: x,
                        className: G({
                          "InputBase-input": !0,
                          "InputBase-input-dark": E === Ft.Dark,
                          "InputBase-input-small": b === ft.Small,
                          "InputBase-autofill-font": B
                        }),
                        disabled: c,
                        name: w,
                        type: U,
                        id: n,
                        value: o,
                        onAnimationStart: Oe,
                        onChange: ae,
                        onBlur: we,
                        onFocus: pe,
                        onKeyDown: _e,
                        onKeyUp: Re,
                        placeholder: h ? d : "",
                        ref: t
                      }, X)
                    )
                  ]
                }
              ),
              y !== nt.Password && s && /* @__PURE__ */ A.jsx("div", { className: "InputBase-icon-end", children: s }),
              y === nt.Password && /* @__PURE__ */ A.jsx(
                "button",
                {
                  type: "button",
                  "aria-label": "toggle password visibility",
                  className: "InputBase-icon-end",
                  onClick: Ge,
                  children: H ? /* @__PURE__ */ A.jsx(Dr, {}) : /* @__PURE__ */ A.jsx(Nr, {})
                }
              )
            ]
          }
        ),
        p && /* @__PURE__ */ A.jsx(
          "p",
          {
            className: G({
              "Input-helper-text": !0,
              "Input-hint-text": !!v,
              "Input-error-text": !!u,
              "Input-helper-text-dark": !u && E === Ft.Dark
            }),
            children: p
          }
        )
      ]
    }
  );
});
Oo.displayName = "Input";
var ge = /* @__PURE__ */ ((e) => (e.Light = "light", e.Dark = "dark", e.Green = "green", e))(ge || {}), dt = /* @__PURE__ */ ((e) => (e.Small = "small", e.Medium = "medium", e.Large = "large", e))(dt || {});
const ko = Pe.forwardRef((e, t) => {
  const {
    id: n,
    name: o,
    disabled: i,
    children: a,
    value: c,
    label: s,
    className: l,
    onChange: u,
    ariaLabel: v,
    error: p,
    theme: d = ge.Light,
    size: h = dt.Medium
  } = e, [y, w] = V(!1), [g, x] = V(!1), [b, E] = V(i), $ = (k) => {
    b || (w(!y), u && u(!y, k));
  }, S = (k) => {
    if ((k.key === "Enter" || k.key === " ") && !b) {
      const R = {
        target: {
          ariaLabel: v,
          name: o
        }
      };
      w(!y), u && u(!y, R);
    }
  };
  return te(() => {
    E(i);
  }, [i]), te(() => {
    w(typeof c == "boolean" ? c : !1);
  }, [c]), te(() => {
    x(!!p);
  }, [p]), /* @__PURE__ */ A.jsx("div", { className: "Checkbox", children: /* @__PURE__ */ A.jsxs("label", { children: [
    /* @__PURE__ */ A.jsx(
      "div",
      {
        className: G({
          "Checkbox-checked": y,
          "Checkbox-dark-checked": y && d === ge.Dark,
          "Checkbox-green-checked": y && d === ge.Green,
          "Checkbox-unchecked": !y,
          "Checkbox-error": g,
          "Checkbox-disabled": b,
          "Checkbox-green-disabled": b && d === ge.Green,
          "Checkbox-dark-disabled": b && d === ge.Dark,
          "Checkbox-dark": d === ge.Dark,
          "Checkbox-green": d === ge.Green,
          [l || ""]: !!l
        }),
        children: /* @__PURE__ */ A.jsxs(
          "div",
          {
            className: G({
              "Checkbox-container": !0,
              "Checkbox-large": h === dt.Large,
              "Checkbox-medium": h === dt.Medium,
              "Checkbox-small": h === dt.Small
            }),
            role: "input",
            tabIndex: 0,
            onKeyDown: S,
            children: [
              /* @__PURE__ */ A.jsx(
                "input",
                {
                  ref: t,
                  id: n,
                  type: "checkbox",
                  onChange: $,
                  "aria-label": v,
                  tabIndex: -1,
                  disabled: b
                }
              ),
              y && !b && /* @__PURE__ */ A.jsx(Lr, {})
            ]
          }
        )
      }
    ),
    (s || a) && /* @__PURE__ */ A.jsx(
      "div",
      {
        className: G({
          "Checkbox-label": !0,
          "Checkbox-label-small": h === dt.Small,
          "Checkbox-label-dark": d === ge.Dark,
          "Checkbox-label-green": d === ge.Green,
          "Checkbox-label-disabled": b,
          "Checkbox-label-dark-disabled": b && d === ge.Dark,
          "Checkbox-label-green-disabled": b && d === ge.Green
        }),
        children: s || a
      }
    )
  ] }) });
});
ko.displayName = "Checkbox";
var ke = /* @__PURE__ */ ((e) => (e.Light = "light", e.Dark = "dark", e.Green = "green", e))(ke || {}), Le = /* @__PURE__ */ ((e) => (e.Small = "small", e.Medium = "medium", e.Large = "large", e))(Le || {});
const To = Pe.forwardRef((e, t) => {
  const {
    id: n,
    name: o,
    className: i,
    checked: a,
    disabled: c,
    ariaLabel: s,
    label: l,
    theme: u = ke.Light,
    size: v = Le.Medium,
    onChange: p
  } = e, [d, h] = V(!1), [y, w] = V(c), g = (b) => {
    y || (h(!d), p && p(!d, b));
  }, x = (b) => {
    if ((b.key === "Enter" || b.key === " ") && !y) {
      const E = {
        target: {
          ariaLabel: s,
          name: o
        }
      };
      h(!d), p && p(!d, E);
    }
  };
  return te(() => {
    w(c);
  }, [c]), te(() => {
    h(typeof a == "boolean" ? a : !1);
  }, [a]), /* @__PURE__ */ A.jsx("div", { className: "Switch", children: /* @__PURE__ */ A.jsxs("label", { children: [
    /* @__PURE__ */ A.jsxs(
      "div",
      {
        className: G({
          "Switch-light": u === ke.Light,
          "Switch-dark": u === ke.Dark,
          "Switch-green": u === ke.Green,
          "Switch-large": v === Le.Large,
          "Switch-medium": v === Le.Medium,
          "Switch-small": v === Le.Small,
          "Switch-light-active": d && u === ke.Light,
          "Switch-dark-active": d && u === ke.Dark,
          "Switch-green-active": d && u === ke.Green,
          "Switch-large-active": d && v === Le.Large,
          "Switch-medium-active": d && v === Le.Medium,
          "Switch-small-active": d && v === Le.Small,
          "Switch-disabled": y,
          [i || ""]: !!i
        }),
        tabIndex: 0,
        role: "input",
        onKeyDown: x,
        children: [
          /* @__PURE__ */ A.jsx(
            "input",
            {
              ref: t,
              "aria-label": s,
              tabIndex: -1,
              type: "checkbox",
              name: o,
              id: n,
              onChange: g
            }
          ),
          /* @__PURE__ */ A.jsx(
            "div",
            {
              className: G({
                "Switch-ellipse": !0
              })
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ A.jsx(
      "div",
      {
        className: G({
          "Switch-label": !0,
          "Switch-label-small": v === Le.Small,
          "Switch-label-dark": u === ke.Dark,
          "Switch-label-green": u === ke.Green
        }),
        children: l
      }
    )
  ] }) });
});
To.displayName = "Switch";
var Wn = /* @__PURE__ */ ((e) => (e.Large = "large", e.Small = "small", e))(Wn || {});
const tc = (e) => {
  var S;
  const {
    className: t,
    size: n = Wn.Large,
    tabs: o,
    gap: i,
    activeTab: a,
    activeColor: c,
    tabMarginBottom: s = 16
  } = e, [l, u] = V((S = o[0]) == null ? void 0 : S.id), [v, p] = V(6), [d, h] = V(0), [y, w] = V("none"), [g, x] = V(0), b = it(() => o.find((k) => k.id === l), [l, o]), E = re(new Array(o.length)), $ = (k, R, _) => {
    R !== l && (w("left 200ms linear, width 200ms linear"), p(k.currentTarget.offsetLeft), h(k.currentTarget.offsetWidth), u(R), _ && _(R));
  };
  return je(() => {
    if (a) {
      const k = o.findIndex((R) => R.id === a);
      x(k), u(a);
    }
  }, [a, o]), je(() => {
    const k = E.current[g].offsetWidth, R = E.current[g].offsetLeft;
    h(k), p(R);
  }, [g]), /* @__PURE__ */ A.jsxs("div", { className: "Tabs", children: [
    /* @__PURE__ */ A.jsxs(
      "div",
      {
        style: { gap: i },
        className: G({
          "Tabs-base": !0,
          [t || ""]: !!t
        }),
        children: [
          o == null ? void 0 : o.map((k, R) => /* @__PURE__ */ A.jsx(
            "button",
            {
              ref: (_) => E.current[R] = _,
              "aria-label": k.label,
              disabled: k.disabled,
              className: G({
                "Tab-root": !0,
                "Tab-root-active": l === k.id,
                "Tab-root-small": n === Wn.Small
              }),
              onClick: (_) => $(_, k.id, k.onClick),
              children: /* @__PURE__ */ A.jsx(
                "div",
                {
                  style: { marginBottom: s },
                  className: G({
                    "Tab-label": !0
                  }),
                  children: k.label
                }
              )
            },
            k.id
          )),
          /* @__PURE__ */ A.jsx(
            "div",
            {
              style: {
                left: v,
                width: d,
                transition: y,
                backgroundColor: c
              },
              className: "Tab-active-line"
            }
          )
        ]
      }
    ),
    b && b.content && /* @__PURE__ */ A.jsx("div", { className: "Tab-content", children: b.content })
  ] });
};
const Ao = Pe.forwardRef((e, t) => {
  const {
    className: n,
    color: o,
    ariaLabel: i,
    content: a,
    header: c,
    contentMarginTop: s = 0,
    isOpen: l,
    onChange: u
  } = e, [v, p] = V(l), d = re(null), h = (g, x) => {
    const b = g.scrollHeight;
    g.style.height = (x ? b : 0) + "px";
  }, y = () => {
    p(!v), u && u(!v), d.current && h(d.current, !v);
  }, w = (g) => {
    (g.key === "Enter" || g.key === " ") && (p(!v), u && u(!v), d.current && h(d.current, !v));
  };
  return je(() => {
    const g = typeof l == "boolean" ? l : !1;
    d.current && h(d.current, g), p(g);
  }, [l]), /* @__PURE__ */ A.jsxs(
    "div",
    {
      className: G({
        Accordion: !0,
        [n || ""]: !!n
      }),
      children: [
        /* @__PURE__ */ A.jsxs(
          "div",
          {
            ref: t,
            tabIndex: 0,
            className: "Accordion-heading",
            role: "button",
            "aria-expanded": "true",
            "aria-label": i,
            onClick: y,
            onKeyDown: w,
            children: [
              /* @__PURE__ */ A.jsx("div", { style: { color: o }, className: "Accordion-heading-label", children: c }),
              /* @__PURE__ */ A.jsx(
                "div",
                {
                  className: G({
                    "Accordion-heading-arrow": !0,
                    "Accordion-heading-arrow-up": v
                  }),
                  children: /* @__PURE__ */ A.jsx(_r, { width: "24", height: "24", color: o })
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ A.jsx(
          "div",
          {
            style: { marginTop: s },
            ref: d,
            className: G({
              "Accordion-details": !0,
              "Accordion-details-open": v
            }),
            children: a
          }
        )
      ]
    }
  );
});
Ao.displayName = "Accordion";
var en = /* @__PURE__ */ ((e) => (e.Large = "large", e.Medium = "medium", e))(en || {});
const nc = (e) => {
  var p;
  const { className: t, size: n = en.Medium, tags: o, gap: i, activeTag: a, activeColor: c } = e, [s, l] = V((p = o[0]) == null ? void 0 : p.id), u = it(() => o.find((d) => d.id === s), [s, o]), v = (d, h) => {
    l(d), h && h(d);
  };
  return je(() => {
    a && l(a);
  }, [a]), /* @__PURE__ */ A.jsxs("div", { className: "Tags", children: [
    /* @__PURE__ */ A.jsx(
      "div",
      {
        style: { gap: i },
        className: G({
          "Tags-base": !0,
          [t || ""]: !!t
        }),
        children: o == null ? void 0 : o.map((d) => /* @__PURE__ */ A.jsx(
          "button",
          {
            "aria-label": d.label,
            id: d.id,
            disabled: d.disabled,
            style: { backgroundColor: s === d.id ? c : "" },
            className: G({
              Tag: !0,
              "Tag-medium": n === en.Medium,
              "Tag-large": n === en.Large,
              "Tag-active": s === d.id,
              [t || ""]: !!t
            }),
            onClick: () => v(d.id, d.onClick),
            children: /* @__PURE__ */ A.jsxs("div", { className: "Tag-label", children: [
              d.startIcon && /* @__PURE__ */ A.jsx("span", { className: "Tag-icon-left", children: d.startIcon }),
              d.label,
              d.endIcon && /* @__PURE__ */ A.jsx("span", { className: "Tag-icon-right", children: d.endIcon })
            ] })
          },
          d.id
        ))
      }
    ),
    u && u.content && /* @__PURE__ */ A.jsx("div", { className: "Tag-content", children: u.content })
  ] });
};
var Mt = /* @__PURE__ */ ((e) => (e.Large = "large", e.Medium = "medium", e))(Mt || {}), tn = /* @__PURE__ */ ((e) => (e.Round = "round", e.Square = "square", e))(tn || {});
const rc = (e) => {
  var k;
  const {
    className: t,
    size: n = Mt.Medium,
    variant: o = tn.Round,
    tags: i,
    gap: a,
    activeTag: c,
    activeColor: s,
    backgroundColor: l
  } = e, [u, v] = V((k = i[0]) == null ? void 0 : k.id), [p, d] = V(6), [h, y] = V(0), [w, g] = V("none"), [x, b] = V(0), E = it(() => i.find((R) => R.id === u), [u, i]), $ = re(new Array(i.length)), S = (R, _, N) => {
    _ !== u && (g("left 200ms linear, width 200ms linear"), d(R.currentTarget.offsetLeft), y(R.currentTarget.offsetWidth), v(_), N && N(_));
  };
  return je(() => {
    if (c) {
      const R = i.findIndex((_) => _.id === c);
      b(R), v(c);
    }
  }, [c, i]), je(() => {
    const R = $.current[x].offsetWidth, _ = $.current[x].offsetLeft;
    y(R), d(_);
  }, [x]), /* @__PURE__ */ A.jsxs("div", { className: "SwitchTags", children: [
    /* @__PURE__ */ A.jsxs(
      "div",
      {
        style: { gap: a, backgroundColor: l },
        className: G({
          "SwitchTags-base": !0,
          "SwitchTags-base-round": o === tn.Round,
          "SwitchTags-base-square": o === tn.Square,
          [t || ""]: !!t
        }),
        children: [
          i == null ? void 0 : i.map((R, _) => /* @__PURE__ */ A.jsxs(
            "button",
            {
              ref: (N) => $.current[_] = N,
              "aria-label": R.label,
              id: R.id,
              disabled: R.disabled,
              className: G({
                SwitchTag: !0,
                "SwitchTag-medium": n === Mt.Medium,
                "SwitchTag-large": n === Mt.Large,
                "SwitchTag-active": u === R.id,
                [t || ""]: !!t
              }),
              onClick: (N) => S(N, R.id, R.onClick),
              children: [
                R.startIcon && /* @__PURE__ */ A.jsx("span", { className: "SwitchTag-icon-left", children: R.startIcon }),
                R.label,
                R.endIcon && /* @__PURE__ */ A.jsx("span", { className: "SwitchTag-icon-right", children: R.endIcon })
              ]
            },
            R.id
          )),
          /* @__PURE__ */ A.jsx(
            "div",
            {
              style: {
                left: p,
                width: h,
                transition: w,
                backgroundColor: s
              },
              className: G({
                ActiveTab: !0,
                "ActiveTab-small": n === Mt.Medium
              })
            }
          )
        ]
      }
    ),
    E && E.content && /* @__PURE__ */ A.jsx("div", { className: "Tag-content", children: E.content })
  ] });
};
const _o = Pe.forwardRef((e, t) => {
  const { id: n, ariaLabel: o, children: i, onClick: a } = e, c = () => {
    a && a();
  };
  return /* @__PURE__ */ A.jsx(
    "button",
    {
      type: "button",
      onClick: c,
      ref: t,
      "aria-label": o,
      id: n,
      className: "IconButton",
      children: i
    }
  );
});
_o.displayName = "IconButton";
function ce() {
  return ce = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
    }
    return e;
  }, ce.apply(this, arguments);
}
function ot(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(i) {
    if (e == null || e(i), n === !1 || !i.defaultPrevented)
      return t == null ? void 0 : t(i);
  };
}
function No(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function jr(...e) {
  return (t) => e.forEach(
    (n) => No(n, t)
  );
}
function ct(...e) {
  return rt(jr(...e), e);
}
function Ir(e, t = []) {
  let n = [];
  function o(a, c) {
    const s = /* @__PURE__ */ Fn(c), l = n.length;
    n = [
      ...n,
      c
    ];
    function u(p) {
      const x = p, { scope: d, children: h } = x, y = oe(x, ["scope", "children"]), w = (d == null ? void 0 : d[e][l]) || s, g = it(
        () => y,
        Object.values(y)
      );
      return /* @__PURE__ */ ee(w.Provider, {
        value: g
      }, h);
    }
    function v(p, d) {
      const h = (d == null ? void 0 : d[e][l]) || s, y = kr(h);
      if (y)
        return y;
      if (c !== void 0)
        return c;
      throw new Error(`\`${p}\` must be used within \`${a}\``);
    }
    return u.displayName = a + "Provider", [
      u,
      v
    ];
  }
  const i = () => {
    const a = n.map((c) => /* @__PURE__ */ Fn(c));
    return function(s) {
      const l = (s == null ? void 0 : s[e]) || a;
      return it(
        () => ({
          [`__scope${e}`]: Q(j({}, s), {
            [e]: l
          })
        }),
        [
          s,
          l
        ]
      );
    };
  };
  return i.scopeName = e, [
    o,
    Do(i, ...t)
  ];
}
function Do(...e) {
  const t = e[0];
  if (e.length === 1)
    return t;
  const n = () => {
    const o = e.map(
      (i) => ({
        useScope: i(),
        scopeName: i.scopeName
      })
    );
    return function(a) {
      const c = o.reduce((s, { useScope: l, scopeName: u }) => {
        const p = l(a)[`__scope${u}`];
        return j(j({}, s), p);
      }, {});
      return it(
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
const Gn = /* @__PURE__ */ ye((e, t) => {
  const c = e, { children: n } = c, o = oe(c, ["children"]), i = pt.toArray(n), a = i.find(jo);
  if (a) {
    const s = a.props.children, l = i.map((u) => u === a ? pt.count(s) > 1 ? pt.only(null) : /* @__PURE__ */ an(s) ? s.props.children : null : u);
    return /* @__PURE__ */ ee(Vn, ce({}, o, {
      ref: t
    }), /* @__PURE__ */ an(s) ? /* @__PURE__ */ Kn(s, void 0, l) : null);
  }
  return /* @__PURE__ */ ee(Vn, ce({}, o, {
    ref: t
  }), n);
});
Gn.displayName = "Slot";
const Vn = /* @__PURE__ */ ye((e, t) => {
  const i = e, { children: n } = i, o = oe(i, ["children"]);
  return /* @__PURE__ */ an(n) ? /* @__PURE__ */ Kn(n, Q(j({}, Io(o, n.props)), {
    ref: t ? jr(t, n.ref) : n.ref
  })) : pt.count(n) > 1 ? pt.only(null) : null;
});
Vn.displayName = "SlotClone";
const Lo = ({ children: e }) => /* @__PURE__ */ ee(yo, null, e);
function jo(e) {
  return /* @__PURE__ */ an(e) && e.type === Lo;
}
function Io(e, t) {
  const n = j({}, t);
  for (const o in t) {
    const i = e[o], a = t[o];
    /^on[A-Z]/.test(o) ? i && a ? n[o] = (...s) => {
      a(...s), i(...s);
    } : i && (n[o] = i) : o === "style" ? n[o] = j(j({}, i), a) : o === "className" && (n[o] = [
      i,
      a
    ].filter(Boolean).join(" "));
  }
  return j(j({}, e), n);
}
const Fo = [
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
], zt = Fo.reduce((e, t) => {
  const n = /* @__PURE__ */ ye((o, i) => {
    const l = o, { asChild: a } = l, c = oe(l, ["asChild"]), s = a ? Gn : t;
    return te(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ ee(s, ce({}, c, {
      ref: i
    }));
  });
  return n.displayName = `Primitive.${t}`, Q(j({}, e), {
    [t]: n
  });
}, {});
function Mo(e, t) {
  e && Tr(
    () => e.dispatchEvent(t)
  );
}
function Ue(e) {
  const t = re(e);
  return te(() => {
    t.current = e;
  }), it(
    () => (...n) => {
      var o;
      return (o = t.current) === null || o === void 0 ? void 0 : o.call(t, ...n);
    },
    []
  );
}
function Bo(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Ue(e);
  te(() => {
    const o = (i) => {
      i.key === "Escape" && n(i);
    };
    return t.addEventListener("keydown", o), () => t.removeEventListener("keydown", o);
  }, [
    n,
    t
  ]);
}
const zn = "dismissableLayer.update", Wo = "dismissableLayer.pointerDownOutside", Vo = "dismissableLayer.focusOutside";
let lr;
const zo = /* @__PURE__ */ Fn({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Uo = /* @__PURE__ */ ye((e, t) => {
  var n;
  const _ = e, { disableOutsidePointerEvents: o = !1, onEscapeKeyDown: i, onPointerDownOutside: a, onFocusOutside: c, onInteractOutside: s, onDismiss: l } = _, u = oe(_, ["disableOutsidePointerEvents", "onEscapeKeyDown", "onPointerDownOutside", "onFocusOutside", "onInteractOutside", "onDismiss"]), v = kr(zo), [p, d] = V(null), h = (n = p == null ? void 0 : p.ownerDocument) !== null && n !== void 0 ? n : globalThis == null ? void 0 : globalThis.document, [, y] = V({}), w = ct(
    t,
    (N) => d(N)
  ), g = Array.from(v.layers), [x] = [
    ...v.layersWithOutsidePointerEventsDisabled
  ].slice(-1), b = g.indexOf(x), E = p ? g.indexOf(p) : -1, $ = v.layersWithOutsidePointerEventsDisabled.size > 0, S = E >= b, k = Yo((N) => {
    const X = N.target, Y = [
      ...v.branches
    ].some(
      (q) => q.contains(X)
    );
    !S || Y || (a == null || a(N), s == null || s(N), N.defaultPrevented || l == null || l());
  }, h), R = Ho((N) => {
    const X = N.target;
    [
      ...v.branches
    ].some(
      (q) => q.contains(X)
    ) || (c == null || c(N), s == null || s(N), N.defaultPrevented || l == null || l());
  }, h);
  return Bo((N) => {
    E === v.layers.size - 1 && (i == null || i(N), !N.defaultPrevented && l && (N.preventDefault(), l()));
  }, h), te(() => {
    if (p)
      return o && (v.layersWithOutsidePointerEventsDisabled.size === 0 && (lr = h.body.style.pointerEvents, h.body.style.pointerEvents = "none"), v.layersWithOutsidePointerEventsDisabled.add(p)), v.layers.add(p), ur(), () => {
        o && v.layersWithOutsidePointerEventsDisabled.size === 1 && (h.body.style.pointerEvents = lr);
      };
  }, [
    p,
    h,
    o,
    v
  ]), te(() => () => {
    p && (v.layers.delete(p), v.layersWithOutsidePointerEventsDisabled.delete(p), ur());
  }, [
    p,
    v
  ]), te(() => {
    const N = () => y({});
    return document.addEventListener(zn, N), () => document.removeEventListener(zn, N);
  }, []), /* @__PURE__ */ ee(zt.div, ce({}, u, {
    ref: w,
    style: j({
      pointerEvents: $ ? S ? "auto" : "none" : void 0
    }, e.style),
    onFocusCapture: ot(e.onFocusCapture, R.onFocusCapture),
    onBlurCapture: ot(e.onBlurCapture, R.onBlurCapture),
    onPointerDownCapture: ot(e.onPointerDownCapture, k.onPointerDownCapture)
  }));
});
function Yo(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Ue(e), o = re(!1), i = re(() => {
  });
  return te(() => {
    const a = (s) => {
      if (s.target && !o.current) {
        let u = function() {
          Fr(Wo, n, l, {
            discrete: !0
          });
        };
        const l = {
          originalEvent: s
        };
        s.pointerType === "touch" ? (t.removeEventListener("click", i.current), i.current = u, t.addEventListener("click", i.current, {
          once: !0
        })) : u();
      } else
        t.removeEventListener("click", i.current);
      o.current = !1;
    }, c = window.setTimeout(() => {
      t.addEventListener("pointerdown", a);
    }, 0);
    return () => {
      window.clearTimeout(c), t.removeEventListener("pointerdown", a), t.removeEventListener("click", i.current);
    };
  }, [
    t,
    n
  ]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => o.current = !0
  };
}
function Ho(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Ue(e), o = re(!1);
  return te(() => {
    const i = (a) => {
      a.target && !o.current && Fr(Vo, n, {
        originalEvent: a
      }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", i), () => t.removeEventListener("focusin", i);
  }, [
    t,
    n
  ]), {
    onFocusCapture: () => o.current = !0,
    onBlurCapture: () => o.current = !1
  };
}
function ur() {
  const e = new CustomEvent(zn);
  document.dispatchEvent(e);
}
function Fr(e, t, n, { discrete: o }) {
  const i = n.originalEvent.target, a = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && i.addEventListener(e, t, {
    once: !0
  }), o ? Mo(i, a) : i.dispatchEvent(a);
}
let _n = 0;
function Ko() {
  te(() => {
    var e, t;
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (e = n[0]) !== null && e !== void 0 ? e : fr()), document.body.insertAdjacentElement("beforeend", (t = n[1]) !== null && t !== void 0 ? t : fr()), _n++, () => {
      _n === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(
        (o) => o.remove()
      ), _n--;
    };
  }, []);
}
function fr() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
const Nn = "focusScope.autoFocusOnMount", Dn = "focusScope.autoFocusOnUnmount", dr = {
  bubbles: !1,
  cancelable: !0
}, Go = /* @__PURE__ */ ye((e, t) => {
  const w = e, { loop: n = !1, trapped: o = !1, onMountAutoFocus: i, onUnmountAutoFocus: a } = w, c = oe(w, ["loop", "trapped", "onMountAutoFocus", "onUnmountAutoFocus"]), [s, l] = V(null), u = Ue(i), v = Ue(a), p = re(null), d = ct(
    t,
    (g) => l(g)
  ), h = re({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  te(() => {
    if (o) {
      let g = function($) {
        if (h.paused || !s)
          return;
        const S = $.target;
        s.contains(S) ? p.current = S : Ve(p.current, {
          select: !0
        });
      }, x = function($) {
        if (h.paused || !s)
          return;
        const S = $.relatedTarget;
        S !== null && (s.contains(S) || Ve(p.current, {
          select: !0
        }));
      }, b = function($) {
        if (document.activeElement === document.body)
          for (const k of $)
            k.removedNodes.length > 0 && Ve(s);
      };
      document.addEventListener("focusin", g), document.addEventListener("focusout", x);
      const E = new MutationObserver(b);
      return s && E.observe(s, {
        childList: !0,
        subtree: !0
      }), () => {
        document.removeEventListener("focusin", g), document.removeEventListener("focusout", x), E.disconnect();
      };
    }
  }, [
    o,
    s,
    h.paused
  ]), te(() => {
    if (s) {
      vr.add(h);
      const g = document.activeElement;
      if (!s.contains(g)) {
        const b = new CustomEvent(Nn, dr);
        s.addEventListener(Nn, u), s.dispatchEvent(b), b.defaultPrevented || (qo(ei(Mr(s)), {
          select: !0
        }), document.activeElement === g && Ve(s));
      }
      return () => {
        s.removeEventListener(Nn, u), setTimeout(() => {
          const b = new CustomEvent(Dn, dr);
          s.addEventListener(Dn, v), s.dispatchEvent(b), b.defaultPrevented || Ve(g != null ? g : document.body, {
            select: !0
          }), s.removeEventListener(Dn, v), vr.remove(h);
        }, 0);
      };
    }
  }, [
    s,
    u,
    v,
    h
  ]);
  const y = rt((g) => {
    if (!n && !o || h.paused)
      return;
    const x = g.key === "Tab" && !g.altKey && !g.ctrlKey && !g.metaKey, b = document.activeElement;
    if (x && b) {
      const E = g.currentTarget, [$, S] = Xo(E);
      $ && S ? !g.shiftKey && b === S ? (g.preventDefault(), n && Ve($, {
        select: !0
      })) : g.shiftKey && b === $ && (g.preventDefault(), n && Ve(S, {
        select: !0
      })) : b === E && g.preventDefault();
    }
  }, [
    n,
    o,
    h.paused
  ]);
  return /* @__PURE__ */ ee(zt.div, ce({
    tabIndex: -1
  }, c, {
    ref: d,
    onKeyDown: y
  }));
});
function qo(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const o of e)
    if (Ve(o, {
      select: t
    }), document.activeElement !== n)
      return;
}
function Xo(e) {
  const t = Mr(e), n = pr(t, e), o = pr(t.reverse(), e);
  return [
    n,
    o
  ];
}
function Mr(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const i = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || i ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}
function pr(e, t) {
  for (const n of e)
    if (!Zo(n, {
      upTo: t
    }))
      return n;
}
function Zo(e, { upTo: t }) {
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
function Jo(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Ve(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== n && Jo(e) && t && e.select();
  }
}
const vr = Qo();
function Qo() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = hr(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = hr(e, t), (n = e[0]) === null || n === void 0 || n.resume();
    }
  };
}
function hr(e, t) {
  const n = [
    ...e
  ], o = n.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
function ei(e) {
  return e.filter(
    (t) => t.tagName !== "A"
  );
}
const ht = globalThis != null && globalThis.document ? je : () => {
}, ti = L["useId".toString()] || (() => {
});
let ni = 0;
function ri(e) {
  const [t, n] = L.useState(ti());
  return ht(() => {
    e || n(
      (o) => o != null ? o : String(ni++)
    );
  }, [
    e
  ]), e || (t ? `radix-${t}` : "");
}
const oi = ["top", "right", "bottom", "left"], Ye = Math.min, fe = Math.max, cn = Math.round, Gt = Math.floor, He = (e) => ({
  x: e,
  y: e
}), ii = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, ai = {
  start: "end",
  end: "start"
};
function Un(e, t, n) {
  return fe(e, Ye(t, n));
}
function Ie(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Fe(e) {
  return e.split("-")[0];
}
function gt(e) {
  return e.split("-")[1];
}
function qn(e) {
  return e === "x" ? "y" : "x";
}
function Xn(e) {
  return e === "y" ? "height" : "width";
}
function bt(e) {
  return ["top", "bottom"].includes(Fe(e)) ? "y" : "x";
}
function Zn(e) {
  return qn(bt(e));
}
function ci(e, t, n) {
  n === void 0 && (n = !1);
  const o = gt(e), i = Zn(e), a = Xn(i);
  let c = i === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (c = sn(c)), [c, sn(c)];
}
function si(e) {
  const t = sn(e);
  return [Yn(e), t, Yn(t)];
}
function Yn(e) {
  return e.replace(/start|end/g, (t) => ai[t]);
}
function li(e, t, n) {
  const o = ["left", "right"], i = ["right", "left"], a = ["top", "bottom"], c = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? i : o : t ? o : i;
    case "left":
    case "right":
      return t ? a : c;
    default:
      return [];
  }
}
function ui(e, t, n, o) {
  const i = gt(e);
  let a = li(Fe(e), n === "start", o);
  return i && (a = a.map((c) => c + "-" + i), t && (a = a.concat(a.map(Yn)))), a;
}
function sn(e) {
  return e.replace(/left|right|bottom|top/g, (t) => ii[t]);
}
function fi(e) {
  return j({
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }, e);
}
function Br(e) {
  return typeof e != "number" ? fi(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function ln(e) {
  return Q(j({}, e), {
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function mr(e, t, n) {
  let {
    reference: o,
    floating: i
  } = e;
  const a = bt(t), c = Zn(t), s = Xn(c), l = Fe(t), u = a === "y", v = o.x + o.width / 2 - i.width / 2, p = o.y + o.height / 2 - i.height / 2, d = o[s] / 2 - i[s] / 2;
  let h;
  switch (l) {
    case "top":
      h = {
        x: v,
        y: o.y - i.height
      };
      break;
    case "bottom":
      h = {
        x: v,
        y: o.y + o.height
      };
      break;
    case "right":
      h = {
        x: o.x + o.width,
        y: p
      };
      break;
    case "left":
      h = {
        x: o.x - i.width,
        y: p
      };
      break;
    default:
      h = {
        x: o.x,
        y: o.y
      };
  }
  switch (gt(t)) {
    case "start":
      h[c] -= d * (n && u ? -1 : 1);
      break;
    case "end":
      h[c] += d * (n && u ? -1 : 1);
      break;
  }
  return h;
}
const di = (e, t, n) => Ee(void 0, null, function* () {
  const {
    placement: o = "bottom",
    strategy: i = "absolute",
    middleware: a = [],
    platform: c
  } = n, s = a.filter(Boolean), l = yield c.isRTL == null ? void 0 : c.isRTL(t);
  let u = yield c.getElementRects({
    reference: e,
    floating: t,
    strategy: i
  }), {
    x: v,
    y: p
  } = mr(u, o, l), d = o, h = {}, y = 0;
  for (let w = 0; w < s.length; w++) {
    const {
      name: g,
      fn: x
    } = s[w], {
      x: b,
      y: E,
      data: $,
      reset: S
    } = yield x({
      x: v,
      y: p,
      initialPlacement: o,
      placement: d,
      strategy: i,
      middlewareData: h,
      rects: u,
      platform: c,
      elements: {
        reference: e,
        floating: t
      }
    });
    if (v = b != null ? b : v, p = E != null ? E : p, h = Q(j({}, h), {
      [g]: j(j({}, h[g]), $)
    }), S && y <= 50) {
      y++, typeof S == "object" && (S.placement && (d = S.placement), S.rects && (u = S.rects === !0 ? yield c.getElementRects({
        reference: e,
        floating: t,
        strategy: i
      }) : S.rects), {
        x: v,
        y: p
      } = mr(u, d, l)), w = -1;
      continue;
    }
  }
  return {
    x: v,
    y: p,
    placement: d,
    strategy: i,
    middlewareData: h
  };
});
function Bt(e, t) {
  return Ee(this, null, function* () {
    var n;
    t === void 0 && (t = {});
    const {
      x: o,
      y: i,
      platform: a,
      rects: c,
      elements: s,
      strategy: l
    } = e, {
      boundary: u = "clippingAncestors",
      rootBoundary: v = "viewport",
      elementContext: p = "floating",
      altBoundary: d = !1,
      padding: h = 0
    } = Ie(t, e), y = Br(h), g = s[d ? p === "floating" ? "reference" : "floating" : p], x = ln(yield a.getClippingRect({
      element: (n = yield a.isElement == null ? void 0 : a.isElement(g)) == null || n ? g : g.contextElement || (yield a.getDocumentElement == null ? void 0 : a.getDocumentElement(s.floating)),
      boundary: u,
      rootBoundary: v,
      strategy: l
    })), b = p === "floating" ? Q(j({}, c.floating), {
      x: o,
      y: i
    }) : c.reference, E = yield a.getOffsetParent == null ? void 0 : a.getOffsetParent(s.floating), $ = (yield a.isElement == null ? void 0 : a.isElement(E)) ? (yield a.getScale == null ? void 0 : a.getScale(E)) || {
      x: 1,
      y: 1
    } : {
      x: 1,
      y: 1
    }, S = ln(a.convertOffsetParentRelativeRectToViewportRelativeRect ? yield a.convertOffsetParentRelativeRectToViewportRelativeRect({
      rect: b,
      offsetParent: E,
      strategy: l
    }) : b);
    return {
      top: (x.top - S.top + y.top) / $.y,
      bottom: (S.bottom - x.bottom + y.bottom) / $.y,
      left: (x.left - S.left + y.left) / $.x,
      right: (S.right - x.right + y.right) / $.x
    };
  });
}
const gr = (e) => ({
  name: "arrow",
  options: e,
  fn(n) {
    return Ee(this, null, function* () {
      const {
        x: o,
        y: i,
        placement: a,
        rects: c,
        platform: s,
        elements: l,
        middlewareData: u
      } = n, {
        element: v,
        padding: p = 0
      } = Ie(e, n) || {};
      if (v == null)
        return {};
      const d = Br(p), h = {
        x: o,
        y: i
      }, y = Zn(a), w = Xn(y), g = yield s.getDimensions(v), x = y === "y", b = x ? "top" : "left", E = x ? "bottom" : "right", $ = x ? "clientHeight" : "clientWidth", S = c.reference[w] + c.reference[y] - h[y] - c.floating[w], k = h[y] - c.reference[y], R = yield s.getOffsetParent == null ? void 0 : s.getOffsetParent(v);
      let _ = R ? R[$] : 0;
      (!_ || !(yield s.isElement == null ? void 0 : s.isElement(R))) && (_ = l.floating[$] || c.floating[w]);
      const N = S / 2 - k / 2, X = _ / 2 - g[w] / 2 - 1, Y = Ye(d[b], X), q = Ye(d[E], X), B = Y, I = _ - g[w] - q, U = _ / 2 - g[w] / 2 + N, W = Un(B, U, I), H = !u.arrow && gt(a) != null && U != W && c.reference[w] / 2 - (U < B ? Y : q) - g[w] / 2 < 0, K = H ? U < B ? U - B : U - I : 0;
      return {
        [y]: h[y] + K,
        data: j({
          [y]: W,
          centerOffset: U - W - K
        }, H && {
          alignmentOffset: K
        }),
        reset: H
      };
    });
  }
}), pi = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    fn(n) {
      return Ee(this, null, function* () {
        var o, i;
        const {
          placement: a,
          middlewareData: c,
          rects: s,
          initialPlacement: l,
          platform: u,
          elements: v
        } = n, B = Ie(e, n), {
          mainAxis: p = !0,
          crossAxis: d = !0,
          fallbackPlacements: h,
          fallbackStrategy: y = "bestFit",
          fallbackAxisSideDirection: w = "none",
          flipAlignment: g = !0
        } = B, x = oe(B, [
          "mainAxis",
          "crossAxis",
          "fallbackPlacements",
          "fallbackStrategy",
          "fallbackAxisSideDirection",
          "flipAlignment"
        ]);
        if ((o = c.arrow) != null && o.alignmentOffset)
          return {};
        const b = Fe(a), E = Fe(l) === l, $ = yield u.isRTL == null ? void 0 : u.isRTL(v.floating), S = h || (E || !g ? [sn(l)] : si(l));
        !h && w !== "none" && S.push(...ui(l, g, w, $));
        const k = [l, ...S], R = yield Bt(n, x), _ = [];
        let N = ((i = c.flip) == null ? void 0 : i.overflows) || [];
        if (p && _.push(R[b]), d) {
          const I = ci(a, s, $);
          _.push(R[I[0]], R[I[1]]);
        }
        if (N = [...N, {
          placement: a,
          overflows: _
        }], !_.every((I) => I <= 0)) {
          var X, Y;
          const I = (((X = c.flip) == null ? void 0 : X.index) || 0) + 1, U = k[I];
          if (U)
            return {
              data: {
                index: I,
                overflows: N
              },
              reset: {
                placement: U
              }
            };
          let W = (Y = N.filter((H) => H.overflows[0] <= 0).sort((H, K) => H.overflows[1] - K.overflows[1])[0]) == null ? void 0 : Y.placement;
          if (!W)
            switch (y) {
              case "bestFit": {
                var q;
                const H = (q = N.map((K) => [K.placement, K.overflows.filter((ae) => ae > 0).reduce((ae, we) => ae + we, 0)]).sort((K, ae) => K[1] - ae[1])[0]) == null ? void 0 : q[0];
                H && (W = H);
                break;
              }
              case "initialPlacement":
                W = l;
                break;
            }
          if (a !== W)
            return {
              reset: {
                placement: W
              }
            };
        }
        return {};
      });
    }
  };
};
function br(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function yr(e) {
  return oi.some((t) => e[t] >= 0);
}
const vi = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    fn(n) {
      return Ee(this, null, function* () {
        const {
          rects: o
        } = n, c = Ie(e, n), {
          strategy: i = "referenceHidden"
        } = c, a = oe(c, [
          "strategy"
        ]);
        switch (i) {
          case "referenceHidden": {
            const s = yield Bt(n, Q(j({}, a), {
              elementContext: "reference"
            })), l = br(s, o.reference);
            return {
              data: {
                referenceHiddenOffsets: l,
                referenceHidden: yr(l)
              }
            };
          }
          case "escaped": {
            const s = yield Bt(n, Q(j({}, a), {
              altBoundary: !0
            })), l = br(s, o.floating);
            return {
              data: {
                escapedOffsets: l,
                escaped: yr(l)
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
function hi(e, t) {
  return Ee(this, null, function* () {
    const {
      placement: n,
      platform: o,
      elements: i
    } = e, a = yield o.isRTL == null ? void 0 : o.isRTL(i.floating), c = Fe(n), s = gt(n), l = bt(n) === "y", u = ["left", "top"].includes(c) ? -1 : 1, v = a && l ? -1 : 1, p = Ie(t, e);
    let {
      mainAxis: d,
      crossAxis: h,
      alignmentAxis: y
    } = typeof p == "number" ? {
      mainAxis: p,
      crossAxis: 0,
      alignmentAxis: null
    } : j({
      mainAxis: 0,
      crossAxis: 0,
      alignmentAxis: null
    }, p);
    return s && typeof y == "number" && (h = s === "end" ? y * -1 : y), l ? {
      x: h * v,
      y: d * u
    } : {
      x: d * u,
      y: h * v
    };
  });
}
const mi = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    fn(n) {
      return Ee(this, null, function* () {
        const {
          x: o,
          y: i
        } = n, a = yield hi(n, e);
        return {
          x: o + a.x,
          y: i + a.y,
          data: a
        };
      });
    }
  };
}, gi = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    fn(n) {
      return Ee(this, null, function* () {
        const {
          x: o,
          y: i,
          placement: a
        } = n, x = Ie(e, n), {
          mainAxis: c = !0,
          crossAxis: s = !1,
          limiter: l = {
            fn: (b) => {
              let {
                x: E,
                y: $
              } = b;
              return {
                x: E,
                y: $
              };
            }
          }
        } = x, u = oe(x, [
          "mainAxis",
          "crossAxis",
          "limiter"
        ]), v = {
          x: o,
          y: i
        }, p = yield Bt(n, u), d = bt(Fe(a)), h = qn(d);
        let y = v[h], w = v[d];
        if (c) {
          const b = h === "y" ? "top" : "left", E = h === "y" ? "bottom" : "right", $ = y + p[b], S = y - p[E];
          y = Un($, y, S);
        }
        if (s) {
          const b = d === "y" ? "top" : "left", E = d === "y" ? "bottom" : "right", $ = w + p[b], S = w - p[E];
          w = Un($, w, S);
        }
        const g = l.fn(Q(j({}, n), {
          [h]: y,
          [d]: w
        }));
        return Q(j({}, g), {
          data: {
            x: g.x - o,
            y: g.y - i
          }
        });
      });
    }
  };
}, bi = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: o,
        placement: i,
        rects: a,
        middlewareData: c
      } = t, {
        offset: s = 0,
        mainAxis: l = !0,
        crossAxis: u = !0
      } = Ie(e, t), v = {
        x: n,
        y: o
      }, p = bt(i), d = qn(p);
      let h = v[d], y = v[p];
      const w = Ie(s, t), g = typeof w == "number" ? {
        mainAxis: w,
        crossAxis: 0
      } : j({
        mainAxis: 0,
        crossAxis: 0
      }, w);
      if (l) {
        const E = d === "y" ? "height" : "width", $ = a.reference[d] - a.floating[E] + g.mainAxis, S = a.reference[d] + a.reference[E] - g.mainAxis;
        h < $ ? h = $ : h > S && (h = S);
      }
      if (u) {
        var x, b;
        const E = d === "y" ? "width" : "height", $ = ["top", "left"].includes(Fe(i)), S = a.reference[p] - a.floating[E] + ($ && ((x = c.offset) == null ? void 0 : x[p]) || 0) + ($ ? 0 : g.crossAxis), k = a.reference[p] + a.reference[E] + ($ ? 0 : ((b = c.offset) == null ? void 0 : b[p]) || 0) - ($ ? g.crossAxis : 0);
        y < S ? y = S : y > k && (y = k);
      }
      return {
        [d]: h,
        [p]: y
      };
    }
  };
}, yi = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    fn(n) {
      return Ee(this, null, function* () {
        const {
          placement: o,
          rects: i,
          platform: a,
          elements: c
        } = n, R = Ie(e, n), {
          apply: s = () => {
          }
        } = R, l = oe(R, [
          "apply"
        ]), u = yield Bt(n, l), v = Fe(o), p = gt(o), d = bt(o) === "y", {
          width: h,
          height: y
        } = i.floating;
        let w, g;
        v === "top" || v === "bottom" ? (w = v, g = p === ((yield a.isRTL == null ? void 0 : a.isRTL(c.floating)) ? "start" : "end") ? "left" : "right") : (g = v, w = p === "end" ? "top" : "bottom");
        const x = y - u[w], b = h - u[g], E = !n.middlewareData.shift;
        let $ = x, S = b;
        if (d) {
          const _ = h - u.left - u.right;
          S = p || E ? Ye(b, _) : _;
        } else {
          const _ = y - u.top - u.bottom;
          $ = p || E ? Ye(x, _) : _;
        }
        if (E && !p) {
          const _ = fe(u.left, 0), N = fe(u.right, 0), X = fe(u.top, 0), Y = fe(u.bottom, 0);
          d ? S = h - 2 * (_ !== 0 || N !== 0 ? _ + N : fe(u.left, u.right)) : $ = y - 2 * (X !== 0 || Y !== 0 ? X + Y : fe(u.top, u.bottom));
        }
        yield s(Q(j({}, n), {
          availableWidth: S,
          availableHeight: $
        }));
        const k = yield a.getDimensions(c.floating);
        return h !== k.width || y !== k.height ? {
          reset: {
            rects: !0
          }
        } : {};
      });
    }
  };
};
function Ke(e) {
  return Wr(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function de(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Be(e) {
  var t;
  return (t = (Wr(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Wr(e) {
  return e instanceof Node || e instanceof de(e).Node;
}
function Me(e) {
  return e instanceof Element || e instanceof de(e).Element;
}
function Ae(e) {
  return e instanceof HTMLElement || e instanceof de(e).HTMLElement;
}
function wr(e) {
  return typeof ShadowRoot == "undefined" ? !1 : e instanceof ShadowRoot || e instanceof de(e).ShadowRoot;
}
function Ut(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: o,
    display: i
  } = be(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && !["inline", "contents"].includes(i);
}
function wi(e) {
  return ["table", "td", "th"].includes(Ke(e));
}
function Jn(e) {
  const t = Qn(), n = be(e);
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((o) => (n.willChange || "").includes(o)) || ["paint", "layout", "strict", "content"].some((o) => (n.contain || "").includes(o));
}
function xi(e) {
  let t = mt(e);
  for (; Ae(t) && !fn(t); ) {
    if (Jn(t))
      return t;
    t = mt(t);
  }
  return null;
}
function Qn() {
  return typeof CSS == "undefined" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function fn(e) {
  return ["html", "body", "#document"].includes(Ke(e));
}
function be(e) {
  return de(e).getComputedStyle(e);
}
function dn(e) {
  return Me(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  };
}
function mt(e) {
  if (Ke(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    wr(e) && e.host || // Fallback.
    Be(e)
  );
  return wr(t) ? t.host : t;
}
function Vr(e) {
  const t = mt(e);
  return fn(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Ae(t) && Ut(t) ? t : Vr(t);
}
function Wt(e, t, n) {
  var o;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const i = Vr(e), a = i === ((o = e.ownerDocument) == null ? void 0 : o.body), c = de(i);
  return a ? t.concat(c, c.visualViewport || [], Ut(i) ? i : [], c.frameElement && n ? Wt(c.frameElement) : []) : t.concat(i, Wt(i, [], n));
}
function zr(e) {
  const t = be(e);
  let n = parseFloat(t.width) || 0, o = parseFloat(t.height) || 0;
  const i = Ae(e), a = i ? e.offsetWidth : n, c = i ? e.offsetHeight : o, s = cn(n) !== a || cn(o) !== c;
  return s && (n = a, o = c), {
    width: n,
    height: o,
    $: s
  };
}
function er(e) {
  return Me(e) ? e : e.contextElement;
}
function vt(e) {
  const t = er(e);
  if (!Ae(t))
    return He(1);
  const n = t.getBoundingClientRect(), {
    width: o,
    height: i,
    $: a
  } = zr(t);
  let c = (a ? cn(n.width) : n.width) / o, s = (a ? cn(n.height) : n.height) / i;
  return (!c || !Number.isFinite(c)) && (c = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: c,
    y: s
  };
}
const Ci = /* @__PURE__ */ He(0);
function Ur(e) {
  const t = de(e);
  return !Qn() || !t.visualViewport ? Ci : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function $i(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== de(e) ? !1 : t;
}
function at(e, t, n, o) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const i = e.getBoundingClientRect(), a = er(e);
  let c = He(1);
  t && (o ? Me(o) && (c = vt(o)) : c = vt(e));
  const s = $i(a, n, o) ? Ur(a) : He(0);
  let l = (i.left + s.x) / c.x, u = (i.top + s.y) / c.y, v = i.width / c.x, p = i.height / c.y;
  if (a) {
    const d = de(a), h = o && Me(o) ? de(o) : o;
    let y = d.frameElement;
    for (; y && o && h !== d; ) {
      const w = vt(y), g = y.getBoundingClientRect(), x = be(y), b = g.left + (y.clientLeft + parseFloat(x.paddingLeft)) * w.x, E = g.top + (y.clientTop + parseFloat(x.paddingTop)) * w.y;
      l *= w.x, u *= w.y, v *= w.x, p *= w.y, l += b, u += E, y = de(y).frameElement;
    }
  }
  return ln({
    width: v,
    height: p,
    x: l,
    y: u
  });
}
function Si(e) {
  let {
    rect: t,
    offsetParent: n,
    strategy: o
  } = e;
  const i = Ae(n), a = Be(n);
  if (n === a)
    return t;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = He(1);
  const l = He(0);
  if ((i || !i && o !== "fixed") && ((Ke(n) !== "body" || Ut(a)) && (c = dn(n)), Ae(n))) {
    const u = at(n);
    s = vt(n), l.x = u.x + n.clientLeft, l.y = u.y + n.clientTop;
  }
  return {
    width: t.width * s.x,
    height: t.height * s.y,
    x: t.x * s.x - c.scrollLeft * s.x + l.x,
    y: t.y * s.y - c.scrollTop * s.y + l.y
  };
}
function Ei(e) {
  return Array.from(e.getClientRects());
}
function Yr(e) {
  return at(Be(e)).left + dn(e).scrollLeft;
}
function Pi(e) {
  const t = Be(e), n = dn(e), o = e.ownerDocument.body, i = fe(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth), a = fe(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
  let c = -n.scrollLeft + Yr(e);
  const s = -n.scrollTop;
  return be(o).direction === "rtl" && (c += fe(t.clientWidth, o.clientWidth) - i), {
    width: i,
    height: a,
    x: c,
    y: s
  };
}
function Ri(e, t) {
  const n = de(e), o = Be(e), i = n.visualViewport;
  let a = o.clientWidth, c = o.clientHeight, s = 0, l = 0;
  if (i) {
    a = i.width, c = i.height;
    const u = Qn();
    (!u || u && t === "fixed") && (s = i.offsetLeft, l = i.offsetTop);
  }
  return {
    width: a,
    height: c,
    x: s,
    y: l
  };
}
function Oi(e, t) {
  const n = at(e, !0, t === "fixed"), o = n.top + e.clientTop, i = n.left + e.clientLeft, a = Ae(e) ? vt(e) : He(1), c = e.clientWidth * a.x, s = e.clientHeight * a.y, l = i * a.x, u = o * a.y;
  return {
    width: c,
    height: s,
    x: l,
    y: u
  };
}
function xr(e, t, n) {
  let o;
  if (t === "viewport")
    o = Ri(e, n);
  else if (t === "document")
    o = Pi(Be(e));
  else if (Me(t))
    o = Oi(t, n);
  else {
    const i = Ur(e);
    o = Q(j({}, t), {
      x: t.x - i.x,
      y: t.y - i.y
    });
  }
  return ln(o);
}
function Hr(e, t) {
  const n = mt(e);
  return n === t || !Me(n) || fn(n) ? !1 : be(n).position === "fixed" || Hr(n, t);
}
function ki(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let o = Wt(e, [], !1).filter((s) => Me(s) && Ke(s) !== "body"), i = null;
  const a = be(e).position === "fixed";
  let c = a ? mt(e) : e;
  for (; Me(c) && !fn(c); ) {
    const s = be(c), l = Jn(c);
    !l && s.position === "fixed" && (i = null), (a ? !l && !i : !l && s.position === "static" && !!i && ["absolute", "fixed"].includes(i.position) || Ut(c) && !l && Hr(e, c)) ? o = o.filter((v) => v !== c) : i = s, c = mt(c);
  }
  return t.set(e, o), o;
}
function Ti(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: o,
    strategy: i
  } = e;
  const c = [...n === "clippingAncestors" ? ki(t, this._c) : [].concat(n), o], s = c[0], l = c.reduce((u, v) => {
    const p = xr(t, v, i);
    return u.top = fe(p.top, u.top), u.right = Ye(p.right, u.right), u.bottom = Ye(p.bottom, u.bottom), u.left = fe(p.left, u.left), u;
  }, xr(t, s, i));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function Ai(e) {
  return zr(e);
}
function _i(e, t, n) {
  const o = Ae(t), i = Be(t), a = n === "fixed", c = at(e, !0, a, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = He(0);
  if (o || !o && !a)
    if ((Ke(t) !== "body" || Ut(i)) && (s = dn(t)), o) {
      const u = at(t, !0, a, t);
      l.x = u.x + t.clientLeft, l.y = u.y + t.clientTop;
    } else
      i && (l.x = Yr(i));
  return {
    x: c.left + s.scrollLeft - l.x,
    y: c.top + s.scrollTop - l.y,
    width: c.width,
    height: c.height
  };
}
function Cr(e, t) {
  return !Ae(e) || be(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function Kr(e, t) {
  const n = de(e);
  if (!Ae(e))
    return n;
  let o = Cr(e, t);
  for (; o && wi(o) && be(o).position === "static"; )
    o = Cr(o, t);
  return o && (Ke(o) === "html" || Ke(o) === "body" && be(o).position === "static" && !Jn(o)) ? n : o || xi(e) || n;
}
const Ni = function(e) {
  return Ee(this, null, function* () {
    let {
      reference: t,
      floating: n,
      strategy: o
    } = e;
    const i = this.getOffsetParent || Kr, a = this.getDimensions;
    return {
      reference: _i(t, yield i(n), o),
      floating: j({
        x: 0,
        y: 0
      }, yield a(n))
    };
  });
};
function Di(e) {
  return be(e).direction === "rtl";
}
const Li = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Si,
  getDocumentElement: Be,
  getClippingRect: Ti,
  getOffsetParent: Kr,
  getElementRects: Ni,
  getClientRects: Ei,
  getDimensions: Ai,
  getScale: vt,
  isElement: Me,
  isRTL: Di
};
function ji(e, t) {
  let n = null, o;
  const i = Be(e);
  function a() {
    clearTimeout(o), n && n.disconnect(), n = null;
  }
  function c(s, l) {
    s === void 0 && (s = !1), l === void 0 && (l = 1), a();
    const {
      left: u,
      top: v,
      width: p,
      height: d
    } = e.getBoundingClientRect();
    if (s || t(), !p || !d)
      return;
    const h = Gt(v), y = Gt(i.clientWidth - (u + p)), w = Gt(i.clientHeight - (v + d)), g = Gt(u), b = {
      rootMargin: -h + "px " + -y + "px " + -w + "px " + -g + "px",
      threshold: fe(0, Ye(1, l)) || 1
    };
    let E = !0;
    function $(S) {
      const k = S[0].intersectionRatio;
      if (k !== l) {
        if (!E)
          return c();
        k ? c(!1, k) : o = setTimeout(() => {
          c(!1, 1e-7);
        }, 100);
      }
      E = !1;
    }
    try {
      n = new IntersectionObserver($, Q(j({}, b), {
        // Handle <iframe>s
        root: i.ownerDocument
      }));
    } catch (S) {
      n = new IntersectionObserver($, b);
    }
    n.observe(e);
  }
  return c(!0), a;
}
function Ii(e, t, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: a = !0,
    elementResize: c = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = o, u = er(e), v = i || a ? [...u ? Wt(u) : [], ...Wt(t)] : [];
  v.forEach((x) => {
    i && x.addEventListener("scroll", n, {
      passive: !0
    }), a && x.addEventListener("resize", n);
  });
  const p = u && s ? ji(u, n) : null;
  let d = -1, h = null;
  c && (h = new ResizeObserver((x) => {
    let [b] = x;
    b && b.target === u && h && (h.unobserve(t), cancelAnimationFrame(d), d = requestAnimationFrame(() => {
      h && h.observe(t);
    })), n();
  }), u && !l && h.observe(u), h.observe(t));
  let y, w = l ? at(e) : null;
  l && g();
  function g() {
    const x = at(e);
    w && (x.x !== w.x || x.y !== w.y || x.width !== w.width || x.height !== w.height) && n(), w = x, y = requestAnimationFrame(g);
  }
  return n(), () => {
    v.forEach((x) => {
      i && x.removeEventListener("scroll", n), a && x.removeEventListener("resize", n);
    }), p && p(), h && h.disconnect(), h = null, l && cancelAnimationFrame(y);
  };
}
const Fi = (e, t, n) => {
  const o = /* @__PURE__ */ new Map(), i = j({
    platform: Li
  }, n), a = Q(j({}, i.platform), {
    _c: o
  });
  return di(e, t, Q(j({}, i), {
    platform: a
  }));
}, Mi = (e) => {
  function t(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const {
        element: o,
        padding: i
      } = typeof e == "function" ? e(n) : e;
      return o && t(o) ? o.current != null ? gr({
        element: o.current,
        padding: i
      }).fn(n) : {} : o ? gr({
        element: o,
        padding: i
      }).fn(n) : {};
    }
  };
};
var nn = typeof document != "undefined" ? je : te;
function un(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, o, i;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n != t.length)
        return !1;
      for (o = n; o-- !== 0; )
        if (!un(e[o], t[o]))
          return !1;
      return !0;
    }
    if (i = Object.keys(e), n = i.length, n !== Object.keys(t).length)
      return !1;
    for (o = n; o-- !== 0; )
      if (!{}.hasOwnProperty.call(t, i[o]))
        return !1;
    for (o = n; o-- !== 0; ) {
      const a = i[o];
      if (!(a === "_owner" && e.$$typeof) && !un(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Gr(e) {
  return typeof window == "undefined" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function $r(e, t) {
  const n = Gr(e);
  return Math.round(t * n) / n;
}
function Sr(e) {
  const t = L.useRef(e);
  return nn(() => {
    t.current = e;
  }), t;
}
function Bi(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: o = [],
    platform: i,
    elements: {
      reference: a,
      floating: c
    } = {},
    transform: s = !0,
    whileElementsMounted: l,
    open: u
  } = e, [v, p] = L.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [d, h] = L.useState(o);
  un(d, o) || h(o);
  const [y, w] = L.useState(null), [g, x] = L.useState(null), b = L.useCallback((W) => {
    W != k.current && (k.current = W, w(W));
  }, [w]), E = L.useCallback((W) => {
    W !== R.current && (R.current = W, x(W));
  }, [x]), $ = a || y, S = c || g, k = L.useRef(null), R = L.useRef(null), _ = L.useRef(v), N = Sr(l), X = Sr(i), Y = L.useCallback(() => {
    if (!k.current || !R.current)
      return;
    const W = {
      placement: t,
      strategy: n,
      middleware: d
    };
    X.current && (W.platform = X.current), Fi(k.current, R.current, W).then((H) => {
      const K = Q(j({}, H), {
        isPositioned: !0
      });
      q.current && !un(_.current, K) && (_.current = K, xo.flushSync(() => {
        p(K);
      }));
    });
  }, [d, t, n, X]);
  nn(() => {
    u === !1 && _.current.isPositioned && (_.current.isPositioned = !1, p((W) => Q(j({}, W), {
      isPositioned: !1
    })));
  }, [u]);
  const q = L.useRef(!1);
  nn(() => (q.current = !0, () => {
    q.current = !1;
  }), []), nn(() => {
    if ($ && (k.current = $), S && (R.current = S), $ && S) {
      if (N.current)
        return N.current($, S, Y);
      Y();
    }
  }, [$, S, Y, N]);
  const B = L.useMemo(() => ({
    reference: k,
    floating: R,
    setReference: b,
    setFloating: E
  }), [b, E]), I = L.useMemo(() => ({
    reference: $,
    floating: S
  }), [$, S]), U = L.useMemo(() => {
    const W = {
      position: n,
      left: 0,
      top: 0
    };
    if (!I.floating)
      return W;
    const H = $r(I.floating, v.x), K = $r(I.floating, v.y);
    return s ? j(Q(j({}, W), {
      transform: "translate(" + H + "px, " + K + "px)"
    }), Gr(I.floating) >= 1.5 && {
      willChange: "transform"
    }) : {
      position: n,
      left: H,
      top: K
    };
  }, [n, s, I.floating, v.x, v.y]);
  return L.useMemo(() => Q(j({}, v), {
    update: Y,
    refs: B,
    elements: I,
    floatingStyles: U
  }), [v, Y, B, I, U]);
}
function Wi(e) {
  const [t, n] = V(void 0);
  return ht(() => {
    if (e) {
      n({
        width: e.offsetWidth,
        height: e.offsetHeight
      });
      const o = new ResizeObserver((i) => {
        if (!Array.isArray(i) || !i.length)
          return;
        const a = i[0];
        let c, s;
        if ("borderBoxSize" in a) {
          const l = a.borderBoxSize, u = Array.isArray(l) ? l[0] : l;
          c = u.inlineSize, s = u.blockSize;
        } else
          c = e.offsetWidth, s = e.offsetHeight;
        n({
          width: c,
          height: s
        });
      });
      return o.observe(e, {
        box: "border-box"
      }), () => o.unobserve(e);
    } else
      n(void 0);
  }, [
    e
  ]), t;
}
const qr = "Popper", [Xr, Zr] = Ir(qr), [Vi, Jr] = Xr(qr), zi = (e) => {
  const { __scopePopper: t, children: n } = e, [o, i] = V(null);
  return /* @__PURE__ */ ee(Vi, {
    scope: t,
    anchor: o,
    onAnchorChange: i
  }, n);
}, Ui = "PopperAnchor", Yi = /* @__PURE__ */ ye((e, t) => {
  const l = e, { __scopePopper: n, virtualRef: o } = l, i = oe(l, ["__scopePopper", "virtualRef"]), a = Jr(Ui, n), c = re(null), s = ct(t, c);
  return te(() => {
    a.onAnchorChange((o == null ? void 0 : o.current) || c.current);
  }), o ? null : /* @__PURE__ */ ee(zt.div, ce({}, i, {
    ref: s
  }));
}), Qr = "PopperContent", [Hi, oc] = Xr(Qr), Ki = /* @__PURE__ */ ye((e, t) => {
  var n, o, i, a, c, s, l, u;
  const he = e, { __scopePopper: v, side: p = "bottom", sideOffset: d = 0, align: h = "center", alignOffset: y = 0, arrowPadding: w = 0, avoidCollisions: g = !0, collisionBoundary: x = [], collisionPadding: b = 0, sticky: E = "partial", hideWhenDetached: $ = !1, updatePositionStrategy: S = "optimized", onPlaced: k } = he, R = oe(he, ["__scopePopper", "side", "sideOffset", "align", "alignOffset", "arrowPadding", "avoidCollisions", "collisionBoundary", "collisionPadding", "sticky", "hideWhenDetached", "updatePositionStrategy", "onPlaced"]), _ = Jr(Qr, v), [N, X] = V(null), Y = ct(
    t,
    (se) => X(se)
  ), [q, B] = V(null), I = Wi(q), U = (n = I == null ? void 0 : I.width) !== null && n !== void 0 ? n : 0, W = (o = I == null ? void 0 : I.height) !== null && o !== void 0 ? o : 0, H = p + (h !== "center" ? "-" + h : ""), K = typeof b == "number" ? b : j({
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }, b), ae = Array.isArray(x) ? x : [
    x
  ], we = ae.length > 0, pe = {
    padding: K,
    boundary: ae.filter(Gi),
    // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
    altBoundary: we
  }, { refs: _e, floatingStyles: Re, placement: Ge, isPositioned: Oe, middlewareData: ie } = Bi({
    // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
    strategy: "fixed",
    placement: H,
    whileElementsMounted: (...se) => Ii(...se, {
      animationFrame: S === "always"
    }),
    elements: {
      reference: _.anchor
    },
    middleware: [
      mi({
        mainAxis: d + W,
        alignmentAxis: y
      }),
      g && gi(j({
        mainAxis: !0,
        crossAxis: !1,
        limiter: E === "partial" ? bi() : void 0
      }, pe)),
      g && pi(j({}, pe)),
      yi(Q(j({}, pe), {
        apply: ({ elements: se, rects: We, availableWidth: Xe, availableHeight: $e }) => {
          const { width: Ct, height: $t } = We.reference, me = se.floating.style;
          me.setProperty("--radix-popper-available-width", `${Xe}px`), me.setProperty("--radix-popper-available-height", `${$e}px`), me.setProperty("--radix-popper-anchor-width", `${Ct}px`), me.setProperty("--radix-popper-anchor-height", `${$t}px`);
        }
      })),
      q && Mi({
        element: q,
        padding: w
      }),
      qi({
        arrowWidth: U,
        arrowHeight: W
      }),
      $ && vi(j({
        strategy: "referenceHidden"
      }, pe))
    ]
  }), [Z, xe] = eo(Ge), ve = Ue(k);
  ht(() => {
    Oe && (ve == null || ve());
  }, [
    Oe,
    ve
  ]);
  const Ce = (i = ie.arrow) === null || i === void 0 ? void 0 : i.x, yt = (a = ie.arrow) === null || a === void 0 ? void 0 : a.y, qe = ((c = ie.arrow) === null || c === void 0 ? void 0 : c.centerOffset) !== 0, [wt, xt] = V();
  return ht(() => {
    N && xt(window.getComputedStyle(N).zIndex);
  }, [
    N
  ]), /* @__PURE__ */ ee("div", {
    ref: _e.setFloating,
    "data-radix-popper-content-wrapper": "",
    style: Q(j({}, Re), {
      transform: Oe ? Re.transform : "translate(0, -200%)",
      // keep off the page when measuring
      minWidth: "max-content",
      zIndex: wt,
      "--radix-popper-transform-origin": [
        (s = ie.transformOrigin) === null || s === void 0 ? void 0 : s.x,
        (l = ie.transformOrigin) === null || l === void 0 ? void 0 : l.y
      ].join(" ")
    }),
    dir: e.dir
  }, /* @__PURE__ */ ee(Hi, {
    scope: v,
    placedSide: Z,
    onArrowChange: B,
    arrowX: Ce,
    arrowY: yt,
    shouldHideArrow: qe
  }, /* @__PURE__ */ ee(zt.div, ce({
    "data-side": Z,
    "data-align": xe
  }, R, {
    ref: Y,
    style: Q(j({}, R.style), {
      // if the PopperContent hasn't been placed yet (not all measurements done)
      // we prevent animations so that users's animation don't kick in too early referring wrong sides
      animation: Oe ? void 0 : "none",
      // hide the content if using the hide middleware and should be hidden
      opacity: (u = ie.hide) !== null && u !== void 0 && u.referenceHidden ? 0 : void 0
    })
  }))));
});
function Gi(e) {
  return e !== null;
}
const qi = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var n, o, i, a, c;
    const { placement: s, rects: l, middlewareData: u } = t, p = ((n = u.arrow) === null || n === void 0 ? void 0 : n.centerOffset) !== 0, d = p ? 0 : e.arrowWidth, h = p ? 0 : e.arrowHeight, [y, w] = eo(s), g = {
      start: "0%",
      center: "50%",
      end: "100%"
    }[w], x = ((o = (i = u.arrow) === null || i === void 0 ? void 0 : i.x) !== null && o !== void 0 ? o : 0) + d / 2, b = ((a = (c = u.arrow) === null || c === void 0 ? void 0 : c.y) !== null && a !== void 0 ? a : 0) + h / 2;
    let E = "", $ = "";
    return y === "bottom" ? (E = p ? g : `${x}px`, $ = `${-h}px`) : y === "top" ? (E = p ? g : `${x}px`, $ = `${l.floating.height + h}px`) : y === "right" ? (E = `${-h}px`, $ = p ? g : `${b}px`) : y === "left" && (E = `${l.floating.width + h}px`, $ = p ? g : `${b}px`), {
      data: {
        x: E,
        y: $
      }
    };
  }
});
function eo(e) {
  const [t, n = "center"] = e.split("-");
  return [
    t,
    n
  ];
}
const Xi = zi, Zi = Yi, Ji = Ki;
function Qi(e, t) {
  return wo((n, o) => {
    const i = t[n][o];
    return i != null ? i : n;
  }, e);
}
const to = (e) => {
  const { present: t, children: n } = e, o = ea(t), i = typeof n == "function" ? n({
    present: o.isPresent
  }) : pt.only(n), a = ct(o.ref, i.ref);
  return typeof n == "function" || o.isPresent ? /* @__PURE__ */ Kn(i, {
    ref: a
  }) : null;
};
to.displayName = "Presence";
function ea(e) {
  const [t, n] = V(), o = re({}), i = re(e), a = re("none"), c = e ? "mounted" : "unmounted", [s, l] = Qi(c, {
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
  return te(() => {
    const u = qt(o.current);
    a.current = s === "mounted" ? u : "none";
  }, [
    s
  ]), ht(() => {
    const u = o.current, v = i.current;
    if (v !== e) {
      const d = a.current, h = qt(u);
      e ? l("MOUNT") : h === "none" || (u == null ? void 0 : u.display) === "none" ? l("UNMOUNT") : l(v && d !== h ? "ANIMATION_OUT" : "UNMOUNT"), i.current = e;
    }
  }, [
    e,
    l
  ]), ht(() => {
    if (t) {
      const u = (p) => {
        const h = qt(o.current).includes(p.animationName);
        p.target === t && h && Tr(
          () => l("ANIMATION_END")
        );
      }, v = (p) => {
        p.target === t && (a.current = qt(o.current));
      };
      return t.addEventListener("animationstart", v), t.addEventListener("animationcancel", u), t.addEventListener("animationend", u), () => {
        t.removeEventListener("animationstart", v), t.removeEventListener("animationcancel", u), t.removeEventListener("animationend", u);
      };
    } else
      l("ANIMATION_END");
  }, [
    t,
    l
  ]), {
    isPresent: [
      "mounted",
      "unmountSuspended"
    ].includes(s),
    ref: rt((u) => {
      u && (o.current = getComputedStyle(u)), n(u);
    }, [])
  };
}
function qt(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function ta({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [o, i] = na({
    defaultProp: t,
    onChange: n
  }), a = e !== void 0, c = a ? e : o, s = Ue(n), l = rt((u) => {
    if (a) {
      const p = typeof u == "function" ? u(e) : u;
      p !== e && s(p);
    } else
      i(u);
  }, [
    a,
    e,
    i,
    s
  ]);
  return [
    c,
    l
  ];
}
function na({ defaultProp: e, onChange: t }) {
  const n = V(e), [o] = n, i = re(o), a = Ue(t);
  return te(() => {
    i.current !== o && (a(o), i.current = o);
  }, [
    o,
    i,
    a
  ]), n;
}
var ra = function(e) {
  if (typeof document == "undefined")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, st = /* @__PURE__ */ new WeakMap(), Xt = /* @__PURE__ */ new WeakMap(), Zt = {}, Ln = 0, no = function(e) {
  return e && (e.host || no(e.parentNode));
}, oa = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var o = no(n);
    return o && e.contains(o) ? o : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, ia = function(e, t, n, o) {
  var i = oa(t, Array.isArray(e) ? e : [e]);
  Zt[n] || (Zt[n] = /* @__PURE__ */ new WeakMap());
  var a = Zt[n], c = [], s = /* @__PURE__ */ new Set(), l = new Set(i), u = function(p) {
    !p || s.has(p) || (s.add(p), u(p.parentNode));
  };
  i.forEach(u);
  var v = function(p) {
    !p || l.has(p) || Array.prototype.forEach.call(p.children, function(d) {
      if (s.has(d))
        v(d);
      else {
        var h = d.getAttribute(o), y = h !== null && h !== "false", w = (st.get(d) || 0) + 1, g = (a.get(d) || 0) + 1;
        st.set(d, w), a.set(d, g), c.push(d), w === 1 && y && Xt.set(d, !0), g === 1 && d.setAttribute(n, "true"), y || d.setAttribute(o, "true");
      }
    });
  };
  return v(t), s.clear(), Ln++, function() {
    c.forEach(function(p) {
      var d = st.get(p) - 1, h = a.get(p) - 1;
      st.set(p, d), a.set(p, h), d || (Xt.has(p) || p.removeAttribute(o), Xt.delete(p)), h || p.removeAttribute(n);
    }), Ln--, Ln || (st = /* @__PURE__ */ new WeakMap(), st = /* @__PURE__ */ new WeakMap(), Xt = /* @__PURE__ */ new WeakMap(), Zt = {});
  };
}, aa = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var o = Array.from(Array.isArray(e) ? e : [e]), i = t || ra(e);
  return i ? (o.push.apply(o, Array.from(i.querySelectorAll("[aria-live]"))), ia(o, i, n, "aria-hidden")) : function() {
    return null;
  };
}, Te = function() {
  return Te = Object.assign || function(t) {
    for (var n, o = 1, i = arguments.length; o < i; o++) {
      n = arguments[o];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, Te.apply(this, arguments);
};
function ro(e, t) {
  var n = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, o = Object.getOwnPropertySymbols(e); i < o.length; i++)
      t.indexOf(o[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[i]) && (n[o[i]] = e[o[i]]);
  return n;
}
function ca(e, t, n) {
  if (n || arguments.length === 2)
    for (var o = 0, i = t.length, a; o < i; o++)
      (a || !(o in t)) && (a || (a = Array.prototype.slice.call(t, 0, o)), a[o] = t[o]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var rn = "right-scroll-bar-position", on = "width-before-scroll-bar", sa = "with-scroll-bars-hidden", la = "--removed-body-scroll-bar-size";
function ua(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function fa(e, t) {
  var n = V(function() {
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
        set current(o) {
          var i = n.value;
          i !== o && (n.value = o, n.callback(o, i));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
function da(e, t) {
  return fa(t || null, function(n) {
    return e.forEach(function(o) {
      return ua(o, n);
    });
  });
}
function pa(e) {
  return e;
}
function va(e, t) {
  t === void 0 && (t = pa);
  var n = [], o = !1, i = {
    read: function() {
      if (o)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(a) {
      var c = t(a, o);
      return n.push(c), function() {
        n = n.filter(function(s) {
          return s !== c;
        });
      };
    },
    assignSyncMedium: function(a) {
      for (o = !0; n.length; ) {
        var c = n;
        n = [], c.forEach(a);
      }
      n = {
        push: function(s) {
          return a(s);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(a) {
      o = !0;
      var c = [];
      if (n.length) {
        var s = n;
        n = [], s.forEach(a), c = n;
      }
      var l = function() {
        var v = c;
        c = [], v.forEach(a);
      }, u = function() {
        return Promise.resolve().then(l);
      };
      u(), n = {
        push: function(v) {
          c.push(v), u();
        },
        filter: function(v) {
          return c = c.filter(v), n;
        }
      };
    }
  };
  return i;
}
function ha(e) {
  e === void 0 && (e = {});
  var t = va(null);
  return t.options = Te({ async: !0, ssr: !1 }, e), t;
}
var oo = function(e) {
  var t = e.sideCar, n = ro(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var o = t.read();
  if (!o)
    throw new Error("Sidecar medium not found");
  return L.createElement(o, Te({}, n));
};
oo.isSideCarExport = !0;
function ma(e, t) {
  return e.useMedium(t), oo;
}
var io = ha(), jn = function() {
}, pn = L.forwardRef(function(e, t) {
  var n = L.useRef(null), o = L.useState({
    onScrollCapture: jn,
    onWheelCapture: jn,
    onTouchMoveCapture: jn
  }), i = o[0], a = o[1], c = e.forwardProps, s = e.children, l = e.className, u = e.removeScrollBar, v = e.enabled, p = e.shards, d = e.sideCar, h = e.noIsolation, y = e.inert, w = e.allowPinchZoom, g = e.as, x = g === void 0 ? "div" : g, b = ro(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]), E = d, $ = da([n, t]), S = Te(Te({}, b), i);
  return L.createElement(
    L.Fragment,
    null,
    v && L.createElement(E, { sideCar: io, removeScrollBar: u, shards: p, noIsolation: h, inert: y, setCallbacks: a, allowPinchZoom: !!w, lockRef: n }),
    c ? L.cloneElement(L.Children.only(s), Te(Te({}, S), { ref: $ })) : L.createElement(x, Te({}, S, { className: l, ref: $ }), s)
  );
});
pn.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
pn.classNames = {
  fullWidth: on,
  zeroRight: rn
};
var Er, ga = function() {
  if (Er)
    return Er;
  if (typeof __webpack_nonce__ != "undefined")
    return __webpack_nonce__;
};
function ba() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = ga();
  return t && e.setAttribute("nonce", t), e;
}
function ya(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function wa(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var xa = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = ba()) && (ya(t, n), wa(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, Ca = function() {
  var e = xa();
  return function(t, n) {
    L.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, ao = function() {
  var e = Ca(), t = function(n) {
    var o = n.styles, i = n.dynamic;
    return e(o, i), null;
  };
  return t;
}, $a = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, In = function(e) {
  return parseInt(e || "", 10) || 0;
}, Sa = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], o = t[e === "padding" ? "paddingTop" : "marginTop"], i = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [In(n), In(o), In(i)];
}, Ea = function(e) {
  if (e === void 0 && (e = "margin"), typeof window == "undefined")
    return $a;
  var t = Sa(e), n = document.documentElement.clientWidth, o = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, o - n + t[2] - t[0])
  };
}, Pa = ao(), Ra = function(e, t, n, o) {
  var i = e.left, a = e.top, c = e.right, s = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(sa, ` {
   overflow: hidden `).concat(o, `;
   padding-right: `).concat(s, "px ").concat(o, `;
  }
  body {
    overflow: hidden `).concat(o, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(o, ";"),
    n === "margin" && `
    padding-left: `.concat(i, `px;
    padding-top: `).concat(a, `px;
    padding-right: `).concat(c, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(s, "px ").concat(o, `;
    `),
    n === "padding" && "padding-right: ".concat(s, "px ").concat(o, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(rn, ` {
    right: `).concat(s, "px ").concat(o, `;
  }
  
  .`).concat(on, ` {
    margin-right: `).concat(s, "px ").concat(o, `;
  }
  
  .`).concat(rn, " .").concat(rn, ` {
    right: 0 `).concat(o, `;
  }
  
  .`).concat(on, " .").concat(on, ` {
    margin-right: 0 `).concat(o, `;
  }
  
  body {
    `).concat(la, ": ").concat(s, `px;
  }
`);
}, Oa = function(e) {
  var t = e.noRelative, n = e.noImportant, o = e.gapMode, i = o === void 0 ? "margin" : o, a = L.useMemo(function() {
    return Ea(i);
  }, [i]);
  return L.createElement(Pa, { styles: Ra(a, !t, i, n ? "" : "!important") });
}, Hn = !1;
if (typeof window != "undefined")
  try {
    var Jt = Object.defineProperty({}, "passive", {
      get: function() {
        return Hn = !0, !0;
      }
    });
    window.addEventListener("test", Jt, Jt), window.removeEventListener("test", Jt, Jt);
  } catch (e) {
    Hn = !1;
  }
var lt = Hn ? { passive: !1 } : !1, ka = function(e) {
  return e.tagName === "TEXTAREA";
}, co = function(e, t) {
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !ka(e) && n[t] === "visible")
  );
}, Ta = function(e) {
  return co(e, "overflowY");
}, Aa = function(e) {
  return co(e, "overflowX");
}, Pr = function(e, t) {
  var n = t;
  do {
    typeof ShadowRoot != "undefined" && n instanceof ShadowRoot && (n = n.host);
    var o = so(e, n);
    if (o) {
      var i = lo(e, n), a = i[1], c = i[2];
      if (a > c)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== document.body);
  return !1;
}, _a = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, o = e.clientHeight;
  return [
    t,
    n,
    o
  ];
}, Na = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, o = e.clientWidth;
  return [
    t,
    n,
    o
  ];
}, so = function(e, t) {
  return e === "v" ? Ta(t) : Aa(t);
}, lo = function(e, t) {
  return e === "v" ? _a(t) : Na(t);
}, Da = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, La = function(e, t, n, o, i) {
  var a = Da(e, window.getComputedStyle(t).direction), c = a * o, s = n.target, l = t.contains(s), u = !1, v = c > 0, p = 0, d = 0;
  do {
    var h = lo(e, s), y = h[0], w = h[1], g = h[2], x = w - g - a * y;
    (y || x) && so(e, s) && (p += x, d += y), s = s.parentNode;
  } while (
    // portaled content
    !l && s !== document.body || // self content
    l && (t.contains(s) || t === s)
  );
  return (v && (i && p === 0 || !i && c > p) || !v && (i && d === 0 || !i && -c > d)) && (u = !0), u;
}, Qt = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Rr = function(e) {
  return [e.deltaX, e.deltaY];
}, Or = function(e) {
  return e && "current" in e ? e.current : e;
}, ja = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, Ia = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, Fa = 0, ut = [];
function Ma(e) {
  var t = L.useRef([]), n = L.useRef([0, 0]), o = L.useRef(), i = L.useState(Fa++)[0], a = L.useState(function() {
    return ao();
  })[0], c = L.useRef(e);
  L.useEffect(function() {
    c.current = e;
  }, [e]), L.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(i));
      var w = ca([e.lockRef.current], (e.shards || []).map(Or), !0).filter(Boolean);
      return w.forEach(function(g) {
        return g.classList.add("allow-interactivity-".concat(i));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(i)), w.forEach(function(g) {
          return g.classList.remove("allow-interactivity-".concat(i));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var s = L.useCallback(function(w, g) {
    if ("touches" in w && w.touches.length === 2)
      return !c.current.allowPinchZoom;
    var x = Qt(w), b = n.current, E = "deltaX" in w ? w.deltaX : b[0] - x[0], $ = "deltaY" in w ? w.deltaY : b[1] - x[1], S, k = w.target, R = Math.abs(E) > Math.abs($) ? "h" : "v";
    if ("touches" in w && R === "h" && k.type === "range")
      return !1;
    var _ = Pr(R, k);
    if (!_)
      return !0;
    if (_ ? S = R : (S = R === "v" ? "h" : "v", _ = Pr(R, k)), !_)
      return !1;
    if (!o.current && "changedTouches" in w && (E || $) && (o.current = S), !S)
      return !0;
    var N = o.current || S;
    return La(N, g, w, N === "h" ? E : $, !0);
  }, []), l = L.useCallback(function(w) {
    var g = w;
    if (!(!ut.length || ut[ut.length - 1] !== a)) {
      var x = "deltaY" in g ? Rr(g) : Qt(g), b = t.current.filter(function(S) {
        return S.name === g.type && S.target === g.target && ja(S.delta, x);
      })[0];
      if (b && b.should) {
        g.cancelable && g.preventDefault();
        return;
      }
      if (!b) {
        var E = (c.current.shards || []).map(Or).filter(Boolean).filter(function(S) {
          return S.contains(g.target);
        }), $ = E.length > 0 ? s(g, E[0]) : !c.current.noIsolation;
        $ && g.cancelable && g.preventDefault();
      }
    }
  }, []), u = L.useCallback(function(w, g, x, b) {
    var E = { name: w, delta: g, target: x, should: b };
    t.current.push(E), setTimeout(function() {
      t.current = t.current.filter(function($) {
        return $ !== E;
      });
    }, 1);
  }, []), v = L.useCallback(function(w) {
    n.current = Qt(w), o.current = void 0;
  }, []), p = L.useCallback(function(w) {
    u(w.type, Rr(w), w.target, s(w, e.lockRef.current));
  }, []), d = L.useCallback(function(w) {
    u(w.type, Qt(w), w.target, s(w, e.lockRef.current));
  }, []);
  L.useEffect(function() {
    return ut.push(a), e.setCallbacks({
      onScrollCapture: p,
      onWheelCapture: p,
      onTouchMoveCapture: d
    }), document.addEventListener("wheel", l, lt), document.addEventListener("touchmove", l, lt), document.addEventListener("touchstart", v, lt), function() {
      ut = ut.filter(function(w) {
        return w !== a;
      }), document.removeEventListener("wheel", l, lt), document.removeEventListener("touchmove", l, lt), document.removeEventListener("touchstart", v, lt);
    };
  }, []);
  var h = e.removeScrollBar, y = e.inert;
  return L.createElement(
    L.Fragment,
    null,
    y ? L.createElement(a, { styles: Ia(i) }) : null,
    h ? L.createElement(Oa, { gapMode: "margin" }) : null
  );
}
const Ba = ma(io, Ma);
var uo = L.forwardRef(function(e, t) {
  return L.createElement(pn, Te({}, e, { ref: t, sideCar: Ba }));
});
uo.classNames = pn.classNames;
const Wa = uo, fo = "Popover", [po, ic] = Ir(fo, [
  Zr
]), tr = Zr(), [Va, Yt] = po(fo), za = (e) => {
  const { __scopePopover: t, children: n, open: o, defaultOpen: i, onOpenChange: a, modal: c = !1 } = e, s = tr(t), l = re(null), [u, v] = V(!1), [p = !1, d] = ta({
    prop: o,
    defaultProp: i,
    onChange: a
  });
  return /* @__PURE__ */ ee(Xi, s, /* @__PURE__ */ ee(Va, {
    scope: t,
    contentId: ri(),
    triggerRef: l,
    open: p,
    onOpenChange: d,
    onOpenToggle: rt(
      () => d(
        (h) => !h
      ),
      [
        d
      ]
    ),
    hasCustomAnchor: u,
    onCustomAnchorAdd: rt(
      () => v(!0),
      []
    ),
    onCustomAnchorRemove: rt(
      () => v(!1),
      []
    ),
    modal: c
  }, n));
}, Ua = "PopoverTrigger", Ya = /* @__PURE__ */ ye((e, t) => {
  const l = e, { __scopePopover: n } = l, o = oe(l, ["__scopePopover"]), i = Yt(Ua, n), a = tr(n), c = ct(t, i.triggerRef), s = /* @__PURE__ */ ee(zt.button, ce({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": i.open,
    "aria-controls": i.contentId,
    "data-state": ho(i.open)
  }, o, {
    ref: c,
    onClick: ot(e.onClick, i.onOpenToggle)
  }));
  return i.hasCustomAnchor ? s : /* @__PURE__ */ ee(Zi, ce({
    asChild: !0
  }, a), s);
}), Ha = "PopoverPortal", [ac, Ka] = po(Ha, {
  forceMount: void 0
}), Vt = "PopoverContent", Ga = /* @__PURE__ */ ye((e, t) => {
  const n = Ka(Vt, e.__scopePopover), c = e, { forceMount: o = n.forceMount } = c, i = oe(c, ["forceMount"]), a = Yt(Vt, e.__scopePopover);
  return /* @__PURE__ */ ee(to, {
    present: o || a.open
  }, a.modal ? /* @__PURE__ */ ee(qa, ce({}, i, {
    ref: t
  })) : /* @__PURE__ */ ee(Xa, ce({}, i, {
    ref: t
  })));
}), qa = /* @__PURE__ */ ye((e, t) => {
  const n = Yt(Vt, e.__scopePopover), o = re(null), i = ct(t, o), a = re(!1);
  return te(() => {
    const c = o.current;
    if (c)
      return aa(c);
  }, []), /* @__PURE__ */ ee(Wa, {
    as: Gn,
    allowPinchZoom: !0
  }, /* @__PURE__ */ ee(vo, ce({}, e, {
    ref: i,
    trapFocus: n.open,
    disableOutsidePointerEvents: !0,
    onCloseAutoFocus: ot(e.onCloseAutoFocus, (c) => {
      var s;
      c.preventDefault(), a.current || (s = n.triggerRef.current) === null || s === void 0 || s.focus();
    }),
    onPointerDownOutside: ot(e.onPointerDownOutside, (c) => {
      const s = c.detail.originalEvent, l = s.button === 0 && s.ctrlKey === !0, u = s.button === 2 || l;
      a.current = u;
    }, {
      checkForDefaultPrevented: !1
    }),
    onFocusOutside: ot(
      e.onFocusOutside,
      (c) => c.preventDefault(),
      {
        checkForDefaultPrevented: !1
      }
    )
  })));
}), Xa = /* @__PURE__ */ ye((e, t) => {
  const n = Yt(Vt, e.__scopePopover), o = re(!1), i = re(!1);
  return /* @__PURE__ */ ee(vo, ce({}, e, {
    ref: t,
    trapFocus: !1,
    disableOutsidePointerEvents: !1,
    onCloseAutoFocus: (a) => {
      var c;
      if ((c = e.onCloseAutoFocus) === null || c === void 0 || c.call(e, a), !a.defaultPrevented) {
        var s;
        o.current || (s = n.triggerRef.current) === null || s === void 0 || s.focus(), a.preventDefault();
      }
      o.current = !1, i.current = !1;
    },
    onInteractOutside: (a) => {
      var c, s;
      (c = e.onInteractOutside) === null || c === void 0 || c.call(e, a), a.defaultPrevented || (o.current = !0, a.detail.originalEvent.type === "pointerdown" && (i.current = !0));
      const l = a.target;
      ((s = n.triggerRef.current) === null || s === void 0 ? void 0 : s.contains(l)) && a.preventDefault(), a.detail.originalEvent.type === "focusin" && i.current && a.preventDefault();
    }
  }));
}), vo = /* @__PURE__ */ ye((e, t) => {
  const y = e, { __scopePopover: n, trapFocus: o, onOpenAutoFocus: i, onCloseAutoFocus: a, disableOutsidePointerEvents: c, onEscapeKeyDown: s, onPointerDownOutside: l, onFocusOutside: u, onInteractOutside: v } = y, p = oe(y, ["__scopePopover", "trapFocus", "onOpenAutoFocus", "onCloseAutoFocus", "disableOutsidePointerEvents", "onEscapeKeyDown", "onPointerDownOutside", "onFocusOutside", "onInteractOutside"]), d = Yt(Vt, n), h = tr(n);
  return Ko(), /* @__PURE__ */ ee(Go, {
    asChild: !0,
    loop: !0,
    trapped: o,
    onMountAutoFocus: i,
    onUnmountAutoFocus: a
  }, /* @__PURE__ */ ee(Uo, {
    asChild: !0,
    disableOutsidePointerEvents: c,
    onInteractOutside: v,
    onEscapeKeyDown: s,
    onPointerDownOutside: l,
    onFocusOutside: u,
    onDismiss: () => d.onOpenChange(!1)
  }, /* @__PURE__ */ ee(Ji, ce({
    "data-state": ho(d.open),
    role: "dialog",
    id: d.contentId
  }, h, p, {
    ref: t,
    style: Q(j({}, p.style), {
      "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
      "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
      "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
    })
  }))));
});
function ho(e) {
  return e ? "open" : "closed";
}
const Za = za;
const cc = (e) => {
  const d = e, {
    open: t,
    onOpenChange: n,
    ariaLabel: o,
    triggerElement: i,
    children: a,
    popoverClassName: c,
    contentClassName: s,
    noStyle: l = !1,
    sideOffset: u = 18,
    align: v = "end"
  } = d, p = oe(d, [
    "open",
    "onOpenChange",
    "ariaLabel",
    "triggerElement",
    "children",
    "popoverClassName",
    "contentClassName",
    "noStyle",
    "sideOffset",
    "align"
  ]);
  return /* @__PURE__ */ A.jsx(
    "div",
    {
      className: G({
        [c || ""]: !!c,
        Popover: !l
      }),
      children: /* @__PURE__ */ A.jsxs(Za, { open: t, onOpenChange: n, children: [
        i && /* @__PURE__ */ A.jsx(Ya, { "aria-label": o, className: "Popover-trigger", children: i }),
        t && a && /* @__PURE__ */ A.jsx(
          Ga,
          Q(j({
            align: v,
            sideOffset: u,
            className: G({
              [s || ""]: !!s,
              "Popover-content": !!s || !l
            })
          }, p), {
            children: a
          })
        )
      ] })
    }
  );
};
export {
  Ao as Accordion,
  tt as BUTTON_COLOR,
  Ne as BUTTON_SIZE,
  So as BUTTON_TYPE,
  De as BUTTON_VARIANT,
  Eo as Button,
  dt as CHECKBOX_SIZE,
  ge as CHECKBOX_THEME,
  ko as Checkbox,
  ft as INPUT_SIZE,
  Ft as INPUT_THEME,
  nt as INPUT_TYPE,
  _o as IconButton,
  Oo as Input,
  cc as Popover,
  Le as SWITCH_SIZE,
  Mt as SWITCH_TAGS_SIZE,
  tn as SWITCH_TAGS_VARIANT,
  ke as SWITCH_THEME,
  To as Switch,
  rc as SwitchTags,
  Wn as TABS_SIZE,
  en as TAGS_SIZE,
  tc as Tabs,
  nc as Tags
};
