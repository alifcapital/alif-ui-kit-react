import './index.css';
var oi = Object.defineProperty, ai = Object.defineProperties;
var ii = Object.getOwnPropertyDescriptors;
var un = Object.getOwnPropertySymbols;
var eo = Object.prototype.hasOwnProperty, to = Object.prototype.propertyIsEnumerable;
var Qr = (e, t, n) => t in e ? oi(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, H = (e, t) => {
  for (var n in t || (t = {}))
    eo.call(t, n) && Qr(e, n, t[n]);
  if (un)
    for (var n of un(t))
      to.call(t, n) && Qr(e, n, t[n]);
  return e;
}, ve = (e, t) => ai(e, ii(t));
var xe = (e, t) => {
  var n = {};
  for (var r in e)
    eo.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && un)
    for (var r of un(e))
      t.indexOf(r) < 0 && to.call(e, r) && (n[r] = e[r]);
  return n;
};
var Me = (e, t, n) => new Promise((r, a) => {
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
import Pe, { useState as te, useLayoutEffect as He, useEffect as ue, useMemo as pt, useRef as ye, useCallback as dt, createContext as gr, createElement as me, useContext as Uo, forwardRef as Le, Children as Ot, isValidElement as Zt, cloneElement as _r, Fragment as Vo, useReducer as ci, PureComponent as si } from "react";
import * as ui from "react-dom";
import { flushSync as Yo } from "react-dom";
function li(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var yr = { exports: {} }, Gt = {};
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
function fi() {
  if (no)
    return Gt;
  no = 1;
  var e = Pe, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
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
var ro;
function di() {
  return ro || (ro = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Pe, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), s = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), g = Symbol.iterator, y = "@@iterator";
    function b(o) {
      if (o === null || typeof o != "object")
        return null;
      var m = g && o[g] || o[y];
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
        var R = E.ReactDebugCurrentFrame, F = R.getStackAddendum();
        F !== "" && (m += "%s", x = x.concat([F]));
        var W = x.map(function(j) {
          return String(j);
        });
        W.unshift("Warning: " + m), Function.prototype.apply.call(console[o], console, W);
      }
    }
    var C = !1, h = !1, T = !1, $ = !1, L = !1, N;
    N = Symbol.for("react.module.reference");
    function ae(o) {
      return !!(typeof o == "string" || typeof o == "function" || o === r || o === i || L || o === a || o === l || o === d || $ || o === p || C || h || T || typeof o == "object" && o !== null && (o.$$typeof === v || o.$$typeof === f || o.$$typeof === c || o.$$typeof === s || o.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      o.$$typeof === N || o.getModuleId !== void 0));
    }
    function ie(o, m, x) {
      var R = o.displayName;
      if (R)
        return R;
      var F = m.displayName || m.name || "";
      return F !== "" ? x + "(" + F + ")" : x;
    }
    function oe(o) {
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
            return oe(m) + ".Consumer";
          case c:
            var x = o;
            return oe(x._context) + ".Provider";
          case u:
            return ie(o, o.render, "ForwardRef");
          case f:
            var R = o.displayName || null;
            return R !== null ? R : Z(o.type) || "Memo";
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
    var B = Object.assign, ne = 0, Y, re, ce, ge, O, k, K;
    function z() {
    }
    z.__reactDisabledLog = !0;
    function V() {
      {
        if (ne === 0) {
          Y = console.log, re = console.info, ce = console.warn, ge = console.error, O = console.group, k = console.groupCollapsed, K = console.groupEnd;
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
        ne++;
      }
    }
    function X() {
      {
        if (ne--, ne === 0) {
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
              value: re
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
              value: K
            })
          });
        }
        ne < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var M = E.ReactCurrentDispatcher, I;
    function U(o, m, x) {
      {
        if (I === void 0)
          try {
            throw Error();
          } catch (F) {
            var R = F.stack.trim().match(/\n( *(at )?)/);
            I = R && R[1] || "";
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
        var x = G.get(o);
        if (x !== void 0)
          return x;
      }
      var R;
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
        q = !1, M.current = W, X(), Error.prepareStackTrace = F;
      }
      var Te = o ? o.displayName || o.name : "", qt = Te ? U(Te) : "";
      return typeof o == "function" && G.set(o, qt), qt;
    }
    function Ee(o, m, x) {
      return _(o, !1);
    }
    function Be(o) {
      var m = o.prototype;
      return !!(m && m.isReactComponent);
    }
    function Ce(o, m, x) {
      if (o == null)
        return "";
      if (typeof o == "function")
        return _(o, Be(o));
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
            var R = o, F = R._payload, W = R._init;
            try {
              return Ce(W(F), m, x);
            } catch (j) {
            }
          }
        }
      return "";
    }
    var Se = Object.prototype.hasOwnProperty, Qe = {}, at = E.ReactDebugCurrentFrame;
    function Ie(o) {
      if (o) {
        var m = o._owner, x = Ce(o.type, o._source, m ? m.type : null);
        at.setExtraStackFrame(x);
      } else
        at.setExtraStackFrame(null);
    }
    function Nt(o, m, x, R, F) {
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
            A && !(A instanceof Error) && (Ie(F), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", R || "React class", x, j, typeof A), Ie(null)), A instanceof Error && !(A.message in Qe) && (Qe[A.message] = !0, Ie(F), w("Failed %s type: %s", x, A.message), Ie(null));
          }
      }
    }
    var jt = Array.isArray;
    function _e(o) {
      return jt(o);
    }
    function Ln(o) {
      {
        var m = typeof Symbol == "function" && Symbol.toStringTag, x = m && o[Symbol.toStringTag] || o.constructor.name || "Object";
        return x;
      }
    }
    function In(o) {
      try {
        return Lt(o), !1;
      } catch (m) {
        return !0;
      }
    }
    function Lt(o) {
      return "" + o;
    }
    function It(o) {
      if (In(o))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ln(o)), Lt(o);
    }
    var Fe = E.ReactCurrentOwner, Fn = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ft, Mt, it;
    it = {};
    function Mn(o) {
      if (Se.call(o, "ref")) {
        var m = Object.getOwnPropertyDescriptor(o, "ref").get;
        if (m && m.isReactWarning)
          return !1;
      }
      return o.ref !== void 0;
    }
    function Bn(o) {
      if (Se.call(o, "key")) {
        var m = Object.getOwnPropertyDescriptor(o, "key").get;
        if (m && m.isReactWarning)
          return !1;
      }
      return o.key !== void 0;
    }
    function Wn(o, m) {
      if (typeof o.ref == "string" && Fe.current && m && Fe.current.stateNode !== m) {
        var x = Z(Fe.current.type);
        it[x] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Z(Fe.current.type), o.ref), it[x] = !0);
      }
    }
    function Un(o, m) {
      {
        var x = function() {
          Ft || (Ft = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", m));
        };
        x.isReactWarning = !0, Object.defineProperty(o, "key", {
          get: x,
          configurable: !0
        });
      }
    }
    function Vn(o, m) {
      {
        var x = function() {
          Mt || (Mt = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", m));
        };
        x.isReactWarning = !0, Object.defineProperty(o, "ref", {
          get: x,
          configurable: !0
        });
      }
    }
    var Yn = function(o, m, x, R, F, W, j) {
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
        value: F
      }), Object.freeze && (Object.freeze(A.props), Object.freeze(A)), A;
    };
    function zn(o, m, x, R, F) {
      {
        var W, j = {}, A = null, se = null;
        x !== void 0 && (It(x), A = "" + x), Bn(m) && (It(m.key), A = "" + m.key), Mn(m) && (se = m.ref, Wn(m, F));
        for (W in m)
          Se.call(m, W) && !Fn.hasOwnProperty(W) && (j[W] = m[W]);
        if (o && o.defaultProps) {
          var J = o.defaultProps;
          for (W in J)
            j[W] === void 0 && (j[W] = J[W]);
        }
        if (A || se) {
          var ee = typeof o == "function" ? o.displayName || o.name || "Unknown" : o;
          A && Un(j, ee), se && Vn(j, ee);
        }
        return Yn(o, A, se, F, R, Fe.current, j);
      }
    }
    var ct = E.ReactCurrentOwner, Bt = E.ReactDebugCurrentFrame;
    function Re(o) {
      if (o) {
        var m = o._owner, x = Ce(o.type, o._source, m ? m.type : null);
        Bt.setExtraStackFrame(x);
      } else
        Bt.setExtraStackFrame(null);
    }
    var st;
    st = !1;
    function ut(o) {
      return typeof o == "object" && o !== null && o.$$typeof === t;
    }
    function Wt() {
      {
        if (ct.current) {
          var o = Z(ct.current.type);
          if (o)
            return `

Check the render method of \`` + o + "`.";
        }
        return "";
      }
    }
    function qn(o) {
      {
        if (o !== void 0) {
          var m = o.fileName.replace(/^.*[\\\/]/, ""), x = o.lineNumber;
          return `

Check your code at ` + m + ":" + x + ".";
        }
        return "";
      }
    }
    var Ut = {};
    function Gn(o) {
      {
        var m = Wt();
        if (!m) {
          var x = typeof o == "string" ? o : o.displayName || o.name;
          x && (m = `

Check the top-level render call using <` + x + ">.");
        }
        return m;
      }
    }
    function Vt(o, m) {
      {
        if (!o._store || o._store.validated || o.key != null)
          return;
        o._store.validated = !0;
        var x = Gn(m);
        if (Ut[x])
          return;
        Ut[x] = !0;
        var R = "";
        o && o._owner && o._owner !== ct.current && (R = " It was passed a child from " + Z(o._owner.type) + "."), Re(o), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', x, R), Re(null);
      }
    }
    function Yt(o, m) {
      {
        if (typeof o != "object")
          return;
        if (_e(o))
          for (var x = 0; x < o.length; x++) {
            var R = o[x];
            ut(R) && Vt(R, m);
          }
        else if (ut(o))
          o._store && (o._store.validated = !0);
        else if (o) {
          var F = b(o);
          if (typeof F == "function" && F !== o.entries)
            for (var W = F.call(o), j; !(j = W.next()).done; )
              ut(j.value) && Vt(j.value, m);
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
          var R = Z(m);
          Nt(x, o.props, "prop", R, o);
        } else if (m.PropTypes !== void 0 && !st) {
          st = !0;
          var F = Z(m);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", F || "Unknown");
        }
        typeof m.getDefaultProps == "function" && !m.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Kn(o) {
      {
        for (var m = Object.keys(o.props), x = 0; x < m.length; x++) {
          var R = m[x];
          if (R !== "children" && R !== "key") {
            Re(o), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", R), Re(null);
            break;
          }
        }
        o.ref !== null && (Re(o), w("Invalid attribute `ref` supplied to `React.Fragment`."), Re(null));
      }
    }
    function zt(o, m, x, R, F, W) {
      {
        var j = ae(o);
        if (!j) {
          var A = "";
          (o === void 0 || typeof o == "object" && o !== null && Object.keys(o).length === 0) && (A += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var se = qn(F);
          se ? A += se : A += Wt();
          var J;
          o === null ? J = "null" : _e(o) ? J = "array" : o !== void 0 && o.$$typeof === t ? (J = "<" + (Z(o.type) || "Unknown") + " />", A = " Did you accidentally export a JSX literal instead of a component?") : J = typeof o, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", J, A);
        }
        var ee = zn(o, m, x, F, W);
        if (ee == null)
          return ee;
        if (j) {
          var pe = m.children;
          if (pe !== void 0)
            if (R)
              if (_e(pe)) {
                for (var Te = 0; Te < pe.length; Te++)
                  Yt(pe[Te], o);
                Object.freeze && Object.freeze(pe);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Yt(pe, o);
        }
        return o === r ? Kn(ee) : Hn(ee), ee;
      }
    }
    function Xn(o, m, x) {
      return zt(o, m, x, !0);
    }
    function Jn(o, m, x) {
      return zt(o, m, x, !1);
    }
    var Zn = Jn, Qn = Xn;
    Ht.Fragment = r, Ht.jsx = Zn, Ht.jsxs = Qn;
  }()), Ht;
}
process.env.NODE_ENV === "production" ? yr.exports = fi() : yr.exports = di();
var P = yr.exports;
function zo(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = zo(e[t])) && (r && (r += " "), r += n);
    else
      for (t in e)
        e[t] && (r && (r += " "), r += t);
  return r;
}
function Q() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = zo(e)) && (r && (r += " "), r += t);
  return r;
}
var ze = /* @__PURE__ */ ((e) => (e.Large = "large", e.Medium = "medium", e.Small = "small", e))(ze || {}), qe = /* @__PURE__ */ ((e) => (e.Contained = "contained", e.Outlined = "outlined", e.Text = "text", e))(qe || {}), lt = /* @__PURE__ */ ((e) => (e.Primary = "primary", e.Secondary = "secondary", e.Green = "green", e))(lt || {}), vi = /* @__PURE__ */ ((e) => (e.Submit = "submit", e.Reset = "reset", e.Button = "button", e))(vi || {});
const pi = Pe.forwardRef((e, t) => {
  const {
    id: n,
    ariaLabel: r,
    className: a,
    children: i,
    disabled: c,
    rounded: s,
    endIcon: u,
    startIcon: l,
    color: d = lt.Primary,
    withIcon: f,
    size: v = ze.Medium,
    variant: p = qe.Contained,
    type: g = "button",
    onClick: y
  } = e, b = () => {
    y && y();
  };
  return /* @__PURE__ */ P.jsx(
    "button",
    {
      onClick: b,
      ref: t,
      type: g,
      "aria-label": r,
      id: n,
      disabled: c,
      className: Q({
        Button: !0,
        "Button-contained": p === qe.Contained,
        "Button-outlined": p === qe.Outlined,
        "Button-outlined-disable": !!c && p === qe.Outlined,
        "Button-text": p === qe.Text,
        "Button-text-small": v === ze.Small && p === qe.Text,
        "Button-text-large": v === ze.Large && p === qe.Text,
        "Button-text-disable": !!c && p === qe.Text,
        "Button-primary": v === ze.Medium,
        "Button-primary-disable": !!c && d === lt.Primary,
        "Button-secondary": d === lt.Secondary,
        "Button-secondary-disable": !!c && d === lt.Secondary,
        "Button-green": d === lt.Green,
        "Button-green-disable": !!c && d === lt.Green,
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
pi.displayName = "Button";
var br = { exports: {} }, Kt = {};
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
function mi() {
  if (oo)
    return Kt;
  oo = 1;
  var e = Pe, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
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
  return Kt.Fragment = n, Kt.jsx = c, Kt.jsxs = c, Kt;
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
var ao;
function hi() {
  return ao || (ao = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Pe, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), s = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), g = Symbol.iterator, y = "@@iterator";
    function b(o) {
      if (o === null || typeof o != "object")
        return null;
      var m = g && o[g] || o[y];
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
        var R = E.ReactDebugCurrentFrame, F = R.getStackAddendum();
        F !== "" && (m += "%s", x = x.concat([F]));
        var W = x.map(function(j) {
          return String(j);
        });
        W.unshift("Warning: " + m), Function.prototype.apply.call(console[o], console, W);
      }
    }
    var C = !1, h = !1, T = !1, $ = !1, L = !1, N;
    N = Symbol.for("react.module.reference");
    function ae(o) {
      return !!(typeof o == "string" || typeof o == "function" || o === r || o === i || L || o === a || o === l || o === d || $ || o === p || C || h || T || typeof o == "object" && o !== null && (o.$$typeof === v || o.$$typeof === f || o.$$typeof === c || o.$$typeof === s || o.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      o.$$typeof === N || o.getModuleId !== void 0));
    }
    function ie(o, m, x) {
      var R = o.displayName;
      if (R)
        return R;
      var F = m.displayName || m.name || "";
      return F !== "" ? x + "(" + F + ")" : x;
    }
    function oe(o) {
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
            return oe(m) + ".Consumer";
          case c:
            var x = o;
            return oe(x._context) + ".Provider";
          case u:
            return ie(o, o.render, "ForwardRef");
          case f:
            var R = o.displayName || null;
            return R !== null ? R : Z(o.type) || "Memo";
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
    var B = Object.assign, ne = 0, Y, re, ce, ge, O, k, K;
    function z() {
    }
    z.__reactDisabledLog = !0;
    function V() {
      {
        if (ne === 0) {
          Y = console.log, re = console.info, ce = console.warn, ge = console.error, O = console.group, k = console.groupCollapsed, K = console.groupEnd;
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
        ne++;
      }
    }
    function X() {
      {
        if (ne--, ne === 0) {
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
              value: re
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
              value: K
            })
          });
        }
        ne < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var M = E.ReactCurrentDispatcher, I;
    function U(o, m, x) {
      {
        if (I === void 0)
          try {
            throw Error();
          } catch (F) {
            var R = F.stack.trim().match(/\n( *(at )?)/);
            I = R && R[1] || "";
          }
        return `
` + I + o;
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
        q = !1, M.current = W, X(), Error.prepareStackTrace = F;
      }
      var Te = o ? o.displayName || o.name : "", qt = Te ? U(Te) : "";
      return typeof o == "function" && G.set(o, qt), qt;
    }
    function Ee(o, m, x) {
      return _(o, !1);
    }
    function Be(o) {
      var m = o.prototype;
      return !!(m && m.isReactComponent);
    }
    function Ce(o, m, x) {
      if (o == null)
        return "";
      if (typeof o == "function")
        return _(o, Be(o));
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
            var R = o, F = R._payload, W = R._init;
            try {
              return Ce(W(F), m, x);
            } catch (j) {
            }
          }
        }
      return "";
    }
    var Se = Object.prototype.hasOwnProperty, Qe = {}, at = E.ReactDebugCurrentFrame;
    function Ie(o) {
      if (o) {
        var m = o._owner, x = Ce(o.type, o._source, m ? m.type : null);
        at.setExtraStackFrame(x);
      } else
        at.setExtraStackFrame(null);
    }
    function Nt(o, m, x, R, F) {
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
            A && !(A instanceof Error) && (Ie(F), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", R || "React class", x, j, typeof A), Ie(null)), A instanceof Error && !(A.message in Qe) && (Qe[A.message] = !0, Ie(F), w("Failed %s type: %s", x, A.message), Ie(null));
          }
      }
    }
    var jt = Array.isArray;
    function _e(o) {
      return jt(o);
    }
    function Ln(o) {
      {
        var m = typeof Symbol == "function" && Symbol.toStringTag, x = m && o[Symbol.toStringTag] || o.constructor.name || "Object";
        return x;
      }
    }
    function In(o) {
      try {
        return Lt(o), !1;
      } catch (m) {
        return !0;
      }
    }
    function Lt(o) {
      return "" + o;
    }
    function It(o) {
      if (In(o))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ln(o)), Lt(o);
    }
    var Fe = E.ReactCurrentOwner, Fn = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ft, Mt, it;
    it = {};
    function Mn(o) {
      if (Se.call(o, "ref")) {
        var m = Object.getOwnPropertyDescriptor(o, "ref").get;
        if (m && m.isReactWarning)
          return !1;
      }
      return o.ref !== void 0;
    }
    function Bn(o) {
      if (Se.call(o, "key")) {
        var m = Object.getOwnPropertyDescriptor(o, "key").get;
        if (m && m.isReactWarning)
          return !1;
      }
      return o.key !== void 0;
    }
    function Wn(o, m) {
      if (typeof o.ref == "string" && Fe.current && m && Fe.current.stateNode !== m) {
        var x = Z(Fe.current.type);
        it[x] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Z(Fe.current.type), o.ref), it[x] = !0);
      }
    }
    function Un(o, m) {
      {
        var x = function() {
          Ft || (Ft = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", m));
        };
        x.isReactWarning = !0, Object.defineProperty(o, "key", {
          get: x,
          configurable: !0
        });
      }
    }
    function Vn(o, m) {
      {
        var x = function() {
          Mt || (Mt = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", m));
        };
        x.isReactWarning = !0, Object.defineProperty(o, "ref", {
          get: x,
          configurable: !0
        });
      }
    }
    var Yn = function(o, m, x, R, F, W, j) {
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
        value: F
      }), Object.freeze && (Object.freeze(A.props), Object.freeze(A)), A;
    };
    function zn(o, m, x, R, F) {
      {
        var W, j = {}, A = null, se = null;
        x !== void 0 && (It(x), A = "" + x), Bn(m) && (It(m.key), A = "" + m.key), Mn(m) && (se = m.ref, Wn(m, F));
        for (W in m)
          Se.call(m, W) && !Fn.hasOwnProperty(W) && (j[W] = m[W]);
        if (o && o.defaultProps) {
          var J = o.defaultProps;
          for (W in J)
            j[W] === void 0 && (j[W] = J[W]);
        }
        if (A || se) {
          var ee = typeof o == "function" ? o.displayName || o.name || "Unknown" : o;
          A && Un(j, ee), se && Vn(j, ee);
        }
        return Yn(o, A, se, F, R, Fe.current, j);
      }
    }
    var ct = E.ReactCurrentOwner, Bt = E.ReactDebugCurrentFrame;
    function Re(o) {
      if (o) {
        var m = o._owner, x = Ce(o.type, o._source, m ? m.type : null);
        Bt.setExtraStackFrame(x);
      } else
        Bt.setExtraStackFrame(null);
    }
    var st;
    st = !1;
    function ut(o) {
      return typeof o == "object" && o !== null && o.$$typeof === t;
    }
    function Wt() {
      {
        if (ct.current) {
          var o = Z(ct.current.type);
          if (o)
            return `

Check the render method of \`` + o + "`.";
        }
        return "";
      }
    }
    function qn(o) {
      {
        if (o !== void 0) {
          var m = o.fileName.replace(/^.*[\\\/]/, ""), x = o.lineNumber;
          return `

Check your code at ` + m + ":" + x + ".";
        }
        return "";
      }
    }
    var Ut = {};
    function Gn(o) {
      {
        var m = Wt();
        if (!m) {
          var x = typeof o == "string" ? o : o.displayName || o.name;
          x && (m = `

Check the top-level render call using <` + x + ">.");
        }
        return m;
      }
    }
    function Vt(o, m) {
      {
        if (!o._store || o._store.validated || o.key != null)
          return;
        o._store.validated = !0;
        var x = Gn(m);
        if (Ut[x])
          return;
        Ut[x] = !0;
        var R = "";
        o && o._owner && o._owner !== ct.current && (R = " It was passed a child from " + Z(o._owner.type) + "."), Re(o), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', x, R), Re(null);
      }
    }
    function Yt(o, m) {
      {
        if (typeof o != "object")
          return;
        if (_e(o))
          for (var x = 0; x < o.length; x++) {
            var R = o[x];
            ut(R) && Vt(R, m);
          }
        else if (ut(o))
          o._store && (o._store.validated = !0);
        else if (o) {
          var F = b(o);
          if (typeof F == "function" && F !== o.entries)
            for (var W = F.call(o), j; !(j = W.next()).done; )
              ut(j.value) && Vt(j.value, m);
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
          var R = Z(m);
          Nt(x, o.props, "prop", R, o);
        } else if (m.PropTypes !== void 0 && !st) {
          st = !0;
          var F = Z(m);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", F || "Unknown");
        }
        typeof m.getDefaultProps == "function" && !m.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Kn(o) {
      {
        for (var m = Object.keys(o.props), x = 0; x < m.length; x++) {
          var R = m[x];
          if (R !== "children" && R !== "key") {
            Re(o), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", R), Re(null);
            break;
          }
        }
        o.ref !== null && (Re(o), w("Invalid attribute `ref` supplied to `React.Fragment`."), Re(null));
      }
    }
    function zt(o, m, x, R, F, W) {
      {
        var j = ae(o);
        if (!j) {
          var A = "";
          (o === void 0 || typeof o == "object" && o !== null && Object.keys(o).length === 0) && (A += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var se = qn(F);
          se ? A += se : A += Wt();
          var J;
          o === null ? J = "null" : _e(o) ? J = "array" : o !== void 0 && o.$$typeof === t ? (J = "<" + (Z(o.type) || "Unknown") + " />", A = " Did you accidentally export a JSX literal instead of a component?") : J = typeof o, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", J, A);
        }
        var ee = zn(o, m, x, F, W);
        if (ee == null)
          return ee;
        if (j) {
          var pe = m.children;
          if (pe !== void 0)
            if (R)
              if (_e(pe)) {
                for (var Te = 0; Te < pe.length; Te++)
                  Yt(pe[Te], o);
                Object.freeze && Object.freeze(pe);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Yt(pe, o);
        }
        return o === r ? Kn(ee) : Hn(ee), ee;
      }
    }
    function Xn(o, m, x) {
      return zt(o, m, x, !0);
    }
    function Jn(o, m, x) {
      return zt(o, m, x, !1);
    }
    var Zn = Jn, Qn = Xn;
    ln.Fragment = r, ln.jsx = Zn, ln.jsxs = Qn;
  }()), ln;
}
process.env.NODE_ENV === "production" ? br.exports = mi() : br.exports = hi();
var Ne = br.exports;
const qo = ({
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
qo.displayName = "ChevronLeftSmall";
const Ar = ({
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
Ar.displayName = "RightNext";
const Dr = ({
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
Dr.displayName = "SelectOpenDown";
const Go = ({ width: e = "25", height: t = "25", color: n = "currentColor" }) => /* @__PURE__ */ Ne.jsx(
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
Go.displayName = "EyeOff";
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
        d: "M2.82433 12.1233C4.36074 10.1376 7.56441 6.91943 12.0615 6.91943C16.5585 6.91943 19.7622 10.1376 21.2986 12.1233C21.6698 12.6031 21.6698 13.2358 21.2986 13.7156C19.7622 15.7012 16.5585 18.9194 12.0615 18.9194C7.56441 18.9194 4.36074 15.7012 2.82433 13.7156C2.45309 13.2358 2.45309 12.6031 2.82433 12.1233ZM12.0615 4.91943C6.59165 4.91943 2.86942 8.79681 1.24255 10.8994C0.313681 12.0998 0.313681 13.739 1.24255 14.9395C2.86942 17.0421 6.59165 20.9194 12.0615 20.9194C17.5313 20.9194 21.2535 17.0421 22.8804 14.9395C23.8092 13.739 23.8092 12.0998 22.8804 10.8994C21.2535 8.79681 17.5313 4.91943 12.0615 4.91943ZM10.0615 12.9194C10.0615 11.8149 10.9569 10.9194 12.0615 10.9194C13.166 10.9194 14.0615 11.8149 14.0615 12.9194C14.0615 14.024 13.166 14.9194 12.0615 14.9194C10.9569 14.9194 10.0615 14.024 10.0615 12.9194ZM12.0615 8.91943C9.85232 8.91943 8.06146 10.7103 8.06146 12.9194C8.06146 15.1286 9.85232 16.9194 12.0615 16.9194C14.2706 16.9194 16.0615 15.1286 16.0615 12.9194C16.0615 10.7103 14.2706 8.91943 12.0615 8.91943Z",
        fill: n
      }
    )
  }
);
Ho.displayName = "EyeOn";
const Nr = ({ width: e = "25", height: t = "25", color: n = "currentColor" }) => /* @__PURE__ */ Ne.jsx(
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
Nr.displayName = "Check";
var ft = /* @__PURE__ */ ((e) => (e.Text = "text", e.Number = "number", e.Password = "password", e.Telephone = "tel", e.Email = "email", e))(ft || {}), wt = /* @__PURE__ */ ((e) => (e.Small = "small", e.Medium = "medium", e))(wt || {}), Xt = /* @__PURE__ */ ((e) => (e.Light = "light", e.Dark = "dark", e))(Xt || {});
const gi = Pe.forwardRef((e, t) => {
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
    size: w = wt.Medium,
    theme: S = Xt.Light,
    onBlur: C,
    onChange: h,
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
  ]), [ie, oe] = te(""), [Z, B] = te(!1), [ne, Y] = te(g), [re, ce] = Pe.useState(!1), ge = (I) => {
    oe(I.target.value), h && h(I);
  }, O = (I) => {
    C && C(I);
  }, k = (I) => {
    T && T(I);
  }, K = (I) => {
    $ && $(I);
  }, z = (I) => {
    L && L(I);
  }, V = () => {
    ce((I) => !I);
  }, X = (I) => {
    I.animationName === "onAutoFillStart" && B(!0);
  };
  return He(() => {
    (a || r) && oe(" ");
  }, [a, r]), ue(() => {
    g === ft.Password && Y(re ? ft.Text : ft.Password);
  }, [re, g]), ue(() => {
    ie.length === 0 && B(!1);
  }, [ie]), /* @__PURE__ */ P.jsxs(
    "div",
    {
      className: Q({
        Input: !0,
        "Input-without-heading ": !!p,
        [i || ""]: !!i
      }),
      children: [
        p && /* @__PURE__ */ P.jsxs(
          "label",
          {
            className: Q({
              InputLabel: !0,
              "InputLabel-small": w === wt.Small
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
            className: Q({
              "InputBase-root": !0,
              "Input-disabled": c,
              "InputBase-error": !!l,
              "InputBase-root-dark": S === Xt.Dark
            }),
            children: [
              g !== ft.Password && u && /* @__PURE__ */ P.jsx("div", { className: "InputBase-icon-start", children: u }),
              /* @__PURE__ */ P.jsxs(
                "div",
                {
                  className: Q({
                    InputBaseInner: !0
                  }),
                  children: [
                    !p && /* @__PURE__ */ P.jsx(
                      "label",
                      {
                        style: {
                          zIndex: Z ? 1 : 0
                        },
                        className: Q({
                          InputLabel: !0,
                          "InputLabel-medium-align-center": w === wt.Medium,
                          "InputLabel-small-align-center": w === wt.Small,
                          "InputLabel-position-fixed": ie.length > 0 || Z
                        }),
                        htmlFor: n,
                        children: v
                      }
                    ),
                    /* @__PURE__ */ P.jsx(
                      "input",
                      H({
                        defaultValue: !r && a ? a : void 0,
                        "aria-label": b,
                        autoComplete: E,
                        className: Q({
                          "InputBase-input": !0,
                          "InputBase-input-dark": S === Xt.Dark,
                          "InputBase-input-small": w === wt.Small,
                          "InputBase-autofill-font": Z
                        }),
                        disabled: c,
                        name: y,
                        type: ne,
                        id: n,
                        value: r,
                        onAnimationStart: X,
                        onChange: ge,
                        onBlur: O,
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
              g !== ft.Password && s && /* @__PURE__ */ P.jsx("div", { className: "InputBase-icon-end", children: s }),
              g === ft.Password && /* @__PURE__ */ P.jsx(
                "button",
                {
                  type: "button",
                  "aria-label": "toggle password visibility",
                  className: "InputBase-icon-end",
                  onClick: V,
                  children: re ? /* @__PURE__ */ P.jsx(Ho, {}) : /* @__PURE__ */ P.jsx(Go, {})
                }
              )
            ]
          }
        ),
        f && /* @__PURE__ */ P.jsx(
          "p",
          {
            className: Q({
              "Input-helper-text": !0,
              "Input-hint-text": !!d,
              "Input-error-text": !!l,
              "Input-helper-text-dark": !l && S === Xt.Dark
            }),
            children: f
          }
        )
      ]
    }
  );
});
gi.displayName = "Input";
var Ae = /* @__PURE__ */ ((e) => (e.Light = "light", e.Dark = "dark", e.Green = "green", e))(Ae || {}), xt = /* @__PURE__ */ ((e) => (e.Small = "small", e.Medium = "medium", e.Large = "large", e))(xt || {});
const yi = Pe.forwardRef((e, t) => {
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
    size: p = xt.Medium
  } = e, [g, y] = te(!1), [b, E] = te(!1), [w, S] = te(a), C = (T) => {
    w || (y(!g), l && l(!g, T));
  }, h = (T) => {
    if ((T.key === "Enter" || T.key === " ") && !w) {
      const $ = {
        target: {
          ariaLabel: d,
          name: r
        }
      };
      y(!g), l && l(!g, $);
    }
  };
  return ue(() => {
    S(a);
  }, [a]), ue(() => {
    y(typeof c == "boolean" ? c : !1);
  }, [c]), ue(() => {
    E(!!f);
  }, [f]), /* @__PURE__ */ P.jsx("div", { className: "Checkbox", children: /* @__PURE__ */ P.jsxs("label", { children: [
    /* @__PURE__ */ P.jsx(
      "div",
      {
        className: Q({
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
        children: /* @__PURE__ */ P.jsxs(
          "div",
          {
            className: Q({
              "Checkbox-container": !0,
              "Checkbox-large": p === xt.Large,
              "Checkbox-medium": p === xt.Medium,
              "Checkbox-small": p === xt.Small
            }),
            role: "input",
            tabIndex: 0,
            onKeyDown: h,
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
              g && !w && /* @__PURE__ */ P.jsx(Nr, {})
            ]
          }
        )
      }
    ),
    (s || i) && /* @__PURE__ */ P.jsx(
      "div",
      {
        className: Q({
          "Checkbox-label": !0,
          "Checkbox-label-small": p === xt.Small,
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
yi.displayName = "Checkbox";
var We = /* @__PURE__ */ ((e) => (e.Light = "light", e.Dark = "dark", e.Green = "green", e))(We || {}), Ge = /* @__PURE__ */ ((e) => (e.Small = "small", e.Medium = "medium", e.Large = "large", e))(Ge || {});
const bi = Pe.forwardRef((e, t) => {
  const {
    id: n,
    name: r,
    className: a,
    checked: i,
    disabled: c,
    ariaLabel: s,
    label: u,
    theme: l = We.Light,
    size: d = Ge.Medium,
    onChange: f
  } = e, [v, p] = te(!1), [g, y] = te(c), b = (w) => {
    g || (p(!v), f && f(!v, w));
  }, E = (w) => {
    if ((w.key === "Enter" || w.key === " ") && !g) {
      const S = {
        target: {
          ariaLabel: s,
          name: r
        }
      };
      p(!v), f && f(!v, S);
    }
  };
  return ue(() => {
    y(c);
  }, [c]), ue(() => {
    p(typeof i == "boolean" ? i : !1);
  }, [i]), /* @__PURE__ */ P.jsx("div", { className: "Switch", children: /* @__PURE__ */ P.jsxs("label", { children: [
    /* @__PURE__ */ P.jsxs(
      "div",
      {
        className: Q({
          "Switch-light": l === We.Light,
          "Switch-dark": l === We.Dark,
          "Switch-green": l === We.Green,
          "Switch-large": d === Ge.Large,
          "Switch-medium": d === Ge.Medium,
          "Switch-small": d === Ge.Small,
          "Switch-light-active": v && l === We.Light,
          "Switch-dark-active": v && l === We.Dark,
          "Switch-green-active": v && l === We.Green,
          "Switch-large-active": v && d === Ge.Large,
          "Switch-medium-active": v && d === Ge.Medium,
          "Switch-small-active": v && d === Ge.Small,
          "Switch-disabled": g,
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
              className: Q({
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
        className: Q({
          "Switch-label": !0,
          "Switch-label-small": d === Ge.Small,
          "Switch-label-dark": l === We.Dark,
          "Switch-label-green": l === We.Green
        }),
        children: u
      }
    )
  ] }) });
});
bi.displayName = "Switch";
var wr = /* @__PURE__ */ ((e) => (e.Large = "large", e.Small = "small", e))(wr || {});
const rl = (e) => {
  var h;
  const {
    className: t,
    size: n = wr.Large,
    tabs: r,
    gap: a,
    activeTab: i,
    activeColor: c,
    tabMarginBottom: s = 16
  } = e, [u, l] = te((h = r[0]) == null ? void 0 : h.id), [d, f] = te(6), [v, p] = te(0), [g, y] = te("none"), [b, E] = te(0), w = pt(() => r.find((T) => T.id === u), [u, r]), S = ye(new Array(r.length)), C = (T, $, L) => {
    $ !== u && (y("left 200ms linear, width 200ms linear"), f(T.currentTarget.offsetLeft), p(T.currentTarget.offsetWidth), l($), L && L($));
  };
  return He(() => {
    if (i) {
      const T = r.findIndex(($) => $.id === i);
      E(T), l(i);
    }
  }, [i, r]), He(() => {
    var L, N;
    const T = (L = S.current[b]) == null ? void 0 : L.offsetWidth, $ = (N = S.current[b]) == null ? void 0 : N.offsetLeft;
    p(T), f($);
  }, [b]), /* @__PURE__ */ P.jsxs("div", { className: "Tabs", children: [
    /* @__PURE__ */ P.jsxs(
      "div",
      {
        style: { gap: a },
        className: Q({
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
              className: Q({
                "Tab-root": !0,
                "Tab-root-active": u === T.id,
                "Tab-root-small": n === wr.Small
              }),
              onClick: (L) => C(L, T.id, T.onClick),
              children: /* @__PURE__ */ P.jsx(
                "div",
                {
                  style: { marginBottom: s },
                  className: Q({
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
                transition: g,
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
const wi = Pe.forwardRef((e, t) => {
  const {
    className: n,
    color: r,
    ariaLabel: a,
    content: i,
    header: c,
    contentMarginTop: s = 0,
    isOpen: u,
    onChange: l
  } = e, [d, f] = te(u), v = ye(null), p = (b, E) => {
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
  }, [u]), /* @__PURE__ */ P.jsxs(
    "div",
    {
      className: Q({
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
            onClick: g,
            onKeyDown: y,
            children: [
              /* @__PURE__ */ P.jsx("div", { style: { color: r }, className: "Accordion-heading-label", children: c }),
              /* @__PURE__ */ P.jsx(
                "div",
                {
                  className: Q({
                    "Accordion-heading-arrow": !0,
                    "Accordion-heading-arrow-up": d
                  }),
                  children: /* @__PURE__ */ P.jsx(Dr, { width: "24", height: "24", color: r })
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
            className: Q({
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
wi.displayName = "Accordion";
var yn = /* @__PURE__ */ ((e) => (e.Large = "large", e.Medium = "medium", e))(yn || {});
const ol = (e) => {
  var f;
  const { className: t, size: n = yn.Medium, tags: r, gap: a, activeTag: i, activeColor: c } = e, [s, u] = te((f = r[0]) == null ? void 0 : f.id), l = pt(() => r.find((v) => v.id === s), [s, r]), d = (v, p) => {
    u(v), p && p(v);
  };
  return He(() => {
    i && u(i);
  }, [i]), /* @__PURE__ */ P.jsxs("div", { className: "Tags", children: [
    /* @__PURE__ */ P.jsx(
      "div",
      {
        style: { gap: a },
        className: Q({
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
            className: Q({
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
var Jt = /* @__PURE__ */ ((e) => (e.Large = "large", e.Medium = "medium", e))(Jt || {}), bn = /* @__PURE__ */ ((e) => (e.Round = "round", e.Square = "square", e))(bn || {});
const al = (e) => {
  var T;
  const {
    className: t,
    size: n = Jt.Medium,
    variant: r = bn.Round,
    tags: a,
    gap: i,
    activeTag: c,
    activeColor: s,
    backgroundColor: u
  } = e, [l, d] = te((T = a[0]) == null ? void 0 : T.id), [f, v] = te(6), [p, g] = te(0), [y, b] = te("none"), [E, w] = te(0), S = pt(() => a.find(($) => $.id === l), [l, a]), C = ye(new Array(a.length)), h = ($, L, N) => {
    L !== l && (b("left 200ms linear, width 200ms linear"), v($.currentTarget.offsetLeft), g($.currentTarget.offsetWidth), d(L), N && N(L));
  };
  return He(() => {
    if (c) {
      const $ = a.findIndex((L) => L.id === c);
      w($), d(c);
    }
  }, [c, a]), He(() => {
    var N, ae;
    const $ = (N = C.current[E]) == null ? void 0 : N.offsetWidth, L = (ae = C.current[E]) == null ? void 0 : ae.offsetLeft;
    g($), v(L);
  }, [E]), /* @__PURE__ */ P.jsxs("div", { className: "SwitchTags", children: [
    /* @__PURE__ */ P.jsxs(
      "div",
      {
        style: { gap: i, backgroundColor: u },
        className: Q({
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
              className: Q({
                SwitchTag: !0,
                "SwitchTag-medium": n === Jt.Medium,
                "SwitchTag-large": n === Jt.Large,
                "SwitchTag-active": l === $.id,
                [t || ""]: !!t
              }),
              onClick: (N) => h(N, $.id, $.onClick),
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
                transition: y,
                backgroundColor: s
              },
              className: Q({
                ActiveTab: !0,
                "ActiveTab-small": n === Jt.Medium
              })
            }
          )
        ]
      }
    ),
    S && S.content && /* @__PURE__ */ P.jsx("div", { className: "Tag-content", children: S.content })
  ] });
};
const xi = Pe.forwardRef((e, t) => {
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
xi.displayName = "IconButton";
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
function vt(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(a) {
    if (e == null || e(a), n === !1 || !a.defaultPrevented)
      return t == null ? void 0 : t(a);
  };
}
function Ei(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function Ko(...e) {
  return (t) => e.forEach(
    (n) => Ei(n, t)
  );
}
function ht(...e) {
  return dt(Ko(...e), e);
}
function Xo(e, t = []) {
  let n = [];
  function r(i, c) {
    const s = /* @__PURE__ */ gr(c), u = n.length;
    n = [
      ...n,
      c
    ];
    function l(f) {
      const E = f, { scope: v, children: p } = E, g = xe(E, ["scope", "children"]), y = (v == null ? void 0 : v[e][u]) || s, b = pt(
        () => g,
        Object.values(g)
      );
      return /* @__PURE__ */ me(y.Provider, {
        value: b
      }, p);
    }
    function d(f, v) {
      const p = (v == null ? void 0 : v[e][u]) || s, g = Uo(p);
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
    const i = n.map((c) => /* @__PURE__ */ gr(c));
    return function(s) {
      const u = (s == null ? void 0 : s[e]) || i;
      return pt(
        () => ({
          [`__scope${e}`]: ve(H({}, s), {
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
    Ci(a, ...t)
  ];
}
function Ci(...e) {
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
        return H(H({}, s), f);
      }, {});
      return pt(
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
const jr = /* @__PURE__ */ Le((e, t) => {
  const c = e, { children: n } = c, r = xe(c, ["children"]), a = Ot.toArray(n), i = a.find(Oi);
  if (i) {
    const s = i.props.children, u = a.map((l) => l === i ? Ot.count(s) > 1 ? Ot.only(null) : /* @__PURE__ */ Zt(s) ? s.props.children : null : l);
    return /* @__PURE__ */ me(xr, we({}, r, {
      ref: t
    }), /* @__PURE__ */ Zt(s) ? /* @__PURE__ */ _r(s, void 0, u) : null);
  }
  return /* @__PURE__ */ me(xr, we({}, r, {
    ref: t
  }), n);
});
jr.displayName = "Slot";
const xr = /* @__PURE__ */ Le((e, t) => {
  const a = e, { children: n } = a, r = xe(a, ["children"]);
  return /* @__PURE__ */ Zt(n) ? /* @__PURE__ */ _r(n, ve(H({}, Pi(r, n.props)), {
    ref: t ? Ko(t, n.ref) : n.ref
  })) : Ot.count(n) > 1 ? Ot.only(null) : null;
});
xr.displayName = "SlotClone";
const Si = ({ children: e }) => /* @__PURE__ */ me(Vo, null, e);
function Oi(e) {
  return /* @__PURE__ */ Zt(e) && e.type === Si;
}
function Pi(e, t) {
  const n = H({}, t);
  for (const r in t) {
    const a = e[r], i = t[r];
    /^on[A-Z]/.test(r) ? a && i ? n[r] = (...s) => {
      i(...s), a(...s);
    } : a && (n[r] = a) : r === "style" ? n[r] = H(H({}, a), i) : r === "className" && (n[r] = [
      a,
      i
    ].filter(Boolean).join(" "));
  }
  return H(H({}, e), n);
}
const Ri = [
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
], an = Ri.reduce((e, t) => {
  const n = /* @__PURE__ */ Le((r, a) => {
    const u = r, { asChild: i } = u, c = xe(u, ["asChild"]), s = i ? jr : t;
    return ue(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ me(s, we({}, c, {
      ref: a
    }));
  });
  return n.displayName = `Primitive.${t}`, ve(H({}, e), {
    [t]: n
  });
}, {});
function Ti(e, t) {
  e && Yo(
    () => e.dispatchEvent(t)
  );
}
function tt(e) {
  const t = ye(e);
  return ue(() => {
    t.current = e;
  }), pt(
    () => (...n) => {
      var r;
      return (r = t.current) === null || r === void 0 ? void 0 : r.call(t, ...n);
    },
    []
  );
}
function $i(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = tt(e);
  ue(() => {
    const r = (a) => {
      a.key === "Escape" && n(a);
    };
    return t.addEventListener("keydown", r), () => t.removeEventListener("keydown", r);
  }, [
    n,
    t
  ]);
}
const Er = "dismissableLayer.update", ki = "dismissableLayer.pointerDownOutside", _i = "dismissableLayer.focusOutside";
let io;
const Ai = /* @__PURE__ */ gr({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Di = /* @__PURE__ */ Le((e, t) => {
  var n;
  const L = e, { disableOutsidePointerEvents: r = !1, onEscapeKeyDown: a, onPointerDownOutside: i, onFocusOutside: c, onInteractOutside: s, onDismiss: u } = L, l = xe(L, ["disableOutsidePointerEvents", "onEscapeKeyDown", "onPointerDownOutside", "onFocusOutside", "onInteractOutside", "onDismiss"]), d = Uo(Ai), [f, v] = te(null), p = (n = f == null ? void 0 : f.ownerDocument) !== null && n !== void 0 ? n : globalThis == null ? void 0 : globalThis.document, [, g] = te({}), y = ht(
    t,
    (N) => v(N)
  ), b = Array.from(d.layers), [E] = [
    ...d.layersWithOutsidePointerEventsDisabled
  ].slice(-1), w = b.indexOf(E), S = f ? b.indexOf(f) : -1, C = d.layersWithOutsidePointerEventsDisabled.size > 0, h = S >= w, T = Ni((N) => {
    const ae = N.target, ie = [
      ...d.branches
    ].some(
      (oe) => oe.contains(ae)
    );
    !h || ie || (i == null || i(N), s == null || s(N), N.defaultPrevented || u == null || u());
  }, p), $ = ji((N) => {
    const ae = N.target;
    [
      ...d.branches
    ].some(
      (oe) => oe.contains(ae)
    ) || (c == null || c(N), s == null || s(N), N.defaultPrevented || u == null || u());
  }, p);
  return $i((N) => {
    S === d.layers.size - 1 && (a == null || a(N), !N.defaultPrevented && u && (N.preventDefault(), u()));
  }, p), ue(() => {
    if (f)
      return r && (d.layersWithOutsidePointerEventsDisabled.size === 0 && (io = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), d.layersWithOutsidePointerEventsDisabled.add(f)), d.layers.add(f), co(), () => {
        r && d.layersWithOutsidePointerEventsDisabled.size === 1 && (p.body.style.pointerEvents = io);
      };
  }, [
    f,
    p,
    r,
    d
  ]), ue(() => () => {
    f && (d.layers.delete(f), d.layersWithOutsidePointerEventsDisabled.delete(f), co());
  }, [
    f,
    d
  ]), ue(() => {
    const N = () => g({});
    return document.addEventListener(Er, N), () => document.removeEventListener(Er, N);
  }, []), /* @__PURE__ */ me(an.div, we({}, l, {
    ref: y,
    style: H({
      pointerEvents: C ? h ? "auto" : "none" : void 0
    }, e.style),
    onFocusCapture: vt(e.onFocusCapture, $.onFocusCapture),
    onBlurCapture: vt(e.onBlurCapture, $.onBlurCapture),
    onPointerDownCapture: vt(e.onPointerDownCapture, T.onPointerDownCapture)
  }));
});
function Ni(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = tt(e), r = ye(!1), a = ye(() => {
  });
  return ue(() => {
    const i = (s) => {
      if (s.target && !r.current) {
        let l = function() {
          Jo(ki, n, u, {
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
function ji(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = tt(e), r = ye(!1);
  return ue(() => {
    const a = (i) => {
      i.target && !r.current && Jo(_i, n, {
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
function co() {
  const e = new CustomEvent(Er);
  document.dispatchEvent(e);
}
function Jo(e, t, n, { discrete: r }) {
  const a = n.originalEvent.target, i = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && a.addEventListener(e, t, {
    once: !0
  }), r ? Ti(a, i) : a.dispatchEvent(i);
}
let er = 0;
function Li() {
  ue(() => {
    var e, t;
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (e = n[0]) !== null && e !== void 0 ? e : so()), document.body.insertAdjacentElement("beforeend", (t = n[1]) !== null && t !== void 0 ? t : so()), er++, () => {
      er === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(
        (r) => r.remove()
      ), er--;
    };
  }, []);
}
function so() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
const tr = "focusScope.autoFocusOnMount", nr = "focusScope.autoFocusOnUnmount", uo = {
  bubbles: !1,
  cancelable: !0
}, Ii = /* @__PURE__ */ Le((e, t) => {
  const y = e, { loop: n = !1, trapped: r = !1, onMountAutoFocus: a, onUnmountAutoFocus: i } = y, c = xe(y, ["loop", "trapped", "onMountAutoFocus", "onUnmountAutoFocus"]), [s, u] = te(null), l = tt(a), d = tt(i), f = ye(null), v = ht(
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
  ue(() => {
    if (r) {
      let b = function(C) {
        if (p.paused || !s)
          return;
        const h = C.target;
        s.contains(h) ? f.current = h : et(f.current, {
          select: !0
        });
      }, E = function(C) {
        if (p.paused || !s)
          return;
        const h = C.relatedTarget;
        h !== null && (s.contains(h) || et(f.current, {
          select: !0
        }));
      }, w = function(C) {
        if (document.activeElement === document.body)
          for (const T of C)
            T.removedNodes.length > 0 && et(s);
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
  ]), ue(() => {
    if (s) {
      fo.add(p);
      const b = document.activeElement;
      if (!s.contains(b)) {
        const w = new CustomEvent(tr, uo);
        s.addEventListener(tr, l), s.dispatchEvent(w), w.defaultPrevented || (Fi(Vi(Zo(s)), {
          select: !0
        }), document.activeElement === b && et(s));
      }
      return () => {
        s.removeEventListener(tr, l), setTimeout(() => {
          const w = new CustomEvent(nr, uo);
          s.addEventListener(nr, d), s.dispatchEvent(w), w.defaultPrevented || et(b != null ? b : document.body, {
            select: !0
          }), s.removeEventListener(nr, d), fo.remove(p);
        }, 0);
      };
    }
  }, [
    s,
    l,
    d,
    p
  ]);
  const g = dt((b) => {
    if (!n && !r || p.paused)
      return;
    const E = b.key === "Tab" && !b.altKey && !b.ctrlKey && !b.metaKey, w = document.activeElement;
    if (E && w) {
      const S = b.currentTarget, [C, h] = Mi(S);
      C && h ? !b.shiftKey && w === h ? (b.preventDefault(), n && et(C, {
        select: !0
      })) : b.shiftKey && w === C && (b.preventDefault(), n && et(h, {
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
    onKeyDown: g
  }));
});
function Fi(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (et(r, {
      select: t
    }), document.activeElement !== n)
      return;
}
function Mi(e) {
  const t = Zo(e), n = lo(t, e), r = lo(t.reverse(), e);
  return [
    n,
    r
  ];
}
function Zo(e) {
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
function lo(e, t) {
  for (const n of e)
    if (!Bi(n, {
      upTo: t
    }))
      return n;
}
function Bi(e, { upTo: t }) {
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
function Wi(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function et(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== n && Wi(e) && t && e.select();
  }
}
const fo = Ui();
function Ui() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = vo(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = vo(e, t), (n = e[0]) === null || n === void 0 || n.resume();
    }
  };
}
function vo(e, t) {
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
const kt = globalThis != null && globalThis.document ? He : () => {
}, Yi = D["useId".toString()] || (() => {
});
let zi = 0;
function qi(e) {
  const [t, n] = D.useState(Yi());
  return kt(() => {
    e || n(
      (r) => r != null ? r : String(zi++)
    );
  }, [
    e
  ]), e || (t ? `radix-${t}` : "");
}
const Gi = ["top", "right", "bottom", "left"], nt = Math.min, $e = Math.max, On = Math.round, fn = Math.floor, rt = (e) => ({
  x: e,
  y: e
}), Hi = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Ki = {
  start: "end",
  end: "start"
};
function Cr(e, t, n) {
  return $e(e, nt(t, n));
}
function Ke(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Xe(e) {
  return e.split("-")[0];
}
function At(e) {
  return e.split("-")[1];
}
function Lr(e) {
  return e === "x" ? "y" : "x";
}
function Ir(e) {
  return e === "y" ? "height" : "width";
}
function Dt(e) {
  return ["top", "bottom"].includes(Xe(e)) ? "y" : "x";
}
function Fr(e) {
  return Lr(Dt(e));
}
function Xi(e, t, n) {
  n === void 0 && (n = !1);
  const r = At(e), a = Fr(e), i = Ir(a);
  let c = a === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (c = Pn(c)), [c, Pn(c)];
}
function Ji(e) {
  const t = Pn(e);
  return [Sr(e), t, Sr(t)];
}
function Sr(e) {
  return e.replace(/start|end/g, (t) => Ki[t]);
}
function Zi(e, t, n) {
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
function Qi(e, t, n, r) {
  const a = At(e);
  let i = Zi(Xe(e), n === "start", r);
  return a && (i = i.map((c) => c + "-" + a), t && (i = i.concat(i.map(Sr)))), i;
}
function Pn(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Hi[t]);
}
function ec(e) {
  return H({
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }, e);
}
function Qo(e) {
  return typeof e != "number" ? ec(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Rn(e) {
  return ve(H({}, e), {
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function po(e, t, n) {
  let {
    reference: r,
    floating: a
  } = e;
  const i = Dt(t), c = Fr(t), s = Ir(c), u = Xe(t), l = i === "y", d = r.x + r.width / 2 - a.width / 2, f = r.y + r.height / 2 - a.height / 2, v = r[s] / 2 - a[s] / 2;
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
  switch (At(t)) {
    case "start":
      p[c] -= v * (n && l ? -1 : 1);
      break;
    case "end":
      p[c] += v * (n && l ? -1 : 1);
      break;
  }
  return p;
}
const tc = (e, t, n) => Me(void 0, null, function* () {
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
  } = po(l, r, u), v = r, p = {}, g = 0;
  for (let y = 0; y < s.length; y++) {
    const {
      name: b,
      fn: E
    } = s[y], {
      x: w,
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
    if (d = w != null ? w : d, f = S != null ? S : f, p = ve(H({}, p), {
      [b]: H(H({}, p[b]), C)
    }), h && g <= 50) {
      g++, typeof h == "object" && (h.placement && (v = h.placement), h.rects && (l = h.rects === !0 ? yield c.getElementRects({
        reference: e,
        floating: t,
        strategy: a
      }) : h.rects), {
        x: d,
        y: f
      } = po(l, v, u)), y = -1;
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
  return Me(this, null, function* () {
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
    } = Ke(t, e), g = Qo(p), b = s[v ? f === "floating" ? "reference" : "floating" : f], E = Rn(yield i.getClippingRect({
      element: (n = yield i.isElement == null ? void 0 : i.isElement(b)) == null || n ? b : b.contextElement || (yield i.getDocumentElement == null ? void 0 : i.getDocumentElement(s.floating)),
      boundary: l,
      rootBoundary: d,
      strategy: u
    })), w = f === "floating" ? ve(H({}, c.floating), {
      x: r,
      y: a
    }) : c.reference, S = yield i.getOffsetParent == null ? void 0 : i.getOffsetParent(s.floating), C = (yield i.isElement == null ? void 0 : i.isElement(S)) ? (yield i.getScale == null ? void 0 : i.getScale(S)) || {
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
      top: (E.top - h.top + g.top) / C.y,
      bottom: (h.bottom - E.bottom + g.bottom) / C.y,
      left: (E.left - h.left + g.left) / C.x,
      right: (h.right - E.right + g.right) / C.x
    };
  });
}
const mo = (e) => ({
  name: "arrow",
  options: e,
  fn(n) {
    return Me(this, null, function* () {
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
      const v = Qo(f), p = {
        x: r,
        y: a
      }, g = Fr(i), y = Ir(g), b = yield s.getDimensions(d), E = g === "y", w = E ? "top" : "left", S = E ? "bottom" : "right", C = E ? "clientHeight" : "clientWidth", h = c.reference[y] + c.reference[g] - p[g] - c.floating[y], T = p[g] - c.reference[g], $ = yield s.getOffsetParent == null ? void 0 : s.getOffsetParent(d);
      let L = $ ? $[C] : 0;
      (!L || !(yield s.isElement == null ? void 0 : s.isElement($))) && (L = u.floating[C] || c.floating[y]);
      const N = h / 2 - T / 2, ae = L / 2 - b[y] / 2 - 1, ie = nt(v[w], ae), oe = nt(v[S], ae), Z = ie, B = L - b[y] - oe, ne = L / 2 - b[y] / 2 + N, Y = Cr(Z, ne, B), re = !l.arrow && At(i) != null && ne != Y && c.reference[y] / 2 - (ne < Z ? ie : oe) - b[y] / 2 < 0, ce = re ? ne < Z ? ne - Z : ne - B : 0;
      return {
        [g]: p[g] + ce,
        data: H({
          [g]: Y,
          centerOffset: ne - Y - ce
        }, re && {
          alignmentOffset: ce
        }),
        reset: re
      };
    });
  }
}), nc = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    fn(n) {
      return Me(this, null, function* () {
        var r, a;
        const {
          placement: i,
          middlewareData: c,
          rects: s,
          initialPlacement: u,
          platform: l,
          elements: d
        } = n, Z = Ke(e, n), {
          mainAxis: f = !0,
          crossAxis: v = !0,
          fallbackPlacements: p,
          fallbackStrategy: g = "bestFit",
          fallbackAxisSideDirection: y = "none",
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
        const w = Xe(i), S = Xe(u) === u, C = yield l.isRTL == null ? void 0 : l.isRTL(d.floating), h = p || (S || !b ? [Pn(u)] : Ji(u));
        !p && y !== "none" && h.push(...Qi(u, b, y, C));
        const T = [u, ...h], $ = yield Qt(n, E), L = [];
        let N = ((a = c.flip) == null ? void 0 : a.overflows) || [];
        if (f && L.push($[w]), v) {
          const B = Xi(i, s, C);
          L.push($[B[0]], $[B[1]]);
        }
        if (N = [...N, {
          placement: i,
          overflows: L
        }], !L.every((B) => B <= 0)) {
          var ae, ie;
          const B = (((ae = c.flip) == null ? void 0 : ae.index) || 0) + 1, ne = T[B];
          if (ne)
            return {
              data: {
                index: B,
                overflows: N
              },
              reset: {
                placement: ne
              }
            };
          let Y = (ie = N.filter((re) => re.overflows[0] <= 0).sort((re, ce) => re.overflows[1] - ce.overflows[1])[0]) == null ? void 0 : ie.placement;
          if (!Y)
            switch (g) {
              case "bestFit": {
                var oe;
                const re = (oe = N.map((ce) => [ce.placement, ce.overflows.filter((ge) => ge > 0).reduce((ge, O) => ge + O, 0)]).sort((ce, ge) => ce[1] - ge[1])[0]) == null ? void 0 : oe[0];
                re && (Y = re);
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
function ho(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function go(e) {
  return Gi.some((t) => e[t] >= 0);
}
const rc = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    fn(n) {
      return Me(this, null, function* () {
        const {
          rects: r
        } = n, c = Ke(e, n), {
          strategy: a = "referenceHidden"
        } = c, i = xe(c, [
          "strategy"
        ]);
        switch (a) {
          case "referenceHidden": {
            const s = yield Qt(n, ve(H({}, i), {
              elementContext: "reference"
            })), u = ho(s, r.reference);
            return {
              data: {
                referenceHiddenOffsets: u,
                referenceHidden: go(u)
              }
            };
          }
          case "escaped": {
            const s = yield Qt(n, ve(H({}, i), {
              altBoundary: !0
            })), u = ho(s, r.floating);
            return {
              data: {
                escapedOffsets: u,
                escaped: go(u)
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
function oc(e, t) {
  return Me(this, null, function* () {
    const {
      placement: n,
      platform: r,
      elements: a
    } = e, i = yield r.isRTL == null ? void 0 : r.isRTL(a.floating), c = Xe(n), s = At(n), u = Dt(n) === "y", l = ["left", "top"].includes(c) ? -1 : 1, d = i && u ? -1 : 1, f = Ke(t, e);
    let {
      mainAxis: v,
      crossAxis: p,
      alignmentAxis: g
    } = typeof f == "number" ? {
      mainAxis: f,
      crossAxis: 0,
      alignmentAxis: null
    } : H({
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
const ac = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    fn(n) {
      return Me(this, null, function* () {
        const {
          x: r,
          y: a
        } = n, i = yield oc(n, e);
        return {
          x: r + i.x,
          y: a + i.y,
          data: i
        };
      });
    }
  };
}, ic = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    fn(n) {
      return Me(this, null, function* () {
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
        }, f = yield Qt(n, l), v = Dt(Xe(i)), p = Lr(v);
        let g = d[p], y = d[v];
        if (c) {
          const w = p === "y" ? "top" : "left", S = p === "y" ? "bottom" : "right", C = g + f[w], h = g - f[S];
          g = Cr(C, g, h);
        }
        if (s) {
          const w = v === "y" ? "top" : "left", S = v === "y" ? "bottom" : "right", C = y + f[w], h = y - f[S];
          y = Cr(C, y, h);
        }
        const b = u.fn(ve(H({}, n), {
          [p]: g,
          [v]: y
        }));
        return ve(H({}, b), {
          data: {
            x: b.x - r,
            y: b.y - a
          }
        });
      });
    }
  };
}, cc = function(e) {
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
      }, f = Dt(a), v = Lr(f);
      let p = d[v], g = d[f];
      const y = Ke(s, t), b = typeof y == "number" ? {
        mainAxis: y,
        crossAxis: 0
      } : H({
        mainAxis: 0,
        crossAxis: 0
      }, y);
      if (u) {
        const S = v === "y" ? "height" : "width", C = i.reference[v] - i.floating[S] + b.mainAxis, h = i.reference[v] + i.reference[S] - b.mainAxis;
        p < C ? p = C : p > h && (p = h);
      }
      if (l) {
        var E, w;
        const S = v === "y" ? "width" : "height", C = ["top", "left"].includes(Xe(a)), h = i.reference[f] - i.floating[S] + (C && ((E = c.offset) == null ? void 0 : E[f]) || 0) + (C ? 0 : b.crossAxis), T = i.reference[f] + i.reference[S] + (C ? 0 : ((w = c.offset) == null ? void 0 : w[f]) || 0) - (C ? b.crossAxis : 0);
        g < h ? g = h : g > T && (g = T);
      }
      return {
        [v]: p,
        [f]: g
      };
    }
  };
}, sc = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    fn(n) {
      return Me(this, null, function* () {
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
        ]), l = yield Qt(n, u), d = Xe(r), f = At(r), v = Dt(r) === "y", {
          width: p,
          height: g
        } = a.floating;
        let y, b;
        d === "top" || d === "bottom" ? (y = d, b = f === ((yield i.isRTL == null ? void 0 : i.isRTL(c.floating)) ? "start" : "end") ? "left" : "right") : (b = d, y = f === "end" ? "top" : "bottom");
        const E = g - l[y], w = p - l[b], S = !n.middlewareData.shift;
        let C = E, h = w;
        if (v) {
          const L = p - l.left - l.right;
          h = f || S ? nt(w, L) : L;
        } else {
          const L = g - l.top - l.bottom;
          C = f || S ? nt(E, L) : L;
        }
        if (S && !f) {
          const L = $e(l.left, 0), N = $e(l.right, 0), ae = $e(l.top, 0), ie = $e(l.bottom, 0);
          v ? h = p - 2 * (L !== 0 || N !== 0 ? L + N : $e(l.left, l.right)) : C = g - 2 * (ae !== 0 || ie !== 0 ? ae + ie : $e(l.top, l.bottom));
        }
        yield s(ve(H({}, n), {
          availableWidth: h,
          availableHeight: C
        }));
        const T = yield i.getDimensions(c.floating);
        return p !== T.width || g !== T.height ? {
          reset: {
            rects: !0
          }
        } : {};
      });
    }
  };
};
function ot(e) {
  return ea(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function ke(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Ze(e) {
  var t;
  return (t = (ea(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function ea(e) {
  return e instanceof Node || e instanceof ke(e).Node;
}
function Je(e) {
  return e instanceof Element || e instanceof ke(e).Element;
}
function Ve(e) {
  return e instanceof HTMLElement || e instanceof ke(e).HTMLElement;
}
function yo(e) {
  return typeof ShadowRoot == "undefined" ? !1 : e instanceof ShadowRoot || e instanceof ke(e).ShadowRoot;
}
function cn(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: a
  } = je(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(a);
}
function uc(e) {
  return ["table", "td", "th"].includes(ot(e));
}
function Mr(e) {
  const t = Br(), n = je(e);
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function lc(e) {
  let t = _t(e);
  for (; Ve(t) && !An(t); ) {
    if (Mr(t))
      return t;
    t = _t(t);
  }
  return null;
}
function Br() {
  return typeof CSS == "undefined" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function An(e) {
  return ["html", "body", "#document"].includes(ot(e));
}
function je(e) {
  return ke(e).getComputedStyle(e);
}
function Dn(e) {
  return Je(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  };
}
function _t(e) {
  if (ot(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    yo(e) && e.host || // Fallback.
    Ze(e)
  );
  return yo(t) ? t.host : t;
}
function ta(e) {
  const t = _t(e);
  return An(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Ve(t) && cn(t) ? t : ta(t);
}
function en(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const a = ta(e), i = a === ((r = e.ownerDocument) == null ? void 0 : r.body), c = ke(a);
  return i ? t.concat(c, c.visualViewport || [], cn(a) ? a : [], c.frameElement && n ? en(c.frameElement) : []) : t.concat(a, en(a, [], n));
}
function na(e) {
  const t = je(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const a = Ve(e), i = a ? e.offsetWidth : n, c = a ? e.offsetHeight : r, s = On(n) !== i || On(r) !== c;
  return s && (n = i, r = c), {
    width: n,
    height: r,
    $: s
  };
}
function Wr(e) {
  return Je(e) ? e : e.contextElement;
}
function Pt(e) {
  const t = Wr(e);
  if (!Ve(t))
    return rt(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: a,
    $: i
  } = na(t);
  let c = (i ? On(n.width) : n.width) / r, s = (i ? On(n.height) : n.height) / a;
  return (!c || !Number.isFinite(c)) && (c = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: c,
    y: s
  };
}
const fc = /* @__PURE__ */ rt(0);
function ra(e) {
  const t = ke(e);
  return !Br() || !t.visualViewport ? fc : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function dc(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== ke(e) ? !1 : t;
}
function mt(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const a = e.getBoundingClientRect(), i = Wr(e);
  let c = rt(1);
  t && (r ? Je(r) && (c = Pt(r)) : c = Pt(e));
  const s = dc(i, n, r) ? ra(i) : rt(0);
  let u = (a.left + s.x) / c.x, l = (a.top + s.y) / c.y, d = a.width / c.x, f = a.height / c.y;
  if (i) {
    const v = ke(i), p = r && Je(r) ? ke(r) : r;
    let g = v.frameElement;
    for (; g && r && p !== v; ) {
      const y = Pt(g), b = g.getBoundingClientRect(), E = je(g), w = b.left + (g.clientLeft + parseFloat(E.paddingLeft)) * y.x, S = b.top + (g.clientTop + parseFloat(E.paddingTop)) * y.y;
      u *= y.x, l *= y.y, d *= y.x, f *= y.y, u += w, l += S, g = ke(g).frameElement;
    }
  }
  return Rn({
    width: d,
    height: f,
    x: u,
    y: l
  });
}
function vc(e) {
  let {
    rect: t,
    offsetParent: n,
    strategy: r
  } = e;
  const a = Ve(n), i = Ze(n);
  if (n === i)
    return t;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = rt(1);
  const u = rt(0);
  if ((a || !a && r !== "fixed") && ((ot(n) !== "body" || cn(i)) && (c = Dn(n)), Ve(n))) {
    const l = mt(n);
    s = Pt(n), u.x = l.x + n.clientLeft, u.y = l.y + n.clientTop;
  }
  return {
    width: t.width * s.x,
    height: t.height * s.y,
    x: t.x * s.x - c.scrollLeft * s.x + u.x,
    y: t.y * s.y - c.scrollTop * s.y + u.y
  };
}
function pc(e) {
  return Array.from(e.getClientRects());
}
function oa(e) {
  return mt(Ze(e)).left + Dn(e).scrollLeft;
}
function mc(e) {
  const t = Ze(e), n = Dn(e), r = e.ownerDocument.body, a = $e(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = $e(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let c = -n.scrollLeft + oa(e);
  const s = -n.scrollTop;
  return je(r).direction === "rtl" && (c += $e(t.clientWidth, r.clientWidth) - a), {
    width: a,
    height: i,
    x: c,
    y: s
  };
}
function hc(e, t) {
  const n = ke(e), r = Ze(e), a = n.visualViewport;
  let i = r.clientWidth, c = r.clientHeight, s = 0, u = 0;
  if (a) {
    i = a.width, c = a.height;
    const l = Br();
    (!l || l && t === "fixed") && (s = a.offsetLeft, u = a.offsetTop);
  }
  return {
    width: i,
    height: c,
    x: s,
    y: u
  };
}
function gc(e, t) {
  const n = mt(e, !0, t === "fixed"), r = n.top + e.clientTop, a = n.left + e.clientLeft, i = Ve(e) ? Pt(e) : rt(1), c = e.clientWidth * i.x, s = e.clientHeight * i.y, u = a * i.x, l = r * i.y;
  return {
    width: c,
    height: s,
    x: u,
    y: l
  };
}
function bo(e, t, n) {
  let r;
  if (t === "viewport")
    r = hc(e, n);
  else if (t === "document")
    r = mc(Ze(e));
  else if (Je(t))
    r = gc(t, n);
  else {
    const a = ra(e);
    r = ve(H({}, t), {
      x: t.x - a.x,
      y: t.y - a.y
    });
  }
  return Rn(r);
}
function aa(e, t) {
  const n = _t(e);
  return n === t || !Je(n) || An(n) ? !1 : je(n).position === "fixed" || aa(n, t);
}
function yc(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = en(e, [], !1).filter((s) => Je(s) && ot(s) !== "body"), a = null;
  const i = je(e).position === "fixed";
  let c = i ? _t(e) : e;
  for (; Je(c) && !An(c); ) {
    const s = je(c), u = Mr(c);
    !u && s.position === "fixed" && (a = null), (i ? !u && !a : !u && s.position === "static" && !!a && ["absolute", "fixed"].includes(a.position) || cn(c) && !u && aa(e, c)) ? r = r.filter((d) => d !== c) : a = s, c = _t(c);
  }
  return t.set(e, r), r;
}
function bc(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: a
  } = e;
  const c = [...n === "clippingAncestors" ? yc(t, this._c) : [].concat(n), r], s = c[0], u = c.reduce((l, d) => {
    const f = bo(t, d, a);
    return l.top = $e(f.top, l.top), l.right = nt(f.right, l.right), l.bottom = nt(f.bottom, l.bottom), l.left = $e(f.left, l.left), l;
  }, bo(t, s, a));
  return {
    width: u.right - u.left,
    height: u.bottom - u.top,
    x: u.left,
    y: u.top
  };
}
function wc(e) {
  return na(e);
}
function xc(e, t, n) {
  const r = Ve(t), a = Ze(t), i = n === "fixed", c = mt(e, !0, i, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const u = rt(0);
  if (r || !r && !i)
    if ((ot(t) !== "body" || cn(a)) && (s = Dn(t)), r) {
      const l = mt(t, !0, i, t);
      u.x = l.x + t.clientLeft, u.y = l.y + t.clientTop;
    } else
      a && (u.x = oa(a));
  return {
    x: c.left + s.scrollLeft - u.x,
    y: c.top + s.scrollTop - u.y,
    width: c.width,
    height: c.height
  };
}
function wo(e, t) {
  return !Ve(e) || je(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function ia(e, t) {
  const n = ke(e);
  if (!Ve(e))
    return n;
  let r = wo(e, t);
  for (; r && uc(r) && je(r).position === "static"; )
    r = wo(r, t);
  return r && (ot(r) === "html" || ot(r) === "body" && je(r).position === "static" && !Mr(r)) ? n : r || lc(e) || n;
}
const Ec = function(e) {
  return Me(this, null, function* () {
    let {
      reference: t,
      floating: n,
      strategy: r
    } = e;
    const a = this.getOffsetParent || ia, i = this.getDimensions;
    return {
      reference: xc(t, yield a(n), r),
      floating: H({
        x: 0,
        y: 0
      }, yield i(n))
    };
  });
};
function Cc(e) {
  return je(e).direction === "rtl";
}
const Sc = {
  convertOffsetParentRelativeRectToViewportRelativeRect: vc,
  getDocumentElement: Ze,
  getClippingRect: bc,
  getOffsetParent: ia,
  getElementRects: Ec,
  getClientRects: pc,
  getDimensions: wc,
  getScale: Pt,
  isElement: Je,
  isRTL: Cc
};
function Oc(e, t) {
  let n = null, r;
  const a = Ze(e);
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
    const p = fn(d), g = fn(a.clientWidth - (l + f)), y = fn(a.clientHeight - (d + v)), b = fn(l), w = {
      rootMargin: -p + "px " + -g + "px " + -y + "px " + -b + "px",
      threshold: $e(0, nt(1, u)) || 1
    };
    let S = !0;
    function C(h) {
      const T = h[0].intersectionRatio;
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
      n = new IntersectionObserver(C, ve(H({}, w), {
        // Handle <iframe>s
        root: a.ownerDocument
      }));
    } catch (h) {
      n = new IntersectionObserver(C, w);
    }
    n.observe(e);
  }
  return c(!0), i;
}
function Pc(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: a = !0,
    ancestorResize: i = !0,
    elementResize: c = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: u = !1
  } = r, l = Wr(e), d = a || i ? [...l ? en(l) : [], ...en(t)] : [];
  d.forEach((E) => {
    a && E.addEventListener("scroll", n, {
      passive: !0
    }), i && E.addEventListener("resize", n);
  });
  const f = l && s ? Oc(l, n) : null;
  let v = -1, p = null;
  c && (p = new ResizeObserver((E) => {
    let [w] = E;
    w && w.target === l && p && (p.unobserve(t), cancelAnimationFrame(v), v = requestAnimationFrame(() => {
      p && p.observe(t);
    })), n();
  }), l && !u && p.observe(l), p.observe(t));
  let g, y = u ? mt(e) : null;
  u && b();
  function b() {
    const E = mt(e);
    y && (E.x !== y.x || E.y !== y.y || E.width !== y.width || E.height !== y.height) && n(), y = E, g = requestAnimationFrame(b);
  }
  return n(), () => {
    d.forEach((E) => {
      a && E.removeEventListener("scroll", n), i && E.removeEventListener("resize", n);
    }), f && f(), p && p.disconnect(), p = null, u && cancelAnimationFrame(g);
  };
}
const Rc = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), a = H({
    platform: Sc
  }, n), i = ve(H({}, a.platform), {
    _c: r
  });
  return tc(e, t, ve(H({}, a), {
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
      return r && t(r) ? r.current != null ? mo({
        element: r.current,
        padding: a
      }).fn(n) : {} : r ? mo({
        element: r,
        padding: a
      }).fn(n) : {};
    }
  };
};
var wn = typeof document != "undefined" ? He : ue;
function Tn(e, t) {
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
        if (!Tn(e[r], t[r]))
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
      if (!(i === "_owner" && e.$$typeof) && !Tn(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function ca(e) {
  return typeof window == "undefined" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function xo(e, t) {
  const n = ca(e);
  return Math.round(t * n) / n;
}
function Eo(e) {
  const t = D.useRef(e);
  return wn(() => {
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
  Tn(v, r) || p(r);
  const [g, y] = D.useState(null), [b, E] = D.useState(null), w = D.useCallback((Y) => {
    Y != T.current && (T.current = Y, y(Y));
  }, [y]), S = D.useCallback((Y) => {
    Y !== $.current && ($.current = Y, E(Y));
  }, [E]), C = i || g, h = c || b, T = D.useRef(null), $ = D.useRef(null), L = D.useRef(d), N = Eo(u), ae = Eo(a), ie = D.useCallback(() => {
    if (!T.current || !$.current)
      return;
    const Y = {
      placement: t,
      strategy: n,
      middleware: v
    };
    ae.current && (Y.platform = ae.current), Rc(T.current, $.current, Y).then((re) => {
      const ce = ve(H({}, re), {
        isPositioned: !0
      });
      oe.current && !Tn(L.current, ce) && (L.current = ce, ui.flushSync(() => {
        f(ce);
      }));
    });
  }, [v, t, n, ae]);
  wn(() => {
    l === !1 && L.current.isPositioned && (L.current.isPositioned = !1, f((Y) => ve(H({}, Y), {
      isPositioned: !1
    })));
  }, [l]);
  const oe = D.useRef(!1);
  wn(() => (oe.current = !0, () => {
    oe.current = !1;
  }), []), wn(() => {
    if (C && (T.current = C), h && ($.current = h), C && h) {
      if (N.current)
        return N.current(C, h, ie);
      ie();
    }
  }, [C, h, ie, N]);
  const Z = D.useMemo(() => ({
    reference: T,
    floating: $,
    setReference: w,
    setFloating: S
  }), [w, S]), B = D.useMemo(() => ({
    reference: C,
    floating: h
  }), [C, h]), ne = D.useMemo(() => {
    const Y = {
      position: n,
      left: 0,
      top: 0
    };
    if (!B.floating)
      return Y;
    const re = xo(B.floating, d.x), ce = xo(B.floating, d.y);
    return s ? H(ve(H({}, Y), {
      transform: "translate(" + re + "px, " + ce + "px)"
    }), ca(B.floating) >= 1.5 && {
      willChange: "transform"
    }) : {
      position: n,
      left: re,
      top: ce
    };
  }, [n, s, B.floating, d.x, d.y]);
  return D.useMemo(() => ve(H({}, d), {
    update: ie,
    refs: Z,
    elements: B,
    floatingStyles: ne
  }), [d, ie, Z, B, ne]);
}
function kc(e) {
  const [t, n] = te(void 0);
  return kt(() => {
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
const sa = "Popper", [ua, la] = Xo(sa), [_c, fa] = ua(sa), Ac = (e) => {
  const { __scopePopper: t, children: n } = e, [r, a] = te(null);
  return /* @__PURE__ */ me(_c, {
    scope: t,
    anchor: r,
    onAnchorChange: a
  }, n);
}, Dc = "PopperAnchor", Nc = /* @__PURE__ */ Le((e, t) => {
  const u = e, { __scopePopper: n, virtualRef: r } = u, a = xe(u, ["__scopePopper", "virtualRef"]), i = fa(Dc, n), c = ye(null), s = ht(t, c);
  return ue(() => {
    i.onAnchorChange((r == null ? void 0 : r.current) || c.current);
  }), r ? null : /* @__PURE__ */ me(an.div, we({}, a, {
    ref: s
  }));
}), da = "PopperContent", [jc, il] = ua(da), Lc = /* @__PURE__ */ Le((e, t) => {
  var n, r, a, i, c, s, u, l;
  const Ce = e, { __scopePopper: d, side: f = "bottom", sideOffset: v = 0, align: p = "center", alignOffset: g = 0, arrowPadding: y = 0, avoidCollisions: b = !0, collisionBoundary: E = [], collisionPadding: w = 0, sticky: S = "partial", hideWhenDetached: C = !1, updatePositionStrategy: h = "optimized", onPlaced: T } = Ce, $ = xe(Ce, ["__scopePopper", "side", "sideOffset", "align", "alignOffset", "arrowPadding", "avoidCollisions", "collisionBoundary", "collisionPadding", "sticky", "hideWhenDetached", "updatePositionStrategy", "onPlaced"]), L = fa(da, d), [N, ae] = te(null), ie = ht(
    t,
    (Se) => ae(Se)
  ), [oe, Z] = te(null), B = kc(oe), ne = (n = B == null ? void 0 : B.width) !== null && n !== void 0 ? n : 0, Y = (r = B == null ? void 0 : B.height) !== null && r !== void 0 ? r : 0, re = f + (p !== "center" ? "-" + p : ""), ce = typeof w == "number" ? w : H({
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }, w), ge = Array.isArray(E) ? E : [
    E
  ], O = ge.length > 0, k = {
    padding: ce,
    boundary: ge.filter(Ic),
    // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
    altBoundary: O
  }, { refs: K, floatingStyles: z, placement: V, isPositioned: X, middlewareData: M } = $c({
    // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
    strategy: "fixed",
    placement: re,
    whileElementsMounted: (...Se) => Pc(...Se, {
      animationFrame: h === "always"
    }),
    elements: {
      reference: L.anchor
    },
    middleware: [
      ac({
        mainAxis: v + Y,
        alignmentAxis: g
      }),
      b && ic(H({
        mainAxis: !0,
        crossAxis: !1,
        limiter: S === "partial" ? cc() : void 0
      }, k)),
      b && nc(H({}, k)),
      sc(ve(H({}, k), {
        apply: ({ elements: Se, rects: Qe, availableWidth: at, availableHeight: Ie }) => {
          const { width: Nt, height: jt } = Qe.reference, _e = Se.floating.style;
          _e.setProperty("--radix-popper-available-width", `${at}px`), _e.setProperty("--radix-popper-available-height", `${Ie}px`), _e.setProperty("--radix-popper-anchor-width", `${Nt}px`), _e.setProperty("--radix-popper-anchor-height", `${jt}px`);
        }
      })),
      oe && Tc({
        element: oe,
        padding: y
      }),
      Fc({
        arrowWidth: ne,
        arrowHeight: Y
      }),
      C && rc(H({
        strategy: "referenceHidden"
      }, k))
    ]
  }), [I, U] = va(V), q = tt(T);
  kt(() => {
    X && (q == null || q());
  }, [
    X,
    q
  ]);
  const G = (a = M.arrow) === null || a === void 0 ? void 0 : a.x, he = (i = M.arrow) === null || i === void 0 ? void 0 : i.y, _ = ((c = M.arrow) === null || c === void 0 ? void 0 : c.centerOffset) !== 0, [Ee, Be] = te();
  return kt(() => {
    N && Be(window.getComputedStyle(N).zIndex);
  }, [
    N
  ]), /* @__PURE__ */ me("div", {
    ref: K.setFloating,
    "data-radix-popper-content-wrapper": "",
    style: ve(H({}, z), {
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
  }, /* @__PURE__ */ me(jc, {
    scope: d,
    placedSide: I,
    onArrowChange: Z,
    arrowX: H,
    arrowY: he,
    shouldHideArrow: _
  }, /* @__PURE__ */ me(an.div, we({
    "data-side": I,
    "data-align": U
  }, $, {
    ref: ie,
    style: ve(H({}, $.style), {
      // if the PopperContent hasn't been placed yet (not all measurements done)
      // we prevent animations so that users's animation don't kick in too early referring wrong sides
      animation: X ? void 0 : "none",
      // hide the content if using the hide middleware and should be hidden
      opacity: (l = M.hide) !== null && l !== void 0 && l.referenceHidden ? 0 : void 0
    })
  }))));
});
function Ic(e) {
  return e !== null;
}
const Fc = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var n, r, a, i, c;
    const { placement: s, rects: u, middlewareData: l } = t, f = ((n = l.arrow) === null || n === void 0 ? void 0 : n.centerOffset) !== 0, v = f ? 0 : e.arrowWidth, p = f ? 0 : e.arrowHeight, [g, y] = va(s), b = {
      start: "0%",
      center: "50%",
      end: "100%"
    }[y], E = ((r = (a = l.arrow) === null || a === void 0 ? void 0 : a.x) !== null && r !== void 0 ? r : 0) + v / 2, w = ((i = (c = l.arrow) === null || c === void 0 ? void 0 : c.y) !== null && i !== void 0 ? i : 0) + p / 2;
    let S = "", C = "";
    return g === "bottom" ? (S = f ? b : `${E}px`, C = `${-p}px`) : g === "top" ? (S = f ? b : `${E}px`, C = `${u.floating.height + p}px`) : g === "right" ? (S = `${-p}px`, C = f ? b : `${w}px`) : g === "left" && (S = `${u.floating.width + p}px`, C = f ? b : `${w}px`), {
      data: {
        x: S,
        y: C
      }
    };
  }
});
function va(e) {
  const [t, n = "center"] = e.split("-");
  return [
    t,
    n
  ];
}
const Mc = Ac, Bc = Nc, Wc = Lc;
function Uc(e, t) {
  return ci((n, r) => {
    const a = t[n][r];
    return a != null ? a : n;
  }, e);
}
const pa = (e) => {
  const { present: t, children: n } = e, r = Vc(t), a = typeof n == "function" ? n({
    present: r.isPresent
  }) : Ot.only(n), i = ht(r.ref, a.ref);
  return typeof n == "function" || r.isPresent ? /* @__PURE__ */ _r(a, {
    ref: i
  }) : null;
};
pa.displayName = "Presence";
function Vc(e) {
  const [t, n] = te(), r = ye({}), a = ye(e), i = ye("none"), c = e ? "mounted" : "unmounted", [s, u] = Uc(c, {
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
  return ue(() => {
    const l = dn(r.current);
    i.current = s === "mounted" ? l : "none";
  }, [
    s
  ]), kt(() => {
    const l = r.current, d = a.current;
    if (d !== e) {
      const v = i.current, p = dn(l);
      e ? u("MOUNT") : p === "none" || (l == null ? void 0 : l.display) === "none" ? u("UNMOUNT") : u(d && v !== p ? "ANIMATION_OUT" : "UNMOUNT"), a.current = e;
    }
  }, [
    e,
    u
  ]), kt(() => {
    if (t) {
      const l = (f) => {
        const p = dn(r.current).includes(f.animationName);
        f.target === t && p && Yo(
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
    ref: dt((l) => {
      l && (r.current = getComputedStyle(l)), n(l);
    }, [])
  };
}
function dn(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function Yc({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [r, a] = zc({
    defaultProp: t,
    onChange: n
  }), i = e !== void 0, c = i ? e : r, s = tt(n), u = dt((l) => {
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
function zc({ defaultProp: e, onChange: t }) {
  const n = te(e), [r] = n, a = ye(r), i = tt(t);
  return ue(() => {
    a.current !== r && (i(r), a.current = r);
  }, [
    r,
    a,
    i
  ]), n;
}
var qc = function(e) {
  if (typeof document == "undefined")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, gt = /* @__PURE__ */ new WeakMap(), vn = /* @__PURE__ */ new WeakMap(), pn = {}, rr = 0, ma = function(e) {
  return e && (e.host || ma(e.parentNode));
}, Gc = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = ma(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, Hc = function(e, t, n, r) {
  var a = Gc(t, Array.isArray(e) ? e : [e]);
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
        var p = v.getAttribute(r), g = p !== null && p !== "false", y = (gt.get(v) || 0) + 1, b = (i.get(v) || 0) + 1;
        gt.set(v, y), i.set(v, b), c.push(v), y === 1 && g && vn.set(v, !0), b === 1 && v.setAttribute(n, "true"), g || v.setAttribute(r, "true");
      }
    });
  };
  return d(t), s.clear(), rr++, function() {
    c.forEach(function(f) {
      var v = gt.get(f) - 1, p = i.get(f) - 1;
      gt.set(f, v), i.set(f, p), v || (vn.has(f) || f.removeAttribute(r), vn.delete(f)), p || f.removeAttribute(n);
    }), rr--, rr || (gt = /* @__PURE__ */ new WeakMap(), gt = /* @__PURE__ */ new WeakMap(), vn = /* @__PURE__ */ new WeakMap(), pn = {});
  };
}, Kc = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), a = t || qc(e);
  return a ? (r.push.apply(r, Array.from(a.querySelectorAll("[aria-live]"))), Hc(r, a, n, "aria-hidden")) : function() {
    return null;
  };
}, Ue = function() {
  return Ue = Object.assign || function(t) {
    for (var n, r = 1, a = arguments.length; r < a; r++) {
      n = arguments[r];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, Ue.apply(this, arguments);
};
function ha(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
}
function Xc(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, a = t.length, i; r < a; r++)
      (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
var xn = "right-scroll-bar-position", En = "width-before-scroll-bar", Jc = "with-scroll-bars-hidden", Zc = "--removed-body-scroll-bar-size";
function Qc(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function es(e, t) {
  var n = te(function() {
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
function ga(e, t) {
  return es(t || null, function(n) {
    return e.forEach(function(r) {
      return Qc(r, n);
    });
  });
}
function ya(e) {
  return e;
}
function ba(e, t) {
  t === void 0 && (t = ya);
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
function Ur(e, t) {
  return t === void 0 && (t = ya), ba(e, t);
}
function wa(e) {
  e === void 0 && (e = {});
  var t = ba(null);
  return t.options = Ue({ async: !0, ssr: !1 }, e), t;
}
var xa = function(e) {
  var t = e.sideCar, n = ha(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return D.createElement(r, Ue({}, n));
};
xa.isSideCarExport = !0;
function ts(e, t) {
  return e.useMedium(t), xa;
}
var Ea = wa(), or = function() {
}, Nn = D.forwardRef(function(e, t) {
  var n = D.useRef(null), r = D.useState({
    onScrollCapture: or,
    onWheelCapture: or,
    onTouchMoveCapture: or
  }), a = r[0], i = r[1], c = e.forwardProps, s = e.children, u = e.className, l = e.removeScrollBar, d = e.enabled, f = e.shards, v = e.sideCar, p = e.noIsolation, g = e.inert, y = e.allowPinchZoom, b = e.as, E = b === void 0 ? "div" : b, w = ha(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]), S = v, C = ga([n, t]), h = Ue(Ue({}, w), a);
  return D.createElement(
    D.Fragment,
    null,
    d && D.createElement(S, { sideCar: Ea, removeScrollBar: l, shards: f, noIsolation: p, inert: g, setCallbacks: i, allowPinchZoom: !!y, lockRef: n }),
    c ? D.cloneElement(D.Children.only(s), Ue(Ue({}, h), { ref: C })) : D.createElement(E, Ue({}, h, { className: u, ref: C }), s)
  );
});
Nn.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Nn.classNames = {
  fullWidth: En,
  zeroRight: xn
};
var Co, ns = function() {
  if (Co)
    return Co;
  if (typeof __webpack_nonce__ != "undefined")
    return __webpack_nonce__;
};
function rs() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = ns();
  return t && e.setAttribute("nonce", t), e;
}
function os(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function as(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var is = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = rs()) && (os(t, n), as(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, cs = function() {
  var e = is();
  return function(t, n) {
    D.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, Ca = function() {
  var e = cs(), t = function(n) {
    var r = n.styles, a = n.dynamic;
    return e(r, a), null;
  };
  return t;
}, ss = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, ar = function(e) {
  return parseInt(e || "", 10) || 0;
}, us = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], a = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [ar(n), ar(r), ar(a)];
}, ls = function(e) {
  if (e === void 0 && (e = "margin"), typeof window == "undefined")
    return ss;
  var t = us(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, fs = Ca(), ds = function(e, t, n, r) {
  var a = e.left, i = e.top, c = e.right, s = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(Jc, ` {
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
    `).concat(Zc, ": ").concat(s, `px;
  }
`);
}, vs = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, a = r === void 0 ? "margin" : r, i = D.useMemo(function() {
    return ls(a);
  }, [a]);
  return D.createElement(fs, { styles: ds(i, !t, a, n ? "" : "!important") });
}, Or = !1;
if (typeof window != "undefined")
  try {
    var mn = Object.defineProperty({}, "passive", {
      get: function() {
        return Or = !0, !0;
      }
    });
    window.addEventListener("test", mn, mn), window.removeEventListener("test", mn, mn);
  } catch (e) {
    Or = !1;
  }
var yt = Or ? { passive: !1 } : !1, ps = function(e) {
  return e.tagName === "TEXTAREA";
}, Sa = function(e, t) {
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !ps(e) && n[t] === "visible")
  );
}, ms = function(e) {
  return Sa(e, "overflowY");
}, hs = function(e) {
  return Sa(e, "overflowX");
}, So = function(e, t) {
  var n = t;
  do {
    typeof ShadowRoot != "undefined" && n instanceof ShadowRoot && (n = n.host);
    var r = Oa(e, n);
    if (r) {
      var a = Pa(e, n), i = a[1], c = a[2];
      if (i > c)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== document.body);
  return !1;
}, gs = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, ys = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Oa = function(e, t) {
  return e === "v" ? ms(t) : hs(t);
}, Pa = function(e, t) {
  return e === "v" ? gs(t) : ys(t);
}, bs = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, ws = function(e, t, n, r, a) {
  var i = bs(e, window.getComputedStyle(t).direction), c = i * r, s = n.target, u = t.contains(s), l = !1, d = c > 0, f = 0, v = 0;
  do {
    var p = Pa(e, s), g = p[0], y = p[1], b = p[2], E = y - b - i * g;
    (g || E) && Oa(e, s) && (f += E, v += g), s = s.parentNode;
  } while (
    // portaled content
    !u && s !== document.body || // self content
    u && (t.contains(s) || t === s)
  );
  return (d && (a && f === 0 || !a && c > f) || !d && (a && v === 0 || !a && -c > v)) && (l = !0), l;
}, hn = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Oo = function(e) {
  return [e.deltaX, e.deltaY];
}, Po = function(e) {
  return e && "current" in e ? e.current : e;
}, xs = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, Es = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, Cs = 0, bt = [];
function Ss(e) {
  var t = D.useRef([]), n = D.useRef([0, 0]), r = D.useRef(), a = D.useState(Cs++)[0], i = D.useState(function() {
    return Ca();
  })[0], c = D.useRef(e);
  D.useEffect(function() {
    c.current = e;
  }, [e]), D.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(a));
      var y = Xc([e.lockRef.current], (e.shards || []).map(Po), !0).filter(Boolean);
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
    var E = hn(y), w = n.current, S = "deltaX" in y ? y.deltaX : w[0] - E[0], C = "deltaY" in y ? y.deltaY : w[1] - E[1], h, T = y.target, $ = Math.abs(S) > Math.abs(C) ? "h" : "v";
    if ("touches" in y && $ === "h" && T.type === "range")
      return !1;
    var L = So($, T);
    if (!L)
      return !0;
    if (L ? h = $ : (h = $ === "v" ? "h" : "v", L = So($, T)), !L)
      return !1;
    if (!r.current && "changedTouches" in y && (S || C) && (r.current = h), !h)
      return !0;
    var N = r.current || h;
    return ws(N, b, y, N === "h" ? S : C, !0);
  }, []), u = D.useCallback(function(y) {
    var b = y;
    if (!(!bt.length || bt[bt.length - 1] !== i)) {
      var E = "deltaY" in b ? Oo(b) : hn(b), w = t.current.filter(function(h) {
        return h.name === b.type && h.target === b.target && xs(h.delta, E);
      })[0];
      if (w && w.should) {
        b.cancelable && b.preventDefault();
        return;
      }
      if (!w) {
        var S = (c.current.shards || []).map(Po).filter(Boolean).filter(function(h) {
          return h.contains(b.target);
        }), C = S.length > 0 ? s(b, S[0]) : !c.current.noIsolation;
        C && b.cancelable && b.preventDefault();
      }
    }
  }, []), l = D.useCallback(function(y, b, E, w) {
    var S = { name: y, delta: b, target: E, should: w };
    t.current.push(S), setTimeout(function() {
      t.current = t.current.filter(function(C) {
        return C !== S;
      });
    }, 1);
  }, []), d = D.useCallback(function(y) {
    n.current = hn(y), r.current = void 0;
  }, []), f = D.useCallback(function(y) {
    l(y.type, Oo(y), y.target, s(y, e.lockRef.current));
  }, []), v = D.useCallback(function(y) {
    l(y.type, hn(y), y.target, s(y, e.lockRef.current));
  }, []);
  D.useEffect(function() {
    return bt.push(i), e.setCallbacks({
      onScrollCapture: f,
      onWheelCapture: f,
      onTouchMoveCapture: v
    }), document.addEventListener("wheel", u, yt), document.addEventListener("touchmove", u, yt), document.addEventListener("touchstart", d, yt), function() {
      bt = bt.filter(function(y) {
        return y !== i;
      }), document.removeEventListener("wheel", u, yt), document.removeEventListener("touchmove", u, yt), document.removeEventListener("touchstart", d, yt);
    };
  }, []);
  var p = e.removeScrollBar, g = e.inert;
  return D.createElement(
    D.Fragment,
    null,
    g ? D.createElement(i, { styles: Es(a) }) : null,
    p ? D.createElement(vs, { gapMode: "margin" }) : null
  );
}
const Os = ts(Ea, Ss);
var Ra = D.forwardRef(function(e, t) {
  return D.createElement(Nn, Ue({}, e, { ref: t, sideCar: Os }));
});
Ra.classNames = Nn.classNames;
const Ps = Ra, Ta = "Popover", [$a, cl] = Xo(Ta, [
  la
]), Vr = la(), [Rs, sn] = $a(Ta), Ts = (e) => {
  const { __scopePopover: t, children: n, open: r, defaultOpen: a, onOpenChange: i, modal: c = !1 } = e, s = Vr(t), u = ye(null), [l, d] = te(!1), [f = !1, v] = Yc({
    prop: r,
    defaultProp: a,
    onChange: i
  });
  return /* @__PURE__ */ me(Mc, s, /* @__PURE__ */ me(Rs, {
    scope: t,
    contentId: qi(),
    triggerRef: u,
    open: f,
    onOpenChange: v,
    onOpenToggle: dt(
      () => v(
        (p) => !p
      ),
      [
        v
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
    modal: c
  }, n));
}, $s = "PopoverTrigger", ks = /* @__PURE__ */ Le((e, t) => {
  const u = e, { __scopePopover: n } = u, r = xe(u, ["__scopePopover"]), a = sn($s, n), i = Vr(n), c = ht(t, a.triggerRef), s = /* @__PURE__ */ me(an.button, we({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": a.open,
    "aria-controls": a.contentId,
    "data-state": _a(a.open)
  }, r, {
    ref: c,
    onClick: vt(e.onClick, a.onOpenToggle)
  }));
  return a.hasCustomAnchor ? s : /* @__PURE__ */ me(Bc, we({
    asChild: !0
  }, i), s);
}), _s = "PopoverPortal", [sl, As] = $a(_s, {
  forceMount: void 0
}), tn = "PopoverContent", Ds = /* @__PURE__ */ Le((e, t) => {
  const n = As(tn, e.__scopePopover), c = e, { forceMount: r = n.forceMount } = c, a = xe(c, ["forceMount"]), i = sn(tn, e.__scopePopover);
  return /* @__PURE__ */ me(pa, {
    present: r || i.open
  }, i.modal ? /* @__PURE__ */ me(Ns, we({}, a, {
    ref: t
  })) : /* @__PURE__ */ me(js, we({}, a, {
    ref: t
  })));
}), Ns = /* @__PURE__ */ Le((e, t) => {
  const n = sn(tn, e.__scopePopover), r = ye(null), a = ht(t, r), i = ye(!1);
  return ue(() => {
    const c = r.current;
    if (c)
      return Kc(c);
  }, []), /* @__PURE__ */ me(Ps, {
    as: jr,
    allowPinchZoom: !0
  }, /* @__PURE__ */ me(ka, we({}, e, {
    ref: a,
    trapFocus: n.open,
    disableOutsidePointerEvents: !0,
    onCloseAutoFocus: vt(e.onCloseAutoFocus, (c) => {
      var s;
      c.preventDefault(), i.current || (s = n.triggerRef.current) === null || s === void 0 || s.focus();
    }),
    onPointerDownOutside: vt(e.onPointerDownOutside, (c) => {
      const s = c.detail.originalEvent, u = s.button === 0 && s.ctrlKey === !0, l = s.button === 2 || u;
      i.current = l;
    }, {
      checkForDefaultPrevented: !1
    }),
    onFocusOutside: vt(
      e.onFocusOutside,
      (c) => c.preventDefault(),
      {
        checkForDefaultPrevented: !1
      }
    )
  })));
}), js = /* @__PURE__ */ Le((e, t) => {
  const n = sn(tn, e.__scopePopover), r = ye(!1), a = ye(!1);
  return /* @__PURE__ */ me(ka, we({}, e, {
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
}), ka = /* @__PURE__ */ Le((e, t) => {
  const g = e, { __scopePopover: n, trapFocus: r, onOpenAutoFocus: a, onCloseAutoFocus: i, disableOutsidePointerEvents: c, onEscapeKeyDown: s, onPointerDownOutside: u, onFocusOutside: l, onInteractOutside: d } = g, f = xe(g, ["__scopePopover", "trapFocus", "onOpenAutoFocus", "onCloseAutoFocus", "disableOutsidePointerEvents", "onEscapeKeyDown", "onPointerDownOutside", "onFocusOutside", "onInteractOutside"]), v = sn(tn, n), p = Vr(n);
  return Li(), /* @__PURE__ */ me(Ii, {
    asChild: !0,
    loop: !0,
    trapped: r,
    onMountAutoFocus: a,
    onUnmountAutoFocus: i
  }, /* @__PURE__ */ me(Di, {
    asChild: !0,
    disableOutsidePointerEvents: c,
    onInteractOutside: d,
    onEscapeKeyDown: s,
    onPointerDownOutside: u,
    onFocusOutside: l,
    onDismiss: () => v.onOpenChange(!1)
  }, /* @__PURE__ */ me(Wc, we({
    "data-state": _a(v.open),
    role: "dialog",
    id: v.contentId
  }, p, f, {
    ref: t,
    style: ve(H({}, f.style), {
      "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
      "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
      "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
    })
  }))));
});
function _a(e) {
  return e ? "open" : "closed";
}
const Ls = Ts;
const Is = (e) => {
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
  } = g, p = xe(g, [
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
      className: Q({
        [s || ""]: !!s,
        Popover: !l
      }),
      children: /* @__PURE__ */ P.jsxs(Ls, { open: t, onOpenChange: n, children: [
        i && /* @__PURE__ */ P.jsx(
          ks,
          {
            "aria-label": a,
            tabIndex: v,
            className: "Popover-trigger",
            onClick: r,
            children: i
          }
        ),
        t && c && /* @__PURE__ */ P.jsx(
          Ds,
          ve(H({
            align: f,
            sideOffset: d,
            className: Q({
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
var Oe = /* @__PURE__ */ ((e) => (e.Small = "small", e.Medium = "medium", e))(Oe || {}), Et = /* @__PURE__ */ ((e) => (e.Default = "default", e.Custom = "custom", e))(Et || {});
const Fs = Pe.forwardRef(
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
    } = e, [v, p] = te(!1), [g, y] = te(), b = () => p(!v), E = (h) => {
      y(h), l && l(h), p(!1);
    }, w = (h) => {
      h.target === h.currentTarget && h.preventDefault();
    }, S = (h) => {
      (h.key === "Enter" || h.key === " ") && p(!v);
    }, C = (h, T) => {
      (h.key === "Enter" || h.key === " ") && (y(T), l && l(T), p(!1));
    };
    return ue(() => {
      y(r);
    }, [r]), /* @__PURE__ */ P.jsxs(
      "div",
      {
        className: Q({
          Dropdown: !0,
          "Dropdown-disabled": u,
          [f || ""]: !!f
        }),
        children: [
          a && /* @__PURE__ */ P.jsx(
            "div",
            {
              className: Q({
                "Dropdown-label": !0,
                "Dropdown-label-medium": c === Oe.Medium,
                "Dropdown-label-small": c === Oe.Small
              }),
              children: a
            }
          ),
          /* @__PURE__ */ P.jsx(
            Is,
            {
              open: v,
              ariaLabel: i,
              contentClassName: Q({
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
                  className: Q({
                    "Dropdown-root": !0,
                    "Dropdown-root-small": d === Et.Default && c === Oe.Small,
                    "Dropdown-root-medium": d === Et.Default && c === Oe.Medium,
                    "Dropdown-root-error": !!s,
                    "Dropdown-root-active": v
                  }),
                  tabIndex: 0,
                  "aria-label": i,
                  role: "trigger",
                  onKeyDown: S,
                  children: /* @__PURE__ */ P.jsxs("div", { className: "Dropdown-base", children: [
                    d === Et.Custom ? e.renderSelectedValue(g) : g == null ? void 0 : g.label,
                    /* @__PURE__ */ P.jsx(
                      "div",
                      {
                        className: Q({
                          "Dropdown-input-icon": !0,
                          "Dropdown-input-icon-up": v
                        }),
                        children: /* @__PURE__ */ P.jsx(Dr, {})
                      }
                    )
                  ] })
                }
              ),
              children: /* @__PURE__ */ P.jsx(
                "div",
                {
                  className: Q({
                    "Dropdown-list": !0,
                    "Dropdown-list-medium": c === Oe.Medium,
                    "Dropdown-list-small": c === Oe.Small
                  }),
                  onClick: (h) => h.nativeEvent.stopImmediatePropagation(),
                  children: n.map((h) => /* @__PURE__ */ P.jsxs(
                    "div",
                    {
                      className: Q({
                        "Dropdown-list-item": !0,
                        "Dropdown-list-item-small": c === Oe.Small,
                        "Dropdown-list-item-medium": c === Oe.Medium
                      }),
                      tabIndex: 0,
                      role: "button",
                      onClick: () => E(h),
                      onKeyDown: (T) => C(T, h),
                      children: [
                        d === Et.Custom ? e.renderItem(h) : h.label,
                        (g == null ? void 0 : g.value) === h.value && /* @__PURE__ */ P.jsx("div", { className: "Dropdown-list-active-item", children: d === Et.Custom ? e.customActiveIcon : /* @__PURE__ */ P.jsx(Nr, { color: "", width: "24", height: "24" }) })
                      ]
                    },
                    h.id
                  ))
                }
              )
            }
          ),
          s && /* @__PURE__ */ P.jsx(
            "div",
            {
              className: Q({
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
Fs.displayName = "Dropdown";
const ul = (e) => {
  const { items: t, onLabelClick: n } = e, r = (a, i) => {
    i || n && n(a);
  };
  return /* @__PURE__ */ P.jsx("nav", { "aria-label": "Breadcrumb", className: "Breadcrumbs", children: /* @__PURE__ */ P.jsx("ol", { className: "Breadcrumbs-list", children: t.map((a, i) => {
    const c = t.length - 1 === i;
    return /* @__PURE__ */ P.jsxs(Vo, { children: [
      /* @__PURE__ */ P.jsx(
        "li",
        {
          "aria-current": c ? "page" : void 0,
          className: Q({
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
      !c && /* @__PURE__ */ P.jsx("div", { "aria-hidden": "true", className: "Breadcrumbs-separator", children: /* @__PURE__ */ P.jsx(Ar, { height: "16", width: "16" }) })
    ] }, a.key);
  }) }) });
};
var Cn = /* @__PURE__ */ ((e) => (e.Medium = "medium", e.Small = "small", e))(Cn || {});
const ir = 100, ll = ({
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
    "aria-valuenow": Math.min(e, ir),
    "aria-valuemax": ir,
    id: r,
    className: Q({
      ProgressBar: !0,
      "ProgressBar-medium": t === Cn.Medium,
      "ProgressBar-small": t === Cn.Small,
      [n || ""]: !!n
    }),
    children: /* @__PURE__ */ P.jsx(
      "div",
      {
        className: "ProgressBar-indicator",
        style: { width: `${Math.min(e, ir)}%`, backgroundColor: a }
      }
    )
  }
);
function Ms(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), a, i;
  for (i = 0; i < r.length; i++)
    a = r[i], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
var Pr = { exports: {} }, gn = { exports: {} }, le = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ro;
function Bs() {
  if (Ro)
    return le;
  Ro = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, c = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, b = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
  function S(h) {
    if (typeof h == "object" && h !== null) {
      var T = h.$$typeof;
      switch (T) {
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
                  return T;
              }
          }
        case n:
          return T;
      }
    }
  }
  function C(h) {
    return S(h) === l;
  }
  return le.AsyncMode = u, le.ConcurrentMode = l, le.ContextConsumer = s, le.ContextProvider = c, le.Element = t, le.ForwardRef = d, le.Fragment = r, le.Lazy = g, le.Memo = p, le.Portal = n, le.Profiler = i, le.StrictMode = a, le.Suspense = f, le.isAsyncMode = function(h) {
    return C(h) || S(h) === u;
  }, le.isConcurrentMode = C, le.isContextConsumer = function(h) {
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
    return S(h) === p;
  }, le.isPortal = function(h) {
    return S(h) === n;
  }, le.isProfiler = function(h) {
    return S(h) === i;
  }, le.isStrictMode = function(h) {
    return S(h) === a;
  }, le.isSuspense = function(h) {
    return S(h) === f;
  }, le.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === r || h === l || h === i || h === a || h === f || h === v || typeof h == "object" && h !== null && (h.$$typeof === g || h.$$typeof === p || h.$$typeof === c || h.$$typeof === s || h.$$typeof === d || h.$$typeof === b || h.$$typeof === E || h.$$typeof === w || h.$$typeof === y);
  }, le.typeOf = S, le;
}
var fe = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var To;
function Ws() {
  return To || (To = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, c = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, b = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
    function S(_) {
      return typeof _ == "string" || typeof _ == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      _ === r || _ === l || _ === i || _ === a || _ === f || _ === v || typeof _ == "object" && _ !== null && (_.$$typeof === g || _.$$typeof === p || _.$$typeof === c || _.$$typeof === s || _.$$typeof === d || _.$$typeof === b || _.$$typeof === E || _.$$typeof === w || _.$$typeof === y);
    }
    function C(_) {
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
              case a:
              case f:
                return Be;
              default:
                var Ce = Be && Be.$$typeof;
                switch (Ce) {
                  case s:
                  case d:
                  case g:
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
    var h = u, T = l, $ = s, L = c, N = t, ae = d, ie = r, oe = g, Z = p, B = n, ne = i, Y = a, re = f, ce = !1;
    function ge(_) {
      return ce || (ce = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), O(_) || C(_) === u;
    }
    function O(_) {
      return C(_) === l;
    }
    function k(_) {
      return C(_) === s;
    }
    function K(_) {
      return C(_) === c;
    }
    function z(_) {
      return typeof _ == "object" && _ !== null && _.$$typeof === t;
    }
    function V(_) {
      return C(_) === d;
    }
    function X(_) {
      return C(_) === r;
    }
    function M(_) {
      return C(_) === g;
    }
    function I(_) {
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
    fe.AsyncMode = h, fe.ConcurrentMode = T, fe.ContextConsumer = $, fe.ContextProvider = L, fe.Element = N, fe.ForwardRef = ae, fe.Fragment = ie, fe.Lazy = oe, fe.Memo = Z, fe.Portal = B, fe.Profiler = ne, fe.StrictMode = Y, fe.Suspense = re, fe.isAsyncMode = ge, fe.isConcurrentMode = O, fe.isContextConsumer = k, fe.isContextProvider = K, fe.isElement = z, fe.isForwardRef = V, fe.isFragment = X, fe.isLazy = M, fe.isMemo = I, fe.isPortal = U, fe.isProfiler = q, fe.isStrictMode = G, fe.isSuspense = he, fe.isValidElementType = S, fe.typeOf = C;
  }()), fe;
}
var $o;
function Aa() {
  return $o || ($o = 1, process.env.NODE_ENV === "production" ? gn.exports = Bs() : gn.exports = Ws()), gn.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var cr, ko;
function Us() {
  if (ko)
    return cr;
  ko = 1;
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
  return cr = a() ? Object.assign : function(i, c) {
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
  }, cr;
}
var sr, _o;
function Yr() {
  if (_o)
    return sr;
  _o = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return sr = e, sr;
}
var ur, Ao;
function Da() {
  return Ao || (Ao = 1, ur = Function.call.bind(Object.prototype.hasOwnProperty)), ur;
}
var lr, Do;
function Vs() {
  if (Do)
    return lr;
  Do = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = Yr(), n = {}, r = Da();
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
  }, lr = a, lr;
}
var fr, No;
function Ys() {
  if (No)
    return fr;
  No = 1;
  var e = Aa(), t = Us(), n = Yr(), r = Da(), a = Vs(), i = function() {
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
  return fr = function(s, u) {
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
      elementType: h(),
      instanceOf: T,
      node: ae(),
      objectOf: L,
      oneOf: $,
      oneOfType: N,
      shape: oe,
      exact: Z
    };
    function g(O, k) {
      return O === k ? O !== 0 || 1 / O === 1 / k : O !== O && k !== k;
    }
    function y(O, k) {
      this.message = O, this.data = k && typeof k == "object" ? k : {}, this.stack = "";
    }
    y.prototype = Error.prototype;
    function b(O) {
      if (process.env.NODE_ENV !== "production")
        var k = {}, K = 0;
      function z(X, M, I, U, q, G, he) {
        if (U = U || v, G = G || I, he !== n) {
          if (u) {
            var _ = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw _.name = "Invariant Violation", _;
          } else if (process.env.NODE_ENV !== "production" && typeof console != "undefined") {
            var Ee = U + ":" + I;
            !k[Ee] && // Avoid spamming the console because they are often not actionable except for lib authors
            K < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + G + "` prop on `" + U + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), k[Ee] = !0, K++);
          }
        }
        return M[I] == null ? X ? M[I] === null ? new y("The " + q + " `" + G + "` is marked as required " + ("in `" + U + "`, but its value is `null`.")) : new y("The " + q + " `" + G + "` is marked as required in " + ("`" + U + "`, but its value is `undefined`.")) : null : O(M, I, U, q, G);
      }
      var V = z.bind(null, !1);
      return V.isRequired = z.bind(null, !0), V;
    }
    function E(O) {
      function k(K, z, V, X, M, I) {
        var U = K[z], q = Y(U);
        if (q !== O) {
          var G = re(U);
          return new y(
            "Invalid " + X + " `" + M + "` of type " + ("`" + G + "` supplied to `" + V + "`, expected ") + ("`" + O + "`."),
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
      function k(K, z, V, X, M) {
        if (typeof O != "function")
          return new y("Property `" + M + "` of component `" + V + "` has invalid PropType notation inside arrayOf.");
        var I = K[z];
        if (!Array.isArray(I)) {
          var U = Y(I);
          return new y("Invalid " + X + " `" + M + "` of type " + ("`" + U + "` supplied to `" + V + "`, expected an array."));
        }
        for (var q = 0; q < I.length; q++) {
          var G = O(I, q, V, X, M + "[" + q + "]", n);
          if (G instanceof Error)
            return G;
        }
        return null;
      }
      return b(k);
    }
    function C() {
      function O(k, K, z, V, X) {
        var M = k[K];
        if (!s(M)) {
          var I = Y(M);
          return new y("Invalid " + V + " `" + X + "` of type " + ("`" + I + "` supplied to `" + z + "`, expected a single ReactElement."));
        }
        return null;
      }
      return b(O);
    }
    function h() {
      function O(k, K, z, V, X) {
        var M = k[K];
        if (!e.isValidElementType(M)) {
          var I = Y(M);
          return new y("Invalid " + V + " `" + X + "` of type " + ("`" + I + "` supplied to `" + z + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return b(O);
    }
    function T(O) {
      function k(K, z, V, X, M) {
        if (!(K[z] instanceof O)) {
          var I = O.name || v, U = ge(K[z]);
          return new y("Invalid " + X + " `" + M + "` of type " + ("`" + U + "` supplied to `" + V + "`, expected ") + ("instance of `" + I + "`."));
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
      function k(K, z, V, X, M) {
        for (var I = K[z], U = 0; U < O.length; U++)
          if (g(I, O[U]))
            return null;
        var q = JSON.stringify(O, function(he, _) {
          var Ee = re(_);
          return Ee === "symbol" ? String(_) : _;
        });
        return new y("Invalid " + X + " `" + M + "` of value `" + String(I) + "` " + ("supplied to `" + V + "`, expected one of " + q + "."));
      }
      return b(k);
    }
    function L(O) {
      function k(K, z, V, X, M) {
        if (typeof O != "function")
          return new y("Property `" + M + "` of component `" + V + "` has invalid PropType notation inside objectOf.");
        var I = K[z], U = Y(I);
        if (U !== "object")
          return new y("Invalid " + X + " `" + M + "` of type " + ("`" + U + "` supplied to `" + V + "`, expected an object."));
        for (var q in I)
          if (r(I, q)) {
            var G = O(I, q, V, X, M + "." + q, n);
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
        var K = O[k];
        if (typeof K != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ce(K) + " at index " + k + "."
          ), c;
      }
      function z(V, X, M, I, U) {
        for (var q = [], G = 0; G < O.length; G++) {
          var he = O[G], _ = he(V, X, M, I, U, n);
          if (_ == null)
            return null;
          _.data && r(_.data, "expectedType") && q.push(_.data.expectedType);
        }
        var Ee = q.length > 0 ? ", expected one of type [" + q.join(", ") + "]" : "";
        return new y("Invalid " + I + " `" + U + "` supplied to " + ("`" + M + "`" + Ee + "."));
      }
      return b(z);
    }
    function ae() {
      function O(k, K, z, V, X) {
        return B(k[K]) ? null : new y("Invalid " + V + " `" + X + "` supplied to " + ("`" + z + "`, expected a ReactNode."));
      }
      return b(O);
    }
    function ie(O, k, K, z, V) {
      return new y(
        (O || "React class") + ": " + k + " type `" + K + "." + z + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + V + "`."
      );
    }
    function oe(O) {
      function k(K, z, V, X, M) {
        var I = K[z], U = Y(I);
        if (U !== "object")
          return new y("Invalid " + X + " `" + M + "` of type `" + U + "` " + ("supplied to `" + V + "`, expected `object`."));
        for (var q in O) {
          var G = O[q];
          if (typeof G != "function")
            return ie(V, X, M, q, re(G));
          var he = G(I, q, V, X, M + "." + q, n);
          if (he)
            return he;
        }
        return null;
      }
      return b(k);
    }
    function Z(O) {
      function k(K, z, V, X, M) {
        var I = K[z], U = Y(I);
        if (U !== "object")
          return new y("Invalid " + X + " `" + M + "` of type `" + U + "` " + ("supplied to `" + V + "`, expected `object`."));
        var q = t({}, K[z], O);
        for (var G in q) {
          var he = O[G];
          if (r(O, G) && typeof he != "function")
            return ie(V, X, M, G, re(he));
          if (!he)
            return new y(
              "Invalid " + X + " `" + M + "` key `" + G + "` supplied to `" + V + "`.\nBad object: " + JSON.stringify(K[z], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(O), null, "  ")
            );
          var _ = he(I, G, V, X, M + "." + G, n);
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
            var K = k.call(O), z;
            if (k !== O.entries) {
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
    function ne(O, k) {
      return O === "symbol" ? !0 : k ? k["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && k instanceof Symbol : !1;
    }
    function Y(O) {
      var k = typeof O;
      return Array.isArray(O) ? "array" : O instanceof RegExp ? "object" : ne(k, O) ? "symbol" : k;
    }
    function re(O) {
      if (typeof O == "undefined" || O === null)
        return "" + O;
      var k = Y(O);
      if (k === "object") {
        if (O instanceof Date)
          return "date";
        if (O instanceof RegExp)
          return "regexp";
      }
      return k;
    }
    function ce(O) {
      var k = re(O);
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
  }, fr;
}
var dr, jo;
function zs() {
  if (jo)
    return dr;
  jo = 1;
  var e = Yr();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, dr = function() {
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
  }, dr;
}
if (process.env.NODE_ENV !== "production") {
  var qs = Aa(), Gs = !0;
  Pr.exports = Ys()(qs.isElement, Gs);
} else
  Pr.exports = zs()();
var de = Pr.exports;
const Na = /* @__PURE__ */ li(de);
var Rr = "data-focus-lock", ja = "data-focus-lock-disabled", Hs = "data-no-focus-lock", Ks = "data-autofocus-inside", Xs = "data-no-autofocus", vr = {
  width: "1px",
  height: "0px",
  padding: 0,
  overflow: "hidden",
  position: "fixed",
  top: "1px",
  left: "1px"
};
process.env.NODE_ENV !== "production" && Na.node;
var La = Ur({}, function(e) {
  var t = e.target, n = e.currentTarget;
  return {
    target: t,
    currentTarget: n
  };
}), Ia = Ur(), Js = Ur(), Zs = wa({
  async: !0
  // focus-lock sidecar is not required on the server
  // however, it might be required for JSDOM tests
  // ssr: true,
}), Qs = [], zr = /* @__PURE__ */ D.forwardRef(function(t, n) {
  var r, a = D.useState(), i = a[0], c = a[1], s = D.useRef(), u = D.useRef(!1), l = D.useRef(null), d = t.children, f = t.disabled, v = t.noFocusGuards, p = t.persistentFocus, g = t.crossFrame, y = t.autoFocus, b = t.allowTextSelection, E = t.group, w = t.className, S = t.whiteList, C = t.hasPositiveIndices, h = t.shards, T = h === void 0 ? Qs : h, $ = t.as, L = $ === void 0 ? "div" : $, N = t.lockProps, ae = N === void 0 ? {} : N, ie = t.sideCar, oe = t.returnFocus, Z = t.focusOptions, B = t.onActivation, ne = t.onDeactivation, Y = D.useState({}), re = Y[0], ce = D.useCallback(function() {
    l.current = l.current || document && document.activeElement, s.current && B && B(s.current), u.current = !0;
  }, [B]), ge = D.useCallback(function() {
    u.current = !1, ne && ne(s.current);
  }, [ne]);
  ue(function() {
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
    u.current && La.useMedium(U);
  }, []), K = Ia.useMedium, z = D.useCallback(function(U) {
    s.current !== U && (s.current = U, c(U));
  }, []);
  process.env.NODE_ENV !== "production" && (typeof b != "undefined" && console.warn("React-Focus-Lock: allowTextSelection is deprecated and enabled by default"), D.useEffect(function() {
    !s.current && typeof L != "string" && console.error("FocusLock: could not obtain ref to internal node");
  }, []));
  var V = we((r = {}, r[ja] = f && "disabled", r[Rr] = E, r), ae), X = v !== !0, M = X && v !== "tail", I = ga([n, z]);
  return /* @__PURE__ */ D.createElement(D.Fragment, null, X && [
    // nearest focus guard
    /* @__PURE__ */ D.createElement("div", {
      key: "guard-first",
      "data-focus-guard": !0,
      tabIndex: f ? -1 : 0,
      style: vr
    }),
    // first tabbed element guard
    C ? /* @__PURE__ */ D.createElement("div", {
      key: "guard-nearest",
      "data-focus-guard": !0,
      tabIndex: f ? -1 : 1,
      style: vr
    }) : null
  ], !f && /* @__PURE__ */ D.createElement(ie, {
    id: re,
    sideCar: Zs,
    observed: i,
    disabled: f,
    persistentFocus: p,
    crossFrame: g,
    autoFocus: y,
    whiteList: S,
    shards: T,
    onActivation: ce,
    onDeactivation: ge,
    returnFocus: O,
    focusOptions: Z
  }), /* @__PURE__ */ D.createElement(L, we({
    ref: I
  }, V, {
    className: w,
    onBlur: K,
    onFocus: k
  }), d), M && /* @__PURE__ */ D.createElement("div", {
    "data-focus-guard": !0,
    tabIndex: f ? -1 : 0,
    style: vr
  }));
});
zr.propTypes = process.env.NODE_ENV !== "production" ? {
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
zr.defaultProps = {
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
const Fa = zr;
function Tr(e, t) {
  return Tr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, a) {
    return r.__proto__ = a, r;
  }, Tr(e, t);
}
function eu(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Tr(e, t);
}
function nn(e) {
  "@babel/helpers - typeof";
  return nn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, nn(e);
}
function tu(e, t) {
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
function nu(e) {
  var t = tu(e, "string");
  return nn(t) === "symbol" ? t : String(t);
}
function ru(e, t, n) {
  return t = nu(t), t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function ou(e, t) {
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
      eu(d, l);
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
        return /* @__PURE__ */ Pe.createElement(a, this.props);
      }, d;
    }(si);
    return ru(u, "displayName", "SideEffect(" + n(a) + ")"), u;
  };
}
var Ve = function(e) {
  for (var t = Array(e.length), n = 0; n < e.length; ++n)
    t[n] = e[n];
  return t;
}, $n = function(e) {
  return Array.isArray(e) ? e : [e];
}, Ma = function(e) {
  return Array.isArray(e) ? e[0] : e;
}, au = function(e) {
  if (e.nodeType !== Node.ELEMENT_NODE)
    return !1;
  var t = window.getComputedStyle(e, null);
  return !t || !t.getPropertyValue ? !1 : t.getPropertyValue("display") === "none" || t.getPropertyValue("visibility") === "hidden";
}, Ba = function(e) {
  return e.parentNode && e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    e.parentNode.host
  ) : e.parentNode;
}, Wa = function(e) {
  return e === document || e && e.nodeType === Node.DOCUMENT_NODE;
}, iu = function(e, t) {
  return !e || Wa(e) || !au(e) && t(Ba(e));
}, Ua = function(e, t) {
  var n = e.get(t);
  if (n !== void 0)
    return n;
  var r = iu(t, Ua.bind(void 0, e));
  return e.set(t, r), r;
}, cu = function(e, t) {
  return e && !Wa(e) ? lu(e) ? t(Ba(e)) : !1 : !0;
}, Va = function(e, t) {
  var n = e.get(t);
  if (n !== void 0)
    return n;
  var r = cu(t, Va.bind(void 0, e));
  return e.set(t, r), r;
}, Ya = function(e) {
  return e.dataset;
}, su = function(e) {
  return e.tagName === "BUTTON";
}, za = function(e) {
  return e.tagName === "INPUT";
}, qa = function(e) {
  return za(e) && e.type === "radio";
}, uu = function(e) {
  return !((za(e) || su(e)) && (e.type === "hidden" || e.disabled));
}, lu = function(e) {
  var t = e.getAttribute(Xs);
  return ![!0, "true", ""].includes(t);
}, qr = function(e) {
  var t;
  return !!(e && (!((t = Ya(e)) === null || t === void 0) && t.focusGuard));
}, kn = function(e) {
  return !qr(e);
}, fu = function(e) {
  return !!e;
}, du = function(e, t) {
  var n = e.tabIndex - t.tabIndex, r = e.index - t.index;
  if (n) {
    if (!e.tabIndex)
      return 1;
    if (!t.tabIndex)
      return -1;
  }
  return n || r;
}, Ga = function(e, t, n) {
  return Ye(e).map(function(r, a) {
    return {
      node: r,
      index: a,
      tabIndex: n && r.tabIndex === -1 ? (r.dataset || {}).focusGuard ? 0 : -1 : r.tabIndex
    };
  }).filter(function(r) {
    return !t || r.tabIndex >= 0;
  }).sort(du);
}, vu = [
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
], Gr = vu.join(","), pu = "".concat(Gr, ", [data-focus-guard]"), Ha = function(e, t) {
  return Ye((e.shadowRoot || e).children).reduce(function(n, r) {
    return n.concat(r.matches(t ? pu : Gr) ? [r] : [], Ha(r));
  }, []);
}, mu = function(e, t) {
  var n;
  return e instanceof HTMLIFrameElement && (!((n = e.contentDocument) === null || n === void 0) && n.body) ? jn([e.contentDocument.body], t) : [e];
}, jn = function(e, t) {
  return e.reduce(function(n, r) {
    var a, i = Ha(r, t), c = (a = []).concat.apply(a, i.map(function(s) {
      return mu(s, t);
    }));
    return n.concat(
      // add all tabbables inside and within shadow DOMs in DOM order
      c,
      // add if node is tabbable itself
      r.parentNode ? Ye(r.parentNode.querySelectorAll(Gr)).filter(function(s) {
        return s === r;
      }) : []
    );
  }, []);
}, hu = function(e) {
  var t = e.querySelectorAll("[".concat(Ks, "]"));
  return Ye(t).map(function(n) {
    return jn([n]);
  }).reduce(function(n, r) {
    return n.concat(r);
  }, []);
}, Hr = function(e, t) {
  return Ye(e).filter(function(n) {
    return Ua(t, n);
  }).filter(function(n) {
    return uu(n);
  });
}, Lo = function(e, t) {
  return t === void 0 && (t = /* @__PURE__ */ new Map()), Ye(e).filter(function(n) {
    return Va(t, n);
  });
}, $r = function(e, t, n) {
  return Ga(Hr(jn(e, n), t), !0, n);
}, Io = function(e, t) {
  return Ga(Hr(jn(e), t), !1);
}, gu = function(e, t) {
  return Hr(hu(e), t);
}, Rt = function(e, t) {
  return e.shadowRoot ? Rt(e.shadowRoot, t) : Object.getPrototypeOf(e).contains !== void 0 && Object.getPrototypeOf(e).contains.call(e, t) ? !0 : Ye(e.children).some(function(n) {
    var r;
    if (n instanceof HTMLIFrameElement) {
      var a = (r = n.contentDocument) === null || r === void 0 ? void 0 : r.body;
      return a ? Rt(a, t) : !1;
    }
    return Rt(n, t);
  });
}, yu = function(e) {
  for (var t = /* @__PURE__ */ new Set(), n = e.length, r = 0; r < n; r += 1)
    for (var a = r + 1; a < n; a += 1) {
      var i = e[r].compareDocumentPosition(e[a]);
      (i & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0 && t.add(a), (i & Node.DOCUMENT_POSITION_CONTAINS) > 0 && t.add(r);
    }
  return e.filter(function(c, s) {
    return !t.has(s);
  });
}, Ka = function(e) {
  return e.parentNode ? Ka(e.parentNode) : e;
}, Kr = function(e) {
  var t = $n(e);
  return t.filter(Boolean).reduce(function(n, r) {
    var a = r.getAttribute(Rr);
    return n.push.apply(n, a ? yu(Ye(Ka(r).querySelectorAll("[".concat(Rr, '="').concat(a, '"]:not([').concat(ja, '="disabled"])')))) : [r]), n;
  }, []);
}, bu = function(e) {
  try {
    return e();
  } catch (t) {
    return;
  }
}, rn = function(e) {
  if (e === void 0 && (e = document), !(!e || !e.activeElement)) {
    var t = e.activeElement;
    return t.shadowRoot ? rn(t.shadowRoot) : t instanceof HTMLIFrameElement && bu(function() {
      return t.contentWindow.document;
    }) ? rn(t.contentWindow.document) : t;
  }
}, wu = function(e, t) {
  return e === t;
}, xu = function(e, t) {
  return !!Ye(e.querySelectorAll("iframe")).some(function(n) {
    return wu(n, t);
  });
}, Xa = function(e, t) {
  return t === void 0 && (t = rn(Ma(e).ownerDocument)), !t || t.dataset && t.dataset.focusGuard ? !1 : Kr(e).some(function(n) {
    return Rt(n, t) || xu(n, t);
  });
}, Eu = function(e) {
  e === void 0 && (e = document);
  var t = rn(e);
  return t ? Ye(e.querySelectorAll("[".concat(Hs, "]"))).some(function(n) {
    return Rt(n, t);
  }) : !1;
}, Cu = function(e, t) {
  return t.filter(qa).filter(function(n) {
    return n.name === e.name;
  }).filter(function(n) {
    return n.checked;
  })[0] || e;
}, Xr = function(e, t) {
  return qa(e) && e.name ? Cu(e, t) : e;
}, Su = function(e) {
  var t = /* @__PURE__ */ new Set();
  return e.forEach(function(n) {
    return t.add(Xr(n, e));
  }), e.filter(function(n) {
    return t.has(n);
  });
}, Fo = function(e) {
  return e[0] && e.length > 1 ? Xr(e[0], e) : e[0];
}, Mo = function(e, t) {
  return e.length > 1 ? e.indexOf(Xr(e[t], e)) : t;
}, Ja = "NEW_FOCUS", Ou = function(e, t, n, r) {
  var a = e.length, i = e[0], c = e[a - 1], s = qr(n);
  if (!(n && e.indexOf(n) >= 0)) {
    var u = n !== void 0 ? t.indexOf(n) : -1, l = r ? t.indexOf(r) : u, d = r ? e.indexOf(r) : -1, f = u - l, v = t.indexOf(i), p = t.indexOf(c), g = Su(t), y = n !== void 0 ? g.indexOf(n) : -1, b = y - (r ? g.indexOf(r) : u), E = Mo(e, 0), w = Mo(e, a - 1);
    if (u === -1 || d === -1)
      return Ja;
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
}, Pu = function(e) {
  return function(t) {
    var n, r = (n = Ya(t)) === null || n === void 0 ? void 0 : n.autofocus;
    return (
      // @ts-expect-error
      t.autofocus || //
      r !== void 0 && r !== "false" || //
      e.indexOf(t) >= 0
    );
  };
}, Ru = function(e, t, n) {
  var r = e.map(function(i) {
    var c = i.node;
    return c;
  }), a = Lo(r.filter(Pu(n)));
  return a && a.length ? Fo(a) : Fo(Lo(t));
}, kr = function(e, t) {
  return t === void 0 && (t = []), t.push(e), e.parentNode && kr(e.parentNode.host || e.parentNode, t), t;
}, pr = function(e, t) {
  for (var n = kr(e), r = kr(t), a = 0; a < n.length; a += 1) {
    var i = n[a];
    if (r.indexOf(i) >= 0)
      return i;
  }
  return !1;
}, Za = function(e, t, n) {
  var r = $n(e), a = $n(t), i = r[0], c = !1;
  return a.filter(Boolean).forEach(function(s) {
    c = pr(c || s, s) || c, n.filter(Boolean).forEach(function(u) {
      var l = pr(i, u);
      l && (!c || Rt(l, c) ? c = l : c = pr(l, c));
    });
  }), c;
}, Tu = function(e, t) {
  return e.reduce(function(n, r) {
    return n.concat(gu(r, t));
  }, []);
}, $u = function(e, t) {
  var n = /* @__PURE__ */ new Map();
  return t.forEach(function(r) {
    return n.set(r.node, r);
  }), e.map(function(r) {
    return n.get(r);
  }).filter(fu);
}, ku = function(e, t) {
  var n = rn($n(e).length > 0 ? document : Ma(e).ownerDocument), r = Kr(e).filter(kn), a = Za(n || e, e, r), i = /* @__PURE__ */ new Map(), c = Io(r, i), s = $r(r, i).filter(function(p) {
    var g = p.node;
    return kn(g);
  });
  if (!(!s[0] && (s = c, !s[0]))) {
    var u = Io([a], i).map(function(p) {
      var g = p.node;
      return g;
    }), l = $u(u, s), d = l.map(function(p) {
      var g = p.node;
      return g;
    }), f = Ou(d, u, n, t);
    if (f === Ja) {
      var v = Ru(c, d, Tu(r, i));
      if (v)
        return { node: v };
      console.warn("focus-lock: cannot find any node to move focus into");
      return;
    }
    return f === void 0 ? f : l[f];
  }
}, _u = function(e) {
  var t = Kr(e).filter(kn), n = Za(e, e, t), r = /* @__PURE__ */ new Map(), a = $r([n], r, !0), i = $r(t, r).filter(function(c) {
    var s = c.node;
    return kn(s);
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
      guard: qr(s)
    };
  });
}, Au = function(e, t) {
  "focus" in e && e.focus(t), "contentWindow" in e && e.contentWindow && e.contentWindow.focus();
}, mr = 0, hr = !1, Qa = function(e, t, n) {
  n === void 0 && (n = {});
  var r = ku(e, t);
  if (!hr && r) {
    if (mr > 2) {
      console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"), hr = !0, setTimeout(function() {
        hr = !1;
      }, 1);
      return;
    }
    mr++, Au(r.node, n.focusOptions), mr--;
  }
};
function Jr(e) {
  setTimeout(e, 1);
}
var Du = function() {
  return document && document.activeElement === document.body;
}, Nu = function() {
  return Du() || Eu();
}, Tt = null, St = null, $t = null, on = !1, ju = function() {
  return !0;
}, Lu = function(t) {
  return (Tt.whiteList || ju)(t);
}, Iu = function(t, n) {
  $t = {
    observerNode: t,
    portaledElement: n
  };
}, Fu = function(t) {
  return $t && $t.portaledElement === t;
};
function Bo(e, t, n, r) {
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
var Mu = function(t) {
  return t && "current" in t ? t.current : t;
}, Bu = function(t) {
  return t ? !!on : on === "meanwhile";
}, Wu = function e(t, n, r) {
  return n && // find host equal to active element and check nested active element
  (n.host === t && (!n.activeElement || r.contains(n.activeElement)) || n.parentNode && e(t, n.parentNode, r));
}, Uu = function(t, n) {
  return n.some(function(r) {
    return Wu(t, r, r);
  });
}, _n = function() {
  var t = !1;
  if (Tt) {
    var n = Tt, r = n.observed, a = n.persistentFocus, i = n.autoFocus, c = n.shards, s = n.crossFrame, u = n.focusOptions, l = r || $t && $t.portaledElement, d = document && document.activeElement;
    if (l) {
      var f = [l].concat(c.map(Mu).filter(Boolean));
      if ((!d || Lu(d)) && (a || Bu(s) || !Nu() || !St && i) && (l && !// active element is "inside" working area
      (Xa(f) || // check for shadow-dom contained elements
      d && Uu(d, f) || Fu(d)) && (document && !St && d && !i ? (d.blur && d.blur(), document.body.focus()) : (t = Qa(f, St, {
        focusOptions: u
      }), $t = {})), on = !1, St = document && document.activeElement), document) {
        var v = document && document.activeElement, p = _u(f), g = p.map(function(y) {
          var b = y.node;
          return b;
        }).indexOf(v);
        g > -1 && (p.filter(function(y) {
          var b = y.guard, E = y.node;
          return b && E.dataset.focusAutoGuard;
        }).forEach(function(y) {
          var b = y.node;
          return b.removeAttribute("tabIndex");
        }), Bo(g, p.length, 1, p), Bo(g, -1, -1, p));
      }
    }
  }
  return t;
}, ei = function(t) {
  _n() && t && (t.stopPropagation(), t.preventDefault());
}, Zr = function() {
  return Jr(_n);
}, Vu = function(t) {
  var n = t.target, r = t.currentTarget;
  r.contains(n) || Iu(r, n);
}, Yu = function() {
  return null;
};
process.env.NODE_ENV !== "production" && Na.node.isRequired;
var ti = function() {
  on = "just", Jr(function() {
    on = "meanwhile";
  });
}, zu = function() {
  document.addEventListener("focusin", ei), document.addEventListener("focusout", Zr), window.addEventListener("blur", ti);
}, qu = function() {
  document.removeEventListener("focusin", ei), document.removeEventListener("focusout", Zr), window.removeEventListener("blur", ti);
};
function Gu(e) {
  return e.filter(function(t) {
    var n = t.disabled;
    return !n;
  });
}
function Hu(e) {
  var t = e.slice(-1)[0];
  t && !Tt && zu();
  var n = Tt, r = n && t && t.id === n.id;
  Tt = t, n && !r && (n.onDeactivation(), e.filter(function(a) {
    var i = a.id;
    return i === n.id;
  }).length || n.returnFocus(!t)), t ? (St = null, (!r || n.observed !== t.observed) && t.onActivation(), _n(), Jr(_n)) : (qu(), St = null);
}
La.assignSyncMedium(Vu);
Ia.assignMedium(Zr);
Js.assignMedium(function(e) {
  return e({
    moveFocusInside: Qa,
    focusInside: Xa
  });
});
const Ku = ou(Gu, Hu)(Yu);
var ni = /* @__PURE__ */ D.forwardRef(function(t, n) {
  return /* @__PURE__ */ D.createElement(Fa, we({
    sideCar: Ku,
    ref: n
  }, t));
}), ri = Fa.propTypes || {};
ri.sideCar;
var Xu = Ms(ri, ["sideCar"]);
ni.propTypes = process.env.NODE_ENV !== "production" ? Xu : {};
const Ju = ni;
const Zu = (e) => {
  const { children: t, open: n, onOpenChange: r, disableBackdropClick: a, disableEscapeKey: i, contentClassName: c } = e, [s, u] = te(!0), l = ye(null);
  return ue(() => (s && n && (document.body.style.overflow = "hidden"), () => {
    document.body.style.overflow = "visible";
  }), [s, n]), ue(() => {
    if (a)
      return;
    const d = (f) => {
      !l.current || l.current.contains(f.target) || (r(), u(!1));
    };
    return document.addEventListener("mousedown", d), document.addEventListener("touchstart", d), () => {
      document.removeEventListener("mousedown", d), document.removeEventListener("touchstart", d);
    };
  }, [a, r]), ue(() => {
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
      className: Q({
        "Modal-content": !0,
        [c || ""]: !!c
      }),
      children: t
    }
  ) });
}, fl = (e) => {
  const {
    open: t,
    onOpenChange: n,
    children: r,
    disableBackdropClick: a = !1,
    disableEscapeKey: i = !1,
    contentClassName: c
  } = e;
  return t ? /* @__PURE__ */ P.jsx(Ju, { children: /* @__PURE__ */ P.jsx("div", { className: "Modal", children: /* @__PURE__ */ P.jsx(
    Zu,
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
const Wo = "...";
var Sn = /* @__PURE__ */ ((e) => (e.ROUNDED = "rounded", e.SQUARED = "squared", e))(Sn || {});
const dl = (e) => {
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
    return Array.from({ length: C }, (h, T) => w + T);
  }, f = d(1, Math.min(a, r)), v = d(Math.max(r - a + 1, a + 1), r), p = Math.max(
    Math.min(t - i, r - a - i * 2 - 1),
    a + 2
  ), g = Math.min(
    Math.max(t + i, a + i * 2 + 2),
    v.length > 0 ? v[0] - 2 : r - 1
  ), y = () => p > a + 2 ? [Wo] : a + 1 < r - a ? [a + 1] : [], b = () => g < r - a - 1 ? [Wo] : r - a > a ? [r - a] : [], E = [
    ...f,
    ...y(),
    ...d(p, g),
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
        children: /* @__PURE__ */ P.jsx(qo, {})
      }
    ),
    E.map((w, S) => /* @__PURE__ */ P.jsx(
      "button",
      ve(H({
        className: Q({
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
        children: /* @__PURE__ */ P.jsx(Ar, {})
      }
    )
  ] });
};
var De = /* @__PURE__ */ ((e) => (e.Light = "light", e.Dark = "dark", e.Green = "green", e))(De || {}), Ct = /* @__PURE__ */ ((e) => (e.Small = "small", e.Medium = "medium", e.Large = "large", e))(Ct || {});
const Qu = Pe.forwardRef((e, t) => {
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
    theme: v = De.Light,
    size: p = Ct.Medium
  } = e, [g, y] = te(!1), [b, E] = te(!1), [w, S] = te(a), C = (T) => {
    w || (y(!g), l && l(!g, T));
  }, h = (T) => {
    if ((T.key === "Enter" || T.key === " ") && !w) {
      const $ = {
        target: {
          ariaLabel: d,
          name: r
        }
      };
      y(!g), l && l(!g, $);
    }
  };
  return ue(() => {
    S(a);
  }, [a]), ue(() => {
    y(!!c);
  }, [c]), ue(() => {
    E(!!f);
  }, [f]), /* @__PURE__ */ P.jsx("div", { className: "Radio", children: /* @__PURE__ */ P.jsxs(
    "label",
    {
      className: Q({
        "Radio-checked": g,
        "Radio-dark-checked": g && v === De.Dark,
        "Radio-green-checked": g && v === De.Green,
        "Radio-unchecked": !g,
        "Radio-error": b,
        "Radio-disabled": w,
        "Radio-green-disabled": w && v === De.Green,
        "Radio-dark-disabled": w && v === De.Dark,
        "Radio-dark": v === De.Dark,
        "Radio-green": v === De.Green,
        [u || ""]: !!u
      }),
      htmlFor: n,
      onKeyDown: h,
      children: [
        /* @__PURE__ */ P.jsx(
          "input",
          {
            type: "radio",
            className: Q({
              "Radio-input": !0,
              "Radio-large": p === Ct.Large,
              "Radio-medium": p === Ct.Medium,
              "Radio-small": p === Ct.Small
            }),
            onChange: C,
            id: n,
            ref: t,
            checked: g,
            disabled: a,
            "aria-label": d
          }
        ),
        (s || i) && /* @__PURE__ */ P.jsx(
          "div",
          {
            className: Q({
              "Radio-label": !0,
              "Radio-label-small": p === Ct.Small,
              "Radio-label-dark": v === De.Dark,
              "Radio-label-green": v === De.Green,
              "Radio-label-disabled": w,
              "Radio-label-dark-disabled": w && v === De.Dark,
              "Radio-label-green-disabled": w && v === De.Green
            }),
            children: s || i
          }
        )
      ]
    }
  ) });
});
Qu.displayName = "Radio";
export {
  wi as Accordion,
  lt as BUTTON_COLOR,
  ze as BUTTON_SIZE,
  vi as BUTTON_TYPE,
  qe as BUTTON_VARIANT,
  ul as Breadcrumbs,
  pi as Button,
  xt as CHECKBOX_SIZE,
  Ae as CHECKBOX_THEME,
  yi as Checkbox,
  Oe as DROPDOWN_SIZE,
  Et as DROPDOWN_TYPE,
  Fs as Dropdown,
  wt as INPUT_SIZE,
  Xt as INPUT_THEME,
  ft as INPUT_TYPE,
  xi as IconButton,
  gi as Input,
  fl as Modal,
  Cn as PROGRESS_BAR_SIZE,
  dl as Pagination,
  Is as Popover,
  ll as ProgressBar,
  Ct as RADIO_SIZE,
  De as RADIO_THEME,
  Qu as Radio,
  Ge as SWITCH_SIZE,
  Jt as SWITCH_TAGS_SIZE,
  bn as SWITCH_TAGS_VARIANT,
  We as SWITCH_THEME,
  bi as Switch,
  al as SwitchTags,
  wr as TABS_SIZE,
  yn as TAGS_SIZE,
  rl as Tabs,
  ol as Tags
};
