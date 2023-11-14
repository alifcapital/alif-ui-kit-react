import './index.css';
var xo = Object.defineProperty, Co = Object.defineProperties;
var $o = Object.getOwnPropertyDescriptors;
var Xt = Object.getOwnPropertySymbols;
var cr = Object.prototype.hasOwnProperty, lr = Object.prototype.propertyIsEnumerable;
var sr = (e, t, n) => t in e ? xo(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, L = (e, t) => {
  for (var n in t || (t = {}))
    cr.call(t, n) && sr(e, n, t[n]);
  if (Xt)
    for (var n of Xt(t))
      lr.call(t, n) && sr(e, n, t[n]);
  return e;
}, Q = (e, t) => Co(e, $o(t));
var oe = (e, t) => {
  var n = {};
  for (var r in e)
    cr.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && Xt)
    for (var r of Xt(e))
      t.indexOf(r) < 0 && lr.call(e, r) && (n[r] = e[r]);
  return n;
};
var Re = (e, t, n) => new Promise((r, i) => {
  var a = (l) => {
    try {
      c(n.next(l));
    } catch (u) {
      i(u);
    }
  }, s = (l) => {
    try {
      c(n.throw(l));
    } catch (u) {
      i(u);
    }
  }, c = (l) => l.done ? r(l.value) : Promise.resolve(l.value).then(a, s);
  c((n = n.apply(e, t)).next());
});
import * as j from "react";
import ye, { useState as U, useLayoutEffect as Fe, useEffect as te, useMemo as at, useRef as re, useCallback as ot, createContext as Wn, createElement as ee, useContext as Nr, forwardRef as xe, Children as mt, isValidElement as zt, cloneElement as Hn, Fragment as jr, useReducer as So } from "react";
import * as Eo from "react-dom";
import { flushSync as Lr } from "react-dom";
var zn = { exports: {} }, It = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ur;
function Po() {
  if (ur)
    return It;
  ur = 1;
  var e = ye, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(c, l, u) {
    var v, p = {}, d = null, m = null;
    u !== void 0 && (d = "" + u), l.key !== void 0 && (d = "" + l.key), l.ref !== void 0 && (m = l.ref);
    for (v in l)
      r.call(l, v) && !a.hasOwnProperty(v) && (p[v] = l[v]);
    if (c && c.defaultProps)
      for (v in l = c.defaultProps, l)
        p[v] === void 0 && (p[v] = l[v]);
    return { $$typeof: t, type: c, key: d, ref: m, props: p, _owner: i.current };
  }
  return It.Fragment = n, It.jsx = s, It.jsxs = s, It;
}
var Ft = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fr;
function Ro() {
  return fr || (fr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = ye, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), c = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), g = Symbol.iterator, w = "@@iterator";
    function b(o) {
      if (o === null || typeof o != "object")
        return null;
      var f = g && o[g] || o[w];
      return typeof f == "function" ? f : null;
    }
    var C = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(o) {
      {
        for (var f = arguments.length, h = new Array(f > 1 ? f - 1 : 0), $ = 1; $ < f; $++)
          h[$ - 1] = arguments[$];
        E("error", o, h);
      }
    }
    function E(o, f, h) {
      {
        var $ = C.ReactDebugCurrentFrame, _ = $.getStackAddendum();
        _ !== "" && (f += "%s", h = h.concat([_]));
        var N = h.map(function(T) {
          return String(T);
        });
        N.unshift("Warning: " + f), Function.prototype.apply.call(console[o], console, N);
      }
    }
    var S = !1, x = !1, k = !1, O = !1, D = !1, A;
    A = Symbol.for("react.module.reference");
    function K(o) {
      return !!(typeof o == "string" || typeof o == "function" || o === r || o === a || D || o === i || o === u || o === v || O || o === m || S || x || k || typeof o == "object" && o !== null && (o.$$typeof === d || o.$$typeof === p || o.$$typeof === s || o.$$typeof === c || o.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      o.$$typeof === A || o.getModuleId !== void 0));
    }
    function G(o, f, h) {
      var $ = o.displayName;
      if ($)
        return $;
      var _ = f.displayName || f.name || "";
      return _ !== "" ? h + "(" + _ + ")" : h;
    }
    function H(o) {
      return o.displayName || "Context";
    }
    function W(o) {
      if (o == null)
        return null;
      if (typeof o.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof o == "function")
        return o.displayName || o.name || null;
      if (typeof o == "string")
        return o;
      switch (o) {
        case r:
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
      if (typeof o == "object")
        switch (o.$$typeof) {
          case c:
            var f = o;
            return H(f) + ".Consumer";
          case s:
            var h = o;
            return H(h._context) + ".Provider";
          case l:
            return G(o, o.render, "ForwardRef");
          case p:
            var $ = o.displayName || null;
            return $ !== null ? $ : W(o.type) || "Memo";
          case d: {
            var _ = o, N = _._payload, T = _._init;
            try {
              return W(T(N));
            } catch (R) {
              return null;
            }
          }
        }
      return null;
    }
    var I = Object.assign, Y = 0, z, q, X, ae, Ce, ve, Ne;
    function Oe() {
    }
    Oe.__reactDisabledLog = !0;
    function Xe() {
      {
        if (Y === 0) {
          z = console.log, q = console.info, X = console.warn, ae = console.error, Ce = console.group, ve = console.groupCollapsed, Ne = console.groupEnd;
          var o = {
            configurable: !0,
            enumerable: !0,
            value: Oe,
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
        Y++;
      }
    }
    function ke() {
      {
        if (Y--, Y === 0) {
          var o = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: I({}, o, {
              value: z
            }),
            info: I({}, o, {
              value: q
            }),
            warn: I({}, o, {
              value: X
            }),
            error: I({}, o, {
              value: ae
            }),
            group: I({}, o, {
              value: Ce
            }),
            groupCollapsed: I({}, o, {
              value: ve
            }),
            groupEnd: I({}, o, {
              value: Ne
            })
          });
        }
        Y < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ie = C.ReactCurrentDispatcher, J;
    function $e(o, f, h) {
      {
        if (J === void 0)
          try {
            throw Error();
          } catch (_) {
            var $ = _.stack.trim().match(/\n( *(at )?)/);
            J = $ && $[1] || "";
          }
        return `
` + J + o;
      }
    }
    var me = !1, Se;
    {
      var xt = typeof WeakMap == "function" ? WeakMap : Map;
      Se = new xt();
    }
    function He(o, f) {
      if (!o || me)
        return "";
      {
        var h = Se.get(o);
        if (h !== void 0)
          return h;
      }
      var $;
      me = !0;
      var _ = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var N;
      N = ie.current, ie.current = null, Xe();
      try {
        if (f) {
          var T = function() {
            throw Error();
          };
          if (Object.defineProperty(T.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(T, []);
            } catch (ne) {
              $ = ne;
            }
            Reflect.construct(o, [], T);
          } else {
            try {
              T.call();
            } catch (ne) {
              $ = ne;
            }
            o.call(T.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ne) {
            $ = ne;
          }
          o();
        }
      } catch (ne) {
        if (ne && $ && typeof ne.stack == "string") {
          for (var R = ne.stack.split(`
`), V = $.stack.split(`
`), F = R.length - 1, M = V.length - 1; F >= 1 && M >= 0 && R[F] !== V[M]; )
            M--;
          for (; F >= 1 && M >= 0; F--, M--)
            if (R[F] !== V[M]) {
              if (F !== 1 || M !== 1)
                do
                  if (F--, M--, M < 0 || R[F] !== V[M]) {
                    var Z = `
` + R[F].replace(" at new ", " at ");
                    return o.displayName && Z.includes("<anonymous>") && (Z = Z.replace("<anonymous>", o.displayName)), typeof o == "function" && Se.set(o, Z), Z;
                  }
                while (F >= 1 && M >= 0);
              break;
            }
        }
      } finally {
        me = !1, ie.current = N, ke(), Error.prepareStackTrace = _;
      }
      var fe = o ? o.displayName || o.name : "", Lt = fe ? $e(fe) : "";
      return typeof o == "function" && Se.set(o, Lt), Lt;
    }
    function Ct(o, f, h) {
      return He(o, !1);
    }
    function $t(o) {
      var f = o.prototype;
      return !!(f && f.isReactComponent);
    }
    function he(o, f, h) {
      if (o == null)
        return "";
      if (typeof o == "function")
        return He(o, $t(o));
      if (typeof o == "string")
        return $e(o);
      switch (o) {
        case u:
          return $e("Suspense");
        case v:
          return $e("SuspenseList");
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case l:
            return Ct(o.render);
          case p:
            return he(o.type, f, h);
          case d: {
            var $ = o, _ = $._payload, N = $._init;
            try {
              return he(N(_), f, h);
            } catch (T) {
            }
          }
        }
      return "";
    }
    var ce = Object.prototype.hasOwnProperty, Ue = {}, Je = C.ReactDebugCurrentFrame;
    function Ee(o) {
      if (o) {
        var f = o._owner, h = he(o.type, o._source, f ? f.type : null);
        Je.setExtraStackFrame(h);
      } else
        Je.setExtraStackFrame(null);
    }
    function St(o, f, h, $, _) {
      {
        var N = Function.call.bind(ce);
        for (var T in o)
          if (N(o, T)) {
            var R = void 0;
            try {
              if (typeof o[T] != "function") {
                var V = Error(($ || "React class") + ": " + h + " type `" + T + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[T] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw V.name = "Invariant Violation", V;
              }
              R = o[T](f, T, $, h, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (F) {
              R = F;
            }
            R && !(R instanceof Error) && (Ee(_), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", $ || "React class", h, T, typeof R), Ee(null)), R instanceof Error && !(R.message in Ue) && (Ue[R.message] = !0, Ee(_), y("Failed %s type: %s", h, R.message), Ee(null));
          }
      }
    }
    var Et = Array.isArray;
    function ge(o) {
      return Et(o);
    }
    function gn(o) {
      {
        var f = typeof Symbol == "function" && Symbol.toStringTag, h = f && o[Symbol.toStringTag] || o.constructor.name || "Object";
        return h;
      }
    }
    function bn(o) {
      try {
        return Pt(o), !1;
      } catch (f) {
        return !0;
      }
    }
    function Pt(o) {
      return "" + o;
    }
    function Rt(o) {
      if (bn(o))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", gn(o)), Pt(o);
    }
    var Pe = C.ReactCurrentOwner, yn = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ot, kt, Ze;
    Ze = {};
    function wn(o) {
      if (ce.call(o, "ref")) {
        var f = Object.getOwnPropertyDescriptor(o, "ref").get;
        if (f && f.isReactWarning)
          return !1;
      }
      return o.ref !== void 0;
    }
    function xn(o) {
      if (ce.call(o, "key")) {
        var f = Object.getOwnPropertyDescriptor(o, "key").get;
        if (f && f.isReactWarning)
          return !1;
      }
      return o.key !== void 0;
    }
    function Cn(o, f) {
      if (typeof o.ref == "string" && Pe.current && f && Pe.current.stateNode !== f) {
        var h = W(Pe.current.type);
        Ze[h] || (y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', W(Pe.current.type), o.ref), Ze[h] = !0);
      }
    }
    function $n(o, f) {
      {
        var h = function() {
          Ot || (Ot = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", f));
        };
        h.isReactWarning = !0, Object.defineProperty(o, "key", {
          get: h,
          configurable: !0
        });
      }
    }
    function Sn(o, f) {
      {
        var h = function() {
          kt || (kt = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", f));
        };
        h.isReactWarning = !0, Object.defineProperty(o, "ref", {
          get: h,
          configurable: !0
        });
      }
    }
    var En = function(o, f, h, $, _, N, T) {
      var R = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: o,
        key: f,
        ref: h,
        props: T,
        // Record the component responsible for creating this element.
        _owner: N
      };
      return R._store = {}, Object.defineProperty(R._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(R, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: $
      }), Object.defineProperty(R, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: _
      }), Object.freeze && (Object.freeze(R.props), Object.freeze(R)), R;
    };
    function Pn(o, f, h, $, _) {
      {
        var N, T = {}, R = null, V = null;
        h !== void 0 && (Rt(h), R = "" + h), xn(f) && (Rt(f.key), R = "" + f.key), wn(f) && (V = f.ref, Cn(f, _));
        for (N in f)
          ce.call(f, N) && !yn.hasOwnProperty(N) && (T[N] = f[N]);
        if (o && o.defaultProps) {
          var F = o.defaultProps;
          for (N in F)
            T[N] === void 0 && (T[N] = F[N]);
        }
        if (R || V) {
          var M = typeof o == "function" ? o.displayName || o.name || "Unknown" : o;
          R && $n(T, M), V && Sn(T, M);
        }
        return En(o, R, V, _, $, Pe.current, T);
      }
    }
    var Qe = C.ReactCurrentOwner, Tt = C.ReactDebugCurrentFrame;
    function ue(o) {
      if (o) {
        var f = o._owner, h = he(o.type, o._source, f ? f.type : null);
        Tt.setExtraStackFrame(h);
      } else
        Tt.setExtraStackFrame(null);
    }
    var et;
    et = !1;
    function tt(o) {
      return typeof o == "object" && o !== null && o.$$typeof === t;
    }
    function At() {
      {
        if (Qe.current) {
          var o = W(Qe.current.type);
          if (o)
            return `

Check the render method of \`` + o + "`.";
        }
        return "";
      }
    }
    function Rn(o) {
      {
        if (o !== void 0) {
          var f = o.fileName.replace(/^.*[\\\/]/, ""), h = o.lineNumber;
          return `

Check your code at ` + f + ":" + h + ".";
        }
        return "";
      }
    }
    var _t = {};
    function On(o) {
      {
        var f = At();
        if (!f) {
          var h = typeof o == "string" ? o : o.displayName || o.name;
          h && (f = `

Check the top-level render call using <` + h + ">.");
        }
        return f;
      }
    }
    function Dt(o, f) {
      {
        if (!o._store || o._store.validated || o.key != null)
          return;
        o._store.validated = !0;
        var h = On(f);
        if (_t[h])
          return;
        _t[h] = !0;
        var $ = "";
        o && o._owner && o._owner !== Qe.current && ($ = " It was passed a child from " + W(o._owner.type) + "."), ue(o), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', h, $), ue(null);
      }
    }
    function Nt(o, f) {
      {
        if (typeof o != "object")
          return;
        if (ge(o))
          for (var h = 0; h < o.length; h++) {
            var $ = o[h];
            tt($) && Dt($, f);
          }
        else if (tt(o))
          o._store && (o._store.validated = !0);
        else if (o) {
          var _ = b(o);
          if (typeof _ == "function" && _ !== o.entries)
            for (var N = _.call(o), T; !(T = N.next()).done; )
              tt(T.value) && Dt(T.value, f);
        }
      }
    }
    function kn(o) {
      {
        var f = o.type;
        if (f == null || typeof f == "string")
          return;
        var h;
        if (typeof f == "function")
          h = f.propTypes;
        else if (typeof f == "object" && (f.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        f.$$typeof === p))
          h = f.propTypes;
        else
          return;
        if (h) {
          var $ = W(f);
          St(h, o.props, "prop", $, o);
        } else if (f.PropTypes !== void 0 && !et) {
          et = !0;
          var _ = W(f);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _ || "Unknown");
        }
        typeof f.getDefaultProps == "function" && !f.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Tn(o) {
      {
        for (var f = Object.keys(o.props), h = 0; h < f.length; h++) {
          var $ = f[h];
          if ($ !== "children" && $ !== "key") {
            ue(o), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", $), ue(null);
            break;
          }
        }
        o.ref !== null && (ue(o), y("Invalid attribute `ref` supplied to `React.Fragment`."), ue(null));
      }
    }
    function jt(o, f, h, $, _, N) {
      {
        var T = K(o);
        if (!T) {
          var R = "";
          (o === void 0 || typeof o == "object" && o !== null && Object.keys(o).length === 0) && (R += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var V = Rn(_);
          V ? R += V : R += At();
          var F;
          o === null ? F = "null" : ge(o) ? F = "array" : o !== void 0 && o.$$typeof === t ? (F = "<" + (W(o.type) || "Unknown") + " />", R = " Did you accidentally export a JSX literal instead of a component?") : F = typeof o, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", F, R);
        }
        var M = Pn(o, f, h, _, N);
        if (M == null)
          return M;
        if (T) {
          var Z = f.children;
          if (Z !== void 0)
            if ($)
              if (ge(Z)) {
                for (var fe = 0; fe < Z.length; fe++)
                  Nt(Z[fe], o);
                Object.freeze && Object.freeze(Z);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Nt(Z, o);
        }
        return o === r ? Tn(M) : kn(M), M;
      }
    }
    function An(o, f, h) {
      return jt(o, f, h, !0);
    }
    function _n(o, f, h) {
      return jt(o, f, h, !1);
    }
    var Dn = _n, Nn = An;
    Ft.Fragment = r, Ft.jsx = Dn, Ft.jsxs = Nn;
  }()), Ft;
}
process.env.NODE_ENV === "production" ? zn.exports = Po() : zn.exports = Ro();
var P = zn.exports;
function Ir(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = Ir(e[t])) && (r && (r += " "), r += n);
    else
      for (t in e)
        e[t] && (r && (r += " "), r += t);
  return r;
}
function B() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = Ir(e)) && (r && (r += " "), r += t);
  return r;
}
var je = /* @__PURE__ */ ((e) => (e.Large = "large", e.Medium = "medium", e.Small = "small", e))(je || {}), Le = /* @__PURE__ */ ((e) => (e.Contained = "contained", e.Outlined = "outlined", e.Text = "text", e))(Le || {}), nt = /* @__PURE__ */ ((e) => (e.Primary = "primary", e.Secondary = "secondary", e.Green = "green", e))(nt || {}), Oo = /* @__PURE__ */ ((e) => (e.Submit = "submit", e.Reset = "reset", e.Button = "button", e))(Oo || {});
const ko = ye.forwardRef((e, t) => {
  const {
    id: n,
    ariaLabel: r,
    className: i,
    children: a,
    disabled: s,
    rounded: c,
    endIcon: l,
    startIcon: u,
    color: v = nt.Primary,
    withIcon: p,
    size: d = je.Medium,
    variant: m = Le.Contained,
    type: g = "button",
    onClick: w
  } = e, b = () => {
    w && w();
  };
  return /* @__PURE__ */ P.jsx(
    "button",
    {
      onClick: b,
      ref: t,
      type: g,
      "aria-label": r,
      id: n,
      disabled: s,
      className: B({
        Button: !0,
        "Button-contained": m === Le.Contained,
        "Button-outlined": m === Le.Outlined,
        "Button-outlined-disable": !!s && m === Le.Outlined,
        "Button-text": m === Le.Text,
        "Button-text-small": d === je.Small && m === Le.Text,
        "Button-text-large": d === je.Large && m === Le.Text,
        "Button-text-disable": !!s && m === Le.Text,
        "Button-primary": d === je.Medium,
        "Button-primary-disable": !!s && v === nt.Primary,
        "Button-secondary": v === nt.Secondary,
        "Button-secondary-disable": !!s && v === nt.Secondary,
        "Button-green": v === nt.Green,
        "Button-green-disable": !!s && v === nt.Green,
        "Button-small": d === je.Small,
        "Button-large": d === je.Large,
        "Button-round": !!c,
        "Button-only_icon": !!p,
        "Button-only_icon-small": !!p && d === je.Small,
        "Button-only_icon-large": !!p && d === je.Large,
        [i || ""]: !!i
      }),
      children: /* @__PURE__ */ P.jsxs("div", { className: "Button-children", children: [
        u && /* @__PURE__ */ P.jsx("span", { className: "Button-icon-left", children: u }),
        a,
        l && /* @__PURE__ */ P.jsx("span", { className: "Button-icon-right", children: l })
      ] })
    }
  );
});
ko.displayName = "Button";
var Un = { exports: {} }, Mt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dr;
function To() {
  if (dr)
    return Mt;
  dr = 1;
  var e = ye, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(c, l, u) {
    var v, p = {}, d = null, m = null;
    u !== void 0 && (d = "" + u), l.key !== void 0 && (d = "" + l.key), l.ref !== void 0 && (m = l.ref);
    for (v in l)
      r.call(l, v) && !a.hasOwnProperty(v) && (p[v] = l[v]);
    if (c && c.defaultProps)
      for (v in l = c.defaultProps, l)
        p[v] === void 0 && (p[v] = l[v]);
    return { $$typeof: t, type: c, key: d, ref: m, props: p, _owner: i.current };
  }
  return Mt.Fragment = n, Mt.jsx = s, Mt.jsxs = s, Mt;
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
var pr;
function Ao() {
  return pr || (pr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = ye, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), c = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), g = Symbol.iterator, w = "@@iterator";
    function b(o) {
      if (o === null || typeof o != "object")
        return null;
      var f = g && o[g] || o[w];
      return typeof f == "function" ? f : null;
    }
    var C = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(o) {
      {
        for (var f = arguments.length, h = new Array(f > 1 ? f - 1 : 0), $ = 1; $ < f; $++)
          h[$ - 1] = arguments[$];
        E("error", o, h);
      }
    }
    function E(o, f, h) {
      {
        var $ = C.ReactDebugCurrentFrame, _ = $.getStackAddendum();
        _ !== "" && (f += "%s", h = h.concat([_]));
        var N = h.map(function(T) {
          return String(T);
        });
        N.unshift("Warning: " + f), Function.prototype.apply.call(console[o], console, N);
      }
    }
    var S = !1, x = !1, k = !1, O = !1, D = !1, A;
    A = Symbol.for("react.module.reference");
    function K(o) {
      return !!(typeof o == "string" || typeof o == "function" || o === r || o === a || D || o === i || o === u || o === v || O || o === m || S || x || k || typeof o == "object" && o !== null && (o.$$typeof === d || o.$$typeof === p || o.$$typeof === s || o.$$typeof === c || o.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      o.$$typeof === A || o.getModuleId !== void 0));
    }
    function G(o, f, h) {
      var $ = o.displayName;
      if ($)
        return $;
      var _ = f.displayName || f.name || "";
      return _ !== "" ? h + "(" + _ + ")" : h;
    }
    function H(o) {
      return o.displayName || "Context";
    }
    function W(o) {
      if (o == null)
        return null;
      if (typeof o.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof o == "function")
        return o.displayName || o.name || null;
      if (typeof o == "string")
        return o;
      switch (o) {
        case r:
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
      if (typeof o == "object")
        switch (o.$$typeof) {
          case c:
            var f = o;
            return H(f) + ".Consumer";
          case s:
            var h = o;
            return H(h._context) + ".Provider";
          case l:
            return G(o, o.render, "ForwardRef");
          case p:
            var $ = o.displayName || null;
            return $ !== null ? $ : W(o.type) || "Memo";
          case d: {
            var _ = o, N = _._payload, T = _._init;
            try {
              return W(T(N));
            } catch (R) {
              return null;
            }
          }
        }
      return null;
    }
    var I = Object.assign, Y = 0, z, q, X, ae, Ce, ve, Ne;
    function Oe() {
    }
    Oe.__reactDisabledLog = !0;
    function Xe() {
      {
        if (Y === 0) {
          z = console.log, q = console.info, X = console.warn, ae = console.error, Ce = console.group, ve = console.groupCollapsed, Ne = console.groupEnd;
          var o = {
            configurable: !0,
            enumerable: !0,
            value: Oe,
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
        Y++;
      }
    }
    function ke() {
      {
        if (Y--, Y === 0) {
          var o = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: I({}, o, {
              value: z
            }),
            info: I({}, o, {
              value: q
            }),
            warn: I({}, o, {
              value: X
            }),
            error: I({}, o, {
              value: ae
            }),
            group: I({}, o, {
              value: Ce
            }),
            groupCollapsed: I({}, o, {
              value: ve
            }),
            groupEnd: I({}, o, {
              value: Ne
            })
          });
        }
        Y < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ie = C.ReactCurrentDispatcher, J;
    function $e(o, f, h) {
      {
        if (J === void 0)
          try {
            throw Error();
          } catch (_) {
            var $ = _.stack.trim().match(/\n( *(at )?)/);
            J = $ && $[1] || "";
          }
        return `
` + J + o;
      }
    }
    var me = !1, Se;
    {
      var xt = typeof WeakMap == "function" ? WeakMap : Map;
      Se = new xt();
    }
    function He(o, f) {
      if (!o || me)
        return "";
      {
        var h = Se.get(o);
        if (h !== void 0)
          return h;
      }
      var $;
      me = !0;
      var _ = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var N;
      N = ie.current, ie.current = null, Xe();
      try {
        if (f) {
          var T = function() {
            throw Error();
          };
          if (Object.defineProperty(T.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(T, []);
            } catch (ne) {
              $ = ne;
            }
            Reflect.construct(o, [], T);
          } else {
            try {
              T.call();
            } catch (ne) {
              $ = ne;
            }
            o.call(T.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ne) {
            $ = ne;
          }
          o();
        }
      } catch (ne) {
        if (ne && $ && typeof ne.stack == "string") {
          for (var R = ne.stack.split(`
`), V = $.stack.split(`
`), F = R.length - 1, M = V.length - 1; F >= 1 && M >= 0 && R[F] !== V[M]; )
            M--;
          for (; F >= 1 && M >= 0; F--, M--)
            if (R[F] !== V[M]) {
              if (F !== 1 || M !== 1)
                do
                  if (F--, M--, M < 0 || R[F] !== V[M]) {
                    var Z = `
` + R[F].replace(" at new ", " at ");
                    return o.displayName && Z.includes("<anonymous>") && (Z = Z.replace("<anonymous>", o.displayName)), typeof o == "function" && Se.set(o, Z), Z;
                  }
                while (F >= 1 && M >= 0);
              break;
            }
        }
      } finally {
        me = !1, ie.current = N, ke(), Error.prepareStackTrace = _;
      }
      var fe = o ? o.displayName || o.name : "", Lt = fe ? $e(fe) : "";
      return typeof o == "function" && Se.set(o, Lt), Lt;
    }
    function Ct(o, f, h) {
      return He(o, !1);
    }
    function $t(o) {
      var f = o.prototype;
      return !!(f && f.isReactComponent);
    }
    function he(o, f, h) {
      if (o == null)
        return "";
      if (typeof o == "function")
        return He(o, $t(o));
      if (typeof o == "string")
        return $e(o);
      switch (o) {
        case u:
          return $e("Suspense");
        case v:
          return $e("SuspenseList");
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case l:
            return Ct(o.render);
          case p:
            return he(o.type, f, h);
          case d: {
            var $ = o, _ = $._payload, N = $._init;
            try {
              return he(N(_), f, h);
            } catch (T) {
            }
          }
        }
      return "";
    }
    var ce = Object.prototype.hasOwnProperty, Ue = {}, Je = C.ReactDebugCurrentFrame;
    function Ee(o) {
      if (o) {
        var f = o._owner, h = he(o.type, o._source, f ? f.type : null);
        Je.setExtraStackFrame(h);
      } else
        Je.setExtraStackFrame(null);
    }
    function St(o, f, h, $, _) {
      {
        var N = Function.call.bind(ce);
        for (var T in o)
          if (N(o, T)) {
            var R = void 0;
            try {
              if (typeof o[T] != "function") {
                var V = Error(($ || "React class") + ": " + h + " type `" + T + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[T] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw V.name = "Invariant Violation", V;
              }
              R = o[T](f, T, $, h, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (F) {
              R = F;
            }
            R && !(R instanceof Error) && (Ee(_), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", $ || "React class", h, T, typeof R), Ee(null)), R instanceof Error && !(R.message in Ue) && (Ue[R.message] = !0, Ee(_), y("Failed %s type: %s", h, R.message), Ee(null));
          }
      }
    }
    var Et = Array.isArray;
    function ge(o) {
      return Et(o);
    }
    function gn(o) {
      {
        var f = typeof Symbol == "function" && Symbol.toStringTag, h = f && o[Symbol.toStringTag] || o.constructor.name || "Object";
        return h;
      }
    }
    function bn(o) {
      try {
        return Pt(o), !1;
      } catch (f) {
        return !0;
      }
    }
    function Pt(o) {
      return "" + o;
    }
    function Rt(o) {
      if (bn(o))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", gn(o)), Pt(o);
    }
    var Pe = C.ReactCurrentOwner, yn = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ot, kt, Ze;
    Ze = {};
    function wn(o) {
      if (ce.call(o, "ref")) {
        var f = Object.getOwnPropertyDescriptor(o, "ref").get;
        if (f && f.isReactWarning)
          return !1;
      }
      return o.ref !== void 0;
    }
    function xn(o) {
      if (ce.call(o, "key")) {
        var f = Object.getOwnPropertyDescriptor(o, "key").get;
        if (f && f.isReactWarning)
          return !1;
      }
      return o.key !== void 0;
    }
    function Cn(o, f) {
      if (typeof o.ref == "string" && Pe.current && f && Pe.current.stateNode !== f) {
        var h = W(Pe.current.type);
        Ze[h] || (y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', W(Pe.current.type), o.ref), Ze[h] = !0);
      }
    }
    function $n(o, f) {
      {
        var h = function() {
          Ot || (Ot = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", f));
        };
        h.isReactWarning = !0, Object.defineProperty(o, "key", {
          get: h,
          configurable: !0
        });
      }
    }
    function Sn(o, f) {
      {
        var h = function() {
          kt || (kt = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", f));
        };
        h.isReactWarning = !0, Object.defineProperty(o, "ref", {
          get: h,
          configurable: !0
        });
      }
    }
    var En = function(o, f, h, $, _, N, T) {
      var R = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: o,
        key: f,
        ref: h,
        props: T,
        // Record the component responsible for creating this element.
        _owner: N
      };
      return R._store = {}, Object.defineProperty(R._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(R, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: $
      }), Object.defineProperty(R, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: _
      }), Object.freeze && (Object.freeze(R.props), Object.freeze(R)), R;
    };
    function Pn(o, f, h, $, _) {
      {
        var N, T = {}, R = null, V = null;
        h !== void 0 && (Rt(h), R = "" + h), xn(f) && (Rt(f.key), R = "" + f.key), wn(f) && (V = f.ref, Cn(f, _));
        for (N in f)
          ce.call(f, N) && !yn.hasOwnProperty(N) && (T[N] = f[N]);
        if (o && o.defaultProps) {
          var F = o.defaultProps;
          for (N in F)
            T[N] === void 0 && (T[N] = F[N]);
        }
        if (R || V) {
          var M = typeof o == "function" ? o.displayName || o.name || "Unknown" : o;
          R && $n(T, M), V && Sn(T, M);
        }
        return En(o, R, V, _, $, Pe.current, T);
      }
    }
    var Qe = C.ReactCurrentOwner, Tt = C.ReactDebugCurrentFrame;
    function ue(o) {
      if (o) {
        var f = o._owner, h = he(o.type, o._source, f ? f.type : null);
        Tt.setExtraStackFrame(h);
      } else
        Tt.setExtraStackFrame(null);
    }
    var et;
    et = !1;
    function tt(o) {
      return typeof o == "object" && o !== null && o.$$typeof === t;
    }
    function At() {
      {
        if (Qe.current) {
          var o = W(Qe.current.type);
          if (o)
            return `

Check the render method of \`` + o + "`.";
        }
        return "";
      }
    }
    function Rn(o) {
      {
        if (o !== void 0) {
          var f = o.fileName.replace(/^.*[\\\/]/, ""), h = o.lineNumber;
          return `

Check your code at ` + f + ":" + h + ".";
        }
        return "";
      }
    }
    var _t = {};
    function On(o) {
      {
        var f = At();
        if (!f) {
          var h = typeof o == "string" ? o : o.displayName || o.name;
          h && (f = `

Check the top-level render call using <` + h + ">.");
        }
        return f;
      }
    }
    function Dt(o, f) {
      {
        if (!o._store || o._store.validated || o.key != null)
          return;
        o._store.validated = !0;
        var h = On(f);
        if (_t[h])
          return;
        _t[h] = !0;
        var $ = "";
        o && o._owner && o._owner !== Qe.current && ($ = " It was passed a child from " + W(o._owner.type) + "."), ue(o), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', h, $), ue(null);
      }
    }
    function Nt(o, f) {
      {
        if (typeof o != "object")
          return;
        if (ge(o))
          for (var h = 0; h < o.length; h++) {
            var $ = o[h];
            tt($) && Dt($, f);
          }
        else if (tt(o))
          o._store && (o._store.validated = !0);
        else if (o) {
          var _ = b(o);
          if (typeof _ == "function" && _ !== o.entries)
            for (var N = _.call(o), T; !(T = N.next()).done; )
              tt(T.value) && Dt(T.value, f);
        }
      }
    }
    function kn(o) {
      {
        var f = o.type;
        if (f == null || typeof f == "string")
          return;
        var h;
        if (typeof f == "function")
          h = f.propTypes;
        else if (typeof f == "object" && (f.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        f.$$typeof === p))
          h = f.propTypes;
        else
          return;
        if (h) {
          var $ = W(f);
          St(h, o.props, "prop", $, o);
        } else if (f.PropTypes !== void 0 && !et) {
          et = !0;
          var _ = W(f);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _ || "Unknown");
        }
        typeof f.getDefaultProps == "function" && !f.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Tn(o) {
      {
        for (var f = Object.keys(o.props), h = 0; h < f.length; h++) {
          var $ = f[h];
          if ($ !== "children" && $ !== "key") {
            ue(o), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", $), ue(null);
            break;
          }
        }
        o.ref !== null && (ue(o), y("Invalid attribute `ref` supplied to `React.Fragment`."), ue(null));
      }
    }
    function jt(o, f, h, $, _, N) {
      {
        var T = K(o);
        if (!T) {
          var R = "";
          (o === void 0 || typeof o == "object" && o !== null && Object.keys(o).length === 0) && (R += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var V = Rn(_);
          V ? R += V : R += At();
          var F;
          o === null ? F = "null" : ge(o) ? F = "array" : o !== void 0 && o.$$typeof === t ? (F = "<" + (W(o.type) || "Unknown") + " />", R = " Did you accidentally export a JSX literal instead of a component?") : F = typeof o, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", F, R);
        }
        var M = Pn(o, f, h, _, N);
        if (M == null)
          return M;
        if (T) {
          var Z = f.children;
          if (Z !== void 0)
            if ($)
              if (ge(Z)) {
                for (var fe = 0; fe < Z.length; fe++)
                  Nt(Z[fe], o);
                Object.freeze && Object.freeze(Z);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Nt(Z, o);
        }
        return o === r ? Tn(M) : kn(M), M;
      }
    }
    function An(o, f, h) {
      return jt(o, f, h, !0);
    }
    function _n(o, f, h) {
      return jt(o, f, h, !1);
    }
    var Dn = _n, Nn = An;
    Ht.Fragment = r, Ht.jsx = Dn, Ht.jsxs = Nn;
  }()), Ht;
}
process.env.NODE_ENV === "production" ? Un.exports = To() : Un.exports = Ao();
var _e = Un.exports;
const Fr = ({
  width: e = "25",
  height: t = "25",
  color: n = "currentColor"
}) => /* @__PURE__ */ _e.jsx(
  "svg",
  {
    width: e,
    height: t,
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ _e.jsx(
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
Fr.displayName = "RightNext";
const Jn = ({
  width: e = "25",
  height: t = "25",
  color: n = "currentColor"
}) => /* @__PURE__ */ _e.jsx(
  "svg",
  {
    width: e,
    height: t,
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ _e.jsx(
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
Jn.displayName = "SelectOpenDown";
const Mr = ({ width: e = "25", height: t = "25", color: n = "currentColor" }) => /* @__PURE__ */ _e.jsx(
  "svg",
  {
    width: e,
    height: t,
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ _e.jsx(
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
Mr.displayName = "EyeOff";
const Br = ({ width: e = "25", height: t = "25", color: n = "currentColor" }) => /* @__PURE__ */ _e.jsx(
  "svg",
  {
    width: e,
    height: t,
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ _e.jsx(
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
Br.displayName = "EyeOn";
const Zn = ({ width: e = "25", height: t = "25", color: n = "currentColor" }) => /* @__PURE__ */ _e.jsx(
  "svg",
  {
    width: e,
    height: t,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ _e.jsx(
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
Zn.displayName = "Check";
var rt = /* @__PURE__ */ ((e) => (e.Text = "text", e.Number = "number", e.Password = "password", e.Telephone = "tel", e.Email = "email", e))(rt || {}), dt = /* @__PURE__ */ ((e) => (e.Small = "small", e.Medium = "medium", e))(dt || {}), Bt = /* @__PURE__ */ ((e) => (e.Light = "light", e.Dark = "dark", e))(Bt || {});
const _o = ye.forwardRef((e, t) => {
  const ie = e, {
    id: n,
    value: r,
    defaultValue: i,
    className: a,
    disabled: s,
    endIcon: c,
    startIcon: l,
    isError: u,
    isHint: v,
    helperText: p,
    placeholder: d,
    label: m,
    type: g,
    name: w,
    ariaLabel: b,
    autoComplete: C,
    size: y = dt.Medium,
    theme: E = Bt.Light,
    onBlur: S,
    onChange: x,
    onFocus: k,
    onKeyDown: O,
    onKeyUp: D,
    requiredSymbol: A
  } = ie, K = oe(ie, [
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
  ]), [G, H] = U(""), [W, I] = U(!1), [Y, z] = U(g), [q, X] = ye.useState(!1), ae = (J) => {
    H(J.target.value), x && x(J);
  }, Ce = (J) => {
    S && S(J);
  }, ve = (J) => {
    k && k(J);
  }, Ne = (J) => {
    O && O(J);
  }, Oe = (J) => {
    D && D(J);
  }, Xe = () => {
    X((J) => !J);
  }, ke = (J) => {
    J.animationName === "onAutoFillStart" && I(!0);
  };
  return Fe(() => {
    (i || r) && H(" ");
  }, [i, r]), te(() => {
    g === rt.Password && z(q ? rt.Text : rt.Password);
  }, [q, g]), te(() => {
    G.length === 0 && I(!1);
  }, [G]), /* @__PURE__ */ P.jsxs(
    "div",
    {
      className: B({
        Input: !0,
        "Input-without-heading ": !!m,
        [a || ""]: !!a
      }),
      children: [
        m && /* @__PURE__ */ P.jsxs(
          "label",
          {
            className: B({
              InputLabel: !0,
              "InputLabel-small": y === dt.Small
            }),
            htmlFor: n,
            children: [
              m,
              A && /* @__PURE__ */ P.jsx(
                "span",
                {
                  style: {
                    color: typeof A == "object" ? A.color : void 0
                  },
                  children: A && "*"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ P.jsxs(
          "div",
          {
            className: B({
              "InputBase-root": !0,
              "Input-disabled": s,
              "InputBase-error": !!u,
              "InputBase-root-dark": E === Bt.Dark
            }),
            children: [
              g !== rt.Password && l && /* @__PURE__ */ P.jsx("div", { className: "InputBase-icon-start", children: l }),
              /* @__PURE__ */ P.jsxs(
                "div",
                {
                  className: B({
                    InputBaseInner: !0
                  }),
                  children: [
                    !m && /* @__PURE__ */ P.jsx(
                      "label",
                      {
                        style: {
                          zIndex: W ? 1 : 0
                        },
                        className: B({
                          InputLabel: !0,
                          "InputLabel-medium-align-center": y === dt.Medium,
                          "InputLabel-small-align-center": y === dt.Small,
                          "InputLabel-position-fixed": G.length > 0 || W
                        }),
                        htmlFor: n,
                        children: d
                      }
                    ),
                    /* @__PURE__ */ P.jsx(
                      "input",
                      L({
                        defaultValue: !r && i ? i : void 0,
                        "aria-label": b,
                        autoComplete: C,
                        className: B({
                          "InputBase-input": !0,
                          "InputBase-input-dark": E === Bt.Dark,
                          "InputBase-input-small": y === dt.Small,
                          "InputBase-autofill-font": W
                        }),
                        disabled: s,
                        name: w,
                        type: Y,
                        id: n,
                        value: r,
                        onAnimationStart: ke,
                        onChange: ae,
                        onBlur: Ce,
                        onFocus: ve,
                        onKeyDown: Ne,
                        onKeyUp: Oe,
                        placeholder: m ? d : "",
                        ref: t
                      }, K)
                    )
                  ]
                }
              ),
              g !== rt.Password && c && /* @__PURE__ */ P.jsx("div", { className: "InputBase-icon-end", children: c }),
              g === rt.Password && /* @__PURE__ */ P.jsx(
                "button",
                {
                  type: "button",
                  "aria-label": "toggle password visibility",
                  className: "InputBase-icon-end",
                  onClick: Xe,
                  children: q ? /* @__PURE__ */ P.jsx(Br, {}) : /* @__PURE__ */ P.jsx(Mr, {})
                }
              )
            ]
          }
        ),
        p && /* @__PURE__ */ P.jsx(
          "p",
          {
            className: B({
              "Input-helper-text": !0,
              "Input-hint-text": !!v,
              "Input-error-text": !!u,
              "Input-helper-text-dark": !u && E === Bt.Dark
            }),
            children: p
          }
        )
      ]
    }
  );
});
_o.displayName = "Input";
var be = /* @__PURE__ */ ((e) => (e.Light = "light", e.Dark = "dark", e.Green = "green", e))(be || {}), pt = /* @__PURE__ */ ((e) => (e.Small = "small", e.Medium = "medium", e.Large = "large", e))(pt || {});
const Do = ye.forwardRef((e, t) => {
  const {
    id: n,
    name: r,
    disabled: i,
    children: a,
    value: s,
    label: c,
    className: l,
    onChange: u,
    ariaLabel: v,
    error: p,
    theme: d = be.Light,
    size: m = pt.Medium
  } = e, [g, w] = U(!1), [b, C] = U(!1), [y, E] = U(i), S = (k) => {
    y || (w(!g), u && u(!g, k));
  }, x = (k) => {
    if ((k.key === "Enter" || k.key === " ") && !y) {
      const O = {
        target: {
          ariaLabel: v,
          name: r
        }
      };
      w(!g), u && u(!g, O);
    }
  };
  return te(() => {
    E(i);
  }, [i]), te(() => {
    w(typeof s == "boolean" ? s : !1);
  }, [s]), te(() => {
    C(!!p);
  }, [p]), /* @__PURE__ */ P.jsx("div", { className: "Checkbox", children: /* @__PURE__ */ P.jsxs("label", { children: [
    /* @__PURE__ */ P.jsx(
      "div",
      {
        className: B({
          "Checkbox-checked": g,
          "Checkbox-dark-checked": g && d === be.Dark,
          "Checkbox-green-checked": g && d === be.Green,
          "Checkbox-unchecked": !g,
          "Checkbox-error": b,
          "Checkbox-disabled": y,
          "Checkbox-green-disabled": y && d === be.Green,
          "Checkbox-dark-disabled": y && d === be.Dark,
          "Checkbox-dark": d === be.Dark,
          "Checkbox-green": d === be.Green,
          [l || ""]: !!l
        }),
        children: /* @__PURE__ */ P.jsxs(
          "div",
          {
            className: B({
              "Checkbox-container": !0,
              "Checkbox-large": m === pt.Large,
              "Checkbox-medium": m === pt.Medium,
              "Checkbox-small": m === pt.Small
            }),
            role: "input",
            tabIndex: 0,
            onKeyDown: x,
            children: [
              /* @__PURE__ */ P.jsx(
                "input",
                {
                  ref: t,
                  id: n,
                  type: "checkbox",
                  onChange: S,
                  "aria-label": v,
                  tabIndex: -1,
                  disabled: y
                }
              ),
              g && !y && /* @__PURE__ */ P.jsx(Zn, {})
            ]
          }
        )
      }
    ),
    (c || a) && /* @__PURE__ */ P.jsx(
      "div",
      {
        className: B({
          "Checkbox-label": !0,
          "Checkbox-label-small": m === pt.Small,
          "Checkbox-label-dark": d === be.Dark,
          "Checkbox-label-green": d === be.Green,
          "Checkbox-label-disabled": y,
          "Checkbox-label-dark-disabled": y && d === be.Dark,
          "Checkbox-label-green-disabled": y && d === be.Green
        }),
        children: c || a
      }
    )
  ] }) });
});
Do.displayName = "Checkbox";
var Te = /* @__PURE__ */ ((e) => (e.Light = "light", e.Dark = "dark", e.Green = "green", e))(Te || {}), Ie = /* @__PURE__ */ ((e) => (e.Small = "small", e.Medium = "medium", e.Large = "large", e))(Ie || {});
const No = ye.forwardRef((e, t) => {
  const {
    id: n,
    name: r,
    className: i,
    checked: a,
    disabled: s,
    ariaLabel: c,
    label: l,
    theme: u = Te.Light,
    size: v = Ie.Medium,
    onChange: p
  } = e, [d, m] = U(!1), [g, w] = U(s), b = (y) => {
    g || (m(!d), p && p(!d, y));
  }, C = (y) => {
    if ((y.key === "Enter" || y.key === " ") && !g) {
      const E = {
        target: {
          ariaLabel: c,
          name: r
        }
      };
      m(!d), p && p(!d, E);
    }
  };
  return te(() => {
    w(s);
  }, [s]), te(() => {
    m(typeof a == "boolean" ? a : !1);
  }, [a]), /* @__PURE__ */ P.jsx("div", { className: "Switch", children: /* @__PURE__ */ P.jsxs("label", { children: [
    /* @__PURE__ */ P.jsxs(
      "div",
      {
        className: B({
          "Switch-light": u === Te.Light,
          "Switch-dark": u === Te.Dark,
          "Switch-green": u === Te.Green,
          "Switch-large": v === Ie.Large,
          "Switch-medium": v === Ie.Medium,
          "Switch-small": v === Ie.Small,
          "Switch-light-active": d && u === Te.Light,
          "Switch-dark-active": d && u === Te.Dark,
          "Switch-green-active": d && u === Te.Green,
          "Switch-large-active": d && v === Ie.Large,
          "Switch-medium-active": d && v === Ie.Medium,
          "Switch-small-active": d && v === Ie.Small,
          "Switch-disabled": g,
          [i || ""]: !!i
        }),
        tabIndex: 0,
        role: "input",
        onKeyDown: C,
        children: [
          /* @__PURE__ */ P.jsx(
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
          /* @__PURE__ */ P.jsx(
            "div",
            {
              className: B({
                "Switch-ellipse": !0
              })
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ P.jsx(
      "div",
      {
        className: B({
          "Switch-label": !0,
          "Switch-label-small": v === Ie.Small,
          "Switch-label-dark": u === Te.Dark,
          "Switch-label-green": u === Te.Green
        }),
        children: l
      }
    )
  ] }) });
});
No.displayName = "Switch";
var Vn = /* @__PURE__ */ ((e) => (e.Large = "large", e.Small = "small", e))(Vn || {});
const ss = (e) => {
  var x;
  const {
    className: t,
    size: n = Vn.Large,
    tabs: r,
    gap: i,
    activeTab: a,
    activeColor: s,
    tabMarginBottom: c = 16
  } = e, [l, u] = U((x = r[0]) == null ? void 0 : x.id), [v, p] = U(6), [d, m] = U(0), [g, w] = U("none"), [b, C] = U(0), y = at(() => r.find((k) => k.id === l), [l, r]), E = re(new Array(r.length)), S = (k, O, D) => {
    O !== l && (w("left 200ms linear, width 200ms linear"), p(k.currentTarget.offsetLeft), m(k.currentTarget.offsetWidth), u(O), D && D(O));
  };
  return Fe(() => {
    if (a) {
      const k = r.findIndex((O) => O.id === a);
      C(k), u(a);
    }
  }, [a, r]), Fe(() => {
    var D, A;
    const k = (D = E.current[b]) == null ? void 0 : D.offsetWidth, O = (A = E.current[b]) == null ? void 0 : A.offsetLeft;
    m(k), p(O);
  }, [b]), /* @__PURE__ */ P.jsxs("div", { className: "Tabs", children: [
    /* @__PURE__ */ P.jsxs(
      "div",
      {
        style: { gap: i },
        className: B({
          "Tabs-base": !0,
          [t || ""]: !!t
        }),
        children: [
          r == null ? void 0 : r.map((k, O) => /* @__PURE__ */ P.jsx(
            "button",
            {
              ref: (D) => E.current[O] = D,
              "aria-label": k.label,
              disabled: k.disabled,
              className: B({
                "Tab-root": !0,
                "Tab-root-active": l === k.id,
                "Tab-root-small": n === Vn.Small
              }),
              onClick: (D) => S(D, k.id, k.onClick),
              children: /* @__PURE__ */ P.jsx(
                "div",
                {
                  style: { marginBottom: c },
                  className: B({
                    "Tab-label": !0
                  }),
                  children: k.label
                }
              )
            },
            k.id
          )),
          /* @__PURE__ */ P.jsx(
            "div",
            {
              style: {
                left: v,
                width: d,
                transition: g,
                backgroundColor: s
              },
              className: "Tab-active-line"
            }
          )
        ]
      }
    ),
    y && y.content && /* @__PURE__ */ P.jsx("div", { className: "Tab-content", children: y.content })
  ] });
};
const jo = ye.forwardRef((e, t) => {
  const {
    className: n,
    color: r,
    ariaLabel: i,
    content: a,
    header: s,
    contentMarginTop: c = 0,
    isOpen: l,
    onChange: u
  } = e, [v, p] = U(l), d = re(null), m = (b, C) => {
    const y = b.scrollHeight;
    b.style.height = (C ? y : 0) + "px";
  }, g = () => {
    p(!v), u && u(!v), d.current && m(d.current, !v);
  }, w = (b) => {
    (b.key === "Enter" || b.key === " ") && (p(!v), u && u(!v), d.current && m(d.current, !v));
  };
  return Fe(() => {
    const b = typeof l == "boolean" ? l : !1;
    d.current && m(d.current, b), p(b);
  }, [l]), /* @__PURE__ */ P.jsxs(
    "div",
    {
      className: B({
        Accordion: !0,
        [n || ""]: !!n
      }),
      children: [
        /* @__PURE__ */ P.jsxs(
          "div",
          {
            ref: t,
            tabIndex: 0,
            className: "Accordion-heading",
            role: "button",
            "aria-expanded": "true",
            "aria-label": i,
            onClick: g,
            onKeyDown: w,
            children: [
              /* @__PURE__ */ P.jsx("div", { style: { color: r }, className: "Accordion-heading-label", children: s }),
              /* @__PURE__ */ P.jsx(
                "div",
                {
                  className: B({
                    "Accordion-heading-arrow": !0,
                    "Accordion-heading-arrow-up": v
                  }),
                  children: /* @__PURE__ */ P.jsx(Jn, { width: "24", height: "24", color: r })
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ P.jsx(
          "div",
          {
            style: { marginTop: c },
            ref: d,
            className: B({
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
jo.displayName = "Accordion";
var rn = /* @__PURE__ */ ((e) => (e.Large = "large", e.Medium = "medium", e))(rn || {});
const cs = (e) => {
  var p;
  const { className: t, size: n = rn.Medium, tags: r, gap: i, activeTag: a, activeColor: s } = e, [c, l] = U((p = r[0]) == null ? void 0 : p.id), u = at(() => r.find((d) => d.id === c), [c, r]), v = (d, m) => {
    l(d), m && m(d);
  };
  return Fe(() => {
    a && l(a);
  }, [a]), /* @__PURE__ */ P.jsxs("div", { className: "Tags", children: [
    /* @__PURE__ */ P.jsx(
      "div",
      {
        style: { gap: i },
        className: B({
          "Tags-base": !0,
          [t || ""]: !!t
        }),
        children: r == null ? void 0 : r.map((d) => /* @__PURE__ */ P.jsx(
          "button",
          {
            "aria-label": d.label,
            id: d.id,
            disabled: d.disabled,
            style: { backgroundColor: c === d.id ? s : "" },
            className: B({
              Tag: !0,
              "Tag-medium": n === rn.Medium,
              "Tag-large": n === rn.Large,
              "Tag-active": c === d.id,
              [t || ""]: !!t
            }),
            onClick: () => v(d.id, d.onClick),
            children: /* @__PURE__ */ P.jsxs("div", { className: "Tag-label", children: [
              d.startIcon && /* @__PURE__ */ P.jsx("span", { className: "Tag-icon-left", children: d.startIcon }),
              d.label,
              d.endIcon && /* @__PURE__ */ P.jsx("span", { className: "Tag-icon-right", children: d.endIcon })
            ] })
          },
          d.id
        ))
      }
    ),
    u && u.content && /* @__PURE__ */ P.jsx("div", { className: "Tag-content", children: u.content })
  ] });
};
var Wt = /* @__PURE__ */ ((e) => (e.Large = "large", e.Medium = "medium", e))(Wt || {}), on = /* @__PURE__ */ ((e) => (e.Round = "round", e.Square = "square", e))(on || {});
const ls = (e) => {
  var k;
  const {
    className: t,
    size: n = Wt.Medium,
    variant: r = on.Round,
    tags: i,
    gap: a,
    activeTag: s,
    activeColor: c,
    backgroundColor: l
  } = e, [u, v] = U((k = i[0]) == null ? void 0 : k.id), [p, d] = U(6), [m, g] = U(0), [w, b] = U("none"), [C, y] = U(0), E = at(() => i.find((O) => O.id === u), [u, i]), S = re(new Array(i.length)), x = (O, D, A) => {
    D !== u && (b("left 200ms linear, width 200ms linear"), d(O.currentTarget.offsetLeft), g(O.currentTarget.offsetWidth), v(D), A && A(D));
  };
  return Fe(() => {
    if (s) {
      const O = i.findIndex((D) => D.id === s);
      y(O), v(s);
    }
  }, [s, i]), Fe(() => {
    var A, K;
    const O = (A = S.current[C]) == null ? void 0 : A.offsetWidth, D = (K = S.current[C]) == null ? void 0 : K.offsetLeft;
    g(O), d(D);
  }, [C]), /* @__PURE__ */ P.jsxs("div", { className: "SwitchTags", children: [
    /* @__PURE__ */ P.jsxs(
      "div",
      {
        style: { gap: a, backgroundColor: l },
        className: B({
          "SwitchTags-base": !0,
          "SwitchTags-base-round": r === on.Round,
          "SwitchTags-base-square": r === on.Square,
          [t || ""]: !!t
        }),
        children: [
          i == null ? void 0 : i.map((O, D) => /* @__PURE__ */ P.jsxs(
            "button",
            {
              ref: (A) => S.current[D] = A,
              "aria-label": O.label,
              id: O.id,
              disabled: O.disabled,
              className: B({
                SwitchTag: !0,
                "SwitchTag-medium": n === Wt.Medium,
                "SwitchTag-large": n === Wt.Large,
                "SwitchTag-active": u === O.id,
                [t || ""]: !!t
              }),
              onClick: (A) => x(A, O.id, O.onClick),
              children: [
                O.startIcon && /* @__PURE__ */ P.jsx("span", { className: "SwitchTag-icon-left", children: O.startIcon }),
                O.label,
                O.endIcon && /* @__PURE__ */ P.jsx("span", { className: "SwitchTag-icon-right", children: O.endIcon })
              ]
            },
            O.id
          )),
          /* @__PURE__ */ P.jsx(
            "div",
            {
              style: {
                left: p,
                width: m,
                transition: w,
                backgroundColor: c
              },
              className: B({
                ActiveTab: !0,
                "ActiveTab-small": n === Wt.Medium
              })
            }
          )
        ]
      }
    ),
    E && E.content && /* @__PURE__ */ P.jsx("div", { className: "Tag-content", children: E.content })
  ] });
};
const Lo = ye.forwardRef((e, t) => {
  const { id: n, ariaLabel: r, children: i, onClick: a } = e, s = () => {
    a && a();
  };
  return /* @__PURE__ */ P.jsx(
    "button",
    {
      type: "button",
      onClick: s,
      ref: t,
      "aria-label": r,
      id: n,
      className: "IconButton",
      tabIndex: -1,
      children: /* @__PURE__ */ P.jsx("div", { style: { display: "flex" }, tabIndex: 0, children: i })
    }
  );
});
Lo.displayName = "IconButton";
function se() {
  return se = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, se.apply(this, arguments);
}
function it(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(i) {
    if (e == null || e(i), n === !1 || !i.defaultPrevented)
      return t == null ? void 0 : t(i);
  };
}
function Io(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function Wr(...e) {
  return (t) => e.forEach(
    (n) => Io(n, t)
  );
}
function ct(...e) {
  return ot(Wr(...e), e);
}
function zr(e, t = []) {
  let n = [];
  function r(a, s) {
    const c = /* @__PURE__ */ Wn(s), l = n.length;
    n = [
      ...n,
      s
    ];
    function u(p) {
      const C = p, { scope: d, children: m } = C, g = oe(C, ["scope", "children"]), w = (d == null ? void 0 : d[e][l]) || c, b = at(
        () => g,
        Object.values(g)
      );
      return /* @__PURE__ */ ee(w.Provider, {
        value: b
      }, m);
    }
    function v(p, d) {
      const m = (d == null ? void 0 : d[e][l]) || c, g = Nr(m);
      if (g)
        return g;
      if (s !== void 0)
        return s;
      throw new Error(`\`${p}\` must be used within \`${a}\``);
    }
    return u.displayName = a + "Provider", [
      u,
      v
    ];
  }
  const i = () => {
    const a = n.map((s) => /* @__PURE__ */ Wn(s));
    return function(c) {
      const l = (c == null ? void 0 : c[e]) || a;
      return at(
        () => ({
          [`__scope${e}`]: Q(L({}, c), {
            [e]: l
          })
        }),
        [
          c,
          l
        ]
      );
    };
  };
  return i.scopeName = e, [
    r,
    Fo(i, ...t)
  ];
}
function Fo(...e) {
  const t = e[0];
  if (e.length === 1)
    return t;
  const n = () => {
    const r = e.map(
      (i) => ({
        useScope: i(),
        scopeName: i.scopeName
      })
    );
    return function(a) {
      const s = r.reduce((c, { useScope: l, scopeName: u }) => {
        const p = l(a)[`__scope${u}`];
        return L(L({}, c), p);
      }, {});
      return at(
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
const Qn = /* @__PURE__ */ xe((e, t) => {
  const s = e, { children: n } = s, r = oe(s, ["children"]), i = mt.toArray(n), a = i.find(Bo);
  if (a) {
    const c = a.props.children, l = i.map((u) => u === a ? mt.count(c) > 1 ? mt.only(null) : /* @__PURE__ */ zt(c) ? c.props.children : null : u);
    return /* @__PURE__ */ ee(Yn, se({}, r, {
      ref: t
    }), /* @__PURE__ */ zt(c) ? /* @__PURE__ */ Hn(c, void 0, l) : null);
  }
  return /* @__PURE__ */ ee(Yn, se({}, r, {
    ref: t
  }), n);
});
Qn.displayName = "Slot";
const Yn = /* @__PURE__ */ xe((e, t) => {
  const i = e, { children: n } = i, r = oe(i, ["children"]);
  return /* @__PURE__ */ zt(n) ? /* @__PURE__ */ Hn(n, Q(L({}, Wo(r, n.props)), {
    ref: t ? Wr(t, n.ref) : n.ref
  })) : mt.count(n) > 1 ? mt.only(null) : null;
});
Yn.displayName = "SlotClone";
const Mo = ({ children: e }) => /* @__PURE__ */ ee(jr, null, e);
function Bo(e) {
  return /* @__PURE__ */ zt(e) && e.type === Mo;
}
function Wo(e, t) {
  const n = L({}, t);
  for (const r in t) {
    const i = e[r], a = t[r];
    /^on[A-Z]/.test(r) ? i && a ? n[r] = (...c) => {
      a(...c), i(...c);
    } : i && (n[r] = i) : r === "style" ? n[r] = L(L({}, i), a) : r === "className" && (n[r] = [
      i,
      a
    ].filter(Boolean).join(" "));
  }
  return L(L({}, e), n);
}
const zo = [
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
], Kt = zo.reduce((e, t) => {
  const n = /* @__PURE__ */ xe((r, i) => {
    const l = r, { asChild: a } = l, s = oe(l, ["asChild"]), c = a ? Qn : t;
    return te(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ ee(c, se({}, s, {
      ref: i
    }));
  });
  return n.displayName = `Primitive.${t}`, Q(L({}, e), {
    [t]: n
  });
}, {});
function Uo(e, t) {
  e && Lr(
    () => e.dispatchEvent(t)
  );
}
function Ye(e) {
  const t = re(e);
  return te(() => {
    t.current = e;
  }), at(
    () => (...n) => {
      var r;
      return (r = t.current) === null || r === void 0 ? void 0 : r.call(t, ...n);
    },
    []
  );
}
function Vo(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Ye(e);
  te(() => {
    const r = (i) => {
      i.key === "Escape" && n(i);
    };
    return t.addEventListener("keydown", r), () => t.removeEventListener("keydown", r);
  }, [
    n,
    t
  ]);
}
const Kn = "dismissableLayer.update", Yo = "dismissableLayer.pointerDownOutside", Ko = "dismissableLayer.focusOutside";
let vr;
const Go = /* @__PURE__ */ Wn({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), qo = /* @__PURE__ */ xe((e, t) => {
  var n;
  const D = e, { disableOutsidePointerEvents: r = !1, onEscapeKeyDown: i, onPointerDownOutside: a, onFocusOutside: s, onInteractOutside: c, onDismiss: l } = D, u = oe(D, ["disableOutsidePointerEvents", "onEscapeKeyDown", "onPointerDownOutside", "onFocusOutside", "onInteractOutside", "onDismiss"]), v = Nr(Go), [p, d] = U(null), m = (n = p == null ? void 0 : p.ownerDocument) !== null && n !== void 0 ? n : globalThis == null ? void 0 : globalThis.document, [, g] = U({}), w = ct(
    t,
    (A) => d(A)
  ), b = Array.from(v.layers), [C] = [
    ...v.layersWithOutsidePointerEventsDisabled
  ].slice(-1), y = b.indexOf(C), E = p ? b.indexOf(p) : -1, S = v.layersWithOutsidePointerEventsDisabled.size > 0, x = E >= y, k = Xo((A) => {
    const K = A.target, G = [
      ...v.branches
    ].some(
      (H) => H.contains(K)
    );
    !x || G || (a == null || a(A), c == null || c(A), A.defaultPrevented || l == null || l());
  }, m), O = Ho((A) => {
    const K = A.target;
    [
      ...v.branches
    ].some(
      (H) => H.contains(K)
    ) || (s == null || s(A), c == null || c(A), A.defaultPrevented || l == null || l());
  }, m);
  return Vo((A) => {
    E === v.layers.size - 1 && (i == null || i(A), !A.defaultPrevented && l && (A.preventDefault(), l()));
  }, m), te(() => {
    if (p)
      return r && (v.layersWithOutsidePointerEventsDisabled.size === 0 && (vr = m.body.style.pointerEvents, m.body.style.pointerEvents = "none"), v.layersWithOutsidePointerEventsDisabled.add(p)), v.layers.add(p), mr(), () => {
        r && v.layersWithOutsidePointerEventsDisabled.size === 1 && (m.body.style.pointerEvents = vr);
      };
  }, [
    p,
    m,
    r,
    v
  ]), te(() => () => {
    p && (v.layers.delete(p), v.layersWithOutsidePointerEventsDisabled.delete(p), mr());
  }, [
    p,
    v
  ]), te(() => {
    const A = () => g({});
    return document.addEventListener(Kn, A), () => document.removeEventListener(Kn, A);
  }, []), /* @__PURE__ */ ee(Kt.div, se({}, u, {
    ref: w,
    style: L({
      pointerEvents: S ? x ? "auto" : "none" : void 0
    }, e.style),
    onFocusCapture: it(e.onFocusCapture, O.onFocusCapture),
    onBlurCapture: it(e.onBlurCapture, O.onBlurCapture),
    onPointerDownCapture: it(e.onPointerDownCapture, k.onPointerDownCapture)
  }));
});
function Xo(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Ye(e), r = re(!1), i = re(() => {
  });
  return te(() => {
    const a = (c) => {
      if (c.target && !r.current) {
        let u = function() {
          Ur(Yo, n, l, {
            discrete: !0
          });
        };
        const l = {
          originalEvent: c
        };
        c.pointerType === "touch" ? (t.removeEventListener("click", i.current), i.current = u, t.addEventListener("click", i.current, {
          once: !0
        })) : u();
      } else
        t.removeEventListener("click", i.current);
      r.current = !1;
    }, s = window.setTimeout(() => {
      t.addEventListener("pointerdown", a);
    }, 0);
    return () => {
      window.clearTimeout(s), t.removeEventListener("pointerdown", a), t.removeEventListener("click", i.current);
    };
  }, [
    t,
    n
  ]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function Ho(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Ye(e), r = re(!1);
  return te(() => {
    const i = (a) => {
      a.target && !r.current && Ur(Ko, n, {
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
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function mr() {
  const e = new CustomEvent(Kn);
  document.dispatchEvent(e);
}
function Ur(e, t, n, { discrete: r }) {
  const i = n.originalEvent.target, a = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && i.addEventListener(e, t, {
    once: !0
  }), r ? Uo(i, a) : i.dispatchEvent(a);
}
let jn = 0;
function Jo() {
  te(() => {
    var e, t;
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (e = n[0]) !== null && e !== void 0 ? e : hr()), document.body.insertAdjacentElement("beforeend", (t = n[1]) !== null && t !== void 0 ? t : hr()), jn++, () => {
      jn === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(
        (r) => r.remove()
      ), jn--;
    };
  }, []);
}
function hr() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
const Ln = "focusScope.autoFocusOnMount", In = "focusScope.autoFocusOnUnmount", gr = {
  bubbles: !1,
  cancelable: !0
}, Zo = /* @__PURE__ */ xe((e, t) => {
  const w = e, { loop: n = !1, trapped: r = !1, onMountAutoFocus: i, onUnmountAutoFocus: a } = w, s = oe(w, ["loop", "trapped", "onMountAutoFocus", "onUnmountAutoFocus"]), [c, l] = U(null), u = Ye(i), v = Ye(a), p = re(null), d = ct(
    t,
    (b) => l(b)
  ), m = re({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  te(() => {
    if (r) {
      let b = function(S) {
        if (m.paused || !c)
          return;
        const x = S.target;
        c.contains(x) ? p.current = x : Ve(p.current, {
          select: !0
        });
      }, C = function(S) {
        if (m.paused || !c)
          return;
        const x = S.relatedTarget;
        x !== null && (c.contains(x) || Ve(p.current, {
          select: !0
        }));
      }, y = function(S) {
        if (document.activeElement === document.body)
          for (const k of S)
            k.removedNodes.length > 0 && Ve(c);
      };
      document.addEventListener("focusin", b), document.addEventListener("focusout", C);
      const E = new MutationObserver(y);
      return c && E.observe(c, {
        childList: !0,
        subtree: !0
      }), () => {
        document.removeEventListener("focusin", b), document.removeEventListener("focusout", C), E.disconnect();
      };
    }
  }, [
    r,
    c,
    m.paused
  ]), te(() => {
    if (c) {
      yr.add(m);
      const b = document.activeElement;
      if (!c.contains(b)) {
        const y = new CustomEvent(Ln, gr);
        c.addEventListener(Ln, u), c.dispatchEvent(y), y.defaultPrevented || (Qo(oi(Vr(c)), {
          select: !0
        }), document.activeElement === b && Ve(c));
      }
      return () => {
        c.removeEventListener(Ln, u), setTimeout(() => {
          const y = new CustomEvent(In, gr);
          c.addEventListener(In, v), c.dispatchEvent(y), y.defaultPrevented || Ve(b != null ? b : document.body, {
            select: !0
          }), c.removeEventListener(In, v), yr.remove(m);
        }, 0);
      };
    }
  }, [
    c,
    u,
    v,
    m
  ]);
  const g = ot((b) => {
    if (!n && !r || m.paused)
      return;
    const C = b.key === "Tab" && !b.altKey && !b.ctrlKey && !b.metaKey, y = document.activeElement;
    if (C && y) {
      const E = b.currentTarget, [S, x] = ei(E);
      S && x ? !b.shiftKey && y === x ? (b.preventDefault(), n && Ve(S, {
        select: !0
      })) : b.shiftKey && y === S && (b.preventDefault(), n && Ve(x, {
        select: !0
      })) : y === E && b.preventDefault();
    }
  }, [
    n,
    r,
    m.paused
  ]);
  return /* @__PURE__ */ ee(Kt.div, se({
    tabIndex: -1
  }, s, {
    ref: d,
    onKeyDown: g
  }));
});
function Qo(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (Ve(r, {
      select: t
    }), document.activeElement !== n)
      return;
}
function ei(e) {
  const t = Vr(e), n = br(t, e), r = br(t.reverse(), e);
  return [
    n,
    r
  ];
}
function Vr(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const i = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || i ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}
function br(e, t) {
  for (const n of e)
    if (!ti(n, {
      upTo: t
    }))
      return n;
}
function ti(e, { upTo: t }) {
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
function ni(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Ve(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== n && ni(e) && t && e.select();
  }
}
const yr = ri();
function ri() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = wr(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = wr(e, t), (n = e[0]) === null || n === void 0 || n.resume();
    }
  };
}
function wr(e, t) {
  const n = [
    ...e
  ], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function oi(e) {
  return e.filter(
    (t) => t.tagName !== "A"
  );
}
const gt = globalThis != null && globalThis.document ? Fe : () => {
}, ii = j["useId".toString()] || (() => {
});
let ai = 0;
function si(e) {
  const [t, n] = j.useState(ii());
  return gt(() => {
    e || n(
      (r) => r != null ? r : String(ai++)
    );
  }, [
    e
  ]), e || (t ? `radix-${t}` : "");
}
const ci = ["top", "right", "bottom", "left"], Ke = Math.min, de = Math.max, un = Math.round, Jt = Math.floor, Ge = (e) => ({
  x: e,
  y: e
}), li = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, ui = {
  start: "end",
  end: "start"
};
function Gn(e, t, n) {
  return de(e, Ke(t, n));
}
function Me(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Be(e) {
  return e.split("-")[0];
}
function yt(e) {
  return e.split("-")[1];
}
function er(e) {
  return e === "x" ? "y" : "x";
}
function tr(e) {
  return e === "y" ? "height" : "width";
}
function wt(e) {
  return ["top", "bottom"].includes(Be(e)) ? "y" : "x";
}
function nr(e) {
  return er(wt(e));
}
function fi(e, t, n) {
  n === void 0 && (n = !1);
  const r = yt(e), i = nr(e), a = tr(i);
  let s = i === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (s = fn(s)), [s, fn(s)];
}
function di(e) {
  const t = fn(e);
  return [qn(e), t, qn(t)];
}
function qn(e) {
  return e.replace(/start|end/g, (t) => ui[t]);
}
function pi(e, t, n) {
  const r = ["left", "right"], i = ["right", "left"], a = ["top", "bottom"], s = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? i : r : t ? r : i;
    case "left":
    case "right":
      return t ? a : s;
    default:
      return [];
  }
}
function vi(e, t, n, r) {
  const i = yt(e);
  let a = pi(Be(e), n === "start", r);
  return i && (a = a.map((s) => s + "-" + i), t && (a = a.concat(a.map(qn)))), a;
}
function fn(e) {
  return e.replace(/left|right|bottom|top/g, (t) => li[t]);
}
function mi(e) {
  return L({
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }, e);
}
function Yr(e) {
  return typeof e != "number" ? mi(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function dn(e) {
  return Q(L({}, e), {
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function xr(e, t, n) {
  let {
    reference: r,
    floating: i
  } = e;
  const a = wt(t), s = nr(t), c = tr(s), l = Be(t), u = a === "y", v = r.x + r.width / 2 - i.width / 2, p = r.y + r.height / 2 - i.height / 2, d = r[c] / 2 - i[c] / 2;
  let m;
  switch (l) {
    case "top":
      m = {
        x: v,
        y: r.y - i.height
      };
      break;
    case "bottom":
      m = {
        x: v,
        y: r.y + r.height
      };
      break;
    case "right":
      m = {
        x: r.x + r.width,
        y: p
      };
      break;
    case "left":
      m = {
        x: r.x - i.width,
        y: p
      };
      break;
    default:
      m = {
        x: r.x,
        y: r.y
      };
  }
  switch (yt(t)) {
    case "start":
      m[s] -= d * (n && u ? -1 : 1);
      break;
    case "end":
      m[s] += d * (n && u ? -1 : 1);
      break;
  }
  return m;
}
const hi = (e, t, n) => Re(void 0, null, function* () {
  const {
    placement: r = "bottom",
    strategy: i = "absolute",
    middleware: a = [],
    platform: s
  } = n, c = a.filter(Boolean), l = yield s.isRTL == null ? void 0 : s.isRTL(t);
  let u = yield s.getElementRects({
    reference: e,
    floating: t,
    strategy: i
  }), {
    x: v,
    y: p
  } = xr(u, r, l), d = r, m = {}, g = 0;
  for (let w = 0; w < c.length; w++) {
    const {
      name: b,
      fn: C
    } = c[w], {
      x: y,
      y: E,
      data: S,
      reset: x
    } = yield C({
      x: v,
      y: p,
      initialPlacement: r,
      placement: d,
      strategy: i,
      middlewareData: m,
      rects: u,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    if (v = y != null ? y : v, p = E != null ? E : p, m = Q(L({}, m), {
      [b]: L(L({}, m[b]), S)
    }), x && g <= 50) {
      g++, typeof x == "object" && (x.placement && (d = x.placement), x.rects && (u = x.rects === !0 ? yield s.getElementRects({
        reference: e,
        floating: t,
        strategy: i
      }) : x.rects), {
        x: v,
        y: p
      } = xr(u, d, l)), w = -1;
      continue;
    }
  }
  return {
    x: v,
    y: p,
    placement: d,
    strategy: i,
    middlewareData: m
  };
});
function Ut(e, t) {
  return Re(this, null, function* () {
    var n;
    t === void 0 && (t = {});
    const {
      x: r,
      y: i,
      platform: a,
      rects: s,
      elements: c,
      strategy: l
    } = e, {
      boundary: u = "clippingAncestors",
      rootBoundary: v = "viewport",
      elementContext: p = "floating",
      altBoundary: d = !1,
      padding: m = 0
    } = Me(t, e), g = Yr(m), b = c[d ? p === "floating" ? "reference" : "floating" : p], C = dn(yield a.getClippingRect({
      element: (n = yield a.isElement == null ? void 0 : a.isElement(b)) == null || n ? b : b.contextElement || (yield a.getDocumentElement == null ? void 0 : a.getDocumentElement(c.floating)),
      boundary: u,
      rootBoundary: v,
      strategy: l
    })), y = p === "floating" ? Q(L({}, s.floating), {
      x: r,
      y: i
    }) : s.reference, E = yield a.getOffsetParent == null ? void 0 : a.getOffsetParent(c.floating), S = (yield a.isElement == null ? void 0 : a.isElement(E)) ? (yield a.getScale == null ? void 0 : a.getScale(E)) || {
      x: 1,
      y: 1
    } : {
      x: 1,
      y: 1
    }, x = dn(a.convertOffsetParentRelativeRectToViewportRelativeRect ? yield a.convertOffsetParentRelativeRectToViewportRelativeRect({
      rect: y,
      offsetParent: E,
      strategy: l
    }) : y);
    return {
      top: (C.top - x.top + g.top) / S.y,
      bottom: (x.bottom - C.bottom + g.bottom) / S.y,
      left: (C.left - x.left + g.left) / S.x,
      right: (x.right - C.right + g.right) / S.x
    };
  });
}
const Cr = (e) => ({
  name: "arrow",
  options: e,
  fn(n) {
    return Re(this, null, function* () {
      const {
        x: r,
        y: i,
        placement: a,
        rects: s,
        platform: c,
        elements: l,
        middlewareData: u
      } = n, {
        element: v,
        padding: p = 0
      } = Me(e, n) || {};
      if (v == null)
        return {};
      const d = Yr(p), m = {
        x: r,
        y: i
      }, g = nr(a), w = tr(g), b = yield c.getDimensions(v), C = g === "y", y = C ? "top" : "left", E = C ? "bottom" : "right", S = C ? "clientHeight" : "clientWidth", x = s.reference[w] + s.reference[g] - m[g] - s.floating[w], k = m[g] - s.reference[g], O = yield c.getOffsetParent == null ? void 0 : c.getOffsetParent(v);
      let D = O ? O[S] : 0;
      (!D || !(yield c.isElement == null ? void 0 : c.isElement(O))) && (D = l.floating[S] || s.floating[w]);
      const A = x / 2 - k / 2, K = D / 2 - b[w] / 2 - 1, G = Ke(d[y], K), H = Ke(d[E], K), W = G, I = D - b[w] - H, Y = D / 2 - b[w] / 2 + A, z = Gn(W, Y, I), q = !u.arrow && yt(a) != null && Y != z && s.reference[w] / 2 - (Y < W ? G : H) - b[w] / 2 < 0, X = q ? Y < W ? Y - W : Y - I : 0;
      return {
        [g]: m[g] + X,
        data: L({
          [g]: z,
          centerOffset: Y - z - X
        }, q && {
          alignmentOffset: X
        }),
        reset: q
      };
    });
  }
}), gi = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    fn(n) {
      return Re(this, null, function* () {
        var r, i;
        const {
          placement: a,
          middlewareData: s,
          rects: c,
          initialPlacement: l,
          platform: u,
          elements: v
        } = n, W = Me(e, n), {
          mainAxis: p = !0,
          crossAxis: d = !0,
          fallbackPlacements: m,
          fallbackStrategy: g = "bestFit",
          fallbackAxisSideDirection: w = "none",
          flipAlignment: b = !0
        } = W, C = oe(W, [
          "mainAxis",
          "crossAxis",
          "fallbackPlacements",
          "fallbackStrategy",
          "fallbackAxisSideDirection",
          "flipAlignment"
        ]);
        if ((r = s.arrow) != null && r.alignmentOffset)
          return {};
        const y = Be(a), E = Be(l) === l, S = yield u.isRTL == null ? void 0 : u.isRTL(v.floating), x = m || (E || !b ? [fn(l)] : di(l));
        !m && w !== "none" && x.push(...vi(l, b, w, S));
        const k = [l, ...x], O = yield Ut(n, C), D = [];
        let A = ((i = s.flip) == null ? void 0 : i.overflows) || [];
        if (p && D.push(O[y]), d) {
          const I = fi(a, c, S);
          D.push(O[I[0]], O[I[1]]);
        }
        if (A = [...A, {
          placement: a,
          overflows: D
        }], !D.every((I) => I <= 0)) {
          var K, G;
          const I = (((K = s.flip) == null ? void 0 : K.index) || 0) + 1, Y = k[I];
          if (Y)
            return {
              data: {
                index: I,
                overflows: A
              },
              reset: {
                placement: Y
              }
            };
          let z = (G = A.filter((q) => q.overflows[0] <= 0).sort((q, X) => q.overflows[1] - X.overflows[1])[0]) == null ? void 0 : G.placement;
          if (!z)
            switch (g) {
              case "bestFit": {
                var H;
                const q = (H = A.map((X) => [X.placement, X.overflows.filter((ae) => ae > 0).reduce((ae, Ce) => ae + Ce, 0)]).sort((X, ae) => X[1] - ae[1])[0]) == null ? void 0 : H[0];
                q && (z = q);
                break;
              }
              case "initialPlacement":
                z = l;
                break;
            }
          if (a !== z)
            return {
              reset: {
                placement: z
              }
            };
        }
        return {};
      });
    }
  };
};
function $r(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Sr(e) {
  return ci.some((t) => e[t] >= 0);
}
const bi = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    fn(n) {
      return Re(this, null, function* () {
        const {
          rects: r
        } = n, s = Me(e, n), {
          strategy: i = "referenceHidden"
        } = s, a = oe(s, [
          "strategy"
        ]);
        switch (i) {
          case "referenceHidden": {
            const c = yield Ut(n, Q(L({}, a), {
              elementContext: "reference"
            })), l = $r(c, r.reference);
            return {
              data: {
                referenceHiddenOffsets: l,
                referenceHidden: Sr(l)
              }
            };
          }
          case "escaped": {
            const c = yield Ut(n, Q(L({}, a), {
              altBoundary: !0
            })), l = $r(c, r.floating);
            return {
              data: {
                escapedOffsets: l,
                escaped: Sr(l)
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
function yi(e, t) {
  return Re(this, null, function* () {
    const {
      placement: n,
      platform: r,
      elements: i
    } = e, a = yield r.isRTL == null ? void 0 : r.isRTL(i.floating), s = Be(n), c = yt(n), l = wt(n) === "y", u = ["left", "top"].includes(s) ? -1 : 1, v = a && l ? -1 : 1, p = Me(t, e);
    let {
      mainAxis: d,
      crossAxis: m,
      alignmentAxis: g
    } = typeof p == "number" ? {
      mainAxis: p,
      crossAxis: 0,
      alignmentAxis: null
    } : L({
      mainAxis: 0,
      crossAxis: 0,
      alignmentAxis: null
    }, p);
    return c && typeof g == "number" && (m = c === "end" ? g * -1 : g), l ? {
      x: m * v,
      y: d * u
    } : {
      x: d * u,
      y: m * v
    };
  });
}
const wi = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    fn(n) {
      return Re(this, null, function* () {
        const {
          x: r,
          y: i
        } = n, a = yield yi(n, e);
        return {
          x: r + a.x,
          y: i + a.y,
          data: a
        };
      });
    }
  };
}, xi = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    fn(n) {
      return Re(this, null, function* () {
        const {
          x: r,
          y: i,
          placement: a
        } = n, C = Me(e, n), {
          mainAxis: s = !0,
          crossAxis: c = !1,
          limiter: l = {
            fn: (y) => {
              let {
                x: E,
                y: S
              } = y;
              return {
                x: E,
                y: S
              };
            }
          }
        } = C, u = oe(C, [
          "mainAxis",
          "crossAxis",
          "limiter"
        ]), v = {
          x: r,
          y: i
        }, p = yield Ut(n, u), d = wt(Be(a)), m = er(d);
        let g = v[m], w = v[d];
        if (s) {
          const y = m === "y" ? "top" : "left", E = m === "y" ? "bottom" : "right", S = g + p[y], x = g - p[E];
          g = Gn(S, g, x);
        }
        if (c) {
          const y = d === "y" ? "top" : "left", E = d === "y" ? "bottom" : "right", S = w + p[y], x = w - p[E];
          w = Gn(S, w, x);
        }
        const b = l.fn(Q(L({}, n), {
          [m]: g,
          [d]: w
        }));
        return Q(L({}, b), {
          data: {
            x: b.x - r,
            y: b.y - i
          }
        });
      });
    }
  };
}, Ci = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: r,
        placement: i,
        rects: a,
        middlewareData: s
      } = t, {
        offset: c = 0,
        mainAxis: l = !0,
        crossAxis: u = !0
      } = Me(e, t), v = {
        x: n,
        y: r
      }, p = wt(i), d = er(p);
      let m = v[d], g = v[p];
      const w = Me(c, t), b = typeof w == "number" ? {
        mainAxis: w,
        crossAxis: 0
      } : L({
        mainAxis: 0,
        crossAxis: 0
      }, w);
      if (l) {
        const E = d === "y" ? "height" : "width", S = a.reference[d] - a.floating[E] + b.mainAxis, x = a.reference[d] + a.reference[E] - b.mainAxis;
        m < S ? m = S : m > x && (m = x);
      }
      if (u) {
        var C, y;
        const E = d === "y" ? "width" : "height", S = ["top", "left"].includes(Be(i)), x = a.reference[p] - a.floating[E] + (S && ((C = s.offset) == null ? void 0 : C[p]) || 0) + (S ? 0 : b.crossAxis), k = a.reference[p] + a.reference[E] + (S ? 0 : ((y = s.offset) == null ? void 0 : y[p]) || 0) - (S ? b.crossAxis : 0);
        g < x ? g = x : g > k && (g = k);
      }
      return {
        [d]: m,
        [p]: g
      };
    }
  };
}, $i = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    fn(n) {
      return Re(this, null, function* () {
        const {
          placement: r,
          rects: i,
          platform: a,
          elements: s
        } = n, O = Me(e, n), {
          apply: c = () => {
          }
        } = O, l = oe(O, [
          "apply"
        ]), u = yield Ut(n, l), v = Be(r), p = yt(r), d = wt(r) === "y", {
          width: m,
          height: g
        } = i.floating;
        let w, b;
        v === "top" || v === "bottom" ? (w = v, b = p === ((yield a.isRTL == null ? void 0 : a.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (b = v, w = p === "end" ? "top" : "bottom");
        const C = g - u[w], y = m - u[b], E = !n.middlewareData.shift;
        let S = C, x = y;
        if (d) {
          const D = m - u.left - u.right;
          x = p || E ? Ke(y, D) : D;
        } else {
          const D = g - u.top - u.bottom;
          S = p || E ? Ke(C, D) : D;
        }
        if (E && !p) {
          const D = de(u.left, 0), A = de(u.right, 0), K = de(u.top, 0), G = de(u.bottom, 0);
          d ? x = m - 2 * (D !== 0 || A !== 0 ? D + A : de(u.left, u.right)) : S = g - 2 * (K !== 0 || G !== 0 ? K + G : de(u.top, u.bottom));
        }
        yield c(Q(L({}, n), {
          availableWidth: x,
          availableHeight: S
        }));
        const k = yield a.getDimensions(s.floating);
        return m !== k.width || g !== k.height ? {
          reset: {
            rects: !0
          }
        } : {};
      });
    }
  };
};
function qe(e) {
  return Kr(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function pe(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function ze(e) {
  var t;
  return (t = (Kr(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Kr(e) {
  return e instanceof Node || e instanceof pe(e).Node;
}
function We(e) {
  return e instanceof Element || e instanceof pe(e).Element;
}
function De(e) {
  return e instanceof HTMLElement || e instanceof pe(e).HTMLElement;
}
function Er(e) {
  return typeof ShadowRoot == "undefined" ? !1 : e instanceof ShadowRoot || e instanceof pe(e).ShadowRoot;
}
function Gt(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: i
  } = we(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(i);
}
function Si(e) {
  return ["table", "td", "th"].includes(qe(e));
}
function rr(e) {
  const t = or(), n = we(e);
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function Ei(e) {
  let t = bt(e);
  for (; De(t) && !vn(t); ) {
    if (rr(t))
      return t;
    t = bt(t);
  }
  return null;
}
function or() {
  return typeof CSS == "undefined" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function vn(e) {
  return ["html", "body", "#document"].includes(qe(e));
}
function we(e) {
  return pe(e).getComputedStyle(e);
}
function mn(e) {
  return We(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  };
}
function bt(e) {
  if (qe(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Er(e) && e.host || // Fallback.
    ze(e)
  );
  return Er(t) ? t.host : t;
}
function Gr(e) {
  const t = bt(e);
  return vn(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : De(t) && Gt(t) ? t : Gr(t);
}
function Vt(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const i = Gr(e), a = i === ((r = e.ownerDocument) == null ? void 0 : r.body), s = pe(i);
  return a ? t.concat(s, s.visualViewport || [], Gt(i) ? i : [], s.frameElement && n ? Vt(s.frameElement) : []) : t.concat(i, Vt(i, [], n));
}
function qr(e) {
  const t = we(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const i = De(e), a = i ? e.offsetWidth : n, s = i ? e.offsetHeight : r, c = un(n) !== a || un(r) !== s;
  return c && (n = a, r = s), {
    width: n,
    height: r,
    $: c
  };
}
function ir(e) {
  return We(e) ? e : e.contextElement;
}
function ht(e) {
  const t = ir(e);
  if (!De(t))
    return Ge(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: i,
    $: a
  } = qr(t);
  let s = (a ? un(n.width) : n.width) / r, c = (a ? un(n.height) : n.height) / i;
  return (!s || !Number.isFinite(s)) && (s = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: s,
    y: c
  };
}
const Pi = /* @__PURE__ */ Ge(0);
function Xr(e) {
  const t = pe(e);
  return !or() || !t.visualViewport ? Pi : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Ri(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== pe(e) ? !1 : t;
}
function st(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const i = e.getBoundingClientRect(), a = ir(e);
  let s = Ge(1);
  t && (r ? We(r) && (s = ht(r)) : s = ht(e));
  const c = Ri(a, n, r) ? Xr(a) : Ge(0);
  let l = (i.left + c.x) / s.x, u = (i.top + c.y) / s.y, v = i.width / s.x, p = i.height / s.y;
  if (a) {
    const d = pe(a), m = r && We(r) ? pe(r) : r;
    let g = d.frameElement;
    for (; g && r && m !== d; ) {
      const w = ht(g), b = g.getBoundingClientRect(), C = we(g), y = b.left + (g.clientLeft + parseFloat(C.paddingLeft)) * w.x, E = b.top + (g.clientTop + parseFloat(C.paddingTop)) * w.y;
      l *= w.x, u *= w.y, v *= w.x, p *= w.y, l += y, u += E, g = pe(g).frameElement;
    }
  }
  return dn({
    width: v,
    height: p,
    x: l,
    y: u
  });
}
function Oi(e) {
  let {
    rect: t,
    offsetParent: n,
    strategy: r
  } = e;
  const i = De(n), a = ze(n);
  if (n === a)
    return t;
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = Ge(1);
  const l = Ge(0);
  if ((i || !i && r !== "fixed") && ((qe(n) !== "body" || Gt(a)) && (s = mn(n)), De(n))) {
    const u = st(n);
    c = ht(n), l.x = u.x + n.clientLeft, l.y = u.y + n.clientTop;
  }
  return {
    width: t.width * c.x,
    height: t.height * c.y,
    x: t.x * c.x - s.scrollLeft * c.x + l.x,
    y: t.y * c.y - s.scrollTop * c.y + l.y
  };
}
function ki(e) {
  return Array.from(e.getClientRects());
}
function Hr(e) {
  return st(ze(e)).left + mn(e).scrollLeft;
}
function Ti(e) {
  const t = ze(e), n = mn(e), r = e.ownerDocument.body, i = de(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = de(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + Hr(e);
  const c = -n.scrollTop;
  return we(r).direction === "rtl" && (s += de(t.clientWidth, r.clientWidth) - i), {
    width: i,
    height: a,
    x: s,
    y: c
  };
}
function Ai(e, t) {
  const n = pe(e), r = ze(e), i = n.visualViewport;
  let a = r.clientWidth, s = r.clientHeight, c = 0, l = 0;
  if (i) {
    a = i.width, s = i.height;
    const u = or();
    (!u || u && t === "fixed") && (c = i.offsetLeft, l = i.offsetTop);
  }
  return {
    width: a,
    height: s,
    x: c,
    y: l
  };
}
function _i(e, t) {
  const n = st(e, !0, t === "fixed"), r = n.top + e.clientTop, i = n.left + e.clientLeft, a = De(e) ? ht(e) : Ge(1), s = e.clientWidth * a.x, c = e.clientHeight * a.y, l = i * a.x, u = r * a.y;
  return {
    width: s,
    height: c,
    x: l,
    y: u
  };
}
function Pr(e, t, n) {
  let r;
  if (t === "viewport")
    r = Ai(e, n);
  else if (t === "document")
    r = Ti(ze(e));
  else if (We(t))
    r = _i(t, n);
  else {
    const i = Xr(e);
    r = Q(L({}, t), {
      x: t.x - i.x,
      y: t.y - i.y
    });
  }
  return dn(r);
}
function Jr(e, t) {
  const n = bt(e);
  return n === t || !We(n) || vn(n) ? !1 : we(n).position === "fixed" || Jr(n, t);
}
function Di(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Vt(e, [], !1).filter((c) => We(c) && qe(c) !== "body"), i = null;
  const a = we(e).position === "fixed";
  let s = a ? bt(e) : e;
  for (; We(s) && !vn(s); ) {
    const c = we(s), l = rr(s);
    !l && c.position === "fixed" && (i = null), (a ? !l && !i : !l && c.position === "static" && !!i && ["absolute", "fixed"].includes(i.position) || Gt(s) && !l && Jr(e, s)) ? r = r.filter((v) => v !== s) : i = c, s = bt(s);
  }
  return t.set(e, r), r;
}
function Ni(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: i
  } = e;
  const s = [...n === "clippingAncestors" ? Di(t, this._c) : [].concat(n), r], c = s[0], l = s.reduce((u, v) => {
    const p = Pr(t, v, i);
    return u.top = de(p.top, u.top), u.right = Ke(p.right, u.right), u.bottom = Ke(p.bottom, u.bottom), u.left = de(p.left, u.left), u;
  }, Pr(t, c, i));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function ji(e) {
  return qr(e);
}
function Li(e, t, n) {
  const r = De(t), i = ze(t), a = n === "fixed", s = st(e, !0, a, t);
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Ge(0);
  if (r || !r && !a)
    if ((qe(t) !== "body" || Gt(i)) && (c = mn(t)), r) {
      const u = st(t, !0, a, t);
      l.x = u.x + t.clientLeft, l.y = u.y + t.clientTop;
    } else
      i && (l.x = Hr(i));
  return {
    x: s.left + c.scrollLeft - l.x,
    y: s.top + c.scrollTop - l.y,
    width: s.width,
    height: s.height
  };
}
function Rr(e, t) {
  return !De(e) || we(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function Zr(e, t) {
  const n = pe(e);
  if (!De(e))
    return n;
  let r = Rr(e, t);
  for (; r && Si(r) && we(r).position === "static"; )
    r = Rr(r, t);
  return r && (qe(r) === "html" || qe(r) === "body" && we(r).position === "static" && !rr(r)) ? n : r || Ei(e) || n;
}
const Ii = function(e) {
  return Re(this, null, function* () {
    let {
      reference: t,
      floating: n,
      strategy: r
    } = e;
    const i = this.getOffsetParent || Zr, a = this.getDimensions;
    return {
      reference: Li(t, yield i(n), r),
      floating: L({
        x: 0,
        y: 0
      }, yield a(n))
    };
  });
};
function Fi(e) {
  return we(e).direction === "rtl";
}
const Mi = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Oi,
  getDocumentElement: ze,
  getClippingRect: Ni,
  getOffsetParent: Zr,
  getElementRects: Ii,
  getClientRects: ki,
  getDimensions: ji,
  getScale: ht,
  isElement: We,
  isRTL: Fi
};
function Bi(e, t) {
  let n = null, r;
  const i = ze(e);
  function a() {
    clearTimeout(r), n && n.disconnect(), n = null;
  }
  function s(c, l) {
    c === void 0 && (c = !1), l === void 0 && (l = 1), a();
    const {
      left: u,
      top: v,
      width: p,
      height: d
    } = e.getBoundingClientRect();
    if (c || t(), !p || !d)
      return;
    const m = Jt(v), g = Jt(i.clientWidth - (u + p)), w = Jt(i.clientHeight - (v + d)), b = Jt(u), y = {
      rootMargin: -m + "px " + -g + "px " + -w + "px " + -b + "px",
      threshold: de(0, Ke(1, l)) || 1
    };
    let E = !0;
    function S(x) {
      const k = x[0].intersectionRatio;
      if (k !== l) {
        if (!E)
          return s();
        k ? s(!1, k) : r = setTimeout(() => {
          s(!1, 1e-7);
        }, 100);
      }
      E = !1;
    }
    try {
      n = new IntersectionObserver(S, Q(L({}, y), {
        // Handle <iframe>s
        root: i.ownerDocument
      }));
    } catch (x) {
      n = new IntersectionObserver(S, y);
    }
    n.observe(e);
  }
  return s(!0), a;
}
function Wi(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: a = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: c = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, u = ir(e), v = i || a ? [...u ? Vt(u) : [], ...Vt(t)] : [];
  v.forEach((C) => {
    i && C.addEventListener("scroll", n, {
      passive: !0
    }), a && C.addEventListener("resize", n);
  });
  const p = u && c ? Bi(u, n) : null;
  let d = -1, m = null;
  s && (m = new ResizeObserver((C) => {
    let [y] = C;
    y && y.target === u && m && (m.unobserve(t), cancelAnimationFrame(d), d = requestAnimationFrame(() => {
      m && m.observe(t);
    })), n();
  }), u && !l && m.observe(u), m.observe(t));
  let g, w = l ? st(e) : null;
  l && b();
  function b() {
    const C = st(e);
    w && (C.x !== w.x || C.y !== w.y || C.width !== w.width || C.height !== w.height) && n(), w = C, g = requestAnimationFrame(b);
  }
  return n(), () => {
    v.forEach((C) => {
      i && C.removeEventListener("scroll", n), a && C.removeEventListener("resize", n);
    }), p && p(), m && m.disconnect(), m = null, l && cancelAnimationFrame(g);
  };
}
const zi = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), i = L({
    platform: Mi
  }, n), a = Q(L({}, i.platform), {
    _c: r
  });
  return hi(e, t, Q(L({}, i), {
    platform: a
  }));
}, Ui = (e) => {
  function t(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const {
        element: r,
        padding: i
      } = typeof e == "function" ? e(n) : e;
      return r && t(r) ? r.current != null ? Cr({
        element: r.current,
        padding: i
      }).fn(n) : {} : r ? Cr({
        element: r,
        padding: i
      }).fn(n) : {};
    }
  };
};
var an = typeof document != "undefined" ? Fe : te;
function pn(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, r, i;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n != t.length)
        return !1;
      for (r = n; r-- !== 0; )
        if (!pn(e[r], t[r]))
          return !1;
      return !0;
    }
    if (i = Object.keys(e), n = i.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!{}.hasOwnProperty.call(t, i[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      const a = i[r];
      if (!(a === "_owner" && e.$$typeof) && !pn(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Qr(e) {
  return typeof window == "undefined" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Or(e, t) {
  const n = Qr(e);
  return Math.round(t * n) / n;
}
function kr(e) {
  const t = j.useRef(e);
  return an(() => {
    t.current = e;
  }), t;
}
function Vi(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: i,
    elements: {
      reference: a,
      floating: s
    } = {},
    transform: c = !0,
    whileElementsMounted: l,
    open: u
  } = e, [v, p] = j.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [d, m] = j.useState(r);
  pn(d, r) || m(r);
  const [g, w] = j.useState(null), [b, C] = j.useState(null), y = j.useCallback((z) => {
    z != k.current && (k.current = z, w(z));
  }, [w]), E = j.useCallback((z) => {
    z !== O.current && (O.current = z, C(z));
  }, [C]), S = a || g, x = s || b, k = j.useRef(null), O = j.useRef(null), D = j.useRef(v), A = kr(l), K = kr(i), G = j.useCallback(() => {
    if (!k.current || !O.current)
      return;
    const z = {
      placement: t,
      strategy: n,
      middleware: d
    };
    K.current && (z.platform = K.current), zi(k.current, O.current, z).then((q) => {
      const X = Q(L({}, q), {
        isPositioned: !0
      });
      H.current && !pn(D.current, X) && (D.current = X, Eo.flushSync(() => {
        p(X);
      }));
    });
  }, [d, t, n, K]);
  an(() => {
    u === !1 && D.current.isPositioned && (D.current.isPositioned = !1, p((z) => Q(L({}, z), {
      isPositioned: !1
    })));
  }, [u]);
  const H = j.useRef(!1);
  an(() => (H.current = !0, () => {
    H.current = !1;
  }), []), an(() => {
    if (S && (k.current = S), x && (O.current = x), S && x) {
      if (A.current)
        return A.current(S, x, G);
      G();
    }
  }, [S, x, G, A]);
  const W = j.useMemo(() => ({
    reference: k,
    floating: O,
    setReference: y,
    setFloating: E
  }), [y, E]), I = j.useMemo(() => ({
    reference: S,
    floating: x
  }), [S, x]), Y = j.useMemo(() => {
    const z = {
      position: n,
      left: 0,
      top: 0
    };
    if (!I.floating)
      return z;
    const q = Or(I.floating, v.x), X = Or(I.floating, v.y);
    return c ? L(Q(L({}, z), {
      transform: "translate(" + q + "px, " + X + "px)"
    }), Qr(I.floating) >= 1.5 && {
      willChange: "transform"
    }) : {
      position: n,
      left: q,
      top: X
    };
  }, [n, c, I.floating, v.x, v.y]);
  return j.useMemo(() => Q(L({}, v), {
    update: G,
    refs: W,
    elements: I,
    floatingStyles: Y
  }), [v, G, W, I, Y]);
}
function Yi(e) {
  const [t, n] = U(void 0);
  return gt(() => {
    if (e) {
      n({
        width: e.offsetWidth,
        height: e.offsetHeight
      });
      const r = new ResizeObserver((i) => {
        if (!Array.isArray(i) || !i.length)
          return;
        const a = i[0];
        let s, c;
        if ("borderBoxSize" in a) {
          const l = a.borderBoxSize, u = Array.isArray(l) ? l[0] : l;
          s = u.inlineSize, c = u.blockSize;
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
const eo = "Popper", [to, no] = zr(eo), [Ki, ro] = to(eo), Gi = (e) => {
  const { __scopePopper: t, children: n } = e, [r, i] = U(null);
  return /* @__PURE__ */ ee(Ki, {
    scope: t,
    anchor: r,
    onAnchorChange: i
  }, n);
}, qi = "PopperAnchor", Xi = /* @__PURE__ */ xe((e, t) => {
  const l = e, { __scopePopper: n, virtualRef: r } = l, i = oe(l, ["__scopePopper", "virtualRef"]), a = ro(qi, n), s = re(null), c = ct(t, s);
  return te(() => {
    a.onAnchorChange((r == null ? void 0 : r.current) || s.current);
  }), r ? null : /* @__PURE__ */ ee(Kt.div, se({}, i, {
    ref: c
  }));
}), oo = "PopperContent", [Hi, us] = to(oo), Ji = /* @__PURE__ */ xe((e, t) => {
  var n, r, i, a, s, c, l, u;
  const he = e, { __scopePopper: v, side: p = "bottom", sideOffset: d = 0, align: m = "center", alignOffset: g = 0, arrowPadding: w = 0, avoidCollisions: b = !0, collisionBoundary: C = [], collisionPadding: y = 0, sticky: E = "partial", hideWhenDetached: S = !1, updatePositionStrategy: x = "optimized", onPlaced: k } = he, O = oe(he, ["__scopePopper", "side", "sideOffset", "align", "alignOffset", "arrowPadding", "avoidCollisions", "collisionBoundary", "collisionPadding", "sticky", "hideWhenDetached", "updatePositionStrategy", "onPlaced"]), D = ro(oo, v), [A, K] = U(null), G = ct(
    t,
    (ce) => K(ce)
  ), [H, W] = U(null), I = Yi(H), Y = (n = I == null ? void 0 : I.width) !== null && n !== void 0 ? n : 0, z = (r = I == null ? void 0 : I.height) !== null && r !== void 0 ? r : 0, q = p + (m !== "center" ? "-" + m : ""), X = typeof y == "number" ? y : L({
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }, y), ae = Array.isArray(C) ? C : [
    C
  ], Ce = ae.length > 0, ve = {
    padding: X,
    boundary: ae.filter(Zi),
    // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
    altBoundary: Ce
  }, { refs: Ne, floatingStyles: Oe, placement: Xe, isPositioned: ke, middlewareData: ie } = Vi({
    // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
    strategy: "fixed",
    placement: q,
    whileElementsMounted: (...ce) => Wi(...ce, {
      animationFrame: x === "always"
    }),
    elements: {
      reference: D.anchor
    },
    middleware: [
      wi({
        mainAxis: d + z,
        alignmentAxis: g
      }),
      b && xi(L({
        mainAxis: !0,
        crossAxis: !1,
        limiter: E === "partial" ? Ci() : void 0
      }, ve)),
      b && gi(L({}, ve)),
      $i(Q(L({}, ve), {
        apply: ({ elements: ce, rects: Ue, availableWidth: Je, availableHeight: Ee }) => {
          const { width: St, height: Et } = Ue.reference, ge = ce.floating.style;
          ge.setProperty("--radix-popper-available-width", `${Je}px`), ge.setProperty("--radix-popper-available-height", `${Ee}px`), ge.setProperty("--radix-popper-anchor-width", `${St}px`), ge.setProperty("--radix-popper-anchor-height", `${Et}px`);
        }
      })),
      H && Ui({
        element: H,
        padding: w
      }),
      Qi({
        arrowWidth: Y,
        arrowHeight: z
      }),
      S && bi(L({
        strategy: "referenceHidden"
      }, ve))
    ]
  }), [J, $e] = io(Xe), me = Ye(k);
  gt(() => {
    ke && (me == null || me());
  }, [
    ke,
    me
  ]);
  const Se = (i = ie.arrow) === null || i === void 0 ? void 0 : i.x, xt = (a = ie.arrow) === null || a === void 0 ? void 0 : a.y, He = ((s = ie.arrow) === null || s === void 0 ? void 0 : s.centerOffset) !== 0, [Ct, $t] = U();
  return gt(() => {
    A && $t(window.getComputedStyle(A).zIndex);
  }, [
    A
  ]), /* @__PURE__ */ ee("div", {
    ref: Ne.setFloating,
    "data-radix-popper-content-wrapper": "",
    style: Q(L({}, Oe), {
      transform: ke ? Oe.transform : "translate(0, -200%)",
      // keep off the page when measuring
      minWidth: "max-content",
      zIndex: Ct,
      "--radix-popper-transform-origin": [
        (c = ie.transformOrigin) === null || c === void 0 ? void 0 : c.x,
        (l = ie.transformOrigin) === null || l === void 0 ? void 0 : l.y
      ].join(" ")
    }),
    dir: e.dir
  }, /* @__PURE__ */ ee(Hi, {
    scope: v,
    placedSide: J,
    onArrowChange: W,
    arrowX: Se,
    arrowY: xt,
    shouldHideArrow: He
  }, /* @__PURE__ */ ee(Kt.div, se({
    "data-side": J,
    "data-align": $e
  }, O, {
    ref: G,
    style: Q(L({}, O.style), {
      // if the PopperContent hasn't been placed yet (not all measurements done)
      // we prevent animations so that users's animation don't kick in too early referring wrong sides
      animation: ke ? void 0 : "none",
      // hide the content if using the hide middleware and should be hidden
      opacity: (u = ie.hide) !== null && u !== void 0 && u.referenceHidden ? 0 : void 0
    })
  }))));
});
function Zi(e) {
  return e !== null;
}
const Qi = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var n, r, i, a, s;
    const { placement: c, rects: l, middlewareData: u } = t, p = ((n = u.arrow) === null || n === void 0 ? void 0 : n.centerOffset) !== 0, d = p ? 0 : e.arrowWidth, m = p ? 0 : e.arrowHeight, [g, w] = io(c), b = {
      start: "0%",
      center: "50%",
      end: "100%"
    }[w], C = ((r = (i = u.arrow) === null || i === void 0 ? void 0 : i.x) !== null && r !== void 0 ? r : 0) + d / 2, y = ((a = (s = u.arrow) === null || s === void 0 ? void 0 : s.y) !== null && a !== void 0 ? a : 0) + m / 2;
    let E = "", S = "";
    return g === "bottom" ? (E = p ? b : `${C}px`, S = `${-m}px`) : g === "top" ? (E = p ? b : `${C}px`, S = `${l.floating.height + m}px`) : g === "right" ? (E = `${-m}px`, S = p ? b : `${y}px`) : g === "left" && (E = `${l.floating.width + m}px`, S = p ? b : `${y}px`), {
      data: {
        x: E,
        y: S
      }
    };
  }
});
function io(e) {
  const [t, n = "center"] = e.split("-");
  return [
    t,
    n
  ];
}
const ea = Gi, ta = Xi, na = Ji;
function ra(e, t) {
  return So((n, r) => {
    const i = t[n][r];
    return i != null ? i : n;
  }, e);
}
const ao = (e) => {
  const { present: t, children: n } = e, r = oa(t), i = typeof n == "function" ? n({
    present: r.isPresent
  }) : mt.only(n), a = ct(r.ref, i.ref);
  return typeof n == "function" || r.isPresent ? /* @__PURE__ */ Hn(i, {
    ref: a
  }) : null;
};
ao.displayName = "Presence";
function oa(e) {
  const [t, n] = U(), r = re({}), i = re(e), a = re("none"), s = e ? "mounted" : "unmounted", [c, l] = ra(s, {
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
    const u = Zt(r.current);
    a.current = c === "mounted" ? u : "none";
  }, [
    c
  ]), gt(() => {
    const u = r.current, v = i.current;
    if (v !== e) {
      const d = a.current, m = Zt(u);
      e ? l("MOUNT") : m === "none" || (u == null ? void 0 : u.display) === "none" ? l("UNMOUNT") : l(v && d !== m ? "ANIMATION_OUT" : "UNMOUNT"), i.current = e;
    }
  }, [
    e,
    l
  ]), gt(() => {
    if (t) {
      const u = (p) => {
        const m = Zt(r.current).includes(p.animationName);
        p.target === t && m && Lr(
          () => l("ANIMATION_END")
        );
      }, v = (p) => {
        p.target === t && (a.current = Zt(r.current));
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
    ].includes(c),
    ref: ot((u) => {
      u && (r.current = getComputedStyle(u)), n(u);
    }, [])
  };
}
function Zt(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function ia({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [r, i] = aa({
    defaultProp: t,
    onChange: n
  }), a = e !== void 0, s = a ? e : r, c = Ye(n), l = ot((u) => {
    if (a) {
      const p = typeof u == "function" ? u(e) : u;
      p !== e && c(p);
    } else
      i(u);
  }, [
    a,
    e,
    i,
    c
  ]);
  return [
    s,
    l
  ];
}
function aa({ defaultProp: e, onChange: t }) {
  const n = U(e), [r] = n, i = re(r), a = Ye(t);
  return te(() => {
    i.current !== r && (a(r), i.current = r);
  }, [
    r,
    i,
    a
  ]), n;
}
var sa = function(e) {
  if (typeof document == "undefined")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, lt = /* @__PURE__ */ new WeakMap(), Qt = /* @__PURE__ */ new WeakMap(), en = {}, Fn = 0, so = function(e) {
  return e && (e.host || so(e.parentNode));
}, ca = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = so(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, la = function(e, t, n, r) {
  var i = ca(t, Array.isArray(e) ? e : [e]);
  en[n] || (en[n] = /* @__PURE__ */ new WeakMap());
  var a = en[n], s = [], c = /* @__PURE__ */ new Set(), l = new Set(i), u = function(p) {
    !p || c.has(p) || (c.add(p), u(p.parentNode));
  };
  i.forEach(u);
  var v = function(p) {
    !p || l.has(p) || Array.prototype.forEach.call(p.children, function(d) {
      if (c.has(d))
        v(d);
      else {
        var m = d.getAttribute(r), g = m !== null && m !== "false", w = (lt.get(d) || 0) + 1, b = (a.get(d) || 0) + 1;
        lt.set(d, w), a.set(d, b), s.push(d), w === 1 && g && Qt.set(d, !0), b === 1 && d.setAttribute(n, "true"), g || d.setAttribute(r, "true");
      }
    });
  };
  return v(t), c.clear(), Fn++, function() {
    s.forEach(function(p) {
      var d = lt.get(p) - 1, m = a.get(p) - 1;
      lt.set(p, d), a.set(p, m), d || (Qt.has(p) || p.removeAttribute(r), Qt.delete(p)), m || p.removeAttribute(n);
    }), Fn--, Fn || (lt = /* @__PURE__ */ new WeakMap(), lt = /* @__PURE__ */ new WeakMap(), Qt = /* @__PURE__ */ new WeakMap(), en = {});
  };
}, ua = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), i = t || sa(e);
  return i ? (r.push.apply(r, Array.from(i.querySelectorAll("[aria-live]"))), la(r, i, n, "aria-hidden")) : function() {
    return null;
  };
}, Ae = function() {
  return Ae = Object.assign || function(t) {
    for (var n, r = 1, i = arguments.length; r < i; r++) {
      n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, Ae.apply(this, arguments);
};
function co(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
  return n;
}
function fa(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, i = t.length, a; r < i; r++)
      (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var sn = "right-scroll-bar-position", cn = "width-before-scroll-bar", da = "with-scroll-bars-hidden", pa = "--removed-body-scroll-bar-size";
function va(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function ma(e, t) {
  var n = U(function() {
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
          var i = n.value;
          i !== r && (n.value = r, n.callback(r, i));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
function ha(e, t) {
  return ma(t || null, function(n) {
    return e.forEach(function(r) {
      return va(r, n);
    });
  });
}
function ga(e) {
  return e;
}
function ba(e, t) {
  t === void 0 && (t = ga);
  var n = [], r = !1, i = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(a) {
      var s = t(a, r);
      return n.push(s), function() {
        n = n.filter(function(c) {
          return c !== s;
        });
      };
    },
    assignSyncMedium: function(a) {
      for (r = !0; n.length; ) {
        var s = n;
        n = [], s.forEach(a);
      }
      n = {
        push: function(c) {
          return a(c);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(a) {
      r = !0;
      var s = [];
      if (n.length) {
        var c = n;
        n = [], c.forEach(a), s = n;
      }
      var l = function() {
        var v = s;
        s = [], v.forEach(a);
      }, u = function() {
        return Promise.resolve().then(l);
      };
      u(), n = {
        push: function(v) {
          s.push(v), u();
        },
        filter: function(v) {
          return s = s.filter(v), n;
        }
      };
    }
  };
  return i;
}
function ya(e) {
  e === void 0 && (e = {});
  var t = ba(null);
  return t.options = Ae({ async: !0, ssr: !1 }, e), t;
}
var lo = function(e) {
  var t = e.sideCar, n = co(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return j.createElement(r, Ae({}, n));
};
lo.isSideCarExport = !0;
function wa(e, t) {
  return e.useMedium(t), lo;
}
var uo = ya(), Mn = function() {
}, hn = j.forwardRef(function(e, t) {
  var n = j.useRef(null), r = j.useState({
    onScrollCapture: Mn,
    onWheelCapture: Mn,
    onTouchMoveCapture: Mn
  }), i = r[0], a = r[1], s = e.forwardProps, c = e.children, l = e.className, u = e.removeScrollBar, v = e.enabled, p = e.shards, d = e.sideCar, m = e.noIsolation, g = e.inert, w = e.allowPinchZoom, b = e.as, C = b === void 0 ? "div" : b, y = co(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]), E = d, S = ha([n, t]), x = Ae(Ae({}, y), i);
  return j.createElement(
    j.Fragment,
    null,
    v && j.createElement(E, { sideCar: uo, removeScrollBar: u, shards: p, noIsolation: m, inert: g, setCallbacks: a, allowPinchZoom: !!w, lockRef: n }),
    s ? j.cloneElement(j.Children.only(c), Ae(Ae({}, x), { ref: S })) : j.createElement(C, Ae({}, x, { className: l, ref: S }), c)
  );
});
hn.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
hn.classNames = {
  fullWidth: cn,
  zeroRight: sn
};
var Tr, xa = function() {
  if (Tr)
    return Tr;
  if (typeof __webpack_nonce__ != "undefined")
    return __webpack_nonce__;
};
function Ca() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = xa();
  return t && e.setAttribute("nonce", t), e;
}
function $a(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Sa(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var Ea = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = Ca()) && ($a(t, n), Sa(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, Pa = function() {
  var e = Ea();
  return function(t, n) {
    j.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, fo = function() {
  var e = Pa(), t = function(n) {
    var r = n.styles, i = n.dynamic;
    return e(r, i), null;
  };
  return t;
}, Ra = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Bn = function(e) {
  return parseInt(e || "", 10) || 0;
}, Oa = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], i = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Bn(n), Bn(r), Bn(i)];
}, ka = function(e) {
  if (e === void 0 && (e = "margin"), typeof window == "undefined")
    return Ra;
  var t = Oa(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, Ta = fo(), Aa = function(e, t, n, r) {
  var i = e.left, a = e.top, s = e.right, c = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(da, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(c, "px ").concat(r, `;
  }
  body {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(i, `px;
    padding-top: `).concat(a, `px;
    padding-right: `).concat(s, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(c, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(c, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(sn, ` {
    right: `).concat(c, "px ").concat(r, `;
  }
  
  .`).concat(cn, ` {
    margin-right: `).concat(c, "px ").concat(r, `;
  }
  
  .`).concat(sn, " .").concat(sn, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(cn, " .").concat(cn, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body {
    `).concat(pa, ": ").concat(c, `px;
  }
`);
}, _a = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, i = r === void 0 ? "margin" : r, a = j.useMemo(function() {
    return ka(i);
  }, [i]);
  return j.createElement(Ta, { styles: Aa(a, !t, i, n ? "" : "!important") });
}, Xn = !1;
if (typeof window != "undefined")
  try {
    var tn = Object.defineProperty({}, "passive", {
      get: function() {
        return Xn = !0, !0;
      }
    });
    window.addEventListener("test", tn, tn), window.removeEventListener("test", tn, tn);
  } catch (e) {
    Xn = !1;
  }
var ut = Xn ? { passive: !1 } : !1, Da = function(e) {
  return e.tagName === "TEXTAREA";
}, po = function(e, t) {
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !Da(e) && n[t] === "visible")
  );
}, Na = function(e) {
  return po(e, "overflowY");
}, ja = function(e) {
  return po(e, "overflowX");
}, Ar = function(e, t) {
  var n = t;
  do {
    typeof ShadowRoot != "undefined" && n instanceof ShadowRoot && (n = n.host);
    var r = vo(e, n);
    if (r) {
      var i = mo(e, n), a = i[1], s = i[2];
      if (a > s)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== document.body);
  return !1;
}, La = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, Ia = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, vo = function(e, t) {
  return e === "v" ? Na(t) : ja(t);
}, mo = function(e, t) {
  return e === "v" ? La(t) : Ia(t);
}, Fa = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, Ma = function(e, t, n, r, i) {
  var a = Fa(e, window.getComputedStyle(t).direction), s = a * r, c = n.target, l = t.contains(c), u = !1, v = s > 0, p = 0, d = 0;
  do {
    var m = mo(e, c), g = m[0], w = m[1], b = m[2], C = w - b - a * g;
    (g || C) && vo(e, c) && (p += C, d += g), c = c.parentNode;
  } while (
    // portaled content
    !l && c !== document.body || // self content
    l && (t.contains(c) || t === c)
  );
  return (v && (i && p === 0 || !i && s > p) || !v && (i && d === 0 || !i && -s > d)) && (u = !0), u;
}, nn = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, _r = function(e) {
  return [e.deltaX, e.deltaY];
}, Dr = function(e) {
  return e && "current" in e ? e.current : e;
}, Ba = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, Wa = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, za = 0, ft = [];
function Ua(e) {
  var t = j.useRef([]), n = j.useRef([0, 0]), r = j.useRef(), i = j.useState(za++)[0], a = j.useState(function() {
    return fo();
  })[0], s = j.useRef(e);
  j.useEffect(function() {
    s.current = e;
  }, [e]), j.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(i));
      var w = fa([e.lockRef.current], (e.shards || []).map(Dr), !0).filter(Boolean);
      return w.forEach(function(b) {
        return b.classList.add("allow-interactivity-".concat(i));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(i)), w.forEach(function(b) {
          return b.classList.remove("allow-interactivity-".concat(i));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var c = j.useCallback(function(w, b) {
    if ("touches" in w && w.touches.length === 2)
      return !s.current.allowPinchZoom;
    var C = nn(w), y = n.current, E = "deltaX" in w ? w.deltaX : y[0] - C[0], S = "deltaY" in w ? w.deltaY : y[1] - C[1], x, k = w.target, O = Math.abs(E) > Math.abs(S) ? "h" : "v";
    if ("touches" in w && O === "h" && k.type === "range")
      return !1;
    var D = Ar(O, k);
    if (!D)
      return !0;
    if (D ? x = O : (x = O === "v" ? "h" : "v", D = Ar(O, k)), !D)
      return !1;
    if (!r.current && "changedTouches" in w && (E || S) && (r.current = x), !x)
      return !0;
    var A = r.current || x;
    return Ma(A, b, w, A === "h" ? E : S, !0);
  }, []), l = j.useCallback(function(w) {
    var b = w;
    if (!(!ft.length || ft[ft.length - 1] !== a)) {
      var C = "deltaY" in b ? _r(b) : nn(b), y = t.current.filter(function(x) {
        return x.name === b.type && x.target === b.target && Ba(x.delta, C);
      })[0];
      if (y && y.should) {
        b.cancelable && b.preventDefault();
        return;
      }
      if (!y) {
        var E = (s.current.shards || []).map(Dr).filter(Boolean).filter(function(x) {
          return x.contains(b.target);
        }), S = E.length > 0 ? c(b, E[0]) : !s.current.noIsolation;
        S && b.cancelable && b.preventDefault();
      }
    }
  }, []), u = j.useCallback(function(w, b, C, y) {
    var E = { name: w, delta: b, target: C, should: y };
    t.current.push(E), setTimeout(function() {
      t.current = t.current.filter(function(S) {
        return S !== E;
      });
    }, 1);
  }, []), v = j.useCallback(function(w) {
    n.current = nn(w), r.current = void 0;
  }, []), p = j.useCallback(function(w) {
    u(w.type, _r(w), w.target, c(w, e.lockRef.current));
  }, []), d = j.useCallback(function(w) {
    u(w.type, nn(w), w.target, c(w, e.lockRef.current));
  }, []);
  j.useEffect(function() {
    return ft.push(a), e.setCallbacks({
      onScrollCapture: p,
      onWheelCapture: p,
      onTouchMoveCapture: d
    }), document.addEventListener("wheel", l, ut), document.addEventListener("touchmove", l, ut), document.addEventListener("touchstart", v, ut), function() {
      ft = ft.filter(function(w) {
        return w !== a;
      }), document.removeEventListener("wheel", l, ut), document.removeEventListener("touchmove", l, ut), document.removeEventListener("touchstart", v, ut);
    };
  }, []);
  var m = e.removeScrollBar, g = e.inert;
  return j.createElement(
    j.Fragment,
    null,
    g ? j.createElement(a, { styles: Wa(i) }) : null,
    m ? j.createElement(_a, { gapMode: "margin" }) : null
  );
}
const Va = wa(uo, Ua);
var ho = j.forwardRef(function(e, t) {
  return j.createElement(hn, Ae({}, e, { ref: t, sideCar: Va }));
});
ho.classNames = hn.classNames;
const Ya = ho, go = "Popover", [bo, fs] = zr(go, [
  no
]), ar = no(), [Ka, qt] = bo(go), Ga = (e) => {
  const { __scopePopover: t, children: n, open: r, defaultOpen: i, onOpenChange: a, modal: s = !1 } = e, c = ar(t), l = re(null), [u, v] = U(!1), [p = !1, d] = ia({
    prop: r,
    defaultProp: i,
    onChange: a
  });
  return /* @__PURE__ */ ee(ea, c, /* @__PURE__ */ ee(Ka, {
    scope: t,
    contentId: si(),
    triggerRef: l,
    open: p,
    onOpenChange: d,
    onOpenToggle: ot(
      () => d(
        (m) => !m
      ),
      [
        d
      ]
    ),
    hasCustomAnchor: u,
    onCustomAnchorAdd: ot(
      () => v(!0),
      []
    ),
    onCustomAnchorRemove: ot(
      () => v(!1),
      []
    ),
    modal: s
  }, n));
}, qa = "PopoverTrigger", Xa = /* @__PURE__ */ xe((e, t) => {
  const l = e, { __scopePopover: n } = l, r = oe(l, ["__scopePopover"]), i = qt(qa, n), a = ar(n), s = ct(t, i.triggerRef), c = /* @__PURE__ */ ee(Kt.button, se({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": i.open,
    "aria-controls": i.contentId,
    "data-state": wo(i.open)
  }, r, {
    ref: s,
    onClick: it(e.onClick, i.onOpenToggle)
  }));
  return i.hasCustomAnchor ? c : /* @__PURE__ */ ee(ta, se({
    asChild: !0
  }, a), c);
}), Ha = "PopoverPortal", [ds, Ja] = bo(Ha, {
  forceMount: void 0
}), Yt = "PopoverContent", Za = /* @__PURE__ */ xe((e, t) => {
  const n = Ja(Yt, e.__scopePopover), s = e, { forceMount: r = n.forceMount } = s, i = oe(s, ["forceMount"]), a = qt(Yt, e.__scopePopover);
  return /* @__PURE__ */ ee(ao, {
    present: r || a.open
  }, a.modal ? /* @__PURE__ */ ee(Qa, se({}, i, {
    ref: t
  })) : /* @__PURE__ */ ee(es, se({}, i, {
    ref: t
  })));
}), Qa = /* @__PURE__ */ xe((e, t) => {
  const n = qt(Yt, e.__scopePopover), r = re(null), i = ct(t, r), a = re(!1);
  return te(() => {
    const s = r.current;
    if (s)
      return ua(s);
  }, []), /* @__PURE__ */ ee(Ya, {
    as: Qn,
    allowPinchZoom: !0
  }, /* @__PURE__ */ ee(yo, se({}, e, {
    ref: i,
    trapFocus: n.open,
    disableOutsidePointerEvents: !0,
    onCloseAutoFocus: it(e.onCloseAutoFocus, (s) => {
      var c;
      s.preventDefault(), a.current || (c = n.triggerRef.current) === null || c === void 0 || c.focus();
    }),
    onPointerDownOutside: it(e.onPointerDownOutside, (s) => {
      const c = s.detail.originalEvent, l = c.button === 0 && c.ctrlKey === !0, u = c.button === 2 || l;
      a.current = u;
    }, {
      checkForDefaultPrevented: !1
    }),
    onFocusOutside: it(
      e.onFocusOutside,
      (s) => s.preventDefault(),
      {
        checkForDefaultPrevented: !1
      }
    )
  })));
}), es = /* @__PURE__ */ xe((e, t) => {
  const n = qt(Yt, e.__scopePopover), r = re(!1), i = re(!1);
  return /* @__PURE__ */ ee(yo, se({}, e, {
    ref: t,
    trapFocus: !1,
    disableOutsidePointerEvents: !1,
    onCloseAutoFocus: (a) => {
      var s;
      if ((s = e.onCloseAutoFocus) === null || s === void 0 || s.call(e, a), !a.defaultPrevented) {
        var c;
        r.current || (c = n.triggerRef.current) === null || c === void 0 || c.focus(), a.preventDefault();
      }
      r.current = !1, i.current = !1;
    },
    onInteractOutside: (a) => {
      var s, c;
      (s = e.onInteractOutside) === null || s === void 0 || s.call(e, a), a.defaultPrevented || (r.current = !0, a.detail.originalEvent.type === "pointerdown" && (i.current = !0));
      const l = a.target;
      ((c = n.triggerRef.current) === null || c === void 0 ? void 0 : c.contains(l)) && a.preventDefault(), a.detail.originalEvent.type === "focusin" && i.current && a.preventDefault();
    }
  }));
}), yo = /* @__PURE__ */ xe((e, t) => {
  const g = e, { __scopePopover: n, trapFocus: r, onOpenAutoFocus: i, onCloseAutoFocus: a, disableOutsidePointerEvents: s, onEscapeKeyDown: c, onPointerDownOutside: l, onFocusOutside: u, onInteractOutside: v } = g, p = oe(g, ["__scopePopover", "trapFocus", "onOpenAutoFocus", "onCloseAutoFocus", "disableOutsidePointerEvents", "onEscapeKeyDown", "onPointerDownOutside", "onFocusOutside", "onInteractOutside"]), d = qt(Yt, n), m = ar(n);
  return Jo(), /* @__PURE__ */ ee(Zo, {
    asChild: !0,
    loop: !0,
    trapped: r,
    onMountAutoFocus: i,
    onUnmountAutoFocus: a
  }, /* @__PURE__ */ ee(qo, {
    asChild: !0,
    disableOutsidePointerEvents: s,
    onInteractOutside: v,
    onEscapeKeyDown: c,
    onPointerDownOutside: l,
    onFocusOutside: u,
    onDismiss: () => d.onOpenChange(!1)
  }, /* @__PURE__ */ ee(na, se({
    "data-state": wo(d.open),
    role: "dialog",
    id: d.contentId
  }, m, p, {
    ref: t,
    style: Q(L({}, p.style), {
      "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
      "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
      "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
    })
  }))));
});
function wo(e) {
  return e ? "open" : "closed";
}
const ts = Ga;
const ns = (e) => {
  const g = e, {
    open: t,
    onOpenChange: n,
    onTriggelClick: r,
    ariaLabel: i,
    triggerElement: a,
    children: s,
    popoverClassName: c,
    contentClassName: l,
    noStyle: u = !1,
    sideOffset: v = 18,
    align: p = "end",
    triggerTabindex: d
  } = g, m = oe(g, [
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
  return /* @__PURE__ */ P.jsx(
    "div",
    {
      className: B({
        [c || ""]: !!c,
        Popover: !u
      }),
      children: /* @__PURE__ */ P.jsxs(ts, { open: t, onOpenChange: n, children: [
        a && /* @__PURE__ */ P.jsx(
          Xa,
          {
            "aria-label": i,
            tabIndex: d,
            className: "Popover-trigger",
            onClick: r,
            children: a
          }
        ),
        t && s && /* @__PURE__ */ P.jsx(
          Za,
          Q(L({
            align: p,
            sideOffset: v,
            className: B({
              [l || ""]: !!l,
              "Popover-content": !!l || !u
            })
          }, m), {
            children: s
          })
        )
      ] })
    }
  );
};
var le = /* @__PURE__ */ ((e) => (e.Small = "small", e.Medium = "medium", e))(le || {}), vt = /* @__PURE__ */ ((e) => (e.Default = "default", e.Custom = "custom", e))(vt || {});
const rs = ye.forwardRef(
  (e, t) => {
    const {
      items: n,
      selected: r,
      label: i,
      ariaLabel: a,
      size: s = le.Medium,
      error: c,
      isDisabled: l,
      onChange: u,
      type: v,
      className: p
    } = e, [d, m] = U(!1), [g, w] = U(), b = () => m(!d), C = (x) => {
      w(x), u && u(x), m(!1);
    }, y = (x) => {
      x.target === x.currentTarget && x.preventDefault();
    }, E = (x) => {
      (x.key === "Enter" || x.key === " ") && m(!d);
    }, S = (x, k) => {
      (x.key === "Enter" || x.key === " ") && (w(k), u && u(k), m(!1));
    };
    return te(() => {
      w(r);
    }, [r]), /* @__PURE__ */ P.jsxs(
      "div",
      {
        className: B({
          Dropdown: !0,
          "Dropdown-disabled": l,
          [p || ""]: !!p
        }),
        children: [
          i && /* @__PURE__ */ P.jsx(
            "div",
            {
              className: B({
                "Dropdown-label": !0,
                "Dropdown-label-medium": s === le.Medium,
                "Dropdown-label-small": s === le.Small
              }),
              children: i
            }
          ),
          /* @__PURE__ */ P.jsx(
            ns,
            {
              open: d,
              ariaLabel: a,
              contentClassName: B({
                "Dropdown-popover-content": !0,
                "Dropdown-popover-content-medium": s === le.Medium,
                "Dropdown-popover-content-small": s === le.Small
              }),
              popoverClassName: "Dropdown-popover",
              sideOffset: 0,
              onOpenChange: b,
              onTriggelClick: y,
              align: "start",
              triggerTabindex: -1,
              triggerElement: /* @__PURE__ */ P.jsx(
                "div",
                {
                  ref: t,
                  className: B({
                    "Dropdown-root": !0,
                    "Dropdown-root-small": v === vt.Default && s === le.Small,
                    "Dropdown-root-medium": v === vt.Default && s === le.Medium,
                    "Dropdown-root-error": !!c,
                    "Dropdown-root-active": d
                  }),
                  tabIndex: 0,
                  "aria-label": a,
                  role: "trigger",
                  onKeyDown: E,
                  children: /* @__PURE__ */ P.jsxs("div", { className: "Dropdown-base", children: [
                    v === vt.Custom ? e.renderSelectedValue(g) : g == null ? void 0 : g.label,
                    /* @__PURE__ */ P.jsx(
                      "div",
                      {
                        className: B({
                          "Dropdown-input-icon": !0,
                          "Dropdown-input-icon-up": d
                        }),
                        children: /* @__PURE__ */ P.jsx(Jn, {})
                      }
                    )
                  ] })
                }
              ),
              children: /* @__PURE__ */ P.jsx(
                "div",
                {
                  className: B({
                    "Dropdown-list": !0,
                    "Dropdown-list-medium": s === le.Medium,
                    "Dropdown-list-small": s === le.Small
                  }),
                  onClick: (x) => x.nativeEvent.stopImmediatePropagation(),
                  children: n.map((x) => /* @__PURE__ */ P.jsxs(
                    "div",
                    {
                      className: B({
                        "Dropdown-list-item": !0,
                        "Dropdown-list-item-small": s === le.Small,
                        "Dropdown-list-item-medium": s === le.Medium
                      }),
                      tabIndex: 0,
                      role: "button",
                      onClick: () => C(x),
                      onKeyDown: (k) => S(k, x),
                      children: [
                        v === vt.Custom ? e.renderItem(x) : x.label,
                        (g == null ? void 0 : g.value) === x.value && /* @__PURE__ */ P.jsx("div", { className: "Dropdown-list-active-item", children: v === vt.Custom ? e.customActiveIcon : /* @__PURE__ */ P.jsx(Zn, { color: "", width: "24", height: "24" }) })
                      ]
                    },
                    x.id
                  ))
                }
              )
            }
          ),
          c && /* @__PURE__ */ P.jsx(
            "div",
            {
              className: B({
                "Dropdown-error-text": !0,
                "Dropdown-error-text-medium": s === le.Medium,
                "Dropdown-error-text-small": s === le.Small
              }),
              children: c
            }
          )
        ]
      }
    );
  }
);
rs.displayName = "Dropdown";
const ps = (e) => {
  const { items: t, onLabelClick: n } = e, r = (i, a) => {
    a || n && n(i);
  };
  return /* @__PURE__ */ P.jsx("nav", { "aria-label": "Breadcrumb", className: "Breadcrumbs", children: /* @__PURE__ */ P.jsx("ol", { className: "Breadcrumbs-list", children: t.map((i, a) => {
    const s = t.length - 1 === a;
    return /* @__PURE__ */ P.jsxs(jr, { children: [
      /* @__PURE__ */ P.jsx(
        "li",
        {
          "aria-current": s ? "page" : void 0,
          className: B({
            "Breadcrumbs-item": !0,
            "Breadcrumbs-item-current": s
          }),
          children: zt(i.label) ? i.label : /* @__PURE__ */ P.jsx(
            "button",
            {
              onClick: () => r(i, s),
              "aria-label": typeof i.label == "string" ? i.label : void 0,
              className: "Breadcrumbs-button",
              children: i.label
            }
          )
        }
      ),
      !s && /* @__PURE__ */ P.jsx("div", { "aria-hidden": "true", className: "Breadcrumbs-separator", children: /* @__PURE__ */ P.jsx(Fr, { height: "16", width: "16" }) })
    ] }, i.key);
  }) }) });
};
var ln = /* @__PURE__ */ ((e) => (e.Medium = "medium", e.Small = "small", e))(ln || {});
const vs = ({
  progress: e,
  size: t = ln.Medium,
  className: n,
  id: r,
  indicatorColor: i
}) => /* @__PURE__ */ P.jsx(
  "div",
  {
    role: "progressbar",
    "aria-valuemin": 0,
    "aria-valuenow": e,
    "aria-valuemax": 100,
    id: r,
    className: B({
      ProgressBar: !0,
      "ProgressBar-medium": t === ln.Medium,
      "ProgressBar-small": t === ln.Small,
      [n || ""]: !!n
    }),
    children: /* @__PURE__ */ P.jsx(
      "div",
      {
        className: "ProgressBar-indicator",
        style: { width: `${e}%`, backgroundColor: i }
      }
    )
  }
);
export {
  jo as Accordion,
  nt as BUTTON_COLOR,
  je as BUTTON_SIZE,
  Oo as BUTTON_TYPE,
  Le as BUTTON_VARIANT,
  ps as Breadcrumbs,
  ko as Button,
  pt as CHECKBOX_SIZE,
  be as CHECKBOX_THEME,
  Do as Checkbox,
  le as DROPDOWN_SIZE,
  vt as DROPDOWN_TYPE,
  rs as Dropdown,
  dt as INPUT_SIZE,
  Bt as INPUT_THEME,
  rt as INPUT_TYPE,
  Lo as IconButton,
  _o as Input,
  ln as PROGRESS_BAR_SIZE,
  ns as Popover,
  vs as ProgressBar,
  Ie as SWITCH_SIZE,
  Wt as SWITCH_TAGS_SIZE,
  on as SWITCH_TAGS_VARIANT,
  Te as SWITCH_THEME,
  No as Switch,
  ls as SwitchTags,
  Vn as TABS_SIZE,
  rn as TAGS_SIZE,
  ss as Tabs,
  cs as Tags
};
