import './index.css';
var si = Object.defineProperty, li = Object.defineProperties;
var ui = Object.getOwnPropertyDescriptors;
var un = Object.getOwnPropertySymbols;
var ro = Object.prototype.hasOwnProperty, oo = Object.prototype.propertyIsEnumerable;
var no = (e, t, n) => t in e ? si(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, z = (e, t) => {
  for (var n in t || (t = {}))
    ro.call(t, n) && no(e, n, t[n]);
  if (un)
    for (var n of un(t))
      oo.call(t, n) && no(e, n, t[n]);
  return e;
}, fe = (e, t) => li(e, ui(t));
var ye = (e, t) => {
  var n = {};
  for (var r in e)
    ro.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && un)
    for (var r of un(e))
      t.indexOf(r) < 0 && oo.call(e, r) && (n[r] = e[r]);
  return n;
};
var Ie = (e, t, n) => new Promise((r, o) => {
  var i = (l) => {
    try {
      s(n.next(l));
    } catch (u) {
      o(u);
    }
  }, c = (l) => {
    try {
      s(n.throw(l));
    } catch (u) {
      o(u);
    }
  }, s = (l) => l.done ? r(l.value) : Promise.resolve(l.value).then(i, c);
  s((n = n.apply(e, t)).next());
});
import * as A from "react";
import $e, { useState as re, useLayoutEffect as Ye, useEffect as pe, useMemo as vt, useRef as be, useCallback as dt, createContext as br, createElement as de, useContext as Go, forwardRef as De, Children as St, isValidElement as tn, cloneElement as Ar, Fragment as Ko, useReducer as fi, PureComponent as di } from "react";
import * as pi from "react-dom";
import vi, { flushSync as Yo, createPortal as mi } from "react-dom";
function hi(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var wr = { exports: {} }, Yt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ao;
function gi() {
  if (ao)
    return Yt;
  ao = 1;
  var e = $e, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(s, l, u) {
    var d, f = {}, p = null, v = null;
    u !== void 0 && (p = "" + u), l.key !== void 0 && (p = "" + l.key), l.ref !== void 0 && (v = l.ref);
    for (d in l)
      r.call(l, d) && !i.hasOwnProperty(d) && (f[d] = l[d]);
    if (s && s.defaultProps)
      for (d in l = s.defaultProps, l)
        f[d] === void 0 && (f[d] = l[d]);
    return { $$typeof: t, type: s, key: p, ref: v, props: f, _owner: o.current };
  }
  return Yt.Fragment = n, Yt.jsx = c, Yt.jsxs = c, Yt;
}
var Ht = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var io;
function yi() {
  return io || (io = 1, process.env.NODE_ENV !== "production" && function() {
    var e = $e, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), g = Symbol.iterator, y = "@@iterator";
    function b(a) {
      if (a === null || typeof a != "object")
        return null;
      var m = g && a[g] || a[y];
      return typeof m == "function" ? m : null;
    }
    var x = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(a) {
      {
        for (var m = arguments.length, C = new Array(m > 1 ? m - 1 : 0), $ = 1; $ < m; $++)
          C[$ - 1] = arguments[$];
        S("error", a, C);
      }
    }
    function S(a, m, C) {
      {
        var $ = x.ReactDebugCurrentFrame, M = $.getStackAddendum();
        M !== "" && (m += "%s", C = C.concat([M]));
        var W = C.map(function(j) {
          return String(j);
        });
        W.unshift("Warning: " + m), Function.prototype.apply.call(console[a], console, W);
      }
    }
    var E = !1, h = !1, T = !1, R = !1, L = !1, N;
    N = Symbol.for("react.module.reference");
    function ae(a) {
      return !!(typeof a == "string" || typeof a == "function" || a === r || a === i || L || a === o || a === u || a === d || R || a === v || E || h || T || typeof a == "object" && a !== null && (a.$$typeof === p || a.$$typeof === f || a.$$typeof === c || a.$$typeof === s || a.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      a.$$typeof === N || a.getModuleId !== void 0));
    }
    function ie(a, m, C) {
      var $ = a.displayName;
      if ($)
        return $;
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
        case u:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof a == "object")
        switch (a.$$typeof) {
          case s:
            var m = a;
            return oe(m) + ".Consumer";
          case c:
            var C = a;
            return oe(C._context) + ".Provider";
          case l:
            return ie(a, a.render, "ForwardRef");
          case f:
            var $ = a.displayName || null;
            return $ !== null ? $ : Q(a.type) || "Memo";
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
    var B = Object.assign, te = 0, V, ne, ce, ge, P, k, H;
    function G() {
    }
    G.__reactDisabledLog = !0;
    function q() {
      {
        if (te === 0) {
          V = console.log, ne = console.info, ce = console.warn, ge = console.error, P = console.group, k = console.groupCollapsed, H = console.groupEnd;
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
              value: ce
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
            var $ = M.stack.trim().match(/\n( *(at )?)/);
            F = $ && $[1] || "";
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
      var $;
      K = !0;
      var M = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var W;
      W = I.current, I.current = null, q();
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
            } catch (xe) {
              $ = xe;
            }
            Reflect.construct(a, [], j);
          } else {
            try {
              j.call();
            } catch (xe) {
              $ = xe;
            }
            a.call(j.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (xe) {
            $ = xe;
          }
          a();
        }
      } catch (xe) {
        if (xe && $ && typeof xe.stack == "string") {
          for (var D = xe.stack.split(`
`), se = $.stack.split(`
`), Z = D.length - 1, ee = se.length - 1; Z >= 1 && ee >= 0 && D[Z] !== se[ee]; )
            ee--;
          for (; Z >= 1 && ee >= 0; Z--, ee--)
            if (D[Z] !== se[ee]) {
              if (Z !== 1 || ee !== 1)
                do
                  if (Z--, ee--, ee < 0 || D[Z] !== se[ee]) {
                    var me = `
` + D[Z].replace(" at new ", " at ");
                    return a.displayName && me.includes("<anonymous>") && (me = me.replace("<anonymous>", a.displayName)), typeof a == "function" && Y.set(a, me), me;
                  }
                while (Z >= 1 && ee >= 0);
              break;
            }
        }
      } finally {
        K = !1, I.current = W, X(), Error.prepareStackTrace = M;
      }
      var Re = a ? a.displayName || a.name : "", Kt = Re ? U(Re) : "";
      return typeof a == "function" && Y.set(a, Kt), Kt;
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
        case u:
          return U("Suspense");
        case d:
          return U("SuspenseList");
      }
      if (typeof a == "object")
        switch (a.$$typeof) {
          case l:
            return Ee(a.render);
          case f:
            return Se(a.type, m, C);
          case p: {
            var $ = a, M = $._payload, W = $._init;
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
    function jt(a, m, C, $, M) {
      {
        var W = Function.call.bind(Oe);
        for (var j in a)
          if (W(a, j)) {
            var D = void 0;
            try {
              if (typeof a[j] != "function") {
                var se = Error(($ || "React class") + ": " + C + " type `" + j + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[j] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw se.name = "Invariant Violation", se;
              }
              D = a[j](m, j, $, C, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Z) {
              D = Z;
            }
            D && !(D instanceof Error) && (Fe(M), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", $ || "React class", C, j, typeof D), Fe(null)), D instanceof Error && !(D.message in Qe) && (Qe[D.message] = !0, Fe(M), w("Failed %s type: %s", C, D.message), Fe(null));
          }
      }
    }
    var Lt = Array.isArray;
    function Ae(a) {
      return Lt(a);
    }
    function Mn(a) {
      {
        var m = typeof Symbol == "function" && Symbol.toStringTag, C = m && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return C;
      }
    }
    function In(a) {
      try {
        return Ft(a), !1;
      } catch (m) {
        return !0;
      }
    }
    function Ft(a) {
      return "" + a;
    }
    function Mt(a) {
      if (In(a))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Mn(a)), Ft(a);
    }
    var Me = x.ReactCurrentOwner, Bn = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, It, Bt, it;
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
          It || (It = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", m));
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
          Bt || (Bt = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", m));
        };
        C.isReactWarning = !0, Object.defineProperty(a, "ref", {
          get: C,
          configurable: !0
        });
      }
    }
    var Gn = function(a, m, C, $, M, W, j) {
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
        value: $
      }), Object.defineProperty(D, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: M
      }), Object.freeze && (Object.freeze(D.props), Object.freeze(D)), D;
    };
    function Kn(a, m, C, $, M) {
      {
        var W, j = {}, D = null, se = null;
        C !== void 0 && (Mt(C), D = "" + C), Un(m) && (Mt(m.key), D = "" + m.key), Wn(m) && (se = m.ref, zn(m, M));
        for (W in m)
          Oe.call(m, W) && !Bn.hasOwnProperty(W) && (j[W] = m[W]);
        if (a && a.defaultProps) {
          var Z = a.defaultProps;
          for (W in Z)
            j[W] === void 0 && (j[W] = Z[W]);
        }
        if (D || se) {
          var ee = typeof a == "function" ? a.displayName || a.name || "Unknown" : a;
          D && qn(j, ee), se && Vn(j, ee);
        }
        return Gn(a, D, se, M, $, Me.current, j);
      }
    }
    var ct = x.ReactCurrentOwner, Wt = x.ReactDebugCurrentFrame;
    function Te(a) {
      if (a) {
        var m = a._owner, C = Se(a.type, a._source, m ? m.type : null);
        Wt.setExtraStackFrame(C);
      } else
        Wt.setExtraStackFrame(null);
    }
    var st;
    st = !1;
    function lt(a) {
      return typeof a == "object" && a !== null && a.$$typeof === t;
    }
    function Ut() {
      {
        if (ct.current) {
          var a = Q(ct.current.type);
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
    var zt = {};
    function Hn(a) {
      {
        var m = Ut();
        if (!m) {
          var C = typeof a == "string" ? a : a.displayName || a.name;
          C && (m = `

Check the top-level render call using <` + C + ">.");
        }
        return m;
      }
    }
    function qt(a, m) {
      {
        if (!a._store || a._store.validated || a.key != null)
          return;
        a._store.validated = !0;
        var C = Hn(m);
        if (zt[C])
          return;
        zt[C] = !0;
        var $ = "";
        a && a._owner && a._owner !== ct.current && ($ = " It was passed a child from " + Q(a._owner.type) + "."), Te(a), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', C, $), Te(null);
      }
    }
    function Vt(a, m) {
      {
        if (typeof a != "object")
          return;
        if (Ae(a))
          for (var C = 0; C < a.length; C++) {
            var $ = a[C];
            lt($) && qt($, m);
          }
        else if (lt(a))
          a._store && (a._store.validated = !0);
        else if (a) {
          var M = b(a);
          if (typeof M == "function" && M !== a.entries)
            for (var W = M.call(a), j; !(j = W.next()).done; )
              lt(j.value) && qt(j.value, m);
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
        else if (typeof m == "object" && (m.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        m.$$typeof === f))
          C = m.propTypes;
        else
          return;
        if (C) {
          var $ = Q(m);
          jt(C, a.props, "prop", $, a);
        } else if (m.PropTypes !== void 0 && !st) {
          st = !0;
          var M = Q(m);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", M || "Unknown");
        }
        typeof m.getDefaultProps == "function" && !m.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Jn(a) {
      {
        for (var m = Object.keys(a.props), C = 0; C < m.length; C++) {
          var $ = m[C];
          if ($ !== "children" && $ !== "key") {
            Te(a), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", $), Te(null);
            break;
          }
        }
        a.ref !== null && (Te(a), w("Invalid attribute `ref` supplied to `React.Fragment`."), Te(null));
      }
    }
    function Gt(a, m, C, $, M, W) {
      {
        var j = ae(a);
        if (!j) {
          var D = "";
          (a === void 0 || typeof a == "object" && a !== null && Object.keys(a).length === 0) && (D += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var se = Yn(M);
          se ? D += se : D += Ut();
          var Z;
          a === null ? Z = "null" : Ae(a) ? Z = "array" : a !== void 0 && a.$$typeof === t ? (Z = "<" + (Q(a.type) || "Unknown") + " />", D = " Did you accidentally export a JSX literal instead of a component?") : Z = typeof a, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Z, D);
        }
        var ee = Kn(a, m, C, M, W);
        if (ee == null)
          return ee;
        if (j) {
          var me = m.children;
          if (me !== void 0)
            if ($)
              if (Ae(me)) {
                for (var Re = 0; Re < me.length; Re++)
                  Vt(me[Re], a);
                Object.freeze && Object.freeze(me);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Vt(me, a);
        }
        return a === r ? Jn(ee) : Xn(ee), ee;
      }
    }
    function Zn(a, m, C) {
      return Gt(a, m, C, !0);
    }
    function Qn(a, m, C) {
      return Gt(a, m, C, !1);
    }
    var er = Qn, tr = Zn;
    Ht.Fragment = r, Ht.jsx = er, Ht.jsxs = tr;
  }()), Ht;
}
process.env.NODE_ENV === "production" ? wr.exports = gi() : wr.exports = yi();
var O = wr.exports;
function Ho(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = Ho(e[t])) && (r && (r += " "), r += n);
    else
      for (t in e)
        e[t] && (r && (r += " "), r += t);
  return r;
}
function J() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = Ho(e)) && (r && (r += " "), r += t);
  return r;
}
var Ve = /* @__PURE__ */ ((e) => (e.Large = "large", e.Medium = "medium", e.Small = "small", e))(Ve || {}), Ge = /* @__PURE__ */ ((e) => (e.Contained = "contained", e.Outlined = "outlined", e.Text = "text", e))(Ge || {}), ut = /* @__PURE__ */ ((e) => (e.Primary = "primary", e.Secondary = "secondary", e.Green = "green", e))(ut || {}), bi = /* @__PURE__ */ ((e) => (e.Submit = "submit", e.Reset = "reset", e.Button = "button", e))(bi || {});
const wi = $e.forwardRef((e, t) => {
  const {
    id: n,
    ariaLabel: r,
    className: o,
    children: i,
    disabled: c,
    rounded: s,
    endIcon: l,
    startIcon: u,
    color: d = ut.Primary,
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
      disabled: c,
      className: J({
        Button: !0,
        "Button-contained": v === Ge.Contained,
        "Button-outlined": v === Ge.Outlined,
        "Button-outlined-disable": !!c && v === Ge.Outlined,
        "Button-text": v === Ge.Text,
        "Button-text-small": p === Ve.Small && v === Ge.Text,
        "Button-text-large": p === Ve.Large && v === Ge.Text,
        "Button-text-disable": !!c && v === Ge.Text,
        "Button-primary": p === Ve.Medium,
        "Button-primary-disable": !!c && d === ut.Primary,
        "Button-secondary": d === ut.Secondary,
        "Button-secondary-disable": !!c && d === ut.Secondary,
        "Button-green": d === ut.Green,
        "Button-green-disable": !!c && d === ut.Green,
        "Button-small": p === Ve.Small,
        "Button-large": p === Ve.Large,
        "Button-round": !!s,
        "Button-only_icon": !!f,
        "Button-only_icon-small": !!f && p === Ve.Small,
        "Button-only_icon-large": !!f && p === Ve.Large,
        "Button-fullWidth": y,
        [o || ""]: !!o
      }),
      children: /* @__PURE__ */ O.jsxs("div", { className: "Button-children", children: [
        u && /* @__PURE__ */ O.jsx("span", { className: "Button-icon-left", children: u }),
        i,
        l && /* @__PURE__ */ O.jsx("span", { className: "Button-icon-right", children: l })
      ] })
    }
  );
});
wi.displayName = "Button";
var xr = { exports: {} }, Xt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var co;
function xi() {
  if (co)
    return Xt;
  co = 1;
  var e = $e, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(s, l, u) {
    var d, f = {}, p = null, v = null;
    u !== void 0 && (p = "" + u), l.key !== void 0 && (p = "" + l.key), l.ref !== void 0 && (v = l.ref);
    for (d in l)
      r.call(l, d) && !i.hasOwnProperty(d) && (f[d] = l[d]);
    if (s && s.defaultProps)
      for (d in l = s.defaultProps, l)
        f[d] === void 0 && (f[d] = l[d]);
    return { $$typeof: t, type: s, key: p, ref: v, props: f, _owner: o.current };
  }
  return Xt.Fragment = n, Xt.jsx = c, Xt.jsxs = c, Xt;
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
function Ci() {
  return so || (so = 1, process.env.NODE_ENV !== "production" && function() {
    var e = $e, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), g = Symbol.iterator, y = "@@iterator";
    function b(a) {
      if (a === null || typeof a != "object")
        return null;
      var m = g && a[g] || a[y];
      return typeof m == "function" ? m : null;
    }
    var x = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(a) {
      {
        for (var m = arguments.length, C = new Array(m > 1 ? m - 1 : 0), $ = 1; $ < m; $++)
          C[$ - 1] = arguments[$];
        S("error", a, C);
      }
    }
    function S(a, m, C) {
      {
        var $ = x.ReactDebugCurrentFrame, M = $.getStackAddendum();
        M !== "" && (m += "%s", C = C.concat([M]));
        var W = C.map(function(j) {
          return String(j);
        });
        W.unshift("Warning: " + m), Function.prototype.apply.call(console[a], console, W);
      }
    }
    var E = !1, h = !1, T = !1, R = !1, L = !1, N;
    N = Symbol.for("react.module.reference");
    function ae(a) {
      return !!(typeof a == "string" || typeof a == "function" || a === r || a === i || L || a === o || a === u || a === d || R || a === v || E || h || T || typeof a == "object" && a !== null && (a.$$typeof === p || a.$$typeof === f || a.$$typeof === c || a.$$typeof === s || a.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      a.$$typeof === N || a.getModuleId !== void 0));
    }
    function ie(a, m, C) {
      var $ = a.displayName;
      if ($)
        return $;
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
        case u:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof a == "object")
        switch (a.$$typeof) {
          case s:
            var m = a;
            return oe(m) + ".Consumer";
          case c:
            var C = a;
            return oe(C._context) + ".Provider";
          case l:
            return ie(a, a.render, "ForwardRef");
          case f:
            var $ = a.displayName || null;
            return $ !== null ? $ : Q(a.type) || "Memo";
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
    var B = Object.assign, te = 0, V, ne, ce, ge, P, k, H;
    function G() {
    }
    G.__reactDisabledLog = !0;
    function q() {
      {
        if (te === 0) {
          V = console.log, ne = console.info, ce = console.warn, ge = console.error, P = console.group, k = console.groupCollapsed, H = console.groupEnd;
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
              value: ce
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
            var $ = M.stack.trim().match(/\n( *(at )?)/);
            F = $ && $[1] || "";
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
      var $;
      K = !0;
      var M = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var W;
      W = I.current, I.current = null, q();
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
            } catch (xe) {
              $ = xe;
            }
            Reflect.construct(a, [], j);
          } else {
            try {
              j.call();
            } catch (xe) {
              $ = xe;
            }
            a.call(j.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (xe) {
            $ = xe;
          }
          a();
        }
      } catch (xe) {
        if (xe && $ && typeof xe.stack == "string") {
          for (var D = xe.stack.split(`
`), se = $.stack.split(`
`), Z = D.length - 1, ee = se.length - 1; Z >= 1 && ee >= 0 && D[Z] !== se[ee]; )
            ee--;
          for (; Z >= 1 && ee >= 0; Z--, ee--)
            if (D[Z] !== se[ee]) {
              if (Z !== 1 || ee !== 1)
                do
                  if (Z--, ee--, ee < 0 || D[Z] !== se[ee]) {
                    var me = `
` + D[Z].replace(" at new ", " at ");
                    return a.displayName && me.includes("<anonymous>") && (me = me.replace("<anonymous>", a.displayName)), typeof a == "function" && Y.set(a, me), me;
                  }
                while (Z >= 1 && ee >= 0);
              break;
            }
        }
      } finally {
        K = !1, I.current = W, X(), Error.prepareStackTrace = M;
      }
      var Re = a ? a.displayName || a.name : "", Kt = Re ? U(Re) : "";
      return typeof a == "function" && Y.set(a, Kt), Kt;
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
        case u:
          return U("Suspense");
        case d:
          return U("SuspenseList");
      }
      if (typeof a == "object")
        switch (a.$$typeof) {
          case l:
            return Ee(a.render);
          case f:
            return Se(a.type, m, C);
          case p: {
            var $ = a, M = $._payload, W = $._init;
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
    function jt(a, m, C, $, M) {
      {
        var W = Function.call.bind(Oe);
        for (var j in a)
          if (W(a, j)) {
            var D = void 0;
            try {
              if (typeof a[j] != "function") {
                var se = Error(($ || "React class") + ": " + C + " type `" + j + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[j] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw se.name = "Invariant Violation", se;
              }
              D = a[j](m, j, $, C, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Z) {
              D = Z;
            }
            D && !(D instanceof Error) && (Fe(M), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", $ || "React class", C, j, typeof D), Fe(null)), D instanceof Error && !(D.message in Qe) && (Qe[D.message] = !0, Fe(M), w("Failed %s type: %s", C, D.message), Fe(null));
          }
      }
    }
    var Lt = Array.isArray;
    function Ae(a) {
      return Lt(a);
    }
    function Mn(a) {
      {
        var m = typeof Symbol == "function" && Symbol.toStringTag, C = m && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return C;
      }
    }
    function In(a) {
      try {
        return Ft(a), !1;
      } catch (m) {
        return !0;
      }
    }
    function Ft(a) {
      return "" + a;
    }
    function Mt(a) {
      if (In(a))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Mn(a)), Ft(a);
    }
    var Me = x.ReactCurrentOwner, Bn = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, It, Bt, it;
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
          It || (It = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", m));
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
          Bt || (Bt = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", m));
        };
        C.isReactWarning = !0, Object.defineProperty(a, "ref", {
          get: C,
          configurable: !0
        });
      }
    }
    var Gn = function(a, m, C, $, M, W, j) {
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
        value: $
      }), Object.defineProperty(D, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: M
      }), Object.freeze && (Object.freeze(D.props), Object.freeze(D)), D;
    };
    function Kn(a, m, C, $, M) {
      {
        var W, j = {}, D = null, se = null;
        C !== void 0 && (Mt(C), D = "" + C), Un(m) && (Mt(m.key), D = "" + m.key), Wn(m) && (se = m.ref, zn(m, M));
        for (W in m)
          Oe.call(m, W) && !Bn.hasOwnProperty(W) && (j[W] = m[W]);
        if (a && a.defaultProps) {
          var Z = a.defaultProps;
          for (W in Z)
            j[W] === void 0 && (j[W] = Z[W]);
        }
        if (D || se) {
          var ee = typeof a == "function" ? a.displayName || a.name || "Unknown" : a;
          D && qn(j, ee), se && Vn(j, ee);
        }
        return Gn(a, D, se, M, $, Me.current, j);
      }
    }
    var ct = x.ReactCurrentOwner, Wt = x.ReactDebugCurrentFrame;
    function Te(a) {
      if (a) {
        var m = a._owner, C = Se(a.type, a._source, m ? m.type : null);
        Wt.setExtraStackFrame(C);
      } else
        Wt.setExtraStackFrame(null);
    }
    var st;
    st = !1;
    function lt(a) {
      return typeof a == "object" && a !== null && a.$$typeof === t;
    }
    function Ut() {
      {
        if (ct.current) {
          var a = Q(ct.current.type);
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
    var zt = {};
    function Hn(a) {
      {
        var m = Ut();
        if (!m) {
          var C = typeof a == "string" ? a : a.displayName || a.name;
          C && (m = `

Check the top-level render call using <` + C + ">.");
        }
        return m;
      }
    }
    function qt(a, m) {
      {
        if (!a._store || a._store.validated || a.key != null)
          return;
        a._store.validated = !0;
        var C = Hn(m);
        if (zt[C])
          return;
        zt[C] = !0;
        var $ = "";
        a && a._owner && a._owner !== ct.current && ($ = " It was passed a child from " + Q(a._owner.type) + "."), Te(a), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', C, $), Te(null);
      }
    }
    function Vt(a, m) {
      {
        if (typeof a != "object")
          return;
        if (Ae(a))
          for (var C = 0; C < a.length; C++) {
            var $ = a[C];
            lt($) && qt($, m);
          }
        else if (lt(a))
          a._store && (a._store.validated = !0);
        else if (a) {
          var M = b(a);
          if (typeof M == "function" && M !== a.entries)
            for (var W = M.call(a), j; !(j = W.next()).done; )
              lt(j.value) && qt(j.value, m);
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
        else if (typeof m == "object" && (m.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        m.$$typeof === f))
          C = m.propTypes;
        else
          return;
        if (C) {
          var $ = Q(m);
          jt(C, a.props, "prop", $, a);
        } else if (m.PropTypes !== void 0 && !st) {
          st = !0;
          var M = Q(m);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", M || "Unknown");
        }
        typeof m.getDefaultProps == "function" && !m.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Jn(a) {
      {
        for (var m = Object.keys(a.props), C = 0; C < m.length; C++) {
          var $ = m[C];
          if ($ !== "children" && $ !== "key") {
            Te(a), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", $), Te(null);
            break;
          }
        }
        a.ref !== null && (Te(a), w("Invalid attribute `ref` supplied to `React.Fragment`."), Te(null));
      }
    }
    function Gt(a, m, C, $, M, W) {
      {
        var j = ae(a);
        if (!j) {
          var D = "";
          (a === void 0 || typeof a == "object" && a !== null && Object.keys(a).length === 0) && (D += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var se = Yn(M);
          se ? D += se : D += Ut();
          var Z;
          a === null ? Z = "null" : Ae(a) ? Z = "array" : a !== void 0 && a.$$typeof === t ? (Z = "<" + (Q(a.type) || "Unknown") + " />", D = " Did you accidentally export a JSX literal instead of a component?") : Z = typeof a, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Z, D);
        }
        var ee = Kn(a, m, C, M, W);
        if (ee == null)
          return ee;
        if (j) {
          var me = m.children;
          if (me !== void 0)
            if ($)
              if (Ae(me)) {
                for (var Re = 0; Re < me.length; Re++)
                  Vt(me[Re], a);
                Object.freeze && Object.freeze(me);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Vt(me, a);
        }
        return a === r ? Jn(ee) : Xn(ee), ee;
      }
    }
    function Zn(a, m, C) {
      return Gt(a, m, C, !0);
    }
    function Qn(a, m, C) {
      return Gt(a, m, C, !1);
    }
    var er = Qn, tr = Zn;
    fn.Fragment = r, fn.jsx = er, fn.jsxs = tr;
  }()), fn;
}
process.env.NODE_ENV === "production" ? xr.exports = xi() : xr.exports = Ci();
var je = xr.exports;
const Xo = ({
  width: e = "25",
  height: t = "25",
  color: n = "currentColor"
}) => /* @__PURE__ */ je.jsx(
  "svg",
  {
    width: e,
    height: t,
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ je.jsx(
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
Xo.displayName = "ChevronLeftSmall";
const Nr = ({
  width: e = "25",
  height: t = "25",
  color: n = "currentColor"
}) => /* @__PURE__ */ je.jsx(
  "svg",
  {
    width: e,
    height: t,
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ je.jsx(
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
}) => /* @__PURE__ */ je.jsx(
  "svg",
  {
    width: e,
    height: t,
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ je.jsx(
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
const Jo = ({ width: e = "25", height: t = "25", color: n = "currentColor" }) => /* @__PURE__ */ je.jsx(
  "svg",
  {
    width: e,
    height: t,
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ je.jsx(
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
Jo.displayName = "EyeOff";
const Zo = ({ width: e = "25", height: t = "25", color: n = "currentColor" }) => /* @__PURE__ */ je.jsx(
  "svg",
  {
    width: e,
    height: t,
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ je.jsx(
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
Zo.displayName = "EyeOn";
const Lr = ({ width: e = "25", height: t = "25", color: n = "currentColor" }) => /* @__PURE__ */ je.jsx(
  "svg",
  {
    width: e,
    height: t,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ je.jsx(
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
var ft = /* @__PURE__ */ ((e) => (e.Text = "text", e.Number = "number", e.Password = "password", e.Telephone = "tel", e.Email = "email", e))(ft || {}), wt = /* @__PURE__ */ ((e) => (e.Small = "small", e.Medium = "medium", e))(wt || {}), Jt = /* @__PURE__ */ ((e) => (e.Light = "light", e.Dark = "dark", e))(Jt || {});
const Ei = $e.forwardRef((e, t) => {
  const I = e, {
    id: n,
    value: r,
    defaultValue: o,
    className: i,
    disabled: c,
    endIcon: s,
    startIcon: l,
    isError: u,
    isHint: d,
    helperText: f,
    placeholder: p,
    label: v,
    type: g,
    name: y,
    ariaLabel: b,
    autoComplete: x,
    size: w = wt.Medium,
    theme: S = Jt.Light,
    onBlur: E,
    onChange: h,
    onFocus: T,
    onKeyDown: R,
    onKeyUp: L,
    requiredSymbol: N
  } = I, ae = ye(I, [
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
  ]), [ie, oe] = re(""), [Q, B] = re(!1), [te, V] = re(g), [ne, ce] = $e.useState(!1), ge = (F) => {
    oe(F.target.value), h && h(F);
  }, P = (F) => {
    E && E(F);
  }, k = (F) => {
    T && T(F);
  }, H = (F) => {
    R && R(F);
  }, G = (F) => {
    L && L(F);
  }, q = () => {
    ce((F) => !F);
  }, X = (F) => {
    F.animationName === "onAutoFillStart" && B(!0);
  };
  return Ye(() => {
    (o || r) && oe(" ");
  }, [o, r]), pe(() => {
    g === ft.Password && V(ne ? ft.Text : ft.Password);
  }, [ne, g]), pe(() => {
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
              "Input-disabled": c,
              "InputBase-error": !!u,
              "InputBase-root-dark": S === Jt.Dark
            }),
            children: [
              g !== ft.Password && l && /* @__PURE__ */ O.jsx("div", { className: "InputBase-icon-start", children: l }),
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
                      z({
                        defaultValue: !r && o ? o : void 0,
                        "aria-label": b,
                        autoComplete: x,
                        className: J({
                          "InputBase-input": !0,
                          "InputBase-input-dark": S === Jt.Dark,
                          "InputBase-input-small": w === wt.Small,
                          "InputBase-autofill-font": Q
                        }),
                        disabled: c,
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
              g !== ft.Password && s && /* @__PURE__ */ O.jsx("div", { className: "InputBase-icon-end", children: s }),
              g === ft.Password && /* @__PURE__ */ O.jsx(
                "button",
                {
                  type: "button",
                  "aria-label": "toggle password visibility",
                  className: "InputBase-icon-end",
                  onClick: q,
                  children: ne ? /* @__PURE__ */ O.jsx(Zo, {}) : /* @__PURE__ */ O.jsx(Jo, {})
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
              "Input-error-text": !!u,
              "Input-helper-text-dark": !u && S === Jt.Dark
            }),
            children: f
          }
        )
      ]
    }
  );
});
Ei.displayName = "Input";
var Ne = /* @__PURE__ */ ((e) => (e.Light = "light", e.Dark = "dark", e.Green = "green", e))(Ne || {}), xt = /* @__PURE__ */ ((e) => (e.Small = "small", e.Medium = "medium", e.Large = "large", e))(xt || {});
const Si = $e.forwardRef((e, t) => {
  const {
    id: n,
    name: r,
    disabled: o,
    children: i,
    value: c,
    label: s,
    className: l,
    onChange: u,
    ariaLabel: d,
    error: f,
    theme: p = Ne.Light,
    size: v = xt.Medium
  } = e, [g, y] = re(!1), [b, x] = re(!1), [w, S] = re(o), E = (T) => {
    w || (y(!g), u && u(!g, T));
  }, h = (T) => {
    if ((T.key === "Enter" || T.key === " ") && !w) {
      const R = {
        target: {
          ariaLabel: d,
          name: r
        }
      };
      y(!g), u && u(!g, R);
    }
  };
  return pe(() => {
    S(o);
  }, [o]), pe(() => {
    y(typeof c == "boolean" ? c : !1);
  }, [c]), pe(() => {
    x(!!f);
  }, [f]), /* @__PURE__ */ O.jsx("div", { className: "Checkbox", children: /* @__PURE__ */ O.jsxs("label", { children: [
    /* @__PURE__ */ O.jsx(
      "div",
      {
        className: J({
          "Checkbox-checked": g,
          "Checkbox-dark-checked": g && p === Ne.Dark,
          "Checkbox-green-checked": g && p === Ne.Green,
          "Checkbox-unchecked": !g,
          "Checkbox-error": b,
          "Checkbox-disabled": w,
          "Checkbox-green-disabled": w && p === Ne.Green,
          "Checkbox-dark-disabled": w && p === Ne.Dark,
          "Checkbox-dark": p === Ne.Dark,
          "Checkbox-green": p === Ne.Green,
          [l || ""]: !!l
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
    (s || i) && /* @__PURE__ */ O.jsx(
      "div",
      {
        className: J({
          "Checkbox-label": !0,
          "Checkbox-label-small": v === xt.Small,
          "Checkbox-label-dark": p === Ne.Dark,
          "Checkbox-label-green": p === Ne.Green,
          "Checkbox-label-disabled": w,
          "Checkbox-label-dark-disabled": w && p === Ne.Dark,
          "Checkbox-label-green-disabled": w && p === Ne.Green
        }),
        children: s || i
      }
    )
  ] }) });
});
Si.displayName = "Checkbox";
var We = /* @__PURE__ */ ((e) => (e.Light = "light", e.Dark = "dark", e.Green = "green", e))(We || {}), Ke = /* @__PURE__ */ ((e) => (e.Small = "small", e.Medium = "medium", e.Large = "large", e))(Ke || {});
const Oi = $e.forwardRef((e, t) => {
  const {
    id: n,
    name: r,
    className: o,
    checked: i,
    disabled: c,
    ariaLabel: s,
    label: l,
    theme: u = We.Light,
    size: d = Ke.Medium,
    onChange: f
  } = e, [p, v] = re(!1), [g, y] = re(c), b = (w) => {
    g || (v(!p), f && f(!p, w));
  }, x = (w) => {
    if ((w.key === "Enter" || w.key === " ") && !g) {
      const S = {
        target: {
          ariaLabel: s,
          name: r
        }
      };
      v(!p), f && f(!p, S);
    }
  };
  return pe(() => {
    y(c);
  }, [c]), pe(() => {
    v(typeof i == "boolean" ? i : !1);
  }, [i]), /* @__PURE__ */ O.jsx("div", { className: "Switch", children: /* @__PURE__ */ O.jsxs("label", { children: [
    /* @__PURE__ */ O.jsxs(
      "div",
      {
        className: J({
          "Switch-light": u === We.Light,
          "Switch-dark": u === We.Dark,
          "Switch-green": u === We.Green,
          "Switch-large": d === Ke.Large,
          "Switch-medium": d === Ke.Medium,
          "Switch-small": d === Ke.Small,
          "Switch-light-active": p && u === We.Light,
          "Switch-dark-active": p && u === We.Dark,
          "Switch-green-active": p && u === We.Green,
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
              "aria-label": s,
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
          "Switch-label-dark": u === We.Dark,
          "Switch-label-green": u === We.Green
        }),
        children: l
      }
    )
  ] }) });
});
Oi.displayName = "Switch";
var Cr = /* @__PURE__ */ ((e) => (e.Large = "large", e.Small = "small", e))(Cr || {});
const pu = (e) => {
  var h;
  const {
    className: t,
    size: n = Cr.Large,
    tabs: r,
    gap: o,
    activeTab: i,
    activeColor: c,
    tabMarginBottom: s = 16
  } = e, [l, u] = re((h = r[0]) == null ? void 0 : h.id), [d, f] = re(6), [p, v] = re(0), [g, y] = re("none"), [b, x] = re(0), w = vt(() => r.find((T) => T.id === l), [l, r]), S = be(new Array(r.length)), E = (T, R, L) => {
    R !== l && (y("left 200ms linear, width 200ms linear"), f(T.currentTarget.offsetLeft), v(T.currentTarget.offsetWidth), u(R), L && L(R));
  };
  return Ye(() => {
    if (i) {
      const T = r.findIndex((R) => R.id === i);
      x(T), u(i);
    }
  }, [i, r]), Ye(() => {
    var L, N;
    const T = (L = S.current[b]) == null ? void 0 : L.offsetWidth, R = (N = S.current[b]) == null ? void 0 : N.offsetLeft;
    v(T), f(R);
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
          r == null ? void 0 : r.map((T, R) => /* @__PURE__ */ O.jsx(
            "button",
            {
              ref: (L) => S.current[R] = L,
              "aria-label": T.label,
              disabled: T.disabled,
              className: J({
                "Tab-root": !0,
                "Tab-root-active": l === T.id,
                "Tab-root-small": n === Cr.Small
              }),
              onClick: (L) => E(L, T.id, T.onClick),
              children: /* @__PURE__ */ O.jsx(
                "div",
                {
                  style: { marginBottom: s },
                  className: J({
                    "Tab-label": !0
                  }),
                  children: T.label
                }
              )
            },
            T.id
          )),
          /* @__PURE__ */ O.jsx(
            "div",
            {
              style: {
                left: d,
                width: p,
                transition: g,
                backgroundColor: c
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
const Pi = $e.forwardRef((e, t) => {
  const {
    className: n,
    color: r,
    ariaLabel: o,
    content: i,
    header: c,
    contentMarginTop: s = 0,
    isOpen: l,
    onChange: u
  } = e, [d, f] = re(l), p = be(null), v = (b, x) => {
    const w = b.scrollHeight;
    b.style.height = (x ? w : 0) + "px";
  }, g = () => {
    f(!d), u && u(!d), p.current && v(p.current, !d);
  }, y = (b) => {
    (b.key === "Enter" || b.key === " ") && (f(!d), u && u(!d), p.current && v(p.current, !d));
  };
  return Ye(() => {
    const b = typeof l == "boolean" ? l : !1;
    p.current && v(p.current, b), f(b);
  }, [l]), /* @__PURE__ */ O.jsxs(
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
              /* @__PURE__ */ O.jsx("div", { style: { color: r }, className: "Accordion-heading-label", children: c }),
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
            style: { marginTop: s },
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
Pi.displayName = "Accordion";
var bn = /* @__PURE__ */ ((e) => (e.Large = "large", e.Medium = "medium", e))(bn || {});
const vu = (e) => {
  var f;
  const { className: t, size: n = bn.Medium, tags: r, gap: o, activeTag: i, activeColor: c } = e, [s, l] = re((f = r[0]) == null ? void 0 : f.id), u = vt(() => r.find((p) => p.id === s), [s, r]), d = (p, v) => {
    l(p), v && v(p);
  };
  return Ye(() => {
    i && l(i);
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
            style: { backgroundColor: s === p.id ? c : "" },
            className: J({
              Tag: !0,
              "Tag-medium": n === bn.Medium,
              "Tag-large": n === bn.Large,
              "Tag-active": s === p.id,
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
    u && u.content && /* @__PURE__ */ O.jsx("div", { className: "Tag-content", children: u.content })
  ] });
};
var Zt = /* @__PURE__ */ ((e) => (e.Large = "large", e.Medium = "medium", e))(Zt || {}), wn = /* @__PURE__ */ ((e) => (e.Round = "round", e.Square = "square", e))(wn || {});
const mu = (e) => {
  var T;
  const {
    className: t,
    size: n = Zt.Medium,
    variant: r = wn.Round,
    tags: o,
    gap: i,
    activeTag: c,
    activeColor: s,
    backgroundColor: l
  } = e, [u, d] = re((T = o[0]) == null ? void 0 : T.id), [f, p] = re(6), [v, g] = re(0), [y, b] = re("none"), [x, w] = re(0), S = vt(() => o.find((R) => R.id === u), [u, o]), E = be(new Array(o.length)), h = (R, L, N) => {
    L !== u && (b("left 200ms linear, width 200ms linear"), p(R.currentTarget.offsetLeft), g(R.currentTarget.offsetWidth), d(L), N && N(L));
  };
  return Ye(() => {
    if (c) {
      const R = o.findIndex((L) => L.id === c);
      w(R), d(c);
    }
  }, [c, o]), Ye(() => {
    var N, ae;
    const R = (N = E.current[x]) == null ? void 0 : N.offsetWidth, L = (ae = E.current[x]) == null ? void 0 : ae.offsetLeft;
    g(R), p(L);
  }, [x]), /* @__PURE__ */ O.jsxs("div", { className: "SwitchTags", children: [
    /* @__PURE__ */ O.jsxs(
      "div",
      {
        style: { gap: i, backgroundColor: l },
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
                "SwitchTag-medium": n === Zt.Medium,
                "SwitchTag-large": n === Zt.Large,
                "SwitchTag-active": u === R.id,
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
                backgroundColor: s
              },
              className: J({
                ActiveTab: !0,
                "ActiveTab-small": n === Zt.Medium
              })
            }
          )
        ]
      }
    ),
    S && S.content && /* @__PURE__ */ O.jsx("div", { className: "Tag-content", children: S.content })
  ] });
};
const $i = $e.forwardRef((e, t) => {
  const { id: n, ariaLabel: r, children: o, onClick: i } = e, c = () => {
    i && i();
  };
  return /* @__PURE__ */ O.jsx(
    "button",
    {
      type: "button",
      onClick: c,
      ref: t,
      "aria-label": r,
      id: n,
      className: "IconButton",
      tabIndex: -1,
      children: /* @__PURE__ */ O.jsx("div", { style: { display: "flex" }, tabIndex: 0, children: o })
    }
  );
});
$i.displayName = "IconButton";
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
function pt(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function Ti(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function Qo(...e) {
  return (t) => e.forEach(
    (n) => Ti(n, t)
  );
}
function ht(...e) {
  return dt(Qo(...e), e);
}
function ea(e, t = []) {
  let n = [];
  function r(i, c) {
    const s = /* @__PURE__ */ br(c), l = n.length;
    n = [
      ...n,
      c
    ];
    function u(f) {
      const x = f, { scope: p, children: v } = x, g = ye(x, ["scope", "children"]), y = (p == null ? void 0 : p[e][l]) || s, b = vt(
        () => g,
        Object.values(g)
      );
      return /* @__PURE__ */ de(y.Provider, {
        value: b
      }, v);
    }
    function d(f, p) {
      const v = (p == null ? void 0 : p[e][l]) || s, g = Go(v);
      if (g)
        return g;
      if (c !== void 0)
        return c;
      throw new Error(`\`${f}\` must be used within \`${i}\``);
    }
    return u.displayName = i + "Provider", [
      u,
      d
    ];
  }
  const o = () => {
    const i = n.map((c) => /* @__PURE__ */ br(c));
    return function(s) {
      const l = (s == null ? void 0 : s[e]) || i;
      return vt(
        () => ({
          [`__scope${e}`]: fe(z({}, s), {
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
  return o.scopeName = e, [
    r,
    Ri(o, ...t)
  ];
}
function Ri(...e) {
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
      const c = r.reduce((s, { useScope: l, scopeName: u }) => {
        const f = l(i)[`__scope${u}`];
        return z(z({}, s), f);
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
const Fr = /* @__PURE__ */ De((e, t) => {
  const c = e, { children: n } = c, r = ye(c, ["children"]), o = St.toArray(n), i = o.find(_i);
  if (i) {
    const s = i.props.children, l = o.map((u) => u === i ? St.count(s) > 1 ? St.only(null) : /* @__PURE__ */ tn(s) ? s.props.children : null : u);
    return /* @__PURE__ */ de(Er, we({}, r, {
      ref: t
    }), /* @__PURE__ */ tn(s) ? /* @__PURE__ */ Ar(s, void 0, l) : null);
  }
  return /* @__PURE__ */ de(Er, we({}, r, {
    ref: t
  }), n);
});
Fr.displayName = "Slot";
const Er = /* @__PURE__ */ De((e, t) => {
  const o = e, { children: n } = o, r = ye(o, ["children"]);
  return /* @__PURE__ */ tn(n) ? /* @__PURE__ */ Ar(n, fe(z({}, Di(r, n.props)), {
    ref: t ? Qo(t, n.ref) : n.ref
  })) : St.count(n) > 1 ? St.only(null) : null;
});
Er.displayName = "SlotClone";
const ki = ({ children: e }) => /* @__PURE__ */ de(Ko, null, e);
function _i(e) {
  return /* @__PURE__ */ tn(e) && e.type === ki;
}
function Di(e, t) {
  const n = z({}, t);
  for (const r in t) {
    const o = e[r], i = t[r];
    /^on[A-Z]/.test(r) ? o && i ? n[r] = (...s) => {
      i(...s), o(...s);
    } : o && (n[r] = o) : r === "style" ? n[r] = z(z({}, o), i) : r === "className" && (n[r] = [
      o,
      i
    ].filter(Boolean).join(" "));
  }
  return z(z({}, e), n);
}
const Ai = [
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
], _t = Ai.reduce((e, t) => {
  const n = /* @__PURE__ */ De((r, o) => {
    const l = r, { asChild: i } = l, c = ye(l, ["asChild"]), s = i ? Fr : t;
    return pe(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ de(s, we({}, c, {
      ref: o
    }));
  });
  return n.displayName = `Primitive.${t}`, fe(z({}, e), {
    [t]: n
  });
}, {});
function Ni(e, t) {
  e && Yo(
    () => e.dispatchEvent(t)
  );
}
function tt(e) {
  const t = be(e);
  return pe(() => {
    t.current = e;
  }), vt(
    () => (...n) => {
      var r;
      return (r = t.current) === null || r === void 0 ? void 0 : r.call(t, ...n);
    },
    []
  );
}
function ji(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = tt(e);
  pe(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r), () => t.removeEventListener("keydown", r);
  }, [
    n,
    t
  ]);
}
const Sr = "dismissableLayer.update", Li = "dismissableLayer.pointerDownOutside", Fi = "dismissableLayer.focusOutside";
let lo;
const Mi = /* @__PURE__ */ br({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Ii = /* @__PURE__ */ De((e, t) => {
  var n;
  const L = e, { disableOutsidePointerEvents: r = !1, onEscapeKeyDown: o, onPointerDownOutside: i, onFocusOutside: c, onInteractOutside: s, onDismiss: l } = L, u = ye(L, ["disableOutsidePointerEvents", "onEscapeKeyDown", "onPointerDownOutside", "onFocusOutside", "onInteractOutside", "onDismiss"]), d = Go(Mi), [f, p] = re(null), v = (n = f == null ? void 0 : f.ownerDocument) !== null && n !== void 0 ? n : globalThis == null ? void 0 : globalThis.document, [, g] = re({}), y = ht(
    t,
    (N) => p(N)
  ), b = Array.from(d.layers), [x] = [
    ...d.layersWithOutsidePointerEventsDisabled
  ].slice(-1), w = b.indexOf(x), S = f ? b.indexOf(f) : -1, E = d.layersWithOutsidePointerEventsDisabled.size > 0, h = S >= w, T = Bi((N) => {
    const ae = N.target, ie = [
      ...d.branches
    ].some(
      (oe) => oe.contains(ae)
    );
    !h || ie || (i == null || i(N), s == null || s(N), N.defaultPrevented || l == null || l());
  }, v), R = Wi((N) => {
    const ae = N.target;
    [
      ...d.branches
    ].some(
      (oe) => oe.contains(ae)
    ) || (c == null || c(N), s == null || s(N), N.defaultPrevented || l == null || l());
  }, v);
  return ji((N) => {
    S === d.layers.size - 1 && (o == null || o(N), !N.defaultPrevented && l && (N.preventDefault(), l()));
  }, v), pe(() => {
    if (f)
      return r && (d.layersWithOutsidePointerEventsDisabled.size === 0 && (lo = v.body.style.pointerEvents, v.body.style.pointerEvents = "none"), d.layersWithOutsidePointerEventsDisabled.add(f)), d.layers.add(f), uo(), () => {
        r && d.layersWithOutsidePointerEventsDisabled.size === 1 && (v.body.style.pointerEvents = lo);
      };
  }, [
    f,
    v,
    r,
    d
  ]), pe(() => () => {
    f && (d.layers.delete(f), d.layersWithOutsidePointerEventsDisabled.delete(f), uo());
  }, [
    f,
    d
  ]), pe(() => {
    const N = () => g({});
    return document.addEventListener(Sr, N), () => document.removeEventListener(Sr, N);
  }, []), /* @__PURE__ */ de(_t.div, we({}, u, {
    ref: y,
    style: z({
      pointerEvents: E ? h ? "auto" : "none" : void 0
    }, e.style),
    onFocusCapture: pt(e.onFocusCapture, R.onFocusCapture),
    onBlurCapture: pt(e.onBlurCapture, R.onBlurCapture),
    onPointerDownCapture: pt(e.onPointerDownCapture, T.onPointerDownCapture)
  }));
});
function Bi(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = tt(e), r = be(!1), o = be(() => {
  });
  return pe(() => {
    const i = (s) => {
      if (s.target && !r.current) {
        let u = function() {
          ta(Li, n, l, {
            discrete: !0
          });
        };
        const l = {
          originalEvent: s
        };
        s.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = u, t.addEventListener("click", o.current, {
          once: !0
        })) : u();
      } else
        t.removeEventListener("click", o.current);
      r.current = !1;
    }, c = window.setTimeout(() => {
      t.addEventListener("pointerdown", i);
    }, 0);
    return () => {
      window.clearTimeout(c), t.removeEventListener("pointerdown", i), t.removeEventListener("click", o.current);
    };
  }, [
    t,
    n
  ]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function Wi(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = tt(e), r = be(!1);
  return pe(() => {
    const o = (i) => {
      i.target && !r.current && ta(Fi, n, {
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
function ta(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, i = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, {
    once: !0
  }), r ? Ni(o, i) : o.dispatchEvent(i);
}
let nr = 0;
function Ui() {
  pe(() => {
    var e, t;
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (e = n[0]) !== null && e !== void 0 ? e : fo()), document.body.insertAdjacentElement("beforeend", (t = n[1]) !== null && t !== void 0 ? t : fo()), nr++, () => {
      nr === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(
        (r) => r.remove()
      ), nr--;
    };
  }, []);
}
function fo() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
const rr = "focusScope.autoFocusOnMount", or = "focusScope.autoFocusOnUnmount", po = {
  bubbles: !1,
  cancelable: !0
}, zi = /* @__PURE__ */ De((e, t) => {
  const y = e, { loop: n = !1, trapped: r = !1, onMountAutoFocus: o, onUnmountAutoFocus: i } = y, c = ye(y, ["loop", "trapped", "onMountAutoFocus", "onUnmountAutoFocus"]), [s, l] = re(null), u = tt(o), d = tt(i), f = be(null), p = ht(
    t,
    (b) => l(b)
  ), v = be({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  pe(() => {
    if (r) {
      let b = function(E) {
        if (v.paused || !s)
          return;
        const h = E.target;
        s.contains(h) ? f.current = h : et(f.current, {
          select: !0
        });
      }, x = function(E) {
        if (v.paused || !s)
          return;
        const h = E.relatedTarget;
        h !== null && (s.contains(h) || et(f.current, {
          select: !0
        }));
      }, w = function(E) {
        if (document.activeElement === document.body)
          for (const T of E)
            T.removedNodes.length > 0 && et(s);
      };
      document.addEventListener("focusin", b), document.addEventListener("focusout", x);
      const S = new MutationObserver(w);
      return s && S.observe(s, {
        childList: !0,
        subtree: !0
      }), () => {
        document.removeEventListener("focusin", b), document.removeEventListener("focusout", x), S.disconnect();
      };
    }
  }, [
    r,
    s,
    v.paused
  ]), pe(() => {
    if (s) {
      mo.add(v);
      const b = document.activeElement;
      if (!s.contains(b)) {
        const w = new CustomEvent(rr, po);
        s.addEventListener(rr, u), s.dispatchEvent(w), w.defaultPrevented || (qi(Hi(na(s)), {
          select: !0
        }), document.activeElement === b && et(s));
      }
      return () => {
        s.removeEventListener(rr, u), setTimeout(() => {
          const w = new CustomEvent(or, po);
          s.addEventListener(or, d), s.dispatchEvent(w), w.defaultPrevented || et(b != null ? b : document.body, {
            select: !0
          }), s.removeEventListener(or, d), mo.remove(v);
        }, 0);
      };
    }
  }, [
    s,
    u,
    d,
    v
  ]);
  const g = dt((b) => {
    if (!n && !r || v.paused)
      return;
    const x = b.key === "Tab" && !b.altKey && !b.ctrlKey && !b.metaKey, w = document.activeElement;
    if (x && w) {
      const S = b.currentTarget, [E, h] = Vi(S);
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
  return /* @__PURE__ */ de(_t.div, we({
    tabIndex: -1
  }, c, {
    ref: p,
    onKeyDown: g
  }));
});
function qi(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (et(r, {
      select: t
    }), document.activeElement !== n)
      return;
}
function Vi(e) {
  const t = na(e), n = vo(t, e), r = vo(t.reverse(), e);
  return [
    n,
    r
  ];
}
function na(e) {
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
function vo(e, t) {
  for (const n of e)
    if (!Gi(n, {
      upTo: t
    }))
      return n;
}
function Gi(e, { upTo: t }) {
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
function Ki(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function et(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== n && Ki(e) && t && e.select();
  }
}
const mo = Yi();
function Yi() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = ho(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = ho(e, t), (n = e[0]) === null || n === void 0 || n.resume();
    }
  };
}
function ho(e, t) {
  const n = [
    ...e
  ], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function Hi(e) {
  return e.filter(
    (t) => t.tagName !== "A"
  );
}
const Rt = globalThis != null && globalThis.document ? Ye : () => {
}, Xi = A["useId".toString()] || (() => {
});
let Ji = 0;
function Zi(e) {
  const [t, n] = A.useState(Xi());
  return Rt(() => {
    e || n(
      (r) => r != null ? r : String(Ji++)
    );
  }, [
    e
  ]), e || (t ? `radix-${t}` : "");
}
const Qi = ["top", "right", "bottom", "left"], nt = Math.min, ke = Math.max, $n = Math.round, dn = Math.floor, rt = (e) => ({
  x: e,
  y: e
}), ec = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, tc = {
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
function Dt(e) {
  return e.split("-")[1];
}
function Mr(e) {
  return e === "x" ? "y" : "x";
}
function Ir(e) {
  return e === "y" ? "height" : "width";
}
function At(e) {
  return ["top", "bottom"].includes(Xe(e)) ? "y" : "x";
}
function Br(e) {
  return Mr(At(e));
}
function nc(e, t, n) {
  n === void 0 && (n = !1);
  const r = Dt(e), o = Br(e), i = Ir(o);
  let c = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (c = Tn(c)), [c, Tn(c)];
}
function rc(e) {
  const t = Tn(e);
  return [Pr(e), t, Pr(t)];
}
function Pr(e) {
  return e.replace(/start|end/g, (t) => tc[t]);
}
function oc(e, t, n) {
  const r = ["left", "right"], o = ["right", "left"], i = ["top", "bottom"], c = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? o : r : t ? r : o;
    case "left":
    case "right":
      return t ? i : c;
    default:
      return [];
  }
}
function ac(e, t, n, r) {
  const o = Dt(e);
  let i = oc(Xe(e), n === "start", r);
  return o && (i = i.map((c) => c + "-" + o), t && (i = i.concat(i.map(Pr)))), i;
}
function Tn(e) {
  return e.replace(/left|right|bottom|top/g, (t) => ec[t]);
}
function ic(e) {
  return z({
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }, e);
}
function ra(e) {
  return typeof e != "number" ? ic(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Rn(e) {
  return fe(z({}, e), {
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function go(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = At(t), c = Br(t), s = Ir(c), l = Xe(t), u = i === "y", d = r.x + r.width / 2 - o.width / 2, f = r.y + r.height / 2 - o.height / 2, p = r[s] / 2 - o[s] / 2;
  let v;
  switch (l) {
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
  switch (Dt(t)) {
    case "start":
      v[c] -= p * (n && u ? -1 : 1);
      break;
    case "end":
      v[c] += p * (n && u ? -1 : 1);
      break;
  }
  return v;
}
const cc = (e, t, n) => Ie(void 0, null, function* () {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: i = [],
    platform: c
  } = n, s = i.filter(Boolean), l = yield c.isRTL == null ? void 0 : c.isRTL(t);
  let u = yield c.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: d,
    y: f
  } = go(u, r, l), p = r, v = {}, g = 0;
  for (let y = 0; y < s.length; y++) {
    const {
      name: b,
      fn: x
    } = s[y], {
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
      rects: u,
      platform: c,
      elements: {
        reference: e,
        floating: t
      }
    });
    if (d = w != null ? w : d, f = S != null ? S : f, v = fe(z({}, v), {
      [b]: z(z({}, v[b]), E)
    }), h && g <= 50) {
      g++, typeof h == "object" && (h.placement && (p = h.placement), h.rects && (u = h.rects === !0 ? yield c.getElementRects({
        reference: e,
        floating: t,
        strategy: o
      }) : h.rects), {
        x: d,
        y: f
      } = go(u, p, l)), y = -1;
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
function nn(e, t) {
  return Ie(this, null, function* () {
    var n;
    t === void 0 && (t = {});
    const {
      x: r,
      y: o,
      platform: i,
      rects: c,
      elements: s,
      strategy: l
    } = e, {
      boundary: u = "clippingAncestors",
      rootBoundary: d = "viewport",
      elementContext: f = "floating",
      altBoundary: p = !1,
      padding: v = 0
    } = He(t, e), g = ra(v), b = s[p ? f === "floating" ? "reference" : "floating" : f], x = Rn(yield i.getClippingRect({
      element: (n = yield i.isElement == null ? void 0 : i.isElement(b)) == null || n ? b : b.contextElement || (yield i.getDocumentElement == null ? void 0 : i.getDocumentElement(s.floating)),
      boundary: u,
      rootBoundary: d,
      strategy: l
    })), w = f === "floating" ? fe(z({}, c.floating), {
      x: r,
      y: o
    }) : c.reference, S = yield i.getOffsetParent == null ? void 0 : i.getOffsetParent(s.floating), E = (yield i.isElement == null ? void 0 : i.isElement(S)) ? (yield i.getScale == null ? void 0 : i.getScale(S)) || {
      x: 1,
      y: 1
    } : {
      x: 1,
      y: 1
    }, h = Rn(i.convertOffsetParentRelativeRectToViewportRelativeRect ? yield i.convertOffsetParentRelativeRectToViewportRelativeRect({
      rect: w,
      offsetParent: S,
      strategy: l
    }) : w);
    return {
      top: (x.top - h.top + g.top) / E.y,
      bottom: (h.bottom - x.bottom + g.bottom) / E.y,
      left: (x.left - h.left + g.left) / E.x,
      right: (h.right - x.right + g.right) / E.x
    };
  });
}
const yo = (e) => ({
  name: "arrow",
  options: e,
  fn(n) {
    return Ie(this, null, function* () {
      const {
        x: r,
        y: o,
        placement: i,
        rects: c,
        platform: s,
        elements: l,
        middlewareData: u
      } = n, {
        element: d,
        padding: f = 0
      } = He(e, n) || {};
      if (d == null)
        return {};
      const p = ra(f), v = {
        x: r,
        y: o
      }, g = Br(i), y = Ir(g), b = yield s.getDimensions(d), x = g === "y", w = x ? "top" : "left", S = x ? "bottom" : "right", E = x ? "clientHeight" : "clientWidth", h = c.reference[y] + c.reference[g] - v[g] - c.floating[y], T = v[g] - c.reference[g], R = yield s.getOffsetParent == null ? void 0 : s.getOffsetParent(d);
      let L = R ? R[E] : 0;
      (!L || !(yield s.isElement == null ? void 0 : s.isElement(R))) && (L = l.floating[E] || c.floating[y]);
      const N = h / 2 - T / 2, ae = L / 2 - b[y] / 2 - 1, ie = nt(p[w], ae), oe = nt(p[S], ae), Q = ie, B = L - b[y] - oe, te = L / 2 - b[y] / 2 + N, V = Or(Q, te, B), ne = !u.arrow && Dt(i) != null && te != V && c.reference[y] / 2 - (te < Q ? ie : oe) - b[y] / 2 < 0, ce = ne ? te < Q ? te - Q : te - B : 0;
      return {
        [g]: v[g] + ce,
        data: z({
          [g]: V,
          centerOffset: te - V - ce
        }, ne && {
          alignmentOffset: ce
        }),
        reset: ne
      };
    });
  }
}), sc = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    fn(n) {
      return Ie(this, null, function* () {
        var r, o;
        const {
          placement: i,
          middlewareData: c,
          rects: s,
          initialPlacement: l,
          platform: u,
          elements: d
        } = n, Q = He(e, n), {
          mainAxis: f = !0,
          crossAxis: p = !0,
          fallbackPlacements: v,
          fallbackStrategy: g = "bestFit",
          fallbackAxisSideDirection: y = "none",
          flipAlignment: b = !0
        } = Q, x = ye(Q, [
          "mainAxis",
          "crossAxis",
          "fallbackPlacements",
          "fallbackStrategy",
          "fallbackAxisSideDirection",
          "flipAlignment"
        ]);
        if ((r = c.arrow) != null && r.alignmentOffset)
          return {};
        const w = Xe(i), S = Xe(l) === l, E = yield u.isRTL == null ? void 0 : u.isRTL(d.floating), h = v || (S || !b ? [Tn(l)] : rc(l));
        !v && y !== "none" && h.push(...ac(l, b, y, E));
        const T = [l, ...h], R = yield nn(n, x), L = [];
        let N = ((o = c.flip) == null ? void 0 : o.overflows) || [];
        if (f && L.push(R[w]), p) {
          const B = nc(i, s, E);
          L.push(R[B[0]], R[B[1]]);
        }
        if (N = [...N, {
          placement: i,
          overflows: L
        }], !L.every((B) => B <= 0)) {
          var ae, ie;
          const B = (((ae = c.flip) == null ? void 0 : ae.index) || 0) + 1, te = T[B];
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
          let V = (ie = N.filter((ne) => ne.overflows[0] <= 0).sort((ne, ce) => ne.overflows[1] - ce.overflows[1])[0]) == null ? void 0 : ie.placement;
          if (!V)
            switch (g) {
              case "bestFit": {
                var oe;
                const ne = (oe = N.map((ce) => [ce.placement, ce.overflows.filter((ge) => ge > 0).reduce((ge, P) => ge + P, 0)]).sort((ce, ge) => ce[1] - ge[1])[0]) == null ? void 0 : oe[0];
                ne && (V = ne);
                break;
              }
              case "initialPlacement":
                V = l;
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
function bo(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function wo(e) {
  return Qi.some((t) => e[t] >= 0);
}
const lc = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    fn(n) {
      return Ie(this, null, function* () {
        const {
          rects: r
        } = n, c = He(e, n), {
          strategy: o = "referenceHidden"
        } = c, i = ye(c, [
          "strategy"
        ]);
        switch (o) {
          case "referenceHidden": {
            const s = yield nn(n, fe(z({}, i), {
              elementContext: "reference"
            })), l = bo(s, r.reference);
            return {
              data: {
                referenceHiddenOffsets: l,
                referenceHidden: wo(l)
              }
            };
          }
          case "escaped": {
            const s = yield nn(n, fe(z({}, i), {
              altBoundary: !0
            })), l = bo(s, r.floating);
            return {
              data: {
                escapedOffsets: l,
                escaped: wo(l)
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
function uc(e, t) {
  return Ie(this, null, function* () {
    const {
      placement: n,
      platform: r,
      elements: o
    } = e, i = yield r.isRTL == null ? void 0 : r.isRTL(o.floating), c = Xe(n), s = Dt(n), l = At(n) === "y", u = ["left", "top"].includes(c) ? -1 : 1, d = i && l ? -1 : 1, f = He(t, e);
    let {
      mainAxis: p,
      crossAxis: v,
      alignmentAxis: g
    } = typeof f == "number" ? {
      mainAxis: f,
      crossAxis: 0,
      alignmentAxis: null
    } : z({
      mainAxis: 0,
      crossAxis: 0,
      alignmentAxis: null
    }, f);
    return s && typeof g == "number" && (v = s === "end" ? g * -1 : g), l ? {
      x: v * d,
      y: p * u
    } : {
      x: p * u,
      y: v * d
    };
  });
}
const fc = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    fn(n) {
      return Ie(this, null, function* () {
        const {
          x: r,
          y: o
        } = n, i = yield uc(n, e);
        return {
          x: r + i.x,
          y: o + i.y,
          data: i
        };
      });
    }
  };
}, dc = function(e) {
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
          mainAxis: c = !0,
          crossAxis: s = !1,
          limiter: l = {
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
        } = x, u = ye(x, [
          "mainAxis",
          "crossAxis",
          "limiter"
        ]), d = {
          x: r,
          y: o
        }, f = yield nn(n, u), p = At(Xe(i)), v = Mr(p);
        let g = d[v], y = d[p];
        if (c) {
          const w = v === "y" ? "top" : "left", S = v === "y" ? "bottom" : "right", E = g + f[w], h = g - f[S];
          g = Or(E, g, h);
        }
        if (s) {
          const w = p === "y" ? "top" : "left", S = p === "y" ? "bottom" : "right", E = y + f[w], h = y - f[S];
          y = Or(E, y, h);
        }
        const b = l.fn(fe(z({}, n), {
          [v]: g,
          [p]: y
        }));
        return fe(z({}, b), {
          data: {
            x: b.x - r,
            y: b.y - o
          }
        });
      });
    }
  };
}, pc = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: r,
        placement: o,
        rects: i,
        middlewareData: c
      } = t, {
        offset: s = 0,
        mainAxis: l = !0,
        crossAxis: u = !0
      } = He(e, t), d = {
        x: n,
        y: r
      }, f = At(o), p = Mr(f);
      let v = d[p], g = d[f];
      const y = He(s, t), b = typeof y == "number" ? {
        mainAxis: y,
        crossAxis: 0
      } : z({
        mainAxis: 0,
        crossAxis: 0
      }, y);
      if (l) {
        const S = p === "y" ? "height" : "width", E = i.reference[p] - i.floating[S] + b.mainAxis, h = i.reference[p] + i.reference[S] - b.mainAxis;
        v < E ? v = E : v > h && (v = h);
      }
      if (u) {
        var x, w;
        const S = p === "y" ? "width" : "height", E = ["top", "left"].includes(Xe(o)), h = i.reference[f] - i.floating[S] + (E && ((x = c.offset) == null ? void 0 : x[f]) || 0) + (E ? 0 : b.crossAxis), T = i.reference[f] + i.reference[S] + (E ? 0 : ((w = c.offset) == null ? void 0 : w[f]) || 0) - (E ? b.crossAxis : 0);
        g < h ? g = h : g > T && (g = T);
      }
      return {
        [p]: v,
        [f]: g
      };
    }
  };
}, vc = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    fn(n) {
      return Ie(this, null, function* () {
        const {
          placement: r,
          rects: o,
          platform: i,
          elements: c
        } = n, R = He(e, n), {
          apply: s = () => {
          }
        } = R, l = ye(R, [
          "apply"
        ]), u = yield nn(n, l), d = Xe(r), f = Dt(r), p = At(r) === "y", {
          width: v,
          height: g
        } = o.floating;
        let y, b;
        d === "top" || d === "bottom" ? (y = d, b = f === ((yield i.isRTL == null ? void 0 : i.isRTL(c.floating)) ? "start" : "end") ? "left" : "right") : (b = d, y = f === "end" ? "top" : "bottom");
        const x = g - u[y], w = v - u[b], S = !n.middlewareData.shift;
        let E = x, h = w;
        if (p) {
          const L = v - u.left - u.right;
          h = f || S ? nt(w, L) : L;
        } else {
          const L = g - u.top - u.bottom;
          E = f || S ? nt(x, L) : L;
        }
        if (S && !f) {
          const L = ke(u.left, 0), N = ke(u.right, 0), ae = ke(u.top, 0), ie = ke(u.bottom, 0);
          p ? h = v - 2 * (L !== 0 || N !== 0 ? L + N : ke(u.left, u.right)) : E = g - 2 * (ae !== 0 || ie !== 0 ? ae + ie : ke(u.top, u.bottom));
        }
        yield s(fe(z({}, n), {
          availableWidth: h,
          availableHeight: E
        }));
        const T = yield i.getDimensions(c.floating);
        return v !== T.width || g !== T.height ? {
          reset: {
            rects: !0
          }
        } : {};
      });
    }
  };
};
function ot(e) {
  return oa(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function _e(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Ze(e) {
  var t;
  return (t = (oa(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function oa(e) {
  return e instanceof Node || e instanceof _e(e).Node;
}
function Je(e) {
  return e instanceof Element || e instanceof _e(e).Element;
}
function ze(e) {
  return e instanceof HTMLElement || e instanceof _e(e).HTMLElement;
}
function xo(e) {
  return typeof ShadowRoot == "undefined" ? !1 : e instanceof ShadowRoot || e instanceof _e(e).ShadowRoot;
}
function ln(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = Le(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function mc(e) {
  return ["table", "td", "th"].includes(ot(e));
}
function Wr(e) {
  const t = Ur(), n = Le(e);
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function hc(e) {
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
function Le(e) {
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
    xo(e) && e.host || // Fallback.
    Ze(e)
  );
  return xo(t) ? t.host : t;
}
function aa(e) {
  const t = kt(e);
  return Nn(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : ze(t) && ln(t) ? t : aa(t);
}
function rn(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = aa(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), c = _e(o);
  return i ? t.concat(c, c.visualViewport || [], ln(o) ? o : [], c.frameElement && n ? rn(c.frameElement) : []) : t.concat(o, rn(o, [], n));
}
function ia(e) {
  const t = Le(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = ze(e), i = o ? e.offsetWidth : n, c = o ? e.offsetHeight : r, s = $n(n) !== i || $n(r) !== c;
  return s && (n = i, r = c), {
    width: n,
    height: r,
    $: s
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
  } = ia(t);
  let c = (i ? $n(n.width) : n.width) / r, s = (i ? $n(n.height) : n.height) / o;
  return (!c || !Number.isFinite(c)) && (c = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: c,
    y: s
  };
}
const gc = /* @__PURE__ */ rt(0);
function ca(e) {
  const t = _e(e);
  return !Ur() || !t.visualViewport ? gc : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function yc(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== _e(e) ? !1 : t;
}
function mt(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = zr(e);
  let c = rt(1);
  t && (r ? Je(r) && (c = Ot(r)) : c = Ot(e));
  const s = yc(i, n, r) ? ca(i) : rt(0);
  let l = (o.left + s.x) / c.x, u = (o.top + s.y) / c.y, d = o.width / c.x, f = o.height / c.y;
  if (i) {
    const p = _e(i), v = r && Je(r) ? _e(r) : r;
    let g = p.frameElement;
    for (; g && r && v !== p; ) {
      const y = Ot(g), b = g.getBoundingClientRect(), x = Le(g), w = b.left + (g.clientLeft + parseFloat(x.paddingLeft)) * y.x, S = b.top + (g.clientTop + parseFloat(x.paddingTop)) * y.y;
      l *= y.x, u *= y.y, d *= y.x, f *= y.y, l += w, u += S, g = _e(g).frameElement;
    }
  }
  return Rn({
    width: d,
    height: f,
    x: l,
    y: u
  });
}
function bc(e) {
  let {
    rect: t,
    offsetParent: n,
    strategy: r
  } = e;
  const o = ze(n), i = Ze(n);
  if (n === i)
    return t;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = rt(1);
  const l = rt(0);
  if ((o || !o && r !== "fixed") && ((ot(n) !== "body" || ln(i)) && (c = jn(n)), ze(n))) {
    const u = mt(n);
    s = Ot(n), l.x = u.x + n.clientLeft, l.y = u.y + n.clientTop;
  }
  return {
    width: t.width * s.x,
    height: t.height * s.y,
    x: t.x * s.x - c.scrollLeft * s.x + l.x,
    y: t.y * s.y - c.scrollTop * s.y + l.y
  };
}
function wc(e) {
  return Array.from(e.getClientRects());
}
function sa(e) {
  return mt(Ze(e)).left + jn(e).scrollLeft;
}
function xc(e) {
  const t = Ze(e), n = jn(e), r = e.ownerDocument.body, o = ke(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = ke(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let c = -n.scrollLeft + sa(e);
  const s = -n.scrollTop;
  return Le(r).direction === "rtl" && (c += ke(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: c,
    y: s
  };
}
function Cc(e, t) {
  const n = _e(e), r = Ze(e), o = n.visualViewport;
  let i = r.clientWidth, c = r.clientHeight, s = 0, l = 0;
  if (o) {
    i = o.width, c = o.height;
    const u = Ur();
    (!u || u && t === "fixed") && (s = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: i,
    height: c,
    x: s,
    y: l
  };
}
function Ec(e, t) {
  const n = mt(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = ze(e) ? Ot(e) : rt(1), c = e.clientWidth * i.x, s = e.clientHeight * i.y, l = o * i.x, u = r * i.y;
  return {
    width: c,
    height: s,
    x: l,
    y: u
  };
}
function Co(e, t, n) {
  let r;
  if (t === "viewport")
    r = Cc(e, n);
  else if (t === "document")
    r = xc(Ze(e));
  else if (Je(t))
    r = Ec(t, n);
  else {
    const o = ca(e);
    r = fe(z({}, t), {
      x: t.x - o.x,
      y: t.y - o.y
    });
  }
  return Rn(r);
}
function la(e, t) {
  const n = kt(e);
  return n === t || !Je(n) || Nn(n) ? !1 : Le(n).position === "fixed" || la(n, t);
}
function Sc(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = rn(e, [], !1).filter((s) => Je(s) && ot(s) !== "body"), o = null;
  const i = Le(e).position === "fixed";
  let c = i ? kt(e) : e;
  for (; Je(c) && !Nn(c); ) {
    const s = Le(c), l = Wr(c);
    !l && s.position === "fixed" && (o = null), (i ? !l && !o : !l && s.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || ln(c) && !l && la(e, c)) ? r = r.filter((d) => d !== c) : o = s, c = kt(c);
  }
  return t.set(e, r), r;
}
function Oc(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const c = [...n === "clippingAncestors" ? Sc(t, this._c) : [].concat(n), r], s = c[0], l = c.reduce((u, d) => {
    const f = Co(t, d, o);
    return u.top = ke(f.top, u.top), u.right = nt(f.right, u.right), u.bottom = nt(f.bottom, u.bottom), u.left = ke(f.left, u.left), u;
  }, Co(t, s, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function Pc(e) {
  return ia(e);
}
function $c(e, t, n) {
  const r = ze(t), o = Ze(t), i = n === "fixed", c = mt(e, !0, i, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = rt(0);
  if (r || !r && !i)
    if ((ot(t) !== "body" || ln(o)) && (s = jn(t)), r) {
      const u = mt(t, !0, i, t);
      l.x = u.x + t.clientLeft, l.y = u.y + t.clientTop;
    } else
      o && (l.x = sa(o));
  return {
    x: c.left + s.scrollLeft - l.x,
    y: c.top + s.scrollTop - l.y,
    width: c.width,
    height: c.height
  };
}
function Eo(e, t) {
  return !ze(e) || Le(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function ua(e, t) {
  const n = _e(e);
  if (!ze(e))
    return n;
  let r = Eo(e, t);
  for (; r && mc(r) && Le(r).position === "static"; )
    r = Eo(r, t);
  return r && (ot(r) === "html" || ot(r) === "body" && Le(r).position === "static" && !Wr(r)) ? n : r || hc(e) || n;
}
const Tc = function(e) {
  return Ie(this, null, function* () {
    let {
      reference: t,
      floating: n,
      strategy: r
    } = e;
    const o = this.getOffsetParent || ua, i = this.getDimensions;
    return {
      reference: $c(t, yield o(n), r),
      floating: z({
        x: 0,
        y: 0
      }, yield i(n))
    };
  });
};
function Rc(e) {
  return Le(e).direction === "rtl";
}
const kc = {
  convertOffsetParentRelativeRectToViewportRelativeRect: bc,
  getDocumentElement: Ze,
  getClippingRect: Oc,
  getOffsetParent: ua,
  getElementRects: Tc,
  getClientRects: wc,
  getDimensions: Pc,
  getScale: Ot,
  isElement: Je,
  isRTL: Rc
};
function _c(e, t) {
  let n = null, r;
  const o = Ze(e);
  function i() {
    clearTimeout(r), n && n.disconnect(), n = null;
  }
  function c(s, l) {
    s === void 0 && (s = !1), l === void 0 && (l = 1), i();
    const {
      left: u,
      top: d,
      width: f,
      height: p
    } = e.getBoundingClientRect();
    if (s || t(), !f || !p)
      return;
    const v = dn(d), g = dn(o.clientWidth - (u + f)), y = dn(o.clientHeight - (d + p)), b = dn(u), w = {
      rootMargin: -v + "px " + -g + "px " + -y + "px " + -b + "px",
      threshold: ke(0, nt(1, l)) || 1
    };
    let S = !0;
    function E(h) {
      const T = h[0].intersectionRatio;
      if (T !== l) {
        if (!S)
          return c();
        T ? c(!1, T) : r = setTimeout(() => {
          c(!1, 1e-7);
        }, 100);
      }
      S = !1;
    }
    try {
      n = new IntersectionObserver(E, fe(z({}, w), {
        // Handle <iframe>s
        root: o.ownerDocument
      }));
    } catch (h) {
      n = new IntersectionObserver(E, w);
    }
    n.observe(e);
  }
  return c(!0), i;
}
function Dc(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: c = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, u = zr(e), d = o || i ? [...u ? rn(u) : [], ...rn(t)] : [];
  d.forEach((x) => {
    o && x.addEventListener("scroll", n, {
      passive: !0
    }), i && x.addEventListener("resize", n);
  });
  const f = u && s ? _c(u, n) : null;
  let p = -1, v = null;
  c && (v = new ResizeObserver((x) => {
    let [w] = x;
    w && w.target === u && v && (v.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      v && v.observe(t);
    })), n();
  }), u && !l && v.observe(u), v.observe(t));
  let g, y = l ? mt(e) : null;
  l && b();
  function b() {
    const x = mt(e);
    y && (x.x !== y.x || x.y !== y.y || x.width !== y.width || x.height !== y.height) && n(), y = x, g = requestAnimationFrame(b);
  }
  return n(), () => {
    d.forEach((x) => {
      o && x.removeEventListener("scroll", n), i && x.removeEventListener("resize", n);
    }), f && f(), v && v.disconnect(), v = null, l && cancelAnimationFrame(g);
  };
}
const Ac = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = z({
    platform: kc
  }, n), i = fe(z({}, o.platform), {
    _c: r
  });
  return cc(e, t, fe(z({}, o), {
    platform: i
  }));
}, Nc = (e) => {
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
      return r && t(r) ? r.current != null ? yo({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? yo({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
};
var xn = typeof document != "undefined" ? Ye : pe;
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
function fa(e) {
  return typeof window == "undefined" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function So(e, t) {
  const n = fa(e);
  return Math.round(t * n) / n;
}
function Oo(e) {
  const t = A.useRef(e);
  return xn(() => {
    t.current = e;
  }), t;
}
function jc(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: o,
    elements: {
      reference: i,
      floating: c
    } = {},
    transform: s = !0,
    whileElementsMounted: l,
    open: u
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
    V != T.current && (T.current = V, y(V));
  }, [y]), S = A.useCallback((V) => {
    V !== R.current && (R.current = V, x(V));
  }, [x]), E = i || g, h = c || b, T = A.useRef(null), R = A.useRef(null), L = A.useRef(d), N = Oo(l), ae = Oo(o), ie = A.useCallback(() => {
    if (!T.current || !R.current)
      return;
    const V = {
      placement: t,
      strategy: n,
      middleware: p
    };
    ae.current && (V.platform = ae.current), Ac(T.current, R.current, V).then((ne) => {
      const ce = fe(z({}, ne), {
        isPositioned: !0
      });
      oe.current && !kn(L.current, ce) && (L.current = ce, pi.flushSync(() => {
        f(ce);
      }));
    });
  }, [p, t, n, ae]);
  xn(() => {
    u === !1 && L.current.isPositioned && (L.current.isPositioned = !1, f((V) => fe(z({}, V), {
      isPositioned: !1
    })));
  }, [u]);
  const oe = A.useRef(!1);
  xn(() => (oe.current = !0, () => {
    oe.current = !1;
  }), []), xn(() => {
    if (E && (T.current = E), h && (R.current = h), E && h) {
      if (N.current)
        return N.current(E, h, ie);
      ie();
    }
  }, [E, h, ie, N]);
  const Q = A.useMemo(() => ({
    reference: T,
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
    const ne = So(B.floating, d.x), ce = So(B.floating, d.y);
    return s ? z(fe(z({}, V), {
      transform: "translate(" + ne + "px, " + ce + "px)"
    }), fa(B.floating) >= 1.5 && {
      willChange: "transform"
    }) : {
      position: n,
      left: ne,
      top: ce
    };
  }, [n, s, B.floating, d.x, d.y]);
  return A.useMemo(() => fe(z({}, d), {
    update: ie,
    refs: Q,
    elements: B,
    floatingStyles: te
  }), [d, ie, Q, B, te]);
}
function Lc(e) {
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
        let c, s;
        if ("borderBoxSize" in i) {
          const l = i.borderBoxSize, u = Array.isArray(l) ? l[0] : l;
          c = u.inlineSize, s = u.blockSize;
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
const da = "Popper", [pa, va] = ea(da), [Fc, ma] = pa(da), Mc = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = re(null);
  return /* @__PURE__ */ de(Fc, {
    scope: t,
    anchor: r,
    onAnchorChange: o
  }, n);
}, Ic = "PopperAnchor", Bc = /* @__PURE__ */ De((e, t) => {
  const l = e, { __scopePopper: n, virtualRef: r } = l, o = ye(l, ["__scopePopper", "virtualRef"]), i = ma(Ic, n), c = be(null), s = ht(t, c);
  return pe(() => {
    i.onAnchorChange((r == null ? void 0 : r.current) || c.current);
  }), r ? null : /* @__PURE__ */ de(_t.div, we({}, o, {
    ref: s
  }));
}), ha = "PopperContent", [Wc, hu] = pa(ha), Uc = /* @__PURE__ */ De((e, t) => {
  var n, r, o, i, c, s, l, u;
  const Se = e, { __scopePopper: d, side: f = "bottom", sideOffset: p = 0, align: v = "center", alignOffset: g = 0, arrowPadding: y = 0, avoidCollisions: b = !0, collisionBoundary: x = [], collisionPadding: w = 0, sticky: S = "partial", hideWhenDetached: E = !1, updatePositionStrategy: h = "optimized", onPlaced: T } = Se, R = ye(Se, ["__scopePopper", "side", "sideOffset", "align", "alignOffset", "arrowPadding", "avoidCollisions", "collisionBoundary", "collisionPadding", "sticky", "hideWhenDetached", "updatePositionStrategy", "onPlaced"]), L = ma(ha, d), [N, ae] = re(null), ie = ht(
    t,
    (Oe) => ae(Oe)
  ), [oe, Q] = re(null), B = Lc(oe), te = (n = B == null ? void 0 : B.width) !== null && n !== void 0 ? n : 0, V = (r = B == null ? void 0 : B.height) !== null && r !== void 0 ? r : 0, ne = f + (v !== "center" ? "-" + v : ""), ce = typeof w == "number" ? w : z({
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }, w), ge = Array.isArray(x) ? x : [
    x
  ], P = ge.length > 0, k = {
    padding: ce,
    boundary: ge.filter(zc),
    // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
    altBoundary: P
  }, { refs: H, floatingStyles: G, placement: q, isPositioned: X, middlewareData: I } = jc({
    // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
    strategy: "fixed",
    placement: ne,
    whileElementsMounted: (...Oe) => Dc(...Oe, {
      animationFrame: h === "always"
    }),
    elements: {
      reference: L.anchor
    },
    middleware: [
      fc({
        mainAxis: p + V,
        alignmentAxis: g
      }),
      b && dc(z({
        mainAxis: !0,
        crossAxis: !1,
        limiter: S === "partial" ? pc() : void 0
      }, k)),
      b && sc(z({}, k)),
      vc(fe(z({}, k), {
        apply: ({ elements: Oe, rects: Qe, availableWidth: at, availableHeight: Fe }) => {
          const { width: jt, height: Lt } = Qe.reference, Ae = Oe.floating.style;
          Ae.setProperty("--radix-popper-available-width", `${at}px`), Ae.setProperty("--radix-popper-available-height", `${Fe}px`), Ae.setProperty("--radix-popper-anchor-width", `${jt}px`), Ae.setProperty("--radix-popper-anchor-height", `${Lt}px`);
        }
      })),
      oe && Nc({
        element: oe,
        padding: y
      }),
      qc({
        arrowWidth: te,
        arrowHeight: V
      }),
      E && lc(z({
        strategy: "referenceHidden"
      }, k))
    ]
  }), [F, U] = ga(q), K = tt(T);
  Rt(() => {
    X && (K == null || K());
  }, [
    X,
    K
  ]);
  const Y = (o = I.arrow) === null || o === void 0 ? void 0 : o.x, he = (i = I.arrow) === null || i === void 0 ? void 0 : i.y, _ = ((c = I.arrow) === null || c === void 0 ? void 0 : c.centerOffset) !== 0, [Ee, Be] = re();
  return Rt(() => {
    N && Be(window.getComputedStyle(N).zIndex);
  }, [
    N
  ]), /* @__PURE__ */ de("div", {
    ref: H.setFloating,
    "data-radix-popper-content-wrapper": "",
    style: fe(z({}, G), {
      transform: X ? G.transform : "translate(0, -200%)",
      // keep off the page when measuring
      minWidth: "max-content",
      zIndex: Ee,
      "--radix-popper-transform-origin": [
        (s = I.transformOrigin) === null || s === void 0 ? void 0 : s.x,
        (l = I.transformOrigin) === null || l === void 0 ? void 0 : l.y
      ].join(" ")
    }),
    dir: e.dir
  }, /* @__PURE__ */ de(Wc, {
    scope: d,
    placedSide: F,
    onArrowChange: Q,
    arrowX: Y,
    arrowY: he,
    shouldHideArrow: _
  }, /* @__PURE__ */ de(_t.div, we({
    "data-side": F,
    "data-align": U
  }, R, {
    ref: ie,
    style: fe(z({}, R.style), {
      // if the PopperContent hasn't been placed yet (not all measurements done)
      // we prevent animations so that users's animation don't kick in too early referring wrong sides
      animation: X ? void 0 : "none",
      // hide the content if using the hide middleware and should be hidden
      opacity: (u = I.hide) !== null && u !== void 0 && u.referenceHidden ? 0 : void 0
    })
  }))));
});
function zc(e) {
  return e !== null;
}
const qc = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var n, r, o, i, c;
    const { placement: s, rects: l, middlewareData: u } = t, f = ((n = u.arrow) === null || n === void 0 ? void 0 : n.centerOffset) !== 0, p = f ? 0 : e.arrowWidth, v = f ? 0 : e.arrowHeight, [g, y] = ga(s), b = {
      start: "0%",
      center: "50%",
      end: "100%"
    }[y], x = ((r = (o = u.arrow) === null || o === void 0 ? void 0 : o.x) !== null && r !== void 0 ? r : 0) + p / 2, w = ((i = (c = u.arrow) === null || c === void 0 ? void 0 : c.y) !== null && i !== void 0 ? i : 0) + v / 2;
    let S = "", E = "";
    return g === "bottom" ? (S = f ? b : `${x}px`, E = `${-v}px`) : g === "top" ? (S = f ? b : `${x}px`, E = `${l.floating.height + v}px`) : g === "right" ? (S = `${-v}px`, E = f ? b : `${w}px`) : g === "left" && (S = `${l.floating.width + v}px`, E = f ? b : `${w}px`), {
      data: {
        x: S,
        y: E
      }
    };
  }
});
function ga(e) {
  const [t, n = "center"] = e.split("-");
  return [
    t,
    n
  ];
}
const Vc = Mc, Gc = Bc, Kc = Uc, Yc = /* @__PURE__ */ De((e, t) => {
  var n;
  const i = e, { container: r = globalThis == null || (n = globalThis.document) === null || n === void 0 ? void 0 : n.body } = i, o = ye(i, ["container"]);
  return r ? /* @__PURE__ */ vi.createPortal(/* @__PURE__ */ de(_t.div, we({}, o, {
    ref: t
  })), r) : null;
});
function Hc(e, t) {
  return fi((n, r) => {
    const o = t[n][r];
    return o != null ? o : n;
  }, e);
}
const qr = (e) => {
  const { present: t, children: n } = e, r = Xc(t), o = typeof n == "function" ? n({
    present: r.isPresent
  }) : St.only(n), i = ht(r.ref, o.ref);
  return typeof n == "function" || r.isPresent ? /* @__PURE__ */ Ar(o, {
    ref: i
  }) : null;
};
qr.displayName = "Presence";
function Xc(e) {
  const [t, n] = re(), r = be({}), o = be(e), i = be("none"), c = e ? "mounted" : "unmounted", [s, l] = Hc(c, {
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
  return pe(() => {
    const u = pn(r.current);
    i.current = s === "mounted" ? u : "none";
  }, [
    s
  ]), Rt(() => {
    const u = r.current, d = o.current;
    if (d !== e) {
      const p = i.current, v = pn(u);
      e ? l("MOUNT") : v === "none" || (u == null ? void 0 : u.display) === "none" ? l("UNMOUNT") : l(d && p !== v ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [
    e,
    l
  ]), Rt(() => {
    if (t) {
      const u = (f) => {
        const v = pn(r.current).includes(f.animationName);
        f.target === t && v && Yo(
          () => l("ANIMATION_END")
        );
      }, d = (f) => {
        f.target === t && (i.current = pn(r.current));
      };
      return t.addEventListener("animationstart", d), t.addEventListener("animationcancel", u), t.addEventListener("animationend", u), () => {
        t.removeEventListener("animationstart", d), t.removeEventListener("animationcancel", u), t.removeEventListener("animationend", u);
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
    ref: dt((u) => {
      u && (r.current = getComputedStyle(u)), n(u);
    }, [])
  };
}
function pn(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function Jc({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [r, o] = Zc({
    defaultProp: t,
    onChange: n
  }), i = e !== void 0, c = i ? e : r, s = tt(n), l = dt((u) => {
    if (i) {
      const f = typeof u == "function" ? u(e) : u;
      f !== e && s(f);
    } else
      o(u);
  }, [
    i,
    e,
    o,
    s
  ]);
  return [
    c,
    l
  ];
}
function Zc({ defaultProp: e, onChange: t }) {
  const n = re(e), [r] = n, o = be(r), i = tt(t);
  return pe(() => {
    o.current !== r && (i(r), o.current = r);
  }, [
    r,
    o,
    i
  ]), n;
}
var Qc = function(e) {
  if (typeof document == "undefined")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, gt = /* @__PURE__ */ new WeakMap(), vn = /* @__PURE__ */ new WeakMap(), mn = {}, ar = 0, ya = function(e) {
  return e && (e.host || ya(e.parentNode));
}, es = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = ya(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, ts = function(e, t, n, r) {
  var o = es(t, Array.isArray(e) ? e : [e]);
  mn[n] || (mn[n] = /* @__PURE__ */ new WeakMap());
  var i = mn[n], c = [], s = /* @__PURE__ */ new Set(), l = new Set(o), u = function(f) {
    !f || s.has(f) || (s.add(f), u(f.parentNode));
  };
  o.forEach(u);
  var d = function(f) {
    !f || l.has(f) || Array.prototype.forEach.call(f.children, function(p) {
      if (s.has(p))
        d(p);
      else {
        var v = p.getAttribute(r), g = v !== null && v !== "false", y = (gt.get(p) || 0) + 1, b = (i.get(p) || 0) + 1;
        gt.set(p, y), i.set(p, b), c.push(p), y === 1 && g && vn.set(p, !0), b === 1 && p.setAttribute(n, "true"), g || p.setAttribute(r, "true");
      }
    });
  };
  return d(t), s.clear(), ar++, function() {
    c.forEach(function(f) {
      var p = gt.get(f) - 1, v = i.get(f) - 1;
      gt.set(f, p), i.set(f, v), p || (vn.has(f) || f.removeAttribute(r), vn.delete(f)), v || f.removeAttribute(n);
    }), ar--, ar || (gt = /* @__PURE__ */ new WeakMap(), gt = /* @__PURE__ */ new WeakMap(), vn = /* @__PURE__ */ new WeakMap(), mn = {});
  };
}, ns = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = t || Qc(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), ts(r, o, n, "aria-hidden")) : function() {
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
function ba(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function rs(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, i; r < o; r++)
      (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
var Cn = "right-scroll-bar-position", En = "width-before-scroll-bar", os = "with-scroll-bars-hidden", as = "--removed-body-scroll-bar-size";
function is(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function cs(e, t) {
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
function wa(e, t) {
  return cs(t || null, function(n) {
    return e.forEach(function(r) {
      return is(r, n);
    });
  });
}
function xa(e) {
  return e;
}
function Ca(e, t) {
  t === void 0 && (t = xa);
  var n = [], r = !1, o = {
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
      var l = function() {
        var d = c;
        c = [], d.forEach(i);
      }, u = function() {
        return Promise.resolve().then(l);
      };
      u(), n = {
        push: function(d) {
          c.push(d), u();
        },
        filter: function(d) {
          return c = c.filter(d), n;
        }
      };
    }
  };
  return o;
}
function Vr(e, t) {
  return t === void 0 && (t = xa), Ca(e, t);
}
function Ea(e) {
  e === void 0 && (e = {});
  var t = Ca(null);
  return t.options = Ue({ async: !0, ssr: !1 }, e), t;
}
var Sa = function(e) {
  var t = e.sideCar, n = ba(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return A.createElement(r, Ue({}, n));
};
Sa.isSideCarExport = !0;
function ss(e, t) {
  return e.useMedium(t), Sa;
}
var Oa = Ea(), ir = function() {
}, Ln = A.forwardRef(function(e, t) {
  var n = A.useRef(null), r = A.useState({
    onScrollCapture: ir,
    onWheelCapture: ir,
    onTouchMoveCapture: ir
  }), o = r[0], i = r[1], c = e.forwardProps, s = e.children, l = e.className, u = e.removeScrollBar, d = e.enabled, f = e.shards, p = e.sideCar, v = e.noIsolation, g = e.inert, y = e.allowPinchZoom, b = e.as, x = b === void 0 ? "div" : b, w = ba(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]), S = p, E = wa([n, t]), h = Ue(Ue({}, w), o);
  return A.createElement(
    A.Fragment,
    null,
    d && A.createElement(S, { sideCar: Oa, removeScrollBar: u, shards: f, noIsolation: v, inert: g, setCallbacks: i, allowPinchZoom: !!y, lockRef: n }),
    c ? A.cloneElement(A.Children.only(s), Ue(Ue({}, h), { ref: E })) : A.createElement(x, Ue({}, h, { className: l, ref: E }), s)
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
var Po, ls = function() {
  if (Po)
    return Po;
  if (typeof __webpack_nonce__ != "undefined")
    return __webpack_nonce__;
};
function us() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = ls();
  return t && e.setAttribute("nonce", t), e;
}
function fs(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function ds(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var ps = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = us()) && (fs(t, n), ds(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, vs = function() {
  var e = ps();
  return function(t, n) {
    A.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, Pa = function() {
  var e = vs(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, ms = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, cr = function(e) {
  return parseInt(e || "", 10) || 0;
}, hs = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [cr(n), cr(r), cr(o)];
}, gs = function(e) {
  if (e === void 0 && (e = "margin"), typeof window == "undefined")
    return ms;
  var t = hs(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, ys = Pa(), bs = function(e, t, n, r) {
  var o = e.left, i = e.top, c = e.right, s = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(os, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(s, "px ").concat(r, `;
  }
  body {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(i, `px;
    padding-right: `).concat(c, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(s, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(s, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(Cn, ` {
    right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(En, ` {
    margin-right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(Cn, " .").concat(Cn, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(En, " .").concat(En, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body {
    `).concat(as, ": ").concat(s, `px;
  }
`);
}, ws = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r, i = A.useMemo(function() {
    return gs(o);
  }, [o]);
  return A.createElement(ys, { styles: bs(i, !t, o, n ? "" : "!important") });
}, $r = !1;
if (typeof window != "undefined")
  try {
    var hn = Object.defineProperty({}, "passive", {
      get: function() {
        return $r = !0, !0;
      }
    });
    window.addEventListener("test", hn, hn), window.removeEventListener("test", hn, hn);
  } catch (e) {
    $r = !1;
  }
var yt = $r ? { passive: !1 } : !1, xs = function(e) {
  return e.tagName === "TEXTAREA";
}, $a = function(e, t) {
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !xs(e) && n[t] === "visible")
  );
}, Cs = function(e) {
  return $a(e, "overflowY");
}, Es = function(e) {
  return $a(e, "overflowX");
}, $o = function(e, t) {
  var n = t;
  do {
    typeof ShadowRoot != "undefined" && n instanceof ShadowRoot && (n = n.host);
    var r = Ta(e, n);
    if (r) {
      var o = Ra(e, n), i = o[1], c = o[2];
      if (i > c)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== document.body);
  return !1;
}, Ss = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, Os = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Ta = function(e, t) {
  return e === "v" ? Cs(t) : Es(t);
}, Ra = function(e, t) {
  return e === "v" ? Ss(t) : Os(t);
}, Ps = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, $s = function(e, t, n, r, o) {
  var i = Ps(e, window.getComputedStyle(t).direction), c = i * r, s = n.target, l = t.contains(s), u = !1, d = c > 0, f = 0, p = 0;
  do {
    var v = Ra(e, s), g = v[0], y = v[1], b = v[2], x = y - b - i * g;
    (g || x) && Ta(e, s) && (f += x, p += g), s = s.parentNode;
  } while (
    // portaled content
    !l && s !== document.body || // self content
    l && (t.contains(s) || t === s)
  );
  return (d && (o && f === 0 || !o && c > f) || !d && (o && p === 0 || !o && -c > p)) && (u = !0), u;
}, gn = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, To = function(e) {
  return [e.deltaX, e.deltaY];
}, Ro = function(e) {
  return e && "current" in e ? e.current : e;
}, Ts = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, Rs = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, ks = 0, bt = [];
function _s(e) {
  var t = A.useRef([]), n = A.useRef([0, 0]), r = A.useRef(), o = A.useState(ks++)[0], i = A.useState(function() {
    return Pa();
  })[0], c = A.useRef(e);
  A.useEffect(function() {
    c.current = e;
  }, [e]), A.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var y = rs([e.lockRef.current], (e.shards || []).map(Ro), !0).filter(Boolean);
      return y.forEach(function(b) {
        return b.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), y.forEach(function(b) {
          return b.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var s = A.useCallback(function(y, b) {
    if ("touches" in y && y.touches.length === 2)
      return !c.current.allowPinchZoom;
    var x = gn(y), w = n.current, S = "deltaX" in y ? y.deltaX : w[0] - x[0], E = "deltaY" in y ? y.deltaY : w[1] - x[1], h, T = y.target, R = Math.abs(S) > Math.abs(E) ? "h" : "v";
    if ("touches" in y && R === "h" && T.type === "range")
      return !1;
    var L = $o(R, T);
    if (!L)
      return !0;
    if (L ? h = R : (h = R === "v" ? "h" : "v", L = $o(R, T)), !L)
      return !1;
    if (!r.current && "changedTouches" in y && (S || E) && (r.current = h), !h)
      return !0;
    var N = r.current || h;
    return $s(N, b, y, N === "h" ? S : E, !0);
  }, []), l = A.useCallback(function(y) {
    var b = y;
    if (!(!bt.length || bt[bt.length - 1] !== i)) {
      var x = "deltaY" in b ? To(b) : gn(b), w = t.current.filter(function(h) {
        return h.name === b.type && h.target === b.target && Ts(h.delta, x);
      })[0];
      if (w && w.should) {
        b.cancelable && b.preventDefault();
        return;
      }
      if (!w) {
        var S = (c.current.shards || []).map(Ro).filter(Boolean).filter(function(h) {
          return h.contains(b.target);
        }), E = S.length > 0 ? s(b, S[0]) : !c.current.noIsolation;
        E && b.cancelable && b.preventDefault();
      }
    }
  }, []), u = A.useCallback(function(y, b, x, w) {
    var S = { name: y, delta: b, target: x, should: w };
    t.current.push(S), setTimeout(function() {
      t.current = t.current.filter(function(E) {
        return E !== S;
      });
    }, 1);
  }, []), d = A.useCallback(function(y) {
    n.current = gn(y), r.current = void 0;
  }, []), f = A.useCallback(function(y) {
    u(y.type, To(y), y.target, s(y, e.lockRef.current));
  }, []), p = A.useCallback(function(y) {
    u(y.type, gn(y), y.target, s(y, e.lockRef.current));
  }, []);
  A.useEffect(function() {
    return bt.push(i), e.setCallbacks({
      onScrollCapture: f,
      onWheelCapture: f,
      onTouchMoveCapture: p
    }), document.addEventListener("wheel", l, yt), document.addEventListener("touchmove", l, yt), document.addEventListener("touchstart", d, yt), function() {
      bt = bt.filter(function(y) {
        return y !== i;
      }), document.removeEventListener("wheel", l, yt), document.removeEventListener("touchmove", l, yt), document.removeEventListener("touchstart", d, yt);
    };
  }, []);
  var v = e.removeScrollBar, g = e.inert;
  return A.createElement(
    A.Fragment,
    null,
    g ? A.createElement(i, { styles: Rs(o) }) : null,
    v ? A.createElement(ws, { gapMode: "margin" }) : null
  );
}
const Ds = ss(Oa, _s);
var ka = A.forwardRef(function(e, t) {
  return A.createElement(Ln, Ue({}, e, { ref: t, sideCar: Ds }));
});
ka.classNames = Ln.classNames;
const As = ka, _a = "Popover", [Da, gu] = ea(_a, [
  va
]), Gr = va(), [Ns, Nt] = Da(_a), js = (e) => {
  const { __scopePopover: t, children: n, open: r, defaultOpen: o, onOpenChange: i, modal: c = !1 } = e, s = Gr(t), l = be(null), [u, d] = re(!1), [f = !1, p] = Jc({
    prop: r,
    defaultProp: o,
    onChange: i
  });
  return /* @__PURE__ */ de(Vc, s, /* @__PURE__ */ de(Ns, {
    scope: t,
    contentId: Zi(),
    triggerRef: l,
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
    hasCustomAnchor: u,
    onCustomAnchorAdd: dt(
      () => d(!0),
      []
    ),
    onCustomAnchorRemove: dt(
      () => d(!1),
      []
    ),
    modal: c
  }, n));
}, Ls = "PopoverTrigger", Fs = /* @__PURE__ */ De((e, t) => {
  const l = e, { __scopePopover: n } = l, r = ye(l, ["__scopePopover"]), o = Nt(Ls, n), i = Gr(n), c = ht(t, o.triggerRef), s = /* @__PURE__ */ de(_t.button, we({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": o.open,
    "aria-controls": o.contentId,
    "data-state": ja(o.open)
  }, r, {
    ref: c,
    onClick: pt(e.onClick, o.onOpenToggle)
  }));
  return o.hasCustomAnchor ? s : /* @__PURE__ */ de(Gc, we({
    asChild: !0
  }, i), s);
}), Aa = "PopoverPortal", [Ms, Is] = Da(Aa, {
  forceMount: void 0
}), Bs = (e) => {
  const { __scopePopover: t, forceMount: n, children: r, container: o } = e, i = Nt(Aa, t);
  return /* @__PURE__ */ de(Ms, {
    scope: t,
    forceMount: n
  }, /* @__PURE__ */ de(qr, {
    present: n || i.open
  }, /* @__PURE__ */ de(Yc, {
    asChild: !0,
    container: o
  }, r)));
}, on = "PopoverContent", Ws = /* @__PURE__ */ De((e, t) => {
  const n = Is(on, e.__scopePopover), c = e, { forceMount: r = n.forceMount } = c, o = ye(c, ["forceMount"]), i = Nt(on, e.__scopePopover);
  return /* @__PURE__ */ de(qr, {
    present: r || i.open
  }, i.modal ? /* @__PURE__ */ de(Us, we({}, o, {
    ref: t
  })) : /* @__PURE__ */ de(zs, we({}, o, {
    ref: t
  })));
}), Us = /* @__PURE__ */ De((e, t) => {
  const n = Nt(on, e.__scopePopover), r = be(null), o = ht(t, r), i = be(!1);
  return pe(() => {
    const c = r.current;
    if (c)
      return ns(c);
  }, []), /* @__PURE__ */ de(As, {
    as: Fr,
    allowPinchZoom: !0
  }, /* @__PURE__ */ de(Na, we({}, e, {
    ref: o,
    trapFocus: n.open,
    disableOutsidePointerEvents: !0,
    onCloseAutoFocus: pt(e.onCloseAutoFocus, (c) => {
      var s;
      c.preventDefault(), i.current || (s = n.triggerRef.current) === null || s === void 0 || s.focus();
    }),
    onPointerDownOutside: pt(e.onPointerDownOutside, (c) => {
      const s = c.detail.originalEvent, l = s.button === 0 && s.ctrlKey === !0, u = s.button === 2 || l;
      i.current = u;
    }, {
      checkForDefaultPrevented: !1
    }),
    onFocusOutside: pt(
      e.onFocusOutside,
      (c) => c.preventDefault(),
      {
        checkForDefaultPrevented: !1
      }
    )
  })));
}), zs = /* @__PURE__ */ De((e, t) => {
  const n = Nt(on, e.__scopePopover), r = be(!1), o = be(!1);
  return /* @__PURE__ */ de(Na, we({}, e, {
    ref: t,
    trapFocus: !1,
    disableOutsidePointerEvents: !1,
    onCloseAutoFocus: (i) => {
      var c;
      if ((c = e.onCloseAutoFocus) === null || c === void 0 || c.call(e, i), !i.defaultPrevented) {
        var s;
        r.current || (s = n.triggerRef.current) === null || s === void 0 || s.focus(), i.preventDefault();
      }
      r.current = !1, o.current = !1;
    },
    onInteractOutside: (i) => {
      var c, s;
      (c = e.onInteractOutside) === null || c === void 0 || c.call(e, i), i.defaultPrevented || (r.current = !0, i.detail.originalEvent.type === "pointerdown" && (o.current = !0));
      const l = i.target;
      ((s = n.triggerRef.current) === null || s === void 0 ? void 0 : s.contains(l)) && i.preventDefault(), i.detail.originalEvent.type === "focusin" && o.current && i.preventDefault();
    }
  }));
}), Na = /* @__PURE__ */ De((e, t) => {
  const g = e, { __scopePopover: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: i, disableOutsidePointerEvents: c, onEscapeKeyDown: s, onPointerDownOutside: l, onFocusOutside: u, onInteractOutside: d } = g, f = ye(g, ["__scopePopover", "trapFocus", "onOpenAutoFocus", "onCloseAutoFocus", "disableOutsidePointerEvents", "onEscapeKeyDown", "onPointerDownOutside", "onFocusOutside", "onInteractOutside"]), p = Nt(on, n), v = Gr(n);
  return Ui(), /* @__PURE__ */ de(zi, {
    asChild: !0,
    loop: !0,
    trapped: r,
    onMountAutoFocus: o,
    onUnmountAutoFocus: i
  }, /* @__PURE__ */ de(Ii, {
    asChild: !0,
    disableOutsidePointerEvents: c,
    onInteractOutside: d,
    onEscapeKeyDown: s,
    onPointerDownOutside: l,
    onFocusOutside: u,
    onDismiss: () => p.onOpenChange(!1)
  }, /* @__PURE__ */ de(Kc, we({
    "data-state": ja(p.open),
    role: "dialog",
    id: p.contentId
  }, v, f, {
    ref: t,
    style: fe(z({}, f.style), {
      "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
      "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
      "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
    })
  }))));
});
function ja(e) {
  return e ? "open" : "closed";
}
const qs = js, Vs = Bs;
const ko = (e) => {
  const s = e, {
    children: t,
    contentClassName: n,
    noStyle: r = !1,
    sideOffset: o = 18,
    align: i = "end"
  } = s, c = ye(s, [
    "children",
    "contentClassName",
    "noStyle",
    "sideOffset",
    "align"
  ]);
  return /* @__PURE__ */ O.jsx(
    Ws,
    fe(z({
      align: i,
      sideOffset: o,
      className: J({
        [n || ""]: !!n,
        "Popover-content": !!n || !r
      })
    }, c), {
      children: t
    })
  );
}, Gs = (e) => {
  const v = e, {
    isPortal: t = !0,
    open: n,
    onOpenChange: r,
    onTriggerClick: o,
    ariaLabel: i,
    triggerElement: c,
    children: s,
    popoverClassName: l,
    noStyle: u = !1,
    triggerTabindex: d,
    triggerAsChild: f = !1
  } = v, p = ye(v, [
    "isPortal",
    "open",
    "onOpenChange",
    "onTriggerClick",
    "ariaLabel",
    "triggerElement",
    "children",
    "popoverClassName",
    "noStyle",
    "triggerTabindex",
    "triggerAsChild"
  ]);
  return /* @__PURE__ */ O.jsx(
    "div",
    {
      className: J({
        [l || ""]: !!l,
        Popover: !u
      }),
      children: /* @__PURE__ */ O.jsxs(qs, { open: n, onOpenChange: r, children: [
        c && /* @__PURE__ */ O.jsx(
          Fs,
          {
            "aria-label": i,
            tabIndex: d,
            className: "Popover-trigger",
            onClick: o,
            asChild: f,
            children: c
          }
        ),
        n && s && (t ? /* @__PURE__ */ O.jsx(Vs, { children: /* @__PURE__ */ O.jsx(ko, fe(z({}, p), { children: s })) }) : /* @__PURE__ */ O.jsx(ko, fe(z({}, p), { children: s })))
      ] })
    }
  );
};
var Pe = /* @__PURE__ */ ((e) => (e.Small = "small", e.Medium = "medium", e))(Pe || {}), Ct = /* @__PURE__ */ ((e) => (e.Default = "default", e.Custom = "custom", e))(Ct || {});
const Ks = $e.forwardRef(
  (e, t) => {
    const {
      items: n,
      selected: r,
      label: o,
      ariaLabel: i,
      size: c = Pe.Medium,
      error: s,
      isDisabled: l,
      onChange: u,
      type: d,
      className: f
    } = e, [p, v] = re(!1), [g, y] = re(), b = () => v(!p), x = (h) => {
      y(h), u && u(h), v(!1);
    }, w = (h) => {
      h.target === h.currentTarget && h.preventDefault();
    }, S = (h) => {
      (h.key === "Enter" || h.key === " ") && v(!p);
    }, E = (h, T) => {
      (h.key === "Enter" || h.key === " ") && (y(T), u && u(T), v(!1));
    };
    return pe(() => {
      y(r);
    }, [r]), /* @__PURE__ */ O.jsxs(
      "div",
      {
        className: J({
          Dropdown: !0,
          "Dropdown-disabled": l,
          [f || ""]: !!f
        }),
        children: [
          o && /* @__PURE__ */ O.jsx(
            "div",
            {
              className: J({
                "Dropdown-label": !0,
                "Dropdown-label-medium": c === Pe.Medium,
                "Dropdown-label-small": c === Pe.Small
              }),
              children: o
            }
          ),
          /* @__PURE__ */ O.jsx(
            Gs,
            {
              isPortal: !1,
              open: p,
              ariaLabel: i,
              contentClassName: J({
                "Dropdown-popover-content": !0,
                "Dropdown-popover-content-medium": c === Pe.Medium,
                "Dropdown-popover-content-small": c === Pe.Small
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
                    "Dropdown-root-small": d === Ct.Default && c === Pe.Small,
                    "Dropdown-root-medium": d === Ct.Default && c === Pe.Medium,
                    "Dropdown-root-error": !!s,
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
                    "Dropdown-list-medium": c === Pe.Medium,
                    "Dropdown-list-small": c === Pe.Small
                  }),
                  onClick: (h) => h.nativeEvent.stopImmediatePropagation(),
                  children: n.map((h) => /* @__PURE__ */ O.jsxs(
                    "div",
                    {
                      className: J({
                        "Dropdown-list-item": !0,
                        "Dropdown-list-item-small": c === Pe.Small,
                        "Dropdown-list-item-medium": c === Pe.Medium
                      }),
                      tabIndex: 0,
                      role: "button",
                      onClick: () => x(h),
                      onKeyDown: (T) => E(T, h),
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
          s && /* @__PURE__ */ O.jsx(
            "div",
            {
              className: J({
                "Dropdown-error-text": !0,
                "Dropdown-error-text-medium": c === Pe.Medium,
                "Dropdown-error-text-small": c === Pe.Small
              }),
              children: s
            }
          )
        ]
      }
    );
  }
);
Ks.displayName = "Dropdown";
const yu = (e) => {
  const { items: t, onLabelClick: n } = e, r = (o, i) => {
    i || n && n(o);
  };
  return /* @__PURE__ */ O.jsx("nav", { "aria-label": "Breadcrumb", className: "Breadcrumbs", children: /* @__PURE__ */ O.jsx("ol", { className: "Breadcrumbs-list", children: t.map((o, i) => {
    const c = t.length - 1 === i;
    return /* @__PURE__ */ O.jsxs(Ko, { children: [
      /* @__PURE__ */ O.jsx(
        "li",
        {
          "aria-current": c ? "page" : void 0,
          className: J({
            "Breadcrumbs-item": !0,
            "Breadcrumbs-item-current": c
          }),
          children: tn(o.label) ? o.label : /* @__PURE__ */ O.jsx(
            "button",
            {
              onClick: () => r(o, c),
              "aria-label": typeof o.label == "string" ? o.label : void 0,
              className: "Breadcrumbs-button",
              children: o.label
            }
          )
        }
      ),
      !c && /* @__PURE__ */ O.jsx("div", { "aria-hidden": "true", className: "Breadcrumbs-separator", children: /* @__PURE__ */ O.jsx(Nr, { height: "16", width: "16" }) })
    ] }, o.key);
  }) }) });
};
var Sn = /* @__PURE__ */ ((e) => (e.Medium = "medium", e.Small = "small", e))(Sn || {});
const sr = 100, bu = ({
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
    "aria-valuenow": Math.min(e, sr),
    "aria-valuemax": sr,
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
        style: { width: `${Math.min(e, sr)}%`, backgroundColor: o }
      }
    )
  }
);
function Ys(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var Tr = { exports: {} }, yn = { exports: {} }, le = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _o;
function Hs() {
  if (_o)
    return le;
  _o = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, c = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, v = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, b = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
  function S(h) {
    if (typeof h == "object" && h !== null) {
      var T = h.$$typeof;
      switch (T) {
        case t:
          switch (h = h.type, h) {
            case l:
            case u:
            case r:
            case i:
            case o:
            case f:
              return h;
            default:
              switch (h = h && h.$$typeof, h) {
                case s:
                case d:
                case g:
                case v:
                case c:
                  return h;
                default:
                  return T;
              }
          }
        case n:
          return T;
      }
    }
  }
  function E(h) {
    return S(h) === u;
  }
  return le.AsyncMode = l, le.ConcurrentMode = u, le.ContextConsumer = s, le.ContextProvider = c, le.Element = t, le.ForwardRef = d, le.Fragment = r, le.Lazy = g, le.Memo = v, le.Portal = n, le.Profiler = i, le.StrictMode = o, le.Suspense = f, le.isAsyncMode = function(h) {
    return E(h) || S(h) === l;
  }, le.isConcurrentMode = E, le.isContextConsumer = function(h) {
    return S(h) === s;
  }, le.isContextProvider = function(h) {
    return S(h) === c;
  }, le.isElement = function(h) {
    return typeof h == "object" && h !== null && h.$$typeof === t;
  }, le.isForwardRef = function(h) {
    return S(h) === d;
  }, le.isFragment = function(h) {
    return S(h) === r;
  }, le.isLazy = function(h) {
    return S(h) === g;
  }, le.isMemo = function(h) {
    return S(h) === v;
  }, le.isPortal = function(h) {
    return S(h) === n;
  }, le.isProfiler = function(h) {
    return S(h) === i;
  }, le.isStrictMode = function(h) {
    return S(h) === o;
  }, le.isSuspense = function(h) {
    return S(h) === f;
  }, le.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === r || h === u || h === i || h === o || h === f || h === p || typeof h == "object" && h !== null && (h.$$typeof === g || h.$$typeof === v || h.$$typeof === c || h.$$typeof === s || h.$$typeof === d || h.$$typeof === b || h.$$typeof === x || h.$$typeof === w || h.$$typeof === y);
  }, le.typeOf = S, le;
}
var ue = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Do;
function Xs() {
  return Do || (Do = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, c = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, v = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, b = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
    function S(_) {
      return typeof _ == "string" || typeof _ == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      _ === r || _ === u || _ === i || _ === o || _ === f || _ === p || typeof _ == "object" && _ !== null && (_.$$typeof === g || _.$$typeof === v || _.$$typeof === c || _.$$typeof === s || _.$$typeof === d || _.$$typeof === b || _.$$typeof === x || _.$$typeof === w || _.$$typeof === y);
    }
    function E(_) {
      if (typeof _ == "object" && _ !== null) {
        var Ee = _.$$typeof;
        switch (Ee) {
          case t:
            var Be = _.type;
            switch (Be) {
              case l:
              case u:
              case r:
              case i:
              case o:
              case f:
                return Be;
              default:
                var Se = Be && Be.$$typeof;
                switch (Se) {
                  case s:
                  case d:
                  case g:
                  case v:
                  case c:
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
    var h = l, T = u, R = s, L = c, N = t, ae = d, ie = r, oe = g, Q = v, B = n, te = i, V = o, ne = f, ce = !1;
    function ge(_) {
      return ce || (ce = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), P(_) || E(_) === l;
    }
    function P(_) {
      return E(_) === u;
    }
    function k(_) {
      return E(_) === s;
    }
    function H(_) {
      return E(_) === c;
    }
    function G(_) {
      return typeof _ == "object" && _ !== null && _.$$typeof === t;
    }
    function q(_) {
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
    ue.AsyncMode = h, ue.ConcurrentMode = T, ue.ContextConsumer = R, ue.ContextProvider = L, ue.Element = N, ue.ForwardRef = ae, ue.Fragment = ie, ue.Lazy = oe, ue.Memo = Q, ue.Portal = B, ue.Profiler = te, ue.StrictMode = V, ue.Suspense = ne, ue.isAsyncMode = ge, ue.isConcurrentMode = P, ue.isContextConsumer = k, ue.isContextProvider = H, ue.isElement = G, ue.isForwardRef = q, ue.isFragment = X, ue.isLazy = I, ue.isMemo = F, ue.isPortal = U, ue.isProfiler = K, ue.isStrictMode = Y, ue.isSuspense = he, ue.isValidElementType = S, ue.typeOf = E;
  }()), ue;
}
var Ao;
function La() {
  return Ao || (Ao = 1, process.env.NODE_ENV === "production" ? yn.exports = Hs() : yn.exports = Xs()), yn.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var lr, No;
function Js() {
  if (No)
    return lr;
  No = 1;
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
      for (var c = {}, s = 0; s < 10; s++)
        c["_" + String.fromCharCode(s)] = s;
      var l = Object.getOwnPropertyNames(c).map(function(d) {
        return c[d];
      });
      if (l.join("") !== "0123456789")
        return !1;
      var u = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(d) {
        u[d] = d;
      }), Object.keys(Object.assign({}, u)).join("") === "abcdefghijklmnopqrst";
    } catch (d) {
      return !1;
    }
  }
  return lr = o() ? Object.assign : function(i, c) {
    for (var s, l = r(i), u, d = 1; d < arguments.length; d++) {
      s = Object(arguments[d]);
      for (var f in s)
        t.call(s, f) && (l[f] = s[f]);
      if (e) {
        u = e(s);
        for (var p = 0; p < u.length; p++)
          n.call(s, u[p]) && (l[u[p]] = s[u[p]]);
      }
    }
    return l;
  }, lr;
}
var ur, jo;
function Kr() {
  if (jo)
    return ur;
  jo = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ur = e, ur;
}
var fr, Lo;
function Fa() {
  return Lo || (Lo = 1, fr = Function.call.bind(Object.prototype.hasOwnProperty)), fr;
}
var dr, Fo;
function Zs() {
  if (Fo)
    return dr;
  Fo = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = Kr(), n = {}, r = Fa();
    e = function(i) {
      var c = "Warning: " + i;
      typeof console != "undefined" && console.error(c);
      try {
        throw new Error(c);
      } catch (s) {
      }
    };
  }
  function o(i, c, s, l, u) {
    if (process.env.NODE_ENV !== "production") {
      for (var d in i)
        if (r(i, d)) {
          var f;
          try {
            if (typeof i[d] != "function") {
              var p = Error(
                (l || "React class") + ": " + s + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw p.name = "Invariant Violation", p;
            }
            f = i[d](c, d, l, s, null, t);
          } catch (g) {
            f = g;
          }
          if (f && !(f instanceof Error) && e(
            (l || "React class") + ": type specification of " + s + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof f + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), f instanceof Error && !(f.message in n)) {
            n[f.message] = !0;
            var v = u ? u() : "";
            e(
              "Failed " + s + " type: " + f.message + (v != null ? v : "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, dr = o, dr;
}
var pr, Mo;
function Qs() {
  if (Mo)
    return pr;
  Mo = 1;
  var e = La(), t = Js(), n = Kr(), r = Fa(), o = Zs(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(s) {
    var l = "Warning: " + s;
    typeof console != "undefined" && console.error(l);
    try {
      throw new Error(l);
    } catch (u) {
    }
  });
  function c() {
    return null;
  }
  return pr = function(s, l) {
    var u = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function f(P) {
      var k = P && (u && P[u] || P[d]);
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
      instanceOf: T,
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
          if (l) {
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
      var q = G.bind(null, !1);
      return q.isRequired = G.bind(null, !0), q;
    }
    function x(P) {
      function k(H, G, q, X, I, F) {
        var U = H[G], K = V(U);
        if (K !== P) {
          var Y = ne(U);
          return new y(
            "Invalid " + X + " `" + I + "` of type " + ("`" + Y + "` supplied to `" + q + "`, expected ") + ("`" + P + "`."),
            { expectedType: P }
          );
        }
        return null;
      }
      return b(k);
    }
    function w() {
      return b(c);
    }
    function S(P) {
      function k(H, G, q, X, I) {
        if (typeof P != "function")
          return new y("Property `" + I + "` of component `" + q + "` has invalid PropType notation inside arrayOf.");
        var F = H[G];
        if (!Array.isArray(F)) {
          var U = V(F);
          return new y("Invalid " + X + " `" + I + "` of type " + ("`" + U + "` supplied to `" + q + "`, expected an array."));
        }
        for (var K = 0; K < F.length; K++) {
          var Y = P(F, K, q, X, I + "[" + K + "]", n);
          if (Y instanceof Error)
            return Y;
        }
        return null;
      }
      return b(k);
    }
    function E() {
      function P(k, H, G, q, X) {
        var I = k[H];
        if (!s(I)) {
          var F = V(I);
          return new y("Invalid " + q + " `" + X + "` of type " + ("`" + F + "` supplied to `" + G + "`, expected a single ReactElement."));
        }
        return null;
      }
      return b(P);
    }
    function h() {
      function P(k, H, G, q, X) {
        var I = k[H];
        if (!e.isValidElementType(I)) {
          var F = V(I);
          return new y("Invalid " + q + " `" + X + "` of type " + ("`" + F + "` supplied to `" + G + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return b(P);
    }
    function T(P) {
      function k(H, G, q, X, I) {
        if (!(H[G] instanceof P)) {
          var F = P.name || p, U = ge(H[G]);
          return new y("Invalid " + X + " `" + I + "` of type " + ("`" + U + "` supplied to `" + q + "`, expected ") + ("instance of `" + F + "`."));
        }
        return null;
      }
      return b(k);
    }
    function R(P) {
      if (!Array.isArray(P))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), c;
      function k(H, G, q, X, I) {
        for (var F = H[G], U = 0; U < P.length; U++)
          if (g(F, P[U]))
            return null;
        var K = JSON.stringify(P, function(he, _) {
          var Ee = ne(_);
          return Ee === "symbol" ? String(_) : _;
        });
        return new y("Invalid " + X + " `" + I + "` of value `" + String(F) + "` " + ("supplied to `" + q + "`, expected one of " + K + "."));
      }
      return b(k);
    }
    function L(P) {
      function k(H, G, q, X, I) {
        if (typeof P != "function")
          return new y("Property `" + I + "` of component `" + q + "` has invalid PropType notation inside objectOf.");
        var F = H[G], U = V(F);
        if (U !== "object")
          return new y("Invalid " + X + " `" + I + "` of type " + ("`" + U + "` supplied to `" + q + "`, expected an object."));
        for (var K in F)
          if (r(F, K)) {
            var Y = P(F, K, q, X, I + "." + K, n);
            if (Y instanceof Error)
              return Y;
          }
        return null;
      }
      return b(k);
    }
    function N(P) {
      if (!Array.isArray(P))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), c;
      for (var k = 0; k < P.length; k++) {
        var H = P[k];
        if (typeof H != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ce(H) + " at index " + k + "."
          ), c;
      }
      function G(q, X, I, F, U) {
        for (var K = [], Y = 0; Y < P.length; Y++) {
          var he = P[Y], _ = he(q, X, I, F, U, n);
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
      function P(k, H, G, q, X) {
        return B(k[H]) ? null : new y("Invalid " + q + " `" + X + "` supplied to " + ("`" + G + "`, expected a ReactNode."));
      }
      return b(P);
    }
    function ie(P, k, H, G, q) {
      return new y(
        (P || "React class") + ": " + k + " type `" + H + "." + G + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + q + "`."
      );
    }
    function oe(P) {
      function k(H, G, q, X, I) {
        var F = H[G], U = V(F);
        if (U !== "object")
          return new y("Invalid " + X + " `" + I + "` of type `" + U + "` " + ("supplied to `" + q + "`, expected `object`."));
        for (var K in P) {
          var Y = P[K];
          if (typeof Y != "function")
            return ie(q, X, I, K, ne(Y));
          var he = Y(F, K, q, X, I + "." + K, n);
          if (he)
            return he;
        }
        return null;
      }
      return b(k);
    }
    function Q(P) {
      function k(H, G, q, X, I) {
        var F = H[G], U = V(F);
        if (U !== "object")
          return new y("Invalid " + X + " `" + I + "` of type `" + U + "` " + ("supplied to `" + q + "`, expected `object`."));
        var K = t({}, H[G], P);
        for (var Y in K) {
          var he = P[Y];
          if (r(P, Y) && typeof he != "function")
            return ie(q, X, I, Y, ne(he));
          if (!he)
            return new y(
              "Invalid " + X + " `" + I + "` key `" + Y + "` supplied to `" + q + "`.\nBad object: " + JSON.stringify(H[G], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(P), null, "  ")
            );
          var _ = he(F, Y, q, X, I + "." + Y, n);
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
          if (P === null || s(P))
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
                var q = G.value;
                if (q && !B(q[1]))
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
    function ce(P) {
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
var vr, Io;
function el() {
  if (Io)
    return vr;
  Io = 1;
  var e = Kr();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, vr = function() {
    function r(c, s, l, u, d, f) {
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
  var tl = La(), nl = !0;
  Tr.exports = Qs()(tl.isElement, nl);
} else
  Tr.exports = el()();
var ve = Tr.exports;
const Ma = /* @__PURE__ */ hi(ve);
var Rr = "data-focus-lock", Ia = "data-focus-lock-disabled", rl = "data-no-focus-lock", ol = "data-autofocus-inside", al = "data-no-autofocus", mr = {
  width: "1px",
  height: "0px",
  padding: 0,
  overflow: "hidden",
  position: "fixed",
  top: "1px",
  left: "1px"
};
process.env.NODE_ENV !== "production" && Ma.node;
var Ba = Vr({}, function(e) {
  var t = e.target, n = e.currentTarget;
  return {
    target: t,
    currentTarget: n
  };
}), Wa = Vr(), il = Vr(), cl = Ea({
  async: !0
  // focus-lock sidecar is not required on the server
  // however, it might be required for JSDOM tests
  // ssr: true,
}), sl = [], Yr = /* @__PURE__ */ A.forwardRef(function(t, n) {
  var r, o = A.useState(), i = o[0], c = o[1], s = A.useRef(), l = A.useRef(!1), u = A.useRef(null), d = t.children, f = t.disabled, p = t.noFocusGuards, v = t.persistentFocus, g = t.crossFrame, y = t.autoFocus, b = t.allowTextSelection, x = t.group, w = t.className, S = t.whiteList, E = t.hasPositiveIndices, h = t.shards, T = h === void 0 ? sl : h, R = t.as, L = R === void 0 ? "div" : R, N = t.lockProps, ae = N === void 0 ? {} : N, ie = t.sideCar, oe = t.returnFocus, Q = t.focusOptions, B = t.onActivation, te = t.onDeactivation, V = A.useState({}), ne = V[0], ce = A.useCallback(function() {
    u.current = u.current || document && document.activeElement, s.current && B && B(s.current), l.current = !0;
  }, [B]), ge = A.useCallback(function() {
    l.current = !1, te && te(s.current);
  }, [te]);
  pe(function() {
    f || (u.current = null);
  }, []);
  var P = A.useCallback(function(U) {
    var K = u.current;
    if (K && K.focus) {
      var Y = typeof oe == "function" ? oe(K) : oe;
      if (Y) {
        var he = typeof Y == "object" ? Y : void 0;
        u.current = null, U ? Promise.resolve().then(function() {
          return K.focus(he);
        }) : K.focus(he);
      }
    }
  }, [oe]), k = A.useCallback(function(U) {
    l.current && Ba.useMedium(U);
  }, []), H = Wa.useMedium, G = A.useCallback(function(U) {
    s.current !== U && (s.current = U, c(U));
  }, []);
  process.env.NODE_ENV !== "production" && (typeof b != "undefined" && console.warn("React-Focus-Lock: allowTextSelection is deprecated and enabled by default"), A.useEffect(function() {
    !s.current && typeof L != "string" && console.error("FocusLock: could not obtain ref to internal node");
  }, []));
  var q = we((r = {}, r[Ia] = f && "disabled", r[Rr] = x, r), ae), X = p !== !0, I = X && p !== "tail", F = wa([n, G]);
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
    sideCar: cl,
    observed: i,
    disabled: f,
    persistentFocus: v,
    crossFrame: g,
    autoFocus: y,
    whiteList: S,
    shards: T,
    onActivation: ce,
    onDeactivation: ge,
    returnFocus: P,
    focusOptions: Q
  }), /* @__PURE__ */ A.createElement(L, we({
    ref: F
  }, q, {
    className: w,
    onBlur: H,
    onFocus: k
  }), d), I && /* @__PURE__ */ A.createElement("div", {
    "data-focus-guard": !0,
    tabIndex: f ? -1 : 0,
    style: mr
  }));
});
Yr.propTypes = process.env.NODE_ENV !== "production" ? {
  children: ve.node,
  disabled: ve.bool,
  returnFocus: ve.oneOfType([ve.bool, ve.object, ve.func]),
  focusOptions: ve.object,
  noFocusGuards: ve.bool,
  hasPositiveIndices: ve.bool,
  allowTextSelection: ve.bool,
  autoFocus: ve.bool,
  persistentFocus: ve.bool,
  crossFrame: ve.bool,
  group: ve.string,
  className: ve.string,
  whiteList: ve.func,
  shards: ve.arrayOf(ve.any),
  as: ve.oneOfType([ve.string, ve.func, ve.object]),
  lockProps: ve.object,
  onActivation: ve.func,
  onDeactivation: ve.func,
  sideCar: ve.any.isRequired
} : {};
Yr.defaultProps = {
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
const Ua = Yr;
function kr(e, t) {
  return kr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, kr(e, t);
}
function ll(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, kr(e, t);
}
function an(e) {
  "@babel/helpers - typeof";
  return an = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, an(e);
}
function ul(e, t) {
  if (an(e) !== "object" || e === null)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (an(r) !== "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function fl(e) {
  var t = ul(e, "string");
  return an(t) === "symbol" ? t : String(t);
}
function dl(e, t, n) {
  return t = fl(t), t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function pl(e, t) {
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
    var i = [], c;
    function s() {
      c = e(i.map(function(u) {
        return u.props;
      })), t(c);
    }
    var l = /* @__PURE__ */ function(u) {
      ll(d, u);
      function d() {
        return u.apply(this, arguments) || this;
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
        var v = i.indexOf(this);
        i.splice(v, 1), s();
      }, f.render = function() {
        return /* @__PURE__ */ $e.createElement(o, this.props);
      }, d;
    }(di);
    return dl(l, "displayName", "SideEffect(" + n(o) + ")"), l;
  };
}
var qe = function(e) {
  for (var t = Array(e.length), n = 0; n < e.length; ++n)
    t[n] = e[n];
  return t;
}, _n = function(e) {
  return Array.isArray(e) ? e : [e];
}, za = function(e) {
  return Array.isArray(e) ? e[0] : e;
}, vl = function(e) {
  if (e.nodeType !== Node.ELEMENT_NODE)
    return !1;
  var t = window.getComputedStyle(e, null);
  return !t || !t.getPropertyValue ? !1 : t.getPropertyValue("display") === "none" || t.getPropertyValue("visibility") === "hidden";
}, qa = function(e) {
  return e.parentNode && e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    e.parentNode.host
  ) : e.parentNode;
}, Va = function(e) {
  return e === document || e && e.nodeType === Node.DOCUMENT_NODE;
}, ml = function(e, t) {
  return !e || Va(e) || !vl(e) && t(qa(e));
}, Ga = function(e, t) {
  var n = e.get(t);
  if (n !== void 0)
    return n;
  var r = ml(t, Ga.bind(void 0, e));
  return e.set(t, r), r;
}, hl = function(e, t) {
  return e && !Va(e) ? bl(e) ? t(qa(e)) : !1 : !0;
}, Ka = function(e, t) {
  var n = e.get(t);
  if (n !== void 0)
    return n;
  var r = hl(t, Ka.bind(void 0, e));
  return e.set(t, r), r;
}, Ya = function(e) {
  return e.dataset;
}, gl = function(e) {
  return e.tagName === "BUTTON";
}, Ha = function(e) {
  return e.tagName === "INPUT";
}, Xa = function(e) {
  return Ha(e) && e.type === "radio";
}, yl = function(e) {
  return !((Ha(e) || gl(e)) && (e.type === "hidden" || e.disabled));
}, bl = function(e) {
  var t = e.getAttribute(al);
  return ![!0, "true", ""].includes(t);
}, Hr = function(e) {
  var t;
  return !!(e && (!((t = Ya(e)) === null || t === void 0) && t.focusGuard));
}, Dn = function(e) {
  return !Hr(e);
}, wl = function(e) {
  return !!e;
}, xl = function(e, t) {
  var n = e.tabIndex - t.tabIndex, r = e.index - t.index;
  if (n) {
    if (!e.tabIndex)
      return 1;
    if (!t.tabIndex)
      return -1;
  }
  return n || r;
}, Ja = function(e, t, n) {
  return qe(e).map(function(r, o) {
    return {
      node: r,
      index: o,
      tabIndex: n && r.tabIndex === -1 ? (r.dataset || {}).focusGuard ? 0 : -1 : r.tabIndex
    };
  }).filter(function(r) {
    return !t || r.tabIndex >= 0;
  }).sort(xl);
}, Cl = [
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
], Xr = Cl.join(","), El = "".concat(Xr, ", [data-focus-guard]"), Za = function(e, t) {
  return qe((e.shadowRoot || e).children).reduce(function(n, r) {
    return n.concat(r.matches(t ? El : Xr) ? [r] : [], Za(r));
  }, []);
}, Sl = function(e, t) {
  var n;
  return e instanceof HTMLIFrameElement && (!((n = e.contentDocument) === null || n === void 0) && n.body) ? Fn([e.contentDocument.body], t) : [e];
}, Fn = function(e, t) {
  return e.reduce(function(n, r) {
    var o, i = Za(r, t), c = (o = []).concat.apply(o, i.map(function(s) {
      return Sl(s, t);
    }));
    return n.concat(
      // add all tabbables inside and within shadow DOMs in DOM order
      c,
      // add if node is tabbable itself
      r.parentNode ? qe(r.parentNode.querySelectorAll(Xr)).filter(function(s) {
        return s === r;
      }) : []
    );
  }, []);
}, Ol = function(e) {
  var t = e.querySelectorAll("[".concat(ol, "]"));
  return qe(t).map(function(n) {
    return Fn([n]);
  }).reduce(function(n, r) {
    return n.concat(r);
  }, []);
}, Jr = function(e, t) {
  return qe(e).filter(function(n) {
    return Ga(t, n);
  }).filter(function(n) {
    return yl(n);
  });
}, Bo = function(e, t) {
  return t === void 0 && (t = /* @__PURE__ */ new Map()), qe(e).filter(function(n) {
    return Ka(t, n);
  });
}, _r = function(e, t, n) {
  return Ja(Jr(Fn(e, n), t), !0, n);
}, Wo = function(e, t) {
  return Ja(Jr(Fn(e), t), !1);
}, Pl = function(e, t) {
  return Jr(Ol(e), t);
}, Pt = function(e, t) {
  return e.shadowRoot ? Pt(e.shadowRoot, t) : Object.getPrototypeOf(e).contains !== void 0 && Object.getPrototypeOf(e).contains.call(e, t) ? !0 : qe(e.children).some(function(n) {
    var r;
    if (n instanceof HTMLIFrameElement) {
      var o = (r = n.contentDocument) === null || r === void 0 ? void 0 : r.body;
      return o ? Pt(o, t) : !1;
    }
    return Pt(n, t);
  });
}, $l = function(e) {
  for (var t = /* @__PURE__ */ new Set(), n = e.length, r = 0; r < n; r += 1)
    for (var o = r + 1; o < n; o += 1) {
      var i = e[r].compareDocumentPosition(e[o]);
      (i & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0 && t.add(o), (i & Node.DOCUMENT_POSITION_CONTAINS) > 0 && t.add(r);
    }
  return e.filter(function(c, s) {
    return !t.has(s);
  });
}, Qa = function(e) {
  return e.parentNode ? Qa(e.parentNode) : e;
}, Zr = function(e) {
  var t = _n(e);
  return t.filter(Boolean).reduce(function(n, r) {
    var o = r.getAttribute(Rr);
    return n.push.apply(n, o ? $l(qe(Qa(r).querySelectorAll("[".concat(Rr, '="').concat(o, '"]:not([').concat(Ia, '="disabled"])')))) : [r]), n;
  }, []);
}, Tl = function(e) {
  try {
    return e();
  } catch (t) {
    return;
  }
}, cn = function(e) {
  if (e === void 0 && (e = document), !(!e || !e.activeElement)) {
    var t = e.activeElement;
    return t.shadowRoot ? cn(t.shadowRoot) : t instanceof HTMLIFrameElement && Tl(function() {
      return t.contentWindow.document;
    }) ? cn(t.contentWindow.document) : t;
  }
}, Rl = function(e, t) {
  return e === t;
}, kl = function(e, t) {
  return !!qe(e.querySelectorAll("iframe")).some(function(n) {
    return Rl(n, t);
  });
}, ei = function(e, t) {
  return t === void 0 && (t = cn(za(e).ownerDocument)), !t || t.dataset && t.dataset.focusGuard ? !1 : Zr(e).some(function(n) {
    return Pt(n, t) || kl(n, t);
  });
}, _l = function(e) {
  e === void 0 && (e = document);
  var t = cn(e);
  return t ? qe(e.querySelectorAll("[".concat(rl, "]"))).some(function(n) {
    return Pt(n, t);
  }) : !1;
}, Dl = function(e, t) {
  return t.filter(Xa).filter(function(n) {
    return n.name === e.name;
  }).filter(function(n) {
    return n.checked;
  })[0] || e;
}, Qr = function(e, t) {
  return Xa(e) && e.name ? Dl(e, t) : e;
}, Al = function(e) {
  var t = /* @__PURE__ */ new Set();
  return e.forEach(function(n) {
    return t.add(Qr(n, e));
  }), e.filter(function(n) {
    return t.has(n);
  });
}, Uo = function(e) {
  return e[0] && e.length > 1 ? Qr(e[0], e) : e[0];
}, zo = function(e, t) {
  return e.length > 1 ? e.indexOf(Qr(e[t], e)) : t;
}, ti = "NEW_FOCUS", Nl = function(e, t, n, r) {
  var o = e.length, i = e[0], c = e[o - 1], s = Hr(n);
  if (!(n && e.indexOf(n) >= 0)) {
    var l = n !== void 0 ? t.indexOf(n) : -1, u = r ? t.indexOf(r) : l, d = r ? e.indexOf(r) : -1, f = l - u, p = t.indexOf(i), v = t.indexOf(c), g = Al(t), y = n !== void 0 ? g.indexOf(n) : -1, b = y - (r ? g.indexOf(r) : l), x = zo(e, 0), w = zo(e, o - 1);
    if (l === -1 || d === -1)
      return ti;
    if (!f && d >= 0)
      return d;
    if (l <= p && s && Math.abs(f) > 1)
      return w;
    if (l >= v && s && Math.abs(f) > 1)
      return x;
    if (f && Math.abs(b) > 1)
      return d;
    if (l <= p)
      return w;
    if (l > v)
      return x;
    if (f)
      return Math.abs(f) > 1 ? d : (o + d + f) % o;
  }
}, jl = function(e) {
  return function(t) {
    var n, r = (n = Ya(t)) === null || n === void 0 ? void 0 : n.autofocus;
    return (
      // @ts-expect-error
      t.autofocus || //
      r !== void 0 && r !== "false" || //
      e.indexOf(t) >= 0
    );
  };
}, Ll = function(e, t, n) {
  var r = e.map(function(i) {
    var c = i.node;
    return c;
  }), o = Bo(r.filter(jl(n)));
  return o && o.length ? Uo(o) : Uo(Bo(t));
}, Dr = function(e, t) {
  return t === void 0 && (t = []), t.push(e), e.parentNode && Dr(e.parentNode.host || e.parentNode, t), t;
}, hr = function(e, t) {
  for (var n = Dr(e), r = Dr(t), o = 0; o < n.length; o += 1) {
    var i = n[o];
    if (r.indexOf(i) >= 0)
      return i;
  }
  return !1;
}, ni = function(e, t, n) {
  var r = _n(e), o = _n(t), i = r[0], c = !1;
  return o.filter(Boolean).forEach(function(s) {
    c = hr(c || s, s) || c, n.filter(Boolean).forEach(function(l) {
      var u = hr(i, l);
      u && (!c || Pt(u, c) ? c = u : c = hr(u, c));
    });
  }), c;
}, Fl = function(e, t) {
  return e.reduce(function(n, r) {
    return n.concat(Pl(r, t));
  }, []);
}, Ml = function(e, t) {
  var n = /* @__PURE__ */ new Map();
  return t.forEach(function(r) {
    return n.set(r.node, r);
  }), e.map(function(r) {
    return n.get(r);
  }).filter(wl);
}, Il = function(e, t) {
  var n = cn(_n(e).length > 0 ? document : za(e).ownerDocument), r = Zr(e).filter(Dn), o = ni(n || e, e, r), i = /* @__PURE__ */ new Map(), c = Wo(r, i), s = _r(r, i).filter(function(v) {
    var g = v.node;
    return Dn(g);
  });
  if (!(!s[0] && (s = c, !s[0]))) {
    var l = Wo([o], i).map(function(v) {
      var g = v.node;
      return g;
    }), u = Ml(l, s), d = u.map(function(v) {
      var g = v.node;
      return g;
    }), f = Nl(d, l, n, t);
    if (f === ti) {
      var p = Ll(c, d, Fl(r, i));
      if (p)
        return { node: p };
      console.warn("focus-lock: cannot find any node to move focus into");
      return;
    }
    return f === void 0 ? f : u[f];
  }
}, Bl = function(e) {
  var t = Zr(e).filter(Dn), n = ni(e, e, t), r = /* @__PURE__ */ new Map(), o = _r([n], r, !0), i = _r(t, r).filter(function(c) {
    var s = c.node;
    return Dn(s);
  }).map(function(c) {
    var s = c.node;
    return s;
  });
  return o.map(function(c) {
    var s = c.node, l = c.index;
    return {
      node: s,
      index: l,
      lockItem: i.indexOf(s) >= 0,
      guard: Hr(s)
    };
  });
}, Wl = function(e, t) {
  "focus" in e && e.focus(t), "contentWindow" in e && e.contentWindow && e.contentWindow.focus();
}, gr = 0, yr = !1, ri = function(e, t, n) {
  n === void 0 && (n = {});
  var r = Il(e, t);
  if (!yr && r) {
    if (gr > 2) {
      console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"), yr = !0, setTimeout(function() {
        yr = !1;
      }, 1);
      return;
    }
    gr++, Wl(r.node, n.focusOptions), gr--;
  }
};
function eo(e) {
  setTimeout(e, 1);
}
var Ul = function() {
  return document && document.activeElement === document.body;
}, zl = function() {
  return Ul() || _l();
}, $t = null, Et = null, Tt = null, sn = !1, ql = function() {
  return !0;
}, Vl = function(t) {
  return ($t.whiteList || ql)(t);
}, Gl = function(t, n) {
  Tt = {
    observerNode: t,
    portaledElement: n
  };
}, Kl = function(t) {
  return Tt && Tt.portaledElement === t;
};
function qo(e, t, n, r) {
  var o = null, i = e;
  do {
    var c = r[i];
    if (c.guard)
      c.node.dataset.focusAutoGuard && (o = c);
    else if (c.lockItem) {
      if (i !== e)
        return;
      o = null;
    } else
      break;
  } while ((i += n) !== t);
  o && (o.node.tabIndex = 0);
}
var Yl = function(t) {
  return t && "current" in t ? t.current : t;
}, Hl = function(t) {
  return t ? !!sn : sn === "meanwhile";
}, Xl = function e(t, n, r) {
  return n && // find host equal to active element and check nested active element
  (n.host === t && (!n.activeElement || r.contains(n.activeElement)) || n.parentNode && e(t, n.parentNode, r));
}, Jl = function(t, n) {
  return n.some(function(r) {
    return Xl(t, r, r);
  });
}, An = function() {
  var t = !1;
  if ($t) {
    var n = $t, r = n.observed, o = n.persistentFocus, i = n.autoFocus, c = n.shards, s = n.crossFrame, l = n.focusOptions, u = r || Tt && Tt.portaledElement, d = document && document.activeElement;
    if (u) {
      var f = [u].concat(c.map(Yl).filter(Boolean));
      if ((!d || Vl(d)) && (o || Hl(s) || !zl() || !Et && i) && (u && !// active element is "inside" working area
      (ei(f) || // check for shadow-dom contained elements
      d && Jl(d, f) || Kl(d)) && (document && !Et && d && !i ? (d.blur && d.blur(), document.body.focus()) : (t = ri(f, Et, {
        focusOptions: l
      }), Tt = {})), sn = !1, Et = document && document.activeElement), document) {
        var p = document && document.activeElement, v = Bl(f), g = v.map(function(y) {
          var b = y.node;
          return b;
        }).indexOf(p);
        g > -1 && (v.filter(function(y) {
          var b = y.guard, x = y.node;
          return b && x.dataset.focusAutoGuard;
        }).forEach(function(y) {
          var b = y.node;
          return b.removeAttribute("tabIndex");
        }), qo(g, v.length, 1, v), qo(g, -1, -1, v));
      }
    }
  }
  return t;
}, oi = function(t) {
  An() && t && (t.stopPropagation(), t.preventDefault());
}, to = function() {
  return eo(An);
}, Zl = function(t) {
  var n = t.target, r = t.currentTarget;
  r.contains(n) || Gl(r, n);
}, Ql = function() {
  return null;
};
process.env.NODE_ENV !== "production" && Ma.node.isRequired;
var ai = function() {
  sn = "just", eo(function() {
    sn = "meanwhile";
  });
}, eu = function() {
  document.addEventListener("focusin", oi), document.addEventListener("focusout", to), window.addEventListener("blur", ai);
}, tu = function() {
  document.removeEventListener("focusin", oi), document.removeEventListener("focusout", to), window.removeEventListener("blur", ai);
};
function nu(e) {
  return e.filter(function(t) {
    var n = t.disabled;
    return !n;
  });
}
function ru(e) {
  var t = e.slice(-1)[0];
  t && !$t && eu();
  var n = $t, r = n && t && t.id === n.id;
  $t = t, n && !r && (n.onDeactivation(), e.filter(function(o) {
    var i = o.id;
    return i === n.id;
  }).length || n.returnFocus(!t)), t ? (Et = null, (!r || n.observed !== t.observed) && t.onActivation(), An(), eo(An)) : (tu(), Et = null);
}
Ba.assignSyncMedium(Zl);
Wa.assignMedium(to);
il.assignMedium(function(e) {
  return e({
    moveFocusInside: ri,
    focusInside: ei
  });
});
const ou = pl(nu, ru)(Ql);
var ii = /* @__PURE__ */ A.forwardRef(function(t, n) {
  return /* @__PURE__ */ A.createElement(Ua, we({
    sideCar: ou,
    ref: n
  }, t));
}), ci = Ua.propTypes || {};
ci.sideCar;
var au = Ys(ci, ["sideCar"]);
ii.propTypes = process.env.NODE_ENV !== "production" ? au : {};
const iu = ii;
const cu = (e) => {
  const { children: t, open: n, onOpenChange: r, disableBackdropClick: o, disableEscapeKey: i, contentClassName: c } = e, [s, l] = re(!0), u = be(null);
  return pe(() => (s && n && (document.body.style.overflow = "hidden"), () => {
    document.body.style.overflow = "visible";
  }), [s, n]), pe(() => {
    if (o)
      return;
    const d = (f) => {
      !u.current || u.current.contains(f.target) || (r(), l(!1));
    };
    return document.addEventListener("mousedown", d), document.addEventListener("touchstart", d), () => {
      document.removeEventListener("mousedown", d), document.removeEventListener("touchstart", d);
    };
  }, [o, r]), pe(() => {
    if (i)
      return;
    const d = (f) => {
      f.key === "Escape" && (r(), l(!1));
    };
    return document.addEventListener("keydown", d), () => {
      document.removeEventListener("keydown", d);
    };
  }, [o, i, r]), /* @__PURE__ */ O.jsx("div", { className: "Modal-backdrop", children: /* @__PURE__ */ O.jsx(
    "div",
    {
      ref: u,
      "aria-modal": "true",
      role: "dialog",
      className: J({
        "Modal-content": !0,
        [c || ""]: !!c
      }),
      children: t
    }
  ) });
}, wu = (e) => {
  const {
    open: t,
    onOpenChange: n,
    children: r,
    disableBackdropClick: o = !1,
    disableEscapeKey: i = !1,
    contentClassName: c
  } = e;
  return t ? /* @__PURE__ */ O.jsx(O.Fragment, { children: mi(
    /* @__PURE__ */ O.jsx(iu, { children: /* @__PURE__ */ O.jsx("div", { className: "Modal", children: /* @__PURE__ */ O.jsx(
      cu,
      {
        open: t,
        onOpenChange: n,
        disableBackdropClick: o,
        disableEscapeKey: i,
        contentClassName: c,
        children: r
      }
    ) }) }),
    document.body
  ) }) : null;
};
const Vo = "...";
var On = /* @__PURE__ */ ((e) => (e.ROUNDED = "rounded", e.SQUARED = "squared", e))(On || {});
const xu = (e) => {
  const {
    currentPage: t,
    onPageChange: n,
    pageCount: r,
    boundaryCount: o = 1,
    siblingCount: i = 1,
    buttonAriaLabel: c = "Go to page",
    nextButtonAriaLabel: s = "Go to next page",
    prevButtonAriaLabel: l = "Go to previous page",
    variant: u = On.SQUARED
  } = e, d = (w, S) => {
    const E = S - w + 1;
    return Array.from({ length: E }, (h, T) => w + T);
  }, f = d(1, Math.min(o, r)), p = d(Math.max(r - o + 1, o + 1), r), v = Math.max(
    Math.min(t - i, r - o - i * 2 - 1),
    o + 2
  ), g = Math.min(
    Math.max(t + i, o + i * 2 + 2),
    p.length > 0 ? p[0] - 2 : r - 1
  ), y = () => v > o + 2 ? [Vo] : o + 1 < r - o ? [o + 1] : [], b = () => g < r - o - 1 ? [Vo] : r - o > o ? [r - o] : [], x = [
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
        "aria-label": l,
        "aria-controls": "prev",
        disabled: t === 1,
        "aria-disabled": t === 1,
        onClick: () => n(t - 1),
        children: /* @__PURE__ */ O.jsx(Xo, {})
      }
    ),
    x.map((w, S) => /* @__PURE__ */ O.jsx(
      "button",
      fe(z({
        className: J({
          "Pagination-number-button": !0,
          "Pagination-number-button-squared": u === On.SQUARED,
          "Pagination-number-button-rounded": u === On.ROUNDED
        })
      }, typeof w == "number" ? {
        "aria-current": t === w,
        "aria-label": `${c} ${w}`,
        onClick: () => n(w)
      } : {}), {
        children: w
      }),
      S
    )),
    /* @__PURE__ */ O.jsx(
      "button",
      {
        "aria-label": s,
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
const Cu = (e) => {
  const {
    id: t,
    ariaLabel: n,
    name: r,
    className: o,
    value: i = 0,
    disabled: c,
    min: s = 0,
    max: l = 100,
    onChange: u
  } = e, d = (p) => {
    u && u(+p.target.value);
  }, f = (p) => Math.min(100, Math.max(0, (p - s) / (l - s) * 100));
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
            min: s,
            max: l,
            disabled: c,
            className: J({
              "Slider-range": !0,
              "Slider-thumb-disabled": c
            }),
            onChange: d
          }
        )
      ] })
    }
  );
};
var Qt = /* @__PURE__ */ ((e) => (e.Light = "light", e.Dark = "dark", e.Green = "green", e))(Qt || {}), en = /* @__PURE__ */ ((e) => (e.Small = "small", e.Medium = "medium", e.Large = "large", e))(en || {}), Pn = /* @__PURE__ */ ((e) => (e.row = "row", e.column = "column", e))(Pn || {});
const su = ({
  options: e = [],
  value: t = ((p) => (p = e[0]) == null ? void 0 : p.value)(),
  onChange: n,
  disabled: r = !1,
  name: o,
  size: i = en.Medium,
  theme: c = Qt.Green,
  error: s = !1,
  variant: l = Pn.row,
  className: u = "",
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
        "RadioGroup-row": l === Pn.row,
        "RadioGroup-column": l === Pn.column,
        "RadioGroup-dark": c === Qt.Dark,
        "RadioGroup-green": c === Qt.Green,
        "RadioGroup-light": c === Qt.Light,
        [u || ""]: !!u
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
              "RadioGroup-button-error": s,
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
                    "Radio-input-large": i === en.Large,
                    "Radio-input-medium": i === en.Medium,
                    "Radio-input-small": i === en.Small
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
su.displayName = "RadioGroup";
var Ce = /* @__PURE__ */ ((e) => (e.DisplayOne = "display-1", e.DisplayTwo = "display-2", e.HeadingOne = "heading-1", e.HeadingTwo = "heading-2", e.HeadingTwoMedium = "heading-2-medium", e.HeadingThree = "heading-3", e.HeadingThreeMedium = "heading-3-medium", e.HeadingRegular = "heading-regular", e.HeadingSubtitle = "heading-subtitle", e.HeadingSubtitleMedium = "heading-subtitle-medium", e.HeadingSmall = "heading-small", e.BodyBig = "body-big", e.BodyNormal = "body-normal", e.BodySmall = "body-small", e.BodyParagraph = "body-paragraph", e.AllCaptions = "all-captions", e.Caption = "caption", e))(Ce || {});
const lu = $e.forwardRef((e, t) => {
  const c = e, { variant: n = Ce.BodyNormal, children: r, className: o } = c, i = ye(c, ["variant", "children", "className"]);
  return /* @__PURE__ */ O.jsx(
    "div",
    fe(z({}, i), {
      ref: t,
      className: J({
        Typography: !0,
        "Typography-display_1": n === Ce.DisplayOne,
        "Typography-display_2": n === Ce.DisplayTwo,
        "Typography-heading_1": n === Ce.HeadingOne,
        "Typography-heading_2": n === Ce.HeadingTwo,
        "Typography-heading_2-medium": n === Ce.HeadingTwoMedium,
        "Typography-heading_3": n === Ce.HeadingThree,
        "Typography-heading_3-medium": n === Ce.HeadingThreeMedium,
        "Typography-heading-regular": n === Ce.HeadingRegular,
        "Typography-heading-subtitle": n === Ce.HeadingSubtitle,
        "Typography-heading-subtitle-medium": n === Ce.HeadingSubtitleMedium,
        "Typography-heading-small": n === Ce.HeadingSmall,
        "Typography-body-big": n === Ce.BodyBig,
        "Typography-body-normal": n === Ce.BodyNormal,
        "Typography-body-small": n === Ce.BodySmall,
        "Typography-body-paragraph": n === Ce.BodyParagraph,
        "Typography-caption": n === Ce.Caption,
        "Typography-all-captions": n === Ce.AllCaptions,
        [o || ""]: !!o
      }),
      children: r
    })
  );
});
lu.displayName = "Typography";
export {
  Pi as Accordion,
  ut as BUTTON_COLOR,
  Ve as BUTTON_SIZE,
  bi as BUTTON_TYPE,
  Ge as BUTTON_VARIANT,
  yu as Breadcrumbs,
  wi as Button,
  xt as CHECKBOX_SIZE,
  Ne as CHECKBOX_THEME,
  Si as Checkbox,
  Pe as DROPDOWN_SIZE,
  Ct as DROPDOWN_TYPE,
  Ks as Dropdown,
  wt as INPUT_SIZE,
  Jt as INPUT_THEME,
  ft as INPUT_TYPE,
  $i as IconButton,
  Ei as Input,
  wu as Modal,
  On as PAGINATION_VARIANTS,
  Sn as PROGRESS_BAR_SIZE,
  xu as Pagination,
  Gs as Popover,
  bu as ProgressBar,
  en as RADIO_GROUP_SIZE,
  Qt as RADIO_GROUP_THEME,
  Pn as RADIO_GROUP_VARIANT,
  su as RadioGroup,
  Ke as SWITCH_SIZE,
  Zt as SWITCH_TAGS_SIZE,
  wn as SWITCH_TAGS_VARIANT,
  We as SWITCH_THEME,
  Cu as Slider,
  Oi as Switch,
  mu as SwitchTags,
  Cr as TABS_SIZE,
  bn as TAGS_SIZE,
  Ce as TYPOGRAPHY_VARIANT,
  pu as Tabs,
  vu as Tags,
  lu as Typography
};
