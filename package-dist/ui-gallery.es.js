import * as u from "react";
import D, { createContext as br, forwardRef as fn, useContext as Nt, version as zm, isValidElement as Vm, useRef as Me, useLayoutEffect as sd, useEffect as ot, useMemo as $n, useState as rt, Children as Bm, createRef as km, useCallback as er, useImperativeHandle as Uo, cloneElement as Hm, createElement as Wm, useReducer as Um } from "react";
import * as Km from "react-dom";
import To, { createPortal as Gm, unstable_batchedUpdates as qm, flushSync as Xm } from "react-dom";
function ld(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Yi = { exports: {} }, ua = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hl;
function Zm() {
  if (Hl) return ua;
  Hl = 1;
  var e = D, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(s, l, c) {
    var d, f = {}, v = null, g = null;
    c !== void 0 && (v = "" + c), l.key !== void 0 && (v = "" + l.key), l.ref !== void 0 && (g = l.ref);
    for (d in l) r.call(l, d) && !o.hasOwnProperty(d) && (f[d] = l[d]);
    if (s && s.defaultProps) for (d in l = s.defaultProps, l) f[d] === void 0 && (f[d] = l[d]);
    return { $$typeof: t, type: s, key: v, ref: g, props: f, _owner: a.current };
  }
  return ua.Fragment = n, ua.jsx = i, ua.jsxs = i, ua;
}
var da = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wl;
function Ym() {
  return Wl || (Wl = 1, process.env.NODE_ENV !== "production" && function() {
    var e = D, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), p = Symbol.iterator, h = "@@iterator";
    function m(A) {
      if (A === null || typeof A != "object")
        return null;
      var X = p && A[p] || A[h];
      return typeof X == "function" ? X : null;
    }
    var S = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function b(A) {
      {
        for (var X = arguments.length, J = new Array(X > 1 ? X - 1 : 0), Ce = 1; Ce < X; Ce++)
          J[Ce - 1] = arguments[Ce];
        y("error", A, J);
      }
    }
    function y(A, X, J) {
      {
        var Ce = S.ReactDebugCurrentFrame, De = Ce.getStackAddendum();
        De !== "" && (X += "%s", J = J.concat([De]));
        var Le = J.map(function(ze) {
          return String(ze);
        });
        Le.unshift("Warning: " + X), Function.prototype.apply.call(console[A], console, Le);
      }
    }
    var w = !1, C = !1, O = !1, E = !1, x = !1, R;
    R = Symbol.for("react.module.reference");
    function T(A) {
      return !!(typeof A == "string" || typeof A == "function" || A === r || A === o || x || A === a || A === c || A === d || E || A === g || w || C || O || typeof A == "object" && A !== null && (A.$$typeof === v || A.$$typeof === f || A.$$typeof === i || A.$$typeof === s || A.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      A.$$typeof === R || A.getModuleId !== void 0));
    }
    function M(A, X, J) {
      var Ce = A.displayName;
      if (Ce)
        return Ce;
      var De = X.displayName || X.name || "";
      return De !== "" ? J + "(" + De + ")" : J;
    }
    function j(A) {
      return A.displayName || "Context";
    }
    function I(A) {
      if (A == null)
        return null;
      if (typeof A.tag == "number" && b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof A == "function")
        return A.displayName || A.name || null;
      if (typeof A == "string")
        return A;
      switch (A) {
        case r:
          return "Fragment";
        case n:
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
      if (typeof A == "object")
        switch (A.$$typeof) {
          case s:
            var X = A;
            return j(X) + ".Consumer";
          case i:
            var J = A;
            return j(J._context) + ".Provider";
          case l:
            return M(A, A.render, "ForwardRef");
          case f:
            var Ce = A.displayName || null;
            return Ce !== null ? Ce : I(A.type) || "Memo";
          case v: {
            var De = A, Le = De._payload, ze = De._init;
            try {
              return I(ze(Le));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var _ = Object.assign, k = 0, N, P, $, F, L, V, W;
    function U() {
    }
    U.__reactDisabledLog = !0;
    function G() {
      {
        if (k === 0) {
          N = console.log, P = console.info, $ = console.warn, F = console.error, L = console.group, V = console.groupCollapsed, W = console.groupEnd;
          var A = {
            configurable: !0,
            enumerable: !0,
            value: U,
            writable: !0
          };
          Object.defineProperties(console, {
            info: A,
            log: A,
            warn: A,
            error: A,
            group: A,
            groupCollapsed: A,
            groupEnd: A
          });
        }
        k++;
      }
    }
    function Q() {
      {
        if (k--, k === 0) {
          var A = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: _({}, A, {
              value: N
            }),
            info: _({}, A, {
              value: P
            }),
            warn: _({}, A, {
              value: $
            }),
            error: _({}, A, {
              value: F
            }),
            group: _({}, A, {
              value: L
            }),
            groupCollapsed: _({}, A, {
              value: V
            }),
            groupEnd: _({}, A, {
              value: W
            })
          });
        }
        k < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var q = S.ReactCurrentDispatcher, Z;
    function re(A, X, J) {
      {
        if (Z === void 0)
          try {
            throw Error();
          } catch (De) {
            var Ce = De.stack.trim().match(/\n( *(at )?)/);
            Z = Ce && Ce[1] || "";
          }
        return `
` + Z + A;
      }
    }
    var ae = !1, ue;
    {
      var de = typeof WeakMap == "function" ? WeakMap : Map;
      ue = new de();
    }
    function ce(A, X) {
      if (!A || ae)
        return "";
      {
        var J = ue.get(A);
        if (J !== void 0)
          return J;
      }
      var Ce;
      ae = !0;
      var De = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Le;
      Le = q.current, q.current = null, G();
      try {
        if (X) {
          var ze = function() {
            throw Error();
          };
          if (Object.defineProperty(ze.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ze, []);
            } catch (bt) {
              Ce = bt;
            }
            Reflect.construct(A, [], ze);
          } else {
            try {
              ze.call();
            } catch (bt) {
              Ce = bt;
            }
            A.call(ze.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (bt) {
            Ce = bt;
          }
          A();
        }
      } catch (bt) {
        if (bt && Ce && typeof bt.stack == "string") {
          for (var He = bt.stack.split(`
`), ht = Ce.stack.split(`
`), it = He.length - 1, qe = ht.length - 1; it >= 1 && qe >= 0 && He[it] !== ht[qe]; )
            qe--;
          for (; it >= 1 && qe >= 0; it--, qe--)
            if (He[it] !== ht[qe]) {
              if (it !== 1 || qe !== 1)
                do
                  if (it--, qe--, qe < 0 || He[it] !== ht[qe]) {
                    var Rt = `
` + He[it].replace(" at new ", " at ");
                    return A.displayName && Rt.includes("<anonymous>") && (Rt = Rt.replace("<anonymous>", A.displayName)), typeof A == "function" && ue.set(A, Rt), Rt;
                  }
                while (it >= 1 && qe >= 0);
              break;
            }
        }
      } finally {
        ae = !1, q.current = Le, Q(), Error.prepareStackTrace = De;
      }
      var Xt = A ? A.displayName || A.name : "", Ut = Xt ? re(Xt) : "";
      return typeof A == "function" && ue.set(A, Ut), Ut;
    }
    function ge(A, X, J) {
      return ce(A, !1);
    }
    function H(A) {
      var X = A.prototype;
      return !!(X && X.isReactComponent);
    }
    function ne(A, X, J) {
      if (A == null)
        return "";
      if (typeof A == "function")
        return ce(A, H(A));
      if (typeof A == "string")
        return re(A);
      switch (A) {
        case c:
          return re("Suspense");
        case d:
          return re("SuspenseList");
      }
      if (typeof A == "object")
        switch (A.$$typeof) {
          case l:
            return ge(A.render);
          case f:
            return ne(A.type, X, J);
          case v: {
            var Ce = A, De = Ce._payload, Le = Ce._init;
            try {
              return ne(Le(De), X, J);
            } catch {
            }
          }
        }
      return "";
    }
    var ve = Object.prototype.hasOwnProperty, $e = {}, pe = S.ReactDebugCurrentFrame;
    function ie(A) {
      if (A) {
        var X = A._owner, J = ne(A.type, A._source, X ? X.type : null);
        pe.setExtraStackFrame(J);
      } else
        pe.setExtraStackFrame(null);
    }
    function oe(A, X, J, Ce, De) {
      {
        var Le = Function.call.bind(ve);
        for (var ze in A)
          if (Le(A, ze)) {
            var He = void 0;
            try {
              if (typeof A[ze] != "function") {
                var ht = Error((Ce || "React class") + ": " + J + " type `" + ze + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof A[ze] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ht.name = "Invariant Violation", ht;
              }
              He = A[ze](X, ze, Ce, J, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (it) {
              He = it;
            }
            He && !(He instanceof Error) && (ie(De), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Ce || "React class", J, ze, typeof He), ie(null)), He instanceof Error && !(He.message in $e) && ($e[He.message] = !0, ie(De), b("Failed %s type: %s", J, He.message), ie(null));
          }
      }
    }
    var se = Array.isArray;
    function we(A) {
      return se(A);
    }
    function be(A) {
      {
        var X = typeof Symbol == "function" && Symbol.toStringTag, J = X && A[Symbol.toStringTag] || A.constructor.name || "Object";
        return J;
      }
    }
    function ye(A) {
      try {
        return _e(A), !1;
      } catch {
        return !0;
      }
    }
    function _e(A) {
      return "" + A;
    }
    function Ee(A) {
      if (ye(A))
        return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", be(A)), _e(A);
    }
    var st = S.ReactCurrentOwner, Ye = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, xe, Oe, te;
    te = {};
    function le(A) {
      if (ve.call(A, "ref")) {
        var X = Object.getOwnPropertyDescriptor(A, "ref").get;
        if (X && X.isReactWarning)
          return !1;
      }
      return A.ref !== void 0;
    }
    function Ie(A) {
      if (ve.call(A, "key")) {
        var X = Object.getOwnPropertyDescriptor(A, "key").get;
        if (X && X.isReactWarning)
          return !1;
      }
      return A.key !== void 0;
    }
    function Ve(A, X) {
      if (typeof A.ref == "string" && st.current && X && st.current.stateNode !== X) {
        var J = I(st.current.type);
        te[J] || (b('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', I(st.current.type), A.ref), te[J] = !0);
      }
    }
    function Ke(A, X) {
      {
        var J = function() {
          xe || (xe = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", X));
        };
        J.isReactWarning = !0, Object.defineProperty(A, "key", {
          get: J,
          configurable: !0
        });
      }
    }
    function Ue(A, X) {
      {
        var J = function() {
          Oe || (Oe = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", X));
        };
        J.isReactWarning = !0, Object.defineProperty(A, "ref", {
          get: J,
          configurable: !0
        });
      }
    }
    var Ae = function(A, X, J, Ce, De, Le, ze) {
      var He = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: A,
        key: X,
        ref: J,
        props: ze,
        // Record the component responsible for creating this element.
        _owner: Le
      };
      return He._store = {}, Object.defineProperty(He._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(He, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ce
      }), Object.defineProperty(He, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: De
      }), Object.freeze && (Object.freeze(He.props), Object.freeze(He)), He;
    };
    function fe(A, X, J, Ce, De) {
      {
        var Le, ze = {}, He = null, ht = null;
        J !== void 0 && (Ee(J), He = "" + J), Ie(X) && (Ee(X.key), He = "" + X.key), le(X) && (ht = X.ref, Ve(X, De));
        for (Le in X)
          ve.call(X, Le) && !Ye.hasOwnProperty(Le) && (ze[Le] = X[Le]);
        if (A && A.defaultProps) {
          var it = A.defaultProps;
          for (Le in it)
            ze[Le] === void 0 && (ze[Le] = it[Le]);
        }
        if (He || ht) {
          var qe = typeof A == "function" ? A.displayName || A.name || "Unknown" : A;
          He && Ke(ze, qe), ht && Ue(ze, qe);
        }
        return Ae(A, He, ht, De, Ce, st.current, ze);
      }
    }
    var he = S.ReactCurrentOwner, je = S.ReactDebugCurrentFrame;
    function Be(A) {
      if (A) {
        var X = A._owner, J = ne(A.type, A._source, X ? X.type : null);
        je.setExtraStackFrame(J);
      } else
        je.setExtraStackFrame(null);
    }
    var wt;
    wt = !1;
    function mt(A) {
      return typeof A == "object" && A !== null && A.$$typeof === t;
    }
    function Qe() {
      {
        if (he.current) {
          var A = I(he.current.type);
          if (A)
            return `

Check the render method of \`` + A + "`.";
        }
        return "";
      }
    }
    function Xe(A) {
      return "";
    }
    var Ge = {};
    function Fe(A) {
      {
        var X = Qe();
        if (!X) {
          var J = typeof A == "string" ? A : A.displayName || A.name;
          J && (X = `

Check the top-level render call using <` + J + ">.");
        }
        return X;
      }
    }
    function Te(A, X) {
      {
        if (!A._store || A._store.validated || A.key != null)
          return;
        A._store.validated = !0;
        var J = Fe(X);
        if (Ge[J])
          return;
        Ge[J] = !0;
        var Ce = "";
        A && A._owner && A._owner !== he.current && (Ce = " It was passed a child from " + I(A._owner.type) + "."), Be(A), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', J, Ce), Be(null);
      }
    }
    function nt(A, X) {
      {
        if (typeof A != "object")
          return;
        if (we(A))
          for (var J = 0; J < A.length; J++) {
            var Ce = A[J];
            mt(Ce) && Te(Ce, X);
          }
        else if (mt(A))
          A._store && (A._store.validated = !0);
        else if (A) {
          var De = m(A);
          if (typeof De == "function" && De !== A.entries)
            for (var Le = De.call(A), ze; !(ze = Le.next()).done; )
              mt(ze.value) && Te(ze.value, X);
        }
      }
    }
    function Ct(A) {
      {
        var X = A.type;
        if (X == null || typeof X == "string")
          return;
        var J;
        if (typeof X == "function")
          J = X.propTypes;
        else if (typeof X == "object" && (X.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        X.$$typeof === f))
          J = X.propTypes;
        else
          return;
        if (J) {
          var Ce = I(X);
          oe(J, A.props, "prop", Ce, A);
        } else if (X.PropTypes !== void 0 && !wt) {
          wt = !0;
          var De = I(X);
          b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", De || "Unknown");
        }
        typeof X.getDefaultProps == "function" && !X.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Je(A) {
      {
        for (var X = Object.keys(A.props), J = 0; J < X.length; J++) {
          var Ce = X[J];
          if (Ce !== "children" && Ce !== "key") {
            Be(A), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Ce), Be(null);
            break;
          }
        }
        A.ref !== null && (Be(A), b("Invalid attribute `ref` supplied to `React.Fragment`."), Be(null));
      }
    }
    var et = {};
    function ut(A, X, J, Ce, De, Le) {
      {
        var ze = T(A);
        if (!ze) {
          var He = "";
          (A === void 0 || typeof A == "object" && A !== null && Object.keys(A).length === 0) && (He += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ht = Xe();
          ht ? He += ht : He += Qe();
          var it;
          A === null ? it = "null" : we(A) ? it = "array" : A !== void 0 && A.$$typeof === t ? (it = "<" + (I(A.type) || "Unknown") + " />", He = " Did you accidentally export a JSX literal instead of a component?") : it = typeof A, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", it, He);
        }
        var qe = fe(A, X, J, De, Le);
        if (qe == null)
          return qe;
        if (ze) {
          var Rt = X.children;
          if (Rt !== void 0)
            if (Ce)
              if (we(Rt)) {
                for (var Xt = 0; Xt < Rt.length; Xt++)
                  nt(Rt[Xt], A);
                Object.freeze && Object.freeze(Rt);
              } else
                b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              nt(Rt, A);
        }
        if (ve.call(X, "key")) {
          var Ut = I(A), bt = Object.keys(X).filter(function(Zt) {
            return Zt !== "key";
          }), Pn = bt.length > 0 ? "{key: someKey, " + bt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!et[Ut + Pn]) {
            var qn = bt.length > 0 ? "{" + bt.join(": ..., ") + ": ...}" : "{}";
            b(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Pn, Ut, qn, Ut), et[Ut + Pn] = !0;
          }
        }
        return A === r ? Je(qe) : Ct(qe), qe;
      }
    }
    function St(A, X, J) {
      return ut(A, X, J, !0);
    }
    function At(A, X, J) {
      return ut(A, X, J, !1);
    }
    var Wt = At, qt = St;
    da.Fragment = r, da.jsx = Wt, da.jsxs = qt;
  }()), da;
}
process.env.NODE_ENV === "production" ? Yi.exports = Zm() : Yi.exports = Ym();
var Re = Yi.exports;
const f$ = ({
  primary: e = !1,
  size: t = "medium",
  backgroundColor: n,
  label: r,
  ...a
}) => {
  const o = e ? "storybook-button--primary" : "storybook-button--secondary";
  return /* @__PURE__ */ Re.jsx(
    "button",
    {
      type: "button",
      className: ["storybook-button", `storybook-button--${t}`, o].join(" "),
      style: { backgroundColor: n },
      ...a,
      children: r
    }
  );
}, Qm = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ D.createElement(D.Fragment, null, /* @__PURE__ */ D.createElement("path", { d: "M216,20H40A20,20,0,0,0,20,40V216a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V40A20,20,0,0,0,216,20Zm-4,192H44V44H212ZM112,176V120a12,12,0,0,1,21.43-7.41A40,40,0,0,1,192,148v28a12,12,0,0,1-24,0V148a16,16,0,0,0-32,0v28a12,12,0,0,1-24,0ZM96,120v56a12,12,0,0,1-24,0V120a12,12,0,0,1,24,0ZM68,80A16,16,0,1,1,84,96,16,16,0,0,1,68,80Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ D.createElement(D.Fragment, null, /* @__PURE__ */ D.createElement(
      "path",
      {
        d: "M224,40V216a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8H216A8,8,0,0,1,224,40Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ D.createElement("path", { d: "M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ D.createElement(D.Fragment, null, /* @__PURE__ */ D.createElement("path", { d: "M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24ZM96,176a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0ZM88,96a12,12,0,1,1,12-12A12,12,0,0,1,88,96Zm96,80a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ D.createElement(D.Fragment, null, /* @__PURE__ */ D.createElement("path", { d: "M216,26H40A14,14,0,0,0,26,40V216a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V40A14,14,0,0,0,216,26Zm2,190a2,2,0,0,1-2,2H40a2,2,0,0,1-2-2V40a2,2,0,0,1,2-2H216a2,2,0,0,1,2,2ZM94,112v64a6,6,0,0,1-12,0V112a6,6,0,0,1,12,0Zm88,28v36a6,6,0,0,1-12,0V140a22,22,0,0,0-44,0v36a6,6,0,0,1-12,0V112a6,6,0,0,1,12,0v2.11A34,34,0,0,1,182,140ZM98,84A10,10,0,1,1,88,74,10,10,0,0,1,98,84Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ D.createElement(D.Fragment, null, /* @__PURE__ */ D.createElement("path", { d: "M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ D.createElement(D.Fragment, null, /* @__PURE__ */ D.createElement("path", { d: "M216,28H40A12,12,0,0,0,28,40V216a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V40A12,12,0,0,0,216,28Zm4,188a4,4,0,0,1-4,4H40a4,4,0,0,1-4-4V40a4,4,0,0,1,4-4H216a4,4,0,0,1,4,4ZM92,112v64a4,4,0,0,1-8,0V112a4,4,0,0,1,8,0Zm88,28v36a4,4,0,0,1-8,0V140a24,24,0,0,0-48,0v36a4,4,0,0,1-8,0V112a4,4,0,0,1,8,0v6.87A32,32,0,0,1,180,140ZM96,84a8,8,0,1,1-8-8A8,8,0,0,1,96,84Z" }))
  ]
]), Jm = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ D.createElement(D.Fragment, null, /* @__PURE__ */ D.createElement("path", { d: "M230.14,25.86a20,20,0,0,0-19.57-5.11l-.22.07L18.44,79a20,20,0,0,0-3.06,37.25L99,157l40.71,83.65a19.81,19.81,0,0,0,18,11.38c.57,0,1.15,0,1.73-.07A19.82,19.82,0,0,0,177,237.56L235.18,45.65a1.42,1.42,0,0,0,.07-.22A20,20,0,0,0,230.14,25.86ZM156.91,221.07l-34.37-70.64,46-45.95a12,12,0,0,0-17-17l-46,46L34.93,99.09,210,46Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ D.createElement(D.Fragment, null, /* @__PURE__ */ D.createElement(
      "path",
      {
        d: "M223.69,42.18l-58.22,192a8,8,0,0,1-14.92,1.25L108,148,20.58,105.45a8,8,0,0,1,1.25-14.92l192-58.22A8,8,0,0,1,223.69,42.18Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ D.createElement("path", { d: "M227.32,28.68a16,16,0,0,0-15.66-4.08l-.15,0L19.57,82.84a16,16,0,0,0-2.49,29.8L102,154l41.3,84.87A15.86,15.86,0,0,0,157.74,248q.69,0,1.38-.06a15.88,15.88,0,0,0,14-11.51l58.2-191.94c0-.05,0-.1,0-.15A16,16,0,0,0,227.32,28.68ZM157.83,231.85l-.05.14,0-.07-40.06-82.3,48-48a8,8,0,0,0-11.31-11.31l-48,48L24.08,98.25l-.07,0,.14,0L216,40Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ D.createElement(D.Fragment, null, /* @__PURE__ */ D.createElement("path", { d: "M231.4,44.34s0,.1,0,.15l-58.2,191.94a15.88,15.88,0,0,1-14,11.51q-.69.06-1.38.06a15.86,15.86,0,0,1-14.42-9.15L107,164.15a4,4,0,0,1,.77-4.58l57.92-57.92a8,8,0,0,0-11.31-11.31L96.43,148.26a4,4,0,0,1-4.58.77L17.08,112.64a16,16,0,0,1,2.49-29.8l191.94-58.2.15,0A16,16,0,0,1,231.4,44.34Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ D.createElement(D.Fragment, null, /* @__PURE__ */ D.createElement("path", { d: "M225.88,30.12a13.83,13.83,0,0,0-13.7-3.58l-.11,0L20.14,84.77A14,14,0,0,0,18,110.85l85.56,41.64L145.12,238a13.87,13.87,0,0,0,12.61,8c.4,0,.81,0,1.21-.05a13.9,13.9,0,0,0,12.29-10.09l58.2-191.93,0-.11A13.83,13.83,0,0,0,225.88,30.12Zm-8,10.4L159.73,232.43l0,.11a2,2,0,0,1-3.76.26l-40.68-83.58,49-49a6,6,0,1,0-8.49-8.49l-49,49L23.15,100a2,2,0,0,1,.31-3.74l.11,0L215.48,38.08a1.94,1.94,0,0,1,1.92.52A2,2,0,0,1,217.92,40.52Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ D.createElement(D.Fragment, null, /* @__PURE__ */ D.createElement("path", { d: "M227.32,28.68a16,16,0,0,0-15.66-4.08l-.15,0L19.57,82.84a16,16,0,0,0-2.49,29.8L102,154l41.3,84.87A15.86,15.86,0,0,0,157.74,248q.69,0,1.38-.06a15.88,15.88,0,0,0,14-11.51l58.2-191.94c0-.05,0-.1,0-.15A16,16,0,0,0,227.32,28.68ZM157.83,231.85l-.05.14,0-.07-40.06-82.3,48-48a8,8,0,0,0-11.31-11.31l-48,48L24.08,98.25l-.07,0,.14,0L216,40Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ D.createElement(D.Fragment, null, /* @__PURE__ */ D.createElement("path", { d: "M224.47,31.52a11.87,11.87,0,0,0-11.82-3L20.74,86.67a12,12,0,0,0-1.91,22.38L105,151l41.92,86.15A11.88,11.88,0,0,0,157.74,244c.34,0,.69,0,1,0a11.89,11.89,0,0,0,10.52-8.63l58.21-192,0-.08A11.85,11.85,0,0,0,224.47,31.52Zm-4.62,9.54-58.23,192a4,4,0,0,1-7.48.59l-41.3-84.86,50-50a4,4,0,1,0-5.66-5.66l-50,50-84.9-41.31a3.88,3.88,0,0,1-2.27-4,3.93,3.93,0,0,1,3-3.54L214.9,36.16A3.93,3.93,0,0,1,216,36a4,4,0,0,1,2.79,1.19A3.93,3.93,0,0,1,219.85,41.06Z" }))
  ]
]), eg = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ D.createElement(D.Fragment, null, /* @__PURE__ */ D.createElement("path", { d: "M218.12,209.56l-61-95.8,59.72-65.69a12,12,0,0,0-17.76-16.14L143.81,92.77,106.12,33.56A12,12,0,0,0,96,28H48A12,12,0,0,0,37.88,46.44l61,95.8L39.12,207.93a12,12,0,1,0,17.76,16.14l55.31-60.84,37.69,59.21A12,12,0,0,0,160,228h48a12,12,0,0,0,10.12-18.44ZM166.59,204,69.86,52H89.41l96.73,152Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ D.createElement(D.Fragment, null, /* @__PURE__ */ D.createElement("path", { d: "M208,216H160L48,40H96Z", opacity: "0.2" }), /* @__PURE__ */ D.createElement("path", { d: "M214.75,211.71l-62.6-98.38,61.77-67.95a8,8,0,0,0-11.84-10.76L143.24,99.34,102.75,35.71A8,8,0,0,0,96,32H48a8,8,0,0,0-6.75,12.3l62.6,98.37-61.77,68a8,8,0,1,0,11.84,10.76l58.84-64.72,40.49,63.63A8,8,0,0,0,160,224h48a8,8,0,0,0,6.75-12.29ZM164.39,208,62.57,48h29L193.43,208Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ D.createElement(D.Fragment, null, /* @__PURE__ */ D.createElement("path", { d: "M215,219.85a8,8,0,0,1-7,4.15H160a8,8,0,0,1-6.75-3.71l-40.49-63.63L53.92,221.38a8,8,0,0,1-11.84-10.76l61.77-68L41.25,44.3A8,8,0,0,1,48,32H96a8,8,0,0,1,6.75,3.71l40.49,63.63,58.84-64.72a8,8,0,0,1,11.84,10.76l-61.77,67.95,62.6,98.38A8,8,0,0,1,215,219.85Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ D.createElement(D.Fragment, null, /* @__PURE__ */ D.createElement("path", { d: "M213.06,212.78l-63.42-99.66L212.44,44A6,6,0,1,0,203.56,36L143,102.62l-41.9-65.84A6,6,0,0,0,96,34H48a6,6,0,0,0-5.06,9.22l63.42,99.66L43.56,212A6,6,0,0,0,52.44,220L113,153.38l41.9,65.84A6,6,0,0,0,160,222h48a6,6,0,0,0,5.06-9.22ZM163.29,210,58.93,46H92.71L197.07,210Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ D.createElement(D.Fragment, null, /* @__PURE__ */ D.createElement("path", { d: "M214.75,211.71l-62.6-98.38,61.77-67.95a8,8,0,0,0-11.84-10.76L143.24,99.34,102.75,35.71A8,8,0,0,0,96,32H48a8,8,0,0,0-6.75,12.3l62.6,98.37-61.77,68a8,8,0,1,0,11.84,10.76l58.84-64.72,40.49,63.63A8,8,0,0,0,160,224h48a8,8,0,0,0,6.75-12.29ZM164.39,208,62.57,48h29L193.43,208Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ D.createElement(D.Fragment, null, /* @__PURE__ */ D.createElement("path", { d: "M211.37,213.85,147.13,112.9,211,42.69A4,4,0,0,0,205,37.31L142.68,105.9,99.38,37.85A4,4,0,0,0,96,36H48a4,4,0,0,0-3.37,6.15L108.87,143.1,45,213.31A4,4,0,1,0,51,218.69l62.36-68.59,43.3,68.05A4,4,0,0,0,160,220h48a4,4,0,0,0,3.37-6.15ZM162.2,212,55.29,44H93.8L200.71,212Z" }))
  ]
]), tg = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ D.createElement(D.Fragment, null, /* @__PURE__ */ D.createElement("path", { d: "M170.49,117.91l-56-36A12,12,0,0,0,96,92v72a12,12,0,0,0,18.49,10.09l56-36a12,12,0,0,0,0-20.18ZM120,142V114l21.81,14Zm118.21-73.5a28.05,28.05,0,0,0-16.93-19.14C186.4,35.91,131.29,36,128,36s-58.4-.09-93.28,13.38A28.05,28.05,0,0,0,17.79,68.52C15.15,78.72,12,97.32,12,128s3.15,49.28,5.79,59.48a28.05,28.05,0,0,0,16.93,19.14C68.21,219.55,120.36,220,127.37,220h1.26c7,0,59.16-.45,92.65-13.38a28.05,28.05,0,0,0,16.93-19.14c2.64-10.2,5.79-28.8,5.79-59.48S240.85,78.72,238.21,68.52ZM215,181.46a4,4,0,0,1-2.34,2.77C182.78,195.76,132.27,196,128.32,196h-.39c-.53,0-53.64.17-84.56-11.77A4,4,0,0,1,41,181.46c-1.88-7.24-5-23.82-5-53.46s3.15-46.22,5-53.46a4,4,0,0,1,2.34-2.77C74.29,59.83,127.39,60,127.92,60h.15c.54,0,53.64-.17,84.56,11.77A4,4,0,0,1,215,74.54c1.88,7.24,5,23.82,5,53.46S216.85,174.22,215,181.46Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ D.createElement(D.Fragment, null, /* @__PURE__ */ D.createElement(
      "path",
      {
        d: "M226.59,71.53a16,16,0,0,0-9.63-11C183.48,47.65,128,48,128,48s-55.48-.35-89,12.58a16,16,0,0,0-9.63,11C27.07,80.54,24,98.09,24,128s3.07,47.46,5.41,56.47A16,16,0,0,0,39,195.42C72.52,208.35,128,208,128,208s55.48.35,89-12.58a16,16,0,0,0,9.63-10.95c2.34-9,5.41-26.56,5.41-56.47S228.93,80.54,226.59,71.53ZM112,160V96l48,32Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ D.createElement("path", { d: "M164.44,121.34l-48-32A8,8,0,0,0,104,96v64a8,8,0,0,0,12.44,6.66l48-32a8,8,0,0,0,0-13.32ZM120,145.05V111l25.58,17ZM234.33,69.52a24,24,0,0,0-14.49-16.4C185.56,39.88,131,40,128,40s-57.56-.12-91.84,13.12a24,24,0,0,0-14.49,16.4C19.08,79.5,16,97.74,16,128s3.08,48.5,5.67,58.48a24,24,0,0,0,14.49,16.41C69,215.56,120.4,216,127.34,216h1.32c6.94,0,58.37-.44,91.18-13.11a24,24,0,0,0,14.49-16.41c2.59-10,5.67-28.22,5.67-58.48S236.92,79.5,234.33,69.52Zm-15.49,113a8,8,0,0,1-4.77,5.49c-31.65,12.22-85.48,12-86.12,12s-54.37.18-86-12a8,8,0,0,1-4.77-5.49C34.8,173.39,32,156.57,32,128s2.8-45.39,5.16-54.47A8,8,0,0,1,41.93,68C73.58,55.82,127.4,56,128.05,56s54.37-.18,86,12a8,8,0,0,1,4.77,5.49C221.2,82.61,224,99.43,224,128S221.2,173.39,218.84,182.47Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ D.createElement(D.Fragment, null, /* @__PURE__ */ D.createElement("path", { d: "M234.33,69.52a24,24,0,0,0-14.49-16.4C185.56,39.88,131,40,128,40s-57.56-.12-91.84,13.12a24,24,0,0,0-14.49,16.4C19.08,79.5,16,97.74,16,128s3.08,48.5,5.67,58.48a24,24,0,0,0,14.49,16.41C69,215.56,120.4,216,127.34,216h1.32c6.94,0,58.37-.44,91.18-13.11a24,24,0,0,0,14.49-16.41c2.59-10,5.67-28.22,5.67-58.48S236.92,79.5,234.33,69.52Zm-73.74,65-40,28A8,8,0,0,1,108,156V100a8,8,0,0,1,12.59-6.55l40,28a8,8,0,0,1,0,13.1Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ D.createElement(D.Fragment, null, /* @__PURE__ */ D.createElement("path", { d: "M163.33,123l-48-32A6,6,0,0,0,106,96v64a6,6,0,0,0,9.33,5l48-32a6,6,0,0,0,0-10ZM118,148.79V107.21L149.18,128ZM232.4,70a22,22,0,0,0-13.28-15C185,41.79,130.27,42,128,42s-57-.21-91.16,13A22,22,0,0,0,23.6,70C21.05,79.89,18,98,18,128s3.05,48.11,5.6,58a22,22,0,0,0,13.28,15C71,214.21,125.72,214,128,214h.71c6.91,0,58-.44,90.45-13a22,22,0,0,0,13.28-15c2.55-9.87,5.6-27.93,5.6-58S235,79.89,232.4,70ZM220.78,183a10,10,0,0,1-6,6.86C182.78,202.19,128.58,202,128,202s-54.71.2-86.75-12.17a10,10,0,0,1-6-6.86C32.84,173.78,30,156.78,30,128s2.84-45.78,5.22-55a10,10,0,0,1,6-6.86C72.06,54.26,123.53,54,127.76,54H128c.54,0,54.71-.2,86.75,12.17a10,10,0,0,1,6,6.86c2.38,9.19,5.22,26.19,5.22,55S223.16,173.78,220.78,183Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ D.createElement(D.Fragment, null, /* @__PURE__ */ D.createElement("path", { d: "M164.44,121.34l-48-32A8,8,0,0,0,104,96v64a8,8,0,0,0,12.44,6.66l48-32a8,8,0,0,0,0-13.32ZM120,145.05V111l25.58,17ZM234.33,69.52a24,24,0,0,0-14.49-16.4C185.56,39.88,131,40,128,40s-57.56-.12-91.84,13.12a24,24,0,0,0-14.49,16.4C19.08,79.5,16,97.74,16,128s3.08,48.5,5.67,58.48a24,24,0,0,0,14.49,16.41C69,215.56,120.4,216,127.34,216h1.32c6.94,0,58.37-.44,91.18-13.11a24,24,0,0,0,14.49-16.41c2.59-10,5.67-28.22,5.67-58.48S236.92,79.5,234.33,69.52Zm-15.49,113a8,8,0,0,1-4.77,5.49c-31.65,12.22-85.48,12-86,12H128c-.54,0-54.33.2-86-12a8,8,0,0,1-4.77-5.49C34.8,173.39,32,156.57,32,128s2.8-45.39,5.16-54.47A8,8,0,0,1,41.93,68c30.52-11.79,81.66-12,85.85-12h.27c.54,0,54.38-.18,86,12a8,8,0,0,1,4.77,5.49C221.2,82.61,224,99.43,224,128S221.2,173.39,218.84,182.47Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ D.createElement(D.Fragment, null, /* @__PURE__ */ D.createElement("path", { d: "M162.22,124.67l-48-32A4,4,0,0,0,108,96v64a4,4,0,0,0,2.11,3.53,4,4,0,0,0,4.11-.2l48-32a4,4,0,0,0,0-6.66ZM116,152.53V103.47L152.79,128Zm114.46-82A20,20,0,0,0,218.4,56.85C184.6,43.79,130.27,44,128,44S71.4,43.79,37.6,56.85A20,20,0,0,0,25.54,70.52C23,80.27,20,98.16,20,128s3,47.73,5.54,57.48A20,20,0,0,0,37.6,199.15C71.4,212.21,125.73,212,128,212h.71c6.89,0,57.58-.43,89.72-12.85a20,20,0,0,0,12.06-13.67C233,175.72,236,157.84,236,128S233,80.27,230.46,70.52Zm-7.74,113a12,12,0,0,1-7.21,8.22C183.14,204.19,128.57,204,128,204s-55.11.19-87.48-12.31a12,12,0,0,1-7.21-8.22C30.87,174.17,28,157,28,128s2.87-46.17,5.28-55.47a12,12,0,0,1,7.21-8.22C72.86,51.81,127.43,52,128,52s55.11-.2,87.48,12.31a12,12,0,0,1,7.21,8.22C225.13,81.83,228,99,228,128S225.13,174.17,222.72,183.47Z" }))
  ]
]), ng = br({
  color: "currentColor",
  size: "1em",
  weight: "regular",
  mirrored: !1
});
var rg = Object.defineProperty, Io = Object.getOwnPropertySymbols, cd = Object.prototype.hasOwnProperty, ud = Object.prototype.propertyIsEnumerable, Ul = (e, t, n) => t in e ? rg(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Kl = (e, t) => {
  for (var n in t || (t = {}))
    cd.call(t, n) && Ul(e, n, t[n]);
  if (Io)
    for (var n of Io(t))
      ud.call(t, n) && Ul(e, n, t[n]);
  return e;
}, Gl = (e, t) => {
  var n = {};
  for (var r in e)
    cd.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && Io)
    for (var r of Io(e))
      t.indexOf(r) < 0 && ud.call(e, r) && (n[r] = e[r]);
  return n;
};
const dd = fn((e, t) => {
  const n = e, {
    alt: r,
    color: a,
    size: o,
    weight: i,
    mirrored: s,
    children: l,
    weights: c
  } = n, d = Gl(n, [
    "alt",
    "color",
    "size",
    "weight",
    "mirrored",
    "children",
    "weights"
  ]), f = Nt(ng), {
    color: v = "currentColor",
    size: g,
    weight: p = "regular",
    mirrored: h = !1
  } = f, m = Gl(f, [
    "color",
    "size",
    "weight",
    "mirrored"
  ]);
  return /* @__PURE__ */ D.createElement(
    "svg",
    Kl(Kl({
      ref: t,
      xmlns: "http://www.w3.org/2000/svg",
      width: o ?? g,
      height: o ?? g,
      fill: a ?? v,
      viewBox: "0 0 256 256",
      transform: s || h ? "scale(-1, 1)" : void 0
    }, m), d),
    !!r && /* @__PURE__ */ D.createElement("title", null, r),
    l,
    c.get(i ?? p)
  );
});
dd.displayName = "IconBase";
const Ko = dd;
var ag = Object.defineProperty, og = Object.defineProperties, ig = Object.getOwnPropertyDescriptors, ql = Object.getOwnPropertySymbols, sg = Object.prototype.hasOwnProperty, lg = Object.prototype.propertyIsEnumerable, Xl = (e, t, n) => t in e ? ag(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, cg = (e, t) => {
  for (var n in t || (t = {}))
    sg.call(t, n) && Xl(e, n, t[n]);
  if (ql)
    for (var n of ql(t))
      lg.call(t, n) && Xl(e, n, t[n]);
  return e;
}, ug = (e, t) => og(e, ig(t));
const fd = fn((e, t) => /* @__PURE__ */ D.createElement(Ko, ug(cg({ ref: t }, e), { weights: Qm })));
fd.displayName = "LinkedinLogo";
var dg = Object.defineProperty, fg = Object.defineProperties, vg = Object.getOwnPropertyDescriptors, Zl = Object.getOwnPropertySymbols, mg = Object.prototype.hasOwnProperty, gg = Object.prototype.propertyIsEnumerable, Yl = (e, t, n) => t in e ? dg(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, pg = (e, t) => {
  for (var n in t || (t = {}))
    mg.call(t, n) && Yl(e, n, t[n]);
  if (Zl)
    for (var n of Zl(t))
      gg.call(t, n) && Yl(e, n, t[n]);
  return e;
}, hg = (e, t) => fg(e, vg(t));
const vd = fn((e, t) => /* @__PURE__ */ D.createElement(Ko, hg(pg({ ref: t }, e), { weights: Jm })));
vd.displayName = "PaperPlaneTilt";
var bg = Object.defineProperty, yg = Object.defineProperties, Cg = Object.getOwnPropertyDescriptors, Ql = Object.getOwnPropertySymbols, Sg = Object.prototype.hasOwnProperty, wg = Object.prototype.propertyIsEnumerable, Jl = (e, t, n) => t in e ? bg(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Eg = (e, t) => {
  for (var n in t || (t = {}))
    Sg.call(t, n) && Jl(e, n, t[n]);
  if (Ql)
    for (var n of Ql(t))
      wg.call(t, n) && Jl(e, n, t[n]);
  return e;
}, xg = (e, t) => yg(e, Cg(t));
const md = fn((e, t) => /* @__PURE__ */ D.createElement(Ko, xg(Eg({ ref: t }, e), { weights: eg })));
md.displayName = "XLogo";
var $g = Object.defineProperty, Og = Object.defineProperties, Rg = Object.getOwnPropertyDescriptors, ec = Object.getOwnPropertySymbols, Pg = Object.prototype.hasOwnProperty, _g = Object.prototype.propertyIsEnumerable, tc = (e, t, n) => t in e ? $g(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Tg = (e, t) => {
  for (var n in t || (t = {}))
    Pg.call(t, n) && tc(e, n, t[n]);
  if (ec)
    for (var n of ec(t))
      _g.call(t, n) && tc(e, n, t[n]);
  return e;
}, Ig = (e, t) => Og(e, Rg(t));
const gd = fn((e, t) => /* @__PURE__ */ D.createElement(Ko, Ig(Tg({ ref: t }, e), { weights: tg })));
gd.displayName = "YoutubeLogo";
var pd = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function n() {
      for (var o = "", i = 0; i < arguments.length; i++) {
        var s = arguments[i];
        s && (o = a(o, r(s)));
      }
      return o;
    }
    function r(o) {
      if (typeof o == "string" || typeof o == "number")
        return o;
      if (typeof o != "object")
        return "";
      if (Array.isArray(o))
        return n.apply(null, o);
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
    e.exports ? (n.default = n, e.exports = n) : window.classNames = n;
  })();
})(pd);
var Ng = pd.exports;
const Y = /* @__PURE__ */ ld(Ng);
function me() {
  return me = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, me.apply(null, arguments);
}
var Qi = { exports: {} }, dt = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nc;
function Mg() {
  if (nc) return dt;
  nc = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), i = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), p;
  p = Symbol.for("react.module.reference");
  function h(m) {
    if (typeof m == "object" && m !== null) {
      var S = m.$$typeof;
      switch (S) {
        case e:
          switch (m = m.type, m) {
            case n:
            case a:
            case r:
            case c:
            case d:
              return m;
            default:
              switch (m = m && m.$$typeof, m) {
                case s:
                case i:
                case l:
                case v:
                case f:
                case o:
                  return m;
                default:
                  return S;
              }
          }
        case t:
          return S;
      }
    }
  }
  return dt.ContextConsumer = i, dt.ContextProvider = o, dt.Element = e, dt.ForwardRef = l, dt.Fragment = n, dt.Lazy = v, dt.Memo = f, dt.Portal = t, dt.Profiler = a, dt.StrictMode = r, dt.Suspense = c, dt.SuspenseList = d, dt.isAsyncMode = function() {
    return !1;
  }, dt.isConcurrentMode = function() {
    return !1;
  }, dt.isContextConsumer = function(m) {
    return h(m) === i;
  }, dt.isContextProvider = function(m) {
    return h(m) === o;
  }, dt.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === e;
  }, dt.isForwardRef = function(m) {
    return h(m) === l;
  }, dt.isFragment = function(m) {
    return h(m) === n;
  }, dt.isLazy = function(m) {
    return h(m) === v;
  }, dt.isMemo = function(m) {
    return h(m) === f;
  }, dt.isPortal = function(m) {
    return h(m) === t;
  }, dt.isProfiler = function(m) {
    return h(m) === a;
  }, dt.isStrictMode = function(m) {
    return h(m) === r;
  }, dt.isSuspense = function(m) {
    return h(m) === c;
  }, dt.isSuspenseList = function(m) {
    return h(m) === d;
  }, dt.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === n || m === a || m === r || m === c || m === d || m === g || typeof m == "object" && m !== null && (m.$$typeof === v || m.$$typeof === f || m.$$typeof === o || m.$$typeof === i || m.$$typeof === l || m.$$typeof === p || m.getModuleId !== void 0);
  }, dt.typeOf = h, dt;
}
var ft = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rc;
function Ag() {
  return rc || (rc = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), i = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), p = !1, h = !1, m = !1, S = !1, b = !1, y;
    y = Symbol.for("react.module.reference");
    function w(H) {
      return !!(typeof H == "string" || typeof H == "function" || H === n || H === a || b || H === r || H === c || H === d || S || H === g || p || h || m || typeof H == "object" && H !== null && (H.$$typeof === v || H.$$typeof === f || H.$$typeof === o || H.$$typeof === i || H.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      H.$$typeof === y || H.getModuleId !== void 0));
    }
    function C(H) {
      if (typeof H == "object" && H !== null) {
        var ne = H.$$typeof;
        switch (ne) {
          case e:
            var ve = H.type;
            switch (ve) {
              case n:
              case a:
              case r:
              case c:
              case d:
                return ve;
              default:
                var $e = ve && ve.$$typeof;
                switch ($e) {
                  case s:
                  case i:
                  case l:
                  case v:
                  case f:
                  case o:
                    return $e;
                  default:
                    return ne;
                }
            }
          case t:
            return ne;
        }
      }
    }
    var O = i, E = o, x = e, R = l, T = n, M = v, j = f, I = t, _ = a, k = r, N = c, P = d, $ = !1, F = !1;
    function L(H) {
      return $ || ($ = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function V(H) {
      return F || (F = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function W(H) {
      return C(H) === i;
    }
    function U(H) {
      return C(H) === o;
    }
    function G(H) {
      return typeof H == "object" && H !== null && H.$$typeof === e;
    }
    function Q(H) {
      return C(H) === l;
    }
    function q(H) {
      return C(H) === n;
    }
    function Z(H) {
      return C(H) === v;
    }
    function re(H) {
      return C(H) === f;
    }
    function ae(H) {
      return C(H) === t;
    }
    function ue(H) {
      return C(H) === a;
    }
    function de(H) {
      return C(H) === r;
    }
    function ce(H) {
      return C(H) === c;
    }
    function ge(H) {
      return C(H) === d;
    }
    ft.ContextConsumer = O, ft.ContextProvider = E, ft.Element = x, ft.ForwardRef = R, ft.Fragment = T, ft.Lazy = M, ft.Memo = j, ft.Portal = I, ft.Profiler = _, ft.StrictMode = k, ft.Suspense = N, ft.SuspenseList = P, ft.isAsyncMode = L, ft.isConcurrentMode = V, ft.isContextConsumer = W, ft.isContextProvider = U, ft.isElement = G, ft.isForwardRef = Q, ft.isFragment = q, ft.isLazy = Z, ft.isMemo = re, ft.isPortal = ae, ft.isProfiler = ue, ft.isStrictMode = de, ft.isSuspense = ce, ft.isSuspenseList = ge, ft.isValidElementType = w, ft.typeOf = C;
  }()), ft;
}
process.env.NODE_ENV === "production" ? Qi.exports = Mg() : Qi.exports = Ag();
var ya = Qi.exports;
function rr(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = [];
  return D.Children.forEach(e, function(r) {
    r == null && !t.keepEmpty || (Array.isArray(r) ? n = n.concat(rr(r)) : ya.isFragment(r) && r.props ? n = n.concat(rr(r.props.children, t)) : n.push(r));
  }), n;
}
var Ji = {}, tl = [], Lg = function(t) {
  tl.push(t);
};
function Kn(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var n = tl.reduce(function(r, a) {
      return a(r ?? "", "warning");
    }, t);
    n && console.error("Warning: ".concat(n));
  }
}
function jg(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var n = tl.reduce(function(r, a) {
      return a(r ?? "", "note");
    }, t);
    n && console.warn("Note: ".concat(n));
  }
}
function hd() {
  Ji = {};
}
function bd(e, t, n) {
  !t && !Ji[n] && (e(!1, n), Ji[n] = !0);
}
function ct(e, t) {
  bd(Kn, e, t);
}
function Fg(e, t) {
  bd(jg, e, t);
}
ct.preMessage = Lg;
ct.resetWarned = hd;
ct.noteOnce = Fg;
function ke(e) {
  "@babel/helpers - typeof";
  return ke = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ke(e);
}
function Dg(e, t) {
  if (ke(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (ke(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function yd(e) {
  var t = Dg(e, "string");
  return ke(t) == "symbol" ? t : t + "";
}
function z(e, t, n) {
  return (t = yd(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function ac(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function B(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ac(Object(n), !0).forEach(function(r) {
      z(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ac(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function xa(e) {
  return e instanceof HTMLElement || e instanceof SVGElement;
}
function zg(e) {
  return e && ke(e) === "object" && xa(e.nativeElement) ? e.nativeElement : xa(e) ? e : null;
}
function yo(e) {
  var t = zg(e);
  if (t)
    return t;
  if (e instanceof D.Component) {
    var n;
    return (n = To.findDOMNode) === null || n === void 0 ? void 0 : n.call(To, e);
  }
  return null;
}
function Go(e, t, n) {
  var r = u.useRef({});
  return (!("value" in r.current) || n(r.current.condition, t)) && (r.current.value = e(), r.current.condition = t), r.current.value;
}
var nl = function(t, n) {
  typeof t == "function" ? t(n) : ke(t) === "object" && t && "current" in t && (t.current = n);
}, An = function() {
  for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  var a = n.filter(Boolean);
  return a.length <= 1 ? a[0] : function(o) {
    n.forEach(function(i) {
      nl(i, o);
    });
  };
}, Qr = function() {
  for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  return Go(function() {
    return An.apply(void 0, n);
  }, n, function(a, o) {
    return a.length !== o.length || a.every(function(i, s) {
      return i !== o[s];
    });
  });
}, yr = function(t) {
  var n, r, a = ya.isMemo(t) ? t.type.type : t.type;
  return !(typeof a == "function" && !((n = a.prototype) !== null && n !== void 0 && n.render) && a.$$typeof !== ya.ForwardRef || typeof t == "function" && !((r = t.prototype) !== null && r !== void 0 && r.render) && t.$$typeof !== ya.ForwardRef);
};
function oc(e) {
  return /* @__PURE__ */ Vm(e) && !ya.isFragment(e);
}
Number(zm.split(".")[0]) >= 19;
var es = /* @__PURE__ */ u.createContext(null);
function Vg(e) {
  var t = e.children, n = e.onBatchResize, r = u.useRef(0), a = u.useRef([]), o = u.useContext(es), i = u.useCallback(function(s, l, c) {
    r.current += 1;
    var d = r.current;
    a.current.push({
      size: s,
      element: l,
      data: c
    }), Promise.resolve().then(function() {
      d === r.current && (n == null || n(a.current), a.current = []);
    }), o == null || o(s, l, c);
  }, [n, o]);
  return /* @__PURE__ */ u.createElement(es.Provider, {
    value: i
  }, t);
}
var Cd = function() {
  if (typeof Map < "u")
    return Map;
  function e(t, n) {
    var r = -1;
    return t.some(function(a, o) {
      return a[0] === n ? (r = o, !0) : !1;
    }), r;
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
      }), t.prototype.get = function(n) {
        var r = e(this.__entries__, n), a = this.__entries__[r];
        return a && a[1];
      }, t.prototype.set = function(n, r) {
        var a = e(this.__entries__, n);
        ~a ? this.__entries__[a][1] = r : this.__entries__.push([n, r]);
      }, t.prototype.delete = function(n) {
        var r = this.__entries__, a = e(r, n);
        ~a && r.splice(a, 1);
      }, t.prototype.has = function(n) {
        return !!~e(this.__entries__, n);
      }, t.prototype.clear = function() {
        this.__entries__.splice(0);
      }, t.prototype.forEach = function(n, r) {
        r === void 0 && (r = null);
        for (var a = 0, o = this.__entries__; a < o.length; a++) {
          var i = o[a];
          n.call(r, i[1], i[0]);
        }
      }, t;
    }()
  );
}(), ts = typeof window < "u" && typeof document < "u" && window.document === document, No = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), Bg = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(No) : function(e) {
    return setTimeout(function() {
      return e(Date.now());
    }, 1e3 / 60);
  };
}(), kg = 2;
function Hg(e, t) {
  var n = !1, r = !1, a = 0;
  function o() {
    n && (n = !1, e()), r && s();
  }
  function i() {
    Bg(o);
  }
  function s() {
    var l = Date.now();
    if (n) {
      if (l - a < kg)
        return;
      r = !0;
    } else
      n = !0, r = !1, setTimeout(i, t);
    a = l;
  }
  return s;
}
var Wg = 20, Ug = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], Kg = typeof MutationObserver < "u", Gg = (
  /** @class */
  function() {
    function e() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = Hg(this.refresh.bind(this), Wg);
    }
    return e.prototype.addObserver = function(t) {
      ~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_();
    }, e.prototype.removeObserver = function(t) {
      var n = this.observers_, r = n.indexOf(t);
      ~r && n.splice(r, 1), !n.length && this.connected_ && this.disconnect_();
    }, e.prototype.refresh = function() {
      var t = this.updateObservers_();
      t && this.refresh();
    }, e.prototype.updateObservers_ = function() {
      var t = this.observers_.filter(function(n) {
        return n.gatherActive(), n.hasActive();
      });
      return t.forEach(function(n) {
        return n.broadcastActive();
      }), t.length > 0;
    }, e.prototype.connect_ = function() {
      !ts || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), Kg ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, e.prototype.disconnect_ = function() {
      !ts || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, e.prototype.onTransitionEnd_ = function(t) {
      var n = t.propertyName, r = n === void 0 ? "" : n, a = Ug.some(function(o) {
        return !!~r.indexOf(o);
      });
      a && this.refresh();
    }, e.getInstance = function() {
      return this.instance_ || (this.instance_ = new e()), this.instance_;
    }, e.instance_ = null, e;
  }()
), Sd = function(e, t) {
  for (var n = 0, r = Object.keys(t); n < r.length; n++) {
    var a = r[n];
    Object.defineProperty(e, a, {
      value: t[a],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return e;
}, Hr = function(e) {
  var t = e && e.ownerDocument && e.ownerDocument.defaultView;
  return t || No;
}, wd = qo(0, 0, 0, 0);
function Mo(e) {
  return parseFloat(e) || 0;
}
function ic(e) {
  for (var t = [], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  return t.reduce(function(r, a) {
    var o = e["border-" + a + "-width"];
    return r + Mo(o);
  }, 0);
}
function qg(e) {
  for (var t = ["top", "right", "bottom", "left"], n = {}, r = 0, a = t; r < a.length; r++) {
    var o = a[r], i = e["padding-" + o];
    n[o] = Mo(i);
  }
  return n;
}
function Xg(e) {
  var t = e.getBBox();
  return qo(0, 0, t.width, t.height);
}
function Zg(e) {
  var t = e.clientWidth, n = e.clientHeight;
  if (!t && !n)
    return wd;
  var r = Hr(e).getComputedStyle(e), a = qg(r), o = a.left + a.right, i = a.top + a.bottom, s = Mo(r.width), l = Mo(r.height);
  if (r.boxSizing === "border-box" && (Math.round(s + o) !== t && (s -= ic(r, "left", "right") + o), Math.round(l + i) !== n && (l -= ic(r, "top", "bottom") + i)), !Qg(e)) {
    var c = Math.round(s + o) - t, d = Math.round(l + i) - n;
    Math.abs(c) !== 1 && (s -= c), Math.abs(d) !== 1 && (l -= d);
  }
  return qo(a.left, a.top, s, l);
}
var Yg = /* @__PURE__ */ function() {
  return typeof SVGGraphicsElement < "u" ? function(e) {
    return e instanceof Hr(e).SVGGraphicsElement;
  } : function(e) {
    return e instanceof Hr(e).SVGElement && typeof e.getBBox == "function";
  };
}();
function Qg(e) {
  return e === Hr(e).document.documentElement;
}
function Jg(e) {
  return ts ? Yg(e) ? Xg(e) : Zg(e) : wd;
}
function ep(e) {
  var t = e.x, n = e.y, r = e.width, a = e.height, o = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, i = Object.create(o.prototype);
  return Sd(i, {
    x: t,
    y: n,
    width: r,
    height: a,
    top: n,
    right: t + r,
    bottom: a + n,
    left: t
  }), i;
}
function qo(e, t, n, r) {
  return { x: e, y: t, width: n, height: r };
}
var tp = (
  /** @class */
  function() {
    function e(t) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = qo(0, 0, 0, 0), this.target = t;
    }
    return e.prototype.isActive = function() {
      var t = Jg(this.target);
      return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight;
    }, e.prototype.broadcastRect = function() {
      var t = this.contentRect_;
      return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t;
    }, e;
  }()
), np = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(t, n) {
      var r = ep(n);
      Sd(this, { target: t, contentRect: r });
    }
    return e;
  }()
), rp = (
  /** @class */
  function() {
    function e(t, n, r) {
      if (this.activeObservations_ = [], this.observations_ = new Cd(), typeof t != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = t, this.controller_ = n, this.callbackCtx_ = r;
    }
    return e.prototype.observe = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof Hr(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var n = this.observations_;
        n.has(t) || (n.set(t, new tp(t)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, e.prototype.unobserve = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof Hr(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var n = this.observations_;
        n.has(t) && (n.delete(t), n.size || this.controller_.removeObserver(this));
      }
    }, e.prototype.disconnect = function() {
      this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
    }, e.prototype.gatherActive = function() {
      var t = this;
      this.clearActive(), this.observations_.forEach(function(n) {
        n.isActive() && t.activeObservations_.push(n);
      });
    }, e.prototype.broadcastActive = function() {
      if (this.hasActive()) {
        var t = this.callbackCtx_, n = this.activeObservations_.map(function(r) {
          return new np(r.target, r.broadcastRect());
        });
        this.callback_.call(t, n, t), this.clearActive();
      }
    }, e.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, e.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, e;
  }()
), Ed = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new Cd(), xd = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(t) {
      if (!(this instanceof e))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var n = Gg.getInstance(), r = new rp(t, n, this);
      Ed.set(this, r);
    }
    return e;
  }()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(e) {
  xd.prototype[e] = function() {
    var t;
    return (t = Ed.get(this))[e].apply(t, arguments);
  };
});
var ap = function() {
  return typeof No.ResizeObserver < "u" ? No.ResizeObserver : xd;
}(), Hn = /* @__PURE__ */ new Map();
function $d(e) {
  e.forEach(function(t) {
    var n, r = t.target;
    (n = Hn.get(r)) === null || n === void 0 || n.forEach(function(a) {
      return a(r);
    });
  });
}
var Od = new ap($d);
process.env.NODE_ENV;
process.env.NODE_ENV;
function op(e, t) {
  Hn.has(e) || (Hn.set(e, /* @__PURE__ */ new Set()), Od.observe(e)), Hn.get(e).add(t);
}
function ip(e, t) {
  Hn.has(e) && (Hn.get(e).delete(t), Hn.get(e).size || (Od.unobserve(e), Hn.delete(e)));
}
function kt(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function sc(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, yd(r.key), r);
  }
}
function Ht(e, t, n) {
  return t && sc(e.prototype, t), n && sc(e, n), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function $a(e, t) {
  return $a = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, $a(e, t);
}
function or(e, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(e, "prototype", {
    writable: !1
  }), t && $a(e, t);
}
function Oa(e) {
  return Oa = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, Oa(e);
}
function rl() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (rl = function() {
    return !!e;
  })();
}
function tt(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function sp(e, t) {
  if (t && (ke(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return tt(e);
}
function ir(e) {
  var t = rl();
  return function() {
    var n, r = Oa(e);
    if (t) {
      var a = Oa(this).constructor;
      n = Reflect.construct(r, arguments, a);
    } else n = r.apply(this, arguments);
    return sp(this, n);
  };
}
var lp = /* @__PURE__ */ function(e) {
  or(n, e);
  var t = ir(n);
  function n() {
    return kt(this, n), t.apply(this, arguments);
  }
  return Ht(n, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), n;
}(u.Component);
function cp(e, t) {
  var n = e.children, r = e.disabled, a = u.useRef(null), o = u.useRef(null), i = u.useContext(es), s = typeof n == "function", l = s ? n(a) : n, c = u.useRef({
    width: -1,
    height: -1,
    offsetWidth: -1,
    offsetHeight: -1
  }), d = !s && /* @__PURE__ */ u.isValidElement(l) && yr(l), f = d ? l.ref : null, v = Qr(f, a), g = function() {
    var S;
    return yo(a.current) || // Support `nativeElement` format
    (a.current && ke(a.current) === "object" ? yo((S = a.current) === null || S === void 0 ? void 0 : S.nativeElement) : null) || yo(o.current);
  };
  u.useImperativeHandle(t, function() {
    return g();
  });
  var p = u.useRef(e);
  p.current = e;
  var h = u.useCallback(function(m) {
    var S = p.current, b = S.onResize, y = S.data, w = m.getBoundingClientRect(), C = w.width, O = w.height, E = m.offsetWidth, x = m.offsetHeight, R = Math.floor(C), T = Math.floor(O);
    if (c.current.width !== R || c.current.height !== T || c.current.offsetWidth !== E || c.current.offsetHeight !== x) {
      var M = {
        width: R,
        height: T,
        offsetWidth: E,
        offsetHeight: x
      };
      c.current = M;
      var j = E === Math.round(C) ? C : E, I = x === Math.round(O) ? O : x, _ = B(B({}, M), {}, {
        offsetWidth: j,
        offsetHeight: I
      });
      i == null || i(_, m, y), b && Promise.resolve().then(function() {
        b(_, m);
      });
    }
  }, []);
  return u.useEffect(function() {
    var m = g();
    return m && !r && op(m, h), function() {
      return ip(m, h);
    };
  }, [a.current, r]), /* @__PURE__ */ u.createElement(lp, {
    ref: o
  }, d ? /* @__PURE__ */ u.cloneElement(l, {
    ref: v
  }) : l);
}
var Rd = /* @__PURE__ */ u.forwardRef(cp);
process.env.NODE_ENV !== "production" && (Rd.displayName = "SingleObserver");
var up = "rc-observer-key";
function dp(e, t) {
  var n = e.children, r = typeof n == "function" ? [n] : rr(n);
  return process.env.NODE_ENV !== "production" && (r.length > 1 ? Kn(!1, "Find more than one child node with `children` in ResizeObserver. Please use ResizeObserver.Collection instead.") : r.length === 0 && Kn(!1, "`children` of ResizeObserver is empty. Nothing is in observe.")), r.map(function(a, o) {
    var i = (a == null ? void 0 : a.key) || "".concat(up, "-").concat(o);
    return /* @__PURE__ */ u.createElement(Rd, me({}, e, {
      key: i,
      ref: o === 0 ? t : void 0
    }), a);
  });
}
var wn = /* @__PURE__ */ u.forwardRef(dp);
process.env.NODE_ENV !== "production" && (wn.displayName = "ResizeObserver");
wn.Collection = Vg;
function vn(e, t) {
  var n = Object.assign({}, e);
  return Array.isArray(t) && t.forEach(function(r) {
    delete n[r];
  }), n;
}
function ns(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function fp(e) {
  if (Array.isArray(e)) return ns(e);
}
function Pd(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function al(e, t) {
  if (e) {
    if (typeof e == "string") return ns(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ns(e, t) : void 0;
  }
}
function vp() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Pe(e) {
  return fp(e) || Pd(e) || al(e) || vp();
}
var _d = function(t) {
  return +setTimeout(t, 16);
}, Td = function(t) {
  return clearTimeout(t);
};
typeof window < "u" && "requestAnimationFrame" in window && (_d = function(t) {
  return window.requestAnimationFrame(t);
}, Td = function(t) {
  return window.cancelAnimationFrame(t);
});
var lc = 0, Xo = /* @__PURE__ */ new Map();
function Id(e) {
  Xo.delete(e);
}
var Mt = function(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  lc += 1;
  var r = lc;
  function a(o) {
    if (o === 0)
      Id(r), t();
    else {
      var i = _d(function() {
        a(o - 1);
      });
      Xo.set(r, i);
    }
  }
  return a(n), r;
};
Mt.cancel = function(e) {
  var t = Xo.get(e);
  return Id(e), Td(t);
};
process.env.NODE_ENV !== "production" && (Mt.ids = function() {
  return Xo;
});
function Nd(e) {
  if (Array.isArray(e)) return e;
}
function mp(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, a, o, i, s = [], l = !0, c = !1;
    try {
      if (o = (n = n.call(e)).next, t === 0) {
        if (Object(n) !== n) return;
        l = !1;
      } else for (; !(l = (r = o.call(n)).done) && (s.push(r.value), s.length !== t); l = !0) ;
    } catch (d) {
      c = !0, a = d;
    } finally {
      try {
        if (!l && n.return != null && (i = n.return(), Object(i) !== i)) return;
      } finally {
        if (c) throw a;
      }
    }
    return s;
  }
}
function Md() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function K(e, t) {
  return Nd(e) || mp(e, t) || al(e, t) || Md();
}
function Ra(e) {
  for (var t = 0, n, r = 0, a = e.length; a >= 4; ++r, a -= 4)
    n = e.charCodeAt(r) & 255 | (e.charCodeAt(++r) & 255) << 8 | (e.charCodeAt(++r) & 255) << 16 | (e.charCodeAt(++r) & 255) << 24, n = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= /* k >>> r: */
    n >>> 24, t = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (a) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(r) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
function Jt() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function rs(e, t) {
  if (!e)
    return !1;
  if (e.contains)
    return e.contains(t);
  for (var n = t; n; ) {
    if (n === e)
      return !0;
    n = n.parentNode;
  }
  return !1;
}
var cc = "data-rc-order", uc = "data-rc-priority", gp = "rc-util-key", as = /* @__PURE__ */ new Map();
function Ad() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.mark;
  return t ? t.startsWith("data-") ? t : "data-".concat(t) : gp;
}
function Zo(e) {
  if (e.attachTo)
    return e.attachTo;
  var t = document.querySelector("head");
  return t || document.body;
}
function pp(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function ol(e) {
  return Array.from((as.get(e) || e).children).filter(function(t) {
    return t.tagName === "STYLE";
  });
}
function Ld(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!Jt())
    return null;
  var n = t.csp, r = t.prepend, a = t.priority, o = a === void 0 ? 0 : a, i = pp(r), s = i === "prependQueue", l = document.createElement("style");
  l.setAttribute(cc, i), s && o && l.setAttribute(uc, "".concat(o)), n != null && n.nonce && (l.nonce = n == null ? void 0 : n.nonce), l.innerHTML = e;
  var c = Zo(t), d = c.firstChild;
  if (r) {
    if (s) {
      var f = (t.styles || ol(c)).filter(function(v) {
        if (!["prepend", "prependQueue"].includes(v.getAttribute(cc)))
          return !1;
        var g = Number(v.getAttribute(uc) || 0);
        return o >= g;
      });
      if (f.length)
        return c.insertBefore(l, f[f.length - 1].nextSibling), l;
    }
    c.insertBefore(l, d);
  } else
    c.appendChild(l);
  return l;
}
function jd(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = Zo(t);
  return (t.styles || ol(n)).find(function(r) {
    return r.getAttribute(Ad(t)) === e;
  });
}
function Pa(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = jd(e, t);
  if (n) {
    var r = Zo(t);
    r.removeChild(n);
  }
}
function hp(e, t) {
  var n = as.get(e);
  if (!n || !rs(document, n)) {
    var r = Ld("", t), a = r.parentNode;
    as.set(e, a), e.removeChild(r);
  }
}
function Wn(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = Zo(n), a = ol(r), o = B(B({}, n), {}, {
    styles: a
  });
  hp(r, o);
  var i = jd(t, o);
  if (i) {
    var s, l;
    if ((s = o.csp) !== null && s !== void 0 && s.nonce && i.nonce !== ((l = o.csp) === null || l === void 0 ? void 0 : l.nonce)) {
      var c;
      i.nonce = (c = o.csp) === null || c === void 0 ? void 0 : c.nonce;
    }
    return i.innerHTML !== e && (i.innerHTML = e), i;
  }
  var d = Ld(e, o);
  return d.setAttribute(Ad(o), t), d;
}
function bp(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) >= 0) continue;
    n[r] = e[r];
  }
  return n;
}
function Ze(e, t) {
  if (e == null) return {};
  var n, r, a = bp(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || {}.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
  }
  return a;
}
function Wr(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, r = /* @__PURE__ */ new Set();
  function a(o, i) {
    var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, l = r.has(o);
    if (ct(!l, "Warning: There may be circular references"), l)
      return !1;
    if (o === i)
      return !0;
    if (n && s > 1)
      return !1;
    r.add(o);
    var c = s + 1;
    if (Array.isArray(o)) {
      if (!Array.isArray(i) || o.length !== i.length)
        return !1;
      for (var d = 0; d < o.length; d++)
        if (!a(o[d], i[d], c))
          return !1;
      return !0;
    }
    if (o && i && ke(o) === "object" && ke(i) === "object") {
      var f = Object.keys(o);
      return f.length !== Object.keys(i).length ? !1 : f.every(function(v) {
        return a(o[v], i[v], c);
      });
    }
    return !1;
  }
  return a(e, t);
}
var yp = "%";
function os(e) {
  return e.join(yp);
}
var Cp = /* @__PURE__ */ function() {
  function e(t) {
    kt(this, e), z(this, "instanceId", void 0), z(this, "cache", /* @__PURE__ */ new Map()), this.instanceId = t;
  }
  return Ht(e, [{
    key: "get",
    value: function(n) {
      return this.opGet(os(n));
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opGet",
    value: function(n) {
      return this.cache.get(n) || null;
    }
  }, {
    key: "update",
    value: function(n, r) {
      return this.opUpdate(os(n), r);
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opUpdate",
    value: function(n, r) {
      var a = this.cache.get(n), o = r(a);
      o === null ? this.cache.delete(n) : this.cache.set(n, o);
    }
  }]), e;
}(), Ur = "data-token-hash", En = "data-css-hash", Sp = "data-cache-path", tr = "__cssinjs_instance__";
function wp() {
  var e = Math.random().toString(12).slice(2);
  if (typeof document < "u" && document.head && document.body) {
    var t = document.body.querySelectorAll("style[".concat(En, "]")) || [], n = document.head.firstChild;
    Array.from(t).forEach(function(a) {
      a[tr] = a[tr] || e, a[tr] === e && document.head.insertBefore(a, n);
    });
    var r = {};
    Array.from(document.querySelectorAll("style[".concat(En, "]"))).forEach(function(a) {
      var o = a.getAttribute(En);
      if (r[o]) {
        if (a[tr] === e) {
          var i;
          (i = a.parentNode) === null || i === void 0 || i.removeChild(a);
        }
      } else
        r[o] = !0;
    });
  }
  return new Cp(e);
}
var Yo = /* @__PURE__ */ u.createContext({
  hashPriority: "low",
  cache: wp(),
  defaultCache: !0
}), Fd = /* @__PURE__ */ Ht(function e() {
  kt(this, e);
}), Dd = "CALC_UNIT", Ep = new RegExp(Dd, "g");
function bi(e) {
  return typeof e == "number" ? "".concat(e).concat(Dd) : e;
}
var xp = /* @__PURE__ */ function(e) {
  or(n, e);
  var t = ir(n);
  function n(r, a) {
    var o;
    kt(this, n), o = t.call(this), z(tt(o), "result", ""), z(tt(o), "unitlessCssVar", void 0), z(tt(o), "lowPriority", void 0);
    var i = ke(r);
    return o.unitlessCssVar = a, r instanceof n ? o.result = "(".concat(r.result, ")") : i === "number" ? o.result = bi(r) : i === "string" && (o.result = r), o;
  }
  return Ht(n, [{
    key: "add",
    value: function(a) {
      return a instanceof n ? this.result = "".concat(this.result, " + ").concat(a.getResult()) : (typeof a == "number" || typeof a == "string") && (this.result = "".concat(this.result, " + ").concat(bi(a))), this.lowPriority = !0, this;
    }
  }, {
    key: "sub",
    value: function(a) {
      return a instanceof n ? this.result = "".concat(this.result, " - ").concat(a.getResult()) : (typeof a == "number" || typeof a == "string") && (this.result = "".concat(this.result, " - ").concat(bi(a))), this.lowPriority = !0, this;
    }
  }, {
    key: "mul",
    value: function(a) {
      return this.lowPriority && (this.result = "(".concat(this.result, ")")), a instanceof n ? this.result = "".concat(this.result, " * ").concat(a.getResult(!0)) : (typeof a == "number" || typeof a == "string") && (this.result = "".concat(this.result, " * ").concat(a)), this.lowPriority = !1, this;
    }
  }, {
    key: "div",
    value: function(a) {
      return this.lowPriority && (this.result = "(".concat(this.result, ")")), a instanceof n ? this.result = "".concat(this.result, " / ").concat(a.getResult(!0)) : (typeof a == "number" || typeof a == "string") && (this.result = "".concat(this.result, " / ").concat(a)), this.lowPriority = !1, this;
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
      }) && (l = !1), this.result = this.result.replace(Ep, l ? "px" : ""), typeof this.lowPriority < "u" ? "calc(".concat(this.result, ")") : this.result;
    }
  }]), n;
}(Fd), $p = /* @__PURE__ */ function(e) {
  or(n, e);
  var t = ir(n);
  function n(r) {
    var a;
    return kt(this, n), a = t.call(this), z(tt(a), "result", 0), r instanceof n ? a.result = r.result : typeof r == "number" && (a.result = r), a;
  }
  return Ht(n, [{
    key: "add",
    value: function(a) {
      return a instanceof n ? this.result += a.result : typeof a == "number" && (this.result += a), this;
    }
  }, {
    key: "sub",
    value: function(a) {
      return a instanceof n ? this.result -= a.result : typeof a == "number" && (this.result -= a), this;
    }
  }, {
    key: "mul",
    value: function(a) {
      return a instanceof n ? this.result *= a.result : typeof a == "number" && (this.result *= a), this;
    }
  }, {
    key: "div",
    value: function(a) {
      return a instanceof n ? this.result /= a.result : typeof a == "number" && (this.result /= a), this;
    }
  }, {
    key: "equal",
    value: function() {
      return this.result;
    }
  }]), n;
}(Fd), Op = function(t, n) {
  var r = t === "css" ? xp : $p;
  return function(a) {
    return new r(a, n);
  };
};
function Rp(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
var il = /* @__PURE__ */ function() {
  function e() {
    kt(this, e), z(this, "cache", void 0), z(this, "keys", void 0), z(this, "cacheCallTimes", void 0), this.cache = /* @__PURE__ */ new Map(), this.keys = [], this.cacheCallTimes = 0;
  }
  return Ht(e, [{
    key: "size",
    value: function() {
      return this.keys.length;
    }
  }, {
    key: "internalGet",
    value: function(n) {
      var r, a, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, i = {
        map: this.cache
      };
      return n.forEach(function(s) {
        if (!i)
          i = void 0;
        else {
          var l;
          i = (l = i) === null || l === void 0 || (l = l.map) === null || l === void 0 ? void 0 : l.get(s);
        }
      }), (r = i) !== null && r !== void 0 && r.value && o && (i.value[1] = this.cacheCallTimes++), (a = i) === null || a === void 0 ? void 0 : a.value;
    }
  }, {
    key: "get",
    value: function(n) {
      var r;
      return (r = this.internalGet(n, !0)) === null || r === void 0 ? void 0 : r[0];
    }
  }, {
    key: "has",
    value: function(n) {
      return !!this.internalGet(n);
    }
  }, {
    key: "set",
    value: function(n, r) {
      var a = this;
      if (!this.has(n)) {
        if (this.size() + 1 > e.MAX_CACHE_SIZE + e.MAX_CACHE_OFFSET) {
          var o = this.keys.reduce(function(c, d) {
            var f = K(c, 2), v = f[1];
            return a.internalGet(d)[1] < v ? [d, a.internalGet(d)[1]] : c;
          }, [this.keys[0], this.cacheCallTimes]), i = K(o, 1), s = i[0];
          this.delete(s);
        }
        this.keys.push(n);
      }
      var l = this.cache;
      n.forEach(function(c, d) {
        if (d === n.length - 1)
          l.set(c, {
            value: [r, a.cacheCallTimes++]
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
    value: function(n, r) {
      var a = n.get(r[0]);
      if (r.length === 1) {
        var o;
        return a.map ? n.set(r[0], {
          map: a.map
        }) : n.delete(r[0]), (o = a.value) === null || o === void 0 ? void 0 : o[0];
      }
      var i = this.deleteByPath(a.map, r.slice(1));
      return (!a.map || a.map.size === 0) && !a.value && n.delete(r[0]), i;
    }
  }, {
    key: "delete",
    value: function(n) {
      if (this.has(n))
        return this.keys = this.keys.filter(function(r) {
          return !Rp(r, n);
        }), this.deleteByPath(this.cache, n);
    }
  }]), e;
}();
z(il, "MAX_CACHE_SIZE", 20);
z(il, "MAX_CACHE_OFFSET", 5);
var dc = 0, zd = /* @__PURE__ */ function() {
  function e(t) {
    kt(this, e), z(this, "derivatives", void 0), z(this, "id", void 0), this.derivatives = Array.isArray(t) ? t : [t], this.id = dc, t.length === 0 && Kn(t.length > 0, "[Ant Design CSS-in-JS] Theme should have at least one derivative function."), dc += 1;
  }
  return Ht(e, [{
    key: "getDerivativeToken",
    value: function(n) {
      return this.derivatives.reduce(function(r, a) {
        return a(n, r);
      }, void 0);
    }
  }]), e;
}(), yi = new il();
function is(e) {
  var t = Array.isArray(e) ? e : [e];
  return yi.has(t) || yi.set(t, new zd(t)), yi.get(t);
}
var Pp = /* @__PURE__ */ new WeakMap(), Ci = {};
function _p(e, t) {
  for (var n = Pp, r = 0; r < t.length; r += 1) {
    var a = t[r];
    n.has(a) || n.set(a, /* @__PURE__ */ new WeakMap()), n = n.get(a);
  }
  return n.has(Ci) || n.set(Ci, e()), n.get(Ci);
}
var fc = /* @__PURE__ */ new WeakMap();
function Ca(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = fc.get(e) || "";
  return n || (Object.keys(e).forEach(function(r) {
    var a = e[r];
    n += r, a instanceof zd ? n += a.id : a && ke(a) === "object" ? n += Ca(a, t) : n += a;
  }), t && (n = Ra(n)), fc.set(e, n)), n;
}
function vc(e, t) {
  return Ra("".concat(t, "_").concat(Ca(e, !0)));
}
var ss = Jt();
function ee(e) {
  return typeof e == "number" ? "".concat(e, "px") : e;
}
function Ao(e, t, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
  if (a)
    return e;
  var o = B(B({}, r), {}, z(z({}, Ur, t), En, n)), i = Object.keys(o).map(function(s) {
    var l = o[s];
    return l ? "".concat(s, '="').concat(l, '"') : null;
  }).filter(function(s) {
    return s;
  }).join(" ");
  return "<style ".concat(i, ">").concat(e, "</style>");
}
var Co = function(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return "--".concat(n ? "".concat(n, "-") : "").concat(t).replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, "$1-$2").replace(/([a-z])([A-Z0-9])/g, "$1-$2").toLowerCase();
}, Tp = function(t, n, r) {
  return Object.keys(t).length ? ".".concat(n).concat(r != null && r.scope ? ".".concat(r.scope) : "", "{").concat(Object.entries(t).map(function(a) {
    var o = K(a, 2), i = o[0], s = o[1];
    return "".concat(i, ":").concat(s, ";");
  }).join(""), "}") : "";
}, Vd = function(t, n, r) {
  var a = {}, o = {};
  return Object.entries(t).forEach(function(i) {
    var s, l, c = K(i, 2), d = c[0], f = c[1];
    if (r != null && (s = r.preserve) !== null && s !== void 0 && s[d])
      o[d] = f;
    else if ((typeof f == "string" || typeof f == "number") && !(r != null && (l = r.ignore) !== null && l !== void 0 && l[d])) {
      var v, g = Co(d, r == null ? void 0 : r.prefix);
      a[g] = typeof f == "number" && !(r != null && (v = r.unitless) !== null && v !== void 0 && v[d]) ? "".concat(f, "px") : String(f), o[d] = "var(".concat(g, ")");
    }
  }), [o, Tp(a, n, {
    scope: r == null ? void 0 : r.scope
  })];
}, mc = process.env.NODE_ENV !== "test" && Jt() ? u.useLayoutEffect : u.useEffect, Et = function(t, n) {
  var r = u.useRef(!0);
  mc(function() {
    return t(r.current);
  }, n), mc(function() {
    return r.current = !1, function() {
      r.current = !0;
    };
  }, []);
}, ls = function(t, n) {
  Et(function(r) {
    if (!r)
      return t();
  }, n);
}, Ip = B({}, u), gc = Ip.useInsertionEffect, Np = function(t, n, r) {
  u.useMemo(t, r), Et(function() {
    return n(!0);
  }, r);
}, Mp = gc ? function(e, t, n) {
  return gc(function() {
    return e(), t();
  }, n);
} : Np, Ap = B({}, u), Lp = Ap.useInsertionEffect, jp = function(t) {
  var n = [], r = !1;
  function a(o) {
    if (r) {
      process.env.NODE_ENV !== "production" && Kn(!1, "[Ant Design CSS-in-JS] You are registering a cleanup function after unmount, which will not have any effect.");
      return;
    }
    n.push(o);
  }
  return u.useEffect(function() {
    return r = !1, function() {
      r = !0, n.length && n.forEach(function(o) {
        return o();
      });
    };
  }, t), a;
}, Fp = function() {
  return function(t) {
    t();
  };
}, Dp = typeof Lp < "u" ? jp : Fp;
function zp() {
  return !1;
}
var cs = !1;
function Vp() {
  return cs;
}
const Bp = process.env.NODE_ENV === "production" ? zp : Vp;
if (process.env.NODE_ENV !== "production" && typeof module < "u" && module && module.hot && typeof window < "u") {
  var Si = window;
  if (typeof Si.webpackHotUpdate == "function") {
    var kp = Si.webpackHotUpdate;
    Si.webpackHotUpdate = function() {
      return cs = !0, setTimeout(function() {
        cs = !1;
      }, 0), kp.apply(void 0, arguments);
    };
  }
}
function sl(e, t, n, r, a) {
  var o = u.useContext(Yo), i = o.cache, s = [e].concat(Pe(t)), l = os(s), c = Dp([l]), d = Bp(), f = function(h) {
    i.opUpdate(l, function(m) {
      var S = m || [void 0, void 0], b = K(S, 2), y = b[0], w = y === void 0 ? 0 : y, C = b[1], O = C;
      process.env.NODE_ENV !== "production" && C && d && (r == null || r(O, d), O = null);
      var E = O || n(), x = [w, E];
      return h ? h(x) : x;
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
  var g = v[1];
  return Mp(function() {
    a == null || a(g);
  }, function(p) {
    return f(function(h) {
      var m = K(h, 2), S = m[0], b = m[1];
      return p && S === 0 && (a == null || a(g)), [S + 1, b];
    }), function() {
      i.opUpdate(l, function(h) {
        var m = h || [], S = K(m, 2), b = S[0], y = b === void 0 ? 0 : b, w = S[1], C = y - 1;
        return C === 0 ? (c(function() {
          (p || !i.opGet(l)) && (r == null || r(w, !1));
        }), null) : [y - 1, w];
      });
    };
  }, [l]), g;
}
var Hp = {}, Wp = process.env.NODE_ENV !== "production" ? "css-dev-only-do-not-override" : "css", fr = /* @__PURE__ */ new Map();
function Up(e) {
  fr.set(e, (fr.get(e) || 0) + 1);
}
function Kp(e, t) {
  if (typeof document < "u") {
    var n = document.querySelectorAll("style[".concat(Ur, '="').concat(e, '"]'));
    n.forEach(function(r) {
      if (r[tr] === t) {
        var a;
        (a = r.parentNode) === null || a === void 0 || a.removeChild(r);
      }
    });
  }
}
var Gp = 0;
function qp(e, t) {
  fr.set(e, (fr.get(e) || 0) - 1);
  var n = Array.from(fr.keys()), r = n.filter(function(a) {
    var o = fr.get(a) || 0;
    return o <= 0;
  });
  n.length - r.length > Gp && r.forEach(function(a) {
    Kp(a, t), fr.delete(a);
  });
}
var Xp = function(t, n, r, a) {
  var o = r.getDerivativeToken(t), i = B(B({}, o), n);
  return a && (i = a(i)), i;
}, Bd = "token";
function Zp(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = Nt(Yo), a = r.cache.instanceId, o = r.container, i = n.salt, s = i === void 0 ? "" : i, l = n.override, c = l === void 0 ? Hp : l, d = n.formatToken, f = n.getComputedToken, v = n.cssVar, g = _p(function() {
    return Object.assign.apply(Object, [{}].concat(Pe(t)));
  }, t), p = Ca(g), h = Ca(c), m = v ? Ca(v) : "", S = sl(Bd, [s, e.id, p, h, m], function() {
    var b, y = f ? f(g, c, e) : Xp(g, c, e, d), w = B({}, y), C = "";
    if (v) {
      var O = Vd(y, v.key, {
        prefix: v.prefix,
        ignore: v.ignore,
        unitless: v.unitless,
        preserve: v.preserve
      }), E = K(O, 2);
      y = E[0], C = E[1];
    }
    var x = vc(y, s);
    y._tokenKey = x, w._tokenKey = vc(w, s);
    var R = (b = v == null ? void 0 : v.key) !== null && b !== void 0 ? b : x;
    y._themeKey = R, Up(R);
    var T = "".concat(Wp, "-").concat(Ra(x));
    return y._hashId = T, [y, T, w, C, (v == null ? void 0 : v.key) || ""];
  }, function(b) {
    qp(b[0]._themeKey, a);
  }, function(b) {
    var y = K(b, 4), w = y[0], C = y[3];
    if (v && C) {
      var O = Wn(C, Ra("css-variables-".concat(w._themeKey)), {
        mark: En,
        prepend: "queue",
        attachTo: o,
        priority: -999
      });
      O[tr] = a, O.setAttribute(Ur, w._themeKey);
    }
  });
  return S;
}
var Yp = function(t, n, r) {
  var a = K(t, 5), o = a[2], i = a[3], s = a[4], l = r || {}, c = l.plain;
  if (!i)
    return null;
  var d = o._tokenKey, f = -999, v = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(f)
  }, g = Ao(i, s, d, v, c);
  return [f, d, g];
}, Qp = {
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
}, kd = "comm", Hd = "rule", Wd = "decl", Jp = "@import", e0 = "@keyframes", t0 = "@layer", Ud = Math.abs, ll = String.fromCharCode;
function Kd(e) {
  return e.trim();
}
function So(e, t, n) {
  return e.replace(t, n);
}
function n0(e, t, n) {
  return e.indexOf(t, n);
}
function _a(e, t) {
  return e.charCodeAt(t) | 0;
}
function Ta(e, t, n) {
  return e.slice(t, n);
}
function kn(e) {
  return e.length;
}
function r0(e) {
  return e.length;
}
function Ja(e, t) {
  return t.push(e), e;
}
var Qo = 1, Kr = 1, Gd = 0, dn = 0, It = 0, Jr = "";
function cl(e, t, n, r, a, o, i, s) {
  return { value: e, root: t, parent: n, type: r, props: a, children: o, line: Qo, column: Kr, length: i, return: "", siblings: s };
}
function a0() {
  return It;
}
function o0() {
  return It = dn > 0 ? _a(Jr, --dn) : 0, Kr--, It === 10 && (Kr = 1, Qo--), It;
}
function xn() {
  return It = dn < Gd ? _a(Jr, dn++) : 0, Kr++, It === 10 && (Kr = 1, Qo++), It;
}
function gr() {
  return _a(Jr, dn);
}
function wo() {
  return dn;
}
function Jo(e, t) {
  return Ta(Jr, e, t);
}
function us(e) {
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
function i0(e) {
  return Qo = Kr = 1, Gd = kn(Jr = e), dn = 0, [];
}
function s0(e) {
  return Jr = "", e;
}
function wi(e) {
  return Kd(Jo(dn - 1, ds(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function l0(e) {
  for (; (It = gr()) && It < 33; )
    xn();
  return us(e) > 2 || us(It) > 3 ? "" : " ";
}
function c0(e, t) {
  for (; --t && xn() && !(It < 48 || It > 102 || It > 57 && It < 65 || It > 70 && It < 97); )
    ;
  return Jo(e, wo() + (t < 6 && gr() == 32 && xn() == 32));
}
function ds(e) {
  for (; xn(); )
    switch (It) {
      case e:
        return dn;
      case 34:
      case 39:
        e !== 34 && e !== 39 && ds(It);
        break;
      case 40:
        e === 41 && ds(e);
        break;
      case 92:
        xn();
        break;
    }
  return dn;
}
function u0(e, t) {
  for (; xn() && e + It !== 57; )
    if (e + It === 84 && gr() === 47)
      break;
  return "/*" + Jo(t, dn - 1) + "*" + ll(e === 47 ? e : xn());
}
function d0(e) {
  for (; !us(gr()); )
    xn();
  return Jo(e, dn);
}
function f0(e) {
  return s0(Eo("", null, null, null, [""], e = i0(e), 0, [0], e));
}
function Eo(e, t, n, r, a, o, i, s, l) {
  for (var c = 0, d = 0, f = i, v = 0, g = 0, p = 0, h = 1, m = 1, S = 1, b = 0, y = "", w = a, C = o, O = r, E = y; m; )
    switch (p = b, b = xn()) {
      case 40:
        if (p != 108 && _a(E, f - 1) == 58) {
          n0(E += So(wi(b), "&", "&\f"), "&\f", Ud(c ? s[c - 1] : 0)) != -1 && (S = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        E += wi(b);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        E += l0(p);
        break;
      case 92:
        E += c0(wo() - 1, 7);
        continue;
      case 47:
        switch (gr()) {
          case 42:
          case 47:
            Ja(v0(u0(xn(), wo()), t, n, l), l);
            break;
          default:
            E += "/";
        }
        break;
      case 123 * h:
        s[c++] = kn(E) * S;
      case 125 * h:
      case 59:
      case 0:
        switch (b) {
          case 0:
          case 125:
            m = 0;
          case 59 + d:
            S == -1 && (E = So(E, /\f/g, "")), g > 0 && kn(E) - f && Ja(g > 32 ? hc(E + ";", r, n, f - 1, l) : hc(So(E, " ", "") + ";", r, n, f - 2, l), l);
            break;
          case 59:
            E += ";";
          default:
            if (Ja(O = pc(E, t, n, c, d, a, s, y, w = [], C = [], f, o), o), b === 123)
              if (d === 0)
                Eo(E, t, O, O, w, o, f, s, C);
              else
                switch (v === 99 && _a(E, 3) === 110 ? 100 : v) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Eo(e, O, O, r && Ja(pc(e, O, O, 0, 0, a, s, y, a, w = [], f, C), C), a, C, f, s, r ? w : C);
                    break;
                  default:
                    Eo(E, O, O, O, [""], C, 0, s, C);
                }
        }
        c = d = g = 0, h = S = 1, y = E = "", f = i;
        break;
      case 58:
        f = 1 + kn(E), g = p;
      default:
        if (h < 1) {
          if (b == 123)
            --h;
          else if (b == 125 && h++ == 0 && o0() == 125)
            continue;
        }
        switch (E += ll(b), b * h) {
          case 38:
            S = d > 0 ? 1 : (E += "\f", -1);
            break;
          case 44:
            s[c++] = (kn(E) - 1) * S, S = 1;
            break;
          case 64:
            gr() === 45 && (E += wi(xn())), v = gr(), d = f = kn(y = E += d0(wo())), b++;
            break;
          case 45:
            p === 45 && kn(E) == 2 && (h = 0);
        }
    }
  return o;
}
function pc(e, t, n, r, a, o, i, s, l, c, d, f) {
  for (var v = a - 1, g = a === 0 ? o : [""], p = r0(g), h = 0, m = 0, S = 0; h < r; ++h)
    for (var b = 0, y = Ta(e, v + 1, v = Ud(m = i[h])), w = e; b < p; ++b)
      (w = Kd(m > 0 ? g[b] + " " + y : So(y, /&\f/g, g[b]))) && (l[S++] = w);
  return cl(e, t, n, a === 0 ? Hd : s, l, c, d, f);
}
function v0(e, t, n, r) {
  return cl(e, t, n, kd, ll(a0()), Ta(e, 2, -2), 0, r);
}
function hc(e, t, n, r, a) {
  return cl(e, t, n, Wd, Ta(e, 0, r), Ta(e, r + 1, -1), r, a);
}
function fs(e, t) {
  for (var n = "", r = 0; r < e.length; r++)
    n += t(e[r], r, e, t) || "";
  return n;
}
function m0(e, t, n, r) {
  switch (e.type) {
    case t0:
      if (e.children.length) break;
    case Jp:
    case Wd:
      return e.return = e.return || e.value;
    case kd:
      return "";
    case e0:
      return e.return = e.value + "{" + fs(e.children, r) + "}";
    case Hd:
      if (!kn(e.value = e.props.join(","))) return "";
  }
  return kn(n = fs(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function qd(e, t) {
  var n = t.path, r = t.parentSelectors;
  ct(!1, "[Ant Design CSS-in-JS] ".concat(n ? "Error in ".concat(n, ": ") : "").concat(e).concat(r.length ? " Selector: ".concat(r.join(" | ")) : ""));
}
var g0 = function(t, n, r) {
  if (t === "content") {
    var a = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, o = ["normal", "none", "initial", "inherit", "unset"];
    (typeof n != "string" || o.indexOf(n) === -1 && !a.test(n) && (n.charAt(0) !== n.charAt(n.length - 1) || n.charAt(0) !== '"' && n.charAt(0) !== "'")) && qd("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"".concat(n, "\"'`."), r);
  }
}, p0 = function(t, n, r) {
  t === "animation" && r.hashId && n !== "none" && qd("You seem to be using hashed animation '".concat(n, "', in which case 'animationName' with Keyframe as value is recommended."), r);
}, bc = "data-ant-cssinjs-cache-path", Xd = "_FILE_STYLE__", pr, Zd = !0;
function h0() {
  if (!pr && (pr = {}, Jt())) {
    var e = document.createElement("div");
    e.className = bc, e.style.position = "fixed", e.style.visibility = "hidden", e.style.top = "-9999px", document.body.appendChild(e);
    var t = getComputedStyle(e).content || "";
    t = t.replace(/^"/, "").replace(/"$/, ""), t.split(";").forEach(function(a) {
      var o = a.split(":"), i = K(o, 2), s = i[0], l = i[1];
      pr[s] = l;
    });
    var n = document.querySelector("style[".concat(bc, "]"));
    if (n) {
      var r;
      Zd = !1, (r = n.parentNode) === null || r === void 0 || r.removeChild(n);
    }
    document.body.removeChild(e);
  }
}
function b0(e) {
  return h0(), !!pr[e];
}
function y0(e) {
  var t = pr[e], n = null;
  if (t && Jt())
    if (Zd)
      n = Xd;
    else {
      var r = document.querySelector("style[".concat(En, '="').concat(pr[e], '"]'));
      r ? n = r.innerHTML : delete pr[e];
    }
  return [n, t];
}
var Yd = "_skip_check_", Qd = "_multi_value_";
function xo(e) {
  var t = fs(f0(e), m0);
  return t.replace(/\{%%%\:[^;];}/g, ";");
}
function C0(e) {
  return ke(e) === "object" && e && (Yd in e || Qd in e);
}
function S0(e, t, n) {
  if (!t)
    return e;
  var r = ".".concat(t), a = n === "low" ? ":where(".concat(r, ")") : r, o = e.split(",").map(function(i) {
    var s, l = i.trim().split(/\s+/), c = l[0] || "", d = ((s = c.match(/^\w+/)) === null || s === void 0 ? void 0 : s[0]) || "";
    return c = "".concat(d).concat(a).concat(c.slice(d.length)), [c].concat(Pe(l.slice(1))).join(" ");
  });
  return o.join(",");
}
var w0 = function e(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: !0,
    parentSelectors: []
  }, a = r.root, o = r.injectHash, i = r.parentSelectors, s = n.hashId, l = n.layer, c = n.path, d = n.hashPriority, f = n.transformers, v = f === void 0 ? [] : f, g = n.linters, p = g === void 0 ? [] : g, h = "", m = {};
  function S(w) {
    var C = w.getName(s);
    if (!m[C]) {
      var O = e(w.style, n, {
        root: !1,
        parentSelectors: i
      }), E = K(O, 1), x = E[0];
      m[C] = "@keyframes ".concat(w.getName(s)).concat(x);
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
      h += "".concat(C, `
`);
    else if (C._keyframe)
      S(C);
    else {
      var O = v.reduce(function(E, x) {
        var R;
        return (x == null || (R = x.visit) === null || R === void 0 ? void 0 : R.call(x, E)) || E;
      }, C);
      Object.keys(O).forEach(function(E) {
        var x = O[E];
        if (ke(x) === "object" && x && (E !== "animationName" || !x._keyframe) && !C0(x)) {
          var R = !1, T = E.trim(), M = !1;
          (a || o) && s ? T.startsWith("@") ? R = !0 : T = S0(E, s, d) : a && !s && (T === "&" || T === "") && (T = "", M = !0);
          var j = e(x, n, {
            root: M,
            injectHash: R,
            parentSelectors: [].concat(Pe(i), [T])
          }), I = K(j, 2), _ = I[0], k = I[1];
          m = B(B({}, m), k), h += "".concat(T).concat(_);
        } else {
          let $ = function(F, L) {
            process.env.NODE_ENV !== "production" && (ke(x) !== "object" || !(x != null && x[Yd])) && [g0, p0].concat(Pe(p)).forEach(function(U) {
              return U(F, L, {
                path: c,
                hashId: s,
                parentSelectors: i
              });
            });
            var V = F.replace(/[A-Z]/g, function(U) {
              return "-".concat(U.toLowerCase());
            }), W = L;
            !Qp[F] && typeof W == "number" && W !== 0 && (W = "".concat(W, "px")), F === "animationName" && L !== null && L !== void 0 && L._keyframe && (S(L), W = L.getName(s)), h += "".concat(V, ":").concat(W, ";");
          };
          var N, P = (N = x == null ? void 0 : x.value) !== null && N !== void 0 ? N : x;
          ke(x) === "object" && x !== null && x !== void 0 && x[Qd] && Array.isArray(P) ? P.forEach(function(F) {
            $(E, F);
          }) : $(E, P);
        }
      });
    }
  }), a ? l && (h = "@layer ".concat(l.name, " {").concat(h, "}"), l.dependencies && (m["@layer ".concat(l.name)] = l.dependencies.map(function(w) {
    return "@layer ".concat(w, ", ").concat(l.name, ";");
  }).join(`
`))) : h = "{".concat(h, "}"), [h, m];
};
function Jd(e, t) {
  return Ra("".concat(e.join("%")).concat(t));
}
function E0() {
  return null;
}
var ef = "style";
function vs(e, t) {
  var n = e.token, r = e.path, a = e.hashId, o = e.layer, i = e.nonce, s = e.clientOnly, l = e.order, c = l === void 0 ? 0 : l, d = u.useContext(Yo), f = d.autoClear, v = d.mock, g = d.defaultCache, p = d.hashPriority, h = d.container, m = d.ssrInline, S = d.transformers, b = d.linters, y = d.cache, w = d.layer, C = n._tokenKey, O = [C];
  w && O.push("layer"), O.push.apply(O, Pe(r));
  var E = ss;
  process.env.NODE_ENV !== "production" && v !== void 0 && (E = v === "client");
  var x = sl(
    ef,
    O,
    // Create cache if needed
    function() {
      var I = O.join("|");
      if (b0(I)) {
        var _ = y0(I), k = K(_, 2), N = k[0], P = k[1];
        if (N)
          return [N, C, P, {}, s, c];
      }
      var $ = t(), F = w0($, {
        hashId: a,
        hashPriority: p,
        layer: w ? o : void 0,
        path: r.join("-"),
        transformers: S,
        linters: b
      }), L = K(F, 2), V = L[0], W = L[1], U = xo(V), G = Jd(O, U);
      return [U, C, G, W, s, c];
    },
    // Remove cache if no need
    function(I, _) {
      var k = K(I, 3), N = k[2];
      (_ || f) && ss && Pa(N, {
        mark: En
      });
    },
    // Effect: Inject style here
    function(I) {
      var _ = K(I, 4), k = _[0];
      _[1];
      var N = _[2], P = _[3];
      if (E && k !== Xd) {
        var $ = {
          mark: En,
          prepend: w ? !1 : "queue",
          attachTo: h,
          priority: c
        }, F = typeof i == "function" ? i() : i;
        F && ($.csp = {
          nonce: F
        });
        var L = [], V = [];
        Object.keys(P).forEach(function(U) {
          U.startsWith("@layer") ? L.push(U) : V.push(U);
        }), L.forEach(function(U) {
          Wn(xo(P[U]), "_layer-".concat(U), B(B({}, $), {}, {
            prepend: !0
          }));
        });
        var W = Wn(k, N, $);
        W[tr] = y.instanceId, W.setAttribute(Ur, C), process.env.NODE_ENV !== "production" && W.setAttribute(Sp, O.join("|")), V.forEach(function(U) {
          Wn(xo(P[U]), "_effect-".concat(U), $);
        });
      }
    }
  ), R = K(x, 3), T = R[0], M = R[1], j = R[2];
  return function(I) {
    var _;
    return !m || E || !g ? _ = /* @__PURE__ */ u.createElement(E0, null) : _ = /* @__PURE__ */ u.createElement("style", me({}, z(z({}, Ur, M), En, j), {
      dangerouslySetInnerHTML: {
        __html: T
      }
    })), /* @__PURE__ */ u.createElement(u.Fragment, null, _, I);
  };
}
var x0 = function(t, n, r) {
  var a = K(t, 6), o = a[0], i = a[1], s = a[2], l = a[3], c = a[4], d = a[5], f = r || {}, v = f.plain;
  if (c)
    return null;
  var g = o, p = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(d)
  };
  return g = Ao(o, i, s, p, v), l && Object.keys(l).forEach(function(h) {
    if (!n[h]) {
      n[h] = !0;
      var m = xo(l[h]), S = Ao(m, i, "_effect-".concat(h), p, v);
      h.startsWith("@layer") ? g = S + g : g += S;
    }
  }), [d, s, g];
}, tf = "cssVar", $0 = function(t, n) {
  var r = t.key, a = t.prefix, o = t.unitless, i = t.ignore, s = t.token, l = t.scope, c = l === void 0 ? "" : l, d = Nt(Yo), f = d.cache.instanceId, v = d.container, g = s._tokenKey, p = [].concat(Pe(t.path), [r, c, g]), h = sl(tf, p, function() {
    var m = n(), S = Vd(m, r, {
      prefix: a,
      unitless: o,
      ignore: i,
      scope: c
    }), b = K(S, 2), y = b[0], w = b[1], C = Jd(p, w);
    return [y, w, C, r];
  }, function(m) {
    var S = K(m, 3), b = S[2];
    ss && Pa(b, {
      mark: En
    });
  }, function(m) {
    var S = K(m, 3), b = S[1], y = S[2];
    if (b) {
      var w = Wn(b, y, {
        mark: En,
        prepend: "queue",
        attachTo: v,
        priority: -999
      });
      w[tr] = f, w.setAttribute(Ur, r);
    }
  });
  return h;
}, O0 = function(t, n, r) {
  var a = K(t, 4), o = a[1], i = a[2], s = a[3], l = r || {}, c = l.plain;
  if (!o)
    return null;
  var d = -999, f = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(d)
  }, v = Ao(o, s, i, f, c);
  return [d, i, v];
};
z(z(z({}, ef, x0), Bd, Yp), tf, O0);
var xt = /* @__PURE__ */ function() {
  function e(t, n) {
    kt(this, e), z(this, "name", void 0), z(this, "style", void 0), z(this, "_keyframe", !0), this.name = t, this.style = n;
  }
  return Ht(e, [{
    key: "getName",
    value: function() {
      var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return n ? "".concat(n, "-").concat(this.name) : this.name;
    }
  }]), e;
}();
function $r(e) {
  return e.notSplit = !0, e;
}
$r(["borderTop", "borderBottom"]), $r(["borderTop"]), $r(["borderBottom"]), $r(["borderLeft", "borderRight"]), $r(["borderLeft"]), $r(["borderRight"]);
var ul = /* @__PURE__ */ br({});
function R0(e) {
  return Nd(e) || Pd(e) || al(e) || Md();
}
function Nn(e, t) {
  for (var n = e, r = 0; r < t.length; r += 1) {
    if (n == null)
      return;
    n = n[t[r]];
  }
  return n;
}
function nf(e, t, n, r) {
  if (!t.length)
    return n;
  var a = R0(t), o = a[0], i = a.slice(1), s;
  return !e && typeof o == "number" ? s = [] : Array.isArray(e) ? s = Pe(e) : s = B({}, e), r && n === void 0 && i.length === 1 ? delete s[o][i[0]] : s[o] = nf(s[o], i, n, r), s;
}
function bn(e, t, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return t.length && r && n === void 0 && !Nn(e, t.slice(0, -1)) ? e : nf(e, t, n, r);
}
function P0(e) {
  return ke(e) === "object" && e !== null && Object.getPrototypeOf(e) === Object.prototype;
}
function yc(e) {
  return Array.isArray(e) ? [] : {};
}
var _0 = typeof Reflect > "u" ? Object.keys : Reflect.ownKeys;
function jr() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r = yc(t[0]);
  return t.forEach(function(a) {
    function o(i, s) {
      var l = new Set(s), c = Nn(a, i), d = Array.isArray(c);
      if (d || P0(c)) {
        if (!l.has(c)) {
          l.add(c);
          var f = Nn(r, i);
          d ? r = bn(r, i, []) : (!f || ke(f) !== "object") && (r = bn(r, i, yc(c))), _0(c).forEach(function(v) {
            o([].concat(Pe(i), [v]), l);
          });
        }
      } else
        r = bn(r, i, c);
    }
    o([]);
  }), r;
}
function rf() {
}
let Bn = null;
function T0() {
  Bn = null, hd();
}
let ea = rf;
process.env.NODE_ENV !== "production" && (ea = (e, t, n) => {
  ct(e, `[antd: ${t}] ${n}`), process.env.NODE_ENV === "test" && T0();
});
const af = /* @__PURE__ */ u.createContext({}), zt = process.env.NODE_ENV !== "production" ? (e) => {
  const {
    strict: t
  } = u.useContext(af), n = (r, a, o) => {
    if (!r)
      if (t === !1 && a === "deprecated") {
        const i = Bn;
        Bn || (Bn = {}), Bn[e] = Bn[e] || [], Bn[e].includes(o || "") || Bn[e].push(o || ""), i || console.warn("[antd] There exists deprecated usage in your code:", Bn);
      } else
        process.env.NODE_ENV !== "production" && ea(r, e, o);
  };
  return n.deprecated = (r, a, o, i) => {
    n(r, "deprecated", `\`${a}\` is deprecated. Please use \`${o}\` instead.${i ? ` ${i}` : ""}`);
  }, n;
} : () => {
  const e = () => {
  };
  return e.deprecated = rf, e;
}, I0 = /* @__PURE__ */ br(void 0);
var N0 = {
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
}, M0 = {
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
const of = {
  placeholder: "Select time",
  rangePlaceholder: ["Start time", "End time"]
}, Cc = {
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
  }, M0),
  timePickerLocale: Object.assign({}, of)
}, nn = "${label} is not a valid ${type}", ar = {
  locale: "en",
  Pagination: N0,
  DatePicker: Cc,
  TimePicker: of,
  Calendar: Cc,
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
        string: nn,
        method: nn,
        array: nn,
        object: nn,
        number: nn,
        date: nn,
        boolean: nn,
        integer: nn,
        float: nn,
        regexp: nn,
        email: nn,
        url: nn,
        hex: nn
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
Object.assign({}, ar.Modal);
let $o = [];
const Sc = () => $o.reduce((e, t) => Object.assign(Object.assign({}, e), t), ar.Modal);
function A0(e) {
  if (e) {
    const t = Object.assign({}, e);
    return $o.push(t), Sc(), () => {
      $o = $o.filter((n) => n !== t), Sc();
    };
  }
  Object.assign({}, ar.Modal);
}
const dl = /* @__PURE__ */ br(void 0), L0 = (e, t) => {
  const n = u.useContext(dl), r = u.useMemo(() => {
    var o;
    const i = ar[e], s = (o = n == null ? void 0 : n[e]) !== null && o !== void 0 ? o : {};
    return Object.assign(Object.assign({}, typeof i == "function" ? i() : i), s || {});
  }, [e, t, n]), a = u.useMemo(() => {
    const o = n == null ? void 0 : n.locale;
    return n != null && n.exist && !o ? ar.locale : o;
  }, [n]);
  return [r, a];
}, sf = "internalMark", lf = (e) => {
  const {
    locale: t = {},
    children: n,
    _ANT_MARK__: r
  } = e;
  if (process.env.NODE_ENV !== "production") {
    const o = zt("LocaleProvider");
    process.env.NODE_ENV !== "production" && o(r === sf, "deprecated", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale");
  }
  u.useEffect(() => A0(t == null ? void 0 : t.Modal), [t]);
  const a = u.useMemo(() => Object.assign(Object.assign({}, t), {
    exist: !0
  }), [t]);
  return /* @__PURE__ */ u.createElement(dl.Provider, {
    value: a
  }, n);
};
process.env.NODE_ENV !== "production" && (lf.displayName = "LocaleProvider");
function Bt(e, t) {
  j0(e) && (e = "100%");
  var n = F0(e);
  return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), n && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e);
}
function eo(e) {
  return Math.min(1, Math.max(0, e));
}
function j0(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function F0(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function cf(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function to(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function vr(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function D0(e, t, n) {
  return {
    r: Bt(e, 255) * 255,
    g: Bt(t, 255) * 255,
    b: Bt(n, 255) * 255
  };
}
function wc(e, t, n) {
  e = Bt(e, 255), t = Bt(t, 255), n = Bt(n, 255);
  var r = Math.max(e, t, n), a = Math.min(e, t, n), o = 0, i = 0, s = (r + a) / 2;
  if (r === a)
    i = 0, o = 0;
  else {
    var l = r - a;
    switch (i = s > 0.5 ? l / (2 - r - a) : l / (r + a), r) {
      case e:
        o = (t - n) / l + (t < n ? 6 : 0);
        break;
      case t:
        o = (n - e) / l + 2;
        break;
      case n:
        o = (e - t) / l + 4;
        break;
    }
    o /= 6;
  }
  return { h: o, s: i, l: s };
}
function Ei(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * (6 * n) : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function z0(e, t, n) {
  var r, a, o;
  if (e = Bt(e, 360), t = Bt(t, 100), n = Bt(n, 100), t === 0)
    a = n, o = n, r = n;
  else {
    var i = n < 0.5 ? n * (1 + t) : n + t - n * t, s = 2 * n - i;
    r = Ei(s, i, e + 1 / 3), a = Ei(s, i, e), o = Ei(s, i, e - 1 / 3);
  }
  return { r: r * 255, g: a * 255, b: o * 255 };
}
function ms(e, t, n) {
  e = Bt(e, 255), t = Bt(t, 255), n = Bt(n, 255);
  var r = Math.max(e, t, n), a = Math.min(e, t, n), o = 0, i = r, s = r - a, l = r === 0 ? 0 : s / r;
  if (r === a)
    o = 0;
  else {
    switch (r) {
      case e:
        o = (t - n) / s + (t < n ? 6 : 0);
        break;
      case t:
        o = (n - e) / s + 2;
        break;
      case n:
        o = (e - t) / s + 4;
        break;
    }
    o /= 6;
  }
  return { h: o, s: l, v: i };
}
function V0(e, t, n) {
  e = Bt(e, 360) * 6, t = Bt(t, 100), n = Bt(n, 100);
  var r = Math.floor(e), a = e - r, o = n * (1 - t), i = n * (1 - a * t), s = n * (1 - (1 - a) * t), l = r % 6, c = [n, i, o, o, s, n][l], d = [s, n, n, i, o, o][l], f = [o, o, s, n, n, i][l];
  return { r: c * 255, g: d * 255, b: f * 255 };
}
function gs(e, t, n, r) {
  var a = [
    vr(Math.round(e).toString(16)),
    vr(Math.round(t).toString(16)),
    vr(Math.round(n).toString(16))
  ];
  return r && a[0].startsWith(a[0].charAt(1)) && a[1].startsWith(a[1].charAt(1)) && a[2].startsWith(a[2].charAt(1)) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) : a.join("");
}
function B0(e, t, n, r, a) {
  var o = [
    vr(Math.round(e).toString(16)),
    vr(Math.round(t).toString(16)),
    vr(Math.round(n).toString(16)),
    vr(k0(r))
  ];
  return a && o[0].startsWith(o[0].charAt(1)) && o[1].startsWith(o[1].charAt(1)) && o[2].startsWith(o[2].charAt(1)) && o[3].startsWith(o[3].charAt(1)) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) + o[3].charAt(0) : o.join("");
}
function k0(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function Ec(e) {
  return an(e) / 255;
}
function an(e) {
  return parseInt(e, 16);
}
function H0(e) {
  return {
    r: e >> 16,
    g: (e & 65280) >> 8,
    b: e & 255
  };
}
var ps = {
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
function Lr(e) {
  var t = { r: 0, g: 0, b: 0 }, n = 1, r = null, a = null, o = null, i = !1, s = !1;
  return typeof e == "string" && (e = K0(e)), typeof e == "object" && (zn(e.r) && zn(e.g) && zn(e.b) ? (t = D0(e.r, e.g, e.b), i = !0, s = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : zn(e.h) && zn(e.s) && zn(e.v) ? (r = to(e.s), a = to(e.v), t = V0(e.h, r, a), i = !0, s = "hsv") : zn(e.h) && zn(e.s) && zn(e.l) && (r = to(e.s), o = to(e.l), t = z0(e.h, r, o), i = !0, s = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (n = e.a)), n = cf(n), {
    ok: i,
    format: e.format || s,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: n
  };
}
var W0 = "[-\\+]?\\d+%?", U0 = "[-\\+]?\\d*\\.\\d+%?", nr = "(?:".concat(U0, ")|(?:").concat(W0, ")"), xi = "[\\s|\\(]+(".concat(nr, ")[,|\\s]+(").concat(nr, ")[,|\\s]+(").concat(nr, ")\\s*\\)?"), $i = "[\\s|\\(]+(".concat(nr, ")[,|\\s]+(").concat(nr, ")[,|\\s]+(").concat(nr, ")[,|\\s]+(").concat(nr, ")\\s*\\)?"), hn = {
  CSS_UNIT: new RegExp(nr),
  rgb: new RegExp("rgb" + xi),
  rgba: new RegExp("rgba" + $i),
  hsl: new RegExp("hsl" + xi),
  hsla: new RegExp("hsla" + $i),
  hsv: new RegExp("hsv" + xi),
  hsva: new RegExp("hsva" + $i),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function K0(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var t = !1;
  if (ps[e])
    e = ps[e], t = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var n = hn.rgb.exec(e);
  return n ? { r: n[1], g: n[2], b: n[3] } : (n = hn.rgba.exec(e), n ? { r: n[1], g: n[2], b: n[3], a: n[4] } : (n = hn.hsl.exec(e), n ? { h: n[1], s: n[2], l: n[3] } : (n = hn.hsla.exec(e), n ? { h: n[1], s: n[2], l: n[3], a: n[4] } : (n = hn.hsv.exec(e), n ? { h: n[1], s: n[2], v: n[3] } : (n = hn.hsva.exec(e), n ? { h: n[1], s: n[2], v: n[3], a: n[4] } : (n = hn.hex8.exec(e), n ? {
    r: an(n[1]),
    g: an(n[2]),
    b: an(n[3]),
    a: Ec(n[4]),
    format: t ? "name" : "hex8"
  } : (n = hn.hex6.exec(e), n ? {
    r: an(n[1]),
    g: an(n[2]),
    b: an(n[3]),
    format: t ? "name" : "hex"
  } : (n = hn.hex4.exec(e), n ? {
    r: an(n[1] + n[1]),
    g: an(n[2] + n[2]),
    b: an(n[3] + n[3]),
    a: Ec(n[4] + n[4]),
    format: t ? "name" : "hex8"
  } : (n = hn.hex3.exec(e), n ? {
    r: an(n[1] + n[1]),
    g: an(n[2] + n[2]),
    b: an(n[3] + n[3]),
    format: t ? "name" : "hex"
  } : !1)))))))));
}
function zn(e) {
  return !!hn.CSS_UNIT.exec(String(e));
}
var _t = (
  /** @class */
  function() {
    function e(t, n) {
      t === void 0 && (t = ""), n === void 0 && (n = {});
      var r;
      if (t instanceof e)
        return t;
      typeof t == "number" && (t = H0(t)), this.originalInput = t;
      var a = Lr(t);
      this.originalInput = t, this.r = a.r, this.g = a.g, this.b = a.b, this.a = a.a, this.roundA = Math.round(100 * this.a) / 100, this.format = (r = n.format) !== null && r !== void 0 ? r : a.format, this.gradientType = n.gradientType, this.r < 1 && (this.r = Math.round(this.r)), this.g < 1 && (this.g = Math.round(this.g)), this.b < 1 && (this.b = Math.round(this.b)), this.isValid = a.ok;
    }
    return e.prototype.isDark = function() {
      return this.getBrightness() < 128;
    }, e.prototype.isLight = function() {
      return !this.isDark();
    }, e.prototype.getBrightness = function() {
      var t = this.toRgb();
      return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3;
    }, e.prototype.getLuminance = function() {
      var t = this.toRgb(), n, r, a, o = t.r / 255, i = t.g / 255, s = t.b / 255;
      return o <= 0.03928 ? n = o / 12.92 : n = Math.pow((o + 0.055) / 1.055, 2.4), i <= 0.03928 ? r = i / 12.92 : r = Math.pow((i + 0.055) / 1.055, 2.4), s <= 0.03928 ? a = s / 12.92 : a = Math.pow((s + 0.055) / 1.055, 2.4), 0.2126 * n + 0.7152 * r + 0.0722 * a;
    }, e.prototype.getAlpha = function() {
      return this.a;
    }, e.prototype.setAlpha = function(t) {
      return this.a = cf(t), this.roundA = Math.round(100 * this.a) / 100, this;
    }, e.prototype.isMonochrome = function() {
      var t = this.toHsl().s;
      return t === 0;
    }, e.prototype.toHsv = function() {
      var t = ms(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
    }, e.prototype.toHsvString = function() {
      var t = ms(this.r, this.g, this.b), n = Math.round(t.h * 360), r = Math.round(t.s * 100), a = Math.round(t.v * 100);
      return this.a === 1 ? "hsv(".concat(n, ", ").concat(r, "%, ").concat(a, "%)") : "hsva(".concat(n, ", ").concat(r, "%, ").concat(a, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHsl = function() {
      var t = wc(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
    }, e.prototype.toHslString = function() {
      var t = wc(this.r, this.g, this.b), n = Math.round(t.h * 360), r = Math.round(t.s * 100), a = Math.round(t.l * 100);
      return this.a === 1 ? "hsl(".concat(n, ", ").concat(r, "%, ").concat(a, "%)") : "hsla(".concat(n, ", ").concat(r, "%, ").concat(a, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHex = function(t) {
      return t === void 0 && (t = !1), gs(this.r, this.g, this.b, t);
    }, e.prototype.toHexString = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex(t);
    }, e.prototype.toHex8 = function(t) {
      return t === void 0 && (t = !1), B0(this.r, this.g, this.b, this.a, t);
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
      var t = Math.round(this.r), n = Math.round(this.g), r = Math.round(this.b);
      return this.a === 1 ? "rgb(".concat(t, ", ").concat(n, ", ").concat(r, ")") : "rgba(".concat(t, ", ").concat(n, ", ").concat(r, ", ").concat(this.roundA, ")");
    }, e.prototype.toPercentageRgb = function() {
      var t = function(n) {
        return "".concat(Math.round(Bt(n, 255) * 100), "%");
      };
      return {
        r: t(this.r),
        g: t(this.g),
        b: t(this.b),
        a: this.a
      };
    }, e.prototype.toPercentageRgbString = function() {
      var t = function(n) {
        return Math.round(Bt(n, 255) * 100);
      };
      return this.a === 1 ? "rgb(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%)") : "rgba(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%, ").concat(this.roundA, ")");
    }, e.prototype.toName = function() {
      if (this.a === 0)
        return "transparent";
      if (this.a < 1)
        return !1;
      for (var t = "#" + gs(this.r, this.g, this.b, !1), n = 0, r = Object.entries(ps); n < r.length; n++) {
        var a = r[n], o = a[0], i = a[1];
        if (t === i)
          return o;
      }
      return !1;
    }, e.prototype.toString = function(t) {
      var n = !!t;
      t = t ?? this.format;
      var r = !1, a = this.a < 1 && this.a >= 0, o = !n && a && (t.startsWith("hex") || t === "name");
      return o ? t === "name" && this.a === 0 ? this.toName() : this.toRgbString() : (t === "rgb" && (r = this.toRgbString()), t === "prgb" && (r = this.toPercentageRgbString()), (t === "hex" || t === "hex6") && (r = this.toHexString()), t === "hex3" && (r = this.toHexString(!0)), t === "hex4" && (r = this.toHex8String(!0)), t === "hex8" && (r = this.toHex8String()), t === "name" && (r = this.toName()), t === "hsl" && (r = this.toHslString()), t === "hsv" && (r = this.toHsvString()), r || this.toHexString());
    }, e.prototype.toNumber = function() {
      return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
    }, e.prototype.clone = function() {
      return new e(this.toString());
    }, e.prototype.lighten = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.l += t / 100, n.l = eo(n.l), new e(n);
    }, e.prototype.brighten = function(t) {
      t === void 0 && (t = 10);
      var n = this.toRgb();
      return n.r = Math.max(0, Math.min(255, n.r - Math.round(255 * -(t / 100)))), n.g = Math.max(0, Math.min(255, n.g - Math.round(255 * -(t / 100)))), n.b = Math.max(0, Math.min(255, n.b - Math.round(255 * -(t / 100)))), new e(n);
    }, e.prototype.darken = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.l -= t / 100, n.l = eo(n.l), new e(n);
    }, e.prototype.tint = function(t) {
      return t === void 0 && (t = 10), this.mix("white", t);
    }, e.prototype.shade = function(t) {
      return t === void 0 && (t = 10), this.mix("black", t);
    }, e.prototype.desaturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s -= t / 100, n.s = eo(n.s), new e(n);
    }, e.prototype.saturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s += t / 100, n.s = eo(n.s), new e(n);
    }, e.prototype.greyscale = function() {
      return this.desaturate(100);
    }, e.prototype.spin = function(t) {
      var n = this.toHsl(), r = (n.h + t) % 360;
      return n.h = r < 0 ? 360 + r : r, new e(n);
    }, e.prototype.mix = function(t, n) {
      n === void 0 && (n = 50);
      var r = this.toRgb(), a = new e(t).toRgb(), o = n / 100, i = {
        r: (a.r - r.r) * o + r.r,
        g: (a.g - r.g) * o + r.g,
        b: (a.b - r.b) * o + r.b,
        a: (a.a - r.a) * o + r.a
      };
      return new e(i);
    }, e.prototype.analogous = function(t, n) {
      t === void 0 && (t = 6), n === void 0 && (n = 30);
      var r = this.toHsl(), a = 360 / n, o = [this];
      for (r.h = (r.h - (a * t >> 1) + 720) % 360; --t; )
        r.h = (r.h + a) % 360, o.push(new e(r));
      return o;
    }, e.prototype.complement = function() {
      var t = this.toHsl();
      return t.h = (t.h + 180) % 360, new e(t);
    }, e.prototype.monochromatic = function(t) {
      t === void 0 && (t = 6);
      for (var n = this.toHsv(), r = n.h, a = n.s, o = n.v, i = [], s = 1 / t; t--; )
        i.push(new e({ h: r, s: a, v: o })), o = (o + s) % 1;
      return i;
    }, e.prototype.splitcomplement = function() {
      var t = this.toHsl(), n = t.h;
      return [
        this,
        new e({ h: (n + 72) % 360, s: t.s, l: t.l }),
        new e({ h: (n + 216) % 360, s: t.s, l: t.l })
      ];
    }, e.prototype.onBackground = function(t) {
      var n = this.toRgb(), r = new e(t).toRgb(), a = n.a + r.a * (1 - n.a);
      return new e({
        r: (n.r * n.a + r.r * r.a * (1 - n.a)) / a,
        g: (n.g * n.a + r.g * r.a * (1 - n.a)) / a,
        b: (n.b * n.a + r.b * r.a * (1 - n.a)) / a,
        a
      });
    }, e.prototype.triad = function() {
      return this.polyad(3);
    }, e.prototype.tetrad = function() {
      return this.polyad(4);
    }, e.prototype.polyad = function(t) {
      for (var n = this.toHsl(), r = n.h, a = [this], o = 360 / t, i = 1; i < t; i++)
        a.push(new e({ h: (r + i * o) % 360, s: n.s, l: n.l }));
      return a;
    }, e.prototype.equals = function(t) {
      return this.toRgbString() === new e(t).toRgbString();
    }, e;
  }()
), no = 2, xc = 0.16, G0 = 0.05, q0 = 0.05, X0 = 0.15, uf = 5, df = 4, Z0 = [{
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
function $c(e) {
  var t = e.r, n = e.g, r = e.b, a = ms(t, n, r);
  return {
    h: a.h * 360,
    s: a.s,
    v: a.v
  };
}
function ro(e) {
  var t = e.r, n = e.g, r = e.b;
  return "#".concat(gs(t, n, r, !1));
}
function Y0(e, t, n) {
  var r = n / 100, a = {
    r: (t.r - e.r) * r + e.r,
    g: (t.g - e.g) * r + e.g,
    b: (t.b - e.b) * r + e.b
  };
  return a;
}
function Oc(e, t, n) {
  var r;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? r = n ? Math.round(e.h) - no * t : Math.round(e.h) + no * t : r = n ? Math.round(e.h) + no * t : Math.round(e.h) - no * t, r < 0 ? r += 360 : r >= 360 && (r -= 360), r;
}
function Rc(e, t, n) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  var r;
  return n ? r = e.s - xc * t : t === df ? r = e.s + xc : r = e.s + G0 * t, r > 1 && (r = 1), n && t === uf && r > 0.1 && (r = 0.1), r < 0.06 && (r = 0.06), Number(r.toFixed(2));
}
function Pc(e, t, n) {
  var r;
  return n ? r = e.v + q0 * t : r = e.v - X0 * t, r > 1 && (r = 1), Number(r.toFixed(2));
}
function Ia(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = [], r = Lr(e), a = uf; a > 0; a -= 1) {
    var o = $c(r), i = ro(Lr({
      h: Oc(o, a, !0),
      s: Rc(o, a, !0),
      v: Pc(o, a, !0)
    }));
    n.push(i);
  }
  n.push(ro(r));
  for (var s = 1; s <= df; s += 1) {
    var l = $c(r), c = ro(Lr({
      h: Oc(l, s),
      s: Rc(l, s),
      v: Pc(l, s)
    }));
    n.push(c);
  }
  return t.theme === "dark" ? Z0.map(function(d) {
    var f = d.index, v = d.opacity, g = ro(Y0(Lr(t.backgroundColor || "#141414"), Lr(n[f]), v * 100));
    return g;
  }) : n;
}
var hs = ["#fffbe6", "#fff1b8", "#ffe58f", "#ffd666", "#ffc53d", "#faad14", "#d48806", "#ad6800", "#874d00", "#613400"];
hs.primary = hs[5];
var bs = ["#e6f4ff", "#bae0ff", "#91caff", "#69b1ff", "#4096ff", "#1677ff", "#0958d9", "#003eb3", "#002c8c", "#001d66"];
bs.primary = bs[5];
const ff = {
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
}, Na = Object.assign(Object.assign({}, ff), {
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
function Q0(e, t) {
  let {
    generateColorPalettes: n,
    generateNeutralColorPalettes: r
  } = t;
  const {
    colorSuccess: a,
    colorWarning: o,
    colorError: i,
    colorInfo: s,
    colorPrimary: l,
    colorBgBase: c,
    colorTextBase: d
  } = e, f = n(l), v = n(a), g = n(o), p = n(i), h = n(s), m = r(c, d), S = e.colorLink || e.colorInfo, b = n(S);
  return Object.assign(Object.assign({}, m), {
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
    colorErrorBg: p[1],
    colorErrorBgHover: p[2],
    colorErrorBgActive: p[3],
    colorErrorBorder: p[3],
    colorErrorBorderHover: p[4],
    colorErrorHover: p[5],
    colorError: p[6],
    colorErrorActive: p[7],
    colorErrorTextHover: p[8],
    colorErrorText: p[9],
    colorErrorTextActive: p[10],
    colorWarningBg: g[1],
    colorWarningBgHover: g[2],
    colorWarningBorder: g[3],
    colorWarningBorderHover: g[4],
    colorWarningHover: g[4],
    colorWarning: g[6],
    colorWarningActive: g[7],
    colorWarningTextHover: g[8],
    colorWarningText: g[9],
    colorWarningTextActive: g[10],
    colorInfoBg: h[1],
    colorInfoBgHover: h[2],
    colorInfoBorder: h[3],
    colorInfoBorderHover: h[4],
    colorInfoHover: h[4],
    colorInfo: h[6],
    colorInfoActive: h[7],
    colorInfoTextHover: h[8],
    colorInfoText: h[9],
    colorInfoTextActive: h[10],
    colorLinkHover: b[4],
    colorLink: b[6],
    colorLinkActive: b[7],
    colorBgMask: new _t("#000").setAlpha(0.45).toRgbString(),
    colorWhite: "#fff"
  });
}
const J0 = (e) => {
  let t = e, n = e, r = e, a = e;
  return e < 6 && e >= 5 ? t = e + 1 : e < 16 && e >= 6 ? t = e + 2 : e >= 16 && (t = 16), e < 7 && e >= 5 ? n = 4 : e < 8 && e >= 7 ? n = 5 : e < 14 && e >= 8 ? n = 6 : e < 16 && e >= 14 ? n = 7 : e >= 16 && (n = 8), e < 6 && e >= 2 ? r = 1 : e >= 6 && (r = 2), e > 4 && e < 8 ? a = 4 : e >= 8 && (a = 6), {
    borderRadius: e,
    borderRadiusXS: r,
    borderRadiusSM: n,
    borderRadiusLG: t,
    borderRadiusOuter: a
  };
};
function eh(e) {
  const {
    motionUnit: t,
    motionBase: n,
    borderRadius: r,
    lineWidth: a
  } = e;
  return Object.assign({
    // motion
    motionDurationFast: `${(n + t).toFixed(1)}s`,
    motionDurationMid: `${(n + t * 2).toFixed(1)}s`,
    motionDurationSlow: `${(n + t * 3).toFixed(1)}s`,
    // line
    lineWidthBold: a + 1
  }, J0(r));
}
const th = (e) => {
  const {
    controlHeight: t
  } = e;
  return {
    controlHeightSM: t * 0.75,
    controlHeightXS: t * 0.5,
    controlHeightLG: t * 1.25
  };
};
function Oo(e) {
  return (e + 8) / e;
}
function nh(e) {
  const t = new Array(10).fill(null).map((n, r) => {
    const a = r - 1, o = e * Math.pow(Math.E, a / 5), i = r > 1 ? Math.floor(o) : Math.ceil(o);
    return Math.floor(i / 2) * 2;
  });
  return t[1] = e, t.map((n) => ({
    size: n,
    lineHeight: Oo(n)
  }));
}
const rh = (e) => {
  const t = nh(e), n = t.map((d) => d.size), r = t.map((d) => d.lineHeight), a = n[1], o = n[0], i = n[2], s = r[1], l = r[0], c = r[2];
  return {
    fontSizeSM: o,
    fontSize: a,
    fontSizeLG: i,
    fontSizeXL: n[3],
    fontSizeHeading1: n[6],
    fontSizeHeading2: n[5],
    fontSizeHeading3: n[4],
    fontSizeHeading4: n[3],
    fontSizeHeading5: n[2],
    lineHeight: s,
    lineHeightLG: c,
    lineHeightSM: l,
    fontHeight: Math.round(s * a),
    fontHeightLG: Math.round(c * i),
    fontHeightSM: Math.round(l * o),
    lineHeightHeading1: r[6],
    lineHeightHeading2: r[5],
    lineHeightHeading3: r[4],
    lineHeightHeading4: r[3],
    lineHeightHeading5: r[2]
  };
};
function ah(e) {
  const {
    sizeUnit: t,
    sizeStep: n
  } = e;
  return {
    sizeXXL: t * (n + 8),
    // 48
    sizeXL: t * (n + 4),
    // 32
    sizeLG: t * (n + 2),
    // 24
    sizeMD: t * (n + 1),
    // 20
    sizeMS: t * n,
    // 16
    size: t * n,
    // 16
    sizeSM: t * (n - 1),
    // 12
    sizeXS: t * (n - 2),
    // 8
    sizeXXS: t * (n - 3)
    // 4
  };
}
const Vn = (e, t) => new _t(e).setAlpha(t).toRgbString(), fa = (e, t) => new _t(e).darken(t).toHexString(), oh = (e) => {
  const t = Ia(e);
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
}, ih = (e, t) => {
  const n = e || "#fff", r = t || "#000";
  return {
    colorBgBase: n,
    colorTextBase: r,
    colorText: Vn(r, 0.88),
    colorTextSecondary: Vn(r, 0.65),
    colorTextTertiary: Vn(r, 0.45),
    colorTextQuaternary: Vn(r, 0.25),
    colorFill: Vn(r, 0.15),
    colorFillSecondary: Vn(r, 0.06),
    colorFillTertiary: Vn(r, 0.04),
    colorFillQuaternary: Vn(r, 0.02),
    colorBgLayout: fa(n, 4),
    colorBgContainer: fa(n, 0),
    colorBgElevated: fa(n, 0),
    colorBgSpotlight: Vn(r, 0.85),
    colorBgBlur: "transparent",
    colorBorder: fa(n, 15),
    colorBorderSecondary: fa(n, 6)
  };
};
function sh(e) {
  const t = Object.keys(ff).map((n) => {
    const r = Ia(e[n]);
    return new Array(10).fill(1).reduce((a, o, i) => (a[`${n}-${i + 1}`] = r[i], a[`${n}${i + 1}`] = r[i], a), {});
  }).reduce((n, r) => (n = Object.assign(Object.assign({}, n), r), n), {});
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, e), t), Q0(e, {
    generateColorPalettes: oh,
    generateNeutralColorPalettes: ih
  })), rh(e.fontSize)), ah(e)), th(e)), eh(e));
}
const vf = is(sh), ys = {
  token: Na,
  override: {
    override: Na
  },
  hashed: !0
}, mf = /* @__PURE__ */ D.createContext(ys), gf = "anticon", lh = ["outlined", "borderless", "filled"], ch = (e, t) => t || (e ? `ant-${e}` : "ant"), vt = /* @__PURE__ */ u.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: ch,
  iconPrefixCls: gf
}), uh = `-ant-${Date.now()}-${Math.random()}`;
function dh(e, t) {
  const n = {}, r = (i, s) => {
    let l = i.clone();
    return l = (s == null ? void 0 : s(l)) || l, l.toRgbString();
  }, a = (i, s) => {
    const l = new _t(i), c = Ia(l.toRgbString());
    n[`${s}-color`] = r(l), n[`${s}-color-disabled`] = c[1], n[`${s}-color-hover`] = c[4], n[`${s}-color-active`] = c[6], n[`${s}-color-outline`] = l.clone().setAlpha(0.2).toRgbString(), n[`${s}-color-deprecated-bg`] = c[0], n[`${s}-color-deprecated-border`] = c[2];
  };
  if (t.primaryColor) {
    a(t.primaryColor, "primary");
    const i = new _t(t.primaryColor), s = Ia(i.toRgbString());
    s.forEach((c, d) => {
      n[`primary-${d + 1}`] = c;
    }), n["primary-color-deprecated-l-35"] = r(i, (c) => c.lighten(35)), n["primary-color-deprecated-l-20"] = r(i, (c) => c.lighten(20)), n["primary-color-deprecated-t-20"] = r(i, (c) => c.tint(20)), n["primary-color-deprecated-t-50"] = r(i, (c) => c.tint(50)), n["primary-color-deprecated-f-12"] = r(i, (c) => c.setAlpha(c.getAlpha() * 0.12));
    const l = new _t(s[0]);
    n["primary-color-active-deprecated-f-30"] = r(l, (c) => c.setAlpha(c.getAlpha() * 0.3)), n["primary-color-active-deprecated-d-02"] = r(l, (c) => c.darken(2));
  }
  return t.successColor && a(t.successColor, "success"), t.warningColor && a(t.warningColor, "warning"), t.errorColor && a(t.errorColor, "error"), t.infoColor && a(t.infoColor, "info"), `
  :root {
    ${Object.keys(n).map((i) => `--${e}-${i}: ${n[i]};`).join(`
`)}
  }
  `.trim();
}
function fh(e, t) {
  const n = dh(e, t);
  Jt() ? Wn(n, `${uh}-dynamic-theme`) : process.env.NODE_ENV !== "production" && ea(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
}
const Gr = /* @__PURE__ */ u.createContext(!1), vh = (e) => {
  let {
    children: t,
    disabled: n
  } = e;
  const r = u.useContext(Gr);
  return /* @__PURE__ */ u.createElement(Gr.Provider, {
    value: n ?? r
  }, t);
}, qr = /* @__PURE__ */ u.createContext(void 0), mh = (e) => {
  let {
    children: t,
    size: n
  } = e;
  const r = u.useContext(qr);
  return /* @__PURE__ */ u.createElement(qr.Provider, {
    value: n || r
  }, t);
};
function gh() {
  const e = Nt(Gr), t = Nt(qr);
  return {
    componentDisabled: e,
    componentSize: t
  };
}
const Lo = ["blue", "purple", "cyan", "green", "magenta", "pink", "red", "orange", "yellow", "volcano", "geekblue", "lime", "gold"], ph = "5.19.0";
function Oi(e) {
  return e >= 0 && e <= 255;
}
function ao(e, t) {
  const {
    r: n,
    g: r,
    b: a,
    a: o
  } = new _t(e).toRgb();
  if (o < 1)
    return e;
  const {
    r: i,
    g: s,
    b: l
  } = new _t(t).toRgb();
  for (let c = 0.01; c <= 1; c += 0.01) {
    const d = Math.round((n - i * (1 - c)) / c), f = Math.round((r - s * (1 - c)) / c), v = Math.round((a - l * (1 - c)) / c);
    if (Oi(d) && Oi(f) && Oi(v))
      return new _t({
        r: d,
        g: f,
        b: v,
        a: Math.round(c * 100) / 100
      }).toRgbString();
  }
  return new _t({
    r: n,
    g: r,
    b: a,
    a: 1
  }).toRgbString();
}
var hh = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
    t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
function pf(e) {
  const {
    override: t
  } = e, n = hh(e, ["override"]), r = Object.assign({}, t);
  Object.keys(Na).forEach((v) => {
    delete r[v];
  });
  const a = Object.assign(Object.assign({}, n), r), o = 480, i = 576, s = 768, l = 992, c = 1200, d = 1600;
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
    colorSplit: ao(a.colorBorderSecondary, a.colorBgContainer),
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
    colorErrorOutline: ao(a.colorErrorBg, a.colorBgContainer),
    colorWarningOutline: ao(a.colorWarningBg, a.colorBgContainer),
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
    controlOutline: ao(a.colorPrimaryBg, a.colorBgContainer),
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
      0 1px 2px -2px ${new _t("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new _t("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new _t("rgba(0, 0, 0, 0.09)").toRgbString()}
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
  }), r);
}
var _c = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
    t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
const hf = {
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
}, bf = {
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
}, bh = {
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
}, yf = (e, t, n) => {
  const r = n.getDerivativeToken(e), {
    override: a
  } = t, o = _c(t, ["override"]);
  let i = Object.assign(Object.assign({}, r), {
    override: a
  });
  return i = pf(i), o && Object.entries(o).forEach((s) => {
    let [l, c] = s;
    const {
      theme: d
    } = c, f = _c(c, ["theme"]);
    let v = f;
    d && (v = yf(Object.assign(Object.assign({}, i), f), {
      override: f
    }, d)), i[l] = v;
  }), i;
};
function Mn() {
  const {
    token: e,
    hashed: t,
    theme: n,
    override: r,
    cssVar: a
  } = D.useContext(mf), o = `${ph}-${t || ""}`, i = n || vf, [s, l, c] = Zp(i, [Na, e], {
    salt: o,
    override: r,
    getComputedToken: yf,
    // formatToken will not be consumed after 1.15.0 with getComputedToken.
    // But token will break if @ant-design/cssinjs is under 1.15.0 without it
    formatToken: pf,
    cssVar: a && {
      prefix: a.prefix,
      key: a.key,
      unitless: hf,
      ignore: bf,
      preserve: bh
    }
  });
  return [i, c, t ? l : "", s, a];
}
function Gt(e) {
  var t = u.useRef();
  t.current = e;
  var n = u.useCallback(function() {
    for (var r, a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return (r = t.current) === null || r === void 0 ? void 0 : r.call.apply(r, [t].concat(o));
  }, []);
  return n;
}
function Ma(e) {
  var t = u.useRef(!1), n = u.useState(e), r = K(n, 2), a = r[0], o = r[1];
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
function Ri(e) {
  return e !== void 0;
}
function en(e, t) {
  var n = t || {}, r = n.defaultValue, a = n.value, o = n.onChange, i = n.postState, s = Ma(function() {
    return Ri(a) ? a : Ri(r) ? typeof r == "function" ? r() : r : typeof e == "function" ? e() : e;
  }), l = K(s, 2), c = l[0], d = l[1], f = a !== void 0 ? a : c, v = i ? i(f) : f, g = Gt(o), p = Ma([f]), h = K(p, 2), m = h[0], S = h[1];
  ls(function() {
    var y = m[0];
    c !== y && g(c, y);
  }, [m]), ls(function() {
    Ri(a) || d(a);
  }, [a]);
  var b = Gt(function(y, w) {
    d(y, w), S([f], w);
  });
  return [v, b];
}
const yh = 1e3 * 60 * 10;
let Ch = /* @__PURE__ */ function() {
  function e() {
    kt(this, e), this.map = /* @__PURE__ */ new Map(), this.objectIDMap = /* @__PURE__ */ new WeakMap(), this.nextID = 0, this.lastAccessBeat = /* @__PURE__ */ new Map(), this.accessBeat = 0;
  }
  return Ht(e, [{
    key: "set",
    value: function(n, r) {
      this.clear();
      const a = this.getCompositeKey(n);
      this.map.set(a, r), this.lastAccessBeat.set(a, Date.now());
    }
  }, {
    key: "get",
    value: function(n) {
      const r = this.getCompositeKey(n), a = this.map.get(r);
      return this.lastAccessBeat.set(r, Date.now()), this.accessBeat += 1, a;
    }
  }, {
    key: "getCompositeKey",
    value: function(n) {
      return n.map((a) => a && typeof a == "object" ? `obj_${this.getObjectID(a)}` : `${typeof a}_${a}`).join("|");
    }
  }, {
    key: "getObjectID",
    value: function(n) {
      if (this.objectIDMap.has(n))
        return this.objectIDMap.get(n);
      const r = this.nextID;
      return this.objectIDMap.set(n, r), this.nextID += 1, r;
    }
  }, {
    key: "clear",
    value: function() {
      if (this.accessBeat > 1e4) {
        const n = Date.now();
        this.lastAccessBeat.forEach((r, a) => {
          n - r > yh && (this.map.delete(a), this.lastAccessBeat.delete(a));
        }), this.accessBeat = 0;
      }
    }
  }]);
}();
const Tc = new Ch();
function Sh(e, t) {
  return D.useMemo(() => {
    const n = Tc.get(t);
    if (n)
      return n;
    const r = e();
    return Tc.set(t, r), r;
  }, t);
}
const Cf = (e) => ({
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
}), ei = {
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis"
}, sr = function(e) {
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
}, wh = () => ({
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
}), Da = () => ({
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
}), Eh = (e) => ({
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
}), xh = (e, t, n, r) => {
  const a = `[class^="${t}"], [class*=" ${t}"]`, o = n ? `.${n}` : a, i = {
    boxSizing: "border-box",
    "&::before, &::after": {
      boxSizing: "border-box"
    }
  };
  let s = {};
  return r !== !1 && (s = {
    fontFamily: e.fontFamily,
    fontSize: e.fontSize
  }), {
    [o]: Object.assign(Object.assign(Object.assign({}, s), i), {
      [a]: i
    })
  };
}, $h = (e) => ({
  outline: `${ee(e.lineWidthFocus)} solid ${e.colorPrimaryBorder}`,
  outlineOffset: 1,
  transition: "outline-offset 0s, outline 0s"
}), ti = (e) => ({
  "&:focus-visible": Object.assign({}, $h(e))
});
function Oh(e) {
  return e === "js" ? {
    max: Math.max,
    min: Math.min
  } : {
    max: function() {
      for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
        n[r] = arguments[r];
      return `max(${n.map((a) => ee(a)).join(",")})`;
    },
    min: function() {
      for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
        n[r] = arguments[r];
      return `min(${n.map((a) => ee(a)).join(",")})`;
    }
  };
}
const Sf = process.env.NODE_ENV !== "production" || typeof CSSINJS_STATISTIC < "u";
let Cs = !0;
function jt() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  if (!Sf)
    return Object.assign.apply(Object, [{}].concat(t));
  Cs = !1;
  const r = {};
  return t.forEach((a) => {
    Object.keys(a).forEach((i) => {
      Object.defineProperty(r, i, {
        configurable: !0,
        enumerable: !0,
        get: () => a[i]
      });
    });
  }), Cs = !0, r;
}
const Ic = {};
function Rh() {
}
const Ph = (e) => {
  let t, n = e, r = Rh;
  return Sf && typeof Proxy < "u" && (t = /* @__PURE__ */ new Set(), n = new Proxy(e, {
    get(a, o) {
      return Cs && t.add(o), a[o];
    }
  }), r = (a, o) => {
    var i;
    Ic[a] = {
      global: Array.from(t),
      component: Object.assign(Object.assign({}, (i = Ic[a]) === null || i === void 0 ? void 0 : i.component), o)
    };
  }), {
    token: n,
    keys: t,
    flush: r
  };
}, wf = (e, t) => {
  const [n, r] = Mn();
  return vs({
    theme: n,
    token: r,
    hashId: "",
    path: ["ant-design-icons", e],
    nonce: () => t == null ? void 0 : t.nonce,
    layer: {
      name: "antd"
    }
  }, () => [{
    [`.${e}`]: Object.assign(Object.assign({}, wh()), {
      [`.${e} .${e}-icon`]: {
        display: "block"
      }
    })
  }]);
}, Ef = (e, t, n) => {
  var r;
  return typeof n == "function" ? n(jt(t, (r = t[e]) !== null && r !== void 0 ? r : {})) : n ?? {};
}, xf = (e, t, n, r) => {
  const a = Object.assign({}, t[e]);
  if (r != null && r.deprecatedTokens) {
    const {
      deprecatedTokens: i
    } = r;
    i.forEach((s) => {
      let [l, c] = s;
      var d;
      process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && ct(!(a != null && a[l]), `Component Token \`${String(l)}\` of ${e} is deprecated. Please use \`${String(c)}\` instead.`), (a != null && a[l] || a != null && a[c]) && ((d = a[c]) !== null && d !== void 0 || (a[c] = a == null ? void 0 : a[l]));
    });
  }
  const o = Object.assign(Object.assign({}, n), a);
  return Object.keys(o).forEach((i) => {
    o[i] === t[i] && delete o[i];
  }), o;
}, Nc = (e, t) => `${[t, e.replace(/([A-Z]+)([A-Z][a-z]+)/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2")].filter(Boolean).join("-")}`;
function fl(e, t, n) {
  let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
  const a = Array.isArray(e) ? e : [e, e], [o] = a, i = a.join("-");
  return function(s) {
    let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : s;
    const [c, d, f, v, g] = Mn(), {
      getPrefixCls: p,
      iconPrefixCls: h,
      csp: m
    } = Nt(vt), S = p(), b = g ? "css" : "js", y = Sh(() => {
      const x = /* @__PURE__ */ new Set();
      return g && Object.keys(r.unitless || {}).forEach((R) => {
        x.add(Co(R, g.prefix)), x.add(Co(R, Nc(o, g.prefix)));
      }), Op(b, x);
    }, [b, o, g == null ? void 0 : g.prefix]), {
      max: w,
      min: C
    } = Oh(b), O = {
      theme: c,
      token: v,
      hashId: f,
      nonce: () => m == null ? void 0 : m.nonce,
      clientOnly: r.clientOnly,
      layer: {
        name: "antd"
      },
      // antd is always at top of styles
      order: r.order || -999
    };
    return vs(Object.assign(Object.assign({}, O), {
      clientOnly: !1,
      path: ["Shared", S]
    }), () => [{
      // Link
      "&": Eh(v)
    }]), wf(h, m), [vs(Object.assign(Object.assign({}, O), {
      path: [i, s, h]
    }), () => {
      if (r.injectStyle === !1)
        return [];
      const {
        token: x,
        flush: R
      } = Ph(v), T = Ef(o, d, n), M = `.${s}`, j = xf(o, d, T, {
        deprecatedTokens: r.deprecatedTokens
      });
      g && Object.keys(T).forEach((k) => {
        T[k] = `var(${Co(k, Nc(o, g.prefix))})`;
      });
      const I = jt(x, {
        componentCls: M,
        prefixCls: s,
        iconCls: `.${h}`,
        antCls: `.${S}`,
        calc: y,
        // @ts-ignore
        max: w,
        // @ts-ignore
        min: C
      }, g ? T : j), _ = t(I, {
        hashId: f,
        prefixCls: s,
        rootPrefixCls: S,
        iconPrefixCls: h
      });
      return R(o, j), [r.resetStyle === !1 ? null : xh(I, s, l, r.resetFont), _];
    }), f];
  };
}
const vl = (e, t, n, r) => {
  const a = fl(e, t, n, Object.assign({
    resetStyle: !1,
    // Sub Style should default after root one
    order: -998
  }, r)), o = (i) => {
    let {
      prefixCls: s,
      rootCls: l = s
    } = i;
    return a(s, l), null;
  };
  return process.env.NODE_ENV !== "production" && (o.displayName = `SubStyle_${Array.isArray(e) ? e.join(".") : e}`), o;
}, _h = (e, t, n) => {
  const {
    unitless: r,
    injectStyle: a = !0,
    prefixToken: o
  } = n, i = (l) => {
    let {
      rootCls: c,
      cssVar: d
    } = l;
    const [, f] = Mn();
    return $0({
      path: [e],
      prefix: d.prefix,
      key: d == null ? void 0 : d.key,
      unitless: r,
      ignore: bf,
      token: f,
      scope: c
    }, () => {
      const v = Ef(e, f, t), g = xf(e, f, v, {
        deprecatedTokens: n == null ? void 0 : n.deprecatedTokens
      });
      return Object.keys(v).forEach((p) => {
        g[o(p)] = g[p], delete g[p];
      }), g;
    }), null;
  };
  return (l) => {
    const [, , , , c] = Mn();
    return [(d) => a && c ? /* @__PURE__ */ D.createElement(D.Fragment, null, /* @__PURE__ */ D.createElement(i, {
      rootCls: l,
      cssVar: c,
      component: e
    }), d) : d, c == null ? void 0 : c.key];
  };
}, Rn = (e, t, n, r) => {
  const a = Array.isArray(e) ? e[0] : e;
  function o(f) {
    return `${a}${f.slice(0, 1).toUpperCase()}${f.slice(1)}`;
  }
  const i = (r == null ? void 0 : r.unitless) || {}, s = Object.assign(Object.assign({}, hf), {
    [o("zIndexPopup")]: !0
  });
  Object.keys(i).forEach((f) => {
    s[o(f)] = i[f];
  });
  const l = Object.assign(Object.assign({}, r), {
    unitless: s,
    prefixToken: o
  }), c = fl(e, t, n, l), d = _h(a, n, l);
  return function(f) {
    let v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : f;
    const [, g] = c(f, v), [p, h] = d(v);
    return [p, g, h];
  };
};
function $f(e, t) {
  return Lo.reduce((n, r) => {
    const a = e[`${r}1`], o = e[`${r}3`], i = e[`${r}6`], s = e[`${r}7`];
    return Object.assign(Object.assign({}, n), t(r, {
      lightColor: a,
      lightBorderColor: o,
      darkColor: i,
      textColor: s
    }));
  }, {});
}
const Th = Object.assign({}, u), {
  useId: Mc
} = Th, Ih = () => "", Nh = typeof Mc > "u" ? Ih : Mc;
function Mh(e, t, n) {
  var r, a;
  const o = zt("ConfigProvider"), i = e || {}, s = i.inherit === !1 || !t ? Object.assign(Object.assign({}, ys), {
    hashed: (r = t == null ? void 0 : t.hashed) !== null && r !== void 0 ? r : ys.hashed,
    cssVar: t == null ? void 0 : t.cssVar
  }) : t, l = Nh();
  if (process.env.NODE_ENV !== "production") {
    const c = i.cssVar || s.cssVar, d = !!(typeof i.cssVar == "object" && (!((a = i.cssVar) === null || a === void 0) && a.key) || l);
    process.env.NODE_ENV !== "production" && o(!c || d, "breaking", "Missing key in `cssVar` config. Please upgrade to React 18 or set `cssVar.key` manually in each ConfigProvider inside `cssVar` enabled ConfigProvider.");
  }
  return Go(() => {
    var c, d;
    if (!e)
      return t;
    const f = Object.assign({}, s.components);
    Object.keys(e.components || {}).forEach((p) => {
      f[p] = Object.assign(Object.assign({}, f[p]), e.components[p]);
    });
    const v = `css-var-${l.replace(/:/g, "")}`, g = ((c = i.cssVar) !== null && c !== void 0 ? c : s.cssVar) && Object.assign(Object.assign(Object.assign({
      prefix: n == null ? void 0 : n.prefixCls
    }, typeof s.cssVar == "object" ? s.cssVar : {}), typeof i.cssVar == "object" ? i.cssVar : {}), {
      key: typeof i.cssVar == "object" && ((d = i.cssVar) === null || d === void 0 ? void 0 : d.key) || v
    });
    return Object.assign(Object.assign(Object.assign({}, s), i), {
      token: Object.assign(Object.assign({}, s.token), i.token),
      components: f,
      cssVar: g
    });
  }, [i, s], (c, d) => c.some((f, v) => {
    const g = d[v];
    return !Wr(f, g, !0);
  }));
}
var Ah = ["children"], Of = /* @__PURE__ */ u.createContext({});
function Lh(e) {
  var t = e.children, n = Ze(e, Ah);
  return /* @__PURE__ */ u.createElement(Of.Provider, {
    value: n
  }, t);
}
var jh = /* @__PURE__ */ function(e) {
  or(n, e);
  var t = ir(n);
  function n() {
    return kt(this, n), t.apply(this, arguments);
  }
  return Ht(n, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), n;
}(u.Component);
function Fh(e) {
  var t = u.useReducer(function(s) {
    return s + 1;
  }, 0), n = K(t, 2), r = n[1], a = u.useRef(e), o = Gt(function() {
    return a.current;
  }), i = Gt(function(s) {
    a.current = typeof s == "function" ? s(a.current) : s, r();
  });
  return [o, i];
}
var Jn = "none", oo = "appear", io = "enter", so = "leave", Ac = "none", yn = "prepare", Fr = "start", Dr = "active", ml = "end", Rf = "prepared";
function Lc(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit".concat(e)] = "webkit".concat(t), n["Moz".concat(e)] = "moz".concat(t), n["ms".concat(e)] = "MS".concat(t), n["O".concat(e)] = "o".concat(t.toLowerCase()), n;
}
function Dh(e, t) {
  var n = {
    animationend: Lc("Animation", "AnimationEnd"),
    transitionend: Lc("Transition", "TransitionEnd")
  };
  return e && ("AnimationEvent" in t || delete n.animationend.animation, "TransitionEvent" in t || delete n.transitionend.transition), n;
}
var zh = Dh(Jt(), typeof window < "u" ? window : {}), Pf = {};
if (Jt()) {
  var Vh = document.createElement("div");
  Pf = Vh.style;
}
var lo = {};
function _f(e) {
  if (lo[e])
    return lo[e];
  var t = zh[e];
  if (t)
    for (var n = Object.keys(t), r = n.length, a = 0; a < r; a += 1) {
      var o = n[a];
      if (Object.prototype.hasOwnProperty.call(t, o) && o in Pf)
        return lo[e] = t[o], lo[e];
    }
  return "";
}
var Tf = _f("animationend"), If = _f("transitionend"), Nf = !!(Tf && If), jc = Tf || "animationend", Fc = If || "transitionend";
function Dc(e, t) {
  if (!e) return null;
  if (ke(e) === "object") {
    var n = t.replace(/-\w/g, function(r) {
      return r[1].toUpperCase();
    });
    return e[n];
  }
  return "".concat(e, "-").concat(t);
}
const Bh = function(e) {
  var t = Me();
  function n(a) {
    a && (a.removeEventListener(Fc, e), a.removeEventListener(jc, e));
  }
  function r(a) {
    t.current && t.current !== a && n(t.current), a && a !== t.current && (a.addEventListener(Fc, e), a.addEventListener(jc, e), t.current = a);
  }
  return u.useEffect(function() {
    return function() {
      n(t.current);
    };
  }, []), [r, n];
};
var Mf = Jt() ? sd : ot;
const kh = function() {
  var e = u.useRef(null);
  function t() {
    Mt.cancel(e.current);
  }
  function n(r) {
    var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    t();
    var o = Mt(function() {
      a <= 1 ? r({
        isCanceled: function() {
          return o !== e.current;
        }
      }) : n(r, a - 1);
    });
    e.current = o;
  }
  return u.useEffect(function() {
    return function() {
      t();
    };
  }, []), [n, t];
};
var Hh = [yn, Fr, Dr, ml], Wh = [yn, Rf], Af = !1, Uh = !0;
function Lf(e) {
  return e === Dr || e === ml;
}
const Kh = function(e, t, n) {
  var r = Ma(Ac), a = K(r, 2), o = a[0], i = a[1], s = kh(), l = K(s, 2), c = l[0], d = l[1];
  function f() {
    i(yn, !0);
  }
  var v = t ? Wh : Hh;
  return Mf(function() {
    if (o !== Ac && o !== ml) {
      var g = v.indexOf(o), p = v[g + 1], h = n(o);
      h === Af ? i(p, !0) : p && c(function(m) {
        function S() {
          m.isCanceled() || i(p, !0);
        }
        h === !0 ? S() : Promise.resolve(h).then(S);
      });
    }
  }, [e, o]), u.useEffect(function() {
    return function() {
      d();
    };
  }, []), [f, o];
};
function Gh(e, t, n, r) {
  var a = r.motionEnter, o = a === void 0 ? !0 : a, i = r.motionAppear, s = i === void 0 ? !0 : i, l = r.motionLeave, c = l === void 0 ? !0 : l, d = r.motionDeadline, f = r.motionLeaveImmediately, v = r.onAppearPrepare, g = r.onEnterPrepare, p = r.onLeavePrepare, h = r.onAppearStart, m = r.onEnterStart, S = r.onLeaveStart, b = r.onAppearActive, y = r.onEnterActive, w = r.onLeaveActive, C = r.onAppearEnd, O = r.onEnterEnd, E = r.onLeaveEnd, x = r.onVisibleChanged, R = Ma(), T = K(R, 2), M = T[0], j = T[1], I = Fh(Jn), _ = K(I, 2), k = _[0], N = _[1], P = Ma(null), $ = K(P, 2), F = $[0], L = $[1], V = k(), W = Me(!1), U = Me(null);
  function G() {
    return n();
  }
  var Q = Me(!1);
  function q() {
    N(Jn), L(null, !0);
  }
  var Z = Gt(function(oe) {
    var se = k();
    if (se !== Jn) {
      var we = G();
      if (!(oe && !oe.deadline && oe.target !== we)) {
        var be = Q.current, ye;
        se === oo && be ? ye = C == null ? void 0 : C(we, oe) : se === io && be ? ye = O == null ? void 0 : O(we, oe) : se === so && be && (ye = E == null ? void 0 : E(we, oe)), be && ye !== !1 && q();
      }
    }
  }), re = Bh(Z), ae = K(re, 1), ue = ae[0], de = function(se) {
    switch (se) {
      case oo:
        return z(z(z({}, yn, v), Fr, h), Dr, b);
      case io:
        return z(z(z({}, yn, g), Fr, m), Dr, y);
      case so:
        return z(z(z({}, yn, p), Fr, S), Dr, w);
      default:
        return {};
    }
  }, ce = u.useMemo(function() {
    return de(V);
  }, [V]), ge = Kh(V, !e, function(oe) {
    if (oe === yn) {
      var se = ce[yn];
      return se ? se(G()) : Af;
    }
    if (ve in ce) {
      var we;
      L(((we = ce[ve]) === null || we === void 0 ? void 0 : we.call(ce, G(), null)) || null);
    }
    return ve === Dr && V !== Jn && (ue(G()), d > 0 && (clearTimeout(U.current), U.current = setTimeout(function() {
      Z({
        deadline: !0
      });
    }, d))), ve === Rf && q(), Uh;
  }), H = K(ge, 2), ne = H[0], ve = H[1], $e = Lf(ve);
  Q.current = $e, Mf(function() {
    j(t);
    var oe = W.current;
    W.current = !0;
    var se;
    !oe && t && s && (se = oo), oe && t && o && (se = io), (oe && !t && c || !oe && f && !t && c) && (se = so);
    var we = de(se);
    se && (e || we[yn]) ? (N(se), ne()) : N(Jn);
  }, [t]), ot(function() {
    // Cancel appear
    (V === oo && !s || // Cancel enter
    V === io && !o || // Cancel leave
    V === so && !c) && N(Jn);
  }, [s, o, c]), ot(function() {
    return function() {
      W.current = !1, clearTimeout(U.current);
    };
  }, []);
  var pe = u.useRef(!1);
  ot(function() {
    M && (pe.current = !0), M !== void 0 && V === Jn && ((pe.current || M) && (x == null || x(M)), pe.current = !0);
  }, [M, V]);
  var ie = F;
  return ce[yn] && ve === Fr && (ie = B({
    transition: "none"
  }, ie)), [V, ve, ie, M ?? t];
}
function qh(e) {
  var t = e;
  ke(e) === "object" && (t = e.transitionSupport);
  function n(a, o) {
    return !!(a.motionName && t && o !== !1);
  }
  var r = /* @__PURE__ */ u.forwardRef(function(a, o) {
    var i = a.visible, s = i === void 0 ? !0 : i, l = a.removeOnLeave, c = l === void 0 ? !0 : l, d = a.forceRender, f = a.children, v = a.motionName, g = a.leavedClassName, p = a.eventProps, h = u.useContext(Of), m = h.motion, S = n(a, m), b = Me(), y = Me();
    function w() {
      try {
        return b.current instanceof HTMLElement ? b.current : yo(y.current);
      } catch {
        return null;
      }
    }
    var C = Gh(S, s, w, a), O = K(C, 4), E = O[0], x = O[1], R = O[2], T = O[3], M = u.useRef(T);
    T && (M.current = !0);
    var j = u.useCallback(function(F) {
      b.current = F, nl(o, F);
    }, [o]), I, _ = B(B({}, p), {}, {
      visible: s
    });
    if (!f)
      I = null;
    else if (E === Jn)
      T ? I = f(B({}, _), j) : !c && M.current && g ? I = f(B(B({}, _), {}, {
        className: g
      }), j) : d || !c && !g ? I = f(B(B({}, _), {}, {
        style: {
          display: "none"
        }
      }), j) : I = null;
    else {
      var k;
      x === yn ? k = "prepare" : Lf(x) ? k = "active" : x === Fr && (k = "start");
      var N = Dc(v, "".concat(E, "-").concat(k));
      I = f(B(B({}, _), {}, {
        className: Y(Dc(v, E), z(z({}, N, N && k), v, typeof v == "string")),
        style: R
      }), j);
    }
    if (/* @__PURE__ */ u.isValidElement(I) && yr(I)) {
      var P = I, $ = P.ref;
      $ || (I = /* @__PURE__ */ u.cloneElement(I, {
        ref: j
      }));
    }
    return /* @__PURE__ */ u.createElement(jh, {
      ref: y
    }, I);
  });
  return r.displayName = "CSSMotion", r;
}
const Ln = qh(Nf);
var Ss = "add", ws = "keep", Es = "remove", Pi = "removed";
function Xh(e) {
  var t;
  return e && ke(e) === "object" && "key" in e ? t = e : t = {
    key: e
  }, B(B({}, t), {}, {
    key: String(t.key)
  });
}
function xs() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return e.map(Xh);
}
function Zh() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], n = [], r = 0, a = t.length, o = xs(e), i = xs(t);
  o.forEach(function(c) {
    for (var d = !1, f = r; f < a; f += 1) {
      var v = i[f];
      if (v.key === c.key) {
        r < f && (n = n.concat(i.slice(r, f).map(function(g) {
          return B(B({}, g), {}, {
            status: Ss
          });
        })), r = f), n.push(B(B({}, v), {}, {
          status: ws
        })), r += 1, d = !0;
        break;
      }
    }
    d || n.push(B(B({}, c), {}, {
      status: Es
    }));
  }), r < a && (n = n.concat(i.slice(r).map(function(c) {
    return B(B({}, c), {}, {
      status: Ss
    });
  })));
  var s = {};
  n.forEach(function(c) {
    var d = c.key;
    s[d] = (s[d] || 0) + 1;
  });
  var l = Object.keys(s).filter(function(c) {
    return s[c] > 1;
  });
  return l.forEach(function(c) {
    n = n.filter(function(d) {
      var f = d.key, v = d.status;
      return f !== c || v !== Es;
    }), n.forEach(function(d) {
      d.key === c && (d.status = ws);
    });
  }), n;
}
var Yh = ["component", "children", "onVisibleChanged", "onAllRemoved"], Qh = ["status"], Jh = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearPrepare", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
function eb(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ln, n = /* @__PURE__ */ function(r) {
    or(o, r);
    var a = ir(o);
    function o() {
      var i;
      kt(this, o);
      for (var s = arguments.length, l = new Array(s), c = 0; c < s; c++)
        l[c] = arguments[c];
      return i = a.call.apply(a, [this].concat(l)), z(tt(i), "state", {
        keyEntities: []
      }), z(tt(i), "removeKey", function(d) {
        var f = i.state.keyEntities, v = f.map(function(g) {
          return g.key !== d ? g : B(B({}, g), {}, {
            status: Pi
          });
        });
        return i.setState({
          keyEntities: v
        }), v.filter(function(g) {
          var p = g.status;
          return p !== Pi;
        }).length;
      }), i;
    }
    return Ht(o, [{
      key: "render",
      value: function() {
        var s = this, l = this.state.keyEntities, c = this.props, d = c.component, f = c.children, v = c.onVisibleChanged, g = c.onAllRemoved, p = Ze(c, Yh), h = d || u.Fragment, m = {};
        return Jh.forEach(function(S) {
          m[S] = p[S], delete p[S];
        }), delete p.keys, /* @__PURE__ */ u.createElement(h, p, l.map(function(S, b) {
          var y = S.status, w = Ze(S, Qh), C = y === Ss || y === ws;
          return /* @__PURE__ */ u.createElement(t, me({}, m, {
            key: w.key,
            visible: C,
            eventProps: w,
            onVisibleChanged: function(E) {
              if (v == null || v(E, {
                key: w.key
              }), !E) {
                var x = s.removeKey(w.key);
                x === 0 && g && g();
              }
            }
          }), function(O, E) {
            return f(B(B({}, O), {}, {
              index: b
            }), E);
          });
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function(s, l) {
        var c = s.keys, d = l.keyEntities, f = xs(c), v = Zh(d, f);
        return {
          keyEntities: v.filter(function(g) {
            var p = d.find(function(h) {
              var m = h.key;
              return g.key === m;
            });
            return !(p && p.status === Pi && g.status === Es);
          })
        };
      }
    }]), o;
  }(u.Component);
  return z(n, "defaultProps", {
    component: "div"
  }), n;
}
eb(Nf);
function tb(e) {
  const {
    children: t
  } = e, [, n] = Mn(), {
    motion: r
  } = n, a = u.useRef(!1);
  return a.current = a.current || r === !1, a.current ? /* @__PURE__ */ u.createElement(Lh, {
    motion: r
  }, t) : t;
}
const jf = /* @__PURE__ */ u.memo((e) => {
  let {
    dropdownMatchSelectWidth: t
  } = e;
  return zt("ConfigProvider").deprecated(t === void 0, "dropdownMatchSelectWidth", "popupMatchSelectWidth"), null;
});
process.env.NODE_ENV !== "production" && (jf.displayName = "PropWarning");
const nb = process.env.NODE_ENV !== "production" ? jf : () => null;
var rb = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
    t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
let $s = !1;
process.env.NODE_ENV;
const ab = ["getTargetContainer", "getPopupContainer", "renderEmpty", "input", "pagination", "form", "select", "button"], Ff = "ant";
let Df;
function ob() {
  return Df || Ff;
}
function ib(e) {
  return Object.keys(e).some((t) => t.endsWith("Color"));
}
const sb = (e) => {
  const {
    prefixCls: t,
    iconPrefixCls: n,
    theme: r,
    holderRender: a
  } = e;
  t !== void 0 && (Df = t), r && ib(r) && (process.env.NODE_ENV !== "production" && ea(!1, "ConfigProvider", "`config` of css variable theme is not work in v5. Please use new `theme` config instead."), fh(ob(), r));
}, lb = (e) => {
  const {
    children: t,
    csp: n,
    autoInsertSpaceInButton: r,
    alert: a,
    anchor: o,
    form: i,
    locale: s,
    componentSize: l,
    direction: c,
    space: d,
    virtual: f,
    dropdownMatchSelectWidth: v,
    popupMatchSelectWidth: g,
    popupOverflow: p,
    legacyLocale: h,
    parentContext: m,
    iconPrefixCls: S,
    theme: b,
    componentDisabled: y,
    segmented: w,
    statistic: C,
    spin: O,
    calendar: E,
    carousel: x,
    cascader: R,
    collapse: T,
    typography: M,
    checkbox: j,
    descriptions: I,
    divider: _,
    drawer: k,
    skeleton: N,
    steps: P,
    image: $,
    layout: F,
    list: L,
    mentions: V,
    modal: W,
    progress: U,
    result: G,
    slider: Q,
    breadcrumb: q,
    menu: Z,
    pagination: re,
    input: ae,
    textArea: ue,
    empty: de,
    badge: ce,
    radio: ge,
    rate: H,
    switch: ne,
    transfer: ve,
    avatar: $e,
    message: pe,
    tag: ie,
    table: oe,
    card: se,
    tabs: we,
    timeline: be,
    timePicker: ye,
    upload: _e,
    notification: Ee,
    tree: st,
    colorPicker: Ye,
    datePicker: xe,
    rangePicker: Oe,
    flex: te,
    wave: le,
    dropdown: Ie,
    warning: Ve,
    tour: Ke,
    floatButtonGroup: Ue,
    variant: Ae,
    inputNumber: fe,
    treeSelect: he
  } = e, je = u.useCallback((Je, et) => {
    const {
      prefixCls: ut
    } = e;
    if (et)
      return et;
    const St = ut || m.getPrefixCls("");
    return Je ? `${St}-${Je}` : St;
  }, [m.getPrefixCls, e.prefixCls]), Be = S || m.iconPrefixCls || gf, wt = n || m.csp;
  wf(Be, wt);
  const mt = Mh(b, m.theme, {
    prefixCls: je("")
  });
  process.env.NODE_ENV !== "production" && ($s = $s || !!mt);
  const Qe = {
    csp: wt,
    autoInsertSpaceInButton: r,
    alert: a,
    anchor: o,
    locale: s || h,
    direction: c,
    space: d,
    virtual: f,
    popupMatchSelectWidth: g ?? v,
    popupOverflow: p,
    getPrefixCls: je,
    iconPrefixCls: Be,
    theme: mt,
    segmented: w,
    statistic: C,
    spin: O,
    calendar: E,
    carousel: x,
    cascader: R,
    collapse: T,
    typography: M,
    checkbox: j,
    descriptions: I,
    divider: _,
    drawer: k,
    skeleton: N,
    steps: P,
    image: $,
    input: ae,
    textArea: ue,
    layout: F,
    list: L,
    mentions: V,
    modal: W,
    progress: U,
    result: G,
    slider: Q,
    breadcrumb: q,
    menu: Z,
    pagination: re,
    empty: de,
    badge: ce,
    radio: ge,
    rate: H,
    switch: ne,
    transfer: ve,
    avatar: $e,
    message: pe,
    tag: ie,
    table: oe,
    card: se,
    tabs: we,
    timeline: be,
    timePicker: ye,
    upload: _e,
    notification: Ee,
    tree: st,
    colorPicker: Ye,
    datePicker: xe,
    rangePicker: Oe,
    flex: te,
    wave: le,
    dropdown: Ie,
    warning: Ve,
    tour: Ke,
    floatButtonGroup: Ue,
    variant: Ae,
    inputNumber: fe,
    treeSelect: he
  };
  process.env.NODE_ENV !== "production" && zt("ConfigProvider")(!("autoInsertSpaceInButton" in e), "deprecated", "`autoInsertSpaceInButton` is deprecated. Please use `{ button: { autoInsertSpace: boolean }}` instead.");
  const Xe = Object.assign({}, m);
  Object.keys(Qe).forEach((Je) => {
    Qe[Je] !== void 0 && (Xe[Je] = Qe[Je]);
  }), ab.forEach((Je) => {
    const et = e[Je];
    et && (Xe[Je] = et);
  }), typeof r < "u" && (Xe.button = Object.assign({
    autoInsertSpace: r
  }, Xe.button));
  const Ge = Go(() => Xe, Xe, (Je, et) => {
    const ut = Object.keys(Je), St = Object.keys(et);
    return ut.length !== St.length || ut.some((At) => Je[At] !== et[At]);
  }), Fe = u.useMemo(() => ({
    prefixCls: Be,
    csp: wt
  }), [Be, wt]);
  let Te = /* @__PURE__ */ u.createElement(u.Fragment, null, /* @__PURE__ */ u.createElement(nb, {
    dropdownMatchSelectWidth: v
  }), t);
  const nt = u.useMemo(() => {
    var Je, et, ut, St;
    return jr(((Je = ar.Form) === null || Je === void 0 ? void 0 : Je.defaultValidateMessages) || {}, ((ut = (et = Ge.locale) === null || et === void 0 ? void 0 : et.Form) === null || ut === void 0 ? void 0 : ut.defaultValidateMessages) || {}, ((St = Ge.form) === null || St === void 0 ? void 0 : St.validateMessages) || {}, (i == null ? void 0 : i.validateMessages) || {});
  }, [Ge, i == null ? void 0 : i.validateMessages]);
  Object.keys(nt).length > 0 && (Te = /* @__PURE__ */ u.createElement(I0.Provider, {
    value: nt
  }, Te)), s && (Te = /* @__PURE__ */ u.createElement(lf, {
    locale: s,
    _ANT_MARK__: sf
  }, Te)), (Be || wt) && (Te = /* @__PURE__ */ u.createElement(ul.Provider, {
    value: Fe
  }, Te)), l && (Te = /* @__PURE__ */ u.createElement(mh, {
    size: l
  }, Te)), Te = /* @__PURE__ */ u.createElement(tb, null, Te);
  const Ct = u.useMemo(() => {
    const Je = mt || {}, {
      algorithm: et,
      token: ut,
      components: St,
      cssVar: At
    } = Je, Wt = rb(Je, ["algorithm", "token", "components", "cssVar"]), qt = et && (!Array.isArray(et) || et.length > 0) ? is(et) : vf, A = {};
    Object.entries(St || {}).forEach((J) => {
      let [Ce, De] = J;
      const Le = Object.assign({}, De);
      "algorithm" in Le && (Le.algorithm === !0 ? Le.theme = qt : (Array.isArray(Le.algorithm) || typeof Le.algorithm == "function") && (Le.theme = is(Le.algorithm)), delete Le.algorithm), A[Ce] = Le;
    });
    const X = Object.assign(Object.assign({}, Na), ut);
    return Object.assign(Object.assign({}, Wt), {
      theme: qt,
      token: X,
      components: A,
      override: Object.assign({
        override: X
      }, A),
      cssVar: At
    });
  }, [mt]);
  return b && (Te = /* @__PURE__ */ u.createElement(mf.Provider, {
    value: Ct
  }, Te)), Ge.warning && (Te = /* @__PURE__ */ u.createElement(af.Provider, {
    value: Ge.warning
  }, Te)), y !== void 0 && (Te = /* @__PURE__ */ u.createElement(vh, {
    disabled: y
  }, Te)), /* @__PURE__ */ u.createElement(vt.Provider, {
    value: Ge
  }, Te);
}, Cr = (e) => {
  const t = u.useContext(vt), n = u.useContext(dl);
  return /* @__PURE__ */ u.createElement(lb, Object.assign({
    parentContext: t,
    legacyLocale: n
  }, e));
};
Cr.ConfigContext = vt;
Cr.SizeContext = qr;
Cr.config = sb;
Cr.useConfig = gh;
Object.defineProperty(Cr, "SizeContext", {
  get: () => (process.env.NODE_ENV !== "production" && ea(!1, "ConfigProvider", "ConfigProvider.SizeContext is deprecated. Please use `ConfigProvider.useConfig().componentSize` instead."), qr)
});
process.env.NODE_ENV !== "production" && (Cr.displayName = "ConfigProvider");
function zf(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
}
function cb(e) {
  return zf(e) instanceof ShadowRoot;
}
function jo(e) {
  return cb(e) ? zf(e) : null;
}
function ub(e) {
  return e.replace(/-(.)/g, function(t, n) {
    return n.toUpperCase();
  });
}
function db(e, t) {
  ct(e, "[@ant-design/icons] ".concat(t));
}
function zc(e) {
  return ke(e) === "object" && typeof e.name == "string" && typeof e.theme == "string" && (ke(e.icon) === "object" || typeof e.icon == "function");
}
function Vc() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.keys(e).reduce(function(t, n) {
    var r = e[n];
    switch (n) {
      case "class":
        t.className = r, delete t.class;
        break;
      default:
        delete t[n], t[ub(n)] = r;
    }
    return t;
  }, {});
}
function Os(e, t, n) {
  return n ? /* @__PURE__ */ D.createElement(e.tag, B(B({
    key: t
  }, Vc(e.attrs)), n), (e.children || []).map(function(r, a) {
    return Os(r, "".concat(t, "-").concat(e.tag, "-").concat(a));
  })) : /* @__PURE__ */ D.createElement(e.tag, B({
    key: t
  }, Vc(e.attrs)), (e.children || []).map(function(r, a) {
    return Os(r, "".concat(t, "-").concat(e.tag, "-").concat(a));
  }));
}
function Vf(e) {
  return Ia(e)[0];
}
function Bf(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
var fb = `
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
`, vb = function(t) {
  var n = Nt(ul), r = n.csp, a = n.prefixCls, o = fb;
  a && (o = o.replace(/anticon/g, a)), ot(function() {
    var i = t.current, s = jo(i);
    Wn(o, "@ant-design-icons", {
      prepend: !0,
      csp: r,
      attachTo: s
    });
  }, []);
}, mb = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"], Sa = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function gb(e) {
  var t = e.primaryColor, n = e.secondaryColor;
  Sa.primaryColor = t, Sa.secondaryColor = n || Vf(t), Sa.calculated = !!n;
}
function pb() {
  return B({}, Sa);
}
var ta = function(t) {
  var n = t.icon, r = t.className, a = t.onClick, o = t.style, i = t.primaryColor, s = t.secondaryColor, l = Ze(t, mb), c = u.useRef(), d = Sa;
  if (i && (d = {
    primaryColor: i,
    secondaryColor: s || Vf(i)
  }), vb(c), db(zc(n), "icon should be icon definiton, but got ".concat(n)), !zc(n))
    return null;
  var f = n;
  return f && typeof f.icon == "function" && (f = B(B({}, f), {}, {
    icon: f.icon(d.primaryColor, d.secondaryColor)
  })), Os(f.icon, "svg-".concat(f.name), B(B({
    className: r,
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
ta.displayName = "IconReact";
ta.getTwoToneColors = pb;
ta.setTwoToneColors = gb;
function kf(e) {
  var t = Bf(e), n = K(t, 2), r = n[0], a = n[1];
  return ta.setTwoToneColors({
    primaryColor: r,
    secondaryColor: a
  });
}
function hb() {
  var e = ta.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var bb = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
kf(bs.primary);
var Tt = /* @__PURE__ */ u.forwardRef(function(e, t) {
  var n = e.className, r = e.icon, a = e.spin, o = e.rotate, i = e.tabIndex, s = e.onClick, l = e.twoToneColor, c = Ze(e, bb), d = u.useContext(ul), f = d.prefixCls, v = f === void 0 ? "anticon" : f, g = d.rootClassName, p = Y(g, v, z(z({}, "".concat(v, "-").concat(r.name), !!r.name), "".concat(v, "-spin"), !!a || r.name === "loading"), n), h = i;
  h === void 0 && s && (h = -1);
  var m = o ? {
    msTransform: "rotate(".concat(o, "deg)"),
    transform: "rotate(".concat(o, "deg)")
  } : void 0, S = Bf(l), b = K(S, 2), y = b[0], w = b[1];
  return /* @__PURE__ */ u.createElement("span", me({
    role: "img",
    "aria-label": r.name
  }, c, {
    ref: t,
    tabIndex: h,
    onClick: s,
    className: p
  }), /* @__PURE__ */ u.createElement(ta, {
    icon: r,
    primaryColor: y,
    secondaryColor: w,
    style: m
  }));
});
Tt.displayName = "AntdIcon";
Tt.getTwoToneColor = hb;
Tt.setTwoToneColor = kf;
var yb = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z" } }] }, name: "close-circle", theme: "filled" }, Cb = function(t, n) {
  return /* @__PURE__ */ u.createElement(Tt, me({}, t, {
    ref: n,
    icon: yb
  }));
}, Hf = /* @__PURE__ */ u.forwardRef(Cb);
process.env.NODE_ENV !== "production" && (Hf.displayName = "CloseCircleFilled");
var Sb = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z" } }] }, name: "close", theme: "outlined" }, wb = function(t, n) {
  return /* @__PURE__ */ u.createElement(Tt, me({}, t, {
    ref: n,
    icon: Sb
  }));
}, ni = /* @__PURE__ */ u.forwardRef(wb);
process.env.NODE_ENV !== "production" && (ni.displayName = "CloseOutlined");
var Eb = `accept acceptCharset accessKey action allowFullScreen allowTransparency
    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge
    charSet checked classID className colSpan cols content contentEditable contextMenu
    controls coords crossOrigin data dateTime default defer dir disabled download draggable
    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder
    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity
    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media
    mediaGroup method min minLength multiple muted name noValidate nonce open
    optimum pattern placeholder poster preload radioGroup readOnly rel required
    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected
    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style
    summary tabIndex target title type useMap value width wmode wrap`, xb = `onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`, $b = "".concat(Eb, " ").concat(xb).split(/[\s\n]+/), Ob = "aria-", Rb = "data-";
function Bc(e, t) {
  return e.indexOf(t) === 0;
}
function gl(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n;
  t === !1 ? n = {
    aria: !0,
    data: !0,
    attr: !0
  } : t === !0 ? n = {
    aria: !0
  } : n = B({}, t);
  var r = {};
  return Object.keys(e).forEach(function(a) {
    // Aria
    (n.aria && (a === "role" || Bc(a, Ob)) || // Data
    n.data && Bc(a, Rb) || // Attr
    n.attr && $b.includes(a)) && (r[a] = e[a]);
  }), r;
}
function Wf(e) {
  return e && /* @__PURE__ */ D.isValidElement(e) && e.type === D.Fragment;
}
const Uf = (e, t, n) => /* @__PURE__ */ D.isValidElement(e) ? /* @__PURE__ */ D.cloneElement(e, typeof n == "function" ? n(e.props || {}) : n) : t;
function ri(e, t) {
  return Uf(e, e, t);
}
const za = (e) => {
  const [, , , , t] = Mn();
  return t ? `${e}-css-var` : "";
};
var Se = {
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
    var n = t.keyCode;
    if (t.altKey && !t.ctrlKey || t.metaKey || // Function keys don't generate text
    n >= Se.F1 && n <= Se.F12)
      return !1;
    switch (n) {
      case Se.ALT:
      case Se.CAPS_LOCK:
      case Se.CONTEXT_MENU:
      case Se.CTRL:
      case Se.DOWN:
      case Se.END:
      case Se.ESC:
      case Se.HOME:
      case Se.INSERT:
      case Se.LEFT:
      case Se.MAC_FF_META:
      case Se.META:
      case Se.NUMLOCK:
      case Se.NUM_CENTER:
      case Se.PAGE_DOWN:
      case Se.PAGE_UP:
      case Se.PAUSE:
      case Se.PRINT_SCREEN:
      case Se.RIGHT:
      case Se.SHIFT:
      case Se.UP:
      case Se.WIN_KEY:
      case Se.WIN_KEY_RIGHT:
        return !1;
      default:
        return !0;
    }
  },
  /**
   * whether character is entered.
   */
  isCharacterKey: function(t) {
    if (t >= Se.ZERO && t <= Se.NINE || t >= Se.NUM_ZERO && t <= Se.NUM_MULTIPLY || t >= Se.A && t <= Se.Z || window.navigator.userAgent.indexOf("WebKit") !== -1 && t === 0)
      return !0;
    switch (t) {
      case Se.SPACE:
      case Se.QUESTION_MARK:
      case Se.NUM_PLUS:
      case Se.NUM_MINUS:
      case Se.NUM_PERIOD:
      case Se.NUM_DIVISION:
      case Se.SEMICOLON:
      case Se.DASH:
      case Se.EQUALS:
      case Se.COMMA:
      case Se.PERIOD:
      case Se.SLASH:
      case Se.APOSTROPHE:
      case Se.SINGLE_QUOTE:
      case Se.OPEN_SQUARE_BRACKET:
      case Se.BACKSLASH:
      case Se.CLOSE_SQUARE_BRACKET:
        return !0;
      default:
        return !1;
    }
  }
}, Pb = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, name: "loading", theme: "outlined" }, _b = function(t, n) {
  return /* @__PURE__ */ u.createElement(Tt, me({}, t, {
    ref: n,
    icon: Pb
  }));
}, pl = /* @__PURE__ */ u.forwardRef(_b);
process.env.NODE_ENV !== "production" && (pl.displayName = "LoadingOutlined");
const hl = /* @__PURE__ */ D.createContext(void 0);
process.env.NODE_ENV !== "production" && (hl.displayName = "zIndexContext");
const dr = 100, Tb = 10, Ib = dr * Tb, Kf = {
  Modal: dr,
  Drawer: dr,
  Popover: dr,
  Popconfirm: dr,
  Tooltip: dr,
  Tour: dr
}, Nb = {
  SelectLike: 50,
  Dropdown: 50,
  DatePicker: 50,
  Menu: 50,
  ImagePreview: 1
};
function Mb(e) {
  return e in Kf;
}
function bl(e, t) {
  const [, n] = Mn(), r = D.useContext(hl), a = Mb(e);
  if (t !== void 0)
    return [t, t];
  let o = r ?? 0;
  return a ? (o += // Use preset token zIndex by default but not stack when has parent container
  (r ? 0 : n.zIndexPopupBase) + // Container offset
  Kf[e], o = Math.min(o, n.zIndexPopupBase + Ib)) : o += Nb[e], [r === void 0 ? t : o, o];
}
function tn() {
  tn = function() {
    return t;
  };
  var e, t = {}, n = Object.prototype, r = n.hasOwnProperty, a = Object.defineProperty || function(N, P, $) {
    N[P] = $.value;
  }, o = typeof Symbol == "function" ? Symbol : {}, i = o.iterator || "@@iterator", s = o.asyncIterator || "@@asyncIterator", l = o.toStringTag || "@@toStringTag";
  function c(N, P, $) {
    return Object.defineProperty(N, P, {
      value: $,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), N[P];
  }
  try {
    c({}, "");
  } catch {
    c = function($, F, L) {
      return $[F] = L;
    };
  }
  function d(N, P, $, F) {
    var L = P && P.prototype instanceof S ? P : S, V = Object.create(L.prototype), W = new _(F || []);
    return a(V, "_invoke", {
      value: T(N, $, W)
    }), V;
  }
  function f(N, P, $) {
    try {
      return {
        type: "normal",
        arg: N.call(P, $)
      };
    } catch (F) {
      return {
        type: "throw",
        arg: F
      };
    }
  }
  t.wrap = d;
  var v = "suspendedStart", g = "suspendedYield", p = "executing", h = "completed", m = {};
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
  var C = Object.getPrototypeOf, O = C && C(C(k([])));
  O && O !== n && r.call(O, i) && (w = O);
  var E = y.prototype = S.prototype = Object.create(w);
  function x(N) {
    ["next", "throw", "return"].forEach(function(P) {
      c(N, P, function($) {
        return this._invoke(P, $);
      });
    });
  }
  function R(N, P) {
    function $(L, V, W, U) {
      var G = f(N[L], N, V);
      if (G.type !== "throw") {
        var Q = G.arg, q = Q.value;
        return q && ke(q) == "object" && r.call(q, "__await") ? P.resolve(q.__await).then(function(Z) {
          $("next", Z, W, U);
        }, function(Z) {
          $("throw", Z, W, U);
        }) : P.resolve(q).then(function(Z) {
          Q.value = Z, W(Q);
        }, function(Z) {
          return $("throw", Z, W, U);
        });
      }
      U(G.arg);
    }
    var F;
    a(this, "_invoke", {
      value: function(V, W) {
        function U() {
          return new P(function(G, Q) {
            $(V, W, G, Q);
          });
        }
        return F = F ? F.then(U, U) : U();
      }
    });
  }
  function T(N, P, $) {
    var F = v;
    return function(L, V) {
      if (F === p) throw Error("Generator is already running");
      if (F === h) {
        if (L === "throw") throw V;
        return {
          value: e,
          done: !0
        };
      }
      for ($.method = L, $.arg = V; ; ) {
        var W = $.delegate;
        if (W) {
          var U = M(W, $);
          if (U) {
            if (U === m) continue;
            return U;
          }
        }
        if ($.method === "next") $.sent = $._sent = $.arg;
        else if ($.method === "throw") {
          if (F === v) throw F = h, $.arg;
          $.dispatchException($.arg);
        } else $.method === "return" && $.abrupt("return", $.arg);
        F = p;
        var G = f(N, P, $);
        if (G.type === "normal") {
          if (F = $.done ? h : g, G.arg === m) continue;
          return {
            value: G.arg,
            done: $.done
          };
        }
        G.type === "throw" && (F = h, $.method = "throw", $.arg = G.arg);
      }
    };
  }
  function M(N, P) {
    var $ = P.method, F = N.iterator[$];
    if (F === e) return P.delegate = null, $ === "throw" && N.iterator.return && (P.method = "return", P.arg = e, M(N, P), P.method === "throw") || $ !== "return" && (P.method = "throw", P.arg = new TypeError("The iterator does not provide a '" + $ + "' method")), m;
    var L = f(F, N.iterator, P.arg);
    if (L.type === "throw") return P.method = "throw", P.arg = L.arg, P.delegate = null, m;
    var V = L.arg;
    return V ? V.done ? (P[N.resultName] = V.value, P.next = N.nextLoc, P.method !== "return" && (P.method = "next", P.arg = e), P.delegate = null, m) : V : (P.method = "throw", P.arg = new TypeError("iterator result is not an object"), P.delegate = null, m);
  }
  function j(N) {
    var P = {
      tryLoc: N[0]
    };
    1 in N && (P.catchLoc = N[1]), 2 in N && (P.finallyLoc = N[2], P.afterLoc = N[3]), this.tryEntries.push(P);
  }
  function I(N) {
    var P = N.completion || {};
    P.type = "normal", delete P.arg, N.completion = P;
  }
  function _(N) {
    this.tryEntries = [{
      tryLoc: "root"
    }], N.forEach(j, this), this.reset(!0);
  }
  function k(N) {
    if (N || N === "") {
      var P = N[i];
      if (P) return P.call(N);
      if (typeof N.next == "function") return N;
      if (!isNaN(N.length)) {
        var $ = -1, F = function L() {
          for (; ++$ < N.length; ) if (r.call(N, $)) return L.value = N[$], L.done = !1, L;
          return L.value = e, L.done = !0, L;
        };
        return F.next = F;
      }
    }
    throw new TypeError(ke(N) + " is not iterable");
  }
  return b.prototype = y, a(E, "constructor", {
    value: y,
    configurable: !0
  }), a(y, "constructor", {
    value: b,
    configurable: !0
  }), b.displayName = c(y, l, "GeneratorFunction"), t.isGeneratorFunction = function(N) {
    var P = typeof N == "function" && N.constructor;
    return !!P && (P === b || (P.displayName || P.name) === "GeneratorFunction");
  }, t.mark = function(N) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(N, y) : (N.__proto__ = y, c(N, l, "GeneratorFunction")), N.prototype = Object.create(E), N;
  }, t.awrap = function(N) {
    return {
      __await: N
    };
  }, x(R.prototype), c(R.prototype, s, function() {
    return this;
  }), t.AsyncIterator = R, t.async = function(N, P, $, F, L) {
    L === void 0 && (L = Promise);
    var V = new R(d(N, P, $, F), L);
    return t.isGeneratorFunction(P) ? V : V.next().then(function(W) {
      return W.done ? W.value : V.next();
    });
  }, x(E), c(E, l, "Generator"), c(E, i, function() {
    return this;
  }), c(E, "toString", function() {
    return "[object Generator]";
  }), t.keys = function(N) {
    var P = Object(N), $ = [];
    for (var F in P) $.push(F);
    return $.reverse(), function L() {
      for (; $.length; ) {
        var V = $.pop();
        if (V in P) return L.value = V, L.done = !1, L;
      }
      return L.done = !0, L;
    };
  }, t.values = k, _.prototype = {
    constructor: _,
    reset: function(P) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(I), !P) for (var $ in this) $.charAt(0) === "t" && r.call(this, $) && !isNaN(+$.slice(1)) && (this[$] = e);
    },
    stop: function() {
      this.done = !0;
      var P = this.tryEntries[0].completion;
      if (P.type === "throw") throw P.arg;
      return this.rval;
    },
    dispatchException: function(P) {
      if (this.done) throw P;
      var $ = this;
      function F(Q, q) {
        return W.type = "throw", W.arg = P, $.next = Q, q && ($.method = "next", $.arg = e), !!q;
      }
      for (var L = this.tryEntries.length - 1; L >= 0; --L) {
        var V = this.tryEntries[L], W = V.completion;
        if (V.tryLoc === "root") return F("end");
        if (V.tryLoc <= this.prev) {
          var U = r.call(V, "catchLoc"), G = r.call(V, "finallyLoc");
          if (U && G) {
            if (this.prev < V.catchLoc) return F(V.catchLoc, !0);
            if (this.prev < V.finallyLoc) return F(V.finallyLoc);
          } else if (U) {
            if (this.prev < V.catchLoc) return F(V.catchLoc, !0);
          } else {
            if (!G) throw Error("try statement without catch or finally");
            if (this.prev < V.finallyLoc) return F(V.finallyLoc);
          }
        }
      }
    },
    abrupt: function(P, $) {
      for (var F = this.tryEntries.length - 1; F >= 0; --F) {
        var L = this.tryEntries[F];
        if (L.tryLoc <= this.prev && r.call(L, "finallyLoc") && this.prev < L.finallyLoc) {
          var V = L;
          break;
        }
      }
      V && (P === "break" || P === "continue") && V.tryLoc <= $ && $ <= V.finallyLoc && (V = null);
      var W = V ? V.completion : {};
      return W.type = P, W.arg = $, V ? (this.method = "next", this.next = V.finallyLoc, m) : this.complete(W);
    },
    complete: function(P, $) {
      if (P.type === "throw") throw P.arg;
      return P.type === "break" || P.type === "continue" ? this.next = P.arg : P.type === "return" ? (this.rval = this.arg = P.arg, this.method = "return", this.next = "end") : P.type === "normal" && $ && (this.next = $), m;
    },
    finish: function(P) {
      for (var $ = this.tryEntries.length - 1; $ >= 0; --$) {
        var F = this.tryEntries[$];
        if (F.finallyLoc === P) return this.complete(F.completion, F.afterLoc), I(F), m;
      }
    },
    catch: function(P) {
      for (var $ = this.tryEntries.length - 1; $ >= 0; --$) {
        var F = this.tryEntries[$];
        if (F.tryLoc === P) {
          var L = F.completion;
          if (L.type === "throw") {
            var V = L.arg;
            I(F);
          }
          return V;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function(P, $, F) {
      return this.delegate = {
        iterator: k(P),
        resultName: $,
        nextLoc: F
      }, this.method === "next" && (this.arg = e), m;
    }
  }, t;
}
function kc(e, t, n, r, a, o, i) {
  try {
    var s = e[o](i), l = s.value;
  } catch (c) {
    return void n(c);
  }
  s.done ? t(l) : Promise.resolve(l).then(r, a);
}
function Sr(e) {
  return function() {
    var t = this, n = arguments;
    return new Promise(function(r, a) {
      var o = e.apply(t, n);
      function i(l) {
        kc(o, r, a, i, s, "next", l);
      }
      function s(l) {
        kc(o, r, a, i, s, "throw", l);
      }
      i(void 0);
    });
  };
}
var Va = B({}, Km), Ab = Va.version, Lb = Va.render, jb = Va.unmountComponentAtNode, ai;
try {
  var Fb = Number((Ab || "").split(".")[0]);
  Fb >= 18 && (ai = Va.createRoot);
} catch {
}
function Hc(e) {
  var t = Va.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  t && ke(t) === "object" && (t.usingClientEntryPoint = e);
}
var Fo = "__rc_react_root__";
function Db(e, t) {
  Hc(!0);
  var n = t[Fo] || ai(t);
  Hc(!1), n.render(e), t[Fo] = n;
}
function zb(e, t) {
  Lb(e, t);
}
function Vb(e, t) {
  if (ai) {
    Db(e, t);
    return;
  }
  zb(e, t);
}
function Bb(e) {
  return Rs.apply(this, arguments);
}
function Rs() {
  return Rs = Sr(/* @__PURE__ */ tn().mark(function e(t) {
    return tn().wrap(function(r) {
      for (; ; ) switch (r.prev = r.next) {
        case 0:
          return r.abrupt("return", Promise.resolve().then(function() {
            var a;
            (a = t[Fo]) === null || a === void 0 || a.unmount(), delete t[Fo];
          }));
        case 1:
        case "end":
          return r.stop();
      }
    }, e);
  })), Rs.apply(this, arguments);
}
function kb(e) {
  jb(e);
}
function Hb(e) {
  return Ps.apply(this, arguments);
}
function Ps() {
  return Ps = Sr(/* @__PURE__ */ tn().mark(function e(t) {
    return tn().wrap(function(r) {
      for (; ; ) switch (r.prev = r.next) {
        case 0:
          if (ai === void 0) {
            r.next = 2;
            break;
          }
          return r.abrupt("return", Bb(t));
        case 2:
          kb(t);
        case 3:
        case "end":
          return r.stop();
      }
    }, e);
  })), Ps.apply(this, arguments);
}
const Xr = (e, t, n) => n !== void 0 ? n : `${e}-${t}`, yl = function(e) {
  if (!e)
    return !1;
  if (e instanceof Element) {
    if (e.offsetParent)
      return !0;
    if (e.getBBox) {
      var t = e.getBBox(), n = t.width, r = t.height;
      if (n || r)
        return !0;
    }
    if (e.getBoundingClientRect) {
      var a = e.getBoundingClientRect(), o = a.width, i = a.height;
      if (o || i)
        return !0;
    }
  }
  return !1;
}, Wb = (e) => {
  const {
    componentCls: t,
    colorPrimary: n
  } = e;
  return {
    [t]: {
      position: "absolute",
      background: "transparent",
      pointerEvents: "none",
      boxSizing: "border-box",
      color: `var(--wave-color, ${n})`,
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
}, Ub = fl("Wave", (e) => [Wb(e)]), Gf = `${Ff}-wave-target`;
function Kb(e) {
  const t = (e || "").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);
  return t && t[1] && t[2] && t[3] ? !(t[1] === t[2] && t[2] === t[3]) : !0;
}
function _i(e) {
  return e && e !== "#fff" && e !== "#ffffff" && e !== "rgb(255, 255, 255)" && e !== "rgba(255, 255, 255, 1)" && Kb(e) && !/rgba\((?:\d*, ){3}0\)/.test(e) && // any transparent rgba color
  e !== "transparent";
}
function Gb(e) {
  const {
    borderTopColor: t,
    borderColor: n,
    backgroundColor: r
  } = getComputedStyle(e);
  return _i(t) ? t : _i(n) ? n : _i(r) ? r : null;
}
function Ti(e) {
  return Number.isNaN(e) ? 0 : e;
}
const qb = (e) => {
  const {
    className: t,
    target: n,
    component: r
  } = e, a = u.useRef(null), [o, i] = u.useState(null), [s, l] = u.useState([]), [c, d] = u.useState(0), [f, v] = u.useState(0), [g, p] = u.useState(0), [h, m] = u.useState(0), [S, b] = u.useState(!1), y = {
    left: c,
    top: f,
    width: g,
    height: h,
    borderRadius: s.map((O) => `${O}px`).join(" ")
  };
  o && (y["--wave-color"] = o);
  function w() {
    const O = getComputedStyle(n);
    i(Gb(n));
    const E = O.position === "static", {
      borderLeftWidth: x,
      borderTopWidth: R
    } = O;
    d(E ? n.offsetLeft : Ti(-parseFloat(x))), v(E ? n.offsetTop : Ti(-parseFloat(R))), p(n.offsetWidth), m(n.offsetHeight);
    const {
      borderTopLeftRadius: T,
      borderTopRightRadius: M,
      borderBottomLeftRadius: j,
      borderBottomRightRadius: I
    } = O;
    l([T, M, I, j].map((_) => Ti(parseFloat(_))));
  }
  if (u.useEffect(() => {
    if (n) {
      const O = Mt(() => {
        w(), b(!0);
      });
      let E;
      return typeof ResizeObserver < "u" && (E = new ResizeObserver(w), E.observe(n)), () => {
        Mt.cancel(O), E == null || E.disconnect();
      };
    }
  }, []), !S)
    return null;
  const C = (r === "Checkbox" || r === "Radio") && (n == null ? void 0 : n.classList.contains(Gf));
  return /* @__PURE__ */ u.createElement(Ln, {
    visible: !0,
    motionAppear: !0,
    motionName: "wave-motion",
    motionDeadline: 5e3,
    onAppearEnd: (O, E) => {
      var x;
      if (E.deadline || E.propertyName === "opacity") {
        const R = (x = a.current) === null || x === void 0 ? void 0 : x.parentElement;
        Hb(R).then(() => {
          R == null || R.remove();
        });
      }
      return !1;
    }
  }, (O, E) => {
    let {
      className: x
    } = O;
    return /* @__PURE__ */ u.createElement("div", {
      ref: An(a, E),
      className: Y(t, x, {
        "wave-quick": C
      }),
      style: y
    });
  });
}, Xb = (e, t) => {
  var n;
  const {
    component: r
  } = t;
  if (r === "Checkbox" && !(!((n = e.querySelector("input")) === null || n === void 0) && n.checked))
    return;
  const a = document.createElement("div");
  a.style.position = "absolute", a.style.left = "0px", a.style.top = "0px", e == null || e.insertBefore(a, e == null ? void 0 : e.firstChild), Vb(/* @__PURE__ */ u.createElement(qb, Object.assign({}, t, {
    target: e
  })), a);
}, Zb = (e, t, n) => {
  const {
    wave: r
  } = u.useContext(vt), [, a, o] = Mn(), i = Gt((c) => {
    const d = e.current;
    if (r != null && r.disabled || !d)
      return;
    const f = d.querySelector(`.${Gf}`) || d, {
      showEffect: v
    } = r || {};
    (v || Xb)(f, {
      className: t,
      token: a,
      component: n,
      event: c,
      hashId: o
    });
  }), s = u.useRef();
  return (c) => {
    Mt.cancel(s.current), s.current = Mt(() => {
      i(c);
    });
  };
}, Cl = (e) => {
  const {
    children: t,
    disabled: n,
    component: r
  } = e, {
    getPrefixCls: a
  } = Nt(vt), o = Me(null), i = a("wave"), [, s] = Ub(i), l = Zb(o, Y(i, s), r);
  if (D.useEffect(() => {
    const d = o.current;
    if (!d || d.nodeType !== 1 || n)
      return;
    const f = (v) => {
      !yl(v.target) || // No need wave
      !d.getAttribute || d.getAttribute("disabled") || d.disabled || d.className.includes("disabled") || d.className.includes("-leave") || l(v);
    };
    return d.addEventListener("click", f, !0), () => {
      d.removeEventListener("click", f, !0);
    };
  }, [n]), !/* @__PURE__ */ D.isValidElement(t))
    return t ?? null;
  const c = yr(t) ? An(t.ref, o) : o;
  return ri(t, {
    ref: c
  });
};
process.env.NODE_ENV !== "production" && (Cl.displayName = "Wave");
const Ba = (e) => {
  const t = D.useContext(qr);
  return D.useMemo(() => e ? typeof e == "string" ? e ?? t : e instanceof Function ? e(t) : t : t, [e, t]);
}, qf = /* @__PURE__ */ u.createContext(null), Xf = (e, t) => {
  const n = u.useContext(qf), r = u.useMemo(() => {
    if (!n)
      return "";
    const {
      compactDirection: a,
      isFirstItem: o,
      isLastItem: i
    } = n, s = a === "vertical" ? "-vertical-" : "-";
    return Y(`${e}-compact${s}item`, {
      [`${e}-compact${s}first-item`]: o,
      [`${e}-compact${s}last-item`]: i,
      [`${e}-compact${s}item-rtl`]: t === "rtl"
    });
  }, [e, t, n]);
  return {
    compactSize: n == null ? void 0 : n.compactSize,
    compactDirection: n == null ? void 0 : n.compactDirection,
    compactItemClassnames: r
  };
}, Yb = (e) => {
  let {
    children: t
  } = e;
  return /* @__PURE__ */ u.createElement(qf.Provider, {
    value: null
  }, t);
};
var Qb = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
    t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
const Zf = /* @__PURE__ */ u.createContext(void 0), Jb = (e) => {
  const {
    getPrefixCls: t,
    direction: n
  } = u.useContext(vt), {
    prefixCls: r,
    size: a,
    className: o
  } = e, i = Qb(e, ["prefixCls", "size", "className"]), s = t("btn-group", r), [, , l] = Mn();
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
    const f = zt("Button.Group");
    process.env.NODE_ENV !== "production" && f(!a || ["large", "small", "middle"].includes(a), "usage", "Invalid prop `size`.");
  }
  const d = Y(s, {
    [`${s}-${c}`]: c,
    [`${s}-rtl`]: n === "rtl"
  }, o, l);
  return /* @__PURE__ */ u.createElement(Zf.Provider, {
    value: a
  }, /* @__PURE__ */ u.createElement("div", Object.assign({}, i, {
    className: d
  })));
}, Wc = /^[\u4e00-\u9fa5]{2}$/, _s = Wc.test.bind(Wc);
function Uc(e) {
  return typeof e == "string";
}
function co(e) {
  return e === "text" || e === "link";
}
function e1(e, t) {
  if (e == null)
    return;
  const n = t ? " " : "";
  return typeof e != "string" && typeof e != "number" && Uc(e.type) && _s(e.props.children) ? ri(e, {
    children: e.props.children.split("").join(n)
  }) : Uc(e) ? _s(e) ? /* @__PURE__ */ D.createElement("span", null, e.split("").join(n)) : /* @__PURE__ */ D.createElement("span", null, e) : Wf(e) ? /* @__PURE__ */ D.createElement("span", null, e) : e;
}
function t1(e, t) {
  let n = !1;
  const r = [];
  return D.Children.forEach(e, (a) => {
    const o = typeof a, i = o === "string" || o === "number";
    if (n && i) {
      const s = r.length - 1, l = r[s];
      r[s] = `${l}${a}`;
    } else
      r.push(a);
    n = i;
  }), D.Children.map(r, (a) => e1(a, t));
}
const Yf = /* @__PURE__ */ fn((e, t) => {
  const {
    className: n,
    style: r,
    children: a,
    prefixCls: o
  } = e, i = Y(`${o}-icon`, n);
  return /* @__PURE__ */ D.createElement("span", {
    ref: t,
    className: i,
    style: r
  }, a);
}), Kc = /* @__PURE__ */ fn((e, t) => {
  const {
    prefixCls: n,
    className: r,
    style: a,
    iconClassName: o
  } = e, i = Y(`${n}-loading-icon`, r);
  return /* @__PURE__ */ D.createElement(Yf, {
    prefixCls: n,
    className: i,
    style: a,
    ref: t
  }, /* @__PURE__ */ D.createElement(pl, {
    className: o
  }));
}), Ii = () => ({
  width: 0,
  opacity: 0,
  transform: "scale(0)"
}), Ni = (e) => ({
  width: e.scrollWidth,
  opacity: 1,
  transform: "scale(1)"
}), n1 = (e) => {
  const {
    prefixCls: t,
    loading: n,
    existIcon: r,
    className: a,
    style: o
  } = e, i = !!n;
  return r ? /* @__PURE__ */ D.createElement(Kc, {
    prefixCls: t,
    className: a,
    style: o
  }) : /* @__PURE__ */ D.createElement(Ln, {
    visible: i,
    // We do not really use this motionName
    motionName: `${t}-loading-icon-motion`,
    motionLeave: i,
    removeOnLeave: !0,
    onAppearStart: Ii,
    onAppearActive: Ni,
    onEnterStart: Ii,
    onEnterActive: Ni,
    onLeaveStart: Ni,
    onLeaveActive: Ii
  }, (s, l) => {
    let {
      className: c,
      style: d
    } = s;
    return /* @__PURE__ */ D.createElement(Kc, {
      prefixCls: t,
      className: a,
      style: Object.assign(Object.assign({}, o), d),
      ref: l,
      iconClassName: c
    });
  });
}, Gc = (e, t) => ({
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
}), r1 = (e) => {
  const {
    componentCls: t,
    fontSize: n,
    lineWidth: r,
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
            marginInlineStart: e.calc(r).mul(-1).equal(),
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
          fontSize: n
        }
      },
      // Border Color
      Gc(`${t}-primary`, a),
      Gc(`${t}-danger`, o)
    ]
  };
}, Qf = (e) => {
  const {
    paddingInline: t,
    onlyIconSize: n,
    paddingBlock: r
  } = e;
  return jt(e, {
    buttonPaddingHorizontal: t,
    buttonPaddingVertical: r,
    buttonIconOnlyFontSize: n
  });
}, Jf = (e) => {
  var t, n, r, a, o, i;
  const s = (t = e.contentFontSize) !== null && t !== void 0 ? t : e.fontSize, l = (n = e.contentFontSizeSM) !== null && n !== void 0 ? n : e.fontSize, c = (r = e.contentFontSizeLG) !== null && r !== void 0 ? r : e.fontSizeLG, d = (a = e.contentLineHeight) !== null && a !== void 0 ? a : Oo(s), f = (o = e.contentLineHeightSM) !== null && o !== void 0 ? o : Oo(l), v = (i = e.contentLineHeightLG) !== null && i !== void 0 ? i : Oo(c);
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
}, a1 = (e) => {
  const {
    componentCls: t,
    iconCls: n,
    fontWeight: r
  } = e;
  return {
    [t]: {
      outline: "none",
      position: "relative",
      display: "inline-flex",
      gap: e.marginXS,
      alignItems: "center",
      justifyContent: "center",
      fontWeight: r,
      whiteSpace: "nowrap",
      textAlign: "center",
      backgroundImage: "none",
      background: "transparent",
      border: `${ee(e.lineWidth)} ${e.lineType} transparent`,
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
      "&:not(:disabled)": Object.assign({}, ti(e)),
      [`&${t}-two-chinese-chars::first-letter`]: {
        letterSpacing: "0.34em"
      },
      [`&${t}-two-chinese-chars > *:not(${n})`]: {
        marginInlineEnd: "-0.34em",
        letterSpacing: "0.34em"
      },
      // iconPosition="end"
      "&-icon-end": {
        flexDirection: "row-reverse"
      }
    }
  };
}, Gn = (e, t, n) => ({
  [`&:not(:disabled):not(${e}-disabled)`]: {
    "&:hover": t,
    "&:active": n
  }
}), o1 = (e) => ({
  minWidth: e.controlHeight,
  paddingInlineStart: 0,
  paddingInlineEnd: 0,
  borderRadius: "50%"
}), i1 = (e) => ({
  borderRadius: e.controlHeight,
  paddingInlineStart: e.calc(e.controlHeight).div(2).equal(),
  paddingInlineEnd: e.calc(e.controlHeight).div(2).equal()
}), s1 = (e) => ({
  cursor: "not-allowed",
  borderColor: e.borderColorDisabled,
  color: e.colorTextDisabled,
  background: e.colorBgContainerDisabled,
  boxShadow: "none"
}), Aa = (e, t, n, r, a, o, i, s) => ({
  [`&${e}-background-ghost`]: Object.assign(Object.assign({
    color: n || void 0,
    background: t,
    borderColor: r || void 0,
    boxShadow: "none"
  }, Gn(e, Object.assign({
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
}), Sl = (e) => ({
  [`&:disabled, &${e.componentCls}-disabled`]: Object.assign({}, s1(e))
}), ev = (e) => Object.assign({}, Sl(e)), Do = (e) => ({
  [`&:disabled, &${e.componentCls}-disabled`]: {
    cursor: "not-allowed",
    color: e.colorTextDisabled
  }
}), tv = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, ev(e)), {
  background: e.defaultBg,
  borderColor: e.defaultBorderColor,
  color: e.defaultColor,
  boxShadow: e.defaultShadow
}), Gn(e.componentCls, {
  color: e.defaultHoverColor,
  borderColor: e.defaultHoverBorderColor,
  background: e.defaultHoverBg
}, {
  color: e.defaultActiveColor,
  borderColor: e.defaultActiveBorderColor,
  background: e.defaultActiveBg
})), Aa(e.componentCls, e.ghostBg, e.defaultGhostColor, e.defaultGhostBorderColor, e.colorTextDisabled, e.colorBorder)), {
  [`&${e.componentCls}-dangerous`]: Object.assign(Object.assign(Object.assign({
    color: e.colorError,
    borderColor: e.colorError
  }, Gn(e.componentCls, {
    color: e.colorErrorHover,
    borderColor: e.colorErrorBorderHover
  }, {
    color: e.colorErrorActive,
    borderColor: e.colorErrorActive
  })), Aa(e.componentCls, e.ghostBg, e.colorError, e.colorError, e.colorTextDisabled, e.colorBorder)), Sl(e))
}), l1 = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, ev(e)), {
  color: e.primaryColor,
  background: e.colorPrimary,
  boxShadow: e.primaryShadow
}), Gn(e.componentCls, {
  color: e.colorTextLightSolid,
  background: e.colorPrimaryHover
}, {
  color: e.colorTextLightSolid,
  background: e.colorPrimaryActive
})), Aa(e.componentCls, e.ghostBg, e.colorPrimary, e.colorPrimary, e.colorTextDisabled, e.colorBorder, {
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
  }, Gn(e.componentCls, {
    background: e.colorErrorHover
  }, {
    background: e.colorErrorActive
  })), Aa(e.componentCls, e.ghostBg, e.colorError, e.colorError, e.colorTextDisabled, e.colorBorder, {
    color: e.colorErrorHover,
    borderColor: e.colorErrorHover
  }, {
    color: e.colorErrorActive,
    borderColor: e.colorErrorActive
  })), Sl(e))
}), c1 = (e) => Object.assign(Object.assign({}, tv(e)), {
  borderStyle: "dashed"
}), u1 = (e) => Object.assign(Object.assign(Object.assign({
  color: e.colorLink
}, Gn(e.componentCls, {
  color: e.colorLinkHover,
  background: e.linkHoverBg
}, {
  color: e.colorLinkActive
})), Do(e)), {
  [`&${e.componentCls}-dangerous`]: Object.assign(Object.assign({
    color: e.colorError
  }, Gn(e.componentCls, {
    color: e.colorErrorHover
  }, {
    color: e.colorErrorActive
  })), Do(e))
}), d1 = (e) => Object.assign(Object.assign(Object.assign({}, Gn(e.componentCls, {
  color: e.colorText,
  background: e.textHoverBg
}, {
  color: e.colorText,
  background: e.colorBgTextActive
})), Do(e)), {
  [`&${e.componentCls}-dangerous`]: Object.assign(Object.assign({
    color: e.colorError
  }, Do(e)), Gn(e.componentCls, {
    color: e.colorErrorHover,
    background: e.colorErrorBg
  }, {
    color: e.colorErrorHover,
    background: e.colorErrorBgActive
  }))
}), f1 = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [`${t}-default`]: tv(e),
    [`${t}-primary`]: l1(e),
    [`${t}-dashed`]: c1(e),
    [`${t}-link`]: u1(e),
    [`${t}-text`]: d1(e),
    [`${t}-ghost`]: Aa(e.componentCls, e.ghostBg, e.colorBgContainer, e.colorBgContainer, e.colorTextDisabled, e.colorBorder)
  };
}, wl = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  const {
    componentCls: n,
    controlHeight: r,
    fontSize: a,
    lineHeight: o,
    borderRadius: i,
    buttonPaddingHorizontal: s,
    iconCls: l,
    buttonPaddingVertical: c
  } = e, d = `${n}-icon-only`;
  return [
    {
      [`${t}`]: {
        fontSize: a,
        lineHeight: o,
        height: r,
        padding: `${ee(c)} ${ee(s)}`,
        borderRadius: i,
        [`&${d}`]: {
          width: r,
          paddingInline: 0,
          // make `btn-icon-only` not too narrow
          [`&${n}-compact-item`]: {
            flex: "none"
          },
          [`&${n}-round`]: {
            width: "auto"
          },
          [l]: {
            fontSize: e.buttonIconOnlyFontSize
          }
        },
        // Loading
        [`&${n}-loading`]: {
          opacity: e.opacityLoading,
          cursor: "default"
        },
        [`${n}-loading-icon`]: {
          transition: `width ${e.motionDurationSlow} ${e.motionEaseInOut}, opacity ${e.motionDurationSlow} ${e.motionEaseInOut}`
        }
      }
    },
    // Shape - patch prefixCls again to override solid border radius style
    {
      [`${n}${n}-circle${t}`]: o1(e)
    },
    {
      [`${n}${n}-round${t}`]: i1(e)
    }
  ];
}, v1 = (e) => {
  const t = jt(e, {
    fontSize: e.contentFontSize,
    lineHeight: e.contentLineHeight
  });
  return wl(t, e.componentCls);
}, m1 = (e) => {
  const t = jt(e, {
    controlHeight: e.controlHeightSM,
    fontSize: e.contentFontSizeSM,
    lineHeight: e.contentLineHeightSM,
    padding: e.paddingXS,
    buttonPaddingHorizontal: e.paddingInlineSM,
    buttonPaddingVertical: e.paddingBlockSM,
    borderRadius: e.borderRadiusSM,
    buttonIconOnlyFontSize: e.onlyIconSizeSM
  });
  return wl(t, `${e.componentCls}-sm`);
}, g1 = (e) => {
  const t = jt(e, {
    controlHeight: e.controlHeightLG,
    fontSize: e.contentFontSizeLG,
    lineHeight: e.contentLineHeightLG,
    buttonPaddingHorizontal: e.paddingInlineLG,
    buttonPaddingVertical: e.paddingBlockLG,
    borderRadius: e.borderRadiusLG,
    buttonIconOnlyFontSize: e.onlyIconSizeLG
  });
  return wl(t, `${e.componentCls}-lg`);
}, p1 = (e) => {
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
}, h1 = Rn("Button", (e) => {
  const t = Qf(e);
  return [
    // Shared
    a1(t),
    // Size
    v1(t),
    m1(t),
    g1(t),
    // Block
    p1(t),
    // Group (type, ghost, danger, loading)
    f1(t),
    // Button Group
    r1(t)
  ];
}, Jf, {
  unitless: {
    fontWeight: !0,
    contentLineHeight: !0,
    contentLineHeightSM: !0,
    contentLineHeightLG: !0
  }
});
function b1(e, t, n) {
  const {
    focusElCls: r,
    focus: a,
    borderElCls: o
  } = n, i = o ? "> *" : "", s = ["hover", a ? "focus" : null, "active"].filter(Boolean).map((l) => `&:${l} ${i}`).join(",");
  return {
    [`&-item:not(${t}-last-item)`]: {
      marginInlineEnd: e.calc(e.lineWidth).mul(-1).equal()
    },
    "&-item": Object.assign(Object.assign({
      [s]: {
        zIndex: 2
      }
    }, r ? {
      [`&${r}`]: {
        zIndex: 2
      }
    } : {}), {
      [`&[disabled] ${i}`]: {
        zIndex: 0
      }
    })
  };
}
function y1(e, t, n) {
  const {
    borderElCls: r
  } = n, a = r ? `> ${r}` : "";
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
function nv(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    focus: !0
  };
  const {
    componentCls: n
  } = e, r = `${n}-compact`;
  return {
    [r]: Object.assign(Object.assign({}, b1(e, r, t)), y1(n, r, t))
  };
}
function C1(e, t) {
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
function S1(e, t) {
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
function w1(e) {
  const t = `${e.componentCls}-compact-vertical`;
  return {
    [t]: Object.assign(Object.assign({}, C1(e, t)), S1(e.componentCls, t))
  };
}
const E1 = (e) => {
  const {
    componentCls: t,
    calc: n
  } = e;
  return {
    [t]: {
      // Special styles for Primary Button
      [`&-compact-item${t}-primary`]: {
        [`&:not([disabled]) + ${t}-compact-item${t}-primary:not([disabled])`]: {
          position: "relative",
          "&:before": {
            position: "absolute",
            top: n(e.lineWidth).mul(-1).equal(),
            insetInlineStart: n(e.lineWidth).mul(-1).equal(),
            display: "inline-block",
            width: e.lineWidth,
            height: `calc(100% + ${ee(e.lineWidth)} * 2)`,
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
              top: n(e.lineWidth).mul(-1).equal(),
              insetInlineStart: n(e.lineWidth).mul(-1).equal(),
              display: "inline-block",
              width: `calc(100% + ${ee(e.lineWidth)} * 2)`,
              height: e.lineWidth,
              backgroundColor: e.colorPrimaryHover,
              content: '""'
            }
          }
        }
      }
    }
  };
}, x1 = vl(["Button", "compact"], (e) => {
  const t = Qf(e);
  return [
    // Space Compact
    nv(t),
    w1(t),
    E1(t)
  ];
}, Jf);
var $1 = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
    t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
function O1(e) {
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
const R1 = /* @__PURE__ */ D.forwardRef((e, t) => {
  var n, r, a;
  const {
    loading: o = !1,
    prefixCls: i,
    type: s,
    danger: l = !1,
    shape: c = "default",
    size: d,
    styles: f,
    disabled: v,
    className: g,
    rootClassName: p,
    children: h,
    icon: m,
    iconPosition: S = "start",
    ghost: b = !1,
    block: y = !1,
    // React does not recognize the `htmlType` prop on a DOM element. Here we pick it out of `rest`.
    htmlType: w = "button",
    classNames: C,
    style: O = {},
    autoInsertSpace: E
  } = e, x = $1(e, ["loading", "prefixCls", "type", "danger", "shape", "size", "styles", "disabled", "className", "rootClassName", "children", "icon", "iconPosition", "ghost", "block", "htmlType", "classNames", "style", "autoInsertSpace"]), R = s || "default", {
    getPrefixCls: T,
    direction: M,
    button: j
  } = Nt(vt), I = (n = E ?? (j == null ? void 0 : j.autoInsertSpace)) !== null && n !== void 0 ? n : !0, _ = T("btn", i), [k, N, P] = h1(_), $ = Nt(Gr), F = v ?? $, L = Nt(Zf), V = $n(() => O1(o), [o]), [W, U] = rt(V.loading), [G, Q] = rt(!1), Z = An(t, /* @__PURE__ */ km()), re = Bm.count(h) === 1 && !m && !co(R);
  ot(() => {
    let ye = null;
    V.delay > 0 ? ye = setTimeout(() => {
      ye = null, U(!0);
    }, V.delay) : U(V.loading);
    function _e() {
      ye && (clearTimeout(ye), ye = null);
    }
    return _e;
  }, [V]), ot(() => {
    if (!Z || !Z.current || !I)
      return;
    const ye = Z.current.textContent;
    re && _s(ye) ? G || Q(!0) : G && Q(!1);
  }, [Z]);
  const ae = (ye) => {
    const {
      onClick: _e
    } = e;
    if (W || F) {
      ye.preventDefault();
      return;
    }
    _e == null || _e(ye);
  };
  if (process.env.NODE_ENV !== "production") {
    const ye = zt("Button");
    process.env.NODE_ENV !== "production" && ye(!(typeof m == "string" && m.length > 2), "breaking", `\`icon\` is using ReactNode instead of string naming in v4. Please check \`${m}\` at https://ant.design/components/icon`), process.env.NODE_ENV !== "production" && ye(!(b && co(R)), "usage", "`link` or `text` button can't be a `ghost` button.");
  }
  const {
    compactSize: ue,
    compactItemClassnames: de
  } = Xf(_, M), ce = {
    large: "lg",
    small: "sm",
    middle: void 0
  }, ge = Ba((ye) => {
    var _e, Ee;
    return (Ee = (_e = d ?? ue) !== null && _e !== void 0 ? _e : L) !== null && Ee !== void 0 ? Ee : ye;
  }), H = ge && ce[ge] || "", ne = W ? "loading" : m, ve = vn(x, ["navigate"]), $e = Y(_, N, P, {
    [`${_}-${c}`]: c !== "default" && c,
    [`${_}-${R}`]: R,
    [`${_}-${H}`]: H,
    [`${_}-icon-only`]: !h && h !== 0 && !!ne,
    [`${_}-background-ghost`]: b && !co(R),
    [`${_}-loading`]: W,
    [`${_}-two-chinese-chars`]: G && I && !W,
    [`${_}-block`]: y,
    [`${_}-dangerous`]: l,
    [`${_}-rtl`]: M === "rtl",
    [`${_}-icon-end`]: S === "end"
  }, de, g, p, j == null ? void 0 : j.className), pe = Object.assign(Object.assign({}, j == null ? void 0 : j.style), O), ie = Y(C == null ? void 0 : C.icon, (r = j == null ? void 0 : j.classNames) === null || r === void 0 ? void 0 : r.icon), oe = Object.assign(Object.assign({}, (f == null ? void 0 : f.icon) || {}), ((a = j == null ? void 0 : j.styles) === null || a === void 0 ? void 0 : a.icon) || {}), se = m && !W ? /* @__PURE__ */ D.createElement(Yf, {
    prefixCls: _,
    className: ie,
    style: oe
  }, m) : /* @__PURE__ */ D.createElement(n1, {
    existIcon: !!m,
    prefixCls: _,
    loading: W
  }), we = h || h === 0 ? t1(h, re && I) : null;
  if (ve.href !== void 0)
    return k(/* @__PURE__ */ D.createElement("a", Object.assign({}, ve, {
      className: Y($e, {
        [`${_}-disabled`]: F
      }),
      href: F ? void 0 : ve.href,
      style: pe,
      onClick: ae,
      ref: Z,
      tabIndex: F ? -1 : 0
    }), se, we));
  let be = /* @__PURE__ */ D.createElement("button", Object.assign({}, x, {
    type: w,
    className: $e,
    style: pe,
    onClick: ae,
    disabled: F,
    ref: Z
  }), se, we, !!de && /* @__PURE__ */ D.createElement(x1, {
    key: "compact",
    prefixCls: _
  }));
  return co(R) || (be = /* @__PURE__ */ D.createElement(Cl, {
    component: "Button",
    disabled: W
  }, be)), k(be);
}), hr = R1;
hr.Group = Jb;
hr.__ANT_BUTTON = !0;
process.env.NODE_ENV !== "production" && (hr.displayName = "Button");
var rv = /* @__PURE__ */ u.createContext(null), qc = [];
function P1(e, t) {
  var n = u.useState(function() {
    if (!Jt())
      return null;
    var p = document.createElement("div");
    return process.env.NODE_ENV !== "production" && t && p.setAttribute("data-debug", t), p;
  }), r = K(n, 1), a = r[0], o = u.useRef(!1), i = u.useContext(rv), s = u.useState(qc), l = K(s, 2), c = l[0], d = l[1], f = i || (o.current ? void 0 : function(p) {
    d(function(h) {
      var m = [p].concat(Pe(h));
      return m;
    });
  });
  function v() {
    a.parentElement || document.body.appendChild(a), o.current = !0;
  }
  function g() {
    var p;
    (p = a.parentElement) === null || p === void 0 || p.removeChild(a), o.current = !1;
  }
  return Et(function() {
    return e ? i ? i(v) : v() : g(), g;
  }, [e]), Et(function() {
    c.length && (c.forEach(function(p) {
      return p();
    }), d(qc));
  }, [c]), [a, f];
}
function _1(e) {
  var t = "rc-scrollbar-measure-".concat(Math.random().toString(36).substring(7)), n = document.createElement("div");
  n.id = t;
  var r = n.style;
  r.position = "absolute", r.left = "0", r.top = "0", r.width = "100px", r.height = "100px", r.overflow = "scroll";
  var a, o;
  if (e) {
    var i = getComputedStyle(e);
    r.scrollbarColor = i.scrollbarColor, r.scrollbarWidth = i.scrollbarWidth;
    var s = getComputedStyle(e, "::-webkit-scrollbar"), l = parseInt(s.width, 10), c = parseInt(s.height, 10);
    try {
      var d = l ? "width: ".concat(s.width, ";") : "", f = c ? "height: ".concat(s.height, ";") : "";
      Wn(`
#`.concat(t, `::-webkit-scrollbar {
`).concat(d, `
`).concat(f, `
}`), t);
    } catch (p) {
      console.error(p), a = l, o = c;
    }
  }
  document.body.appendChild(n);
  var v = e && a && !isNaN(a) ? a : n.offsetWidth - n.clientWidth, g = e && o && !isNaN(o) ? o : n.offsetHeight - n.clientHeight;
  return document.body.removeChild(n), Pa(t), {
    width: v,
    height: g
  };
}
function T1(e) {
  return typeof document > "u" || !e || !(e instanceof Element) ? {
    width: 0,
    height: 0
  } : _1(e);
}
function I1() {
  return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth;
}
var N1 = "rc-util-locker-".concat(Date.now()), Xc = 0;
function M1(e) {
  var t = !!e, n = u.useState(function() {
    return Xc += 1, "".concat(N1, "_").concat(Xc);
  }), r = K(n, 1), a = r[0];
  Et(function() {
    if (t) {
      var o = T1(document.body).width, i = I1();
      Wn(`
html body {
  overflow-y: hidden;
  `.concat(i ? "width: calc(100% - ".concat(o, "px);") : "", `
}`), a);
    } else
      Pa(a);
    return function() {
      Pa(a);
    };
  }, [t, a]);
}
var A1 = !1;
function L1(e) {
  return A1;
}
var Zc = function(t) {
  return t === !1 ? !1 : !Jt() || !t ? null : typeof t == "string" ? document.querySelector(t) : typeof t == "function" ? t() : t;
}, ka = /* @__PURE__ */ u.forwardRef(function(e, t) {
  var n = e.open, r = e.autoLock, a = e.getContainer, o = e.debug, i = e.autoDestroy, s = i === void 0 ? !0 : i, l = e.children, c = u.useState(n), d = K(c, 2), f = d[0], v = d[1], g = f || n;
  process.env.NODE_ENV !== "production" && ct(Jt() || !n, "Portal only work in client side. Please call 'useEffect' to show Portal instead default render in SSR."), u.useEffect(function() {
    (s || n) && v(n);
  }, [n, s]);
  var p = u.useState(function() {
    return Zc(a);
  }), h = K(p, 2), m = h[0], S = h[1];
  u.useEffect(function() {
    var j = Zc(a);
    S(j ?? null);
  });
  var b = P1(g && !m, o), y = K(b, 2), w = y[0], C = y[1], O = m ?? w;
  M1(r && n && Jt() && (O === w || O === document.body));
  var E = null;
  if (l && yr(l) && t) {
    var x = l;
    E = x.ref;
  }
  var R = Qr(E, t);
  if (!g || !Jt() || m === void 0)
    return null;
  var T = O === !1 || L1(), M = l;
  return t && (M = /* @__PURE__ */ u.cloneElement(l, {
    ref: R
  })), /* @__PURE__ */ u.createElement(rv.Provider, {
    value: C
  }, T ? M : /* @__PURE__ */ Gm(M, O));
});
process.env.NODE_ENV !== "production" && (ka.displayName = "Portal");
var av = /* @__PURE__ */ u.createContext({});
function j1() {
  var e = B({}, u);
  return e.useId;
}
var Yc = 0, Qc = j1();
const ov = Qc ? (
  // Use React `useId`
  function(t) {
    var n = Qc();
    return t || (process.env.NODE_ENV === "test" ? "test-id" : n);
  }
) : (
  // Use compatible of `useId`
  function(t) {
    var n = u.useState("ssr-id"), r = K(n, 2), a = r[0], o = r[1];
    return u.useEffect(function() {
      var i = Yc;
      Yc += 1, o("rc_unique_".concat(i));
    }, []), t || (process.env.NODE_ENV === "test" ? "test-id" : a);
  }
);
function Jc(e, t, n) {
  var r = t;
  return !r && n && (r = "".concat(e, "-").concat(n)), r;
}
function eu(e, t) {
  var n = e["page".concat(t ? "Y" : "X", "Offset")], r = "scroll".concat(t ? "Top" : "Left");
  if (typeof n != "number") {
    var a = e.document;
    n = a.documentElement[r], typeof n != "number" && (n = a.body[r]);
  }
  return n;
}
function F1(e) {
  var t = e.getBoundingClientRect(), n = {
    left: t.left,
    top: t.top
  }, r = e.ownerDocument, a = r.defaultView || r.parentWindow;
  return n.left += eu(a), n.top += eu(a, !0), n;
}
const D1 = /* @__PURE__ */ u.memo(function(e) {
  var t = e.children;
  return t;
}, function(e, t) {
  var n = t.shouldUpdate;
  return !n;
});
var tu = {
  width: 0,
  height: 0,
  overflow: "hidden",
  outline: "none"
}, z1 = {
  outline: "none"
}, iv = /* @__PURE__ */ D.forwardRef(function(e, t) {
  var n = e.prefixCls, r = e.className, a = e.style, o = e.title, i = e.ariaId, s = e.footer, l = e.closable, c = e.closeIcon, d = e.onClose, f = e.children, v = e.bodyStyle, g = e.bodyProps, p = e.modalRender, h = e.onMouseDown, m = e.onMouseUp, S = e.holderRef, b = e.visible, y = e.forceRender, w = e.width, C = e.height, O = e.classNames, E = e.styles, x = D.useContext(av), R = x.panel, T = Qr(S, R), M = Me(), j = Me(), I = Me();
  D.useImperativeHandle(t, function() {
    return {
      focus: function() {
        var U;
        (U = I.current) === null || U === void 0 || U.focus({
          preventScroll: !0
        });
      },
      changeActive: function(U) {
        var G = document, Q = G.activeElement;
        U && Q === j.current ? M.current.focus({
          preventScroll: !0
        }) : !U && Q === M.current && j.current.focus({
          preventScroll: !0
        });
      }
    };
  });
  var _ = {};
  w !== void 0 && (_.width = w), C !== void 0 && (_.height = C);
  var k = s ? /* @__PURE__ */ D.createElement("div", {
    className: Y("".concat(n, "-footer"), O == null ? void 0 : O.footer),
    style: B({}, E == null ? void 0 : E.footer)
  }, s) : null, N = o ? /* @__PURE__ */ D.createElement("div", {
    className: Y("".concat(n, "-header"), O == null ? void 0 : O.header),
    style: B({}, E == null ? void 0 : E.header)
  }, /* @__PURE__ */ D.createElement("div", {
    className: "".concat(n, "-title"),
    id: i
  }, o)) : null, P = $n(function() {
    return ke(l) === "object" && l !== null ? l : l ? {
      closeIcon: c ?? /* @__PURE__ */ D.createElement("span", {
        className: "".concat(n, "-close-x")
      })
    } : {};
  }, [l, c, n]), $ = gl(P, !0), F = ke(l) === "object" && l.disabled, L = l ? /* @__PURE__ */ D.createElement("button", me({
    type: "button",
    onClick: d,
    "aria-label": "Close"
  }, $, {
    className: "".concat(n, "-close"),
    disabled: F
  }), P.closeIcon) : null, V = /* @__PURE__ */ D.createElement("div", {
    className: Y("".concat(n, "-content"), O == null ? void 0 : O.content),
    style: E == null ? void 0 : E.content
  }, L, N, /* @__PURE__ */ D.createElement("div", me({
    className: Y("".concat(n, "-body"), O == null ? void 0 : O.body),
    style: B(B({}, v), E == null ? void 0 : E.body)
  }, g), f), k);
  return /* @__PURE__ */ D.createElement("div", {
    key: "dialog-element",
    role: "dialog",
    "aria-labelledby": o ? i : null,
    "aria-modal": "true",
    ref: T,
    style: B(B({}, a), _),
    className: Y(n, r),
    onMouseDown: h,
    onMouseUp: m
  }, /* @__PURE__ */ D.createElement("div", {
    tabIndex: 0,
    ref: M,
    style: tu,
    "aria-hidden": "true"
  }), /* @__PURE__ */ D.createElement("div", {
    ref: I,
    tabIndex: -1,
    style: z1
  }, /* @__PURE__ */ D.createElement(D1, {
    shouldUpdate: b || y
  }, p ? p(V) : V)), /* @__PURE__ */ D.createElement("div", {
    tabIndex: 0,
    ref: j,
    style: tu,
    "aria-hidden": "true"
  }));
});
process.env.NODE_ENV !== "production" && (iv.displayName = "Panel");
var sv = /* @__PURE__ */ u.forwardRef(function(e, t) {
  var n = e.prefixCls, r = e.title, a = e.style, o = e.className, i = e.visible, s = e.forceRender, l = e.destroyOnClose, c = e.motionName, d = e.ariaId, f = e.onVisibleChanged, v = e.mousePosition, g = Me(), p = u.useState(), h = K(p, 2), m = h[0], S = h[1], b = {};
  m && (b.transformOrigin = m);
  function y() {
    var w = F1(g.current);
    S(v && (v.x || v.y) ? "".concat(v.x - w.left, "px ").concat(v.y - w.top, "px") : "");
  }
  return /* @__PURE__ */ u.createElement(Ln, {
    visible: i,
    onVisibleChanged: f,
    onAppearPrepare: y,
    onEnterPrepare: y,
    forceRender: s,
    motionName: c,
    removeOnLeave: l,
    ref: g
  }, function(w, C) {
    var O = w.className, E = w.style;
    return /* @__PURE__ */ u.createElement(iv, me({}, e, {
      ref: t,
      title: r,
      ariaId: d,
      prefixCls: n,
      holderRef: C,
      style: B(B(B({}, E), a), b),
      className: Y(o, O)
    }));
  });
});
sv.displayName = "Content";
var V1 = function(t) {
  var n = t.prefixCls, r = t.style, a = t.visible, o = t.maskProps, i = t.motionName, s = t.className;
  return /* @__PURE__ */ u.createElement(Ln, {
    key: "mask",
    visible: a,
    motionName: i,
    leavedClassName: "".concat(n, "-mask-hidden")
  }, function(l, c) {
    var d = l.className, f = l.style;
    return /* @__PURE__ */ u.createElement("div", me({
      ref: c,
      style: B(B({}, f), r),
      className: Y("".concat(n, "-mask"), d, s)
    }, o));
  });
}, B1 = function(t) {
  var n = t.prefixCls, r = n === void 0 ? "rc-dialog" : n, a = t.zIndex, o = t.visible, i = o === void 0 ? !1 : o, s = t.keyboard, l = s === void 0 ? !0 : s, c = t.focusTriggerAfterClose, d = c === void 0 ? !0 : c, f = t.wrapStyle, v = t.wrapClassName, g = t.wrapProps, p = t.onClose, h = t.afterOpenChange, m = t.afterClose, S = t.transitionName, b = t.animation, y = t.closable, w = y === void 0 ? !0 : y, C = t.mask, O = C === void 0 ? !0 : C, E = t.maskTransitionName, x = t.maskAnimation, R = t.maskClosable, T = R === void 0 ? !0 : R, M = t.maskStyle, j = t.maskProps, I = t.rootClassName, _ = t.classNames, k = t.styles;
  process.env.NODE_ENV !== "production" && (["wrapStyle", "bodyStyle", "maskStyle"].forEach(function(ne) {
    Kn(!(ne in t), "".concat(ne, " is deprecated, please use styles instead."));
  }), "wrapClassName" in t && Kn(!1, "wrapClassName is deprecated, please use classNames instead."));
  var N = Me(), P = Me(), $ = Me(), F = u.useState(i), L = K(F, 2), V = L[0], W = L[1], U = ov();
  function G() {
    rs(P.current, document.activeElement) || (N.current = document.activeElement);
  }
  function Q() {
    if (!rs(P.current, document.activeElement)) {
      var ne;
      (ne = $.current) === null || ne === void 0 || ne.focus();
    }
  }
  function q(ne) {
    if (ne)
      Q();
    else {
      if (W(!1), O && N.current && d) {
        try {
          N.current.focus({
            preventScroll: !0
          });
        } catch {
        }
        N.current = null;
      }
      V && (m == null || m());
    }
    h == null || h(ne);
  }
  function Z(ne) {
    p == null || p(ne);
  }
  var re = Me(!1), ae = Me(), ue = function() {
    clearTimeout(ae.current), re.current = !0;
  }, de = function() {
    ae.current = setTimeout(function() {
      re.current = !1;
    });
  }, ce = null;
  T && (ce = function(ve) {
    re.current ? re.current = !1 : P.current === ve.target && Z(ve);
  });
  function ge(ne) {
    if (l && ne.keyCode === Se.ESC) {
      ne.stopPropagation(), Z(ne);
      return;
    }
    i && ne.keyCode === Se.TAB && $.current.changeActive(!ne.shiftKey);
  }
  ot(function() {
    i && (W(!0), G());
  }, [i]), ot(function() {
    return function() {
      clearTimeout(ae.current);
    };
  }, []);
  var H = B(B(B({
    zIndex: a
  }, f), k == null ? void 0 : k.wrapper), {}, {
    display: V ? null : "none"
  });
  return /* @__PURE__ */ u.createElement("div", me({
    className: Y("".concat(r, "-root"), I)
  }, gl(t, {
    data: !0
  })), /* @__PURE__ */ u.createElement(V1, {
    prefixCls: r,
    visible: O && i,
    motionName: Jc(r, E, x),
    style: B(B({
      zIndex: a
    }, M), k == null ? void 0 : k.mask),
    maskProps: j,
    className: _ == null ? void 0 : _.mask
  }), /* @__PURE__ */ u.createElement("div", me({
    tabIndex: -1,
    onKeyDown: ge,
    className: Y("".concat(r, "-wrap"), v, _ == null ? void 0 : _.wrapper),
    ref: P,
    onClick: ce,
    style: H
  }, g), /* @__PURE__ */ u.createElement(sv, me({}, t, {
    onMouseDown: ue,
    onMouseUp: de,
    ref: $,
    closable: w,
    ariaId: U,
    prefixCls: r,
    visible: i && V,
    onClose: Z,
    onVisibleChanged: q,
    motionName: Jc(r, S, b)
  }))));
}, lv = function(t) {
  var n = t.visible, r = t.getContainer, a = t.forceRender, o = t.destroyOnClose, i = o === void 0 ? !1 : o, s = t.afterClose, l = t.panelRef, c = u.useState(n), d = K(c, 2), f = d[0], v = d[1], g = u.useMemo(function() {
    return {
      panel: l
    };
  }, [l]);
  return u.useEffect(function() {
    n && v(!0);
  }, [n]), !a && i && !f ? null : /* @__PURE__ */ u.createElement(av.Provider, {
    value: g
  }, /* @__PURE__ */ u.createElement(ka, {
    open: n || a || f,
    autoDestroy: !1,
    getContainer: r,
    autoLock: n || f
  }, /* @__PURE__ */ u.createElement(B1, me({}, t, {
    destroyOnClose: i,
    afterClose: function() {
      s == null || s(), v(!1);
    }
  }))));
};
lv.displayName = "Dialog";
var mr = "RC_FORM_INTERNAL_HOOKS", pt = function() {
  ct(!1, "Can not find FormContext. Please make sure you wrap Field under Form.");
}, Zr = /* @__PURE__ */ u.createContext({
  getFieldValue: pt,
  getFieldsValue: pt,
  getFieldError: pt,
  getFieldWarning: pt,
  getFieldsError: pt,
  isFieldsTouched: pt,
  isFieldTouched: pt,
  isFieldValidating: pt,
  isFieldsValidating: pt,
  resetFields: pt,
  setFields: pt,
  setFieldValue: pt,
  setFieldsValue: pt,
  validateFields: pt,
  submit: pt,
  getInternalHooks: function() {
    return pt(), {
      dispatch: pt,
      initEntityValue: pt,
      registerField: pt,
      useSubscribe: pt,
      setInitialValues: pt,
      destroyForm: pt,
      setCallbacks: pt,
      registerWatch: pt,
      getFields: pt,
      setValidateMessages: pt,
      setPreserve: pt,
      getInitialValue: pt
    };
  }
}), zo = /* @__PURE__ */ u.createContext(null);
function Ts(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function k1(e) {
  return e && !!e._init;
}
function Is() {
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
var Ns = Is();
function H1(e) {
  try {
    return Function.toString.call(e).indexOf("[native code]") !== -1;
  } catch {
    return typeof e == "function";
  }
}
function W1(e, t, n) {
  if (rl()) return Reflect.construct.apply(null, arguments);
  var r = [null];
  r.push.apply(r, t);
  var a = new (e.bind.apply(e, r))();
  return n && $a(a, n.prototype), a;
}
function Ms(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return Ms = function(r) {
    if (r === null || !H1(r)) return r;
    if (typeof r != "function") throw new TypeError("Super expression must either be null or a function");
    if (t !== void 0) {
      if (t.has(r)) return t.get(r);
      t.set(r, a);
    }
    function a() {
      return W1(r, arguments, Oa(this).constructor);
    }
    return a.prototype = Object.create(r.prototype, {
      constructor: {
        value: a,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), $a(a, r);
  }, Ms(e);
}
var U1 = /%[sdj%]/g, cv = function() {
};
typeof process < "u" && process.env && process.env.NODE_ENV !== "production" && typeof window < "u" && typeof document < "u" && (cv = function(t, n) {
  typeof console < "u" && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING > "u" && n.every(function(r) {
    return typeof r == "string";
  }) && console.warn(t, n);
});
function As(e) {
  if (!e || !e.length) return null;
  var t = {};
  return e.forEach(function(n) {
    var r = n.field;
    t[r] = t[r] || [], t[r].push(n);
  }), t;
}
function on(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  var a = 0, o = n.length;
  if (typeof e == "function")
    return e.apply(null, n);
  if (typeof e == "string") {
    var i = e.replace(U1, function(s) {
      if (s === "%%")
        return "%";
      if (a >= o)
        return s;
      switch (s) {
        case "%s":
          return String(n[a++]);
        case "%d":
          return Number(n[a++]);
        case "%j":
          try {
            return JSON.stringify(n[a++]);
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
function K1(e) {
  return e === "string" || e === "url" || e === "hex" || e === "email" || e === "date" || e === "pattern";
}
function Ft(e, t) {
  return !!(e == null || t === "array" && Array.isArray(e) && !e.length || K1(t) && typeof e == "string" && !e);
}
function G1(e, t, n) {
  var r = [], a = 0, o = e.length;
  function i(s) {
    r.push.apply(r, Pe(s || [])), a++, a === o && n(r);
  }
  e.forEach(function(s) {
    t(s, i);
  });
}
function nu(e, t, n) {
  var r = 0, a = e.length;
  function o(i) {
    if (i && i.length) {
      n(i);
      return;
    }
    var s = r;
    r = r + 1, s < a ? t(e[s], o) : n([]);
  }
  o([]);
}
function q1(e) {
  var t = [];
  return Object.keys(e).forEach(function(n) {
    t.push.apply(t, Pe(e[n] || []));
  }), t;
}
var ru = /* @__PURE__ */ function(e) {
  or(n, e);
  var t = ir(n);
  function n(r, a) {
    var o;
    return kt(this, n), o = t.call(this, "Async Validation Error"), z(tt(o), "errors", void 0), z(tt(o), "fields", void 0), o.errors = r, o.fields = a, o;
  }
  return Ht(n);
}(/* @__PURE__ */ Ms(Error));
function X1(e, t, n, r, a) {
  if (t.first) {
    var o = new Promise(function(v, g) {
      var p = function(S) {
        return r(S), S.length ? g(new ru(S, As(S))) : v(a);
      }, h = q1(e);
      nu(h, n, p);
    });
    return o.catch(function(v) {
      return v;
    }), o;
  }
  var i = t.firstFields === !0 ? Object.keys(e) : t.firstFields || [], s = Object.keys(e), l = s.length, c = 0, d = [], f = new Promise(function(v, g) {
    var p = function(m) {
      if (d.push.apply(d, m), c++, c === l)
        return r(d), d.length ? g(new ru(d, As(d))) : v(a);
    };
    s.length || (r(d), v(a)), s.forEach(function(h) {
      var m = e[h];
      i.indexOf(h) !== -1 ? nu(m, n, p) : G1(m, n, p);
    });
  });
  return f.catch(function(v) {
    return v;
  }), f;
}
function Z1(e) {
  return !!(e && e.message !== void 0);
}
function Y1(e, t) {
  for (var n = e, r = 0; r < t.length; r++) {
    if (n == null)
      return n;
    n = n[t[r]];
  }
  return n;
}
function au(e, t) {
  return function(n) {
    var r;
    return e.fullFields ? r = Y1(t, e.fullFields) : r = t[n.field || e.fullField], Z1(n) ? (n.field = n.field || e.fullField, n.fieldValue = r, n) : {
      message: typeof n == "function" ? n() : n,
      fieldValue: r,
      field: n.field || e.fullField
    };
  };
}
function ou(e, t) {
  if (t) {
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = t[n];
        ke(r) === "object" && ke(e[n]) === "object" ? e[n] = B(B({}, e[n]), r) : e[n] = r;
      }
  }
  return e;
}
var Or = "enum", Q1 = function(t, n, r, a, o) {
  t[Or] = Array.isArray(t[Or]) ? t[Or] : [], t[Or].indexOf(n) === -1 && a.push(on(o.messages[Or], t.fullField, t[Or].join(", ")));
}, J1 = function(t, n, r, a, o) {
  if (t.pattern) {
    if (t.pattern instanceof RegExp)
      t.pattern.lastIndex = 0, t.pattern.test(n) || a.push(on(o.messages.pattern.mismatch, t.fullField, n, t.pattern));
    else if (typeof t.pattern == "string") {
      var i = new RegExp(t.pattern);
      i.test(n) || a.push(on(o.messages.pattern.mismatch, t.fullField, n, t.pattern));
    }
  }
}, ey = function(t, n, r, a, o) {
  var i = typeof t.len == "number", s = typeof t.min == "number", l = typeof t.max == "number", c = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, d = n, f = null, v = typeof n == "number", g = typeof n == "string", p = Array.isArray(n);
  if (v ? f = "number" : g ? f = "string" : p && (f = "array"), !f)
    return !1;
  p && (d = n.length), g && (d = n.replace(c, "_").length), i ? d !== t.len && a.push(on(o.messages[f].len, t.fullField, t.len)) : s && !l && d < t.min ? a.push(on(o.messages[f].min, t.fullField, t.min)) : l && !s && d > t.max ? a.push(on(o.messages[f].max, t.fullField, t.max)) : s && l && (d < t.min || d > t.max) && a.push(on(o.messages[f].range, t.fullField, t.min, t.max));
}, uv = function(t, n, r, a, o, i) {
  t.required && (!r.hasOwnProperty(t.field) || Ft(n, i || t.type)) && a.push(on(o.messages.required, t.fullField));
}, uo;
const ty = function() {
  if (uo)
    return uo;
  var e = "[a-fA-F\\d:]", t = function(O) {
    return O && O.includeBoundaries ? "(?:(?<=\\s|^)(?=".concat(e, ")|(?<=").concat(e, ")(?=\\s|$))") : "";
  }, n = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}", r = "[a-fA-F\\d]{1,4}", a = [
    "(?:".concat(r, ":){7}(?:").concat(r, "|:)"),
    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
    "(?:".concat(r, ":){6}(?:").concat(n, "|:").concat(r, "|:)"),
    // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::
    "(?:".concat(r, ":){5}(?::").concat(n, "|(?::").concat(r, "){1,2}|:)"),
    // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::
    "(?:".concat(r, ":){4}(?:(?::").concat(r, "){0,1}:").concat(n, "|(?::").concat(r, "){1,3}|:)"),
    // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::
    "(?:".concat(r, ":){3}(?:(?::").concat(r, "){0,2}:").concat(n, "|(?::").concat(r, "){1,4}|:)"),
    // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::
    "(?:".concat(r, ":){2}(?:(?::").concat(r, "){0,3}:").concat(n, "|(?::").concat(r, "){1,5}|:)"),
    // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::
    "(?:".concat(r, ":){1}(?:(?::").concat(r, "){0,4}:").concat(n, "|(?::").concat(r, "){1,6}|:)"),
    // 1::              1::3:4:5:6:7:8   1::8            1::
    "(?::(?:(?::".concat(r, "){0,5}:").concat(n, "|(?::").concat(r, "){1,7}|:))")
    // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::
  ], o = "(?:%[0-9a-zA-Z]{1,})?", i = "(?:".concat(a.join("|"), ")").concat(o), s = new RegExp("(?:^".concat(n, "$)|(?:^").concat(i, "$)")), l = new RegExp("^".concat(n, "$")), c = new RegExp("^".concat(i, "$")), d = function(O) {
    return O && O.exact ? s : new RegExp("(?:".concat(t(O)).concat(n).concat(t(O), ")|(?:").concat(t(O)).concat(i).concat(t(O), ")"), "g");
  };
  d.v4 = function(C) {
    return C && C.exact ? l : new RegExp("".concat(t(C)).concat(n).concat(t(C)), "g");
  }, d.v6 = function(C) {
    return C && C.exact ? c : new RegExp("".concat(t(C)).concat(i).concat(t(C)), "g");
  };
  var f = "(?:(?:[a-z]+:)?//)", v = "(?:\\S+(?::\\S*)?@)?", g = d.v4().source, p = d.v6().source, h = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)", m = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*", S = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", b = "(?::\\d{2,5})?", y = '(?:[/?#][^\\s"]*)?', w = "(?:".concat(f, "|www\\.)").concat(v, "(?:localhost|").concat(g, "|").concat(p, "|").concat(h).concat(m).concat(S, ")").concat(b).concat(y);
  return uo = new RegExp("(?:^".concat(w, "$)"), "i"), uo;
};
var iu = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  // url: new RegExp(
  //   '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
  //   'i',
  // ),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
}, ha = {
  integer: function(t) {
    return ha.number(t) && parseInt(t, 10) === t;
  },
  float: function(t) {
    return ha.number(t) && !ha.integer(t);
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
    return ke(t) === "object" && !ha.array(t);
  },
  method: function(t) {
    return typeof t == "function";
  },
  email: function(t) {
    return typeof t == "string" && t.length <= 320 && !!t.match(iu.email);
  },
  url: function(t) {
    return typeof t == "string" && t.length <= 2048 && !!t.match(ty());
  },
  hex: function(t) {
    return typeof t == "string" && !!t.match(iu.hex);
  }
}, ny = function(t, n, r, a, o) {
  if (t.required && n === void 0) {
    uv(t, n, r, a, o);
    return;
  }
  var i = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"], s = t.type;
  i.indexOf(s) > -1 ? ha[s](n) || a.push(on(o.messages.types[s], t.fullField, t.type)) : s && ke(n) !== t.type && a.push(on(o.messages.types[s], t.fullField, t.type));
}, ry = function(t, n, r, a, o) {
  (/^\s+$/.test(n) || n === "") && a.push(on(o.messages.whitespace, t.fullField));
};
const at = {
  required: uv,
  whitespace: ry,
  type: ny,
  range: ey,
  enum: Q1,
  pattern: J1
};
var ay = function(t, n, r, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (Ft(n) && !t.required)
      return r();
    at.required(t, n, a, i, o);
  }
  r(i);
}, oy = function(t, n, r, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (n == null && !t.required)
      return r();
    at.required(t, n, a, i, o, "array"), n != null && (at.type(t, n, a, i, o), at.range(t, n, a, i, o));
  }
  r(i);
}, iy = function(t, n, r, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (Ft(n) && !t.required)
      return r();
    at.required(t, n, a, i, o), n !== void 0 && at.type(t, n, a, i, o);
  }
  r(i);
}, sy = function(t, n, r, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (Ft(n, "date") && !t.required)
      return r();
    if (at.required(t, n, a, i, o), !Ft(n, "date")) {
      var l;
      n instanceof Date ? l = n : l = new Date(n), at.type(t, l, a, i, o), l && at.range(t, l.getTime(), a, i, o);
    }
  }
  r(i);
}, ly = "enum", cy = function(t, n, r, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (Ft(n) && !t.required)
      return r();
    at.required(t, n, a, i, o), n !== void 0 && at[ly](t, n, a, i, o);
  }
  r(i);
}, uy = function(t, n, r, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (Ft(n) && !t.required)
      return r();
    at.required(t, n, a, i, o), n !== void 0 && (at.type(t, n, a, i, o), at.range(t, n, a, i, o));
  }
  r(i);
}, dy = function(t, n, r, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (Ft(n) && !t.required)
      return r();
    at.required(t, n, a, i, o), n !== void 0 && (at.type(t, n, a, i, o), at.range(t, n, a, i, o));
  }
  r(i);
}, fy = function(t, n, r, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (Ft(n) && !t.required)
      return r();
    at.required(t, n, a, i, o), n !== void 0 && at.type(t, n, a, i, o);
  }
  r(i);
}, vy = function(t, n, r, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (n === "" && (n = void 0), Ft(n) && !t.required)
      return r();
    at.required(t, n, a, i, o), n !== void 0 && (at.type(t, n, a, i, o), at.range(t, n, a, i, o));
  }
  r(i);
}, my = function(t, n, r, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (Ft(n) && !t.required)
      return r();
    at.required(t, n, a, i, o), n !== void 0 && at.type(t, n, a, i, o);
  }
  r(i);
}, gy = function(t, n, r, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (Ft(n, "string") && !t.required)
      return r();
    at.required(t, n, a, i, o), Ft(n, "string") || at.pattern(t, n, a, i, o);
  }
  r(i);
}, py = function(t, n, r, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (Ft(n) && !t.required)
      return r();
    at.required(t, n, a, i, o), Ft(n) || at.type(t, n, a, i, o);
  }
  r(i);
}, hy = function(t, n, r, a, o) {
  var i = [], s = Array.isArray(n) ? "array" : ke(n);
  at.required(t, n, a, i, o, s), r(i);
}, by = function(t, n, r, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (Ft(n, "string") && !t.required)
      return r();
    at.required(t, n, a, i, o, "string"), Ft(n, "string") || (at.type(t, n, a, i, o), at.range(t, n, a, i, o), at.pattern(t, n, a, i, o), t.whitespace === !0 && at.whitespace(t, n, a, i, o));
  }
  r(i);
}, Mi = function(t, n, r, a, o) {
  var i = t.type, s = [], l = t.required || !t.required && a.hasOwnProperty(t.field);
  if (l) {
    if (Ft(n, i) && !t.required)
      return r();
    at.required(t, n, a, s, o, i), Ft(n, i) || at.type(t, n, a, s, o);
  }
  r(s);
};
const wa = {
  string: by,
  method: fy,
  number: vy,
  boolean: iy,
  regexp: py,
  integer: dy,
  float: uy,
  array: oy,
  object: my,
  enum: cy,
  pattern: gy,
  date: sy,
  url: Mi,
  hex: Mi,
  email: Mi,
  required: hy,
  any: ay
};
var Ha = /* @__PURE__ */ function() {
  function e(t) {
    kt(this, e), z(this, "rules", null), z(this, "_messages", Ns), this.define(t);
  }
  return Ht(e, [{
    key: "define",
    value: function(n) {
      var r = this;
      if (!n)
        throw new Error("Cannot configure a schema with no rules");
      if (ke(n) !== "object" || Array.isArray(n))
        throw new Error("Rules must be an object");
      this.rules = {}, Object.keys(n).forEach(function(a) {
        var o = n[a];
        r.rules[a] = Array.isArray(o) ? o : [o];
      });
    }
  }, {
    key: "messages",
    value: function(n) {
      return n && (this._messages = ou(Is(), n)), this._messages;
    }
  }, {
    key: "validate",
    value: function(n) {
      var r = this, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function() {
      }, i = n, s = a, l = o;
      if (typeof s == "function" && (l = s, s = {}), !this.rules || Object.keys(this.rules).length === 0)
        return l && l(null, i), Promise.resolve(i);
      function c(p) {
        var h = [], m = {};
        function S(y) {
          if (Array.isArray(y)) {
            var w;
            h = (w = h).concat.apply(w, Pe(y));
          } else
            h.push(y);
        }
        for (var b = 0; b < p.length; b++)
          S(p[b]);
        h.length ? (m = As(h), l(h, m)) : l(null, i);
      }
      if (s.messages) {
        var d = this.messages();
        d === Ns && (d = Is()), ou(d, s.messages), s.messages = d;
      } else
        s.messages = this.messages();
      var f = {}, v = s.keys || Object.keys(this.rules);
      v.forEach(function(p) {
        var h = r.rules[p], m = i[p];
        h.forEach(function(S) {
          var b = S;
          typeof b.transform == "function" && (i === n && (i = B({}, i)), m = i[p] = b.transform(m), m != null && (b.type = b.type || (Array.isArray(m) ? "array" : ke(m)))), typeof b == "function" ? b = {
            validator: b
          } : b = B({}, b), b.validator = r.getValidationMethod(b), b.validator && (b.field = p, b.fullField = b.fullField || p, b.type = r.getType(b), f[p] = f[p] || [], f[p].push({
            rule: b,
            value: m,
            source: i,
            field: p
          }));
        });
      });
      var g = {};
      return X1(f, s, function(p, h) {
        var m = p.rule, S = (m.type === "object" || m.type === "array") && (ke(m.fields) === "object" || ke(m.defaultField) === "object");
        S = S && (m.required || !m.required && p.value), m.field = p.field;
        function b(E, x) {
          return B(B({}, x), {}, {
            fullField: "".concat(m.fullField, ".").concat(E),
            fullFields: m.fullFields ? [].concat(Pe(m.fullFields), [E]) : [E]
          });
        }
        function y() {
          var E = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], x = Array.isArray(E) ? E : [E];
          !s.suppressWarning && x.length && e.warning("async-validator:", x), x.length && m.message !== void 0 && (x = [].concat(m.message));
          var R = x.map(au(m, i));
          if (s.first && R.length)
            return g[m.field] = 1, h(R);
          if (!S)
            h(R);
          else {
            if (m.required && !p.value)
              return m.message !== void 0 ? R = [].concat(m.message).map(au(m, i)) : s.error && (R = [s.error(m, on(s.messages.required, m.field))]), h(R);
            var T = {};
            m.defaultField && Object.keys(p.value).map(function(I) {
              T[I] = m.defaultField;
            }), T = B(B({}, T), p.rule.fields);
            var M = {};
            Object.keys(T).forEach(function(I) {
              var _ = T[I], k = Array.isArray(_) ? _ : [_];
              M[I] = k.map(b.bind(null, I));
            });
            var j = new e(M);
            j.messages(s.messages), p.rule.options && (p.rule.options.messages = s.messages, p.rule.options.error = s.error), j.validate(p.value, p.rule.options || s, function(I) {
              var _ = [];
              R && R.length && _.push.apply(_, Pe(R)), I && I.length && _.push.apply(_, Pe(I)), h(_.length ? _ : null);
            });
          }
        }
        var w;
        if (m.asyncValidator)
          w = m.asyncValidator(m, p.value, y, p.source, s);
        else if (m.validator) {
          try {
            w = m.validator(m, p.value, y, p.source, s);
          } catch (E) {
            var C, O;
            (C = (O = console).error) === null || C === void 0 || C.call(O, E), s.suppressValidatorError || setTimeout(function() {
              throw E;
            }, 0), y(E.message);
          }
          w === !0 ? y() : w === !1 ? y(typeof m.message == "function" ? m.message(m.fullField || m.field) : m.message || "".concat(m.fullField || m.field, " fails")) : w instanceof Array ? y(w) : w instanceof Error && y(w.message);
        }
        w && w.then && w.then(function() {
          return y();
        }, function(E) {
          return y(E);
        });
      }, function(p) {
        c(p);
      }, i);
    }
  }, {
    key: "getType",
    value: function(n) {
      if (n.type === void 0 && n.pattern instanceof RegExp && (n.type = "pattern"), typeof n.validator != "function" && n.type && !wa.hasOwnProperty(n.type))
        throw new Error(on("Unknown rule type %s", n.type));
      return n.type || "string";
    }
  }, {
    key: "getValidationMethod",
    value: function(n) {
      if (typeof n.validator == "function")
        return n.validator;
      var r = Object.keys(n), a = r.indexOf("message");
      return a !== -1 && r.splice(a, 1), r.length === 1 && r[0] === "required" ? wa.required : wa[this.getType(n)] || void 0;
    }
  }]), e;
}();
z(Ha, "register", function(t, n) {
  if (typeof n != "function")
    throw new Error("Cannot register a validator by type, validator is not a function");
  wa[t] = n;
});
z(Ha, "warning", cv);
z(Ha, "messages", Ns);
z(Ha, "validators", wa);
var rn = "'${name}' is not a valid ${type}", dv = {
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
    string: rn,
    method: rn,
    array: rn,
    object: rn,
    number: rn,
    date: rn,
    boolean: rn,
    integer: rn,
    float: rn,
    regexp: rn,
    email: rn,
    url: rn,
    hex: rn
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
}, su = Ha;
function yy(e, t) {
  return e.replace(/\$\{\w+\}/g, function(n) {
    var r = n.slice(2, -1);
    return t[r];
  });
}
var lu = "CODE_LOGIC_ERROR";
function Ls(e, t, n, r, a) {
  return js.apply(this, arguments);
}
function js() {
  return js = Sr(/* @__PURE__ */ tn().mark(function e(t, n, r, a, o) {
    var i, s, l, c, d, f, v, g, p;
    return tn().wrap(function(m) {
      for (; ; ) switch (m.prev = m.next) {
        case 0:
          return i = B({}, r), delete i.ruleIndex, su.warning = function() {
          }, i.validator && (s = i.validator, i.validator = function() {
            try {
              return s.apply(void 0, arguments);
            } catch (S) {
              return console.error(S), Promise.reject(lu);
            }
          }), l = null, i && i.type === "array" && i.defaultField && (l = i.defaultField, delete i.defaultField), c = new su(z({}, t, [i])), d = jr(dv, a.validateMessages), c.messages(d), f = [], m.prev = 10, m.next = 13, Promise.resolve(c.validate(z({}, t, n), B({}, a)));
        case 13:
          m.next = 18;
          break;
        case 15:
          m.prev = 15, m.t0 = m.catch(10), m.t0.errors && (f = m.t0.errors.map(function(S, b) {
            var y = S.message, w = y === lu ? d.default : y;
            return /* @__PURE__ */ u.isValidElement(w) ? (
              // Wrap ReactNode with `key`
              /* @__PURE__ */ u.cloneElement(w, {
                key: "error_".concat(b)
              })
            ) : w;
          }));
        case 18:
          if (!(!f.length && l)) {
            m.next = 23;
            break;
          }
          return m.next = 21, Promise.all(n.map(function(S, b) {
            return Ls("".concat(t, ".").concat(b), S, l, a, o);
          }));
        case 21:
          return v = m.sent, m.abrupt("return", v.reduce(function(S, b) {
            return [].concat(Pe(S), Pe(b));
          }, []));
        case 23:
          return g = B(B({}, r), {}, {
            name: t,
            enum: (r.enum || []).join(", ")
          }, o), p = f.map(function(S) {
            return typeof S == "string" ? yy(S, g) : S;
          }), m.abrupt("return", p);
        case 26:
        case "end":
          return m.stop();
      }
    }, e, null, [[10, 15]]);
  })), js.apply(this, arguments);
}
function Cy(e, t, n, r, a, o) {
  var i = e.join("."), s = n.map(function(d, f) {
    var v = d.validator, g = B(B({}, d), {}, {
      ruleIndex: f
    });
    return v && (g.validator = function(p, h, m) {
      var S = !1, b = function() {
        for (var C = arguments.length, O = new Array(C), E = 0; E < C; E++)
          O[E] = arguments[E];
        Promise.resolve().then(function() {
          ct(!S, "Your validator function has already return a promise. `callback` will be ignored."), S || m.apply(void 0, O);
        });
      }, y = v(p, h, b);
      S = y && typeof y.then == "function" && typeof y.catch == "function", ct(S, "`callback` is deprecated. Please return a promise instead."), S && y.then(function() {
        m();
      }).catch(function(w) {
        m(w || " ");
      });
    }), g;
  }).sort(function(d, f) {
    var v = d.warningOnly, g = d.ruleIndex, p = f.warningOnly, h = f.ruleIndex;
    return !!v == !!p ? g - h : v ? 1 : -1;
  }), l;
  if (a === !0)
    l = new Promise(/* @__PURE__ */ function() {
      var d = Sr(/* @__PURE__ */ tn().mark(function f(v, g) {
        var p, h, m;
        return tn().wrap(function(b) {
          for (; ; ) switch (b.prev = b.next) {
            case 0:
              p = 0;
            case 1:
              if (!(p < s.length)) {
                b.next = 12;
                break;
              }
              return h = s[p], b.next = 5, Ls(i, t, h, r, o);
            case 5:
              if (m = b.sent, !m.length) {
                b.next = 9;
                break;
              }
              return g([{
                errors: m,
                rule: h
              }]), b.abrupt("return");
            case 9:
              p += 1, b.next = 1;
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
      return Ls(i, t, d, r, o).then(function(f) {
        return {
          errors: f,
          rule: d
        };
      });
    });
    l = (a ? wy(c) : Sy(c)).then(function(d) {
      return Promise.reject(d);
    });
  }
  return l.catch(function(d) {
    return d;
  }), l;
}
function Sy(e) {
  return Fs.apply(this, arguments);
}
function Fs() {
  return Fs = Sr(/* @__PURE__ */ tn().mark(function e(t) {
    return tn().wrap(function(r) {
      for (; ; ) switch (r.prev = r.next) {
        case 0:
          return r.abrupt("return", Promise.all(t).then(function(a) {
            var o, i = (o = []).concat.apply(o, Pe(a));
            return i;
          }));
        case 1:
        case "end":
          return r.stop();
      }
    }, e);
  })), Fs.apply(this, arguments);
}
function wy(e) {
  return Ds.apply(this, arguments);
}
function Ds() {
  return Ds = Sr(/* @__PURE__ */ tn().mark(function e(t) {
    var n;
    return tn().wrap(function(a) {
      for (; ; ) switch (a.prev = a.next) {
        case 0:
          return n = 0, a.abrupt("return", new Promise(function(o) {
            t.forEach(function(i) {
              i.then(function(s) {
                s.errors.length && o([s]), n += 1, n === t.length && o([]);
              });
            });
          }));
        case 2:
        case "end":
          return a.stop();
      }
    }, e);
  })), Ds.apply(this, arguments);
}
function Pt(e) {
  return Ts(e);
}
function cu(e, t) {
  var n = {};
  return t.forEach(function(r) {
    var a = Nn(e, r);
    n = bn(n, r, a);
  }), n;
}
function Br(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  return e && e.some(function(r) {
    return fv(t, r, n);
  });
}
function fv(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  return !e || !t || !n && e.length !== t.length ? !1 : t.every(function(r, a) {
    return e[a] === r;
  });
}
function Ey(e, t) {
  if (e === t)
    return !0;
  if (!e && t || e && !t || !e || !t || ke(e) !== "object" || ke(t) !== "object")
    return !1;
  var n = Object.keys(e), r = Object.keys(t), a = new Set([].concat(n, r));
  return Pe(a).every(function(o) {
    var i = e[o], s = t[o];
    return typeof i == "function" && typeof s == "function" ? !0 : i === s;
  });
}
function xy(e) {
  var t = arguments.length <= 1 ? void 0 : arguments[1];
  return t && t.target && ke(t.target) === "object" && e in t.target ? t.target[e] : t;
}
function uu(e, t, n) {
  var r = e.length;
  if (t < 0 || t >= r || n < 0 || n >= r)
    return e;
  var a = e[t], o = t - n;
  return o > 0 ? [].concat(Pe(e.slice(0, n)), [a], Pe(e.slice(n, t)), Pe(e.slice(t + 1, r))) : o < 0 ? [].concat(Pe(e.slice(0, t)), Pe(e.slice(t + 1, n + 1)), [a], Pe(e.slice(n + 1, r))) : e;
}
var $y = ["name"], ln = [];
function du(e, t, n, r, a, o) {
  return typeof e == "function" ? e(t, n, "source" in o ? {
    source: o.source
  } : {}) : r !== a;
}
var El = /* @__PURE__ */ function(e) {
  or(n, e);
  var t = ir(n);
  function n(r) {
    var a;
    if (kt(this, n), a = t.call(this, r), z(tt(a), "state", {
      resetCount: 0
    }), z(tt(a), "cancelRegisterFunc", null), z(tt(a), "mounted", !1), z(tt(a), "touched", !1), z(tt(a), "dirty", !1), z(tt(a), "validatePromise", void 0), z(tt(a), "prevValidating", void 0), z(tt(a), "errors", ln), z(tt(a), "warnings", ln), z(tt(a), "cancelRegister", function() {
      var l = a.props, c = l.preserve, d = l.isListField, f = l.name;
      a.cancelRegisterFunc && a.cancelRegisterFunc(d, c, Pt(f)), a.cancelRegisterFunc = null;
    }), z(tt(a), "getNamePath", function() {
      var l = a.props, c = l.name, d = l.fieldContext, f = d.prefixName, v = f === void 0 ? [] : f;
      return c !== void 0 ? [].concat(Pe(v), Pe(c)) : [];
    }), z(tt(a), "getRules", function() {
      var l = a.props, c = l.rules, d = c === void 0 ? [] : c, f = l.fieldContext;
      return d.map(function(v) {
        return typeof v == "function" ? v(f) : v;
      });
    }), z(tt(a), "refresh", function() {
      a.mounted && a.setState(function(l) {
        var c = l.resetCount;
        return {
          resetCount: c + 1
        };
      });
    }), z(tt(a), "metaCache", null), z(tt(a), "triggerMetaEvent", function(l) {
      var c = a.props.onMetaChange;
      if (c) {
        var d = B(B({}, a.getMeta()), {}, {
          destroy: l
        });
        Wr(a.metaCache, d) || c(d), a.metaCache = d;
      } else
        a.metaCache = null;
    }), z(tt(a), "onStoreChange", function(l, c, d) {
      var f = a.props, v = f.shouldUpdate, g = f.dependencies, p = g === void 0 ? [] : g, h = f.onReset, m = d.store, S = a.getNamePath(), b = a.getValue(l), y = a.getValue(m), w = c && Br(c, S);
      switch (d.type === "valueUpdate" && d.source === "external" && !Wr(b, y) && (a.touched = !0, a.dirty = !0, a.validatePromise = null, a.errors = ln, a.warnings = ln, a.triggerMetaEvent()), d.type) {
        case "reset":
          if (!c || w) {
            a.touched = !1, a.dirty = !1, a.validatePromise = void 0, a.errors = ln, a.warnings = ln, a.triggerMetaEvent(), h == null || h(), a.refresh();
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
            "touched" in C && (a.touched = C.touched), "validating" in C && !("originRCField" in C) && (a.validatePromise = C.validating ? Promise.resolve([]) : null), "errors" in C && (a.errors = C.errors || ln), "warnings" in C && (a.warnings = C.warnings || ln), a.dirty = !0, a.triggerMetaEvent(), a.reRender();
            return;
          } else if ("value" in C && Br(c, S, !0)) {
            a.reRender();
            return;
          }
          if (v && !S.length && du(v, l, m, b, y, d)) {
            a.reRender();
            return;
          }
          break;
        }
        case "dependenciesUpdate": {
          var O = p.map(Pt);
          if (O.some(function(E) {
            return Br(d.relatedFields, E);
          })) {
            a.reRender();
            return;
          }
          break;
        }
        default:
          if (w || (!p.length || S.length || v) && du(v, l, m, b, y, d)) {
            a.reRender();
            return;
          }
          break;
      }
      v === !0 && a.reRender();
    }), z(tt(a), "validateRules", function(l) {
      var c = a.getNamePath(), d = a.getValue(), f = l || {}, v = f.triggerName, g = f.validateOnly, p = g === void 0 ? !1 : g, h = Promise.resolve().then(/* @__PURE__ */ Sr(/* @__PURE__ */ tn().mark(function m() {
        var S, b, y, w, C, O, E;
        return tn().wrap(function(R) {
          for (; ; ) switch (R.prev = R.next) {
            case 0:
              if (a.mounted) {
                R.next = 2;
                break;
              }
              return R.abrupt("return", []);
            case 2:
              if (S = a.props, b = S.validateFirst, y = b === void 0 ? !1 : b, w = S.messageVariables, C = S.validateDebounce, O = a.getRules(), v && (O = O.filter(function(T) {
                return T;
              }).filter(function(T) {
                var M = T.validateTrigger;
                if (!M)
                  return !0;
                var j = Ts(M);
                return j.includes(v);
              })), !(C && v)) {
                R.next = 10;
                break;
              }
              return R.next = 8, new Promise(function(T) {
                setTimeout(T, C);
              });
            case 8:
              if (a.validatePromise === h) {
                R.next = 10;
                break;
              }
              return R.abrupt("return", []);
            case 10:
              return E = Cy(c, d, O, l, y, w), E.catch(function(T) {
                return T;
              }).then(function() {
                var T = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ln;
                if (a.validatePromise === h) {
                  var M;
                  a.validatePromise = null;
                  var j = [], I = [];
                  (M = T.forEach) === null || M === void 0 || M.call(T, function(_) {
                    var k = _.rule.warningOnly, N = _.errors, P = N === void 0 ? ln : N;
                    k ? I.push.apply(I, Pe(P)) : j.push.apply(j, Pe(P));
                  }), a.errors = j, a.warnings = I, a.triggerMetaEvent(), a.reRender();
                }
              }), R.abrupt("return", E);
            case 13:
            case "end":
              return R.stop();
          }
        }, m);
      })));
      return p || (a.validatePromise = h, a.dirty = !0, a.errors = ln, a.warnings = ln, a.triggerMetaEvent(), a.reRender()), h;
    }), z(tt(a), "isFieldValidating", function() {
      return !!a.validatePromise;
    }), z(tt(a), "isFieldTouched", function() {
      return a.touched;
    }), z(tt(a), "isFieldDirty", function() {
      if (a.dirty || a.props.initialValue !== void 0)
        return !0;
      var l = a.props.fieldContext, c = l.getInternalHooks(mr), d = c.getInitialValue;
      return d(a.getNamePath()) !== void 0;
    }), z(tt(a), "getErrors", function() {
      return a.errors;
    }), z(tt(a), "getWarnings", function() {
      return a.warnings;
    }), z(tt(a), "isListField", function() {
      return a.props.isListField;
    }), z(tt(a), "isList", function() {
      return a.props.isList;
    }), z(tt(a), "isPreserve", function() {
      return a.props.preserve;
    }), z(tt(a), "getMeta", function() {
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
    }), z(tt(a), "getOnlyChild", function(l) {
      if (typeof l == "function") {
        var c = a.getMeta();
        return B(B({}, a.getOnlyChild(l(a.getControlled(), c, a.props.fieldContext))), {}, {
          isFunction: !0
        });
      }
      var d = rr(l);
      return d.length !== 1 || !/* @__PURE__ */ u.isValidElement(d[0]) ? {
        child: d,
        isFunction: !1
      } : {
        child: d[0],
        isFunction: !1
      };
    }), z(tt(a), "getValue", function(l) {
      var c = a.props.fieldContext.getFieldsValue, d = a.getNamePath();
      return Nn(l || c(!0), d);
    }), z(tt(a), "getControlled", function() {
      var l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, c = a.props, d = c.name, f = c.trigger, v = c.validateTrigger, g = c.getValueFromEvent, p = c.normalize, h = c.valuePropName, m = c.getValueProps, S = c.fieldContext, b = v !== void 0 ? v : S.validateTrigger, y = a.getNamePath(), w = S.getInternalHooks, C = S.getFieldsValue, O = w(mr), E = O.dispatch, x = a.getValue(), R = m || function(_) {
        return z({}, h, _);
      }, T = l[f], M = d !== void 0 ? R(x) : {};
      process.env.NODE_ENV !== "production" && M && Object.keys(M).forEach(function(_) {
        ct(typeof M[_] != "function", "It's not recommended to generate dynamic function prop by `getValueProps`. Please pass it to child component directly (prop: ".concat(_, ")"));
      });
      var j = B(B({}, l), M);
      j[f] = function() {
        a.touched = !0, a.dirty = !0, a.triggerMetaEvent();
        for (var _, k = arguments.length, N = new Array(k), P = 0; P < k; P++)
          N[P] = arguments[P];
        g ? _ = g.apply(void 0, N) : _ = xy.apply(void 0, [h].concat(N)), p && (_ = p(_, x, C(!0))), E({
          type: "updateValue",
          namePath: y,
          value: _
        }), T && T.apply(void 0, N);
      };
      var I = Ts(b || []);
      return I.forEach(function(_) {
        var k = j[_];
        j[_] = function() {
          k && k.apply(void 0, arguments);
          var N = a.props.rules;
          N && N.length && E({
            type: "validateField",
            namePath: y,
            triggerName: _
          });
        };
      }), j;
    }), r.fieldContext) {
      var o = r.fieldContext.getInternalHooks, i = o(mr), s = i.initEntityValue;
      s(tt(a));
    }
    return a;
  }
  return Ht(n, [{
    key: "componentDidMount",
    value: function() {
      var a = this.props, o = a.shouldUpdate, i = a.fieldContext;
      if (this.mounted = !0, i) {
        var s = i.getInternalHooks, l = s(mr), c = l.registerField;
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
      return l ? c = s : /* @__PURE__ */ u.isValidElement(s) ? c = /* @__PURE__ */ u.cloneElement(s, this.getControlled(s.props)) : (ct(!s, "`children` of Field is not validate ReactElement."), c = s), /* @__PURE__ */ u.createElement(u.Fragment, {
        key: a
      }, c);
    }
  }]), n;
}(u.Component);
z(El, "contextType", Zr);
z(El, "defaultProps", {
  trigger: "onChange",
  valuePropName: "value"
});
function vv(e) {
  var t = e.name, n = Ze(e, $y), r = u.useContext(Zr), a = u.useContext(zo), o = t !== void 0 ? Pt(t) : void 0, i = "keep";
  return n.isListField || (i = "_".concat((o || []).join("_"))), process.env.NODE_ENV !== "production" && n.preserve === !1 && n.isListField && o.length <= 1 && ct(!1, "`preserve` should not apply on Form.List fields."), /* @__PURE__ */ u.createElement(El, me({
    key: i,
    name: o,
    isListField: !!a
  }, n, {
    fieldContext: r
  }));
}
function Oy(e) {
  var t = e.name, n = e.initialValue, r = e.children, a = e.rules, o = e.validateTrigger, i = e.isListField, s = u.useContext(Zr), l = u.useContext(zo), c = u.useRef({
    keys: [],
    id: 0
  }), d = c.current, f = u.useMemo(function() {
    var h = Pt(s.prefixName) || [];
    return [].concat(Pe(h), Pe(Pt(t)));
  }, [s.prefixName, t]), v = u.useMemo(function() {
    return B(B({}, s), {}, {
      prefixName: f
    });
  }, [s, f]), g = u.useMemo(function() {
    return {
      getKey: function(m) {
        var S = f.length, b = m[S];
        return [d.keys[b], m.slice(S + 1)];
      }
    };
  }, [f]);
  if (typeof r != "function")
    return ct(!1, "Form.List only accepts function as children."), null;
  var p = function(m, S, b) {
    var y = b.source;
    return y === "internal" ? !1 : m !== S;
  };
  return /* @__PURE__ */ u.createElement(zo.Provider, {
    value: g
  }, /* @__PURE__ */ u.createElement(Zr.Provider, {
    value: v
  }, /* @__PURE__ */ u.createElement(vv, {
    name: [],
    shouldUpdate: p,
    rules: a,
    validateTrigger: o,
    initialValue: n,
    isList: !0,
    isListField: i ?? !!l
  }, function(h, m) {
    var S = h.value, b = S === void 0 ? [] : S, y = h.onChange, w = s.getFieldValue, C = function() {
      var R = w(f || []);
      return R || [];
    }, O = {
      add: function(R, T) {
        var M = C();
        T >= 0 && T <= M.length ? (d.keys = [].concat(Pe(d.keys.slice(0, T)), [d.id], Pe(d.keys.slice(T))), y([].concat(Pe(M.slice(0, T)), [R], Pe(M.slice(T))))) : (process.env.NODE_ENV !== "production" && (T < 0 || T > M.length) && ct(!1, "The second parameter of the add function should be a valid positive number."), d.keys = [].concat(Pe(d.keys), [d.id]), y([].concat(Pe(M), [R]))), d.id += 1;
      },
      remove: function(R) {
        var T = C(), M = new Set(Array.isArray(R) ? R : [R]);
        M.size <= 0 || (d.keys = d.keys.filter(function(j, I) {
          return !M.has(I);
        }), y(T.filter(function(j, I) {
          return !M.has(I);
        })));
      },
      move: function(R, T) {
        if (R !== T) {
          var M = C();
          R < 0 || R >= M.length || T < 0 || T >= M.length || (d.keys = uu(d.keys, R, T), y(uu(M, R, T)));
        }
      }
    }, E = b || [];
    return Array.isArray(E) || (E = [], process.env.NODE_ENV !== "production" && ct(!1, "Current value of '".concat(f.join(" > "), "' is not an array type."))), r(E.map(function(x, R) {
      var T = d.keys[R];
      return T === void 0 && (d.keys[R] = d.id, T = d.keys[R], d.id += 1), {
        name: R,
        key: T,
        isListField: !0
      };
    }), O, m);
  })));
}
function Ry(e) {
  var t = !1, n = e.length, r = [];
  return e.length ? new Promise(function(a, o) {
    e.forEach(function(i, s) {
      i.catch(function(l) {
        return t = !0, l;
      }).then(function(l) {
        n -= 1, r[s] = l, !(n > 0) && (t && o(r), a(r));
      });
    });
  }) : Promise.resolve([]);
}
var mv = "__@field_split__";
function Ai(e) {
  return e.map(function(t) {
    return "".concat(ke(t), ":").concat(t);
  }).join(mv);
}
var Rr = /* @__PURE__ */ function() {
  function e() {
    kt(this, e), z(this, "kvs", /* @__PURE__ */ new Map());
  }
  return Ht(e, [{
    key: "set",
    value: function(n, r) {
      this.kvs.set(Ai(n), r);
    }
  }, {
    key: "get",
    value: function(n) {
      return this.kvs.get(Ai(n));
    }
  }, {
    key: "update",
    value: function(n, r) {
      var a = this.get(n), o = r(a);
      o ? this.set(n, o) : this.delete(n);
    }
  }, {
    key: "delete",
    value: function(n) {
      this.kvs.delete(Ai(n));
    }
    // Since we only use this in test, let simply realize this
  }, {
    key: "map",
    value: function(n) {
      return Pe(this.kvs.entries()).map(function(r) {
        var a = K(r, 2), o = a[0], i = a[1], s = o.split(mv);
        return n({
          key: s.map(function(l) {
            var c = l.match(/^([^:]*):(.*)$/), d = K(c, 3), f = d[1], v = d[2];
            return f === "number" ? Number(v) : v;
          }),
          value: i
        });
      });
    }
  }, {
    key: "toJSON",
    value: function() {
      var n = {};
      return this.map(function(r) {
        var a = r.key, o = r.value;
        return n[a.join(".")] = o, null;
      }), n;
    }
  }]), e;
}(), Py = ["name"], _y = /* @__PURE__ */ Ht(function e(t) {
  var n = this;
  kt(this, e), z(this, "formHooked", !1), z(this, "forceRootUpdate", void 0), z(this, "subscribable", !0), z(this, "store", {}), z(this, "fieldEntities", []), z(this, "initialValues", {}), z(this, "callbacks", {}), z(this, "validateMessages", null), z(this, "preserve", null), z(this, "lastValidatePromise", null), z(this, "getForm", function() {
    return {
      getFieldValue: n.getFieldValue,
      getFieldsValue: n.getFieldsValue,
      getFieldError: n.getFieldError,
      getFieldWarning: n.getFieldWarning,
      getFieldsError: n.getFieldsError,
      isFieldsTouched: n.isFieldsTouched,
      isFieldTouched: n.isFieldTouched,
      isFieldValidating: n.isFieldValidating,
      isFieldsValidating: n.isFieldsValidating,
      resetFields: n.resetFields,
      setFields: n.setFields,
      setFieldValue: n.setFieldValue,
      setFieldsValue: n.setFieldsValue,
      validateFields: n.validateFields,
      submit: n.submit,
      _init: !0,
      getInternalHooks: n.getInternalHooks
    };
  }), z(this, "getInternalHooks", function(r) {
    return r === mr ? (n.formHooked = !0, {
      dispatch: n.dispatch,
      initEntityValue: n.initEntityValue,
      registerField: n.registerField,
      useSubscribe: n.useSubscribe,
      setInitialValues: n.setInitialValues,
      destroyForm: n.destroyForm,
      setCallbacks: n.setCallbacks,
      setValidateMessages: n.setValidateMessages,
      getFields: n.getFields,
      setPreserve: n.setPreserve,
      getInitialValue: n.getInitialValue,
      registerWatch: n.registerWatch
    }) : (ct(!1, "`getInternalHooks` is internal usage. Should not call directly."), null);
  }), z(this, "useSubscribe", function(r) {
    n.subscribable = r;
  }), z(this, "prevWithoutPreserves", null), z(this, "setInitialValues", function(r, a) {
    if (n.initialValues = r || {}, a) {
      var o, i = jr(r, n.store);
      (o = n.prevWithoutPreserves) === null || o === void 0 || o.map(function(s) {
        var l = s.key;
        i = bn(i, l, Nn(r, l));
      }), n.prevWithoutPreserves = null, n.updateStore(i);
    }
  }), z(this, "destroyForm", function(r) {
    if (r)
      n.updateStore({});
    else {
      var a = new Rr();
      n.getFieldEntities(!0).forEach(function(o) {
        n.isMergedPreserve(o.isPreserve()) || a.set(o.getNamePath(), !0);
      }), n.prevWithoutPreserves = a;
    }
  }), z(this, "getInitialValue", function(r) {
    var a = Nn(n.initialValues, r);
    return r.length ? jr(a) : a;
  }), z(this, "setCallbacks", function(r) {
    n.callbacks = r;
  }), z(this, "setValidateMessages", function(r) {
    n.validateMessages = r;
  }), z(this, "setPreserve", function(r) {
    n.preserve = r;
  }), z(this, "watchList", []), z(this, "registerWatch", function(r) {
    return n.watchList.push(r), function() {
      n.watchList = n.watchList.filter(function(a) {
        return a !== r;
      });
    };
  }), z(this, "notifyWatch", function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    if (n.watchList.length) {
      var a = n.getFieldsValue(), o = n.getFieldsValue(!0);
      n.watchList.forEach(function(i) {
        i(a, o, r);
      });
    }
  }), z(this, "timeoutId", null), z(this, "warningUnhooked", function() {
    process.env.NODE_ENV !== "production" && !n.timeoutId && typeof window < "u" && (n.timeoutId = setTimeout(function() {
      n.timeoutId = null, n.formHooked || ct(!1, "Instance created by `useForm` is not connected to any Form element. Forget to pass `form` prop?");
    }));
  }), z(this, "updateStore", function(r) {
    n.store = r;
  }), z(this, "getFieldEntities", function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    return r ? n.fieldEntities.filter(function(a) {
      return a.getNamePath().length;
    }) : n.fieldEntities;
  }), z(this, "getFieldsMap", function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, a = new Rr();
    return n.getFieldEntities(r).forEach(function(o) {
      var i = o.getNamePath();
      a.set(i, o);
    }), a;
  }), z(this, "getFieldEntitiesForNamePathList", function(r) {
    if (!r)
      return n.getFieldEntities(!0);
    var a = n.getFieldsMap(!0);
    return r.map(function(o) {
      var i = Pt(o);
      return a.get(i) || {
        INVALIDATE_NAME_PATH: Pt(o)
      };
    });
  }), z(this, "getFieldsValue", function(r, a) {
    n.warningUnhooked();
    var o, i, s;
    if (r === !0 || Array.isArray(r) ? (o = r, i = a) : r && ke(r) === "object" && (s = r.strict, i = r.filter), o === !0 && !i)
      return n.store;
    var l = n.getFieldEntitiesForNamePathList(Array.isArray(o) ? o : null), c = [];
    return l.forEach(function(d) {
      var f, v, g = "INVALIDATE_NAME_PATH" in d ? d.INVALIDATE_NAME_PATH : d.getNamePath();
      if (s) {
        var p, h;
        if ((p = (h = d).isList) !== null && p !== void 0 && p.call(h))
          return;
      } else if (!o && (f = (v = d).isListField) !== null && f !== void 0 && f.call(v))
        return;
      if (!i)
        c.push(g);
      else {
        var m = "getMeta" in d ? d.getMeta() : null;
        i(m) && c.push(g);
      }
    }), cu(n.store, c.map(Pt));
  }), z(this, "getFieldValue", function(r) {
    n.warningUnhooked();
    var a = Pt(r);
    return Nn(n.store, a);
  }), z(this, "getFieldsError", function(r) {
    n.warningUnhooked();
    var a = n.getFieldEntitiesForNamePathList(r);
    return a.map(function(o, i) {
      return o && !("INVALIDATE_NAME_PATH" in o) ? {
        name: o.getNamePath(),
        errors: o.getErrors(),
        warnings: o.getWarnings()
      } : {
        name: Pt(r[i]),
        errors: [],
        warnings: []
      };
    });
  }), z(this, "getFieldError", function(r) {
    n.warningUnhooked();
    var a = Pt(r), o = n.getFieldsError([a])[0];
    return o.errors;
  }), z(this, "getFieldWarning", function(r) {
    n.warningUnhooked();
    var a = Pt(r), o = n.getFieldsError([a])[0];
    return o.warnings;
  }), z(this, "isFieldsTouched", function() {
    n.warningUnhooked();
    for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
      a[o] = arguments[o];
    var i = a[0], s = a[1], l, c = !1;
    a.length === 0 ? l = null : a.length === 1 ? Array.isArray(i) ? (l = i.map(Pt), c = !1) : (l = null, c = i) : (l = i.map(Pt), c = s);
    var d = n.getFieldEntities(!0), f = function(m) {
      return m.isFieldTouched();
    };
    if (!l)
      return c ? d.every(function(h) {
        return f(h) || h.isList();
      }) : d.some(f);
    var v = new Rr();
    l.forEach(function(h) {
      v.set(h, []);
    }), d.forEach(function(h) {
      var m = h.getNamePath();
      l.forEach(function(S) {
        S.every(function(b, y) {
          return m[y] === b;
        }) && v.update(S, function(b) {
          return [].concat(Pe(b), [h]);
        });
      });
    });
    var g = function(m) {
      return m.some(f);
    }, p = v.map(function(h) {
      var m = h.value;
      return m;
    });
    return c ? p.every(g) : p.some(g);
  }), z(this, "isFieldTouched", function(r) {
    return n.warningUnhooked(), n.isFieldsTouched([r]);
  }), z(this, "isFieldsValidating", function(r) {
    n.warningUnhooked();
    var a = n.getFieldEntities();
    if (!r)
      return a.some(function(i) {
        return i.isFieldValidating();
      });
    var o = r.map(Pt);
    return a.some(function(i) {
      var s = i.getNamePath();
      return Br(o, s) && i.isFieldValidating();
    });
  }), z(this, "isFieldValidating", function(r) {
    return n.warningUnhooked(), n.isFieldsValidating([r]);
  }), z(this, "resetWithFieldInitialValue", function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, a = new Rr(), o = n.getFieldEntities(!0);
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
          var v = d.getNamePath(), g = n.getInitialValue(v);
          if (g !== void 0)
            ct(!1, "Form already set 'initialValues' with path '".concat(v.join("."), "'. Field can not overwrite it."));
          else {
            var p = a.get(v);
            if (p && p.size > 1)
              ct(!1, "Multiple Field with path '".concat(v.join("."), "' set 'initialValue'. Can not decide which one to pick."));
            else if (p) {
              var h = n.getFieldValue(v), m = d.isListField();
              !m && (!r.skipExist || h === void 0) && n.updateStore(bn(n.store, v, Pe(p)[0].value));
            }
          }
        }
      });
    }, s;
    r.entities ? s = r.entities : r.namePathList ? (s = [], r.namePathList.forEach(function(l) {
      var c = a.get(l);
      if (c) {
        var d;
        (d = s).push.apply(d, Pe(Pe(c).map(function(f) {
          return f.entity;
        })));
      }
    })) : s = o, i(s);
  }), z(this, "resetFields", function(r) {
    n.warningUnhooked();
    var a = n.store;
    if (!r) {
      n.updateStore(jr(n.initialValues)), n.resetWithFieldInitialValue(), n.notifyObservers(a, null, {
        type: "reset"
      }), n.notifyWatch();
      return;
    }
    var o = r.map(Pt);
    o.forEach(function(i) {
      var s = n.getInitialValue(i);
      n.updateStore(bn(n.store, i, s));
    }), n.resetWithFieldInitialValue({
      namePathList: o
    }), n.notifyObservers(a, o, {
      type: "reset"
    }), n.notifyWatch(o);
  }), z(this, "setFields", function(r) {
    n.warningUnhooked();
    var a = n.store, o = [];
    r.forEach(function(i) {
      var s = i.name, l = Ze(i, Py), c = Pt(s);
      o.push(c), "value" in l && n.updateStore(bn(n.store, c, l.value)), n.notifyObservers(a, [c], {
        type: "setField",
        data: i
      });
    }), n.notifyWatch(o);
  }), z(this, "getFields", function() {
    var r = n.getFieldEntities(!0), a = r.map(function(o) {
      var i = o.getNamePath(), s = o.getMeta(), l = B(B({}, s), {}, {
        name: i,
        value: n.getFieldValue(i)
      });
      return Object.defineProperty(l, "originRCField", {
        value: !0
      }), l;
    });
    return a;
  }), z(this, "initEntityValue", function(r) {
    var a = r.props.initialValue;
    if (a !== void 0) {
      var o = r.getNamePath(), i = Nn(n.store, o);
      i === void 0 && n.updateStore(bn(n.store, o, a));
    }
  }), z(this, "isMergedPreserve", function(r) {
    var a = r !== void 0 ? r : n.preserve;
    return a ?? !0;
  }), z(this, "registerField", function(r) {
    n.fieldEntities.push(r);
    var a = r.getNamePath();
    if (n.notifyWatch([a]), r.props.initialValue !== void 0) {
      var o = n.store;
      n.resetWithFieldInitialValue({
        entities: [r],
        skipExist: !0
      }), n.notifyObservers(o, [r.getNamePath()], {
        type: "valueUpdate",
        source: "internal"
      });
    }
    return function(i, s) {
      var l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
      if (n.fieldEntities = n.fieldEntities.filter(function(f) {
        return f !== r;
      }), !n.isMergedPreserve(s) && (!i || l.length > 1)) {
        var c = i ? void 0 : n.getInitialValue(a);
        if (a.length && n.getFieldValue(a) !== c && n.fieldEntities.every(function(f) {
          return (
            // Only reset when no namePath exist
            !fv(f.getNamePath(), a)
          );
        })) {
          var d = n.store;
          n.updateStore(bn(d, a, c, !0)), n.notifyObservers(d, [a], {
            type: "remove"
          }), n.triggerDependenciesUpdate(d, a);
        }
      }
      n.notifyWatch([a]);
    };
  }), z(this, "dispatch", function(r) {
    switch (r.type) {
      case "updateValue": {
        var a = r.namePath, o = r.value;
        n.updateValue(a, o);
        break;
      }
      case "validateField": {
        var i = r.namePath, s = r.triggerName;
        n.validateFields([i], {
          triggerName: s
        });
        break;
      }
    }
  }), z(this, "notifyObservers", function(r, a, o) {
    if (n.subscribable) {
      var i = B(B({}, o), {}, {
        store: n.getFieldsValue(!0)
      });
      n.getFieldEntities().forEach(function(s) {
        var l = s.onStoreChange;
        l(r, a, i);
      });
    } else
      n.forceRootUpdate();
  }), z(this, "triggerDependenciesUpdate", function(r, a) {
    var o = n.getDependencyChildrenFields(a);
    return o.length && n.validateFields(o), n.notifyObservers(r, o, {
      type: "dependenciesUpdate",
      relatedFields: [a].concat(Pe(o))
    }), o;
  }), z(this, "updateValue", function(r, a) {
    var o = Pt(r), i = n.store;
    n.updateStore(bn(n.store, o, a)), n.notifyObservers(i, [o], {
      type: "valueUpdate",
      source: "internal"
    }), n.notifyWatch([o]);
    var s = n.triggerDependenciesUpdate(i, o), l = n.callbacks.onValuesChange;
    if (l) {
      var c = cu(n.store, [o]);
      l(c, n.getFieldsValue());
    }
    n.triggerOnFieldsChange([o].concat(Pe(s)));
  }), z(this, "setFieldsValue", function(r) {
    n.warningUnhooked();
    var a = n.store;
    if (r) {
      var o = jr(n.store, r);
      n.updateStore(o);
    }
    n.notifyObservers(a, null, {
      type: "valueUpdate",
      source: "external"
    }), n.notifyWatch();
  }), z(this, "setFieldValue", function(r, a) {
    n.setFields([{
      name: r,
      value: a
    }]);
  }), z(this, "getDependencyChildrenFields", function(r) {
    var a = /* @__PURE__ */ new Set(), o = [], i = new Rr();
    n.getFieldEntities().forEach(function(l) {
      var c = l.props.dependencies;
      (c || []).forEach(function(d) {
        var f = Pt(d);
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
    return s(r), o;
  }), z(this, "triggerOnFieldsChange", function(r, a) {
    var o = n.callbacks.onFieldsChange;
    if (o) {
      var i = n.getFields();
      if (a) {
        var s = new Rr();
        a.forEach(function(c) {
          var d = c.name, f = c.errors;
          s.set(d, f);
        }), i.forEach(function(c) {
          c.errors = s.get(c.name) || c.errors;
        });
      }
      var l = i.filter(function(c) {
        var d = c.name;
        return Br(r, d);
      });
      l.length && o(l, i);
    }
  }), z(this, "validateFields", function(r, a) {
    n.warningUnhooked();
    var o, i;
    Array.isArray(r) || typeof r == "string" || typeof a == "string" ? (o = r, i = a) : i = r;
    var s = !!o, l = s ? o.map(Pt) : [], c = [], d = String(Date.now()), f = /* @__PURE__ */ new Set(), v = i || {}, g = v.recursive, p = v.dirty;
    n.getFieldEntities(!0).forEach(function(b) {
      if (s || l.push(b.getNamePath()), !(!b.props.rules || !b.props.rules.length) && !(p && !b.isFieldDirty())) {
        var y = b.getNamePath();
        if (f.add(y.join(d)), !s || Br(l, y, g)) {
          var w = b.validateRules(B({
            validateMessages: B(B({}, dv), n.validateMessages)
          }, i));
          c.push(w.then(function() {
            return {
              name: y,
              errors: [],
              warnings: []
            };
          }).catch(function(C) {
            var O, E = [], x = [];
            return (O = C.forEach) === null || O === void 0 || O.call(C, function(R) {
              var T = R.rule.warningOnly, M = R.errors;
              T ? x.push.apply(x, Pe(M)) : E.push.apply(E, Pe(M));
            }), E.length ? Promise.reject({
              name: y,
              errors: E,
              warnings: x
            }) : {
              name: y,
              errors: E,
              warnings: x
            };
          }));
        }
      }
    });
    var h = Ry(c);
    n.lastValidatePromise = h, h.catch(function(b) {
      return b;
    }).then(function(b) {
      var y = b.map(function(w) {
        var C = w.name;
        return C;
      });
      n.notifyObservers(n.store, y, {
        type: "validateFinish"
      }), n.triggerOnFieldsChange(y, b);
    });
    var m = h.then(function() {
      return n.lastValidatePromise === h ? Promise.resolve(n.getFieldsValue(l)) : Promise.reject([]);
    }).catch(function(b) {
      var y = b.filter(function(w) {
        return w && w.errors.length;
      });
      return Promise.reject({
        values: n.getFieldsValue(l),
        errorFields: y,
        outOfDate: n.lastValidatePromise !== h
      });
    });
    m.catch(function(b) {
      return b;
    });
    var S = l.filter(function(b) {
      return f.has(b.join(d));
    });
    return n.triggerOnFieldsChange(S), m;
  }), z(this, "submit", function() {
    n.warningUnhooked(), n.validateFields().then(function(r) {
      var a = n.callbacks.onFinish;
      if (a)
        try {
          a(r);
        } catch (o) {
          console.error(o);
        }
    }).catch(function(r) {
      var a = n.callbacks.onFinishFailed;
      a && a(r);
    });
  }), this.forceRootUpdate = t;
});
function gv(e) {
  var t = u.useRef(), n = u.useState({}), r = K(n, 2), a = r[1];
  if (!t.current)
    if (e)
      t.current = e;
    else {
      var o = function() {
        a({});
      }, i = new _y(o);
      t.current = i.getForm();
    }
  return [t.current];
}
var zs = /* @__PURE__ */ u.createContext({
  triggerFormChange: function() {
  },
  triggerFormFinish: function() {
  },
  registerForm: function() {
  },
  unregisterForm: function() {
  }
}), Ty = function(t) {
  var n = t.validateMessages, r = t.onFormChange, a = t.onFormFinish, o = t.children, i = u.useContext(zs), s = u.useRef({});
  return /* @__PURE__ */ u.createElement(zs.Provider, {
    value: B(B({}, i), {}, {
      validateMessages: B(B({}, i.validateMessages), n),
      // =========================================================
      // =                  Global Form Control                  =
      // =========================================================
      triggerFormChange: function(c, d) {
        r && r(c, {
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
        c && (s.current = B(B({}, s.current), {}, z({}, c, d))), i.registerForm(c, d);
      },
      unregisterForm: function(c) {
        var d = B({}, s.current);
        delete d[c], s.current = d, i.unregisterForm(c);
      }
    })
  }, o);
}, Iy = ["name", "initialValues", "fields", "form", "preserve", "children", "component", "validateMessages", "validateTrigger", "onValuesChange", "onFieldsChange", "onFinish", "onFinishFailed", "clearOnDestroy"], Ny = function(t, n) {
  var r = t.name, a = t.initialValues, o = t.fields, i = t.form, s = t.preserve, l = t.children, c = t.component, d = c === void 0 ? "form" : c, f = t.validateMessages, v = t.validateTrigger, g = v === void 0 ? "onChange" : v, p = t.onValuesChange, h = t.onFieldsChange, m = t.onFinish, S = t.onFinishFailed, b = t.clearOnDestroy, y = Ze(t, Iy), w = u.useRef(null), C = u.useContext(zs), O = gv(i), E = K(O, 1), x = E[0], R = x.getInternalHooks(mr), T = R.useSubscribe, M = R.setInitialValues, j = R.setCallbacks, I = R.setValidateMessages, _ = R.setPreserve, k = R.destroyForm;
  u.useImperativeHandle(n, function() {
    return B(B({}, x), {}, {
      nativeElement: w.current
    });
  }), u.useEffect(function() {
    return C.registerForm(r, x), function() {
      C.unregisterForm(r);
    };
  }, [C, x, r]), I(B(B({}, C.validateMessages), f)), j({
    onValuesChange: p,
    onFieldsChange: function(G) {
      if (C.triggerFormChange(r, G), h) {
        for (var Q = arguments.length, q = new Array(Q > 1 ? Q - 1 : 0), Z = 1; Z < Q; Z++)
          q[Z - 1] = arguments[Z];
        h.apply(void 0, [G].concat(q));
      }
    },
    onFinish: function(G) {
      C.triggerFormFinish(r, G), m && m(G);
    },
    onFinishFailed: S
  }), _(s);
  var N = u.useRef(null);
  M(a, !N.current), N.current || (N.current = !0), u.useEffect(
    function() {
      return function() {
        return k(b);
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  var P, $ = typeof l == "function";
  if ($) {
    var F = x.getFieldsValue(!0);
    P = l(F, x);
  } else
    P = l;
  T(!$);
  var L = u.useRef();
  u.useEffect(function() {
    Ey(L.current || [], o || []) || x.setFields(o || []), L.current = o;
  }, [o, x]);
  var V = u.useMemo(function() {
    return B(B({}, x), {}, {
      validateTrigger: g
    });
  }, [x, g]), W = /* @__PURE__ */ u.createElement(zo.Provider, {
    value: null
  }, /* @__PURE__ */ u.createElement(Zr.Provider, {
    value: V
  }, P));
  return d === !1 ? W : /* @__PURE__ */ u.createElement(d, me({}, y, {
    ref: w,
    onSubmit: function(G) {
      G.preventDefault(), G.stopPropagation(), x.submit();
    },
    onReset: function(G) {
      var Q;
      G.preventDefault(), x.resetFields(), (Q = y.onReset) === null || Q === void 0 || Q.call(y, G);
    }
  }), W);
};
function fu(e) {
  try {
    return JSON.stringify(e);
  } catch {
    return Math.random();
  }
}
var My = process.env.NODE_ENV !== "production" ? function(e) {
  var t = e.join("__RC_FIELD_FORM_SPLIT__"), n = Me(t);
  ct(n.current === t, "`useWatch` is not support dynamic `namePath`. Please provide static instead.");
} : function() {
};
function Ay() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r = t[0], a = t[1], o = a === void 0 ? {} : a, i = k1(o) ? {
    form: o
  } : o, s = i.form, l = rt(), c = K(l, 2), d = c[0], f = c[1], v = $n(function() {
    return fu(d);
  }, [d]), g = Me(v);
  g.current = v;
  var p = Nt(Zr), h = s || p, m = h && h._init;
  process.env.NODE_ENV !== "production" && ct(t.length === 2 ? s ? m : !0 : m, "useWatch requires a form instance since it can not auto detect from context.");
  var S = Pt(r), b = Me(S);
  return b.current = S, My(S), ot(
    function() {
      if (m) {
        var y = h.getFieldsValue, w = h.getInternalHooks, C = w(mr), O = C.registerWatch, E = function(M, j) {
          var I = i.preserve ? j : M;
          return typeof r == "function" ? r(I) : Nn(I, b.current);
        }, x = O(function(T, M) {
          var j = E(T, M), I = fu(j);
          g.current !== I && (g.current = I, f(j));
        }), R = E(y(), y(!0));
        return d !== R && f(R), x;
      }
    },
    // We do not need re-register since namePath content is the same
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [m]
  ), d;
}
var Ly = /* @__PURE__ */ u.forwardRef(Ny), Wa = Ly;
Wa.FormProvider = Ty;
Wa.Field = vv;
Wa.List = Oy;
Wa.useForm = gv;
Wa.useWatch = Ay;
const La = /* @__PURE__ */ u.createContext({});
process.env.NODE_ENV !== "production" && (La.displayName = "FormItemInputContext");
const jy = (e) => {
  let {
    children: t,
    status: n,
    override: r
  } = e;
  const a = Nt(La), o = $n(() => {
    const i = Object.assign({}, a);
    return r && delete i.isFormItemInput, n && (delete i.status, delete i.hasFeedback, delete i.feedbackIcon), i;
  }, [n, r, a]);
  return /* @__PURE__ */ u.createElement(La.Provider, {
    value: o
  }, t);
}, Fy = /* @__PURE__ */ br(void 0), Vs = (e) => {
  const {
    space: t,
    form: n,
    children: r
  } = e;
  if (r == null)
    return null;
  let a = r;
  return n && (a = /* @__PURE__ */ D.createElement(jy, {
    override: !0,
    status: !0
  }, a)), t && (a = /* @__PURE__ */ D.createElement(Yb, null, a)), a;
};
function vu(e) {
  if (e)
    return {
      closable: e.closable,
      closeIcon: e.closeIcon
    };
}
function mu(e) {
  const {
    closable: t,
    closeIcon: n
  } = e || {};
  return D.useMemo(() => {
    if (
      // If `closable`, whatever rest be should be true
      !t && (t === !1 || n === !1 || n === null)
    )
      return !1;
    if (t === void 0 && n === void 0)
      return null;
    let r = {
      closeIcon: typeof n != "boolean" && n !== null ? n : void 0
    };
    return t && typeof t == "object" && (r = Object.assign(Object.assign({}, r), t)), r;
  }, [t, n]);
}
function gu() {
  const e = {};
  for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  return n.forEach((a) => {
    a && Object.keys(a).forEach((o) => {
      a[o] !== void 0 && (e[o] = a[o]);
    });
  }), e;
}
const Dy = {};
function zy(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Dy;
  const r = mu(e), a = mu(t), o = D.useMemo(() => Object.assign({
    closeIcon: /* @__PURE__ */ D.createElement(ni, null)
  }, n), [n]), i = D.useMemo(() => r === !1 ? !1 : r ? gu(o, a, r) : a === !1 ? !1 : a ? gu(o, a) : o.closable ? o : !1, [r, a, o]);
  return D.useMemo(() => {
    if (i === !1)
      return [!1, null];
    const {
      closeIconRender: s
    } = o, {
      closeIcon: l
    } = i;
    let c = l;
    if (c != null) {
      s && (c = s(l));
      const d = gl(i, !0);
      Object.keys(d).length && (c = /* @__PURE__ */ D.isValidElement(c) ? /* @__PURE__ */ D.cloneElement(c, d) : /* @__PURE__ */ D.createElement("span", Object.assign({}, d), c));
    }
    return [!0, c];
  }, [i, o]);
}
var pv = function(t) {
  if (Jt() && window.document.documentElement) {
    var n = Array.isArray(t) ? t : [t], r = window.document.documentElement;
    return n.some(function(a) {
      return a in r.style;
    });
  }
  return !1;
}, Vy = function(t, n) {
  if (!pv(t))
    return !1;
  var r = document.createElement("div"), a = r.style[t];
  return r.style[t] = n, r.style[t] !== a;
};
function pu(e, t) {
  return !Array.isArray(e) && t !== void 0 ? Vy(e, t) : pv(e);
}
const oi = (e) => {
  const {
    prefixCls: t,
    className: n,
    style: r,
    size: a,
    shape: o
  } = e, i = Y({
    [`${t}-lg`]: a === "large",
    [`${t}-sm`]: a === "small"
  }), s = Y({
    [`${t}-circle`]: o === "circle",
    [`${t}-square`]: o === "square",
    [`${t}-round`]: o === "round"
  }), l = u.useMemo(() => typeof a == "number" ? {
    width: a,
    height: a,
    lineHeight: `${a}px`
  } : {}, [a]);
  return /* @__PURE__ */ u.createElement("span", {
    className: Y(t, i, s, n),
    style: Object.assign(Object.assign({}, l), r)
  });
}, By = new xt("ant-skeleton-loading", {
  "0%": {
    backgroundPosition: "100% 50%"
  },
  "100%": {
    backgroundPosition: "0 50%"
  }
}), ii = (e) => ({
  height: e,
  lineHeight: ee(e)
}), kr = (e) => Object.assign({
  width: e
}, ii(e)), ky = (e) => ({
  background: e.skeletonLoadingBackground,
  backgroundSize: "400% 100%",
  animationName: By,
  animationDuration: e.skeletonLoadingMotionDuration,
  animationTimingFunction: "ease",
  animationIterationCount: "infinite"
}), Li = (e, t) => Object.assign({
  width: t(e).mul(5).equal(),
  minWidth: t(e).mul(5).equal()
}, ii(e)), Hy = (e) => {
  const {
    skeletonAvatarCls: t,
    gradientFromColor: n,
    controlHeight: r,
    controlHeightLG: a,
    controlHeightSM: o
  } = e;
  return {
    [`${t}`]: Object.assign({
      display: "inline-block",
      verticalAlign: "top",
      background: n
    }, kr(r)),
    [`${t}${t}-circle`]: {
      borderRadius: "50%"
    },
    [`${t}${t}-lg`]: Object.assign({}, kr(a)),
    [`${t}${t}-sm`]: Object.assign({}, kr(o))
  };
}, Wy = (e) => {
  const {
    controlHeight: t,
    borderRadiusSM: n,
    skeletonInputCls: r,
    controlHeightLG: a,
    controlHeightSM: o,
    gradientFromColor: i,
    calc: s
  } = e;
  return {
    [`${r}`]: Object.assign({
      display: "inline-block",
      verticalAlign: "top",
      background: i,
      borderRadius: n
    }, Li(t, s)),
    [`${r}-lg`]: Object.assign({}, Li(a, s)),
    [`${r}-sm`]: Object.assign({}, Li(o, s))
  };
}, hu = (e) => Object.assign({
  width: e
}, ii(e)), Uy = (e) => {
  const {
    skeletonImageCls: t,
    imageSizeBase: n,
    gradientFromColor: r,
    borderRadiusSM: a,
    calc: o
  } = e;
  return {
    [`${t}`]: Object.assign(Object.assign({
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      verticalAlign: "top",
      background: r,
      borderRadius: a
    }, hu(o(n).mul(2).equal())), {
      [`${t}-path`]: {
        fill: "#bfbfbf"
      },
      [`${t}-svg`]: Object.assign(Object.assign({}, hu(n)), {
        maxWidth: o(n).mul(4).equal(),
        maxHeight: o(n).mul(4).equal()
      }),
      [`${t}-svg${t}-svg-circle`]: {
        borderRadius: "50%"
      }
    }),
    [`${t}${t}-circle`]: {
      borderRadius: "50%"
    }
  };
}, ji = (e, t, n) => {
  const {
    skeletonButtonCls: r
  } = e;
  return {
    [`${n}${r}-circle`]: {
      width: t,
      minWidth: t,
      borderRadius: "50%"
    },
    [`${n}${r}-round`]: {
      borderRadius: t
    }
  };
}, Fi = (e, t) => Object.assign({
  width: t(e).mul(2).equal(),
  minWidth: t(e).mul(2).equal()
}, ii(e)), Ky = (e) => {
  const {
    borderRadiusSM: t,
    skeletonButtonCls: n,
    controlHeight: r,
    controlHeightLG: a,
    controlHeightSM: o,
    gradientFromColor: i,
    calc: s
  } = e;
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
    [`${n}`]: Object.assign({
      display: "inline-block",
      verticalAlign: "top",
      background: i,
      borderRadius: t,
      width: s(r).mul(2).equal(),
      minWidth: s(r).mul(2).equal()
    }, Fi(r, s))
  }, ji(e, r, n)), {
    [`${n}-lg`]: Object.assign({}, Fi(a, s))
  }), ji(e, a, `${n}-lg`)), {
    [`${n}-sm`]: Object.assign({}, Fi(o, s))
  }), ji(e, o, `${n}-sm`));
}, Gy = (e) => {
  const {
    componentCls: t,
    skeletonAvatarCls: n,
    skeletonTitleCls: r,
    skeletonParagraphCls: a,
    skeletonButtonCls: o,
    skeletonInputCls: i,
    skeletonImageCls: s,
    controlHeight: l,
    controlHeightLG: c,
    controlHeightSM: d,
    gradientFromColor: f,
    padding: v,
    marginSM: g,
    borderRadius: p,
    titleHeight: h,
    blockRadius: m,
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
        [`${n}`]: Object.assign({
          display: "inline-block",
          verticalAlign: "top",
          background: f
        }, kr(l)),
        [`${n}-circle`]: {
          borderRadius: "50%"
        },
        [`${n}-lg`]: Object.assign({}, kr(c)),
        [`${n}-sm`]: Object.assign({}, kr(d))
      },
      [`${t}-content`]: {
        display: "table-cell",
        width: "100%",
        verticalAlign: "top",
        // Title
        [`${r}`]: {
          width: "100%",
          height: h,
          background: f,
          borderRadius: m,
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
            borderRadius: m,
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
        [`${r}, ${a} > li`]: {
          borderRadius: p
        }
      }
    },
    [`${t}-with-avatar ${t}-content`]: {
      // Title
      [`${r}`]: {
        marginBlockStart: g,
        [`+ ${a}`]: {
          marginBlockStart: y
        }
      }
    },
    // Skeleton element
    [`${t}${t}-element`]: Object.assign(Object.assign(Object.assign(Object.assign({
      display: "inline-block",
      width: "auto"
    }, Ky(e)), Hy(e)), Wy(e)), Uy(e)),
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
        ${r},
        ${a} > li,
        ${n},
        ${o},
        ${i},
        ${s}
      `]: Object.assign({}, ky(e))
    }
  };
}, qy = (e) => {
  const {
    colorFillContent: t,
    colorFill: n
  } = e, r = t, a = n;
  return {
    color: r,
    colorGradientEnd: a,
    gradientFromColor: r,
    gradientToColor: a,
    titleHeight: e.controlHeight / 2,
    blockRadius: e.borderRadiusSM,
    paragraphMarginTop: e.marginLG + e.marginXXS,
    paragraphLiHeight: e.controlHeight / 2
  };
}, na = Rn("Skeleton", (e) => {
  const {
    componentCls: t,
    calc: n
  } = e, r = jt(e, {
    skeletonAvatarCls: `${t}-avatar`,
    skeletonTitleCls: `${t}-title`,
    skeletonParagraphCls: `${t}-paragraph`,
    skeletonButtonCls: `${t}-button`,
    skeletonInputCls: `${t}-input`,
    skeletonImageCls: `${t}-image`,
    imageSizeBase: n(e.controlHeight).mul(1.5).equal(),
    borderRadius: 100,
    // Large number to make capsule shape
    skeletonLoadingBackground: `linear-gradient(90deg, ${e.gradientFromColor} 25%, ${e.gradientToColor} 37%, ${e.gradientFromColor} 63%)`,
    skeletonLoadingMotionDuration: "1.4s"
  });
  return [Gy(r)];
}, qy, {
  deprecatedTokens: [["color", "gradientFromColor"], ["colorGradientEnd", "gradientToColor"]]
}), Xy = (e) => {
  const {
    prefixCls: t,
    className: n,
    rootClassName: r,
    active: a,
    shape: o = "circle",
    size: i = "default"
  } = e, {
    getPrefixCls: s
  } = u.useContext(vt), l = s("skeleton", t), [c, d, f] = na(l), v = vn(e, ["prefixCls", "className"]), g = Y(l, `${l}-element`, {
    [`${l}-active`]: a
  }, n, r, d, f);
  return c(/* @__PURE__ */ u.createElement("div", {
    className: g
  }, /* @__PURE__ */ u.createElement(oi, Object.assign({
    prefixCls: `${l}-avatar`,
    shape: o,
    size: i
  }, v))));
}, Zy = (e) => {
  const {
    prefixCls: t,
    className: n,
    rootClassName: r,
    active: a,
    block: o = !1,
    size: i = "default"
  } = e, {
    getPrefixCls: s
  } = u.useContext(vt), l = s("skeleton", t), [c, d, f] = na(l), v = vn(e, ["prefixCls"]), g = Y(l, `${l}-element`, {
    [`${l}-active`]: a,
    [`${l}-block`]: o
  }, n, r, d, f);
  return c(/* @__PURE__ */ u.createElement("div", {
    className: g
  }, /* @__PURE__ */ u.createElement(oi, Object.assign({
    prefixCls: `${l}-button`,
    size: i
  }, v))));
}, Yy = "M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z", Qy = (e) => {
  const {
    prefixCls: t,
    className: n,
    rootClassName: r,
    style: a,
    active: o
  } = e, {
    getPrefixCls: i
  } = u.useContext(vt), s = i("skeleton", t), [l, c, d] = na(s), f = Y(s, `${s}-element`, {
    [`${s}-active`]: o
  }, n, r, c, d);
  return l(/* @__PURE__ */ u.createElement("div", {
    className: f
  }, /* @__PURE__ */ u.createElement("div", {
    className: Y(`${s}-image`, n),
    style: a
  }, /* @__PURE__ */ u.createElement("svg", {
    viewBox: "0 0 1098 1024",
    xmlns: "http://www.w3.org/2000/svg",
    className: `${s}-image-svg`
  }, /* @__PURE__ */ u.createElement("title", null, "Image placeholder"), /* @__PURE__ */ u.createElement("path", {
    d: Yy,
    className: `${s}-image-path`
  })))));
}, Jy = (e) => {
  const {
    prefixCls: t,
    className: n,
    rootClassName: r,
    active: a,
    block: o,
    size: i = "default"
  } = e, {
    getPrefixCls: s
  } = u.useContext(vt), l = s("skeleton", t), [c, d, f] = na(l), v = vn(e, ["prefixCls"]), g = Y(l, `${l}-element`, {
    [`${l}-active`]: a,
    [`${l}-block`]: o
  }, n, r, d, f);
  return c(/* @__PURE__ */ u.createElement("div", {
    className: g
  }, /* @__PURE__ */ u.createElement(oi, Object.assign({
    prefixCls: `${l}-input`,
    size: i
  }, v))));
};
var eC = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM288 604a64 64 0 10128 0 64 64 0 10-128 0zm118-224a48 48 0 1096 0 48 48 0 10-96 0zm158 228a96 96 0 10192 0 96 96 0 10-192 0zm148-314a56 56 0 10112 0 56 56 0 10-112 0z" } }] }, name: "dot-chart", theme: "outlined" }, tC = function(t, n) {
  return /* @__PURE__ */ u.createElement(Tt, me({}, t, {
    ref: n,
    icon: eC
  }));
}, hv = /* @__PURE__ */ u.forwardRef(tC);
process.env.NODE_ENV !== "production" && (hv.displayName = "DotChartOutlined");
const nC = (e) => {
  const {
    prefixCls: t,
    className: n,
    rootClassName: r,
    style: a,
    active: o,
    children: i
  } = e, {
    getPrefixCls: s
  } = u.useContext(vt), l = s("skeleton", t), [c, d, f] = na(l), v = Y(l, `${l}-element`, {
    [`${l}-active`]: o
  }, d, n, r, f), g = i ?? /* @__PURE__ */ u.createElement(hv, null);
  return c(/* @__PURE__ */ u.createElement("div", {
    className: v
  }, /* @__PURE__ */ u.createElement("div", {
    className: Y(`${l}-image`, n),
    style: a
  }, g)));
}, rC = (e, t) => {
  const {
    width: n,
    rows: r = 2
  } = t;
  if (Array.isArray(n))
    return n[e];
  if (r - 1 === e)
    return n;
}, aC = (e) => {
  const {
    prefixCls: t,
    className: n,
    style: r,
    rows: a
  } = e, o = Pe(Array(a)).map((i, s) => (
    // eslint-disable-next-line react/no-array-index-key
    /* @__PURE__ */ u.createElement("li", {
      key: s,
      style: {
        width: rC(s, e)
      }
    })
  ));
  return /* @__PURE__ */ u.createElement("ul", {
    className: Y(t, n),
    style: r
  }, o);
}, oC = (e) => {
  let {
    prefixCls: t,
    className: n,
    width: r,
    style: a
  } = e;
  return (
    // biome-ignore lint/a11y/useHeadingContent: HOC here
    /* @__PURE__ */ u.createElement("h3", {
      className: Y(t, n),
      style: Object.assign({
        width: r
      }, a)
    })
  );
};
function Di(e) {
  return e && typeof e == "object" ? e : {};
}
function iC(e, t) {
  return e && !t ? {
    size: "large",
    shape: "square"
  } : {
    size: "large",
    shape: "circle"
  };
}
function sC(e, t) {
  return !e && t ? {
    width: "38%"
  } : e && t ? {
    width: "50%"
  } : {};
}
function lC(e, t) {
  const n = {};
  return (!e || !t) && (n.width = "61%"), !e && t ? n.rows = 3 : n.rows = 2, n;
}
const wr = (e) => {
  const {
    prefixCls: t,
    loading: n,
    className: r,
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
    direction: g,
    skeleton: p
  } = u.useContext(vt), h = v("skeleton", t), [m, S, b] = na(h);
  if (n || !("loading" in e)) {
    const y = !!s, w = !!l, C = !!c;
    let O;
    if (y) {
      const R = Object.assign(Object.assign({
        prefixCls: `${h}-avatar`
      }, iC(w, C)), Di(s));
      O = /* @__PURE__ */ u.createElement("div", {
        className: `${h}-header`
      }, /* @__PURE__ */ u.createElement(oi, Object.assign({}, R)));
    }
    let E;
    if (w || C) {
      let R;
      if (w) {
        const M = Object.assign(Object.assign({
          prefixCls: `${h}-title`
        }, sC(y, C)), Di(l));
        R = /* @__PURE__ */ u.createElement(oC, Object.assign({}, M));
      }
      let T;
      if (C) {
        const M = Object.assign(Object.assign({
          prefixCls: `${h}-paragraph`
        }, lC(y, w)), Di(c));
        T = /* @__PURE__ */ u.createElement(aC, Object.assign({}, M));
      }
      E = /* @__PURE__ */ u.createElement("div", {
        className: `${h}-content`
      }, R, T);
    }
    const x = Y(h, {
      [`${h}-with-avatar`]: y,
      [`${h}-active`]: d,
      [`${h}-rtl`]: g === "rtl",
      [`${h}-round`]: f
    }, p == null ? void 0 : p.className, r, a, S, b);
    return m(/* @__PURE__ */ u.createElement("div", {
      className: x,
      style: Object.assign(Object.assign({}, p == null ? void 0 : p.style), o)
    }, O, E));
  }
  return i ?? null;
};
wr.Button = Zy;
wr.Avatar = Xy;
wr.Input = Jy;
wr.Image = Qy;
wr.Node = nC;
process.env.NODE_ENV !== "production" && (wr.displayName = "Skeleton");
const cC = (e) => ({
  animationDuration: e,
  animationFillMode: "both"
}), uC = (e) => ({
  animationDuration: e,
  animationFillMode: "both"
}), xl = function(e, t, n, r) {
  const o = (arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1) ? "&" : "";
  return {
    [`
      ${o}${e}-enter,
      ${o}${e}-appear
    `]: Object.assign(Object.assign({}, cC(r)), {
      animationPlayState: "paused"
    }),
    [`${o}${e}-leave`]: Object.assign(Object.assign({}, uC(r)), {
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
      animationName: n,
      animationPlayState: "running",
      pointerEvents: "none"
    }
  };
}, dC = new xt("antFadeIn", {
  "0%": {
    opacity: 0
  },
  "100%": {
    opacity: 1
  }
}), fC = new xt("antFadeOut", {
  "0%": {
    opacity: 1
  },
  "100%": {
    opacity: 0
  }
}), bv = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  const {
    antCls: n
  } = e, r = `${n}-fade`, a = t ? "&" : "";
  return [xl(r, dC, fC, e.motionDurationMid, t), {
    [`
        ${a}${r}-enter,
        ${a}${r}-appear
      `]: {
      opacity: 0,
      animationTimingFunction: "linear"
    },
    [`${a}${r}-leave`]: {
      animationTimingFunction: "linear"
    }
  }];
}, vC = new xt("antSlideUpIn", {
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
}), mC = new xt("antSlideUpOut", {
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
}), gC = new xt("antSlideDownIn", {
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
}), pC = new xt("antSlideDownOut", {
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
}), hC = new xt("antSlideLeftIn", {
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
}), bC = new xt("antSlideLeftOut", {
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
}), yC = new xt("antSlideRightIn", {
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
}), CC = new xt("antSlideRightOut", {
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
}), SC = {
  "slide-up": {
    inKeyframes: vC,
    outKeyframes: mC
  },
  "slide-down": {
    inKeyframes: gC,
    outKeyframes: pC
  },
  "slide-left": {
    inKeyframes: hC,
    outKeyframes: bC
  },
  "slide-right": {
    inKeyframes: yC,
    outKeyframes: CC
  }
}, bu = (e, t) => {
  const {
    antCls: n
  } = e, r = `${n}-${t}`, {
    inKeyframes: a,
    outKeyframes: o
  } = SC[t];
  return [xl(r, a, o, e.motionDurationMid), {
    [`
      ${r}-enter,
      ${r}-appear
    `]: {
      transform: "scale(0)",
      transformOrigin: "0% 0%",
      opacity: 0,
      animationTimingFunction: e.motionEaseOutQuint,
      "&-prepare": {
        transform: "scale(1)"
      }
    },
    [`${r}-leave`]: {
      animationTimingFunction: e.motionEaseInQuint
    }
  }];
}, wC = new xt("antZoomIn", {
  "0%": {
    transform: "scale(0.2)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    opacity: 1
  }
}), EC = new xt("antZoomOut", {
  "0%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(0.2)",
    opacity: 0
  }
}), yu = new xt("antZoomBigIn", {
  "0%": {
    transform: "scale(0.8)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    opacity: 1
  }
}), Cu = new xt("antZoomBigOut", {
  "0%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(0.8)",
    opacity: 0
  }
}), xC = new xt("antZoomUpIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "50% 0%"
  }
}), $C = new xt("antZoomUpOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "50% 0%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 0%",
    opacity: 0
  }
}), OC = new xt("antZoomLeftIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "0% 50%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "0% 50%"
  }
}), RC = new xt("antZoomLeftOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "0% 50%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "0% 50%",
    opacity: 0
  }
}), PC = new xt("antZoomRightIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "100% 50%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "100% 50%"
  }
}), _C = new xt("antZoomRightOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "100% 50%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "100% 50%",
    opacity: 0
  }
}), TC = new xt("antZoomDownIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 100%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "50% 100%"
  }
}), IC = new xt("antZoomDownOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "50% 100%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 100%",
    opacity: 0
  }
}), NC = {
  zoom: {
    inKeyframes: wC,
    outKeyframes: EC
  },
  "zoom-big": {
    inKeyframes: yu,
    outKeyframes: Cu
  },
  "zoom-big-fast": {
    inKeyframes: yu,
    outKeyframes: Cu
  },
  "zoom-left": {
    inKeyframes: OC,
    outKeyframes: RC
  },
  "zoom-right": {
    inKeyframes: PC,
    outKeyframes: _C
  },
  "zoom-up": {
    inKeyframes: xC,
    outKeyframes: $C
  },
  "zoom-down": {
    inKeyframes: TC,
    outKeyframes: IC
  }
}, $l = (e, t) => {
  const {
    antCls: n
  } = e, r = `${n}-${t}`, {
    inKeyframes: a,
    outKeyframes: o
  } = NC[t];
  return [xl(r, a, o, t === "zoom-big-fast" ? e.motionDurationFast : e.motionDurationMid), {
    [`
        ${r}-enter,
        ${r}-appear
      `]: {
      transform: "scale(0)",
      opacity: 0,
      animationTimingFunction: e.motionEaseOutCirc,
      "&-prepare": {
        transform: "none"
      }
    },
    [`${r}-leave`]: {
      animationTimingFunction: e.motionEaseInOutCirc
    }
  }];
};
function Su(e) {
  return {
    position: e,
    inset: 0
  };
}
const yv = (e) => {
  const {
    componentCls: t,
    antCls: n
  } = e;
  return [{
    [`${t}-root`]: {
      [`${t}${n}-zoom-enter, ${t}${n}-zoom-appear`]: {
        // reset scale avoid mousePosition bug
        transform: "none",
        opacity: 0,
        animationDuration: e.motionDurationSlow,
        // https://github.com/ant-design/ant-design/issues/11777
        userSelect: "none"
      },
      // https://github.com/ant-design/ant-design/issues/37329
      // https://github.com/ant-design/ant-design/issues/40272
      [`${t}${n}-zoom-leave ${t}-content`]: {
        pointerEvents: "none"
      },
      [`${t}-mask`]: Object.assign(Object.assign({}, Su("fixed")), {
        zIndex: e.zIndexPopupBase,
        height: "100%",
        backgroundColor: e.colorBgMask,
        pointerEvents: "none",
        [`${t}-hidden`]: {
          display: "none"
        }
      }),
      [`${t}-wrap`]: Object.assign(Object.assign({}, Su("fixed")), {
        zIndex: e.zIndexPopupBase,
        overflow: "auto",
        outline: 0,
        WebkitOverflowScrolling: "touch"
      })
    }
  }, {
    [`${t}-root`]: bv(e)
  }];
}, MC = (e) => {
  const {
    componentCls: t
  } = e;
  return [
    // ======================== Root =========================
    {
      [`${t}-root`]: {
        [`${t}-wrap-rtl`]: {
          direction: "rtl"
        },
        [`${t}-centered`]: {
          textAlign: "center",
          "&::before": {
            display: "inline-block",
            width: 0,
            height: "100%",
            verticalAlign: "middle",
            content: '""'
          },
          [t]: {
            top: 0,
            display: "inline-block",
            paddingBottom: 0,
            textAlign: "start",
            verticalAlign: "middle"
          }
        },
        [`@media (max-width: ${e.screenSMMax}px)`]: {
          [t]: {
            maxWidth: "calc(100vw - 16px)",
            margin: `${ee(e.marginXS)} auto`
          },
          [`${t}-centered`]: {
            [t]: {
              flex: 1
            }
          }
        }
      }
    },
    // ======================== Modal ========================
    {
      [t]: Object.assign(Object.assign({}, sr(e)), {
        pointerEvents: "none",
        position: "relative",
        top: 100,
        width: "auto",
        maxWidth: `calc(100vw - ${ee(e.calc(e.margin).mul(2).equal())})`,
        margin: "0 auto",
        paddingBottom: e.paddingLG,
        [`${t}-title`]: {
          margin: 0,
          color: e.titleColor,
          fontWeight: e.fontWeightStrong,
          fontSize: e.titleFontSize,
          lineHeight: e.titleLineHeight,
          wordWrap: "break-word"
        },
        [`${t}-content`]: {
          position: "relative",
          backgroundColor: e.contentBg,
          backgroundClip: "padding-box",
          border: 0,
          borderRadius: e.borderRadiusLG,
          boxShadow: e.boxShadow,
          pointerEvents: "auto",
          padding: e.contentPadding
        },
        [`${t}-close`]: Object.assign({
          position: "absolute",
          top: e.calc(e.modalHeaderHeight).sub(e.modalCloseBtnSize).div(2).equal(),
          insetInlineEnd: e.calc(e.modalHeaderHeight).sub(e.modalCloseBtnSize).div(2).equal(),
          zIndex: e.calc(e.zIndexPopupBase).add(10).equal(),
          padding: 0,
          color: e.modalCloseIconColor,
          fontWeight: e.fontWeightStrong,
          lineHeight: 1,
          textDecoration: "none",
          background: "transparent",
          borderRadius: e.borderRadiusSM,
          width: e.modalCloseBtnSize,
          height: e.modalCloseBtnSize,
          border: 0,
          outline: 0,
          cursor: "pointer",
          transition: `color ${e.motionDurationMid}, background-color ${e.motionDurationMid}`,
          "&-x": {
            display: "flex",
            fontSize: e.fontSizeLG,
            fontStyle: "normal",
            lineHeight: `${ee(e.modalCloseBtnSize)}`,
            justifyContent: "center",
            textTransform: "none",
            textRendering: "auto"
          },
          "&:hover": {
            color: e.modalCloseIconHoverColor,
            backgroundColor: e.colorBgTextHover,
            textDecoration: "none"
          },
          "&:active": {
            backgroundColor: e.colorBgTextActive
          }
        }, ti(e)),
        [`${t}-header`]: {
          color: e.colorText,
          background: e.headerBg,
          borderRadius: `${ee(e.borderRadiusLG)} ${ee(e.borderRadiusLG)} 0 0`,
          marginBottom: e.headerMarginBottom,
          padding: e.headerPadding,
          borderBottom: e.headerBorderBottom
        },
        [`${t}-body`]: {
          fontSize: e.fontSize,
          lineHeight: e.lineHeight,
          wordWrap: "break-word",
          padding: e.bodyPadding,
          [`${t}-body-skeleton`]: {
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: `${ee(e.margin)} auto`
          }
        },
        [`${t}-footer`]: {
          textAlign: "end",
          background: e.footerBg,
          marginTop: e.footerMarginTop,
          padding: e.footerPadding,
          borderTop: e.footerBorderTop,
          borderRadius: e.footerBorderRadius,
          [`> ${e.antCls}-btn + ${e.antCls}-btn`]: {
            marginInlineStart: e.marginXS
          }
        },
        [`${t}-open`]: {
          overflow: "hidden"
        }
      })
    },
    // ======================== Pure =========================
    {
      [`${t}-pure-panel`]: {
        top: "auto",
        padding: 0,
        display: "flex",
        flexDirection: "column",
        [`${t}-content,
          ${t}-body,
          ${t}-confirm-body-wrapper`]: {
          display: "flex",
          flexDirection: "column",
          flex: "auto"
        },
        [`${t}-confirm-body`]: {
          marginBottom: "auto"
        }
      }
    }
  ];
}, AC = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [`${t}-root`]: {
      [`${t}-wrap-rtl`]: {
        direction: "rtl",
        [`${t}-confirm-body`]: {
          direction: "rtl"
        }
      }
    }
  };
}, LC = (e) => {
  const t = e.padding, n = e.fontSizeHeading5, r = e.lineHeightHeading5;
  return jt(e, {
    modalHeaderHeight: e.calc(e.calc(r).mul(n).equal()).add(e.calc(t).mul(2).equal()).equal(),
    modalFooterBorderColorSplit: e.colorSplit,
    modalFooterBorderStyle: e.lineType,
    modalFooterBorderWidth: e.lineWidth,
    modalCloseIconColor: e.colorIcon,
    modalCloseIconHoverColor: e.colorIconHover,
    modalCloseBtnSize: e.controlHeight,
    modalConfirmIconSize: e.fontHeight,
    modalTitleHeight: e.calc(e.titleFontSize).mul(e.titleLineHeight).equal()
  });
}, jC = (e) => ({
  footerBg: "transparent",
  headerBg: e.colorBgElevated,
  titleLineHeight: e.lineHeightHeading5,
  titleFontSize: e.fontSizeHeading5,
  contentBg: e.colorBgElevated,
  titleColor: e.colorTextHeading,
  // internal
  contentPadding: e.wireframe ? 0 : `${ee(e.paddingMD)} ${ee(e.paddingContentHorizontalLG)}`,
  headerPadding: e.wireframe ? `${ee(e.padding)} ${ee(e.paddingLG)}` : 0,
  headerBorderBottom: e.wireframe ? `${ee(e.lineWidth)} ${e.lineType} ${e.colorSplit}` : "none",
  headerMarginBottom: e.wireframe ? 0 : e.marginXS,
  bodyPadding: e.wireframe ? e.paddingLG : 0,
  footerPadding: e.wireframe ? `${ee(e.paddingXS)} ${ee(e.padding)}` : 0,
  footerBorderTop: e.wireframe ? `${ee(e.lineWidth)} ${e.lineType} ${e.colorSplit}` : "none",
  footerBorderRadius: e.wireframe ? `0 0 ${ee(e.borderRadiusLG)} ${ee(e.borderRadiusLG)}` : 0,
  footerMarginTop: e.wireframe ? 0 : e.marginSM,
  confirmBodyPadding: e.wireframe ? `${ee(e.padding * 2)} ${ee(e.padding * 2)} ${ee(e.paddingLG)}` : 0,
  confirmIconMarginInlineEnd: e.wireframe ? e.margin : e.marginSM,
  confirmBtnsMarginTop: e.wireframe ? e.marginLG : e.marginSM
});
Rn("Modal", (e) => {
  const t = LC(e);
  return [MC(t), AC(t), yv(t), $l(t, "zoom")];
}, jC, {
  unitless: {
    titleLineHeight: !0
  }
});
const Cv = function() {
  if (typeof navigator > "u" || typeof window > "u")
    return !1;
  var e = navigator.userAgent || navigator.vendor || window.opera;
  return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(e == null ? void 0 : e.substr(0, 4));
};
var FC = ["prefixCls", "invalidate", "item", "renderItem", "responsive", "responsiveDisabled", "registerSize", "itemKey", "className", "style", "children", "display", "order", "component"], Pr = void 0;
function DC(e, t) {
  var n = e.prefixCls, r = e.invalidate, a = e.item, o = e.renderItem, i = e.responsive, s = e.responsiveDisabled, l = e.registerSize, c = e.itemKey, d = e.className, f = e.style, v = e.children, g = e.display, p = e.order, h = e.component, m = h === void 0 ? "div" : h, S = Ze(e, FC), b = i && !g;
  function y(x) {
    l(c, x);
  }
  u.useEffect(function() {
    return function() {
      y(null);
    };
  }, []);
  var w = o && a !== Pr ? o(a) : v, C;
  r || (C = {
    opacity: b ? 0 : 1,
    height: b ? 0 : Pr,
    overflowY: b ? "hidden" : Pr,
    order: i ? p : Pr,
    pointerEvents: b ? "none" : Pr,
    position: b ? "absolute" : Pr
  });
  var O = {};
  b && (O["aria-hidden"] = !0);
  var E = /* @__PURE__ */ u.createElement(m, me({
    className: Y(!r && n, d),
    style: B(B({}, C), f)
  }, O, S, {
    ref: t
  }), w);
  return i && (E = /* @__PURE__ */ u.createElement(wn, {
    onResize: function(R) {
      var T = R.offsetWidth;
      y(T);
    },
    disabled: s
  }, E)), E;
}
var Ea = /* @__PURE__ */ u.forwardRef(DC);
Ea.displayName = "Item";
function zC(e) {
  if (typeof MessageChannel > "u")
    Mt(e);
  else {
    var t = new MessageChannel();
    t.port1.onmessage = function() {
      return e();
    }, t.port2.postMessage(void 0);
  }
}
function VC() {
  var e = u.useRef(null), t = function(r) {
    e.current || (e.current = [], zC(function() {
      qm(function() {
        e.current.forEach(function(a) {
          a();
        }), e.current = null;
      });
    })), e.current.push(r);
  };
  return t;
}
function va(e, t) {
  var n = u.useState(t), r = K(n, 2), a = r[0], o = r[1], i = Gt(function(s) {
    e(function() {
      o(s);
    });
  });
  return [a, i];
}
var Vo = /* @__PURE__ */ D.createContext(null), BC = ["component"], kC = ["className"], HC = ["className"], WC = function(t, n) {
  var r = u.useContext(Vo);
  if (!r) {
    var a = t.component, o = a === void 0 ? "div" : a, i = Ze(t, BC);
    return /* @__PURE__ */ u.createElement(o, me({}, i, {
      ref: n
    }));
  }
  var s = r.className, l = Ze(r, kC), c = t.className, d = Ze(t, HC);
  return /* @__PURE__ */ u.createElement(Vo.Provider, {
    value: null
  }, /* @__PURE__ */ u.createElement(Ea, me({
    ref: n,
    className: Y(s, c)
  }, l, d)));
}, Sv = /* @__PURE__ */ u.forwardRef(WC);
Sv.displayName = "RawItem";
var UC = ["prefixCls", "data", "renderItem", "renderRawItem", "itemKey", "itemWidth", "ssr", "style", "className", "maxCount", "renderRest", "renderRawRest", "suffix", "component", "itemComponent", "onVisibleChange"], wv = "responsive", Ev = "invalidate";
function KC(e) {
  return "+ ".concat(e.length, " ...");
}
function GC(e, t) {
  var n = e.prefixCls, r = n === void 0 ? "rc-overflow" : n, a = e.data, o = a === void 0 ? [] : a, i = e.renderItem, s = e.renderRawItem, l = e.itemKey, c = e.itemWidth, d = c === void 0 ? 10 : c, f = e.ssr, v = e.style, g = e.className, p = e.maxCount, h = e.renderRest, m = e.renderRawRest, S = e.suffix, b = e.component, y = b === void 0 ? "div" : b, w = e.itemComponent, C = e.onVisibleChange, O = Ze(e, UC), E = f === "full", x = VC(), R = va(x, null), T = K(R, 2), M = T[0], j = T[1], I = M || 0, _ = va(x, /* @__PURE__ */ new Map()), k = K(_, 2), N = k[0], P = k[1], $ = va(x, 0), F = K($, 2), L = F[0], V = F[1], W = va(x, 0), U = K(W, 2), G = U[0], Q = U[1], q = va(x, 0), Z = K(q, 2), re = Z[0], ae = Z[1], ue = rt(null), de = K(ue, 2), ce = de[0], ge = de[1], H = rt(null), ne = K(H, 2), ve = ne[0], $e = ne[1], pe = u.useMemo(function() {
    return ve === null && E ? Number.MAX_SAFE_INTEGER : ve || 0;
  }, [ve, M]), ie = rt(!1), oe = K(ie, 2), se = oe[0], we = oe[1], be = "".concat(r, "-item"), ye = Math.max(L, G), _e = p === wv, Ee = o.length && _e, st = p === Ev, Ye = Ee || typeof p == "number" && o.length > p, xe = $n(function() {
    var Fe = o;
    return Ee ? M === null && E ? Fe = o : Fe = o.slice(0, Math.min(o.length, I / d)) : typeof p == "number" && (Fe = o.slice(0, p)), Fe;
  }, [o, d, M, p, Ee]), Oe = $n(function() {
    return Ee ? o.slice(pe + 1) : o.slice(xe.length);
  }, [o, xe, Ee, pe]), te = er(function(Fe, Te) {
    var nt;
    return typeof l == "function" ? l(Fe) : (nt = l && (Fe == null ? void 0 : Fe[l])) !== null && nt !== void 0 ? nt : Te;
  }, [l]), le = er(i || function(Fe) {
    return Fe;
  }, [i]);
  function Ie(Fe, Te, nt) {
    ve === Fe && (Te === void 0 || Te === ce) || ($e(Fe), nt || (we(Fe < o.length - 1), C == null || C(Fe)), Te !== void 0 && ge(Te));
  }
  function Ve(Fe, Te) {
    j(Te.clientWidth);
  }
  function Ke(Fe, Te) {
    P(function(nt) {
      var Ct = new Map(nt);
      return Te === null ? Ct.delete(Fe) : Ct.set(Fe, Te), Ct;
    });
  }
  function Ue(Fe, Te) {
    Q(Te), V(G);
  }
  function Ae(Fe, Te) {
    ae(Te);
  }
  function fe(Fe) {
    return N.get(te(xe[Fe], Fe));
  }
  Et(function() {
    if (I && typeof ye == "number" && xe) {
      var Fe = re, Te = xe.length, nt = Te - 1;
      if (!Te) {
        Ie(0, null);
        return;
      }
      for (var Ct = 0; Ct < Te; Ct += 1) {
        var Je = fe(Ct);
        if (E && (Je = Je || 0), Je === void 0) {
          Ie(Ct - 1, void 0, !0);
          break;
        }
        if (Fe += Je, // Only one means `totalWidth` is the final width
        nt === 0 && Fe <= I || // Last two width will be the final width
        Ct === nt - 1 && Fe + fe(nt) <= I) {
          Ie(nt, null);
          break;
        } else if (Fe + ye > I) {
          Ie(Ct - 1, Fe - Je - re + G);
          break;
        }
      }
      S && fe(0) + re > I && ge(null);
    }
  }, [I, N, G, re, te, xe]);
  var he = se && !!Oe.length, je = {};
  ce !== null && Ee && (je = {
    position: "absolute",
    left: ce,
    top: 0
  });
  var Be = {
    prefixCls: be,
    responsive: Ee,
    component: w,
    invalidate: st
  }, wt = s ? function(Fe, Te) {
    var nt = te(Fe, Te);
    return /* @__PURE__ */ u.createElement(Vo.Provider, {
      key: nt,
      value: B(B({}, Be), {}, {
        order: Te,
        item: Fe,
        itemKey: nt,
        registerSize: Ke,
        display: Te <= pe
      })
    }, s(Fe, Te));
  } : function(Fe, Te) {
    var nt = te(Fe, Te);
    return /* @__PURE__ */ u.createElement(Ea, me({}, Be, {
      order: Te,
      key: nt,
      item: Fe,
      renderItem: le,
      itemKey: nt,
      registerSize: Ke,
      display: Te <= pe
    }));
  }, mt, Qe = {
    order: he ? pe : Number.MAX_SAFE_INTEGER,
    className: "".concat(be, "-rest"),
    registerSize: Ue,
    display: he
  };
  if (m)
    m && (mt = /* @__PURE__ */ u.createElement(Vo.Provider, {
      value: B(B({}, Be), Qe)
    }, m(Oe)));
  else {
    var Xe = h || KC;
    mt = /* @__PURE__ */ u.createElement(Ea, me({}, Be, Qe), typeof Xe == "function" ? Xe(Oe) : Xe);
  }
  var Ge = /* @__PURE__ */ u.createElement(y, me({
    className: Y(!st && r, g),
    style: v,
    ref: t
  }, O), xe.map(wt), Ye ? mt : null, S && /* @__PURE__ */ u.createElement(Ea, me({}, Be, {
    responsive: _e,
    responsiveDisabled: !Ee,
    order: pe,
    className: "".concat(be, "-suffix"),
    registerSize: Ae,
    display: !0,
    style: je
  }), S));
  return _e && (Ge = /* @__PURE__ */ u.createElement(wn, {
    onResize: Ve,
    disabled: !Ee
  }, Ge)), Ge;
}
var Un = /* @__PURE__ */ u.forwardRef(GC);
Un.displayName = "Overflow";
Un.Item = Sv;
Un.RESPONSIVE = wv;
Un.INVALIDATE = Ev;
function qC(e) {
  var t = e.prefixCls, n = e.align, r = e.arrow, a = e.arrowPos, o = r || {}, i = o.className, s = o.content, l = a.x, c = l === void 0 ? 0 : l, d = a.y, f = d === void 0 ? 0 : d, v = u.useRef();
  if (!n || !n.points)
    return null;
  var g = {
    position: "absolute"
  };
  if (n.autoArrow !== !1) {
    var p = n.points[0], h = n.points[1], m = p[0], S = p[1], b = h[0], y = h[1];
    m === b || !["t", "b"].includes(m) ? g.top = f : m === "t" ? g.top = 0 : g.bottom = 0, S === y || !["l", "r"].includes(S) ? g.left = c : S === "l" ? g.left = 0 : g.right = 0;
  }
  return /* @__PURE__ */ u.createElement("div", {
    ref: v,
    className: Y("".concat(t, "-arrow"), i),
    style: g
  }, s);
}
function XC(e) {
  var t = e.prefixCls, n = e.open, r = e.zIndex, a = e.mask, o = e.motion;
  return a ? /* @__PURE__ */ u.createElement(Ln, me({}, o, {
    motionAppear: !0,
    visible: n,
    removeOnLeave: !0
  }), function(i) {
    var s = i.className;
    return /* @__PURE__ */ u.createElement("div", {
      style: {
        zIndex: r
      },
      className: Y("".concat(t, "-mask"), s)
    });
  }) : null;
}
var xv = /* @__PURE__ */ u.memo(function(e) {
  var t = e.children;
  return t;
}, function(e, t) {
  return t.cache;
});
process.env.NODE_ENV !== "production" && (xv.displayName = "PopupContent");
var $v = /* @__PURE__ */ u.forwardRef(function(e, t) {
  var n = e.popup, r = e.className, a = e.prefixCls, o = e.style, i = e.target, s = e.onVisibleChanged, l = e.open, c = e.keepDom, d = e.fresh, f = e.onClick, v = e.mask, g = e.arrow, p = e.arrowPos, h = e.align, m = e.motion, S = e.maskMotion, b = e.forceRender, y = e.getPopupContainer, w = e.autoDestroy, C = e.portal, O = e.zIndex, E = e.onMouseEnter, x = e.onMouseLeave, R = e.onPointerEnter, T = e.ready, M = e.offsetX, j = e.offsetY, I = e.offsetR, _ = e.offsetB, k = e.onAlign, N = e.onPrepare, P = e.stretch, $ = e.targetWidth, F = e.targetHeight, L = typeof n == "function" ? n() : n, V = l || c, W = (y == null ? void 0 : y.length) > 0, U = u.useState(!y || !W), G = K(U, 2), Q = G[0], q = G[1];
  if (Et(function() {
    !Q && W && i && q(!0);
  }, [Q, W, i]), !Q)
    return null;
  var Z = "auto", re = {
    left: "-1000vw",
    top: "-1000vh",
    right: Z,
    bottom: Z
  };
  if (T || !l) {
    var ae, ue = h.points, de = h.dynamicInset || ((ae = h._experimental) === null || ae === void 0 ? void 0 : ae.dynamicInset), ce = de && ue[0][1] === "r", ge = de && ue[0][0] === "b";
    ce ? (re.right = I, re.left = Z) : (re.left = M, re.right = Z), ge ? (re.bottom = _, re.top = Z) : (re.top = j, re.bottom = Z);
  }
  var H = {};
  return P && (P.includes("height") && F ? H.height = F : P.includes("minHeight") && F && (H.minHeight = F), P.includes("width") && $ ? H.width = $ : P.includes("minWidth") && $ && (H.minWidth = $)), l || (H.pointerEvents = "none"), /* @__PURE__ */ u.createElement(C, {
    open: b || V,
    getContainer: y && function() {
      return y(i);
    },
    autoDestroy: w
  }, /* @__PURE__ */ u.createElement(XC, {
    prefixCls: a,
    open: l,
    zIndex: O,
    mask: v,
    motion: S
  }), /* @__PURE__ */ u.createElement(wn, {
    onResize: k,
    disabled: !l
  }, function(ne) {
    return /* @__PURE__ */ u.createElement(Ln, me({
      motionAppear: !0,
      motionEnter: !0,
      motionLeave: !0,
      removeOnLeave: !1,
      forceRender: b,
      leavedClassName: "".concat(a, "-hidden")
    }, m, {
      onAppearPrepare: N,
      onEnterPrepare: N,
      visible: l,
      onVisibleChanged: function($e) {
        var pe;
        m == null || (pe = m.onVisibleChanged) === null || pe === void 0 || pe.call(m, $e), s($e);
      }
    }), function(ve, $e) {
      var pe = ve.className, ie = ve.style, oe = Y(a, pe, r);
      return /* @__PURE__ */ u.createElement("div", {
        ref: An(ne, t, $e),
        className: oe,
        style: B(B(B(B({
          "--arrow-x": "".concat(p.x || 0, "px"),
          "--arrow-y": "".concat(p.y || 0, "px")
        }, re), H), ie), {}, {
          boxSizing: "border-box",
          zIndex: O
        }, o),
        onMouseEnter: E,
        onMouseLeave: x,
        onPointerEnter: R,
        onClick: f
      }, g && /* @__PURE__ */ u.createElement(qC, {
        prefixCls: a,
        arrow: g,
        arrowPos: p,
        align: h
      }), /* @__PURE__ */ u.createElement(xv, {
        cache: !l && !d
      }, L));
    });
  }));
});
process.env.NODE_ENV !== "production" && ($v.displayName = "Popup");
var Ov = /* @__PURE__ */ u.forwardRef(function(e, t) {
  var n = e.children, r = e.getTriggerDOMNode, a = yr(n), o = u.useCallback(function(s) {
    nl(t, r ? r(s) : s);
  }, [r]), i = Qr(o, n.ref);
  return a ? /* @__PURE__ */ u.cloneElement(n, {
    ref: i
  }) : n;
});
process.env.NODE_ENV !== "production" && (Ov.displayName = "TriggerWrapper");
var wu = /* @__PURE__ */ u.createContext(null);
function Eu(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
function ZC(e, t, n, r) {
  return u.useMemo(function() {
    var a = Eu(n ?? t), o = Eu(r ?? t), i = new Set(a), s = new Set(o);
    return e && (i.has("hover") && (i.delete("hover"), i.add("click")), s.has("hover") && (s.delete("hover"), s.add("click"))), [i, s];
  }, [e, t, n, r]);
}
function YC() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], n = arguments.length > 2 ? arguments[2] : void 0;
  return n ? e[0] === t[0] : e[0] === t[0] && e[1] === t[1];
}
function QC(e, t, n, r) {
  for (var a = n.points, o = Object.keys(e), i = 0; i < o.length; i += 1) {
    var s, l = o[i];
    if (YC((s = e[l]) === null || s === void 0 ? void 0 : s.points, a, r))
      return "".concat(t, "-placement-").concat(l);
  }
  return "";
}
function xu(e, t, n, r) {
  return t || (n ? {
    motionName: "".concat(e, "-").concat(n)
  } : r ? {
    motionName: r
  } : null);
}
function Ua(e) {
  return e.ownerDocument.defaultView;
}
function Bs(e) {
  for (var t = [], n = e == null ? void 0 : e.parentElement, r = ["hidden", "scroll", "clip", "auto"]; n; ) {
    var a = Ua(n).getComputedStyle(n), o = a.overflowX, i = a.overflowY, s = a.overflow;
    [o, i, s].some(function(l) {
      return r.includes(l);
    }) && t.push(n), n = n.parentElement;
  }
  return t;
}
function ja(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  return Number.isNaN(e) ? t : e;
}
function ma(e) {
  return ja(parseFloat(e), 0);
}
function $u(e, t) {
  var n = B({}, e);
  return (t || []).forEach(function(r) {
    if (!(r instanceof HTMLBodyElement || r instanceof HTMLHtmlElement)) {
      var a = Ua(r).getComputedStyle(r), o = a.overflow, i = a.overflowClipMargin, s = a.borderTopWidth, l = a.borderBottomWidth, c = a.borderLeftWidth, d = a.borderRightWidth, f = r.getBoundingClientRect(), v = r.offsetHeight, g = r.clientHeight, p = r.offsetWidth, h = r.clientWidth, m = ma(s), S = ma(l), b = ma(c), y = ma(d), w = ja(Math.round(f.width / p * 1e3) / 1e3), C = ja(Math.round(f.height / v * 1e3) / 1e3), O = (p - h - b - y) * w, E = (v - g - m - S) * C, x = m * C, R = S * C, T = b * w, M = y * w, j = 0, I = 0;
      if (o === "clip") {
        var _ = ma(i);
        j = _ * w, I = _ * C;
      }
      var k = f.x + T - j, N = f.y + x - I, P = k + f.width + 2 * j - T - M - O, $ = N + f.height + 2 * I - x - R - E;
      n.left = Math.max(n.left, k), n.top = Math.max(n.top, N), n.right = Math.min(n.right, P), n.bottom = Math.min(n.bottom, $);
    }
  }), n;
}
function Ou(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = "".concat(t), r = n.match(/^(.*)\%$/);
  return r ? e * (parseFloat(r[1]) / 100) : parseFloat(n);
}
function Ru(e, t) {
  var n = t || [], r = K(n, 2), a = r[0], o = r[1];
  return [Ou(e.width, a), Ou(e.height, o)];
}
function Pu() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  return [e[0], e[1]];
}
function _r(e, t) {
  var n = t[0], r = t[1], a, o;
  return n === "t" ? o = e.y : n === "b" ? o = e.y + e.height : o = e.y + e.height / 2, r === "l" ? a = e.x : r === "r" ? a = e.x + e.width : a = e.x + e.width / 2, {
    x: a,
    y: o
  };
}
function Qn(e, t) {
  var n = {
    t: "b",
    b: "t",
    l: "r",
    r: "l"
  };
  return e.map(function(r, a) {
    return a === t ? n[r] || "c" : r;
  }).join("");
}
function JC(e, t, n, r, a, o, i) {
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
    align: a[r] || {}
  }), l = K(s, 2), c = l[0], d = l[1], f = u.useRef(0), v = u.useMemo(function() {
    return t ? Bs(t) : [];
  }, [t]), g = u.useRef({}), p = function() {
    g.current = {};
  };
  e || p();
  var h = Gt(function() {
    if (t && n && e) {
      let Yt = function(Qt, pn) {
        var Yn = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : oe, xr = L.x + Qt, la = L.y + pn, ca = xr + ae, Za = la + re, vi = Math.max(xr, Yn.left), mi = Math.max(la, Yn.top), gi = Math.min(ca, Yn.right), pi = Math.min(Za, Yn.bottom);
        return Math.max(0, (gi - vi) * (pi - mi));
      }, cr = function() {
        A = L.y + Xe, X = A + re, J = L.x + Qe, Ce = J + ae;
      };
      var b, y, w = t, C = w.ownerDocument, O = Ua(w), E = O.getComputedStyle(w), x = E.width, R = E.height, T = E.position, M = w.style.left, j = w.style.top, I = w.style.right, _ = w.style.bottom, k = w.style.overflow, N = B(B({}, a[r]), o), P = C.createElement("div");
      (b = w.parentElement) === null || b === void 0 || b.appendChild(P), P.style.left = "".concat(w.offsetLeft, "px"), P.style.top = "".concat(w.offsetTop, "px"), P.style.position = T, P.style.height = "".concat(w.offsetHeight, "px"), P.style.width = "".concat(w.offsetWidth, "px"), w.style.left = "0", w.style.top = "0", w.style.right = "auto", w.style.bottom = "auto", w.style.overflow = "hidden";
      var $;
      if (Array.isArray(n))
        $ = {
          x: n[0],
          y: n[1],
          width: 0,
          height: 0
        };
      else {
        var F = n.getBoundingClientRect();
        $ = {
          x: F.x,
          y: F.y,
          width: F.width,
          height: F.height
        };
      }
      var L = w.getBoundingClientRect(), V = C.documentElement, W = V.clientWidth, U = V.clientHeight, G = V.scrollWidth, Q = V.scrollHeight, q = V.scrollTop, Z = V.scrollLeft, re = L.height, ae = L.width, ue = $.height, de = $.width, ce = {
        left: 0,
        top: 0,
        right: W,
        bottom: U
      }, ge = {
        left: -Z,
        top: -q,
        right: G - Z,
        bottom: Q - q
      }, H = N.htmlRegion, ne = "visible", ve = "visibleFirst";
      H !== "scroll" && H !== ve && (H = ne);
      var $e = H === ve, pe = $u(ge, v), ie = $u(ce, v), oe = H === ne ? ie : pe, se = $e ? ie : oe;
      w.style.left = "auto", w.style.top = "auto", w.style.right = "0", w.style.bottom = "0";
      var we = w.getBoundingClientRect();
      w.style.left = M, w.style.top = j, w.style.right = I, w.style.bottom = _, w.style.overflow = k, (y = w.parentElement) === null || y === void 0 || y.removeChild(P);
      var be = ja(Math.round(ae / parseFloat(x) * 1e3) / 1e3), ye = ja(Math.round(re / parseFloat(R) * 1e3) / 1e3);
      if (be === 0 || ye === 0 || xa(n) && !yl(n))
        return;
      var _e = N.offset, Ee = N.targetOffset, st = Ru(L, _e), Ye = K(st, 2), xe = Ye[0], Oe = Ye[1], te = Ru($, Ee), le = K(te, 2), Ie = le[0], Ve = le[1];
      $.x -= Ie, $.y -= Ve;
      var Ke = N.points || [], Ue = K(Ke, 2), Ae = Ue[0], fe = Ue[1], he = Pu(fe), je = Pu(Ae), Be = _r($, he), wt = _r(L, je), mt = B({}, N), Qe = Be.x - wt.x + xe, Xe = Be.y - wt.y + Oe, Ge = Yt(Qe, Xe), Fe = Yt(Qe, Xe, ie), Te = _r($, ["t", "l"]), nt = _r(L, ["t", "l"]), Ct = _r($, ["b", "r"]), Je = _r(L, ["b", "r"]), et = N.overflow || {}, ut = et.adjustX, St = et.adjustY, At = et.shiftX, Wt = et.shiftY, qt = function(pn) {
        return typeof pn == "boolean" ? pn : pn >= 0;
      }, A, X, J, Ce;
      cr();
      var De = qt(St), Le = je[0] === he[0];
      if (De && je[0] === "t" && (X > se.bottom || g.current.bt)) {
        var ze = Xe;
        Le ? ze -= re - ue : ze = Te.y - Je.y - Oe;
        var He = Yt(Qe, ze), ht = Yt(Qe, ze, ie);
        // Of course use larger one
        He > Ge || He === Ge && (!$e || // Choose recommend one
        ht >= Fe) ? (g.current.bt = !0, Xe = ze, Oe = -Oe, mt.points = [Qn(je, 0), Qn(he, 0)]) : g.current.bt = !1;
      }
      if (De && je[0] === "b" && (A < se.top || g.current.tb)) {
        var it = Xe;
        Le ? it += re - ue : it = Ct.y - nt.y - Oe;
        var qe = Yt(Qe, it), Rt = Yt(Qe, it, ie);
        // Of course use larger one
        qe > Ge || qe === Ge && (!$e || // Choose recommend one
        Rt >= Fe) ? (g.current.tb = !0, Xe = it, Oe = -Oe, mt.points = [Qn(je, 0), Qn(he, 0)]) : g.current.tb = !1;
      }
      var Xt = qt(ut), Ut = je[1] === he[1];
      if (Xt && je[1] === "l" && (Ce > se.right || g.current.rl)) {
        var bt = Qe;
        Ut ? bt -= ae - de : bt = Te.x - Je.x - xe;
        var Pn = Yt(bt, Xe), qn = Yt(bt, Xe, ie);
        // Of course use larger one
        Pn > Ge || Pn === Ge && (!$e || // Choose recommend one
        qn >= Fe) ? (g.current.rl = !0, Qe = bt, xe = -xe, mt.points = [Qn(je, 1), Qn(he, 1)]) : g.current.rl = !1;
      }
      if (Xt && je[1] === "r" && (J < se.left || g.current.lr)) {
        var Zt = Qe;
        Ut ? Zt += ae - de : Zt = Ct.x - nt.x - xe;
        var Xn = Yt(Zt, Xe), ra = Yt(Zt, Xe, ie);
        // Of course use larger one
        Xn > Ge || Xn === Ge && (!$e || // Choose recommend one
        ra >= Fe) ? (g.current.lr = !0, Qe = Zt, xe = -xe, mt.points = [Qn(je, 1), Qn(he, 1)]) : g.current.lr = !1;
      }
      cr();
      var sn = At === !0 ? 0 : At;
      typeof sn == "number" && (J < ie.left && (Qe -= J - ie.left - xe, $.x + de < ie.left + sn && (Qe += $.x - ie.left + de - sn)), Ce > ie.right && (Qe -= Ce - ie.right - xe, $.x > ie.right - sn && (Qe += $.x - ie.right + sn)));
      var mn = Wt === !0 ? 0 : Wt;
      typeof mn == "number" && (A < ie.top && (Xe -= A - ie.top - Oe, $.y + ue < ie.top + mn && (Xe += $.y - ie.top + ue - mn)), X > ie.bottom && (Xe -= X - ie.bottom - Oe, $.y > ie.bottom - mn && (Xe += $.y - ie.bottom + mn)));
      var Zn = L.x + Qe, jn = Zn + ae, _n = L.y + Xe, Fn = _n + re, lr = $.x, Dn = lr + de, gn = $.y, aa = gn + ue, oa = Math.max(Zn, lr), ia = Math.min(jn, Dn), Er = (oa + ia) / 2, yt = Er - Zn, lt = Math.max(_n, gn), gt = Math.min(Fn, aa), Dt = (lt + gt) / 2, Vt = Dt - _n;
      i == null || i(t, mt);
      var Tn = we.right - L.x - (Qe + L.width), In = we.bottom - L.y - (Xe + L.height);
      be === 1 && (Qe = Math.round(Qe), Tn = Math.round(Tn)), ye === 1 && (Xe = Math.round(Xe), In = Math.round(In));
      var sa = {
        ready: !0,
        offsetX: Qe / be,
        offsetY: Xe / ye,
        offsetR: Tn / be,
        offsetB: In / ye,
        arrowX: yt / be,
        arrowY: Vt / ye,
        scaleX: be,
        scaleY: ye,
        align: mt
      };
      d(sa);
    }
  }), m = function() {
    f.current += 1;
    var y = f.current;
    Promise.resolve().then(function() {
      f.current === y && h();
    });
  }, S = function() {
    d(function(y) {
      return B(B({}, y), {}, {
        ready: !1
      });
    });
  };
  return Et(S, [r]), Et(function() {
    e || S();
  }, [e]), [c.ready, c.offsetX, c.offsetY, c.offsetR, c.offsetB, c.arrowX, c.arrowY, c.scaleX, c.scaleY, c.align, m];
}
function eS(e, t, n, r, a) {
  Et(function() {
    if (e && t && n) {
      let f = function() {
        r(), a();
      };
      var o = t, i = n, s = Bs(o), l = Bs(i), c = Ua(i), d = new Set([c].concat(Pe(s), Pe(l)));
      return d.forEach(function(v) {
        v.addEventListener("scroll", f, {
          passive: !0
        });
      }), c.addEventListener("resize", f, {
        passive: !0
      }), r(), function() {
        d.forEach(function(v) {
          v.removeEventListener("scroll", f), c.removeEventListener("resize", f);
        });
      };
    }
  }, [e, t, n]);
}
function tS(e, t, n, r, a, o, i, s) {
  var l = u.useRef(e);
  l.current = e, u.useEffect(function() {
    if (t && r && (!a || o)) {
      var c = function(S) {
        var b = S.target;
        l.current && !i(b) && s(!1);
      }, d = Ua(r);
      d.addEventListener("mousedown", c, !0), d.addEventListener("contextmenu", c, !0);
      var f = jo(n);
      if (f && (f.addEventListener("mousedown", c, !0), f.addEventListener("contextmenu", c, !0)), process.env.NODE_ENV !== "production") {
        var v, g, p = n == null || (v = n.getRootNode) === null || v === void 0 ? void 0 : v.call(n), h = (g = r.getRootNode) === null || g === void 0 ? void 0 : g.call(r);
        Kn(p === h, "trigger element and popup element should in same shadow root.");
      }
      return function() {
        d.removeEventListener("mousedown", c, !0), d.removeEventListener("contextmenu", c, !0), f && (f.removeEventListener("mousedown", c, !0), f.removeEventListener("contextmenu", c, !0));
      };
    }
  }, [t, n, r, a, o]);
}
var nS = ["prefixCls", "children", "action", "showAction", "hideAction", "popupVisible", "defaultPopupVisible", "onPopupVisibleChange", "afterPopupVisibleChange", "mouseEnterDelay", "mouseLeaveDelay", "focusDelay", "blurDelay", "mask", "maskClosable", "getPopupContainer", "forceRender", "autoDestroy", "destroyPopupOnHide", "popup", "popupClassName", "popupStyle", "popupPlacement", "builtinPlacements", "popupAlign", "zIndex", "stretch", "getPopupClassNameFromAlign", "fresh", "alignPoint", "onPopupClick", "onPopupAlign", "arrow", "popupMotion", "maskMotion", "popupTransitionName", "popupAnimation", "maskTransitionName", "maskAnimation", "className", "getTriggerDOMNode"];
function rS() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ka, t = /* @__PURE__ */ u.forwardRef(function(n, r) {
    var a = n.prefixCls, o = a === void 0 ? "rc-trigger-popup" : a, i = n.children, s = n.action, l = s === void 0 ? "hover" : s, c = n.showAction, d = n.hideAction, f = n.popupVisible, v = n.defaultPopupVisible, g = n.onPopupVisibleChange, p = n.afterPopupVisibleChange, h = n.mouseEnterDelay, m = n.mouseLeaveDelay, S = m === void 0 ? 0.1 : m, b = n.focusDelay, y = n.blurDelay, w = n.mask, C = n.maskClosable, O = C === void 0 ? !0 : C, E = n.getPopupContainer, x = n.forceRender, R = n.autoDestroy, T = n.destroyPopupOnHide, M = n.popup, j = n.popupClassName, I = n.popupStyle, _ = n.popupPlacement, k = n.builtinPlacements, N = k === void 0 ? {} : k, P = n.popupAlign, $ = n.zIndex, F = n.stretch, L = n.getPopupClassNameFromAlign, V = n.fresh, W = n.alignPoint, U = n.onPopupClick, G = n.onPopupAlign, Q = n.arrow, q = n.popupMotion, Z = n.maskMotion, re = n.popupTransitionName, ae = n.popupAnimation, ue = n.maskTransitionName, de = n.maskAnimation, ce = n.className, ge = n.getTriggerDOMNode, H = Ze(n, nS), ne = R || T || !1, ve = u.useState(!1), $e = K(ve, 2), pe = $e[0], ie = $e[1];
    Et(function() {
      ie(Cv());
    }, []);
    var oe = u.useRef({}), se = u.useContext(wu), we = u.useMemo(function() {
      return {
        registerSubPopup: function(We, $t) {
          oe.current[We] = $t, se == null || se.registerSubPopup(We, $t);
        }
      };
    }, [se]), be = ov(), ye = u.useState(null), _e = K(ye, 2), Ee = _e[0], st = _e[1], Ye = u.useRef(null), xe = Gt(function(Ne) {
      Ye.current = Ne, xa(Ne) && Ee !== Ne && st(Ne), se == null || se.registerSubPopup(be, Ne);
    }), Oe = u.useState(null), te = K(Oe, 2), le = te[0], Ie = te[1], Ve = u.useRef(null), Ke = Gt(function(Ne) {
      xa(Ne) && le !== Ne && (Ie(Ne), Ve.current = Ne);
    }), Ue = u.Children.only(i), Ae = (Ue == null ? void 0 : Ue.props) || {}, fe = {}, he = Gt(function(Ne) {
      var We, $t, Lt = le;
      return (Lt == null ? void 0 : Lt.contains(Ne)) || ((We = jo(Lt)) === null || We === void 0 ? void 0 : We.host) === Ne || Ne === Lt || (Ee == null ? void 0 : Ee.contains(Ne)) || (($t = jo(Ee)) === null || $t === void 0 ? void 0 : $t.host) === Ne || Ne === Ee || Object.values(oe.current).some(function(Ot) {
        return (Ot == null ? void 0 : Ot.contains(Ne)) || Ne === Ot;
      });
    }), je = xu(o, q, ae, re), Be = xu(o, Z, de, ue), wt = u.useState(v || !1), mt = K(wt, 2), Qe = mt[0], Xe = mt[1], Ge = f ?? Qe, Fe = Gt(function(Ne) {
      f === void 0 && Xe(Ne);
    });
    Et(function() {
      Xe(f || !1);
    }, [f]);
    var Te = u.useRef(Ge);
    Te.current = Ge;
    var nt = u.useRef([]);
    nt.current = [];
    var Ct = Gt(function(Ne) {
      var We;
      Fe(Ne), ((We = nt.current[nt.current.length - 1]) !== null && We !== void 0 ? We : Ge) !== Ne && (nt.current.push(Ne), g == null || g(Ne));
    }), Je = u.useRef(), et = function() {
      clearTimeout(Je.current);
    }, ut = function(We) {
      var $t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      et(), $t === 0 ? Ct(We) : Je.current = setTimeout(function() {
        Ct(We);
      }, $t * 1e3);
    };
    u.useEffect(function() {
      return et;
    }, []);
    var St = u.useState(!1), At = K(St, 2), Wt = At[0], qt = At[1];
    Et(function(Ne) {
      (!Ne || Ge) && qt(!0);
    }, [Ge]);
    var A = u.useState(null), X = K(A, 2), J = X[0], Ce = X[1], De = u.useState([0, 0]), Le = K(De, 2), ze = Le[0], He = Le[1], ht = function(We) {
      He([We.clientX, We.clientY]);
    }, it = JC(Ge, Ee, W ? ze : le, _, N, P, G), qe = K(it, 11), Rt = qe[0], Xt = qe[1], Ut = qe[2], bt = qe[3], Pn = qe[4], qn = qe[5], Zt = qe[6], Xn = qe[7], ra = qe[8], sn = qe[9], mn = qe[10], Zn = ZC(pe, l, c, d), jn = K(Zn, 2), _n = jn[0], Fn = jn[1], lr = _n.has("click"), Dn = Fn.has("click") || Fn.has("contextMenu"), gn = Gt(function() {
      Wt || mn();
    }), aa = function() {
      Te.current && W && Dn && ut(!1);
    };
    eS(Ge, le, Ee, gn, aa), Et(function() {
      gn();
    }, [ze, _]), Et(function() {
      Ge && !(N != null && N[_]) && gn();
    }, [JSON.stringify(P)]);
    var oa = u.useMemo(function() {
      var Ne = QC(N, o, sn, W);
      return Y(Ne, L == null ? void 0 : L(sn));
    }, [sn, L, N, o, W]);
    u.useImperativeHandle(r, function() {
      return {
        nativeElement: Ve.current,
        popupElement: Ye.current,
        forceAlign: gn
      };
    });
    var ia = u.useState(0), Er = K(ia, 2), yt = Er[0], lt = Er[1], gt = u.useState(0), Dt = K(gt, 2), Vt = Dt[0], Tn = Dt[1], In = function() {
      if (F && le) {
        var We = le.getBoundingClientRect();
        lt(We.width), Tn(We.height);
      }
    }, sa = function() {
      In(), gn();
    }, Yt = function(We) {
      qt(!1), mn(), p == null || p(We);
    }, cr = function() {
      return new Promise(function(We) {
        In(), Ce(function() {
          return We;
        });
      });
    };
    Et(function() {
      J && (mn(), J(), Ce(null));
    }, [J]);
    function Qt(Ne, We, $t, Lt) {
      fe[Ne] = function(Ot) {
        var Ya;
        Lt == null || Lt(Ot), ut(We, $t);
        for (var hi = arguments.length, kl = new Array(hi > 1 ? hi - 1 : 0), Qa = 1; Qa < hi; Qa++)
          kl[Qa - 1] = arguments[Qa];
        (Ya = Ae[Ne]) === null || Ya === void 0 || Ya.call.apply(Ya, [Ae, Ot].concat(kl));
      };
    }
    (lr || Dn) && (fe.onClick = function(Ne) {
      var We;
      Te.current && Dn ? ut(!1) : !Te.current && lr && (ht(Ne), ut(!0));
      for (var $t = arguments.length, Lt = new Array($t > 1 ? $t - 1 : 0), Ot = 1; Ot < $t; Ot++)
        Lt[Ot - 1] = arguments[Ot];
      (We = Ae.onClick) === null || We === void 0 || We.call.apply(We, [Ae, Ne].concat(Lt));
    }), tS(Ge, Dn, le, Ee, w, O, he, ut);
    var pn = _n.has("hover"), Yn = Fn.has("hover"), xr, la;
    pn && (Qt("onMouseEnter", !0, h, function(Ne) {
      ht(Ne);
    }), Qt("onPointerEnter", !0, h, function(Ne) {
      ht(Ne);
    }), xr = function(We) {
      (Ge || Wt) && Ee !== null && Ee !== void 0 && Ee.contains(We.target) && ut(!0, h);
    }, W && (fe.onMouseMove = function(Ne) {
      var We;
      (We = Ae.onMouseMove) === null || We === void 0 || We.call(Ae, Ne);
    })), Yn && (Qt("onMouseLeave", !1, S), Qt("onPointerLeave", !1, S), la = function() {
      ut(!1, S);
    }), _n.has("focus") && Qt("onFocus", !0, b), Fn.has("focus") && Qt("onBlur", !1, y), _n.has("contextMenu") && (fe.onContextMenu = function(Ne) {
      var We;
      Te.current && Fn.has("contextMenu") ? ut(!1) : (ht(Ne), ut(!0)), Ne.preventDefault();
      for (var $t = arguments.length, Lt = new Array($t > 1 ? $t - 1 : 0), Ot = 1; Ot < $t; Ot++)
        Lt[Ot - 1] = arguments[Ot];
      (We = Ae.onContextMenu) === null || We === void 0 || We.call.apply(We, [Ae, Ne].concat(Lt));
    }), ce && (fe.className = Y(Ae.className, ce));
    var ca = B(B({}, Ae), fe), Za = {}, vi = ["onContextMenu", "onClick", "onMouseDown", "onTouchStart", "onMouseEnter", "onMouseLeave", "onFocus", "onBlur"];
    vi.forEach(function(Ne) {
      H[Ne] && (Za[Ne] = function() {
        for (var We, $t = arguments.length, Lt = new Array($t), Ot = 0; Ot < $t; Ot++)
          Lt[Ot] = arguments[Ot];
        (We = ca[Ne]) === null || We === void 0 || We.call.apply(We, [ca].concat(Lt)), H[Ne].apply(H, Lt);
      });
    });
    var mi = /* @__PURE__ */ u.cloneElement(Ue, B(B({}, ca), Za)), gi = {
      x: qn,
      y: Zt
    }, pi = Q ? B({}, Q !== !0 ? Q : {}) : null;
    return /* @__PURE__ */ u.createElement(u.Fragment, null, /* @__PURE__ */ u.createElement(wn, {
      disabled: !Ge,
      ref: Ke,
      onResize: sa
    }, /* @__PURE__ */ u.createElement(Ov, {
      getTriggerDOMNode: ge
    }, mi)), /* @__PURE__ */ u.createElement(wu.Provider, {
      value: we
    }, /* @__PURE__ */ u.createElement($v, {
      portal: e,
      ref: xe,
      prefixCls: o,
      popup: M,
      className: Y(j, oa),
      style: I,
      target: le,
      onMouseEnter: xr,
      onMouseLeave: la,
      onPointerEnter: xr,
      zIndex: $,
      open: Ge,
      keepDom: Wt,
      fresh: V,
      onClick: U,
      mask: w,
      motion: je,
      maskMotion: Be,
      onVisibleChanged: Yt,
      onPrepare: cr,
      forceRender: x,
      autoDestroy: ne,
      getPopupContainer: E,
      align: sn,
      arrow: pi,
      arrowPos: gi,
      ready: Rt,
      offsetX: Xt,
      offsetY: Ut,
      offsetR: bt,
      offsetB: Pn,
      onAlign: gn,
      stretch: F,
      targetWidth: yt / Xn,
      targetHeight: Vt / ra
    })));
  });
  return process.env.NODE_ENV !== "production" && (t.displayName = "Trigger"), t;
}
const Ol = rS(ka);
function ks(e, t, n) {
  return Y({
    [`${e}-status-success`]: t === "success",
    [`${e}-status-warning`]: t === "warning",
    [`${e}-status-error`]: t === "error",
    [`${e}-status-validating`]: t === "validating",
    [`${e}-has-feedback`]: n
  });
}
const Rv = (e, t) => t || e, Pv = function(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : void 0;
  var r, a;
  const {
    variant: o,
    [e]: i
  } = Nt(vt), s = Nt(Fy), l = i == null ? void 0 : i.variant;
  let c;
  typeof t < "u" ? c = t : n === !1 ? c = "borderless" : c = (a = (r = s ?? l) !== null && r !== void 0 ? r : o) !== null && a !== void 0 ? a : "outlined";
  const d = lh.includes(c);
  return [c, d];
};
var aS = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z" } }] }, name: "check", theme: "outlined" }, oS = function(t, n) {
  return /* @__PURE__ */ u.createElement(Tt, me({}, t, {
    ref: n,
    icon: aS
  }));
}, _v = /* @__PURE__ */ u.forwardRef(oS);
process.env.NODE_ENV !== "production" && (_v.displayName = "CheckOutlined");
function Tv(e) {
  var t = e.children, n = e.prefixCls, r = e.id, a = e.overlayInnerStyle, o = e.className, i = e.style;
  return /* @__PURE__ */ u.createElement("div", {
    className: Y("".concat(n, "-content"), o),
    style: i
  }, /* @__PURE__ */ u.createElement("div", {
    className: "".concat(n, "-inner"),
    id: r,
    role: "tooltip",
    style: a
  }, typeof t == "function" ? t() : t));
}
var Tr = {
  shiftX: 64,
  adjustY: 1
}, Ir = {
  adjustX: 1,
  shiftY: !0
}, cn = [0, 0], iS = {
  left: {
    points: ["cr", "cl"],
    overflow: Ir,
    offset: [-4, 0],
    targetOffset: cn
  },
  right: {
    points: ["cl", "cr"],
    overflow: Ir,
    offset: [4, 0],
    targetOffset: cn
  },
  top: {
    points: ["bc", "tc"],
    overflow: Tr,
    offset: [0, -4],
    targetOffset: cn
  },
  bottom: {
    points: ["tc", "bc"],
    overflow: Tr,
    offset: [0, 4],
    targetOffset: cn
  },
  topLeft: {
    points: ["bl", "tl"],
    overflow: Tr,
    offset: [0, -4],
    targetOffset: cn
  },
  leftTop: {
    points: ["tr", "tl"],
    overflow: Ir,
    offset: [-4, 0],
    targetOffset: cn
  },
  topRight: {
    points: ["br", "tr"],
    overflow: Tr,
    offset: [0, -4],
    targetOffset: cn
  },
  rightTop: {
    points: ["tl", "tr"],
    overflow: Ir,
    offset: [4, 0],
    targetOffset: cn
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: Tr,
    offset: [0, 4],
    targetOffset: cn
  },
  rightBottom: {
    points: ["bl", "br"],
    overflow: Ir,
    offset: [4, 0],
    targetOffset: cn
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: Tr,
    offset: [0, 4],
    targetOffset: cn
  },
  leftBottom: {
    points: ["br", "bl"],
    overflow: Ir,
    offset: [-4, 0],
    targetOffset: cn
  }
}, sS = ["overlayClassName", "trigger", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "prefixCls", "children", "onVisibleChange", "afterVisibleChange", "transitionName", "animation", "motion", "placement", "align", "destroyTooltipOnHide", "defaultVisible", "getTooltipContainer", "overlayInnerStyle", "arrowContent", "overlay", "id", "showArrow"], lS = function(t, n) {
  var r = t.overlayClassName, a = t.trigger, o = a === void 0 ? ["hover"] : a, i = t.mouseEnterDelay, s = i === void 0 ? 0 : i, l = t.mouseLeaveDelay, c = l === void 0 ? 0.1 : l, d = t.overlayStyle, f = t.prefixCls, v = f === void 0 ? "rc-tooltip" : f, g = t.children, p = t.onVisibleChange, h = t.afterVisibleChange, m = t.transitionName, S = t.animation, b = t.motion, y = t.placement, w = y === void 0 ? "right" : y, C = t.align, O = C === void 0 ? {} : C, E = t.destroyTooltipOnHide, x = E === void 0 ? !1 : E, R = t.defaultVisible, T = t.getTooltipContainer, M = t.overlayInnerStyle;
  t.arrowContent;
  var j = t.overlay, I = t.id, _ = t.showArrow, k = _ === void 0 ? !0 : _, N = Ze(t, sS), P = Me(null);
  Uo(n, function() {
    return P.current;
  });
  var $ = B({}, N);
  "visible" in t && ($.popupVisible = t.visible);
  var F = function() {
    return /* @__PURE__ */ u.createElement(Tv, {
      key: "content",
      prefixCls: v,
      id: I,
      overlayInnerStyle: M
    }, j);
  };
  return /* @__PURE__ */ u.createElement(Ol, me({
    popupClassName: r,
    prefixCls: v,
    popup: F,
    action: o,
    builtinPlacements: iS,
    popupPlacement: w,
    ref: P,
    popupAlign: O,
    getPopupContainer: T,
    onPopupVisibleChange: p,
    afterPopupVisibleChange: h,
    popupTransitionName: m,
    popupAnimation: S,
    popupMotion: b,
    defaultPopupVisible: R,
    autoDestroy: x,
    mouseLeaveDelay: c,
    popupStyle: d,
    mouseEnterDelay: s,
    arrow: k
  }, $), g);
};
const cS = /* @__PURE__ */ fn(lS);
function uS(e) {
  const {
    sizePopupArrow: t,
    borderRadiusXS: n,
    borderRadiusOuter: r
  } = e, a = t / 2, o = 0, i = a, s = r * 1 / Math.sqrt(2), l = a - r * (1 - 1 / Math.sqrt(2)), c = a - n * (1 / Math.sqrt(2)), d = r * (Math.sqrt(2) - 1) + n * (1 / Math.sqrt(2)), f = 2 * a - c, v = d, g = 2 * a - s, p = l, h = 2 * a - o, m = i, S = a * Math.sqrt(2) + r * (Math.sqrt(2) - 2), b = r * (Math.sqrt(2) - 1), y = `polygon(${b}px 100%, 50% ${b}px, ${2 * a - b}px 100%, ${b}px 100%)`, w = `path('M ${o} ${i} A ${r} ${r} 0 0 0 ${s} ${l} L ${c} ${d} A ${n} ${n} 0 0 1 ${f} ${v} L ${g} ${p} A ${r} ${r} 0 0 0 ${h} ${m} Z')`;
  return {
    arrowShadowWidth: S,
    arrowPath: w,
    arrowPolygon: y
  };
}
const dS = (e, t, n) => {
  const {
    sizePopupArrow: r,
    arrowPolygon: a,
    arrowPath: o,
    arrowShadowWidth: i,
    borderRadiusXS: s,
    calc: l
  } = e;
  return {
    pointerEvents: "none",
    width: r,
    height: r,
    overflow: "hidden",
    "&::before": {
      position: "absolute",
      bottom: 0,
      insetInlineStart: 0,
      width: r,
      height: l(r).div(2).equal(),
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
        value: `0 0 ${ee(s)} 0`
      },
      transform: "translateY(50%) rotate(-135deg)",
      boxShadow: n,
      zIndex: 0,
      background: "transparent"
    }
  };
}, Iv = 8;
function Nv(e) {
  const {
    contentRadius: t,
    limitVerticalRadius: n
  } = e, r = t > 12 ? t + 2 : 12;
  return {
    arrowOffsetHorizontal: r,
    arrowOffsetVertical: n ? Iv : r
  };
}
function fo(e, t) {
  return e ? t : {};
}
function fS(e, t, n) {
  const {
    componentCls: r,
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
    [r]: Object.assign(Object.assign(Object.assign(Object.assign({
      // ============================ Basic ============================
      [`${r}-arrow`]: [Object.assign(Object.assign({
        position: "absolute",
        zIndex: 1,
        display: "block"
      }, dS(e, t, a)), {
        "&:before": {
          background: t
        }
      })]
    }, fo(!!l.top, {
      [[`&-placement-top > ${r}-arrow`, `&-placement-topLeft > ${r}-arrow`, `&-placement-topRight > ${r}-arrow`].join(",")]: {
        bottom: s,
        transform: "translateY(100%) rotate(180deg)"
      },
      [`&-placement-top > ${r}-arrow`]: {
        left: {
          _skip_check_: !0,
          value: "50%"
        },
        transform: "translateX(-50%) translateY(100%) rotate(180deg)"
      },
      [`&-placement-topLeft > ${r}-arrow`]: {
        left: {
          _skip_check_: !0,
          value: i
        }
      },
      [`&-placement-topRight > ${r}-arrow`]: {
        right: {
          _skip_check_: !0,
          value: i
        }
      }
    })), fo(!!l.bottom, {
      [[`&-placement-bottom > ${r}-arrow`, `&-placement-bottomLeft > ${r}-arrow`, `&-placement-bottomRight > ${r}-arrow`].join(",")]: {
        top: s,
        transform: "translateY(-100%)"
      },
      [`&-placement-bottom > ${r}-arrow`]: {
        left: {
          _skip_check_: !0,
          value: "50%"
        },
        transform: "translateX(-50%) translateY(-100%)"
      },
      [`&-placement-bottomLeft > ${r}-arrow`]: {
        left: {
          _skip_check_: !0,
          value: i
        }
      },
      [`&-placement-bottomRight > ${r}-arrow`]: {
        right: {
          _skip_check_: !0,
          value: i
        }
      }
    })), fo(!!l.left, {
      [[`&-placement-left > ${r}-arrow`, `&-placement-leftTop > ${r}-arrow`, `&-placement-leftBottom > ${r}-arrow`].join(",")]: {
        right: {
          _skip_check_: !0,
          value: s
        },
        transform: "translateX(100%) rotate(90deg)"
      },
      [`&-placement-left > ${r}-arrow`]: {
        top: {
          _skip_check_: !0,
          value: "50%"
        },
        transform: "translateY(-50%) translateX(100%) rotate(90deg)"
      },
      [`&-placement-leftTop > ${r}-arrow`]: {
        top: o
      },
      [`&-placement-leftBottom > ${r}-arrow`]: {
        bottom: o
      }
    })), fo(!!l.right, {
      [[`&-placement-right > ${r}-arrow`, `&-placement-rightTop > ${r}-arrow`, `&-placement-rightBottom > ${r}-arrow`].join(",")]: {
        left: {
          _skip_check_: !0,
          value: s
        },
        transform: "translateX(-100%) rotate(-90deg)"
      },
      [`&-placement-right > ${r}-arrow`]: {
        top: {
          _skip_check_: !0,
          value: "50%"
        },
        transform: "translateY(-50%) translateX(-100%) rotate(-90deg)"
      },
      [`&-placement-rightTop > ${r}-arrow`]: {
        top: o
      },
      [`&-placement-rightBottom > ${r}-arrow`]: {
        bottom: o
      }
    }))
  };
}
function vS(e, t, n, r) {
  if (r === !1)
    return {
      adjustX: !1,
      adjustY: !1
    };
  const a = r && typeof r == "object" ? r : {}, o = {};
  switch (e) {
    case "top":
    case "bottom":
      o.shiftX = t.arrowOffsetHorizontal * 2 + n, o.shiftY = !0, o.adjustY = !0;
      break;
    case "left":
    case "right":
      o.shiftY = t.arrowOffsetVertical * 2 + n, o.shiftX = !0, o.adjustX = !0;
      break;
  }
  const i = Object.assign(Object.assign({}, o), a);
  return i.shiftX || (i.adjustX = !0), i.shiftY || (i.adjustY = !0), i;
}
const _u = {
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
}, mS = {
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
}, gS = /* @__PURE__ */ new Set(["topLeft", "topRight", "bottomLeft", "bottomRight", "leftTop", "leftBottom", "rightTop", "rightBottom"]);
function pS(e) {
  const {
    arrowWidth: t,
    autoAdjustOverflow: n,
    arrowPointAtCenter: r,
    offset: a,
    borderRadius: o,
    visibleFirst: i
  } = e, s = t / 2, l = {};
  return Object.keys(_u).forEach((c) => {
    const d = r && mS[c] || _u[c], f = Object.assign(Object.assign({}, d), {
      offset: [0, 0],
      dynamicInset: !0
    });
    switch (l[c] = f, gS.has(c) && (f.autoArrow = !1), c) {
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
    const v = Nv({
      contentRadius: o,
      limitVerticalRadius: !0
    });
    if (r)
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
    f.overflow = vS(c, v, t, n), i && (f.htmlRegion = "visibleFirst");
  }), l;
}
const hS = (e) => {
  const {
    componentCls: t,
    // ant-tooltip
    tooltipMaxWidth: n,
    tooltipColor: r,
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
      [t]: Object.assign(Object.assign(Object.assign(Object.assign({}, sr(e)), {
        position: "absolute",
        zIndex: i,
        display: "block",
        width: "max-content",
        maxWidth: n,
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
          padding: `${ee(e.calc(c).div(2).equal())} ${ee(d)}`,
          color: r,
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
            borderRadius: e.min(o, Iv)
          }
        },
        [`${t}-content`]: {
          position: "relative"
        }
      }), $f(e, (f, v) => {
        let {
          darkColor: g
        } = v;
        return {
          [`&${t}-${f}`]: {
            [`${t}-inner`]: {
              backgroundColor: g
            },
            [`${t}-arrow`]: {
              "--antd-arrow-background-color": g
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
    fS(e, "var(--antd-arrow-background-color)"),
    // Pure Render
    {
      [`${t}-pure`]: {
        position: "relative",
        maxWidth: "none",
        margin: e.sizePopupArrow
      }
    }
  ];
}, bS = (e) => Object.assign(Object.assign({
  zIndexPopup: e.zIndexPopupBase + 70
}, Nv({
  contentRadius: e.borderRadius,
  limitVerticalRadius: !0
})), uS(jt(e, {
  borderRadiusOuter: Math.min(e.borderRadiusOuter, 4)
}))), Mv = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return Rn("Tooltip", (r) => {
    const {
      borderRadius: a,
      colorTextLightSolid: o,
      colorBgSpotlight: i
    } = r, s = jt(r, {
      // default variables
      tooltipMaxWidth: 250,
      tooltipColor: o,
      tooltipBorderRadius: a,
      tooltipBg: i
    });
    return [hS(s), $l(r, "zoom-big-fast")];
  }, bS, {
    resetStyle: !1,
    // Popover use Tooltip as internal component. We do not need to handle this.
    injectStyle: t
  })(e);
}, yS = Lo.map((e) => `${e}-inverse`), CS = ["success", "processing", "error", "default", "warning"];
function Av(e) {
  return (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0) ? [].concat(Pe(yS), Pe(Lo)).includes(e) : Lo.includes(e);
}
function SS(e) {
  return CS.includes(e);
}
function Lv(e, t) {
  const n = Av(t), r = Y({
    [`${e}-${t}`]: t && n
  }), a = {}, o = {};
  return t && !n && (a.background = t, o["--antd-arrow-background-color"] = t), {
    className: r,
    overlayStyle: a,
    arrowStyle: o
  };
}
const wS = (e) => {
  const {
    prefixCls: t,
    className: n,
    placement: r = "top",
    title: a,
    color: o,
    overlayInnerStyle: i
  } = e, {
    getPrefixCls: s
  } = u.useContext(vt), l = s("tooltip", t), [c, d, f] = Mv(l), v = Lv(l, o), g = v.arrowStyle, p = Object.assign(Object.assign({}, i), v.overlayStyle), h = Y(d, f, l, `${l}-pure`, `${l}-placement-${r}`, n, v.className);
  return c(/* @__PURE__ */ u.createElement("div", {
    className: h,
    style: g
  }, /* @__PURE__ */ u.createElement("div", {
    className: `${l}-arrow`
  }), /* @__PURE__ */ u.createElement(Tv, Object.assign({}, e, {
    className: d,
    prefixCls: l,
    overlayInnerStyle: p
  }), a)));
};
var ES = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
    t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
const xS = /* @__PURE__ */ u.forwardRef((e, t) => {
  var n, r;
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
    destroyTooltipOnHide: g,
    arrow: p = !0,
    title: h,
    overlay: m,
    builtinPlacements: S,
    arrowPointAtCenter: b = !1,
    autoAdjustOverflow: y = !0
  } = e, w = !!p, [, C] = Mn(), {
    getPopupContainer: O,
    getPrefixCls: E,
    direction: x
  } = u.useContext(vt), R = zt("Tooltip"), T = u.useRef(null), M = () => {
    var be;
    (be = T.current) === null || be === void 0 || be.forceAlign();
  };
  u.useImperativeHandle(t, () => {
    var be;
    return {
      forceAlign: M,
      forcePopupAlign: () => {
        R.deprecated(!1, "forcePopupAlign", "forceAlign"), M();
      },
      nativeElement: (be = T.current) === null || be === void 0 ? void 0 : be.nativeElement
    };
  }), process.env.NODE_ENV !== "production" && ([["visible", "open"], ["defaultVisible", "defaultOpen"], ["onVisibleChange", "onOpenChange"], ["afterVisibleChange", "afterOpenChange"], ["arrowPointAtCenter", "arrow={{ pointAtCenter: true }}"]].forEach((be) => {
    let [ye, _e] = be;
    R.deprecated(!(ye in e), ye, _e);
  }), process.env.NODE_ENV !== "production" && R(!g || typeof g == "boolean", "usage", "`destroyTooltipOnHide` no need config `keepParent` anymore. Please use `boolean` value directly."), process.env.NODE_ENV !== "production" && R(!p || typeof p == "boolean" || !("arrowPointAtCenter" in p), "deprecated", "`arrowPointAtCenter` in `arrow` is deprecated. Please use `pointAtCenter` instead."));
  const [j, I] = en(!1, {
    value: (n = e.open) !== null && n !== void 0 ? n : e.visible,
    defaultValue: (r = e.defaultOpen) !== null && r !== void 0 ? r : e.defaultVisible
  }), _ = !h && !m && h !== 0, k = (be) => {
    var ye, _e;
    I(_ ? !1 : be), _ || ((ye = e.onOpenChange) === null || ye === void 0 || ye.call(e, be), (_e = e.onVisibleChange) === null || _e === void 0 || _e.call(e, be));
  }, N = u.useMemo(() => {
    var be, ye;
    let _e = b;
    return typeof p == "object" && (_e = (ye = (be = p.pointAtCenter) !== null && be !== void 0 ? be : p.arrowPointAtCenter) !== null && ye !== void 0 ? ye : b), S || pS({
      arrowPointAtCenter: _e,
      autoAdjustOverflow: y,
      arrowWidth: w ? C.sizePopupArrow : 0,
      borderRadius: C.borderRadius,
      offset: C.marginXXS,
      visibleFirst: !0
    });
  }, [b, p, S, C]), P = u.useMemo(() => h === 0 ? h : m || h || "", [m, h]), $ = /* @__PURE__ */ u.createElement(Vs, {
    space: !0
  }, typeof P == "function" ? P() : P), {
    getPopupContainer: F,
    placement: L = "top",
    mouseEnterDelay: V = 0.1,
    mouseLeaveDelay: W = 0.1,
    overlayStyle: U,
    rootClassName: G
  } = e, Q = ES(e, ["getPopupContainer", "placement", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "rootClassName"]), q = E("tooltip", a), Z = E(), re = e["data-popover-inject"];
  let ae = j;
  !("open" in e) && !("visible" in e) && _ && (ae = !1);
  const ue = /* @__PURE__ */ u.isValidElement(d) && !Wf(d) ? d : /* @__PURE__ */ u.createElement("span", null, d), de = ue.props, ce = !de.className || typeof de.className == "string" ? Y(de.className, o || `${q}-open`) : de.className, [ge, H, ne] = Mv(q, !re), ve = Lv(q, l), $e = ve.arrowStyle, pe = Object.assign(Object.assign({}, c), ve.overlayStyle), ie = Y(s, {
    [`${q}-rtl`]: x === "rtl"
  }, ve.className, G, H, ne), [oe, se] = bl("Tooltip", Q.zIndex), we = /* @__PURE__ */ u.createElement(cS, Object.assign({}, Q, {
    zIndex: oe,
    showArrow: w,
    placement: L,
    mouseEnterDelay: V,
    mouseLeaveDelay: W,
    prefixCls: q,
    overlayClassName: ie,
    overlayStyle: Object.assign(Object.assign({}, $e), U),
    getTooltipContainer: F || i || O,
    ref: T,
    builtinPlacements: N,
    overlay: $,
    visible: ae,
    onVisibleChange: k,
    afterVisibleChange: f ?? v,
    overlayInnerStyle: pe,
    arrowContent: /* @__PURE__ */ u.createElement("span", {
      className: `${q}-arrow-content`
    }),
    motion: {
      motionName: Xr(Z, "zoom-big-fast", e.transitionName),
      motionDeadline: 1e3
    },
    destroyTooltipOnHide: !!g
  }), ae ? ri(ue, {
    className: ce
  }) : ue);
  return ge(/* @__PURE__ */ u.createElement(hl.Provider, {
    value: se
  }, we));
}), Ka = xS;
process.env.NODE_ENV !== "production" && (Ka.displayName = "Tooltip");
Ka._InternalPanelDoNotUseOrYouWillBeFired = wS;
var $S = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z" } }] }, name: "right", theme: "outlined" }, OS = function(t, n) {
  return /* @__PURE__ */ u.createElement(Tt, me({}, t, {
    ref: n,
    icon: $S
  }));
}, jv = /* @__PURE__ */ u.forwardRef(OS);
process.env.NODE_ENV !== "production" && (jv.displayName = "RightOutlined");
var RS = Se.ESC, PS = Se.TAB;
function _S(e) {
  var t = e.visible, n = e.triggerRef, r = e.onVisibleChange, a = e.autoFocus, o = e.overlayRef, i = u.useRef(!1), s = function() {
    if (t) {
      var f, v;
      (f = n.current) === null || f === void 0 || (v = f.focus) === null || v === void 0 || v.call(f), r == null || r(!1);
    }
  }, l = function() {
    var f;
    return (f = o.current) !== null && f !== void 0 && f.focus ? (o.current.focus(), i.current = !0, !0) : !1;
  }, c = function(f) {
    switch (f.keyCode) {
      case RS:
        s();
        break;
      case PS: {
        var v = !1;
        i.current || (v = l()), v ? f.preventDefault() : s();
        break;
      }
    }
  };
  u.useEffect(function() {
    return t ? (window.addEventListener("keydown", c), a && Mt(l, 3), function() {
      window.removeEventListener("keydown", c), i.current = !1;
    }) : function() {
      i.current = !1;
    };
  }, [t]);
}
var TS = /* @__PURE__ */ fn(function(e, t) {
  var n = e.overlay, r = e.arrow, a = e.prefixCls, o = $n(function() {
    var s;
    return typeof n == "function" ? s = n() : s = n, s;
  }, [n]), i = An(t, o == null ? void 0 : o.ref);
  return /* @__PURE__ */ D.createElement(D.Fragment, null, r && /* @__PURE__ */ D.createElement("div", {
    className: "".concat(a, "-arrow")
  }), /* @__PURE__ */ D.cloneElement(o, {
    ref: yr(o) ? i : void 0
  }));
}), Nr = {
  adjustX: 1,
  adjustY: 1
}, Mr = [0, 0], IS = {
  topLeft: {
    points: ["bl", "tl"],
    overflow: Nr,
    offset: [0, -4],
    targetOffset: Mr
  },
  top: {
    points: ["bc", "tc"],
    overflow: Nr,
    offset: [0, -4],
    targetOffset: Mr
  },
  topRight: {
    points: ["br", "tr"],
    overflow: Nr,
    offset: [0, -4],
    targetOffset: Mr
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: Nr,
    offset: [0, 4],
    targetOffset: Mr
  },
  bottom: {
    points: ["tc", "bc"],
    overflow: Nr,
    offset: [0, 4],
    targetOffset: Mr
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: Nr,
    offset: [0, 4],
    targetOffset: Mr
  }
}, NS = ["arrow", "prefixCls", "transitionName", "animation", "align", "placement", "placements", "getPopupContainer", "showAction", "hideAction", "overlayClassName", "overlayStyle", "visible", "trigger", "autoFocus", "overlay", "children", "onVisibleChange"];
function MS(e, t) {
  var n, r = e.arrow, a = r === void 0 ? !1 : r, o = e.prefixCls, i = o === void 0 ? "rc-dropdown" : o, s = e.transitionName, l = e.animation, c = e.align, d = e.placement, f = d === void 0 ? "bottomLeft" : d, v = e.placements, g = v === void 0 ? IS : v, p = e.getPopupContainer, h = e.showAction, m = e.hideAction, S = e.overlayClassName, b = e.overlayStyle, y = e.visible, w = e.trigger, C = w === void 0 ? ["hover"] : w, O = e.autoFocus, E = e.overlay, x = e.children, R = e.onVisibleChange, T = Ze(e, NS), M = D.useState(), j = K(M, 2), I = j[0], _ = j[1], k = "visible" in e ? y : I, N = D.useRef(null), P = D.useRef(null), $ = D.useRef(null);
  D.useImperativeHandle(t, function() {
    return N.current;
  });
  var F = function(re) {
    _(re), R == null || R(re);
  };
  _S({
    visible: k,
    triggerRef: $,
    onVisibleChange: F,
    autoFocus: O,
    overlayRef: P
  });
  var L = function(re) {
    var ae = e.onOverlayClick;
    _(!1), ae && ae(re);
  }, V = function() {
    return /* @__PURE__ */ D.createElement(TS, {
      ref: P,
      overlay: E,
      prefixCls: i,
      arrow: a
    });
  }, W = function() {
    return typeof E == "function" ? V : V();
  }, U = function() {
    var re = e.minOverlayWidthMatchTrigger, ae = e.alignPoint;
    return "minOverlayWidthMatchTrigger" in e ? re : !ae;
  }, G = function() {
    var re = e.openClassName;
    return re !== void 0 ? re : "".concat(i, "-open");
  }, Q = /* @__PURE__ */ D.cloneElement(x, {
    className: Y((n = x.props) === null || n === void 0 ? void 0 : n.className, k && G()),
    ref: yr(x) ? An($, x.ref) : void 0
  }), q = m;
  return !q && C.indexOf("contextMenu") !== -1 && (q = ["click"]), /* @__PURE__ */ D.createElement(Ol, me({
    builtinPlacements: g
  }, T, {
    prefixCls: i,
    ref: N,
    popupClassName: Y(S, z({}, "".concat(i, "-show-arrow"), a)),
    popupStyle: b,
    action: C,
    showAction: h,
    hideAction: q,
    popupPlacement: f,
    popupAlign: c,
    popupTransitionName: s,
    popupAnimation: l,
    popupVisible: k,
    stretch: U() ? "minWidth" : "",
    popup: W(),
    onPopupVisibleChange: F,
    onPopupClick: L,
    getPopupContainer: p
  }), Q);
}
const AS = /* @__PURE__ */ D.forwardRef(MS);
var Fv = /* @__PURE__ */ u.createContext(null);
function Dv(e, t) {
  return e === void 0 ? null : "".concat(e, "-").concat(t);
}
function zv(e) {
  var t = u.useContext(Fv);
  return Dv(t, e);
}
var LS = ["children", "locked"], On = /* @__PURE__ */ u.createContext(null);
function jS(e, t) {
  var n = B({}, e);
  return Object.keys(t).forEach(function(r) {
    var a = t[r];
    a !== void 0 && (n[r] = a);
  }), n;
}
function Fa(e) {
  var t = e.children, n = e.locked, r = Ze(e, LS), a = u.useContext(On), o = Go(function() {
    return jS(a, r);
  }, [a, r], function(i, s) {
    return !n && (i[0] !== s[0] || !Wr(i[1], s[1], !0));
  });
  return /* @__PURE__ */ u.createElement(On.Provider, {
    value: o
  }, t);
}
var FS = [], Vv = /* @__PURE__ */ u.createContext(null);
function si() {
  return u.useContext(Vv);
}
var Bv = /* @__PURE__ */ u.createContext(FS);
function Ga(e) {
  var t = u.useContext(Bv);
  return u.useMemo(function() {
    return e !== void 0 ? [].concat(Pe(t), [e]) : t;
  }, [t, e]);
}
var kv = /* @__PURE__ */ u.createContext(null), Rl = /* @__PURE__ */ u.createContext({});
function Tu(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  if (yl(e)) {
    var n = e.nodeName.toLowerCase(), r = (
      // Focusable element
      ["input", "select", "textarea", "button"].includes(n) || // Editable element
      e.isContentEditable || // Anchor with href element
      n === "a" && !!e.getAttribute("href")
    ), a = e.getAttribute("tabindex"), o = Number(a), i = null;
    return a && !Number.isNaN(o) ? i = o : r && i === null && (i = 0), r && e.disabled && (i = null), i !== null && (i >= 0 || t && i < 0);
  }
  return !1;
}
function DS(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = Pe(e.querySelectorAll("*")).filter(function(r) {
    return Tu(r, t);
  });
  return Tu(e, t) && n.unshift(e), n;
}
var Hs = Se.LEFT, Ws = Se.RIGHT, Us = Se.UP, Ro = Se.DOWN, Po = Se.ENTER, Hv = Se.ESC, ga = Se.HOME, pa = Se.END, Iu = [Us, Ro, Hs, Ws];
function zS(e, t, n, r) {
  var a, o, i, s, l = "prev", c = "next", d = "children", f = "parent";
  if (e === "inline" && r === Po)
    return {
      inlineTrigger: !0
    };
  var v = (a = {}, z(a, Us, l), z(a, Ro, c), a), g = (o = {}, z(o, Hs, n ? c : l), z(o, Ws, n ? l : c), z(o, Ro, d), z(o, Po, d), o), p = (i = {}, z(i, Us, l), z(i, Ro, c), z(i, Po, d), z(i, Hv, f), z(i, Hs, n ? d : f), z(i, Ws, n ? f : d), i), h = {
    inline: v,
    horizontal: g,
    vertical: p,
    inlineSub: v,
    horizontalSub: p,
    verticalSub: p
  }, m = (s = h["".concat(e).concat(t ? "" : "Sub")]) === null || s === void 0 ? void 0 : s[r];
  switch (m) {
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
function VS(e) {
  for (var t = e; t; ) {
    if (t.getAttribute("data-menu-list"))
      return t;
    t = t.parentElement;
  }
  return null;
}
function BS(e, t) {
  for (var n = e || document.activeElement; n; ) {
    if (t.has(n))
      return n;
    n = n.parentElement;
  }
  return null;
}
function Pl(e, t) {
  var n = DS(e, !0);
  return n.filter(function(r) {
    return t.has(r);
  });
}
function Nu(e, t, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 1;
  if (!e)
    return null;
  var a = Pl(e, t), o = a.length, i = a.findIndex(function(s) {
    return n === s;
  });
  return r < 0 ? i === -1 ? i = o - 1 : i -= 1 : r > 0 && (i += 1), i = (i + o) % o, a[i];
}
var Ks = function(t, n) {
  var r = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
  return t.forEach(function(i) {
    var s = document.querySelector("[data-menu-id='".concat(Dv(n, i), "']"));
    s && (r.add(s), o.set(s, i), a.set(i, s));
  }), {
    elements: r,
    key2element: a,
    element2key: o
  };
};
function kS(e, t, n, r, a, o, i, s, l, c) {
  var d = u.useRef(), f = u.useRef();
  f.current = t;
  var v = function() {
    Mt.cancel(d.current);
  };
  return u.useEffect(function() {
    return function() {
      v();
    };
  }, []), function(g) {
    var p = g.which;
    if ([].concat(Iu, [Po, Hv, ga, pa]).includes(p)) {
      var h = o(), m = Ks(h, r), S = m, b = S.elements, y = S.key2element, w = S.element2key, C = y.get(t), O = BS(C, b), E = w.get(O), x = zS(e, i(E, !0).length === 1, n, p);
      if (!x && p !== ga && p !== pa)
        return;
      (Iu.includes(p) || [ga, pa].includes(p)) && g.preventDefault();
      var R = function(P) {
        if (P) {
          var $ = P, F = P.querySelector("a");
          F != null && F.getAttribute("href") && ($ = F);
          var L = w.get(P);
          s(L), v(), d.current = Mt(function() {
            f.current === L && $.focus();
          });
        }
      };
      if ([ga, pa].includes(p) || x.sibling || !O) {
        var T;
        !O || e === "inline" ? T = a.current : T = VS(O);
        var M, j = Pl(T, b);
        p === ga ? M = j[0] : p === pa ? M = j[j.length - 1] : M = Nu(T, b, O, x.offset), R(M);
      } else if (x.inlineTrigger)
        l(E);
      else if (x.offset > 0)
        l(E, !0), v(), d.current = Mt(function() {
          m = Ks(h, r);
          var N = O.getAttribute("aria-controls"), P = document.getElementById(N), $ = Nu(P, m.elements);
          R($);
        }, 5);
      else if (x.offset < 0) {
        var I = i(E, !0), _ = I[I.length - 2], k = y.get(_);
        l(_, !1), R(k);
      }
    }
    c == null || c(g);
  };
}
function HS(e) {
  Promise.resolve().then(e);
}
var _l = "__RC_UTIL_PATH_SPLIT__", Mu = function(t) {
  return t.join(_l);
}, WS = function(t) {
  return t.split(_l);
}, Gs = "rc-menu-more";
function US() {
  var e = u.useState({}), t = K(e, 2), n = t[1], r = Me(/* @__PURE__ */ new Map()), a = Me(/* @__PURE__ */ new Map()), o = u.useState([]), i = K(o, 2), s = i[0], l = i[1], c = Me(0), d = Me(!1), f = function() {
    d.current || n({});
  }, v = er(function(y, w) {
    process.env.NODE_ENV !== "production" && ct(!r.current.has(y), "Duplicated key '".concat(y, "' used in Menu by path [").concat(w.join(" > "), "]"));
    var C = Mu(w);
    a.current.set(C, y), r.current.set(y, C), c.current += 1;
    var O = c.current;
    HS(function() {
      O === c.current && f();
    });
  }, []), g = er(function(y, w) {
    var C = Mu(w);
    a.current.delete(C), r.current.delete(y);
  }, []), p = er(function(y) {
    l(y);
  }, []), h = er(function(y, w) {
    var C = r.current.get(y) || "", O = WS(C);
    return w && s.includes(O[0]) && O.unshift(Gs), O;
  }, [s]), m = er(function(y, w) {
    return y.filter(function(C) {
      return C !== void 0;
    }).some(function(C) {
      var O = h(C, !0);
      return O.includes(w);
    });
  }, [h]), S = function() {
    var w = Pe(r.current.keys());
    return s.length && w.push(Gs), w;
  }, b = er(function(y) {
    var w = "".concat(r.current.get(y)).concat(_l), C = /* @__PURE__ */ new Set();
    return Pe(a.current.keys()).forEach(function(O) {
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
    unregisterPath: g,
    refreshOverflowKeys: p,
    // Util
    isSubPathKey: m,
    getKeyPath: h,
    getKeys: S,
    getSubPathKeys: b
  };
}
function ba(e) {
  var t = u.useRef(e);
  t.current = e;
  var n = u.useCallback(function() {
    for (var r, a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return (r = t.current) === null || r === void 0 ? void 0 : r.call.apply(r, [t].concat(o));
  }, []);
  return e ? n : void 0;
}
var KS = Math.random().toFixed(5).toString().slice(2), Au = 0;
function GS(e) {
  var t = en(e, {
    value: e
  }), n = K(t, 2), r = n[0], a = n[1];
  return u.useEffect(function() {
    Au += 1;
    var o = process.env.NODE_ENV === "test" ? "test" : "".concat(KS, "-").concat(Au);
    a("rc-menu-uuid-".concat(o));
  }, []), r;
}
function Wv(e, t, n, r) {
  var a = u.useContext(On), o = a.activeKey, i = a.onActive, s = a.onInactive, l = {
    active: o === e
  };
  return t || (l.onMouseEnter = function(c) {
    n == null || n({
      key: e,
      domEvent: c
    }), i(e);
  }, l.onMouseLeave = function(c) {
    r == null || r({
      key: e,
      domEvent: c
    }), s(e);
  }), l;
}
function Uv(e) {
  var t = u.useContext(On), n = t.mode, r = t.rtl, a = t.inlineIndent;
  if (n !== "inline")
    return null;
  var o = e;
  return r ? {
    paddingRight: o * a
  } : {
    paddingLeft: o * a
  };
}
function Kv(e) {
  var t = e.icon, n = e.props, r = e.children, a;
  return t === null || t === !1 ? null : (typeof t == "function" ? a = /* @__PURE__ */ u.createElement(t, B({}, n)) : typeof t != "boolean" && (a = t), a || r || null);
}
var qS = ["item"];
function Bo(e) {
  var t = e.item, n = Ze(e, qS);
  return Object.defineProperty(n, "item", {
    get: function() {
      return ct(!1, "`info.item` is deprecated since we will move to function component that not provides React Node instance in future."), t;
    }
  }), n;
}
var XS = ["title", "attribute", "elementRef"], ZS = ["style", "className", "eventKey", "warnKey", "disabled", "itemIcon", "children", "role", "onMouseEnter", "onMouseLeave", "onClick", "onKeyDown", "onFocus"], YS = ["active"], QS = /* @__PURE__ */ function(e) {
  or(n, e);
  var t = ir(n);
  function n() {
    return kt(this, n), t.apply(this, arguments);
  }
  return Ht(n, [{
    key: "render",
    value: function() {
      var a = this.props, o = a.title, i = a.attribute, s = a.elementRef, l = Ze(a, XS), c = vn(l, ["eventKey", "popupClassName", "popupOffset", "onTitleClick"]);
      return ct(!i, "`attribute` of Menu.Item is deprecated. Please pass attribute directly."), /* @__PURE__ */ u.createElement(Un.Item, me({}, i, {
        title: typeof o == "string" ? o : void 0
      }, c, {
        ref: s
      }));
    }
  }]), n;
}(u.Component), JS = /* @__PURE__ */ u.forwardRef(function(e, t) {
  var n, r = e.style, a = e.className, o = e.eventKey, i = e.warnKey, s = e.disabled, l = e.itemIcon, c = e.children, d = e.role, f = e.onMouseEnter, v = e.onMouseLeave, g = e.onClick, p = e.onKeyDown, h = e.onFocus, m = Ze(e, ZS), S = zv(o), b = u.useContext(On), y = b.prefixCls, w = b.onItemClick, C = b.disabled, O = b.overflowDisabled, E = b.itemIcon, x = b.selectedKeys, R = b.onActive, T = u.useContext(Rl), M = T._internalRenderMenuItem, j = "".concat(y, "-item"), I = u.useRef(), _ = u.useRef(), k = C || s, N = Qr(t, _), P = Ga(o);
  process.env.NODE_ENV !== "production" && i && ct(!1, "MenuItem should not leave undefined `key`.");
  var $ = function(de) {
    return {
      key: o,
      // Note: For legacy code is reversed which not like other antd component
      keyPath: Pe(P).reverse(),
      item: I.current,
      domEvent: de
    };
  }, F = l || E, L = Wv(o, k, f, v), V = L.active, W = Ze(L, YS), U = x.includes(o), G = Uv(P.length), Q = function(de) {
    if (!k) {
      var ce = $(de);
      g == null || g(Bo(ce)), w(ce);
    }
  }, q = function(de) {
    if (p == null || p(de), de.which === Se.ENTER) {
      var ce = $(de);
      g == null || g(Bo(ce)), w(ce);
    }
  }, Z = function(de) {
    R(o), h == null || h(de);
  }, re = {};
  e.role === "option" && (re["aria-selected"] = U);
  var ae = /* @__PURE__ */ u.createElement(QS, me({
    ref: I,
    elementRef: N,
    role: d === null ? "none" : d || "menuitem",
    tabIndex: s ? null : -1,
    "data-menu-id": O && S ? null : S
  }, m, W, re, {
    component: "li",
    "aria-disabled": s,
    style: B(B({}, G), r),
    className: Y(j, (n = {}, z(n, "".concat(j, "-active"), V), z(n, "".concat(j, "-selected"), U), z(n, "".concat(j, "-disabled"), k), n), a),
    onClick: Q,
    onKeyDown: q,
    onFocus: Z
  }), c, /* @__PURE__ */ u.createElement(Kv, {
    props: B(B({}, e), {}, {
      isSelected: U
    }),
    icon: F
  }));
  return M && (ae = M(ae, e, {
    selected: U
  })), ae;
});
function e2(e, t) {
  var n = e.eventKey, r = si(), a = Ga(n);
  return u.useEffect(function() {
    if (r)
      return r.registerPath(n, a), function() {
        r.unregisterPath(n, a);
      };
  }, [a]), r ? null : /* @__PURE__ */ u.createElement(JS, me({}, e, {
    ref: t
  }));
}
const li = /* @__PURE__ */ u.forwardRef(e2);
var t2 = ["className", "children"], n2 = function(t, n) {
  var r = t.className, a = t.children, o = Ze(t, t2), i = u.useContext(On), s = i.prefixCls, l = i.mode, c = i.rtl;
  return /* @__PURE__ */ u.createElement("ul", me({
    className: Y(s, c && "".concat(s, "-rtl"), "".concat(s, "-sub"), "".concat(s, "-").concat(l === "inline" ? "inline" : "vertical"), r),
    role: "menu"
  }, o, {
    "data-menu-list": !0,
    ref: n
  }), a);
}, Tl = /* @__PURE__ */ u.forwardRef(n2);
Tl.displayName = "SubMenuList";
function Il(e, t) {
  return rr(e).map(function(n, r) {
    if (/* @__PURE__ */ u.isValidElement(n)) {
      var a, o, i = n.key, s = (a = (o = n.props) === null || o === void 0 ? void 0 : o.eventKey) !== null && a !== void 0 ? a : i, l = s == null;
      l && (s = "tmp_key-".concat([].concat(Pe(t), [r]).join("-")));
      var c = {
        key: s,
        eventKey: s
      };
      return process.env.NODE_ENV !== "production" && l && (c.warnKey = !0), /* @__PURE__ */ u.cloneElement(n, c);
    }
    return n;
  });
}
var Kt = {
  adjustX: 1,
  adjustY: 1
}, r2 = {
  topLeft: {
    points: ["bl", "tl"],
    overflow: Kt
  },
  topRight: {
    points: ["br", "tr"],
    overflow: Kt
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: Kt
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: Kt
  },
  leftTop: {
    points: ["tr", "tl"],
    overflow: Kt
  },
  leftBottom: {
    points: ["br", "bl"],
    overflow: Kt
  },
  rightTop: {
    points: ["tl", "tr"],
    overflow: Kt
  },
  rightBottom: {
    points: ["bl", "br"],
    overflow: Kt
  }
}, a2 = {
  topLeft: {
    points: ["bl", "tl"],
    overflow: Kt
  },
  topRight: {
    points: ["br", "tr"],
    overflow: Kt
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: Kt
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: Kt
  },
  rightTop: {
    points: ["tr", "tl"],
    overflow: Kt
  },
  rightBottom: {
    points: ["br", "bl"],
    overflow: Kt
  },
  leftTop: {
    points: ["tl", "tr"],
    overflow: Kt
  },
  leftBottom: {
    points: ["bl", "br"],
    overflow: Kt
  }
};
function Gv(e, t, n) {
  if (t)
    return t;
  if (n)
    return n[e] || n.other;
}
var o2 = {
  horizontal: "bottomLeft",
  vertical: "rightTop",
  "vertical-left": "rightTop",
  "vertical-right": "leftTop"
};
function i2(e) {
  var t = e.prefixCls, n = e.visible, r = e.children, a = e.popup, o = e.popupStyle, i = e.popupClassName, s = e.popupOffset, l = e.disabled, c = e.mode, d = e.onVisibleChange, f = u.useContext(On), v = f.getPopupContainer, g = f.rtl, p = f.subMenuOpenDelay, h = f.subMenuCloseDelay, m = f.builtinPlacements, S = f.triggerSubMenuAction, b = f.forceSubMenuRender, y = f.rootClassName, w = f.motion, C = f.defaultMotions, O = u.useState(!1), E = K(O, 2), x = E[0], R = E[1], T = B(g ? B({}, a2) : B({}, r2), m), M = o2[c], j = Gv(c, w, C), I = u.useRef(j);
  c !== "inline" && (I.current = j);
  var _ = B(B({}, I.current), {}, {
    leavedClassName: "".concat(t, "-hidden"),
    removeOnLeave: !1,
    motionAppear: !0
  }), k = u.useRef();
  return u.useEffect(function() {
    return k.current = Mt(function() {
      R(n);
    }), function() {
      Mt.cancel(k.current);
    };
  }, [n]), /* @__PURE__ */ u.createElement(Ol, {
    prefixCls: t,
    popupClassName: Y("".concat(t, "-popup"), z({}, "".concat(t, "-rtl"), g), i, y),
    stretch: c === "horizontal" ? "minWidth" : null,
    getPopupContainer: v,
    builtinPlacements: T,
    popupPlacement: M,
    popupVisible: x,
    popup: a,
    popupStyle: o,
    popupAlign: s && {
      offset: s
    },
    action: l ? [] : [S],
    mouseEnterDelay: p,
    mouseLeaveDelay: h,
    onPopupVisibleChange: d,
    forceRender: b,
    popupMotion: _,
    fresh: !0
  }, r);
}
function s2(e) {
  var t = e.id, n = e.open, r = e.keyPath, a = e.children, o = "inline", i = u.useContext(On), s = i.prefixCls, l = i.forceSubMenuRender, c = i.motion, d = i.defaultMotions, f = i.mode, v = u.useRef(!1);
  v.current = f === o;
  var g = u.useState(!v.current), p = K(g, 2), h = p[0], m = p[1], S = v.current ? n : !1;
  u.useEffect(function() {
    v.current && m(!1);
  }, [f]);
  var b = B({}, Gv(o, c, d));
  r.length > 1 && (b.motionAppear = !1);
  var y = b.onVisibleChanged;
  return b.onVisibleChanged = function(w) {
    return !v.current && !w && m(!0), y == null ? void 0 : y(w);
  }, h ? null : /* @__PURE__ */ u.createElement(Fa, {
    mode: o,
    locked: !v.current
  }, /* @__PURE__ */ u.createElement(Ln, me({
    visible: S
  }, b, {
    forceRender: l,
    removeOnLeave: !1,
    leavedClassName: "".concat(s, "-hidden")
  }), function(w) {
    var C = w.className, O = w.style;
    return /* @__PURE__ */ u.createElement(Tl, {
      id: t,
      className: C,
      style: O
    }, a);
  }));
}
var l2 = ["style", "className", "title", "eventKey", "warnKey", "disabled", "internalPopupClose", "children", "itemIcon", "expandIcon", "popupClassName", "popupOffset", "popupStyle", "onClick", "onMouseEnter", "onMouseLeave", "onTitleClick", "onTitleMouseEnter", "onTitleMouseLeave"], c2 = ["active"], u2 = /* @__PURE__ */ u.forwardRef(function(e, t) {
  var n, r = e.style, a = e.className, o = e.title, i = e.eventKey, s = e.warnKey, l = e.disabled, c = e.internalPopupClose, d = e.children, f = e.itemIcon, v = e.expandIcon, g = e.popupClassName, p = e.popupOffset, h = e.popupStyle, m = e.onClick, S = e.onMouseEnter, b = e.onMouseLeave, y = e.onTitleClick, w = e.onTitleMouseEnter, C = e.onTitleMouseLeave, O = Ze(e, l2), E = zv(i), x = u.useContext(On), R = x.prefixCls, T = x.mode, M = x.openKeys, j = x.disabled, I = x.overflowDisabled, _ = x.activeKey, k = x.selectedKeys, N = x.itemIcon, P = x.expandIcon, $ = x.onItemClick, F = x.onOpenChange, L = x.onActive, V = u.useContext(Rl), W = V._internalRenderSubMenuItem, U = u.useContext(kv), G = U.isSubPathKey, Q = Ga(), q = "".concat(R, "-submenu"), Z = j || l, re = u.useRef(), ae = u.useRef();
  process.env.NODE_ENV !== "production" && s && ct(!1, "SubMenu should not leave undefined `key`.");
  var ue = f ?? N, de = v ?? P, ce = M.includes(i), ge = !I && ce, H = G(k, i), ne = Wv(i, Z, w, C), ve = ne.active, $e = Ze(ne, c2), pe = u.useState(!1), ie = K(pe, 2), oe = ie[0], se = ie[1], we = function(Ae) {
    Z || se(Ae);
  }, be = function(Ae) {
    we(!0), S == null || S({
      key: i,
      domEvent: Ae
    });
  }, ye = function(Ae) {
    we(!1), b == null || b({
      key: i,
      domEvent: Ae
    });
  }, _e = u.useMemo(function() {
    return ve || (T !== "inline" ? oe || G([_], i) : !1);
  }, [T, ve, _, oe, i, G]), Ee = Uv(Q.length), st = function(Ae) {
    Z || (y == null || y({
      key: i,
      domEvent: Ae
    }), T === "inline" && F(i, !ce));
  }, Ye = ba(function(Ue) {
    m == null || m(Bo(Ue)), $(Ue);
  }), xe = function(Ae) {
    T !== "inline" && F(i, Ae);
  }, Oe = function() {
    L(i);
  }, te = E && "".concat(E, "-popup"), le = /* @__PURE__ */ u.createElement("div", me({
    role: "menuitem",
    style: Ee,
    className: "".concat(q, "-title"),
    tabIndex: Z ? null : -1,
    ref: re,
    title: typeof o == "string" ? o : null,
    "data-menu-id": I && E ? null : E,
    "aria-expanded": ge,
    "aria-haspopup": !0,
    "aria-controls": te,
    "aria-disabled": Z,
    onClick: st,
    onFocus: Oe
  }, $e), o, /* @__PURE__ */ u.createElement(Kv, {
    icon: T !== "horizontal" ? de : void 0,
    props: B(B({}, e), {}, {
      isOpen: ge,
      // [Legacy] Not sure why need this mark
      isSubMenu: !0
    })
  }, /* @__PURE__ */ u.createElement("i", {
    className: "".concat(q, "-arrow")
  }))), Ie = u.useRef(T);
  if (T !== "inline" && Q.length > 1 ? Ie.current = "vertical" : Ie.current = T, !I) {
    var Ve = Ie.current;
    le = /* @__PURE__ */ u.createElement(i2, {
      mode: Ve,
      prefixCls: q,
      visible: !c && ge && T !== "inline",
      popupClassName: g,
      popupOffset: p,
      popupStyle: h,
      popup: /* @__PURE__ */ u.createElement(
        Fa,
        {
          mode: Ve === "horizontal" ? "vertical" : Ve
        },
        /* @__PURE__ */ u.createElement(Tl, {
          id: te,
          ref: ae
        }, d)
      ),
      disabled: Z,
      onVisibleChange: xe
    }, le);
  }
  var Ke = /* @__PURE__ */ u.createElement(Un.Item, me({
    ref: t,
    role: "none"
  }, O, {
    component: "li",
    style: r,
    className: Y(q, "".concat(q, "-").concat(T), a, (n = {}, z(n, "".concat(q, "-open"), ge), z(n, "".concat(q, "-active"), _e), z(n, "".concat(q, "-selected"), H), z(n, "".concat(q, "-disabled"), Z), n)),
    onMouseEnter: be,
    onMouseLeave: ye
  }), le, !I && /* @__PURE__ */ u.createElement(s2, {
    id: te,
    open: ge,
    keyPath: Q
  }, d));
  return W && (Ke = W(Ke, e, {
    selected: H,
    active: _e,
    open: ge,
    disabled: Z
  })), /* @__PURE__ */ u.createElement(Fa, {
    onItemClick: Ye,
    mode: T === "horizontal" ? "vertical" : T,
    itemIcon: ue,
    expandIcon: de
  }, Ke);
}), ci = /* @__PURE__ */ u.forwardRef(function(e, t) {
  var n = e.eventKey, r = e.children, a = Ga(n), o = Il(r, a), i = si();
  u.useEffect(function() {
    if (i)
      return i.registerPath(n, a), function() {
        i.unregisterPath(n, a);
      };
  }, [a]);
  var s;
  return i ? s = o : s = /* @__PURE__ */ u.createElement(u2, me({
    ref: t
  }, e), o), /* @__PURE__ */ u.createElement(Bv.Provider, {
    value: a
  }, s);
});
process.env.NODE_ENV !== "production" && (ci.displayName = "SubMenu");
function qv(e) {
  var t = e.className, n = e.style, r = u.useContext(On), a = r.prefixCls, o = si();
  return o ? null : /* @__PURE__ */ u.createElement("li", {
    role: "separator",
    className: Y("".concat(a, "-item-divider"), t),
    style: n
  });
}
var d2 = ["className", "title", "eventKey", "children"], f2 = /* @__PURE__ */ u.forwardRef(function(e, t) {
  var n = e.className, r = e.title;
  e.eventKey;
  var a = e.children, o = Ze(e, d2), i = u.useContext(On), s = i.prefixCls, l = "".concat(s, "-item-group");
  return /* @__PURE__ */ u.createElement("li", me({
    ref: t,
    role: "presentation"
  }, o, {
    onClick: function(d) {
      return d.stopPropagation();
    },
    className: Y(l, n)
  }), /* @__PURE__ */ u.createElement("div", {
    role: "presentation",
    className: "".concat(l, "-title"),
    title: typeof r == "string" ? r : void 0
  }, r), /* @__PURE__ */ u.createElement("ul", {
    role: "group",
    className: "".concat(l, "-list")
  }, a));
}), Nl = /* @__PURE__ */ u.forwardRef(function(e, t) {
  var n = e.eventKey, r = e.children, a = Ga(n), o = Il(r, a), i = si();
  return i ? o : /* @__PURE__ */ u.createElement(f2, me({
    ref: t
  }, vn(e, ["warnKey"])), o);
});
process.env.NODE_ENV !== "production" && (Nl.displayName = "MenuItemGroup");
var v2 = ["label", "children", "key", "type"];
function qs(e, t) {
  var n = t.item, r = t.group, a = t.submenu, o = t.divider;
  return (e || []).map(function(i, s) {
    if (i && ke(i) === "object") {
      var l = i, c = l.label, d = l.children, f = l.key, v = l.type, g = Ze(l, v2), p = f ?? "tmp-".concat(s);
      return d || v === "group" ? v === "group" ? /* @__PURE__ */ u.createElement(r, me({
        key: p
      }, g, {
        title: c
      }), qs(d, t)) : /* @__PURE__ */ u.createElement(a, me({
        key: p
      }, g, {
        title: c
      }), qs(d, t)) : v === "divider" ? /* @__PURE__ */ u.createElement(o, me({
        key: p
      }, g)) : /* @__PURE__ */ u.createElement(n, me({
        key: p
      }, g), c);
    }
    return null;
  }).filter(function(i) {
    return i;
  });
}
function Lu(e, t, n, r) {
  var a = e, o = B({
    divider: qv,
    item: li,
    group: Nl,
    submenu: ci
  }, r);
  return t && (a = qs(t, o)), Il(a, n);
}
var m2 = ["prefixCls", "rootClassName", "style", "className", "tabIndex", "items", "children", "direction", "id", "mode", "inlineCollapsed", "disabled", "disabledOverflow", "subMenuOpenDelay", "subMenuCloseDelay", "forceSubMenuRender", "defaultOpenKeys", "openKeys", "activeKey", "defaultActiveFirst", "selectable", "multiple", "defaultSelectedKeys", "selectedKeys", "onSelect", "onDeselect", "inlineIndent", "motion", "defaultMotions", "triggerSubMenuAction", "builtinPlacements", "itemIcon", "expandIcon", "overflowedIndicator", "overflowedIndicatorPopupClassName", "getPopupContainer", "onClick", "onOpenChange", "onKeyDown", "openAnimation", "openTransitionName", "_internalRenderMenuItem", "_internalRenderSubMenuItem", "_internalComponents"], ur = [], g2 = /* @__PURE__ */ u.forwardRef(function(e, t) {
  var n, r, a = e, o = a.prefixCls, i = o === void 0 ? "rc-menu" : o, s = a.rootClassName, l = a.style, c = a.className, d = a.tabIndex, f = d === void 0 ? 0 : d, v = a.items, g = a.children, p = a.direction, h = a.id, m = a.mode, S = m === void 0 ? "vertical" : m, b = a.inlineCollapsed, y = a.disabled, w = a.disabledOverflow, C = a.subMenuOpenDelay, O = C === void 0 ? 0.1 : C, E = a.subMenuCloseDelay, x = E === void 0 ? 0.1 : E, R = a.forceSubMenuRender, T = a.defaultOpenKeys, M = a.openKeys, j = a.activeKey, I = a.defaultActiveFirst, _ = a.selectable, k = _ === void 0 ? !0 : _, N = a.multiple, P = N === void 0 ? !1 : N, $ = a.defaultSelectedKeys, F = a.selectedKeys, L = a.onSelect, V = a.onDeselect, W = a.inlineIndent, U = W === void 0 ? 24 : W, G = a.motion, Q = a.defaultMotions, q = a.triggerSubMenuAction, Z = q === void 0 ? "hover" : q, re = a.builtinPlacements, ae = a.itemIcon, ue = a.expandIcon, de = a.overflowedIndicator, ce = de === void 0 ? "..." : de, ge = a.overflowedIndicatorPopupClassName, H = a.getPopupContainer, ne = a.onClick, ve = a.onOpenChange, $e = a.onKeyDown, pe = a.openAnimation, ie = a.openTransitionName, oe = a._internalRenderMenuItem, se = a._internalRenderSubMenuItem, we = a._internalComponents, be = Ze(a, m2), ye = u.useMemo(function() {
    return [Lu(g, v, ur, we), Lu(g, v, ur, {})];
  }, [g, v, we]), _e = K(ye, 2), Ee = _e[0], st = _e[1], Ye = u.useState(!1), xe = K(Ye, 2), Oe = xe[0], te = xe[1], le = u.useRef(), Ie = GS(h), Ve = p === "rtl";
  process.env.NODE_ENV !== "production" && ct(!pe && !ie, "`openAnimation` and `openTransitionName` is removed. Please use `motion` or `defaultMotion` instead.");
  var Ke = en(T, {
    value: M,
    postState: function(lt) {
      return lt || ur;
    }
  }), Ue = K(Ke, 2), Ae = Ue[0], fe = Ue[1], he = function(lt) {
    var gt = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    function Dt() {
      fe(lt), ve == null || ve(lt);
    }
    gt ? Xm(Dt) : Dt();
  }, je = u.useState(Ae), Be = K(je, 2), wt = Be[0], mt = Be[1], Qe = u.useRef(!1), Xe = u.useMemo(function() {
    return (S === "inline" || S === "vertical") && b ? ["vertical", b] : [S, !1];
  }, [S, b]), Ge = K(Xe, 2), Fe = Ge[0], Te = Ge[1], nt = Fe === "inline", Ct = u.useState(Fe), Je = K(Ct, 2), et = Je[0], ut = Je[1], St = u.useState(Te), At = K(St, 2), Wt = At[0], qt = At[1];
  u.useEffect(function() {
    ut(Fe), qt(Te), Qe.current && (nt ? fe(wt) : he(ur));
  }, [Fe, Te]);
  var A = u.useState(0), X = K(A, 2), J = X[0], Ce = X[1], De = J >= Ee.length - 1 || et !== "horizontal" || w;
  u.useEffect(function() {
    nt && mt(Ae);
  }, [Ae]), u.useEffect(function() {
    return Qe.current = !0, function() {
      Qe.current = !1;
    };
  }, []);
  var Le = US(), ze = Le.registerPath, He = Le.unregisterPath, ht = Le.refreshOverflowKeys, it = Le.isSubPathKey, qe = Le.getKeyPath, Rt = Le.getKeys, Xt = Le.getSubPathKeys, Ut = u.useMemo(function() {
    return {
      registerPath: ze,
      unregisterPath: He
    };
  }, [ze, He]), bt = u.useMemo(function() {
    return {
      isSubPathKey: it
    };
  }, [it]);
  u.useEffect(function() {
    ht(De ? ur : Ee.slice(J + 1).map(function(yt) {
      return yt.key;
    }));
  }, [J, De]);
  var Pn = en(j || I && ((n = Ee[0]) === null || n === void 0 ? void 0 : n.key), {
    value: j
  }), qn = K(Pn, 2), Zt = qn[0], Xn = qn[1], ra = ba(function(yt) {
    Xn(yt);
  }), sn = ba(function() {
    Xn(void 0);
  });
  Uo(t, function() {
    return {
      list: le.current,
      focus: function(lt) {
        var gt, Dt = Rt(), Vt = Ks(Dt, Ie), Tn = Vt.elements, In = Vt.key2element, sa = Vt.element2key, Yt = Pl(le.current, Tn), cr = Zt ?? (Yt[0] ? sa.get(Yt[0]) : (gt = Ee.find(function(Yn) {
          return !Yn.props.disabled;
        })) === null || gt === void 0 ? void 0 : gt.key), Qt = In.get(cr);
        if (cr && Qt) {
          var pn;
          Qt == null || (pn = Qt.focus) === null || pn === void 0 || pn.call(Qt, lt);
        }
      }
    };
  });
  var mn = en($ || [], {
    value: F,
    // Legacy convert key to array
    postState: function(lt) {
      return Array.isArray(lt) ? lt : lt == null ? ur : [lt];
    }
  }), Zn = K(mn, 2), jn = Zn[0], _n = Zn[1], Fn = function(lt) {
    if (k) {
      var gt = lt.key, Dt = jn.includes(gt), Vt;
      P ? Dt ? Vt = jn.filter(function(In) {
        return In !== gt;
      }) : Vt = [].concat(Pe(jn), [gt]) : Vt = [gt], _n(Vt);
      var Tn = B(B({}, lt), {}, {
        selectedKeys: Vt
      });
      Dt ? V == null || V(Tn) : L == null || L(Tn);
    }
    !P && Ae.length && et !== "inline" && he(ur);
  }, lr = ba(function(yt) {
    ne == null || ne(Bo(yt)), Fn(yt);
  }), Dn = ba(function(yt, lt) {
    var gt = Ae.filter(function(Vt) {
      return Vt !== yt;
    });
    if (lt)
      gt.push(yt);
    else if (et !== "inline") {
      var Dt = Xt(yt);
      gt = gt.filter(function(Vt) {
        return !Dt.has(Vt);
      });
    }
    Wr(Ae, gt, !0) || he(gt, !0);
  }), gn = function(lt, gt) {
    var Dt = gt ?? !Ae.includes(lt);
    Dn(lt, Dt);
  }, aa = kS(et, Zt, Ve, Ie, le, Rt, qe, Xn, gn, $e);
  u.useEffect(function() {
    te(!0);
  }, []);
  var oa = u.useMemo(function() {
    return {
      _internalRenderMenuItem: oe,
      _internalRenderSubMenuItem: se
    };
  }, [oe, se]), ia = et !== "horizontal" || w ? Ee : (
    // Need wrap for overflow dropdown that do not response for open
    Ee.map(function(yt, lt) {
      return (
        // Always wrap provider to avoid sub node re-mount
        /* @__PURE__ */ u.createElement(Fa, {
          key: yt.key,
          overflowDisabled: lt > J
        }, yt)
      );
    })
  ), Er = /* @__PURE__ */ u.createElement(Un, me({
    id: h,
    ref: le,
    prefixCls: "".concat(i, "-overflow"),
    component: "ul",
    itemComponent: li,
    className: Y(i, "".concat(i, "-root"), "".concat(i, "-").concat(et), c, (r = {}, z(r, "".concat(i, "-inline-collapsed"), Wt), z(r, "".concat(i, "-rtl"), Ve), r), s),
    dir: p,
    style: l,
    role: "menu",
    tabIndex: f,
    data: ia,
    renderRawItem: function(lt) {
      return lt;
    },
    renderRawRest: function(lt) {
      var gt = lt.length, Dt = gt ? Ee.slice(-gt) : null;
      return /* @__PURE__ */ u.createElement(ci, {
        eventKey: Gs,
        title: ce,
        disabled: De,
        internalPopupClose: gt === 0,
        popupClassName: ge
      }, Dt);
    },
    maxCount: et !== "horizontal" || w ? Un.INVALIDATE : Un.RESPONSIVE,
    ssr: "full",
    "data-menu-list": !0,
    onVisibleChange: function(lt) {
      Ce(lt);
    },
    onKeyDown: aa
  }, be));
  return /* @__PURE__ */ u.createElement(Rl.Provider, {
    value: oa
  }, /* @__PURE__ */ u.createElement(Fv.Provider, {
    value: Ie
  }, /* @__PURE__ */ u.createElement(Fa, {
    prefixCls: i,
    rootClassName: s,
    mode: et,
    openKeys: Ae,
    rtl: Ve,
    disabled: y,
    motion: Oe ? G : null,
    defaultMotions: Oe ? Q : null,
    activeKey: Zt,
    onActive: ra,
    onInactive: sn,
    selectedKeys: jn,
    inlineIndent: U,
    subMenuOpenDelay: O,
    subMenuCloseDelay: x,
    forceSubMenuRender: R,
    builtinPlacements: re,
    triggerSubMenuAction: Z,
    getPopupContainer: H,
    itemIcon: ae,
    expandIcon: ue,
    onItemClick: lr,
    onOpenChange: Dn
  }, /* @__PURE__ */ u.createElement(kv.Provider, {
    value: bt
  }, Er), /* @__PURE__ */ u.createElement("div", {
    style: {
      display: "none"
    },
    "aria-hidden": !0
  }, /* @__PURE__ */ u.createElement(Vv.Provider, {
    value: Ut
  }, st)))));
}), qa = g2;
qa.Item = li;
qa.SubMenu = ci;
qa.ItemGroup = Nl;
qa.Divider = qv;
var p2 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z" } }] }, name: "left", theme: "outlined" }, h2 = function(t, n) {
  return /* @__PURE__ */ u.createElement(Tt, me({}, t, {
    ref: n,
    icon: p2
  }));
}, Xv = /* @__PURE__ */ u.forwardRef(h2);
process.env.NODE_ENV !== "production" && (Xv.displayName = "LeftOutlined");
var b2 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z" } }] }, name: "ellipsis", theme: "outlined" }, y2 = function(t, n) {
  return /* @__PURE__ */ u.createElement(Tt, me({}, t, {
    ref: n,
    icon: b2
  }));
}, Zv = /* @__PURE__ */ u.forwardRef(y2);
process.env.NODE_ENV !== "production" && (Zv.displayName = "EllipsisOutlined");
function C2(e) {
  return jt(e, {
    inputAffixPadding: e.paddingXXS
  });
}
const S2 = (e) => {
  const {
    controlHeight: t,
    fontSize: n,
    lineHeight: r,
    lineWidth: a,
    controlHeightSM: o,
    controlHeightLG: i,
    fontSizeLG: s,
    lineHeightLG: l,
    paddingSM: c,
    controlPaddingHorizontalSM: d,
    controlPaddingHorizontal: f,
    colorFillAlter: v,
    colorPrimaryHover: g,
    colorPrimary: p,
    controlOutlineWidth: h,
    controlOutline: m,
    colorErrorOutline: S,
    colorWarningOutline: b,
    colorBgContainer: y
  } = e;
  return {
    paddingBlock: Math.max(Math.round((t - n * r) / 2 * 10) / 10 - a, 0),
    paddingBlockSM: Math.max(Math.round((o - n * r) / 2 * 10) / 10 - a, 0),
    paddingBlockLG: Math.ceil((i - s * l) / 2 * 10) / 10 - a,
    paddingInline: c - a,
    paddingInlineSM: d - a,
    paddingInlineLG: f - a,
    addonBg: v,
    activeBorderColor: p,
    hoverBorderColor: g,
    activeShadow: `0 0 0 ${h}px ${m}`,
    errorActiveShadow: `0 0 0 ${h}px ${S}`,
    warningActiveShadow: `0 0 0 ${h}px ${b}`,
    hoverBg: y,
    activeBg: y,
    inputFontSize: n,
    inputFontSizeLG: s,
    inputFontSizeSM: n
  };
}, w2 = (e) => ({
  borderColor: e.hoverBorderColor,
  backgroundColor: e.hoverBg
}), Ml = (e) => ({
  color: e.colorTextDisabled,
  backgroundColor: e.colorBgContainerDisabled,
  borderColor: e.colorBorder,
  boxShadow: "none",
  cursor: "not-allowed",
  opacity: 1,
  "input[disabled], textarea[disabled]": {
    cursor: "not-allowed"
  },
  "&:hover:not([disabled])": Object.assign({}, w2(jt(e, {
    hoverBorderColor: e.colorBorder,
    hoverBg: e.colorBgContainerDisabled
  })))
}), Yv = (e, t) => ({
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
}), ju = (e, t) => ({
  [`&${e.componentCls}-status-${t.status}:not(${e.componentCls}-disabled)`]: Object.assign(Object.assign({}, Yv(e, t)), {
    [`${e.componentCls}-prefix, ${e.componentCls}-suffix`]: {
      color: t.affixColor
    }
  }),
  [`&${e.componentCls}-status-${t.status}${e.componentCls}-disabled`]: {
    borderColor: t.borderColor
  }
}), E2 = (e, t) => ({
  "&-outlined": Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Yv(e, {
    borderColor: e.colorBorder,
    hoverBorderColor: e.hoverBorderColor,
    activeBorderColor: e.activeBorderColor,
    activeShadow: e.activeShadow
  })), {
    [`&${e.componentCls}-disabled, &[disabled]`]: Object.assign({}, Ml(e))
  }), ju(e, {
    status: "error",
    borderColor: e.colorError,
    hoverBorderColor: e.colorErrorBorderHover,
    activeBorderColor: e.colorError,
    activeShadow: e.errorActiveShadow,
    affixColor: e.colorError
  })), ju(e, {
    status: "warning",
    borderColor: e.colorWarning,
    hoverBorderColor: e.colorWarningBorderHover,
    activeBorderColor: e.colorWarning,
    activeShadow: e.warningActiveShadow,
    affixColor: e.colorWarning
  })), t)
}), Fu = (e, t) => ({
  [`&${e.componentCls}-group-wrapper-status-${t.status}`]: {
    [`${e.componentCls}-group-addon`]: {
      borderColor: t.addonBorderColor,
      color: t.addonColor
    }
  }
}), x2 = (e) => ({
  "&-outlined": Object.assign(Object.assign(Object.assign({
    [`${e.componentCls}-group`]: {
      "&-addon": {
        background: e.addonBg,
        border: `${ee(e.lineWidth)} ${e.lineType} ${e.colorBorder}`
      },
      "&-addon:first-child": {
        borderInlineEnd: 0
      },
      "&-addon:last-child": {
        borderInlineStart: 0
      }
    }
  }, Fu(e, {
    status: "error",
    addonBorderColor: e.colorError,
    addonColor: e.colorErrorText
  })), Fu(e, {
    status: "warning",
    addonBorderColor: e.colorWarning,
    addonColor: e.colorWarningText
  })), {
    [`&${e.componentCls}-group-wrapper-disabled`]: {
      [`${e.componentCls}-group-addon`]: Object.assign({}, Ml(e))
    }
  })
}), $2 = (e, t) => {
  const {
    componentCls: n
  } = e;
  return {
    "&-borderless": Object.assign({
      background: "transparent",
      border: "none",
      "&:focus, &:focus-within": {
        outline: "none"
      },
      // >>>>> Disabled
      [`&${n}-disabled, &[disabled]`]: {
        color: e.colorTextDisabled
      },
      // >>>>> Status
      [`&${n}-status-error`]: {
        "&, & input, & textarea": {
          color: e.colorError
        }
      },
      [`&${n}-status-warning`]: {
        "&, & input, & textarea": {
          color: e.colorWarning
        }
      }
    }, t)
  };
}, Qv = (e, t) => ({
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
}), Du = (e, t) => ({
  [`&${e.componentCls}-status-${t.status}:not(${e.componentCls}-disabled)`]: Object.assign(Object.assign({}, Qv(e, t)), {
    [`${e.componentCls}-prefix, ${e.componentCls}-suffix`]: {
      color: t.affixColor
    }
  })
}), O2 = (e, t) => ({
  "&-filled": Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Qv(e, {
    bg: e.colorFillTertiary,
    hoverBg: e.colorFillSecondary,
    activeBorderColor: e.colorPrimary
  })), {
    [`&${e.componentCls}-disabled, &[disabled]`]: Object.assign({}, Ml(e))
  }), Du(e, {
    status: "error",
    bg: e.colorErrorBg,
    hoverBg: e.colorErrorBgHover,
    activeBorderColor: e.colorError,
    inputColor: e.colorErrorText,
    affixColor: e.colorError
  })), Du(e, {
    status: "warning",
    bg: e.colorWarningBg,
    hoverBg: e.colorWarningBgHover,
    activeBorderColor: e.colorWarning,
    inputColor: e.colorWarningText,
    affixColor: e.colorWarning
  })), t)
}), zu = (e, t) => ({
  [`&${e.componentCls}-group-wrapper-status-${t.status}`]: {
    [`${e.componentCls}-group-addon`]: {
      background: t.addonBg,
      color: t.addonColor
    }
  }
}), R2 = (e) => ({
  "&-filled": Object.assign(Object.assign(Object.assign({
    [`${e.componentCls}-group`]: {
      "&-addon": {
        background: e.colorFillTertiary
      },
      [`${e.componentCls}-filled:not(:focus):not(:focus-within)`]: {
        "&:not(:first-child)": {
          borderInlineStart: `${ee(e.lineWidth)} ${e.lineType} ${e.colorSplit}`
        },
        "&:not(:last-child)": {
          borderInlineEnd: `${ee(e.lineWidth)} ${e.lineType} ${e.colorSplit}`
        }
      }
    }
  }, zu(e, {
    status: "error",
    addonBg: e.colorErrorBg,
    addonColor: e.colorErrorText
  })), zu(e, {
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
          borderInlineStart: `${ee(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
          borderTop: `${ee(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
          borderBottom: `${ee(e.lineWidth)} ${e.lineType} ${e.colorBorder}`
        },
        "&-addon:last-child": {
          borderInlineEnd: `${ee(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
          borderTop: `${ee(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
          borderBottom: `${ee(e.lineWidth)} ${e.lineType} ${e.colorBorder}`
        }
      }
    }
  })
}), P2 = (e) => ({
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
}), Jv = (e) => {
  const {
    paddingBlockLG: t,
    lineHeightLG: n,
    borderRadiusLG: r,
    paddingInlineLG: a
  } = e;
  return {
    padding: `${ee(t)} ${ee(a)}`,
    fontSize: e.inputFontSizeLG,
    lineHeight: n,
    borderRadius: r
  };
}, em = (e) => ({
  padding: `${ee(e.paddingBlockSM)} ${ee(e.paddingInlineSM)}`,
  fontSize: e.inputFontSizeSM,
  borderRadius: e.borderRadiusSM
}), tm = (e) => Object.assign(Object.assign({
  position: "relative",
  display: "inline-block",
  width: "100%",
  minWidth: 0,
  padding: `${ee(e.paddingBlock)} ${ee(e.paddingInline)}`,
  color: e.colorText,
  fontSize: e.inputFontSize,
  lineHeight: e.lineHeight,
  borderRadius: e.borderRadius,
  transition: `all ${e.motionDurationMid}`
}, P2(e.colorTextPlaceholder)), {
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
  "&-lg": Object.assign({}, Jv(e)),
  "&-sm": Object.assign({}, em(e)),
  // RTL
  "&-rtl, &-textarea-rtl": {
    direction: "rtl"
  }
}), _2 = (e) => {
  const {
    componentCls: t,
    antCls: n
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
    [`&-lg ${t}, &-lg > ${t}-group-addon`]: Object.assign({}, Jv(e)),
    [`&-sm ${t}, &-sm > ${t}-group-addon`]: Object.assign({}, em(e)),
    // Fix https://github.com/ant-design/ant-design/issues/5754
    [`&-lg ${n}-select-single ${n}-select-selector`]: {
      height: e.controlHeightLG
    },
    [`&-sm ${n}-select-single ${n}-select-selector`]: {
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
        padding: `0 ${ee(e.paddingInline)}`,
        color: e.colorText,
        fontWeight: "normal",
        fontSize: e.inputFontSize,
        textAlign: "center",
        borderRadius: e.borderRadius,
        transition: `all ${e.motionDurationSlow}`,
        lineHeight: 1,
        // Reset Select's style in addon
        [`${n}-select`]: {
          margin: `${ee(e.calc(e.paddingBlock).add(1).mul(-1).equal())} ${ee(e.calc(e.paddingInline).mul(-1).equal())}`,
          [`&${n}-select-single:not(${n}-select-customize-input):not(${n}-pagination-size-changer)`]: {
            [`${n}-select-selector`]: {
              backgroundColor: "inherit",
              border: `${ee(e.lineWidth)} ${e.lineType} transparent`,
              boxShadow: "none"
            }
          },
          "&-open, &-focused": {
            [`${n}-select-selector`]: {
              color: e.colorPrimary
            }
          }
        },
        // https://github.com/ant-design/ant-design/issues/31333
        [`${n}-cascader-picker`]: {
          margin: `-9px ${ee(e.calc(e.paddingInline).mul(-1).equal())}`,
          backgroundColor: "transparent",
          [`${n}-cascader-input`]: {
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
      [`${n}-select ${n}-select-selector`]: {
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
      [`${n}-select ${n}-select-selector`]: {
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
    }, Da()), {
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
        & > ${n}-picker-range
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
      [`& > ${n}-select > ${n}-select-selector,
      & > ${n}-select-auto-complete ${t},
      & > ${n}-cascader-picker ${t},
      & > ${t}-group-wrapper ${t}`]: {
        borderInlineEndWidth: e.lineWidth,
        borderRadius: 0,
        "&:hover, &:focus": {
          zIndex: 1
        }
      },
      [`& > ${n}-select-focused`]: {
        zIndex: 1
      },
      // update z-index for arrow icon
      [`& > ${n}-select > ${n}-select-arrow`]: {
        zIndex: 1
        // https://github.com/ant-design/ant-design/issues/20371
      },
      [`& > *:first-child,
      & > ${n}-select:first-child > ${n}-select-selector,
      & > ${n}-select-auto-complete:first-child ${t},
      & > ${n}-cascader-picker:first-child ${t}`]: {
        borderStartStartRadius: e.borderRadius,
        borderEndStartRadius: e.borderRadius
      },
      [`& > *:last-child,
      & > ${n}-select:last-child > ${n}-select-selector,
      & > ${n}-cascader-picker:last-child ${t},
      & > ${n}-cascader-picker-focused:last-child ${t}`]: {
        borderInlineEndWidth: e.lineWidth,
        borderStartEndRadius: e.borderRadius,
        borderEndEndRadius: e.borderRadius
      },
      // https://github.com/ant-design/ant-design/issues/12493
      [`& > ${n}-select-auto-complete ${t}`]: {
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
}, T2 = (e) => {
  const {
    componentCls: t,
    controlHeightSM: n,
    lineWidth: r,
    calc: a
  } = e, i = a(n).sub(a(r).mul(2)).sub(16).div(2).equal();
  return {
    [t]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, sr(e)), tm(e)), E2(e)), O2(e)), $2(e)), {
      '&[type="color"]': {
        height: e.controlHeight,
        [`&${t}-lg`]: {
          height: e.controlHeightLG
        },
        [`&${t}-sm`]: {
          height: n,
          paddingTop: i,
          paddingBottom: i
        }
      },
      '&[type="search"]::-webkit-search-cancel-button, &[type="search"]::-webkit-search-decoration': {
        "-webkit-appearance": "none"
      }
    })
  };
}, I2 = (e) => {
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
        margin: `0 ${ee(e.inputAffixPadding)}`
      }
    }
  };
}, N2 = (e) => {
  const {
    componentCls: t,
    inputAffixPadding: n,
    colorTextDescription: r,
    motionDurationSlow: a,
    colorIcon: o,
    colorIconHover: i,
    iconCls: s
  } = e;
  return {
    [`${t}-affix-wrapper`]: Object.assign(Object.assign(Object.assign(Object.assign({}, tm(e)), {
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
          color: r
        },
        "&-show-count-has-suffix": {
          marginInlineEnd: e.paddingXXS
        },
        "&-prefix": {
          marginInlineEnd: n
        },
        "&-suffix": {
          marginInlineStart: n
        }
      }
    }), I2(e)), {
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
}, M2 = (e) => {
  const {
    componentCls: t,
    borderRadiusLG: n,
    borderRadiusSM: r
  } = e;
  return {
    [`${t}-group`]: Object.assign(Object.assign(Object.assign({}, sr(e)), _2(e)), {
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
            borderRadius: n,
            fontSize: e.inputFontSizeLG
          }
        },
        "&-sm": {
          [`${t}-group-addon`]: {
            borderRadius: r
          }
        }
      }, x2(e)), R2(e)), {
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
}, A2 = (e) => {
  const {
    componentCls: t,
    antCls: n
  } = e, r = `${t}-search`;
  return {
    [r]: {
      [`${t}`]: {
        "&:hover, &:focus": {
          borderColor: e.colorPrimaryHover,
          [`+ ${t}-group-addon ${r}-button:not(${n}-btn-primary)`]: {
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
          [`${r}-button`]: {
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
          [`${r}-button:not(${n}-btn-primary)`]: {
            color: e.colorTextDescription,
            "&:hover": {
              color: e.colorPrimaryHover
            },
            "&:active": {
              color: e.colorPrimaryActive
            },
            [`&${n}-btn-loading::before`]: {
              insetInlineStart: 0,
              insetInlineEnd: 0,
              insetBlockStart: 0,
              insetBlockEnd: 0
            }
          }
        }
      },
      [`${r}-button`]: {
        height: e.controlHeight,
        "&:hover, &:focus": {
          zIndex: 1
        }
      },
      [`&-large ${r}-button`]: {
        height: e.controlHeightLG
      },
      [`&-small ${r}-button`]: {
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
}, L2 = (e) => {
  const {
    componentCls: t,
    paddingLG: n
  } = e, r = `${t}-textarea`;
  return {
    [r]: {
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
        &-affix-wrapper${r}-has-feedback ${t}
      `]: {
        paddingInlineEnd: n
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
          [`${r}-suffix`]: {
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
}, j2 = (e) => {
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
}, nm = Rn("Input", (e) => {
  const t = jt(e, C2(e));
  return [
    T2(t),
    L2(t),
    N2(t),
    M2(t),
    A2(t),
    j2(t),
    // =====================================================
    // ==             Space Compact                       ==
    // =====================================================
    nv(t)
  ];
}, S2, {
  resetFont: !1
});
var F2 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z" } }, { tag: "path", attrs: { d: "M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8z" } }] }, name: "plus", theme: "outlined" }, D2 = function(t, n) {
  return /* @__PURE__ */ u.createElement(Tt, me({}, t, {
    ref: n,
    icon: F2
  }));
}, rm = /* @__PURE__ */ u.forwardRef(D2);
process.env.NODE_ENV !== "production" && (rm.displayName = "PlusOutlined");
const ui = /* @__PURE__ */ br(null);
var z2 = function(t) {
  var n = t.activeTabOffset, r = t.horizontal, a = t.rtl, o = t.indicator, i = o === void 0 ? {} : o, s = i.size, l = i.align, c = l === void 0 ? "center" : l, d = rt(), f = K(d, 2), v = f[0], g = f[1], p = Me(), h = D.useCallback(function(S) {
    return typeof s == "function" ? s(S) : typeof s == "number" ? s : S;
  }, [s]);
  function m() {
    Mt.cancel(p.current);
  }
  return ot(function() {
    var S = {};
    if (n)
      if (r) {
        S.width = h(n.width);
        var b = a ? "right" : "left";
        c === "start" && (S[b] = n[b]), c === "center" && (S[b] = n[b] + n.width / 2, S.transform = a ? "translateX(50%)" : "translateX(-50%)"), c === "end" && (S[b] = n[b] + n.width, S.transform = "translateX(-100%)");
      } else
        S.height = h(n.height), c === "start" && (S.top = n.top), c === "center" && (S.top = n.top + n.height / 2, S.transform = "translateY(-50%)"), c === "end" && (S.top = n.top + n.height, S.transform = "translateY(-100%)");
    return m(), p.current = Mt(function() {
      g(S);
    }), m;
  }, [n, r, a, c, h]), {
    style: v
  };
}, Vu = {
  width: 0,
  height: 0,
  left: 0,
  top: 0
};
function V2(e, t, n) {
  return $n(function() {
    for (var r, a = /* @__PURE__ */ new Map(), o = t.get((r = e[0]) === null || r === void 0 ? void 0 : r.key) || Vu, i = o.left + o.width, s = 0; s < e.length; s += 1) {
      var l = e[s].key, c = t.get(l);
      if (!c) {
        var d;
        c = t.get((d = e[s - 1]) === null || d === void 0 ? void 0 : d.key) || Vu;
      }
      var f = a.get(l) || B({}, c);
      f.right = i - f.left - f.width, a.set(l, f);
    }
    return a;
  }, [e.map(function(r) {
    return r.key;
  }).join("_"), t, n]);
}
function Bu(e, t) {
  var n = u.useRef(e), r = u.useState({}), a = K(r, 2), o = a[1];
  function i(s) {
    var l = typeof s == "function" ? s(n.current) : s;
    l !== n.current && t(l, n.current), n.current = l, o({});
  }
  return [n.current, i];
}
var B2 = 0.1, ku = 0.01, _o = 20, Hu = Math.pow(0.995, _o);
function k2(e, t) {
  var n = rt(), r = K(n, 2), a = r[0], o = r[1], i = rt(0), s = K(i, 2), l = s[0], c = s[1], d = rt(0), f = K(d, 2), v = f[0], g = f[1], p = rt(), h = K(p, 2), m = h[0], S = h[1], b = Me();
  function y(R) {
    var T = R.touches[0], M = T.screenX, j = T.screenY;
    o({
      x: M,
      y: j
    }), window.clearInterval(b.current);
  }
  function w(R) {
    if (a) {
      R.preventDefault();
      var T = R.touches[0], M = T.screenX, j = T.screenY;
      o({
        x: M,
        y: j
      });
      var I = M - a.x, _ = j - a.y;
      t(I, _);
      var k = Date.now();
      c(k), g(k - l), S({
        x: I,
        y: _
      });
    }
  }
  function C() {
    if (a && (o(null), S(null), m)) {
      var R = m.x / v, T = m.y / v, M = Math.abs(R), j = Math.abs(T);
      if (Math.max(M, j) < B2) return;
      var I = R, _ = T;
      b.current = window.setInterval(function() {
        if (Math.abs(I) < ku && Math.abs(_) < ku) {
          window.clearInterval(b.current);
          return;
        }
        I *= Hu, _ *= Hu, t(I * _o, _ * _o);
      }, _o);
    }
  }
  var O = Me();
  function E(R) {
    var T = R.deltaX, M = R.deltaY, j = 0, I = Math.abs(T), _ = Math.abs(M);
    I === _ ? j = O.current === "x" ? T : M : I > _ ? (j = T, O.current = "x") : (j = M, O.current = "y"), t(-j, -j) && R.preventDefault();
  }
  var x = Me(null);
  x.current = {
    onTouchStart: y,
    onTouchMove: w,
    onTouchEnd: C,
    onWheel: E
  }, u.useEffect(function() {
    function R(I) {
      x.current.onTouchStart(I);
    }
    function T(I) {
      x.current.onTouchMove(I);
    }
    function M(I) {
      x.current.onTouchEnd(I);
    }
    function j(I) {
      x.current.onWheel(I);
    }
    return document.addEventListener("touchmove", T, {
      passive: !1
    }), document.addEventListener("touchend", M, {
      passive: !0
    }), e.current.addEventListener("touchstart", R, {
      passive: !0
    }), e.current.addEventListener("wheel", j, {
      passive: !1
    }), function() {
      document.removeEventListener("touchmove", T), document.removeEventListener("touchend", M);
    };
  }, []);
}
function am(e) {
  var t = rt(0), n = K(t, 2), r = n[0], a = n[1], o = Me(0), i = Me();
  return i.current = e, ls(function() {
    var s;
    (s = i.current) === null || s === void 0 || s.call(i);
  }, [r]), function() {
    o.current === r && (o.current += 1, a(o.current));
  };
}
function H2(e) {
  var t = Me([]), n = rt({}), r = K(n, 2), a = r[1], o = Me(typeof e == "function" ? e() : e), i = am(function() {
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
var Wu = {
  width: 0,
  height: 0,
  left: 0,
  top: 0,
  right: 0
};
function W2(e, t, n, r, a, o, i) {
  var s = i.tabs, l = i.tabPosition, c = i.rtl, d, f, v;
  return ["top", "bottom"].includes(l) ? (d = "width", f = c ? "right" : "left", v = Math.abs(n)) : (d = "height", f = "top", v = -n), $n(function() {
    if (!s.length)
      return [0, 0];
    for (var g = s.length, p = g, h = 0; h < g; h += 1) {
      var m = e.get(s[h].key) || Wu;
      if (m[f] + m[d] > v + t) {
        p = h - 1;
        break;
      }
    }
    for (var S = 0, b = g - 1; b >= 0; b -= 1) {
      var y = e.get(s[b].key) || Wu;
      if (y[f] < v) {
        S = b + 1;
        break;
      }
    }
    return S >= p ? [0, 0] : [S, p];
  }, [e, t, r, a, o, v, l, s.map(function(g) {
    return g.key;
  }).join("_"), c]);
}
function Uu(e) {
  var t;
  return e instanceof Map ? (t = {}, e.forEach(function(n, r) {
    t[r] = n;
  })) : t = e, JSON.stringify(t);
}
var U2 = "TABS_DQ";
function om(e) {
  return String(e).replace(/"/g, U2);
}
function im(e, t, n, r) {
  return (
    // Only editable tabs can be removed
    !(!n || // Tabs cannot be removed when disabled
    r || // closable is false
    e === !1 || // If closable is undefined, the remove button should be hidden when closeIcon is null or false
    e === void 0 && (t === !1 || t === null))
  );
}
var sm = /* @__PURE__ */ u.forwardRef(function(e, t) {
  var n = e.prefixCls, r = e.editable, a = e.locale, o = e.style;
  return !r || r.showAdd === !1 ? null : /* @__PURE__ */ u.createElement("button", {
    ref: t,
    type: "button",
    className: "".concat(n, "-nav-add"),
    style: o,
    "aria-label": (a == null ? void 0 : a.addAriaLabel) || "Add tab",
    onClick: function(s) {
      r.onEdit("add", {
        event: s
      });
    }
  }, r.addIcon || "+");
}), Xs = /* @__PURE__ */ u.forwardRef(function(e, t) {
  var n = e.position, r = e.prefixCls, a = e.extra;
  if (!a)
    return null;
  var o, i = {};
  return ke(a) === "object" && !/* @__PURE__ */ u.isValidElement(a) ? i = a : i.right = a, n === "right" && (o = i.right), n === "left" && (o = i.left), o ? /* @__PURE__ */ u.createElement("div", {
    className: "".concat(r, "-extra-content"),
    ref: t
  }, o) : null;
});
process.env.NODE_ENV !== "production" && (Xs.displayName = "ExtraContent");
var K2 = /* @__PURE__ */ u.forwardRef(function(e, t) {
  var n = e.prefixCls, r = e.id, a = e.tabs, o = e.locale, i = e.mobile, s = e.more, l = s === void 0 ? {} : s, c = e.style, d = e.className, f = e.editable, v = e.tabBarGutter, g = e.rtl, p = e.removeAriaLabel, h = e.onTabClick, m = e.getPopupContainer, S = e.popupClassName, b = rt(!1), y = K(b, 2), w = y[0], C = y[1], O = rt(null), E = K(O, 2), x = E[0], R = E[1], T = l.icon, M = T === void 0 ? "More" : T, j = "".concat(r, "-more-popup"), I = "".concat(n, "-dropdown"), _ = x !== null ? "".concat(j, "-").concat(x) : null, k = o == null ? void 0 : o.dropdownAriaLabel;
  function N(U, G) {
    U.preventDefault(), U.stopPropagation(), f.onEdit("remove", {
      key: G,
      event: U
    });
  }
  var P = /* @__PURE__ */ u.createElement(qa, {
    onClick: function(G) {
      var Q = G.key, q = G.domEvent;
      h(Q, q), C(!1);
    },
    prefixCls: "".concat(I, "-menu"),
    id: j,
    tabIndex: -1,
    role: "listbox",
    "aria-activedescendant": _,
    selectedKeys: [x],
    "aria-label": k !== void 0 ? k : "expanded dropdown"
  }, a.map(function(U) {
    var G = U.closable, Q = U.disabled, q = U.closeIcon, Z = U.key, re = U.label, ae = im(G, q, f, Q);
    return /* @__PURE__ */ u.createElement(li, {
      key: Z,
      id: "".concat(j, "-").concat(Z),
      role: "option",
      "aria-controls": r && "".concat(r, "-panel-").concat(Z),
      disabled: Q
    }, /* @__PURE__ */ u.createElement("span", null, re), ae && /* @__PURE__ */ u.createElement("button", {
      type: "button",
      "aria-label": p || "remove",
      tabIndex: 0,
      className: "".concat(I, "-menu-item-remove"),
      onClick: function(de) {
        de.stopPropagation(), N(de, Z);
      }
    }, q || f.removeIcon || "×"));
  }));
  function $(U) {
    for (var G = a.filter(function(ae) {
      return !ae.disabled;
    }), Q = G.findIndex(function(ae) {
      return ae.key === x;
    }) || 0, q = G.length, Z = 0; Z < q; Z += 1) {
      Q = (Q + U + q) % q;
      var re = G[Q];
      if (!re.disabled) {
        R(re.key);
        return;
      }
    }
  }
  function F(U) {
    var G = U.which;
    if (!w) {
      [Se.DOWN, Se.SPACE, Se.ENTER].includes(G) && (C(!0), U.preventDefault());
      return;
    }
    switch (G) {
      case Se.UP:
        $(-1), U.preventDefault();
        break;
      case Se.DOWN:
        $(1), U.preventDefault();
        break;
      case Se.ESC:
        C(!1);
        break;
      case Se.SPACE:
      case Se.ENTER:
        x !== null && h(x, U);
        break;
    }
  }
  ot(function() {
    var U = document.getElementById(_);
    U && U.scrollIntoView && U.scrollIntoView(!1);
  }, [x]), ot(function() {
    w || R(null);
  }, [w]);
  var L = z({}, g ? "marginRight" : "marginLeft", v);
  a.length || (L.visibility = "hidden", L.order = 1);
  var V = Y(z({}, "".concat(I, "-rtl"), g)), W = i ? null : /* @__PURE__ */ u.createElement(AS, me({
    prefixCls: I,
    overlay: P,
    visible: a.length ? w : !1,
    onVisibleChange: C,
    overlayClassName: Y(V, S),
    mouseEnterDelay: 0.1,
    mouseLeaveDelay: 0.1,
    getPopupContainer: m
  }, l), /* @__PURE__ */ u.createElement("button", {
    type: "button",
    className: "".concat(n, "-nav-more"),
    style: L,
    tabIndex: -1,
    "aria-hidden": "true",
    "aria-haspopup": "listbox",
    "aria-controls": j,
    id: "".concat(r, "-more"),
    "aria-expanded": w,
    onKeyDown: F
  }, M));
  return /* @__PURE__ */ u.createElement("div", {
    className: Y("".concat(n, "-nav-operations"), d),
    style: c,
    ref: t
  }, W, /* @__PURE__ */ u.createElement(sm, {
    prefixCls: n,
    locale: o,
    editable: f
  }));
});
const G2 = /* @__PURE__ */ u.memo(K2, function(e, t) {
  return (
    // https://github.com/ant-design/ant-design/issues/32544
    // We'd better remove syntactic sugar in `rc-menu` since this has perf issue
    t.tabMoving
  );
});
var q2 = function(t) {
  var n = t.prefixCls, r = t.id, a = t.active, o = t.tab, i = o.key, s = o.label, l = o.disabled, c = o.closeIcon, d = o.icon, f = t.closable, v = t.renderWrapper, g = t.removeAriaLabel, p = t.editable, h = t.onClick, m = t.onFocus, S = t.style, b = "".concat(n, "-tab"), y = im(f, c, p, l);
  function w(x) {
    l || h(x);
  }
  function C(x) {
    x.preventDefault(), x.stopPropagation(), p.onEdit("remove", {
      key: i,
      event: x
    });
  }
  var O = u.useMemo(function() {
    return d && typeof s == "string" ? /* @__PURE__ */ u.createElement("span", null, s) : s;
  }, [s, d]), E = /* @__PURE__ */ u.createElement("div", {
    key: i,
    "data-node-key": om(i),
    className: Y(b, z(z(z({}, "".concat(b, "-with-remove"), y), "".concat(b, "-active"), a), "".concat(b, "-disabled"), l)),
    style: S,
    onClick: w
  }, /* @__PURE__ */ u.createElement("div", {
    role: "tab",
    "aria-selected": a,
    id: r && "".concat(r, "-tab-").concat(i),
    className: "".concat(b, "-btn"),
    "aria-controls": r && "".concat(r, "-panel-").concat(i),
    "aria-disabled": l,
    tabIndex: l ? null : 0,
    onClick: function(R) {
      R.stopPropagation(), w(R);
    },
    onKeyDown: function(R) {
      [Se.SPACE, Se.ENTER].includes(R.which) && (R.preventDefault(), w(R));
    },
    onFocus: m
  }, d && /* @__PURE__ */ u.createElement("span", {
    className: "".concat(b, "-icon")
  }, d), s && O), y && /* @__PURE__ */ u.createElement("button", {
    type: "button",
    "aria-label": g || "remove",
    tabIndex: 0,
    className: "".concat(b, "-remove"),
    onClick: function(R) {
      R.stopPropagation(), C(R);
    }
  }, c || p.removeIcon || "×"));
  return v ? v(E) : E;
}, X2 = function(t, n) {
  var r = t.offsetWidth, a = t.offsetHeight, o = t.offsetTop, i = t.offsetLeft, s = t.getBoundingClientRect(), l = s.width, c = s.height, d = s.x, f = s.y;
  return Math.abs(l - r) < 1 ? [l, c, d - n.x, f - n.y] : [r, a, i, o];
}, Ar = function(t) {
  var n = t.current || {}, r = n.offsetWidth, a = r === void 0 ? 0 : r, o = n.offsetHeight, i = o === void 0 ? 0 : o;
  if (t.current) {
    var s = t.current.getBoundingClientRect(), l = s.width, c = s.height;
    if (Math.abs(l - a) < 1)
      return [l, c];
  }
  return [a, i];
}, vo = function(t, n) {
  return t[n ? 0 : 1];
}, Ku = /* @__PURE__ */ u.forwardRef(function(e, t) {
  var n = e.className, r = e.style, a = e.id, o = e.animated, i = e.activeKey, s = e.rtl, l = e.extra, c = e.editable, d = e.locale, f = e.tabPosition, v = e.tabBarGutter, g = e.children, p = e.onTabClick, h = e.onTabScroll, m = e.indicator, S = u.useContext(ui), b = S.prefixCls, y = S.tabs, w = Me(null), C = Me(null), O = Me(null), E = Me(null), x = Me(null), R = Me(null), T = Me(null), M = f === "top" || f === "bottom", j = Bu(0, function(X, J) {
    M && h && h({
      direction: X > J ? "left" : "right"
    });
  }), I = K(j, 2), _ = I[0], k = I[1], N = Bu(0, function(X, J) {
    !M && h && h({
      direction: X > J ? "top" : "bottom"
    });
  }), P = K(N, 2), $ = P[0], F = P[1], L = rt([0, 0]), V = K(L, 2), W = V[0], U = V[1], G = rt([0, 0]), Q = K(G, 2), q = Q[0], Z = Q[1], re = rt([0, 0]), ae = K(re, 2), ue = ae[0], de = ae[1], ce = rt([0, 0]), ge = K(ce, 2), H = ge[0], ne = ge[1], ve = H2(/* @__PURE__ */ new Map()), $e = K(ve, 2), pe = $e[0], ie = $e[1], oe = V2(y, pe, q[0]), se = vo(W, M), we = vo(q, M), be = vo(ue, M), ye = vo(H, M), _e = se < we + be, Ee = _e ? se - ye : se - be, st = "".concat(b, "-nav-operations-hidden"), Ye = 0, xe = 0;
  M && s ? (Ye = 0, xe = Math.max(0, we - Ee)) : (Ye = Math.min(0, Ee - we), xe = 0);
  function Oe(X) {
    return X < Ye ? Ye : X > xe ? xe : X;
  }
  var te = Me(null), le = rt(), Ie = K(le, 2), Ve = Ie[0], Ke = Ie[1];
  function Ue() {
    Ke(Date.now());
  }
  function Ae() {
    te.current && clearTimeout(te.current);
  }
  k2(E, function(X, J) {
    function Ce(De, Le) {
      De(function(ze) {
        var He = Oe(ze + Le);
        return He;
      });
    }
    return _e ? (M ? Ce(k, X) : Ce(F, J), Ae(), Ue(), !0) : !1;
  }), ot(function() {
    return Ae(), Ve && (te.current = setTimeout(function() {
      Ke(0);
    }, 100)), Ae;
  }, [Ve]);
  var fe = W2(
    oe,
    // Container
    Ee,
    // Transform
    M ? _ : $,
    // Tabs
    we,
    // Add
    be,
    // Operation
    ye,
    B(B({}, e), {}, {
      tabs: y
    })
  ), he = K(fe, 2), je = he[0], Be = he[1], wt = Gt(function() {
    var X = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : i, J = oe.get(X) || {
      width: 0,
      height: 0,
      left: 0,
      right: 0,
      top: 0
    };
    if (M) {
      var Ce = _;
      s ? J.right < _ ? Ce = J.right : J.right + J.width > _ + Ee && (Ce = J.right + J.width - Ee) : J.left < -_ ? Ce = -J.left : J.left + J.width > -_ + Ee && (Ce = -(J.left + J.width - Ee)), F(0), k(Oe(Ce));
    } else {
      var De = $;
      J.top < -$ ? De = -J.top : J.top + J.height > -$ + Ee && (De = -(J.top + J.height - Ee)), k(0), F(Oe(De));
    }
  }), mt = {};
  f === "top" || f === "bottom" ? mt[s ? "marginRight" : "marginLeft"] = v : mt.marginTop = v;
  var Qe = y.map(function(X, J) {
    var Ce = X.key;
    return /* @__PURE__ */ u.createElement(q2, {
      id: a,
      prefixCls: b,
      key: Ce,
      tab: X,
      style: J === 0 ? void 0 : mt,
      closable: X.closable,
      editable: c,
      active: Ce === i,
      renderWrapper: g,
      removeAriaLabel: d == null ? void 0 : d.removeAriaLabel,
      onClick: function(Le) {
        p(Ce, Le);
      },
      onFocus: function() {
        wt(Ce), Ue(), E.current && (s || (E.current.scrollLeft = 0), E.current.scrollTop = 0);
      }
    });
  }), Xe = function() {
    return ie(function() {
      var J, Ce = /* @__PURE__ */ new Map(), De = (J = x.current) === null || J === void 0 ? void 0 : J.getBoundingClientRect();
      return y.forEach(function(Le) {
        var ze, He = Le.key, ht = (ze = x.current) === null || ze === void 0 ? void 0 : ze.querySelector('[data-node-key="'.concat(om(He), '"]'));
        if (ht) {
          var it = X2(ht, De), qe = K(it, 4), Rt = qe[0], Xt = qe[1], Ut = qe[2], bt = qe[3];
          Ce.set(He, {
            width: Rt,
            height: Xt,
            left: Ut,
            top: bt
          });
        }
      }), Ce;
    });
  };
  ot(function() {
    Xe();
  }, [y.map(function(X) {
    return X.key;
  }).join("_")]);
  var Ge = am(function() {
    var X = Ar(w), J = Ar(C), Ce = Ar(O);
    U([X[0] - J[0] - Ce[0], X[1] - J[1] - Ce[1]]);
    var De = Ar(T);
    de(De);
    var Le = Ar(R);
    ne(Le);
    var ze = Ar(x);
    Z([ze[0] - De[0], ze[1] - De[1]]), Xe();
  }), Fe = y.slice(0, je), Te = y.slice(Be + 1), nt = [].concat(Pe(Fe), Pe(Te)), Ct = oe.get(i), Je = z2({
    activeTabOffset: Ct,
    horizontal: M,
    indicator: m,
    rtl: s
  }), et = Je.style;
  ot(function() {
    wt();
  }, [i, Ye, xe, Uu(Ct), Uu(oe), M]), ot(function() {
    Ge();
  }, [s]);
  var ut = !!nt.length, St = "".concat(b, "-nav-wrap"), At, Wt, qt, A;
  return M ? s ? (Wt = _ > 0, At = _ !== xe) : (At = _ < 0, Wt = _ !== Ye) : (qt = $ < 0, A = $ !== Ye), /* @__PURE__ */ u.createElement(wn, {
    onResize: Ge
  }, /* @__PURE__ */ u.createElement("div", {
    ref: Qr(t, w),
    role: "tablist",
    className: Y("".concat(b, "-nav"), n),
    style: r,
    onKeyDown: function() {
      Ue();
    }
  }, /* @__PURE__ */ u.createElement(Xs, {
    ref: C,
    position: "left",
    extra: l,
    prefixCls: b
  }), /* @__PURE__ */ u.createElement(wn, {
    onResize: Ge
  }, /* @__PURE__ */ u.createElement("div", {
    className: Y(St, z(z(z(z({}, "".concat(St, "-ping-left"), At), "".concat(St, "-ping-right"), Wt), "".concat(St, "-ping-top"), qt), "".concat(St, "-ping-bottom"), A)),
    ref: E
  }, /* @__PURE__ */ u.createElement(wn, {
    onResize: Ge
  }, /* @__PURE__ */ u.createElement("div", {
    ref: x,
    className: "".concat(b, "-nav-list"),
    style: {
      transform: "translate(".concat(_, "px, ").concat($, "px)"),
      transition: Ve ? "none" : void 0
    }
  }, Qe, /* @__PURE__ */ u.createElement(sm, {
    ref: T,
    prefixCls: b,
    locale: d,
    editable: c,
    style: B(B({}, Qe.length === 0 ? void 0 : mt), {}, {
      visibility: ut ? "hidden" : null
    })
  }), /* @__PURE__ */ u.createElement("div", {
    className: Y("".concat(b, "-ink-bar"), z({}, "".concat(b, "-ink-bar-animated"), o.inkBar)),
    style: et
  }))))), /* @__PURE__ */ u.createElement(G2, me({}, e, {
    removeAriaLabel: d == null ? void 0 : d.removeAriaLabel,
    ref: R,
    prefixCls: b,
    tabs: nt,
    className: !ut && st,
    tabMoving: !!Ve
  })), /* @__PURE__ */ u.createElement(Xs, {
    ref: O,
    position: "right",
    extra: l,
    prefixCls: b
  })));
}), Al = /* @__PURE__ */ u.forwardRef(function(e, t) {
  var n = e.prefixCls, r = e.className, a = e.style, o = e.id, i = e.active, s = e.tabKey, l = e.children;
  return /* @__PURE__ */ u.createElement("div", {
    id: o && "".concat(o, "-panel-").concat(s),
    role: "tabpanel",
    tabIndex: i ? 0 : -1,
    "aria-labelledby": o && "".concat(o, "-tab-").concat(s),
    "aria-hidden": !i,
    style: a,
    className: Y(n, i && "".concat(n, "-active"), r),
    ref: t
  }, l);
});
process.env.NODE_ENV !== "production" && (Al.displayName = "TabPane");
var Z2 = ["renderTabBar"], Y2 = ["label", "key"], lm = function(t) {
  var n = t.renderTabBar, r = Ze(t, Z2), a = u.useContext(ui), o = a.tabs;
  if (n) {
    var i = B(B({}, r), {}, {
      // Legacy support. We do not use this actually
      panes: o.map(function(s) {
        var l = s.label, c = s.key, d = Ze(s, Y2);
        return /* @__PURE__ */ u.createElement(Al, me({
          tab: l,
          key: c,
          tabKey: c
        }, d));
      })
    });
    return n(i, Ku);
  }
  return /* @__PURE__ */ u.createElement(Ku, r);
};
process.env.NODE_ENV !== "production" && (lm.displayName = "TabNavListWrapper");
var Q2 = ["key", "forceRender", "style", "className", "destroyInactiveTabPane"], J2 = function(t) {
  var n = t.id, r = t.activeKey, a = t.animated, o = t.tabPosition, i = t.destroyInactiveTabPane, s = u.useContext(ui), l = s.prefixCls, c = s.tabs, d = a.tabPane, f = "".concat(l, "-tabpane");
  return /* @__PURE__ */ u.createElement("div", {
    className: Y("".concat(l, "-content-holder"))
  }, /* @__PURE__ */ u.createElement("div", {
    className: Y("".concat(l, "-content"), "".concat(l, "-content-").concat(o), z({}, "".concat(l, "-content-animated"), d))
  }, c.map(function(v) {
    var g = v.key, p = v.forceRender, h = v.style, m = v.className, S = v.destroyInactiveTabPane, b = Ze(v, Q2), y = g === r;
    return /* @__PURE__ */ u.createElement(Ln, me({
      key: g,
      visible: y,
      forceRender: p,
      removeOnLeave: !!(i || S),
      leavedClassName: "".concat(f, "-hidden")
    }, a.tabPaneMotion), function(w, C) {
      var O = w.style, E = w.className;
      return /* @__PURE__ */ u.createElement(Al, me({}, b, {
        prefixCls: f,
        id: n,
        tabKey: g,
        animated: d,
        active: y,
        style: B(B({}, h), O),
        className: Y(m, E),
        ref: C
      }));
    });
  })));
};
function ew() {
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
  } : t = B({
    inkBar: !0
  }, ke(e) === "object" ? e : {}), t.tabPaneMotion && t.tabPane === void 0 && (t.tabPane = !0), !t.tabPaneMotion && t.tabPane && (process.env.NODE_ENV !== "production" && ct(!1, "`animated.tabPane` is true but `animated.tabPaneMotion` is not provided. Motion will not work."), t.tabPane = !1), t;
}
var tw = ["id", "prefixCls", "className", "items", "direction", "activeKey", "defaultActiveKey", "editable", "animated", "tabPosition", "tabBarGutter", "tabBarStyle", "tabBarExtraContent", "locale", "more", "destroyInactiveTabPane", "renderTabBar", "onChange", "onTabClick", "onTabScroll", "getPopupContainer", "popupClassName", "indicator"], Gu = 0, cm = /* @__PURE__ */ u.forwardRef(function(e, t) {
  var n = e.id, r = e.prefixCls, a = r === void 0 ? "rc-tabs" : r, o = e.className, i = e.items, s = e.direction, l = e.activeKey, c = e.defaultActiveKey, d = e.editable, f = e.animated, v = e.tabPosition, g = v === void 0 ? "top" : v, p = e.tabBarGutter, h = e.tabBarStyle, m = e.tabBarExtraContent, S = e.locale, b = e.more, y = e.destroyInactiveTabPane, w = e.renderTabBar, C = e.onChange, O = e.onTabClick, E = e.onTabScroll, x = e.getPopupContainer, R = e.popupClassName, T = e.indicator, M = Ze(e, tw), j = u.useMemo(function() {
    return (i || []).filter(function(H) {
      return H && ke(H) === "object" && "key" in H;
    });
  }, [i]), I = s === "rtl", _ = ew(f), k = rt(!1), N = K(k, 2), P = N[0], $ = N[1];
  ot(function() {
    $(Cv());
  }, []);
  var F = en(function() {
    var H;
    return (H = j[0]) === null || H === void 0 ? void 0 : H.key;
  }, {
    value: l,
    defaultValue: c
  }), L = K(F, 2), V = L[0], W = L[1], U = rt(function() {
    return j.findIndex(function(H) {
      return H.key === V;
    });
  }), G = K(U, 2), Q = G[0], q = G[1];
  ot(function() {
    var H = j.findIndex(function(ve) {
      return ve.key === V;
    });
    if (H === -1) {
      var ne;
      H = Math.max(0, Math.min(Q, j.length - 1)), W((ne = j[H]) === null || ne === void 0 ? void 0 : ne.key);
    }
    q(H);
  }, [j.map(function(H) {
    return H.key;
  }).join("_"), V, Q]);
  var Z = en(null, {
    value: n
  }), re = K(Z, 2), ae = re[0], ue = re[1];
  ot(function() {
    n || (ue("rc-tabs-".concat(process.env.NODE_ENV === "test" ? "test" : Gu)), Gu += 1);
  }, []);
  function de(H, ne) {
    O == null || O(H, ne);
    var ve = H !== V;
    W(H), ve && (C == null || C(H));
  }
  var ce = {
    id: ae,
    activeKey: V,
    animated: _,
    tabPosition: g,
    rtl: I,
    mobile: P
  }, ge = B(B({}, ce), {}, {
    editable: d,
    locale: S,
    more: b,
    tabBarGutter: p,
    onTabClick: de,
    onTabScroll: E,
    extra: m,
    style: h,
    panes: null,
    getPopupContainer: x,
    popupClassName: R,
    indicator: T
  });
  return /* @__PURE__ */ u.createElement(ui.Provider, {
    value: {
      tabs: j,
      prefixCls: a
    }
  }, /* @__PURE__ */ u.createElement("div", me({
    ref: t,
    id: n,
    className: Y(a, "".concat(a, "-").concat(g), z(z(z({}, "".concat(a, "-mobile"), P), "".concat(a, "-editable"), d), "".concat(a, "-rtl"), I), o)
  }, M), /* @__PURE__ */ u.createElement(lm, me({}, ge, {
    renderTabBar: w
  })), /* @__PURE__ */ u.createElement(J2, me({
    destroyInactiveTabPane: y
  }, ce, {
    animated: _
  }))));
});
process.env.NODE_ENV !== "production" && (cm.displayName = "Tabs");
const nw = {
  motionAppear: !1,
  motionEnter: !0,
  motionLeave: !0
};
function rw(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    inkBar: !0,
    tabPane: !1
  }, n;
  return t === !1 ? n = {
    inkBar: !1,
    tabPane: !1
  } : t === !0 ? n = {
    inkBar: !0,
    tabPane: !0
  } : n = Object.assign({
    inkBar: !0
  }, typeof t == "object" ? t : {}), n.tabPane && (n.tabPaneMotion = Object.assign(Object.assign({}, nw), {
    motionName: Xr(e, "switch")
  })), n;
}
var aw = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
    t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
function ow(e) {
  return e.filter((t) => t);
}
function iw(e, t) {
  if (process.env.NODE_ENV !== "production" && zt("Tabs").deprecated(!t, "Tabs.TabPane", "items"), e)
    return e;
  const n = rr(t).map((r) => {
    if (/* @__PURE__ */ u.isValidElement(r)) {
      const {
        key: a,
        props: o
      } = r, i = o || {}, {
        tab: s
      } = i, l = aw(i, ["tab"]);
      return Object.assign(Object.assign({
        key: String(a)
      }, l), {
        label: s
      });
    }
    return null;
  });
  return ow(n);
}
const sw = (e) => {
  const {
    componentCls: t,
    motionDurationSlow: n
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
              transition: `opacity ${n}`
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
              transition: `opacity ${n}`
            }
          }
        }
      }
    },
    // Follow code may reuse in other components
    [bu(e, "slide-up"), bu(e, "slide-down")]
  ];
}, lw = (e) => {
  const {
    componentCls: t,
    tabsCardPadding: n,
    cardBg: r,
    cardGutter: a,
    colorBorderSecondary: o,
    itemSelectedColor: i
  } = e;
  return {
    [`${t}-card`]: {
      [`> ${t}-nav, > div > ${t}-nav`]: {
        [`${t}-tab`]: {
          margin: 0,
          padding: n,
          background: r,
          border: `${ee(e.lineWidth)} ${e.lineType} ${o}`,
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
              value: ee(a)
            }
          }
        }
      },
      [`&${t}-top`]: {
        [`> ${t}-nav, > div > ${t}-nav`]: {
          [`${t}-tab`]: {
            borderRadius: `${ee(e.borderRadiusLG)} ${ee(e.borderRadiusLG)} 0 0`
          },
          [`${t}-tab-active`]: {
            borderBottomColor: e.colorBgContainer
          }
        }
      },
      [`&${t}-bottom`]: {
        [`> ${t}-nav, > div > ${t}-nav`]: {
          [`${t}-tab`]: {
            borderRadius: `0 0 ${ee(e.borderRadiusLG)} ${ee(e.borderRadiusLG)}`
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
            marginTop: ee(a)
          }
        }
      },
      [`&${t}-left`]: {
        [`> ${t}-nav, > div > ${t}-nav`]: {
          [`${t}-tab`]: {
            borderRadius: {
              _skip_check_: !0,
              value: `${ee(e.borderRadiusLG)} 0 0 ${ee(e.borderRadiusLG)}`
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
              value: `0 ${ee(e.borderRadiusLG)} ${ee(e.borderRadiusLG)} 0`
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
}, cw = (e) => {
  const {
    componentCls: t,
    itemHoverColor: n,
    dropdownEdgeChildVerticalPadding: r
  } = e;
  return {
    [`${t}-dropdown`]: Object.assign(Object.assign({}, sr(e)), {
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
        padding: `${ee(r)} 0`,
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
        "&-item": Object.assign(Object.assign({}, ei), {
          display: "flex",
          alignItems: "center",
          minWidth: e.tabsDropdownWidth,
          margin: 0,
          padding: `${ee(e.paddingXXS)} ${ee(e.paddingSM)}`,
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
              color: n
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
}, uw = (e) => {
  const {
    componentCls: t,
    margin: n,
    colorBorderSecondary: r,
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
          borderBottom: `${ee(e.lineWidth)} ${e.lineType} ${r}`,
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
        marginTop: n,
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
          value: ee(s(e.lineWidth).mul(-1).equal())
        },
        borderLeft: {
          _skip_check_: !0,
          value: `${ee(e.lineWidth)} ${e.lineType} ${e.colorBorder}`
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
          value: `${ee(e.lineWidth)} ${e.lineType} ${e.colorBorder}`
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
}, dw = (e) => {
  const {
    componentCls: t,
    cardPaddingSM: n,
    cardPaddingLG: r,
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
            padding: n
          }
        },
        [`&${t}-bottom`]: {
          [`> ${t}-nav ${t}-tab`]: {
            borderRadius: `0 0 ${ee(e.borderRadius)} ${ee(e.borderRadius)}`
          }
        },
        [`&${t}-top`]: {
          [`> ${t}-nav ${t}-tab`]: {
            borderRadius: `${ee(e.borderRadius)} ${ee(e.borderRadius)} 0 0`
          }
        },
        [`&${t}-right`]: {
          [`> ${t}-nav ${t}-tab`]: {
            borderRadius: {
              _skip_check_: !0,
              value: `0 ${ee(e.borderRadius)} ${ee(e.borderRadius)} 0`
            }
          }
        },
        [`&${t}-left`]: {
          [`> ${t}-nav ${t}-tab`]: {
            borderRadius: {
              _skip_check_: !0,
              value: `${ee(e.borderRadius)} 0 0 ${ee(e.borderRadius)}`
            }
          }
        }
      },
      [`&${t}-large`]: {
        [`> ${t}-nav`]: {
          [`${t}-tab`]: {
            padding: r
          }
        }
      }
    }
  };
}, fw = (e) => {
  const {
    componentCls: t,
    itemActiveColor: n,
    itemHoverColor: r,
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
          color: n
        }
      }, ti(e)),
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
        color: r
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
}, vw = (e) => {
  const {
    componentCls: t,
    tabsHorizontalItemMarginRTL: n,
    iconCls: r,
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
            value: n
          },
          [`${t}-tab:last-of-type`]: {
            marginLeft: {
              _skip_check_: !0,
              value: 0
            }
          },
          [r]: {
            marginRight: {
              _skip_check_: !0,
              value: 0
            },
            marginLeft: {
              _skip_check_: !0,
              value: ee(e.marginSM)
            }
          },
          [`${t}-tab-remove`]: {
            marginRight: {
              _skip_check_: !0,
              value: ee(e.marginXS)
            },
            marginLeft: {
              _skip_check_: !0,
              value: ee(o(e.marginXXS).mul(-1).equal())
            },
            [r]: {
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
}, mw = (e) => {
  const {
    componentCls: t,
    tabsCardPadding: n,
    cardHeight: r,
    cardGutter: a,
    itemHoverColor: o,
    itemActiveColor: i,
    colorBorderSecondary: s
  } = e;
  return {
    [t]: Object.assign(Object.assign(Object.assign(Object.assign({}, sr(e)), {
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
          padding: n,
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
          minWidth: r,
          minHeight: r,
          marginLeft: {
            _skip_check_: !0,
            value: a
          },
          padding: `0 ${ee(e.paddingXS)}`,
          background: "transparent",
          border: `${ee(e.lineWidth)} ${e.lineType} ${s}`,
          borderRadius: `${ee(e.borderRadiusLG)} ${ee(e.borderRadiusLG)} 0 0`,
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
        }, ti(e))
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
    }), fw(e)), {
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
}, gw = (e) => {
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
}, pw = Rn("Tabs", (e) => {
  const t = jt(e, {
    // `cardPadding` is empty by default, so we could calculate with dynamic `cardHeight`
    tabsCardPadding: e.cardPadding,
    dropdownEdgeChildVerticalPadding: e.paddingXXS,
    tabsActiveTextShadow: "0 0 0.25px currentcolor",
    tabsDropdownHeight: 200,
    tabsDropdownWidth: 120,
    tabsHorizontalItemMargin: `0 0 0 ${ee(e.horizontalItemGutter)}`,
    tabsHorizontalItemMarginRTL: `0 0 0 ${ee(e.horizontalItemGutter)}`
  });
  return [dw(t), vw(t), uw(t), cw(t), lw(t), mw(t), sw(t)];
}, gw), um = () => null;
process.env.NODE_ENV !== "production" && (um.displayName = "DeprecatedTabPane");
var hw = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
    t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
const Ll = (e) => {
  var t, n, r, a, o, i, s, l, c, d, f;
  const {
    type: v,
    className: g,
    rootClassName: p,
    size: h,
    onEdit: m,
    hideAdd: S,
    centered: b,
    addIcon: y,
    removeIcon: w,
    moreIcon: C,
    more: O,
    popupClassName: E,
    children: x,
    items: R,
    animated: T,
    style: M,
    indicatorSize: j,
    indicator: I
  } = e, _ = hw(e, ["type", "className", "rootClassName", "size", "onEdit", "hideAdd", "centered", "addIcon", "removeIcon", "moreIcon", "more", "popupClassName", "children", "items", "animated", "style", "indicatorSize", "indicator"]), {
    prefixCls: k
  } = _, {
    direction: N,
    tabs: P,
    getPrefixCls: $,
    getPopupContainer: F
  } = u.useContext(vt), L = $("tabs", k), V = za(L), [W, U, G] = pw(L, V);
  let Q;
  v === "editable-card" && (Q = {
    onEdit: (ce, ge) => {
      let {
        key: H,
        event: ne
      } = ge;
      m == null || m(ce === "add" ? ne : H, ce);
    },
    removeIcon: (t = w ?? (P == null ? void 0 : P.removeIcon)) !== null && t !== void 0 ? t : /* @__PURE__ */ u.createElement(ni, null),
    addIcon: (y ?? (P == null ? void 0 : P.addIcon)) || /* @__PURE__ */ u.createElement(rm, null),
    showAdd: S !== !0
  });
  const q = $();
  if (process.env.NODE_ENV !== "production") {
    const ce = zt("Tabs");
    process.env.NODE_ENV !== "production" && ce(!("onPrevClick" in e) && !("onNextClick" in e), "breaking", "`onPrevClick` and `onNextClick` has been removed. Please use `onTabScroll` instead."), process.env.NODE_ENV !== "production" && ce(!(j || P != null && P.indicatorSize), "deprecated", "`indicatorSize` has been deprecated. Please use `indicator={{ size: ... }}` instead.");
  }
  const Z = Ba(h), re = iw(R, x), ae = rw(L, T), ue = Object.assign(Object.assign({}, P == null ? void 0 : P.style), M), de = {
    align: (n = I == null ? void 0 : I.align) !== null && n !== void 0 ? n : (r = P == null ? void 0 : P.indicator) === null || r === void 0 ? void 0 : r.align,
    size: (s = (o = (a = I == null ? void 0 : I.size) !== null && a !== void 0 ? a : j) !== null && o !== void 0 ? o : (i = P == null ? void 0 : P.indicator) === null || i === void 0 ? void 0 : i.size) !== null && s !== void 0 ? s : P == null ? void 0 : P.indicatorSize
  };
  return W(/* @__PURE__ */ u.createElement(cm, Object.assign({
    direction: N,
    getPopupContainer: F
  }, _, {
    items: re,
    className: Y({
      [`${L}-${Z}`]: Z,
      [`${L}-card`]: ["card", "editable-card"].includes(v),
      [`${L}-editable-card`]: v === "editable-card",
      [`${L}-centered`]: b
    }, P == null ? void 0 : P.className, g, p, U, G, V),
    popupClassName: Y(E, U, G, V),
    style: ue,
    editable: Q,
    more: Object.assign({
      icon: (f = (d = (c = (l = P == null ? void 0 : P.more) === null || l === void 0 ? void 0 : l.icon) !== null && c !== void 0 ? c : P == null ? void 0 : P.moreIcon) !== null && d !== void 0 ? d : C) !== null && f !== void 0 ? f : /* @__PURE__ */ u.createElement(Zv, null),
      transitionName: `${q}-slide-up`
    }, O),
    prefixCls: L,
    animated: ae,
    indicator: de
  })));
};
Ll.TabPane = um;
process.env.NODE_ENV !== "production" && (Ll.displayName = "Tabs");
var bw = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
    t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
const dm = (e) => {
  var {
    prefixCls: t,
    className: n,
    hoverable: r = !0
  } = e, a = bw(e, ["prefixCls", "className", "hoverable"]);
  const {
    getPrefixCls: o
  } = u.useContext(vt), i = o("card", t), s = Y(`${i}-grid`, n, {
    [`${i}-grid-hoverable`]: r
  });
  return /* @__PURE__ */ u.createElement("div", Object.assign({}, a, {
    className: s
  }));
}, yw = (e) => {
  const {
    antCls: t,
    componentCls: n,
    headerHeight: r,
    cardPaddingBase: a,
    tabsMarginBottom: o
  } = e;
  return Object.assign(Object.assign({
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    minHeight: r,
    marginBottom: -1,
    padding: `0 ${ee(a)}`,
    color: e.colorTextHeading,
    fontWeight: e.fontWeightStrong,
    fontSize: e.headerFontSize,
    background: e.headerBg,
    borderBottom: `${ee(e.lineWidth)} ${e.lineType} ${e.colorBorderSecondary}`,
    borderRadius: `${ee(e.borderRadiusLG)} ${ee(e.borderRadiusLG)} 0 0`
  }, Da()), {
    "&-wrapper": {
      width: "100%",
      display: "flex",
      alignItems: "center"
    },
    "&-title": Object.assign(Object.assign({
      display: "inline-block",
      flex: 1
    }, ei), {
      [`
          > ${n}-typography,
          > ${n}-typography-edit-content
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
        borderBottom: `${ee(e.lineWidth)} ${e.lineType} ${e.colorBorderSecondary}`
      }
    }
  });
}, Cw = (e) => {
  const {
    cardPaddingBase: t,
    colorBorderSecondary: n,
    cardShadow: r,
    lineWidth: a
  } = e;
  return {
    width: "33.33%",
    padding: t,
    border: 0,
    borderRadius: 0,
    boxShadow: `
      ${ee(a)} 0 0 0 ${n},
      0 ${ee(a)} 0 0 ${n},
      ${ee(a)} ${ee(a)} 0 0 ${n},
      ${ee(a)} 0 0 0 ${n} inset,
      0 ${ee(a)} 0 0 ${n} inset;
    `,
    transition: `all ${e.motionDurationMid}`,
    "&-hoverable:hover": {
      position: "relative",
      zIndex: 1,
      boxShadow: r
    }
  };
}, Sw = (e) => {
  const {
    componentCls: t,
    iconCls: n,
    actionsLiMargin: r,
    cardActionsIconSize: a,
    colorBorderSecondary: o,
    actionsBg: i
  } = e;
  return Object.assign(Object.assign({
    margin: 0,
    padding: 0,
    listStyle: "none",
    background: i,
    borderTop: `${ee(e.lineWidth)} ${e.lineType} ${o}`,
    display: "flex",
    borderRadius: `0 0 ${ee(e.borderRadiusLG)} ${ee(e.borderRadiusLG)}`
  }, Da()), {
    "& > li": {
      margin: r,
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
        [`a:not(${t}-btn), > ${n}`]: {
          display: "inline-block",
          width: "100%",
          color: e.colorTextDescription,
          lineHeight: ee(e.fontHeight),
          transition: `color ${e.motionDurationMid}`,
          "&:hover": {
            color: e.colorPrimary
          }
        },
        [`> ${n}`]: {
          fontSize: a,
          lineHeight: ee(e.calc(a).mul(e.lineHeight).equal())
        }
      },
      "&:not(:last-child)": {
        borderInlineEnd: `${ee(e.lineWidth)} ${e.lineType} ${o}`
      }
    }
  });
}, ww = (e) => Object.assign(Object.assign({
  margin: `${ee(e.calc(e.marginXXS).mul(-1).equal())} 0`,
  display: "flex"
}, Da()), {
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
  }, ei),
  "&-description": {
    color: e.colorTextDescription
  }
}), Ew = (e) => {
  const {
    componentCls: t,
    cardPaddingBase: n,
    colorFillAlter: r
  } = e;
  return {
    [`${t}-head`]: {
      padding: `0 ${ee(n)}`,
      background: r,
      "&-title": {
        fontSize: e.fontSize
      }
    },
    [`${t}-body`]: {
      padding: `${ee(e.padding)} ${ee(n)}`
    }
  };
}, xw = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    overflow: "hidden",
    [`${t}-body`]: {
      userSelect: "none"
    }
  };
}, $w = (e) => {
  const {
    antCls: t,
    componentCls: n,
    cardShadow: r,
    cardHeadPadding: a,
    colorBorderSecondary: o,
    boxShadowTertiary: i,
    cardPaddingBase: s,
    extraColor: l
  } = e;
  return {
    [n]: Object.assign(Object.assign({}, sr(e)), {
      position: "relative",
      background: e.colorBgContainer,
      borderRadius: e.borderRadiusLG,
      [`&:not(${n}-bordered)`]: {
        boxShadow: i
      },
      [`${n}-head`]: yw(e),
      [`${n}-extra`]: {
        // https://stackoverflow.com/a/22429853/3040605
        marginInlineStart: "auto",
        color: l,
        fontWeight: "normal",
        fontSize: e.fontSize
      },
      [`${n}-body`]: Object.assign({
        padding: s,
        borderRadius: `0 0 ${ee(e.borderRadiusLG)} ${ee(e.borderRadiusLG)}`
      }, Da()),
      [`${n}-grid`]: Cw(e),
      [`${n}-cover`]: {
        "> *": {
          display: "block",
          width: "100%"
        },
        [`img, img + ${t}-image-mask`]: {
          borderRadius: `${ee(e.borderRadiusLG)} ${ee(e.borderRadiusLG)} 0 0`
        }
      },
      [`${n}-actions`]: Sw(e),
      [`${n}-meta`]: ww(e)
    }),
    [`${n}-bordered`]: {
      border: `${ee(e.lineWidth)} ${e.lineType} ${o}`,
      [`${n}-cover`]: {
        marginTop: -1,
        marginInlineStart: -1,
        marginInlineEnd: -1
      }
    },
    [`${n}-hoverable`]: {
      cursor: "pointer",
      transition: `box-shadow ${e.motionDurationMid}, border-color ${e.motionDurationMid}`,
      "&:hover": {
        borderColor: "transparent",
        boxShadow: r
      }
    },
    [`${n}-contain-grid`]: {
      borderRadius: `${ee(e.borderRadiusLG)} ${ee(e.borderRadiusLG)} 0 0 `,
      [`${n}-body`]: {
        display: "flex",
        flexWrap: "wrap"
      },
      [`&:not(${n}-loading) ${n}-body`]: {
        marginBlockStart: e.calc(e.lineWidth).mul(-1).equal(),
        marginInlineStart: e.calc(e.lineWidth).mul(-1).equal(),
        padding: 0
      }
    },
    [`${n}-contain-tabs`]: {
      [`> div${n}-head`]: {
        minHeight: 0,
        [`${n}-head-title, ${n}-extra`]: {
          paddingTop: a
        }
      }
    },
    [`${n}-type-inner`]: Ew(e),
    [`${n}-loading`]: xw(e),
    [`${n}-rtl`]: {
      direction: "rtl"
    }
  };
}, Ow = (e) => {
  const {
    componentCls: t,
    cardPaddingSM: n,
    headerHeightSM: r,
    headerFontSizeSM: a
  } = e;
  return {
    [`${t}-small`]: {
      [`> ${t}-head`]: {
        minHeight: r,
        padding: `0 ${ee(n)}`,
        fontSize: a,
        [`> ${t}-head-wrapper`]: {
          [`> ${t}-extra`]: {
            fontSize: e.fontSize
          }
        }
      },
      [`> ${t}-body`]: {
        padding: n
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
}, Rw = (e) => ({
  headerBg: "transparent",
  headerFontSize: e.fontSizeLG,
  headerFontSizeSM: e.fontSize,
  headerHeight: e.fontSizeLG * e.lineHeightLG + e.padding * 2,
  headerHeightSM: e.fontSize * e.lineHeight + e.paddingXS * 2,
  actionsBg: e.colorBgContainer,
  actionsLiMargin: `${e.paddingSM}px 0`,
  tabsMarginBottom: -e.padding - e.lineWidth,
  extraColor: e.colorText
}), Pw = Rn("Card", (e) => {
  const t = jt(e, {
    cardShadow: e.boxShadowCard,
    cardHeadPadding: e.padding,
    cardPaddingBase: e.paddingLG,
    cardActionsIconSize: e.fontSize,
    cardPaddingSM: 12
    // Fixed padding.
  });
  return [
    // Style
    $w(t),
    // Size
    Ow(t)
  ];
}, Rw);
var qu = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
    t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
const _w = (e) => {
  const {
    actionClasses: t,
    actions: n = [],
    actionStyle: r
  } = e;
  return /* @__PURE__ */ u.createElement("ul", {
    className: t,
    style: r
  }, n.map((a, o) => {
    const i = `action-${o}`;
    return /* @__PURE__ */ u.createElement("li", {
      style: {
        width: `${100 / n.length}%`
      },
      key: i
    }, /* @__PURE__ */ u.createElement("span", null, a));
  }));
}, Tw = /* @__PURE__ */ u.forwardRef((e, t) => {
  const {
    prefixCls: n,
    className: r,
    rootClassName: a,
    style: o,
    extra: i,
    headStyle: s = {},
    bodyStyle: l = {},
    title: c,
    loading: d,
    bordered: f = !0,
    size: v,
    type: g,
    cover: p,
    actions: h,
    tabList: m,
    children: S,
    activeTabKey: b,
    defaultActiveTabKey: y,
    tabBarExtraContent: w,
    hoverable: C,
    tabProps: O = {},
    classNames: E,
    styles: x
  } = e, R = qu(e, ["prefixCls", "className", "rootClassName", "style", "extra", "headStyle", "bodyStyle", "title", "loading", "bordered", "size", "type", "cover", "actions", "tabList", "children", "activeTabKey", "defaultActiveTabKey", "tabBarExtraContent", "hoverable", "tabProps", "classNames", "styles"]), {
    getPrefixCls: T,
    direction: M,
    card: j
  } = u.useContext(vt);
  if (process.env.NODE_ENV !== "production") {
    const pe = zt("Card");
    [["headStyle", "styles.header"], ["bodyStyle", "styles.body"]].forEach((ie) => {
      let [oe, se] = ie;
      pe.deprecated(!(oe in e), oe, se);
    });
  }
  const I = (pe) => {
    var ie;
    (ie = e.onTabChange) === null || ie === void 0 || ie.call(e, pe);
  }, _ = (pe) => {
    var ie;
    return Y((ie = j == null ? void 0 : j.classNames) === null || ie === void 0 ? void 0 : ie[pe], E == null ? void 0 : E[pe]);
  }, k = (pe) => {
    var ie;
    return Object.assign(Object.assign({}, (ie = j == null ? void 0 : j.styles) === null || ie === void 0 ? void 0 : ie[pe]), x == null ? void 0 : x[pe]);
  }, N = u.useMemo(() => {
    let pe = !1;
    return u.Children.forEach(S, (ie) => {
      (ie == null ? void 0 : ie.type) === dm && (pe = !0);
    }), pe;
  }, [S]), P = T("card", n), [$, F, L] = Pw(P), V = /* @__PURE__ */ u.createElement(wr, {
    loading: !0,
    active: !0,
    paragraph: {
      rows: 4
    },
    title: !1
  }, S), W = b !== void 0, U = Object.assign(Object.assign({}, O), {
    [W ? "activeKey" : "defaultActiveKey"]: W ? b : y,
    tabBarExtraContent: w
  });
  let G;
  const Q = Ba(v), q = !Q || Q === "default" ? "large" : Q, Z = m ? /* @__PURE__ */ u.createElement(Ll, Object.assign({
    size: q
  }, U, {
    className: `${P}-head-tabs`,
    onChange: I,
    items: m.map((pe) => {
      var {
        tab: ie
      } = pe, oe = qu(pe, ["tab"]);
      return Object.assign({
        label: ie
      }, oe);
    })
  })) : null;
  if (c || i || Z) {
    const pe = Y(`${P}-head`, _("header")), ie = Y(`${P}-head-title`, _("title")), oe = Y(`${P}-extra`, _("extra")), se = Object.assign(Object.assign({}, s), k("header"));
    G = /* @__PURE__ */ u.createElement("div", {
      className: pe,
      style: se
    }, /* @__PURE__ */ u.createElement("div", {
      className: `${P}-head-wrapper`
    }, c && /* @__PURE__ */ u.createElement("div", {
      className: ie,
      style: k("title")
    }, c), i && /* @__PURE__ */ u.createElement("div", {
      className: oe,
      style: k("extra")
    }, i)), Z);
  }
  const re = Y(`${P}-cover`, _("cover")), ae = p ? /* @__PURE__ */ u.createElement("div", {
    className: re,
    style: k("cover")
  }, p) : null, ue = Y(`${P}-body`, _("body")), de = Object.assign(Object.assign({}, l), k("body")), ce = /* @__PURE__ */ u.createElement("div", {
    className: ue,
    style: de
  }, d ? V : S), ge = Y(`${P}-actions`, _("actions")), H = h != null && h.length ? /* @__PURE__ */ u.createElement(_w, {
    actionClasses: ge,
    actionStyle: k("actions"),
    actions: h
  }) : null, ne = vn(R, ["onTabChange"]), ve = Y(P, j == null ? void 0 : j.className, {
    [`${P}-loading`]: d,
    [`${P}-bordered`]: f,
    [`${P}-hoverable`]: C,
    [`${P}-contain-grid`]: N,
    [`${P}-contain-tabs`]: m == null ? void 0 : m.length,
    [`${P}-${Q}`]: Q,
    [`${P}-type-${g}`]: !!g,
    [`${P}-rtl`]: M === "rtl"
  }, r, a, F, L), $e = Object.assign(Object.assign({}, j == null ? void 0 : j.style), o);
  return $(/* @__PURE__ */ u.createElement("div", Object.assign({
    ref: t
  }, ne, {
    className: ve,
    style: $e
  }), G, ae, ce, H));
});
var Iw = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
    t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
const Nw = (e) => {
  const {
    prefixCls: t,
    className: n,
    avatar: r,
    title: a,
    description: o
  } = e, i = Iw(e, ["prefixCls", "className", "avatar", "title", "description"]), {
    getPrefixCls: s
  } = u.useContext(vt), l = s("card", t), c = Y(`${l}-meta`, n), d = r ? /* @__PURE__ */ u.createElement("div", {
    className: `${l}-meta-avatar`
  }, r) : null, f = a ? /* @__PURE__ */ u.createElement("div", {
    className: `${l}-meta-title`
  }, a) : null, v = o ? /* @__PURE__ */ u.createElement("div", {
    className: `${l}-meta-description`
  }, o) : null, g = f || v ? /* @__PURE__ */ u.createElement("div", {
    className: `${l}-meta-detail`
  }, f, v) : null;
  return /* @__PURE__ */ u.createElement("div", Object.assign({}, i, {
    className: c
  }), d, g);
}, Yr = Tw;
Yr.Grid = dm;
Yr.Meta = Nw;
process.env.NODE_ENV !== "production" && (Yr.displayName = "Card");
function Mw(e) {
  return !!(e.addonBefore || e.addonAfter);
}
function Aw(e) {
  return !!(e.prefix || e.suffix || e.allowClear);
}
function Xu(e, t, n) {
  var r = t.cloneNode(!0), a = Object.create(e, {
    target: {
      value: r
    },
    currentTarget: {
      value: r
    }
  });
  return r.value = n, typeof t.selectionStart == "number" && typeof t.selectionEnd == "number" && (r.selectionStart = t.selectionStart, r.selectionEnd = t.selectionEnd), r.setSelectionRange = function() {
    t.setSelectionRange.apply(t, arguments);
  }, a;
}
function ko(e, t, n, r) {
  if (n) {
    var a = t;
    if (t.type === "click") {
      a = Xu(t, e, ""), n(a);
      return;
    }
    if (e.type !== "file" && r !== void 0) {
      a = Xu(t, e, r), n(a);
      return;
    }
    n(a);
  }
}
function Lw(e, t) {
  if (e) {
    e.focus(t);
    var n = t || {}, r = n.cursor;
    if (r) {
      var a = e.value.length;
      switch (r) {
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
var fm = /* @__PURE__ */ D.forwardRef(function(e, t) {
  var n, r, a = e.inputElement, o = e.children, i = e.prefixCls, s = e.prefix, l = e.suffix, c = e.addonBefore, d = e.addonAfter, f = e.className, v = e.style, g = e.disabled, p = e.readOnly, h = e.focused, m = e.triggerFocus, S = e.allowClear, b = e.value, y = e.handleReset, w = e.hidden, C = e.classes, O = e.classNames, E = e.dataAttrs, x = e.styles, R = e.components, T = o ?? a, M = (R == null ? void 0 : R.affixWrapper) || "span", j = (R == null ? void 0 : R.groupWrapper) || "span", I = (R == null ? void 0 : R.wrapper) || "span", _ = (R == null ? void 0 : R.groupAddon) || "span", k = Me(null), N = function(ne) {
    var ve;
    (ve = k.current) !== null && ve !== void 0 && ve.contains(ne.target) && (m == null || m());
  }, P = Aw(e), $ = /* @__PURE__ */ Hm(T, {
    value: b,
    className: Y(T.props.className, !P && (O == null ? void 0 : O.variant)) || null
  }), F = Me(null);
  if (D.useImperativeHandle(t, function() {
    return {
      nativeElement: F.current || k.current
    };
  }), P) {
    var L, V = null;
    if (S) {
      var W, U = !g && !p && b, G = "".concat(i, "-clear-icon"), Q = ke(S) === "object" && S !== null && S !== void 0 && S.clearIcon ? S.clearIcon : "✖";
      V = /* @__PURE__ */ D.createElement("span", {
        onClick: y,
        onMouseDown: function(ne) {
          return ne.preventDefault();
        },
        className: Y(G, (W = {}, z(W, "".concat(G, "-hidden"), !U), z(W, "".concat(G, "-has-suffix"), !!l), W)),
        role: "button",
        tabIndex: -1
      }, Q);
    }
    var q = "".concat(i, "-affix-wrapper"), Z = Y(q, (L = {}, z(L, "".concat(i, "-disabled"), g), z(L, "".concat(q, "-disabled"), g), z(L, "".concat(q, "-focused"), h), z(L, "".concat(q, "-readonly"), p), z(L, "".concat(q, "-input-with-clear-btn"), l && S && b), L), C == null ? void 0 : C.affixWrapper, O == null ? void 0 : O.affixWrapper, O == null ? void 0 : O.variant), re = (l || S) && /* @__PURE__ */ D.createElement("span", {
      className: Y("".concat(i, "-suffix"), O == null ? void 0 : O.suffix),
      style: x == null ? void 0 : x.suffix
    }, V, l);
    $ = /* @__PURE__ */ D.createElement(M, me({
      className: Z,
      style: x == null ? void 0 : x.affixWrapper,
      onClick: N
    }, E == null ? void 0 : E.affixWrapper, {
      ref: k
    }), s && /* @__PURE__ */ D.createElement("span", {
      className: Y("".concat(i, "-prefix"), O == null ? void 0 : O.prefix),
      style: x == null ? void 0 : x.prefix
    }, s), $, re);
  }
  if (Mw(e)) {
    var ae = "".concat(i, "-group"), ue = "".concat(ae, "-addon"), de = "".concat(ae, "-wrapper"), ce = Y("".concat(i, "-wrapper"), ae, C == null ? void 0 : C.wrapper, O == null ? void 0 : O.wrapper), ge = Y(de, z({}, "".concat(de, "-disabled"), g), C == null ? void 0 : C.group, O == null ? void 0 : O.groupWrapper);
    $ = /* @__PURE__ */ D.createElement(j, {
      className: ge,
      ref: F
    }, /* @__PURE__ */ D.createElement(I, {
      className: ce
    }, c && /* @__PURE__ */ D.createElement(_, {
      className: ue
    }, c), $, d && /* @__PURE__ */ D.createElement(_, {
      className: ue
    }, d)));
  }
  return /* @__PURE__ */ D.cloneElement($, {
    className: Y((n = $.props) === null || n === void 0 ? void 0 : n.className, f) || null,
    style: B(B({}, (r = $.props) === null || r === void 0 ? void 0 : r.style), v),
    hidden: w
  });
}), jw = ["show"];
function vm(e, t) {
  return u.useMemo(function() {
    var n = {};
    t && (n.show = ke(t) === "object" && t.formatter ? t.formatter : !!t), n = B(B({}, n), e);
    var r = n, a = r.show, o = Ze(r, jw);
    return B(B({}, o), {}, {
      show: !!a,
      showFormatter: typeof a == "function" ? a : void 0,
      strategy: o.strategy || function(i) {
        return i.length;
      }
    });
  }, [e, t]);
}
var Fw = ["autoComplete", "onChange", "onFocus", "onBlur", "onPressEnter", "onKeyDown", "prefixCls", "disabled", "htmlSize", "className", "maxLength", "suffix", "showCount", "count", "type", "classes", "classNames", "styles", "onCompositionStart", "onCompositionEnd"], Dw = /* @__PURE__ */ fn(function(e, t) {
  var n = e.autoComplete, r = e.onChange, a = e.onFocus, o = e.onBlur, i = e.onPressEnter, s = e.onKeyDown, l = e.prefixCls, c = l === void 0 ? "rc-input" : l, d = e.disabled, f = e.htmlSize, v = e.className, g = e.maxLength, p = e.suffix, h = e.showCount, m = e.count, S = e.type, b = S === void 0 ? "text" : S, y = e.classes, w = e.classNames, C = e.styles, O = e.onCompositionStart, E = e.onCompositionEnd, x = Ze(e, Fw), R = rt(!1), T = K(R, 2), M = T[0], j = T[1], I = Me(!1), _ = Me(null), k = Me(null), N = function(se) {
    _.current && Lw(_.current, se);
  }, P = en(e.defaultValue, {
    value: e.value
  }), $ = K(P, 2), F = $[0], L = $[1], V = F == null ? "" : String(F), W = rt(null), U = K(W, 2), G = U[0], Q = U[1], q = vm(m, h), Z = q.max || g, re = q.strategy(V), ae = !!Z && re > Z;
  Uo(t, function() {
    var oe;
    return {
      focus: N,
      blur: function() {
        var we;
        (we = _.current) === null || we === void 0 || we.blur();
      },
      setSelectionRange: function(we, be, ye) {
        var _e;
        (_e = _.current) === null || _e === void 0 || _e.setSelectionRange(we, be, ye);
      },
      select: function() {
        var we;
        (we = _.current) === null || we === void 0 || we.select();
      },
      input: _.current,
      nativeElement: ((oe = k.current) === null || oe === void 0 ? void 0 : oe.nativeElement) || _.current
    };
  }), ot(function() {
    j(function(oe) {
      return oe && d ? !1 : oe;
    });
  }, [d]);
  var ue = function(se, we, be) {
    var ye = we;
    if (!I.current && q.exceedFormatter && q.max && q.strategy(we) > q.max) {
      if (ye = q.exceedFormatter(we, {
        max: q.max
      }), we !== ye) {
        var _e, Ee;
        Q([((_e = _.current) === null || _e === void 0 ? void 0 : _e.selectionStart) || 0, ((Ee = _.current) === null || Ee === void 0 ? void 0 : Ee.selectionEnd) || 0]);
      }
    } else if (be.source === "compositionEnd")
      return;
    L(ye), _.current && ko(_.current, se, r, ye);
  };
  ot(function() {
    if (G) {
      var oe;
      (oe = _.current) === null || oe === void 0 || oe.setSelectionRange.apply(oe, Pe(G));
    }
  }, [G]);
  var de = function(se) {
    ue(se, se.target.value, {
      source: "change"
    });
  }, ce = function(se) {
    I.current = !1, ue(se, se.currentTarget.value, {
      source: "compositionEnd"
    }), E == null || E(se);
  }, ge = function(se) {
    i && se.key === "Enter" && i(se), s == null || s(se);
  }, H = function(se) {
    j(!0), a == null || a(se);
  }, ne = function(se) {
    j(!1), o == null || o(se);
  }, ve = function(se) {
    L(""), N(), _.current && ko(_.current, se, r);
  }, $e = ae && "".concat(c, "-out-of-range"), pe = function() {
    var se = vn(e, [
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
    return /* @__PURE__ */ D.createElement("input", me({
      autoComplete: n
    }, se, {
      onChange: de,
      onFocus: H,
      onBlur: ne,
      onKeyDown: ge,
      className: Y(c, z({}, "".concat(c, "-disabled"), d), w == null ? void 0 : w.input),
      style: C == null ? void 0 : C.input,
      ref: _,
      size: f,
      type: b,
      onCompositionStart: function(be) {
        I.current = !0, O == null || O(be);
      },
      onCompositionEnd: ce
    }));
  }, ie = function() {
    var se = Number(Z) > 0;
    if (p || q.show) {
      var we = q.showFormatter ? q.showFormatter({
        value: V,
        count: re,
        maxLength: Z
      }) : "".concat(re).concat(se ? " / ".concat(Z) : "");
      return /* @__PURE__ */ D.createElement(D.Fragment, null, q.show && /* @__PURE__ */ D.createElement("span", {
        className: Y("".concat(c, "-show-count-suffix"), z({}, "".concat(c, "-show-count-has-suffix"), !!p), w == null ? void 0 : w.count),
        style: B({}, C == null ? void 0 : C.count)
      }, we), p);
    }
    return null;
  };
  return /* @__PURE__ */ D.createElement(fm, me({}, x, {
    prefixCls: c,
    className: Y(v, $e),
    handleReset: ve,
    value: V,
    focused: M,
    triggerFocus: N,
    suffix: ie(),
    disabled: d,
    classes: y,
    classNames: w,
    styles: C
  }), pe());
});
const mm = (e) => {
  let t;
  return typeof e == "object" && (e != null && e.clearIcon) ? t = e : e && (t = {
    clearIcon: /* @__PURE__ */ D.createElement(Hf, null)
  }), t;
};
function zw(e, t) {
  const n = Me([]), r = () => {
    n.current.push(setTimeout(() => {
      var a, o, i, s;
      !((a = e.current) === null || a === void 0) && a.input && ((o = e.current) === null || o === void 0 ? void 0 : o.input.getAttribute("type")) === "password" && (!((i = e.current) === null || i === void 0) && i.input.hasAttribute("value")) && ((s = e.current) === null || s === void 0 || s.input.removeAttribute("value"));
    }));
  };
  return ot(() => (r(), () => n.current.forEach((a) => {
    a && clearTimeout(a);
  })), []), r;
}
function Vw(e) {
  return !!(e.prefix || e.suffix || e.allowClear || e.showCount);
}
var Bw = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
    t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
function kw(e, t) {
  if (!e)
    return;
  e.focus(t);
  const {
    cursor: n
  } = t || {};
  if (n) {
    const r = e.value.length;
    switch (n) {
      case "start":
        e.setSelectionRange(0, 0);
        break;
      case "end":
        e.setSelectionRange(r, r);
        break;
      default:
        e.setSelectionRange(0, r);
    }
  }
}
const Hw = /* @__PURE__ */ fn((e, t) => {
  var n;
  const {
    prefixCls: r,
    bordered: a = !0,
    status: o,
    size: i,
    disabled: s,
    onBlur: l,
    onFocus: c,
    suffix: d,
    allowClear: f,
    addonAfter: v,
    addonBefore: g,
    className: p,
    style: h,
    styles: m,
    rootClassName: S,
    onChange: b,
    classNames: y,
    variant: w
  } = e, C = Bw(e, ["prefixCls", "bordered", "status", "size", "disabled", "onBlur", "onFocus", "suffix", "allowClear", "addonAfter", "addonBefore", "className", "style", "styles", "rootClassName", "onChange", "classNames", "variant"]);
  if (process.env.NODE_ENV !== "production") {
    const {
      deprecated: H
    } = zt("Input");
    H(!("bordered" in e), "bordered", "variant");
  }
  const {
    getPrefixCls: O,
    direction: E,
    input: x
  } = D.useContext(vt), R = O("input", r), T = Me(null), M = za(R), [j, I, _] = nm(R, M), {
    compactSize: k,
    compactItemClassnames: N
  } = Xf(R, E), P = Ba((H) => {
    var ne;
    return (ne = i ?? k) !== null && ne !== void 0 ? ne : H;
  }), $ = D.useContext(Gr), F = s ?? $, {
    status: L,
    hasFeedback: V,
    feedbackIcon: W
  } = Nt(La), U = Rv(L, o), G = Vw(e) || !!V, Q = Me(G);
  if (process.env.NODE_ENV !== "production") {
    const H = zt("Input");
    ot(() => {
      var ne;
      G && !Q.current && process.env.NODE_ENV !== "production" && H(document.activeElement === ((ne = T.current) === null || ne === void 0 ? void 0 : ne.input), "usage", "When Input is focused, dynamic add or remove prefix / suffix will make it lose focus caused by dom structure change. Read more: https://ant.design/components/input/#FAQ"), Q.current = G;
    }, [G]);
  }
  const q = zw(T), Z = (H) => {
    q(), l == null || l(H);
  }, re = (H) => {
    q(), c == null || c(H);
  }, ae = (H) => {
    q(), b == null || b(H);
  }, ue = (V || d) && /* @__PURE__ */ D.createElement(D.Fragment, null, d, V && W), de = mm(f ?? (x == null ? void 0 : x.allowClear)), [ce, ge] = Pv("input", w, a);
  return j(/* @__PURE__ */ D.createElement(Dw, Object.assign({
    ref: An(t, T),
    prefixCls: R,
    autoComplete: x == null ? void 0 : x.autoComplete
  }, C, {
    disabled: F,
    onBlur: Z,
    onFocus: re,
    style: Object.assign(Object.assign({}, x == null ? void 0 : x.style), h),
    styles: Object.assign(Object.assign({}, x == null ? void 0 : x.styles), m),
    suffix: ue,
    allowClear: de,
    className: Y(p, S, _, M, N, x == null ? void 0 : x.className),
    onChange: ae,
    addonBefore: g && /* @__PURE__ */ D.createElement(Vs, {
      form: !0,
      space: !0
    }, g),
    addonAfter: v && /* @__PURE__ */ D.createElement(Vs, {
      form: !0,
      space: !0
    }, v),
    classNames: Object.assign(Object.assign(Object.assign({}, y), x == null ? void 0 : x.classNames), {
      input: Y({
        [`${R}-sm`]: P === "small",
        [`${R}-lg`]: P === "large",
        [`${R}-rtl`]: E === "rtl"
      }, y == null ? void 0 : y.input, (n = x == null ? void 0 : x.classNames) === null || n === void 0 ? void 0 : n.input, I),
      variant: Y({
        [`${R}-${ce}`]: ge
      }, ks(R, U)),
      affixWrapper: Y({
        [`${R}-affix-wrapper-sm`]: P === "small",
        [`${R}-affix-wrapper-lg`]: P === "large",
        [`${R}-affix-wrapper-rtl`]: E === "rtl"
      }, I),
      wrapper: Y({
        [`${R}-group-rtl`]: E === "rtl"
      }, I),
      groupWrapper: Y({
        [`${R}-group-wrapper-sm`]: P === "small",
        [`${R}-group-wrapper-lg`]: P === "large",
        [`${R}-group-wrapper-rtl`]: E === "rtl",
        [`${R}-group-wrapper-${ce}`]: ge
      }, ks(`${R}-group-wrapper`, U, V), I)
    })
  })));
});
process.env.NODE_ENV !== "production" && (Hw.displayName = "Input");
var Ww = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z" } }] }, name: "eye", theme: "outlined" }, Uw = function(t, n) {
  return /* @__PURE__ */ u.createElement(Tt, me({}, t, {
    ref: n,
    icon: Ww
  }));
}, gm = /* @__PURE__ */ u.forwardRef(Uw);
process.env.NODE_ENV !== "production" && (gm.displayName = "EyeOutlined");
var Kw = `
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
`, Gw = ["letter-spacing", "line-height", "padding-top", "padding-bottom", "font-family", "font-weight", "font-size", "font-variant", "text-rendering", "text-transform", "width", "text-indent", "padding-left", "padding-right", "border-width", "box-sizing", "word-break", "white-space"], zi = {}, un;
function qw(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = e.getAttribute("id") || e.getAttribute("data-reactid") || e.getAttribute("name");
  if (t && zi[n])
    return zi[n];
  var r = window.getComputedStyle(e), a = r.getPropertyValue("box-sizing") || r.getPropertyValue("-moz-box-sizing") || r.getPropertyValue("-webkit-box-sizing"), o = parseFloat(r.getPropertyValue("padding-bottom")) + parseFloat(r.getPropertyValue("padding-top")), i = parseFloat(r.getPropertyValue("border-bottom-width")) + parseFloat(r.getPropertyValue("border-top-width")), s = Gw.map(function(c) {
    return "".concat(c, ":").concat(r.getPropertyValue(c));
  }).join(";"), l = {
    sizingStyle: s,
    paddingSize: o,
    borderSize: i,
    boxSizing: a
  };
  return t && n && (zi[n] = l), l;
}
function Xw(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
  un || (un = document.createElement("textarea"), un.setAttribute("tab-index", "-1"), un.setAttribute("aria-hidden", "true"), document.body.appendChild(un)), e.getAttribute("wrap") ? un.setAttribute("wrap", e.getAttribute("wrap")) : un.removeAttribute("wrap");
  var a = qw(e, t), o = a.paddingSize, i = a.borderSize, s = a.boxSizing, l = a.sizingStyle;
  un.setAttribute("style", "".concat(l, ";").concat(Kw)), un.value = e.value || e.placeholder || "";
  var c = void 0, d = void 0, f, v = un.scrollHeight;
  if (s === "border-box" ? v += i : s === "content-box" && (v -= o), n !== null || r !== null) {
    un.value = " ";
    var g = un.scrollHeight - o;
    n !== null && (c = g * n, s === "border-box" && (c = c + o + i), v = Math.max(c, v)), r !== null && (d = g * r, s === "border-box" && (d = d + o + i), f = v > d ? "" : "hidden", v = Math.min(d, v));
  }
  var p = {
    height: v,
    overflowY: f,
    resize: "none"
  };
  return c && (p.minHeight = c), d && (p.maxHeight = d), p;
}
var Zw = ["prefixCls", "onPressEnter", "defaultValue", "value", "autoSize", "onResize", "className", "style", "disabled", "onChange", "onInternalAutoSize"], Vi = 0, Bi = 1, ki = 2, Yw = /* @__PURE__ */ u.forwardRef(function(e, t) {
  var n = e, r = n.prefixCls;
  n.onPressEnter;
  var a = n.defaultValue, o = n.value, i = n.autoSize, s = n.onResize, l = n.className, c = n.style, d = n.disabled, f = n.onChange, v = n.onInternalAutoSize, g = Ze(n, Zw), p = en(a, {
    value: o,
    postState: function(Q) {
      return Q ?? "";
    }
  }), h = K(p, 2), m = h[0], S = h[1], b = function(Q) {
    S(Q.target.value), f == null || f(Q);
  }, y = u.useRef();
  u.useImperativeHandle(t, function() {
    return {
      textArea: y.current
    };
  });
  var w = u.useMemo(function() {
    return i && ke(i) === "object" ? [i.minRows, i.maxRows] : [];
  }, [i]), C = K(w, 2), O = C[0], E = C[1], x = !!i, R = function() {
    try {
      if (document.activeElement === y.current) {
        var Q = y.current, q = Q.selectionStart, Z = Q.selectionEnd, re = Q.scrollTop;
        y.current.setSelectionRange(q, Z), y.current.scrollTop = re;
      }
    } catch {
    }
  }, T = u.useState(ki), M = K(T, 2), j = M[0], I = M[1], _ = u.useState(), k = K(_, 2), N = k[0], P = k[1], $ = function() {
    I(Vi), process.env.NODE_ENV === "test" && (v == null || v());
  };
  Et(function() {
    x && $();
  }, [o, O, E, x]), Et(function() {
    if (j === Vi)
      I(Bi);
    else if (j === Bi) {
      var G = Xw(y.current, !1, O, E);
      I(ki), P(G);
    } else
      R();
  }, [j]);
  var F = u.useRef(), L = function() {
    Mt.cancel(F.current);
  }, V = function(Q) {
    j === ki && (s == null || s(Q), i && (L(), F.current = Mt(function() {
      $();
    })));
  };
  u.useEffect(function() {
    return L;
  }, []);
  var W = x ? N : null, U = B(B({}, c), W);
  return (j === Vi || j === Bi) && (U.overflowY = "hidden", U.overflowX = "hidden"), /* @__PURE__ */ u.createElement(wn, {
    onResize: V,
    disabled: !(i || s)
  }, /* @__PURE__ */ u.createElement("textarea", me({}, g, {
    ref: y,
    style: U,
    className: Y(r, l, z({}, "".concat(r, "-disabled"), d)),
    disabled: d,
    value: m,
    onChange: b
  })));
}), Qw = ["defaultValue", "value", "onFocus", "onBlur", "onChange", "allowClear", "maxLength", "onCompositionStart", "onCompositionEnd", "suffix", "prefixCls", "showCount", "count", "className", "style", "disabled", "hidden", "classNames", "styles", "onResize", "readOnly"], Jw = /* @__PURE__ */ D.forwardRef(function(e, t) {
  var n, r = e.defaultValue, a = e.value, o = e.onFocus, i = e.onBlur, s = e.onChange, l = e.allowClear, c = e.maxLength, d = e.onCompositionStart, f = e.onCompositionEnd, v = e.suffix, g = e.prefixCls, p = g === void 0 ? "rc-textarea" : g, h = e.showCount, m = e.count, S = e.className, b = e.style, y = e.disabled, w = e.hidden, C = e.classNames, O = e.styles, E = e.onResize, x = e.readOnly, R = Ze(e, Qw), T = en(r, {
    value: a,
    defaultValue: r
  }), M = K(T, 2), j = M[0], I = M[1], _ = j == null ? "" : String(j), k = D.useState(!1), N = K(k, 2), P = N[0], $ = N[1], F = D.useRef(!1), L = D.useState(null), V = K(L, 2), W = V[0], U = V[1], G = Me(null), Q = Me(null), q = function() {
    var Oe;
    return (Oe = Q.current) === null || Oe === void 0 ? void 0 : Oe.textArea;
  }, Z = function() {
    q().focus();
  };
  Uo(t, function() {
    var xe;
    return {
      resizableTextArea: Q.current,
      focus: Z,
      blur: function() {
        q().blur();
      },
      nativeElement: ((xe = G.current) === null || xe === void 0 ? void 0 : xe.nativeElement) || q()
    };
  }), ot(function() {
    $(function(xe) {
      return !y && xe;
    });
  }, [y]);
  var re = D.useState(null), ae = K(re, 2), ue = ae[0], de = ae[1];
  D.useEffect(function() {
    if (ue) {
      var xe;
      (xe = q()).setSelectionRange.apply(xe, Pe(ue));
    }
  }, [ue]);
  var ce = vm(m, h), ge = (n = ce.max) !== null && n !== void 0 ? n : c, H = Number(ge) > 0, ne = ce.strategy(_), ve = !!ge && ne > ge, $e = function(Oe, te) {
    var le = te;
    !F.current && ce.exceedFormatter && ce.max && ce.strategy(te) > ce.max && (le = ce.exceedFormatter(te, {
      max: ce.max
    }), te !== le && de([q().selectionStart || 0, q().selectionEnd || 0])), I(le), ko(Oe.currentTarget, Oe, s, le);
  }, pe = function(Oe) {
    F.current = !0, d == null || d(Oe);
  }, ie = function(Oe) {
    F.current = !1, $e(Oe, Oe.currentTarget.value), f == null || f(Oe);
  }, oe = function(Oe) {
    $e(Oe, Oe.target.value);
  }, se = function(Oe) {
    var te = R.onPressEnter, le = R.onKeyDown;
    Oe.key === "Enter" && te && te(Oe), le == null || le(Oe);
  }, we = function(Oe) {
    $(!0), o == null || o(Oe);
  }, be = function(Oe) {
    $(!1), i == null || i(Oe);
  }, ye = function(Oe) {
    I(""), Z(), ko(q(), Oe, s);
  }, _e = v, Ee;
  ce.show && (ce.showFormatter ? Ee = ce.showFormatter({
    value: _,
    count: ne,
    maxLength: ge
  }) : Ee = "".concat(ne).concat(H ? " / ".concat(ge) : ""), _e = /* @__PURE__ */ D.createElement(D.Fragment, null, _e, /* @__PURE__ */ D.createElement("span", {
    className: Y("".concat(p, "-data-count"), C == null ? void 0 : C.count),
    style: O == null ? void 0 : O.count
  }, Ee)));
  var st = function(Oe) {
    var te;
    E == null || E(Oe), (te = q()) !== null && te !== void 0 && te.style.height && U(!0);
  }, Ye = !R.autoSize && !h && !l;
  return /* @__PURE__ */ D.createElement(fm, {
    ref: G,
    value: _,
    allowClear: l,
    handleReset: ye,
    suffix: _e,
    prefixCls: p,
    classNames: B(B({}, C), {}, {
      affixWrapper: Y(C == null ? void 0 : C.affixWrapper, z(z({}, "".concat(p, "-show-count"), h), "".concat(p, "-textarea-allow-clear"), l))
    }),
    disabled: y,
    focused: P,
    className: Y(S, ve && "".concat(p, "-out-of-range")),
    style: B(B({}, b), W && !Ye ? {
      height: "auto"
    } : {}),
    dataAttrs: {
      affixWrapper: {
        "data-count": typeof Ee == "string" ? Ee : void 0
      }
    },
    hidden: w,
    readOnly: x
  }, /* @__PURE__ */ D.createElement(Yw, me({}, R, {
    maxLength: c,
    onKeyDown: se,
    onChange: oe,
    onFocus: we,
    onBlur: be,
    onCompositionStart: pe,
    onCompositionEnd: ie,
    className: Y(C == null ? void 0 : C.textarea),
    style: B(B({}, O == null ? void 0 : O.textarea), {}, {
      resize: b == null ? void 0 : b.resize
    }),
    disabled: y,
    prefixCls: p,
    onResize: st,
    ref: Q,
    readOnly: x
  })));
}), eE = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
    t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
const pm = /* @__PURE__ */ fn((e, t) => {
  var n, r;
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
    style: g,
    styles: p,
    variant: h
  } = e, m = eE(e, ["prefixCls", "bordered", "size", "disabled", "status", "allowClear", "classNames", "rootClassName", "className", "style", "styles", "variant"]);
  if (process.env.NODE_ENV !== "production") {
    const {
      deprecated: L
    } = zt("TextArea");
    L(!("bordered" in e), "bordered", "variant");
  }
  const {
    getPrefixCls: S,
    direction: b,
    textArea: y
  } = u.useContext(vt), w = Ba(i), C = u.useContext(Gr), O = s ?? C, {
    status: E,
    hasFeedback: x,
    feedbackIcon: R
  } = u.useContext(La), T = Rv(E, l), M = u.useRef(null);
  u.useImperativeHandle(t, () => {
    var L;
    return {
      resizableTextArea: (L = M.current) === null || L === void 0 ? void 0 : L.resizableTextArea,
      focus: (V) => {
        var W, U;
        kw((U = (W = M.current) === null || W === void 0 ? void 0 : W.resizableTextArea) === null || U === void 0 ? void 0 : U.textArea, V);
      },
      blur: () => {
        var V;
        return (V = M.current) === null || V === void 0 ? void 0 : V.blur();
      }
    };
  });
  const j = S("input", a), I = za(j), [_, k, N] = nm(j, I), [P, $] = Pv("textArea", h, o), F = mm(c ?? (y == null ? void 0 : y.allowClear));
  return _(/* @__PURE__ */ u.createElement(Jw, Object.assign({
    autoComplete: y == null ? void 0 : y.autoComplete
  }, m, {
    style: Object.assign(Object.assign({}, y == null ? void 0 : y.style), g),
    styles: Object.assign(Object.assign({}, y == null ? void 0 : y.styles), p),
    disabled: O,
    allowClear: F,
    className: Y(N, I, v, f, y == null ? void 0 : y.className),
    classNames: Object.assign(Object.assign(Object.assign({}, d), y == null ? void 0 : y.classNames), {
      textarea: Y({
        [`${j}-sm`]: w === "small",
        [`${j}-lg`]: w === "large"
      }, k, d == null ? void 0 : d.textarea, (n = y == null ? void 0 : y.classNames) === null || n === void 0 ? void 0 : n.textarea),
      variant: Y({
        [`${j}-${P}`]: $
      }, ks(j, T)),
      affixWrapper: Y(`${j}-textarea-affix-wrapper`, {
        [`${j}-affix-wrapper-rtl`]: b === "rtl",
        [`${j}-affix-wrapper-sm`]: w === "small",
        [`${j}-affix-wrapper-lg`]: w === "large",
        [`${j}-textarea-show-count`]: e.showCount || ((r = e.count) === null || r === void 0 ? void 0 : r.show)
      }, k)
    }),
    prefixCls: j,
    suffix: x && /* @__PURE__ */ u.createElement("span", {
      className: `${j}-textarea-suffix`
    }, R),
    ref: M
  })));
});
function Zu(e) {
  return ["small", "middle", "large"].includes(e);
}
const hm = ["wrap", "nowrap", "wrap-reverse"], bm = ["flex-start", "flex-end", "start", "end", "center", "space-between", "space-around", "space-evenly", "stretch", "normal", "left", "right"], ym = ["center", "start", "end", "flex-start", "flex-end", "self-start", "self-end", "baseline", "normal", "stretch"], tE = (e, t) => {
  const n = t.wrap === !0 ? "wrap" : t.wrap;
  return {
    [`${e}-wrap-${n}`]: n && hm.includes(n)
  };
}, nE = (e, t) => {
  const n = {};
  return ym.forEach((r) => {
    n[`${e}-align-${r}`] = t.align === r;
  }), n[`${e}-align-stretch`] = !t.align && !!t.vertical, n;
}, rE = (e, t) => {
  const n = {};
  return bm.forEach((r) => {
    n[`${e}-justify-${r}`] = t.justify === r;
  }), n;
};
function aE(e, t) {
  return Y(Object.assign(Object.assign(Object.assign({}, tE(e, t)), nE(e, t)), rE(e, t)));
}
const oE = (e) => {
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
}, iE = (e) => {
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
}, sE = (e) => {
  const {
    componentCls: t
  } = e, n = {};
  return hm.forEach((r) => {
    n[`${t}-wrap-${r}`] = {
      flexWrap: r
    };
  }), n;
}, lE = (e) => {
  const {
    componentCls: t
  } = e, n = {};
  return ym.forEach((r) => {
    n[`${t}-align-${r}`] = {
      alignItems: r
    };
  }), n;
}, cE = (e) => {
  const {
    componentCls: t
  } = e, n = {};
  return bm.forEach((r) => {
    n[`${t}-justify-${r}`] = {
      justifyContent: r
    };
  }), n;
}, uE = () => ({}), dE = Rn("Flex", (e) => {
  const {
    paddingXS: t,
    padding: n,
    paddingLG: r
  } = e, a = jt(e, {
    flexGapSM: t,
    flexGap: n,
    flexGapLG: r
  });
  return [oE(a), iE(a), sE(a), lE(a), cE(a)];
}, uE, {
  // Flex component don't apply extra font style
  // https://github.com/ant-design/ant-design/issues/46403
  resetStyle: !1
});
var fE = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
    t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
const Cn = /* @__PURE__ */ D.forwardRef((e, t) => {
  const {
    prefixCls: n,
    rootClassName: r,
    className: a,
    style: o,
    flex: i,
    gap: s,
    children: l,
    vertical: c = !1,
    component: d = "div"
  } = e, f = fE(e, ["prefixCls", "rootClassName", "className", "style", "flex", "gap", "children", "vertical", "component"]), {
    flex: v,
    direction: g,
    getPrefixCls: p
  } = D.useContext(vt), h = p("flex", n), [m, S, b] = dE(h), y = c ?? (v == null ? void 0 : v.vertical), w = Y(a, r, v == null ? void 0 : v.className, h, S, b, aE(h, e), {
    [`${h}-rtl`]: g === "rtl",
    [`${h}-gap-${s}`]: Zu(s),
    [`${h}-vertical`]: y
  }), C = Object.assign(Object.assign({}, v == null ? void 0 : v.style), o);
  return i && (C.flex = i), s && !Zu(s) && (C.gap = s), m(/* @__PURE__ */ D.createElement(d, Object.assign({
    ref: t,
    className: w,
    style: C
  }, vn(f, ["justify", "wrap", "align"])), l));
});
process.env.NODE_ENV !== "production" && (Cn.displayName = "Flex");
function Cm() {
  var e = document.documentElement.clientWidth, t = window.innerHeight || document.documentElement.clientHeight;
  return {
    width: e,
    height: t
  };
}
function vE(e) {
  var t = e.getBoundingClientRect(), n = document.documentElement;
  return {
    left: t.left + (window.pageXOffset || n.scrollLeft) - (n.clientLeft || document.body.clientLeft || 0),
    top: t.top + (window.pageYOffset || n.scrollTop) - (n.clientTop || document.body.clientTop || 0)
  };
}
function zr(e, t, n, r) {
  var a = To.unstable_batchedUpdates ? function(i) {
    To.unstable_batchedUpdates(n, i);
  } : n;
  return e != null && e.addEventListener && e.addEventListener(t, a, r), {
    remove: function() {
      e != null && e.removeEventListener && e.removeEventListener(t, a, r);
    }
  };
}
var Xa = /* @__PURE__ */ u.createContext(null), mE = function(t) {
  var n = t.visible, r = t.maskTransitionName, a = t.getContainer, o = t.prefixCls, i = t.rootClassName, s = t.icons, l = t.countRender, c = t.showSwitch, d = t.showProgress, f = t.current, v = t.transform, g = t.count, p = t.scale, h = t.minScale, m = t.maxScale, S = t.closeIcon, b = t.onSwitchLeft, y = t.onSwitchRight, w = t.onClose, C = t.onZoomIn, O = t.onZoomOut, E = t.onRotateRight, x = t.onRotateLeft, R = t.onFlipX, T = t.onFlipY, M = t.onReset, j = t.toolbarRender, I = t.zIndex, _ = t.image, k = Nt(Xa), N = s.rotateLeft, P = s.rotateRight, $ = s.zoomIn, F = s.zoomOut, L = s.close, V = s.left, W = s.right, U = s.flipX, G = s.flipY, Q = "".concat(o, "-operations-operation");
  u.useEffect(function() {
    var ae = function(de) {
      de.keyCode === Se.ESC && w();
    };
    return n && window.addEventListener("keydown", ae), function() {
      window.removeEventListener("keydown", ae);
    };
  }, [n]);
  var q = [{
    icon: G,
    onClick: T,
    type: "flipY"
  }, {
    icon: U,
    onClick: R,
    type: "flipX"
  }, {
    icon: N,
    onClick: x,
    type: "rotateLeft"
  }, {
    icon: P,
    onClick: E,
    type: "rotateRight"
  }, {
    icon: F,
    onClick: O,
    type: "zoomOut",
    disabled: p <= h
  }, {
    icon: $,
    onClick: C,
    type: "zoomIn",
    disabled: p === m
  }], Z = q.map(function(ae) {
    var ue, de = ae.icon, ce = ae.onClick, ge = ae.type, H = ae.disabled;
    return /* @__PURE__ */ u.createElement("div", {
      className: Y(Q, (ue = {}, z(ue, "".concat(o, "-operations-operation-").concat(ge), !0), z(ue, "".concat(o, "-operations-operation-disabled"), !!H), ue)),
      onClick: ce,
      key: ge
    }, de);
  }), re = /* @__PURE__ */ u.createElement("div", {
    className: "".concat(o, "-operations")
  }, Z);
  return /* @__PURE__ */ u.createElement(Ln, {
    visible: n,
    motionName: r
  }, function(ae) {
    var ue = ae.className, de = ae.style;
    return /* @__PURE__ */ u.createElement(ka, {
      open: !0,
      getContainer: a ?? document.body
    }, /* @__PURE__ */ u.createElement("div", {
      className: Y("".concat(o, "-operations-wrapper"), ue, i),
      style: B(B({}, de), {}, {
        zIndex: I
      })
    }, S === null ? null : /* @__PURE__ */ u.createElement("button", {
      className: "".concat(o, "-close"),
      onClick: w
    }, S || L), c && /* @__PURE__ */ u.createElement(u.Fragment, null, /* @__PURE__ */ u.createElement("div", {
      className: Y("".concat(o, "-switch-left"), z({}, "".concat(o, "-switch-left-disabled"), f === 0)),
      onClick: b
    }, V), /* @__PURE__ */ u.createElement("div", {
      className: Y("".concat(o, "-switch-right"), z({}, "".concat(o, "-switch-right-disabled"), f === g - 1)),
      onClick: y
    }, W)), /* @__PURE__ */ u.createElement("div", {
      className: "".concat(o, "-footer")
    }, d && /* @__PURE__ */ u.createElement("div", {
      className: "".concat(o, "-progress")
    }, l ? l(f + 1, g) : "".concat(f + 1, " / ").concat(g)), j ? j(re, B(B({
      icons: {
        flipYIcon: Z[0],
        flipXIcon: Z[1],
        rotateLeftIcon: Z[2],
        rotateRightIcon: Z[3],
        zoomOutIcon: Z[4],
        zoomInIcon: Z[5]
      },
      actions: {
        onFlipY: T,
        onFlipX: R,
        onRotateLeft: x,
        onRotateRight: E,
        onZoomOut: O,
        onZoomIn: C,
        onReset: M,
        onClose: w
      },
      transform: v
    }, k ? {
      current: f,
      total: g
    } : {}), {}, {
      image: _
    })) : re)));
  });
}, mo = {
  x: 0,
  y: 0,
  rotate: 0,
  scale: 1,
  flipX: !1,
  flipY: !1
};
function gE(e, t, n, r) {
  var a = Me(null), o = Me([]), i = rt(mo), s = K(i, 2), l = s[0], c = s[1], d = function(p) {
    c(mo), Wr(mo, l) || r == null || r({
      transform: mo,
      action: p
    });
  }, f = function(p, h) {
    a.current === null && (o.current = [], a.current = Mt(function() {
      c(function(m) {
        var S = m;
        return o.current.forEach(function(b) {
          S = B(B({}, S), b);
        }), a.current = null, r == null || r({
          transform: S,
          action: h
        }), S;
      });
    })), o.current.push(B(B({}, l), p));
  }, v = function(p, h, m, S, b) {
    var y = e.current, w = y.width, C = y.height, O = y.offsetWidth, E = y.offsetHeight, x = y.offsetLeft, R = y.offsetTop, T = p, M = l.scale * p;
    M > n ? (M = n, T = n / l.scale) : M < t && (M = b ? M : t, T = M / l.scale);
    var j = m ?? innerWidth / 2, I = S ?? innerHeight / 2, _ = T - 1, k = _ * w * 0.5, N = _ * C * 0.5, P = _ * (j - l.x - x), $ = _ * (I - l.y - R), F = l.x - (P - k), L = l.y - ($ - N);
    if (p < 1 && M === 1) {
      var V = O * M, W = E * M, U = Cm(), G = U.width, Q = U.height;
      V <= G && W <= Q && (F = 0, L = 0);
    }
    f({
      x: F,
      y: L,
      scale: M
    }, h);
  };
  return {
    transform: l,
    resetTransform: d,
    updateTransform: f,
    dispatchZoomChange: v
  };
}
function Yu(e, t, n, r) {
  var a = t + n, o = (n - r) / 2;
  if (n > r) {
    if (t > 0)
      return z({}, e, o);
    if (t < 0 && a < r)
      return z({}, e, -o);
  } else if (t < 0 || a > r)
    return z({}, e, t < 0 ? o : -o);
  return {};
}
function Sm(e, t, n, r) {
  var a = Cm(), o = a.width, i = a.height, s = null;
  return e <= o && t <= i ? s = {
    x: 0,
    y: 0
  } : (e > o || t > i) && (s = B(B({}, Yu("x", n, e, o)), Yu("y", r, t, i))), s;
}
var Vr = 1, pE = 1;
function hE(e, t, n, r, a, o, i) {
  var s = a.rotate, l = a.scale, c = a.x, d = a.y, f = rt(!1), v = K(f, 2), g = v[0], p = v[1], h = Me({
    diffX: 0,
    diffY: 0,
    transformX: 0,
    transformY: 0
  }), m = function(C) {
    !t || C.button !== 0 || (C.preventDefault(), C.stopPropagation(), h.current = {
      diffX: C.pageX - c,
      diffY: C.pageY - d,
      transformX: c,
      transformY: d
    }, p(!0));
  }, S = function(C) {
    n && g && o({
      x: C.pageX - h.current.diffX,
      y: C.pageY - h.current.diffY
    }, "move");
  }, b = function() {
    if (n && g) {
      p(!1);
      var C = h.current, O = C.transformX, E = C.transformY, x = c !== O && d !== E;
      if (!x) return;
      var R = e.current.offsetWidth * l, T = e.current.offsetHeight * l, M = e.current.getBoundingClientRect(), j = M.left, I = M.top, _ = s % 180 !== 0, k = Sm(_ ? T : R, _ ? R : T, j, I);
      k && o(B({}, k), "dragRebound");
    }
  }, y = function(C) {
    if (!(!n || C.deltaY == 0)) {
      var O = Math.abs(C.deltaY / 100), E = Math.min(O, pE), x = Vr + E * r;
      C.deltaY > 0 && (x = Vr / x), i(x, "wheel", C.clientX, C.clientY);
    }
  };
  return ot(function() {
    var w, C, O, E;
    if (t) {
      O = zr(window, "mouseup", b, !1), E = zr(window, "mousemove", S, !1);
      try {
        window.top !== window.self && (w = zr(window.top, "mouseup", b, !1), C = zr(window.top, "mousemove", S, !1));
      } catch (x) {
        Kn(!1, "[rc-image] ".concat(x));
      }
    }
    return function() {
      var x, R, T, M;
      (x = O) === null || x === void 0 || x.remove(), (R = E) === null || R === void 0 || R.remove(), (T = w) === null || T === void 0 || T.remove(), (M = C) === null || M === void 0 || M.remove();
    };
  }, [n, g, c, d, s, t]), {
    isMoving: g,
    onMouseDown: m,
    onMouseMove: S,
    onMouseUp: b,
    onWheel: y
  };
}
function bE(e) {
  return new Promise(function(t) {
    var n = document.createElement("img");
    n.onerror = function() {
      return t(!1);
    }, n.onload = function() {
      return t(!0);
    }, n.src = e;
  });
}
function wm(e) {
  var t = e.src, n = e.isCustomPlaceholder, r = e.fallback, a = rt(n ? "loading" : "normal"), o = K(a, 2), i = o[0], s = o[1], l = Me(!1), c = i === "error";
  ot(function() {
    var g = !0;
    return bE(t).then(function(p) {
      !p && g && s("error");
    }), function() {
      g = !1;
    };
  }, [t]), ot(function() {
    n && !l.current ? s("loading") : c && s("normal");
  }, [t]);
  var d = function() {
    s("normal");
  }, f = function(p) {
    l.current = !1, i === "loading" && p !== null && p !== void 0 && p.complete && (p.naturalWidth || p.naturalHeight) && (l.current = !0, d());
  }, v = c && r ? {
    src: r
  } : {
    onLoad: d,
    src: t
  };
  return [f, v, i];
}
function Ho(e, t) {
  var n = e.x - t.x, r = e.y - t.y;
  return Math.hypot(n, r);
}
function yE(e, t, n, r) {
  var a = Ho(e, n), o = Ho(t, r);
  if (a === 0 && o === 0)
    return [e.x, e.y];
  var i = a / (a + o), s = e.x + i * (t.x - e.x), l = e.y + i * (t.y - e.y);
  return [s, l];
}
function CE(e, t, n, r, a, o, i) {
  var s = a.rotate, l = a.scale, c = a.x, d = a.y, f = rt(!1), v = K(f, 2), g = v[0], p = v[1], h = Me({
    point1: {
      x: 0,
      y: 0
    },
    point2: {
      x: 0,
      y: 0
    },
    eventType: "none"
  }), m = function(C) {
    h.current = B(B({}, h.current), C);
  }, S = function(C) {
    if (t) {
      C.stopPropagation(), p(!0);
      var O = C.touches, E = O === void 0 ? [] : O;
      E.length > 1 ? m({
        point1: {
          x: E[0].clientX,
          y: E[0].clientY
        },
        point2: {
          x: E[1].clientX,
          y: E[1].clientY
        },
        eventType: "touchZoom"
      }) : m({
        point1: {
          x: E[0].clientX - c,
          y: E[0].clientY - d
        },
        eventType: "move"
      });
    }
  }, b = function(C) {
    var O = C.touches, E = O === void 0 ? [] : O, x = h.current, R = x.point1, T = x.point2, M = x.eventType;
    if (E.length > 1 && M === "touchZoom") {
      var j = {
        x: E[0].clientX,
        y: E[0].clientY
      }, I = {
        x: E[1].clientX,
        y: E[1].clientY
      }, _ = yE(R, T, j, I), k = K(_, 2), N = k[0], P = k[1], $ = Ho(j, I) / Ho(R, T);
      i($, "touchZoom", N, P, !0), m({
        point1: j,
        point2: I,
        eventType: "touchZoom"
      });
    } else M === "move" && (o({
      x: E[0].clientX - R.x,
      y: E[0].clientY - R.y
    }, "move"), m({
      eventType: "move"
    }));
  }, y = function() {
    if (n) {
      if (g && p(!1), m({
        eventType: "none"
      }), r > l)
        return o({
          x: 0,
          y: 0,
          scale: r
        }, "touchZoom");
      var C = e.current.offsetWidth * l, O = e.current.offsetHeight * l, E = e.current.getBoundingClientRect(), x = E.left, R = E.top, T = s % 180 !== 0, M = Sm(T ? O : C, T ? C : O, x, R);
      M && o(B({}, M), "dragRebound");
    }
  };
  return ot(function() {
    var w;
    return n && t && (w = zr(window, "touchmove", function(C) {
      return C.preventDefault();
    }, {
      passive: !1
    })), function() {
      var C;
      (C = w) === null || C === void 0 || C.remove();
    };
  }, [n, t]), {
    isTouching: g,
    onTouchStart: S,
    onTouchMove: b,
    onTouchEnd: y
  };
}
var SE = ["fallback", "src", "imgRef"], wE = ["prefixCls", "src", "alt", "imageInfo", "fallback", "movable", "onClose", "visible", "icons", "rootClassName", "closeIcon", "getContainer", "current", "count", "countRender", "scaleStep", "minScale", "maxScale", "transitionName", "maskTransitionName", "imageRender", "imgCommonProps", "toolbarRender", "onTransform", "onChange"], EE = function(t) {
  var n = t.fallback, r = t.src, a = t.imgRef, o = Ze(t, SE), i = wm({
    src: r,
    fallback: n
  }), s = K(i, 2), l = s[0], c = s[1];
  return /* @__PURE__ */ D.createElement("img", me({
    ref: function(f) {
      a.current = f, l(f);
    }
  }, o, c));
}, Em = function(t) {
  var n = t.prefixCls, r = t.src, a = t.alt, o = t.imageInfo, i = t.fallback, s = t.movable, l = s === void 0 ? !0 : s, c = t.onClose, d = t.visible, f = t.icons, v = f === void 0 ? {} : f, g = t.rootClassName, p = t.closeIcon, h = t.getContainer, m = t.current, S = m === void 0 ? 0 : m, b = t.count, y = b === void 0 ? 1 : b, w = t.countRender, C = t.scaleStep, O = C === void 0 ? 0.5 : C, E = t.minScale, x = E === void 0 ? 1 : E, R = t.maxScale, T = R === void 0 ? 50 : R, M = t.transitionName, j = M === void 0 ? "zoom" : M, I = t.maskTransitionName, _ = I === void 0 ? "fade" : I, k = t.imageRender, N = t.imgCommonProps, P = t.toolbarRender, $ = t.onTransform, F = t.onChange, L = Ze(t, wE), V = Me(), W = Nt(Xa), U = W && y > 1, G = W && y >= 1, Q = rt(!0), q = K(Q, 2), Z = q[0], re = q[1], ae = gE(V, x, T, $), ue = ae.transform, de = ae.resetTransform, ce = ae.updateTransform, ge = ae.dispatchZoomChange, H = hE(V, l, d, O, ue, ce, ge), ne = H.isMoving, ve = H.onMouseDown, $e = H.onWheel, pe = CE(V, l, d, x, ue, ce, ge), ie = pe.isTouching, oe = pe.onTouchStart, se = pe.onTouchMove, we = pe.onTouchEnd, be = ue.rotate, ye = ue.scale, _e = Y(z({}, "".concat(n, "-moving"), ne));
  ot(function() {
    Z || re(!0);
  }, [Z]);
  var Ee = function() {
    de("close");
  }, st = function() {
    ge(Vr + O, "zoomIn");
  }, Ye = function() {
    ge(Vr / (Vr + O), "zoomOut");
  }, xe = function() {
    ce({
      rotate: be + 90
    }, "rotateRight");
  }, Oe = function() {
    ce({
      rotate: be - 90
    }, "rotateLeft");
  }, te = function() {
    ce({
      flipX: !ue.flipX
    }, "flipX");
  }, le = function() {
    ce({
      flipY: !ue.flipY
    }, "flipY");
  }, Ie = function() {
    de("reset");
  }, Ve = function(Be) {
    Be == null || Be.preventDefault(), Be == null || Be.stopPropagation(), S > 0 && (re(!1), de("prev"), F == null || F(S - 1, S));
  }, Ke = function(Be) {
    Be == null || Be.preventDefault(), Be == null || Be.stopPropagation(), S < y - 1 && (re(!1), de("next"), F == null || F(S + 1, S));
  }, Ue = function(Be) {
    !d || !U || (Be.keyCode === Se.LEFT ? Ve() : Be.keyCode === Se.RIGHT && Ke());
  }, Ae = function(Be) {
    d && (ye !== 1 ? ce({
      x: 0,
      y: 0,
      scale: 1
    }, "doubleClick") : ge(Vr + O, "doubleClick", Be.clientX, Be.clientY));
  };
  ot(function() {
    var je = zr(window, "keydown", Ue, !1);
    return function() {
      je.remove();
    };
  }, [d, U, S]);
  var fe = /* @__PURE__ */ D.createElement(EE, me({}, N, {
    width: t.width,
    height: t.height,
    imgRef: V,
    className: "".concat(n, "-img"),
    alt: a,
    style: {
      transform: "translate3d(".concat(ue.x, "px, ").concat(ue.y, "px, 0) scale3d(").concat(ue.flipX ? "-" : "").concat(ye, ", ").concat(ue.flipY ? "-" : "").concat(ye, ", 1) rotate(").concat(be, "deg)"),
      transitionDuration: (!Z || ie) && "0s"
    },
    fallback: i,
    src: r,
    onWheel: $e,
    onMouseDown: ve,
    onDoubleClick: Ae,
    onTouchStart: oe,
    onTouchMove: se,
    onTouchEnd: we,
    onTouchCancel: we
  })), he = B({
    url: r,
    alt: a
  }, o);
  return /* @__PURE__ */ D.createElement(D.Fragment, null, /* @__PURE__ */ D.createElement(lv, me({
    transitionName: j,
    maskTransitionName: _,
    closable: !1,
    keyboard: !0,
    prefixCls: n,
    onClose: c,
    visible: d,
    classNames: {
      wrapper: _e
    },
    rootClassName: g,
    getContainer: h
  }, L, {
    afterClose: Ee
  }), /* @__PURE__ */ D.createElement("div", {
    className: "".concat(n, "-img-wrapper")
  }, k ? k(fe, B({
    transform: ue,
    image: he
  }, W ? {
    current: S
  } : {})) : fe)), /* @__PURE__ */ D.createElement(mE, {
    visible: d,
    transform: ue,
    maskTransitionName: _,
    closeIcon: p,
    getContainer: h,
    prefixCls: n,
    rootClassName: g,
    icons: v,
    countRender: w,
    showSwitch: U,
    showProgress: G,
    current: S,
    count: y,
    scale: ye,
    minScale: x,
    maxScale: T,
    toolbarRender: P,
    onSwitchLeft: Ve,
    onSwitchRight: Ke,
    onZoomIn: st,
    onZoomOut: Ye,
    onRotateRight: xe,
    onRotateLeft: Oe,
    onFlipX: te,
    onFlipY: le,
    onClose: c,
    onReset: Ie,
    zIndex: L.zIndex !== void 0 ? L.zIndex + 1 : void 0,
    image: he
  }));
}, Zs = ["crossOrigin", "decoding", "draggable", "loading", "referrerPolicy", "sizes", "srcSet", "useMap", "alt"];
function xE(e) {
  var t = u.useState({}), n = K(t, 2), r = n[0], a = n[1], o = u.useCallback(function(s, l) {
    return a(function(c) {
      return B(B({}, c), {}, z({}, s, l));
    }), function() {
      a(function(c) {
        var d = B({}, c);
        return delete d[s], d;
      });
    };
  }, []), i = u.useMemo(function() {
    return e ? e.map(function(s) {
      if (typeof s == "string")
        return {
          data: {
            src: s
          }
        };
      var l = {};
      return Object.keys(s).forEach(function(c) {
        ["src"].concat(Pe(Zs)).includes(c) && (l[c] = s[c]);
      }), {
        data: l
      };
    }) : Object.keys(r).reduce(function(s, l) {
      var c = r[l], d = c.canPreview, f = c.data;
      return d && s.push({
        data: f,
        id: l
      }), s;
    }, []);
  }, [e, r]);
  return [i, o, !!e];
}
var $E = ["visible", "onVisibleChange", "getContainer", "current", "movable", "minScale", "maxScale", "countRender", "closeIcon", "onChange", "onTransform", "toolbarRender", "imageRender"], OE = ["src"], RE = function(t) {
  var n, r = t.previewPrefixCls, a = r === void 0 ? "rc-image-preview" : r, o = t.children, i = t.icons, s = i === void 0 ? {} : i, l = t.items, c = t.preview, d = t.fallback, f = ke(c) === "object" ? c : {}, v = f.visible, g = f.onVisibleChange, p = f.getContainer, h = f.current, m = f.movable, S = f.minScale, b = f.maxScale, y = f.countRender, w = f.closeIcon, C = f.onChange, O = f.onTransform, E = f.toolbarRender, x = f.imageRender, R = Ze(f, $E), T = xE(l), M = K(T, 3), j = M[0], I = M[1], _ = M[2], k = en(0, {
    value: h
  }), N = K(k, 2), P = N[0], $ = N[1], F = rt(!1), L = K(F, 2), V = L[0], W = L[1], U = ((n = j[P]) === null || n === void 0 ? void 0 : n.data) || {}, G = U.src, Q = Ze(U, OE), q = en(!!v, {
    value: v,
    onChange: function(ie, oe) {
      g == null || g(ie, oe, P);
    }
  }), Z = K(q, 2), re = Z[0], ae = Z[1], ue = rt(null), de = K(ue, 2), ce = de[0], ge = de[1], H = u.useCallback(function(pe, ie, oe, se) {
    var we = _ ? j.findIndex(function(be) {
      return be.data.src === ie;
    }) : j.findIndex(function(be) {
      return be.id === pe;
    });
    $(we < 0 ? 0 : we), ae(!0), ge({
      x: oe,
      y: se
    }), W(!0);
  }, [j, _]);
  u.useEffect(function() {
    re ? V || $(0) : W(!1);
  }, [re]);
  var ne = function(ie, oe) {
    $(ie), C == null || C(ie, oe);
  }, ve = function() {
    ae(!1), ge(null);
  }, $e = u.useMemo(function() {
    return {
      register: I,
      onPreview: H
    };
  }, [I, H]);
  return /* @__PURE__ */ u.createElement(Xa.Provider, {
    value: $e
  }, o, /* @__PURE__ */ u.createElement(Em, me({
    "aria-hidden": !re,
    movable: m,
    visible: re,
    prefixCls: a,
    closeIcon: w,
    onClose: ve,
    mousePosition: ce,
    imgCommonProps: Q,
    src: G,
    fallback: d,
    icons: s,
    minScale: S,
    maxScale: b,
    getContainer: p,
    current: P,
    count: j.length,
    countRender: y,
    onTransform: O,
    toolbarRender: E,
    imageRender: x,
    onChange: ne
  }, R)));
}, Qu = 0;
function PE(e, t) {
  var n = u.useState(function() {
    return Qu += 1, String(Qu);
  }), r = K(n, 1), a = r[0], o = u.useContext(Xa), i = {
    data: t,
    canPreview: e
  };
  return u.useEffect(function() {
    if (o)
      return o.register(a, i);
  }, []), u.useEffect(function() {
    o && o.register(a, i);
  }, [e, t]), a;
}
var _E = ["src", "alt", "onPreviewClose", "prefixCls", "previewPrefixCls", "placeholder", "fallback", "width", "height", "style", "preview", "className", "onClick", "onError", "wrapperClassName", "wrapperStyle", "rootClassName"], TE = ["src", "visible", "onVisibleChange", "getContainer", "mask", "maskClassName", "movable", "icons", "scaleStep", "minScale", "maxScale", "imageRender", "toolbarRender"], di = function(t) {
  var n = t.src, r = t.alt, a = t.onPreviewClose, o = t.prefixCls, i = o === void 0 ? "rc-image" : o, s = t.previewPrefixCls, l = s === void 0 ? "".concat(i, "-preview") : s, c = t.placeholder, d = t.fallback, f = t.width, v = t.height, g = t.style, p = t.preview, h = p === void 0 ? !0 : p, m = t.className, S = t.onClick, b = t.onError, y = t.wrapperClassName, w = t.wrapperStyle, C = t.rootClassName, O = Ze(t, _E), E = c && c !== !0, x = ke(h) === "object" ? h : {}, R = x.src, T = x.visible, M = T === void 0 ? void 0 : T, j = x.onVisibleChange, I = j === void 0 ? a : j, _ = x.getContainer, k = _ === void 0 ? void 0 : _, N = x.mask, P = x.maskClassName, $ = x.movable, F = x.icons, L = x.scaleStep, V = x.minScale, W = x.maxScale, U = x.imageRender, G = x.toolbarRender, Q = Ze(x, TE), q = R ?? n, Z = en(!!M, {
    value: M,
    onChange: I
  }), re = K(Z, 2), ae = re[0], ue = re[1], de = wm({
    src: n,
    isCustomPlaceholder: E,
    fallback: d
  }), ce = K(de, 3), ge = ce[0], H = ce[1], ne = ce[2], ve = rt(null), $e = K(ve, 2), pe = $e[0], ie = $e[1], oe = Nt(Xa), se = !!h, we = function() {
    ue(!1), ie(null);
  }, be = Y(i, y, C, z({}, "".concat(i, "-error"), ne === "error")), ye = $n(function() {
    var Ye = {};
    return Zs.forEach(function(xe) {
      t[xe] !== void 0 && (Ye[xe] = t[xe]);
    }), Ye;
  }, Zs.map(function(Ye) {
    return t[Ye];
  })), _e = $n(function() {
    return B(B({}, ye), {}, {
      src: q
    });
  }, [q, ye]), Ee = PE(se, _e), st = function(xe) {
    var Oe = vE(xe.target), te = Oe.left, le = Oe.top;
    oe ? oe.onPreview(Ee, q, te, le) : (ie({
      x: te,
      y: le
    }), ue(!0)), S == null || S(xe);
  };
  return /* @__PURE__ */ u.createElement(u.Fragment, null, /* @__PURE__ */ u.createElement("div", me({}, O, {
    className: be,
    onClick: se ? st : S,
    style: B({
      width: f,
      height: v
    }, w)
  }), /* @__PURE__ */ u.createElement("img", me({}, ye, {
    className: Y("".concat(i, "-img"), z({}, "".concat(i, "-img-placeholder"), c === !0), m),
    style: B({
      height: v
    }, g),
    ref: ge
  }, H, {
    width: f,
    height: v,
    onError: b
  })), ne === "loading" && /* @__PURE__ */ u.createElement("div", {
    "aria-hidden": "true",
    className: "".concat(i, "-placeholder")
  }, c), N && se && /* @__PURE__ */ u.createElement("div", {
    className: Y("".concat(i, "-mask"), P),
    style: {
      display: (g == null ? void 0 : g.display) === "none" ? "none" : void 0
    }
  }, N)), !oe && se && /* @__PURE__ */ u.createElement(Em, me({
    "aria-hidden": !ae,
    visible: ae,
    prefixCls: l,
    onClose: we,
    mousePosition: pe,
    src: q,
    alt: r,
    imageInfo: {
      width: f,
      height: v
    },
    fallback: d,
    getContainer: k,
    icons: F,
    movable: $,
    scaleStep: L,
    minScale: V,
    maxScale: W,
    rootClassName: C,
    imageRender: U,
    imgCommonProps: ye,
    toolbarRender: G
  }, Q)));
};
di.PreviewGroup = RE;
process.env.NODE_ENV !== "production" && (di.displayName = "Image");
var IE = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "defs", attrs: {}, children: [{ tag: "style", attrs: {} }] }, { tag: "path", attrs: { d: "M672 418H144c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32zm-44 402H188V494h440v326z" } }, { tag: "path", attrs: { d: "M819.3 328.5c-78.8-100.7-196-153.6-314.6-154.2l-.2-64c0-6.5-7.6-10.1-12.6-6.1l-128 101c-4 3.1-3.9 9.1 0 12.3L492 318.6c5.1 4 12.7.4 12.6-6.1v-63.9c12.9.1 25.9.9 38.8 2.5 42.1 5.2 82.1 18.2 119 38.7 38.1 21.2 71.2 49.7 98.4 84.3 27.1 34.7 46.7 73.7 58.1 115.8a325.95 325.95 0 016.5 140.9h74.9c14.8-103.6-11.3-213-81-302.3z" } }] }, name: "rotate-left", theme: "outlined" }, NE = function(t, n) {
  return /* @__PURE__ */ u.createElement(Tt, me({}, t, {
    ref: n,
    icon: IE
  }));
}, xm = /* @__PURE__ */ u.forwardRef(NE);
process.env.NODE_ENV !== "production" && (xm.displayName = "RotateLeftOutlined");
var ME = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "defs", attrs: {}, children: [{ tag: "style", attrs: {} }] }, { tag: "path", attrs: { d: "M480.5 251.2c13-1.6 25.9-2.4 38.8-2.5v63.9c0 6.5 7.5 10.1 12.6 6.1L660 217.6c4-3.2 4-9.2 0-12.3l-128-101c-5.1-4-12.6-.4-12.6 6.1l-.2 64c-118.6.5-235.8 53.4-314.6 154.2A399.75 399.75 0 00123.5 631h74.9c-.9-5.3-1.7-10.7-2.4-16.1-5.1-42.1-2.1-84.1 8.9-124.8 11.4-42.2 31-81.1 58.1-115.8 27.2-34.7 60.3-63.2 98.4-84.3 37-20.6 76.9-33.6 119.1-38.8z" } }, { tag: "path", attrs: { d: "M880 418H352c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32zm-44 402H396V494h440v326z" } }] }, name: "rotate-right", theme: "outlined" }, AE = function(t, n) {
  return /* @__PURE__ */ u.createElement(Tt, me({}, t, {
    ref: n,
    icon: ME
  }));
}, $m = /* @__PURE__ */ u.forwardRef(AE);
process.env.NODE_ENV !== "production" && ($m.displayName = "RotateRightOutlined");
var LE = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M847.9 592H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h605.2L612.9 851c-4.1 5.2-.4 13 6.3 13h72.5c4.9 0 9.5-2.2 12.6-6.1l168.8-214.1c16.5-21 1.6-51.8-25.2-51.8zM872 356H266.8l144.3-183c4.1-5.2.4-13-6.3-13h-72.5c-4.9 0-9.5 2.2-12.6 6.1L150.9 380.2c-16.5 21-1.6 51.8 25.1 51.8h696c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z" } }] }, name: "swap", theme: "outlined" }, jE = function(t, n) {
  return /* @__PURE__ */ u.createElement(Tt, me({}, t, {
    ref: n,
    icon: LE
  }));
}, Ys = /* @__PURE__ */ u.forwardRef(jE);
process.env.NODE_ENV !== "production" && (Ys.displayName = "SwapOutlined");
var FE = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M637 443H519V309c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v134H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h118v134c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V519h118c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm284 424L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z" } }] }, name: "zoom-in", theme: "outlined" }, DE = function(t, n) {
  return /* @__PURE__ */ u.createElement(Tt, me({}, t, {
    ref: n,
    icon: FE
  }));
}, Om = /* @__PURE__ */ u.forwardRef(DE);
process.env.NODE_ENV !== "production" && (Om.displayName = "ZoomInOutlined");
var zE = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M637 443H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h312c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm284 424L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z" } }] }, name: "zoom-out", theme: "outlined" }, VE = function(t, n) {
  return /* @__PURE__ */ u.createElement(Tt, me({}, t, {
    ref: n,
    icon: zE
  }));
}, Rm = /* @__PURE__ */ u.forwardRef(VE);
process.env.NODE_ENV !== "production" && (Rm.displayName = "ZoomOutOutlined");
const Qs = (e) => ({
  position: e || "absolute",
  inset: 0
}), BE = (e) => {
  const {
    iconCls: t,
    motionDurationSlow: n,
    paddingXXS: r,
    marginXXS: a,
    prefixCls: o,
    colorTextLightSolid: i
  } = e;
  return {
    position: "absolute",
    inset: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: i,
    background: new _t("#000").setAlpha(0.5).toRgbString(),
    cursor: "pointer",
    opacity: 0,
    transition: `opacity ${n}`,
    [`.${o}-mask-info`]: Object.assign(Object.assign({}, ei), {
      padding: `0 ${ee(r)}`,
      [t]: {
        marginInlineEnd: a,
        svg: {
          verticalAlign: "baseline"
        }
      }
    })
  };
}, kE = (e) => {
  const {
    previewCls: t,
    modalMaskBg: n,
    paddingSM: r,
    marginXL: a,
    margin: o,
    paddingLG: i,
    previewOperationColorDisabled: s,
    previewOperationHoverColor: l,
    motionDurationSlow: c,
    iconCls: d,
    colorTextLightSolid: f
  } = e, v = new _t(n).setAlpha(0.1), g = v.clone().setAlpha(0.2);
  return {
    [`${t}-footer`]: {
      position: "fixed",
      bottom: a,
      left: {
        _skip_check_: !0,
        value: 0
      },
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      color: e.previewOperationColor
    },
    [`${t}-progress`]: {
      marginBottom: o
    },
    [`${t}-close`]: {
      position: "fixed",
      top: a,
      right: {
        _skip_check_: !0,
        value: a
      },
      display: "flex",
      color: f,
      backgroundColor: v.toRgbString(),
      borderRadius: "50%",
      padding: r,
      outline: 0,
      border: 0,
      cursor: "pointer",
      transition: `all ${c}`,
      "&:hover": {
        backgroundColor: g.toRgbString()
      },
      [`& > ${d}`]: {
        fontSize: e.previewOperationSize
      }
    },
    [`${t}-operations`]: {
      display: "flex",
      alignItems: "center",
      padding: `0 ${ee(i)}`,
      backgroundColor: v.toRgbString(),
      borderRadius: 100,
      "&-operation": {
        marginInlineStart: r,
        padding: r,
        cursor: "pointer",
        transition: `all ${c}`,
        userSelect: "none",
        [`&:not(${t}-operations-operation-disabled):hover > ${d}`]: {
          color: l
        },
        "&-disabled": {
          color: s,
          cursor: "not-allowed"
        },
        "&:first-of-type": {
          marginInlineStart: 0
        },
        [`& > ${d}`]: {
          fontSize: e.previewOperationSize
        }
      }
    }
  };
}, HE = (e) => {
  const {
    modalMaskBg: t,
    iconCls: n,
    previewOperationColorDisabled: r,
    previewCls: a,
    zIndexPopup: o,
    motionDurationSlow: i
  } = e, s = new _t(t).setAlpha(0.1), l = s.clone().setAlpha(0.2);
  return {
    [`${a}-switch-left, ${a}-switch-right`]: {
      position: "fixed",
      insetBlockStart: "50%",
      zIndex: e.calc(o).add(1).equal(),
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: e.imagePreviewSwitchSize,
      height: e.imagePreviewSwitchSize,
      marginTop: e.calc(e.imagePreviewSwitchSize).mul(-1).div(2).equal(),
      color: e.previewOperationColor,
      background: s.toRgbString(),
      borderRadius: "50%",
      transform: "translateY(-50%)",
      cursor: "pointer",
      transition: `all ${i}`,
      userSelect: "none",
      "&:hover": {
        background: l.toRgbString()
      },
      "&-disabled": {
        "&, &:hover": {
          color: r,
          background: "transparent",
          cursor: "not-allowed",
          [`> ${n}`]: {
            cursor: "not-allowed"
          }
        }
      },
      [`> ${n}`]: {
        fontSize: e.previewOperationSize
      }
    },
    [`${a}-switch-left`]: {
      insetInlineStart: e.marginSM
    },
    [`${a}-switch-right`]: {
      insetInlineEnd: e.marginSM
    }
  };
}, WE = (e) => {
  const {
    motionEaseOut: t,
    previewCls: n,
    motionDurationSlow: r,
    componentCls: a
  } = e;
  return [
    {
      [`${a}-preview-root`]: {
        [n]: {
          height: "100%",
          textAlign: "center",
          pointerEvents: "none"
        },
        [`${n}-body`]: Object.assign(Object.assign({}, Qs()), {
          overflow: "hidden"
        }),
        [`${n}-img`]: {
          maxWidth: "100%",
          maxHeight: "70%",
          verticalAlign: "middle",
          transform: "scale3d(1, 1, 1)",
          cursor: "grab",
          transition: `transform ${r} ${t} 0s`,
          userSelect: "none",
          "&-wrapper": Object.assign(Object.assign({}, Qs()), {
            transition: `transform ${r} ${t} 0s`,
            // https://github.com/ant-design/ant-design/issues/39913
            // TailwindCSS will reset img default style.
            // Let's set back.
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            "& > *": {
              pointerEvents: "auto"
            },
            "&::before": {
              display: "inline-block",
              width: 1,
              height: "50%",
              marginInlineEnd: -1,
              content: '""'
            }
          })
        },
        [`${n}-moving`]: {
          [`${n}-preview-img`]: {
            cursor: "grabbing",
            "&-wrapper": {
              transitionDuration: "0s"
            }
          }
        }
      }
    },
    // Override
    {
      [`${a}-preview-root`]: {
        [`${n}-wrap`]: {
          zIndex: e.zIndexPopup
        }
      }
    },
    // Preview operations & switch
    {
      [`${a}-preview-operations-wrapper`]: {
        position: "fixed",
        zIndex: e.calc(e.zIndexPopup).add(1).equal()
      },
      "&": [kE(e), HE(e)]
    }
  ];
}, UE = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    // ============================== image ==============================
    [t]: {
      position: "relative",
      display: "inline-block",
      [`${t}-img`]: {
        width: "100%",
        height: "auto",
        verticalAlign: "middle"
      },
      [`${t}-img-placeholder`]: {
        backgroundColor: e.colorBgContainerDisabled,
        backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTQuNSAyLjVoLTEzQS41LjUgMCAwIDAgMSAzdjEwYS41LjUgMCAwIDAgLjUuNWgxM2EuNS41IDAgMCAwIC41LS41VjNhLjUuNSAwIDAgMC0uNS0uNXpNNS4yODEgNC43NWExIDEgMCAwIDEgMCAyIDEgMSAwIDAgMSAwLTJ6bTguMDMgNi44M2EuMTI3LjEyNyAwIDAgMS0uMDgxLjAzSDIuNzY5YS4xMjUuMTI1IDAgMCAxLS4wOTYtLjIwN2wyLjY2MS0zLjE1NmEuMTI2LjEyNiAwIDAgMSAuMTc3LS4wMTZsLjAxNi4wMTZMNy4wOCAxMC4wOWwyLjQ3LTIuOTNhLjEyNi4xMjYgMCAwIDEgLjE3Ny0uMDE2bC4wMTUuMDE2IDMuNTg4IDQuMjQ0YS4xMjcuMTI3IDAgMCAxLS4wMi4xNzV6IiBmaWxsPSIjOEM4QzhDIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N2Zz4=')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "30%"
      },
      [`${t}-mask`]: Object.assign({}, BE(e)),
      [`${t}-mask:hover`]: {
        opacity: 1
      },
      [`${t}-placeholder`]: Object.assign({}, Qs())
    }
  };
}, KE = (e) => {
  const {
    previewCls: t
  } = e;
  return {
    [`${t}-root`]: $l(e, "zoom"),
    "&": bv(e, !0)
  };
}, GE = (e) => ({
  zIndexPopup: e.zIndexPopupBase + 80,
  previewOperationColor: new _t(e.colorTextLightSolid).setAlpha(0.65).toRgbString(),
  previewOperationHoverColor: new _t(e.colorTextLightSolid).setAlpha(0.85).toRgbString(),
  previewOperationColorDisabled: new _t(e.colorTextLightSolid).setAlpha(0.25).toRgbString(),
  previewOperationSize: e.fontSizeIcon * 1.5
  // FIXME: fontSizeIconLG
}), Pm = Rn("Image", (e) => {
  const t = `${e.componentCls}-preview`, n = jt(e, {
    previewCls: t,
    modalMaskBg: new _t("#000").setAlpha(0.45).toRgbString(),
    // FIXME: Shared Token
    imagePreviewSwitchSize: e.controlHeightLG
  });
  return [UE(n), WE(n), yv(jt(n, {
    componentCls: t
  })), KE(n)];
}, GE);
var qE = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
    t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
const _m = {
  rotateLeft: /* @__PURE__ */ u.createElement(xm, null),
  rotateRight: /* @__PURE__ */ u.createElement($m, null),
  zoomIn: /* @__PURE__ */ u.createElement(Om, null),
  zoomOut: /* @__PURE__ */ u.createElement(Rm, null),
  close: /* @__PURE__ */ u.createElement(ni, null),
  left: /* @__PURE__ */ u.createElement(Xv, null),
  right: /* @__PURE__ */ u.createElement(jv, null),
  flipX: /* @__PURE__ */ u.createElement(Ys, null),
  flipY: /* @__PURE__ */ u.createElement(Ys, {
    rotate: 90
  })
}, XE = (e) => {
  var {
    previewPrefixCls: t,
    preview: n
  } = e, r = qE(e, ["previewPrefixCls", "preview"]);
  const {
    getPrefixCls: a
  } = u.useContext(vt), o = a("image", t), i = `${o}-preview`, s = a(), l = za(o), [c, d, f] = Pm(o, l), [v] = bl("ImagePreview", typeof n == "object" ? n.zIndex : void 0), g = u.useMemo(() => {
    var p;
    if (n === !1)
      return n;
    const h = typeof n == "object" ? n : {}, m = Y(d, f, l, (p = h.rootClassName) !== null && p !== void 0 ? p : "");
    return Object.assign(Object.assign({}, h), {
      transitionName: Xr(s, "zoom", h.transitionName),
      maskTransitionName: Xr(s, "fade", h.maskTransitionName),
      rootClassName: m,
      zIndex: v
    });
  }, [n]);
  return c(/* @__PURE__ */ u.createElement(di.PreviewGroup, Object.assign({
    preview: g,
    previewPrefixCls: i,
    icons: _m
  }, r)));
}, ZE = XE;
var Ju = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
    t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
const jl = (e) => {
  var t;
  const {
    prefixCls: n,
    preview: r,
    className: a,
    rootClassName: o,
    style: i
  } = e, s = Ju(e, ["prefixCls", "preview", "className", "rootClassName", "style"]), {
    getPrefixCls: l,
    locale: c = ar,
    getPopupContainer: d,
    image: f
  } = u.useContext(vt), v = l("image", n), g = l(), p = c.Image || ar.Image, h = za(v), [m, S, b] = Pm(v, h), y = Y(o, S, b, h), w = Y(a, S, f == null ? void 0 : f.className), [C] = bl("ImagePreview", typeof r == "object" ? r.zIndex : void 0), O = u.useMemo(() => {
    var x;
    if (r === !1)
      return r;
    const R = typeof r == "object" ? r : {}, {
      getContainer: T,
      closeIcon: M
    } = R, j = Ju(R, ["getContainer", "closeIcon"]);
    return Object.assign(Object.assign({
      mask: /* @__PURE__ */ u.createElement("div", {
        className: `${v}-mask-info`
      }, /* @__PURE__ */ u.createElement(gm, null), p == null ? void 0 : p.preview),
      icons: _m
    }, j), {
      getContainer: T ?? d,
      transitionName: Xr(g, "zoom", R.transitionName),
      maskTransitionName: Xr(g, "fade", R.maskTransitionName),
      zIndex: C,
      closeIcon: M ?? ((x = f == null ? void 0 : f.preview) === null || x === void 0 ? void 0 : x.closeIcon)
    });
  }, [r, p, (t = f == null ? void 0 : f.preview) === null || t === void 0 ? void 0 : t.closeIcon]), E = Object.assign(Object.assign({}, f == null ? void 0 : f.style), i);
  return m(/* @__PURE__ */ u.createElement(di, Object.assign({
    prefixCls: v,
    preview: O,
    rootClassName: y,
    className: w,
    style: E
  }, s)));
};
jl.PreviewGroup = ZE;
process.env.NODE_ENV !== "production" && (jl.displayName = "Image");
const YE = (e) => {
  const {
    paddingXXS: t,
    lineWidth: n,
    tagPaddingHorizontal: r,
    componentCls: a,
    calc: o
  } = e, i = o(r).sub(n).equal(), s = o(t).sub(n).equal();
  return {
    // Result
    [a]: Object.assign(Object.assign({}, sr(e)), {
      display: "inline-block",
      height: "auto",
      // https://github.com/ant-design/ant-design/pull/47504
      marginInlineEnd: e.marginXS,
      paddingInline: i,
      fontSize: e.tagFontSize,
      lineHeight: e.tagLineHeight,
      whiteSpace: "nowrap",
      background: e.defaultBg,
      border: `${ee(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
      borderRadius: e.borderRadiusSM,
      opacity: 1,
      transition: `all ${e.motionDurationMid}`,
      textAlign: "start",
      position: "relative",
      // RTL
      [`&${a}-rtl`]: {
        direction: "rtl"
      },
      "&, a, a:hover": {
        color: e.defaultColor
      },
      [`${a}-close-icon`]: {
        marginInlineStart: s,
        fontSize: e.tagIconSize,
        color: e.colorTextDescription,
        cursor: "pointer",
        transition: `all ${e.motionDurationMid}`,
        "&:hover": {
          color: e.colorTextHeading
        }
      },
      [`&${a}-has-color`]: {
        borderColor: "transparent",
        [`&, a, a:hover, ${e.iconCls}-close, ${e.iconCls}-close:hover`]: {
          color: e.colorTextLightSolid
        }
      },
      "&-checkable": {
        backgroundColor: "transparent",
        borderColor: "transparent",
        cursor: "pointer",
        [`&:not(${a}-checkable-checked):hover`]: {
          color: e.colorPrimary,
          backgroundColor: e.colorFillSecondary
        },
        "&:active, &-checked": {
          color: e.colorTextLightSolid
        },
        "&-checked": {
          backgroundColor: e.colorPrimary,
          "&:hover": {
            backgroundColor: e.colorPrimaryHover
          }
        },
        "&:active": {
          backgroundColor: e.colorPrimaryActive
        }
      },
      "&-hidden": {
        display: "none"
      },
      // To ensure that a space will be placed between character and `Icon`.
      [`> ${e.iconCls} + span, > span + ${e.iconCls}`]: {
        marginInlineStart: i
      }
    }),
    [`${a}-borderless`]: {
      borderColor: "transparent",
      background: e.tagBorderlessBg
    }
  };
}, Fl = (e) => {
  const {
    lineWidth: t,
    fontSizeIcon: n,
    calc: r
  } = e, a = e.fontSizeSM;
  return jt(e, {
    tagFontSize: a,
    tagLineHeight: ee(r(e.lineHeightSM).mul(a).equal()),
    tagIconSize: r(n).sub(r(t).mul(2)).equal(),
    // Tag icon is much smaller
    tagPaddingHorizontal: 8,
    // Fixed padding.
    tagBorderlessBg: e.defaultBg
  });
}, Dl = (e) => ({
  defaultBg: new _t(e.colorFillQuaternary).onBackground(e.colorBgContainer).toHexString(),
  defaultColor: e.colorText
}), Tm = Rn("Tag", (e) => {
  const t = Fl(e);
  return YE(t);
}, Dl);
var QE = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
    t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
const JE = /* @__PURE__ */ u.forwardRef((e, t) => {
  const {
    prefixCls: n,
    style: r,
    className: a,
    checked: o,
    onChange: i,
    onClick: s
  } = e, l = QE(e, ["prefixCls", "style", "className", "checked", "onChange", "onClick"]), {
    getPrefixCls: c,
    tag: d
  } = u.useContext(vt), f = (S) => {
    i == null || i(!o), s == null || s(S);
  }, v = c("tag", n), [g, p, h] = Tm(v), m = Y(v, `${v}-checkable`, {
    [`${v}-checkable-checked`]: o
  }, d == null ? void 0 : d.className, a, p, h);
  return g(/* @__PURE__ */ u.createElement("span", Object.assign({}, l, {
    ref: t,
    style: Object.assign(Object.assign({}, r), d == null ? void 0 : d.style),
    className: m,
    onClick: f
  })));
}), ex = (e) => $f(e, (t, n) => {
  let {
    textColor: r,
    lightBorderColor: a,
    lightColor: o,
    darkColor: i
  } = n;
  return {
    [`${e.componentCls}${e.componentCls}-${t}`]: {
      color: r,
      background: o,
      borderColor: a,
      // Inverse color
      "&-inverse": {
        color: e.colorTextLightSolid,
        background: i,
        borderColor: i
      },
      [`&${e.componentCls}-borderless`]: {
        borderColor: "transparent"
      }
    }
  };
}), tx = vl(["Tag", "preset"], (e) => {
  const t = Fl(e);
  return ex(t);
}, Dl);
function nx(e) {
  return typeof e != "string" ? e : e.charAt(0).toUpperCase() + e.slice(1);
}
const go = (e, t, n) => {
  const r = nx(n);
  return {
    [`${e.componentCls}${e.componentCls}-${t}`]: {
      color: e[`color${n}`],
      background: e[`color${r}Bg`],
      borderColor: e[`color${r}Border`],
      [`&${e.componentCls}-borderless`]: {
        borderColor: "transparent"
      }
    }
  };
}, rx = vl(["Tag", "status"], (e) => {
  const t = Fl(e);
  return [go(t, "success", "Success"), go(t, "processing", "Info"), go(t, "error", "Error"), go(t, "warning", "Warning")];
}, Dl);
var ax = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
    t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
const ox = /* @__PURE__ */ u.forwardRef((e, t) => {
  const {
    prefixCls: n,
    className: r,
    rootClassName: a,
    style: o,
    children: i,
    icon: s,
    color: l,
    onClose: c,
    bordered: d = !0,
    visible: f
  } = e, v = ax(e, ["prefixCls", "className", "rootClassName", "style", "children", "icon", "color", "onClose", "bordered", "visible"]), {
    getPrefixCls: g,
    direction: p,
    tag: h
  } = u.useContext(vt), [m, S] = u.useState(!0), b = vn(v, ["closeIcon", "closable"]);
  process.env.NODE_ENV !== "production" && zt("Tag").deprecated(!("visible" in e), "visible", "visible && <Tag />"), u.useEffect(() => {
    f !== void 0 && S(f);
  }, [f]);
  const y = Av(l), w = SS(l), C = y || w, O = Object.assign(Object.assign({
    backgroundColor: l && !C ? l : void 0
  }, h == null ? void 0 : h.style), o), E = g("tag", n), [x, R, T] = Tm(E), M = Y(E, h == null ? void 0 : h.className, {
    [`${E}-${l}`]: C,
    [`${E}-has-color`]: l && !C,
    [`${E}-hidden`]: !m,
    [`${E}-rtl`]: p === "rtl",
    [`${E}-borderless`]: !d
  }, r, a, R, T), j = ($) => {
    $.stopPropagation(), c == null || c($), !$.defaultPrevented && S(!1);
  }, [, I] = zy(vu(e), vu(h), {
    closable: !1,
    closeIconRender: ($) => {
      const F = /* @__PURE__ */ u.createElement("span", {
        className: `${E}-close-icon`,
        onClick: j
      }, $);
      return Uf($, F, (L) => ({
        onClick: (V) => {
          var W;
          (W = L == null ? void 0 : L.onClick) === null || W === void 0 || W.call(L, V), j(V);
        },
        className: Y(L == null ? void 0 : L.className, `${E}-close-icon`)
      }));
    }
  }), _ = typeof v.onClick == "function" || i && i.type === "a", k = s || null, N = k ? /* @__PURE__ */ u.createElement(u.Fragment, null, k, i && /* @__PURE__ */ u.createElement("span", null, i)) : i, P = /* @__PURE__ */ u.createElement("span", Object.assign({}, b, {
    ref: t,
    className: M,
    style: O
  }), N, I, y && /* @__PURE__ */ u.createElement(tx, {
    key: "preset",
    prefixCls: E
  }), w && /* @__PURE__ */ u.createElement(rx, {
    key: "status",
    prefixCls: E
  }));
  return x(_ ? /* @__PURE__ */ u.createElement(Cl, {
    component: "Tag"
  }, P) : P);
}), zl = ox;
process.env.NODE_ENV !== "production" && (zl.displayName = "Tag");
zl.CheckableTag = JE;
var ix = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
    t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
const sx = {
  border: 0,
  background: "transparent",
  padding: 0,
  lineHeight: "inherit",
  display: "inline-flex"
}, Js = /* @__PURE__ */ u.forwardRef((e, t) => {
  const n = (d) => {
    const {
      keyCode: f
    } = d;
    f === Se.ENTER && d.preventDefault();
  }, r = (d) => {
    const {
      keyCode: f
    } = d, {
      onClick: v
    } = e;
    f === Se.ENTER && v && v();
  }, {
    style: a,
    noStyle: o,
    disabled: i,
    tabIndex: s = 0
  } = e, l = ix(e, ["style", "noStyle", "disabled", "tabIndex"]);
  let c = {};
  return o || (c = Object.assign({}, sx)), i && (c.pointerEvents = "none"), c = Object.assign(Object.assign({}, c), a), /* @__PURE__ */ u.createElement("div", Object.assign({
    role: "button",
    tabIndex: s,
    ref: t
  }, l, {
    onKeyDown: n,
    onKeyUp: r,
    style: c
  }));
});
var lx = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z" } }] }, name: "edit", theme: "outlined" }, cx = function(t, n) {
  return /* @__PURE__ */ u.createElement(Tt, me({}, t, {
    ref: n,
    icon: lx
  }));
}, Im = /* @__PURE__ */ u.forwardRef(cx);
process.env.NODE_ENV !== "production" && (Im.displayName = "EditOutlined");
var ux = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z" } }] }, name: "enter", theme: "outlined" }, dx = function(t, n) {
  return /* @__PURE__ */ u.createElement(Tt, me({}, t, {
    ref: n,
    icon: ux
  }));
}, Nm = /* @__PURE__ */ u.forwardRef(dx);
process.env.NODE_ENV !== "production" && (Nm.displayName = "EnterOutlined");
const fx = (e, t, n, r) => {
  const {
    titleMarginBottom: a,
    fontWeightStrong: o
  } = r;
  return {
    marginBottom: a,
    color: n,
    fontWeight: o,
    fontSize: e,
    lineHeight: t
  };
}, vx = (e) => {
  const t = [1, 2, 3, 4, 5], n = {};
  return t.forEach((r) => {
    n[`
      h${r}&,
      div&-h${r},
      div&-h${r} > textarea,
      h${r}
    `] = fx(e[`fontSizeHeading${r}`], e[`lineHeightHeading${r}`], e.colorTextHeading, e);
  }), n;
}, mx = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    "a&, a": Object.assign(Object.assign({}, Cf(e)), {
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
}, gx = (e) => ({
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
    backgroundColor: hs[2]
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
}), px = (e) => {
  const {
    componentCls: t,
    paddingSM: n
  } = e, r = n;
  return {
    "&-edit-content": {
      position: "relative",
      "div&": {
        insetInlineStart: e.calc(e.paddingSM).mul(-1).equal(),
        marginTop: e.calc(r).mul(-1).equal(),
        marginBottom: `calc(1em - ${ee(r)})`
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
}, hx = (e) => ({
  [`${e.componentCls}-copy-success`]: {
    "\n    &,\n    &:hover,\n    &:focus": {
      color: e.colorSuccess
    }
  },
  [`${e.componentCls}-copy-icon-only`]: {
    marginInlineStart: 0
  }
}), bx = () => ({
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
}), yx = (e) => {
  const {
    componentCls: t,
    titleMarginTop: n
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
    }, vx(e)), {
      [`
      & + h1${t},
      & + h2${t},
      & + h3${t},
      & + h4${t},
      & + h5${t}
      `]: {
        marginTop: n
      },
      "\n      div,\n      ul,\n      li,\n      p,\n      h1,\n      h2,\n      h3,\n      h4,\n      h5": {
        "\n        + h1,\n        + h2,\n        + h3,\n        + h4,\n        + h5\n        ": {
          marginTop: n
        }
      }
    }), gx(e)), mx(e)), {
      // Operation
      [`
        ${t}-expand,
        ${t}-collapse,
        ${t}-edit,
        ${t}-copy
      `]: Object.assign(Object.assign({}, Cf(e)), {
        marginInlineStart: e.marginXXS
      })
    }), px(e)), hx(e)), bx()), {
      "&-rtl": {
        direction: "rtl"
      }
    })
  };
}, Cx = () => ({
  titleMarginTop: "1.2em",
  titleMarginBottom: "0.5em"
}), Mm = Rn("Typography", (e) => [yx(e)], Cx), Sx = (e) => {
  const {
    prefixCls: t,
    "aria-label": n,
    className: r,
    style: a,
    direction: o,
    maxLength: i,
    autoSize: s = !0,
    value: l,
    onSave: c,
    onCancel: d,
    onEnd: f,
    component: v,
    enterIcon: g = /* @__PURE__ */ u.createElement(Nm, null)
  } = e, p = u.useRef(null), h = u.useRef(!1), m = u.useRef(), [S, b] = u.useState(l);
  u.useEffect(() => {
    b(l);
  }, [l]), u.useEffect(() => {
    var k;
    if (!((k = p.current) === null || k === void 0) && k.resizableTextArea) {
      const {
        textArea: N
      } = p.current.resizableTextArea;
      N.focus();
      const {
        length: P
      } = N.value;
      N.setSelectionRange(P, P);
    }
  }, []);
  const y = (k) => {
    let {
      target: N
    } = k;
    b(N.value.replace(/[\n\r]/g, ""));
  }, w = () => {
    h.current = !0;
  }, C = () => {
    h.current = !1;
  }, O = (k) => {
    let {
      keyCode: N
    } = k;
    h.current || (m.current = N);
  }, E = () => {
    c(S.trim());
  }, x = (k) => {
    let {
      keyCode: N,
      ctrlKey: P,
      altKey: $,
      metaKey: F,
      shiftKey: L
    } = k;
    m.current === N && !h.current && !P && !$ && !F && !L && (N === Se.ENTER ? (E(), f == null || f()) : N === Se.ESC && d());
  }, R = () => {
    E();
  }, T = v ? `${t}-${v}` : "", [M, j, I] = Mm(t), _ = Y(t, `${t}-edit-content`, {
    [`${t}-rtl`]: o === "rtl"
  }, r, T, j, I);
  return M(/* @__PURE__ */ u.createElement("div", {
    className: _,
    style: a
  }, /* @__PURE__ */ u.createElement(pm, {
    ref: p,
    maxLength: i,
    value: S,
    onChange: y,
    onKeyDown: O,
    onKeyUp: x,
    onCompositionStart: w,
    onCompositionEnd: C,
    onBlur: R,
    "aria-label": n,
    rows: 1,
    autoSize: s
  }), g !== null ? ri(g, {
    className: `${t}-edit-content-confirm`
  }) : null));
};
var wx = function() {
  var e = document.getSelection();
  if (!e.rangeCount)
    return function() {
    };
  for (var t = document.activeElement, n = [], r = 0; r < e.rangeCount; r++)
    n.push(e.getRangeAt(r));
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
    e.type === "Caret" && e.removeAllRanges(), e.rangeCount || n.forEach(function(a) {
      e.addRange(a);
    }), t && t.focus();
  };
}, Ex = wx, ed = {
  "text/plain": "Text",
  "text/html": "Url",
  default: "Text"
}, xx = "Copy to clipboard: #{key}, Enter";
function $x(e) {
  var t = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
  return e.replace(/#{\s*key\s*}/g, t);
}
function Ox(e, t) {
  var n, r, a, o, i, s, l = !1;
  t || (t = {}), n = t.debug || !1;
  try {
    a = Ex(), o = document.createRange(), i = document.getSelection(), s = document.createElement("span"), s.textContent = e, s.ariaHidden = "true", s.style.all = "unset", s.style.position = "fixed", s.style.top = 0, s.style.clip = "rect(0, 0, 0, 0)", s.style.whiteSpace = "pre", s.style.webkitUserSelect = "text", s.style.MozUserSelect = "text", s.style.msUserSelect = "text", s.style.userSelect = "text", s.addEventListener("copy", function(d) {
      if (d.stopPropagation(), t.format)
        if (d.preventDefault(), typeof d.clipboardData > "u") {
          n && console.warn("unable to use e.clipboardData"), n && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
          var f = ed[t.format] || ed.default;
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
    n && console.error("unable to copy using execCommand: ", d), n && console.warn("trying IE specific stuff");
    try {
      window.clipboardData.setData(t.format || "text", e), t.onCopy && t.onCopy(window.clipboardData), l = !0;
    } catch (f) {
      n && console.error("unable to copy using clipboardData: ", f), n && console.error("falling back to prompt"), r = $x("message" in t ? t.message : xx), window.prompt(r, e);
    }
  } finally {
    i && (typeof i.removeRange == "function" ? i.removeRange(o) : i.removeAllRanges()), s && document.body.removeChild(s), a();
  }
  return l;
}
var Rx = Ox;
const Px = /* @__PURE__ */ ld(Rx);
var _x = function(e, t, n, r) {
  function a(o) {
    return o instanceof n ? o : new n(function(i) {
      i(o);
    });
  }
  return new (n || (n = Promise))(function(o, i) {
    function s(d) {
      try {
        c(r.next(d));
      } catch (f) {
        i(f);
      }
    }
    function l(d) {
      try {
        c(r.throw(d));
      } catch (f) {
        i(f);
      }
    }
    function c(d) {
      d.done ? o(d.value) : a(d.value).then(s, l);
    }
    c((r = r.apply(e, t || [])).next());
  });
};
const Tx = (e) => {
  let {
    copyConfig: t,
    children: n
  } = e;
  const [r, a] = u.useState(!1), [o, i] = u.useState(!1), s = u.useRef(null), l = () => {
    s.current && clearTimeout(s.current);
  }, c = {};
  t.format && (c.format = t.format), u.useEffect(() => l, []);
  const d = Gt((f) => _x(void 0, void 0, void 0, function* () {
    var v;
    f == null || f.preventDefault(), f == null || f.stopPropagation(), i(!0);
    try {
      const g = typeof t.text == "function" ? yield t.text() : t.text;
      Px(g || String(n) || "", c), i(!1), a(!0), l(), s.current = setTimeout(() => {
        a(!1);
      }, 3e3), (v = t.onCopy) === null || v === void 0 || v.call(t, f);
    } catch (g) {
      throw i(!1), g;
    }
  }));
  return {
    copied: r,
    copyLoading: o,
    onClick: d
  };
};
function Hi(e, t) {
  return u.useMemo(() => {
    const n = !!e;
    return [n, Object.assign(Object.assign({}, t), n && typeof e == "object" ? e : null)];
  }, [e]);
}
const Ix = (e) => {
  const t = Me();
  return ot(() => {
    t.current = e;
  }), t.current;
}, Nx = (e, t) => {
  const n = u.useRef(!1);
  u.useEffect(() => {
    n.current ? e() : n.current = !0;
  }, t);
};
var Mx = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
    t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
const Vl = /* @__PURE__ */ u.forwardRef((e, t) => {
  const {
    prefixCls: n,
    component: r = "article",
    className: a,
    rootClassName: o,
    setContentRef: i,
    children: s,
    direction: l,
    style: c
  } = e, d = Mx(e, ["prefixCls", "component", "className", "rootClassName", "setContentRef", "children", "direction", "style"]), {
    getPrefixCls: f,
    direction: v,
    typography: g
  } = u.useContext(vt), p = l ?? v;
  let h = t;
  i && (h = An(t, i)), process.env.NODE_ENV !== "production" && zt("Typography").deprecated(!i, "setContentRef", "ref");
  const m = f("typography", n), [S, b, y] = Mm(m), w = Y(m, g == null ? void 0 : g.className, {
    [`${m}-rtl`]: p === "rtl"
  }, a, o, b, y), C = Object.assign(Object.assign({}, g == null ? void 0 : g.style), c);
  return S(
    // @ts-expect-error: Expression produces a union type that is too complex to represent.
    /* @__PURE__ */ u.createElement(r, Object.assign({
      className: w,
      style: C,
      ref: h
    }, d), s)
  );
});
process.env.NODE_ENV !== "production" && (Vl.displayName = "Typography");
var Ax = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z" } }] }, name: "copy", theme: "outlined" }, Lx = function(t, n) {
  return /* @__PURE__ */ u.createElement(Tt, me({}, t, {
    ref: n,
    icon: Ax
  }));
}, Am = /* @__PURE__ */ u.forwardRef(Lx);
process.env.NODE_ENV !== "production" && (Am.displayName = "CopyOutlined");
function td(e) {
  return e === !1 ? [!1, !1] : Array.isArray(e) ? e : [e];
}
function po(e, t, n) {
  return e === !0 || e === void 0 ? t : e || n && t;
}
const jx = (e) => {
  const {
    prefixCls: t,
    copied: n,
    locale: r,
    iconOnly: a,
    tooltips: o,
    icon: i,
    loading: s,
    tabIndex: l,
    onCopy: c
  } = e, d = td(o), f = td(i), {
    copied: v,
    copy: g
  } = r ?? {}, p = n ? po(d[1], v) : po(d[0], g), m = typeof p == "string" ? p : n ? v : g;
  return /* @__PURE__ */ u.createElement(Ka, {
    key: "copy",
    title: p
  }, /* @__PURE__ */ u.createElement(Js, {
    className: Y(`${t}-copy`, {
      [`${t}-copy-success`]: n,
      [`${t}-copy-icon-only`]: a
    }),
    onClick: c,
    "aria-label": m,
    tabIndex: l
  }, n ? po(f[1], /* @__PURE__ */ u.createElement(_v, null), !0) : po(f[0], s ? /* @__PURE__ */ u.createElement(pl, null) : /* @__PURE__ */ u.createElement(Am, null), !0)));
}, ho = /* @__PURE__ */ u.forwardRef((e, t) => {
  let {
    style: n,
    children: r
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
    }, n)
  }, r);
});
function Lm(e) {
  const t = typeof e;
  return t === "string" || t === "number";
}
function Fx(e) {
  let t = 0;
  return e.forEach((n) => {
    Lm(n) ? t += String(n).length : t += 1;
  }), t;
}
function nd(e, t) {
  let n = 0;
  const r = [];
  for (let a = 0; a < e.length; a += 1) {
    if (n === t)
      return r;
    const o = e[a], s = Lm(o) ? String(o).length : 1, l = n + s;
    if (l > t) {
      const c = t - n;
      return r.push(String(o).slice(0, c)), r;
    }
    r.push(o), n = l;
  }
  return e;
}
const Wi = 0, Ui = 1, Ki = 2, Gi = 3, rd = 4, bo = {
  display: "-webkit-box",
  overflow: "hidden",
  WebkitBoxOrient: "vertical"
};
function Dx(e) {
  const {
    enableMeasure: t,
    width: n,
    text: r,
    children: a,
    rows: o,
    expanded: i,
    miscDeps: s,
    onEllipsis: l
  } = e, c = u.useMemo(() => rr(r), [r]), d = u.useMemo(() => Fx(c), [r]), f = u.useMemo(() => a(c, !1), [r]), [v, g] = u.useState(null), p = u.useRef(null), h = u.useRef(null), m = u.useRef(null), S = u.useRef(null), b = u.useRef(null), [y, w] = u.useState(!1), [C, O] = u.useState(Wi), [E, x] = u.useState(0), [R, T] = u.useState(null);
  Et(() => {
    O(t && n && d ? Ui : Wi);
  }, [n, r, o, t, c]), Et(() => {
    var _, k, N, P;
    if (C === Ui) {
      O(Ki);
      const $ = h.current && getComputedStyle(h.current).whiteSpace;
      T($);
    } else if (C === Ki) {
      const $ = !!(!((_ = m.current) === null || _ === void 0) && _.isExceed());
      O($ ? Gi : rd), g($ ? [0, d] : null), w($);
      const F = ((k = m.current) === null || k === void 0 ? void 0 : k.getHeight()) || 0, L = o === 1 ? 0 : ((N = S.current) === null || N === void 0 ? void 0 : N.getHeight()) || 0, V = ((P = b.current) === null || P === void 0 ? void 0 : P.getHeight()) || 0, W = L + V, U = Math.max(F, W);
      x(U + 1), l($);
    }
  }, [C]);
  const M = v ? Math.ceil((v[0] + v[1]) / 2) : 0;
  Et(() => {
    var _;
    const [k, N] = v || [0, 0];
    if (k !== N) {
      const $ = (((_ = p.current) === null || _ === void 0 ? void 0 : _.getHeight()) || 0) > E;
      let F = M;
      N - k === 1 && (F = $ ? k : N), g($ ? [k, F] : [F, N]);
    }
  }, [v, M]);
  const j = u.useMemo(() => {
    if (C !== Gi || !v || v[0] !== v[1]) {
      const _ = a(c, !1);
      return C !== rd && C !== Wi ? /* @__PURE__ */ u.createElement("span", {
        style: Object.assign(Object.assign({}, bo), {
          WebkitLineClamp: o
        })
      }, _) : _;
    }
    return a(i ? c : nd(c, v[0]), y);
  }, [i, C, v, c].concat(Pe(s))), I = {
    width: n,
    margin: 0,
    padding: 0,
    whiteSpace: R === "nowrap" ? "normal" : "inherit"
  };
  return /* @__PURE__ */ u.createElement(u.Fragment, null, j, C === Ki && /* @__PURE__ */ u.createElement(u.Fragment, null, /* @__PURE__ */ u.createElement(ho, {
    style: Object.assign(Object.assign(Object.assign({}, I), bo), {
      WebkitLineClamp: o
    }),
    ref: m
  }, f), /* @__PURE__ */ u.createElement(ho, {
    style: Object.assign(Object.assign(Object.assign({}, I), bo), {
      WebkitLineClamp: o - 1
    }),
    ref: S
  }, f), /* @__PURE__ */ u.createElement(ho, {
    style: Object.assign(Object.assign(Object.assign({}, I), bo), {
      WebkitLineClamp: 1
    }),
    ref: b
  }, a([], !0))), C === Gi && v && v[0] !== v[1] && /* @__PURE__ */ u.createElement(ho, {
    style: Object.assign(Object.assign({}, I), {
      top: 400
    }),
    ref: p
  }, a(nd(c, M), !0)), C === Ui && /* @__PURE__ */ u.createElement("span", {
    style: {
      whiteSpace: "inherit"
    },
    ref: h
  }));
}
const jm = (e) => {
  let {
    enableEllipsis: t,
    isEllipsis: n,
    children: r,
    tooltipProps: a
  } = e;
  return !(a != null && a.title) || !t ? r : /* @__PURE__ */ u.createElement(Ka, Object.assign({
    open: n ? void 0 : !1
  }, a), r);
};
process.env.NODE_ENV !== "production" && (jm.displayName = "EllipsisTooltip");
var zx = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
    t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
function Vx(e, t) {
  let {
    mark: n,
    code: r,
    underline: a,
    delete: o,
    strong: i,
    keyboard: s,
    italic: l
  } = e, c = t;
  function d(f, v) {
    v && (c = /* @__PURE__ */ u.createElement(f, {}, c));
  }
  return d("strong", i), d("u", a), d("del", o), d("code", r), d("mark", n), d("kbd", s), d("i", l), c;
}
const Bx = "...", fi = /* @__PURE__ */ u.forwardRef((e, t) => {
  var n, r, a;
  const {
    prefixCls: o,
    className: i,
    style: s,
    type: l,
    disabled: c,
    children: d,
    ellipsis: f,
    editable: v,
    copyable: g,
    component: p,
    title: h
  } = e, m = zx(e, ["prefixCls", "className", "style", "type", "disabled", "children", "ellipsis", "editable", "copyable", "component", "title"]), {
    getPrefixCls: S,
    direction: b
  } = u.useContext(vt), [y] = L0("Text"), w = u.useRef(null), C = u.useRef(null), O = S("typography", o), E = vn(m, ["mark", "code", "delete", "underline", "strong", "keyboard", "italic"]), [x, R] = Hi(v), [T, M] = en(!1, {
    value: R.editing
  }), {
    triggerType: j = ["icon"]
  } = R, I = (fe) => {
    var he;
    fe && ((he = R.onStart) === null || he === void 0 || he.call(R)), M(fe);
  }, _ = Ix(T);
  Nx(() => {
    var fe;
    !T && _ && ((fe = C.current) === null || fe === void 0 || fe.focus());
  }, [T]);
  const k = (fe) => {
    fe == null || fe.preventDefault(), I(!0);
  }, N = (fe) => {
    var he;
    (he = R.onChange) === null || he === void 0 || he.call(R, fe), I(!1);
  }, P = () => {
    var fe;
    (fe = R.onCancel) === null || fe === void 0 || fe.call(R), I(!1);
  }, [$, F] = Hi(g), {
    copied: L,
    copyLoading: V,
    onClick: W
  } = Tx({
    copyConfig: F,
    children: d
  }), [U, G] = u.useState(!1), [Q, q] = u.useState(!1), [Z, re] = u.useState(!1), [ae, ue] = u.useState(!1), [de, ce] = u.useState(!0), [ge, H] = Hi(f, {
    expandable: !1,
    symbol: (fe) => fe ? y == null ? void 0 : y.collapse : y == null ? void 0 : y.expand
  }), [ne, ve] = en(H.defaultExpanded || !1, {
    value: H.expanded
  }), $e = ge && (!ne || H.expandable === "collapsible"), {
    rows: pe = 1
  } = H, ie = u.useMemo(() => (
    // Disable ellipsis
    $e && // Provide suffix
    (H.suffix !== void 0 || H.onEllipsis || // Can't use css ellipsis since we need to provide the place for button
    H.expandable || x || $)
  ), [$e, H, x, $]);
  Et(() => {
    ge && !ie && (G(pu("webkitLineClamp")), q(pu("textOverflow")));
  }, [ie, ge]);
  const [oe, se] = u.useState($e), we = u.useMemo(() => ie ? !1 : pe === 1 ? Q : U, [ie, Q, U]);
  Et(() => {
    se(we && $e);
  }, [we, $e]);
  const be = $e && (oe ? ae : Z), ye = $e && pe === 1 && oe, _e = $e && pe > 1 && oe, Ee = (fe, he) => {
    var je;
    ve(he.expanded), (je = H.onExpand) === null || je === void 0 || je.call(H, fe, he);
  }, [st, Ye] = u.useState(0), xe = (fe) => {
    let {
      offsetWidth: he
    } = fe;
    Ye(he);
  }, Oe = (fe) => {
    var he;
    re(fe), Z !== fe && ((he = H.onEllipsis) === null || he === void 0 || he.call(H, fe));
  };
  u.useEffect(() => {
    const fe = w.current;
    if (ge && oe && fe) {
      const he = _e ? fe.offsetHeight < fe.scrollHeight : fe.offsetWidth < fe.scrollWidth;
      ae !== he && ue(he);
    }
  }, [ge, oe, d, _e, de, st]), u.useEffect(() => {
    const fe = w.current;
    if (typeof IntersectionObserver > "u" || !fe || !oe || !$e)
      return;
    const he = new IntersectionObserver(() => {
      ce(!!fe.offsetParent);
    });
    return he.observe(fe), () => {
      he.disconnect();
    };
  }, [oe, $e]);
  let te = {};
  H.tooltip === !0 ? te = {
    title: (n = R.text) !== null && n !== void 0 ? n : d
  } : /* @__PURE__ */ u.isValidElement(H.tooltip) ? te = {
    title: H.tooltip
  } : typeof H.tooltip == "object" ? te = Object.assign({
    title: (r = R.text) !== null && r !== void 0 ? r : d
  }, H.tooltip) : te = {
    title: H.tooltip
  };
  const le = u.useMemo(() => {
    const fe = (he) => ["string", "number"].includes(typeof he);
    if (!(!ge || oe)) {
      if (fe(R.text))
        return R.text;
      if (fe(d))
        return d;
      if (fe(h))
        return h;
      if (fe(te.title))
        return te.title;
    }
  }, [ge, oe, h, te.title, be]);
  if (T)
    return /* @__PURE__ */ u.createElement(Sx, {
      value: (a = R.text) !== null && a !== void 0 ? a : typeof d == "string" ? d : "",
      onSave: N,
      onCancel: P,
      onEnd: R.onEnd,
      prefixCls: O,
      className: i,
      style: s,
      direction: b,
      component: p,
      maxLength: R.maxLength,
      autoSize: R.autoSize,
      enterIcon: R.enterIcon
    });
  const Ie = () => {
    const {
      expandable: fe,
      symbol: he
    } = H;
    return !fe || ne && fe !== "collapsible" ? null : /* @__PURE__ */ u.createElement(Js, {
      key: "expand",
      className: `${O}-${ne ? "collapse" : "expand"}`,
      onClick: (je) => Ee(je, {
        expanded: !ne
      }),
      "aria-label": ne ? y.collapse : y == null ? void 0 : y.expand
    }, typeof he == "function" ? he(ne) : he);
  }, Ve = () => {
    if (!x)
      return;
    const {
      icon: fe,
      tooltip: he,
      tabIndex: je
    } = R, Be = rr(he)[0] || (y == null ? void 0 : y.edit), wt = typeof Be == "string" ? Be : "";
    return j.includes("icon") ? /* @__PURE__ */ u.createElement(Ka, {
      key: "edit",
      title: he === !1 ? "" : Be
    }, /* @__PURE__ */ u.createElement(Js, {
      ref: C,
      className: `${O}-edit`,
      onClick: k,
      "aria-label": wt,
      tabIndex: je
    }, fe || /* @__PURE__ */ u.createElement(Im, {
      role: "button"
    }))) : null;
  }, Ke = () => $ ? /* @__PURE__ */ u.createElement(jx, Object.assign({
    key: "copy"
  }, F, {
    prefixCls: O,
    copied: L,
    locale: y,
    onCopy: W,
    loading: V,
    iconOnly: d == null
  })) : null, Ue = (fe) => [
    // (renderExpanded || ellipsisConfig.collapsible) && renderExpand(),
    fe && Ie(),
    Ve(),
    Ke()
  ], Ae = (fe) => [fe && !ne && /* @__PURE__ */ u.createElement("span", {
    "aria-hidden": !0,
    key: "ellipsis"
  }, Bx), H.suffix, Ue(fe)];
  return /* @__PURE__ */ u.createElement(wn, {
    onResize: xe,
    disabled: !$e
  }, (fe) => /* @__PURE__ */ u.createElement(jm, {
    tooltipProps: te,
    enableEllipsis: $e,
    isEllipsis: be
  }, /* @__PURE__ */ u.createElement(Vl, Object.assign({
    className: Y({
      [`${O}-${l}`]: l,
      [`${O}-disabled`]: c,
      [`${O}-ellipsis`]: ge,
      [`${O}-ellipsis-single-line`]: ye,
      [`${O}-ellipsis-multiple-line`]: _e
    }, i),
    prefixCls: o,
    style: Object.assign(Object.assign({}, s), {
      WebkitLineClamp: _e ? pe : void 0
    }),
    component: p,
    ref: An(fe, w, t),
    direction: b,
    onClick: j.includes("text") ? k : void 0,
    "aria-label": le == null ? void 0 : le.toString(),
    title: h
  }, E), /* @__PURE__ */ u.createElement(Dx, {
    enableMeasure: $e && !oe,
    text: d,
    rows: pe,
    width: st,
    onEllipsis: Oe,
    expanded: ne,
    miscDeps: [L, ne, V, x, $]
  }, (he, je) => Vx(e, /* @__PURE__ */ u.createElement(u.Fragment, null, he.length > 0 && je && !ne && le ? /* @__PURE__ */ u.createElement("span", {
    key: "show-content",
    "aria-hidden": !0
  }, he) : he, Ae(je)))))));
});
var kx = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
    t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
const Hx = /* @__PURE__ */ u.forwardRef((e, t) => {
  var {
    ellipsis: n,
    rel: r
  } = e, a = kx(e, ["ellipsis", "rel"]);
  if (process.env.NODE_ENV !== "production") {
    const i = zt("Typography.Link");
    process.env.NODE_ENV !== "production" && i(typeof n != "object", "usage", "`ellipsis` only supports boolean value.");
  }
  const o = Object.assign(Object.assign({}, a), {
    rel: r === void 0 && a.target === "_blank" ? "noopener noreferrer" : r
  });
  return delete o.navigate, /* @__PURE__ */ u.createElement(fi, Object.assign({}, o, {
    ref: t,
    ellipsis: !!n,
    component: "a"
  }));
}), Wx = /* @__PURE__ */ u.forwardRef((e, t) => /* @__PURE__ */ u.createElement(fi, Object.assign({
  ref: t
}, e, {
  component: "div"
})));
var Ux = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
    t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
const Kx = (e, t) => {
  var {
    ellipsis: n
  } = e, r = Ux(e, ["ellipsis"]);
  const a = u.useMemo(() => n && typeof n == "object" ? vn(n, ["expandable", "rows"]) : n, [n]);
  if (process.env.NODE_ENV !== "production") {
    const o = zt("Typography.Text");
    process.env.NODE_ENV !== "production" && o(typeof n != "object" || !n || !("expandable" in n) && !("rows" in n), "usage", "`ellipsis` do not support `expandable` or `rows` props.");
  }
  return /* @__PURE__ */ u.createElement(fi, Object.assign({
    ref: t
  }, r, {
    ellipsis: a,
    component: "span"
  }));
}, Gx = /* @__PURE__ */ u.forwardRef(Kx);
var qx = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
    t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
const ad = [1, 2, 3, 4, 5], Xx = /* @__PURE__ */ u.forwardRef((e, t) => {
  const {
    level: n = 1
  } = e, r = qx(e, ["level"]);
  let a;
  if (process.env.NODE_ENV !== "production") {
    const o = zt("Typography.Title");
    process.env.NODE_ENV !== "production" && o(ad.includes(n), "usage", "Title only accept `1 | 2 | 3 | 4 | 5` as `level` value. And `5` need 4.6.0+ version.");
  }
  return ad.includes(n) ? a = `h${n}` : a = "h1", /* @__PURE__ */ u.createElement(fi, Object.assign({
    ref: t
  }, r, {
    component: a
  }));
}), Sn = Vl;
Sn.Text = Gx;
Sn.Link = Hx;
Sn.Title = Xx;
Sn.Paragraph = Wx;
const Zx = ({
  inputRef: e,
  placeholder: t = "Ask me anything about your product data",
  userQuery: n,
  setUserQuery: r,
  handleSendMessage: a,
  isFollowupDisabled: o = !1
}) => {
  const i = n.trim().length === 0 || o, s = (l) => {
    l.key === "Enter" && !l.shiftKey && (l.stopPropagation(), l.preventDefault(), i || a());
  };
  return /* @__PURE__ */ Re.jsxs(
    Cn,
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
        /* @__PURE__ */ Re.jsx(
          "div",
          {
            style: {
              backgroundImage: "linear-gradient(180deg, transparent 23%, var(--background) 97%)",
              height: "6vh"
            }
          }
        ),
        /* @__PURE__ */ Re.jsx(
          Yr,
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
            children: /* @__PURE__ */ Re.jsxs(Cn, { vertical: !0, gap: 16, children: [
              /* @__PURE__ */ Re.jsxs(Cn, { align: "flex-start", gap: 12, children: [
                /* @__PURE__ */ Re.jsx(
                  pm,
                  {
                    ref: e,
                    value: n,
                    onChange: (l) => r(l.target.value),
                    autoSize: { minRows: 1, maxRows: 8 },
                    size: "large",
                    variant: "borderless",
                    placeholder: t,
                    onKeyDown: s
                  }
                ),
                /* @__PURE__ */ Re.jsx(
                  hr,
                  {
                    disabled: i,
                    size: "large",
                    type: "primary",
                    shape: "circle",
                    onClick: a,
                    icon: /* @__PURE__ */ Re.jsx(vd, { weight: "bold" })
                  }
                )
              ] }),
              /* @__PURE__ */ Re.jsx(Cn, { align: "flex-end", justify: "flex-end", children: /* @__PURE__ */ Re.jsxs(
                Sn.Text,
                {
                  type: "secondary",
                  style: {
                    fontWeight: 500,
                    fontSize: "0.75rem",
                    visibility: n.trim().length > 0 ? "visible" : "hidden"
                  },
                  children: [
                    "Use",
                    " ",
                    /* @__PURE__ */ Re.jsx(
                      Sn.Text,
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
var el = { exports: {} }, qi = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var od;
function Yx() {
  return od || (od = 1, function(e) {
    function t($, F) {
      var L = $.length;
      $.push(F);
      e: for (; 0 < L; ) {
        var V = L - 1 >>> 1, W = $[V];
        if (0 < a(W, F)) $[V] = F, $[L] = W, L = V;
        else break e;
      }
    }
    function n($) {
      return $.length === 0 ? null : $[0];
    }
    function r($) {
      if ($.length === 0) return null;
      var F = $[0], L = $.pop();
      if (L !== F) {
        $[0] = L;
        e: for (var V = 0, W = $.length, U = W >>> 1; V < U; ) {
          var G = 2 * (V + 1) - 1, Q = $[G], q = G + 1, Z = $[q];
          if (0 > a(Q, L)) q < W && 0 > a(Z, Q) ? ($[V] = Z, $[q] = L, V = q) : ($[V] = Q, $[G] = L, V = G);
          else if (q < W && 0 > a(Z, L)) $[V] = Z, $[q] = L, V = q;
          else break e;
        }
      }
      return F;
    }
    function a($, F) {
      var L = $.sortIndex - F.sortIndex;
      return L !== 0 ? L : $.id - F.id;
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
    var l = [], c = [], d = 1, f = null, v = 3, g = !1, p = !1, h = !1, m = typeof setTimeout == "function" ? setTimeout : null, S = typeof clearTimeout == "function" ? clearTimeout : null, b = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function y($) {
      for (var F = n(c); F !== null; ) {
        if (F.callback === null) r(c);
        else if (F.startTime <= $) r(c), F.sortIndex = F.expirationTime, t(l, F);
        else break;
        F = n(c);
      }
    }
    function w($) {
      if (h = !1, y($), !p) if (n(l) !== null) p = !0, N(C);
      else {
        var F = n(c);
        F !== null && P(w, F.startTime - $);
      }
    }
    function C($, F) {
      p = !1, h && (h = !1, S(x), x = -1), g = !0;
      var L = v;
      try {
        for (y(F), f = n(l); f !== null && (!(f.expirationTime > F) || $ && !M()); ) {
          var V = f.callback;
          if (typeof V == "function") {
            f.callback = null, v = f.priorityLevel;
            var W = V(f.expirationTime <= F);
            F = e.unstable_now(), typeof W == "function" ? f.callback = W : f === n(l) && r(l), y(F);
          } else r(l);
          f = n(l);
        }
        if (f !== null) var U = !0;
        else {
          var G = n(c);
          G !== null && P(w, G.startTime - F), U = !1;
        }
        return U;
      } finally {
        f = null, v = L, g = !1;
      }
    }
    var O = !1, E = null, x = -1, R = 5, T = -1;
    function M() {
      return !(e.unstable_now() - T < R);
    }
    function j() {
      if (E !== null) {
        var $ = e.unstable_now();
        T = $;
        var F = !0;
        try {
          F = E(!0, $);
        } finally {
          F ? I() : (O = !1, E = null);
        }
      } else O = !1;
    }
    var I;
    if (typeof b == "function") I = function() {
      b(j);
    };
    else if (typeof MessageChannel < "u") {
      var _ = new MessageChannel(), k = _.port2;
      _.port1.onmessage = j, I = function() {
        k.postMessage(null);
      };
    } else I = function() {
      m(j, 0);
    };
    function N($) {
      E = $, O || (O = !0, I());
    }
    function P($, F) {
      x = m(function() {
        $(e.unstable_now());
      }, F);
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function($) {
      $.callback = null;
    }, e.unstable_continueExecution = function() {
      p || g || (p = !0, N(C));
    }, e.unstable_forceFrameRate = function($) {
      0 > $ || 125 < $ ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : R = 0 < $ ? Math.floor(1e3 / $) : 5;
    }, e.unstable_getCurrentPriorityLevel = function() {
      return v;
    }, e.unstable_getFirstCallbackNode = function() {
      return n(l);
    }, e.unstable_next = function($) {
      switch (v) {
        case 1:
        case 2:
        case 3:
          var F = 3;
          break;
        default:
          F = v;
      }
      var L = v;
      v = F;
      try {
        return $();
      } finally {
        v = L;
      }
    }, e.unstable_pauseExecution = function() {
    }, e.unstable_requestPaint = function() {
    }, e.unstable_runWithPriority = function($, F) {
      switch ($) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          $ = 3;
      }
      var L = v;
      v = $;
      try {
        return F();
      } finally {
        v = L;
      }
    }, e.unstable_scheduleCallback = function($, F, L) {
      var V = e.unstable_now();
      switch (typeof L == "object" && L !== null ? (L = L.delay, L = typeof L == "number" && 0 < L ? V + L : V) : L = V, $) {
        case 1:
          var W = -1;
          break;
        case 2:
          W = 250;
          break;
        case 5:
          W = 1073741823;
          break;
        case 4:
          W = 1e4;
          break;
        default:
          W = 5e3;
      }
      return W = L + W, $ = { id: d++, callback: F, priorityLevel: $, startTime: L, expirationTime: W, sortIndex: -1 }, L > V ? ($.sortIndex = L, t(c, $), n(l) === null && $ === n(c) && (h ? (S(x), x = -1) : h = !0, P(w, L - V))) : ($.sortIndex = W, t(l, $), p || g || (p = !0, N(C))), $;
    }, e.unstable_shouldYield = M, e.unstable_wrapCallback = function($) {
      var F = v;
      return function() {
        var L = v;
        v = F;
        try {
          return $.apply(this, arguments);
        } finally {
          v = L;
        }
      };
    };
  }(qi)), qi;
}
var Xi = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var id;
function Qx() {
  return id || (id = 1, function(e) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var t = !1, n = !1, r = 5;
      function a(te, le) {
        var Ie = te.length;
        te.push(le), s(te, le, Ie);
      }
      function o(te) {
        return te.length === 0 ? null : te[0];
      }
      function i(te) {
        if (te.length === 0)
          return null;
        var le = te[0], Ie = te.pop();
        return Ie !== le && (te[0] = Ie, l(te, Ie, 0)), le;
      }
      function s(te, le, Ie) {
        for (var Ve = Ie; Ve > 0; ) {
          var Ke = Ve - 1 >>> 1, Ue = te[Ke];
          if (c(Ue, le) > 0)
            te[Ke] = le, te[Ve] = Ue, Ve = Ke;
          else
            return;
        }
      }
      function l(te, le, Ie) {
        for (var Ve = Ie, Ke = te.length, Ue = Ke >>> 1; Ve < Ue; ) {
          var Ae = (Ve + 1) * 2 - 1, fe = te[Ae], he = Ae + 1, je = te[he];
          if (c(fe, le) < 0)
            he < Ke && c(je, fe) < 0 ? (te[Ve] = je, te[he] = le, Ve = he) : (te[Ve] = fe, te[Ae] = le, Ve = Ae);
          else if (he < Ke && c(je, le) < 0)
            te[Ve] = je, te[he] = le, Ve = he;
          else
            return;
        }
      }
      function c(te, le) {
        var Ie = te.sortIndex - le.sortIndex;
        return Ie !== 0 ? Ie : te.id - le.id;
      }
      var d = 1, f = 2, v = 3, g = 4, p = 5;
      function h(te, le) {
      }
      var m = typeof performance == "object" && typeof performance.now == "function";
      if (m) {
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
      var w = 1073741823, C = -1, O = 250, E = 5e3, x = 1e4, R = w, T = [], M = [], j = 1, I = null, _ = v, k = !1, N = !1, P = !1, $ = typeof setTimeout == "function" ? setTimeout : null, F = typeof clearTimeout == "function" ? clearTimeout : null, L = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function V(te) {
        for (var le = o(M); le !== null; ) {
          if (le.callback === null)
            i(M);
          else if (le.startTime <= te)
            i(M), le.sortIndex = le.expirationTime, a(T, le);
          else
            return;
          le = o(M);
        }
      }
      function W(te) {
        if (P = !1, V(te), !N)
          if (o(T) !== null)
            N = !0, Ee(U);
          else {
            var le = o(M);
            le !== null && st(W, le.startTime - te);
          }
      }
      function U(te, le) {
        N = !1, P && (P = !1, Ye()), k = !0;
        var Ie = _;
        try {
          var Ve;
          if (!n) return G(te, le);
        } finally {
          I = null, _ = Ie, k = !1;
        }
      }
      function G(te, le) {
        var Ie = le;
        for (V(Ie), I = o(T); I !== null && !t && !(I.expirationTime > Ie && (!te || ie())); ) {
          var Ve = I.callback;
          if (typeof Ve == "function") {
            I.callback = null, _ = I.priorityLevel;
            var Ke = I.expirationTime <= Ie, Ue = Ve(Ke);
            Ie = e.unstable_now(), typeof Ue == "function" ? I.callback = Ue : I === o(T) && i(T), V(Ie);
          } else
            i(T);
          I = o(T);
        }
        if (I !== null)
          return !0;
        var Ae = o(M);
        return Ae !== null && st(W, Ae.startTime - Ie), !1;
      }
      function Q(te, le) {
        switch (te) {
          case d:
          case f:
          case v:
          case g:
          case p:
            break;
          default:
            te = v;
        }
        var Ie = _;
        _ = te;
        try {
          return le();
        } finally {
          _ = Ie;
        }
      }
      function q(te) {
        var le;
        switch (_) {
          case d:
          case f:
          case v:
            le = v;
            break;
          default:
            le = _;
            break;
        }
        var Ie = _;
        _ = le;
        try {
          return te();
        } finally {
          _ = Ie;
        }
      }
      function Z(te) {
        var le = _;
        return function() {
          var Ie = _;
          _ = le;
          try {
            return te.apply(this, arguments);
          } finally {
            _ = Ie;
          }
        };
      }
      function re(te, le, Ie) {
        var Ve = e.unstable_now(), Ke;
        if (typeof Ie == "object" && Ie !== null) {
          var Ue = Ie.delay;
          typeof Ue == "number" && Ue > 0 ? Ke = Ve + Ue : Ke = Ve;
        } else
          Ke = Ve;
        var Ae;
        switch (te) {
          case d:
            Ae = C;
            break;
          case f:
            Ae = O;
            break;
          case p:
            Ae = R;
            break;
          case g:
            Ae = x;
            break;
          case v:
          default:
            Ae = E;
            break;
        }
        var fe = Ke + Ae, he = {
          id: j++,
          callback: le,
          priorityLevel: te,
          startTime: Ke,
          expirationTime: fe,
          sortIndex: -1
        };
        return Ke > Ve ? (he.sortIndex = Ke, a(M, he), o(T) === null && he === o(M) && (P ? Ye() : P = !0, st(W, Ke - Ve))) : (he.sortIndex = fe, a(T, he), !N && !k && (N = !0, Ee(U))), he;
      }
      function ae() {
      }
      function ue() {
        !N && !k && (N = !0, Ee(U));
      }
      function de() {
        return o(T);
      }
      function ce(te) {
        te.callback = null;
      }
      function ge() {
        return _;
      }
      var H = !1, ne = null, ve = -1, $e = r, pe = -1;
      function ie() {
        var te = e.unstable_now() - pe;
        return !(te < $e);
      }
      function oe() {
      }
      function se(te) {
        if (te < 0 || te > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        te > 0 ? $e = Math.floor(1e3 / te) : $e = r;
      }
      var we = function() {
        if (ne !== null) {
          var te = e.unstable_now();
          pe = te;
          var le = !0, Ie = !0;
          try {
            Ie = ne(le, te);
          } finally {
            Ie ? be() : (H = !1, ne = null);
          }
        } else
          H = !1;
      }, be;
      if (typeof L == "function")
        be = function() {
          L(we);
        };
      else if (typeof MessageChannel < "u") {
        var ye = new MessageChannel(), _e = ye.port2;
        ye.port1.onmessage = we, be = function() {
          _e.postMessage(null);
        };
      } else
        be = function() {
          $(we, 0);
        };
      function Ee(te) {
        ne = te, H || (H = !0, be());
      }
      function st(te, le) {
        ve = $(function() {
          te(e.unstable_now());
        }, le);
      }
      function Ye() {
        F(ve), ve = -1;
      }
      var xe = oe, Oe = null;
      e.unstable_IdlePriority = p, e.unstable_ImmediatePriority = d, e.unstable_LowPriority = g, e.unstable_NormalPriority = v, e.unstable_Profiling = Oe, e.unstable_UserBlockingPriority = f, e.unstable_cancelCallback = ce, e.unstable_continueExecution = ue, e.unstable_forceFrameRate = se, e.unstable_getCurrentPriorityLevel = ge, e.unstable_getFirstCallbackNode = de, e.unstable_next = q, e.unstable_pauseExecution = ae, e.unstable_requestPaint = xe, e.unstable_runWithPriority = Q, e.unstable_scheduleCallback = re, e.unstable_shouldYield = ie, e.unstable_wrapCallback = Z, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Xi)), Xi;
}
process.env.NODE_ENV === "production" ? el.exports = Yx() : el.exports = Qx();
var Zi = el.exports;
const Wo = Symbol(), Jx = Symbol(), e$ = typeof window > "u" || /ServerSideRendering/.test(window.navigator && window.navigator.userAgent), Fm = e$ ? ot : sd, t$ = Zi.unstable_runWithPriority ? (e) => {
  try {
    Zi.unstable_runWithPriority(Zi.unstable_NormalPriority, e);
  } catch (t) {
    if (t.message === "Not implemented.")
      e();
    else
      throw t;
  }
} : (e) => e(), n$ = (e) => ({ value: n, children: r }) => {
  const a = Me(n), o = Me(0), [i, s] = rt(null);
  i && (i(n), s(null));
  const l = Me();
  if (!l.current) {
    const c = /* @__PURE__ */ new Set(), d = (f, v) => {
      o.current += 1;
      const g = {
        n: o.current
      };
      v != null && v.suspense && (g.n *= -1, g.p = new Promise((p) => {
        s(() => (h) => {
          g.v = h, delete g.p, p(h);
        });
      })), c.forEach((p) => p(g)), f();
    };
    l.current = {
      [Wo]: {
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
  return Fm(() => {
    a.current = n, o.current += 1, t$(() => {
      l.current[Wo].l.forEach((c) => {
        c({ n: o.current, v: n });
      });
    });
  }, [n]), Wm(e, { value: l.current }, r);
}, r$ = (e) => e;
function a$(e) {
  const t = br({
    [Wo]: {
      /* "v"alue     */
      v: { current: e },
      /* versio"n"   */
      n: { current: -1 },
      /* "l"isteners */
      l: /* @__PURE__ */ new Set(),
      /* "u"pdate    */
      u: (n) => n()
    }
  });
  return t[Jx] = t.Provider, t.Provider = n$(t.Provider), delete t.Consumer, t;
}
function o$(e, t) {
  const n = Nt(e)[Wo];
  if (typeof process == "object" && process.env.NODE_ENV !== "production" && !n)
    throw new Error("useContextSelector requires special context");
  const {
    /* "v"alue     */
    v: { current: r },
    /* versio"n"   */
    n: { current: a },
    /* "l"isteners */
    l: o
  } = n, i = t(r), [s, l] = Um((c, d) => {
    if (!d)
      return [r, i];
    if ("p" in d)
      throw d.p;
    if (d.n === a)
      return Object.is(c[1], i) ? c : [r, i];
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
  }, [r, i]);
  return Object.is(s[1], i) || l(), Fm(() => (o.add(l), () => {
    o.delete(l);
  }), [o]), s[1];
}
function i$(e) {
  return o$(e, r$);
}
const s$ = {
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
}, Dm = a$(
  void 0
);
function v$({
  children: e
}) {
  const t = (localStorage == null ? void 0 : localStorage.getItem("appThemeMode")) || "light", [n, r] = rt(t), a = s$[n];
  return ot(() => {
    Object.entries(a).forEach(([o, i]) => {
      typeof i == "string" && document.documentElement.style.setProperty(`${o}`, i);
    });
  }, [a]), /* @__PURE__ */ Re.jsx(
    Dm.Provider,
    {
      value: {
        appThemeMode: n,
        setAppThemeMode: r,
        themeColors: a
      },
      children: /* @__PURE__ */ Re.jsx(
        Cr,
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
const l$ = () => {
  const e = i$(Dm);
  if (!e)
    throw new Error("useTheme must be used within a ThemeProvider");
  return e;
}, Bl = () => {
  const { appThemeMode: e, setAppThemeMode: t, themeColors: n } = l$();
  return {
    currentTheme: e,
    themeColors: n,
    setTheme: t,
    toggleTheme: () => {
      t(e === "light" ? "dark" : "light");
    }
  };
}, c$ = () => {
  const [e, t] = rt({ x: 0, y: 0 }), n = Me(null), { themeColors: r } = Bl(), o = ((i) => {
    const s = parseInt(i.slice(1, 3), 16), l = parseInt(i.slice(3, 5), 16), c = parseInt(i.slice(5, 7), 16);
    return { r: s, g: l, b: c };
  })(r["--primary-color"]);
  return ot(() => {
    const i = n.current;
    if (!i) return;
    const s = i.getContext("2d");
    if (!s) return;
    const l = 20, c = 70, d = () => {
      if (!(!i || !s)) {
        i.width = window.innerWidth, i.height = window.innerHeight, s.strokeStyle = `rgba(${o.r}, ${o.g}, ${o.b}, 0.05)`, s.lineWidth = 1;
        for (let g = 0; g <= i.width; g += l)
          s.beginPath(), s.moveTo(g, 0), s.lineTo(g, i.height), s.stroke();
        for (let g = 0; g <= i.height; g += l)
          s.beginPath(), s.moveTo(0, g), s.lineTo(i.width, g), s.stroke();
        for (let g = 0; g <= i.width; g += l)
          for (let p = 0; p <= i.height; p += l) {
            const h = Math.sqrt(
              Math.pow(g - e.x, 2) + Math.pow(p - e.y, 2)
            );
            if (h <= c) {
              const m = Math.cos(
                h / c * (Math.PI / 2)
              );
              s.strokeStyle = `rgba(${o.r}, ${o.g}, ${o.b}, ${m * 0.5})`, g % l === 0 && (s.beginPath(), s.moveTo(g, Math.max(0, p - l)), s.lineTo(g, Math.min(i.height, p + l)), s.stroke()), p % l === 0 && (s.beginPath(), s.moveTo(Math.max(0, g - l), p), s.lineTo(Math.min(i.width, g + l), p), s.stroke());
            }
          }
      }
    }, f = (g) => {
      t({ x: g.clientX, y: g.clientY });
    }, v = () => {
      d();
    };
    return window.addEventListener("mousemove", f), window.addEventListener("resize", v), d(), () => {
      window.removeEventListener("mousemove", f), window.removeEventListener("resize", v);
    };
  }, [e, o]), /* @__PURE__ */ Re.jsx("div", { style: { position: "absolute", top: 0, left: 0 }, children: /* @__PURE__ */ Re.jsx("canvas", { ref: n, className: "absolute inset-0" }) });
}, m$ = ({
  suggestions: e,
  handleSendMessage: t,
  heading: n,
  subHeading: r
}) => {
  const [a, o] = rt(""), { themeColors: i } = Bl(), s = Me(null);
  return /* @__PURE__ */ Re.jsxs(
    Cn,
    {
      justify: "space-evenly",
      align: "center",
      vertical: !0,
      style: { height: "90vh" },
      children: [
        /* @__PURE__ */ Re.jsx(c$, {}),
        /* @__PURE__ */ Re.jsxs(
          Cn,
          {
            vertical: !0,
            align: "center",
            gap: 12,
            style: {
              zIndex: 1
            },
            children: [
              /* @__PURE__ */ Re.jsx(
                Sn.Title,
                {
                  level: 2,
                  style: {
                    width: "30vw",
                    textAlign: "center",
                    fontFamily: "Sedan"
                  },
                  children: n
                }
              ),
              /* @__PURE__ */ Re.jsx(
                Sn.Text,
                {
                  style: {
                    width: "40vw",
                    textAlign: "center"
                  },
                  children: r
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ Re.jsxs(
          Yr,
          {
            style: {
              position: "relative",
              maxWidth: "40vw"
            },
            children: [
              /* @__PURE__ */ Re.jsxs(
                zl,
                {
                  style: {
                    position: "absolute",
                    top: "-0.7rem",
                    left: "43%",
                    width: "max-content",
                    borderColor: i["--primary-color"],
                    backgroundColor: i["--background"],
                    color: i["--primary-color"]
                  },
                  children: [
                    " ",
                    "Getting Started"
                  ]
                }
              ),
              /* @__PURE__ */ Re.jsxs(Cn, { vertical: !0, align: "center", gap: 18, children: [
                /* @__PURE__ */ Re.jsx(
                  Sn.Title,
                  {
                    level: 5,
                    style: {
                      marginTop: 0,
                      fontFamily: "Sedan"
                    },
                    children: "Suggested Questions"
                  }
                ),
                /* @__PURE__ */ Re.jsx(
                  Cn,
                  {
                    gap: 12,
                    style: {
                      width: "100%"
                    },
                    children: e.map((l) => /* @__PURE__ */ Re.jsx(
                      Yr,
                      {
                        style: {
                          width: "33%",
                          overflow: "hidden",
                          cursor: "pointer"
                        },
                        onClick: () => {
                          var c;
                          o(l), (c = s == null ? void 0 : s.current) == null || c.focus();
                        },
                        rootClassName: "hoverable-card",
                        styles: {
                          body: {
                            padding: 12
                          }
                        },
                        children: /* @__PURE__ */ Re.jsxs(
                          Sn.Text,
                          {
                            type: "secondary",
                            rootClassName: "three-line-ellipsis",
                            style: {
                              textAlign: "center"
                            },
                            children: [
                              " ",
                              l
                            ]
                          }
                        )
                      },
                      l
                    ))
                  }
                )
              ] })
            ]
          }
        ),
        /* @__PURE__ */ Re.jsx(
          Zx,
          {
            inputRef: s,
            userQuery: a,
            setUserQuery: o,
            handleSendMessage: () => {
              t(a), o("");
            }
          }
        )
      ]
    }
  );
}, g$ = () => {
  const { currentTheme: e, toggleTheme: t } = Bl(), n = () => {
    const r = e === "light" ? "dark" : "light";
    localStorage == null || localStorage.setItem("appThemeMode", r), t();
  };
  return /* @__PURE__ */ Re.jsx(
    "div",
    {
      style: {
        position: "absolute",
        bottom: 16,
        left: 16,
        zIndex: 1
      },
      children: /* @__PURE__ */ Re.jsx("button", { className: `toggle ${e}`, onClick: n, children: /* @__PURE__ */ Re.jsxs("div", { className: "icon-container", children: [
        /* @__PURE__ */ Re.jsx("div", { className: "icon icon--sun", children: /* @__PURE__ */ Re.jsxs(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 47.5 47.5",
            id: "sun",
            children: [
              /* @__PURE__ */ Re.jsx("defs", { children: /* @__PURE__ */ Re.jsx("clipPath", { id: "a", children: /* @__PURE__ */ Re.jsx("path", { d: "M0 38h38V0H0v38Z" }) }) }),
              /* @__PURE__ */ Re.jsx(
                "g",
                {
                  fill: "#ffac33",
                  clipPath: "url(#a)",
                  transform: "matrix(1.25 0 0 -1.25 0 47.5)",
                  children: /* @__PURE__ */ Re.jsx("path", { d: "M17 35s0 2 2 2 2-2 2-2v-2s0-2-2-2-2 2-2 2v2zM35 21s2 0 2-2-2-2-2-2h-2s-2 0-2 2 2 2 2 2h2zM5 21s2 0 2-2-2-2-2-2H3s-2 0-2 2 2 2 2 2h2zM10.121 29.706s1.414-1.414 0-2.828-2.828 0-2.828 0l-1.415 1.414s-1.414 1.414 0 2.829c1.415 1.414 2.829 0 2.829 0l1.414-1.415ZM31.121 8.707s1.414-1.414 0-2.828-2.828 0-2.828 0l-1.414 1.414s-1.414 1.414 0 2.828 2.828 0 2.828 0l1.414-1.414ZM30.708 26.879s-1.414-1.414-2.828 0 0 2.828 0 2.828l1.414 1.414s1.414 1.414 2.828 0 0-2.828 0-2.828l-1.414-1.414ZM9.708 5.879s-1.414-1.414-2.828 0 0 2.828 0 2.828l1.414 1.414s1.414 1.414 2.828 0 0-2.828 0-2.828L9.708 5.879ZM17 5s0 2 2 2 2-2 2-2V3s0-2-2-2-2 2-2 2v2zM29 19c0 5.523-4.478 10-10 10-5.523 0-10-4.477-10-10 0-5.522 4.477-10 10-10 5.522 0 10 4.478 10 10" })
                }
              )
            ]
          }
        ) }),
        /* @__PURE__ */ Re.jsx("div", { className: "icon icon--moon", children: /* @__PURE__ */ Re.jsx(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: "30",
            height: "30",
            viewBox: "0 0 512 512",
            id: "moon",
            children: /* @__PURE__ */ Re.jsxs("g", { children: [
              /* @__PURE__ */ Re.jsx(
                "path",
                {
                  fill: "#6A6D68",
                  d: "M412.95,381.15c-8.05,10.119-16.94,19.33-26.55,27.54c-2.271,1.939-4.58,3.819-6.92,5.64   c-0.261,0.21-0.521,0.42-0.78,0.63c-0.09,0.07-0.19,0.13-0.28,0.2c-5.979,4.6-12.2,8.83-18.64,12.689   c-1.92,1.15-3.851,2.28-5.811,3.37c-18.14,10.061-37.819,17.221-58.42,21.16c-12.27,2.34-24.87,3.55-37.66,3.55   c-27.92,0-54.94-5.739-80.32-17.04c-7.74-3.46-15.3-7.43-22.47-11.81c-6.96-4.24-13.77-9-20.24-14.14   c-5.28-4.19-10.3-8.62-15.07-13.25c-1.3-1.261-2.57-2.54-3.82-3.83c-30.43-31.21-49.57-71.37-54.6-115.38   c-4.54-39.75,2.83-79.04,20.95-113.75c4.99-9.561,10.81-18.78,17.41-27.561c0.2-0.26,0.4-0.529,0.6-0.79   c0.9-1.18,1.81-2.359,2.74-3.529c37.77-47.521,94.29-74.78,155.07-74.78c45.101,0,87.641,14.87,123.021,42.99   c1.54,1.22,2.89,2.33,4.14,3.39c3.16,2.64,6.29,5.43,9.51,8.5c0.49,0.47,0.99,0.94,1.471,1.43c1.3,1.25,2.58,2.54,3.84,3.83   c32.41,33.351,51.979,77.011,55.31,123.75C458.97,293.51,443.88,342.23,412.95,381.15z",
                  opacity: ".9"
                }
              ),
              /* @__PURE__ */ Re.jsx(
                "path",
                {
                  fill: "#A3AAA0",
                  d: "M408.95,377.15c-8.05,10.119-16.94,19.33-26.55,27.54c-2.271,1.939-4.58,3.819-6.92,5.64   c-0.261,0.21-0.521,0.42-0.78,0.63c-0.09,0.07-0.19,0.13-0.28,0.2c-5.979,4.6-12.2,8.83-18.64,12.689   c-1.92,1.15-3.851,2.28-5.811,3.37c-19.76,10.96-41.359,18.471-63.979,22.141c-10.51,1.699-21.23,2.569-32.101,2.569   c-27.92,0-54.94-5.739-80.32-17.04c-7.74-3.46-15.3-7.43-22.47-11.81c-6.96-4.24-13.77-9-20.24-14.14   c-5.21-4.141-10.17-8.511-14.89-13.08c-0.06-0.051-0.12-0.11-0.18-0.17c-32.64-31.721-53.18-73.381-58.42-119.21   c-4.54-39.75,2.83-79.04,20.95-113.75c4.99-9.561,10.81-18.78,17.41-27.561c1.09-1.449,2.2-2.89,3.34-4.319   c0.55-0.69,1.1-1.37,1.65-2.051c37.76-46.25,93.52-72.729,153.42-72.729c45.101,0,87.641,14.87,123.021,42.99   c1.54,1.22,2.89,2.33,4.14,3.39c3.16,2.64,6.29,5.43,9.51,8.5c1.811,1.72,3.58,3.48,5.311,5.26c0.05,0.061,0.11,0.11,0.16,0.17   c32.319,33.33,51.83,76.92,55.149,123.58C454.97,289.51,439.88,338.23,408.95,377.15z"
                }
              ),
              /* @__PURE__ */ Re.jsx(
                "circle",
                {
                  cx: "285",
                  cy: "156",
                  r: "44.5",
                  fill: "#666865",
                  stroke: "#5E5E5D",
                  strokeMiterlimit: "10",
                  strokeWidth: "4"
                }
              ),
              /* @__PURE__ */ Re.jsx(
                "circle",
                {
                  cx: "385",
                  cy: "300",
                  r: "21.5",
                  fill: "#666865",
                  stroke: "#5E5E5D",
                  strokeMiterlimit: "10",
                  strokeWidth: "4"
                }
              ),
              /* @__PURE__ */ Re.jsx(
                "circle",
                {
                  cx: "166",
                  cy: "296.5",
                  r: "27.84",
                  fill: "#666865",
                  stroke: "#5E5E5D",
                  strokeMiterlimit: "10",
                  strokeWidth: "4"
                }
              ),
              /* @__PURE__ */ Re.jsx(
                "circle",
                {
                  cx: "261.25",
                  cy: "272.75",
                  r: "14.75",
                  fill: "#666865",
                  stroke: "#5E5E5D",
                  strokeMiterlimit: "10",
                  strokeWidth: "4"
                }
              ),
              /* @__PURE__ */ Re.jsx(
                "circle",
                {
                  cx: "151.5",
                  cy: "184",
                  r: "28",
                  fill: "#666865",
                  stroke: "#5E5E5D",
                  strokeMiterlimit: "10",
                  strokeWidth: "4"
                }
              ),
              /* @__PURE__ */ Re.jsx(
                "circle",
                {
                  cx: "297.5",
                  cy: "382.501",
                  r: "27.5",
                  fill: "#666865",
                  stroke: "#5E5E5D",
                  strokeMiterlimit: "10",
                  strokeWidth: "4"
                }
              ),
              /* @__PURE__ */ Re.jsx(
                "circle",
                {
                  cx: "395",
                  cy: "213",
                  r: "18.5",
                  fill: "#666865",
                  stroke: "#5E5E5D",
                  strokeMiterlimit: "10",
                  strokeWidth: "4"
                }
              ),
              /* @__PURE__ */ Re.jsx(
                "circle",
                {
                  cx: "317",
                  cy: "216",
                  r: "8",
                  fill: "#666865",
                  stroke: "#5E5E5D",
                  strokeMiterlimit: "10",
                  strokeWidth: "4"
                }
              ),
              /* @__PURE__ */ Re.jsx(
                "path",
                {
                  fill: "#666865",
                  stroke: "#5E5E5D",
                  strokeMiterlimit: "10",
                  strokeWidth: "4",
                  d: "M299.55,450.38   c-12.27,2.34-24.87,3.55-37.66,3.55c-27.92,0-54.94-5.739-80.32-17.04c-7.74-3.46-15.3-7.43-22.47-11.81   c-6.96-4.24-13.77-9-20.24-14.14c-5.28-4.19-10.3-8.62-15.07-13.25c-1.3-1.261-2.57-2.54-3.82-3.83   c-0.06-0.051-0.12-0.11-0.18-0.17c-32.64-31.721-53.18-73.381-58.42-119.21c-4.54-39.75,2.83-79.04,20.95-113.75   c4.99-9.561,10.81-18.78,17.41-27.561c1.09-1.449,2.2-2.89,3.34-4.319c0.55-0.69,1.1-1.37,1.65-2.051   c-0.16,3.011-0.29,6.2-0.39,9.58c-2.39,79.15,12.97,253.43,185.661,310.98C293.12,448.41,296.31,449.42,299.55,450.38z",
                  opacity: ".2"
                }
              )
            ] })
          }
        ) })
      ] }) })
    }
  );
}, p$ = () => /* @__PURE__ */ Re.jsxs(Re.Fragment, { children: [
  /* @__PURE__ */ Re.jsxs(
    Cn,
    {
      align: "center",
      gap: 8,
      style: {
        position: "absolute",
        top: 16,
        left: 16,
        cursor: "pointer"
      },
      onClick: () => {
        window.open("https://houseware.io", "_blank");
      },
      children: [
        /* @__PURE__ */ Re.jsx(jl, { src: "/app-logo.png", height: 30, width: 30, preview: !1 }),
        /* @__PURE__ */ Re.jsx(
          Sn.Title,
          {
            style: {
              fontFamily: "Libre Franklin, sans-serif",
              fontSize: "1rem",
              margin: 0,
              fontWeight: 600
            },
            level: 5,
            children: "houseware"
          }
        )
      ]
    }
  ),
  /* @__PURE__ */ Re.jsxs(
    Cn,
    {
      vertical: !0,
      style: {
        position: "absolute",
        bottom: 16,
        right: 16,
        zIndex: 1
      },
      gap: 16,
      children: [
        /* @__PURE__ */ Re.jsx(
          hr,
          {
            size: "large",
            shape: "circle",
            type: "text",
            onClick: () => {
              window.open("https://x.com/gethouseware", "_blank");
            },
            icon: /* @__PURE__ */ Re.jsx(
              md,
              {
                size: "1.5rem",
                weight: "duotone",
                color: "var(--secondary-text)"
              }
            )
          }
        ),
        /* @__PURE__ */ Re.jsx(
          hr,
          {
            size: "large",
            shape: "circle",
            type: "text",
            onClick: () => {
              window.open(
                "https://www.linkedin.com/company/gethouseware",
                "_blank"
              );
            },
            icon: /* @__PURE__ */ Re.jsx(
              fd,
              {
                size: "1.5rem",
                weight: "duotone",
                color: "var(--secondary-text)"
              }
            )
          }
        ),
        /* @__PURE__ */ Re.jsx(
          hr,
          {
            size: "large",
            shape: "circle",
            type: "text",
            onClick: () => {
              window.open("https://www.youtube.com/@getHouseware", "_blank");
            },
            icon: /* @__PURE__ */ Re.jsx(
              gd,
              {
                size: "1.5rem",
                weight: "duotone",
                color: "var(--secondary-text)"
              }
            )
          }
        )
      ]
    }
  )
] });
export {
  v$ as AppThemeProvider,
  f$ as Button,
  Zx as ChatInput,
  p$ as HousewareBranding,
  g$ as ThemeToggle,
  m$ as WelcomeScreen,
  Bl as useThemeManager
};
