import './index.css';
import Ce from "react";
var ee = { exports: {} }, $ = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Se;
function dr() {
  if (Se)
    return $;
  Se = 1;
  var a = Ce, f = Symbol.for("react.element"), h = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, x = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, R = { key: !0, ref: !0, __self: !0, __source: !0 };
  function w(T, v, E) {
    var p, m = {}, g = null, Y = null;
    E !== void 0 && (g = "" + E), v.key !== void 0 && (g = "" + v.key), v.ref !== void 0 && (Y = v.ref);
    for (p in v)
      s.call(v, p) && !R.hasOwnProperty(p) && (m[p] = v[p]);
    if (T && T.defaultProps)
      for (p in v = T.defaultProps, v)
        m[p] === void 0 && (m[p] = v[p]);
    return { $$typeof: f, type: T, key: g, ref: Y, props: m, _owner: x.current };
  }
  return $.Fragment = h, $.jsx = w, $.jsxs = w, $;
}
var W = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pe;
function vr() {
  return Pe || (Pe = 1, process.env.NODE_ENV !== "production" && function() {
    var a = Ce, f = Symbol.for("react.element"), h = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), x = Symbol.for("react.strict_mode"), R = Symbol.for("react.profiler"), w = Symbol.for("react.provider"), T = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), Y = Symbol.for("react.offscreen"), re = Symbol.iterator, ke = "@@iterator";
    function De(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = re && e[re] || e[ke];
      return typeof r == "function" ? r : null;
    }
    var D = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        Fe("error", e, t);
      }
    }
    function Fe(e, r, t) {
      {
        var n = D.ReactDebugCurrentFrame, u = n.getStackAddendum();
        u !== "" && (r += "%s", t = t.concat([u]));
        var l = t.map(function(i) {
          return String(i);
        });
        l.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, l);
      }
    }
    var Ae = !1, Ie = !1, Be = !1, $e = !1, We = !1, te;
    te = Symbol.for("react.module.reference");
    function Ne(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === s || e === R || We || e === x || e === E || e === p || $e || e === Y || Ae || Ie || Be || typeof e == "object" && e !== null && (e.$$typeof === g || e.$$typeof === m || e.$$typeof === w || e.$$typeof === T || e.$$typeof === v || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === te || e.getModuleId !== void 0));
    }
    function Ye(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var u = r.displayName || r.name || "";
      return u !== "" ? t + "(" + u + ")" : t;
    }
    function ne(e) {
      return e.displayName || "Context";
    }
    function O(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case s:
          return "Fragment";
        case h:
          return "Portal";
        case R:
          return "Profiler";
        case x:
          return "StrictMode";
        case E:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case T:
            var r = e;
            return ne(r) + ".Consumer";
          case w:
            var t = e;
            return ne(t._context) + ".Provider";
          case v:
            return Ye(e, e.render, "ForwardRef");
          case m:
            var n = e.displayName || null;
            return n !== null ? n : O(e.type) || "Memo";
          case g: {
            var u = e, l = u._payload, i = u._init;
            try {
              return O(i(l));
            } catch (o) {
              return null;
            }
          }
        }
      return null;
    }
    var j = Object.assign, I = 0, ae, oe, ie, ue, le, se, fe;
    function ce() {
    }
    ce.__reactDisabledLog = !0;
    function Le() {
      {
        if (I === 0) {
          ae = console.log, oe = console.info, ie = console.warn, ue = console.error, le = console.group, se = console.groupCollapsed, fe = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ce,
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
        I++;
      }
    }
    function Me() {
      {
        if (I--, I === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: j({}, e, {
              value: ae
            }),
            info: j({}, e, {
              value: oe
            }),
            warn: j({}, e, {
              value: ie
            }),
            error: j({}, e, {
              value: ue
            }),
            group: j({}, e, {
              value: le
            }),
            groupCollapsed: j({}, e, {
              value: se
            }),
            groupEnd: j({}, e, {
              value: fe
            })
          });
        }
        I < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var q = D.ReactCurrentDispatcher, J;
    function L(e, r, t) {
      {
        if (J === void 0)
          try {
            throw Error();
          } catch (u) {
            var n = u.stack.trim().match(/\n( *(at )?)/);
            J = n && n[1] || "";
          }
        return `
` + J + e;
      }
    }
    var z = !1, M;
    {
      var Ue = typeof WeakMap == "function" ? WeakMap : Map;
      M = new Ue();
    }
    function de(e, r) {
      if (!e || z)
        return "";
      {
        var t = M.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      z = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var l;
      l = q.current, q.current = null, Le();
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
            } catch (S) {
              n = S;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (S) {
              n = S;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (S) {
            n = S;
          }
          e();
        }
      } catch (S) {
        if (S && n && typeof S.stack == "string") {
          for (var o = S.stack.split(`
`), b = n.stack.split(`
`), c = o.length - 1, d = b.length - 1; c >= 1 && d >= 0 && o[c] !== b[d]; )
            d--;
          for (; c >= 1 && d >= 0; c--, d--)
            if (o[c] !== b[d]) {
              if (c !== 1 || d !== 1)
                do
                  if (c--, d--, d < 0 || o[c] !== b[d]) {
                    var _ = `
` + o[c].replace(" at new ", " at ");
                    return e.displayName && _.includes("<anonymous>") && (_ = _.replace("<anonymous>", e.displayName)), typeof e == "function" && M.set(e, _), _;
                  }
                while (c >= 1 && d >= 0);
              break;
            }
        }
      } finally {
        z = !1, q.current = l, Me(), Error.prepareStackTrace = u;
      }
      var A = e ? e.displayName || e.name : "", Oe = A ? L(A) : "";
      return typeof e == "function" && M.set(e, Oe), Oe;
    }
    function Ve(e, r, t) {
      return de(e, !1);
    }
    function Ge(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function U(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return de(e, Ge(e));
      if (typeof e == "string")
        return L(e);
      switch (e) {
        case E:
          return L("Suspense");
        case p:
          return L("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case v:
            return Ve(e.render);
          case m:
            return U(e.type, r, t);
          case g: {
            var n = e, u = n._payload, l = n._init;
            try {
              return U(l(u), r, t);
            } catch (i) {
            }
          }
        }
      return "";
    }
    var V = Object.prototype.hasOwnProperty, ve = {}, pe = D.ReactDebugCurrentFrame;
    function G(e) {
      if (e) {
        var r = e._owner, t = U(e.type, e._source, r ? r.type : null);
        pe.setExtraStackFrame(t);
      } else
        pe.setExtraStackFrame(null);
    }
    function qe(e, r, t, n, u) {
      {
        var l = Function.call.bind(V);
        for (var i in e)
          if (l(e, i)) {
            var o = void 0;
            try {
              if (typeof e[i] != "function") {
                var b = Error((n || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw b.name = "Invariant Violation", b;
              }
              o = e[i](r, i, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (c) {
              o = c;
            }
            o && !(o instanceof Error) && (G(u), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, i, typeof o), G(null)), o instanceof Error && !(o.message in ve) && (ve[o.message] = !0, G(u), y("Failed %s type: %s", t, o.message), G(null));
          }
      }
    }
    var Je = Array.isArray;
    function K(e) {
      return Je(e);
    }
    function ze(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Ke(e) {
      try {
        return me(e), !1;
      } catch (r) {
        return !0;
      }
    }
    function me(e) {
      return "" + e;
    }
    function ge(e) {
      if (Ke(e))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ze(e)), me(e);
    }
    var B = D.ReactCurrentOwner, He = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ye, be, H;
    H = {};
    function Xe(e) {
      if (V.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ze(e) {
      if (V.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Qe(e, r) {
      if (typeof e.ref == "string" && B.current && r && B.current.stateNode !== r) {
        var t = O(B.current.type);
        H[t] || (y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', O(B.current.type), e.ref), H[t] = !0);
      }
    }
    function er(e, r) {
      {
        var t = function() {
          ye || (ye = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function rr(e, r) {
      {
        var t = function() {
          be || (be = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var tr = function(e, r, t, n, u, l, i) {
      var o = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: f,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: i,
        // Record the component responsible for creating this element.
        _owner: l
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
        value: n
      }), Object.defineProperty(o, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: u
      }), Object.freeze && (Object.freeze(o.props), Object.freeze(o)), o;
    };
    function nr(e, r, t, n, u) {
      {
        var l, i = {}, o = null, b = null;
        t !== void 0 && (ge(t), o = "" + t), Ze(r) && (ge(r.key), o = "" + r.key), Xe(r) && (b = r.ref, Qe(r, u));
        for (l in r)
          V.call(r, l) && !He.hasOwnProperty(l) && (i[l] = r[l]);
        if (e && e.defaultProps) {
          var c = e.defaultProps;
          for (l in c)
            i[l] === void 0 && (i[l] = c[l]);
        }
        if (o || b) {
          var d = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          o && er(i, d), b && rr(i, d);
        }
        return tr(e, o, b, u, n, B.current, i);
      }
    }
    var X = D.ReactCurrentOwner, he = D.ReactDebugCurrentFrame;
    function F(e) {
      if (e) {
        var r = e._owner, t = U(e.type, e._source, r ? r.type : null);
        he.setExtraStackFrame(t);
      } else
        he.setExtraStackFrame(null);
    }
    var Z;
    Z = !1;
    function Q(e) {
      return typeof e == "object" && e !== null && e.$$typeof === f;
    }
    function Ee() {
      {
        if (X.current) {
          var e = O(X.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function ar(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var _e = {};
    function or(e) {
      {
        var r = Ee();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Re(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = or(r);
        if (_e[t])
          return;
        _e[t] = !0;
        var n = "";
        e && e._owner && e._owner !== X.current && (n = " It was passed a child from " + O(e._owner.type) + "."), F(e), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), F(null);
      }
    }
    function Te(e, r) {
      {
        if (typeof e != "object")
          return;
        if (K(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            Q(n) && Re(n, r);
          }
        else if (Q(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var u = De(e);
          if (typeof u == "function" && u !== e.entries)
            for (var l = u.call(e), i; !(i = l.next()).done; )
              Q(i.value) && Re(i.value, r);
        }
      }
    }
    function ir(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === v || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === m))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = O(r);
          qe(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !Z) {
          Z = !0;
          var u = O(r);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", u || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ur(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            F(e), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), F(null);
            break;
          }
        }
        e.ref !== null && (F(e), y("Invalid attribute `ref` supplied to `React.Fragment`."), F(null));
      }
    }
    function xe(e, r, t, n, u, l) {
      {
        var i = Ne(e);
        if (!i) {
          var o = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (o += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var b = ar(u);
          b ? o += b : o += Ee();
          var c;
          e === null ? c = "null" : K(e) ? c = "array" : e !== void 0 && e.$$typeof === f ? (c = "<" + (O(e.type) || "Unknown") + " />", o = " Did you accidentally export a JSX literal instead of a component?") : c = typeof e, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", c, o);
        }
        var d = nr(e, r, t, u, l);
        if (d == null)
          return d;
        if (i) {
          var _ = r.children;
          if (_ !== void 0)
            if (n)
              if (K(_)) {
                for (var A = 0; A < _.length; A++)
                  Te(_[A], e);
                Object.freeze && Object.freeze(_);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Te(_, e);
        }
        return e === s ? ur(d) : ir(d), d;
      }
    }
    function lr(e, r, t) {
      return xe(e, r, t, !0);
    }
    function sr(e, r, t) {
      return xe(e, r, t, !1);
    }
    var fr = sr, cr = lr;
    W.Fragment = s, W.jsx = fr, W.jsxs = cr;
  }()), W;
}
process.env.NODE_ENV === "production" ? ee.exports = dr() : ee.exports = vr();
var N = ee.exports;
function we(a) {
  var f, h, s = "";
  if (typeof a == "string" || typeof a == "number")
    s += a;
  else if (typeof a == "object")
    if (Array.isArray(a))
      for (f = 0; f < a.length; f++)
        a[f] && (h = we(a[f])) && (s && (s += " "), s += h);
    else
      for (f in a)
        a[f] && (s && (s += " "), s += f);
  return s;
}
function je() {
  for (var a, f, h = 0, s = ""; h < arguments.length; )
    (a = arguments[h++]) && (f = we(a)) && (s && (s += " "), s += f);
  return s;
}
var P = /* @__PURE__ */ ((a) => (a.large = "large", a.Medium = "medium", a.Small = "small", a))(P || {}), C = /* @__PURE__ */ ((a) => (a.Contained = "contained", a.Outlined = "outlined", a.Text = "text", a))(C || {}), k = /* @__PURE__ */ ((a) => (a.Primary = "primary", a.Secondary = "secondary", a.Green = "green", a))(k || {});
const mr = (a) => {
  const {
    id: f,
    ariaLabel: h,
    className: s,
    children: x,
    disabled: R,
    rounded: w,
    endIcon: T,
    startIcon: v,
    color: E = k.Primary,
    withIcon: p,
    size: m = P.Medium,
    variant: g = C.Contained
  } = a;
  return /* @__PURE__ */ N.jsx(
    "button",
    {
      "aria-label": h,
      id: f,
      disabled: R,
      className: je({
        Button: !0,
        "Button-contained": g === C.Contained,
        "Button-outlined": g === C.Outlined,
        "Button-outlined-disable": !!R && g === C.Outlined,
        "Button-text": g === C.Text,
        "Button-text-small": m === P.Small && g === C.Text,
        "Button-text-large": m === P.large && g === C.Text,
        "Button-text-disable": !!R && g === C.Text,
        "Button-primary": m === P.Medium,
        "Button-primary-disable": !!R && E === k.Primary,
        "Button-secondary": E === k.Secondary,
        "Button-secondary-disable": !!R && E === k.Secondary,
        "Button-green": E === k.Green,
        "Button-green-disable": !!R && E === k.Green,
        "Button-small": m === P.Small,
        "Button-large": m === P.large,
        "Button-round": !!w,
        "Button-only_icon": !!p,
        "Button-only_icon-small": !!p && m === P.Small,
        "Button-only_icon-large": !!p && m === P.large,
        [s || ""]: !!s
      }),
      children: /* @__PURE__ */ N.jsxs("div", { className: "Button-children", children: [
        v && /* @__PURE__ */ N.jsx("span", { className: "Button-icon-left", children: v }),
        x,
        T && /* @__PURE__ */ N.jsx("span", { className: "Button-icon-right", children: T })
      ] })
    }
  );
};
const gr = ({ children: a, bold: f, underline: h, uppercase: s, className: x }) => /* @__PURE__ */ N.jsx(
  "div",
  {
    className: je({
      Text: !0,
      "Text-bold": !!f,
      "Text-underline": !!h,
      "Text-uppercase": !!s,
      [x || ""]: !!x
    }),
    children: a
  }
);
export {
  mr as Button,
  k as ButtonColor,
  P as ButtonSize,
  C as ButtonVariant,
  gr as Text
};
