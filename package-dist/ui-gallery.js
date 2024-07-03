import * as u from "react";
import q, { createContext as kn, forwardRef as Vr, useContext as Ht, version as yv, isValidElement as Sv, useRef as Be, useLayoutEffect as Cv, useEffect as yt, useMemo as Yr, useState as bt, Children as Ev, createRef as xv, useCallback as Gr, useImperativeHandle as No, cloneElement as wv } from "react";
import * as $v from "react-dom";
import vl, { createPortal as Ov, unstable_batchedUpdates as Rv, flushSync as Pv } from "react-dom";
function vu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ii = { exports: {} }, ta = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gl;
function _v() {
  if (gl) return ta;
  gl = 1;
  var e = q, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(s, l, c) {
    var d, f = {}, v = null, m = null;
    c !== void 0 && (v = "" + c), l.key !== void 0 && (v = "" + l.key), l.ref !== void 0 && (m = l.ref);
    for (d in l) n.call(l, d) && !o.hasOwnProperty(d) && (f[d] = l[d]);
    if (s && s.defaultProps) for (d in l = s.defaultProps, l) f[d] === void 0 && (f[d] = l[d]);
    return { $$typeof: t, type: s, key: v, ref: m, props: f, _owner: a.current };
  }
  return ta.Fragment = r, ta.jsx = i, ta.jsxs = i, ta;
}
var ra = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ml;
function Tv() {
  return ml || (ml = 1, process.env.NODE_ENV !== "production" && function() {
    var e = q, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), b = Symbol.iterator, p = "@@iterator";
    function g(P) {
      if (P === null || typeof P != "object")
        return null;
      var H = b && P[b] || P[p];
      return typeof H == "function" ? H : null;
    }
    var S = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function h(P) {
      {
        for (var H = arguments.length, U = new Array(H > 1 ? H - 1 : 0), oe = 1; oe < H; oe++)
          U[oe - 1] = arguments[oe];
        y("error", P, U);
      }
    }
    function y(P, H, U) {
      {
        var oe = S.ReactDebugCurrentFrame, Ne = oe.getStackAddendum();
        Ne !== "" && (H += "%s", U = U.concat([Ne]));
        var Oe = U.map(function(Ie) {
          return String(Ie);
        });
        Oe.unshift("Warning: " + H), Function.prototype.apply.call(console[P], console, Oe);
      }
    }
    var E = !1, C = !1, O = !1, R = !1, w = !1, $;
    $ = Symbol.for("react.module.reference");
    function A(P) {
      return !!(typeof P == "string" || typeof P == "function" || P === n || P === o || w || P === a || P === c || P === d || R || P === m || E || C || O || typeof P == "object" && P !== null && (P.$$typeof === v || P.$$typeof === f || P.$$typeof === i || P.$$typeof === s || P.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      P.$$typeof === $ || P.getModuleId !== void 0));
    }
    function F(P, H, U) {
      var oe = P.displayName;
      if (oe)
        return oe;
      var Ne = H.displayName || H.name || "";
      return Ne !== "" ? U + "(" + Ne + ")" : U;
    }
    function M(P) {
      return P.displayName || "Context";
    }
    function I(P) {
      if (P == null)
        return null;
      if (typeof P.tag == "number" && h("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof P == "function")
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
            var H = P;
            return M(H) + ".Consumer";
          case i:
            var U = P;
            return M(U._context) + ".Provider";
          case l:
            return F(P, P.render, "ForwardRef");
          case f:
            var oe = P.displayName || null;
            return oe !== null ? oe : I(P.type) || "Memo";
          case v: {
            var Ne = P, Oe = Ne._payload, Ie = Ne._init;
            try {
              return I(Ie(Oe));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var T = Object.assign, k = 0, N, x, _, z, L, B, X;
    function W() {
    }
    W.__reactDisabledLog = !0;
    function G() {
      {
        if (k === 0) {
          N = console.log, x = console.info, _ = console.warn, z = console.error, L = console.group, B = console.groupCollapsed, X = console.groupEnd;
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
        k++;
      }
    }
    function Q() {
      {
        if (k--, k === 0) {
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
              value: _
            }),
            error: T({}, P, {
              value: z
            }),
            group: T({}, P, {
              value: L
            }),
            groupCollapsed: T({}, P, {
              value: B
            }),
            groupEnd: T({}, P, {
              value: X
            })
          });
        }
        k < 0 && h("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Y = S.ReactCurrentDispatcher, J;
    function ne(P, H, U) {
      {
        if (J === void 0)
          try {
            throw Error();
          } catch (Ne) {
            var oe = Ne.stack.trim().match(/\n( *(at )?)/);
            J = oe && oe[1] || "";
          }
        return `
` + J + P;
      }
    }
    var se = !1, xe;
    {
      var de = typeof WeakMap == "function" ? WeakMap : Map;
      xe = new de();
    }
    function ue(P, H) {
      if (!P || se)
        return "";
      {
        var U = xe.get(P);
        if (U !== void 0)
          return U;
      }
      var oe;
      se = !0;
      var Ne = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Oe;
      Oe = Y.current, Y.current = null, G();
      try {
        if (H) {
          var Ie = function() {
            throw Error();
          };
          if (Object.defineProperty(Ie.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Ie, []);
            } catch (ut) {
              oe = ut;
            }
            Reflect.construct(P, [], Ie);
          } else {
            try {
              Ie.call();
            } catch (ut) {
              oe = ut;
            }
            P.call(Ie.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ut) {
            oe = ut;
          }
          P();
        }
      } catch (ut) {
        if (ut && oe && typeof ut.stack == "string") {
          for (var Me = ut.stack.split(`
`), ct = oe.stack.split(`
`), Ze = Me.length - 1, Ve = ct.length - 1; Ze >= 1 && Ve >= 0 && Me[Ze] !== ct[Ve]; )
            Ve--;
          for (; Ze >= 1 && Ve >= 0; Ze--, Ve--)
            if (Me[Ze] !== ct[Ve]) {
              if (Ze !== 1 || Ve !== 1)
                do
                  if (Ze--, Ve--, Ve < 0 || Me[Ze] !== ct[Ve]) {
                    var $t = `
` + Me[Ze].replace(" at new ", " at ");
                    return P.displayName && $t.includes("<anonymous>") && ($t = $t.replace("<anonymous>", P.displayName)), typeof P == "function" && xe.set(P, $t), $t;
                  }
                while (Ze >= 1 && Ve >= 0);
              break;
            }
        }
      } finally {
        se = !1, Y.current = Oe, Q(), Error.prepareStackTrace = Ne;
      }
      var Kt = P ? P.displayName || P.name : "", Vt = Kt ? ne(Kt) : "";
      return typeof P == "function" && xe.set(P, Vt), Vt;
    }
    function Ce(P, H, U) {
      return ue(P, !1);
    }
    function V(P) {
      var H = P.prototype;
      return !!(H && H.isReactComponent);
    }
    function le(P, H, U) {
      if (P == null)
        return "";
      if (typeof P == "function")
        return ue(P, V(P));
      if (typeof P == "string")
        return ne(P);
      switch (P) {
        case c:
          return ne("Suspense");
        case d:
          return ne("SuspenseList");
      }
      if (typeof P == "object")
        switch (P.$$typeof) {
          case l:
            return Ce(P.render);
          case f:
            return le(P.type, H, U);
          case v: {
            var oe = P, Ne = oe._payload, Oe = oe._init;
            try {
              return le(Oe(Ne), H, U);
            } catch {
            }
          }
        }
      return "";
    }
    var fe = Object.prototype.hasOwnProperty, Re = {}, me = S.ReactDebugCurrentFrame;
    function ae(P) {
      if (P) {
        var H = P._owner, U = le(P.type, P._source, H ? H.type : null);
        me.setExtraStackFrame(U);
      } else
        me.setExtraStackFrame(null);
    }
    function te(P, H, U, oe, Ne) {
      {
        var Oe = Function.call.bind(fe);
        for (var Ie in P)
          if (Oe(P, Ie)) {
            var Me = void 0;
            try {
              if (typeof P[Ie] != "function") {
                var ct = Error((oe || "React class") + ": " + U + " type `" + Ie + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof P[Ie] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ct.name = "Invariant Violation", ct;
              }
              Me = P[Ie](H, Ie, oe, U, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Ze) {
              Me = Ze;
            }
            Me && !(Me instanceof Error) && (ae(Ne), h("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", oe || "React class", U, Ie, typeof Me), ae(null)), Me instanceof Error && !(Me.message in Re) && (Re[Me.message] = !0, ae(Ne), h("Failed %s type: %s", U, Me.message), ae(null));
          }
      }
    }
    var re = Array.isArray;
    function be(P) {
      return re(P);
    }
    function ye(P) {
      {
        var H = typeof Symbol == "function" && Symbol.toStringTag, U = H && P[Symbol.toStringTag] || P.constructor.name || "Object";
        return U;
      }
    }
    function ge(P) {
      try {
        return Pe(P), !1;
      } catch {
        return !0;
      }
    }
    function Pe(P) {
      return "" + P;
    }
    function ve(P) {
      if (ge(P))
        return h("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ye(P)), Pe(P);
    }
    var vt = S.ReactCurrentOwner, it = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, $e, we, je;
    je = {};
    function ze(P) {
      if (fe.call(P, "ref")) {
        var H = Object.getOwnPropertyDescriptor(P, "ref").get;
        if (H && H.isReactWarning)
          return !1;
      }
      return P.ref !== void 0;
    }
    function gt(P) {
      if (fe.call(P, "key")) {
        var H = Object.getOwnPropertyDescriptor(P, "key").get;
        if (H && H.isReactWarning)
          return !1;
      }
      return P.key !== void 0;
    }
    function mt(P, H) {
      if (typeof P.ref == "string" && vt.current && H && vt.current.stateNode !== H) {
        var U = I(vt.current.type);
        je[U] || (h('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', I(vt.current.type), P.ref), je[U] = !0);
      }
    }
    function wt(P, H) {
      {
        var U = function() {
          $e || ($e = !0, h("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", H));
        };
        U.isReactWarning = !0, Object.defineProperty(P, "key", {
          get: U,
          configurable: !0
        });
      }
    }
    function et(P, H) {
      {
        var U = function() {
          we || (we = !0, h("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", H));
        };
        U.isReactWarning = !0, Object.defineProperty(P, "ref", {
          get: U,
          configurable: !0
        });
      }
    }
    var Le = function(P, H, U, oe, Ne, Oe, Ie) {
      var Me = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: P,
        key: H,
        ref: U,
        props: Ie,
        // Record the component responsible for creating this element.
        _owner: Oe
      };
      return Me._store = {}, Object.defineProperty(Me._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Me, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: oe
      }), Object.defineProperty(Me, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ne
      }), Object.freeze && (Object.freeze(Me.props), Object.freeze(Me)), Me;
    };
    function ie(P, H, U, oe, Ne) {
      {
        var Oe, Ie = {}, Me = null, ct = null;
        U !== void 0 && (ve(U), Me = "" + U), gt(H) && (ve(H.key), Me = "" + H.key), ze(H) && (ct = H.ref, mt(H, Ne));
        for (Oe in H)
          fe.call(H, Oe) && !it.hasOwnProperty(Oe) && (Ie[Oe] = H[Oe]);
        if (P && P.defaultProps) {
          var Ze = P.defaultProps;
          for (Oe in Ze)
            Ie[Oe] === void 0 && (Ie[Oe] = Ze[Oe]);
        }
        if (Me || ct) {
          var Ve = typeof P == "function" ? P.displayName || P.name || "Unknown" : P;
          Me && wt(Ie, Ve), ct && et(Ie, Ve);
        }
        return Le(P, Me, ct, Ne, oe, vt.current, Ie);
      }
    }
    var Ee = S.ReactCurrentOwner, qe = S.ReactDebugCurrentFrame;
    function Qe(P) {
      if (P) {
        var H = P._owner, U = le(P.type, P._source, H ? H.type : null);
        qe.setExtraStackFrame(U);
      } else
        qe.setExtraStackFrame(null);
    }
    var St;
    St = !1;
    function ot(P) {
      return typeof P == "object" && P !== null && P.$$typeof === t;
    }
    function He() {
      {
        if (Ee.current) {
          var P = I(Ee.current.type);
          if (P)
            return `

Check the render method of \`` + P + "`.";
        }
        return "";
      }
    }
    function ke(P) {
      return "";
    }
    var De = {};
    function Te(P) {
      {
        var H = He();
        if (!H) {
          var U = typeof P == "string" ? P : P.displayName || P.name;
          U && (H = `

Check the top-level render call using <` + U + ">.");
        }
        return H;
      }
    }
    function pe(P, H) {
      {
        if (!P._store || P._store.validated || P.key != null)
          return;
        P._store.validated = !0;
        var U = Te(H);
        if (De[U])
          return;
        De[U] = !0;
        var oe = "";
        P && P._owner && P._owner !== Ee.current && (oe = " It was passed a child from " + I(P._owner.type) + "."), Qe(P), h('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', U, oe), Qe(null);
      }
    }
    function Ge(P, H) {
      {
        if (typeof P != "object")
          return;
        if (be(P))
          for (var U = 0; U < P.length; U++) {
            var oe = P[U];
            ot(oe) && pe(oe, H);
          }
        else if (ot(P))
          P._store && (P._store.validated = !0);
        else if (P) {
          var Ne = g(P);
          if (typeof Ne == "function" && Ne !== P.entries)
            for (var Oe = Ne.call(P), Ie; !(Ie = Oe.next()).done; )
              ot(Ie.value) && pe(Ie.value, H);
        }
      }
    }
    function pt(P) {
      {
        var H = P.type;
        if (H == null || typeof H == "string")
          return;
        var U;
        if (typeof H == "function")
          U = H.propTypes;
        else if (typeof H == "object" && (H.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        H.$$typeof === f))
          U = H.propTypes;
        else
          return;
        if (U) {
          var oe = I(H);
          te(U, P.props, "prop", oe, P);
        } else if (H.PropTypes !== void 0 && !St) {
          St = !0;
          var Ne = I(H);
          h("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ne || "Unknown");
        }
        typeof H.getDefaultProps == "function" && !H.getDefaultProps.isReactClassApproved && h("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function We(P) {
      {
        for (var H = Object.keys(P.props), U = 0; U < H.length; U++) {
          var oe = H[U];
          if (oe !== "children" && oe !== "key") {
            Qe(P), h("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", oe), Qe(null);
            break;
          }
        }
        P.ref !== null && (Qe(P), h("Invalid attribute `ref` supplied to `React.Fragment`."), Qe(null));
      }
    }
    var Ke = {};
    function rt(P, H, U, oe, Ne, Oe) {
      {
        var Ie = A(P);
        if (!Ie) {
          var Me = "";
          (P === void 0 || typeof P == "object" && P !== null && Object.keys(P).length === 0) && (Me += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ct = ke();
          ct ? Me += ct : Me += He();
          var Ze;
          P === null ? Ze = "null" : be(P) ? Ze = "array" : P !== void 0 && P.$$typeof === t ? (Ze = "<" + (I(P.type) || "Unknown") + " />", Me = " Did you accidentally export a JSX literal instead of a component?") : Ze = typeof P, h("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ze, Me);
        }
        var Ve = ie(P, H, U, Ne, Oe);
        if (Ve == null)
          return Ve;
        if (Ie) {
          var $t = H.children;
          if ($t !== void 0)
            if (oe)
              if (be($t)) {
                for (var Kt = 0; Kt < $t.length; Kt++)
                  Ge($t[Kt], P);
                Object.freeze && Object.freeze($t);
              } else
                h("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ge($t, P);
        }
        if (fe.call(H, "key")) {
          var Vt = I(P), ut = Object.keys(H).filter(function(Ut) {
            return Ut !== "key";
          }), Er = ut.length > 0 ? "{key: someKey, " + ut.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ke[Vt + Er]) {
            var Br = ut.length > 0 ? "{" + ut.join(": ..., ") + ": ...}" : "{}";
            h(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Er, Vt, Br, Vt), Ke[Vt + Er] = !0;
          }
        }
        return P === n ? We(Ve) : pt(Ve), Ve;
      }
    }
    function ht(P, H, U) {
      return rt(P, H, U, !0);
    }
    function _t(P, H, U) {
      return rt(P, H, U, !1);
    }
    var zt = _t, Wt = ht;
    ra.Fragment = n, ra.jsx = zt, ra.jsxs = Wt;
  }()), ra;
}
process.env.NODE_ENV === "production" ? Ii.exports = _v() : Ii.exports = Tv();
var lr = Ii.exports;
const ZE = ({
  primary: e = !1,
  size: t = "medium",
  backgroundColor: r,
  label: n,
  ...a
}) => {
  const o = e ? "storybook-button--primary" : "storybook-button--secondary";
  return /* @__PURE__ */ lr.jsx(
    "button",
    {
      type: "button",
      className: ["storybook-button", `storybook-button--${t}`, o].join(" "),
      style: { backgroundColor: r },
      ...a,
      children: n
    }
  );
}, Nv = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ q.createElement(q.Fragment, null, /* @__PURE__ */ q.createElement("path", { d: "M230.14,25.86a20,20,0,0,0-19.57-5.11l-.22.07L18.44,79a20,20,0,0,0-3.06,37.25L99,157l40.71,83.65a19.81,19.81,0,0,0,18,11.38c.57,0,1.15,0,1.73-.07A19.82,19.82,0,0,0,177,237.56L235.18,45.65a1.42,1.42,0,0,0,.07-.22A20,20,0,0,0,230.14,25.86ZM156.91,221.07l-34.37-70.64,46-45.95a12,12,0,0,0-17-17l-46,46L34.93,99.09,210,46Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ q.createElement(q.Fragment, null, /* @__PURE__ */ q.createElement(
      "path",
      {
        d: "M223.69,42.18l-58.22,192a8,8,0,0,1-14.92,1.25L108,148,20.58,105.45a8,8,0,0,1,1.25-14.92l192-58.22A8,8,0,0,1,223.69,42.18Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ q.createElement("path", { d: "M227.32,28.68a16,16,0,0,0-15.66-4.08l-.15,0L19.57,82.84a16,16,0,0,0-2.49,29.8L102,154l41.3,84.87A15.86,15.86,0,0,0,157.74,248q.69,0,1.38-.06a15.88,15.88,0,0,0,14-11.51l58.2-191.94c0-.05,0-.1,0-.15A16,16,0,0,0,227.32,28.68ZM157.83,231.85l-.05.14,0-.07-40.06-82.3,48-48a8,8,0,0,0-11.31-11.31l-48,48L24.08,98.25l-.07,0,.14,0L216,40Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ q.createElement(q.Fragment, null, /* @__PURE__ */ q.createElement("path", { d: "M231.4,44.34s0,.1,0,.15l-58.2,191.94a15.88,15.88,0,0,1-14,11.51q-.69.06-1.38.06a15.86,15.86,0,0,1-14.42-9.15L107,164.15a4,4,0,0,1,.77-4.58l57.92-57.92a8,8,0,0,0-11.31-11.31L96.43,148.26a4,4,0,0,1-4.58.77L17.08,112.64a16,16,0,0,1,2.49-29.8l191.94-58.2.15,0A16,16,0,0,1,231.4,44.34Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ q.createElement(q.Fragment, null, /* @__PURE__ */ q.createElement("path", { d: "M225.88,30.12a13.83,13.83,0,0,0-13.7-3.58l-.11,0L20.14,84.77A14,14,0,0,0,18,110.85l85.56,41.64L145.12,238a13.87,13.87,0,0,0,12.61,8c.4,0,.81,0,1.21-.05a13.9,13.9,0,0,0,12.29-10.09l58.2-191.93,0-.11A13.83,13.83,0,0,0,225.88,30.12Zm-8,10.4L159.73,232.43l0,.11a2,2,0,0,1-3.76.26l-40.68-83.58,49-49a6,6,0,1,0-8.49-8.49l-49,49L23.15,100a2,2,0,0,1,.31-3.74l.11,0L215.48,38.08a1.94,1.94,0,0,1,1.92.52A2,2,0,0,1,217.92,40.52Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ q.createElement(q.Fragment, null, /* @__PURE__ */ q.createElement("path", { d: "M227.32,28.68a16,16,0,0,0-15.66-4.08l-.15,0L19.57,82.84a16,16,0,0,0-2.49,29.8L102,154l41.3,84.87A15.86,15.86,0,0,0,157.74,248q.69,0,1.38-.06a15.88,15.88,0,0,0,14-11.51l58.2-191.94c0-.05,0-.1,0-.15A16,16,0,0,0,227.32,28.68ZM157.83,231.85l-.05.14,0-.07-40.06-82.3,48-48a8,8,0,0,0-11.31-11.31l-48,48L24.08,98.25l-.07,0,.14,0L216,40Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ q.createElement(q.Fragment, null, /* @__PURE__ */ q.createElement("path", { d: "M224.47,31.52a11.87,11.87,0,0,0-11.82-3L20.74,86.67a12,12,0,0,0-1.91,22.38L105,151l41.92,86.15A11.88,11.88,0,0,0,157.74,244c.34,0,.69,0,1,0a11.89,11.89,0,0,0,10.52-8.63l58.21-192,0-.08A11.85,11.85,0,0,0,224.47,31.52Zm-4.62,9.54-58.23,192a4,4,0,0,1-7.48.59l-41.3-84.86,50-50a4,4,0,1,0-5.66-5.66l-50,50-84.9-41.31a3.88,3.88,0,0,1-2.27-4,3.93,3.93,0,0,1,3-3.54L214.9,36.16A3.93,3.93,0,0,1,216,36a4,4,0,0,1,2.79,1.19A3.93,3.93,0,0,1,219.85,41.06Z" }))
  ]
]), Iv = kn({
  color: "currentColor",
  size: "1em",
  weight: "regular",
  mirrored: !1
});
var Mv = Object.defineProperty, yo = Object.getOwnPropertySymbols, gu = Object.prototype.hasOwnProperty, mu = Object.prototype.propertyIsEnumerable, pl = (e, t, r) => t in e ? Mv(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, hl = (e, t) => {
  for (var r in t || (t = {}))
    gu.call(t, r) && pl(e, r, t[r]);
  if (yo)
    for (var r of yo(t))
      mu.call(t, r) && pl(e, r, t[r]);
  return e;
}, bl = (e, t) => {
  var r = {};
  for (var n in e)
    gu.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && yo)
    for (var n of yo(e))
      t.indexOf(n) < 0 && mu.call(e, n) && (r[n] = e[n]);
  return r;
};
const pu = Vr((e, t) => {
  const r = e, {
    alt: n,
    color: a,
    size: o,
    weight: i,
    mirrored: s,
    children: l,
    weights: c
  } = r, d = bl(r, [
    "alt",
    "color",
    "size",
    "weight",
    "mirrored",
    "children",
    "weights"
  ]), f = Ht(Iv), {
    color: v = "currentColor",
    size: m,
    weight: b = "regular",
    mirrored: p = !1
  } = f, g = bl(f, [
    "color",
    "size",
    "weight",
    "mirrored"
  ]);
  return /* @__PURE__ */ q.createElement(
    "svg",
    hl(hl({
      ref: t,
      xmlns: "http://www.w3.org/2000/svg",
      width: o ?? m,
      height: o ?? m,
      fill: a ?? v,
      viewBox: "0 0 256 256",
      transform: s || p ? "scale(-1, 1)" : void 0
    }, g), d),
    !!n && /* @__PURE__ */ q.createElement("title", null, n),
    l,
    c.get(i ?? b)
  );
});
pu.displayName = "IconBase";
const Av = pu;
var jv = Object.defineProperty, Fv = Object.defineProperties, Lv = Object.getOwnPropertyDescriptors, yl = Object.getOwnPropertySymbols, Dv = Object.prototype.hasOwnProperty, zv = Object.prototype.propertyIsEnumerable, Sl = (e, t, r) => t in e ? jv(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, Vv = (e, t) => {
  for (var r in t || (t = {}))
    Dv.call(t, r) && Sl(e, r, t[r]);
  if (yl)
    for (var r of yl(t))
      zv.call(t, r) && Sl(e, r, t[r]);
  return e;
}, Bv = (e, t) => Fv(e, Lv(t));
const hu = Vr((e, t) => /* @__PURE__ */ q.createElement(Av, Bv(Vv({ ref: t }, e), { weights: Nv })));
hu.displayName = "PaperPlaneTilt";
var bu = { exports: {} };
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
})(bu);
var kv = bu.exports;
const Z = /* @__PURE__ */ vu(kv);
function _e() {
  return _e = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, _e.apply(null, arguments);
}
var Mi = { exports: {} }, nt = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cl;
function Hv() {
  if (Cl) return nt;
  Cl = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), i = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), b;
  b = Symbol.for("react.module.reference");
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
  return nt.ContextConsumer = i, nt.ContextProvider = o, nt.Element = e, nt.ForwardRef = l, nt.Fragment = r, nt.Lazy = v, nt.Memo = f, nt.Portal = t, nt.Profiler = a, nt.StrictMode = n, nt.Suspense = c, nt.SuspenseList = d, nt.isAsyncMode = function() {
    return !1;
  }, nt.isConcurrentMode = function() {
    return !1;
  }, nt.isContextConsumer = function(g) {
    return p(g) === i;
  }, nt.isContextProvider = function(g) {
    return p(g) === o;
  }, nt.isElement = function(g) {
    return typeof g == "object" && g !== null && g.$$typeof === e;
  }, nt.isForwardRef = function(g) {
    return p(g) === l;
  }, nt.isFragment = function(g) {
    return p(g) === r;
  }, nt.isLazy = function(g) {
    return p(g) === v;
  }, nt.isMemo = function(g) {
    return p(g) === f;
  }, nt.isPortal = function(g) {
    return p(g) === t;
  }, nt.isProfiler = function(g) {
    return p(g) === a;
  }, nt.isStrictMode = function(g) {
    return p(g) === n;
  }, nt.isSuspense = function(g) {
    return p(g) === c;
  }, nt.isSuspenseList = function(g) {
    return p(g) === d;
  }, nt.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === r || g === a || g === n || g === c || g === d || g === m || typeof g == "object" && g !== null && (g.$$typeof === v || g.$$typeof === f || g.$$typeof === o || g.$$typeof === i || g.$$typeof === l || g.$$typeof === b || g.getModuleId !== void 0);
  }, nt.typeOf = p, nt;
}
var at = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var El;
function Wv() {
  return El || (El = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), i = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), b = !1, p = !1, g = !1, S = !1, h = !1, y;
    y = Symbol.for("react.module.reference");
    function E(V) {
      return !!(typeof V == "string" || typeof V == "function" || V === r || V === a || h || V === n || V === c || V === d || S || V === m || b || p || g || typeof V == "object" && V !== null && (V.$$typeof === v || V.$$typeof === f || V.$$typeof === o || V.$$typeof === i || V.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      V.$$typeof === y || V.getModuleId !== void 0));
    }
    function C(V) {
      if (typeof V == "object" && V !== null) {
        var le = V.$$typeof;
        switch (le) {
          case e:
            var fe = V.type;
            switch (fe) {
              case r:
              case a:
              case n:
              case c:
              case d:
                return fe;
              default:
                var Re = fe && fe.$$typeof;
                switch (Re) {
                  case s:
                  case i:
                  case l:
                  case v:
                  case f:
                  case o:
                    return Re;
                  default:
                    return le;
                }
            }
          case t:
            return le;
        }
      }
    }
    var O = i, R = o, w = e, $ = l, A = r, F = v, M = f, I = t, T = a, k = n, N = c, x = d, _ = !1, z = !1;
    function L(V) {
      return _ || (_ = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function B(V) {
      return z || (z = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function X(V) {
      return C(V) === i;
    }
    function W(V) {
      return C(V) === o;
    }
    function G(V) {
      return typeof V == "object" && V !== null && V.$$typeof === e;
    }
    function Q(V) {
      return C(V) === l;
    }
    function Y(V) {
      return C(V) === r;
    }
    function J(V) {
      return C(V) === v;
    }
    function ne(V) {
      return C(V) === f;
    }
    function se(V) {
      return C(V) === t;
    }
    function xe(V) {
      return C(V) === a;
    }
    function de(V) {
      return C(V) === n;
    }
    function ue(V) {
      return C(V) === c;
    }
    function Ce(V) {
      return C(V) === d;
    }
    at.ContextConsumer = O, at.ContextProvider = R, at.Element = w, at.ForwardRef = $, at.Fragment = A, at.Lazy = F, at.Memo = M, at.Portal = I, at.Profiler = T, at.StrictMode = k, at.Suspense = N, at.SuspenseList = x, at.isAsyncMode = L, at.isConcurrentMode = B, at.isContextConsumer = X, at.isContextProvider = W, at.isElement = G, at.isForwardRef = Q, at.isFragment = Y, at.isLazy = J, at.isMemo = ne, at.isPortal = se, at.isProfiler = xe, at.isStrictMode = de, at.isSuspense = ue, at.isSuspenseList = Ce, at.isValidElementType = E, at.typeOf = C;
  }()), at;
}
process.env.NODE_ENV === "production" ? Mi.exports = Hv() : Mi.exports = Wv();
var da = Mi.exports;
function Zr(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = [];
  return q.Children.forEach(e, function(n) {
    n == null && !t.keepEmpty || (Array.isArray(n) ? r = r.concat(Zr(n)) : da.isFragment(n) && n.props ? r = r.concat(Zr(n.props.children, t)) : r.push(n));
  }), r;
}
var Ai = {}, Ns = [], Kv = function(t) {
  Ns.push(t);
};
function Mn(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var r = Ns.reduce(function(n, a) {
      return a(n ?? "", "warning");
    }, t);
    r && console.error("Warning: ".concat(r));
  }
}
function Uv(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var r = Ns.reduce(function(n, a) {
      return a(n ?? "", "note");
    }, t);
    r && console.warn("Note: ".concat(r));
  }
}
function yu() {
  Ai = {};
}
function Su(e, t, r) {
  !t && !Ai[r] && (e(!1, r), Ai[r] = !0);
}
function tt(e, t) {
  Su(Mn, e, t);
}
function Gv(e, t) {
  Su(Uv, e, t);
}
tt.preMessage = Kv;
tt.resetWarned = yu;
tt.noteOnce = Gv;
function Ae(e) {
  "@babel/helpers - typeof";
  return Ae = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ae(e);
}
function qv(e, t) {
  if (Ae(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ae(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Cu(e) {
  var t = qv(e, "string");
  return Ae(t) == "symbol" ? t : t + "";
}
function j(e, t, r) {
  return (t = Cu(t)) in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function xl(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function D(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? xl(Object(r), !0).forEach(function(n) {
      j(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : xl(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function pa(e) {
  return e instanceof HTMLElement || e instanceof SVGElement;
}
function Xv(e) {
  return e && Ae(e) === "object" && pa(e.nativeElement) ? e.nativeElement : pa(e) ? e : null;
}
function so(e) {
  var t = Xv(e);
  if (t)
    return t;
  if (e instanceof q.Component) {
    var r;
    return (r = vl.findDOMNode) === null || r === void 0 ? void 0 : r.call(vl, e);
  }
  return null;
}
function Io(e, t, r) {
  var n = u.useRef({});
  return (!("value" in n.current) || r(n.current.condition, t)) && (n.current.value = e(), n.current.condition = t), n.current.value;
}
var Is = function(t, r) {
  typeof t == "function" ? t(r) : Ae(t) === "object" && t && "current" in t && (t.current = r);
}, Pr = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  var a = r.filter(Boolean);
  return a.length <= 1 ? a[0] : function(o) {
    r.forEach(function(i) {
      Is(i, o);
    });
  };
}, Na = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  return Io(function() {
    return Pr.apply(void 0, r);
  }, r, function(a, o) {
    return a.length !== o.length || a.every(function(i, s) {
      return i !== o[s];
    });
  });
}, dn = function(t) {
  var r, n, a = da.isMemo(t) ? t.type.type : t.type;
  return !(typeof a == "function" && !((r = a.prototype) !== null && r !== void 0 && r.render) && a.$$typeof !== da.ForwardRef || typeof t == "function" && !((n = t.prototype) !== null && n !== void 0 && n.render) && t.$$typeof !== da.ForwardRef);
};
function wl(e) {
  return /* @__PURE__ */ Sv(e) && !da.isFragment(e);
}
Number(yv.split(".")[0]) >= 19;
var ji = /* @__PURE__ */ u.createContext(null);
function Yv(e) {
  var t = e.children, r = e.onBatchResize, n = u.useRef(0), a = u.useRef([]), o = u.useContext(ji), i = u.useCallback(function(s, l, c) {
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
  return /* @__PURE__ */ u.createElement(ji.Provider, {
    value: i
  }, t);
}
var Eu = function() {
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
}(), Fi = typeof window < "u" && typeof document < "u" && window.document === document, So = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), Zv = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(So) : function(e) {
    return setTimeout(function() {
      return e(Date.now());
    }, 1e3 / 60);
  };
}(), Qv = 2;
function Jv(e, t) {
  var r = !1, n = !1, a = 0;
  function o() {
    r && (r = !1, e()), n && s();
  }
  function i() {
    Zv(o);
  }
  function s() {
    var l = Date.now();
    if (r) {
      if (l - a < Qv)
        return;
      n = !0;
    } else
      r = !0, n = !1, setTimeout(i, t);
    a = l;
  }
  return s;
}
var eg = 20, tg = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], rg = typeof MutationObserver < "u", ng = (
  /** @class */
  function() {
    function e() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = Jv(this.refresh.bind(this), eg);
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
      !Fi || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), rg ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, e.prototype.disconnect_ = function() {
      !Fi || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, e.prototype.onTransitionEnd_ = function(t) {
      var r = t.propertyName, n = r === void 0 ? "" : r, a = tg.some(function(o) {
        return !!~n.indexOf(o);
      });
      a && this.refresh();
    }, e.getInstance = function() {
      return this.instance_ || (this.instance_ = new e()), this.instance_;
    }, e.instance_ = null, e;
  }()
), xu = function(e, t) {
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
}, An = function(e) {
  var t = e && e.ownerDocument && e.ownerDocument.defaultView;
  return t || So;
}, wu = Mo(0, 0, 0, 0);
function Co(e) {
  return parseFloat(e) || 0;
}
function $l(e) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  return t.reduce(function(n, a) {
    var o = e["border-" + a + "-width"];
    return n + Co(o);
  }, 0);
}
function ag(e) {
  for (var t = ["top", "right", "bottom", "left"], r = {}, n = 0, a = t; n < a.length; n++) {
    var o = a[n], i = e["padding-" + o];
    r[o] = Co(i);
  }
  return r;
}
function og(e) {
  var t = e.getBBox();
  return Mo(0, 0, t.width, t.height);
}
function ig(e) {
  var t = e.clientWidth, r = e.clientHeight;
  if (!t && !r)
    return wu;
  var n = An(e).getComputedStyle(e), a = ag(n), o = a.left + a.right, i = a.top + a.bottom, s = Co(n.width), l = Co(n.height);
  if (n.boxSizing === "border-box" && (Math.round(s + o) !== t && (s -= $l(n, "left", "right") + o), Math.round(l + i) !== r && (l -= $l(n, "top", "bottom") + i)), !lg(e)) {
    var c = Math.round(s + o) - t, d = Math.round(l + i) - r;
    Math.abs(c) !== 1 && (s -= c), Math.abs(d) !== 1 && (l -= d);
  }
  return Mo(a.left, a.top, s, l);
}
var sg = /* @__PURE__ */ function() {
  return typeof SVGGraphicsElement < "u" ? function(e) {
    return e instanceof An(e).SVGGraphicsElement;
  } : function(e) {
    return e instanceof An(e).SVGElement && typeof e.getBBox == "function";
  };
}();
function lg(e) {
  return e === An(e).document.documentElement;
}
function cg(e) {
  return Fi ? sg(e) ? og(e) : ig(e) : wu;
}
function ug(e) {
  var t = e.x, r = e.y, n = e.width, a = e.height, o = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, i = Object.create(o.prototype);
  return xu(i, {
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
function Mo(e, t, r, n) {
  return { x: e, y: t, width: r, height: n };
}
var dg = (
  /** @class */
  function() {
    function e(t) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Mo(0, 0, 0, 0), this.target = t;
    }
    return e.prototype.isActive = function() {
      var t = cg(this.target);
      return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight;
    }, e.prototype.broadcastRect = function() {
      var t = this.contentRect_;
      return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t;
    }, e;
  }()
), fg = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(t, r) {
      var n = ug(r);
      xu(this, { target: t, contentRect: n });
    }
    return e;
  }()
), vg = (
  /** @class */
  function() {
    function e(t, r, n) {
      if (this.activeObservations_ = [], this.observations_ = new Eu(), typeof t != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = t, this.controller_ = r, this.callbackCtx_ = n;
    }
    return e.prototype.observe = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof An(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var r = this.observations_;
        r.has(t) || (r.set(t, new dg(t)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, e.prototype.unobserve = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof An(t).Element))
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
          return new fg(n.target, n.broadcastRect());
        });
        this.callback_.call(t, r, t), this.clearActive();
      }
    }, e.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, e.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, e;
  }()
), $u = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new Eu(), Ou = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(t) {
      if (!(this instanceof e))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var r = ng.getInstance(), n = new vg(t, r, this);
      $u.set(this, n);
    }
    return e;
  }()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(e) {
  Ou.prototype[e] = function() {
    var t;
    return (t = $u.get(this))[e].apply(t, arguments);
  };
});
var gg = function() {
  return typeof So.ResizeObserver < "u" ? So.ResizeObserver : Ou;
}(), Fr = /* @__PURE__ */ new Map();
function Ru(e) {
  e.forEach(function(t) {
    var r, n = t.target;
    (r = Fr.get(n)) === null || r === void 0 || r.forEach(function(a) {
      return a(n);
    });
  });
}
var Pu = new gg(Ru);
process.env.NODE_ENV;
process.env.NODE_ENV;
function mg(e, t) {
  Fr.has(e) || (Fr.set(e, /* @__PURE__ */ new Set()), Pu.observe(e)), Fr.get(e).add(t);
}
function pg(e, t) {
  Fr.has(e) && (Fr.get(e).delete(t), Fr.get(e).size || (Pu.unobserve(e), Fr.delete(e)));
}
function Lt(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Ol(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Cu(n.key), n);
  }
}
function Dt(e, t, r) {
  return t && Ol(e.prototype, t), r && Ol(e, r), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function ha(e, t) {
  return ha = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
    return r.__proto__ = n, r;
  }, ha(e, t);
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
  }), t && ha(e, t);
}
function ba(e) {
  return ba = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, ba(e);
}
function Ms() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Ms = function() {
    return !!e;
  })();
}
function Ue(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function hg(e, t) {
  if (t && (Ae(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return Ue(e);
}
function Jr(e) {
  var t = Ms();
  return function() {
    var r, n = ba(e);
    if (t) {
      var a = ba(this).constructor;
      r = Reflect.construct(n, arguments, a);
    } else r = n.apply(this, arguments);
    return hg(this, r);
  };
}
var bg = /* @__PURE__ */ function(e) {
  Qr(r, e);
  var t = Jr(r);
  function r() {
    return Lt(this, r), t.apply(this, arguments);
  }
  return Dt(r, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), r;
}(u.Component);
function yg(e, t) {
  var r = e.children, n = e.disabled, a = u.useRef(null), o = u.useRef(null), i = u.useContext(ji), s = typeof r == "function", l = s ? r(a) : r, c = u.useRef({
    width: -1,
    height: -1,
    offsetWidth: -1,
    offsetHeight: -1
  }), d = !s && /* @__PURE__ */ u.isValidElement(l) && dn(l), f = d ? l.ref : null, v = Na(f, a), m = function() {
    var S;
    return so(a.current) || // Support `nativeElement` format
    (a.current && Ae(a.current) === "object" ? so((S = a.current) === null || S === void 0 ? void 0 : S.nativeElement) : null) || so(o.current);
  };
  u.useImperativeHandle(t, function() {
    return m();
  });
  var b = u.useRef(e);
  b.current = e;
  var p = u.useCallback(function(g) {
    var S = b.current, h = S.onResize, y = S.data, E = g.getBoundingClientRect(), C = E.width, O = E.height, R = g.offsetWidth, w = g.offsetHeight, $ = Math.floor(C), A = Math.floor(O);
    if (c.current.width !== $ || c.current.height !== A || c.current.offsetWidth !== R || c.current.offsetHeight !== w) {
      var F = {
        width: $,
        height: A,
        offsetWidth: R,
        offsetHeight: w
      };
      c.current = F;
      var M = R === Math.round(C) ? C : R, I = w === Math.round(O) ? O : w, T = D(D({}, F), {}, {
        offsetWidth: M,
        offsetHeight: I
      });
      i == null || i(T, g, y), h && Promise.resolve().then(function() {
        h(T, g);
      });
    }
  }, []);
  return u.useEffect(function() {
    var g = m();
    return g && !n && mg(g, p), function() {
      return pg(g, p);
    };
  }, [a.current, n]), /* @__PURE__ */ u.createElement(bg, {
    ref: o
  }, d ? /* @__PURE__ */ u.cloneElement(l, {
    ref: v
  }) : l);
}
var _u = /* @__PURE__ */ u.forwardRef(yg);
process.env.NODE_ENV !== "production" && (_u.displayName = "SingleObserver");
var Sg = "rc-observer-key";
function Cg(e, t) {
  var r = e.children, n = typeof r == "function" ? [r] : Zr(r);
  return process.env.NODE_ENV !== "production" && (n.length > 1 ? Mn(!1, "Find more than one child node with `children` in ResizeObserver. Please use ResizeObserver.Collection instead.") : n.length === 0 && Mn(!1, "`children` of ResizeObserver is empty. Nothing is in observe.")), n.map(function(a, o) {
    var i = (a == null ? void 0 : a.key) || "".concat(Sg, "-").concat(o);
    return /* @__PURE__ */ u.createElement(_u, _e({}, e, {
      key: i,
      ref: o === 0 ? t : void 0
    }), a);
  });
}
var hr = /* @__PURE__ */ u.forwardRef(Cg);
process.env.NODE_ENV !== "production" && (hr.displayName = "ResizeObserver");
hr.Collection = Yv;
function Cr(e, t) {
  var r = Object.assign({}, e);
  return Array.isArray(t) && t.forEach(function(n) {
    delete r[n];
  }), r;
}
function Li(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Eg(e) {
  if (Array.isArray(e)) return Li(e);
}
function Tu(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function As(e, t) {
  if (e) {
    if (typeof e == "string") return Li(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Li(e, t) : void 0;
  }
}
function xg() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function he(e) {
  return Eg(e) || Tu(e) || As(e) || xg();
}
var Nu = function(t) {
  return +setTimeout(t, 16);
}, Iu = function(t) {
  return clearTimeout(t);
};
typeof window < "u" && "requestAnimationFrame" in window && (Nu = function(t) {
  return window.requestAnimationFrame(t);
}, Iu = function(t) {
  return window.cancelAnimationFrame(t);
});
var Rl = 0, Ao = /* @__PURE__ */ new Map();
function Mu(e) {
  Ao.delete(e);
}
var Nt = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  Rl += 1;
  var n = Rl;
  function a(o) {
    if (o === 0)
      Mu(n), t();
    else {
      var i = Nu(function() {
        a(o - 1);
      });
      Ao.set(n, i);
    }
  }
  return a(r), n;
};
Nt.cancel = function(e) {
  var t = Ao.get(e);
  return Mu(e), Iu(t);
};
process.env.NODE_ENV !== "production" && (Nt.ids = function() {
  return Ao;
});
function Au(e) {
  if (Array.isArray(e)) return e;
}
function wg(e, t) {
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
function ju() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function K(e, t) {
  return Au(e) || wg(e, t) || As(e, t) || ju();
}
function ya(e) {
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
function $g(e, t) {
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
var Pl = "data-rc-order", _l = "data-rc-priority", Og = "rc-util-key", Di = /* @__PURE__ */ new Map();
function Fu() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.mark;
  return t ? t.startsWith("data-") ? t : "data-".concat(t) : Og;
}
function jo(e) {
  if (e.attachTo)
    return e.attachTo;
  var t = document.querySelector("head");
  return t || document.body;
}
function Rg(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function js(e) {
  return Array.from((Di.get(e) || e).children).filter(function(t) {
    return t.tagName === "STYLE";
  });
}
function Lu(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!Xt())
    return null;
  var r = t.csp, n = t.prepend, a = t.priority, o = a === void 0 ? 0 : a, i = Rg(n), s = i === "prependQueue", l = document.createElement("style");
  l.setAttribute(Pl, i), s && o && l.setAttribute(_l, "".concat(o)), r != null && r.nonce && (l.nonce = r == null ? void 0 : r.nonce), l.innerHTML = e;
  var c = jo(t), d = c.firstChild;
  if (n) {
    if (s) {
      var f = (t.styles || js(c)).filter(function(v) {
        if (!["prepend", "prependQueue"].includes(v.getAttribute(Pl)))
          return !1;
        var m = Number(v.getAttribute(_l) || 0);
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
function Du(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = jo(t);
  return (t.styles || js(r)).find(function(n) {
    return n.getAttribute(Fu(t)) === e;
  });
}
function Sa(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = Du(e, t);
  if (r) {
    var n = jo(t);
    n.removeChild(r);
  }
}
function Pg(e, t) {
  var r = Di.get(e);
  if (!r || !$g(document, r)) {
    var n = Lu("", t), a = n.parentNode;
    Di.set(e, a), e.removeChild(n);
  }
}
function Lr(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = jo(r), a = js(n), o = D(D({}, r), {}, {
    styles: a
  });
  Pg(n, o);
  var i = Du(t, o);
  if (i) {
    var s, l;
    if ((s = o.csp) !== null && s !== void 0 && s.nonce && i.nonce !== ((l = o.csp) === null || l === void 0 ? void 0 : l.nonce)) {
      var c;
      i.nonce = (c = o.csp) === null || c === void 0 ? void 0 : c.nonce;
    }
    return i.innerHTML !== e && (i.innerHTML = e), i;
  }
  var d = Lu(e, o);
  return d.setAttribute(Fu(o), t), d;
}
function _g(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e[n];
  }
  return r;
}
function Ye(e, t) {
  if (e == null) return {};
  var r, n, a = _g(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || {}.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  }
  return a;
}
function Ca(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, n = /* @__PURE__ */ new Set();
  function a(o, i) {
    var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, l = n.has(o);
    if (tt(!l, "Warning: There may be circular references"), l)
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
    if (o && i && Ae(o) === "object" && Ae(i) === "object") {
      var f = Object.keys(o);
      return f.length !== Object.keys(i).length ? !1 : f.every(function(v) {
        return a(o[v], i[v], c);
      });
    }
    return !1;
  }
  return a(e, t);
}
var Tg = "%";
function zi(e) {
  return e.join(Tg);
}
var Ng = /* @__PURE__ */ function() {
  function e(t) {
    Lt(this, e), j(this, "instanceId", void 0), j(this, "cache", /* @__PURE__ */ new Map()), this.instanceId = t;
  }
  return Dt(e, [{
    key: "get",
    value: function(r) {
      return this.opGet(zi(r));
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
      return this.opUpdate(zi(r), n);
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opUpdate",
    value: function(r, n) {
      var a = this.cache.get(r), o = n(a);
      o === null ? this.cache.delete(r) : this.cache.set(r, o);
    }
  }]), e;
}(), jn = "data-token-hash", br = "data-css-hash", Ig = "data-cache-path", qr = "__cssinjs_instance__";
function Mg() {
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
  return new Ng(e);
}
var Fo = /* @__PURE__ */ u.createContext({
  hashPriority: "low",
  cache: Mg(),
  defaultCache: !0
}), zu = /* @__PURE__ */ Dt(function e() {
  Lt(this, e);
}), Vu = "CALC_UNIT", Ag = new RegExp(Vu, "g");
function ri(e) {
  return typeof e == "number" ? "".concat(e).concat(Vu) : e;
}
var jg = /* @__PURE__ */ function(e) {
  Qr(r, e);
  var t = Jr(r);
  function r(n, a) {
    var o;
    Lt(this, r), o = t.call(this), j(Ue(o), "result", ""), j(Ue(o), "unitlessCssVar", void 0), j(Ue(o), "lowPriority", void 0);
    var i = Ae(n);
    return o.unitlessCssVar = a, n instanceof r ? o.result = "(".concat(n.result, ")") : i === "number" ? o.result = ri(n) : i === "string" && (o.result = n), o;
  }
  return Dt(r, [{
    key: "add",
    value: function(a) {
      return a instanceof r ? this.result = "".concat(this.result, " + ").concat(a.getResult()) : (typeof a == "number" || typeof a == "string") && (this.result = "".concat(this.result, " + ").concat(ri(a))), this.lowPriority = !0, this;
    }
  }, {
    key: "sub",
    value: function(a) {
      return a instanceof r ? this.result = "".concat(this.result, " - ").concat(a.getResult()) : (typeof a == "number" || typeof a == "string") && (this.result = "".concat(this.result, " - ").concat(ri(a))), this.lowPriority = !0, this;
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
      }) && (l = !1), this.result = this.result.replace(Ag, l ? "px" : ""), typeof this.lowPriority < "u" ? "calc(".concat(this.result, ")") : this.result;
    }
  }]), r;
}(zu), Fg = /* @__PURE__ */ function(e) {
  Qr(r, e);
  var t = Jr(r);
  function r(n) {
    var a;
    return Lt(this, r), a = t.call(this), j(Ue(a), "result", 0), n instanceof r ? a.result = n.result : typeof n == "number" && (a.result = n), a;
  }
  return Dt(r, [{
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
}(zu), Lg = function(t, r) {
  var n = t === "css" ? jg : Fg;
  return function(a) {
    return new n(a, r);
  };
};
function Dg(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
var Fs = /* @__PURE__ */ function() {
  function e() {
    Lt(this, e), j(this, "cache", void 0), j(this, "keys", void 0), j(this, "cacheCallTimes", void 0), this.cache = /* @__PURE__ */ new Map(), this.keys = [], this.cacheCallTimes = 0;
  }
  return Dt(e, [{
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
            var f = K(c, 2), v = f[1];
            return a.internalGet(d)[1] < v ? [d, a.internalGet(d)[1]] : c;
          }, [this.keys[0], this.cacheCallTimes]), i = K(o, 1), s = i[0];
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
          return !Dg(n, r);
        }), this.deleteByPath(this.cache, r);
    }
  }]), e;
}();
j(Fs, "MAX_CACHE_SIZE", 20);
j(Fs, "MAX_CACHE_OFFSET", 5);
var Tl = 0, Bu = /* @__PURE__ */ function() {
  function e(t) {
    Lt(this, e), j(this, "derivatives", void 0), j(this, "id", void 0), this.derivatives = Array.isArray(t) ? t : [t], this.id = Tl, t.length === 0 && Mn(t.length > 0, "[Ant Design CSS-in-JS] Theme should have at least one derivative function."), Tl += 1;
  }
  return Dt(e, [{
    key: "getDerivativeToken",
    value: function(r) {
      return this.derivatives.reduce(function(n, a) {
        return a(r, n);
      }, void 0);
    }
  }]), e;
}(), ni = new Fs();
function Vi(e) {
  var t = Array.isArray(e) ? e : [e];
  return ni.has(t) || ni.set(t, new Bu(t)), ni.get(t);
}
var zg = /* @__PURE__ */ new WeakMap(), ai = {};
function Vg(e, t) {
  for (var r = zg, n = 0; n < t.length; n += 1) {
    var a = t[n];
    r.has(a) || r.set(a, /* @__PURE__ */ new WeakMap()), r = r.get(a);
  }
  return r.has(ai) || r.set(ai, e()), r.get(ai);
}
var Nl = /* @__PURE__ */ new WeakMap();
function fa(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, r = Nl.get(e) || "";
  return r || (Object.keys(e).forEach(function(n) {
    var a = e[n];
    r += n, a instanceof Bu ? r += a.id : a && Ae(a) === "object" ? r += fa(a, t) : r += a;
  }), t && (r = ya(r)), Nl.set(e, r)), r;
}
function Il(e, t) {
  return ya("".concat(t, "_").concat(fa(e, !0)));
}
var Bi = Xt();
function ee(e) {
  return typeof e == "number" ? "".concat(e, "px") : e;
}
function Eo(e, t, r) {
  var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
  if (a)
    return e;
  var o = D(D({}, n), {}, j(j({}, jn, t), br, r)), i = Object.keys(o).map(function(s) {
    var l = o[s];
    return l ? "".concat(s, '="').concat(l, '"') : null;
  }).filter(function(s) {
    return s;
  }).join(" ");
  return "<style ".concat(i, ">").concat(e, "</style>");
}
var lo = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return "--".concat(r ? "".concat(r, "-") : "").concat(t).replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, "$1-$2").replace(/([a-z])([A-Z0-9])/g, "$1-$2").toLowerCase();
}, Bg = function(t, r, n) {
  return Object.keys(t).length ? ".".concat(r).concat(n != null && n.scope ? ".".concat(n.scope) : "", "{").concat(Object.entries(t).map(function(a) {
    var o = K(a, 2), i = o[0], s = o[1];
    return "".concat(i, ":").concat(s, ";");
  }).join(""), "}") : "";
}, ku = function(t, r, n) {
  var a = {}, o = {};
  return Object.entries(t).forEach(function(i) {
    var s, l, c = K(i, 2), d = c[0], f = c[1];
    if (n != null && (s = n.preserve) !== null && s !== void 0 && s[d])
      o[d] = f;
    else if ((typeof f == "string" || typeof f == "number") && !(n != null && (l = n.ignore) !== null && l !== void 0 && l[d])) {
      var v, m = lo(d, n == null ? void 0 : n.prefix);
      a[m] = typeof f == "number" && !(n != null && (v = n.unitless) !== null && v !== void 0 && v[d]) ? "".concat(f, "px") : String(f), o[d] = "var(".concat(m, ")");
    }
  }), [o, Bg(a, r, {
    scope: n == null ? void 0 : n.scope
  })];
}, Ml = process.env.NODE_ENV !== "test" && Xt() ? u.useLayoutEffect : u.useEffect, Ct = function(t, r) {
  var n = u.useRef(!0);
  Ml(function() {
    return t(n.current);
  }, r), Ml(function() {
    return n.current = !1, function() {
      n.current = !0;
    };
  }, []);
}, ki = function(t, r) {
  Ct(function(n) {
    if (!n)
      return t();
  }, r);
}, kg = D({}, u), Al = kg.useInsertionEffect, Hg = function(t, r, n) {
  u.useMemo(t, n), Ct(function() {
    return r(!0);
  }, n);
}, Wg = Al ? function(e, t, r) {
  return Al(function() {
    return e(), t();
  }, r);
} : Hg, Kg = D({}, u), Ug = Kg.useInsertionEffect, Gg = function(t) {
  var r = [], n = !1;
  function a(o) {
    if (n) {
      process.env.NODE_ENV !== "production" && Mn(!1, "[Ant Design CSS-in-JS] You are registering a cleanup function after unmount, which will not have any effect.");
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
}, qg = function() {
  return function(t) {
    t();
  };
}, Xg = typeof Ug < "u" ? Gg : qg;
function Yg() {
  return !1;
}
var Hi = !1;
function Zg() {
  return Hi;
}
const Qg = process.env.NODE_ENV === "production" ? Yg : Zg;
if (process.env.NODE_ENV !== "production" && typeof module < "u" && module && module.hot && typeof window < "u") {
  var oi = window;
  if (typeof oi.webpackHotUpdate == "function") {
    var Jg = oi.webpackHotUpdate;
    oi.webpackHotUpdate = function() {
      return Hi = !0, setTimeout(function() {
        Hi = !1;
      }, 0), Jg.apply(void 0, arguments);
    };
  }
}
function Ls(e, t, r, n, a) {
  var o = u.useContext(Fo), i = o.cache, s = [e].concat(he(t)), l = zi(s), c = Xg([l]), d = Qg(), f = function(p) {
    i.opUpdate(l, function(g) {
      var S = g || [void 0, void 0], h = K(S, 2), y = h[0], E = y === void 0 ? 0 : y, C = h[1], O = C;
      process.env.NODE_ENV !== "production" && C && d && (n == null || n(O, d), O = null);
      var R = O || r(), w = [E, R];
      return p ? p(w) : w;
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
  return Wg(function() {
    a == null || a(m);
  }, function(b) {
    return f(function(p) {
      var g = K(p, 2), S = g[0], h = g[1];
      return b && S === 0 && (a == null || a(m)), [S + 1, h];
    }), function() {
      i.opUpdate(l, function(p) {
        var g = p || [], S = K(g, 2), h = S[0], y = h === void 0 ? 0 : h, E = S[1], C = y - 1;
        return C === 0 ? (c(function() {
          (b || !i.opGet(l)) && (n == null || n(E, !1));
        }), null) : [y - 1, E];
      });
    };
  }, [l]), m;
}
var em = {}, tm = process.env.NODE_ENV !== "production" ? "css-dev-only-do-not-override" : "css", on = /* @__PURE__ */ new Map();
function rm(e) {
  on.set(e, (on.get(e) || 0) + 1);
}
function nm(e, t) {
  if (typeof document < "u") {
    var r = document.querySelectorAll("style[".concat(jn, '="').concat(e, '"]'));
    r.forEach(function(n) {
      if (n[qr] === t) {
        var a;
        (a = n.parentNode) === null || a === void 0 || a.removeChild(n);
      }
    });
  }
}
var am = 0;
function om(e, t) {
  on.set(e, (on.get(e) || 0) - 1);
  var r = Array.from(on.keys()), n = r.filter(function(a) {
    var o = on.get(a) || 0;
    return o <= 0;
  });
  r.length - n.length > am && n.forEach(function(a) {
    nm(a, t), on.delete(a);
  });
}
var im = function(t, r, n, a) {
  var o = n.getDerivativeToken(t), i = D(D({}, o), r);
  return a && (i = a(i)), i;
}, Hu = "token";
function sm(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = Ht(Fo), a = n.cache.instanceId, o = n.container, i = r.salt, s = i === void 0 ? "" : i, l = r.override, c = l === void 0 ? em : l, d = r.formatToken, f = r.getComputedToken, v = r.cssVar, m = Vg(function() {
    return Object.assign.apply(Object, [{}].concat(he(t)));
  }, t), b = fa(m), p = fa(c), g = v ? fa(v) : "", S = Ls(Hu, [s, e.id, b, p, g], function() {
    var h, y = f ? f(m, c, e) : im(m, c, e, d), E = D({}, y), C = "";
    if (v) {
      var O = ku(y, v.key, {
        prefix: v.prefix,
        ignore: v.ignore,
        unitless: v.unitless,
        preserve: v.preserve
      }), R = K(O, 2);
      y = R[0], C = R[1];
    }
    var w = Il(y, s);
    y._tokenKey = w, E._tokenKey = Il(E, s);
    var $ = (h = v == null ? void 0 : v.key) !== null && h !== void 0 ? h : w;
    y._themeKey = $, rm($);
    var A = "".concat(tm, "-").concat(ya(w));
    return y._hashId = A, [y, A, E, C, (v == null ? void 0 : v.key) || ""];
  }, function(h) {
    om(h[0]._themeKey, a);
  }, function(h) {
    var y = K(h, 4), E = y[0], C = y[3];
    if (v && C) {
      var O = Lr(C, ya("css-variables-".concat(E._themeKey)), {
        mark: br,
        prepend: "queue",
        attachTo: o,
        priority: -999
      });
      O[qr] = a, O.setAttribute(jn, E._themeKey);
    }
  });
  return S;
}
var lm = function(t, r, n) {
  var a = K(t, 5), o = a[2], i = a[3], s = a[4], l = n || {}, c = l.plain;
  if (!i)
    return null;
  var d = o._tokenKey, f = -999, v = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(f)
  }, m = Eo(i, s, d, v, c);
  return [f, d, m];
}, cm = {
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
}, Wu = "comm", Ku = "rule", Uu = "decl", um = "@import", dm = "@keyframes", fm = "@layer", Gu = Math.abs, Ds = String.fromCharCode;
function qu(e) {
  return e.trim();
}
function co(e, t, r) {
  return e.replace(t, r);
}
function vm(e, t, r) {
  return e.indexOf(t, r);
}
function Ea(e, t) {
  return e.charCodeAt(t) | 0;
}
function xa(e, t, r) {
  return e.slice(t, r);
}
function jr(e) {
  return e.length;
}
function gm(e) {
  return e.length;
}
function Wa(e, t) {
  return t.push(e), e;
}
var Lo = 1, Fn = 1, Xu = 0, ur = 0, Pt = 0, Hn = "";
function zs(e, t, r, n, a, o, i, s) {
  return { value: e, root: t, parent: r, type: n, props: a, children: o, line: Lo, column: Fn, length: i, return: "", siblings: s };
}
function mm() {
  return Pt;
}
function pm() {
  return Pt = ur > 0 ? Ea(Hn, --ur) : 0, Fn--, Pt === 10 && (Fn = 1, Lo--), Pt;
}
function yr() {
  return Pt = ur < Xu ? Ea(Hn, ur++) : 0, Fn++, Pt === 10 && (Fn = 1, Lo++), Pt;
}
function cn() {
  return Ea(Hn, ur);
}
function uo() {
  return ur;
}
function Do(e, t) {
  return xa(Hn, e, t);
}
function Wi(e) {
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
function hm(e) {
  return Lo = Fn = 1, Xu = jr(Hn = e), ur = 0, [];
}
function bm(e) {
  return Hn = "", e;
}
function ii(e) {
  return qu(Do(ur - 1, Ki(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function ym(e) {
  for (; (Pt = cn()) && Pt < 33; )
    yr();
  return Wi(e) > 2 || Wi(Pt) > 3 ? "" : " ";
}
function Sm(e, t) {
  for (; --t && yr() && !(Pt < 48 || Pt > 102 || Pt > 57 && Pt < 65 || Pt > 70 && Pt < 97); )
    ;
  return Do(e, uo() + (t < 6 && cn() == 32 && yr() == 32));
}
function Ki(e) {
  for (; yr(); )
    switch (Pt) {
      case e:
        return ur;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Ki(Pt);
        break;
      case 40:
        e === 41 && Ki(e);
        break;
      case 92:
        yr();
        break;
    }
  return ur;
}
function Cm(e, t) {
  for (; yr() && e + Pt !== 57; )
    if (e + Pt === 84 && cn() === 47)
      break;
  return "/*" + Do(t, ur - 1) + "*" + Ds(e === 47 ? e : yr());
}
function Em(e) {
  for (; !Wi(cn()); )
    yr();
  return Do(e, ur);
}
function xm(e) {
  return bm(fo("", null, null, null, [""], e = hm(e), 0, [0], e));
}
function fo(e, t, r, n, a, o, i, s, l) {
  for (var c = 0, d = 0, f = i, v = 0, m = 0, b = 0, p = 1, g = 1, S = 1, h = 0, y = "", E = a, C = o, O = n, R = y; g; )
    switch (b = h, h = yr()) {
      case 40:
        if (b != 108 && Ea(R, f - 1) == 58) {
          vm(R += co(ii(h), "&", "&\f"), "&\f", Gu(c ? s[c - 1] : 0)) != -1 && (S = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        R += ii(h);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        R += ym(b);
        break;
      case 92:
        R += Sm(uo() - 1, 7);
        continue;
      case 47:
        switch (cn()) {
          case 42:
          case 47:
            Wa(wm(Cm(yr(), uo()), t, r, l), l);
            break;
          default:
            R += "/";
        }
        break;
      case 123 * p:
        s[c++] = jr(R) * S;
      case 125 * p:
      case 59:
      case 0:
        switch (h) {
          case 0:
          case 125:
            g = 0;
          case 59 + d:
            S == -1 && (R = co(R, /\f/g, "")), m > 0 && jr(R) - f && Wa(m > 32 ? Fl(R + ";", n, r, f - 1, l) : Fl(co(R, " ", "") + ";", n, r, f - 2, l), l);
            break;
          case 59:
            R += ";";
          default:
            if (Wa(O = jl(R, t, r, c, d, a, s, y, E = [], C = [], f, o), o), h === 123)
              if (d === 0)
                fo(R, t, O, O, E, o, f, s, C);
              else
                switch (v === 99 && Ea(R, 3) === 110 ? 100 : v) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    fo(e, O, O, n && Wa(jl(e, O, O, 0, 0, a, s, y, a, E = [], f, C), C), a, C, f, s, n ? E : C);
                    break;
                  default:
                    fo(R, O, O, O, [""], C, 0, s, C);
                }
        }
        c = d = m = 0, p = S = 1, y = R = "", f = i;
        break;
      case 58:
        f = 1 + jr(R), m = b;
      default:
        if (p < 1) {
          if (h == 123)
            --p;
          else if (h == 125 && p++ == 0 && pm() == 125)
            continue;
        }
        switch (R += Ds(h), h * p) {
          case 38:
            S = d > 0 ? 1 : (R += "\f", -1);
            break;
          case 44:
            s[c++] = (jr(R) - 1) * S, S = 1;
            break;
          case 64:
            cn() === 45 && (R += ii(yr())), v = cn(), d = f = jr(y = R += Em(uo())), h++;
            break;
          case 45:
            b === 45 && jr(R) == 2 && (p = 0);
        }
    }
  return o;
}
function jl(e, t, r, n, a, o, i, s, l, c, d, f) {
  for (var v = a - 1, m = a === 0 ? o : [""], b = gm(m), p = 0, g = 0, S = 0; p < n; ++p)
    for (var h = 0, y = xa(e, v + 1, v = Gu(g = i[p])), E = e; h < b; ++h)
      (E = qu(g > 0 ? m[h] + " " + y : co(y, /&\f/g, m[h]))) && (l[S++] = E);
  return zs(e, t, r, a === 0 ? Ku : s, l, c, d, f);
}
function wm(e, t, r, n) {
  return zs(e, t, r, Wu, Ds(mm()), xa(e, 2, -2), 0, n);
}
function Fl(e, t, r, n, a) {
  return zs(e, t, r, Uu, xa(e, 0, n), xa(e, n + 1, -1), n, a);
}
function Ui(e, t) {
  for (var r = "", n = 0; n < e.length; n++)
    r += t(e[n], n, e, t) || "";
  return r;
}
function $m(e, t, r, n) {
  switch (e.type) {
    case fm:
      if (e.children.length) break;
    case um:
    case Uu:
      return e.return = e.return || e.value;
    case Wu:
      return "";
    case dm:
      return e.return = e.value + "{" + Ui(e.children, n) + "}";
    case Ku:
      if (!jr(e.value = e.props.join(","))) return "";
  }
  return jr(r = Ui(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function Yu(e, t) {
  var r = t.path, n = t.parentSelectors;
  tt(!1, "[Ant Design CSS-in-JS] ".concat(r ? "Error in ".concat(r, ": ") : "").concat(e).concat(n.length ? " Selector: ".concat(n.join(" | ")) : ""));
}
var Om = function(t, r, n) {
  if (t === "content") {
    var a = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, o = ["normal", "none", "initial", "inherit", "unset"];
    (typeof r != "string" || o.indexOf(r) === -1 && !a.test(r) && (r.charAt(0) !== r.charAt(r.length - 1) || r.charAt(0) !== '"' && r.charAt(0) !== "'")) && Yu("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"".concat(r, "\"'`."), n);
  }
}, Rm = function(t, r, n) {
  t === "animation" && n.hashId && r !== "none" && Yu("You seem to be using hashed animation '".concat(r, "', in which case 'animationName' with Keyframe as value is recommended."), n);
}, Ll = "data-ant-cssinjs-cache-path", Zu = "_FILE_STYLE__", un, Qu = !0;
function Pm() {
  if (!un && (un = {}, Xt())) {
    var e = document.createElement("div");
    e.className = Ll, e.style.position = "fixed", e.style.visibility = "hidden", e.style.top = "-9999px", document.body.appendChild(e);
    var t = getComputedStyle(e).content || "";
    t = t.replace(/^"/, "").replace(/"$/, ""), t.split(";").forEach(function(a) {
      var o = a.split(":"), i = K(o, 2), s = i[0], l = i[1];
      un[s] = l;
    });
    var r = document.querySelector("style[".concat(Ll, "]"));
    if (r) {
      var n;
      Qu = !1, (n = r.parentNode) === null || n === void 0 || n.removeChild(r);
    }
    document.body.removeChild(e);
  }
}
function _m(e) {
  return Pm(), !!un[e];
}
function Tm(e) {
  var t = un[e], r = null;
  if (t && Xt())
    if (Qu)
      r = Zu;
    else {
      var n = document.querySelector("style[".concat(br, '="').concat(un[e], '"]'));
      n ? r = n.innerHTML : delete un[e];
    }
  return [r, t];
}
var Ju = "_skip_check_", ed = "_multi_value_";
function vo(e) {
  var t = Ui(xm(e), $m);
  return t.replace(/\{%%%\:[^;];}/g, ";");
}
function Nm(e) {
  return Ae(e) === "object" && e && (Ju in e || ed in e);
}
function Im(e, t, r) {
  if (!t)
    return e;
  var n = ".".concat(t), a = r === "low" ? ":where(".concat(n, ")") : n, o = e.split(",").map(function(i) {
    var s, l = i.trim().split(/\s+/), c = l[0] || "", d = ((s = c.match(/^\w+/)) === null || s === void 0 ? void 0 : s[0]) || "";
    return c = "".concat(d).concat(a).concat(c.slice(d.length)), [c].concat(he(l.slice(1))).join(" ");
  });
  return o.join(",");
}
var Mm = function e(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: !0,
    parentSelectors: []
  }, a = n.root, o = n.injectHash, i = n.parentSelectors, s = r.hashId, l = r.layer, c = r.path, d = r.hashPriority, f = r.transformers, v = f === void 0 ? [] : f, m = r.linters, b = m === void 0 ? [] : m, p = "", g = {};
  function S(E) {
    var C = E.getName(s);
    if (!g[C]) {
      var O = e(E.style, r, {
        root: !1,
        parentSelectors: i
      }), R = K(O, 1), w = R[0];
      g[C] = "@keyframes ".concat(E.getName(s)).concat(w);
    }
  }
  function h(E) {
    var C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return E.forEach(function(O) {
      Array.isArray(O) ? h(O, C) : O && C.push(O);
    }), C;
  }
  var y = h(Array.isArray(t) ? t : [t]);
  return y.forEach(function(E) {
    var C = typeof E == "string" && !a ? {} : E;
    if (typeof C == "string")
      p += "".concat(C, `
`);
    else if (C._keyframe)
      S(C);
    else {
      var O = v.reduce(function(R, w) {
        var $;
        return (w == null || ($ = w.visit) === null || $ === void 0 ? void 0 : $.call(w, R)) || R;
      }, C);
      Object.keys(O).forEach(function(R) {
        var w = O[R];
        if (Ae(w) === "object" && w && (R !== "animationName" || !w._keyframe) && !Nm(w)) {
          var $ = !1, A = R.trim(), F = !1;
          (a || o) && s ? A.startsWith("@") ? $ = !0 : A = Im(R, s, d) : a && !s && (A === "&" || A === "") && (A = "", F = !0);
          var M = e(w, r, {
            root: F,
            injectHash: $,
            parentSelectors: [].concat(he(i), [A])
          }), I = K(M, 2), T = I[0], k = I[1];
          g = D(D({}, g), k), p += "".concat(A).concat(T);
        } else {
          let _ = function(z, L) {
            process.env.NODE_ENV !== "production" && (Ae(w) !== "object" || !(w != null && w[Ju])) && [Om, Rm].concat(he(b)).forEach(function(W) {
              return W(z, L, {
                path: c,
                hashId: s,
                parentSelectors: i
              });
            });
            var B = z.replace(/[A-Z]/g, function(W) {
              return "-".concat(W.toLowerCase());
            }), X = L;
            !cm[z] && typeof X == "number" && X !== 0 && (X = "".concat(X, "px")), z === "animationName" && L !== null && L !== void 0 && L._keyframe && (S(L), X = L.getName(s)), p += "".concat(B, ":").concat(X, ";");
          };
          var N, x = (N = w == null ? void 0 : w.value) !== null && N !== void 0 ? N : w;
          Ae(w) === "object" && w !== null && w !== void 0 && w[ed] && Array.isArray(x) ? x.forEach(function(z) {
            _(R, z);
          }) : _(R, x);
        }
      });
    }
  }), a ? l && (p = "@layer ".concat(l.name, " {").concat(p, "}"), l.dependencies && (g["@layer ".concat(l.name)] = l.dependencies.map(function(E) {
    return "@layer ".concat(E, ", ").concat(l.name, ";");
  }).join(`
`))) : p = "{".concat(p, "}"), [p, g];
};
function td(e, t) {
  return ya("".concat(e.join("%")).concat(t));
}
function Am() {
  return null;
}
var rd = "style";
function Gi(e, t) {
  var r = e.token, n = e.path, a = e.hashId, o = e.layer, i = e.nonce, s = e.clientOnly, l = e.order, c = l === void 0 ? 0 : l, d = u.useContext(Fo), f = d.autoClear, v = d.mock, m = d.defaultCache, b = d.hashPriority, p = d.container, g = d.ssrInline, S = d.transformers, h = d.linters, y = d.cache, E = d.layer, C = r._tokenKey, O = [C];
  E && O.push("layer"), O.push.apply(O, he(n));
  var R = Bi;
  process.env.NODE_ENV !== "production" && v !== void 0 && (R = v === "client");
  var w = Ls(
    rd,
    O,
    // Create cache if needed
    function() {
      var I = O.join("|");
      if (_m(I)) {
        var T = Tm(I), k = K(T, 2), N = k[0], x = k[1];
        if (N)
          return [N, C, x, {}, s, c];
      }
      var _ = t(), z = Mm(_, {
        hashId: a,
        hashPriority: b,
        layer: E ? o : void 0,
        path: n.join("-"),
        transformers: S,
        linters: h
      }), L = K(z, 2), B = L[0], X = L[1], W = vo(B), G = td(O, W);
      return [W, C, G, X, s, c];
    },
    // Remove cache if no need
    function(I, T) {
      var k = K(I, 3), N = k[2];
      (T || f) && Bi && Sa(N, {
        mark: br
      });
    },
    // Effect: Inject style here
    function(I) {
      var T = K(I, 4), k = T[0];
      T[1];
      var N = T[2], x = T[3];
      if (R && k !== Zu) {
        var _ = {
          mark: br,
          prepend: E ? !1 : "queue",
          attachTo: p,
          priority: c
        }, z = typeof i == "function" ? i() : i;
        z && (_.csp = {
          nonce: z
        });
        var L = [], B = [];
        Object.keys(x).forEach(function(W) {
          W.startsWith("@layer") ? L.push(W) : B.push(W);
        }), L.forEach(function(W) {
          Lr(vo(x[W]), "_layer-".concat(W), D(D({}, _), {}, {
            prepend: !0
          }));
        });
        var X = Lr(k, N, _);
        X[qr] = y.instanceId, X.setAttribute(jn, C), process.env.NODE_ENV !== "production" && X.setAttribute(Ig, O.join("|")), B.forEach(function(W) {
          Lr(vo(x[W]), "_effect-".concat(W), _);
        });
      }
    }
  ), $ = K(w, 3), A = $[0], F = $[1], M = $[2];
  return function(I) {
    var T;
    return !g || R || !m ? T = /* @__PURE__ */ u.createElement(Am, null) : T = /* @__PURE__ */ u.createElement("style", _e({}, j(j({}, jn, F), br, M), {
      dangerouslySetInnerHTML: {
        __html: A
      }
    })), /* @__PURE__ */ u.createElement(u.Fragment, null, T, I);
  };
}
var jm = function(t, r, n) {
  var a = K(t, 6), o = a[0], i = a[1], s = a[2], l = a[3], c = a[4], d = a[5], f = n || {}, v = f.plain;
  if (c)
    return null;
  var m = o, b = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(d)
  };
  return m = Eo(o, i, s, b, v), l && Object.keys(l).forEach(function(p) {
    if (!r[p]) {
      r[p] = !0;
      var g = vo(l[p]), S = Eo(g, i, "_effect-".concat(p), b, v);
      p.startsWith("@layer") ? m = S + m : m += S;
    }
  }), [d, s, m];
}, nd = "cssVar", Fm = function(t, r) {
  var n = t.key, a = t.prefix, o = t.unitless, i = t.ignore, s = t.token, l = t.scope, c = l === void 0 ? "" : l, d = Ht(Fo), f = d.cache.instanceId, v = d.container, m = s._tokenKey, b = [].concat(he(t.path), [n, c, m]), p = Ls(nd, b, function() {
    var g = r(), S = ku(g, n, {
      prefix: a,
      unitless: o,
      ignore: i,
      scope: c
    }), h = K(S, 2), y = h[0], E = h[1], C = td(b, E);
    return [y, E, C, n];
  }, function(g) {
    var S = K(g, 3), h = S[2];
    Bi && Sa(h, {
      mark: br
    });
  }, function(g) {
    var S = K(g, 3), h = S[1], y = S[2];
    if (h) {
      var E = Lr(h, y, {
        mark: br,
        prepend: "queue",
        attachTo: v,
        priority: -999
      });
      E[qr] = f, E.setAttribute(jn, n);
    }
  });
  return p;
}, Lm = function(t, r, n) {
  var a = K(t, 4), o = a[1], i = a[2], s = a[3], l = n || {}, c = l.plain;
  if (!o)
    return null;
  var d = -999, f = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(d)
  }, v = Eo(o, s, i, f, c);
  return [d, i, v];
};
j(j(j({}, rd, jm), Hu, lm), nd, Lm);
var Rt = /* @__PURE__ */ function() {
  function e(t, r) {
    Lt(this, e), j(this, "name", void 0), j(this, "style", void 0), j(this, "_keyframe", !0), this.name = t, this.style = r;
  }
  return Dt(e, [{
    key: "getName",
    value: function() {
      var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return r ? "".concat(r, "-").concat(this.name) : this.name;
    }
  }]), e;
}();
function hn(e) {
  return e.notSplit = !0, e;
}
hn(["borderTop", "borderBottom"]), hn(["borderTop"]), hn(["borderBottom"]), hn(["borderLeft", "borderRight"]), hn(["borderLeft"]), hn(["borderRight"]);
var Vs = /* @__PURE__ */ kn({});
function Dm(e) {
  return Au(e) || Tu(e) || As(e) || ju();
}
function Or(e, t) {
  for (var r = e, n = 0; n < t.length; n += 1) {
    if (r == null)
      return;
    r = r[t[n]];
  }
  return r;
}
function ad(e, t, r, n) {
  if (!t.length)
    return r;
  var a = Dm(t), o = a[0], i = a.slice(1), s;
  return !e && typeof o == "number" ? s = [] : Array.isArray(e) ? s = he(e) : s = D({}, e), n && r === void 0 && i.length === 1 ? delete s[o][i[0]] : s[o] = ad(s[o], i, r, n), s;
}
function mr(e, t, r) {
  var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return t.length && n && r === void 0 && !Or(e, t.slice(0, -1)) ? e : ad(e, t, r, n);
}
function zm(e) {
  return Ae(e) === "object" && e !== null && Object.getPrototypeOf(e) === Object.prototype;
}
function Dl(e) {
  return Array.isArray(e) ? [] : {};
}
var Vm = typeof Reflect > "u" ? Object.keys : Reflect.ownKeys;
function Pn() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n = Dl(t[0]);
  return t.forEach(function(a) {
    function o(i, s) {
      var l = new Set(s), c = Or(a, i), d = Array.isArray(c);
      if (d || zm(c)) {
        if (!l.has(c)) {
          l.add(c);
          var f = Or(n, i);
          d ? n = mr(n, i, []) : (!f || Ae(f) !== "object") && (n = mr(n, i, Dl(c))), Vm(c).forEach(function(v) {
            o([].concat(he(i), [v]), l);
          });
        }
      } else
        n = mr(n, i, c);
    }
    o([]);
  }), n;
}
function od() {
}
let Ar = null;
function Bm() {
  Ar = null, yu();
}
let Bs = od;
process.env.NODE_ENV !== "production" && (Bs = (e, t, r) => {
  tt(e, `[antd: ${t}] ${r}`), process.env.NODE_ENV === "test" && Bm();
});
const id = /* @__PURE__ */ u.createContext({}), Ft = process.env.NODE_ENV !== "production" ? (e) => {
  const {
    strict: t
  } = u.useContext(id), r = (n, a, o) => {
    if (!n)
      if (t === !1 && a === "deprecated") {
        const i = Ar;
        Ar || (Ar = {}), Ar[e] = Ar[e] || [], Ar[e].includes(o || "") || Ar[e].push(o || ""), i || console.warn("[antd] There exists deprecated usage in your code:", Ar);
      } else
        process.env.NODE_ENV !== "production" && Bs(n, e, o);
  };
  return r.deprecated = (n, a, o, i) => {
    r(n, "deprecated", `\`${a}\` is deprecated. Please use \`${o}\` instead.${i ? ` ${i}` : ""}`);
  }, r;
} : () => {
  const e = () => {
  };
  return e.deprecated = od, e;
}, zo = Bs, km = /* @__PURE__ */ kn(void 0);
var Hm = {
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
}, Wm = {
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
const sd = {
  placeholder: "Select time",
  rangePlaceholder: ["Start time", "End time"]
}, zl = {
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
  }, Wm),
  timePickerLocale: Object.assign({}, sd)
}, Qt = "${label} is not a valid ${type}", Ln = {
  locale: "en",
  Pagination: Hm,
  DatePicker: zl,
  TimePicker: sd,
  Calendar: zl,
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
        string: Qt,
        method: Qt,
        array: Qt,
        object: Qt,
        number: Qt,
        date: Qt,
        boolean: Qt,
        integer: Qt,
        float: Qt,
        regexp: Qt,
        email: Qt,
        url: Qt,
        hex: Qt
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
Object.assign({}, Ln.Modal);
let go = [];
const Vl = () => go.reduce((e, t) => Object.assign(Object.assign({}, e), t), Ln.Modal);
function Km(e) {
  if (e) {
    const t = Object.assign({}, e);
    return go.push(t), Vl(), () => {
      go = go.filter((r) => r !== t), Vl();
    };
  }
  Object.assign({}, Ln.Modal);
}
const ks = /* @__PURE__ */ kn(void 0), Um = (e, t) => {
  const r = u.useContext(ks), n = u.useMemo(() => {
    var o;
    const i = Ln[e], s = (o = r == null ? void 0 : r[e]) !== null && o !== void 0 ? o : {};
    return Object.assign(Object.assign({}, typeof i == "function" ? i() : i), s || {});
  }, [e, t, r]), a = u.useMemo(() => {
    const o = r == null ? void 0 : r.locale;
    return r != null && r.exist && !o ? Ln.locale : o;
  }, [r]);
  return [n, a];
}, ld = "internalMark", cd = (e) => {
  const {
    locale: t = {},
    children: r,
    _ANT_MARK__: n
  } = e;
  if (process.env.NODE_ENV !== "production") {
    const o = Ft("LocaleProvider");
    process.env.NODE_ENV !== "production" && o(n === ld, "deprecated", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale");
  }
  u.useEffect(() => Km(t == null ? void 0 : t.Modal), [t]);
  const a = u.useMemo(() => Object.assign(Object.assign({}, t), {
    exist: !0
  }), [t]);
  return /* @__PURE__ */ u.createElement(ks.Provider, {
    value: a
  }, r);
};
process.env.NODE_ENV !== "production" && (cd.displayName = "LocaleProvider");
function jt(e, t) {
  Gm(e) && (e = "100%");
  var r = qm(e);
  return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), r && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e);
}
function Ka(e) {
  return Math.min(1, Math.max(0, e));
}
function Gm(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function qm(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function ud(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function Ua(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function sn(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function Xm(e, t, r) {
  return {
    r: jt(e, 255) * 255,
    g: jt(t, 255) * 255,
    b: jt(r, 255) * 255
  };
}
function Bl(e, t, r) {
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
function si(e, t, r) {
  return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + (t - e) * (6 * r) : r < 1 / 2 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e;
}
function Ym(e, t, r) {
  var n, a, o;
  if (e = jt(e, 360), t = jt(t, 100), r = jt(r, 100), t === 0)
    a = r, o = r, n = r;
  else {
    var i = r < 0.5 ? r * (1 + t) : r + t - r * t, s = 2 * r - i;
    n = si(s, i, e + 1 / 3), a = si(s, i, e), o = si(s, i, e - 1 / 3);
  }
  return { r: n * 255, g: a * 255, b: o * 255 };
}
function qi(e, t, r) {
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
function Zm(e, t, r) {
  e = jt(e, 360) * 6, t = jt(t, 100), r = jt(r, 100);
  var n = Math.floor(e), a = e - n, o = r * (1 - t), i = r * (1 - a * t), s = r * (1 - (1 - a) * t), l = n % 6, c = [r, i, o, o, s, r][l], d = [s, r, r, i, o, o][l], f = [o, o, s, r, r, i][l];
  return { r: c * 255, g: d * 255, b: f * 255 };
}
function Xi(e, t, r, n) {
  var a = [
    sn(Math.round(e).toString(16)),
    sn(Math.round(t).toString(16)),
    sn(Math.round(r).toString(16))
  ];
  return n && a[0].startsWith(a[0].charAt(1)) && a[1].startsWith(a[1].charAt(1)) && a[2].startsWith(a[2].charAt(1)) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) : a.join("");
}
function Qm(e, t, r, n, a) {
  var o = [
    sn(Math.round(e).toString(16)),
    sn(Math.round(t).toString(16)),
    sn(Math.round(r).toString(16)),
    sn(Jm(n))
  ];
  return a && o[0].startsWith(o[0].charAt(1)) && o[1].startsWith(o[1].charAt(1)) && o[2].startsWith(o[2].charAt(1)) && o[3].startsWith(o[3].charAt(1)) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) + o[3].charAt(0) : o.join("");
}
function Jm(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function kl(e) {
  return er(e) / 255;
}
function er(e) {
  return parseInt(e, 16);
}
function ep(e) {
  return {
    r: e >> 16,
    g: (e & 65280) >> 8,
    b: e & 255
  };
}
var Yi = {
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
function Rn(e) {
  var t = { r: 0, g: 0, b: 0 }, r = 1, n = null, a = null, o = null, i = !1, s = !1;
  return typeof e == "string" && (e = np(e)), typeof e == "object" && (Ir(e.r) && Ir(e.g) && Ir(e.b) ? (t = Xm(e.r, e.g, e.b), i = !0, s = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : Ir(e.h) && Ir(e.s) && Ir(e.v) ? (n = Ua(e.s), a = Ua(e.v), t = Zm(e.h, n, a), i = !0, s = "hsv") : Ir(e.h) && Ir(e.s) && Ir(e.l) && (n = Ua(e.s), o = Ua(e.l), t = Ym(e.h, n, o), i = !0, s = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (r = e.a)), r = ud(r), {
    ok: i,
    format: e.format || s,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: r
  };
}
var tp = "[-\\+]?\\d+%?", rp = "[-\\+]?\\d*\\.\\d+%?", Xr = "(?:".concat(rp, ")|(?:").concat(tp, ")"), li = "[\\s|\\(]+(".concat(Xr, ")[,|\\s]+(").concat(Xr, ")[,|\\s]+(").concat(Xr, ")\\s*\\)?"), ci = "[\\s|\\(]+(".concat(Xr, ")[,|\\s]+(").concat(Xr, ")[,|\\s]+(").concat(Xr, ")[,|\\s]+(").concat(Xr, ")\\s*\\)?"), gr = {
  CSS_UNIT: new RegExp(Xr),
  rgb: new RegExp("rgb" + li),
  rgba: new RegExp("rgba" + ci),
  hsl: new RegExp("hsl" + li),
  hsla: new RegExp("hsla" + ci),
  hsv: new RegExp("hsv" + li),
  hsva: new RegExp("hsva" + ci),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function np(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var t = !1;
  if (Yi[e])
    e = Yi[e], t = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var r = gr.rgb.exec(e);
  return r ? { r: r[1], g: r[2], b: r[3] } : (r = gr.rgba.exec(e), r ? { r: r[1], g: r[2], b: r[3], a: r[4] } : (r = gr.hsl.exec(e), r ? { h: r[1], s: r[2], l: r[3] } : (r = gr.hsla.exec(e), r ? { h: r[1], s: r[2], l: r[3], a: r[4] } : (r = gr.hsv.exec(e), r ? { h: r[1], s: r[2], v: r[3] } : (r = gr.hsva.exec(e), r ? { h: r[1], s: r[2], v: r[3], a: r[4] } : (r = gr.hex8.exec(e), r ? {
    r: er(r[1]),
    g: er(r[2]),
    b: er(r[3]),
    a: kl(r[4]),
    format: t ? "name" : "hex8"
  } : (r = gr.hex6.exec(e), r ? {
    r: er(r[1]),
    g: er(r[2]),
    b: er(r[3]),
    format: t ? "name" : "hex"
  } : (r = gr.hex4.exec(e), r ? {
    r: er(r[1] + r[1]),
    g: er(r[2] + r[2]),
    b: er(r[3] + r[3]),
    a: kl(r[4] + r[4]),
    format: t ? "name" : "hex8"
  } : (r = gr.hex3.exec(e), r ? {
    r: er(r[1] + r[1]),
    g: er(r[2] + r[2]),
    b: er(r[3] + r[3]),
    format: t ? "name" : "hex"
  } : !1)))))))));
}
function Ir(e) {
  return !!gr.CSS_UNIT.exec(String(e));
}
var tr = (
  /** @class */
  function() {
    function e(t, r) {
      t === void 0 && (t = ""), r === void 0 && (r = {});
      var n;
      if (t instanceof e)
        return t;
      typeof t == "number" && (t = ep(t)), this.originalInput = t;
      var a = Rn(t);
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
      return this.a = ud(t), this.roundA = Math.round(100 * this.a) / 100, this;
    }, e.prototype.isMonochrome = function() {
      var t = this.toHsl().s;
      return t === 0;
    }, e.prototype.toHsv = function() {
      var t = qi(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
    }, e.prototype.toHsvString = function() {
      var t = qi(this.r, this.g, this.b), r = Math.round(t.h * 360), n = Math.round(t.s * 100), a = Math.round(t.v * 100);
      return this.a === 1 ? "hsv(".concat(r, ", ").concat(n, "%, ").concat(a, "%)") : "hsva(".concat(r, ", ").concat(n, "%, ").concat(a, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHsl = function() {
      var t = Bl(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
    }, e.prototype.toHslString = function() {
      var t = Bl(this.r, this.g, this.b), r = Math.round(t.h * 360), n = Math.round(t.s * 100), a = Math.round(t.l * 100);
      return this.a === 1 ? "hsl(".concat(r, ", ").concat(n, "%, ").concat(a, "%)") : "hsla(".concat(r, ", ").concat(n, "%, ").concat(a, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHex = function(t) {
      return t === void 0 && (t = !1), Xi(this.r, this.g, this.b, t);
    }, e.prototype.toHexString = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex(t);
    }, e.prototype.toHex8 = function(t) {
      return t === void 0 && (t = !1), Qm(this.r, this.g, this.b, this.a, t);
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
      for (var t = "#" + Xi(this.r, this.g, this.b, !1), r = 0, n = Object.entries(Yi); r < n.length; r++) {
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
      return r.l += t / 100, r.l = Ka(r.l), new e(r);
    }, e.prototype.brighten = function(t) {
      t === void 0 && (t = 10);
      var r = this.toRgb();
      return r.r = Math.max(0, Math.min(255, r.r - Math.round(255 * -(t / 100)))), r.g = Math.max(0, Math.min(255, r.g - Math.round(255 * -(t / 100)))), r.b = Math.max(0, Math.min(255, r.b - Math.round(255 * -(t / 100)))), new e(r);
    }, e.prototype.darken = function(t) {
      t === void 0 && (t = 10);
      var r = this.toHsl();
      return r.l -= t / 100, r.l = Ka(r.l), new e(r);
    }, e.prototype.tint = function(t) {
      return t === void 0 && (t = 10), this.mix("white", t);
    }, e.prototype.shade = function(t) {
      return t === void 0 && (t = 10), this.mix("black", t);
    }, e.prototype.desaturate = function(t) {
      t === void 0 && (t = 10);
      var r = this.toHsl();
      return r.s -= t / 100, r.s = Ka(r.s), new e(r);
    }, e.prototype.saturate = function(t) {
      t === void 0 && (t = 10);
      var r = this.toHsl();
      return r.s += t / 100, r.s = Ka(r.s), new e(r);
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
), Ga = 2, Hl = 0.16, ap = 0.05, op = 0.05, ip = 0.15, dd = 5, fd = 4, sp = [{
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
function Wl(e) {
  var t = e.r, r = e.g, n = e.b, a = qi(t, r, n);
  return {
    h: a.h * 360,
    s: a.s,
    v: a.v
  };
}
function qa(e) {
  var t = e.r, r = e.g, n = e.b;
  return "#".concat(Xi(t, r, n, !1));
}
function lp(e, t, r) {
  var n = r / 100, a = {
    r: (t.r - e.r) * n + e.r,
    g: (t.g - e.g) * n + e.g,
    b: (t.b - e.b) * n + e.b
  };
  return a;
}
function Kl(e, t, r) {
  var n;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? n = r ? Math.round(e.h) - Ga * t : Math.round(e.h) + Ga * t : n = r ? Math.round(e.h) + Ga * t : Math.round(e.h) - Ga * t, n < 0 ? n += 360 : n >= 360 && (n -= 360), n;
}
function Ul(e, t, r) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  var n;
  return r ? n = e.s - Hl * t : t === fd ? n = e.s + Hl : n = e.s + ap * t, n > 1 && (n = 1), r && t === dd && n > 0.1 && (n = 0.1), n < 0.06 && (n = 0.06), Number(n.toFixed(2));
}
function Gl(e, t, r) {
  var n;
  return r ? n = e.v + op * t : n = e.v - ip * t, n > 1 && (n = 1), Number(n.toFixed(2));
}
function wa(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = [], n = Rn(e), a = dd; a > 0; a -= 1) {
    var o = Wl(n), i = qa(Rn({
      h: Kl(o, a, !0),
      s: Ul(o, a, !0),
      v: Gl(o, a, !0)
    }));
    r.push(i);
  }
  r.push(qa(n));
  for (var s = 1; s <= fd; s += 1) {
    var l = Wl(n), c = qa(Rn({
      h: Kl(l, s),
      s: Ul(l, s),
      v: Gl(l, s)
    }));
    r.push(c);
  }
  return t.theme === "dark" ? sp.map(function(d) {
    var f = d.index, v = d.opacity, m = qa(lp(Rn(t.backgroundColor || "#141414"), Rn(r[f]), v * 100));
    return m;
  }) : r;
}
var Zi = ["#fffbe6", "#fff1b8", "#ffe58f", "#ffd666", "#ffc53d", "#faad14", "#d48806", "#ad6800", "#874d00", "#613400"];
Zi.primary = Zi[5];
var Qi = ["#e6f4ff", "#bae0ff", "#91caff", "#69b1ff", "#4096ff", "#1677ff", "#0958d9", "#003eb3", "#002c8c", "#001d66"];
Qi.primary = Qi[5];
const vd = {
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
}, $a = Object.assign(Object.assign({}, vd), {
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
function cp(e, t) {
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
  } = e, f = r(l), v = r(a), m = r(o), b = r(i), p = r(s), g = n(c, d), S = e.colorLink || e.colorInfo, h = r(S);
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
    colorErrorBg: b[1],
    colorErrorBgHover: b[2],
    colorErrorBgActive: b[3],
    colorErrorBorder: b[3],
    colorErrorBorderHover: b[4],
    colorErrorHover: b[5],
    colorError: b[6],
    colorErrorActive: b[7],
    colorErrorTextHover: b[8],
    colorErrorText: b[9],
    colorErrorTextActive: b[10],
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
    colorLinkHover: h[4],
    colorLink: h[6],
    colorLinkActive: h[7],
    colorBgMask: new tr("#000").setAlpha(0.45).toRgbString(),
    colorWhite: "#fff"
  });
}
const up = (e) => {
  let t = e, r = e, n = e, a = e;
  return e < 6 && e >= 5 ? t = e + 1 : e < 16 && e >= 6 ? t = e + 2 : e >= 16 && (t = 16), e < 7 && e >= 5 ? r = 4 : e < 8 && e >= 7 ? r = 5 : e < 14 && e >= 8 ? r = 6 : e < 16 && e >= 14 ? r = 7 : e >= 16 && (r = 8), e < 6 && e >= 2 ? n = 1 : e >= 6 && (n = 2), e > 4 && e < 8 ? a = 4 : e >= 8 && (a = 6), {
    borderRadius: e,
    borderRadiusXS: n,
    borderRadiusSM: r,
    borderRadiusLG: t,
    borderRadiusOuter: a
  };
};
function dp(e) {
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
  }, up(n));
}
const fp = (e) => {
  const {
    controlHeight: t
  } = e;
  return {
    controlHeightSM: t * 0.75,
    controlHeightXS: t * 0.5,
    controlHeightLG: t * 1.25
  };
};
function mo(e) {
  return (e + 8) / e;
}
function vp(e) {
  const t = new Array(10).fill(null).map((r, n) => {
    const a = n - 1, o = e * Math.pow(Math.E, a / 5), i = n > 1 ? Math.floor(o) : Math.ceil(o);
    return Math.floor(i / 2) * 2;
  });
  return t[1] = e, t.map((r) => ({
    size: r,
    lineHeight: mo(r)
  }));
}
const gp = (e) => {
  const t = vp(e), r = t.map((d) => d.size), n = t.map((d) => d.lineHeight), a = r[1], o = r[0], i = r[2], s = n[1], l = n[0], c = n[2];
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
function mp(e) {
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
const Mr = (e, t) => new tr(e).setAlpha(t).toRgbString(), na = (e, t) => new tr(e).darken(t).toHexString(), pp = (e) => {
  const t = wa(e);
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
}, hp = (e, t) => {
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
    colorBgLayout: na(r, 4),
    colorBgContainer: na(r, 0),
    colorBgElevated: na(r, 0),
    colorBgSpotlight: Mr(n, 0.85),
    colorBgBlur: "transparent",
    colorBorder: na(r, 15),
    colorBorderSecondary: na(r, 6)
  };
};
function bp(e) {
  const t = Object.keys(vd).map((r) => {
    const n = wa(e[r]);
    return new Array(10).fill(1).reduce((a, o, i) => (a[`${r}-${i + 1}`] = n[i], a[`${r}${i + 1}`] = n[i], a), {});
  }).reduce((r, n) => (r = Object.assign(Object.assign({}, r), n), r), {});
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, e), t), cp(e, {
    generateColorPalettes: pp,
    generateNeutralColorPalettes: hp
  })), gp(e.fontSize)), mp(e)), fp(e)), dp(e));
}
const gd = Vi(bp), Ji = {
  token: $a,
  override: {
    override: $a
  },
  hashed: !0
}, md = /* @__PURE__ */ q.createContext(Ji), pd = "anticon", yp = ["outlined", "borderless", "filled"], Sp = (e, t) => t || (e ? `ant-${e}` : "ant"), ft = /* @__PURE__ */ u.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: Sp,
  iconPrefixCls: pd
}), Cp = `-ant-${Date.now()}-${Math.random()}`;
function Ep(e, t) {
  const r = {}, n = (i, s) => {
    let l = i.clone();
    return l = (s == null ? void 0 : s(l)) || l, l.toRgbString();
  }, a = (i, s) => {
    const l = new tr(i), c = wa(l.toRgbString());
    r[`${s}-color`] = n(l), r[`${s}-color-disabled`] = c[1], r[`${s}-color-hover`] = c[4], r[`${s}-color-active`] = c[6], r[`${s}-color-outline`] = l.clone().setAlpha(0.2).toRgbString(), r[`${s}-color-deprecated-bg`] = c[0], r[`${s}-color-deprecated-border`] = c[2];
  };
  if (t.primaryColor) {
    a(t.primaryColor, "primary");
    const i = new tr(t.primaryColor), s = wa(i.toRgbString());
    s.forEach((c, d) => {
      r[`primary-${d + 1}`] = c;
    }), r["primary-color-deprecated-l-35"] = n(i, (c) => c.lighten(35)), r["primary-color-deprecated-l-20"] = n(i, (c) => c.lighten(20)), r["primary-color-deprecated-t-20"] = n(i, (c) => c.tint(20)), r["primary-color-deprecated-t-50"] = n(i, (c) => c.tint(50)), r["primary-color-deprecated-f-12"] = n(i, (c) => c.setAlpha(c.getAlpha() * 0.12));
    const l = new tr(s[0]);
    r["primary-color-active-deprecated-f-30"] = n(l, (c) => c.setAlpha(c.getAlpha() * 0.3)), r["primary-color-active-deprecated-d-02"] = n(l, (c) => c.darken(2));
  }
  return t.successColor && a(t.successColor, "success"), t.warningColor && a(t.warningColor, "warning"), t.errorColor && a(t.errorColor, "error"), t.infoColor && a(t.infoColor, "info"), `
  :root {
    ${Object.keys(r).map((i) => `--${e}-${i}: ${r[i]};`).join(`
`)}
  }
  `.trim();
}
function xp(e, t) {
  const r = Ep(e, t);
  Xt() ? Lr(r, `${Cp}-dynamic-theme`) : process.env.NODE_ENV !== "production" && zo(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
}
const Dn = /* @__PURE__ */ u.createContext(!1), wp = (e) => {
  let {
    children: t,
    disabled: r
  } = e;
  const n = u.useContext(Dn);
  return /* @__PURE__ */ u.createElement(Dn.Provider, {
    value: r ?? n
  }, t);
}, zn = /* @__PURE__ */ u.createContext(void 0), $p = (e) => {
  let {
    children: t,
    size: r
  } = e;
  const n = u.useContext(zn);
  return /* @__PURE__ */ u.createElement(zn.Provider, {
    value: r || n
  }, t);
};
function Op() {
  const e = Ht(Dn), t = Ht(zn);
  return {
    componentDisabled: e,
    componentSize: t
  };
}
const xo = ["blue", "purple", "cyan", "green", "magenta", "pink", "red", "orange", "yellow", "volcano", "geekblue", "lime", "gold"], Rp = "5.19.0";
function ui(e) {
  return e >= 0 && e <= 255;
}
function Xa(e, t) {
  const {
    r,
    g: n,
    b: a,
    a: o
  } = new tr(e).toRgb();
  if (o < 1)
    return e;
  const {
    r: i,
    g: s,
    b: l
  } = new tr(t).toRgb();
  for (let c = 0.01; c <= 1; c += 0.01) {
    const d = Math.round((r - i * (1 - c)) / c), f = Math.round((n - s * (1 - c)) / c), v = Math.round((a - l * (1 - c)) / c);
    if (ui(d) && ui(f) && ui(v))
      return new tr({
        r: d,
        g: f,
        b: v,
        a: Math.round(c * 100) / 100
      }).toRgbString();
  }
  return new tr({
    r,
    g: n,
    b: a,
    a: 1
  }).toRgbString();
}
var Pp = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
    t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
function hd(e) {
  const {
    override: t
  } = e, r = Pp(e, ["override"]), n = Object.assign({}, t);
  Object.keys($a).forEach((v) => {
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
    colorSplit: Xa(a.colorBorderSecondary, a.colorBgContainer),
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
    colorErrorOutline: Xa(a.colorErrorBg, a.colorBgContainer),
    colorWarningOutline: Xa(a.colorWarningBg, a.colorBgContainer),
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
    controlOutline: Xa(a.colorPrimaryBg, a.colorBgContainer),
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
      0 1px 2px -2px ${new tr("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new tr("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new tr("rgba(0, 0, 0, 0.09)").toRgbString()}
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
var ql = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
    t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const bd = {
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
}, yd = {
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
}, _p = {
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
}, Sd = (e, t, r) => {
  const n = r.getDerivativeToken(e), {
    override: a
  } = t, o = ql(t, ["override"]);
  let i = Object.assign(Object.assign({}, n), {
    override: a
  });
  return i = hd(i), o && Object.entries(o).forEach((s) => {
    let [l, c] = s;
    const {
      theme: d
    } = c, f = ql(c, ["theme"]);
    let v = f;
    d && (v = Sd(Object.assign(Object.assign({}, i), f), {
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
  } = q.useContext(md), o = `${Rp}-${t || ""}`, i = r || gd, [s, l, c] = sm(i, [$a, e], {
    salt: o,
    override: n,
    getComputedToken: Sd,
    // formatToken will not be consumed after 1.15.0 with getComputedToken.
    // But token will break if @ant-design/cssinjs is under 1.15.0 without it
    formatToken: hd,
    cssVar: a && {
      prefix: a.prefix,
      key: a.key,
      unitless: bd,
      ignore: yd,
      preserve: _p
    }
  });
  return [i, c, t ? l : "", s, a];
}
function kt(e) {
  var t = u.useRef();
  t.current = e;
  var r = u.useCallback(function() {
    for (var n, a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return (n = t.current) === null || n === void 0 ? void 0 : n.call.apply(n, [t].concat(o));
  }, []);
  return r;
}
function Oa(e) {
  var t = u.useRef(!1), r = u.useState(e), n = K(r, 2), a = n[0], o = n[1];
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
function di(e) {
  return e !== void 0;
}
function cr(e, t) {
  var r = t || {}, n = r.defaultValue, a = r.value, o = r.onChange, i = r.postState, s = Oa(function() {
    return di(a) ? a : di(n) ? typeof n == "function" ? n() : n : typeof e == "function" ? e() : e;
  }), l = K(s, 2), c = l[0], d = l[1], f = a !== void 0 ? a : c, v = i ? i(f) : f, m = kt(o), b = Oa([f]), p = K(b, 2), g = p[0], S = p[1];
  ki(function() {
    var y = g[0];
    c !== y && m(c, y);
  }, [g]), ki(function() {
    di(a) || d(a);
  }, [a]);
  var h = kt(function(y, E) {
    d(y, E), S([f], E);
  });
  return [v, h];
}
const Tp = 1e3 * 60 * 10;
let Np = /* @__PURE__ */ function() {
  function e() {
    Lt(this, e), this.map = /* @__PURE__ */ new Map(), this.objectIDMap = /* @__PURE__ */ new WeakMap(), this.nextID = 0, this.lastAccessBeat = /* @__PURE__ */ new Map(), this.accessBeat = 0;
  }
  return Dt(e, [{
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
          r - n > Tp && (this.map.delete(a), this.lastAccessBeat.delete(a));
        }), this.accessBeat = 0;
      }
    }
  }]);
}();
const Xl = new Np();
function Ip(e, t) {
  return q.useMemo(() => {
    const r = Xl.get(t);
    if (r)
      return r;
    const n = e();
    return Xl.set(t, n), n;
  }, t);
}
const Cd = (e) => ({
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
}), Hs = {
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis"
}, Wn = function(e) {
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
}, Mp = () => ({
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
}), Ia = () => ({
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
}), Ap = (e) => ({
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
}), jp = (e, t, r, n) => {
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
}, Fp = (e) => ({
  outline: `${ee(e.lineWidthFocus)} solid ${e.colorPrimaryBorder}`,
  outlineOffset: 1,
  transition: "outline-offset 0s, outline 0s"
}), Ws = (e) => ({
  "&:focus-visible": Object.assign({}, Fp(e))
});
function Lp(e) {
  return e === "js" ? {
    max: Math.max,
    min: Math.min
  } : {
    max: function() {
      for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
        r[n] = arguments[n];
      return `max(${r.map((a) => ee(a)).join(",")})`;
    },
    min: function() {
      for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
        r[n] = arguments[n];
      return `min(${r.map((a) => ee(a)).join(",")})`;
    }
  };
}
const Ed = process.env.NODE_ENV !== "production" || typeof CSSINJS_STATISTIC < "u";
let es = !0;
function Zt() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  if (!Ed)
    return Object.assign.apply(Object, [{}].concat(t));
  es = !1;
  const n = {};
  return t.forEach((a) => {
    Object.keys(a).forEach((i) => {
      Object.defineProperty(n, i, {
        configurable: !0,
        enumerable: !0,
        get: () => a[i]
      });
    });
  }), es = !0, n;
}
const Yl = {};
function Dp() {
}
const zp = (e) => {
  let t, r = e, n = Dp;
  return Ed && typeof Proxy < "u" && (t = /* @__PURE__ */ new Set(), r = new Proxy(e, {
    get(a, o) {
      return es && t.add(o), a[o];
    }
  }), n = (a, o) => {
    var i;
    Yl[a] = {
      global: Array.from(t),
      component: Object.assign(Object.assign({}, (i = Yl[a]) === null || i === void 0 ? void 0 : i.component), o)
    };
  }), {
    token: r,
    keys: t,
    flush: n
  };
}, xd = (e, t) => {
  const [r, n] = Rr();
  return Gi({
    theme: r,
    token: n,
    hashId: "",
    path: ["ant-design-icons", e],
    nonce: () => t == null ? void 0 : t.nonce,
    layer: {
      name: "antd"
    }
  }, () => [{
    [`.${e}`]: Object.assign(Object.assign({}, Mp()), {
      [`.${e} .${e}-icon`]: {
        display: "block"
      }
    })
  }]);
}, wd = (e, t, r) => {
  var n;
  return typeof r == "function" ? r(Zt(t, (n = t[e]) !== null && n !== void 0 ? n : {})) : r ?? {};
}, $d = (e, t, r, n) => {
  const a = Object.assign({}, t[e]);
  if (n != null && n.deprecatedTokens) {
    const {
      deprecatedTokens: i
    } = n;
    i.forEach((s) => {
      let [l, c] = s;
      var d;
      process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && tt(!(a != null && a[l]), `Component Token \`${String(l)}\` of ${e} is deprecated. Please use \`${String(c)}\` instead.`), (a != null && a[l] || a != null && a[c]) && ((d = a[c]) !== null && d !== void 0 || (a[c] = a == null ? void 0 : a[l]));
    });
  }
  const o = Object.assign(Object.assign({}, r), a);
  return Object.keys(o).forEach((i) => {
    o[i] === t[i] && delete o[i];
  }), o;
}, Zl = (e, t) => `${[t, e.replace(/([A-Z]+)([A-Z][a-z]+)/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2")].filter(Boolean).join("-")}`;
function Ks(e, t, r) {
  let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
  const a = Array.isArray(e) ? e : [e, e], [o] = a, i = a.join("-");
  return function(s) {
    let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : s;
    const [c, d, f, v, m] = Rr(), {
      getPrefixCls: b,
      iconPrefixCls: p,
      csp: g
    } = Ht(ft), S = b(), h = m ? "css" : "js", y = Ip(() => {
      const w = /* @__PURE__ */ new Set();
      return m && Object.keys(n.unitless || {}).forEach(($) => {
        w.add(lo($, m.prefix)), w.add(lo($, Zl(o, m.prefix)));
      }), Lg(h, w);
    }, [h, o, m == null ? void 0 : m.prefix]), {
      max: E,
      min: C
    } = Lp(h), O = {
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
    return Gi(Object.assign(Object.assign({}, O), {
      clientOnly: !1,
      path: ["Shared", S]
    }), () => [{
      // Link
      "&": Ap(v)
    }]), xd(p, g), [Gi(Object.assign(Object.assign({}, O), {
      path: [i, s, p]
    }), () => {
      if (n.injectStyle === !1)
        return [];
      const {
        token: w,
        flush: $
      } = zp(v), A = wd(o, d, r), F = `.${s}`, M = $d(o, d, A, {
        deprecatedTokens: n.deprecatedTokens
      });
      m && Object.keys(A).forEach((k) => {
        A[k] = `var(${lo(k, Zl(o, m.prefix))})`;
      });
      const I = Zt(w, {
        componentCls: F,
        prefixCls: s,
        iconCls: `.${p}`,
        antCls: `.${S}`,
        calc: y,
        // @ts-ignore
        max: E,
        // @ts-ignore
        min: C
      }, m ? A : M), T = t(I, {
        hashId: f,
        prefixCls: s,
        rootPrefixCls: S,
        iconPrefixCls: p
      });
      return $(o, M), [n.resetStyle === !1 ? null : jp(I, s, l, n.resetFont), T];
    }), f];
  };
}
const Vp = (e, t, r, n) => {
  const a = Ks(e, t, r, Object.assign({
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
}, Bp = (e, t, r) => {
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
    return Fm({
      path: [e],
      prefix: d.prefix,
      key: d == null ? void 0 : d.key,
      unitless: n,
      ignore: yd,
      token: f,
      scope: c
    }, () => {
      const v = wd(e, f, t), m = $d(e, f, v, {
        deprecatedTokens: r == null ? void 0 : r.deprecatedTokens
      });
      return Object.keys(v).forEach((b) => {
        m[o(b)] = m[b], delete m[b];
      }), m;
    }), null;
  };
  return (l) => {
    const [, , , , c] = Rr();
    return [(d) => a && c ? /* @__PURE__ */ q.createElement(q.Fragment, null, /* @__PURE__ */ q.createElement(i, {
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
  const i = (n == null ? void 0 : n.unitless) || {}, s = Object.assign(Object.assign({}, bd), {
    [o("zIndexPopup")]: !0
  });
  Object.keys(i).forEach((f) => {
    s[o(f)] = i[f];
  });
  const l = Object.assign(Object.assign({}, n), {
    unitless: s,
    prefixToken: o
  }), c = Ks(e, t, r, l), d = Bp(a, r, l);
  return function(f) {
    let v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : f;
    const [, m] = c(f, v), [b, p] = d(v);
    return [b, m, p];
  };
};
function kp(e, t) {
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
const Hp = Object.assign({}, u), {
  useId: Ql
} = Hp, Wp = () => "", Kp = typeof Ql > "u" ? Wp : Ql;
function Up(e, t, r) {
  var n, a;
  const o = Ft("ConfigProvider"), i = e || {}, s = i.inherit === !1 || !t ? Object.assign(Object.assign({}, Ji), {
    hashed: (n = t == null ? void 0 : t.hashed) !== null && n !== void 0 ? n : Ji.hashed,
    cssVar: t == null ? void 0 : t.cssVar
  }) : t, l = Kp();
  if (process.env.NODE_ENV !== "production") {
    const c = i.cssVar || s.cssVar, d = !!(typeof i.cssVar == "object" && (!((a = i.cssVar) === null || a === void 0) && a.key) || l);
    process.env.NODE_ENV !== "production" && o(!c || d, "breaking", "Missing key in `cssVar` config. Please upgrade to React 18 or set `cssVar.key` manually in each ConfigProvider inside `cssVar` enabled ConfigProvider.");
  }
  return Io(() => {
    var c, d;
    if (!e)
      return t;
    const f = Object.assign({}, s.components);
    Object.keys(e.components || {}).forEach((b) => {
      f[b] = Object.assign(Object.assign({}, f[b]), e.components[b]);
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
    return !Ca(f, m, !0);
  }));
}
var Gp = ["children"], Od = /* @__PURE__ */ u.createContext({});
function qp(e) {
  var t = e.children, r = Ye(e, Gp);
  return /* @__PURE__ */ u.createElement(Od.Provider, {
    value: r
  }, t);
}
var Xp = /* @__PURE__ */ function(e) {
  Qr(r, e);
  var t = Jr(r);
  function r() {
    return Lt(this, r), t.apply(this, arguments);
  }
  return Dt(r, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), r;
}(u.Component);
function Yp(e) {
  var t = u.useReducer(function(s) {
    return s + 1;
  }, 0), r = K(t, 2), n = r[1], a = u.useRef(e), o = kt(function() {
    return a.current;
  }), i = kt(function(s) {
    a.current = typeof s == "function" ? s(a.current) : s, n();
  });
  return [o, i];
}
var Ur = "none", Ya = "appear", Za = "enter", Qa = "leave", Jl = "none", pr = "prepare", _n = "start", Tn = "active", Us = "end", Rd = "prepared";
function ec(e, t) {
  var r = {};
  return r[e.toLowerCase()] = t.toLowerCase(), r["Webkit".concat(e)] = "webkit".concat(t), r["Moz".concat(e)] = "moz".concat(t), r["ms".concat(e)] = "MS".concat(t), r["O".concat(e)] = "o".concat(t.toLowerCase()), r;
}
function Zp(e, t) {
  var r = {
    animationend: ec("Animation", "AnimationEnd"),
    transitionend: ec("Transition", "TransitionEnd")
  };
  return e && ("AnimationEvent" in t || delete r.animationend.animation, "TransitionEvent" in t || delete r.transitionend.transition), r;
}
var Qp = Zp(Xt(), typeof window < "u" ? window : {}), Pd = {};
if (Xt()) {
  var Jp = document.createElement("div");
  Pd = Jp.style;
}
var Ja = {};
function _d(e) {
  if (Ja[e])
    return Ja[e];
  var t = Qp[e];
  if (t)
    for (var r = Object.keys(t), n = r.length, a = 0; a < n; a += 1) {
      var o = r[a];
      if (Object.prototype.hasOwnProperty.call(t, o) && o in Pd)
        return Ja[e] = t[o], Ja[e];
    }
  return "";
}
var Td = _d("animationend"), Nd = _d("transitionend"), Id = !!(Td && Nd), tc = Td || "animationend", rc = Nd || "transitionend";
function nc(e, t) {
  if (!e) return null;
  if (Ae(e) === "object") {
    var r = t.replace(/-\w/g, function(n) {
      return n[1].toUpperCase();
    });
    return e[r];
  }
  return "".concat(e, "-").concat(t);
}
const eh = function(e) {
  var t = Be();
  function r(a) {
    a && (a.removeEventListener(rc, e), a.removeEventListener(tc, e));
  }
  function n(a) {
    t.current && t.current !== a && r(t.current), a && a !== t.current && (a.addEventListener(rc, e), a.addEventListener(tc, e), t.current = a);
  }
  return u.useEffect(function() {
    return function() {
      r(t.current);
    };
  }, []), [n, r];
};
var Md = Xt() ? Cv : yt;
const th = function() {
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
var rh = [pr, _n, Tn, Us], nh = [pr, Rd], Ad = !1, ah = !0;
function jd(e) {
  return e === Tn || e === Us;
}
const oh = function(e, t, r) {
  var n = Oa(Jl), a = K(n, 2), o = a[0], i = a[1], s = th(), l = K(s, 2), c = l[0], d = l[1];
  function f() {
    i(pr, !0);
  }
  var v = t ? nh : rh;
  return Md(function() {
    if (o !== Jl && o !== Us) {
      var m = v.indexOf(o), b = v[m + 1], p = r(o);
      p === Ad ? i(b, !0) : b && c(function(g) {
        function S() {
          g.isCanceled() || i(b, !0);
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
function ih(e, t, r, n) {
  var a = n.motionEnter, o = a === void 0 ? !0 : a, i = n.motionAppear, s = i === void 0 ? !0 : i, l = n.motionLeave, c = l === void 0 ? !0 : l, d = n.motionDeadline, f = n.motionLeaveImmediately, v = n.onAppearPrepare, m = n.onEnterPrepare, b = n.onLeavePrepare, p = n.onAppearStart, g = n.onEnterStart, S = n.onLeaveStart, h = n.onAppearActive, y = n.onEnterActive, E = n.onLeaveActive, C = n.onAppearEnd, O = n.onEnterEnd, R = n.onLeaveEnd, w = n.onVisibleChanged, $ = Oa(), A = K($, 2), F = A[0], M = A[1], I = Yp(Ur), T = K(I, 2), k = T[0], N = T[1], x = Oa(null), _ = K(x, 2), z = _[0], L = _[1], B = k(), X = Be(!1), W = Be(null);
  function G() {
    return r();
  }
  var Q = Be(!1);
  function Y() {
    N(Ur), L(null, !0);
  }
  var J = kt(function(te) {
    var re = k();
    if (re !== Ur) {
      var be = G();
      if (!(te && !te.deadline && te.target !== be)) {
        var ye = Q.current, ge;
        re === Ya && ye ? ge = C == null ? void 0 : C(be, te) : re === Za && ye ? ge = O == null ? void 0 : O(be, te) : re === Qa && ye && (ge = R == null ? void 0 : R(be, te)), ye && ge !== !1 && Y();
      }
    }
  }), ne = eh(J), se = K(ne, 1), xe = se[0], de = function(re) {
    switch (re) {
      case Ya:
        return j(j(j({}, pr, v), _n, p), Tn, h);
      case Za:
        return j(j(j({}, pr, m), _n, g), Tn, y);
      case Qa:
        return j(j(j({}, pr, b), _n, S), Tn, E);
      default:
        return {};
    }
  }, ue = u.useMemo(function() {
    return de(B);
  }, [B]), Ce = oh(B, !e, function(te) {
    if (te === pr) {
      var re = ue[pr];
      return re ? re(G()) : Ad;
    }
    if (fe in ue) {
      var be;
      L(((be = ue[fe]) === null || be === void 0 ? void 0 : be.call(ue, G(), null)) || null);
    }
    return fe === Tn && B !== Ur && (xe(G()), d > 0 && (clearTimeout(W.current), W.current = setTimeout(function() {
      J({
        deadline: !0
      });
    }, d))), fe === Rd && Y(), ah;
  }), V = K(Ce, 2), le = V[0], fe = V[1], Re = jd(fe);
  Q.current = Re, Md(function() {
    M(t);
    var te = X.current;
    X.current = !0;
    var re;
    !te && t && s && (re = Ya), te && t && o && (re = Za), (te && !t && c || !te && f && !t && c) && (re = Qa);
    var be = de(re);
    re && (e || be[pr]) ? (N(re), le()) : N(Ur);
  }, [t]), yt(function() {
    // Cancel appear
    (B === Ya && !s || // Cancel enter
    B === Za && !o || // Cancel leave
    B === Qa && !c) && N(Ur);
  }, [s, o, c]), yt(function() {
    return function() {
      X.current = !1, clearTimeout(W.current);
    };
  }, []);
  var me = u.useRef(!1);
  yt(function() {
    F && (me.current = !0), F !== void 0 && B === Ur && ((me.current || F) && (w == null || w(F)), me.current = !0);
  }, [F, B]);
  var ae = z;
  return ue[pr] && fe === _n && (ae = D({
    transition: "none"
  }, ae)), [B, fe, ae, F ?? t];
}
function sh(e) {
  var t = e;
  Ae(e) === "object" && (t = e.transitionSupport);
  function r(a, o) {
    return !!(a.motionName && t && o !== !1);
  }
  var n = /* @__PURE__ */ u.forwardRef(function(a, o) {
    var i = a.visible, s = i === void 0 ? !0 : i, l = a.removeOnLeave, c = l === void 0 ? !0 : l, d = a.forceRender, f = a.children, v = a.motionName, m = a.leavedClassName, b = a.eventProps, p = u.useContext(Od), g = p.motion, S = r(a, g), h = Be(), y = Be();
    function E() {
      try {
        return h.current instanceof HTMLElement ? h.current : so(y.current);
      } catch {
        return null;
      }
    }
    var C = ih(S, s, E, a), O = K(C, 4), R = O[0], w = O[1], $ = O[2], A = O[3], F = u.useRef(A);
    A && (F.current = !0);
    var M = u.useCallback(function(z) {
      h.current = z, Is(o, z);
    }, [o]), I, T = D(D({}, b), {}, {
      visible: s
    });
    if (!f)
      I = null;
    else if (R === Ur)
      A ? I = f(D({}, T), M) : !c && F.current && m ? I = f(D(D({}, T), {}, {
        className: m
      }), M) : d || !c && !m ? I = f(D(D({}, T), {}, {
        style: {
          display: "none"
        }
      }), M) : I = null;
    else {
      var k;
      w === pr ? k = "prepare" : jd(w) ? k = "active" : w === _n && (k = "start");
      var N = nc(v, "".concat(R, "-").concat(k));
      I = f(D(D({}, T), {}, {
        className: Z(nc(v, R), j(j({}, N, N && k), v, typeof v == "string")),
        style: $
      }), M);
    }
    if (/* @__PURE__ */ u.isValidElement(I) && dn(I)) {
      var x = I, _ = x.ref;
      _ || (I = /* @__PURE__ */ u.cloneElement(I, {
        ref: M
      }));
    }
    return /* @__PURE__ */ u.createElement(Xp, {
      ref: y
    }, I);
  });
  return n.displayName = "CSSMotion", n;
}
const fn = sh(Id);
var ts = "add", rs = "keep", ns = "remove", fi = "removed";
function lh(e) {
  var t;
  return e && Ae(e) === "object" && "key" in e ? t = e : t = {
    key: e
  }, D(D({}, t), {}, {
    key: String(t.key)
  });
}
function as() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return e.map(lh);
}
function ch() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], r = [], n = 0, a = t.length, o = as(e), i = as(t);
  o.forEach(function(c) {
    for (var d = !1, f = n; f < a; f += 1) {
      var v = i[f];
      if (v.key === c.key) {
        n < f && (r = r.concat(i.slice(n, f).map(function(m) {
          return D(D({}, m), {}, {
            status: ts
          });
        })), n = f), r.push(D(D({}, v), {}, {
          status: rs
        })), n += 1, d = !0;
        break;
      }
    }
    d || r.push(D(D({}, c), {}, {
      status: ns
    }));
  }), n < a && (r = r.concat(i.slice(n).map(function(c) {
    return D(D({}, c), {}, {
      status: ts
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
      return f !== c || v !== ns;
    }), r.forEach(function(d) {
      d.key === c && (d.status = rs);
    });
  }), r;
}
var uh = ["component", "children", "onVisibleChanged", "onAllRemoved"], dh = ["status"], fh = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearPrepare", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
function vh(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : fn, r = /* @__PURE__ */ function(n) {
    Qr(o, n);
    var a = Jr(o);
    function o() {
      var i;
      Lt(this, o);
      for (var s = arguments.length, l = new Array(s), c = 0; c < s; c++)
        l[c] = arguments[c];
      return i = a.call.apply(a, [this].concat(l)), j(Ue(i), "state", {
        keyEntities: []
      }), j(Ue(i), "removeKey", function(d) {
        var f = i.state.keyEntities, v = f.map(function(m) {
          return m.key !== d ? m : D(D({}, m), {}, {
            status: fi
          });
        });
        return i.setState({
          keyEntities: v
        }), v.filter(function(m) {
          var b = m.status;
          return b !== fi;
        }).length;
      }), i;
    }
    return Dt(o, [{
      key: "render",
      value: function() {
        var s = this, l = this.state.keyEntities, c = this.props, d = c.component, f = c.children, v = c.onVisibleChanged, m = c.onAllRemoved, b = Ye(c, uh), p = d || u.Fragment, g = {};
        return fh.forEach(function(S) {
          g[S] = b[S], delete b[S];
        }), delete b.keys, /* @__PURE__ */ u.createElement(p, b, l.map(function(S, h) {
          var y = S.status, E = Ye(S, dh), C = y === ts || y === rs;
          return /* @__PURE__ */ u.createElement(t, _e({}, g, {
            key: E.key,
            visible: C,
            eventProps: E,
            onVisibleChanged: function(R) {
              if (v == null || v(R, {
                key: E.key
              }), !R) {
                var w = s.removeKey(E.key);
                w === 0 && m && m();
              }
            }
          }), function(O, R) {
            return f(D(D({}, O), {}, {
              index: h
            }), R);
          });
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function(s, l) {
        var c = s.keys, d = l.keyEntities, f = as(c), v = ch(d, f);
        return {
          keyEntities: v.filter(function(m) {
            var b = d.find(function(p) {
              var g = p.key;
              return m.key === g;
            });
            return !(b && b.status === fi && m.status === ns);
          })
        };
      }
    }]), o;
  }(u.Component);
  return j(r, "defaultProps", {
    component: "div"
  }), r;
}
vh(Id);
function gh(e) {
  const {
    children: t
  } = e, [, r] = Rr(), {
    motion: n
  } = r, a = u.useRef(!1);
  return a.current = a.current || n === !1, a.current ? /* @__PURE__ */ u.createElement(qp, {
    motion: n
  }, t) : t;
}
const Fd = /* @__PURE__ */ u.memo((e) => {
  let {
    dropdownMatchSelectWidth: t
  } = e;
  return Ft("ConfigProvider").deprecated(t === void 0, "dropdownMatchSelectWidth", "popupMatchSelectWidth"), null;
});
process.env.NODE_ENV !== "production" && (Fd.displayName = "PropWarning");
const mh = process.env.NODE_ENV !== "production" ? Fd : () => null;
var ph = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
    t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
let os = !1;
process.env.NODE_ENV;
const hh = ["getTargetContainer", "getPopupContainer", "renderEmpty", "input", "pagination", "form", "select", "button"], Ld = "ant";
let Dd;
function bh() {
  return Dd || Ld;
}
function yh(e) {
  return Object.keys(e).some((t) => t.endsWith("Color"));
}
const Sh = (e) => {
  const {
    prefixCls: t,
    iconPrefixCls: r,
    theme: n,
    holderRender: a
  } = e;
  t !== void 0 && (Dd = t), n && yh(n) && (process.env.NODE_ENV !== "production" && zo(!1, "ConfigProvider", "`config` of css variable theme is not work in v5. Please use new `theme` config instead."), xp(bh(), n));
}, Ch = (e) => {
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
    popupOverflow: b,
    legacyLocale: p,
    parentContext: g,
    iconPrefixCls: S,
    theme: h,
    componentDisabled: y,
    segmented: E,
    statistic: C,
    spin: O,
    calendar: R,
    carousel: w,
    cascader: $,
    collapse: A,
    typography: F,
    checkbox: M,
    descriptions: I,
    divider: T,
    drawer: k,
    skeleton: N,
    steps: x,
    image: _,
    layout: z,
    list: L,
    mentions: B,
    modal: X,
    progress: W,
    result: G,
    slider: Q,
    breadcrumb: Y,
    menu: J,
    pagination: ne,
    input: se,
    textArea: xe,
    empty: de,
    badge: ue,
    radio: Ce,
    rate: V,
    switch: le,
    transfer: fe,
    avatar: Re,
    message: me,
    tag: ae,
    table: te,
    card: re,
    tabs: be,
    timeline: ye,
    timePicker: ge,
    upload: Pe,
    notification: ve,
    tree: vt,
    colorPicker: it,
    datePicker: $e,
    rangePicker: we,
    flex: je,
    wave: ze,
    dropdown: gt,
    warning: mt,
    tour: wt,
    floatButtonGroup: et,
    variant: Le,
    inputNumber: ie,
    treeSelect: Ee
  } = e, qe = u.useCallback((We, Ke) => {
    const {
      prefixCls: rt
    } = e;
    if (Ke)
      return Ke;
    const ht = rt || g.getPrefixCls("");
    return We ? `${ht}-${We}` : ht;
  }, [g.getPrefixCls, e.prefixCls]), Qe = S || g.iconPrefixCls || pd, St = r || g.csp;
  xd(Qe, St);
  const ot = Up(h, g.theme, {
    prefixCls: qe("")
  });
  process.env.NODE_ENV !== "production" && (os = os || !!ot);
  const He = {
    csp: St,
    autoInsertSpaceInButton: n,
    alert: a,
    anchor: o,
    locale: s || p,
    direction: c,
    space: d,
    virtual: f,
    popupMatchSelectWidth: m ?? v,
    popupOverflow: b,
    getPrefixCls: qe,
    iconPrefixCls: Qe,
    theme: ot,
    segmented: E,
    statistic: C,
    spin: O,
    calendar: R,
    carousel: w,
    cascader: $,
    collapse: A,
    typography: F,
    checkbox: M,
    descriptions: I,
    divider: T,
    drawer: k,
    skeleton: N,
    steps: x,
    image: _,
    input: se,
    textArea: xe,
    layout: z,
    list: L,
    mentions: B,
    modal: X,
    progress: W,
    result: G,
    slider: Q,
    breadcrumb: Y,
    menu: J,
    pagination: ne,
    empty: de,
    badge: ue,
    radio: Ce,
    rate: V,
    switch: le,
    transfer: fe,
    avatar: Re,
    message: me,
    tag: ae,
    table: te,
    card: re,
    tabs: be,
    timeline: ye,
    timePicker: ge,
    upload: Pe,
    notification: ve,
    tree: vt,
    colorPicker: it,
    datePicker: $e,
    rangePicker: we,
    flex: je,
    wave: ze,
    dropdown: gt,
    warning: mt,
    tour: wt,
    floatButtonGroup: et,
    variant: Le,
    inputNumber: ie,
    treeSelect: Ee
  };
  process.env.NODE_ENV !== "production" && Ft("ConfigProvider")(!("autoInsertSpaceInButton" in e), "deprecated", "`autoInsertSpaceInButton` is deprecated. Please use `{ button: { autoInsertSpace: boolean }}` instead.");
  const ke = Object.assign({}, g);
  Object.keys(He).forEach((We) => {
    He[We] !== void 0 && (ke[We] = He[We]);
  }), hh.forEach((We) => {
    const Ke = e[We];
    Ke && (ke[We] = Ke);
  }), typeof n < "u" && (ke.button = Object.assign({
    autoInsertSpace: n
  }, ke.button));
  const De = Io(() => ke, ke, (We, Ke) => {
    const rt = Object.keys(We), ht = Object.keys(Ke);
    return rt.length !== ht.length || rt.some((_t) => We[_t] !== Ke[_t]);
  }), Te = u.useMemo(() => ({
    prefixCls: Qe,
    csp: St
  }), [Qe, St]);
  let pe = /* @__PURE__ */ u.createElement(u.Fragment, null, /* @__PURE__ */ u.createElement(mh, {
    dropdownMatchSelectWidth: v
  }), t);
  const Ge = u.useMemo(() => {
    var We, Ke, rt, ht;
    return Pn(((We = Ln.Form) === null || We === void 0 ? void 0 : We.defaultValidateMessages) || {}, ((rt = (Ke = De.locale) === null || Ke === void 0 ? void 0 : Ke.Form) === null || rt === void 0 ? void 0 : rt.defaultValidateMessages) || {}, ((ht = De.form) === null || ht === void 0 ? void 0 : ht.validateMessages) || {}, (i == null ? void 0 : i.validateMessages) || {});
  }, [De, i == null ? void 0 : i.validateMessages]);
  Object.keys(Ge).length > 0 && (pe = /* @__PURE__ */ u.createElement(km.Provider, {
    value: Ge
  }, pe)), s && (pe = /* @__PURE__ */ u.createElement(cd, {
    locale: s,
    _ANT_MARK__: ld
  }, pe)), (Qe || St) && (pe = /* @__PURE__ */ u.createElement(Vs.Provider, {
    value: Te
  }, pe)), l && (pe = /* @__PURE__ */ u.createElement($p, {
    size: l
  }, pe)), pe = /* @__PURE__ */ u.createElement(gh, null, pe);
  const pt = u.useMemo(() => {
    const We = ot || {}, {
      algorithm: Ke,
      token: rt,
      components: ht,
      cssVar: _t
    } = We, zt = ph(We, ["algorithm", "token", "components", "cssVar"]), Wt = Ke && (!Array.isArray(Ke) || Ke.length > 0) ? Vi(Ke) : gd, P = {};
    Object.entries(ht || {}).forEach((U) => {
      let [oe, Ne] = U;
      const Oe = Object.assign({}, Ne);
      "algorithm" in Oe && (Oe.algorithm === !0 ? Oe.theme = Wt : (Array.isArray(Oe.algorithm) || typeof Oe.algorithm == "function") && (Oe.theme = Vi(Oe.algorithm)), delete Oe.algorithm), P[oe] = Oe;
    });
    const H = Object.assign(Object.assign({}, $a), rt);
    return Object.assign(Object.assign({}, zt), {
      theme: Wt,
      token: H,
      components: P,
      override: Object.assign({
        override: H
      }, P),
      cssVar: _t
    });
  }, [ot]);
  return h && (pe = /* @__PURE__ */ u.createElement(md.Provider, {
    value: pt
  }, pe)), De.warning && (pe = /* @__PURE__ */ u.createElement(id.Provider, {
    value: De.warning
  }, pe)), y !== void 0 && (pe = /* @__PURE__ */ u.createElement(wp, {
    disabled: y
  }, pe)), /* @__PURE__ */ u.createElement(ft.Provider, {
    value: De
  }, pe);
}, Kn = (e) => {
  const t = u.useContext(ft), r = u.useContext(ks);
  return /* @__PURE__ */ u.createElement(Ch, Object.assign({
    parentContext: t,
    legacyLocale: r
  }, e));
};
Kn.ConfigContext = ft;
Kn.SizeContext = zn;
Kn.config = Sh;
Kn.useConfig = Op;
Object.defineProperty(Kn, "SizeContext", {
  get: () => (process.env.NODE_ENV !== "production" && zo(!1, "ConfigProvider", "ConfigProvider.SizeContext is deprecated. Please use `ConfigProvider.useConfig().componentSize` instead."), zn)
});
process.env.NODE_ENV !== "production" && (Kn.displayName = "ConfigProvider");
function zd(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
}
function Eh(e) {
  return zd(e) instanceof ShadowRoot;
}
function wo(e) {
  return Eh(e) ? zd(e) : null;
}
function xh(e) {
  return e.replace(/-(.)/g, function(t, r) {
    return r.toUpperCase();
  });
}
function wh(e, t) {
  tt(e, "[@ant-design/icons] ".concat(t));
}
function ac(e) {
  return Ae(e) === "object" && typeof e.name == "string" && typeof e.theme == "string" && (Ae(e.icon) === "object" || typeof e.icon == "function");
}
function oc() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.keys(e).reduce(function(t, r) {
    var n = e[r];
    switch (r) {
      case "class":
        t.className = n, delete t.class;
        break;
      default:
        delete t[r], t[xh(r)] = n;
    }
    return t;
  }, {});
}
function is(e, t, r) {
  return r ? /* @__PURE__ */ q.createElement(e.tag, D(D({
    key: t
  }, oc(e.attrs)), r), (e.children || []).map(function(n, a) {
    return is(n, "".concat(t, "-").concat(e.tag, "-").concat(a));
  })) : /* @__PURE__ */ q.createElement(e.tag, D({
    key: t
  }, oc(e.attrs)), (e.children || []).map(function(n, a) {
    return is(n, "".concat(t, "-").concat(e.tag, "-").concat(a));
  }));
}
function Vd(e) {
  return wa(e)[0];
}
function Bd(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
var $h = `
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
`, Oh = function(t) {
  var r = Ht(Vs), n = r.csp, a = r.prefixCls, o = $h;
  a && (o = o.replace(/anticon/g, a)), yt(function() {
    var i = t.current, s = wo(i);
    Lr(o, "@ant-design-icons", {
      prepend: !0,
      csp: n,
      attachTo: s
    });
  }, []);
}, Rh = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"], va = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function Ph(e) {
  var t = e.primaryColor, r = e.secondaryColor;
  va.primaryColor = t, va.secondaryColor = r || Vd(t), va.calculated = !!r;
}
function _h() {
  return D({}, va);
}
var Un = function(t) {
  var r = t.icon, n = t.className, a = t.onClick, o = t.style, i = t.primaryColor, s = t.secondaryColor, l = Ye(t, Rh), c = u.useRef(), d = va;
  if (i && (d = {
    primaryColor: i,
    secondaryColor: s || Vd(i)
  }), Oh(c), wh(ac(r), "icon should be icon definiton, but got ".concat(r)), !ac(r))
    return null;
  var f = r;
  return f && typeof f.icon == "function" && (f = D(D({}, f), {}, {
    icon: f.icon(d.primaryColor, d.secondaryColor)
  })), is(f.icon, "svg-".concat(f.name), D(D({
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
Un.displayName = "IconReact";
Un.getTwoToneColors = _h;
Un.setTwoToneColors = Ph;
function kd(e) {
  var t = Bd(e), r = K(t, 2), n = r[0], a = r[1];
  return Un.setTwoToneColors({
    primaryColor: n,
    secondaryColor: a
  });
}
function Th() {
  var e = Un.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var Nh = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
kd(Qi.primary);
var nr = /* @__PURE__ */ u.forwardRef(function(e, t) {
  var r = e.className, n = e.icon, a = e.spin, o = e.rotate, i = e.tabIndex, s = e.onClick, l = e.twoToneColor, c = Ye(e, Nh), d = u.useContext(Vs), f = d.prefixCls, v = f === void 0 ? "anticon" : f, m = d.rootClassName, b = Z(m, v, j(j({}, "".concat(v, "-").concat(n.name), !!n.name), "".concat(v, "-spin"), !!a || n.name === "loading"), r), p = i;
  p === void 0 && s && (p = -1);
  var g = o ? {
    msTransform: "rotate(".concat(o, "deg)"),
    transform: "rotate(".concat(o, "deg)")
  } : void 0, S = Bd(l), h = K(S, 2), y = h[0], E = h[1];
  return /* @__PURE__ */ u.createElement("span", _e({
    role: "img",
    "aria-label": n.name
  }, c, {
    ref: t,
    tabIndex: p,
    onClick: s,
    className: b
  }), /* @__PURE__ */ u.createElement(Un, {
    icon: n,
    primaryColor: y,
    secondaryColor: E,
    style: g
  }));
});
nr.displayName = "AntdIcon";
nr.getTwoToneColor = Th;
nr.setTwoToneColor = kd;
var Ih = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z" } }] }, name: "close-circle", theme: "filled" }, Mh = function(t, r) {
  return /* @__PURE__ */ u.createElement(nr, _e({}, t, {
    ref: r,
    icon: Ih
  }));
}, Hd = /* @__PURE__ */ u.forwardRef(Mh);
process.env.NODE_ENV !== "production" && (Hd.displayName = "CloseCircleFilled");
var Ah = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z" } }] }, name: "close", theme: "outlined" }, jh = function(t, r) {
  return /* @__PURE__ */ u.createElement(nr, _e({}, t, {
    ref: r,
    icon: Ah
  }));
}, Wd = /* @__PURE__ */ u.forwardRef(jh);
process.env.NODE_ENV !== "production" && (Wd.displayName = "CloseOutlined");
function Kd(e) {
  return e && /* @__PURE__ */ q.isValidElement(e) && e.type === q.Fragment;
}
const Fh = (e, t, r) => /* @__PURE__ */ q.isValidElement(e) ? /* @__PURE__ */ q.cloneElement(e, typeof r == "function" ? r(e.props || {}) : r) : t;
function Vo(e, t) {
  return Fh(e, e, t);
}
const Gs = (e) => {
  const [, , , , t] = Rr();
  return t ? `${e}-css-var` : "";
};
var ce = {
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
    r >= ce.F1 && r <= ce.F12)
      return !1;
    switch (r) {
      case ce.ALT:
      case ce.CAPS_LOCK:
      case ce.CONTEXT_MENU:
      case ce.CTRL:
      case ce.DOWN:
      case ce.END:
      case ce.ESC:
      case ce.HOME:
      case ce.INSERT:
      case ce.LEFT:
      case ce.MAC_FF_META:
      case ce.META:
      case ce.NUMLOCK:
      case ce.NUM_CENTER:
      case ce.PAGE_DOWN:
      case ce.PAGE_UP:
      case ce.PAUSE:
      case ce.PRINT_SCREEN:
      case ce.RIGHT:
      case ce.SHIFT:
      case ce.UP:
      case ce.WIN_KEY:
      case ce.WIN_KEY_RIGHT:
        return !1;
      default:
        return !0;
    }
  },
  /**
   * whether character is entered.
   */
  isCharacterKey: function(t) {
    if (t >= ce.ZERO && t <= ce.NINE || t >= ce.NUM_ZERO && t <= ce.NUM_MULTIPLY || t >= ce.A && t <= ce.Z || window.navigator.userAgent.indexOf("WebKit") !== -1 && t === 0)
      return !0;
    switch (t) {
      case ce.SPACE:
      case ce.QUESTION_MARK:
      case ce.NUM_PLUS:
      case ce.NUM_MINUS:
      case ce.NUM_PERIOD:
      case ce.NUM_DIVISION:
      case ce.SEMICOLON:
      case ce.DASH:
      case ce.EQUALS:
      case ce.COMMA:
      case ce.PERIOD:
      case ce.SLASH:
      case ce.APOSTROPHE:
      case ce.SINGLE_QUOTE:
      case ce.OPEN_SQUARE_BRACKET:
      case ce.BACKSLASH:
      case ce.CLOSE_SQUARE_BRACKET:
        return !0;
      default:
        return !1;
    }
  }
}, Lh = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, name: "loading", theme: "outlined" }, Dh = function(t, r) {
  return /* @__PURE__ */ u.createElement(nr, _e({}, t, {
    ref: r,
    icon: Lh
  }));
}, qs = /* @__PURE__ */ u.forwardRef(Dh);
process.env.NODE_ENV !== "production" && (qs.displayName = "LoadingOutlined");
const Xs = /* @__PURE__ */ q.createContext(void 0);
process.env.NODE_ENV !== "production" && (Xs.displayName = "zIndexContext");
const an = 100, zh = 10, Vh = an * zh, Ud = {
  Modal: an,
  Drawer: an,
  Popover: an,
  Popconfirm: an,
  Tooltip: an,
  Tour: an
}, Bh = {
  SelectLike: 50,
  Dropdown: 50,
  DatePicker: 50,
  Menu: 50,
  ImagePreview: 1
};
function kh(e) {
  return e in Ud;
}
function Hh(e, t) {
  const [, r] = Rr(), n = q.useContext(Xs), a = kh(e);
  if (t !== void 0)
    return [t, t];
  let o = n ?? 0;
  return a ? (o += // Use preset token zIndex by default but not stack when has parent container
  (n ? 0 : r.zIndexPopupBase) + // Container offset
  Ud[e], o = Math.min(o, r.zIndexPopupBase + Vh)) : o += Bh[e], [n === void 0 ? t : o, o];
}
function Yt() {
  Yt = function() {
    return t;
  };
  var e, t = {}, r = Object.prototype, n = r.hasOwnProperty, a = Object.defineProperty || function(N, x, _) {
    N[x] = _.value;
  }, o = typeof Symbol == "function" ? Symbol : {}, i = o.iterator || "@@iterator", s = o.asyncIterator || "@@asyncIterator", l = o.toStringTag || "@@toStringTag";
  function c(N, x, _) {
    return Object.defineProperty(N, x, {
      value: _,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), N[x];
  }
  try {
    c({}, "");
  } catch {
    c = function(_, z, L) {
      return _[z] = L;
    };
  }
  function d(N, x, _, z) {
    var L = x && x.prototype instanceof S ? x : S, B = Object.create(L.prototype), X = new T(z || []);
    return a(B, "_invoke", {
      value: A(N, _, X)
    }), B;
  }
  function f(N, x, _) {
    try {
      return {
        type: "normal",
        arg: N.call(x, _)
      };
    } catch (z) {
      return {
        type: "throw",
        arg: z
      };
    }
  }
  t.wrap = d;
  var v = "suspendedStart", m = "suspendedYield", b = "executing", p = "completed", g = {};
  function S() {
  }
  function h() {
  }
  function y() {
  }
  var E = {};
  c(E, i, function() {
    return this;
  });
  var C = Object.getPrototypeOf, O = C && C(C(k([])));
  O && O !== r && n.call(O, i) && (E = O);
  var R = y.prototype = S.prototype = Object.create(E);
  function w(N) {
    ["next", "throw", "return"].forEach(function(x) {
      c(N, x, function(_) {
        return this._invoke(x, _);
      });
    });
  }
  function $(N, x) {
    function _(L, B, X, W) {
      var G = f(N[L], N, B);
      if (G.type !== "throw") {
        var Q = G.arg, Y = Q.value;
        return Y && Ae(Y) == "object" && n.call(Y, "__await") ? x.resolve(Y.__await).then(function(J) {
          _("next", J, X, W);
        }, function(J) {
          _("throw", J, X, W);
        }) : x.resolve(Y).then(function(J) {
          Q.value = J, X(Q);
        }, function(J) {
          return _("throw", J, X, W);
        });
      }
      W(G.arg);
    }
    var z;
    a(this, "_invoke", {
      value: function(B, X) {
        function W() {
          return new x(function(G, Q) {
            _(B, X, G, Q);
          });
        }
        return z = z ? z.then(W, W) : W();
      }
    });
  }
  function A(N, x, _) {
    var z = v;
    return function(L, B) {
      if (z === b) throw Error("Generator is already running");
      if (z === p) {
        if (L === "throw") throw B;
        return {
          value: e,
          done: !0
        };
      }
      for (_.method = L, _.arg = B; ; ) {
        var X = _.delegate;
        if (X) {
          var W = F(X, _);
          if (W) {
            if (W === g) continue;
            return W;
          }
        }
        if (_.method === "next") _.sent = _._sent = _.arg;
        else if (_.method === "throw") {
          if (z === v) throw z = p, _.arg;
          _.dispatchException(_.arg);
        } else _.method === "return" && _.abrupt("return", _.arg);
        z = b;
        var G = f(N, x, _);
        if (G.type === "normal") {
          if (z = _.done ? p : m, G.arg === g) continue;
          return {
            value: G.arg,
            done: _.done
          };
        }
        G.type === "throw" && (z = p, _.method = "throw", _.arg = G.arg);
      }
    };
  }
  function F(N, x) {
    var _ = x.method, z = N.iterator[_];
    if (z === e) return x.delegate = null, _ === "throw" && N.iterator.return && (x.method = "return", x.arg = e, F(N, x), x.method === "throw") || _ !== "return" && (x.method = "throw", x.arg = new TypeError("The iterator does not provide a '" + _ + "' method")), g;
    var L = f(z, N.iterator, x.arg);
    if (L.type === "throw") return x.method = "throw", x.arg = L.arg, x.delegate = null, g;
    var B = L.arg;
    return B ? B.done ? (x[N.resultName] = B.value, x.next = N.nextLoc, x.method !== "return" && (x.method = "next", x.arg = e), x.delegate = null, g) : B : (x.method = "throw", x.arg = new TypeError("iterator result is not an object"), x.delegate = null, g);
  }
  function M(N) {
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
    }], N.forEach(M, this), this.reset(!0);
  }
  function k(N) {
    if (N || N === "") {
      var x = N[i];
      if (x) return x.call(N);
      if (typeof N.next == "function") return N;
      if (!isNaN(N.length)) {
        var _ = -1, z = function L() {
          for (; ++_ < N.length; ) if (n.call(N, _)) return L.value = N[_], L.done = !1, L;
          return L.value = e, L.done = !0, L;
        };
        return z.next = z;
      }
    }
    throw new TypeError(Ae(N) + " is not iterable");
  }
  return h.prototype = y, a(R, "constructor", {
    value: y,
    configurable: !0
  }), a(y, "constructor", {
    value: h,
    configurable: !0
  }), h.displayName = c(y, l, "GeneratorFunction"), t.isGeneratorFunction = function(N) {
    var x = typeof N == "function" && N.constructor;
    return !!x && (x === h || (x.displayName || x.name) === "GeneratorFunction");
  }, t.mark = function(N) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(N, y) : (N.__proto__ = y, c(N, l, "GeneratorFunction")), N.prototype = Object.create(R), N;
  }, t.awrap = function(N) {
    return {
      __await: N
    };
  }, w($.prototype), c($.prototype, s, function() {
    return this;
  }), t.AsyncIterator = $, t.async = function(N, x, _, z, L) {
    L === void 0 && (L = Promise);
    var B = new $(d(N, x, _, z), L);
    return t.isGeneratorFunction(x) ? B : B.next().then(function(X) {
      return X.done ? X.value : B.next();
    });
  }, w(R), c(R, l, "Generator"), c(R, i, function() {
    return this;
  }), c(R, "toString", function() {
    return "[object Generator]";
  }), t.keys = function(N) {
    var x = Object(N), _ = [];
    for (var z in x) _.push(z);
    return _.reverse(), function L() {
      for (; _.length; ) {
        var B = _.pop();
        if (B in x) return L.value = B, L.done = !1, L;
      }
      return L.done = !0, L;
    };
  }, t.values = k, T.prototype = {
    constructor: T,
    reset: function(x) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(I), !x) for (var _ in this) _.charAt(0) === "t" && n.call(this, _) && !isNaN(+_.slice(1)) && (this[_] = e);
    },
    stop: function() {
      this.done = !0;
      var x = this.tryEntries[0].completion;
      if (x.type === "throw") throw x.arg;
      return this.rval;
    },
    dispatchException: function(x) {
      if (this.done) throw x;
      var _ = this;
      function z(Q, Y) {
        return X.type = "throw", X.arg = x, _.next = Q, Y && (_.method = "next", _.arg = e), !!Y;
      }
      for (var L = this.tryEntries.length - 1; L >= 0; --L) {
        var B = this.tryEntries[L], X = B.completion;
        if (B.tryLoc === "root") return z("end");
        if (B.tryLoc <= this.prev) {
          var W = n.call(B, "catchLoc"), G = n.call(B, "finallyLoc");
          if (W && G) {
            if (this.prev < B.catchLoc) return z(B.catchLoc, !0);
            if (this.prev < B.finallyLoc) return z(B.finallyLoc);
          } else if (W) {
            if (this.prev < B.catchLoc) return z(B.catchLoc, !0);
          } else {
            if (!G) throw Error("try statement without catch or finally");
            if (this.prev < B.finallyLoc) return z(B.finallyLoc);
          }
        }
      }
    },
    abrupt: function(x, _) {
      for (var z = this.tryEntries.length - 1; z >= 0; --z) {
        var L = this.tryEntries[z];
        if (L.tryLoc <= this.prev && n.call(L, "finallyLoc") && this.prev < L.finallyLoc) {
          var B = L;
          break;
        }
      }
      B && (x === "break" || x === "continue") && B.tryLoc <= _ && _ <= B.finallyLoc && (B = null);
      var X = B ? B.completion : {};
      return X.type = x, X.arg = _, B ? (this.method = "next", this.next = B.finallyLoc, g) : this.complete(X);
    },
    complete: function(x, _) {
      if (x.type === "throw") throw x.arg;
      return x.type === "break" || x.type === "continue" ? this.next = x.arg : x.type === "return" ? (this.rval = this.arg = x.arg, this.method = "return", this.next = "end") : x.type === "normal" && _ && (this.next = _), g;
    },
    finish: function(x) {
      for (var _ = this.tryEntries.length - 1; _ >= 0; --_) {
        var z = this.tryEntries[_];
        if (z.finallyLoc === x) return this.complete(z.completion, z.afterLoc), I(z), g;
      }
    },
    catch: function(x) {
      for (var _ = this.tryEntries.length - 1; _ >= 0; --_) {
        var z = this.tryEntries[_];
        if (z.tryLoc === x) {
          var L = z.completion;
          if (L.type === "throw") {
            var B = L.arg;
            I(z);
          }
          return B;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function(x, _, z) {
      return this.delegate = {
        iterator: k(x),
        resultName: _,
        nextLoc: z
      }, this.method === "next" && (this.arg = e), g;
    }
  }, t;
}
function ic(e, t, r, n, a, o, i) {
  try {
    var s = e[o](i), l = s.value;
  } catch (c) {
    return void r(c);
  }
  s.done ? t(l) : Promise.resolve(l).then(n, a);
}
function vn(e) {
  return function() {
    var t = this, r = arguments;
    return new Promise(function(n, a) {
      var o = e.apply(t, r);
      function i(l) {
        ic(o, n, a, i, s, "next", l);
      }
      function s(l) {
        ic(o, n, a, i, s, "throw", l);
      }
      i(void 0);
    });
  };
}
var Ma = D({}, $v), Wh = Ma.version, Kh = Ma.render, Uh = Ma.unmountComponentAtNode, Bo;
try {
  var Gh = Number((Wh || "").split(".")[0]);
  Gh >= 18 && (Bo = Ma.createRoot);
} catch {
}
function sc(e) {
  var t = Ma.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  t && Ae(t) === "object" && (t.usingClientEntryPoint = e);
}
var $o = "__rc_react_root__";
function qh(e, t) {
  sc(!0);
  var r = t[$o] || Bo(t);
  sc(!1), r.render(e), t[$o] = r;
}
function Xh(e, t) {
  Kh(e, t);
}
function Yh(e, t) {
  if (Bo) {
    qh(e, t);
    return;
  }
  Xh(e, t);
}
function Zh(e) {
  return ss.apply(this, arguments);
}
function ss() {
  return ss = vn(/* @__PURE__ */ Yt().mark(function e(t) {
    return Yt().wrap(function(n) {
      for (; ; ) switch (n.prev = n.next) {
        case 0:
          return n.abrupt("return", Promise.resolve().then(function() {
            var a;
            (a = t[$o]) === null || a === void 0 || a.unmount(), delete t[$o];
          }));
        case 1:
        case "end":
          return n.stop();
      }
    }, e);
  })), ss.apply(this, arguments);
}
function Qh(e) {
  Uh(e);
}
function Jh(e) {
  return ls.apply(this, arguments);
}
function ls() {
  return ls = vn(/* @__PURE__ */ Yt().mark(function e(t) {
    return Yt().wrap(function(n) {
      for (; ; ) switch (n.prev = n.next) {
        case 0:
          if (Bo === void 0) {
            n.next = 2;
            break;
          }
          return n.abrupt("return", Zh(t));
        case 2:
          Qh(t);
        case 3:
        case "end":
          return n.stop();
      }
    }, e);
  })), ls.apply(this, arguments);
}
const Gd = (e, t, r) => r !== void 0 ? r : `${e}-${t}`, Ys = function(e) {
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
}, e0 = (e) => {
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
}, t0 = Ks("Wave", (e) => [e0(e)]), qd = `${Ld}-wave-target`;
function r0(e) {
  const t = (e || "").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);
  return t && t[1] && t[2] && t[3] ? !(t[1] === t[2] && t[2] === t[3]) : !0;
}
function vi(e) {
  return e && e !== "#fff" && e !== "#ffffff" && e !== "rgb(255, 255, 255)" && e !== "rgba(255, 255, 255, 1)" && r0(e) && !/rgba\((?:\d*, ){3}0\)/.test(e) && // any transparent rgba color
  e !== "transparent";
}
function n0(e) {
  const {
    borderTopColor: t,
    borderColor: r,
    backgroundColor: n
  } = getComputedStyle(e);
  return vi(t) ? t : vi(r) ? r : vi(n) ? n : null;
}
function gi(e) {
  return Number.isNaN(e) ? 0 : e;
}
const a0 = (e) => {
  const {
    className: t,
    target: r,
    component: n
  } = e, a = u.useRef(null), [o, i] = u.useState(null), [s, l] = u.useState([]), [c, d] = u.useState(0), [f, v] = u.useState(0), [m, b] = u.useState(0), [p, g] = u.useState(0), [S, h] = u.useState(!1), y = {
    left: c,
    top: f,
    width: m,
    height: p,
    borderRadius: s.map((O) => `${O}px`).join(" ")
  };
  o && (y["--wave-color"] = o);
  function E() {
    const O = getComputedStyle(r);
    i(n0(r));
    const R = O.position === "static", {
      borderLeftWidth: w,
      borderTopWidth: $
    } = O;
    d(R ? r.offsetLeft : gi(-parseFloat(w))), v(R ? r.offsetTop : gi(-parseFloat($))), b(r.offsetWidth), g(r.offsetHeight);
    const {
      borderTopLeftRadius: A,
      borderTopRightRadius: F,
      borderBottomLeftRadius: M,
      borderBottomRightRadius: I
    } = O;
    l([A, F, I, M].map((T) => gi(parseFloat(T))));
  }
  if (u.useEffect(() => {
    if (r) {
      const O = Nt(() => {
        E(), h(!0);
      });
      let R;
      return typeof ResizeObserver < "u" && (R = new ResizeObserver(E), R.observe(r)), () => {
        Nt.cancel(O), R == null || R.disconnect();
      };
    }
  }, []), !S)
    return null;
  const C = (n === "Checkbox" || n === "Radio") && (r == null ? void 0 : r.classList.contains(qd));
  return /* @__PURE__ */ u.createElement(fn, {
    visible: !0,
    motionAppear: !0,
    motionName: "wave-motion",
    motionDeadline: 5e3,
    onAppearEnd: (O, R) => {
      var w;
      if (R.deadline || R.propertyName === "opacity") {
        const $ = (w = a.current) === null || w === void 0 ? void 0 : w.parentElement;
        Jh($).then(() => {
          $ == null || $.remove();
        });
      }
      return !1;
    }
  }, (O, R) => {
    let {
      className: w
    } = O;
    return /* @__PURE__ */ u.createElement("div", {
      ref: Pr(a, R),
      className: Z(t, w, {
        "wave-quick": C
      }),
      style: y
    });
  });
}, o0 = (e, t) => {
  var r;
  const {
    component: n
  } = t;
  if (n === "Checkbox" && !(!((r = e.querySelector("input")) === null || r === void 0) && r.checked))
    return;
  const a = document.createElement("div");
  a.style.position = "absolute", a.style.left = "0px", a.style.top = "0px", e == null || e.insertBefore(a, e == null ? void 0 : e.firstChild), Yh(/* @__PURE__ */ u.createElement(a0, Object.assign({}, t, {
    target: e
  })), a);
}, i0 = (e, t, r) => {
  const {
    wave: n
  } = u.useContext(ft), [, a, o] = Rr(), i = kt((c) => {
    const d = e.current;
    if (n != null && n.disabled || !d)
      return;
    const f = d.querySelector(`.${qd}`) || d, {
      showEffect: v
    } = n || {};
    (v || o0)(f, {
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
}, Xd = (e) => {
  const {
    children: t,
    disabled: r,
    component: n
  } = e, {
    getPrefixCls: a
  } = Ht(ft), o = Be(null), i = a("wave"), [, s] = t0(i), l = i0(o, Z(i, s), n);
  if (q.useEffect(() => {
    const d = o.current;
    if (!d || d.nodeType !== 1 || r)
      return;
    const f = (v) => {
      !Ys(v.target) || // No need wave
      !d.getAttribute || d.getAttribute("disabled") || d.disabled || d.className.includes("disabled") || d.className.includes("-leave") || l(v);
    };
    return d.addEventListener("click", f, !0), () => {
      d.removeEventListener("click", f, !0);
    };
  }, [r]), !/* @__PURE__ */ q.isValidElement(t))
    return t ?? null;
  const c = dn(t) ? Pr(t.ref, o) : o;
  return Vo(t, {
    ref: c
  });
};
process.env.NODE_ENV !== "production" && (Xd.displayName = "Wave");
const Aa = (e) => {
  const t = q.useContext(zn);
  return q.useMemo(() => e ? typeof e == "string" ? e ?? t : e instanceof Function ? e(t) : t : t, [e, t]);
}, Yd = /* @__PURE__ */ u.createContext(null), Zd = (e, t) => {
  const r = u.useContext(Yd), n = u.useMemo(() => {
    if (!r)
      return "";
    const {
      compactDirection: a,
      isFirstItem: o,
      isLastItem: i
    } = r, s = a === "vertical" ? "-vertical-" : "-";
    return Z(`${e}-compact${s}item`, {
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
}, s0 = (e) => {
  let {
    children: t
  } = e;
  return /* @__PURE__ */ u.createElement(Yd.Provider, {
    value: null
  }, t);
};
var l0 = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
    t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const Qd = /* @__PURE__ */ u.createContext(void 0), c0 = (e) => {
  const {
    getPrefixCls: t,
    direction: r
  } = u.useContext(ft), {
    prefixCls: n,
    size: a,
    className: o
  } = e, i = l0(e, ["prefixCls", "size", "className"]), s = t("btn-group", n), [, , l] = Rr();
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
  const d = Z(s, {
    [`${s}-${c}`]: c,
    [`${s}-rtl`]: r === "rtl"
  }, o, l);
  return /* @__PURE__ */ u.createElement(Qd.Provider, {
    value: a
  }, /* @__PURE__ */ u.createElement("div", Object.assign({}, i, {
    className: d
  })));
}, lc = /^[\u4e00-\u9fa5]{2}$/, cs = lc.test.bind(lc);
function cc(e) {
  return typeof e == "string";
}
function eo(e) {
  return e === "text" || e === "link";
}
function u0(e, t) {
  if (e == null)
    return;
  const r = t ? " " : "";
  return typeof e != "string" && typeof e != "number" && cc(e.type) && cs(e.props.children) ? Vo(e, {
    children: e.props.children.split("").join(r)
  }) : cc(e) ? cs(e) ? /* @__PURE__ */ q.createElement("span", null, e.split("").join(r)) : /* @__PURE__ */ q.createElement("span", null, e) : Kd(e) ? /* @__PURE__ */ q.createElement("span", null, e) : e;
}
function d0(e, t) {
  let r = !1;
  const n = [];
  return q.Children.forEach(e, (a) => {
    const o = typeof a, i = o === "string" || o === "number";
    if (r && i) {
      const s = n.length - 1, l = n[s];
      n[s] = `${l}${a}`;
    } else
      n.push(a);
    r = i;
  }), q.Children.map(n, (a) => u0(a, t));
}
const Jd = /* @__PURE__ */ Vr((e, t) => {
  const {
    className: r,
    style: n,
    children: a,
    prefixCls: o
  } = e, i = Z(`${o}-icon`, r);
  return /* @__PURE__ */ q.createElement("span", {
    ref: t,
    className: i,
    style: n
  }, a);
}), uc = /* @__PURE__ */ Vr((e, t) => {
  const {
    prefixCls: r,
    className: n,
    style: a,
    iconClassName: o
  } = e, i = Z(`${r}-loading-icon`, n);
  return /* @__PURE__ */ q.createElement(Jd, {
    prefixCls: r,
    className: i,
    style: a,
    ref: t
  }, /* @__PURE__ */ q.createElement(qs, {
    className: o
  }));
}), mi = () => ({
  width: 0,
  opacity: 0,
  transform: "scale(0)"
}), pi = (e) => ({
  width: e.scrollWidth,
  opacity: 1,
  transform: "scale(1)"
}), f0 = (e) => {
  const {
    prefixCls: t,
    loading: r,
    existIcon: n,
    className: a,
    style: o
  } = e, i = !!r;
  return n ? /* @__PURE__ */ q.createElement(uc, {
    prefixCls: t,
    className: a,
    style: o
  }) : /* @__PURE__ */ q.createElement(fn, {
    visible: i,
    // We do not really use this motionName
    motionName: `${t}-loading-icon-motion`,
    motionLeave: i,
    removeOnLeave: !0,
    onAppearStart: mi,
    onAppearActive: pi,
    onEnterStart: mi,
    onEnterActive: pi,
    onLeaveStart: pi,
    onLeaveActive: mi
  }, (s, l) => {
    let {
      className: c,
      style: d
    } = s;
    return /* @__PURE__ */ q.createElement(uc, {
      prefixCls: t,
      className: a,
      style: Object.assign(Object.assign({}, o), d),
      ref: l,
      iconClassName: c
    });
  });
}, dc = (e, t) => ({
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
}), v0 = (e) => {
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
      dc(`${t}-primary`, a),
      dc(`${t}-danger`, o)
    ]
  };
}, ef = (e) => {
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
}, tf = (e) => {
  var t, r, n, a, o, i;
  const s = (t = e.contentFontSize) !== null && t !== void 0 ? t : e.fontSize, l = (r = e.contentFontSizeSM) !== null && r !== void 0 ? r : e.fontSize, c = (n = e.contentFontSizeLG) !== null && n !== void 0 ? n : e.fontSizeLG, d = (a = e.contentLineHeight) !== null && a !== void 0 ? a : mo(s), f = (o = e.contentLineHeightSM) !== null && o !== void 0 ? o : mo(l), v = (i = e.contentLineHeightLG) !== null && i !== void 0 ? i : mo(c);
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
}, g0 = (e) => {
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
      "&:not(:disabled)": Object.assign({}, Ws(e)),
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
}), m0 = (e) => ({
  minWidth: e.controlHeight,
  paddingInlineStart: 0,
  paddingInlineEnd: 0,
  borderRadius: "50%"
}), p0 = (e) => ({
  borderRadius: e.controlHeight,
  paddingInlineStart: e.calc(e.controlHeight).div(2).equal(),
  paddingInlineEnd: e.calc(e.controlHeight).div(2).equal()
}), h0 = (e) => ({
  cursor: "not-allowed",
  borderColor: e.borderColorDisabled,
  color: e.colorTextDisabled,
  background: e.colorBgContainerDisabled,
  boxShadow: "none"
}), Ra = (e, t, r, n, a, o, i, s) => ({
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
}), Zs = (e) => ({
  [`&:disabled, &${e.componentCls}-disabled`]: Object.assign({}, h0(e))
}), rf = (e) => Object.assign({}, Zs(e)), Oo = (e) => ({
  [`&:disabled, &${e.componentCls}-disabled`]: {
    cursor: "not-allowed",
    color: e.colorTextDisabled
  }
}), nf = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, rf(e)), {
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
})), Ra(e.componentCls, e.ghostBg, e.defaultGhostColor, e.defaultGhostBorderColor, e.colorTextDisabled, e.colorBorder)), {
  [`&${e.componentCls}-dangerous`]: Object.assign(Object.assign(Object.assign({
    color: e.colorError,
    borderColor: e.colorError
  }, zr(e.componentCls, {
    color: e.colorErrorHover,
    borderColor: e.colorErrorBorderHover
  }, {
    color: e.colorErrorActive,
    borderColor: e.colorErrorActive
  })), Ra(e.componentCls, e.ghostBg, e.colorError, e.colorError, e.colorTextDisabled, e.colorBorder)), Zs(e))
}), b0 = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, rf(e)), {
  color: e.primaryColor,
  background: e.colorPrimary,
  boxShadow: e.primaryShadow
}), zr(e.componentCls, {
  color: e.colorTextLightSolid,
  background: e.colorPrimaryHover
}, {
  color: e.colorTextLightSolid,
  background: e.colorPrimaryActive
})), Ra(e.componentCls, e.ghostBg, e.colorPrimary, e.colorPrimary, e.colorTextDisabled, e.colorBorder, {
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
  })), Ra(e.componentCls, e.ghostBg, e.colorError, e.colorError, e.colorTextDisabled, e.colorBorder, {
    color: e.colorErrorHover,
    borderColor: e.colorErrorHover
  }, {
    color: e.colorErrorActive,
    borderColor: e.colorErrorActive
  })), Zs(e))
}), y0 = (e) => Object.assign(Object.assign({}, nf(e)), {
  borderStyle: "dashed"
}), S0 = (e) => Object.assign(Object.assign(Object.assign({
  color: e.colorLink
}, zr(e.componentCls, {
  color: e.colorLinkHover,
  background: e.linkHoverBg
}, {
  color: e.colorLinkActive
})), Oo(e)), {
  [`&${e.componentCls}-dangerous`]: Object.assign(Object.assign({
    color: e.colorError
  }, zr(e.componentCls, {
    color: e.colorErrorHover
  }, {
    color: e.colorErrorActive
  })), Oo(e))
}), C0 = (e) => Object.assign(Object.assign(Object.assign({}, zr(e.componentCls, {
  color: e.colorText,
  background: e.textHoverBg
}, {
  color: e.colorText,
  background: e.colorBgTextActive
})), Oo(e)), {
  [`&${e.componentCls}-dangerous`]: Object.assign(Object.assign({
    color: e.colorError
  }, Oo(e)), zr(e.componentCls, {
    color: e.colorErrorHover,
    background: e.colorErrorBg
  }, {
    color: e.colorErrorHover,
    background: e.colorErrorBgActive
  }))
}), E0 = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [`${t}-default`]: nf(e),
    [`${t}-primary`]: b0(e),
    [`${t}-dashed`]: y0(e),
    [`${t}-link`]: S0(e),
    [`${t}-text`]: C0(e),
    [`${t}-ghost`]: Ra(e.componentCls, e.ghostBg, e.colorBgContainer, e.colorBgContainer, e.colorTextDisabled, e.colorBorder)
  };
}, Qs = function(e) {
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
        padding: `${ee(c)} ${ee(s)}`,
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
      [`${r}${r}-circle${t}`]: m0(e)
    },
    {
      [`${r}${r}-round${t}`]: p0(e)
    }
  ];
}, x0 = (e) => {
  const t = Zt(e, {
    fontSize: e.contentFontSize,
    lineHeight: e.contentLineHeight
  });
  return Qs(t, e.componentCls);
}, w0 = (e) => {
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
  return Qs(t, `${e.componentCls}-sm`);
}, $0 = (e) => {
  const t = Zt(e, {
    controlHeight: e.controlHeightLG,
    fontSize: e.contentFontSizeLG,
    lineHeight: e.contentLineHeightLG,
    buttonPaddingHorizontal: e.paddingInlineLG,
    buttonPaddingVertical: e.paddingBlockLG,
    borderRadius: e.borderRadiusLG,
    buttonIconOnlyFontSize: e.onlyIconSizeLG
  });
  return Qs(t, `${e.componentCls}-lg`);
}, O0 = (e) => {
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
}, R0 = en("Button", (e) => {
  const t = ef(e);
  return [
    // Shared
    g0(t),
    // Size
    x0(t),
    w0(t),
    $0(t),
    // Block
    O0(t),
    // Group (type, ghost, danger, loading)
    E0(t),
    // Button Group
    v0(t)
  ];
}, tf, {
  unitless: {
    fontWeight: !0,
    contentLineHeight: !0,
    contentLineHeightSM: !0,
    contentLineHeightLG: !0
  }
});
function P0(e, t, r) {
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
function _0(e, t, r) {
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
function af(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    focus: !0
  };
  const {
    componentCls: r
  } = e, n = `${r}-compact`;
  return {
    [n]: Object.assign(Object.assign({}, P0(e, n, t)), _0(r, n, t))
  };
}
function T0(e, t) {
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
function N0(e, t) {
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
function I0(e) {
  const t = `${e.componentCls}-compact-vertical`;
  return {
    [t]: Object.assign(Object.assign({}, T0(e, t)), N0(e.componentCls, t))
  };
}
const M0 = (e) => {
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
              top: r(e.lineWidth).mul(-1).equal(),
              insetInlineStart: r(e.lineWidth).mul(-1).equal(),
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
}, A0 = Vp(["Button", "compact"], (e) => {
  const t = ef(e);
  return [
    // Space Compact
    af(t),
    I0(t),
    M0(t)
  ];
}, tf);
var j0 = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
    t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
function F0(e) {
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
const L0 = /* @__PURE__ */ q.forwardRef((e, t) => {
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
    rootClassName: b,
    children: p,
    icon: g,
    iconPosition: S = "start",
    ghost: h = !1,
    block: y = !1,
    // React does not recognize the `htmlType` prop on a DOM element. Here we pick it out of `rest`.
    htmlType: E = "button",
    classNames: C,
    style: O = {},
    autoInsertSpace: R
  } = e, w = j0(e, ["loading", "prefixCls", "type", "danger", "shape", "size", "styles", "disabled", "className", "rootClassName", "children", "icon", "iconPosition", "ghost", "block", "htmlType", "classNames", "style", "autoInsertSpace"]), $ = s || "default", {
    getPrefixCls: A,
    direction: F,
    button: M
  } = Ht(ft), I = (r = R ?? (M == null ? void 0 : M.autoInsertSpace)) !== null && r !== void 0 ? r : !0, T = A("btn", i), [k, N, x] = R0(T), _ = Ht(Dn), z = v ?? _, L = Ht(Qd), B = Yr(() => F0(o), [o]), [X, W] = bt(B.loading), [G, Q] = bt(!1), J = Pr(t, /* @__PURE__ */ xv()), ne = Ev.count(p) === 1 && !g && !eo($);
  yt(() => {
    let ge = null;
    B.delay > 0 ? ge = setTimeout(() => {
      ge = null, W(!0);
    }, B.delay) : W(B.loading);
    function Pe() {
      ge && (clearTimeout(ge), ge = null);
    }
    return Pe;
  }, [B]), yt(() => {
    if (!J || !J.current || !I)
      return;
    const ge = J.current.textContent;
    ne && cs(ge) ? G || Q(!0) : G && Q(!1);
  }, [J]);
  const se = (ge) => {
    const {
      onClick: Pe
    } = e;
    if (X || z) {
      ge.preventDefault();
      return;
    }
    Pe == null || Pe(ge);
  };
  if (process.env.NODE_ENV !== "production") {
    const ge = Ft("Button");
    process.env.NODE_ENV !== "production" && ge(!(typeof g == "string" && g.length > 2), "breaking", `\`icon\` is using ReactNode instead of string naming in v4. Please check \`${g}\` at https://ant.design/components/icon`), process.env.NODE_ENV !== "production" && ge(!(h && eo($)), "usage", "`link` or `text` button can't be a `ghost` button.");
  }
  const {
    compactSize: xe,
    compactItemClassnames: de
  } = Zd(T, F), ue = {
    large: "lg",
    small: "sm",
    middle: void 0
  }, Ce = Aa((ge) => {
    var Pe, ve;
    return (ve = (Pe = d ?? xe) !== null && Pe !== void 0 ? Pe : L) !== null && ve !== void 0 ? ve : ge;
  }), V = Ce && ue[Ce] || "", le = X ? "loading" : g, fe = Cr(w, ["navigate"]), Re = Z(T, N, x, {
    [`${T}-${c}`]: c !== "default" && c,
    [`${T}-${$}`]: $,
    [`${T}-${V}`]: V,
    [`${T}-icon-only`]: !p && p !== 0 && !!le,
    [`${T}-background-ghost`]: h && !eo($),
    [`${T}-loading`]: X,
    [`${T}-two-chinese-chars`]: G && I && !X,
    [`${T}-block`]: y,
    [`${T}-dangerous`]: l,
    [`${T}-rtl`]: F === "rtl",
    [`${T}-icon-end`]: S === "end"
  }, de, m, b, M == null ? void 0 : M.className), me = Object.assign(Object.assign({}, M == null ? void 0 : M.style), O), ae = Z(C == null ? void 0 : C.icon, (n = M == null ? void 0 : M.classNames) === null || n === void 0 ? void 0 : n.icon), te = Object.assign(Object.assign({}, (f == null ? void 0 : f.icon) || {}), ((a = M == null ? void 0 : M.styles) === null || a === void 0 ? void 0 : a.icon) || {}), re = g && !X ? /* @__PURE__ */ q.createElement(Jd, {
    prefixCls: T,
    className: ae,
    style: te
  }, g) : /* @__PURE__ */ q.createElement(f0, {
    existIcon: !!g,
    prefixCls: T,
    loading: X
  }), be = p || p === 0 ? d0(p, ne && I) : null;
  if (fe.href !== void 0)
    return k(/* @__PURE__ */ q.createElement("a", Object.assign({}, fe, {
      className: Z(Re, {
        [`${T}-disabled`]: z
      }),
      href: z ? void 0 : fe.href,
      style: me,
      onClick: se,
      ref: J,
      tabIndex: z ? -1 : 0
    }), re, be));
  let ye = /* @__PURE__ */ q.createElement("button", Object.assign({}, w, {
    type: E,
    className: Re,
    style: me,
    onClick: se,
    disabled: z,
    ref: J
  }), re, be, !!de && /* @__PURE__ */ q.createElement(A0, {
    key: "compact",
    prefixCls: T
  }));
  return eo($) || (ye = /* @__PURE__ */ q.createElement(Xd, {
    component: "Button",
    disabled: X
  }, ye)), k(ye);
}), ko = L0;
ko.Group = c0;
ko.__ANT_BUTTON = !0;
process.env.NODE_ENV !== "production" && (ko.displayName = "Button");
var of = /* @__PURE__ */ u.createContext(null), fc = [];
function D0(e, t) {
  var r = u.useState(function() {
    if (!Xt())
      return null;
    var b = document.createElement("div");
    return process.env.NODE_ENV !== "production" && t && b.setAttribute("data-debug", t), b;
  }), n = K(r, 1), a = n[0], o = u.useRef(!1), i = u.useContext(of), s = u.useState(fc), l = K(s, 2), c = l[0], d = l[1], f = i || (o.current ? void 0 : function(b) {
    d(function(p) {
      var g = [b].concat(he(p));
      return g;
    });
  });
  function v() {
    a.parentElement || document.body.appendChild(a), o.current = !0;
  }
  function m() {
    var b;
    (b = a.parentElement) === null || b === void 0 || b.removeChild(a), o.current = !1;
  }
  return Ct(function() {
    return e ? i ? i(v) : v() : m(), m;
  }, [e]), Ct(function() {
    c.length && (c.forEach(function(b) {
      return b();
    }), d(fc));
  }, [c]), [a, f];
}
function z0(e) {
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
      Lr(`
#`.concat(t, `::-webkit-scrollbar {
`).concat(d, `
`).concat(f, `
}`), t);
    } catch (b) {
      console.error(b), a = l, o = c;
    }
  }
  document.body.appendChild(r);
  var v = e && a && !isNaN(a) ? a : r.offsetWidth - r.clientWidth, m = e && o && !isNaN(o) ? o : r.offsetHeight - r.clientHeight;
  return document.body.removeChild(r), Sa(t), {
    width: v,
    height: m
  };
}
function V0(e) {
  return typeof document > "u" || !e || !(e instanceof Element) ? {
    width: 0,
    height: 0
  } : z0(e);
}
function B0() {
  return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth;
}
var k0 = "rc-util-locker-".concat(Date.now()), vc = 0;
function H0(e) {
  var t = !!e, r = u.useState(function() {
    return vc += 1, "".concat(k0, "_").concat(vc);
  }), n = K(r, 1), a = n[0];
  Ct(function() {
    if (t) {
      var o = V0(document.body).width, i = B0();
      Lr(`
html body {
  overflow-y: hidden;
  `.concat(i ? "width: calc(100% - ".concat(o, "px);") : "", `
}`), a);
    } else
      Sa(a);
    return function() {
      Sa(a);
    };
  }, [t, a]);
}
var W0 = !1;
function K0(e) {
  return W0;
}
var gc = function(t) {
  return t === !1 ? !1 : !Xt() || !t ? null : typeof t == "string" ? document.querySelector(t) : typeof t == "function" ? t() : t;
}, Js = /* @__PURE__ */ u.forwardRef(function(e, t) {
  var r = e.open, n = e.autoLock, a = e.getContainer, o = e.debug, i = e.autoDestroy, s = i === void 0 ? !0 : i, l = e.children, c = u.useState(r), d = K(c, 2), f = d[0], v = d[1], m = f || r;
  process.env.NODE_ENV !== "production" && tt(Xt() || !r, "Portal only work in client side. Please call 'useEffect' to show Portal instead default render in SSR."), u.useEffect(function() {
    (s || r) && v(r);
  }, [r, s]);
  var b = u.useState(function() {
    return gc(a);
  }), p = K(b, 2), g = p[0], S = p[1];
  u.useEffect(function() {
    var M = gc(a);
    S(M ?? null);
  });
  var h = D0(m && !g, o), y = K(h, 2), E = y[0], C = y[1], O = g ?? E;
  H0(n && r && Xt() && (O === E || O === document.body));
  var R = null;
  if (l && dn(l) && t) {
    var w = l;
    R = w.ref;
  }
  var $ = Na(R, t);
  if (!m || !Xt() || g === void 0)
    return null;
  var A = O === !1 || K0(), F = l;
  return t && (F = /* @__PURE__ */ u.cloneElement(l, {
    ref: $
  })), /* @__PURE__ */ u.createElement(of.Provider, {
    value: C
  }, A ? F : /* @__PURE__ */ Ov(F, O));
});
process.env.NODE_ENV !== "production" && (Js.displayName = "Portal");
function U0() {
  var e = D({}, u);
  return e.useId;
}
var mc = 0, pc = U0();
const G0 = pc ? (
  // Use React `useId`
  function(t) {
    var r = pc();
    return t || (process.env.NODE_ENV === "test" ? "test-id" : r);
  }
) : (
  // Use compatible of `useId`
  function(t) {
    var r = u.useState("ssr-id"), n = K(r, 2), a = n[0], o = n[1];
    return u.useEffect(function() {
      var i = mc;
      mc += 1, o("rc_unique_".concat(i));
    }, []), t || (process.env.NODE_ENV === "test" ? "test-id" : a);
  }
);
var ln = "RC_FORM_INTERNAL_HOOKS", lt = function() {
  tt(!1, "Can not find FormContext. Please make sure you wrap Field under Form.");
}, Vn = /* @__PURE__ */ u.createContext({
  getFieldValue: lt,
  getFieldsValue: lt,
  getFieldError: lt,
  getFieldWarning: lt,
  getFieldsError: lt,
  isFieldsTouched: lt,
  isFieldTouched: lt,
  isFieldValidating: lt,
  isFieldsValidating: lt,
  resetFields: lt,
  setFields: lt,
  setFieldValue: lt,
  setFieldsValue: lt,
  validateFields: lt,
  submit: lt,
  getInternalHooks: function() {
    return lt(), {
      dispatch: lt,
      initEntityValue: lt,
      registerField: lt,
      useSubscribe: lt,
      setInitialValues: lt,
      destroyForm: lt,
      setCallbacks: lt,
      registerWatch: lt,
      getFields: lt,
      setValidateMessages: lt,
      setPreserve: lt,
      getInitialValue: lt
    };
  }
}), Ro = /* @__PURE__ */ u.createContext(null);
function us(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function q0(e) {
  return e && !!e._init;
}
function ds() {
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
var fs = ds();
function X0(e) {
  try {
    return Function.toString.call(e).indexOf("[native code]") !== -1;
  } catch {
    return typeof e == "function";
  }
}
function Y0(e, t, r) {
  if (Ms()) return Reflect.construct.apply(null, arguments);
  var n = [null];
  n.push.apply(n, t);
  var a = new (e.bind.apply(e, n))();
  return r && ha(a, r.prototype), a;
}
function vs(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return vs = function(n) {
    if (n === null || !X0(n)) return n;
    if (typeof n != "function") throw new TypeError("Super expression must either be null or a function");
    if (t !== void 0) {
      if (t.has(n)) return t.get(n);
      t.set(n, a);
    }
    function a() {
      return Y0(n, arguments, ba(this).constructor);
    }
    return a.prototype = Object.create(n.prototype, {
      constructor: {
        value: a,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), ha(a, n);
  }, vs(e);
}
var Z0 = /%[sdj%]/g, sf = function() {
};
typeof process < "u" && process.env && process.env.NODE_ENV !== "production" && typeof window < "u" && typeof document < "u" && (sf = function(t, r) {
  typeof console < "u" && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING > "u" && r.every(function(n) {
    return typeof n == "string";
  }) && console.warn(t, r);
});
function gs(e) {
  if (!e || !e.length) return null;
  var t = {};
  return e.forEach(function(r) {
    var n = r.field;
    t[n] = t[n] || [], t[n].push(r);
  }), t;
}
function rr(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  var a = 0, o = r.length;
  if (typeof e == "function")
    return e.apply(null, r);
  if (typeof e == "string") {
    var i = e.replace(Z0, function(s) {
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
function Q0(e) {
  return e === "string" || e === "url" || e === "hex" || e === "email" || e === "date" || e === "pattern";
}
function It(e, t) {
  return !!(e == null || t === "array" && Array.isArray(e) && !e.length || Q0(t) && typeof e == "string" && !e);
}
function J0(e, t, r) {
  var n = [], a = 0, o = e.length;
  function i(s) {
    n.push.apply(n, he(s || [])), a++, a === o && r(n);
  }
  e.forEach(function(s) {
    t(s, i);
  });
}
function hc(e, t, r) {
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
function eb(e) {
  var t = [];
  return Object.keys(e).forEach(function(r) {
    t.push.apply(t, he(e[r] || []));
  }), t;
}
var bc = /* @__PURE__ */ function(e) {
  Qr(r, e);
  var t = Jr(r);
  function r(n, a) {
    var o;
    return Lt(this, r), o = t.call(this, "Async Validation Error"), j(Ue(o), "errors", void 0), j(Ue(o), "fields", void 0), o.errors = n, o.fields = a, o;
  }
  return Dt(r);
}(/* @__PURE__ */ vs(Error));
function tb(e, t, r, n, a) {
  if (t.first) {
    var o = new Promise(function(v, m) {
      var b = function(S) {
        return n(S), S.length ? m(new bc(S, gs(S))) : v(a);
      }, p = eb(e);
      hc(p, r, b);
    });
    return o.catch(function(v) {
      return v;
    }), o;
  }
  var i = t.firstFields === !0 ? Object.keys(e) : t.firstFields || [], s = Object.keys(e), l = s.length, c = 0, d = [], f = new Promise(function(v, m) {
    var b = function(g) {
      if (d.push.apply(d, g), c++, c === l)
        return n(d), d.length ? m(new bc(d, gs(d))) : v(a);
    };
    s.length || (n(d), v(a)), s.forEach(function(p) {
      var g = e[p];
      i.indexOf(p) !== -1 ? hc(g, r, b) : J0(g, r, b);
    });
  });
  return f.catch(function(v) {
    return v;
  }), f;
}
function rb(e) {
  return !!(e && e.message !== void 0);
}
function nb(e, t) {
  for (var r = e, n = 0; n < t.length; n++) {
    if (r == null)
      return r;
    r = r[t[n]];
  }
  return r;
}
function yc(e, t) {
  return function(r) {
    var n;
    return e.fullFields ? n = nb(t, e.fullFields) : n = t[r.field || e.fullField], rb(r) ? (r.field = r.field || e.fullField, r.fieldValue = n, r) : {
      message: typeof r == "function" ? r() : r,
      fieldValue: n,
      field: r.field || e.fullField
    };
  };
}
function Sc(e, t) {
  if (t) {
    for (var r in t)
      if (t.hasOwnProperty(r)) {
        var n = t[r];
        Ae(n) === "object" && Ae(e[r]) === "object" ? e[r] = D(D({}, e[r]), n) : e[r] = n;
      }
  }
  return e;
}
var bn = "enum", ab = function(t, r, n, a, o) {
  t[bn] = Array.isArray(t[bn]) ? t[bn] : [], t[bn].indexOf(r) === -1 && a.push(rr(o.messages[bn], t.fullField, t[bn].join(", ")));
}, ob = function(t, r, n, a, o) {
  if (t.pattern) {
    if (t.pattern instanceof RegExp)
      t.pattern.lastIndex = 0, t.pattern.test(r) || a.push(rr(o.messages.pattern.mismatch, t.fullField, r, t.pattern));
    else if (typeof t.pattern == "string") {
      var i = new RegExp(t.pattern);
      i.test(r) || a.push(rr(o.messages.pattern.mismatch, t.fullField, r, t.pattern));
    }
  }
}, ib = function(t, r, n, a, o) {
  var i = typeof t.len == "number", s = typeof t.min == "number", l = typeof t.max == "number", c = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, d = r, f = null, v = typeof r == "number", m = typeof r == "string", b = Array.isArray(r);
  if (v ? f = "number" : m ? f = "string" : b && (f = "array"), !f)
    return !1;
  b && (d = r.length), m && (d = r.replace(c, "_").length), i ? d !== t.len && a.push(rr(o.messages[f].len, t.fullField, t.len)) : s && !l && d < t.min ? a.push(rr(o.messages[f].min, t.fullField, t.min)) : l && !s && d > t.max ? a.push(rr(o.messages[f].max, t.fullField, t.max)) : s && l && (d < t.min || d > t.max) && a.push(rr(o.messages[f].range, t.fullField, t.min, t.max));
}, lf = function(t, r, n, a, o, i) {
  t.required && (!n.hasOwnProperty(t.field) || It(r, i || t.type)) && a.push(rr(o.messages.required, t.fullField));
}, to;
const sb = function() {
  if (to)
    return to;
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
  var f = "(?:(?:[a-z]+:)?//)", v = "(?:\\S+(?::\\S*)?@)?", m = d.v4().source, b = d.v6().source, p = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)", g = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*", S = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", h = "(?::\\d{2,5})?", y = '(?:[/?#][^\\s"]*)?', E = "(?:".concat(f, "|www\\.)").concat(v, "(?:localhost|").concat(m, "|").concat(b, "|").concat(p).concat(g).concat(S, ")").concat(h).concat(y);
  return to = new RegExp("(?:^".concat(E, "$)"), "i"), to;
};
var Cc = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  // url: new RegExp(
  //   '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
  //   'i',
  // ),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
}, la = {
  integer: function(t) {
    return la.number(t) && parseInt(t, 10) === t;
  },
  float: function(t) {
    return la.number(t) && !la.integer(t);
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
    return Ae(t) === "object" && !la.array(t);
  },
  method: function(t) {
    return typeof t == "function";
  },
  email: function(t) {
    return typeof t == "string" && t.length <= 320 && !!t.match(Cc.email);
  },
  url: function(t) {
    return typeof t == "string" && t.length <= 2048 && !!t.match(sb());
  },
  hex: function(t) {
    return typeof t == "string" && !!t.match(Cc.hex);
  }
}, lb = function(t, r, n, a, o) {
  if (t.required && r === void 0) {
    lf(t, r, n, a, o);
    return;
  }
  var i = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"], s = t.type;
  i.indexOf(s) > -1 ? la[s](r) || a.push(rr(o.messages.types[s], t.fullField, t.type)) : s && Ae(r) !== t.type && a.push(rr(o.messages.types[s], t.fullField, t.type));
}, cb = function(t, r, n, a, o) {
  (/^\s+$/.test(r) || r === "") && a.push(rr(o.messages.whitespace, t.fullField));
};
const Xe = {
  required: lf,
  whitespace: cb,
  type: lb,
  range: ib,
  enum: ab,
  pattern: ob
};
var ub = function(t, r, n, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (It(r) && !t.required)
      return n();
    Xe.required(t, r, a, i, o);
  }
  n(i);
}, db = function(t, r, n, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (r == null && !t.required)
      return n();
    Xe.required(t, r, a, i, o, "array"), r != null && (Xe.type(t, r, a, i, o), Xe.range(t, r, a, i, o));
  }
  n(i);
}, fb = function(t, r, n, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (It(r) && !t.required)
      return n();
    Xe.required(t, r, a, i, o), r !== void 0 && Xe.type(t, r, a, i, o);
  }
  n(i);
}, vb = function(t, r, n, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (It(r, "date") && !t.required)
      return n();
    if (Xe.required(t, r, a, i, o), !It(r, "date")) {
      var l;
      r instanceof Date ? l = r : l = new Date(r), Xe.type(t, l, a, i, o), l && Xe.range(t, l.getTime(), a, i, o);
    }
  }
  n(i);
}, gb = "enum", mb = function(t, r, n, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (It(r) && !t.required)
      return n();
    Xe.required(t, r, a, i, o), r !== void 0 && Xe[gb](t, r, a, i, o);
  }
  n(i);
}, pb = function(t, r, n, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (It(r) && !t.required)
      return n();
    Xe.required(t, r, a, i, o), r !== void 0 && (Xe.type(t, r, a, i, o), Xe.range(t, r, a, i, o));
  }
  n(i);
}, hb = function(t, r, n, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (It(r) && !t.required)
      return n();
    Xe.required(t, r, a, i, o), r !== void 0 && (Xe.type(t, r, a, i, o), Xe.range(t, r, a, i, o));
  }
  n(i);
}, bb = function(t, r, n, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (It(r) && !t.required)
      return n();
    Xe.required(t, r, a, i, o), r !== void 0 && Xe.type(t, r, a, i, o);
  }
  n(i);
}, yb = function(t, r, n, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (r === "" && (r = void 0), It(r) && !t.required)
      return n();
    Xe.required(t, r, a, i, o), r !== void 0 && (Xe.type(t, r, a, i, o), Xe.range(t, r, a, i, o));
  }
  n(i);
}, Sb = function(t, r, n, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (It(r) && !t.required)
      return n();
    Xe.required(t, r, a, i, o), r !== void 0 && Xe.type(t, r, a, i, o);
  }
  n(i);
}, Cb = function(t, r, n, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (It(r, "string") && !t.required)
      return n();
    Xe.required(t, r, a, i, o), It(r, "string") || Xe.pattern(t, r, a, i, o);
  }
  n(i);
}, Eb = function(t, r, n, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (It(r) && !t.required)
      return n();
    Xe.required(t, r, a, i, o), It(r) || Xe.type(t, r, a, i, o);
  }
  n(i);
}, xb = function(t, r, n, a, o) {
  var i = [], s = Array.isArray(r) ? "array" : Ae(r);
  Xe.required(t, r, a, i, o, s), n(i);
}, wb = function(t, r, n, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (It(r, "string") && !t.required)
      return n();
    Xe.required(t, r, a, i, o, "string"), It(r, "string") || (Xe.type(t, r, a, i, o), Xe.range(t, r, a, i, o), Xe.pattern(t, r, a, i, o), t.whitespace === !0 && Xe.whitespace(t, r, a, i, o));
  }
  n(i);
}, hi = function(t, r, n, a, o) {
  var i = t.type, s = [], l = t.required || !t.required && a.hasOwnProperty(t.field);
  if (l) {
    if (It(r, i) && !t.required)
      return n();
    Xe.required(t, r, a, s, o, i), It(r, i) || Xe.type(t, r, a, s, o);
  }
  n(s);
};
const ga = {
  string: wb,
  method: bb,
  number: yb,
  boolean: fb,
  regexp: Eb,
  integer: hb,
  float: pb,
  array: db,
  object: Sb,
  enum: mb,
  pattern: Cb,
  date: vb,
  url: hi,
  hex: hi,
  email: hi,
  required: xb,
  any: ub
};
var ja = /* @__PURE__ */ function() {
  function e(t) {
    Lt(this, e), j(this, "rules", null), j(this, "_messages", fs), this.define(t);
  }
  return Dt(e, [{
    key: "define",
    value: function(r) {
      var n = this;
      if (!r)
        throw new Error("Cannot configure a schema with no rules");
      if (Ae(r) !== "object" || Array.isArray(r))
        throw new Error("Rules must be an object");
      this.rules = {}, Object.keys(r).forEach(function(a) {
        var o = r[a];
        n.rules[a] = Array.isArray(o) ? o : [o];
      });
    }
  }, {
    key: "messages",
    value: function(r) {
      return r && (this._messages = Sc(ds(), r)), this._messages;
    }
  }, {
    key: "validate",
    value: function(r) {
      var n = this, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function() {
      }, i = r, s = a, l = o;
      if (typeof s == "function" && (l = s, s = {}), !this.rules || Object.keys(this.rules).length === 0)
        return l && l(null, i), Promise.resolve(i);
      function c(b) {
        var p = [], g = {};
        function S(y) {
          if (Array.isArray(y)) {
            var E;
            p = (E = p).concat.apply(E, he(y));
          } else
            p.push(y);
        }
        for (var h = 0; h < b.length; h++)
          S(b[h]);
        p.length ? (g = gs(p), l(p, g)) : l(null, i);
      }
      if (s.messages) {
        var d = this.messages();
        d === fs && (d = ds()), Sc(d, s.messages), s.messages = d;
      } else
        s.messages = this.messages();
      var f = {}, v = s.keys || Object.keys(this.rules);
      v.forEach(function(b) {
        var p = n.rules[b], g = i[b];
        p.forEach(function(S) {
          var h = S;
          typeof h.transform == "function" && (i === r && (i = D({}, i)), g = i[b] = h.transform(g), g != null && (h.type = h.type || (Array.isArray(g) ? "array" : Ae(g)))), typeof h == "function" ? h = {
            validator: h
          } : h = D({}, h), h.validator = n.getValidationMethod(h), h.validator && (h.field = b, h.fullField = h.fullField || b, h.type = n.getType(h), f[b] = f[b] || [], f[b].push({
            rule: h,
            value: g,
            source: i,
            field: b
          }));
        });
      });
      var m = {};
      return tb(f, s, function(b, p) {
        var g = b.rule, S = (g.type === "object" || g.type === "array") && (Ae(g.fields) === "object" || Ae(g.defaultField) === "object");
        S = S && (g.required || !g.required && b.value), g.field = b.field;
        function h(R, w) {
          return D(D({}, w), {}, {
            fullField: "".concat(g.fullField, ".").concat(R),
            fullFields: g.fullFields ? [].concat(he(g.fullFields), [R]) : [R]
          });
        }
        function y() {
          var R = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], w = Array.isArray(R) ? R : [R];
          !s.suppressWarning && w.length && e.warning("async-validator:", w), w.length && g.message !== void 0 && (w = [].concat(g.message));
          var $ = w.map(yc(g, i));
          if (s.first && $.length)
            return m[g.field] = 1, p($);
          if (!S)
            p($);
          else {
            if (g.required && !b.value)
              return g.message !== void 0 ? $ = [].concat(g.message).map(yc(g, i)) : s.error && ($ = [s.error(g, rr(s.messages.required, g.field))]), p($);
            var A = {};
            g.defaultField && Object.keys(b.value).map(function(I) {
              A[I] = g.defaultField;
            }), A = D(D({}, A), b.rule.fields);
            var F = {};
            Object.keys(A).forEach(function(I) {
              var T = A[I], k = Array.isArray(T) ? T : [T];
              F[I] = k.map(h.bind(null, I));
            });
            var M = new e(F);
            M.messages(s.messages), b.rule.options && (b.rule.options.messages = s.messages, b.rule.options.error = s.error), M.validate(b.value, b.rule.options || s, function(I) {
              var T = [];
              $ && $.length && T.push.apply(T, he($)), I && I.length && T.push.apply(T, he(I)), p(T.length ? T : null);
            });
          }
        }
        var E;
        if (g.asyncValidator)
          E = g.asyncValidator(g, b.value, y, b.source, s);
        else if (g.validator) {
          try {
            E = g.validator(g, b.value, y, b.source, s);
          } catch (R) {
            var C, O;
            (C = (O = console).error) === null || C === void 0 || C.call(O, R), s.suppressValidatorError || setTimeout(function() {
              throw R;
            }, 0), y(R.message);
          }
          E === !0 ? y() : E === !1 ? y(typeof g.message == "function" ? g.message(g.fullField || g.field) : g.message || "".concat(g.fullField || g.field, " fails")) : E instanceof Array ? y(E) : E instanceof Error && y(E.message);
        }
        E && E.then && E.then(function() {
          return y();
        }, function(R) {
          return y(R);
        });
      }, function(b) {
        c(b);
      }, i);
    }
  }, {
    key: "getType",
    value: function(r) {
      if (r.type === void 0 && r.pattern instanceof RegExp && (r.type = "pattern"), typeof r.validator != "function" && r.type && !ga.hasOwnProperty(r.type))
        throw new Error(rr("Unknown rule type %s", r.type));
      return r.type || "string";
    }
  }, {
    key: "getValidationMethod",
    value: function(r) {
      if (typeof r.validator == "function")
        return r.validator;
      var n = Object.keys(r), a = n.indexOf("message");
      return a !== -1 && n.splice(a, 1), n.length === 1 && n[0] === "required" ? ga.required : ga[this.getType(r)] || void 0;
    }
  }]), e;
}();
j(ja, "register", function(t, r) {
  if (typeof r != "function")
    throw new Error("Cannot register a validator by type, validator is not a function");
  ga[t] = r;
});
j(ja, "warning", sf);
j(ja, "messages", fs);
j(ja, "validators", ga);
var Jt = "'${name}' is not a valid ${type}", cf = {
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
}, Ec = ja;
function $b(e, t) {
  return e.replace(/\$\{\w+\}/g, function(r) {
    var n = r.slice(2, -1);
    return t[n];
  });
}
var xc = "CODE_LOGIC_ERROR";
function ms(e, t, r, n, a) {
  return ps.apply(this, arguments);
}
function ps() {
  return ps = vn(/* @__PURE__ */ Yt().mark(function e(t, r, n, a, o) {
    var i, s, l, c, d, f, v, m, b;
    return Yt().wrap(function(g) {
      for (; ; ) switch (g.prev = g.next) {
        case 0:
          return i = D({}, n), delete i.ruleIndex, Ec.warning = function() {
          }, i.validator && (s = i.validator, i.validator = function() {
            try {
              return s.apply(void 0, arguments);
            } catch (S) {
              return console.error(S), Promise.reject(xc);
            }
          }), l = null, i && i.type === "array" && i.defaultField && (l = i.defaultField, delete i.defaultField), c = new Ec(j({}, t, [i])), d = Pn(cf, a.validateMessages), c.messages(d), f = [], g.prev = 10, g.next = 13, Promise.resolve(c.validate(j({}, t, r), D({}, a)));
        case 13:
          g.next = 18;
          break;
        case 15:
          g.prev = 15, g.t0 = g.catch(10), g.t0.errors && (f = g.t0.errors.map(function(S, h) {
            var y = S.message, E = y === xc ? d.default : y;
            return /* @__PURE__ */ u.isValidElement(E) ? (
              // Wrap ReactNode with `key`
              /* @__PURE__ */ u.cloneElement(E, {
                key: "error_".concat(h)
              })
            ) : E;
          }));
        case 18:
          if (!(!f.length && l)) {
            g.next = 23;
            break;
          }
          return g.next = 21, Promise.all(r.map(function(S, h) {
            return ms("".concat(t, ".").concat(h), S, l, a, o);
          }));
        case 21:
          return v = g.sent, g.abrupt("return", v.reduce(function(S, h) {
            return [].concat(he(S), he(h));
          }, []));
        case 23:
          return m = D(D({}, n), {}, {
            name: t,
            enum: (n.enum || []).join(", ")
          }, o), b = f.map(function(S) {
            return typeof S == "string" ? $b(S, m) : S;
          }), g.abrupt("return", b);
        case 26:
        case "end":
          return g.stop();
      }
    }, e, null, [[10, 15]]);
  })), ps.apply(this, arguments);
}
function Ob(e, t, r, n, a, o) {
  var i = e.join("."), s = r.map(function(d, f) {
    var v = d.validator, m = D(D({}, d), {}, {
      ruleIndex: f
    });
    return v && (m.validator = function(b, p, g) {
      var S = !1, h = function() {
        for (var C = arguments.length, O = new Array(C), R = 0; R < C; R++)
          O[R] = arguments[R];
        Promise.resolve().then(function() {
          tt(!S, "Your validator function has already return a promise. `callback` will be ignored."), S || g.apply(void 0, O);
        });
      }, y = v(b, p, h);
      S = y && typeof y.then == "function" && typeof y.catch == "function", tt(S, "`callback` is deprecated. Please return a promise instead."), S && y.then(function() {
        g();
      }).catch(function(E) {
        g(E || " ");
      });
    }), m;
  }).sort(function(d, f) {
    var v = d.warningOnly, m = d.ruleIndex, b = f.warningOnly, p = f.ruleIndex;
    return !!v == !!b ? m - p : v ? 1 : -1;
  }), l;
  if (a === !0)
    l = new Promise(/* @__PURE__ */ function() {
      var d = vn(/* @__PURE__ */ Yt().mark(function f(v, m) {
        var b, p, g;
        return Yt().wrap(function(h) {
          for (; ; ) switch (h.prev = h.next) {
            case 0:
              b = 0;
            case 1:
              if (!(b < s.length)) {
                h.next = 12;
                break;
              }
              return p = s[b], h.next = 5, ms(i, t, p, n, o);
            case 5:
              if (g = h.sent, !g.length) {
                h.next = 9;
                break;
              }
              return m([{
                errors: g,
                rule: p
              }]), h.abrupt("return");
            case 9:
              b += 1, h.next = 1;
              break;
            case 12:
              v([]);
            case 13:
            case "end":
              return h.stop();
          }
        }, f);
      }));
      return function(f, v) {
        return d.apply(this, arguments);
      };
    }());
  else {
    var c = s.map(function(d) {
      return ms(i, t, d, n, o).then(function(f) {
        return {
          errors: f,
          rule: d
        };
      });
    });
    l = (a ? Pb(c) : Rb(c)).then(function(d) {
      return Promise.reject(d);
    });
  }
  return l.catch(function(d) {
    return d;
  }), l;
}
function Rb(e) {
  return hs.apply(this, arguments);
}
function hs() {
  return hs = vn(/* @__PURE__ */ Yt().mark(function e(t) {
    return Yt().wrap(function(n) {
      for (; ; ) switch (n.prev = n.next) {
        case 0:
          return n.abrupt("return", Promise.all(t).then(function(a) {
            var o, i = (o = []).concat.apply(o, he(a));
            return i;
          }));
        case 1:
        case "end":
          return n.stop();
      }
    }, e);
  })), hs.apply(this, arguments);
}
function Pb(e) {
  return bs.apply(this, arguments);
}
function bs() {
  return bs = vn(/* @__PURE__ */ Yt().mark(function e(t) {
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
  })), bs.apply(this, arguments);
}
function Ot(e) {
  return us(e);
}
function wc(e, t) {
  var r = {};
  return t.forEach(function(n) {
    var a = Or(e, n);
    r = mr(r, n, a);
  }), r;
}
function Nn(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  return e && e.some(function(n) {
    return uf(t, n, r);
  });
}
function uf(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  return !e || !t || !r && e.length !== t.length ? !1 : t.every(function(n, a) {
    return e[a] === n;
  });
}
function _b(e, t) {
  if (e === t)
    return !0;
  if (!e && t || e && !t || !e || !t || Ae(e) !== "object" || Ae(t) !== "object")
    return !1;
  var r = Object.keys(e), n = Object.keys(t), a = new Set([].concat(r, n));
  return he(a).every(function(o) {
    var i = e[o], s = t[o];
    return typeof i == "function" && typeof s == "function" ? !0 : i === s;
  });
}
function Tb(e) {
  var t = arguments.length <= 1 ? void 0 : arguments[1];
  return t && t.target && Ae(t.target) === "object" && e in t.target ? t.target[e] : t;
}
function $c(e, t, r) {
  var n = e.length;
  if (t < 0 || t >= n || r < 0 || r >= n)
    return e;
  var a = e[t], o = t - r;
  return o > 0 ? [].concat(he(e.slice(0, r)), [a], he(e.slice(r, t)), he(e.slice(t + 1, n))) : o < 0 ? [].concat(he(e.slice(0, t)), he(e.slice(t + 1, r + 1)), [a], he(e.slice(r + 1, n))) : e;
}
var Nb = ["name"], or = [];
function Oc(e, t, r, n, a, o) {
  return typeof e == "function" ? e(t, r, "source" in o ? {
    source: o.source
  } : {}) : n !== a;
}
var el = /* @__PURE__ */ function(e) {
  Qr(r, e);
  var t = Jr(r);
  function r(n) {
    var a;
    if (Lt(this, r), a = t.call(this, n), j(Ue(a), "state", {
      resetCount: 0
    }), j(Ue(a), "cancelRegisterFunc", null), j(Ue(a), "mounted", !1), j(Ue(a), "touched", !1), j(Ue(a), "dirty", !1), j(Ue(a), "validatePromise", void 0), j(Ue(a), "prevValidating", void 0), j(Ue(a), "errors", or), j(Ue(a), "warnings", or), j(Ue(a), "cancelRegister", function() {
      var l = a.props, c = l.preserve, d = l.isListField, f = l.name;
      a.cancelRegisterFunc && a.cancelRegisterFunc(d, c, Ot(f)), a.cancelRegisterFunc = null;
    }), j(Ue(a), "getNamePath", function() {
      var l = a.props, c = l.name, d = l.fieldContext, f = d.prefixName, v = f === void 0 ? [] : f;
      return c !== void 0 ? [].concat(he(v), he(c)) : [];
    }), j(Ue(a), "getRules", function() {
      var l = a.props, c = l.rules, d = c === void 0 ? [] : c, f = l.fieldContext;
      return d.map(function(v) {
        return typeof v == "function" ? v(f) : v;
      });
    }), j(Ue(a), "refresh", function() {
      a.mounted && a.setState(function(l) {
        var c = l.resetCount;
        return {
          resetCount: c + 1
        };
      });
    }), j(Ue(a), "metaCache", null), j(Ue(a), "triggerMetaEvent", function(l) {
      var c = a.props.onMetaChange;
      if (c) {
        var d = D(D({}, a.getMeta()), {}, {
          destroy: l
        });
        Ca(a.metaCache, d) || c(d), a.metaCache = d;
      } else
        a.metaCache = null;
    }), j(Ue(a), "onStoreChange", function(l, c, d) {
      var f = a.props, v = f.shouldUpdate, m = f.dependencies, b = m === void 0 ? [] : m, p = f.onReset, g = d.store, S = a.getNamePath(), h = a.getValue(l), y = a.getValue(g), E = c && Nn(c, S);
      switch (d.type === "valueUpdate" && d.source === "external" && !Ca(h, y) && (a.touched = !0, a.dirty = !0, a.validatePromise = null, a.errors = or, a.warnings = or, a.triggerMetaEvent()), d.type) {
        case "reset":
          if (!c || E) {
            a.touched = !1, a.dirty = !1, a.validatePromise = void 0, a.errors = or, a.warnings = or, a.triggerMetaEvent(), p == null || p(), a.refresh();
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
          if (E) {
            "touched" in C && (a.touched = C.touched), "validating" in C && !("originRCField" in C) && (a.validatePromise = C.validating ? Promise.resolve([]) : null), "errors" in C && (a.errors = C.errors || or), "warnings" in C && (a.warnings = C.warnings || or), a.dirty = !0, a.triggerMetaEvent(), a.reRender();
            return;
          } else if ("value" in C && Nn(c, S, !0)) {
            a.reRender();
            return;
          }
          if (v && !S.length && Oc(v, l, g, h, y, d)) {
            a.reRender();
            return;
          }
          break;
        }
        case "dependenciesUpdate": {
          var O = b.map(Ot);
          if (O.some(function(R) {
            return Nn(d.relatedFields, R);
          })) {
            a.reRender();
            return;
          }
          break;
        }
        default:
          if (E || (!b.length || S.length || v) && Oc(v, l, g, h, y, d)) {
            a.reRender();
            return;
          }
          break;
      }
      v === !0 && a.reRender();
    }), j(Ue(a), "validateRules", function(l) {
      var c = a.getNamePath(), d = a.getValue(), f = l || {}, v = f.triggerName, m = f.validateOnly, b = m === void 0 ? !1 : m, p = Promise.resolve().then(/* @__PURE__ */ vn(/* @__PURE__ */ Yt().mark(function g() {
        var S, h, y, E, C, O, R;
        return Yt().wrap(function($) {
          for (; ; ) switch ($.prev = $.next) {
            case 0:
              if (a.mounted) {
                $.next = 2;
                break;
              }
              return $.abrupt("return", []);
            case 2:
              if (S = a.props, h = S.validateFirst, y = h === void 0 ? !1 : h, E = S.messageVariables, C = S.validateDebounce, O = a.getRules(), v && (O = O.filter(function(A) {
                return A;
              }).filter(function(A) {
                var F = A.validateTrigger;
                if (!F)
                  return !0;
                var M = us(F);
                return M.includes(v);
              })), !(C && v)) {
                $.next = 10;
                break;
              }
              return $.next = 8, new Promise(function(A) {
                setTimeout(A, C);
              });
            case 8:
              if (a.validatePromise === p) {
                $.next = 10;
                break;
              }
              return $.abrupt("return", []);
            case 10:
              return R = Ob(c, d, O, l, y, E), R.catch(function(A) {
                return A;
              }).then(function() {
                var A = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : or;
                if (a.validatePromise === p) {
                  var F;
                  a.validatePromise = null;
                  var M = [], I = [];
                  (F = A.forEach) === null || F === void 0 || F.call(A, function(T) {
                    var k = T.rule.warningOnly, N = T.errors, x = N === void 0 ? or : N;
                    k ? I.push.apply(I, he(x)) : M.push.apply(M, he(x));
                  }), a.errors = M, a.warnings = I, a.triggerMetaEvent(), a.reRender();
                }
              }), $.abrupt("return", R);
            case 13:
            case "end":
              return $.stop();
          }
        }, g);
      })));
      return b || (a.validatePromise = p, a.dirty = !0, a.errors = or, a.warnings = or, a.triggerMetaEvent(), a.reRender()), p;
    }), j(Ue(a), "isFieldValidating", function() {
      return !!a.validatePromise;
    }), j(Ue(a), "isFieldTouched", function() {
      return a.touched;
    }), j(Ue(a), "isFieldDirty", function() {
      if (a.dirty || a.props.initialValue !== void 0)
        return !0;
      var l = a.props.fieldContext, c = l.getInternalHooks(ln), d = c.getInitialValue;
      return d(a.getNamePath()) !== void 0;
    }), j(Ue(a), "getErrors", function() {
      return a.errors;
    }), j(Ue(a), "getWarnings", function() {
      return a.warnings;
    }), j(Ue(a), "isListField", function() {
      return a.props.isListField;
    }), j(Ue(a), "isList", function() {
      return a.props.isList;
    }), j(Ue(a), "isPreserve", function() {
      return a.props.preserve;
    }), j(Ue(a), "getMeta", function() {
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
    }), j(Ue(a), "getOnlyChild", function(l) {
      if (typeof l == "function") {
        var c = a.getMeta();
        return D(D({}, a.getOnlyChild(l(a.getControlled(), c, a.props.fieldContext))), {}, {
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
    }), j(Ue(a), "getValue", function(l) {
      var c = a.props.fieldContext.getFieldsValue, d = a.getNamePath();
      return Or(l || c(!0), d);
    }), j(Ue(a), "getControlled", function() {
      var l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, c = a.props, d = c.name, f = c.trigger, v = c.validateTrigger, m = c.getValueFromEvent, b = c.normalize, p = c.valuePropName, g = c.getValueProps, S = c.fieldContext, h = v !== void 0 ? v : S.validateTrigger, y = a.getNamePath(), E = S.getInternalHooks, C = S.getFieldsValue, O = E(ln), R = O.dispatch, w = a.getValue(), $ = g || function(T) {
        return j({}, p, T);
      }, A = l[f], F = d !== void 0 ? $(w) : {};
      process.env.NODE_ENV !== "production" && F && Object.keys(F).forEach(function(T) {
        tt(typeof F[T] != "function", "It's not recommended to generate dynamic function prop by `getValueProps`. Please pass it to child component directly (prop: ".concat(T, ")"));
      });
      var M = D(D({}, l), F);
      M[f] = function() {
        a.touched = !0, a.dirty = !0, a.triggerMetaEvent();
        for (var T, k = arguments.length, N = new Array(k), x = 0; x < k; x++)
          N[x] = arguments[x];
        m ? T = m.apply(void 0, N) : T = Tb.apply(void 0, [p].concat(N)), b && (T = b(T, w, C(!0))), R({
          type: "updateValue",
          namePath: y,
          value: T
        }), A && A.apply(void 0, N);
      };
      var I = us(h || []);
      return I.forEach(function(T) {
        var k = M[T];
        M[T] = function() {
          k && k.apply(void 0, arguments);
          var N = a.props.rules;
          N && N.length && R({
            type: "validateField",
            namePath: y,
            triggerName: T
          });
        };
      }), M;
    }), n.fieldContext) {
      var o = n.fieldContext.getInternalHooks, i = o(ln), s = i.initEntityValue;
      s(Ue(a));
    }
    return a;
  }
  return Dt(r, [{
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
      return l ? c = s : /* @__PURE__ */ u.isValidElement(s) ? c = /* @__PURE__ */ u.cloneElement(s, this.getControlled(s.props)) : (tt(!s, "`children` of Field is not validate ReactElement."), c = s), /* @__PURE__ */ u.createElement(u.Fragment, {
        key: a
      }, c);
    }
  }]), r;
}(u.Component);
j(el, "contextType", Vn);
j(el, "defaultProps", {
  trigger: "onChange",
  valuePropName: "value"
});
function df(e) {
  var t = e.name, r = Ye(e, Nb), n = u.useContext(Vn), a = u.useContext(Ro), o = t !== void 0 ? Ot(t) : void 0, i = "keep";
  return r.isListField || (i = "_".concat((o || []).join("_"))), process.env.NODE_ENV !== "production" && r.preserve === !1 && r.isListField && o.length <= 1 && tt(!1, "`preserve` should not apply on Form.List fields."), /* @__PURE__ */ u.createElement(el, _e({
    key: i,
    name: o,
    isListField: !!a
  }, r, {
    fieldContext: n
  }));
}
function Ib(e) {
  var t = e.name, r = e.initialValue, n = e.children, a = e.rules, o = e.validateTrigger, i = e.isListField, s = u.useContext(Vn), l = u.useContext(Ro), c = u.useRef({
    keys: [],
    id: 0
  }), d = c.current, f = u.useMemo(function() {
    var p = Ot(s.prefixName) || [];
    return [].concat(he(p), he(Ot(t)));
  }, [s.prefixName, t]), v = u.useMemo(function() {
    return D(D({}, s), {}, {
      prefixName: f
    });
  }, [s, f]), m = u.useMemo(function() {
    return {
      getKey: function(g) {
        var S = f.length, h = g[S];
        return [d.keys[h], g.slice(S + 1)];
      }
    };
  }, [f]);
  if (typeof n != "function")
    return tt(!1, "Form.List only accepts function as children."), null;
  var b = function(g, S, h) {
    var y = h.source;
    return y === "internal" ? !1 : g !== S;
  };
  return /* @__PURE__ */ u.createElement(Ro.Provider, {
    value: m
  }, /* @__PURE__ */ u.createElement(Vn.Provider, {
    value: v
  }, /* @__PURE__ */ u.createElement(df, {
    name: [],
    shouldUpdate: b,
    rules: a,
    validateTrigger: o,
    initialValue: r,
    isList: !0,
    isListField: i ?? !!l
  }, function(p, g) {
    var S = p.value, h = S === void 0 ? [] : S, y = p.onChange, E = s.getFieldValue, C = function() {
      var $ = E(f || []);
      return $ || [];
    }, O = {
      add: function($, A) {
        var F = C();
        A >= 0 && A <= F.length ? (d.keys = [].concat(he(d.keys.slice(0, A)), [d.id], he(d.keys.slice(A))), y([].concat(he(F.slice(0, A)), [$], he(F.slice(A))))) : (process.env.NODE_ENV !== "production" && (A < 0 || A > F.length) && tt(!1, "The second parameter of the add function should be a valid positive number."), d.keys = [].concat(he(d.keys), [d.id]), y([].concat(he(F), [$]))), d.id += 1;
      },
      remove: function($) {
        var A = C(), F = new Set(Array.isArray($) ? $ : [$]);
        F.size <= 0 || (d.keys = d.keys.filter(function(M, I) {
          return !F.has(I);
        }), y(A.filter(function(M, I) {
          return !F.has(I);
        })));
      },
      move: function($, A) {
        if ($ !== A) {
          var F = C();
          $ < 0 || $ >= F.length || A < 0 || A >= F.length || (d.keys = $c(d.keys, $, A), y($c(F, $, A)));
        }
      }
    }, R = h || [];
    return Array.isArray(R) || (R = [], process.env.NODE_ENV !== "production" && tt(!1, "Current value of '".concat(f.join(" > "), "' is not an array type."))), n(R.map(function(w, $) {
      var A = d.keys[$];
      return A === void 0 && (d.keys[$] = d.id, A = d.keys[$], d.id += 1), {
        name: $,
        key: A,
        isListField: !0
      };
    }), O, g);
  })));
}
function Mb(e) {
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
var ff = "__@field_split__";
function bi(e) {
  return e.map(function(t) {
    return "".concat(Ae(t), ":").concat(t);
  }).join(ff);
}
var yn = /* @__PURE__ */ function() {
  function e() {
    Lt(this, e), j(this, "kvs", /* @__PURE__ */ new Map());
  }
  return Dt(e, [{
    key: "set",
    value: function(r, n) {
      this.kvs.set(bi(r), n);
    }
  }, {
    key: "get",
    value: function(r) {
      return this.kvs.get(bi(r));
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
      this.kvs.delete(bi(r));
    }
    // Since we only use this in test, let simply realize this
  }, {
    key: "map",
    value: function(r) {
      return he(this.kvs.entries()).map(function(n) {
        var a = K(n, 2), o = a[0], i = a[1], s = o.split(ff);
        return r({
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
      var r = {};
      return this.map(function(n) {
        var a = n.key, o = n.value;
        return r[a.join(".")] = o, null;
      }), r;
    }
  }]), e;
}(), Ab = ["name"], jb = /* @__PURE__ */ Dt(function e(t) {
  var r = this;
  Lt(this, e), j(this, "formHooked", !1), j(this, "forceRootUpdate", void 0), j(this, "subscribable", !0), j(this, "store", {}), j(this, "fieldEntities", []), j(this, "initialValues", {}), j(this, "callbacks", {}), j(this, "validateMessages", null), j(this, "preserve", null), j(this, "lastValidatePromise", null), j(this, "getForm", function() {
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
  }), j(this, "getInternalHooks", function(n) {
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
    }) : (tt(!1, "`getInternalHooks` is internal usage. Should not call directly."), null);
  }), j(this, "useSubscribe", function(n) {
    r.subscribable = n;
  }), j(this, "prevWithoutPreserves", null), j(this, "setInitialValues", function(n, a) {
    if (r.initialValues = n || {}, a) {
      var o, i = Pn(n, r.store);
      (o = r.prevWithoutPreserves) === null || o === void 0 || o.map(function(s) {
        var l = s.key;
        i = mr(i, l, Or(n, l));
      }), r.prevWithoutPreserves = null, r.updateStore(i);
    }
  }), j(this, "destroyForm", function(n) {
    if (n)
      r.updateStore({});
    else {
      var a = new yn();
      r.getFieldEntities(!0).forEach(function(o) {
        r.isMergedPreserve(o.isPreserve()) || a.set(o.getNamePath(), !0);
      }), r.prevWithoutPreserves = a;
    }
  }), j(this, "getInitialValue", function(n) {
    var a = Or(r.initialValues, n);
    return n.length ? Pn(a) : a;
  }), j(this, "setCallbacks", function(n) {
    r.callbacks = n;
  }), j(this, "setValidateMessages", function(n) {
    r.validateMessages = n;
  }), j(this, "setPreserve", function(n) {
    r.preserve = n;
  }), j(this, "watchList", []), j(this, "registerWatch", function(n) {
    return r.watchList.push(n), function() {
      r.watchList = r.watchList.filter(function(a) {
        return a !== n;
      });
    };
  }), j(this, "notifyWatch", function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    if (r.watchList.length) {
      var a = r.getFieldsValue(), o = r.getFieldsValue(!0);
      r.watchList.forEach(function(i) {
        i(a, o, n);
      });
    }
  }), j(this, "timeoutId", null), j(this, "warningUnhooked", function() {
    process.env.NODE_ENV !== "production" && !r.timeoutId && typeof window < "u" && (r.timeoutId = setTimeout(function() {
      r.timeoutId = null, r.formHooked || tt(!1, "Instance created by `useForm` is not connected to any Form element. Forget to pass `form` prop?");
    }));
  }), j(this, "updateStore", function(n) {
    r.store = n;
  }), j(this, "getFieldEntities", function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    return n ? r.fieldEntities.filter(function(a) {
      return a.getNamePath().length;
    }) : r.fieldEntities;
  }), j(this, "getFieldsMap", function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, a = new yn();
    return r.getFieldEntities(n).forEach(function(o) {
      var i = o.getNamePath();
      a.set(i, o);
    }), a;
  }), j(this, "getFieldEntitiesForNamePathList", function(n) {
    if (!n)
      return r.getFieldEntities(!0);
    var a = r.getFieldsMap(!0);
    return n.map(function(o) {
      var i = Ot(o);
      return a.get(i) || {
        INVALIDATE_NAME_PATH: Ot(o)
      };
    });
  }), j(this, "getFieldsValue", function(n, a) {
    r.warningUnhooked();
    var o, i, s;
    if (n === !0 || Array.isArray(n) ? (o = n, i = a) : n && Ae(n) === "object" && (s = n.strict, i = n.filter), o === !0 && !i)
      return r.store;
    var l = r.getFieldEntitiesForNamePathList(Array.isArray(o) ? o : null), c = [];
    return l.forEach(function(d) {
      var f, v, m = "INVALIDATE_NAME_PATH" in d ? d.INVALIDATE_NAME_PATH : d.getNamePath();
      if (s) {
        var b, p;
        if ((b = (p = d).isList) !== null && b !== void 0 && b.call(p))
          return;
      } else if (!o && (f = (v = d).isListField) !== null && f !== void 0 && f.call(v))
        return;
      if (!i)
        c.push(m);
      else {
        var g = "getMeta" in d ? d.getMeta() : null;
        i(g) && c.push(m);
      }
    }), wc(r.store, c.map(Ot));
  }), j(this, "getFieldValue", function(n) {
    r.warningUnhooked();
    var a = Ot(n);
    return Or(r.store, a);
  }), j(this, "getFieldsError", function(n) {
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
  }), j(this, "getFieldError", function(n) {
    r.warningUnhooked();
    var a = Ot(n), o = r.getFieldsError([a])[0];
    return o.errors;
  }), j(this, "getFieldWarning", function(n) {
    r.warningUnhooked();
    var a = Ot(n), o = r.getFieldsError([a])[0];
    return o.warnings;
  }), j(this, "isFieldsTouched", function() {
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
    var v = new yn();
    l.forEach(function(p) {
      v.set(p, []);
    }), d.forEach(function(p) {
      var g = p.getNamePath();
      l.forEach(function(S) {
        S.every(function(h, y) {
          return g[y] === h;
        }) && v.update(S, function(h) {
          return [].concat(he(h), [p]);
        });
      });
    });
    var m = function(g) {
      return g.some(f);
    }, b = v.map(function(p) {
      var g = p.value;
      return g;
    });
    return c ? b.every(m) : b.some(m);
  }), j(this, "isFieldTouched", function(n) {
    return r.warningUnhooked(), r.isFieldsTouched([n]);
  }), j(this, "isFieldsValidating", function(n) {
    r.warningUnhooked();
    var a = r.getFieldEntities();
    if (!n)
      return a.some(function(i) {
        return i.isFieldValidating();
      });
    var o = n.map(Ot);
    return a.some(function(i) {
      var s = i.getNamePath();
      return Nn(o, s) && i.isFieldValidating();
    });
  }), j(this, "isFieldValidating", function(n) {
    return r.warningUnhooked(), r.isFieldsValidating([n]);
  }), j(this, "resetWithFieldInitialValue", function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, a = new yn(), o = r.getFieldEntities(!0);
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
            tt(!1, "Form already set 'initialValues' with path '".concat(v.join("."), "'. Field can not overwrite it."));
          else {
            var b = a.get(v);
            if (b && b.size > 1)
              tt(!1, "Multiple Field with path '".concat(v.join("."), "' set 'initialValue'. Can not decide which one to pick."));
            else if (b) {
              var p = r.getFieldValue(v), g = d.isListField();
              !g && (!n.skipExist || p === void 0) && r.updateStore(mr(r.store, v, he(b)[0].value));
            }
          }
        }
      });
    }, s;
    n.entities ? s = n.entities : n.namePathList ? (s = [], n.namePathList.forEach(function(l) {
      var c = a.get(l);
      if (c) {
        var d;
        (d = s).push.apply(d, he(he(c).map(function(f) {
          return f.entity;
        })));
      }
    })) : s = o, i(s);
  }), j(this, "resetFields", function(n) {
    r.warningUnhooked();
    var a = r.store;
    if (!n) {
      r.updateStore(Pn(r.initialValues)), r.resetWithFieldInitialValue(), r.notifyObservers(a, null, {
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
  }), j(this, "setFields", function(n) {
    r.warningUnhooked();
    var a = r.store, o = [];
    n.forEach(function(i) {
      var s = i.name, l = Ye(i, Ab), c = Ot(s);
      o.push(c), "value" in l && r.updateStore(mr(r.store, c, l.value)), r.notifyObservers(a, [c], {
        type: "setField",
        data: i
      });
    }), r.notifyWatch(o);
  }), j(this, "getFields", function() {
    var n = r.getFieldEntities(!0), a = n.map(function(o) {
      var i = o.getNamePath(), s = o.getMeta(), l = D(D({}, s), {}, {
        name: i,
        value: r.getFieldValue(i)
      });
      return Object.defineProperty(l, "originRCField", {
        value: !0
      }), l;
    });
    return a;
  }), j(this, "initEntityValue", function(n) {
    var a = n.props.initialValue;
    if (a !== void 0) {
      var o = n.getNamePath(), i = Or(r.store, o);
      i === void 0 && r.updateStore(mr(r.store, o, a));
    }
  }), j(this, "isMergedPreserve", function(n) {
    var a = n !== void 0 ? n : r.preserve;
    return a ?? !0;
  }), j(this, "registerField", function(n) {
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
            !uf(f.getNamePath(), a)
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
  }), j(this, "dispatch", function(n) {
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
  }), j(this, "notifyObservers", function(n, a, o) {
    if (r.subscribable) {
      var i = D(D({}, o), {}, {
        store: r.getFieldsValue(!0)
      });
      r.getFieldEntities().forEach(function(s) {
        var l = s.onStoreChange;
        l(n, a, i);
      });
    } else
      r.forceRootUpdate();
  }), j(this, "triggerDependenciesUpdate", function(n, a) {
    var o = r.getDependencyChildrenFields(a);
    return o.length && r.validateFields(o), r.notifyObservers(n, o, {
      type: "dependenciesUpdate",
      relatedFields: [a].concat(he(o))
    }), o;
  }), j(this, "updateValue", function(n, a) {
    var o = Ot(n), i = r.store;
    r.updateStore(mr(r.store, o, a)), r.notifyObservers(i, [o], {
      type: "valueUpdate",
      source: "internal"
    }), r.notifyWatch([o]);
    var s = r.triggerDependenciesUpdate(i, o), l = r.callbacks.onValuesChange;
    if (l) {
      var c = wc(r.store, [o]);
      l(c, r.getFieldsValue());
    }
    r.triggerOnFieldsChange([o].concat(he(s)));
  }), j(this, "setFieldsValue", function(n) {
    r.warningUnhooked();
    var a = r.store;
    if (n) {
      var o = Pn(r.store, n);
      r.updateStore(o);
    }
    r.notifyObservers(a, null, {
      type: "valueUpdate",
      source: "external"
    }), r.notifyWatch();
  }), j(this, "setFieldValue", function(n, a) {
    r.setFields([{
      name: n,
      value: a
    }]);
  }), j(this, "getDependencyChildrenFields", function(n) {
    var a = /* @__PURE__ */ new Set(), o = [], i = new yn();
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
  }), j(this, "triggerOnFieldsChange", function(n, a) {
    var o = r.callbacks.onFieldsChange;
    if (o) {
      var i = r.getFields();
      if (a) {
        var s = new yn();
        a.forEach(function(c) {
          var d = c.name, f = c.errors;
          s.set(d, f);
        }), i.forEach(function(c) {
          c.errors = s.get(c.name) || c.errors;
        });
      }
      var l = i.filter(function(c) {
        var d = c.name;
        return Nn(n, d);
      });
      l.length && o(l, i);
    }
  }), j(this, "validateFields", function(n, a) {
    r.warningUnhooked();
    var o, i;
    Array.isArray(n) || typeof n == "string" || typeof a == "string" ? (o = n, i = a) : i = n;
    var s = !!o, l = s ? o.map(Ot) : [], c = [], d = String(Date.now()), f = /* @__PURE__ */ new Set(), v = i || {}, m = v.recursive, b = v.dirty;
    r.getFieldEntities(!0).forEach(function(h) {
      if (s || l.push(h.getNamePath()), !(!h.props.rules || !h.props.rules.length) && !(b && !h.isFieldDirty())) {
        var y = h.getNamePath();
        if (f.add(y.join(d)), !s || Nn(l, y, m)) {
          var E = h.validateRules(D({
            validateMessages: D(D({}, cf), r.validateMessages)
          }, i));
          c.push(E.then(function() {
            return {
              name: y,
              errors: [],
              warnings: []
            };
          }).catch(function(C) {
            var O, R = [], w = [];
            return (O = C.forEach) === null || O === void 0 || O.call(C, function($) {
              var A = $.rule.warningOnly, F = $.errors;
              A ? w.push.apply(w, he(F)) : R.push.apply(R, he(F));
            }), R.length ? Promise.reject({
              name: y,
              errors: R,
              warnings: w
            }) : {
              name: y,
              errors: R,
              warnings: w
            };
          }));
        }
      }
    });
    var p = Mb(c);
    r.lastValidatePromise = p, p.catch(function(h) {
      return h;
    }).then(function(h) {
      var y = h.map(function(E) {
        var C = E.name;
        return C;
      });
      r.notifyObservers(r.store, y, {
        type: "validateFinish"
      }), r.triggerOnFieldsChange(y, h);
    });
    var g = p.then(function() {
      return r.lastValidatePromise === p ? Promise.resolve(r.getFieldsValue(l)) : Promise.reject([]);
    }).catch(function(h) {
      var y = h.filter(function(E) {
        return E && E.errors.length;
      });
      return Promise.reject({
        values: r.getFieldsValue(l),
        errorFields: y,
        outOfDate: r.lastValidatePromise !== p
      });
    });
    g.catch(function(h) {
      return h;
    });
    var S = l.filter(function(h) {
      return f.has(h.join(d));
    });
    return r.triggerOnFieldsChange(S), g;
  }), j(this, "submit", function() {
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
function vf(e) {
  var t = u.useRef(), r = u.useState({}), n = K(r, 2), a = n[1];
  if (!t.current)
    if (e)
      t.current = e;
    else {
      var o = function() {
        a({});
      }, i = new jb(o);
      t.current = i.getForm();
    }
  return [t.current];
}
var ys = /* @__PURE__ */ u.createContext({
  triggerFormChange: function() {
  },
  triggerFormFinish: function() {
  },
  registerForm: function() {
  },
  unregisterForm: function() {
  }
}), Fb = function(t) {
  var r = t.validateMessages, n = t.onFormChange, a = t.onFormFinish, o = t.children, i = u.useContext(ys), s = u.useRef({});
  return /* @__PURE__ */ u.createElement(ys.Provider, {
    value: D(D({}, i), {}, {
      validateMessages: D(D({}, i.validateMessages), r),
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
        c && (s.current = D(D({}, s.current), {}, j({}, c, d))), i.registerForm(c, d);
      },
      unregisterForm: function(c) {
        var d = D({}, s.current);
        delete d[c], s.current = d, i.unregisterForm(c);
      }
    })
  }, o);
}, Lb = ["name", "initialValues", "fields", "form", "preserve", "children", "component", "validateMessages", "validateTrigger", "onValuesChange", "onFieldsChange", "onFinish", "onFinishFailed", "clearOnDestroy"], Db = function(t, r) {
  var n = t.name, a = t.initialValues, o = t.fields, i = t.form, s = t.preserve, l = t.children, c = t.component, d = c === void 0 ? "form" : c, f = t.validateMessages, v = t.validateTrigger, m = v === void 0 ? "onChange" : v, b = t.onValuesChange, p = t.onFieldsChange, g = t.onFinish, S = t.onFinishFailed, h = t.clearOnDestroy, y = Ye(t, Lb), E = u.useRef(null), C = u.useContext(ys), O = vf(i), R = K(O, 1), w = R[0], $ = w.getInternalHooks(ln), A = $.useSubscribe, F = $.setInitialValues, M = $.setCallbacks, I = $.setValidateMessages, T = $.setPreserve, k = $.destroyForm;
  u.useImperativeHandle(r, function() {
    return D(D({}, w), {}, {
      nativeElement: E.current
    });
  }), u.useEffect(function() {
    return C.registerForm(n, w), function() {
      C.unregisterForm(n);
    };
  }, [C, w, n]), I(D(D({}, C.validateMessages), f)), M({
    onValuesChange: b,
    onFieldsChange: function(G) {
      if (C.triggerFormChange(n, G), p) {
        for (var Q = arguments.length, Y = new Array(Q > 1 ? Q - 1 : 0), J = 1; J < Q; J++)
          Y[J - 1] = arguments[J];
        p.apply(void 0, [G].concat(Y));
      }
    },
    onFinish: function(G) {
      C.triggerFormFinish(n, G), g && g(G);
    },
    onFinishFailed: S
  }), T(s);
  var N = u.useRef(null);
  F(a, !N.current), N.current || (N.current = !0), u.useEffect(
    function() {
      return function() {
        return k(h);
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  var x, _ = typeof l == "function";
  if (_) {
    var z = w.getFieldsValue(!0);
    x = l(z, w);
  } else
    x = l;
  A(!_);
  var L = u.useRef();
  u.useEffect(function() {
    _b(L.current || [], o || []) || w.setFields(o || []), L.current = o;
  }, [o, w]);
  var B = u.useMemo(function() {
    return D(D({}, w), {}, {
      validateTrigger: m
    });
  }, [w, m]), X = /* @__PURE__ */ u.createElement(Ro.Provider, {
    value: null
  }, /* @__PURE__ */ u.createElement(Vn.Provider, {
    value: B
  }, x));
  return d === !1 ? X : /* @__PURE__ */ u.createElement(d, _e({}, y, {
    ref: E,
    onSubmit: function(G) {
      G.preventDefault(), G.stopPropagation(), w.submit();
    },
    onReset: function(G) {
      var Q;
      G.preventDefault(), w.resetFields(), (Q = y.onReset) === null || Q === void 0 || Q.call(y, G);
    }
  }), X);
};
function Rc(e) {
  try {
    return JSON.stringify(e);
  } catch {
    return Math.random();
  }
}
var zb = process.env.NODE_ENV !== "production" ? function(e) {
  var t = e.join("__RC_FIELD_FORM_SPLIT__"), r = Be(t);
  tt(r.current === t, "`useWatch` is not support dynamic `namePath`. Please provide static instead.");
} : function() {
};
function Vb() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n = t[0], a = t[1], o = a === void 0 ? {} : a, i = q0(o) ? {
    form: o
  } : o, s = i.form, l = bt(), c = K(l, 2), d = c[0], f = c[1], v = Yr(function() {
    return Rc(d);
  }, [d]), m = Be(v);
  m.current = v;
  var b = Ht(Vn), p = s || b, g = p && p._init;
  process.env.NODE_ENV !== "production" && tt(t.length === 2 ? s ? g : !0 : g, "useWatch requires a form instance since it can not auto detect from context.");
  var S = Ot(n), h = Be(S);
  return h.current = S, zb(S), yt(
    function() {
      if (g) {
        var y = p.getFieldsValue, E = p.getInternalHooks, C = E(ln), O = C.registerWatch, R = function(F, M) {
          var I = i.preserve ? M : F;
          return typeof n == "function" ? n(I) : Or(I, h.current);
        }, w = O(function(A, F) {
          var M = R(A, F), I = Rc(M);
          m.current !== I && (m.current = I, f(M));
        }), $ = R(y(), y(!0));
        return d !== $ && f($), w;
      }
    },
    // We do not need re-register since namePath content is the same
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [g]
  ), d;
}
var Bb = /* @__PURE__ */ u.forwardRef(Db), Fa = Bb;
Fa.FormProvider = Fb;
Fa.Field = df;
Fa.List = Ib;
Fa.useForm = vf;
Fa.useWatch = Vb;
const Pa = /* @__PURE__ */ u.createContext({});
process.env.NODE_ENV !== "production" && (Pa.displayName = "FormItemInputContext");
const kb = (e) => {
  let {
    children: t,
    status: r,
    override: n
  } = e;
  const a = Ht(Pa), o = Yr(() => {
    const i = Object.assign({}, a);
    return n && delete i.isFormItemInput, r && (delete i.status, delete i.hasFeedback, delete i.feedbackIcon), i;
  }, [r, n, a]);
  return /* @__PURE__ */ u.createElement(Pa.Provider, {
    value: o
  }, t);
}, Hb = /* @__PURE__ */ kn(void 0), Ss = (e) => {
  const {
    space: t,
    form: r,
    children: n
  } = e;
  if (n == null)
    return null;
  let a = n;
  return r && (a = /* @__PURE__ */ q.createElement(kb, {
    override: !0,
    status: !0
  }, a)), t && (a = /* @__PURE__ */ q.createElement(s0, null, a)), a;
};
var gf = function(t) {
  if (Xt() && window.document.documentElement) {
    var r = Array.isArray(t) ? t : [t], n = window.document.documentElement;
    return r.some(function(a) {
      return a in n.style;
    });
  }
  return !1;
}, Wb = function(t, r) {
  if (!gf(t))
    return !1;
  var n = document.createElement("div"), a = n.style[t];
  return n.style[t] = r, n.style[t] !== a;
};
function Pc(e, t) {
  return !Array.isArray(e) && t !== void 0 ? Wb(e, t) : gf(e);
}
const Ho = (e) => {
  const {
    prefixCls: t,
    className: r,
    style: n,
    size: a,
    shape: o
  } = e, i = Z({
    [`${t}-lg`]: a === "large",
    [`${t}-sm`]: a === "small"
  }), s = Z({
    [`${t}-circle`]: o === "circle",
    [`${t}-square`]: o === "square",
    [`${t}-round`]: o === "round"
  }), l = u.useMemo(() => typeof a == "number" ? {
    width: a,
    height: a,
    lineHeight: `${a}px`
  } : {}, [a]);
  return /* @__PURE__ */ u.createElement("span", {
    className: Z(t, i, s, r),
    style: Object.assign(Object.assign({}, l), n)
  });
}, Kb = new Rt("ant-skeleton-loading", {
  "0%": {
    backgroundPosition: "100% 50%"
  },
  "100%": {
    backgroundPosition: "0 50%"
  }
}), Wo = (e) => ({
  height: e,
  lineHeight: ee(e)
}), In = (e) => Object.assign({
  width: e
}, Wo(e)), Ub = (e) => ({
  background: e.skeletonLoadingBackground,
  backgroundSize: "400% 100%",
  animationName: Kb,
  animationDuration: e.skeletonLoadingMotionDuration,
  animationTimingFunction: "ease",
  animationIterationCount: "infinite"
}), yi = (e, t) => Object.assign({
  width: t(e).mul(5).equal(),
  minWidth: t(e).mul(5).equal()
}, Wo(e)), Gb = (e) => {
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
    }, In(n)),
    [`${t}${t}-circle`]: {
      borderRadius: "50%"
    },
    [`${t}${t}-lg`]: Object.assign({}, In(a)),
    [`${t}${t}-sm`]: Object.assign({}, In(o))
  };
}, qb = (e) => {
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
    }, yi(t, s)),
    [`${n}-lg`]: Object.assign({}, yi(a, s)),
    [`${n}-sm`]: Object.assign({}, yi(o, s))
  };
}, _c = (e) => Object.assign({
  width: e
}, Wo(e)), Xb = (e) => {
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
    }, _c(o(r).mul(2).equal())), {
      [`${t}-path`]: {
        fill: "#bfbfbf"
      },
      [`${t}-svg`]: Object.assign(Object.assign({}, _c(r)), {
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
}, Si = (e, t, r) => {
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
}, Ci = (e, t) => Object.assign({
  width: t(e).mul(2).equal(),
  minWidth: t(e).mul(2).equal()
}, Wo(e)), Yb = (e) => {
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
    }, Ci(n, s))
  }, Si(e, n, r)), {
    [`${r}-lg`]: Object.assign({}, Ci(a, s))
  }), Si(e, a, `${r}-lg`)), {
    [`${r}-sm`]: Object.assign({}, Ci(o, s))
  }), Si(e, o, `${r}-sm`));
}, Zb = (e) => {
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
    borderRadius: b,
    titleHeight: p,
    blockRadius: g,
    paragraphLiHeight: S,
    controlHeightXS: h,
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
        }, In(l)),
        [`${r}-circle`]: {
          borderRadius: "50%"
        },
        [`${r}-lg`]: Object.assign({}, In(c)),
        [`${r}-sm`]: Object.assign({}, In(d))
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
              marginBlockStart: h
            }
          }
        },
        [`${a}> li:last-child:not(:first-child):not(:nth-child(2))`]: {
          width: "61%"
        }
      },
      [`&-round ${t}-content`]: {
        [`${n}, ${a} > li`]: {
          borderRadius: b
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
    }, Yb(e)), Gb(e)), qb(e)), Xb(e)),
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
      `]: Object.assign({}, Ub(e))
    }
  };
}, Qb = (e) => {
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
}, Gn = en("Skeleton", (e) => {
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
  return [Zb(n)];
}, Qb, {
  deprecatedTokens: [["color", "gradientFromColor"], ["colorGradientEnd", "gradientToColor"]]
}), Jb = (e) => {
  const {
    prefixCls: t,
    className: r,
    rootClassName: n,
    active: a,
    shape: o = "circle",
    size: i = "default"
  } = e, {
    getPrefixCls: s
  } = u.useContext(ft), l = s("skeleton", t), [c, d, f] = Gn(l), v = Cr(e, ["prefixCls", "className"]), m = Z(l, `${l}-element`, {
    [`${l}-active`]: a
  }, r, n, d, f);
  return c(/* @__PURE__ */ u.createElement("div", {
    className: m
  }, /* @__PURE__ */ u.createElement(Ho, Object.assign({
    prefixCls: `${l}-avatar`,
    shape: o,
    size: i
  }, v))));
}, ey = (e) => {
  const {
    prefixCls: t,
    className: r,
    rootClassName: n,
    active: a,
    block: o = !1,
    size: i = "default"
  } = e, {
    getPrefixCls: s
  } = u.useContext(ft), l = s("skeleton", t), [c, d, f] = Gn(l), v = Cr(e, ["prefixCls"]), m = Z(l, `${l}-element`, {
    [`${l}-active`]: a,
    [`${l}-block`]: o
  }, r, n, d, f);
  return c(/* @__PURE__ */ u.createElement("div", {
    className: m
  }, /* @__PURE__ */ u.createElement(Ho, Object.assign({
    prefixCls: `${l}-button`,
    size: i
  }, v))));
}, ty = "M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z", ry = (e) => {
  const {
    prefixCls: t,
    className: r,
    rootClassName: n,
    style: a,
    active: o
  } = e, {
    getPrefixCls: i
  } = u.useContext(ft), s = i("skeleton", t), [l, c, d] = Gn(s), f = Z(s, `${s}-element`, {
    [`${s}-active`]: o
  }, r, n, c, d);
  return l(/* @__PURE__ */ u.createElement("div", {
    className: f
  }, /* @__PURE__ */ u.createElement("div", {
    className: Z(`${s}-image`, r),
    style: a
  }, /* @__PURE__ */ u.createElement("svg", {
    viewBox: "0 0 1098 1024",
    xmlns: "http://www.w3.org/2000/svg",
    className: `${s}-image-svg`
  }, /* @__PURE__ */ u.createElement("title", null, "Image placeholder"), /* @__PURE__ */ u.createElement("path", {
    d: ty,
    className: `${s}-image-path`
  })))));
}, ny = (e) => {
  const {
    prefixCls: t,
    className: r,
    rootClassName: n,
    active: a,
    block: o,
    size: i = "default"
  } = e, {
    getPrefixCls: s
  } = u.useContext(ft), l = s("skeleton", t), [c, d, f] = Gn(l), v = Cr(e, ["prefixCls"]), m = Z(l, `${l}-element`, {
    [`${l}-active`]: a,
    [`${l}-block`]: o
  }, r, n, d, f);
  return c(/* @__PURE__ */ u.createElement("div", {
    className: m
  }, /* @__PURE__ */ u.createElement(Ho, Object.assign({
    prefixCls: `${l}-input`,
    size: i
  }, v))));
};
var ay = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM288 604a64 64 0 10128 0 64 64 0 10-128 0zm118-224a48 48 0 1096 0 48 48 0 10-96 0zm158 228a96 96 0 10192 0 96 96 0 10-192 0zm148-314a56 56 0 10112 0 56 56 0 10-112 0z" } }] }, name: "dot-chart", theme: "outlined" }, oy = function(t, r) {
  return /* @__PURE__ */ u.createElement(nr, _e({}, t, {
    ref: r,
    icon: ay
  }));
}, mf = /* @__PURE__ */ u.forwardRef(oy);
process.env.NODE_ENV !== "production" && (mf.displayName = "DotChartOutlined");
const iy = (e) => {
  const {
    prefixCls: t,
    className: r,
    rootClassName: n,
    style: a,
    active: o,
    children: i
  } = e, {
    getPrefixCls: s
  } = u.useContext(ft), l = s("skeleton", t), [c, d, f] = Gn(l), v = Z(l, `${l}-element`, {
    [`${l}-active`]: o
  }, d, r, n, f), m = i ?? /* @__PURE__ */ u.createElement(mf, null);
  return c(/* @__PURE__ */ u.createElement("div", {
    className: v
  }, /* @__PURE__ */ u.createElement("div", {
    className: Z(`${l}-image`, r),
    style: a
  }, m)));
}, sy = (e, t) => {
  const {
    width: r,
    rows: n = 2
  } = t;
  if (Array.isArray(r))
    return r[e];
  if (n - 1 === e)
    return r;
}, ly = (e) => {
  const {
    prefixCls: t,
    className: r,
    style: n,
    rows: a
  } = e, o = he(Array(a)).map((i, s) => (
    // eslint-disable-next-line react/no-array-index-key
    /* @__PURE__ */ u.createElement("li", {
      key: s,
      style: {
        width: sy(s, e)
      }
    })
  ));
  return /* @__PURE__ */ u.createElement("ul", {
    className: Z(t, r),
    style: n
  }, o);
}, cy = (e) => {
  let {
    prefixCls: t,
    className: r,
    width: n,
    style: a
  } = e;
  return (
    // biome-ignore lint/a11y/useHeadingContent: HOC here
    /* @__PURE__ */ u.createElement("h3", {
      className: Z(t, r),
      style: Object.assign({
        width: n
      }, a)
    })
  );
};
function Ei(e) {
  return e && typeof e == "object" ? e : {};
}
function uy(e, t) {
  return e && !t ? {
    size: "large",
    shape: "square"
  } : {
    size: "large",
    shape: "circle"
  };
}
function dy(e, t) {
  return !e && t ? {
    width: "38%"
  } : e && t ? {
    width: "50%"
  } : {};
}
function fy(e, t) {
  const r = {};
  return (!e || !t) && (r.width = "61%"), !e && t ? r.rows = 3 : r.rows = 2, r;
}
const gn = (e) => {
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
    skeleton: b
  } = u.useContext(ft), p = v("skeleton", t), [g, S, h] = Gn(p);
  if (r || !("loading" in e)) {
    const y = !!s, E = !!l, C = !!c;
    let O;
    if (y) {
      const $ = Object.assign(Object.assign({
        prefixCls: `${p}-avatar`
      }, uy(E, C)), Ei(s));
      O = /* @__PURE__ */ u.createElement("div", {
        className: `${p}-header`
      }, /* @__PURE__ */ u.createElement(Ho, Object.assign({}, $)));
    }
    let R;
    if (E || C) {
      let $;
      if (E) {
        const F = Object.assign(Object.assign({
          prefixCls: `${p}-title`
        }, dy(y, C)), Ei(l));
        $ = /* @__PURE__ */ u.createElement(cy, Object.assign({}, F));
      }
      let A;
      if (C) {
        const F = Object.assign(Object.assign({
          prefixCls: `${p}-paragraph`
        }, fy(y, E)), Ei(c));
        A = /* @__PURE__ */ u.createElement(ly, Object.assign({}, F));
      }
      R = /* @__PURE__ */ u.createElement("div", {
        className: `${p}-content`
      }, $, A);
    }
    const w = Z(p, {
      [`${p}-with-avatar`]: y,
      [`${p}-active`]: d,
      [`${p}-rtl`]: m === "rtl",
      [`${p}-round`]: f
    }, b == null ? void 0 : b.className, n, a, S, h);
    return g(/* @__PURE__ */ u.createElement("div", {
      className: w,
      style: Object.assign(Object.assign({}, b == null ? void 0 : b.style), o)
    }, O, R));
  }
  return i ?? null;
};
gn.Button = ey;
gn.Avatar = Jb;
gn.Input = ny;
gn.Image = ry;
gn.Node = iy;
process.env.NODE_ENV !== "production" && (gn.displayName = "Skeleton");
const vy = (e) => ({
  animationDuration: e,
  animationFillMode: "both"
}), gy = (e) => ({
  animationDuration: e,
  animationFillMode: "both"
}), pf = function(e, t, r, n) {
  const o = (arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1) ? "&" : "";
  return {
    [`
      ${o}${e}-enter,
      ${o}${e}-appear
    `]: Object.assign(Object.assign({}, vy(n)), {
      animationPlayState: "paused"
    }),
    [`${o}${e}-leave`]: Object.assign(Object.assign({}, gy(n)), {
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
}, my = new Rt("antSlideUpIn", {
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
}), py = new Rt("antSlideUpOut", {
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
}), hy = new Rt("antSlideDownIn", {
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
}), by = new Rt("antSlideDownOut", {
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
}), yy = new Rt("antSlideLeftIn", {
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
}), Sy = new Rt("antSlideLeftOut", {
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
}), Cy = new Rt("antSlideRightIn", {
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
}), Ey = new Rt("antSlideRightOut", {
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
}), xy = {
  "slide-up": {
    inKeyframes: my,
    outKeyframes: py
  },
  "slide-down": {
    inKeyframes: hy,
    outKeyframes: by
  },
  "slide-left": {
    inKeyframes: yy,
    outKeyframes: Sy
  },
  "slide-right": {
    inKeyframes: Cy,
    outKeyframes: Ey
  }
}, Tc = (e, t) => {
  const {
    antCls: r
  } = e, n = `${r}-${t}`, {
    inKeyframes: a,
    outKeyframes: o
  } = xy[t];
  return [pf(n, a, o, e.motionDurationMid), {
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
}, wy = new Rt("antZoomIn", {
  "0%": {
    transform: "scale(0.2)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    opacity: 1
  }
}), $y = new Rt("antZoomOut", {
  "0%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(0.2)",
    opacity: 0
  }
}), Nc = new Rt("antZoomBigIn", {
  "0%": {
    transform: "scale(0.8)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    opacity: 1
  }
}), Ic = new Rt("antZoomBigOut", {
  "0%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(0.8)",
    opacity: 0
  }
}), Oy = new Rt("antZoomUpIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "50% 0%"
  }
}), Ry = new Rt("antZoomUpOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "50% 0%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 0%",
    opacity: 0
  }
}), Py = new Rt("antZoomLeftIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "0% 50%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "0% 50%"
  }
}), _y = new Rt("antZoomLeftOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "0% 50%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "0% 50%",
    opacity: 0
  }
}), Ty = new Rt("antZoomRightIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "100% 50%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "100% 50%"
  }
}), Ny = new Rt("antZoomRightOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "100% 50%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "100% 50%",
    opacity: 0
  }
}), Iy = new Rt("antZoomDownIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 100%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "50% 100%"
  }
}), My = new Rt("antZoomDownOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "50% 100%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 100%",
    opacity: 0
  }
}), Ay = {
  zoom: {
    inKeyframes: wy,
    outKeyframes: $y
  },
  "zoom-big": {
    inKeyframes: Nc,
    outKeyframes: Ic
  },
  "zoom-big-fast": {
    inKeyframes: Nc,
    outKeyframes: Ic
  },
  "zoom-left": {
    inKeyframes: Py,
    outKeyframes: _y
  },
  "zoom-right": {
    inKeyframes: Ty,
    outKeyframes: Ny
  },
  "zoom-up": {
    inKeyframes: Oy,
    outKeyframes: Ry
  },
  "zoom-down": {
    inKeyframes: Iy,
    outKeyframes: My
  }
}, jy = (e, t) => {
  const {
    antCls: r
  } = e, n = `${r}-${t}`, {
    inKeyframes: a,
    outKeyframes: o
  } = Ay[t];
  return [pf(n, a, o, e.motionDurationFast), {
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
}, hf = function() {
  if (typeof navigator > "u" || typeof window > "u")
    return !1;
  var e = navigator.userAgent || navigator.vendor || window.opera;
  return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(e == null ? void 0 : e.substr(0, 4));
};
var Fy = ["prefixCls", "invalidate", "item", "renderItem", "responsive", "responsiveDisabled", "registerSize", "itemKey", "className", "style", "children", "display", "order", "component"], Sn = void 0;
function Ly(e, t) {
  var r = e.prefixCls, n = e.invalidate, a = e.item, o = e.renderItem, i = e.responsive, s = e.responsiveDisabled, l = e.registerSize, c = e.itemKey, d = e.className, f = e.style, v = e.children, m = e.display, b = e.order, p = e.component, g = p === void 0 ? "div" : p, S = Ye(e, Fy), h = i && !m;
  function y(w) {
    l(c, w);
  }
  u.useEffect(function() {
    return function() {
      y(null);
    };
  }, []);
  var E = o && a !== Sn ? o(a) : v, C;
  n || (C = {
    opacity: h ? 0 : 1,
    height: h ? 0 : Sn,
    overflowY: h ? "hidden" : Sn,
    order: i ? b : Sn,
    pointerEvents: h ? "none" : Sn,
    position: h ? "absolute" : Sn
  });
  var O = {};
  h && (O["aria-hidden"] = !0);
  var R = /* @__PURE__ */ u.createElement(g, _e({
    className: Z(!n && r, d),
    style: D(D({}, C), f)
  }, O, S, {
    ref: t
  }), E);
  return i && (R = /* @__PURE__ */ u.createElement(hr, {
    onResize: function($) {
      var A = $.offsetWidth;
      y(A);
    },
    disabled: s
  }, R)), R;
}
var ma = /* @__PURE__ */ u.forwardRef(Ly);
ma.displayName = "Item";
function Dy(e) {
  if (typeof MessageChannel > "u")
    Nt(e);
  else {
    var t = new MessageChannel();
    t.port1.onmessage = function() {
      return e();
    }, t.port2.postMessage(void 0);
  }
}
function zy() {
  var e = u.useRef(null), t = function(n) {
    e.current || (e.current = [], Dy(function() {
      Rv(function() {
        e.current.forEach(function(a) {
          a();
        }), e.current = null;
      });
    })), e.current.push(n);
  };
  return t;
}
function aa(e, t) {
  var r = u.useState(t), n = K(r, 2), a = n[0], o = n[1], i = kt(function(s) {
    e(function() {
      o(s);
    });
  });
  return [a, i];
}
var Po = /* @__PURE__ */ q.createContext(null), Vy = ["component"], By = ["className"], ky = ["className"], Hy = function(t, r) {
  var n = u.useContext(Po);
  if (!n) {
    var a = t.component, o = a === void 0 ? "div" : a, i = Ye(t, Vy);
    return /* @__PURE__ */ u.createElement(o, _e({}, i, {
      ref: r
    }));
  }
  var s = n.className, l = Ye(n, By), c = t.className, d = Ye(t, ky);
  return /* @__PURE__ */ u.createElement(Po.Provider, {
    value: null
  }, /* @__PURE__ */ u.createElement(ma, _e({
    ref: r,
    className: Z(s, c)
  }, l, d)));
}, bf = /* @__PURE__ */ u.forwardRef(Hy);
bf.displayName = "RawItem";
var Wy = ["prefixCls", "data", "renderItem", "renderRawItem", "itemKey", "itemWidth", "ssr", "style", "className", "maxCount", "renderRest", "renderRawRest", "suffix", "component", "itemComponent", "onVisibleChange"], yf = "responsive", Sf = "invalidate";
function Ky(e) {
  return "+ ".concat(e.length, " ...");
}
function Uy(e, t) {
  var r = e.prefixCls, n = r === void 0 ? "rc-overflow" : r, a = e.data, o = a === void 0 ? [] : a, i = e.renderItem, s = e.renderRawItem, l = e.itemKey, c = e.itemWidth, d = c === void 0 ? 10 : c, f = e.ssr, v = e.style, m = e.className, b = e.maxCount, p = e.renderRest, g = e.renderRawRest, S = e.suffix, h = e.component, y = h === void 0 ? "div" : h, E = e.itemComponent, C = e.onVisibleChange, O = Ye(e, Wy), R = f === "full", w = zy(), $ = aa(w, null), A = K($, 2), F = A[0], M = A[1], I = F || 0, T = aa(w, /* @__PURE__ */ new Map()), k = K(T, 2), N = k[0], x = k[1], _ = aa(w, 0), z = K(_, 2), L = z[0], B = z[1], X = aa(w, 0), W = K(X, 2), G = W[0], Q = W[1], Y = aa(w, 0), J = K(Y, 2), ne = J[0], se = J[1], xe = bt(null), de = K(xe, 2), ue = de[0], Ce = de[1], V = bt(null), le = K(V, 2), fe = le[0], Re = le[1], me = u.useMemo(function() {
    return fe === null && R ? Number.MAX_SAFE_INTEGER : fe || 0;
  }, [fe, F]), ae = bt(!1), te = K(ae, 2), re = te[0], be = te[1], ye = "".concat(n, "-item"), ge = Math.max(L, G), Pe = b === yf, ve = o.length && Pe, vt = b === Sf, it = ve || typeof b == "number" && o.length > b, $e = Yr(function() {
    var Te = o;
    return ve ? F === null && R ? Te = o : Te = o.slice(0, Math.min(o.length, I / d)) : typeof b == "number" && (Te = o.slice(0, b)), Te;
  }, [o, d, F, b, ve]), we = Yr(function() {
    return ve ? o.slice(me + 1) : o.slice($e.length);
  }, [o, $e, ve, me]), je = Gr(function(Te, pe) {
    var Ge;
    return typeof l == "function" ? l(Te) : (Ge = l && (Te == null ? void 0 : Te[l])) !== null && Ge !== void 0 ? Ge : pe;
  }, [l]), ze = Gr(i || function(Te) {
    return Te;
  }, [i]);
  function gt(Te, pe, Ge) {
    fe === Te && (pe === void 0 || pe === ue) || (Re(Te), Ge || (be(Te < o.length - 1), C == null || C(Te)), pe !== void 0 && Ce(pe));
  }
  function mt(Te, pe) {
    M(pe.clientWidth);
  }
  function wt(Te, pe) {
    x(function(Ge) {
      var pt = new Map(Ge);
      return pe === null ? pt.delete(Te) : pt.set(Te, pe), pt;
    });
  }
  function et(Te, pe) {
    Q(pe), B(G);
  }
  function Le(Te, pe) {
    se(pe);
  }
  function ie(Te) {
    return N.get(je($e[Te], Te));
  }
  Ct(function() {
    if (I && typeof ge == "number" && $e) {
      var Te = ne, pe = $e.length, Ge = pe - 1;
      if (!pe) {
        gt(0, null);
        return;
      }
      for (var pt = 0; pt < pe; pt += 1) {
        var We = ie(pt);
        if (R && (We = We || 0), We === void 0) {
          gt(pt - 1, void 0, !0);
          break;
        }
        if (Te += We, // Only one means `totalWidth` is the final width
        Ge === 0 && Te <= I || // Last two width will be the final width
        pt === Ge - 1 && Te + ie(Ge) <= I) {
          gt(Ge, null);
          break;
        } else if (Te + ge > I) {
          gt(pt - 1, Te - We - ne + G);
          break;
        }
      }
      S && ie(0) + ne > I && Ce(null);
    }
  }, [I, N, G, ne, je, $e]);
  var Ee = re && !!we.length, qe = {};
  ue !== null && ve && (qe = {
    position: "absolute",
    left: ue,
    top: 0
  });
  var Qe = {
    prefixCls: ye,
    responsive: ve,
    component: E,
    invalidate: vt
  }, St = s ? function(Te, pe) {
    var Ge = je(Te, pe);
    return /* @__PURE__ */ u.createElement(Po.Provider, {
      key: Ge,
      value: D(D({}, Qe), {}, {
        order: pe,
        item: Te,
        itemKey: Ge,
        registerSize: wt,
        display: pe <= me
      })
    }, s(Te, pe));
  } : function(Te, pe) {
    var Ge = je(Te, pe);
    return /* @__PURE__ */ u.createElement(ma, _e({}, Qe, {
      order: pe,
      key: Ge,
      item: Te,
      renderItem: ze,
      itemKey: Ge,
      registerSize: wt,
      display: pe <= me
    }));
  }, ot, He = {
    order: Ee ? me : Number.MAX_SAFE_INTEGER,
    className: "".concat(ye, "-rest"),
    registerSize: et,
    display: Ee
  };
  if (g)
    g && (ot = /* @__PURE__ */ u.createElement(Po.Provider, {
      value: D(D({}, Qe), He)
    }, g(we)));
  else {
    var ke = p || Ky;
    ot = /* @__PURE__ */ u.createElement(ma, _e({}, Qe, He), typeof ke == "function" ? ke(we) : ke);
  }
  var De = /* @__PURE__ */ u.createElement(y, _e({
    className: Z(!vt && n, m),
    style: v,
    ref: t
  }, O), $e.map(St), it ? ot : null, S && /* @__PURE__ */ u.createElement(ma, _e({}, Qe, {
    responsive: Pe,
    responsiveDisabled: !ve,
    order: me,
    className: "".concat(ye, "-suffix"),
    registerSize: Le,
    display: !0,
    style: qe
  }), S));
  return Pe && (De = /* @__PURE__ */ u.createElement(hr, {
    onResize: mt,
    disabled: !ve
  }, De)), De;
}
var Dr = /* @__PURE__ */ u.forwardRef(Uy);
Dr.displayName = "Overflow";
Dr.Item = bf;
Dr.RESPONSIVE = yf;
Dr.INVALIDATE = Sf;
function Gy(e) {
  var t = e.prefixCls, r = e.align, n = e.arrow, a = e.arrowPos, o = n || {}, i = o.className, s = o.content, l = a.x, c = l === void 0 ? 0 : l, d = a.y, f = d === void 0 ? 0 : d, v = u.useRef();
  if (!r || !r.points)
    return null;
  var m = {
    position: "absolute"
  };
  if (r.autoArrow !== !1) {
    var b = r.points[0], p = r.points[1], g = b[0], S = b[1], h = p[0], y = p[1];
    g === h || !["t", "b"].includes(g) ? m.top = f : g === "t" ? m.top = 0 : m.bottom = 0, S === y || !["l", "r"].includes(S) ? m.left = c : S === "l" ? m.left = 0 : m.right = 0;
  }
  return /* @__PURE__ */ u.createElement("div", {
    ref: v,
    className: Z("".concat(t, "-arrow"), i),
    style: m
  }, s);
}
function qy(e) {
  var t = e.prefixCls, r = e.open, n = e.zIndex, a = e.mask, o = e.motion;
  return a ? /* @__PURE__ */ u.createElement(fn, _e({}, o, {
    motionAppear: !0,
    visible: r,
    removeOnLeave: !0
  }), function(i) {
    var s = i.className;
    return /* @__PURE__ */ u.createElement("div", {
      style: {
        zIndex: n
      },
      className: Z("".concat(t, "-mask"), s)
    });
  }) : null;
}
var Cf = /* @__PURE__ */ u.memo(function(e) {
  var t = e.children;
  return t;
}, function(e, t) {
  return t.cache;
});
process.env.NODE_ENV !== "production" && (Cf.displayName = "PopupContent");
var Ef = /* @__PURE__ */ u.forwardRef(function(e, t) {
  var r = e.popup, n = e.className, a = e.prefixCls, o = e.style, i = e.target, s = e.onVisibleChanged, l = e.open, c = e.keepDom, d = e.fresh, f = e.onClick, v = e.mask, m = e.arrow, b = e.arrowPos, p = e.align, g = e.motion, S = e.maskMotion, h = e.forceRender, y = e.getPopupContainer, E = e.autoDestroy, C = e.portal, O = e.zIndex, R = e.onMouseEnter, w = e.onMouseLeave, $ = e.onPointerEnter, A = e.ready, F = e.offsetX, M = e.offsetY, I = e.offsetR, T = e.offsetB, k = e.onAlign, N = e.onPrepare, x = e.stretch, _ = e.targetWidth, z = e.targetHeight, L = typeof r == "function" ? r() : r, B = l || c, X = (y == null ? void 0 : y.length) > 0, W = u.useState(!y || !X), G = K(W, 2), Q = G[0], Y = G[1];
  if (Ct(function() {
    !Q && X && i && Y(!0);
  }, [Q, X, i]), !Q)
    return null;
  var J = "auto", ne = {
    left: "-1000vw",
    top: "-1000vh",
    right: J,
    bottom: J
  };
  if (A || !l) {
    var se, xe = p.points, de = p.dynamicInset || ((se = p._experimental) === null || se === void 0 ? void 0 : se.dynamicInset), ue = de && xe[0][1] === "r", Ce = de && xe[0][0] === "b";
    ue ? (ne.right = I, ne.left = J) : (ne.left = F, ne.right = J), Ce ? (ne.bottom = T, ne.top = J) : (ne.top = M, ne.bottom = J);
  }
  var V = {};
  return x && (x.includes("height") && z ? V.height = z : x.includes("minHeight") && z && (V.minHeight = z), x.includes("width") && _ ? V.width = _ : x.includes("minWidth") && _ && (V.minWidth = _)), l || (V.pointerEvents = "none"), /* @__PURE__ */ u.createElement(C, {
    open: h || B,
    getContainer: y && function() {
      return y(i);
    },
    autoDestroy: E
  }, /* @__PURE__ */ u.createElement(qy, {
    prefixCls: a,
    open: l,
    zIndex: O,
    mask: v,
    motion: S
  }), /* @__PURE__ */ u.createElement(hr, {
    onResize: k,
    disabled: !l
  }, function(le) {
    return /* @__PURE__ */ u.createElement(fn, _e({
      motionAppear: !0,
      motionEnter: !0,
      motionLeave: !0,
      removeOnLeave: !1,
      forceRender: h,
      leavedClassName: "".concat(a, "-hidden")
    }, g, {
      onAppearPrepare: N,
      onEnterPrepare: N,
      visible: l,
      onVisibleChanged: function(Re) {
        var me;
        g == null || (me = g.onVisibleChanged) === null || me === void 0 || me.call(g, Re), s(Re);
      }
    }), function(fe, Re) {
      var me = fe.className, ae = fe.style, te = Z(a, me, n);
      return /* @__PURE__ */ u.createElement("div", {
        ref: Pr(le, t, Re),
        className: te,
        style: D(D(D(D({
          "--arrow-x": "".concat(b.x || 0, "px"),
          "--arrow-y": "".concat(b.y || 0, "px")
        }, ne), V), ae), {}, {
          boxSizing: "border-box",
          zIndex: O
        }, o),
        onMouseEnter: R,
        onMouseLeave: w,
        onPointerEnter: $,
        onClick: f
      }, m && /* @__PURE__ */ u.createElement(Gy, {
        prefixCls: a,
        arrow: m,
        arrowPos: b,
        align: p
      }), /* @__PURE__ */ u.createElement(Cf, {
        cache: !l && !d
      }, L));
    });
  }));
});
process.env.NODE_ENV !== "production" && (Ef.displayName = "Popup");
var xf = /* @__PURE__ */ u.forwardRef(function(e, t) {
  var r = e.children, n = e.getTriggerDOMNode, a = dn(r), o = u.useCallback(function(s) {
    Is(t, n ? n(s) : s);
  }, [n]), i = Na(o, r.ref);
  return a ? /* @__PURE__ */ u.cloneElement(r, {
    ref: i
  }) : r;
});
process.env.NODE_ENV !== "production" && (xf.displayName = "TriggerWrapper");
var Mc = /* @__PURE__ */ u.createContext(null);
function Ac(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
function Xy(e, t, r, n) {
  return u.useMemo(function() {
    var a = Ac(r ?? t), o = Ac(n ?? t), i = new Set(a), s = new Set(o);
    return e && (i.has("hover") && (i.delete("hover"), i.add("click")), s.has("hover") && (s.delete("hover"), s.add("click"))), [i, s];
  }, [e, t, r, n]);
}
function Yy() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], r = arguments.length > 2 ? arguments[2] : void 0;
  return r ? e[0] === t[0] : e[0] === t[0] && e[1] === t[1];
}
function Zy(e, t, r, n) {
  for (var a = r.points, o = Object.keys(e), i = 0; i < o.length; i += 1) {
    var s, l = o[i];
    if (Yy((s = e[l]) === null || s === void 0 ? void 0 : s.points, a, n))
      return "".concat(t, "-placement-").concat(l);
  }
  return "";
}
function jc(e, t, r, n) {
  return t || (r ? {
    motionName: "".concat(e, "-").concat(r)
  } : n ? {
    motionName: n
  } : null);
}
function La(e) {
  return e.ownerDocument.defaultView;
}
function Cs(e) {
  for (var t = [], r = e == null ? void 0 : e.parentElement, n = ["hidden", "scroll", "clip", "auto"]; r; ) {
    var a = La(r).getComputedStyle(r), o = a.overflowX, i = a.overflowY, s = a.overflow;
    [o, i, s].some(function(l) {
      return n.includes(l);
    }) && t.push(r), r = r.parentElement;
  }
  return t;
}
function _a(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  return Number.isNaN(e) ? t : e;
}
function oa(e) {
  return _a(parseFloat(e), 0);
}
function Fc(e, t) {
  var r = D({}, e);
  return (t || []).forEach(function(n) {
    if (!(n instanceof HTMLBodyElement || n instanceof HTMLHtmlElement)) {
      var a = La(n).getComputedStyle(n), o = a.overflow, i = a.overflowClipMargin, s = a.borderTopWidth, l = a.borderBottomWidth, c = a.borderLeftWidth, d = a.borderRightWidth, f = n.getBoundingClientRect(), v = n.offsetHeight, m = n.clientHeight, b = n.offsetWidth, p = n.clientWidth, g = oa(s), S = oa(l), h = oa(c), y = oa(d), E = _a(Math.round(f.width / b * 1e3) / 1e3), C = _a(Math.round(f.height / v * 1e3) / 1e3), O = (b - p - h - y) * E, R = (v - m - g - S) * C, w = g * C, $ = S * C, A = h * E, F = y * E, M = 0, I = 0;
      if (o === "clip") {
        var T = oa(i);
        M = T * E, I = T * C;
      }
      var k = f.x + A - M, N = f.y + w - I, x = k + f.width + 2 * M - A - F - O, _ = N + f.height + 2 * I - w - $ - R;
      r.left = Math.max(r.left, k), r.top = Math.max(r.top, N), r.right = Math.min(r.right, x), r.bottom = Math.min(r.bottom, _);
    }
  }), r;
}
function Lc(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, r = "".concat(t), n = r.match(/^(.*)\%$/);
  return n ? e * (parseFloat(n[1]) / 100) : parseFloat(r);
}
function Dc(e, t) {
  var r = t || [], n = K(r, 2), a = n[0], o = n[1];
  return [Lc(e.width, a), Lc(e.height, o)];
}
function zc() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  return [e[0], e[1]];
}
function Cn(e, t) {
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
function Qy(e, t, r, n, a, o, i) {
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
  }), l = K(s, 2), c = l[0], d = l[1], f = u.useRef(0), v = u.useMemo(function() {
    return t ? Cs(t) : [];
  }, [t]), m = u.useRef({}), b = function() {
    m.current = {};
  };
  e || b();
  var p = kt(function() {
    if (t && r && e) {
      let Gt = function(qt, vr) {
        var Wr = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : te, pn = L.x + qt, Jn = L.y + vr, ea = pn + se, Ba = Jn + ne, Zo = Math.max(pn, Wr.left), Qo = Math.max(Jn, Wr.top), Jo = Math.min(ea, Wr.right), ei = Math.min(Ba, Wr.bottom);
        return Math.max(0, (Jo - Zo) * (ei - Qo));
      }, rn = function() {
        P = L.y + ke, H = P + ne, U = L.x + He, oe = U + se;
      };
      var h, y, E = t, C = E.ownerDocument, O = La(E), R = O.getComputedStyle(E), w = R.width, $ = R.height, A = R.position, F = E.style.left, M = E.style.top, I = E.style.right, T = E.style.bottom, k = E.style.overflow, N = D(D({}, a[n]), o), x = C.createElement("div");
      (h = E.parentElement) === null || h === void 0 || h.appendChild(x), x.style.left = "".concat(E.offsetLeft, "px"), x.style.top = "".concat(E.offsetTop, "px"), x.style.position = A, x.style.height = "".concat(E.offsetHeight, "px"), x.style.width = "".concat(E.offsetWidth, "px"), E.style.left = "0", E.style.top = "0", E.style.right = "auto", E.style.bottom = "auto", E.style.overflow = "hidden";
      var _;
      if (Array.isArray(r))
        _ = {
          x: r[0],
          y: r[1],
          width: 0,
          height: 0
        };
      else {
        var z = r.getBoundingClientRect();
        _ = {
          x: z.x,
          y: z.y,
          width: z.width,
          height: z.height
        };
      }
      var L = E.getBoundingClientRect(), B = C.documentElement, X = B.clientWidth, W = B.clientHeight, G = B.scrollWidth, Q = B.scrollHeight, Y = B.scrollTop, J = B.scrollLeft, ne = L.height, se = L.width, xe = _.height, de = _.width, ue = {
        left: 0,
        top: 0,
        right: X,
        bottom: W
      }, Ce = {
        left: -J,
        top: -Y,
        right: G - J,
        bottom: Q - Y
      }, V = N.htmlRegion, le = "visible", fe = "visibleFirst";
      V !== "scroll" && V !== fe && (V = le);
      var Re = V === fe, me = Fc(Ce, v), ae = Fc(ue, v), te = V === le ? ae : me, re = Re ? ae : te;
      E.style.left = "auto", E.style.top = "auto", E.style.right = "0", E.style.bottom = "0";
      var be = E.getBoundingClientRect();
      E.style.left = F, E.style.top = M, E.style.right = I, E.style.bottom = T, E.style.overflow = k, (y = E.parentElement) === null || y === void 0 || y.removeChild(x);
      var ye = _a(Math.round(se / parseFloat(w) * 1e3) / 1e3), ge = _a(Math.round(ne / parseFloat($) * 1e3) / 1e3);
      if (ye === 0 || ge === 0 || pa(r) && !Ys(r))
        return;
      var Pe = N.offset, ve = N.targetOffset, vt = Dc(L, Pe), it = K(vt, 2), $e = it[0], we = it[1], je = Dc(_, ve), ze = K(je, 2), gt = ze[0], mt = ze[1];
      _.x -= gt, _.y -= mt;
      var wt = N.points || [], et = K(wt, 2), Le = et[0], ie = et[1], Ee = zc(ie), qe = zc(Le), Qe = Cn(_, Ee), St = Cn(L, qe), ot = D({}, N), He = Qe.x - St.x + $e, ke = Qe.y - St.y + we, De = Gt(He, ke), Te = Gt(He, ke, ae), pe = Cn(_, ["t", "l"]), Ge = Cn(L, ["t", "l"]), pt = Cn(_, ["b", "r"]), We = Cn(L, ["b", "r"]), Ke = N.overflow || {}, rt = Ke.adjustX, ht = Ke.adjustY, _t = Ke.shiftX, zt = Ke.shiftY, Wt = function(vr) {
        return typeof vr == "boolean" ? vr : vr >= 0;
      }, P, H, U, oe;
      rn();
      var Ne = Wt(ht), Oe = qe[0] === Ee[0];
      if (Ne && qe[0] === "t" && (H > re.bottom || m.current.bt)) {
        var Ie = ke;
        Oe ? Ie -= ne - xe : Ie = pe.y - We.y - we;
        var Me = Gt(He, Ie), ct = Gt(He, Ie, ae);
        // Of course use larger one
        Me > De || Me === De && (!Re || // Choose recommend one
        ct >= Te) ? (m.current.bt = !0, ke = Ie, we = -we, ot.points = [Kr(qe, 0), Kr(Ee, 0)]) : m.current.bt = !1;
      }
      if (Ne && qe[0] === "b" && (P < re.top || m.current.tb)) {
        var Ze = ke;
        Oe ? Ze += ne - xe : Ze = pt.y - Ge.y - we;
        var Ve = Gt(He, Ze), $t = Gt(He, Ze, ae);
        // Of course use larger one
        Ve > De || Ve === De && (!Re || // Choose recommend one
        $t >= Te) ? (m.current.tb = !0, ke = Ze, we = -we, ot.points = [Kr(qe, 0), Kr(Ee, 0)]) : m.current.tb = !1;
      }
      var Kt = Wt(rt), Vt = qe[1] === Ee[1];
      if (Kt && qe[1] === "l" && (oe > re.right || m.current.rl)) {
        var ut = He;
        Vt ? ut -= se - de : ut = pe.x - We.x - $e;
        var Er = Gt(ut, ke), Br = Gt(ut, ke, ae);
        // Of course use larger one
        Er > De || Er === De && (!Re || // Choose recommend one
        Br >= Te) ? (m.current.rl = !0, He = ut, $e = -$e, ot.points = [Kr(qe, 1), Kr(Ee, 1)]) : m.current.rl = !1;
      }
      if (Kt && qe[1] === "r" && (U < re.left || m.current.lr)) {
        var Ut = He;
        Vt ? Ut += se - de : Ut = pt.x - Ge.x - $e;
        var kr = Gt(Ut, ke), qn = Gt(Ut, ke, ae);
        // Of course use larger one
        kr > De || kr === De && (!Re || // Choose recommend one
        qn >= Te) ? (m.current.lr = !0, He = Ut, $e = -$e, ot.points = [Kr(qe, 1), Kr(Ee, 1)]) : m.current.lr = !1;
      }
      rn();
      var ar = _t === !0 ? 0 : _t;
      typeof ar == "number" && (U < ae.left && (He -= U - ae.left - $e, _.x + de < ae.left + ar && (He += _.x - ae.left + de - ar)), oe > ae.right && (He -= oe - ae.right - $e, _.x > ae.right - ar && (He += _.x - ae.right + ar)));
      var dr = zt === !0 ? 0 : zt;
      typeof dr == "number" && (P < ae.top && (ke -= P - ae.top - we, _.y + xe < ae.top + dr && (ke += _.y - ae.top + xe - dr)), H > ae.bottom && (ke -= H - ae.bottom - we, _.y > ae.bottom - dr && (ke += _.y - ae.bottom + dr)));
      var Hr = L.x + He, _r = Hr + se, xr = L.y + ke, Tr = xr + ne, tn = _.x, Nr = tn + de, fr = _.y, Xn = fr + xe, Yn = Math.max(Hr, tn), Zn = Math.min(_r, Nr), mn = (Yn + Zn) / 2, dt = mn - Hr, Je = Math.max(xr, fr), st = Math.min(Tr, Xn), Mt = (Je + st) / 2, At = Mt - xr;
      i == null || i(t, ot);
      var wr = be.right - L.x - (He + L.width), $r = be.bottom - L.y - (ke + L.height);
      ye === 1 && (He = Math.round(He), wr = Math.round(wr)), ge === 1 && (ke = Math.round(ke), $r = Math.round($r));
      var Qn = {
        ready: !0,
        offsetX: He / ye,
        offsetY: ke / ge,
        offsetR: wr / ye,
        offsetB: $r / ge,
        arrowX: dt / ye,
        arrowY: At / ge,
        scaleX: ye,
        scaleY: ge,
        align: ot
      };
      d(Qn);
    }
  }), g = function() {
    f.current += 1;
    var y = f.current;
    Promise.resolve().then(function() {
      f.current === y && p();
    });
  }, S = function() {
    d(function(y) {
      return D(D({}, y), {}, {
        ready: !1
      });
    });
  };
  return Ct(S, [n]), Ct(function() {
    e || S();
  }, [e]), [c.ready, c.offsetX, c.offsetY, c.offsetR, c.offsetB, c.arrowX, c.arrowY, c.scaleX, c.scaleY, c.align, g];
}
function Jy(e, t, r, n, a) {
  Ct(function() {
    if (e && t && r) {
      let f = function() {
        n(), a();
      };
      var o = t, i = r, s = Cs(o), l = Cs(i), c = La(i), d = new Set([c].concat(he(s), he(l)));
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
function eS(e, t, r, n, a, o, i, s) {
  var l = u.useRef(e);
  l.current = e, u.useEffect(function() {
    if (t && n && (!a || o)) {
      var c = function(S) {
        var h = S.target;
        l.current && !i(h) && s(!1);
      }, d = La(n);
      d.addEventListener("mousedown", c, !0), d.addEventListener("contextmenu", c, !0);
      var f = wo(r);
      if (f && (f.addEventListener("mousedown", c, !0), f.addEventListener("contextmenu", c, !0)), process.env.NODE_ENV !== "production") {
        var v, m, b = r == null || (v = r.getRootNode) === null || v === void 0 ? void 0 : v.call(r), p = (m = n.getRootNode) === null || m === void 0 ? void 0 : m.call(n);
        Mn(b === p, "trigger element and popup element should in same shadow root.");
      }
      return function() {
        d.removeEventListener("mousedown", c, !0), d.removeEventListener("contextmenu", c, !0), f && (f.removeEventListener("mousedown", c, !0), f.removeEventListener("contextmenu", c, !0));
      };
    }
  }, [t, r, n, a, o]);
}
var tS = ["prefixCls", "children", "action", "showAction", "hideAction", "popupVisible", "defaultPopupVisible", "onPopupVisibleChange", "afterPopupVisibleChange", "mouseEnterDelay", "mouseLeaveDelay", "focusDelay", "blurDelay", "mask", "maskClosable", "getPopupContainer", "forceRender", "autoDestroy", "destroyPopupOnHide", "popup", "popupClassName", "popupStyle", "popupPlacement", "builtinPlacements", "popupAlign", "zIndex", "stretch", "getPopupClassNameFromAlign", "fresh", "alignPoint", "onPopupClick", "onPopupAlign", "arrow", "popupMotion", "maskMotion", "popupTransitionName", "popupAnimation", "maskTransitionName", "maskAnimation", "className", "getTriggerDOMNode"];
function rS() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Js, t = /* @__PURE__ */ u.forwardRef(function(r, n) {
    var a = r.prefixCls, o = a === void 0 ? "rc-trigger-popup" : a, i = r.children, s = r.action, l = s === void 0 ? "hover" : s, c = r.showAction, d = r.hideAction, f = r.popupVisible, v = r.defaultPopupVisible, m = r.onPopupVisibleChange, b = r.afterPopupVisibleChange, p = r.mouseEnterDelay, g = r.mouseLeaveDelay, S = g === void 0 ? 0.1 : g, h = r.focusDelay, y = r.blurDelay, E = r.mask, C = r.maskClosable, O = C === void 0 ? !0 : C, R = r.getPopupContainer, w = r.forceRender, $ = r.autoDestroy, A = r.destroyPopupOnHide, F = r.popup, M = r.popupClassName, I = r.popupStyle, T = r.popupPlacement, k = r.builtinPlacements, N = k === void 0 ? {} : k, x = r.popupAlign, _ = r.zIndex, z = r.stretch, L = r.getPopupClassNameFromAlign, B = r.fresh, X = r.alignPoint, W = r.onPopupClick, G = r.onPopupAlign, Q = r.arrow, Y = r.popupMotion, J = r.maskMotion, ne = r.popupTransitionName, se = r.popupAnimation, xe = r.maskTransitionName, de = r.maskAnimation, ue = r.className, Ce = r.getTriggerDOMNode, V = Ye(r, tS), le = $ || A || !1, fe = u.useState(!1), Re = K(fe, 2), me = Re[0], ae = Re[1];
    Ct(function() {
      ae(hf());
    }, []);
    var te = u.useRef({}), re = u.useContext(Mc), be = u.useMemo(function() {
      return {
        registerSubPopup: function(Fe, Et) {
          te.current[Fe] = Et, re == null || re.registerSubPopup(Fe, Et);
        }
      };
    }, [re]), ye = G0(), ge = u.useState(null), Pe = K(ge, 2), ve = Pe[0], vt = Pe[1], it = u.useRef(null), $e = kt(function(Se) {
      it.current = Se, pa(Se) && ve !== Se && vt(Se), re == null || re.registerSubPopup(ye, Se);
    }), we = u.useState(null), je = K(we, 2), ze = je[0], gt = je[1], mt = u.useRef(null), wt = kt(function(Se) {
      pa(Se) && ze !== Se && (gt(Se), mt.current = Se);
    }), et = u.Children.only(i), Le = (et == null ? void 0 : et.props) || {}, ie = {}, Ee = kt(function(Se) {
      var Fe, Et, Tt = ze;
      return (Tt == null ? void 0 : Tt.contains(Se)) || ((Fe = wo(Tt)) === null || Fe === void 0 ? void 0 : Fe.host) === Se || Se === Tt || (ve == null ? void 0 : ve.contains(Se)) || ((Et = wo(ve)) === null || Et === void 0 ? void 0 : Et.host) === Se || Se === ve || Object.values(te.current).some(function(xt) {
        return (xt == null ? void 0 : xt.contains(Se)) || Se === xt;
      });
    }), qe = jc(o, Y, se, ne), Qe = jc(o, J, de, xe), St = u.useState(v || !1), ot = K(St, 2), He = ot[0], ke = ot[1], De = f ?? He, Te = kt(function(Se) {
      f === void 0 && ke(Se);
    });
    Ct(function() {
      ke(f || !1);
    }, [f]);
    var pe = u.useRef(De);
    pe.current = De;
    var Ge = u.useRef([]);
    Ge.current = [];
    var pt = kt(function(Se) {
      var Fe;
      Te(Se), ((Fe = Ge.current[Ge.current.length - 1]) !== null && Fe !== void 0 ? Fe : De) !== Se && (Ge.current.push(Se), m == null || m(Se));
    }), We = u.useRef(), Ke = function() {
      clearTimeout(We.current);
    }, rt = function(Fe) {
      var Et = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      Ke(), Et === 0 ? pt(Fe) : We.current = setTimeout(function() {
        pt(Fe);
      }, Et * 1e3);
    };
    u.useEffect(function() {
      return Ke;
    }, []);
    var ht = u.useState(!1), _t = K(ht, 2), zt = _t[0], Wt = _t[1];
    Ct(function(Se) {
      (!Se || De) && Wt(!0);
    }, [De]);
    var P = u.useState(null), H = K(P, 2), U = H[0], oe = H[1], Ne = u.useState([0, 0]), Oe = K(Ne, 2), Ie = Oe[0], Me = Oe[1], ct = function(Fe) {
      Me([Fe.clientX, Fe.clientY]);
    }, Ze = Qy(De, ve, X ? Ie : ze, T, N, x, G), Ve = K(Ze, 11), $t = Ve[0], Kt = Ve[1], Vt = Ve[2], ut = Ve[3], Er = Ve[4], Br = Ve[5], Ut = Ve[6], kr = Ve[7], qn = Ve[8], ar = Ve[9], dr = Ve[10], Hr = Xy(me, l, c, d), _r = K(Hr, 2), xr = _r[0], Tr = _r[1], tn = xr.has("click"), Nr = Tr.has("click") || Tr.has("contextMenu"), fr = kt(function() {
      zt || dr();
    }), Xn = function() {
      pe.current && X && Nr && rt(!1);
    };
    Jy(De, ze, ve, fr, Xn), Ct(function() {
      fr();
    }, [Ie, T]), Ct(function() {
      De && !(N != null && N[T]) && fr();
    }, [JSON.stringify(x)]);
    var Yn = u.useMemo(function() {
      var Se = Zy(N, o, ar, X);
      return Z(Se, L == null ? void 0 : L(ar));
    }, [ar, L, N, o, X]);
    u.useImperativeHandle(n, function() {
      return {
        nativeElement: mt.current,
        popupElement: it.current,
        forceAlign: fr
      };
    });
    var Zn = u.useState(0), mn = K(Zn, 2), dt = mn[0], Je = mn[1], st = u.useState(0), Mt = K(st, 2), At = Mt[0], wr = Mt[1], $r = function() {
      if (z && ze) {
        var Fe = ze.getBoundingClientRect();
        Je(Fe.width), wr(Fe.height);
      }
    }, Qn = function() {
      $r(), fr();
    }, Gt = function(Fe) {
      Wt(!1), dr(), b == null || b(Fe);
    }, rn = function() {
      return new Promise(function(Fe) {
        $r(), oe(function() {
          return Fe;
        });
      });
    };
    Ct(function() {
      U && (dr(), U(), oe(null));
    }, [U]);
    function qt(Se, Fe, Et, Tt) {
      ie[Se] = function(xt) {
        var ka;
        Tt == null || Tt(xt), rt(Fe, Et);
        for (var ti = arguments.length, fl = new Array(ti > 1 ? ti - 1 : 0), Ha = 1; Ha < ti; Ha++)
          fl[Ha - 1] = arguments[Ha];
        (ka = Le[Se]) === null || ka === void 0 || ka.call.apply(ka, [Le, xt].concat(fl));
      };
    }
    (tn || Nr) && (ie.onClick = function(Se) {
      var Fe;
      pe.current && Nr ? rt(!1) : !pe.current && tn && (ct(Se), rt(!0));
      for (var Et = arguments.length, Tt = new Array(Et > 1 ? Et - 1 : 0), xt = 1; xt < Et; xt++)
        Tt[xt - 1] = arguments[xt];
      (Fe = Le.onClick) === null || Fe === void 0 || Fe.call.apply(Fe, [Le, Se].concat(Tt));
    }), eS(De, Nr, ze, ve, E, O, Ee, rt);
    var vr = xr.has("hover"), Wr = Tr.has("hover"), pn, Jn;
    vr && (qt("onMouseEnter", !0, p, function(Se) {
      ct(Se);
    }), qt("onPointerEnter", !0, p, function(Se) {
      ct(Se);
    }), pn = function(Fe) {
      (De || zt) && ve !== null && ve !== void 0 && ve.contains(Fe.target) && rt(!0, p);
    }, X && (ie.onMouseMove = function(Se) {
      var Fe;
      (Fe = Le.onMouseMove) === null || Fe === void 0 || Fe.call(Le, Se);
    })), Wr && (qt("onMouseLeave", !1, S), qt("onPointerLeave", !1, S), Jn = function() {
      rt(!1, S);
    }), xr.has("focus") && qt("onFocus", !0, h), Tr.has("focus") && qt("onBlur", !1, y), xr.has("contextMenu") && (ie.onContextMenu = function(Se) {
      var Fe;
      pe.current && Tr.has("contextMenu") ? rt(!1) : (ct(Se), rt(!0)), Se.preventDefault();
      for (var Et = arguments.length, Tt = new Array(Et > 1 ? Et - 1 : 0), xt = 1; xt < Et; xt++)
        Tt[xt - 1] = arguments[xt];
      (Fe = Le.onContextMenu) === null || Fe === void 0 || Fe.call.apply(Fe, [Le, Se].concat(Tt));
    }), ue && (ie.className = Z(Le.className, ue));
    var ea = D(D({}, Le), ie), Ba = {}, Zo = ["onContextMenu", "onClick", "onMouseDown", "onTouchStart", "onMouseEnter", "onMouseLeave", "onFocus", "onBlur"];
    Zo.forEach(function(Se) {
      V[Se] && (Ba[Se] = function() {
        for (var Fe, Et = arguments.length, Tt = new Array(Et), xt = 0; xt < Et; xt++)
          Tt[xt] = arguments[xt];
        (Fe = ea[Se]) === null || Fe === void 0 || Fe.call.apply(Fe, [ea].concat(Tt)), V[Se].apply(V, Tt);
      });
    });
    var Qo = /* @__PURE__ */ u.cloneElement(et, D(D({}, ea), Ba)), Jo = {
      x: Br,
      y: Ut
    }, ei = Q ? D({}, Q !== !0 ? Q : {}) : null;
    return /* @__PURE__ */ u.createElement(u.Fragment, null, /* @__PURE__ */ u.createElement(hr, {
      disabled: !De,
      ref: wt,
      onResize: Qn
    }, /* @__PURE__ */ u.createElement(xf, {
      getTriggerDOMNode: Ce
    }, Qo)), /* @__PURE__ */ u.createElement(Mc.Provider, {
      value: be
    }, /* @__PURE__ */ u.createElement(Ef, {
      portal: e,
      ref: $e,
      prefixCls: o,
      popup: F,
      className: Z(M, Yn),
      style: I,
      target: ze,
      onMouseEnter: pn,
      onMouseLeave: Jn,
      onPointerEnter: pn,
      zIndex: _,
      open: De,
      keepDom: zt,
      fresh: B,
      onClick: W,
      mask: E,
      motion: qe,
      maskMotion: Qe,
      onVisibleChanged: Gt,
      onPrepare: rn,
      forceRender: w,
      autoDestroy: le,
      getPopupContainer: R,
      align: ar,
      arrow: ei,
      arrowPos: Jo,
      ready: $t,
      offsetX: Kt,
      offsetY: Vt,
      offsetR: ut,
      offsetB: Er,
      onAlign: fr,
      stretch: z,
      targetWidth: dt / kr,
      targetHeight: At / qn
    })));
  });
  return process.env.NODE_ENV !== "production" && (t.displayName = "Trigger"), t;
}
const tl = rS(Js);
function Es(e, t, r) {
  return Z({
    [`${e}-status-success`]: t === "success",
    [`${e}-status-warning`]: t === "warning",
    [`${e}-status-error`]: t === "error",
    [`${e}-status-validating`]: t === "validating",
    [`${e}-has-feedback`]: r
  });
}
const wf = (e, t) => t || e, $f = function(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : void 0;
  var n, a;
  const {
    variant: o,
    [e]: i
  } = Ht(ft), s = Ht(Hb), l = i == null ? void 0 : i.variant;
  let c;
  typeof t < "u" ? c = t : r === !1 ? c = "borderless" : c = (a = (n = s ?? l) !== null && n !== void 0 ? n : o) !== null && a !== void 0 ? a : "outlined";
  const d = yp.includes(c);
  return [c, d];
};
var nS = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z" } }] }, name: "check", theme: "outlined" }, aS = function(t, r) {
  return /* @__PURE__ */ u.createElement(nr, _e({}, t, {
    ref: r,
    icon: nS
  }));
}, Of = /* @__PURE__ */ u.forwardRef(aS);
process.env.NODE_ENV !== "production" && (Of.displayName = "CheckOutlined");
function Rf(e) {
  var t = e.children, r = e.prefixCls, n = e.id, a = e.overlayInnerStyle, o = e.className, i = e.style;
  return /* @__PURE__ */ u.createElement("div", {
    className: Z("".concat(r, "-content"), o),
    style: i
  }, /* @__PURE__ */ u.createElement("div", {
    className: "".concat(r, "-inner"),
    id: n,
    role: "tooltip",
    style: a
  }, typeof t == "function" ? t() : t));
}
var En = {
  shiftX: 64,
  adjustY: 1
}, xn = {
  adjustX: 1,
  shiftY: !0
}, ir = [0, 0], oS = {
  left: {
    points: ["cr", "cl"],
    overflow: xn,
    offset: [-4, 0],
    targetOffset: ir
  },
  right: {
    points: ["cl", "cr"],
    overflow: xn,
    offset: [4, 0],
    targetOffset: ir
  },
  top: {
    points: ["bc", "tc"],
    overflow: En,
    offset: [0, -4],
    targetOffset: ir
  },
  bottom: {
    points: ["tc", "bc"],
    overflow: En,
    offset: [0, 4],
    targetOffset: ir
  },
  topLeft: {
    points: ["bl", "tl"],
    overflow: En,
    offset: [0, -4],
    targetOffset: ir
  },
  leftTop: {
    points: ["tr", "tl"],
    overflow: xn,
    offset: [-4, 0],
    targetOffset: ir
  },
  topRight: {
    points: ["br", "tr"],
    overflow: En,
    offset: [0, -4],
    targetOffset: ir
  },
  rightTop: {
    points: ["tl", "tr"],
    overflow: xn,
    offset: [4, 0],
    targetOffset: ir
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: En,
    offset: [0, 4],
    targetOffset: ir
  },
  rightBottom: {
    points: ["bl", "br"],
    overflow: xn,
    offset: [4, 0],
    targetOffset: ir
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: En,
    offset: [0, 4],
    targetOffset: ir
  },
  leftBottom: {
    points: ["br", "bl"],
    overflow: xn,
    offset: [-4, 0],
    targetOffset: ir
  }
}, iS = ["overlayClassName", "trigger", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "prefixCls", "children", "onVisibleChange", "afterVisibleChange", "transitionName", "animation", "motion", "placement", "align", "destroyTooltipOnHide", "defaultVisible", "getTooltipContainer", "overlayInnerStyle", "arrowContent", "overlay", "id", "showArrow"], sS = function(t, r) {
  var n = t.overlayClassName, a = t.trigger, o = a === void 0 ? ["hover"] : a, i = t.mouseEnterDelay, s = i === void 0 ? 0 : i, l = t.mouseLeaveDelay, c = l === void 0 ? 0.1 : l, d = t.overlayStyle, f = t.prefixCls, v = f === void 0 ? "rc-tooltip" : f, m = t.children, b = t.onVisibleChange, p = t.afterVisibleChange, g = t.transitionName, S = t.animation, h = t.motion, y = t.placement, E = y === void 0 ? "right" : y, C = t.align, O = C === void 0 ? {} : C, R = t.destroyTooltipOnHide, w = R === void 0 ? !1 : R, $ = t.defaultVisible, A = t.getTooltipContainer, F = t.overlayInnerStyle;
  t.arrowContent;
  var M = t.overlay, I = t.id, T = t.showArrow, k = T === void 0 ? !0 : T, N = Ye(t, iS), x = Be(null);
  No(r, function() {
    return x.current;
  });
  var _ = D({}, N);
  "visible" in t && (_.popupVisible = t.visible);
  var z = function() {
    return /* @__PURE__ */ u.createElement(Rf, {
      key: "content",
      prefixCls: v,
      id: I,
      overlayInnerStyle: F
    }, M);
  };
  return /* @__PURE__ */ u.createElement(tl, _e({
    popupClassName: n,
    prefixCls: v,
    popup: z,
    action: o,
    builtinPlacements: oS,
    popupPlacement: E,
    ref: x,
    popupAlign: O,
    getPopupContainer: A,
    onPopupVisibleChange: b,
    afterPopupVisibleChange: p,
    popupTransitionName: g,
    popupAnimation: S,
    popupMotion: h,
    defaultPopupVisible: $,
    autoDestroy: w,
    mouseLeaveDelay: c,
    popupStyle: d,
    mouseEnterDelay: s,
    arrow: k
  }, _), m);
};
const lS = /* @__PURE__ */ Vr(sS);
function cS(e) {
  const {
    sizePopupArrow: t,
    borderRadiusXS: r,
    borderRadiusOuter: n
  } = e, a = t / 2, o = 0, i = a, s = n * 1 / Math.sqrt(2), l = a - n * (1 - 1 / Math.sqrt(2)), c = a - r * (1 / Math.sqrt(2)), d = n * (Math.sqrt(2) - 1) + r * (1 / Math.sqrt(2)), f = 2 * a - c, v = d, m = 2 * a - s, b = l, p = 2 * a - o, g = i, S = a * Math.sqrt(2) + n * (Math.sqrt(2) - 2), h = n * (Math.sqrt(2) - 1), y = `polygon(${h}px 100%, 50% ${h}px, ${2 * a - h}px 100%, ${h}px 100%)`, E = `path('M ${o} ${i} A ${n} ${n} 0 0 0 ${s} ${l} L ${c} ${d} A ${r} ${r} 0 0 1 ${f} ${v} L ${m} ${b} A ${n} ${n} 0 0 0 ${p} ${g} Z')`;
  return {
    arrowShadowWidth: S,
    arrowPath: E,
    arrowPolygon: y
  };
}
const uS = (e, t, r) => {
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
        value: `0 0 ${ee(s)} 0`
      },
      transform: "translateY(50%) rotate(-135deg)",
      boxShadow: r,
      zIndex: 0,
      background: "transparent"
    }
  };
}, Pf = 8;
function _f(e) {
  const {
    contentRadius: t,
    limitVerticalRadius: r
  } = e, n = t > 12 ? t + 2 : 12;
  return {
    arrowOffsetHorizontal: n,
    arrowOffsetVertical: r ? Pf : n
  };
}
function ro(e, t) {
  return e ? t : {};
}
function dS(e, t, r) {
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
      }, uS(e, t, a)), {
        "&:before": {
          background: t
        }
      })]
    }, ro(!!l.top, {
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
    })), ro(!!l.bottom, {
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
    })), ro(!!l.left, {
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
    })), ro(!!l.right, {
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
function fS(e, t, r, n) {
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
const Vc = {
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
}, vS = {
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
function mS(e) {
  const {
    arrowWidth: t,
    autoAdjustOverflow: r,
    arrowPointAtCenter: n,
    offset: a,
    borderRadius: o,
    visibleFirst: i
  } = e, s = t / 2, l = {};
  return Object.keys(Vc).forEach((c) => {
    const d = n && vS[c] || Vc[c], f = Object.assign(Object.assign({}, d), {
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
    const v = _f({
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
    f.overflow = fS(c, v, t, r), i && (f.htmlRegion = "visibleFirst");
  }), l;
}
const pS = (e) => {
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
      [t]: Object.assign(Object.assign(Object.assign(Object.assign({}, Wn(e)), {
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
          padding: `${ee(e.calc(c).div(2).equal())} ${ee(d)}`,
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
            borderRadius: e.min(o, Pf)
          }
        },
        [`${t}-content`]: {
          position: "relative"
        }
      }), kp(e, (f, v) => {
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
    dS(e, "var(--antd-arrow-background-color)"),
    // Pure Render
    {
      [`${t}-pure`]: {
        position: "relative",
        maxWidth: "none",
        margin: e.sizePopupArrow
      }
    }
  ];
}, hS = (e) => Object.assign(Object.assign({
  zIndexPopup: e.zIndexPopupBase + 70
}, _f({
  contentRadius: e.borderRadius,
  limitVerticalRadius: !0
})), cS(Zt(e, {
  borderRadiusOuter: Math.min(e.borderRadiusOuter, 4)
}))), Tf = function(e) {
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
    return [pS(s), jy(n, "zoom-big-fast")];
  }, hS, {
    resetStyle: !1,
    // Popover use Tooltip as internal component. We do not need to handle this.
    injectStyle: t
  })(e);
}, bS = xo.map((e) => `${e}-inverse`);
function yS(e) {
  return (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0) ? [].concat(he(bS), he(xo)).includes(e) : xo.includes(e);
}
function Nf(e, t) {
  const r = yS(t), n = Z({
    [`${e}-${t}`]: t && r
  }), a = {}, o = {};
  return t && !r && (a.background = t, o["--antd-arrow-background-color"] = t), {
    className: n,
    overlayStyle: a,
    arrowStyle: o
  };
}
const SS = (e) => {
  const {
    prefixCls: t,
    className: r,
    placement: n = "top",
    title: a,
    color: o,
    overlayInnerStyle: i
  } = e, {
    getPrefixCls: s
  } = u.useContext(ft), l = s("tooltip", t), [c, d, f] = Tf(l), v = Nf(l, o), m = v.arrowStyle, b = Object.assign(Object.assign({}, i), v.overlayStyle), p = Z(d, f, l, `${l}-pure`, `${l}-placement-${n}`, r, v.className);
  return c(/* @__PURE__ */ u.createElement("div", {
    className: p,
    style: m
  }, /* @__PURE__ */ u.createElement("div", {
    className: `${l}-arrow`
  }), /* @__PURE__ */ u.createElement(Rf, Object.assign({}, e, {
    className: d,
    prefixCls: l,
    overlayInnerStyle: b
  }), a)));
};
var CS = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
    t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const ES = /* @__PURE__ */ u.forwardRef((e, t) => {
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
    arrow: b = !0,
    title: p,
    overlay: g,
    builtinPlacements: S,
    arrowPointAtCenter: h = !1,
    autoAdjustOverflow: y = !0
  } = e, E = !!b, [, C] = Rr(), {
    getPopupContainer: O,
    getPrefixCls: R,
    direction: w
  } = u.useContext(ft), $ = Ft("Tooltip"), A = u.useRef(null), F = () => {
    var ye;
    (ye = A.current) === null || ye === void 0 || ye.forceAlign();
  };
  u.useImperativeHandle(t, () => {
    var ye;
    return {
      forceAlign: F,
      forcePopupAlign: () => {
        $.deprecated(!1, "forcePopupAlign", "forceAlign"), F();
      },
      nativeElement: (ye = A.current) === null || ye === void 0 ? void 0 : ye.nativeElement
    };
  }), process.env.NODE_ENV !== "production" && ([["visible", "open"], ["defaultVisible", "defaultOpen"], ["onVisibleChange", "onOpenChange"], ["afterVisibleChange", "afterOpenChange"], ["arrowPointAtCenter", "arrow={{ pointAtCenter: true }}"]].forEach((ye) => {
    let [ge, Pe] = ye;
    $.deprecated(!(ge in e), ge, Pe);
  }), process.env.NODE_ENV !== "production" && $(!m || typeof m == "boolean", "usage", "`destroyTooltipOnHide` no need config `keepParent` anymore. Please use `boolean` value directly."), process.env.NODE_ENV !== "production" && $(!b || typeof b == "boolean" || !("arrowPointAtCenter" in b), "deprecated", "`arrowPointAtCenter` in `arrow` is deprecated. Please use `pointAtCenter` instead."));
  const [M, I] = cr(!1, {
    value: (r = e.open) !== null && r !== void 0 ? r : e.visible,
    defaultValue: (n = e.defaultOpen) !== null && n !== void 0 ? n : e.defaultVisible
  }), T = !p && !g && p !== 0, k = (ye) => {
    var ge, Pe;
    I(T ? !1 : ye), T || ((ge = e.onOpenChange) === null || ge === void 0 || ge.call(e, ye), (Pe = e.onVisibleChange) === null || Pe === void 0 || Pe.call(e, ye));
  }, N = u.useMemo(() => {
    var ye, ge;
    let Pe = h;
    return typeof b == "object" && (Pe = (ge = (ye = b.pointAtCenter) !== null && ye !== void 0 ? ye : b.arrowPointAtCenter) !== null && ge !== void 0 ? ge : h), S || mS({
      arrowPointAtCenter: Pe,
      autoAdjustOverflow: y,
      arrowWidth: E ? C.sizePopupArrow : 0,
      borderRadius: C.borderRadius,
      offset: C.marginXXS,
      visibleFirst: !0
    });
  }, [h, b, S, C]), x = u.useMemo(() => p === 0 ? p : g || p || "", [g, p]), _ = /* @__PURE__ */ u.createElement(Ss, {
    space: !0
  }, typeof x == "function" ? x() : x), {
    getPopupContainer: z,
    placement: L = "top",
    mouseEnterDelay: B = 0.1,
    mouseLeaveDelay: X = 0.1,
    overlayStyle: W,
    rootClassName: G
  } = e, Q = CS(e, ["getPopupContainer", "placement", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "rootClassName"]), Y = R("tooltip", a), J = R(), ne = e["data-popover-inject"];
  let se = M;
  !("open" in e) && !("visible" in e) && T && (se = !1);
  const xe = /* @__PURE__ */ u.isValidElement(d) && !Kd(d) ? d : /* @__PURE__ */ u.createElement("span", null, d), de = xe.props, ue = !de.className || typeof de.className == "string" ? Z(de.className, o || `${Y}-open`) : de.className, [Ce, V, le] = Tf(Y, !ne), fe = Nf(Y, l), Re = fe.arrowStyle, me = Object.assign(Object.assign({}, c), fe.overlayStyle), ae = Z(s, {
    [`${Y}-rtl`]: w === "rtl"
  }, fe.className, G, V, le), [te, re] = Hh("Tooltip", Q.zIndex), be = /* @__PURE__ */ u.createElement(lS, Object.assign({}, Q, {
    zIndex: te,
    showArrow: E,
    placement: L,
    mouseEnterDelay: B,
    mouseLeaveDelay: X,
    prefixCls: Y,
    overlayClassName: ae,
    overlayStyle: Object.assign(Object.assign({}, Re), W),
    getTooltipContainer: z || i || O,
    ref: A,
    builtinPlacements: N,
    overlay: _,
    visible: se,
    onVisibleChange: k,
    afterVisibleChange: f ?? v,
    overlayInnerStyle: me,
    arrowContent: /* @__PURE__ */ u.createElement("span", {
      className: `${Y}-arrow-content`
    }),
    motion: {
      motionName: Gd(J, "zoom-big-fast", e.transitionName),
      motionDeadline: 1e3
    },
    destroyTooltipOnHide: !!m
  }), se ? Vo(xe, {
    className: ue
  }) : xe);
  return Ce(/* @__PURE__ */ u.createElement(Xs.Provider, {
    value: re
  }, be));
}), Da = ES;
process.env.NODE_ENV !== "production" && (Da.displayName = "Tooltip");
Da._InternalPanelDoNotUseOrYouWillBeFired = SS;
var xS = ce.ESC, wS = ce.TAB;
function $S(e) {
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
      case xS:
        s();
        break;
      case wS: {
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
var OS = /* @__PURE__ */ Vr(function(e, t) {
  var r = e.overlay, n = e.arrow, a = e.prefixCls, o = Yr(function() {
    var s;
    return typeof r == "function" ? s = r() : s = r, s;
  }, [r]), i = Pr(t, o == null ? void 0 : o.ref);
  return /* @__PURE__ */ q.createElement(q.Fragment, null, n && /* @__PURE__ */ q.createElement("div", {
    className: "".concat(a, "-arrow")
  }), /* @__PURE__ */ q.cloneElement(o, {
    ref: dn(o) ? i : void 0
  }));
}), wn = {
  adjustX: 1,
  adjustY: 1
}, $n = [0, 0], RS = {
  topLeft: {
    points: ["bl", "tl"],
    overflow: wn,
    offset: [0, -4],
    targetOffset: $n
  },
  top: {
    points: ["bc", "tc"],
    overflow: wn,
    offset: [0, -4],
    targetOffset: $n
  },
  topRight: {
    points: ["br", "tr"],
    overflow: wn,
    offset: [0, -4],
    targetOffset: $n
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: wn,
    offset: [0, 4],
    targetOffset: $n
  },
  bottom: {
    points: ["tc", "bc"],
    overflow: wn,
    offset: [0, 4],
    targetOffset: $n
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: wn,
    offset: [0, 4],
    targetOffset: $n
  }
}, PS = ["arrow", "prefixCls", "transitionName", "animation", "align", "placement", "placements", "getPopupContainer", "showAction", "hideAction", "overlayClassName", "overlayStyle", "visible", "trigger", "autoFocus", "overlay", "children", "onVisibleChange"];
function _S(e, t) {
  var r, n = e.arrow, a = n === void 0 ? !1 : n, o = e.prefixCls, i = o === void 0 ? "rc-dropdown" : o, s = e.transitionName, l = e.animation, c = e.align, d = e.placement, f = d === void 0 ? "bottomLeft" : d, v = e.placements, m = v === void 0 ? RS : v, b = e.getPopupContainer, p = e.showAction, g = e.hideAction, S = e.overlayClassName, h = e.overlayStyle, y = e.visible, E = e.trigger, C = E === void 0 ? ["hover"] : E, O = e.autoFocus, R = e.overlay, w = e.children, $ = e.onVisibleChange, A = Ye(e, PS), F = q.useState(), M = K(F, 2), I = M[0], T = M[1], k = "visible" in e ? y : I, N = q.useRef(null), x = q.useRef(null), _ = q.useRef(null);
  q.useImperativeHandle(t, function() {
    return N.current;
  });
  var z = function(ne) {
    T(ne), $ == null || $(ne);
  };
  $S({
    visible: k,
    triggerRef: _,
    onVisibleChange: z,
    autoFocus: O,
    overlayRef: x
  });
  var L = function(ne) {
    var se = e.onOverlayClick;
    T(!1), se && se(ne);
  }, B = function() {
    return /* @__PURE__ */ q.createElement(OS, {
      ref: x,
      overlay: R,
      prefixCls: i,
      arrow: a
    });
  }, X = function() {
    return typeof R == "function" ? B : B();
  }, W = function() {
    var ne = e.minOverlayWidthMatchTrigger, se = e.alignPoint;
    return "minOverlayWidthMatchTrigger" in e ? ne : !se;
  }, G = function() {
    var ne = e.openClassName;
    return ne !== void 0 ? ne : "".concat(i, "-open");
  }, Q = /* @__PURE__ */ q.cloneElement(w, {
    className: Z((r = w.props) === null || r === void 0 ? void 0 : r.className, k && G()),
    ref: dn(w) ? Pr(_, w.ref) : void 0
  }), Y = g;
  return !Y && C.indexOf("contextMenu") !== -1 && (Y = ["click"]), /* @__PURE__ */ q.createElement(tl, _e({
    builtinPlacements: m
  }, A, {
    prefixCls: i,
    ref: N,
    popupClassName: Z(S, j({}, "".concat(i, "-show-arrow"), a)),
    popupStyle: h,
    action: C,
    showAction: p,
    hideAction: Y,
    popupPlacement: f,
    popupAlign: c,
    popupTransitionName: s,
    popupAnimation: l,
    popupVisible: k,
    stretch: W() ? "minWidth" : "",
    popup: X(),
    onPopupVisibleChange: z,
    onPopupClick: L,
    getPopupContainer: b
  }), Q);
}
const TS = /* @__PURE__ */ q.forwardRef(_S);
var If = /* @__PURE__ */ u.createContext(null);
function Mf(e, t) {
  return e === void 0 ? null : "".concat(e, "-").concat(t);
}
function Af(e) {
  var t = u.useContext(If);
  return Mf(t, e);
}
var NS = ["children", "locked"], Sr = /* @__PURE__ */ u.createContext(null);
function IS(e, t) {
  var r = D({}, e);
  return Object.keys(t).forEach(function(n) {
    var a = t[n];
    a !== void 0 && (r[n] = a);
  }), r;
}
function Ta(e) {
  var t = e.children, r = e.locked, n = Ye(e, NS), a = u.useContext(Sr), o = Io(function() {
    return IS(a, n);
  }, [a, n], function(i, s) {
    return !r && (i[0] !== s[0] || !Ca(i[1], s[1], !0));
  });
  return /* @__PURE__ */ u.createElement(Sr.Provider, {
    value: o
  }, t);
}
var MS = [], jf = /* @__PURE__ */ u.createContext(null);
function Ko() {
  return u.useContext(jf);
}
var Ff = /* @__PURE__ */ u.createContext(MS);
function za(e) {
  var t = u.useContext(Ff);
  return u.useMemo(function() {
    return e !== void 0 ? [].concat(he(t), [e]) : t;
  }, [t, e]);
}
var Lf = /* @__PURE__ */ u.createContext(null), rl = /* @__PURE__ */ u.createContext({});
function Bc(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  if (Ys(e)) {
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
function AS(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, r = he(e.querySelectorAll("*")).filter(function(n) {
    return Bc(n, t);
  });
  return Bc(e, t) && r.unshift(e), r;
}
var xs = ce.LEFT, ws = ce.RIGHT, $s = ce.UP, po = ce.DOWN, ho = ce.ENTER, Df = ce.ESC, ia = ce.HOME, sa = ce.END, kc = [$s, po, xs, ws];
function jS(e, t, r, n) {
  var a, o, i, s, l = "prev", c = "next", d = "children", f = "parent";
  if (e === "inline" && n === ho)
    return {
      inlineTrigger: !0
    };
  var v = (a = {}, j(a, $s, l), j(a, po, c), a), m = (o = {}, j(o, xs, r ? c : l), j(o, ws, r ? l : c), j(o, po, d), j(o, ho, d), o), b = (i = {}, j(i, $s, l), j(i, po, c), j(i, ho, d), j(i, Df, f), j(i, xs, r ? d : f), j(i, ws, r ? f : d), i), p = {
    inline: v,
    horizontal: m,
    vertical: b,
    inlineSub: v,
    horizontalSub: b,
    verticalSub: b
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
function FS(e) {
  for (var t = e; t; ) {
    if (t.getAttribute("data-menu-list"))
      return t;
    t = t.parentElement;
  }
  return null;
}
function LS(e, t) {
  for (var r = e || document.activeElement; r; ) {
    if (t.has(r))
      return r;
    r = r.parentElement;
  }
  return null;
}
function nl(e, t) {
  var r = AS(e, !0);
  return r.filter(function(n) {
    return t.has(n);
  });
}
function Hc(e, t, r) {
  var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 1;
  if (!e)
    return null;
  var a = nl(e, t), o = a.length, i = a.findIndex(function(s) {
    return r === s;
  });
  return n < 0 ? i === -1 ? i = o - 1 : i -= 1 : n > 0 && (i += 1), i = (i + o) % o, a[i];
}
var Os = function(t, r) {
  var n = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
  return t.forEach(function(i) {
    var s = document.querySelector("[data-menu-id='".concat(Mf(r, i), "']"));
    s && (n.add(s), o.set(s, i), a.set(i, s));
  }), {
    elements: n,
    key2element: a,
    element2key: o
  };
};
function DS(e, t, r, n, a, o, i, s, l, c) {
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
    var b = m.which;
    if ([].concat(kc, [ho, Df, ia, sa]).includes(b)) {
      var p = o(), g = Os(p, n), S = g, h = S.elements, y = S.key2element, E = S.element2key, C = y.get(t), O = LS(C, h), R = E.get(O), w = jS(e, i(R, !0).length === 1, r, b);
      if (!w && b !== ia && b !== sa)
        return;
      (kc.includes(b) || [ia, sa].includes(b)) && m.preventDefault();
      var $ = function(x) {
        if (x) {
          var _ = x, z = x.querySelector("a");
          z != null && z.getAttribute("href") && (_ = z);
          var L = E.get(x);
          s(L), v(), d.current = Nt(function() {
            f.current === L && _.focus();
          });
        }
      };
      if ([ia, sa].includes(b) || w.sibling || !O) {
        var A;
        !O || e === "inline" ? A = a.current : A = FS(O);
        var F, M = nl(A, h);
        b === ia ? F = M[0] : b === sa ? F = M[M.length - 1] : F = Hc(A, h, O, w.offset), $(F);
      } else if (w.inlineTrigger)
        l(R);
      else if (w.offset > 0)
        l(R, !0), v(), d.current = Nt(function() {
          g = Os(p, n);
          var N = O.getAttribute("aria-controls"), x = document.getElementById(N), _ = Hc(x, g.elements);
          $(_);
        }, 5);
      else if (w.offset < 0) {
        var I = i(R, !0), T = I[I.length - 2], k = y.get(T);
        l(T, !1), $(k);
      }
    }
    c == null || c(m);
  };
}
function zS(e) {
  Promise.resolve().then(e);
}
var al = "__RC_UTIL_PATH_SPLIT__", Wc = function(t) {
  return t.join(al);
}, VS = function(t) {
  return t.split(al);
}, Rs = "rc-menu-more";
function BS() {
  var e = u.useState({}), t = K(e, 2), r = t[1], n = Be(/* @__PURE__ */ new Map()), a = Be(/* @__PURE__ */ new Map()), o = u.useState([]), i = K(o, 2), s = i[0], l = i[1], c = Be(0), d = Be(!1), f = function() {
    d.current || r({});
  }, v = Gr(function(y, E) {
    process.env.NODE_ENV !== "production" && tt(!n.current.has(y), "Duplicated key '".concat(y, "' used in Menu by path [").concat(E.join(" > "), "]"));
    var C = Wc(E);
    a.current.set(C, y), n.current.set(y, C), c.current += 1;
    var O = c.current;
    zS(function() {
      O === c.current && f();
    });
  }, []), m = Gr(function(y, E) {
    var C = Wc(E);
    a.current.delete(C), n.current.delete(y);
  }, []), b = Gr(function(y) {
    l(y);
  }, []), p = Gr(function(y, E) {
    var C = n.current.get(y) || "", O = VS(C);
    return E && s.includes(O[0]) && O.unshift(Rs), O;
  }, [s]), g = Gr(function(y, E) {
    return y.filter(function(C) {
      return C !== void 0;
    }).some(function(C) {
      var O = p(C, !0);
      return O.includes(E);
    });
  }, [p]), S = function() {
    var E = he(n.current.keys());
    return s.length && E.push(Rs), E;
  }, h = Gr(function(y) {
    var E = "".concat(n.current.get(y)).concat(al), C = /* @__PURE__ */ new Set();
    return he(a.current.keys()).forEach(function(O) {
      O.startsWith(E) && C.add(a.current.get(O));
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
    refreshOverflowKeys: b,
    // Util
    isSubPathKey: g,
    getKeyPath: p,
    getKeys: S,
    getSubPathKeys: h
  };
}
function ca(e) {
  var t = u.useRef(e);
  t.current = e;
  var r = u.useCallback(function() {
    for (var n, a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return (n = t.current) === null || n === void 0 ? void 0 : n.call.apply(n, [t].concat(o));
  }, []);
  return e ? r : void 0;
}
var kS = Math.random().toFixed(5).toString().slice(2), Kc = 0;
function HS(e) {
  var t = cr(e, {
    value: e
  }), r = K(t, 2), n = r[0], a = r[1];
  return u.useEffect(function() {
    Kc += 1;
    var o = process.env.NODE_ENV === "test" ? "test" : "".concat(kS, "-").concat(Kc);
    a("rc-menu-uuid-".concat(o));
  }, []), n;
}
function zf(e, t, r, n) {
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
function Vf(e) {
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
function Bf(e) {
  var t = e.icon, r = e.props, n = e.children, a;
  return t === null || t === !1 ? null : (typeof t == "function" ? a = /* @__PURE__ */ u.createElement(t, D({}, r)) : typeof t != "boolean" && (a = t), a || n || null);
}
var WS = ["item"];
function _o(e) {
  var t = e.item, r = Ye(e, WS);
  return Object.defineProperty(r, "item", {
    get: function() {
      return tt(!1, "`info.item` is deprecated since we will move to function component that not provides React Node instance in future."), t;
    }
  }), r;
}
var KS = ["title", "attribute", "elementRef"], US = ["style", "className", "eventKey", "warnKey", "disabled", "itemIcon", "children", "role", "onMouseEnter", "onMouseLeave", "onClick", "onKeyDown", "onFocus"], GS = ["active"], qS = /* @__PURE__ */ function(e) {
  Qr(r, e);
  var t = Jr(r);
  function r() {
    return Lt(this, r), t.apply(this, arguments);
  }
  return Dt(r, [{
    key: "render",
    value: function() {
      var a = this.props, o = a.title, i = a.attribute, s = a.elementRef, l = Ye(a, KS), c = Cr(l, ["eventKey", "popupClassName", "popupOffset", "onTitleClick"]);
      return tt(!i, "`attribute` of Menu.Item is deprecated. Please pass attribute directly."), /* @__PURE__ */ u.createElement(Dr.Item, _e({}, i, {
        title: typeof o == "string" ? o : void 0
      }, c, {
        ref: s
      }));
    }
  }]), r;
}(u.Component), XS = /* @__PURE__ */ u.forwardRef(function(e, t) {
  var r, n = e.style, a = e.className, o = e.eventKey, i = e.warnKey, s = e.disabled, l = e.itemIcon, c = e.children, d = e.role, f = e.onMouseEnter, v = e.onMouseLeave, m = e.onClick, b = e.onKeyDown, p = e.onFocus, g = Ye(e, US), S = Af(o), h = u.useContext(Sr), y = h.prefixCls, E = h.onItemClick, C = h.disabled, O = h.overflowDisabled, R = h.itemIcon, w = h.selectedKeys, $ = h.onActive, A = u.useContext(rl), F = A._internalRenderMenuItem, M = "".concat(y, "-item"), I = u.useRef(), T = u.useRef(), k = C || s, N = Na(t, T), x = za(o);
  process.env.NODE_ENV !== "production" && i && tt(!1, "MenuItem should not leave undefined `key`.");
  var _ = function(de) {
    return {
      key: o,
      // Note: For legacy code is reversed which not like other antd component
      keyPath: he(x).reverse(),
      item: I.current,
      domEvent: de
    };
  }, z = l || R, L = zf(o, k, f, v), B = L.active, X = Ye(L, GS), W = w.includes(o), G = Vf(x.length), Q = function(de) {
    if (!k) {
      var ue = _(de);
      m == null || m(_o(ue)), E(ue);
    }
  }, Y = function(de) {
    if (b == null || b(de), de.which === ce.ENTER) {
      var ue = _(de);
      m == null || m(_o(ue)), E(ue);
    }
  }, J = function(de) {
    $(o), p == null || p(de);
  }, ne = {};
  e.role === "option" && (ne["aria-selected"] = W);
  var se = /* @__PURE__ */ u.createElement(qS, _e({
    ref: I,
    elementRef: N,
    role: d === null ? "none" : d || "menuitem",
    tabIndex: s ? null : -1,
    "data-menu-id": O && S ? null : S
  }, g, X, ne, {
    component: "li",
    "aria-disabled": s,
    style: D(D({}, G), n),
    className: Z(M, (r = {}, j(r, "".concat(M, "-active"), B), j(r, "".concat(M, "-selected"), W), j(r, "".concat(M, "-disabled"), k), r), a),
    onClick: Q,
    onKeyDown: Y,
    onFocus: J
  }), c, /* @__PURE__ */ u.createElement(Bf, {
    props: D(D({}, e), {}, {
      isSelected: W
    }),
    icon: z
  }));
  return F && (se = F(se, e, {
    selected: W
  })), se;
});
function YS(e, t) {
  var r = e.eventKey, n = Ko(), a = za(r);
  return u.useEffect(function() {
    if (n)
      return n.registerPath(r, a), function() {
        n.unregisterPath(r, a);
      };
  }, [a]), n ? null : /* @__PURE__ */ u.createElement(XS, _e({}, e, {
    ref: t
  }));
}
const Uo = /* @__PURE__ */ u.forwardRef(YS);
var ZS = ["className", "children"], QS = function(t, r) {
  var n = t.className, a = t.children, o = Ye(t, ZS), i = u.useContext(Sr), s = i.prefixCls, l = i.mode, c = i.rtl;
  return /* @__PURE__ */ u.createElement("ul", _e({
    className: Z(s, c && "".concat(s, "-rtl"), "".concat(s, "-sub"), "".concat(s, "-").concat(l === "inline" ? "inline" : "vertical"), n),
    role: "menu"
  }, o, {
    "data-menu-list": !0,
    ref: r
  }), a);
}, ol = /* @__PURE__ */ u.forwardRef(QS);
ol.displayName = "SubMenuList";
function il(e, t) {
  return Zr(e).map(function(r, n) {
    if (/* @__PURE__ */ u.isValidElement(r)) {
      var a, o, i = r.key, s = (a = (o = r.props) === null || o === void 0 ? void 0 : o.eventKey) !== null && a !== void 0 ? a : i, l = s == null;
      l && (s = "tmp_key-".concat([].concat(he(t), [n]).join("-")));
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
}, JS = {
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
}, eC = {
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
function kf(e, t, r) {
  if (t)
    return t;
  if (r)
    return r[e] || r.other;
}
var tC = {
  horizontal: "bottomLeft",
  vertical: "rightTop",
  "vertical-left": "rightTop",
  "vertical-right": "leftTop"
};
function rC(e) {
  var t = e.prefixCls, r = e.visible, n = e.children, a = e.popup, o = e.popupStyle, i = e.popupClassName, s = e.popupOffset, l = e.disabled, c = e.mode, d = e.onVisibleChange, f = u.useContext(Sr), v = f.getPopupContainer, m = f.rtl, b = f.subMenuOpenDelay, p = f.subMenuCloseDelay, g = f.builtinPlacements, S = f.triggerSubMenuAction, h = f.forceSubMenuRender, y = f.rootClassName, E = f.motion, C = f.defaultMotions, O = u.useState(!1), R = K(O, 2), w = R[0], $ = R[1], A = D(m ? D({}, eC) : D({}, JS), g), F = tC[c], M = kf(c, E, C), I = u.useRef(M);
  c !== "inline" && (I.current = M);
  var T = D(D({}, I.current), {}, {
    leavedClassName: "".concat(t, "-hidden"),
    removeOnLeave: !1,
    motionAppear: !0
  }), k = u.useRef();
  return u.useEffect(function() {
    return k.current = Nt(function() {
      $(r);
    }), function() {
      Nt.cancel(k.current);
    };
  }, [r]), /* @__PURE__ */ u.createElement(tl, {
    prefixCls: t,
    popupClassName: Z("".concat(t, "-popup"), j({}, "".concat(t, "-rtl"), m), i, y),
    stretch: c === "horizontal" ? "minWidth" : null,
    getPopupContainer: v,
    builtinPlacements: A,
    popupPlacement: F,
    popupVisible: w,
    popup: a,
    popupStyle: o,
    popupAlign: s && {
      offset: s
    },
    action: l ? [] : [S],
    mouseEnterDelay: b,
    mouseLeaveDelay: p,
    onPopupVisibleChange: d,
    forceRender: h,
    popupMotion: T,
    fresh: !0
  }, n);
}
function nC(e) {
  var t = e.id, r = e.open, n = e.keyPath, a = e.children, o = "inline", i = u.useContext(Sr), s = i.prefixCls, l = i.forceSubMenuRender, c = i.motion, d = i.defaultMotions, f = i.mode, v = u.useRef(!1);
  v.current = f === o;
  var m = u.useState(!v.current), b = K(m, 2), p = b[0], g = b[1], S = v.current ? r : !1;
  u.useEffect(function() {
    v.current && g(!1);
  }, [f]);
  var h = D({}, kf(o, c, d));
  n.length > 1 && (h.motionAppear = !1);
  var y = h.onVisibleChanged;
  return h.onVisibleChanged = function(E) {
    return !v.current && !E && g(!0), y == null ? void 0 : y(E);
  }, p ? null : /* @__PURE__ */ u.createElement(Ta, {
    mode: o,
    locked: !v.current
  }, /* @__PURE__ */ u.createElement(fn, _e({
    visible: S
  }, h, {
    forceRender: l,
    removeOnLeave: !1,
    leavedClassName: "".concat(s, "-hidden")
  }), function(E) {
    var C = E.className, O = E.style;
    return /* @__PURE__ */ u.createElement(ol, {
      id: t,
      className: C,
      style: O
    }, a);
  }));
}
var aC = ["style", "className", "title", "eventKey", "warnKey", "disabled", "internalPopupClose", "children", "itemIcon", "expandIcon", "popupClassName", "popupOffset", "popupStyle", "onClick", "onMouseEnter", "onMouseLeave", "onTitleClick", "onTitleMouseEnter", "onTitleMouseLeave"], oC = ["active"], iC = /* @__PURE__ */ u.forwardRef(function(e, t) {
  var r, n = e.style, a = e.className, o = e.title, i = e.eventKey, s = e.warnKey, l = e.disabled, c = e.internalPopupClose, d = e.children, f = e.itemIcon, v = e.expandIcon, m = e.popupClassName, b = e.popupOffset, p = e.popupStyle, g = e.onClick, S = e.onMouseEnter, h = e.onMouseLeave, y = e.onTitleClick, E = e.onTitleMouseEnter, C = e.onTitleMouseLeave, O = Ye(e, aC), R = Af(i), w = u.useContext(Sr), $ = w.prefixCls, A = w.mode, F = w.openKeys, M = w.disabled, I = w.overflowDisabled, T = w.activeKey, k = w.selectedKeys, N = w.itemIcon, x = w.expandIcon, _ = w.onItemClick, z = w.onOpenChange, L = w.onActive, B = u.useContext(rl), X = B._internalRenderSubMenuItem, W = u.useContext(Lf), G = W.isSubPathKey, Q = za(), Y = "".concat($, "-submenu"), J = M || l, ne = u.useRef(), se = u.useRef();
  process.env.NODE_ENV !== "production" && s && tt(!1, "SubMenu should not leave undefined `key`.");
  var xe = f ?? N, de = v ?? x, ue = F.includes(i), Ce = !I && ue, V = G(k, i), le = zf(i, J, E, C), fe = le.active, Re = Ye(le, oC), me = u.useState(!1), ae = K(me, 2), te = ae[0], re = ae[1], be = function(Le) {
    J || re(Le);
  }, ye = function(Le) {
    be(!0), S == null || S({
      key: i,
      domEvent: Le
    });
  }, ge = function(Le) {
    be(!1), h == null || h({
      key: i,
      domEvent: Le
    });
  }, Pe = u.useMemo(function() {
    return fe || (A !== "inline" ? te || G([T], i) : !1);
  }, [A, fe, T, te, i, G]), ve = Vf(Q.length), vt = function(Le) {
    J || (y == null || y({
      key: i,
      domEvent: Le
    }), A === "inline" && z(i, !ue));
  }, it = ca(function(et) {
    g == null || g(_o(et)), _(et);
  }), $e = function(Le) {
    A !== "inline" && z(i, Le);
  }, we = function() {
    L(i);
  }, je = R && "".concat(R, "-popup"), ze = /* @__PURE__ */ u.createElement("div", _e({
    role: "menuitem",
    style: ve,
    className: "".concat(Y, "-title"),
    tabIndex: J ? null : -1,
    ref: ne,
    title: typeof o == "string" ? o : null,
    "data-menu-id": I && R ? null : R,
    "aria-expanded": Ce,
    "aria-haspopup": !0,
    "aria-controls": je,
    "aria-disabled": J,
    onClick: vt,
    onFocus: we
  }, Re), o, /* @__PURE__ */ u.createElement(Bf, {
    icon: A !== "horizontal" ? de : void 0,
    props: D(D({}, e), {}, {
      isOpen: Ce,
      // [Legacy] Not sure why need this mark
      isSubMenu: !0
    })
  }, /* @__PURE__ */ u.createElement("i", {
    className: "".concat(Y, "-arrow")
  }))), gt = u.useRef(A);
  if (A !== "inline" && Q.length > 1 ? gt.current = "vertical" : gt.current = A, !I) {
    var mt = gt.current;
    ze = /* @__PURE__ */ u.createElement(rC, {
      mode: mt,
      prefixCls: Y,
      visible: !c && Ce && A !== "inline",
      popupClassName: m,
      popupOffset: b,
      popupStyle: p,
      popup: /* @__PURE__ */ u.createElement(
        Ta,
        {
          mode: mt === "horizontal" ? "vertical" : mt
        },
        /* @__PURE__ */ u.createElement(ol, {
          id: je,
          ref: se
        }, d)
      ),
      disabled: J,
      onVisibleChange: $e
    }, ze);
  }
  var wt = /* @__PURE__ */ u.createElement(Dr.Item, _e({
    ref: t,
    role: "none"
  }, O, {
    component: "li",
    style: n,
    className: Z(Y, "".concat(Y, "-").concat(A), a, (r = {}, j(r, "".concat(Y, "-open"), Ce), j(r, "".concat(Y, "-active"), Pe), j(r, "".concat(Y, "-selected"), V), j(r, "".concat(Y, "-disabled"), J), r)),
    onMouseEnter: ye,
    onMouseLeave: ge
  }), ze, !I && /* @__PURE__ */ u.createElement(nC, {
    id: je,
    open: Ce,
    keyPath: Q
  }, d));
  return X && (wt = X(wt, e, {
    selected: V,
    active: Pe,
    open: Ce,
    disabled: J
  })), /* @__PURE__ */ u.createElement(Ta, {
    onItemClick: it,
    mode: A === "horizontal" ? "vertical" : A,
    itemIcon: xe,
    expandIcon: de
  }, wt);
}), Go = /* @__PURE__ */ u.forwardRef(function(e, t) {
  var r = e.eventKey, n = e.children, a = za(r), o = il(n, a), i = Ko();
  u.useEffect(function() {
    if (i)
      return i.registerPath(r, a), function() {
        i.unregisterPath(r, a);
      };
  }, [a]);
  var s;
  return i ? s = o : s = /* @__PURE__ */ u.createElement(iC, _e({
    ref: t
  }, e), o), /* @__PURE__ */ u.createElement(Ff.Provider, {
    value: a
  }, s);
});
process.env.NODE_ENV !== "production" && (Go.displayName = "SubMenu");
function Hf(e) {
  var t = e.className, r = e.style, n = u.useContext(Sr), a = n.prefixCls, o = Ko();
  return o ? null : /* @__PURE__ */ u.createElement("li", {
    role: "separator",
    className: Z("".concat(a, "-item-divider"), t),
    style: r
  });
}
var sC = ["className", "title", "eventKey", "children"], lC = /* @__PURE__ */ u.forwardRef(function(e, t) {
  var r = e.className, n = e.title;
  e.eventKey;
  var a = e.children, o = Ye(e, sC), i = u.useContext(Sr), s = i.prefixCls, l = "".concat(s, "-item-group");
  return /* @__PURE__ */ u.createElement("li", _e({
    ref: t,
    role: "presentation"
  }, o, {
    onClick: function(d) {
      return d.stopPropagation();
    },
    className: Z(l, r)
  }), /* @__PURE__ */ u.createElement("div", {
    role: "presentation",
    className: "".concat(l, "-title"),
    title: typeof n == "string" ? n : void 0
  }, n), /* @__PURE__ */ u.createElement("ul", {
    role: "group",
    className: "".concat(l, "-list")
  }, a));
}), sl = /* @__PURE__ */ u.forwardRef(function(e, t) {
  var r = e.eventKey, n = e.children, a = za(r), o = il(n, a), i = Ko();
  return i ? o : /* @__PURE__ */ u.createElement(lC, _e({
    ref: t
  }, Cr(e, ["warnKey"])), o);
});
process.env.NODE_ENV !== "production" && (sl.displayName = "MenuItemGroup");
var cC = ["label", "children", "key", "type"];
function Ps(e, t) {
  var r = t.item, n = t.group, a = t.submenu, o = t.divider;
  return (e || []).map(function(i, s) {
    if (i && Ae(i) === "object") {
      var l = i, c = l.label, d = l.children, f = l.key, v = l.type, m = Ye(l, cC), b = f ?? "tmp-".concat(s);
      return d || v === "group" ? v === "group" ? /* @__PURE__ */ u.createElement(n, _e({
        key: b
      }, m, {
        title: c
      }), Ps(d, t)) : /* @__PURE__ */ u.createElement(a, _e({
        key: b
      }, m, {
        title: c
      }), Ps(d, t)) : v === "divider" ? /* @__PURE__ */ u.createElement(o, _e({
        key: b
      }, m)) : /* @__PURE__ */ u.createElement(r, _e({
        key: b
      }, m), c);
    }
    return null;
  }).filter(function(i) {
    return i;
  });
}
function Uc(e, t, r, n) {
  var a = e, o = D({
    divider: Hf,
    item: Uo,
    group: sl,
    submenu: Go
  }, n);
  return t && (a = Ps(t, o)), il(a, r);
}
var uC = ["prefixCls", "rootClassName", "style", "className", "tabIndex", "items", "children", "direction", "id", "mode", "inlineCollapsed", "disabled", "disabledOverflow", "subMenuOpenDelay", "subMenuCloseDelay", "forceSubMenuRender", "defaultOpenKeys", "openKeys", "activeKey", "defaultActiveFirst", "selectable", "multiple", "defaultSelectedKeys", "selectedKeys", "onSelect", "onDeselect", "inlineIndent", "motion", "defaultMotions", "triggerSubMenuAction", "builtinPlacements", "itemIcon", "expandIcon", "overflowedIndicator", "overflowedIndicatorPopupClassName", "getPopupContainer", "onClick", "onOpenChange", "onKeyDown", "openAnimation", "openTransitionName", "_internalRenderMenuItem", "_internalRenderSubMenuItem", "_internalComponents"], nn = [], dC = /* @__PURE__ */ u.forwardRef(function(e, t) {
  var r, n, a = e, o = a.prefixCls, i = o === void 0 ? "rc-menu" : o, s = a.rootClassName, l = a.style, c = a.className, d = a.tabIndex, f = d === void 0 ? 0 : d, v = a.items, m = a.children, b = a.direction, p = a.id, g = a.mode, S = g === void 0 ? "vertical" : g, h = a.inlineCollapsed, y = a.disabled, E = a.disabledOverflow, C = a.subMenuOpenDelay, O = C === void 0 ? 0.1 : C, R = a.subMenuCloseDelay, w = R === void 0 ? 0.1 : R, $ = a.forceSubMenuRender, A = a.defaultOpenKeys, F = a.openKeys, M = a.activeKey, I = a.defaultActiveFirst, T = a.selectable, k = T === void 0 ? !0 : T, N = a.multiple, x = N === void 0 ? !1 : N, _ = a.defaultSelectedKeys, z = a.selectedKeys, L = a.onSelect, B = a.onDeselect, X = a.inlineIndent, W = X === void 0 ? 24 : X, G = a.motion, Q = a.defaultMotions, Y = a.triggerSubMenuAction, J = Y === void 0 ? "hover" : Y, ne = a.builtinPlacements, se = a.itemIcon, xe = a.expandIcon, de = a.overflowedIndicator, ue = de === void 0 ? "..." : de, Ce = a.overflowedIndicatorPopupClassName, V = a.getPopupContainer, le = a.onClick, fe = a.onOpenChange, Re = a.onKeyDown, me = a.openAnimation, ae = a.openTransitionName, te = a._internalRenderMenuItem, re = a._internalRenderSubMenuItem, be = a._internalComponents, ye = Ye(a, uC), ge = u.useMemo(function() {
    return [Uc(m, v, nn, be), Uc(m, v, nn, {})];
  }, [m, v, be]), Pe = K(ge, 2), ve = Pe[0], vt = Pe[1], it = u.useState(!1), $e = K(it, 2), we = $e[0], je = $e[1], ze = u.useRef(), gt = HS(p), mt = b === "rtl";
  process.env.NODE_ENV !== "production" && tt(!me && !ae, "`openAnimation` and `openTransitionName` is removed. Please use `motion` or `defaultMotion` instead.");
  var wt = cr(A, {
    value: F,
    postState: function(Je) {
      return Je || nn;
    }
  }), et = K(wt, 2), Le = et[0], ie = et[1], Ee = function(Je) {
    var st = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    function Mt() {
      ie(Je), fe == null || fe(Je);
    }
    st ? Pv(Mt) : Mt();
  }, qe = u.useState(Le), Qe = K(qe, 2), St = Qe[0], ot = Qe[1], He = u.useRef(!1), ke = u.useMemo(function() {
    return (S === "inline" || S === "vertical") && h ? ["vertical", h] : [S, !1];
  }, [S, h]), De = K(ke, 2), Te = De[0], pe = De[1], Ge = Te === "inline", pt = u.useState(Te), We = K(pt, 2), Ke = We[0], rt = We[1], ht = u.useState(pe), _t = K(ht, 2), zt = _t[0], Wt = _t[1];
  u.useEffect(function() {
    rt(Te), Wt(pe), He.current && (Ge ? ie(St) : Ee(nn));
  }, [Te, pe]);
  var P = u.useState(0), H = K(P, 2), U = H[0], oe = H[1], Ne = U >= ve.length - 1 || Ke !== "horizontal" || E;
  u.useEffect(function() {
    Ge && ot(Le);
  }, [Le]), u.useEffect(function() {
    return He.current = !0, function() {
      He.current = !1;
    };
  }, []);
  var Oe = BS(), Ie = Oe.registerPath, Me = Oe.unregisterPath, ct = Oe.refreshOverflowKeys, Ze = Oe.isSubPathKey, Ve = Oe.getKeyPath, $t = Oe.getKeys, Kt = Oe.getSubPathKeys, Vt = u.useMemo(function() {
    return {
      registerPath: Ie,
      unregisterPath: Me
    };
  }, [Ie, Me]), ut = u.useMemo(function() {
    return {
      isSubPathKey: Ze
    };
  }, [Ze]);
  u.useEffect(function() {
    ct(Ne ? nn : ve.slice(U + 1).map(function(dt) {
      return dt.key;
    }));
  }, [U, Ne]);
  var Er = cr(M || I && ((r = ve[0]) === null || r === void 0 ? void 0 : r.key), {
    value: M
  }), Br = K(Er, 2), Ut = Br[0], kr = Br[1], qn = ca(function(dt) {
    kr(dt);
  }), ar = ca(function() {
    kr(void 0);
  });
  No(t, function() {
    return {
      list: ze.current,
      focus: function(Je) {
        var st, Mt = $t(), At = Os(Mt, gt), wr = At.elements, $r = At.key2element, Qn = At.element2key, Gt = nl(ze.current, wr), rn = Ut ?? (Gt[0] ? Qn.get(Gt[0]) : (st = ve.find(function(Wr) {
          return !Wr.props.disabled;
        })) === null || st === void 0 ? void 0 : st.key), qt = $r.get(rn);
        if (rn && qt) {
          var vr;
          qt == null || (vr = qt.focus) === null || vr === void 0 || vr.call(qt, Je);
        }
      }
    };
  });
  var dr = cr(_ || [], {
    value: z,
    // Legacy convert key to array
    postState: function(Je) {
      return Array.isArray(Je) ? Je : Je == null ? nn : [Je];
    }
  }), Hr = K(dr, 2), _r = Hr[0], xr = Hr[1], Tr = function(Je) {
    if (k) {
      var st = Je.key, Mt = _r.includes(st), At;
      x ? Mt ? At = _r.filter(function($r) {
        return $r !== st;
      }) : At = [].concat(he(_r), [st]) : At = [st], xr(At);
      var wr = D(D({}, Je), {}, {
        selectedKeys: At
      });
      Mt ? B == null || B(wr) : L == null || L(wr);
    }
    !x && Le.length && Ke !== "inline" && Ee(nn);
  }, tn = ca(function(dt) {
    le == null || le(_o(dt)), Tr(dt);
  }), Nr = ca(function(dt, Je) {
    var st = Le.filter(function(At) {
      return At !== dt;
    });
    if (Je)
      st.push(dt);
    else if (Ke !== "inline") {
      var Mt = Kt(dt);
      st = st.filter(function(At) {
        return !Mt.has(At);
      });
    }
    Ca(Le, st, !0) || Ee(st, !0);
  }), fr = function(Je, st) {
    var Mt = st ?? !Le.includes(Je);
    Nr(Je, Mt);
  }, Xn = DS(Ke, Ut, mt, gt, ze, $t, Ve, kr, fr, Re);
  u.useEffect(function() {
    je(!0);
  }, []);
  var Yn = u.useMemo(function() {
    return {
      _internalRenderMenuItem: te,
      _internalRenderSubMenuItem: re
    };
  }, [te, re]), Zn = Ke !== "horizontal" || E ? ve : (
    // Need wrap for overflow dropdown that do not response for open
    ve.map(function(dt, Je) {
      return (
        // Always wrap provider to avoid sub node re-mount
        /* @__PURE__ */ u.createElement(Ta, {
          key: dt.key,
          overflowDisabled: Je > U
        }, dt)
      );
    })
  ), mn = /* @__PURE__ */ u.createElement(Dr, _e({
    id: p,
    ref: ze,
    prefixCls: "".concat(i, "-overflow"),
    component: "ul",
    itemComponent: Uo,
    className: Z(i, "".concat(i, "-root"), "".concat(i, "-").concat(Ke), c, (n = {}, j(n, "".concat(i, "-inline-collapsed"), zt), j(n, "".concat(i, "-rtl"), mt), n), s),
    dir: b,
    style: l,
    role: "menu",
    tabIndex: f,
    data: Zn,
    renderRawItem: function(Je) {
      return Je;
    },
    renderRawRest: function(Je) {
      var st = Je.length, Mt = st ? ve.slice(-st) : null;
      return /* @__PURE__ */ u.createElement(Go, {
        eventKey: Rs,
        title: ue,
        disabled: Ne,
        internalPopupClose: st === 0,
        popupClassName: Ce
      }, Mt);
    },
    maxCount: Ke !== "horizontal" || E ? Dr.INVALIDATE : Dr.RESPONSIVE,
    ssr: "full",
    "data-menu-list": !0,
    onVisibleChange: function(Je) {
      oe(Je);
    },
    onKeyDown: Xn
  }, ye));
  return /* @__PURE__ */ u.createElement(rl.Provider, {
    value: Yn
  }, /* @__PURE__ */ u.createElement(If.Provider, {
    value: gt
  }, /* @__PURE__ */ u.createElement(Ta, {
    prefixCls: i,
    rootClassName: s,
    mode: Ke,
    openKeys: Le,
    rtl: mt,
    disabled: y,
    motion: we ? G : null,
    defaultMotions: we ? Q : null,
    activeKey: Ut,
    onActive: qn,
    onInactive: ar,
    selectedKeys: _r,
    inlineIndent: W,
    subMenuOpenDelay: O,
    subMenuCloseDelay: w,
    forceSubMenuRender: $,
    builtinPlacements: ne,
    triggerSubMenuAction: J,
    getPopupContainer: V,
    itemIcon: se,
    expandIcon: xe,
    onItemClick: tn,
    onOpenChange: Nr
  }, /* @__PURE__ */ u.createElement(Lf.Provider, {
    value: ut
  }, mn), /* @__PURE__ */ u.createElement("div", {
    style: {
      display: "none"
    },
    "aria-hidden": !0
  }, /* @__PURE__ */ u.createElement(jf.Provider, {
    value: Vt
  }, vt)))));
}), Va = dC;
Va.Item = Uo;
Va.SubMenu = Go;
Va.ItemGroup = sl;
Va.Divider = Hf;
var fC = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z" } }] }, name: "ellipsis", theme: "outlined" }, vC = function(t, r) {
  return /* @__PURE__ */ u.createElement(nr, _e({}, t, {
    ref: r,
    icon: fC
  }));
}, Wf = /* @__PURE__ */ u.forwardRef(vC);
process.env.NODE_ENV !== "production" && (Wf.displayName = "EllipsisOutlined");
function gC(e) {
  return Zt(e, {
    inputAffixPadding: e.paddingXXS
  });
}
const mC = (e) => {
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
    colorPrimary: b,
    controlOutlineWidth: p,
    controlOutline: g,
    colorErrorOutline: S,
    colorWarningOutline: h,
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
    activeBorderColor: b,
    hoverBorderColor: m,
    activeShadow: `0 0 0 ${p}px ${g}`,
    errorActiveShadow: `0 0 0 ${p}px ${S}`,
    warningActiveShadow: `0 0 0 ${p}px ${h}`,
    hoverBg: y,
    activeBg: y,
    inputFontSize: r,
    inputFontSizeLG: s,
    inputFontSizeSM: r
  };
}, pC = (e) => ({
  borderColor: e.hoverBorderColor,
  backgroundColor: e.hoverBg
}), ll = (e) => ({
  color: e.colorTextDisabled,
  backgroundColor: e.colorBgContainerDisabled,
  borderColor: e.colorBorder,
  boxShadow: "none",
  cursor: "not-allowed",
  opacity: 1,
  "input[disabled], textarea[disabled]": {
    cursor: "not-allowed"
  },
  "&:hover:not([disabled])": Object.assign({}, pC(Zt(e, {
    hoverBorderColor: e.colorBorder,
    hoverBg: e.colorBgContainerDisabled
  })))
}), Kf = (e, t) => ({
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
}), Gc = (e, t) => ({
  [`&${e.componentCls}-status-${t.status}:not(${e.componentCls}-disabled)`]: Object.assign(Object.assign({}, Kf(e, t)), {
    [`${e.componentCls}-prefix, ${e.componentCls}-suffix`]: {
      color: t.affixColor
    }
  }),
  [`&${e.componentCls}-status-${t.status}${e.componentCls}-disabled`]: {
    borderColor: t.borderColor
  }
}), hC = (e, t) => ({
  "&-outlined": Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Kf(e, {
    borderColor: e.colorBorder,
    hoverBorderColor: e.hoverBorderColor,
    activeBorderColor: e.activeBorderColor,
    activeShadow: e.activeShadow
  })), {
    [`&${e.componentCls}-disabled, &[disabled]`]: Object.assign({}, ll(e))
  }), Gc(e, {
    status: "error",
    borderColor: e.colorError,
    hoverBorderColor: e.colorErrorBorderHover,
    activeBorderColor: e.colorError,
    activeShadow: e.errorActiveShadow,
    affixColor: e.colorError
  })), Gc(e, {
    status: "warning",
    borderColor: e.colorWarning,
    hoverBorderColor: e.colorWarningBorderHover,
    activeBorderColor: e.colorWarning,
    activeShadow: e.warningActiveShadow,
    affixColor: e.colorWarning
  })), t)
}), qc = (e, t) => ({
  [`&${e.componentCls}-group-wrapper-status-${t.status}`]: {
    [`${e.componentCls}-group-addon`]: {
      borderColor: t.addonBorderColor,
      color: t.addonColor
    }
  }
}), bC = (e) => ({
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
  }, qc(e, {
    status: "error",
    addonBorderColor: e.colorError,
    addonColor: e.colorErrorText
  })), qc(e, {
    status: "warning",
    addonBorderColor: e.colorWarning,
    addonColor: e.colorWarningText
  })), {
    [`&${e.componentCls}-group-wrapper-disabled`]: {
      [`${e.componentCls}-group-addon`]: Object.assign({}, ll(e))
    }
  })
}), yC = (e, t) => {
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
}, Uf = (e, t) => ({
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
}), Xc = (e, t) => ({
  [`&${e.componentCls}-status-${t.status}:not(${e.componentCls}-disabled)`]: Object.assign(Object.assign({}, Uf(e, t)), {
    [`${e.componentCls}-prefix, ${e.componentCls}-suffix`]: {
      color: t.affixColor
    }
  })
}), SC = (e, t) => ({
  "&-filled": Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Uf(e, {
    bg: e.colorFillTertiary,
    hoverBg: e.colorFillSecondary,
    activeBorderColor: e.colorPrimary
  })), {
    [`&${e.componentCls}-disabled, &[disabled]`]: Object.assign({}, ll(e))
  }), Xc(e, {
    status: "error",
    bg: e.colorErrorBg,
    hoverBg: e.colorErrorBgHover,
    activeBorderColor: e.colorError,
    inputColor: e.colorErrorText,
    affixColor: e.colorError
  })), Xc(e, {
    status: "warning",
    bg: e.colorWarningBg,
    hoverBg: e.colorWarningBgHover,
    activeBorderColor: e.colorWarning,
    inputColor: e.colorWarningText,
    affixColor: e.colorWarning
  })), t)
}), Yc = (e, t) => ({
  [`&${e.componentCls}-group-wrapper-status-${t.status}`]: {
    [`${e.componentCls}-group-addon`]: {
      background: t.addonBg,
      color: t.addonColor
    }
  }
}), CC = (e) => ({
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
  }, Yc(e, {
    status: "error",
    addonBg: e.colorErrorBg,
    addonColor: e.colorErrorText
  })), Yc(e, {
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
}), EC = (e) => ({
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
}), Gf = (e) => {
  const {
    paddingBlockLG: t,
    lineHeightLG: r,
    borderRadiusLG: n,
    paddingInlineLG: a
  } = e;
  return {
    padding: `${ee(t)} ${ee(a)}`,
    fontSize: e.inputFontSizeLG,
    lineHeight: r,
    borderRadius: n
  };
}, qf = (e) => ({
  padding: `${ee(e.paddingBlockSM)} ${ee(e.paddingInlineSM)}`,
  fontSize: e.inputFontSizeSM,
  borderRadius: e.borderRadiusSM
}), Xf = (e) => Object.assign(Object.assign({
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
}, EC(e.colorTextPlaceholder)), {
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
  "&-lg": Object.assign({}, Gf(e)),
  "&-sm": Object.assign({}, qf(e)),
  // RTL
  "&-rtl, &-textarea-rtl": {
    direction: "rtl"
  }
}), xC = (e) => {
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
    [`&-lg ${t}, &-lg > ${t}-group-addon`]: Object.assign({}, Gf(e)),
    [`&-sm ${t}, &-sm > ${t}-group-addon`]: Object.assign({}, qf(e)),
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
        padding: `0 ${ee(e.paddingInline)}`,
        color: e.colorText,
        fontWeight: "normal",
        fontSize: e.inputFontSize,
        textAlign: "center",
        borderRadius: e.borderRadius,
        transition: `all ${e.motionDurationSlow}`,
        lineHeight: 1,
        // Reset Select's style in addon
        [`${r}-select`]: {
          margin: `${ee(e.calc(e.paddingBlock).add(1).mul(-1).equal())} ${ee(e.calc(e.paddingInline).mul(-1).equal())}`,
          [`&${r}-select-single:not(${r}-select-customize-input):not(${r}-pagination-size-changer)`]: {
            [`${r}-select-selector`]: {
              backgroundColor: "inherit",
              border: `${ee(e.lineWidth)} ${e.lineType} transparent`,
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
          margin: `-9px ${ee(e.calc(e.paddingInline).mul(-1).equal())}`,
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
    }, Ia()), {
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
}, wC = (e) => {
  const {
    componentCls: t,
    controlHeightSM: r,
    lineWidth: n,
    calc: a
  } = e, i = a(r).sub(a(n).mul(2)).sub(16).div(2).equal();
  return {
    [t]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Wn(e)), Xf(e)), hC(e)), SC(e)), yC(e)), {
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
}, $C = (e) => {
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
}, OC = (e) => {
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
    [`${t}-affix-wrapper`]: Object.assign(Object.assign(Object.assign(Object.assign({}, Xf(e)), {
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
    }), $C(e)), {
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
}, RC = (e) => {
  const {
    componentCls: t,
    borderRadiusLG: r,
    borderRadiusSM: n
  } = e;
  return {
    [`${t}-group`]: Object.assign(Object.assign(Object.assign({}, Wn(e)), xC(e)), {
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
      }, bC(e)), CC(e)), {
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
}, PC = (e) => {
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
}, _C = (e) => {
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
}, TC = (e) => {
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
}, Yf = en("Input", (e) => {
  const t = Zt(e, gC(e));
  return [
    wC(t),
    _C(t),
    OC(t),
    RC(t),
    PC(t),
    TC(t),
    // =====================================================
    // ==             Space Compact                       ==
    // =====================================================
    af(t)
  ];
}, mC, {
  resetFont: !1
});
var NC = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z" } }, { tag: "path", attrs: { d: "M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8z" } }] }, name: "plus", theme: "outlined" }, IC = function(t, r) {
  return /* @__PURE__ */ u.createElement(nr, _e({}, t, {
    ref: r,
    icon: NC
  }));
}, Zf = /* @__PURE__ */ u.forwardRef(IC);
process.env.NODE_ENV !== "production" && (Zf.displayName = "PlusOutlined");
const qo = /* @__PURE__ */ kn(null);
var MC = function(t) {
  var r = t.activeTabOffset, n = t.horizontal, a = t.rtl, o = t.indicator, i = o === void 0 ? {} : o, s = i.size, l = i.align, c = l === void 0 ? "center" : l, d = bt(), f = K(d, 2), v = f[0], m = f[1], b = Be(), p = q.useCallback(function(S) {
    return typeof s == "function" ? s(S) : typeof s == "number" ? s : S;
  }, [s]);
  function g() {
    Nt.cancel(b.current);
  }
  return yt(function() {
    var S = {};
    if (r)
      if (n) {
        S.width = p(r.width);
        var h = a ? "right" : "left";
        c === "start" && (S[h] = r[h]), c === "center" && (S[h] = r[h] + r.width / 2, S.transform = a ? "translateX(50%)" : "translateX(-50%)"), c === "end" && (S[h] = r[h] + r.width, S.transform = "translateX(-100%)");
      } else
        S.height = p(r.height), c === "start" && (S.top = r.top), c === "center" && (S.top = r.top + r.height / 2, S.transform = "translateY(-50%)"), c === "end" && (S.top = r.top + r.height, S.transform = "translateY(-100%)");
    return g(), b.current = Nt(function() {
      m(S);
    }), g;
  }, [r, n, a, c, p]), {
    style: v
  };
}, Zc = {
  width: 0,
  height: 0,
  left: 0,
  top: 0
};
function AC(e, t, r) {
  return Yr(function() {
    for (var n, a = /* @__PURE__ */ new Map(), o = t.get((n = e[0]) === null || n === void 0 ? void 0 : n.key) || Zc, i = o.left + o.width, s = 0; s < e.length; s += 1) {
      var l = e[s].key, c = t.get(l);
      if (!c) {
        var d;
        c = t.get((d = e[s - 1]) === null || d === void 0 ? void 0 : d.key) || Zc;
      }
      var f = a.get(l) || D({}, c);
      f.right = i - f.left - f.width, a.set(l, f);
    }
    return a;
  }, [e.map(function(n) {
    return n.key;
  }).join("_"), t, r]);
}
function Qc(e, t) {
  var r = u.useRef(e), n = u.useState({}), a = K(n, 2), o = a[1];
  function i(s) {
    var l = typeof s == "function" ? s(r.current) : s;
    l !== r.current && t(l, r.current), r.current = l, o({});
  }
  return [r.current, i];
}
var jC = 0.1, Jc = 0.01, bo = 20, eu = Math.pow(0.995, bo);
function FC(e, t) {
  var r = bt(), n = K(r, 2), a = n[0], o = n[1], i = bt(0), s = K(i, 2), l = s[0], c = s[1], d = bt(0), f = K(d, 2), v = f[0], m = f[1], b = bt(), p = K(b, 2), g = p[0], S = p[1], h = Be();
  function y($) {
    var A = $.touches[0], F = A.screenX, M = A.screenY;
    o({
      x: F,
      y: M
    }), window.clearInterval(h.current);
  }
  function E($) {
    if (a) {
      $.preventDefault();
      var A = $.touches[0], F = A.screenX, M = A.screenY;
      o({
        x: F,
        y: M
      });
      var I = F - a.x, T = M - a.y;
      t(I, T);
      var k = Date.now();
      c(k), m(k - l), S({
        x: I,
        y: T
      });
    }
  }
  function C() {
    if (a && (o(null), S(null), g)) {
      var $ = g.x / v, A = g.y / v, F = Math.abs($), M = Math.abs(A);
      if (Math.max(F, M) < jC) return;
      var I = $, T = A;
      h.current = window.setInterval(function() {
        if (Math.abs(I) < Jc && Math.abs(T) < Jc) {
          window.clearInterval(h.current);
          return;
        }
        I *= eu, T *= eu, t(I * bo, T * bo);
      }, bo);
    }
  }
  var O = Be();
  function R($) {
    var A = $.deltaX, F = $.deltaY, M = 0, I = Math.abs(A), T = Math.abs(F);
    I === T ? M = O.current === "x" ? A : F : I > T ? (M = A, O.current = "x") : (M = F, O.current = "y"), t(-M, -M) && $.preventDefault();
  }
  var w = Be(null);
  w.current = {
    onTouchStart: y,
    onTouchMove: E,
    onTouchEnd: C,
    onWheel: R
  }, u.useEffect(function() {
    function $(I) {
      w.current.onTouchStart(I);
    }
    function A(I) {
      w.current.onTouchMove(I);
    }
    function F(I) {
      w.current.onTouchEnd(I);
    }
    function M(I) {
      w.current.onWheel(I);
    }
    return document.addEventListener("touchmove", A, {
      passive: !1
    }), document.addEventListener("touchend", F, {
      passive: !0
    }), e.current.addEventListener("touchstart", $, {
      passive: !0
    }), e.current.addEventListener("wheel", M, {
      passive: !1
    }), function() {
      document.removeEventListener("touchmove", A), document.removeEventListener("touchend", F);
    };
  }, []);
}
function Qf(e) {
  var t = bt(0), r = K(t, 2), n = r[0], a = r[1], o = Be(0), i = Be();
  return i.current = e, ki(function() {
    var s;
    (s = i.current) === null || s === void 0 || s.call(i);
  }, [n]), function() {
    o.current === n && (o.current += 1, a(o.current));
  };
}
function LC(e) {
  var t = Be([]), r = bt({}), n = K(r, 2), a = n[1], o = Be(typeof e == "function" ? e() : e), i = Qf(function() {
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
var tu = {
  width: 0,
  height: 0,
  left: 0,
  top: 0,
  right: 0
};
function DC(e, t, r, n, a, o, i) {
  var s = i.tabs, l = i.tabPosition, c = i.rtl, d, f, v;
  return ["top", "bottom"].includes(l) ? (d = "width", f = c ? "right" : "left", v = Math.abs(r)) : (d = "height", f = "top", v = -r), Yr(function() {
    if (!s.length)
      return [0, 0];
    for (var m = s.length, b = m, p = 0; p < m; p += 1) {
      var g = e.get(s[p].key) || tu;
      if (g[f] + g[d] > v + t) {
        b = p - 1;
        break;
      }
    }
    for (var S = 0, h = m - 1; h >= 0; h -= 1) {
      var y = e.get(s[h].key) || tu;
      if (y[f] < v) {
        S = h + 1;
        break;
      }
    }
    return S >= b ? [0, 0] : [S, b];
  }, [e, t, n, a, o, v, l, s.map(function(m) {
    return m.key;
  }).join("_"), c]);
}
function ru(e) {
  var t;
  return e instanceof Map ? (t = {}, e.forEach(function(r, n) {
    t[n] = r;
  })) : t = e, JSON.stringify(t);
}
var zC = "TABS_DQ";
function Jf(e) {
  return String(e).replace(/"/g, zC);
}
function ev(e, t, r, n) {
  return (
    // Only editable tabs can be removed
    !(!r || // Tabs cannot be removed when disabled
    n || // closable is false
    e === !1 || // If closable is undefined, the remove button should be hidden when closeIcon is null or false
    e === void 0 && (t === !1 || t === null))
  );
}
var tv = /* @__PURE__ */ u.forwardRef(function(e, t) {
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
}), _s = /* @__PURE__ */ u.forwardRef(function(e, t) {
  var r = e.position, n = e.prefixCls, a = e.extra;
  if (!a)
    return null;
  var o, i = {};
  return Ae(a) === "object" && !/* @__PURE__ */ u.isValidElement(a) ? i = a : i.right = a, r === "right" && (o = i.right), r === "left" && (o = i.left), o ? /* @__PURE__ */ u.createElement("div", {
    className: "".concat(n, "-extra-content"),
    ref: t
  }, o) : null;
});
process.env.NODE_ENV !== "production" && (_s.displayName = "ExtraContent");
var VC = /* @__PURE__ */ u.forwardRef(function(e, t) {
  var r = e.prefixCls, n = e.id, a = e.tabs, o = e.locale, i = e.mobile, s = e.more, l = s === void 0 ? {} : s, c = e.style, d = e.className, f = e.editable, v = e.tabBarGutter, m = e.rtl, b = e.removeAriaLabel, p = e.onTabClick, g = e.getPopupContainer, S = e.popupClassName, h = bt(!1), y = K(h, 2), E = y[0], C = y[1], O = bt(null), R = K(O, 2), w = R[0], $ = R[1], A = l.icon, F = A === void 0 ? "More" : A, M = "".concat(n, "-more-popup"), I = "".concat(r, "-dropdown"), T = w !== null ? "".concat(M, "-").concat(w) : null, k = o == null ? void 0 : o.dropdownAriaLabel;
  function N(W, G) {
    W.preventDefault(), W.stopPropagation(), f.onEdit("remove", {
      key: G,
      event: W
    });
  }
  var x = /* @__PURE__ */ u.createElement(Va, {
    onClick: function(G) {
      var Q = G.key, Y = G.domEvent;
      p(Q, Y), C(!1);
    },
    prefixCls: "".concat(I, "-menu"),
    id: M,
    tabIndex: -1,
    role: "listbox",
    "aria-activedescendant": T,
    selectedKeys: [w],
    "aria-label": k !== void 0 ? k : "expanded dropdown"
  }, a.map(function(W) {
    var G = W.closable, Q = W.disabled, Y = W.closeIcon, J = W.key, ne = W.label, se = ev(G, Y, f, Q);
    return /* @__PURE__ */ u.createElement(Uo, {
      key: J,
      id: "".concat(M, "-").concat(J),
      role: "option",
      "aria-controls": n && "".concat(n, "-panel-").concat(J),
      disabled: Q
    }, /* @__PURE__ */ u.createElement("span", null, ne), se && /* @__PURE__ */ u.createElement("button", {
      type: "button",
      "aria-label": b || "remove",
      tabIndex: 0,
      className: "".concat(I, "-menu-item-remove"),
      onClick: function(de) {
        de.stopPropagation(), N(de, J);
      }
    }, Y || f.removeIcon || "×"));
  }));
  function _(W) {
    for (var G = a.filter(function(se) {
      return !se.disabled;
    }), Q = G.findIndex(function(se) {
      return se.key === w;
    }) || 0, Y = G.length, J = 0; J < Y; J += 1) {
      Q = (Q + W + Y) % Y;
      var ne = G[Q];
      if (!ne.disabled) {
        $(ne.key);
        return;
      }
    }
  }
  function z(W) {
    var G = W.which;
    if (!E) {
      [ce.DOWN, ce.SPACE, ce.ENTER].includes(G) && (C(!0), W.preventDefault());
      return;
    }
    switch (G) {
      case ce.UP:
        _(-1), W.preventDefault();
        break;
      case ce.DOWN:
        _(1), W.preventDefault();
        break;
      case ce.ESC:
        C(!1);
        break;
      case ce.SPACE:
      case ce.ENTER:
        w !== null && p(w, W);
        break;
    }
  }
  yt(function() {
    var W = document.getElementById(T);
    W && W.scrollIntoView && W.scrollIntoView(!1);
  }, [w]), yt(function() {
    E || $(null);
  }, [E]);
  var L = j({}, m ? "marginRight" : "marginLeft", v);
  a.length || (L.visibility = "hidden", L.order = 1);
  var B = Z(j({}, "".concat(I, "-rtl"), m)), X = i ? null : /* @__PURE__ */ u.createElement(TS, _e({
    prefixCls: I,
    overlay: x,
    visible: a.length ? E : !1,
    onVisibleChange: C,
    overlayClassName: Z(B, S),
    mouseEnterDelay: 0.1,
    mouseLeaveDelay: 0.1,
    getPopupContainer: g
  }, l), /* @__PURE__ */ u.createElement("button", {
    type: "button",
    className: "".concat(r, "-nav-more"),
    style: L,
    tabIndex: -1,
    "aria-hidden": "true",
    "aria-haspopup": "listbox",
    "aria-controls": M,
    id: "".concat(n, "-more"),
    "aria-expanded": E,
    onKeyDown: z
  }, F));
  return /* @__PURE__ */ u.createElement("div", {
    className: Z("".concat(r, "-nav-operations"), d),
    style: c,
    ref: t
  }, X, /* @__PURE__ */ u.createElement(tv, {
    prefixCls: r,
    locale: o,
    editable: f
  }));
});
const BC = /* @__PURE__ */ u.memo(VC, function(e, t) {
  return (
    // https://github.com/ant-design/ant-design/issues/32544
    // We'd better remove syntactic sugar in `rc-menu` since this has perf issue
    t.tabMoving
  );
});
var kC = function(t) {
  var r = t.prefixCls, n = t.id, a = t.active, o = t.tab, i = o.key, s = o.label, l = o.disabled, c = o.closeIcon, d = o.icon, f = t.closable, v = t.renderWrapper, m = t.removeAriaLabel, b = t.editable, p = t.onClick, g = t.onFocus, S = t.style, h = "".concat(r, "-tab"), y = ev(f, c, b, l);
  function E(w) {
    l || p(w);
  }
  function C(w) {
    w.preventDefault(), w.stopPropagation(), b.onEdit("remove", {
      key: i,
      event: w
    });
  }
  var O = u.useMemo(function() {
    return d && typeof s == "string" ? /* @__PURE__ */ u.createElement("span", null, s) : s;
  }, [s, d]), R = /* @__PURE__ */ u.createElement("div", {
    key: i,
    "data-node-key": Jf(i),
    className: Z(h, j(j(j({}, "".concat(h, "-with-remove"), y), "".concat(h, "-active"), a), "".concat(h, "-disabled"), l)),
    style: S,
    onClick: E
  }, /* @__PURE__ */ u.createElement("div", {
    role: "tab",
    "aria-selected": a,
    id: n && "".concat(n, "-tab-").concat(i),
    className: "".concat(h, "-btn"),
    "aria-controls": n && "".concat(n, "-panel-").concat(i),
    "aria-disabled": l,
    tabIndex: l ? null : 0,
    onClick: function($) {
      $.stopPropagation(), E($);
    },
    onKeyDown: function($) {
      [ce.SPACE, ce.ENTER].includes($.which) && ($.preventDefault(), E($));
    },
    onFocus: g
  }, d && /* @__PURE__ */ u.createElement("span", {
    className: "".concat(h, "-icon")
  }, d), s && O), y && /* @__PURE__ */ u.createElement("button", {
    type: "button",
    "aria-label": m || "remove",
    tabIndex: 0,
    className: "".concat(h, "-remove"),
    onClick: function($) {
      $.stopPropagation(), C($);
    }
  }, c || b.removeIcon || "×"));
  return v ? v(R) : R;
}, HC = function(t, r) {
  var n = t.offsetWidth, a = t.offsetHeight, o = t.offsetTop, i = t.offsetLeft, s = t.getBoundingClientRect(), l = s.width, c = s.height, d = s.x, f = s.y;
  return Math.abs(l - n) < 1 ? [l, c, d - r.x, f - r.y] : [n, a, i, o];
}, On = function(t) {
  var r = t.current || {}, n = r.offsetWidth, a = n === void 0 ? 0 : n, o = r.offsetHeight, i = o === void 0 ? 0 : o;
  if (t.current) {
    var s = t.current.getBoundingClientRect(), l = s.width, c = s.height;
    if (Math.abs(l - a) < 1)
      return [l, c];
  }
  return [a, i];
}, no = function(t, r) {
  return t[r ? 0 : 1];
}, nu = /* @__PURE__ */ u.forwardRef(function(e, t) {
  var r = e.className, n = e.style, a = e.id, o = e.animated, i = e.activeKey, s = e.rtl, l = e.extra, c = e.editable, d = e.locale, f = e.tabPosition, v = e.tabBarGutter, m = e.children, b = e.onTabClick, p = e.onTabScroll, g = e.indicator, S = u.useContext(qo), h = S.prefixCls, y = S.tabs, E = Be(null), C = Be(null), O = Be(null), R = Be(null), w = Be(null), $ = Be(null), A = Be(null), F = f === "top" || f === "bottom", M = Qc(0, function(H, U) {
    F && p && p({
      direction: H > U ? "left" : "right"
    });
  }), I = K(M, 2), T = I[0], k = I[1], N = Qc(0, function(H, U) {
    !F && p && p({
      direction: H > U ? "top" : "bottom"
    });
  }), x = K(N, 2), _ = x[0], z = x[1], L = bt([0, 0]), B = K(L, 2), X = B[0], W = B[1], G = bt([0, 0]), Q = K(G, 2), Y = Q[0], J = Q[1], ne = bt([0, 0]), se = K(ne, 2), xe = se[0], de = se[1], ue = bt([0, 0]), Ce = K(ue, 2), V = Ce[0], le = Ce[1], fe = LC(/* @__PURE__ */ new Map()), Re = K(fe, 2), me = Re[0], ae = Re[1], te = AC(y, me, Y[0]), re = no(X, F), be = no(Y, F), ye = no(xe, F), ge = no(V, F), Pe = re < be + ye, ve = Pe ? re - ge : re - ye, vt = "".concat(h, "-nav-operations-hidden"), it = 0, $e = 0;
  F && s ? (it = 0, $e = Math.max(0, be - ve)) : (it = Math.min(0, ve - be), $e = 0);
  function we(H) {
    return H < it ? it : H > $e ? $e : H;
  }
  var je = Be(null), ze = bt(), gt = K(ze, 2), mt = gt[0], wt = gt[1];
  function et() {
    wt(Date.now());
  }
  function Le() {
    je.current && clearTimeout(je.current);
  }
  FC(R, function(H, U) {
    function oe(Ne, Oe) {
      Ne(function(Ie) {
        var Me = we(Ie + Oe);
        return Me;
      });
    }
    return Pe ? (F ? oe(k, H) : oe(z, U), Le(), et(), !0) : !1;
  }), yt(function() {
    return Le(), mt && (je.current = setTimeout(function() {
      wt(0);
    }, 100)), Le;
  }, [mt]);
  var ie = DC(
    te,
    // Container
    ve,
    // Transform
    F ? T : _,
    // Tabs
    be,
    // Add
    ye,
    // Operation
    ge,
    D(D({}, e), {}, {
      tabs: y
    })
  ), Ee = K(ie, 2), qe = Ee[0], Qe = Ee[1], St = kt(function() {
    var H = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : i, U = te.get(H) || {
      width: 0,
      height: 0,
      left: 0,
      right: 0,
      top: 0
    };
    if (F) {
      var oe = T;
      s ? U.right < T ? oe = U.right : U.right + U.width > T + ve && (oe = U.right + U.width - ve) : U.left < -T ? oe = -U.left : U.left + U.width > -T + ve && (oe = -(U.left + U.width - ve)), z(0), k(we(oe));
    } else {
      var Ne = _;
      U.top < -_ ? Ne = -U.top : U.top + U.height > -_ + ve && (Ne = -(U.top + U.height - ve)), k(0), z(we(Ne));
    }
  }), ot = {};
  f === "top" || f === "bottom" ? ot[s ? "marginRight" : "marginLeft"] = v : ot.marginTop = v;
  var He = y.map(function(H, U) {
    var oe = H.key;
    return /* @__PURE__ */ u.createElement(kC, {
      id: a,
      prefixCls: h,
      key: oe,
      tab: H,
      style: U === 0 ? void 0 : ot,
      closable: H.closable,
      editable: c,
      active: oe === i,
      renderWrapper: m,
      removeAriaLabel: d == null ? void 0 : d.removeAriaLabel,
      onClick: function(Oe) {
        b(oe, Oe);
      },
      onFocus: function() {
        St(oe), et(), R.current && (s || (R.current.scrollLeft = 0), R.current.scrollTop = 0);
      }
    });
  }), ke = function() {
    return ae(function() {
      var U, oe = /* @__PURE__ */ new Map(), Ne = (U = w.current) === null || U === void 0 ? void 0 : U.getBoundingClientRect();
      return y.forEach(function(Oe) {
        var Ie, Me = Oe.key, ct = (Ie = w.current) === null || Ie === void 0 ? void 0 : Ie.querySelector('[data-node-key="'.concat(Jf(Me), '"]'));
        if (ct) {
          var Ze = HC(ct, Ne), Ve = K(Ze, 4), $t = Ve[0], Kt = Ve[1], Vt = Ve[2], ut = Ve[3];
          oe.set(Me, {
            width: $t,
            height: Kt,
            left: Vt,
            top: ut
          });
        }
      }), oe;
    });
  };
  yt(function() {
    ke();
  }, [y.map(function(H) {
    return H.key;
  }).join("_")]);
  var De = Qf(function() {
    var H = On(E), U = On(C), oe = On(O);
    W([H[0] - U[0] - oe[0], H[1] - U[1] - oe[1]]);
    var Ne = On(A);
    de(Ne);
    var Oe = On($);
    le(Oe);
    var Ie = On(w);
    J([Ie[0] - Ne[0], Ie[1] - Ne[1]]), ke();
  }), Te = y.slice(0, qe), pe = y.slice(Qe + 1), Ge = [].concat(he(Te), he(pe)), pt = te.get(i), We = MC({
    activeTabOffset: pt,
    horizontal: F,
    indicator: g,
    rtl: s
  }), Ke = We.style;
  yt(function() {
    St();
  }, [i, it, $e, ru(pt), ru(te), F]), yt(function() {
    De();
  }, [s]);
  var rt = !!Ge.length, ht = "".concat(h, "-nav-wrap"), _t, zt, Wt, P;
  return F ? s ? (zt = T > 0, _t = T !== $e) : (_t = T < 0, zt = T !== it) : (Wt = _ < 0, P = _ !== it), /* @__PURE__ */ u.createElement(hr, {
    onResize: De
  }, /* @__PURE__ */ u.createElement("div", {
    ref: Na(t, E),
    role: "tablist",
    className: Z("".concat(h, "-nav"), r),
    style: n,
    onKeyDown: function() {
      et();
    }
  }, /* @__PURE__ */ u.createElement(_s, {
    ref: C,
    position: "left",
    extra: l,
    prefixCls: h
  }), /* @__PURE__ */ u.createElement(hr, {
    onResize: De
  }, /* @__PURE__ */ u.createElement("div", {
    className: Z(ht, j(j(j(j({}, "".concat(ht, "-ping-left"), _t), "".concat(ht, "-ping-right"), zt), "".concat(ht, "-ping-top"), Wt), "".concat(ht, "-ping-bottom"), P)),
    ref: R
  }, /* @__PURE__ */ u.createElement(hr, {
    onResize: De
  }, /* @__PURE__ */ u.createElement("div", {
    ref: w,
    className: "".concat(h, "-nav-list"),
    style: {
      transform: "translate(".concat(T, "px, ").concat(_, "px)"),
      transition: mt ? "none" : void 0
    }
  }, He, /* @__PURE__ */ u.createElement(tv, {
    ref: A,
    prefixCls: h,
    locale: d,
    editable: c,
    style: D(D({}, He.length === 0 ? void 0 : ot), {}, {
      visibility: rt ? "hidden" : null
    })
  }), /* @__PURE__ */ u.createElement("div", {
    className: Z("".concat(h, "-ink-bar"), j({}, "".concat(h, "-ink-bar-animated"), o.inkBar)),
    style: Ke
  }))))), /* @__PURE__ */ u.createElement(BC, _e({}, e, {
    removeAriaLabel: d == null ? void 0 : d.removeAriaLabel,
    ref: $,
    prefixCls: h,
    tabs: Ge,
    className: !rt && vt,
    tabMoving: !!mt
  })), /* @__PURE__ */ u.createElement(_s, {
    ref: O,
    position: "right",
    extra: l,
    prefixCls: h
  })));
}), cl = /* @__PURE__ */ u.forwardRef(function(e, t) {
  var r = e.prefixCls, n = e.className, a = e.style, o = e.id, i = e.active, s = e.tabKey, l = e.children;
  return /* @__PURE__ */ u.createElement("div", {
    id: o && "".concat(o, "-panel-").concat(s),
    role: "tabpanel",
    tabIndex: i ? 0 : -1,
    "aria-labelledby": o && "".concat(o, "-tab-").concat(s),
    "aria-hidden": !i,
    style: a,
    className: Z(r, i && "".concat(r, "-active"), n),
    ref: t
  }, l);
});
process.env.NODE_ENV !== "production" && (cl.displayName = "TabPane");
var WC = ["renderTabBar"], KC = ["label", "key"], rv = function(t) {
  var r = t.renderTabBar, n = Ye(t, WC), a = u.useContext(qo), o = a.tabs;
  if (r) {
    var i = D(D({}, n), {}, {
      // Legacy support. We do not use this actually
      panes: o.map(function(s) {
        var l = s.label, c = s.key, d = Ye(s, KC);
        return /* @__PURE__ */ u.createElement(cl, _e({
          tab: l,
          key: c,
          tabKey: c
        }, d));
      })
    });
    return r(i, nu);
  }
  return /* @__PURE__ */ u.createElement(nu, n);
};
process.env.NODE_ENV !== "production" && (rv.displayName = "TabNavListWrapper");
var UC = ["key", "forceRender", "style", "className", "destroyInactiveTabPane"], GC = function(t) {
  var r = t.id, n = t.activeKey, a = t.animated, o = t.tabPosition, i = t.destroyInactiveTabPane, s = u.useContext(qo), l = s.prefixCls, c = s.tabs, d = a.tabPane, f = "".concat(l, "-tabpane");
  return /* @__PURE__ */ u.createElement("div", {
    className: Z("".concat(l, "-content-holder"))
  }, /* @__PURE__ */ u.createElement("div", {
    className: Z("".concat(l, "-content"), "".concat(l, "-content-").concat(o), j({}, "".concat(l, "-content-animated"), d))
  }, c.map(function(v) {
    var m = v.key, b = v.forceRender, p = v.style, g = v.className, S = v.destroyInactiveTabPane, h = Ye(v, UC), y = m === n;
    return /* @__PURE__ */ u.createElement(fn, _e({
      key: m,
      visible: y,
      forceRender: b,
      removeOnLeave: !!(i || S),
      leavedClassName: "".concat(f, "-hidden")
    }, a.tabPaneMotion), function(E, C) {
      var O = E.style, R = E.className;
      return /* @__PURE__ */ u.createElement(cl, _e({}, h, {
        prefixCls: f,
        id: r,
        tabKey: m,
        animated: d,
        active: y,
        style: D(D({}, p), O),
        className: Z(g, R),
        ref: C
      }));
    });
  })));
};
function qC() {
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
  } : t = D({
    inkBar: !0
  }, Ae(e) === "object" ? e : {}), t.tabPaneMotion && t.tabPane === void 0 && (t.tabPane = !0), !t.tabPaneMotion && t.tabPane && (process.env.NODE_ENV !== "production" && tt(!1, "`animated.tabPane` is true but `animated.tabPaneMotion` is not provided. Motion will not work."), t.tabPane = !1), t;
}
var XC = ["id", "prefixCls", "className", "items", "direction", "activeKey", "defaultActiveKey", "editable", "animated", "tabPosition", "tabBarGutter", "tabBarStyle", "tabBarExtraContent", "locale", "more", "destroyInactiveTabPane", "renderTabBar", "onChange", "onTabClick", "onTabScroll", "getPopupContainer", "popupClassName", "indicator"], au = 0, nv = /* @__PURE__ */ u.forwardRef(function(e, t) {
  var r = e.id, n = e.prefixCls, a = n === void 0 ? "rc-tabs" : n, o = e.className, i = e.items, s = e.direction, l = e.activeKey, c = e.defaultActiveKey, d = e.editable, f = e.animated, v = e.tabPosition, m = v === void 0 ? "top" : v, b = e.tabBarGutter, p = e.tabBarStyle, g = e.tabBarExtraContent, S = e.locale, h = e.more, y = e.destroyInactiveTabPane, E = e.renderTabBar, C = e.onChange, O = e.onTabClick, R = e.onTabScroll, w = e.getPopupContainer, $ = e.popupClassName, A = e.indicator, F = Ye(e, XC), M = u.useMemo(function() {
    return (i || []).filter(function(V) {
      return V && Ae(V) === "object" && "key" in V;
    });
  }, [i]), I = s === "rtl", T = qC(f), k = bt(!1), N = K(k, 2), x = N[0], _ = N[1];
  yt(function() {
    _(hf());
  }, []);
  var z = cr(function() {
    var V;
    return (V = M[0]) === null || V === void 0 ? void 0 : V.key;
  }, {
    value: l,
    defaultValue: c
  }), L = K(z, 2), B = L[0], X = L[1], W = bt(function() {
    return M.findIndex(function(V) {
      return V.key === B;
    });
  }), G = K(W, 2), Q = G[0], Y = G[1];
  yt(function() {
    var V = M.findIndex(function(fe) {
      return fe.key === B;
    });
    if (V === -1) {
      var le;
      V = Math.max(0, Math.min(Q, M.length - 1)), X((le = M[V]) === null || le === void 0 ? void 0 : le.key);
    }
    Y(V);
  }, [M.map(function(V) {
    return V.key;
  }).join("_"), B, Q]);
  var J = cr(null, {
    value: r
  }), ne = K(J, 2), se = ne[0], xe = ne[1];
  yt(function() {
    r || (xe("rc-tabs-".concat(process.env.NODE_ENV === "test" ? "test" : au)), au += 1);
  }, []);
  function de(V, le) {
    O == null || O(V, le);
    var fe = V !== B;
    X(V), fe && (C == null || C(V));
  }
  var ue = {
    id: se,
    activeKey: B,
    animated: T,
    tabPosition: m,
    rtl: I,
    mobile: x
  }, Ce = D(D({}, ue), {}, {
    editable: d,
    locale: S,
    more: h,
    tabBarGutter: b,
    onTabClick: de,
    onTabScroll: R,
    extra: g,
    style: p,
    panes: null,
    getPopupContainer: w,
    popupClassName: $,
    indicator: A
  });
  return /* @__PURE__ */ u.createElement(qo.Provider, {
    value: {
      tabs: M,
      prefixCls: a
    }
  }, /* @__PURE__ */ u.createElement("div", _e({
    ref: t,
    id: r,
    className: Z(a, "".concat(a, "-").concat(m), j(j(j({}, "".concat(a, "-mobile"), x), "".concat(a, "-editable"), d), "".concat(a, "-rtl"), I), o)
  }, F), /* @__PURE__ */ u.createElement(rv, _e({}, Ce, {
    renderTabBar: E
  })), /* @__PURE__ */ u.createElement(GC, _e({
    destroyInactiveTabPane: y
  }, ue, {
    animated: T
  }))));
});
process.env.NODE_ENV !== "production" && (nv.displayName = "Tabs");
const YC = {
  motionAppear: !1,
  motionEnter: !0,
  motionLeave: !0
};
function ZC(e) {
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
  }, typeof t == "object" ? t : {}), r.tabPane && (r.tabPaneMotion = Object.assign(Object.assign({}, YC), {
    motionName: Gd(e, "switch")
  })), r;
}
var QC = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
    t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
function JC(e) {
  return e.filter((t) => t);
}
function e1(e, t) {
  if (process.env.NODE_ENV !== "production" && Ft("Tabs").deprecated(!t, "Tabs.TabPane", "items"), e)
    return e;
  const r = Zr(t).map((n) => {
    if (/* @__PURE__ */ u.isValidElement(n)) {
      const {
        key: a,
        props: o
      } = n, i = o || {}, {
        tab: s
      } = i, l = QC(i, ["tab"]);
      return Object.assign(Object.assign({
        key: String(a)
      }, l), {
        label: s
      });
    }
    return null;
  });
  return JC(r);
}
const t1 = (e) => {
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
    [Tc(e, "slide-up"), Tc(e, "slide-down")]
  ];
}, r1 = (e) => {
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
}, n1 = (e) => {
  const {
    componentCls: t,
    itemHoverColor: r,
    dropdownEdgeChildVerticalPadding: n
  } = e;
  return {
    [`${t}-dropdown`]: Object.assign(Object.assign({}, Wn(e)), {
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
        padding: `${ee(n)} 0`,
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
        "&-item": Object.assign(Object.assign({}, Hs), {
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
}, a1 = (e) => {
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
          borderBottom: `${ee(e.lineWidth)} ${e.lineType} ${n}`,
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
}, o1 = (e) => {
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
            padding: n
          }
        }
      }
    }
  };
}, i1 = (e) => {
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
      }, Ws(e)),
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
}, s1 = (e) => {
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
}, l1 = (e) => {
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
    [t]: Object.assign(Object.assign(Object.assign(Object.assign({}, Wn(e)), {
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
        }, Ws(e))
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
    }), i1(e)), {
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
}, c1 = (e) => {
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
}, u1 = en("Tabs", (e) => {
  const t = Zt(e, {
    // `cardPadding` is empty by default, so we could calculate with dynamic `cardHeight`
    tabsCardPadding: e.cardPadding,
    dropdownEdgeChildVerticalPadding: e.paddingXXS,
    tabsActiveTextShadow: "0 0 0.25px currentcolor",
    tabsDropdownHeight: 200,
    tabsDropdownWidth: 120,
    tabsHorizontalItemMargin: `0 0 0 ${ee(e.horizontalItemGutter)}`,
    tabsHorizontalItemMarginRTL: `0 0 0 ${ee(e.horizontalItemGutter)}`
  });
  return [o1(t), s1(t), a1(t), n1(t), r1(t), l1(t), t1(t)];
}, c1), av = () => null;
process.env.NODE_ENV !== "production" && (av.displayName = "DeprecatedTabPane");
var d1 = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
    t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const ul = (e) => {
  var t, r, n, a, o, i, s, l, c, d, f;
  const {
    type: v,
    className: m,
    rootClassName: b,
    size: p,
    onEdit: g,
    hideAdd: S,
    centered: h,
    addIcon: y,
    removeIcon: E,
    moreIcon: C,
    more: O,
    popupClassName: R,
    children: w,
    items: $,
    animated: A,
    style: F,
    indicatorSize: M,
    indicator: I
  } = e, T = d1(e, ["type", "className", "rootClassName", "size", "onEdit", "hideAdd", "centered", "addIcon", "removeIcon", "moreIcon", "more", "popupClassName", "children", "items", "animated", "style", "indicatorSize", "indicator"]), {
    prefixCls: k
  } = T, {
    direction: N,
    tabs: x,
    getPrefixCls: _,
    getPopupContainer: z
  } = u.useContext(ft), L = _("tabs", k), B = Gs(L), [X, W, G] = u1(L, B);
  let Q;
  v === "editable-card" && (Q = {
    onEdit: (ue, Ce) => {
      let {
        key: V,
        event: le
      } = Ce;
      g == null || g(ue === "add" ? le : V, ue);
    },
    removeIcon: (t = E ?? (x == null ? void 0 : x.removeIcon)) !== null && t !== void 0 ? t : /* @__PURE__ */ u.createElement(Wd, null),
    addIcon: (y ?? (x == null ? void 0 : x.addIcon)) || /* @__PURE__ */ u.createElement(Zf, null),
    showAdd: S !== !0
  });
  const Y = _();
  if (process.env.NODE_ENV !== "production") {
    const ue = Ft("Tabs");
    process.env.NODE_ENV !== "production" && ue(!("onPrevClick" in e) && !("onNextClick" in e), "breaking", "`onPrevClick` and `onNextClick` has been removed. Please use `onTabScroll` instead."), process.env.NODE_ENV !== "production" && ue(!(M || x != null && x.indicatorSize), "deprecated", "`indicatorSize` has been deprecated. Please use `indicator={{ size: ... }}` instead.");
  }
  const J = Aa(p), ne = e1($, w), se = ZC(L, A), xe = Object.assign(Object.assign({}, x == null ? void 0 : x.style), F), de = {
    align: (r = I == null ? void 0 : I.align) !== null && r !== void 0 ? r : (n = x == null ? void 0 : x.indicator) === null || n === void 0 ? void 0 : n.align,
    size: (s = (o = (a = I == null ? void 0 : I.size) !== null && a !== void 0 ? a : M) !== null && o !== void 0 ? o : (i = x == null ? void 0 : x.indicator) === null || i === void 0 ? void 0 : i.size) !== null && s !== void 0 ? s : x == null ? void 0 : x.indicatorSize
  };
  return X(/* @__PURE__ */ u.createElement(nv, Object.assign({
    direction: N,
    getPopupContainer: z
  }, T, {
    items: ne,
    className: Z({
      [`${L}-${J}`]: J,
      [`${L}-card`]: ["card", "editable-card"].includes(v),
      [`${L}-editable-card`]: v === "editable-card",
      [`${L}-centered`]: h
    }, x == null ? void 0 : x.className, m, b, W, G, B),
    popupClassName: Z(R, W, G, B),
    style: xe,
    editable: Q,
    more: Object.assign({
      icon: (f = (d = (c = (l = x == null ? void 0 : x.more) === null || l === void 0 ? void 0 : l.icon) !== null && c !== void 0 ? c : x == null ? void 0 : x.moreIcon) !== null && d !== void 0 ? d : C) !== null && f !== void 0 ? f : /* @__PURE__ */ u.createElement(Wf, null),
      transitionName: `${Y}-slide-up`
    }, O),
    prefixCls: L,
    animated: se,
    indicator: de
  })));
};
ul.TabPane = av;
process.env.NODE_ENV !== "production" && (ul.displayName = "Tabs");
var f1 = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
    t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const ov = (e) => {
  var {
    prefixCls: t,
    className: r,
    hoverable: n = !0
  } = e, a = f1(e, ["prefixCls", "className", "hoverable"]);
  const {
    getPrefixCls: o
  } = u.useContext(ft), i = o("card", t), s = Z(`${i}-grid`, r, {
    [`${i}-grid-hoverable`]: n
  });
  return /* @__PURE__ */ u.createElement("div", Object.assign({}, a, {
    className: s
  }));
}, v1 = (e) => {
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
    padding: `0 ${ee(a)}`,
    color: e.colorTextHeading,
    fontWeight: e.fontWeightStrong,
    fontSize: e.headerFontSize,
    background: e.headerBg,
    borderBottom: `${ee(e.lineWidth)} ${e.lineType} ${e.colorBorderSecondary}`,
    borderRadius: `${ee(e.borderRadiusLG)} ${ee(e.borderRadiusLG)} 0 0`
  }, Ia()), {
    "&-wrapper": {
      width: "100%",
      display: "flex",
      alignItems: "center"
    },
    "&-title": Object.assign(Object.assign({
      display: "inline-block",
      flex: 1
    }, Hs), {
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
        borderBottom: `${ee(e.lineWidth)} ${e.lineType} ${e.colorBorderSecondary}`
      }
    }
  });
}, g1 = (e) => {
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
      ${ee(a)} 0 0 0 ${r},
      0 ${ee(a)} 0 0 ${r},
      ${ee(a)} ${ee(a)} 0 0 ${r},
      ${ee(a)} 0 0 0 ${r} inset,
      0 ${ee(a)} 0 0 ${r} inset;
    `,
    transition: `all ${e.motionDurationMid}`,
    "&-hoverable:hover": {
      position: "relative",
      zIndex: 1,
      boxShadow: n
    }
  };
}, m1 = (e) => {
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
    borderTop: `${ee(e.lineWidth)} ${e.lineType} ${o}`,
    display: "flex",
    borderRadius: `0 0 ${ee(e.borderRadiusLG)} ${ee(e.borderRadiusLG)}`
  }, Ia()), {
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
          lineHeight: ee(e.fontHeight),
          transition: `color ${e.motionDurationMid}`,
          "&:hover": {
            color: e.colorPrimary
          }
        },
        [`> ${r}`]: {
          fontSize: a,
          lineHeight: ee(e.calc(a).mul(e.lineHeight).equal())
        }
      },
      "&:not(:last-child)": {
        borderInlineEnd: `${ee(e.lineWidth)} ${e.lineType} ${o}`
      }
    }
  });
}, p1 = (e) => Object.assign(Object.assign({
  margin: `${ee(e.calc(e.marginXXS).mul(-1).equal())} 0`,
  display: "flex"
}, Ia()), {
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
  }, Hs),
  "&-description": {
    color: e.colorTextDescription
  }
}), h1 = (e) => {
  const {
    componentCls: t,
    cardPaddingBase: r,
    colorFillAlter: n
  } = e;
  return {
    [`${t}-head`]: {
      padding: `0 ${ee(r)}`,
      background: n,
      "&-title": {
        fontSize: e.fontSize
      }
    },
    [`${t}-body`]: {
      padding: `${ee(e.padding)} ${ee(r)}`
    }
  };
}, b1 = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    overflow: "hidden",
    [`${t}-body`]: {
      userSelect: "none"
    }
  };
}, y1 = (e) => {
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
    [r]: Object.assign(Object.assign({}, Wn(e)), {
      position: "relative",
      background: e.colorBgContainer,
      borderRadius: e.borderRadiusLG,
      [`&:not(${r}-bordered)`]: {
        boxShadow: i
      },
      [`${r}-head`]: v1(e),
      [`${r}-extra`]: {
        // https://stackoverflow.com/a/22429853/3040605
        marginInlineStart: "auto",
        color: l,
        fontWeight: "normal",
        fontSize: e.fontSize
      },
      [`${r}-body`]: Object.assign({
        padding: s,
        borderRadius: `0 0 ${ee(e.borderRadiusLG)} ${ee(e.borderRadiusLG)}`
      }, Ia()),
      [`${r}-grid`]: g1(e),
      [`${r}-cover`]: {
        "> *": {
          display: "block",
          width: "100%"
        },
        [`img, img + ${t}-image-mask`]: {
          borderRadius: `${ee(e.borderRadiusLG)} ${ee(e.borderRadiusLG)} 0 0`
        }
      },
      [`${r}-actions`]: m1(e),
      [`${r}-meta`]: p1(e)
    }),
    [`${r}-bordered`]: {
      border: `${ee(e.lineWidth)} ${e.lineType} ${o}`,
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
      borderRadius: `${ee(e.borderRadiusLG)} ${ee(e.borderRadiusLG)} 0 0 `,
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
    [`${r}-type-inner`]: h1(e),
    [`${r}-loading`]: b1(e),
    [`${r}-rtl`]: {
      direction: "rtl"
    }
  };
}, S1 = (e) => {
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
        padding: `0 ${ee(r)}`,
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
}, C1 = (e) => ({
  headerBg: "transparent",
  headerFontSize: e.fontSizeLG,
  headerFontSizeSM: e.fontSize,
  headerHeight: e.fontSizeLG * e.lineHeightLG + e.padding * 2,
  headerHeightSM: e.fontSize * e.lineHeight + e.paddingXS * 2,
  actionsBg: e.colorBgContainer,
  actionsLiMargin: `${e.paddingSM}px 0`,
  tabsMarginBottom: -e.padding - e.lineWidth,
  extraColor: e.colorText
}), E1 = en("Card", (e) => {
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
    y1(t),
    // Size
    S1(t)
  ];
}, C1);
var ou = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
    t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const x1 = (e) => {
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
}, w1 = /* @__PURE__ */ u.forwardRef((e, t) => {
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
    cover: b,
    actions: p,
    tabList: g,
    children: S,
    activeTabKey: h,
    defaultActiveTabKey: y,
    tabBarExtraContent: E,
    hoverable: C,
    tabProps: O = {},
    classNames: R,
    styles: w
  } = e, $ = ou(e, ["prefixCls", "className", "rootClassName", "style", "extra", "headStyle", "bodyStyle", "title", "loading", "bordered", "size", "type", "cover", "actions", "tabList", "children", "activeTabKey", "defaultActiveTabKey", "tabBarExtraContent", "hoverable", "tabProps", "classNames", "styles"]), {
    getPrefixCls: A,
    direction: F,
    card: M
  } = u.useContext(ft);
  if (process.env.NODE_ENV !== "production") {
    const me = Ft("Card");
    [["headStyle", "styles.header"], ["bodyStyle", "styles.body"]].forEach((ae) => {
      let [te, re] = ae;
      me.deprecated(!(te in e), te, re);
    });
  }
  const I = (me) => {
    var ae;
    (ae = e.onTabChange) === null || ae === void 0 || ae.call(e, me);
  }, T = (me) => {
    var ae;
    return Z((ae = M == null ? void 0 : M.classNames) === null || ae === void 0 ? void 0 : ae[me], R == null ? void 0 : R[me]);
  }, k = (me) => {
    var ae;
    return Object.assign(Object.assign({}, (ae = M == null ? void 0 : M.styles) === null || ae === void 0 ? void 0 : ae[me]), w == null ? void 0 : w[me]);
  }, N = u.useMemo(() => {
    let me = !1;
    return u.Children.forEach(S, (ae) => {
      (ae == null ? void 0 : ae.type) === ov && (me = !0);
    }), me;
  }, [S]), x = A("card", r), [_, z, L] = E1(x), B = /* @__PURE__ */ u.createElement(gn, {
    loading: !0,
    active: !0,
    paragraph: {
      rows: 4
    },
    title: !1
  }, S), X = h !== void 0, W = Object.assign(Object.assign({}, O), {
    [X ? "activeKey" : "defaultActiveKey"]: X ? h : y,
    tabBarExtraContent: E
  });
  let G;
  const Q = Aa(v), Y = !Q || Q === "default" ? "large" : Q, J = g ? /* @__PURE__ */ u.createElement(ul, Object.assign({
    size: Y
  }, W, {
    className: `${x}-head-tabs`,
    onChange: I,
    items: g.map((me) => {
      var {
        tab: ae
      } = me, te = ou(me, ["tab"]);
      return Object.assign({
        label: ae
      }, te);
    })
  })) : null;
  if (c || i || J) {
    const me = Z(`${x}-head`, T("header")), ae = Z(`${x}-head-title`, T("title")), te = Z(`${x}-extra`, T("extra")), re = Object.assign(Object.assign({}, s), k("header"));
    G = /* @__PURE__ */ u.createElement("div", {
      className: me,
      style: re
    }, /* @__PURE__ */ u.createElement("div", {
      className: `${x}-head-wrapper`
    }, c && /* @__PURE__ */ u.createElement("div", {
      className: ae,
      style: k("title")
    }, c), i && /* @__PURE__ */ u.createElement("div", {
      className: te,
      style: k("extra")
    }, i)), J);
  }
  const ne = Z(`${x}-cover`, T("cover")), se = b ? /* @__PURE__ */ u.createElement("div", {
    className: ne,
    style: k("cover")
  }, b) : null, xe = Z(`${x}-body`, T("body")), de = Object.assign(Object.assign({}, l), k("body")), ue = /* @__PURE__ */ u.createElement("div", {
    className: xe,
    style: de
  }, d ? B : S), Ce = Z(`${x}-actions`, T("actions")), V = p != null && p.length ? /* @__PURE__ */ u.createElement(x1, {
    actionClasses: Ce,
    actionStyle: k("actions"),
    actions: p
  }) : null, le = Cr($, ["onTabChange"]), fe = Z(x, M == null ? void 0 : M.className, {
    [`${x}-loading`]: d,
    [`${x}-bordered`]: f,
    [`${x}-hoverable`]: C,
    [`${x}-contain-grid`]: N,
    [`${x}-contain-tabs`]: g == null ? void 0 : g.length,
    [`${x}-${Q}`]: Q,
    [`${x}-type-${m}`]: !!m,
    [`${x}-rtl`]: F === "rtl"
  }, n, a, z, L), Re = Object.assign(Object.assign({}, M == null ? void 0 : M.style), o);
  return _(/* @__PURE__ */ u.createElement("div", Object.assign({
    ref: t
  }, le, {
    className: fe,
    style: Re
  }), G, se, ue, V));
});
var $1 = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
    t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const O1 = (e) => {
  const {
    prefixCls: t,
    className: r,
    avatar: n,
    title: a,
    description: o
  } = e, i = $1(e, ["prefixCls", "className", "avatar", "title", "description"]), {
    getPrefixCls: s
  } = u.useContext(ft), l = s("card", t), c = Z(`${l}-meta`, r), d = n ? /* @__PURE__ */ u.createElement("div", {
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
}, Xo = w1;
Xo.Grid = ov;
Xo.Meta = O1;
process.env.NODE_ENV !== "production" && (Xo.displayName = "Card");
function R1(e) {
  return !!(e.addonBefore || e.addonAfter);
}
function P1(e) {
  return !!(e.prefix || e.suffix || e.allowClear);
}
function iu(e, t, r) {
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
function To(e, t, r, n) {
  if (r) {
    var a = t;
    if (t.type === "click") {
      a = iu(t, e, ""), r(a);
      return;
    }
    if (e.type !== "file" && n !== void 0) {
      a = iu(t, e, n), r(a);
      return;
    }
    r(a);
  }
}
function _1(e, t) {
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
var iv = /* @__PURE__ */ q.forwardRef(function(e, t) {
  var r, n, a = e.inputElement, o = e.children, i = e.prefixCls, s = e.prefix, l = e.suffix, c = e.addonBefore, d = e.addonAfter, f = e.className, v = e.style, m = e.disabled, b = e.readOnly, p = e.focused, g = e.triggerFocus, S = e.allowClear, h = e.value, y = e.handleReset, E = e.hidden, C = e.classes, O = e.classNames, R = e.dataAttrs, w = e.styles, $ = e.components, A = o ?? a, F = ($ == null ? void 0 : $.affixWrapper) || "span", M = ($ == null ? void 0 : $.groupWrapper) || "span", I = ($ == null ? void 0 : $.wrapper) || "span", T = ($ == null ? void 0 : $.groupAddon) || "span", k = Be(null), N = function(le) {
    var fe;
    (fe = k.current) !== null && fe !== void 0 && fe.contains(le.target) && (g == null || g());
  }, x = P1(e), _ = /* @__PURE__ */ wv(A, {
    value: h,
    className: Z(A.props.className, !x && (O == null ? void 0 : O.variant)) || null
  }), z = Be(null);
  if (q.useImperativeHandle(t, function() {
    return {
      nativeElement: z.current || k.current
    };
  }), x) {
    var L, B = null;
    if (S) {
      var X, W = !m && !b && h, G = "".concat(i, "-clear-icon"), Q = Ae(S) === "object" && S !== null && S !== void 0 && S.clearIcon ? S.clearIcon : "✖";
      B = /* @__PURE__ */ q.createElement("span", {
        onClick: y,
        onMouseDown: function(le) {
          return le.preventDefault();
        },
        className: Z(G, (X = {}, j(X, "".concat(G, "-hidden"), !W), j(X, "".concat(G, "-has-suffix"), !!l), X)),
        role: "button",
        tabIndex: -1
      }, Q);
    }
    var Y = "".concat(i, "-affix-wrapper"), J = Z(Y, (L = {}, j(L, "".concat(i, "-disabled"), m), j(L, "".concat(Y, "-disabled"), m), j(L, "".concat(Y, "-focused"), p), j(L, "".concat(Y, "-readonly"), b), j(L, "".concat(Y, "-input-with-clear-btn"), l && S && h), L), C == null ? void 0 : C.affixWrapper, O == null ? void 0 : O.affixWrapper, O == null ? void 0 : O.variant), ne = (l || S) && /* @__PURE__ */ q.createElement("span", {
      className: Z("".concat(i, "-suffix"), O == null ? void 0 : O.suffix),
      style: w == null ? void 0 : w.suffix
    }, B, l);
    _ = /* @__PURE__ */ q.createElement(F, _e({
      className: J,
      style: w == null ? void 0 : w.affixWrapper,
      onClick: N
    }, R == null ? void 0 : R.affixWrapper, {
      ref: k
    }), s && /* @__PURE__ */ q.createElement("span", {
      className: Z("".concat(i, "-prefix"), O == null ? void 0 : O.prefix),
      style: w == null ? void 0 : w.prefix
    }, s), _, ne);
  }
  if (R1(e)) {
    var se = "".concat(i, "-group"), xe = "".concat(se, "-addon"), de = "".concat(se, "-wrapper"), ue = Z("".concat(i, "-wrapper"), se, C == null ? void 0 : C.wrapper, O == null ? void 0 : O.wrapper), Ce = Z(de, j({}, "".concat(de, "-disabled"), m), C == null ? void 0 : C.group, O == null ? void 0 : O.groupWrapper);
    _ = /* @__PURE__ */ q.createElement(M, {
      className: Ce,
      ref: z
    }, /* @__PURE__ */ q.createElement(I, {
      className: ue
    }, c && /* @__PURE__ */ q.createElement(T, {
      className: xe
    }, c), _, d && /* @__PURE__ */ q.createElement(T, {
      className: xe
    }, d)));
  }
  return /* @__PURE__ */ q.cloneElement(_, {
    className: Z((r = _.props) === null || r === void 0 ? void 0 : r.className, f) || null,
    style: D(D({}, (n = _.props) === null || n === void 0 ? void 0 : n.style), v),
    hidden: E
  });
}), T1 = ["show"];
function sv(e, t) {
  return u.useMemo(function() {
    var r = {};
    t && (r.show = Ae(t) === "object" && t.formatter ? t.formatter : !!t), r = D(D({}, r), e);
    var n = r, a = n.show, o = Ye(n, T1);
    return D(D({}, o), {}, {
      show: !!a,
      showFormatter: typeof a == "function" ? a : void 0,
      strategy: o.strategy || function(i) {
        return i.length;
      }
    });
  }, [e, t]);
}
var N1 = ["autoComplete", "onChange", "onFocus", "onBlur", "onPressEnter", "onKeyDown", "prefixCls", "disabled", "htmlSize", "className", "maxLength", "suffix", "showCount", "count", "type", "classes", "classNames", "styles", "onCompositionStart", "onCompositionEnd"], I1 = /* @__PURE__ */ Vr(function(e, t) {
  var r = e.autoComplete, n = e.onChange, a = e.onFocus, o = e.onBlur, i = e.onPressEnter, s = e.onKeyDown, l = e.prefixCls, c = l === void 0 ? "rc-input" : l, d = e.disabled, f = e.htmlSize, v = e.className, m = e.maxLength, b = e.suffix, p = e.showCount, g = e.count, S = e.type, h = S === void 0 ? "text" : S, y = e.classes, E = e.classNames, C = e.styles, O = e.onCompositionStart, R = e.onCompositionEnd, w = Ye(e, N1), $ = bt(!1), A = K($, 2), F = A[0], M = A[1], I = Be(!1), T = Be(null), k = Be(null), N = function(re) {
    T.current && _1(T.current, re);
  }, x = cr(e.defaultValue, {
    value: e.value
  }), _ = K(x, 2), z = _[0], L = _[1], B = z == null ? "" : String(z), X = bt(null), W = K(X, 2), G = W[0], Q = W[1], Y = sv(g, p), J = Y.max || m, ne = Y.strategy(B), se = !!J && ne > J;
  No(t, function() {
    var te;
    return {
      focus: N,
      blur: function() {
        var be;
        (be = T.current) === null || be === void 0 || be.blur();
      },
      setSelectionRange: function(be, ye, ge) {
        var Pe;
        (Pe = T.current) === null || Pe === void 0 || Pe.setSelectionRange(be, ye, ge);
      },
      select: function() {
        var be;
        (be = T.current) === null || be === void 0 || be.select();
      },
      input: T.current,
      nativeElement: ((te = k.current) === null || te === void 0 ? void 0 : te.nativeElement) || T.current
    };
  }), yt(function() {
    M(function(te) {
      return te && d ? !1 : te;
    });
  }, [d]);
  var xe = function(re, be, ye) {
    var ge = be;
    if (!I.current && Y.exceedFormatter && Y.max && Y.strategy(be) > Y.max) {
      if (ge = Y.exceedFormatter(be, {
        max: Y.max
      }), be !== ge) {
        var Pe, ve;
        Q([((Pe = T.current) === null || Pe === void 0 ? void 0 : Pe.selectionStart) || 0, ((ve = T.current) === null || ve === void 0 ? void 0 : ve.selectionEnd) || 0]);
      }
    } else if (ye.source === "compositionEnd")
      return;
    L(ge), T.current && To(T.current, re, n, ge);
  };
  yt(function() {
    if (G) {
      var te;
      (te = T.current) === null || te === void 0 || te.setSelectionRange.apply(te, he(G));
    }
  }, [G]);
  var de = function(re) {
    xe(re, re.target.value, {
      source: "change"
    });
  }, ue = function(re) {
    I.current = !1, xe(re, re.currentTarget.value, {
      source: "compositionEnd"
    }), R == null || R(re);
  }, Ce = function(re) {
    i && re.key === "Enter" && i(re), s == null || s(re);
  }, V = function(re) {
    M(!0), a == null || a(re);
  }, le = function(re) {
    M(!1), o == null || o(re);
  }, fe = function(re) {
    L(""), N(), T.current && To(T.current, re, n);
  }, Re = se && "".concat(c, "-out-of-range"), me = function() {
    var re = Cr(e, [
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
    return /* @__PURE__ */ q.createElement("input", _e({
      autoComplete: r
    }, re, {
      onChange: de,
      onFocus: V,
      onBlur: le,
      onKeyDown: Ce,
      className: Z(c, j({}, "".concat(c, "-disabled"), d), E == null ? void 0 : E.input),
      style: C == null ? void 0 : C.input,
      ref: T,
      size: f,
      type: h,
      onCompositionStart: function(ye) {
        I.current = !0, O == null || O(ye);
      },
      onCompositionEnd: ue
    }));
  }, ae = function() {
    var re = Number(J) > 0;
    if (b || Y.show) {
      var be = Y.showFormatter ? Y.showFormatter({
        value: B,
        count: ne,
        maxLength: J
      }) : "".concat(ne).concat(re ? " / ".concat(J) : "");
      return /* @__PURE__ */ q.createElement(q.Fragment, null, Y.show && /* @__PURE__ */ q.createElement("span", {
        className: Z("".concat(c, "-show-count-suffix"), j({}, "".concat(c, "-show-count-has-suffix"), !!b), E == null ? void 0 : E.count),
        style: D({}, C == null ? void 0 : C.count)
      }, be), b);
    }
    return null;
  };
  return /* @__PURE__ */ q.createElement(iv, _e({}, w, {
    prefixCls: c,
    className: Z(v, Re),
    handleReset: fe,
    value: B,
    focused: F,
    triggerFocus: N,
    suffix: ae(),
    disabled: d,
    classes: y,
    classNames: E,
    styles: C
  }), me());
});
const lv = (e) => {
  let t;
  return typeof e == "object" && (e != null && e.clearIcon) ? t = e : e && (t = {
    clearIcon: /* @__PURE__ */ q.createElement(Hd, null)
  }), t;
};
function M1(e, t) {
  const r = Be([]), n = () => {
    r.current.push(setTimeout(() => {
      var a, o, i, s;
      !((a = e.current) === null || a === void 0) && a.input && ((o = e.current) === null || o === void 0 ? void 0 : o.input.getAttribute("type")) === "password" && (!((i = e.current) === null || i === void 0) && i.input.hasAttribute("value")) && ((s = e.current) === null || s === void 0 || s.input.removeAttribute("value"));
    }));
  };
  return yt(() => (n(), () => r.current.forEach((a) => {
    a && clearTimeout(a);
  })), []), n;
}
function A1(e) {
  return !!(e.prefix || e.suffix || e.allowClear || e.showCount);
}
var j1 = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
    t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
function F1(e, t) {
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
const L1 = /* @__PURE__ */ Vr((e, t) => {
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
    className: b,
    style: p,
    styles: g,
    rootClassName: S,
    onChange: h,
    classNames: y,
    variant: E
  } = e, C = j1(e, ["prefixCls", "bordered", "status", "size", "disabled", "onBlur", "onFocus", "suffix", "allowClear", "addonAfter", "addonBefore", "className", "style", "styles", "rootClassName", "onChange", "classNames", "variant"]);
  if (process.env.NODE_ENV !== "production") {
    const {
      deprecated: V
    } = Ft("Input");
    V(!("bordered" in e), "bordered", "variant");
  }
  const {
    getPrefixCls: O,
    direction: R,
    input: w
  } = q.useContext(ft), $ = O("input", n), A = Be(null), F = Gs($), [M, I, T] = Yf($, F), {
    compactSize: k,
    compactItemClassnames: N
  } = Zd($, R), x = Aa((V) => {
    var le;
    return (le = i ?? k) !== null && le !== void 0 ? le : V;
  }), _ = q.useContext(Dn), z = s ?? _, {
    status: L,
    hasFeedback: B,
    feedbackIcon: X
  } = Ht(Pa), W = wf(L, o), G = A1(e) || !!B, Q = Be(G);
  if (process.env.NODE_ENV !== "production") {
    const V = Ft("Input");
    yt(() => {
      var le;
      G && !Q.current && process.env.NODE_ENV !== "production" && V(document.activeElement === ((le = A.current) === null || le === void 0 ? void 0 : le.input), "usage", "When Input is focused, dynamic add or remove prefix / suffix will make it lose focus caused by dom structure change. Read more: https://ant.design/components/input/#FAQ"), Q.current = G;
    }, [G]);
  }
  const Y = M1(A), J = (V) => {
    Y(), l == null || l(V);
  }, ne = (V) => {
    Y(), c == null || c(V);
  }, se = (V) => {
    Y(), h == null || h(V);
  }, xe = (B || d) && /* @__PURE__ */ q.createElement(q.Fragment, null, d, B && X), de = lv(f ?? (w == null ? void 0 : w.allowClear)), [ue, Ce] = $f("input", E, a);
  return M(/* @__PURE__ */ q.createElement(I1, Object.assign({
    ref: Pr(t, A),
    prefixCls: $,
    autoComplete: w == null ? void 0 : w.autoComplete
  }, C, {
    disabled: z,
    onBlur: J,
    onFocus: ne,
    style: Object.assign(Object.assign({}, w == null ? void 0 : w.style), p),
    styles: Object.assign(Object.assign({}, w == null ? void 0 : w.styles), g),
    suffix: xe,
    allowClear: de,
    className: Z(b, S, T, F, N, w == null ? void 0 : w.className),
    onChange: se,
    addonBefore: m && /* @__PURE__ */ q.createElement(Ss, {
      form: !0,
      space: !0
    }, m),
    addonAfter: v && /* @__PURE__ */ q.createElement(Ss, {
      form: !0,
      space: !0
    }, v),
    classNames: Object.assign(Object.assign(Object.assign({}, y), w == null ? void 0 : w.classNames), {
      input: Z({
        [`${$}-sm`]: x === "small",
        [`${$}-lg`]: x === "large",
        [`${$}-rtl`]: R === "rtl"
      }, y == null ? void 0 : y.input, (r = w == null ? void 0 : w.classNames) === null || r === void 0 ? void 0 : r.input, I),
      variant: Z({
        [`${$}-${ue}`]: Ce
      }, Es($, W)),
      affixWrapper: Z({
        [`${$}-affix-wrapper-sm`]: x === "small",
        [`${$}-affix-wrapper-lg`]: x === "large",
        [`${$}-affix-wrapper-rtl`]: R === "rtl"
      }, I),
      wrapper: Z({
        [`${$}-group-rtl`]: R === "rtl"
      }, I),
      groupWrapper: Z({
        [`${$}-group-wrapper-sm`]: x === "small",
        [`${$}-group-wrapper-lg`]: x === "large",
        [`${$}-group-wrapper-rtl`]: R === "rtl",
        [`${$}-group-wrapper-${ue}`]: Ce
      }, Es(`${$}-group-wrapper`, W, B), I)
    })
  })));
});
process.env.NODE_ENV !== "production" && (L1.displayName = "Input");
var D1 = `
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
`, z1 = ["letter-spacing", "line-height", "padding-top", "padding-bottom", "font-family", "font-weight", "font-size", "font-variant", "text-rendering", "text-transform", "width", "text-indent", "padding-left", "padding-right", "border-width", "box-sizing", "word-break", "white-space"], xi = {}, sr;
function V1(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, r = e.getAttribute("id") || e.getAttribute("data-reactid") || e.getAttribute("name");
  if (t && xi[r])
    return xi[r];
  var n = window.getComputedStyle(e), a = n.getPropertyValue("box-sizing") || n.getPropertyValue("-moz-box-sizing") || n.getPropertyValue("-webkit-box-sizing"), o = parseFloat(n.getPropertyValue("padding-bottom")) + parseFloat(n.getPropertyValue("padding-top")), i = parseFloat(n.getPropertyValue("border-bottom-width")) + parseFloat(n.getPropertyValue("border-top-width")), s = z1.map(function(c) {
    return "".concat(c, ":").concat(n.getPropertyValue(c));
  }).join(";"), l = {
    sizingStyle: s,
    paddingSize: o,
    borderSize: i,
    boxSizing: a
  };
  return t && r && (xi[r] = l), l;
}
function B1(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
  sr || (sr = document.createElement("textarea"), sr.setAttribute("tab-index", "-1"), sr.setAttribute("aria-hidden", "true"), document.body.appendChild(sr)), e.getAttribute("wrap") ? sr.setAttribute("wrap", e.getAttribute("wrap")) : sr.removeAttribute("wrap");
  var a = V1(e, t), o = a.paddingSize, i = a.borderSize, s = a.boxSizing, l = a.sizingStyle;
  sr.setAttribute("style", "".concat(l, ";").concat(D1)), sr.value = e.value || e.placeholder || "";
  var c = void 0, d = void 0, f, v = sr.scrollHeight;
  if (s === "border-box" ? v += i : s === "content-box" && (v -= o), r !== null || n !== null) {
    sr.value = " ";
    var m = sr.scrollHeight - o;
    r !== null && (c = m * r, s === "border-box" && (c = c + o + i), v = Math.max(c, v)), n !== null && (d = m * n, s === "border-box" && (d = d + o + i), f = v > d ? "" : "hidden", v = Math.min(d, v));
  }
  var b = {
    height: v,
    overflowY: f,
    resize: "none"
  };
  return c && (b.minHeight = c), d && (b.maxHeight = d), b;
}
var k1 = ["prefixCls", "onPressEnter", "defaultValue", "value", "autoSize", "onResize", "className", "style", "disabled", "onChange", "onInternalAutoSize"], wi = 0, $i = 1, Oi = 2, H1 = /* @__PURE__ */ u.forwardRef(function(e, t) {
  var r = e, n = r.prefixCls;
  r.onPressEnter;
  var a = r.defaultValue, o = r.value, i = r.autoSize, s = r.onResize, l = r.className, c = r.style, d = r.disabled, f = r.onChange, v = r.onInternalAutoSize, m = Ye(r, k1), b = cr(a, {
    value: o,
    postState: function(Q) {
      return Q ?? "";
    }
  }), p = K(b, 2), g = p[0], S = p[1], h = function(Q) {
    S(Q.target.value), f == null || f(Q);
  }, y = u.useRef();
  u.useImperativeHandle(t, function() {
    return {
      textArea: y.current
    };
  });
  var E = u.useMemo(function() {
    return i && Ae(i) === "object" ? [i.minRows, i.maxRows] : [];
  }, [i]), C = K(E, 2), O = C[0], R = C[1], w = !!i, $ = function() {
    try {
      if (document.activeElement === y.current) {
        var Q = y.current, Y = Q.selectionStart, J = Q.selectionEnd, ne = Q.scrollTop;
        y.current.setSelectionRange(Y, J), y.current.scrollTop = ne;
      }
    } catch {
    }
  }, A = u.useState(Oi), F = K(A, 2), M = F[0], I = F[1], T = u.useState(), k = K(T, 2), N = k[0], x = k[1], _ = function() {
    I(wi), process.env.NODE_ENV === "test" && (v == null || v());
  };
  Ct(function() {
    w && _();
  }, [o, O, R, w]), Ct(function() {
    if (M === wi)
      I($i);
    else if (M === $i) {
      var G = B1(y.current, !1, O, R);
      I(Oi), x(G);
    } else
      $();
  }, [M]);
  var z = u.useRef(), L = function() {
    Nt.cancel(z.current);
  }, B = function(Q) {
    M === Oi && (s == null || s(Q), i && (L(), z.current = Nt(function() {
      _();
    })));
  };
  u.useEffect(function() {
    return L;
  }, []);
  var X = w ? N : null, W = D(D({}, c), X);
  return (M === wi || M === $i) && (W.overflowY = "hidden", W.overflowX = "hidden"), /* @__PURE__ */ u.createElement(hr, {
    onResize: B,
    disabled: !(i || s)
  }, /* @__PURE__ */ u.createElement("textarea", _e({}, m, {
    ref: y,
    style: W,
    className: Z(n, l, j({}, "".concat(n, "-disabled"), d)),
    disabled: d,
    value: g,
    onChange: h
  })));
}), W1 = ["defaultValue", "value", "onFocus", "onBlur", "onChange", "allowClear", "maxLength", "onCompositionStart", "onCompositionEnd", "suffix", "prefixCls", "showCount", "count", "className", "style", "disabled", "hidden", "classNames", "styles", "onResize", "readOnly"], K1 = /* @__PURE__ */ q.forwardRef(function(e, t) {
  var r, n = e.defaultValue, a = e.value, o = e.onFocus, i = e.onBlur, s = e.onChange, l = e.allowClear, c = e.maxLength, d = e.onCompositionStart, f = e.onCompositionEnd, v = e.suffix, m = e.prefixCls, b = m === void 0 ? "rc-textarea" : m, p = e.showCount, g = e.count, S = e.className, h = e.style, y = e.disabled, E = e.hidden, C = e.classNames, O = e.styles, R = e.onResize, w = e.readOnly, $ = Ye(e, W1), A = cr(n, {
    value: a,
    defaultValue: n
  }), F = K(A, 2), M = F[0], I = F[1], T = M == null ? "" : String(M), k = q.useState(!1), N = K(k, 2), x = N[0], _ = N[1], z = q.useRef(!1), L = q.useState(null), B = K(L, 2), X = B[0], W = B[1], G = Be(null), Q = Be(null), Y = function() {
    var we;
    return (we = Q.current) === null || we === void 0 ? void 0 : we.textArea;
  }, J = function() {
    Y().focus();
  };
  No(t, function() {
    var $e;
    return {
      resizableTextArea: Q.current,
      focus: J,
      blur: function() {
        Y().blur();
      },
      nativeElement: (($e = G.current) === null || $e === void 0 ? void 0 : $e.nativeElement) || Y()
    };
  }), yt(function() {
    _(function($e) {
      return !y && $e;
    });
  }, [y]);
  var ne = q.useState(null), se = K(ne, 2), xe = se[0], de = se[1];
  q.useEffect(function() {
    if (xe) {
      var $e;
      ($e = Y()).setSelectionRange.apply($e, he(xe));
    }
  }, [xe]);
  var ue = sv(g, p), Ce = (r = ue.max) !== null && r !== void 0 ? r : c, V = Number(Ce) > 0, le = ue.strategy(T), fe = !!Ce && le > Ce, Re = function(we, je) {
    var ze = je;
    !z.current && ue.exceedFormatter && ue.max && ue.strategy(je) > ue.max && (ze = ue.exceedFormatter(je, {
      max: ue.max
    }), je !== ze && de([Y().selectionStart || 0, Y().selectionEnd || 0])), I(ze), To(we.currentTarget, we, s, ze);
  }, me = function(we) {
    z.current = !0, d == null || d(we);
  }, ae = function(we) {
    z.current = !1, Re(we, we.currentTarget.value), f == null || f(we);
  }, te = function(we) {
    Re(we, we.target.value);
  }, re = function(we) {
    var je = $.onPressEnter, ze = $.onKeyDown;
    we.key === "Enter" && je && je(we), ze == null || ze(we);
  }, be = function(we) {
    _(!0), o == null || o(we);
  }, ye = function(we) {
    _(!1), i == null || i(we);
  }, ge = function(we) {
    I(""), J(), To(Y(), we, s);
  }, Pe = v, ve;
  ue.show && (ue.showFormatter ? ve = ue.showFormatter({
    value: T,
    count: le,
    maxLength: Ce
  }) : ve = "".concat(le).concat(V ? " / ".concat(Ce) : ""), Pe = /* @__PURE__ */ q.createElement(q.Fragment, null, Pe, /* @__PURE__ */ q.createElement("span", {
    className: Z("".concat(b, "-data-count"), C == null ? void 0 : C.count),
    style: O == null ? void 0 : O.count
  }, ve)));
  var vt = function(we) {
    var je;
    R == null || R(we), (je = Y()) !== null && je !== void 0 && je.style.height && W(!0);
  }, it = !$.autoSize && !p && !l;
  return /* @__PURE__ */ q.createElement(iv, {
    ref: G,
    value: T,
    allowClear: l,
    handleReset: ge,
    suffix: Pe,
    prefixCls: b,
    classNames: D(D({}, C), {}, {
      affixWrapper: Z(C == null ? void 0 : C.affixWrapper, j(j({}, "".concat(b, "-show-count"), p), "".concat(b, "-textarea-allow-clear"), l))
    }),
    disabled: y,
    focused: x,
    className: Z(S, fe && "".concat(b, "-out-of-range")),
    style: D(D({}, h), X && !it ? {
      height: "auto"
    } : {}),
    dataAttrs: {
      affixWrapper: {
        "data-count": typeof ve == "string" ? ve : void 0
      }
    },
    hidden: E,
    readOnly: w
  }, /* @__PURE__ */ q.createElement(H1, _e({}, $, {
    maxLength: c,
    onKeyDown: re,
    onChange: te,
    onFocus: be,
    onBlur: ye,
    onCompositionStart: me,
    onCompositionEnd: ae,
    className: Z(C == null ? void 0 : C.textarea),
    style: D(D({}, O == null ? void 0 : O.textarea), {}, {
      resize: h == null ? void 0 : h.resize
    }),
    disabled: y,
    prefixCls: b,
    onResize: vt,
    ref: Q,
    readOnly: w
  })));
}), U1 = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
    t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const cv = /* @__PURE__ */ Vr((e, t) => {
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
    styles: b,
    variant: p
  } = e, g = U1(e, ["prefixCls", "bordered", "size", "disabled", "status", "allowClear", "classNames", "rootClassName", "className", "style", "styles", "variant"]);
  if (process.env.NODE_ENV !== "production") {
    const {
      deprecated: L
    } = Ft("TextArea");
    L(!("bordered" in e), "bordered", "variant");
  }
  const {
    getPrefixCls: S,
    direction: h,
    textArea: y
  } = u.useContext(ft), E = Aa(i), C = u.useContext(Dn), O = s ?? C, {
    status: R,
    hasFeedback: w,
    feedbackIcon: $
  } = u.useContext(Pa), A = wf(R, l), F = u.useRef(null);
  u.useImperativeHandle(t, () => {
    var L;
    return {
      resizableTextArea: (L = F.current) === null || L === void 0 ? void 0 : L.resizableTextArea,
      focus: (B) => {
        var X, W;
        F1((W = (X = F.current) === null || X === void 0 ? void 0 : X.resizableTextArea) === null || W === void 0 ? void 0 : W.textArea, B);
      },
      blur: () => {
        var B;
        return (B = F.current) === null || B === void 0 ? void 0 : B.blur();
      }
    };
  });
  const M = S("input", a), I = Gs(M), [T, k, N] = Yf(M, I), [x, _] = $f("textArea", p, o), z = lv(c ?? (y == null ? void 0 : y.allowClear));
  return T(/* @__PURE__ */ u.createElement(K1, Object.assign({
    autoComplete: y == null ? void 0 : y.autoComplete
  }, g, {
    style: Object.assign(Object.assign({}, y == null ? void 0 : y.style), m),
    styles: Object.assign(Object.assign({}, y == null ? void 0 : y.styles), b),
    disabled: O,
    allowClear: z,
    className: Z(N, I, v, f, y == null ? void 0 : y.className),
    classNames: Object.assign(Object.assign(Object.assign({}, d), y == null ? void 0 : y.classNames), {
      textarea: Z({
        [`${M}-sm`]: E === "small",
        [`${M}-lg`]: E === "large"
      }, k, d == null ? void 0 : d.textarea, (r = y == null ? void 0 : y.classNames) === null || r === void 0 ? void 0 : r.textarea),
      variant: Z({
        [`${M}-${x}`]: _
      }, Es(M, A)),
      affixWrapper: Z(`${M}-textarea-affix-wrapper`, {
        [`${M}-affix-wrapper-rtl`]: h === "rtl",
        [`${M}-affix-wrapper-sm`]: E === "small",
        [`${M}-affix-wrapper-lg`]: E === "large",
        [`${M}-textarea-show-count`]: e.showCount || ((n = e.count) === null || n === void 0 ? void 0 : n.show)
      }, k)
    }),
    prefixCls: M,
    suffix: w && /* @__PURE__ */ u.createElement("span", {
      className: `${M}-textarea-suffix`
    }, $),
    ref: F
  })));
});
function su(e) {
  return ["small", "middle", "large"].includes(e);
}
const uv = ["wrap", "nowrap", "wrap-reverse"], dv = ["flex-start", "flex-end", "start", "end", "center", "space-between", "space-around", "space-evenly", "stretch", "normal", "left", "right"], fv = ["center", "start", "end", "flex-start", "flex-end", "self-start", "self-end", "baseline", "normal", "stretch"], G1 = (e, t) => {
  const r = t.wrap === !0 ? "wrap" : t.wrap;
  return {
    [`${e}-wrap-${r}`]: r && uv.includes(r)
  };
}, q1 = (e, t) => {
  const r = {};
  return fv.forEach((n) => {
    r[`${e}-align-${n}`] = t.align === n;
  }), r[`${e}-align-stretch`] = !t.align && !!t.vertical, r;
}, X1 = (e, t) => {
  const r = {};
  return dv.forEach((n) => {
    r[`${e}-justify-${n}`] = t.justify === n;
  }), r;
};
function Y1(e, t) {
  return Z(Object.assign(Object.assign(Object.assign({}, G1(e, t)), q1(e, t)), X1(e, t)));
}
const Z1 = (e) => {
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
}, Q1 = (e) => {
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
}, J1 = (e) => {
  const {
    componentCls: t
  } = e, r = {};
  return uv.forEach((n) => {
    r[`${t}-wrap-${n}`] = {
      flexWrap: n
    };
  }), r;
}, eE = (e) => {
  const {
    componentCls: t
  } = e, r = {};
  return fv.forEach((n) => {
    r[`${t}-align-${n}`] = {
      alignItems: n
    };
  }), r;
}, tE = (e) => {
  const {
    componentCls: t
  } = e, r = {};
  return dv.forEach((n) => {
    r[`${t}-justify-${n}`] = {
      justifyContent: n
    };
  }), r;
}, rE = () => ({}), nE = en("Flex", (e) => {
  const {
    paddingXS: t,
    padding: r,
    paddingLG: n
  } = e, a = Zt(e, {
    flexGapSM: t,
    flexGap: r,
    flexGapLG: n
  });
  return [Z1(a), Q1(a), J1(a), eE(a), tE(a)];
}, rE, {
  // Flex component don't apply extra font style
  // https://github.com/ant-design/ant-design/issues/46403
  resetStyle: !1
});
var aE = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
    t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const ua = /* @__PURE__ */ q.forwardRef((e, t) => {
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
  } = e, f = aE(e, ["prefixCls", "rootClassName", "className", "style", "flex", "gap", "children", "vertical", "component"]), {
    flex: v,
    direction: m,
    getPrefixCls: b
  } = q.useContext(ft), p = b("flex", r), [g, S, h] = nE(p), y = c ?? (v == null ? void 0 : v.vertical), E = Z(a, n, v == null ? void 0 : v.className, p, S, h, Y1(p, e), {
    [`${p}-rtl`]: m === "rtl",
    [`${p}-gap-${s}`]: su(s),
    [`${p}-vertical`]: y
  }), C = Object.assign(Object.assign({}, v == null ? void 0 : v.style), o);
  return i && (C.flex = i), s && !su(s) && (C.gap = s), g(/* @__PURE__ */ q.createElement(d, Object.assign({
    ref: t,
    className: E,
    style: C
  }, Cr(f, ["justify", "wrap", "align"])), l));
});
process.env.NODE_ENV !== "production" && (ua.displayName = "Flex");
var oE = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
    t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const iE = {
  border: 0,
  background: "transparent",
  padding: 0,
  lineHeight: "inherit",
  display: "inline-flex"
}, Ts = /* @__PURE__ */ u.forwardRef((e, t) => {
  const r = (d) => {
    const {
      keyCode: f
    } = d;
    f === ce.ENTER && d.preventDefault();
  }, n = (d) => {
    const {
      keyCode: f
    } = d, {
      onClick: v
    } = e;
    f === ce.ENTER && v && v();
  }, {
    style: a,
    noStyle: o,
    disabled: i,
    tabIndex: s = 0
  } = e, l = oE(e, ["style", "noStyle", "disabled", "tabIndex"]);
  let c = {};
  return o || (c = Object.assign({}, iE)), i && (c.pointerEvents = "none"), c = Object.assign(Object.assign({}, c), a), /* @__PURE__ */ u.createElement("div", Object.assign({
    role: "button",
    tabIndex: s,
    ref: t
  }, l, {
    onKeyDown: r,
    onKeyUp: n,
    style: c
  }));
});
var sE = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z" } }] }, name: "edit", theme: "outlined" }, lE = function(t, r) {
  return /* @__PURE__ */ u.createElement(nr, _e({}, t, {
    ref: r,
    icon: sE
  }));
}, vv = /* @__PURE__ */ u.forwardRef(lE);
process.env.NODE_ENV !== "production" && (vv.displayName = "EditOutlined");
var cE = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z" } }] }, name: "enter", theme: "outlined" }, uE = function(t, r) {
  return /* @__PURE__ */ u.createElement(nr, _e({}, t, {
    ref: r,
    icon: cE
  }));
}, gv = /* @__PURE__ */ u.forwardRef(uE);
process.env.NODE_ENV !== "production" && (gv.displayName = "EnterOutlined");
const dE = (e, t, r, n) => {
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
}, fE = (e) => {
  const t = [1, 2, 3, 4, 5], r = {};
  return t.forEach((n) => {
    r[`
      h${n}&,
      div&-h${n},
      div&-h${n} > textarea,
      h${n}
    `] = dE(e[`fontSizeHeading${n}`], e[`lineHeightHeading${n}`], e.colorTextHeading, e);
  }), r;
}, vE = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    "a&, a": Object.assign(Object.assign({}, Cd(e)), {
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
}, gE = (e) => ({
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
    backgroundColor: Zi[2]
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
}), mE = (e) => {
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
        marginBottom: `calc(1em - ${ee(n)})`
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
}, pE = (e) => ({
  [`${e.componentCls}-copy-success`]: {
    "\n    &,\n    &:hover,\n    &:focus": {
      color: e.colorSuccess
    }
  },
  [`${e.componentCls}-copy-icon-only`]: {
    marginInlineStart: 0
  }
}), hE = () => ({
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
}), bE = (e) => {
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
    }, fE(e)), {
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
    }), gE(e)), vE(e)), {
      // Operation
      [`
        ${t}-expand,
        ${t}-collapse,
        ${t}-edit,
        ${t}-copy
      `]: Object.assign(Object.assign({}, Cd(e)), {
        marginInlineStart: e.marginXXS
      })
    }), mE(e)), pE(e)), hE()), {
      "&-rtl": {
        direction: "rtl"
      }
    })
  };
}, yE = () => ({
  titleMarginTop: "1.2em",
  titleMarginBottom: "0.5em"
}), mv = en("Typography", (e) => [bE(e)], yE), SE = (e) => {
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
    enterIcon: m = /* @__PURE__ */ u.createElement(gv, null)
  } = e, b = u.useRef(null), p = u.useRef(!1), g = u.useRef(), [S, h] = u.useState(l);
  u.useEffect(() => {
    h(l);
  }, [l]), u.useEffect(() => {
    var k;
    if (!((k = b.current) === null || k === void 0) && k.resizableTextArea) {
      const {
        textArea: N
      } = b.current.resizableTextArea;
      N.focus();
      const {
        length: x
      } = N.value;
      N.setSelectionRange(x, x);
    }
  }, []);
  const y = (k) => {
    let {
      target: N
    } = k;
    h(N.value.replace(/[\n\r]/g, ""));
  }, E = () => {
    p.current = !0;
  }, C = () => {
    p.current = !1;
  }, O = (k) => {
    let {
      keyCode: N
    } = k;
    p.current || (g.current = N);
  }, R = () => {
    c(S.trim());
  }, w = (k) => {
    let {
      keyCode: N,
      ctrlKey: x,
      altKey: _,
      metaKey: z,
      shiftKey: L
    } = k;
    g.current === N && !p.current && !x && !_ && !z && !L && (N === ce.ENTER ? (R(), f == null || f()) : N === ce.ESC && d());
  }, $ = () => {
    R();
  }, A = v ? `${t}-${v}` : "", [F, M, I] = mv(t), T = Z(t, `${t}-edit-content`, {
    [`${t}-rtl`]: o === "rtl"
  }, n, A, M, I);
  return F(/* @__PURE__ */ u.createElement("div", {
    className: T,
    style: a
  }, /* @__PURE__ */ u.createElement(cv, {
    ref: b,
    maxLength: i,
    value: S,
    onChange: y,
    onKeyDown: O,
    onKeyUp: w,
    onCompositionStart: E,
    onCompositionEnd: C,
    onBlur: $,
    "aria-label": r,
    rows: 1,
    autoSize: s
  }), m !== null ? Vo(m, {
    className: `${t}-edit-content-confirm`
  }) : null));
};
var CE = function() {
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
}, EE = CE, lu = {
  "text/plain": "Text",
  "text/html": "Url",
  default: "Text"
}, xE = "Copy to clipboard: #{key}, Enter";
function wE(e) {
  var t = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
  return e.replace(/#{\s*key\s*}/g, t);
}
function $E(e, t) {
  var r, n, a, o, i, s, l = !1;
  t || (t = {}), r = t.debug || !1;
  try {
    a = EE(), o = document.createRange(), i = document.getSelection(), s = document.createElement("span"), s.textContent = e, s.ariaHidden = "true", s.style.all = "unset", s.style.position = "fixed", s.style.top = 0, s.style.clip = "rect(0, 0, 0, 0)", s.style.whiteSpace = "pre", s.style.webkitUserSelect = "text", s.style.MozUserSelect = "text", s.style.msUserSelect = "text", s.style.userSelect = "text", s.addEventListener("copy", function(d) {
      if (d.stopPropagation(), t.format)
        if (d.preventDefault(), typeof d.clipboardData > "u") {
          r && console.warn("unable to use e.clipboardData"), r && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
          var f = lu[t.format] || lu.default;
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
      r && console.error("unable to copy using clipboardData: ", f), r && console.error("falling back to prompt"), n = wE("message" in t ? t.message : xE), window.prompt(n, e);
    }
  } finally {
    i && (typeof i.removeRange == "function" ? i.removeRange(o) : i.removeAllRanges()), s && document.body.removeChild(s), a();
  }
  return l;
}
var OE = $E;
const RE = /* @__PURE__ */ vu(OE);
var PE = function(e, t, r, n) {
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
const _E = (e) => {
  let {
    copyConfig: t,
    children: r
  } = e;
  const [n, a] = u.useState(!1), [o, i] = u.useState(!1), s = u.useRef(null), l = () => {
    s.current && clearTimeout(s.current);
  }, c = {};
  t.format && (c.format = t.format), u.useEffect(() => l, []);
  const d = kt((f) => PE(void 0, void 0, void 0, function* () {
    var v;
    f == null || f.preventDefault(), f == null || f.stopPropagation(), i(!0);
    try {
      const m = typeof t.text == "function" ? yield t.text() : t.text;
      RE(m || String(r) || "", c), i(!1), a(!0), l(), s.current = setTimeout(() => {
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
function Ri(e, t) {
  return u.useMemo(() => {
    const r = !!e;
    return [r, Object.assign(Object.assign({}, t), r && typeof e == "object" ? e : null)];
  }, [e]);
}
const TE = (e) => {
  const t = Be();
  return yt(() => {
    t.current = e;
  }), t.current;
}, NE = (e, t) => {
  const r = u.useRef(!1);
  u.useEffect(() => {
    r.current ? e() : r.current = !0;
  }, t);
};
var IE = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
    t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const dl = /* @__PURE__ */ u.forwardRef((e, t) => {
  const {
    prefixCls: r,
    component: n = "article",
    className: a,
    rootClassName: o,
    setContentRef: i,
    children: s,
    direction: l,
    style: c
  } = e, d = IE(e, ["prefixCls", "component", "className", "rootClassName", "setContentRef", "children", "direction", "style"]), {
    getPrefixCls: f,
    direction: v,
    typography: m
  } = u.useContext(ft), b = l ?? v;
  let p = t;
  i && (p = Pr(t, i)), process.env.NODE_ENV !== "production" && Ft("Typography").deprecated(!i, "setContentRef", "ref");
  const g = f("typography", r), [S, h, y] = mv(g), E = Z(g, m == null ? void 0 : m.className, {
    [`${g}-rtl`]: b === "rtl"
  }, a, o, h, y), C = Object.assign(Object.assign({}, m == null ? void 0 : m.style), c);
  return S(
    // @ts-expect-error: Expression produces a union type that is too complex to represent.
    /* @__PURE__ */ u.createElement(n, Object.assign({
      className: E,
      style: C,
      ref: p
    }, d), s)
  );
});
process.env.NODE_ENV !== "production" && (dl.displayName = "Typography");
var ME = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z" } }] }, name: "copy", theme: "outlined" }, AE = function(t, r) {
  return /* @__PURE__ */ u.createElement(nr, _e({}, t, {
    ref: r,
    icon: ME
  }));
}, pv = /* @__PURE__ */ u.forwardRef(AE);
process.env.NODE_ENV !== "production" && (pv.displayName = "CopyOutlined");
function cu(e) {
  return e === !1 ? [!1, !1] : Array.isArray(e) ? e : [e];
}
function ao(e, t, r) {
  return e === !0 || e === void 0 ? t : e || r && t;
}
const jE = (e) => {
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
  } = e, d = cu(o), f = cu(i), {
    copied: v,
    copy: m
  } = n ?? {}, b = r ? ao(d[1], v) : ao(d[0], m), g = typeof b == "string" ? b : r ? v : m;
  return /* @__PURE__ */ u.createElement(Da, {
    key: "copy",
    title: b
  }, /* @__PURE__ */ u.createElement(Ts, {
    className: Z(`${t}-copy`, {
      [`${t}-copy-success`]: r,
      [`${t}-copy-icon-only`]: a
    }),
    onClick: c,
    "aria-label": g,
    tabIndex: l
  }, r ? ao(f[1], /* @__PURE__ */ u.createElement(Of, null), !0) : ao(f[0], s ? /* @__PURE__ */ u.createElement(qs, null) : /* @__PURE__ */ u.createElement(pv, null), !0)));
}, oo = /* @__PURE__ */ u.forwardRef((e, t) => {
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
function hv(e) {
  const t = typeof e;
  return t === "string" || t === "number";
}
function FE(e) {
  let t = 0;
  return e.forEach((r) => {
    hv(r) ? t += String(r).length : t += 1;
  }), t;
}
function uu(e, t) {
  let r = 0;
  const n = [];
  for (let a = 0; a < e.length; a += 1) {
    if (r === t)
      return n;
    const o = e[a], s = hv(o) ? String(o).length : 1, l = r + s;
    if (l > t) {
      const c = t - r;
      return n.push(String(o).slice(0, c)), n;
    }
    n.push(o), r = l;
  }
  return e;
}
const Pi = 0, _i = 1, Ti = 2, Ni = 3, du = 4, io = {
  display: "-webkit-box",
  overflow: "hidden",
  WebkitBoxOrient: "vertical"
};
function LE(e) {
  const {
    enableMeasure: t,
    width: r,
    text: n,
    children: a,
    rows: o,
    expanded: i,
    miscDeps: s,
    onEllipsis: l
  } = e, c = u.useMemo(() => Zr(n), [n]), d = u.useMemo(() => FE(c), [n]), f = u.useMemo(() => a(c, !1), [n]), [v, m] = u.useState(null), b = u.useRef(null), p = u.useRef(null), g = u.useRef(null), S = u.useRef(null), h = u.useRef(null), [y, E] = u.useState(!1), [C, O] = u.useState(Pi), [R, w] = u.useState(0), [$, A] = u.useState(null);
  Ct(() => {
    O(t && r && d ? _i : Pi);
  }, [r, n, o, t, c]), Ct(() => {
    var T, k, N, x;
    if (C === _i) {
      O(Ti);
      const _ = p.current && getComputedStyle(p.current).whiteSpace;
      A(_);
    } else if (C === Ti) {
      const _ = !!(!((T = g.current) === null || T === void 0) && T.isExceed());
      O(_ ? Ni : du), m(_ ? [0, d] : null), E(_);
      const z = ((k = g.current) === null || k === void 0 ? void 0 : k.getHeight()) || 0, L = o === 1 ? 0 : ((N = S.current) === null || N === void 0 ? void 0 : N.getHeight()) || 0, B = ((x = h.current) === null || x === void 0 ? void 0 : x.getHeight()) || 0, X = L + B, W = Math.max(z, X);
      w(W + 1), l(_);
    }
  }, [C]);
  const F = v ? Math.ceil((v[0] + v[1]) / 2) : 0;
  Ct(() => {
    var T;
    const [k, N] = v || [0, 0];
    if (k !== N) {
      const _ = (((T = b.current) === null || T === void 0 ? void 0 : T.getHeight()) || 0) > R;
      let z = F;
      N - k === 1 && (z = _ ? k : N), m(_ ? [k, z] : [z, N]);
    }
  }, [v, F]);
  const M = u.useMemo(() => {
    if (C !== Ni || !v || v[0] !== v[1]) {
      const T = a(c, !1);
      return C !== du && C !== Pi ? /* @__PURE__ */ u.createElement("span", {
        style: Object.assign(Object.assign({}, io), {
          WebkitLineClamp: o
        })
      }, T) : T;
    }
    return a(i ? c : uu(c, v[0]), y);
  }, [i, C, v, c].concat(he(s))), I = {
    width: r,
    margin: 0,
    padding: 0,
    whiteSpace: $ === "nowrap" ? "normal" : "inherit"
  };
  return /* @__PURE__ */ u.createElement(u.Fragment, null, M, C === Ti && /* @__PURE__ */ u.createElement(u.Fragment, null, /* @__PURE__ */ u.createElement(oo, {
    style: Object.assign(Object.assign(Object.assign({}, I), io), {
      WebkitLineClamp: o
    }),
    ref: g
  }, f), /* @__PURE__ */ u.createElement(oo, {
    style: Object.assign(Object.assign(Object.assign({}, I), io), {
      WebkitLineClamp: o - 1
    }),
    ref: S
  }, f), /* @__PURE__ */ u.createElement(oo, {
    style: Object.assign(Object.assign(Object.assign({}, I), io), {
      WebkitLineClamp: 1
    }),
    ref: h
  }, a([], !0))), C === Ni && v && v[0] !== v[1] && /* @__PURE__ */ u.createElement(oo, {
    style: Object.assign(Object.assign({}, I), {
      top: 400
    }),
    ref: b
  }, a(uu(c, F), !0)), C === _i && /* @__PURE__ */ u.createElement("span", {
    style: {
      whiteSpace: "inherit"
    },
    ref: p
  }));
}
const bv = (e) => {
  let {
    enableEllipsis: t,
    isEllipsis: r,
    children: n,
    tooltipProps: a
  } = e;
  return !(a != null && a.title) || !t ? n : /* @__PURE__ */ u.createElement(Da, Object.assign({
    open: r ? void 0 : !1
  }, a), n);
};
process.env.NODE_ENV !== "production" && (bv.displayName = "EllipsisTooltip");
var DE = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
    t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
function zE(e, t) {
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
const VE = "...", Yo = /* @__PURE__ */ u.forwardRef((e, t) => {
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
    component: b,
    title: p
  } = e, g = DE(e, ["prefixCls", "className", "style", "type", "disabled", "children", "ellipsis", "editable", "copyable", "component", "title"]), {
    getPrefixCls: S,
    direction: h
  } = u.useContext(ft), [y] = Um("Text"), E = u.useRef(null), C = u.useRef(null), O = S("typography", o), R = Cr(g, ["mark", "code", "delete", "underline", "strong", "keyboard", "italic"]), [w, $] = Ri(v), [A, F] = cr(!1, {
    value: $.editing
  }), {
    triggerType: M = ["icon"]
  } = $, I = (ie) => {
    var Ee;
    ie && ((Ee = $.onStart) === null || Ee === void 0 || Ee.call($)), F(ie);
  }, T = TE(A);
  NE(() => {
    var ie;
    !A && T && ((ie = C.current) === null || ie === void 0 || ie.focus());
  }, [A]);
  const k = (ie) => {
    ie == null || ie.preventDefault(), I(!0);
  }, N = (ie) => {
    var Ee;
    (Ee = $.onChange) === null || Ee === void 0 || Ee.call($, ie), I(!1);
  }, x = () => {
    var ie;
    (ie = $.onCancel) === null || ie === void 0 || ie.call($), I(!1);
  }, [_, z] = Ri(m), {
    copied: L,
    copyLoading: B,
    onClick: X
  } = _E({
    copyConfig: z,
    children: d
  }), [W, G] = u.useState(!1), [Q, Y] = u.useState(!1), [J, ne] = u.useState(!1), [se, xe] = u.useState(!1), [de, ue] = u.useState(!0), [Ce, V] = Ri(f, {
    expandable: !1,
    symbol: (ie) => ie ? y == null ? void 0 : y.collapse : y == null ? void 0 : y.expand
  }), [le, fe] = cr(V.defaultExpanded || !1, {
    value: V.expanded
  }), Re = Ce && (!le || V.expandable === "collapsible"), {
    rows: me = 1
  } = V, ae = u.useMemo(() => (
    // Disable ellipsis
    Re && // Provide suffix
    (V.suffix !== void 0 || V.onEllipsis || // Can't use css ellipsis since we need to provide the place for button
    V.expandable || w || _)
  ), [Re, V, w, _]);
  Ct(() => {
    Ce && !ae && (G(Pc("webkitLineClamp")), Y(Pc("textOverflow")));
  }, [ae, Ce]);
  const [te, re] = u.useState(Re), be = u.useMemo(() => ae ? !1 : me === 1 ? Q : W, [ae, Q, W]);
  Ct(() => {
    re(be && Re);
  }, [be, Re]);
  const ye = Re && (te ? se : J), ge = Re && me === 1 && te, Pe = Re && me > 1 && te, ve = (ie, Ee) => {
    var qe;
    fe(Ee.expanded), (qe = V.onExpand) === null || qe === void 0 || qe.call(V, ie, Ee);
  }, [vt, it] = u.useState(0), $e = (ie) => {
    let {
      offsetWidth: Ee
    } = ie;
    it(Ee);
  }, we = (ie) => {
    var Ee;
    ne(ie), J !== ie && ((Ee = V.onEllipsis) === null || Ee === void 0 || Ee.call(V, ie));
  };
  u.useEffect(() => {
    const ie = E.current;
    if (Ce && te && ie) {
      const Ee = Pe ? ie.offsetHeight < ie.scrollHeight : ie.offsetWidth < ie.scrollWidth;
      se !== Ee && xe(Ee);
    }
  }, [Ce, te, d, Pe, de, vt]), u.useEffect(() => {
    const ie = E.current;
    if (typeof IntersectionObserver > "u" || !ie || !te || !Re)
      return;
    const Ee = new IntersectionObserver(() => {
      ue(!!ie.offsetParent);
    });
    return Ee.observe(ie), () => {
      Ee.disconnect();
    };
  }, [te, Re]);
  let je = {};
  V.tooltip === !0 ? je = {
    title: (r = $.text) !== null && r !== void 0 ? r : d
  } : /* @__PURE__ */ u.isValidElement(V.tooltip) ? je = {
    title: V.tooltip
  } : typeof V.tooltip == "object" ? je = Object.assign({
    title: (n = $.text) !== null && n !== void 0 ? n : d
  }, V.tooltip) : je = {
    title: V.tooltip
  };
  const ze = u.useMemo(() => {
    const ie = (Ee) => ["string", "number"].includes(typeof Ee);
    if (!(!Ce || te)) {
      if (ie($.text))
        return $.text;
      if (ie(d))
        return d;
      if (ie(p))
        return p;
      if (ie(je.title))
        return je.title;
    }
  }, [Ce, te, p, je.title, ye]);
  if (A)
    return /* @__PURE__ */ u.createElement(SE, {
      value: (a = $.text) !== null && a !== void 0 ? a : typeof d == "string" ? d : "",
      onSave: N,
      onCancel: x,
      onEnd: $.onEnd,
      prefixCls: O,
      className: i,
      style: s,
      direction: h,
      component: b,
      maxLength: $.maxLength,
      autoSize: $.autoSize,
      enterIcon: $.enterIcon
    });
  const gt = () => {
    const {
      expandable: ie,
      symbol: Ee
    } = V;
    return !ie || le && ie !== "collapsible" ? null : /* @__PURE__ */ u.createElement(Ts, {
      key: "expand",
      className: `${O}-${le ? "collapse" : "expand"}`,
      onClick: (qe) => ve(qe, {
        expanded: !le
      }),
      "aria-label": le ? y.collapse : y == null ? void 0 : y.expand
    }, typeof Ee == "function" ? Ee(le) : Ee);
  }, mt = () => {
    if (!w)
      return;
    const {
      icon: ie,
      tooltip: Ee,
      tabIndex: qe
    } = $, Qe = Zr(Ee)[0] || (y == null ? void 0 : y.edit), St = typeof Qe == "string" ? Qe : "";
    return M.includes("icon") ? /* @__PURE__ */ u.createElement(Da, {
      key: "edit",
      title: Ee === !1 ? "" : Qe
    }, /* @__PURE__ */ u.createElement(Ts, {
      ref: C,
      className: `${O}-edit`,
      onClick: k,
      "aria-label": St,
      tabIndex: qe
    }, ie || /* @__PURE__ */ u.createElement(vv, {
      role: "button"
    }))) : null;
  }, wt = () => _ ? /* @__PURE__ */ u.createElement(jE, Object.assign({
    key: "copy"
  }, z, {
    prefixCls: O,
    copied: L,
    locale: y,
    onCopy: X,
    loading: B,
    iconOnly: d == null
  })) : null, et = (ie) => [
    // (renderExpanded || ellipsisConfig.collapsible) && renderExpand(),
    ie && gt(),
    mt(),
    wt()
  ], Le = (ie) => [ie && !le && /* @__PURE__ */ u.createElement("span", {
    "aria-hidden": !0,
    key: "ellipsis"
  }, VE), V.suffix, et(ie)];
  return /* @__PURE__ */ u.createElement(hr, {
    onResize: $e,
    disabled: !Re
  }, (ie) => /* @__PURE__ */ u.createElement(bv, {
    tooltipProps: je,
    enableEllipsis: Re,
    isEllipsis: ye
  }, /* @__PURE__ */ u.createElement(dl, Object.assign({
    className: Z({
      [`${O}-${l}`]: l,
      [`${O}-disabled`]: c,
      [`${O}-ellipsis`]: Ce,
      [`${O}-ellipsis-single-line`]: ge,
      [`${O}-ellipsis-multiple-line`]: Pe
    }, i),
    prefixCls: o,
    style: Object.assign(Object.assign({}, s), {
      WebkitLineClamp: Pe ? me : void 0
    }),
    component: b,
    ref: Pr(ie, E, t),
    direction: h,
    onClick: M.includes("text") ? k : void 0,
    "aria-label": ze == null ? void 0 : ze.toString(),
    title: p
  }, R), /* @__PURE__ */ u.createElement(LE, {
    enableMeasure: Re && !te,
    text: d,
    rows: me,
    width: vt,
    onEllipsis: we,
    expanded: le,
    miscDeps: [L, le, B, w, _]
  }, (Ee, qe) => zE(e, /* @__PURE__ */ u.createElement(u.Fragment, null, Ee.length > 0 && qe && !le && ze ? /* @__PURE__ */ u.createElement("span", {
    key: "show-content",
    "aria-hidden": !0
  }, Ee) : Ee, Le(qe)))))));
});
var BE = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
    t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const kE = /* @__PURE__ */ u.forwardRef((e, t) => {
  var {
    ellipsis: r,
    rel: n
  } = e, a = BE(e, ["ellipsis", "rel"]);
  if (process.env.NODE_ENV !== "production") {
    const i = Ft("Typography.Link");
    process.env.NODE_ENV !== "production" && i(typeof r != "object", "usage", "`ellipsis` only supports boolean value.");
  }
  const o = Object.assign(Object.assign({}, a), {
    rel: n === void 0 && a.target === "_blank" ? "noopener noreferrer" : n
  });
  return delete o.navigate, /* @__PURE__ */ u.createElement(Yo, Object.assign({}, o, {
    ref: t,
    ellipsis: !!r,
    component: "a"
  }));
}), HE = /* @__PURE__ */ u.forwardRef((e, t) => /* @__PURE__ */ u.createElement(Yo, Object.assign({
  ref: t
}, e, {
  component: "div"
})));
var WE = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
    t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const KE = (e, t) => {
  var {
    ellipsis: r
  } = e, n = WE(e, ["ellipsis"]);
  const a = u.useMemo(() => r && typeof r == "object" ? Cr(r, ["expandable", "rows"]) : r, [r]);
  if (process.env.NODE_ENV !== "production") {
    const o = Ft("Typography.Text");
    process.env.NODE_ENV !== "production" && o(typeof r != "object" || !r || !("expandable" in r) && !("rows" in r), "usage", "`ellipsis` do not support `expandable` or `rows` props.");
  }
  return /* @__PURE__ */ u.createElement(Yo, Object.assign({
    ref: t
  }, n, {
    ellipsis: a,
    component: "span"
  }));
}, UE = /* @__PURE__ */ u.forwardRef(KE);
var GE = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
    t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const fu = [1, 2, 3, 4, 5], qE = /* @__PURE__ */ u.forwardRef((e, t) => {
  const {
    level: r = 1
  } = e, n = GE(e, ["level"]);
  let a;
  if (process.env.NODE_ENV !== "production") {
    const o = Ft("Typography.Title");
    process.env.NODE_ENV !== "production" && o(fu.includes(r), "usage", "Title only accept `1 | 2 | 3 | 4 | 5` as `level` value. And `5` need 4.6.0+ version.");
  }
  return fu.includes(r) ? a = `h${r}` : a = "h1", /* @__PURE__ */ u.createElement(Yo, Object.assign({
    ref: t
  }, n, {
    component: a
  }));
}), Bn = dl;
Bn.Text = UE;
Bn.Link = kE;
Bn.Title = qE;
Bn.Paragraph = HE;
const QE = ({
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
  return /* @__PURE__ */ lr.jsxs(
    ua,
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
        /* @__PURE__ */ lr.jsx(
          "div",
          {
            style: {
              backgroundImage: "linear-gradient(180deg, transparent 23%, var(--background) 97%)",
              height: "6vh"
            }
          }
        ),
        /* @__PURE__ */ lr.jsx(
          Xo,
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
            children: /* @__PURE__ */ lr.jsxs(ua, { vertical: !0, gap: 16, children: [
              /* @__PURE__ */ lr.jsxs(ua, { align: "flex-start", gap: 12, children: [
                /* @__PURE__ */ lr.jsx(
                  cv,
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
                /* @__PURE__ */ lr.jsx(
                  ko,
                  {
                    disabled: i,
                    size: "large",
                    type: "primary",
                    shape: "circle",
                    onClick: a,
                    icon: /* @__PURE__ */ lr.jsx(hu, { weight: "bold" })
                  }
                )
              ] }),
              /* @__PURE__ */ lr.jsx(ua, { align: "flex-end", justify: "flex-end", children: /* @__PURE__ */ lr.jsxs(
                Bn.Text,
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
                    /* @__PURE__ */ lr.jsx(
                      Bn.Text,
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
export {
  ZE as Button,
  QE as ChatInput
};
