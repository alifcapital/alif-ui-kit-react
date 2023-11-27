import './index.css';
var ni = Object.defineProperty, ri = Object.defineProperties;
var oi = Object.getOwnPropertyDescriptors;
var sn = Object.getOwnPropertySymbols;
var Zr = Object.prototype.hasOwnProperty, Qr = Object.prototype.propertyIsEnumerable;
var Jr = (e, t, n) => t in e ? ni(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, G = (e, t) => {
  for (var n in t || (t = {}))
    Zr.call(t, n) && Jr(e, n, t[n]);
  if (sn)
    for (var n of sn(t))
      Qr.call(t, n) && Jr(e, n, t[n]);
  return e;
}, ve = (e, t) => ri(e, oi(t));
var we = (e, t) => {
  var n = {};
  for (var r in e)
    Zr.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && sn)
    for (var r of sn(e))
      t.indexOf(r) < 0 && Qr.call(e, r) && (n[r] = e[r]);
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
import ke, { useState as oe, useLayoutEffect as He, useEffect as fe, useMemo as vt, useRef as ye, useCallback as ft, createContext as mr, createElement as me, useContext as Bo, forwardRef as je, Children as St, isValidElement as Xt, cloneElement as Rr, Fragment as Wo, useReducer as ai, PureComponent as ii } from "react";
import * as ci from "react-dom";
import { flushSync as Uo } from "react-dom";
function si(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var hr = { exports: {} }, zt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var eo;
function ui() {
  if (eo)
    return zt;
  eo = 1;
  var e = ke, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
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
var to;
function li() {
  return to || (to = 1, process.env.NODE_ENV !== "production" && function() {
    var e = ke, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), s = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), g = Symbol.iterator, y = "@@iterator";
    function b(o) {
      if (o === null || typeof o != "object")
        return null;
      var m = g && o[g] || o[y];
      return typeof m == "function" ? m : null;
    }
    var E = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(o) {
      {
        for (var m = arguments.length, x = new Array(m > 1 ? m - 1 : 0), $ = 1; $ < m; $++)
          x[$ - 1] = arguments[$];
        O("error", o, x);
      }
    }
    function O(o, m, x) {
      {
        var $ = E.ReactDebugCurrentFrame, F = $.getStackAddendum();
        F !== "" && (m += "%s", x = x.concat([F]));
        var W = x.map(function(j) {
          return String(j);
        });
        W.unshift("Warning: " + m), Function.prototype.apply.call(console[o], console, W);
      }
    }
    var S = !1, h = !1, C = !1, R = !1, L = !1, N;
    N = Symbol.for("react.module.reference");
    function ae(o) {
      return !!(typeof o == "string" || typeof o == "function" || o === r || o === i || L || o === a || o === l || o === d || R || o === p || S || h || C || typeof o == "object" && o !== null && (o.$$typeof === v || o.$$typeof === f || o.$$typeof === c || o.$$typeof === s || o.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      o.$$typeof === N || o.getModuleId !== void 0));
    }
    function ie(o, m, x) {
      var $ = o.displayName;
      if ($)
        return $;
      var F = m.displayName || m.name || "";
      return F !== "" ? x + "(" + F + ")" : x;
    }
    function re(o) {
      return o.displayName || "Context";
    }
    function Z(o) {
      if (o == null)
        return null;
      if (typeof o.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof o == "function")
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
            var x = o;
            return re(x._context) + ".Provider";
          case u:
            return ie(o, o.render, "ForwardRef");
          case f:
            var $ = o.displayName || null;
            return $ !== null ? $ : Z(o.type) || "Memo";
          case v: {
            var F = o, W = F._payload, j = F._init;
            try {
              return Z(j(W));
            } catch (A) {
              return null;
            }
          }
        }
      return null;
    }
    var B = Object.assign, te = 0, Y, ne, ce, ge, P, k, K;
    function z() {
    }
    z.__reactDisabledLog = !0;
    function V() {
      {
        if (te === 0) {
          Y = console.log, ne = console.info, ce = console.warn, ge = console.error, P = console.group, k = console.groupCollapsed, K = console.groupEnd;
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
        te++;
      }
    }
    function X() {
      {
        if (te--, te === 0) {
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
              value: ne
            }),
            warn: B({}, o, {
              value: ce
            }),
            error: B({}, o, {
              value: ge
            }),
            group: B({}, o, {
              value: P
            }),
            groupCollapsed: B({}, o, {
              value: k
            }),
            groupEnd: B({}, o, {
              value: K
            })
          });
        }
        te < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var M = E.ReactCurrentDispatcher, I;
    function U(o, m, x) {
      {
        if (I === void 0)
          try {
            throw Error();
          } catch (F) {
            var $ = F.stack.trim().match(/\n( *(at )?)/);
            I = $ && $[1] || "";
          }
        return `
` + I + o;
      }
    }
    var q = !1, H;
    {
      var he = typeof WeakMap == "function" ? WeakMap : Map;
      H = new he();
    }
    function _(o, m) {
      if (!o || q)
        return "";
      {
        var x = H.get(o);
        if (x !== void 0)
          return x;
      }
      var $;
      q = !0;
      var F = Error.prepareStackTrace;
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
              $ = be;
            }
            Reflect.construct(o, [], j);
          } else {
            try {
              j.call();
            } catch (be) {
              $ = be;
            }
            o.call(j.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (be) {
            $ = be;
          }
          o();
        }
      } catch (be) {
        if (be && $ && typeof be.stack == "string") {
          for (var A = be.stack.split(`
`), se = $.stack.split(`
`), J = A.length - 1, Q = se.length - 1; J >= 1 && Q >= 0 && A[J] !== se[Q]; )
            Q--;
          for (; J >= 1 && Q >= 0; J--, Q--)
            if (A[J] !== se[Q]) {
              if (J !== 1 || Q !== 1)
                do
                  if (J--, Q--, Q < 0 || A[J] !== se[Q]) {
                    var pe = `
` + A[J].replace(" at new ", " at ");
                    return o.displayName && pe.includes("<anonymous>") && (pe = pe.replace("<anonymous>", o.displayName)), typeof o == "function" && H.set(o, pe), pe;
                  }
                while (J >= 1 && Q >= 0);
              break;
            }
        }
      } finally {
        q = !1, M.current = W, X(), Error.prepareStackTrace = F;
      }
      var $e = o ? o.displayName || o.name : "", Yt = $e ? U($e) : "";
      return typeof o == "function" && H.set(o, Yt), Yt;
    }
    function xe(o, m, x) {
      return _(o, !1);
    }
    function Me(o) {
      var m = o.prototype;
      return !!(m && m.isReactComponent);
    }
    function Se(o, m, x) {
      if (o == null)
        return "";
      if (typeof o == "function")
        return _(o, Me(o));
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
            return xe(o.render);
          case f:
            return Se(o.type, m, x);
          case v: {
            var $ = o, F = $._payload, W = $._init;
            try {
              return Se(W(F), m, x);
            } catch (j) {
            }
          }
        }
      return "";
    }
    var Oe = Object.prototype.hasOwnProperty, Ze = {}, ot = E.ReactDebugCurrentFrame;
    function Le(o) {
      if (o) {
        var m = o._owner, x = Se(o.type, o._source, m ? m.type : null);
        ot.setExtraStackFrame(x);
      } else
        ot.setExtraStackFrame(null);
    }
    function At(o, m, x, $, F) {
      {
        var W = Function.call.bind(Oe);
        for (var j in o)
          if (W(o, j)) {
            var A = void 0;
            try {
              if (typeof o[j] != "function") {
                var se = Error(($ || "React class") + ": " + x + " type `" + j + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[j] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw se.name = "Invariant Violation", se;
              }
              A = o[j](m, j, $, x, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (J) {
              A = J;
            }
            A && !(A instanceof Error) && (Le(F), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", $ || "React class", x, j, typeof A), Le(null)), A instanceof Error && !(A.message in Ze) && (Ze[A.message] = !0, Le(F), w("Failed %s type: %s", x, A.message), Le(null));
          }
      }
    }
    var Dt = Array.isArray;
    function _e(o) {
      return Dt(o);
    }
    function jn(o) {
      {
        var m = typeof Symbol == "function" && Symbol.toStringTag, x = m && o[Symbol.toStringTag] || o.constructor.name || "Object";
        return x;
      }
    }
    function Ln(o) {
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
      if (Ln(o))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", jn(o)), Nt(o);
    }
    var Ie = E.ReactCurrentOwner, In = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Lt, It, at;
    at = {};
    function Fn(o) {
      if (Oe.call(o, "ref")) {
        var m = Object.getOwnPropertyDescriptor(o, "ref").get;
        if (m && m.isReactWarning)
          return !1;
      }
      return o.ref !== void 0;
    }
    function Mn(o) {
      if (Oe.call(o, "key")) {
        var m = Object.getOwnPropertyDescriptor(o, "key").get;
        if (m && m.isReactWarning)
          return !1;
      }
      return o.key !== void 0;
    }
    function Bn(o, m) {
      if (typeof o.ref == "string" && Ie.current && m && Ie.current.stateNode !== m) {
        var x = Z(Ie.current.type);
        at[x] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Z(Ie.current.type), o.ref), at[x] = !0);
      }
    }
    function Wn(o, m) {
      {
        var x = function() {
          Lt || (Lt = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", m));
        };
        x.isReactWarning = !0, Object.defineProperty(o, "key", {
          get: x,
          configurable: !0
        });
      }
    }
    function Un(o, m) {
      {
        var x = function() {
          It || (It = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", m));
        };
        x.isReactWarning = !0, Object.defineProperty(o, "ref", {
          get: x,
          configurable: !0
        });
      }
    }
    var Vn = function(o, m, x, $, F, W, j) {
      var A = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: o,
        key: m,
        ref: x,
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
        value: $
      }), Object.defineProperty(A, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: F
      }), Object.freeze && (Object.freeze(A.props), Object.freeze(A)), A;
    };
    function Yn(o, m, x, $, F) {
      {
        var W, j = {}, A = null, se = null;
        x !== void 0 && (jt(x), A = "" + x), Mn(m) && (jt(m.key), A = "" + m.key), Fn(m) && (se = m.ref, Bn(m, F));
        for (W in m)
          Oe.call(m, W) && !In.hasOwnProperty(W) && (j[W] = m[W]);
        if (o && o.defaultProps) {
          var J = o.defaultProps;
          for (W in J)
            j[W] === void 0 && (j[W] = J[W]);
        }
        if (A || se) {
          var Q = typeof o == "function" ? o.displayName || o.name || "Unknown" : o;
          A && Wn(j, Q), se && Un(j, Q);
        }
        return Vn(o, A, se, F, $, Ie.current, j);
      }
    }
    var it = E.ReactCurrentOwner, Ft = E.ReactDebugCurrentFrame;
    function Te(o) {
      if (o) {
        var m = o._owner, x = Se(o.type, o._source, m ? m.type : null);
        Ft.setExtraStackFrame(x);
      } else
        Ft.setExtraStackFrame(null);
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
    function zn(o) {
      {
        if (o !== void 0) {
          var m = o.fileName.replace(/^.*[\\\/]/, ""), x = o.lineNumber;
          return `

Check your code at ` + m + ":" + x + ".";
        }
        return "";
      }
    }
    var Bt = {};
    function qn(o) {
      {
        var m = Mt();
        if (!m) {
          var x = typeof o == "string" ? o : o.displayName || o.name;
          x && (m = `

Check the top-level render call using <` + x + ">.");
        }
        return m;
      }
    }
    function Wt(o, m) {
      {
        if (!o._store || o._store.validated || o.key != null)
          return;
        o._store.validated = !0;
        var x = qn(m);
        if (Bt[x])
          return;
        Bt[x] = !0;
        var $ = "";
        o && o._owner && o._owner !== it.current && ($ = " It was passed a child from " + Z(o._owner.type) + "."), Te(o), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', x, $), Te(null);
      }
    }
    function Ut(o, m) {
      {
        if (typeof o != "object")
          return;
        if (_e(o))
          for (var x = 0; x < o.length; x++) {
            var $ = o[x];
            st($) && Wt($, m);
          }
        else if (st(o))
          o._store && (o._store.validated = !0);
        else if (o) {
          var F = b(o);
          if (typeof F == "function" && F !== o.entries)
            for (var W = F.call(o), j; !(j = W.next()).done; )
              st(j.value) && Wt(j.value, m);
        }
      }
    }
    function Hn(o) {
      {
        var m = o.type;
        if (m == null || typeof m == "string")
          return;
        var x;
        if (typeof m == "function")
          x = m.propTypes;
        else if (typeof m == "object" && (m.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        m.$$typeof === f))
          x = m.propTypes;
        else
          return;
        if (x) {
          var $ = Z(m);
          At(x, o.props, "prop", $, o);
        } else if (m.PropTypes !== void 0 && !ct) {
          ct = !0;
          var F = Z(m);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", F || "Unknown");
        }
        typeof m.getDefaultProps == "function" && !m.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Gn(o) {
      {
        for (var m = Object.keys(o.props), x = 0; x < m.length; x++) {
          var $ = m[x];
          if ($ !== "children" && $ !== "key") {
            Te(o), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", $), Te(null);
            break;
          }
        }
        o.ref !== null && (Te(o), w("Invalid attribute `ref` supplied to `React.Fragment`."), Te(null));
      }
    }
    function Vt(o, m, x, $, F, W) {
      {
        var j = ae(o);
        if (!j) {
          var A = "";
          (o === void 0 || typeof o == "object" && o !== null && Object.keys(o).length === 0) && (A += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var se = zn(F);
          se ? A += se : A += Mt();
          var J;
          o === null ? J = "null" : _e(o) ? J = "array" : o !== void 0 && o.$$typeof === t ? (J = "<" + (Z(o.type) || "Unknown") + " />", A = " Did you accidentally export a JSX literal instead of a component?") : J = typeof o, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", J, A);
        }
        var Q = Yn(o, m, x, F, W);
        if (Q == null)
          return Q;
        if (j) {
          var pe = m.children;
          if (pe !== void 0)
            if ($)
              if (_e(pe)) {
                for (var $e = 0; $e < pe.length; $e++)
                  Ut(pe[$e], o);
                Object.freeze && Object.freeze(pe);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ut(pe, o);
        }
        return o === r ? Gn(Q) : Hn(Q), Q;
      }
    }
    function Kn(o, m, x) {
      return Vt(o, m, x, !0);
    }
    function Xn(o, m, x) {
      return Vt(o, m, x, !1);
    }
    var Jn = Xn, Zn = Kn;
    qt.Fragment = r, qt.jsx = Jn, qt.jsxs = Zn;
  }()), qt;
}
process.env.NODE_ENV === "production" ? hr.exports = ui() : hr.exports = li();
var T = hr.exports;
function Vo(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = Vo(e[t])) && (r && (r += " "), r += n);
    else
      for (t in e)
        e[t] && (r && (r += " "), r += t);
  return r;
}
function ee() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = Vo(e)) && (r && (r += " "), r += t);
  return r;
}
var Ye = /* @__PURE__ */ ((e) => (e.Large = "large", e.Medium = "medium", e.Small = "small", e))(Ye || {}), ze = /* @__PURE__ */ ((e) => (e.Contained = "contained", e.Outlined = "outlined", e.Text = "text", e))(ze || {}), ut = /* @__PURE__ */ ((e) => (e.Primary = "primary", e.Secondary = "secondary", e.Green = "green", e))(ut || {}), fi = /* @__PURE__ */ ((e) => (e.Submit = "submit", e.Reset = "reset", e.Button = "button", e))(fi || {});
const di = ke.forwardRef((e, t) => {
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
    type: g = "button",
    onClick: y
  } = e, b = () => {
    y && y();
  };
  return /* @__PURE__ */ T.jsx(
    "button",
    {
      onClick: b,
      ref: t,
      type: g,
      "aria-label": r,
      id: n,
      disabled: c,
      className: ee({
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
di.displayName = "Button";
var gr = { exports: {} }, Ht = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var no;
function vi() {
  if (no)
    return Ht;
  no = 1;
  var e = ke, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
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
var un = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ro;
function pi() {
  return ro || (ro = 1, process.env.NODE_ENV !== "production" && function() {
    var e = ke, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), s = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), g = Symbol.iterator, y = "@@iterator";
    function b(o) {
      if (o === null || typeof o != "object")
        return null;
      var m = g && o[g] || o[y];
      return typeof m == "function" ? m : null;
    }
    var E = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(o) {
      {
        for (var m = arguments.length, x = new Array(m > 1 ? m - 1 : 0), $ = 1; $ < m; $++)
          x[$ - 1] = arguments[$];
        O("error", o, x);
      }
    }
    function O(o, m, x) {
      {
        var $ = E.ReactDebugCurrentFrame, F = $.getStackAddendum();
        F !== "" && (m += "%s", x = x.concat([F]));
        var W = x.map(function(j) {
          return String(j);
        });
        W.unshift("Warning: " + m), Function.prototype.apply.call(console[o], console, W);
      }
    }
    var S = !1, h = !1, C = !1, R = !1, L = !1, N;
    N = Symbol.for("react.module.reference");
    function ae(o) {
      return !!(typeof o == "string" || typeof o == "function" || o === r || o === i || L || o === a || o === l || o === d || R || o === p || S || h || C || typeof o == "object" && o !== null && (o.$$typeof === v || o.$$typeof === f || o.$$typeof === c || o.$$typeof === s || o.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      o.$$typeof === N || o.getModuleId !== void 0));
    }
    function ie(o, m, x) {
      var $ = o.displayName;
      if ($)
        return $;
      var F = m.displayName || m.name || "";
      return F !== "" ? x + "(" + F + ")" : x;
    }
    function re(o) {
      return o.displayName || "Context";
    }
    function Z(o) {
      if (o == null)
        return null;
      if (typeof o.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof o == "function")
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
            var x = o;
            return re(x._context) + ".Provider";
          case u:
            return ie(o, o.render, "ForwardRef");
          case f:
            var $ = o.displayName || null;
            return $ !== null ? $ : Z(o.type) || "Memo";
          case v: {
            var F = o, W = F._payload, j = F._init;
            try {
              return Z(j(W));
            } catch (A) {
              return null;
            }
          }
        }
      return null;
    }
    var B = Object.assign, te = 0, Y, ne, ce, ge, P, k, K;
    function z() {
    }
    z.__reactDisabledLog = !0;
    function V() {
      {
        if (te === 0) {
          Y = console.log, ne = console.info, ce = console.warn, ge = console.error, P = console.group, k = console.groupCollapsed, K = console.groupEnd;
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
        te++;
      }
    }
    function X() {
      {
        if (te--, te === 0) {
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
              value: ne
            }),
            warn: B({}, o, {
              value: ce
            }),
            error: B({}, o, {
              value: ge
            }),
            group: B({}, o, {
              value: P
            }),
            groupCollapsed: B({}, o, {
              value: k
            }),
            groupEnd: B({}, o, {
              value: K
            })
          });
        }
        te < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var M = E.ReactCurrentDispatcher, I;
    function U(o, m, x) {
      {
        if (I === void 0)
          try {
            throw Error();
          } catch (F) {
            var $ = F.stack.trim().match(/\n( *(at )?)/);
            I = $ && $[1] || "";
          }
        return `
` + I + o;
      }
    }
    var q = !1, H;
    {
      var he = typeof WeakMap == "function" ? WeakMap : Map;
      H = new he();
    }
    function _(o, m) {
      if (!o || q)
        return "";
      {
        var x = H.get(o);
        if (x !== void 0)
          return x;
      }
      var $;
      q = !0;
      var F = Error.prepareStackTrace;
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
              $ = be;
            }
            Reflect.construct(o, [], j);
          } else {
            try {
              j.call();
            } catch (be) {
              $ = be;
            }
            o.call(j.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (be) {
            $ = be;
          }
          o();
        }
      } catch (be) {
        if (be && $ && typeof be.stack == "string") {
          for (var A = be.stack.split(`
`), se = $.stack.split(`
`), J = A.length - 1, Q = se.length - 1; J >= 1 && Q >= 0 && A[J] !== se[Q]; )
            Q--;
          for (; J >= 1 && Q >= 0; J--, Q--)
            if (A[J] !== se[Q]) {
              if (J !== 1 || Q !== 1)
                do
                  if (J--, Q--, Q < 0 || A[J] !== se[Q]) {
                    var pe = `
` + A[J].replace(" at new ", " at ");
                    return o.displayName && pe.includes("<anonymous>") && (pe = pe.replace("<anonymous>", o.displayName)), typeof o == "function" && H.set(o, pe), pe;
                  }
                while (J >= 1 && Q >= 0);
              break;
            }
        }
      } finally {
        q = !1, M.current = W, X(), Error.prepareStackTrace = F;
      }
      var $e = o ? o.displayName || o.name : "", Yt = $e ? U($e) : "";
      return typeof o == "function" && H.set(o, Yt), Yt;
    }
    function xe(o, m, x) {
      return _(o, !1);
    }
    function Me(o) {
      var m = o.prototype;
      return !!(m && m.isReactComponent);
    }
    function Se(o, m, x) {
      if (o == null)
        return "";
      if (typeof o == "function")
        return _(o, Me(o));
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
            return xe(o.render);
          case f:
            return Se(o.type, m, x);
          case v: {
            var $ = o, F = $._payload, W = $._init;
            try {
              return Se(W(F), m, x);
            } catch (j) {
            }
          }
        }
      return "";
    }
    var Oe = Object.prototype.hasOwnProperty, Ze = {}, ot = E.ReactDebugCurrentFrame;
    function Le(o) {
      if (o) {
        var m = o._owner, x = Se(o.type, o._source, m ? m.type : null);
        ot.setExtraStackFrame(x);
      } else
        ot.setExtraStackFrame(null);
    }
    function At(o, m, x, $, F) {
      {
        var W = Function.call.bind(Oe);
        for (var j in o)
          if (W(o, j)) {
            var A = void 0;
            try {
              if (typeof o[j] != "function") {
                var se = Error(($ || "React class") + ": " + x + " type `" + j + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[j] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw se.name = "Invariant Violation", se;
              }
              A = o[j](m, j, $, x, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (J) {
              A = J;
            }
            A && !(A instanceof Error) && (Le(F), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", $ || "React class", x, j, typeof A), Le(null)), A instanceof Error && !(A.message in Ze) && (Ze[A.message] = !0, Le(F), w("Failed %s type: %s", x, A.message), Le(null));
          }
      }
    }
    var Dt = Array.isArray;
    function _e(o) {
      return Dt(o);
    }
    function jn(o) {
      {
        var m = typeof Symbol == "function" && Symbol.toStringTag, x = m && o[Symbol.toStringTag] || o.constructor.name || "Object";
        return x;
      }
    }
    function Ln(o) {
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
      if (Ln(o))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", jn(o)), Nt(o);
    }
    var Ie = E.ReactCurrentOwner, In = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Lt, It, at;
    at = {};
    function Fn(o) {
      if (Oe.call(o, "ref")) {
        var m = Object.getOwnPropertyDescriptor(o, "ref").get;
        if (m && m.isReactWarning)
          return !1;
      }
      return o.ref !== void 0;
    }
    function Mn(o) {
      if (Oe.call(o, "key")) {
        var m = Object.getOwnPropertyDescriptor(o, "key").get;
        if (m && m.isReactWarning)
          return !1;
      }
      return o.key !== void 0;
    }
    function Bn(o, m) {
      if (typeof o.ref == "string" && Ie.current && m && Ie.current.stateNode !== m) {
        var x = Z(Ie.current.type);
        at[x] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Z(Ie.current.type), o.ref), at[x] = !0);
      }
    }
    function Wn(o, m) {
      {
        var x = function() {
          Lt || (Lt = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", m));
        };
        x.isReactWarning = !0, Object.defineProperty(o, "key", {
          get: x,
          configurable: !0
        });
      }
    }
    function Un(o, m) {
      {
        var x = function() {
          It || (It = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", m));
        };
        x.isReactWarning = !0, Object.defineProperty(o, "ref", {
          get: x,
          configurable: !0
        });
      }
    }
    var Vn = function(o, m, x, $, F, W, j) {
      var A = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: o,
        key: m,
        ref: x,
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
        value: $
      }), Object.defineProperty(A, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: F
      }), Object.freeze && (Object.freeze(A.props), Object.freeze(A)), A;
    };
    function Yn(o, m, x, $, F) {
      {
        var W, j = {}, A = null, se = null;
        x !== void 0 && (jt(x), A = "" + x), Mn(m) && (jt(m.key), A = "" + m.key), Fn(m) && (se = m.ref, Bn(m, F));
        for (W in m)
          Oe.call(m, W) && !In.hasOwnProperty(W) && (j[W] = m[W]);
        if (o && o.defaultProps) {
          var J = o.defaultProps;
          for (W in J)
            j[W] === void 0 && (j[W] = J[W]);
        }
        if (A || se) {
          var Q = typeof o == "function" ? o.displayName || o.name || "Unknown" : o;
          A && Wn(j, Q), se && Un(j, Q);
        }
        return Vn(o, A, se, F, $, Ie.current, j);
      }
    }
    var it = E.ReactCurrentOwner, Ft = E.ReactDebugCurrentFrame;
    function Te(o) {
      if (o) {
        var m = o._owner, x = Se(o.type, o._source, m ? m.type : null);
        Ft.setExtraStackFrame(x);
      } else
        Ft.setExtraStackFrame(null);
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
    function zn(o) {
      {
        if (o !== void 0) {
          var m = o.fileName.replace(/^.*[\\\/]/, ""), x = o.lineNumber;
          return `

Check your code at ` + m + ":" + x + ".";
        }
        return "";
      }
    }
    var Bt = {};
    function qn(o) {
      {
        var m = Mt();
        if (!m) {
          var x = typeof o == "string" ? o : o.displayName || o.name;
          x && (m = `

Check the top-level render call using <` + x + ">.");
        }
        return m;
      }
    }
    function Wt(o, m) {
      {
        if (!o._store || o._store.validated || o.key != null)
          return;
        o._store.validated = !0;
        var x = qn(m);
        if (Bt[x])
          return;
        Bt[x] = !0;
        var $ = "";
        o && o._owner && o._owner !== it.current && ($ = " It was passed a child from " + Z(o._owner.type) + "."), Te(o), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', x, $), Te(null);
      }
    }
    function Ut(o, m) {
      {
        if (typeof o != "object")
          return;
        if (_e(o))
          for (var x = 0; x < o.length; x++) {
            var $ = o[x];
            st($) && Wt($, m);
          }
        else if (st(o))
          o._store && (o._store.validated = !0);
        else if (o) {
          var F = b(o);
          if (typeof F == "function" && F !== o.entries)
            for (var W = F.call(o), j; !(j = W.next()).done; )
              st(j.value) && Wt(j.value, m);
        }
      }
    }
    function Hn(o) {
      {
        var m = o.type;
        if (m == null || typeof m == "string")
          return;
        var x;
        if (typeof m == "function")
          x = m.propTypes;
        else if (typeof m == "object" && (m.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        m.$$typeof === f))
          x = m.propTypes;
        else
          return;
        if (x) {
          var $ = Z(m);
          At(x, o.props, "prop", $, o);
        } else if (m.PropTypes !== void 0 && !ct) {
          ct = !0;
          var F = Z(m);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", F || "Unknown");
        }
        typeof m.getDefaultProps == "function" && !m.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Gn(o) {
      {
        for (var m = Object.keys(o.props), x = 0; x < m.length; x++) {
          var $ = m[x];
          if ($ !== "children" && $ !== "key") {
            Te(o), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", $), Te(null);
            break;
          }
        }
        o.ref !== null && (Te(o), w("Invalid attribute `ref` supplied to `React.Fragment`."), Te(null));
      }
    }
    function Vt(o, m, x, $, F, W) {
      {
        var j = ae(o);
        if (!j) {
          var A = "";
          (o === void 0 || typeof o == "object" && o !== null && Object.keys(o).length === 0) && (A += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var se = zn(F);
          se ? A += se : A += Mt();
          var J;
          o === null ? J = "null" : _e(o) ? J = "array" : o !== void 0 && o.$$typeof === t ? (J = "<" + (Z(o.type) || "Unknown") + " />", A = " Did you accidentally export a JSX literal instead of a component?") : J = typeof o, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", J, A);
        }
        var Q = Yn(o, m, x, F, W);
        if (Q == null)
          return Q;
        if (j) {
          var pe = m.children;
          if (pe !== void 0)
            if ($)
              if (_e(pe)) {
                for (var $e = 0; $e < pe.length; $e++)
                  Ut(pe[$e], o);
                Object.freeze && Object.freeze(pe);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ut(pe, o);
        }
        return o === r ? Gn(Q) : Hn(Q), Q;
      }
    }
    function Kn(o, m, x) {
      return Vt(o, m, x, !0);
    }
    function Xn(o, m, x) {
      return Vt(o, m, x, !1);
    }
    var Jn = Xn, Zn = Kn;
    un.Fragment = r, un.jsx = Jn, un.jsxs = Zn;
  }()), un;
}
process.env.NODE_ENV === "production" ? gr.exports = vi() : gr.exports = pi();
var De = gr.exports;
const Yo = ({
  width: e = "25",
  height: t = "25",
  color: n = "currentColor"
}) => /* @__PURE__ */ De.jsx(
  "svg",
  {
    width: e,
    height: t,
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ De.jsx(
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
const kr = ({
  width: e = "25",
  height: t = "25",
  color: n = "currentColor"
}) => /* @__PURE__ */ De.jsx(
  "svg",
  {
    width: e,
    height: t,
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ De.jsx(
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
kr.displayName = "RightNext";
const _r = ({
  width: e = "25",
  height: t = "25",
  color: n = "currentColor"
}) => /* @__PURE__ */ De.jsx(
  "svg",
  {
    width: e,
    height: t,
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ De.jsx(
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
const zo = ({ width: e = "25", height: t = "25", color: n = "currentColor" }) => /* @__PURE__ */ De.jsx(
  "svg",
  {
    width: e,
    height: t,
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ De.jsx(
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
zo.displayName = "EyeOff";
const qo = ({ width: e = "25", height: t = "25", color: n = "currentColor" }) => /* @__PURE__ */ De.jsx(
  "svg",
  {
    width: e,
    height: t,
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ De.jsx(
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
qo.displayName = "EyeOn";
const Ar = ({ width: e = "25", height: t = "25", color: n = "currentColor" }) => /* @__PURE__ */ De.jsx(
  "svg",
  {
    width: e,
    height: t,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ De.jsx(
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
Ar.displayName = "Check";
var lt = /* @__PURE__ */ ((e) => (e.Text = "text", e.Number = "number", e.Password = "password", e.Telephone = "tel", e.Email = "email", e))(lt || {}), bt = /* @__PURE__ */ ((e) => (e.Small = "small", e.Medium = "medium", e))(bt || {}), Gt = /* @__PURE__ */ ((e) => (e.Light = "light", e.Dark = "dark", e))(Gt || {});
const mi = ke.forwardRef((e, t) => {
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
    type: g,
    name: y,
    ariaLabel: b,
    autoComplete: E,
    size: w = bt.Medium,
    theme: O = Gt.Light,
    onBlur: S,
    onChange: h,
    onFocus: C,
    onKeyDown: R,
    onKeyUp: L,
    requiredSymbol: N
  } = M, ae = we(M, [
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
  ]), [ie, re] = oe(""), [Z, B] = oe(!1), [te, Y] = oe(g), [ne, ce] = ke.useState(!1), ge = (I) => {
    re(I.target.value), h && h(I);
  }, P = (I) => {
    S && S(I);
  }, k = (I) => {
    C && C(I);
  }, K = (I) => {
    R && R(I);
  }, z = (I) => {
    L && L(I);
  }, V = () => {
    ce((I) => !I);
  }, X = (I) => {
    I.animationName === "onAutoFillStart" && B(!0);
  };
  return He(() => {
    (a || r) && re(" ");
  }, [a, r]), fe(() => {
    g === lt.Password && Y(ne ? lt.Text : lt.Password);
  }, [ne, g]), fe(() => {
    ie.length === 0 && B(!1);
  }, [ie]), /* @__PURE__ */ T.jsxs(
    "div",
    {
      className: ee({
        Input: !0,
        "Input-without-heading ": !!p,
        [i || ""]: !!i
      }),
      children: [
        p && /* @__PURE__ */ T.jsxs(
          "label",
          {
            className: ee({
              InputLabel: !0,
              "InputLabel-small": w === bt.Small
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
            className: ee({
              "InputBase-root": !0,
              "Input-disabled": c,
              "InputBase-error": !!l,
              "InputBase-root-dark": O === Gt.Dark
            }),
            children: [
              g !== lt.Password && u && /* @__PURE__ */ T.jsx("div", { className: "InputBase-icon-start", children: u }),
              /* @__PURE__ */ T.jsxs(
                "div",
                {
                  className: ee({
                    InputBaseInner: !0
                  }),
                  children: [
                    !p && /* @__PURE__ */ T.jsx(
                      "label",
                      {
                        style: {
                          zIndex: Z ? 1 : 0
                        },
                        className: ee({
                          InputLabel: !0,
                          "InputLabel-medium-align-center": w === bt.Medium,
                          "InputLabel-small-align-center": w === bt.Small,
                          "InputLabel-position-fixed": ie.length > 0 || Z
                        }),
                        htmlFor: n,
                        children: v
                      }
                    ),
                    /* @__PURE__ */ T.jsx(
                      "input",
                      G({
                        defaultValue: !r && a ? a : void 0,
                        "aria-label": b,
                        autoComplete: E,
                        className: ee({
                          "InputBase-input": !0,
                          "InputBase-input-dark": O === Gt.Dark,
                          "InputBase-input-small": w === bt.Small,
                          "InputBase-autofill-font": Z
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
                        onKeyDown: K,
                        onKeyUp: z,
                        placeholder: p ? v : "",
                        ref: t
                      }, ae)
                    )
                  ]
                }
              ),
              g !== lt.Password && s && /* @__PURE__ */ T.jsx("div", { className: "InputBase-icon-end", children: s }),
              g === lt.Password && /* @__PURE__ */ T.jsx(
                "button",
                {
                  type: "button",
                  "aria-label": "toggle password visibility",
                  className: "InputBase-icon-end",
                  onClick: V,
                  children: ne ? /* @__PURE__ */ T.jsx(qo, {}) : /* @__PURE__ */ T.jsx(zo, {})
                }
              )
            ]
          }
        ),
        f && /* @__PURE__ */ T.jsx(
          "p",
          {
            className: ee({
              "Input-helper-text": !0,
              "Input-hint-text": !!d,
              "Input-error-text": !!l,
              "Input-helper-text-dark": !l && O === Gt.Dark
            }),
            children: f
          }
        )
      ]
    }
  );
});
mi.displayName = "Input";
var Ae = /* @__PURE__ */ ((e) => (e.Light = "light", e.Dark = "dark", e.Green = "green", e))(Ae || {}), wt = /* @__PURE__ */ ((e) => (e.Small = "small", e.Medium = "medium", e.Large = "large", e))(wt || {});
const hi = ke.forwardRef((e, t) => {
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
  } = e, [g, y] = oe(!1), [b, E] = oe(!1), [w, O] = oe(a), S = (C) => {
    w || (y(!g), l && l(!g, C));
  }, h = (C) => {
    if ((C.key === "Enter" || C.key === " ") && !w) {
      const R = {
        target: {
          ariaLabel: d,
          name: r
        }
      };
      y(!g), l && l(!g, R);
    }
  };
  return fe(() => {
    O(a);
  }, [a]), fe(() => {
    y(typeof c == "boolean" ? c : !1);
  }, [c]), fe(() => {
    E(!!f);
  }, [f]), /* @__PURE__ */ T.jsx("div", { className: "Checkbox", children: /* @__PURE__ */ T.jsxs("label", { children: [
    /* @__PURE__ */ T.jsx(
      "div",
      {
        className: ee({
          "Checkbox-checked": g,
          "Checkbox-dark-checked": g && v === Ae.Dark,
          "Checkbox-green-checked": g && v === Ae.Green,
          "Checkbox-unchecked": !g,
          "Checkbox-error": b,
          "Checkbox-disabled": w,
          "Checkbox-green-disabled": w && v === Ae.Green,
          "Checkbox-dark-disabled": w && v === Ae.Dark,
          "Checkbox-dark": v === Ae.Dark,
          "Checkbox-green": v === Ae.Green,
          [u || ""]: !!u
        }),
        children: /* @__PURE__ */ T.jsxs(
          "div",
          {
            className: ee({
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
                  onChange: S,
                  "aria-label": d,
                  tabIndex: -1,
                  disabled: w
                }
              ),
              g && !w && /* @__PURE__ */ T.jsx(Ar, {})
            ]
          }
        )
      }
    ),
    (s || i) && /* @__PURE__ */ T.jsx(
      "div",
      {
        className: ee({
          "Checkbox-label": !0,
          "Checkbox-label-small": p === wt.Small,
          "Checkbox-label-dark": v === Ae.Dark,
          "Checkbox-label-green": v === Ae.Green,
          "Checkbox-label-disabled": w,
          "Checkbox-label-dark-disabled": w && v === Ae.Dark,
          "Checkbox-label-green-disabled": w && v === Ae.Green
        }),
        children: s || i
      }
    )
  ] }) });
});
hi.displayName = "Checkbox";
var Be = /* @__PURE__ */ ((e) => (e.Light = "light", e.Dark = "dark", e.Green = "green", e))(Be || {}), qe = /* @__PURE__ */ ((e) => (e.Small = "small", e.Medium = "medium", e.Large = "large", e))(qe || {});
const gi = ke.forwardRef((e, t) => {
  const {
    id: n,
    name: r,
    className: a,
    checked: i,
    disabled: c,
    ariaLabel: s,
    label: u,
    theme: l = Be.Light,
    size: d = qe.Medium,
    onChange: f
  } = e, [v, p] = oe(!1), [g, y] = oe(c), b = (w) => {
    g || (p(!v), f && f(!v, w));
  }, E = (w) => {
    if ((w.key === "Enter" || w.key === " ") && !g) {
      const O = {
        target: {
          ariaLabel: s,
          name: r
        }
      };
      p(!v), f && f(!v, O);
    }
  };
  return fe(() => {
    y(c);
  }, [c]), fe(() => {
    p(typeof i == "boolean" ? i : !1);
  }, [i]), /* @__PURE__ */ T.jsx("div", { className: "Switch", children: /* @__PURE__ */ T.jsxs("label", { children: [
    /* @__PURE__ */ T.jsxs(
      "div",
      {
        className: ee({
          "Switch-light": l === Be.Light,
          "Switch-dark": l === Be.Dark,
          "Switch-green": l === Be.Green,
          "Switch-large": d === qe.Large,
          "Switch-medium": d === qe.Medium,
          "Switch-small": d === qe.Small,
          "Switch-light-active": v && l === Be.Light,
          "Switch-dark-active": v && l === Be.Dark,
          "Switch-green-active": v && l === Be.Green,
          "Switch-large-active": v && d === qe.Large,
          "Switch-medium-active": v && d === qe.Medium,
          "Switch-small-active": v && d === qe.Small,
          "Switch-disabled": g,
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
              className: ee({
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
        className: ee({
          "Switch-label": !0,
          "Switch-label-small": d === qe.Small,
          "Switch-label-dark": l === Be.Dark,
          "Switch-label-green": l === Be.Green
        }),
        children: u
      }
    )
  ] }) });
});
gi.displayName = "Switch";
var yr = /* @__PURE__ */ ((e) => (e.Large = "large", e.Small = "small", e))(yr || {});
const el = (e) => {
  var h;
  const {
    className: t,
    size: n = yr.Large,
    tabs: r,
    gap: a,
    activeTab: i,
    activeColor: c,
    tabMarginBottom: s = 16
  } = e, [u, l] = oe((h = r[0]) == null ? void 0 : h.id), [d, f] = oe(6), [v, p] = oe(0), [g, y] = oe("none"), [b, E] = oe(0), w = vt(() => r.find((C) => C.id === u), [u, r]), O = ye(new Array(r.length)), S = (C, R, L) => {
    R !== u && (y("left 200ms linear, width 200ms linear"), f(C.currentTarget.offsetLeft), p(C.currentTarget.offsetWidth), l(R), L && L(R));
  };
  return He(() => {
    if (i) {
      const C = r.findIndex((R) => R.id === i);
      E(C), l(i);
    }
  }, [i, r]), He(() => {
    var L, N;
    const C = (L = O.current[b]) == null ? void 0 : L.offsetWidth, R = (N = O.current[b]) == null ? void 0 : N.offsetLeft;
    p(C), f(R);
  }, [b]), /* @__PURE__ */ T.jsxs("div", { className: "Tabs", children: [
    /* @__PURE__ */ T.jsxs(
      "div",
      {
        style: { gap: a },
        className: ee({
          "Tabs-base": !0,
          [t || ""]: !!t
        }),
        children: [
          r == null ? void 0 : r.map((C, R) => /* @__PURE__ */ T.jsx(
            "button",
            {
              ref: (L) => O.current[R] = L,
              "aria-label": C.label,
              disabled: C.disabled,
              className: ee({
                "Tab-root": !0,
                "Tab-root-active": u === C.id,
                "Tab-root-small": n === yr.Small
              }),
              onClick: (L) => S(L, C.id, C.onClick),
              children: /* @__PURE__ */ T.jsx(
                "div",
                {
                  style: { marginBottom: s },
                  className: ee({
                    "Tab-label": !0
                  }),
                  children: C.label
                }
              )
            },
            C.id
          )),
          /* @__PURE__ */ T.jsx(
            "div",
            {
              style: {
                left: d,
                width: v,
                transition: g,
                backgroundColor: c
              },
              className: "Tab-active-line"
            }
          )
        ]
      }
    ),
    w && w.content && /* @__PURE__ */ T.jsx("div", { className: "Tab-content", children: w.content })
  ] });
};
const yi = ke.forwardRef((e, t) => {
  const {
    className: n,
    color: r,
    ariaLabel: a,
    content: i,
    header: c,
    contentMarginTop: s = 0,
    isOpen: u,
    onChange: l
  } = e, [d, f] = oe(u), v = ye(null), p = (b, E) => {
    const w = b.scrollHeight;
    b.style.height = (E ? w : 0) + "px";
  }, g = () => {
    f(!d), l && l(!d), v.current && p(v.current, !d);
  }, y = (b) => {
    (b.key === "Enter" || b.key === " ") && (f(!d), l && l(!d), v.current && p(v.current, !d));
  };
  return He(() => {
    const b = typeof u == "boolean" ? u : !1;
    v.current && p(v.current, b), f(b);
  }, [u]), /* @__PURE__ */ T.jsxs(
    "div",
    {
      className: ee({
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
            onClick: g,
            onKeyDown: y,
            children: [
              /* @__PURE__ */ T.jsx("div", { style: { color: r }, className: "Accordion-heading-label", children: c }),
              /* @__PURE__ */ T.jsx(
                "div",
                {
                  className: ee({
                    "Accordion-heading-arrow": !0,
                    "Accordion-heading-arrow-up": d
                  }),
                  children: /* @__PURE__ */ T.jsx(_r, { width: "24", height: "24", color: r })
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
            className: ee({
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
yi.displayName = "Accordion";
var gn = /* @__PURE__ */ ((e) => (e.Large = "large", e.Medium = "medium", e))(gn || {});
const tl = (e) => {
  var f;
  const { className: t, size: n = gn.Medium, tags: r, gap: a, activeTag: i, activeColor: c } = e, [s, u] = oe((f = r[0]) == null ? void 0 : f.id), l = vt(() => r.find((v) => v.id === s), [s, r]), d = (v, p) => {
    u(v), p && p(v);
  };
  return He(() => {
    i && u(i);
  }, [i]), /* @__PURE__ */ T.jsxs("div", { className: "Tags", children: [
    /* @__PURE__ */ T.jsx(
      "div",
      {
        style: { gap: a },
        className: ee({
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
            className: ee({
              Tag: !0,
              "Tag-medium": n === gn.Medium,
              "Tag-large": n === gn.Large,
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
const nl = (e) => {
  var C;
  const {
    className: t,
    size: n = Kt.Medium,
    variant: r = yn.Round,
    tags: a,
    gap: i,
    activeTag: c,
    activeColor: s,
    backgroundColor: u
  } = e, [l, d] = oe((C = a[0]) == null ? void 0 : C.id), [f, v] = oe(6), [p, g] = oe(0), [y, b] = oe("none"), [E, w] = oe(0), O = vt(() => a.find((R) => R.id === l), [l, a]), S = ye(new Array(a.length)), h = (R, L, N) => {
    L !== l && (b("left 200ms linear, width 200ms linear"), v(R.currentTarget.offsetLeft), g(R.currentTarget.offsetWidth), d(L), N && N(L));
  };
  return He(() => {
    if (c) {
      const R = a.findIndex((L) => L.id === c);
      w(R), d(c);
    }
  }, [c, a]), He(() => {
    var N, ae;
    const R = (N = S.current[E]) == null ? void 0 : N.offsetWidth, L = (ae = S.current[E]) == null ? void 0 : ae.offsetLeft;
    g(R), v(L);
  }, [E]), /* @__PURE__ */ T.jsxs("div", { className: "SwitchTags", children: [
    /* @__PURE__ */ T.jsxs(
      "div",
      {
        style: { gap: i, backgroundColor: u },
        className: ee({
          "SwitchTags-base": !0,
          "SwitchTags-base-round": r === yn.Round,
          "SwitchTags-base-square": r === yn.Square,
          [t || ""]: !!t
        }),
        children: [
          a == null ? void 0 : a.map((R, L) => /* @__PURE__ */ T.jsxs(
            "button",
            {
              ref: (N) => S.current[L] = N,
              "aria-label": R.label,
              id: R.id,
              disabled: R.disabled,
              className: ee({
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
                transition: y,
                backgroundColor: s
              },
              className: ee({
                ActiveTab: !0,
                "ActiveTab-small": n === Kt.Medium
              })
            }
          )
        ]
      }
    ),
    O && O.content && /* @__PURE__ */ T.jsx("div", { className: "Tag-content", children: O.content })
  ] });
};
const bi = ke.forwardRef((e, t) => {
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
bi.displayName = "IconButton";
function Ee() {
  return Ee = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Ee.apply(this, arguments);
}
function dt(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(a) {
    if (e == null || e(a), n === !1 || !a.defaultPrevented)
      return t == null ? void 0 : t(a);
  };
}
function wi(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function Ho(...e) {
  return (t) => e.forEach(
    (n) => wi(n, t)
  );
}
function mt(...e) {
  return ft(Ho(...e), e);
}
function Go(e, t = []) {
  let n = [];
  function r(i, c) {
    const s = /* @__PURE__ */ mr(c), u = n.length;
    n = [
      ...n,
      c
    ];
    function l(f) {
      const E = f, { scope: v, children: p } = E, g = we(E, ["scope", "children"]), y = (v == null ? void 0 : v[e][u]) || s, b = vt(
        () => g,
        Object.values(g)
      );
      return /* @__PURE__ */ me(y.Provider, {
        value: b
      }, p);
    }
    function d(f, v) {
      const p = (v == null ? void 0 : v[e][u]) || s, g = Bo(p);
      if (g)
        return g;
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
    const i = n.map((c) => /* @__PURE__ */ mr(c));
    return function(s) {
      const u = (s == null ? void 0 : s[e]) || i;
      return vt(
        () => ({
          [`__scope${e}`]: ve(G({}, s), {
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
    xi(a, ...t)
  ];
}
function xi(...e) {
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
        return G(G({}, s), f);
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
const Dr = /* @__PURE__ */ je((e, t) => {
  const c = e, { children: n } = c, r = we(c, ["children"]), a = St.toArray(n), i = a.find(Si);
  if (i) {
    const s = i.props.children, u = a.map((l) => l === i ? St.count(s) > 1 ? St.only(null) : /* @__PURE__ */ Xt(s) ? s.props.children : null : l);
    return /* @__PURE__ */ me(br, Ee({}, r, {
      ref: t
    }), /* @__PURE__ */ Xt(s) ? /* @__PURE__ */ Rr(s, void 0, u) : null);
  }
  return /* @__PURE__ */ me(br, Ee({}, r, {
    ref: t
  }), n);
});
Dr.displayName = "Slot";
const br = /* @__PURE__ */ je((e, t) => {
  const a = e, { children: n } = a, r = we(a, ["children"]);
  return /* @__PURE__ */ Xt(n) ? /* @__PURE__ */ Rr(n, ve(G({}, Oi(r, n.props)), {
    ref: t ? Ho(t, n.ref) : n.ref
  })) : St.count(n) > 1 ? St.only(null) : null;
});
br.displayName = "SlotClone";
const Ei = ({ children: e }) => /* @__PURE__ */ me(Wo, null, e);
function Si(e) {
  return /* @__PURE__ */ Xt(e) && e.type === Ei;
}
function Oi(e, t) {
  const n = G({}, t);
  for (const r in t) {
    const a = e[r], i = t[r];
    /^on[A-Z]/.test(r) ? a && i ? n[r] = (...s) => {
      i(...s), a(...s);
    } : a && (n[r] = a) : r === "style" ? n[r] = G(G({}, a), i) : r === "className" && (n[r] = [
      a,
      i
    ].filter(Boolean).join(" "));
  }
  return G(G({}, e), n);
}
const Pi = [
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
], on = Pi.reduce((e, t) => {
  const n = /* @__PURE__ */ je((r, a) => {
    const u = r, { asChild: i } = u, c = we(u, ["asChild"]), s = i ? Dr : t;
    return fe(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ me(s, Ee({}, c, {
      ref: a
    }));
  });
  return n.displayName = `Primitive.${t}`, ve(G({}, e), {
    [t]: n
  });
}, {});
function Ti(e, t) {
  e && Uo(
    () => e.dispatchEvent(t)
  );
}
function et(e) {
  const t = ye(e);
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
function $i(e, t = globalThis == null ? void 0 : globalThis.document) {
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
const wr = "dismissableLayer.update", Ci = "dismissableLayer.pointerDownOutside", Ri = "dismissableLayer.focusOutside";
let oo;
const ki = /* @__PURE__ */ mr({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), _i = /* @__PURE__ */ je((e, t) => {
  var n;
  const L = e, { disableOutsidePointerEvents: r = !1, onEscapeKeyDown: a, onPointerDownOutside: i, onFocusOutside: c, onInteractOutside: s, onDismiss: u } = L, l = we(L, ["disableOutsidePointerEvents", "onEscapeKeyDown", "onPointerDownOutside", "onFocusOutside", "onInteractOutside", "onDismiss"]), d = Bo(ki), [f, v] = oe(null), p = (n = f == null ? void 0 : f.ownerDocument) !== null && n !== void 0 ? n : globalThis == null ? void 0 : globalThis.document, [, g] = oe({}), y = mt(
    t,
    (N) => v(N)
  ), b = Array.from(d.layers), [E] = [
    ...d.layersWithOutsidePointerEventsDisabled
  ].slice(-1), w = b.indexOf(E), O = f ? b.indexOf(f) : -1, S = d.layersWithOutsidePointerEventsDisabled.size > 0, h = O >= w, C = Ai((N) => {
    const ae = N.target, ie = [
      ...d.branches
    ].some(
      (re) => re.contains(ae)
    );
    !h || ie || (i == null || i(N), s == null || s(N), N.defaultPrevented || u == null || u());
  }, p), R = Di((N) => {
    const ae = N.target;
    [
      ...d.branches
    ].some(
      (re) => re.contains(ae)
    ) || (c == null || c(N), s == null || s(N), N.defaultPrevented || u == null || u());
  }, p);
  return $i((N) => {
    O === d.layers.size - 1 && (a == null || a(N), !N.defaultPrevented && u && (N.preventDefault(), u()));
  }, p), fe(() => {
    if (f)
      return r && (d.layersWithOutsidePointerEventsDisabled.size === 0 && (oo = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), d.layersWithOutsidePointerEventsDisabled.add(f)), d.layers.add(f), ao(), () => {
        r && d.layersWithOutsidePointerEventsDisabled.size === 1 && (p.body.style.pointerEvents = oo);
      };
  }, [
    f,
    p,
    r,
    d
  ]), fe(() => () => {
    f && (d.layers.delete(f), d.layersWithOutsidePointerEventsDisabled.delete(f), ao());
  }, [
    f,
    d
  ]), fe(() => {
    const N = () => g({});
    return document.addEventListener(wr, N), () => document.removeEventListener(wr, N);
  }, []), /* @__PURE__ */ me(on.div, Ee({}, l, {
    ref: y,
    style: G({
      pointerEvents: S ? h ? "auto" : "none" : void 0
    }, e.style),
    onFocusCapture: dt(e.onFocusCapture, R.onFocusCapture),
    onBlurCapture: dt(e.onBlurCapture, R.onBlurCapture),
    onPointerDownCapture: dt(e.onPointerDownCapture, C.onPointerDownCapture)
  }));
});
function Ai(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = et(e), r = ye(!1), a = ye(() => {
  });
  return fe(() => {
    const i = (s) => {
      if (s.target && !r.current) {
        let l = function() {
          Ko(Ci, n, u, {
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
function Di(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = et(e), r = ye(!1);
  return fe(() => {
    const a = (i) => {
      i.target && !r.current && Ko(Ri, n, {
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
function ao() {
  const e = new CustomEvent(wr);
  document.dispatchEvent(e);
}
function Ko(e, t, n, { discrete: r }) {
  const a = n.originalEvent.target, i = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && a.addEventListener(e, t, {
    once: !0
  }), r ? Ti(a, i) : a.dispatchEvent(i);
}
let Qn = 0;
function Ni() {
  fe(() => {
    var e, t;
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (e = n[0]) !== null && e !== void 0 ? e : io()), document.body.insertAdjacentElement("beforeend", (t = n[1]) !== null && t !== void 0 ? t : io()), Qn++, () => {
      Qn === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(
        (r) => r.remove()
      ), Qn--;
    };
  }, []);
}
function io() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
const er = "focusScope.autoFocusOnMount", tr = "focusScope.autoFocusOnUnmount", co = {
  bubbles: !1,
  cancelable: !0
}, ji = /* @__PURE__ */ je((e, t) => {
  const y = e, { loop: n = !1, trapped: r = !1, onMountAutoFocus: a, onUnmountAutoFocus: i } = y, c = we(y, ["loop", "trapped", "onMountAutoFocus", "onUnmountAutoFocus"]), [s, u] = oe(null), l = et(a), d = et(i), f = ye(null), v = mt(
    t,
    (b) => u(b)
  ), p = ye({
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
      let b = function(S) {
        if (p.paused || !s)
          return;
        const h = S.target;
        s.contains(h) ? f.current = h : Qe(f.current, {
          select: !0
        });
      }, E = function(S) {
        if (p.paused || !s)
          return;
        const h = S.relatedTarget;
        h !== null && (s.contains(h) || Qe(f.current, {
          select: !0
        }));
      }, w = function(S) {
        if (document.activeElement === document.body)
          for (const C of S)
            C.removedNodes.length > 0 && Qe(s);
      };
      document.addEventListener("focusin", b), document.addEventListener("focusout", E);
      const O = new MutationObserver(w);
      return s && O.observe(s, {
        childList: !0,
        subtree: !0
      }), () => {
        document.removeEventListener("focusin", b), document.removeEventListener("focusout", E), O.disconnect();
      };
    }
  }, [
    r,
    s,
    p.paused
  ]), fe(() => {
    if (s) {
      uo.add(p);
      const b = document.activeElement;
      if (!s.contains(b)) {
        const w = new CustomEvent(er, co);
        s.addEventListener(er, l), s.dispatchEvent(w), w.defaultPrevented || (Li(Wi(Xo(s)), {
          select: !0
        }), document.activeElement === b && Qe(s));
      }
      return () => {
        s.removeEventListener(er, l), setTimeout(() => {
          const w = new CustomEvent(tr, co);
          s.addEventListener(tr, d), s.dispatchEvent(w), w.defaultPrevented || Qe(b != null ? b : document.body, {
            select: !0
          }), s.removeEventListener(tr, d), uo.remove(p);
        }, 0);
      };
    }
  }, [
    s,
    l,
    d,
    p
  ]);
  const g = ft((b) => {
    if (!n && !r || p.paused)
      return;
    const E = b.key === "Tab" && !b.altKey && !b.ctrlKey && !b.metaKey, w = document.activeElement;
    if (E && w) {
      const O = b.currentTarget, [S, h] = Ii(O);
      S && h ? !b.shiftKey && w === h ? (b.preventDefault(), n && Qe(S, {
        select: !0
      })) : b.shiftKey && w === S && (b.preventDefault(), n && Qe(h, {
        select: !0
      })) : w === O && b.preventDefault();
    }
  }, [
    n,
    r,
    p.paused
  ]);
  return /* @__PURE__ */ me(on.div, Ee({
    tabIndex: -1
  }, c, {
    ref: v,
    onKeyDown: g
  }));
});
function Li(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (Qe(r, {
      select: t
    }), document.activeElement !== n)
      return;
}
function Ii(e) {
  const t = Xo(e), n = so(t, e), r = so(t.reverse(), e);
  return [
    n,
    r
  ];
}
function Xo(e) {
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
function so(e, t) {
  for (const n of e)
    if (!Fi(n, {
      upTo: t
    }))
      return n;
}
function Fi(e, { upTo: t }) {
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
function Mi(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Qe(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== n && Mi(e) && t && e.select();
  }
}
const uo = Bi();
function Bi() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = lo(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = lo(e, t), (n = e[0]) === null || n === void 0 || n.resume();
    }
  };
}
function lo(e, t) {
  const n = [
    ...e
  ], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function Wi(e) {
  return e.filter(
    (t) => t.tagName !== "A"
  );
}
const Ct = globalThis != null && globalThis.document ? He : () => {
}, Ui = D["useId".toString()] || (() => {
});
let Vi = 0;
function Yi(e) {
  const [t, n] = D.useState(Ui());
  return Ct(() => {
    e || n(
      (r) => r != null ? r : String(Vi++)
    );
  }, [
    e
  ]), e || (t ? `radix-${t}` : "");
}
const zi = ["top", "right", "bottom", "left"], tt = Math.min, Ce = Math.max, On = Math.round, ln = Math.floor, nt = (e) => ({
  x: e,
  y: e
}), qi = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Hi = {
  start: "end",
  end: "start"
};
function xr(e, t, n) {
  return Ce(e, tt(t, n));
}
function Ge(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ke(e) {
  return e.split("-")[0];
}
function kt(e) {
  return e.split("-")[1];
}
function Nr(e) {
  return e === "x" ? "y" : "x";
}
function jr(e) {
  return e === "y" ? "height" : "width";
}
function _t(e) {
  return ["top", "bottom"].includes(Ke(e)) ? "y" : "x";
}
function Lr(e) {
  return Nr(_t(e));
}
function Gi(e, t, n) {
  n === void 0 && (n = !1);
  const r = kt(e), a = Lr(e), i = jr(a);
  let c = a === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (c = Pn(c)), [c, Pn(c)];
}
function Ki(e) {
  const t = Pn(e);
  return [Er(e), t, Er(t)];
}
function Er(e) {
  return e.replace(/start|end/g, (t) => Hi[t]);
}
function Xi(e, t, n) {
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
function Ji(e, t, n, r) {
  const a = kt(e);
  let i = Xi(Ke(e), n === "start", r);
  return a && (i = i.map((c) => c + "-" + a), t && (i = i.concat(i.map(Er)))), i;
}
function Pn(e) {
  return e.replace(/left|right|bottom|top/g, (t) => qi[t]);
}
function Zi(e) {
  return G({
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }, e);
}
function Jo(e) {
  return typeof e != "number" ? Zi(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Tn(e) {
  return ve(G({}, e), {
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function fo(e, t, n) {
  let {
    reference: r,
    floating: a
  } = e;
  const i = _t(t), c = Lr(t), s = jr(c), u = Ke(t), l = i === "y", d = r.x + r.width / 2 - a.width / 2, f = r.y + r.height / 2 - a.height / 2, v = r[s] / 2 - a[s] / 2;
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
  switch (kt(t)) {
    case "start":
      p[c] -= v * (n && l ? -1 : 1);
      break;
    case "end":
      p[c] += v * (n && l ? -1 : 1);
      break;
  }
  return p;
}
const Qi = (e, t, n) => Fe(void 0, null, function* () {
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
  } = fo(l, r, u), v = r, p = {}, g = 0;
  for (let y = 0; y < s.length; y++) {
    const {
      name: b,
      fn: E
    } = s[y], {
      x: w,
      y: O,
      data: S,
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
    if (d = w != null ? w : d, f = O != null ? O : f, p = ve(G({}, p), {
      [b]: G(G({}, p[b]), S)
    }), h && g <= 50) {
      g++, typeof h == "object" && (h.placement && (v = h.placement), h.rects && (l = h.rects === !0 ? yield c.getElementRects({
        reference: e,
        floating: t,
        strategy: a
      }) : h.rects), {
        x: d,
        y: f
      } = fo(l, v, u)), y = -1;
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
    } = Ge(t, e), g = Jo(p), b = s[v ? f === "floating" ? "reference" : "floating" : f], E = Tn(yield i.getClippingRect({
      element: (n = yield i.isElement == null ? void 0 : i.isElement(b)) == null || n ? b : b.contextElement || (yield i.getDocumentElement == null ? void 0 : i.getDocumentElement(s.floating)),
      boundary: l,
      rootBoundary: d,
      strategy: u
    })), w = f === "floating" ? ve(G({}, c.floating), {
      x: r,
      y: a
    }) : c.reference, O = yield i.getOffsetParent == null ? void 0 : i.getOffsetParent(s.floating), S = (yield i.isElement == null ? void 0 : i.isElement(O)) ? (yield i.getScale == null ? void 0 : i.getScale(O)) || {
      x: 1,
      y: 1
    } : {
      x: 1,
      y: 1
    }, h = Tn(i.convertOffsetParentRelativeRectToViewportRelativeRect ? yield i.convertOffsetParentRelativeRectToViewportRelativeRect({
      rect: w,
      offsetParent: O,
      strategy: u
    }) : w);
    return {
      top: (E.top - h.top + g.top) / S.y,
      bottom: (h.bottom - E.bottom + g.bottom) / S.y,
      left: (E.left - h.left + g.left) / S.x,
      right: (h.right - E.right + g.right) / S.x
    };
  });
}
const vo = (e) => ({
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
      const v = Jo(f), p = {
        x: r,
        y: a
      }, g = Lr(i), y = jr(g), b = yield s.getDimensions(d), E = g === "y", w = E ? "top" : "left", O = E ? "bottom" : "right", S = E ? "clientHeight" : "clientWidth", h = c.reference[y] + c.reference[g] - p[g] - c.floating[y], C = p[g] - c.reference[g], R = yield s.getOffsetParent == null ? void 0 : s.getOffsetParent(d);
      let L = R ? R[S] : 0;
      (!L || !(yield s.isElement == null ? void 0 : s.isElement(R))) && (L = u.floating[S] || c.floating[y]);
      const N = h / 2 - C / 2, ae = L / 2 - b[y] / 2 - 1, ie = tt(v[w], ae), re = tt(v[O], ae), Z = ie, B = L - b[y] - re, te = L / 2 - b[y] / 2 + N, Y = xr(Z, te, B), ne = !l.arrow && kt(i) != null && te != Y && c.reference[y] / 2 - (te < Z ? ie : re) - b[y] / 2 < 0, ce = ne ? te < Z ? te - Z : te - B : 0;
      return {
        [g]: p[g] + ce,
        data: G({
          [g]: Y,
          centerOffset: te - Y - ce
        }, ne && {
          alignmentOffset: ce
        }),
        reset: ne
      };
    });
  }
}), ec = function(e) {
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
          fallbackStrategy: g = "bestFit",
          fallbackAxisSideDirection: y = "none",
          flipAlignment: b = !0
        } = Z, E = we(Z, [
          "mainAxis",
          "crossAxis",
          "fallbackPlacements",
          "fallbackStrategy",
          "fallbackAxisSideDirection",
          "flipAlignment"
        ]);
        if ((r = c.arrow) != null && r.alignmentOffset)
          return {};
        const w = Ke(i), O = Ke(u) === u, S = yield l.isRTL == null ? void 0 : l.isRTL(d.floating), h = p || (O || !b ? [Pn(u)] : Ki(u));
        !p && y !== "none" && h.push(...Ji(u, b, y, S));
        const C = [u, ...h], R = yield Jt(n, E), L = [];
        let N = ((a = c.flip) == null ? void 0 : a.overflows) || [];
        if (f && L.push(R[w]), v) {
          const B = Gi(i, s, S);
          L.push(R[B[0]], R[B[1]]);
        }
        if (N = [...N, {
          placement: i,
          overflows: L
        }], !L.every((B) => B <= 0)) {
          var ae, ie;
          const B = (((ae = c.flip) == null ? void 0 : ae.index) || 0) + 1, te = C[B];
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
          let Y = (ie = N.filter((ne) => ne.overflows[0] <= 0).sort((ne, ce) => ne.overflows[1] - ce.overflows[1])[0]) == null ? void 0 : ie.placement;
          if (!Y)
            switch (g) {
              case "bestFit": {
                var re;
                const ne = (re = N.map((ce) => [ce.placement, ce.overflows.filter((ge) => ge > 0).reduce((ge, P) => ge + P, 0)]).sort((ce, ge) => ce[1] - ge[1])[0]) == null ? void 0 : re[0];
                ne && (Y = ne);
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
function po(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function mo(e) {
  return zi.some((t) => e[t] >= 0);
}
const tc = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    fn(n) {
      return Fe(this, null, function* () {
        const {
          rects: r
        } = n, c = Ge(e, n), {
          strategy: a = "referenceHidden"
        } = c, i = we(c, [
          "strategy"
        ]);
        switch (a) {
          case "referenceHidden": {
            const s = yield Jt(n, ve(G({}, i), {
              elementContext: "reference"
            })), u = po(s, r.reference);
            return {
              data: {
                referenceHiddenOffsets: u,
                referenceHidden: mo(u)
              }
            };
          }
          case "escaped": {
            const s = yield Jt(n, ve(G({}, i), {
              altBoundary: !0
            })), u = po(s, r.floating);
            return {
              data: {
                escapedOffsets: u,
                escaped: mo(u)
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
function nc(e, t) {
  return Fe(this, null, function* () {
    const {
      placement: n,
      platform: r,
      elements: a
    } = e, i = yield r.isRTL == null ? void 0 : r.isRTL(a.floating), c = Ke(n), s = kt(n), u = _t(n) === "y", l = ["left", "top"].includes(c) ? -1 : 1, d = i && u ? -1 : 1, f = Ge(t, e);
    let {
      mainAxis: v,
      crossAxis: p,
      alignmentAxis: g
    } = typeof f == "number" ? {
      mainAxis: f,
      crossAxis: 0,
      alignmentAxis: null
    } : G({
      mainAxis: 0,
      crossAxis: 0,
      alignmentAxis: null
    }, f);
    return s && typeof g == "number" && (p = s === "end" ? g * -1 : g), u ? {
      x: p * d,
      y: v * l
    } : {
      x: v * l,
      y: p * d
    };
  });
}
const rc = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    fn(n) {
      return Fe(this, null, function* () {
        const {
          x: r,
          y: a
        } = n, i = yield nc(n, e);
        return {
          x: r + i.x,
          y: a + i.y,
          data: i
        };
      });
    }
  };
}, oc = function(e) {
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
            fn: (w) => {
              let {
                x: O,
                y: S
              } = w;
              return {
                x: O,
                y: S
              };
            }
          }
        } = E, l = we(E, [
          "mainAxis",
          "crossAxis",
          "limiter"
        ]), d = {
          x: r,
          y: a
        }, f = yield Jt(n, l), v = _t(Ke(i)), p = Nr(v);
        let g = d[p], y = d[v];
        if (c) {
          const w = p === "y" ? "top" : "left", O = p === "y" ? "bottom" : "right", S = g + f[w], h = g - f[O];
          g = xr(S, g, h);
        }
        if (s) {
          const w = v === "y" ? "top" : "left", O = v === "y" ? "bottom" : "right", S = y + f[w], h = y - f[O];
          y = xr(S, y, h);
        }
        const b = u.fn(ve(G({}, n), {
          [p]: g,
          [v]: y
        }));
        return ve(G({}, b), {
          data: {
            x: b.x - r,
            y: b.y - a
          }
        });
      });
    }
  };
}, ac = function(e) {
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
      }, f = _t(a), v = Nr(f);
      let p = d[v], g = d[f];
      const y = Ge(s, t), b = typeof y == "number" ? {
        mainAxis: y,
        crossAxis: 0
      } : G({
        mainAxis: 0,
        crossAxis: 0
      }, y);
      if (u) {
        const O = v === "y" ? "height" : "width", S = i.reference[v] - i.floating[O] + b.mainAxis, h = i.reference[v] + i.reference[O] - b.mainAxis;
        p < S ? p = S : p > h && (p = h);
      }
      if (l) {
        var E, w;
        const O = v === "y" ? "width" : "height", S = ["top", "left"].includes(Ke(a)), h = i.reference[f] - i.floating[O] + (S && ((E = c.offset) == null ? void 0 : E[f]) || 0) + (S ? 0 : b.crossAxis), C = i.reference[f] + i.reference[O] + (S ? 0 : ((w = c.offset) == null ? void 0 : w[f]) || 0) - (S ? b.crossAxis : 0);
        g < h ? g = h : g > C && (g = C);
      }
      return {
        [v]: p,
        [f]: g
      };
    }
  };
}, ic = function(e) {
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
        } = R, u = we(R, [
          "apply"
        ]), l = yield Jt(n, u), d = Ke(r), f = kt(r), v = _t(r) === "y", {
          width: p,
          height: g
        } = a.floating;
        let y, b;
        d === "top" || d === "bottom" ? (y = d, b = f === ((yield i.isRTL == null ? void 0 : i.isRTL(c.floating)) ? "start" : "end") ? "left" : "right") : (b = d, y = f === "end" ? "top" : "bottom");
        const E = g - l[y], w = p - l[b], O = !n.middlewareData.shift;
        let S = E, h = w;
        if (v) {
          const L = p - l.left - l.right;
          h = f || O ? tt(w, L) : L;
        } else {
          const L = g - l.top - l.bottom;
          S = f || O ? tt(E, L) : L;
        }
        if (O && !f) {
          const L = Ce(l.left, 0), N = Ce(l.right, 0), ae = Ce(l.top, 0), ie = Ce(l.bottom, 0);
          v ? h = p - 2 * (L !== 0 || N !== 0 ? L + N : Ce(l.left, l.right)) : S = g - 2 * (ae !== 0 || ie !== 0 ? ae + ie : Ce(l.top, l.bottom));
        }
        yield s(ve(G({}, n), {
          availableWidth: h,
          availableHeight: S
        }));
        const C = yield i.getDimensions(c.floating);
        return p !== C.width || g !== C.height ? {
          reset: {
            rects: !0
          }
        } : {};
      });
    }
  };
};
function rt(e) {
  return Zo(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Re(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Je(e) {
  var t;
  return (t = (Zo(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Zo(e) {
  return e instanceof Node || e instanceof Re(e).Node;
}
function Xe(e) {
  return e instanceof Element || e instanceof Re(e).Element;
}
function Ue(e) {
  return e instanceof HTMLElement || e instanceof Re(e).HTMLElement;
}
function ho(e) {
  return typeof ShadowRoot == "undefined" ? !1 : e instanceof ShadowRoot || e instanceof Re(e).ShadowRoot;
}
function an(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: a
  } = Ne(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(a);
}
function cc(e) {
  return ["table", "td", "th"].includes(rt(e));
}
function Ir(e) {
  const t = Fr(), n = Ne(e);
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function sc(e) {
  let t = Rt(e);
  for (; Ue(t) && !_n(t); ) {
    if (Ir(t))
      return t;
    t = Rt(t);
  }
  return null;
}
function Fr() {
  return typeof CSS == "undefined" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function _n(e) {
  return ["html", "body", "#document"].includes(rt(e));
}
function Ne(e) {
  return Re(e).getComputedStyle(e);
}
function An(e) {
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
    ho(e) && e.host || // Fallback.
    Je(e)
  );
  return ho(t) ? t.host : t;
}
function Qo(e) {
  const t = Rt(e);
  return _n(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Ue(t) && an(t) ? t : Qo(t);
}
function Zt(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const a = Qo(e), i = a === ((r = e.ownerDocument) == null ? void 0 : r.body), c = Re(a);
  return i ? t.concat(c, c.visualViewport || [], an(a) ? a : [], c.frameElement && n ? Zt(c.frameElement) : []) : t.concat(a, Zt(a, [], n));
}
function ea(e) {
  const t = Ne(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const a = Ue(e), i = a ? e.offsetWidth : n, c = a ? e.offsetHeight : r, s = On(n) !== i || On(r) !== c;
  return s && (n = i, r = c), {
    width: n,
    height: r,
    $: s
  };
}
function Mr(e) {
  return Xe(e) ? e : e.contextElement;
}
function Ot(e) {
  const t = Mr(e);
  if (!Ue(t))
    return nt(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: a,
    $: i
  } = ea(t);
  let c = (i ? On(n.width) : n.width) / r, s = (i ? On(n.height) : n.height) / a;
  return (!c || !Number.isFinite(c)) && (c = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: c,
    y: s
  };
}
const uc = /* @__PURE__ */ nt(0);
function ta(e) {
  const t = Re(e);
  return !Fr() || !t.visualViewport ? uc : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function lc(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Re(e) ? !1 : t;
}
function pt(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const a = e.getBoundingClientRect(), i = Mr(e);
  let c = nt(1);
  t && (r ? Xe(r) && (c = Ot(r)) : c = Ot(e));
  const s = lc(i, n, r) ? ta(i) : nt(0);
  let u = (a.left + s.x) / c.x, l = (a.top + s.y) / c.y, d = a.width / c.x, f = a.height / c.y;
  if (i) {
    const v = Re(i), p = r && Xe(r) ? Re(r) : r;
    let g = v.frameElement;
    for (; g && r && p !== v; ) {
      const y = Ot(g), b = g.getBoundingClientRect(), E = Ne(g), w = b.left + (g.clientLeft + parseFloat(E.paddingLeft)) * y.x, O = b.top + (g.clientTop + parseFloat(E.paddingTop)) * y.y;
      u *= y.x, l *= y.y, d *= y.x, f *= y.y, u += w, l += O, g = Re(g).frameElement;
    }
  }
  return Tn({
    width: d,
    height: f,
    x: u,
    y: l
  });
}
function fc(e) {
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
  if ((a || !a && r !== "fixed") && ((rt(n) !== "body" || an(i)) && (c = An(n)), Ue(n))) {
    const l = pt(n);
    s = Ot(n), u.x = l.x + n.clientLeft, u.y = l.y + n.clientTop;
  }
  return {
    width: t.width * s.x,
    height: t.height * s.y,
    x: t.x * s.x - c.scrollLeft * s.x + u.x,
    y: t.y * s.y - c.scrollTop * s.y + u.y
  };
}
function dc(e) {
  return Array.from(e.getClientRects());
}
function na(e) {
  return pt(Je(e)).left + An(e).scrollLeft;
}
function vc(e) {
  const t = Je(e), n = An(e), r = e.ownerDocument.body, a = Ce(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = Ce(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let c = -n.scrollLeft + na(e);
  const s = -n.scrollTop;
  return Ne(r).direction === "rtl" && (c += Ce(t.clientWidth, r.clientWidth) - a), {
    width: a,
    height: i,
    x: c,
    y: s
  };
}
function pc(e, t) {
  const n = Re(e), r = Je(e), a = n.visualViewport;
  let i = r.clientWidth, c = r.clientHeight, s = 0, u = 0;
  if (a) {
    i = a.width, c = a.height;
    const l = Fr();
    (!l || l && t === "fixed") && (s = a.offsetLeft, u = a.offsetTop);
  }
  return {
    width: i,
    height: c,
    x: s,
    y: u
  };
}
function mc(e, t) {
  const n = pt(e, !0, t === "fixed"), r = n.top + e.clientTop, a = n.left + e.clientLeft, i = Ue(e) ? Ot(e) : nt(1), c = e.clientWidth * i.x, s = e.clientHeight * i.y, u = a * i.x, l = r * i.y;
  return {
    width: c,
    height: s,
    x: u,
    y: l
  };
}
function go(e, t, n) {
  let r;
  if (t === "viewport")
    r = pc(e, n);
  else if (t === "document")
    r = vc(Je(e));
  else if (Xe(t))
    r = mc(t, n);
  else {
    const a = ta(e);
    r = ve(G({}, t), {
      x: t.x - a.x,
      y: t.y - a.y
    });
  }
  return Tn(r);
}
function ra(e, t) {
  const n = Rt(e);
  return n === t || !Xe(n) || _n(n) ? !1 : Ne(n).position === "fixed" || ra(n, t);
}
function hc(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Zt(e, [], !1).filter((s) => Xe(s) && rt(s) !== "body"), a = null;
  const i = Ne(e).position === "fixed";
  let c = i ? Rt(e) : e;
  for (; Xe(c) && !_n(c); ) {
    const s = Ne(c), u = Ir(c);
    !u && s.position === "fixed" && (a = null), (i ? !u && !a : !u && s.position === "static" && !!a && ["absolute", "fixed"].includes(a.position) || an(c) && !u && ra(e, c)) ? r = r.filter((d) => d !== c) : a = s, c = Rt(c);
  }
  return t.set(e, r), r;
}
function gc(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: a
  } = e;
  const c = [...n === "clippingAncestors" ? hc(t, this._c) : [].concat(n), r], s = c[0], u = c.reduce((l, d) => {
    const f = go(t, d, a);
    return l.top = Ce(f.top, l.top), l.right = tt(f.right, l.right), l.bottom = tt(f.bottom, l.bottom), l.left = Ce(f.left, l.left), l;
  }, go(t, s, a));
  return {
    width: u.right - u.left,
    height: u.bottom - u.top,
    x: u.left,
    y: u.top
  };
}
function yc(e) {
  return ea(e);
}
function bc(e, t, n) {
  const r = Ue(t), a = Je(t), i = n === "fixed", c = pt(e, !0, i, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const u = nt(0);
  if (r || !r && !i)
    if ((rt(t) !== "body" || an(a)) && (s = An(t)), r) {
      const l = pt(t, !0, i, t);
      u.x = l.x + t.clientLeft, u.y = l.y + t.clientTop;
    } else
      a && (u.x = na(a));
  return {
    x: c.left + s.scrollLeft - u.x,
    y: c.top + s.scrollTop - u.y,
    width: c.width,
    height: c.height
  };
}
function yo(e, t) {
  return !Ue(e) || Ne(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function oa(e, t) {
  const n = Re(e);
  if (!Ue(e))
    return n;
  let r = yo(e, t);
  for (; r && cc(r) && Ne(r).position === "static"; )
    r = yo(r, t);
  return r && (rt(r) === "html" || rt(r) === "body" && Ne(r).position === "static" && !Ir(r)) ? n : r || sc(e) || n;
}
const wc = function(e) {
  return Fe(this, null, function* () {
    let {
      reference: t,
      floating: n,
      strategy: r
    } = e;
    const a = this.getOffsetParent || oa, i = this.getDimensions;
    return {
      reference: bc(t, yield a(n), r),
      floating: G({
        x: 0,
        y: 0
      }, yield i(n))
    };
  });
};
function xc(e) {
  return Ne(e).direction === "rtl";
}
const Ec = {
  convertOffsetParentRelativeRectToViewportRelativeRect: fc,
  getDocumentElement: Je,
  getClippingRect: gc,
  getOffsetParent: oa,
  getElementRects: wc,
  getClientRects: dc,
  getDimensions: yc,
  getScale: Ot,
  isElement: Xe,
  isRTL: xc
};
function Sc(e, t) {
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
    const p = ln(d), g = ln(a.clientWidth - (l + f)), y = ln(a.clientHeight - (d + v)), b = ln(l), w = {
      rootMargin: -p + "px " + -g + "px " + -y + "px " + -b + "px",
      threshold: Ce(0, tt(1, u)) || 1
    };
    let O = !0;
    function S(h) {
      const C = h[0].intersectionRatio;
      if (C !== u) {
        if (!O)
          return c();
        C ? c(!1, C) : r = setTimeout(() => {
          c(!1, 1e-7);
        }, 100);
      }
      O = !1;
    }
    try {
      n = new IntersectionObserver(S, ve(G({}, w), {
        // Handle <iframe>s
        root: a.ownerDocument
      }));
    } catch (h) {
      n = new IntersectionObserver(S, w);
    }
    n.observe(e);
  }
  return c(!0), i;
}
function Oc(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: a = !0,
    ancestorResize: i = !0,
    elementResize: c = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: u = !1
  } = r, l = Mr(e), d = a || i ? [...l ? Zt(l) : [], ...Zt(t)] : [];
  d.forEach((E) => {
    a && E.addEventListener("scroll", n, {
      passive: !0
    }), i && E.addEventListener("resize", n);
  });
  const f = l && s ? Sc(l, n) : null;
  let v = -1, p = null;
  c && (p = new ResizeObserver((E) => {
    let [w] = E;
    w && w.target === l && p && (p.unobserve(t), cancelAnimationFrame(v), v = requestAnimationFrame(() => {
      p && p.observe(t);
    })), n();
  }), l && !u && p.observe(l), p.observe(t));
  let g, y = u ? pt(e) : null;
  u && b();
  function b() {
    const E = pt(e);
    y && (E.x !== y.x || E.y !== y.y || E.width !== y.width || E.height !== y.height) && n(), y = E, g = requestAnimationFrame(b);
  }
  return n(), () => {
    d.forEach((E) => {
      a && E.removeEventListener("scroll", n), i && E.removeEventListener("resize", n);
    }), f && f(), p && p.disconnect(), p = null, u && cancelAnimationFrame(g);
  };
}
const Pc = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), a = G({
    platform: Ec
  }, n), i = ve(G({}, a.platform), {
    _c: r
  });
  return Qi(e, t, ve(G({}, a), {
    platform: i
  }));
}, Tc = (e) => {
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
      return r && t(r) ? r.current != null ? vo({
        element: r.current,
        padding: a
      }).fn(n) : {} : r ? vo({
        element: r,
        padding: a
      }).fn(n) : {};
    }
  };
};
var bn = typeof document != "undefined" ? He : fe;
function $n(e, t) {
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
        if (!$n(e[r], t[r]))
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
      if (!(i === "_owner" && e.$$typeof) && !$n(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function aa(e) {
  return typeof window == "undefined" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function bo(e, t) {
  const n = aa(e);
  return Math.round(t * n) / n;
}
function wo(e) {
  const t = D.useRef(e);
  return bn(() => {
    t.current = e;
  }), t;
}
function $c(e) {
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
  $n(v, r) || p(r);
  const [g, y] = D.useState(null), [b, E] = D.useState(null), w = D.useCallback((Y) => {
    Y != C.current && (C.current = Y, y(Y));
  }, [y]), O = D.useCallback((Y) => {
    Y !== R.current && (R.current = Y, E(Y));
  }, [E]), S = i || g, h = c || b, C = D.useRef(null), R = D.useRef(null), L = D.useRef(d), N = wo(u), ae = wo(a), ie = D.useCallback(() => {
    if (!C.current || !R.current)
      return;
    const Y = {
      placement: t,
      strategy: n,
      middleware: v
    };
    ae.current && (Y.platform = ae.current), Pc(C.current, R.current, Y).then((ne) => {
      const ce = ve(G({}, ne), {
        isPositioned: !0
      });
      re.current && !$n(L.current, ce) && (L.current = ce, ci.flushSync(() => {
        f(ce);
      }));
    });
  }, [v, t, n, ae]);
  bn(() => {
    l === !1 && L.current.isPositioned && (L.current.isPositioned = !1, f((Y) => ve(G({}, Y), {
      isPositioned: !1
    })));
  }, [l]);
  const re = D.useRef(!1);
  bn(() => (re.current = !0, () => {
    re.current = !1;
  }), []), bn(() => {
    if (S && (C.current = S), h && (R.current = h), S && h) {
      if (N.current)
        return N.current(S, h, ie);
      ie();
    }
  }, [S, h, ie, N]);
  const Z = D.useMemo(() => ({
    reference: C,
    floating: R,
    setReference: w,
    setFloating: O
  }), [w, O]), B = D.useMemo(() => ({
    reference: S,
    floating: h
  }), [S, h]), te = D.useMemo(() => {
    const Y = {
      position: n,
      left: 0,
      top: 0
    };
    if (!B.floating)
      return Y;
    const ne = bo(B.floating, d.x), ce = bo(B.floating, d.y);
    return s ? G(ve(G({}, Y), {
      transform: "translate(" + ne + "px, " + ce + "px)"
    }), aa(B.floating) >= 1.5 && {
      willChange: "transform"
    }) : {
      position: n,
      left: ne,
      top: ce
    };
  }, [n, s, B.floating, d.x, d.y]);
  return D.useMemo(() => ve(G({}, d), {
    update: ie,
    refs: Z,
    elements: B,
    floatingStyles: te
  }), [d, ie, Z, B, te]);
}
function Cc(e) {
  const [t, n] = oe(void 0);
  return Ct(() => {
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
const ia = "Popper", [ca, sa] = Go(ia), [Rc, ua] = ca(ia), kc = (e) => {
  const { __scopePopper: t, children: n } = e, [r, a] = oe(null);
  return /* @__PURE__ */ me(Rc, {
    scope: t,
    anchor: r,
    onAnchorChange: a
  }, n);
}, _c = "PopperAnchor", Ac = /* @__PURE__ */ je((e, t) => {
  const u = e, { __scopePopper: n, virtualRef: r } = u, a = we(u, ["__scopePopper", "virtualRef"]), i = ua(_c, n), c = ye(null), s = mt(t, c);
  return fe(() => {
    i.onAnchorChange((r == null ? void 0 : r.current) || c.current);
  }), r ? null : /* @__PURE__ */ me(on.div, Ee({}, a, {
    ref: s
  }));
}), la = "PopperContent", [Dc, rl] = ca(la), Nc = /* @__PURE__ */ je((e, t) => {
  var n, r, a, i, c, s, u, l;
  const Se = e, { __scopePopper: d, side: f = "bottom", sideOffset: v = 0, align: p = "center", alignOffset: g = 0, arrowPadding: y = 0, avoidCollisions: b = !0, collisionBoundary: E = [], collisionPadding: w = 0, sticky: O = "partial", hideWhenDetached: S = !1, updatePositionStrategy: h = "optimized", onPlaced: C } = Se, R = we(Se, ["__scopePopper", "side", "sideOffset", "align", "alignOffset", "arrowPadding", "avoidCollisions", "collisionBoundary", "collisionPadding", "sticky", "hideWhenDetached", "updatePositionStrategy", "onPlaced"]), L = ua(la, d), [N, ae] = oe(null), ie = mt(
    t,
    (Oe) => ae(Oe)
  ), [re, Z] = oe(null), B = Cc(re), te = (n = B == null ? void 0 : B.width) !== null && n !== void 0 ? n : 0, Y = (r = B == null ? void 0 : B.height) !== null && r !== void 0 ? r : 0, ne = f + (p !== "center" ? "-" + p : ""), ce = typeof w == "number" ? w : G({
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }, w), ge = Array.isArray(E) ? E : [
    E
  ], P = ge.length > 0, k = {
    padding: ce,
    boundary: ge.filter(jc),
    // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
    altBoundary: P
  }, { refs: K, floatingStyles: z, placement: V, isPositioned: X, middlewareData: M } = $c({
    // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
    strategy: "fixed",
    placement: ne,
    whileElementsMounted: (...Oe) => Oc(...Oe, {
      animationFrame: h === "always"
    }),
    elements: {
      reference: L.anchor
    },
    middleware: [
      rc({
        mainAxis: v + Y,
        alignmentAxis: g
      }),
      b && oc(G({
        mainAxis: !0,
        crossAxis: !1,
        limiter: O === "partial" ? ac() : void 0
      }, k)),
      b && ec(G({}, k)),
      ic(ve(G({}, k), {
        apply: ({ elements: Oe, rects: Ze, availableWidth: ot, availableHeight: Le }) => {
          const { width: At, height: Dt } = Ze.reference, _e = Oe.floating.style;
          _e.setProperty("--radix-popper-available-width", `${ot}px`), _e.setProperty("--radix-popper-available-height", `${Le}px`), _e.setProperty("--radix-popper-anchor-width", `${At}px`), _e.setProperty("--radix-popper-anchor-height", `${Dt}px`);
        }
      })),
      re && Tc({
        element: re,
        padding: y
      }),
      Lc({
        arrowWidth: te,
        arrowHeight: Y
      }),
      S && tc(G({
        strategy: "referenceHidden"
      }, k))
    ]
  }), [I, U] = fa(V), q = et(C);
  Ct(() => {
    X && (q == null || q());
  }, [
    X,
    q
  ]);
  const H = (a = M.arrow) === null || a === void 0 ? void 0 : a.x, he = (i = M.arrow) === null || i === void 0 ? void 0 : i.y, _ = ((c = M.arrow) === null || c === void 0 ? void 0 : c.centerOffset) !== 0, [xe, Me] = oe();
  return Ct(() => {
    N && Me(window.getComputedStyle(N).zIndex);
  }, [
    N
  ]), /* @__PURE__ */ me("div", {
    ref: K.setFloating,
    "data-radix-popper-content-wrapper": "",
    style: ve(G({}, z), {
      transform: X ? z.transform : "translate(0, -200%)",
      // keep off the page when measuring
      minWidth: "max-content",
      zIndex: xe,
      "--radix-popper-transform-origin": [
        (s = M.transformOrigin) === null || s === void 0 ? void 0 : s.x,
        (u = M.transformOrigin) === null || u === void 0 ? void 0 : u.y
      ].join(" ")
    }),
    dir: e.dir
  }, /* @__PURE__ */ me(Dc, {
    scope: d,
    placedSide: I,
    onArrowChange: Z,
    arrowX: H,
    arrowY: he,
    shouldHideArrow: _
  }, /* @__PURE__ */ me(on.div, Ee({
    "data-side": I,
    "data-align": U
  }, R, {
    ref: ie,
    style: ve(G({}, R.style), {
      // if the PopperContent hasn't been placed yet (not all measurements done)
      // we prevent animations so that users's animation don't kick in too early referring wrong sides
      animation: X ? void 0 : "none",
      // hide the content if using the hide middleware and should be hidden
      opacity: (l = M.hide) !== null && l !== void 0 && l.referenceHidden ? 0 : void 0
    })
  }))));
});
function jc(e) {
  return e !== null;
}
const Lc = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var n, r, a, i, c;
    const { placement: s, rects: u, middlewareData: l } = t, f = ((n = l.arrow) === null || n === void 0 ? void 0 : n.centerOffset) !== 0, v = f ? 0 : e.arrowWidth, p = f ? 0 : e.arrowHeight, [g, y] = fa(s), b = {
      start: "0%",
      center: "50%",
      end: "100%"
    }[y], E = ((r = (a = l.arrow) === null || a === void 0 ? void 0 : a.x) !== null && r !== void 0 ? r : 0) + v / 2, w = ((i = (c = l.arrow) === null || c === void 0 ? void 0 : c.y) !== null && i !== void 0 ? i : 0) + p / 2;
    let O = "", S = "";
    return g === "bottom" ? (O = f ? b : `${E}px`, S = `${-p}px`) : g === "top" ? (O = f ? b : `${E}px`, S = `${u.floating.height + p}px`) : g === "right" ? (O = `${-p}px`, S = f ? b : `${w}px`) : g === "left" && (O = `${u.floating.width + p}px`, S = f ? b : `${w}px`), {
      data: {
        x: O,
        y: S
      }
    };
  }
});
function fa(e) {
  const [t, n = "center"] = e.split("-");
  return [
    t,
    n
  ];
}
const Ic = kc, Fc = Ac, Mc = Nc;
function Bc(e, t) {
  return ai((n, r) => {
    const a = t[n][r];
    return a != null ? a : n;
  }, e);
}
const da = (e) => {
  const { present: t, children: n } = e, r = Wc(t), a = typeof n == "function" ? n({
    present: r.isPresent
  }) : St.only(n), i = mt(r.ref, a.ref);
  return typeof n == "function" || r.isPresent ? /* @__PURE__ */ Rr(a, {
    ref: i
  }) : null;
};
da.displayName = "Presence";
function Wc(e) {
  const [t, n] = oe(), r = ye({}), a = ye(e), i = ye("none"), c = e ? "mounted" : "unmounted", [s, u] = Bc(c, {
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
    const l = fn(r.current);
    i.current = s === "mounted" ? l : "none";
  }, [
    s
  ]), Ct(() => {
    const l = r.current, d = a.current;
    if (d !== e) {
      const v = i.current, p = fn(l);
      e ? u("MOUNT") : p === "none" || (l == null ? void 0 : l.display) === "none" ? u("UNMOUNT") : u(d && v !== p ? "ANIMATION_OUT" : "UNMOUNT"), a.current = e;
    }
  }, [
    e,
    u
  ]), Ct(() => {
    if (t) {
      const l = (f) => {
        const p = fn(r.current).includes(f.animationName);
        f.target === t && p && Uo(
          () => u("ANIMATION_END")
        );
      }, d = (f) => {
        f.target === t && (i.current = fn(r.current));
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
function fn(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function Uc({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [r, a] = Vc({
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
function Vc({ defaultProp: e, onChange: t }) {
  const n = oe(e), [r] = n, a = ye(r), i = et(t);
  return fe(() => {
    a.current !== r && (i(r), a.current = r);
  }, [
    r,
    a,
    i
  ]), n;
}
var Yc = function(e) {
  if (typeof document == "undefined")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, ht = /* @__PURE__ */ new WeakMap(), dn = /* @__PURE__ */ new WeakMap(), vn = {}, nr = 0, va = function(e) {
  return e && (e.host || va(e.parentNode));
}, zc = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = va(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, qc = function(e, t, n, r) {
  var a = zc(t, Array.isArray(e) ? e : [e]);
  vn[n] || (vn[n] = /* @__PURE__ */ new WeakMap());
  var i = vn[n], c = [], s = /* @__PURE__ */ new Set(), u = new Set(a), l = function(f) {
    !f || s.has(f) || (s.add(f), l(f.parentNode));
  };
  a.forEach(l);
  var d = function(f) {
    !f || u.has(f) || Array.prototype.forEach.call(f.children, function(v) {
      if (s.has(v))
        d(v);
      else {
        var p = v.getAttribute(r), g = p !== null && p !== "false", y = (ht.get(v) || 0) + 1, b = (i.get(v) || 0) + 1;
        ht.set(v, y), i.set(v, b), c.push(v), y === 1 && g && dn.set(v, !0), b === 1 && v.setAttribute(n, "true"), g || v.setAttribute(r, "true");
      }
    });
  };
  return d(t), s.clear(), nr++, function() {
    c.forEach(function(f) {
      var v = ht.get(f) - 1, p = i.get(f) - 1;
      ht.set(f, v), i.set(f, p), v || (dn.has(f) || f.removeAttribute(r), dn.delete(f)), p || f.removeAttribute(n);
    }), nr--, nr || (ht = /* @__PURE__ */ new WeakMap(), ht = /* @__PURE__ */ new WeakMap(), dn = /* @__PURE__ */ new WeakMap(), vn = {});
  };
}, Hc = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), a = t || Yc(e);
  return a ? (r.push.apply(r, Array.from(a.querySelectorAll("[aria-live]"))), qc(r, a, n, "aria-hidden")) : function() {
    return null;
  };
}, We = function() {
  return We = Object.assign || function(t) {
    for (var n, r = 1, a = arguments.length; r < a; r++) {
      n = arguments[r];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, We.apply(this, arguments);
};
function pa(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
}
function Gc(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, a = t.length, i; r < a; r++)
      (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
var wn = "right-scroll-bar-position", xn = "width-before-scroll-bar", Kc = "with-scroll-bars-hidden", Xc = "--removed-body-scroll-bar-size";
function Jc(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Zc(e, t) {
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
function ma(e, t) {
  return Zc(t || null, function(n) {
    return e.forEach(function(r) {
      return Jc(r, n);
    });
  });
}
function ha(e) {
  return e;
}
function ga(e, t) {
  t === void 0 && (t = ha);
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
function Br(e, t) {
  return t === void 0 && (t = ha), ga(e, t);
}
function ya(e) {
  e === void 0 && (e = {});
  var t = ga(null);
  return t.options = We({ async: !0, ssr: !1 }, e), t;
}
var ba = function(e) {
  var t = e.sideCar, n = pa(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return D.createElement(r, We({}, n));
};
ba.isSideCarExport = !0;
function Qc(e, t) {
  return e.useMedium(t), ba;
}
var wa = ya(), rr = function() {
}, Dn = D.forwardRef(function(e, t) {
  var n = D.useRef(null), r = D.useState({
    onScrollCapture: rr,
    onWheelCapture: rr,
    onTouchMoveCapture: rr
  }), a = r[0], i = r[1], c = e.forwardProps, s = e.children, u = e.className, l = e.removeScrollBar, d = e.enabled, f = e.shards, v = e.sideCar, p = e.noIsolation, g = e.inert, y = e.allowPinchZoom, b = e.as, E = b === void 0 ? "div" : b, w = pa(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]), O = v, S = ma([n, t]), h = We(We({}, w), a);
  return D.createElement(
    D.Fragment,
    null,
    d && D.createElement(O, { sideCar: wa, removeScrollBar: l, shards: f, noIsolation: p, inert: g, setCallbacks: i, allowPinchZoom: !!y, lockRef: n }),
    c ? D.cloneElement(D.Children.only(s), We(We({}, h), { ref: S })) : D.createElement(E, We({}, h, { className: u, ref: S }), s)
  );
});
Dn.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Dn.classNames = {
  fullWidth: xn,
  zeroRight: wn
};
var xo, es = function() {
  if (xo)
    return xo;
  if (typeof __webpack_nonce__ != "undefined")
    return __webpack_nonce__;
};
function ts() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = es();
  return t && e.setAttribute("nonce", t), e;
}
function ns(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function rs(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var os = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = ts()) && (ns(t, n), rs(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, as = function() {
  var e = os();
  return function(t, n) {
    D.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, xa = function() {
  var e = as(), t = function(n) {
    var r = n.styles, a = n.dynamic;
    return e(r, a), null;
  };
  return t;
}, is = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, or = function(e) {
  return parseInt(e || "", 10) || 0;
}, cs = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], a = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [or(n), or(r), or(a)];
}, ss = function(e) {
  if (e === void 0 && (e = "margin"), typeof window == "undefined")
    return is;
  var t = cs(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, us = xa(), ls = function(e, t, n, r) {
  var a = e.left, i = e.top, c = e.right, s = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(Kc, ` {
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
  
  .`).concat(wn, ` {
    right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(xn, ` {
    margin-right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(wn, " .").concat(wn, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(xn, " .").concat(xn, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body {
    `).concat(Xc, ": ").concat(s, `px;
  }
`);
}, fs = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, a = r === void 0 ? "margin" : r, i = D.useMemo(function() {
    return ss(a);
  }, [a]);
  return D.createElement(us, { styles: ls(i, !t, a, n ? "" : "!important") });
}, Sr = !1;
if (typeof window != "undefined")
  try {
    var pn = Object.defineProperty({}, "passive", {
      get: function() {
        return Sr = !0, !0;
      }
    });
    window.addEventListener("test", pn, pn), window.removeEventListener("test", pn, pn);
  } catch (e) {
    Sr = !1;
  }
var gt = Sr ? { passive: !1 } : !1, ds = function(e) {
  return e.tagName === "TEXTAREA";
}, Ea = function(e, t) {
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !ds(e) && n[t] === "visible")
  );
}, vs = function(e) {
  return Ea(e, "overflowY");
}, ps = function(e) {
  return Ea(e, "overflowX");
}, Eo = function(e, t) {
  var n = t;
  do {
    typeof ShadowRoot != "undefined" && n instanceof ShadowRoot && (n = n.host);
    var r = Sa(e, n);
    if (r) {
      var a = Oa(e, n), i = a[1], c = a[2];
      if (i > c)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== document.body);
  return !1;
}, ms = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, hs = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Sa = function(e, t) {
  return e === "v" ? vs(t) : ps(t);
}, Oa = function(e, t) {
  return e === "v" ? ms(t) : hs(t);
}, gs = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, ys = function(e, t, n, r, a) {
  var i = gs(e, window.getComputedStyle(t).direction), c = i * r, s = n.target, u = t.contains(s), l = !1, d = c > 0, f = 0, v = 0;
  do {
    var p = Oa(e, s), g = p[0], y = p[1], b = p[2], E = y - b - i * g;
    (g || E) && Sa(e, s) && (f += E, v += g), s = s.parentNode;
  } while (
    // portaled content
    !u && s !== document.body || // self content
    u && (t.contains(s) || t === s)
  );
  return (d && (a && f === 0 || !a && c > f) || !d && (a && v === 0 || !a && -c > v)) && (l = !0), l;
}, mn = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, So = function(e) {
  return [e.deltaX, e.deltaY];
}, Oo = function(e) {
  return e && "current" in e ? e.current : e;
}, bs = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, ws = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, xs = 0, yt = [];
function Es(e) {
  var t = D.useRef([]), n = D.useRef([0, 0]), r = D.useRef(), a = D.useState(xs++)[0], i = D.useState(function() {
    return xa();
  })[0], c = D.useRef(e);
  D.useEffect(function() {
    c.current = e;
  }, [e]), D.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(a));
      var y = Gc([e.lockRef.current], (e.shards || []).map(Oo), !0).filter(Boolean);
      return y.forEach(function(b) {
        return b.classList.add("allow-interactivity-".concat(a));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(a)), y.forEach(function(b) {
          return b.classList.remove("allow-interactivity-".concat(a));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var s = D.useCallback(function(y, b) {
    if ("touches" in y && y.touches.length === 2)
      return !c.current.allowPinchZoom;
    var E = mn(y), w = n.current, O = "deltaX" in y ? y.deltaX : w[0] - E[0], S = "deltaY" in y ? y.deltaY : w[1] - E[1], h, C = y.target, R = Math.abs(O) > Math.abs(S) ? "h" : "v";
    if ("touches" in y && R === "h" && C.type === "range")
      return !1;
    var L = Eo(R, C);
    if (!L)
      return !0;
    if (L ? h = R : (h = R === "v" ? "h" : "v", L = Eo(R, C)), !L)
      return !1;
    if (!r.current && "changedTouches" in y && (O || S) && (r.current = h), !h)
      return !0;
    var N = r.current || h;
    return ys(N, b, y, N === "h" ? O : S, !0);
  }, []), u = D.useCallback(function(y) {
    var b = y;
    if (!(!yt.length || yt[yt.length - 1] !== i)) {
      var E = "deltaY" in b ? So(b) : mn(b), w = t.current.filter(function(h) {
        return h.name === b.type && h.target === b.target && bs(h.delta, E);
      })[0];
      if (w && w.should) {
        b.cancelable && b.preventDefault();
        return;
      }
      if (!w) {
        var O = (c.current.shards || []).map(Oo).filter(Boolean).filter(function(h) {
          return h.contains(b.target);
        }), S = O.length > 0 ? s(b, O[0]) : !c.current.noIsolation;
        S && b.cancelable && b.preventDefault();
      }
    }
  }, []), l = D.useCallback(function(y, b, E, w) {
    var O = { name: y, delta: b, target: E, should: w };
    t.current.push(O), setTimeout(function() {
      t.current = t.current.filter(function(S) {
        return S !== O;
      });
    }, 1);
  }, []), d = D.useCallback(function(y) {
    n.current = mn(y), r.current = void 0;
  }, []), f = D.useCallback(function(y) {
    l(y.type, So(y), y.target, s(y, e.lockRef.current));
  }, []), v = D.useCallback(function(y) {
    l(y.type, mn(y), y.target, s(y, e.lockRef.current));
  }, []);
  D.useEffect(function() {
    return yt.push(i), e.setCallbacks({
      onScrollCapture: f,
      onWheelCapture: f,
      onTouchMoveCapture: v
    }), document.addEventListener("wheel", u, gt), document.addEventListener("touchmove", u, gt), document.addEventListener("touchstart", d, gt), function() {
      yt = yt.filter(function(y) {
        return y !== i;
      }), document.removeEventListener("wheel", u, gt), document.removeEventListener("touchmove", u, gt), document.removeEventListener("touchstart", d, gt);
    };
  }, []);
  var p = e.removeScrollBar, g = e.inert;
  return D.createElement(
    D.Fragment,
    null,
    g ? D.createElement(i, { styles: ws(a) }) : null,
    p ? D.createElement(fs, { gapMode: "margin" }) : null
  );
}
const Ss = Qc(wa, Es);
var Pa = D.forwardRef(function(e, t) {
  return D.createElement(Dn, We({}, e, { ref: t, sideCar: Ss }));
});
Pa.classNames = Dn.classNames;
const Os = Pa, Ta = "Popover", [$a, ol] = Go(Ta, [
  sa
]), Wr = sa(), [Ps, cn] = $a(Ta), Ts = (e) => {
  const { __scopePopover: t, children: n, open: r, defaultOpen: a, onOpenChange: i, modal: c = !1 } = e, s = Wr(t), u = ye(null), [l, d] = oe(!1), [f = !1, v] = Uc({
    prop: r,
    defaultProp: a,
    onChange: i
  });
  return /* @__PURE__ */ me(Ic, s, /* @__PURE__ */ me(Ps, {
    scope: t,
    contentId: Yi(),
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
}, $s = "PopoverTrigger", Cs = /* @__PURE__ */ je((e, t) => {
  const u = e, { __scopePopover: n } = u, r = we(u, ["__scopePopover"]), a = cn($s, n), i = Wr(n), c = mt(t, a.triggerRef), s = /* @__PURE__ */ me(on.button, Ee({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": a.open,
    "aria-controls": a.contentId,
    "data-state": Ra(a.open)
  }, r, {
    ref: c,
    onClick: dt(e.onClick, a.onOpenToggle)
  }));
  return a.hasCustomAnchor ? s : /* @__PURE__ */ me(Fc, Ee({
    asChild: !0
  }, i), s);
}), Rs = "PopoverPortal", [al, ks] = $a(Rs, {
  forceMount: void 0
}), Qt = "PopoverContent", _s = /* @__PURE__ */ je((e, t) => {
  const n = ks(Qt, e.__scopePopover), c = e, { forceMount: r = n.forceMount } = c, a = we(c, ["forceMount"]), i = cn(Qt, e.__scopePopover);
  return /* @__PURE__ */ me(da, {
    present: r || i.open
  }, i.modal ? /* @__PURE__ */ me(As, Ee({}, a, {
    ref: t
  })) : /* @__PURE__ */ me(Ds, Ee({}, a, {
    ref: t
  })));
}), As = /* @__PURE__ */ je((e, t) => {
  const n = cn(Qt, e.__scopePopover), r = ye(null), a = mt(t, r), i = ye(!1);
  return fe(() => {
    const c = r.current;
    if (c)
      return Hc(c);
  }, []), /* @__PURE__ */ me(Os, {
    as: Dr,
    allowPinchZoom: !0
  }, /* @__PURE__ */ me(Ca, Ee({}, e, {
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
}), Ds = /* @__PURE__ */ je((e, t) => {
  const n = cn(Qt, e.__scopePopover), r = ye(!1), a = ye(!1);
  return /* @__PURE__ */ me(Ca, Ee({}, e, {
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
}), Ca = /* @__PURE__ */ je((e, t) => {
  const g = e, { __scopePopover: n, trapFocus: r, onOpenAutoFocus: a, onCloseAutoFocus: i, disableOutsidePointerEvents: c, onEscapeKeyDown: s, onPointerDownOutside: u, onFocusOutside: l, onInteractOutside: d } = g, f = we(g, ["__scopePopover", "trapFocus", "onOpenAutoFocus", "onCloseAutoFocus", "disableOutsidePointerEvents", "onEscapeKeyDown", "onPointerDownOutside", "onFocusOutside", "onInteractOutside"]), v = cn(Qt, n), p = Wr(n);
  return Ni(), /* @__PURE__ */ me(ji, {
    asChild: !0,
    loop: !0,
    trapped: r,
    onMountAutoFocus: a,
    onUnmountAutoFocus: i
  }, /* @__PURE__ */ me(_i, {
    asChild: !0,
    disableOutsidePointerEvents: c,
    onInteractOutside: d,
    onEscapeKeyDown: s,
    onPointerDownOutside: u,
    onFocusOutside: l,
    onDismiss: () => v.onOpenChange(!1)
  }, /* @__PURE__ */ me(Mc, Ee({
    "data-state": Ra(v.open),
    role: "dialog",
    id: v.contentId
  }, p, f, {
    ref: t,
    style: ve(G({}, f.style), {
      "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
      "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
      "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
    })
  }))));
});
function Ra(e) {
  return e ? "open" : "closed";
}
const Ns = Ts;
const js = (e) => {
  const g = e, {
    open: t,
    onOpenChange: n,
    onTriggerClick: r,
    ariaLabel: a,
    triggerElement: i,
    children: c,
    popoverClassName: s,
    contentClassName: u,
    noStyle: l = !1,
    sideOffset: d = 18,
    align: f = "end",
    triggerTabindex: v
  } = g, p = we(g, [
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
  return /* @__PURE__ */ T.jsx(
    "div",
    {
      className: ee({
        [s || ""]: !!s,
        Popover: !l
      }),
      children: /* @__PURE__ */ T.jsxs(Ns, { open: t, onOpenChange: n, children: [
        i && /* @__PURE__ */ T.jsx(
          Cs,
          {
            "aria-label": a,
            tabIndex: v,
            className: "Popover-trigger",
            onClick: r,
            children: i
          }
        ),
        t && c && /* @__PURE__ */ T.jsx(
          _s,
          ve(G({
            align: f,
            sideOffset: d,
            className: ee({
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
var Pe = /* @__PURE__ */ ((e) => (e.Small = "small", e.Medium = "medium", e))(Pe || {}), xt = /* @__PURE__ */ ((e) => (e.Default = "default", e.Custom = "custom", e))(xt || {});
const Ls = ke.forwardRef(
  (e, t) => {
    const {
      items: n,
      selected: r,
      label: a,
      ariaLabel: i,
      size: c = Pe.Medium,
      error: s,
      isDisabled: u,
      onChange: l,
      type: d,
      className: f
    } = e, [v, p] = oe(!1), [g, y] = oe(), b = () => p(!v), E = (h) => {
      y(h), l && l(h), p(!1);
    }, w = (h) => {
      h.target === h.currentTarget && h.preventDefault();
    }, O = (h) => {
      (h.key === "Enter" || h.key === " ") && p(!v);
    }, S = (h, C) => {
      (h.key === "Enter" || h.key === " ") && (y(C), l && l(C), p(!1));
    };
    return fe(() => {
      y(r);
    }, [r]), /* @__PURE__ */ T.jsxs(
      "div",
      {
        className: ee({
          Dropdown: !0,
          "Dropdown-disabled": u,
          [f || ""]: !!f
        }),
        children: [
          a && /* @__PURE__ */ T.jsx(
            "div",
            {
              className: ee({
                "Dropdown-label": !0,
                "Dropdown-label-medium": c === Pe.Medium,
                "Dropdown-label-small": c === Pe.Small
              }),
              children: a
            }
          ),
          /* @__PURE__ */ T.jsx(
            js,
            {
              open: v,
              ariaLabel: i,
              contentClassName: ee({
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
              triggerElement: /* @__PURE__ */ T.jsx(
                "div",
                {
                  ref: t,
                  className: ee({
                    "Dropdown-root": !0,
                    "Dropdown-root-small": d === xt.Default && c === Pe.Small,
                    "Dropdown-root-medium": d === xt.Default && c === Pe.Medium,
                    "Dropdown-root-error": !!s,
                    "Dropdown-root-active": v
                  }),
                  tabIndex: 0,
                  "aria-label": i,
                  role: "trigger",
                  onKeyDown: O,
                  children: /* @__PURE__ */ T.jsxs("div", { className: "Dropdown-base", children: [
                    d === xt.Custom ? e.renderSelectedValue(g) : g == null ? void 0 : g.label,
                    /* @__PURE__ */ T.jsx(
                      "div",
                      {
                        className: ee({
                          "Dropdown-input-icon": !0,
                          "Dropdown-input-icon-up": v
                        }),
                        children: /* @__PURE__ */ T.jsx(_r, {})
                      }
                    )
                  ] })
                }
              ),
              children: /* @__PURE__ */ T.jsx(
                "div",
                {
                  className: ee({
                    "Dropdown-list": !0,
                    "Dropdown-list-medium": c === Pe.Medium,
                    "Dropdown-list-small": c === Pe.Small
                  }),
                  onClick: (h) => h.nativeEvent.stopImmediatePropagation(),
                  children: n.map((h) => /* @__PURE__ */ T.jsxs(
                    "div",
                    {
                      className: ee({
                        "Dropdown-list-item": !0,
                        "Dropdown-list-item-small": c === Pe.Small,
                        "Dropdown-list-item-medium": c === Pe.Medium
                      }),
                      tabIndex: 0,
                      role: "button",
                      onClick: () => E(h),
                      onKeyDown: (C) => S(C, h),
                      children: [
                        d === xt.Custom ? e.renderItem(h) : h.label,
                        (g == null ? void 0 : g.value) === h.value && /* @__PURE__ */ T.jsx("div", { className: "Dropdown-list-active-item", children: d === xt.Custom ? e.customActiveIcon : /* @__PURE__ */ T.jsx(Ar, { color: "", width: "24", height: "24" }) })
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
              className: ee({
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
Ls.displayName = "Dropdown";
const il = (e) => {
  const { items: t, onLabelClick: n } = e, r = (a, i) => {
    i || n && n(a);
  };
  return /* @__PURE__ */ T.jsx("nav", { "aria-label": "Breadcrumb", className: "Breadcrumbs", children: /* @__PURE__ */ T.jsx("ol", { className: "Breadcrumbs-list", children: t.map((a, i) => {
    const c = t.length - 1 === i;
    return /* @__PURE__ */ T.jsxs(Wo, { children: [
      /* @__PURE__ */ T.jsx(
        "li",
        {
          "aria-current": c ? "page" : void 0,
          className: ee({
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
      !c && /* @__PURE__ */ T.jsx("div", { "aria-hidden": "true", className: "Breadcrumbs-separator", children: /* @__PURE__ */ T.jsx(kr, { height: "16", width: "16" }) })
    ] }, a.key);
  }) }) });
};
var En = /* @__PURE__ */ ((e) => (e.Medium = "medium", e.Small = "small", e))(En || {});
const cl = ({
  progress: e,
  size: t = En.Medium,
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
    className: ee({
      ProgressBar: !0,
      "ProgressBar-medium": t === En.Medium,
      "ProgressBar-small": t === En.Small,
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
function Is(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), a, i;
  for (i = 0; i < r.length; i++)
    a = r[i], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function en() {
  return en = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, en.apply(this, arguments);
}
var Or = { exports: {} }, hn = { exports: {} }, ue = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Po;
function Fs() {
  if (Po)
    return ue;
  Po = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, c = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, b = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
  function O(h) {
    if (typeof h == "object" && h !== null) {
      var C = h.$$typeof;
      switch (C) {
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
                case g:
                case p:
                case c:
                  return h;
                default:
                  return C;
              }
          }
        case n:
          return C;
      }
    }
  }
  function S(h) {
    return O(h) === l;
  }
  return ue.AsyncMode = u, ue.ConcurrentMode = l, ue.ContextConsumer = s, ue.ContextProvider = c, ue.Element = t, ue.ForwardRef = d, ue.Fragment = r, ue.Lazy = g, ue.Memo = p, ue.Portal = n, ue.Profiler = i, ue.StrictMode = a, ue.Suspense = f, ue.isAsyncMode = function(h) {
    return S(h) || O(h) === u;
  }, ue.isConcurrentMode = S, ue.isContextConsumer = function(h) {
    return O(h) === s;
  }, ue.isContextProvider = function(h) {
    return O(h) === c;
  }, ue.isElement = function(h) {
    return typeof h == "object" && h !== null && h.$$typeof === t;
  }, ue.isForwardRef = function(h) {
    return O(h) === d;
  }, ue.isFragment = function(h) {
    return O(h) === r;
  }, ue.isLazy = function(h) {
    return O(h) === g;
  }, ue.isMemo = function(h) {
    return O(h) === p;
  }, ue.isPortal = function(h) {
    return O(h) === n;
  }, ue.isProfiler = function(h) {
    return O(h) === i;
  }, ue.isStrictMode = function(h) {
    return O(h) === a;
  }, ue.isSuspense = function(h) {
    return O(h) === f;
  }, ue.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === r || h === l || h === i || h === a || h === f || h === v || typeof h == "object" && h !== null && (h.$$typeof === g || h.$$typeof === p || h.$$typeof === c || h.$$typeof === s || h.$$typeof === d || h.$$typeof === b || h.$$typeof === E || h.$$typeof === w || h.$$typeof === y);
  }, ue.typeOf = O, ue;
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
var To;
function Ms() {
  return To || (To = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, c = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, b = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
    function O(_) {
      return typeof _ == "string" || typeof _ == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      _ === r || _ === l || _ === i || _ === a || _ === f || _ === v || typeof _ == "object" && _ !== null && (_.$$typeof === g || _.$$typeof === p || _.$$typeof === c || _.$$typeof === s || _.$$typeof === d || _.$$typeof === b || _.$$typeof === E || _.$$typeof === w || _.$$typeof === y);
    }
    function S(_) {
      if (typeof _ == "object" && _ !== null) {
        var xe = _.$$typeof;
        switch (xe) {
          case t:
            var Me = _.type;
            switch (Me) {
              case u:
              case l:
              case r:
              case i:
              case a:
              case f:
                return Me;
              default:
                var Se = Me && Me.$$typeof;
                switch (Se) {
                  case s:
                  case d:
                  case g:
                  case p:
                  case c:
                    return Se;
                  default:
                    return xe;
                }
            }
          case n:
            return xe;
        }
      }
    }
    var h = u, C = l, R = s, L = c, N = t, ae = d, ie = r, re = g, Z = p, B = n, te = i, Y = a, ne = f, ce = !1;
    function ge(_) {
      return ce || (ce = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), P(_) || S(_) === u;
    }
    function P(_) {
      return S(_) === l;
    }
    function k(_) {
      return S(_) === s;
    }
    function K(_) {
      return S(_) === c;
    }
    function z(_) {
      return typeof _ == "object" && _ !== null && _.$$typeof === t;
    }
    function V(_) {
      return S(_) === d;
    }
    function X(_) {
      return S(_) === r;
    }
    function M(_) {
      return S(_) === g;
    }
    function I(_) {
      return S(_) === p;
    }
    function U(_) {
      return S(_) === n;
    }
    function q(_) {
      return S(_) === i;
    }
    function H(_) {
      return S(_) === a;
    }
    function he(_) {
      return S(_) === f;
    }
    le.AsyncMode = h, le.ConcurrentMode = C, le.ContextConsumer = R, le.ContextProvider = L, le.Element = N, le.ForwardRef = ae, le.Fragment = ie, le.Lazy = re, le.Memo = Z, le.Portal = B, le.Profiler = te, le.StrictMode = Y, le.Suspense = ne, le.isAsyncMode = ge, le.isConcurrentMode = P, le.isContextConsumer = k, le.isContextProvider = K, le.isElement = z, le.isForwardRef = V, le.isFragment = X, le.isLazy = M, le.isMemo = I, le.isPortal = U, le.isProfiler = q, le.isStrictMode = H, le.isSuspense = he, le.isValidElementType = O, le.typeOf = S;
  }()), le;
}
var $o;
function ka() {
  return $o || ($o = 1, process.env.NODE_ENV === "production" ? hn.exports = Fs() : hn.exports = Ms()), hn.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var ar, Co;
function Bs() {
  if (Co)
    return ar;
  Co = 1;
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
  return ar = a() ? Object.assign : function(i, c) {
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
  }, ar;
}
var ir, Ro;
function Ur() {
  if (Ro)
    return ir;
  Ro = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ir = e, ir;
}
var cr, ko;
function _a() {
  return ko || (ko = 1, cr = Function.call.bind(Object.prototype.hasOwnProperty)), cr;
}
var sr, _o;
function Ws() {
  if (_o)
    return sr;
  _o = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = Ur(), n = {}, r = _a();
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
          } catch (g) {
            f = g;
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
  }, sr = a, sr;
}
var ur, Ao;
function Us() {
  if (Ao)
    return ur;
  Ao = 1;
  var e = ka(), t = Bs(), n = Ur(), r = _a(), a = Ws(), i = function() {
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
  return ur = function(s, u) {
    var l = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function f(P) {
      var k = P && (l && P[l] || P[d]);
      if (typeof k == "function")
        return k;
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
      any: w(),
      arrayOf: O,
      element: S(),
      elementType: h(),
      instanceOf: C,
      node: ae(),
      objectOf: L,
      oneOf: R,
      oneOfType: N,
      shape: re,
      exact: Z
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
        var k = {}, K = 0;
      function z(X, M, I, U, q, H, he) {
        if (U = U || v, H = H || I, he !== n) {
          if (u) {
            var _ = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw _.name = "Invariant Violation", _;
          } else if (process.env.NODE_ENV !== "production" && typeof console != "undefined") {
            var xe = U + ":" + I;
            !k[xe] && // Avoid spamming the console because they are often not actionable except for lib authors
            K < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + H + "` prop on `" + U + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), k[xe] = !0, K++);
          }
        }
        return M[I] == null ? X ? M[I] === null ? new y("The " + q + " `" + H + "` is marked as required " + ("in `" + U + "`, but its value is `null`.")) : new y("The " + q + " `" + H + "` is marked as required in " + ("`" + U + "`, but its value is `undefined`.")) : null : P(M, I, U, q, H);
      }
      var V = z.bind(null, !1);
      return V.isRequired = z.bind(null, !0), V;
    }
    function E(P) {
      function k(K, z, V, X, M, I) {
        var U = K[z], q = Y(U);
        if (q !== P) {
          var H = ne(U);
          return new y(
            "Invalid " + X + " `" + M + "` of type " + ("`" + H + "` supplied to `" + V + "`, expected ") + ("`" + P + "`."),
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
    function O(P) {
      function k(K, z, V, X, M) {
        if (typeof P != "function")
          return new y("Property `" + M + "` of component `" + V + "` has invalid PropType notation inside arrayOf.");
        var I = K[z];
        if (!Array.isArray(I)) {
          var U = Y(I);
          return new y("Invalid " + X + " `" + M + "` of type " + ("`" + U + "` supplied to `" + V + "`, expected an array."));
        }
        for (var q = 0; q < I.length; q++) {
          var H = P(I, q, V, X, M + "[" + q + "]", n);
          if (H instanceof Error)
            return H;
        }
        return null;
      }
      return b(k);
    }
    function S() {
      function P(k, K, z, V, X) {
        var M = k[K];
        if (!s(M)) {
          var I = Y(M);
          return new y("Invalid " + V + " `" + X + "` of type " + ("`" + I + "` supplied to `" + z + "`, expected a single ReactElement."));
        }
        return null;
      }
      return b(P);
    }
    function h() {
      function P(k, K, z, V, X) {
        var M = k[K];
        if (!e.isValidElementType(M)) {
          var I = Y(M);
          return new y("Invalid " + V + " `" + X + "` of type " + ("`" + I + "` supplied to `" + z + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return b(P);
    }
    function C(P) {
      function k(K, z, V, X, M) {
        if (!(K[z] instanceof P)) {
          var I = P.name || v, U = ge(K[z]);
          return new y("Invalid " + X + " `" + M + "` of type " + ("`" + U + "` supplied to `" + V + "`, expected ") + ("instance of `" + I + "`."));
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
      function k(K, z, V, X, M) {
        for (var I = K[z], U = 0; U < P.length; U++)
          if (g(I, P[U]))
            return null;
        var q = JSON.stringify(P, function(he, _) {
          var xe = ne(_);
          return xe === "symbol" ? String(_) : _;
        });
        return new y("Invalid " + X + " `" + M + "` of value `" + String(I) + "` " + ("supplied to `" + V + "`, expected one of " + q + "."));
      }
      return b(k);
    }
    function L(P) {
      function k(K, z, V, X, M) {
        if (typeof P != "function")
          return new y("Property `" + M + "` of component `" + V + "` has invalid PropType notation inside objectOf.");
        var I = K[z], U = Y(I);
        if (U !== "object")
          return new y("Invalid " + X + " `" + M + "` of type " + ("`" + U + "` supplied to `" + V + "`, expected an object."));
        for (var q in I)
          if (r(I, q)) {
            var H = P(I, q, V, X, M + "." + q, n);
            if (H instanceof Error)
              return H;
          }
        return null;
      }
      return b(k);
    }
    function N(P) {
      if (!Array.isArray(P))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), c;
      for (var k = 0; k < P.length; k++) {
        var K = P[k];
        if (typeof K != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ce(K) + " at index " + k + "."
          ), c;
      }
      function z(V, X, M, I, U) {
        for (var q = [], H = 0; H < P.length; H++) {
          var he = P[H], _ = he(V, X, M, I, U, n);
          if (_ == null)
            return null;
          _.data && r(_.data, "expectedType") && q.push(_.data.expectedType);
        }
        var xe = q.length > 0 ? ", expected one of type [" + q.join(", ") + "]" : "";
        return new y("Invalid " + I + " `" + U + "` supplied to " + ("`" + M + "`" + xe + "."));
      }
      return b(z);
    }
    function ae() {
      function P(k, K, z, V, X) {
        return B(k[K]) ? null : new y("Invalid " + V + " `" + X + "` supplied to " + ("`" + z + "`, expected a ReactNode."));
      }
      return b(P);
    }
    function ie(P, k, K, z, V) {
      return new y(
        (P || "React class") + ": " + k + " type `" + K + "." + z + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + V + "`."
      );
    }
    function re(P) {
      function k(K, z, V, X, M) {
        var I = K[z], U = Y(I);
        if (U !== "object")
          return new y("Invalid " + X + " `" + M + "` of type `" + U + "` " + ("supplied to `" + V + "`, expected `object`."));
        for (var q in P) {
          var H = P[q];
          if (typeof H != "function")
            return ie(V, X, M, q, ne(H));
          var he = H(I, q, V, X, M + "." + q, n);
          if (he)
            return he;
        }
        return null;
      }
      return b(k);
    }
    function Z(P) {
      function k(K, z, V, X, M) {
        var I = K[z], U = Y(I);
        if (U !== "object")
          return new y("Invalid " + X + " `" + M + "` of type `" + U + "` " + ("supplied to `" + V + "`, expected `object`."));
        var q = t({}, K[z], P);
        for (var H in q) {
          var he = P[H];
          if (r(P, H) && typeof he != "function")
            return ie(V, X, M, H, ne(he));
          if (!he)
            return new y(
              "Invalid " + X + " `" + M + "` key `" + H + "` supplied to `" + V + "`.\nBad object: " + JSON.stringify(K[z], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(P), null, "  ")
            );
          var _ = he(I, H, V, X, M + "." + H, n);
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
            var K = k.call(P), z;
            if (k !== P.entries) {
              for (; !(z = K.next()).done; )
                if (!B(z.value))
                  return !1;
            } else
              for (; !(z = K.next()).done; ) {
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
    function te(P, k) {
      return P === "symbol" ? !0 : k ? k["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && k instanceof Symbol : !1;
    }
    function Y(P) {
      var k = typeof P;
      return Array.isArray(P) ? "array" : P instanceof RegExp ? "object" : te(k, P) ? "symbol" : k;
    }
    function ne(P) {
      if (typeof P == "undefined" || P === null)
        return "" + P;
      var k = Y(P);
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
      return !P.constructor || !P.constructor.name ? v : P.constructor.name;
    }
    return p.checkPropTypes = a, p.resetWarningCache = a.resetWarningCache, p.PropTypes = p, p;
  }, ur;
}
var lr, Do;
function Vs() {
  if (Do)
    return lr;
  Do = 1;
  var e = Ur();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, lr = function() {
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
  }, lr;
}
if (process.env.NODE_ENV !== "production") {
  var Ys = ka(), zs = !0;
  Or.exports = Us()(Ys.isElement, zs);
} else
  Or.exports = Vs()();
var de = Or.exports;
const Aa = /* @__PURE__ */ si(de);
var Pr = "data-focus-lock", Da = "data-focus-lock-disabled", qs = "data-no-focus-lock", Hs = "data-autofocus-inside", Gs = "data-no-autofocus", fr = {
  width: "1px",
  height: "0px",
  padding: 0,
  overflow: "hidden",
  position: "fixed",
  top: "1px",
  left: "1px"
};
process.env.NODE_ENV !== "production" && Aa.node;
var Na = Br({}, function(e) {
  var t = e.target, n = e.currentTarget;
  return {
    target: t,
    currentTarget: n
  };
}), ja = Br(), Ks = Br(), Xs = ya({
  async: !0
  // focus-lock sidecar is not required on the server
  // however, it might be required for JSDOM tests
  // ssr: true,
}), Js = [], Vr = /* @__PURE__ */ D.forwardRef(function(t, n) {
  var r, a = D.useState(), i = a[0], c = a[1], s = D.useRef(), u = D.useRef(!1), l = D.useRef(null), d = t.children, f = t.disabled, v = t.noFocusGuards, p = t.persistentFocus, g = t.crossFrame, y = t.autoFocus, b = t.allowTextSelection, E = t.group, w = t.className, O = t.whiteList, S = t.hasPositiveIndices, h = t.shards, C = h === void 0 ? Js : h, R = t.as, L = R === void 0 ? "div" : R, N = t.lockProps, ae = N === void 0 ? {} : N, ie = t.sideCar, re = t.returnFocus, Z = t.focusOptions, B = t.onActivation, te = t.onDeactivation, Y = D.useState({}), ne = Y[0], ce = D.useCallback(function() {
    l.current = l.current || document && document.activeElement, s.current && B && B(s.current), u.current = !0;
  }, [B]), ge = D.useCallback(function() {
    u.current = !1, te && te(s.current);
  }, [te]);
  fe(function() {
    f || (l.current = null);
  }, []);
  var P = D.useCallback(function(U) {
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
  }, [re]), k = D.useCallback(function(U) {
    u.current && Na.useMedium(U);
  }, []), K = ja.useMedium, z = D.useCallback(function(U) {
    s.current !== U && (s.current = U, c(U));
  }, []);
  process.env.NODE_ENV !== "production" && (typeof b != "undefined" && console.warn("React-Focus-Lock: allowTextSelection is deprecated and enabled by default"), D.useEffect(function() {
    !s.current && typeof L != "string" && console.error("FocusLock: could not obtain ref to internal node");
  }, []));
  var V = en((r = {}, r[Da] = f && "disabled", r[Pr] = E, r), ae), X = v !== !0, M = X && v !== "tail", I = ma([n, z]);
  return /* @__PURE__ */ D.createElement(D.Fragment, null, X && [
    // nearest focus guard
    /* @__PURE__ */ D.createElement("div", {
      key: "guard-first",
      "data-focus-guard": !0,
      tabIndex: f ? -1 : 0,
      style: fr
    }),
    // first tabbed element guard
    S ? /* @__PURE__ */ D.createElement("div", {
      key: "guard-nearest",
      "data-focus-guard": !0,
      tabIndex: f ? -1 : 1,
      style: fr
    }) : null
  ], !f && /* @__PURE__ */ D.createElement(ie, {
    id: ne,
    sideCar: Xs,
    observed: i,
    disabled: f,
    persistentFocus: p,
    crossFrame: g,
    autoFocus: y,
    whiteList: O,
    shards: C,
    onActivation: ce,
    onDeactivation: ge,
    returnFocus: P,
    focusOptions: Z
  }), /* @__PURE__ */ D.createElement(L, en({
    ref: I
  }, V, {
    className: w,
    onBlur: K,
    onFocus: k
  }), d), M && /* @__PURE__ */ D.createElement("div", {
    "data-focus-guard": !0,
    tabIndex: f ? -1 : 0,
    style: fr
  }));
});
Vr.propTypes = process.env.NODE_ENV !== "production" ? {
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
Vr.defaultProps = {
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
const La = Vr;
function Tr(e, t) {
  return Tr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, a) {
    return r.__proto__ = a, r;
  }, Tr(e, t);
}
function Zs(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Tr(e, t);
}
function tn(e) {
  "@babel/helpers - typeof";
  return tn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, tn(e);
}
function Qs(e, t) {
  if (tn(e) !== "object" || e === null)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (tn(r) !== "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function eu(e) {
  var t = Qs(e, "string");
  return tn(t) === "symbol" ? t : String(t);
}
function tu(e, t, n) {
  return t = eu(t), t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function nu(e, t) {
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
      Zs(d, l);
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
        return /* @__PURE__ */ ke.createElement(a, this.props);
      }, d;
    }(ii);
    return tu(u, "displayName", "SideEffect(" + n(a) + ")"), u;
  };
}
var Ve = function(e) {
  for (var t = Array(e.length), n = 0; n < e.length; ++n)
    t[n] = e[n];
  return t;
}, Cn = function(e) {
  return Array.isArray(e) ? e : [e];
}, Ia = function(e) {
  return Array.isArray(e) ? e[0] : e;
}, ru = function(e) {
  if (e.nodeType !== Node.ELEMENT_NODE)
    return !1;
  var t = window.getComputedStyle(e, null);
  return !t || !t.getPropertyValue ? !1 : t.getPropertyValue("display") === "none" || t.getPropertyValue("visibility") === "hidden";
}, Fa = function(e) {
  return e.parentNode && e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    e.parentNode.host
  ) : e.parentNode;
}, Ma = function(e) {
  return e === document || e && e.nodeType === Node.DOCUMENT_NODE;
}, ou = function(e, t) {
  return !e || Ma(e) || !ru(e) && t(Fa(e));
}, Ba = function(e, t) {
  var n = e.get(t);
  if (n !== void 0)
    return n;
  var r = ou(t, Ba.bind(void 0, e));
  return e.set(t, r), r;
}, au = function(e, t) {
  return e && !Ma(e) ? su(e) ? t(Fa(e)) : !1 : !0;
}, Wa = function(e, t) {
  var n = e.get(t);
  if (n !== void 0)
    return n;
  var r = au(t, Wa.bind(void 0, e));
  return e.set(t, r), r;
}, Ua = function(e) {
  return e.dataset;
}, iu = function(e) {
  return e.tagName === "BUTTON";
}, Va = function(e) {
  return e.tagName === "INPUT";
}, Ya = function(e) {
  return Va(e) && e.type === "radio";
}, cu = function(e) {
  return !((Va(e) || iu(e)) && (e.type === "hidden" || e.disabled));
}, su = function(e) {
  var t = e.getAttribute(Gs);
  return ![!0, "true", ""].includes(t);
}, Yr = function(e) {
  var t;
  return !!(e && (!((t = Ua(e)) === null || t === void 0) && t.focusGuard));
}, Rn = function(e) {
  return !Yr(e);
}, uu = function(e) {
  return !!e;
}, lu = function(e, t) {
  var n = e.tabIndex - t.tabIndex, r = e.index - t.index;
  if (n) {
    if (!e.tabIndex)
      return 1;
    if (!t.tabIndex)
      return -1;
  }
  return n || r;
}, za = function(e, t, n) {
  return Ve(e).map(function(r, a) {
    return {
      node: r,
      index: a,
      tabIndex: n && r.tabIndex === -1 ? (r.dataset || {}).focusGuard ? 0 : -1 : r.tabIndex
    };
  }).filter(function(r) {
    return !t || r.tabIndex >= 0;
  }).sort(lu);
}, fu = [
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
], zr = fu.join(","), du = "".concat(zr, ", [data-focus-guard]"), qa = function(e, t) {
  return Ve((e.shadowRoot || e).children).reduce(function(n, r) {
    return n.concat(r.matches(t ? du : zr) ? [r] : [], qa(r));
  }, []);
}, vu = function(e, t) {
  var n;
  return e instanceof HTMLIFrameElement && (!((n = e.contentDocument) === null || n === void 0) && n.body) ? Nn([e.contentDocument.body], t) : [e];
}, Nn = function(e, t) {
  return e.reduce(function(n, r) {
    var a, i = qa(r, t), c = (a = []).concat.apply(a, i.map(function(s) {
      return vu(s, t);
    }));
    return n.concat(
      // add all tabbables inside and within shadow DOMs in DOM order
      c,
      // add if node is tabbable itself
      r.parentNode ? Ve(r.parentNode.querySelectorAll(zr)).filter(function(s) {
        return s === r;
      }) : []
    );
  }, []);
}, pu = function(e) {
  var t = e.querySelectorAll("[".concat(Hs, "]"));
  return Ve(t).map(function(n) {
    return Nn([n]);
  }).reduce(function(n, r) {
    return n.concat(r);
  }, []);
}, qr = function(e, t) {
  return Ve(e).filter(function(n) {
    return Ba(t, n);
  }).filter(function(n) {
    return cu(n);
  });
}, No = function(e, t) {
  return t === void 0 && (t = /* @__PURE__ */ new Map()), Ve(e).filter(function(n) {
    return Wa(t, n);
  });
}, $r = function(e, t, n) {
  return za(qr(Nn(e, n), t), !0, n);
}, jo = function(e, t) {
  return za(qr(Nn(e), t), !1);
}, mu = function(e, t) {
  return qr(pu(e), t);
}, Pt = function(e, t) {
  return e.shadowRoot ? Pt(e.shadowRoot, t) : Object.getPrototypeOf(e).contains !== void 0 && Object.getPrototypeOf(e).contains.call(e, t) ? !0 : Ve(e.children).some(function(n) {
    var r;
    if (n instanceof HTMLIFrameElement) {
      var a = (r = n.contentDocument) === null || r === void 0 ? void 0 : r.body;
      return a ? Pt(a, t) : !1;
    }
    return Pt(n, t);
  });
}, hu = function(e) {
  for (var t = /* @__PURE__ */ new Set(), n = e.length, r = 0; r < n; r += 1)
    for (var a = r + 1; a < n; a += 1) {
      var i = e[r].compareDocumentPosition(e[a]);
      (i & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0 && t.add(a), (i & Node.DOCUMENT_POSITION_CONTAINS) > 0 && t.add(r);
    }
  return e.filter(function(c, s) {
    return !t.has(s);
  });
}, Ha = function(e) {
  return e.parentNode ? Ha(e.parentNode) : e;
}, Hr = function(e) {
  var t = Cn(e);
  return t.filter(Boolean).reduce(function(n, r) {
    var a = r.getAttribute(Pr);
    return n.push.apply(n, a ? hu(Ve(Ha(r).querySelectorAll("[".concat(Pr, '="').concat(a, '"]:not([').concat(Da, '="disabled"])')))) : [r]), n;
  }, []);
}, gu = function(e) {
  try {
    return e();
  } catch (t) {
    return;
  }
}, nn = function(e) {
  if (e === void 0 && (e = document), !(!e || !e.activeElement)) {
    var t = e.activeElement;
    return t.shadowRoot ? nn(t.shadowRoot) : t instanceof HTMLIFrameElement && gu(function() {
      return t.contentWindow.document;
    }) ? nn(t.contentWindow.document) : t;
  }
}, yu = function(e, t) {
  return e === t;
}, bu = function(e, t) {
  return !!Ve(e.querySelectorAll("iframe")).some(function(n) {
    return yu(n, t);
  });
}, Ga = function(e, t) {
  return t === void 0 && (t = nn(Ia(e).ownerDocument)), !t || t.dataset && t.dataset.focusGuard ? !1 : Hr(e).some(function(n) {
    return Pt(n, t) || bu(n, t);
  });
}, wu = function(e) {
  e === void 0 && (e = document);
  var t = nn(e);
  return t ? Ve(e.querySelectorAll("[".concat(qs, "]"))).some(function(n) {
    return Pt(n, t);
  }) : !1;
}, xu = function(e, t) {
  return t.filter(Ya).filter(function(n) {
    return n.name === e.name;
  }).filter(function(n) {
    return n.checked;
  })[0] || e;
}, Gr = function(e, t) {
  return Ya(e) && e.name ? xu(e, t) : e;
}, Eu = function(e) {
  var t = /* @__PURE__ */ new Set();
  return e.forEach(function(n) {
    return t.add(Gr(n, e));
  }), e.filter(function(n) {
    return t.has(n);
  });
}, Lo = function(e) {
  return e[0] && e.length > 1 ? Gr(e[0], e) : e[0];
}, Io = function(e, t) {
  return e.length > 1 ? e.indexOf(Gr(e[t], e)) : t;
}, Ka = "NEW_FOCUS", Su = function(e, t, n, r) {
  var a = e.length, i = e[0], c = e[a - 1], s = Yr(n);
  if (!(n && e.indexOf(n) >= 0)) {
    var u = n !== void 0 ? t.indexOf(n) : -1, l = r ? t.indexOf(r) : u, d = r ? e.indexOf(r) : -1, f = u - l, v = t.indexOf(i), p = t.indexOf(c), g = Eu(t), y = n !== void 0 ? g.indexOf(n) : -1, b = y - (r ? g.indexOf(r) : u), E = Io(e, 0), w = Io(e, a - 1);
    if (u === -1 || d === -1)
      return Ka;
    if (!f && d >= 0)
      return d;
    if (u <= v && s && Math.abs(f) > 1)
      return w;
    if (u >= p && s && Math.abs(f) > 1)
      return E;
    if (f && Math.abs(b) > 1)
      return d;
    if (u <= v)
      return w;
    if (u > p)
      return E;
    if (f)
      return Math.abs(f) > 1 ? d : (a + d + f) % a;
  }
}, Ou = function(e) {
  return function(t) {
    var n, r = (n = Ua(t)) === null || n === void 0 ? void 0 : n.autofocus;
    return (
      // @ts-expect-error
      t.autofocus || //
      r !== void 0 && r !== "false" || //
      e.indexOf(t) >= 0
    );
  };
}, Pu = function(e, t, n) {
  var r = e.map(function(i) {
    var c = i.node;
    return c;
  }), a = No(r.filter(Ou(n)));
  return a && a.length ? Lo(a) : Lo(No(t));
}, Cr = function(e, t) {
  return t === void 0 && (t = []), t.push(e), e.parentNode && Cr(e.parentNode.host || e.parentNode, t), t;
}, dr = function(e, t) {
  for (var n = Cr(e), r = Cr(t), a = 0; a < n.length; a += 1) {
    var i = n[a];
    if (r.indexOf(i) >= 0)
      return i;
  }
  return !1;
}, Xa = function(e, t, n) {
  var r = Cn(e), a = Cn(t), i = r[0], c = !1;
  return a.filter(Boolean).forEach(function(s) {
    c = dr(c || s, s) || c, n.filter(Boolean).forEach(function(u) {
      var l = dr(i, u);
      l && (!c || Pt(l, c) ? c = l : c = dr(l, c));
    });
  }), c;
}, Tu = function(e, t) {
  return e.reduce(function(n, r) {
    return n.concat(mu(r, t));
  }, []);
}, $u = function(e, t) {
  var n = /* @__PURE__ */ new Map();
  return t.forEach(function(r) {
    return n.set(r.node, r);
  }), e.map(function(r) {
    return n.get(r);
  }).filter(uu);
}, Cu = function(e, t) {
  var n = nn(Cn(e).length > 0 ? document : Ia(e).ownerDocument), r = Hr(e).filter(Rn), a = Xa(n || e, e, r), i = /* @__PURE__ */ new Map(), c = jo(r, i), s = $r(r, i).filter(function(p) {
    var g = p.node;
    return Rn(g);
  });
  if (!(!s[0] && (s = c, !s[0]))) {
    var u = jo([a], i).map(function(p) {
      var g = p.node;
      return g;
    }), l = $u(u, s), d = l.map(function(p) {
      var g = p.node;
      return g;
    }), f = Su(d, u, n, t);
    if (f === Ka) {
      var v = Pu(c, d, Tu(r, i));
      if (v)
        return { node: v };
      console.warn("focus-lock: cannot find any node to move focus into");
      return;
    }
    return f === void 0 ? f : l[f];
  }
}, Ru = function(e) {
  var t = Hr(e).filter(Rn), n = Xa(e, e, t), r = /* @__PURE__ */ new Map(), a = $r([n], r, !0), i = $r(t, r).filter(function(c) {
    var s = c.node;
    return Rn(s);
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
      guard: Yr(s)
    };
  });
}, ku = function(e, t) {
  "focus" in e && e.focus(t), "contentWindow" in e && e.contentWindow && e.contentWindow.focus();
}, vr = 0, pr = !1, Ja = function(e, t, n) {
  n === void 0 && (n = {});
  var r = Cu(e, t);
  if (!pr && r) {
    if (vr > 2) {
      console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"), pr = !0, setTimeout(function() {
        pr = !1;
      }, 1);
      return;
    }
    vr++, ku(r.node, n.focusOptions), vr--;
  }
};
function Kr(e) {
  setTimeout(e, 1);
}
var _u = function() {
  return document && document.activeElement === document.body;
}, Au = function() {
  return _u() || wu();
}, Tt = null, Et = null, $t = null, rn = !1, Du = function() {
  return !0;
}, Nu = function(t) {
  return (Tt.whiteList || Du)(t);
}, ju = function(t, n) {
  $t = {
    observerNode: t,
    portaledElement: n
  };
}, Lu = function(t) {
  return $t && $t.portaledElement === t;
};
function Fo(e, t, n, r) {
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
var Iu = function(t) {
  return t && "current" in t ? t.current : t;
}, Fu = function(t) {
  return t ? !!rn : rn === "meanwhile";
}, Mu = function e(t, n, r) {
  return n && // find host equal to active element and check nested active element
  (n.host === t && (!n.activeElement || r.contains(n.activeElement)) || n.parentNode && e(t, n.parentNode, r));
}, Bu = function(t, n) {
  return n.some(function(r) {
    return Mu(t, r, r);
  });
}, kn = function() {
  var t = !1;
  if (Tt) {
    var n = Tt, r = n.observed, a = n.persistentFocus, i = n.autoFocus, c = n.shards, s = n.crossFrame, u = n.focusOptions, l = r || $t && $t.portaledElement, d = document && document.activeElement;
    if (l) {
      var f = [l].concat(c.map(Iu).filter(Boolean));
      if ((!d || Nu(d)) && (a || Fu(s) || !Au() || !Et && i) && (l && !// active element is "inside" working area
      (Ga(f) || // check for shadow-dom contained elements
      d && Bu(d, f) || Lu(d)) && (document && !Et && d && !i ? (d.blur && d.blur(), document.body.focus()) : (t = Ja(f, Et, {
        focusOptions: u
      }), $t = {})), rn = !1, Et = document && document.activeElement), document) {
        var v = document && document.activeElement, p = Ru(f), g = p.map(function(y) {
          var b = y.node;
          return b;
        }).indexOf(v);
        g > -1 && (p.filter(function(y) {
          var b = y.guard, E = y.node;
          return b && E.dataset.focusAutoGuard;
        }).forEach(function(y) {
          var b = y.node;
          return b.removeAttribute("tabIndex");
        }), Fo(g, p.length, 1, p), Fo(g, -1, -1, p));
      }
    }
  }
  return t;
}, Za = function(t) {
  kn() && t && (t.stopPropagation(), t.preventDefault());
}, Xr = function() {
  return Kr(kn);
}, Wu = function(t) {
  var n = t.target, r = t.currentTarget;
  r.contains(n) || ju(r, n);
}, Uu = function() {
  return null;
};
process.env.NODE_ENV !== "production" && Aa.node.isRequired;
var Qa = function() {
  rn = "just", Kr(function() {
    rn = "meanwhile";
  });
}, Vu = function() {
  document.addEventListener("focusin", Za), document.addEventListener("focusout", Xr), window.addEventListener("blur", Qa);
}, Yu = function() {
  document.removeEventListener("focusin", Za), document.removeEventListener("focusout", Xr), window.removeEventListener("blur", Qa);
};
function zu(e) {
  return e.filter(function(t) {
    var n = t.disabled;
    return !n;
  });
}
function qu(e) {
  var t = e.slice(-1)[0];
  t && !Tt && Vu();
  var n = Tt, r = n && t && t.id === n.id;
  Tt = t, n && !r && (n.onDeactivation(), e.filter(function(a) {
    var i = a.id;
    return i === n.id;
  }).length || n.returnFocus(!t)), t ? (Et = null, (!r || n.observed !== t.observed) && t.onActivation(), kn(), Kr(kn)) : (Yu(), Et = null);
}
Na.assignSyncMedium(Wu);
ja.assignMedium(Xr);
Ks.assignMedium(function(e) {
  return e({
    moveFocusInside: Ja,
    focusInside: Ga
  });
});
const Hu = nu(zu, qu)(Uu);
var ei = /* @__PURE__ */ D.forwardRef(function(t, n) {
  return /* @__PURE__ */ D.createElement(La, en({
    sideCar: Hu,
    ref: n
  }, t));
}), ti = La.propTypes || {};
ti.sideCar;
var Gu = Is(ti, ["sideCar"]);
ei.propTypes = process.env.NODE_ENV !== "production" ? Gu : {};
const Ku = ei;
const Xu = (e) => {
  const { children: t, open: n, onOpenChange: r, disableBackdropClick: a, disableEscapeKey: i, contentClassName: c } = e, [s, u] = oe(!0), l = ye(null);
  return fe(() => (s && n && (document.body.style.overflow = "hidden"), () => {
    document.body.style.overflow = "visible";
  }), [s, n]), fe(() => {
    if (a)
      return;
    const d = (f) => {
      !l.current || l.current.contains(f.target) || (r(), u(!1));
    };
    return document.addEventListener("mousedown", d), document.addEventListener("touchstart", d), () => {
      document.removeEventListener("mousedown", d), document.removeEventListener("touchstart", d);
    };
  }, [a, r]), fe(() => {
    if (i)
      return;
    const d = (f) => {
      f.key === "Escape" && (r(), u(!1));
    };
    return document.addEventListener("keydown", d), () => {
      document.removeEventListener("keydown", d);
    };
  }, [a, i, r]), /* @__PURE__ */ T.jsx("div", { className: "Modal-backdrop", children: /* @__PURE__ */ T.jsx(
    "div",
    {
      ref: l,
      "aria-modal": "true",
      role: "dialog",
      className: ee({
        "Modal-content": !0,
        [c || ""]: !!c
      }),
      children: t
    }
  ) });
}, sl = (e) => {
  const {
    open: t,
    onOpenChange: n,
    children: r,
    disableBackdropClick: a = !1,
    disableEscapeKey: i = !1,
    contentClassName: c
  } = e;
  return t ? /* @__PURE__ */ T.jsx(Ku, { children: /* @__PURE__ */ T.jsx("div", { className: "Modal", children: /* @__PURE__ */ T.jsx(
    Xu,
    {
      open: t,
      onOpenChange: n,
      disableBackdropClick: a,
      disableEscapeKey: i,
      contentClassName: c,
      children: r
    }
  ) }) }) : null;
};
const Mo = "...";
var Sn = /* @__PURE__ */ ((e) => (e.ROUNDED = "rounded", e.SQUARED = "squared", e))(Sn || {});
const ul = (e) => {
  const {
    currentPage: t,
    onPageChange: n,
    pageCount: r,
    boundaryCount: a = 1,
    siblingCount: i = 1,
    buttonAriaLabel: c = "Go to page",
    nextButtonAriaLabel: s = "Go to next page",
    prevButtonAriaLabel: u = "Go to previous page",
    variant: l = Sn.SQUARED
  } = e, d = (w, O) => {
    const S = O - w + 1;
    return Array.from({ length: S }, (h, C) => w + C);
  }, f = d(1, Math.min(a, r)), v = d(Math.max(r - a + 1, a + 1), r), p = Math.max(
    Math.min(t - i, r - a - i * 2 - 1),
    a + 2
  ), g = Math.min(
    Math.max(t + i, a + i * 2 + 2),
    v.length > 0 ? v[0] - 2 : r - 1
  ), y = () => p > a + 2 ? [Mo] : a + 1 < r - a ? [a + 1] : [], b = () => g < r - a - 1 ? [Mo] : r - a > a ? [r - a] : [], E = [
    ...f,
    ...y(),
    ...d(p, g),
    ...b(),
    ...v
  ];
  return /* @__PURE__ */ T.jsxs("div", { className: "Pagination", role: "pagination", children: [
    /* @__PURE__ */ T.jsx(
      "button",
      {
        className: "Pagination-arrow-button",
        "aria-label": u,
        "aria-controls": "prev",
        disabled: t === 1,
        "aria-disabled": t === 1,
        onClick: () => n(t - 1),
        children: /* @__PURE__ */ T.jsx(Yo, {})
      }
    ),
    E.map((w, O) => /* @__PURE__ */ T.jsx(
      "button",
      ve(G({
        className: ee({
          "Pagination-number-button": !0,
          "Pagination-number-button-squared": l === Sn.SQUARED,
          "Pagination-number-button-rounded": l === Sn.ROUNDED
        })
      }, typeof w == "number" ? {
        "aria-current": t === w,
        "aria-label": `${c} ${w}`,
        onClick: () => n(w)
      } : {}), {
        children: w
      }),
      O
    )),
    /* @__PURE__ */ T.jsx(
      "button",
      {
        "aria-label": s,
        className: "Pagination-arrow-button",
        "aria-controls": "next",
        disabled: t === r,
        "aria-disabled": t === r,
        onClick: () => n(t + 1),
        children: /* @__PURE__ */ T.jsx(kr, {})
      }
    )
  ] });
};
export {
  yi as Accordion,
  ut as BUTTON_COLOR,
  Ye as BUTTON_SIZE,
  fi as BUTTON_TYPE,
  ze as BUTTON_VARIANT,
  il as Breadcrumbs,
  di as Button,
  wt as CHECKBOX_SIZE,
  Ae as CHECKBOX_THEME,
  hi as Checkbox,
  Pe as DROPDOWN_SIZE,
  xt as DROPDOWN_TYPE,
  Ls as Dropdown,
  bt as INPUT_SIZE,
  Gt as INPUT_THEME,
  lt as INPUT_TYPE,
  bi as IconButton,
  mi as Input,
  sl as Modal,
  En as PROGRESS_BAR_SIZE,
  ul as Pagination,
  js as Popover,
  cl as ProgressBar,
  qe as SWITCH_SIZE,
  Kt as SWITCH_TAGS_SIZE,
  yn as SWITCH_TAGS_VARIANT,
  Be as SWITCH_THEME,
  gi as Switch,
  nl as SwitchTags,
  yr as TABS_SIZE,
  gn as TAGS_SIZE,
  el as Tabs,
  tl as Tags
};
