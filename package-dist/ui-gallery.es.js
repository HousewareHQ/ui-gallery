import * as u from "react";
import Y, { createContext as dn, forwardRef as Vr, useContext as Lt, version as _v, isValidElement as Pv, useRef as ke, useLayoutEffect as yu, useEffect as ht, useMemo as Yr, useState as pt, Children as Tv, createRef as Nv, useCallback as Gr, useImperativeHandle as Mo, cloneElement as Iv, createElement as Mv, useReducer as Av } from "react";
import * as Lv from "react-dom";
import hl, { createPortal as jv, unstable_batchedUpdates as Fv, flushSync as Dv } from "react-dom";
function Su(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ji = { exports: {} }, ra = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bl;
function zv() {
  if (bl) return ra;
  bl = 1;
  var e = Y, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(s, l, c) {
    var d, f = {}, v = null, m = null;
    c !== void 0 && (v = "" + c), l.key !== void 0 && (v = "" + l.key), l.ref !== void 0 && (m = l.ref);
    for (d in l) n.call(l, d) && !o.hasOwnProperty(d) && (f[d] = l[d]);
    if (s && s.defaultProps) for (d in l = s.defaultProps, l) f[d] === void 0 && (f[d] = l[d]);
    return { $$typeof: t, type: s, key: v, ref: m, props: f, _owner: a.current };
  }
  return ra.Fragment = r, ra.jsx = i, ra.jsxs = i, ra;
}
var na = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yl;
function Vv() {
  return yl || (yl = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Y, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), h = Symbol.iterator, p = "@@iterator";
    function g(P) {
      if (P === null || typeof P != "object")
        return null;
      var K = h && P[h] || P[p];
      return typeof K == "function" ? K : null;
    }
    var S = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function b(P) {
      {
        for (var K = arguments.length, X = new Array(K > 1 ? K - 1 : 0), ce = 1; ce < K; ce++)
          X[ce - 1] = arguments[ce];
        y("error", P, X);
      }
    }
    function y(P, K, X) {
      {
        var ce = S.ReactDebugCurrentFrame, Le = ce.getStackAddendum();
        Le !== "" && (K += "%s", X = X.concat([Le]));
        var Ne = X.map(function(je) {
          return String(je);
        });
        Ne.unshift("Warning: " + K), Function.prototype.apply.call(console[P], console, Ne);
      }
    }
    var w = !1, C = !1, O = !1, _ = !1, $ = !1, R;
    R = Symbol.for("react.module.reference");
    function A(P) {
      return !!(typeof P == "string" || typeof P == "function" || P === n || P === o || $ || P === a || P === c || P === d || _ || P === m || w || C || O || typeof P == "object" && P !== null && (P.$$typeof === v || P.$$typeof === f || P.$$typeof === i || P.$$typeof === s || P.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      P.$$typeof === R || P.getModuleId !== void 0));
    }
    function F(P, K, X) {
      var ce = P.displayName;
      if (ce)
        return ce;
      var Le = K.displayName || K.name || "";
      return Le !== "" ? X + "(" + Le + ")" : X;
    }
    function j(P) {
      return P.displayName || "Context";
    }
    function I(P) {
      if (P == null)
        return null;
      if (typeof P.tag == "number" && b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof P == "function")
        return P.displayName || P.name || null;
      if (typeof P == "string")
        return P;
      switch (P) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case o:
          return "Profiler";
        case a:
          return "StrictMode";
        case c:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof P == "object")
        switch (P.$$typeof) {
          case s:
            var K = P;
            return j(K) + ".Consumer";
          case i:
            var X = P;
            return j(X._context) + ".Provider";
          case l:
            return F(P, P.render, "ForwardRef");
          case f:
            var ce = P.displayName || null;
            return ce !== null ? ce : I(P.type) || "Memo";
          case v: {
            var Le = P, Ne = Le._payload, je = Le._init;
            try {
              return I(je(Ne));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var T = Object.assign, B = 0, N, x, E, L, M, z, H;
    function W() {
    }
    W.__reactDisabledLog = !0;
    function U() {
      {
        if (B === 0) {
          N = console.log, x = console.info, E = console.warn, L = console.error, M = console.group, z = console.groupCollapsed, H = console.groupEnd;
          var P = {
            configurable: !0,
            enumerable: !0,
            value: W,
            writable: !0
          };
          Object.defineProperties(console, {
            info: P,
            log: P,
            warn: P,
            error: P,
            group: P,
            groupCollapsed: P,
            groupEnd: P
          });
        }
        B++;
      }
    }
    function Q() {
      {
        if (B--, B === 0) {
          var P = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: T({}, P, {
              value: N
            }),
            info: T({}, P, {
              value: x
            }),
            warn: T({}, P, {
              value: E
            }),
            error: T({}, P, {
              value: L
            }),
            group: T({}, P, {
              value: M
            }),
            groupCollapsed: T({}, P, {
              value: z
            }),
            groupEnd: T({}, P, {
              value: H
            })
          });
        }
        B < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var q = S.ReactCurrentDispatcher, J;
    function oe(P, K, X) {
      {
        if (J === void 0)
          try {
            throw Error();
          } catch (Le) {
            var ce = Le.stack.trim().match(/\n( *(at )?)/);
            J = ce && ce[1] || "";
          }
        return `
` + J + P;
      }
    }
    var ue = !1, xe;
    {
      var me = typeof WeakMap == "function" ? WeakMap : Map;
      xe = new me();
    }
    function fe(P, K) {
      if (!P || ue)
        return "";
      {
        var X = xe.get(P);
        if (X !== void 0)
          return X;
      }
      var ce;
      ue = !0;
      var Le = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Ne;
      Ne = q.current, q.current = null, U();
      try {
        if (K) {
          var je = function() {
            throw Error();
          };
          if (Object.defineProperty(je.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(je, []);
            } catch (gt) {
              ce = gt;
            }
            Reflect.construct(P, [], je);
          } else {
            try {
              je.call();
            } catch (gt) {
              ce = gt;
            }
            P.call(je.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (gt) {
            ce = gt;
          }
          P();
        }
      } catch (gt) {
        if (gt && ce && typeof gt.stack == "string") {
          for (var De = gt.stack.split(`
`), vt = ce.stack.split(`
`), tt = De.length - 1, Ke = vt.length - 1; tt >= 1 && Ke >= 0 && De[tt] !== vt[Ke]; )
            Ke--;
          for (; tt >= 1 && Ke >= 0; tt--, Ke--)
            if (De[tt] !== vt[Ke]) {
              if (tt !== 1 || Ke !== 1)
                do
                  if (tt--, Ke--, Ke < 0 || De[tt] !== vt[Ke]) {
                    var $t = `
` + De[tt].replace(" at new ", " at ");
                    return P.displayName && $t.includes("<anonymous>") && ($t = $t.replace("<anonymous>", P.displayName)), typeof P == "function" && xe.set(P, $t), $t;
                  }
                while (tt >= 1 && Ke >= 0);
              break;
            }
        }
      } finally {
        ue = !1, q.current = Ne, Q(), Error.prepareStackTrace = Le;
      }
      var Kt = P ? P.displayName || P.name : "", kt = Kt ? oe(Kt) : "";
      return typeof P == "function" && xe.set(P, kt), kt;
    }
    function we(P, K, X) {
      return fe(P, !1);
    }
    function k(P) {
      var K = P.prototype;
      return !!(K && K.isReactComponent);
    }
    function le(P, K, X) {
      if (P == null)
        return "";
      if (typeof P == "function")
        return fe(P, k(P));
      if (typeof P == "string")
        return oe(P);
      switch (P) {
        case c:
          return oe("Suspense");
        case d:
          return oe("SuspenseList");
      }
      if (typeof P == "object")
        switch (P.$$typeof) {
          case l:
            return we(P.render);
          case f:
            return le(P.type, K, X);
          case v: {
            var ce = P, Le = ce._payload, Ne = ce._init;
            try {
              return le(Ne(Le), K, X);
            } catch {
            }
          }
        }
      return "";
    }
    var ge = Object.prototype.hasOwnProperty, $e = {}, ye = S.ReactDebugCurrentFrame;
    function ie(P) {
      if (P) {
        var K = P._owner, X = le(P.type, P._source, K ? K.type : null);
        ye.setExtraStackFrame(X);
      } else
        ye.setExtraStackFrame(null);
    }
    function ne(P, K, X, ce, Le) {
      {
        var Ne = Function.call.bind(ge);
        for (var je in P)
          if (Ne(P, je)) {
            var De = void 0;
            try {
              if (typeof P[je] != "function") {
                var vt = Error((ce || "React class") + ": " + X + " type `" + je + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof P[je] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw vt.name = "Invariant Violation", vt;
              }
              De = P[je](K, je, ce, X, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (tt) {
              De = tt;
            }
            De && !(De instanceof Error) && (ie(Le), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ce || "React class", X, je, typeof De), ie(null)), De instanceof Error && !(De.message in $e) && ($e[De.message] = !0, ie(Le), b("Failed %s type: %s", X, De.message), ie(null));
          }
      }
    }
    var ae = Array.isArray;
    function Se(P) {
      return ae(P);
    }
    function he(P) {
      {
        var K = typeof Symbol == "function" && Symbol.toStringTag, X = K && P[Symbol.toStringTag] || P.constructor.name || "Object";
        return X;
      }
    }
    function be(P) {
      try {
        return Pe(P), !1;
      } catch {
        return !0;
      }
    }
    function Pe(P) {
      return "" + P;
    }
    function pe(P) {
      if (be(P))
        return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", he(P)), Pe(P);
    }
    var ct = S.ReactCurrentOwner, at = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, _e, Oe, Z;
    Z = {};
    function re(P) {
      if (ge.call(P, "ref")) {
        var K = Object.getOwnPropertyDescriptor(P, "ref").get;
        if (K && K.isReactWarning)
          return !1;
      }
      return P.ref !== void 0;
    }
    function Te(P) {
      if (ge.call(P, "key")) {
        var K = Object.getOwnPropertyDescriptor(P, "key").get;
        if (K && K.isReactWarning)
          return !1;
      }
      return P.key !== void 0;
    }
    function Fe(P, K) {
      if (typeof P.ref == "string" && ct.current && K && ct.current.stateNode !== K) {
        var X = I(ct.current.type);
        Z[X] || (b('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', I(ct.current.type), P.ref), Z[X] = !0);
      }
    }
    function Ge(P, K) {
      {
        var X = function() {
          _e || (_e = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", K));
        };
        X.isReactWarning = !0, Object.defineProperty(P, "key", {
          get: X,
          configurable: !0
        });
      }
    }
    function Be(P, K) {
      {
        var X = function() {
          Oe || (Oe = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", K));
        };
        X.isReactWarning = !0, Object.defineProperty(P, "ref", {
          get: X,
          configurable: !0
        });
      }
    }
    var Ie = function(P, K, X, ce, Le, Ne, je) {
      var De = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: P,
        key: K,
        ref: X,
        props: je,
        // Record the component responsible for creating this element.
        _owner: Ne
      };
      return De._store = {}, Object.defineProperty(De._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(De, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ce
      }), Object.defineProperty(De, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Le
      }), Object.freeze && (Object.freeze(De.props), Object.freeze(De)), De;
    };
    function se(P, K, X, ce, Le) {
      {
        var Ne, je = {}, De = null, vt = null;
        X !== void 0 && (pe(X), De = "" + X), Te(K) && (pe(K.key), De = "" + K.key), re(K) && (vt = K.ref, Fe(K, Le));
        for (Ne in K)
          ge.call(K, Ne) && !at.hasOwnProperty(Ne) && (je[Ne] = K[Ne]);
        if (P && P.defaultProps) {
          var tt = P.defaultProps;
          for (Ne in tt)
            je[Ne] === void 0 && (je[Ne] = tt[Ne]);
        }
        if (De || vt) {
          var Ke = typeof P == "function" ? P.displayName || P.name || "Unknown" : P;
          De && Ge(je, Ke), vt && Be(je, Ke);
        }
        return Ie(P, De, vt, Le, ce, ct.current, je);
      }
    }
    var de = S.ReactCurrentOwner, We = S.ReactDebugCurrentFrame;
    function rt(P) {
      if (P) {
        var K = P._owner, X = le(P.type, P._source, K ? K.type : null);
        We.setExtraStackFrame(X);
      } else
        We.setExtraStackFrame(null);
    }
    var Ct;
    Ct = !1;
    function ut(P) {
      return typeof P == "object" && P !== null && P.$$typeof === t;
    }
    function qe() {
      {
        if (de.current) {
          var P = I(de.current.type);
          if (P)
            return `

Check the render method of \`` + P + "`.";
        }
        return "";
      }
    }
    function Ue(P) {
      return "";
    }
    var He = {};
    function Ae(P) {
      {
        var K = qe();
        if (!K) {
          var X = typeof P == "string" ? P : P.displayName || P.name;
          X && (K = `

Check the top-level render call using <` + X + ">.");
        }
        return K;
      }
    }
    function Ce(P, K) {
      {
        if (!P._store || P._store.validated || P.key != null)
          return;
        P._store.validated = !0;
        var X = Ae(K);
        if (He[X])
          return;
        He[X] = !0;
        var ce = "";
        P && P._owner && P._owner !== de.current && (ce = " It was passed a child from " + I(P._owner.type) + "."), rt(P), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', X, ce), rt(null);
      }
    }
    function Qe(P, K) {
      {
        if (typeof P != "object")
          return;
        if (Se(P))
          for (var X = 0; X < P.length; X++) {
            var ce = P[X];
            ut(ce) && Ce(ce, K);
          }
        else if (ut(P))
          P._store && (P._store.validated = !0);
        else if (P) {
          var Le = g(P);
          if (typeof Le == "function" && Le !== P.entries)
            for (var Ne = Le.call(P), je; !(je = Ne.next()).done; )
              ut(je.value) && Ce(je.value, K);
        }
      }
    }
    function yt(P) {
      {
        var K = P.type;
        if (K == null || typeof K == "string")
          return;
        var X;
        if (typeof K == "function")
          X = K.propTypes;
        else if (typeof K == "object" && (K.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        K.$$typeof === f))
          X = K.propTypes;
        else
          return;
        if (X) {
          var ce = I(K);
          ne(X, P.props, "prop", ce, P);
        } else if (K.PropTypes !== void 0 && !Ct) {
          Ct = !0;
          var Le = I(K);
          b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Le || "Unknown");
        }
        typeof K.getDefaultProps == "function" && !K.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Xe(P) {
      {
        for (var K = Object.keys(P.props), X = 0; X < K.length; X++) {
          var ce = K[X];
          if (ce !== "children" && ce !== "key") {
            rt(P), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ce), rt(null);
            break;
          }
        }
        P.ref !== null && (rt(P), b("Invalid attribute `ref` supplied to `React.Fragment`."), rt(null));
      }
    }
    var Ye = {};
    function it(P, K, X, ce, Le, Ne) {
      {
        var je = A(P);
        if (!je) {
          var De = "";
          (P === void 0 || typeof P == "object" && P !== null && Object.keys(P).length === 0) && (De += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var vt = Ue();
          vt ? De += vt : De += qe();
          var tt;
          P === null ? tt = "null" : Se(P) ? tt = "array" : P !== void 0 && P.$$typeof === t ? (tt = "<" + (I(P.type) || "Unknown") + " />", De = " Did you accidentally export a JSX literal instead of a component?") : tt = typeof P, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", tt, De);
        }
        var Ke = se(P, K, X, Le, Ne);
        if (Ke == null)
          return Ke;
        if (je) {
          var $t = K.children;
          if ($t !== void 0)
            if (ce)
              if (Se($t)) {
                for (var Kt = 0; Kt < $t.length; Kt++)
                  Qe($t[Kt], P);
                Object.freeze && Object.freeze($t);
              } else
                b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Qe($t, P);
        }
        if (ge.call(K, "key")) {
          var kt = I(P), gt = Object.keys(K).filter(function(Ut) {
            return Ut !== "key";
          }), Er = gt.length > 0 ? "{key: someKey, " + gt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ye[kt + Er]) {
            var kr = gt.length > 0 ? "{" + gt.join(": ..., ") + ": ...}" : "{}";
            b(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Er, kt, kr, kt), Ye[kt + Er] = !0;
          }
        }
        return P === n ? Xe(Ke) : yt(Ke), Ke;
      }
    }
    function St(P, K, X) {
      return it(P, K, X, !0);
    }
    function Pt(P, K, X) {
      return it(P, K, X, !1);
    }
    var Vt = Pt, Wt = St;
    na.Fragment = n, na.jsx = Vt, na.jsxs = Wt;
  }()), na;
}
process.env.NODE_ENV === "production" ? ji.exports = zv() : ji.exports = Vv();
var Qt = ji.exports;
const yw = ({
  primary: e = !1,
  size: t = "medium",
  backgroundColor: r,
  label: n,
  ...a
}) => {
  const o = e ? "storybook-button--primary" : "storybook-button--secondary";
  return /* @__PURE__ */ Qt.jsx(
    "button",
    {
      type: "button",
      className: ["storybook-button", `storybook-button--${t}`, o].join(" "),
      style: { backgroundColor: r },
      ...a,
      children: n
    }
  );
}, kv = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ Y.createElement(Y.Fragment, null, /* @__PURE__ */ Y.createElement("path", { d: "M230.14,25.86a20,20,0,0,0-19.57-5.11l-.22.07L18.44,79a20,20,0,0,0-3.06,37.25L99,157l40.71,83.65a19.81,19.81,0,0,0,18,11.38c.57,0,1.15,0,1.73-.07A19.82,19.82,0,0,0,177,237.56L235.18,45.65a1.42,1.42,0,0,0,.07-.22A20,20,0,0,0,230.14,25.86ZM156.91,221.07l-34.37-70.64,46-45.95a12,12,0,0,0-17-17l-46,46L34.93,99.09,210,46Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ Y.createElement(Y.Fragment, null, /* @__PURE__ */ Y.createElement(
      "path",
      {
        d: "M223.69,42.18l-58.22,192a8,8,0,0,1-14.92,1.25L108,148,20.58,105.45a8,8,0,0,1,1.25-14.92l192-58.22A8,8,0,0,1,223.69,42.18Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ Y.createElement("path", { d: "M227.32,28.68a16,16,0,0,0-15.66-4.08l-.15,0L19.57,82.84a16,16,0,0,0-2.49,29.8L102,154l41.3,84.87A15.86,15.86,0,0,0,157.74,248q.69,0,1.38-.06a15.88,15.88,0,0,0,14-11.51l58.2-191.94c0-.05,0-.1,0-.15A16,16,0,0,0,227.32,28.68ZM157.83,231.85l-.05.14,0-.07-40.06-82.3,48-48a8,8,0,0,0-11.31-11.31l-48,48L24.08,98.25l-.07,0,.14,0L216,40Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ Y.createElement(Y.Fragment, null, /* @__PURE__ */ Y.createElement("path", { d: "M231.4,44.34s0,.1,0,.15l-58.2,191.94a15.88,15.88,0,0,1-14,11.51q-.69.06-1.38.06a15.86,15.86,0,0,1-14.42-9.15L107,164.15a4,4,0,0,1,.77-4.58l57.92-57.92a8,8,0,0,0-11.31-11.31L96.43,148.26a4,4,0,0,1-4.58.77L17.08,112.64a16,16,0,0,1,2.49-29.8l191.94-58.2.15,0A16,16,0,0,1,231.4,44.34Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ Y.createElement(Y.Fragment, null, /* @__PURE__ */ Y.createElement("path", { d: "M225.88,30.12a13.83,13.83,0,0,0-13.7-3.58l-.11,0L20.14,84.77A14,14,0,0,0,18,110.85l85.56,41.64L145.12,238a13.87,13.87,0,0,0,12.61,8c.4,0,.81,0,1.21-.05a13.9,13.9,0,0,0,12.29-10.09l58.2-191.93,0-.11A13.83,13.83,0,0,0,225.88,30.12Zm-8,10.4L159.73,232.43l0,.11a2,2,0,0,1-3.76.26l-40.68-83.58,49-49a6,6,0,1,0-8.49-8.49l-49,49L23.15,100a2,2,0,0,1,.31-3.74l.11,0L215.48,38.08a1.94,1.94,0,0,1,1.92.52A2,2,0,0,1,217.92,40.52Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ Y.createElement(Y.Fragment, null, /* @__PURE__ */ Y.createElement("path", { d: "M227.32,28.68a16,16,0,0,0-15.66-4.08l-.15,0L19.57,82.84a16,16,0,0,0-2.49,29.8L102,154l41.3,84.87A15.86,15.86,0,0,0,157.74,248q.69,0,1.38-.06a15.88,15.88,0,0,0,14-11.51l58.2-191.94c0-.05,0-.1,0-.15A16,16,0,0,0,227.32,28.68ZM157.83,231.85l-.05.14,0-.07-40.06-82.3,48-48a8,8,0,0,0-11.31-11.31l-48,48L24.08,98.25l-.07,0,.14,0L216,40Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ Y.createElement(Y.Fragment, null, /* @__PURE__ */ Y.createElement("path", { d: "M224.47,31.52a11.87,11.87,0,0,0-11.82-3L20.74,86.67a12,12,0,0,0-1.91,22.38L105,151l41.92,86.15A11.88,11.88,0,0,0,157.74,244c.34,0,.69,0,1,0a11.89,11.89,0,0,0,10.52-8.63l58.21-192,0-.08A11.85,11.85,0,0,0,224.47,31.52Zm-4.62,9.54-58.23,192a4,4,0,0,1-7.48.59l-41.3-84.86,50-50a4,4,0,1,0-5.66-5.66l-50,50-84.9-41.31a3.88,3.88,0,0,1-2.27-4,3.93,3.93,0,0,1,3-3.54L214.9,36.16A3.93,3.93,0,0,1,216,36a4,4,0,0,1,2.79,1.19A3.93,3.93,0,0,1,219.85,41.06Z" }))
  ]
]), Bv = dn({
  color: "currentColor",
  size: "1em",
  weight: "regular",
  mirrored: !1
});
var Hv = Object.defineProperty, So = Object.getOwnPropertySymbols, Cu = Object.prototype.hasOwnProperty, Eu = Object.prototype.propertyIsEnumerable, Sl = (e, t, r) => t in e ? Hv(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, Cl = (e, t) => {
  for (var r in t || (t = {}))
    Cu.call(t, r) && Sl(e, r, t[r]);
  if (So)
    for (var r of So(t))
      Eu.call(t, r) && Sl(e, r, t[r]);
  return e;
}, El = (e, t) => {
  var r = {};
  for (var n in e)
    Cu.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && So)
    for (var n of So(e))
      t.indexOf(n) < 0 && Eu.call(e, n) && (r[n] = e[n]);
  return r;
};
const wu = Vr((e, t) => {
  const r = e, {
    alt: n,
    color: a,
    size: o,
    weight: i,
    mirrored: s,
    children: l,
    weights: c
  } = r, d = El(r, [
    "alt",
    "color",
    "size",
    "weight",
    "mirrored",
    "children",
    "weights"
  ]), f = Lt(Bv), {
    color: v = "currentColor",
    size: m,
    weight: h = "regular",
    mirrored: p = !1
  } = f, g = El(f, [
    "color",
    "size",
    "weight",
    "mirrored"
  ]);
  return /* @__PURE__ */ Y.createElement(
    "svg",
    Cl(Cl({
      ref: t,
      xmlns: "http://www.w3.org/2000/svg",
      width: o ?? m,
      height: o ?? m,
      fill: a ?? v,
      viewBox: "0 0 256 256",
      transform: s || p ? "scale(-1, 1)" : void 0
    }, g), d),
    !!n && /* @__PURE__ */ Y.createElement("title", null, n),
    l,
    c.get(i ?? h)
  );
});
wu.displayName = "IconBase";
const Wv = wu;
var Kv = Object.defineProperty, Uv = Object.defineProperties, Gv = Object.getOwnPropertyDescriptors, wl = Object.getOwnPropertySymbols, qv = Object.prototype.hasOwnProperty, Xv = Object.prototype.propertyIsEnumerable, xl = (e, t, r) => t in e ? Kv(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, Yv = (e, t) => {
  for (var r in t || (t = {}))
    qv.call(t, r) && xl(e, r, t[r]);
  if (wl)
    for (var r of wl(t))
      Xv.call(t, r) && xl(e, r, t[r]);
  return e;
}, Zv = (e, t) => Uv(e, Gv(t));
const xu = Vr((e, t) => /* @__PURE__ */ Y.createElement(Wv, Zv(Yv({ ref: t }, e), { weights: kv })));
xu.displayName = "PaperPlaneTilt";
var $u = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function r() {
      for (var o = "", i = 0; i < arguments.length; i++) {
        var s = arguments[i];
        s && (o = a(o, n(s)));
      }
      return o;
    }
    function n(o) {
      if (typeof o == "string" || typeof o == "number")
        return o;
      if (typeof o != "object")
        return "";
      if (Array.isArray(o))
        return r.apply(null, o);
      if (o.toString !== Object.prototype.toString && !o.toString.toString().includes("[native code]"))
        return o.toString();
      var i = "";
      for (var s in o)
        t.call(o, s) && o[s] && (i = a(i, s));
      return i;
    }
    function a(o, i) {
      return i ? o ? o + " " + i : o + i : o;
    }
    e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
  })();
})($u);
var Qv = $u.exports;
const ee = /* @__PURE__ */ Su(Qv);
function Me() {
  return Me = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Me.apply(null, arguments);
}
var Fi = { exports: {} }, st = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $l;
function Jv() {
  if ($l) return st;
  $l = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), i = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), h;
  h = Symbol.for("react.module.reference");
  function p(g) {
    if (typeof g == "object" && g !== null) {
      var S = g.$$typeof;
      switch (S) {
        case e:
          switch (g = g.type, g) {
            case r:
            case a:
            case n:
            case c:
            case d:
              return g;
            default:
              switch (g = g && g.$$typeof, g) {
                case s:
                case i:
                case l:
                case v:
                case f:
                case o:
                  return g;
                default:
                  return S;
              }
          }
        case t:
          return S;
      }
    }
  }
  return st.ContextConsumer = i, st.ContextProvider = o, st.Element = e, st.ForwardRef = l, st.Fragment = r, st.Lazy = v, st.Memo = f, st.Portal = t, st.Profiler = a, st.StrictMode = n, st.Suspense = c, st.SuspenseList = d, st.isAsyncMode = function() {
    return !1;
  }, st.isConcurrentMode = function() {
    return !1;
  }, st.isContextConsumer = function(g) {
    return p(g) === i;
  }, st.isContextProvider = function(g) {
    return p(g) === o;
  }, st.isElement = function(g) {
    return typeof g == "object" && g !== null && g.$$typeof === e;
  }, st.isForwardRef = function(g) {
    return p(g) === l;
  }, st.isFragment = function(g) {
    return p(g) === r;
  }, st.isLazy = function(g) {
    return p(g) === v;
  }, st.isMemo = function(g) {
    return p(g) === f;
  }, st.isPortal = function(g) {
    return p(g) === t;
  }, st.isProfiler = function(g) {
    return p(g) === a;
  }, st.isStrictMode = function(g) {
    return p(g) === n;
  }, st.isSuspense = function(g) {
    return p(g) === c;
  }, st.isSuspenseList = function(g) {
    return p(g) === d;
  }, st.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === r || g === a || g === n || g === c || g === d || g === m || typeof g == "object" && g !== null && (g.$$typeof === v || g.$$typeof === f || g.$$typeof === o || g.$$typeof === i || g.$$typeof === l || g.$$typeof === h || g.getModuleId !== void 0);
  }, st.typeOf = p, st;
}
var lt = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ol;
function eg() {
  return Ol || (Ol = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), i = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), h = !1, p = !1, g = !1, S = !1, b = !1, y;
    y = Symbol.for("react.module.reference");
    function w(k) {
      return !!(typeof k == "string" || typeof k == "function" || k === r || k === a || b || k === n || k === c || k === d || S || k === m || h || p || g || typeof k == "object" && k !== null && (k.$$typeof === v || k.$$typeof === f || k.$$typeof === o || k.$$typeof === i || k.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      k.$$typeof === y || k.getModuleId !== void 0));
    }
    function C(k) {
      if (typeof k == "object" && k !== null) {
        var le = k.$$typeof;
        switch (le) {
          case e:
            var ge = k.type;
            switch (ge) {
              case r:
              case a:
              case n:
              case c:
              case d:
                return ge;
              default:
                var $e = ge && ge.$$typeof;
                switch ($e) {
                  case s:
                  case i:
                  case l:
                  case v:
                  case f:
                  case o:
                    return $e;
                  default:
                    return le;
                }
            }
          case t:
            return le;
        }
      }
    }
    var O = i, _ = o, $ = e, R = l, A = r, F = v, j = f, I = t, T = a, B = n, N = c, x = d, E = !1, L = !1;
    function M(k) {
      return E || (E = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function z(k) {
      return L || (L = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function H(k) {
      return C(k) === i;
    }
    function W(k) {
      return C(k) === o;
    }
    function U(k) {
      return typeof k == "object" && k !== null && k.$$typeof === e;
    }
    function Q(k) {
      return C(k) === l;
    }
    function q(k) {
      return C(k) === r;
    }
    function J(k) {
      return C(k) === v;
    }
    function oe(k) {
      return C(k) === f;
    }
    function ue(k) {
      return C(k) === t;
    }
    function xe(k) {
      return C(k) === a;
    }
    function me(k) {
      return C(k) === n;
    }
    function fe(k) {
      return C(k) === c;
    }
    function we(k) {
      return C(k) === d;
    }
    lt.ContextConsumer = O, lt.ContextProvider = _, lt.Element = $, lt.ForwardRef = R, lt.Fragment = A, lt.Lazy = F, lt.Memo = j, lt.Portal = I, lt.Profiler = T, lt.StrictMode = B, lt.Suspense = N, lt.SuspenseList = x, lt.isAsyncMode = M, lt.isConcurrentMode = z, lt.isContextConsumer = H, lt.isContextProvider = W, lt.isElement = U, lt.isForwardRef = Q, lt.isFragment = q, lt.isLazy = J, lt.isMemo = oe, lt.isPortal = ue, lt.isProfiler = xe, lt.isStrictMode = me, lt.isSuspense = fe, lt.isSuspenseList = we, lt.isValidElementType = w, lt.typeOf = C;
  }()), lt;
}
process.env.NODE_ENV === "production" ? Fi.exports = Jv() : Fi.exports = eg();
var fa = Fi.exports;
function Zr(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = [];
  return Y.Children.forEach(e, function(n) {
    n == null && !t.keepEmpty || (Array.isArray(n) ? r = r.concat(Zr(n)) : fa.isFragment(n) && n.props ? r = r.concat(Zr(n.props.children, t)) : r.push(n));
  }), r;
}
var Di = {}, js = [], tg = function(t) {
  js.push(t);
};
function Ln(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var r = js.reduce(function(n, a) {
      return a(n ?? "", "warning");
    }, t);
    r && console.error("Warning: ".concat(r));
  }
}
function rg(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var r = js.reduce(function(n, a) {
      return a(n ?? "", "note");
    }, t);
    r && console.warn("Note: ".concat(r));
  }
}
function Ou() {
  Di = {};
}
function Ru(e, t, r) {
  !t && !Di[r] && (e(!1, r), Di[r] = !0);
}
function ot(e, t) {
  Ru(Ln, e, t);
}
function ng(e, t) {
  Ru(rg, e, t);
}
ot.preMessage = tg;
ot.resetWarned = Ou;
ot.noteOnce = ng;
function ze(e) {
  "@babel/helpers - typeof";
  return ze = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ze(e);
}
function ag(e, t) {
  if (ze(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ze(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function _u(e) {
  var t = ag(e, "string");
  return ze(t) == "symbol" ? t : t + "";
}
function D(e, t, r) {
  return (t = _u(t)) in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function Rl(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function V(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Rl(Object(r), !0).forEach(function(n) {
      D(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Rl(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function ha(e) {
  return e instanceof HTMLElement || e instanceof SVGElement;
}
function og(e) {
  return e && ze(e) === "object" && ha(e.nativeElement) ? e.nativeElement : ha(e) ? e : null;
}
function lo(e) {
  var t = og(e);
  if (t)
    return t;
  if (e instanceof Y.Component) {
    var r;
    return (r = hl.findDOMNode) === null || r === void 0 ? void 0 : r.call(hl, e);
  }
  return null;
}
function Ao(e, t, r) {
  var n = u.useRef({});
  return (!("value" in n.current) || r(n.current.condition, t)) && (n.current.value = e(), n.current.condition = t), n.current.value;
}
var Fs = function(t, r) {
  typeof t == "function" ? t(r) : ze(t) === "object" && t && "current" in t && (t.current = r);
}, _r = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  var a = r.filter(Boolean);
  return a.length <= 1 ? a[0] : function(o) {
    r.forEach(function(i) {
      Fs(i, o);
    });
  };
}, Ia = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  return Ao(function() {
    return _r.apply(void 0, r);
  }, r, function(a, o) {
    return a.length !== o.length || a.every(function(i, s) {
      return i !== o[s];
    });
  });
}, fn = function(t) {
  var r, n, a = fa.isMemo(t) ? t.type.type : t.type;
  return !(typeof a == "function" && !((r = a.prototype) !== null && r !== void 0 && r.render) && a.$$typeof !== fa.ForwardRef || typeof t == "function" && !((n = t.prototype) !== null && n !== void 0 && n.render) && t.$$typeof !== fa.ForwardRef);
};
function _l(e) {
  return /* @__PURE__ */ Pv(e) && !fa.isFragment(e);
}
Number(_v.split(".")[0]) >= 19;
var zi = /* @__PURE__ */ u.createContext(null);
function ig(e) {
  var t = e.children, r = e.onBatchResize, n = u.useRef(0), a = u.useRef([]), o = u.useContext(zi), i = u.useCallback(function(s, l, c) {
    n.current += 1;
    var d = n.current;
    a.current.push({
      size: s,
      element: l,
      data: c
    }), Promise.resolve().then(function() {
      d === n.current && (r == null || r(a.current), a.current = []);
    }), o == null || o(s, l, c);
  }, [r, o]);
  return /* @__PURE__ */ u.createElement(zi.Provider, {
    value: i
  }, t);
}
var Pu = function() {
  if (typeof Map < "u")
    return Map;
  function e(t, r) {
    var n = -1;
    return t.some(function(a, o) {
      return a[0] === r ? (n = o, !0) : !1;
    }), n;
  }
  return (
    /** @class */
    function() {
      function t() {
        this.__entries__ = [];
      }
      return Object.defineProperty(t.prototype, "size", {
        /**
         * @returns {boolean}
         */
        get: function() {
          return this.__entries__.length;
        },
        enumerable: !0,
        configurable: !0
      }), t.prototype.get = function(r) {
        var n = e(this.__entries__, r), a = this.__entries__[n];
        return a && a[1];
      }, t.prototype.set = function(r, n) {
        var a = e(this.__entries__, r);
        ~a ? this.__entries__[a][1] = n : this.__entries__.push([r, n]);
      }, t.prototype.delete = function(r) {
        var n = this.__entries__, a = e(n, r);
        ~a && n.splice(a, 1);
      }, t.prototype.has = function(r) {
        return !!~e(this.__entries__, r);
      }, t.prototype.clear = function() {
        this.__entries__.splice(0);
      }, t.prototype.forEach = function(r, n) {
        n === void 0 && (n = null);
        for (var a = 0, o = this.__entries__; a < o.length; a++) {
          var i = o[a];
          r.call(n, i[1], i[0]);
        }
      }, t;
    }()
  );
}(), Vi = typeof window < "u" && typeof document < "u" && window.document === document, Co = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), sg = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(Co) : function(e) {
    return setTimeout(function() {
      return e(Date.now());
    }, 1e3 / 60);
  };
}(), lg = 2;
function cg(e, t) {
  var r = !1, n = !1, a = 0;
  function o() {
    r && (r = !1, e()), n && s();
  }
  function i() {
    sg(o);
  }
  function s() {
    var l = Date.now();
    if (r) {
      if (l - a < lg)
        return;
      n = !0;
    } else
      r = !0, n = !1, setTimeout(i, t);
    a = l;
  }
  return s;
}
var ug = 20, dg = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], fg = typeof MutationObserver < "u", vg = (
  /** @class */
  function() {
    function e() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = cg(this.refresh.bind(this), ug);
    }
    return e.prototype.addObserver = function(t) {
      ~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_();
    }, e.prototype.removeObserver = function(t) {
      var r = this.observers_, n = r.indexOf(t);
      ~n && r.splice(n, 1), !r.length && this.connected_ && this.disconnect_();
    }, e.prototype.refresh = function() {
      var t = this.updateObservers_();
      t && this.refresh();
    }, e.prototype.updateObservers_ = function() {
      var t = this.observers_.filter(function(r) {
        return r.gatherActive(), r.hasActive();
      });
      return t.forEach(function(r) {
        return r.broadcastActive();
      }), t.length > 0;
    }, e.prototype.connect_ = function() {
      !Vi || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), fg ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, e.prototype.disconnect_ = function() {
      !Vi || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, e.prototype.onTransitionEnd_ = function(t) {
      var r = t.propertyName, n = r === void 0 ? "" : r, a = dg.some(function(o) {
        return !!~n.indexOf(o);
      });
      a && this.refresh();
    }, e.getInstance = function() {
      return this.instance_ || (this.instance_ = new e()), this.instance_;
    }, e.instance_ = null, e;
  }()
), Tu = function(e, t) {
  for (var r = 0, n = Object.keys(t); r < n.length; r++) {
    var a = n[r];
    Object.defineProperty(e, a, {
      value: t[a],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return e;
}, jn = function(e) {
  var t = e && e.ownerDocument && e.ownerDocument.defaultView;
  return t || Co;
}, Nu = Lo(0, 0, 0, 0);
function Eo(e) {
  return parseFloat(e) || 0;
}
function Pl(e) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  return t.reduce(function(n, a) {
    var o = e["border-" + a + "-width"];
    return n + Eo(o);
  }, 0);
}
function gg(e) {
  for (var t = ["top", "right", "bottom", "left"], r = {}, n = 0, a = t; n < a.length; n++) {
    var o = a[n], i = e["padding-" + o];
    r[o] = Eo(i);
  }
  return r;
}
function mg(e) {
  var t = e.getBBox();
  return Lo(0, 0, t.width, t.height);
}
function pg(e) {
  var t = e.clientWidth, r = e.clientHeight;
  if (!t && !r)
    return Nu;
  var n = jn(e).getComputedStyle(e), a = gg(n), o = a.left + a.right, i = a.top + a.bottom, s = Eo(n.width), l = Eo(n.height);
  if (n.boxSizing === "border-box" && (Math.round(s + o) !== t && (s -= Pl(n, "left", "right") + o), Math.round(l + i) !== r && (l -= Pl(n, "top", "bottom") + i)), !bg(e)) {
    var c = Math.round(s + o) - t, d = Math.round(l + i) - r;
    Math.abs(c) !== 1 && (s -= c), Math.abs(d) !== 1 && (l -= d);
  }
  return Lo(a.left, a.top, s, l);
}
var hg = /* @__PURE__ */ function() {
  return typeof SVGGraphicsElement < "u" ? function(e) {
    return e instanceof jn(e).SVGGraphicsElement;
  } : function(e) {
    return e instanceof jn(e).SVGElement && typeof e.getBBox == "function";
  };
}();
function bg(e) {
  return e === jn(e).document.documentElement;
}
function yg(e) {
  return Vi ? hg(e) ? mg(e) : pg(e) : Nu;
}
function Sg(e) {
  var t = e.x, r = e.y, n = e.width, a = e.height, o = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, i = Object.create(o.prototype);
  return Tu(i, {
    x: t,
    y: r,
    width: n,
    height: a,
    top: r,
    right: t + n,
    bottom: a + r,
    left: t
  }), i;
}
function Lo(e, t, r, n) {
  return { x: e, y: t, width: r, height: n };
}
var Cg = (
  /** @class */
  function() {
    function e(t) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Lo(0, 0, 0, 0), this.target = t;
    }
    return e.prototype.isActive = function() {
      var t = yg(this.target);
      return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight;
    }, e.prototype.broadcastRect = function() {
      var t = this.contentRect_;
      return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t;
    }, e;
  }()
), Eg = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(t, r) {
      var n = Sg(r);
      Tu(this, { target: t, contentRect: n });
    }
    return e;
  }()
), wg = (
  /** @class */
  function() {
    function e(t, r, n) {
      if (this.activeObservations_ = [], this.observations_ = new Pu(), typeof t != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = t, this.controller_ = r, this.callbackCtx_ = n;
    }
    return e.prototype.observe = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof jn(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var r = this.observations_;
        r.has(t) || (r.set(t, new Cg(t)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, e.prototype.unobserve = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof jn(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var r = this.observations_;
        r.has(t) && (r.delete(t), r.size || this.controller_.removeObserver(this));
      }
    }, e.prototype.disconnect = function() {
      this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
    }, e.prototype.gatherActive = function() {
      var t = this;
      this.clearActive(), this.observations_.forEach(function(r) {
        r.isActive() && t.activeObservations_.push(r);
      });
    }, e.prototype.broadcastActive = function() {
      if (this.hasActive()) {
        var t = this.callbackCtx_, r = this.activeObservations_.map(function(n) {
          return new Eg(n.target, n.broadcastRect());
        });
        this.callback_.call(t, r, t), this.clearActive();
      }
    }, e.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, e.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, e;
  }()
), Iu = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new Pu(), Mu = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(t) {
      if (!(this instanceof e))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var r = vg.getInstance(), n = new wg(t, r, this);
      Iu.set(this, n);
    }
    return e;
  }()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(e) {
  Mu.prototype[e] = function() {
    var t;
    return (t = Iu.get(this))[e].apply(t, arguments);
  };
});
var xg = function() {
  return typeof Co.ResizeObserver < "u" ? Co.ResizeObserver : Mu;
}(), jr = /* @__PURE__ */ new Map();
function Au(e) {
  e.forEach(function(t) {
    var r, n = t.target;
    (r = jr.get(n)) === null || r === void 0 || r.forEach(function(a) {
      return a(n);
    });
  });
}
var Lu = new xg(Au);
process.env.NODE_ENV;
process.env.NODE_ENV;
function $g(e, t) {
  jr.has(e) || (jr.set(e, /* @__PURE__ */ new Set()), Lu.observe(e)), jr.get(e).add(t);
}
function Og(e, t) {
  jr.has(e) && (jr.get(e).delete(t), jr.get(e).size || (Lu.unobserve(e), jr.delete(e)));
}
function Dt(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Tl(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, _u(n.key), n);
  }
}
function zt(e, t, r) {
  return t && Tl(e.prototype, t), r && Tl(e, r), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function ba(e, t) {
  return ba = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
    return r.__proto__ = n, r;
  }, ba(e, t);
}
function Qr(e, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(e, "prototype", {
    writable: !1
  }), t && ba(e, t);
}
function ya(e) {
  return ya = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, ya(e);
}
function Ds() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Ds = function() {
    return !!e;
  })();
}
function Ze(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Rg(e, t) {
  if (t && (ze(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return Ze(e);
}
function Jr(e) {
  var t = Ds();
  return function() {
    var r, n = ya(e);
    if (t) {
      var a = ya(this).constructor;
      r = Reflect.construct(n, arguments, a);
    } else r = n.apply(this, arguments);
    return Rg(this, r);
  };
}
var _g = /* @__PURE__ */ function(e) {
  Qr(r, e);
  var t = Jr(r);
  function r() {
    return Dt(this, r), t.apply(this, arguments);
  }
  return zt(r, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), r;
}(u.Component);
function Pg(e, t) {
  var r = e.children, n = e.disabled, a = u.useRef(null), o = u.useRef(null), i = u.useContext(zi), s = typeof r == "function", l = s ? r(a) : r, c = u.useRef({
    width: -1,
    height: -1,
    offsetWidth: -1,
    offsetHeight: -1
  }), d = !s && /* @__PURE__ */ u.isValidElement(l) && fn(l), f = d ? l.ref : null, v = Ia(f, a), m = function() {
    var S;
    return lo(a.current) || // Support `nativeElement` format
    (a.current && ze(a.current) === "object" ? lo((S = a.current) === null || S === void 0 ? void 0 : S.nativeElement) : null) || lo(o.current);
  };
  u.useImperativeHandle(t, function() {
    return m();
  });
  var h = u.useRef(e);
  h.current = e;
  var p = u.useCallback(function(g) {
    var S = h.current, b = S.onResize, y = S.data, w = g.getBoundingClientRect(), C = w.width, O = w.height, _ = g.offsetWidth, $ = g.offsetHeight, R = Math.floor(C), A = Math.floor(O);
    if (c.current.width !== R || c.current.height !== A || c.current.offsetWidth !== _ || c.current.offsetHeight !== $) {
      var F = {
        width: R,
        height: A,
        offsetWidth: _,
        offsetHeight: $
      };
      c.current = F;
      var j = _ === Math.round(C) ? C : _, I = $ === Math.round(O) ? O : $, T = V(V({}, F), {}, {
        offsetWidth: j,
        offsetHeight: I
      });
      i == null || i(T, g, y), b && Promise.resolve().then(function() {
        b(T, g);
      });
    }
  }, []);
  return u.useEffect(function() {
    var g = m();
    return g && !n && $g(g, p), function() {
      return Og(g, p);
    };
  }, [a.current, n]), /* @__PURE__ */ u.createElement(_g, {
    ref: o
  }, d ? /* @__PURE__ */ u.cloneElement(l, {
    ref: v
  }) : l);
}
var ju = /* @__PURE__ */ u.forwardRef(Pg);
process.env.NODE_ENV !== "production" && (ju.displayName = "SingleObserver");
var Tg = "rc-observer-key";
function Ng(e, t) {
  var r = e.children, n = typeof r == "function" ? [r] : Zr(r);
  return process.env.NODE_ENV !== "production" && (n.length > 1 ? Ln(!1, "Find more than one child node with `children` in ResizeObserver. Please use ResizeObserver.Collection instead.") : n.length === 0 && Ln(!1, "`children` of ResizeObserver is empty. Nothing is in observe.")), n.map(function(a, o) {
    var i = (a == null ? void 0 : a.key) || "".concat(Tg, "-").concat(o);
    return /* @__PURE__ */ u.createElement(ju, Me({}, e, {
      key: i,
      ref: o === 0 ? t : void 0
    }), a);
  });
}
var hr = /* @__PURE__ */ u.forwardRef(Ng);
process.env.NODE_ENV !== "production" && (hr.displayName = "ResizeObserver");
hr.Collection = ig;
function Cr(e, t) {
  var r = Object.assign({}, e);
  return Array.isArray(t) && t.forEach(function(n) {
    delete r[n];
  }), r;
}
function ki(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Ig(e) {
  if (Array.isArray(e)) return ki(e);
}
function Fu(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function zs(e, t) {
  if (e) {
    if (typeof e == "string") return ki(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? ki(e, t) : void 0;
  }
}
function Mg() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ee(e) {
  return Ig(e) || Fu(e) || zs(e) || Mg();
}
var Du = function(t) {
  return +setTimeout(t, 16);
}, zu = function(t) {
  return clearTimeout(t);
};
typeof window < "u" && "requestAnimationFrame" in window && (Du = function(t) {
  return window.requestAnimationFrame(t);
}, zu = function(t) {
  return window.cancelAnimationFrame(t);
});
var Nl = 0, jo = /* @__PURE__ */ new Map();
function Vu(e) {
  jo.delete(e);
}
var Nt = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  Nl += 1;
  var n = Nl;
  function a(o) {
    if (o === 0)
      Vu(n), t();
    else {
      var i = Du(function() {
        a(o - 1);
      });
      jo.set(n, i);
    }
  }
  return a(r), n;
};
Nt.cancel = function(e) {
  var t = jo.get(e);
  return Vu(e), zu(t);
};
process.env.NODE_ENV !== "production" && (Nt.ids = function() {
  return jo;
});
function ku(e) {
  if (Array.isArray(e)) return e;
}
function Ag(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, o, i, s = [], l = !0, c = !1;
    try {
      if (o = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r) return;
        l = !1;
      } else for (; !(l = (n = o.call(r)).done) && (s.push(n.value), s.length !== t); l = !0) ;
    } catch (d) {
      c = !0, a = d;
    } finally {
      try {
        if (!l && r.return != null && (i = r.return(), Object(i) !== i)) return;
      } finally {
        if (c) throw a;
      }
    }
    return s;
  }
}
function Bu() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function G(e, t) {
  return ku(e) || Ag(e, t) || zs(e, t) || Bu();
}
function Sa(e) {
  for (var t = 0, r, n = 0, a = e.length; a >= 4; ++n, a -= 4)
    r = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, t = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (a) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(n) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
function Xt() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Lg(e, t) {
  if (!e)
    return !1;
  if (e.contains)
    return e.contains(t);
  for (var r = t; r; ) {
    if (r === e)
      return !0;
    r = r.parentNode;
  }
  return !1;
}
var Il = "data-rc-order", Ml = "data-rc-priority", jg = "rc-util-key", Bi = /* @__PURE__ */ new Map();
function Hu() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.mark;
  return t ? t.startsWith("data-") ? t : "data-".concat(t) : jg;
}
function Fo(e) {
  if (e.attachTo)
    return e.attachTo;
  var t = document.querySelector("head");
  return t || document.body;
}
function Fg(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function Vs(e) {
  return Array.from((Bi.get(e) || e).children).filter(function(t) {
    return t.tagName === "STYLE";
  });
}
function Wu(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!Xt())
    return null;
  var r = t.csp, n = t.prepend, a = t.priority, o = a === void 0 ? 0 : a, i = Fg(n), s = i === "prependQueue", l = document.createElement("style");
  l.setAttribute(Il, i), s && o && l.setAttribute(Ml, "".concat(o)), r != null && r.nonce && (l.nonce = r == null ? void 0 : r.nonce), l.innerHTML = e;
  var c = Fo(t), d = c.firstChild;
  if (n) {
    if (s) {
      var f = (t.styles || Vs(c)).filter(function(v) {
        if (!["prepend", "prependQueue"].includes(v.getAttribute(Il)))
          return !1;
        var m = Number(v.getAttribute(Ml) || 0);
        return o >= m;
      });
      if (f.length)
        return c.insertBefore(l, f[f.length - 1].nextSibling), l;
    }
    c.insertBefore(l, d);
  } else
    c.appendChild(l);
  return l;
}
function Ku(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = Fo(t);
  return (t.styles || Vs(r)).find(function(n) {
    return n.getAttribute(Hu(t)) === e;
  });
}
function Ca(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = Ku(e, t);
  if (r) {
    var n = Fo(t);
    n.removeChild(r);
  }
}
function Dg(e, t) {
  var r = Bi.get(e);
  if (!r || !Lg(document, r)) {
    var n = Wu("", t), a = n.parentNode;
    Bi.set(e, a), e.removeChild(n);
  }
}
function Fr(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = Fo(r), a = Vs(n), o = V(V({}, r), {}, {
    styles: a
  });
  Dg(n, o);
  var i = Ku(t, o);
  if (i) {
    var s, l;
    if ((s = o.csp) !== null && s !== void 0 && s.nonce && i.nonce !== ((l = o.csp) === null || l === void 0 ? void 0 : l.nonce)) {
      var c;
      i.nonce = (c = o.csp) === null || c === void 0 ? void 0 : c.nonce;
    }
    return i.innerHTML !== e && (i.innerHTML = e), i;
  }
  var d = Wu(e, o);
  return d.setAttribute(Hu(o), t), d;
}
function zg(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e[n];
  }
  return r;
}
function et(e, t) {
  if (e == null) return {};
  var r, n, a = zg(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || {}.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  }
  return a;
}
function Ea(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, n = /* @__PURE__ */ new Set();
  function a(o, i) {
    var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, l = n.has(o);
    if (ot(!l, "Warning: There may be circular references"), l)
      return !1;
    if (o === i)
      return !0;
    if (r && s > 1)
      return !1;
    n.add(o);
    var c = s + 1;
    if (Array.isArray(o)) {
      if (!Array.isArray(i) || o.length !== i.length)
        return !1;
      for (var d = 0; d < o.length; d++)
        if (!a(o[d], i[d], c))
          return !1;
      return !0;
    }
    if (o && i && ze(o) === "object" && ze(i) === "object") {
      var f = Object.keys(o);
      return f.length !== Object.keys(i).length ? !1 : f.every(function(v) {
        return a(o[v], i[v], c);
      });
    }
    return !1;
  }
  return a(e, t);
}
var Vg = "%";
function Hi(e) {
  return e.join(Vg);
}
var kg = /* @__PURE__ */ function() {
  function e(t) {
    Dt(this, e), D(this, "instanceId", void 0), D(this, "cache", /* @__PURE__ */ new Map()), this.instanceId = t;
  }
  return zt(e, [{
    key: "get",
    value: function(r) {
      return this.opGet(Hi(r));
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opGet",
    value: function(r) {
      return this.cache.get(r) || null;
    }
  }, {
    key: "update",
    value: function(r, n) {
      return this.opUpdate(Hi(r), n);
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opUpdate",
    value: function(r, n) {
      var a = this.cache.get(r), o = n(a);
      o === null ? this.cache.delete(r) : this.cache.set(r, o);
    }
  }]), e;
}(), Fn = "data-token-hash", br = "data-css-hash", Bg = "data-cache-path", qr = "__cssinjs_instance__";
function Hg() {
  var e = Math.random().toString(12).slice(2);
  if (typeof document < "u" && document.head && document.body) {
    var t = document.body.querySelectorAll("style[".concat(br, "]")) || [], r = document.head.firstChild;
    Array.from(t).forEach(function(a) {
      a[qr] = a[qr] || e, a[qr] === e && document.head.insertBefore(a, r);
    });
    var n = {};
    Array.from(document.querySelectorAll("style[".concat(br, "]"))).forEach(function(a) {
      var o = a.getAttribute(br);
      if (n[o]) {
        if (a[qr] === e) {
          var i;
          (i = a.parentNode) === null || i === void 0 || i.removeChild(a);
        }
      } else
        n[o] = !0;
    });
  }
  return new kg(e);
}
var Do = /* @__PURE__ */ u.createContext({
  hashPriority: "low",
  cache: Hg(),
  defaultCache: !0
}), Uu = /* @__PURE__ */ zt(function e() {
  Dt(this, e);
}), Gu = "CALC_UNIT", Wg = new RegExp(Gu, "g");
function ni(e) {
  return typeof e == "number" ? "".concat(e).concat(Gu) : e;
}
var Kg = /* @__PURE__ */ function(e) {
  Qr(r, e);
  var t = Jr(r);
  function r(n, a) {
    var o;
    Dt(this, r), o = t.call(this), D(Ze(o), "result", ""), D(Ze(o), "unitlessCssVar", void 0), D(Ze(o), "lowPriority", void 0);
    var i = ze(n);
    return o.unitlessCssVar = a, n instanceof r ? o.result = "(".concat(n.result, ")") : i === "number" ? o.result = ni(n) : i === "string" && (o.result = n), o;
  }
  return zt(r, [{
    key: "add",
    value: function(a) {
      return a instanceof r ? this.result = "".concat(this.result, " + ").concat(a.getResult()) : (typeof a == "number" || typeof a == "string") && (this.result = "".concat(this.result, " + ").concat(ni(a))), this.lowPriority = !0, this;
    }
  }, {
    key: "sub",
    value: function(a) {
      return a instanceof r ? this.result = "".concat(this.result, " - ").concat(a.getResult()) : (typeof a == "number" || typeof a == "string") && (this.result = "".concat(this.result, " - ").concat(ni(a))), this.lowPriority = !0, this;
    }
  }, {
    key: "mul",
    value: function(a) {
      return this.lowPriority && (this.result = "(".concat(this.result, ")")), a instanceof r ? this.result = "".concat(this.result, " * ").concat(a.getResult(!0)) : (typeof a == "number" || typeof a == "string") && (this.result = "".concat(this.result, " * ").concat(a)), this.lowPriority = !1, this;
    }
  }, {
    key: "div",
    value: function(a) {
      return this.lowPriority && (this.result = "(".concat(this.result, ")")), a instanceof r ? this.result = "".concat(this.result, " / ").concat(a.getResult(!0)) : (typeof a == "number" || typeof a == "string") && (this.result = "".concat(this.result, " / ").concat(a)), this.lowPriority = !1, this;
    }
  }, {
    key: "getResult",
    value: function(a) {
      return this.lowPriority || a ? "(".concat(this.result, ")") : this.result;
    }
  }, {
    key: "equal",
    value: function(a) {
      var o = this, i = a || {}, s = i.unit, l = !0;
      return typeof s == "boolean" ? l = s : Array.from(this.unitlessCssVar).some(function(c) {
        return o.result.includes(c);
      }) && (l = !1), this.result = this.result.replace(Wg, l ? "px" : ""), typeof this.lowPriority < "u" ? "calc(".concat(this.result, ")") : this.result;
    }
  }]), r;
}(Uu), Ug = /* @__PURE__ */ function(e) {
  Qr(r, e);
  var t = Jr(r);
  function r(n) {
    var a;
    return Dt(this, r), a = t.call(this), D(Ze(a), "result", 0), n instanceof r ? a.result = n.result : typeof n == "number" && (a.result = n), a;
  }
  return zt(r, [{
    key: "add",
    value: function(a) {
      return a instanceof r ? this.result += a.result : typeof a == "number" && (this.result += a), this;
    }
  }, {
    key: "sub",
    value: function(a) {
      return a instanceof r ? this.result -= a.result : typeof a == "number" && (this.result -= a), this;
    }
  }, {
    key: "mul",
    value: function(a) {
      return a instanceof r ? this.result *= a.result : typeof a == "number" && (this.result *= a), this;
    }
  }, {
    key: "div",
    value: function(a) {
      return a instanceof r ? this.result /= a.result : typeof a == "number" && (this.result /= a), this;
    }
  }, {
    key: "equal",
    value: function() {
      return this.result;
    }
  }]), r;
}(Uu), Gg = function(t, r) {
  var n = t === "css" ? Kg : Ug;
  return function(a) {
    return new n(a, r);
  };
};
function qg(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
var ks = /* @__PURE__ */ function() {
  function e() {
    Dt(this, e), D(this, "cache", void 0), D(this, "keys", void 0), D(this, "cacheCallTimes", void 0), this.cache = /* @__PURE__ */ new Map(), this.keys = [], this.cacheCallTimes = 0;
  }
  return zt(e, [{
    key: "size",
    value: function() {
      return this.keys.length;
    }
  }, {
    key: "internalGet",
    value: function(r) {
      var n, a, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, i = {
        map: this.cache
      };
      return r.forEach(function(s) {
        if (!i)
          i = void 0;
        else {
          var l;
          i = (l = i) === null || l === void 0 || (l = l.map) === null || l === void 0 ? void 0 : l.get(s);
        }
      }), (n = i) !== null && n !== void 0 && n.value && o && (i.value[1] = this.cacheCallTimes++), (a = i) === null || a === void 0 ? void 0 : a.value;
    }
  }, {
    key: "get",
    value: function(r) {
      var n;
      return (n = this.internalGet(r, !0)) === null || n === void 0 ? void 0 : n[0];
    }
  }, {
    key: "has",
    value: function(r) {
      return !!this.internalGet(r);
    }
  }, {
    key: "set",
    value: function(r, n) {
      var a = this;
      if (!this.has(r)) {
        if (this.size() + 1 > e.MAX_CACHE_SIZE + e.MAX_CACHE_OFFSET) {
          var o = this.keys.reduce(function(c, d) {
            var f = G(c, 2), v = f[1];
            return a.internalGet(d)[1] < v ? [d, a.internalGet(d)[1]] : c;
          }, [this.keys[0], this.cacheCallTimes]), i = G(o, 1), s = i[0];
          this.delete(s);
        }
        this.keys.push(r);
      }
      var l = this.cache;
      r.forEach(function(c, d) {
        if (d === r.length - 1)
          l.set(c, {
            value: [n, a.cacheCallTimes++]
          });
        else {
          var f = l.get(c);
          f ? f.map || (f.map = /* @__PURE__ */ new Map()) : l.set(c, {
            map: /* @__PURE__ */ new Map()
          }), l = l.get(c).map;
        }
      });
    }
  }, {
    key: "deleteByPath",
    value: function(r, n) {
      var a = r.get(n[0]);
      if (n.length === 1) {
        var o;
        return a.map ? r.set(n[0], {
          map: a.map
        }) : r.delete(n[0]), (o = a.value) === null || o === void 0 ? void 0 : o[0];
      }
      var i = this.deleteByPath(a.map, n.slice(1));
      return (!a.map || a.map.size === 0) && !a.value && r.delete(n[0]), i;
    }
  }, {
    key: "delete",
    value: function(r) {
      if (this.has(r))
        return this.keys = this.keys.filter(function(n) {
          return !qg(n, r);
        }), this.deleteByPath(this.cache, r);
    }
  }]), e;
}();
D(ks, "MAX_CACHE_SIZE", 20);
D(ks, "MAX_CACHE_OFFSET", 5);
var Al = 0, qu = /* @__PURE__ */ function() {
  function e(t) {
    Dt(this, e), D(this, "derivatives", void 0), D(this, "id", void 0), this.derivatives = Array.isArray(t) ? t : [t], this.id = Al, t.length === 0 && Ln(t.length > 0, "[Ant Design CSS-in-JS] Theme should have at least one derivative function."), Al += 1;
  }
  return zt(e, [{
    key: "getDerivativeToken",
    value: function(r) {
      return this.derivatives.reduce(function(n, a) {
        return a(r, n);
      }, void 0);
    }
  }]), e;
}(), ai = new ks();
function Wi(e) {
  var t = Array.isArray(e) ? e : [e];
  return ai.has(t) || ai.set(t, new qu(t)), ai.get(t);
}
var Xg = /* @__PURE__ */ new WeakMap(), oi = {};
function Yg(e, t) {
  for (var r = Xg, n = 0; n < t.length; n += 1) {
    var a = t[n];
    r.has(a) || r.set(a, /* @__PURE__ */ new WeakMap()), r = r.get(a);
  }
  return r.has(oi) || r.set(oi, e()), r.get(oi);
}
var Ll = /* @__PURE__ */ new WeakMap();
function va(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, r = Ll.get(e) || "";
  return r || (Object.keys(e).forEach(function(n) {
    var a = e[n];
    r += n, a instanceof qu ? r += a.id : a && ze(a) === "object" ? r += va(a, t) : r += a;
  }), t && (r = Sa(r)), Ll.set(e, r)), r;
}
function jl(e, t) {
  return Sa("".concat(t, "_").concat(va(e, !0)));
}
var Ki = Xt();
function te(e) {
  return typeof e == "number" ? "".concat(e, "px") : e;
}
function wo(e, t, r) {
  var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
  if (a)
    return e;
  var o = V(V({}, n), {}, D(D({}, Fn, t), br, r)), i = Object.keys(o).map(function(s) {
    var l = o[s];
    return l ? "".concat(s, '="').concat(l, '"') : null;
  }).filter(function(s) {
    return s;
  }).join(" ");
  return "<style ".concat(i, ">").concat(e, "</style>");
}
var co = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return "--".concat(r ? "".concat(r, "-") : "").concat(t).replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, "$1-$2").replace(/([a-z])([A-Z0-9])/g, "$1-$2").toLowerCase();
}, Zg = function(t, r, n) {
  return Object.keys(t).length ? ".".concat(r).concat(n != null && n.scope ? ".".concat(n.scope) : "", "{").concat(Object.entries(t).map(function(a) {
    var o = G(a, 2), i = o[0], s = o[1];
    return "".concat(i, ":").concat(s, ";");
  }).join(""), "}") : "";
}, Xu = function(t, r, n) {
  var a = {}, o = {};
  return Object.entries(t).forEach(function(i) {
    var s, l, c = G(i, 2), d = c[0], f = c[1];
    if (n != null && (s = n.preserve) !== null && s !== void 0 && s[d])
      o[d] = f;
    else if ((typeof f == "string" || typeof f == "number") && !(n != null && (l = n.ignore) !== null && l !== void 0 && l[d])) {
      var v, m = co(d, n == null ? void 0 : n.prefix);
      a[m] = typeof f == "number" && !(n != null && (v = n.unitless) !== null && v !== void 0 && v[d]) ? "".concat(f, "px") : String(f), o[d] = "var(".concat(m, ")");
    }
  }), [o, Zg(a, r, {
    scope: n == null ? void 0 : n.scope
  })];
}, Fl = process.env.NODE_ENV !== "test" && Xt() ? u.useLayoutEffect : u.useEffect, Et = function(t, r) {
  var n = u.useRef(!0);
  Fl(function() {
    return t(n.current);
  }, r), Fl(function() {
    return n.current = !1, function() {
      n.current = !0;
    };
  }, []);
}, Ui = function(t, r) {
  Et(function(n) {
    if (!n)
      return t();
  }, r);
}, Qg = V({}, u), Dl = Qg.useInsertionEffect, Jg = function(t, r, n) {
  u.useMemo(t, n), Et(function() {
    return r(!0);
  }, n);
}, em = Dl ? function(e, t, r) {
  return Dl(function() {
    return e(), t();
  }, r);
} : Jg, tm = V({}, u), rm = tm.useInsertionEffect, nm = function(t) {
  var r = [], n = !1;
  function a(o) {
    if (n) {
      process.env.NODE_ENV !== "production" && Ln(!1, "[Ant Design CSS-in-JS] You are registering a cleanup function after unmount, which will not have any effect.");
      return;
    }
    r.push(o);
  }
  return u.useEffect(function() {
    return n = !1, function() {
      n = !0, r.length && r.forEach(function(o) {
        return o();
      });
    };
  }, t), a;
}, am = function() {
  return function(t) {
    t();
  };
}, om = typeof rm < "u" ? nm : am;
function im() {
  return !1;
}
var Gi = !1;
function sm() {
  return Gi;
}
const lm = process.env.NODE_ENV === "production" ? im : sm;
if (process.env.NODE_ENV !== "production" && typeof module < "u" && module && module.hot && typeof window < "u") {
  var ii = window;
  if (typeof ii.webpackHotUpdate == "function") {
    var cm = ii.webpackHotUpdate;
    ii.webpackHotUpdate = function() {
      return Gi = !0, setTimeout(function() {
        Gi = !1;
      }, 0), cm.apply(void 0, arguments);
    };
  }
}
function Bs(e, t, r, n, a) {
  var o = u.useContext(Do), i = o.cache, s = [e].concat(Ee(t)), l = Hi(s), c = om([l]), d = lm(), f = function(p) {
    i.opUpdate(l, function(g) {
      var S = g || [void 0, void 0], b = G(S, 2), y = b[0], w = y === void 0 ? 0 : y, C = b[1], O = C;
      process.env.NODE_ENV !== "production" && C && d && (n == null || n(O, d), O = null);
      var _ = O || r(), $ = [w, _];
      return p ? p($) : $;
    });
  };
  u.useMemo(
    function() {
      f();
    },
    /* eslint-disable react-hooks/exhaustive-deps */
    [l]
    /* eslint-enable */
  );
  var v = i.opGet(l);
  process.env.NODE_ENV !== "production" && !v && (f(), v = i.opGet(l));
  var m = v[1];
  return em(function() {
    a == null || a(m);
  }, function(h) {
    return f(function(p) {
      var g = G(p, 2), S = g[0], b = g[1];
      return h && S === 0 && (a == null || a(m)), [S + 1, b];
    }), function() {
      i.opUpdate(l, function(p) {
        var g = p || [], S = G(g, 2), b = S[0], y = b === void 0 ? 0 : b, w = S[1], C = y - 1;
        return C === 0 ? (c(function() {
          (h || !i.opGet(l)) && (n == null || n(w, !1));
        }), null) : [y - 1, w];
      });
    };
  }, [l]), m;
}
var um = {}, dm = process.env.NODE_ENV !== "production" ? "css-dev-only-do-not-override" : "css", on = /* @__PURE__ */ new Map();
function fm(e) {
  on.set(e, (on.get(e) || 0) + 1);
}
function vm(e, t) {
  if (typeof document < "u") {
    var r = document.querySelectorAll("style[".concat(Fn, '="').concat(e, '"]'));
    r.forEach(function(n) {
      if (n[qr] === t) {
        var a;
        (a = n.parentNode) === null || a === void 0 || a.removeChild(n);
      }
    });
  }
}
var gm = 0;
function mm(e, t) {
  on.set(e, (on.get(e) || 0) - 1);
  var r = Array.from(on.keys()), n = r.filter(function(a) {
    var o = on.get(a) || 0;
    return o <= 0;
  });
  r.length - n.length > gm && n.forEach(function(a) {
    vm(a, t), on.delete(a);
  });
}
var pm = function(t, r, n, a) {
  var o = n.getDerivativeToken(t), i = V(V({}, o), r);
  return a && (i = a(i)), i;
}, Yu = "token";
function hm(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = Lt(Do), a = n.cache.instanceId, o = n.container, i = r.salt, s = i === void 0 ? "" : i, l = r.override, c = l === void 0 ? um : l, d = r.formatToken, f = r.getComputedToken, v = r.cssVar, m = Yg(function() {
    return Object.assign.apply(Object, [{}].concat(Ee(t)));
  }, t), h = va(m), p = va(c), g = v ? va(v) : "", S = Bs(Yu, [s, e.id, h, p, g], function() {
    var b, y = f ? f(m, c, e) : pm(m, c, e, d), w = V({}, y), C = "";
    if (v) {
      var O = Xu(y, v.key, {
        prefix: v.prefix,
        ignore: v.ignore,
        unitless: v.unitless,
        preserve: v.preserve
      }), _ = G(O, 2);
      y = _[0], C = _[1];
    }
    var $ = jl(y, s);
    y._tokenKey = $, w._tokenKey = jl(w, s);
    var R = (b = v == null ? void 0 : v.key) !== null && b !== void 0 ? b : $;
    y._themeKey = R, fm(R);
    var A = "".concat(dm, "-").concat(Sa($));
    return y._hashId = A, [y, A, w, C, (v == null ? void 0 : v.key) || ""];
  }, function(b) {
    mm(b[0]._themeKey, a);
  }, function(b) {
    var y = G(b, 4), w = y[0], C = y[3];
    if (v && C) {
      var O = Fr(C, Sa("css-variables-".concat(w._themeKey)), {
        mark: br,
        prepend: "queue",
        attachTo: o,
        priority: -999
      });
      O[qr] = a, O.setAttribute(Fn, w._themeKey);
    }
  });
  return S;
}
var bm = function(t, r, n) {
  var a = G(t, 5), o = a[2], i = a[3], s = a[4], l = n || {}, c = l.plain;
  if (!i)
    return null;
  var d = o._tokenKey, f = -999, v = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(f)
  }, m = wo(i, s, d, v, c);
  return [f, d, m];
}, ym = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, Zu = "comm", Qu = "rule", Ju = "decl", Sm = "@import", Cm = "@keyframes", Em = "@layer", ed = Math.abs, Hs = String.fromCharCode;
function td(e) {
  return e.trim();
}
function uo(e, t, r) {
  return e.replace(t, r);
}
function wm(e, t, r) {
  return e.indexOf(t, r);
}
function wa(e, t) {
  return e.charCodeAt(t) | 0;
}
function xa(e, t, r) {
  return e.slice(t, r);
}
function Lr(e) {
  return e.length;
}
function xm(e) {
  return e.length;
}
function Ka(e, t) {
  return t.push(e), e;
}
var zo = 1, Dn = 1, rd = 0, ur = 0, _t = 0, Wn = "";
function Ws(e, t, r, n, a, o, i, s) {
  return { value: e, root: t, parent: r, type: n, props: a, children: o, line: zo, column: Dn, length: i, return: "", siblings: s };
}
function $m() {
  return _t;
}
function Om() {
  return _t = ur > 0 ? wa(Wn, --ur) : 0, Dn--, _t === 10 && (Dn = 1, zo--), _t;
}
function yr() {
  return _t = ur < rd ? wa(Wn, ur++) : 0, Dn++, _t === 10 && (Dn = 1, zo++), _t;
}
function cn() {
  return wa(Wn, ur);
}
function fo() {
  return ur;
}
function Vo(e, t) {
  return xa(Wn, e, t);
}
function qi(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Rm(e) {
  return zo = Dn = 1, rd = Lr(Wn = e), ur = 0, [];
}
function _m(e) {
  return Wn = "", e;
}
function si(e) {
  return td(Vo(ur - 1, Xi(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Pm(e) {
  for (; (_t = cn()) && _t < 33; )
    yr();
  return qi(e) > 2 || qi(_t) > 3 ? "" : " ";
}
function Tm(e, t) {
  for (; --t && yr() && !(_t < 48 || _t > 102 || _t > 57 && _t < 65 || _t > 70 && _t < 97); )
    ;
  return Vo(e, fo() + (t < 6 && cn() == 32 && yr() == 32));
}
function Xi(e) {
  for (; yr(); )
    switch (_t) {
      case e:
        return ur;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Xi(_t);
        break;
      case 40:
        e === 41 && Xi(e);
        break;
      case 92:
        yr();
        break;
    }
  return ur;
}
function Nm(e, t) {
  for (; yr() && e + _t !== 57; )
    if (e + _t === 84 && cn() === 47)
      break;
  return "/*" + Vo(t, ur - 1) + "*" + Hs(e === 47 ? e : yr());
}
function Im(e) {
  for (; !qi(cn()); )
    yr();
  return Vo(e, ur);
}
function Mm(e) {
  return _m(vo("", null, null, null, [""], e = Rm(e), 0, [0], e));
}
function vo(e, t, r, n, a, o, i, s, l) {
  for (var c = 0, d = 0, f = i, v = 0, m = 0, h = 0, p = 1, g = 1, S = 1, b = 0, y = "", w = a, C = o, O = n, _ = y; g; )
    switch (h = b, b = yr()) {
      case 40:
        if (h != 108 && wa(_, f - 1) == 58) {
          wm(_ += uo(si(b), "&", "&\f"), "&\f", ed(c ? s[c - 1] : 0)) != -1 && (S = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        _ += si(b);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        _ += Pm(h);
        break;
      case 92:
        _ += Tm(fo() - 1, 7);
        continue;
      case 47:
        switch (cn()) {
          case 42:
          case 47:
            Ka(Am(Nm(yr(), fo()), t, r, l), l);
            break;
          default:
            _ += "/";
        }
        break;
      case 123 * p:
        s[c++] = Lr(_) * S;
      case 125 * p:
      case 59:
      case 0:
        switch (b) {
          case 0:
          case 125:
            g = 0;
          case 59 + d:
            S == -1 && (_ = uo(_, /\f/g, "")), m > 0 && Lr(_) - f && Ka(m > 32 ? Vl(_ + ";", n, r, f - 1, l) : Vl(uo(_, " ", "") + ";", n, r, f - 2, l), l);
            break;
          case 59:
            _ += ";";
          default:
            if (Ka(O = zl(_, t, r, c, d, a, s, y, w = [], C = [], f, o), o), b === 123)
              if (d === 0)
                vo(_, t, O, O, w, o, f, s, C);
              else
                switch (v === 99 && wa(_, 3) === 110 ? 100 : v) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    vo(e, O, O, n && Ka(zl(e, O, O, 0, 0, a, s, y, a, w = [], f, C), C), a, C, f, s, n ? w : C);
                    break;
                  default:
                    vo(_, O, O, O, [""], C, 0, s, C);
                }
        }
        c = d = m = 0, p = S = 1, y = _ = "", f = i;
        break;
      case 58:
        f = 1 + Lr(_), m = h;
      default:
        if (p < 1) {
          if (b == 123)
            --p;
          else if (b == 125 && p++ == 0 && Om() == 125)
            continue;
        }
        switch (_ += Hs(b), b * p) {
          case 38:
            S = d > 0 ? 1 : (_ += "\f", -1);
            break;
          case 44:
            s[c++] = (Lr(_) - 1) * S, S = 1;
            break;
          case 64:
            cn() === 45 && (_ += si(yr())), v = cn(), d = f = Lr(y = _ += Im(fo())), b++;
            break;
          case 45:
            h === 45 && Lr(_) == 2 && (p = 0);
        }
    }
  return o;
}
function zl(e, t, r, n, a, o, i, s, l, c, d, f) {
  for (var v = a - 1, m = a === 0 ? o : [""], h = xm(m), p = 0, g = 0, S = 0; p < n; ++p)
    for (var b = 0, y = xa(e, v + 1, v = ed(g = i[p])), w = e; b < h; ++b)
      (w = td(g > 0 ? m[b] + " " + y : uo(y, /&\f/g, m[b]))) && (l[S++] = w);
  return Ws(e, t, r, a === 0 ? Qu : s, l, c, d, f);
}
function Am(e, t, r, n) {
  return Ws(e, t, r, Zu, Hs($m()), xa(e, 2, -2), 0, n);
}
function Vl(e, t, r, n, a) {
  return Ws(e, t, r, Ju, xa(e, 0, n), xa(e, n + 1, -1), n, a);
}
function Yi(e, t) {
  for (var r = "", n = 0; n < e.length; n++)
    r += t(e[n], n, e, t) || "";
  return r;
}
function Lm(e, t, r, n) {
  switch (e.type) {
    case Em:
      if (e.children.length) break;
    case Sm:
    case Ju:
      return e.return = e.return || e.value;
    case Zu:
      return "";
    case Cm:
      return e.return = e.value + "{" + Yi(e.children, n) + "}";
    case Qu:
      if (!Lr(e.value = e.props.join(","))) return "";
  }
  return Lr(r = Yi(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function nd(e, t) {
  var r = t.path, n = t.parentSelectors;
  ot(!1, "[Ant Design CSS-in-JS] ".concat(r ? "Error in ".concat(r, ": ") : "").concat(e).concat(n.length ? " Selector: ".concat(n.join(" | ")) : ""));
}
var jm = function(t, r, n) {
  if (t === "content") {
    var a = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, o = ["normal", "none", "initial", "inherit", "unset"];
    (typeof r != "string" || o.indexOf(r) === -1 && !a.test(r) && (r.charAt(0) !== r.charAt(r.length - 1) || r.charAt(0) !== '"' && r.charAt(0) !== "'")) && nd("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"".concat(r, "\"'`."), n);
  }
}, Fm = function(t, r, n) {
  t === "animation" && n.hashId && r !== "none" && nd("You seem to be using hashed animation '".concat(r, "', in which case 'animationName' with Keyframe as value is recommended."), n);
}, kl = "data-ant-cssinjs-cache-path", ad = "_FILE_STYLE__", un, od = !0;
function Dm() {
  if (!un && (un = {}, Xt())) {
    var e = document.createElement("div");
    e.className = kl, e.style.position = "fixed", e.style.visibility = "hidden", e.style.top = "-9999px", document.body.appendChild(e);
    var t = getComputedStyle(e).content || "";
    t = t.replace(/^"/, "").replace(/"$/, ""), t.split(";").forEach(function(a) {
      var o = a.split(":"), i = G(o, 2), s = i[0], l = i[1];
      un[s] = l;
    });
    var r = document.querySelector("style[".concat(kl, "]"));
    if (r) {
      var n;
      od = !1, (n = r.parentNode) === null || n === void 0 || n.removeChild(r);
    }
    document.body.removeChild(e);
  }
}
function zm(e) {
  return Dm(), !!un[e];
}
function Vm(e) {
  var t = un[e], r = null;
  if (t && Xt())
    if (od)
      r = ad;
    else {
      var n = document.querySelector("style[".concat(br, '="').concat(un[e], '"]'));
      n ? r = n.innerHTML : delete un[e];
    }
  return [r, t];
}
var id = "_skip_check_", sd = "_multi_value_";
function go(e) {
  var t = Yi(Mm(e), Lm);
  return t.replace(/\{%%%\:[^;];}/g, ";");
}
function km(e) {
  return ze(e) === "object" && e && (id in e || sd in e);
}
function Bm(e, t, r) {
  if (!t)
    return e;
  var n = ".".concat(t), a = r === "low" ? ":where(".concat(n, ")") : n, o = e.split(",").map(function(i) {
    var s, l = i.trim().split(/\s+/), c = l[0] || "", d = ((s = c.match(/^\w+/)) === null || s === void 0 ? void 0 : s[0]) || "";
    return c = "".concat(d).concat(a).concat(c.slice(d.length)), [c].concat(Ee(l.slice(1))).join(" ");
  });
  return o.join(",");
}
var Hm = function e(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: !0,
    parentSelectors: []
  }, a = n.root, o = n.injectHash, i = n.parentSelectors, s = r.hashId, l = r.layer, c = r.path, d = r.hashPriority, f = r.transformers, v = f === void 0 ? [] : f, m = r.linters, h = m === void 0 ? [] : m, p = "", g = {};
  function S(w) {
    var C = w.getName(s);
    if (!g[C]) {
      var O = e(w.style, r, {
        root: !1,
        parentSelectors: i
      }), _ = G(O, 1), $ = _[0];
      g[C] = "@keyframes ".concat(w.getName(s)).concat($);
    }
  }
  function b(w) {
    var C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return w.forEach(function(O) {
      Array.isArray(O) ? b(O, C) : O && C.push(O);
    }), C;
  }
  var y = b(Array.isArray(t) ? t : [t]);
  return y.forEach(function(w) {
    var C = typeof w == "string" && !a ? {} : w;
    if (typeof C == "string")
      p += "".concat(C, `
`);
    else if (C._keyframe)
      S(C);
    else {
      var O = v.reduce(function(_, $) {
        var R;
        return ($ == null || (R = $.visit) === null || R === void 0 ? void 0 : R.call($, _)) || _;
      }, C);
      Object.keys(O).forEach(function(_) {
        var $ = O[_];
        if (ze($) === "object" && $ && (_ !== "animationName" || !$._keyframe) && !km($)) {
          var R = !1, A = _.trim(), F = !1;
          (a || o) && s ? A.startsWith("@") ? R = !0 : A = Bm(_, s, d) : a && !s && (A === "&" || A === "") && (A = "", F = !0);
          var j = e($, r, {
            root: F,
            injectHash: R,
            parentSelectors: [].concat(Ee(i), [A])
          }), I = G(j, 2), T = I[0], B = I[1];
          g = V(V({}, g), B), p += "".concat(A).concat(T);
        } else {
          let E = function(L, M) {
            process.env.NODE_ENV !== "production" && (ze($) !== "object" || !($ != null && $[id])) && [jm, Fm].concat(Ee(h)).forEach(function(W) {
              return W(L, M, {
                path: c,
                hashId: s,
                parentSelectors: i
              });
            });
            var z = L.replace(/[A-Z]/g, function(W) {
              return "-".concat(W.toLowerCase());
            }), H = M;
            !ym[L] && typeof H == "number" && H !== 0 && (H = "".concat(H, "px")), L === "animationName" && M !== null && M !== void 0 && M._keyframe && (S(M), H = M.getName(s)), p += "".concat(z, ":").concat(H, ";");
          };
          var N, x = (N = $ == null ? void 0 : $.value) !== null && N !== void 0 ? N : $;
          ze($) === "object" && $ !== null && $ !== void 0 && $[sd] && Array.isArray(x) ? x.forEach(function(L) {
            E(_, L);
          }) : E(_, x);
        }
      });
    }
  }), a ? l && (p = "@layer ".concat(l.name, " {").concat(p, "}"), l.dependencies && (g["@layer ".concat(l.name)] = l.dependencies.map(function(w) {
    return "@layer ".concat(w, ", ").concat(l.name, ";");
  }).join(`
`))) : p = "{".concat(p, "}"), [p, g];
};
function ld(e, t) {
  return Sa("".concat(e.join("%")).concat(t));
}
function Wm() {
  return null;
}
var cd = "style";
function Zi(e, t) {
  var r = e.token, n = e.path, a = e.hashId, o = e.layer, i = e.nonce, s = e.clientOnly, l = e.order, c = l === void 0 ? 0 : l, d = u.useContext(Do), f = d.autoClear, v = d.mock, m = d.defaultCache, h = d.hashPriority, p = d.container, g = d.ssrInline, S = d.transformers, b = d.linters, y = d.cache, w = d.layer, C = r._tokenKey, O = [C];
  w && O.push("layer"), O.push.apply(O, Ee(n));
  var _ = Ki;
  process.env.NODE_ENV !== "production" && v !== void 0 && (_ = v === "client");
  var $ = Bs(
    cd,
    O,
    // Create cache if needed
    function() {
      var I = O.join("|");
      if (zm(I)) {
        var T = Vm(I), B = G(T, 2), N = B[0], x = B[1];
        if (N)
          return [N, C, x, {}, s, c];
      }
      var E = t(), L = Hm(E, {
        hashId: a,
        hashPriority: h,
        layer: w ? o : void 0,
        path: n.join("-"),
        transformers: S,
        linters: b
      }), M = G(L, 2), z = M[0], H = M[1], W = go(z), U = ld(O, W);
      return [W, C, U, H, s, c];
    },
    // Remove cache if no need
    function(I, T) {
      var B = G(I, 3), N = B[2];
      (T || f) && Ki && Ca(N, {
        mark: br
      });
    },
    // Effect: Inject style here
    function(I) {
      var T = G(I, 4), B = T[0];
      T[1];
      var N = T[2], x = T[3];
      if (_ && B !== ad) {
        var E = {
          mark: br,
          prepend: w ? !1 : "queue",
          attachTo: p,
          priority: c
        }, L = typeof i == "function" ? i() : i;
        L && (E.csp = {
          nonce: L
        });
        var M = [], z = [];
        Object.keys(x).forEach(function(W) {
          W.startsWith("@layer") ? M.push(W) : z.push(W);
        }), M.forEach(function(W) {
          Fr(go(x[W]), "_layer-".concat(W), V(V({}, E), {}, {
            prepend: !0
          }));
        });
        var H = Fr(B, N, E);
        H[qr] = y.instanceId, H.setAttribute(Fn, C), process.env.NODE_ENV !== "production" && H.setAttribute(Bg, O.join("|")), z.forEach(function(W) {
          Fr(go(x[W]), "_effect-".concat(W), E);
        });
      }
    }
  ), R = G($, 3), A = R[0], F = R[1], j = R[2];
  return function(I) {
    var T;
    return !g || _ || !m ? T = /* @__PURE__ */ u.createElement(Wm, null) : T = /* @__PURE__ */ u.createElement("style", Me({}, D(D({}, Fn, F), br, j), {
      dangerouslySetInnerHTML: {
        __html: A
      }
    })), /* @__PURE__ */ u.createElement(u.Fragment, null, T, I);
  };
}
var Km = function(t, r, n) {
  var a = G(t, 6), o = a[0], i = a[1], s = a[2], l = a[3], c = a[4], d = a[5], f = n || {}, v = f.plain;
  if (c)
    return null;
  var m = o, h = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(d)
  };
  return m = wo(o, i, s, h, v), l && Object.keys(l).forEach(function(p) {
    if (!r[p]) {
      r[p] = !0;
      var g = go(l[p]), S = wo(g, i, "_effect-".concat(p), h, v);
      p.startsWith("@layer") ? m = S + m : m += S;
    }
  }), [d, s, m];
}, ud = "cssVar", Um = function(t, r) {
  var n = t.key, a = t.prefix, o = t.unitless, i = t.ignore, s = t.token, l = t.scope, c = l === void 0 ? "" : l, d = Lt(Do), f = d.cache.instanceId, v = d.container, m = s._tokenKey, h = [].concat(Ee(t.path), [n, c, m]), p = Bs(ud, h, function() {
    var g = r(), S = Xu(g, n, {
      prefix: a,
      unitless: o,
      ignore: i,
      scope: c
    }), b = G(S, 2), y = b[0], w = b[1], C = ld(h, w);
    return [y, w, C, n];
  }, function(g) {
    var S = G(g, 3), b = S[2];
    Ki && Ca(b, {
      mark: br
    });
  }, function(g) {
    var S = G(g, 3), b = S[1], y = S[2];
    if (b) {
      var w = Fr(b, y, {
        mark: br,
        prepend: "queue",
        attachTo: v,
        priority: -999
      });
      w[qr] = f, w.setAttribute(Fn, n);
    }
  });
  return p;
}, Gm = function(t, r, n) {
  var a = G(t, 4), o = a[1], i = a[2], s = a[3], l = n || {}, c = l.plain;
  if (!o)
    return null;
  var d = -999, f = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(d)
  }, v = wo(o, s, i, f, c);
  return [d, i, v];
};
D(D(D({}, cd, Km), Yu, bm), ud, Gm);
var Rt = /* @__PURE__ */ function() {
  function e(t, r) {
    Dt(this, e), D(this, "name", void 0), D(this, "style", void 0), D(this, "_keyframe", !0), this.name = t, this.style = r;
  }
  return zt(e, [{
    key: "getName",
    value: function() {
      var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return r ? "".concat(r, "-").concat(this.name) : this.name;
    }
  }]), e;
}();
function yn(e) {
  return e.notSplit = !0, e;
}
yn(["borderTop", "borderBottom"]), yn(["borderTop"]), yn(["borderBottom"]), yn(["borderLeft", "borderRight"]), yn(["borderLeft"]), yn(["borderRight"]);
var Ks = /* @__PURE__ */ dn({});
function qm(e) {
  return ku(e) || Fu(e) || zs(e) || Bu();
}
function Or(e, t) {
  for (var r = e, n = 0; n < t.length; n += 1) {
    if (r == null)
      return;
    r = r[t[n]];
  }
  return r;
}
function dd(e, t, r, n) {
  if (!t.length)
    return r;
  var a = qm(t), o = a[0], i = a.slice(1), s;
  return !e && typeof o == "number" ? s = [] : Array.isArray(e) ? s = Ee(e) : s = V({}, e), n && r === void 0 && i.length === 1 ? delete s[o][i[0]] : s[o] = dd(s[o], i, r, n), s;
}
function mr(e, t, r) {
  var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return t.length && n && r === void 0 && !Or(e, t.slice(0, -1)) ? e : dd(e, t, r, n);
}
function Xm(e) {
  return ze(e) === "object" && e !== null && Object.getPrototypeOf(e) === Object.prototype;
}
function Bl(e) {
  return Array.isArray(e) ? [] : {};
}
var Ym = typeof Reflect > "u" ? Object.keys : Reflect.ownKeys;
function Tn() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n = Bl(t[0]);
  return t.forEach(function(a) {
    function o(i, s) {
      var l = new Set(s), c = Or(a, i), d = Array.isArray(c);
      if (d || Xm(c)) {
        if (!l.has(c)) {
          l.add(c);
          var f = Or(n, i);
          d ? n = mr(n, i, []) : (!f || ze(f) !== "object") && (n = mr(n, i, Bl(c))), Ym(c).forEach(function(v) {
            o([].concat(Ee(i), [v]), l);
          });
        }
      } else
        n = mr(n, i, c);
    }
    o([]);
  }), n;
}
function fd() {
}
let Ar = null;
function Zm() {
  Ar = null, Ou();
}
let Kn = fd;
process.env.NODE_ENV !== "production" && (Kn = (e, t, r) => {
  ot(e, `[antd: ${t}] ${r}`), process.env.NODE_ENV === "test" && Zm();
});
const vd = /* @__PURE__ */ u.createContext({}), Ft = process.env.NODE_ENV !== "production" ? (e) => {
  const {
    strict: t
  } = u.useContext(vd), r = (n, a, o) => {
    if (!n)
      if (t === !1 && a === "deprecated") {
        const i = Ar;
        Ar || (Ar = {}), Ar[e] = Ar[e] || [], Ar[e].includes(o || "") || Ar[e].push(o || ""), i || console.warn("[antd] There exists deprecated usage in your code:", Ar);
      } else
        process.env.NODE_ENV !== "production" && Kn(n, e, o);
  };
  return r.deprecated = (n, a, o, i) => {
    r(n, "deprecated", `\`${a}\` is deprecated. Please use \`${o}\` instead.${i ? ` ${i}` : ""}`);
  }, r;
} : () => {
  const e = () => {
  };
  return e.deprecated = fd, e;
}, Qm = /* @__PURE__ */ dn(void 0);
var Jm = {
  // Options
  items_per_page: "/ page",
  jump_to: "Go to",
  jump_to_confirm: "confirm",
  page: "Page",
  // Pagination
  prev_page: "Previous Page",
  next_page: "Next Page",
  prev_5: "Previous 5 Pages",
  next_5: "Next 5 Pages",
  prev_3: "Previous 3 Pages",
  next_3: "Next 3 Pages",
  page_size: "Page Size"
}, ep = {
  locale: "en_US",
  today: "Today",
  now: "Now",
  backToToday: "Back to today",
  ok: "OK",
  clear: "Clear",
  month: "Month",
  year: "Year",
  timeSelect: "select time",
  dateSelect: "select date",
  weekSelect: "Choose a week",
  monthSelect: "Choose a month",
  yearSelect: "Choose a year",
  decadeSelect: "Choose a decade",
  yearFormat: "YYYY",
  dateFormat: "M/D/YYYY",
  dayFormat: "D",
  dateTimeFormat: "M/D/YYYY HH:mm:ss",
  monthBeforeYear: !0,
  previousMonth: "Previous month (PageUp)",
  nextMonth: "Next month (PageDown)",
  previousYear: "Last year (Control + left)",
  nextYear: "Next year (Control + right)",
  previousDecade: "Last decade",
  nextDecade: "Next decade",
  previousCentury: "Last century",
  nextCentury: "Next century"
};
const gd = {
  placeholder: "Select time",
  rangePlaceholder: ["Start time", "End time"]
}, Hl = {
  lang: Object.assign({
    placeholder: "Select date",
    yearPlaceholder: "Select year",
    quarterPlaceholder: "Select quarter",
    monthPlaceholder: "Select month",
    weekPlaceholder: "Select week",
    rangePlaceholder: ["Start date", "End date"],
    rangeYearPlaceholder: ["Start year", "End year"],
    rangeQuarterPlaceholder: ["Start quarter", "End quarter"],
    rangeMonthPlaceholder: ["Start month", "End month"],
    rangeWeekPlaceholder: ["Start week", "End week"]
  }, ep),
  timePickerLocale: Object.assign({}, gd)
}, Jt = "${label} is not a valid ${type}", zn = {
  locale: "en",
  Pagination: Jm,
  DatePicker: Hl,
  TimePicker: gd,
  Calendar: Hl,
  global: {
    placeholder: "Please select"
  },
  Table: {
    filterTitle: "Filter menu",
    filterConfirm: "OK",
    filterReset: "Reset",
    filterEmptyText: "No filters",
    filterCheckall: "Select all items",
    filterSearchPlaceholder: "Search in filters",
    emptyText: "No data",
    selectAll: "Select current page",
    selectInvert: "Invert current page",
    selectNone: "Clear all data",
    selectionAll: "Select all data",
    sortTitle: "Sort",
    expand: "Expand row",
    collapse: "Collapse row",
    triggerDesc: "Click to sort descending",
    triggerAsc: "Click to sort ascending",
    cancelSort: "Click to cancel sorting"
  },
  Tour: {
    Next: "Next",
    Previous: "Previous",
    Finish: "Finish"
  },
  Modal: {
    okText: "OK",
    cancelText: "Cancel",
    justOkText: "OK"
  },
  Popconfirm: {
    okText: "OK",
    cancelText: "Cancel"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Search here",
    itemUnit: "item",
    itemsUnit: "items",
    remove: "Remove",
    selectCurrent: "Select current page",
    removeCurrent: "Remove current page",
    selectAll: "Select all data",
    deselectAll: "Deselect all data",
    removeAll: "Remove all data",
    selectInvert: "Invert current page"
  },
  Upload: {
    uploading: "Uploading...",
    removeFile: "Remove file",
    uploadError: "Upload error",
    previewFile: "Preview file",
    downloadFile: "Download file"
  },
  Empty: {
    description: "No data"
  },
  Icon: {
    icon: "icon"
  },
  Text: {
    edit: "Edit",
    copy: "Copy",
    copied: "Copied",
    expand: "Expand",
    collapse: "Collapse"
  },
  Form: {
    optional: "(optional)",
    defaultValidateMessages: {
      default: "Field validation error for ${label}",
      required: "Please enter ${label}",
      enum: "${label} must be one of [${enum}]",
      whitespace: "${label} cannot be a blank character",
      date: {
        format: "${label} date format is invalid",
        parse: "${label} cannot be converted to a date",
        invalid: "${label} is an invalid date"
      },
      types: {
        string: Jt,
        method: Jt,
        array: Jt,
        object: Jt,
        number: Jt,
        date: Jt,
        boolean: Jt,
        integer: Jt,
        float: Jt,
        regexp: Jt,
        email: Jt,
        url: Jt,
        hex: Jt
      },
      string: {
        len: "${label} must be ${len} characters",
        min: "${label} must be at least ${min} characters",
        max: "${label} must be up to ${max} characters",
        range: "${label} must be between ${min}-${max} characters"
      },
      number: {
        len: "${label} must be equal to ${len}",
        min: "${label} must be minimum ${min}",
        max: "${label} must be maximum ${max}",
        range: "${label} must be between ${min}-${max}"
      },
      array: {
        len: "Must be ${len} ${label}",
        min: "At least ${min} ${label}",
        max: "At most ${max} ${label}",
        range: "The amount of ${label} must be between ${min}-${max}"
      },
      pattern: {
        mismatch: "${label} does not match the pattern ${pattern}"
      }
    }
  },
  Image: {
    preview: "Preview"
  },
  QRCode: {
    expired: "QR code expired",
    refresh: "Refresh",
    scanned: "Scanned"
  },
  ColorPicker: {
    presetEmpty: "Empty"
  }
};
Object.assign({}, zn.Modal);
let mo = [];
const Wl = () => mo.reduce((e, t) => Object.assign(Object.assign({}, e), t), zn.Modal);
function tp(e) {
  if (e) {
    const t = Object.assign({}, e);
    return mo.push(t), Wl(), () => {
      mo = mo.filter((r) => r !== t), Wl();
    };
  }
  Object.assign({}, zn.Modal);
}
const Us = /* @__PURE__ */ dn(void 0), rp = (e, t) => {
  const r = u.useContext(Us), n = u.useMemo(() => {
    var o;
    const i = zn[e], s = (o = r == null ? void 0 : r[e]) !== null && o !== void 0 ? o : {};
    return Object.assign(Object.assign({}, typeof i == "function" ? i() : i), s || {});
  }, [e, t, r]), a = u.useMemo(() => {
    const o = r == null ? void 0 : r.locale;
    return r != null && r.exist && !o ? zn.locale : o;
  }, [r]);
  return [n, a];
}, md = "internalMark", pd = (e) => {
  const {
    locale: t = {},
    children: r,
    _ANT_MARK__: n
  } = e;
  if (process.env.NODE_ENV !== "production") {
    const o = Ft("LocaleProvider");
    process.env.NODE_ENV !== "production" && o(n === md, "deprecated", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale");
  }
  u.useEffect(() => tp(t == null ? void 0 : t.Modal), [t]);
  const a = u.useMemo(() => Object.assign(Object.assign({}, t), {
    exist: !0
  }), [t]);
  return /* @__PURE__ */ u.createElement(Us.Provider, {
    value: a
  }, r);
};
process.env.NODE_ENV !== "production" && (pd.displayName = "LocaleProvider");
function jt(e, t) {
  np(e) && (e = "100%");
  var r = ap(e);
  return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), r && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e);
}
function Ua(e) {
  return Math.min(1, Math.max(0, e));
}
function np(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function ap(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function hd(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function Ga(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function sn(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function op(e, t, r) {
  return {
    r: jt(e, 255) * 255,
    g: jt(t, 255) * 255,
    b: jt(r, 255) * 255
  };
}
function Kl(e, t, r) {
  e = jt(e, 255), t = jt(t, 255), r = jt(r, 255);
  var n = Math.max(e, t, r), a = Math.min(e, t, r), o = 0, i = 0, s = (n + a) / 2;
  if (n === a)
    i = 0, o = 0;
  else {
    var l = n - a;
    switch (i = s > 0.5 ? l / (2 - n - a) : l / (n + a), n) {
      case e:
        o = (t - r) / l + (t < r ? 6 : 0);
        break;
      case t:
        o = (r - e) / l + 2;
        break;
      case r:
        o = (e - t) / l + 4;
        break;
    }
    o /= 6;
  }
  return { h: o, s: i, l: s };
}
function li(e, t, r) {
  return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + (t - e) * (6 * r) : r < 1 / 2 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e;
}
function ip(e, t, r) {
  var n, a, o;
  if (e = jt(e, 360), t = jt(t, 100), r = jt(r, 100), t === 0)
    a = r, o = r, n = r;
  else {
    var i = r < 0.5 ? r * (1 + t) : r + t - r * t, s = 2 * r - i;
    n = li(s, i, e + 1 / 3), a = li(s, i, e), o = li(s, i, e - 1 / 3);
  }
  return { r: n * 255, g: a * 255, b: o * 255 };
}
function Qi(e, t, r) {
  e = jt(e, 255), t = jt(t, 255), r = jt(r, 255);
  var n = Math.max(e, t, r), a = Math.min(e, t, r), o = 0, i = n, s = n - a, l = n === 0 ? 0 : s / n;
  if (n === a)
    o = 0;
  else {
    switch (n) {
      case e:
        o = (t - r) / s + (t < r ? 6 : 0);
        break;
      case t:
        o = (r - e) / s + 2;
        break;
      case r:
        o = (e - t) / s + 4;
        break;
    }
    o /= 6;
  }
  return { h: o, s: l, v: i };
}
function sp(e, t, r) {
  e = jt(e, 360) * 6, t = jt(t, 100), r = jt(r, 100);
  var n = Math.floor(e), a = e - n, o = r * (1 - t), i = r * (1 - a * t), s = r * (1 - (1 - a) * t), l = n % 6, c = [r, i, o, o, s, r][l], d = [s, r, r, i, o, o][l], f = [o, o, s, r, r, i][l];
  return { r: c * 255, g: d * 255, b: f * 255 };
}
function Ji(e, t, r, n) {
  var a = [
    sn(Math.round(e).toString(16)),
    sn(Math.round(t).toString(16)),
    sn(Math.round(r).toString(16))
  ];
  return n && a[0].startsWith(a[0].charAt(1)) && a[1].startsWith(a[1].charAt(1)) && a[2].startsWith(a[2].charAt(1)) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) : a.join("");
}
function lp(e, t, r, n, a) {
  var o = [
    sn(Math.round(e).toString(16)),
    sn(Math.round(t).toString(16)),
    sn(Math.round(r).toString(16)),
    sn(cp(n))
  ];
  return a && o[0].startsWith(o[0].charAt(1)) && o[1].startsWith(o[1].charAt(1)) && o[2].startsWith(o[2].charAt(1)) && o[3].startsWith(o[3].charAt(1)) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) + o[3].charAt(0) : o.join("");
}
function cp(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function Ul(e) {
  return tr(e) / 255;
}
function tr(e) {
  return parseInt(e, 16);
}
function up(e) {
  return {
    r: e >> 16,
    g: (e & 65280) >> 8,
    b: e & 255
  };
}
var es = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};
function Pn(e) {
  var t = { r: 0, g: 0, b: 0 }, r = 1, n = null, a = null, o = null, i = !1, s = !1;
  return typeof e == "string" && (e = vp(e)), typeof e == "object" && (Ir(e.r) && Ir(e.g) && Ir(e.b) ? (t = op(e.r, e.g, e.b), i = !0, s = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : Ir(e.h) && Ir(e.s) && Ir(e.v) ? (n = Ga(e.s), a = Ga(e.v), t = sp(e.h, n, a), i = !0, s = "hsv") : Ir(e.h) && Ir(e.s) && Ir(e.l) && (n = Ga(e.s), o = Ga(e.l), t = ip(e.h, n, o), i = !0, s = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (r = e.a)), r = hd(r), {
    ok: i,
    format: e.format || s,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: r
  };
}
var dp = "[-\\+]?\\d+%?", fp = "[-\\+]?\\d*\\.\\d+%?", Xr = "(?:".concat(fp, ")|(?:").concat(dp, ")"), ci = "[\\s|\\(]+(".concat(Xr, ")[,|\\s]+(").concat(Xr, ")[,|\\s]+(").concat(Xr, ")\\s*\\)?"), ui = "[\\s|\\(]+(".concat(Xr, ")[,|\\s]+(").concat(Xr, ")[,|\\s]+(").concat(Xr, ")[,|\\s]+(").concat(Xr, ")\\s*\\)?"), gr = {
  CSS_UNIT: new RegExp(Xr),
  rgb: new RegExp("rgb" + ci),
  rgba: new RegExp("rgba" + ui),
  hsl: new RegExp("hsl" + ci),
  hsla: new RegExp("hsla" + ui),
  hsv: new RegExp("hsv" + ci),
  hsva: new RegExp("hsva" + ui),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function vp(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var t = !1;
  if (es[e])
    e = es[e], t = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var r = gr.rgb.exec(e);
  return r ? { r: r[1], g: r[2], b: r[3] } : (r = gr.rgba.exec(e), r ? { r: r[1], g: r[2], b: r[3], a: r[4] } : (r = gr.hsl.exec(e), r ? { h: r[1], s: r[2], l: r[3] } : (r = gr.hsla.exec(e), r ? { h: r[1], s: r[2], l: r[3], a: r[4] } : (r = gr.hsv.exec(e), r ? { h: r[1], s: r[2], v: r[3] } : (r = gr.hsva.exec(e), r ? { h: r[1], s: r[2], v: r[3], a: r[4] } : (r = gr.hex8.exec(e), r ? {
    r: tr(r[1]),
    g: tr(r[2]),
    b: tr(r[3]),
    a: Ul(r[4]),
    format: t ? "name" : "hex8"
  } : (r = gr.hex6.exec(e), r ? {
    r: tr(r[1]),
    g: tr(r[2]),
    b: tr(r[3]),
    format: t ? "name" : "hex"
  } : (r = gr.hex4.exec(e), r ? {
    r: tr(r[1] + r[1]),
    g: tr(r[2] + r[2]),
    b: tr(r[3] + r[3]),
    a: Ul(r[4] + r[4]),
    format: t ? "name" : "hex8"
  } : (r = gr.hex3.exec(e), r ? {
    r: tr(r[1] + r[1]),
    g: tr(r[2] + r[2]),
    b: tr(r[3] + r[3]),
    format: t ? "name" : "hex"
  } : !1)))))))));
}
function Ir(e) {
  return !!gr.CSS_UNIT.exec(String(e));
}
var rr = (
  /** @class */
  function() {
    function e(t, r) {
      t === void 0 && (t = ""), r === void 0 && (r = {});
      var n;
      if (t instanceof e)
        return t;
      typeof t == "number" && (t = up(t)), this.originalInput = t;
      var a = Pn(t);
      this.originalInput = t, this.r = a.r, this.g = a.g, this.b = a.b, this.a = a.a, this.roundA = Math.round(100 * this.a) / 100, this.format = (n = r.format) !== null && n !== void 0 ? n : a.format, this.gradientType = r.gradientType, this.r < 1 && (this.r = Math.round(this.r)), this.g < 1 && (this.g = Math.round(this.g)), this.b < 1 && (this.b = Math.round(this.b)), this.isValid = a.ok;
    }
    return e.prototype.isDark = function() {
      return this.getBrightness() < 128;
    }, e.prototype.isLight = function() {
      return !this.isDark();
    }, e.prototype.getBrightness = function() {
      var t = this.toRgb();
      return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3;
    }, e.prototype.getLuminance = function() {
      var t = this.toRgb(), r, n, a, o = t.r / 255, i = t.g / 255, s = t.b / 255;
      return o <= 0.03928 ? r = o / 12.92 : r = Math.pow((o + 0.055) / 1.055, 2.4), i <= 0.03928 ? n = i / 12.92 : n = Math.pow((i + 0.055) / 1.055, 2.4), s <= 0.03928 ? a = s / 12.92 : a = Math.pow((s + 0.055) / 1.055, 2.4), 0.2126 * r + 0.7152 * n + 0.0722 * a;
    }, e.prototype.getAlpha = function() {
      return this.a;
    }, e.prototype.setAlpha = function(t) {
      return this.a = hd(t), this.roundA = Math.round(100 * this.a) / 100, this;
    }, e.prototype.isMonochrome = function() {
      var t = this.toHsl().s;
      return t === 0;
    }, e.prototype.toHsv = function() {
      var t = Qi(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
    }, e.prototype.toHsvString = function() {
      var t = Qi(this.r, this.g, this.b), r = Math.round(t.h * 360), n = Math.round(t.s * 100), a = Math.round(t.v * 100);
      return this.a === 1 ? "hsv(".concat(r, ", ").concat(n, "%, ").concat(a, "%)") : "hsva(".concat(r, ", ").concat(n, "%, ").concat(a, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHsl = function() {
      var t = Kl(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
    }, e.prototype.toHslString = function() {
      var t = Kl(this.r, this.g, this.b), r = Math.round(t.h * 360), n = Math.round(t.s * 100), a = Math.round(t.l * 100);
      return this.a === 1 ? "hsl(".concat(r, ", ").concat(n, "%, ").concat(a, "%)") : "hsla(".concat(r, ", ").concat(n, "%, ").concat(a, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHex = function(t) {
      return t === void 0 && (t = !1), Ji(this.r, this.g, this.b, t);
    }, e.prototype.toHexString = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex(t);
    }, e.prototype.toHex8 = function(t) {
      return t === void 0 && (t = !1), lp(this.r, this.g, this.b, this.a, t);
    }, e.prototype.toHex8String = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex8(t);
    }, e.prototype.toHexShortString = function(t) {
      return t === void 0 && (t = !1), this.a === 1 ? this.toHexString(t) : this.toHex8String(t);
    }, e.prototype.toRgb = function() {
      return {
        r: Math.round(this.r),
        g: Math.round(this.g),
        b: Math.round(this.b),
        a: this.a
      };
    }, e.prototype.toRgbString = function() {
      var t = Math.round(this.r), r = Math.round(this.g), n = Math.round(this.b);
      return this.a === 1 ? "rgb(".concat(t, ", ").concat(r, ", ").concat(n, ")") : "rgba(".concat(t, ", ").concat(r, ", ").concat(n, ", ").concat(this.roundA, ")");
    }, e.prototype.toPercentageRgb = function() {
      var t = function(r) {
        return "".concat(Math.round(jt(r, 255) * 100), "%");
      };
      return {
        r: t(this.r),
        g: t(this.g),
        b: t(this.b),
        a: this.a
      };
    }, e.prototype.toPercentageRgbString = function() {
      var t = function(r) {
        return Math.round(jt(r, 255) * 100);
      };
      return this.a === 1 ? "rgb(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%)") : "rgba(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%, ").concat(this.roundA, ")");
    }, e.prototype.toName = function() {
      if (this.a === 0)
        return "transparent";
      if (this.a < 1)
        return !1;
      for (var t = "#" + Ji(this.r, this.g, this.b, !1), r = 0, n = Object.entries(es); r < n.length; r++) {
        var a = n[r], o = a[0], i = a[1];
        if (t === i)
          return o;
      }
      return !1;
    }, e.prototype.toString = function(t) {
      var r = !!t;
      t = t ?? this.format;
      var n = !1, a = this.a < 1 && this.a >= 0, o = !r && a && (t.startsWith("hex") || t === "name");
      return o ? t === "name" && this.a === 0 ? this.toName() : this.toRgbString() : (t === "rgb" && (n = this.toRgbString()), t === "prgb" && (n = this.toPercentageRgbString()), (t === "hex" || t === "hex6") && (n = this.toHexString()), t === "hex3" && (n = this.toHexString(!0)), t === "hex4" && (n = this.toHex8String(!0)), t === "hex8" && (n = this.toHex8String()), t === "name" && (n = this.toName()), t === "hsl" && (n = this.toHslString()), t === "hsv" && (n = this.toHsvString()), n || this.toHexString());
    }, e.prototype.toNumber = function() {
      return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
    }, e.prototype.clone = function() {
      return new e(this.toString());
    }, e.prototype.lighten = function(t) {
      t === void 0 && (t = 10);
      var r = this.toHsl();
      return r.l += t / 100, r.l = Ua(r.l), new e(r);
    }, e.prototype.brighten = function(t) {
      t === void 0 && (t = 10);
      var r = this.toRgb();
      return r.r = Math.max(0, Math.min(255, r.r - Math.round(255 * -(t / 100)))), r.g = Math.max(0, Math.min(255, r.g - Math.round(255 * -(t / 100)))), r.b = Math.max(0, Math.min(255, r.b - Math.round(255 * -(t / 100)))), new e(r);
    }, e.prototype.darken = function(t) {
      t === void 0 && (t = 10);
      var r = this.toHsl();
      return r.l -= t / 100, r.l = Ua(r.l), new e(r);
    }, e.prototype.tint = function(t) {
      return t === void 0 && (t = 10), this.mix("white", t);
    }, e.prototype.shade = function(t) {
      return t === void 0 && (t = 10), this.mix("black", t);
    }, e.prototype.desaturate = function(t) {
      t === void 0 && (t = 10);
      var r = this.toHsl();
      return r.s -= t / 100, r.s = Ua(r.s), new e(r);
    }, e.prototype.saturate = function(t) {
      t === void 0 && (t = 10);
      var r = this.toHsl();
      return r.s += t / 100, r.s = Ua(r.s), new e(r);
    }, e.prototype.greyscale = function() {
      return this.desaturate(100);
    }, e.prototype.spin = function(t) {
      var r = this.toHsl(), n = (r.h + t) % 360;
      return r.h = n < 0 ? 360 + n : n, new e(r);
    }, e.prototype.mix = function(t, r) {
      r === void 0 && (r = 50);
      var n = this.toRgb(), a = new e(t).toRgb(), o = r / 100, i = {
        r: (a.r - n.r) * o + n.r,
        g: (a.g - n.g) * o + n.g,
        b: (a.b - n.b) * o + n.b,
        a: (a.a - n.a) * o + n.a
      };
      return new e(i);
    }, e.prototype.analogous = function(t, r) {
      t === void 0 && (t = 6), r === void 0 && (r = 30);
      var n = this.toHsl(), a = 360 / r, o = [this];
      for (n.h = (n.h - (a * t >> 1) + 720) % 360; --t; )
        n.h = (n.h + a) % 360, o.push(new e(n));
      return o;
    }, e.prototype.complement = function() {
      var t = this.toHsl();
      return t.h = (t.h + 180) % 360, new e(t);
    }, e.prototype.monochromatic = function(t) {
      t === void 0 && (t = 6);
      for (var r = this.toHsv(), n = r.h, a = r.s, o = r.v, i = [], s = 1 / t; t--; )
        i.push(new e({ h: n, s: a, v: o })), o = (o + s) % 1;
      return i;
    }, e.prototype.splitcomplement = function() {
      var t = this.toHsl(), r = t.h;
      return [
        this,
        new e({ h: (r + 72) % 360, s: t.s, l: t.l }),
        new e({ h: (r + 216) % 360, s: t.s, l: t.l })
      ];
    }, e.prototype.onBackground = function(t) {
      var r = this.toRgb(), n = new e(t).toRgb(), a = r.a + n.a * (1 - r.a);
      return new e({
        r: (r.r * r.a + n.r * n.a * (1 - r.a)) / a,
        g: (r.g * r.a + n.g * n.a * (1 - r.a)) / a,
        b: (r.b * r.a + n.b * n.a * (1 - r.a)) / a,
        a
      });
    }, e.prototype.triad = function() {
      return this.polyad(3);
    }, e.prototype.tetrad = function() {
      return this.polyad(4);
    }, e.prototype.polyad = function(t) {
      for (var r = this.toHsl(), n = r.h, a = [this], o = 360 / t, i = 1; i < t; i++)
        a.push(new e({ h: (n + i * o) % 360, s: r.s, l: r.l }));
      return a;
    }, e.prototype.equals = function(t) {
      return this.toRgbString() === new e(t).toRgbString();
    }, e;
  }()
), qa = 2, Gl = 0.16, gp = 0.05, mp = 0.05, pp = 0.15, bd = 5, yd = 4, hp = [{
  index: 7,
  opacity: 0.15
}, {
  index: 6,
  opacity: 0.25
}, {
  index: 5,
  opacity: 0.3
}, {
  index: 5,
  opacity: 0.45
}, {
  index: 5,
  opacity: 0.65
}, {
  index: 5,
  opacity: 0.85
}, {
  index: 4,
  opacity: 0.9
}, {
  index: 3,
  opacity: 0.95
}, {
  index: 2,
  opacity: 0.97
}, {
  index: 1,
  opacity: 0.98
}];
function ql(e) {
  var t = e.r, r = e.g, n = e.b, a = Qi(t, r, n);
  return {
    h: a.h * 360,
    s: a.s,
    v: a.v
  };
}
function Xa(e) {
  var t = e.r, r = e.g, n = e.b;
  return "#".concat(Ji(t, r, n, !1));
}
function bp(e, t, r) {
  var n = r / 100, a = {
    r: (t.r - e.r) * n + e.r,
    g: (t.g - e.g) * n + e.g,
    b: (t.b - e.b) * n + e.b
  };
  return a;
}
function Xl(e, t, r) {
  var n;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? n = r ? Math.round(e.h) - qa * t : Math.round(e.h) + qa * t : n = r ? Math.round(e.h) + qa * t : Math.round(e.h) - qa * t, n < 0 ? n += 360 : n >= 360 && (n -= 360), n;
}
function Yl(e, t, r) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  var n;
  return r ? n = e.s - Gl * t : t === yd ? n = e.s + Gl : n = e.s + gp * t, n > 1 && (n = 1), r && t === bd && n > 0.1 && (n = 0.1), n < 0.06 && (n = 0.06), Number(n.toFixed(2));
}
function Zl(e, t, r) {
  var n;
  return r ? n = e.v + mp * t : n = e.v - pp * t, n > 1 && (n = 1), Number(n.toFixed(2));
}
function $a(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = [], n = Pn(e), a = bd; a > 0; a -= 1) {
    var o = ql(n), i = Xa(Pn({
      h: Xl(o, a, !0),
      s: Yl(o, a, !0),
      v: Zl(o, a, !0)
    }));
    r.push(i);
  }
  r.push(Xa(n));
  for (var s = 1; s <= yd; s += 1) {
    var l = ql(n), c = Xa(Pn({
      h: Xl(l, s),
      s: Yl(l, s),
      v: Zl(l, s)
    }));
    r.push(c);
  }
  return t.theme === "dark" ? hp.map(function(d) {
    var f = d.index, v = d.opacity, m = Xa(bp(Pn(t.backgroundColor || "#141414"), Pn(r[f]), v * 100));
    return m;
  }) : r;
}
var ts = ["#fffbe6", "#fff1b8", "#ffe58f", "#ffd666", "#ffc53d", "#faad14", "#d48806", "#ad6800", "#874d00", "#613400"];
ts.primary = ts[5];
var rs = ["#e6f4ff", "#bae0ff", "#91caff", "#69b1ff", "#4096ff", "#1677ff", "#0958d9", "#003eb3", "#002c8c", "#001d66"];
rs.primary = rs[5];
const Sd = {
  blue: "#1677ff",
  purple: "#722ED1",
  cyan: "#13C2C2",
  green: "#52C41A",
  magenta: "#EB2F96",
  pink: "#eb2f96",
  red: "#F5222D",
  orange: "#FA8C16",
  yellow: "#FADB14",
  volcano: "#FA541C",
  geekblue: "#2F54EB",
  gold: "#FAAD14",
  lime: "#A0D911"
}, Oa = Object.assign(Object.assign({}, Sd), {
  // Color
  colorPrimary: "#1677ff",
  colorSuccess: "#52c41a",
  colorWarning: "#faad14",
  colorError: "#ff4d4f",
  colorInfo: "#1677ff",
  colorLink: "",
  colorTextBase: "",
  colorBgBase: "",
  // Font
  fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,
  fontFamilyCode: "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
  fontSize: 14,
  // Line
  lineWidth: 1,
  lineType: "solid",
  // Motion
  motionUnit: 0.1,
  motionBase: 0,
  motionEaseOutCirc: "cubic-bezier(0.08, 0.82, 0.17, 1)",
  motionEaseInOutCirc: "cubic-bezier(0.78, 0.14, 0.15, 0.86)",
  motionEaseOut: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  motionEaseInOut: "cubic-bezier(0.645, 0.045, 0.355, 1)",
  motionEaseOutBack: "cubic-bezier(0.12, 0.4, 0.29, 1.46)",
  motionEaseInBack: "cubic-bezier(0.71, -0.46, 0.88, 0.6)",
  motionEaseInQuint: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
  motionEaseOutQuint: "cubic-bezier(0.23, 1, 0.32, 1)",
  // Radius
  borderRadius: 6,
  // Size
  sizeUnit: 4,
  sizeStep: 4,
  sizePopupArrow: 16,
  // Control Base
  controlHeight: 32,
  // zIndex
  zIndexBase: 0,
  zIndexPopupBase: 1e3,
  // Image
  opacityImage: 1,
  // Wireframe
  wireframe: !1,
  // Motion
  motion: !0
});
function yp(e, t) {
  let {
    generateColorPalettes: r,
    generateNeutralColorPalettes: n
  } = t;
  const {
    colorSuccess: a,
    colorWarning: o,
    colorError: i,
    colorInfo: s,
    colorPrimary: l,
    colorBgBase: c,
    colorTextBase: d
  } = e, f = r(l), v = r(a), m = r(o), h = r(i), p = r(s), g = n(c, d), S = e.colorLink || e.colorInfo, b = r(S);
  return Object.assign(Object.assign({}, g), {
    colorPrimaryBg: f[1],
    colorPrimaryBgHover: f[2],
    colorPrimaryBorder: f[3],
    colorPrimaryBorderHover: f[4],
    colorPrimaryHover: f[5],
    colorPrimary: f[6],
    colorPrimaryActive: f[7],
    colorPrimaryTextHover: f[8],
    colorPrimaryText: f[9],
    colorPrimaryTextActive: f[10],
    colorSuccessBg: v[1],
    colorSuccessBgHover: v[2],
    colorSuccessBorder: v[3],
    colorSuccessBorderHover: v[4],
    colorSuccessHover: v[4],
    colorSuccess: v[6],
    colorSuccessActive: v[7],
    colorSuccessTextHover: v[8],
    colorSuccessText: v[9],
    colorSuccessTextActive: v[10],
    colorErrorBg: h[1],
    colorErrorBgHover: h[2],
    colorErrorBgActive: h[3],
    colorErrorBorder: h[3],
    colorErrorBorderHover: h[4],
    colorErrorHover: h[5],
    colorError: h[6],
    colorErrorActive: h[7],
    colorErrorTextHover: h[8],
    colorErrorText: h[9],
    colorErrorTextActive: h[10],
    colorWarningBg: m[1],
    colorWarningBgHover: m[2],
    colorWarningBorder: m[3],
    colorWarningBorderHover: m[4],
    colorWarningHover: m[4],
    colorWarning: m[6],
    colorWarningActive: m[7],
    colorWarningTextHover: m[8],
    colorWarningText: m[9],
    colorWarningTextActive: m[10],
    colorInfoBg: p[1],
    colorInfoBgHover: p[2],
    colorInfoBorder: p[3],
    colorInfoBorderHover: p[4],
    colorInfoHover: p[4],
    colorInfo: p[6],
    colorInfoActive: p[7],
    colorInfoTextHover: p[8],
    colorInfoText: p[9],
    colorInfoTextActive: p[10],
    colorLinkHover: b[4],
    colorLink: b[6],
    colorLinkActive: b[7],
    colorBgMask: new rr("#000").setAlpha(0.45).toRgbString(),
    colorWhite: "#fff"
  });
}
const Sp = (e) => {
  let t = e, r = e, n = e, a = e;
  return e < 6 && e >= 5 ? t = e + 1 : e < 16 && e >= 6 ? t = e + 2 : e >= 16 && (t = 16), e < 7 && e >= 5 ? r = 4 : e < 8 && e >= 7 ? r = 5 : e < 14 && e >= 8 ? r = 6 : e < 16 && e >= 14 ? r = 7 : e >= 16 && (r = 8), e < 6 && e >= 2 ? n = 1 : e >= 6 && (n = 2), e > 4 && e < 8 ? a = 4 : e >= 8 && (a = 6), {
    borderRadius: e,
    borderRadiusXS: n,
    borderRadiusSM: r,
    borderRadiusLG: t,
    borderRadiusOuter: a
  };
};
function Cp(e) {
  const {
    motionUnit: t,
    motionBase: r,
    borderRadius: n,
    lineWidth: a
  } = e;
  return Object.assign({
    // motion
    motionDurationFast: `${(r + t).toFixed(1)}s`,
    motionDurationMid: `${(r + t * 2).toFixed(1)}s`,
    motionDurationSlow: `${(r + t * 3).toFixed(1)}s`,
    // line
    lineWidthBold: a + 1
  }, Sp(n));
}
const Ep = (e) => {
  const {
    controlHeight: t
  } = e;
  return {
    controlHeightSM: t * 0.75,
    controlHeightXS: t * 0.5,
    controlHeightLG: t * 1.25
  };
};
function po(e) {
  return (e + 8) / e;
}
function wp(e) {
  const t = new Array(10).fill(null).map((r, n) => {
    const a = n - 1, o = e * Math.pow(Math.E, a / 5), i = n > 1 ? Math.floor(o) : Math.ceil(o);
    return Math.floor(i / 2) * 2;
  });
  return t[1] = e, t.map((r) => ({
    size: r,
    lineHeight: po(r)
  }));
}
const xp = (e) => {
  const t = wp(e), r = t.map((d) => d.size), n = t.map((d) => d.lineHeight), a = r[1], o = r[0], i = r[2], s = n[1], l = n[0], c = n[2];
  return {
    fontSizeSM: o,
    fontSize: a,
    fontSizeLG: i,
    fontSizeXL: r[3],
    fontSizeHeading1: r[6],
    fontSizeHeading2: r[5],
    fontSizeHeading3: r[4],
    fontSizeHeading4: r[3],
    fontSizeHeading5: r[2],
    lineHeight: s,
    lineHeightLG: c,
    lineHeightSM: l,
    fontHeight: Math.round(s * a),
    fontHeightLG: Math.round(c * i),
    fontHeightSM: Math.round(l * o),
    lineHeightHeading1: n[6],
    lineHeightHeading2: n[5],
    lineHeightHeading3: n[4],
    lineHeightHeading4: n[3],
    lineHeightHeading5: n[2]
  };
};
function $p(e) {
  const {
    sizeUnit: t,
    sizeStep: r
  } = e;
  return {
    sizeXXL: t * (r + 8),
    // 48
    sizeXL: t * (r + 4),
    // 32
    sizeLG: t * (r + 2),
    // 24
    sizeMD: t * (r + 1),
    // 20
    sizeMS: t * r,
    // 16
    size: t * r,
    // 16
    sizeSM: t * (r - 1),
    // 12
    sizeXS: t * (r - 2),
    // 8
    sizeXXS: t * (r - 3)
    // 4
  };
}
const Mr = (e, t) => new rr(e).setAlpha(t).toRgbString(), aa = (e, t) => new rr(e).darken(t).toHexString(), Op = (e) => {
  const t = $a(e);
  return {
    1: t[0],
    2: t[1],
    3: t[2],
    4: t[3],
    5: t[4],
    6: t[5],
    7: t[6],
    8: t[4],
    9: t[5],
    10: t[6]
    // 8: colors[7],
    // 9: colors[8],
    // 10: colors[9],
  };
}, Rp = (e, t) => {
  const r = e || "#fff", n = t || "#000";
  return {
    colorBgBase: r,
    colorTextBase: n,
    colorText: Mr(n, 0.88),
    colorTextSecondary: Mr(n, 0.65),
    colorTextTertiary: Mr(n, 0.45),
    colorTextQuaternary: Mr(n, 0.25),
    colorFill: Mr(n, 0.15),
    colorFillSecondary: Mr(n, 0.06),
    colorFillTertiary: Mr(n, 0.04),
    colorFillQuaternary: Mr(n, 0.02),
    colorBgLayout: aa(r, 4),
    colorBgContainer: aa(r, 0),
    colorBgElevated: aa(r, 0),
    colorBgSpotlight: Mr(n, 0.85),
    colorBgBlur: "transparent",
    colorBorder: aa(r, 15),
    colorBorderSecondary: aa(r, 6)
  };
};
function _p(e) {
  const t = Object.keys(Sd).map((r) => {
    const n = $a(e[r]);
    return new Array(10).fill(1).reduce((a, o, i) => (a[`${r}-${i + 1}`] = n[i], a[`${r}${i + 1}`] = n[i], a), {});
  }).reduce((r, n) => (r = Object.assign(Object.assign({}, r), n), r), {});
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, e), t), yp(e, {
    generateColorPalettes: Op,
    generateNeutralColorPalettes: Rp
  })), xp(e.fontSize)), $p(e)), Ep(e)), Cp(e));
}
const Cd = Wi(_p), ns = {
  token: Oa,
  override: {
    override: Oa
  },
  hashed: !0
}, Ed = /* @__PURE__ */ Y.createContext(ns), wd = "anticon", Pp = ["outlined", "borderless", "filled"], Tp = (e, t) => t || (e ? `ant-${e}` : "ant"), bt = /* @__PURE__ */ u.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: Tp,
  iconPrefixCls: wd
}), Np = `-ant-${Date.now()}-${Math.random()}`;
function Ip(e, t) {
  const r = {}, n = (i, s) => {
    let l = i.clone();
    return l = (s == null ? void 0 : s(l)) || l, l.toRgbString();
  }, a = (i, s) => {
    const l = new rr(i), c = $a(l.toRgbString());
    r[`${s}-color`] = n(l), r[`${s}-color-disabled`] = c[1], r[`${s}-color-hover`] = c[4], r[`${s}-color-active`] = c[6], r[`${s}-color-outline`] = l.clone().setAlpha(0.2).toRgbString(), r[`${s}-color-deprecated-bg`] = c[0], r[`${s}-color-deprecated-border`] = c[2];
  };
  if (t.primaryColor) {
    a(t.primaryColor, "primary");
    const i = new rr(t.primaryColor), s = $a(i.toRgbString());
    s.forEach((c, d) => {
      r[`primary-${d + 1}`] = c;
    }), r["primary-color-deprecated-l-35"] = n(i, (c) => c.lighten(35)), r["primary-color-deprecated-l-20"] = n(i, (c) => c.lighten(20)), r["primary-color-deprecated-t-20"] = n(i, (c) => c.tint(20)), r["primary-color-deprecated-t-50"] = n(i, (c) => c.tint(50)), r["primary-color-deprecated-f-12"] = n(i, (c) => c.setAlpha(c.getAlpha() * 0.12));
    const l = new rr(s[0]);
    r["primary-color-active-deprecated-f-30"] = n(l, (c) => c.setAlpha(c.getAlpha() * 0.3)), r["primary-color-active-deprecated-d-02"] = n(l, (c) => c.darken(2));
  }
  return t.successColor && a(t.successColor, "success"), t.warningColor && a(t.warningColor, "warning"), t.errorColor && a(t.errorColor, "error"), t.infoColor && a(t.infoColor, "info"), `
  :root {
    ${Object.keys(r).map((i) => `--${e}-${i}: ${r[i]};`).join(`
`)}
  }
  `.trim();
}
function Mp(e, t) {
  const r = Ip(e, t);
  Xt() ? Fr(r, `${Np}-dynamic-theme`) : process.env.NODE_ENV !== "production" && Kn(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
}
const Vn = /* @__PURE__ */ u.createContext(!1), Ap = (e) => {
  let {
    children: t,
    disabled: r
  } = e;
  const n = u.useContext(Vn);
  return /* @__PURE__ */ u.createElement(Vn.Provider, {
    value: r ?? n
  }, t);
}, kn = /* @__PURE__ */ u.createContext(void 0), Lp = (e) => {
  let {
    children: t,
    size: r
  } = e;
  const n = u.useContext(kn);
  return /* @__PURE__ */ u.createElement(kn.Provider, {
    value: r || n
  }, t);
};
function jp() {
  const e = Lt(Vn), t = Lt(kn);
  return {
    componentDisabled: e,
    componentSize: t
  };
}
const xo = ["blue", "purple", "cyan", "green", "magenta", "pink", "red", "orange", "yellow", "volcano", "geekblue", "lime", "gold"], Fp = "5.19.0";
function di(e) {
  return e >= 0 && e <= 255;
}
function Ya(e, t) {
  const {
    r,
    g: n,
    b: a,
    a: o
  } = new rr(e).toRgb();
  if (o < 1)
    return e;
  const {
    r: i,
    g: s,
    b: l
  } = new rr(t).toRgb();
  for (let c = 0.01; c <= 1; c += 0.01) {
    const d = Math.round((r - i * (1 - c)) / c), f = Math.round((n - s * (1 - c)) / c), v = Math.round((a - l * (1 - c)) / c);
    if (di(d) && di(f) && di(v))
      return new rr({
        r: d,
        g: f,
        b: v,
        a: Math.round(c * 100) / 100
      }).toRgbString();
  }
  return new rr({
    r,
    g: n,
    b: a,
    a: 1
  }).toRgbString();
}
var Dp = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
    t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
function xd(e) {
  const {
    override: t
  } = e, r = Dp(e, ["override"]), n = Object.assign({}, t);
  Object.keys(Oa).forEach((v) => {
    delete n[v];
  });
  const a = Object.assign(Object.assign({}, r), n), o = 480, i = 576, s = 768, l = 992, c = 1200, d = 1600;
  if (a.motion === !1) {
    const v = "0s";
    a.motionDurationFast = v, a.motionDurationMid = v, a.motionDurationSlow = v;
  }
  return Object.assign(Object.assign(Object.assign({}, a), {
    // ============== Background ============== //
    colorFillContent: a.colorFillSecondary,
    colorFillContentHover: a.colorFill,
    colorFillAlter: a.colorFillQuaternary,
    colorBgContainerDisabled: a.colorFillTertiary,
    // ============== Split ============== //
    colorBorderBg: a.colorBgContainer,
    colorSplit: Ya(a.colorBorderSecondary, a.colorBgContainer),
    // ============== Text ============== //
    colorTextPlaceholder: a.colorTextQuaternary,
    colorTextDisabled: a.colorTextQuaternary,
    colorTextHeading: a.colorText,
    colorTextLabel: a.colorTextSecondary,
    colorTextDescription: a.colorTextTertiary,
    colorTextLightSolid: a.colorWhite,
    colorHighlight: a.colorError,
    colorBgTextHover: a.colorFillSecondary,
    colorBgTextActive: a.colorFill,
    colorIcon: a.colorTextTertiary,
    colorIconHover: a.colorText,
    colorErrorOutline: Ya(a.colorErrorBg, a.colorBgContainer),
    colorWarningOutline: Ya(a.colorWarningBg, a.colorBgContainer),
    // Font
    fontSizeIcon: a.fontSizeSM,
    // Line
    lineWidthFocus: a.lineWidth * 4,
    // Control
    lineWidth: a.lineWidth,
    controlOutlineWidth: a.lineWidth * 2,
    // Checkbox size and expand icon size
    controlInteractiveSize: a.controlHeight / 2,
    controlItemBgHover: a.colorFillTertiary,
    controlItemBgActive: a.colorPrimaryBg,
    controlItemBgActiveHover: a.colorPrimaryBgHover,
    controlItemBgActiveDisabled: a.colorFill,
    controlTmpOutline: a.colorFillQuaternary,
    controlOutline: Ya(a.colorPrimaryBg, a.colorBgContainer),
    lineType: a.lineType,
    borderRadius: a.borderRadius,
    borderRadiusXS: a.borderRadiusXS,
    borderRadiusSM: a.borderRadiusSM,
    borderRadiusLG: a.borderRadiusLG,
    fontWeightStrong: 600,
    opacityLoading: 0.65,
    linkDecoration: "none",
    linkHoverDecoration: "none",
    linkFocusDecoration: "none",
    controlPaddingHorizontal: 12,
    controlPaddingHorizontalSM: 8,
    paddingXXS: a.sizeXXS,
    paddingXS: a.sizeXS,
    paddingSM: a.sizeSM,
    padding: a.size,
    paddingMD: a.sizeMD,
    paddingLG: a.sizeLG,
    paddingXL: a.sizeXL,
    paddingContentHorizontalLG: a.sizeLG,
    paddingContentVerticalLG: a.sizeMS,
    paddingContentHorizontal: a.sizeMS,
    paddingContentVertical: a.sizeSM,
    paddingContentHorizontalSM: a.size,
    paddingContentVerticalSM: a.sizeXS,
    marginXXS: a.sizeXXS,
    marginXS: a.sizeXS,
    marginSM: a.sizeSM,
    margin: a.size,
    marginMD: a.sizeMD,
    marginLG: a.sizeLG,
    marginXL: a.sizeXL,
    marginXXL: a.sizeXXL,
    boxShadow: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowSecondary: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowTertiary: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
    screenXS: o,
    screenXSMin: o,
    screenXSMax: i - 1,
    screenSM: i,
    screenSMMin: i,
    screenSMMax: s - 1,
    screenMD: s,
    screenMDMin: s,
    screenMDMax: l - 1,
    screenLG: l,
    screenLGMin: l,
    screenLGMax: c - 1,
    screenXL: c,
    screenXLMin: c,
    screenXLMax: d - 1,
    screenXXL: d,
    screenXXLMin: d,
    boxShadowPopoverArrow: "2px 2px 5px rgba(0, 0, 0, 0.05)",
    boxShadowCard: `
      0 1px 2px -2px ${new rr("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new rr("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new rr("rgba(0, 0, 0, 0.09)").toRgbString()}
    `,
    boxShadowDrawerRight: `
      -6px 0 16px 0 rgba(0, 0, 0, 0.08),
      -3px 0 6px -4px rgba(0, 0, 0, 0.12),
      -9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerLeft: `
      6px 0 16px 0 rgba(0, 0, 0, 0.08),
      3px 0 6px -4px rgba(0, 0, 0, 0.12),
      9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerUp: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerDown: `
      0 -6px 16px 0 rgba(0, 0, 0, 0.08),
      0 -3px 6px -4px rgba(0, 0, 0, 0.12),
      0 -9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowTabsOverflowLeft: "inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowRight: "inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowTop: "inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowBottom: "inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)"
  }), n);
}
var Ql = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
    t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const $d = {
  lineHeight: !0,
  lineHeightSM: !0,
  lineHeightLG: !0,
  lineHeightHeading1: !0,
  lineHeightHeading2: !0,
  lineHeightHeading3: !0,
  lineHeightHeading4: !0,
  lineHeightHeading5: !0,
  opacityLoading: !0,
  fontWeightStrong: !0,
  zIndexPopupBase: !0,
  zIndexBase: !0
}, Od = {
  size: !0,
  sizeSM: !0,
  sizeLG: !0,
  sizeMD: !0,
  sizeXS: !0,
  sizeXXS: !0,
  sizeMS: !0,
  sizeXL: !0,
  sizeXXL: !0,
  sizeUnit: !0,
  sizeStep: !0,
  motionBase: !0,
  motionUnit: !0
}, zp = {
  screenXS: !0,
  screenXSMin: !0,
  screenXSMax: !0,
  screenSM: !0,
  screenSMMin: !0,
  screenSMMax: !0,
  screenMD: !0,
  screenMDMin: !0,
  screenMDMax: !0,
  screenLG: !0,
  screenLGMin: !0,
  screenLGMax: !0,
  screenXL: !0,
  screenXLMin: !0,
  screenXLMax: !0,
  screenXXL: !0,
  screenXXLMin: !0
}, Rd = (e, t, r) => {
  const n = r.getDerivativeToken(e), {
    override: a
  } = t, o = Ql(t, ["override"]);
  let i = Object.assign(Object.assign({}, n), {
    override: a
  });
  return i = xd(i), o && Object.entries(o).forEach((s) => {
    let [l, c] = s;
    const {
      theme: d
    } = c, f = Ql(c, ["theme"]);
    let v = f;
    d && (v = Rd(Object.assign(Object.assign({}, i), f), {
      override: f
    }, d)), i[l] = v;
  }), i;
};
function Rr() {
  const {
    token: e,
    hashed: t,
    theme: r,
    override: n,
    cssVar: a
  } = Y.useContext(Ed), o = `${Fp}-${t || ""}`, i = r || Cd, [s, l, c] = hm(i, [Oa, e], {
    salt: o,
    override: n,
    getComputedToken: Rd,
    // formatToken will not be consumed after 1.15.0 with getComputedToken.
    // But token will break if @ant-design/cssinjs is under 1.15.0 without it
    formatToken: xd,
    cssVar: a && {
      prefix: a.prefix,
      key: a.key,
      unitless: $d,
      ignore: Od,
      preserve: zp
    }
  });
  return [i, c, t ? l : "", s, a];
}
function Ht(e) {
  var t = u.useRef();
  t.current = e;
  var r = u.useCallback(function() {
    for (var n, a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return (n = t.current) === null || n === void 0 ? void 0 : n.call.apply(n, [t].concat(o));
  }, []);
  return r;
}
function Ra(e) {
  var t = u.useRef(!1), r = u.useState(e), n = G(r, 2), a = n[0], o = n[1];
  u.useEffect(function() {
    return t.current = !1, function() {
      t.current = !0;
    };
  }, []);
  function i(s, l) {
    l && t.current || o(s);
  }
  return [a, i];
}
function fi(e) {
  return e !== void 0;
}
function cr(e, t) {
  var r = t || {}, n = r.defaultValue, a = r.value, o = r.onChange, i = r.postState, s = Ra(function() {
    return fi(a) ? a : fi(n) ? typeof n == "function" ? n() : n : typeof e == "function" ? e() : e;
  }), l = G(s, 2), c = l[0], d = l[1], f = a !== void 0 ? a : c, v = i ? i(f) : f, m = Ht(o), h = Ra([f]), p = G(h, 2), g = p[0], S = p[1];
  Ui(function() {
    var y = g[0];
    c !== y && m(c, y);
  }, [g]), Ui(function() {
    fi(a) || d(a);
  }, [a]);
  var b = Ht(function(y, w) {
    d(y, w), S([f], w);
  });
  return [v, b];
}
const Vp = 1e3 * 60 * 10;
let kp = /* @__PURE__ */ function() {
  function e() {
    Dt(this, e), this.map = /* @__PURE__ */ new Map(), this.objectIDMap = /* @__PURE__ */ new WeakMap(), this.nextID = 0, this.lastAccessBeat = /* @__PURE__ */ new Map(), this.accessBeat = 0;
  }
  return zt(e, [{
    key: "set",
    value: function(r, n) {
      this.clear();
      const a = this.getCompositeKey(r);
      this.map.set(a, n), this.lastAccessBeat.set(a, Date.now());
    }
  }, {
    key: "get",
    value: function(r) {
      const n = this.getCompositeKey(r), a = this.map.get(n);
      return this.lastAccessBeat.set(n, Date.now()), this.accessBeat += 1, a;
    }
  }, {
    key: "getCompositeKey",
    value: function(r) {
      return r.map((a) => a && typeof a == "object" ? `obj_${this.getObjectID(a)}` : `${typeof a}_${a}`).join("|");
    }
  }, {
    key: "getObjectID",
    value: function(r) {
      if (this.objectIDMap.has(r))
        return this.objectIDMap.get(r);
      const n = this.nextID;
      return this.objectIDMap.set(r, n), this.nextID += 1, n;
    }
  }, {
    key: "clear",
    value: function() {
      if (this.accessBeat > 1e4) {
        const r = Date.now();
        this.lastAccessBeat.forEach((n, a) => {
          r - n > Vp && (this.map.delete(a), this.lastAccessBeat.delete(a));
        }), this.accessBeat = 0;
      }
    }
  }]);
}();
const Jl = new kp();
function Bp(e, t) {
  return Y.useMemo(() => {
    const r = Jl.get(t);
    if (r)
      return r;
    const n = e();
    return Jl.set(t, n), n;
  }, t);
}
const _d = (e) => ({
  // FIXME: This use link but is a operation unit. Seems should be a colorPrimary.
  // And Typography use this to generate link style which should not do this.
  color: e.colorLink,
  textDecoration: "none",
  outline: "none",
  cursor: "pointer",
  transition: `color ${e.motionDurationSlow}`,
  "&:focus, &:hover": {
    color: e.colorLinkHover
  },
  "&:active": {
    color: e.colorLinkActive
  }
}), Gs = {
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis"
}, Un = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  return {
    boxSizing: "border-box",
    margin: 0,
    padding: 0,
    color: e.colorText,
    fontSize: e.fontSize,
    // font-variant: @font-variant-base;
    lineHeight: e.lineHeight,
    listStyle: "none",
    // font-feature-settings: @font-feature-settings-base;
    fontFamily: t ? "inherit" : e.fontFamily
  };
}, Hp = () => ({
  display: "inline-flex",
  alignItems: "center",
  color: "inherit",
  fontStyle: "normal",
  lineHeight: 0,
  textAlign: "center",
  textTransform: "none",
  // for SVG icon, see https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4
  verticalAlign: "-0.125em",
  textRendering: "optimizeLegibility",
  "-webkit-font-smoothing": "antialiased",
  "-moz-osx-font-smoothing": "grayscale",
  "> *": {
    lineHeight: 1
  },
  svg: {
    display: "inline-block"
  }
}), Ma = () => ({
  // https://github.com/ant-design/ant-design/issues/21301#issuecomment-583955229
  "&::before": {
    display: "table",
    content: '""'
  },
  "&::after": {
    // https://github.com/ant-design/ant-design/issues/21864
    display: "table",
    clear: "both",
    content: '""'
  }
}), Wp = (e) => ({
  a: {
    color: e.colorLink,
    textDecoration: e.linkDecoration,
    backgroundColor: "transparent",
    // remove the gray background on active links in IE 10.
    outline: "none",
    cursor: "pointer",
    transition: `color ${e.motionDurationSlow}`,
    "-webkit-text-decoration-skip": "objects",
    // remove gaps in links underline in iOS 8+ and Safari 8+.
    "&:hover": {
      color: e.colorLinkHover
    },
    "&:active": {
      color: e.colorLinkActive
    },
    "&:active, &:hover": {
      textDecoration: e.linkHoverDecoration,
      outline: 0
    },
    // https://github.com/ant-design/ant-design/issues/22503
    "&:focus": {
      textDecoration: e.linkFocusDecoration,
      outline: 0
    },
    "&[disabled]": {
      color: e.colorTextDisabled,
      cursor: "not-allowed"
    }
  }
}), Kp = (e, t, r, n) => {
  const a = `[class^="${t}"], [class*=" ${t}"]`, o = r ? `.${r}` : a, i = {
    boxSizing: "border-box",
    "&::before, &::after": {
      boxSizing: "border-box"
    }
  };
  let s = {};
  return n !== !1 && (s = {
    fontFamily: e.fontFamily,
    fontSize: e.fontSize
  }), {
    [o]: Object.assign(Object.assign(Object.assign({}, s), i), {
      [a]: i
    })
  };
}, Up = (e) => ({
  outline: `${te(e.lineWidthFocus)} solid ${e.colorPrimaryBorder}`,
  outlineOffset: 1,
  transition: "outline-offset 0s, outline 0s"
}), qs = (e) => ({
  "&:focus-visible": Object.assign({}, Up(e))
});
function Gp(e) {
  return e === "js" ? {
    max: Math.max,
    min: Math.min
  } : {
    max: function() {
      for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
        r[n] = arguments[n];
      return `max(${r.map((a) => te(a)).join(",")})`;
    },
    min: function() {
      for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
        r[n] = arguments[n];
      return `min(${r.map((a) => te(a)).join(",")})`;
    }
  };
}
const Pd = process.env.NODE_ENV !== "production" || typeof CSSINJS_STATISTIC < "u";
let as = !0;
function Zt() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  if (!Pd)
    return Object.assign.apply(Object, [{}].concat(t));
  as = !1;
  const n = {};
  return t.forEach((a) => {
    Object.keys(a).forEach((i) => {
      Object.defineProperty(n, i, {
        configurable: !0,
        enumerable: !0,
        get: () => a[i]
      });
    });
  }), as = !0, n;
}
const ec = {};
function qp() {
}
const Xp = (e) => {
  let t, r = e, n = qp;
  return Pd && typeof Proxy < "u" && (t = /* @__PURE__ */ new Set(), r = new Proxy(e, {
    get(a, o) {
      return as && t.add(o), a[o];
    }
  }), n = (a, o) => {
    var i;
    ec[a] = {
      global: Array.from(t),
      component: Object.assign(Object.assign({}, (i = ec[a]) === null || i === void 0 ? void 0 : i.component), o)
    };
  }), {
    token: r,
    keys: t,
    flush: n
  };
}, Td = (e, t) => {
  const [r, n] = Rr();
  return Zi({
    theme: r,
    token: n,
    hashId: "",
    path: ["ant-design-icons", e],
    nonce: () => t == null ? void 0 : t.nonce,
    layer: {
      name: "antd"
    }
  }, () => [{
    [`.${e}`]: Object.assign(Object.assign({}, Hp()), {
      [`.${e} .${e}-icon`]: {
        display: "block"
      }
    })
  }]);
}, Nd = (e, t, r) => {
  var n;
  return typeof r == "function" ? r(Zt(t, (n = t[e]) !== null && n !== void 0 ? n : {})) : r ?? {};
}, Id = (e, t, r, n) => {
  const a = Object.assign({}, t[e]);
  if (n != null && n.deprecatedTokens) {
    const {
      deprecatedTokens: i
    } = n;
    i.forEach((s) => {
      let [l, c] = s;
      var d;
      process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && ot(!(a != null && a[l]), `Component Token \`${String(l)}\` of ${e} is deprecated. Please use \`${String(c)}\` instead.`), (a != null && a[l] || a != null && a[c]) && ((d = a[c]) !== null && d !== void 0 || (a[c] = a == null ? void 0 : a[l]));
    });
  }
  const o = Object.assign(Object.assign({}, r), a);
  return Object.keys(o).forEach((i) => {
    o[i] === t[i] && delete o[i];
  }), o;
}, tc = (e, t) => `${[t, e.replace(/([A-Z]+)([A-Z][a-z]+)/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2")].filter(Boolean).join("-")}`;
function Xs(e, t, r) {
  let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
  const a = Array.isArray(e) ? e : [e, e], [o] = a, i = a.join("-");
  return function(s) {
    let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : s;
    const [c, d, f, v, m] = Rr(), {
      getPrefixCls: h,
      iconPrefixCls: p,
      csp: g
    } = Lt(bt), S = h(), b = m ? "css" : "js", y = Bp(() => {
      const $ = /* @__PURE__ */ new Set();
      return m && Object.keys(n.unitless || {}).forEach((R) => {
        $.add(co(R, m.prefix)), $.add(co(R, tc(o, m.prefix)));
      }), Gg(b, $);
    }, [b, o, m == null ? void 0 : m.prefix]), {
      max: w,
      min: C
    } = Gp(b), O = {
      theme: c,
      token: v,
      hashId: f,
      nonce: () => g == null ? void 0 : g.nonce,
      clientOnly: n.clientOnly,
      layer: {
        name: "antd"
      },
      // antd is always at top of styles
      order: n.order || -999
    };
    return Zi(Object.assign(Object.assign({}, O), {
      clientOnly: !1,
      path: ["Shared", S]
    }), () => [{
      // Link
      "&": Wp(v)
    }]), Td(p, g), [Zi(Object.assign(Object.assign({}, O), {
      path: [i, s, p]
    }), () => {
      if (n.injectStyle === !1)
        return [];
      const {
        token: $,
        flush: R
      } = Xp(v), A = Nd(o, d, r), F = `.${s}`, j = Id(o, d, A, {
        deprecatedTokens: n.deprecatedTokens
      });
      m && Object.keys(A).forEach((B) => {
        A[B] = `var(${co(B, tc(o, m.prefix))})`;
      });
      const I = Zt($, {
        componentCls: F,
        prefixCls: s,
        iconCls: `.${p}`,
        antCls: `.${S}`,
        calc: y,
        // @ts-ignore
        max: w,
        // @ts-ignore
        min: C
      }, m ? A : j), T = t(I, {
        hashId: f,
        prefixCls: s,
        rootPrefixCls: S,
        iconPrefixCls: p
      });
      return R(o, j), [n.resetStyle === !1 ? null : Kp(I, s, l, n.resetFont), T];
    }), f];
  };
}
const Yp = (e, t, r, n) => {
  const a = Xs(e, t, r, Object.assign({
    resetStyle: !1,
    // Sub Style should default after root one
    order: -998
  }, n)), o = (i) => {
    let {
      prefixCls: s,
      rootCls: l = s
    } = i;
    return a(s, l), null;
  };
  return process.env.NODE_ENV !== "production" && (o.displayName = `SubStyle_${Array.isArray(e) ? e.join(".") : e}`), o;
}, Zp = (e, t, r) => {
  const {
    unitless: n,
    injectStyle: a = !0,
    prefixToken: o
  } = r, i = (l) => {
    let {
      rootCls: c,
      cssVar: d
    } = l;
    const [, f] = Rr();
    return Um({
      path: [e],
      prefix: d.prefix,
      key: d == null ? void 0 : d.key,
      unitless: n,
      ignore: Od,
      token: f,
      scope: c
    }, () => {
      const v = Nd(e, f, t), m = Id(e, f, v, {
        deprecatedTokens: r == null ? void 0 : r.deprecatedTokens
      });
      return Object.keys(v).forEach((h) => {
        m[o(h)] = m[h], delete m[h];
      }), m;
    }), null;
  };
  return (l) => {
    const [, , , , c] = Rr();
    return [(d) => a && c ? /* @__PURE__ */ Y.createElement(Y.Fragment, null, /* @__PURE__ */ Y.createElement(i, {
      rootCls: l,
      cssVar: c,
      component: e
    }), d) : d, c == null ? void 0 : c.key];
  };
}, en = (e, t, r, n) => {
  const a = Array.isArray(e) ? e[0] : e;
  function o(f) {
    return `${a}${f.slice(0, 1).toUpperCase()}${f.slice(1)}`;
  }
  const i = (n == null ? void 0 : n.unitless) || {}, s = Object.assign(Object.assign({}, $d), {
    [o("zIndexPopup")]: !0
  });
  Object.keys(i).forEach((f) => {
    s[o(f)] = i[f];
  });
  const l = Object.assign(Object.assign({}, n), {
    unitless: s,
    prefixToken: o
  }), c = Xs(e, t, r, l), d = Zp(a, r, l);
  return function(f) {
    let v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : f;
    const [, m] = c(f, v), [h, p] = d(v);
    return [h, m, p];
  };
};
function Qp(e, t) {
  return xo.reduce((r, n) => {
    const a = e[`${n}1`], o = e[`${n}3`], i = e[`${n}6`], s = e[`${n}7`];
    return Object.assign(Object.assign({}, r), t(n, {
      lightColor: a,
      lightBorderColor: o,
      darkColor: i,
      textColor: s
    }));
  }, {});
}
const Jp = Object.assign({}, u), {
  useId: rc
} = Jp, eh = () => "", th = typeof rc > "u" ? eh : rc;
function rh(e, t, r) {
  var n, a;
  const o = Ft("ConfigProvider"), i = e || {}, s = i.inherit === !1 || !t ? Object.assign(Object.assign({}, ns), {
    hashed: (n = t == null ? void 0 : t.hashed) !== null && n !== void 0 ? n : ns.hashed,
    cssVar: t == null ? void 0 : t.cssVar
  }) : t, l = th();
  if (process.env.NODE_ENV !== "production") {
    const c = i.cssVar || s.cssVar, d = !!(typeof i.cssVar == "object" && (!((a = i.cssVar) === null || a === void 0) && a.key) || l);
    process.env.NODE_ENV !== "production" && o(!c || d, "breaking", "Missing key in `cssVar` config. Please upgrade to React 18 or set `cssVar.key` manually in each ConfigProvider inside `cssVar` enabled ConfigProvider.");
  }
  return Ao(() => {
    var c, d;
    if (!e)
      return t;
    const f = Object.assign({}, s.components);
    Object.keys(e.components || {}).forEach((h) => {
      f[h] = Object.assign(Object.assign({}, f[h]), e.components[h]);
    });
    const v = `css-var-${l.replace(/:/g, "")}`, m = ((c = i.cssVar) !== null && c !== void 0 ? c : s.cssVar) && Object.assign(Object.assign(Object.assign({
      prefix: r == null ? void 0 : r.prefixCls
    }, typeof s.cssVar == "object" ? s.cssVar : {}), typeof i.cssVar == "object" ? i.cssVar : {}), {
      key: typeof i.cssVar == "object" && ((d = i.cssVar) === null || d === void 0 ? void 0 : d.key) || v
    });
    return Object.assign(Object.assign(Object.assign({}, s), i), {
      token: Object.assign(Object.assign({}, s.token), i.token),
      components: f,
      cssVar: m
    });
  }, [i, s], (c, d) => c.some((f, v) => {
    const m = d[v];
    return !Ea(f, m, !0);
  }));
}
var nh = ["children"], Md = /* @__PURE__ */ u.createContext({});
function ah(e) {
  var t = e.children, r = et(e, nh);
  return /* @__PURE__ */ u.createElement(Md.Provider, {
    value: r
  }, t);
}
var oh = /* @__PURE__ */ function(e) {
  Qr(r, e);
  var t = Jr(r);
  function r() {
    return Dt(this, r), t.apply(this, arguments);
  }
  return zt(r, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), r;
}(u.Component);
function ih(e) {
  var t = u.useReducer(function(s) {
    return s + 1;
  }, 0), r = G(t, 2), n = r[1], a = u.useRef(e), o = Ht(function() {
    return a.current;
  }), i = Ht(function(s) {
    a.current = typeof s == "function" ? s(a.current) : s, n();
  });
  return [o, i];
}
var Ur = "none", Za = "appear", Qa = "enter", Ja = "leave", nc = "none", pr = "prepare", Nn = "start", In = "active", Ys = "end", Ad = "prepared";
function ac(e, t) {
  var r = {};
  return r[e.toLowerCase()] = t.toLowerCase(), r["Webkit".concat(e)] = "webkit".concat(t), r["Moz".concat(e)] = "moz".concat(t), r["ms".concat(e)] = "MS".concat(t), r["O".concat(e)] = "o".concat(t.toLowerCase()), r;
}
function sh(e, t) {
  var r = {
    animationend: ac("Animation", "AnimationEnd"),
    transitionend: ac("Transition", "TransitionEnd")
  };
  return e && ("AnimationEvent" in t || delete r.animationend.animation, "TransitionEvent" in t || delete r.transitionend.transition), r;
}
var lh = sh(Xt(), typeof window < "u" ? window : {}), Ld = {};
if (Xt()) {
  var ch = document.createElement("div");
  Ld = ch.style;
}
var eo = {};
function jd(e) {
  if (eo[e])
    return eo[e];
  var t = lh[e];
  if (t)
    for (var r = Object.keys(t), n = r.length, a = 0; a < n; a += 1) {
      var o = r[a];
      if (Object.prototype.hasOwnProperty.call(t, o) && o in Ld)
        return eo[e] = t[o], eo[e];
    }
  return "";
}
var Fd = jd("animationend"), Dd = jd("transitionend"), zd = !!(Fd && Dd), oc = Fd || "animationend", ic = Dd || "transitionend";
function sc(e, t) {
  if (!e) return null;
  if (ze(e) === "object") {
    var r = t.replace(/-\w/g, function(n) {
      return n[1].toUpperCase();
    });
    return e[r];
  }
  return "".concat(e, "-").concat(t);
}
const uh = function(e) {
  var t = ke();
  function r(a) {
    a && (a.removeEventListener(ic, e), a.removeEventListener(oc, e));
  }
  function n(a) {
    t.current && t.current !== a && r(t.current), a && a !== t.current && (a.addEventListener(ic, e), a.addEventListener(oc, e), t.current = a);
  }
  return u.useEffect(function() {
    return function() {
      r(t.current);
    };
  }, []), [n, r];
};
var Vd = Xt() ? yu : ht;
const dh = function() {
  var e = u.useRef(null);
  function t() {
    Nt.cancel(e.current);
  }
  function r(n) {
    var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    t();
    var o = Nt(function() {
      a <= 1 ? n({
        isCanceled: function() {
          return o !== e.current;
        }
      }) : r(n, a - 1);
    });
    e.current = o;
  }
  return u.useEffect(function() {
    return function() {
      t();
    };
  }, []), [r, t];
};
var fh = [pr, Nn, In, Ys], vh = [pr, Ad], kd = !1, gh = !0;
function Bd(e) {
  return e === In || e === Ys;
}
const mh = function(e, t, r) {
  var n = Ra(nc), a = G(n, 2), o = a[0], i = a[1], s = dh(), l = G(s, 2), c = l[0], d = l[1];
  function f() {
    i(pr, !0);
  }
  var v = t ? vh : fh;
  return Vd(function() {
    if (o !== nc && o !== Ys) {
      var m = v.indexOf(o), h = v[m + 1], p = r(o);
      p === kd ? i(h, !0) : h && c(function(g) {
        function S() {
          g.isCanceled() || i(h, !0);
        }
        p === !0 ? S() : Promise.resolve(p).then(S);
      });
    }
  }, [e, o]), u.useEffect(function() {
    return function() {
      d();
    };
  }, []), [f, o];
};
function ph(e, t, r, n) {
  var a = n.motionEnter, o = a === void 0 ? !0 : a, i = n.motionAppear, s = i === void 0 ? !0 : i, l = n.motionLeave, c = l === void 0 ? !0 : l, d = n.motionDeadline, f = n.motionLeaveImmediately, v = n.onAppearPrepare, m = n.onEnterPrepare, h = n.onLeavePrepare, p = n.onAppearStart, g = n.onEnterStart, S = n.onLeaveStart, b = n.onAppearActive, y = n.onEnterActive, w = n.onLeaveActive, C = n.onAppearEnd, O = n.onEnterEnd, _ = n.onLeaveEnd, $ = n.onVisibleChanged, R = Ra(), A = G(R, 2), F = A[0], j = A[1], I = ih(Ur), T = G(I, 2), B = T[0], N = T[1], x = Ra(null), E = G(x, 2), L = E[0], M = E[1], z = B(), H = ke(!1), W = ke(null);
  function U() {
    return r();
  }
  var Q = ke(!1);
  function q() {
    N(Ur), M(null, !0);
  }
  var J = Ht(function(ne) {
    var ae = B();
    if (ae !== Ur) {
      var Se = U();
      if (!(ne && !ne.deadline && ne.target !== Se)) {
        var he = Q.current, be;
        ae === Za && he ? be = C == null ? void 0 : C(Se, ne) : ae === Qa && he ? be = O == null ? void 0 : O(Se, ne) : ae === Ja && he && (be = _ == null ? void 0 : _(Se, ne)), he && be !== !1 && q();
      }
    }
  }), oe = uh(J), ue = G(oe, 1), xe = ue[0], me = function(ae) {
    switch (ae) {
      case Za:
        return D(D(D({}, pr, v), Nn, p), In, b);
      case Qa:
        return D(D(D({}, pr, m), Nn, g), In, y);
      case Ja:
        return D(D(D({}, pr, h), Nn, S), In, w);
      default:
        return {};
    }
  }, fe = u.useMemo(function() {
    return me(z);
  }, [z]), we = mh(z, !e, function(ne) {
    if (ne === pr) {
      var ae = fe[pr];
      return ae ? ae(U()) : kd;
    }
    if (ge in fe) {
      var Se;
      M(((Se = fe[ge]) === null || Se === void 0 ? void 0 : Se.call(fe, U(), null)) || null);
    }
    return ge === In && z !== Ur && (xe(U()), d > 0 && (clearTimeout(W.current), W.current = setTimeout(function() {
      J({
        deadline: !0
      });
    }, d))), ge === Ad && q(), gh;
  }), k = G(we, 2), le = k[0], ge = k[1], $e = Bd(ge);
  Q.current = $e, Vd(function() {
    j(t);
    var ne = H.current;
    H.current = !0;
    var ae;
    !ne && t && s && (ae = Za), ne && t && o && (ae = Qa), (ne && !t && c || !ne && f && !t && c) && (ae = Ja);
    var Se = me(ae);
    ae && (e || Se[pr]) ? (N(ae), le()) : N(Ur);
  }, [t]), ht(function() {
    // Cancel appear
    (z === Za && !s || // Cancel enter
    z === Qa && !o || // Cancel leave
    z === Ja && !c) && N(Ur);
  }, [s, o, c]), ht(function() {
    return function() {
      H.current = !1, clearTimeout(W.current);
    };
  }, []);
  var ye = u.useRef(!1);
  ht(function() {
    F && (ye.current = !0), F !== void 0 && z === Ur && ((ye.current || F) && ($ == null || $(F)), ye.current = !0);
  }, [F, z]);
  var ie = L;
  return fe[pr] && ge === Nn && (ie = V({
    transition: "none"
  }, ie)), [z, ge, ie, F ?? t];
}
function hh(e) {
  var t = e;
  ze(e) === "object" && (t = e.transitionSupport);
  function r(a, o) {
    return !!(a.motionName && t && o !== !1);
  }
  var n = /* @__PURE__ */ u.forwardRef(function(a, o) {
    var i = a.visible, s = i === void 0 ? !0 : i, l = a.removeOnLeave, c = l === void 0 ? !0 : l, d = a.forceRender, f = a.children, v = a.motionName, m = a.leavedClassName, h = a.eventProps, p = u.useContext(Md), g = p.motion, S = r(a, g), b = ke(), y = ke();
    function w() {
      try {
        return b.current instanceof HTMLElement ? b.current : lo(y.current);
      } catch {
        return null;
      }
    }
    var C = ph(S, s, w, a), O = G(C, 4), _ = O[0], $ = O[1], R = O[2], A = O[3], F = u.useRef(A);
    A && (F.current = !0);
    var j = u.useCallback(function(L) {
      b.current = L, Fs(o, L);
    }, [o]), I, T = V(V({}, h), {}, {
      visible: s
    });
    if (!f)
      I = null;
    else if (_ === Ur)
      A ? I = f(V({}, T), j) : !c && F.current && m ? I = f(V(V({}, T), {}, {
        className: m
      }), j) : d || !c && !m ? I = f(V(V({}, T), {}, {
        style: {
          display: "none"
        }
      }), j) : I = null;
    else {
      var B;
      $ === pr ? B = "prepare" : Bd($) ? B = "active" : $ === Nn && (B = "start");
      var N = sc(v, "".concat(_, "-").concat(B));
      I = f(V(V({}, T), {}, {
        className: ee(sc(v, _), D(D({}, N, N && B), v, typeof v == "string")),
        style: R
      }), j);
    }
    if (/* @__PURE__ */ u.isValidElement(I) && fn(I)) {
      var x = I, E = x.ref;
      E || (I = /* @__PURE__ */ u.cloneElement(I, {
        ref: j
      }));
    }
    return /* @__PURE__ */ u.createElement(oh, {
      ref: y
    }, I);
  });
  return n.displayName = "CSSMotion", n;
}
const vn = hh(zd);
var os = "add", is = "keep", ss = "remove", vi = "removed";
function bh(e) {
  var t;
  return e && ze(e) === "object" && "key" in e ? t = e : t = {
    key: e
  }, V(V({}, t), {}, {
    key: String(t.key)
  });
}
function ls() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return e.map(bh);
}
function yh() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], r = [], n = 0, a = t.length, o = ls(e), i = ls(t);
  o.forEach(function(c) {
    for (var d = !1, f = n; f < a; f += 1) {
      var v = i[f];
      if (v.key === c.key) {
        n < f && (r = r.concat(i.slice(n, f).map(function(m) {
          return V(V({}, m), {}, {
            status: os
          });
        })), n = f), r.push(V(V({}, v), {}, {
          status: is
        })), n += 1, d = !0;
        break;
      }
    }
    d || r.push(V(V({}, c), {}, {
      status: ss
    }));
  }), n < a && (r = r.concat(i.slice(n).map(function(c) {
    return V(V({}, c), {}, {
      status: os
    });
  })));
  var s = {};
  r.forEach(function(c) {
    var d = c.key;
    s[d] = (s[d] || 0) + 1;
  });
  var l = Object.keys(s).filter(function(c) {
    return s[c] > 1;
  });
  return l.forEach(function(c) {
    r = r.filter(function(d) {
      var f = d.key, v = d.status;
      return f !== c || v !== ss;
    }), r.forEach(function(d) {
      d.key === c && (d.status = is);
    });
  }), r;
}
var Sh = ["component", "children", "onVisibleChanged", "onAllRemoved"], Ch = ["status"], Eh = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearPrepare", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
function wh(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : vn, r = /* @__PURE__ */ function(n) {
    Qr(o, n);
    var a = Jr(o);
    function o() {
      var i;
      Dt(this, o);
      for (var s = arguments.length, l = new Array(s), c = 0; c < s; c++)
        l[c] = arguments[c];
      return i = a.call.apply(a, [this].concat(l)), D(Ze(i), "state", {
        keyEntities: []
      }), D(Ze(i), "removeKey", function(d) {
        var f = i.state.keyEntities, v = f.map(function(m) {
          return m.key !== d ? m : V(V({}, m), {}, {
            status: vi
          });
        });
        return i.setState({
          keyEntities: v
        }), v.filter(function(m) {
          var h = m.status;
          return h !== vi;
        }).length;
      }), i;
    }
    return zt(o, [{
      key: "render",
      value: function() {
        var s = this, l = this.state.keyEntities, c = this.props, d = c.component, f = c.children, v = c.onVisibleChanged, m = c.onAllRemoved, h = et(c, Sh), p = d || u.Fragment, g = {};
        return Eh.forEach(function(S) {
          g[S] = h[S], delete h[S];
        }), delete h.keys, /* @__PURE__ */ u.createElement(p, h, l.map(function(S, b) {
          var y = S.status, w = et(S, Ch), C = y === os || y === is;
          return /* @__PURE__ */ u.createElement(t, Me({}, g, {
            key: w.key,
            visible: C,
            eventProps: w,
            onVisibleChanged: function(_) {
              if (v == null || v(_, {
                key: w.key
              }), !_) {
                var $ = s.removeKey(w.key);
                $ === 0 && m && m();
              }
            }
          }), function(O, _) {
            return f(V(V({}, O), {}, {
              index: b
            }), _);
          });
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function(s, l) {
        var c = s.keys, d = l.keyEntities, f = ls(c), v = yh(d, f);
        return {
          keyEntities: v.filter(function(m) {
            var h = d.find(function(p) {
              var g = p.key;
              return m.key === g;
            });
            return !(h && h.status === vi && m.status === ss);
          })
        };
      }
    }]), o;
  }(u.Component);
  return D(r, "defaultProps", {
    component: "div"
  }), r;
}
wh(zd);
function xh(e) {
  const {
    children: t
  } = e, [, r] = Rr(), {
    motion: n
  } = r, a = u.useRef(!1);
  return a.current = a.current || n === !1, a.current ? /* @__PURE__ */ u.createElement(ah, {
    motion: n
  }, t) : t;
}
const Hd = /* @__PURE__ */ u.memo((e) => {
  let {
    dropdownMatchSelectWidth: t
  } = e;
  return Ft("ConfigProvider").deprecated(t === void 0, "dropdownMatchSelectWidth", "popupMatchSelectWidth"), null;
});
process.env.NODE_ENV !== "production" && (Hd.displayName = "PropWarning");
const $h = process.env.NODE_ENV !== "production" ? Hd : () => null;
var Oh = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
    t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
let cs = !1;
process.env.NODE_ENV;
const Rh = ["getTargetContainer", "getPopupContainer", "renderEmpty", "input", "pagination", "form", "select", "button"], Wd = "ant";
let Kd;
function _h() {
  return Kd || Wd;
}
function Ph(e) {
  return Object.keys(e).some((t) => t.endsWith("Color"));
}
const Th = (e) => {
  const {
    prefixCls: t,
    iconPrefixCls: r,
    theme: n,
    holderRender: a
  } = e;
  t !== void 0 && (Kd = t), n && Ph(n) && (process.env.NODE_ENV !== "production" && Kn(!1, "ConfigProvider", "`config` of css variable theme is not work in v5. Please use new `theme` config instead."), Mp(_h(), n));
}, Nh = (e) => {
  const {
    children: t,
    csp: r,
    autoInsertSpaceInButton: n,
    alert: a,
    anchor: o,
    form: i,
    locale: s,
    componentSize: l,
    direction: c,
    space: d,
    virtual: f,
    dropdownMatchSelectWidth: v,
    popupMatchSelectWidth: m,
    popupOverflow: h,
    legacyLocale: p,
    parentContext: g,
    iconPrefixCls: S,
    theme: b,
    componentDisabled: y,
    segmented: w,
    statistic: C,
    spin: O,
    calendar: _,
    carousel: $,
    cascader: R,
    collapse: A,
    typography: F,
    checkbox: j,
    descriptions: I,
    divider: T,
    drawer: B,
    skeleton: N,
    steps: x,
    image: E,
    layout: L,
    list: M,
    mentions: z,
    modal: H,
    progress: W,
    result: U,
    slider: Q,
    breadcrumb: q,
    menu: J,
    pagination: oe,
    input: ue,
    textArea: xe,
    empty: me,
    badge: fe,
    radio: we,
    rate: k,
    switch: le,
    transfer: ge,
    avatar: $e,
    message: ye,
    tag: ie,
    table: ne,
    card: ae,
    tabs: Se,
    timeline: he,
    timePicker: be,
    upload: Pe,
    notification: pe,
    tree: ct,
    colorPicker: at,
    datePicker: _e,
    rangePicker: Oe,
    flex: Z,
    wave: re,
    dropdown: Te,
    warning: Fe,
    tour: Ge,
    floatButtonGroup: Be,
    variant: Ie,
    inputNumber: se,
    treeSelect: de
  } = e, We = u.useCallback((Xe, Ye) => {
    const {
      prefixCls: it
    } = e;
    if (Ye)
      return Ye;
    const St = it || g.getPrefixCls("");
    return Xe ? `${St}-${Xe}` : St;
  }, [g.getPrefixCls, e.prefixCls]), rt = S || g.iconPrefixCls || wd, Ct = r || g.csp;
  Td(rt, Ct);
  const ut = rh(b, g.theme, {
    prefixCls: We("")
  });
  process.env.NODE_ENV !== "production" && (cs = cs || !!ut);
  const qe = {
    csp: Ct,
    autoInsertSpaceInButton: n,
    alert: a,
    anchor: o,
    locale: s || p,
    direction: c,
    space: d,
    virtual: f,
    popupMatchSelectWidth: m ?? v,
    popupOverflow: h,
    getPrefixCls: We,
    iconPrefixCls: rt,
    theme: ut,
    segmented: w,
    statistic: C,
    spin: O,
    calendar: _,
    carousel: $,
    cascader: R,
    collapse: A,
    typography: F,
    checkbox: j,
    descriptions: I,
    divider: T,
    drawer: B,
    skeleton: N,
    steps: x,
    image: E,
    input: ue,
    textArea: xe,
    layout: L,
    list: M,
    mentions: z,
    modal: H,
    progress: W,
    result: U,
    slider: Q,
    breadcrumb: q,
    menu: J,
    pagination: oe,
    empty: me,
    badge: fe,
    radio: we,
    rate: k,
    switch: le,
    transfer: ge,
    avatar: $e,
    message: ye,
    tag: ie,
    table: ne,
    card: ae,
    tabs: Se,
    timeline: he,
    timePicker: be,
    upload: Pe,
    notification: pe,
    tree: ct,
    colorPicker: at,
    datePicker: _e,
    rangePicker: Oe,
    flex: Z,
    wave: re,
    dropdown: Te,
    warning: Fe,
    tour: Ge,
    floatButtonGroup: Be,
    variant: Ie,
    inputNumber: se,
    treeSelect: de
  };
  process.env.NODE_ENV !== "production" && Ft("ConfigProvider")(!("autoInsertSpaceInButton" in e), "deprecated", "`autoInsertSpaceInButton` is deprecated. Please use `{ button: { autoInsertSpace: boolean }}` instead.");
  const Ue = Object.assign({}, g);
  Object.keys(qe).forEach((Xe) => {
    qe[Xe] !== void 0 && (Ue[Xe] = qe[Xe]);
  }), Rh.forEach((Xe) => {
    const Ye = e[Xe];
    Ye && (Ue[Xe] = Ye);
  }), typeof n < "u" && (Ue.button = Object.assign({
    autoInsertSpace: n
  }, Ue.button));
  const He = Ao(() => Ue, Ue, (Xe, Ye) => {
    const it = Object.keys(Xe), St = Object.keys(Ye);
    return it.length !== St.length || it.some((Pt) => Xe[Pt] !== Ye[Pt]);
  }), Ae = u.useMemo(() => ({
    prefixCls: rt,
    csp: Ct
  }), [rt, Ct]);
  let Ce = /* @__PURE__ */ u.createElement(u.Fragment, null, /* @__PURE__ */ u.createElement($h, {
    dropdownMatchSelectWidth: v
  }), t);
  const Qe = u.useMemo(() => {
    var Xe, Ye, it, St;
    return Tn(((Xe = zn.Form) === null || Xe === void 0 ? void 0 : Xe.defaultValidateMessages) || {}, ((it = (Ye = He.locale) === null || Ye === void 0 ? void 0 : Ye.Form) === null || it === void 0 ? void 0 : it.defaultValidateMessages) || {}, ((St = He.form) === null || St === void 0 ? void 0 : St.validateMessages) || {}, (i == null ? void 0 : i.validateMessages) || {});
  }, [He, i == null ? void 0 : i.validateMessages]);
  Object.keys(Qe).length > 0 && (Ce = /* @__PURE__ */ u.createElement(Qm.Provider, {
    value: Qe
  }, Ce)), s && (Ce = /* @__PURE__ */ u.createElement(pd, {
    locale: s,
    _ANT_MARK__: md
  }, Ce)), (rt || Ct) && (Ce = /* @__PURE__ */ u.createElement(Ks.Provider, {
    value: Ae
  }, Ce)), l && (Ce = /* @__PURE__ */ u.createElement(Lp, {
    size: l
  }, Ce)), Ce = /* @__PURE__ */ u.createElement(xh, null, Ce);
  const yt = u.useMemo(() => {
    const Xe = ut || {}, {
      algorithm: Ye,
      token: it,
      components: St,
      cssVar: Pt
    } = Xe, Vt = Oh(Xe, ["algorithm", "token", "components", "cssVar"]), Wt = Ye && (!Array.isArray(Ye) || Ye.length > 0) ? Wi(Ye) : Cd, P = {};
    Object.entries(St || {}).forEach((X) => {
      let [ce, Le] = X;
      const Ne = Object.assign({}, Le);
      "algorithm" in Ne && (Ne.algorithm === !0 ? Ne.theme = Wt : (Array.isArray(Ne.algorithm) || typeof Ne.algorithm == "function") && (Ne.theme = Wi(Ne.algorithm)), delete Ne.algorithm), P[ce] = Ne;
    });
    const K = Object.assign(Object.assign({}, Oa), it);
    return Object.assign(Object.assign({}, Vt), {
      theme: Wt,
      token: K,
      components: P,
      override: Object.assign({
        override: K
      }, P),
      cssVar: Pt
    });
  }, [ut]);
  return b && (Ce = /* @__PURE__ */ u.createElement(Ed.Provider, {
    value: yt
  }, Ce)), He.warning && (Ce = /* @__PURE__ */ u.createElement(vd.Provider, {
    value: He.warning
  }, Ce)), y !== void 0 && (Ce = /* @__PURE__ */ u.createElement(Ap, {
    disabled: y
  }, Ce)), /* @__PURE__ */ u.createElement(bt.Provider, {
    value: He
  }, Ce);
}, gn = (e) => {
  const t = u.useContext(bt), r = u.useContext(Us);
  return /* @__PURE__ */ u.createElement(Nh, Object.assign({
    parentContext: t,
    legacyLocale: r
  }, e));
};
gn.ConfigContext = bt;
gn.SizeContext = kn;
gn.config = Th;
gn.useConfig = jp;
Object.defineProperty(gn, "SizeContext", {
  get: () => (process.env.NODE_ENV !== "production" && Kn(!1, "ConfigProvider", "ConfigProvider.SizeContext is deprecated. Please use `ConfigProvider.useConfig().componentSize` instead."), kn)
});
process.env.NODE_ENV !== "production" && (gn.displayName = "ConfigProvider");
function Ud(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
}
function Ih(e) {
  return Ud(e) instanceof ShadowRoot;
}
function $o(e) {
  return Ih(e) ? Ud(e) : null;
}
function Mh(e) {
  return e.replace(/-(.)/g, function(t, r) {
    return r.toUpperCase();
  });
}
function Ah(e, t) {
  ot(e, "[@ant-design/icons] ".concat(t));
}
function lc(e) {
  return ze(e) === "object" && typeof e.name == "string" && typeof e.theme == "string" && (ze(e.icon) === "object" || typeof e.icon == "function");
}
function cc() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.keys(e).reduce(function(t, r) {
    var n = e[r];
    switch (r) {
      case "class":
        t.className = n, delete t.class;
        break;
      default:
        delete t[r], t[Mh(r)] = n;
    }
    return t;
  }, {});
}
function us(e, t, r) {
  return r ? /* @__PURE__ */ Y.createElement(e.tag, V(V({
    key: t
  }, cc(e.attrs)), r), (e.children || []).map(function(n, a) {
    return us(n, "".concat(t, "-").concat(e.tag, "-").concat(a));
  })) : /* @__PURE__ */ Y.createElement(e.tag, V({
    key: t
  }, cc(e.attrs)), (e.children || []).map(function(n, a) {
    return us(n, "".concat(t, "-").concat(e.tag, "-").concat(a));
  }));
}
function Gd(e) {
  return $a(e)[0];
}
function qd(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
var Lh = `
.anticon {
  display: inline-flex;
  align-items: center;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`, jh = function(t) {
  var r = Lt(Ks), n = r.csp, a = r.prefixCls, o = Lh;
  a && (o = o.replace(/anticon/g, a)), ht(function() {
    var i = t.current, s = $o(i);
    Fr(o, "@ant-design-icons", {
      prepend: !0,
      csp: n,
      attachTo: s
    });
  }, []);
}, Fh = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"], ga = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function Dh(e) {
  var t = e.primaryColor, r = e.secondaryColor;
  ga.primaryColor = t, ga.secondaryColor = r || Gd(t), ga.calculated = !!r;
}
function zh() {
  return V({}, ga);
}
var Gn = function(t) {
  var r = t.icon, n = t.className, a = t.onClick, o = t.style, i = t.primaryColor, s = t.secondaryColor, l = et(t, Fh), c = u.useRef(), d = ga;
  if (i && (d = {
    primaryColor: i,
    secondaryColor: s || Gd(i)
  }), jh(c), Ah(lc(r), "icon should be icon definiton, but got ".concat(r)), !lc(r))
    return null;
  var f = r;
  return f && typeof f.icon == "function" && (f = V(V({}, f), {}, {
    icon: f.icon(d.primaryColor, d.secondaryColor)
  })), us(f.icon, "svg-".concat(f.name), V(V({
    className: n,
    onClick: a,
    style: o,
    "data-icon": f.name,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true"
  }, l), {}, {
    ref: c
  }));
};
Gn.displayName = "IconReact";
Gn.getTwoToneColors = zh;
Gn.setTwoToneColors = Dh;
function Xd(e) {
  var t = qd(e), r = G(t, 2), n = r[0], a = r[1];
  return Gn.setTwoToneColors({
    primaryColor: n,
    secondaryColor: a
  });
}
function Vh() {
  var e = Gn.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var kh = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
Xd(rs.primary);
var ar = /* @__PURE__ */ u.forwardRef(function(e, t) {
  var r = e.className, n = e.icon, a = e.spin, o = e.rotate, i = e.tabIndex, s = e.onClick, l = e.twoToneColor, c = et(e, kh), d = u.useContext(Ks), f = d.prefixCls, v = f === void 0 ? "anticon" : f, m = d.rootClassName, h = ee(m, v, D(D({}, "".concat(v, "-").concat(n.name), !!n.name), "".concat(v, "-spin"), !!a || n.name === "loading"), r), p = i;
  p === void 0 && s && (p = -1);
  var g = o ? {
    msTransform: "rotate(".concat(o, "deg)"),
    transform: "rotate(".concat(o, "deg)")
  } : void 0, S = qd(l), b = G(S, 2), y = b[0], w = b[1];
  return /* @__PURE__ */ u.createElement("span", Me({
    role: "img",
    "aria-label": n.name
  }, c, {
    ref: t,
    tabIndex: p,
    onClick: s,
    className: h
  }), /* @__PURE__ */ u.createElement(Gn, {
    icon: n,
    primaryColor: y,
    secondaryColor: w,
    style: g
  }));
});
ar.displayName = "AntdIcon";
ar.getTwoToneColor = Vh;
ar.setTwoToneColor = Xd;
var Bh = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z" } }] }, name: "close-circle", theme: "filled" }, Hh = function(t, r) {
  return /* @__PURE__ */ u.createElement(ar, Me({}, t, {
    ref: r,
    icon: Bh
  }));
}, Yd = /* @__PURE__ */ u.forwardRef(Hh);
process.env.NODE_ENV !== "production" && (Yd.displayName = "CloseCircleFilled");
var Wh = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z" } }] }, name: "close", theme: "outlined" }, Kh = function(t, r) {
  return /* @__PURE__ */ u.createElement(ar, Me({}, t, {
    ref: r,
    icon: Wh
  }));
}, Zd = /* @__PURE__ */ u.forwardRef(Kh);
process.env.NODE_ENV !== "production" && (Zd.displayName = "CloseOutlined");
function Qd(e) {
  return e && /* @__PURE__ */ Y.isValidElement(e) && e.type === Y.Fragment;
}
const Uh = (e, t, r) => /* @__PURE__ */ Y.isValidElement(e) ? /* @__PURE__ */ Y.cloneElement(e, typeof r == "function" ? r(e.props || {}) : r) : t;
function ko(e, t) {
  return Uh(e, e, t);
}
const Zs = (e) => {
  const [, , , , t] = Rr();
  return t ? `${e}-css-var` : "";
};
var ve = {
  /**
   * MAC_ENTER
   */
  MAC_ENTER: 3,
  /**
   * BACKSPACE
   */
  BACKSPACE: 8,
  /**
   * TAB
   */
  TAB: 9,
  /**
   * NUMLOCK on FF/Safari Mac
   */
  NUM_CENTER: 12,
  // NUMLOCK on FF/Safari Mac
  /**
   * ENTER
   */
  ENTER: 13,
  /**
   * SHIFT
   */
  SHIFT: 16,
  /**
   * CTRL
   */
  CTRL: 17,
  /**
   * ALT
   */
  ALT: 18,
  /**
   * PAUSE
   */
  PAUSE: 19,
  /**
   * CAPS_LOCK
   */
  CAPS_LOCK: 20,
  /**
   * ESC
   */
  ESC: 27,
  /**
   * SPACE
   */
  SPACE: 32,
  /**
   * PAGE_UP
   */
  PAGE_UP: 33,
  // also NUM_NORTH_EAST
  /**
   * PAGE_DOWN
   */
  PAGE_DOWN: 34,
  // also NUM_SOUTH_EAST
  /**
   * END
   */
  END: 35,
  // also NUM_SOUTH_WEST
  /**
   * HOME
   */
  HOME: 36,
  // also NUM_NORTH_WEST
  /**
   * LEFT
   */
  LEFT: 37,
  // also NUM_WEST
  /**
   * UP
   */
  UP: 38,
  // also NUM_NORTH
  /**
   * RIGHT
   */
  RIGHT: 39,
  // also NUM_EAST
  /**
   * DOWN
   */
  DOWN: 40,
  // also NUM_SOUTH
  /**
   * PRINT_SCREEN
   */
  PRINT_SCREEN: 44,
  /**
   * INSERT
   */
  INSERT: 45,
  // also NUM_INSERT
  /**
   * DELETE
   */
  DELETE: 46,
  // also NUM_DELETE
  /**
   * ZERO
   */
  ZERO: 48,
  /**
   * ONE
   */
  ONE: 49,
  /**
   * TWO
   */
  TWO: 50,
  /**
   * THREE
   */
  THREE: 51,
  /**
   * FOUR
   */
  FOUR: 52,
  /**
   * FIVE
   */
  FIVE: 53,
  /**
   * SIX
   */
  SIX: 54,
  /**
   * SEVEN
   */
  SEVEN: 55,
  /**
   * EIGHT
   */
  EIGHT: 56,
  /**
   * NINE
   */
  NINE: 57,
  /**
   * QUESTION_MARK
   */
  QUESTION_MARK: 63,
  // needs localization
  /**
   * A
   */
  A: 65,
  /**
   * B
   */
  B: 66,
  /**
   * C
   */
  C: 67,
  /**
   * D
   */
  D: 68,
  /**
   * E
   */
  E: 69,
  /**
   * F
   */
  F: 70,
  /**
   * G
   */
  G: 71,
  /**
   * H
   */
  H: 72,
  /**
   * I
   */
  I: 73,
  /**
   * J
   */
  J: 74,
  /**
   * K
   */
  K: 75,
  /**
   * L
   */
  L: 76,
  /**
   * M
   */
  M: 77,
  /**
   * N
   */
  N: 78,
  /**
   * O
   */
  O: 79,
  /**
   * P
   */
  P: 80,
  /**
   * Q
   */
  Q: 81,
  /**
   * R
   */
  R: 82,
  /**
   * S
   */
  S: 83,
  /**
   * T
   */
  T: 84,
  /**
   * U
   */
  U: 85,
  /**
   * V
   */
  V: 86,
  /**
   * W
   */
  W: 87,
  /**
   * X
   */
  X: 88,
  /**
   * Y
   */
  Y: 89,
  /**
   * Z
   */
  Z: 90,
  /**
   * META
   */
  META: 91,
  // WIN_KEY_LEFT
  /**
   * WIN_KEY_RIGHT
   */
  WIN_KEY_RIGHT: 92,
  /**
   * CONTEXT_MENU
   */
  CONTEXT_MENU: 93,
  /**
   * NUM_ZERO
   */
  NUM_ZERO: 96,
  /**
   * NUM_ONE
   */
  NUM_ONE: 97,
  /**
   * NUM_TWO
   */
  NUM_TWO: 98,
  /**
   * NUM_THREE
   */
  NUM_THREE: 99,
  /**
   * NUM_FOUR
   */
  NUM_FOUR: 100,
  /**
   * NUM_FIVE
   */
  NUM_FIVE: 101,
  /**
   * NUM_SIX
   */
  NUM_SIX: 102,
  /**
   * NUM_SEVEN
   */
  NUM_SEVEN: 103,
  /**
   * NUM_EIGHT
   */
  NUM_EIGHT: 104,
  /**
   * NUM_NINE
   */
  NUM_NINE: 105,
  /**
   * NUM_MULTIPLY
   */
  NUM_MULTIPLY: 106,
  /**
   * NUM_PLUS
   */
  NUM_PLUS: 107,
  /**
   * NUM_MINUS
   */
  NUM_MINUS: 109,
  /**
   * NUM_PERIOD
   */
  NUM_PERIOD: 110,
  /**
   * NUM_DIVISION
   */
  NUM_DIVISION: 111,
  /**
   * F1
   */
  F1: 112,
  /**
   * F2
   */
  F2: 113,
  /**
   * F3
   */
  F3: 114,
  /**
   * F4
   */
  F4: 115,
  /**
   * F5
   */
  F5: 116,
  /**
   * F6
   */
  F6: 117,
  /**
   * F7
   */
  F7: 118,
  /**
   * F8
   */
  F8: 119,
  /**
   * F9
   */
  F9: 120,
  /**
   * F10
   */
  F10: 121,
  /**
   * F11
   */
  F11: 122,
  /**
   * F12
   */
  F12: 123,
  /**
   * NUMLOCK
   */
  NUMLOCK: 144,
  /**
   * SEMICOLON
   */
  SEMICOLON: 186,
  // needs localization
  /**
   * DASH
   */
  DASH: 189,
  // needs localization
  /**
   * EQUALS
   */
  EQUALS: 187,
  // needs localization
  /**
   * COMMA
   */
  COMMA: 188,
  // needs localization
  /**
   * PERIOD
   */
  PERIOD: 190,
  // needs localization
  /**
   * SLASH
   */
  SLASH: 191,
  // needs localization
  /**
   * APOSTROPHE
   */
  APOSTROPHE: 192,
  // needs localization
  /**
   * SINGLE_QUOTE
   */
  SINGLE_QUOTE: 222,
  // needs localization
  /**
   * OPEN_SQUARE_BRACKET
   */
  OPEN_SQUARE_BRACKET: 219,
  // needs localization
  /**
   * BACKSLASH
   */
  BACKSLASH: 220,
  // needs localization
  /**
   * CLOSE_SQUARE_BRACKET
   */
  CLOSE_SQUARE_BRACKET: 221,
  // needs localization
  /**
   * WIN_KEY
   */
  WIN_KEY: 224,
  /**
   * MAC_FF_META
   */
  MAC_FF_META: 224,
  // Firefox (Gecko) fires this for the meta key instead of 91
  /**
   * WIN_IME
   */
  WIN_IME: 229,
  // ======================== Function ========================
  /**
   * whether text and modified key is entered at the same time.
   */
  isTextModifyingKeyEvent: function(t) {
    var r = t.keyCode;
    if (t.altKey && !t.ctrlKey || t.metaKey || // Function keys don't generate text
    r >= ve.F1 && r <= ve.F12)
      return !1;
    switch (r) {
      case ve.ALT:
      case ve.CAPS_LOCK:
      case ve.CONTEXT_MENU:
      case ve.CTRL:
      case ve.DOWN:
      case ve.END:
      case ve.ESC:
      case ve.HOME:
      case ve.INSERT:
      case ve.LEFT:
      case ve.MAC_FF_META:
      case ve.META:
      case ve.NUMLOCK:
      case ve.NUM_CENTER:
      case ve.PAGE_DOWN:
      case ve.PAGE_UP:
      case ve.PAUSE:
      case ve.PRINT_SCREEN:
      case ve.RIGHT:
      case ve.SHIFT:
      case ve.UP:
      case ve.WIN_KEY:
      case ve.WIN_KEY_RIGHT:
        return !1;
      default:
        return !0;
    }
  },
  /**
   * whether character is entered.
   */
  isCharacterKey: function(t) {
    if (t >= ve.ZERO && t <= ve.NINE || t >= ve.NUM_ZERO && t <= ve.NUM_MULTIPLY || t >= ve.A && t <= ve.Z || window.navigator.userAgent.indexOf("WebKit") !== -1 && t === 0)
      return !0;
    switch (t) {
      case ve.SPACE:
      case ve.QUESTION_MARK:
      case ve.NUM_PLUS:
      case ve.NUM_MINUS:
      case ve.NUM_PERIOD:
      case ve.NUM_DIVISION:
      case ve.SEMICOLON:
      case ve.DASH:
      case ve.EQUALS:
      case ve.COMMA:
      case ve.PERIOD:
      case ve.SLASH:
      case ve.APOSTROPHE:
      case ve.SINGLE_QUOTE:
      case ve.OPEN_SQUARE_BRACKET:
      case ve.BACKSLASH:
      case ve.CLOSE_SQUARE_BRACKET:
        return !0;
      default:
        return !1;
    }
  }
}, Gh = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, name: "loading", theme: "outlined" }, qh = function(t, r) {
  return /* @__PURE__ */ u.createElement(ar, Me({}, t, {
    ref: r,
    icon: Gh
  }));
}, Qs = /* @__PURE__ */ u.forwardRef(qh);
process.env.NODE_ENV !== "production" && (Qs.displayName = "LoadingOutlined");
const Js = /* @__PURE__ */ Y.createContext(void 0);
process.env.NODE_ENV !== "production" && (Js.displayName = "zIndexContext");
const an = 100, Xh = 10, Yh = an * Xh, Jd = {
  Modal: an,
  Drawer: an,
  Popover: an,
  Popconfirm: an,
  Tooltip: an,
  Tour: an
}, Zh = {
  SelectLike: 50,
  Dropdown: 50,
  DatePicker: 50,
  Menu: 50,
  ImagePreview: 1
};
function Qh(e) {
  return e in Jd;
}
function Jh(e, t) {
  const [, r] = Rr(), n = Y.useContext(Js), a = Qh(e);
  if (t !== void 0)
    return [t, t];
  let o = n ?? 0;
  return a ? (o += // Use preset token zIndex by default but not stack when has parent container
  (n ? 0 : r.zIndexPopupBase) + // Container offset
  Jd[e], o = Math.min(o, r.zIndexPopupBase + Yh)) : o += Zh[e], [n === void 0 ? t : o, o];
}
function Yt() {
  Yt = function() {
    return t;
  };
  var e, t = {}, r = Object.prototype, n = r.hasOwnProperty, a = Object.defineProperty || function(N, x, E) {
    N[x] = E.value;
  }, o = typeof Symbol == "function" ? Symbol : {}, i = o.iterator || "@@iterator", s = o.asyncIterator || "@@asyncIterator", l = o.toStringTag || "@@toStringTag";
  function c(N, x, E) {
    return Object.defineProperty(N, x, {
      value: E,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), N[x];
  }
  try {
    c({}, "");
  } catch {
    c = function(E, L, M) {
      return E[L] = M;
    };
  }
  function d(N, x, E, L) {
    var M = x && x.prototype instanceof S ? x : S, z = Object.create(M.prototype), H = new T(L || []);
    return a(z, "_invoke", {
      value: A(N, E, H)
    }), z;
  }
  function f(N, x, E) {
    try {
      return {
        type: "normal",
        arg: N.call(x, E)
      };
    } catch (L) {
      return {
        type: "throw",
        arg: L
      };
    }
  }
  t.wrap = d;
  var v = "suspendedStart", m = "suspendedYield", h = "executing", p = "completed", g = {};
  function S() {
  }
  function b() {
  }
  function y() {
  }
  var w = {};
  c(w, i, function() {
    return this;
  });
  var C = Object.getPrototypeOf, O = C && C(C(B([])));
  O && O !== r && n.call(O, i) && (w = O);
  var _ = y.prototype = S.prototype = Object.create(w);
  function $(N) {
    ["next", "throw", "return"].forEach(function(x) {
      c(N, x, function(E) {
        return this._invoke(x, E);
      });
    });
  }
  function R(N, x) {
    function E(M, z, H, W) {
      var U = f(N[M], N, z);
      if (U.type !== "throw") {
        var Q = U.arg, q = Q.value;
        return q && ze(q) == "object" && n.call(q, "__await") ? x.resolve(q.__await).then(function(J) {
          E("next", J, H, W);
        }, function(J) {
          E("throw", J, H, W);
        }) : x.resolve(q).then(function(J) {
          Q.value = J, H(Q);
        }, function(J) {
          return E("throw", J, H, W);
        });
      }
      W(U.arg);
    }
    var L;
    a(this, "_invoke", {
      value: function(z, H) {
        function W() {
          return new x(function(U, Q) {
            E(z, H, U, Q);
          });
        }
        return L = L ? L.then(W, W) : W();
      }
    });
  }
  function A(N, x, E) {
    var L = v;
    return function(M, z) {
      if (L === h) throw Error("Generator is already running");
      if (L === p) {
        if (M === "throw") throw z;
        return {
          value: e,
          done: !0
        };
      }
      for (E.method = M, E.arg = z; ; ) {
        var H = E.delegate;
        if (H) {
          var W = F(H, E);
          if (W) {
            if (W === g) continue;
            return W;
          }
        }
        if (E.method === "next") E.sent = E._sent = E.arg;
        else if (E.method === "throw") {
          if (L === v) throw L = p, E.arg;
          E.dispatchException(E.arg);
        } else E.method === "return" && E.abrupt("return", E.arg);
        L = h;
        var U = f(N, x, E);
        if (U.type === "normal") {
          if (L = E.done ? p : m, U.arg === g) continue;
          return {
            value: U.arg,
            done: E.done
          };
        }
        U.type === "throw" && (L = p, E.method = "throw", E.arg = U.arg);
      }
    };
  }
  function F(N, x) {
    var E = x.method, L = N.iterator[E];
    if (L === e) return x.delegate = null, E === "throw" && N.iterator.return && (x.method = "return", x.arg = e, F(N, x), x.method === "throw") || E !== "return" && (x.method = "throw", x.arg = new TypeError("The iterator does not provide a '" + E + "' method")), g;
    var M = f(L, N.iterator, x.arg);
    if (M.type === "throw") return x.method = "throw", x.arg = M.arg, x.delegate = null, g;
    var z = M.arg;
    return z ? z.done ? (x[N.resultName] = z.value, x.next = N.nextLoc, x.method !== "return" && (x.method = "next", x.arg = e), x.delegate = null, g) : z : (x.method = "throw", x.arg = new TypeError("iterator result is not an object"), x.delegate = null, g);
  }
  function j(N) {
    var x = {
      tryLoc: N[0]
    };
    1 in N && (x.catchLoc = N[1]), 2 in N && (x.finallyLoc = N[2], x.afterLoc = N[3]), this.tryEntries.push(x);
  }
  function I(N) {
    var x = N.completion || {};
    x.type = "normal", delete x.arg, N.completion = x;
  }
  function T(N) {
    this.tryEntries = [{
      tryLoc: "root"
    }], N.forEach(j, this), this.reset(!0);
  }
  function B(N) {
    if (N || N === "") {
      var x = N[i];
      if (x) return x.call(N);
      if (typeof N.next == "function") return N;
      if (!isNaN(N.length)) {
        var E = -1, L = function M() {
          for (; ++E < N.length; ) if (n.call(N, E)) return M.value = N[E], M.done = !1, M;
          return M.value = e, M.done = !0, M;
        };
        return L.next = L;
      }
    }
    throw new TypeError(ze(N) + " is not iterable");
  }
  return b.prototype = y, a(_, "constructor", {
    value: y,
    configurable: !0
  }), a(y, "constructor", {
    value: b,
    configurable: !0
  }), b.displayName = c(y, l, "GeneratorFunction"), t.isGeneratorFunction = function(N) {
    var x = typeof N == "function" && N.constructor;
    return !!x && (x === b || (x.displayName || x.name) === "GeneratorFunction");
  }, t.mark = function(N) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(N, y) : (N.__proto__ = y, c(N, l, "GeneratorFunction")), N.prototype = Object.create(_), N;
  }, t.awrap = function(N) {
    return {
      __await: N
    };
  }, $(R.prototype), c(R.prototype, s, function() {
    return this;
  }), t.AsyncIterator = R, t.async = function(N, x, E, L, M) {
    M === void 0 && (M = Promise);
    var z = new R(d(N, x, E, L), M);
    return t.isGeneratorFunction(x) ? z : z.next().then(function(H) {
      return H.done ? H.value : z.next();
    });
  }, $(_), c(_, l, "Generator"), c(_, i, function() {
    return this;
  }), c(_, "toString", function() {
    return "[object Generator]";
  }), t.keys = function(N) {
    var x = Object(N), E = [];
    for (var L in x) E.push(L);
    return E.reverse(), function M() {
      for (; E.length; ) {
        var z = E.pop();
        if (z in x) return M.value = z, M.done = !1, M;
      }
      return M.done = !0, M;
    };
  }, t.values = B, T.prototype = {
    constructor: T,
    reset: function(x) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(I), !x) for (var E in this) E.charAt(0) === "t" && n.call(this, E) && !isNaN(+E.slice(1)) && (this[E] = e);
    },
    stop: function() {
      this.done = !0;
      var x = this.tryEntries[0].completion;
      if (x.type === "throw") throw x.arg;
      return this.rval;
    },
    dispatchException: function(x) {
      if (this.done) throw x;
      var E = this;
      function L(Q, q) {
        return H.type = "throw", H.arg = x, E.next = Q, q && (E.method = "next", E.arg = e), !!q;
      }
      for (var M = this.tryEntries.length - 1; M >= 0; --M) {
        var z = this.tryEntries[M], H = z.completion;
        if (z.tryLoc === "root") return L("end");
        if (z.tryLoc <= this.prev) {
          var W = n.call(z, "catchLoc"), U = n.call(z, "finallyLoc");
          if (W && U) {
            if (this.prev < z.catchLoc) return L(z.catchLoc, !0);
            if (this.prev < z.finallyLoc) return L(z.finallyLoc);
          } else if (W) {
            if (this.prev < z.catchLoc) return L(z.catchLoc, !0);
          } else {
            if (!U) throw Error("try statement without catch or finally");
            if (this.prev < z.finallyLoc) return L(z.finallyLoc);
          }
        }
      }
    },
    abrupt: function(x, E) {
      for (var L = this.tryEntries.length - 1; L >= 0; --L) {
        var M = this.tryEntries[L];
        if (M.tryLoc <= this.prev && n.call(M, "finallyLoc") && this.prev < M.finallyLoc) {
          var z = M;
          break;
        }
      }
      z && (x === "break" || x === "continue") && z.tryLoc <= E && E <= z.finallyLoc && (z = null);
      var H = z ? z.completion : {};
      return H.type = x, H.arg = E, z ? (this.method = "next", this.next = z.finallyLoc, g) : this.complete(H);
    },
    complete: function(x, E) {
      if (x.type === "throw") throw x.arg;
      return x.type === "break" || x.type === "continue" ? this.next = x.arg : x.type === "return" ? (this.rval = this.arg = x.arg, this.method = "return", this.next = "end") : x.type === "normal" && E && (this.next = E), g;
    },
    finish: function(x) {
      for (var E = this.tryEntries.length - 1; E >= 0; --E) {
        var L = this.tryEntries[E];
        if (L.finallyLoc === x) return this.complete(L.completion, L.afterLoc), I(L), g;
      }
    },
    catch: function(x) {
      for (var E = this.tryEntries.length - 1; E >= 0; --E) {
        var L = this.tryEntries[E];
        if (L.tryLoc === x) {
          var M = L.completion;
          if (M.type === "throw") {
            var z = M.arg;
            I(L);
          }
          return z;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function(x, E, L) {
      return this.delegate = {
        iterator: B(x),
        resultName: E,
        nextLoc: L
      }, this.method === "next" && (this.arg = e), g;
    }
  }, t;
}
function uc(e, t, r, n, a, o, i) {
  try {
    var s = e[o](i), l = s.value;
  } catch (c) {
    return void r(c);
  }
  s.done ? t(l) : Promise.resolve(l).then(n, a);
}
function mn(e) {
  return function() {
    var t = this, r = arguments;
    return new Promise(function(n, a) {
      var o = e.apply(t, r);
      function i(l) {
        uc(o, n, a, i, s, "next", l);
      }
      function s(l) {
        uc(o, n, a, i, s, "throw", l);
      }
      i(void 0);
    });
  };
}
var Aa = V({}, Lv), e0 = Aa.version, t0 = Aa.render, r0 = Aa.unmountComponentAtNode, Bo;
try {
  var n0 = Number((e0 || "").split(".")[0]);
  n0 >= 18 && (Bo = Aa.createRoot);
} catch {
}
function dc(e) {
  var t = Aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  t && ze(t) === "object" && (t.usingClientEntryPoint = e);
}
var Oo = "__rc_react_root__";
function a0(e, t) {
  dc(!0);
  var r = t[Oo] || Bo(t);
  dc(!1), r.render(e), t[Oo] = r;
}
function o0(e, t) {
  t0(e, t);
}
function i0(e, t) {
  if (Bo) {
    a0(e, t);
    return;
  }
  o0(e, t);
}
function s0(e) {
  return ds.apply(this, arguments);
}
function ds() {
  return ds = mn(/* @__PURE__ */ Yt().mark(function e(t) {
    return Yt().wrap(function(n) {
      for (; ; ) switch (n.prev = n.next) {
        case 0:
          return n.abrupt("return", Promise.resolve().then(function() {
            var a;
            (a = t[Oo]) === null || a === void 0 || a.unmount(), delete t[Oo];
          }));
        case 1:
        case "end":
          return n.stop();
      }
    }, e);
  })), ds.apply(this, arguments);
}
function l0(e) {
  r0(e);
}
function c0(e) {
  return fs.apply(this, arguments);
}
function fs() {
  return fs = mn(/* @__PURE__ */ Yt().mark(function e(t) {
    return Yt().wrap(function(n) {
      for (; ; ) switch (n.prev = n.next) {
        case 0:
          if (Bo === void 0) {
            n.next = 2;
            break;
          }
          return n.abrupt("return", s0(t));
        case 2:
          l0(t);
        case 3:
        case "end":
          return n.stop();
      }
    }, e);
  })), fs.apply(this, arguments);
}
const ef = (e, t, r) => r !== void 0 ? r : `${e}-${t}`, el = function(e) {
  if (!e)
    return !1;
  if (e instanceof Element) {
    if (e.offsetParent)
      return !0;
    if (e.getBBox) {
      var t = e.getBBox(), r = t.width, n = t.height;
      if (r || n)
        return !0;
    }
    if (e.getBoundingClientRect) {
      var a = e.getBoundingClientRect(), o = a.width, i = a.height;
      if (o || i)
        return !0;
    }
  }
  return !1;
}, u0 = (e) => {
  const {
    componentCls: t,
    colorPrimary: r
  } = e;
  return {
    [t]: {
      position: "absolute",
      background: "transparent",
      pointerEvents: "none",
      boxSizing: "border-box",
      color: `var(--wave-color, ${r})`,
      boxShadow: "0 0 0 0 currentcolor",
      opacity: 0.2,
      // =================== Motion ===================
      "&.wave-motion-appear": {
        transition: [`box-shadow 0.4s ${e.motionEaseOutCirc}`, `opacity 2s ${e.motionEaseOutCirc}`].join(","),
        "&-active": {
          boxShadow: "0 0 0 6px currentcolor",
          opacity: 0
        },
        "&.wave-quick": {
          transition: [`box-shadow ${e.motionDurationSlow} ${e.motionEaseInOut}`, `opacity ${e.motionDurationSlow} ${e.motionEaseInOut}`].join(",")
        }
      }
    }
  };
}, d0 = Xs("Wave", (e) => [u0(e)]), tf = `${Wd}-wave-target`;
function f0(e) {
  const t = (e || "").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);
  return t && t[1] && t[2] && t[3] ? !(t[1] === t[2] && t[2] === t[3]) : !0;
}
function gi(e) {
  return e && e !== "#fff" && e !== "#ffffff" && e !== "rgb(255, 255, 255)" && e !== "rgba(255, 255, 255, 1)" && f0(e) && !/rgba\((?:\d*, ){3}0\)/.test(e) && // any transparent rgba color
  e !== "transparent";
}
function v0(e) {
  const {
    borderTopColor: t,
    borderColor: r,
    backgroundColor: n
  } = getComputedStyle(e);
  return gi(t) ? t : gi(r) ? r : gi(n) ? n : null;
}
function mi(e) {
  return Number.isNaN(e) ? 0 : e;
}
const g0 = (e) => {
  const {
    className: t,
    target: r,
    component: n
  } = e, a = u.useRef(null), [o, i] = u.useState(null), [s, l] = u.useState([]), [c, d] = u.useState(0), [f, v] = u.useState(0), [m, h] = u.useState(0), [p, g] = u.useState(0), [S, b] = u.useState(!1), y = {
    left: c,
    top: f,
    width: m,
    height: p,
    borderRadius: s.map((O) => `${O}px`).join(" ")
  };
  o && (y["--wave-color"] = o);
  function w() {
    const O = getComputedStyle(r);
    i(v0(r));
    const _ = O.position === "static", {
      borderLeftWidth: $,
      borderTopWidth: R
    } = O;
    d(_ ? r.offsetLeft : mi(-parseFloat($))), v(_ ? r.offsetTop : mi(-parseFloat(R))), h(r.offsetWidth), g(r.offsetHeight);
    const {
      borderTopLeftRadius: A,
      borderTopRightRadius: F,
      borderBottomLeftRadius: j,
      borderBottomRightRadius: I
    } = O;
    l([A, F, I, j].map((T) => mi(parseFloat(T))));
  }
  if (u.useEffect(() => {
    if (r) {
      const O = Nt(() => {
        w(), b(!0);
      });
      let _;
      return typeof ResizeObserver < "u" && (_ = new ResizeObserver(w), _.observe(r)), () => {
        Nt.cancel(O), _ == null || _.disconnect();
      };
    }
  }, []), !S)
    return null;
  const C = (n === "Checkbox" || n === "Radio") && (r == null ? void 0 : r.classList.contains(tf));
  return /* @__PURE__ */ u.createElement(vn, {
    visible: !0,
    motionAppear: !0,
    motionName: "wave-motion",
    motionDeadline: 5e3,
    onAppearEnd: (O, _) => {
      var $;
      if (_.deadline || _.propertyName === "opacity") {
        const R = ($ = a.current) === null || $ === void 0 ? void 0 : $.parentElement;
        c0(R).then(() => {
          R == null || R.remove();
        });
      }
      return !1;
    }
  }, (O, _) => {
    let {
      className: $
    } = O;
    return /* @__PURE__ */ u.createElement("div", {
      ref: _r(a, _),
      className: ee(t, $, {
        "wave-quick": C
      }),
      style: y
    });
  });
}, m0 = (e, t) => {
  var r;
  const {
    component: n
  } = t;
  if (n === "Checkbox" && !(!((r = e.querySelector("input")) === null || r === void 0) && r.checked))
    return;
  const a = document.createElement("div");
  a.style.position = "absolute", a.style.left = "0px", a.style.top = "0px", e == null || e.insertBefore(a, e == null ? void 0 : e.firstChild), i0(/* @__PURE__ */ u.createElement(g0, Object.assign({}, t, {
    target: e
  })), a);
}, p0 = (e, t, r) => {
  const {
    wave: n
  } = u.useContext(bt), [, a, o] = Rr(), i = Ht((c) => {
    const d = e.current;
    if (n != null && n.disabled || !d)
      return;
    const f = d.querySelector(`.${tf}`) || d, {
      showEffect: v
    } = n || {};
    (v || m0)(f, {
      className: t,
      token: a,
      component: r,
      event: c,
      hashId: o
    });
  }), s = u.useRef();
  return (c) => {
    Nt.cancel(s.current), s.current = Nt(() => {
      i(c);
    });
  };
}, rf = (e) => {
  const {
    children: t,
    disabled: r,
    component: n
  } = e, {
    getPrefixCls: a
  } = Lt(bt), o = ke(null), i = a("wave"), [, s] = d0(i), l = p0(o, ee(i, s), n);
  if (Y.useEffect(() => {
    const d = o.current;
    if (!d || d.nodeType !== 1 || r)
      return;
    const f = (v) => {
      !el(v.target) || // No need wave
      !d.getAttribute || d.getAttribute("disabled") || d.disabled || d.className.includes("disabled") || d.className.includes("-leave") || l(v);
    };
    return d.addEventListener("click", f, !0), () => {
      d.removeEventListener("click", f, !0);
    };
  }, [r]), !/* @__PURE__ */ Y.isValidElement(t))
    return t ?? null;
  const c = fn(t) ? _r(t.ref, o) : o;
  return ko(t, {
    ref: c
  });
};
process.env.NODE_ENV !== "production" && (rf.displayName = "Wave");
const La = (e) => {
  const t = Y.useContext(kn);
  return Y.useMemo(() => e ? typeof e == "string" ? e ?? t : e instanceof Function ? e(t) : t : t, [e, t]);
}, nf = /* @__PURE__ */ u.createContext(null), af = (e, t) => {
  const r = u.useContext(nf), n = u.useMemo(() => {
    if (!r)
      return "";
    const {
      compactDirection: a,
      isFirstItem: o,
      isLastItem: i
    } = r, s = a === "vertical" ? "-vertical-" : "-";
    return ee(`${e}-compact${s}item`, {
      [`${e}-compact${s}first-item`]: o,
      [`${e}-compact${s}last-item`]: i,
      [`${e}-compact${s}item-rtl`]: t === "rtl"
    });
  }, [e, t, r]);
  return {
    compactSize: r == null ? void 0 : r.compactSize,
    compactDirection: r == null ? void 0 : r.compactDirection,
    compactItemClassnames: n
  };
}, h0 = (e) => {
  let {
    children: t
  } = e;
  return /* @__PURE__ */ u.createElement(nf.Provider, {
    value: null
  }, t);
};
var b0 = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
    t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const of = /* @__PURE__ */ u.createContext(void 0), y0 = (e) => {
  const {
    getPrefixCls: t,
    direction: r
  } = u.useContext(bt), {
    prefixCls: n,
    size: a,
    className: o
  } = e, i = b0(e, ["prefixCls", "size", "className"]), s = t("btn-group", n), [, , l] = Rr();
  let c = "";
  switch (a) {
    case "large":
      c = "lg";
      break;
    case "small":
      c = "sm";
      break;
  }
  if (process.env.NODE_ENV !== "production") {
    const f = Ft("Button.Group");
    process.env.NODE_ENV !== "production" && f(!a || ["large", "small", "middle"].includes(a), "usage", "Invalid prop `size`.");
  }
  const d = ee(s, {
    [`${s}-${c}`]: c,
    [`${s}-rtl`]: r === "rtl"
  }, o, l);
  return /* @__PURE__ */ u.createElement(of.Provider, {
    value: a
  }, /* @__PURE__ */ u.createElement("div", Object.assign({}, i, {
    className: d
  })));
}, fc = /^[\u4e00-\u9fa5]{2}$/, vs = fc.test.bind(fc);
function vc(e) {
  return typeof e == "string";
}
function to(e) {
  return e === "text" || e === "link";
}
function S0(e, t) {
  if (e == null)
    return;
  const r = t ? " " : "";
  return typeof e != "string" && typeof e != "number" && vc(e.type) && vs(e.props.children) ? ko(e, {
    children: e.props.children.split("").join(r)
  }) : vc(e) ? vs(e) ? /* @__PURE__ */ Y.createElement("span", null, e.split("").join(r)) : /* @__PURE__ */ Y.createElement("span", null, e) : Qd(e) ? /* @__PURE__ */ Y.createElement("span", null, e) : e;
}
function C0(e, t) {
  let r = !1;
  const n = [];
  return Y.Children.forEach(e, (a) => {
    const o = typeof a, i = o === "string" || o === "number";
    if (r && i) {
      const s = n.length - 1, l = n[s];
      n[s] = `${l}${a}`;
    } else
      n.push(a);
    r = i;
  }), Y.Children.map(n, (a) => S0(a, t));
}
const sf = /* @__PURE__ */ Vr((e, t) => {
  const {
    className: r,
    style: n,
    children: a,
    prefixCls: o
  } = e, i = ee(`${o}-icon`, r);
  return /* @__PURE__ */ Y.createElement("span", {
    ref: t,
    className: i,
    style: n
  }, a);
}), gc = /* @__PURE__ */ Vr((e, t) => {
  const {
    prefixCls: r,
    className: n,
    style: a,
    iconClassName: o
  } = e, i = ee(`${r}-loading-icon`, n);
  return /* @__PURE__ */ Y.createElement(sf, {
    prefixCls: r,
    className: i,
    style: a,
    ref: t
  }, /* @__PURE__ */ Y.createElement(Qs, {
    className: o
  }));
}), pi = () => ({
  width: 0,
  opacity: 0,
  transform: "scale(0)"
}), hi = (e) => ({
  width: e.scrollWidth,
  opacity: 1,
  transform: "scale(1)"
}), E0 = (e) => {
  const {
    prefixCls: t,
    loading: r,
    existIcon: n,
    className: a,
    style: o
  } = e, i = !!r;
  return n ? /* @__PURE__ */ Y.createElement(gc, {
    prefixCls: t,
    className: a,
    style: o
  }) : /* @__PURE__ */ Y.createElement(vn, {
    visible: i,
    // We do not really use this motionName
    motionName: `${t}-loading-icon-motion`,
    motionLeave: i,
    removeOnLeave: !0,
    onAppearStart: pi,
    onAppearActive: hi,
    onEnterStart: pi,
    onEnterActive: hi,
    onLeaveStart: hi,
    onLeaveActive: pi
  }, (s, l) => {
    let {
      className: c,
      style: d
    } = s;
    return /* @__PURE__ */ Y.createElement(gc, {
      prefixCls: t,
      className: a,
      style: Object.assign(Object.assign({}, o), d),
      ref: l,
      iconClassName: c
    });
  });
}, mc = (e, t) => ({
  // Border
  [`> span, > ${e}`]: {
    "&:not(:last-child)": {
      [`&, & > ${e}`]: {
        "&:not(:disabled)": {
          borderInlineEndColor: t
        }
      }
    },
    "&:not(:first-child)": {
      [`&, & > ${e}`]: {
        "&:not(:disabled)": {
          borderInlineStartColor: t
        }
      }
    }
  }
}), w0 = (e) => {
  const {
    componentCls: t,
    fontSize: r,
    lineWidth: n,
    groupBorderColor: a,
    colorErrorHover: o
  } = e;
  return {
    [`${t}-group`]: [
      {
        position: "relative",
        display: "inline-flex",
        // Border
        [`> span, > ${t}`]: {
          "&:not(:last-child)": {
            [`&, & > ${t}`]: {
              borderStartEndRadius: 0,
              borderEndEndRadius: 0
            }
          },
          "&:not(:first-child)": {
            marginInlineStart: e.calc(n).mul(-1).equal(),
            [`&, & > ${t}`]: {
              borderStartStartRadius: 0,
              borderEndStartRadius: 0
            }
          }
        },
        [t]: {
          position: "relative",
          zIndex: 1,
          "&:hover, &:focus, &:active": {
            zIndex: 2
          },
          "&[disabled]": {
            zIndex: 0
          }
        },
        [`${t}-icon-only`]: {
          fontSize: r
        }
      },
      // Border Color
      mc(`${t}-primary`, a),
      mc(`${t}-danger`, o)
    ]
  };
}, lf = (e) => {
  const {
    paddingInline: t,
    onlyIconSize: r,
    paddingBlock: n
  } = e;
  return Zt(e, {
    buttonPaddingHorizontal: t,
    buttonPaddingVertical: n,
    buttonIconOnlyFontSize: r
  });
}, cf = (e) => {
  var t, r, n, a, o, i;
  const s = (t = e.contentFontSize) !== null && t !== void 0 ? t : e.fontSize, l = (r = e.contentFontSizeSM) !== null && r !== void 0 ? r : e.fontSize, c = (n = e.contentFontSizeLG) !== null && n !== void 0 ? n : e.fontSizeLG, d = (a = e.contentLineHeight) !== null && a !== void 0 ? a : po(s), f = (o = e.contentLineHeightSM) !== null && o !== void 0 ? o : po(l), v = (i = e.contentLineHeightLG) !== null && i !== void 0 ? i : po(c);
  return {
    fontWeight: 400,
    defaultShadow: `0 ${e.controlOutlineWidth}px 0 ${e.controlTmpOutline}`,
    primaryShadow: `0 ${e.controlOutlineWidth}px 0 ${e.controlOutline}`,
    dangerShadow: `0 ${e.controlOutlineWidth}px 0 ${e.colorErrorOutline}`,
    primaryColor: e.colorTextLightSolid,
    dangerColor: e.colorTextLightSolid,
    borderColorDisabled: e.colorBorder,
    defaultGhostColor: e.colorBgContainer,
    ghostBg: "transparent",
    defaultGhostBorderColor: e.colorBgContainer,
    paddingInline: e.paddingContentHorizontal - e.lineWidth,
    paddingInlineLG: e.paddingContentHorizontal - e.lineWidth,
    paddingInlineSM: 8 - e.lineWidth,
    onlyIconSize: e.fontSizeLG,
    onlyIconSizeSM: e.fontSizeLG - 2,
    onlyIconSizeLG: e.fontSizeLG + 2,
    groupBorderColor: e.colorPrimaryHover,
    linkHoverBg: "transparent",
    textHoverBg: e.colorBgTextHover,
    defaultColor: e.colorText,
    defaultBg: e.colorBgContainer,
    defaultBorderColor: e.colorBorder,
    defaultBorderColorDisabled: e.colorBorder,
    defaultHoverBg: e.colorBgContainer,
    defaultHoverColor: e.colorPrimaryHover,
    defaultHoverBorderColor: e.colorPrimaryHover,
    defaultActiveBg: e.colorBgContainer,
    defaultActiveColor: e.colorPrimaryActive,
    defaultActiveBorderColor: e.colorPrimaryActive,
    contentFontSize: s,
    contentFontSizeSM: l,
    contentFontSizeLG: c,
    contentLineHeight: d,
    contentLineHeightSM: f,
    contentLineHeightLG: v,
    paddingBlock: Math.max((e.controlHeight - s * d) / 2 - e.lineWidth, 0),
    paddingBlockSM: Math.max((e.controlHeightSM - l * f) / 2 - e.lineWidth, 0),
    paddingBlockLG: Math.max((e.controlHeightLG - c * v) / 2 - e.lineWidth, 0)
  };
}, x0 = (e) => {
  const {
    componentCls: t,
    iconCls: r,
    fontWeight: n
  } = e;
  return {
    [t]: {
      outline: "none",
      position: "relative",
      display: "inline-flex",
      gap: e.marginXS,
      alignItems: "center",
      justifyContent: "center",
      fontWeight: n,
      whiteSpace: "nowrap",
      textAlign: "center",
      backgroundImage: "none",
      background: "transparent",
      border: `${te(e.lineWidth)} ${e.lineType} transparent`,
      cursor: "pointer",
      transition: `all ${e.motionDurationMid} ${e.motionEaseInOut}`,
      userSelect: "none",
      touchAction: "manipulation",
      color: e.colorText,
      "&:disabled > *": {
        pointerEvents: "none"
      },
      "> span": {
        display: "inline-block"
      },
      [`${t}-icon`]: {
        lineHeight: 1
      },
      "> a": {
        color: "currentColor"
      },
      "&:not(:disabled)": Object.assign({}, qs(e)),
      [`&${t}-two-chinese-chars::first-letter`]: {
        letterSpacing: "0.34em"
      },
      [`&${t}-two-chinese-chars > *:not(${r})`]: {
        marginInlineEnd: "-0.34em",
        letterSpacing: "0.34em"
      },
      // iconPosition="end"
      "&-icon-end": {
        flexDirection: "row-reverse"
      }
    }
  };
}, zr = (e, t, r) => ({
  [`&:not(:disabled):not(${e}-disabled)`]: {
    "&:hover": t,
    "&:active": r
  }
}), $0 = (e) => ({
  minWidth: e.controlHeight,
  paddingInlineStart: 0,
  paddingInlineEnd: 0,
  borderRadius: "50%"
}), O0 = (e) => ({
  borderRadius: e.controlHeight,
  paddingInlineStart: e.calc(e.controlHeight).div(2).equal(),
  paddingInlineEnd: e.calc(e.controlHeight).div(2).equal()
}), R0 = (e) => ({
  cursor: "not-allowed",
  borderColor: e.borderColorDisabled,
  color: e.colorTextDisabled,
  background: e.colorBgContainerDisabled,
  boxShadow: "none"
}), _a = (e, t, r, n, a, o, i, s) => ({
  [`&${e}-background-ghost`]: Object.assign(Object.assign({
    color: r || void 0,
    background: t,
    borderColor: n || void 0,
    boxShadow: "none"
  }, zr(e, Object.assign({
    background: t
  }, i), Object.assign({
    background: t
  }, s))), {
    "&:disabled": {
      cursor: "not-allowed",
      color: a || void 0,
      borderColor: o || void 0
    }
  })
}), tl = (e) => ({
  [`&:disabled, &${e.componentCls}-disabled`]: Object.assign({}, R0(e))
}), uf = (e) => Object.assign({}, tl(e)), Ro = (e) => ({
  [`&:disabled, &${e.componentCls}-disabled`]: {
    cursor: "not-allowed",
    color: e.colorTextDisabled
  }
}), df = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, uf(e)), {
  background: e.defaultBg,
  borderColor: e.defaultBorderColor,
  color: e.defaultColor,
  boxShadow: e.defaultShadow
}), zr(e.componentCls, {
  color: e.defaultHoverColor,
  borderColor: e.defaultHoverBorderColor,
  background: e.defaultHoverBg
}, {
  color: e.defaultActiveColor,
  borderColor: e.defaultActiveBorderColor,
  background: e.defaultActiveBg
})), _a(e.componentCls, e.ghostBg, e.defaultGhostColor, e.defaultGhostBorderColor, e.colorTextDisabled, e.colorBorder)), {
  [`&${e.componentCls}-dangerous`]: Object.assign(Object.assign(Object.assign({
    color: e.colorError,
    borderColor: e.colorError
  }, zr(e.componentCls, {
    color: e.colorErrorHover,
    borderColor: e.colorErrorBorderHover
  }, {
    color: e.colorErrorActive,
    borderColor: e.colorErrorActive
  })), _a(e.componentCls, e.ghostBg, e.colorError, e.colorError, e.colorTextDisabled, e.colorBorder)), tl(e))
}), _0 = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, uf(e)), {
  color: e.primaryColor,
  background: e.colorPrimary,
  boxShadow: e.primaryShadow
}), zr(e.componentCls, {
  color: e.colorTextLightSolid,
  background: e.colorPrimaryHover
}, {
  color: e.colorTextLightSolid,
  background: e.colorPrimaryActive
})), _a(e.componentCls, e.ghostBg, e.colorPrimary, e.colorPrimary, e.colorTextDisabled, e.colorBorder, {
  color: e.colorPrimaryHover,
  borderColor: e.colorPrimaryHover
}, {
  color: e.colorPrimaryActive,
  borderColor: e.colorPrimaryActive
})), {
  [`&${e.componentCls}-dangerous`]: Object.assign(Object.assign(Object.assign({
    background: e.colorError,
    boxShadow: e.dangerShadow,
    color: e.dangerColor
  }, zr(e.componentCls, {
    background: e.colorErrorHover
  }, {
    background: e.colorErrorActive
  })), _a(e.componentCls, e.ghostBg, e.colorError, e.colorError, e.colorTextDisabled, e.colorBorder, {
    color: e.colorErrorHover,
    borderColor: e.colorErrorHover
  }, {
    color: e.colorErrorActive,
    borderColor: e.colorErrorActive
  })), tl(e))
}), P0 = (e) => Object.assign(Object.assign({}, df(e)), {
  borderStyle: "dashed"
}), T0 = (e) => Object.assign(Object.assign(Object.assign({
  color: e.colorLink
}, zr(e.componentCls, {
  color: e.colorLinkHover,
  background: e.linkHoverBg
}, {
  color: e.colorLinkActive
})), Ro(e)), {
  [`&${e.componentCls}-dangerous`]: Object.assign(Object.assign({
    color: e.colorError
  }, zr(e.componentCls, {
    color: e.colorErrorHover
  }, {
    color: e.colorErrorActive
  })), Ro(e))
}), N0 = (e) => Object.assign(Object.assign(Object.assign({}, zr(e.componentCls, {
  color: e.colorText,
  background: e.textHoverBg
}, {
  color: e.colorText,
  background: e.colorBgTextActive
})), Ro(e)), {
  [`&${e.componentCls}-dangerous`]: Object.assign(Object.assign({
    color: e.colorError
  }, Ro(e)), zr(e.componentCls, {
    color: e.colorErrorHover,
    background: e.colorErrorBg
  }, {
    color: e.colorErrorHover,
    background: e.colorErrorBgActive
  }))
}), I0 = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [`${t}-default`]: df(e),
    [`${t}-primary`]: _0(e),
    [`${t}-dashed`]: P0(e),
    [`${t}-link`]: T0(e),
    [`${t}-text`]: N0(e),
    [`${t}-ghost`]: _a(e.componentCls, e.ghostBg, e.colorBgContainer, e.colorBgContainer, e.colorTextDisabled, e.colorBorder)
  };
}, rl = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  const {
    componentCls: r,
    controlHeight: n,
    fontSize: a,
    lineHeight: o,
    borderRadius: i,
    buttonPaddingHorizontal: s,
    iconCls: l,
    buttonPaddingVertical: c
  } = e, d = `${r}-icon-only`;
  return [
    {
      [`${t}`]: {
        fontSize: a,
        lineHeight: o,
        height: n,
        padding: `${te(c)} ${te(s)}`,
        borderRadius: i,
        [`&${d}`]: {
          width: n,
          paddingInline: 0,
          // make `btn-icon-only` not too narrow
          [`&${r}-compact-item`]: {
            flex: "none"
          },
          [`&${r}-round`]: {
            width: "auto"
          },
          [l]: {
            fontSize: e.buttonIconOnlyFontSize
          }
        },
        // Loading
        [`&${r}-loading`]: {
          opacity: e.opacityLoading,
          cursor: "default"
        },
        [`${r}-loading-icon`]: {
          transition: `width ${e.motionDurationSlow} ${e.motionEaseInOut}, opacity ${e.motionDurationSlow} ${e.motionEaseInOut}`
        }
      }
    },
    // Shape - patch prefixCls again to override solid border radius style
    {
      [`${r}${r}-circle${t}`]: $0(e)
    },
    {
      [`${r}${r}-round${t}`]: O0(e)
    }
  ];
}, M0 = (e) => {
  const t = Zt(e, {
    fontSize: e.contentFontSize,
    lineHeight: e.contentLineHeight
  });
  return rl(t, e.componentCls);
}, A0 = (e) => {
  const t = Zt(e, {
    controlHeight: e.controlHeightSM,
    fontSize: e.contentFontSizeSM,
    lineHeight: e.contentLineHeightSM,
    padding: e.paddingXS,
    buttonPaddingHorizontal: e.paddingInlineSM,
    buttonPaddingVertical: e.paddingBlockSM,
    borderRadius: e.borderRadiusSM,
    buttonIconOnlyFontSize: e.onlyIconSizeSM
  });
  return rl(t, `${e.componentCls}-sm`);
}, L0 = (e) => {
  const t = Zt(e, {
    controlHeight: e.controlHeightLG,
    fontSize: e.contentFontSizeLG,
    lineHeight: e.contentLineHeightLG,
    buttonPaddingHorizontal: e.paddingInlineLG,
    buttonPaddingVertical: e.paddingBlockLG,
    borderRadius: e.borderRadiusLG,
    buttonIconOnlyFontSize: e.onlyIconSizeLG
  });
  return rl(t, `${e.componentCls}-lg`);
}, j0 = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [t]: {
      [`&${t}-block`]: {
        width: "100%"
      }
    }
  };
}, F0 = en("Button", (e) => {
  const t = lf(e);
  return [
    // Shared
    x0(t),
    // Size
    M0(t),
    A0(t),
    L0(t),
    // Block
    j0(t),
    // Group (type, ghost, danger, loading)
    I0(t),
    // Button Group
    w0(t)
  ];
}, cf, {
  unitless: {
    fontWeight: !0,
    contentLineHeight: !0,
    contentLineHeightSM: !0,
    contentLineHeightLG: !0
  }
});
function D0(e, t, r) {
  const {
    focusElCls: n,
    focus: a,
    borderElCls: o
  } = r, i = o ? "> *" : "", s = ["hover", a ? "focus" : null, "active"].filter(Boolean).map((l) => `&:${l} ${i}`).join(",");
  return {
    [`&-item:not(${t}-last-item)`]: {
      marginInlineEnd: e.calc(e.lineWidth).mul(-1).equal()
    },
    "&-item": Object.assign(Object.assign({
      [s]: {
        zIndex: 2
      }
    }, n ? {
      [`&${n}`]: {
        zIndex: 2
      }
    } : {}), {
      [`&[disabled] ${i}`]: {
        zIndex: 0
      }
    })
  };
}
function z0(e, t, r) {
  const {
    borderElCls: n
  } = r, a = n ? `> ${n}` : "";
  return {
    [`&-item:not(${t}-first-item):not(${t}-last-item) ${a}`]: {
      borderRadius: 0
    },
    [`&-item:not(${t}-last-item)${t}-first-item`]: {
      [`& ${a}, &${e}-sm ${a}, &${e}-lg ${a}`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`&-item:not(${t}-first-item)${t}-last-item`]: {
      [`& ${a}, &${e}-sm ${a}, &${e}-lg ${a}`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    }
  };
}
function ff(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    focus: !0
  };
  const {
    componentCls: r
  } = e, n = `${r}-compact`;
  return {
    [n]: Object.assign(Object.assign({}, D0(e, n, t)), z0(r, n, t))
  };
}
function V0(e, t) {
  return {
    // border collapse
    [`&-item:not(${t}-last-item)`]: {
      marginBottom: e.calc(e.lineWidth).mul(-1).equal()
    },
    "&-item": {
      "&:hover,&:focus,&:active": {
        zIndex: 2
      },
      "&[disabled]": {
        zIndex: 0
      }
    }
  };
}
function k0(e, t) {
  return {
    [`&-item:not(${t}-first-item):not(${t}-last-item)`]: {
      borderRadius: 0
    },
    [`&-item${t}-first-item:not(${t}-last-item)`]: {
      [`&, &${e}-sm, &${e}-lg`]: {
        borderEndEndRadius: 0,
        borderEndStartRadius: 0
      }
    },
    [`&-item${t}-last-item:not(${t}-first-item)`]: {
      [`&, &${e}-sm, &${e}-lg`]: {
        borderStartStartRadius: 0,
        borderStartEndRadius: 0
      }
    }
  };
}
function B0(e) {
  const t = `${e.componentCls}-compact-vertical`;
  return {
    [t]: Object.assign(Object.assign({}, V0(e, t)), k0(e.componentCls, t))
  };
}
const H0 = (e) => {
  const {
    componentCls: t,
    calc: r
  } = e;
  return {
    [t]: {
      // Special styles for Primary Button
      [`&-compact-item${t}-primary`]: {
        [`&:not([disabled]) + ${t}-compact-item${t}-primary:not([disabled])`]: {
          position: "relative",
          "&:before": {
            position: "absolute",
            top: r(e.lineWidth).mul(-1).equal(),
            insetInlineStart: r(e.lineWidth).mul(-1).equal(),
            display: "inline-block",
            width: e.lineWidth,
            height: `calc(100% + ${te(e.lineWidth)} * 2)`,
            backgroundColor: e.colorPrimaryHover,
            content: '""'
          }
        }
      },
      // Special styles for Primary Button
      "&-compact-vertical-item": {
        [`&${t}-primary`]: {
          [`&:not([disabled]) + ${t}-compact-vertical-item${t}-primary:not([disabled])`]: {
            position: "relative",
            "&:before": {
              position: "absolute",
              top: r(e.lineWidth).mul(-1).equal(),
              insetInlineStart: r(e.lineWidth).mul(-1).equal(),
              display: "inline-block",
              width: `calc(100% + ${te(e.lineWidth)} * 2)`,
              height: e.lineWidth,
              backgroundColor: e.colorPrimaryHover,
              content: '""'
            }
          }
        }
      }
    }
  };
}, W0 = Yp(["Button", "compact"], (e) => {
  const t = lf(e);
  return [
    // Space Compact
    ff(t),
    B0(t),
    H0(t)
  ];
}, cf);
var K0 = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
    t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
function U0(e) {
  if (typeof e == "object" && e) {
    let t = e == null ? void 0 : e.delay;
    return t = !Number.isNaN(t) && typeof t == "number" ? t : 0, {
      loading: t <= 0,
      delay: t
    };
  }
  return {
    loading: !!e,
    delay: 0
  };
}
const G0 = /* @__PURE__ */ Y.forwardRef((e, t) => {
  var r, n, a;
  const {
    loading: o = !1,
    prefixCls: i,
    type: s,
    danger: l = !1,
    shape: c = "default",
    size: d,
    styles: f,
    disabled: v,
    className: m,
    rootClassName: h,
    children: p,
    icon: g,
    iconPosition: S = "start",
    ghost: b = !1,
    block: y = !1,
    // React does not recognize the `htmlType` prop on a DOM element. Here we pick it out of `rest`.
    htmlType: w = "button",
    classNames: C,
    style: O = {},
    autoInsertSpace: _
  } = e, $ = K0(e, ["loading", "prefixCls", "type", "danger", "shape", "size", "styles", "disabled", "className", "rootClassName", "children", "icon", "iconPosition", "ghost", "block", "htmlType", "classNames", "style", "autoInsertSpace"]), R = s || "default", {
    getPrefixCls: A,
    direction: F,
    button: j
  } = Lt(bt), I = (r = _ ?? (j == null ? void 0 : j.autoInsertSpace)) !== null && r !== void 0 ? r : !0, T = A("btn", i), [B, N, x] = F0(T), E = Lt(Vn), L = v ?? E, M = Lt(of), z = Yr(() => U0(o), [o]), [H, W] = pt(z.loading), [U, Q] = pt(!1), J = _r(t, /* @__PURE__ */ Nv()), oe = Tv.count(p) === 1 && !g && !to(R);
  ht(() => {
    let be = null;
    z.delay > 0 ? be = setTimeout(() => {
      be = null, W(!0);
    }, z.delay) : W(z.loading);
    function Pe() {
      be && (clearTimeout(be), be = null);
    }
    return Pe;
  }, [z]), ht(() => {
    if (!J || !J.current || !I)
      return;
    const be = J.current.textContent;
    oe && vs(be) ? U || Q(!0) : U && Q(!1);
  }, [J]);
  const ue = (be) => {
    const {
      onClick: Pe
    } = e;
    if (H || L) {
      be.preventDefault();
      return;
    }
    Pe == null || Pe(be);
  };
  if (process.env.NODE_ENV !== "production") {
    const be = Ft("Button");
    process.env.NODE_ENV !== "production" && be(!(typeof g == "string" && g.length > 2), "breaking", `\`icon\` is using ReactNode instead of string naming in v4. Please check \`${g}\` at https://ant.design/components/icon`), process.env.NODE_ENV !== "production" && be(!(b && to(R)), "usage", "`link` or `text` button can't be a `ghost` button.");
  }
  const {
    compactSize: xe,
    compactItemClassnames: me
  } = af(T, F), fe = {
    large: "lg",
    small: "sm",
    middle: void 0
  }, we = La((be) => {
    var Pe, pe;
    return (pe = (Pe = d ?? xe) !== null && Pe !== void 0 ? Pe : M) !== null && pe !== void 0 ? pe : be;
  }), k = we && fe[we] || "", le = H ? "loading" : g, ge = Cr($, ["navigate"]), $e = ee(T, N, x, {
    [`${T}-${c}`]: c !== "default" && c,
    [`${T}-${R}`]: R,
    [`${T}-${k}`]: k,
    [`${T}-icon-only`]: !p && p !== 0 && !!le,
    [`${T}-background-ghost`]: b && !to(R),
    [`${T}-loading`]: H,
    [`${T}-two-chinese-chars`]: U && I && !H,
    [`${T}-block`]: y,
    [`${T}-dangerous`]: l,
    [`${T}-rtl`]: F === "rtl",
    [`${T}-icon-end`]: S === "end"
  }, me, m, h, j == null ? void 0 : j.className), ye = Object.assign(Object.assign({}, j == null ? void 0 : j.style), O), ie = ee(C == null ? void 0 : C.icon, (n = j == null ? void 0 : j.classNames) === null || n === void 0 ? void 0 : n.icon), ne = Object.assign(Object.assign({}, (f == null ? void 0 : f.icon) || {}), ((a = j == null ? void 0 : j.styles) === null || a === void 0 ? void 0 : a.icon) || {}), ae = g && !H ? /* @__PURE__ */ Y.createElement(sf, {
    prefixCls: T,
    className: ie,
    style: ne
  }, g) : /* @__PURE__ */ Y.createElement(E0, {
    existIcon: !!g,
    prefixCls: T,
    loading: H
  }), Se = p || p === 0 ? C0(p, oe && I) : null;
  if (ge.href !== void 0)
    return B(/* @__PURE__ */ Y.createElement("a", Object.assign({}, ge, {
      className: ee($e, {
        [`${T}-disabled`]: L
      }),
      href: L ? void 0 : ge.href,
      style: ye,
      onClick: ue,
      ref: J,
      tabIndex: L ? -1 : 0
    }), ae, Se));
  let he = /* @__PURE__ */ Y.createElement("button", Object.assign({}, $, {
    type: w,
    className: $e,
    style: ye,
    onClick: ue,
    disabled: L,
    ref: J
  }), ae, Se, !!me && /* @__PURE__ */ Y.createElement(W0, {
    key: "compact",
    prefixCls: T
  }));
  return to(R) || (he = /* @__PURE__ */ Y.createElement(rf, {
    component: "Button",
    disabled: H
  }, he)), B(he);
}), Ho = G0;
Ho.Group = y0;
Ho.__ANT_BUTTON = !0;
process.env.NODE_ENV !== "production" && (Ho.displayName = "Button");
var vf = /* @__PURE__ */ u.createContext(null), pc = [];
function q0(e, t) {
  var r = u.useState(function() {
    if (!Xt())
      return null;
    var h = document.createElement("div");
    return process.env.NODE_ENV !== "production" && t && h.setAttribute("data-debug", t), h;
  }), n = G(r, 1), a = n[0], o = u.useRef(!1), i = u.useContext(vf), s = u.useState(pc), l = G(s, 2), c = l[0], d = l[1], f = i || (o.current ? void 0 : function(h) {
    d(function(p) {
      var g = [h].concat(Ee(p));
      return g;
    });
  });
  function v() {
    a.parentElement || document.body.appendChild(a), o.current = !0;
  }
  function m() {
    var h;
    (h = a.parentElement) === null || h === void 0 || h.removeChild(a), o.current = !1;
  }
  return Et(function() {
    return e ? i ? i(v) : v() : m(), m;
  }, [e]), Et(function() {
    c.length && (c.forEach(function(h) {
      return h();
    }), d(pc));
  }, [c]), [a, f];
}
function X0(e) {
  var t = "rc-scrollbar-measure-".concat(Math.random().toString(36).substring(7)), r = document.createElement("div");
  r.id = t;
  var n = r.style;
  n.position = "absolute", n.left = "0", n.top = "0", n.width = "100px", n.height = "100px", n.overflow = "scroll";
  var a, o;
  if (e) {
    var i = getComputedStyle(e);
    n.scrollbarColor = i.scrollbarColor, n.scrollbarWidth = i.scrollbarWidth;
    var s = getComputedStyle(e, "::-webkit-scrollbar"), l = parseInt(s.width, 10), c = parseInt(s.height, 10);
    try {
      var d = l ? "width: ".concat(s.width, ";") : "", f = c ? "height: ".concat(s.height, ";") : "";
      Fr(`
#`.concat(t, `::-webkit-scrollbar {
`).concat(d, `
`).concat(f, `
}`), t);
    } catch (h) {
      console.error(h), a = l, o = c;
    }
  }
  document.body.appendChild(r);
  var v = e && a && !isNaN(a) ? a : r.offsetWidth - r.clientWidth, m = e && o && !isNaN(o) ? o : r.offsetHeight - r.clientHeight;
  return document.body.removeChild(r), Ca(t), {
    width: v,
    height: m
  };
}
function Y0(e) {
  return typeof document > "u" || !e || !(e instanceof Element) ? {
    width: 0,
    height: 0
  } : X0(e);
}
function Z0() {
  return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth;
}
var Q0 = "rc-util-locker-".concat(Date.now()), hc = 0;
function J0(e) {
  var t = !!e, r = u.useState(function() {
    return hc += 1, "".concat(Q0, "_").concat(hc);
  }), n = G(r, 1), a = n[0];
  Et(function() {
    if (t) {
      var o = Y0(document.body).width, i = Z0();
      Fr(`
html body {
  overflow-y: hidden;
  `.concat(i ? "width: calc(100% - ".concat(o, "px);") : "", `
}`), a);
    } else
      Ca(a);
    return function() {
      Ca(a);
    };
  }, [t, a]);
}
var eb = !1;
function tb(e) {
  return eb;
}
var bc = function(t) {
  return t === !1 ? !1 : !Xt() || !t ? null : typeof t == "string" ? document.querySelector(t) : typeof t == "function" ? t() : t;
}, nl = /* @__PURE__ */ u.forwardRef(function(e, t) {
  var r = e.open, n = e.autoLock, a = e.getContainer, o = e.debug, i = e.autoDestroy, s = i === void 0 ? !0 : i, l = e.children, c = u.useState(r), d = G(c, 2), f = d[0], v = d[1], m = f || r;
  process.env.NODE_ENV !== "production" && ot(Xt() || !r, "Portal only work in client side. Please call 'useEffect' to show Portal instead default render in SSR."), u.useEffect(function() {
    (s || r) && v(r);
  }, [r, s]);
  var h = u.useState(function() {
    return bc(a);
  }), p = G(h, 2), g = p[0], S = p[1];
  u.useEffect(function() {
    var j = bc(a);
    S(j ?? null);
  });
  var b = q0(m && !g, o), y = G(b, 2), w = y[0], C = y[1], O = g ?? w;
  J0(n && r && Xt() && (O === w || O === document.body));
  var _ = null;
  if (l && fn(l) && t) {
    var $ = l;
    _ = $.ref;
  }
  var R = Ia(_, t);
  if (!m || !Xt() || g === void 0)
    return null;
  var A = O === !1 || tb(), F = l;
  return t && (F = /* @__PURE__ */ u.cloneElement(l, {
    ref: R
  })), /* @__PURE__ */ u.createElement(vf.Provider, {
    value: C
  }, A ? F : /* @__PURE__ */ jv(F, O));
});
process.env.NODE_ENV !== "production" && (nl.displayName = "Portal");
function rb() {
  var e = V({}, u);
  return e.useId;
}
var yc = 0, Sc = rb();
const nb = Sc ? (
  // Use React `useId`
  function(t) {
    var r = Sc();
    return t || (process.env.NODE_ENV === "test" ? "test-id" : r);
  }
) : (
  // Use compatible of `useId`
  function(t) {
    var r = u.useState("ssr-id"), n = G(r, 2), a = n[0], o = n[1];
    return u.useEffect(function() {
      var i = yc;
      yc += 1, o("rc_unique_".concat(i));
    }, []), t || (process.env.NODE_ENV === "test" ? "test-id" : a);
  }
);
var ln = "RC_FORM_INTERNAL_HOOKS", ft = function() {
  ot(!1, "Can not find FormContext. Please make sure you wrap Field under Form.");
}, Bn = /* @__PURE__ */ u.createContext({
  getFieldValue: ft,
  getFieldsValue: ft,
  getFieldError: ft,
  getFieldWarning: ft,
  getFieldsError: ft,
  isFieldsTouched: ft,
  isFieldTouched: ft,
  isFieldValidating: ft,
  isFieldsValidating: ft,
  resetFields: ft,
  setFields: ft,
  setFieldValue: ft,
  setFieldsValue: ft,
  validateFields: ft,
  submit: ft,
  getInternalHooks: function() {
    return ft(), {
      dispatch: ft,
      initEntityValue: ft,
      registerField: ft,
      useSubscribe: ft,
      setInitialValues: ft,
      destroyForm: ft,
      setCallbacks: ft,
      registerWatch: ft,
      getFields: ft,
      setValidateMessages: ft,
      setPreserve: ft,
      getInitialValue: ft
    };
  }
}), _o = /* @__PURE__ */ u.createContext(null);
function gs(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function ab(e) {
  return e && !!e._init;
}
function ms() {
  return {
    default: "Validation error on field %s",
    required: "%s is required",
    enum: "%s must be one of %s",
    whitespace: "%s cannot be empty",
    date: {
      format: "%s date %s is invalid for format %s",
      parse: "%s date could not be parsed, %s is invalid ",
      invalid: "%s date %s is invalid"
    },
    types: {
      string: "%s is not a %s",
      method: "%s is not a %s (function)",
      array: "%s is not an %s",
      object: "%s is not an %s",
      number: "%s is not a %s",
      date: "%s is not a %s",
      boolean: "%s is not a %s",
      integer: "%s is not an %s",
      float: "%s is not a %s",
      regexp: "%s is not a valid %s",
      email: "%s is not a valid %s",
      url: "%s is not a valid %s",
      hex: "%s is not a valid %s"
    },
    string: {
      len: "%s must be exactly %s characters",
      min: "%s must be at least %s characters",
      max: "%s cannot be longer than %s characters",
      range: "%s must be between %s and %s characters"
    },
    number: {
      len: "%s must equal %s",
      min: "%s cannot be less than %s",
      max: "%s cannot be greater than %s",
      range: "%s must be between %s and %s"
    },
    array: {
      len: "%s must be exactly %s in length",
      min: "%s cannot be less than %s in length",
      max: "%s cannot be greater than %s in length",
      range: "%s must be between %s and %s in length"
    },
    pattern: {
      mismatch: "%s value %s does not match pattern %s"
    },
    clone: function() {
      var t = JSON.parse(JSON.stringify(this));
      return t.clone = this.clone, t;
    }
  };
}
var ps = ms();
function ob(e) {
  try {
    return Function.toString.call(e).indexOf("[native code]") !== -1;
  } catch {
    return typeof e == "function";
  }
}
function ib(e, t, r) {
  if (Ds()) return Reflect.construct.apply(null, arguments);
  var n = [null];
  n.push.apply(n, t);
  var a = new (e.bind.apply(e, n))();
  return r && ba(a, r.prototype), a;
}
function hs(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return hs = function(n) {
    if (n === null || !ob(n)) return n;
    if (typeof n != "function") throw new TypeError("Super expression must either be null or a function");
    if (t !== void 0) {
      if (t.has(n)) return t.get(n);
      t.set(n, a);
    }
    function a() {
      return ib(n, arguments, ya(this).constructor);
    }
    return a.prototype = Object.create(n.prototype, {
      constructor: {
        value: a,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), ba(a, n);
  }, hs(e);
}
var sb = /%[sdj%]/g, gf = function() {
};
typeof process < "u" && process.env && process.env.NODE_ENV !== "production" && typeof window < "u" && typeof document < "u" && (gf = function(t, r) {
  typeof console < "u" && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING > "u" && r.every(function(n) {
    return typeof n == "string";
  }) && console.warn(t, r);
});
function bs(e) {
  if (!e || !e.length) return null;
  var t = {};
  return e.forEach(function(r) {
    var n = r.field;
    t[n] = t[n] || [], t[n].push(r);
  }), t;
}
function nr(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  var a = 0, o = r.length;
  if (typeof e == "function")
    return e.apply(null, r);
  if (typeof e == "string") {
    var i = e.replace(sb, function(s) {
      if (s === "%%")
        return "%";
      if (a >= o)
        return s;
      switch (s) {
        case "%s":
          return String(r[a++]);
        case "%d":
          return Number(r[a++]);
        case "%j":
          try {
            return JSON.stringify(r[a++]);
          } catch {
            return "[Circular]";
          }
          break;
        default:
          return s;
      }
    });
    return i;
  }
  return e;
}
function lb(e) {
  return e === "string" || e === "url" || e === "hex" || e === "email" || e === "date" || e === "pattern";
}
function It(e, t) {
  return !!(e == null || t === "array" && Array.isArray(e) && !e.length || lb(t) && typeof e == "string" && !e);
}
function cb(e, t, r) {
  var n = [], a = 0, o = e.length;
  function i(s) {
    n.push.apply(n, Ee(s || [])), a++, a === o && r(n);
  }
  e.forEach(function(s) {
    t(s, i);
  });
}
function Cc(e, t, r) {
  var n = 0, a = e.length;
  function o(i) {
    if (i && i.length) {
      r(i);
      return;
    }
    var s = n;
    n = n + 1, s < a ? t(e[s], o) : r([]);
  }
  o([]);
}
function ub(e) {
  var t = [];
  return Object.keys(e).forEach(function(r) {
    t.push.apply(t, Ee(e[r] || []));
  }), t;
}
var Ec = /* @__PURE__ */ function(e) {
  Qr(r, e);
  var t = Jr(r);
  function r(n, a) {
    var o;
    return Dt(this, r), o = t.call(this, "Async Validation Error"), D(Ze(o), "errors", void 0), D(Ze(o), "fields", void 0), o.errors = n, o.fields = a, o;
  }
  return zt(r);
}(/* @__PURE__ */ hs(Error));
function db(e, t, r, n, a) {
  if (t.first) {
    var o = new Promise(function(v, m) {
      var h = function(S) {
        return n(S), S.length ? m(new Ec(S, bs(S))) : v(a);
      }, p = ub(e);
      Cc(p, r, h);
    });
    return o.catch(function(v) {
      return v;
    }), o;
  }
  var i = t.firstFields === !0 ? Object.keys(e) : t.firstFields || [], s = Object.keys(e), l = s.length, c = 0, d = [], f = new Promise(function(v, m) {
    var h = function(g) {
      if (d.push.apply(d, g), c++, c === l)
        return n(d), d.length ? m(new Ec(d, bs(d))) : v(a);
    };
    s.length || (n(d), v(a)), s.forEach(function(p) {
      var g = e[p];
      i.indexOf(p) !== -1 ? Cc(g, r, h) : cb(g, r, h);
    });
  });
  return f.catch(function(v) {
    return v;
  }), f;
}
function fb(e) {
  return !!(e && e.message !== void 0);
}
function vb(e, t) {
  for (var r = e, n = 0; n < t.length; n++) {
    if (r == null)
      return r;
    r = r[t[n]];
  }
  return r;
}
function wc(e, t) {
  return function(r) {
    var n;
    return e.fullFields ? n = vb(t, e.fullFields) : n = t[r.field || e.fullField], fb(r) ? (r.field = r.field || e.fullField, r.fieldValue = n, r) : {
      message: typeof r == "function" ? r() : r,
      fieldValue: n,
      field: r.field || e.fullField
    };
  };
}
function xc(e, t) {
  if (t) {
    for (var r in t)
      if (t.hasOwnProperty(r)) {
        var n = t[r];
        ze(n) === "object" && ze(e[r]) === "object" ? e[r] = V(V({}, e[r]), n) : e[r] = n;
      }
  }
  return e;
}
var Sn = "enum", gb = function(t, r, n, a, o) {
  t[Sn] = Array.isArray(t[Sn]) ? t[Sn] : [], t[Sn].indexOf(r) === -1 && a.push(nr(o.messages[Sn], t.fullField, t[Sn].join(", ")));
}, mb = function(t, r, n, a, o) {
  if (t.pattern) {
    if (t.pattern instanceof RegExp)
      t.pattern.lastIndex = 0, t.pattern.test(r) || a.push(nr(o.messages.pattern.mismatch, t.fullField, r, t.pattern));
    else if (typeof t.pattern == "string") {
      var i = new RegExp(t.pattern);
      i.test(r) || a.push(nr(o.messages.pattern.mismatch, t.fullField, r, t.pattern));
    }
  }
}, pb = function(t, r, n, a, o) {
  var i = typeof t.len == "number", s = typeof t.min == "number", l = typeof t.max == "number", c = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, d = r, f = null, v = typeof r == "number", m = typeof r == "string", h = Array.isArray(r);
  if (v ? f = "number" : m ? f = "string" : h && (f = "array"), !f)
    return !1;
  h && (d = r.length), m && (d = r.replace(c, "_").length), i ? d !== t.len && a.push(nr(o.messages[f].len, t.fullField, t.len)) : s && !l && d < t.min ? a.push(nr(o.messages[f].min, t.fullField, t.min)) : l && !s && d > t.max ? a.push(nr(o.messages[f].max, t.fullField, t.max)) : s && l && (d < t.min || d > t.max) && a.push(nr(o.messages[f].range, t.fullField, t.min, t.max));
}, mf = function(t, r, n, a, o, i) {
  t.required && (!n.hasOwnProperty(t.field) || It(r, i || t.type)) && a.push(nr(o.messages.required, t.fullField));
}, ro;
const hb = function() {
  if (ro)
    return ro;
  var e = "[a-fA-F\\d:]", t = function(O) {
    return O && O.includeBoundaries ? "(?:(?<=\\s|^)(?=".concat(e, ")|(?<=").concat(e, ")(?=\\s|$))") : "";
  }, r = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}", n = "[a-fA-F\\d]{1,4}", a = [
    "(?:".concat(n, ":){7}(?:").concat(n, "|:)"),
    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
    "(?:".concat(n, ":){6}(?:").concat(r, "|:").concat(n, "|:)"),
    // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::
    "(?:".concat(n, ":){5}(?::").concat(r, "|(?::").concat(n, "){1,2}|:)"),
    // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::
    "(?:".concat(n, ":){4}(?:(?::").concat(n, "){0,1}:").concat(r, "|(?::").concat(n, "){1,3}|:)"),
    // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::
    "(?:".concat(n, ":){3}(?:(?::").concat(n, "){0,2}:").concat(r, "|(?::").concat(n, "){1,4}|:)"),
    // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::
    "(?:".concat(n, ":){2}(?:(?::").concat(n, "){0,3}:").concat(r, "|(?::").concat(n, "){1,5}|:)"),
    // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::
    "(?:".concat(n, ":){1}(?:(?::").concat(n, "){0,4}:").concat(r, "|(?::").concat(n, "){1,6}|:)"),
    // 1::              1::3:4:5:6:7:8   1::8            1::
    "(?::(?:(?::".concat(n, "){0,5}:").concat(r, "|(?::").concat(n, "){1,7}|:))")
    // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::
  ], o = "(?:%[0-9a-zA-Z]{1,})?", i = "(?:".concat(a.join("|"), ")").concat(o), s = new RegExp("(?:^".concat(r, "$)|(?:^").concat(i, "$)")), l = new RegExp("^".concat(r, "$")), c = new RegExp("^".concat(i, "$")), d = function(O) {
    return O && O.exact ? s : new RegExp("(?:".concat(t(O)).concat(r).concat(t(O), ")|(?:").concat(t(O)).concat(i).concat(t(O), ")"), "g");
  };
  d.v4 = function(C) {
    return C && C.exact ? l : new RegExp("".concat(t(C)).concat(r).concat(t(C)), "g");
  }, d.v6 = function(C) {
    return C && C.exact ? c : new RegExp("".concat(t(C)).concat(i).concat(t(C)), "g");
  };
  var f = "(?:(?:[a-z]+:)?//)", v = "(?:\\S+(?::\\S*)?@)?", m = d.v4().source, h = d.v6().source, p = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)", g = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*", S = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", b = "(?::\\d{2,5})?", y = '(?:[/?#][^\\s"]*)?', w = "(?:".concat(f, "|www\\.)").concat(v, "(?:localhost|").concat(m, "|").concat(h, "|").concat(p).concat(g).concat(S, ")").concat(b).concat(y);
  return ro = new RegExp("(?:^".concat(w, "$)"), "i"), ro;
};
var $c = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  // url: new RegExp(
  //   '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
  //   'i',
  // ),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
}, ca = {
  integer: function(t) {
    return ca.number(t) && parseInt(t, 10) === t;
  },
  float: function(t) {
    return ca.number(t) && !ca.integer(t);
  },
  array: function(t) {
    return Array.isArray(t);
  },
  regexp: function(t) {
    if (t instanceof RegExp)
      return !0;
    try {
      return !!new RegExp(t);
    } catch {
      return !1;
    }
  },
  date: function(t) {
    return typeof t.getTime == "function" && typeof t.getMonth == "function" && typeof t.getYear == "function" && !isNaN(t.getTime());
  },
  number: function(t) {
    return isNaN(t) ? !1 : typeof t == "number";
  },
  object: function(t) {
    return ze(t) === "object" && !ca.array(t);
  },
  method: function(t) {
    return typeof t == "function";
  },
  email: function(t) {
    return typeof t == "string" && t.length <= 320 && !!t.match($c.email);
  },
  url: function(t) {
    return typeof t == "string" && t.length <= 2048 && !!t.match(hb());
  },
  hex: function(t) {
    return typeof t == "string" && !!t.match($c.hex);
  }
}, bb = function(t, r, n, a, o) {
  if (t.required && r === void 0) {
    mf(t, r, n, a, o);
    return;
  }
  var i = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"], s = t.type;
  i.indexOf(s) > -1 ? ca[s](r) || a.push(nr(o.messages.types[s], t.fullField, t.type)) : s && ze(r) !== t.type && a.push(nr(o.messages.types[s], t.fullField, t.type));
}, yb = function(t, r, n, a, o) {
  (/^\s+$/.test(r) || r === "") && a.push(nr(o.messages.whitespace, t.fullField));
};
const Je = {
  required: mf,
  whitespace: yb,
  type: bb,
  range: pb,
  enum: gb,
  pattern: mb
};
var Sb = function(t, r, n, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (It(r) && !t.required)
      return n();
    Je.required(t, r, a, i, o);
  }
  n(i);
}, Cb = function(t, r, n, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (r == null && !t.required)
      return n();
    Je.required(t, r, a, i, o, "array"), r != null && (Je.type(t, r, a, i, o), Je.range(t, r, a, i, o));
  }
  n(i);
}, Eb = function(t, r, n, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (It(r) && !t.required)
      return n();
    Je.required(t, r, a, i, o), r !== void 0 && Je.type(t, r, a, i, o);
  }
  n(i);
}, wb = function(t, r, n, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (It(r, "date") && !t.required)
      return n();
    if (Je.required(t, r, a, i, o), !It(r, "date")) {
      var l;
      r instanceof Date ? l = r : l = new Date(r), Je.type(t, l, a, i, o), l && Je.range(t, l.getTime(), a, i, o);
    }
  }
  n(i);
}, xb = "enum", $b = function(t, r, n, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (It(r) && !t.required)
      return n();
    Je.required(t, r, a, i, o), r !== void 0 && Je[xb](t, r, a, i, o);
  }
  n(i);
}, Ob = function(t, r, n, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (It(r) && !t.required)
      return n();
    Je.required(t, r, a, i, o), r !== void 0 && (Je.type(t, r, a, i, o), Je.range(t, r, a, i, o));
  }
  n(i);
}, Rb = function(t, r, n, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (It(r) && !t.required)
      return n();
    Je.required(t, r, a, i, o), r !== void 0 && (Je.type(t, r, a, i, o), Je.range(t, r, a, i, o));
  }
  n(i);
}, _b = function(t, r, n, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (It(r) && !t.required)
      return n();
    Je.required(t, r, a, i, o), r !== void 0 && Je.type(t, r, a, i, o);
  }
  n(i);
}, Pb = function(t, r, n, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (r === "" && (r = void 0), It(r) && !t.required)
      return n();
    Je.required(t, r, a, i, o), r !== void 0 && (Je.type(t, r, a, i, o), Je.range(t, r, a, i, o));
  }
  n(i);
}, Tb = function(t, r, n, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (It(r) && !t.required)
      return n();
    Je.required(t, r, a, i, o), r !== void 0 && Je.type(t, r, a, i, o);
  }
  n(i);
}, Nb = function(t, r, n, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (It(r, "string") && !t.required)
      return n();
    Je.required(t, r, a, i, o), It(r, "string") || Je.pattern(t, r, a, i, o);
  }
  n(i);
}, Ib = function(t, r, n, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (It(r) && !t.required)
      return n();
    Je.required(t, r, a, i, o), It(r) || Je.type(t, r, a, i, o);
  }
  n(i);
}, Mb = function(t, r, n, a, o) {
  var i = [], s = Array.isArray(r) ? "array" : ze(r);
  Je.required(t, r, a, i, o, s), n(i);
}, Ab = function(t, r, n, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (It(r, "string") && !t.required)
      return n();
    Je.required(t, r, a, i, o, "string"), It(r, "string") || (Je.type(t, r, a, i, o), Je.range(t, r, a, i, o), Je.pattern(t, r, a, i, o), t.whitespace === !0 && Je.whitespace(t, r, a, i, o));
  }
  n(i);
}, bi = function(t, r, n, a, o) {
  var i = t.type, s = [], l = t.required || !t.required && a.hasOwnProperty(t.field);
  if (l) {
    if (It(r, i) && !t.required)
      return n();
    Je.required(t, r, a, s, o, i), It(r, i) || Je.type(t, r, a, s, o);
  }
  n(s);
};
const ma = {
  string: Ab,
  method: _b,
  number: Pb,
  boolean: Eb,
  regexp: Ib,
  integer: Rb,
  float: Ob,
  array: Cb,
  object: Tb,
  enum: $b,
  pattern: Nb,
  date: wb,
  url: bi,
  hex: bi,
  email: bi,
  required: Mb,
  any: Sb
};
var ja = /* @__PURE__ */ function() {
  function e(t) {
    Dt(this, e), D(this, "rules", null), D(this, "_messages", ps), this.define(t);
  }
  return zt(e, [{
    key: "define",
    value: function(r) {
      var n = this;
      if (!r)
        throw new Error("Cannot configure a schema with no rules");
      if (ze(r) !== "object" || Array.isArray(r))
        throw new Error("Rules must be an object");
      this.rules = {}, Object.keys(r).forEach(function(a) {
        var o = r[a];
        n.rules[a] = Array.isArray(o) ? o : [o];
      });
    }
  }, {
    key: "messages",
    value: function(r) {
      return r && (this._messages = xc(ms(), r)), this._messages;
    }
  }, {
    key: "validate",
    value: function(r) {
      var n = this, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function() {
      }, i = r, s = a, l = o;
      if (typeof s == "function" && (l = s, s = {}), !this.rules || Object.keys(this.rules).length === 0)
        return l && l(null, i), Promise.resolve(i);
      function c(h) {
        var p = [], g = {};
        function S(y) {
          if (Array.isArray(y)) {
            var w;
            p = (w = p).concat.apply(w, Ee(y));
          } else
            p.push(y);
        }
        for (var b = 0; b < h.length; b++)
          S(h[b]);
        p.length ? (g = bs(p), l(p, g)) : l(null, i);
      }
      if (s.messages) {
        var d = this.messages();
        d === ps && (d = ms()), xc(d, s.messages), s.messages = d;
      } else
        s.messages = this.messages();
      var f = {}, v = s.keys || Object.keys(this.rules);
      v.forEach(function(h) {
        var p = n.rules[h], g = i[h];
        p.forEach(function(S) {
          var b = S;
          typeof b.transform == "function" && (i === r && (i = V({}, i)), g = i[h] = b.transform(g), g != null && (b.type = b.type || (Array.isArray(g) ? "array" : ze(g)))), typeof b == "function" ? b = {
            validator: b
          } : b = V({}, b), b.validator = n.getValidationMethod(b), b.validator && (b.field = h, b.fullField = b.fullField || h, b.type = n.getType(b), f[h] = f[h] || [], f[h].push({
            rule: b,
            value: g,
            source: i,
            field: h
          }));
        });
      });
      var m = {};
      return db(f, s, function(h, p) {
        var g = h.rule, S = (g.type === "object" || g.type === "array") && (ze(g.fields) === "object" || ze(g.defaultField) === "object");
        S = S && (g.required || !g.required && h.value), g.field = h.field;
        function b(_, $) {
          return V(V({}, $), {}, {
            fullField: "".concat(g.fullField, ".").concat(_),
            fullFields: g.fullFields ? [].concat(Ee(g.fullFields), [_]) : [_]
          });
        }
        function y() {
          var _ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], $ = Array.isArray(_) ? _ : [_];
          !s.suppressWarning && $.length && e.warning("async-validator:", $), $.length && g.message !== void 0 && ($ = [].concat(g.message));
          var R = $.map(wc(g, i));
          if (s.first && R.length)
            return m[g.field] = 1, p(R);
          if (!S)
            p(R);
          else {
            if (g.required && !h.value)
              return g.message !== void 0 ? R = [].concat(g.message).map(wc(g, i)) : s.error && (R = [s.error(g, nr(s.messages.required, g.field))]), p(R);
            var A = {};
            g.defaultField && Object.keys(h.value).map(function(I) {
              A[I] = g.defaultField;
            }), A = V(V({}, A), h.rule.fields);
            var F = {};
            Object.keys(A).forEach(function(I) {
              var T = A[I], B = Array.isArray(T) ? T : [T];
              F[I] = B.map(b.bind(null, I));
            });
            var j = new e(F);
            j.messages(s.messages), h.rule.options && (h.rule.options.messages = s.messages, h.rule.options.error = s.error), j.validate(h.value, h.rule.options || s, function(I) {
              var T = [];
              R && R.length && T.push.apply(T, Ee(R)), I && I.length && T.push.apply(T, Ee(I)), p(T.length ? T : null);
            });
          }
        }
        var w;
        if (g.asyncValidator)
          w = g.asyncValidator(g, h.value, y, h.source, s);
        else if (g.validator) {
          try {
            w = g.validator(g, h.value, y, h.source, s);
          } catch (_) {
            var C, O;
            (C = (O = console).error) === null || C === void 0 || C.call(O, _), s.suppressValidatorError || setTimeout(function() {
              throw _;
            }, 0), y(_.message);
          }
          w === !0 ? y() : w === !1 ? y(typeof g.message == "function" ? g.message(g.fullField || g.field) : g.message || "".concat(g.fullField || g.field, " fails")) : w instanceof Array ? y(w) : w instanceof Error && y(w.message);
        }
        w && w.then && w.then(function() {
          return y();
        }, function(_) {
          return y(_);
        });
      }, function(h) {
        c(h);
      }, i);
    }
  }, {
    key: "getType",
    value: function(r) {
      if (r.type === void 0 && r.pattern instanceof RegExp && (r.type = "pattern"), typeof r.validator != "function" && r.type && !ma.hasOwnProperty(r.type))
        throw new Error(nr("Unknown rule type %s", r.type));
      return r.type || "string";
    }
  }, {
    key: "getValidationMethod",
    value: function(r) {
      if (typeof r.validator == "function")
        return r.validator;
      var n = Object.keys(r), a = n.indexOf("message");
      return a !== -1 && n.splice(a, 1), n.length === 1 && n[0] === "required" ? ma.required : ma[this.getType(r)] || void 0;
    }
  }]), e;
}();
D(ja, "register", function(t, r) {
  if (typeof r != "function")
    throw new Error("Cannot register a validator by type, validator is not a function");
  ma[t] = r;
});
D(ja, "warning", gf);
D(ja, "messages", ps);
D(ja, "validators", ma);
var er = "'${name}' is not a valid ${type}", pf = {
  default: "Validation error on field '${name}'",
  required: "'${name}' is required",
  enum: "'${name}' must be one of [${enum}]",
  whitespace: "'${name}' cannot be empty",
  date: {
    format: "'${name}' is invalid for format date",
    parse: "'${name}' could not be parsed as date",
    invalid: "'${name}' is invalid date"
  },
  types: {
    string: er,
    method: er,
    array: er,
    object: er,
    number: er,
    date: er,
    boolean: er,
    integer: er,
    float: er,
    regexp: er,
    email: er,
    url: er,
    hex: er
  },
  string: {
    len: "'${name}' must be exactly ${len} characters",
    min: "'${name}' must be at least ${min} characters",
    max: "'${name}' cannot be longer than ${max} characters",
    range: "'${name}' must be between ${min} and ${max} characters"
  },
  number: {
    len: "'${name}' must equal ${len}",
    min: "'${name}' cannot be less than ${min}",
    max: "'${name}' cannot be greater than ${max}",
    range: "'${name}' must be between ${min} and ${max}"
  },
  array: {
    len: "'${name}' must be exactly ${len} in length",
    min: "'${name}' cannot be less than ${min} in length",
    max: "'${name}' cannot be greater than ${max} in length",
    range: "'${name}' must be between ${min} and ${max} in length"
  },
  pattern: {
    mismatch: "'${name}' does not match pattern ${pattern}"
  }
}, Oc = ja;
function Lb(e, t) {
  return e.replace(/\$\{\w+\}/g, function(r) {
    var n = r.slice(2, -1);
    return t[n];
  });
}
var Rc = "CODE_LOGIC_ERROR";
function ys(e, t, r, n, a) {
  return Ss.apply(this, arguments);
}
function Ss() {
  return Ss = mn(/* @__PURE__ */ Yt().mark(function e(t, r, n, a, o) {
    var i, s, l, c, d, f, v, m, h;
    return Yt().wrap(function(g) {
      for (; ; ) switch (g.prev = g.next) {
        case 0:
          return i = V({}, n), delete i.ruleIndex, Oc.warning = function() {
          }, i.validator && (s = i.validator, i.validator = function() {
            try {
              return s.apply(void 0, arguments);
            } catch (S) {
              return console.error(S), Promise.reject(Rc);
            }
          }), l = null, i && i.type === "array" && i.defaultField && (l = i.defaultField, delete i.defaultField), c = new Oc(D({}, t, [i])), d = Tn(pf, a.validateMessages), c.messages(d), f = [], g.prev = 10, g.next = 13, Promise.resolve(c.validate(D({}, t, r), V({}, a)));
        case 13:
          g.next = 18;
          break;
        case 15:
          g.prev = 15, g.t0 = g.catch(10), g.t0.errors && (f = g.t0.errors.map(function(S, b) {
            var y = S.message, w = y === Rc ? d.default : y;
            return /* @__PURE__ */ u.isValidElement(w) ? (
              // Wrap ReactNode with `key`
              /* @__PURE__ */ u.cloneElement(w, {
                key: "error_".concat(b)
              })
            ) : w;
          }));
        case 18:
          if (!(!f.length && l)) {
            g.next = 23;
            break;
          }
          return g.next = 21, Promise.all(r.map(function(S, b) {
            return ys("".concat(t, ".").concat(b), S, l, a, o);
          }));
        case 21:
          return v = g.sent, g.abrupt("return", v.reduce(function(S, b) {
            return [].concat(Ee(S), Ee(b));
          }, []));
        case 23:
          return m = V(V({}, n), {}, {
            name: t,
            enum: (n.enum || []).join(", ")
          }, o), h = f.map(function(S) {
            return typeof S == "string" ? Lb(S, m) : S;
          }), g.abrupt("return", h);
        case 26:
        case "end":
          return g.stop();
      }
    }, e, null, [[10, 15]]);
  })), Ss.apply(this, arguments);
}
function jb(e, t, r, n, a, o) {
  var i = e.join("."), s = r.map(function(d, f) {
    var v = d.validator, m = V(V({}, d), {}, {
      ruleIndex: f
    });
    return v && (m.validator = function(h, p, g) {
      var S = !1, b = function() {
        for (var C = arguments.length, O = new Array(C), _ = 0; _ < C; _++)
          O[_] = arguments[_];
        Promise.resolve().then(function() {
          ot(!S, "Your validator function has already return a promise. `callback` will be ignored."), S || g.apply(void 0, O);
        });
      }, y = v(h, p, b);
      S = y && typeof y.then == "function" && typeof y.catch == "function", ot(S, "`callback` is deprecated. Please return a promise instead."), S && y.then(function() {
        g();
      }).catch(function(w) {
        g(w || " ");
      });
    }), m;
  }).sort(function(d, f) {
    var v = d.warningOnly, m = d.ruleIndex, h = f.warningOnly, p = f.ruleIndex;
    return !!v == !!h ? m - p : v ? 1 : -1;
  }), l;
  if (a === !0)
    l = new Promise(/* @__PURE__ */ function() {
      var d = mn(/* @__PURE__ */ Yt().mark(function f(v, m) {
        var h, p, g;
        return Yt().wrap(function(b) {
          for (; ; ) switch (b.prev = b.next) {
            case 0:
              h = 0;
            case 1:
              if (!(h < s.length)) {
                b.next = 12;
                break;
              }
              return p = s[h], b.next = 5, ys(i, t, p, n, o);
            case 5:
              if (g = b.sent, !g.length) {
                b.next = 9;
                break;
              }
              return m([{
                errors: g,
                rule: p
              }]), b.abrupt("return");
            case 9:
              h += 1, b.next = 1;
              break;
            case 12:
              v([]);
            case 13:
            case "end":
              return b.stop();
          }
        }, f);
      }));
      return function(f, v) {
        return d.apply(this, arguments);
      };
    }());
  else {
    var c = s.map(function(d) {
      return ys(i, t, d, n, o).then(function(f) {
        return {
          errors: f,
          rule: d
        };
      });
    });
    l = (a ? Db(c) : Fb(c)).then(function(d) {
      return Promise.reject(d);
    });
  }
  return l.catch(function(d) {
    return d;
  }), l;
}
function Fb(e) {
  return Cs.apply(this, arguments);
}
function Cs() {
  return Cs = mn(/* @__PURE__ */ Yt().mark(function e(t) {
    return Yt().wrap(function(n) {
      for (; ; ) switch (n.prev = n.next) {
        case 0:
          return n.abrupt("return", Promise.all(t).then(function(a) {
            var o, i = (o = []).concat.apply(o, Ee(a));
            return i;
          }));
        case 1:
        case "end":
          return n.stop();
      }
    }, e);
  })), Cs.apply(this, arguments);
}
function Db(e) {
  return Es.apply(this, arguments);
}
function Es() {
  return Es = mn(/* @__PURE__ */ Yt().mark(function e(t) {
    var r;
    return Yt().wrap(function(a) {
      for (; ; ) switch (a.prev = a.next) {
        case 0:
          return r = 0, a.abrupt("return", new Promise(function(o) {
            t.forEach(function(i) {
              i.then(function(s) {
                s.errors.length && o([s]), r += 1, r === t.length && o([]);
              });
            });
          }));
        case 2:
        case "end":
          return a.stop();
      }
    }, e);
  })), Es.apply(this, arguments);
}
function Ot(e) {
  return gs(e);
}
function _c(e, t) {
  var r = {};
  return t.forEach(function(n) {
    var a = Or(e, n);
    r = mr(r, n, a);
  }), r;
}
function Mn(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  return e && e.some(function(n) {
    return hf(t, n, r);
  });
}
function hf(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  return !e || !t || !r && e.length !== t.length ? !1 : t.every(function(n, a) {
    return e[a] === n;
  });
}
function zb(e, t) {
  if (e === t)
    return !0;
  if (!e && t || e && !t || !e || !t || ze(e) !== "object" || ze(t) !== "object")
    return !1;
  var r = Object.keys(e), n = Object.keys(t), a = new Set([].concat(r, n));
  return Ee(a).every(function(o) {
    var i = e[o], s = t[o];
    return typeof i == "function" && typeof s == "function" ? !0 : i === s;
  });
}
function Vb(e) {
  var t = arguments.length <= 1 ? void 0 : arguments[1];
  return t && t.target && ze(t.target) === "object" && e in t.target ? t.target[e] : t;
}
function Pc(e, t, r) {
  var n = e.length;
  if (t < 0 || t >= n || r < 0 || r >= n)
    return e;
  var a = e[t], o = t - r;
  return o > 0 ? [].concat(Ee(e.slice(0, r)), [a], Ee(e.slice(r, t)), Ee(e.slice(t + 1, n))) : o < 0 ? [].concat(Ee(e.slice(0, t)), Ee(e.slice(t + 1, r + 1)), [a], Ee(e.slice(r + 1, n))) : e;
}
var kb = ["name"], ir = [];
function Tc(e, t, r, n, a, o) {
  return typeof e == "function" ? e(t, r, "source" in o ? {
    source: o.source
  } : {}) : n !== a;
}
var al = /* @__PURE__ */ function(e) {
  Qr(r, e);
  var t = Jr(r);
  function r(n) {
    var a;
    if (Dt(this, r), a = t.call(this, n), D(Ze(a), "state", {
      resetCount: 0
    }), D(Ze(a), "cancelRegisterFunc", null), D(Ze(a), "mounted", !1), D(Ze(a), "touched", !1), D(Ze(a), "dirty", !1), D(Ze(a), "validatePromise", void 0), D(Ze(a), "prevValidating", void 0), D(Ze(a), "errors", ir), D(Ze(a), "warnings", ir), D(Ze(a), "cancelRegister", function() {
      var l = a.props, c = l.preserve, d = l.isListField, f = l.name;
      a.cancelRegisterFunc && a.cancelRegisterFunc(d, c, Ot(f)), a.cancelRegisterFunc = null;
    }), D(Ze(a), "getNamePath", function() {
      var l = a.props, c = l.name, d = l.fieldContext, f = d.prefixName, v = f === void 0 ? [] : f;
      return c !== void 0 ? [].concat(Ee(v), Ee(c)) : [];
    }), D(Ze(a), "getRules", function() {
      var l = a.props, c = l.rules, d = c === void 0 ? [] : c, f = l.fieldContext;
      return d.map(function(v) {
        return typeof v == "function" ? v(f) : v;
      });
    }), D(Ze(a), "refresh", function() {
      a.mounted && a.setState(function(l) {
        var c = l.resetCount;
        return {
          resetCount: c + 1
        };
      });
    }), D(Ze(a), "metaCache", null), D(Ze(a), "triggerMetaEvent", function(l) {
      var c = a.props.onMetaChange;
      if (c) {
        var d = V(V({}, a.getMeta()), {}, {
          destroy: l
        });
        Ea(a.metaCache, d) || c(d), a.metaCache = d;
      } else
        a.metaCache = null;
    }), D(Ze(a), "onStoreChange", function(l, c, d) {
      var f = a.props, v = f.shouldUpdate, m = f.dependencies, h = m === void 0 ? [] : m, p = f.onReset, g = d.store, S = a.getNamePath(), b = a.getValue(l), y = a.getValue(g), w = c && Mn(c, S);
      switch (d.type === "valueUpdate" && d.source === "external" && !Ea(b, y) && (a.touched = !0, a.dirty = !0, a.validatePromise = null, a.errors = ir, a.warnings = ir, a.triggerMetaEvent()), d.type) {
        case "reset":
          if (!c || w) {
            a.touched = !1, a.dirty = !1, a.validatePromise = void 0, a.errors = ir, a.warnings = ir, a.triggerMetaEvent(), p == null || p(), a.refresh();
            return;
          }
          break;
        case "remove": {
          if (v) {
            a.reRender();
            return;
          }
          break;
        }
        case "setField": {
          var C = d.data;
          if (w) {
            "touched" in C && (a.touched = C.touched), "validating" in C && !("originRCField" in C) && (a.validatePromise = C.validating ? Promise.resolve([]) : null), "errors" in C && (a.errors = C.errors || ir), "warnings" in C && (a.warnings = C.warnings || ir), a.dirty = !0, a.triggerMetaEvent(), a.reRender();
            return;
          } else if ("value" in C && Mn(c, S, !0)) {
            a.reRender();
            return;
          }
          if (v && !S.length && Tc(v, l, g, b, y, d)) {
            a.reRender();
            return;
          }
          break;
        }
        case "dependenciesUpdate": {
          var O = h.map(Ot);
          if (O.some(function(_) {
            return Mn(d.relatedFields, _);
          })) {
            a.reRender();
            return;
          }
          break;
        }
        default:
          if (w || (!h.length || S.length || v) && Tc(v, l, g, b, y, d)) {
            a.reRender();
            return;
          }
          break;
      }
      v === !0 && a.reRender();
    }), D(Ze(a), "validateRules", function(l) {
      var c = a.getNamePath(), d = a.getValue(), f = l || {}, v = f.triggerName, m = f.validateOnly, h = m === void 0 ? !1 : m, p = Promise.resolve().then(/* @__PURE__ */ mn(/* @__PURE__ */ Yt().mark(function g() {
        var S, b, y, w, C, O, _;
        return Yt().wrap(function(R) {
          for (; ; ) switch (R.prev = R.next) {
            case 0:
              if (a.mounted) {
                R.next = 2;
                break;
              }
              return R.abrupt("return", []);
            case 2:
              if (S = a.props, b = S.validateFirst, y = b === void 0 ? !1 : b, w = S.messageVariables, C = S.validateDebounce, O = a.getRules(), v && (O = O.filter(function(A) {
                return A;
              }).filter(function(A) {
                var F = A.validateTrigger;
                if (!F)
                  return !0;
                var j = gs(F);
                return j.includes(v);
              })), !(C && v)) {
                R.next = 10;
                break;
              }
              return R.next = 8, new Promise(function(A) {
                setTimeout(A, C);
              });
            case 8:
              if (a.validatePromise === p) {
                R.next = 10;
                break;
              }
              return R.abrupt("return", []);
            case 10:
              return _ = jb(c, d, O, l, y, w), _.catch(function(A) {
                return A;
              }).then(function() {
                var A = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ir;
                if (a.validatePromise === p) {
                  var F;
                  a.validatePromise = null;
                  var j = [], I = [];
                  (F = A.forEach) === null || F === void 0 || F.call(A, function(T) {
                    var B = T.rule.warningOnly, N = T.errors, x = N === void 0 ? ir : N;
                    B ? I.push.apply(I, Ee(x)) : j.push.apply(j, Ee(x));
                  }), a.errors = j, a.warnings = I, a.triggerMetaEvent(), a.reRender();
                }
              }), R.abrupt("return", _);
            case 13:
            case "end":
              return R.stop();
          }
        }, g);
      })));
      return h || (a.validatePromise = p, a.dirty = !0, a.errors = ir, a.warnings = ir, a.triggerMetaEvent(), a.reRender()), p;
    }), D(Ze(a), "isFieldValidating", function() {
      return !!a.validatePromise;
    }), D(Ze(a), "isFieldTouched", function() {
      return a.touched;
    }), D(Ze(a), "isFieldDirty", function() {
      if (a.dirty || a.props.initialValue !== void 0)
        return !0;
      var l = a.props.fieldContext, c = l.getInternalHooks(ln), d = c.getInitialValue;
      return d(a.getNamePath()) !== void 0;
    }), D(Ze(a), "getErrors", function() {
      return a.errors;
    }), D(Ze(a), "getWarnings", function() {
      return a.warnings;
    }), D(Ze(a), "isListField", function() {
      return a.props.isListField;
    }), D(Ze(a), "isList", function() {
      return a.props.isList;
    }), D(Ze(a), "isPreserve", function() {
      return a.props.preserve;
    }), D(Ze(a), "getMeta", function() {
      a.prevValidating = a.isFieldValidating();
      var l = {
        touched: a.isFieldTouched(),
        validating: a.prevValidating,
        errors: a.errors,
        warnings: a.warnings,
        name: a.getNamePath(),
        validated: a.validatePromise === null
      };
      return l;
    }), D(Ze(a), "getOnlyChild", function(l) {
      if (typeof l == "function") {
        var c = a.getMeta();
        return V(V({}, a.getOnlyChild(l(a.getControlled(), c, a.props.fieldContext))), {}, {
          isFunction: !0
        });
      }
      var d = Zr(l);
      return d.length !== 1 || !/* @__PURE__ */ u.isValidElement(d[0]) ? {
        child: d,
        isFunction: !1
      } : {
        child: d[0],
        isFunction: !1
      };
    }), D(Ze(a), "getValue", function(l) {
      var c = a.props.fieldContext.getFieldsValue, d = a.getNamePath();
      return Or(l || c(!0), d);
    }), D(Ze(a), "getControlled", function() {
      var l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, c = a.props, d = c.name, f = c.trigger, v = c.validateTrigger, m = c.getValueFromEvent, h = c.normalize, p = c.valuePropName, g = c.getValueProps, S = c.fieldContext, b = v !== void 0 ? v : S.validateTrigger, y = a.getNamePath(), w = S.getInternalHooks, C = S.getFieldsValue, O = w(ln), _ = O.dispatch, $ = a.getValue(), R = g || function(T) {
        return D({}, p, T);
      }, A = l[f], F = d !== void 0 ? R($) : {};
      process.env.NODE_ENV !== "production" && F && Object.keys(F).forEach(function(T) {
        ot(typeof F[T] != "function", "It's not recommended to generate dynamic function prop by `getValueProps`. Please pass it to child component directly (prop: ".concat(T, ")"));
      });
      var j = V(V({}, l), F);
      j[f] = function() {
        a.touched = !0, a.dirty = !0, a.triggerMetaEvent();
        for (var T, B = arguments.length, N = new Array(B), x = 0; x < B; x++)
          N[x] = arguments[x];
        m ? T = m.apply(void 0, N) : T = Vb.apply(void 0, [p].concat(N)), h && (T = h(T, $, C(!0))), _({
          type: "updateValue",
          namePath: y,
          value: T
        }), A && A.apply(void 0, N);
      };
      var I = gs(b || []);
      return I.forEach(function(T) {
        var B = j[T];
        j[T] = function() {
          B && B.apply(void 0, arguments);
          var N = a.props.rules;
          N && N.length && _({
            type: "validateField",
            namePath: y,
            triggerName: T
          });
        };
      }), j;
    }), n.fieldContext) {
      var o = n.fieldContext.getInternalHooks, i = o(ln), s = i.initEntityValue;
      s(Ze(a));
    }
    return a;
  }
  return zt(r, [{
    key: "componentDidMount",
    value: function() {
      var a = this.props, o = a.shouldUpdate, i = a.fieldContext;
      if (this.mounted = !0, i) {
        var s = i.getInternalHooks, l = s(ln), c = l.registerField;
        this.cancelRegisterFunc = c(this);
      }
      o === !0 && this.reRender();
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      this.cancelRegister(), this.triggerMetaEvent(!0), this.mounted = !1;
    }
  }, {
    key: "reRender",
    value: function() {
      this.mounted && this.forceUpdate();
    }
  }, {
    key: "render",
    value: function() {
      var a = this.state.resetCount, o = this.props.children, i = this.getOnlyChild(o), s = i.child, l = i.isFunction, c;
      return l ? c = s : /* @__PURE__ */ u.isValidElement(s) ? c = /* @__PURE__ */ u.cloneElement(s, this.getControlled(s.props)) : (ot(!s, "`children` of Field is not validate ReactElement."), c = s), /* @__PURE__ */ u.createElement(u.Fragment, {
        key: a
      }, c);
    }
  }]), r;
}(u.Component);
D(al, "contextType", Bn);
D(al, "defaultProps", {
  trigger: "onChange",
  valuePropName: "value"
});
function bf(e) {
  var t = e.name, r = et(e, kb), n = u.useContext(Bn), a = u.useContext(_o), o = t !== void 0 ? Ot(t) : void 0, i = "keep";
  return r.isListField || (i = "_".concat((o || []).join("_"))), process.env.NODE_ENV !== "production" && r.preserve === !1 && r.isListField && o.length <= 1 && ot(!1, "`preserve` should not apply on Form.List fields."), /* @__PURE__ */ u.createElement(al, Me({
    key: i,
    name: o,
    isListField: !!a
  }, r, {
    fieldContext: n
  }));
}
function Bb(e) {
  var t = e.name, r = e.initialValue, n = e.children, a = e.rules, o = e.validateTrigger, i = e.isListField, s = u.useContext(Bn), l = u.useContext(_o), c = u.useRef({
    keys: [],
    id: 0
  }), d = c.current, f = u.useMemo(function() {
    var p = Ot(s.prefixName) || [];
    return [].concat(Ee(p), Ee(Ot(t)));
  }, [s.prefixName, t]), v = u.useMemo(function() {
    return V(V({}, s), {}, {
      prefixName: f
    });
  }, [s, f]), m = u.useMemo(function() {
    return {
      getKey: function(g) {
        var S = f.length, b = g[S];
        return [d.keys[b], g.slice(S + 1)];
      }
    };
  }, [f]);
  if (typeof n != "function")
    return ot(!1, "Form.List only accepts function as children."), null;
  var h = function(g, S, b) {
    var y = b.source;
    return y === "internal" ? !1 : g !== S;
  };
  return /* @__PURE__ */ u.createElement(_o.Provider, {
    value: m
  }, /* @__PURE__ */ u.createElement(Bn.Provider, {
    value: v
  }, /* @__PURE__ */ u.createElement(bf, {
    name: [],
    shouldUpdate: h,
    rules: a,
    validateTrigger: o,
    initialValue: r,
    isList: !0,
    isListField: i ?? !!l
  }, function(p, g) {
    var S = p.value, b = S === void 0 ? [] : S, y = p.onChange, w = s.getFieldValue, C = function() {
      var R = w(f || []);
      return R || [];
    }, O = {
      add: function(R, A) {
        var F = C();
        A >= 0 && A <= F.length ? (d.keys = [].concat(Ee(d.keys.slice(0, A)), [d.id], Ee(d.keys.slice(A))), y([].concat(Ee(F.slice(0, A)), [R], Ee(F.slice(A))))) : (process.env.NODE_ENV !== "production" && (A < 0 || A > F.length) && ot(!1, "The second parameter of the add function should be a valid positive number."), d.keys = [].concat(Ee(d.keys), [d.id]), y([].concat(Ee(F), [R]))), d.id += 1;
      },
      remove: function(R) {
        var A = C(), F = new Set(Array.isArray(R) ? R : [R]);
        F.size <= 0 || (d.keys = d.keys.filter(function(j, I) {
          return !F.has(I);
        }), y(A.filter(function(j, I) {
          return !F.has(I);
        })));
      },
      move: function(R, A) {
        if (R !== A) {
          var F = C();
          R < 0 || R >= F.length || A < 0 || A >= F.length || (d.keys = Pc(d.keys, R, A), y(Pc(F, R, A)));
        }
      }
    }, _ = b || [];
    return Array.isArray(_) || (_ = [], process.env.NODE_ENV !== "production" && ot(!1, "Current value of '".concat(f.join(" > "), "' is not an array type."))), n(_.map(function($, R) {
      var A = d.keys[R];
      return A === void 0 && (d.keys[R] = d.id, A = d.keys[R], d.id += 1), {
        name: R,
        key: A,
        isListField: !0
      };
    }), O, g);
  })));
}
function Hb(e) {
  var t = !1, r = e.length, n = [];
  return e.length ? new Promise(function(a, o) {
    e.forEach(function(i, s) {
      i.catch(function(l) {
        return t = !0, l;
      }).then(function(l) {
        r -= 1, n[s] = l, !(r > 0) && (t && o(n), a(n));
      });
    });
  }) : Promise.resolve([]);
}
var yf = "__@field_split__";
function yi(e) {
  return e.map(function(t) {
    return "".concat(ze(t), ":").concat(t);
  }).join(yf);
}
var Cn = /* @__PURE__ */ function() {
  function e() {
    Dt(this, e), D(this, "kvs", /* @__PURE__ */ new Map());
  }
  return zt(e, [{
    key: "set",
    value: function(r, n) {
      this.kvs.set(yi(r), n);
    }
  }, {
    key: "get",
    value: function(r) {
      return this.kvs.get(yi(r));
    }
  }, {
    key: "update",
    value: function(r, n) {
      var a = this.get(r), o = n(a);
      o ? this.set(r, o) : this.delete(r);
    }
  }, {
    key: "delete",
    value: function(r) {
      this.kvs.delete(yi(r));
    }
    // Since we only use this in test, let simply realize this
  }, {
    key: "map",
    value: function(r) {
      return Ee(this.kvs.entries()).map(function(n) {
        var a = G(n, 2), o = a[0], i = a[1], s = o.split(yf);
        return r({
          key: s.map(function(l) {
            var c = l.match(/^([^:]*):(.*)$/), d = G(c, 3), f = d[1], v = d[2];
            return f === "number" ? Number(v) : v;
          }),
          value: i
        });
      });
    }
  }, {
    key: "toJSON",
    value: function() {
      var r = {};
      return this.map(function(n) {
        var a = n.key, o = n.value;
        return r[a.join(".")] = o, null;
      }), r;
    }
  }]), e;
}(), Wb = ["name"], Kb = /* @__PURE__ */ zt(function e(t) {
  var r = this;
  Dt(this, e), D(this, "formHooked", !1), D(this, "forceRootUpdate", void 0), D(this, "subscribable", !0), D(this, "store", {}), D(this, "fieldEntities", []), D(this, "initialValues", {}), D(this, "callbacks", {}), D(this, "validateMessages", null), D(this, "preserve", null), D(this, "lastValidatePromise", null), D(this, "getForm", function() {
    return {
      getFieldValue: r.getFieldValue,
      getFieldsValue: r.getFieldsValue,
      getFieldError: r.getFieldError,
      getFieldWarning: r.getFieldWarning,
      getFieldsError: r.getFieldsError,
      isFieldsTouched: r.isFieldsTouched,
      isFieldTouched: r.isFieldTouched,
      isFieldValidating: r.isFieldValidating,
      isFieldsValidating: r.isFieldsValidating,
      resetFields: r.resetFields,
      setFields: r.setFields,
      setFieldValue: r.setFieldValue,
      setFieldsValue: r.setFieldsValue,
      validateFields: r.validateFields,
      submit: r.submit,
      _init: !0,
      getInternalHooks: r.getInternalHooks
    };
  }), D(this, "getInternalHooks", function(n) {
    return n === ln ? (r.formHooked = !0, {
      dispatch: r.dispatch,
      initEntityValue: r.initEntityValue,
      registerField: r.registerField,
      useSubscribe: r.useSubscribe,
      setInitialValues: r.setInitialValues,
      destroyForm: r.destroyForm,
      setCallbacks: r.setCallbacks,
      setValidateMessages: r.setValidateMessages,
      getFields: r.getFields,
      setPreserve: r.setPreserve,
      getInitialValue: r.getInitialValue,
      registerWatch: r.registerWatch
    }) : (ot(!1, "`getInternalHooks` is internal usage. Should not call directly."), null);
  }), D(this, "useSubscribe", function(n) {
    r.subscribable = n;
  }), D(this, "prevWithoutPreserves", null), D(this, "setInitialValues", function(n, a) {
    if (r.initialValues = n || {}, a) {
      var o, i = Tn(n, r.store);
      (o = r.prevWithoutPreserves) === null || o === void 0 || o.map(function(s) {
        var l = s.key;
        i = mr(i, l, Or(n, l));
      }), r.prevWithoutPreserves = null, r.updateStore(i);
    }
  }), D(this, "destroyForm", function(n) {
    if (n)
      r.updateStore({});
    else {
      var a = new Cn();
      r.getFieldEntities(!0).forEach(function(o) {
        r.isMergedPreserve(o.isPreserve()) || a.set(o.getNamePath(), !0);
      }), r.prevWithoutPreserves = a;
    }
  }), D(this, "getInitialValue", function(n) {
    var a = Or(r.initialValues, n);
    return n.length ? Tn(a) : a;
  }), D(this, "setCallbacks", function(n) {
    r.callbacks = n;
  }), D(this, "setValidateMessages", function(n) {
    r.validateMessages = n;
  }), D(this, "setPreserve", function(n) {
    r.preserve = n;
  }), D(this, "watchList", []), D(this, "registerWatch", function(n) {
    return r.watchList.push(n), function() {
      r.watchList = r.watchList.filter(function(a) {
        return a !== n;
      });
    };
  }), D(this, "notifyWatch", function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    if (r.watchList.length) {
      var a = r.getFieldsValue(), o = r.getFieldsValue(!0);
      r.watchList.forEach(function(i) {
        i(a, o, n);
      });
    }
  }), D(this, "timeoutId", null), D(this, "warningUnhooked", function() {
    process.env.NODE_ENV !== "production" && !r.timeoutId && typeof window < "u" && (r.timeoutId = setTimeout(function() {
      r.timeoutId = null, r.formHooked || ot(!1, "Instance created by `useForm` is not connected to any Form element. Forget to pass `form` prop?");
    }));
  }), D(this, "updateStore", function(n) {
    r.store = n;
  }), D(this, "getFieldEntities", function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    return n ? r.fieldEntities.filter(function(a) {
      return a.getNamePath().length;
    }) : r.fieldEntities;
  }), D(this, "getFieldsMap", function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, a = new Cn();
    return r.getFieldEntities(n).forEach(function(o) {
      var i = o.getNamePath();
      a.set(i, o);
    }), a;
  }), D(this, "getFieldEntitiesForNamePathList", function(n) {
    if (!n)
      return r.getFieldEntities(!0);
    var a = r.getFieldsMap(!0);
    return n.map(function(o) {
      var i = Ot(o);
      return a.get(i) || {
        INVALIDATE_NAME_PATH: Ot(o)
      };
    });
  }), D(this, "getFieldsValue", function(n, a) {
    r.warningUnhooked();
    var o, i, s;
    if (n === !0 || Array.isArray(n) ? (o = n, i = a) : n && ze(n) === "object" && (s = n.strict, i = n.filter), o === !0 && !i)
      return r.store;
    var l = r.getFieldEntitiesForNamePathList(Array.isArray(o) ? o : null), c = [];
    return l.forEach(function(d) {
      var f, v, m = "INVALIDATE_NAME_PATH" in d ? d.INVALIDATE_NAME_PATH : d.getNamePath();
      if (s) {
        var h, p;
        if ((h = (p = d).isList) !== null && h !== void 0 && h.call(p))
          return;
      } else if (!o && (f = (v = d).isListField) !== null && f !== void 0 && f.call(v))
        return;
      if (!i)
        c.push(m);
      else {
        var g = "getMeta" in d ? d.getMeta() : null;
        i(g) && c.push(m);
      }
    }), _c(r.store, c.map(Ot));
  }), D(this, "getFieldValue", function(n) {
    r.warningUnhooked();
    var a = Ot(n);
    return Or(r.store, a);
  }), D(this, "getFieldsError", function(n) {
    r.warningUnhooked();
    var a = r.getFieldEntitiesForNamePathList(n);
    return a.map(function(o, i) {
      return o && !("INVALIDATE_NAME_PATH" in o) ? {
        name: o.getNamePath(),
        errors: o.getErrors(),
        warnings: o.getWarnings()
      } : {
        name: Ot(n[i]),
        errors: [],
        warnings: []
      };
    });
  }), D(this, "getFieldError", function(n) {
    r.warningUnhooked();
    var a = Ot(n), o = r.getFieldsError([a])[0];
    return o.errors;
  }), D(this, "getFieldWarning", function(n) {
    r.warningUnhooked();
    var a = Ot(n), o = r.getFieldsError([a])[0];
    return o.warnings;
  }), D(this, "isFieldsTouched", function() {
    r.warningUnhooked();
    for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++)
      a[o] = arguments[o];
    var i = a[0], s = a[1], l, c = !1;
    a.length === 0 ? l = null : a.length === 1 ? Array.isArray(i) ? (l = i.map(Ot), c = !1) : (l = null, c = i) : (l = i.map(Ot), c = s);
    var d = r.getFieldEntities(!0), f = function(g) {
      return g.isFieldTouched();
    };
    if (!l)
      return c ? d.every(function(p) {
        return f(p) || p.isList();
      }) : d.some(f);
    var v = new Cn();
    l.forEach(function(p) {
      v.set(p, []);
    }), d.forEach(function(p) {
      var g = p.getNamePath();
      l.forEach(function(S) {
        S.every(function(b, y) {
          return g[y] === b;
        }) && v.update(S, function(b) {
          return [].concat(Ee(b), [p]);
        });
      });
    });
    var m = function(g) {
      return g.some(f);
    }, h = v.map(function(p) {
      var g = p.value;
      return g;
    });
    return c ? h.every(m) : h.some(m);
  }), D(this, "isFieldTouched", function(n) {
    return r.warningUnhooked(), r.isFieldsTouched([n]);
  }), D(this, "isFieldsValidating", function(n) {
    r.warningUnhooked();
    var a = r.getFieldEntities();
    if (!n)
      return a.some(function(i) {
        return i.isFieldValidating();
      });
    var o = n.map(Ot);
    return a.some(function(i) {
      var s = i.getNamePath();
      return Mn(o, s) && i.isFieldValidating();
    });
  }), D(this, "isFieldValidating", function(n) {
    return r.warningUnhooked(), r.isFieldsValidating([n]);
  }), D(this, "resetWithFieldInitialValue", function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, a = new Cn(), o = r.getFieldEntities(!0);
    o.forEach(function(l) {
      var c = l.props.initialValue, d = l.getNamePath();
      if (c !== void 0) {
        var f = a.get(d) || /* @__PURE__ */ new Set();
        f.add({
          entity: l,
          value: c
        }), a.set(d, f);
      }
    });
    var i = function(c) {
      c.forEach(function(d) {
        var f = d.props.initialValue;
        if (f !== void 0) {
          var v = d.getNamePath(), m = r.getInitialValue(v);
          if (m !== void 0)
            ot(!1, "Form already set 'initialValues' with path '".concat(v.join("."), "'. Field can not overwrite it."));
          else {
            var h = a.get(v);
            if (h && h.size > 1)
              ot(!1, "Multiple Field with path '".concat(v.join("."), "' set 'initialValue'. Can not decide which one to pick."));
            else if (h) {
              var p = r.getFieldValue(v), g = d.isListField();
              !g && (!n.skipExist || p === void 0) && r.updateStore(mr(r.store, v, Ee(h)[0].value));
            }
          }
        }
      });
    }, s;
    n.entities ? s = n.entities : n.namePathList ? (s = [], n.namePathList.forEach(function(l) {
      var c = a.get(l);
      if (c) {
        var d;
        (d = s).push.apply(d, Ee(Ee(c).map(function(f) {
          return f.entity;
        })));
      }
    })) : s = o, i(s);
  }), D(this, "resetFields", function(n) {
    r.warningUnhooked();
    var a = r.store;
    if (!n) {
      r.updateStore(Tn(r.initialValues)), r.resetWithFieldInitialValue(), r.notifyObservers(a, null, {
        type: "reset"
      }), r.notifyWatch();
      return;
    }
    var o = n.map(Ot);
    o.forEach(function(i) {
      var s = r.getInitialValue(i);
      r.updateStore(mr(r.store, i, s));
    }), r.resetWithFieldInitialValue({
      namePathList: o
    }), r.notifyObservers(a, o, {
      type: "reset"
    }), r.notifyWatch(o);
  }), D(this, "setFields", function(n) {
    r.warningUnhooked();
    var a = r.store, o = [];
    n.forEach(function(i) {
      var s = i.name, l = et(i, Wb), c = Ot(s);
      o.push(c), "value" in l && r.updateStore(mr(r.store, c, l.value)), r.notifyObservers(a, [c], {
        type: "setField",
        data: i
      });
    }), r.notifyWatch(o);
  }), D(this, "getFields", function() {
    var n = r.getFieldEntities(!0), a = n.map(function(o) {
      var i = o.getNamePath(), s = o.getMeta(), l = V(V({}, s), {}, {
        name: i,
        value: r.getFieldValue(i)
      });
      return Object.defineProperty(l, "originRCField", {
        value: !0
      }), l;
    });
    return a;
  }), D(this, "initEntityValue", function(n) {
    var a = n.props.initialValue;
    if (a !== void 0) {
      var o = n.getNamePath(), i = Or(r.store, o);
      i === void 0 && r.updateStore(mr(r.store, o, a));
    }
  }), D(this, "isMergedPreserve", function(n) {
    var a = n !== void 0 ? n : r.preserve;
    return a ?? !0;
  }), D(this, "registerField", function(n) {
    r.fieldEntities.push(n);
    var a = n.getNamePath();
    if (r.notifyWatch([a]), n.props.initialValue !== void 0) {
      var o = r.store;
      r.resetWithFieldInitialValue({
        entities: [n],
        skipExist: !0
      }), r.notifyObservers(o, [n.getNamePath()], {
        type: "valueUpdate",
        source: "internal"
      });
    }
    return function(i, s) {
      var l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
      if (r.fieldEntities = r.fieldEntities.filter(function(f) {
        return f !== n;
      }), !r.isMergedPreserve(s) && (!i || l.length > 1)) {
        var c = i ? void 0 : r.getInitialValue(a);
        if (a.length && r.getFieldValue(a) !== c && r.fieldEntities.every(function(f) {
          return (
            // Only reset when no namePath exist
            !hf(f.getNamePath(), a)
          );
        })) {
          var d = r.store;
          r.updateStore(mr(d, a, c, !0)), r.notifyObservers(d, [a], {
            type: "remove"
          }), r.triggerDependenciesUpdate(d, a);
        }
      }
      r.notifyWatch([a]);
    };
  }), D(this, "dispatch", function(n) {
    switch (n.type) {
      case "updateValue": {
        var a = n.namePath, o = n.value;
        r.updateValue(a, o);
        break;
      }
      case "validateField": {
        var i = n.namePath, s = n.triggerName;
        r.validateFields([i], {
          triggerName: s
        });
        break;
      }
    }
  }), D(this, "notifyObservers", function(n, a, o) {
    if (r.subscribable) {
      var i = V(V({}, o), {}, {
        store: r.getFieldsValue(!0)
      });
      r.getFieldEntities().forEach(function(s) {
        var l = s.onStoreChange;
        l(n, a, i);
      });
    } else
      r.forceRootUpdate();
  }), D(this, "triggerDependenciesUpdate", function(n, a) {
    var o = r.getDependencyChildrenFields(a);
    return o.length && r.validateFields(o), r.notifyObservers(n, o, {
      type: "dependenciesUpdate",
      relatedFields: [a].concat(Ee(o))
    }), o;
  }), D(this, "updateValue", function(n, a) {
    var o = Ot(n), i = r.store;
    r.updateStore(mr(r.store, o, a)), r.notifyObservers(i, [o], {
      type: "valueUpdate",
      source: "internal"
    }), r.notifyWatch([o]);
    var s = r.triggerDependenciesUpdate(i, o), l = r.callbacks.onValuesChange;
    if (l) {
      var c = _c(r.store, [o]);
      l(c, r.getFieldsValue());
    }
    r.triggerOnFieldsChange([o].concat(Ee(s)));
  }), D(this, "setFieldsValue", function(n) {
    r.warningUnhooked();
    var a = r.store;
    if (n) {
      var o = Tn(r.store, n);
      r.updateStore(o);
    }
    r.notifyObservers(a, null, {
      type: "valueUpdate",
      source: "external"
    }), r.notifyWatch();
  }), D(this, "setFieldValue", function(n, a) {
    r.setFields([{
      name: n,
      value: a
    }]);
  }), D(this, "getDependencyChildrenFields", function(n) {
    var a = /* @__PURE__ */ new Set(), o = [], i = new Cn();
    r.getFieldEntities().forEach(function(l) {
      var c = l.props.dependencies;
      (c || []).forEach(function(d) {
        var f = Ot(d);
        i.update(f, function() {
          var v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : /* @__PURE__ */ new Set();
          return v.add(l), v;
        });
      });
    });
    var s = function l(c) {
      var d = i.get(c) || /* @__PURE__ */ new Set();
      d.forEach(function(f) {
        if (!a.has(f)) {
          a.add(f);
          var v = f.getNamePath();
          f.isFieldDirty() && v.length && (o.push(v), l(v));
        }
      });
    };
    return s(n), o;
  }), D(this, "triggerOnFieldsChange", function(n, a) {
    var o = r.callbacks.onFieldsChange;
    if (o) {
      var i = r.getFields();
      if (a) {
        var s = new Cn();
        a.forEach(function(c) {
          var d = c.name, f = c.errors;
          s.set(d, f);
        }), i.forEach(function(c) {
          c.errors = s.get(c.name) || c.errors;
        });
      }
      var l = i.filter(function(c) {
        var d = c.name;
        return Mn(n, d);
      });
      l.length && o(l, i);
    }
  }), D(this, "validateFields", function(n, a) {
    r.warningUnhooked();
    var o, i;
    Array.isArray(n) || typeof n == "string" || typeof a == "string" ? (o = n, i = a) : i = n;
    var s = !!o, l = s ? o.map(Ot) : [], c = [], d = String(Date.now()), f = /* @__PURE__ */ new Set(), v = i || {}, m = v.recursive, h = v.dirty;
    r.getFieldEntities(!0).forEach(function(b) {
      if (s || l.push(b.getNamePath()), !(!b.props.rules || !b.props.rules.length) && !(h && !b.isFieldDirty())) {
        var y = b.getNamePath();
        if (f.add(y.join(d)), !s || Mn(l, y, m)) {
          var w = b.validateRules(V({
            validateMessages: V(V({}, pf), r.validateMessages)
          }, i));
          c.push(w.then(function() {
            return {
              name: y,
              errors: [],
              warnings: []
            };
          }).catch(function(C) {
            var O, _ = [], $ = [];
            return (O = C.forEach) === null || O === void 0 || O.call(C, function(R) {
              var A = R.rule.warningOnly, F = R.errors;
              A ? $.push.apply($, Ee(F)) : _.push.apply(_, Ee(F));
            }), _.length ? Promise.reject({
              name: y,
              errors: _,
              warnings: $
            }) : {
              name: y,
              errors: _,
              warnings: $
            };
          }));
        }
      }
    });
    var p = Hb(c);
    r.lastValidatePromise = p, p.catch(function(b) {
      return b;
    }).then(function(b) {
      var y = b.map(function(w) {
        var C = w.name;
        return C;
      });
      r.notifyObservers(r.store, y, {
        type: "validateFinish"
      }), r.triggerOnFieldsChange(y, b);
    });
    var g = p.then(function() {
      return r.lastValidatePromise === p ? Promise.resolve(r.getFieldsValue(l)) : Promise.reject([]);
    }).catch(function(b) {
      var y = b.filter(function(w) {
        return w && w.errors.length;
      });
      return Promise.reject({
        values: r.getFieldsValue(l),
        errorFields: y,
        outOfDate: r.lastValidatePromise !== p
      });
    });
    g.catch(function(b) {
      return b;
    });
    var S = l.filter(function(b) {
      return f.has(b.join(d));
    });
    return r.triggerOnFieldsChange(S), g;
  }), D(this, "submit", function() {
    r.warningUnhooked(), r.validateFields().then(function(n) {
      var a = r.callbacks.onFinish;
      if (a)
        try {
          a(n);
        } catch (o) {
          console.error(o);
        }
    }).catch(function(n) {
      var a = r.callbacks.onFinishFailed;
      a && a(n);
    });
  }), this.forceRootUpdate = t;
});
function Sf(e) {
  var t = u.useRef(), r = u.useState({}), n = G(r, 2), a = n[1];
  if (!t.current)
    if (e)
      t.current = e;
    else {
      var o = function() {
        a({});
      }, i = new Kb(o);
      t.current = i.getForm();
    }
  return [t.current];
}
var ws = /* @__PURE__ */ u.createContext({
  triggerFormChange: function() {
  },
  triggerFormFinish: function() {
  },
  registerForm: function() {
  },
  unregisterForm: function() {
  }
}), Ub = function(t) {
  var r = t.validateMessages, n = t.onFormChange, a = t.onFormFinish, o = t.children, i = u.useContext(ws), s = u.useRef({});
  return /* @__PURE__ */ u.createElement(ws.Provider, {
    value: V(V({}, i), {}, {
      validateMessages: V(V({}, i.validateMessages), r),
      // =========================================================
      // =                  Global Form Control                  =
      // =========================================================
      triggerFormChange: function(c, d) {
        n && n(c, {
          changedFields: d,
          forms: s.current
        }), i.triggerFormChange(c, d);
      },
      triggerFormFinish: function(c, d) {
        a && a(c, {
          values: d,
          forms: s.current
        }), i.triggerFormFinish(c, d);
      },
      registerForm: function(c, d) {
        c && (s.current = V(V({}, s.current), {}, D({}, c, d))), i.registerForm(c, d);
      },
      unregisterForm: function(c) {
        var d = V({}, s.current);
        delete d[c], s.current = d, i.unregisterForm(c);
      }
    })
  }, o);
}, Gb = ["name", "initialValues", "fields", "form", "preserve", "children", "component", "validateMessages", "validateTrigger", "onValuesChange", "onFieldsChange", "onFinish", "onFinishFailed", "clearOnDestroy"], qb = function(t, r) {
  var n = t.name, a = t.initialValues, o = t.fields, i = t.form, s = t.preserve, l = t.children, c = t.component, d = c === void 0 ? "form" : c, f = t.validateMessages, v = t.validateTrigger, m = v === void 0 ? "onChange" : v, h = t.onValuesChange, p = t.onFieldsChange, g = t.onFinish, S = t.onFinishFailed, b = t.clearOnDestroy, y = et(t, Gb), w = u.useRef(null), C = u.useContext(ws), O = Sf(i), _ = G(O, 1), $ = _[0], R = $.getInternalHooks(ln), A = R.useSubscribe, F = R.setInitialValues, j = R.setCallbacks, I = R.setValidateMessages, T = R.setPreserve, B = R.destroyForm;
  u.useImperativeHandle(r, function() {
    return V(V({}, $), {}, {
      nativeElement: w.current
    });
  }), u.useEffect(function() {
    return C.registerForm(n, $), function() {
      C.unregisterForm(n);
    };
  }, [C, $, n]), I(V(V({}, C.validateMessages), f)), j({
    onValuesChange: h,
    onFieldsChange: function(U) {
      if (C.triggerFormChange(n, U), p) {
        for (var Q = arguments.length, q = new Array(Q > 1 ? Q - 1 : 0), J = 1; J < Q; J++)
          q[J - 1] = arguments[J];
        p.apply(void 0, [U].concat(q));
      }
    },
    onFinish: function(U) {
      C.triggerFormFinish(n, U), g && g(U);
    },
    onFinishFailed: S
  }), T(s);
  var N = u.useRef(null);
  F(a, !N.current), N.current || (N.current = !0), u.useEffect(
    function() {
      return function() {
        return B(b);
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  var x, E = typeof l == "function";
  if (E) {
    var L = $.getFieldsValue(!0);
    x = l(L, $);
  } else
    x = l;
  A(!E);
  var M = u.useRef();
  u.useEffect(function() {
    zb(M.current || [], o || []) || $.setFields(o || []), M.current = o;
  }, [o, $]);
  var z = u.useMemo(function() {
    return V(V({}, $), {}, {
      validateTrigger: m
    });
  }, [$, m]), H = /* @__PURE__ */ u.createElement(_o.Provider, {
    value: null
  }, /* @__PURE__ */ u.createElement(Bn.Provider, {
    value: z
  }, x));
  return d === !1 ? H : /* @__PURE__ */ u.createElement(d, Me({}, y, {
    ref: w,
    onSubmit: function(U) {
      U.preventDefault(), U.stopPropagation(), $.submit();
    },
    onReset: function(U) {
      var Q;
      U.preventDefault(), $.resetFields(), (Q = y.onReset) === null || Q === void 0 || Q.call(y, U);
    }
  }), H);
};
function Nc(e) {
  try {
    return JSON.stringify(e);
  } catch {
    return Math.random();
  }
}
var Xb = process.env.NODE_ENV !== "production" ? function(e) {
  var t = e.join("__RC_FIELD_FORM_SPLIT__"), r = ke(t);
  ot(r.current === t, "`useWatch` is not support dynamic `namePath`. Please provide static instead.");
} : function() {
};
function Yb() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n = t[0], a = t[1], o = a === void 0 ? {} : a, i = ab(o) ? {
    form: o
  } : o, s = i.form, l = pt(), c = G(l, 2), d = c[0], f = c[1], v = Yr(function() {
    return Nc(d);
  }, [d]), m = ke(v);
  m.current = v;
  var h = Lt(Bn), p = s || h, g = p && p._init;
  process.env.NODE_ENV !== "production" && ot(t.length === 2 ? s ? g : !0 : g, "useWatch requires a form instance since it can not auto detect from context.");
  var S = Ot(n), b = ke(S);
  return b.current = S, Xb(S), ht(
    function() {
      if (g) {
        var y = p.getFieldsValue, w = p.getInternalHooks, C = w(ln), O = C.registerWatch, _ = function(F, j) {
          var I = i.preserve ? j : F;
          return typeof n == "function" ? n(I) : Or(I, b.current);
        }, $ = O(function(A, F) {
          var j = _(A, F), I = Nc(j);
          m.current !== I && (m.current = I, f(j));
        }), R = _(y(), y(!0));
        return d !== R && f(R), $;
      }
    },
    // We do not need re-register since namePath content is the same
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [g]
  ), d;
}
var Zb = /* @__PURE__ */ u.forwardRef(qb), Fa = Zb;
Fa.FormProvider = Ub;
Fa.Field = bf;
Fa.List = Bb;
Fa.useForm = Sf;
Fa.useWatch = Yb;
const Pa = /* @__PURE__ */ u.createContext({});
process.env.NODE_ENV !== "production" && (Pa.displayName = "FormItemInputContext");
const Qb = (e) => {
  let {
    children: t,
    status: r,
    override: n
  } = e;
  const a = Lt(Pa), o = Yr(() => {
    const i = Object.assign({}, a);
    return n && delete i.isFormItemInput, r && (delete i.status, delete i.hasFeedback, delete i.feedbackIcon), i;
  }, [r, n, a]);
  return /* @__PURE__ */ u.createElement(Pa.Provider, {
    value: o
  }, t);
}, Jb = /* @__PURE__ */ dn(void 0), xs = (e) => {
  const {
    space: t,
    form: r,
    children: n
  } = e;
  if (n == null)
    return null;
  let a = n;
  return r && (a = /* @__PURE__ */ Y.createElement(Qb, {
    override: !0,
    status: !0
  }, a)), t && (a = /* @__PURE__ */ Y.createElement(h0, null, a)), a;
};
var Cf = function(t) {
  if (Xt() && window.document.documentElement) {
    var r = Array.isArray(t) ? t : [t], n = window.document.documentElement;
    return r.some(function(a) {
      return a in n.style;
    });
  }
  return !1;
}, ey = function(t, r) {
  if (!Cf(t))
    return !1;
  var n = document.createElement("div"), a = n.style[t];
  return n.style[t] = r, n.style[t] !== a;
};
function Ic(e, t) {
  return !Array.isArray(e) && t !== void 0 ? ey(e, t) : Cf(e);
}
const Wo = (e) => {
  const {
    prefixCls: t,
    className: r,
    style: n,
    size: a,
    shape: o
  } = e, i = ee({
    [`${t}-lg`]: a === "large",
    [`${t}-sm`]: a === "small"
  }), s = ee({
    [`${t}-circle`]: o === "circle",
    [`${t}-square`]: o === "square",
    [`${t}-round`]: o === "round"
  }), l = u.useMemo(() => typeof a == "number" ? {
    width: a,
    height: a,
    lineHeight: `${a}px`
  } : {}, [a]);
  return /* @__PURE__ */ u.createElement("span", {
    className: ee(t, i, s, r),
    style: Object.assign(Object.assign({}, l), n)
  });
}, ty = new Rt("ant-skeleton-loading", {
  "0%": {
    backgroundPosition: "100% 50%"
  },
  "100%": {
    backgroundPosition: "0 50%"
  }
}), Ko = (e) => ({
  height: e,
  lineHeight: te(e)
}), An = (e) => Object.assign({
  width: e
}, Ko(e)), ry = (e) => ({
  background: e.skeletonLoadingBackground,
  backgroundSize: "400% 100%",
  animationName: ty,
  animationDuration: e.skeletonLoadingMotionDuration,
  animationTimingFunction: "ease",
  animationIterationCount: "infinite"
}), Si = (e, t) => Object.assign({
  width: t(e).mul(5).equal(),
  minWidth: t(e).mul(5).equal()
}, Ko(e)), ny = (e) => {
  const {
    skeletonAvatarCls: t,
    gradientFromColor: r,
    controlHeight: n,
    controlHeightLG: a,
    controlHeightSM: o
  } = e;
  return {
    [`${t}`]: Object.assign({
      display: "inline-block",
      verticalAlign: "top",
      background: r
    }, An(n)),
    [`${t}${t}-circle`]: {
      borderRadius: "50%"
    },
    [`${t}${t}-lg`]: Object.assign({}, An(a)),
    [`${t}${t}-sm`]: Object.assign({}, An(o))
  };
}, ay = (e) => {
  const {
    controlHeight: t,
    borderRadiusSM: r,
    skeletonInputCls: n,
    controlHeightLG: a,
    controlHeightSM: o,
    gradientFromColor: i,
    calc: s
  } = e;
  return {
    [`${n}`]: Object.assign({
      display: "inline-block",
      verticalAlign: "top",
      background: i,
      borderRadius: r
    }, Si(t, s)),
    [`${n}-lg`]: Object.assign({}, Si(a, s)),
    [`${n}-sm`]: Object.assign({}, Si(o, s))
  };
}, Mc = (e) => Object.assign({
  width: e
}, Ko(e)), oy = (e) => {
  const {
    skeletonImageCls: t,
    imageSizeBase: r,
    gradientFromColor: n,
    borderRadiusSM: a,
    calc: o
  } = e;
  return {
    [`${t}`]: Object.assign(Object.assign({
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      verticalAlign: "top",
      background: n,
      borderRadius: a
    }, Mc(o(r).mul(2).equal())), {
      [`${t}-path`]: {
        fill: "#bfbfbf"
      },
      [`${t}-svg`]: Object.assign(Object.assign({}, Mc(r)), {
        maxWidth: o(r).mul(4).equal(),
        maxHeight: o(r).mul(4).equal()
      }),
      [`${t}-svg${t}-svg-circle`]: {
        borderRadius: "50%"
      }
    }),
    [`${t}${t}-circle`]: {
      borderRadius: "50%"
    }
  };
}, Ci = (e, t, r) => {
  const {
    skeletonButtonCls: n
  } = e;
  return {
    [`${r}${n}-circle`]: {
      width: t,
      minWidth: t,
      borderRadius: "50%"
    },
    [`${r}${n}-round`]: {
      borderRadius: t
    }
  };
}, Ei = (e, t) => Object.assign({
  width: t(e).mul(2).equal(),
  minWidth: t(e).mul(2).equal()
}, Ko(e)), iy = (e) => {
  const {
    borderRadiusSM: t,
    skeletonButtonCls: r,
    controlHeight: n,
    controlHeightLG: a,
    controlHeightSM: o,
    gradientFromColor: i,
    calc: s
  } = e;
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
    [`${r}`]: Object.assign({
      display: "inline-block",
      verticalAlign: "top",
      background: i,
      borderRadius: t,
      width: s(n).mul(2).equal(),
      minWidth: s(n).mul(2).equal()
    }, Ei(n, s))
  }, Ci(e, n, r)), {
    [`${r}-lg`]: Object.assign({}, Ei(a, s))
  }), Ci(e, a, `${r}-lg`)), {
    [`${r}-sm`]: Object.assign({}, Ei(o, s))
  }), Ci(e, o, `${r}-sm`));
}, sy = (e) => {
  const {
    componentCls: t,
    skeletonAvatarCls: r,
    skeletonTitleCls: n,
    skeletonParagraphCls: a,
    skeletonButtonCls: o,
    skeletonInputCls: i,
    skeletonImageCls: s,
    controlHeight: l,
    controlHeightLG: c,
    controlHeightSM: d,
    gradientFromColor: f,
    padding: v,
    marginSM: m,
    borderRadius: h,
    titleHeight: p,
    blockRadius: g,
    paragraphLiHeight: S,
    controlHeightXS: b,
    paragraphMarginTop: y
  } = e;
  return {
    [`${t}`]: {
      display: "table",
      width: "100%",
      [`${t}-header`]: {
        display: "table-cell",
        paddingInlineEnd: v,
        verticalAlign: "top",
        // Avatar
        [`${r}`]: Object.assign({
          display: "inline-block",
          verticalAlign: "top",
          background: f
        }, An(l)),
        [`${r}-circle`]: {
          borderRadius: "50%"
        },
        [`${r}-lg`]: Object.assign({}, An(c)),
        [`${r}-sm`]: Object.assign({}, An(d))
      },
      [`${t}-content`]: {
        display: "table-cell",
        width: "100%",
        verticalAlign: "top",
        // Title
        [`${n}`]: {
          width: "100%",
          height: p,
          background: f,
          borderRadius: g,
          [`+ ${a}`]: {
            marginBlockStart: d
          }
        },
        // paragraph
        [`${a}`]: {
          padding: 0,
          "> li": {
            width: "100%",
            height: S,
            listStyle: "none",
            background: f,
            borderRadius: g,
            "+ li": {
              marginBlockStart: b
            }
          }
        },
        [`${a}> li:last-child:not(:first-child):not(:nth-child(2))`]: {
          width: "61%"
        }
      },
      [`&-round ${t}-content`]: {
        [`${n}, ${a} > li`]: {
          borderRadius: h
        }
      }
    },
    [`${t}-with-avatar ${t}-content`]: {
      // Title
      [`${n}`]: {
        marginBlockStart: m,
        [`+ ${a}`]: {
          marginBlockStart: y
        }
      }
    },
    // Skeleton element
    [`${t}${t}-element`]: Object.assign(Object.assign(Object.assign(Object.assign({
      display: "inline-block",
      width: "auto"
    }, iy(e)), ny(e)), ay(e)), oy(e)),
    // Skeleton Block Button, Input
    [`${t}${t}-block`]: {
      width: "100%",
      [`${o}`]: {
        width: "100%"
      },
      [`${i}`]: {
        width: "100%"
      }
    },
    // With active animation
    [`${t}${t}-active`]: {
      [`
        ${n},
        ${a} > li,
        ${r},
        ${o},
        ${i},
        ${s}
      `]: Object.assign({}, ry(e))
    }
  };
}, ly = (e) => {
  const {
    colorFillContent: t,
    colorFill: r
  } = e, n = t, a = r;
  return {
    color: n,
    colorGradientEnd: a,
    gradientFromColor: n,
    gradientToColor: a,
    titleHeight: e.controlHeight / 2,
    blockRadius: e.borderRadiusSM,
    paragraphMarginTop: e.marginLG + e.marginXXS,
    paragraphLiHeight: e.controlHeight / 2
  };
}, qn = en("Skeleton", (e) => {
  const {
    componentCls: t,
    calc: r
  } = e, n = Zt(e, {
    skeletonAvatarCls: `${t}-avatar`,
    skeletonTitleCls: `${t}-title`,
    skeletonParagraphCls: `${t}-paragraph`,
    skeletonButtonCls: `${t}-button`,
    skeletonInputCls: `${t}-input`,
    skeletonImageCls: `${t}-image`,
    imageSizeBase: r(e.controlHeight).mul(1.5).equal(),
    borderRadius: 100,
    // Large number to make capsule shape
    skeletonLoadingBackground: `linear-gradient(90deg, ${e.gradientFromColor} 25%, ${e.gradientToColor} 37%, ${e.gradientFromColor} 63%)`,
    skeletonLoadingMotionDuration: "1.4s"
  });
  return [sy(n)];
}, ly, {
  deprecatedTokens: [["color", "gradientFromColor"], ["colorGradientEnd", "gradientToColor"]]
}), cy = (e) => {
  const {
    prefixCls: t,
    className: r,
    rootClassName: n,
    active: a,
    shape: o = "circle",
    size: i = "default"
  } = e, {
    getPrefixCls: s
  } = u.useContext(bt), l = s("skeleton", t), [c, d, f] = qn(l), v = Cr(e, ["prefixCls", "className"]), m = ee(l, `${l}-element`, {
    [`${l}-active`]: a
  }, r, n, d, f);
  return c(/* @__PURE__ */ u.createElement("div", {
    className: m
  }, /* @__PURE__ */ u.createElement(Wo, Object.assign({
    prefixCls: `${l}-avatar`,
    shape: o,
    size: i
  }, v))));
}, uy = (e) => {
  const {
    prefixCls: t,
    className: r,
    rootClassName: n,
    active: a,
    block: o = !1,
    size: i = "default"
  } = e, {
    getPrefixCls: s
  } = u.useContext(bt), l = s("skeleton", t), [c, d, f] = qn(l), v = Cr(e, ["prefixCls"]), m = ee(l, `${l}-element`, {
    [`${l}-active`]: a,
    [`${l}-block`]: o
  }, r, n, d, f);
  return c(/* @__PURE__ */ u.createElement("div", {
    className: m
  }, /* @__PURE__ */ u.createElement(Wo, Object.assign({
    prefixCls: `${l}-button`,
    size: i
  }, v))));
}, dy = "M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z", fy = (e) => {
  const {
    prefixCls: t,
    className: r,
    rootClassName: n,
    style: a,
    active: o
  } = e, {
    getPrefixCls: i
  } = u.useContext(bt), s = i("skeleton", t), [l, c, d] = qn(s), f = ee(s, `${s}-element`, {
    [`${s}-active`]: o
  }, r, n, c, d);
  return l(/* @__PURE__ */ u.createElement("div", {
    className: f
  }, /* @__PURE__ */ u.createElement("div", {
    className: ee(`${s}-image`, r),
    style: a
  }, /* @__PURE__ */ u.createElement("svg", {
    viewBox: "0 0 1098 1024",
    xmlns: "http://www.w3.org/2000/svg",
    className: `${s}-image-svg`
  }, /* @__PURE__ */ u.createElement("title", null, "Image placeholder"), /* @__PURE__ */ u.createElement("path", {
    d: dy,
    className: `${s}-image-path`
  })))));
}, vy = (e) => {
  const {
    prefixCls: t,
    className: r,
    rootClassName: n,
    active: a,
    block: o,
    size: i = "default"
  } = e, {
    getPrefixCls: s
  } = u.useContext(bt), l = s("skeleton", t), [c, d, f] = qn(l), v = Cr(e, ["prefixCls"]), m = ee(l, `${l}-element`, {
    [`${l}-active`]: a,
    [`${l}-block`]: o
  }, r, n, d, f);
  return c(/* @__PURE__ */ u.createElement("div", {
    className: m
  }, /* @__PURE__ */ u.createElement(Wo, Object.assign({
    prefixCls: `${l}-input`,
    size: i
  }, v))));
};
var gy = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM288 604a64 64 0 10128 0 64 64 0 10-128 0zm118-224a48 48 0 1096 0 48 48 0 10-96 0zm158 228a96 96 0 10192 0 96 96 0 10-192 0zm148-314a56 56 0 10112 0 56 56 0 10-112 0z" } }] }, name: "dot-chart", theme: "outlined" }, my = function(t, r) {
  return /* @__PURE__ */ u.createElement(ar, Me({}, t, {
    ref: r,
    icon: gy
  }));
}, Ef = /* @__PURE__ */ u.forwardRef(my);
process.env.NODE_ENV !== "production" && (Ef.displayName = "DotChartOutlined");
const py = (e) => {
  const {
    prefixCls: t,
    className: r,
    rootClassName: n,
    style: a,
    active: o,
    children: i
  } = e, {
    getPrefixCls: s
  } = u.useContext(bt), l = s("skeleton", t), [c, d, f] = qn(l), v = ee(l, `${l}-element`, {
    [`${l}-active`]: o
  }, d, r, n, f), m = i ?? /* @__PURE__ */ u.createElement(Ef, null);
  return c(/* @__PURE__ */ u.createElement("div", {
    className: v
  }, /* @__PURE__ */ u.createElement("div", {
    className: ee(`${l}-image`, r),
    style: a
  }, m)));
}, hy = (e, t) => {
  const {
    width: r,
    rows: n = 2
  } = t;
  if (Array.isArray(r))
    return r[e];
  if (n - 1 === e)
    return r;
}, by = (e) => {
  const {
    prefixCls: t,
    className: r,
    style: n,
    rows: a
  } = e, o = Ee(Array(a)).map((i, s) => (
    // eslint-disable-next-line react/no-array-index-key
    /* @__PURE__ */ u.createElement("li", {
      key: s,
      style: {
        width: hy(s, e)
      }
    })
  ));
  return /* @__PURE__ */ u.createElement("ul", {
    className: ee(t, r),
    style: n
  }, o);
}, yy = (e) => {
  let {
    prefixCls: t,
    className: r,
    width: n,
    style: a
  } = e;
  return (
    // biome-ignore lint/a11y/useHeadingContent: HOC here
    /* @__PURE__ */ u.createElement("h3", {
      className: ee(t, r),
      style: Object.assign({
        width: n
      }, a)
    })
  );
};
function wi(e) {
  return e && typeof e == "object" ? e : {};
}
function Sy(e, t) {
  return e && !t ? {
    size: "large",
    shape: "square"
  } : {
    size: "large",
    shape: "circle"
  };
}
function Cy(e, t) {
  return !e && t ? {
    width: "38%"
  } : e && t ? {
    width: "50%"
  } : {};
}
function Ey(e, t) {
  const r = {};
  return (!e || !t) && (r.width = "61%"), !e && t ? r.rows = 3 : r.rows = 2, r;
}
const pn = (e) => {
  const {
    prefixCls: t,
    loading: r,
    className: n,
    rootClassName: a,
    style: o,
    children: i,
    avatar: s = !1,
    title: l = !0,
    paragraph: c = !0,
    active: d,
    round: f
  } = e, {
    getPrefixCls: v,
    direction: m,
    skeleton: h
  } = u.useContext(bt), p = v("skeleton", t), [g, S, b] = qn(p);
  if (r || !("loading" in e)) {
    const y = !!s, w = !!l, C = !!c;
    let O;
    if (y) {
      const R = Object.assign(Object.assign({
        prefixCls: `${p}-avatar`
      }, Sy(w, C)), wi(s));
      O = /* @__PURE__ */ u.createElement("div", {
        className: `${p}-header`
      }, /* @__PURE__ */ u.createElement(Wo, Object.assign({}, R)));
    }
    let _;
    if (w || C) {
      let R;
      if (w) {
        const F = Object.assign(Object.assign({
          prefixCls: `${p}-title`
        }, Cy(y, C)), wi(l));
        R = /* @__PURE__ */ u.createElement(yy, Object.assign({}, F));
      }
      let A;
      if (C) {
        const F = Object.assign(Object.assign({
          prefixCls: `${p}-paragraph`
        }, Ey(y, w)), wi(c));
        A = /* @__PURE__ */ u.createElement(by, Object.assign({}, F));
      }
      _ = /* @__PURE__ */ u.createElement("div", {
        className: `${p}-content`
      }, R, A);
    }
    const $ = ee(p, {
      [`${p}-with-avatar`]: y,
      [`${p}-active`]: d,
      [`${p}-rtl`]: m === "rtl",
      [`${p}-round`]: f
    }, h == null ? void 0 : h.className, n, a, S, b);
    return g(/* @__PURE__ */ u.createElement("div", {
      className: $,
      style: Object.assign(Object.assign({}, h == null ? void 0 : h.style), o)
    }, O, _));
  }
  return i ?? null;
};
pn.Button = uy;
pn.Avatar = cy;
pn.Input = vy;
pn.Image = fy;
pn.Node = py;
process.env.NODE_ENV !== "production" && (pn.displayName = "Skeleton");
const wy = (e) => ({
  animationDuration: e,
  animationFillMode: "both"
}), xy = (e) => ({
  animationDuration: e,
  animationFillMode: "both"
}), wf = function(e, t, r, n) {
  const o = (arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1) ? "&" : "";
  return {
    [`
      ${o}${e}-enter,
      ${o}${e}-appear
    `]: Object.assign(Object.assign({}, wy(n)), {
      animationPlayState: "paused"
    }),
    [`${o}${e}-leave`]: Object.assign(Object.assign({}, xy(n)), {
      animationPlayState: "paused"
    }),
    [`
      ${o}${e}-enter${e}-enter-active,
      ${o}${e}-appear${e}-appear-active
    `]: {
      animationName: t,
      animationPlayState: "running"
    },
    [`${o}${e}-leave${e}-leave-active`]: {
      animationName: r,
      animationPlayState: "running",
      pointerEvents: "none"
    }
  };
}, $y = new Rt("antSlideUpIn", {
  "0%": {
    transform: "scaleY(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scaleY(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  }
}), Oy = new Rt("antSlideUpOut", {
  "0%": {
    transform: "scaleY(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  },
  "100%": {
    transform: "scaleY(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  }
}), Ry = new Rt("antSlideDownIn", {
  "0%": {
    transform: "scaleY(0.8)",
    transformOrigin: "100% 100%",
    opacity: 0
  },
  "100%": {
    transform: "scaleY(1)",
    transformOrigin: "100% 100%",
    opacity: 1
  }
}), _y = new Rt("antSlideDownOut", {
  "0%": {
    transform: "scaleY(1)",
    transformOrigin: "100% 100%",
    opacity: 1
  },
  "100%": {
    transform: "scaleY(0.8)",
    transformOrigin: "100% 100%",
    opacity: 0
  }
}), Py = new Rt("antSlideLeftIn", {
  "0%": {
    transform: "scaleX(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scaleX(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  }
}), Ty = new Rt("antSlideLeftOut", {
  "0%": {
    transform: "scaleX(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  },
  "100%": {
    transform: "scaleX(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  }
}), Ny = new Rt("antSlideRightIn", {
  "0%": {
    transform: "scaleX(0.8)",
    transformOrigin: "100% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scaleX(1)",
    transformOrigin: "100% 0%",
    opacity: 1
  }
}), Iy = new Rt("antSlideRightOut", {
  "0%": {
    transform: "scaleX(1)",
    transformOrigin: "100% 0%",
    opacity: 1
  },
  "100%": {
    transform: "scaleX(0.8)",
    transformOrigin: "100% 0%",
    opacity: 0
  }
}), My = {
  "slide-up": {
    inKeyframes: $y,
    outKeyframes: Oy
  },
  "slide-down": {
    inKeyframes: Ry,
    outKeyframes: _y
  },
  "slide-left": {
    inKeyframes: Py,
    outKeyframes: Ty
  },
  "slide-right": {
    inKeyframes: Ny,
    outKeyframes: Iy
  }
}, Ac = (e, t) => {
  const {
    antCls: r
  } = e, n = `${r}-${t}`, {
    inKeyframes: a,
    outKeyframes: o
  } = My[t];
  return [wf(n, a, o, e.motionDurationMid), {
    [`
      ${n}-enter,
      ${n}-appear
    `]: {
      transform: "scale(0)",
      transformOrigin: "0% 0%",
      opacity: 0,
      animationTimingFunction: e.motionEaseOutQuint,
      "&-prepare": {
        transform: "scale(1)"
      }
    },
    [`${n}-leave`]: {
      animationTimingFunction: e.motionEaseInQuint
    }
  }];
}, Ay = new Rt("antZoomIn", {
  "0%": {
    transform: "scale(0.2)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    opacity: 1
  }
}), Ly = new Rt("antZoomOut", {
  "0%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(0.2)",
    opacity: 0
  }
}), Lc = new Rt("antZoomBigIn", {
  "0%": {
    transform: "scale(0.8)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    opacity: 1
  }
}), jc = new Rt("antZoomBigOut", {
  "0%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(0.8)",
    opacity: 0
  }
}), jy = new Rt("antZoomUpIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "50% 0%"
  }
}), Fy = new Rt("antZoomUpOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "50% 0%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 0%",
    opacity: 0
  }
}), Dy = new Rt("antZoomLeftIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "0% 50%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "0% 50%"
  }
}), zy = new Rt("antZoomLeftOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "0% 50%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "0% 50%",
    opacity: 0
  }
}), Vy = new Rt("antZoomRightIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "100% 50%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "100% 50%"
  }
}), ky = new Rt("antZoomRightOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "100% 50%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "100% 50%",
    opacity: 0
  }
}), By = new Rt("antZoomDownIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 100%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "50% 100%"
  }
}), Hy = new Rt("antZoomDownOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "50% 100%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 100%",
    opacity: 0
  }
}), Wy = {
  zoom: {
    inKeyframes: Ay,
    outKeyframes: Ly
  },
  "zoom-big": {
    inKeyframes: Lc,
    outKeyframes: jc
  },
  "zoom-big-fast": {
    inKeyframes: Lc,
    outKeyframes: jc
  },
  "zoom-left": {
    inKeyframes: Dy,
    outKeyframes: zy
  },
  "zoom-right": {
    inKeyframes: Vy,
    outKeyframes: ky
  },
  "zoom-up": {
    inKeyframes: jy,
    outKeyframes: Fy
  },
  "zoom-down": {
    inKeyframes: By,
    outKeyframes: Hy
  }
}, Ky = (e, t) => {
  const {
    antCls: r
  } = e, n = `${r}-${t}`, {
    inKeyframes: a,
    outKeyframes: o
  } = Wy[t];
  return [wf(n, a, o, e.motionDurationFast), {
    [`
        ${n}-enter,
        ${n}-appear
      `]: {
      transform: "scale(0)",
      opacity: 0,
      animationTimingFunction: e.motionEaseOutCirc,
      "&-prepare": {
        transform: "none"
      }
    },
    [`${n}-leave`]: {
      animationTimingFunction: e.motionEaseInOutCirc
    }
  }];
}, xf = function() {
  if (typeof navigator > "u" || typeof window > "u")
    return !1;
  var e = navigator.userAgent || navigator.vendor || window.opera;
  return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(e == null ? void 0 : e.substr(0, 4));
};
var Uy = ["prefixCls", "invalidate", "item", "renderItem", "responsive", "responsiveDisabled", "registerSize", "itemKey", "className", "style", "children", "display", "order", "component"], En = void 0;
function Gy(e, t) {
  var r = e.prefixCls, n = e.invalidate, a = e.item, o = e.renderItem, i = e.responsive, s = e.responsiveDisabled, l = e.registerSize, c = e.itemKey, d = e.className, f = e.style, v = e.children, m = e.display, h = e.order, p = e.component, g = p === void 0 ? "div" : p, S = et(e, Uy), b = i && !m;
  function y($) {
    l(c, $);
  }
  u.useEffect(function() {
    return function() {
      y(null);
    };
  }, []);
  var w = o && a !== En ? o(a) : v, C;
  n || (C = {
    opacity: b ? 0 : 1,
    height: b ? 0 : En,
    overflowY: b ? "hidden" : En,
    order: i ? h : En,
    pointerEvents: b ? "none" : En,
    position: b ? "absolute" : En
  });
  var O = {};
  b && (O["aria-hidden"] = !0);
  var _ = /* @__PURE__ */ u.createElement(g, Me({
    className: ee(!n && r, d),
    style: V(V({}, C), f)
  }, O, S, {
    ref: t
  }), w);
  return i && (_ = /* @__PURE__ */ u.createElement(hr, {
    onResize: function(R) {
      var A = R.offsetWidth;
      y(A);
    },
    disabled: s
  }, _)), _;
}
var pa = /* @__PURE__ */ u.forwardRef(Gy);
pa.displayName = "Item";
function qy(e) {
  if (typeof MessageChannel > "u")
    Nt(e);
  else {
    var t = new MessageChannel();
    t.port1.onmessage = function() {
      return e();
    }, t.port2.postMessage(void 0);
  }
}
function Xy() {
  var e = u.useRef(null), t = function(n) {
    e.current || (e.current = [], qy(function() {
      Fv(function() {
        e.current.forEach(function(a) {
          a();
        }), e.current = null;
      });
    })), e.current.push(n);
  };
  return t;
}
function oa(e, t) {
  var r = u.useState(t), n = G(r, 2), a = n[0], o = n[1], i = Ht(function(s) {
    e(function() {
      o(s);
    });
  });
  return [a, i];
}
var Po = /* @__PURE__ */ Y.createContext(null), Yy = ["component"], Zy = ["className"], Qy = ["className"], Jy = function(t, r) {
  var n = u.useContext(Po);
  if (!n) {
    var a = t.component, o = a === void 0 ? "div" : a, i = et(t, Yy);
    return /* @__PURE__ */ u.createElement(o, Me({}, i, {
      ref: r
    }));
  }
  var s = n.className, l = et(n, Zy), c = t.className, d = et(t, Qy);
  return /* @__PURE__ */ u.createElement(Po.Provider, {
    value: null
  }, /* @__PURE__ */ u.createElement(pa, Me({
    ref: r,
    className: ee(s, c)
  }, l, d)));
}, $f = /* @__PURE__ */ u.forwardRef(Jy);
$f.displayName = "RawItem";
var eS = ["prefixCls", "data", "renderItem", "renderRawItem", "itemKey", "itemWidth", "ssr", "style", "className", "maxCount", "renderRest", "renderRawRest", "suffix", "component", "itemComponent", "onVisibleChange"], Of = "responsive", Rf = "invalidate";
function tS(e) {
  return "+ ".concat(e.length, " ...");
}
function rS(e, t) {
  var r = e.prefixCls, n = r === void 0 ? "rc-overflow" : r, a = e.data, o = a === void 0 ? [] : a, i = e.renderItem, s = e.renderRawItem, l = e.itemKey, c = e.itemWidth, d = c === void 0 ? 10 : c, f = e.ssr, v = e.style, m = e.className, h = e.maxCount, p = e.renderRest, g = e.renderRawRest, S = e.suffix, b = e.component, y = b === void 0 ? "div" : b, w = e.itemComponent, C = e.onVisibleChange, O = et(e, eS), _ = f === "full", $ = Xy(), R = oa($, null), A = G(R, 2), F = A[0], j = A[1], I = F || 0, T = oa($, /* @__PURE__ */ new Map()), B = G(T, 2), N = B[0], x = B[1], E = oa($, 0), L = G(E, 2), M = L[0], z = L[1], H = oa($, 0), W = G(H, 2), U = W[0], Q = W[1], q = oa($, 0), J = G(q, 2), oe = J[0], ue = J[1], xe = pt(null), me = G(xe, 2), fe = me[0], we = me[1], k = pt(null), le = G(k, 2), ge = le[0], $e = le[1], ye = u.useMemo(function() {
    return ge === null && _ ? Number.MAX_SAFE_INTEGER : ge || 0;
  }, [ge, F]), ie = pt(!1), ne = G(ie, 2), ae = ne[0], Se = ne[1], he = "".concat(n, "-item"), be = Math.max(M, U), Pe = h === Of, pe = o.length && Pe, ct = h === Rf, at = pe || typeof h == "number" && o.length > h, _e = Yr(function() {
    var Ae = o;
    return pe ? F === null && _ ? Ae = o : Ae = o.slice(0, Math.min(o.length, I / d)) : typeof h == "number" && (Ae = o.slice(0, h)), Ae;
  }, [o, d, F, h, pe]), Oe = Yr(function() {
    return pe ? o.slice(ye + 1) : o.slice(_e.length);
  }, [o, _e, pe, ye]), Z = Gr(function(Ae, Ce) {
    var Qe;
    return typeof l == "function" ? l(Ae) : (Qe = l && (Ae == null ? void 0 : Ae[l])) !== null && Qe !== void 0 ? Qe : Ce;
  }, [l]), re = Gr(i || function(Ae) {
    return Ae;
  }, [i]);
  function Te(Ae, Ce, Qe) {
    ge === Ae && (Ce === void 0 || Ce === fe) || ($e(Ae), Qe || (Se(Ae < o.length - 1), C == null || C(Ae)), Ce !== void 0 && we(Ce));
  }
  function Fe(Ae, Ce) {
    j(Ce.clientWidth);
  }
  function Ge(Ae, Ce) {
    x(function(Qe) {
      var yt = new Map(Qe);
      return Ce === null ? yt.delete(Ae) : yt.set(Ae, Ce), yt;
    });
  }
  function Be(Ae, Ce) {
    Q(Ce), z(U);
  }
  function Ie(Ae, Ce) {
    ue(Ce);
  }
  function se(Ae) {
    return N.get(Z(_e[Ae], Ae));
  }
  Et(function() {
    if (I && typeof be == "number" && _e) {
      var Ae = oe, Ce = _e.length, Qe = Ce - 1;
      if (!Ce) {
        Te(0, null);
        return;
      }
      for (var yt = 0; yt < Ce; yt += 1) {
        var Xe = se(yt);
        if (_ && (Xe = Xe || 0), Xe === void 0) {
          Te(yt - 1, void 0, !0);
          break;
        }
        if (Ae += Xe, // Only one means `totalWidth` is the final width
        Qe === 0 && Ae <= I || // Last two width will be the final width
        yt === Qe - 1 && Ae + se(Qe) <= I) {
          Te(Qe, null);
          break;
        } else if (Ae + be > I) {
          Te(yt - 1, Ae - Xe - oe + U);
          break;
        }
      }
      S && se(0) + oe > I && we(null);
    }
  }, [I, N, U, oe, Z, _e]);
  var de = ae && !!Oe.length, We = {};
  fe !== null && pe && (We = {
    position: "absolute",
    left: fe,
    top: 0
  });
  var rt = {
    prefixCls: he,
    responsive: pe,
    component: w,
    invalidate: ct
  }, Ct = s ? function(Ae, Ce) {
    var Qe = Z(Ae, Ce);
    return /* @__PURE__ */ u.createElement(Po.Provider, {
      key: Qe,
      value: V(V({}, rt), {}, {
        order: Ce,
        item: Ae,
        itemKey: Qe,
        registerSize: Ge,
        display: Ce <= ye
      })
    }, s(Ae, Ce));
  } : function(Ae, Ce) {
    var Qe = Z(Ae, Ce);
    return /* @__PURE__ */ u.createElement(pa, Me({}, rt, {
      order: Ce,
      key: Qe,
      item: Ae,
      renderItem: re,
      itemKey: Qe,
      registerSize: Ge,
      display: Ce <= ye
    }));
  }, ut, qe = {
    order: de ? ye : Number.MAX_SAFE_INTEGER,
    className: "".concat(he, "-rest"),
    registerSize: Be,
    display: de
  };
  if (g)
    g && (ut = /* @__PURE__ */ u.createElement(Po.Provider, {
      value: V(V({}, rt), qe)
    }, g(Oe)));
  else {
    var Ue = p || tS;
    ut = /* @__PURE__ */ u.createElement(pa, Me({}, rt, qe), typeof Ue == "function" ? Ue(Oe) : Ue);
  }
  var He = /* @__PURE__ */ u.createElement(y, Me({
    className: ee(!ct && n, m),
    style: v,
    ref: t
  }, O), _e.map(Ct), at ? ut : null, S && /* @__PURE__ */ u.createElement(pa, Me({}, rt, {
    responsive: Pe,
    responsiveDisabled: !pe,
    order: ye,
    className: "".concat(he, "-suffix"),
    registerSize: Ie,
    display: !0,
    style: We
  }), S));
  return Pe && (He = /* @__PURE__ */ u.createElement(hr, {
    onResize: Fe,
    disabled: !pe
  }, He)), He;
}
var Dr = /* @__PURE__ */ u.forwardRef(rS);
Dr.displayName = "Overflow";
Dr.Item = $f;
Dr.RESPONSIVE = Of;
Dr.INVALIDATE = Rf;
function nS(e) {
  var t = e.prefixCls, r = e.align, n = e.arrow, a = e.arrowPos, o = n || {}, i = o.className, s = o.content, l = a.x, c = l === void 0 ? 0 : l, d = a.y, f = d === void 0 ? 0 : d, v = u.useRef();
  if (!r || !r.points)
    return null;
  var m = {
    position: "absolute"
  };
  if (r.autoArrow !== !1) {
    var h = r.points[0], p = r.points[1], g = h[0], S = h[1], b = p[0], y = p[1];
    g === b || !["t", "b"].includes(g) ? m.top = f : g === "t" ? m.top = 0 : m.bottom = 0, S === y || !["l", "r"].includes(S) ? m.left = c : S === "l" ? m.left = 0 : m.right = 0;
  }
  return /* @__PURE__ */ u.createElement("div", {
    ref: v,
    className: ee("".concat(t, "-arrow"), i),
    style: m
  }, s);
}
function aS(e) {
  var t = e.prefixCls, r = e.open, n = e.zIndex, a = e.mask, o = e.motion;
  return a ? /* @__PURE__ */ u.createElement(vn, Me({}, o, {
    motionAppear: !0,
    visible: r,
    removeOnLeave: !0
  }), function(i) {
    var s = i.className;
    return /* @__PURE__ */ u.createElement("div", {
      style: {
        zIndex: n
      },
      className: ee("".concat(t, "-mask"), s)
    });
  }) : null;
}
var _f = /* @__PURE__ */ u.memo(function(e) {
  var t = e.children;
  return t;
}, function(e, t) {
  return t.cache;
});
process.env.NODE_ENV !== "production" && (_f.displayName = "PopupContent");
var Pf = /* @__PURE__ */ u.forwardRef(function(e, t) {
  var r = e.popup, n = e.className, a = e.prefixCls, o = e.style, i = e.target, s = e.onVisibleChanged, l = e.open, c = e.keepDom, d = e.fresh, f = e.onClick, v = e.mask, m = e.arrow, h = e.arrowPos, p = e.align, g = e.motion, S = e.maskMotion, b = e.forceRender, y = e.getPopupContainer, w = e.autoDestroy, C = e.portal, O = e.zIndex, _ = e.onMouseEnter, $ = e.onMouseLeave, R = e.onPointerEnter, A = e.ready, F = e.offsetX, j = e.offsetY, I = e.offsetR, T = e.offsetB, B = e.onAlign, N = e.onPrepare, x = e.stretch, E = e.targetWidth, L = e.targetHeight, M = typeof r == "function" ? r() : r, z = l || c, H = (y == null ? void 0 : y.length) > 0, W = u.useState(!y || !H), U = G(W, 2), Q = U[0], q = U[1];
  if (Et(function() {
    !Q && H && i && q(!0);
  }, [Q, H, i]), !Q)
    return null;
  var J = "auto", oe = {
    left: "-1000vw",
    top: "-1000vh",
    right: J,
    bottom: J
  };
  if (A || !l) {
    var ue, xe = p.points, me = p.dynamicInset || ((ue = p._experimental) === null || ue === void 0 ? void 0 : ue.dynamicInset), fe = me && xe[0][1] === "r", we = me && xe[0][0] === "b";
    fe ? (oe.right = I, oe.left = J) : (oe.left = F, oe.right = J), we ? (oe.bottom = T, oe.top = J) : (oe.top = j, oe.bottom = J);
  }
  var k = {};
  return x && (x.includes("height") && L ? k.height = L : x.includes("minHeight") && L && (k.minHeight = L), x.includes("width") && E ? k.width = E : x.includes("minWidth") && E && (k.minWidth = E)), l || (k.pointerEvents = "none"), /* @__PURE__ */ u.createElement(C, {
    open: b || z,
    getContainer: y && function() {
      return y(i);
    },
    autoDestroy: w
  }, /* @__PURE__ */ u.createElement(aS, {
    prefixCls: a,
    open: l,
    zIndex: O,
    mask: v,
    motion: S
  }), /* @__PURE__ */ u.createElement(hr, {
    onResize: B,
    disabled: !l
  }, function(le) {
    return /* @__PURE__ */ u.createElement(vn, Me({
      motionAppear: !0,
      motionEnter: !0,
      motionLeave: !0,
      removeOnLeave: !1,
      forceRender: b,
      leavedClassName: "".concat(a, "-hidden")
    }, g, {
      onAppearPrepare: N,
      onEnterPrepare: N,
      visible: l,
      onVisibleChanged: function($e) {
        var ye;
        g == null || (ye = g.onVisibleChanged) === null || ye === void 0 || ye.call(g, $e), s($e);
      }
    }), function(ge, $e) {
      var ye = ge.className, ie = ge.style, ne = ee(a, ye, n);
      return /* @__PURE__ */ u.createElement("div", {
        ref: _r(le, t, $e),
        className: ne,
        style: V(V(V(V({
          "--arrow-x": "".concat(h.x || 0, "px"),
          "--arrow-y": "".concat(h.y || 0, "px")
        }, oe), k), ie), {}, {
          boxSizing: "border-box",
          zIndex: O
        }, o),
        onMouseEnter: _,
        onMouseLeave: $,
        onPointerEnter: R,
        onClick: f
      }, m && /* @__PURE__ */ u.createElement(nS, {
        prefixCls: a,
        arrow: m,
        arrowPos: h,
        align: p
      }), /* @__PURE__ */ u.createElement(_f, {
        cache: !l && !d
      }, M));
    });
  }));
});
process.env.NODE_ENV !== "production" && (Pf.displayName = "Popup");
var Tf = /* @__PURE__ */ u.forwardRef(function(e, t) {
  var r = e.children, n = e.getTriggerDOMNode, a = fn(r), o = u.useCallback(function(s) {
    Fs(t, n ? n(s) : s);
  }, [n]), i = Ia(o, r.ref);
  return a ? /* @__PURE__ */ u.cloneElement(r, {
    ref: i
  }) : r;
});
process.env.NODE_ENV !== "production" && (Tf.displayName = "TriggerWrapper");
var Fc = /* @__PURE__ */ u.createContext(null);
function Dc(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
function oS(e, t, r, n) {
  return u.useMemo(function() {
    var a = Dc(r ?? t), o = Dc(n ?? t), i = new Set(a), s = new Set(o);
    return e && (i.has("hover") && (i.delete("hover"), i.add("click")), s.has("hover") && (s.delete("hover"), s.add("click"))), [i, s];
  }, [e, t, r, n]);
}
function iS() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], r = arguments.length > 2 ? arguments[2] : void 0;
  return r ? e[0] === t[0] : e[0] === t[0] && e[1] === t[1];
}
function sS(e, t, r, n) {
  for (var a = r.points, o = Object.keys(e), i = 0; i < o.length; i += 1) {
    var s, l = o[i];
    if (iS((s = e[l]) === null || s === void 0 ? void 0 : s.points, a, n))
      return "".concat(t, "-placement-").concat(l);
  }
  return "";
}
function zc(e, t, r, n) {
  return t || (r ? {
    motionName: "".concat(e, "-").concat(r)
  } : n ? {
    motionName: n
  } : null);
}
function Da(e) {
  return e.ownerDocument.defaultView;
}
function $s(e) {
  for (var t = [], r = e == null ? void 0 : e.parentElement, n = ["hidden", "scroll", "clip", "auto"]; r; ) {
    var a = Da(r).getComputedStyle(r), o = a.overflowX, i = a.overflowY, s = a.overflow;
    [o, i, s].some(function(l) {
      return n.includes(l);
    }) && t.push(r), r = r.parentElement;
  }
  return t;
}
function Ta(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  return Number.isNaN(e) ? t : e;
}
function ia(e) {
  return Ta(parseFloat(e), 0);
}
function Vc(e, t) {
  var r = V({}, e);
  return (t || []).forEach(function(n) {
    if (!(n instanceof HTMLBodyElement || n instanceof HTMLHtmlElement)) {
      var a = Da(n).getComputedStyle(n), o = a.overflow, i = a.overflowClipMargin, s = a.borderTopWidth, l = a.borderBottomWidth, c = a.borderLeftWidth, d = a.borderRightWidth, f = n.getBoundingClientRect(), v = n.offsetHeight, m = n.clientHeight, h = n.offsetWidth, p = n.clientWidth, g = ia(s), S = ia(l), b = ia(c), y = ia(d), w = Ta(Math.round(f.width / h * 1e3) / 1e3), C = Ta(Math.round(f.height / v * 1e3) / 1e3), O = (h - p - b - y) * w, _ = (v - m - g - S) * C, $ = g * C, R = S * C, A = b * w, F = y * w, j = 0, I = 0;
      if (o === "clip") {
        var T = ia(i);
        j = T * w, I = T * C;
      }
      var B = f.x + A - j, N = f.y + $ - I, x = B + f.width + 2 * j - A - F - O, E = N + f.height + 2 * I - $ - R - _;
      r.left = Math.max(r.left, B), r.top = Math.max(r.top, N), r.right = Math.min(r.right, x), r.bottom = Math.min(r.bottom, E);
    }
  }), r;
}
function kc(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, r = "".concat(t), n = r.match(/^(.*)\%$/);
  return n ? e * (parseFloat(n[1]) / 100) : parseFloat(r);
}
function Bc(e, t) {
  var r = t || [], n = G(r, 2), a = n[0], o = n[1];
  return [kc(e.width, a), kc(e.height, o)];
}
function Hc() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  return [e[0], e[1]];
}
function wn(e, t) {
  var r = t[0], n = t[1], a, o;
  return r === "t" ? o = e.y : r === "b" ? o = e.y + e.height : o = e.y + e.height / 2, n === "l" ? a = e.x : n === "r" ? a = e.x + e.width : a = e.x + e.width / 2, {
    x: a,
    y: o
  };
}
function Kr(e, t) {
  var r = {
    t: "b",
    b: "t",
    l: "r",
    r: "l"
  };
  return e.map(function(n, a) {
    return a === t ? r[n] || "c" : n;
  }).join("");
}
function lS(e, t, r, n, a, o, i) {
  var s = u.useState({
    ready: !1,
    offsetX: 0,
    offsetY: 0,
    offsetR: 0,
    offsetB: 0,
    arrowX: 0,
    arrowY: 0,
    scaleX: 1,
    scaleY: 1,
    align: a[n] || {}
  }), l = G(s, 2), c = l[0], d = l[1], f = u.useRef(0), v = u.useMemo(function() {
    return t ? $s(t) : [];
  }, [t]), m = u.useRef({}), h = function() {
    m.current = {};
  };
  e || h();
  var p = Ht(function() {
    if (t && r && e) {
      let Gt = function(qt, vr) {
        var Wr = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ne, bn = M.x + qt, ea = M.y + vr, ta = bn + ue, Ba = ea + oe, Qo = Math.max(bn, Wr.left), Jo = Math.max(ea, Wr.top), ei = Math.min(ta, Wr.right), ti = Math.min(Ba, Wr.bottom);
        return Math.max(0, (ei - Qo) * (ti - Jo));
      }, rn = function() {
        P = M.y + Ue, K = P + oe, X = M.x + qe, ce = X + ue;
      };
      var b, y, w = t, C = w.ownerDocument, O = Da(w), _ = O.getComputedStyle(w), $ = _.width, R = _.height, A = _.position, F = w.style.left, j = w.style.top, I = w.style.right, T = w.style.bottom, B = w.style.overflow, N = V(V({}, a[n]), o), x = C.createElement("div");
      (b = w.parentElement) === null || b === void 0 || b.appendChild(x), x.style.left = "".concat(w.offsetLeft, "px"), x.style.top = "".concat(w.offsetTop, "px"), x.style.position = A, x.style.height = "".concat(w.offsetHeight, "px"), x.style.width = "".concat(w.offsetWidth, "px"), w.style.left = "0", w.style.top = "0", w.style.right = "auto", w.style.bottom = "auto", w.style.overflow = "hidden";
      var E;
      if (Array.isArray(r))
        E = {
          x: r[0],
          y: r[1],
          width: 0,
          height: 0
        };
      else {
        var L = r.getBoundingClientRect();
        E = {
          x: L.x,
          y: L.y,
          width: L.width,
          height: L.height
        };
      }
      var M = w.getBoundingClientRect(), z = C.documentElement, H = z.clientWidth, W = z.clientHeight, U = z.scrollWidth, Q = z.scrollHeight, q = z.scrollTop, J = z.scrollLeft, oe = M.height, ue = M.width, xe = E.height, me = E.width, fe = {
        left: 0,
        top: 0,
        right: H,
        bottom: W
      }, we = {
        left: -J,
        top: -q,
        right: U - J,
        bottom: Q - q
      }, k = N.htmlRegion, le = "visible", ge = "visibleFirst";
      k !== "scroll" && k !== ge && (k = le);
      var $e = k === ge, ye = Vc(we, v), ie = Vc(fe, v), ne = k === le ? ie : ye, ae = $e ? ie : ne;
      w.style.left = "auto", w.style.top = "auto", w.style.right = "0", w.style.bottom = "0";
      var Se = w.getBoundingClientRect();
      w.style.left = F, w.style.top = j, w.style.right = I, w.style.bottom = T, w.style.overflow = B, (y = w.parentElement) === null || y === void 0 || y.removeChild(x);
      var he = Ta(Math.round(ue / parseFloat($) * 1e3) / 1e3), be = Ta(Math.round(oe / parseFloat(R) * 1e3) / 1e3);
      if (he === 0 || be === 0 || ha(r) && !el(r))
        return;
      var Pe = N.offset, pe = N.targetOffset, ct = Bc(M, Pe), at = G(ct, 2), _e = at[0], Oe = at[1], Z = Bc(E, pe), re = G(Z, 2), Te = re[0], Fe = re[1];
      E.x -= Te, E.y -= Fe;
      var Ge = N.points || [], Be = G(Ge, 2), Ie = Be[0], se = Be[1], de = Hc(se), We = Hc(Ie), rt = wn(E, de), Ct = wn(M, We), ut = V({}, N), qe = rt.x - Ct.x + _e, Ue = rt.y - Ct.y + Oe, He = Gt(qe, Ue), Ae = Gt(qe, Ue, ie), Ce = wn(E, ["t", "l"]), Qe = wn(M, ["t", "l"]), yt = wn(E, ["b", "r"]), Xe = wn(M, ["b", "r"]), Ye = N.overflow || {}, it = Ye.adjustX, St = Ye.adjustY, Pt = Ye.shiftX, Vt = Ye.shiftY, Wt = function(vr) {
        return typeof vr == "boolean" ? vr : vr >= 0;
      }, P, K, X, ce;
      rn();
      var Le = Wt(St), Ne = We[0] === de[0];
      if (Le && We[0] === "t" && (K > ae.bottom || m.current.bt)) {
        var je = Ue;
        Ne ? je -= oe - xe : je = Ce.y - Xe.y - Oe;
        var De = Gt(qe, je), vt = Gt(qe, je, ie);
        // Of course use larger one
        De > He || De === He && (!$e || // Choose recommend one
        vt >= Ae) ? (m.current.bt = !0, Ue = je, Oe = -Oe, ut.points = [Kr(We, 0), Kr(de, 0)]) : m.current.bt = !1;
      }
      if (Le && We[0] === "b" && (P < ae.top || m.current.tb)) {
        var tt = Ue;
        Ne ? tt += oe - xe : tt = yt.y - Qe.y - Oe;
        var Ke = Gt(qe, tt), $t = Gt(qe, tt, ie);
        // Of course use larger one
        Ke > He || Ke === He && (!$e || // Choose recommend one
        $t >= Ae) ? (m.current.tb = !0, Ue = tt, Oe = -Oe, ut.points = [Kr(We, 0), Kr(de, 0)]) : m.current.tb = !1;
      }
      var Kt = Wt(it), kt = We[1] === de[1];
      if (Kt && We[1] === "l" && (ce > ae.right || m.current.rl)) {
        var gt = qe;
        kt ? gt -= ue - me : gt = Ce.x - Xe.x - _e;
        var Er = Gt(gt, Ue), kr = Gt(gt, Ue, ie);
        // Of course use larger one
        Er > He || Er === He && (!$e || // Choose recommend one
        kr >= Ae) ? (m.current.rl = !0, qe = gt, _e = -_e, ut.points = [Kr(We, 1), Kr(de, 1)]) : m.current.rl = !1;
      }
      if (Kt && We[1] === "r" && (X < ae.left || m.current.lr)) {
        var Ut = qe;
        kt ? Ut += ue - me : Ut = yt.x - Qe.x - _e;
        var Br = Gt(Ut, Ue), Xn = Gt(Ut, Ue, ie);
        // Of course use larger one
        Br > He || Br === He && (!$e || // Choose recommend one
        Xn >= Ae) ? (m.current.lr = !0, qe = Ut, _e = -_e, ut.points = [Kr(We, 1), Kr(de, 1)]) : m.current.lr = !1;
      }
      rn();
      var or = Pt === !0 ? 0 : Pt;
      typeof or == "number" && (X < ie.left && (qe -= X - ie.left - _e, E.x + me < ie.left + or && (qe += E.x - ie.left + me - or)), ce > ie.right && (qe -= ce - ie.right - _e, E.x > ie.right - or && (qe += E.x - ie.right + or)));
      var dr = Vt === !0 ? 0 : Vt;
      typeof dr == "number" && (P < ie.top && (Ue -= P - ie.top - Oe, E.y + xe < ie.top + dr && (Ue += E.y - ie.top + xe - dr)), K > ie.bottom && (Ue -= K - ie.bottom - Oe, E.y > ie.bottom - dr && (Ue += E.y - ie.bottom + dr)));
      var Hr = M.x + qe, Pr = Hr + ue, wr = M.y + Ue, Tr = wr + oe, tn = E.x, Nr = tn + me, fr = E.y, Yn = fr + xe, Zn = Math.max(Hr, tn), Qn = Math.min(Pr, Nr), hn = (Zn + Qn) / 2, mt = hn - Hr, nt = Math.max(wr, fr), dt = Math.min(Tr, Yn), Mt = (nt + dt) / 2, At = Mt - wr;
      i == null || i(t, ut);
      var xr = Se.right - M.x - (qe + M.width), $r = Se.bottom - M.y - (Ue + M.height);
      he === 1 && (qe = Math.round(qe), xr = Math.round(xr)), be === 1 && (Ue = Math.round(Ue), $r = Math.round($r));
      var Jn = {
        ready: !0,
        offsetX: qe / he,
        offsetY: Ue / be,
        offsetR: xr / he,
        offsetB: $r / be,
        arrowX: mt / he,
        arrowY: At / be,
        scaleX: he,
        scaleY: be,
        align: ut
      };
      d(Jn);
    }
  }), g = function() {
    f.current += 1;
    var y = f.current;
    Promise.resolve().then(function() {
      f.current === y && p();
    });
  }, S = function() {
    d(function(y) {
      return V(V({}, y), {}, {
        ready: !1
      });
    });
  };
  return Et(S, [n]), Et(function() {
    e || S();
  }, [e]), [c.ready, c.offsetX, c.offsetY, c.offsetR, c.offsetB, c.arrowX, c.arrowY, c.scaleX, c.scaleY, c.align, g];
}
function cS(e, t, r, n, a) {
  Et(function() {
    if (e && t && r) {
      let f = function() {
        n(), a();
      };
      var o = t, i = r, s = $s(o), l = $s(i), c = Da(i), d = new Set([c].concat(Ee(s), Ee(l)));
      return d.forEach(function(v) {
        v.addEventListener("scroll", f, {
          passive: !0
        });
      }), c.addEventListener("resize", f, {
        passive: !0
      }), n(), function() {
        d.forEach(function(v) {
          v.removeEventListener("scroll", f), c.removeEventListener("resize", f);
        });
      };
    }
  }, [e, t, r]);
}
function uS(e, t, r, n, a, o, i, s) {
  var l = u.useRef(e);
  l.current = e, u.useEffect(function() {
    if (t && n && (!a || o)) {
      var c = function(S) {
        var b = S.target;
        l.current && !i(b) && s(!1);
      }, d = Da(n);
      d.addEventListener("mousedown", c, !0), d.addEventListener("contextmenu", c, !0);
      var f = $o(r);
      if (f && (f.addEventListener("mousedown", c, !0), f.addEventListener("contextmenu", c, !0)), process.env.NODE_ENV !== "production") {
        var v, m, h = r == null || (v = r.getRootNode) === null || v === void 0 ? void 0 : v.call(r), p = (m = n.getRootNode) === null || m === void 0 ? void 0 : m.call(n);
        Ln(h === p, "trigger element and popup element should in same shadow root.");
      }
      return function() {
        d.removeEventListener("mousedown", c, !0), d.removeEventListener("contextmenu", c, !0), f && (f.removeEventListener("mousedown", c, !0), f.removeEventListener("contextmenu", c, !0));
      };
    }
  }, [t, r, n, a, o]);
}
var dS = ["prefixCls", "children", "action", "showAction", "hideAction", "popupVisible", "defaultPopupVisible", "onPopupVisibleChange", "afterPopupVisibleChange", "mouseEnterDelay", "mouseLeaveDelay", "focusDelay", "blurDelay", "mask", "maskClosable", "getPopupContainer", "forceRender", "autoDestroy", "destroyPopupOnHide", "popup", "popupClassName", "popupStyle", "popupPlacement", "builtinPlacements", "popupAlign", "zIndex", "stretch", "getPopupClassNameFromAlign", "fresh", "alignPoint", "onPopupClick", "onPopupAlign", "arrow", "popupMotion", "maskMotion", "popupTransitionName", "popupAnimation", "maskTransitionName", "maskAnimation", "className", "getTriggerDOMNode"];
function fS() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : nl, t = /* @__PURE__ */ u.forwardRef(function(r, n) {
    var a = r.prefixCls, o = a === void 0 ? "rc-trigger-popup" : a, i = r.children, s = r.action, l = s === void 0 ? "hover" : s, c = r.showAction, d = r.hideAction, f = r.popupVisible, v = r.defaultPopupVisible, m = r.onPopupVisibleChange, h = r.afterPopupVisibleChange, p = r.mouseEnterDelay, g = r.mouseLeaveDelay, S = g === void 0 ? 0.1 : g, b = r.focusDelay, y = r.blurDelay, w = r.mask, C = r.maskClosable, O = C === void 0 ? !0 : C, _ = r.getPopupContainer, $ = r.forceRender, R = r.autoDestroy, A = r.destroyPopupOnHide, F = r.popup, j = r.popupClassName, I = r.popupStyle, T = r.popupPlacement, B = r.builtinPlacements, N = B === void 0 ? {} : B, x = r.popupAlign, E = r.zIndex, L = r.stretch, M = r.getPopupClassNameFromAlign, z = r.fresh, H = r.alignPoint, W = r.onPopupClick, U = r.onPopupAlign, Q = r.arrow, q = r.popupMotion, J = r.maskMotion, oe = r.popupTransitionName, ue = r.popupAnimation, xe = r.maskTransitionName, me = r.maskAnimation, fe = r.className, we = r.getTriggerDOMNode, k = et(r, dS), le = R || A || !1, ge = u.useState(!1), $e = G(ge, 2), ye = $e[0], ie = $e[1];
    Et(function() {
      ie(xf());
    }, []);
    var ne = u.useRef({}), ae = u.useContext(Fc), Se = u.useMemo(function() {
      return {
        registerSubPopup: function(Ve, wt) {
          ne.current[Ve] = wt, ae == null || ae.registerSubPopup(Ve, wt);
        }
      };
    }, [ae]), he = nb(), be = u.useState(null), Pe = G(be, 2), pe = Pe[0], ct = Pe[1], at = u.useRef(null), _e = Ht(function(Re) {
      at.current = Re, ha(Re) && pe !== Re && ct(Re), ae == null || ae.registerSubPopup(he, Re);
    }), Oe = u.useState(null), Z = G(Oe, 2), re = Z[0], Te = Z[1], Fe = u.useRef(null), Ge = Ht(function(Re) {
      ha(Re) && re !== Re && (Te(Re), Fe.current = Re);
    }), Be = u.Children.only(i), Ie = (Be == null ? void 0 : Be.props) || {}, se = {}, de = Ht(function(Re) {
      var Ve, wt, Tt = re;
      return (Tt == null ? void 0 : Tt.contains(Re)) || ((Ve = $o(Tt)) === null || Ve === void 0 ? void 0 : Ve.host) === Re || Re === Tt || (pe == null ? void 0 : pe.contains(Re)) || ((wt = $o(pe)) === null || wt === void 0 ? void 0 : wt.host) === Re || Re === pe || Object.values(ne.current).some(function(xt) {
        return (xt == null ? void 0 : xt.contains(Re)) || Re === xt;
      });
    }), We = zc(o, q, ue, oe), rt = zc(o, J, me, xe), Ct = u.useState(v || !1), ut = G(Ct, 2), qe = ut[0], Ue = ut[1], He = f ?? qe, Ae = Ht(function(Re) {
      f === void 0 && Ue(Re);
    });
    Et(function() {
      Ue(f || !1);
    }, [f]);
    var Ce = u.useRef(He);
    Ce.current = He;
    var Qe = u.useRef([]);
    Qe.current = [];
    var yt = Ht(function(Re) {
      var Ve;
      Ae(Re), ((Ve = Qe.current[Qe.current.length - 1]) !== null && Ve !== void 0 ? Ve : He) !== Re && (Qe.current.push(Re), m == null || m(Re));
    }), Xe = u.useRef(), Ye = function() {
      clearTimeout(Xe.current);
    }, it = function(Ve) {
      var wt = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      Ye(), wt === 0 ? yt(Ve) : Xe.current = setTimeout(function() {
        yt(Ve);
      }, wt * 1e3);
    };
    u.useEffect(function() {
      return Ye;
    }, []);
    var St = u.useState(!1), Pt = G(St, 2), Vt = Pt[0], Wt = Pt[1];
    Et(function(Re) {
      (!Re || He) && Wt(!0);
    }, [He]);
    var P = u.useState(null), K = G(P, 2), X = K[0], ce = K[1], Le = u.useState([0, 0]), Ne = G(Le, 2), je = Ne[0], De = Ne[1], vt = function(Ve) {
      De([Ve.clientX, Ve.clientY]);
    }, tt = lS(He, pe, H ? je : re, T, N, x, U), Ke = G(tt, 11), $t = Ke[0], Kt = Ke[1], kt = Ke[2], gt = Ke[3], Er = Ke[4], kr = Ke[5], Ut = Ke[6], Br = Ke[7], Xn = Ke[8], or = Ke[9], dr = Ke[10], Hr = oS(ye, l, c, d), Pr = G(Hr, 2), wr = Pr[0], Tr = Pr[1], tn = wr.has("click"), Nr = Tr.has("click") || Tr.has("contextMenu"), fr = Ht(function() {
      Vt || dr();
    }), Yn = function() {
      Ce.current && H && Nr && it(!1);
    };
    cS(He, re, pe, fr, Yn), Et(function() {
      fr();
    }, [je, T]), Et(function() {
      He && !(N != null && N[T]) && fr();
    }, [JSON.stringify(x)]);
    var Zn = u.useMemo(function() {
      var Re = sS(N, o, or, H);
      return ee(Re, M == null ? void 0 : M(or));
    }, [or, M, N, o, H]);
    u.useImperativeHandle(n, function() {
      return {
        nativeElement: Fe.current,
        popupElement: at.current,
        forceAlign: fr
      };
    });
    var Qn = u.useState(0), hn = G(Qn, 2), mt = hn[0], nt = hn[1], dt = u.useState(0), Mt = G(dt, 2), At = Mt[0], xr = Mt[1], $r = function() {
      if (L && re) {
        var Ve = re.getBoundingClientRect();
        nt(Ve.width), xr(Ve.height);
      }
    }, Jn = function() {
      $r(), fr();
    }, Gt = function(Ve) {
      Wt(!1), dr(), h == null || h(Ve);
    }, rn = function() {
      return new Promise(function(Ve) {
        $r(), ce(function() {
          return Ve;
        });
      });
    };
    Et(function() {
      X && (dr(), X(), ce(null));
    }, [X]);
    function qt(Re, Ve, wt, Tt) {
      se[Re] = function(xt) {
        var Ha;
        Tt == null || Tt(xt), it(Ve, wt);
        for (var ri = arguments.length, pl = new Array(ri > 1 ? ri - 1 : 0), Wa = 1; Wa < ri; Wa++)
          pl[Wa - 1] = arguments[Wa];
        (Ha = Ie[Re]) === null || Ha === void 0 || Ha.call.apply(Ha, [Ie, xt].concat(pl));
      };
    }
    (tn || Nr) && (se.onClick = function(Re) {
      var Ve;
      Ce.current && Nr ? it(!1) : !Ce.current && tn && (vt(Re), it(!0));
      for (var wt = arguments.length, Tt = new Array(wt > 1 ? wt - 1 : 0), xt = 1; xt < wt; xt++)
        Tt[xt - 1] = arguments[xt];
      (Ve = Ie.onClick) === null || Ve === void 0 || Ve.call.apply(Ve, [Ie, Re].concat(Tt));
    }), uS(He, Nr, re, pe, w, O, de, it);
    var vr = wr.has("hover"), Wr = Tr.has("hover"), bn, ea;
    vr && (qt("onMouseEnter", !0, p, function(Re) {
      vt(Re);
    }), qt("onPointerEnter", !0, p, function(Re) {
      vt(Re);
    }), bn = function(Ve) {
      (He || Vt) && pe !== null && pe !== void 0 && pe.contains(Ve.target) && it(!0, p);
    }, H && (se.onMouseMove = function(Re) {
      var Ve;
      (Ve = Ie.onMouseMove) === null || Ve === void 0 || Ve.call(Ie, Re);
    })), Wr && (qt("onMouseLeave", !1, S), qt("onPointerLeave", !1, S), ea = function() {
      it(!1, S);
    }), wr.has("focus") && qt("onFocus", !0, b), Tr.has("focus") && qt("onBlur", !1, y), wr.has("contextMenu") && (se.onContextMenu = function(Re) {
      var Ve;
      Ce.current && Tr.has("contextMenu") ? it(!1) : (vt(Re), it(!0)), Re.preventDefault();
      for (var wt = arguments.length, Tt = new Array(wt > 1 ? wt - 1 : 0), xt = 1; xt < wt; xt++)
        Tt[xt - 1] = arguments[xt];
      (Ve = Ie.onContextMenu) === null || Ve === void 0 || Ve.call.apply(Ve, [Ie, Re].concat(Tt));
    }), fe && (se.className = ee(Ie.className, fe));
    var ta = V(V({}, Ie), se), Ba = {}, Qo = ["onContextMenu", "onClick", "onMouseDown", "onTouchStart", "onMouseEnter", "onMouseLeave", "onFocus", "onBlur"];
    Qo.forEach(function(Re) {
      k[Re] && (Ba[Re] = function() {
        for (var Ve, wt = arguments.length, Tt = new Array(wt), xt = 0; xt < wt; xt++)
          Tt[xt] = arguments[xt];
        (Ve = ta[Re]) === null || Ve === void 0 || Ve.call.apply(Ve, [ta].concat(Tt)), k[Re].apply(k, Tt);
      });
    });
    var Jo = /* @__PURE__ */ u.cloneElement(Be, V(V({}, ta), Ba)), ei = {
      x: kr,
      y: Ut
    }, ti = Q ? V({}, Q !== !0 ? Q : {}) : null;
    return /* @__PURE__ */ u.createElement(u.Fragment, null, /* @__PURE__ */ u.createElement(hr, {
      disabled: !He,
      ref: Ge,
      onResize: Jn
    }, /* @__PURE__ */ u.createElement(Tf, {
      getTriggerDOMNode: we
    }, Jo)), /* @__PURE__ */ u.createElement(Fc.Provider, {
      value: Se
    }, /* @__PURE__ */ u.createElement(Pf, {
      portal: e,
      ref: _e,
      prefixCls: o,
      popup: F,
      className: ee(j, Zn),
      style: I,
      target: re,
      onMouseEnter: bn,
      onMouseLeave: ea,
      onPointerEnter: bn,
      zIndex: E,
      open: He,
      keepDom: Vt,
      fresh: z,
      onClick: W,
      mask: w,
      motion: We,
      maskMotion: rt,
      onVisibleChanged: Gt,
      onPrepare: rn,
      forceRender: $,
      autoDestroy: le,
      getPopupContainer: _,
      align: or,
      arrow: ti,
      arrowPos: ei,
      ready: $t,
      offsetX: Kt,
      offsetY: kt,
      offsetR: gt,
      offsetB: Er,
      onAlign: fr,
      stretch: L,
      targetWidth: mt / Br,
      targetHeight: At / Xn
    })));
  });
  return process.env.NODE_ENV !== "production" && (t.displayName = "Trigger"), t;
}
const ol = fS(nl);
function Os(e, t, r) {
  return ee({
    [`${e}-status-success`]: t === "success",
    [`${e}-status-warning`]: t === "warning",
    [`${e}-status-error`]: t === "error",
    [`${e}-status-validating`]: t === "validating",
    [`${e}-has-feedback`]: r
  });
}
const Nf = (e, t) => t || e, If = function(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : void 0;
  var n, a;
  const {
    variant: o,
    [e]: i
  } = Lt(bt), s = Lt(Jb), l = i == null ? void 0 : i.variant;
  let c;
  typeof t < "u" ? c = t : r === !1 ? c = "borderless" : c = (a = (n = s ?? l) !== null && n !== void 0 ? n : o) !== null && a !== void 0 ? a : "outlined";
  const d = Pp.includes(c);
  return [c, d];
};
var vS = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z" } }] }, name: "check", theme: "outlined" }, gS = function(t, r) {
  return /* @__PURE__ */ u.createElement(ar, Me({}, t, {
    ref: r,
    icon: vS
  }));
}, Mf = /* @__PURE__ */ u.forwardRef(gS);
process.env.NODE_ENV !== "production" && (Mf.displayName = "CheckOutlined");
function Af(e) {
  var t = e.children, r = e.prefixCls, n = e.id, a = e.overlayInnerStyle, o = e.className, i = e.style;
  return /* @__PURE__ */ u.createElement("div", {
    className: ee("".concat(r, "-content"), o),
    style: i
  }, /* @__PURE__ */ u.createElement("div", {
    className: "".concat(r, "-inner"),
    id: n,
    role: "tooltip",
    style: a
  }, typeof t == "function" ? t() : t));
}
var xn = {
  shiftX: 64,
  adjustY: 1
}, $n = {
  adjustX: 1,
  shiftY: !0
}, sr = [0, 0], mS = {
  left: {
    points: ["cr", "cl"],
    overflow: $n,
    offset: [-4, 0],
    targetOffset: sr
  },
  right: {
    points: ["cl", "cr"],
    overflow: $n,
    offset: [4, 0],
    targetOffset: sr
  },
  top: {
    points: ["bc", "tc"],
    overflow: xn,
    offset: [0, -4],
    targetOffset: sr
  },
  bottom: {
    points: ["tc", "bc"],
    overflow: xn,
    offset: [0, 4],
    targetOffset: sr
  },
  topLeft: {
    points: ["bl", "tl"],
    overflow: xn,
    offset: [0, -4],
    targetOffset: sr
  },
  leftTop: {
    points: ["tr", "tl"],
    overflow: $n,
    offset: [-4, 0],
    targetOffset: sr
  },
  topRight: {
    points: ["br", "tr"],
    overflow: xn,
    offset: [0, -4],
    targetOffset: sr
  },
  rightTop: {
    points: ["tl", "tr"],
    overflow: $n,
    offset: [4, 0],
    targetOffset: sr
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: xn,
    offset: [0, 4],
    targetOffset: sr
  },
  rightBottom: {
    points: ["bl", "br"],
    overflow: $n,
    offset: [4, 0],
    targetOffset: sr
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: xn,
    offset: [0, 4],
    targetOffset: sr
  },
  leftBottom: {
    points: ["br", "bl"],
    overflow: $n,
    offset: [-4, 0],
    targetOffset: sr
  }
}, pS = ["overlayClassName", "trigger", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "prefixCls", "children", "onVisibleChange", "afterVisibleChange", "transitionName", "animation", "motion", "placement", "align", "destroyTooltipOnHide", "defaultVisible", "getTooltipContainer", "overlayInnerStyle", "arrowContent", "overlay", "id", "showArrow"], hS = function(t, r) {
  var n = t.overlayClassName, a = t.trigger, o = a === void 0 ? ["hover"] : a, i = t.mouseEnterDelay, s = i === void 0 ? 0 : i, l = t.mouseLeaveDelay, c = l === void 0 ? 0.1 : l, d = t.overlayStyle, f = t.prefixCls, v = f === void 0 ? "rc-tooltip" : f, m = t.children, h = t.onVisibleChange, p = t.afterVisibleChange, g = t.transitionName, S = t.animation, b = t.motion, y = t.placement, w = y === void 0 ? "right" : y, C = t.align, O = C === void 0 ? {} : C, _ = t.destroyTooltipOnHide, $ = _ === void 0 ? !1 : _, R = t.defaultVisible, A = t.getTooltipContainer, F = t.overlayInnerStyle;
  t.arrowContent;
  var j = t.overlay, I = t.id, T = t.showArrow, B = T === void 0 ? !0 : T, N = et(t, pS), x = ke(null);
  Mo(r, function() {
    return x.current;
  });
  var E = V({}, N);
  "visible" in t && (E.popupVisible = t.visible);
  var L = function() {
    return /* @__PURE__ */ u.createElement(Af, {
      key: "content",
      prefixCls: v,
      id: I,
      overlayInnerStyle: F
    }, j);
  };
  return /* @__PURE__ */ u.createElement(ol, Me({
    popupClassName: n,
    prefixCls: v,
    popup: L,
    action: o,
    builtinPlacements: mS,
    popupPlacement: w,
    ref: x,
    popupAlign: O,
    getPopupContainer: A,
    onPopupVisibleChange: h,
    afterPopupVisibleChange: p,
    popupTransitionName: g,
    popupAnimation: S,
    popupMotion: b,
    defaultPopupVisible: R,
    autoDestroy: $,
    mouseLeaveDelay: c,
    popupStyle: d,
    mouseEnterDelay: s,
    arrow: B
  }, E), m);
};
const bS = /* @__PURE__ */ Vr(hS);
function yS(e) {
  const {
    sizePopupArrow: t,
    borderRadiusXS: r,
    borderRadiusOuter: n
  } = e, a = t / 2, o = 0, i = a, s = n * 1 / Math.sqrt(2), l = a - n * (1 - 1 / Math.sqrt(2)), c = a - r * (1 / Math.sqrt(2)), d = n * (Math.sqrt(2) - 1) + r * (1 / Math.sqrt(2)), f = 2 * a - c, v = d, m = 2 * a - s, h = l, p = 2 * a - o, g = i, S = a * Math.sqrt(2) + n * (Math.sqrt(2) - 2), b = n * (Math.sqrt(2) - 1), y = `polygon(${b}px 100%, 50% ${b}px, ${2 * a - b}px 100%, ${b}px 100%)`, w = `path('M ${o} ${i} A ${n} ${n} 0 0 0 ${s} ${l} L ${c} ${d} A ${r} ${r} 0 0 1 ${f} ${v} L ${m} ${h} A ${n} ${n} 0 0 0 ${p} ${g} Z')`;
  return {
    arrowShadowWidth: S,
    arrowPath: w,
    arrowPolygon: y
  };
}
const SS = (e, t, r) => {
  const {
    sizePopupArrow: n,
    arrowPolygon: a,
    arrowPath: o,
    arrowShadowWidth: i,
    borderRadiusXS: s,
    calc: l
  } = e;
  return {
    pointerEvents: "none",
    width: n,
    height: n,
    overflow: "hidden",
    "&::before": {
      position: "absolute",
      bottom: 0,
      insetInlineStart: 0,
      width: n,
      height: l(n).div(2).equal(),
      background: t,
      clipPath: {
        _multi_value_: !0,
        value: [a, o]
      },
      content: '""'
    },
    "&::after": {
      content: '""',
      position: "absolute",
      width: i,
      height: i,
      bottom: 0,
      insetInline: 0,
      margin: "auto",
      borderRadius: {
        _skip_check_: !0,
        value: `0 0 ${te(s)} 0`
      },
      transform: "translateY(50%) rotate(-135deg)",
      boxShadow: r,
      zIndex: 0,
      background: "transparent"
    }
  };
}, Lf = 8;
function jf(e) {
  const {
    contentRadius: t,
    limitVerticalRadius: r
  } = e, n = t > 12 ? t + 2 : 12;
  return {
    arrowOffsetHorizontal: n,
    arrowOffsetVertical: r ? Lf : n
  };
}
function no(e, t) {
  return e ? t : {};
}
function CS(e, t, r) {
  const {
    componentCls: n,
    boxShadowPopoverArrow: a,
    arrowOffsetVertical: o,
    arrowOffsetHorizontal: i
  } = e, {
    arrowDistance: s = 0,
    arrowPlacement: l = {
      left: !0,
      right: !0,
      top: !0,
      bottom: !0
    }
  } = {};
  return {
    [n]: Object.assign(Object.assign(Object.assign(Object.assign({
      // ============================ Basic ============================
      [`${n}-arrow`]: [Object.assign(Object.assign({
        position: "absolute",
        zIndex: 1,
        display: "block"
      }, SS(e, t, a)), {
        "&:before": {
          background: t
        }
      })]
    }, no(!!l.top, {
      [[`&-placement-top > ${n}-arrow`, `&-placement-topLeft > ${n}-arrow`, `&-placement-topRight > ${n}-arrow`].join(",")]: {
        bottom: s,
        transform: "translateY(100%) rotate(180deg)"
      },
      [`&-placement-top > ${n}-arrow`]: {
        left: {
          _skip_check_: !0,
          value: "50%"
        },
        transform: "translateX(-50%) translateY(100%) rotate(180deg)"
      },
      [`&-placement-topLeft > ${n}-arrow`]: {
        left: {
          _skip_check_: !0,
          value: i
        }
      },
      [`&-placement-topRight > ${n}-arrow`]: {
        right: {
          _skip_check_: !0,
          value: i
        }
      }
    })), no(!!l.bottom, {
      [[`&-placement-bottom > ${n}-arrow`, `&-placement-bottomLeft > ${n}-arrow`, `&-placement-bottomRight > ${n}-arrow`].join(",")]: {
        top: s,
        transform: "translateY(-100%)"
      },
      [`&-placement-bottom > ${n}-arrow`]: {
        left: {
          _skip_check_: !0,
          value: "50%"
        },
        transform: "translateX(-50%) translateY(-100%)"
      },
      [`&-placement-bottomLeft > ${n}-arrow`]: {
        left: {
          _skip_check_: !0,
          value: i
        }
      },
      [`&-placement-bottomRight > ${n}-arrow`]: {
        right: {
          _skip_check_: !0,
          value: i
        }
      }
    })), no(!!l.left, {
      [[`&-placement-left > ${n}-arrow`, `&-placement-leftTop > ${n}-arrow`, `&-placement-leftBottom > ${n}-arrow`].join(",")]: {
        right: {
          _skip_check_: !0,
          value: s
        },
        transform: "translateX(100%) rotate(90deg)"
      },
      [`&-placement-left > ${n}-arrow`]: {
        top: {
          _skip_check_: !0,
          value: "50%"
        },
        transform: "translateY(-50%) translateX(100%) rotate(90deg)"
      },
      [`&-placement-leftTop > ${n}-arrow`]: {
        top: o
      },
      [`&-placement-leftBottom > ${n}-arrow`]: {
        bottom: o
      }
    })), no(!!l.right, {
      [[`&-placement-right > ${n}-arrow`, `&-placement-rightTop > ${n}-arrow`, `&-placement-rightBottom > ${n}-arrow`].join(",")]: {
        left: {
          _skip_check_: !0,
          value: s
        },
        transform: "translateX(-100%) rotate(-90deg)"
      },
      [`&-placement-right > ${n}-arrow`]: {
        top: {
          _skip_check_: !0,
          value: "50%"
        },
        transform: "translateY(-50%) translateX(-100%) rotate(-90deg)"
      },
      [`&-placement-rightTop > ${n}-arrow`]: {
        top: o
      },
      [`&-placement-rightBottom > ${n}-arrow`]: {
        bottom: o
      }
    }))
  };
}
function ES(e, t, r, n) {
  if (n === !1)
    return {
      adjustX: !1,
      adjustY: !1
    };
  const a = n && typeof n == "object" ? n : {}, o = {};
  switch (e) {
    case "top":
    case "bottom":
      o.shiftX = t.arrowOffsetHorizontal * 2 + r, o.shiftY = !0, o.adjustY = !0;
      break;
    case "left":
    case "right":
      o.shiftY = t.arrowOffsetVertical * 2 + r, o.shiftX = !0, o.adjustX = !0;
      break;
  }
  const i = Object.assign(Object.assign({}, o), a);
  return i.shiftX || (i.adjustX = !0), i.shiftY || (i.adjustY = !0), i;
}
const Wc = {
  left: {
    points: ["cr", "cl"]
  },
  right: {
    points: ["cl", "cr"]
  },
  top: {
    points: ["bc", "tc"]
  },
  bottom: {
    points: ["tc", "bc"]
  },
  topLeft: {
    points: ["bl", "tl"]
  },
  leftTop: {
    points: ["tr", "tl"]
  },
  topRight: {
    points: ["br", "tr"]
  },
  rightTop: {
    points: ["tl", "tr"]
  },
  bottomRight: {
    points: ["tr", "br"]
  },
  rightBottom: {
    points: ["bl", "br"]
  },
  bottomLeft: {
    points: ["tl", "bl"]
  },
  leftBottom: {
    points: ["br", "bl"]
  }
}, wS = {
  topLeft: {
    points: ["bl", "tc"]
  },
  leftTop: {
    points: ["tr", "cl"]
  },
  topRight: {
    points: ["br", "tc"]
  },
  rightTop: {
    points: ["tl", "cr"]
  },
  bottomRight: {
    points: ["tr", "bc"]
  },
  rightBottom: {
    points: ["bl", "cr"]
  },
  bottomLeft: {
    points: ["tl", "bc"]
  },
  leftBottom: {
    points: ["br", "cl"]
  }
}, xS = /* @__PURE__ */ new Set(["topLeft", "topRight", "bottomLeft", "bottomRight", "leftTop", "leftBottom", "rightTop", "rightBottom"]);
function $S(e) {
  const {
    arrowWidth: t,
    autoAdjustOverflow: r,
    arrowPointAtCenter: n,
    offset: a,
    borderRadius: o,
    visibleFirst: i
  } = e, s = t / 2, l = {};
  return Object.keys(Wc).forEach((c) => {
    const d = n && wS[c] || Wc[c], f = Object.assign(Object.assign({}, d), {
      offset: [0, 0],
      dynamicInset: !0
    });
    switch (l[c] = f, xS.has(c) && (f.autoArrow = !1), c) {
      case "top":
      case "topLeft":
      case "topRight":
        f.offset[1] = -s - a;
        break;
      case "bottom":
      case "bottomLeft":
      case "bottomRight":
        f.offset[1] = s + a;
        break;
      case "left":
      case "leftTop":
      case "leftBottom":
        f.offset[0] = -s - a;
        break;
      case "right":
      case "rightTop":
      case "rightBottom":
        f.offset[0] = s + a;
        break;
    }
    const v = jf({
      contentRadius: o,
      limitVerticalRadius: !0
    });
    if (n)
      switch (c) {
        case "topLeft":
        case "bottomLeft":
          f.offset[0] = -v.arrowOffsetHorizontal - s;
          break;
        case "topRight":
        case "bottomRight":
          f.offset[0] = v.arrowOffsetHorizontal + s;
          break;
        case "leftTop":
        case "rightTop":
          f.offset[1] = -v.arrowOffsetHorizontal - s;
          break;
        case "leftBottom":
        case "rightBottom":
          f.offset[1] = v.arrowOffsetHorizontal + s;
          break;
      }
    f.overflow = ES(c, v, t, r), i && (f.htmlRegion = "visibleFirst");
  }), l;
}
const OS = (e) => {
  const {
    componentCls: t,
    // ant-tooltip
    tooltipMaxWidth: r,
    tooltipColor: n,
    tooltipBg: a,
    tooltipBorderRadius: o,
    zIndexPopup: i,
    controlHeight: s,
    boxShadowSecondary: l,
    paddingSM: c,
    paddingXS: d
  } = e;
  return [
    {
      [t]: Object.assign(Object.assign(Object.assign(Object.assign({}, Un(e)), {
        position: "absolute",
        zIndex: i,
        display: "block",
        width: "max-content",
        maxWidth: r,
        visibility: "visible",
        transformOrigin: "var(--arrow-x, 50%) var(--arrow-y, 50%)",
        "&-hidden": {
          display: "none"
        },
        "--antd-arrow-background-color": a,
        // Wrapper for the tooltip content
        [`${t}-inner`]: {
          minWidth: "1em",
          minHeight: s,
          padding: `${te(e.calc(c).div(2).equal())} ${te(d)}`,
          color: n,
          textAlign: "start",
          textDecoration: "none",
          wordWrap: "break-word",
          backgroundColor: a,
          borderRadius: o,
          boxShadow: l,
          boxSizing: "border-box"
        },
        // Limit left and right placement radius
        [["&-placement-left", "&-placement-leftTop", "&-placement-leftBottom", "&-placement-right", "&-placement-rightTop", "&-placement-rightBottom"].join(",")]: {
          [`${t}-inner`]: {
            borderRadius: e.min(o, Lf)
          }
        },
        [`${t}-content`]: {
          position: "relative"
        }
      }), Qp(e, (f, v) => {
        let {
          darkColor: m
        } = v;
        return {
          [`&${t}-${f}`]: {
            [`${t}-inner`]: {
              backgroundColor: m
            },
            [`${t}-arrow`]: {
              "--antd-arrow-background-color": m
            }
          }
        };
      })), {
        // RTL
        "&-rtl": {
          direction: "rtl"
        }
      })
    },
    // Arrow Style
    CS(e, "var(--antd-arrow-background-color)"),
    // Pure Render
    {
      [`${t}-pure`]: {
        position: "relative",
        maxWidth: "none",
        margin: e.sizePopupArrow
      }
    }
  ];
}, RS = (e) => Object.assign(Object.assign({
  zIndexPopup: e.zIndexPopupBase + 70
}, jf({
  contentRadius: e.borderRadius,
  limitVerticalRadius: !0
})), yS(Zt(e, {
  borderRadiusOuter: Math.min(e.borderRadiusOuter, 4)
}))), Ff = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return en("Tooltip", (n) => {
    const {
      borderRadius: a,
      colorTextLightSolid: o,
      colorBgSpotlight: i
    } = n, s = Zt(n, {
      // default variables
      tooltipMaxWidth: 250,
      tooltipColor: o,
      tooltipBorderRadius: a,
      tooltipBg: i
    });
    return [OS(s), Ky(n, "zoom-big-fast")];
  }, RS, {
    resetStyle: !1,
    // Popover use Tooltip as internal component. We do not need to handle this.
    injectStyle: t
  })(e);
}, _S = xo.map((e) => `${e}-inverse`);
function PS(e) {
  return (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0) ? [].concat(Ee(_S), Ee(xo)).includes(e) : xo.includes(e);
}
function Df(e, t) {
  const r = PS(t), n = ee({
    [`${e}-${t}`]: t && r
  }), a = {}, o = {};
  return t && !r && (a.background = t, o["--antd-arrow-background-color"] = t), {
    className: n,
    overlayStyle: a,
    arrowStyle: o
  };
}
const TS = (e) => {
  const {
    prefixCls: t,
    className: r,
    placement: n = "top",
    title: a,
    color: o,
    overlayInnerStyle: i
  } = e, {
    getPrefixCls: s
  } = u.useContext(bt), l = s("tooltip", t), [c, d, f] = Ff(l), v = Df(l, o), m = v.arrowStyle, h = Object.assign(Object.assign({}, i), v.overlayStyle), p = ee(d, f, l, `${l}-pure`, `${l}-placement-${n}`, r, v.className);
  return c(/* @__PURE__ */ u.createElement("div", {
    className: p,
    style: m
  }, /* @__PURE__ */ u.createElement("div", {
    className: `${l}-arrow`
  }), /* @__PURE__ */ u.createElement(Af, Object.assign({}, e, {
    className: d,
    prefixCls: l,
    overlayInnerStyle: h
  }), a)));
};
var NS = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
    t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const IS = /* @__PURE__ */ u.forwardRef((e, t) => {
  var r, n;
  const {
    prefixCls: a,
    openClassName: o,
    getTooltipContainer: i,
    overlayClassName: s,
    color: l,
    overlayInnerStyle: c,
    children: d,
    afterOpenChange: f,
    afterVisibleChange: v,
    destroyTooltipOnHide: m,
    arrow: h = !0,
    title: p,
    overlay: g,
    builtinPlacements: S,
    arrowPointAtCenter: b = !1,
    autoAdjustOverflow: y = !0
  } = e, w = !!h, [, C] = Rr(), {
    getPopupContainer: O,
    getPrefixCls: _,
    direction: $
  } = u.useContext(bt), R = Ft("Tooltip"), A = u.useRef(null), F = () => {
    var he;
    (he = A.current) === null || he === void 0 || he.forceAlign();
  };
  u.useImperativeHandle(t, () => {
    var he;
    return {
      forceAlign: F,
      forcePopupAlign: () => {
        R.deprecated(!1, "forcePopupAlign", "forceAlign"), F();
      },
      nativeElement: (he = A.current) === null || he === void 0 ? void 0 : he.nativeElement
    };
  }), process.env.NODE_ENV !== "production" && ([["visible", "open"], ["defaultVisible", "defaultOpen"], ["onVisibleChange", "onOpenChange"], ["afterVisibleChange", "afterOpenChange"], ["arrowPointAtCenter", "arrow={{ pointAtCenter: true }}"]].forEach((he) => {
    let [be, Pe] = he;
    R.deprecated(!(be in e), be, Pe);
  }), process.env.NODE_ENV !== "production" && R(!m || typeof m == "boolean", "usage", "`destroyTooltipOnHide` no need config `keepParent` anymore. Please use `boolean` value directly."), process.env.NODE_ENV !== "production" && R(!h || typeof h == "boolean" || !("arrowPointAtCenter" in h), "deprecated", "`arrowPointAtCenter` in `arrow` is deprecated. Please use `pointAtCenter` instead."));
  const [j, I] = cr(!1, {
    value: (r = e.open) !== null && r !== void 0 ? r : e.visible,
    defaultValue: (n = e.defaultOpen) !== null && n !== void 0 ? n : e.defaultVisible
  }), T = !p && !g && p !== 0, B = (he) => {
    var be, Pe;
    I(T ? !1 : he), T || ((be = e.onOpenChange) === null || be === void 0 || be.call(e, he), (Pe = e.onVisibleChange) === null || Pe === void 0 || Pe.call(e, he));
  }, N = u.useMemo(() => {
    var he, be;
    let Pe = b;
    return typeof h == "object" && (Pe = (be = (he = h.pointAtCenter) !== null && he !== void 0 ? he : h.arrowPointAtCenter) !== null && be !== void 0 ? be : b), S || $S({
      arrowPointAtCenter: Pe,
      autoAdjustOverflow: y,
      arrowWidth: w ? C.sizePopupArrow : 0,
      borderRadius: C.borderRadius,
      offset: C.marginXXS,
      visibleFirst: !0
    });
  }, [b, h, S, C]), x = u.useMemo(() => p === 0 ? p : g || p || "", [g, p]), E = /* @__PURE__ */ u.createElement(xs, {
    space: !0
  }, typeof x == "function" ? x() : x), {
    getPopupContainer: L,
    placement: M = "top",
    mouseEnterDelay: z = 0.1,
    mouseLeaveDelay: H = 0.1,
    overlayStyle: W,
    rootClassName: U
  } = e, Q = NS(e, ["getPopupContainer", "placement", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "rootClassName"]), q = _("tooltip", a), J = _(), oe = e["data-popover-inject"];
  let ue = j;
  !("open" in e) && !("visible" in e) && T && (ue = !1);
  const xe = /* @__PURE__ */ u.isValidElement(d) && !Qd(d) ? d : /* @__PURE__ */ u.createElement("span", null, d), me = xe.props, fe = !me.className || typeof me.className == "string" ? ee(me.className, o || `${q}-open`) : me.className, [we, k, le] = Ff(q, !oe), ge = Df(q, l), $e = ge.arrowStyle, ye = Object.assign(Object.assign({}, c), ge.overlayStyle), ie = ee(s, {
    [`${q}-rtl`]: $ === "rtl"
  }, ge.className, U, k, le), [ne, ae] = Jh("Tooltip", Q.zIndex), Se = /* @__PURE__ */ u.createElement(bS, Object.assign({}, Q, {
    zIndex: ne,
    showArrow: w,
    placement: M,
    mouseEnterDelay: z,
    mouseLeaveDelay: H,
    prefixCls: q,
    overlayClassName: ie,
    overlayStyle: Object.assign(Object.assign({}, $e), W),
    getTooltipContainer: L || i || O,
    ref: A,
    builtinPlacements: N,
    overlay: E,
    visible: ue,
    onVisibleChange: B,
    afterVisibleChange: f ?? v,
    overlayInnerStyle: ye,
    arrowContent: /* @__PURE__ */ u.createElement("span", {
      className: `${q}-arrow-content`
    }),
    motion: {
      motionName: ef(J, "zoom-big-fast", e.transitionName),
      motionDeadline: 1e3
    },
    destroyTooltipOnHide: !!m
  }), ue ? ko(xe, {
    className: fe
  }) : xe);
  return we(/* @__PURE__ */ u.createElement(Js.Provider, {
    value: ae
  }, Se));
}), za = IS;
process.env.NODE_ENV !== "production" && (za.displayName = "Tooltip");
za._InternalPanelDoNotUseOrYouWillBeFired = TS;
var MS = ve.ESC, AS = ve.TAB;
function LS(e) {
  var t = e.visible, r = e.triggerRef, n = e.onVisibleChange, a = e.autoFocus, o = e.overlayRef, i = u.useRef(!1), s = function() {
    if (t) {
      var f, v;
      (f = r.current) === null || f === void 0 || (v = f.focus) === null || v === void 0 || v.call(f), n == null || n(!1);
    }
  }, l = function() {
    var f;
    return (f = o.current) !== null && f !== void 0 && f.focus ? (o.current.focus(), i.current = !0, !0) : !1;
  }, c = function(f) {
    switch (f.keyCode) {
      case MS:
        s();
        break;
      case AS: {
        var v = !1;
        i.current || (v = l()), v ? f.preventDefault() : s();
        break;
      }
    }
  };
  u.useEffect(function() {
    return t ? (window.addEventListener("keydown", c), a && Nt(l, 3), function() {
      window.removeEventListener("keydown", c), i.current = !1;
    }) : function() {
      i.current = !1;
    };
  }, [t]);
}
var jS = /* @__PURE__ */ Vr(function(e, t) {
  var r = e.overlay, n = e.arrow, a = e.prefixCls, o = Yr(function() {
    var s;
    return typeof r == "function" ? s = r() : s = r, s;
  }, [r]), i = _r(t, o == null ? void 0 : o.ref);
  return /* @__PURE__ */ Y.createElement(Y.Fragment, null, n && /* @__PURE__ */ Y.createElement("div", {
    className: "".concat(a, "-arrow")
  }), /* @__PURE__ */ Y.cloneElement(o, {
    ref: fn(o) ? i : void 0
  }));
}), On = {
  adjustX: 1,
  adjustY: 1
}, Rn = [0, 0], FS = {
  topLeft: {
    points: ["bl", "tl"],
    overflow: On,
    offset: [0, -4],
    targetOffset: Rn
  },
  top: {
    points: ["bc", "tc"],
    overflow: On,
    offset: [0, -4],
    targetOffset: Rn
  },
  topRight: {
    points: ["br", "tr"],
    overflow: On,
    offset: [0, -4],
    targetOffset: Rn
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: On,
    offset: [0, 4],
    targetOffset: Rn
  },
  bottom: {
    points: ["tc", "bc"],
    overflow: On,
    offset: [0, 4],
    targetOffset: Rn
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: On,
    offset: [0, 4],
    targetOffset: Rn
  }
}, DS = ["arrow", "prefixCls", "transitionName", "animation", "align", "placement", "placements", "getPopupContainer", "showAction", "hideAction", "overlayClassName", "overlayStyle", "visible", "trigger", "autoFocus", "overlay", "children", "onVisibleChange"];
function zS(e, t) {
  var r, n = e.arrow, a = n === void 0 ? !1 : n, o = e.prefixCls, i = o === void 0 ? "rc-dropdown" : o, s = e.transitionName, l = e.animation, c = e.align, d = e.placement, f = d === void 0 ? "bottomLeft" : d, v = e.placements, m = v === void 0 ? FS : v, h = e.getPopupContainer, p = e.showAction, g = e.hideAction, S = e.overlayClassName, b = e.overlayStyle, y = e.visible, w = e.trigger, C = w === void 0 ? ["hover"] : w, O = e.autoFocus, _ = e.overlay, $ = e.children, R = e.onVisibleChange, A = et(e, DS), F = Y.useState(), j = G(F, 2), I = j[0], T = j[1], B = "visible" in e ? y : I, N = Y.useRef(null), x = Y.useRef(null), E = Y.useRef(null);
  Y.useImperativeHandle(t, function() {
    return N.current;
  });
  var L = function(oe) {
    T(oe), R == null || R(oe);
  };
  LS({
    visible: B,
    triggerRef: E,
    onVisibleChange: L,
    autoFocus: O,
    overlayRef: x
  });
  var M = function(oe) {
    var ue = e.onOverlayClick;
    T(!1), ue && ue(oe);
  }, z = function() {
    return /* @__PURE__ */ Y.createElement(jS, {
      ref: x,
      overlay: _,
      prefixCls: i,
      arrow: a
    });
  }, H = function() {
    return typeof _ == "function" ? z : z();
  }, W = function() {
    var oe = e.minOverlayWidthMatchTrigger, ue = e.alignPoint;
    return "minOverlayWidthMatchTrigger" in e ? oe : !ue;
  }, U = function() {
    var oe = e.openClassName;
    return oe !== void 0 ? oe : "".concat(i, "-open");
  }, Q = /* @__PURE__ */ Y.cloneElement($, {
    className: ee((r = $.props) === null || r === void 0 ? void 0 : r.className, B && U()),
    ref: fn($) ? _r(E, $.ref) : void 0
  }), q = g;
  return !q && C.indexOf("contextMenu") !== -1 && (q = ["click"]), /* @__PURE__ */ Y.createElement(ol, Me({
    builtinPlacements: m
  }, A, {
    prefixCls: i,
    ref: N,
    popupClassName: ee(S, D({}, "".concat(i, "-show-arrow"), a)),
    popupStyle: b,
    action: C,
    showAction: p,
    hideAction: q,
    popupPlacement: f,
    popupAlign: c,
    popupTransitionName: s,
    popupAnimation: l,
    popupVisible: B,
    stretch: W() ? "minWidth" : "",
    popup: H(),
    onPopupVisibleChange: L,
    onPopupClick: M,
    getPopupContainer: h
  }), Q);
}
const VS = /* @__PURE__ */ Y.forwardRef(zS);
var zf = /* @__PURE__ */ u.createContext(null);
function Vf(e, t) {
  return e === void 0 ? null : "".concat(e, "-").concat(t);
}
function kf(e) {
  var t = u.useContext(zf);
  return Vf(t, e);
}
var kS = ["children", "locked"], Sr = /* @__PURE__ */ u.createContext(null);
function BS(e, t) {
  var r = V({}, e);
  return Object.keys(t).forEach(function(n) {
    var a = t[n];
    a !== void 0 && (r[n] = a);
  }), r;
}
function Na(e) {
  var t = e.children, r = e.locked, n = et(e, kS), a = u.useContext(Sr), o = Ao(function() {
    return BS(a, n);
  }, [a, n], function(i, s) {
    return !r && (i[0] !== s[0] || !Ea(i[1], s[1], !0));
  });
  return /* @__PURE__ */ u.createElement(Sr.Provider, {
    value: o
  }, t);
}
var HS = [], Bf = /* @__PURE__ */ u.createContext(null);
function Uo() {
  return u.useContext(Bf);
}
var Hf = /* @__PURE__ */ u.createContext(HS);
function Va(e) {
  var t = u.useContext(Hf);
  return u.useMemo(function() {
    return e !== void 0 ? [].concat(Ee(t), [e]) : t;
  }, [t, e]);
}
var Wf = /* @__PURE__ */ u.createContext(null), il = /* @__PURE__ */ u.createContext({});
function Kc(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  if (el(e)) {
    var r = e.nodeName.toLowerCase(), n = (
      // Focusable element
      ["input", "select", "textarea", "button"].includes(r) || // Editable element
      e.isContentEditable || // Anchor with href element
      r === "a" && !!e.getAttribute("href")
    ), a = e.getAttribute("tabindex"), o = Number(a), i = null;
    return a && !Number.isNaN(o) ? i = o : n && i === null && (i = 0), n && e.disabled && (i = null), i !== null && (i >= 0 || t && i < 0);
  }
  return !1;
}
function WS(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, r = Ee(e.querySelectorAll("*")).filter(function(n) {
    return Kc(n, t);
  });
  return Kc(e, t) && r.unshift(e), r;
}
var Rs = ve.LEFT, _s = ve.RIGHT, Ps = ve.UP, ho = ve.DOWN, bo = ve.ENTER, Kf = ve.ESC, sa = ve.HOME, la = ve.END, Uc = [Ps, ho, Rs, _s];
function KS(e, t, r, n) {
  var a, o, i, s, l = "prev", c = "next", d = "children", f = "parent";
  if (e === "inline" && n === bo)
    return {
      inlineTrigger: !0
    };
  var v = (a = {}, D(a, Ps, l), D(a, ho, c), a), m = (o = {}, D(o, Rs, r ? c : l), D(o, _s, r ? l : c), D(o, ho, d), D(o, bo, d), o), h = (i = {}, D(i, Ps, l), D(i, ho, c), D(i, bo, d), D(i, Kf, f), D(i, Rs, r ? d : f), D(i, _s, r ? f : d), i), p = {
    inline: v,
    horizontal: m,
    vertical: h,
    inlineSub: v,
    horizontalSub: h,
    verticalSub: h
  }, g = (s = p["".concat(e).concat(t ? "" : "Sub")]) === null || s === void 0 ? void 0 : s[n];
  switch (g) {
    case l:
      return {
        offset: -1,
        sibling: !0
      };
    case c:
      return {
        offset: 1,
        sibling: !0
      };
    case f:
      return {
        offset: -1,
        sibling: !1
      };
    case d:
      return {
        offset: 1,
        sibling: !1
      };
    default:
      return null;
  }
}
function US(e) {
  for (var t = e; t; ) {
    if (t.getAttribute("data-menu-list"))
      return t;
    t = t.parentElement;
  }
  return null;
}
function GS(e, t) {
  for (var r = e || document.activeElement; r; ) {
    if (t.has(r))
      return r;
    r = r.parentElement;
  }
  return null;
}
function sl(e, t) {
  var r = WS(e, !0);
  return r.filter(function(n) {
    return t.has(n);
  });
}
function Gc(e, t, r) {
  var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 1;
  if (!e)
    return null;
  var a = sl(e, t), o = a.length, i = a.findIndex(function(s) {
    return r === s;
  });
  return n < 0 ? i === -1 ? i = o - 1 : i -= 1 : n > 0 && (i += 1), i = (i + o) % o, a[i];
}
var Ts = function(t, r) {
  var n = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
  return t.forEach(function(i) {
    var s = document.querySelector("[data-menu-id='".concat(Vf(r, i), "']"));
    s && (n.add(s), o.set(s, i), a.set(i, s));
  }), {
    elements: n,
    key2element: a,
    element2key: o
  };
};
function qS(e, t, r, n, a, o, i, s, l, c) {
  var d = u.useRef(), f = u.useRef();
  f.current = t;
  var v = function() {
    Nt.cancel(d.current);
  };
  return u.useEffect(function() {
    return function() {
      v();
    };
  }, []), function(m) {
    var h = m.which;
    if ([].concat(Uc, [bo, Kf, sa, la]).includes(h)) {
      var p = o(), g = Ts(p, n), S = g, b = S.elements, y = S.key2element, w = S.element2key, C = y.get(t), O = GS(C, b), _ = w.get(O), $ = KS(e, i(_, !0).length === 1, r, h);
      if (!$ && h !== sa && h !== la)
        return;
      (Uc.includes(h) || [sa, la].includes(h)) && m.preventDefault();
      var R = function(x) {
        if (x) {
          var E = x, L = x.querySelector("a");
          L != null && L.getAttribute("href") && (E = L);
          var M = w.get(x);
          s(M), v(), d.current = Nt(function() {
            f.current === M && E.focus();
          });
        }
      };
      if ([sa, la].includes(h) || $.sibling || !O) {
        var A;
        !O || e === "inline" ? A = a.current : A = US(O);
        var F, j = sl(A, b);
        h === sa ? F = j[0] : h === la ? F = j[j.length - 1] : F = Gc(A, b, O, $.offset), R(F);
      } else if ($.inlineTrigger)
        l(_);
      else if ($.offset > 0)
        l(_, !0), v(), d.current = Nt(function() {
          g = Ts(p, n);
          var N = O.getAttribute("aria-controls"), x = document.getElementById(N), E = Gc(x, g.elements);
          R(E);
        }, 5);
      else if ($.offset < 0) {
        var I = i(_, !0), T = I[I.length - 2], B = y.get(T);
        l(T, !1), R(B);
      }
    }
    c == null || c(m);
  };
}
function XS(e) {
  Promise.resolve().then(e);
}
var ll = "__RC_UTIL_PATH_SPLIT__", qc = function(t) {
  return t.join(ll);
}, YS = function(t) {
  return t.split(ll);
}, Ns = "rc-menu-more";
function ZS() {
  var e = u.useState({}), t = G(e, 2), r = t[1], n = ke(/* @__PURE__ */ new Map()), a = ke(/* @__PURE__ */ new Map()), o = u.useState([]), i = G(o, 2), s = i[0], l = i[1], c = ke(0), d = ke(!1), f = function() {
    d.current || r({});
  }, v = Gr(function(y, w) {
    process.env.NODE_ENV !== "production" && ot(!n.current.has(y), "Duplicated key '".concat(y, "' used in Menu by path [").concat(w.join(" > "), "]"));
    var C = qc(w);
    a.current.set(C, y), n.current.set(y, C), c.current += 1;
    var O = c.current;
    XS(function() {
      O === c.current && f();
    });
  }, []), m = Gr(function(y, w) {
    var C = qc(w);
    a.current.delete(C), n.current.delete(y);
  }, []), h = Gr(function(y) {
    l(y);
  }, []), p = Gr(function(y, w) {
    var C = n.current.get(y) || "", O = YS(C);
    return w && s.includes(O[0]) && O.unshift(Ns), O;
  }, [s]), g = Gr(function(y, w) {
    return y.filter(function(C) {
      return C !== void 0;
    }).some(function(C) {
      var O = p(C, !0);
      return O.includes(w);
    });
  }, [p]), S = function() {
    var w = Ee(n.current.keys());
    return s.length && w.push(Ns), w;
  }, b = Gr(function(y) {
    var w = "".concat(n.current.get(y)).concat(ll), C = /* @__PURE__ */ new Set();
    return Ee(a.current.keys()).forEach(function(O) {
      O.startsWith(w) && C.add(a.current.get(O));
    }), C;
  }, []);
  return u.useEffect(function() {
    return function() {
      d.current = !0;
    };
  }, []), {
    // Register
    registerPath: v,
    unregisterPath: m,
    refreshOverflowKeys: h,
    // Util
    isSubPathKey: g,
    getKeyPath: p,
    getKeys: S,
    getSubPathKeys: b
  };
}
function ua(e) {
  var t = u.useRef(e);
  t.current = e;
  var r = u.useCallback(function() {
    for (var n, a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return (n = t.current) === null || n === void 0 ? void 0 : n.call.apply(n, [t].concat(o));
  }, []);
  return e ? r : void 0;
}
var QS = Math.random().toFixed(5).toString().slice(2), Xc = 0;
function JS(e) {
  var t = cr(e, {
    value: e
  }), r = G(t, 2), n = r[0], a = r[1];
  return u.useEffect(function() {
    Xc += 1;
    var o = process.env.NODE_ENV === "test" ? "test" : "".concat(QS, "-").concat(Xc);
    a("rc-menu-uuid-".concat(o));
  }, []), n;
}
function Uf(e, t, r, n) {
  var a = u.useContext(Sr), o = a.activeKey, i = a.onActive, s = a.onInactive, l = {
    active: o === e
  };
  return t || (l.onMouseEnter = function(c) {
    r == null || r({
      key: e,
      domEvent: c
    }), i(e);
  }, l.onMouseLeave = function(c) {
    n == null || n({
      key: e,
      domEvent: c
    }), s(e);
  }), l;
}
function Gf(e) {
  var t = u.useContext(Sr), r = t.mode, n = t.rtl, a = t.inlineIndent;
  if (r !== "inline")
    return null;
  var o = e;
  return n ? {
    paddingRight: o * a
  } : {
    paddingLeft: o * a
  };
}
function qf(e) {
  var t = e.icon, r = e.props, n = e.children, a;
  return t === null || t === !1 ? null : (typeof t == "function" ? a = /* @__PURE__ */ u.createElement(t, V({}, r)) : typeof t != "boolean" && (a = t), a || n || null);
}
var eC = ["item"];
function To(e) {
  var t = e.item, r = et(e, eC);
  return Object.defineProperty(r, "item", {
    get: function() {
      return ot(!1, "`info.item` is deprecated since we will move to function component that not provides React Node instance in future."), t;
    }
  }), r;
}
var tC = ["title", "attribute", "elementRef"], rC = ["style", "className", "eventKey", "warnKey", "disabled", "itemIcon", "children", "role", "onMouseEnter", "onMouseLeave", "onClick", "onKeyDown", "onFocus"], nC = ["active"], aC = /* @__PURE__ */ function(e) {
  Qr(r, e);
  var t = Jr(r);
  function r() {
    return Dt(this, r), t.apply(this, arguments);
  }
  return zt(r, [{
    key: "render",
    value: function() {
      var a = this.props, o = a.title, i = a.attribute, s = a.elementRef, l = et(a, tC), c = Cr(l, ["eventKey", "popupClassName", "popupOffset", "onTitleClick"]);
      return ot(!i, "`attribute` of Menu.Item is deprecated. Please pass attribute directly."), /* @__PURE__ */ u.createElement(Dr.Item, Me({}, i, {
        title: typeof o == "string" ? o : void 0
      }, c, {
        ref: s
      }));
    }
  }]), r;
}(u.Component), oC = /* @__PURE__ */ u.forwardRef(function(e, t) {
  var r, n = e.style, a = e.className, o = e.eventKey, i = e.warnKey, s = e.disabled, l = e.itemIcon, c = e.children, d = e.role, f = e.onMouseEnter, v = e.onMouseLeave, m = e.onClick, h = e.onKeyDown, p = e.onFocus, g = et(e, rC), S = kf(o), b = u.useContext(Sr), y = b.prefixCls, w = b.onItemClick, C = b.disabled, O = b.overflowDisabled, _ = b.itemIcon, $ = b.selectedKeys, R = b.onActive, A = u.useContext(il), F = A._internalRenderMenuItem, j = "".concat(y, "-item"), I = u.useRef(), T = u.useRef(), B = C || s, N = Ia(t, T), x = Va(o);
  process.env.NODE_ENV !== "production" && i && ot(!1, "MenuItem should not leave undefined `key`.");
  var E = function(me) {
    return {
      key: o,
      // Note: For legacy code is reversed which not like other antd component
      keyPath: Ee(x).reverse(),
      item: I.current,
      domEvent: me
    };
  }, L = l || _, M = Uf(o, B, f, v), z = M.active, H = et(M, nC), W = $.includes(o), U = Gf(x.length), Q = function(me) {
    if (!B) {
      var fe = E(me);
      m == null || m(To(fe)), w(fe);
    }
  }, q = function(me) {
    if (h == null || h(me), me.which === ve.ENTER) {
      var fe = E(me);
      m == null || m(To(fe)), w(fe);
    }
  }, J = function(me) {
    R(o), p == null || p(me);
  }, oe = {};
  e.role === "option" && (oe["aria-selected"] = W);
  var ue = /* @__PURE__ */ u.createElement(aC, Me({
    ref: I,
    elementRef: N,
    role: d === null ? "none" : d || "menuitem",
    tabIndex: s ? null : -1,
    "data-menu-id": O && S ? null : S
  }, g, H, oe, {
    component: "li",
    "aria-disabled": s,
    style: V(V({}, U), n),
    className: ee(j, (r = {}, D(r, "".concat(j, "-active"), z), D(r, "".concat(j, "-selected"), W), D(r, "".concat(j, "-disabled"), B), r), a),
    onClick: Q,
    onKeyDown: q,
    onFocus: J
  }), c, /* @__PURE__ */ u.createElement(qf, {
    props: V(V({}, e), {}, {
      isSelected: W
    }),
    icon: L
  }));
  return F && (ue = F(ue, e, {
    selected: W
  })), ue;
});
function iC(e, t) {
  var r = e.eventKey, n = Uo(), a = Va(r);
  return u.useEffect(function() {
    if (n)
      return n.registerPath(r, a), function() {
        n.unregisterPath(r, a);
      };
  }, [a]), n ? null : /* @__PURE__ */ u.createElement(oC, Me({}, e, {
    ref: t
  }));
}
const Go = /* @__PURE__ */ u.forwardRef(iC);
var sC = ["className", "children"], lC = function(t, r) {
  var n = t.className, a = t.children, o = et(t, sC), i = u.useContext(Sr), s = i.prefixCls, l = i.mode, c = i.rtl;
  return /* @__PURE__ */ u.createElement("ul", Me({
    className: ee(s, c && "".concat(s, "-rtl"), "".concat(s, "-sub"), "".concat(s, "-").concat(l === "inline" ? "inline" : "vertical"), n),
    role: "menu"
  }, o, {
    "data-menu-list": !0,
    ref: r
  }), a);
}, cl = /* @__PURE__ */ u.forwardRef(lC);
cl.displayName = "SubMenuList";
function ul(e, t) {
  return Zr(e).map(function(r, n) {
    if (/* @__PURE__ */ u.isValidElement(r)) {
      var a, o, i = r.key, s = (a = (o = r.props) === null || o === void 0 ? void 0 : o.eventKey) !== null && a !== void 0 ? a : i, l = s == null;
      l && (s = "tmp_key-".concat([].concat(Ee(t), [n]).join("-")));
      var c = {
        key: s,
        eventKey: s
      };
      return process.env.NODE_ENV !== "production" && l && (c.warnKey = !0), /* @__PURE__ */ u.cloneElement(r, c);
    }
    return r;
  });
}
var Bt = {
  adjustX: 1,
  adjustY: 1
}, cC = {
  topLeft: {
    points: ["bl", "tl"],
    overflow: Bt
  },
  topRight: {
    points: ["br", "tr"],
    overflow: Bt
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: Bt
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: Bt
  },
  leftTop: {
    points: ["tr", "tl"],
    overflow: Bt
  },
  leftBottom: {
    points: ["br", "bl"],
    overflow: Bt
  },
  rightTop: {
    points: ["tl", "tr"],
    overflow: Bt
  },
  rightBottom: {
    points: ["bl", "br"],
    overflow: Bt
  }
}, uC = {
  topLeft: {
    points: ["bl", "tl"],
    overflow: Bt
  },
  topRight: {
    points: ["br", "tr"],
    overflow: Bt
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: Bt
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: Bt
  },
  rightTop: {
    points: ["tr", "tl"],
    overflow: Bt
  },
  rightBottom: {
    points: ["br", "bl"],
    overflow: Bt
  },
  leftTop: {
    points: ["tl", "tr"],
    overflow: Bt
  },
  leftBottom: {
    points: ["bl", "br"],
    overflow: Bt
  }
};
function Xf(e, t, r) {
  if (t)
    return t;
  if (r)
    return r[e] || r.other;
}
var dC = {
  horizontal: "bottomLeft",
  vertical: "rightTop",
  "vertical-left": "rightTop",
  "vertical-right": "leftTop"
};
function fC(e) {
  var t = e.prefixCls, r = e.visible, n = e.children, a = e.popup, o = e.popupStyle, i = e.popupClassName, s = e.popupOffset, l = e.disabled, c = e.mode, d = e.onVisibleChange, f = u.useContext(Sr), v = f.getPopupContainer, m = f.rtl, h = f.subMenuOpenDelay, p = f.subMenuCloseDelay, g = f.builtinPlacements, S = f.triggerSubMenuAction, b = f.forceSubMenuRender, y = f.rootClassName, w = f.motion, C = f.defaultMotions, O = u.useState(!1), _ = G(O, 2), $ = _[0], R = _[1], A = V(m ? V({}, uC) : V({}, cC), g), F = dC[c], j = Xf(c, w, C), I = u.useRef(j);
  c !== "inline" && (I.current = j);
  var T = V(V({}, I.current), {}, {
    leavedClassName: "".concat(t, "-hidden"),
    removeOnLeave: !1,
    motionAppear: !0
  }), B = u.useRef();
  return u.useEffect(function() {
    return B.current = Nt(function() {
      R(r);
    }), function() {
      Nt.cancel(B.current);
    };
  }, [r]), /* @__PURE__ */ u.createElement(ol, {
    prefixCls: t,
    popupClassName: ee("".concat(t, "-popup"), D({}, "".concat(t, "-rtl"), m), i, y),
    stretch: c === "horizontal" ? "minWidth" : null,
    getPopupContainer: v,
    builtinPlacements: A,
    popupPlacement: F,
    popupVisible: $,
    popup: a,
    popupStyle: o,
    popupAlign: s && {
      offset: s
    },
    action: l ? [] : [S],
    mouseEnterDelay: h,
    mouseLeaveDelay: p,
    onPopupVisibleChange: d,
    forceRender: b,
    popupMotion: T,
    fresh: !0
  }, n);
}
function vC(e) {
  var t = e.id, r = e.open, n = e.keyPath, a = e.children, o = "inline", i = u.useContext(Sr), s = i.prefixCls, l = i.forceSubMenuRender, c = i.motion, d = i.defaultMotions, f = i.mode, v = u.useRef(!1);
  v.current = f === o;
  var m = u.useState(!v.current), h = G(m, 2), p = h[0], g = h[1], S = v.current ? r : !1;
  u.useEffect(function() {
    v.current && g(!1);
  }, [f]);
  var b = V({}, Xf(o, c, d));
  n.length > 1 && (b.motionAppear = !1);
  var y = b.onVisibleChanged;
  return b.onVisibleChanged = function(w) {
    return !v.current && !w && g(!0), y == null ? void 0 : y(w);
  }, p ? null : /* @__PURE__ */ u.createElement(Na, {
    mode: o,
    locked: !v.current
  }, /* @__PURE__ */ u.createElement(vn, Me({
    visible: S
  }, b, {
    forceRender: l,
    removeOnLeave: !1,
    leavedClassName: "".concat(s, "-hidden")
  }), function(w) {
    var C = w.className, O = w.style;
    return /* @__PURE__ */ u.createElement(cl, {
      id: t,
      className: C,
      style: O
    }, a);
  }));
}
var gC = ["style", "className", "title", "eventKey", "warnKey", "disabled", "internalPopupClose", "children", "itemIcon", "expandIcon", "popupClassName", "popupOffset", "popupStyle", "onClick", "onMouseEnter", "onMouseLeave", "onTitleClick", "onTitleMouseEnter", "onTitleMouseLeave"], mC = ["active"], pC = /* @__PURE__ */ u.forwardRef(function(e, t) {
  var r, n = e.style, a = e.className, o = e.title, i = e.eventKey, s = e.warnKey, l = e.disabled, c = e.internalPopupClose, d = e.children, f = e.itemIcon, v = e.expandIcon, m = e.popupClassName, h = e.popupOffset, p = e.popupStyle, g = e.onClick, S = e.onMouseEnter, b = e.onMouseLeave, y = e.onTitleClick, w = e.onTitleMouseEnter, C = e.onTitleMouseLeave, O = et(e, gC), _ = kf(i), $ = u.useContext(Sr), R = $.prefixCls, A = $.mode, F = $.openKeys, j = $.disabled, I = $.overflowDisabled, T = $.activeKey, B = $.selectedKeys, N = $.itemIcon, x = $.expandIcon, E = $.onItemClick, L = $.onOpenChange, M = $.onActive, z = u.useContext(il), H = z._internalRenderSubMenuItem, W = u.useContext(Wf), U = W.isSubPathKey, Q = Va(), q = "".concat(R, "-submenu"), J = j || l, oe = u.useRef(), ue = u.useRef();
  process.env.NODE_ENV !== "production" && s && ot(!1, "SubMenu should not leave undefined `key`.");
  var xe = f ?? N, me = v ?? x, fe = F.includes(i), we = !I && fe, k = U(B, i), le = Uf(i, J, w, C), ge = le.active, $e = et(le, mC), ye = u.useState(!1), ie = G(ye, 2), ne = ie[0], ae = ie[1], Se = function(Ie) {
    J || ae(Ie);
  }, he = function(Ie) {
    Se(!0), S == null || S({
      key: i,
      domEvent: Ie
    });
  }, be = function(Ie) {
    Se(!1), b == null || b({
      key: i,
      domEvent: Ie
    });
  }, Pe = u.useMemo(function() {
    return ge || (A !== "inline" ? ne || U([T], i) : !1);
  }, [A, ge, T, ne, i, U]), pe = Gf(Q.length), ct = function(Ie) {
    J || (y == null || y({
      key: i,
      domEvent: Ie
    }), A === "inline" && L(i, !fe));
  }, at = ua(function(Be) {
    g == null || g(To(Be)), E(Be);
  }), _e = function(Ie) {
    A !== "inline" && L(i, Ie);
  }, Oe = function() {
    M(i);
  }, Z = _ && "".concat(_, "-popup"), re = /* @__PURE__ */ u.createElement("div", Me({
    role: "menuitem",
    style: pe,
    className: "".concat(q, "-title"),
    tabIndex: J ? null : -1,
    ref: oe,
    title: typeof o == "string" ? o : null,
    "data-menu-id": I && _ ? null : _,
    "aria-expanded": we,
    "aria-haspopup": !0,
    "aria-controls": Z,
    "aria-disabled": J,
    onClick: ct,
    onFocus: Oe
  }, $e), o, /* @__PURE__ */ u.createElement(qf, {
    icon: A !== "horizontal" ? me : void 0,
    props: V(V({}, e), {}, {
      isOpen: we,
      // [Legacy] Not sure why need this mark
      isSubMenu: !0
    })
  }, /* @__PURE__ */ u.createElement("i", {
    className: "".concat(q, "-arrow")
  }))), Te = u.useRef(A);
  if (A !== "inline" && Q.length > 1 ? Te.current = "vertical" : Te.current = A, !I) {
    var Fe = Te.current;
    re = /* @__PURE__ */ u.createElement(fC, {
      mode: Fe,
      prefixCls: q,
      visible: !c && we && A !== "inline",
      popupClassName: m,
      popupOffset: h,
      popupStyle: p,
      popup: /* @__PURE__ */ u.createElement(
        Na,
        {
          mode: Fe === "horizontal" ? "vertical" : Fe
        },
        /* @__PURE__ */ u.createElement(cl, {
          id: Z,
          ref: ue
        }, d)
      ),
      disabled: J,
      onVisibleChange: _e
    }, re);
  }
  var Ge = /* @__PURE__ */ u.createElement(Dr.Item, Me({
    ref: t,
    role: "none"
  }, O, {
    component: "li",
    style: n,
    className: ee(q, "".concat(q, "-").concat(A), a, (r = {}, D(r, "".concat(q, "-open"), we), D(r, "".concat(q, "-active"), Pe), D(r, "".concat(q, "-selected"), k), D(r, "".concat(q, "-disabled"), J), r)),
    onMouseEnter: he,
    onMouseLeave: be
  }), re, !I && /* @__PURE__ */ u.createElement(vC, {
    id: Z,
    open: we,
    keyPath: Q
  }, d));
  return H && (Ge = H(Ge, e, {
    selected: k,
    active: Pe,
    open: we,
    disabled: J
  })), /* @__PURE__ */ u.createElement(Na, {
    onItemClick: at,
    mode: A === "horizontal" ? "vertical" : A,
    itemIcon: xe,
    expandIcon: me
  }, Ge);
}), qo = /* @__PURE__ */ u.forwardRef(function(e, t) {
  var r = e.eventKey, n = e.children, a = Va(r), o = ul(n, a), i = Uo();
  u.useEffect(function() {
    if (i)
      return i.registerPath(r, a), function() {
        i.unregisterPath(r, a);
      };
  }, [a]);
  var s;
  return i ? s = o : s = /* @__PURE__ */ u.createElement(pC, Me({
    ref: t
  }, e), o), /* @__PURE__ */ u.createElement(Hf.Provider, {
    value: a
  }, s);
});
process.env.NODE_ENV !== "production" && (qo.displayName = "SubMenu");
function Yf(e) {
  var t = e.className, r = e.style, n = u.useContext(Sr), a = n.prefixCls, o = Uo();
  return o ? null : /* @__PURE__ */ u.createElement("li", {
    role: "separator",
    className: ee("".concat(a, "-item-divider"), t),
    style: r
  });
}
var hC = ["className", "title", "eventKey", "children"], bC = /* @__PURE__ */ u.forwardRef(function(e, t) {
  var r = e.className, n = e.title;
  e.eventKey;
  var a = e.children, o = et(e, hC), i = u.useContext(Sr), s = i.prefixCls, l = "".concat(s, "-item-group");
  return /* @__PURE__ */ u.createElement("li", Me({
    ref: t,
    role: "presentation"
  }, o, {
    onClick: function(d) {
      return d.stopPropagation();
    },
    className: ee(l, r)
  }), /* @__PURE__ */ u.createElement("div", {
    role: "presentation",
    className: "".concat(l, "-title"),
    title: typeof n == "string" ? n : void 0
  }, n), /* @__PURE__ */ u.createElement("ul", {
    role: "group",
    className: "".concat(l, "-list")
  }, a));
}), dl = /* @__PURE__ */ u.forwardRef(function(e, t) {
  var r = e.eventKey, n = e.children, a = Va(r), o = ul(n, a), i = Uo();
  return i ? o : /* @__PURE__ */ u.createElement(bC, Me({
    ref: t
  }, Cr(e, ["warnKey"])), o);
});
process.env.NODE_ENV !== "production" && (dl.displayName = "MenuItemGroup");
var yC = ["label", "children", "key", "type"];
function Is(e, t) {
  var r = t.item, n = t.group, a = t.submenu, o = t.divider;
  return (e || []).map(function(i, s) {
    if (i && ze(i) === "object") {
      var l = i, c = l.label, d = l.children, f = l.key, v = l.type, m = et(l, yC), h = f ?? "tmp-".concat(s);
      return d || v === "group" ? v === "group" ? /* @__PURE__ */ u.createElement(n, Me({
        key: h
      }, m, {
        title: c
      }), Is(d, t)) : /* @__PURE__ */ u.createElement(a, Me({
        key: h
      }, m, {
        title: c
      }), Is(d, t)) : v === "divider" ? /* @__PURE__ */ u.createElement(o, Me({
        key: h
      }, m)) : /* @__PURE__ */ u.createElement(r, Me({
        key: h
      }, m), c);
    }
    return null;
  }).filter(function(i) {
    return i;
  });
}
function Yc(e, t, r, n) {
  var a = e, o = V({
    divider: Yf,
    item: Go,
    group: dl,
    submenu: qo
  }, n);
  return t && (a = Is(t, o)), ul(a, r);
}
var SC = ["prefixCls", "rootClassName", "style", "className", "tabIndex", "items", "children", "direction", "id", "mode", "inlineCollapsed", "disabled", "disabledOverflow", "subMenuOpenDelay", "subMenuCloseDelay", "forceSubMenuRender", "defaultOpenKeys", "openKeys", "activeKey", "defaultActiveFirst", "selectable", "multiple", "defaultSelectedKeys", "selectedKeys", "onSelect", "onDeselect", "inlineIndent", "motion", "defaultMotions", "triggerSubMenuAction", "builtinPlacements", "itemIcon", "expandIcon", "overflowedIndicator", "overflowedIndicatorPopupClassName", "getPopupContainer", "onClick", "onOpenChange", "onKeyDown", "openAnimation", "openTransitionName", "_internalRenderMenuItem", "_internalRenderSubMenuItem", "_internalComponents"], nn = [], CC = /* @__PURE__ */ u.forwardRef(function(e, t) {
  var r, n, a = e, o = a.prefixCls, i = o === void 0 ? "rc-menu" : o, s = a.rootClassName, l = a.style, c = a.className, d = a.tabIndex, f = d === void 0 ? 0 : d, v = a.items, m = a.children, h = a.direction, p = a.id, g = a.mode, S = g === void 0 ? "vertical" : g, b = a.inlineCollapsed, y = a.disabled, w = a.disabledOverflow, C = a.subMenuOpenDelay, O = C === void 0 ? 0.1 : C, _ = a.subMenuCloseDelay, $ = _ === void 0 ? 0.1 : _, R = a.forceSubMenuRender, A = a.defaultOpenKeys, F = a.openKeys, j = a.activeKey, I = a.defaultActiveFirst, T = a.selectable, B = T === void 0 ? !0 : T, N = a.multiple, x = N === void 0 ? !1 : N, E = a.defaultSelectedKeys, L = a.selectedKeys, M = a.onSelect, z = a.onDeselect, H = a.inlineIndent, W = H === void 0 ? 24 : H, U = a.motion, Q = a.defaultMotions, q = a.triggerSubMenuAction, J = q === void 0 ? "hover" : q, oe = a.builtinPlacements, ue = a.itemIcon, xe = a.expandIcon, me = a.overflowedIndicator, fe = me === void 0 ? "..." : me, we = a.overflowedIndicatorPopupClassName, k = a.getPopupContainer, le = a.onClick, ge = a.onOpenChange, $e = a.onKeyDown, ye = a.openAnimation, ie = a.openTransitionName, ne = a._internalRenderMenuItem, ae = a._internalRenderSubMenuItem, Se = a._internalComponents, he = et(a, SC), be = u.useMemo(function() {
    return [Yc(m, v, nn, Se), Yc(m, v, nn, {})];
  }, [m, v, Se]), Pe = G(be, 2), pe = Pe[0], ct = Pe[1], at = u.useState(!1), _e = G(at, 2), Oe = _e[0], Z = _e[1], re = u.useRef(), Te = JS(p), Fe = h === "rtl";
  process.env.NODE_ENV !== "production" && ot(!ye && !ie, "`openAnimation` and `openTransitionName` is removed. Please use `motion` or `defaultMotion` instead.");
  var Ge = cr(A, {
    value: F,
    postState: function(nt) {
      return nt || nn;
    }
  }), Be = G(Ge, 2), Ie = Be[0], se = Be[1], de = function(nt) {
    var dt = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    function Mt() {
      se(nt), ge == null || ge(nt);
    }
    dt ? Dv(Mt) : Mt();
  }, We = u.useState(Ie), rt = G(We, 2), Ct = rt[0], ut = rt[1], qe = u.useRef(!1), Ue = u.useMemo(function() {
    return (S === "inline" || S === "vertical") && b ? ["vertical", b] : [S, !1];
  }, [S, b]), He = G(Ue, 2), Ae = He[0], Ce = He[1], Qe = Ae === "inline", yt = u.useState(Ae), Xe = G(yt, 2), Ye = Xe[0], it = Xe[1], St = u.useState(Ce), Pt = G(St, 2), Vt = Pt[0], Wt = Pt[1];
  u.useEffect(function() {
    it(Ae), Wt(Ce), qe.current && (Qe ? se(Ct) : de(nn));
  }, [Ae, Ce]);
  var P = u.useState(0), K = G(P, 2), X = K[0], ce = K[1], Le = X >= pe.length - 1 || Ye !== "horizontal" || w;
  u.useEffect(function() {
    Qe && ut(Ie);
  }, [Ie]), u.useEffect(function() {
    return qe.current = !0, function() {
      qe.current = !1;
    };
  }, []);
  var Ne = ZS(), je = Ne.registerPath, De = Ne.unregisterPath, vt = Ne.refreshOverflowKeys, tt = Ne.isSubPathKey, Ke = Ne.getKeyPath, $t = Ne.getKeys, Kt = Ne.getSubPathKeys, kt = u.useMemo(function() {
    return {
      registerPath: je,
      unregisterPath: De
    };
  }, [je, De]), gt = u.useMemo(function() {
    return {
      isSubPathKey: tt
    };
  }, [tt]);
  u.useEffect(function() {
    vt(Le ? nn : pe.slice(X + 1).map(function(mt) {
      return mt.key;
    }));
  }, [X, Le]);
  var Er = cr(j || I && ((r = pe[0]) === null || r === void 0 ? void 0 : r.key), {
    value: j
  }), kr = G(Er, 2), Ut = kr[0], Br = kr[1], Xn = ua(function(mt) {
    Br(mt);
  }), or = ua(function() {
    Br(void 0);
  });
  Mo(t, function() {
    return {
      list: re.current,
      focus: function(nt) {
        var dt, Mt = $t(), At = Ts(Mt, Te), xr = At.elements, $r = At.key2element, Jn = At.element2key, Gt = sl(re.current, xr), rn = Ut ?? (Gt[0] ? Jn.get(Gt[0]) : (dt = pe.find(function(Wr) {
          return !Wr.props.disabled;
        })) === null || dt === void 0 ? void 0 : dt.key), qt = $r.get(rn);
        if (rn && qt) {
          var vr;
          qt == null || (vr = qt.focus) === null || vr === void 0 || vr.call(qt, nt);
        }
      }
    };
  });
  var dr = cr(E || [], {
    value: L,
    // Legacy convert key to array
    postState: function(nt) {
      return Array.isArray(nt) ? nt : nt == null ? nn : [nt];
    }
  }), Hr = G(dr, 2), Pr = Hr[0], wr = Hr[1], Tr = function(nt) {
    if (B) {
      var dt = nt.key, Mt = Pr.includes(dt), At;
      x ? Mt ? At = Pr.filter(function($r) {
        return $r !== dt;
      }) : At = [].concat(Ee(Pr), [dt]) : At = [dt], wr(At);
      var xr = V(V({}, nt), {}, {
        selectedKeys: At
      });
      Mt ? z == null || z(xr) : M == null || M(xr);
    }
    !x && Ie.length && Ye !== "inline" && de(nn);
  }, tn = ua(function(mt) {
    le == null || le(To(mt)), Tr(mt);
  }), Nr = ua(function(mt, nt) {
    var dt = Ie.filter(function(At) {
      return At !== mt;
    });
    if (nt)
      dt.push(mt);
    else if (Ye !== "inline") {
      var Mt = Kt(mt);
      dt = dt.filter(function(At) {
        return !Mt.has(At);
      });
    }
    Ea(Ie, dt, !0) || de(dt, !0);
  }), fr = function(nt, dt) {
    var Mt = dt ?? !Ie.includes(nt);
    Nr(nt, Mt);
  }, Yn = qS(Ye, Ut, Fe, Te, re, $t, Ke, Br, fr, $e);
  u.useEffect(function() {
    Z(!0);
  }, []);
  var Zn = u.useMemo(function() {
    return {
      _internalRenderMenuItem: ne,
      _internalRenderSubMenuItem: ae
    };
  }, [ne, ae]), Qn = Ye !== "horizontal" || w ? pe : (
    // Need wrap for overflow dropdown that do not response for open
    pe.map(function(mt, nt) {
      return (
        // Always wrap provider to avoid sub node re-mount
        /* @__PURE__ */ u.createElement(Na, {
          key: mt.key,
          overflowDisabled: nt > X
        }, mt)
      );
    })
  ), hn = /* @__PURE__ */ u.createElement(Dr, Me({
    id: p,
    ref: re,
    prefixCls: "".concat(i, "-overflow"),
    component: "ul",
    itemComponent: Go,
    className: ee(i, "".concat(i, "-root"), "".concat(i, "-").concat(Ye), c, (n = {}, D(n, "".concat(i, "-inline-collapsed"), Vt), D(n, "".concat(i, "-rtl"), Fe), n), s),
    dir: h,
    style: l,
    role: "menu",
    tabIndex: f,
    data: Qn,
    renderRawItem: function(nt) {
      return nt;
    },
    renderRawRest: function(nt) {
      var dt = nt.length, Mt = dt ? pe.slice(-dt) : null;
      return /* @__PURE__ */ u.createElement(qo, {
        eventKey: Ns,
        title: fe,
        disabled: Le,
        internalPopupClose: dt === 0,
        popupClassName: we
      }, Mt);
    },
    maxCount: Ye !== "horizontal" || w ? Dr.INVALIDATE : Dr.RESPONSIVE,
    ssr: "full",
    "data-menu-list": !0,
    onVisibleChange: function(nt) {
      ce(nt);
    },
    onKeyDown: Yn
  }, he));
  return /* @__PURE__ */ u.createElement(il.Provider, {
    value: Zn
  }, /* @__PURE__ */ u.createElement(zf.Provider, {
    value: Te
  }, /* @__PURE__ */ u.createElement(Na, {
    prefixCls: i,
    rootClassName: s,
    mode: Ye,
    openKeys: Ie,
    rtl: Fe,
    disabled: y,
    motion: Oe ? U : null,
    defaultMotions: Oe ? Q : null,
    activeKey: Ut,
    onActive: Xn,
    onInactive: or,
    selectedKeys: Pr,
    inlineIndent: W,
    subMenuOpenDelay: O,
    subMenuCloseDelay: $,
    forceSubMenuRender: R,
    builtinPlacements: oe,
    triggerSubMenuAction: J,
    getPopupContainer: k,
    itemIcon: ue,
    expandIcon: xe,
    onItemClick: tn,
    onOpenChange: Nr
  }, /* @__PURE__ */ u.createElement(Wf.Provider, {
    value: gt
  }, hn), /* @__PURE__ */ u.createElement("div", {
    style: {
      display: "none"
    },
    "aria-hidden": !0
  }, /* @__PURE__ */ u.createElement(Bf.Provider, {
    value: kt
  }, ct)))));
}), ka = CC;
ka.Item = Go;
ka.SubMenu = qo;
ka.ItemGroup = dl;
ka.Divider = Yf;
var EC = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z" } }] }, name: "ellipsis", theme: "outlined" }, wC = function(t, r) {
  return /* @__PURE__ */ u.createElement(ar, Me({}, t, {
    ref: r,
    icon: EC
  }));
}, Zf = /* @__PURE__ */ u.forwardRef(wC);
process.env.NODE_ENV !== "production" && (Zf.displayName = "EllipsisOutlined");
function xC(e) {
  return Zt(e, {
    inputAffixPadding: e.paddingXXS
  });
}
const $C = (e) => {
  const {
    controlHeight: t,
    fontSize: r,
    lineHeight: n,
    lineWidth: a,
    controlHeightSM: o,
    controlHeightLG: i,
    fontSizeLG: s,
    lineHeightLG: l,
    paddingSM: c,
    controlPaddingHorizontalSM: d,
    controlPaddingHorizontal: f,
    colorFillAlter: v,
    colorPrimaryHover: m,
    colorPrimary: h,
    controlOutlineWidth: p,
    controlOutline: g,
    colorErrorOutline: S,
    colorWarningOutline: b,
    colorBgContainer: y
  } = e;
  return {
    paddingBlock: Math.max(Math.round((t - r * n) / 2 * 10) / 10 - a, 0),
    paddingBlockSM: Math.max(Math.round((o - r * n) / 2 * 10) / 10 - a, 0),
    paddingBlockLG: Math.ceil((i - s * l) / 2 * 10) / 10 - a,
    paddingInline: c - a,
    paddingInlineSM: d - a,
    paddingInlineLG: f - a,
    addonBg: v,
    activeBorderColor: h,
    hoverBorderColor: m,
    activeShadow: `0 0 0 ${p}px ${g}`,
    errorActiveShadow: `0 0 0 ${p}px ${S}`,
    warningActiveShadow: `0 0 0 ${p}px ${b}`,
    hoverBg: y,
    activeBg: y,
    inputFontSize: r,
    inputFontSizeLG: s,
    inputFontSizeSM: r
  };
}, OC = (e) => ({
  borderColor: e.hoverBorderColor,
  backgroundColor: e.hoverBg
}), fl = (e) => ({
  color: e.colorTextDisabled,
  backgroundColor: e.colorBgContainerDisabled,
  borderColor: e.colorBorder,
  boxShadow: "none",
  cursor: "not-allowed",
  opacity: 1,
  "input[disabled], textarea[disabled]": {
    cursor: "not-allowed"
  },
  "&:hover:not([disabled])": Object.assign({}, OC(Zt(e, {
    hoverBorderColor: e.colorBorder,
    hoverBg: e.colorBgContainerDisabled
  })))
}), Qf = (e, t) => ({
  background: e.colorBgContainer,
  borderWidth: e.lineWidth,
  borderStyle: e.lineType,
  borderColor: t.borderColor,
  "&:hover": {
    borderColor: t.hoverBorderColor,
    backgroundColor: e.hoverBg
  },
  "&:focus, &:focus-within": {
    borderColor: t.activeBorderColor,
    boxShadow: t.activeShadow,
    outline: 0,
    backgroundColor: e.activeBg
  }
}), Zc = (e, t) => ({
  [`&${e.componentCls}-status-${t.status}:not(${e.componentCls}-disabled)`]: Object.assign(Object.assign({}, Qf(e, t)), {
    [`${e.componentCls}-prefix, ${e.componentCls}-suffix`]: {
      color: t.affixColor
    }
  }),
  [`&${e.componentCls}-status-${t.status}${e.componentCls}-disabled`]: {
    borderColor: t.borderColor
  }
}), RC = (e, t) => ({
  "&-outlined": Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Qf(e, {
    borderColor: e.colorBorder,
    hoverBorderColor: e.hoverBorderColor,
    activeBorderColor: e.activeBorderColor,
    activeShadow: e.activeShadow
  })), {
    [`&${e.componentCls}-disabled, &[disabled]`]: Object.assign({}, fl(e))
  }), Zc(e, {
    status: "error",
    borderColor: e.colorError,
    hoverBorderColor: e.colorErrorBorderHover,
    activeBorderColor: e.colorError,
    activeShadow: e.errorActiveShadow,
    affixColor: e.colorError
  })), Zc(e, {
    status: "warning",
    borderColor: e.colorWarning,
    hoverBorderColor: e.colorWarningBorderHover,
    activeBorderColor: e.colorWarning,
    activeShadow: e.warningActiveShadow,
    affixColor: e.colorWarning
  })), t)
}), Qc = (e, t) => ({
  [`&${e.componentCls}-group-wrapper-status-${t.status}`]: {
    [`${e.componentCls}-group-addon`]: {
      borderColor: t.addonBorderColor,
      color: t.addonColor
    }
  }
}), _C = (e) => ({
  "&-outlined": Object.assign(Object.assign(Object.assign({
    [`${e.componentCls}-group`]: {
      "&-addon": {
        background: e.addonBg,
        border: `${te(e.lineWidth)} ${e.lineType} ${e.colorBorder}`
      },
      "&-addon:first-child": {
        borderInlineEnd: 0
      },
      "&-addon:last-child": {
        borderInlineStart: 0
      }
    }
  }, Qc(e, {
    status: "error",
    addonBorderColor: e.colorError,
    addonColor: e.colorErrorText
  })), Qc(e, {
    status: "warning",
    addonBorderColor: e.colorWarning,
    addonColor: e.colorWarningText
  })), {
    [`&${e.componentCls}-group-wrapper-disabled`]: {
      [`${e.componentCls}-group-addon`]: Object.assign({}, fl(e))
    }
  })
}), PC = (e, t) => {
  const {
    componentCls: r
  } = e;
  return {
    "&-borderless": Object.assign({
      background: "transparent",
      border: "none",
      "&:focus, &:focus-within": {
        outline: "none"
      },
      // >>>>> Disabled
      [`&${r}-disabled, &[disabled]`]: {
        color: e.colorTextDisabled
      },
      // >>>>> Status
      [`&${r}-status-error`]: {
        "&, & input, & textarea": {
          color: e.colorError
        }
      },
      [`&${r}-status-warning`]: {
        "&, & input, & textarea": {
          color: e.colorWarning
        }
      }
    }, t)
  };
}, Jf = (e, t) => ({
  background: t.bg,
  borderWidth: e.lineWidth,
  borderStyle: e.lineType,
  borderColor: "transparent",
  "input&, & input, textarea&, & textarea": {
    color: t == null ? void 0 : t.inputColor
  },
  "&:hover": {
    background: t.hoverBg
  },
  "&:focus, &:focus-within": {
    outline: 0,
    borderColor: t.activeBorderColor,
    backgroundColor: e.activeBg
  }
}), Jc = (e, t) => ({
  [`&${e.componentCls}-status-${t.status}:not(${e.componentCls}-disabled)`]: Object.assign(Object.assign({}, Jf(e, t)), {
    [`${e.componentCls}-prefix, ${e.componentCls}-suffix`]: {
      color: t.affixColor
    }
  })
}), TC = (e, t) => ({
  "&-filled": Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Jf(e, {
    bg: e.colorFillTertiary,
    hoverBg: e.colorFillSecondary,
    activeBorderColor: e.colorPrimary
  })), {
    [`&${e.componentCls}-disabled, &[disabled]`]: Object.assign({}, fl(e))
  }), Jc(e, {
    status: "error",
    bg: e.colorErrorBg,
    hoverBg: e.colorErrorBgHover,
    activeBorderColor: e.colorError,
    inputColor: e.colorErrorText,
    affixColor: e.colorError
  })), Jc(e, {
    status: "warning",
    bg: e.colorWarningBg,
    hoverBg: e.colorWarningBgHover,
    activeBorderColor: e.colorWarning,
    inputColor: e.colorWarningText,
    affixColor: e.colorWarning
  })), t)
}), eu = (e, t) => ({
  [`&${e.componentCls}-group-wrapper-status-${t.status}`]: {
    [`${e.componentCls}-group-addon`]: {
      background: t.addonBg,
      color: t.addonColor
    }
  }
}), NC = (e) => ({
  "&-filled": Object.assign(Object.assign(Object.assign({
    [`${e.componentCls}-group`]: {
      "&-addon": {
        background: e.colorFillTertiary
      },
      [`${e.componentCls}-filled:not(:focus):not(:focus-within)`]: {
        "&:not(:first-child)": {
          borderInlineStart: `${te(e.lineWidth)} ${e.lineType} ${e.colorSplit}`
        },
        "&:not(:last-child)": {
          borderInlineEnd: `${te(e.lineWidth)} ${e.lineType} ${e.colorSplit}`
        }
      }
    }
  }, eu(e, {
    status: "error",
    addonBg: e.colorErrorBg,
    addonColor: e.colorErrorText
  })), eu(e, {
    status: "warning",
    addonBg: e.colorWarningBg,
    addonColor: e.colorWarningText
  })), {
    [`&${e.componentCls}-group-wrapper-disabled`]: {
      [`${e.componentCls}-group`]: {
        "&-addon": {
          background: e.colorFillTertiary,
          color: e.colorTextDisabled
        },
        "&-addon:first-child": {
          borderInlineStart: `${te(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
          borderTop: `${te(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
          borderBottom: `${te(e.lineWidth)} ${e.lineType} ${e.colorBorder}`
        },
        "&-addon:last-child": {
          borderInlineEnd: `${te(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
          borderTop: `${te(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
          borderBottom: `${te(e.lineWidth)} ${e.lineType} ${e.colorBorder}`
        }
      }
    }
  })
}), IC = (e) => ({
  // Firefox
  "&::-moz-placeholder": {
    opacity: 1
  },
  "&::placeholder": {
    color: e,
    userSelect: "none"
    // https://github.com/ant-design/ant-design/pull/32639
  },
  "&:placeholder-shown": {
    textOverflow: "ellipsis"
  }
}), ev = (e) => {
  const {
    paddingBlockLG: t,
    lineHeightLG: r,
    borderRadiusLG: n,
    paddingInlineLG: a
  } = e;
  return {
    padding: `${te(t)} ${te(a)}`,
    fontSize: e.inputFontSizeLG,
    lineHeight: r,
    borderRadius: n
  };
}, tv = (e) => ({
  padding: `${te(e.paddingBlockSM)} ${te(e.paddingInlineSM)}`,
  fontSize: e.inputFontSizeSM,
  borderRadius: e.borderRadiusSM
}), rv = (e) => Object.assign(Object.assign({
  position: "relative",
  display: "inline-block",
  width: "100%",
  minWidth: 0,
  padding: `${te(e.paddingBlock)} ${te(e.paddingInline)}`,
  color: e.colorText,
  fontSize: e.inputFontSize,
  lineHeight: e.lineHeight,
  borderRadius: e.borderRadius,
  transition: `all ${e.motionDurationMid}`
}, IC(e.colorTextPlaceholder)), {
  // Reset height for `textarea`s
  "textarea&": {
    maxWidth: "100%",
    // prevent textarea resize from coming out of its container
    height: "auto",
    minHeight: e.controlHeight,
    lineHeight: e.lineHeight,
    verticalAlign: "bottom",
    transition: `all ${e.motionDurationSlow}, height 0s`,
    resize: "vertical"
  },
  // Size
  "&-lg": Object.assign({}, ev(e)),
  "&-sm": Object.assign({}, tv(e)),
  // RTL
  "&-rtl, &-textarea-rtl": {
    direction: "rtl"
  }
}), MC = (e) => {
  const {
    componentCls: t,
    antCls: r
  } = e;
  return {
    position: "relative",
    display: "table",
    width: "100%",
    borderCollapse: "separate",
    borderSpacing: 0,
    // Undo padding and float of grid classes
    "&[class*='col-']": {
      paddingInlineEnd: e.paddingXS,
      "&:last-child": {
        paddingInlineEnd: 0
      }
    },
    // Sizing options
    [`&-lg ${t}, &-lg > ${t}-group-addon`]: Object.assign({}, ev(e)),
    [`&-sm ${t}, &-sm > ${t}-group-addon`]: Object.assign({}, tv(e)),
    // Fix https://github.com/ant-design/ant-design/issues/5754
    [`&-lg ${r}-select-single ${r}-select-selector`]: {
      height: e.controlHeightLG
    },
    [`&-sm ${r}-select-single ${r}-select-selector`]: {
      height: e.controlHeightSM
    },
    [`> ${t}`]: {
      display: "table-cell",
      "&:not(:first-child):not(:last-child)": {
        borderRadius: 0
      }
    },
    [`${t}-group`]: {
      "&-addon, &-wrap": {
        display: "table-cell",
        width: 1,
        whiteSpace: "nowrap",
        verticalAlign: "middle",
        "&:not(:first-child):not(:last-child)": {
          borderRadius: 0
        }
      },
      "&-wrap > *": {
        display: "block !important"
      },
      "&-addon": {
        position: "relative",
        padding: `0 ${te(e.paddingInline)}`,
        color: e.colorText,
        fontWeight: "normal",
        fontSize: e.inputFontSize,
        textAlign: "center",
        borderRadius: e.borderRadius,
        transition: `all ${e.motionDurationSlow}`,
        lineHeight: 1,
        // Reset Select's style in addon
        [`${r}-select`]: {
          margin: `${te(e.calc(e.paddingBlock).add(1).mul(-1).equal())} ${te(e.calc(e.paddingInline).mul(-1).equal())}`,
          [`&${r}-select-single:not(${r}-select-customize-input):not(${r}-pagination-size-changer)`]: {
            [`${r}-select-selector`]: {
              backgroundColor: "inherit",
              border: `${te(e.lineWidth)} ${e.lineType} transparent`,
              boxShadow: "none"
            }
          },
          "&-open, &-focused": {
            [`${r}-select-selector`]: {
              color: e.colorPrimary
            }
          }
        },
        // https://github.com/ant-design/ant-design/issues/31333
        [`${r}-cascader-picker`]: {
          margin: `-9px ${te(e.calc(e.paddingInline).mul(-1).equal())}`,
          backgroundColor: "transparent",
          [`${r}-cascader-input`]: {
            textAlign: "start",
            border: 0,
            boxShadow: "none"
          }
        }
      }
    },
    [`${t}`]: {
      width: "100%",
      marginBottom: 0,
      textAlign: "inherit",
      "&:focus": {
        zIndex: 1,
        // Fix https://gw.alipayobjects.com/zos/rmsportal/DHNpoqfMXSfrSnlZvhsJ.png
        borderInlineEndWidth: 1
      },
      "&:hover": {
        zIndex: 1,
        borderInlineEndWidth: 1,
        [`${t}-search-with-button &`]: {
          zIndex: 0
        }
      }
    },
    // Reset rounded corners
    [`> ${t}:first-child, ${t}-group-addon:first-child`]: {
      borderStartEndRadius: 0,
      borderEndEndRadius: 0,
      // Reset Select's style in addon
      [`${r}-select ${r}-select-selector`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`> ${t}-affix-wrapper`]: {
      [`&:not(:first-child) ${t}`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      },
      [`&:not(:last-child) ${t}`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`> ${t}:last-child, ${t}-group-addon:last-child`]: {
      borderStartStartRadius: 0,
      borderEndStartRadius: 0,
      // Reset Select's style in addon
      [`${r}-select ${r}-select-selector`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    },
    [`${t}-affix-wrapper`]: {
      "&:not(:last-child)": {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0,
        [`${t}-search &`]: {
          borderStartStartRadius: e.borderRadius,
          borderEndStartRadius: e.borderRadius
        }
      },
      [`&:not(:first-child), ${t}-search &:not(:first-child)`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    },
    [`&${t}-group-compact`]: Object.assign(Object.assign({
      display: "block"
    }, Ma()), {
      [`${t}-group-addon, ${t}-group-wrap, > ${t}`]: {
        "&:not(:first-child):not(:last-child)": {
          borderInlineEndWidth: e.lineWidth,
          "&:hover, &:focus": {
            zIndex: 1
          }
        }
      },
      "& > *": {
        display: "inline-flex",
        float: "none",
        verticalAlign: "top",
        // https://github.com/ant-design/ant-design-pro/issues/139
        borderRadius: 0
      },
      [`
        & > ${t}-affix-wrapper,
        & > ${t}-number-affix-wrapper,
        & > ${r}-picker-range
      `]: {
        display: "inline-flex"
      },
      "& > *:not(:last-child)": {
        marginInlineEnd: e.calc(e.lineWidth).mul(-1).equal(),
        borderInlineEndWidth: e.lineWidth
      },
      // Undo float for .ant-input-group .ant-input
      [`${t}`]: {
        float: "none"
      },
      // reset border for Select, DatePicker, AutoComplete, Cascader, Mention, TimePicker, Input
      [`& > ${r}-select > ${r}-select-selector,
      & > ${r}-select-auto-complete ${t},
      & > ${r}-cascader-picker ${t},
      & > ${t}-group-wrapper ${t}`]: {
        borderInlineEndWidth: e.lineWidth,
        borderRadius: 0,
        "&:hover, &:focus": {
          zIndex: 1
        }
      },
      [`& > ${r}-select-focused`]: {
        zIndex: 1
      },
      // update z-index for arrow icon
      [`& > ${r}-select > ${r}-select-arrow`]: {
        zIndex: 1
        // https://github.com/ant-design/ant-design/issues/20371
      },
      [`& > *:first-child,
      & > ${r}-select:first-child > ${r}-select-selector,
      & > ${r}-select-auto-complete:first-child ${t},
      & > ${r}-cascader-picker:first-child ${t}`]: {
        borderStartStartRadius: e.borderRadius,
        borderEndStartRadius: e.borderRadius
      },
      [`& > *:last-child,
      & > ${r}-select:last-child > ${r}-select-selector,
      & > ${r}-cascader-picker:last-child ${t},
      & > ${r}-cascader-picker-focused:last-child ${t}`]: {
        borderInlineEndWidth: e.lineWidth,
        borderStartEndRadius: e.borderRadius,
        borderEndEndRadius: e.borderRadius
      },
      // https://github.com/ant-design/ant-design/issues/12493
      [`& > ${r}-select-auto-complete ${t}`]: {
        verticalAlign: "top"
      },
      [`${t}-group-wrapper + ${t}-group-wrapper`]: {
        marginInlineStart: e.calc(e.lineWidth).mul(-1).equal(),
        [`${t}-affix-wrapper`]: {
          borderRadius: 0
        }
      },
      [`${t}-group-wrapper:not(:last-child)`]: {
        [`&${t}-search > ${t}-group`]: {
          [`& > ${t}-group-addon > ${t}-search-button`]: {
            borderRadius: 0
          },
          [`& > ${t}`]: {
            borderStartStartRadius: e.borderRadius,
            borderStartEndRadius: 0,
            borderEndEndRadius: 0,
            borderEndStartRadius: e.borderRadius
          }
        }
      }
    })
  };
}, AC = (e) => {
  const {
    componentCls: t,
    controlHeightSM: r,
    lineWidth: n,
    calc: a
  } = e, i = a(r).sub(a(n).mul(2)).sub(16).div(2).equal();
  return {
    [t]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Un(e)), rv(e)), RC(e)), TC(e)), PC(e)), {
      '&[type="color"]': {
        height: e.controlHeight,
        [`&${t}-lg`]: {
          height: e.controlHeightLG
        },
        [`&${t}-sm`]: {
          height: r,
          paddingTop: i,
          paddingBottom: i
        }
      },
      '&[type="search"]::-webkit-search-cancel-button, &[type="search"]::-webkit-search-decoration': {
        "-webkit-appearance": "none"
      }
    })
  };
}, LC = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    // ========================= Input =========================
    [`${t}-clear-icon`]: {
      margin: 0,
      color: e.colorTextQuaternary,
      fontSize: e.fontSizeIcon,
      verticalAlign: -1,
      // https://github.com/ant-design/ant-design/pull/18151
      // https://codesandbox.io/s/wizardly-sun-u10br
      cursor: "pointer",
      transition: `color ${e.motionDurationSlow}`,
      "&:hover": {
        color: e.colorTextTertiary
      },
      "&:active": {
        color: e.colorText
      },
      "&-hidden": {
        visibility: "hidden"
      },
      "&-has-suffix": {
        margin: `0 ${te(e.inputAffixPadding)}`
      }
    }
  };
}, jC = (e) => {
  const {
    componentCls: t,
    inputAffixPadding: r,
    colorTextDescription: n,
    motionDurationSlow: a,
    colorIcon: o,
    colorIconHover: i,
    iconCls: s
  } = e;
  return {
    [`${t}-affix-wrapper`]: Object.assign(Object.assign(Object.assign(Object.assign({}, rv(e)), {
      display: "inline-flex",
      [`&:not(${t}-disabled):hover`]: {
        zIndex: 1,
        [`${t}-search-with-button &`]: {
          zIndex: 0
        }
      },
      "&-focused, &:focus": {
        zIndex: 1
      },
      [`> input${t}`]: {
        padding: 0
      },
      [`> input${t}, > textarea${t}`]: {
        fontSize: "inherit",
        border: "none",
        borderRadius: 0,
        outline: "none",
        background: "transparent",
        color: "inherit",
        "&::-ms-reveal": {
          display: "none"
        },
        "&:focus": {
          boxShadow: "none !important"
        }
      },
      "&::before": {
        display: "inline-block",
        width: 0,
        visibility: "hidden",
        content: '"\\a0"'
      },
      [`${t}`]: {
        "&-prefix, &-suffix": {
          display: "flex",
          flex: "none",
          alignItems: "center",
          "> *:not(:last-child)": {
            marginInlineEnd: e.paddingXS
          }
        },
        "&-show-count-suffix": {
          color: n
        },
        "&-show-count-has-suffix": {
          marginInlineEnd: e.paddingXXS
        },
        "&-prefix": {
          marginInlineEnd: r
        },
        "&-suffix": {
          marginInlineStart: r
        }
      }
    }), LC(e)), {
      // password
      [`${s}${t}-password-icon`]: {
        color: o,
        cursor: "pointer",
        transition: `all ${a}`,
        "&:hover": {
          color: i
        }
      }
    })
  };
}, FC = (e) => {
  const {
    componentCls: t,
    borderRadiusLG: r,
    borderRadiusSM: n
  } = e;
  return {
    [`${t}-group`]: Object.assign(Object.assign(Object.assign({}, Un(e)), MC(e)), {
      "&-rtl": {
        direction: "rtl"
      },
      "&-wrapper": Object.assign(Object.assign(Object.assign({
        display: "inline-block",
        width: "100%",
        textAlign: "start",
        verticalAlign: "top",
        "&-rtl": {
          direction: "rtl"
        },
        // Size
        "&-lg": {
          [`${t}-group-addon`]: {
            borderRadius: r,
            fontSize: e.inputFontSizeLG
          }
        },
        "&-sm": {
          [`${t}-group-addon`]: {
            borderRadius: n
          }
        }
      }, _C(e)), NC(e)), {
        // '&-disabled': {
        //   [`${componentCls}-group-addon`]: {
        //     ...genDisabledStyle(token),
        //   },
        // },
        // Fix the issue of using icons in Space Compact mode
        // https://github.com/ant-design/ant-design/issues/42122
        [`&:not(${t}-compact-first-item):not(${t}-compact-last-item)${t}-compact-item`]: {
          [`${t}, ${t}-group-addon`]: {
            borderRadius: 0
          }
        },
        [`&:not(${t}-compact-last-item)${t}-compact-first-item`]: {
          [`${t}, ${t}-group-addon`]: {
            borderStartEndRadius: 0,
            borderEndEndRadius: 0
          }
        },
        [`&:not(${t}-compact-first-item)${t}-compact-last-item`]: {
          [`${t}, ${t}-group-addon`]: {
            borderStartStartRadius: 0,
            borderEndStartRadius: 0
          }
        },
        // Fix the issue of input use show-count param in space compact mode
        // https://github.com/ant-design/ant-design/issues/46872
        [`&:not(${t}-compact-last-item)${t}-compact-item`]: {
          [`${t}-affix-wrapper`]: {
            borderStartEndRadius: 0,
            borderEndEndRadius: 0
          }
        }
      })
    })
  };
}, DC = (e) => {
  const {
    componentCls: t,
    antCls: r
  } = e, n = `${t}-search`;
  return {
    [n]: {
      [`${t}`]: {
        "&:hover, &:focus": {
          borderColor: e.colorPrimaryHover,
          [`+ ${t}-group-addon ${n}-button:not(${r}-btn-primary)`]: {
            borderInlineStartColor: e.colorPrimaryHover
          }
        }
      },
      [`${t}-affix-wrapper`]: {
        borderRadius: 0
      },
      // fix slight height diff in Firefox:
      // https://ant.design/components/auto-complete-cn/#components-auto-complete-demo-certain-category
      [`${t}-lg`]: {
        lineHeight: e.calc(e.lineHeightLG).sub(2e-4).equal()
      },
      [`> ${t}-group`]: {
        [`> ${t}-group-addon:last-child`]: {
          insetInlineStart: -1,
          padding: 0,
          border: 0,
          [`${n}-button`]: {
            // Fix https://github.com/ant-design/ant-design/issues/47150
            marginInlineEnd: -1,
            paddingTop: 0,
            paddingBottom: 0,
            borderStartStartRadius: 0,
            borderStartEndRadius: e.borderRadius,
            borderEndEndRadius: e.borderRadius,
            borderEndStartRadius: 0,
            boxShadow: "none"
          },
          [`${n}-button:not(${r}-btn-primary)`]: {
            color: e.colorTextDescription,
            "&:hover": {
              color: e.colorPrimaryHover
            },
            "&:active": {
              color: e.colorPrimaryActive
            },
            [`&${r}-btn-loading::before`]: {
              insetInlineStart: 0,
              insetInlineEnd: 0,
              insetBlockStart: 0,
              insetBlockEnd: 0
            }
          }
        }
      },
      [`${n}-button`]: {
        height: e.controlHeight,
        "&:hover, &:focus": {
          zIndex: 1
        }
      },
      [`&-large ${n}-button`]: {
        height: e.controlHeightLG
      },
      [`&-small ${n}-button`]: {
        height: e.controlHeightSM
      },
      "&-rtl": {
        direction: "rtl"
      },
      // ===================== Compact Item Customized Styles =====================
      [`&${t}-compact-item`]: {
        [`&:not(${t}-compact-last-item)`]: {
          [`${t}-group-addon`]: {
            [`${t}-search-button`]: {
              marginInlineEnd: e.calc(e.lineWidth).mul(-1).equal(),
              borderRadius: 0
            }
          }
        },
        [`&:not(${t}-compact-first-item)`]: {
          [`${t},${t}-affix-wrapper`]: {
            borderRadius: 0
          }
        },
        [`> ${t}-group-addon ${t}-search-button,
        > ${t},
        ${t}-affix-wrapper`]: {
          "&:hover, &:focus, &:active": {
            zIndex: 2
          }
        },
        [`> ${t}-affix-wrapper-focused`]: {
          zIndex: 2
        }
      }
    }
  };
}, zC = (e) => {
  const {
    componentCls: t,
    paddingLG: r
  } = e, n = `${t}-textarea`;
  return {
    [n]: {
      position: "relative",
      "&-show-count": {
        // https://github.com/ant-design/ant-design/issues/33049
        [`> ${t}`]: {
          height: "100%"
        },
        [`${t}-data-count`]: {
          position: "absolute",
          bottom: e.calc(e.fontSize).mul(e.lineHeight).mul(-1).equal(),
          insetInlineEnd: 0,
          color: e.colorTextDescription,
          whiteSpace: "nowrap",
          pointerEvents: "none"
        }
      },
      [`
        &-allow-clear > ${t},
        &-affix-wrapper${n}-has-feedback ${t}
      `]: {
        paddingInlineEnd: r
      },
      [`&-affix-wrapper${t}-affix-wrapper`]: {
        padding: 0,
        [`> textarea${t}`]: {
          fontSize: "inherit",
          border: "none",
          outline: "none",
          background: "transparent",
          "&:focus": {
            boxShadow: "none !important"
          }
        },
        [`${t}-suffix`]: {
          margin: 0,
          "> *:not(:last-child)": {
            marginInline: 0
          },
          // Clear Icon
          [`${t}-clear-icon`]: {
            position: "absolute",
            insetInlineEnd: e.paddingXS,
            insetBlockStart: e.paddingXS
          },
          // Feedback Icon
          [`${n}-suffix`]: {
            position: "absolute",
            top: 0,
            insetInlineEnd: e.paddingInline,
            bottom: 0,
            zIndex: 1,
            display: "inline-flex",
            alignItems: "center",
            margin: "auto",
            pointerEvents: "none"
          }
        }
      }
    }
  };
}, VC = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [`${t}-out-of-range`]: {
      [`&, & input, & textarea, ${t}-show-count-suffix, ${t}-data-count`]: {
        color: e.colorError
      }
    }
  };
}, nv = en("Input", (e) => {
  const t = Zt(e, xC(e));
  return [
    AC(t),
    zC(t),
    jC(t),
    FC(t),
    DC(t),
    VC(t),
    // =====================================================
    // ==             Space Compact                       ==
    // =====================================================
    ff(t)
  ];
}, $C, {
  resetFont: !1
});
var kC = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z" } }, { tag: "path", attrs: { d: "M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8z" } }] }, name: "plus", theme: "outlined" }, BC = function(t, r) {
  return /* @__PURE__ */ u.createElement(ar, Me({}, t, {
    ref: r,
    icon: kC
  }));
}, av = /* @__PURE__ */ u.forwardRef(BC);
process.env.NODE_ENV !== "production" && (av.displayName = "PlusOutlined");
const Xo = /* @__PURE__ */ dn(null);
var HC = function(t) {
  var r = t.activeTabOffset, n = t.horizontal, a = t.rtl, o = t.indicator, i = o === void 0 ? {} : o, s = i.size, l = i.align, c = l === void 0 ? "center" : l, d = pt(), f = G(d, 2), v = f[0], m = f[1], h = ke(), p = Y.useCallback(function(S) {
    return typeof s == "function" ? s(S) : typeof s == "number" ? s : S;
  }, [s]);
  function g() {
    Nt.cancel(h.current);
  }
  return ht(function() {
    var S = {};
    if (r)
      if (n) {
        S.width = p(r.width);
        var b = a ? "right" : "left";
        c === "start" && (S[b] = r[b]), c === "center" && (S[b] = r[b] + r.width / 2, S.transform = a ? "translateX(50%)" : "translateX(-50%)"), c === "end" && (S[b] = r[b] + r.width, S.transform = "translateX(-100%)");
      } else
        S.height = p(r.height), c === "start" && (S.top = r.top), c === "center" && (S.top = r.top + r.height / 2, S.transform = "translateY(-50%)"), c === "end" && (S.top = r.top + r.height, S.transform = "translateY(-100%)");
    return g(), h.current = Nt(function() {
      m(S);
    }), g;
  }, [r, n, a, c, p]), {
    style: v
  };
}, tu = {
  width: 0,
  height: 0,
  left: 0,
  top: 0
};
function WC(e, t, r) {
  return Yr(function() {
    for (var n, a = /* @__PURE__ */ new Map(), o = t.get((n = e[0]) === null || n === void 0 ? void 0 : n.key) || tu, i = o.left + o.width, s = 0; s < e.length; s += 1) {
      var l = e[s].key, c = t.get(l);
      if (!c) {
        var d;
        c = t.get((d = e[s - 1]) === null || d === void 0 ? void 0 : d.key) || tu;
      }
      var f = a.get(l) || V({}, c);
      f.right = i - f.left - f.width, a.set(l, f);
    }
    return a;
  }, [e.map(function(n) {
    return n.key;
  }).join("_"), t, r]);
}
function ru(e, t) {
  var r = u.useRef(e), n = u.useState({}), a = G(n, 2), o = a[1];
  function i(s) {
    var l = typeof s == "function" ? s(r.current) : s;
    l !== r.current && t(l, r.current), r.current = l, o({});
  }
  return [r.current, i];
}
var KC = 0.1, nu = 0.01, yo = 20, au = Math.pow(0.995, yo);
function UC(e, t) {
  var r = pt(), n = G(r, 2), a = n[0], o = n[1], i = pt(0), s = G(i, 2), l = s[0], c = s[1], d = pt(0), f = G(d, 2), v = f[0], m = f[1], h = pt(), p = G(h, 2), g = p[0], S = p[1], b = ke();
  function y(R) {
    var A = R.touches[0], F = A.screenX, j = A.screenY;
    o({
      x: F,
      y: j
    }), window.clearInterval(b.current);
  }
  function w(R) {
    if (a) {
      R.preventDefault();
      var A = R.touches[0], F = A.screenX, j = A.screenY;
      o({
        x: F,
        y: j
      });
      var I = F - a.x, T = j - a.y;
      t(I, T);
      var B = Date.now();
      c(B), m(B - l), S({
        x: I,
        y: T
      });
    }
  }
  function C() {
    if (a && (o(null), S(null), g)) {
      var R = g.x / v, A = g.y / v, F = Math.abs(R), j = Math.abs(A);
      if (Math.max(F, j) < KC) return;
      var I = R, T = A;
      b.current = window.setInterval(function() {
        if (Math.abs(I) < nu && Math.abs(T) < nu) {
          window.clearInterval(b.current);
          return;
        }
        I *= au, T *= au, t(I * yo, T * yo);
      }, yo);
    }
  }
  var O = ke();
  function _(R) {
    var A = R.deltaX, F = R.deltaY, j = 0, I = Math.abs(A), T = Math.abs(F);
    I === T ? j = O.current === "x" ? A : F : I > T ? (j = A, O.current = "x") : (j = F, O.current = "y"), t(-j, -j) && R.preventDefault();
  }
  var $ = ke(null);
  $.current = {
    onTouchStart: y,
    onTouchMove: w,
    onTouchEnd: C,
    onWheel: _
  }, u.useEffect(function() {
    function R(I) {
      $.current.onTouchStart(I);
    }
    function A(I) {
      $.current.onTouchMove(I);
    }
    function F(I) {
      $.current.onTouchEnd(I);
    }
    function j(I) {
      $.current.onWheel(I);
    }
    return document.addEventListener("touchmove", A, {
      passive: !1
    }), document.addEventListener("touchend", F, {
      passive: !0
    }), e.current.addEventListener("touchstart", R, {
      passive: !0
    }), e.current.addEventListener("wheel", j, {
      passive: !1
    }), function() {
      document.removeEventListener("touchmove", A), document.removeEventListener("touchend", F);
    };
  }, []);
}
function ov(e) {
  var t = pt(0), r = G(t, 2), n = r[0], a = r[1], o = ke(0), i = ke();
  return i.current = e, Ui(function() {
    var s;
    (s = i.current) === null || s === void 0 || s.call(i);
  }, [n]), function() {
    o.current === n && (o.current += 1, a(o.current));
  };
}
function GC(e) {
  var t = ke([]), r = pt({}), n = G(r, 2), a = n[1], o = ke(typeof e == "function" ? e() : e), i = ov(function() {
    var l = o.current;
    t.current.forEach(function(c) {
      l = c(l);
    }), t.current = [], o.current = l, a({});
  });
  function s(l) {
    t.current.push(l), i();
  }
  return [o.current, s];
}
var ou = {
  width: 0,
  height: 0,
  left: 0,
  top: 0,
  right: 0
};
function qC(e, t, r, n, a, o, i) {
  var s = i.tabs, l = i.tabPosition, c = i.rtl, d, f, v;
  return ["top", "bottom"].includes(l) ? (d = "width", f = c ? "right" : "left", v = Math.abs(r)) : (d = "height", f = "top", v = -r), Yr(function() {
    if (!s.length)
      return [0, 0];
    for (var m = s.length, h = m, p = 0; p < m; p += 1) {
      var g = e.get(s[p].key) || ou;
      if (g[f] + g[d] > v + t) {
        h = p - 1;
        break;
      }
    }
    for (var S = 0, b = m - 1; b >= 0; b -= 1) {
      var y = e.get(s[b].key) || ou;
      if (y[f] < v) {
        S = b + 1;
        break;
      }
    }
    return S >= h ? [0, 0] : [S, h];
  }, [e, t, n, a, o, v, l, s.map(function(m) {
    return m.key;
  }).join("_"), c]);
}
function iu(e) {
  var t;
  return e instanceof Map ? (t = {}, e.forEach(function(r, n) {
    t[n] = r;
  })) : t = e, JSON.stringify(t);
}
var XC = "TABS_DQ";
function iv(e) {
  return String(e).replace(/"/g, XC);
}
function sv(e, t, r, n) {
  return (
    // Only editable tabs can be removed
    !(!r || // Tabs cannot be removed when disabled
    n || // closable is false
    e === !1 || // If closable is undefined, the remove button should be hidden when closeIcon is null or false
    e === void 0 && (t === !1 || t === null))
  );
}
var lv = /* @__PURE__ */ u.forwardRef(function(e, t) {
  var r = e.prefixCls, n = e.editable, a = e.locale, o = e.style;
  return !n || n.showAdd === !1 ? null : /* @__PURE__ */ u.createElement("button", {
    ref: t,
    type: "button",
    className: "".concat(r, "-nav-add"),
    style: o,
    "aria-label": (a == null ? void 0 : a.addAriaLabel) || "Add tab",
    onClick: function(s) {
      n.onEdit("add", {
        event: s
      });
    }
  }, n.addIcon || "+");
}), Ms = /* @__PURE__ */ u.forwardRef(function(e, t) {
  var r = e.position, n = e.prefixCls, a = e.extra;
  if (!a)
    return null;
  var o, i = {};
  return ze(a) === "object" && !/* @__PURE__ */ u.isValidElement(a) ? i = a : i.right = a, r === "right" && (o = i.right), r === "left" && (o = i.left), o ? /* @__PURE__ */ u.createElement("div", {
    className: "".concat(n, "-extra-content"),
    ref: t
  }, o) : null;
});
process.env.NODE_ENV !== "production" && (Ms.displayName = "ExtraContent");
var YC = /* @__PURE__ */ u.forwardRef(function(e, t) {
  var r = e.prefixCls, n = e.id, a = e.tabs, o = e.locale, i = e.mobile, s = e.more, l = s === void 0 ? {} : s, c = e.style, d = e.className, f = e.editable, v = e.tabBarGutter, m = e.rtl, h = e.removeAriaLabel, p = e.onTabClick, g = e.getPopupContainer, S = e.popupClassName, b = pt(!1), y = G(b, 2), w = y[0], C = y[1], O = pt(null), _ = G(O, 2), $ = _[0], R = _[1], A = l.icon, F = A === void 0 ? "More" : A, j = "".concat(n, "-more-popup"), I = "".concat(r, "-dropdown"), T = $ !== null ? "".concat(j, "-").concat($) : null, B = o == null ? void 0 : o.dropdownAriaLabel;
  function N(W, U) {
    W.preventDefault(), W.stopPropagation(), f.onEdit("remove", {
      key: U,
      event: W
    });
  }
  var x = /* @__PURE__ */ u.createElement(ka, {
    onClick: function(U) {
      var Q = U.key, q = U.domEvent;
      p(Q, q), C(!1);
    },
    prefixCls: "".concat(I, "-menu"),
    id: j,
    tabIndex: -1,
    role: "listbox",
    "aria-activedescendant": T,
    selectedKeys: [$],
    "aria-label": B !== void 0 ? B : "expanded dropdown"
  }, a.map(function(W) {
    var U = W.closable, Q = W.disabled, q = W.closeIcon, J = W.key, oe = W.label, ue = sv(U, q, f, Q);
    return /* @__PURE__ */ u.createElement(Go, {
      key: J,
      id: "".concat(j, "-").concat(J),
      role: "option",
      "aria-controls": n && "".concat(n, "-panel-").concat(J),
      disabled: Q
    }, /* @__PURE__ */ u.createElement("span", null, oe), ue && /* @__PURE__ */ u.createElement("button", {
      type: "button",
      "aria-label": h || "remove",
      tabIndex: 0,
      className: "".concat(I, "-menu-item-remove"),
      onClick: function(me) {
        me.stopPropagation(), N(me, J);
      }
    }, q || f.removeIcon || "×"));
  }));
  function E(W) {
    for (var U = a.filter(function(ue) {
      return !ue.disabled;
    }), Q = U.findIndex(function(ue) {
      return ue.key === $;
    }) || 0, q = U.length, J = 0; J < q; J += 1) {
      Q = (Q + W + q) % q;
      var oe = U[Q];
      if (!oe.disabled) {
        R(oe.key);
        return;
      }
    }
  }
  function L(W) {
    var U = W.which;
    if (!w) {
      [ve.DOWN, ve.SPACE, ve.ENTER].includes(U) && (C(!0), W.preventDefault());
      return;
    }
    switch (U) {
      case ve.UP:
        E(-1), W.preventDefault();
        break;
      case ve.DOWN:
        E(1), W.preventDefault();
        break;
      case ve.ESC:
        C(!1);
        break;
      case ve.SPACE:
      case ve.ENTER:
        $ !== null && p($, W);
        break;
    }
  }
  ht(function() {
    var W = document.getElementById(T);
    W && W.scrollIntoView && W.scrollIntoView(!1);
  }, [$]), ht(function() {
    w || R(null);
  }, [w]);
  var M = D({}, m ? "marginRight" : "marginLeft", v);
  a.length || (M.visibility = "hidden", M.order = 1);
  var z = ee(D({}, "".concat(I, "-rtl"), m)), H = i ? null : /* @__PURE__ */ u.createElement(VS, Me({
    prefixCls: I,
    overlay: x,
    visible: a.length ? w : !1,
    onVisibleChange: C,
    overlayClassName: ee(z, S),
    mouseEnterDelay: 0.1,
    mouseLeaveDelay: 0.1,
    getPopupContainer: g
  }, l), /* @__PURE__ */ u.createElement("button", {
    type: "button",
    className: "".concat(r, "-nav-more"),
    style: M,
    tabIndex: -1,
    "aria-hidden": "true",
    "aria-haspopup": "listbox",
    "aria-controls": j,
    id: "".concat(n, "-more"),
    "aria-expanded": w,
    onKeyDown: L
  }, F));
  return /* @__PURE__ */ u.createElement("div", {
    className: ee("".concat(r, "-nav-operations"), d),
    style: c,
    ref: t
  }, H, /* @__PURE__ */ u.createElement(lv, {
    prefixCls: r,
    locale: o,
    editable: f
  }));
});
const ZC = /* @__PURE__ */ u.memo(YC, function(e, t) {
  return (
    // https://github.com/ant-design/ant-design/issues/32544
    // We'd better remove syntactic sugar in `rc-menu` since this has perf issue
    t.tabMoving
  );
});
var QC = function(t) {
  var r = t.prefixCls, n = t.id, a = t.active, o = t.tab, i = o.key, s = o.label, l = o.disabled, c = o.closeIcon, d = o.icon, f = t.closable, v = t.renderWrapper, m = t.removeAriaLabel, h = t.editable, p = t.onClick, g = t.onFocus, S = t.style, b = "".concat(r, "-tab"), y = sv(f, c, h, l);
  function w($) {
    l || p($);
  }
  function C($) {
    $.preventDefault(), $.stopPropagation(), h.onEdit("remove", {
      key: i,
      event: $
    });
  }
  var O = u.useMemo(function() {
    return d && typeof s == "string" ? /* @__PURE__ */ u.createElement("span", null, s) : s;
  }, [s, d]), _ = /* @__PURE__ */ u.createElement("div", {
    key: i,
    "data-node-key": iv(i),
    className: ee(b, D(D(D({}, "".concat(b, "-with-remove"), y), "".concat(b, "-active"), a), "".concat(b, "-disabled"), l)),
    style: S,
    onClick: w
  }, /* @__PURE__ */ u.createElement("div", {
    role: "tab",
    "aria-selected": a,
    id: n && "".concat(n, "-tab-").concat(i),
    className: "".concat(b, "-btn"),
    "aria-controls": n && "".concat(n, "-panel-").concat(i),
    "aria-disabled": l,
    tabIndex: l ? null : 0,
    onClick: function(R) {
      R.stopPropagation(), w(R);
    },
    onKeyDown: function(R) {
      [ve.SPACE, ve.ENTER].includes(R.which) && (R.preventDefault(), w(R));
    },
    onFocus: g
  }, d && /* @__PURE__ */ u.createElement("span", {
    className: "".concat(b, "-icon")
  }, d), s && O), y && /* @__PURE__ */ u.createElement("button", {
    type: "button",
    "aria-label": m || "remove",
    tabIndex: 0,
    className: "".concat(b, "-remove"),
    onClick: function(R) {
      R.stopPropagation(), C(R);
    }
  }, c || h.removeIcon || "×"));
  return v ? v(_) : _;
}, JC = function(t, r) {
  var n = t.offsetWidth, a = t.offsetHeight, o = t.offsetTop, i = t.offsetLeft, s = t.getBoundingClientRect(), l = s.width, c = s.height, d = s.x, f = s.y;
  return Math.abs(l - n) < 1 ? [l, c, d - r.x, f - r.y] : [n, a, i, o];
}, _n = function(t) {
  var r = t.current || {}, n = r.offsetWidth, a = n === void 0 ? 0 : n, o = r.offsetHeight, i = o === void 0 ? 0 : o;
  if (t.current) {
    var s = t.current.getBoundingClientRect(), l = s.width, c = s.height;
    if (Math.abs(l - a) < 1)
      return [l, c];
  }
  return [a, i];
}, ao = function(t, r) {
  return t[r ? 0 : 1];
}, su = /* @__PURE__ */ u.forwardRef(function(e, t) {
  var r = e.className, n = e.style, a = e.id, o = e.animated, i = e.activeKey, s = e.rtl, l = e.extra, c = e.editable, d = e.locale, f = e.tabPosition, v = e.tabBarGutter, m = e.children, h = e.onTabClick, p = e.onTabScroll, g = e.indicator, S = u.useContext(Xo), b = S.prefixCls, y = S.tabs, w = ke(null), C = ke(null), O = ke(null), _ = ke(null), $ = ke(null), R = ke(null), A = ke(null), F = f === "top" || f === "bottom", j = ru(0, function(K, X) {
    F && p && p({
      direction: K > X ? "left" : "right"
    });
  }), I = G(j, 2), T = I[0], B = I[1], N = ru(0, function(K, X) {
    !F && p && p({
      direction: K > X ? "top" : "bottom"
    });
  }), x = G(N, 2), E = x[0], L = x[1], M = pt([0, 0]), z = G(M, 2), H = z[0], W = z[1], U = pt([0, 0]), Q = G(U, 2), q = Q[0], J = Q[1], oe = pt([0, 0]), ue = G(oe, 2), xe = ue[0], me = ue[1], fe = pt([0, 0]), we = G(fe, 2), k = we[0], le = we[1], ge = GC(/* @__PURE__ */ new Map()), $e = G(ge, 2), ye = $e[0], ie = $e[1], ne = WC(y, ye, q[0]), ae = ao(H, F), Se = ao(q, F), he = ao(xe, F), be = ao(k, F), Pe = ae < Se + he, pe = Pe ? ae - be : ae - he, ct = "".concat(b, "-nav-operations-hidden"), at = 0, _e = 0;
  F && s ? (at = 0, _e = Math.max(0, Se - pe)) : (at = Math.min(0, pe - Se), _e = 0);
  function Oe(K) {
    return K < at ? at : K > _e ? _e : K;
  }
  var Z = ke(null), re = pt(), Te = G(re, 2), Fe = Te[0], Ge = Te[1];
  function Be() {
    Ge(Date.now());
  }
  function Ie() {
    Z.current && clearTimeout(Z.current);
  }
  UC(_, function(K, X) {
    function ce(Le, Ne) {
      Le(function(je) {
        var De = Oe(je + Ne);
        return De;
      });
    }
    return Pe ? (F ? ce(B, K) : ce(L, X), Ie(), Be(), !0) : !1;
  }), ht(function() {
    return Ie(), Fe && (Z.current = setTimeout(function() {
      Ge(0);
    }, 100)), Ie;
  }, [Fe]);
  var se = qC(
    ne,
    // Container
    pe,
    // Transform
    F ? T : E,
    // Tabs
    Se,
    // Add
    he,
    // Operation
    be,
    V(V({}, e), {}, {
      tabs: y
    })
  ), de = G(se, 2), We = de[0], rt = de[1], Ct = Ht(function() {
    var K = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : i, X = ne.get(K) || {
      width: 0,
      height: 0,
      left: 0,
      right: 0,
      top: 0
    };
    if (F) {
      var ce = T;
      s ? X.right < T ? ce = X.right : X.right + X.width > T + pe && (ce = X.right + X.width - pe) : X.left < -T ? ce = -X.left : X.left + X.width > -T + pe && (ce = -(X.left + X.width - pe)), L(0), B(Oe(ce));
    } else {
      var Le = E;
      X.top < -E ? Le = -X.top : X.top + X.height > -E + pe && (Le = -(X.top + X.height - pe)), B(0), L(Oe(Le));
    }
  }), ut = {};
  f === "top" || f === "bottom" ? ut[s ? "marginRight" : "marginLeft"] = v : ut.marginTop = v;
  var qe = y.map(function(K, X) {
    var ce = K.key;
    return /* @__PURE__ */ u.createElement(QC, {
      id: a,
      prefixCls: b,
      key: ce,
      tab: K,
      style: X === 0 ? void 0 : ut,
      closable: K.closable,
      editable: c,
      active: ce === i,
      renderWrapper: m,
      removeAriaLabel: d == null ? void 0 : d.removeAriaLabel,
      onClick: function(Ne) {
        h(ce, Ne);
      },
      onFocus: function() {
        Ct(ce), Be(), _.current && (s || (_.current.scrollLeft = 0), _.current.scrollTop = 0);
      }
    });
  }), Ue = function() {
    return ie(function() {
      var X, ce = /* @__PURE__ */ new Map(), Le = (X = $.current) === null || X === void 0 ? void 0 : X.getBoundingClientRect();
      return y.forEach(function(Ne) {
        var je, De = Ne.key, vt = (je = $.current) === null || je === void 0 ? void 0 : je.querySelector('[data-node-key="'.concat(iv(De), '"]'));
        if (vt) {
          var tt = JC(vt, Le), Ke = G(tt, 4), $t = Ke[0], Kt = Ke[1], kt = Ke[2], gt = Ke[3];
          ce.set(De, {
            width: $t,
            height: Kt,
            left: kt,
            top: gt
          });
        }
      }), ce;
    });
  };
  ht(function() {
    Ue();
  }, [y.map(function(K) {
    return K.key;
  }).join("_")]);
  var He = ov(function() {
    var K = _n(w), X = _n(C), ce = _n(O);
    W([K[0] - X[0] - ce[0], K[1] - X[1] - ce[1]]);
    var Le = _n(A);
    me(Le);
    var Ne = _n(R);
    le(Ne);
    var je = _n($);
    J([je[0] - Le[0], je[1] - Le[1]]), Ue();
  }), Ae = y.slice(0, We), Ce = y.slice(rt + 1), Qe = [].concat(Ee(Ae), Ee(Ce)), yt = ne.get(i), Xe = HC({
    activeTabOffset: yt,
    horizontal: F,
    indicator: g,
    rtl: s
  }), Ye = Xe.style;
  ht(function() {
    Ct();
  }, [i, at, _e, iu(yt), iu(ne), F]), ht(function() {
    He();
  }, [s]);
  var it = !!Qe.length, St = "".concat(b, "-nav-wrap"), Pt, Vt, Wt, P;
  return F ? s ? (Vt = T > 0, Pt = T !== _e) : (Pt = T < 0, Vt = T !== at) : (Wt = E < 0, P = E !== at), /* @__PURE__ */ u.createElement(hr, {
    onResize: He
  }, /* @__PURE__ */ u.createElement("div", {
    ref: Ia(t, w),
    role: "tablist",
    className: ee("".concat(b, "-nav"), r),
    style: n,
    onKeyDown: function() {
      Be();
    }
  }, /* @__PURE__ */ u.createElement(Ms, {
    ref: C,
    position: "left",
    extra: l,
    prefixCls: b
  }), /* @__PURE__ */ u.createElement(hr, {
    onResize: He
  }, /* @__PURE__ */ u.createElement("div", {
    className: ee(St, D(D(D(D({}, "".concat(St, "-ping-left"), Pt), "".concat(St, "-ping-right"), Vt), "".concat(St, "-ping-top"), Wt), "".concat(St, "-ping-bottom"), P)),
    ref: _
  }, /* @__PURE__ */ u.createElement(hr, {
    onResize: He
  }, /* @__PURE__ */ u.createElement("div", {
    ref: $,
    className: "".concat(b, "-nav-list"),
    style: {
      transform: "translate(".concat(T, "px, ").concat(E, "px)"),
      transition: Fe ? "none" : void 0
    }
  }, qe, /* @__PURE__ */ u.createElement(lv, {
    ref: A,
    prefixCls: b,
    locale: d,
    editable: c,
    style: V(V({}, qe.length === 0 ? void 0 : ut), {}, {
      visibility: it ? "hidden" : null
    })
  }), /* @__PURE__ */ u.createElement("div", {
    className: ee("".concat(b, "-ink-bar"), D({}, "".concat(b, "-ink-bar-animated"), o.inkBar)),
    style: Ye
  }))))), /* @__PURE__ */ u.createElement(ZC, Me({}, e, {
    removeAriaLabel: d == null ? void 0 : d.removeAriaLabel,
    ref: R,
    prefixCls: b,
    tabs: Qe,
    className: !it && ct,
    tabMoving: !!Fe
  })), /* @__PURE__ */ u.createElement(Ms, {
    ref: O,
    position: "right",
    extra: l,
    prefixCls: b
  })));
}), vl = /* @__PURE__ */ u.forwardRef(function(e, t) {
  var r = e.prefixCls, n = e.className, a = e.style, o = e.id, i = e.active, s = e.tabKey, l = e.children;
  return /* @__PURE__ */ u.createElement("div", {
    id: o && "".concat(o, "-panel-").concat(s),
    role: "tabpanel",
    tabIndex: i ? 0 : -1,
    "aria-labelledby": o && "".concat(o, "-tab-").concat(s),
    "aria-hidden": !i,
    style: a,
    className: ee(r, i && "".concat(r, "-active"), n),
    ref: t
  }, l);
});
process.env.NODE_ENV !== "production" && (vl.displayName = "TabPane");
var e1 = ["renderTabBar"], t1 = ["label", "key"], cv = function(t) {
  var r = t.renderTabBar, n = et(t, e1), a = u.useContext(Xo), o = a.tabs;
  if (r) {
    var i = V(V({}, n), {}, {
      // Legacy support. We do not use this actually
      panes: o.map(function(s) {
        var l = s.label, c = s.key, d = et(s, t1);
        return /* @__PURE__ */ u.createElement(vl, Me({
          tab: l,
          key: c,
          tabKey: c
        }, d));
      })
    });
    return r(i, su);
  }
  return /* @__PURE__ */ u.createElement(su, n);
};
process.env.NODE_ENV !== "production" && (cv.displayName = "TabNavListWrapper");
var r1 = ["key", "forceRender", "style", "className", "destroyInactiveTabPane"], n1 = function(t) {
  var r = t.id, n = t.activeKey, a = t.animated, o = t.tabPosition, i = t.destroyInactiveTabPane, s = u.useContext(Xo), l = s.prefixCls, c = s.tabs, d = a.tabPane, f = "".concat(l, "-tabpane");
  return /* @__PURE__ */ u.createElement("div", {
    className: ee("".concat(l, "-content-holder"))
  }, /* @__PURE__ */ u.createElement("div", {
    className: ee("".concat(l, "-content"), "".concat(l, "-content-").concat(o), D({}, "".concat(l, "-content-animated"), d))
  }, c.map(function(v) {
    var m = v.key, h = v.forceRender, p = v.style, g = v.className, S = v.destroyInactiveTabPane, b = et(v, r1), y = m === n;
    return /* @__PURE__ */ u.createElement(vn, Me({
      key: m,
      visible: y,
      forceRender: h,
      removeOnLeave: !!(i || S),
      leavedClassName: "".concat(f, "-hidden")
    }, a.tabPaneMotion), function(w, C) {
      var O = w.style, _ = w.className;
      return /* @__PURE__ */ u.createElement(vl, Me({}, b, {
        prefixCls: f,
        id: r,
        tabKey: m,
        animated: d,
        active: y,
        style: V(V({}, p), O),
        className: ee(g, _),
        ref: C
      }));
    });
  })));
};
function a1() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
    inkBar: !0,
    tabPane: !1
  }, t;
  return e === !1 ? t = {
    inkBar: !1,
    tabPane: !1
  } : e === !0 ? t = {
    inkBar: !0,
    tabPane: !1
  } : t = V({
    inkBar: !0
  }, ze(e) === "object" ? e : {}), t.tabPaneMotion && t.tabPane === void 0 && (t.tabPane = !0), !t.tabPaneMotion && t.tabPane && (process.env.NODE_ENV !== "production" && ot(!1, "`animated.tabPane` is true but `animated.tabPaneMotion` is not provided. Motion will not work."), t.tabPane = !1), t;
}
var o1 = ["id", "prefixCls", "className", "items", "direction", "activeKey", "defaultActiveKey", "editable", "animated", "tabPosition", "tabBarGutter", "tabBarStyle", "tabBarExtraContent", "locale", "more", "destroyInactiveTabPane", "renderTabBar", "onChange", "onTabClick", "onTabScroll", "getPopupContainer", "popupClassName", "indicator"], lu = 0, uv = /* @__PURE__ */ u.forwardRef(function(e, t) {
  var r = e.id, n = e.prefixCls, a = n === void 0 ? "rc-tabs" : n, o = e.className, i = e.items, s = e.direction, l = e.activeKey, c = e.defaultActiveKey, d = e.editable, f = e.animated, v = e.tabPosition, m = v === void 0 ? "top" : v, h = e.tabBarGutter, p = e.tabBarStyle, g = e.tabBarExtraContent, S = e.locale, b = e.more, y = e.destroyInactiveTabPane, w = e.renderTabBar, C = e.onChange, O = e.onTabClick, _ = e.onTabScroll, $ = e.getPopupContainer, R = e.popupClassName, A = e.indicator, F = et(e, o1), j = u.useMemo(function() {
    return (i || []).filter(function(k) {
      return k && ze(k) === "object" && "key" in k;
    });
  }, [i]), I = s === "rtl", T = a1(f), B = pt(!1), N = G(B, 2), x = N[0], E = N[1];
  ht(function() {
    E(xf());
  }, []);
  var L = cr(function() {
    var k;
    return (k = j[0]) === null || k === void 0 ? void 0 : k.key;
  }, {
    value: l,
    defaultValue: c
  }), M = G(L, 2), z = M[0], H = M[1], W = pt(function() {
    return j.findIndex(function(k) {
      return k.key === z;
    });
  }), U = G(W, 2), Q = U[0], q = U[1];
  ht(function() {
    var k = j.findIndex(function(ge) {
      return ge.key === z;
    });
    if (k === -1) {
      var le;
      k = Math.max(0, Math.min(Q, j.length - 1)), H((le = j[k]) === null || le === void 0 ? void 0 : le.key);
    }
    q(k);
  }, [j.map(function(k) {
    return k.key;
  }).join("_"), z, Q]);
  var J = cr(null, {
    value: r
  }), oe = G(J, 2), ue = oe[0], xe = oe[1];
  ht(function() {
    r || (xe("rc-tabs-".concat(process.env.NODE_ENV === "test" ? "test" : lu)), lu += 1);
  }, []);
  function me(k, le) {
    O == null || O(k, le);
    var ge = k !== z;
    H(k), ge && (C == null || C(k));
  }
  var fe = {
    id: ue,
    activeKey: z,
    animated: T,
    tabPosition: m,
    rtl: I,
    mobile: x
  }, we = V(V({}, fe), {}, {
    editable: d,
    locale: S,
    more: b,
    tabBarGutter: h,
    onTabClick: me,
    onTabScroll: _,
    extra: g,
    style: p,
    panes: null,
    getPopupContainer: $,
    popupClassName: R,
    indicator: A
  });
  return /* @__PURE__ */ u.createElement(Xo.Provider, {
    value: {
      tabs: j,
      prefixCls: a
    }
  }, /* @__PURE__ */ u.createElement("div", Me({
    ref: t,
    id: r,
    className: ee(a, "".concat(a, "-").concat(m), D(D(D({}, "".concat(a, "-mobile"), x), "".concat(a, "-editable"), d), "".concat(a, "-rtl"), I), o)
  }, F), /* @__PURE__ */ u.createElement(cv, Me({}, we, {
    renderTabBar: w
  })), /* @__PURE__ */ u.createElement(n1, Me({
    destroyInactiveTabPane: y
  }, fe, {
    animated: T
  }))));
});
process.env.NODE_ENV !== "production" && (uv.displayName = "Tabs");
const i1 = {
  motionAppear: !1,
  motionEnter: !0,
  motionLeave: !0
};
function s1(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    inkBar: !0,
    tabPane: !1
  }, r;
  return t === !1 ? r = {
    inkBar: !1,
    tabPane: !1
  } : t === !0 ? r = {
    inkBar: !0,
    tabPane: !0
  } : r = Object.assign({
    inkBar: !0
  }, typeof t == "object" ? t : {}), r.tabPane && (r.tabPaneMotion = Object.assign(Object.assign({}, i1), {
    motionName: ef(e, "switch")
  })), r;
}
var l1 = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
    t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
function c1(e) {
  return e.filter((t) => t);
}
function u1(e, t) {
  if (process.env.NODE_ENV !== "production" && Ft("Tabs").deprecated(!t, "Tabs.TabPane", "items"), e)
    return e;
  const r = Zr(t).map((n) => {
    if (/* @__PURE__ */ u.isValidElement(n)) {
      const {
        key: a,
        props: o
      } = n, i = o || {}, {
        tab: s
      } = i, l = l1(i, ["tab"]);
      return Object.assign(Object.assign({
        key: String(a)
      }, l), {
        label: s
      });
    }
    return null;
  });
  return c1(r);
}
const d1 = (e) => {
  const {
    componentCls: t,
    motionDurationSlow: r
  } = e;
  return [
    {
      [t]: {
        [`${t}-switch`]: {
          "&-appear, &-enter": {
            transition: "none",
            "&-start": {
              opacity: 0
            },
            "&-active": {
              opacity: 1,
              transition: `opacity ${r}`
            }
          },
          "&-leave": {
            position: "absolute",
            transition: "none",
            inset: 0,
            "&-start": {
              opacity: 1
            },
            "&-active": {
              opacity: 0,
              transition: `opacity ${r}`
            }
          }
        }
      }
    },
    // Follow code may reuse in other components
    [Ac(e, "slide-up"), Ac(e, "slide-down")]
  ];
}, f1 = (e) => {
  const {
    componentCls: t,
    tabsCardPadding: r,
    cardBg: n,
    cardGutter: a,
    colorBorderSecondary: o,
    itemSelectedColor: i
  } = e;
  return {
    [`${t}-card`]: {
      [`> ${t}-nav, > div > ${t}-nav`]: {
        [`${t}-tab`]: {
          margin: 0,
          padding: r,
          background: n,
          border: `${te(e.lineWidth)} ${e.lineType} ${o}`,
          transition: `all ${e.motionDurationSlow} ${e.motionEaseInOut}`
        },
        [`${t}-tab-active`]: {
          color: i,
          background: e.colorBgContainer
        },
        [`${t}-ink-bar`]: {
          visibility: "hidden"
        }
      },
      // ========================== Top & Bottom ==========================
      [`&${t}-top, &${t}-bottom`]: {
        [`> ${t}-nav, > div > ${t}-nav`]: {
          [`${t}-tab + ${t}-tab`]: {
            marginLeft: {
              _skip_check_: !0,
              value: te(a)
            }
          }
        }
      },
      [`&${t}-top`]: {
        [`> ${t}-nav, > div > ${t}-nav`]: {
          [`${t}-tab`]: {
            borderRadius: `${te(e.borderRadiusLG)} ${te(e.borderRadiusLG)} 0 0`
          },
          [`${t}-tab-active`]: {
            borderBottomColor: e.colorBgContainer
          }
        }
      },
      [`&${t}-bottom`]: {
        [`> ${t}-nav, > div > ${t}-nav`]: {
          [`${t}-tab`]: {
            borderRadius: `0 0 ${te(e.borderRadiusLG)} ${te(e.borderRadiusLG)}`
          },
          [`${t}-tab-active`]: {
            borderTopColor: e.colorBgContainer
          }
        }
      },
      // ========================== Left & Right ==========================
      [`&${t}-left, &${t}-right`]: {
        [`> ${t}-nav, > div > ${t}-nav`]: {
          [`${t}-tab + ${t}-tab`]: {
            marginTop: te(a)
          }
        }
      },
      [`&${t}-left`]: {
        [`> ${t}-nav, > div > ${t}-nav`]: {
          [`${t}-tab`]: {
            borderRadius: {
              _skip_check_: !0,
              value: `${te(e.borderRadiusLG)} 0 0 ${te(e.borderRadiusLG)}`
            }
          },
          [`${t}-tab-active`]: {
            borderRightColor: {
              _skip_check_: !0,
              value: e.colorBgContainer
            }
          }
        }
      },
      [`&${t}-right`]: {
        [`> ${t}-nav, > div > ${t}-nav`]: {
          [`${t}-tab`]: {
            borderRadius: {
              _skip_check_: !0,
              value: `0 ${te(e.borderRadiusLG)} ${te(e.borderRadiusLG)} 0`
            }
          },
          [`${t}-tab-active`]: {
            borderLeftColor: {
              _skip_check_: !0,
              value: e.colorBgContainer
            }
          }
        }
      }
    }
  };
}, v1 = (e) => {
  const {
    componentCls: t,
    itemHoverColor: r,
    dropdownEdgeChildVerticalPadding: n
  } = e;
  return {
    [`${t}-dropdown`]: Object.assign(Object.assign({}, Un(e)), {
      position: "absolute",
      top: -9999,
      left: {
        _skip_check_: !0,
        value: -9999
      },
      zIndex: e.zIndexPopup,
      display: "block",
      "&-hidden": {
        display: "none"
      },
      [`${t}-dropdown-menu`]: {
        maxHeight: e.tabsDropdownHeight,
        margin: 0,
        padding: `${te(n)} 0`,
        overflowX: "hidden",
        overflowY: "auto",
        textAlign: {
          _skip_check_: !0,
          value: "left"
        },
        listStyleType: "none",
        backgroundColor: e.colorBgContainer,
        backgroundClip: "padding-box",
        borderRadius: e.borderRadiusLG,
        outline: "none",
        boxShadow: e.boxShadowSecondary,
        "&-item": Object.assign(Object.assign({}, Gs), {
          display: "flex",
          alignItems: "center",
          minWidth: e.tabsDropdownWidth,
          margin: 0,
          padding: `${te(e.paddingXXS)} ${te(e.paddingSM)}`,
          color: e.colorText,
          fontWeight: "normal",
          fontSize: e.fontSize,
          lineHeight: e.lineHeight,
          cursor: "pointer",
          transition: `all ${e.motionDurationSlow}`,
          "> span": {
            flex: 1,
            whiteSpace: "nowrap"
          },
          "&-remove": {
            flex: "none",
            marginLeft: {
              _skip_check_: !0,
              value: e.marginSM
            },
            color: e.colorTextDescription,
            fontSize: e.fontSizeSM,
            background: "transparent",
            border: 0,
            cursor: "pointer",
            "&:hover": {
              color: r
            }
          },
          "&:hover": {
            background: e.controlItemBgHover
          },
          "&-disabled": {
            "&, &:hover": {
              color: e.colorTextDisabled,
              background: "transparent",
              cursor: "not-allowed"
            }
          }
        })
      }
    })
  };
}, g1 = (e) => {
  const {
    componentCls: t,
    margin: r,
    colorBorderSecondary: n,
    horizontalMargin: a,
    verticalItemPadding: o,
    verticalItemMargin: i,
    calc: s
  } = e;
  return {
    // ========================== Top & Bottom ==========================
    [`${t}-top, ${t}-bottom`]: {
      flexDirection: "column",
      [`> ${t}-nav, > div > ${t}-nav`]: {
        margin: a,
        "&::before": {
          position: "absolute",
          right: {
            _skip_check_: !0,
            value: 0
          },
          left: {
            _skip_check_: !0,
            value: 0
          },
          borderBottom: `${te(e.lineWidth)} ${e.lineType} ${n}`,
          content: "''"
        },
        [`${t}-ink-bar`]: {
          height: e.lineWidthBold,
          "&-animated": {
            transition: `width ${e.motionDurationSlow}, left ${e.motionDurationSlow},
            right ${e.motionDurationSlow}`
          }
        },
        [`${t}-nav-wrap`]: {
          "&::before, &::after": {
            top: 0,
            bottom: 0,
            width: e.controlHeight
          },
          "&::before": {
            left: {
              _skip_check_: !0,
              value: 0
            },
            boxShadow: e.boxShadowTabsOverflowLeft
          },
          "&::after": {
            right: {
              _skip_check_: !0,
              value: 0
            },
            boxShadow: e.boxShadowTabsOverflowRight
          },
          [`&${t}-nav-wrap-ping-left::before`]: {
            opacity: 1
          },
          [`&${t}-nav-wrap-ping-right::after`]: {
            opacity: 1
          }
        }
      }
    },
    [`${t}-top`]: {
      [`> ${t}-nav,
        > div > ${t}-nav`]: {
        "&::before": {
          bottom: 0
        },
        [`${t}-ink-bar`]: {
          bottom: 0
        }
      }
    },
    [`${t}-bottom`]: {
      [`> ${t}-nav, > div > ${t}-nav`]: {
        order: 1,
        marginTop: r,
        marginBottom: 0,
        "&::before": {
          top: 0
        },
        [`${t}-ink-bar`]: {
          top: 0
        }
      },
      [`> ${t}-content-holder, > div > ${t}-content-holder`]: {
        order: 0
      }
    },
    // ========================== Left & Right ==========================
    [`${t}-left, ${t}-right`]: {
      [`> ${t}-nav, > div > ${t}-nav`]: {
        flexDirection: "column",
        minWidth: s(e.controlHeight).mul(1.25).equal(),
        // >>>>>>>>>>> Tab
        [`${t}-tab`]: {
          padding: o,
          textAlign: "center"
        },
        [`${t}-tab + ${t}-tab`]: {
          margin: i
        },
        // >>>>>>>>>>> Nav
        [`${t}-nav-wrap`]: {
          flexDirection: "column",
          "&::before, &::after": {
            right: {
              _skip_check_: !0,
              value: 0
            },
            left: {
              _skip_check_: !0,
              value: 0
            },
            height: e.controlHeight
          },
          "&::before": {
            top: 0,
            boxShadow: e.boxShadowTabsOverflowTop
          },
          "&::after": {
            bottom: 0,
            boxShadow: e.boxShadowTabsOverflowBottom
          },
          [`&${t}-nav-wrap-ping-top::before`]: {
            opacity: 1
          },
          [`&${t}-nav-wrap-ping-bottom::after`]: {
            opacity: 1
          }
        },
        // >>>>>>>>>>> Ink Bar
        [`${t}-ink-bar`]: {
          width: e.lineWidthBold,
          "&-animated": {
            transition: `height ${e.motionDurationSlow}, top ${e.motionDurationSlow}`
          }
        },
        [`${t}-nav-list, ${t}-nav-operations`]: {
          flex: "1 0 auto",
          // fix safari scroll problem
          flexDirection: "column"
        }
      }
    },
    [`${t}-left`]: {
      [`> ${t}-nav, > div > ${t}-nav`]: {
        [`${t}-ink-bar`]: {
          right: {
            _skip_check_: !0,
            value: 0
          }
        }
      },
      [`> ${t}-content-holder, > div > ${t}-content-holder`]: {
        marginLeft: {
          _skip_check_: !0,
          value: te(s(e.lineWidth).mul(-1).equal())
        },
        borderLeft: {
          _skip_check_: !0,
          value: `${te(e.lineWidth)} ${e.lineType} ${e.colorBorder}`
        },
        [`> ${t}-content > ${t}-tabpane`]: {
          paddingLeft: {
            _skip_check_: !0,
            value: e.paddingLG
          }
        }
      }
    },
    [`${t}-right`]: {
      [`> ${t}-nav, > div > ${t}-nav`]: {
        order: 1,
        [`${t}-ink-bar`]: {
          left: {
            _skip_check_: !0,
            value: 0
          }
        }
      },
      [`> ${t}-content-holder, > div > ${t}-content-holder`]: {
        order: 0,
        marginRight: {
          _skip_check_: !0,
          value: s(e.lineWidth).mul(-1).equal()
        },
        borderRight: {
          _skip_check_: !0,
          value: `${te(e.lineWidth)} ${e.lineType} ${e.colorBorder}`
        },
        [`> ${t}-content > ${t}-tabpane`]: {
          paddingRight: {
            _skip_check_: !0,
            value: e.paddingLG
          }
        }
      }
    }
  };
}, m1 = (e) => {
  const {
    componentCls: t,
    cardPaddingSM: r,
    cardPaddingLG: n,
    horizontalItemPaddingSM: a,
    horizontalItemPaddingLG: o
  } = e;
  return {
    [t]: {
      "&-small": {
        [`> ${t}-nav`]: {
          [`${t}-tab`]: {
            padding: a,
            fontSize: e.titleFontSizeSM
          }
        }
      },
      "&-large": {
        [`> ${t}-nav`]: {
          [`${t}-tab`]: {
            padding: o,
            fontSize: e.titleFontSizeLG
          }
        }
      }
    },
    [`${t}-card`]: {
      [`&${t}-small`]: {
        [`> ${t}-nav`]: {
          [`${t}-tab`]: {
            padding: r
          }
        },
        [`&${t}-bottom`]: {
          [`> ${t}-nav ${t}-tab`]: {
            borderRadius: `0 0 ${te(e.borderRadius)} ${te(e.borderRadius)}`
          }
        },
        [`&${t}-top`]: {
          [`> ${t}-nav ${t}-tab`]: {
            borderRadius: `${te(e.borderRadius)} ${te(e.borderRadius)} 0 0`
          }
        },
        [`&${t}-right`]: {
          [`> ${t}-nav ${t}-tab`]: {
            borderRadius: {
              _skip_check_: !0,
              value: `0 ${te(e.borderRadius)} ${te(e.borderRadius)} 0`
            }
          }
        },
        [`&${t}-left`]: {
          [`> ${t}-nav ${t}-tab`]: {
            borderRadius: {
              _skip_check_: !0,
              value: `${te(e.borderRadius)} 0 0 ${te(e.borderRadius)}`
            }
          }
        }
      },
      [`&${t}-large`]: {
        [`> ${t}-nav`]: {
          [`${t}-tab`]: {
            padding: n
          }
        }
      }
    }
  };
}, p1 = (e) => {
  const {
    componentCls: t,
    itemActiveColor: r,
    itemHoverColor: n,
    iconCls: a,
    tabsHorizontalItemMargin: o,
    horizontalItemPadding: i,
    itemSelectedColor: s,
    itemColor: l
  } = e, c = `${t}-tab`;
  return {
    [c]: {
      position: "relative",
      WebkitTouchCallout: "none",
      WebkitTapHighlightColor: "transparent",
      display: "inline-flex",
      alignItems: "center",
      padding: i,
      fontSize: e.titleFontSize,
      background: "transparent",
      border: 0,
      outline: "none",
      cursor: "pointer",
      color: l,
      "&-btn, &-remove": Object.assign({
        "&:focus:not(:focus-visible), &:active": {
          color: r
        }
      }, qs(e)),
      "&-btn": {
        outline: "none",
        transition: `all ${e.motionDurationSlow}`,
        [`${c}-icon:not(:last-child)`]: {
          marginInlineEnd: e.marginSM
        }
      },
      "&-remove": {
        flex: "none",
        marginRight: {
          _skip_check_: !0,
          value: e.calc(e.marginXXS).mul(-1).equal()
        },
        marginLeft: {
          _skip_check_: !0,
          value: e.marginXS
        },
        color: e.colorTextDescription,
        fontSize: e.fontSizeSM,
        background: "transparent",
        border: "none",
        outline: "none",
        cursor: "pointer",
        transition: `all ${e.motionDurationSlow}`,
        "&:hover": {
          color: e.colorTextHeading
        }
      },
      "&:hover": {
        color: n
      },
      [`&${c}-active ${c}-btn`]: {
        color: s,
        textShadow: e.tabsActiveTextShadow
      },
      [`&${c}-disabled`]: {
        color: e.colorTextDisabled,
        cursor: "not-allowed"
      },
      [`&${c}-disabled ${c}-btn, &${c}-disabled ${t}-remove`]: {
        "&:focus, &:active": {
          color: e.colorTextDisabled
        }
      },
      [`& ${c}-remove ${a}`]: {
        margin: 0
      },
      [`${a}:not(:last-child)`]: {
        marginRight: {
          _skip_check_: !0,
          value: e.marginSM
        }
      }
    },
    [`${c} + ${c}`]: {
      margin: {
        _skip_check_: !0,
        value: o
      }
    }
  };
}, h1 = (e) => {
  const {
    componentCls: t,
    tabsHorizontalItemMarginRTL: r,
    iconCls: n,
    cardGutter: a,
    calc: o
  } = e;
  return {
    [`${t}-rtl`]: {
      direction: "rtl",
      [`${t}-nav`]: {
        [`${t}-tab`]: {
          margin: {
            _skip_check_: !0,
            value: r
          },
          [`${t}-tab:last-of-type`]: {
            marginLeft: {
              _skip_check_: !0,
              value: 0
            }
          },
          [n]: {
            marginRight: {
              _skip_check_: !0,
              value: 0
            },
            marginLeft: {
              _skip_check_: !0,
              value: te(e.marginSM)
            }
          },
          [`${t}-tab-remove`]: {
            marginRight: {
              _skip_check_: !0,
              value: te(e.marginXS)
            },
            marginLeft: {
              _skip_check_: !0,
              value: te(o(e.marginXXS).mul(-1).equal())
            },
            [n]: {
              margin: 0
            }
          }
        }
      },
      [`&${t}-left`]: {
        [`> ${t}-nav`]: {
          order: 1
        },
        [`> ${t}-content-holder`]: {
          order: 0
        }
      },
      [`&${t}-right`]: {
        [`> ${t}-nav`]: {
          order: 0
        },
        [`> ${t}-content-holder`]: {
          order: 1
        }
      },
      // ====================== Card ======================
      [`&${t}-card${t}-top, &${t}-card${t}-bottom`]: {
        [`> ${t}-nav, > div > ${t}-nav`]: {
          [`${t}-tab + ${t}-tab`]: {
            marginRight: {
              _skip_check_: !0,
              value: a
            },
            marginLeft: {
              _skip_check_: !0,
              value: 0
            }
          }
        }
      }
    },
    [`${t}-dropdown-rtl`]: {
      direction: "rtl"
    },
    [`${t}-menu-item`]: {
      [`${t}-dropdown-rtl`]: {
        textAlign: {
          _skip_check_: !0,
          value: "right"
        }
      }
    }
  };
}, b1 = (e) => {
  const {
    componentCls: t,
    tabsCardPadding: r,
    cardHeight: n,
    cardGutter: a,
    itemHoverColor: o,
    itemActiveColor: i,
    colorBorderSecondary: s
  } = e;
  return {
    [t]: Object.assign(Object.assign(Object.assign(Object.assign({}, Un(e)), {
      display: "flex",
      // ========================== Navigation ==========================
      [`> ${t}-nav, > div > ${t}-nav`]: {
        position: "relative",
        display: "flex",
        flex: "none",
        alignItems: "center",
        [`${t}-nav-wrap`]: {
          position: "relative",
          display: "flex",
          flex: "auto",
          alignSelf: "stretch",
          overflow: "hidden",
          whiteSpace: "nowrap",
          transform: "translate(0)",
          // Fix chrome render bug
          // >>>>> Ping shadow
          "&::before, &::after": {
            position: "absolute",
            zIndex: 1,
            opacity: 0,
            transition: `opacity ${e.motionDurationSlow}`,
            content: "''",
            pointerEvents: "none"
          }
        },
        [`${t}-nav-list`]: {
          position: "relative",
          display: "flex",
          transition: `opacity ${e.motionDurationSlow}`
        },
        // >>>>>>>> Operations
        [`${t}-nav-operations`]: {
          display: "flex",
          alignSelf: "stretch"
        },
        [`${t}-nav-operations-hidden`]: {
          position: "absolute",
          visibility: "hidden",
          pointerEvents: "none"
        },
        [`${t}-nav-more`]: {
          position: "relative",
          padding: r,
          background: "transparent",
          border: 0,
          color: e.colorText,
          "&::after": {
            position: "absolute",
            right: {
              _skip_check_: !0,
              value: 0
            },
            bottom: 0,
            left: {
              _skip_check_: !0,
              value: 0
            },
            height: e.calc(e.controlHeightLG).div(8).equal(),
            transform: "translateY(100%)",
            content: "''"
          }
        },
        [`${t}-nav-add`]: Object.assign({
          minWidth: n,
          minHeight: n,
          marginLeft: {
            _skip_check_: !0,
            value: a
          },
          padding: `0 ${te(e.paddingXS)}`,
          background: "transparent",
          border: `${te(e.lineWidth)} ${e.lineType} ${s}`,
          borderRadius: `${te(e.borderRadiusLG)} ${te(e.borderRadiusLG)} 0 0`,
          outline: "none",
          cursor: "pointer",
          color: e.colorText,
          transition: `all ${e.motionDurationSlow} ${e.motionEaseInOut}`,
          "&:hover": {
            color: o
          },
          "&:active, &:focus:not(:focus-visible)": {
            color: i
          }
        }, qs(e))
      },
      [`${t}-extra-content`]: {
        flex: "none"
      },
      // ============================ InkBar ============================
      [`${t}-ink-bar`]: {
        position: "absolute",
        background: e.inkBarColor,
        pointerEvents: "none"
      }
    }), p1(e)), {
      // =========================== TabPanes ===========================
      [`${t}-content`]: {
        position: "relative",
        width: "100%"
      },
      [`${t}-content-holder`]: {
        flex: "auto",
        minWidth: 0,
        minHeight: 0
      },
      [`${t}-tabpane`]: {
        outline: "none",
        "&-hidden": {
          display: "none"
        }
      }
    }),
    [`${t}-centered`]: {
      [`> ${t}-nav, > div > ${t}-nav`]: {
        [`${t}-nav-wrap`]: {
          [`&:not([class*='${t}-nav-wrap-ping'])`]: {
            justifyContent: "center"
          }
        }
      }
    }
  };
}, y1 = (e) => {
  const t = e.controlHeightLG;
  return {
    zIndexPopup: e.zIndexPopupBase + 50,
    cardBg: e.colorFillAlter,
    cardHeight: t,
    // Initialize with empty string, because cardPadding will be calculated with cardHeight by default.
    cardPadding: `${(t - Math.round(e.fontSize * e.lineHeight)) / 2 - e.lineWidth}px ${e.padding}px`,
    cardPaddingSM: `${e.paddingXXS * 1.5}px ${e.padding}px`,
    cardPaddingLG: `${e.paddingXS}px ${e.padding}px ${e.paddingXXS * 1.5}px`,
    titleFontSize: e.fontSize,
    titleFontSizeLG: e.fontSizeLG,
    titleFontSizeSM: e.fontSize,
    inkBarColor: e.colorPrimary,
    horizontalMargin: `0 0 ${e.margin}px 0`,
    horizontalItemGutter: 32,
    // Fixed Value
    // Initialize with empty string, because horizontalItemMargin will be calculated with horizontalItemGutter by default.
    horizontalItemMargin: "",
    horizontalItemMarginRTL: "",
    horizontalItemPadding: `${e.paddingSM}px 0`,
    horizontalItemPaddingSM: `${e.paddingXS}px 0`,
    horizontalItemPaddingLG: `${e.padding}px 0`,
    verticalItemPadding: `${e.paddingXS}px ${e.paddingLG}px`,
    verticalItemMargin: `${e.margin}px 0 0 0`,
    itemColor: e.colorText,
    itemSelectedColor: e.colorPrimary,
    itemHoverColor: e.colorPrimaryHover,
    itemActiveColor: e.colorPrimaryActive,
    cardGutter: e.marginXXS / 2
  };
}, S1 = en("Tabs", (e) => {
  const t = Zt(e, {
    // `cardPadding` is empty by default, so we could calculate with dynamic `cardHeight`
    tabsCardPadding: e.cardPadding,
    dropdownEdgeChildVerticalPadding: e.paddingXXS,
    tabsActiveTextShadow: "0 0 0.25px currentcolor",
    tabsDropdownHeight: 200,
    tabsDropdownWidth: 120,
    tabsHorizontalItemMargin: `0 0 0 ${te(e.horizontalItemGutter)}`,
    tabsHorizontalItemMarginRTL: `0 0 0 ${te(e.horizontalItemGutter)}`
  });
  return [m1(t), h1(t), g1(t), v1(t), f1(t), b1(t), d1(t)];
}, y1), dv = () => null;
process.env.NODE_ENV !== "production" && (dv.displayName = "DeprecatedTabPane");
var C1 = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
    t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const gl = (e) => {
  var t, r, n, a, o, i, s, l, c, d, f;
  const {
    type: v,
    className: m,
    rootClassName: h,
    size: p,
    onEdit: g,
    hideAdd: S,
    centered: b,
    addIcon: y,
    removeIcon: w,
    moreIcon: C,
    more: O,
    popupClassName: _,
    children: $,
    items: R,
    animated: A,
    style: F,
    indicatorSize: j,
    indicator: I
  } = e, T = C1(e, ["type", "className", "rootClassName", "size", "onEdit", "hideAdd", "centered", "addIcon", "removeIcon", "moreIcon", "more", "popupClassName", "children", "items", "animated", "style", "indicatorSize", "indicator"]), {
    prefixCls: B
  } = T, {
    direction: N,
    tabs: x,
    getPrefixCls: E,
    getPopupContainer: L
  } = u.useContext(bt), M = E("tabs", B), z = Zs(M), [H, W, U] = S1(M, z);
  let Q;
  v === "editable-card" && (Q = {
    onEdit: (fe, we) => {
      let {
        key: k,
        event: le
      } = we;
      g == null || g(fe === "add" ? le : k, fe);
    },
    removeIcon: (t = w ?? (x == null ? void 0 : x.removeIcon)) !== null && t !== void 0 ? t : /* @__PURE__ */ u.createElement(Zd, null),
    addIcon: (y ?? (x == null ? void 0 : x.addIcon)) || /* @__PURE__ */ u.createElement(av, null),
    showAdd: S !== !0
  });
  const q = E();
  if (process.env.NODE_ENV !== "production") {
    const fe = Ft("Tabs");
    process.env.NODE_ENV !== "production" && fe(!("onPrevClick" in e) && !("onNextClick" in e), "breaking", "`onPrevClick` and `onNextClick` has been removed. Please use `onTabScroll` instead."), process.env.NODE_ENV !== "production" && fe(!(j || x != null && x.indicatorSize), "deprecated", "`indicatorSize` has been deprecated. Please use `indicator={{ size: ... }}` instead.");
  }
  const J = La(p), oe = u1(R, $), ue = s1(M, A), xe = Object.assign(Object.assign({}, x == null ? void 0 : x.style), F), me = {
    align: (r = I == null ? void 0 : I.align) !== null && r !== void 0 ? r : (n = x == null ? void 0 : x.indicator) === null || n === void 0 ? void 0 : n.align,
    size: (s = (o = (a = I == null ? void 0 : I.size) !== null && a !== void 0 ? a : j) !== null && o !== void 0 ? o : (i = x == null ? void 0 : x.indicator) === null || i === void 0 ? void 0 : i.size) !== null && s !== void 0 ? s : x == null ? void 0 : x.indicatorSize
  };
  return H(/* @__PURE__ */ u.createElement(uv, Object.assign({
    direction: N,
    getPopupContainer: L
  }, T, {
    items: oe,
    className: ee({
      [`${M}-${J}`]: J,
      [`${M}-card`]: ["card", "editable-card"].includes(v),
      [`${M}-editable-card`]: v === "editable-card",
      [`${M}-centered`]: b
    }, x == null ? void 0 : x.className, m, h, W, U, z),
    popupClassName: ee(_, W, U, z),
    style: xe,
    editable: Q,
    more: Object.assign({
      icon: (f = (d = (c = (l = x == null ? void 0 : x.more) === null || l === void 0 ? void 0 : l.icon) !== null && c !== void 0 ? c : x == null ? void 0 : x.moreIcon) !== null && d !== void 0 ? d : C) !== null && f !== void 0 ? f : /* @__PURE__ */ u.createElement(Zf, null),
      transitionName: `${q}-slide-up`
    }, O),
    prefixCls: M,
    animated: ue,
    indicator: me
  })));
};
gl.TabPane = dv;
process.env.NODE_ENV !== "production" && (gl.displayName = "Tabs");
var E1 = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
    t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const fv = (e) => {
  var {
    prefixCls: t,
    className: r,
    hoverable: n = !0
  } = e, a = E1(e, ["prefixCls", "className", "hoverable"]);
  const {
    getPrefixCls: o
  } = u.useContext(bt), i = o("card", t), s = ee(`${i}-grid`, r, {
    [`${i}-grid-hoverable`]: n
  });
  return /* @__PURE__ */ u.createElement("div", Object.assign({}, a, {
    className: s
  }));
}, w1 = (e) => {
  const {
    antCls: t,
    componentCls: r,
    headerHeight: n,
    cardPaddingBase: a,
    tabsMarginBottom: o
  } = e;
  return Object.assign(Object.assign({
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    minHeight: n,
    marginBottom: -1,
    padding: `0 ${te(a)}`,
    color: e.colorTextHeading,
    fontWeight: e.fontWeightStrong,
    fontSize: e.headerFontSize,
    background: e.headerBg,
    borderBottom: `${te(e.lineWidth)} ${e.lineType} ${e.colorBorderSecondary}`,
    borderRadius: `${te(e.borderRadiusLG)} ${te(e.borderRadiusLG)} 0 0`
  }, Ma()), {
    "&-wrapper": {
      width: "100%",
      display: "flex",
      alignItems: "center"
    },
    "&-title": Object.assign(Object.assign({
      display: "inline-block",
      flex: 1
    }, Gs), {
      [`
          > ${r}-typography,
          > ${r}-typography-edit-content
        `]: {
        insetInlineStart: 0,
        marginTop: 0,
        marginBottom: 0
      }
    }),
    [`${t}-tabs-top`]: {
      clear: "both",
      marginBottom: o,
      color: e.colorText,
      fontWeight: "normal",
      fontSize: e.fontSize,
      "&-bar": {
        borderBottom: `${te(e.lineWidth)} ${e.lineType} ${e.colorBorderSecondary}`
      }
    }
  });
}, x1 = (e) => {
  const {
    cardPaddingBase: t,
    colorBorderSecondary: r,
    cardShadow: n,
    lineWidth: a
  } = e;
  return {
    width: "33.33%",
    padding: t,
    border: 0,
    borderRadius: 0,
    boxShadow: `
      ${te(a)} 0 0 0 ${r},
      0 ${te(a)} 0 0 ${r},
      ${te(a)} ${te(a)} 0 0 ${r},
      ${te(a)} 0 0 0 ${r} inset,
      0 ${te(a)} 0 0 ${r} inset;
    `,
    transition: `all ${e.motionDurationMid}`,
    "&-hoverable:hover": {
      position: "relative",
      zIndex: 1,
      boxShadow: n
    }
  };
}, $1 = (e) => {
  const {
    componentCls: t,
    iconCls: r,
    actionsLiMargin: n,
    cardActionsIconSize: a,
    colorBorderSecondary: o,
    actionsBg: i
  } = e;
  return Object.assign(Object.assign({
    margin: 0,
    padding: 0,
    listStyle: "none",
    background: i,
    borderTop: `${te(e.lineWidth)} ${e.lineType} ${o}`,
    display: "flex",
    borderRadius: `0 0 ${te(e.borderRadiusLG)} ${te(e.borderRadiusLG)}`
  }, Ma()), {
    "& > li": {
      margin: n,
      color: e.colorTextDescription,
      textAlign: "center",
      "> span": {
        position: "relative",
        display: "block",
        minWidth: e.calc(e.cardActionsIconSize).mul(2).equal(),
        fontSize: e.fontSize,
        lineHeight: e.lineHeight,
        cursor: "pointer",
        "&:hover": {
          color: e.colorPrimary,
          transition: `color ${e.motionDurationMid}`
        },
        [`a:not(${t}-btn), > ${r}`]: {
          display: "inline-block",
          width: "100%",
          color: e.colorTextDescription,
          lineHeight: te(e.fontHeight),
          transition: `color ${e.motionDurationMid}`,
          "&:hover": {
            color: e.colorPrimary
          }
        },
        [`> ${r}`]: {
          fontSize: a,
          lineHeight: te(e.calc(a).mul(e.lineHeight).equal())
        }
      },
      "&:not(:last-child)": {
        borderInlineEnd: `${te(e.lineWidth)} ${e.lineType} ${o}`
      }
    }
  });
}, O1 = (e) => Object.assign(Object.assign({
  margin: `${te(e.calc(e.marginXXS).mul(-1).equal())} 0`,
  display: "flex"
}, Ma()), {
  "&-avatar": {
    paddingInlineEnd: e.padding
  },
  "&-detail": {
    overflow: "hidden",
    flex: 1,
    "> div:not(:last-child)": {
      marginBottom: e.marginXS
    }
  },
  "&-title": Object.assign({
    color: e.colorTextHeading,
    fontWeight: e.fontWeightStrong,
    fontSize: e.fontSizeLG
  }, Gs),
  "&-description": {
    color: e.colorTextDescription
  }
}), R1 = (e) => {
  const {
    componentCls: t,
    cardPaddingBase: r,
    colorFillAlter: n
  } = e;
  return {
    [`${t}-head`]: {
      padding: `0 ${te(r)}`,
      background: n,
      "&-title": {
        fontSize: e.fontSize
      }
    },
    [`${t}-body`]: {
      padding: `${te(e.padding)} ${te(r)}`
    }
  };
}, _1 = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    overflow: "hidden",
    [`${t}-body`]: {
      userSelect: "none"
    }
  };
}, P1 = (e) => {
  const {
    antCls: t,
    componentCls: r,
    cardShadow: n,
    cardHeadPadding: a,
    colorBorderSecondary: o,
    boxShadowTertiary: i,
    cardPaddingBase: s,
    extraColor: l
  } = e;
  return {
    [r]: Object.assign(Object.assign({}, Un(e)), {
      position: "relative",
      background: e.colorBgContainer,
      borderRadius: e.borderRadiusLG,
      [`&:not(${r}-bordered)`]: {
        boxShadow: i
      },
      [`${r}-head`]: w1(e),
      [`${r}-extra`]: {
        // https://stackoverflow.com/a/22429853/3040605
        marginInlineStart: "auto",
        color: l,
        fontWeight: "normal",
        fontSize: e.fontSize
      },
      [`${r}-body`]: Object.assign({
        padding: s,
        borderRadius: `0 0 ${te(e.borderRadiusLG)} ${te(e.borderRadiusLG)}`
      }, Ma()),
      [`${r}-grid`]: x1(e),
      [`${r}-cover`]: {
        "> *": {
          display: "block",
          width: "100%"
        },
        [`img, img + ${t}-image-mask`]: {
          borderRadius: `${te(e.borderRadiusLG)} ${te(e.borderRadiusLG)} 0 0`
        }
      },
      [`${r}-actions`]: $1(e),
      [`${r}-meta`]: O1(e)
    }),
    [`${r}-bordered`]: {
      border: `${te(e.lineWidth)} ${e.lineType} ${o}`,
      [`${r}-cover`]: {
        marginTop: -1,
        marginInlineStart: -1,
        marginInlineEnd: -1
      }
    },
    [`${r}-hoverable`]: {
      cursor: "pointer",
      transition: `box-shadow ${e.motionDurationMid}, border-color ${e.motionDurationMid}`,
      "&:hover": {
        borderColor: "transparent",
        boxShadow: n
      }
    },
    [`${r}-contain-grid`]: {
      borderRadius: `${te(e.borderRadiusLG)} ${te(e.borderRadiusLG)} 0 0 `,
      [`${r}-body`]: {
        display: "flex",
        flexWrap: "wrap"
      },
      [`&:not(${r}-loading) ${r}-body`]: {
        marginBlockStart: e.calc(e.lineWidth).mul(-1).equal(),
        marginInlineStart: e.calc(e.lineWidth).mul(-1).equal(),
        padding: 0
      }
    },
    [`${r}-contain-tabs`]: {
      [`> div${r}-head`]: {
        minHeight: 0,
        [`${r}-head-title, ${r}-extra`]: {
          paddingTop: a
        }
      }
    },
    [`${r}-type-inner`]: R1(e),
    [`${r}-loading`]: _1(e),
    [`${r}-rtl`]: {
      direction: "rtl"
    }
  };
}, T1 = (e) => {
  const {
    componentCls: t,
    cardPaddingSM: r,
    headerHeightSM: n,
    headerFontSizeSM: a
  } = e;
  return {
    [`${t}-small`]: {
      [`> ${t}-head`]: {
        minHeight: n,
        padding: `0 ${te(r)}`,
        fontSize: a,
        [`> ${t}-head-wrapper`]: {
          [`> ${t}-extra`]: {
            fontSize: e.fontSize
          }
        }
      },
      [`> ${t}-body`]: {
        padding: r
      }
    },
    [`${t}-small${t}-contain-tabs`]: {
      [`> ${t}-head`]: {
        [`${t}-head-title, ${t}-extra`]: {
          paddingTop: 0,
          display: "flex",
          alignItems: "center"
        }
      }
    }
  };
}, N1 = (e) => ({
  headerBg: "transparent",
  headerFontSize: e.fontSizeLG,
  headerFontSizeSM: e.fontSize,
  headerHeight: e.fontSizeLG * e.lineHeightLG + e.padding * 2,
  headerHeightSM: e.fontSize * e.lineHeight + e.paddingXS * 2,
  actionsBg: e.colorBgContainer,
  actionsLiMargin: `${e.paddingSM}px 0`,
  tabsMarginBottom: -e.padding - e.lineWidth,
  extraColor: e.colorText
}), I1 = en("Card", (e) => {
  const t = Zt(e, {
    cardShadow: e.boxShadowCard,
    cardHeadPadding: e.padding,
    cardPaddingBase: e.paddingLG,
    cardActionsIconSize: e.fontSize,
    cardPaddingSM: 12
    // Fixed padding.
  });
  return [
    // Style
    P1(t),
    // Size
    T1(t)
  ];
}, N1);
var cu = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
    t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const M1 = (e) => {
  const {
    actionClasses: t,
    actions: r = [],
    actionStyle: n
  } = e;
  return /* @__PURE__ */ u.createElement("ul", {
    className: t,
    style: n
  }, r.map((a, o) => {
    const i = `action-${o}`;
    return /* @__PURE__ */ u.createElement("li", {
      style: {
        width: `${100 / r.length}%`
      },
      key: i
    }, /* @__PURE__ */ u.createElement("span", null, a));
  }));
}, A1 = /* @__PURE__ */ u.forwardRef((e, t) => {
  const {
    prefixCls: r,
    className: n,
    rootClassName: a,
    style: o,
    extra: i,
    headStyle: s = {},
    bodyStyle: l = {},
    title: c,
    loading: d,
    bordered: f = !0,
    size: v,
    type: m,
    cover: h,
    actions: p,
    tabList: g,
    children: S,
    activeTabKey: b,
    defaultActiveTabKey: y,
    tabBarExtraContent: w,
    hoverable: C,
    tabProps: O = {},
    classNames: _,
    styles: $
  } = e, R = cu(e, ["prefixCls", "className", "rootClassName", "style", "extra", "headStyle", "bodyStyle", "title", "loading", "bordered", "size", "type", "cover", "actions", "tabList", "children", "activeTabKey", "defaultActiveTabKey", "tabBarExtraContent", "hoverable", "tabProps", "classNames", "styles"]), {
    getPrefixCls: A,
    direction: F,
    card: j
  } = u.useContext(bt);
  if (process.env.NODE_ENV !== "production") {
    const ye = Ft("Card");
    [["headStyle", "styles.header"], ["bodyStyle", "styles.body"]].forEach((ie) => {
      let [ne, ae] = ie;
      ye.deprecated(!(ne in e), ne, ae);
    });
  }
  const I = (ye) => {
    var ie;
    (ie = e.onTabChange) === null || ie === void 0 || ie.call(e, ye);
  }, T = (ye) => {
    var ie;
    return ee((ie = j == null ? void 0 : j.classNames) === null || ie === void 0 ? void 0 : ie[ye], _ == null ? void 0 : _[ye]);
  }, B = (ye) => {
    var ie;
    return Object.assign(Object.assign({}, (ie = j == null ? void 0 : j.styles) === null || ie === void 0 ? void 0 : ie[ye]), $ == null ? void 0 : $[ye]);
  }, N = u.useMemo(() => {
    let ye = !1;
    return u.Children.forEach(S, (ie) => {
      (ie == null ? void 0 : ie.type) === fv && (ye = !0);
    }), ye;
  }, [S]), x = A("card", r), [E, L, M] = I1(x), z = /* @__PURE__ */ u.createElement(pn, {
    loading: !0,
    active: !0,
    paragraph: {
      rows: 4
    },
    title: !1
  }, S), H = b !== void 0, W = Object.assign(Object.assign({}, O), {
    [H ? "activeKey" : "defaultActiveKey"]: H ? b : y,
    tabBarExtraContent: w
  });
  let U;
  const Q = La(v), q = !Q || Q === "default" ? "large" : Q, J = g ? /* @__PURE__ */ u.createElement(gl, Object.assign({
    size: q
  }, W, {
    className: `${x}-head-tabs`,
    onChange: I,
    items: g.map((ye) => {
      var {
        tab: ie
      } = ye, ne = cu(ye, ["tab"]);
      return Object.assign({
        label: ie
      }, ne);
    })
  })) : null;
  if (c || i || J) {
    const ye = ee(`${x}-head`, T("header")), ie = ee(`${x}-head-title`, T("title")), ne = ee(`${x}-extra`, T("extra")), ae = Object.assign(Object.assign({}, s), B("header"));
    U = /* @__PURE__ */ u.createElement("div", {
      className: ye,
      style: ae
    }, /* @__PURE__ */ u.createElement("div", {
      className: `${x}-head-wrapper`
    }, c && /* @__PURE__ */ u.createElement("div", {
      className: ie,
      style: B("title")
    }, c), i && /* @__PURE__ */ u.createElement("div", {
      className: ne,
      style: B("extra")
    }, i)), J);
  }
  const oe = ee(`${x}-cover`, T("cover")), ue = h ? /* @__PURE__ */ u.createElement("div", {
    className: oe,
    style: B("cover")
  }, h) : null, xe = ee(`${x}-body`, T("body")), me = Object.assign(Object.assign({}, l), B("body")), fe = /* @__PURE__ */ u.createElement("div", {
    className: xe,
    style: me
  }, d ? z : S), we = ee(`${x}-actions`, T("actions")), k = p != null && p.length ? /* @__PURE__ */ u.createElement(M1, {
    actionClasses: we,
    actionStyle: B("actions"),
    actions: p
  }) : null, le = Cr(R, ["onTabChange"]), ge = ee(x, j == null ? void 0 : j.className, {
    [`${x}-loading`]: d,
    [`${x}-bordered`]: f,
    [`${x}-hoverable`]: C,
    [`${x}-contain-grid`]: N,
    [`${x}-contain-tabs`]: g == null ? void 0 : g.length,
    [`${x}-${Q}`]: Q,
    [`${x}-type-${m}`]: !!m,
    [`${x}-rtl`]: F === "rtl"
  }, n, a, L, M), $e = Object.assign(Object.assign({}, j == null ? void 0 : j.style), o);
  return E(/* @__PURE__ */ u.createElement("div", Object.assign({
    ref: t
  }, le, {
    className: ge,
    style: $e
  }), U, ue, fe, k));
});
var L1 = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
    t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const j1 = (e) => {
  const {
    prefixCls: t,
    className: r,
    avatar: n,
    title: a,
    description: o
  } = e, i = L1(e, ["prefixCls", "className", "avatar", "title", "description"]), {
    getPrefixCls: s
  } = u.useContext(bt), l = s("card", t), c = ee(`${l}-meta`, r), d = n ? /* @__PURE__ */ u.createElement("div", {
    className: `${l}-meta-avatar`
  }, n) : null, f = a ? /* @__PURE__ */ u.createElement("div", {
    className: `${l}-meta-title`
  }, a) : null, v = o ? /* @__PURE__ */ u.createElement("div", {
    className: `${l}-meta-description`
  }, o) : null, m = f || v ? /* @__PURE__ */ u.createElement("div", {
    className: `${l}-meta-detail`
  }, f, v) : null;
  return /* @__PURE__ */ u.createElement("div", Object.assign({}, i, {
    className: c
  }), d, m);
}, Yo = A1;
Yo.Grid = fv;
Yo.Meta = j1;
process.env.NODE_ENV !== "production" && (Yo.displayName = "Card");
function F1(e) {
  return !!(e.addonBefore || e.addonAfter);
}
function D1(e) {
  return !!(e.prefix || e.suffix || e.allowClear);
}
function uu(e, t, r) {
  var n = t.cloneNode(!0), a = Object.create(e, {
    target: {
      value: n
    },
    currentTarget: {
      value: n
    }
  });
  return n.value = r, typeof t.selectionStart == "number" && typeof t.selectionEnd == "number" && (n.selectionStart = t.selectionStart, n.selectionEnd = t.selectionEnd), n.setSelectionRange = function() {
    t.setSelectionRange.apply(t, arguments);
  }, a;
}
function No(e, t, r, n) {
  if (r) {
    var a = t;
    if (t.type === "click") {
      a = uu(t, e, ""), r(a);
      return;
    }
    if (e.type !== "file" && n !== void 0) {
      a = uu(t, e, n), r(a);
      return;
    }
    r(a);
  }
}
function z1(e, t) {
  if (e) {
    e.focus(t);
    var r = t || {}, n = r.cursor;
    if (n) {
      var a = e.value.length;
      switch (n) {
        case "start":
          e.setSelectionRange(0, 0);
          break;
        case "end":
          e.setSelectionRange(a, a);
          break;
        default:
          e.setSelectionRange(0, a);
      }
    }
  }
}
var vv = /* @__PURE__ */ Y.forwardRef(function(e, t) {
  var r, n, a = e.inputElement, o = e.children, i = e.prefixCls, s = e.prefix, l = e.suffix, c = e.addonBefore, d = e.addonAfter, f = e.className, v = e.style, m = e.disabled, h = e.readOnly, p = e.focused, g = e.triggerFocus, S = e.allowClear, b = e.value, y = e.handleReset, w = e.hidden, C = e.classes, O = e.classNames, _ = e.dataAttrs, $ = e.styles, R = e.components, A = o ?? a, F = (R == null ? void 0 : R.affixWrapper) || "span", j = (R == null ? void 0 : R.groupWrapper) || "span", I = (R == null ? void 0 : R.wrapper) || "span", T = (R == null ? void 0 : R.groupAddon) || "span", B = ke(null), N = function(le) {
    var ge;
    (ge = B.current) !== null && ge !== void 0 && ge.contains(le.target) && (g == null || g());
  }, x = D1(e), E = /* @__PURE__ */ Iv(A, {
    value: b,
    className: ee(A.props.className, !x && (O == null ? void 0 : O.variant)) || null
  }), L = ke(null);
  if (Y.useImperativeHandle(t, function() {
    return {
      nativeElement: L.current || B.current
    };
  }), x) {
    var M, z = null;
    if (S) {
      var H, W = !m && !h && b, U = "".concat(i, "-clear-icon"), Q = ze(S) === "object" && S !== null && S !== void 0 && S.clearIcon ? S.clearIcon : "✖";
      z = /* @__PURE__ */ Y.createElement("span", {
        onClick: y,
        onMouseDown: function(le) {
          return le.preventDefault();
        },
        className: ee(U, (H = {}, D(H, "".concat(U, "-hidden"), !W), D(H, "".concat(U, "-has-suffix"), !!l), H)),
        role: "button",
        tabIndex: -1
      }, Q);
    }
    var q = "".concat(i, "-affix-wrapper"), J = ee(q, (M = {}, D(M, "".concat(i, "-disabled"), m), D(M, "".concat(q, "-disabled"), m), D(M, "".concat(q, "-focused"), p), D(M, "".concat(q, "-readonly"), h), D(M, "".concat(q, "-input-with-clear-btn"), l && S && b), M), C == null ? void 0 : C.affixWrapper, O == null ? void 0 : O.affixWrapper, O == null ? void 0 : O.variant), oe = (l || S) && /* @__PURE__ */ Y.createElement("span", {
      className: ee("".concat(i, "-suffix"), O == null ? void 0 : O.suffix),
      style: $ == null ? void 0 : $.suffix
    }, z, l);
    E = /* @__PURE__ */ Y.createElement(F, Me({
      className: J,
      style: $ == null ? void 0 : $.affixWrapper,
      onClick: N
    }, _ == null ? void 0 : _.affixWrapper, {
      ref: B
    }), s && /* @__PURE__ */ Y.createElement("span", {
      className: ee("".concat(i, "-prefix"), O == null ? void 0 : O.prefix),
      style: $ == null ? void 0 : $.prefix
    }, s), E, oe);
  }
  if (F1(e)) {
    var ue = "".concat(i, "-group"), xe = "".concat(ue, "-addon"), me = "".concat(ue, "-wrapper"), fe = ee("".concat(i, "-wrapper"), ue, C == null ? void 0 : C.wrapper, O == null ? void 0 : O.wrapper), we = ee(me, D({}, "".concat(me, "-disabled"), m), C == null ? void 0 : C.group, O == null ? void 0 : O.groupWrapper);
    E = /* @__PURE__ */ Y.createElement(j, {
      className: we,
      ref: L
    }, /* @__PURE__ */ Y.createElement(I, {
      className: fe
    }, c && /* @__PURE__ */ Y.createElement(T, {
      className: xe
    }, c), E, d && /* @__PURE__ */ Y.createElement(T, {
      className: xe
    }, d)));
  }
  return /* @__PURE__ */ Y.cloneElement(E, {
    className: ee((r = E.props) === null || r === void 0 ? void 0 : r.className, f) || null,
    style: V(V({}, (n = E.props) === null || n === void 0 ? void 0 : n.style), v),
    hidden: w
  });
}), V1 = ["show"];
function gv(e, t) {
  return u.useMemo(function() {
    var r = {};
    t && (r.show = ze(t) === "object" && t.formatter ? t.formatter : !!t), r = V(V({}, r), e);
    var n = r, a = n.show, o = et(n, V1);
    return V(V({}, o), {}, {
      show: !!a,
      showFormatter: typeof a == "function" ? a : void 0,
      strategy: o.strategy || function(i) {
        return i.length;
      }
    });
  }, [e, t]);
}
var k1 = ["autoComplete", "onChange", "onFocus", "onBlur", "onPressEnter", "onKeyDown", "prefixCls", "disabled", "htmlSize", "className", "maxLength", "suffix", "showCount", "count", "type", "classes", "classNames", "styles", "onCompositionStart", "onCompositionEnd"], B1 = /* @__PURE__ */ Vr(function(e, t) {
  var r = e.autoComplete, n = e.onChange, a = e.onFocus, o = e.onBlur, i = e.onPressEnter, s = e.onKeyDown, l = e.prefixCls, c = l === void 0 ? "rc-input" : l, d = e.disabled, f = e.htmlSize, v = e.className, m = e.maxLength, h = e.suffix, p = e.showCount, g = e.count, S = e.type, b = S === void 0 ? "text" : S, y = e.classes, w = e.classNames, C = e.styles, O = e.onCompositionStart, _ = e.onCompositionEnd, $ = et(e, k1), R = pt(!1), A = G(R, 2), F = A[0], j = A[1], I = ke(!1), T = ke(null), B = ke(null), N = function(ae) {
    T.current && z1(T.current, ae);
  }, x = cr(e.defaultValue, {
    value: e.value
  }), E = G(x, 2), L = E[0], M = E[1], z = L == null ? "" : String(L), H = pt(null), W = G(H, 2), U = W[0], Q = W[1], q = gv(g, p), J = q.max || m, oe = q.strategy(z), ue = !!J && oe > J;
  Mo(t, function() {
    var ne;
    return {
      focus: N,
      blur: function() {
        var Se;
        (Se = T.current) === null || Se === void 0 || Se.blur();
      },
      setSelectionRange: function(Se, he, be) {
        var Pe;
        (Pe = T.current) === null || Pe === void 0 || Pe.setSelectionRange(Se, he, be);
      },
      select: function() {
        var Se;
        (Se = T.current) === null || Se === void 0 || Se.select();
      },
      input: T.current,
      nativeElement: ((ne = B.current) === null || ne === void 0 ? void 0 : ne.nativeElement) || T.current
    };
  }), ht(function() {
    j(function(ne) {
      return ne && d ? !1 : ne;
    });
  }, [d]);
  var xe = function(ae, Se, he) {
    var be = Se;
    if (!I.current && q.exceedFormatter && q.max && q.strategy(Se) > q.max) {
      if (be = q.exceedFormatter(Se, {
        max: q.max
      }), Se !== be) {
        var Pe, pe;
        Q([((Pe = T.current) === null || Pe === void 0 ? void 0 : Pe.selectionStart) || 0, ((pe = T.current) === null || pe === void 0 ? void 0 : pe.selectionEnd) || 0]);
      }
    } else if (he.source === "compositionEnd")
      return;
    M(be), T.current && No(T.current, ae, n, be);
  };
  ht(function() {
    if (U) {
      var ne;
      (ne = T.current) === null || ne === void 0 || ne.setSelectionRange.apply(ne, Ee(U));
    }
  }, [U]);
  var me = function(ae) {
    xe(ae, ae.target.value, {
      source: "change"
    });
  }, fe = function(ae) {
    I.current = !1, xe(ae, ae.currentTarget.value, {
      source: "compositionEnd"
    }), _ == null || _(ae);
  }, we = function(ae) {
    i && ae.key === "Enter" && i(ae), s == null || s(ae);
  }, k = function(ae) {
    j(!0), a == null || a(ae);
  }, le = function(ae) {
    j(!1), o == null || o(ae);
  }, ge = function(ae) {
    M(""), N(), T.current && No(T.current, ae, n);
  }, $e = ue && "".concat(c, "-out-of-range"), ye = function() {
    var ae = Cr(e, [
      "prefixCls",
      "onPressEnter",
      "addonBefore",
      "addonAfter",
      "prefix",
      "suffix",
      "allowClear",
      // Input elements must be either controlled or uncontrolled,
      // specify either the value prop, or the defaultValue prop, but not both.
      "defaultValue",
      "showCount",
      "count",
      "classes",
      "htmlSize",
      "styles",
      "classNames"
    ]);
    return /* @__PURE__ */ Y.createElement("input", Me({
      autoComplete: r
    }, ae, {
      onChange: me,
      onFocus: k,
      onBlur: le,
      onKeyDown: we,
      className: ee(c, D({}, "".concat(c, "-disabled"), d), w == null ? void 0 : w.input),
      style: C == null ? void 0 : C.input,
      ref: T,
      size: f,
      type: b,
      onCompositionStart: function(he) {
        I.current = !0, O == null || O(he);
      },
      onCompositionEnd: fe
    }));
  }, ie = function() {
    var ae = Number(J) > 0;
    if (h || q.show) {
      var Se = q.showFormatter ? q.showFormatter({
        value: z,
        count: oe,
        maxLength: J
      }) : "".concat(oe).concat(ae ? " / ".concat(J) : "");
      return /* @__PURE__ */ Y.createElement(Y.Fragment, null, q.show && /* @__PURE__ */ Y.createElement("span", {
        className: ee("".concat(c, "-show-count-suffix"), D({}, "".concat(c, "-show-count-has-suffix"), !!h), w == null ? void 0 : w.count),
        style: V({}, C == null ? void 0 : C.count)
      }, Se), h);
    }
    return null;
  };
  return /* @__PURE__ */ Y.createElement(vv, Me({}, $, {
    prefixCls: c,
    className: ee(v, $e),
    handleReset: ge,
    value: z,
    focused: F,
    triggerFocus: N,
    suffix: ie(),
    disabled: d,
    classes: y,
    classNames: w,
    styles: C
  }), ye());
});
const mv = (e) => {
  let t;
  return typeof e == "object" && (e != null && e.clearIcon) ? t = e : e && (t = {
    clearIcon: /* @__PURE__ */ Y.createElement(Yd, null)
  }), t;
};
function H1(e, t) {
  const r = ke([]), n = () => {
    r.current.push(setTimeout(() => {
      var a, o, i, s;
      !((a = e.current) === null || a === void 0) && a.input && ((o = e.current) === null || o === void 0 ? void 0 : o.input.getAttribute("type")) === "password" && (!((i = e.current) === null || i === void 0) && i.input.hasAttribute("value")) && ((s = e.current) === null || s === void 0 || s.input.removeAttribute("value"));
    }));
  };
  return ht(() => (n(), () => r.current.forEach((a) => {
    a && clearTimeout(a);
  })), []), n;
}
function W1(e) {
  return !!(e.prefix || e.suffix || e.allowClear || e.showCount);
}
var K1 = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
    t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
function U1(e, t) {
  if (!e)
    return;
  e.focus(t);
  const {
    cursor: r
  } = t || {};
  if (r) {
    const n = e.value.length;
    switch (r) {
      case "start":
        e.setSelectionRange(0, 0);
        break;
      case "end":
        e.setSelectionRange(n, n);
        break;
      default:
        e.setSelectionRange(0, n);
    }
  }
}
const G1 = /* @__PURE__ */ Vr((e, t) => {
  var r;
  const {
    prefixCls: n,
    bordered: a = !0,
    status: o,
    size: i,
    disabled: s,
    onBlur: l,
    onFocus: c,
    suffix: d,
    allowClear: f,
    addonAfter: v,
    addonBefore: m,
    className: h,
    style: p,
    styles: g,
    rootClassName: S,
    onChange: b,
    classNames: y,
    variant: w
  } = e, C = K1(e, ["prefixCls", "bordered", "status", "size", "disabled", "onBlur", "onFocus", "suffix", "allowClear", "addonAfter", "addonBefore", "className", "style", "styles", "rootClassName", "onChange", "classNames", "variant"]);
  if (process.env.NODE_ENV !== "production") {
    const {
      deprecated: k
    } = Ft("Input");
    k(!("bordered" in e), "bordered", "variant");
  }
  const {
    getPrefixCls: O,
    direction: _,
    input: $
  } = Y.useContext(bt), R = O("input", n), A = ke(null), F = Zs(R), [j, I, T] = nv(R, F), {
    compactSize: B,
    compactItemClassnames: N
  } = af(R, _), x = La((k) => {
    var le;
    return (le = i ?? B) !== null && le !== void 0 ? le : k;
  }), E = Y.useContext(Vn), L = s ?? E, {
    status: M,
    hasFeedback: z,
    feedbackIcon: H
  } = Lt(Pa), W = Nf(M, o), U = W1(e) || !!z, Q = ke(U);
  if (process.env.NODE_ENV !== "production") {
    const k = Ft("Input");
    ht(() => {
      var le;
      U && !Q.current && process.env.NODE_ENV !== "production" && k(document.activeElement === ((le = A.current) === null || le === void 0 ? void 0 : le.input), "usage", "When Input is focused, dynamic add or remove prefix / suffix will make it lose focus caused by dom structure change. Read more: https://ant.design/components/input/#FAQ"), Q.current = U;
    }, [U]);
  }
  const q = H1(A), J = (k) => {
    q(), l == null || l(k);
  }, oe = (k) => {
    q(), c == null || c(k);
  }, ue = (k) => {
    q(), b == null || b(k);
  }, xe = (z || d) && /* @__PURE__ */ Y.createElement(Y.Fragment, null, d, z && H), me = mv(f ?? ($ == null ? void 0 : $.allowClear)), [fe, we] = If("input", w, a);
  return j(/* @__PURE__ */ Y.createElement(B1, Object.assign({
    ref: _r(t, A),
    prefixCls: R,
    autoComplete: $ == null ? void 0 : $.autoComplete
  }, C, {
    disabled: L,
    onBlur: J,
    onFocus: oe,
    style: Object.assign(Object.assign({}, $ == null ? void 0 : $.style), p),
    styles: Object.assign(Object.assign({}, $ == null ? void 0 : $.styles), g),
    suffix: xe,
    allowClear: me,
    className: ee(h, S, T, F, N, $ == null ? void 0 : $.className),
    onChange: ue,
    addonBefore: m && /* @__PURE__ */ Y.createElement(xs, {
      form: !0,
      space: !0
    }, m),
    addonAfter: v && /* @__PURE__ */ Y.createElement(xs, {
      form: !0,
      space: !0
    }, v),
    classNames: Object.assign(Object.assign(Object.assign({}, y), $ == null ? void 0 : $.classNames), {
      input: ee({
        [`${R}-sm`]: x === "small",
        [`${R}-lg`]: x === "large",
        [`${R}-rtl`]: _ === "rtl"
      }, y == null ? void 0 : y.input, (r = $ == null ? void 0 : $.classNames) === null || r === void 0 ? void 0 : r.input, I),
      variant: ee({
        [`${R}-${fe}`]: we
      }, Os(R, W)),
      affixWrapper: ee({
        [`${R}-affix-wrapper-sm`]: x === "small",
        [`${R}-affix-wrapper-lg`]: x === "large",
        [`${R}-affix-wrapper-rtl`]: _ === "rtl"
      }, I),
      wrapper: ee({
        [`${R}-group-rtl`]: _ === "rtl"
      }, I),
      groupWrapper: ee({
        [`${R}-group-wrapper-sm`]: x === "small",
        [`${R}-group-wrapper-lg`]: x === "large",
        [`${R}-group-wrapper-rtl`]: _ === "rtl",
        [`${R}-group-wrapper-${fe}`]: we
      }, Os(`${R}-group-wrapper`, W, z), I)
    })
  })));
});
process.env.NODE_ENV !== "production" && (G1.displayName = "Input");
var q1 = `
  min-height:0 !important;
  max-height:none !important;
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
  pointer-events: none !important;
`, X1 = ["letter-spacing", "line-height", "padding-top", "padding-bottom", "font-family", "font-weight", "font-size", "font-variant", "text-rendering", "text-transform", "width", "text-indent", "padding-left", "padding-right", "border-width", "box-sizing", "word-break", "white-space"], xi = {}, lr;
function Y1(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, r = e.getAttribute("id") || e.getAttribute("data-reactid") || e.getAttribute("name");
  if (t && xi[r])
    return xi[r];
  var n = window.getComputedStyle(e), a = n.getPropertyValue("box-sizing") || n.getPropertyValue("-moz-box-sizing") || n.getPropertyValue("-webkit-box-sizing"), o = parseFloat(n.getPropertyValue("padding-bottom")) + parseFloat(n.getPropertyValue("padding-top")), i = parseFloat(n.getPropertyValue("border-bottom-width")) + parseFloat(n.getPropertyValue("border-top-width")), s = X1.map(function(c) {
    return "".concat(c, ":").concat(n.getPropertyValue(c));
  }).join(";"), l = {
    sizingStyle: s,
    paddingSize: o,
    borderSize: i,
    boxSizing: a
  };
  return t && r && (xi[r] = l), l;
}
function Z1(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
  lr || (lr = document.createElement("textarea"), lr.setAttribute("tab-index", "-1"), lr.setAttribute("aria-hidden", "true"), document.body.appendChild(lr)), e.getAttribute("wrap") ? lr.setAttribute("wrap", e.getAttribute("wrap")) : lr.removeAttribute("wrap");
  var a = Y1(e, t), o = a.paddingSize, i = a.borderSize, s = a.boxSizing, l = a.sizingStyle;
  lr.setAttribute("style", "".concat(l, ";").concat(q1)), lr.value = e.value || e.placeholder || "";
  var c = void 0, d = void 0, f, v = lr.scrollHeight;
  if (s === "border-box" ? v += i : s === "content-box" && (v -= o), r !== null || n !== null) {
    lr.value = " ";
    var m = lr.scrollHeight - o;
    r !== null && (c = m * r, s === "border-box" && (c = c + o + i), v = Math.max(c, v)), n !== null && (d = m * n, s === "border-box" && (d = d + o + i), f = v > d ? "" : "hidden", v = Math.min(d, v));
  }
  var h = {
    height: v,
    overflowY: f,
    resize: "none"
  };
  return c && (h.minHeight = c), d && (h.maxHeight = d), h;
}
var Q1 = ["prefixCls", "onPressEnter", "defaultValue", "value", "autoSize", "onResize", "className", "style", "disabled", "onChange", "onInternalAutoSize"], $i = 0, Oi = 1, Ri = 2, J1 = /* @__PURE__ */ u.forwardRef(function(e, t) {
  var r = e, n = r.prefixCls;
  r.onPressEnter;
  var a = r.defaultValue, o = r.value, i = r.autoSize, s = r.onResize, l = r.className, c = r.style, d = r.disabled, f = r.onChange, v = r.onInternalAutoSize, m = et(r, Q1), h = cr(a, {
    value: o,
    postState: function(Q) {
      return Q ?? "";
    }
  }), p = G(h, 2), g = p[0], S = p[1], b = function(Q) {
    S(Q.target.value), f == null || f(Q);
  }, y = u.useRef();
  u.useImperativeHandle(t, function() {
    return {
      textArea: y.current
    };
  });
  var w = u.useMemo(function() {
    return i && ze(i) === "object" ? [i.minRows, i.maxRows] : [];
  }, [i]), C = G(w, 2), O = C[0], _ = C[1], $ = !!i, R = function() {
    try {
      if (document.activeElement === y.current) {
        var Q = y.current, q = Q.selectionStart, J = Q.selectionEnd, oe = Q.scrollTop;
        y.current.setSelectionRange(q, J), y.current.scrollTop = oe;
      }
    } catch {
    }
  }, A = u.useState(Ri), F = G(A, 2), j = F[0], I = F[1], T = u.useState(), B = G(T, 2), N = B[0], x = B[1], E = function() {
    I($i), process.env.NODE_ENV === "test" && (v == null || v());
  };
  Et(function() {
    $ && E();
  }, [o, O, _, $]), Et(function() {
    if (j === $i)
      I(Oi);
    else if (j === Oi) {
      var U = Z1(y.current, !1, O, _);
      I(Ri), x(U);
    } else
      R();
  }, [j]);
  var L = u.useRef(), M = function() {
    Nt.cancel(L.current);
  }, z = function(Q) {
    j === Ri && (s == null || s(Q), i && (M(), L.current = Nt(function() {
      E();
    })));
  };
  u.useEffect(function() {
    return M;
  }, []);
  var H = $ ? N : null, W = V(V({}, c), H);
  return (j === $i || j === Oi) && (W.overflowY = "hidden", W.overflowX = "hidden"), /* @__PURE__ */ u.createElement(hr, {
    onResize: z,
    disabled: !(i || s)
  }, /* @__PURE__ */ u.createElement("textarea", Me({}, m, {
    ref: y,
    style: W,
    className: ee(n, l, D({}, "".concat(n, "-disabled"), d)),
    disabled: d,
    value: g,
    onChange: b
  })));
}), eE = ["defaultValue", "value", "onFocus", "onBlur", "onChange", "allowClear", "maxLength", "onCompositionStart", "onCompositionEnd", "suffix", "prefixCls", "showCount", "count", "className", "style", "disabled", "hidden", "classNames", "styles", "onResize", "readOnly"], tE = /* @__PURE__ */ Y.forwardRef(function(e, t) {
  var r, n = e.defaultValue, a = e.value, o = e.onFocus, i = e.onBlur, s = e.onChange, l = e.allowClear, c = e.maxLength, d = e.onCompositionStart, f = e.onCompositionEnd, v = e.suffix, m = e.prefixCls, h = m === void 0 ? "rc-textarea" : m, p = e.showCount, g = e.count, S = e.className, b = e.style, y = e.disabled, w = e.hidden, C = e.classNames, O = e.styles, _ = e.onResize, $ = e.readOnly, R = et(e, eE), A = cr(n, {
    value: a,
    defaultValue: n
  }), F = G(A, 2), j = F[0], I = F[1], T = j == null ? "" : String(j), B = Y.useState(!1), N = G(B, 2), x = N[0], E = N[1], L = Y.useRef(!1), M = Y.useState(null), z = G(M, 2), H = z[0], W = z[1], U = ke(null), Q = ke(null), q = function() {
    var Oe;
    return (Oe = Q.current) === null || Oe === void 0 ? void 0 : Oe.textArea;
  }, J = function() {
    q().focus();
  };
  Mo(t, function() {
    var _e;
    return {
      resizableTextArea: Q.current,
      focus: J,
      blur: function() {
        q().blur();
      },
      nativeElement: ((_e = U.current) === null || _e === void 0 ? void 0 : _e.nativeElement) || q()
    };
  }), ht(function() {
    E(function(_e) {
      return !y && _e;
    });
  }, [y]);
  var oe = Y.useState(null), ue = G(oe, 2), xe = ue[0], me = ue[1];
  Y.useEffect(function() {
    if (xe) {
      var _e;
      (_e = q()).setSelectionRange.apply(_e, Ee(xe));
    }
  }, [xe]);
  var fe = gv(g, p), we = (r = fe.max) !== null && r !== void 0 ? r : c, k = Number(we) > 0, le = fe.strategy(T), ge = !!we && le > we, $e = function(Oe, Z) {
    var re = Z;
    !L.current && fe.exceedFormatter && fe.max && fe.strategy(Z) > fe.max && (re = fe.exceedFormatter(Z, {
      max: fe.max
    }), Z !== re && me([q().selectionStart || 0, q().selectionEnd || 0])), I(re), No(Oe.currentTarget, Oe, s, re);
  }, ye = function(Oe) {
    L.current = !0, d == null || d(Oe);
  }, ie = function(Oe) {
    L.current = !1, $e(Oe, Oe.currentTarget.value), f == null || f(Oe);
  }, ne = function(Oe) {
    $e(Oe, Oe.target.value);
  }, ae = function(Oe) {
    var Z = R.onPressEnter, re = R.onKeyDown;
    Oe.key === "Enter" && Z && Z(Oe), re == null || re(Oe);
  }, Se = function(Oe) {
    E(!0), o == null || o(Oe);
  }, he = function(Oe) {
    E(!1), i == null || i(Oe);
  }, be = function(Oe) {
    I(""), J(), No(q(), Oe, s);
  }, Pe = v, pe;
  fe.show && (fe.showFormatter ? pe = fe.showFormatter({
    value: T,
    count: le,
    maxLength: we
  }) : pe = "".concat(le).concat(k ? " / ".concat(we) : ""), Pe = /* @__PURE__ */ Y.createElement(Y.Fragment, null, Pe, /* @__PURE__ */ Y.createElement("span", {
    className: ee("".concat(h, "-data-count"), C == null ? void 0 : C.count),
    style: O == null ? void 0 : O.count
  }, pe)));
  var ct = function(Oe) {
    var Z;
    _ == null || _(Oe), (Z = q()) !== null && Z !== void 0 && Z.style.height && W(!0);
  }, at = !R.autoSize && !p && !l;
  return /* @__PURE__ */ Y.createElement(vv, {
    ref: U,
    value: T,
    allowClear: l,
    handleReset: be,
    suffix: Pe,
    prefixCls: h,
    classNames: V(V({}, C), {}, {
      affixWrapper: ee(C == null ? void 0 : C.affixWrapper, D(D({}, "".concat(h, "-show-count"), p), "".concat(h, "-textarea-allow-clear"), l))
    }),
    disabled: y,
    focused: x,
    className: ee(S, ge && "".concat(h, "-out-of-range")),
    style: V(V({}, b), H && !at ? {
      height: "auto"
    } : {}),
    dataAttrs: {
      affixWrapper: {
        "data-count": typeof pe == "string" ? pe : void 0
      }
    },
    hidden: w,
    readOnly: $
  }, /* @__PURE__ */ Y.createElement(J1, Me({}, R, {
    maxLength: c,
    onKeyDown: ae,
    onChange: ne,
    onFocus: Se,
    onBlur: he,
    onCompositionStart: ye,
    onCompositionEnd: ie,
    className: ee(C == null ? void 0 : C.textarea),
    style: V(V({}, O == null ? void 0 : O.textarea), {}, {
      resize: b == null ? void 0 : b.resize
    }),
    disabled: y,
    prefixCls: h,
    onResize: ct,
    ref: Q,
    readOnly: $
  })));
}), rE = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
    t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const pv = /* @__PURE__ */ Vr((e, t) => {
  var r, n;
  const {
    prefixCls: a,
    bordered: o = !0,
    size: i,
    disabled: s,
    status: l,
    allowClear: c,
    classNames: d,
    rootClassName: f,
    className: v,
    style: m,
    styles: h,
    variant: p
  } = e, g = rE(e, ["prefixCls", "bordered", "size", "disabled", "status", "allowClear", "classNames", "rootClassName", "className", "style", "styles", "variant"]);
  if (process.env.NODE_ENV !== "production") {
    const {
      deprecated: M
    } = Ft("TextArea");
    M(!("bordered" in e), "bordered", "variant");
  }
  const {
    getPrefixCls: S,
    direction: b,
    textArea: y
  } = u.useContext(bt), w = La(i), C = u.useContext(Vn), O = s ?? C, {
    status: _,
    hasFeedback: $,
    feedbackIcon: R
  } = u.useContext(Pa), A = Nf(_, l), F = u.useRef(null);
  u.useImperativeHandle(t, () => {
    var M;
    return {
      resizableTextArea: (M = F.current) === null || M === void 0 ? void 0 : M.resizableTextArea,
      focus: (z) => {
        var H, W;
        U1((W = (H = F.current) === null || H === void 0 ? void 0 : H.resizableTextArea) === null || W === void 0 ? void 0 : W.textArea, z);
      },
      blur: () => {
        var z;
        return (z = F.current) === null || z === void 0 ? void 0 : z.blur();
      }
    };
  });
  const j = S("input", a), I = Zs(j), [T, B, N] = nv(j, I), [x, E] = If("textArea", p, o), L = mv(c ?? (y == null ? void 0 : y.allowClear));
  return T(/* @__PURE__ */ u.createElement(tE, Object.assign({
    autoComplete: y == null ? void 0 : y.autoComplete
  }, g, {
    style: Object.assign(Object.assign({}, y == null ? void 0 : y.style), m),
    styles: Object.assign(Object.assign({}, y == null ? void 0 : y.styles), h),
    disabled: O,
    allowClear: L,
    className: ee(N, I, v, f, y == null ? void 0 : y.className),
    classNames: Object.assign(Object.assign(Object.assign({}, d), y == null ? void 0 : y.classNames), {
      textarea: ee({
        [`${j}-sm`]: w === "small",
        [`${j}-lg`]: w === "large"
      }, B, d == null ? void 0 : d.textarea, (r = y == null ? void 0 : y.classNames) === null || r === void 0 ? void 0 : r.textarea),
      variant: ee({
        [`${j}-${x}`]: E
      }, Os(j, A)),
      affixWrapper: ee(`${j}-textarea-affix-wrapper`, {
        [`${j}-affix-wrapper-rtl`]: b === "rtl",
        [`${j}-affix-wrapper-sm`]: w === "small",
        [`${j}-affix-wrapper-lg`]: w === "large",
        [`${j}-textarea-show-count`]: e.showCount || ((n = e.count) === null || n === void 0 ? void 0 : n.show)
      }, B)
    }),
    prefixCls: j,
    suffix: $ && /* @__PURE__ */ u.createElement("span", {
      className: `${j}-textarea-suffix`
    }, R),
    ref: F
  })));
});
function du(e) {
  return ["small", "middle", "large"].includes(e);
}
const hv = ["wrap", "nowrap", "wrap-reverse"], bv = ["flex-start", "flex-end", "start", "end", "center", "space-between", "space-around", "space-evenly", "stretch", "normal", "left", "right"], yv = ["center", "start", "end", "flex-start", "flex-end", "self-start", "self-end", "baseline", "normal", "stretch"], nE = (e, t) => {
  const r = t.wrap === !0 ? "wrap" : t.wrap;
  return {
    [`${e}-wrap-${r}`]: r && hv.includes(r)
  };
}, aE = (e, t) => {
  const r = {};
  return yv.forEach((n) => {
    r[`${e}-align-${n}`] = t.align === n;
  }), r[`${e}-align-stretch`] = !t.align && !!t.vertical, r;
}, oE = (e, t) => {
  const r = {};
  return bv.forEach((n) => {
    r[`${e}-justify-${n}`] = t.justify === n;
  }), r;
};
function iE(e, t) {
  return ee(Object.assign(Object.assign(Object.assign({}, nE(e, t)), aE(e, t)), oE(e, t)));
}
const sE = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [t]: {
      display: "flex",
      "&-vertical": {
        flexDirection: "column"
      },
      "&-rtl": {
        direction: "rtl"
      },
      "&:empty": {
        display: "none"
      }
    }
  };
}, lE = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [t]: {
      "&-gap-small": {
        gap: e.flexGapSM
      },
      "&-gap-middle": {
        gap: e.flexGap
      },
      "&-gap-large": {
        gap: e.flexGapLG
      }
    }
  };
}, cE = (e) => {
  const {
    componentCls: t
  } = e, r = {};
  return hv.forEach((n) => {
    r[`${t}-wrap-${n}`] = {
      flexWrap: n
    };
  }), r;
}, uE = (e) => {
  const {
    componentCls: t
  } = e, r = {};
  return yv.forEach((n) => {
    r[`${t}-align-${n}`] = {
      alignItems: n
    };
  }), r;
}, dE = (e) => {
  const {
    componentCls: t
  } = e, r = {};
  return bv.forEach((n) => {
    r[`${t}-justify-${n}`] = {
      justifyContent: n
    };
  }), r;
}, fE = () => ({}), vE = en("Flex", (e) => {
  const {
    paddingXS: t,
    padding: r,
    paddingLG: n
  } = e, a = Zt(e, {
    flexGapSM: t,
    flexGap: r,
    flexGapLG: n
  });
  return [sE(a), lE(a), cE(a), uE(a), dE(a)];
}, fE, {
  // Flex component don't apply extra font style
  // https://github.com/ant-design/ant-design/issues/46403
  resetStyle: !1
});
var gE = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
    t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const da = /* @__PURE__ */ Y.forwardRef((e, t) => {
  const {
    prefixCls: r,
    rootClassName: n,
    className: a,
    style: o,
    flex: i,
    gap: s,
    children: l,
    vertical: c = !1,
    component: d = "div"
  } = e, f = gE(e, ["prefixCls", "rootClassName", "className", "style", "flex", "gap", "children", "vertical", "component"]), {
    flex: v,
    direction: m,
    getPrefixCls: h
  } = Y.useContext(bt), p = h("flex", r), [g, S, b] = vE(p), y = c ?? (v == null ? void 0 : v.vertical), w = ee(a, n, v == null ? void 0 : v.className, p, S, b, iE(p, e), {
    [`${p}-rtl`]: m === "rtl",
    [`${p}-gap-${s}`]: du(s),
    [`${p}-vertical`]: y
  }), C = Object.assign(Object.assign({}, v == null ? void 0 : v.style), o);
  return i && (C.flex = i), s && !du(s) && (C.gap = s), g(/* @__PURE__ */ Y.createElement(d, Object.assign({
    ref: t,
    className: w,
    style: C
  }, Cr(f, ["justify", "wrap", "align"])), l));
});
process.env.NODE_ENV !== "production" && (da.displayName = "Flex");
var mE = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
    t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const pE = {
  border: 0,
  background: "transparent",
  padding: 0,
  lineHeight: "inherit",
  display: "inline-flex"
}, As = /* @__PURE__ */ u.forwardRef((e, t) => {
  const r = (d) => {
    const {
      keyCode: f
    } = d;
    f === ve.ENTER && d.preventDefault();
  }, n = (d) => {
    const {
      keyCode: f
    } = d, {
      onClick: v
    } = e;
    f === ve.ENTER && v && v();
  }, {
    style: a,
    noStyle: o,
    disabled: i,
    tabIndex: s = 0
  } = e, l = mE(e, ["style", "noStyle", "disabled", "tabIndex"]);
  let c = {};
  return o || (c = Object.assign({}, pE)), i && (c.pointerEvents = "none"), c = Object.assign(Object.assign({}, c), a), /* @__PURE__ */ u.createElement("div", Object.assign({
    role: "button",
    tabIndex: s,
    ref: t
  }, l, {
    onKeyDown: r,
    onKeyUp: n,
    style: c
  }));
});
var hE = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z" } }] }, name: "edit", theme: "outlined" }, bE = function(t, r) {
  return /* @__PURE__ */ u.createElement(ar, Me({}, t, {
    ref: r,
    icon: hE
  }));
}, Sv = /* @__PURE__ */ u.forwardRef(bE);
process.env.NODE_ENV !== "production" && (Sv.displayName = "EditOutlined");
var yE = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z" } }] }, name: "enter", theme: "outlined" }, SE = function(t, r) {
  return /* @__PURE__ */ u.createElement(ar, Me({}, t, {
    ref: r,
    icon: yE
  }));
}, Cv = /* @__PURE__ */ u.forwardRef(SE);
process.env.NODE_ENV !== "production" && (Cv.displayName = "EnterOutlined");
const CE = (e, t, r, n) => {
  const {
    titleMarginBottom: a,
    fontWeightStrong: o
  } = n;
  return {
    marginBottom: a,
    color: r,
    fontWeight: o,
    fontSize: e,
    lineHeight: t
  };
}, EE = (e) => {
  const t = [1, 2, 3, 4, 5], r = {};
  return t.forEach((n) => {
    r[`
      h${n}&,
      div&-h${n},
      div&-h${n} > textarea,
      h${n}
    `] = CE(e[`fontSizeHeading${n}`], e[`lineHeightHeading${n}`], e.colorTextHeading, e);
  }), r;
}, wE = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    "a&, a": Object.assign(Object.assign({}, _d(e)), {
      textDecoration: e.linkDecoration,
      "&:active, &:hover": {
        textDecoration: e.linkHoverDecoration
      },
      [`&[disabled], &${t}-disabled`]: {
        color: e.colorTextDisabled,
        cursor: "not-allowed",
        "&:active, &:hover": {
          color: e.colorTextDisabled
        },
        "&:active": {
          pointerEvents: "none"
        }
      }
    })
  };
}, xE = (e) => ({
  code: {
    margin: "0 0.2em",
    paddingInline: "0.4em",
    paddingBlock: "0.2em 0.1em",
    fontSize: "85%",
    fontFamily: e.fontFamilyCode,
    background: "rgba(150, 150, 150, 0.1)",
    border: "1px solid rgba(100, 100, 100, 0.2)",
    borderRadius: 3
  },
  kbd: {
    margin: "0 0.2em",
    paddingInline: "0.4em",
    paddingBlock: "0.15em 0.1em",
    fontSize: "90%",
    fontFamily: e.fontFamilyCode,
    background: "rgba(150, 150, 150, 0.06)",
    border: "1px solid rgba(100, 100, 100, 0.2)",
    borderBottomWidth: 2,
    borderRadius: 3
  },
  mark: {
    padding: 0,
    // FIXME hardcode in v4
    backgroundColor: ts[2]
  },
  "u, ins": {
    textDecoration: "underline",
    textDecorationSkipInk: "auto"
  },
  "s, del": {
    textDecoration: "line-through"
  },
  strong: {
    fontWeight: 600
  },
  // list
  "ul, ol": {
    marginInline: 0,
    marginBlock: "0 1em",
    padding: 0,
    li: {
      marginInline: "20px 0",
      marginBlock: 0,
      paddingInline: "4px 0",
      paddingBlock: 0
    }
  },
  ul: {
    listStyleType: "circle",
    ul: {
      listStyleType: "disc"
    }
  },
  ol: {
    listStyleType: "decimal"
  },
  // pre & block
  "pre, blockquote": {
    margin: "1em 0"
  },
  pre: {
    padding: "0.4em 0.6em",
    whiteSpace: "pre-wrap",
    wordWrap: "break-word",
    background: "rgba(150, 150, 150, 0.1)",
    border: "1px solid rgba(100, 100, 100, 0.2)",
    borderRadius: 3,
    fontFamily: e.fontFamilyCode,
    // Compatible for marked
    code: {
      display: "inline",
      margin: 0,
      padding: 0,
      fontSize: "inherit",
      fontFamily: "inherit",
      background: "transparent",
      border: 0
    }
  },
  blockquote: {
    paddingInline: "0.6em 0",
    paddingBlock: 0,
    borderInlineStart: "4px solid rgba(100, 100, 100, 0.2)",
    opacity: 0.85
  }
}), $E = (e) => {
  const {
    componentCls: t,
    paddingSM: r
  } = e, n = r;
  return {
    "&-edit-content": {
      position: "relative",
      "div&": {
        insetInlineStart: e.calc(e.paddingSM).mul(-1).equal(),
        marginTop: e.calc(n).mul(-1).equal(),
        marginBottom: `calc(1em - ${te(n)})`
      },
      [`${t}-edit-content-confirm`]: {
        position: "absolute",
        insetInlineEnd: e.calc(e.marginXS).add(2).equal(),
        insetBlockEnd: e.marginXS,
        color: e.colorTextDescription,
        // default style
        fontWeight: "normal",
        fontSize: e.fontSize,
        fontStyle: "normal",
        pointerEvents: "none"
      },
      textarea: {
        margin: "0!important",
        // Fix Editable Textarea flash in Firefox
        MozTransition: "none",
        height: "1em"
      }
    }
  };
}, OE = (e) => ({
  [`${e.componentCls}-copy-success`]: {
    "\n    &,\n    &:hover,\n    &:focus": {
      color: e.colorSuccess
    }
  },
  [`${e.componentCls}-copy-icon-only`]: {
    marginInlineStart: 0
  }
}), RE = () => ({
  "\n  a&-ellipsis,\n  span&-ellipsis\n  ": {
    display: "inline-block",
    maxWidth: "100%"
  },
  "&-ellipsis-single-line": {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    // https://blog.csdn.net/iefreer/article/details/50421025
    "a&, span&": {
      verticalAlign: "bottom"
    },
    "> code": {
      paddingBlock: 0,
      maxWidth: "calc(100% - 1.2em)",
      display: "inline-block",
      overflow: "hidden",
      textOverflow: "ellipsis",
      verticalAlign: "bottom",
      // https://github.com/ant-design/ant-design/issues/45953
      boxSizing: "content-box"
    }
  },
  "&-ellipsis-multiple-line": {
    display: "-webkit-box",
    overflow: "hidden",
    WebkitLineClamp: 3,
    WebkitBoxOrient: "vertical"
  }
}), _E = (e) => {
  const {
    componentCls: t,
    titleMarginTop: r
  } = e;
  return {
    [t]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
      color: e.colorText,
      wordBreak: "break-word",
      lineHeight: e.lineHeight,
      [`&${t}-secondary`]: {
        color: e.colorTextDescription
      },
      [`&${t}-success`]: {
        color: e.colorSuccess
      },
      [`&${t}-warning`]: {
        color: e.colorWarning
      },
      [`&${t}-danger`]: {
        color: e.colorError,
        "a&:active, a&:focus": {
          color: e.colorErrorActive
        },
        "a&:hover": {
          color: e.colorErrorHover
        }
      },
      [`&${t}-disabled`]: {
        color: e.colorTextDisabled,
        cursor: "not-allowed",
        userSelect: "none"
      },
      "\n        div&,\n        p\n      ": {
        marginBottom: "1em"
      }
    }, EE(e)), {
      [`
      & + h1${t},
      & + h2${t},
      & + h3${t},
      & + h4${t},
      & + h5${t}
      `]: {
        marginTop: r
      },
      "\n      div,\n      ul,\n      li,\n      p,\n      h1,\n      h2,\n      h3,\n      h4,\n      h5": {
        "\n        + h1,\n        + h2,\n        + h3,\n        + h4,\n        + h5\n        ": {
          marginTop: r
        }
      }
    }), xE(e)), wE(e)), {
      // Operation
      [`
        ${t}-expand,
        ${t}-collapse,
        ${t}-edit,
        ${t}-copy
      `]: Object.assign(Object.assign({}, _d(e)), {
        marginInlineStart: e.marginXXS
      })
    }), $E(e)), OE(e)), RE()), {
      "&-rtl": {
        direction: "rtl"
      }
    })
  };
}, PE = () => ({
  titleMarginTop: "1.2em",
  titleMarginBottom: "0.5em"
}), Ev = en("Typography", (e) => [_E(e)], PE), TE = (e) => {
  const {
    prefixCls: t,
    "aria-label": r,
    className: n,
    style: a,
    direction: o,
    maxLength: i,
    autoSize: s = !0,
    value: l,
    onSave: c,
    onCancel: d,
    onEnd: f,
    component: v,
    enterIcon: m = /* @__PURE__ */ u.createElement(Cv, null)
  } = e, h = u.useRef(null), p = u.useRef(!1), g = u.useRef(), [S, b] = u.useState(l);
  u.useEffect(() => {
    b(l);
  }, [l]), u.useEffect(() => {
    var B;
    if (!((B = h.current) === null || B === void 0) && B.resizableTextArea) {
      const {
        textArea: N
      } = h.current.resizableTextArea;
      N.focus();
      const {
        length: x
      } = N.value;
      N.setSelectionRange(x, x);
    }
  }, []);
  const y = (B) => {
    let {
      target: N
    } = B;
    b(N.value.replace(/[\n\r]/g, ""));
  }, w = () => {
    p.current = !0;
  }, C = () => {
    p.current = !1;
  }, O = (B) => {
    let {
      keyCode: N
    } = B;
    p.current || (g.current = N);
  }, _ = () => {
    c(S.trim());
  }, $ = (B) => {
    let {
      keyCode: N,
      ctrlKey: x,
      altKey: E,
      metaKey: L,
      shiftKey: M
    } = B;
    g.current === N && !p.current && !x && !E && !L && !M && (N === ve.ENTER ? (_(), f == null || f()) : N === ve.ESC && d());
  }, R = () => {
    _();
  }, A = v ? `${t}-${v}` : "", [F, j, I] = Ev(t), T = ee(t, `${t}-edit-content`, {
    [`${t}-rtl`]: o === "rtl"
  }, n, A, j, I);
  return F(/* @__PURE__ */ u.createElement("div", {
    className: T,
    style: a
  }, /* @__PURE__ */ u.createElement(pv, {
    ref: h,
    maxLength: i,
    value: S,
    onChange: y,
    onKeyDown: O,
    onKeyUp: $,
    onCompositionStart: w,
    onCompositionEnd: C,
    onBlur: R,
    "aria-label": r,
    rows: 1,
    autoSize: s
  }), m !== null ? ko(m, {
    className: `${t}-edit-content-confirm`
  }) : null));
};
var NE = function() {
  var e = document.getSelection();
  if (!e.rangeCount)
    return function() {
    };
  for (var t = document.activeElement, r = [], n = 0; n < e.rangeCount; n++)
    r.push(e.getRangeAt(n));
  switch (t.tagName.toUpperCase()) {
    case "INPUT":
    case "TEXTAREA":
      t.blur();
      break;
    default:
      t = null;
      break;
  }
  return e.removeAllRanges(), function() {
    e.type === "Caret" && e.removeAllRanges(), e.rangeCount || r.forEach(function(a) {
      e.addRange(a);
    }), t && t.focus();
  };
}, IE = NE, fu = {
  "text/plain": "Text",
  "text/html": "Url",
  default: "Text"
}, ME = "Copy to clipboard: #{key}, Enter";
function AE(e) {
  var t = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
  return e.replace(/#{\s*key\s*}/g, t);
}
function LE(e, t) {
  var r, n, a, o, i, s, l = !1;
  t || (t = {}), r = t.debug || !1;
  try {
    a = IE(), o = document.createRange(), i = document.getSelection(), s = document.createElement("span"), s.textContent = e, s.ariaHidden = "true", s.style.all = "unset", s.style.position = "fixed", s.style.top = 0, s.style.clip = "rect(0, 0, 0, 0)", s.style.whiteSpace = "pre", s.style.webkitUserSelect = "text", s.style.MozUserSelect = "text", s.style.msUserSelect = "text", s.style.userSelect = "text", s.addEventListener("copy", function(d) {
      if (d.stopPropagation(), t.format)
        if (d.preventDefault(), typeof d.clipboardData > "u") {
          r && console.warn("unable to use e.clipboardData"), r && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
          var f = fu[t.format] || fu.default;
          window.clipboardData.setData(f, e);
        } else
          d.clipboardData.clearData(), d.clipboardData.setData(t.format, e);
      t.onCopy && (d.preventDefault(), t.onCopy(d.clipboardData));
    }), document.body.appendChild(s), o.selectNodeContents(s), i.addRange(o);
    var c = document.execCommand("copy");
    if (!c)
      throw new Error("copy command was unsuccessful");
    l = !0;
  } catch (d) {
    r && console.error("unable to copy using execCommand: ", d), r && console.warn("trying IE specific stuff");
    try {
      window.clipboardData.setData(t.format || "text", e), t.onCopy && t.onCopy(window.clipboardData), l = !0;
    } catch (f) {
      r && console.error("unable to copy using clipboardData: ", f), r && console.error("falling back to prompt"), n = AE("message" in t ? t.message : ME), window.prompt(n, e);
    }
  } finally {
    i && (typeof i.removeRange == "function" ? i.removeRange(o) : i.removeAllRanges()), s && document.body.removeChild(s), a();
  }
  return l;
}
var jE = LE;
const FE = /* @__PURE__ */ Su(jE);
var DE = function(e, t, r, n) {
  function a(o) {
    return o instanceof r ? o : new r(function(i) {
      i(o);
    });
  }
  return new (r || (r = Promise))(function(o, i) {
    function s(d) {
      try {
        c(n.next(d));
      } catch (f) {
        i(f);
      }
    }
    function l(d) {
      try {
        c(n.throw(d));
      } catch (f) {
        i(f);
      }
    }
    function c(d) {
      d.done ? o(d.value) : a(d.value).then(s, l);
    }
    c((n = n.apply(e, t || [])).next());
  });
};
const zE = (e) => {
  let {
    copyConfig: t,
    children: r
  } = e;
  const [n, a] = u.useState(!1), [o, i] = u.useState(!1), s = u.useRef(null), l = () => {
    s.current && clearTimeout(s.current);
  }, c = {};
  t.format && (c.format = t.format), u.useEffect(() => l, []);
  const d = Ht((f) => DE(void 0, void 0, void 0, function* () {
    var v;
    f == null || f.preventDefault(), f == null || f.stopPropagation(), i(!0);
    try {
      const m = typeof t.text == "function" ? yield t.text() : t.text;
      FE(m || String(r) || "", c), i(!1), a(!0), l(), s.current = setTimeout(() => {
        a(!1);
      }, 3e3), (v = t.onCopy) === null || v === void 0 || v.call(t, f);
    } catch (m) {
      throw i(!1), m;
    }
  }));
  return {
    copied: n,
    copyLoading: o,
    onClick: d
  };
};
function _i(e, t) {
  return u.useMemo(() => {
    const r = !!e;
    return [r, Object.assign(Object.assign({}, t), r && typeof e == "object" ? e : null)];
  }, [e]);
}
const VE = (e) => {
  const t = ke();
  return ht(() => {
    t.current = e;
  }), t.current;
}, kE = (e, t) => {
  const r = u.useRef(!1);
  u.useEffect(() => {
    r.current ? e() : r.current = !0;
  }, t);
};
var BE = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
    t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const ml = /* @__PURE__ */ u.forwardRef((e, t) => {
  const {
    prefixCls: r,
    component: n = "article",
    className: a,
    rootClassName: o,
    setContentRef: i,
    children: s,
    direction: l,
    style: c
  } = e, d = BE(e, ["prefixCls", "component", "className", "rootClassName", "setContentRef", "children", "direction", "style"]), {
    getPrefixCls: f,
    direction: v,
    typography: m
  } = u.useContext(bt), h = l ?? v;
  let p = t;
  i && (p = _r(t, i)), process.env.NODE_ENV !== "production" && Ft("Typography").deprecated(!i, "setContentRef", "ref");
  const g = f("typography", r), [S, b, y] = Ev(g), w = ee(g, m == null ? void 0 : m.className, {
    [`${g}-rtl`]: h === "rtl"
  }, a, o, b, y), C = Object.assign(Object.assign({}, m == null ? void 0 : m.style), c);
  return S(
    // @ts-expect-error: Expression produces a union type that is too complex to represent.
    /* @__PURE__ */ u.createElement(n, Object.assign({
      className: w,
      style: C,
      ref: p
    }, d), s)
  );
});
process.env.NODE_ENV !== "production" && (ml.displayName = "Typography");
var HE = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z" } }] }, name: "copy", theme: "outlined" }, WE = function(t, r) {
  return /* @__PURE__ */ u.createElement(ar, Me({}, t, {
    ref: r,
    icon: HE
  }));
}, wv = /* @__PURE__ */ u.forwardRef(WE);
process.env.NODE_ENV !== "production" && (wv.displayName = "CopyOutlined");
function vu(e) {
  return e === !1 ? [!1, !1] : Array.isArray(e) ? e : [e];
}
function oo(e, t, r) {
  return e === !0 || e === void 0 ? t : e || r && t;
}
const KE = (e) => {
  const {
    prefixCls: t,
    copied: r,
    locale: n,
    iconOnly: a,
    tooltips: o,
    icon: i,
    loading: s,
    tabIndex: l,
    onCopy: c
  } = e, d = vu(o), f = vu(i), {
    copied: v,
    copy: m
  } = n ?? {}, h = r ? oo(d[1], v) : oo(d[0], m), g = typeof h == "string" ? h : r ? v : m;
  return /* @__PURE__ */ u.createElement(za, {
    key: "copy",
    title: h
  }, /* @__PURE__ */ u.createElement(As, {
    className: ee(`${t}-copy`, {
      [`${t}-copy-success`]: r,
      [`${t}-copy-icon-only`]: a
    }),
    onClick: c,
    "aria-label": g,
    tabIndex: l
  }, r ? oo(f[1], /* @__PURE__ */ u.createElement(Mf, null), !0) : oo(f[0], s ? /* @__PURE__ */ u.createElement(Qs, null) : /* @__PURE__ */ u.createElement(wv, null), !0)));
}, io = /* @__PURE__ */ u.forwardRef((e, t) => {
  let {
    style: r,
    children: n
  } = e;
  const a = u.useRef(null);
  return u.useImperativeHandle(t, () => ({
    isExceed: () => {
      const o = a.current;
      return o.scrollHeight > o.clientHeight;
    },
    getHeight: () => a.current.clientHeight
  })), /* @__PURE__ */ u.createElement("span", {
    "aria-hidden": !0,
    ref: a,
    style: Object.assign({
      position: "fixed",
      display: "block",
      left: 0,
      top: 0,
      pointerEvents: "none",
      backgroundColor: "rgba(255, 0, 0, 0.65)"
    }, r)
  }, n);
});
function xv(e) {
  const t = typeof e;
  return t === "string" || t === "number";
}
function UE(e) {
  let t = 0;
  return e.forEach((r) => {
    xv(r) ? t += String(r).length : t += 1;
  }), t;
}
function gu(e, t) {
  let r = 0;
  const n = [];
  for (let a = 0; a < e.length; a += 1) {
    if (r === t)
      return n;
    const o = e[a], s = xv(o) ? String(o).length : 1, l = r + s;
    if (l > t) {
      const c = t - r;
      return n.push(String(o).slice(0, c)), n;
    }
    n.push(o), r = l;
  }
  return e;
}
const Pi = 0, Ti = 1, Ni = 2, Ii = 3, mu = 4, so = {
  display: "-webkit-box",
  overflow: "hidden",
  WebkitBoxOrient: "vertical"
};
function GE(e) {
  const {
    enableMeasure: t,
    width: r,
    text: n,
    children: a,
    rows: o,
    expanded: i,
    miscDeps: s,
    onEllipsis: l
  } = e, c = u.useMemo(() => Zr(n), [n]), d = u.useMemo(() => UE(c), [n]), f = u.useMemo(() => a(c, !1), [n]), [v, m] = u.useState(null), h = u.useRef(null), p = u.useRef(null), g = u.useRef(null), S = u.useRef(null), b = u.useRef(null), [y, w] = u.useState(!1), [C, O] = u.useState(Pi), [_, $] = u.useState(0), [R, A] = u.useState(null);
  Et(() => {
    O(t && r && d ? Ti : Pi);
  }, [r, n, o, t, c]), Et(() => {
    var T, B, N, x;
    if (C === Ti) {
      O(Ni);
      const E = p.current && getComputedStyle(p.current).whiteSpace;
      A(E);
    } else if (C === Ni) {
      const E = !!(!((T = g.current) === null || T === void 0) && T.isExceed());
      O(E ? Ii : mu), m(E ? [0, d] : null), w(E);
      const L = ((B = g.current) === null || B === void 0 ? void 0 : B.getHeight()) || 0, M = o === 1 ? 0 : ((N = S.current) === null || N === void 0 ? void 0 : N.getHeight()) || 0, z = ((x = b.current) === null || x === void 0 ? void 0 : x.getHeight()) || 0, H = M + z, W = Math.max(L, H);
      $(W + 1), l(E);
    }
  }, [C]);
  const F = v ? Math.ceil((v[0] + v[1]) / 2) : 0;
  Et(() => {
    var T;
    const [B, N] = v || [0, 0];
    if (B !== N) {
      const E = (((T = h.current) === null || T === void 0 ? void 0 : T.getHeight()) || 0) > _;
      let L = F;
      N - B === 1 && (L = E ? B : N), m(E ? [B, L] : [L, N]);
    }
  }, [v, F]);
  const j = u.useMemo(() => {
    if (C !== Ii || !v || v[0] !== v[1]) {
      const T = a(c, !1);
      return C !== mu && C !== Pi ? /* @__PURE__ */ u.createElement("span", {
        style: Object.assign(Object.assign({}, so), {
          WebkitLineClamp: o
        })
      }, T) : T;
    }
    return a(i ? c : gu(c, v[0]), y);
  }, [i, C, v, c].concat(Ee(s))), I = {
    width: r,
    margin: 0,
    padding: 0,
    whiteSpace: R === "nowrap" ? "normal" : "inherit"
  };
  return /* @__PURE__ */ u.createElement(u.Fragment, null, j, C === Ni && /* @__PURE__ */ u.createElement(u.Fragment, null, /* @__PURE__ */ u.createElement(io, {
    style: Object.assign(Object.assign(Object.assign({}, I), so), {
      WebkitLineClamp: o
    }),
    ref: g
  }, f), /* @__PURE__ */ u.createElement(io, {
    style: Object.assign(Object.assign(Object.assign({}, I), so), {
      WebkitLineClamp: o - 1
    }),
    ref: S
  }, f), /* @__PURE__ */ u.createElement(io, {
    style: Object.assign(Object.assign(Object.assign({}, I), so), {
      WebkitLineClamp: 1
    }),
    ref: b
  }, a([], !0))), C === Ii && v && v[0] !== v[1] && /* @__PURE__ */ u.createElement(io, {
    style: Object.assign(Object.assign({}, I), {
      top: 400
    }),
    ref: h
  }, a(gu(c, F), !0)), C === Ti && /* @__PURE__ */ u.createElement("span", {
    style: {
      whiteSpace: "inherit"
    },
    ref: p
  }));
}
const $v = (e) => {
  let {
    enableEllipsis: t,
    isEllipsis: r,
    children: n,
    tooltipProps: a
  } = e;
  return !(a != null && a.title) || !t ? n : /* @__PURE__ */ u.createElement(za, Object.assign({
    open: r ? void 0 : !1
  }, a), n);
};
process.env.NODE_ENV !== "production" && ($v.displayName = "EllipsisTooltip");
var qE = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
    t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
function XE(e, t) {
  let {
    mark: r,
    code: n,
    underline: a,
    delete: o,
    strong: i,
    keyboard: s,
    italic: l
  } = e, c = t;
  function d(f, v) {
    v && (c = /* @__PURE__ */ u.createElement(f, {}, c));
  }
  return d("strong", i), d("u", a), d("del", o), d("code", n), d("mark", r), d("kbd", s), d("i", l), c;
}
const YE = "...", Zo = /* @__PURE__ */ u.forwardRef((e, t) => {
  var r, n, a;
  const {
    prefixCls: o,
    className: i,
    style: s,
    type: l,
    disabled: c,
    children: d,
    ellipsis: f,
    editable: v,
    copyable: m,
    component: h,
    title: p
  } = e, g = qE(e, ["prefixCls", "className", "style", "type", "disabled", "children", "ellipsis", "editable", "copyable", "component", "title"]), {
    getPrefixCls: S,
    direction: b
  } = u.useContext(bt), [y] = rp("Text"), w = u.useRef(null), C = u.useRef(null), O = S("typography", o), _ = Cr(g, ["mark", "code", "delete", "underline", "strong", "keyboard", "italic"]), [$, R] = _i(v), [A, F] = cr(!1, {
    value: R.editing
  }), {
    triggerType: j = ["icon"]
  } = R, I = (se) => {
    var de;
    se && ((de = R.onStart) === null || de === void 0 || de.call(R)), F(se);
  }, T = VE(A);
  kE(() => {
    var se;
    !A && T && ((se = C.current) === null || se === void 0 || se.focus());
  }, [A]);
  const B = (se) => {
    se == null || se.preventDefault(), I(!0);
  }, N = (se) => {
    var de;
    (de = R.onChange) === null || de === void 0 || de.call(R, se), I(!1);
  }, x = () => {
    var se;
    (se = R.onCancel) === null || se === void 0 || se.call(R), I(!1);
  }, [E, L] = _i(m), {
    copied: M,
    copyLoading: z,
    onClick: H
  } = zE({
    copyConfig: L,
    children: d
  }), [W, U] = u.useState(!1), [Q, q] = u.useState(!1), [J, oe] = u.useState(!1), [ue, xe] = u.useState(!1), [me, fe] = u.useState(!0), [we, k] = _i(f, {
    expandable: !1,
    symbol: (se) => se ? y == null ? void 0 : y.collapse : y == null ? void 0 : y.expand
  }), [le, ge] = cr(k.defaultExpanded || !1, {
    value: k.expanded
  }), $e = we && (!le || k.expandable === "collapsible"), {
    rows: ye = 1
  } = k, ie = u.useMemo(() => (
    // Disable ellipsis
    $e && // Provide suffix
    (k.suffix !== void 0 || k.onEllipsis || // Can't use css ellipsis since we need to provide the place for button
    k.expandable || $ || E)
  ), [$e, k, $, E]);
  Et(() => {
    we && !ie && (U(Ic("webkitLineClamp")), q(Ic("textOverflow")));
  }, [ie, we]);
  const [ne, ae] = u.useState($e), Se = u.useMemo(() => ie ? !1 : ye === 1 ? Q : W, [ie, Q, W]);
  Et(() => {
    ae(Se && $e);
  }, [Se, $e]);
  const he = $e && (ne ? ue : J), be = $e && ye === 1 && ne, Pe = $e && ye > 1 && ne, pe = (se, de) => {
    var We;
    ge(de.expanded), (We = k.onExpand) === null || We === void 0 || We.call(k, se, de);
  }, [ct, at] = u.useState(0), _e = (se) => {
    let {
      offsetWidth: de
    } = se;
    at(de);
  }, Oe = (se) => {
    var de;
    oe(se), J !== se && ((de = k.onEllipsis) === null || de === void 0 || de.call(k, se));
  };
  u.useEffect(() => {
    const se = w.current;
    if (we && ne && se) {
      const de = Pe ? se.offsetHeight < se.scrollHeight : se.offsetWidth < se.scrollWidth;
      ue !== de && xe(de);
    }
  }, [we, ne, d, Pe, me, ct]), u.useEffect(() => {
    const se = w.current;
    if (typeof IntersectionObserver > "u" || !se || !ne || !$e)
      return;
    const de = new IntersectionObserver(() => {
      fe(!!se.offsetParent);
    });
    return de.observe(se), () => {
      de.disconnect();
    };
  }, [ne, $e]);
  let Z = {};
  k.tooltip === !0 ? Z = {
    title: (r = R.text) !== null && r !== void 0 ? r : d
  } : /* @__PURE__ */ u.isValidElement(k.tooltip) ? Z = {
    title: k.tooltip
  } : typeof k.tooltip == "object" ? Z = Object.assign({
    title: (n = R.text) !== null && n !== void 0 ? n : d
  }, k.tooltip) : Z = {
    title: k.tooltip
  };
  const re = u.useMemo(() => {
    const se = (de) => ["string", "number"].includes(typeof de);
    if (!(!we || ne)) {
      if (se(R.text))
        return R.text;
      if (se(d))
        return d;
      if (se(p))
        return p;
      if (se(Z.title))
        return Z.title;
    }
  }, [we, ne, p, Z.title, he]);
  if (A)
    return /* @__PURE__ */ u.createElement(TE, {
      value: (a = R.text) !== null && a !== void 0 ? a : typeof d == "string" ? d : "",
      onSave: N,
      onCancel: x,
      onEnd: R.onEnd,
      prefixCls: O,
      className: i,
      style: s,
      direction: b,
      component: h,
      maxLength: R.maxLength,
      autoSize: R.autoSize,
      enterIcon: R.enterIcon
    });
  const Te = () => {
    const {
      expandable: se,
      symbol: de
    } = k;
    return !se || le && se !== "collapsible" ? null : /* @__PURE__ */ u.createElement(As, {
      key: "expand",
      className: `${O}-${le ? "collapse" : "expand"}`,
      onClick: (We) => pe(We, {
        expanded: !le
      }),
      "aria-label": le ? y.collapse : y == null ? void 0 : y.expand
    }, typeof de == "function" ? de(le) : de);
  }, Fe = () => {
    if (!$)
      return;
    const {
      icon: se,
      tooltip: de,
      tabIndex: We
    } = R, rt = Zr(de)[0] || (y == null ? void 0 : y.edit), Ct = typeof rt == "string" ? rt : "";
    return j.includes("icon") ? /* @__PURE__ */ u.createElement(za, {
      key: "edit",
      title: de === !1 ? "" : rt
    }, /* @__PURE__ */ u.createElement(As, {
      ref: C,
      className: `${O}-edit`,
      onClick: B,
      "aria-label": Ct,
      tabIndex: We
    }, se || /* @__PURE__ */ u.createElement(Sv, {
      role: "button"
    }))) : null;
  }, Ge = () => E ? /* @__PURE__ */ u.createElement(KE, Object.assign({
    key: "copy"
  }, L, {
    prefixCls: O,
    copied: M,
    locale: y,
    onCopy: H,
    loading: z,
    iconOnly: d == null
  })) : null, Be = (se) => [
    // (renderExpanded || ellipsisConfig.collapsible) && renderExpand(),
    se && Te(),
    Fe(),
    Ge()
  ], Ie = (se) => [se && !le && /* @__PURE__ */ u.createElement("span", {
    "aria-hidden": !0,
    key: "ellipsis"
  }, YE), k.suffix, Be(se)];
  return /* @__PURE__ */ u.createElement(hr, {
    onResize: _e,
    disabled: !$e
  }, (se) => /* @__PURE__ */ u.createElement($v, {
    tooltipProps: Z,
    enableEllipsis: $e,
    isEllipsis: he
  }, /* @__PURE__ */ u.createElement(ml, Object.assign({
    className: ee({
      [`${O}-${l}`]: l,
      [`${O}-disabled`]: c,
      [`${O}-ellipsis`]: we,
      [`${O}-ellipsis-single-line`]: be,
      [`${O}-ellipsis-multiple-line`]: Pe
    }, i),
    prefixCls: o,
    style: Object.assign(Object.assign({}, s), {
      WebkitLineClamp: Pe ? ye : void 0
    }),
    component: h,
    ref: _r(se, w, t),
    direction: b,
    onClick: j.includes("text") ? B : void 0,
    "aria-label": re == null ? void 0 : re.toString(),
    title: p
  }, _), /* @__PURE__ */ u.createElement(GE, {
    enableMeasure: $e && !ne,
    text: d,
    rows: ye,
    width: ct,
    onEllipsis: Oe,
    expanded: le,
    miscDeps: [M, le, z, $, E]
  }, (de, We) => XE(e, /* @__PURE__ */ u.createElement(u.Fragment, null, de.length > 0 && We && !le && re ? /* @__PURE__ */ u.createElement("span", {
    key: "show-content",
    "aria-hidden": !0
  }, de) : de, Ie(We)))))));
});
var ZE = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
    t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const QE = /* @__PURE__ */ u.forwardRef((e, t) => {
  var {
    ellipsis: r,
    rel: n
  } = e, a = ZE(e, ["ellipsis", "rel"]);
  if (process.env.NODE_ENV !== "production") {
    const i = Ft("Typography.Link");
    process.env.NODE_ENV !== "production" && i(typeof r != "object", "usage", "`ellipsis` only supports boolean value.");
  }
  const o = Object.assign(Object.assign({}, a), {
    rel: n === void 0 && a.target === "_blank" ? "noopener noreferrer" : n
  });
  return delete o.navigate, /* @__PURE__ */ u.createElement(Zo, Object.assign({}, o, {
    ref: t,
    ellipsis: !!r,
    component: "a"
  }));
}), JE = /* @__PURE__ */ u.forwardRef((e, t) => /* @__PURE__ */ u.createElement(Zo, Object.assign({
  ref: t
}, e, {
  component: "div"
})));
var ew = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
    t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const tw = (e, t) => {
  var {
    ellipsis: r
  } = e, n = ew(e, ["ellipsis"]);
  const a = u.useMemo(() => r && typeof r == "object" ? Cr(r, ["expandable", "rows"]) : r, [r]);
  if (process.env.NODE_ENV !== "production") {
    const o = Ft("Typography.Text");
    process.env.NODE_ENV !== "production" && o(typeof r != "object" || !r || !("expandable" in r) && !("rows" in r), "usage", "`ellipsis` do not support `expandable` or `rows` props.");
  }
  return /* @__PURE__ */ u.createElement(Zo, Object.assign({
    ref: t
  }, n, {
    ellipsis: a,
    component: "span"
  }));
}, rw = /* @__PURE__ */ u.forwardRef(tw);
var nw = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
    t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const pu = [1, 2, 3, 4, 5], aw = /* @__PURE__ */ u.forwardRef((e, t) => {
  const {
    level: r = 1
  } = e, n = nw(e, ["level"]);
  let a;
  if (process.env.NODE_ENV !== "production") {
    const o = Ft("Typography.Title");
    process.env.NODE_ENV !== "production" && o(pu.includes(r), "usage", "Title only accept `1 | 2 | 3 | 4 | 5` as `level` value. And `5` need 4.6.0+ version.");
  }
  return pu.includes(r) ? a = `h${r}` : a = "h1", /* @__PURE__ */ u.createElement(Zo, Object.assign({
    ref: t
  }, n, {
    component: a
  }));
}), Hn = ml;
Hn.Text = rw;
Hn.Link = QE;
Hn.Title = aw;
Hn.Paragraph = JE;
const Sw = ({
  inputRef: e,
  placeholder: t = "Ask me anything about your product data",
  userQuery: r,
  setUserQuery: n,
  handleSendMessage: a,
  isFollowupDisabled: o = !1
}) => {
  const i = r.trim().length === 0 || o, s = (l) => {
    l.key === "Enter" && !l.shiftKey && (l.stopPropagation(), l.preventDefault(), i || a());
  };
  return /* @__PURE__ */ Qt.jsxs(
    da,
    {
      vertical: !0,
      style: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        marginLeft: "auto",
        marginRight: "auto",
        width: "60vw"
      },
      children: [
        /* @__PURE__ */ Qt.jsx(
          "div",
          {
            style: {
              backgroundImage: "linear-gradient(180deg, transparent 23%, var(--background) 97%)",
              height: "6vh"
            }
          }
        ),
        /* @__PURE__ */ Qt.jsx(
          Yo,
          {
            size: "small",
            bordered: !0,
            style: {
              width: "100%",
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0
            },
            styles: {
              body: {
                padding: 16
              }
            },
            children: /* @__PURE__ */ Qt.jsxs(da, { vertical: !0, gap: 16, children: [
              /* @__PURE__ */ Qt.jsxs(da, { align: "flex-start", gap: 12, children: [
                /* @__PURE__ */ Qt.jsx(
                  pv,
                  {
                    ref: e,
                    value: r,
                    onChange: (l) => n(l.target.value),
                    autoSize: { minRows: 1, maxRows: 8 },
                    size: "large",
                    variant: "borderless",
                    placeholder: t,
                    onKeyDown: s
                  }
                ),
                /* @__PURE__ */ Qt.jsx(
                  Ho,
                  {
                    disabled: i,
                    size: "large",
                    type: "primary",
                    shape: "circle",
                    onClick: a,
                    icon: /* @__PURE__ */ Qt.jsx(xu, { weight: "bold" })
                  }
                )
              ] }),
              /* @__PURE__ */ Qt.jsx(da, { align: "flex-end", justify: "flex-end", children: /* @__PURE__ */ Qt.jsxs(
                Hn.Text,
                {
                  type: "secondary",
                  style: {
                    fontWeight: 500,
                    fontSize: "0.75rem",
                    visibility: r.trim().length > 0 ? "visible" : "hidden"
                  },
                  children: [
                    "Use",
                    " ",
                    /* @__PURE__ */ Qt.jsx(
                      Hn.Text,
                      {
                        type: "secondary",
                        style: {
                          backgroundColor: "var(--background)",
                          fontWeight: 500,
                          fontSize: "0.75rem",
                          padding: "3px 6px",
                          borderRadius: 4
                        },
                        children: "shift + enter"
                      }
                    ),
                    " ",
                    "for new line"
                  ]
                }
              ) })
            ] })
          }
        )
      ]
    }
  );
};
var Ls = { exports: {} }, Mi = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hu;
function ow() {
  return hu || (hu = 1, function(e) {
    function t(E, L) {
      var M = E.length;
      E.push(L);
      e: for (; 0 < M; ) {
        var z = M - 1 >>> 1, H = E[z];
        if (0 < a(H, L)) E[z] = L, E[M] = H, M = z;
        else break e;
      }
    }
    function r(E) {
      return E.length === 0 ? null : E[0];
    }
    function n(E) {
      if (E.length === 0) return null;
      var L = E[0], M = E.pop();
      if (M !== L) {
        E[0] = M;
        e: for (var z = 0, H = E.length, W = H >>> 1; z < W; ) {
          var U = 2 * (z + 1) - 1, Q = E[U], q = U + 1, J = E[q];
          if (0 > a(Q, M)) q < H && 0 > a(J, Q) ? (E[z] = J, E[q] = M, z = q) : (E[z] = Q, E[U] = M, z = U);
          else if (q < H && 0 > a(J, M)) E[z] = J, E[q] = M, z = q;
          else break e;
        }
      }
      return L;
    }
    function a(E, L) {
      var M = E.sortIndex - L.sortIndex;
      return M !== 0 ? M : E.id - L.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var o = performance;
      e.unstable_now = function() {
        return o.now();
      };
    } else {
      var i = Date, s = i.now();
      e.unstable_now = function() {
        return i.now() - s;
      };
    }
    var l = [], c = [], d = 1, f = null, v = 3, m = !1, h = !1, p = !1, g = typeof setTimeout == "function" ? setTimeout : null, S = typeof clearTimeout == "function" ? clearTimeout : null, b = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function y(E) {
      for (var L = r(c); L !== null; ) {
        if (L.callback === null) n(c);
        else if (L.startTime <= E) n(c), L.sortIndex = L.expirationTime, t(l, L);
        else break;
        L = r(c);
      }
    }
    function w(E) {
      if (p = !1, y(E), !h) if (r(l) !== null) h = !0, N(C);
      else {
        var L = r(c);
        L !== null && x(w, L.startTime - E);
      }
    }
    function C(E, L) {
      h = !1, p && (p = !1, S($), $ = -1), m = !0;
      var M = v;
      try {
        for (y(L), f = r(l); f !== null && (!(f.expirationTime > L) || E && !F()); ) {
          var z = f.callback;
          if (typeof z == "function") {
            f.callback = null, v = f.priorityLevel;
            var H = z(f.expirationTime <= L);
            L = e.unstable_now(), typeof H == "function" ? f.callback = H : f === r(l) && n(l), y(L);
          } else n(l);
          f = r(l);
        }
        if (f !== null) var W = !0;
        else {
          var U = r(c);
          U !== null && x(w, U.startTime - L), W = !1;
        }
        return W;
      } finally {
        f = null, v = M, m = !1;
      }
    }
    var O = !1, _ = null, $ = -1, R = 5, A = -1;
    function F() {
      return !(e.unstable_now() - A < R);
    }
    function j() {
      if (_ !== null) {
        var E = e.unstable_now();
        A = E;
        var L = !0;
        try {
          L = _(!0, E);
        } finally {
          L ? I() : (O = !1, _ = null);
        }
      } else O = !1;
    }
    var I;
    if (typeof b == "function") I = function() {
      b(j);
    };
    else if (typeof MessageChannel < "u") {
      var T = new MessageChannel(), B = T.port2;
      T.port1.onmessage = j, I = function() {
        B.postMessage(null);
      };
    } else I = function() {
      g(j, 0);
    };
    function N(E) {
      _ = E, O || (O = !0, I());
    }
    function x(E, L) {
      $ = g(function() {
        E(e.unstable_now());
      }, L);
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(E) {
      E.callback = null;
    }, e.unstable_continueExecution = function() {
      h || m || (h = !0, N(C));
    }, e.unstable_forceFrameRate = function(E) {
      0 > E || 125 < E ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : R = 0 < E ? Math.floor(1e3 / E) : 5;
    }, e.unstable_getCurrentPriorityLevel = function() {
      return v;
    }, e.unstable_getFirstCallbackNode = function() {
      return r(l);
    }, e.unstable_next = function(E) {
      switch (v) {
        case 1:
        case 2:
        case 3:
          var L = 3;
          break;
        default:
          L = v;
      }
      var M = v;
      v = L;
      try {
        return E();
      } finally {
        v = M;
      }
    }, e.unstable_pauseExecution = function() {
    }, e.unstable_requestPaint = function() {
    }, e.unstable_runWithPriority = function(E, L) {
      switch (E) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          E = 3;
      }
      var M = v;
      v = E;
      try {
        return L();
      } finally {
        v = M;
      }
    }, e.unstable_scheduleCallback = function(E, L, M) {
      var z = e.unstable_now();
      switch (typeof M == "object" && M !== null ? (M = M.delay, M = typeof M == "number" && 0 < M ? z + M : z) : M = z, E) {
        case 1:
          var H = -1;
          break;
        case 2:
          H = 250;
          break;
        case 5:
          H = 1073741823;
          break;
        case 4:
          H = 1e4;
          break;
        default:
          H = 5e3;
      }
      return H = M + H, E = { id: d++, callback: L, priorityLevel: E, startTime: M, expirationTime: H, sortIndex: -1 }, M > z ? (E.sortIndex = M, t(c, E), r(l) === null && E === r(c) && (p ? (S($), $ = -1) : p = !0, x(w, M - z))) : (E.sortIndex = H, t(l, E), h || m || (h = !0, N(C))), E;
    }, e.unstable_shouldYield = F, e.unstable_wrapCallback = function(E) {
      var L = v;
      return function() {
        var M = v;
        v = L;
        try {
          return E.apply(this, arguments);
        } finally {
          v = M;
        }
      };
    };
  }(Mi)), Mi;
}
var Ai = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bu;
function iw() {
  return bu || (bu = 1, function(e) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var t = !1, r = !1, n = 5;
      function a(Z, re) {
        var Te = Z.length;
        Z.push(re), s(Z, re, Te);
      }
      function o(Z) {
        return Z.length === 0 ? null : Z[0];
      }
      function i(Z) {
        if (Z.length === 0)
          return null;
        var re = Z[0], Te = Z.pop();
        return Te !== re && (Z[0] = Te, l(Z, Te, 0)), re;
      }
      function s(Z, re, Te) {
        for (var Fe = Te; Fe > 0; ) {
          var Ge = Fe - 1 >>> 1, Be = Z[Ge];
          if (c(Be, re) > 0)
            Z[Ge] = re, Z[Fe] = Be, Fe = Ge;
          else
            return;
        }
      }
      function l(Z, re, Te) {
        for (var Fe = Te, Ge = Z.length, Be = Ge >>> 1; Fe < Be; ) {
          var Ie = (Fe + 1) * 2 - 1, se = Z[Ie], de = Ie + 1, We = Z[de];
          if (c(se, re) < 0)
            de < Ge && c(We, se) < 0 ? (Z[Fe] = We, Z[de] = re, Fe = de) : (Z[Fe] = se, Z[Ie] = re, Fe = Ie);
          else if (de < Ge && c(We, re) < 0)
            Z[Fe] = We, Z[de] = re, Fe = de;
          else
            return;
        }
      }
      function c(Z, re) {
        var Te = Z.sortIndex - re.sortIndex;
        return Te !== 0 ? Te : Z.id - re.id;
      }
      var d = 1, f = 2, v = 3, m = 4, h = 5;
      function p(Z, re) {
      }
      var g = typeof performance == "object" && typeof performance.now == "function";
      if (g) {
        var S = performance;
        e.unstable_now = function() {
          return S.now();
        };
      } else {
        var b = Date, y = b.now();
        e.unstable_now = function() {
          return b.now() - y;
        };
      }
      var w = 1073741823, C = -1, O = 250, _ = 5e3, $ = 1e4, R = w, A = [], F = [], j = 1, I = null, T = v, B = !1, N = !1, x = !1, E = typeof setTimeout == "function" ? setTimeout : null, L = typeof clearTimeout == "function" ? clearTimeout : null, M = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function z(Z) {
        for (var re = o(F); re !== null; ) {
          if (re.callback === null)
            i(F);
          else if (re.startTime <= Z)
            i(F), re.sortIndex = re.expirationTime, a(A, re);
          else
            return;
          re = o(F);
        }
      }
      function H(Z) {
        if (x = !1, z(Z), !N)
          if (o(A) !== null)
            N = !0, pe(W);
          else {
            var re = o(F);
            re !== null && ct(H, re.startTime - Z);
          }
      }
      function W(Z, re) {
        N = !1, x && (x = !1, at()), B = !0;
        var Te = T;
        try {
          var Fe;
          if (!r) return U(Z, re);
        } finally {
          I = null, T = Te, B = !1;
        }
      }
      function U(Z, re) {
        var Te = re;
        for (z(Te), I = o(A); I !== null && !t && !(I.expirationTime > Te && (!Z || ie())); ) {
          var Fe = I.callback;
          if (typeof Fe == "function") {
            I.callback = null, T = I.priorityLevel;
            var Ge = I.expirationTime <= Te, Be = Fe(Ge);
            Te = e.unstable_now(), typeof Be == "function" ? I.callback = Be : I === o(A) && i(A), z(Te);
          } else
            i(A);
          I = o(A);
        }
        if (I !== null)
          return !0;
        var Ie = o(F);
        return Ie !== null && ct(H, Ie.startTime - Te), !1;
      }
      function Q(Z, re) {
        switch (Z) {
          case d:
          case f:
          case v:
          case m:
          case h:
            break;
          default:
            Z = v;
        }
        var Te = T;
        T = Z;
        try {
          return re();
        } finally {
          T = Te;
        }
      }
      function q(Z) {
        var re;
        switch (T) {
          case d:
          case f:
          case v:
            re = v;
            break;
          default:
            re = T;
            break;
        }
        var Te = T;
        T = re;
        try {
          return Z();
        } finally {
          T = Te;
        }
      }
      function J(Z) {
        var re = T;
        return function() {
          var Te = T;
          T = re;
          try {
            return Z.apply(this, arguments);
          } finally {
            T = Te;
          }
        };
      }
      function oe(Z, re, Te) {
        var Fe = e.unstable_now(), Ge;
        if (typeof Te == "object" && Te !== null) {
          var Be = Te.delay;
          typeof Be == "number" && Be > 0 ? Ge = Fe + Be : Ge = Fe;
        } else
          Ge = Fe;
        var Ie;
        switch (Z) {
          case d:
            Ie = C;
            break;
          case f:
            Ie = O;
            break;
          case h:
            Ie = R;
            break;
          case m:
            Ie = $;
            break;
          case v:
          default:
            Ie = _;
            break;
        }
        var se = Ge + Ie, de = {
          id: j++,
          callback: re,
          priorityLevel: Z,
          startTime: Ge,
          expirationTime: se,
          sortIndex: -1
        };
        return Ge > Fe ? (de.sortIndex = Ge, a(F, de), o(A) === null && de === o(F) && (x ? at() : x = !0, ct(H, Ge - Fe))) : (de.sortIndex = se, a(A, de), !N && !B && (N = !0, pe(W))), de;
      }
      function ue() {
      }
      function xe() {
        !N && !B && (N = !0, pe(W));
      }
      function me() {
        return o(A);
      }
      function fe(Z) {
        Z.callback = null;
      }
      function we() {
        return T;
      }
      var k = !1, le = null, ge = -1, $e = n, ye = -1;
      function ie() {
        var Z = e.unstable_now() - ye;
        return !(Z < $e);
      }
      function ne() {
      }
      function ae(Z) {
        if (Z < 0 || Z > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        Z > 0 ? $e = Math.floor(1e3 / Z) : $e = n;
      }
      var Se = function() {
        if (le !== null) {
          var Z = e.unstable_now();
          ye = Z;
          var re = !0, Te = !0;
          try {
            Te = le(re, Z);
          } finally {
            Te ? he() : (k = !1, le = null);
          }
        } else
          k = !1;
      }, he;
      if (typeof M == "function")
        he = function() {
          M(Se);
        };
      else if (typeof MessageChannel < "u") {
        var be = new MessageChannel(), Pe = be.port2;
        be.port1.onmessage = Se, he = function() {
          Pe.postMessage(null);
        };
      } else
        he = function() {
          E(Se, 0);
        };
      function pe(Z) {
        le = Z, k || (k = !0, he());
      }
      function ct(Z, re) {
        ge = E(function() {
          Z(e.unstable_now());
        }, re);
      }
      function at() {
        L(ge), ge = -1;
      }
      var _e = ne, Oe = null;
      e.unstable_IdlePriority = h, e.unstable_ImmediatePriority = d, e.unstable_LowPriority = m, e.unstable_NormalPriority = v, e.unstable_Profiling = Oe, e.unstable_UserBlockingPriority = f, e.unstable_cancelCallback = fe, e.unstable_continueExecution = xe, e.unstable_forceFrameRate = ae, e.unstable_getCurrentPriorityLevel = we, e.unstable_getFirstCallbackNode = me, e.unstable_next = q, e.unstable_pauseExecution = ue, e.unstable_requestPaint = _e, e.unstable_runWithPriority = Q, e.unstable_scheduleCallback = oe, e.unstable_shouldYield = ie, e.unstable_wrapCallback = J, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Ai)), Ai;
}
process.env.NODE_ENV === "production" ? Ls.exports = ow() : Ls.exports = iw();
var Li = Ls.exports;
const Io = Symbol(), sw = Symbol(), lw = typeof window > "u" || /ServerSideRendering/.test(window.navigator && window.navigator.userAgent), Ov = lw ? ht : yu, cw = Li.unstable_runWithPriority ? (e) => {
  try {
    Li.unstable_runWithPriority(Li.unstable_NormalPriority, e);
  } catch (t) {
    if (t.message === "Not implemented.")
      e();
    else
      throw t;
  }
} : (e) => e(), uw = (e) => ({ value: r, children: n }) => {
  const a = ke(r), o = ke(0), [i, s] = pt(null);
  i && (i(r), s(null));
  const l = ke();
  if (!l.current) {
    const c = /* @__PURE__ */ new Set(), d = (f, v) => {
      o.current += 1;
      const m = {
        n: o.current
      };
      v != null && v.suspense && (m.n *= -1, m.p = new Promise((h) => {
        s(() => (p) => {
          m.v = p, delete m.p, h(p);
        });
      })), c.forEach((h) => h(m)), f();
    };
    l.current = {
      [Io]: {
        /* "v"alue     */
        v: a,
        /* versio"n"   */
        n: o,
        /* "l"isteners */
        l: c,
        /* "u"pdate    */
        u: d
      }
    };
  }
  return Ov(() => {
    a.current = r, o.current += 1, cw(() => {
      l.current[Io].l.forEach((c) => {
        c({ n: o.current, v: r });
      });
    });
  }, [r]), Mv(e, { value: l.current }, n);
}, dw = (e) => e;
function fw(e) {
  const t = dn({
    [Io]: {
      /* "v"alue     */
      v: { current: e },
      /* versio"n"   */
      n: { current: -1 },
      /* "l"isteners */
      l: /* @__PURE__ */ new Set(),
      /* "u"pdate    */
      u: (r) => r()
    }
  });
  return t[sw] = t.Provider, t.Provider = uw(t.Provider), delete t.Consumer, t;
}
function vw(e, t) {
  const r = Lt(e)[Io];
  if (typeof process == "object" && process.env.NODE_ENV !== "production" && !r)
    throw new Error("useContextSelector requires special context");
  const {
    /* "v"alue     */
    v: { current: n },
    /* versio"n"   */
    n: { current: a },
    /* "l"isteners */
    l: o
  } = r, i = t(n), [s, l] = Av((c, d) => {
    if (!d)
      return [n, i];
    if ("p" in d)
      throw d.p;
    if (d.n === a)
      return Object.is(c[1], i) ? c : [n, i];
    try {
      if ("v" in d) {
        if (Object.is(c[0], d.v))
          return c;
        const f = t(d.v);
        return Object.is(c[1], f) ? c : [d.v, f];
      }
    } catch {
    }
    return [...c];
  }, [n, i]);
  return Object.is(s[1], i) || l(), Ov(() => (o.add(l), () => {
    o.delete(l);
  }), [o]), s[1];
}
function gw(e) {
  return vw(e, dw);
}
const mw = {
  light: {
    "--primary-color": "#49a5aa",
    // Always keep this in hex format
    "--cta-text": "white",
    "--background": "#FEFBF3",
    "--primary-text": "#3c3838",
    "--border": "#e9e0d6",
    "--secondary-text": "#9D9D9D",
    "--foreground": "#f9f4e8",
    "--chart-colors": [
      "rgb(136, 204, 238)",
      "rgb(204, 102, 119)",
      "rgb(221, 204, 119)",
      "rgb(17, 119, 51)",
      "rgb(51, 34, 136)",
      "rgb(170, 68, 153)",
      "rgb(68, 170, 153)",
      "rgb(153, 153, 51)",
      "rgb(136, 34, 85)",
      "rgb(102, 17, 0)",
      "rgb(136, 136, 136)"
    ]
  },
  dark: {
    "--primary-color": "#76ABAE",
    // Always keep this in hex format
    "--cta-text": "#222831",
    "--background": "#222831",
    "--primary-text": "#f7f7f7",
    "--border": "#484848",
    "--secondary-text": "#bfbfbf",
    "--foreground": "#31363F",
    "--chart-colors": [
      "rgb(102, 197, 204)",
      "rgb(246, 207, 113)",
      "rgb(248, 156, 116)",
      "rgb(220, 176, 242)",
      "rgb(135, 197, 95)",
      "rgb(158, 185, 243)",
      "rgb(254, 136, 177)",
      "rgb(201, 219, 116)",
      "rgb(139, 224, 164)",
      "rgb(180, 151, 231)",
      "rgb(179, 179, 179)"
    ]
  }
}, Rv = fw(
  void 0
);
function Cw({
  children: e
}) {
  const t = (localStorage == null ? void 0 : localStorage.getItem("appThemeMode")) || "light", [r, n] = pt(t), a = mw[r];
  return ht(() => {
    Object.entries(a).forEach(([o, i]) => {
      typeof i == "string" && document.documentElement.style.setProperty(`${o}`, i);
    });
  }, [a]), /* @__PURE__ */ Qt.jsx(
    Rv.Provider,
    {
      value: {
        appThemeMode: r,
        setAppThemeMode: n,
        themeColors: a
      },
      children: /* @__PURE__ */ Qt.jsx(
        gn,
        {
          theme: {
            token: {
              colorPrimary: a["--primary-color"],
              colorBgBase: a["--background"],
              colorText: a["--primary-text"],
              colorTextDescription: a["--secondary-text"],
              colorTextHeading: a["--primary-text"],
              colorTextSecondary: a["--secondary-text"],
              fontFamily: "HousewareFont",
              colorLink: a["--primary-color"],
              colorBorder: a["--border"],
              colorBorderSecondary: a["--border"],
              colorSplit: a["--border"]
            },
            components: {
              Card: {
                colorBgContainer: a["--foreground"],
                colorBorder: a["--border"]
              },
              Input: {
                colorTextPlaceholder: a["--secondary-text"]
              },
              Button: {
                primaryColor: a["--cta-text"],
                primaryShadow: "none",
                defaultHoverColor: a["--cta-text"]
              },
              Layout: {
                bodyBg: a["--background"]
              }
            }
          },
          children: e
        }
      )
    }
  );
}
const pw = () => {
  const e = gw(Rv);
  if (!e)
    throw new Error("useTheme must be used within a ThemeProvider");
  return e;
}, Ew = () => {
  const { appThemeMode: e, setAppThemeMode: t, themeColors: r } = pw();
  return {
    currentTheme: e,
    themeColors: r,
    setTheme: t,
    toggleTheme: () => {
      t(e === "light" ? "dark" : "light");
    }
  };
};
export {
  Cw as AppThemeProvider,
  yw as Button,
  Sw as ChatInput,
  pw as useAppTheme,
  Ew as useThemeManager
};
