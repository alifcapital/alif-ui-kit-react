import './index.css';
var $r = Object.defineProperty;
var qe = Object.getOwnPropertySymbols;
var Rr = Object.prototype.hasOwnProperty, Sr = Object.prototype.propertyIsEnumerable;
var _r = (n, u, d) => u in n ? $r(n, u, { enumerable: !0, configurable: !0, writable: !0, value: d }) : n[u] = d, Er = (n, u) => {
  for (var d in u || (u = {}))
    Rr.call(u, d) && _r(n, d, u[d]);
  if (qe)
    for (var d of qe(u))
      Sr.call(u, d) && _r(n, d, u[d]);
  return n;
};
var jr = (n, u) => {
  var d = {};
  for (var s in n)
    Rr.call(n, s) && u.indexOf(s) < 0 && (d[s] = n[s]);
  if (n != null && qe)
    for (var s of qe(n))
      u.indexOf(s) < 0 && Sr.call(n, s) && (d[s] = n[s]);
  return d;
};
import ze, { useState as Ue, useLayoutEffect as Br, useEffect as Ke } from "react";
var wr = { exports: {} }, We = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Or;
function Ar() {
  if (Or)
    return We;
  Or = 1;
  var n = ze, u = Symbol.for("react.element"), d = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, _ = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, R = { key: !0, ref: !0, __self: !0, __source: !0 };
  function P(E, f, g) {
    var h, p = {}, b = null, w = null;
    g !== void 0 && (b = "" + g), f.key !== void 0 && (b = "" + f.key), f.ref !== void 0 && (w = f.ref);
    for (h in f)
      s.call(f, h) && !R.hasOwnProperty(h) && (p[h] = f[h]);
    if (E && E.defaultProps)
      for (h in f = E.defaultProps, f)
        p[h] === void 0 && (p[h] = f[h]);
    return { $$typeof: u, type: E, key: b, ref: w, props: p, _owner: _.current };
  }
  return We.Fragment = d, We.jsx = P, We.jsxs = P, We;
}
var Ye = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pr;
function Mr() {
  return Pr || (Pr = 1, process.env.NODE_ENV !== "production" && function() {
    var n = ze, u = Symbol.for("react.element"), d = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), _ = Symbol.for("react.strict_mode"), R = Symbol.for("react.profiler"), P = Symbol.for("react.provider"), E = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), w = Symbol.for("react.offscreen"), B = Symbol.iterator, ee = "@@iterator";
    function re(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = B && e[B] || e[ee];
      return typeof r == "function" ? r : null;
    }
    var S = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function m(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
          t[a - 1] = arguments[a];
        Z("error", e, t);
      }
    }
    function Z(e, r, t) {
      {
        var a = S.ReactDebugCurrentFrame, l = a.getStackAddendum();
        l !== "" && (r += "%s", t = t.concat([l]));
        var c = t.map(function(i) {
          return String(i);
        });
        c.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, c);
      }
    }
    var Q = !1, A = !1, X = !1, ge = !1, Re = !1, te;
    te = Symbol.for("react.module.reference");
    function xe(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === s || e === R || Re || e === _ || e === g || e === h || ge || e === w || Q || A || X || typeof e == "object" && e !== null && (e.$$typeof === b || e.$$typeof === p || e.$$typeof === P || e.$$typeof === E || e.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === te || e.getModuleId !== void 0));
    }
    function Se(e, r, t) {
      var a = e.displayName;
      if (a)
        return a;
      var l = r.displayName || r.name || "";
      return l !== "" ? t + "(" + l + ")" : t;
    }
    function ne(e) {
      return e.displayName || "Context";
    }
    function O(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && m("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case s:
          return "Fragment";
        case d:
          return "Portal";
        case R:
          return "Profiler";
        case _:
          return "StrictMode";
        case g:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case E:
            var r = e;
            return ne(r) + ".Consumer";
          case P:
            var t = e;
            return ne(t._context) + ".Provider";
          case f:
            return Se(e, e.render, "ForwardRef");
          case p:
            var a = e.displayName || null;
            return a !== null ? a : O(e.type) || "Memo";
          case b: {
            var l = e, c = l._payload, i = l._init;
            try {
              return O(i(c));
            } catch (o) {
              return null;
            }
          }
        }
      return null;
    }
    var L = Object.assign, F = 0, ae, oe, ie, le, se, H, D;
    function Ee() {
    }
    Ee.__reactDisabledLog = !0;
    function Ze() {
      {
        if (F === 0) {
          ae = console.log, oe = console.info, ie = console.warn, le = console.error, se = console.group, H = console.groupCollapsed, D = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Ee,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        F++;
      }
    }
    function Qe() {
      {
        if (F--, F === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: L({}, e, {
              value: ae
            }),
            info: L({}, e, {
              value: oe
            }),
            warn: L({}, e, {
              value: ie
            }),
            error: L({}, e, {
              value: le
            }),
            group: L({}, e, {
              value: se
            }),
            groupCollapsed: L({}, e, {
              value: H
            }),
            groupEnd: L({}, e, {
              value: D
            })
          });
        }
        F < 0 && m("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ue = S.ReactCurrentDispatcher, ce;
    function Y(e, r, t) {
      {
        if (ce === void 0)
          try {
            throw Error();
          } catch (l) {
            var a = l.stack.trim().match(/\n( *(at )?)/);
            ce = a && a[1] || "";
          }
        return `
` + ce + e;
      }
    }
    var fe = !1, V;
    {
      var Xe = typeof WeakMap == "function" ? WeakMap : Map;
      V = new Xe();
    }
    function je(e, r) {
      if (!e || fe)
        return "";
      {
        var t = V.get(e);
        if (t !== void 0)
          return t;
      }
      var a;
      fe = !0;
      var l = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var c;
      c = ue.current, ue.current = null, Ze();
      try {
        if (r) {
          var i = function() {
            throw Error();
          };
          if (Object.defineProperty(i.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(i, []);
            } catch (T) {
              a = T;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (T) {
              a = T;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (T) {
            a = T;
          }
          e();
        }
      } catch (T) {
        if (T && a && typeof T.stack == "string") {
          for (var o = T.stack.split(`
`), k = a.stack.split(`
`), v = o.length - 1, y = k.length - 1; v >= 1 && y >= 0 && o[v] !== k[y]; )
            y--;
          for (; v >= 1 && y >= 0; v--, y--)
            if (o[v] !== k[y]) {
              if (v !== 1 || y !== 1)
                do
                  if (v--, y--, y < 0 || o[v] !== k[y]) {
                    var j = `
` + o[v].replace(" at new ", " at ");
                    return e.displayName && j.includes("<anonymous>") && (j = j.replace("<anonymous>", e.displayName)), typeof e == "function" && V.set(e, j), j;
                  }
                while (v >= 1 && y >= 0);
              break;
            }
        }
      } finally {
        fe = !1, ue.current = c, Qe(), Error.prepareStackTrace = l;
      }
      var $ = e ? e.displayName || e.name : "", Ce = $ ? Y($) : "";
      return typeof e == "function" && V.set(e, Ce), Ce;
    }
    function He(e, r, t) {
      return je(e, !1);
    }
    function er(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function G(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return je(e, er(e));
      if (typeof e == "string")
        return Y(e);
      switch (e) {
        case g:
          return Y("Suspense");
        case h:
          return Y("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            return He(e.render);
          case p:
            return G(e.type, r, t);
          case b: {
            var a = e, l = a._payload, c = a._init;
            try {
              return G(c(l), r, t);
            } catch (i) {
            }
          }
        }
      return "";
    }
    var U = Object.prototype.hasOwnProperty, Oe = {}, Pe = S.ReactDebugCurrentFrame;
    function z(e) {
      if (e) {
        var r = e._owner, t = G(e.type, e._source, r ? r.type : null);
        Pe.setExtraStackFrame(t);
      } else
        Pe.setExtraStackFrame(null);
    }
    function rr(e, r, t, a, l) {
      {
        var c = Function.call.bind(U);
        for (var i in e)
          if (c(e, i)) {
            var o = void 0;
            try {
              if (typeof e[i] != "function") {
                var k = Error((a || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw k.name = "Invariant Violation", k;
              }
              o = e[i](r, i, a, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (v) {
              o = v;
            }
            o && !(o instanceof Error) && (z(l), m("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", t, i, typeof o), z(null)), o instanceof Error && !(o.message in Oe) && (Oe[o.message] = !0, z(l), m("Failed %s type: %s", t, o.message), z(null));
          }
      }
    }
    var tr = Array.isArray;
    function de(e) {
      return tr(e);
    }
    function nr(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function ar(e) {
      try {
        return Te(e), !1;
      } catch (r) {
        return !0;
      }
    }
    function Te(e) {
      return "" + e;
    }
    function De(e) {
      if (ar(e))
        return m("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", nr(e)), Te(e);
    }
    var C = S.ReactCurrentOwner, or = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Le, Ie, pe;
    pe = {};
    function ir(e) {
      if (U.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function lr(e) {
      if (U.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function sr(e, r) {
      if (typeof e.ref == "string" && C.current && r && C.current.stateNode !== r) {
        var t = O(C.current.type);
        pe[t] || (m('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', O(C.current.type), e.ref), pe[t] = !0);
      }
    }
    function ur(e, r) {
      {
        var t = function() {
          Le || (Le = !0, m("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function cr(e, r) {
      {
        var t = function() {
          Ie || (Ie = !0, m("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var fr = function(e, r, t, a, l, c, i) {
      var o = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: u,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: i,
        // Record the component responsible for creating this element.
        _owner: c
      };
      return o._store = {}, Object.defineProperty(o._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(o, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: a
      }), Object.defineProperty(o, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: l
      }), Object.freeze && (Object.freeze(o.props), Object.freeze(o)), o;
    };
    function dr(e, r, t, a, l) {
      {
        var c, i = {}, o = null, k = null;
        t !== void 0 && (De(t), o = "" + t), lr(r) && (De(r.key), o = "" + r.key), ir(r) && (k = r.ref, sr(r, l));
        for (c in r)
          U.call(r, c) && !or.hasOwnProperty(c) && (i[c] = r[c]);
        if (e && e.defaultProps) {
          var v = e.defaultProps;
          for (c in v)
            i[c] === void 0 && (i[c] = v[c]);
        }
        if (o || k) {
          var y = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          o && ur(i, y), k && cr(i, y);
        }
        return fr(e, o, k, l, a, C.current, i);
      }
    }
    var ve = S.ReactCurrentOwner, Fe = S.ReactDebugCurrentFrame;
    function N(e) {
      if (e) {
        var r = e._owner, t = G(e.type, e._source, r ? r.type : null);
        Fe.setExtraStackFrame(t);
      } else
        Fe.setExtraStackFrame(null);
    }
    var he;
    he = !1;
    function ye(e) {
      return typeof e == "object" && e !== null && e.$$typeof === u;
    }
    function Ne() {
      {
        if (ve.current) {
          var e = O(ve.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function pr(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var $e = {};
    function vr(e) {
      {
        var r = Ne();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Be(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = vr(r);
        if ($e[t])
          return;
        $e[t] = !0;
        var a = "";
        e && e._owner && e._owner !== ve.current && (a = " It was passed a child from " + O(e._owner.type) + "."), N(e), m('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, a), N(null);
      }
    }
    function Ae(e, r) {
      {
        if (typeof e != "object")
          return;
        if (de(e))
          for (var t = 0; t < e.length; t++) {
            var a = e[t];
            ye(a) && Be(a, r);
          }
        else if (ye(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var l = re(e);
          if (typeof l == "function" && l !== e.entries)
            for (var c = l.call(e), i; !(i = c.next()).done; )
              ye(i.value) && Be(i.value, r);
        }
      }
    }
    function hr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === p))
          t = r.propTypes;
        else
          return;
        if (t) {
          var a = O(r);
          rr(t, e.props, "prop", a, e);
        } else if (r.PropTypes !== void 0 && !he) {
          he = !0;
          var l = O(r);
          m("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", l || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && m("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function yr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var a = r[t];
          if (a !== "children" && a !== "key") {
            N(e), m("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), N(null);
            break;
          }
        }
        e.ref !== null && (N(e), m("Invalid attribute `ref` supplied to `React.Fragment`."), N(null));
      }
    }
    function Me(e, r, t, a, l, c) {
      {
        var i = xe(e);
        if (!i) {
          var o = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (o += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var k = pr(l);
          k ? o += k : o += Ne();
          var v;
          e === null ? v = "null" : de(e) ? v = "array" : e !== void 0 && e.$$typeof === u ? (v = "<" + (O(e.type) || "Unknown") + " />", o = " Did you accidentally export a JSX literal instead of a component?") : v = typeof e, m("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", v, o);
        }
        var y = dr(e, r, t, l, c);
        if (y == null)
          return y;
        if (i) {
          var j = r.children;
          if (j !== void 0)
            if (a)
              if (de(j)) {
                for (var $ = 0; $ < j.length; $++)
                  Ae(j[$], e);
                Object.freeze && Object.freeze(j);
              } else
                m("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ae(j, e);
        }
        return e === s ? yr(y) : hr(y), y;
      }
    }
    function mr(e, r, t) {
      return Me(e, r, t, !0);
    }
    function br(e, r, t) {
      return Me(e, r, t, !1);
    }
    var gr = br, xr = mr;
    Ye.Fragment = s, Ye.jsx = gr, Ye.jsxs = xr;
  }()), Ye;
}
process.env.NODE_ENV === "production" ? wr.exports = Ar() : wr.exports = Mr();
var x = wr.exports;
function Lr(n) {
  var u, d, s = "";
  if (typeof n == "string" || typeof n == "number")
    s += n;
  else if (typeof n == "object")
    if (Array.isArray(n))
      for (u = 0; u < n.length; u++)
        n[u] && (d = Lr(n[u])) && (s && (s += " "), s += d);
    else
      for (u in n)
        n[u] && (s && (s += " "), s += u);
  return s;
}
function I() {
  for (var n, u, d = 0, s = ""; d < arguments.length; )
    (n = arguments[d++]) && (u = Lr(n)) && (s && (s += " "), s += u);
  return s;
}
var q = /* @__PURE__ */ ((n) => (n.large = "large", n.Medium = "medium", n.Small = "small", n))(q || {}), J = /* @__PURE__ */ ((n) => (n.Contained = "contained", n.Outlined = "outlined", n.Text = "text", n))(J || {}), me = /* @__PURE__ */ ((n) => (n.Primary = "primary", n.Secondary = "secondary", n.Green = "green", n))(me || {});
const Gr = (n) => {
  const {
    id: u,
    ariaLabel: d,
    className: s,
    children: _,
    disabled: R,
    rounded: P,
    endIcon: E,
    startIcon: f,
    color: g = me.Primary,
    withIcon: h,
    size: p = q.Medium,
    variant: b = J.Contained
  } = n;
  return /* @__PURE__ */ x.jsx(
    "button",
    {
      "aria-label": d,
      id: u,
      disabled: R,
      className: I({
        Button: !0,
        "Button-contained": b === J.Contained,
        "Button-outlined": b === J.Outlined,
        "Button-outlined-disable": !!R && b === J.Outlined,
        "Button-text": b === J.Text,
        "Button-text-small": p === q.Small && b === J.Text,
        "Button-text-large": p === q.large && b === J.Text,
        "Button-text-disable": !!R && b === J.Text,
        "Button-primary": p === q.Medium,
        "Button-primary-disable": !!R && g === me.Primary,
        "Button-secondary": g === me.Secondary,
        "Button-secondary-disable": !!R && g === me.Secondary,
        "Button-green": g === me.Green,
        "Button-green-disable": !!R && g === me.Green,
        "Button-small": p === q.Small,
        "Button-large": p === q.large,
        "Button-round": !!P,
        "Button-only_icon": !!h,
        "Button-only_icon-small": !!h && p === q.Small,
        "Button-only_icon-large": !!h && p === q.large,
        [s || ""]: !!s
      }),
      children: /* @__PURE__ */ x.jsxs("div", { className: "Button-children", children: [
        f && /* @__PURE__ */ x.jsx("span", { className: "Button-icon-left", children: f }),
        _,
        E && /* @__PURE__ */ x.jsx("span", { className: "Button-icon-right", children: E })
      ] })
    }
  );
};
var kr = { exports: {} }, Ve = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tr;
function Cr() {
  if (Tr)
    return Ve;
  Tr = 1;
  var n = ze, u = Symbol.for("react.element"), d = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, _ = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, R = { key: !0, ref: !0, __self: !0, __source: !0 };
  function P(E, f, g) {
    var h, p = {}, b = null, w = null;
    g !== void 0 && (b = "" + g), f.key !== void 0 && (b = "" + f.key), f.ref !== void 0 && (w = f.ref);
    for (h in f)
      s.call(f, h) && !R.hasOwnProperty(h) && (p[h] = f[h]);
    if (E && E.defaultProps)
      for (h in f = E.defaultProps, f)
        p[h] === void 0 && (p[h] = f[h]);
    return { $$typeof: u, type: E, key: b, ref: w, props: p, _owner: _.current };
  }
  return Ve.Fragment = d, Ve.jsx = P, Ve.jsxs = P, Ve;
}
var Je = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Dr;
function Wr() {
  return Dr || (Dr = 1, process.env.NODE_ENV !== "production" && function() {
    var n = ze, u = Symbol.for("react.element"), d = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), _ = Symbol.for("react.strict_mode"), R = Symbol.for("react.profiler"), P = Symbol.for("react.provider"), E = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), w = Symbol.for("react.offscreen"), B = Symbol.iterator, ee = "@@iterator";
    function re(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = B && e[B] || e[ee];
      return typeof r == "function" ? r : null;
    }
    var S = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function m(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
          t[a - 1] = arguments[a];
        Z("error", e, t);
      }
    }
    function Z(e, r, t) {
      {
        var a = S.ReactDebugCurrentFrame, l = a.getStackAddendum();
        l !== "" && (r += "%s", t = t.concat([l]));
        var c = t.map(function(i) {
          return String(i);
        });
        c.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, c);
      }
    }
    var Q = !1, A = !1, X = !1, ge = !1, Re = !1, te;
    te = Symbol.for("react.module.reference");
    function xe(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === s || e === R || Re || e === _ || e === g || e === h || ge || e === w || Q || A || X || typeof e == "object" && e !== null && (e.$$typeof === b || e.$$typeof === p || e.$$typeof === P || e.$$typeof === E || e.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === te || e.getModuleId !== void 0));
    }
    function Se(e, r, t) {
      var a = e.displayName;
      if (a)
        return a;
      var l = r.displayName || r.name || "";
      return l !== "" ? t + "(" + l + ")" : t;
    }
    function ne(e) {
      return e.displayName || "Context";
    }
    function O(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && m("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case s:
          return "Fragment";
        case d:
          return "Portal";
        case R:
          return "Profiler";
        case _:
          return "StrictMode";
        case g:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case E:
            var r = e;
            return ne(r) + ".Consumer";
          case P:
            var t = e;
            return ne(t._context) + ".Provider";
          case f:
            return Se(e, e.render, "ForwardRef");
          case p:
            var a = e.displayName || null;
            return a !== null ? a : O(e.type) || "Memo";
          case b: {
            var l = e, c = l._payload, i = l._init;
            try {
              return O(i(c));
            } catch (o) {
              return null;
            }
          }
        }
      return null;
    }
    var L = Object.assign, F = 0, ae, oe, ie, le, se, H, D;
    function Ee() {
    }
    Ee.__reactDisabledLog = !0;
    function Ze() {
      {
        if (F === 0) {
          ae = console.log, oe = console.info, ie = console.warn, le = console.error, se = console.group, H = console.groupCollapsed, D = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Ee,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        F++;
      }
    }
    function Qe() {
      {
        if (F--, F === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: L({}, e, {
              value: ae
            }),
            info: L({}, e, {
              value: oe
            }),
            warn: L({}, e, {
              value: ie
            }),
            error: L({}, e, {
              value: le
            }),
            group: L({}, e, {
              value: se
            }),
            groupCollapsed: L({}, e, {
              value: H
            }),
            groupEnd: L({}, e, {
              value: D
            })
          });
        }
        F < 0 && m("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ue = S.ReactCurrentDispatcher, ce;
    function Y(e, r, t) {
      {
        if (ce === void 0)
          try {
            throw Error();
          } catch (l) {
            var a = l.stack.trim().match(/\n( *(at )?)/);
            ce = a && a[1] || "";
          }
        return `
` + ce + e;
      }
    }
    var fe = !1, V;
    {
      var Xe = typeof WeakMap == "function" ? WeakMap : Map;
      V = new Xe();
    }
    function je(e, r) {
      if (!e || fe)
        return "";
      {
        var t = V.get(e);
        if (t !== void 0)
          return t;
      }
      var a;
      fe = !0;
      var l = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var c;
      c = ue.current, ue.current = null, Ze();
      try {
        if (r) {
          var i = function() {
            throw Error();
          };
          if (Object.defineProperty(i.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(i, []);
            } catch (T) {
              a = T;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (T) {
              a = T;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (T) {
            a = T;
          }
          e();
        }
      } catch (T) {
        if (T && a && typeof T.stack == "string") {
          for (var o = T.stack.split(`
`), k = a.stack.split(`
`), v = o.length - 1, y = k.length - 1; v >= 1 && y >= 0 && o[v] !== k[y]; )
            y--;
          for (; v >= 1 && y >= 0; v--, y--)
            if (o[v] !== k[y]) {
              if (v !== 1 || y !== 1)
                do
                  if (v--, y--, y < 0 || o[v] !== k[y]) {
                    var j = `
` + o[v].replace(" at new ", " at ");
                    return e.displayName && j.includes("<anonymous>") && (j = j.replace("<anonymous>", e.displayName)), typeof e == "function" && V.set(e, j), j;
                  }
                while (v >= 1 && y >= 0);
              break;
            }
        }
      } finally {
        fe = !1, ue.current = c, Qe(), Error.prepareStackTrace = l;
      }
      var $ = e ? e.displayName || e.name : "", Ce = $ ? Y($) : "";
      return typeof e == "function" && V.set(e, Ce), Ce;
    }
    function He(e, r, t) {
      return je(e, !1);
    }
    function er(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function G(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return je(e, er(e));
      if (typeof e == "string")
        return Y(e);
      switch (e) {
        case g:
          return Y("Suspense");
        case h:
          return Y("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            return He(e.render);
          case p:
            return G(e.type, r, t);
          case b: {
            var a = e, l = a._payload, c = a._init;
            try {
              return G(c(l), r, t);
            } catch (i) {
            }
          }
        }
      return "";
    }
    var U = Object.prototype.hasOwnProperty, Oe = {}, Pe = S.ReactDebugCurrentFrame;
    function z(e) {
      if (e) {
        var r = e._owner, t = G(e.type, e._source, r ? r.type : null);
        Pe.setExtraStackFrame(t);
      } else
        Pe.setExtraStackFrame(null);
    }
    function rr(e, r, t, a, l) {
      {
        var c = Function.call.bind(U);
        for (var i in e)
          if (c(e, i)) {
            var o = void 0;
            try {
              if (typeof e[i] != "function") {
                var k = Error((a || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw k.name = "Invariant Violation", k;
              }
              o = e[i](r, i, a, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (v) {
              o = v;
            }
            o && !(o instanceof Error) && (z(l), m("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", t, i, typeof o), z(null)), o instanceof Error && !(o.message in Oe) && (Oe[o.message] = !0, z(l), m("Failed %s type: %s", t, o.message), z(null));
          }
      }
    }
    var tr = Array.isArray;
    function de(e) {
      return tr(e);
    }
    function nr(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function ar(e) {
      try {
        return Te(e), !1;
      } catch (r) {
        return !0;
      }
    }
    function Te(e) {
      return "" + e;
    }
    function De(e) {
      if (ar(e))
        return m("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", nr(e)), Te(e);
    }
    var C = S.ReactCurrentOwner, or = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Le, Ie, pe;
    pe = {};
    function ir(e) {
      if (U.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function lr(e) {
      if (U.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function sr(e, r) {
      if (typeof e.ref == "string" && C.current && r && C.current.stateNode !== r) {
        var t = O(C.current.type);
        pe[t] || (m('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', O(C.current.type), e.ref), pe[t] = !0);
      }
    }
    function ur(e, r) {
      {
        var t = function() {
          Le || (Le = !0, m("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function cr(e, r) {
      {
        var t = function() {
          Ie || (Ie = !0, m("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var fr = function(e, r, t, a, l, c, i) {
      var o = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: u,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: i,
        // Record the component responsible for creating this element.
        _owner: c
      };
      return o._store = {}, Object.defineProperty(o._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(o, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: a
      }), Object.defineProperty(o, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: l
      }), Object.freeze && (Object.freeze(o.props), Object.freeze(o)), o;
    };
    function dr(e, r, t, a, l) {
      {
        var c, i = {}, o = null, k = null;
        t !== void 0 && (De(t), o = "" + t), lr(r) && (De(r.key), o = "" + r.key), ir(r) && (k = r.ref, sr(r, l));
        for (c in r)
          U.call(r, c) && !or.hasOwnProperty(c) && (i[c] = r[c]);
        if (e && e.defaultProps) {
          var v = e.defaultProps;
          for (c in v)
            i[c] === void 0 && (i[c] = v[c]);
        }
        if (o || k) {
          var y = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          o && ur(i, y), k && cr(i, y);
        }
        return fr(e, o, k, l, a, C.current, i);
      }
    }
    var ve = S.ReactCurrentOwner, Fe = S.ReactDebugCurrentFrame;
    function N(e) {
      if (e) {
        var r = e._owner, t = G(e.type, e._source, r ? r.type : null);
        Fe.setExtraStackFrame(t);
      } else
        Fe.setExtraStackFrame(null);
    }
    var he;
    he = !1;
    function ye(e) {
      return typeof e == "object" && e !== null && e.$$typeof === u;
    }
    function Ne() {
      {
        if (ve.current) {
          var e = O(ve.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function pr(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var $e = {};
    function vr(e) {
      {
        var r = Ne();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Be(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = vr(r);
        if ($e[t])
          return;
        $e[t] = !0;
        var a = "";
        e && e._owner && e._owner !== ve.current && (a = " It was passed a child from " + O(e._owner.type) + "."), N(e), m('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, a), N(null);
      }
    }
    function Ae(e, r) {
      {
        if (typeof e != "object")
          return;
        if (de(e))
          for (var t = 0; t < e.length; t++) {
            var a = e[t];
            ye(a) && Be(a, r);
          }
        else if (ye(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var l = re(e);
          if (typeof l == "function" && l !== e.entries)
            for (var c = l.call(e), i; !(i = c.next()).done; )
              ye(i.value) && Be(i.value, r);
        }
      }
    }
    function hr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === p))
          t = r.propTypes;
        else
          return;
        if (t) {
          var a = O(r);
          rr(t, e.props, "prop", a, e);
        } else if (r.PropTypes !== void 0 && !he) {
          he = !0;
          var l = O(r);
          m("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", l || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && m("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function yr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var a = r[t];
          if (a !== "children" && a !== "key") {
            N(e), m("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), N(null);
            break;
          }
        }
        e.ref !== null && (N(e), m("Invalid attribute `ref` supplied to `React.Fragment`."), N(null));
      }
    }
    function Me(e, r, t, a, l, c) {
      {
        var i = xe(e);
        if (!i) {
          var o = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (o += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var k = pr(l);
          k ? o += k : o += Ne();
          var v;
          e === null ? v = "null" : de(e) ? v = "array" : e !== void 0 && e.$$typeof === u ? (v = "<" + (O(e.type) || "Unknown") + " />", o = " Did you accidentally export a JSX literal instead of a component?") : v = typeof e, m("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", v, o);
        }
        var y = dr(e, r, t, l, c);
        if (y == null)
          return y;
        if (i) {
          var j = r.children;
          if (j !== void 0)
            if (a)
              if (de(j)) {
                for (var $ = 0; $ < j.length; $++)
                  Ae(j[$], e);
                Object.freeze && Object.freeze(j);
              } else
                m("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ae(j, e);
        }
        return e === s ? yr(y) : hr(y), y;
      }
    }
    function mr(e, r, t) {
      return Me(e, r, t, !0);
    }
    function br(e, r, t) {
      return Me(e, r, t, !1);
    }
    var gr = br, xr = mr;
    Je.Fragment = s, Je.jsx = gr, Je.jsxs = xr;
  }()), Je;
}
process.env.NODE_ENV === "production" ? kr.exports = Cr() : kr.exports = Wr();
var _e = kr.exports;
const Ir = ({ width: n = "25", height: u = "25", color: d = "currentColor" }) => /* @__PURE__ */ _e.jsx(
  "svg",
  {
    width: n,
    height: u,
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ _e.jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M5.82032 4.50537L6.52742 5.21248L20.1474 18.8325L20.8545 19.5396L19.4403 20.9538L18.7332 20.2467L17.8442 19.3577L17.8266 19.3677C16.0623 20.3764 14.0668 20.911 12.0345 20.9196L12.0303 20.9196C6.54866 20.9196 2.84121 17.0479 1.23877 14.9408C0.787352 14.3639 0.541992 13.6523 0.541992 12.9196C0.541992 12.1871 0.787212 11.4757 1.23839 10.8988C2.40849 9.35649 3.82856 8.02264 5.4385 6.95198L5.11321 6.62669L4.4061 5.91958L5.82032 4.50537ZM6.88489 8.39837C5.31901 9.38114 3.94415 10.6399 2.82724 12.1136L2.81612 12.128C2.63855 12.3536 2.54199 12.6325 2.54199 12.9196C2.54199 13.2067 2.63855 13.4856 2.81612 13.7112L2.82651 13.7246C4.32641 15.6987 7.51628 18.9186 12.0281 18.9196C13.5378 18.9129 15.0229 18.5565 16.3679 17.8814L14.5664 16.0799C13.9327 16.4808 13.1935 16.6988 12.4318 16.6996C11.6403 16.7014 10.8662 16.4682 10.2073 16.0299C9.5482 15.5914 9.03394 14.9671 8.7298 14.2361C8.42567 13.505 8.34538 12.7001 8.499 11.9234C8.59541 11.436 8.78122 10.9734 9.04455 10.558L6.88489 8.39837ZM10.491 12.1824C10.4796 12.225 10.4696 12.2681 10.461 12.3115C10.3842 12.6999 10.4243 13.1024 10.5764 13.4679C10.7284 13.8333 10.9855 14.1454 11.3152 14.3647C11.6448 14.584 12.0321 14.7006 12.4279 14.6996L12.4294 14.6996C12.6053 14.6995 12.7788 14.6761 12.9457 14.6314L10.491 12.1824ZM12.4318 16.6996C12.4316 16.6996 12.4314 16.6996 12.4312 16.6996L12.4303 15.6996L12.4328 16.6996C12.4324 16.6996 12.4321 16.6996 12.4318 16.6996ZM10.4803 4.93961H11.4803H12.0303C17.5119 4.93961 21.2194 8.81135 22.8218 10.9184C23.2732 11.4953 23.5186 12.2069 23.5186 12.9396C23.5186 13.6752 23.2713 14.3894 22.8165 14.9675C22.369 15.537 21.8927 16.0833 21.3896 16.6042L20.695 17.3236L19.2563 15.9342L19.951 15.2149C20.4069 14.7428 20.8385 14.2478 21.244 13.7317L21.2444 13.7312C21.422 13.5056 21.5186 13.2267 21.5186 12.9396C21.5186 12.6525 21.422 12.3736 21.2444 12.148L21.234 12.1346C19.7339 10.1602 16.5433 6.93961 12.0303 6.93961H11.4803H10.4803V4.93961Z",
        fill: d
      }
    )
  }
);
Ir.displayName = "EyeOff";
const Fr = ({ width: n = "25", height: u = "25", color: d = "currentColor" }) => /* @__PURE__ */ _e.jsx(
  "svg",
  {
    width: n,
    height: u,
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ _e.jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M2.82433 12.1233C4.36074 10.1376 7.56441 6.91943 12.0615 6.91943C16.5585 6.91943 19.7622 10.1376 21.2986 12.1233C21.6698 12.6031 21.6698 13.2358 21.2986 13.7156C19.7622 15.7012 16.5585 18.9194 12.0615 18.9194C7.56441 18.9194 4.36074 15.7012 2.82433 13.7156C2.45309 13.2358 2.45309 12.6031 2.82433 12.1233ZM12.0615 4.91943C6.59165 4.91943 2.86942 8.79681 1.24255 10.8994C0.313681 12.0998 0.313681 13.739 1.24255 14.9395C2.86942 17.0421 6.59165 20.9194 12.0615 20.9194C17.5313 20.9194 21.2535 17.0421 22.8804 14.9395C23.8092 13.739 23.8092 12.0998 22.8804 10.8994C21.2535 8.79681 17.5313 4.91943 12.0615 4.91943ZM10.0615 12.9194C10.0615 11.8149 10.9569 10.9194 12.0615 10.9194C13.166 10.9194 14.0615 11.8149 14.0615 12.9194C14.0615 14.024 13.166 14.9194 12.0615 14.9194C10.9569 14.9194 10.0615 14.024 10.0615 12.9194ZM12.0615 8.91943C9.85232 8.91943 8.06146 10.7103 8.06146 12.9194C8.06146 15.1286 9.85232 16.9194 12.0615 16.9194C14.2706 16.9194 16.0615 15.1286 16.0615 12.9194C16.0615 10.7103 14.2706 8.91943 12.0615 8.91943Z",
        fill: d
      }
    )
  }
);
Fr.displayName = "EyeOn";
const Nr = ({ width: n = "25", height: u = "25", color: d = "currentColor" }) => /* @__PURE__ */ _e.jsx(
  "svg",
  {
    width: n,
    height: u,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ _e.jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M21.4144 6.00015L20.7073 6.70726L9.70726 17.7073C9.31673 18.0978 8.68357 18.0978 8.29304 17.7073L3.29304 12.7073L2.58594 12.0002L4.00015 10.5859L4.70726 11.293L9.00015 15.5859L19.293 5.29304L20.0002 4.58594L21.4144 6.00015Z",
        fill: d
      }
    )
  }
);
Nr.displayName = "Check";
var be = /* @__PURE__ */ ((n) => (n.Text = "text", n.Number = "number", n.Password = "password", n))(be || {}), we = /* @__PURE__ */ ((n) => (n.Small = "small", n.Medium = "medium", n))(we || {}), Ge = /* @__PURE__ */ ((n) => (n.Light = "light", n.Dark = "dark", n))(Ge || {});
const Ur = (n) => {
  const H = n, {
    id: u,
    value: d,
    defaultValue: s,
    className: _,
    disabled: R,
    endIcon: P,
    startIcon: E,
    isError: f,
    isHint: g,
    helperText: h,
    placeholder: p,
    label: b,
    type: w,
    name: B,
    ariaLabel: ee,
    autoComplete: re = !0,
    size: S = we.Medium,
    theme: m = Ge.Light,
    onBlur: Z,
    onChange: Q,
    onFocus: A,
    onKeyDown: X,
    onKeyUp: ge
  } = H, Re = jr(H, [
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
    "onKeyUp"
  ]), [te, xe] = Ue(""), [Se, ne] = Ue(w), [O, L] = ze.useState(!1), F = (D) => {
    xe(D.target.value), Q && Q(D);
  }, ae = (D) => {
    Z && Z(D);
  }, oe = (D) => {
    A && A(D);
  }, ie = (D) => {
    X && X(D);
  }, le = (D) => {
    ge && ge(D);
  }, se = () => {
    L((D) => !D);
  };
  return Br(() => {
    (s || d) && xe(" ");
  }, [s, d]), Ke(() => {
    w === be.Password && ne(O ? be.Text : be.Password);
  }, [O, w]), /* @__PURE__ */ x.jsxs(
    "div",
    {
      className: I({
        "Input-root": !0,
        "Input-without-heading ": !!b,
        [_ || ""]: !!_
      }),
      children: [
        b && /* @__PURE__ */ x.jsx(
          "label",
          {
            className: I({
              InputLabel: !0,
              "InputLabel-small": S === we.Small
            }),
            htmlFor: u,
            children: b
          }
        ),
        /* @__PURE__ */ x.jsxs(
          "div",
          {
            className: I({
              "InputBase-root": !0,
              "Input-disabled": R,
              "InputBase-error": !!f,
              "InputBase-root-dark": m === Ge.Dark
            }),
            children: [
              w !== be.Password && E && /* @__PURE__ */ x.jsx("div", { className: "InputBase-icon-start", children: E }),
              /* @__PURE__ */ x.jsxs(
                "div",
                {
                  className: I({
                    InputBaseInner: !0
                  }),
                  children: [
                    !b && /* @__PURE__ */ x.jsx(
                      "label",
                      {
                        className: I({
                          InputLabel: !0,
                          "InputLabel-medium-align-center": S === we.Medium,
                          "InputLabel-small-align-center": S === we.Small,
                          "InputLabel-position-fixed": te.length > 0
                        }),
                        htmlFor: u,
                        children: p
                      }
                    ),
                    /* @__PURE__ */ x.jsx(
                      "input",
                      Er({
                        defaultValue: !d && s ? s : void 0,
                        "aria-label": ee,
                        autoComplete: re ? "on" : "off",
                        className: I({
                          "InputBase-input": !0,
                          "InputBase-input-dark": m === Ge.Dark,
                          "InputBase-input-small": S === we.Small
                        }),
                        disabled: R,
                        name: B,
                        type: Se,
                        id: u,
                        value: d,
                        onChange: F,
                        onBlur: ae,
                        onFocus: oe,
                        onKeyDown: ie,
                        onKeyUp: le,
                        placeholder: b ? p : ""
                      }, Re)
                    )
                  ]
                }
              ),
              w !== be.Password && P && /* @__PURE__ */ x.jsx("div", { className: "InputBase-icon-end", children: P }),
              w === be.Password && /* @__PURE__ */ x.jsx(
                "button",
                {
                  "aria-label": "toggle password visibility",
                  className: "InputBase-icon-end",
                  onClick: se,
                  children: O ? /* @__PURE__ */ x.jsx(Fr, {}) : /* @__PURE__ */ x.jsx(Ir, {})
                }
              )
            ]
          }
        ),
        h && /* @__PURE__ */ x.jsx(
          "p",
          {
            className: I({
              "Input-helper-text": !0,
              "Input-hint-text": !!g,
              "Input-error-text": !!f,
              "Input-helper-text-dark": !f && m === Ge.Dark
            }),
            children: h
          }
        )
      ]
    }
  );
};
const zr = ({ children: n, bold: u, underline: d, uppercase: s, className: _ }) => /* @__PURE__ */ x.jsx(
  "div",
  {
    className: I({
      Text: !0,
      "Text-bold": !!u,
      "Text-underline": !!d,
      "Text-uppercase": !!s,
      [_ || ""]: !!_
    }),
    children: n
  }
);
var M = /* @__PURE__ */ ((n) => (n.Light = "light", n.Dark = "dark", n.Green = "green", n))(M || {}), ke = /* @__PURE__ */ ((n) => (n.Small = "small", n.Medium = "medium", n.Large = "large", n))(ke || {});
const qr = (n) => {
  const {
    id: u,
    name: d,
    disabled: s,
    children: _,
    value: R,
    label: P,
    className: E,
    onChange: f,
    ariaLabel: g,
    error: h,
    theme: p = M.Light,
    size: b = ke.Medium
  } = n, [w, B] = Ue(!1), [ee, re] = Ue(!1), [S, m] = Ue(s), Z = (A) => {
    s || (B(!w), f && f(!w, A));
  }, Q = (A) => {
    if ((A.key === "Enter" || A.key === " ") && !s) {
      const X = {
        target: {
          ariaLabel: g,
          name: d
        }
      };
      B(!w), f && f(!w, X);
    }
  };
  return Ke(() => {
    m(s);
  }, [s]), Ke(() => {
    B(typeof R == "boolean" ? R : !1);
  }, [R]), Ke(() => {
    re(!!h);
  }, [h]), /* @__PURE__ */ x.jsx(x.Fragment, { children: /* @__PURE__ */ x.jsx("div", { className: "Checkbox", children: /* @__PURE__ */ x.jsxs("label", { children: [
    /* @__PURE__ */ x.jsx(
      "div",
      {
        className: I({
          "Checkbox-checked": w,
          "Checkbox-dark-checked": w && p === M.Dark,
          "Checkbox-green-checked": w && p === M.Green,
          "Checkbox-unchecked": !w,
          "Checkbox-error": ee,
          "Checkbox-disabled": S,
          "Checkbox-green-disabled": S && p === M.Green,
          "Checkbox-dark-disabled": S && p === M.Dark,
          "Checkbox-dark": p === M.Dark,
          "Checkbox-green": p === M.Green,
          [E || ""]: !!E
        }),
        children: /* @__PURE__ */ x.jsxs(
          "div",
          {
            className: I({
              "Checkbox-container": !0,
              "Checkbox-large": b === ke.Large,
              "Checkbox-medium": b === ke.Medium,
              "Checkbox-small": b === ke.Small
            }),
            role: "input",
            tabIndex: 0,
            onKeyDown: Q,
            children: [
              /* @__PURE__ */ x.jsx(
                "input",
                {
                  id: u,
                  type: "checkbox",
                  onChange: Z,
                  "aria-label": g,
                  tabIndex: -1,
                  disabled: S
                }
              ),
              w && !S && /* @__PURE__ */ x.jsx(Nr, {})
            ]
          }
        )
      }
    ),
    (P || _) && /* @__PURE__ */ x.jsx(
      "div",
      {
        className: I({
          "Checkbox-label": !0,
          "Checkbox-label-small": b === ke.Small,
          "Checkbox-label-dark": p === M.Dark,
          "Checkbox-label-green": p === M.Green,
          "Checkbox-label-disabled": S,
          "Checkbox-label-dark-disabled": S && p === M.Dark,
          "Checkbox-label-green-disabled": S && p === M.Green
        }),
        children: P || _
      }
    )
  ] }) }) });
};
var W = /* @__PURE__ */ ((n) => (n.Light = "light", n.Dark = "dark", n.Green = "green", n))(W || {}), K = /* @__PURE__ */ ((n) => (n.Small = "small", n.Medium = "medium", n.Large = "large", n))(K || {});
const Jr = (n) => {
  const {
    id: u,
    name: d,
    className: s,
    checked: _,
    disabled: R,
    ariaLabel: P,
    label: E,
    theme: f = W.Light,
    size: g = K.Medium,
    onChange: h
  } = n, p = (w) => {
    R || h && h(!_, w);
  }, b = (w) => {
    (w.key === "Enter" || w.key === " ") && !R && h && h(!_, {
      target: {
        ariaLabel: P,
        name: d
      }
    });
  };
  return /* @__PURE__ */ x.jsx("div", { className: "Switch-root", children: /* @__PURE__ */ x.jsxs("label", { children: [
    /* @__PURE__ */ x.jsxs(
      "div",
      {
        className: I({
          "Switch-light": f === W.Light,
          "Switch-dark": f === W.Dark,
          "Switch-green": f === W.Green,
          "Switch-large": g === K.Large,
          "Switch-medium": g === K.Medium,
          "Switch-small": g === K.Small,
          "Switch-light-active": _ && f === W.Light,
          "Switch-dark-active": _ && f === W.Dark,
          "Switch-green-active": _ && f === W.Green,
          "Switch-large-active": _ && g === K.Large,
          "Switch-medium-active": _ && g === K.Medium,
          "Switch-small-active": _ && g === K.Small,
          "Switch-disabled": R,
          [s || ""]: !!s
        }),
        tabIndex: 0,
        role: "input",
        onKeyDown: b,
        children: [
          /* @__PURE__ */ x.jsx(
            "input",
            {
              tabIndex: -1,
              type: "checkbox",
              name: d,
              id: u,
              onChange: p
            }
          ),
          /* @__PURE__ */ x.jsx(
            "div",
            {
              className: I({
                "Switch-ellipse": !0
              })
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ x.jsx(
      "div",
      {
        className: I({
          "Switch-label": !0,
          "Switch-label-small": g === K.Small,
          "Switch-label-dark": f === W.Dark,
          "Switch-label-green": f === W.Green
        }),
        children: E
      }
    )
  ] }) });
};
export {
  me as BUTTON_COLOR,
  q as BUTTON_SIZE,
  J as BUTTON_VARIANT,
  Gr as Button,
  ke as CHECKBOX_SIZE,
  M as CHECKBOX_THEME,
  qr as Checkbox,
  we as INPUT_SIZE,
  Ge as INPUT_THEME,
  be as INPUT_TYPE,
  Ur as Input,
  K as SWITCH_SIZE,
  W as SWITCH_THEME,
  Jr as Switch,
  zr as Text
};
