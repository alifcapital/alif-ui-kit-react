import './index.css';
var ai = Object.defineProperty, ii = Object.defineProperties;
var ci = Object.getOwnPropertyDescriptors;
var un = Object.getOwnPropertySymbols;
var to = Object.prototype.hasOwnProperty, no = Object.prototype.propertyIsEnumerable;
var eo = (e, t, n) => t in e ? ai(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, K = (e, t) => {
  for (var n in t || (t = {}))
    to.call(t, n) && eo(e, n, t[n]);
  if (un)
    for (var n of un(t))
      no.call(t, n) && eo(e, n, t[n]);
  return e;
}, ve = (e, t) => ii(e, ci(t));
var xe = (e, t) => {
  var n = {};
  for (var r in e)
    to.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && un)
    for (var r of un(e))
      t.indexOf(r) < 0 && no.call(e, r) && (n[r] = e[r]);
  return n;
};
var Ie = (e, t, n) => new Promise((r, a) => {
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
import ke, { useState as re, useLayoutEffect as Ge, useEffect as fe, useMemo as vt, useRef as ye, useCallback as ft, createContext as yr, createElement as me, useContext as Yo, forwardRef as je, Children as Ct, isValidElement as Zt, cloneElement as Ar, Fragment as zo, useReducer as si, PureComponent as ui } from "react";
import * as li from "react-dom";
import { flushSync as Vo, createPortal as fi } from "react-dom";
function di(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var br = { exports: {} }, Vt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ro;
function vi() {
  if (ro)
    return Vt;
  ro = 1;
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
  return Vt.Fragment = n, Vt.jsx = c, Vt.jsxs = c, Vt;
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
var oo;
function pi() {
  return oo || (oo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = ke, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), s = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), y = Symbol.iterator, h = "@@iterator";
    function b(o) {
      if (o === null || typeof o != "object")
        return null;
      var m = y && o[y] || o[h];
      return typeof m == "function" ? m : null;
    }
    var E = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(o) {
      {
        for (var m = arguments.length, x = new Array(m > 1 ? m - 1 : 0), R = 1; R < m; R++)
          x[R - 1] = arguments[R];
        S("error", o, x);
      }
    }
    function S(o, m, x) {
      {
        var R = E.ReactDebugCurrentFrame, I = R.getStackAddendum();
        I !== "" && (m += "%s", x = x.concat([I]));
        var W = x.map(function(j) {
          return String(j);
        });
        W.unshift("Warning: " + m), Function.prototype.apply.call(console[o], console, W);
      }
    }
    var C = !1, g = !1, T = !1, $ = !1, L = !1, N;
    N = Symbol.for("react.module.reference");
    function ae(o) {
      return !!(typeof o == "string" || typeof o == "function" || o === r || o === i || L || o === a || o === l || o === d || $ || o === p || C || g || T || typeof o == "object" && o !== null && (o.$$typeof === v || o.$$typeof === f || o.$$typeof === c || o.$$typeof === s || o.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      o.$$typeof === N || o.getModuleId !== void 0));
    }
    function ie(o, m, x) {
      var R = o.displayName;
      if (R)
        return R;
      var I = m.displayName || m.name || "";
      return I !== "" ? x + "(" + I + ")" : x;
    }
    function oe(o) {
      return o.displayName || "Context";
    }
    function Q(o) {
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
            return oe(m) + ".Consumer";
          case c:
            var x = o;
            return oe(x._context) + ".Provider";
          case u:
            return ie(o, o.render, "ForwardRef");
          case f:
            var R = o.displayName || null;
            return R !== null ? R : Q(o.type) || "Memo";
          case v: {
            var I = o, W = I._payload, j = I._init;
            try {
              return Q(j(W));
            } catch (A) {
              return null;
            }
          }
        }
      return null;
    }
    var B = Object.assign, te = 0, z, ne, ce, ge, O, k, H;
    function V() {
    }
    V.__reactDisabledLog = !0;
    function Y() {
      {
        if (te === 0) {
          z = console.log, ne = console.info, ce = console.warn, ge = console.error, O = console.group, k = console.groupCollapsed, H = console.groupEnd;
          var o = {
            configurable: !0,
            enumerable: !0,
            value: V,
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
              value: z
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
              value: O
            }),
            groupCollapsed: B({}, o, {
              value: k
            }),
            groupEnd: B({}, o, {
              value: H
            })
          });
        }
        te < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var M = E.ReactCurrentDispatcher, F;
    function U(o, m, x) {
      {
        if (F === void 0)
          try {
            throw Error();
          } catch (I) {
            var R = I.stack.trim().match(/\n( *(at )?)/);
            F = R && R[1] || "";
          }
        return `
` + F + o;
      }
    }
    var q = !1, G;
    {
      var he = typeof WeakMap == "function" ? WeakMap : Map;
      G = new he();
    }
    function _(o, m) {
      if (!o || q)
        return "";
      {
        var x = G.get(o);
        if (x !== void 0)
          return x;
      }
      var R;
      q = !0;
      var I = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var W;
      W = M.current, M.current = null, Y();
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
              R = be;
            }
            Reflect.construct(o, [], j);
          } else {
            try {
              j.call();
            } catch (be) {
              R = be;
            }
            o.call(j.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (be) {
            R = be;
          }
          o();
        }
      } catch (be) {
        if (be && R && typeof be.stack == "string") {
          for (var A = be.stack.split(`
`), se = R.stack.split(`
`), J = A.length - 1, ee = se.length - 1; J >= 1 && ee >= 0 && A[J] !== se[ee]; )
            ee--;
          for (; J >= 1 && ee >= 0; J--, ee--)
            if (A[J] !== se[ee]) {
              if (J !== 1 || ee !== 1)
                do
                  if (J--, ee--, ee < 0 || A[J] !== se[ee]) {
                    var pe = `
` + A[J].replace(" at new ", " at ");
                    return o.displayName && pe.includes("<anonymous>") && (pe = pe.replace("<anonymous>", o.displayName)), typeof o == "function" && G.set(o, pe), pe;
                  }
                while (J >= 1 && ee >= 0);
              break;
            }
        }
      } finally {
        q = !1, M.current = W, X(), Error.prepareStackTrace = I;
      }
      var Re = o ? o.displayName || o.name : "", zt = Re ? U(Re) : "";
      return typeof o == "function" && G.set(o, zt), zt;
    }
    function Ee(o, m, x) {
      return _(o, !1);
    }
    function Me(o) {
      var m = o.prototype;
      return !!(m && m.isReactComponent);
    }
    function Ce(o, m, x) {
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
            return Ee(o.render);
          case f:
            return Ce(o.type, m, x);
          case v: {
            var R = o, I = R._payload, W = R._init;
            try {
              return Ce(W(I), m, x);
            } catch (j) {
            }
          }
        }
      return "";
    }
    var Se = Object.prototype.hasOwnProperty, Ze = {}, ot = E.ReactDebugCurrentFrame;
    function Le(o) {
      if (o) {
        var m = o._owner, x = Ce(o.type, o._source, m ? m.type : null);
        ot.setExtraStackFrame(x);
      } else
        ot.setExtraStackFrame(null);
    }
    function At(o, m, x, R, I) {
      {
        var W = Function.call.bind(Se);
        for (var j in o)
          if (W(o, j)) {
            var A = void 0;
            try {
              if (typeof o[j] != "function") {
                var se = Error((R || "React class") + ": " + x + " type `" + j + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[j] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw se.name = "Invariant Violation", se;
              }
              A = o[j](m, j, R, x, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (J) {
              A = J;
            }
            A && !(A instanceof Error) && (Le(I), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", R || "React class", x, j, typeof A), Le(null)), A instanceof Error && !(A.message in Ze) && (Ze[A.message] = !0, Le(I), w("Failed %s type: %s", x, A.message), Le(null));
          }
      }
    }
    var Dt = Array.isArray;
    function _e(o) {
      return Dt(o);
    }
    function Fn(o) {
      {
        var m = typeof Symbol == "function" && Symbol.toStringTag, x = m && o[Symbol.toStringTag] || o.constructor.name || "Object";
        return x;
      }
    }
    function In(o) {
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
      if (In(o))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Fn(o)), Nt(o);
    }
    var Fe = E.ReactCurrentOwner, Mn = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Lt, Ft, at;
    at = {};
    function Bn(o) {
      if (Se.call(o, "ref")) {
        var m = Object.getOwnPropertyDescriptor(o, "ref").get;
        if (m && m.isReactWarning)
          return !1;
      }
      return o.ref !== void 0;
    }
    function Wn(o) {
      if (Se.call(o, "key")) {
        var m = Object.getOwnPropertyDescriptor(o, "key").get;
        if (m && m.isReactWarning)
          return !1;
      }
      return o.key !== void 0;
    }
    function Un(o, m) {
      if (typeof o.ref == "string" && Fe.current && m && Fe.current.stateNode !== m) {
        var x = Q(Fe.current.type);
        at[x] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Q(Fe.current.type), o.ref), at[x] = !0);
      }
    }
    function Yn(o, m) {
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
    function zn(o, m) {
      {
        var x = function() {
          Ft || (Ft = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", m));
        };
        x.isReactWarning = !0, Object.defineProperty(o, "ref", {
          get: x,
          configurable: !0
        });
      }
    }
    var Vn = function(o, m, x, R, I, W, j) {
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
        value: R
      }), Object.defineProperty(A, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: I
      }), Object.freeze && (Object.freeze(A.props), Object.freeze(A)), A;
    };
    function qn(o, m, x, R, I) {
      {
        var W, j = {}, A = null, se = null;
        x !== void 0 && (jt(x), A = "" + x), Wn(m) && (jt(m.key), A = "" + m.key), Bn(m) && (se = m.ref, Un(m, I));
        for (W in m)
          Se.call(m, W) && !Mn.hasOwnProperty(W) && (j[W] = m[W]);
        if (o && o.defaultProps) {
          var J = o.defaultProps;
          for (W in J)
            j[W] === void 0 && (j[W] = J[W]);
        }
        if (A || se) {
          var ee = typeof o == "function" ? o.displayName || o.name || "Unknown" : o;
          A && Yn(j, ee), se && zn(j, ee);
        }
        return Vn(o, A, se, I, R, Fe.current, j);
      }
    }
    var it = E.ReactCurrentOwner, It = E.ReactDebugCurrentFrame;
    function Pe(o) {
      if (o) {
        var m = o._owner, x = Ce(o.type, o._source, m ? m.type : null);
        It.setExtraStackFrame(x);
      } else
        It.setExtraStackFrame(null);
    }
    var ct;
    ct = !1;
    function st(o) {
      return typeof o == "object" && o !== null && o.$$typeof === t;
    }
    function Mt() {
      {
        if (it.current) {
          var o = Q(it.current.type);
          if (o)
            return `

Check the render method of \`` + o + "`.";
        }
        return "";
      }
    }
    function Gn(o) {
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
    function Kn(o) {
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
        var x = Kn(m);
        if (Bt[x])
          return;
        Bt[x] = !0;
        var R = "";
        o && o._owner && o._owner !== it.current && (R = " It was passed a child from " + Q(o._owner.type) + "."), Pe(o), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', x, R), Pe(null);
      }
    }
    function Ut(o, m) {
      {
        if (typeof o != "object")
          return;
        if (_e(o))
          for (var x = 0; x < o.length; x++) {
            var R = o[x];
            st(R) && Wt(R, m);
          }
        else if (st(o))
          o._store && (o._store.validated = !0);
        else if (o) {
          var I = b(o);
          if (typeof I == "function" && I !== o.entries)
            for (var W = I.call(o), j; !(j = W.next()).done; )
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
          var R = Q(m);
          At(x, o.props, "prop", R, o);
        } else if (m.PropTypes !== void 0 && !ct) {
          ct = !0;
          var I = Q(m);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", I || "Unknown");
        }
        typeof m.getDefaultProps == "function" && !m.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Xn(o) {
      {
        for (var m = Object.keys(o.props), x = 0; x < m.length; x++) {
          var R = m[x];
          if (R !== "children" && R !== "key") {
            Pe(o), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", R), Pe(null);
            break;
          }
        }
        o.ref !== null && (Pe(o), w("Invalid attribute `ref` supplied to `React.Fragment`."), Pe(null));
      }
    }
    function Yt(o, m, x, R, I, W) {
      {
        var j = ae(o);
        if (!j) {
          var A = "";
          (o === void 0 || typeof o == "object" && o !== null && Object.keys(o).length === 0) && (A += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var se = Gn(I);
          se ? A += se : A += Mt();
          var J;
          o === null ? J = "null" : _e(o) ? J = "array" : o !== void 0 && o.$$typeof === t ? (J = "<" + (Q(o.type) || "Unknown") + " />", A = " Did you accidentally export a JSX literal instead of a component?") : J = typeof o, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", J, A);
        }
        var ee = qn(o, m, x, I, W);
        if (ee == null)
          return ee;
        if (j) {
          var pe = m.children;
          if (pe !== void 0)
            if (R)
              if (_e(pe)) {
                for (var Re = 0; Re < pe.length; Re++)
                  Ut(pe[Re], o);
                Object.freeze && Object.freeze(pe);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ut(pe, o);
        }
        return o === r ? Xn(ee) : Hn(ee), ee;
      }
    }
    function Jn(o, m, x) {
      return Yt(o, m, x, !0);
    }
    function Zn(o, m, x) {
      return Yt(o, m, x, !1);
    }
    var Qn = Zn, er = Jn;
    qt.Fragment = r, qt.jsx = Qn, qt.jsxs = er;
  }()), qt;
}
process.env.NODE_ENV === "production" ? br.exports = vi() : br.exports = pi();
var P = br.exports;
function qo(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = qo(e[t])) && (r && (r += " "), r += n);
    else
      for (t in e)
        e[t] && (r && (r += " "), r += t);
  return r;
}
function Z() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = qo(e)) && (r && (r += " "), r += t);
  return r;
}
var ze = /* @__PURE__ */ ((e) => (e.Large = "large", e.Medium = "medium", e.Small = "small", e))(ze || {}), Ve = /* @__PURE__ */ ((e) => (e.Contained = "contained", e.Outlined = "outlined", e.Text = "text", e))(Ve || {}), ut = /* @__PURE__ */ ((e) => (e.Primary = "primary", e.Secondary = "secondary", e.Green = "green", e))(ut || {}), mi = /* @__PURE__ */ ((e) => (e.Submit = "submit", e.Reset = "reset", e.Button = "button", e))(mi || {});
const hi = ke.forwardRef((e, t) => {
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
    size: v = ze.Medium,
    variant: p = Ve.Contained,
    type: y = "button",
    onClick: h
  } = e, b = () => {
    h && h();
  };
  return /* @__PURE__ */ P.jsx(
    "button",
    {
      onClick: b,
      ref: t,
      type: y,
      "aria-label": r,
      id: n,
      disabled: c,
      className: Z({
        Button: !0,
        "Button-contained": p === Ve.Contained,
        "Button-outlined": p === Ve.Outlined,
        "Button-outlined-disable": !!c && p === Ve.Outlined,
        "Button-text": p === Ve.Text,
        "Button-text-small": v === ze.Small && p === Ve.Text,
        "Button-text-large": v === ze.Large && p === Ve.Text,
        "Button-text-disable": !!c && p === Ve.Text,
        "Button-primary": v === ze.Medium,
        "Button-primary-disable": !!c && d === ut.Primary,
        "Button-secondary": d === ut.Secondary,
        "Button-secondary-disable": !!c && d === ut.Secondary,
        "Button-green": d === ut.Green,
        "Button-green-disable": !!c && d === ut.Green,
        "Button-small": v === ze.Small,
        "Button-large": v === ze.Large,
        "Button-round": !!s,
        "Button-only_icon": !!f,
        "Button-only_icon-small": !!f && v === ze.Small,
        "Button-only_icon-large": !!f && v === ze.Large,
        [a || ""]: !!a
      }),
      children: /* @__PURE__ */ P.jsxs("div", { className: "Button-children", children: [
        l && /* @__PURE__ */ P.jsx("span", { className: "Button-icon-left", children: l }),
        i,
        u && /* @__PURE__ */ P.jsx("span", { className: "Button-icon-right", children: u })
      ] })
    }
  );
});
hi.displayName = "Button";
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
var ao;
function gi() {
  if (ao)
    return Gt;
  ao = 1;
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
  return Gt.Fragment = n, Gt.jsx = c, Gt.jsxs = c, Gt;
}
var ln = {};
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
    var e = ke, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), s = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), y = Symbol.iterator, h = "@@iterator";
    function b(o) {
      if (o === null || typeof o != "object")
        return null;
      var m = y && o[y] || o[h];
      return typeof m == "function" ? m : null;
    }
    var E = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(o) {
      {
        for (var m = arguments.length, x = new Array(m > 1 ? m - 1 : 0), R = 1; R < m; R++)
          x[R - 1] = arguments[R];
        S("error", o, x);
      }
    }
    function S(o, m, x) {
      {
        var R = E.ReactDebugCurrentFrame, I = R.getStackAddendum();
        I !== "" && (m += "%s", x = x.concat([I]));
        var W = x.map(function(j) {
          return String(j);
        });
        W.unshift("Warning: " + m), Function.prototype.apply.call(console[o], console, W);
      }
    }
    var C = !1, g = !1, T = !1, $ = !1, L = !1, N;
    N = Symbol.for("react.module.reference");
    function ae(o) {
      return !!(typeof o == "string" || typeof o == "function" || o === r || o === i || L || o === a || o === l || o === d || $ || o === p || C || g || T || typeof o == "object" && o !== null && (o.$$typeof === v || o.$$typeof === f || o.$$typeof === c || o.$$typeof === s || o.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      o.$$typeof === N || o.getModuleId !== void 0));
    }
    function ie(o, m, x) {
      var R = o.displayName;
      if (R)
        return R;
      var I = m.displayName || m.name || "";
      return I !== "" ? x + "(" + I + ")" : x;
    }
    function oe(o) {
      return o.displayName || "Context";
    }
    function Q(o) {
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
            return oe(m) + ".Consumer";
          case c:
            var x = o;
            return oe(x._context) + ".Provider";
          case u:
            return ie(o, o.render, "ForwardRef");
          case f:
            var R = o.displayName || null;
            return R !== null ? R : Q(o.type) || "Memo";
          case v: {
            var I = o, W = I._payload, j = I._init;
            try {
              return Q(j(W));
            } catch (A) {
              return null;
            }
          }
        }
      return null;
    }
    var B = Object.assign, te = 0, z, ne, ce, ge, O, k, H;
    function V() {
    }
    V.__reactDisabledLog = !0;
    function Y() {
      {
        if (te === 0) {
          z = console.log, ne = console.info, ce = console.warn, ge = console.error, O = console.group, k = console.groupCollapsed, H = console.groupEnd;
          var o = {
            configurable: !0,
            enumerable: !0,
            value: V,
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
              value: z
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
              value: O
            }),
            groupCollapsed: B({}, o, {
              value: k
            }),
            groupEnd: B({}, o, {
              value: H
            })
          });
        }
        te < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var M = E.ReactCurrentDispatcher, F;
    function U(o, m, x) {
      {
        if (F === void 0)
          try {
            throw Error();
          } catch (I) {
            var R = I.stack.trim().match(/\n( *(at )?)/);
            F = R && R[1] || "";
          }
        return `
` + F + o;
      }
    }
    var q = !1, G;
    {
      var he = typeof WeakMap == "function" ? WeakMap : Map;
      G = new he();
    }
    function _(o, m) {
      if (!o || q)
        return "";
      {
        var x = G.get(o);
        if (x !== void 0)
          return x;
      }
      var R;
      q = !0;
      var I = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var W;
      W = M.current, M.current = null, Y();
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
              R = be;
            }
            Reflect.construct(o, [], j);
          } else {
            try {
              j.call();
            } catch (be) {
              R = be;
            }
            o.call(j.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (be) {
            R = be;
          }
          o();
        }
      } catch (be) {
        if (be && R && typeof be.stack == "string") {
          for (var A = be.stack.split(`
`), se = R.stack.split(`
`), J = A.length - 1, ee = se.length - 1; J >= 1 && ee >= 0 && A[J] !== se[ee]; )
            ee--;
          for (; J >= 1 && ee >= 0; J--, ee--)
            if (A[J] !== se[ee]) {
              if (J !== 1 || ee !== 1)
                do
                  if (J--, ee--, ee < 0 || A[J] !== se[ee]) {
                    var pe = `
` + A[J].replace(" at new ", " at ");
                    return o.displayName && pe.includes("<anonymous>") && (pe = pe.replace("<anonymous>", o.displayName)), typeof o == "function" && G.set(o, pe), pe;
                  }
                while (J >= 1 && ee >= 0);
              break;
            }
        }
      } finally {
        q = !1, M.current = W, X(), Error.prepareStackTrace = I;
      }
      var Re = o ? o.displayName || o.name : "", zt = Re ? U(Re) : "";
      return typeof o == "function" && G.set(o, zt), zt;
    }
    function Ee(o, m, x) {
      return _(o, !1);
    }
    function Me(o) {
      var m = o.prototype;
      return !!(m && m.isReactComponent);
    }
    function Ce(o, m, x) {
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
            return Ee(o.render);
          case f:
            return Ce(o.type, m, x);
          case v: {
            var R = o, I = R._payload, W = R._init;
            try {
              return Ce(W(I), m, x);
            } catch (j) {
            }
          }
        }
      return "";
    }
    var Se = Object.prototype.hasOwnProperty, Ze = {}, ot = E.ReactDebugCurrentFrame;
    function Le(o) {
      if (o) {
        var m = o._owner, x = Ce(o.type, o._source, m ? m.type : null);
        ot.setExtraStackFrame(x);
      } else
        ot.setExtraStackFrame(null);
    }
    function At(o, m, x, R, I) {
      {
        var W = Function.call.bind(Se);
        for (var j in o)
          if (W(o, j)) {
            var A = void 0;
            try {
              if (typeof o[j] != "function") {
                var se = Error((R || "React class") + ": " + x + " type `" + j + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[j] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw se.name = "Invariant Violation", se;
              }
              A = o[j](m, j, R, x, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (J) {
              A = J;
            }
            A && !(A instanceof Error) && (Le(I), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", R || "React class", x, j, typeof A), Le(null)), A instanceof Error && !(A.message in Ze) && (Ze[A.message] = !0, Le(I), w("Failed %s type: %s", x, A.message), Le(null));
          }
      }
    }
    var Dt = Array.isArray;
    function _e(o) {
      return Dt(o);
    }
    function Fn(o) {
      {
        var m = typeof Symbol == "function" && Symbol.toStringTag, x = m && o[Symbol.toStringTag] || o.constructor.name || "Object";
        return x;
      }
    }
    function In(o) {
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
      if (In(o))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Fn(o)), Nt(o);
    }
    var Fe = E.ReactCurrentOwner, Mn = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Lt, Ft, at;
    at = {};
    function Bn(o) {
      if (Se.call(o, "ref")) {
        var m = Object.getOwnPropertyDescriptor(o, "ref").get;
        if (m && m.isReactWarning)
          return !1;
      }
      return o.ref !== void 0;
    }
    function Wn(o) {
      if (Se.call(o, "key")) {
        var m = Object.getOwnPropertyDescriptor(o, "key").get;
        if (m && m.isReactWarning)
          return !1;
      }
      return o.key !== void 0;
    }
    function Un(o, m) {
      if (typeof o.ref == "string" && Fe.current && m && Fe.current.stateNode !== m) {
        var x = Q(Fe.current.type);
        at[x] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Q(Fe.current.type), o.ref), at[x] = !0);
      }
    }
    function Yn(o, m) {
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
    function zn(o, m) {
      {
        var x = function() {
          Ft || (Ft = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", m));
        };
        x.isReactWarning = !0, Object.defineProperty(o, "ref", {
          get: x,
          configurable: !0
        });
      }
    }
    var Vn = function(o, m, x, R, I, W, j) {
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
        value: R
      }), Object.defineProperty(A, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: I
      }), Object.freeze && (Object.freeze(A.props), Object.freeze(A)), A;
    };
    function qn(o, m, x, R, I) {
      {
        var W, j = {}, A = null, se = null;
        x !== void 0 && (jt(x), A = "" + x), Wn(m) && (jt(m.key), A = "" + m.key), Bn(m) && (se = m.ref, Un(m, I));
        for (W in m)
          Se.call(m, W) && !Mn.hasOwnProperty(W) && (j[W] = m[W]);
        if (o && o.defaultProps) {
          var J = o.defaultProps;
          for (W in J)
            j[W] === void 0 && (j[W] = J[W]);
        }
        if (A || se) {
          var ee = typeof o == "function" ? o.displayName || o.name || "Unknown" : o;
          A && Yn(j, ee), se && zn(j, ee);
        }
        return Vn(o, A, se, I, R, Fe.current, j);
      }
    }
    var it = E.ReactCurrentOwner, It = E.ReactDebugCurrentFrame;
    function Pe(o) {
      if (o) {
        var m = o._owner, x = Ce(o.type, o._source, m ? m.type : null);
        It.setExtraStackFrame(x);
      } else
        It.setExtraStackFrame(null);
    }
    var ct;
    ct = !1;
    function st(o) {
      return typeof o == "object" && o !== null && o.$$typeof === t;
    }
    function Mt() {
      {
        if (it.current) {
          var o = Q(it.current.type);
          if (o)
            return `

Check the render method of \`` + o + "`.";
        }
        return "";
      }
    }
    function Gn(o) {
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
    function Kn(o) {
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
        var x = Kn(m);
        if (Bt[x])
          return;
        Bt[x] = !0;
        var R = "";
        o && o._owner && o._owner !== it.current && (R = " It was passed a child from " + Q(o._owner.type) + "."), Pe(o), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', x, R), Pe(null);
      }
    }
    function Ut(o, m) {
      {
        if (typeof o != "object")
          return;
        if (_e(o))
          for (var x = 0; x < o.length; x++) {
            var R = o[x];
            st(R) && Wt(R, m);
          }
        else if (st(o))
          o._store && (o._store.validated = !0);
        else if (o) {
          var I = b(o);
          if (typeof I == "function" && I !== o.entries)
            for (var W = I.call(o), j; !(j = W.next()).done; )
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
          var R = Q(m);
          At(x, o.props, "prop", R, o);
        } else if (m.PropTypes !== void 0 && !ct) {
          ct = !0;
          var I = Q(m);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", I || "Unknown");
        }
        typeof m.getDefaultProps == "function" && !m.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Xn(o) {
      {
        for (var m = Object.keys(o.props), x = 0; x < m.length; x++) {
          var R = m[x];
          if (R !== "children" && R !== "key") {
            Pe(o), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", R), Pe(null);
            break;
          }
        }
        o.ref !== null && (Pe(o), w("Invalid attribute `ref` supplied to `React.Fragment`."), Pe(null));
      }
    }
    function Yt(o, m, x, R, I, W) {
      {
        var j = ae(o);
        if (!j) {
          var A = "";
          (o === void 0 || typeof o == "object" && o !== null && Object.keys(o).length === 0) && (A += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var se = Gn(I);
          se ? A += se : A += Mt();
          var J;
          o === null ? J = "null" : _e(o) ? J = "array" : o !== void 0 && o.$$typeof === t ? (J = "<" + (Q(o.type) || "Unknown") + " />", A = " Did you accidentally export a JSX literal instead of a component?") : J = typeof o, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", J, A);
        }
        var ee = qn(o, m, x, I, W);
        if (ee == null)
          return ee;
        if (j) {
          var pe = m.children;
          if (pe !== void 0)
            if (R)
              if (_e(pe)) {
                for (var Re = 0; Re < pe.length; Re++)
                  Ut(pe[Re], o);
                Object.freeze && Object.freeze(pe);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ut(pe, o);
        }
        return o === r ? Xn(ee) : Hn(ee), ee;
      }
    }
    function Jn(o, m, x) {
      return Yt(o, m, x, !0);
    }
    function Zn(o, m, x) {
      return Yt(o, m, x, !1);
    }
    var Qn = Zn, er = Jn;
    ln.Fragment = r, ln.jsx = Qn, ln.jsxs = er;
  }()), ln;
}
process.env.NODE_ENV === "production" ? wr.exports = gi() : wr.exports = yi();
var De = wr.exports;
const Go = ({
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
Go.displayName = "ChevronLeftSmall";
const Dr = ({
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
Dr.displayName = "RightNext";
const Nr = ({
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
Nr.displayName = "SelectOpenDown";
const Ko = ({ width: e = "25", height: t = "25", color: n = "currentColor" }) => /* @__PURE__ */ De.jsx(
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
Ko.displayName = "EyeOff";
const Ho = ({ width: e = "25", height: t = "25", color: n = "currentColor" }) => /* @__PURE__ */ De.jsx(
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
Ho.displayName = "EyeOn";
const jr = ({ width: e = "25", height: t = "25", color: n = "currentColor" }) => /* @__PURE__ */ De.jsx(
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
jr.displayName = "Check";
var lt = /* @__PURE__ */ ((e) => (e.Text = "text", e.Number = "number", e.Password = "password", e.Telephone = "tel", e.Email = "email", e))(lt || {}), bt = /* @__PURE__ */ ((e) => (e.Small = "small", e.Medium = "medium", e))(bt || {}), Kt = /* @__PURE__ */ ((e) => (e.Light = "light", e.Dark = "dark", e))(Kt || {});
const bi = ke.forwardRef((e, t) => {
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
    name: h,
    ariaLabel: b,
    autoComplete: E,
    size: w = bt.Medium,
    theme: S = Kt.Light,
    onBlur: C,
    onChange: g,
    onFocus: T,
    onKeyDown: $,
    onKeyUp: L,
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
  ]), [ie, oe] = re(""), [Q, B] = re(!1), [te, z] = re(y), [ne, ce] = ke.useState(!1), ge = (F) => {
    oe(F.target.value), g && g(F);
  }, O = (F) => {
    C && C(F);
  }, k = (F) => {
    T && T(F);
  }, H = (F) => {
    $ && $(F);
  }, V = (F) => {
    L && L(F);
  }, Y = () => {
    ce((F) => !F);
  }, X = (F) => {
    F.animationName === "onAutoFillStart" && B(!0);
  };
  return Ge(() => {
    (a || r) && oe(" ");
  }, [a, r]), fe(() => {
    y === lt.Password && z(ne ? lt.Text : lt.Password);
  }, [ne, y]), fe(() => {
    ie.length === 0 && B(!1);
  }, [ie]), /* @__PURE__ */ P.jsxs(
    "div",
    {
      className: Z({
        Input: !0,
        "Input-without-heading ": !!p,
        [i || ""]: !!i
      }),
      children: [
        p && /* @__PURE__ */ P.jsxs(
          "label",
          {
            className: Z({
              InputLabel: !0,
              "InputLabel-small": w === bt.Small
            }),
            htmlFor: n,
            children: [
              p,
              N && /* @__PURE__ */ P.jsx(
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
        /* @__PURE__ */ P.jsxs(
          "div",
          {
            className: Z({
              "InputBase-root": !0,
              "Input-disabled": c,
              "InputBase-error": !!l,
              "InputBase-root-dark": S === Kt.Dark
            }),
            children: [
              y !== lt.Password && u && /* @__PURE__ */ P.jsx("div", { className: "InputBase-icon-start", children: u }),
              /* @__PURE__ */ P.jsxs(
                "div",
                {
                  className: Z({
                    InputBaseInner: !0
                  }),
                  children: [
                    !p && /* @__PURE__ */ P.jsx(
                      "label",
                      {
                        style: {
                          zIndex: Q ? 1 : 0
                        },
                        className: Z({
                          InputLabel: !0,
                          "InputLabel-medium-align-center": w === bt.Medium,
                          "InputLabel-small-align-center": w === bt.Small,
                          "InputLabel-position-fixed": ie.length > 0 || Q
                        }),
                        htmlFor: n,
                        children: v
                      }
                    ),
                    /* @__PURE__ */ P.jsx(
                      "input",
                      K({
                        defaultValue: !r && a ? a : void 0,
                        "aria-label": b,
                        autoComplete: E,
                        className: Z({
                          "InputBase-input": !0,
                          "InputBase-input-dark": S === Kt.Dark,
                          "InputBase-input-small": w === bt.Small,
                          "InputBase-autofill-font": Q
                        }),
                        disabled: c,
                        name: h,
                        type: te,
                        id: n,
                        value: r,
                        onAnimationStart: X,
                        onChange: ge,
                        onBlur: O,
                        onFocus: k,
                        onKeyDown: H,
                        onKeyUp: V,
                        placeholder: p ? v : "",
                        ref: t
                      }, ae)
                    )
                  ]
                }
              ),
              y !== lt.Password && s && /* @__PURE__ */ P.jsx("div", { className: "InputBase-icon-end", children: s }),
              y === lt.Password && /* @__PURE__ */ P.jsx(
                "button",
                {
                  type: "button",
                  "aria-label": "toggle password visibility",
                  className: "InputBase-icon-end",
                  onClick: Y,
                  children: ne ? /* @__PURE__ */ P.jsx(Ho, {}) : /* @__PURE__ */ P.jsx(Ko, {})
                }
              )
            ]
          }
        ),
        f && /* @__PURE__ */ P.jsx(
          "p",
          {
            className: Z({
              "Input-helper-text": !0,
              "Input-hint-text": !!d,
              "Input-error-text": !!l,
              "Input-helper-text-dark": !l && S === Kt.Dark
            }),
            children: f
          }
        )
      ]
    }
  );
});
bi.displayName = "Input";
var Ae = /* @__PURE__ */ ((e) => (e.Light = "light", e.Dark = "dark", e.Green = "green", e))(Ae || {}), wt = /* @__PURE__ */ ((e) => (e.Small = "small", e.Medium = "medium", e.Large = "large", e))(wt || {});
const wi = ke.forwardRef((e, t) => {
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
  } = e, [y, h] = re(!1), [b, E] = re(!1), [w, S] = re(a), C = (T) => {
    w || (h(!y), l && l(!y, T));
  }, g = (T) => {
    if ((T.key === "Enter" || T.key === " ") && !w) {
      const $ = {
        target: {
          ariaLabel: d,
          name: r
        }
      };
      h(!y), l && l(!y, $);
    }
  };
  return fe(() => {
    S(a);
  }, [a]), fe(() => {
    h(typeof c == "boolean" ? c : !1);
  }, [c]), fe(() => {
    E(!!f);
  }, [f]), /* @__PURE__ */ P.jsx("div", { className: "Checkbox", children: /* @__PURE__ */ P.jsxs("label", { children: [
    /* @__PURE__ */ P.jsx(
      "div",
      {
        className: Z({
          "Checkbox-checked": y,
          "Checkbox-dark-checked": y && v === Ae.Dark,
          "Checkbox-green-checked": y && v === Ae.Green,
          "Checkbox-unchecked": !y,
          "Checkbox-error": b,
          "Checkbox-disabled": w,
          "Checkbox-green-disabled": w && v === Ae.Green,
          "Checkbox-dark-disabled": w && v === Ae.Dark,
          "Checkbox-dark": v === Ae.Dark,
          "Checkbox-green": v === Ae.Green,
          [u || ""]: !!u
        }),
        children: /* @__PURE__ */ P.jsxs(
          "div",
          {
            className: Z({
              "Checkbox-container": !0,
              "Checkbox-large": p === wt.Large,
              "Checkbox-medium": p === wt.Medium,
              "Checkbox-small": p === wt.Small
            }),
            role: "input",
            tabIndex: 0,
            onKeyDown: g,
            children: [
              /* @__PURE__ */ P.jsx(
                "input",
                {
                  ref: t,
                  id: n,
                  type: "checkbox",
                  onChange: C,
                  "aria-label": d,
                  tabIndex: -1,
                  disabled: w
                }
              ),
              y && !w && /* @__PURE__ */ P.jsx(jr, {})
            ]
          }
        )
      }
    ),
    (s || i) && /* @__PURE__ */ P.jsx(
      "div",
      {
        className: Z({
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
wi.displayName = "Checkbox";
var Be = /* @__PURE__ */ ((e) => (e.Light = "light", e.Dark = "dark", e.Green = "green", e))(Be || {}), qe = /* @__PURE__ */ ((e) => (e.Small = "small", e.Medium = "medium", e.Large = "large", e))(qe || {});
const xi = ke.forwardRef((e, t) => {
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
  } = e, [v, p] = re(!1), [y, h] = re(c), b = (w) => {
    y || (p(!v), f && f(!v, w));
  }, E = (w) => {
    if ((w.key === "Enter" || w.key === " ") && !y) {
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
    h(c);
  }, [c]), fe(() => {
    p(typeof i == "boolean" ? i : !1);
  }, [i]), /* @__PURE__ */ P.jsx("div", { className: "Switch", children: /* @__PURE__ */ P.jsxs("label", { children: [
    /* @__PURE__ */ P.jsxs(
      "div",
      {
        className: Z({
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
          "Switch-disabled": y,
          [a || ""]: !!a
        }),
        tabIndex: 0,
        role: "input",
        onKeyDown: E,
        children: [
          /* @__PURE__ */ P.jsx(
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
          /* @__PURE__ */ P.jsx(
            "div",
            {
              className: Z({
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
        className: Z({
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
xi.displayName = "Switch";
var xr = /* @__PURE__ */ ((e) => (e.Large = "large", e.Small = "small", e))(xr || {});
const al = (e) => {
  var g;
  const {
    className: t,
    size: n = xr.Large,
    tabs: r,
    gap: a,
    activeTab: i,
    activeColor: c,
    tabMarginBottom: s = 16
  } = e, [u, l] = re((g = r[0]) == null ? void 0 : g.id), [d, f] = re(6), [v, p] = re(0), [y, h] = re("none"), [b, E] = re(0), w = vt(() => r.find((T) => T.id === u), [u, r]), S = ye(new Array(r.length)), C = (T, $, L) => {
    $ !== u && (h("left 200ms linear, width 200ms linear"), f(T.currentTarget.offsetLeft), p(T.currentTarget.offsetWidth), l($), L && L($));
  };
  return Ge(() => {
    if (i) {
      const T = r.findIndex(($) => $.id === i);
      E(T), l(i);
    }
  }, [i, r]), Ge(() => {
    var L, N;
    const T = (L = S.current[b]) == null ? void 0 : L.offsetWidth, $ = (N = S.current[b]) == null ? void 0 : N.offsetLeft;
    p(T), f($);
  }, [b]), /* @__PURE__ */ P.jsxs("div", { className: "Tabs", children: [
    /* @__PURE__ */ P.jsxs(
      "div",
      {
        style: { gap: a },
        className: Z({
          "Tabs-base": !0,
          [t || ""]: !!t
        }),
        children: [
          r == null ? void 0 : r.map((T, $) => /* @__PURE__ */ P.jsx(
            "button",
            {
              ref: (L) => S.current[$] = L,
              "aria-label": T.label,
              disabled: T.disabled,
              className: Z({
                "Tab-root": !0,
                "Tab-root-active": u === T.id,
                "Tab-root-small": n === xr.Small
              }),
              onClick: (L) => C(L, T.id, T.onClick),
              children: /* @__PURE__ */ P.jsx(
                "div",
                {
                  style: { marginBottom: s },
                  className: Z({
                    "Tab-label": !0
                  }),
                  children: T.label
                }
              )
            },
            T.id
          )),
          /* @__PURE__ */ P.jsx(
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
    w && w.content && /* @__PURE__ */ P.jsx("div", { className: "Tab-content", children: w.content })
  ] });
};
const Ei = ke.forwardRef((e, t) => {
  const {
    className: n,
    color: r,
    ariaLabel: a,
    content: i,
    header: c,
    contentMarginTop: s = 0,
    isOpen: u,
    onChange: l
  } = e, [d, f] = re(u), v = ye(null), p = (b, E) => {
    const w = b.scrollHeight;
    b.style.height = (E ? w : 0) + "px";
  }, y = () => {
    f(!d), l && l(!d), v.current && p(v.current, !d);
  }, h = (b) => {
    (b.key === "Enter" || b.key === " ") && (f(!d), l && l(!d), v.current && p(v.current, !d));
  };
  return Ge(() => {
    const b = typeof u == "boolean" ? u : !1;
    v.current && p(v.current, b), f(b);
  }, [u]), /* @__PURE__ */ P.jsxs(
    "div",
    {
      className: Z({
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
            "aria-label": a,
            onClick: y,
            onKeyDown: h,
            children: [
              /* @__PURE__ */ P.jsx("div", { style: { color: r }, className: "Accordion-heading-label", children: c }),
              /* @__PURE__ */ P.jsx(
                "div",
                {
                  className: Z({
                    "Accordion-heading-arrow": !0,
                    "Accordion-heading-arrow-up": d
                  }),
                  children: /* @__PURE__ */ P.jsx(Nr, { width: "24", height: "24", color: r })
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ P.jsx(
          "div",
          {
            style: { marginTop: s },
            ref: v,
            className: Z({
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
var yn = /* @__PURE__ */ ((e) => (e.Large = "large", e.Medium = "medium", e))(yn || {});
const il = (e) => {
  var f;
  const { className: t, size: n = yn.Medium, tags: r, gap: a, activeTag: i, activeColor: c } = e, [s, u] = re((f = r[0]) == null ? void 0 : f.id), l = vt(() => r.find((v) => v.id === s), [s, r]), d = (v, p) => {
    u(v), p && p(v);
  };
  return Ge(() => {
    i && u(i);
  }, [i]), /* @__PURE__ */ P.jsxs("div", { className: "Tags", children: [
    /* @__PURE__ */ P.jsx(
      "div",
      {
        style: { gap: a },
        className: Z({
          "Tags-base": !0,
          [t || ""]: !!t
        }),
        children: r == null ? void 0 : r.map((v) => /* @__PURE__ */ P.jsx(
          "button",
          {
            "aria-label": v.label,
            id: v.id,
            disabled: v.disabled,
            style: { backgroundColor: s === v.id ? c : "" },
            className: Z({
              Tag: !0,
              "Tag-medium": n === yn.Medium,
              "Tag-large": n === yn.Large,
              "Tag-active": s === v.id,
              [t || ""]: !!t
            }),
            onClick: () => d(v.id, v.onClick),
            children: /* @__PURE__ */ P.jsxs("div", { className: "Tag-label", children: [
              v.startIcon && /* @__PURE__ */ P.jsx("span", { className: "Tag-icon-left", children: v.startIcon }),
              v.label,
              v.endIcon && /* @__PURE__ */ P.jsx("span", { className: "Tag-icon-right", children: v.endIcon })
            ] })
          },
          v.id
        ))
      }
    ),
    l && l.content && /* @__PURE__ */ P.jsx("div", { className: "Tag-content", children: l.content })
  ] });
};
var Ht = /* @__PURE__ */ ((e) => (e.Large = "large", e.Medium = "medium", e))(Ht || {}), bn = /* @__PURE__ */ ((e) => (e.Round = "round", e.Square = "square", e))(bn || {});
const cl = (e) => {
  var T;
  const {
    className: t,
    size: n = Ht.Medium,
    variant: r = bn.Round,
    tags: a,
    gap: i,
    activeTag: c,
    activeColor: s,
    backgroundColor: u
  } = e, [l, d] = re((T = a[0]) == null ? void 0 : T.id), [f, v] = re(6), [p, y] = re(0), [h, b] = re("none"), [E, w] = re(0), S = vt(() => a.find(($) => $.id === l), [l, a]), C = ye(new Array(a.length)), g = ($, L, N) => {
    L !== l && (b("left 200ms linear, width 200ms linear"), v($.currentTarget.offsetLeft), y($.currentTarget.offsetWidth), d(L), N && N(L));
  };
  return Ge(() => {
    if (c) {
      const $ = a.findIndex((L) => L.id === c);
      w($), d(c);
    }
  }, [c, a]), Ge(() => {
    var N, ae;
    const $ = (N = C.current[E]) == null ? void 0 : N.offsetWidth, L = (ae = C.current[E]) == null ? void 0 : ae.offsetLeft;
    y($), v(L);
  }, [E]), /* @__PURE__ */ P.jsxs("div", { className: "SwitchTags", children: [
    /* @__PURE__ */ P.jsxs(
      "div",
      {
        style: { gap: i, backgroundColor: u },
        className: Z({
          "SwitchTags-base": !0,
          "SwitchTags-base-round": r === bn.Round,
          "SwitchTags-base-square": r === bn.Square,
          [t || ""]: !!t
        }),
        children: [
          a == null ? void 0 : a.map(($, L) => /* @__PURE__ */ P.jsxs(
            "button",
            {
              ref: (N) => C.current[L] = N,
              "aria-label": $.label,
              id: $.id,
              disabled: $.disabled,
              className: Z({
                SwitchTag: !0,
                "SwitchTag-medium": n === Ht.Medium,
                "SwitchTag-large": n === Ht.Large,
                "SwitchTag-active": l === $.id,
                [t || ""]: !!t
              }),
              onClick: (N) => g(N, $.id, $.onClick),
              children: [
                $.startIcon && /* @__PURE__ */ P.jsx("span", { className: "SwitchTag-icon-left", children: $.startIcon }),
                $.label,
                $.endIcon && /* @__PURE__ */ P.jsx("span", { className: "SwitchTag-icon-right", children: $.endIcon })
              ]
            },
            $.id
          )),
          /* @__PURE__ */ P.jsx(
            "div",
            {
              style: {
                left: f,
                width: p,
                transition: h,
                backgroundColor: s
              },
              className: Z({
                ActiveTab: !0,
                "ActiveTab-small": n === Ht.Medium
              })
            }
          )
        ]
      }
    ),
    S && S.content && /* @__PURE__ */ P.jsx("div", { className: "Tag-content", children: S.content })
  ] });
};
const Ci = ke.forwardRef((e, t) => {
  const { id: n, ariaLabel: r, children: a, onClick: i } = e, c = () => {
    i && i();
  };
  return /* @__PURE__ */ P.jsx(
    "button",
    {
      type: "button",
      onClick: c,
      ref: t,
      "aria-label": r,
      id: n,
      className: "IconButton",
      tabIndex: -1,
      children: /* @__PURE__ */ P.jsx("div", { style: { display: "flex" }, tabIndex: 0, children: a })
    }
  );
});
Ci.displayName = "IconButton";
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
function Si(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function Xo(...e) {
  return (t) => e.forEach(
    (n) => Si(n, t)
  );
}
function mt(...e) {
  return ft(Xo(...e), e);
}
function Jo(e, t = []) {
  let n = [];
  function r(i, c) {
    const s = /* @__PURE__ */ yr(c), u = n.length;
    n = [
      ...n,
      c
    ];
    function l(f) {
      const E = f, { scope: v, children: p } = E, y = xe(E, ["scope", "children"]), h = (v == null ? void 0 : v[e][u]) || s, b = vt(
        () => y,
        Object.values(y)
      );
      return /* @__PURE__ */ me(h.Provider, {
        value: b
      }, p);
    }
    function d(f, v) {
      const p = (v == null ? void 0 : v[e][u]) || s, y = Yo(p);
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
    const i = n.map((c) => /* @__PURE__ */ yr(c));
    return function(s) {
      const u = (s == null ? void 0 : s[e]) || i;
      return vt(
        () => ({
          [`__scope${e}`]: ve(K({}, s), {
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
    Oi(a, ...t)
  ];
}
function Oi(...e) {
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
const Lr = /* @__PURE__ */ je((e, t) => {
  const c = e, { children: n } = c, r = xe(c, ["children"]), a = Ct.toArray(n), i = a.find(Ri);
  if (i) {
    const s = i.props.children, u = a.map((l) => l === i ? Ct.count(s) > 1 ? Ct.only(null) : /* @__PURE__ */ Zt(s) ? s.props.children : null : l);
    return /* @__PURE__ */ me(Er, we({}, r, {
      ref: t
    }), /* @__PURE__ */ Zt(s) ? /* @__PURE__ */ Ar(s, void 0, u) : null);
  }
  return /* @__PURE__ */ me(Er, we({}, r, {
    ref: t
  }), n);
});
Lr.displayName = "Slot";
const Er = /* @__PURE__ */ je((e, t) => {
  const a = e, { children: n } = a, r = xe(a, ["children"]);
  return /* @__PURE__ */ Zt(n) ? /* @__PURE__ */ Ar(n, ve(K({}, Ti(r, n.props)), {
    ref: t ? Xo(t, n.ref) : n.ref
  })) : Ct.count(n) > 1 ? Ct.only(null) : null;
});
Er.displayName = "SlotClone";
const Pi = ({ children: e }) => /* @__PURE__ */ me(zo, null, e);
function Ri(e) {
  return /* @__PURE__ */ Zt(e) && e.type === Pi;
}
function Ti(e, t) {
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
const $i = [
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
], an = $i.reduce((e, t) => {
  const n = /* @__PURE__ */ je((r, a) => {
    const u = r, { asChild: i } = u, c = xe(u, ["asChild"]), s = i ? Lr : t;
    return fe(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ me(s, we({}, c, {
      ref: a
    }));
  });
  return n.displayName = `Primitive.${t}`, ve(K({}, e), {
    [t]: n
  });
}, {});
function ki(e, t) {
  e && Vo(
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
function _i(e, t = globalThis == null ? void 0 : globalThis.document) {
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
const Cr = "dismissableLayer.update", Ai = "dismissableLayer.pointerDownOutside", Di = "dismissableLayer.focusOutside";
let co;
const Ni = /* @__PURE__ */ yr({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), ji = /* @__PURE__ */ je((e, t) => {
  var n;
  const L = e, { disableOutsidePointerEvents: r = !1, onEscapeKeyDown: a, onPointerDownOutside: i, onFocusOutside: c, onInteractOutside: s, onDismiss: u } = L, l = xe(L, ["disableOutsidePointerEvents", "onEscapeKeyDown", "onPointerDownOutside", "onFocusOutside", "onInteractOutside", "onDismiss"]), d = Yo(Ni), [f, v] = re(null), p = (n = f == null ? void 0 : f.ownerDocument) !== null && n !== void 0 ? n : globalThis == null ? void 0 : globalThis.document, [, y] = re({}), h = mt(
    t,
    (N) => v(N)
  ), b = Array.from(d.layers), [E] = [
    ...d.layersWithOutsidePointerEventsDisabled
  ].slice(-1), w = b.indexOf(E), S = f ? b.indexOf(f) : -1, C = d.layersWithOutsidePointerEventsDisabled.size > 0, g = S >= w, T = Li((N) => {
    const ae = N.target, ie = [
      ...d.branches
    ].some(
      (oe) => oe.contains(ae)
    );
    !g || ie || (i == null || i(N), s == null || s(N), N.defaultPrevented || u == null || u());
  }, p), $ = Fi((N) => {
    const ae = N.target;
    [
      ...d.branches
    ].some(
      (oe) => oe.contains(ae)
    ) || (c == null || c(N), s == null || s(N), N.defaultPrevented || u == null || u());
  }, p);
  return _i((N) => {
    S === d.layers.size - 1 && (a == null || a(N), !N.defaultPrevented && u && (N.preventDefault(), u()));
  }, p), fe(() => {
    if (f)
      return r && (d.layersWithOutsidePointerEventsDisabled.size === 0 && (co = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), d.layersWithOutsidePointerEventsDisabled.add(f)), d.layers.add(f), so(), () => {
        r && d.layersWithOutsidePointerEventsDisabled.size === 1 && (p.body.style.pointerEvents = co);
      };
  }, [
    f,
    p,
    r,
    d
  ]), fe(() => () => {
    f && (d.layers.delete(f), d.layersWithOutsidePointerEventsDisabled.delete(f), so());
  }, [
    f,
    d
  ]), fe(() => {
    const N = () => y({});
    return document.addEventListener(Cr, N), () => document.removeEventListener(Cr, N);
  }, []), /* @__PURE__ */ me(an.div, we({}, l, {
    ref: h,
    style: K({
      pointerEvents: C ? g ? "auto" : "none" : void 0
    }, e.style),
    onFocusCapture: dt(e.onFocusCapture, $.onFocusCapture),
    onBlurCapture: dt(e.onBlurCapture, $.onBlurCapture),
    onPointerDownCapture: dt(e.onPointerDownCapture, T.onPointerDownCapture)
  }));
});
function Li(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = et(e), r = ye(!1), a = ye(() => {
  });
  return fe(() => {
    const i = (s) => {
      if (s.target && !r.current) {
        let l = function() {
          Zo(Ai, n, u, {
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
function Fi(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = et(e), r = ye(!1);
  return fe(() => {
    const a = (i) => {
      i.target && !r.current && Zo(Di, n, {
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
function so() {
  const e = new CustomEvent(Cr);
  document.dispatchEvent(e);
}
function Zo(e, t, n, { discrete: r }) {
  const a = n.originalEvent.target, i = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && a.addEventListener(e, t, {
    once: !0
  }), r ? ki(a, i) : a.dispatchEvent(i);
}
let tr = 0;
function Ii() {
  fe(() => {
    var e, t;
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (e = n[0]) !== null && e !== void 0 ? e : uo()), document.body.insertAdjacentElement("beforeend", (t = n[1]) !== null && t !== void 0 ? t : uo()), tr++, () => {
      tr === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(
        (r) => r.remove()
      ), tr--;
    };
  }, []);
}
function uo() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
const nr = "focusScope.autoFocusOnMount", rr = "focusScope.autoFocusOnUnmount", lo = {
  bubbles: !1,
  cancelable: !0
}, Mi = /* @__PURE__ */ je((e, t) => {
  const h = e, { loop: n = !1, trapped: r = !1, onMountAutoFocus: a, onUnmountAutoFocus: i } = h, c = xe(h, ["loop", "trapped", "onMountAutoFocus", "onUnmountAutoFocus"]), [s, u] = re(null), l = et(a), d = et(i), f = ye(null), v = mt(
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
      let b = function(C) {
        if (p.paused || !s)
          return;
        const g = C.target;
        s.contains(g) ? f.current = g : Qe(f.current, {
          select: !0
        });
      }, E = function(C) {
        if (p.paused || !s)
          return;
        const g = C.relatedTarget;
        g !== null && (s.contains(g) || Qe(f.current, {
          select: !0
        }));
      }, w = function(C) {
        if (document.activeElement === document.body)
          for (const T of C)
            T.removedNodes.length > 0 && Qe(s);
      };
      document.addEventListener("focusin", b), document.addEventListener("focusout", E);
      const S = new MutationObserver(w);
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
      vo.add(p);
      const b = document.activeElement;
      if (!s.contains(b)) {
        const w = new CustomEvent(nr, lo);
        s.addEventListener(nr, l), s.dispatchEvent(w), w.defaultPrevented || (Bi(Vi(Qo(s)), {
          select: !0
        }), document.activeElement === b && Qe(s));
      }
      return () => {
        s.removeEventListener(nr, l), setTimeout(() => {
          const w = new CustomEvent(rr, lo);
          s.addEventListener(rr, d), s.dispatchEvent(w), w.defaultPrevented || Qe(b != null ? b : document.body, {
            select: !0
          }), s.removeEventListener(rr, d), vo.remove(p);
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
    const E = b.key === "Tab" && !b.altKey && !b.ctrlKey && !b.metaKey, w = document.activeElement;
    if (E && w) {
      const S = b.currentTarget, [C, g] = Wi(S);
      C && g ? !b.shiftKey && w === g ? (b.preventDefault(), n && Qe(C, {
        select: !0
      })) : b.shiftKey && w === C && (b.preventDefault(), n && Qe(g, {
        select: !0
      })) : w === S && b.preventDefault();
    }
  }, [
    n,
    r,
    p.paused
  ]);
  return /* @__PURE__ */ me(an.div, we({
    tabIndex: -1
  }, c, {
    ref: v,
    onKeyDown: y
  }));
});
function Bi(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (Qe(r, {
      select: t
    }), document.activeElement !== n)
      return;
}
function Wi(e) {
  const t = Qo(e), n = fo(t, e), r = fo(t.reverse(), e);
  return [
    n,
    r
  ];
}
function Qo(e) {
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
function fo(e, t) {
  for (const n of e)
    if (!Ui(n, {
      upTo: t
    }))
      return n;
}
function Ui(e, { upTo: t }) {
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
function Yi(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Qe(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== n && Yi(e) && t && e.select();
  }
}
const vo = zi();
function zi() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = po(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = po(e, t), (n = e[0]) === null || n === void 0 || n.resume();
    }
  };
}
function po(e, t) {
  const n = [
    ...e
  ], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function Vi(e) {
  return e.filter(
    (t) => t.tagName !== "A"
  );
}
const Tt = globalThis != null && globalThis.document ? Ge : () => {
}, qi = D["useId".toString()] || (() => {
});
let Gi = 0;
function Ki(e) {
  const [t, n] = D.useState(qi());
  return Tt(() => {
    e || n(
      (r) => r != null ? r : String(Gi++)
    );
  }, [
    e
  ]), e || (t ? `radix-${t}` : "");
}
const Hi = ["top", "right", "bottom", "left"], tt = Math.min, Te = Math.max, Pn = Math.round, fn = Math.floor, nt = (e) => ({
  x: e,
  y: e
}), Xi = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Ji = {
  start: "end",
  end: "start"
};
function Sr(e, t, n) {
  return Te(e, tt(t, n));
}
function Ke(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function He(e) {
  return e.split("-")[0];
}
function kt(e) {
  return e.split("-")[1];
}
function Fr(e) {
  return e === "x" ? "y" : "x";
}
function Ir(e) {
  return e === "y" ? "height" : "width";
}
function _t(e) {
  return ["top", "bottom"].includes(He(e)) ? "y" : "x";
}
function Mr(e) {
  return Fr(_t(e));
}
function Zi(e, t, n) {
  n === void 0 && (n = !1);
  const r = kt(e), a = Mr(e), i = Ir(a);
  let c = a === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (c = Rn(c)), [c, Rn(c)];
}
function Qi(e) {
  const t = Rn(e);
  return [Or(e), t, Or(t)];
}
function Or(e) {
  return e.replace(/start|end/g, (t) => Ji[t]);
}
function ec(e, t, n) {
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
function tc(e, t, n, r) {
  const a = kt(e);
  let i = ec(He(e), n === "start", r);
  return a && (i = i.map((c) => c + "-" + a), t && (i = i.concat(i.map(Or)))), i;
}
function Rn(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Xi[t]);
}
function nc(e) {
  return K({
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }, e);
}
function ea(e) {
  return typeof e != "number" ? nc(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Tn(e) {
  return ve(K({}, e), {
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function mo(e, t, n) {
  let {
    reference: r,
    floating: a
  } = e;
  const i = _t(t), c = Mr(t), s = Ir(c), u = He(t), l = i === "y", d = r.x + r.width / 2 - a.width / 2, f = r.y + r.height / 2 - a.height / 2, v = r[s] / 2 - a[s] / 2;
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
const rc = (e, t, n) => Ie(void 0, null, function* () {
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
  } = mo(l, r, u), v = r, p = {}, y = 0;
  for (let h = 0; h < s.length; h++) {
    const {
      name: b,
      fn: E
    } = s[h], {
      x: w,
      y: S,
      data: C,
      reset: g
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
    if (d = w != null ? w : d, f = S != null ? S : f, p = ve(K({}, p), {
      [b]: K(K({}, p[b]), C)
    }), g && y <= 50) {
      y++, typeof g == "object" && (g.placement && (v = g.placement), g.rects && (l = g.rects === !0 ? yield c.getElementRects({
        reference: e,
        floating: t,
        strategy: a
      }) : g.rects), {
        x: d,
        y: f
      } = mo(l, v, u)), h = -1;
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
function Qt(e, t) {
  return Ie(this, null, function* () {
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
    } = Ke(t, e), y = ea(p), b = s[v ? f === "floating" ? "reference" : "floating" : f], E = Tn(yield i.getClippingRect({
      element: (n = yield i.isElement == null ? void 0 : i.isElement(b)) == null || n ? b : b.contextElement || (yield i.getDocumentElement == null ? void 0 : i.getDocumentElement(s.floating)),
      boundary: l,
      rootBoundary: d,
      strategy: u
    })), w = f === "floating" ? ve(K({}, c.floating), {
      x: r,
      y: a
    }) : c.reference, S = yield i.getOffsetParent == null ? void 0 : i.getOffsetParent(s.floating), C = (yield i.isElement == null ? void 0 : i.isElement(S)) ? (yield i.getScale == null ? void 0 : i.getScale(S)) || {
      x: 1,
      y: 1
    } : {
      x: 1,
      y: 1
    }, g = Tn(i.convertOffsetParentRelativeRectToViewportRelativeRect ? yield i.convertOffsetParentRelativeRectToViewportRelativeRect({
      rect: w,
      offsetParent: S,
      strategy: u
    }) : w);
    return {
      top: (E.top - g.top + y.top) / C.y,
      bottom: (g.bottom - E.bottom + y.bottom) / C.y,
      left: (E.left - g.left + y.left) / C.x,
      right: (g.right - E.right + y.right) / C.x
    };
  });
}
const ho = (e) => ({
  name: "arrow",
  options: e,
  fn(n) {
    return Ie(this, null, function* () {
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
      } = Ke(e, n) || {};
      if (d == null)
        return {};
      const v = ea(f), p = {
        x: r,
        y: a
      }, y = Mr(i), h = Ir(y), b = yield s.getDimensions(d), E = y === "y", w = E ? "top" : "left", S = E ? "bottom" : "right", C = E ? "clientHeight" : "clientWidth", g = c.reference[h] + c.reference[y] - p[y] - c.floating[h], T = p[y] - c.reference[y], $ = yield s.getOffsetParent == null ? void 0 : s.getOffsetParent(d);
      let L = $ ? $[C] : 0;
      (!L || !(yield s.isElement == null ? void 0 : s.isElement($))) && (L = u.floating[C] || c.floating[h]);
      const N = g / 2 - T / 2, ae = L / 2 - b[h] / 2 - 1, ie = tt(v[w], ae), oe = tt(v[S], ae), Q = ie, B = L - b[h] - oe, te = L / 2 - b[h] / 2 + N, z = Sr(Q, te, B), ne = !l.arrow && kt(i) != null && te != z && c.reference[h] / 2 - (te < Q ? ie : oe) - b[h] / 2 < 0, ce = ne ? te < Q ? te - Q : te - B : 0;
      return {
        [y]: p[y] + ce,
        data: K({
          [y]: z,
          centerOffset: te - z - ce
        }, ne && {
          alignmentOffset: ce
        }),
        reset: ne
      };
    });
  }
}), oc = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    fn(n) {
      return Ie(this, null, function* () {
        var r, a;
        const {
          placement: i,
          middlewareData: c,
          rects: s,
          initialPlacement: u,
          platform: l,
          elements: d
        } = n, Q = Ke(e, n), {
          mainAxis: f = !0,
          crossAxis: v = !0,
          fallbackPlacements: p,
          fallbackStrategy: y = "bestFit",
          fallbackAxisSideDirection: h = "none",
          flipAlignment: b = !0
        } = Q, E = xe(Q, [
          "mainAxis",
          "crossAxis",
          "fallbackPlacements",
          "fallbackStrategy",
          "fallbackAxisSideDirection",
          "flipAlignment"
        ]);
        if ((r = c.arrow) != null && r.alignmentOffset)
          return {};
        const w = He(i), S = He(u) === u, C = yield l.isRTL == null ? void 0 : l.isRTL(d.floating), g = p || (S || !b ? [Rn(u)] : Qi(u));
        !p && h !== "none" && g.push(...tc(u, b, h, C));
        const T = [u, ...g], $ = yield Qt(n, E), L = [];
        let N = ((a = c.flip) == null ? void 0 : a.overflows) || [];
        if (f && L.push($[w]), v) {
          const B = Zi(i, s, C);
          L.push($[B[0]], $[B[1]]);
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
          let z = (ie = N.filter((ne) => ne.overflows[0] <= 0).sort((ne, ce) => ne.overflows[1] - ce.overflows[1])[0]) == null ? void 0 : ie.placement;
          if (!z)
            switch (y) {
              case "bestFit": {
                var oe;
                const ne = (oe = N.map((ce) => [ce.placement, ce.overflows.filter((ge) => ge > 0).reduce((ge, O) => ge + O, 0)]).sort((ce, ge) => ce[1] - ge[1])[0]) == null ? void 0 : oe[0];
                ne && (z = ne);
                break;
              }
              case "initialPlacement":
                z = u;
                break;
            }
          if (i !== z)
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
function go(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function yo(e) {
  return Hi.some((t) => e[t] >= 0);
}
const ac = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    fn(n) {
      return Ie(this, null, function* () {
        const {
          rects: r
        } = n, c = Ke(e, n), {
          strategy: a = "referenceHidden"
        } = c, i = xe(c, [
          "strategy"
        ]);
        switch (a) {
          case "referenceHidden": {
            const s = yield Qt(n, ve(K({}, i), {
              elementContext: "reference"
            })), u = go(s, r.reference);
            return {
              data: {
                referenceHiddenOffsets: u,
                referenceHidden: yo(u)
              }
            };
          }
          case "escaped": {
            const s = yield Qt(n, ve(K({}, i), {
              altBoundary: !0
            })), u = go(s, r.floating);
            return {
              data: {
                escapedOffsets: u,
                escaped: yo(u)
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
function ic(e, t) {
  return Ie(this, null, function* () {
    const {
      placement: n,
      platform: r,
      elements: a
    } = e, i = yield r.isRTL == null ? void 0 : r.isRTL(a.floating), c = He(n), s = kt(n), u = _t(n) === "y", l = ["left", "top"].includes(c) ? -1 : 1, d = i && u ? -1 : 1, f = Ke(t, e);
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
const cc = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    fn(n) {
      return Ie(this, null, function* () {
        const {
          x: r,
          y: a
        } = n, i = yield ic(n, e);
        return {
          x: r + i.x,
          y: a + i.y,
          data: i
        };
      });
    }
  };
}, sc = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    fn(n) {
      return Ie(this, null, function* () {
        const {
          x: r,
          y: a,
          placement: i
        } = n, E = Ke(e, n), {
          mainAxis: c = !0,
          crossAxis: s = !1,
          limiter: u = {
            fn: (w) => {
              let {
                x: S,
                y: C
              } = w;
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
        }, f = yield Qt(n, l), v = _t(He(i)), p = Fr(v);
        let y = d[p], h = d[v];
        if (c) {
          const w = p === "y" ? "top" : "left", S = p === "y" ? "bottom" : "right", C = y + f[w], g = y - f[S];
          y = Sr(C, y, g);
        }
        if (s) {
          const w = v === "y" ? "top" : "left", S = v === "y" ? "bottom" : "right", C = h + f[w], g = h - f[S];
          h = Sr(C, h, g);
        }
        const b = u.fn(ve(K({}, n), {
          [p]: y,
          [v]: h
        }));
        return ve(K({}, b), {
          data: {
            x: b.x - r,
            y: b.y - a
          }
        });
      });
    }
  };
}, uc = function(e) {
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
      } = Ke(e, t), d = {
        x: n,
        y: r
      }, f = _t(a), v = Fr(f);
      let p = d[v], y = d[f];
      const h = Ke(s, t), b = typeof h == "number" ? {
        mainAxis: h,
        crossAxis: 0
      } : K({
        mainAxis: 0,
        crossAxis: 0
      }, h);
      if (u) {
        const S = v === "y" ? "height" : "width", C = i.reference[v] - i.floating[S] + b.mainAxis, g = i.reference[v] + i.reference[S] - b.mainAxis;
        p < C ? p = C : p > g && (p = g);
      }
      if (l) {
        var E, w;
        const S = v === "y" ? "width" : "height", C = ["top", "left"].includes(He(a)), g = i.reference[f] - i.floating[S] + (C && ((E = c.offset) == null ? void 0 : E[f]) || 0) + (C ? 0 : b.crossAxis), T = i.reference[f] + i.reference[S] + (C ? 0 : ((w = c.offset) == null ? void 0 : w[f]) || 0) - (C ? b.crossAxis : 0);
        y < g ? y = g : y > T && (y = T);
      }
      return {
        [v]: p,
        [f]: y
      };
    }
  };
}, lc = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    fn(n) {
      return Ie(this, null, function* () {
        const {
          placement: r,
          rects: a,
          platform: i,
          elements: c
        } = n, $ = Ke(e, n), {
          apply: s = () => {
          }
        } = $, u = xe($, [
          "apply"
        ]), l = yield Qt(n, u), d = He(r), f = kt(r), v = _t(r) === "y", {
          width: p,
          height: y
        } = a.floating;
        let h, b;
        d === "top" || d === "bottom" ? (h = d, b = f === ((yield i.isRTL == null ? void 0 : i.isRTL(c.floating)) ? "start" : "end") ? "left" : "right") : (b = d, h = f === "end" ? "top" : "bottom");
        const E = y - l[h], w = p - l[b], S = !n.middlewareData.shift;
        let C = E, g = w;
        if (v) {
          const L = p - l.left - l.right;
          g = f || S ? tt(w, L) : L;
        } else {
          const L = y - l.top - l.bottom;
          C = f || S ? tt(E, L) : L;
        }
        if (S && !f) {
          const L = Te(l.left, 0), N = Te(l.right, 0), ae = Te(l.top, 0), ie = Te(l.bottom, 0);
          v ? g = p - 2 * (L !== 0 || N !== 0 ? L + N : Te(l.left, l.right)) : C = y - 2 * (ae !== 0 || ie !== 0 ? ae + ie : Te(l.top, l.bottom));
        }
        yield s(ve(K({}, n), {
          availableWidth: g,
          availableHeight: C
        }));
        const T = yield i.getDimensions(c.floating);
        return p !== T.width || y !== T.height ? {
          reset: {
            rects: !0
          }
        } : {};
      });
    }
  };
};
function rt(e) {
  return ta(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function $e(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Je(e) {
  var t;
  return (t = (ta(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function ta(e) {
  return e instanceof Node || e instanceof $e(e).Node;
}
function Xe(e) {
  return e instanceof Element || e instanceof $e(e).Element;
}
function Ue(e) {
  return e instanceof HTMLElement || e instanceof $e(e).HTMLElement;
}
function bo(e) {
  return typeof ShadowRoot == "undefined" ? !1 : e instanceof ShadowRoot || e instanceof $e(e).ShadowRoot;
}
function cn(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: a
  } = Ne(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(a);
}
function fc(e) {
  return ["table", "td", "th"].includes(rt(e));
}
function Br(e) {
  const t = Wr(), n = Ne(e);
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function dc(e) {
  let t = $t(e);
  for (; Ue(t) && !Dn(t); ) {
    if (Br(t))
      return t;
    t = $t(t);
  }
  return null;
}
function Wr() {
  return typeof CSS == "undefined" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Dn(e) {
  return ["html", "body", "#document"].includes(rt(e));
}
function Ne(e) {
  return $e(e).getComputedStyle(e);
}
function Nn(e) {
  return Xe(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  };
}
function $t(e) {
  if (rt(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    bo(e) && e.host || // Fallback.
    Je(e)
  );
  return bo(t) ? t.host : t;
}
function na(e) {
  const t = $t(e);
  return Dn(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Ue(t) && cn(t) ? t : na(t);
}
function en(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const a = na(e), i = a === ((r = e.ownerDocument) == null ? void 0 : r.body), c = $e(a);
  return i ? t.concat(c, c.visualViewport || [], cn(a) ? a : [], c.frameElement && n ? en(c.frameElement) : []) : t.concat(a, en(a, [], n));
}
function ra(e) {
  const t = Ne(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const a = Ue(e), i = a ? e.offsetWidth : n, c = a ? e.offsetHeight : r, s = Pn(n) !== i || Pn(r) !== c;
  return s && (n = i, r = c), {
    width: n,
    height: r,
    $: s
  };
}
function Ur(e) {
  return Xe(e) ? e : e.contextElement;
}
function St(e) {
  const t = Ur(e);
  if (!Ue(t))
    return nt(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: a,
    $: i
  } = ra(t);
  let c = (i ? Pn(n.width) : n.width) / r, s = (i ? Pn(n.height) : n.height) / a;
  return (!c || !Number.isFinite(c)) && (c = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: c,
    y: s
  };
}
const vc = /* @__PURE__ */ nt(0);
function oa(e) {
  const t = $e(e);
  return !Wr() || !t.visualViewport ? vc : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function pc(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== $e(e) ? !1 : t;
}
function pt(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const a = e.getBoundingClientRect(), i = Ur(e);
  let c = nt(1);
  t && (r ? Xe(r) && (c = St(r)) : c = St(e));
  const s = pc(i, n, r) ? oa(i) : nt(0);
  let u = (a.left + s.x) / c.x, l = (a.top + s.y) / c.y, d = a.width / c.x, f = a.height / c.y;
  if (i) {
    const v = $e(i), p = r && Xe(r) ? $e(r) : r;
    let y = v.frameElement;
    for (; y && r && p !== v; ) {
      const h = St(y), b = y.getBoundingClientRect(), E = Ne(y), w = b.left + (y.clientLeft + parseFloat(E.paddingLeft)) * h.x, S = b.top + (y.clientTop + parseFloat(E.paddingTop)) * h.y;
      u *= h.x, l *= h.y, d *= h.x, f *= h.y, u += w, l += S, y = $e(y).frameElement;
    }
  }
  return Tn({
    width: d,
    height: f,
    x: u,
    y: l
  });
}
function mc(e) {
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
  if ((a || !a && r !== "fixed") && ((rt(n) !== "body" || cn(i)) && (c = Nn(n)), Ue(n))) {
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
function hc(e) {
  return Array.from(e.getClientRects());
}
function aa(e) {
  return pt(Je(e)).left + Nn(e).scrollLeft;
}
function gc(e) {
  const t = Je(e), n = Nn(e), r = e.ownerDocument.body, a = Te(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = Te(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let c = -n.scrollLeft + aa(e);
  const s = -n.scrollTop;
  return Ne(r).direction === "rtl" && (c += Te(t.clientWidth, r.clientWidth) - a), {
    width: a,
    height: i,
    x: c,
    y: s
  };
}
function yc(e, t) {
  const n = $e(e), r = Je(e), a = n.visualViewport;
  let i = r.clientWidth, c = r.clientHeight, s = 0, u = 0;
  if (a) {
    i = a.width, c = a.height;
    const l = Wr();
    (!l || l && t === "fixed") && (s = a.offsetLeft, u = a.offsetTop);
  }
  return {
    width: i,
    height: c,
    x: s,
    y: u
  };
}
function bc(e, t) {
  const n = pt(e, !0, t === "fixed"), r = n.top + e.clientTop, a = n.left + e.clientLeft, i = Ue(e) ? St(e) : nt(1), c = e.clientWidth * i.x, s = e.clientHeight * i.y, u = a * i.x, l = r * i.y;
  return {
    width: c,
    height: s,
    x: u,
    y: l
  };
}
function wo(e, t, n) {
  let r;
  if (t === "viewport")
    r = yc(e, n);
  else if (t === "document")
    r = gc(Je(e));
  else if (Xe(t))
    r = bc(t, n);
  else {
    const a = oa(e);
    r = ve(K({}, t), {
      x: t.x - a.x,
      y: t.y - a.y
    });
  }
  return Tn(r);
}
function ia(e, t) {
  const n = $t(e);
  return n === t || !Xe(n) || Dn(n) ? !1 : Ne(n).position === "fixed" || ia(n, t);
}
function wc(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = en(e, [], !1).filter((s) => Xe(s) && rt(s) !== "body"), a = null;
  const i = Ne(e).position === "fixed";
  let c = i ? $t(e) : e;
  for (; Xe(c) && !Dn(c); ) {
    const s = Ne(c), u = Br(c);
    !u && s.position === "fixed" && (a = null), (i ? !u && !a : !u && s.position === "static" && !!a && ["absolute", "fixed"].includes(a.position) || cn(c) && !u && ia(e, c)) ? r = r.filter((d) => d !== c) : a = s, c = $t(c);
  }
  return t.set(e, r), r;
}
function xc(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: a
  } = e;
  const c = [...n === "clippingAncestors" ? wc(t, this._c) : [].concat(n), r], s = c[0], u = c.reduce((l, d) => {
    const f = wo(t, d, a);
    return l.top = Te(f.top, l.top), l.right = tt(f.right, l.right), l.bottom = tt(f.bottom, l.bottom), l.left = Te(f.left, l.left), l;
  }, wo(t, s, a));
  return {
    width: u.right - u.left,
    height: u.bottom - u.top,
    x: u.left,
    y: u.top
  };
}
function Ec(e) {
  return ra(e);
}
function Cc(e, t, n) {
  const r = Ue(t), a = Je(t), i = n === "fixed", c = pt(e, !0, i, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const u = nt(0);
  if (r || !r && !i)
    if ((rt(t) !== "body" || cn(a)) && (s = Nn(t)), r) {
      const l = pt(t, !0, i, t);
      u.x = l.x + t.clientLeft, u.y = l.y + t.clientTop;
    } else
      a && (u.x = aa(a));
  return {
    x: c.left + s.scrollLeft - u.x,
    y: c.top + s.scrollTop - u.y,
    width: c.width,
    height: c.height
  };
}
function xo(e, t) {
  return !Ue(e) || Ne(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function ca(e, t) {
  const n = $e(e);
  if (!Ue(e))
    return n;
  let r = xo(e, t);
  for (; r && fc(r) && Ne(r).position === "static"; )
    r = xo(r, t);
  return r && (rt(r) === "html" || rt(r) === "body" && Ne(r).position === "static" && !Br(r)) ? n : r || dc(e) || n;
}
const Sc = function(e) {
  return Ie(this, null, function* () {
    let {
      reference: t,
      floating: n,
      strategy: r
    } = e;
    const a = this.getOffsetParent || ca, i = this.getDimensions;
    return {
      reference: Cc(t, yield a(n), r),
      floating: K({
        x: 0,
        y: 0
      }, yield i(n))
    };
  });
};
function Oc(e) {
  return Ne(e).direction === "rtl";
}
const Pc = {
  convertOffsetParentRelativeRectToViewportRelativeRect: mc,
  getDocumentElement: Je,
  getClippingRect: xc,
  getOffsetParent: ca,
  getElementRects: Sc,
  getClientRects: hc,
  getDimensions: Ec,
  getScale: St,
  isElement: Xe,
  isRTL: Oc
};
function Rc(e, t) {
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
    const p = fn(d), y = fn(a.clientWidth - (l + f)), h = fn(a.clientHeight - (d + v)), b = fn(l), w = {
      rootMargin: -p + "px " + -y + "px " + -h + "px " + -b + "px",
      threshold: Te(0, tt(1, u)) || 1
    };
    let S = !0;
    function C(g) {
      const T = g[0].intersectionRatio;
      if (T !== u) {
        if (!S)
          return c();
        T ? c(!1, T) : r = setTimeout(() => {
          c(!1, 1e-7);
        }, 100);
      }
      S = !1;
    }
    try {
      n = new IntersectionObserver(C, ve(K({}, w), {
        // Handle <iframe>s
        root: a.ownerDocument
      }));
    } catch (g) {
      n = new IntersectionObserver(C, w);
    }
    n.observe(e);
  }
  return c(!0), i;
}
function Tc(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: a = !0,
    ancestorResize: i = !0,
    elementResize: c = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: u = !1
  } = r, l = Ur(e), d = a || i ? [...l ? en(l) : [], ...en(t)] : [];
  d.forEach((E) => {
    a && E.addEventListener("scroll", n, {
      passive: !0
    }), i && E.addEventListener("resize", n);
  });
  const f = l && s ? Rc(l, n) : null;
  let v = -1, p = null;
  c && (p = new ResizeObserver((E) => {
    let [w] = E;
    w && w.target === l && p && (p.unobserve(t), cancelAnimationFrame(v), v = requestAnimationFrame(() => {
      p && p.observe(t);
    })), n();
  }), l && !u && p.observe(l), p.observe(t));
  let y, h = u ? pt(e) : null;
  u && b();
  function b() {
    const E = pt(e);
    h && (E.x !== h.x || E.y !== h.y || E.width !== h.width || E.height !== h.height) && n(), h = E, y = requestAnimationFrame(b);
  }
  return n(), () => {
    d.forEach((E) => {
      a && E.removeEventListener("scroll", n), i && E.removeEventListener("resize", n);
    }), f && f(), p && p.disconnect(), p = null, u && cancelAnimationFrame(y);
  };
}
const $c = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), a = K({
    platform: Pc
  }, n), i = ve(K({}, a.platform), {
    _c: r
  });
  return rc(e, t, ve(K({}, a), {
    platform: i
  }));
}, kc = (e) => {
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
      return r && t(r) ? r.current != null ? ho({
        element: r.current,
        padding: a
      }).fn(n) : {} : r ? ho({
        element: r,
        padding: a
      }).fn(n) : {};
    }
  };
};
var wn = typeof document != "undefined" ? Ge : fe;
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
function sa(e) {
  return typeof window == "undefined" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Eo(e, t) {
  const n = sa(e);
  return Math.round(t * n) / n;
}
function Co(e) {
  const t = D.useRef(e);
  return wn(() => {
    t.current = e;
  }), t;
}
function _c(e) {
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
  const [y, h] = D.useState(null), [b, E] = D.useState(null), w = D.useCallback((z) => {
    z != T.current && (T.current = z, h(z));
  }, [h]), S = D.useCallback((z) => {
    z !== $.current && ($.current = z, E(z));
  }, [E]), C = i || y, g = c || b, T = D.useRef(null), $ = D.useRef(null), L = D.useRef(d), N = Co(u), ae = Co(a), ie = D.useCallback(() => {
    if (!T.current || !$.current)
      return;
    const z = {
      placement: t,
      strategy: n,
      middleware: v
    };
    ae.current && (z.platform = ae.current), $c(T.current, $.current, z).then((ne) => {
      const ce = ve(K({}, ne), {
        isPositioned: !0
      });
      oe.current && !$n(L.current, ce) && (L.current = ce, li.flushSync(() => {
        f(ce);
      }));
    });
  }, [v, t, n, ae]);
  wn(() => {
    l === !1 && L.current.isPositioned && (L.current.isPositioned = !1, f((z) => ve(K({}, z), {
      isPositioned: !1
    })));
  }, [l]);
  const oe = D.useRef(!1);
  wn(() => (oe.current = !0, () => {
    oe.current = !1;
  }), []), wn(() => {
    if (C && (T.current = C), g && ($.current = g), C && g) {
      if (N.current)
        return N.current(C, g, ie);
      ie();
    }
  }, [C, g, ie, N]);
  const Q = D.useMemo(() => ({
    reference: T,
    floating: $,
    setReference: w,
    setFloating: S
  }), [w, S]), B = D.useMemo(() => ({
    reference: C,
    floating: g
  }), [C, g]), te = D.useMemo(() => {
    const z = {
      position: n,
      left: 0,
      top: 0
    };
    if (!B.floating)
      return z;
    const ne = Eo(B.floating, d.x), ce = Eo(B.floating, d.y);
    return s ? K(ve(K({}, z), {
      transform: "translate(" + ne + "px, " + ce + "px)"
    }), sa(B.floating) >= 1.5 && {
      willChange: "transform"
    }) : {
      position: n,
      left: ne,
      top: ce
    };
  }, [n, s, B.floating, d.x, d.y]);
  return D.useMemo(() => ve(K({}, d), {
    update: ie,
    refs: Q,
    elements: B,
    floatingStyles: te
  }), [d, ie, Q, B, te]);
}
function Ac(e) {
  const [t, n] = re(void 0);
  return Tt(() => {
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
const ua = "Popper", [la, fa] = Jo(ua), [Dc, da] = la(ua), Nc = (e) => {
  const { __scopePopper: t, children: n } = e, [r, a] = re(null);
  return /* @__PURE__ */ me(Dc, {
    scope: t,
    anchor: r,
    onAnchorChange: a
  }, n);
}, jc = "PopperAnchor", Lc = /* @__PURE__ */ je((e, t) => {
  const u = e, { __scopePopper: n, virtualRef: r } = u, a = xe(u, ["__scopePopper", "virtualRef"]), i = da(jc, n), c = ye(null), s = mt(t, c);
  return fe(() => {
    i.onAnchorChange((r == null ? void 0 : r.current) || c.current);
  }), r ? null : /* @__PURE__ */ me(an.div, we({}, a, {
    ref: s
  }));
}), va = "PopperContent", [Fc, sl] = la(va), Ic = /* @__PURE__ */ je((e, t) => {
  var n, r, a, i, c, s, u, l;
  const Ce = e, { __scopePopper: d, side: f = "bottom", sideOffset: v = 0, align: p = "center", alignOffset: y = 0, arrowPadding: h = 0, avoidCollisions: b = !0, collisionBoundary: E = [], collisionPadding: w = 0, sticky: S = "partial", hideWhenDetached: C = !1, updatePositionStrategy: g = "optimized", onPlaced: T } = Ce, $ = xe(Ce, ["__scopePopper", "side", "sideOffset", "align", "alignOffset", "arrowPadding", "avoidCollisions", "collisionBoundary", "collisionPadding", "sticky", "hideWhenDetached", "updatePositionStrategy", "onPlaced"]), L = da(va, d), [N, ae] = re(null), ie = mt(
    t,
    (Se) => ae(Se)
  ), [oe, Q] = re(null), B = Ac(oe), te = (n = B == null ? void 0 : B.width) !== null && n !== void 0 ? n : 0, z = (r = B == null ? void 0 : B.height) !== null && r !== void 0 ? r : 0, ne = f + (p !== "center" ? "-" + p : ""), ce = typeof w == "number" ? w : K({
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }, w), ge = Array.isArray(E) ? E : [
    E
  ], O = ge.length > 0, k = {
    padding: ce,
    boundary: ge.filter(Mc),
    // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
    altBoundary: O
  }, { refs: H, floatingStyles: V, placement: Y, isPositioned: X, middlewareData: M } = _c({
    // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
    strategy: "fixed",
    placement: ne,
    whileElementsMounted: (...Se) => Tc(...Se, {
      animationFrame: g === "always"
    }),
    elements: {
      reference: L.anchor
    },
    middleware: [
      cc({
        mainAxis: v + z,
        alignmentAxis: y
      }),
      b && sc(K({
        mainAxis: !0,
        crossAxis: !1,
        limiter: S === "partial" ? uc() : void 0
      }, k)),
      b && oc(K({}, k)),
      lc(ve(K({}, k), {
        apply: ({ elements: Se, rects: Ze, availableWidth: ot, availableHeight: Le }) => {
          const { width: At, height: Dt } = Ze.reference, _e = Se.floating.style;
          _e.setProperty("--radix-popper-available-width", `${ot}px`), _e.setProperty("--radix-popper-available-height", `${Le}px`), _e.setProperty("--radix-popper-anchor-width", `${At}px`), _e.setProperty("--radix-popper-anchor-height", `${Dt}px`);
        }
      })),
      oe && kc({
        element: oe,
        padding: h
      }),
      Bc({
        arrowWidth: te,
        arrowHeight: z
      }),
      C && ac(K({
        strategy: "referenceHidden"
      }, k))
    ]
  }), [F, U] = pa(Y), q = et(T);
  Tt(() => {
    X && (q == null || q());
  }, [
    X,
    q
  ]);
  const G = (a = M.arrow) === null || a === void 0 ? void 0 : a.x, he = (i = M.arrow) === null || i === void 0 ? void 0 : i.y, _ = ((c = M.arrow) === null || c === void 0 ? void 0 : c.centerOffset) !== 0, [Ee, Me] = re();
  return Tt(() => {
    N && Me(window.getComputedStyle(N).zIndex);
  }, [
    N
  ]), /* @__PURE__ */ me("div", {
    ref: H.setFloating,
    "data-radix-popper-content-wrapper": "",
    style: ve(K({}, V), {
      transform: X ? V.transform : "translate(0, -200%)",
      // keep off the page when measuring
      minWidth: "max-content",
      zIndex: Ee,
      "--radix-popper-transform-origin": [
        (s = M.transformOrigin) === null || s === void 0 ? void 0 : s.x,
        (u = M.transformOrigin) === null || u === void 0 ? void 0 : u.y
      ].join(" ")
    }),
    dir: e.dir
  }, /* @__PURE__ */ me(Fc, {
    scope: d,
    placedSide: F,
    onArrowChange: Q,
    arrowX: G,
    arrowY: he,
    shouldHideArrow: _
  }, /* @__PURE__ */ me(an.div, we({
    "data-side": F,
    "data-align": U
  }, $, {
    ref: ie,
    style: ve(K({}, $.style), {
      // if the PopperContent hasn't been placed yet (not all measurements done)
      // we prevent animations so that users's animation don't kick in too early referring wrong sides
      animation: X ? void 0 : "none",
      // hide the content if using the hide middleware and should be hidden
      opacity: (l = M.hide) !== null && l !== void 0 && l.referenceHidden ? 0 : void 0
    })
  }))));
});
function Mc(e) {
  return e !== null;
}
const Bc = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var n, r, a, i, c;
    const { placement: s, rects: u, middlewareData: l } = t, f = ((n = l.arrow) === null || n === void 0 ? void 0 : n.centerOffset) !== 0, v = f ? 0 : e.arrowWidth, p = f ? 0 : e.arrowHeight, [y, h] = pa(s), b = {
      start: "0%",
      center: "50%",
      end: "100%"
    }[h], E = ((r = (a = l.arrow) === null || a === void 0 ? void 0 : a.x) !== null && r !== void 0 ? r : 0) + v / 2, w = ((i = (c = l.arrow) === null || c === void 0 ? void 0 : c.y) !== null && i !== void 0 ? i : 0) + p / 2;
    let S = "", C = "";
    return y === "bottom" ? (S = f ? b : `${E}px`, C = `${-p}px`) : y === "top" ? (S = f ? b : `${E}px`, C = `${u.floating.height + p}px`) : y === "right" ? (S = `${-p}px`, C = f ? b : `${w}px`) : y === "left" && (S = `${u.floating.width + p}px`, C = f ? b : `${w}px`), {
      data: {
        x: S,
        y: C
      }
    };
  }
});
function pa(e) {
  const [t, n = "center"] = e.split("-");
  return [
    t,
    n
  ];
}
const Wc = Nc, Uc = Lc, Yc = Ic;
function zc(e, t) {
  return si((n, r) => {
    const a = t[n][r];
    return a != null ? a : n;
  }, e);
}
const ma = (e) => {
  const { present: t, children: n } = e, r = Vc(t), a = typeof n == "function" ? n({
    present: r.isPresent
  }) : Ct.only(n), i = mt(r.ref, a.ref);
  return typeof n == "function" || r.isPresent ? /* @__PURE__ */ Ar(a, {
    ref: i
  }) : null;
};
ma.displayName = "Presence";
function Vc(e) {
  const [t, n] = re(), r = ye({}), a = ye(e), i = ye("none"), c = e ? "mounted" : "unmounted", [s, u] = zc(c, {
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
    const l = dn(r.current);
    i.current = s === "mounted" ? l : "none";
  }, [
    s
  ]), Tt(() => {
    const l = r.current, d = a.current;
    if (d !== e) {
      const v = i.current, p = dn(l);
      e ? u("MOUNT") : p === "none" || (l == null ? void 0 : l.display) === "none" ? u("UNMOUNT") : u(d && v !== p ? "ANIMATION_OUT" : "UNMOUNT"), a.current = e;
    }
  }, [
    e,
    u
  ]), Tt(() => {
    if (t) {
      const l = (f) => {
        const p = dn(r.current).includes(f.animationName);
        f.target === t && p && Vo(
          () => u("ANIMATION_END")
        );
      }, d = (f) => {
        f.target === t && (i.current = dn(r.current));
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
function dn(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function qc({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [r, a] = Gc({
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
function Gc({ defaultProp: e, onChange: t }) {
  const n = re(e), [r] = n, a = ye(r), i = et(t);
  return fe(() => {
    a.current !== r && (i(r), a.current = r);
  }, [
    r,
    a,
    i
  ]), n;
}
var Kc = function(e) {
  if (typeof document == "undefined")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, ht = /* @__PURE__ */ new WeakMap(), vn = /* @__PURE__ */ new WeakMap(), pn = {}, or = 0, ha = function(e) {
  return e && (e.host || ha(e.parentNode));
}, Hc = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = ha(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, Xc = function(e, t, n, r) {
  var a = Hc(t, Array.isArray(e) ? e : [e]);
  pn[n] || (pn[n] = /* @__PURE__ */ new WeakMap());
  var i = pn[n], c = [], s = /* @__PURE__ */ new Set(), u = new Set(a), l = function(f) {
    !f || s.has(f) || (s.add(f), l(f.parentNode));
  };
  a.forEach(l);
  var d = function(f) {
    !f || u.has(f) || Array.prototype.forEach.call(f.children, function(v) {
      if (s.has(v))
        d(v);
      else {
        var p = v.getAttribute(r), y = p !== null && p !== "false", h = (ht.get(v) || 0) + 1, b = (i.get(v) || 0) + 1;
        ht.set(v, h), i.set(v, b), c.push(v), h === 1 && y && vn.set(v, !0), b === 1 && v.setAttribute(n, "true"), y || v.setAttribute(r, "true");
      }
    });
  };
  return d(t), s.clear(), or++, function() {
    c.forEach(function(f) {
      var v = ht.get(f) - 1, p = i.get(f) - 1;
      ht.set(f, v), i.set(f, p), v || (vn.has(f) || f.removeAttribute(r), vn.delete(f)), p || f.removeAttribute(n);
    }), or--, or || (ht = /* @__PURE__ */ new WeakMap(), ht = /* @__PURE__ */ new WeakMap(), vn = /* @__PURE__ */ new WeakMap(), pn = {});
  };
}, Jc = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), a = t || Kc(e);
  return a ? (r.push.apply(r, Array.from(a.querySelectorAll("[aria-live]"))), Xc(r, a, n, "aria-hidden")) : function() {
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
function ga(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
}
function Zc(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, a = t.length, i; r < a; r++)
      (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
var xn = "right-scroll-bar-position", En = "width-before-scroll-bar", Qc = "with-scroll-bars-hidden", es = "--removed-body-scroll-bar-size";
function ts(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function ns(e, t) {
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
          var a = n.value;
          a !== r && (n.value = r, n.callback(r, a));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
function ya(e, t) {
  return ns(t || null, function(n) {
    return e.forEach(function(r) {
      return ts(r, n);
    });
  });
}
function ba(e) {
  return e;
}
function wa(e, t) {
  t === void 0 && (t = ba);
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
function Yr(e, t) {
  return t === void 0 && (t = ba), wa(e, t);
}
function xa(e) {
  e === void 0 && (e = {});
  var t = wa(null);
  return t.options = We({ async: !0, ssr: !1 }, e), t;
}
var Ea = function(e) {
  var t = e.sideCar, n = ga(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return D.createElement(r, We({}, n));
};
Ea.isSideCarExport = !0;
function rs(e, t) {
  return e.useMedium(t), Ea;
}
var Ca = xa(), ar = function() {
}, jn = D.forwardRef(function(e, t) {
  var n = D.useRef(null), r = D.useState({
    onScrollCapture: ar,
    onWheelCapture: ar,
    onTouchMoveCapture: ar
  }), a = r[0], i = r[1], c = e.forwardProps, s = e.children, u = e.className, l = e.removeScrollBar, d = e.enabled, f = e.shards, v = e.sideCar, p = e.noIsolation, y = e.inert, h = e.allowPinchZoom, b = e.as, E = b === void 0 ? "div" : b, w = ga(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]), S = v, C = ya([n, t]), g = We(We({}, w), a);
  return D.createElement(
    D.Fragment,
    null,
    d && D.createElement(S, { sideCar: Ca, removeScrollBar: l, shards: f, noIsolation: p, inert: y, setCallbacks: i, allowPinchZoom: !!h, lockRef: n }),
    c ? D.cloneElement(D.Children.only(s), We(We({}, g), { ref: C })) : D.createElement(E, We({}, g, { className: u, ref: C }), s)
  );
});
jn.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
jn.classNames = {
  fullWidth: En,
  zeroRight: xn
};
var So, os = function() {
  if (So)
    return So;
  if (typeof __webpack_nonce__ != "undefined")
    return __webpack_nonce__;
};
function as() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = os();
  return t && e.setAttribute("nonce", t), e;
}
function is(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function cs(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var ss = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = as()) && (is(t, n), cs(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, us = function() {
  var e = ss();
  return function(t, n) {
    D.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, Sa = function() {
  var e = us(), t = function(n) {
    var r = n.styles, a = n.dynamic;
    return e(r, a), null;
  };
  return t;
}, ls = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, ir = function(e) {
  return parseInt(e || "", 10) || 0;
}, fs = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], a = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [ir(n), ir(r), ir(a)];
}, ds = function(e) {
  if (e === void 0 && (e = "margin"), typeof window == "undefined")
    return ls;
  var t = fs(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, vs = Sa(), ps = function(e, t, n, r) {
  var a = e.left, i = e.top, c = e.right, s = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(Qc, ` {
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
  
  .`).concat(xn, ` {
    right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(En, ` {
    margin-right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(xn, " .").concat(xn, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(En, " .").concat(En, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body {
    `).concat(es, ": ").concat(s, `px;
  }
`);
}, ms = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, a = r === void 0 ? "margin" : r, i = D.useMemo(function() {
    return ds(a);
  }, [a]);
  return D.createElement(vs, { styles: ps(i, !t, a, n ? "" : "!important") });
}, Pr = !1;
if (typeof window != "undefined")
  try {
    var mn = Object.defineProperty({}, "passive", {
      get: function() {
        return Pr = !0, !0;
      }
    });
    window.addEventListener("test", mn, mn), window.removeEventListener("test", mn, mn);
  } catch (e) {
    Pr = !1;
  }
var gt = Pr ? { passive: !1 } : !1, hs = function(e) {
  return e.tagName === "TEXTAREA";
}, Oa = function(e, t) {
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !hs(e) && n[t] === "visible")
  );
}, gs = function(e) {
  return Oa(e, "overflowY");
}, ys = function(e) {
  return Oa(e, "overflowX");
}, Oo = function(e, t) {
  var n = t;
  do {
    typeof ShadowRoot != "undefined" && n instanceof ShadowRoot && (n = n.host);
    var r = Pa(e, n);
    if (r) {
      var a = Ra(e, n), i = a[1], c = a[2];
      if (i > c)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== document.body);
  return !1;
}, bs = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, ws = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Pa = function(e, t) {
  return e === "v" ? gs(t) : ys(t);
}, Ra = function(e, t) {
  return e === "v" ? bs(t) : ws(t);
}, xs = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, Es = function(e, t, n, r, a) {
  var i = xs(e, window.getComputedStyle(t).direction), c = i * r, s = n.target, u = t.contains(s), l = !1, d = c > 0, f = 0, v = 0;
  do {
    var p = Ra(e, s), y = p[0], h = p[1], b = p[2], E = h - b - i * y;
    (y || E) && Pa(e, s) && (f += E, v += y), s = s.parentNode;
  } while (
    // portaled content
    !u && s !== document.body || // self content
    u && (t.contains(s) || t === s)
  );
  return (d && (a && f === 0 || !a && c > f) || !d && (a && v === 0 || !a && -c > v)) && (l = !0), l;
}, hn = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Po = function(e) {
  return [e.deltaX, e.deltaY];
}, Ro = function(e) {
  return e && "current" in e ? e.current : e;
}, Cs = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, Ss = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, Os = 0, yt = [];
function Ps(e) {
  var t = D.useRef([]), n = D.useRef([0, 0]), r = D.useRef(), a = D.useState(Os++)[0], i = D.useState(function() {
    return Sa();
  })[0], c = D.useRef(e);
  D.useEffect(function() {
    c.current = e;
  }, [e]), D.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(a));
      var h = Zc([e.lockRef.current], (e.shards || []).map(Ro), !0).filter(Boolean);
      return h.forEach(function(b) {
        return b.classList.add("allow-interactivity-".concat(a));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(a)), h.forEach(function(b) {
          return b.classList.remove("allow-interactivity-".concat(a));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var s = D.useCallback(function(h, b) {
    if ("touches" in h && h.touches.length === 2)
      return !c.current.allowPinchZoom;
    var E = hn(h), w = n.current, S = "deltaX" in h ? h.deltaX : w[0] - E[0], C = "deltaY" in h ? h.deltaY : w[1] - E[1], g, T = h.target, $ = Math.abs(S) > Math.abs(C) ? "h" : "v";
    if ("touches" in h && $ === "h" && T.type === "range")
      return !1;
    var L = Oo($, T);
    if (!L)
      return !0;
    if (L ? g = $ : (g = $ === "v" ? "h" : "v", L = Oo($, T)), !L)
      return !1;
    if (!r.current && "changedTouches" in h && (S || C) && (r.current = g), !g)
      return !0;
    var N = r.current || g;
    return Es(N, b, h, N === "h" ? S : C, !0);
  }, []), u = D.useCallback(function(h) {
    var b = h;
    if (!(!yt.length || yt[yt.length - 1] !== i)) {
      var E = "deltaY" in b ? Po(b) : hn(b), w = t.current.filter(function(g) {
        return g.name === b.type && g.target === b.target && Cs(g.delta, E);
      })[0];
      if (w && w.should) {
        b.cancelable && b.preventDefault();
        return;
      }
      if (!w) {
        var S = (c.current.shards || []).map(Ro).filter(Boolean).filter(function(g) {
          return g.contains(b.target);
        }), C = S.length > 0 ? s(b, S[0]) : !c.current.noIsolation;
        C && b.cancelable && b.preventDefault();
      }
    }
  }, []), l = D.useCallback(function(h, b, E, w) {
    var S = { name: h, delta: b, target: E, should: w };
    t.current.push(S), setTimeout(function() {
      t.current = t.current.filter(function(C) {
        return C !== S;
      });
    }, 1);
  }, []), d = D.useCallback(function(h) {
    n.current = hn(h), r.current = void 0;
  }, []), f = D.useCallback(function(h) {
    l(h.type, Po(h), h.target, s(h, e.lockRef.current));
  }, []), v = D.useCallback(function(h) {
    l(h.type, hn(h), h.target, s(h, e.lockRef.current));
  }, []);
  D.useEffect(function() {
    return yt.push(i), e.setCallbacks({
      onScrollCapture: f,
      onWheelCapture: f,
      onTouchMoveCapture: v
    }), document.addEventListener("wheel", u, gt), document.addEventListener("touchmove", u, gt), document.addEventListener("touchstart", d, gt), function() {
      yt = yt.filter(function(h) {
        return h !== i;
      }), document.removeEventListener("wheel", u, gt), document.removeEventListener("touchmove", u, gt), document.removeEventListener("touchstart", d, gt);
    };
  }, []);
  var p = e.removeScrollBar, y = e.inert;
  return D.createElement(
    D.Fragment,
    null,
    y ? D.createElement(i, { styles: Ss(a) }) : null,
    p ? D.createElement(ms, { gapMode: "margin" }) : null
  );
}
const Rs = rs(Ca, Ps);
var Ta = D.forwardRef(function(e, t) {
  return D.createElement(jn, We({}, e, { ref: t, sideCar: Rs }));
});
Ta.classNames = jn.classNames;
const Ts = Ta, $a = "Popover", [ka, ul] = Jo($a, [
  fa
]), zr = fa(), [$s, sn] = ka($a), ks = (e) => {
  const { __scopePopover: t, children: n, open: r, defaultOpen: a, onOpenChange: i, modal: c = !1 } = e, s = zr(t), u = ye(null), [l, d] = re(!1), [f = !1, v] = qc({
    prop: r,
    defaultProp: a,
    onChange: i
  });
  return /* @__PURE__ */ me(Wc, s, /* @__PURE__ */ me($s, {
    scope: t,
    contentId: Ki(),
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
}, _s = "PopoverTrigger", As = /* @__PURE__ */ je((e, t) => {
  const u = e, { __scopePopover: n } = u, r = xe(u, ["__scopePopover"]), a = sn(_s, n), i = zr(n), c = mt(t, a.triggerRef), s = /* @__PURE__ */ me(an.button, we({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": a.open,
    "aria-controls": a.contentId,
    "data-state": Aa(a.open)
  }, r, {
    ref: c,
    onClick: dt(e.onClick, a.onOpenToggle)
  }));
  return a.hasCustomAnchor ? s : /* @__PURE__ */ me(Uc, we({
    asChild: !0
  }, i), s);
}), Ds = "PopoverPortal", [ll, Ns] = ka(Ds, {
  forceMount: void 0
}), tn = "PopoverContent", js = /* @__PURE__ */ je((e, t) => {
  const n = Ns(tn, e.__scopePopover), c = e, { forceMount: r = n.forceMount } = c, a = xe(c, ["forceMount"]), i = sn(tn, e.__scopePopover);
  return /* @__PURE__ */ me(ma, {
    present: r || i.open
  }, i.modal ? /* @__PURE__ */ me(Ls, we({}, a, {
    ref: t
  })) : /* @__PURE__ */ me(Fs, we({}, a, {
    ref: t
  })));
}), Ls = /* @__PURE__ */ je((e, t) => {
  const n = sn(tn, e.__scopePopover), r = ye(null), a = mt(t, r), i = ye(!1);
  return fe(() => {
    const c = r.current;
    if (c)
      return Jc(c);
  }, []), /* @__PURE__ */ me(Ts, {
    as: Lr,
    allowPinchZoom: !0
  }, /* @__PURE__ */ me(_a, we({}, e, {
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
}), Fs = /* @__PURE__ */ je((e, t) => {
  const n = sn(tn, e.__scopePopover), r = ye(!1), a = ye(!1);
  return /* @__PURE__ */ me(_a, we({}, e, {
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
}), _a = /* @__PURE__ */ je((e, t) => {
  const y = e, { __scopePopover: n, trapFocus: r, onOpenAutoFocus: a, onCloseAutoFocus: i, disableOutsidePointerEvents: c, onEscapeKeyDown: s, onPointerDownOutside: u, onFocusOutside: l, onInteractOutside: d } = y, f = xe(y, ["__scopePopover", "trapFocus", "onOpenAutoFocus", "onCloseAutoFocus", "disableOutsidePointerEvents", "onEscapeKeyDown", "onPointerDownOutside", "onFocusOutside", "onInteractOutside"]), v = sn(tn, n), p = zr(n);
  return Ii(), /* @__PURE__ */ me(Mi, {
    asChild: !0,
    loop: !0,
    trapped: r,
    onMountAutoFocus: a,
    onUnmountAutoFocus: i
  }, /* @__PURE__ */ me(ji, {
    asChild: !0,
    disableOutsidePointerEvents: c,
    onInteractOutside: d,
    onEscapeKeyDown: s,
    onPointerDownOutside: u,
    onFocusOutside: l,
    onDismiss: () => v.onOpenChange(!1)
  }, /* @__PURE__ */ me(Yc, we({
    "data-state": Aa(v.open),
    role: "dialog",
    id: v.contentId
  }, p, f, {
    ref: t,
    style: ve(K({}, f.style), {
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
const Is = ks;
const Ms = (e) => {
  const y = e, {
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
  } = y, p = xe(y, [
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
  return /* @__PURE__ */ P.jsx(
    "div",
    {
      className: Z({
        [s || ""]: !!s,
        Popover: !l
      }),
      children: /* @__PURE__ */ P.jsxs(Is, { open: t, onOpenChange: n, children: [
        i && /* @__PURE__ */ P.jsx(
          As,
          {
            "aria-label": a,
            tabIndex: v,
            className: "Popover-trigger",
            onClick: r,
            children: i
          }
        ),
        t && c && /* @__PURE__ */ P.jsx(
          js,
          ve(K({
            align: f,
            sideOffset: d,
            className: Z({
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
const Bs = ke.forwardRef(
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
    } = e, [v, p] = re(!1), [y, h] = re(), b = () => p(!v), E = (g) => {
      h(g), l && l(g), p(!1);
    }, w = (g) => {
      g.target === g.currentTarget && g.preventDefault();
    }, S = (g) => {
      (g.key === "Enter" || g.key === " ") && p(!v);
    }, C = (g, T) => {
      (g.key === "Enter" || g.key === " ") && (h(T), l && l(T), p(!1));
    };
    return fe(() => {
      h(r);
    }, [r]), /* @__PURE__ */ P.jsxs(
      "div",
      {
        className: Z({
          Dropdown: !0,
          "Dropdown-disabled": u,
          [f || ""]: !!f
        }),
        children: [
          a && /* @__PURE__ */ P.jsx(
            "div",
            {
              className: Z({
                "Dropdown-label": !0,
                "Dropdown-label-medium": c === Oe.Medium,
                "Dropdown-label-small": c === Oe.Small
              }),
              children: a
            }
          ),
          /* @__PURE__ */ P.jsx(
            Ms,
            {
              open: v,
              ariaLabel: i,
              contentClassName: Z({
                "Dropdown-popover-content": !0,
                "Dropdown-popover-content-medium": c === Oe.Medium,
                "Dropdown-popover-content-small": c === Oe.Small
              }),
              popoverClassName: "Dropdown-popover",
              sideOffset: 0,
              onOpenChange: b,
              onTriggerClick: w,
              align: "start",
              triggerTabindex: -1,
              triggerElement: /* @__PURE__ */ P.jsx(
                "div",
                {
                  ref: t,
                  className: Z({
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
                  children: /* @__PURE__ */ P.jsxs("div", { className: "Dropdown-base", children: [
                    d === xt.Custom ? e.renderSelectedValue(y) : y == null ? void 0 : y.label,
                    /* @__PURE__ */ P.jsx(
                      "div",
                      {
                        className: Z({
                          "Dropdown-input-icon": !0,
                          "Dropdown-input-icon-up": v
                        }),
                        children: /* @__PURE__ */ P.jsx(Nr, {})
                      }
                    )
                  ] })
                }
              ),
              children: /* @__PURE__ */ P.jsx(
                "div",
                {
                  className: Z({
                    "Dropdown-list": !0,
                    "Dropdown-list-medium": c === Oe.Medium,
                    "Dropdown-list-small": c === Oe.Small
                  }),
                  onClick: (g) => g.nativeEvent.stopImmediatePropagation(),
                  children: n.map((g) => /* @__PURE__ */ P.jsxs(
                    "div",
                    {
                      className: Z({
                        "Dropdown-list-item": !0,
                        "Dropdown-list-item-small": c === Oe.Small,
                        "Dropdown-list-item-medium": c === Oe.Medium
                      }),
                      tabIndex: 0,
                      role: "button",
                      onClick: () => E(g),
                      onKeyDown: (T) => C(T, g),
                      children: [
                        d === xt.Custom ? e.renderItem(g) : g.label,
                        (y == null ? void 0 : y.value) === g.value && /* @__PURE__ */ P.jsx("div", { className: "Dropdown-list-active-item", children: d === xt.Custom ? e.customActiveIcon : /* @__PURE__ */ P.jsx(jr, { color: "", width: "24", height: "24" }) })
                      ]
                    },
                    g.id
                  ))
                }
              )
            }
          ),
          s && /* @__PURE__ */ P.jsx(
            "div",
            {
              className: Z({
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
Bs.displayName = "Dropdown";
const fl = (e) => {
  const { items: t, onLabelClick: n } = e, r = (a, i) => {
    i || n && n(a);
  };
  return /* @__PURE__ */ P.jsx("nav", { "aria-label": "Breadcrumb", className: "Breadcrumbs", children: /* @__PURE__ */ P.jsx("ol", { className: "Breadcrumbs-list", children: t.map((a, i) => {
    const c = t.length - 1 === i;
    return /* @__PURE__ */ P.jsxs(zo, { children: [
      /* @__PURE__ */ P.jsx(
        "li",
        {
          "aria-current": c ? "page" : void 0,
          className: Z({
            "Breadcrumbs-item": !0,
            "Breadcrumbs-item-current": c
          }),
          children: Zt(a.label) ? a.label : /* @__PURE__ */ P.jsx(
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
      !c && /* @__PURE__ */ P.jsx("div", { "aria-hidden": "true", className: "Breadcrumbs-separator", children: /* @__PURE__ */ P.jsx(Dr, { height: "16", width: "16" }) })
    ] }, a.key);
  }) }) });
};
var Cn = /* @__PURE__ */ ((e) => (e.Medium = "medium", e.Small = "small", e))(Cn || {});
const cr = 100, dl = ({
  progress: e,
  size: t = Cn.Medium,
  className: n,
  id: r,
  indicatorColor: a
}) => /* @__PURE__ */ P.jsx(
  "div",
  {
    role: "progressbar",
    "aria-valuemin": 0,
    "aria-valuenow": Math.min(e, cr),
    "aria-valuemax": cr,
    id: r,
    className: Z({
      ProgressBar: !0,
      "ProgressBar-medium": t === Cn.Medium,
      "ProgressBar-small": t === Cn.Small,
      [n || ""]: !!n
    }),
    children: /* @__PURE__ */ P.jsx(
      "div",
      {
        className: "ProgressBar-indicator",
        style: { width: `${Math.min(e, cr)}%`, backgroundColor: a }
      }
    )
  }
);
function Ws(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), a, i;
  for (i = 0; i < r.length; i++)
    a = r[i], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
var Rr = { exports: {} }, gn = { exports: {} }, ue = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var To;
function Us() {
  if (To)
    return ue;
  To = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, c = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, b = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
  function S(g) {
    if (typeof g == "object" && g !== null) {
      var T = g.$$typeof;
      switch (T) {
        case t:
          switch (g = g.type, g) {
            case u:
            case l:
            case r:
            case i:
            case a:
            case f:
              return g;
            default:
              switch (g = g && g.$$typeof, g) {
                case s:
                case d:
                case y:
                case p:
                case c:
                  return g;
                default:
                  return T;
              }
          }
        case n:
          return T;
      }
    }
  }
  function C(g) {
    return S(g) === l;
  }
  return ue.AsyncMode = u, ue.ConcurrentMode = l, ue.ContextConsumer = s, ue.ContextProvider = c, ue.Element = t, ue.ForwardRef = d, ue.Fragment = r, ue.Lazy = y, ue.Memo = p, ue.Portal = n, ue.Profiler = i, ue.StrictMode = a, ue.Suspense = f, ue.isAsyncMode = function(g) {
    return C(g) || S(g) === u;
  }, ue.isConcurrentMode = C, ue.isContextConsumer = function(g) {
    return S(g) === s;
  }, ue.isContextProvider = function(g) {
    return S(g) === c;
  }, ue.isElement = function(g) {
    return typeof g == "object" && g !== null && g.$$typeof === t;
  }, ue.isForwardRef = function(g) {
    return S(g) === d;
  }, ue.isFragment = function(g) {
    return S(g) === r;
  }, ue.isLazy = function(g) {
    return S(g) === y;
  }, ue.isMemo = function(g) {
    return S(g) === p;
  }, ue.isPortal = function(g) {
    return S(g) === n;
  }, ue.isProfiler = function(g) {
    return S(g) === i;
  }, ue.isStrictMode = function(g) {
    return S(g) === a;
  }, ue.isSuspense = function(g) {
    return S(g) === f;
  }, ue.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === r || g === l || g === i || g === a || g === f || g === v || typeof g == "object" && g !== null && (g.$$typeof === y || g.$$typeof === p || g.$$typeof === c || g.$$typeof === s || g.$$typeof === d || g.$$typeof === b || g.$$typeof === E || g.$$typeof === w || g.$$typeof === h);
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
var $o;
function Ys() {
  return $o || ($o = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, c = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, b = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
    function S(_) {
      return typeof _ == "string" || typeof _ == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      _ === r || _ === l || _ === i || _ === a || _ === f || _ === v || typeof _ == "object" && _ !== null && (_.$$typeof === y || _.$$typeof === p || _.$$typeof === c || _.$$typeof === s || _.$$typeof === d || _.$$typeof === b || _.$$typeof === E || _.$$typeof === w || _.$$typeof === h);
    }
    function C(_) {
      if (typeof _ == "object" && _ !== null) {
        var Ee = _.$$typeof;
        switch (Ee) {
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
                var Ce = Me && Me.$$typeof;
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
    var g = u, T = l, $ = s, L = c, N = t, ae = d, ie = r, oe = y, Q = p, B = n, te = i, z = a, ne = f, ce = !1;
    function ge(_) {
      return ce || (ce = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), O(_) || C(_) === u;
    }
    function O(_) {
      return C(_) === l;
    }
    function k(_) {
      return C(_) === s;
    }
    function H(_) {
      return C(_) === c;
    }
    function V(_) {
      return typeof _ == "object" && _ !== null && _.$$typeof === t;
    }
    function Y(_) {
      return C(_) === d;
    }
    function X(_) {
      return C(_) === r;
    }
    function M(_) {
      return C(_) === y;
    }
    function F(_) {
      return C(_) === p;
    }
    function U(_) {
      return C(_) === n;
    }
    function q(_) {
      return C(_) === i;
    }
    function G(_) {
      return C(_) === a;
    }
    function he(_) {
      return C(_) === f;
    }
    le.AsyncMode = g, le.ConcurrentMode = T, le.ContextConsumer = $, le.ContextProvider = L, le.Element = N, le.ForwardRef = ae, le.Fragment = ie, le.Lazy = oe, le.Memo = Q, le.Portal = B, le.Profiler = te, le.StrictMode = z, le.Suspense = ne, le.isAsyncMode = ge, le.isConcurrentMode = O, le.isContextConsumer = k, le.isContextProvider = H, le.isElement = V, le.isForwardRef = Y, le.isFragment = X, le.isLazy = M, le.isMemo = F, le.isPortal = U, le.isProfiler = q, le.isStrictMode = G, le.isSuspense = he, le.isValidElementType = S, le.typeOf = C;
  }()), le;
}
var ko;
function Da() {
  return ko || (ko = 1, process.env.NODE_ENV === "production" ? gn.exports = Us() : gn.exports = Ys()), gn.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var sr, _o;
function zs() {
  if (_o)
    return sr;
  _o = 1;
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
  return sr = a() ? Object.assign : function(i, c) {
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
  }, sr;
}
var ur, Ao;
function Vr() {
  if (Ao)
    return ur;
  Ao = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ur = e, ur;
}
var lr, Do;
function Na() {
  return Do || (Do = 1, lr = Function.call.bind(Object.prototype.hasOwnProperty)), lr;
}
var fr, No;
function Vs() {
  if (No)
    return fr;
  No = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = Vr(), n = {}, r = Na();
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
  }, fr = a, fr;
}
var dr, jo;
function qs() {
  if (jo)
    return dr;
  jo = 1;
  var e = Da(), t = zs(), n = Vr(), r = Na(), a = Vs(), i = function() {
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
  return dr = function(s, u) {
    var l = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function f(O) {
      var k = O && (l && O[l] || O[d]);
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
      arrayOf: S,
      element: C(),
      elementType: g(),
      instanceOf: T,
      node: ae(),
      objectOf: L,
      oneOf: $,
      oneOfType: N,
      shape: oe,
      exact: Q
    };
    function y(O, k) {
      return O === k ? O !== 0 || 1 / O === 1 / k : O !== O && k !== k;
    }
    function h(O, k) {
      this.message = O, this.data = k && typeof k == "object" ? k : {}, this.stack = "";
    }
    h.prototype = Error.prototype;
    function b(O) {
      if (process.env.NODE_ENV !== "production")
        var k = {}, H = 0;
      function V(X, M, F, U, q, G, he) {
        if (U = U || v, G = G || F, he !== n) {
          if (u) {
            var _ = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw _.name = "Invariant Violation", _;
          } else if (process.env.NODE_ENV !== "production" && typeof console != "undefined") {
            var Ee = U + ":" + F;
            !k[Ee] && // Avoid spamming the console because they are often not actionable except for lib authors
            H < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + G + "` prop on `" + U + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), k[Ee] = !0, H++);
          }
        }
        return M[F] == null ? X ? M[F] === null ? new h("The " + q + " `" + G + "` is marked as required " + ("in `" + U + "`, but its value is `null`.")) : new h("The " + q + " `" + G + "` is marked as required in " + ("`" + U + "`, but its value is `undefined`.")) : null : O(M, F, U, q, G);
      }
      var Y = V.bind(null, !1);
      return Y.isRequired = V.bind(null, !0), Y;
    }
    function E(O) {
      function k(H, V, Y, X, M, F) {
        var U = H[V], q = z(U);
        if (q !== O) {
          var G = ne(U);
          return new h(
            "Invalid " + X + " `" + M + "` of type " + ("`" + G + "` supplied to `" + Y + "`, expected ") + ("`" + O + "`."),
            { expectedType: O }
          );
        }
        return null;
      }
      return b(k);
    }
    function w() {
      return b(c);
    }
    function S(O) {
      function k(H, V, Y, X, M) {
        if (typeof O != "function")
          return new h("Property `" + M + "` of component `" + Y + "` has invalid PropType notation inside arrayOf.");
        var F = H[V];
        if (!Array.isArray(F)) {
          var U = z(F);
          return new h("Invalid " + X + " `" + M + "` of type " + ("`" + U + "` supplied to `" + Y + "`, expected an array."));
        }
        for (var q = 0; q < F.length; q++) {
          var G = O(F, q, Y, X, M + "[" + q + "]", n);
          if (G instanceof Error)
            return G;
        }
        return null;
      }
      return b(k);
    }
    function C() {
      function O(k, H, V, Y, X) {
        var M = k[H];
        if (!s(M)) {
          var F = z(M);
          return new h("Invalid " + Y + " `" + X + "` of type " + ("`" + F + "` supplied to `" + V + "`, expected a single ReactElement."));
        }
        return null;
      }
      return b(O);
    }
    function g() {
      function O(k, H, V, Y, X) {
        var M = k[H];
        if (!e.isValidElementType(M)) {
          var F = z(M);
          return new h("Invalid " + Y + " `" + X + "` of type " + ("`" + F + "` supplied to `" + V + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return b(O);
    }
    function T(O) {
      function k(H, V, Y, X, M) {
        if (!(H[V] instanceof O)) {
          var F = O.name || v, U = ge(H[V]);
          return new h("Invalid " + X + " `" + M + "` of type " + ("`" + U + "` supplied to `" + Y + "`, expected ") + ("instance of `" + F + "`."));
        }
        return null;
      }
      return b(k);
    }
    function $(O) {
      if (!Array.isArray(O))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), c;
      function k(H, V, Y, X, M) {
        for (var F = H[V], U = 0; U < O.length; U++)
          if (y(F, O[U]))
            return null;
        var q = JSON.stringify(O, function(he, _) {
          var Ee = ne(_);
          return Ee === "symbol" ? String(_) : _;
        });
        return new h("Invalid " + X + " `" + M + "` of value `" + String(F) + "` " + ("supplied to `" + Y + "`, expected one of " + q + "."));
      }
      return b(k);
    }
    function L(O) {
      function k(H, V, Y, X, M) {
        if (typeof O != "function")
          return new h("Property `" + M + "` of component `" + Y + "` has invalid PropType notation inside objectOf.");
        var F = H[V], U = z(F);
        if (U !== "object")
          return new h("Invalid " + X + " `" + M + "` of type " + ("`" + U + "` supplied to `" + Y + "`, expected an object."));
        for (var q in F)
          if (r(F, q)) {
            var G = O(F, q, Y, X, M + "." + q, n);
            if (G instanceof Error)
              return G;
          }
        return null;
      }
      return b(k);
    }
    function N(O) {
      if (!Array.isArray(O))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), c;
      for (var k = 0; k < O.length; k++) {
        var H = O[k];
        if (typeof H != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ce(H) + " at index " + k + "."
          ), c;
      }
      function V(Y, X, M, F, U) {
        for (var q = [], G = 0; G < O.length; G++) {
          var he = O[G], _ = he(Y, X, M, F, U, n);
          if (_ == null)
            return null;
          _.data && r(_.data, "expectedType") && q.push(_.data.expectedType);
        }
        var Ee = q.length > 0 ? ", expected one of type [" + q.join(", ") + "]" : "";
        return new h("Invalid " + F + " `" + U + "` supplied to " + ("`" + M + "`" + Ee + "."));
      }
      return b(V);
    }
    function ae() {
      function O(k, H, V, Y, X) {
        return B(k[H]) ? null : new h("Invalid " + Y + " `" + X + "` supplied to " + ("`" + V + "`, expected a ReactNode."));
      }
      return b(O);
    }
    function ie(O, k, H, V, Y) {
      return new h(
        (O || "React class") + ": " + k + " type `" + H + "." + V + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + Y + "`."
      );
    }
    function oe(O) {
      function k(H, V, Y, X, M) {
        var F = H[V], U = z(F);
        if (U !== "object")
          return new h("Invalid " + X + " `" + M + "` of type `" + U + "` " + ("supplied to `" + Y + "`, expected `object`."));
        for (var q in O) {
          var G = O[q];
          if (typeof G != "function")
            return ie(Y, X, M, q, ne(G));
          var he = G(F, q, Y, X, M + "." + q, n);
          if (he)
            return he;
        }
        return null;
      }
      return b(k);
    }
    function Q(O) {
      function k(H, V, Y, X, M) {
        var F = H[V], U = z(F);
        if (U !== "object")
          return new h("Invalid " + X + " `" + M + "` of type `" + U + "` " + ("supplied to `" + Y + "`, expected `object`."));
        var q = t({}, H[V], O);
        for (var G in q) {
          var he = O[G];
          if (r(O, G) && typeof he != "function")
            return ie(Y, X, M, G, ne(he));
          if (!he)
            return new h(
              "Invalid " + X + " `" + M + "` key `" + G + "` supplied to `" + Y + "`.\nBad object: " + JSON.stringify(H[V], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(O), null, "  ")
            );
          var _ = he(F, G, Y, X, M + "." + G, n);
          if (_)
            return _;
        }
        return null;
      }
      return b(k);
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
          var k = f(O);
          if (k) {
            var H = k.call(O), V;
            if (k !== O.entries) {
              for (; !(V = H.next()).done; )
                if (!B(V.value))
                  return !1;
            } else
              for (; !(V = H.next()).done; ) {
                var Y = V.value;
                if (Y && !B(Y[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function te(O, k) {
      return O === "symbol" ? !0 : k ? k["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && k instanceof Symbol : !1;
    }
    function z(O) {
      var k = typeof O;
      return Array.isArray(O) ? "array" : O instanceof RegExp ? "object" : te(k, O) ? "symbol" : k;
    }
    function ne(O) {
      if (typeof O == "undefined" || O === null)
        return "" + O;
      var k = z(O);
      if (k === "object") {
        if (O instanceof Date)
          return "date";
        if (O instanceof RegExp)
          return "regexp";
      }
      return k;
    }
    function ce(O) {
      var k = ne(O);
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
    function ge(O) {
      return !O.constructor || !O.constructor.name ? v : O.constructor.name;
    }
    return p.checkPropTypes = a, p.resetWarningCache = a.resetWarningCache, p.PropTypes = p, p;
  }, dr;
}
var vr, Lo;
function Gs() {
  if (Lo)
    return vr;
  Lo = 1;
  var e = Vr();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, vr = function() {
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
  }, vr;
}
if (process.env.NODE_ENV !== "production") {
  var Ks = Da(), Hs = !0;
  Rr.exports = qs()(Ks.isElement, Hs);
} else
  Rr.exports = Gs()();
var de = Rr.exports;
const ja = /* @__PURE__ */ di(de);
var Tr = "data-focus-lock", La = "data-focus-lock-disabled", Xs = "data-no-focus-lock", Js = "data-autofocus-inside", Zs = "data-no-autofocus", pr = {
  width: "1px",
  height: "0px",
  padding: 0,
  overflow: "hidden",
  position: "fixed",
  top: "1px",
  left: "1px"
};
process.env.NODE_ENV !== "production" && ja.node;
var Fa = Yr({}, function(e) {
  var t = e.target, n = e.currentTarget;
  return {
    target: t,
    currentTarget: n
  };
}), Ia = Yr(), Qs = Yr(), eu = xa({
  async: !0
  // focus-lock sidecar is not required on the server
  // however, it might be required for JSDOM tests
  // ssr: true,
}), tu = [], qr = /* @__PURE__ */ D.forwardRef(function(t, n) {
  var r, a = D.useState(), i = a[0], c = a[1], s = D.useRef(), u = D.useRef(!1), l = D.useRef(null), d = t.children, f = t.disabled, v = t.noFocusGuards, p = t.persistentFocus, y = t.crossFrame, h = t.autoFocus, b = t.allowTextSelection, E = t.group, w = t.className, S = t.whiteList, C = t.hasPositiveIndices, g = t.shards, T = g === void 0 ? tu : g, $ = t.as, L = $ === void 0 ? "div" : $, N = t.lockProps, ae = N === void 0 ? {} : N, ie = t.sideCar, oe = t.returnFocus, Q = t.focusOptions, B = t.onActivation, te = t.onDeactivation, z = D.useState({}), ne = z[0], ce = D.useCallback(function() {
    l.current = l.current || document && document.activeElement, s.current && B && B(s.current), u.current = !0;
  }, [B]), ge = D.useCallback(function() {
    u.current = !1, te && te(s.current);
  }, [te]);
  fe(function() {
    f || (l.current = null);
  }, []);
  var O = D.useCallback(function(U) {
    var q = l.current;
    if (q && q.focus) {
      var G = typeof oe == "function" ? oe(q) : oe;
      if (G) {
        var he = typeof G == "object" ? G : void 0;
        l.current = null, U ? Promise.resolve().then(function() {
          return q.focus(he);
        }) : q.focus(he);
      }
    }
  }, [oe]), k = D.useCallback(function(U) {
    u.current && Fa.useMedium(U);
  }, []), H = Ia.useMedium, V = D.useCallback(function(U) {
    s.current !== U && (s.current = U, c(U));
  }, []);
  process.env.NODE_ENV !== "production" && (typeof b != "undefined" && console.warn("React-Focus-Lock: allowTextSelection is deprecated and enabled by default"), D.useEffect(function() {
    !s.current && typeof L != "string" && console.error("FocusLock: could not obtain ref to internal node");
  }, []));
  var Y = we((r = {}, r[La] = f && "disabled", r[Tr] = E, r), ae), X = v !== !0, M = X && v !== "tail", F = ya([n, V]);
  return /* @__PURE__ */ D.createElement(D.Fragment, null, X && [
    // nearest focus guard
    /* @__PURE__ */ D.createElement("div", {
      key: "guard-first",
      "data-focus-guard": !0,
      tabIndex: f ? -1 : 0,
      style: pr
    }),
    // first tabbed element guard
    C ? /* @__PURE__ */ D.createElement("div", {
      key: "guard-nearest",
      "data-focus-guard": !0,
      tabIndex: f ? -1 : 1,
      style: pr
    }) : null
  ], !f && /* @__PURE__ */ D.createElement(ie, {
    id: ne,
    sideCar: eu,
    observed: i,
    disabled: f,
    persistentFocus: p,
    crossFrame: y,
    autoFocus: h,
    whiteList: S,
    shards: T,
    onActivation: ce,
    onDeactivation: ge,
    returnFocus: O,
    focusOptions: Q
  }), /* @__PURE__ */ D.createElement(L, we({
    ref: F
  }, Y, {
    className: w,
    onBlur: H,
    onFocus: k
  }), d), M && /* @__PURE__ */ D.createElement("div", {
    "data-focus-guard": !0,
    tabIndex: f ? -1 : 0,
    style: pr
  }));
});
qr.propTypes = process.env.NODE_ENV !== "production" ? {
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
qr.defaultProps = {
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
const Ma = qr;
function $r(e, t) {
  return $r = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, a) {
    return r.__proto__ = a, r;
  }, $r(e, t);
}
function nu(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, $r(e, t);
}
function nn(e) {
  "@babel/helpers - typeof";
  return nn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, nn(e);
}
function ru(e, t) {
  if (nn(e) !== "object" || e === null)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (nn(r) !== "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function ou(e) {
  var t = ru(e, "string");
  return nn(t) === "symbol" ? t : String(t);
}
function au(e, t, n) {
  return t = ou(t), t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function iu(e, t) {
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
      nu(d, l);
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
    }(ui);
    return au(u, "displayName", "SideEffect(" + n(a) + ")"), u;
  };
}
var Ye = function(e) {
  for (var t = Array(e.length), n = 0; n < e.length; ++n)
    t[n] = e[n];
  return t;
}, kn = function(e) {
  return Array.isArray(e) ? e : [e];
}, Ba = function(e) {
  return Array.isArray(e) ? e[0] : e;
}, cu = function(e) {
  if (e.nodeType !== Node.ELEMENT_NODE)
    return !1;
  var t = window.getComputedStyle(e, null);
  return !t || !t.getPropertyValue ? !1 : t.getPropertyValue("display") === "none" || t.getPropertyValue("visibility") === "hidden";
}, Wa = function(e) {
  return e.parentNode && e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    e.parentNode.host
  ) : e.parentNode;
}, Ua = function(e) {
  return e === document || e && e.nodeType === Node.DOCUMENT_NODE;
}, su = function(e, t) {
  return !e || Ua(e) || !cu(e) && t(Wa(e));
}, Ya = function(e, t) {
  var n = e.get(t);
  if (n !== void 0)
    return n;
  var r = su(t, Ya.bind(void 0, e));
  return e.set(t, r), r;
}, uu = function(e, t) {
  return e && !Ua(e) ? du(e) ? t(Wa(e)) : !1 : !0;
}, za = function(e, t) {
  var n = e.get(t);
  if (n !== void 0)
    return n;
  var r = uu(t, za.bind(void 0, e));
  return e.set(t, r), r;
}, Va = function(e) {
  return e.dataset;
}, lu = function(e) {
  return e.tagName === "BUTTON";
}, qa = function(e) {
  return e.tagName === "INPUT";
}, Ga = function(e) {
  return qa(e) && e.type === "radio";
}, fu = function(e) {
  return !((qa(e) || lu(e)) && (e.type === "hidden" || e.disabled));
}, du = function(e) {
  var t = e.getAttribute(Zs);
  return ![!0, "true", ""].includes(t);
}, Gr = function(e) {
  var t;
  return !!(e && (!((t = Va(e)) === null || t === void 0) && t.focusGuard));
}, _n = function(e) {
  return !Gr(e);
}, vu = function(e) {
  return !!e;
}, pu = function(e, t) {
  var n = e.tabIndex - t.tabIndex, r = e.index - t.index;
  if (n) {
    if (!e.tabIndex)
      return 1;
    if (!t.tabIndex)
      return -1;
  }
  return n || r;
}, Ka = function(e, t, n) {
  return Ye(e).map(function(r, a) {
    return {
      node: r,
      index: a,
      tabIndex: n && r.tabIndex === -1 ? (r.dataset || {}).focusGuard ? 0 : -1 : r.tabIndex
    };
  }).filter(function(r) {
    return !t || r.tabIndex >= 0;
  }).sort(pu);
}, mu = [
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
], Kr = mu.join(","), hu = "".concat(Kr, ", [data-focus-guard]"), Ha = function(e, t) {
  return Ye((e.shadowRoot || e).children).reduce(function(n, r) {
    return n.concat(r.matches(t ? hu : Kr) ? [r] : [], Ha(r));
  }, []);
}, gu = function(e, t) {
  var n;
  return e instanceof HTMLIFrameElement && (!((n = e.contentDocument) === null || n === void 0) && n.body) ? Ln([e.contentDocument.body], t) : [e];
}, Ln = function(e, t) {
  return e.reduce(function(n, r) {
    var a, i = Ha(r, t), c = (a = []).concat.apply(a, i.map(function(s) {
      return gu(s, t);
    }));
    return n.concat(
      // add all tabbables inside and within shadow DOMs in DOM order
      c,
      // add if node is tabbable itself
      r.parentNode ? Ye(r.parentNode.querySelectorAll(Kr)).filter(function(s) {
        return s === r;
      }) : []
    );
  }, []);
}, yu = function(e) {
  var t = e.querySelectorAll("[".concat(Js, "]"));
  return Ye(t).map(function(n) {
    return Ln([n]);
  }).reduce(function(n, r) {
    return n.concat(r);
  }, []);
}, Hr = function(e, t) {
  return Ye(e).filter(function(n) {
    return Ya(t, n);
  }).filter(function(n) {
    return fu(n);
  });
}, Fo = function(e, t) {
  return t === void 0 && (t = /* @__PURE__ */ new Map()), Ye(e).filter(function(n) {
    return za(t, n);
  });
}, kr = function(e, t, n) {
  return Ka(Hr(Ln(e, n), t), !0, n);
}, Io = function(e, t) {
  return Ka(Hr(Ln(e), t), !1);
}, bu = function(e, t) {
  return Hr(yu(e), t);
}, Ot = function(e, t) {
  return e.shadowRoot ? Ot(e.shadowRoot, t) : Object.getPrototypeOf(e).contains !== void 0 && Object.getPrototypeOf(e).contains.call(e, t) ? !0 : Ye(e.children).some(function(n) {
    var r;
    if (n instanceof HTMLIFrameElement) {
      var a = (r = n.contentDocument) === null || r === void 0 ? void 0 : r.body;
      return a ? Ot(a, t) : !1;
    }
    return Ot(n, t);
  });
}, wu = function(e) {
  for (var t = /* @__PURE__ */ new Set(), n = e.length, r = 0; r < n; r += 1)
    for (var a = r + 1; a < n; a += 1) {
      var i = e[r].compareDocumentPosition(e[a]);
      (i & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0 && t.add(a), (i & Node.DOCUMENT_POSITION_CONTAINS) > 0 && t.add(r);
    }
  return e.filter(function(c, s) {
    return !t.has(s);
  });
}, Xa = function(e) {
  return e.parentNode ? Xa(e.parentNode) : e;
}, Xr = function(e) {
  var t = kn(e);
  return t.filter(Boolean).reduce(function(n, r) {
    var a = r.getAttribute(Tr);
    return n.push.apply(n, a ? wu(Ye(Xa(r).querySelectorAll("[".concat(Tr, '="').concat(a, '"]:not([').concat(La, '="disabled"])')))) : [r]), n;
  }, []);
}, xu = function(e) {
  try {
    return e();
  } catch (t) {
    return;
  }
}, rn = function(e) {
  if (e === void 0 && (e = document), !(!e || !e.activeElement)) {
    var t = e.activeElement;
    return t.shadowRoot ? rn(t.shadowRoot) : t instanceof HTMLIFrameElement && xu(function() {
      return t.contentWindow.document;
    }) ? rn(t.contentWindow.document) : t;
  }
}, Eu = function(e, t) {
  return e === t;
}, Cu = function(e, t) {
  return !!Ye(e.querySelectorAll("iframe")).some(function(n) {
    return Eu(n, t);
  });
}, Ja = function(e, t) {
  return t === void 0 && (t = rn(Ba(e).ownerDocument)), !t || t.dataset && t.dataset.focusGuard ? !1 : Xr(e).some(function(n) {
    return Ot(n, t) || Cu(n, t);
  });
}, Su = function(e) {
  e === void 0 && (e = document);
  var t = rn(e);
  return t ? Ye(e.querySelectorAll("[".concat(Xs, "]"))).some(function(n) {
    return Ot(n, t);
  }) : !1;
}, Ou = function(e, t) {
  return t.filter(Ga).filter(function(n) {
    return n.name === e.name;
  }).filter(function(n) {
    return n.checked;
  })[0] || e;
}, Jr = function(e, t) {
  return Ga(e) && e.name ? Ou(e, t) : e;
}, Pu = function(e) {
  var t = /* @__PURE__ */ new Set();
  return e.forEach(function(n) {
    return t.add(Jr(n, e));
  }), e.filter(function(n) {
    return t.has(n);
  });
}, Mo = function(e) {
  return e[0] && e.length > 1 ? Jr(e[0], e) : e[0];
}, Bo = function(e, t) {
  return e.length > 1 ? e.indexOf(Jr(e[t], e)) : t;
}, Za = "NEW_FOCUS", Ru = function(e, t, n, r) {
  var a = e.length, i = e[0], c = e[a - 1], s = Gr(n);
  if (!(n && e.indexOf(n) >= 0)) {
    var u = n !== void 0 ? t.indexOf(n) : -1, l = r ? t.indexOf(r) : u, d = r ? e.indexOf(r) : -1, f = u - l, v = t.indexOf(i), p = t.indexOf(c), y = Pu(t), h = n !== void 0 ? y.indexOf(n) : -1, b = h - (r ? y.indexOf(r) : u), E = Bo(e, 0), w = Bo(e, a - 1);
    if (u === -1 || d === -1)
      return Za;
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
}, Tu = function(e) {
  return function(t) {
    var n, r = (n = Va(t)) === null || n === void 0 ? void 0 : n.autofocus;
    return (
      // @ts-expect-error
      t.autofocus || //
      r !== void 0 && r !== "false" || //
      e.indexOf(t) >= 0
    );
  };
}, $u = function(e, t, n) {
  var r = e.map(function(i) {
    var c = i.node;
    return c;
  }), a = Fo(r.filter(Tu(n)));
  return a && a.length ? Mo(a) : Mo(Fo(t));
}, _r = function(e, t) {
  return t === void 0 && (t = []), t.push(e), e.parentNode && _r(e.parentNode.host || e.parentNode, t), t;
}, mr = function(e, t) {
  for (var n = _r(e), r = _r(t), a = 0; a < n.length; a += 1) {
    var i = n[a];
    if (r.indexOf(i) >= 0)
      return i;
  }
  return !1;
}, Qa = function(e, t, n) {
  var r = kn(e), a = kn(t), i = r[0], c = !1;
  return a.filter(Boolean).forEach(function(s) {
    c = mr(c || s, s) || c, n.filter(Boolean).forEach(function(u) {
      var l = mr(i, u);
      l && (!c || Ot(l, c) ? c = l : c = mr(l, c));
    });
  }), c;
}, ku = function(e, t) {
  return e.reduce(function(n, r) {
    return n.concat(bu(r, t));
  }, []);
}, _u = function(e, t) {
  var n = /* @__PURE__ */ new Map();
  return t.forEach(function(r) {
    return n.set(r.node, r);
  }), e.map(function(r) {
    return n.get(r);
  }).filter(vu);
}, Au = function(e, t) {
  var n = rn(kn(e).length > 0 ? document : Ba(e).ownerDocument), r = Xr(e).filter(_n), a = Qa(n || e, e, r), i = /* @__PURE__ */ new Map(), c = Io(r, i), s = kr(r, i).filter(function(p) {
    var y = p.node;
    return _n(y);
  });
  if (!(!s[0] && (s = c, !s[0]))) {
    var u = Io([a], i).map(function(p) {
      var y = p.node;
      return y;
    }), l = _u(u, s), d = l.map(function(p) {
      var y = p.node;
      return y;
    }), f = Ru(d, u, n, t);
    if (f === Za) {
      var v = $u(c, d, ku(r, i));
      if (v)
        return { node: v };
      console.warn("focus-lock: cannot find any node to move focus into");
      return;
    }
    return f === void 0 ? f : l[f];
  }
}, Du = function(e) {
  var t = Xr(e).filter(_n), n = Qa(e, e, t), r = /* @__PURE__ */ new Map(), a = kr([n], r, !0), i = kr(t, r).filter(function(c) {
    var s = c.node;
    return _n(s);
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
      guard: Gr(s)
    };
  });
}, Nu = function(e, t) {
  "focus" in e && e.focus(t), "contentWindow" in e && e.contentWindow && e.contentWindow.focus();
}, hr = 0, gr = !1, ei = function(e, t, n) {
  n === void 0 && (n = {});
  var r = Au(e, t);
  if (!gr && r) {
    if (hr > 2) {
      console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"), gr = !0, setTimeout(function() {
        gr = !1;
      }, 1);
      return;
    }
    hr++, Nu(r.node, n.focusOptions), hr--;
  }
};
function Zr(e) {
  setTimeout(e, 1);
}
var ju = function() {
  return document && document.activeElement === document.body;
}, Lu = function() {
  return ju() || Su();
}, Pt = null, Et = null, Rt = null, on = !1, Fu = function() {
  return !0;
}, Iu = function(t) {
  return (Pt.whiteList || Fu)(t);
}, Mu = function(t, n) {
  Rt = {
    observerNode: t,
    portaledElement: n
  };
}, Bu = function(t) {
  return Rt && Rt.portaledElement === t;
};
function Wo(e, t, n, r) {
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
var Wu = function(t) {
  return t && "current" in t ? t.current : t;
}, Uu = function(t) {
  return t ? !!on : on === "meanwhile";
}, Yu = function e(t, n, r) {
  return n && // find host equal to active element and check nested active element
  (n.host === t && (!n.activeElement || r.contains(n.activeElement)) || n.parentNode && e(t, n.parentNode, r));
}, zu = function(t, n) {
  return n.some(function(r) {
    return Yu(t, r, r);
  });
}, An = function() {
  var t = !1;
  if (Pt) {
    var n = Pt, r = n.observed, a = n.persistentFocus, i = n.autoFocus, c = n.shards, s = n.crossFrame, u = n.focusOptions, l = r || Rt && Rt.portaledElement, d = document && document.activeElement;
    if (l) {
      var f = [l].concat(c.map(Wu).filter(Boolean));
      if ((!d || Iu(d)) && (a || Uu(s) || !Lu() || !Et && i) && (l && !// active element is "inside" working area
      (Ja(f) || // check for shadow-dom contained elements
      d && zu(d, f) || Bu(d)) && (document && !Et && d && !i ? (d.blur && d.blur(), document.body.focus()) : (t = ei(f, Et, {
        focusOptions: u
      }), Rt = {})), on = !1, Et = document && document.activeElement), document) {
        var v = document && document.activeElement, p = Du(f), y = p.map(function(h) {
          var b = h.node;
          return b;
        }).indexOf(v);
        y > -1 && (p.filter(function(h) {
          var b = h.guard, E = h.node;
          return b && E.dataset.focusAutoGuard;
        }).forEach(function(h) {
          var b = h.node;
          return b.removeAttribute("tabIndex");
        }), Wo(y, p.length, 1, p), Wo(y, -1, -1, p));
      }
    }
  }
  return t;
}, ti = function(t) {
  An() && t && (t.stopPropagation(), t.preventDefault());
}, Qr = function() {
  return Zr(An);
}, Vu = function(t) {
  var n = t.target, r = t.currentTarget;
  r.contains(n) || Mu(r, n);
}, qu = function() {
  return null;
};
process.env.NODE_ENV !== "production" && ja.node.isRequired;
var ni = function() {
  on = "just", Zr(function() {
    on = "meanwhile";
  });
}, Gu = function() {
  document.addEventListener("focusin", ti), document.addEventListener("focusout", Qr), window.addEventListener("blur", ni);
}, Ku = function() {
  document.removeEventListener("focusin", ti), document.removeEventListener("focusout", Qr), window.removeEventListener("blur", ni);
};
function Hu(e) {
  return e.filter(function(t) {
    var n = t.disabled;
    return !n;
  });
}
function Xu(e) {
  var t = e.slice(-1)[0];
  t && !Pt && Gu();
  var n = Pt, r = n && t && t.id === n.id;
  Pt = t, n && !r && (n.onDeactivation(), e.filter(function(a) {
    var i = a.id;
    return i === n.id;
  }).length || n.returnFocus(!t)), t ? (Et = null, (!r || n.observed !== t.observed) && t.onActivation(), An(), Zr(An)) : (Ku(), Et = null);
}
Fa.assignSyncMedium(Vu);
Ia.assignMedium(Qr);
Qs.assignMedium(function(e) {
  return e({
    moveFocusInside: ei,
    focusInside: Ja
  });
});
const Ju = iu(Hu, Xu)(qu);
var ri = /* @__PURE__ */ D.forwardRef(function(t, n) {
  return /* @__PURE__ */ D.createElement(Ma, we({
    sideCar: Ju,
    ref: n
  }, t));
}), oi = Ma.propTypes || {};
oi.sideCar;
var Zu = Ws(oi, ["sideCar"]);
ri.propTypes = process.env.NODE_ENV !== "production" ? Zu : {};
const Qu = ri;
const el = (e) => {
  const { children: t, open: n, onOpenChange: r, disableBackdropClick: a, disableEscapeKey: i, contentClassName: c } = e, [s, u] = re(!0), l = ye(null);
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
  }, [a, i, r]), /* @__PURE__ */ P.jsx("div", { className: "Modal-backdrop", children: /* @__PURE__ */ P.jsx(
    "div",
    {
      ref: l,
      "aria-modal": "true",
      role: "dialog",
      className: Z({
        "Modal-content": !0,
        [c || ""]: !!c
      }),
      children: t
    }
  ) });
}, vl = (e) => {
  const {
    open: t,
    onOpenChange: n,
    children: r,
    disableBackdropClick: a = !1,
    disableEscapeKey: i = !1,
    contentClassName: c
  } = e;
  return t ? /* @__PURE__ */ P.jsx(P.Fragment, { children: fi(
    /* @__PURE__ */ P.jsx(Qu, { children: /* @__PURE__ */ P.jsx("div", { className: "Modal", children: /* @__PURE__ */ P.jsx(
      el,
      {
        open: t,
        onOpenChange: n,
        disableBackdropClick: a,
        disableEscapeKey: i,
        contentClassName: c,
        children: r
      }
    ) }) }),
    document.body
  ) }) : null;
};
const Uo = "...";
var Sn = /* @__PURE__ */ ((e) => (e.ROUNDED = "rounded", e.SQUARED = "squared", e))(Sn || {});
const pl = (e) => {
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
  } = e, d = (w, S) => {
    const C = S - w + 1;
    return Array.from({ length: C }, (g, T) => w + T);
  }, f = d(1, Math.min(a, r)), v = d(Math.max(r - a + 1, a + 1), r), p = Math.max(
    Math.min(t - i, r - a - i * 2 - 1),
    a + 2
  ), y = Math.min(
    Math.max(t + i, a + i * 2 + 2),
    v.length > 0 ? v[0] - 2 : r - 1
  ), h = () => p > a + 2 ? [Uo] : a + 1 < r - a ? [a + 1] : [], b = () => y < r - a - 1 ? [Uo] : r - a > a ? [r - a] : [], E = [
    ...f,
    ...h(),
    ...d(p, y),
    ...b(),
    ...v
  ];
  return /* @__PURE__ */ P.jsxs("div", { className: "Pagination", role: "pagination", children: [
    /* @__PURE__ */ P.jsx(
      "button",
      {
        className: "Pagination-arrow-button",
        "aria-label": u,
        "aria-controls": "prev",
        disabled: t === 1,
        "aria-disabled": t === 1,
        onClick: () => n(t - 1),
        children: /* @__PURE__ */ P.jsx(Go, {})
      }
    ),
    E.map((w, S) => /* @__PURE__ */ P.jsx(
      "button",
      ve(K({
        className: Z({
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
      S
    )),
    /* @__PURE__ */ P.jsx(
      "button",
      {
        "aria-label": s,
        className: "Pagination-arrow-button",
        "aria-controls": "next",
        disabled: t === r,
        "aria-disabled": t === r,
        onClick: () => n(t + 1),
        children: /* @__PURE__ */ P.jsx(Dr, {})
      }
    )
  ] });
};
var Xt = /* @__PURE__ */ ((e) => (e.Light = "light", e.Dark = "dark", e.Green = "green", e))(Xt || {}), Jt = /* @__PURE__ */ ((e) => (e.Small = "small", e.Medium = "medium", e.Large = "large", e))(Jt || {}), On = /* @__PURE__ */ ((e) => (e.row = "row", e.column = "column", e))(On || {});
const tl = ({
  options: e = [],
  value: t = ((d) => (d = e[0]) == null ? void 0 : d.value)(),
  onChange: n,
  disabled: r = !1,
  name: a,
  size: i = Jt.Medium,
  theme: c = Xt.Green,
  error: s = !1,
  variant: u = On.row,
  gap: l = 12
}) => {
  const [f, v] = re(t);
  fe(() => {
    f !== t && v(t);
  }, [t]);
  const p = (h) => {
    f !== h.value && (v(h.value), n && n(h.value));
  }, y = (h, b) => {
    (h.key === "Enter" || h.key === " ") && !r && p(b);
  };
  return /* @__PURE__ */ P.jsx(
    "div",
    {
      style: { gap: l + "px" },
      className: Z({
        RadioGroup: !0,
        "RadioGroup-disabled": r,
        "RadioGroup-row": u === On.row,
        "RadioGroup-column": u === On.column,
        "RadioGroup-dark": c === Xt.Dark,
        "RadioGroup-green": c === Xt.Green,
        "RadioGroup-light": c === Xt.Light
      }),
      children: e.map((h) => {
        const b = f === h.value;
        return /* @__PURE__ */ P.jsxs(
          "label",
          {
            className: Z({
              "RadioGroup-button": !0,
              "RadioGroup-button-checked": b,
              "RadioGroup-button-unchecked": !b,
              "RadioGroup-button-disabled": h.disabled || r,
              "RadioGroup-button-error": s
            }),
            children: [
              /* @__PURE__ */ P.jsx(
                "input",
                {
                  type: "radio",
                  checked: b,
                  className: Z({
                    "Radio-input": !0,
                    "Radio-input-order-1": h.labelOrder === "left",
                    "Radio-input-large": i === Jt.Large,
                    "Radio-input-medium": i === Jt.Medium,
                    "Radio-input-small": i === Jt.Small
                  }),
                  onChange: () => p(h),
                  "aria-label": (h == null ? void 0 : h.ariaLabel) || "radio",
                  tabIndex: -1,
                  name: a,
                  disabled: h.disabled || r
                }
              ),
              h.label && /* @__PURE__ */ P.jsx(
                "div",
                {
                  onKeyDown: (E) => y(E, h),
                  tabIndex: h.disabled ? void 0 : 0,
                  className: Z({
                    "RadioGroup-button-label": !0,
                    "RadioGroup-button-label-order-0": h.labelOrder === "left"
                  }),
                  style: { order: h.labelOrder },
                  children: h.label
                }
              )
            ]
          },
          h.key
        );
      })
    }
  );
};
tl.displayName = "RadioGroup";
export {
  Ei as Accordion,
  ut as BUTTON_COLOR,
  ze as BUTTON_SIZE,
  mi as BUTTON_TYPE,
  Ve as BUTTON_VARIANT,
  fl as Breadcrumbs,
  hi as Button,
  wt as CHECKBOX_SIZE,
  Ae as CHECKBOX_THEME,
  wi as Checkbox,
  Oe as DROPDOWN_SIZE,
  xt as DROPDOWN_TYPE,
  Bs as Dropdown,
  bt as INPUT_SIZE,
  Kt as INPUT_THEME,
  lt as INPUT_TYPE,
  Ci as IconButton,
  bi as Input,
  vl as Modal,
  Sn as PAGINATION_VARIANTS,
  Cn as PROGRESS_BAR_SIZE,
  pl as Pagination,
  Ms as Popover,
  dl as ProgressBar,
  Jt as RADIO_GROUP_SIZE,
  Xt as RADIO_GROUP_THEME,
  On as RADIO_GROUP_VARIANT,
  tl as RadioGroup,
  qe as SWITCH_SIZE,
  Ht as SWITCH_TAGS_SIZE,
  bn as SWITCH_TAGS_VARIANT,
  Be as SWITCH_THEME,
  xi as Switch,
  cl as SwitchTags,
  xr as TABS_SIZE,
  yn as TAGS_SIZE,
  al as Tabs,
  il as Tags
};
