var dg = t => {
    throw TypeError(t)
};
var Kc = (t, e, r) => e.has(t) || dg("Cannot " + r);
var P = (t, e, r) => (Kc(t, e, "read from private field"), r ? r.call(t) : e.get(t)),
    ue = (t, e, r) => e.has(t) ? dg("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r),
    X = (t, e, r, i) => (Kc(t, e, "write to private field"), i ? i.call(t, r) : e.set(t, r), r),
    ke = (t, e, r) => (Kc(t, e, "access private method"), r);
var Ja = (t, e, r, i) => ({
    set _(a) {
        X(t, e, a, r)
    },
    get _() {
        return P(t, e, i)
    }
});

function gb(t, e) {
    for (var r = 0; r < e.length; r++) {
        const i = e[r];
        if (typeof i != "string" && !Array.isArray(i)) {
            for (const a in i)
                if (a !== "default" && !(a in t)) {
                    const l = Object.getOwnPropertyDescriptor(i, a);
                    l && Object.defineProperty(t, a, l.get ? l : {
                        enumerable: !0,
                        get: () => i[a]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module"
    }))
}(function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload")) return;
    for (const a of document.querySelectorAll('link[rel="modulepreload"]')) i(a);
    new MutationObserver(a => {
        for (const l of a)
            if (l.type === "childList")
                for (const c of l.addedNodes) c.tagName === "LINK" && c.rel === "modulepreload" && i(c)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function r(a) {
        const l = {};
        return a.integrity && (l.integrity = a.integrity), a.referrerPolicy && (l.referrerPolicy = a.referrerPolicy), a.crossOrigin === "use-credentials" ? l.credentials = "include" : a.crossOrigin === "anonymous" ? l.credentials = "omit" : l.credentials = "same-origin", l
    }

    function i(a) {
        if (a.ep) return;
        a.ep = !0;
        const l = r(a);
        fetch(a.href, l)
    }
})();

function u0(t) {
    return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
}
var Qc = {
        exports: {}
    },
    Zi = {},
    Gc = {
        exports: {}
    },
    be = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fg;

function yb() {
    if (fg) return be;
    fg = 1;
    var t = Symbol.for("react.element"),
        e = Symbol.for("react.portal"),
        r = Symbol.for("react.fragment"),
        i = Symbol.for("react.strict_mode"),
        a = Symbol.for("react.profiler"),
        l = Symbol.for("react.provider"),
        c = Symbol.for("react.context"),
        d = Symbol.for("react.forward_ref"),
        h = Symbol.for("react.suspense"),
        m = Symbol.for("react.memo"),
        g = Symbol.for("react.lazy"),
        y = Symbol.iterator;

    function w(A) {
        return A === null || typeof A != "object" ? null : (A = y && A[y] || A["@@iterator"], typeof A == "function" ? A : null)
    }
    var k = {
            isMounted: function() {
                return !1
            },
            enqueueForceUpdate: function() {},
            enqueueReplaceState: function() {},
            enqueueSetState: function() {}
        },
        S = Object.assign,
        b = {};

    function x(A, z, ye) {
        this.props = A, this.context = z, this.refs = b, this.updater = ye || k
    }
    x.prototype.isReactComponent = {}, x.prototype.setState = function(A, z) {
        if (typeof A != "object" && typeof A != "function" && A != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, A, z, "setState")
    }, x.prototype.forceUpdate = function(A) {
        this.updater.enqueueForceUpdate(this, A, "forceUpdate")
    };

    function R() {}
    R.prototype = x.prototype;

    function V(A, z, ye) {
        this.props = A, this.context = z, this.refs = b, this.updater = ye || k
    }
    var M = V.prototype = new R;
    M.constructor = V, S(M, x.prototype), M.isPureReactComponent = !0;
    var L = Array.isArray,
        B = Object.prototype.hasOwnProperty,
        K = {
            current: null
        },
        G = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0
        };

    function j(A, z, ye) {
        var ve, le = {},
            he = null,
            Oe = null;
        if (z != null)
            for (ve in z.ref !== void 0 && (Oe = z.ref), z.key !== void 0 && (he = "" + z.key), z) B.call(z, ve) && !G.hasOwnProperty(ve) && (le[ve] = z[ve]);
        var _e = arguments.length - 2;
        if (_e === 1) le.children = ye;
        else if (1 < _e) {
            for (var we = Array(_e), ht = 0; ht < _e; ht++) we[ht] = arguments[ht + 2];
            le.children = we
        }
        if (A && A.defaultProps)
            for (ve in _e = A.defaultProps, _e) le[ve] === void 0 && (le[ve] = _e[ve]);
        return {
            $$typeof: t,
            type: A,
            key: he,
            ref: Oe,
            props: le,
            _owner: K.current
        }
    }

    function J(A, z) {
        return {
            $$typeof: t,
            type: A.type,
            key: z,
            ref: A.ref,
            props: A.props,
            _owner: A._owner
        }
    }

    function de(A) {
        return typeof A == "object" && A !== null && A.$$typeof === t
    }

    function me(A) {
        var z = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + A.replace(/[=:]/g, function(ye) {
            return z[ye]
        })
    }
    var Ae = /\/+/g;

    function je(A, z) {
        return typeof A == "object" && A !== null && A.key != null ? me("" + A.key) : z.toString(36)
    }

    function Ne(A, z, ye, ve, le) {
        var he = typeof A;
        (he === "undefined" || he === "boolean") && (A = null);
        var Oe = !1;
        if (A === null) Oe = !0;
        else switch (he) {
            case "string":
            case "number":
                Oe = !0;
                break;
            case "object":
                switch (A.$$typeof) {
                    case t:
                    case e:
                        Oe = !0
                }
        }
        if (Oe) return Oe = A, le = le(Oe), A = ve === "" ? "." + je(Oe, 0) : ve, L(le) ? (ye = "", A != null && (ye = A.replace(Ae, "$&/") + "/"), Ne(le, z, ye, "", function(ht) {
            return ht
        })) : le != null && (de(le) && (le = J(le, ye + (!le.key || Oe && Oe.key === le.key ? "" : ("" + le.key).replace(Ae, "$&/") + "/") + A)), z.push(le)), 1;
        if (Oe = 0, ve = ve === "" ? "." : ve + ":", L(A))
            for (var _e = 0; _e < A.length; _e++) {
                he = A[_e];
                var we = ve + je(he, _e);
                Oe += Ne(he, z, ye, we, le)
            } else if (we = w(A), typeof we == "function")
                for (A = we.call(A), _e = 0; !(he = A.next()).done;) he = he.value, we = ve + je(he, _e++), Oe += Ne(he, z, ye, we, le);
            else if (he === "object") throw z = String(A), Error("Objects are not valid as a React child (found: " + (z === "[object Object]" ? "object with keys {" + Object.keys(A).join(", ") + "}" : z) + "). If you meant to render a collection of children, use an array instead.");
        return Oe
    }

    function Fe(A, z, ye) {
        if (A == null) return A;
        var ve = [],
            le = 0;
        return Ne(A, ve, "", "", function(he) {
            return z.call(ye, he, le++)
        }), ve
    }

    function xe(A) {
        if (A._status === -1) {
            var z = A._result;
            z = z(), z.then(function(ye) {
                (A._status === 0 || A._status === -1) && (A._status = 1, A._result = ye)
            }, function(ye) {
                (A._status === 0 || A._status === -1) && (A._status = 2, A._result = ye)
            }), A._status === -1 && (A._status = 0, A._result = z)
        }
        if (A._status === 1) return A._result.default;
        throw A._result
    }
    var fe = {
            current: null
        },
        W = {
            transition: null
        },
        se = {
            ReactCurrentDispatcher: fe,
            ReactCurrentBatchConfig: W,
            ReactCurrentOwner: K
        };

    function U() {
        throw Error("act(...) is not supported in production builds of React.")
    }
    return be.Children = {
        map: Fe,
        forEach: function(A, z, ye) {
            Fe(A, function() {
                z.apply(this, arguments)
            }, ye)
        },
        count: function(A) {
            var z = 0;
            return Fe(A, function() {
                z++
            }), z
        },
        toArray: function(A) {
            return Fe(A, function(z) {
                return z
            }) || []
        },
        only: function(A) {
            if (!de(A)) throw Error("React.Children.only expected to receive a single React element child.");
            return A
        }
    }, be.Component = x, be.Fragment = r, be.Profiler = a, be.PureComponent = V, be.StrictMode = i, be.Suspense = h, be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = se, be.act = U, be.cloneElement = function(A, z, ye) {
        if (A == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + A + ".");
        var ve = S({}, A.props),
            le = A.key,
            he = A.ref,
            Oe = A._owner;
        if (z != null) {
            if (z.ref !== void 0 && (he = z.ref, Oe = K.current), z.key !== void 0 && (le = "" + z.key), A.type && A.type.defaultProps) var _e = A.type.defaultProps;
            for (we in z) B.call(z, we) && !G.hasOwnProperty(we) && (ve[we] = z[we] === void 0 && _e !== void 0 ? _e[we] : z[we])
        }
        var we = arguments.length - 2;
        if (we === 1) ve.children = ye;
        else if (1 < we) {
            _e = Array(we);
            for (var ht = 0; ht < we; ht++) _e[ht] = arguments[ht + 2];
            ve.children = _e
        }
        return {
            $$typeof: t,
            type: A.type,
            key: le,
            ref: he,
            props: ve,
            _owner: Oe
        }
    }, be.createContext = function(A) {
        return A = {
            $$typeof: c,
            _currentValue: A,
            _currentValue2: A,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null
        }, A.Provider = {
            $$typeof: l,
            _context: A
        }, A.Consumer = A
    }, be.createElement = j, be.createFactory = function(A) {
        var z = j.bind(null, A);
        return z.type = A, z
    }, be.createRef = function() {
        return {
            current: null
        }
    }, be.forwardRef = function(A) {
        return {
            $$typeof: d,
            render: A
        }
    }, be.isValidElement = de, be.lazy = function(A) {
        return {
            $$typeof: g,
            _payload: {
                _status: -1,
                _result: A
            },
            _init: xe
        }
    }, be.memo = function(A, z) {
        return {
            $$typeof: m,
            type: A,
            compare: z === void 0 ? null : z
        }
    }, be.startTransition = function(A) {
        var z = W.transition;
        W.transition = {};
        try {
            A()
        } finally {
            W.transition = z
        }
    }, be.unstable_act = U, be.useCallback = function(A, z) {
        return fe.current.useCallback(A, z)
    }, be.useContext = function(A) {
        return fe.current.useContext(A)
    }, be.useDebugValue = function() {}, be.useDeferredValue = function(A) {
        return fe.current.useDeferredValue(A)
    }, be.useEffect = function(A, z) {
        return fe.current.useEffect(A, z)
    }, be.useId = function() {
        return fe.current.useId()
    }, be.useImperativeHandle = function(A, z, ye) {
        return fe.current.useImperativeHandle(A, z, ye)
    }, be.useInsertionEffect = function(A, z) {
        return fe.current.useInsertionEffect(A, z)
    }, be.useLayoutEffect = function(A, z) {
        return fe.current.useLayoutEffect(A, z)
    }, be.useMemo = function(A, z) {
        return fe.current.useMemo(A, z)
    }, be.useReducer = function(A, z, ye) {
        return fe.current.useReducer(A, z, ye)
    }, be.useRef = function(A) {
        return fe.current.useRef(A)
    }, be.useState = function(A) {
        return fe.current.useState(A)
    }, be.useSyncExternalStore = function(A, z, ye) {
        return fe.current.useSyncExternalStore(A, z, ye)
    }, be.useTransition = function() {
        return fe.current.useTransition()
    }, be.version = "18.3.1", be
}
var hg;

function wf() {
    return hg || (hg = 1, Gc.exports = yb()), Gc.exports
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pg;

function vb() {
    if (pg) return Zi;
    pg = 1;
    var t = wf(),
        e = Symbol.for("react.element"),
        r = Symbol.for("react.fragment"),
        i = Object.prototype.hasOwnProperty,
        a = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0
        };

    function c(d, h, m) {
        var g, y = {},
            w = null,
            k = null;
        m !== void 0 && (w = "" + m), h.key !== void 0 && (w = "" + h.key), h.ref !== void 0 && (k = h.ref);
        for (g in h) i.call(h, g) && !l.hasOwnProperty(g) && (y[g] = h[g]);
        if (d && d.defaultProps)
            for (g in h = d.defaultProps, h) y[g] === void 0 && (y[g] = h[g]);
        return {
            $$typeof: e,
            type: d,
            key: w,
            ref: k,
            props: y,
            _owner: a.current
        }
    }
    return Zi.Fragment = r, Zi.jsx = c, Zi.jsxs = c, Zi
}
var mg;

function wb() {
    return mg || (mg = 1, Qc.exports = vb()), Qc.exports
}
var T = wb(),
    D = wf();
const xb = u0(D),
    Sb = gb({
        __proto__: null,
        default: xb
    }, [D]);
var Za = {},
    Yc = {
        exports: {}
    },
    Ot = {},
    Xc = {
        exports: {}
    },
    Jc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gg;

function bb() {
    return gg || (gg = 1, (function(t) {
        function e(W, se) {
            var U = W.length;
            W.push(se);
            e: for (; 0 < U;) {
                var A = U - 1 >>> 1,
                    z = W[A];
                if (0 < a(z, se)) W[A] = se, W[U] = z, U = A;
                else break e
            }
        }

        function r(W) {
            return W.length === 0 ? null : W[0]
        }

        function i(W) {
            if (W.length === 0) return null;
            var se = W[0],
                U = W.pop();
            if (U !== se) {
                W[0] = U;
                e: for (var A = 0, z = W.length, ye = z >>> 1; A < ye;) {
                    var ve = 2 * (A + 1) - 1,
                        le = W[ve],
                        he = ve + 1,
                        Oe = W[he];
                    if (0 > a(le, U)) he < z && 0 > a(Oe, le) ? (W[A] = Oe, W[he] = U, A = he) : (W[A] = le, W[ve] = U, A = ve);
                    else if (he < z && 0 > a(Oe, U)) W[A] = Oe, W[he] = U, A = he;
                    else break e
                }
            }
            return se
        }

        function a(W, se) {
            var U = W.sortIndex - se.sortIndex;
            return U !== 0 ? U : W.id - se.id
        }
        if (typeof performance == "object" && typeof performance.now == "function") {
            var l = performance;
            t.unstable_now = function() {
                return l.now()
            }
        } else {
            var c = Date,
                d = c.now();
            t.unstable_now = function() {
                return c.now() - d
            }
        }
        var h = [],
            m = [],
            g = 1,
            y = null,
            w = 3,
            k = !1,
            S = !1,
            b = !1,
            x = typeof setTimeout == "function" ? setTimeout : null,
            R = typeof clearTimeout == "function" ? clearTimeout : null,
            V = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

        function M(W) {
            for (var se = r(m); se !== null;) {
                if (se.callback === null) i(m);
                else if (se.startTime <= W) i(m), se.sortIndex = se.expirationTime, e(h, se);
                else break;
                se = r(m)
            }
        }

        function L(W) {
            if (b = !1, M(W), !S)
                if (r(h) !== null) S = !0, xe(B);
                else {
                    var se = r(m);
                    se !== null && fe(L, se.startTime - W)
                }
        }

        function B(W, se) {
            S = !1, b && (b = !1, R(j), j = -1), k = !0;
            var U = w;
            try {
                for (M(se), y = r(h); y !== null && (!(y.expirationTime > se) || W && !me());) {
                    var A = y.callback;
                    if (typeof A == "function") {
                        y.callback = null, w = y.priorityLevel;
                        var z = A(y.expirationTime <= se);
                        se = t.unstable_now(), typeof z == "function" ? y.callback = z : y === r(h) && i(h), M(se)
                    } else i(h);
                    y = r(h)
                }
                if (y !== null) var ye = !0;
                else {
                    var ve = r(m);
                    ve !== null && fe(L, ve.startTime - se), ye = !1
                }
                return ye
            } finally {
                y = null, w = U, k = !1
            }
        }
        var K = !1,
            G = null,
            j = -1,
            J = 5,
            de = -1;

        function me() {
            return !(t.unstable_now() - de < J)
        }

        function Ae() {
            if (G !== null) {
                var W = t.unstable_now();
                de = W;
                var se = !0;
                try {
                    se = G(!0, W)
                } finally {
                    se ? je() : (K = !1, G = null)
                }
            } else K = !1
        }
        var je;
        if (typeof V == "function") je = function() {
            V(Ae)
        };
        else if (typeof MessageChannel < "u") {
            var Ne = new MessageChannel,
                Fe = Ne.port2;
            Ne.port1.onmessage = Ae, je = function() {
                Fe.postMessage(null)
            }
        } else je = function() {
            x(Ae, 0)
        };

        function xe(W) {
            G = W, K || (K = !0, je())
        }

        function fe(W, se) {
            j = x(function() {
                W(t.unstable_now())
            }, se)
        }
        t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(W) {
            W.callback = null
        }, t.unstable_continueExecution = function() {
            S || k || (S = !0, xe(B))
        }, t.unstable_forceFrameRate = function(W) {
            0 > W || 125 < W ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : J = 0 < W ? Math.floor(1e3 / W) : 5
        }, t.unstable_getCurrentPriorityLevel = function() {
            return w
        }, t.unstable_getFirstCallbackNode = function() {
            return r(h)
        }, t.unstable_next = function(W) {
            switch (w) {
                case 1:
                case 2:
                case 3:
                    var se = 3;
                    break;
                default:
                    se = w
            }
            var U = w;
            w = se;
            try {
                return W()
            } finally {
                w = U
            }
        }, t.unstable_pauseExecution = function() {}, t.unstable_requestPaint = function() {}, t.unstable_runWithPriority = function(W, se) {
            switch (W) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    W = 3
            }
            var U = w;
            w = W;
            try {
                return se()
            } finally {
                w = U
            }
        }, t.unstable_scheduleCallback = function(W, se, U) {
            var A = t.unstable_now();
            switch (typeof U == "object" && U !== null ? (U = U.delay, U = typeof U == "number" && 0 < U ? A + U : A) : U = A, W) {
                case 1:
                    var z = -1;
                    break;
                case 2:
                    z = 250;
                    break;
                case 5:
                    z = 1073741823;
                    break;
                case 4:
                    z = 1e4;
                    break;
                default:
                    z = 5e3
            }
            return z = U + z, W = {
                id: g++,
                callback: se,
                priorityLevel: W,
                startTime: U,
                expirationTime: z,
                sortIndex: -1
            }, U > A ? (W.sortIndex = U, e(m, W), r(h) === null && W === r(m) && (b ? (R(j), j = -1) : b = !0, fe(L, U - A))) : (W.sortIndex = z, e(h, W), S || k || (S = !0, xe(B))), W
        }, t.unstable_shouldYield = me, t.unstable_wrapCallback = function(W) {
            var se = w;
            return function() {
                var U = w;
                w = se;
                try {
                    return W.apply(this, arguments)
                } finally {
                    w = U
                }
            }
        }
    })(Jc)), Jc
}
var yg;

function kb() {
    return yg || (yg = 1, Xc.exports = bb()), Xc.exports
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vg;

function Eb() {
    if (vg) return Ot;
    vg = 1;
    var t = wf(),
        e = kb();

    function r(n) {
        for (var s = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, o = 1; o < arguments.length; o++) s += "&args[]=" + encodeURIComponent(arguments[o]);
        return "Minified React error #" + n + "; visit " + s + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    var i = new Set,
        a = {};

    function l(n, s) {
        c(n, s), c(n + "Capture", s)
    }

    function c(n, s) {
        for (a[n] = s, n = 0; n < s.length; n++) i.add(s[n])
    }
    var d = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
        h = Object.prototype.hasOwnProperty,
        m = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
        g = {},
        y = {};

    function w(n) {
        return h.call(y, n) ? !0 : h.call(g, n) ? !1 : m.test(n) ? y[n] = !0 : (g[n] = !0, !1)
    }

    function k(n, s, o, u) {
        if (o !== null && o.type === 0) return !1;
        switch (typeof s) {
            case "function":
            case "symbol":
                return !0;
            case "boolean":
                return u ? !1 : o !== null ? !o.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
            default:
                return !1
        }
    }

    function S(n, s, o, u) {
        if (s === null || typeof s > "u" || k(n, s, o, u)) return !0;
        if (u) return !1;
        if (o !== null) switch (o.type) {
            case 3:
                return !s;
            case 4:
                return s === !1;
            case 5:
                return isNaN(s);
            case 6:
                return isNaN(s) || 1 > s
        }
        return !1
    }

    function b(n, s, o, u, f, p, v) {
        this.acceptsBooleans = s === 2 || s === 3 || s === 4, this.attributeName = u, this.attributeNamespace = f, this.mustUseProperty = o, this.propertyName = n, this.type = s, this.sanitizeURL = p, this.removeEmptyString = v
    }
    var x = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
        x[n] = new b(n, 0, !1, n, null, !1, !1)
    }), [
        ["acceptCharset", "accept-charset"],
        ["className", "class"],
        ["htmlFor", "for"],
        ["httpEquiv", "http-equiv"]
    ].forEach(function(n) {
        var s = n[0];
        x[s] = new b(s, 1, !1, n[1], null, !1, !1)
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
        x[n] = new b(n, 2, !1, n.toLowerCase(), null, !1, !1)
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
        x[n] = new b(n, 2, !1, n, null, !1, !1)
    }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
        x[n] = new b(n, 3, !1, n.toLowerCase(), null, !1, !1)
    }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
        x[n] = new b(n, 3, !0, n, null, !1, !1)
    }), ["capture", "download"].forEach(function(n) {
        x[n] = new b(n, 4, !1, n, null, !1, !1)
    }), ["cols", "rows", "size", "span"].forEach(function(n) {
        x[n] = new b(n, 6, !1, n, null, !1, !1)
    }), ["rowSpan", "start"].forEach(function(n) {
        x[n] = new b(n, 5, !1, n.toLowerCase(), null, !1, !1)
    });
    var R = /[\-:]([a-z])/g;

    function V(n) {
        return n[1].toUpperCase()
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
        var s = n.replace(R, V);
        x[s] = new b(s, 1, !1, n, null, !1, !1)
    }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
        var s = n.replace(R, V);
        x[s] = new b(s, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1)
    }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
        var s = n.replace(R, V);
        x[s] = new b(s, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1)
    }), ["tabIndex", "crossOrigin"].forEach(function(n) {
        x[n] = new b(n, 1, !1, n.toLowerCase(), null, !1, !1)
    }), x.xlinkHref = new b("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
        x[n] = new b(n, 1, !1, n.toLowerCase(), null, !0, !0)
    });

    function M(n, s, o, u) {
        var f = x.hasOwnProperty(s) ? x[s] : null;
        (f !== null ? f.type !== 0 : u || !(2 < s.length) || s[0] !== "o" && s[0] !== "O" || s[1] !== "n" && s[1] !== "N") && (S(s, o, f, u) && (o = null), u || f === null ? w(s) && (o === null ? n.removeAttribute(s) : n.setAttribute(s, "" + o)) : f.mustUseProperty ? n[f.propertyName] = o === null ? f.type === 3 ? !1 : "" : o : (s = f.attributeName, u = f.attributeNamespace, o === null ? n.removeAttribute(s) : (f = f.type, o = f === 3 || f === 4 && o === !0 ? "" : "" + o, u ? n.setAttributeNS(u, s, o) : n.setAttribute(s, o))))
    }
    var L = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
        B = Symbol.for("react.element"),
        K = Symbol.for("react.portal"),
        G = Symbol.for("react.fragment"),
        j = Symbol.for("react.strict_mode"),
        J = Symbol.for("react.profiler"),
        de = Symbol.for("react.provider"),
        me = Symbol.for("react.context"),
        Ae = Symbol.for("react.forward_ref"),
        je = Symbol.for("react.suspense"),
        Ne = Symbol.for("react.suspense_list"),
        Fe = Symbol.for("react.memo"),
        xe = Symbol.for("react.lazy"),
        fe = Symbol.for("react.offscreen"),
        W = Symbol.iterator;

    function se(n) {
        return n === null || typeof n != "object" ? null : (n = W && n[W] || n["@@iterator"], typeof n == "function" ? n : null)
    }
    var U = Object.assign,
        A;

    function z(n) {
        if (A === void 0) try {
            throw Error()
        } catch (o) {
            var s = o.stack.trim().match(/\n( *(at )?)/);
            A = s && s[1] || ""
        }
        return `
` + A + n
    }
    var ye = !1;

    function ve(n, s) {
        if (!n || ye) return "";
        ye = !0;
        var o = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            if (s)
                if (s = function() {
                        throw Error()
                    }, Object.defineProperty(s.prototype, "props", {
                        set: function() {
                            throw Error()
                        }
                    }), typeof Reflect == "object" && Reflect.construct) {
                    try {
                        Reflect.construct(s, [])
                    } catch (I) {
                        var u = I
                    }
                    Reflect.construct(n, [], s)
                } else {
                    try {
                        s.call()
                    } catch (I) {
                        u = I
                    }
                    n.call(s.prototype)
                }
            else {
                try {
                    throw Error()
                } catch (I) {
                    u = I
                }
                n()
            }
        } catch (I) {
            if (I && u && typeof I.stack == "string") {
                for (var f = I.stack.split(`
`), p = u.stack.split(`
`), v = f.length - 1, E = p.length - 1; 1 <= v && 0 <= E && f[v] !== p[E];) E--;
                for (; 1 <= v && 0 <= E; v--, E--)
                    if (f[v] !== p[E]) {
                        if (v !== 1 || E !== 1)
                            do
                                if (v--, E--, 0 > E || f[v] !== p[E]) {
                                    var C = `
` + f[v].replace(" at new ", " at ");
                                    return n.displayName && C.includes("<anonymous>") && (C = C.replace("<anonymous>", n.displayName)), C
                                }
                        while (1 <= v && 0 <= E);
                        break
                    }
            }
        } finally {
            ye = !1, Error.prepareStackTrace = o
        }
        return (n = n ? n.displayName || n.name : "") ? z(n) : ""
    }

    function le(n) {
        switch (n.tag) {
            case 5:
                return z(n.type);
            case 16:
                return z("Lazy");
            case 13:
                return z("Suspense");
            case 19:
                return z("SuspenseList");
            case 0:
            case 2:
            case 15:
                return n = ve(n.type, !1), n;
            case 11:
                return n = ve(n.type.render, !1), n;
            case 1:
                return n = ve(n.type, !0), n;
            default:
                return ""
        }
    }

    function he(n) {
        if (n == null) return null;
        if (typeof n == "function") return n.displayName || n.name || null;
        if (typeof n == "string") return n;
        switch (n) {
            case G:
                return "Fragment";
            case K:
                return "Portal";
            case J:
                return "Profiler";
            case j:
                return "StrictMode";
            case je:
                return "Suspense";
            case Ne:
                return "SuspenseList"
        }
        if (typeof n == "object") switch (n.$$typeof) {
            case me:
                return (n.displayName || "Context") + ".Consumer";
            case de:
                return (n._context.displayName || "Context") + ".Provider";
            case Ae:
                var s = n.render;
                return n = n.displayName, n || (n = s.displayName || s.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
            case Fe:
                return s = n.displayName || null, s !== null ? s : he(n.type) || "Memo";
            case xe:
                s = n._payload, n = n._init;
                try {
                    return he(n(s))
                } catch {}
        }
        return null
    }

    function Oe(n) {
        var s = n.type;
        switch (n.tag) {
            case 24:
                return "Cache";
            case 9:
                return (s.displayName || "Context") + ".Consumer";
            case 10:
                return (s._context.displayName || "Context") + ".Provider";
            case 18:
                return "DehydratedFragment";
            case 11:
                return n = s.render, n = n.displayName || n.name || "", s.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
            case 7:
                return "Fragment";
            case 5:
                return s;
            case 4:
                return "Portal";
            case 3:
                return "Root";
            case 6:
                return "Text";
            case 16:
                return he(s);
            case 8:
                return s === j ? "StrictMode" : "Mode";
            case 22:
                return "Offscreen";
            case 12:
                return "Profiler";
            case 21:
                return "Scope";
            case 13:
                return "Suspense";
            case 19:
                return "SuspenseList";
            case 25:
                return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
                if (typeof s == "function") return s.displayName || s.name || null;
                if (typeof s == "string") return s
        }
        return null
    }

    function _e(n) {
        switch (typeof n) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
                return n;
            case "object":
                return n;
            default:
                return ""
        }
    }

    function we(n) {
        var s = n.type;
        return (n = n.nodeName) && n.toLowerCase() === "input" && (s === "checkbox" || s === "radio")
    }

    function ht(n) {
        var s = we(n) ? "checked" : "value",
            o = Object.getOwnPropertyDescriptor(n.constructor.prototype, s),
            u = "" + n[s];
        if (!n.hasOwnProperty(s) && typeof o < "u" && typeof o.get == "function" && typeof o.set == "function") {
            var f = o.get,
                p = o.set;
            return Object.defineProperty(n, s, {
                configurable: !0,
                get: function() {
                    return f.call(this)
                },
                set: function(v) {
                    u = "" + v, p.call(this, v)
                }
            }), Object.defineProperty(n, s, {
                enumerable: o.enumerable
            }), {
                getValue: function() {
                    return u
                },
                setValue: function(v) {
                    u = "" + v
                },
                stopTracking: function() {
                    n._valueTracker = null, delete n[s]
                }
            }
        }
    }

    function Rn(n) {
        n._valueTracker || (n._valueTracker = ht(n))
    }

    function Or(n) {
        if (!n) return !1;
        var s = n._valueTracker;
        if (!s) return !0;
        var o = s.getValue(),
            u = "";
        return n && (u = we(n) ? n.checked ? "true" : "false" : n.value), n = u, n !== o ? (s.setValue(n), !0) : !1
    }

    function qn(n) {
        if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
        try {
            return n.activeElement || n.body
        } catch {
            return n.body
        }
    }

    function Wn(n, s) {
        var o = s.checked;
        return U({}, s, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: o ? ? n._wrapperState.initialChecked
        })
    }

    function vh(n, s) {
        var o = s.defaultValue == null ? "" : s.defaultValue,
            u = s.checked != null ? s.checked : s.defaultChecked;
        o = _e(s.value != null ? s.value : o), n._wrapperState = {
            initialChecked: u,
            initialValue: o,
            controlled: s.type === "checkbox" || s.type === "radio" ? s.checked != null : s.value != null
        }
    }

    function wh(n, s) {
        s = s.checked, s != null && M(n, "checked", s, !1)
    }

    function tu(n, s) {
        wh(n, s);
        var o = _e(s.value),
            u = s.type;
        if (o != null) u === "number" ? (o === 0 && n.value === "" || n.value != o) && (n.value = "" + o) : n.value !== "" + o && (n.value = "" + o);
        else if (u === "submit" || u === "reset") {
            n.removeAttribute("value");
            return
        }
        s.hasOwnProperty("value") ? nu(n, s.type, o) : s.hasOwnProperty("defaultValue") && nu(n, s.type, _e(s.defaultValue)), s.checked == null && s.defaultChecked != null && (n.defaultChecked = !!s.defaultChecked)
    }

    function xh(n, s, o) {
        if (s.hasOwnProperty("value") || s.hasOwnProperty("defaultValue")) {
            var u = s.type;
            if (!(u !== "submit" && u !== "reset" || s.value !== void 0 && s.value !== null)) return;
            s = "" + n._wrapperState.initialValue, o || s === n.value || (n.value = s), n.defaultValue = s
        }
        o = n.name, o !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, o !== "" && (n.name = o)
    }

    function nu(n, s, o) {
        (s !== "number" || qn(n.ownerDocument) !== n) && (o == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + o && (n.defaultValue = "" + o))
    }
    var pi = Array.isArray;

    function gs(n, s, o, u) {
        if (n = n.options, s) {
            s = {};
            for (var f = 0; f < o.length; f++) s["$" + o[f]] = !0;
            for (o = 0; o < n.length; o++) f = s.hasOwnProperty("$" + n[o].value), n[o].selected !== f && (n[o].selected = f), f && u && (n[o].defaultSelected = !0)
        } else {
            for (o = "" + _e(o), s = null, f = 0; f < n.length; f++) {
                if (n[f].value === o) {
                    n[f].selected = !0, u && (n[f].defaultSelected = !0);
                    return
                }
                s !== null || n[f].disabled || (s = n[f])
            }
            s !== null && (s.selected = !0)
        }
    }

    function ru(n, s) {
        if (s.dangerouslySetInnerHTML != null) throw Error(r(91));
        return U({}, s, {
            value: void 0,
            defaultValue: void 0,
            children: "" + n._wrapperState.initialValue
        })
    }

    function Sh(n, s) {
        var o = s.value;
        if (o == null) {
            if (o = s.children, s = s.defaultValue, o != null) {
                if (s != null) throw Error(r(92));
                if (pi(o)) {
                    if (1 < o.length) throw Error(r(93));
                    o = o[0]
                }
                s = o
            }
            s == null && (s = ""), o = s
        }
        n._wrapperState = {
            initialValue: _e(o)
        }
    }

    function bh(n, s) {
        var o = _e(s.value),
            u = _e(s.defaultValue);
        o != null && (o = "" + o, o !== n.value && (n.value = o), s.defaultValue == null && n.defaultValue !== o && (n.defaultValue = o)), u != null && (n.defaultValue = "" + u)
    }

    function kh(n) {
        var s = n.textContent;
        s === n._wrapperState.initialValue && s !== "" && s !== null && (n.value = s)
    }

    function Eh(n) {
        switch (n) {
            case "svg":
                return "http://www.w3.org/2000/svg";
            case "math":
                return "http://www.w3.org/1998/Math/MathML";
            default:
                return "http://www.w3.org/1999/xhtml"
        }
    }

    function su(n, s) {
        return n == null || n === "http://www.w3.org/1999/xhtml" ? Eh(s) : n === "http://www.w3.org/2000/svg" && s === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n
    }
    var Ho, Th = (function(n) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(s, o, u, f) {
            MSApp.execUnsafeLocalFunction(function() {
                return n(s, o, u, f)
            })
        } : n
    })(function(n, s) {
        if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n) n.innerHTML = s;
        else {
            for (Ho = Ho || document.createElement("div"), Ho.innerHTML = "<svg>" + s.valueOf().toString() + "</svg>", s = Ho.firstChild; n.firstChild;) n.removeChild(n.firstChild);
            for (; s.firstChild;) n.appendChild(s.firstChild)
        }
    });

    function mi(n, s) {
        if (s) {
            var o = n.firstChild;
            if (o && o === n.lastChild && o.nodeType === 3) {
                o.nodeValue = s;
                return
            }
        }
        n.textContent = s
    }
    var gi = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0
        },
        x1 = ["Webkit", "ms", "Moz", "O"];
    Object.keys(gi).forEach(function(n) {
        x1.forEach(function(s) {
            s = s + n.charAt(0).toUpperCase() + n.substring(1), gi[s] = gi[n]
        })
    });

    function Ch(n, s, o) {
        return s == null || typeof s == "boolean" || s === "" ? "" : o || typeof s != "number" || s === 0 || gi.hasOwnProperty(n) && gi[n] ? ("" + s).trim() : s + "px"
    }

    function Ph(n, s) {
        n = n.style;
        for (var o in s)
            if (s.hasOwnProperty(o)) {
                var u = o.indexOf("--") === 0,
                    f = Ch(o, s[o], u);
                o === "float" && (o = "cssFloat"), u ? n.setProperty(o, f) : n[o] = f
            }
    }
    var S1 = U({
        menuitem: !0
    }, {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    });

    function iu(n, s) {
        if (s) {
            if (S1[n] && (s.children != null || s.dangerouslySetInnerHTML != null)) throw Error(r(137, n));
            if (s.dangerouslySetInnerHTML != null) {
                if (s.children != null) throw Error(r(60));
                if (typeof s.dangerouslySetInnerHTML != "object" || !("__html" in s.dangerouslySetInnerHTML)) throw Error(r(61))
            }
            if (s.style != null && typeof s.style != "object") throw Error(r(62))
        }
    }

    function ou(n, s) {
        if (n.indexOf("-") === -1) return typeof s.is == "string";
        switch (n) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
                return !1;
            default:
                return !0
        }
    }
    var au = null;

    function lu(n) {
        return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n
    }
    var uu = null,
        ys = null,
        vs = null;

    function _h(n) {
        if (n = Fi(n)) {
            if (typeof uu != "function") throw Error(r(280));
            var s = n.stateNode;
            s && (s = ha(s), uu(n.stateNode, n.type, s))
        }
    }

    function Rh(n) {
        ys ? vs ? vs.push(n) : vs = [n] : ys = n
    }

    function Ah() {
        if (ys) {
            var n = ys,
                s = vs;
            if (vs = ys = null, _h(n), s)
                for (n = 0; n < s.length; n++) _h(s[n])
        }
    }

    function Nh(n, s) {
        return n(s)
    }

    function Oh() {}
    var cu = !1;

    function Lh(n, s, o) {
        if (cu) return n(s, o);
        cu = !0;
        try {
            return Nh(n, s, o)
        } finally {
            cu = !1, (ys !== null || vs !== null) && (Oh(), Ah())
        }
    }

    function yi(n, s) {
        var o = n.stateNode;
        if (o === null) return null;
        var u = ha(o);
        if (u === null) return null;
        o = u[s];
        e: switch (s) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
                (u = !u.disabled) || (n = n.type, u = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !u;
                break e;
            default:
                n = !1
        }
        if (n) return null;
        if (o && typeof o != "function") throw Error(r(231, s, typeof o));
        return o
    }
    var du = !1;
    if (d) try {
        var vi = {};
        Object.defineProperty(vi, "passive", {
            get: function() {
                du = !0
            }
        }), window.addEventListener("test", vi, vi), window.removeEventListener("test", vi, vi)
    } catch {
        du = !1
    }

    function b1(n, s, o, u, f, p, v, E, C) {
        var I = Array.prototype.slice.call(arguments, 3);
        try {
            s.apply(o, I)
        } catch (H) {
            this.onError(H)
        }
    }
    var wi = !1,
        qo = null,
        Wo = !1,
        fu = null,
        k1 = {
            onError: function(n) {
                wi = !0, qo = n
            }
        };

    function E1(n, s, o, u, f, p, v, E, C) {
        wi = !1, qo = null, b1.apply(k1, arguments)
    }

    function T1(n, s, o, u, f, p, v, E, C) {
        if (E1.apply(this, arguments), wi) {
            if (wi) {
                var I = qo;
                wi = !1, qo = null
            } else throw Error(r(198));
            Wo || (Wo = !0, fu = I)
        }
    }

    function Lr(n) {
        var s = n,
            o = n;
        if (n.alternate)
            for (; s.return;) s = s.return;
        else {
            n = s;
            do s = n, (s.flags & 4098) !== 0 && (o = s.return), n = s.return; while (n)
        }
        return s.tag === 3 ? o : null
    }

    function Mh(n) {
        if (n.tag === 13) {
            var s = n.memoizedState;
            if (s === null && (n = n.alternate, n !== null && (s = n.memoizedState)), s !== null) return s.dehydrated
        }
        return null
    }

    function Dh(n) {
        if (Lr(n) !== n) throw Error(r(188))
    }

    function C1(n) {
        var s = n.alternate;
        if (!s) {
            if (s = Lr(n), s === null) throw Error(r(188));
            return s !== n ? null : n
        }
        for (var o = n, u = s;;) {
            var f = o.return;
            if (f === null) break;
            var p = f.alternate;
            if (p === null) {
                if (u = f.return, u !== null) {
                    o = u;
                    continue
                }
                break
            }
            if (f.child === p.child) {
                for (p = f.child; p;) {
                    if (p === o) return Dh(f), n;
                    if (p === u) return Dh(f), s;
                    p = p.sibling
                }
                throw Error(r(188))
            }
            if (o.return !== u.return) o = f, u = p;
            else {
                for (var v = !1, E = f.child; E;) {
                    if (E === o) {
                        v = !0, o = f, u = p;
                        break
                    }
                    if (E === u) {
                        v = !0, u = f, o = p;
                        break
                    }
                    E = E.sibling
                }
                if (!v) {
                    for (E = p.child; E;) {
                        if (E === o) {
                            v = !0, o = p, u = f;
                            break
                        }
                        if (E === u) {
                            v = !0, u = p, o = f;
                            break
                        }
                        E = E.sibling
                    }
                    if (!v) throw Error(r(189))
                }
            }
            if (o.alternate !== u) throw Error(r(190))
        }
        if (o.tag !== 3) throw Error(r(188));
        return o.stateNode.current === o ? n : s
    }

    function jh(n) {
        return n = C1(n), n !== null ? Ih(n) : null
    }

    function Ih(n) {
        if (n.tag === 5 || n.tag === 6) return n;
        for (n = n.child; n !== null;) {
            var s = Ih(n);
            if (s !== null) return s;
            n = n.sibling
        }
        return null
    }
    var Fh = e.unstable_scheduleCallback,
        Vh = e.unstable_cancelCallback,
        P1 = e.unstable_shouldYield,
        _1 = e.unstable_requestPaint,
        Ge = e.unstable_now,
        R1 = e.unstable_getCurrentPriorityLevel,
        hu = e.unstable_ImmediatePriority,
        Bh = e.unstable_UserBlockingPriority,
        Ko = e.unstable_NormalPriority,
        A1 = e.unstable_LowPriority,
        Uh = e.unstable_IdlePriority,
        Qo = null,
        mn = null;

    function N1(n) {
        if (mn && typeof mn.onCommitFiberRoot == "function") try {
            mn.onCommitFiberRoot(Qo, n, void 0, (n.current.flags & 128) === 128)
        } catch {}
    }
    var tn = Math.clz32 ? Math.clz32 : M1,
        O1 = Math.log,
        L1 = Math.LN2;

    function M1(n) {
        return n >>>= 0, n === 0 ? 32 : 31 - (O1(n) / L1 | 0) | 0
    }
    var Go = 64,
        Yo = 4194304;

    function xi(n) {
        switch (n & -n) {
            case 1:
                return 1;
            case 2:
                return 2;
            case 4:
                return 4;
            case 8:
                return 8;
            case 16:
                return 16;
            case 32:
                return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return n & 4194240;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                return n & 130023424;
            case 134217728:
                return 134217728;
            case 268435456:
                return 268435456;
            case 536870912:
                return 536870912;
            case 1073741824:
                return 1073741824;
            default:
                return n
        }
    }

    function Xo(n, s) {
        var o = n.pendingLanes;
        if (o === 0) return 0;
        var u = 0,
            f = n.suspendedLanes,
            p = n.pingedLanes,
            v = o & 268435455;
        if (v !== 0) {
            var E = v & ~f;
            E !== 0 ? u = xi(E) : (p &= v, p !== 0 && (u = xi(p)))
        } else v = o & ~f, v !== 0 ? u = xi(v) : p !== 0 && (u = xi(p));
        if (u === 0) return 0;
        if (s !== 0 && s !== u && (s & f) === 0 && (f = u & -u, p = s & -s, f >= p || f === 16 && (p & 4194240) !== 0)) return s;
        if ((u & 4) !== 0 && (u |= o & 16), s = n.entangledLanes, s !== 0)
            for (n = n.entanglements, s &= u; 0 < s;) o = 31 - tn(s), f = 1 << o, u |= n[o], s &= ~f;
        return u
    }

    function D1(n, s) {
        switch (n) {
            case 1:
            case 2:
            case 4:
                return s + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return s + 5e3;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                return -1;
            case 134217728:
            case 268435456:
            case 536870912:
            case 1073741824:
                return -1;
            default:
                return -1
        }
    }

    function j1(n, s) {
        for (var o = n.suspendedLanes, u = n.pingedLanes, f = n.expirationTimes, p = n.pendingLanes; 0 < p;) {
            var v = 31 - tn(p),
                E = 1 << v,
                C = f[v];
            C === -1 ? ((E & o) === 0 || (E & u) !== 0) && (f[v] = D1(E, s)) : C <= s && (n.expiredLanes |= E), p &= ~E
        }
    }

    function pu(n) {
        return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0
    }

    function zh() {
        var n = Go;
        return Go <<= 1, (Go & 4194240) === 0 && (Go = 64), n
    }

    function mu(n) {
        for (var s = [], o = 0; 31 > o; o++) s.push(n);
        return s
    }

    function Si(n, s, o) {
        n.pendingLanes |= s, s !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, s = 31 - tn(s), n[s] = o
    }

    function I1(n, s) {
        var o = n.pendingLanes & ~s;
        n.pendingLanes = s, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= s, n.mutableReadLanes &= s, n.entangledLanes &= s, s = n.entanglements;
        var u = n.eventTimes;
        for (n = n.expirationTimes; 0 < o;) {
            var f = 31 - tn(o),
                p = 1 << f;
            s[f] = 0, u[f] = -1, n[f] = -1, o &= ~p
        }
    }

    function gu(n, s) {
        var o = n.entangledLanes |= s;
        for (n = n.entanglements; o;) {
            var u = 31 - tn(o),
                f = 1 << u;
            f & s | n[u] & s && (n[u] |= s), o &= ~f
        }
    }
    var De = 0;

    function $h(n) {
        return n &= -n, 1 < n ? 4 < n ? (n & 268435455) !== 0 ? 16 : 536870912 : 4 : 1
    }
    var Hh, yu, qh, Wh, Kh, vu = !1,
        Jo = [],
        Kn = null,
        Qn = null,
        Gn = null,
        bi = new Map,
        ki = new Map,
        Yn = [],
        F1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

    function Qh(n, s) {
        switch (n) {
            case "focusin":
            case "focusout":
                Kn = null;
                break;
            case "dragenter":
            case "dragleave":
                Qn = null;
                break;
            case "mouseover":
            case "mouseout":
                Gn = null;
                break;
            case "pointerover":
            case "pointerout":
                bi.delete(s.pointerId);
                break;
            case "gotpointercapture":
            case "lostpointercapture":
                ki.delete(s.pointerId)
        }
    }

    function Ei(n, s, o, u, f, p) {
        return n === null || n.nativeEvent !== p ? (n = {
            blockedOn: s,
            domEventName: o,
            eventSystemFlags: u,
            nativeEvent: p,
            targetContainers: [f]
        }, s !== null && (s = Fi(s), s !== null && yu(s)), n) : (n.eventSystemFlags |= u, s = n.targetContainers, f !== null && s.indexOf(f) === -1 && s.push(f), n)
    }

    function V1(n, s, o, u, f) {
        switch (s) {
            case "focusin":
                return Kn = Ei(Kn, n, s, o, u, f), !0;
            case "dragenter":
                return Qn = Ei(Qn, n, s, o, u, f), !0;
            case "mouseover":
                return Gn = Ei(Gn, n, s, o, u, f), !0;
            case "pointerover":
                var p = f.pointerId;
                return bi.set(p, Ei(bi.get(p) || null, n, s, o, u, f)), !0;
            case "gotpointercapture":
                return p = f.pointerId, ki.set(p, Ei(ki.get(p) || null, n, s, o, u, f)), !0
        }
        return !1
    }

    function Gh(n) {
        var s = Mr(n.target);
        if (s !== null) {
            var o = Lr(s);
            if (o !== null) {
                if (s = o.tag, s === 13) {
                    if (s = Mh(o), s !== null) {
                        n.blockedOn = s, Kh(n.priority, function() {
                            qh(o)
                        });
                        return
                    }
                } else if (s === 3 && o.stateNode.current.memoizedState.isDehydrated) {
                    n.blockedOn = o.tag === 3 ? o.stateNode.containerInfo : null;
                    return
                }
            }
        }
        n.blockedOn = null
    }

    function Zo(n) {
        if (n.blockedOn !== null) return !1;
        for (var s = n.targetContainers; 0 < s.length;) {
            var o = xu(n.domEventName, n.eventSystemFlags, s[0], n.nativeEvent);
            if (o === null) {
                o = n.nativeEvent;
                var u = new o.constructor(o.type, o);
                au = u, o.target.dispatchEvent(u), au = null
            } else return s = Fi(o), s !== null && yu(s), n.blockedOn = o, !1;
            s.shift()
        }
        return !0
    }

    function Yh(n, s, o) {
        Zo(n) && o.delete(s)
    }

    function B1() {
        vu = !1, Kn !== null && Zo(Kn) && (Kn = null), Qn !== null && Zo(Qn) && (Qn = null), Gn !== null && Zo(Gn) && (Gn = null), bi.forEach(Yh), ki.forEach(Yh)
    }

    function Ti(n, s) {
        n.blockedOn === s && (n.blockedOn = null, vu || (vu = !0, e.unstable_scheduleCallback(e.unstable_NormalPriority, B1)))
    }

    function Ci(n) {
        function s(f) {
            return Ti(f, n)
        }
        if (0 < Jo.length) {
            Ti(Jo[0], n);
            for (var o = 1; o < Jo.length; o++) {
                var u = Jo[o];
                u.blockedOn === n && (u.blockedOn = null)
            }
        }
        for (Kn !== null && Ti(Kn, n), Qn !== null && Ti(Qn, n), Gn !== null && Ti(Gn, n), bi.forEach(s), ki.forEach(s), o = 0; o < Yn.length; o++) u = Yn[o], u.blockedOn === n && (u.blockedOn = null);
        for (; 0 < Yn.length && (o = Yn[0], o.blockedOn === null);) Gh(o), o.blockedOn === null && Yn.shift()
    }
    var ws = L.ReactCurrentBatchConfig,
        ea = !0;

    function U1(n, s, o, u) {
        var f = De,
            p = ws.transition;
        ws.transition = null;
        try {
            De = 1, wu(n, s, o, u)
        } finally {
            De = f, ws.transition = p
        }
    }

    function z1(n, s, o, u) {
        var f = De,
            p = ws.transition;
        ws.transition = null;
        try {
            De = 4, wu(n, s, o, u)
        } finally {
            De = f, ws.transition = p
        }
    }

    function wu(n, s, o, u) {
        if (ea) {
            var f = xu(n, s, o, u);
            if (f === null) Iu(n, s, u, ta, o), Qh(n, u);
            else if (V1(f, n, s, o, u)) u.stopPropagation();
            else if (Qh(n, u), s & 4 && -1 < F1.indexOf(n)) {
                for (; f !== null;) {
                    var p = Fi(f);
                    if (p !== null && Hh(p), p = xu(n, s, o, u), p === null && Iu(n, s, u, ta, o), p === f) break;
                    f = p
                }
                f !== null && u.stopPropagation()
            } else Iu(n, s, u, null, o)
        }
    }
    var ta = null;

    function xu(n, s, o, u) {
        if (ta = null, n = lu(u), n = Mr(n), n !== null)
            if (s = Lr(n), s === null) n = null;
            else if (o = s.tag, o === 13) {
            if (n = Mh(s), n !== null) return n;
            n = null
        } else if (o === 3) {
            if (s.stateNode.current.memoizedState.isDehydrated) return s.tag === 3 ? s.stateNode.containerInfo : null;
            n = null
        } else s !== n && (n = null);
        return ta = n, null
    }

    function Xh(n) {
        switch (n) {
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
                return 1;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
                return 4;
            case "message":
                switch (R1()) {
                    case hu:
                        return 1;
                    case Bh:
                        return 4;
                    case Ko:
                    case A1:
                        return 16;
                    case Uh:
                        return 536870912;
                    default:
                        return 16
                }
            default:
                return 16
        }
    }
    var Xn = null,
        Su = null,
        na = null;

    function Jh() {
        if (na) return na;
        var n, s = Su,
            o = s.length,
            u, f = "value" in Xn ? Xn.value : Xn.textContent,
            p = f.length;
        for (n = 0; n < o && s[n] === f[n]; n++);
        var v = o - n;
        for (u = 1; u <= v && s[o - u] === f[p - u]; u++);
        return na = f.slice(n, 1 < u ? 1 - u : void 0)
    }

    function ra(n) {
        var s = n.keyCode;
        return "charCode" in n ? (n = n.charCode, n === 0 && s === 13 && (n = 13)) : n = s, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0
    }

    function sa() {
        return !0
    }

    function Zh() {
        return !1
    }

    function Ft(n) {
        function s(o, u, f, p, v) {
            this._reactName = o, this._targetInst = f, this.type = u, this.nativeEvent = p, this.target = v, this.currentTarget = null;
            for (var E in n) n.hasOwnProperty(E) && (o = n[E], this[E] = o ? o(p) : p[E]);
            return this.isDefaultPrevented = (p.defaultPrevented != null ? p.defaultPrevented : p.returnValue === !1) ? sa : Zh, this.isPropagationStopped = Zh, this
        }
        return U(s.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var o = this.nativeEvent;
                o && (o.preventDefault ? o.preventDefault() : typeof o.returnValue != "unknown" && (o.returnValue = !1), this.isDefaultPrevented = sa)
            },
            stopPropagation: function() {
                var o = this.nativeEvent;
                o && (o.stopPropagation ? o.stopPropagation() : typeof o.cancelBubble != "unknown" && (o.cancelBubble = !0), this.isPropagationStopped = sa)
            },
            persist: function() {},
            isPersistent: sa
        }), s
    }
    var xs = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function(n) {
                return n.timeStamp || Date.now()
            },
            defaultPrevented: 0,
            isTrusted: 0
        },
        bu = Ft(xs),
        Pi = U({}, xs, {
            view: 0,
            detail: 0
        }),
        $1 = Ft(Pi),
        ku, Eu, _i, ia = U({}, Pi, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: Cu,
            button: 0,
            buttons: 0,
            relatedTarget: function(n) {
                return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget
            },
            movementX: function(n) {
                return "movementX" in n ? n.movementX : (n !== _i && (_i && n.type === "mousemove" ? (ku = n.screenX - _i.screenX, Eu = n.screenY - _i.screenY) : Eu = ku = 0, _i = n), ku)
            },
            movementY: function(n) {
                return "movementY" in n ? n.movementY : Eu
            }
        }),
        ep = Ft(ia),
        H1 = U({}, ia, {
            dataTransfer: 0
        }),
        q1 = Ft(H1),
        W1 = U({}, Pi, {
            relatedTarget: 0
        }),
        Tu = Ft(W1),
        K1 = U({}, xs, {
            animationName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }),
        Q1 = Ft(K1),
        G1 = U({}, xs, {
            clipboardData: function(n) {
                return "clipboardData" in n ? n.clipboardData : window.clipboardData
            }
        }),
        Y1 = Ft(G1),
        X1 = U({}, xs, {
            data: 0
        }),
        tp = Ft(X1),
        J1 = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified"
        },
        Z1 = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta"
        },
        eS = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey"
        };

    function tS(n) {
        var s = this.nativeEvent;
        return s.getModifierState ? s.getModifierState(n) : (n = eS[n]) ? !!s[n] : !1
    }

    function Cu() {
        return tS
    }
    var nS = U({}, Pi, {
            key: function(n) {
                if (n.key) {
                    var s = J1[n.key] || n.key;
                    if (s !== "Unidentified") return s
                }
                return n.type === "keypress" ? (n = ra(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? Z1[n.keyCode] || "Unidentified" : ""
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Cu,
            charCode: function(n) {
                return n.type === "keypress" ? ra(n) : 0
            },
            keyCode: function(n) {
                return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0
            },
            which: function(n) {
                return n.type === "keypress" ? ra(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0
            }
        }),
        rS = Ft(nS),
        sS = U({}, ia, {
            pointerId: 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            pointerType: 0,
            isPrimary: 0
        }),
        np = Ft(sS),
        iS = U({}, Pi, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: Cu
        }),
        oS = Ft(iS),
        aS = U({}, xs, {
            propertyName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }),
        lS = Ft(aS),
        uS = U({}, ia, {
            deltaX: function(n) {
                return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0
            },
            deltaY: function(n) {
                return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0
            },
            deltaZ: 0,
            deltaMode: 0
        }),
        cS = Ft(uS),
        dS = [9, 13, 27, 32],
        Pu = d && "CompositionEvent" in window,
        Ri = null;
    d && "documentMode" in document && (Ri = document.documentMode);
    var fS = d && "TextEvent" in window && !Ri,
        rp = d && (!Pu || Ri && 8 < Ri && 11 >= Ri),
        sp = " ",
        ip = !1;

    function op(n, s) {
        switch (n) {
            case "keyup":
                return dS.indexOf(s.keyCode) !== -1;
            case "keydown":
                return s.keyCode !== 229;
            case "keypress":
            case "mousedown":
            case "focusout":
                return !0;
            default:
                return !1
        }
    }

    function ap(n) {
        return n = n.detail, typeof n == "object" && "data" in n ? n.data : null
    }
    var Ss = !1;

    function hS(n, s) {
        switch (n) {
            case "compositionend":
                return ap(s);
            case "keypress":
                return s.which !== 32 ? null : (ip = !0, sp);
            case "textInput":
                return n = s.data, n === sp && ip ? null : n;
            default:
                return null
        }
    }

    function pS(n, s) {
        if (Ss) return n === "compositionend" || !Pu && op(n, s) ? (n = Jh(), na = Su = Xn = null, Ss = !1, n) : null;
        switch (n) {
            case "paste":
                return null;
            case "keypress":
                if (!(s.ctrlKey || s.altKey || s.metaKey) || s.ctrlKey && s.altKey) {
                    if (s.char && 1 < s.char.length) return s.char;
                    if (s.which) return String.fromCharCode(s.which)
                }
                return null;
            case "compositionend":
                return rp && s.locale !== "ko" ? null : s.data;
            default:
                return null
        }
    }
    var mS = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };

    function lp(n) {
        var s = n && n.nodeName && n.nodeName.toLowerCase();
        return s === "input" ? !!mS[n.type] : s === "textarea"
    }

    function up(n, s, o, u) {
        Rh(u), s = ca(s, "onChange"), 0 < s.length && (o = new bu("onChange", "change", null, o, u), n.push({
            event: o,
            listeners: s
        }))
    }
    var Ai = null,
        Ni = null;

    function gS(n) {
        Pp(n, 0)
    }

    function oa(n) {
        var s = Cs(n);
        if (Or(s)) return n
    }

    function yS(n, s) {
        if (n === "change") return s
    }
    var cp = !1;
    if (d) {
        var _u;
        if (d) {
            var Ru = "oninput" in document;
            if (!Ru) {
                var dp = document.createElement("div");
                dp.setAttribute("oninput", "return;"), Ru = typeof dp.oninput == "function"
            }
            _u = Ru
        } else _u = !1;
        cp = _u && (!document.documentMode || 9 < document.documentMode)
    }

    function fp() {
        Ai && (Ai.detachEvent("onpropertychange", hp), Ni = Ai = null)
    }

    function hp(n) {
        if (n.propertyName === "value" && oa(Ni)) {
            var s = [];
            up(s, Ni, n, lu(n)), Lh(gS, s)
        }
    }

    function vS(n, s, o) {
        n === "focusin" ? (fp(), Ai = s, Ni = o, Ai.attachEvent("onpropertychange", hp)) : n === "focusout" && fp()
    }

    function wS(n) {
        if (n === "selectionchange" || n === "keyup" || n === "keydown") return oa(Ni)
    }

    function xS(n, s) {
        if (n === "click") return oa(s)
    }

    function SS(n, s) {
        if (n === "input" || n === "change") return oa(s)
    }

    function bS(n, s) {
        return n === s && (n !== 0 || 1 / n === 1 / s) || n !== n && s !== s
    }
    var nn = typeof Object.is == "function" ? Object.is : bS;

    function Oi(n, s) {
        if (nn(n, s)) return !0;
        if (typeof n != "object" || n === null || typeof s != "object" || s === null) return !1;
        var o = Object.keys(n),
            u = Object.keys(s);
        if (o.length !== u.length) return !1;
        for (u = 0; u < o.length; u++) {
            var f = o[u];
            if (!h.call(s, f) || !nn(n[f], s[f])) return !1
        }
        return !0
    }

    function pp(n) {
        for (; n && n.firstChild;) n = n.firstChild;
        return n
    }

    function mp(n, s) {
        var o = pp(n);
        n = 0;
        for (var u; o;) {
            if (o.nodeType === 3) {
                if (u = n + o.textContent.length, n <= s && u >= s) return {
                    node: o,
                    offset: s - n
                };
                n = u
            }
            e: {
                for (; o;) {
                    if (o.nextSibling) {
                        o = o.nextSibling;
                        break e
                    }
                    o = o.parentNode
                }
                o = void 0
            }
            o = pp(o)
        }
    }

    function gp(n, s) {
        return n && s ? n === s ? !0 : n && n.nodeType === 3 ? !1 : s && s.nodeType === 3 ? gp(n, s.parentNode) : "contains" in n ? n.contains(s) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(s) & 16) : !1 : !1
    }

    function yp() {
        for (var n = window, s = qn(); s instanceof n.HTMLIFrameElement;) {
            try {
                var o = typeof s.contentWindow.location.href == "string"
            } catch {
                o = !1
            }
            if (o) n = s.contentWindow;
            else break;
            s = qn(n.document)
        }
        return s
    }

    function Au(n) {
        var s = n && n.nodeName && n.nodeName.toLowerCase();
        return s && (s === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || s === "textarea" || n.contentEditable === "true")
    }

    function kS(n) {
        var s = yp(),
            o = n.focusedElem,
            u = n.selectionRange;
        if (s !== o && o && o.ownerDocument && gp(o.ownerDocument.documentElement, o)) {
            if (u !== null && Au(o)) {
                if (s = u.start, n = u.end, n === void 0 && (n = s), "selectionStart" in o) o.selectionStart = s, o.selectionEnd = Math.min(n, o.value.length);
                else if (n = (s = o.ownerDocument || document) && s.defaultView || window, n.getSelection) {
                    n = n.getSelection();
                    var f = o.textContent.length,
                        p = Math.min(u.start, f);
                    u = u.end === void 0 ? p : Math.min(u.end, f), !n.extend && p > u && (f = u, u = p, p = f), f = mp(o, p);
                    var v = mp(o, u);
                    f && v && (n.rangeCount !== 1 || n.anchorNode !== f.node || n.anchorOffset !== f.offset || n.focusNode !== v.node || n.focusOffset !== v.offset) && (s = s.createRange(), s.setStart(f.node, f.offset), n.removeAllRanges(), p > u ? (n.addRange(s), n.extend(v.node, v.offset)) : (s.setEnd(v.node, v.offset), n.addRange(s)))
                }
            }
            for (s = [], n = o; n = n.parentNode;) n.nodeType === 1 && s.push({
                element: n,
                left: n.scrollLeft,
                top: n.scrollTop
            });
            for (typeof o.focus == "function" && o.focus(), o = 0; o < s.length; o++) n = s[o], n.element.scrollLeft = n.left, n.element.scrollTop = n.top
        }
    }
    var ES = d && "documentMode" in document && 11 >= document.documentMode,
        bs = null,
        Nu = null,
        Li = null,
        Ou = !1;

    function vp(n, s, o) {
        var u = o.window === o ? o.document : o.nodeType === 9 ? o : o.ownerDocument;
        Ou || bs == null || bs !== qn(u) || (u = bs, "selectionStart" in u && Au(u) ? u = {
            start: u.selectionStart,
            end: u.selectionEnd
        } : (u = (u.ownerDocument && u.ownerDocument.defaultView || window).getSelection(), u = {
            anchorNode: u.anchorNode,
            anchorOffset: u.anchorOffset,
            focusNode: u.focusNode,
            focusOffset: u.focusOffset
        }), Li && Oi(Li, u) || (Li = u, u = ca(Nu, "onSelect"), 0 < u.length && (s = new bu("onSelect", "select", null, s, o), n.push({
            event: s,
            listeners: u
        }), s.target = bs)))
    }

    function aa(n, s) {
        var o = {};
        return o[n.toLowerCase()] = s.toLowerCase(), o["Webkit" + n] = "webkit" + s, o["Moz" + n] = "moz" + s, o
    }
    var ks = {
            animationend: aa("Animation", "AnimationEnd"),
            animationiteration: aa("Animation", "AnimationIteration"),
            animationstart: aa("Animation", "AnimationStart"),
            transitionend: aa("Transition", "TransitionEnd")
        },
        Lu = {},
        wp = {};
    d && (wp = document.createElement("div").style, "AnimationEvent" in window || (delete ks.animationend.animation, delete ks.animationiteration.animation, delete ks.animationstart.animation), "TransitionEvent" in window || delete ks.transitionend.transition);

    function la(n) {
        if (Lu[n]) return Lu[n];
        if (!ks[n]) return n;
        var s = ks[n],
            o;
        for (o in s)
            if (s.hasOwnProperty(o) && o in wp) return Lu[n] = s[o];
        return n
    }
    var xp = la("animationend"),
        Sp = la("animationiteration"),
        bp = la("animationstart"),
        kp = la("transitionend"),
        Ep = new Map,
        Tp = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

    function Jn(n, s) {
        Ep.set(n, s), l(s, [n])
    }
    for (var Mu = 0; Mu < Tp.length; Mu++) {
        var Du = Tp[Mu],
            TS = Du.toLowerCase(),
            CS = Du[0].toUpperCase() + Du.slice(1);
        Jn(TS, "on" + CS)
    }
    Jn(xp, "onAnimationEnd"), Jn(Sp, "onAnimationIteration"), Jn(bp, "onAnimationStart"), Jn("dblclick", "onDoubleClick"), Jn("focusin", "onFocus"), Jn("focusout", "onBlur"), Jn(kp, "onTransitionEnd"), c("onMouseEnter", ["mouseout", "mouseover"]), c("onMouseLeave", ["mouseout", "mouseover"]), c("onPointerEnter", ["pointerout", "pointerover"]), c("onPointerLeave", ["pointerout", "pointerover"]), l("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), l("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), l("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), l("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), l("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), l("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var Mi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
        PS = new Set("cancel close invalid load scroll toggle".split(" ").concat(Mi));

    function Cp(n, s, o) {
        var u = n.type || "unknown-event";
        n.currentTarget = o, T1(u, s, void 0, n), n.currentTarget = null
    }

    function Pp(n, s) {
        s = (s & 4) !== 0;
        for (var o = 0; o < n.length; o++) {
            var u = n[o],
                f = u.event;
            u = u.listeners;
            e: {
                var p = void 0;
                if (s)
                    for (var v = u.length - 1; 0 <= v; v--) {
                        var E = u[v],
                            C = E.instance,
                            I = E.currentTarget;
                        if (E = E.listener, C !== p && f.isPropagationStopped()) break e;
                        Cp(f, E, I), p = C
                    } else
                        for (v = 0; v < u.length; v++) {
                            if (E = u[v], C = E.instance, I = E.currentTarget, E = E.listener, C !== p && f.isPropagationStopped()) break e;
                            Cp(f, E, I), p = C
                        }
            }
        }
        if (Wo) throw n = fu, Wo = !1, fu = null, n
    }

    function Be(n, s) {
        var o = s[$u];
        o === void 0 && (o = s[$u] = new Set);
        var u = n + "__bubble";
        o.has(u) || (_p(s, n, 2, !1), o.add(u))
    }

    function ju(n, s, o) {
        var u = 0;
        s && (u |= 4), _p(o, n, u, s)
    }
    var ua = "_reactListening" + Math.random().toString(36).slice(2);

    function Di(n) {
        if (!n[ua]) {
            n[ua] = !0, i.forEach(function(o) {
                o !== "selectionchange" && (PS.has(o) || ju(o, !1, n), ju(o, !0, n))
            });
            var s = n.nodeType === 9 ? n : n.ownerDocument;
            s === null || s[ua] || (s[ua] = !0, ju("selectionchange", !1, s))
        }
    }

    function _p(n, s, o, u) {
        switch (Xh(s)) {
            case 1:
                var f = U1;
                break;
            case 4:
                f = z1;
                break;
            default:
                f = wu
        }
        o = f.bind(null, s, o, n), f = void 0, !du || s !== "touchstart" && s !== "touchmove" && s !== "wheel" || (f = !0), u ? f !== void 0 ? n.addEventListener(s, o, {
            capture: !0,
            passive: f
        }) : n.addEventListener(s, o, !0) : f !== void 0 ? n.addEventListener(s, o, {
            passive: f
        }) : n.addEventListener(s, o, !1)
    }

    function Iu(n, s, o, u, f) {
        var p = u;
        if ((s & 1) === 0 && (s & 2) === 0 && u !== null) e: for (;;) {
            if (u === null) return;
            var v = u.tag;
            if (v === 3 || v === 4) {
                var E = u.stateNode.containerInfo;
                if (E === f || E.nodeType === 8 && E.parentNode === f) break;
                if (v === 4)
                    for (v = u.return; v !== null;) {
                        var C = v.tag;
                        if ((C === 3 || C === 4) && (C = v.stateNode.containerInfo, C === f || C.nodeType === 8 && C.parentNode === f)) return;
                        v = v.return
                    }
                for (; E !== null;) {
                    if (v = Mr(E), v === null) return;
                    if (C = v.tag, C === 5 || C === 6) {
                        u = p = v;
                        continue e
                    }
                    E = E.parentNode
                }
            }
            u = u.return
        }
        Lh(function() {
            var I = p,
                H = lu(o),
                q = [];
            e: {
                var $ = Ep.get(n);
                if ($ !== void 0) {
                    var Y = bu,
                        ee = n;
                    switch (n) {
                        case "keypress":
                            if (ra(o) === 0) break e;
                        case "keydown":
                        case "keyup":
                            Y = rS;
                            break;
                        case "focusin":
                            ee = "focus", Y = Tu;
                            break;
                        case "focusout":
                            ee = "blur", Y = Tu;
                            break;
                        case "beforeblur":
                        case "afterblur":
                            Y = Tu;
                            break;
                        case "click":
                            if (o.button === 2) break e;
                        case "auxclick":
                        case "dblclick":
                        case "mousedown":
                        case "mousemove":
                        case "mouseup":
                        case "mouseout":
                        case "mouseover":
                        case "contextmenu":
                            Y = ep;
                            break;
                        case "drag":
                        case "dragend":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "dragstart":
                        case "drop":
                            Y = q1;
                            break;
                        case "touchcancel":
                        case "touchend":
                        case "touchmove":
                        case "touchstart":
                            Y = oS;
                            break;
                        case xp:
                        case Sp:
                        case bp:
                            Y = Q1;
                            break;
                        case kp:
                            Y = lS;
                            break;
                        case "scroll":
                            Y = $1;
                            break;
                        case "wheel":
                            Y = cS;
                            break;
                        case "copy":
                        case "cut":
                        case "paste":
                            Y = Y1;
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "pointerup":
                            Y = np
                    }
                    var re = (s & 4) !== 0,
                        Ye = !re && n === "scroll",
                        N = re ? $ !== null ? $ + "Capture" : null : $;
                    re = [];
                    for (var _ = I, O; _ !== null;) {
                        O = _;
                        var Q = O.stateNode;
                        if (O.tag === 5 && Q !== null && (O = Q, N !== null && (Q = yi(_, N), Q != null && re.push(ji(_, Q, O)))), Ye) break;
                        _ = _.return
                    }
                    0 < re.length && ($ = new Y($, ee, null, o, H), q.push({
                        event: $,
                        listeners: re
                    }))
                }
            }
            if ((s & 7) === 0) {
                e: {
                    if ($ = n === "mouseover" || n === "pointerover", Y = n === "mouseout" || n === "pointerout", $ && o !== au && (ee = o.relatedTarget || o.fromElement) && (Mr(ee) || ee[An])) break e;
                    if ((Y || $) && ($ = H.window === H ? H : ($ = H.ownerDocument) ? $.defaultView || $.parentWindow : window, Y ? (ee = o.relatedTarget || o.toElement, Y = I, ee = ee ? Mr(ee) : null, ee !== null && (Ye = Lr(ee), ee !== Ye || ee.tag !== 5 && ee.tag !== 6) && (ee = null)) : (Y = null, ee = I), Y !== ee)) {
                        if (re = ep, Q = "onMouseLeave", N = "onMouseEnter", _ = "mouse", (n === "pointerout" || n === "pointerover") && (re = np, Q = "onPointerLeave", N = "onPointerEnter", _ = "pointer"), Ye = Y == null ? $ : Cs(Y), O = ee == null ? $ : Cs(ee), $ = new re(Q, _ + "leave", Y, o, H), $.target = Ye, $.relatedTarget = O, Q = null, Mr(H) === I && (re = new re(N, _ + "enter", ee, o, H), re.target = O, re.relatedTarget = Ye, Q = re), Ye = Q, Y && ee) t: {
                            for (re = Y, N = ee, _ = 0, O = re; O; O = Es(O)) _++;
                            for (O = 0, Q = N; Q; Q = Es(Q)) O++;
                            for (; 0 < _ - O;) re = Es(re),
                            _--;
                            for (; 0 < O - _;) N = Es(N),
                            O--;
                            for (; _--;) {
                                if (re === N || N !== null && re === N.alternate) break t;
                                re = Es(re), N = Es(N)
                            }
                            re = null
                        }
                        else re = null;
                        Y !== null && Rp(q, $, Y, re, !1), ee !== null && Ye !== null && Rp(q, Ye, ee, re, !0)
                    }
                }
                e: {
                    if ($ = I ? Cs(I) : window, Y = $.nodeName && $.nodeName.toLowerCase(), Y === "select" || Y === "input" && $.type === "file") var ie = yS;
                    else if (lp($))
                        if (cp) ie = SS;
                        else {
                            ie = wS;
                            var oe = vS
                        }
                    else(Y = $.nodeName) && Y.toLowerCase() === "input" && ($.type === "checkbox" || $.type === "radio") && (ie = xS);
                    if (ie && (ie = ie(n, I))) {
                        up(q, ie, o, H);
                        break e
                    }
                    oe && oe(n, $, I),
                    n === "focusout" && (oe = $._wrapperState) && oe.controlled && $.type === "number" && nu($, "number", $.value)
                }
                switch (oe = I ? Cs(I) : window, n) {
                    case "focusin":
                        (lp(oe) || oe.contentEditable === "true") && (bs = oe, Nu = I, Li = null);
                        break;
                    case "focusout":
                        Li = Nu = bs = null;
                        break;
                    case "mousedown":
                        Ou = !0;
                        break;
                    case "contextmenu":
                    case "mouseup":
                    case "dragend":
                        Ou = !1, vp(q, o, H);
                        break;
                    case "selectionchange":
                        if (ES) break;
                    case "keydown":
                    case "keyup":
                        vp(q, o, H)
                }
                var ae;
                if (Pu) e: {
                    switch (n) {
                        case "compositionstart":
                            var ge = "onCompositionStart";
                            break e;
                        case "compositionend":
                            ge = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            ge = "onCompositionUpdate";
                            break e
                    }
                    ge = void 0
                }
                else Ss ? op(n, o) && (ge = "onCompositionEnd") : n === "keydown" && o.keyCode === 229 && (ge = "onCompositionStart");ge && (rp && o.locale !== "ko" && (Ss || ge !== "onCompositionStart" ? ge === "onCompositionEnd" && Ss && (ae = Jh()) : (Xn = H, Su = "value" in Xn ? Xn.value : Xn.textContent, Ss = !0)), oe = ca(I, ge), 0 < oe.length && (ge = new tp(ge, n, null, o, H), q.push({
                    event: ge,
                    listeners: oe
                }), ae ? ge.data = ae : (ae = ap(o), ae !== null && (ge.data = ae)))),
                (ae = fS ? hS(n, o) : pS(n, o)) && (I = ca(I, "onBeforeInput"), 0 < I.length && (H = new tp("onBeforeInput", "beforeinput", null, o, H), q.push({
                    event: H,
                    listeners: I
                }), H.data = ae))
            }
            Pp(q, s)
        })
    }

    function ji(n, s, o) {
        return {
            instance: n,
            listener: s,
            currentTarget: o
        }
    }

    function ca(n, s) {
        for (var o = s + "Capture", u = []; n !== null;) {
            var f = n,
                p = f.stateNode;
            f.tag === 5 && p !== null && (f = p, p = yi(n, o), p != null && u.unshift(ji(n, p, f)), p = yi(n, s), p != null && u.push(ji(n, p, f))), n = n.return
        }
        return u
    }

    function Es(n) {
        if (n === null) return null;
        do n = n.return; while (n && n.tag !== 5);
        return n || null
    }

    function Rp(n, s, o, u, f) {
        for (var p = s._reactName, v = []; o !== null && o !== u;) {
            var E = o,
                C = E.alternate,
                I = E.stateNode;
            if (C !== null && C === u) break;
            E.tag === 5 && I !== null && (E = I, f ? (C = yi(o, p), C != null && v.unshift(ji(o, C, E))) : f || (C = yi(o, p), C != null && v.push(ji(o, C, E)))), o = o.return
        }
        v.length !== 0 && n.push({
            event: s,
            listeners: v
        })
    }
    var _S = /\r\n?/g,
        RS = /\u0000|\uFFFD/g;

    function Ap(n) {
        return (typeof n == "string" ? n : "" + n).replace(_S, `
`).replace(RS, "")
    }

    function da(n, s, o) {
        if (s = Ap(s), Ap(n) !== s && o) throw Error(r(425))
    }

    function fa() {}
    var Fu = null,
        Vu = null;

    function Bu(n, s) {
        return n === "textarea" || n === "noscript" || typeof s.children == "string" || typeof s.children == "number" || typeof s.dangerouslySetInnerHTML == "object" && s.dangerouslySetInnerHTML !== null && s.dangerouslySetInnerHTML.__html != null
    }
    var Uu = typeof setTimeout == "function" ? setTimeout : void 0,
        AS = typeof clearTimeout == "function" ? clearTimeout : void 0,
        Np = typeof Promise == "function" ? Promise : void 0,
        NS = typeof queueMicrotask == "function" ? queueMicrotask : typeof Np < "u" ? function(n) {
            return Np.resolve(null).then(n).catch(OS)
        } : Uu;

    function OS(n) {
        setTimeout(function() {
            throw n
        })
    }

    function zu(n, s) {
        var o = s,
            u = 0;
        do {
            var f = o.nextSibling;
            if (n.removeChild(o), f && f.nodeType === 8)
                if (o = f.data, o === "/$") {
                    if (u === 0) {
                        n.removeChild(f), Ci(s);
                        return
                    }
                    u--
                } else o !== "$" && o !== "$?" && o !== "$!" || u++;
            o = f
        } while (o);
        Ci(s)
    }

    function Zn(n) {
        for (; n != null; n = n.nextSibling) {
            var s = n.nodeType;
            if (s === 1 || s === 3) break;
            if (s === 8) {
                if (s = n.data, s === "$" || s === "$!" || s === "$?") break;
                if (s === "/$") return null
            }
        }
        return n
    }

    function Op(n) {
        n = n.previousSibling;
        for (var s = 0; n;) {
            if (n.nodeType === 8) {
                var o = n.data;
                if (o === "$" || o === "$!" || o === "$?") {
                    if (s === 0) return n;
                    s--
                } else o === "/$" && s++
            }
            n = n.previousSibling
        }
        return null
    }
    var Ts = Math.random().toString(36).slice(2),
        gn = "__reactFiber$" + Ts,
        Ii = "__reactProps$" + Ts,
        An = "__reactContainer$" + Ts,
        $u = "__reactEvents$" + Ts,
        LS = "__reactListeners$" + Ts,
        MS = "__reactHandles$" + Ts;

    function Mr(n) {
        var s = n[gn];
        if (s) return s;
        for (var o = n.parentNode; o;) {
            if (s = o[An] || o[gn]) {
                if (o = s.alternate, s.child !== null || o !== null && o.child !== null)
                    for (n = Op(n); n !== null;) {
                        if (o = n[gn]) return o;
                        n = Op(n)
                    }
                return s
            }
            n = o, o = n.parentNode
        }
        return null
    }

    function Fi(n) {
        return n = n[gn] || n[An], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n
    }

    function Cs(n) {
        if (n.tag === 5 || n.tag === 6) return n.stateNode;
        throw Error(r(33))
    }

    function ha(n) {
        return n[Ii] || null
    }
    var Hu = [],
        Ps = -1;

    function er(n) {
        return {
            current: n
        }
    }

    function Ue(n) {
        0 > Ps || (n.current = Hu[Ps], Hu[Ps] = null, Ps--)
    }

    function Ve(n, s) {
        Ps++, Hu[Ps] = n.current, n.current = s
    }
    var tr = {},
        pt = er(tr),
        Pt = er(!1),
        Dr = tr;

    function _s(n, s) {
        var o = n.type.contextTypes;
        if (!o) return tr;
        var u = n.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === s) return u.__reactInternalMemoizedMaskedChildContext;
        var f = {},
            p;
        for (p in o) f[p] = s[p];
        return u && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = s, n.__reactInternalMemoizedMaskedChildContext = f), f
    }

    function _t(n) {
        return n = n.childContextTypes, n != null
    }

    function pa() {
        Ue(Pt), Ue(pt)
    }

    function Lp(n, s, o) {
        if (pt.current !== tr) throw Error(r(168));
        Ve(pt, s), Ve(Pt, o)
    }

    function Mp(n, s, o) {
        var u = n.stateNode;
        if (s = s.childContextTypes, typeof u.getChildContext != "function") return o;
        u = u.getChildContext();
        for (var f in u)
            if (!(f in s)) throw Error(r(108, Oe(n) || "Unknown", f));
        return U({}, o, u)
    }

    function ma(n) {
        return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || tr, Dr = pt.current, Ve(pt, n), Ve(Pt, Pt.current), !0
    }

    function Dp(n, s, o) {
        var u = n.stateNode;
        if (!u) throw Error(r(169));
        o ? (n = Mp(n, s, Dr), u.__reactInternalMemoizedMergedChildContext = n, Ue(Pt), Ue(pt), Ve(pt, n)) : Ue(Pt), Ve(Pt, o)
    }
    var Nn = null,
        ga = !1,
        qu = !1;

    function jp(n) {
        Nn === null ? Nn = [n] : Nn.push(n)
    }

    function DS(n) {
        ga = !0, jp(n)
    }

    function nr() {
        if (!qu && Nn !== null) {
            qu = !0;
            var n = 0,
                s = De;
            try {
                var o = Nn;
                for (De = 1; n < o.length; n++) {
                    var u = o[n];
                    do u = u(!0); while (u !== null)
                }
                Nn = null, ga = !1
            } catch (f) {
                throw Nn !== null && (Nn = Nn.slice(n + 1)), Fh(hu, nr), f
            } finally {
                De = s, qu = !1
            }
        }
        return null
    }
    var Rs = [],
        As = 0,
        ya = null,
        va = 0,
        $t = [],
        Ht = 0,
        jr = null,
        On = 1,
        Ln = "";

    function Ir(n, s) {
        Rs[As++] = va, Rs[As++] = ya, ya = n, va = s
    }

    function Ip(n, s, o) {
        $t[Ht++] = On, $t[Ht++] = Ln, $t[Ht++] = jr, jr = n;
        var u = On;
        n = Ln;
        var f = 32 - tn(u) - 1;
        u &= ~(1 << f), o += 1;
        var p = 32 - tn(s) + f;
        if (30 < p) {
            var v = f - f % 5;
            p = (u & (1 << v) - 1).toString(32), u >>= v, f -= v, On = 1 << 32 - tn(s) + f | o << f | u, Ln = p + n
        } else On = 1 << p | o << f | u, Ln = n
    }

    function Wu(n) {
        n.return !== null && (Ir(n, 1), Ip(n, 1, 0))
    }

    function Ku(n) {
        for (; n === ya;) ya = Rs[--As], Rs[As] = null, va = Rs[--As], Rs[As] = null;
        for (; n === jr;) jr = $t[--Ht], $t[Ht] = null, Ln = $t[--Ht], $t[Ht] = null, On = $t[--Ht], $t[Ht] = null
    }
    var Vt = null,
        Bt = null,
        ze = !1,
        rn = null;

    function Fp(n, s) {
        var o = Qt(5, null, null, 0);
        o.elementType = "DELETED", o.stateNode = s, o.return = n, s = n.deletions, s === null ? (n.deletions = [o], n.flags |= 16) : s.push(o)
    }

    function Vp(n, s) {
        switch (n.tag) {
            case 5:
                var o = n.type;
                return s = s.nodeType !== 1 || o.toLowerCase() !== s.nodeName.toLowerCase() ? null : s, s !== null ? (n.stateNode = s, Vt = n, Bt = Zn(s.firstChild), !0) : !1;
            case 6:
                return s = n.pendingProps === "" || s.nodeType !== 3 ? null : s, s !== null ? (n.stateNode = s, Vt = n, Bt = null, !0) : !1;
            case 13:
                return s = s.nodeType !== 8 ? null : s, s !== null ? (o = jr !== null ? {
                    id: On,
                    overflow: Ln
                } : null, n.memoizedState = {
                    dehydrated: s,
                    treeContext: o,
                    retryLane: 1073741824
                }, o = Qt(18, null, null, 0), o.stateNode = s, o.return = n, n.child = o, Vt = n, Bt = null, !0) : !1;
            default:
                return !1
        }
    }

    function Qu(n) {
        return (n.mode & 1) !== 0 && (n.flags & 128) === 0
    }

    function Gu(n) {
        if (ze) {
            var s = Bt;
            if (s) {
                var o = s;
                if (!Vp(n, s)) {
                    if (Qu(n)) throw Error(r(418));
                    s = Zn(o.nextSibling);
                    var u = Vt;
                    s && Vp(n, s) ? Fp(u, o) : (n.flags = n.flags & -4097 | 2, ze = !1, Vt = n)
                }
            } else {
                if (Qu(n)) throw Error(r(418));
                n.flags = n.flags & -4097 | 2, ze = !1, Vt = n
            }
        }
    }

    function Bp(n) {
        for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13;) n = n.return;
        Vt = n
    }

    function wa(n) {
        if (n !== Vt) return !1;
        if (!ze) return Bp(n), ze = !0, !1;
        var s;
        if ((s = n.tag !== 3) && !(s = n.tag !== 5) && (s = n.type, s = s !== "head" && s !== "body" && !Bu(n.type, n.memoizedProps)), s && (s = Bt)) {
            if (Qu(n)) throw Up(), Error(r(418));
            for (; s;) Fp(n, s), s = Zn(s.nextSibling)
        }
        if (Bp(n), n.tag === 13) {
            if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(r(317));
            e: {
                for (n = n.nextSibling, s = 0; n;) {
                    if (n.nodeType === 8) {
                        var o = n.data;
                        if (o === "/$") {
                            if (s === 0) {
                                Bt = Zn(n.nextSibling);
                                break e
                            }
                            s--
                        } else o !== "$" && o !== "$!" && o !== "$?" || s++
                    }
                    n = n.nextSibling
                }
                Bt = null
            }
        } else Bt = Vt ? Zn(n.stateNode.nextSibling) : null;
        return !0
    }

    function Up() {
        for (var n = Bt; n;) n = Zn(n.nextSibling)
    }

    function Ns() {
        Bt = Vt = null, ze = !1
    }

    function Yu(n) {
        rn === null ? rn = [n] : rn.push(n)
    }
    var jS = L.ReactCurrentBatchConfig;

    function Vi(n, s, o) {
        if (n = o.ref, n !== null && typeof n != "function" && typeof n != "object") {
            if (o._owner) {
                if (o = o._owner, o) {
                    if (o.tag !== 1) throw Error(r(309));
                    var u = o.stateNode
                }
                if (!u) throw Error(r(147, n));
                var f = u,
                    p = "" + n;
                return s !== null && s.ref !== null && typeof s.ref == "function" && s.ref._stringRef === p ? s.ref : (s = function(v) {
                    var E = f.refs;
                    v === null ? delete E[p] : E[p] = v
                }, s._stringRef = p, s)
            }
            if (typeof n != "string") throw Error(r(284));
            if (!o._owner) throw Error(r(290, n))
        }
        return n
    }

    function xa(n, s) {
        throw n = Object.prototype.toString.call(s), Error(r(31, n === "[object Object]" ? "object with keys {" + Object.keys(s).join(", ") + "}" : n))
    }

    function zp(n) {
        var s = n._init;
        return s(n._payload)
    }

    function $p(n) {
        function s(N, _) {
            if (n) {
                var O = N.deletions;
                O === null ? (N.deletions = [_], N.flags |= 16) : O.push(_)
            }
        }

        function o(N, _) {
            if (!n) return null;
            for (; _ !== null;) s(N, _), _ = _.sibling;
            return null
        }

        function u(N, _) {
            for (N = new Map; _ !== null;) _.key !== null ? N.set(_.key, _) : N.set(_.index, _), _ = _.sibling;
            return N
        }

        function f(N, _) {
            return N = cr(N, _), N.index = 0, N.sibling = null, N
        }

        function p(N, _, O) {
            return N.index = O, n ? (O = N.alternate, O !== null ? (O = O.index, O < _ ? (N.flags |= 2, _) : O) : (N.flags |= 2, _)) : (N.flags |= 1048576, _)
        }

        function v(N) {
            return n && N.alternate === null && (N.flags |= 2), N
        }

        function E(N, _, O, Q) {
            return _ === null || _.tag !== 6 ? (_ = Uc(O, N.mode, Q), _.return = N, _) : (_ = f(_, O), _.return = N, _)
        }

        function C(N, _, O, Q) {
            var ie = O.type;
            return ie === G ? H(N, _, O.props.children, Q, O.key) : _ !== null && (_.elementType === ie || typeof ie == "object" && ie !== null && ie.$$typeof === xe && zp(ie) === _.type) ? (Q = f(_, O.props), Q.ref = Vi(N, _, O), Q.return = N, Q) : (Q = Ha(O.type, O.key, O.props, null, N.mode, Q), Q.ref = Vi(N, _, O), Q.return = N, Q)
        }

        function I(N, _, O, Q) {
            return _ === null || _.tag !== 4 || _.stateNode.containerInfo !== O.containerInfo || _.stateNode.implementation !== O.implementation ? (_ = zc(O, N.mode, Q), _.return = N, _) : (_ = f(_, O.children || []), _.return = N, _)
        }

        function H(N, _, O, Q, ie) {
            return _ === null || _.tag !== 7 ? (_ = qr(O, N.mode, Q, ie), _.return = N, _) : (_ = f(_, O), _.return = N, _)
        }

        function q(N, _, O) {
            if (typeof _ == "string" && _ !== "" || typeof _ == "number") return _ = Uc("" + _, N.mode, O), _.return = N, _;
            if (typeof _ == "object" && _ !== null) {
                switch (_.$$typeof) {
                    case B:
                        return O = Ha(_.type, _.key, _.props, null, N.mode, O), O.ref = Vi(N, null, _), O.return = N, O;
                    case K:
                        return _ = zc(_, N.mode, O), _.return = N, _;
                    case xe:
                        var Q = _._init;
                        return q(N, Q(_._payload), O)
                }
                if (pi(_) || se(_)) return _ = qr(_, N.mode, O, null), _.return = N, _;
                xa(N, _)
            }
            return null
        }

        function $(N, _, O, Q) {
            var ie = _ !== null ? _.key : null;
            if (typeof O == "string" && O !== "" || typeof O == "number") return ie !== null ? null : E(N, _, "" + O, Q);
            if (typeof O == "object" && O !== null) {
                switch (O.$$typeof) {
                    case B:
                        return O.key === ie ? C(N, _, O, Q) : null;
                    case K:
                        return O.key === ie ? I(N, _, O, Q) : null;
                    case xe:
                        return ie = O._init, $(N, _, ie(O._payload), Q)
                }
                if (pi(O) || se(O)) return ie !== null ? null : H(N, _, O, Q, null);
                xa(N, O)
            }
            return null
        }

        function Y(N, _, O, Q, ie) {
            if (typeof Q == "string" && Q !== "" || typeof Q == "number") return N = N.get(O) || null, E(_, N, "" + Q, ie);
            if (typeof Q == "object" && Q !== null) {
                switch (Q.$$typeof) {
                    case B:
                        return N = N.get(Q.key === null ? O : Q.key) || null, C(_, N, Q, ie);
                    case K:
                        return N = N.get(Q.key === null ? O : Q.key) || null, I(_, N, Q, ie);
                    case xe:
                        var oe = Q._init;
                        return Y(N, _, O, oe(Q._payload), ie)
                }
                if (pi(Q) || se(Q)) return N = N.get(O) || null, H(_, N, Q, ie, null);
                xa(_, Q)
            }
            return null
        }

        function ee(N, _, O, Q) {
            for (var ie = null, oe = null, ae = _, ge = _ = 0, ot = null; ae !== null && ge < O.length; ge++) {
                ae.index > ge ? (ot = ae, ae = null) : ot = ae.sibling;
                var Re = $(N, ae, O[ge], Q);
                if (Re === null) {
                    ae === null && (ae = ot);
                    break
                }
                n && ae && Re.alternate === null && s(N, ae), _ = p(Re, _, ge), oe === null ? ie = Re : oe.sibling = Re, oe = Re, ae = ot
            }
            if (ge === O.length) return o(N, ae), ze && Ir(N, ge), ie;
            if (ae === null) {
                for (; ge < O.length; ge++) ae = q(N, O[ge], Q), ae !== null && (_ = p(ae, _, ge), oe === null ? ie = ae : oe.sibling = ae, oe = ae);
                return ze && Ir(N, ge), ie
            }
            for (ae = u(N, ae); ge < O.length; ge++) ot = Y(ae, N, ge, O[ge], Q), ot !== null && (n && ot.alternate !== null && ae.delete(ot.key === null ? ge : ot.key), _ = p(ot, _, ge), oe === null ? ie = ot : oe.sibling = ot, oe = ot);
            return n && ae.forEach(function(dr) {
                return s(N, dr)
            }), ze && Ir(N, ge), ie
        }

        function re(N, _, O, Q) {
            var ie = se(O);
            if (typeof ie != "function") throw Error(r(150));
            if (O = ie.call(O), O == null) throw Error(r(151));
            for (var oe = ie = null, ae = _, ge = _ = 0, ot = null, Re = O.next(); ae !== null && !Re.done; ge++, Re = O.next()) {
                ae.index > ge ? (ot = ae, ae = null) : ot = ae.sibling;
                var dr = $(N, ae, Re.value, Q);
                if (dr === null) {
                    ae === null && (ae = ot);
                    break
                }
                n && ae && dr.alternate === null && s(N, ae), _ = p(dr, _, ge), oe === null ? ie = dr : oe.sibling = dr, oe = dr, ae = ot
            }
            if (Re.done) return o(N, ae), ze && Ir(N, ge), ie;
            if (ae === null) {
                for (; !Re.done; ge++, Re = O.next()) Re = q(N, Re.value, Q), Re !== null && (_ = p(Re, _, ge), oe === null ? ie = Re : oe.sibling = Re, oe = Re);
                return ze && Ir(N, ge), ie
            }
            for (ae = u(N, ae); !Re.done; ge++, Re = O.next()) Re = Y(ae, N, ge, Re.value, Q), Re !== null && (n && Re.alternate !== null && ae.delete(Re.key === null ? ge : Re.key), _ = p(Re, _, ge), oe === null ? ie = Re : oe.sibling = Re, oe = Re);
            return n && ae.forEach(function(mb) {
                return s(N, mb)
            }), ze && Ir(N, ge), ie
        }

        function Ye(N, _, O, Q) {
            if (typeof O == "object" && O !== null && O.type === G && O.key === null && (O = O.props.children), typeof O == "object" && O !== null) {
                switch (O.$$typeof) {
                    case B:
                        e: {
                            for (var ie = O.key, oe = _; oe !== null;) {
                                if (oe.key === ie) {
                                    if (ie = O.type, ie === G) {
                                        if (oe.tag === 7) {
                                            o(N, oe.sibling), _ = f(oe, O.props.children), _.return = N, N = _;
                                            break e
                                        }
                                    } else if (oe.elementType === ie || typeof ie == "object" && ie !== null && ie.$$typeof === xe && zp(ie) === oe.type) {
                                        o(N, oe.sibling), _ = f(oe, O.props), _.ref = Vi(N, oe, O), _.return = N, N = _;
                                        break e
                                    }
                                    o(N, oe);
                                    break
                                } else s(N, oe);
                                oe = oe.sibling
                            }
                            O.type === G ? (_ = qr(O.props.children, N.mode, Q, O.key), _.return = N, N = _) : (Q = Ha(O.type, O.key, O.props, null, N.mode, Q), Q.ref = Vi(N, _, O), Q.return = N, N = Q)
                        }
                        return v(N);
                    case K:
                        e: {
                            for (oe = O.key; _ !== null;) {
                                if (_.key === oe)
                                    if (_.tag === 4 && _.stateNode.containerInfo === O.containerInfo && _.stateNode.implementation === O.implementation) {
                                        o(N, _.sibling), _ = f(_, O.children || []), _.return = N, N = _;
                                        break e
                                    } else {
                                        o(N, _);
                                        break
                                    }
                                else s(N, _);
                                _ = _.sibling
                            }
                            _ = zc(O, N.mode, Q),
                            _.return = N,
                            N = _
                        }
                        return v(N);
                    case xe:
                        return oe = O._init, Ye(N, _, oe(O._payload), Q)
                }
                if (pi(O)) return ee(N, _, O, Q);
                if (se(O)) return re(N, _, O, Q);
                xa(N, O)
            }
            return typeof O == "string" && O !== "" || typeof O == "number" ? (O = "" + O, _ !== null && _.tag === 6 ? (o(N, _.sibling), _ = f(_, O), _.return = N, N = _) : (o(N, _), _ = Uc(O, N.mode, Q), _.return = N, N = _), v(N)) : o(N, _)
        }
        return Ye
    }
    var Os = $p(!0),
        Hp = $p(!1),
        Sa = er(null),
        ba = null,
        Ls = null,
        Xu = null;

    function Ju() {
        Xu = Ls = ba = null
    }

    function Zu(n) {
        var s = Sa.current;
        Ue(Sa), n._currentValue = s
    }

    function ec(n, s, o) {
        for (; n !== null;) {
            var u = n.alternate;
            if ((n.childLanes & s) !== s ? (n.childLanes |= s, u !== null && (u.childLanes |= s)) : u !== null && (u.childLanes & s) !== s && (u.childLanes |= s), n === o) break;
            n = n.return
        }
    }

    function Ms(n, s) {
        ba = n, Xu = Ls = null, n = n.dependencies, n !== null && n.firstContext !== null && ((n.lanes & s) !== 0 && (Rt = !0), n.firstContext = null)
    }

    function qt(n) {
        var s = n._currentValue;
        if (Xu !== n)
            if (n = {
                    context: n,
                    memoizedValue: s,
                    next: null
                }, Ls === null) {
                if (ba === null) throw Error(r(308));
                Ls = n, ba.dependencies = {
                    lanes: 0,
                    firstContext: n
                }
            } else Ls = Ls.next = n;
        return s
    }
    var Fr = null;

    function tc(n) {
        Fr === null ? Fr = [n] : Fr.push(n)
    }

    function qp(n, s, o, u) {
        var f = s.interleaved;
        return f === null ? (o.next = o, tc(s)) : (o.next = f.next, f.next = o), s.interleaved = o, Mn(n, u)
    }

    function Mn(n, s) {
        n.lanes |= s;
        var o = n.alternate;
        for (o !== null && (o.lanes |= s), o = n, n = n.return; n !== null;) n.childLanes |= s, o = n.alternate, o !== null && (o.childLanes |= s), o = n, n = n.return;
        return o.tag === 3 ? o.stateNode : null
    }
    var rr = !1;

    function nc(n) {
        n.updateQueue = {
            baseState: n.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                interleaved: null,
                lanes: 0
            },
            effects: null
        }
    }

    function Wp(n, s) {
        n = n.updateQueue, s.updateQueue === n && (s.updateQueue = {
            baseState: n.baseState,
            firstBaseUpdate: n.firstBaseUpdate,
            lastBaseUpdate: n.lastBaseUpdate,
            shared: n.shared,
            effects: n.effects
        })
    }

    function Dn(n, s) {
        return {
            eventTime: n,
            lane: s,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }

    function sr(n, s, o) {
        var u = n.updateQueue;
        if (u === null) return null;
        if (u = u.shared, (Ce & 2) !== 0) {
            var f = u.pending;
            return f === null ? s.next = s : (s.next = f.next, f.next = s), u.pending = s, Mn(n, o)
        }
        return f = u.interleaved, f === null ? (s.next = s, tc(u)) : (s.next = f.next, f.next = s), u.interleaved = s, Mn(n, o)
    }

    function ka(n, s, o) {
        if (s = s.updateQueue, s !== null && (s = s.shared, (o & 4194240) !== 0)) {
            var u = s.lanes;
            u &= n.pendingLanes, o |= u, s.lanes = o, gu(n, o)
        }
    }

    function Kp(n, s) {
        var o = n.updateQueue,
            u = n.alternate;
        if (u !== null && (u = u.updateQueue, o === u)) {
            var f = null,
                p = null;
            if (o = o.firstBaseUpdate, o !== null) {
                do {
                    var v = {
                        eventTime: o.eventTime,
                        lane: o.lane,
                        tag: o.tag,
                        payload: o.payload,
                        callback: o.callback,
                        next: null
                    };
                    p === null ? f = p = v : p = p.next = v, o = o.next
                } while (o !== null);
                p === null ? f = p = s : p = p.next = s
            } else f = p = s;
            o = {
                baseState: u.baseState,
                firstBaseUpdate: f,
                lastBaseUpdate: p,
                shared: u.shared,
                effects: u.effects
            }, n.updateQueue = o;
            return
        }
        n = o.lastBaseUpdate, n === null ? o.firstBaseUpdate = s : n.next = s, o.lastBaseUpdate = s
    }

    function Ea(n, s, o, u) {
        var f = n.updateQueue;
        rr = !1;
        var p = f.firstBaseUpdate,
            v = f.lastBaseUpdate,
            E = f.shared.pending;
        if (E !== null) {
            f.shared.pending = null;
            var C = E,
                I = C.next;
            C.next = null, v === null ? p = I : v.next = I, v = C;
            var H = n.alternate;
            H !== null && (H = H.updateQueue, E = H.lastBaseUpdate, E !== v && (E === null ? H.firstBaseUpdate = I : E.next = I, H.lastBaseUpdate = C))
        }
        if (p !== null) {
            var q = f.baseState;
            v = 0, H = I = C = null, E = p;
            do {
                var $ = E.lane,
                    Y = E.eventTime;
                if ((u & $) === $) {
                    H !== null && (H = H.next = {
                        eventTime: Y,
                        lane: 0,
                        tag: E.tag,
                        payload: E.payload,
                        callback: E.callback,
                        next: null
                    });
                    e: {
                        var ee = n,
                            re = E;
                        switch ($ = s, Y = o, re.tag) {
                            case 1:
                                if (ee = re.payload, typeof ee == "function") {
                                    q = ee.call(Y, q, $);
                                    break e
                                }
                                q = ee;
                                break e;
                            case 3:
                                ee.flags = ee.flags & -65537 | 128;
                            case 0:
                                if (ee = re.payload, $ = typeof ee == "function" ? ee.call(Y, q, $) : ee, $ == null) break e;
                                q = U({}, q, $);
                                break e;
                            case 2:
                                rr = !0
                        }
                    }
                    E.callback !== null && E.lane !== 0 && (n.flags |= 64, $ = f.effects, $ === null ? f.effects = [E] : $.push(E))
                } else Y = {
                    eventTime: Y,
                    lane: $,
                    tag: E.tag,
                    payload: E.payload,
                    callback: E.callback,
                    next: null
                }, H === null ? (I = H = Y, C = q) : H = H.next = Y, v |= $;
                if (E = E.next, E === null) {
                    if (E = f.shared.pending, E === null) break;
                    $ = E, E = $.next, $.next = null, f.lastBaseUpdate = $, f.shared.pending = null
                }
            } while (!0);
            if (H === null && (C = q), f.baseState = C, f.firstBaseUpdate = I, f.lastBaseUpdate = H, s = f.shared.interleaved, s !== null) {
                f = s;
                do v |= f.lane, f = f.next; while (f !== s)
            } else p === null && (f.shared.lanes = 0);
            Ur |= v, n.lanes = v, n.memoizedState = q
        }
    }

    function Qp(n, s, o) {
        if (n = s.effects, s.effects = null, n !== null)
            for (s = 0; s < n.length; s++) {
                var u = n[s],
                    f = u.callback;
                if (f !== null) {
                    if (u.callback = null, u = o, typeof f != "function") throw Error(r(191, f));
                    f.call(u)
                }
            }
    }
    var Bi = {},
        yn = er(Bi),
        Ui = er(Bi),
        zi = er(Bi);

    function Vr(n) {
        if (n === Bi) throw Error(r(174));
        return n
    }

    function rc(n, s) {
        switch (Ve(zi, s), Ve(Ui, n), Ve(yn, Bi), n = s.nodeType, n) {
            case 9:
            case 11:
                s = (s = s.documentElement) ? s.namespaceURI : su(null, "");
                break;
            default:
                n = n === 8 ? s.parentNode : s, s = n.namespaceURI || null, n = n.tagName, s = su(s, n)
        }
        Ue(yn), Ve(yn, s)
    }

    function Ds() {
        Ue(yn), Ue(Ui), Ue(zi)
    }

    function Gp(n) {
        Vr(zi.current);
        var s = Vr(yn.current),
            o = su(s, n.type);
        s !== o && (Ve(Ui, n), Ve(yn, o))
    }

    function sc(n) {
        Ui.current === n && (Ue(yn), Ue(Ui))
    }
    var $e = er(0);

    function Ta(n) {
        for (var s = n; s !== null;) {
            if (s.tag === 13) {
                var o = s.memoizedState;
                if (o !== null && (o = o.dehydrated, o === null || o.data === "$?" || o.data === "$!")) return s
            } else if (s.tag === 19 && s.memoizedProps.revealOrder !== void 0) {
                if ((s.flags & 128) !== 0) return s
            } else if (s.child !== null) {
                s.child.return = s, s = s.child;
                continue
            }
            if (s === n) break;
            for (; s.sibling === null;) {
                if (s.return === null || s.return === n) return null;
                s = s.return
            }
            s.sibling.return = s.return, s = s.sibling
        }
        return null
    }
    var ic = [];

    function oc() {
        for (var n = 0; n < ic.length; n++) ic[n]._workInProgressVersionPrimary = null;
        ic.length = 0
    }
    var Ca = L.ReactCurrentDispatcher,
        ac = L.ReactCurrentBatchConfig,
        Br = 0,
        He = null,
        tt = null,
        st = null,
        Pa = !1,
        $i = !1,
        Hi = 0,
        IS = 0;

    function mt() {
        throw Error(r(321))
    }

    function lc(n, s) {
        if (s === null) return !1;
        for (var o = 0; o < s.length && o < n.length; o++)
            if (!nn(n[o], s[o])) return !1;
        return !0
    }

    function uc(n, s, o, u, f, p) {
        if (Br = p, He = s, s.memoizedState = null, s.updateQueue = null, s.lanes = 0, Ca.current = n === null || n.memoizedState === null ? US : zS, n = o(u, f), $i) {
            p = 0;
            do {
                if ($i = !1, Hi = 0, 25 <= p) throw Error(r(301));
                p += 1, st = tt = null, s.updateQueue = null, Ca.current = $S, n = o(u, f)
            } while ($i)
        }
        if (Ca.current = Aa, s = tt !== null && tt.next !== null, Br = 0, st = tt = He = null, Pa = !1, s) throw Error(r(300));
        return n
    }

    function cc() {
        var n = Hi !== 0;
        return Hi = 0, n
    }

    function vn() {
        var n = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return st === null ? He.memoizedState = st = n : st = st.next = n, st
    }

    function Wt() {
        if (tt === null) {
            var n = He.alternate;
            n = n !== null ? n.memoizedState : null
        } else n = tt.next;
        var s = st === null ? He.memoizedState : st.next;
        if (s !== null) st = s, tt = n;
        else {
            if (n === null) throw Error(r(310));
            tt = n, n = {
                memoizedState: tt.memoizedState,
                baseState: tt.baseState,
                baseQueue: tt.baseQueue,
                queue: tt.queue,
                next: null
            }, st === null ? He.memoizedState = st = n : st = st.next = n
        }
        return st
    }

    function qi(n, s) {
        return typeof s == "function" ? s(n) : s
    }

    function dc(n) {
        var s = Wt(),
            o = s.queue;
        if (o === null) throw Error(r(311));
        o.lastRenderedReducer = n;
        var u = tt,
            f = u.baseQueue,
            p = o.pending;
        if (p !== null) {
            if (f !== null) {
                var v = f.next;
                f.next = p.next, p.next = v
            }
            u.baseQueue = f = p, o.pending = null
        }
        if (f !== null) {
            p = f.next, u = u.baseState;
            var E = v = null,
                C = null,
                I = p;
            do {
                var H = I.lane;
                if ((Br & H) === H) C !== null && (C = C.next = {
                    lane: 0,
                    action: I.action,
                    hasEagerState: I.hasEagerState,
                    eagerState: I.eagerState,
                    next: null
                }), u = I.hasEagerState ? I.eagerState : n(u, I.action);
                else {
                    var q = {
                        lane: H,
                        action: I.action,
                        hasEagerState: I.hasEagerState,
                        eagerState: I.eagerState,
                        next: null
                    };
                    C === null ? (E = C = q, v = u) : C = C.next = q, He.lanes |= H, Ur |= H
                }
                I = I.next
            } while (I !== null && I !== p);
            C === null ? v = u : C.next = E, nn(u, s.memoizedState) || (Rt = !0), s.memoizedState = u, s.baseState = v, s.baseQueue = C, o.lastRenderedState = u
        }
        if (n = o.interleaved, n !== null) {
            f = n;
            do p = f.lane, He.lanes |= p, Ur |= p, f = f.next; while (f !== n)
        } else f === null && (o.lanes = 0);
        return [s.memoizedState, o.dispatch]
    }

    function fc(n) {
        var s = Wt(),
            o = s.queue;
        if (o === null) throw Error(r(311));
        o.lastRenderedReducer = n;
        var u = o.dispatch,
            f = o.pending,
            p = s.memoizedState;
        if (f !== null) {
            o.pending = null;
            var v = f = f.next;
            do p = n(p, v.action), v = v.next; while (v !== f);
            nn(p, s.memoizedState) || (Rt = !0), s.memoizedState = p, s.baseQueue === null && (s.baseState = p), o.lastRenderedState = p
        }
        return [p, u]
    }

    function Yp() {}

    function Xp(n, s) {
        var o = He,
            u = Wt(),
            f = s(),
            p = !nn(u.memoizedState, f);
        if (p && (u.memoizedState = f, Rt = !0), u = u.queue, hc(em.bind(null, o, u, n), [n]), u.getSnapshot !== s || p || st !== null && st.memoizedState.tag & 1) {
            if (o.flags |= 2048, Wi(9, Zp.bind(null, o, u, f, s), void 0, null), it === null) throw Error(r(349));
            (Br & 30) !== 0 || Jp(o, s, f)
        }
        return f
    }

    function Jp(n, s, o) {
        n.flags |= 16384, n = {
            getSnapshot: s,
            value: o
        }, s = He.updateQueue, s === null ? (s = {
            lastEffect: null,
            stores: null
        }, He.updateQueue = s, s.stores = [n]) : (o = s.stores, o === null ? s.stores = [n] : o.push(n))
    }

    function Zp(n, s, o, u) {
        s.value = o, s.getSnapshot = u, tm(s) && nm(n)
    }

    function em(n, s, o) {
        return o(function() {
            tm(s) && nm(n)
        })
    }

    function tm(n) {
        var s = n.getSnapshot;
        n = n.value;
        try {
            var o = s();
            return !nn(n, o)
        } catch {
            return !0
        }
    }

    function nm(n) {
        var s = Mn(n, 1);
        s !== null && ln(s, n, 1, -1)
    }

    function rm(n) {
        var s = vn();
        return typeof n == "function" && (n = n()), s.memoizedState = s.baseState = n, n = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: qi,
            lastRenderedState: n
        }, s.queue = n, n = n.dispatch = BS.bind(null, He, n), [s.memoizedState, n]
    }

    function Wi(n, s, o, u) {
        return n = {
            tag: n,
            create: s,
            destroy: o,
            deps: u,
            next: null
        }, s = He.updateQueue, s === null ? (s = {
            lastEffect: null,
            stores: null
        }, He.updateQueue = s, s.lastEffect = n.next = n) : (o = s.lastEffect, o === null ? s.lastEffect = n.next = n : (u = o.next, o.next = n, n.next = u, s.lastEffect = n)), n
    }

    function sm() {
        return Wt().memoizedState
    }

    function _a(n, s, o, u) {
        var f = vn();
        He.flags |= n, f.memoizedState = Wi(1 | s, o, void 0, u === void 0 ? null : u)
    }

    function Ra(n, s, o, u) {
        var f = Wt();
        u = u === void 0 ? null : u;
        var p = void 0;
        if (tt !== null) {
            var v = tt.memoizedState;
            if (p = v.destroy, u !== null && lc(u, v.deps)) {
                f.memoizedState = Wi(s, o, p, u);
                return
            }
        }
        He.flags |= n, f.memoizedState = Wi(1 | s, o, p, u)
    }

    function im(n, s) {
        return _a(8390656, 8, n, s)
    }

    function hc(n, s) {
        return Ra(2048, 8, n, s)
    }

    function om(n, s) {
        return Ra(4, 2, n, s)
    }

    function am(n, s) {
        return Ra(4, 4, n, s)
    }

    function lm(n, s) {
        if (typeof s == "function") return n = n(), s(n),
            function() {
                s(null)
            };
        if (s != null) return n = n(), s.current = n,
            function() {
                s.current = null
            }
    }

    function um(n, s, o) {
        return o = o != null ? o.concat([n]) : null, Ra(4, 4, lm.bind(null, s, n), o)
    }

    function pc() {}

    function cm(n, s) {
        var o = Wt();
        s = s === void 0 ? null : s;
        var u = o.memoizedState;
        return u !== null && s !== null && lc(s, u[1]) ? u[0] : (o.memoizedState = [n, s], n)
    }

    function dm(n, s) {
        var o = Wt();
        s = s === void 0 ? null : s;
        var u = o.memoizedState;
        return u !== null && s !== null && lc(s, u[1]) ? u[0] : (n = n(), o.memoizedState = [n, s], n)
    }

    function fm(n, s, o) {
        return (Br & 21) === 0 ? (n.baseState && (n.baseState = !1, Rt = !0), n.memoizedState = o) : (nn(o, s) || (o = zh(), He.lanes |= o, Ur |= o, n.baseState = !0), s)
    }

    function FS(n, s) {
        var o = De;
        De = o !== 0 && 4 > o ? o : 4, n(!0);
        var u = ac.transition;
        ac.transition = {};
        try {
            n(!1), s()
        } finally {
            De = o, ac.transition = u
        }
    }

    function hm() {
        return Wt().memoizedState
    }

    function VS(n, s, o) {
        var u = lr(n);
        if (o = {
                lane: u,
                action: o,
                hasEagerState: !1,
                eagerState: null,
                next: null
            }, pm(n)) mm(s, o);
        else if (o = qp(n, s, o, u), o !== null) {
            var f = Et();
            ln(o, n, u, f), gm(o, s, u)
        }
    }

    function BS(n, s, o) {
        var u = lr(n),
            f = {
                lane: u,
                action: o,
                hasEagerState: !1,
                eagerState: null,
                next: null
            };
        if (pm(n)) mm(s, f);
        else {
            var p = n.alternate;
            if (n.lanes === 0 && (p === null || p.lanes === 0) && (p = s.lastRenderedReducer, p !== null)) try {
                var v = s.lastRenderedState,
                    E = p(v, o);
                if (f.hasEagerState = !0, f.eagerState = E, nn(E, v)) {
                    var C = s.interleaved;
                    C === null ? (f.next = f, tc(s)) : (f.next = C.next, C.next = f), s.interleaved = f;
                    return
                }
            } catch {} finally {}
            o = qp(n, s, f, u), o !== null && (f = Et(), ln(o, n, u, f), gm(o, s, u))
        }
    }

    function pm(n) {
        var s = n.alternate;
        return n === He || s !== null && s === He
    }

    function mm(n, s) {
        $i = Pa = !0;
        var o = n.pending;
        o === null ? s.next = s : (s.next = o.next, o.next = s), n.pending = s
    }

    function gm(n, s, o) {
        if ((o & 4194240) !== 0) {
            var u = s.lanes;
            u &= n.pendingLanes, o |= u, s.lanes = o, gu(n, o)
        }
    }
    var Aa = {
            readContext: qt,
            useCallback: mt,
            useContext: mt,
            useEffect: mt,
            useImperativeHandle: mt,
            useInsertionEffect: mt,
            useLayoutEffect: mt,
            useMemo: mt,
            useReducer: mt,
            useRef: mt,
            useState: mt,
            useDebugValue: mt,
            useDeferredValue: mt,
            useTransition: mt,
            useMutableSource: mt,
            useSyncExternalStore: mt,
            useId: mt,
            unstable_isNewReconciler: !1
        },
        US = {
            readContext: qt,
            useCallback: function(n, s) {
                return vn().memoizedState = [n, s === void 0 ? null : s], n
            },
            useContext: qt,
            useEffect: im,
            useImperativeHandle: function(n, s, o) {
                return o = o != null ? o.concat([n]) : null, _a(4194308, 4, lm.bind(null, s, n), o)
            },
            useLayoutEffect: function(n, s) {
                return _a(4194308, 4, n, s)
            },
            useInsertionEffect: function(n, s) {
                return _a(4, 2, n, s)
            },
            useMemo: function(n, s) {
                var o = vn();
                return s = s === void 0 ? null : s, n = n(), o.memoizedState = [n, s], n
            },
            useReducer: function(n, s, o) {
                var u = vn();
                return s = o !== void 0 ? o(s) : s, u.memoizedState = u.baseState = s, n = {
                    pending: null,
                    interleaved: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: n,
                    lastRenderedState: s
                }, u.queue = n, n = n.dispatch = VS.bind(null, He, n), [u.memoizedState, n]
            },
            useRef: function(n) {
                var s = vn();
                return n = {
                    current: n
                }, s.memoizedState = n
            },
            useState: rm,
            useDebugValue: pc,
            useDeferredValue: function(n) {
                return vn().memoizedState = n
            },
            useTransition: function() {
                var n = rm(!1),
                    s = n[0];
                return n = FS.bind(null, n[1]), vn().memoizedState = n, [s, n]
            },
            useMutableSource: function() {},
            useSyncExternalStore: function(n, s, o) {
                var u = He,
                    f = vn();
                if (ze) {
                    if (o === void 0) throw Error(r(407));
                    o = o()
                } else {
                    if (o = s(), it === null) throw Error(r(349));
                    (Br & 30) !== 0 || Jp(u, s, o)
                }
                f.memoizedState = o;
                var p = {
                    value: o,
                    getSnapshot: s
                };
                return f.queue = p, im(em.bind(null, u, p, n), [n]), u.flags |= 2048, Wi(9, Zp.bind(null, u, p, o, s), void 0, null), o
            },
            useId: function() {
                var n = vn(),
                    s = it.identifierPrefix;
                if (ze) {
                    var o = Ln,
                        u = On;
                    o = (u & ~(1 << 32 - tn(u) - 1)).toString(32) + o, s = ":" + s + "R" + o, o = Hi++, 0 < o && (s += "H" + o.toString(32)), s += ":"
                } else o = IS++, s = ":" + s + "r" + o.toString(32) + ":";
                return n.memoizedState = s
            },
            unstable_isNewReconciler: !1
        },
        zS = {
            readContext: qt,
            useCallback: cm,
            useContext: qt,
            useEffect: hc,
            useImperativeHandle: um,
            useInsertionEffect: om,
            useLayoutEffect: am,
            useMemo: dm,
            useReducer: dc,
            useRef: sm,
            useState: function() {
                return dc(qi)
            },
            useDebugValue: pc,
            useDeferredValue: function(n) {
                var s = Wt();
                return fm(s, tt.memoizedState, n)
            },
            useTransition: function() {
                var n = dc(qi)[0],
                    s = Wt().memoizedState;
                return [n, s]
            },
            useMutableSource: Yp,
            useSyncExternalStore: Xp,
            useId: hm,
            unstable_isNewReconciler: !1
        },
        $S = {
            readContext: qt,
            useCallback: cm,
            useContext: qt,
            useEffect: hc,
            useImperativeHandle: um,
            useInsertionEffect: om,
            useLayoutEffect: am,
            useMemo: dm,
            useReducer: fc,
            useRef: sm,
            useState: function() {
                return fc(qi)
            },
            useDebugValue: pc,
            useDeferredValue: function(n) {
                var s = Wt();
                return tt === null ? s.memoizedState = n : fm(s, tt.memoizedState, n)
            },
            useTransition: function() {
                var n = fc(qi)[0],
                    s = Wt().memoizedState;
                return [n, s]
            },
            useMutableSource: Yp,
            useSyncExternalStore: Xp,
            useId: hm,
            unstable_isNewReconciler: !1
        };

    function sn(n, s) {
        if (n && n.defaultProps) {
            s = U({}, s), n = n.defaultProps;
            for (var o in n) s[o] === void 0 && (s[o] = n[o]);
            return s
        }
        return s
    }

    function mc(n, s, o, u) {
        s = n.memoizedState, o = o(u, s), o = o == null ? s : U({}, s, o), n.memoizedState = o, n.lanes === 0 && (n.updateQueue.baseState = o)
    }
    var Na = {
        isMounted: function(n) {
            return (n = n._reactInternals) ? Lr(n) === n : !1
        },
        enqueueSetState: function(n, s, o) {
            n = n._reactInternals;
            var u = Et(),
                f = lr(n),
                p = Dn(u, f);
            p.payload = s, o != null && (p.callback = o), s = sr(n, p, f), s !== null && (ln(s, n, f, u), ka(s, n, f))
        },
        enqueueReplaceState: function(n, s, o) {
            n = n._reactInternals;
            var u = Et(),
                f = lr(n),
                p = Dn(u, f);
            p.tag = 1, p.payload = s, o != null && (p.callback = o), s = sr(n, p, f), s !== null && (ln(s, n, f, u), ka(s, n, f))
        },
        enqueueForceUpdate: function(n, s) {
            n = n._reactInternals;
            var o = Et(),
                u = lr(n),
                f = Dn(o, u);
            f.tag = 2, s != null && (f.callback = s), s = sr(n, f, u), s !== null && (ln(s, n, u, o), ka(s, n, u))
        }
    };

    function ym(n, s, o, u, f, p, v) {
        return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(u, p, v) : s.prototype && s.prototype.isPureReactComponent ? !Oi(o, u) || !Oi(f, p) : !0
    }

    function vm(n, s, o) {
        var u = !1,
            f = tr,
            p = s.contextType;
        return typeof p == "object" && p !== null ? p = qt(p) : (f = _t(s) ? Dr : pt.current, u = s.contextTypes, p = (u = u != null) ? _s(n, f) : tr), s = new s(o, p), n.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null, s.updater = Na, n.stateNode = s, s._reactInternals = n, u && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = f, n.__reactInternalMemoizedMaskedChildContext = p), s
    }

    function wm(n, s, o, u) {
        n = s.state, typeof s.componentWillReceiveProps == "function" && s.componentWillReceiveProps(o, u), typeof s.UNSAFE_componentWillReceiveProps == "function" && s.UNSAFE_componentWillReceiveProps(o, u), s.state !== n && Na.enqueueReplaceState(s, s.state, null)
    }

    function gc(n, s, o, u) {
        var f = n.stateNode;
        f.props = o, f.state = n.memoizedState, f.refs = {}, nc(n);
        var p = s.contextType;
        typeof p == "object" && p !== null ? f.context = qt(p) : (p = _t(s) ? Dr : pt.current, f.context = _s(n, p)), f.state = n.memoizedState, p = s.getDerivedStateFromProps, typeof p == "function" && (mc(n, s, p, o), f.state = n.memoizedState), typeof s.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (s = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), s !== f.state && Na.enqueueReplaceState(f, f.state, null), Ea(n, o, f, u), f.state = n.memoizedState), typeof f.componentDidMount == "function" && (n.flags |= 4194308)
    }

    function js(n, s) {
        try {
            var o = "",
                u = s;
            do o += le(u), u = u.return; while (u);
            var f = o
        } catch (p) {
            f = `
Error generating stack: ` + p.message + `
` + p.stack
        }
        return {
            value: n,
            source: s,
            stack: f,
            digest: null
        }
    }

    function yc(n, s, o) {
        return {
            value: n,
            source: null,
            stack: o ? ? null,
            digest: s ? ? null
        }
    }

    function vc(n, s) {
        try {
            console.error(s.value)
        } catch (o) {
            setTimeout(function() {
                throw o
            })
        }
    }
    var HS = typeof WeakMap == "function" ? WeakMap : Map;

    function xm(n, s, o) {
        o = Dn(-1, o), o.tag = 3, o.payload = {
            element: null
        };
        var u = s.value;
        return o.callback = function() {
            Fa || (Fa = !0, Lc = u), vc(n, s)
        }, o
    }

    function Sm(n, s, o) {
        o = Dn(-1, o), o.tag = 3;
        var u = n.type.getDerivedStateFromError;
        if (typeof u == "function") {
            var f = s.value;
            o.payload = function() {
                return u(f)
            }, o.callback = function() {
                vc(n, s)
            }
        }
        var p = n.stateNode;
        return p !== null && typeof p.componentDidCatch == "function" && (o.callback = function() {
            vc(n, s), typeof u != "function" && (or === null ? or = new Set([this]) : or.add(this));
            var v = s.stack;
            this.componentDidCatch(s.value, {
                componentStack: v !== null ? v : ""
            })
        }), o
    }

    function bm(n, s, o) {
        var u = n.pingCache;
        if (u === null) {
            u = n.pingCache = new HS;
            var f = new Set;
            u.set(s, f)
        } else f = u.get(s), f === void 0 && (f = new Set, u.set(s, f));
        f.has(o) || (f.add(o), n = sb.bind(null, n, s, o), s.then(n, n))
    }

    function km(n) {
        do {
            var s;
            if ((s = n.tag === 13) && (s = n.memoizedState, s = s !== null ? s.dehydrated !== null : !0), s) return n;
            n = n.return
        } while (n !== null);
        return null
    }

    function Em(n, s, o, u, f) {
        return (n.mode & 1) === 0 ? (n === s ? n.flags |= 65536 : (n.flags |= 128, o.flags |= 131072, o.flags &= -52805, o.tag === 1 && (o.alternate === null ? o.tag = 17 : (s = Dn(-1, 1), s.tag = 2, sr(o, s, 1))), o.lanes |= 1), n) : (n.flags |= 65536, n.lanes = f, n)
    }
    var qS = L.ReactCurrentOwner,
        Rt = !1;

    function kt(n, s, o, u) {
        s.child = n === null ? Hp(s, null, o, u) : Os(s, n.child, o, u)
    }

    function Tm(n, s, o, u, f) {
        o = o.render;
        var p = s.ref;
        return Ms(s, f), u = uc(n, s, o, u, p, f), o = cc(), n !== null && !Rt ? (s.updateQueue = n.updateQueue, s.flags &= -2053, n.lanes &= ~f, jn(n, s, f)) : (ze && o && Wu(s), s.flags |= 1, kt(n, s, u, f), s.child)
    }

    function Cm(n, s, o, u, f) {
        if (n === null) {
            var p = o.type;
            return typeof p == "function" && !Bc(p) && p.defaultProps === void 0 && o.compare === null && o.defaultProps === void 0 ? (s.tag = 15, s.type = p, Pm(n, s, p, u, f)) : (n = Ha(o.type, null, u, s, s.mode, f), n.ref = s.ref, n.return = s, s.child = n)
        }
        if (p = n.child, (n.lanes & f) === 0) {
            var v = p.memoizedProps;
            if (o = o.compare, o = o !== null ? o : Oi, o(v, u) && n.ref === s.ref) return jn(n, s, f)
        }
        return s.flags |= 1, n = cr(p, u), n.ref = s.ref, n.return = s, s.child = n
    }

    function Pm(n, s, o, u, f) {
        if (n !== null) {
            var p = n.memoizedProps;
            if (Oi(p, u) && n.ref === s.ref)
                if (Rt = !1, s.pendingProps = u = p, (n.lanes & f) !== 0)(n.flags & 131072) !== 0 && (Rt = !0);
                else return s.lanes = n.lanes, jn(n, s, f)
        }
        return wc(n, s, o, u, f)
    }

    function _m(n, s, o) {
        var u = s.pendingProps,
            f = u.children,
            p = n !== null ? n.memoizedState : null;
        if (u.mode === "hidden")
            if ((s.mode & 1) === 0) s.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, Ve(Fs, Ut), Ut |= o;
            else {
                if ((o & 1073741824) === 0) return n = p !== null ? p.baseLanes | o : o, s.lanes = s.childLanes = 1073741824, s.memoizedState = {
                    baseLanes: n,
                    cachePool: null,
                    transitions: null
                }, s.updateQueue = null, Ve(Fs, Ut), Ut |= n, null;
                s.memoizedState = {
                    baseLanes: 0,
                    cachePool: null,
                    transitions: null
                }, u = p !== null ? p.baseLanes : o, Ve(Fs, Ut), Ut |= u
            }
        else p !== null ? (u = p.baseLanes | o, s.memoizedState = null) : u = o, Ve(Fs, Ut), Ut |= u;
        return kt(n, s, f, o), s.child
    }

    function Rm(n, s) {
        var o = s.ref;
        (n === null && o !== null || n !== null && n.ref !== o) && (s.flags |= 512, s.flags |= 2097152)
    }

    function wc(n, s, o, u, f) {
        var p = _t(o) ? Dr : pt.current;
        return p = _s(s, p), Ms(s, f), o = uc(n, s, o, u, p, f), u = cc(), n !== null && !Rt ? (s.updateQueue = n.updateQueue, s.flags &= -2053, n.lanes &= ~f, jn(n, s, f)) : (ze && u && Wu(s), s.flags |= 1, kt(n, s, o, f), s.child)
    }

    function Am(n, s, o, u, f) {
        if (_t(o)) {
            var p = !0;
            ma(s)
        } else p = !1;
        if (Ms(s, f), s.stateNode === null) La(n, s), vm(s, o, u), gc(s, o, u, f), u = !0;
        else if (n === null) {
            var v = s.stateNode,
                E = s.memoizedProps;
            v.props = E;
            var C = v.context,
                I = o.contextType;
            typeof I == "object" && I !== null ? I = qt(I) : (I = _t(o) ? Dr : pt.current, I = _s(s, I));
            var H = o.getDerivedStateFromProps,
                q = typeof H == "function" || typeof v.getSnapshotBeforeUpdate == "function";
            q || typeof v.UNSAFE_componentWillReceiveProps != "function" && typeof v.componentWillReceiveProps != "function" || (E !== u || C !== I) && wm(s, v, u, I), rr = !1;
            var $ = s.memoizedState;
            v.state = $, Ea(s, u, v, f), C = s.memoizedState, E !== u || $ !== C || Pt.current || rr ? (typeof H == "function" && (mc(s, o, H, u), C = s.memoizedState), (E = rr || ym(s, o, E, u, $, C, I)) ? (q || typeof v.UNSAFE_componentWillMount != "function" && typeof v.componentWillMount != "function" || (typeof v.componentWillMount == "function" && v.componentWillMount(), typeof v.UNSAFE_componentWillMount == "function" && v.UNSAFE_componentWillMount()), typeof v.componentDidMount == "function" && (s.flags |= 4194308)) : (typeof v.componentDidMount == "function" && (s.flags |= 4194308), s.memoizedProps = u, s.memoizedState = C), v.props = u, v.state = C, v.context = I, u = E) : (typeof v.componentDidMount == "function" && (s.flags |= 4194308), u = !1)
        } else {
            v = s.stateNode, Wp(n, s), E = s.memoizedProps, I = s.type === s.elementType ? E : sn(s.type, E), v.props = I, q = s.pendingProps, $ = v.context, C = o.contextType, typeof C == "object" && C !== null ? C = qt(C) : (C = _t(o) ? Dr : pt.current, C = _s(s, C));
            var Y = o.getDerivedStateFromProps;
            (H = typeof Y == "function" || typeof v.getSnapshotBeforeUpdate == "function") || typeof v.UNSAFE_componentWillReceiveProps != "function" && typeof v.componentWillReceiveProps != "function" || (E !== q || $ !== C) && wm(s, v, u, C), rr = !1, $ = s.memoizedState, v.state = $, Ea(s, u, v, f);
            var ee = s.memoizedState;
            E !== q || $ !== ee || Pt.current || rr ? (typeof Y == "function" && (mc(s, o, Y, u), ee = s.memoizedState), (I = rr || ym(s, o, I, u, $, ee, C) || !1) ? (H || typeof v.UNSAFE_componentWillUpdate != "function" && typeof v.componentWillUpdate != "function" || (typeof v.componentWillUpdate == "function" && v.componentWillUpdate(u, ee, C), typeof v.UNSAFE_componentWillUpdate == "function" && v.UNSAFE_componentWillUpdate(u, ee, C)), typeof v.componentDidUpdate == "function" && (s.flags |= 4), typeof v.getSnapshotBeforeUpdate == "function" && (s.flags |= 1024)) : (typeof v.componentDidUpdate != "function" || E === n.memoizedProps && $ === n.memoizedState || (s.flags |= 4), typeof v.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && $ === n.memoizedState || (s.flags |= 1024), s.memoizedProps = u, s.memoizedState = ee), v.props = u, v.state = ee, v.context = C, u = I) : (typeof v.componentDidUpdate != "function" || E === n.memoizedProps && $ === n.memoizedState || (s.flags |= 4), typeof v.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && $ === n.memoizedState || (s.flags |= 1024), u = !1)
        }
        return xc(n, s, o, u, p, f)
    }

    function xc(n, s, o, u, f, p) {
        Rm(n, s);
        var v = (s.flags & 128) !== 0;
        if (!u && !v) return f && Dp(s, o, !1), jn(n, s, p);
        u = s.stateNode, qS.current = s;
        var E = v && typeof o.getDerivedStateFromError != "function" ? null : u.render();
        return s.flags |= 1, n !== null && v ? (s.child = Os(s, n.child, null, p), s.child = Os(s, null, E, p)) : kt(n, s, E, p), s.memoizedState = u.state, f && Dp(s, o, !0), s.child
    }

    function Nm(n) {
        var s = n.stateNode;
        s.pendingContext ? Lp(n, s.pendingContext, s.pendingContext !== s.context) : s.context && Lp(n, s.context, !1), rc(n, s.containerInfo)
    }

    function Om(n, s, o, u, f) {
        return Ns(), Yu(f), s.flags |= 256, kt(n, s, o, u), s.child
    }
    var Sc = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0
    };

    function bc(n) {
        return {
            baseLanes: n,
            cachePool: null,
            transitions: null
        }
    }

    function Lm(n, s, o) {
        var u = s.pendingProps,
            f = $e.current,
            p = !1,
            v = (s.flags & 128) !== 0,
            E;
        if ((E = v) || (E = n !== null && n.memoizedState === null ? !1 : (f & 2) !== 0), E ? (p = !0, s.flags &= -129) : (n === null || n.memoizedState !== null) && (f |= 1), Ve($e, f & 1), n === null) return Gu(s), n = s.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? ((s.mode & 1) === 0 ? s.lanes = 1 : n.data === "$!" ? s.lanes = 8 : s.lanes = 1073741824, null) : (v = u.children, n = u.fallback, p ? (u = s.mode, p = s.child, v = {
            mode: "hidden",
            children: v
        }, (u & 1) === 0 && p !== null ? (p.childLanes = 0, p.pendingProps = v) : p = qa(v, u, 0, null), n = qr(n, u, o, null), p.return = s, n.return = s, p.sibling = n, s.child = p, s.child.memoizedState = bc(o), s.memoizedState = Sc, n) : kc(s, v));
        if (f = n.memoizedState, f !== null && (E = f.dehydrated, E !== null)) return WS(n, s, v, u, E, f, o);
        if (p) {
            p = u.fallback, v = s.mode, f = n.child, E = f.sibling;
            var C = {
                mode: "hidden",
                children: u.children
            };
            return (v & 1) === 0 && s.child !== f ? (u = s.child, u.childLanes = 0, u.pendingProps = C, s.deletions = null) : (u = cr(f, C), u.subtreeFlags = f.subtreeFlags & 14680064), E !== null ? p = cr(E, p) : (p = qr(p, v, o, null), p.flags |= 2), p.return = s, u.return = s, u.sibling = p, s.child = u, u = p, p = s.child, v = n.child.memoizedState, v = v === null ? bc(o) : {
                baseLanes: v.baseLanes | o,
                cachePool: null,
                transitions: v.transitions
            }, p.memoizedState = v, p.childLanes = n.childLanes & ~o, s.memoizedState = Sc, u
        }
        return p = n.child, n = p.sibling, u = cr(p, {
            mode: "visible",
            children: u.children
        }), (s.mode & 1) === 0 && (u.lanes = o), u.return = s, u.sibling = null, n !== null && (o = s.deletions, o === null ? (s.deletions = [n], s.flags |= 16) : o.push(n)), s.child = u, s.memoizedState = null, u
    }

    function kc(n, s) {
        return s = qa({
            mode: "visible",
            children: s
        }, n.mode, 0, null), s.return = n, n.child = s
    }

    function Oa(n, s, o, u) {
        return u !== null && Yu(u), Os(s, n.child, null, o), n = kc(s, s.pendingProps.children), n.flags |= 2, s.memoizedState = null, n
    }

    function WS(n, s, o, u, f, p, v) {
        if (o) return s.flags & 256 ? (s.flags &= -257, u = yc(Error(r(422))), Oa(n, s, v, u)) : s.memoizedState !== null ? (s.child = n.child, s.flags |= 128, null) : (p = u.fallback, f = s.mode, u = qa({
            mode: "visible",
            children: u.children
        }, f, 0, null), p = qr(p, f, v, null), p.flags |= 2, u.return = s, p.return = s, u.sibling = p, s.child = u, (s.mode & 1) !== 0 && Os(s, n.child, null, v), s.child.memoizedState = bc(v), s.memoizedState = Sc, p);
        if ((s.mode & 1) === 0) return Oa(n, s, v, null);
        if (f.data === "$!") {
            if (u = f.nextSibling && f.nextSibling.dataset, u) var E = u.dgst;
            return u = E, p = Error(r(419)), u = yc(p, u, void 0), Oa(n, s, v, u)
        }
        if (E = (v & n.childLanes) !== 0, Rt || E) {
            if (u = it, u !== null) {
                switch (v & -v) {
                    case 4:
                        f = 2;
                        break;
                    case 16:
                        f = 8;
                        break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                        f = 32;
                        break;
                    case 536870912:
                        f = 268435456;
                        break;
                    default:
                        f = 0
                }
                f = (f & (u.suspendedLanes | v)) !== 0 ? 0 : f, f !== 0 && f !== p.retryLane && (p.retryLane = f, Mn(n, f), ln(u, n, f, -1))
            }
            return Vc(), u = yc(Error(r(421))), Oa(n, s, v, u)
        }
        return f.data === "$?" ? (s.flags |= 128, s.child = n.child, s = ib.bind(null, n), f._reactRetry = s, null) : (n = p.treeContext, Bt = Zn(f.nextSibling), Vt = s, ze = !0, rn = null, n !== null && ($t[Ht++] = On, $t[Ht++] = Ln, $t[Ht++] = jr, On = n.id, Ln = n.overflow, jr = s), s = kc(s, u.children), s.flags |= 4096, s)
    }

    function Mm(n, s, o) {
        n.lanes |= s;
        var u = n.alternate;
        u !== null && (u.lanes |= s), ec(n.return, s, o)
    }

    function Ec(n, s, o, u, f) {
        var p = n.memoizedState;
        p === null ? n.memoizedState = {
            isBackwards: s,
            rendering: null,
            renderingStartTime: 0,
            last: u,
            tail: o,
            tailMode: f
        } : (p.isBackwards = s, p.rendering = null, p.renderingStartTime = 0, p.last = u, p.tail = o, p.tailMode = f)
    }

    function Dm(n, s, o) {
        var u = s.pendingProps,
            f = u.revealOrder,
            p = u.tail;
        if (kt(n, s, u.children, o), u = $e.current, (u & 2) !== 0) u = u & 1 | 2, s.flags |= 128;
        else {
            if (n !== null && (n.flags & 128) !== 0) e: for (n = s.child; n !== null;) {
                if (n.tag === 13) n.memoizedState !== null && Mm(n, o, s);
                else if (n.tag === 19) Mm(n, o, s);
                else if (n.child !== null) {
                    n.child.return = n, n = n.child;
                    continue
                }
                if (n === s) break e;
                for (; n.sibling === null;) {
                    if (n.return === null || n.return === s) break e;
                    n = n.return
                }
                n.sibling.return = n.return, n = n.sibling
            }
            u &= 1
        }
        if (Ve($e, u), (s.mode & 1) === 0) s.memoizedState = null;
        else switch (f) {
            case "forwards":
                for (o = s.child, f = null; o !== null;) n = o.alternate, n !== null && Ta(n) === null && (f = o), o = o.sibling;
                o = f, o === null ? (f = s.child, s.child = null) : (f = o.sibling, o.sibling = null), Ec(s, !1, f, o, p);
                break;
            case "backwards":
                for (o = null, f = s.child, s.child = null; f !== null;) {
                    if (n = f.alternate, n !== null && Ta(n) === null) {
                        s.child = f;
                        break
                    }
                    n = f.sibling, f.sibling = o, o = f, f = n
                }
                Ec(s, !0, o, null, p);
                break;
            case "together":
                Ec(s, !1, null, null, void 0);
                break;
            default:
                s.memoizedState = null
        }
        return s.child
    }

    function La(n, s) {
        (s.mode & 1) === 0 && n !== null && (n.alternate = null, s.alternate = null, s.flags |= 2)
    }

    function jn(n, s, o) {
        if (n !== null && (s.dependencies = n.dependencies), Ur |= s.lanes, (o & s.childLanes) === 0) return null;
        if (n !== null && s.child !== n.child) throw Error(r(153));
        if (s.child !== null) {
            for (n = s.child, o = cr(n, n.pendingProps), s.child = o, o.return = s; n.sibling !== null;) n = n.sibling, o = o.sibling = cr(n, n.pendingProps), o.return = s;
            o.sibling = null
        }
        return s.child
    }

    function KS(n, s, o) {
        switch (s.tag) {
            case 3:
                Nm(s), Ns();
                break;
            case 5:
                Gp(s);
                break;
            case 1:
                _t(s.type) && ma(s);
                break;
            case 4:
                rc(s, s.stateNode.containerInfo);
                break;
            case 10:
                var u = s.type._context,
                    f = s.memoizedProps.value;
                Ve(Sa, u._currentValue), u._currentValue = f;
                break;
            case 13:
                if (u = s.memoizedState, u !== null) return u.dehydrated !== null ? (Ve($e, $e.current & 1), s.flags |= 128, null) : (o & s.child.childLanes) !== 0 ? Lm(n, s, o) : (Ve($e, $e.current & 1), n = jn(n, s, o), n !== null ? n.sibling : null);
                Ve($e, $e.current & 1);
                break;
            case 19:
                if (u = (o & s.childLanes) !== 0, (n.flags & 128) !== 0) {
                    if (u) return Dm(n, s, o);
                    s.flags |= 128
                }
                if (f = s.memoizedState, f !== null && (f.rendering = null, f.tail = null, f.lastEffect = null), Ve($e, $e.current), u) break;
                return null;
            case 22:
            case 23:
                return s.lanes = 0, _m(n, s, o)
        }
        return jn(n, s, o)
    }
    var jm, Tc, Im, Fm;
    jm = function(n, s) {
        for (var o = s.child; o !== null;) {
            if (o.tag === 5 || o.tag === 6) n.appendChild(o.stateNode);
            else if (o.tag !== 4 && o.child !== null) {
                o.child.return = o, o = o.child;
                continue
            }
            if (o === s) break;
            for (; o.sibling === null;) {
                if (o.return === null || o.return === s) return;
                o = o.return
            }
            o.sibling.return = o.return, o = o.sibling
        }
    }, Tc = function() {}, Im = function(n, s, o, u) {
        var f = n.memoizedProps;
        if (f !== u) {
            n = s.stateNode, Vr(yn.current);
            var p = null;
            switch (o) {
                case "input":
                    f = Wn(n, f), u = Wn(n, u), p = [];
                    break;
                case "select":
                    f = U({}, f, {
                        value: void 0
                    }), u = U({}, u, {
                        value: void 0
                    }), p = [];
                    break;
                case "textarea":
                    f = ru(n, f), u = ru(n, u), p = [];
                    break;
                default:
                    typeof f.onClick != "function" && typeof u.onClick == "function" && (n.onclick = fa)
            }
            iu(o, u);
            var v;
            o = null;
            for (I in f)
                if (!u.hasOwnProperty(I) && f.hasOwnProperty(I) && f[I] != null)
                    if (I === "style") {
                        var E = f[I];
                        for (v in E) E.hasOwnProperty(v) && (o || (o = {}), o[v] = "")
                    } else I !== "dangerouslySetInnerHTML" && I !== "children" && I !== "suppressContentEditableWarning" && I !== "suppressHydrationWarning" && I !== "autoFocus" && (a.hasOwnProperty(I) ? p || (p = []) : (p = p || []).push(I, null));
            for (I in u) {
                var C = u[I];
                if (E = f != null ? f[I] : void 0, u.hasOwnProperty(I) && C !== E && (C != null || E != null))
                    if (I === "style")
                        if (E) {
                            for (v in E) !E.hasOwnProperty(v) || C && C.hasOwnProperty(v) || (o || (o = {}), o[v] = "");
                            for (v in C) C.hasOwnProperty(v) && E[v] !== C[v] && (o || (o = {}), o[v] = C[v])
                        } else o || (p || (p = []), p.push(I, o)), o = C;
                else I === "dangerouslySetInnerHTML" ? (C = C ? C.__html : void 0, E = E ? E.__html : void 0, C != null && E !== C && (p = p || []).push(I, C)) : I === "children" ? typeof C != "string" && typeof C != "number" || (p = p || []).push(I, "" + C) : I !== "suppressContentEditableWarning" && I !== "suppressHydrationWarning" && (a.hasOwnProperty(I) ? (C != null && I === "onScroll" && Be("scroll", n), p || E === C || (p = [])) : (p = p || []).push(I, C))
            }
            o && (p = p || []).push("style", o);
            var I = p;
            (s.updateQueue = I) && (s.flags |= 4)
        }
    }, Fm = function(n, s, o, u) {
        o !== u && (s.flags |= 4)
    };

    function Ki(n, s) {
        if (!ze) switch (n.tailMode) {
            case "hidden":
                s = n.tail;
                for (var o = null; s !== null;) s.alternate !== null && (o = s), s = s.sibling;
                o === null ? n.tail = null : o.sibling = null;
                break;
            case "collapsed":
                o = n.tail;
                for (var u = null; o !== null;) o.alternate !== null && (u = o), o = o.sibling;
                u === null ? s || n.tail === null ? n.tail = null : n.tail.sibling = null : u.sibling = null
        }
    }

    function gt(n) {
        var s = n.alternate !== null && n.alternate.child === n.child,
            o = 0,
            u = 0;
        if (s)
            for (var f = n.child; f !== null;) o |= f.lanes | f.childLanes, u |= f.subtreeFlags & 14680064, u |= f.flags & 14680064, f.return = n, f = f.sibling;
        else
            for (f = n.child; f !== null;) o |= f.lanes | f.childLanes, u |= f.subtreeFlags, u |= f.flags, f.return = n, f = f.sibling;
        return n.subtreeFlags |= u, n.childLanes = o, s
    }

    function QS(n, s, o) {
        var u = s.pendingProps;
        switch (Ku(s), s.tag) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
                return gt(s), null;
            case 1:
                return _t(s.type) && pa(), gt(s), null;
            case 3:
                return u = s.stateNode, Ds(), Ue(Pt), Ue(pt), oc(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (n === null || n.child === null) && (wa(s) ? s.flags |= 4 : n === null || n.memoizedState.isDehydrated && (s.flags & 256) === 0 || (s.flags |= 1024, rn !== null && (jc(rn), rn = null))), Tc(n, s), gt(s), null;
            case 5:
                sc(s);
                var f = Vr(zi.current);
                if (o = s.type, n !== null && s.stateNode != null) Im(n, s, o, u, f), n.ref !== s.ref && (s.flags |= 512, s.flags |= 2097152);
                else {
                    if (!u) {
                        if (s.stateNode === null) throw Error(r(166));
                        return gt(s), null
                    }
                    if (n = Vr(yn.current), wa(s)) {
                        u = s.stateNode, o = s.type;
                        var p = s.memoizedProps;
                        switch (u[gn] = s, u[Ii] = p, n = (s.mode & 1) !== 0, o) {
                            case "dialog":
                                Be("cancel", u), Be("close", u);
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                Be("load", u);
                                break;
                            case "video":
                            case "audio":
                                for (f = 0; f < Mi.length; f++) Be(Mi[f], u);
                                break;
                            case "source":
                                Be("error", u);
                                break;
                            case "img":
                            case "image":
                            case "link":
                                Be("error", u), Be("load", u);
                                break;
                            case "details":
                                Be("toggle", u);
                                break;
                            case "input":
                                vh(u, p), Be("invalid", u);
                                break;
                            case "select":
                                u._wrapperState = {
                                    wasMultiple: !!p.multiple
                                }, Be("invalid", u);
                                break;
                            case "textarea":
                                Sh(u, p), Be("invalid", u)
                        }
                        iu(o, p), f = null;
                        for (var v in p)
                            if (p.hasOwnProperty(v)) {
                                var E = p[v];
                                v === "children" ? typeof E == "string" ? u.textContent !== E && (p.suppressHydrationWarning !== !0 && da(u.textContent, E, n), f = ["children", E]) : typeof E == "number" && u.textContent !== "" + E && (p.suppressHydrationWarning !== !0 && da(u.textContent, E, n), f = ["children", "" + E]) : a.hasOwnProperty(v) && E != null && v === "onScroll" && Be("scroll", u)
                            }
                        switch (o) {
                            case "input":
                                Rn(u), xh(u, p, !0);
                                break;
                            case "textarea":
                                Rn(u), kh(u);
                                break;
                            case "select":
                            case "option":
                                break;
                            default:
                                typeof p.onClick == "function" && (u.onclick = fa)
                        }
                        u = f, s.updateQueue = u, u !== null && (s.flags |= 4)
                    } else {
                        v = f.nodeType === 9 ? f : f.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Eh(o)), n === "http://www.w3.org/1999/xhtml" ? o === "script" ? (n = v.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof u.is == "string" ? n = v.createElement(o, {
                            is: u.is
                        }) : (n = v.createElement(o), o === "select" && (v = n, u.multiple ? v.multiple = !0 : u.size && (v.size = u.size))) : n = v.createElementNS(n, o), n[gn] = s, n[Ii] = u, jm(n, s, !1, !1), s.stateNode = n;
                        e: {
                            switch (v = ou(o, u), o) {
                                case "dialog":
                                    Be("cancel", n), Be("close", n), f = u;
                                    break;
                                case "iframe":
                                case "object":
                                case "embed":
                                    Be("load", n), f = u;
                                    break;
                                case "video":
                                case "audio":
                                    for (f = 0; f < Mi.length; f++) Be(Mi[f], n);
                                    f = u;
                                    break;
                                case "source":
                                    Be("error", n), f = u;
                                    break;
                                case "img":
                                case "image":
                                case "link":
                                    Be("error", n), Be("load", n), f = u;
                                    break;
                                case "details":
                                    Be("toggle", n), f = u;
                                    break;
                                case "input":
                                    vh(n, u), f = Wn(n, u), Be("invalid", n);
                                    break;
                                case "option":
                                    f = u;
                                    break;
                                case "select":
                                    n._wrapperState = {
                                        wasMultiple: !!u.multiple
                                    }, f = U({}, u, {
                                        value: void 0
                                    }), Be("invalid", n);
                                    break;
                                case "textarea":
                                    Sh(n, u), f = ru(n, u), Be("invalid", n);
                                    break;
                                default:
                                    f = u
                            }
                            iu(o, f),
                            E = f;
                            for (p in E)
                                if (E.hasOwnProperty(p)) {
                                    var C = E[p];
                                    p === "style" ? Ph(n, C) : p === "dangerouslySetInnerHTML" ? (C = C ? C.__html : void 0, C != null && Th(n, C)) : p === "children" ? typeof C == "string" ? (o !== "textarea" || C !== "") && mi(n, C) : typeof C == "number" && mi(n, "" + C) : p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && p !== "autoFocus" && (a.hasOwnProperty(p) ? C != null && p === "onScroll" && Be("scroll", n) : C != null && M(n, p, C, v))
                                }
                            switch (o) {
                                case "input":
                                    Rn(n), xh(n, u, !1);
                                    break;
                                case "textarea":
                                    Rn(n), kh(n);
                                    break;
                                case "option":
                                    u.value != null && n.setAttribute("value", "" + _e(u.value));
                                    break;
                                case "select":
                                    n.multiple = !!u.multiple, p = u.value, p != null ? gs(n, !!u.multiple, p, !1) : u.defaultValue != null && gs(n, !!u.multiple, u.defaultValue, !0);
                                    break;
                                default:
                                    typeof f.onClick == "function" && (n.onclick = fa)
                            }
                            switch (o) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    u = !!u.autoFocus;
                                    break e;
                                case "img":
                                    u = !0;
                                    break e;
                                default:
                                    u = !1
                            }
                        }
                        u && (s.flags |= 4)
                    }
                    s.ref !== null && (s.flags |= 512, s.flags |= 2097152)
                }
                return gt(s), null;
            case 6:
                if (n && s.stateNode != null) Fm(n, s, n.memoizedProps, u);
                else {
                    if (typeof u != "string" && s.stateNode === null) throw Error(r(166));
                    if (o = Vr(zi.current), Vr(yn.current), wa(s)) {
                        if (u = s.stateNode, o = s.memoizedProps, u[gn] = s, (p = u.nodeValue !== o) && (n = Vt, n !== null)) switch (n.tag) {
                            case 3:
                                da(u.nodeValue, o, (n.mode & 1) !== 0);
                                break;
                            case 5:
                                n.memoizedProps.suppressHydrationWarning !== !0 && da(u.nodeValue, o, (n.mode & 1) !== 0)
                        }
                        p && (s.flags |= 4)
                    } else u = (o.nodeType === 9 ? o : o.ownerDocument).createTextNode(u), u[gn] = s, s.stateNode = u
                }
                return gt(s), null;
            case 13:
                if (Ue($e), u = s.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
                    if (ze && Bt !== null && (s.mode & 1) !== 0 && (s.flags & 128) === 0) Up(), Ns(), s.flags |= 98560, p = !1;
                    else if (p = wa(s), u !== null && u.dehydrated !== null) {
                        if (n === null) {
                            if (!p) throw Error(r(318));
                            if (p = s.memoizedState, p = p !== null ? p.dehydrated : null, !p) throw Error(r(317));
                            p[gn] = s
                        } else Ns(), (s.flags & 128) === 0 && (s.memoizedState = null), s.flags |= 4;
                        gt(s), p = !1
                    } else rn !== null && (jc(rn), rn = null), p = !0;
                    if (!p) return s.flags & 65536 ? s : null
                }
                return (s.flags & 128) !== 0 ? (s.lanes = o, s) : (u = u !== null, u !== (n !== null && n.memoizedState !== null) && u && (s.child.flags |= 8192, (s.mode & 1) !== 0 && (n === null || ($e.current & 1) !== 0 ? nt === 0 && (nt = 3) : Vc())), s.updateQueue !== null && (s.flags |= 4), gt(s), null);
            case 4:
                return Ds(), Tc(n, s), n === null && Di(s.stateNode.containerInfo), gt(s), null;
            case 10:
                return Zu(s.type._context), gt(s), null;
            case 17:
                return _t(s.type) && pa(), gt(s), null;
            case 19:
                if (Ue($e), p = s.memoizedState, p === null) return gt(s), null;
                if (u = (s.flags & 128) !== 0, v = p.rendering, v === null)
                    if (u) Ki(p, !1);
                    else {
                        if (nt !== 0 || n !== null && (n.flags & 128) !== 0)
                            for (n = s.child; n !== null;) {
                                if (v = Ta(n), v !== null) {
                                    for (s.flags |= 128, Ki(p, !1), u = v.updateQueue, u !== null && (s.updateQueue = u, s.flags |= 4), s.subtreeFlags = 0, u = o, o = s.child; o !== null;) p = o, n = u, p.flags &= 14680066, v = p.alternate, v === null ? (p.childLanes = 0, p.lanes = n, p.child = null, p.subtreeFlags = 0, p.memoizedProps = null, p.memoizedState = null, p.updateQueue = null, p.dependencies = null, p.stateNode = null) : (p.childLanes = v.childLanes, p.lanes = v.lanes, p.child = v.child, p.subtreeFlags = 0, p.deletions = null, p.memoizedProps = v.memoizedProps, p.memoizedState = v.memoizedState, p.updateQueue = v.updateQueue, p.type = v.type, n = v.dependencies, p.dependencies = n === null ? null : {
                                        lanes: n.lanes,
                                        firstContext: n.firstContext
                                    }), o = o.sibling;
                                    return Ve($e, $e.current & 1 | 2), s.child
                                }
                                n = n.sibling
                            }
                        p.tail !== null && Ge() > Vs && (s.flags |= 128, u = !0, Ki(p, !1), s.lanes = 4194304)
                    }
                else {
                    if (!u)
                        if (n = Ta(v), n !== null) {
                            if (s.flags |= 128, u = !0, o = n.updateQueue, o !== null && (s.updateQueue = o, s.flags |= 4), Ki(p, !0), p.tail === null && p.tailMode === "hidden" && !v.alternate && !ze) return gt(s), null
                        } else 2 * Ge() - p.renderingStartTime > Vs && o !== 1073741824 && (s.flags |= 128, u = !0, Ki(p, !1), s.lanes = 4194304);
                    p.isBackwards ? (v.sibling = s.child, s.child = v) : (o = p.last, o !== null ? o.sibling = v : s.child = v, p.last = v)
                }
                return p.tail !== null ? (s = p.tail, p.rendering = s, p.tail = s.sibling, p.renderingStartTime = Ge(), s.sibling = null, o = $e.current, Ve($e, u ? o & 1 | 2 : o & 1), s) : (gt(s), null);
            case 22:
            case 23:
                return Fc(), u = s.memoizedState !== null, n !== null && n.memoizedState !== null !== u && (s.flags |= 8192), u && (s.mode & 1) !== 0 ? (Ut & 1073741824) !== 0 && (gt(s), s.subtreeFlags & 6 && (s.flags |= 8192)) : gt(s), null;
            case 24:
                return null;
            case 25:
                return null
        }
        throw Error(r(156, s.tag))
    }

    function GS(n, s) {
        switch (Ku(s), s.tag) {
            case 1:
                return _t(s.type) && pa(), n = s.flags, n & 65536 ? (s.flags = n & -65537 | 128, s) : null;
            case 3:
                return Ds(), Ue(Pt), Ue(pt), oc(), n = s.flags, (n & 65536) !== 0 && (n & 128) === 0 ? (s.flags = n & -65537 | 128, s) : null;
            case 5:
                return sc(s), null;
            case 13:
                if (Ue($e), n = s.memoizedState, n !== null && n.dehydrated !== null) {
                    if (s.alternate === null) throw Error(r(340));
                    Ns()
                }
                return n = s.flags, n & 65536 ? (s.flags = n & -65537 | 128, s) : null;
            case 19:
                return Ue($e), null;
            case 4:
                return Ds(), null;
            case 10:
                return Zu(s.type._context), null;
            case 22:
            case 23:
                return Fc(), null;
            case 24:
                return null;
            default:
                return null
        }
    }
    var Ma = !1,
        yt = !1,
        YS = typeof WeakSet == "function" ? WeakSet : Set,
        Z = null;

    function Is(n, s) {
        var o = n.ref;
        if (o !== null)
            if (typeof o == "function") try {
                o(null)
            } catch (u) {
                We(n, s, u)
            } else o.current = null
    }

    function Cc(n, s, o) {
        try {
            o()
        } catch (u) {
            We(n, s, u)
        }
    }
    var Vm = !1;

    function XS(n, s) {
        if (Fu = ea, n = yp(), Au(n)) {
            if ("selectionStart" in n) var o = {
                start: n.selectionStart,
                end: n.selectionEnd
            };
            else e: {
                o = (o = n.ownerDocument) && o.defaultView || window;
                var u = o.getSelection && o.getSelection();
                if (u && u.rangeCount !== 0) {
                    o = u.anchorNode;
                    var f = u.anchorOffset,
                        p = u.focusNode;
                    u = u.focusOffset;
                    try {
                        o.nodeType, p.nodeType
                    } catch {
                        o = null;
                        break e
                    }
                    var v = 0,
                        E = -1,
                        C = -1,
                        I = 0,
                        H = 0,
                        q = n,
                        $ = null;
                    t: for (;;) {
                        for (var Y; q !== o || f !== 0 && q.nodeType !== 3 || (E = v + f), q !== p || u !== 0 && q.nodeType !== 3 || (C = v + u), q.nodeType === 3 && (v += q.nodeValue.length), (Y = q.firstChild) !== null;) $ = q, q = Y;
                        for (;;) {
                            if (q === n) break t;
                            if ($ === o && ++I === f && (E = v), $ === p && ++H === u && (C = v), (Y = q.nextSibling) !== null) break;
                            q = $, $ = q.parentNode
                        }
                        q = Y
                    }
                    o = E === -1 || C === -1 ? null : {
                        start: E,
                        end: C
                    }
                } else o = null
            }
            o = o || {
                start: 0,
                end: 0
            }
        } else o = null;
        for (Vu = {
                focusedElem: n,
                selectionRange: o
            }, ea = !1, Z = s; Z !== null;)
            if (s = Z, n = s.child, (s.subtreeFlags & 1028) !== 0 && n !== null) n.return = s, Z = n;
            else
                for (; Z !== null;) {
                    s = Z;
                    try {
                        var ee = s.alternate;
                        if ((s.flags & 1024) !== 0) switch (s.tag) {
                            case 0:
                            case 11:
                            case 15:
                                break;
                            case 1:
                                if (ee !== null) {
                                    var re = ee.memoizedProps,
                                        Ye = ee.memoizedState,
                                        N = s.stateNode,
                                        _ = N.getSnapshotBeforeUpdate(s.elementType === s.type ? re : sn(s.type, re), Ye);
                                    N.__reactInternalSnapshotBeforeUpdate = _
                                }
                                break;
                            case 3:
                                var O = s.stateNode.containerInfo;
                                O.nodeType === 1 ? O.textContent = "" : O.nodeType === 9 && O.documentElement && O.removeChild(O.documentElement);
                                break;
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                                break;
                            default:
                                throw Error(r(163))
                        }
                    } catch (Q) {
                        We(s, s.return, Q)
                    }
                    if (n = s.sibling, n !== null) {
                        n.return = s.return, Z = n;
                        break
                    }
                    Z = s.return
                }
        return ee = Vm, Vm = !1, ee
    }

    function Qi(n, s, o) {
        var u = s.updateQueue;
        if (u = u !== null ? u.lastEffect : null, u !== null) {
            var f = u = u.next;
            do {
                if ((f.tag & n) === n) {
                    var p = f.destroy;
                    f.destroy = void 0, p !== void 0 && Cc(s, o, p)
                }
                f = f.next
            } while (f !== u)
        }
    }

    function Da(n, s) {
        if (s = s.updateQueue, s = s !== null ? s.lastEffect : null, s !== null) {
            var o = s = s.next;
            do {
                if ((o.tag & n) === n) {
                    var u = o.create;
                    o.destroy = u()
                }
                o = o.next
            } while (o !== s)
        }
    }

    function Pc(n) {
        var s = n.ref;
        if (s !== null) {
            var o = n.stateNode;
            switch (n.tag) {
                case 5:
                    n = o;
                    break;
                default:
                    n = o
            }
            typeof s == "function" ? s(n) : s.current = n
        }
    }

    function Bm(n) {
        var s = n.alternate;
        s !== null && (n.alternate = null, Bm(s)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (s = n.stateNode, s !== null && (delete s[gn], delete s[Ii], delete s[$u], delete s[LS], delete s[MS])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null
    }

    function Um(n) {
        return n.tag === 5 || n.tag === 3 || n.tag === 4
    }

    function zm(n) {
        e: for (;;) {
            for (; n.sibling === null;) {
                if (n.return === null || Um(n.return)) return null;
                n = n.return
            }
            for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18;) {
                if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
                n.child.return = n, n = n.child
            }
            if (!(n.flags & 2)) return n.stateNode
        }
    }

    function _c(n, s, o) {
        var u = n.tag;
        if (u === 5 || u === 6) n = n.stateNode, s ? o.nodeType === 8 ? o.parentNode.insertBefore(n, s) : o.insertBefore(n, s) : (o.nodeType === 8 ? (s = o.parentNode, s.insertBefore(n, o)) : (s = o, s.appendChild(n)), o = o._reactRootContainer, o != null || s.onclick !== null || (s.onclick = fa));
        else if (u !== 4 && (n = n.child, n !== null))
            for (_c(n, s, o), n = n.sibling; n !== null;) _c(n, s, o), n = n.sibling
    }

    function Rc(n, s, o) {
        var u = n.tag;
        if (u === 5 || u === 6) n = n.stateNode, s ? o.insertBefore(n, s) : o.appendChild(n);
        else if (u !== 4 && (n = n.child, n !== null))
            for (Rc(n, s, o), n = n.sibling; n !== null;) Rc(n, s, o), n = n.sibling
    }
    var ut = null,
        on = !1;

    function ir(n, s, o) {
        for (o = o.child; o !== null;) $m(n, s, o), o = o.sibling
    }

    function $m(n, s, o) {
        if (mn && typeof mn.onCommitFiberUnmount == "function") try {
            mn.onCommitFiberUnmount(Qo, o)
        } catch {}
        switch (o.tag) {
            case 5:
                yt || Is(o, s);
            case 6:
                var u = ut,
                    f = on;
                ut = null, ir(n, s, o), ut = u, on = f, ut !== null && (on ? (n = ut, o = o.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(o) : n.removeChild(o)) : ut.removeChild(o.stateNode));
                break;
            case 18:
                ut !== null && (on ? (n = ut, o = o.stateNode, n.nodeType === 8 ? zu(n.parentNode, o) : n.nodeType === 1 && zu(n, o), Ci(n)) : zu(ut, o.stateNode));
                break;
            case 4:
                u = ut, f = on, ut = o.stateNode.containerInfo, on = !0, ir(n, s, o), ut = u, on = f;
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                if (!yt && (u = o.updateQueue, u !== null && (u = u.lastEffect, u !== null))) {
                    f = u = u.next;
                    do {
                        var p = f,
                            v = p.destroy;
                        p = p.tag, v !== void 0 && ((p & 2) !== 0 || (p & 4) !== 0) && Cc(o, s, v), f = f.next
                    } while (f !== u)
                }
                ir(n, s, o);
                break;
            case 1:
                if (!yt && (Is(o, s), u = o.stateNode, typeof u.componentWillUnmount == "function")) try {
                    u.props = o.memoizedProps, u.state = o.memoizedState, u.componentWillUnmount()
                } catch (E) {
                    We(o, s, E)
                }
                ir(n, s, o);
                break;
            case 21:
                ir(n, s, o);
                break;
            case 22:
                o.mode & 1 ? (yt = (u = yt) || o.memoizedState !== null, ir(n, s, o), yt = u) : ir(n, s, o);
                break;
            default:
                ir(n, s, o)
        }
    }

    function Hm(n) {
        var s = n.updateQueue;
        if (s !== null) {
            n.updateQueue = null;
            var o = n.stateNode;
            o === null && (o = n.stateNode = new YS), s.forEach(function(u) {
                var f = ob.bind(null, n, u);
                o.has(u) || (o.add(u), u.then(f, f))
            })
        }
    }

    function an(n, s) {
        var o = s.deletions;
        if (o !== null)
            for (var u = 0; u < o.length; u++) {
                var f = o[u];
                try {
                    var p = n,
                        v = s,
                        E = v;
                    e: for (; E !== null;) {
                        switch (E.tag) {
                            case 5:
                                ut = E.stateNode, on = !1;
                                break e;
                            case 3:
                                ut = E.stateNode.containerInfo, on = !0;
                                break e;
                            case 4:
                                ut = E.stateNode.containerInfo, on = !0;
                                break e
                        }
                        E = E.return
                    }
                    if (ut === null) throw Error(r(160));
                    $m(p, v, f), ut = null, on = !1;
                    var C = f.alternate;
                    C !== null && (C.return = null), f.return = null
                } catch (I) {
                    We(f, s, I)
                }
            }
        if (s.subtreeFlags & 12854)
            for (s = s.child; s !== null;) qm(s, n), s = s.sibling
    }

    function qm(n, s) {
        var o = n.alternate,
            u = n.flags;
        switch (n.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                if (an(s, n), wn(n), u & 4) {
                    try {
                        Qi(3, n, n.return), Da(3, n)
                    } catch (re) {
                        We(n, n.return, re)
                    }
                    try {
                        Qi(5, n, n.return)
                    } catch (re) {
                        We(n, n.return, re)
                    }
                }
                break;
            case 1:
                an(s, n), wn(n), u & 512 && o !== null && Is(o, o.return);
                break;
            case 5:
                if (an(s, n), wn(n), u & 512 && o !== null && Is(o, o.return), n.flags & 32) {
                    var f = n.stateNode;
                    try {
                        mi(f, "")
                    } catch (re) {
                        We(n, n.return, re)
                    }
                }
                if (u & 4 && (f = n.stateNode, f != null)) {
                    var p = n.memoizedProps,
                        v = o !== null ? o.memoizedProps : p,
                        E = n.type,
                        C = n.updateQueue;
                    if (n.updateQueue = null, C !== null) try {
                        E === "input" && p.type === "radio" && p.name != null && wh(f, p), ou(E, v);
                        var I = ou(E, p);
                        for (v = 0; v < C.length; v += 2) {
                            var H = C[v],
                                q = C[v + 1];
                            H === "style" ? Ph(f, q) : H === "dangerouslySetInnerHTML" ? Th(f, q) : H === "children" ? mi(f, q) : M(f, H, q, I)
                        }
                        switch (E) {
                            case "input":
                                tu(f, p);
                                break;
                            case "textarea":
                                bh(f, p);
                                break;
                            case "select":
                                var $ = f._wrapperState.wasMultiple;
                                f._wrapperState.wasMultiple = !!p.multiple;
                                var Y = p.value;
                                Y != null ? gs(f, !!p.multiple, Y, !1) : $ !== !!p.multiple && (p.defaultValue != null ? gs(f, !!p.multiple, p.defaultValue, !0) : gs(f, !!p.multiple, p.multiple ? [] : "", !1))
                        }
                        f[Ii] = p
                    } catch (re) {
                        We(n, n.return, re)
                    }
                }
                break;
            case 6:
                if (an(s, n), wn(n), u & 4) {
                    if (n.stateNode === null) throw Error(r(162));
                    f = n.stateNode, p = n.memoizedProps;
                    try {
                        f.nodeValue = p
                    } catch (re) {
                        We(n, n.return, re)
                    }
                }
                break;
            case 3:
                if (an(s, n), wn(n), u & 4 && o !== null && o.memoizedState.isDehydrated) try {
                    Ci(s.containerInfo)
                } catch (re) {
                    We(n, n.return, re)
                }
                break;
            case 4:
                an(s, n), wn(n);
                break;
            case 13:
                an(s, n), wn(n), f = n.child, f.flags & 8192 && (p = f.memoizedState !== null, f.stateNode.isHidden = p, !p || f.alternate !== null && f.alternate.memoizedState !== null || (Oc = Ge())), u & 4 && Hm(n);
                break;
            case 22:
                if (H = o !== null && o.memoizedState !== null, n.mode & 1 ? (yt = (I = yt) || H, an(s, n), yt = I) : an(s, n), wn(n), u & 8192) {
                    if (I = n.memoizedState !== null, (n.stateNode.isHidden = I) && !H && (n.mode & 1) !== 0)
                        for (Z = n, H = n.child; H !== null;) {
                            for (q = Z = H; Z !== null;) {
                                switch ($ = Z, Y = $.child, $.tag) {
                                    case 0:
                                    case 11:
                                    case 14:
                                    case 15:
                                        Qi(4, $, $.return);
                                        break;
                                    case 1:
                                        Is($, $.return);
                                        var ee = $.stateNode;
                                        if (typeof ee.componentWillUnmount == "function") {
                                            u = $, o = $.return;
                                            try {
                                                s = u, ee.props = s.memoizedProps, ee.state = s.memoizedState, ee.componentWillUnmount()
                                            } catch (re) {
                                                We(u, o, re)
                                            }
                                        }
                                        break;
                                    case 5:
                                        Is($, $.return);
                                        break;
                                    case 22:
                                        if ($.memoizedState !== null) {
                                            Qm(q);
                                            continue
                                        }
                                }
                                Y !== null ? (Y.return = $, Z = Y) : Qm(q)
                            }
                            H = H.sibling
                        }
                    e: for (H = null, q = n;;) {
                        if (q.tag === 5) {
                            if (H === null) {
                                H = q;
                                try {
                                    f = q.stateNode, I ? (p = f.style, typeof p.setProperty == "function" ? p.setProperty("display", "none", "important") : p.display = "none") : (E = q.stateNode, C = q.memoizedProps.style, v = C != null && C.hasOwnProperty("display") ? C.display : null, E.style.display = Ch("display", v))
                                } catch (re) {
                                    We(n, n.return, re)
                                }
                            }
                        } else if (q.tag === 6) {
                            if (H === null) try {
                                q.stateNode.nodeValue = I ? "" : q.memoizedProps
                            } catch (re) {
                                We(n, n.return, re)
                            }
                        } else if ((q.tag !== 22 && q.tag !== 23 || q.memoizedState === null || q === n) && q.child !== null) {
                            q.child.return = q, q = q.child;
                            continue
                        }
                        if (q === n) break e;
                        for (; q.sibling === null;) {
                            if (q.return === null || q.return === n) break e;
                            H === q && (H = null), q = q.return
                        }
                        H === q && (H = null), q.sibling.return = q.return, q = q.sibling
                    }
                }
                break;
            case 19:
                an(s, n), wn(n), u & 4 && Hm(n);
                break;
            case 21:
                break;
            default:
                an(s, n), wn(n)
        }
    }

    function wn(n) {
        var s = n.flags;
        if (s & 2) {
            try {
                e: {
                    for (var o = n.return; o !== null;) {
                        if (Um(o)) {
                            var u = o;
                            break e
                        }
                        o = o.return
                    }
                    throw Error(r(160))
                }
                switch (u.tag) {
                    case 5:
                        var f = u.stateNode;
                        u.flags & 32 && (mi(f, ""), u.flags &= -33);
                        var p = zm(n);
                        Rc(n, p, f);
                        break;
                    case 3:
                    case 4:
                        var v = u.stateNode.containerInfo,
                            E = zm(n);
                        _c(n, E, v);
                        break;
                    default:
                        throw Error(r(161))
                }
            }
            catch (C) {
                We(n, n.return, C)
            }
            n.flags &= -3
        }
        s & 4096 && (n.flags &= -4097)
    }

    function JS(n, s, o) {
        Z = n, Wm(n)
    }

    function Wm(n, s, o) {
        for (var u = (n.mode & 1) !== 0; Z !== null;) {
            var f = Z,
                p = f.child;
            if (f.tag === 22 && u) {
                var v = f.memoizedState !== null || Ma;
                if (!v) {
                    var E = f.alternate,
                        C = E !== null && E.memoizedState !== null || yt;
                    E = Ma;
                    var I = yt;
                    if (Ma = v, (yt = C) && !I)
                        for (Z = f; Z !== null;) v = Z, C = v.child, v.tag === 22 && v.memoizedState !== null ? Gm(f) : C !== null ? (C.return = v, Z = C) : Gm(f);
                    for (; p !== null;) Z = p, Wm(p), p = p.sibling;
                    Z = f, Ma = E, yt = I
                }
                Km(n)
            } else(f.subtreeFlags & 8772) !== 0 && p !== null ? (p.return = f, Z = p) : Km(n)
        }
    }

    function Km(n) {
        for (; Z !== null;) {
            var s = Z;
            if ((s.flags & 8772) !== 0) {
                var o = s.alternate;
                try {
                    if ((s.flags & 8772) !== 0) switch (s.tag) {
                        case 0:
                        case 11:
                        case 15:
                            yt || Da(5, s);
                            break;
                        case 1:
                            var u = s.stateNode;
                            if (s.flags & 4 && !yt)
                                if (o === null) u.componentDidMount();
                                else {
                                    var f = s.elementType === s.type ? o.memoizedProps : sn(s.type, o.memoizedProps);
                                    u.componentDidUpdate(f, o.memoizedState, u.__reactInternalSnapshotBeforeUpdate)
                                }
                            var p = s.updateQueue;
                            p !== null && Qp(s, p, u);
                            break;
                        case 3:
                            var v = s.updateQueue;
                            if (v !== null) {
                                if (o = null, s.child !== null) switch (s.child.tag) {
                                    case 5:
                                        o = s.child.stateNode;
                                        break;
                                    case 1:
                                        o = s.child.stateNode
                                }
                                Qp(s, v, o)
                            }
                            break;
                        case 5:
                            var E = s.stateNode;
                            if (o === null && s.flags & 4) {
                                o = E;
                                var C = s.memoizedProps;
                                switch (s.type) {
                                    case "button":
                                    case "input":
                                    case "select":
                                    case "textarea":
                                        C.autoFocus && o.focus();
                                        break;
                                    case "img":
                                        C.src && (o.src = C.src)
                                }
                            }
                            break;
                        case 6:
                            break;
                        case 4:
                            break;
                        case 12:
                            break;
                        case 13:
                            if (s.memoizedState === null) {
                                var I = s.alternate;
                                if (I !== null) {
                                    var H = I.memoizedState;
                                    if (H !== null) {
                                        var q = H.dehydrated;
                                        q !== null && Ci(q)
                                    }
                                }
                            }
                            break;
                        case 19:
                        case 17:
                        case 21:
                        case 22:
                        case 23:
                        case 25:
                            break;
                        default:
                            throw Error(r(163))
                    }
                    yt || s.flags & 512 && Pc(s)
                } catch ($) {
                    We(s, s.return, $)
                }
            }
            if (s === n) {
                Z = null;
                break
            }
            if (o = s.sibling, o !== null) {
                o.return = s.return, Z = o;
                break
            }
            Z = s.return
        }
    }

    function Qm(n) {
        for (; Z !== null;) {
            var s = Z;
            if (s === n) {
                Z = null;
                break
            }
            var o = s.sibling;
            if (o !== null) {
                o.return = s.return, Z = o;
                break
            }
            Z = s.return
        }
    }

    function Gm(n) {
        for (; Z !== null;) {
            var s = Z;
            try {
                switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                        var o = s.return;
                        try {
                            Da(4, s)
                        } catch (C) {
                            We(s, o, C)
                        }
                        break;
                    case 1:
                        var u = s.stateNode;
                        if (typeof u.componentDidMount == "function") {
                            var f = s.return;
                            try {
                                u.componentDidMount()
                            } catch (C) {
                                We(s, f, C)
                            }
                        }
                        var p = s.return;
                        try {
                            Pc(s)
                        } catch (C) {
                            We(s, p, C)
                        }
                        break;
                    case 5:
                        var v = s.return;
                        try {
                            Pc(s)
                        } catch (C) {
                            We(s, v, C)
                        }
                }
            } catch (C) {
                We(s, s.return, C)
            }
            if (s === n) {
                Z = null;
                break
            }
            var E = s.sibling;
            if (E !== null) {
                E.return = s.return, Z = E;
                break
            }
            Z = s.return
        }
    }
    var ZS = Math.ceil,
        ja = L.ReactCurrentDispatcher,
        Ac = L.ReactCurrentOwner,
        Kt = L.ReactCurrentBatchConfig,
        Ce = 0,
        it = null,
        Ze = null,
        ct = 0,
        Ut = 0,
        Fs = er(0),
        nt = 0,
        Gi = null,
        Ur = 0,
        Ia = 0,
        Nc = 0,
        Yi = null,
        At = null,
        Oc = 0,
        Vs = 1 / 0,
        In = null,
        Fa = !1,
        Lc = null,
        or = null,
        Va = !1,
        ar = null,
        Ba = 0,
        Xi = 0,
        Mc = null,
        Ua = -1,
        za = 0;

    function Et() {
        return (Ce & 6) !== 0 ? Ge() : Ua !== -1 ? Ua : Ua = Ge()
    }

    function lr(n) {
        return (n.mode & 1) === 0 ? 1 : (Ce & 2) !== 0 && ct !== 0 ? ct & -ct : jS.transition !== null ? (za === 0 && (za = zh()), za) : (n = De, n !== 0 || (n = window.event, n = n === void 0 ? 16 : Xh(n.type)), n)
    }

    function ln(n, s, o, u) {
        if (50 < Xi) throw Xi = 0, Mc = null, Error(r(185));
        Si(n, o, u), ((Ce & 2) === 0 || n !== it) && (n === it && ((Ce & 2) === 0 && (Ia |= o), nt === 4 && ur(n, ct)), Nt(n, u), o === 1 && Ce === 0 && (s.mode & 1) === 0 && (Vs = Ge() + 500, ga && nr()))
    }

    function Nt(n, s) {
        var o = n.callbackNode;
        j1(n, s);
        var u = Xo(n, n === it ? ct : 0);
        if (u === 0) o !== null && Vh(o), n.callbackNode = null, n.callbackPriority = 0;
        else if (s = u & -u, n.callbackPriority !== s) {
            if (o != null && Vh(o), s === 1) n.tag === 0 ? DS(Xm.bind(null, n)) : jp(Xm.bind(null, n)), NS(function() {
                (Ce & 6) === 0 && nr()
            }), o = null;
            else {
                switch ($h(u)) {
                    case 1:
                        o = hu;
                        break;
                    case 4:
                        o = Bh;
                        break;
                    case 16:
                        o = Ko;
                        break;
                    case 536870912:
                        o = Uh;
                        break;
                    default:
                        o = Ko
                }
                o = ig(o, Ym.bind(null, n))
            }
            n.callbackPriority = s, n.callbackNode = o
        }
    }

    function Ym(n, s) {
        if (Ua = -1, za = 0, (Ce & 6) !== 0) throw Error(r(327));
        var o = n.callbackNode;
        if (Bs() && n.callbackNode !== o) return null;
        var u = Xo(n, n === it ? ct : 0);
        if (u === 0) return null;
        if ((u & 30) !== 0 || (u & n.expiredLanes) !== 0 || s) s = $a(n, u);
        else {
            s = u;
            var f = Ce;
            Ce |= 2;
            var p = Zm();
            (it !== n || ct !== s) && (In = null, Vs = Ge() + 500, $r(n, s));
            do try {
                nb();
                break
            } catch (E) {
                Jm(n, E)
            }
            while (!0);
            Ju(), ja.current = p, Ce = f, Ze !== null ? s = 0 : (it = null, ct = 0, s = nt)
        }
        if (s !== 0) {
            if (s === 2 && (f = pu(n), f !== 0 && (u = f, s = Dc(n, f))), s === 1) throw o = Gi, $r(n, 0), ur(n, u), Nt(n, Ge()), o;
            if (s === 6) ur(n, u);
            else {
                if (f = n.current.alternate, (u & 30) === 0 && !eb(f) && (s = $a(n, u), s === 2 && (p = pu(n), p !== 0 && (u = p, s = Dc(n, p))), s === 1)) throw o = Gi, $r(n, 0), ur(n, u), Nt(n, Ge()), o;
                switch (n.finishedWork = f, n.finishedLanes = u, s) {
                    case 0:
                    case 1:
                        throw Error(r(345));
                    case 2:
                        Hr(n, At, In);
                        break;
                    case 3:
                        if (ur(n, u), (u & 130023424) === u && (s = Oc + 500 - Ge(), 10 < s)) {
                            if (Xo(n, 0) !== 0) break;
                            if (f = n.suspendedLanes, (f & u) !== u) {
                                Et(), n.pingedLanes |= n.suspendedLanes & f;
                                break
                            }
                            n.timeoutHandle = Uu(Hr.bind(null, n, At, In), s);
                            break
                        }
                        Hr(n, At, In);
                        break;
                    case 4:
                        if (ur(n, u), (u & 4194240) === u) break;
                        for (s = n.eventTimes, f = -1; 0 < u;) {
                            var v = 31 - tn(u);
                            p = 1 << v, v = s[v], v > f && (f = v), u &= ~p
                        }
                        if (u = f, u = Ge() - u, u = (120 > u ? 120 : 480 > u ? 480 : 1080 > u ? 1080 : 1920 > u ? 1920 : 3e3 > u ? 3e3 : 4320 > u ? 4320 : 1960 * ZS(u / 1960)) - u, 10 < u) {
                            n.timeoutHandle = Uu(Hr.bind(null, n, At, In), u);
                            break
                        }
                        Hr(n, At, In);
                        break;
                    case 5:
                        Hr(n, At, In);
                        break;
                    default:
                        throw Error(r(329))
                }
            }
        }
        return Nt(n, Ge()), n.callbackNode === o ? Ym.bind(null, n) : null
    }

    function Dc(n, s) {
        var o = Yi;
        return n.current.memoizedState.isDehydrated && ($r(n, s).flags |= 256), n = $a(n, s), n !== 2 && (s = At, At = o, s !== null && jc(s)), n
    }

    function jc(n) {
        At === null ? At = n : At.push.apply(At, n)
    }

    function eb(n) {
        for (var s = n;;) {
            if (s.flags & 16384) {
                var o = s.updateQueue;
                if (o !== null && (o = o.stores, o !== null))
                    for (var u = 0; u < o.length; u++) {
                        var f = o[u],
                            p = f.getSnapshot;
                        f = f.value;
                        try {
                            if (!nn(p(), f)) return !1
                        } catch {
                            return !1
                        }
                    }
            }
            if (o = s.child, s.subtreeFlags & 16384 && o !== null) o.return = s, s = o;
            else {
                if (s === n) break;
                for (; s.sibling === null;) {
                    if (s.return === null || s.return === n) return !0;
                    s = s.return
                }
                s.sibling.return = s.return, s = s.sibling
            }
        }
        return !0
    }

    function ur(n, s) {
        for (s &= ~Nc, s &= ~Ia, n.suspendedLanes |= s, n.pingedLanes &= ~s, n = n.expirationTimes; 0 < s;) {
            var o = 31 - tn(s),
                u = 1 << o;
            n[o] = -1, s &= ~u
        }
    }

    function Xm(n) {
        if ((Ce & 6) !== 0) throw Error(r(327));
        Bs();
        var s = Xo(n, 0);
        if ((s & 1) === 0) return Nt(n, Ge()), null;
        var o = $a(n, s);
        if (n.tag !== 0 && o === 2) {
            var u = pu(n);
            u !== 0 && (s = u, o = Dc(n, u))
        }
        if (o === 1) throw o = Gi, $r(n, 0), ur(n, s), Nt(n, Ge()), o;
        if (o === 6) throw Error(r(345));
        return n.finishedWork = n.current.alternate, n.finishedLanes = s, Hr(n, At, In), Nt(n, Ge()), null
    }

    function Ic(n, s) {
        var o = Ce;
        Ce |= 1;
        try {
            return n(s)
        } finally {
            Ce = o, Ce === 0 && (Vs = Ge() + 500, ga && nr())
        }
    }

    function zr(n) {
        ar !== null && ar.tag === 0 && (Ce & 6) === 0 && Bs();
        var s = Ce;
        Ce |= 1;
        var o = Kt.transition,
            u = De;
        try {
            if (Kt.transition = null, De = 1, n) return n()
        } finally {
            De = u, Kt.transition = o, Ce = s, (Ce & 6) === 0 && nr()
        }
    }

    function Fc() {
        Ut = Fs.current, Ue(Fs)
    }

    function $r(n, s) {
        n.finishedWork = null, n.finishedLanes = 0;
        var o = n.timeoutHandle;
        if (o !== -1 && (n.timeoutHandle = -1, AS(o)), Ze !== null)
            for (o = Ze.return; o !== null;) {
                var u = o;
                switch (Ku(u), u.tag) {
                    case 1:
                        u = u.type.childContextTypes, u != null && pa();
                        break;
                    case 3:
                        Ds(), Ue(Pt), Ue(pt), oc();
                        break;
                    case 5:
                        sc(u);
                        break;
                    case 4:
                        Ds();
                        break;
                    case 13:
                        Ue($e);
                        break;
                    case 19:
                        Ue($e);
                        break;
                    case 10:
                        Zu(u.type._context);
                        break;
                    case 22:
                    case 23:
                        Fc()
                }
                o = o.return
            }
        if (it = n, Ze = n = cr(n.current, null), ct = Ut = s, nt = 0, Gi = null, Nc = Ia = Ur = 0, At = Yi = null, Fr !== null) {
            for (s = 0; s < Fr.length; s++)
                if (o = Fr[s], u = o.interleaved, u !== null) {
                    o.interleaved = null;
                    var f = u.next,
                        p = o.pending;
                    if (p !== null) {
                        var v = p.next;
                        p.next = f, u.next = v
                    }
                    o.pending = u
                }
            Fr = null
        }
        return n
    }

    function Jm(n, s) {
        do {
            var o = Ze;
            try {
                if (Ju(), Ca.current = Aa, Pa) {
                    for (var u = He.memoizedState; u !== null;) {
                        var f = u.queue;
                        f !== null && (f.pending = null), u = u.next
                    }
                    Pa = !1
                }
                if (Br = 0, st = tt = He = null, $i = !1, Hi = 0, Ac.current = null, o === null || o.return === null) {
                    nt = 1, Gi = s, Ze = null;
                    break
                }
                e: {
                    var p = n,
                        v = o.return,
                        E = o,
                        C = s;
                    if (s = ct, E.flags |= 32768, C !== null && typeof C == "object" && typeof C.then == "function") {
                        var I = C,
                            H = E,
                            q = H.tag;
                        if ((H.mode & 1) === 0 && (q === 0 || q === 11 || q === 15)) {
                            var $ = H.alternate;
                            $ ? (H.updateQueue = $.updateQueue, H.memoizedState = $.memoizedState, H.lanes = $.lanes) : (H.updateQueue = null, H.memoizedState = null)
                        }
                        var Y = km(v);
                        if (Y !== null) {
                            Y.flags &= -257, Em(Y, v, E, p, s), Y.mode & 1 && bm(p, I, s), s = Y, C = I;
                            var ee = s.updateQueue;
                            if (ee === null) {
                                var re = new Set;
                                re.add(C), s.updateQueue = re
                            } else ee.add(C);
                            break e
                        } else {
                            if ((s & 1) === 0) {
                                bm(p, I, s), Vc();
                                break e
                            }
                            C = Error(r(426))
                        }
                    } else if (ze && E.mode & 1) {
                        var Ye = km(v);
                        if (Ye !== null) {
                            (Ye.flags & 65536) === 0 && (Ye.flags |= 256), Em(Ye, v, E, p, s), Yu(js(C, E));
                            break e
                        }
                    }
                    p = C = js(C, E),
                    nt !== 4 && (nt = 2),
                    Yi === null ? Yi = [p] : Yi.push(p),
                    p = v;do {
                        switch (p.tag) {
                            case 3:
                                p.flags |= 65536, s &= -s, p.lanes |= s;
                                var N = xm(p, C, s);
                                Kp(p, N);
                                break e;
                            case 1:
                                E = C;
                                var _ = p.type,
                                    O = p.stateNode;
                                if ((p.flags & 128) === 0 && (typeof _.getDerivedStateFromError == "function" || O !== null && typeof O.componentDidCatch == "function" && (or === null || !or.has(O)))) {
                                    p.flags |= 65536, s &= -s, p.lanes |= s;
                                    var Q = Sm(p, E, s);
                                    Kp(p, Q);
                                    break e
                                }
                        }
                        p = p.return
                    } while (p !== null)
                }
                tg(o)
            } catch (ie) {
                s = ie, Ze === o && o !== null && (Ze = o = o.return);
                continue
            }
            break
        } while (!0)
    }

    function Zm() {
        var n = ja.current;
        return ja.current = Aa, n === null ? Aa : n
    }

    function Vc() {
        (nt === 0 || nt === 3 || nt === 2) && (nt = 4), it === null || (Ur & 268435455) === 0 && (Ia & 268435455) === 0 || ur(it, ct)
    }

    function $a(n, s) {
        var o = Ce;
        Ce |= 2;
        var u = Zm();
        (it !== n || ct !== s) && (In = null, $r(n, s));
        do try {
            tb();
            break
        } catch (f) {
            Jm(n, f)
        }
        while (!0);
        if (Ju(), Ce = o, ja.current = u, Ze !== null) throw Error(r(261));
        return it = null, ct = 0, nt
    }

    function tb() {
        for (; Ze !== null;) eg(Ze)
    }

    function nb() {
        for (; Ze !== null && !P1();) eg(Ze)
    }

    function eg(n) {
        var s = sg(n.alternate, n, Ut);
        n.memoizedProps = n.pendingProps, s === null ? tg(n) : Ze = s, Ac.current = null
    }

    function tg(n) {
        var s = n;
        do {
            var o = s.alternate;
            if (n = s.return, (s.flags & 32768) === 0) {
                if (o = QS(o, s, Ut), o !== null) {
                    Ze = o;
                    return
                }
            } else {
                if (o = GS(o, s), o !== null) {
                    o.flags &= 32767, Ze = o;
                    return
                }
                if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
                else {
                    nt = 6, Ze = null;
                    return
                }
            }
            if (s = s.sibling, s !== null) {
                Ze = s;
                return
            }
            Ze = s = n
        } while (s !== null);
        nt === 0 && (nt = 5)
    }

    function Hr(n, s, o) {
        var u = De,
            f = Kt.transition;
        try {
            Kt.transition = null, De = 1, rb(n, s, o, u)
        } finally {
            Kt.transition = f, De = u
        }
        return null
    }

    function rb(n, s, o, u) {
        do Bs(); while (ar !== null);
        if ((Ce & 6) !== 0) throw Error(r(327));
        o = n.finishedWork;
        var f = n.finishedLanes;
        if (o === null) return null;
        if (n.finishedWork = null, n.finishedLanes = 0, o === n.current) throw Error(r(177));
        n.callbackNode = null, n.callbackPriority = 0;
        var p = o.lanes | o.childLanes;
        if (I1(n, p), n === it && (Ze = it = null, ct = 0), (o.subtreeFlags & 2064) === 0 && (o.flags & 2064) === 0 || Va || (Va = !0, ig(Ko, function() {
                return Bs(), null
            })), p = (o.flags & 15990) !== 0, (o.subtreeFlags & 15990) !== 0 || p) {
            p = Kt.transition, Kt.transition = null;
            var v = De;
            De = 1;
            var E = Ce;
            Ce |= 4, Ac.current = null, XS(n, o), qm(o, n), kS(Vu), ea = !!Fu, Vu = Fu = null, n.current = o, JS(o), _1(), Ce = E, De = v, Kt.transition = p
        } else n.current = o;
        if (Va && (Va = !1, ar = n, Ba = f), p = n.pendingLanes, p === 0 && (or = null), N1(o.stateNode), Nt(n, Ge()), s !== null)
            for (u = n.onRecoverableError, o = 0; o < s.length; o++) f = s[o], u(f.value, {
                componentStack: f.stack,
                digest: f.digest
            });
        if (Fa) throw Fa = !1, n = Lc, Lc = null, n;
        return (Ba & 1) !== 0 && n.tag !== 0 && Bs(), p = n.pendingLanes, (p & 1) !== 0 ? n === Mc ? Xi++ : (Xi = 0, Mc = n) : Xi = 0, nr(), null
    }

    function Bs() {
        if (ar !== null) {
            var n = $h(Ba),
                s = Kt.transition,
                o = De;
            try {
                if (Kt.transition = null, De = 16 > n ? 16 : n, ar === null) var u = !1;
                else {
                    if (n = ar, ar = null, Ba = 0, (Ce & 6) !== 0) throw Error(r(331));
                    var f = Ce;
                    for (Ce |= 4, Z = n.current; Z !== null;) {
                        var p = Z,
                            v = p.child;
                        if ((Z.flags & 16) !== 0) {
                            var E = p.deletions;
                            if (E !== null) {
                                for (var C = 0; C < E.length; C++) {
                                    var I = E[C];
                                    for (Z = I; Z !== null;) {
                                        var H = Z;
                                        switch (H.tag) {
                                            case 0:
                                            case 11:
                                            case 15:
                                                Qi(8, H, p)
                                        }
                                        var q = H.child;
                                        if (q !== null) q.return = H, Z = q;
                                        else
                                            for (; Z !== null;) {
                                                H = Z;
                                                var $ = H.sibling,
                                                    Y = H.return;
                                                if (Bm(H), H === I) {
                                                    Z = null;
                                                    break
                                                }
                                                if ($ !== null) {
                                                    $.return = Y, Z = $;
                                                    break
                                                }
                                                Z = Y
                                            }
                                    }
                                }
                                var ee = p.alternate;
                                if (ee !== null) {
                                    var re = ee.child;
                                    if (re !== null) {
                                        ee.child = null;
                                        do {
                                            var Ye = re.sibling;
                                            re.sibling = null, re = Ye
                                        } while (re !== null)
                                    }
                                }
                                Z = p
                            }
                        }
                        if ((p.subtreeFlags & 2064) !== 0 && v !== null) v.return = p, Z = v;
                        else e: for (; Z !== null;) {
                            if (p = Z, (p.flags & 2048) !== 0) switch (p.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Qi(9, p, p.return)
                            }
                            var N = p.sibling;
                            if (N !== null) {
                                N.return = p.return, Z = N;
                                break e
                            }
                            Z = p.return
                        }
                    }
                    var _ = n.current;
                    for (Z = _; Z !== null;) {
                        v = Z;
                        var O = v.child;
                        if ((v.subtreeFlags & 2064) !== 0 && O !== null) O.return = v, Z = O;
                        else e: for (v = _; Z !== null;) {
                            if (E = Z, (E.flags & 2048) !== 0) try {
                                switch (E.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Da(9, E)
                                }
                            } catch (ie) {
                                We(E, E.return, ie)
                            }
                            if (E === v) {
                                Z = null;
                                break e
                            }
                            var Q = E.sibling;
                            if (Q !== null) {
                                Q.return = E.return, Z = Q;
                                break e
                            }
                            Z = E.return
                        }
                    }
                    if (Ce = f, nr(), mn && typeof mn.onPostCommitFiberRoot == "function") try {
                        mn.onPostCommitFiberRoot(Qo, n)
                    } catch {}
                    u = !0
                }
                return u
            } finally {
                De = o, Kt.transition = s
            }
        }
        return !1
    }

    function ng(n, s, o) {
        s = js(o, s), s = xm(n, s, 1), n = sr(n, s, 1), s = Et(), n !== null && (Si(n, 1, s), Nt(n, s))
    }

    function We(n, s, o) {
        if (n.tag === 3) ng(n, n, o);
        else
            for (; s !== null;) {
                if (s.tag === 3) {
                    ng(s, n, o);
                    break
                } else if (s.tag === 1) {
                    var u = s.stateNode;
                    if (typeof s.type.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && (or === null || !or.has(u))) {
                        n = js(o, n), n = Sm(s, n, 1), s = sr(s, n, 1), n = Et(), s !== null && (Si(s, 1, n), Nt(s, n));
                        break
                    }
                }
                s = s.return
            }
    }

    function sb(n, s, o) {
        var u = n.pingCache;
        u !== null && u.delete(s), s = Et(), n.pingedLanes |= n.suspendedLanes & o, it === n && (ct & o) === o && (nt === 4 || nt === 3 && (ct & 130023424) === ct && 500 > Ge() - Oc ? $r(n, 0) : Nc |= o), Nt(n, s)
    }

    function rg(n, s) {
        s === 0 && ((n.mode & 1) === 0 ? s = 1 : (s = Yo, Yo <<= 1, (Yo & 130023424) === 0 && (Yo = 4194304)));
        var o = Et();
        n = Mn(n, s), n !== null && (Si(n, s, o), Nt(n, o))
    }

    function ib(n) {
        var s = n.memoizedState,
            o = 0;
        s !== null && (o = s.retryLane), rg(n, o)
    }

    function ob(n, s) {
        var o = 0;
        switch (n.tag) {
            case 13:
                var u = n.stateNode,
                    f = n.memoizedState;
                f !== null && (o = f.retryLane);
                break;
            case 19:
                u = n.stateNode;
                break;
            default:
                throw Error(r(314))
        }
        u !== null && u.delete(s), rg(n, o)
    }
    var sg;
    sg = function(n, s, o) {
        if (n !== null)
            if (n.memoizedProps !== s.pendingProps || Pt.current) Rt = !0;
            else {
                if ((n.lanes & o) === 0 && (s.flags & 128) === 0) return Rt = !1, KS(n, s, o);
                Rt = (n.flags & 131072) !== 0
            }
        else Rt = !1, ze && (s.flags & 1048576) !== 0 && Ip(s, va, s.index);
        switch (s.lanes = 0, s.tag) {
            case 2:
                var u = s.type;
                La(n, s), n = s.pendingProps;
                var f = _s(s, pt.current);
                Ms(s, o), f = uc(null, s, u, n, f, o);
                var p = cc();
                return s.flags |= 1, typeof f == "object" && f !== null && typeof f.render == "function" && f.$$typeof === void 0 ? (s.tag = 1, s.memoizedState = null, s.updateQueue = null, _t(u) ? (p = !0, ma(s)) : p = !1, s.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, nc(s), f.updater = Na, s.stateNode = f, f._reactInternals = s, gc(s, u, n, o), s = xc(null, s, u, !0, p, o)) : (s.tag = 0, ze && p && Wu(s), kt(null, s, f, o), s = s.child), s;
            case 16:
                u = s.elementType;
                e: {
                    switch (La(n, s), n = s.pendingProps, f = u._init, u = f(u._payload), s.type = u, f = s.tag = lb(u), n = sn(u, n), f) {
                        case 0:
                            s = wc(null, s, u, n, o);
                            break e;
                        case 1:
                            s = Am(null, s, u, n, o);
                            break e;
                        case 11:
                            s = Tm(null, s, u, n, o);
                            break e;
                        case 14:
                            s = Cm(null, s, u, sn(u.type, n), o);
                            break e
                    }
                    throw Error(r(306, u, ""))
                }
                return s;
            case 0:
                return u = s.type, f = s.pendingProps, f = s.elementType === u ? f : sn(u, f), wc(n, s, u, f, o);
            case 1:
                return u = s.type, f = s.pendingProps, f = s.elementType === u ? f : sn(u, f), Am(n, s, u, f, o);
            case 3:
                e: {
                    if (Nm(s), n === null) throw Error(r(387));u = s.pendingProps,
                    p = s.memoizedState,
                    f = p.element,
                    Wp(n, s),
                    Ea(s, u, null, o);
                    var v = s.memoizedState;
                    if (u = v.element, p.isDehydrated)
                        if (p = {
                                element: u,
                                isDehydrated: !1,
                                cache: v.cache,
                                pendingSuspenseBoundaries: v.pendingSuspenseBoundaries,
                                transitions: v.transitions
                            }, s.updateQueue.baseState = p, s.memoizedState = p, s.flags & 256) {
                            f = js(Error(r(423)), s), s = Om(n, s, u, o, f);
                            break e
                        } else if (u !== f) {
                        f = js(Error(r(424)), s), s = Om(n, s, u, o, f);
                        break e
                    } else
                        for (Bt = Zn(s.stateNode.containerInfo.firstChild), Vt = s, ze = !0, rn = null, o = Hp(s, null, u, o), s.child = o; o;) o.flags = o.flags & -3 | 4096, o = o.sibling;
                    else {
                        if (Ns(), u === f) {
                            s = jn(n, s, o);
                            break e
                        }
                        kt(n, s, u, o)
                    }
                    s = s.child
                }
                return s;
            case 5:
                return Gp(s), n === null && Gu(s), u = s.type, f = s.pendingProps, p = n !== null ? n.memoizedProps : null, v = f.children, Bu(u, f) ? v = null : p !== null && Bu(u, p) && (s.flags |= 32), Rm(n, s), kt(n, s, v, o), s.child;
            case 6:
                return n === null && Gu(s), null;
            case 13:
                return Lm(n, s, o);
            case 4:
                return rc(s, s.stateNode.containerInfo), u = s.pendingProps, n === null ? s.child = Os(s, null, u, o) : kt(n, s, u, o), s.child;
            case 11:
                return u = s.type, f = s.pendingProps, f = s.elementType === u ? f : sn(u, f), Tm(n, s, u, f, o);
            case 7:
                return kt(n, s, s.pendingProps, o), s.child;
            case 8:
                return kt(n, s, s.pendingProps.children, o), s.child;
            case 12:
                return kt(n, s, s.pendingProps.children, o), s.child;
            case 10:
                e: {
                    if (u = s.type._context, f = s.pendingProps, p = s.memoizedProps, v = f.value, Ve(Sa, u._currentValue), u._currentValue = v, p !== null)
                        if (nn(p.value, v)) {
                            if (p.children === f.children && !Pt.current) {
                                s = jn(n, s, o);
                                break e
                            }
                        } else
                            for (p = s.child, p !== null && (p.return = s); p !== null;) {
                                var E = p.dependencies;
                                if (E !== null) {
                                    v = p.child;
                                    for (var C = E.firstContext; C !== null;) {
                                        if (C.context === u) {
                                            if (p.tag === 1) {
                                                C = Dn(-1, o & -o), C.tag = 2;
                                                var I = p.updateQueue;
                                                if (I !== null) {
                                                    I = I.shared;
                                                    var H = I.pending;
                                                    H === null ? C.next = C : (C.next = H.next, H.next = C), I.pending = C
                                                }
                                            }
                                            p.lanes |= o, C = p.alternate, C !== null && (C.lanes |= o), ec(p.return, o, s), E.lanes |= o;
                                            break
                                        }
                                        C = C.next
                                    }
                                } else if (p.tag === 10) v = p.type === s.type ? null : p.child;
                                else if (p.tag === 18) {
                                    if (v = p.return, v === null) throw Error(r(341));
                                    v.lanes |= o, E = v.alternate, E !== null && (E.lanes |= o), ec(v, o, s), v = p.sibling
                                } else v = p.child;
                                if (v !== null) v.return = p;
                                else
                                    for (v = p; v !== null;) {
                                        if (v === s) {
                                            v = null;
                                            break
                                        }
                                        if (p = v.sibling, p !== null) {
                                            p.return = v.return, v = p;
                                            break
                                        }
                                        v = v.return
                                    }
                                p = v
                            }
                    kt(n, s, f.children, o),
                    s = s.child
                }
                return s;
            case 9:
                return f = s.type, u = s.pendingProps.children, Ms(s, o), f = qt(f), u = u(f), s.flags |= 1, kt(n, s, u, o), s.child;
            case 14:
                return u = s.type, f = sn(u, s.pendingProps), f = sn(u.type, f), Cm(n, s, u, f, o);
            case 15:
                return Pm(n, s, s.type, s.pendingProps, o);
            case 17:
                return u = s.type, f = s.pendingProps, f = s.elementType === u ? f : sn(u, f), La(n, s), s.tag = 1, _t(u) ? (n = !0, ma(s)) : n = !1, Ms(s, o), vm(s, u, f), gc(s, u, f, o), xc(null, s, u, !0, n, o);
            case 19:
                return Dm(n, s, o);
            case 22:
                return _m(n, s, o)
        }
        throw Error(r(156, s.tag))
    };

    function ig(n, s) {
        return Fh(n, s)
    }

    function ab(n, s, o, u) {
        this.tag = n, this.key = o, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = s, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = u, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
    }

    function Qt(n, s, o, u) {
        return new ab(n, s, o, u)
    }

    function Bc(n) {
        return n = n.prototype, !(!n || !n.isReactComponent)
    }

    function lb(n) {
        if (typeof n == "function") return Bc(n) ? 1 : 0;
        if (n != null) {
            if (n = n.$$typeof, n === Ae) return 11;
            if (n === Fe) return 14
        }
        return 2
    }

    function cr(n, s) {
        var o = n.alternate;
        return o === null ? (o = Qt(n.tag, s, n.key, n.mode), o.elementType = n.elementType, o.type = n.type, o.stateNode = n.stateNode, o.alternate = n, n.alternate = o) : (o.pendingProps = s, o.type = n.type, o.flags = 0, o.subtreeFlags = 0, o.deletions = null), o.flags = n.flags & 14680064, o.childLanes = n.childLanes, o.lanes = n.lanes, o.child = n.child, o.memoizedProps = n.memoizedProps, o.memoizedState = n.memoizedState, o.updateQueue = n.updateQueue, s = n.dependencies, o.dependencies = s === null ? null : {
            lanes: s.lanes,
            firstContext: s.firstContext
        }, o.sibling = n.sibling, o.index = n.index, o.ref = n.ref, o
    }

    function Ha(n, s, o, u, f, p) {
        var v = 2;
        if (u = n, typeof n == "function") Bc(n) && (v = 1);
        else if (typeof n == "string") v = 5;
        else e: switch (n) {
            case G:
                return qr(o.children, f, p, s);
            case j:
                v = 8, f |= 8;
                break;
            case J:
                return n = Qt(12, o, s, f | 2), n.elementType = J, n.lanes = p, n;
            case je:
                return n = Qt(13, o, s, f), n.elementType = je, n.lanes = p, n;
            case Ne:
                return n = Qt(19, o, s, f), n.elementType = Ne, n.lanes = p, n;
            case fe:
                return qa(o, f, p, s);
            default:
                if (typeof n == "object" && n !== null) switch (n.$$typeof) {
                    case de:
                        v = 10;
                        break e;
                    case me:
                        v = 9;
                        break e;
                    case Ae:
                        v = 11;
                        break e;
                    case Fe:
                        v = 14;
                        break e;
                    case xe:
                        v = 16, u = null;
                        break e
                }
                throw Error(r(130, n == null ? n : typeof n, ""))
        }
        return s = Qt(v, o, s, f), s.elementType = n, s.type = u, s.lanes = p, s
    }

    function qr(n, s, o, u) {
        return n = Qt(7, n, u, s), n.lanes = o, n
    }

    function qa(n, s, o, u) {
        return n = Qt(22, n, u, s), n.elementType = fe, n.lanes = o, n.stateNode = {
            isHidden: !1
        }, n
    }

    function Uc(n, s, o) {
        return n = Qt(6, n, null, s), n.lanes = o, n
    }

    function zc(n, s, o) {
        return s = Qt(4, n.children !== null ? n.children : [], n.key, s), s.lanes = o, s.stateNode = {
            containerInfo: n.containerInfo,
            pendingChildren: null,
            implementation: n.implementation
        }, s
    }

    function ub(n, s, o, u, f) {
        this.tag = s, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = mu(0), this.expirationTimes = mu(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = mu(0), this.identifierPrefix = u, this.onRecoverableError = f, this.mutableSourceEagerHydrationData = null
    }

    function $c(n, s, o, u, f, p, v, E, C) {
        return n = new ub(n, s, o, E, C), s === 1 ? (s = 1, p === !0 && (s |= 8)) : s = 0, p = Qt(3, null, null, s), n.current = p, p.stateNode = n, p.memoizedState = {
            element: u,
            isDehydrated: o,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null
        }, nc(p), n
    }

    function cb(n, s, o) {
        var u = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: K,
            key: u == null ? null : "" + u,
            children: n,
            containerInfo: s,
            implementation: o
        }
    }

    function og(n) {
        if (!n) return tr;
        n = n._reactInternals;
        e: {
            if (Lr(n) !== n || n.tag !== 1) throw Error(r(170));
            var s = n;do {
                switch (s.tag) {
                    case 3:
                        s = s.stateNode.context;
                        break e;
                    case 1:
                        if (_t(s.type)) {
                            s = s.stateNode.__reactInternalMemoizedMergedChildContext;
                            break e
                        }
                }
                s = s.return
            } while (s !== null);
            throw Error(r(171))
        }
        if (n.tag === 1) {
            var o = n.type;
            if (_t(o)) return Mp(n, o, s)
        }
        return s
    }

    function ag(n, s, o, u, f, p, v, E, C) {
        return n = $c(o, u, !0, n, f, p, v, E, C), n.context = og(null), o = n.current, u = Et(), f = lr(o), p = Dn(u, f), p.callback = s ? ? null, sr(o, p, f), n.current.lanes = f, Si(n, f, u), Nt(n, u), n
    }

    function Wa(n, s, o, u) {
        var f = s.current,
            p = Et(),
            v = lr(f);
        return o = og(o), s.context === null ? s.context = o : s.pendingContext = o, s = Dn(p, v), s.payload = {
            element: n
        }, u = u === void 0 ? null : u, u !== null && (s.callback = u), n = sr(f, s, v), n !== null && (ln(n, f, v, p), ka(n, f, v)), v
    }

    function Ka(n) {
        if (n = n.current, !n.child) return null;
        switch (n.child.tag) {
            case 5:
                return n.child.stateNode;
            default:
                return n.child.stateNode
        }
    }

    function lg(n, s) {
        if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
            var o = n.retryLane;
            n.retryLane = o !== 0 && o < s ? o : s
        }
    }

    function Hc(n, s) {
        lg(n, s), (n = n.alternate) && lg(n, s)
    }

    function db() {
        return null
    }
    var ug = typeof reportError == "function" ? reportError : function(n) {
        console.error(n)
    };

    function qc(n) {
        this._internalRoot = n
    }
    Qa.prototype.render = qc.prototype.render = function(n) {
        var s = this._internalRoot;
        if (s === null) throw Error(r(409));
        Wa(n, s, null, null)
    }, Qa.prototype.unmount = qc.prototype.unmount = function() {
        var n = this._internalRoot;
        if (n !== null) {
            this._internalRoot = null;
            var s = n.containerInfo;
            zr(function() {
                Wa(null, n, null, null)
            }), s[An] = null
        }
    };

    function Qa(n) {
        this._internalRoot = n
    }
    Qa.prototype.unstable_scheduleHydration = function(n) {
        if (n) {
            var s = Wh();
            n = {
                blockedOn: null,
                target: n,
                priority: s
            };
            for (var o = 0; o < Yn.length && s !== 0 && s < Yn[o].priority; o++);
            Yn.splice(o, 0, n), o === 0 && Gh(n)
        }
    };

    function Wc(n) {
        return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11)
    }

    function Ga(n) {
        return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "))
    }

    function cg() {}

    function fb(n, s, o, u, f) {
        if (f) {
            if (typeof u == "function") {
                var p = u;
                u = function() {
                    var I = Ka(v);
                    p.call(I)
                }
            }
            var v = ag(s, u, n, 0, null, !1, !1, "", cg);
            return n._reactRootContainer = v, n[An] = v.current, Di(n.nodeType === 8 ? n.parentNode : n), zr(), v
        }
        for (; f = n.lastChild;) n.removeChild(f);
        if (typeof u == "function") {
            var E = u;
            u = function() {
                var I = Ka(C);
                E.call(I)
            }
        }
        var C = $c(n, 0, !1, null, null, !1, !1, "", cg);
        return n._reactRootContainer = C, n[An] = C.current, Di(n.nodeType === 8 ? n.parentNode : n), zr(function() {
            Wa(s, C, o, u)
        }), C
    }

    function Ya(n, s, o, u, f) {
        var p = o._reactRootContainer;
        if (p) {
            var v = p;
            if (typeof f == "function") {
                var E = f;
                f = function() {
                    var C = Ka(v);
                    E.call(C)
                }
            }
            Wa(s, v, n, f)
        } else v = fb(o, s, n, f, u);
        return Ka(v)
    }
    Hh = function(n) {
        switch (n.tag) {
            case 3:
                var s = n.stateNode;
                if (s.current.memoizedState.isDehydrated) {
                    var o = xi(s.pendingLanes);
                    o !== 0 && (gu(s, o | 1), Nt(s, Ge()), (Ce & 6) === 0 && (Vs = Ge() + 500, nr()))
                }
                break;
            case 13:
                zr(function() {
                    var u = Mn(n, 1);
                    if (u !== null) {
                        var f = Et();
                        ln(u, n, 1, f)
                    }
                }), Hc(n, 1)
        }
    }, yu = function(n) {
        if (n.tag === 13) {
            var s = Mn(n, 134217728);
            if (s !== null) {
                var o = Et();
                ln(s, n, 134217728, o)
            }
            Hc(n, 134217728)
        }
    }, qh = function(n) {
        if (n.tag === 13) {
            var s = lr(n),
                o = Mn(n, s);
            if (o !== null) {
                var u = Et();
                ln(o, n, s, u)
            }
            Hc(n, s)
        }
    }, Wh = function() {
        return De
    }, Kh = function(n, s) {
        var o = De;
        try {
            return De = n, s()
        } finally {
            De = o
        }
    }, uu = function(n, s, o) {
        switch (s) {
            case "input":
                if (tu(n, o), s = o.name, o.type === "radio" && s != null) {
                    for (o = n; o.parentNode;) o = o.parentNode;
                    for (o = o.querySelectorAll("input[name=" + JSON.stringify("" + s) + '][type="radio"]'), s = 0; s < o.length; s++) {
                        var u = o[s];
                        if (u !== n && u.form === n.form) {
                            var f = ha(u);
                            if (!f) throw Error(r(90));
                            Or(u), tu(u, f)
                        }
                    }
                }
                break;
            case "textarea":
                bh(n, o);
                break;
            case "select":
                s = o.value, s != null && gs(n, !!o.multiple, s, !1)
        }
    }, Nh = Ic, Oh = zr;
    var hb = {
            usingClientEntryPoint: !1,
            Events: [Fi, Cs, ha, Rh, Ah, Ic]
        },
        Ji = {
            findFiberByHostInstance: Mr,
            bundleType: 0,
            version: "18.3.1",
            rendererPackageName: "react-dom"
        },
        pb = {
            bundleType: Ji.bundleType,
            version: Ji.version,
            rendererPackageName: Ji.rendererPackageName,
            rendererConfig: Ji.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: L.ReactCurrentDispatcher,
            findHostInstanceByFiber: function(n) {
                return n = jh(n), n === null ? null : n.stateNode
            },
            findFiberByHostInstance: Ji.findFiberByHostInstance || db,
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
        };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var Xa = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!Xa.isDisabled && Xa.supportsFiber) try {
            Qo = Xa.inject(pb), mn = Xa
        } catch {}
    }
    return Ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = hb, Ot.createPortal = function(n, s) {
        var o = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!Wc(s)) throw Error(r(200));
        return cb(n, s, null, o)
    }, Ot.createRoot = function(n, s) {
        if (!Wc(n)) throw Error(r(299));
        var o = !1,
            u = "",
            f = ug;
        return s != null && (s.unstable_strictMode === !0 && (o = !0), s.identifierPrefix !== void 0 && (u = s.identifierPrefix), s.onRecoverableError !== void 0 && (f = s.onRecoverableError)), s = $c(n, 1, !1, null, null, o, !1, u, f), n[An] = s.current, Di(n.nodeType === 8 ? n.parentNode : n), new qc(s)
    }, Ot.findDOMNode = function(n) {
        if (n == null) return null;
        if (n.nodeType === 1) return n;
        var s = n._reactInternals;
        if (s === void 0) throw typeof n.render == "function" ? Error(r(188)) : (n = Object.keys(n).join(","), Error(r(268, n)));
        return n = jh(s), n = n === null ? null : n.stateNode, n
    }, Ot.flushSync = function(n) {
        return zr(n)
    }, Ot.hydrate = function(n, s, o) {
        if (!Ga(s)) throw Error(r(200));
        return Ya(null, n, s, !0, o)
    }, Ot.hydrateRoot = function(n, s, o) {
        if (!Wc(n)) throw Error(r(405));
        var u = o != null && o.hydratedSources || null,
            f = !1,
            p = "",
            v = ug;
        if (o != null && (o.unstable_strictMode === !0 && (f = !0), o.identifierPrefix !== void 0 && (p = o.identifierPrefix), o.onRecoverableError !== void 0 && (v = o.onRecoverableError)), s = ag(s, null, n, 1, o ? ? null, f, !1, p, v), n[An] = s.current, Di(n), u)
            for (n = 0; n < u.length; n++) o = u[n], f = o._getVersion, f = f(o._source), s.mutableSourceEagerHydrationData == null ? s.mutableSourceEagerHydrationData = [o, f] : s.mutableSourceEagerHydrationData.push(o, f);
        return new Qa(s)
    }, Ot.render = function(n, s, o) {
        if (!Ga(s)) throw Error(r(200));
        return Ya(null, n, s, !1, o)
    }, Ot.unmountComponentAtNode = function(n) {
        if (!Ga(n)) throw Error(r(40));
        return n._reactRootContainer ? (zr(function() {
            Ya(null, null, n, !1, function() {
                n._reactRootContainer = null, n[An] = null
            })
        }), !0) : !1
    }, Ot.unstable_batchedUpdates = Ic, Ot.unstable_renderSubtreeIntoContainer = function(n, s, o, u) {
        if (!Ga(o)) throw Error(r(200));
        if (n == null || n._reactInternals === void 0) throw Error(r(38));
        return Ya(n, s, o, !1, u)
    }, Ot.version = "18.3.1-next-f1338f8080-20240426", Ot
}
var wg;

function c0() {
    if (wg) return Yc.exports;
    wg = 1;

    function t() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)
        } catch (e) {
            console.error(e)
        }
    }
    return t(), Yc.exports = Eb(), Yc.exports
}
var xg;

function Tb() {
    if (xg) return Za;
    xg = 1;
    var t = c0();
    return Za.createRoot = t.createRoot, Za.hydrateRoot = t.hydrateRoot, Za
}
var Cb = Tb();
const Pb = u0(Cb),
    _b = 20,
    Rb = 1e6,
    zn = {
        ADD_TOAST: "ADD_TOAST",
        UPDATE_TOAST: "UPDATE_TOAST",
        DISMISS_TOAST: "DISMISS_TOAST",
        REMOVE_TOAST: "REMOVE_TOAST"
    };
let Zc = 0;

function Ab() {
    return Zc = (Zc + 1) % Number.MAX_VALUE, Zc.toString()
}
const ed = new Map,
    Sg = t => {
        if (ed.has(t)) return;
        const e = setTimeout(() => {
            ed.delete(t), po({
                type: zn.REMOVE_TOAST,
                toastId: t
            })
        }, Rb);
        ed.set(t, e)
    },
    Nb = (t, e) => {
        switch (e.type) {
            case zn.ADD_TOAST:
                return { ...t,
                    toasts: [e.toast, ...t.toasts].slice(0, _b)
                };
            case zn.UPDATE_TOAST:
                return { ...t,
                    toasts: t.toasts.map(r => r.id === e.toast.id ? { ...r,
                        ...e.toast
                    } : r)
                };
            case zn.DISMISS_TOAST:
                {
                    const {
                        toastId: r
                    } = e;
                    return r ? Sg(r) : t.toasts.forEach(i => {
                        Sg(i.id)
                    }),
                    { ...t,
                        toasts: t.toasts.map(i => i.id === r || r === void 0 ? { ...i,
                            open: !1
                        } : i)
                    }
                }
            case zn.REMOVE_TOAST:
                return e.toastId === void 0 ? { ...t,
                    toasts: []
                } : { ...t,
                    toasts: t.toasts.filter(r => r.id !== e.toastId)
                }
        }
    },
    cl = [];
let dl = {
    toasts: []
};

function po(t) {
    dl = Nb(dl, t), cl.forEach(e => {
        e(dl)
    })
}

function Ob({ ...t
}) {
    const e = Ab(),
        r = a => po({
            type: zn.UPDATE_TOAST,
            toast: { ...a,
                id: e
            }
        }),
        i = () => po({
            type: zn.DISMISS_TOAST,
            toastId: e
        });
    return po({
        type: zn.ADD_TOAST,
        toast: { ...t,
            id: e,
            open: !0,
            onOpenChange: a => {
                a || i()
            }
        }
    }), {
        id: e,
        dismiss: i,
        update: r
    }
}

function Lb() {
    const [t, e] = D.useState(dl);
    return D.useEffect(() => (cl.push(e), () => {
        const r = cl.indexOf(e);
        r > -1 && cl.splice(r, 1)
    }), [t]), { ...t,
        toast: Ob,
        dismiss: r => po({
            type: zn.DISMISS_TOAST,
            toastId: r
        })
    }
}

function d0(t) {
    var e, r, i = "";
    if (typeof t == "string" || typeof t == "number") i += t;
    else if (typeof t == "object")
        if (Array.isArray(t)) {
            var a = t.length;
            for (e = 0; e < a; e++) t[e] && (r = d0(t[e])) && (i && (i += " "), i += r)
        } else
            for (r in t) t[r] && (i && (i += " "), i += r);
    return i
}

function f0() {
    for (var t, e, r = 0, i = "", a = arguments.length; r < a; r++)(t = arguments[r]) && (e = d0(t)) && (i && (i += " "), i += e);
    return i
}
const bg = t => typeof t == "boolean" ? `${t}` : t === 0 ? "0" : t,
    kg = f0,
    Mb = (t, e) => r => {
        var i;
        if ((e == null ? void 0 : e.variants) == null) return kg(t, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
        const {
            variants: a,
            defaultVariants: l
        } = e, c = Object.keys(a).map(m => {
            const g = r == null ? void 0 : r[m],
                y = l == null ? void 0 : l[m];
            if (g === null) return null;
            const w = bg(g) || bg(y);
            return a[m][w]
        }), d = r && Object.entries(r).reduce((m, g) => {
            let [y, w] = g;
            return w === void 0 || (m[y] = w), m
        }, {}), h = e == null || (i = e.compoundVariants) === null || i === void 0 ? void 0 : i.reduce((m, g) => {
            let {
                class: y,
                className: w,
                ...k
            } = g;
            return Object.entries(k).every(S => {
                let [b, x] = S;
                return Array.isArray(x) ? x.includes({ ...l,
                    ...d
                }[b]) : { ...l,
                    ...d
                }[b] === x
            }) ? [...m, y, w] : m
        }, []);
        return kg(t, c, h, r == null ? void 0 : r.class, r == null ? void 0 : r.className)
    };
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Db = t => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
    h0 = (...t) => t.filter((e, r, i) => !!e && e.trim() !== "" && i.indexOf(e) === r).join(" ").trim();
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var jb = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ib = D.forwardRef(({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: i,
    className: a = "",
    children: l,
    iconNode: c,
    ...d
}, h) => D.createElement("svg", {
    ref: h,
    ...jb,
    width: e,
    height: e,
    stroke: t,
    strokeWidth: i ? Number(r) * 24 / Number(e) : r,
    className: h0("lucide", a),
    ...d
}, [...c.map(([m, g]) => D.createElement(m, g)), ...Array.isArray(l) ? l : [l]]));
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bt = (t, e) => {
    const r = D.forwardRef(({
        className: i,
        ...a
    }, l) => D.createElement(Ib, {
        ref: l,
        iconNode: e,
        className: h0(`lucide-${Db(t)}`, i),
        ...a
    }));
    return r.displayName = `${t}`, r
};
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fb = [
        ["path", {
            d: "M12 5v14",
            key: "s699le"
        }],
        ["path", {
            d: "m19 12-7 7-7-7",
            key: "1idqje"
        }]
    ],
    Vb = bt("ArrowDown", Fb);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bb = [
        ["path", {
            d: "M8 3 4 7l4 4",
            key: "9rb6wj"
        }],
        ["path", {
            d: "M4 7h16",
            key: "6tx8e3"
        }],
        ["path", {
            d: "m16 21 4-4-4-4",
            key: "siv7j2"
        }],
        ["path", {
            d: "M20 17H4",
            key: "h6l3hr"
        }]
    ],
    Ub = bt("ArrowLeftRight", Bb);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zb = [
        ["path", {
            d: "M7 7h10v10",
            key: "1tivn9"
        }],
        ["path", {
            d: "M7 17 17 7",
            key: "1vkiza"
        }]
    ],
    $b = bt("ArrowUpRight", zb);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hb = [
        ["path", {
            d: "M21.801 10A10 10 0 1 1 17 3.335",
            key: "yps3ct"
        }],
        ["path", {
            d: "m9 11 3 3L22 4",
            key: "1pflzl"
        }]
    ],
    qb = bt("CircleCheckBig", Hb);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wb = [
        ["path", {
            d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
            key: "1rqfz7"
        }],
        ["path", {
            d: "M14 2v4a2 2 0 0 0 2 2h4",
            key: "tnqrlb"
        }],
        ["path", {
            d: "m9 15 2 2 4-4",
            key: "1grp1n"
        }]
    ],
    Kb = bt("FileCheck", Wb);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qb = [
        ["path", {
            d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
            key: "1rqfz7"
        }],
        ["path", {
            d: "M14 2v4a2 2 0 0 0 2 2h4",
            key: "tnqrlb"
        }],
        ["path", {
            d: "M10 9H8",
            key: "b1mrlr"
        }],
        ["path", {
            d: "M16 13H8",
            key: "t4e002"
        }],
        ["path", {
            d: "M16 17H8",
            key: "z1uh3a"
        }]
    ],
    Gb = bt("FileText", Qb);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yb = [
        ["path", {
            d: "m11 17 2 2a1 1 0 1 0 3-3",
            key: "efffak"
        }],
        ["path", {
            d: "m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4",
            key: "9pr0kb"
        }],
        ["path", {
            d: "m21 3 1 11h-2",
            key: "1tisrp"
        }],
        ["path", {
            d: "M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3",
            key: "1uvwmv"
        }],
        ["path", {
            d: "M3 4h8",
            key: "1ep09j"
        }]
    ],
    Xb = bt("Handshake", Yb);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jb = [
        ["line", {
            x1: "3",
            x2: "21",
            y1: "22",
            y2: "22",
            key: "j8o0r"
        }],
        ["line", {
            x1: "6",
            x2: "6",
            y1: "18",
            y2: "11",
            key: "10tf0k"
        }],
        ["line", {
            x1: "10",
            x2: "10",
            y1: "18",
            y2: "11",
            key: "54lgf6"
        }],
        ["line", {
            x1: "14",
            x2: "14",
            y1: "18",
            y2: "11",
            key: "380y"
        }],
        ["line", {
            x1: "18",
            x2: "18",
            y1: "18",
            y2: "11",
            key: "1kevvc"
        }],
        ["polygon", {
            points: "12 2 20 7 4 7",
            key: "jkujk7"
        }]
    ],
    Zb = bt("Landmark", Jb);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ek = [
        ["line", {
            x1: "4",
            x2: "20",
            y1: "12",
            y2: "12",
            key: "1e0a9i"
        }],
        ["line", {
            x1: "4",
            x2: "20",
            y1: "6",
            y2: "6",
            key: "1owob3"
        }],
        ["line", {
            x1: "4",
            x2: "20",
            y1: "18",
            y2: "18",
            key: "yk5zj1"
        }]
    ],
    tk = bt("Menu", ek);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nk = [
        ["path", {
            d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
            key: "foiqr5"
        }]
    ],
    rk = bt("Phone", nk);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sk = [
        ["path", {
            d: "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
            key: "rib7q0"
        }],
        ["path", {
            d: "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
            key: "1ymkrd"
        }]
    ],
    ik = bt("Quote", sk);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ok = [
        ["circle", {
            cx: "11",
            cy: "11",
            r: "8",
            key: "4ej97u"
        }],
        ["path", {
            d: "m21 21-4.3-4.3",
            key: "1qie3q"
        }]
    ],
    ak = bt("Search", ok);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lk = [
        ["path", {
            d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
            key: "1ffxy3"
        }],
        ["path", {
            d: "m21.854 2.147-10.94 10.939",
            key: "12cjpa"
        }]
    ],
    uk = bt("Send", lk);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ck = [
        ["polyline", {
            points: "22 7 13.5 15.5 8.5 10.5 2 17",
            key: "126l90"
        }],
        ["polyline", {
            points: "16 7 22 7 22 13",
            key: "kwv8wd"
        }]
    ],
    dk = bt("TrendingUp", ck);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fk = [
        ["path", {
            d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
            key: "1yyitq"
        }],
        ["circle", {
            cx: "9",
            cy: "7",
            r: "4",
            key: "nufk8"
        }],
        ["path", {
            d: "M22 21v-2a4 4 0 0 0-3-3.87",
            key: "kshegd"
        }],
        ["path", {
            d: "M16 3.13a4 4 0 0 1 0 7.75",
            key: "1da9ce"
        }]
    ],
    hk = bt("Users", fk);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pk = [
        ["path", {
            d: "M18 6 6 18",
            key: "1bl5f8"
        }],
        ["path", {
            d: "m6 6 12 12",
            key: "d8bk6v"
        }]
    ],
    p0 = bt("X", pk),
    mk = (t, e) => {
        const r = new Array(t.length + e.length);
        for (let i = 0; i < t.length; i++) r[i] = t[i];
        for (let i = 0; i < e.length; i++) r[t.length + i] = e[i];
        return r
    },
    gk = (t, e) => ({
        classGroupId: t,
        validator: e
    }),
    m0 = (t = new Map, e = null, r) => ({
        nextPart: t,
        validators: e,
        classGroupId: r
    }),
    El = "-",
    Eg = [],
    yk = "arbitrary..",
    vk = t => {
        const e = xk(t),
            {
                conflictingClassGroups: r,
                conflictingClassGroupModifiers: i
            } = t;
        return {
            getClassGroupId: c => {
                if (c.startsWith("[") && c.endsWith("]")) return wk(c);
                const d = c.split(El),
                    h = d[0] === "" && d.length > 1 ? 1 : 0;
                return g0(d, h, e)
            },
            getConflictingClassGroupIds: (c, d) => {
                if (d) {
                    const h = i[c],
                        m = r[c];
                    return h ? m ? mk(m, h) : h : m || Eg
                }
                return r[c] || Eg
            }
        }
    },
    g0 = (t, e, r) => {
        if (t.length - e === 0) return r.classGroupId;
        const a = t[e],
            l = r.nextPart.get(a);
        if (l) {
            const m = g0(t, e + 1, l);
            if (m) return m
        }
        const c = r.validators;
        if (c === null) return;
        const d = e === 0 ? t.join(El) : t.slice(e).join(El),
            h = c.length;
        for (let m = 0; m < h; m++) {
            const g = c[m];
            if (g.validator(d)) return g.classGroupId
        }
    },
    wk = t => t.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
        const e = t.slice(1, -1),
            r = e.indexOf(":"),
            i = e.slice(0, r);
        return i ? yk + i : void 0
    })(),
    xk = t => {
        const {
            theme: e,
            classGroups: r
        } = t;
        return Sk(r, e)
    },
    Sk = (t, e) => {
        const r = m0();
        for (const i in t) {
            const a = t[i];
            xf(a, r, i, e)
        }
        return r
    },
    xf = (t, e, r, i) => {
        const a = t.length;
        for (let l = 0; l < a; l++) {
            const c = t[l];
            bk(c, e, r, i)
        }
    },
    bk = (t, e, r, i) => {
        if (typeof t == "string") {
            kk(t, e, r);
            return
        }
        if (typeof t == "function") {
            Ek(t, e, r, i);
            return
        }
        Tk(t, e, r, i)
    },
    kk = (t, e, r) => {
        const i = t === "" ? e : y0(e, t);
        i.classGroupId = r
    },
    Ek = (t, e, r, i) => {
        if (Ck(t)) {
            xf(t(i), e, r, i);
            return
        }
        e.validators === null && (e.validators = []), e.validators.push(gk(r, t))
    },
    Tk = (t, e, r, i) => {
        const a = Object.entries(t),
            l = a.length;
        for (let c = 0; c < l; c++) {
            const [d, h] = a[c];
            xf(h, y0(e, d), r, i)
        }
    },
    y0 = (t, e) => {
        let r = t;
        const i = e.split(El),
            a = i.length;
        for (let l = 0; l < a; l++) {
            const c = i[l];
            let d = r.nextPart.get(c);
            d || (d = m0(), r.nextPart.set(c, d)), r = d
        }
        return r
    },
    Ck = t => "isThemeGetter" in t && t.isThemeGetter === !0,
    Pk = t => {
        if (t < 1) return {
            get: () => {},
            set: () => {}
        };
        let e = 0,
            r = Object.create(null),
            i = Object.create(null);
        const a = (l, c) => {
            r[l] = c, e++, e > t && (e = 0, i = r, r = Object.create(null))
        };
        return {
            get(l) {
                let c = r[l];
                if (c !== void 0) return c;
                if ((c = i[l]) !== void 0) return a(l, c), c
            },
            set(l, c) {
                l in r ? r[l] = c : a(l, c)
            }
        }
    },
    Cd = "!",
    Tg = ":",
    _k = [],
    Cg = (t, e, r, i, a) => ({
        modifiers: t,
        hasImportantModifier: e,
        baseClassName: r,
        maybePostfixModifierPosition: i,
        isExternal: a
    }),
    Rk = t => {
        const {
            prefix: e,
            experimentalParseClassName: r
        } = t;
        let i = a => {
            const l = [];
            let c = 0,
                d = 0,
                h = 0,
                m;
            const g = a.length;
            for (let b = 0; b < g; b++) {
                const x = a[b];
                if (c === 0 && d === 0) {
                    if (x === Tg) {
                        l.push(a.slice(h, b)), h = b + 1;
                        continue
                    }
                    if (x === "/") {
                        m = b;
                        continue
                    }
                }
                x === "[" ? c++ : x === "]" ? c-- : x === "(" ? d++ : x === ")" && d--
            }
            const y = l.length === 0 ? a : a.slice(h);
            let w = y,
                k = !1;
            y.endsWith(Cd) ? (w = y.slice(0, -1), k = !0) : y.startsWith(Cd) && (w = y.slice(1), k = !0);
            const S = m && m > h ? m - h : void 0;
            return Cg(l, k, w, S)
        };
        if (e) {
            const a = e + Tg,
                l = i;
            i = c => c.startsWith(a) ? l(c.slice(a.length)) : Cg(_k, !1, c, void 0, !0)
        }
        if (r) {
            const a = i;
            i = l => r({
                className: l,
                parseClassName: a
            })
        }
        return i
    },
    Ak = t => {
        const e = new Map;
        return t.orderSensitiveModifiers.forEach((r, i) => {
            e.set(r, 1e6 + i)
        }), r => {
            const i = [];
            let a = [];
            for (let l = 0; l < r.length; l++) {
                const c = r[l],
                    d = c[0] === "[",
                    h = e.has(c);
                d || h ? (a.length > 0 && (a.sort(), i.push(...a), a = []), i.push(c)) : a.push(c)
            }
            return a.length > 0 && (a.sort(), i.push(...a)), i
        }
    },
    Nk = t => ({
        cache: Pk(t.cacheSize),
        parseClassName: Rk(t),
        sortModifiers: Ak(t),
        ...vk(t)
    }),
    Ok = /\s+/,
    Lk = (t, e) => {
        const {
            parseClassName: r,
            getClassGroupId: i,
            getConflictingClassGroupIds: a,
            sortModifiers: l
        } = e, c = [], d = t.trim().split(Ok);
        let h = "";
        for (let m = d.length - 1; m >= 0; m -= 1) {
            const g = d[m],
                {
                    isExternal: y,
                    modifiers: w,
                    hasImportantModifier: k,
                    baseClassName: S,
                    maybePostfixModifierPosition: b
                } = r(g);
            if (y) {
                h = g + (h.length > 0 ? " " + h : h);
                continue
            }
            let x = !!b,
                R = i(x ? S.substring(0, b) : S);
            if (!R) {
                if (!x) {
                    h = g + (h.length > 0 ? " " + h : h);
                    continue
                }
                if (R = i(S), !R) {
                    h = g + (h.length > 0 ? " " + h : h);
                    continue
                }
                x = !1
            }
            const V = w.length === 0 ? "" : w.length === 1 ? w[0] : l(w).join(":"),
                M = k ? V + Cd : V,
                L = M + R;
            if (c.indexOf(L) > -1) continue;
            c.push(L);
            const B = a(R, x);
            for (let K = 0; K < B.length; ++K) {
                const G = B[K];
                c.push(M + G)
            }
            h = g + (h.length > 0 ? " " + h : h)
        }
        return h
    },
    Mk = (...t) => {
        let e = 0,
            r, i, a = "";
        for (; e < t.length;)(r = t[e++]) && (i = v0(r)) && (a && (a += " "), a += i);
        return a
    },
    v0 = t => {
        if (typeof t == "string") return t;
        let e, r = "";
        for (let i = 0; i < t.length; i++) t[i] && (e = v0(t[i])) && (r && (r += " "), r += e);
        return r
    },
    Dk = (t, ...e) => {
        let r, i, a, l;
        const c = h => {
                const m = e.reduce((g, y) => y(g), t());
                return r = Nk(m), i = r.cache.get, a = r.cache.set, l = d, d(h)
            },
            d = h => {
                const m = i(h);
                if (m) return m;
                const g = Lk(h, r);
                return a(h, g), g
            };
        return l = c, (...h) => l(Mk(...h))
    },
    jk = [],
    rt = t => {
        const e = r => r[t] || jk;
        return e.isThemeGetter = !0, e
    },
    w0 = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
    x0 = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
    Ik = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,
    Fk = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
    Vk = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
    Bk = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
    Uk = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
    zk = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
    fr = t => Ik.test(t),
    Se = t => !!t && !Number.isNaN(Number(t)),
    hr = t => !!t && Number.isInteger(Number(t)),
    td = t => t.endsWith("%") && Se(t.slice(0, -1)),
    Fn = t => Fk.test(t),
    S0 = () => !0,
    $k = t => Vk.test(t) && !Bk.test(t),
    Sf = () => !1,
    Hk = t => Uk.test(t),
    qk = t => zk.test(t),
    Wk = t => !te(t) && !ne(t),
    Kk = t => Ar(t, E0, Sf),
    te = t => w0.test(t),
    Wr = t => Ar(t, T0, $k),
    Pg = t => Ar(t, tE, Se),
    Qk = t => Ar(t, P0, S0),
    Gk = t => Ar(t, C0, Sf),
    _g = t => Ar(t, b0, Sf),
    Yk = t => Ar(t, k0, qk),
    el = t => Ar(t, _0, Hk),
    ne = t => x0.test(t),
    eo = t => ps(t, T0),
    Xk = t => ps(t, C0),
    Rg = t => ps(t, b0),
    Jk = t => ps(t, E0),
    Zk = t => ps(t, k0),
    tl = t => ps(t, _0, !0),
    eE = t => ps(t, P0, !0),
    Ar = (t, e, r) => {
        const i = w0.exec(t);
        return i ? i[1] ? e(i[1]) : r(i[2]) : !1
    },
    ps = (t, e, r = !1) => {
        const i = x0.exec(t);
        return i ? i[1] ? e(i[1]) : r : !1
    },
    b0 = t => t === "position" || t === "percentage",
    k0 = t => t === "image" || t === "url",
    E0 = t => t === "length" || t === "size" || t === "bg-size",
    T0 = t => t === "length",
    tE = t => t === "number",
    C0 = t => t === "family-name",
    P0 = t => t === "number" || t === "weight",
    _0 = t => t === "shadow",
    nE = () => {
        const t = rt("color"),
            e = rt("font"),
            r = rt("text"),
            i = rt("font-weight"),
            a = rt("tracking"),
            l = rt("leading"),
            c = rt("breakpoint"),
            d = rt("container"),
            h = rt("spacing"),
            m = rt("radius"),
            g = rt("shadow"),
            y = rt("inset-shadow"),
            w = rt("text-shadow"),
            k = rt("drop-shadow"),
            S = rt("blur"),
            b = rt("perspective"),
            x = rt("aspect"),
            R = rt("ease"),
            V = rt("animate"),
            M = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
            L = () => ["center", "top", "bottom", "left", "right", "top-left", "left-top", "top-right", "right-top", "bottom-right", "right-bottom", "bottom-left", "left-bottom"],
            B = () => [...L(), ne, te],
            K = () => ["auto", "hidden", "clip", "visible", "scroll"],
            G = () => ["auto", "contain", "none"],
            j = () => [ne, te, h],
            J = () => [fr, "full", "auto", ...j()],
            de = () => [hr, "none", "subgrid", ne, te],
            me = () => ["auto", {
                span: ["full", hr, ne, te]
            }, hr, ne, te],
            Ae = () => [hr, "auto", ne, te],
            je = () => ["auto", "min", "max", "fr", ne, te],
            Ne = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"],
            Fe = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"],
            xe = () => ["auto", ...j()],
            fe = () => [fr, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...j()],
            W = () => [fr, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...j()],
            se = () => [fr, "screen", "full", "lh", "dvh", "lvh", "svh", "min", "max", "fit", ...j()],
            U = () => [t, ne, te],
            A = () => [...L(), Rg, _g, {
                position: [ne, te]
            }],
            z = () => ["no-repeat", {
                repeat: ["", "x", "y", "space", "round"]
            }],
            ye = () => ["auto", "cover", "contain", Jk, Kk, {
                size: [ne, te]
            }],
            ve = () => [td, eo, Wr],
            le = () => ["", "none", "full", m, ne, te],
            he = () => ["", Se, eo, Wr],
            Oe = () => ["solid", "dashed", "dotted", "double"],
            _e = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"],
            we = () => [Se, td, Rg, _g],
            ht = () => ["", "none", S, ne, te],
            Rn = () => ["none", Se, ne, te],
            Or = () => ["none", Se, ne, te],
            qn = () => [Se, ne, te],
            Wn = () => [fr, "full", ...j()];
        return {
            cacheSize: 500,
            theme: {
                animate: ["spin", "ping", "pulse", "bounce"],
                aspect: ["video"],
                blur: [Fn],
                breakpoint: [Fn],
                color: [S0],
                container: [Fn],
                "drop-shadow": [Fn],
                ease: ["in", "out", "in-out"],
                font: [Wk],
                "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
                "inset-shadow": [Fn],
                leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
                perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
                radius: [Fn],
                shadow: [Fn],
                spacing: ["px", Se],
                text: [Fn],
                "text-shadow": [Fn],
                tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
            },
            classGroups: {
                aspect: [{
                    aspect: ["auto", "square", fr, te, ne, x]
                }],
                container: ["container"],
                columns: [{
                    columns: [Se, te, ne, d]
                }],
                "break-after": [{
                    "break-after": M()
                }],
                "break-before": [{
                    "break-before": M()
                }],
                "break-inside": [{
                    "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
                }],
                "box-decoration": [{
                    "box-decoration": ["slice", "clone"]
                }],
                box: [{
                    box: ["border", "content"]
                }],
                display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
                sr: ["sr-only", "not-sr-only"],
                float: [{
                    float: ["right", "left", "none", "start", "end"]
                }],
                clear: [{
                    clear: ["left", "right", "both", "none", "start", "end"]
                }],
                isolation: ["isolate", "isolation-auto"],
                "object-fit": [{
                    object: ["contain", "cover", "fill", "none", "scale-down"]
                }],
                "object-position": [{
                    object: B()
                }],
                overflow: [{
                    overflow: K()
                }],
                "overflow-x": [{
                    "overflow-x": K()
                }],
                "overflow-y": [{
                    "overflow-y": K()
                }],
                overscroll: [{
                    overscroll: G()
                }],
                "overscroll-x": [{
                    "overscroll-x": G()
                }],
                "overscroll-y": [{
                    "overscroll-y": G()
                }],
                position: ["static", "fixed", "absolute", "relative", "sticky"],
                inset: [{
                    inset: J()
                }],
                "inset-x": [{
                    "inset-x": J()
                }],
                "inset-y": [{
                    "inset-y": J()
                }],
                start: [{
                    "inset-s": J(),
                    start: J()
                }],
                end: [{
                    "inset-e": J(),
                    end: J()
                }],
                "inset-bs": [{
                    "inset-bs": J()
                }],
                "inset-be": [{
                    "inset-be": J()
                }],
                top: [{
                    top: J()
                }],
                right: [{
                    right: J()
                }],
                bottom: [{
                    bottom: J()
                }],
                left: [{
                    left: J()
                }],
                visibility: ["visible", "invisible", "collapse"],
                z: [{
                    z: [hr, "auto", ne, te]
                }],
                basis: [{
                    basis: [fr, "full", "auto", d, ...j()]
                }],
                "flex-direction": [{
                    flex: ["row", "row-reverse", "col", "col-reverse"]
                }],
                "flex-wrap": [{
                    flex: ["nowrap", "wrap", "wrap-reverse"]
                }],
                flex: [{
                    flex: [Se, fr, "auto", "initial", "none", te]
                }],
                grow: [{
                    grow: ["", Se, ne, te]
                }],
                shrink: [{
                    shrink: ["", Se, ne, te]
                }],
                order: [{
                    order: [hr, "first", "last", "none", ne, te]
                }],
                "grid-cols": [{
                    "grid-cols": de()
                }],
                "col-start-end": [{
                    col: me()
                }],
                "col-start": [{
                    "col-start": Ae()
                }],
                "col-end": [{
                    "col-end": Ae()
                }],
                "grid-rows": [{
                    "grid-rows": de()
                }],
                "row-start-end": [{
                    row: me()
                }],
                "row-start": [{
                    "row-start": Ae()
                }],
                "row-end": [{
                    "row-end": Ae()
                }],
                "grid-flow": [{
                    "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
                }],
                "auto-cols": [{
                    "auto-cols": je()
                }],
                "auto-rows": [{
                    "auto-rows": je()
                }],
                gap: [{
                    gap: j()
                }],
                "gap-x": [{
                    "gap-x": j()
                }],
                "gap-y": [{
                    "gap-y": j()
                }],
                "justify-content": [{
                    justify: [...Ne(), "normal"]
                }],
                "justify-items": [{
                    "justify-items": [...Fe(), "normal"]
                }],
                "justify-self": [{
                    "justify-self": ["auto", ...Fe()]
                }],
                "align-content": [{
                    content: ["normal", ...Ne()]
                }],
                "align-items": [{
                    items: [...Fe(), {
                        baseline: ["", "last"]
                    }]
                }],
                "align-self": [{
                    self: ["auto", ...Fe(), {
                        baseline: ["", "last"]
                    }]
                }],
                "place-content": [{
                    "place-content": Ne()
                }],
                "place-items": [{
                    "place-items": [...Fe(), "baseline"]
                }],
                "place-self": [{
                    "place-self": ["auto", ...Fe()]
                }],
                p: [{
                    p: j()
                }],
                px: [{
                    px: j()
                }],
                py: [{
                    py: j()
                }],
                ps: [{
                    ps: j()
                }],
                pe: [{
                    pe: j()
                }],
                pbs: [{
                    pbs: j()
                }],
                pbe: [{
                    pbe: j()
                }],
                pt: [{
                    pt: j()
                }],
                pr: [{
                    pr: j()
                }],
                pb: [{
                    pb: j()
                }],
                pl: [{
                    pl: j()
                }],
                m: [{
                    m: xe()
                }],
                mx: [{
                    mx: xe()
                }],
                my: [{
                    my: xe()
                }],
                ms: [{
                    ms: xe()
                }],
                me: [{
                    me: xe()
                }],
                mbs: [{
                    mbs: xe()
                }],
                mbe: [{
                    mbe: xe()
                }],
                mt: [{
                    mt: xe()
                }],
                mr: [{
                    mr: xe()
                }],
                mb: [{
                    mb: xe()
                }],
                ml: [{
                    ml: xe()
                }],
                "space-x": [{
                    "space-x": j()
                }],
                "space-x-reverse": ["space-x-reverse"],
                "space-y": [{
                    "space-y": j()
                }],
                "space-y-reverse": ["space-y-reverse"],
                size: [{
                    size: fe()
                }],
                "inline-size": [{
                    inline: ["auto", ...W()]
                }],
                "min-inline-size": [{
                    "min-inline": ["auto", ...W()]
                }],
                "max-inline-size": [{
                    "max-inline": ["none", ...W()]
                }],
                "block-size": [{
                    block: ["auto", ...se()]
                }],
                "min-block-size": [{
                    "min-block": ["auto", ...se()]
                }],
                "max-block-size": [{
                    "max-block": ["none", ...se()]
                }],
                w: [{
                    w: [d, "screen", ...fe()]
                }],
                "min-w": [{
                    "min-w": [d, "screen", "none", ...fe()]
                }],
                "max-w": [{
                    "max-w": [d, "screen", "none", "prose", {
                        screen: [c]
                    }, ...fe()]
                }],
                h: [{
                    h: ["screen", "lh", ...fe()]
                }],
                "min-h": [{
                    "min-h": ["screen", "lh", "none", ...fe()]
                }],
                "max-h": [{
                    "max-h": ["screen", "lh", ...fe()]
                }],
                "font-size": [{
                    text: ["base", r, eo, Wr]
                }],
                "font-smoothing": ["antialiased", "subpixel-antialiased"],
                "font-style": ["italic", "not-italic"],
                "font-weight": [{
                    font: [i, eE, Qk]
                }],
                "font-stretch": [{
                    "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", td, te]
                }],
                "font-family": [{
                    font: [Xk, Gk, e]
                }],
                "font-features": [{
                    "font-features": [te]
                }],
                "fvn-normal": ["normal-nums"],
                "fvn-ordinal": ["ordinal"],
                "fvn-slashed-zero": ["slashed-zero"],
                "fvn-figure": ["lining-nums", "oldstyle-nums"],
                "fvn-spacing": ["proportional-nums", "tabular-nums"],
                "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
                tracking: [{
                    tracking: [a, ne, te]
                }],
                "line-clamp": [{
                    "line-clamp": [Se, "none", ne, Pg]
                }],
                leading: [{
                    leading: [l, ...j()]
                }],
                "list-image": [{
                    "list-image": ["none", ne, te]
                }],
                "list-style-position": [{
                    list: ["inside", "outside"]
                }],
                "list-style-type": [{
                    list: ["disc", "decimal", "none", ne, te]
                }],
                "text-alignment": [{
                    text: ["left", "center", "right", "justify", "start", "end"]
                }],
                "placeholder-color": [{
                    placeholder: U()
                }],
                "text-color": [{
                    text: U()
                }],
                "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                "text-decoration-style": [{
                    decoration: [...Oe(), "wavy"]
                }],
                "text-decoration-thickness": [{
                    decoration: [Se, "from-font", "auto", ne, Wr]
                }],
                "text-decoration-color": [{
                    decoration: U()
                }],
                "underline-offset": [{
                    "underline-offset": [Se, "auto", ne, te]
                }],
                "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                "text-wrap": [{
                    text: ["wrap", "nowrap", "balance", "pretty"]
                }],
                indent: [{
                    indent: j()
                }],
                "vertical-align": [{
                    align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", ne, te]
                }],
                whitespace: [{
                    whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
                }],
                break: [{
                    break: ["normal", "words", "all", "keep"]
                }],
                wrap: [{
                    wrap: ["break-word", "anywhere", "normal"]
                }],
                hyphens: [{
                    hyphens: ["none", "manual", "auto"]
                }],
                content: [{
                    content: ["none", ne, te]
                }],
                "bg-attachment": [{
                    bg: ["fixed", "local", "scroll"]
                }],
                "bg-clip": [{
                    "bg-clip": ["border", "padding", "content", "text"]
                }],
                "bg-origin": [{
                    "bg-origin": ["border", "padding", "content"]
                }],
                "bg-position": [{
                    bg: A()
                }],
                "bg-repeat": [{
                    bg: z()
                }],
                "bg-size": [{
                    bg: ye()
                }],
                "bg-image": [{
                    bg: ["none", {
                        linear: [{
                            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                        }, hr, ne, te],
                        radial: ["", ne, te],
                        conic: [hr, ne, te]
                    }, Zk, Yk]
                }],
                "bg-color": [{
                    bg: U()
                }],
                "gradient-from-pos": [{
                    from: ve()
                }],
                "gradient-via-pos": [{
                    via: ve()
                }],
                "gradient-to-pos": [{
                    to: ve()
                }],
                "gradient-from": [{
                    from: U()
                }],
                "gradient-via": [{
                    via: U()
                }],
                "gradient-to": [{
                    to: U()
                }],
                rounded: [{
                    rounded: le()
                }],
                "rounded-s": [{
                    "rounded-s": le()
                }],
                "rounded-e": [{
                    "rounded-e": le()
                }],
                "rounded-t": [{
                    "rounded-t": le()
                }],
                "rounded-r": [{
                    "rounded-r": le()
                }],
                "rounded-b": [{
                    "rounded-b": le()
                }],
                "rounded-l": [{
                    "rounded-l": le()
                }],
                "rounded-ss": [{
                    "rounded-ss": le()
                }],
                "rounded-se": [{
                    "rounded-se": le()
                }],
                "rounded-ee": [{
                    "rounded-ee": le()
                }],
                "rounded-es": [{
                    "rounded-es": le()
                }],
                "rounded-tl": [{
                    "rounded-tl": le()
                }],
                "rounded-tr": [{
                    "rounded-tr": le()
                }],
                "rounded-br": [{
                    "rounded-br": le()
                }],
                "rounded-bl": [{
                    "rounded-bl": le()
                }],
                "border-w": [{
                    border: he()
                }],
                "border-w-x": [{
                    "border-x": he()
                }],
                "border-w-y": [{
                    "border-y": he()
                }],
                "border-w-s": [{
                    "border-s": he()
                }],
                "border-w-e": [{
                    "border-e": he()
                }],
                "border-w-bs": [{
                    "border-bs": he()
                }],
                "border-w-be": [{
                    "border-be": he()
                }],
                "border-w-t": [{
                    "border-t": he()
                }],
                "border-w-r": [{
                    "border-r": he()
                }],
                "border-w-b": [{
                    "border-b": he()
                }],
                "border-w-l": [{
                    "border-l": he()
                }],
                "divide-x": [{
                    "divide-x": he()
                }],
                "divide-x-reverse": ["divide-x-reverse"],
                "divide-y": [{
                    "divide-y": he()
                }],
                "divide-y-reverse": ["divide-y-reverse"],
                "border-style": [{
                    border: [...Oe(), "hidden", "none"]
                }],
                "divide-style": [{
                    divide: [...Oe(), "hidden", "none"]
                }],
                "border-color": [{
                    border: U()
                }],
                "border-color-x": [{
                    "border-x": U()
                }],
                "border-color-y": [{
                    "border-y": U()
                }],
                "border-color-s": [{
                    "border-s": U()
                }],
                "border-color-e": [{
                    "border-e": U()
                }],
                "border-color-bs": [{
                    "border-bs": U()
                }],
                "border-color-be": [{
                    "border-be": U()
                }],
                "border-color-t": [{
                    "border-t": U()
                }],
                "border-color-r": [{
                    "border-r": U()
                }],
                "border-color-b": [{
                    "border-b": U()
                }],
                "border-color-l": [{
                    "border-l": U()
                }],
                "divide-color": [{
                    divide: U()
                }],
                "outline-style": [{
                    outline: [...Oe(), "none", "hidden"]
                }],
                "outline-offset": [{
                    "outline-offset": [Se, ne, te]
                }],
                "outline-w": [{
                    outline: ["", Se, eo, Wr]
                }],
                "outline-color": [{
                    outline: U()
                }],
                shadow: [{
                    shadow: ["", "none", g, tl, el]
                }],
                "shadow-color": [{
                    shadow: U()
                }],
                "inset-shadow": [{
                    "inset-shadow": ["none", y, tl, el]
                }],
                "inset-shadow-color": [{
                    "inset-shadow": U()
                }],
                "ring-w": [{
                    ring: he()
                }],
                "ring-w-inset": ["ring-inset"],
                "ring-color": [{
                    ring: U()
                }],
                "ring-offset-w": [{
                    "ring-offset": [Se, Wr]
                }],
                "ring-offset-color": [{
                    "ring-offset": U()
                }],
                "inset-ring-w": [{
                    "inset-ring": he()
                }],
                "inset-ring-color": [{
                    "inset-ring": U()
                }],
                "text-shadow": [{
                    "text-shadow": ["none", w, tl, el]
                }],
                "text-shadow-color": [{
                    "text-shadow": U()
                }],
                opacity: [{
                    opacity: [Se, ne, te]
                }],
                "mix-blend": [{
                    "mix-blend": [..._e(), "plus-darker", "plus-lighter"]
                }],
                "bg-blend": [{
                    "bg-blend": _e()
                }],
                "mask-clip": [{
                    "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
                }, "mask-no-clip"],
                "mask-composite": [{
                    mask: ["add", "subtract", "intersect", "exclude"]
                }],
                "mask-image-linear-pos": [{
                    "mask-linear": [Se]
                }],
                "mask-image-linear-from-pos": [{
                    "mask-linear-from": we()
                }],
                "mask-image-linear-to-pos": [{
                    "mask-linear-to": we()
                }],
                "mask-image-linear-from-color": [{
                    "mask-linear-from": U()
                }],
                "mask-image-linear-to-color": [{
                    "mask-linear-to": U()
                }],
                "mask-image-t-from-pos": [{
                    "mask-t-from": we()
                }],
                "mask-image-t-to-pos": [{
                    "mask-t-to": we()
                }],
                "mask-image-t-from-color": [{
                    "mask-t-from": U()
                }],
                "mask-image-t-to-color": [{
                    "mask-t-to": U()
                }],
                "mask-image-r-from-pos": [{
                    "mask-r-from": we()
                }],
                "mask-image-r-to-pos": [{
                    "mask-r-to": we()
                }],
                "mask-image-r-from-color": [{
                    "mask-r-from": U()
                }],
                "mask-image-r-to-color": [{
                    "mask-r-to": U()
                }],
                "mask-image-b-from-pos": [{
                    "mask-b-from": we()
                }],
                "mask-image-b-to-pos": [{
                    "mask-b-to": we()
                }],
                "mask-image-b-from-color": [{
                    "mask-b-from": U()
                }],
                "mask-image-b-to-color": [{
                    "mask-b-to": U()
                }],
                "mask-image-l-from-pos": [{
                    "mask-l-from": we()
                }],
                "mask-image-l-to-pos": [{
                    "mask-l-to": we()
                }],
                "mask-image-l-from-color": [{
                    "mask-l-from": U()
                }],
                "mask-image-l-to-color": [{
                    "mask-l-to": U()
                }],
                "mask-image-x-from-pos": [{
                    "mask-x-from": we()
                }],
                "mask-image-x-to-pos": [{
                    "mask-x-to": we()
                }],
                "mask-image-x-from-color": [{
                    "mask-x-from": U()
                }],
                "mask-image-x-to-color": [{
                    "mask-x-to": U()
                }],
                "mask-image-y-from-pos": [{
                    "mask-y-from": we()
                }],
                "mask-image-y-to-pos": [{
                    "mask-y-to": we()
                }],
                "mask-image-y-from-color": [{
                    "mask-y-from": U()
                }],
                "mask-image-y-to-color": [{
                    "mask-y-to": U()
                }],
                "mask-image-radial": [{
                    "mask-radial": [ne, te]
                }],
                "mask-image-radial-from-pos": [{
                    "mask-radial-from": we()
                }],
                "mask-image-radial-to-pos": [{
                    "mask-radial-to": we()
                }],
                "mask-image-radial-from-color": [{
                    "mask-radial-from": U()
                }],
                "mask-image-radial-to-color": [{
                    "mask-radial-to": U()
                }],
                "mask-image-radial-shape": [{
                    "mask-radial": ["circle", "ellipse"]
                }],
                "mask-image-radial-size": [{
                    "mask-radial": [{
                        closest: ["side", "corner"],
                        farthest: ["side", "corner"]
                    }]
                }],
                "mask-image-radial-pos": [{
                    "mask-radial-at": L()
                }],
                "mask-image-conic-pos": [{
                    "mask-conic": [Se]
                }],
                "mask-image-conic-from-pos": [{
                    "mask-conic-from": we()
                }],
                "mask-image-conic-to-pos": [{
                    "mask-conic-to": we()
                }],
                "mask-image-conic-from-color": [{
                    "mask-conic-from": U()
                }],
                "mask-image-conic-to-color": [{
                    "mask-conic-to": U()
                }],
                "mask-mode": [{
                    mask: ["alpha", "luminance", "match"]
                }],
                "mask-origin": [{
                    "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
                }],
                "mask-position": [{
                    mask: A()
                }],
                "mask-repeat": [{
                    mask: z()
                }],
                "mask-size": [{
                    mask: ye()
                }],
                "mask-type": [{
                    "mask-type": ["alpha", "luminance"]
                }],
                "mask-image": [{
                    mask: ["none", ne, te]
                }],
                filter: [{
                    filter: ["", "none", ne, te]
                }],
                blur: [{
                    blur: ht()
                }],
                brightness: [{
                    brightness: [Se, ne, te]
                }],
                contrast: [{
                    contrast: [Se, ne, te]
                }],
                "drop-shadow": [{
                    "drop-shadow": ["", "none", k, tl, el]
                }],
                "drop-shadow-color": [{
                    "drop-shadow": U()
                }],
                grayscale: [{
                    grayscale: ["", Se, ne, te]
                }],
                "hue-rotate": [{
                    "hue-rotate": [Se, ne, te]
                }],
                invert: [{
                    invert: ["", Se, ne, te]
                }],
                saturate: [{
                    saturate: [Se, ne, te]
                }],
                sepia: [{
                    sepia: ["", Se, ne, te]
                }],
                "backdrop-filter": [{
                    "backdrop-filter": ["", "none", ne, te]
                }],
                "backdrop-blur": [{
                    "backdrop-blur": ht()
                }],
                "backdrop-brightness": [{
                    "backdrop-brightness": [Se, ne, te]
                }],
                "backdrop-contrast": [{
                    "backdrop-contrast": [Se, ne, te]
                }],
                "backdrop-grayscale": [{
                    "backdrop-grayscale": ["", Se, ne, te]
                }],
                "backdrop-hue-rotate": [{
                    "backdrop-hue-rotate": [Se, ne, te]
                }],
                "backdrop-invert": [{
                    "backdrop-invert": ["", Se, ne, te]
                }],
                "backdrop-opacity": [{
                    "backdrop-opacity": [Se, ne, te]
                }],
                "backdrop-saturate": [{
                    "backdrop-saturate": [Se, ne, te]
                }],
                "backdrop-sepia": [{
                    "backdrop-sepia": ["", Se, ne, te]
                }],
                "border-collapse": [{
                    border: ["collapse", "separate"]
                }],
                "border-spacing": [{
                    "border-spacing": j()
                }],
                "border-spacing-x": [{
                    "border-spacing-x": j()
                }],
                "border-spacing-y": [{
                    "border-spacing-y": j()
                }],
                "table-layout": [{
                    table: ["auto", "fixed"]
                }],
                caption: [{
                    caption: ["top", "bottom"]
                }],
                transition: [{
                    transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", ne, te]
                }],
                "transition-behavior": [{
                    transition: ["normal", "discrete"]
                }],
                duration: [{
                    duration: [Se, "initial", ne, te]
                }],
                ease: [{
                    ease: ["linear", "initial", R, ne, te]
                }],
                delay: [{
                    delay: [Se, ne, te]
                }],
                animate: [{
                    animate: ["none", V, ne, te]
                }],
                backface: [{
                    backface: ["hidden", "visible"]
                }],
                perspective: [{
                    perspective: [b, ne, te]
                }],
                "perspective-origin": [{
                    "perspective-origin": B()
                }],
                rotate: [{
                    rotate: Rn()
                }],
                "rotate-x": [{
                    "rotate-x": Rn()
                }],
                "rotate-y": [{
                    "rotate-y": Rn()
                }],
                "rotate-z": [{
                    "rotate-z": Rn()
                }],
                scale: [{
                    scale: Or()
                }],
                "scale-x": [{
                    "scale-x": Or()
                }],
                "scale-y": [{
                    "scale-y": Or()
                }],
                "scale-z": [{
                    "scale-z": Or()
                }],
                "scale-3d": ["scale-3d"],
                skew: [{
                    skew: qn()
                }],
                "skew-x": [{
                    "skew-x": qn()
                }],
                "skew-y": [{
                    "skew-y": qn()
                }],
                transform: [{
                    transform: [ne, te, "", "none", "gpu", "cpu"]
                }],
                "transform-origin": [{
                    origin: B()
                }],
                "transform-style": [{
                    transform: ["3d", "flat"]
                }],
                translate: [{
                    translate: Wn()
                }],
                "translate-x": [{
                    "translate-x": Wn()
                }],
                "translate-y": [{
                    "translate-y": Wn()
                }],
                "translate-z": [{
                    "translate-z": Wn()
                }],
                "translate-none": ["translate-none"],
                accent: [{
                    accent: U()
                }],
                appearance: [{
                    appearance: ["none", "auto"]
                }],
                "caret-color": [{
                    caret: U()
                }],
                "color-scheme": [{
                    scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
                }],
                cursor: [{
                    cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", ne, te]
                }],
                "field-sizing": [{
                    "field-sizing": ["fixed", "content"]
                }],
                "pointer-events": [{
                    "pointer-events": ["auto", "none"]
                }],
                resize: [{
                    resize: ["none", "", "y", "x"]
                }],
                "scroll-behavior": [{
                    scroll: ["auto", "smooth"]
                }],
                "scroll-m": [{
                    "scroll-m": j()
                }],
                "scroll-mx": [{
                    "scroll-mx": j()
                }],
                "scroll-my": [{
                    "scroll-my": j()
                }],
                "scroll-ms": [{
                    "scroll-ms": j()
                }],
                "scroll-me": [{
                    "scroll-me": j()
                }],
                "scroll-mbs": [{
                    "scroll-mbs": j()
                }],
                "scroll-mbe": [{
                    "scroll-mbe": j()
                }],
                "scroll-mt": [{
                    "scroll-mt": j()
                }],
                "scroll-mr": [{
                    "scroll-mr": j()
                }],
                "scroll-mb": [{
                    "scroll-mb": j()
                }],
                "scroll-ml": [{
                    "scroll-ml": j()
                }],
                "scroll-p": [{
                    "scroll-p": j()
                }],
                "scroll-px": [{
                    "scroll-px": j()
                }],
                "scroll-py": [{
                    "scroll-py": j()
                }],
                "scroll-ps": [{
                    "scroll-ps": j()
                }],
                "scroll-pe": [{
                    "scroll-pe": j()
                }],
                "scroll-pbs": [{
                    "scroll-pbs": j()
                }],
                "scroll-pbe": [{
                    "scroll-pbe": j()
                }],
                "scroll-pt": [{
                    "scroll-pt": j()
                }],
                "scroll-pr": [{
                    "scroll-pr": j()
                }],
                "scroll-pb": [{
                    "scroll-pb": j()
                }],
                "scroll-pl": [{
                    "scroll-pl": j()
                }],
                "snap-align": [{
                    snap: ["start", "end", "center", "align-none"]
                }],
                "snap-stop": [{
                    snap: ["normal", "always"]
                }],
                "snap-type": [{
                    snap: ["none", "x", "y", "both"]
                }],
                "snap-strictness": [{
                    snap: ["mandatory", "proximity"]
                }],
                touch: [{
                    touch: ["auto", "none", "manipulation"]
                }],
                "touch-x": [{
                    "touch-pan": ["x", "left", "right"]
                }],
                "touch-y": [{
                    "touch-pan": ["y", "up", "down"]
                }],
                "touch-pz": ["touch-pinch-zoom"],
                select: [{
                    select: ["none", "text", "all", "auto"]
                }],
                "will-change": [{
                    "will-change": ["auto", "scroll", "contents", "transform", ne, te]
                }],
                fill: [{
                    fill: ["none", ...U()]
                }],
                "stroke-w": [{
                    stroke: [Se, eo, Wr, Pg]
                }],
                stroke: [{
                    stroke: ["none", ...U()]
                }],
                "forced-color-adjust": [{
                    "forced-color-adjust": ["auto", "none"]
                }]
            },
            conflictingClassGroups: {
                overflow: ["overflow-x", "overflow-y"],
                overscroll: ["overscroll-x", "overscroll-y"],
                inset: ["inset-x", "inset-y", "inset-bs", "inset-be", "start", "end", "top", "right", "bottom", "left"],
                "inset-x": ["right", "left"],
                "inset-y": ["top", "bottom"],
                flex: ["basis", "grow", "shrink"],
                gap: ["gap-x", "gap-y"],
                p: ["px", "py", "ps", "pe", "pbs", "pbe", "pt", "pr", "pb", "pl"],
                px: ["pr", "pl"],
                py: ["pt", "pb"],
                m: ["mx", "my", "ms", "me", "mbs", "mbe", "mt", "mr", "mb", "ml"],
                mx: ["mr", "ml"],
                my: ["mt", "mb"],
                size: ["w", "h"],
                "font-size": ["leading"],
                "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
                "fvn-ordinal": ["fvn-normal"],
                "fvn-slashed-zero": ["fvn-normal"],
                "fvn-figure": ["fvn-normal"],
                "fvn-spacing": ["fvn-normal"],
                "fvn-fraction": ["fvn-normal"],
                "line-clamp": ["display", "overflow"],
                rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
                "rounded-s": ["rounded-ss", "rounded-es"],
                "rounded-e": ["rounded-se", "rounded-ee"],
                "rounded-t": ["rounded-tl", "rounded-tr"],
                "rounded-r": ["rounded-tr", "rounded-br"],
                "rounded-b": ["rounded-br", "rounded-bl"],
                "rounded-l": ["rounded-tl", "rounded-bl"],
                "border-spacing": ["border-spacing-x", "border-spacing-y"],
                "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-bs", "border-w-be", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                "border-w-x": ["border-w-r", "border-w-l"],
                "border-w-y": ["border-w-t", "border-w-b"],
                "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-bs", "border-color-be", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
                "border-color-x": ["border-color-r", "border-color-l"],
                "border-color-y": ["border-color-t", "border-color-b"],
                translate: ["translate-x", "translate-y", "translate-none"],
                "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
                "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mbs", "scroll-mbe", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
                "scroll-mx": ["scroll-mr", "scroll-ml"],
                "scroll-my": ["scroll-mt", "scroll-mb"],
                "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pbs", "scroll-pbe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
                "scroll-px": ["scroll-pr", "scroll-pl"],
                "scroll-py": ["scroll-pt", "scroll-pb"],
                touch: ["touch-x", "touch-y", "touch-pz"],
                "touch-x": ["touch"],
                "touch-y": ["touch"],
                "touch-pz": ["touch"]
            },
            conflictingClassGroupModifiers: {
                "font-size": ["leading"]
            },
            orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
        }
    },
    rE = Dk(nE);

function Lo(...t) {
    return rE(f0(t))
}
const R0 = D.forwardRef(({ ...t
}, e) => T.jsx("div", {
    ref: e,
    className: "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
    ...t
}));
R0.displayName = "ToastProvider";
const A0 = D.forwardRef(({ ...t
}, e) => T.jsx("div", {
    ref: e,
    className: "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
    ...t
}));
A0.displayName = "ToastViewport";
const sE = Mb("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
        variants: {
            variant: {
                default: "border bg-background text-foreground",
                destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
            }
        },
        defaultVariants: {
            variant: "default"
        }
    }),
    N0 = D.forwardRef(({
        className: t,
        variant: e,
        ...r
    }, i) => T.jsx("div", {
        ref: i,
        className: Lo(sE({
            variant: e
        }), t),
        ...r
    }));
N0.displayName = "Toast";
const iE = D.forwardRef(({
    className: t,
    ...e
}, r) => T.jsx("div", {
    ref: r,
    className: Lo("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive", t),
    ...e
}));
iE.displayName = "ToastAction";
const O0 = D.forwardRef(({
    className: t,
    ...e
}, r) => T.jsx("button", {
    ref: r,
    className: Lo("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", t),
    "toast-close": "",
    ...e,
    children: T.jsx(p0, {
        className: "h-4 w-4"
    })
}));
O0.displayName = "ToastClose";
const L0 = D.forwardRef(({
    className: t,
    ...e
}, r) => T.jsx("div", {
    ref: r,
    className: Lo("text-sm font-semibold", t),
    ...e
}));
L0.displayName = "ToastTitle";
const M0 = D.forwardRef(({
    className: t,
    ...e
}, r) => T.jsx("div", {
    ref: r,
    className: Lo("text-sm opacity-90", t),
    ...e
}));
M0.displayName = "ToastDescription";

function oE() {
    const {
        toasts: t
    } = Lb();
    return T.jsxs(R0, {
        children: [t.map(function({
            id: e,
            title: r,
            description: i,
            action: a,
            ...l
        }) {
            return T.jsxs(N0, { ...l,
                children: [T.jsxs("div", {
                    className: "grid gap-1",
                    children: [r && T.jsx(L0, {
                        children: r
                    }), i && T.jsx(M0, {
                        children: i
                    })]
                }), a, T.jsx(O0, {})]
            }, e)
        }), T.jsx(A0, {})]
    })
}
var Mo = class {
        constructor() {
            this.listeners = new Set, this.subscribe = this.subscribe.bind(this)
        }
        subscribe(t) {
            return this.listeners.add(t), this.onSubscribe(), () => {
                this.listeners.delete(t), this.onUnsubscribe()
            }
        }
        hasListeners() {
            return this.listeners.size > 0
        }
        onSubscribe() {}
        onUnsubscribe() {}
    },
    aE = {
        setTimeout: (t, e) => setTimeout(t, e),
        clearTimeout: t => clearTimeout(t),
        setInterval: (t, e) => setInterval(t, e),
        clearInterval: t => clearInterval(t)
    },
    vr, vf, Zv, lE = (Zv = class {
        constructor() {
            ue(this, vr, aE);
            ue(this, vf, !1)
        }
        setTimeoutProvider(t) {
            X(this, vr, t)
        }
        setTimeout(t, e) {
            return P(this, vr).setTimeout(t, e)
        }
        clearTimeout(t) {
            P(this, vr).clearTimeout(t)
        }
        setInterval(t, e) {
            return P(this, vr).setInterval(t, e)
        }
        clearInterval(t) {
            P(this, vr).clearInterval(t)
        }
    }, vr = new WeakMap, vf = new WeakMap, Zv),
    Yr = new lE;

function uE(t) {
    setTimeout(t, 0)
}
var ds = typeof window > "u" || "Deno" in globalThis;

function Mt() {}

function cE(t, e) {
    return typeof t == "function" ? t(e) : t
}

function Pd(t) {
    return typeof t == "number" && t >= 0 && t !== 1 / 0
}

function D0(t, e) {
    return Math.max(t + (e || 0) - Date.now(), 0)
}

function Pr(t, e) {
    return typeof t == "function" ? t(e) : t
}

function Zt(t, e) {
    return typeof t == "function" ? t(e) : t
}

function Ag(t, e) {
    const {
        type: r = "all",
        exact: i,
        fetchStatus: a,
        predicate: l,
        queryKey: c,
        stale: d
    } = t;
    if (c) {
        if (i) {
            if (e.queryHash !== bf(c, e.options)) return !1
        } else if (!ko(e.queryKey, c)) return !1
    }
    if (r !== "all") {
        const h = e.isActive();
        if (r === "active" && !h || r === "inactive" && h) return !1
    }
    return !(typeof d == "boolean" && e.isStale() !== d || a && a !== e.state.fetchStatus || l && !l(e))
}

function Ng(t, e) {
    const {
        exact: r,
        status: i,
        predicate: a,
        mutationKey: l
    } = t;
    if (l) {
        if (!e.options.mutationKey) return !1;
        if (r) {
            if (bo(e.options.mutationKey) !== bo(l)) return !1
        } else if (!ko(e.options.mutationKey, l)) return !1
    }
    return !(i && e.state.status !== i || a && !a(e))
}

function bf(t, e) {
    return ((e == null ? void 0 : e.queryKeyHashFn) || bo)(t)
}

function bo(t) {
    return JSON.stringify(t, (e, r) => Rd(r) ? Object.keys(r).sort().reduce((i, a) => (i[a] = r[a], i), {}) : r)
}

function ko(t, e) {
    return t === e ? !0 : typeof t != typeof e ? !1 : t && e && typeof t == "object" && typeof e == "object" ? Object.keys(e).every(r => ko(t[r], e[r])) : !1
}
var dE = Object.prototype.hasOwnProperty;

function j0(t, e, r = 0) {
    if (t === e) return t;
    if (r > 500) return e;
    const i = Og(t) && Og(e);
    if (!i && !(Rd(t) && Rd(e))) return e;
    const l = (i ? t : Object.keys(t)).length,
        c = i ? e : Object.keys(e),
        d = c.length,
        h = i ? new Array(d) : {};
    let m = 0;
    for (let g = 0; g < d; g++) {
        const y = i ? g : c[g],
            w = t[y],
            k = e[y];
        if (w === k) {
            h[y] = w, (i ? g < l : dE.call(t, y)) && m++;
            continue
        }
        if (w === null || k === null || typeof w != "object" || typeof k != "object") {
            h[y] = k;
            continue
        }
        const S = j0(w, k, r + 1);
        h[y] = S, S === w && m++
    }
    return l === d && m === l ? t : h
}

function _d(t, e) {
    if (!e || Object.keys(t).length !== Object.keys(e).length) return !1;
    for (const r in t)
        if (t[r] !== e[r]) return !1;
    return !0
}

function Og(t) {
    return Array.isArray(t) && t.length === Object.keys(t).length
}

function Rd(t) {
    if (!Lg(t)) return !1;
    const e = t.constructor;
    if (e === void 0) return !0;
    const r = e.prototype;
    return !(!Lg(r) || !r.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(t) !== Object.prototype)
}

function Lg(t) {
    return Object.prototype.toString.call(t) === "[object Object]"
}

function fE(t) {
    return new Promise(e => {
        Yr.setTimeout(e, t)
    })
}

function Ad(t, e, r) {
    return typeof r.structuralSharing == "function" ? r.structuralSharing(t, e) : r.structuralSharing !== !1 ? j0(t, e) : e
}

function hE(t, e, r = 0) {
    const i = [...t, e];
    return r && i.length > r ? i.slice(1) : i
}

function pE(t, e, r = 0) {
    const i = [e, ...t];
    return r && i.length > r ? i.slice(0, -1) : i
}
var kf = Symbol();

function I0(t, e) {
    return !t.queryFn && (e != null && e.initialPromise) ? () => e.initialPromise : !t.queryFn || t.queryFn === kf ? () => Promise.reject(new Error(`Missing queryFn: '${t.queryHash}'`)) : t.queryFn
}

function F0(t, e) {
    return typeof t == "function" ? t(...e) : !!t
}

function mE(t, e, r) {
    let i = !1,
        a;
    return Object.defineProperty(t, "signal", {
        enumerable: !0,
        get: () => (a ? ? (a = e()), i || (i = !0, a.aborted ? r() : a.addEventListener("abort", r, {
            once: !0
        })), a)
    }), t
}
var es, wr, Qs, e0, gE = (e0 = class extends Mo {
        constructor() {
            super();
            ue(this, es);
            ue(this, wr);
            ue(this, Qs);
            X(this, Qs, e => {
                if (!ds && window.addEventListener) {
                    const r = () => e();
                    return window.addEventListener("visibilitychange", r, !1), () => {
                        window.removeEventListener("visibilitychange", r)
                    }
                }
            })
        }
        onSubscribe() {
            P(this, wr) || this.setEventListener(P(this, Qs))
        }
        onUnsubscribe() {
            var e;
            this.hasListeners() || ((e = P(this, wr)) == null || e.call(this), X(this, wr, void 0))
        }
        setEventListener(e) {
            var r;
            X(this, Qs, e), (r = P(this, wr)) == null || r.call(this), X(this, wr, e(i => {
                typeof i == "boolean" ? this.setFocused(i) : this.onFocus()
            }))
        }
        setFocused(e) {
            P(this, es) !== e && (X(this, es, e), this.onFocus())
        }
        onFocus() {
            const e = this.isFocused();
            this.listeners.forEach(r => {
                r(e)
            })
        }
        isFocused() {
            var e;
            return typeof P(this, es) == "boolean" ? P(this, es) : ((e = globalThis.document) == null ? void 0 : e.visibilityState) !== "hidden"
        }
    }, es = new WeakMap, wr = new WeakMap, Qs = new WeakMap, e0),
    Ef = new gE;

function Nd() {
    let t, e;
    const r = new Promise((a, l) => {
        t = a, e = l
    });
    r.status = "pending", r.catch(() => {});

    function i(a) {
        Object.assign(r, a), delete r.resolve, delete r.reject
    }
    return r.resolve = a => {
        i({
            status: "fulfilled",
            value: a
        }), t(a)
    }, r.reject = a => {
        i({
            status: "rejected",
            reason: a
        }), e(a)
    }, r
}
var yE = uE;

function vE() {
    let t = [],
        e = 0,
        r = d => {
            d()
        },
        i = d => {
            d()
        },
        a = yE;
    const l = d => {
            e ? t.push(d) : a(() => {
                r(d)
            })
        },
        c = () => {
            const d = t;
            t = [], d.length && a(() => {
                i(() => {
                    d.forEach(h => {
                        r(h)
                    })
                })
            })
        };
    return {
        batch: d => {
            let h;
            e++;
            try {
                h = d()
            } finally {
                e--, e || c()
            }
            return h
        },
        batchCalls: d => (...h) => {
            l(() => {
                d(...h)
            })
        },
        schedule: l,
        setNotifyFunction: d => {
            r = d
        },
        setBatchNotifyFunction: d => {
            i = d
        },
        setScheduler: d => {
            a = d
        }
    }
}
var ft = vE(),
    Gs, xr, Ys, t0, wE = (t0 = class extends Mo {
        constructor() {
            super();
            ue(this, Gs, !0);
            ue(this, xr);
            ue(this, Ys);
            X(this, Ys, e => {
                if (!ds && window.addEventListener) {
                    const r = () => e(!0),
                        i = () => e(!1);
                    return window.addEventListener("online", r, !1), window.addEventListener("offline", i, !1), () => {
                        window.removeEventListener("online", r), window.removeEventListener("offline", i)
                    }
                }
            })
        }
        onSubscribe() {
            P(this, xr) || this.setEventListener(P(this, Ys))
        }
        onUnsubscribe() {
            var e;
            this.hasListeners() || ((e = P(this, xr)) == null || e.call(this), X(this, xr, void 0))
        }
        setEventListener(e) {
            var r;
            X(this, Ys, e), (r = P(this, xr)) == null || r.call(this), X(this, xr, e(this.setOnline.bind(this)))
        }
        setOnline(e) {
            P(this, Gs) !== e && (X(this, Gs, e), this.listeners.forEach(i => {
                i(e)
            }))
        }
        isOnline() {
            return P(this, Gs)
        }
    }, Gs = new WeakMap, xr = new WeakMap, Ys = new WeakMap, t0),
    Tl = new wE;

function xE(t) {
    return Math.min(1e3 * 2 ** t, 3e4)
}

function V0(t) {
    return (t ? ? "online") === "online" ? Tl.isOnline() : !0
}
var Od = class extends Error {
    constructor(t) {
        super("CancelledError"), this.revert = t == null ? void 0 : t.revert, this.silent = t == null ? void 0 : t.silent
    }
};

function B0(t) {
    let e = !1,
        r = 0,
        i;
    const a = Nd(),
        l = () => a.status !== "pending",
        c = b => {
            var x;
            if (!l()) {
                const R = new Od(b);
                w(R), (x = t.onCancel) == null || x.call(t, R)
            }
        },
        d = () => {
            e = !0
        },
        h = () => {
            e = !1
        },
        m = () => Ef.isFocused() && (t.networkMode === "always" || Tl.isOnline()) && t.canRun(),
        g = () => V0(t.networkMode) && t.canRun(),
        y = b => {
            l() || (i == null || i(), a.resolve(b))
        },
        w = b => {
            l() || (i == null || i(), a.reject(b))
        },
        k = () => new Promise(b => {
            var x;
            i = R => {
                (l() || m()) && b(R)
            }, (x = t.onPause) == null || x.call(t)
        }).then(() => {
            var b;
            i = void 0, l() || (b = t.onContinue) == null || b.call(t)
        }),
        S = () => {
            if (l()) return;
            let b;
            const x = r === 0 ? t.initialPromise : void 0;
            try {
                b = x ? ? t.fn()
            } catch (R) {
                b = Promise.reject(R)
            }
            Promise.resolve(b).then(y).catch(R => {
                var K;
                if (l()) return;
                const V = t.retry ? ? (ds ? 0 : 3),
                    M = t.retryDelay ? ? xE,
                    L = typeof M == "function" ? M(r, R) : M,
                    B = V === !0 || typeof V == "number" && r < V || typeof V == "function" && V(r, R);
                if (e || !B) {
                    w(R);
                    return
                }
                r++, (K = t.onFail) == null || K.call(t, r, R), fE(L).then(() => m() ? void 0 : k()).then(() => {
                    e ? w(R) : S()
                })
            })
        };
    return {
        promise: a,
        status: () => a.status,
        cancel: c,
        continue: () => (i == null || i(), a),
        cancelRetry: d,
        continueRetry: h,
        canStart: g,
        start: () => (g() ? S() : k().then(S), a)
    }
}
var ts, n0, U0 = (n0 = class {
        constructor() {
            ue(this, ts)
        }
        destroy() {
            this.clearGcTimeout()
        }
        scheduleGc() {
            this.clearGcTimeout(), Pd(this.gcTime) && X(this, ts, Yr.setTimeout(() => {
                this.optionalRemove()
            }, this.gcTime))
        }
        updateGcTime(t) {
            this.gcTime = Math.max(this.gcTime || 0, t ? ? (ds ? 1 / 0 : 300 * 1e3))
        }
        clearGcTimeout() {
            P(this, ts) && (Yr.clearTimeout(P(this, ts)), X(this, ts, void 0))
        }
    }, ts = new WeakMap, n0),
    ns, Xs, Jt, rs, at, _o, ss, cn, Vn, r0, SE = (r0 = class extends U0 {
        constructor(e) {
            super();
            ue(this, cn);
            ue(this, ns);
            ue(this, Xs);
            ue(this, Jt);
            ue(this, rs);
            ue(this, at);
            ue(this, _o);
            ue(this, ss);
            X(this, ss, !1), X(this, _o, e.defaultOptions), this.setOptions(e.options), this.observers = [], X(this, rs, e.client), X(this, Jt, P(this, rs).getQueryCache()), this.queryKey = e.queryKey, this.queryHash = e.queryHash, X(this, ns, Dg(this.options)), this.state = e.state ? ? P(this, ns), this.scheduleGc()
        }
        get meta() {
            return this.options.meta
        }
        get promise() {
            var e;
            return (e = P(this, at)) == null ? void 0 : e.promise
        }
        setOptions(e) {
            if (this.options = { ...P(this, _o),
                    ...e
                }, this.updateGcTime(this.options.gcTime), this.state && this.state.data === void 0) {
                const r = Dg(this.options);
                r.data !== void 0 && (this.setState(Mg(r.data, r.dataUpdatedAt)), X(this, ns, r))
            }
        }
        optionalRemove() {
            !this.observers.length && this.state.fetchStatus === "idle" && P(this, Jt).remove(this)
        }
        setData(e, r) {
            const i = Ad(this.state.data, e, this.options);
            return ke(this, cn, Vn).call(this, {
                data: i,
                type: "success",
                dataUpdatedAt: r == null ? void 0 : r.updatedAt,
                manual: r == null ? void 0 : r.manual
            }), i
        }
        setState(e, r) {
            ke(this, cn, Vn).call(this, {
                type: "setState",
                state: e,
                setStateOptions: r
            })
        }
        cancel(e) {
            var i, a;
            const r = (i = P(this, at)) == null ? void 0 : i.promise;
            return (a = P(this, at)) == null || a.cancel(e), r ? r.then(Mt).catch(Mt) : Promise.resolve()
        }
        destroy() {
            super.destroy(), this.cancel({
                silent: !0
            })
        }
        reset() {
            this.destroy(), this.setState(P(this, ns))
        }
        isActive() {
            return this.observers.some(e => Zt(e.options.enabled, this) !== !1)
        }
        isDisabled() {
            return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === kf || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
        }
        isStatic() {
            return this.getObserversCount() > 0 ? this.observers.some(e => Pr(e.options.staleTime, this) === "static") : !1
        }
        isStale() {
            return this.getObserversCount() > 0 ? this.observers.some(e => e.getCurrentResult().isStale) : this.state.data === void 0 || this.state.isInvalidated
        }
        isStaleByTime(e = 0) {
            return this.state.data === void 0 ? !0 : e === "static" ? !1 : this.state.isInvalidated ? !0 : !D0(this.state.dataUpdatedAt, e)
        }
        onFocus() {
            var r;
            const e = this.observers.find(i => i.shouldFetchOnWindowFocus());
            e == null || e.refetch({
                cancelRefetch: !1
            }), (r = P(this, at)) == null || r.continue()
        }
        onOnline() {
            var r;
            const e = this.observers.find(i => i.shouldFetchOnReconnect());
            e == null || e.refetch({
                cancelRefetch: !1
            }), (r = P(this, at)) == null || r.continue()
        }
        addObserver(e) {
            this.observers.includes(e) || (this.observers.push(e), this.clearGcTimeout(), P(this, Jt).notify({
                type: "observerAdded",
                query: this,
                observer: e
            }))
        }
        removeObserver(e) {
            this.observers.includes(e) && (this.observers = this.observers.filter(r => r !== e), this.observers.length || (P(this, at) && (P(this, ss) ? P(this, at).cancel({
                revert: !0
            }) : P(this, at).cancelRetry()), this.scheduleGc()), P(this, Jt).notify({
                type: "observerRemoved",
                query: this,
                observer: e
            }))
        }
        getObserversCount() {
            return this.observers.length
        }
        invalidate() {
            this.state.isInvalidated || ke(this, cn, Vn).call(this, {
                type: "invalidate"
            })
        }
        async fetch(e, r) {
            var h, m, g, y, w, k, S, b, x, R, V, M;
            if (this.state.fetchStatus !== "idle" && ((h = P(this, at)) == null ? void 0 : h.status()) !== "rejected") {
                if (this.state.data !== void 0 && (r != null && r.cancelRefetch)) this.cancel({
                    silent: !0
                });
                else if (P(this, at)) return P(this, at).continueRetry(), P(this, at).promise
            }
            if (e && this.setOptions(e), !this.options.queryFn) {
                const L = this.observers.find(B => B.options.queryFn);
                L && this.setOptions(L.options)
            }
            const i = new AbortController,
                a = L => {
                    Object.defineProperty(L, "signal", {
                        enumerable: !0,
                        get: () => (X(this, ss, !0), i.signal)
                    })
                },
                l = () => {
                    const L = I0(this.options, r),
                        K = (() => {
                            const G = {
                                client: P(this, rs),
                                queryKey: this.queryKey,
                                meta: this.meta
                            };
                            return a(G), G
                        })();
                    return X(this, ss, !1), this.options.persister ? this.options.persister(L, K, this) : L(K)
                },
                d = (() => {
                    const L = {
                        fetchOptions: r,
                        options: this.options,
                        queryKey: this.queryKey,
                        client: P(this, rs),
                        state: this.state,
                        fetchFn: l
                    };
                    return a(L), L
                })();
            (m = this.options.behavior) == null || m.onFetch(d, this), X(this, Xs, this.state), (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((g = d.fetchOptions) == null ? void 0 : g.meta)) && ke(this, cn, Vn).call(this, {
                type: "fetch",
                meta: (y = d.fetchOptions) == null ? void 0 : y.meta
            }), X(this, at, B0({
                initialPromise: r == null ? void 0 : r.initialPromise,
                fn: d.fetchFn,
                onCancel: L => {
                    L instanceof Od && L.revert && this.setState({ ...P(this, Xs),
                        fetchStatus: "idle"
                    }), i.abort()
                },
                onFail: (L, B) => {
                    ke(this, cn, Vn).call(this, {
                        type: "failed",
                        failureCount: L,
                        error: B
                    })
                },
                onPause: () => {
                    ke(this, cn, Vn).call(this, {
                        type: "pause"
                    })
                },
                onContinue: () => {
                    ke(this, cn, Vn).call(this, {
                        type: "continue"
                    })
                },
                retry: d.options.retry,
                retryDelay: d.options.retryDelay,
                networkMode: d.options.networkMode,
                canRun: () => !0
            }));
            try {
                const L = await P(this, at).start();
                if (L === void 0) throw new Error(`${this.queryHash} data is undefined`);
                return this.setData(L), (k = (w = P(this, Jt).config).onSuccess) == null || k.call(w, L, this), (b = (S = P(this, Jt).config).onSettled) == null || b.call(S, L, this.state.error, this), L
            } catch (L) {
                if (L instanceof Od) {
                    if (L.silent) return P(this, at).promise;
                    if (L.revert) {
                        if (this.state.data === void 0) throw L;
                        return this.state.data
                    }
                }
                throw ke(this, cn, Vn).call(this, {
                    type: "error",
                    error: L
                }), (R = (x = P(this, Jt).config).onError) == null || R.call(x, L, this), (M = (V = P(this, Jt).config).onSettled) == null || M.call(V, this.state.data, L, this), L
            } finally {
                this.scheduleGc()
            }
        }
    }, ns = new WeakMap, Xs = new WeakMap, Jt = new WeakMap, rs = new WeakMap, at = new WeakMap, _o = new WeakMap, ss = new WeakMap, cn = new WeakSet, Vn = function(e) {
        const r = i => {
            switch (e.type) {
                case "failed":
                    return { ...i,
                        fetchFailureCount: e.failureCount,
                        fetchFailureReason: e.error
                    };
                case "pause":
                    return { ...i,
                        fetchStatus: "paused"
                    };
                case "continue":
                    return { ...i,
                        fetchStatus: "fetching"
                    };
                case "fetch":
                    return { ...i,
                        ...z0(i.data, this.options),
                        fetchMeta: e.meta ? ? null
                    };
                case "success":
                    const a = { ...i,
                        ...Mg(e.data, e.dataUpdatedAt),
                        dataUpdateCount: i.dataUpdateCount + 1,
                        ...!e.manual && {
                            fetchStatus: "idle",
                            fetchFailureCount: 0,
                            fetchFailureReason: null
                        }
                    };
                    return X(this, Xs, e.manual ? a : void 0), a;
                case "error":
                    const l = e.error;
                    return { ...i,
                        error: l,
                        errorUpdateCount: i.errorUpdateCount + 1,
                        errorUpdatedAt: Date.now(),
                        fetchFailureCount: i.fetchFailureCount + 1,
                        fetchFailureReason: l,
                        fetchStatus: "idle",
                        status: "error",
                        isInvalidated: !0
                    };
                case "invalidate":
                    return { ...i,
                        isInvalidated: !0
                    };
                case "setState":
                    return { ...i,
                        ...e.state
                    }
            }
        };
        this.state = r(this.state), ft.batch(() => {
            this.observers.forEach(i => {
                i.onQueryUpdate()
            }), P(this, Jt).notify({
                query: this,
                type: "updated",
                action: e
            })
        })
    }, r0);

function z0(t, e) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: V0(e.networkMode) ? "fetching" : "paused",
        ...t === void 0 && {
            error: null,
            status: "pending"
        }
    }
}

function Mg(t, e) {
    return {
        data: t,
        dataUpdatedAt: e ? ? Date.now(),
        error: null,
        isInvalidated: !1,
        status: "success"
    }
}

function Dg(t) {
    const e = typeof t.initialData == "function" ? t.initialData() : t.initialData,
        r = e !== void 0,
        i = r ? typeof t.initialDataUpdatedAt == "function" ? t.initialDataUpdatedAt() : t.initialDataUpdatedAt : 0;
    return {
        data: e,
        dataUpdateCount: 0,
        dataUpdatedAt: r ? i ? ? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: r ? "success" : "pending",
        fetchStatus: "idle"
    }
}
var Lt, Ee, Ro, Tt, is, Js, Bn, Sr, Ao, Zs, ei, os, as, br, ti, Me, oo, Ld, Md, Dd, jd, Id, Fd, Vd, $0, s0, bE = (s0 = class extends Mo {
    constructor(e, r) {
        super();
        ue(this, Me);
        ue(this, Lt);
        ue(this, Ee);
        ue(this, Ro);
        ue(this, Tt);
        ue(this, is);
        ue(this, Js);
        ue(this, Bn);
        ue(this, Sr);
        ue(this, Ao);
        ue(this, Zs);
        ue(this, ei);
        ue(this, os);
        ue(this, as);
        ue(this, br);
        ue(this, ti, new Set);
        this.options = r, X(this, Lt, e), X(this, Sr, null), X(this, Bn, Nd()), this.bindMethods(), this.setOptions(r)
    }
    bindMethods() {
        this.refetch = this.refetch.bind(this)
    }
    onSubscribe() {
        this.listeners.size === 1 && (P(this, Ee).addObserver(this), jg(P(this, Ee), this.options) ? ke(this, Me, oo).call(this) : this.updateResult(), ke(this, Me, jd).call(this))
    }
    onUnsubscribe() {
        this.hasListeners() || this.destroy()
    }
    shouldFetchOnReconnect() {
        return Bd(P(this, Ee), this.options, this.options.refetchOnReconnect)
    }
    shouldFetchOnWindowFocus() {
        return Bd(P(this, Ee), this.options, this.options.refetchOnWindowFocus)
    }
    destroy() {
        this.listeners = new Set, ke(this, Me, Id).call(this), ke(this, Me, Fd).call(this), P(this, Ee).removeObserver(this)
    }
    setOptions(e) {
        const r = this.options,
            i = P(this, Ee);
        if (this.options = P(this, Lt).defaultQueryOptions(e), this.options.enabled !== void 0 && typeof this.options.enabled != "boolean" && typeof this.options.enabled != "function" && typeof Zt(this.options.enabled, P(this, Ee)) != "boolean") throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");
        ke(this, Me, Vd).call(this), P(this, Ee).setOptions(this.options), r._defaulted && !_d(this.options, r) && P(this, Lt).getQueryCache().notify({
            type: "observerOptionsUpdated",
            query: P(this, Ee),
            observer: this
        });
        const a = this.hasListeners();
        a && Ig(P(this, Ee), i, this.options, r) && ke(this, Me, oo).call(this), this.updateResult(), a && (P(this, Ee) !== i || Zt(this.options.enabled, P(this, Ee)) !== Zt(r.enabled, P(this, Ee)) || Pr(this.options.staleTime, P(this, Ee)) !== Pr(r.staleTime, P(this, Ee))) && ke(this, Me, Ld).call(this);
        const l = ke(this, Me, Md).call(this);
        a && (P(this, Ee) !== i || Zt(this.options.enabled, P(this, Ee)) !== Zt(r.enabled, P(this, Ee)) || l !== P(this, br)) && ke(this, Me, Dd).call(this, l)
    }
    getOptimisticResult(e) {
        const r = P(this, Lt).getQueryCache().build(P(this, Lt), e),
            i = this.createResult(r, e);
        return EE(this, i) && (X(this, Tt, i), X(this, Js, this.options), X(this, is, P(this, Ee).state)), i
    }
    getCurrentResult() {
        return P(this, Tt)
    }
    trackResult(e, r) {
        return new Proxy(e, {
            get: (i, a) => (this.trackProp(a), r == null || r(a), a === "promise" && (this.trackProp("data"), !this.options.experimental_prefetchInRender && P(this, Bn).status === "pending" && P(this, Bn).reject(new Error("experimental_prefetchInRender feature flag is not enabled"))), Reflect.get(i, a))
        })
    }
    trackProp(e) {
        P(this, ti).add(e)
    }
    getCurrentQuery() {
        return P(this, Ee)
    }
    refetch({ ...e
    } = {}) {
        return this.fetch({ ...e
        })
    }
    fetchOptimistic(e) {
        const r = P(this, Lt).defaultQueryOptions(e),
            i = P(this, Lt).getQueryCache().build(P(this, Lt), r);
        return i.fetch().then(() => this.createResult(i, r))
    }
    fetch(e) {
        return ke(this, Me, oo).call(this, { ...e,
            cancelRefetch: e.cancelRefetch ? ? !0
        }).then(() => (this.updateResult(), P(this, Tt)))
    }
    createResult(e, r) {
        var J;
        const i = P(this, Ee),
            a = this.options,
            l = P(this, Tt),
            c = P(this, is),
            d = P(this, Js),
            m = e !== i ? e.state : P(this, Ro),
            {
                state: g
            } = e;
        let y = { ...g
            },
            w = !1,
            k;
        if (r._optimisticResults) {
            const de = this.hasListeners(),
                me = !de && jg(e, r),
                Ae = de && Ig(e, i, r, a);
            (me || Ae) && (y = { ...y,
                ...z0(g.data, e.options)
            }), r._optimisticResults === "isRestoring" && (y.fetchStatus = "idle")
        }
        let {
            error: S,
            errorUpdatedAt: b,
            status: x
        } = y;
        k = y.data;
        let R = !1;
        if (r.placeholderData !== void 0 && k === void 0 && x === "pending") {
            let de;
            l != null && l.isPlaceholderData && r.placeholderData === (d == null ? void 0 : d.placeholderData) ? (de = l.data, R = !0) : de = typeof r.placeholderData == "function" ? r.placeholderData((J = P(this, ei)) == null ? void 0 : J.state.data, P(this, ei)) : r.placeholderData, de !== void 0 && (x = "success", k = Ad(l == null ? void 0 : l.data, de, r), w = !0)
        }
        if (r.select && k !== void 0 && !R)
            if (l && k === (c == null ? void 0 : c.data) && r.select === P(this, Ao)) k = P(this, Zs);
            else try {
                X(this, Ao, r.select), k = r.select(k), k = Ad(l == null ? void 0 : l.data, k, r), X(this, Zs, k), X(this, Sr, null)
            } catch (de) {
                X(this, Sr, de)
            }
        P(this, Sr) && (S = P(this, Sr), k = P(this, Zs), b = Date.now(), x = "error");
        const V = y.fetchStatus === "fetching",
            M = x === "pending",
            L = x === "error",
            B = M && V,
            K = k !== void 0,
            j = {
                status: x,
                fetchStatus: y.fetchStatus,
                isPending: M,
                isSuccess: x === "success",
                isError: L,
                isInitialLoading: B,
                isLoading: B,
                data: k,
                dataUpdatedAt: y.dataUpdatedAt,
                error: S,
                errorUpdatedAt: b,
                failureCount: y.fetchFailureCount,
                failureReason: y.fetchFailureReason,
                errorUpdateCount: y.errorUpdateCount,
                isFetched: y.dataUpdateCount > 0 || y.errorUpdateCount > 0,
                isFetchedAfterMount: y.dataUpdateCount > m.dataUpdateCount || y.errorUpdateCount > m.errorUpdateCount,
                isFetching: V,
                isRefetching: V && !M,
                isLoadingError: L && !K,
                isPaused: y.fetchStatus === "paused",
                isPlaceholderData: w,
                isRefetchError: L && K,
                isStale: Tf(e, r),
                refetch: this.refetch,
                promise: P(this, Bn),
                isEnabled: Zt(r.enabled, e) !== !1
            };
        if (this.options.experimental_prefetchInRender) {
            const de = j.data !== void 0,
                me = j.status === "error" && !de,
                Ae = Fe => {
                    me ? Fe.reject(j.error) : de && Fe.resolve(j.data)
                },
                je = () => {
                    const Fe = X(this, Bn, j.promise = Nd());
                    Ae(Fe)
                },
                Ne = P(this, Bn);
            switch (Ne.status) {
                case "pending":
                    e.queryHash === i.queryHash && Ae(Ne);
                    break;
                case "fulfilled":
                    (me || j.data !== Ne.value) && je();
                    break;
                case "rejected":
                    (!me || j.error !== Ne.reason) && je();
                    break
            }
        }
        return j
    }
    updateResult() {
        const e = P(this, Tt),
            r = this.createResult(P(this, Ee), this.options);
        if (X(this, is, P(this, Ee).state), X(this, Js, this.options), P(this, is).data !== void 0 && X(this, ei, P(this, Ee)), _d(r, e)) return;
        X(this, Tt, r);
        const i = () => {
            if (!e) return !0;
            const {
                notifyOnChangeProps: a
            } = this.options, l = typeof a == "function" ? a() : a;
            if (l === "all" || !l && !P(this, ti).size) return !0;
            const c = new Set(l ? ? P(this, ti));
            return this.options.throwOnError && c.add("error"), Object.keys(P(this, Tt)).some(d => {
                const h = d;
                return P(this, Tt)[h] !== e[h] && c.has(h)
            })
        };
        ke(this, Me, $0).call(this, {
            listeners: i()
        })
    }
    onQueryUpdate() {
        this.updateResult(), this.hasListeners() && ke(this, Me, jd).call(this)
    }
}, Lt = new WeakMap, Ee = new WeakMap, Ro = new WeakMap, Tt = new WeakMap, is = new WeakMap, Js = new WeakMap, Bn = new WeakMap, Sr = new WeakMap, Ao = new WeakMap, Zs = new WeakMap, ei = new WeakMap, os = new WeakMap, as = new WeakMap, br = new WeakMap, ti = new WeakMap, Me = new WeakSet, oo = function(e) {
    ke(this, Me, Vd).call(this);
    let r = P(this, Ee).fetch(this.options, e);
    return e != null && e.throwOnError || (r = r.catch(Mt)), r
}, Ld = function() {
    ke(this, Me, Id).call(this);
    const e = Pr(this.options.staleTime, P(this, Ee));
    if (ds || P(this, Tt).isStale || !Pd(e)) return;
    const i = D0(P(this, Tt).dataUpdatedAt, e) + 1;
    X(this, os, Yr.setTimeout(() => {
        P(this, Tt).isStale || this.updateResult()
    }, i))
}, Md = function() {
    return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(P(this, Ee)) : this.options.refetchInterval) ? ? !1
}, Dd = function(e) {
    ke(this, Me, Fd).call(this), X(this, br, e), !(ds || Zt(this.options.enabled, P(this, Ee)) === !1 || !Pd(P(this, br)) || P(this, br) === 0) && X(this, as, Yr.setInterval(() => {
        (this.options.refetchIntervalInBackground || Ef.isFocused()) && ke(this, Me, oo).call(this)
    }, P(this, br)))
}, jd = function() {
    ke(this, Me, Ld).call(this), ke(this, Me, Dd).call(this, ke(this, Me, Md).call(this))
}, Id = function() {
    P(this, os) && (Yr.clearTimeout(P(this, os)), X(this, os, void 0))
}, Fd = function() {
    P(this, as) && (Yr.clearInterval(P(this, as)), X(this, as, void 0))
}, Vd = function() {
    const e = P(this, Lt).getQueryCache().build(P(this, Lt), this.options);
    if (e === P(this, Ee)) return;
    const r = P(this, Ee);
    X(this, Ee, e), X(this, Ro, e.state), this.hasListeners() && (r == null || r.removeObserver(this), e.addObserver(this))
}, $0 = function(e) {
    ft.batch(() => {
        e.listeners && this.listeners.forEach(r => {
            r(P(this, Tt))
        }), P(this, Lt).getQueryCache().notify({
            query: P(this, Ee),
            type: "observerResultsUpdated"
        })
    })
}, s0);

function kE(t, e) {
    return Zt(e.enabled, t) !== !1 && t.state.data === void 0 && !(t.state.status === "error" && e.retryOnMount === !1)
}

function jg(t, e) {
    return kE(t, e) || t.state.data !== void 0 && Bd(t, e, e.refetchOnMount)
}

function Bd(t, e, r) {
    if (Zt(e.enabled, t) !== !1 && Pr(e.staleTime, t) !== "static") {
        const i = typeof r == "function" ? r(t) : r;
        return i === "always" || i !== !1 && Tf(t, e)
    }
    return !1
}

function Ig(t, e, r, i) {
    return (t !== e || Zt(i.enabled, t) === !1) && (!r.suspense || t.state.status !== "error") && Tf(t, r)
}

function Tf(t, e) {
    return Zt(e.enabled, t) !== !1 && t.isStaleByTime(Pr(e.staleTime, t))
}

function EE(t, e) {
    return !_d(t.getCurrentResult(), e)
}

function Fg(t) {
    return {
        onFetch: (e, r) => {
            var g, y, w, k, S;
            const i = e.options,
                a = (w = (y = (g = e.fetchOptions) == null ? void 0 : g.meta) == null ? void 0 : y.fetchMore) == null ? void 0 : w.direction,
                l = ((k = e.state.data) == null ? void 0 : k.pages) || [],
                c = ((S = e.state.data) == null ? void 0 : S.pageParams) || [];
            let d = {
                    pages: [],
                    pageParams: []
                },
                h = 0;
            const m = async () => {
                let b = !1;
                const x = M => {
                        mE(M, () => e.signal, () => b = !0)
                    },
                    R = I0(e.options, e.fetchOptions),
                    V = async (M, L, B) => {
                        if (b) return Promise.reject();
                        if (L == null && M.pages.length) return Promise.resolve(M);
                        const G = (() => {
                                const me = {
                                    client: e.client,
                                    queryKey: e.queryKey,
                                    pageParam: L,
                                    direction: B ? "backward" : "forward",
                                    meta: e.options.meta
                                };
                                return x(me), me
                            })(),
                            j = await R(G),
                            {
                                maxPages: J
                            } = e.options,
                            de = B ? pE : hE;
                        return {
                            pages: de(M.pages, j, J),
                            pageParams: de(M.pageParams, L, J)
                        }
                    };
                if (a && l.length) {
                    const M = a === "backward",
                        L = M ? TE : Vg,
                        B = {
                            pages: l,
                            pageParams: c
                        },
                        K = L(i, B);
                    d = await V(B, K, M)
                } else {
                    const M = t ? ? l.length;
                    do {
                        const L = h === 0 ? c[0] ? ? i.initialPageParam : Vg(i, d);
                        if (h > 0 && L == null) break;
                        d = await V(d, L), h++
                    } while (h < M)
                }
                return d
            };
            e.options.persister ? e.fetchFn = () => {
                var b, x;
                return (x = (b = e.options).persister) == null ? void 0 : x.call(b, m, {
                    client: e.client,
                    queryKey: e.queryKey,
                    meta: e.options.meta,
                    signal: e.signal
                }, r)
            } : e.fetchFn = m
        }
    }
}

function Vg(t, {
    pages: e,
    pageParams: r
}) {
    const i = e.length - 1;
    return e.length > 0 ? t.getNextPageParam(e[i], e, r[i], r) : void 0
}

function TE(t, {
    pages: e,
    pageParams: r
}) {
    var i;
    return e.length > 0 ? (i = t.getPreviousPageParam) == null ? void 0 : i.call(t, e[0], e, r[0], r) : void 0
}
var No, xn, vt, ls, Sn, pr, i0, CE = (i0 = class extends U0 {
    constructor(e) {
        super();
        ue(this, Sn);
        ue(this, No);
        ue(this, xn);
        ue(this, vt);
        ue(this, ls);
        X(this, No, e.client), this.mutationId = e.mutationId, X(this, vt, e.mutationCache), X(this, xn, []), this.state = e.state || PE(), this.setOptions(e.options), this.scheduleGc()
    }
    setOptions(e) {
        this.options = e, this.updateGcTime(this.options.gcTime)
    }
    get meta() {
        return this.options.meta
    }
    addObserver(e) {
        P(this, xn).includes(e) || (P(this, xn).push(e), this.clearGcTimeout(), P(this, vt).notify({
            type: "observerAdded",
            mutation: this,
            observer: e
        }))
    }
    removeObserver(e) {
        X(this, xn, P(this, xn).filter(r => r !== e)), this.scheduleGc(), P(this, vt).notify({
            type: "observerRemoved",
            mutation: this,
            observer: e
        })
    }
    optionalRemove() {
        P(this, xn).length || (this.state.status === "pending" ? this.scheduleGc() : P(this, vt).remove(this))
    }
    continue () {
        var e;
        return ((e = P(this, ls)) == null ? void 0 : e.continue()) ? ? this.execute(this.state.variables)
    }
    async execute(e) {
        var c, d, h, m, g, y, w, k, S, b, x, R, V, M, L, B, K, G;
        const r = () => {
                ke(this, Sn, pr).call(this, {
                    type: "continue"
                })
            },
            i = {
                client: P(this, No),
                meta: this.options.meta,
                mutationKey: this.options.mutationKey
            };
        X(this, ls, B0({
            fn: () => this.options.mutationFn ? this.options.mutationFn(e, i) : Promise.reject(new Error("No mutationFn found")),
            onFail: (j, J) => {
                ke(this, Sn, pr).call(this, {
                    type: "failed",
                    failureCount: j,
                    error: J
                })
            },
            onPause: () => {
                ke(this, Sn, pr).call(this, {
                    type: "pause"
                })
            },
            onContinue: r,
            retry: this.options.retry ? ? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => P(this, vt).canRun(this)
        }));
        const a = this.state.status === "pending",
            l = !P(this, ls).canStart();
        try {
            if (a) r();
            else {
                ke(this, Sn, pr).call(this, {
                    type: "pending",
                    variables: e,
                    isPaused: l
                }), P(this, vt).config.onMutate && await P(this, vt).config.onMutate(e, this, i);
                const J = await ((d = (c = this.options).onMutate) == null ? void 0 : d.call(c, e, i));
                J !== this.state.context && ke(this, Sn, pr).call(this, {
                    type: "pending",
                    context: J,
                    variables: e,
                    isPaused: l
                })
            }
            const j = await P(this, ls).start();
            return await ((m = (h = P(this, vt).config).onSuccess) == null ? void 0 : m.call(h, j, e, this.state.context, this, i)), await ((y = (g = this.options).onSuccess) == null ? void 0 : y.call(g, j, e, this.state.context, i)), await ((k = (w = P(this, vt).config).onSettled) == null ? void 0 : k.call(w, j, null, this.state.variables, this.state.context, this, i)), await ((b = (S = this.options).onSettled) == null ? void 0 : b.call(S, j, null, e, this.state.context, i)), ke(this, Sn, pr).call(this, {
                type: "success",
                data: j
            }), j
        } catch (j) {
            try {
                await ((R = (x = P(this, vt).config).onError) == null ? void 0 : R.call(x, j, e, this.state.context, this, i))
            } catch (J) {
                Promise.reject(J)
            }
            try {
                await ((M = (V = this.options).onError) == null ? void 0 : M.call(V, j, e, this.state.context, i))
            } catch (J) {
                Promise.reject(J)
            }
            try {
                await ((B = (L = P(this, vt).config).onSettled) == null ? void 0 : B.call(L, void 0, j, this.state.variables, this.state.context, this, i))
            } catch (J) {
                Promise.reject(J)
            }
            try {
                await ((G = (K = this.options).onSettled) == null ? void 0 : G.call(K, void 0, j, e, this.state.context, i))
            } catch (J) {
                Promise.reject(J)
            }
            throw ke(this, Sn, pr).call(this, {
                type: "error",
                error: j
            }), j
        } finally {
            P(this, vt).runNext(this)
        }
    }
}, No = new WeakMap, xn = new WeakMap, vt = new WeakMap, ls = new WeakMap, Sn = new WeakSet, pr = function(e) {
    const r = i => {
        switch (e.type) {
            case "failed":
                return { ...i,
                    failureCount: e.failureCount,
                    failureReason: e.error
                };
            case "pause":
                return { ...i,
                    isPaused: !0
                };
            case "continue":
                return { ...i,
                    isPaused: !1
                };
            case "pending":
                return { ...i,
                    context: e.context,
                    data: void 0,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    isPaused: e.isPaused,
                    status: "pending",
                    variables: e.variables,
                    submittedAt: Date.now()
                };
            case "success":
                return { ...i,
                    data: e.data,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    status: "success",
                    isPaused: !1
                };
            case "error":
                return { ...i,
                    data: void 0,
                    error: e.error,
                    failureCount: i.failureCount + 1,
                    failureReason: e.error,
                    isPaused: !1,
                    status: "error"
                }
        }
    };
    this.state = r(this.state), ft.batch(() => {
        P(this, xn).forEach(i => {
            i.onMutationUpdate(e)
        }), P(this, vt).notify({
            mutation: this,
            type: "updated",
            action: e
        })
    })
}, i0);

function PE() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    }
}
var Un, dn, Oo, o0, _E = (o0 = class extends Mo {
    constructor(e = {}) {
        super();
        ue(this, Un);
        ue(this, dn);
        ue(this, Oo);
        this.config = e, X(this, Un, new Set), X(this, dn, new Map), X(this, Oo, 0)
    }
    build(e, r, i) {
        const a = new CE({
            client: e,
            mutationCache: this,
            mutationId: ++Ja(this, Oo)._,
            options: e.defaultMutationOptions(r),
            state: i
        });
        return this.add(a), a
    }
    add(e) {
        P(this, Un).add(e);
        const r = nl(e);
        if (typeof r == "string") {
            const i = P(this, dn).get(r);
            i ? i.push(e) : P(this, dn).set(r, [e])
        }
        this.notify({
            type: "added",
            mutation: e
        })
    }
    remove(e) {
        if (P(this, Un).delete(e)) {
            const r = nl(e);
            if (typeof r == "string") {
                const i = P(this, dn).get(r);
                if (i)
                    if (i.length > 1) {
                        const a = i.indexOf(e);
                        a !== -1 && i.splice(a, 1)
                    } else i[0] === e && P(this, dn).delete(r)
            }
        }
        this.notify({
            type: "removed",
            mutation: e
        })
    }
    canRun(e) {
        const r = nl(e);
        if (typeof r == "string") {
            const i = P(this, dn).get(r),
                a = i == null ? void 0 : i.find(l => l.state.status === "pending");
            return !a || a === e
        } else return !0
    }
    runNext(e) {
        var i;
        const r = nl(e);
        if (typeof r == "string") {
            const a = (i = P(this, dn).get(r)) == null ? void 0 : i.find(l => l !== e && l.state.isPaused);
            return (a == null ? void 0 : a.continue()) ? ? Promise.resolve()
        } else return Promise.resolve()
    }
    clear() {
        ft.batch(() => {
            P(this, Un).forEach(e => {
                this.notify({
                    type: "removed",
                    mutation: e
                })
            }), P(this, Un).clear(), P(this, dn).clear()
        })
    }
    getAll() {
        return Array.from(P(this, Un))
    }
    find(e) {
        const r = {
            exact: !0,
            ...e
        };
        return this.getAll().find(i => Ng(r, i))
    }
    findAll(e = {}) {
        return this.getAll().filter(r => Ng(e, r))
    }
    notify(e) {
        ft.batch(() => {
            this.listeners.forEach(r => {
                r(e)
            })
        })
    }
    resumePausedMutations() {
        const e = this.getAll().filter(r => r.state.isPaused);
        return ft.batch(() => Promise.all(e.map(r => r.continue().catch(Mt))))
    }
}, Un = new WeakMap, dn = new WeakMap, Oo = new WeakMap, o0);

function nl(t) {
    var e;
    return (e = t.options.scope) == null ? void 0 : e.id
}
var bn, a0, RE = (a0 = class extends Mo {
        constructor(e = {}) {
            super();
            ue(this, bn);
            this.config = e, X(this, bn, new Map)
        }
        build(e, r, i) {
            const a = r.queryKey,
                l = r.queryHash ? ? bf(a, r);
            let c = this.get(l);
            return c || (c = new SE({
                client: e,
                queryKey: a,
                queryHash: l,
                options: e.defaultQueryOptions(r),
                state: i,
                defaultOptions: e.getQueryDefaults(a)
            }), this.add(c)), c
        }
        add(e) {
            P(this, bn).has(e.queryHash) || (P(this, bn).set(e.queryHash, e), this.notify({
                type: "added",
                query: e
            }))
        }
        remove(e) {
            const r = P(this, bn).get(e.queryHash);
            r && (e.destroy(), r === e && P(this, bn).delete(e.queryHash), this.notify({
                type: "removed",
                query: e
            }))
        }
        clear() {
            ft.batch(() => {
                this.getAll().forEach(e => {
                    this.remove(e)
                })
            })
        }
        get(e) {
            return P(this, bn).get(e)
        }
        getAll() {
            return [...P(this, bn).values()]
        }
        find(e) {
            const r = {
                exact: !0,
                ...e
            };
            return this.getAll().find(i => Ag(r, i))
        }
        findAll(e = {}) {
            const r = this.getAll();
            return Object.keys(e).length > 0 ? r.filter(i => Ag(e, i)) : r
        }
        notify(e) {
            ft.batch(() => {
                this.listeners.forEach(r => {
                    r(e)
                })
            })
        }
        onFocus() {
            ft.batch(() => {
                this.getAll().forEach(e => {
                    e.onFocus()
                })
            })
        }
        onOnline() {
            ft.batch(() => {
                this.getAll().forEach(e => {
                    e.onOnline()
                })
            })
        }
    }, bn = new WeakMap, a0),
    Ke, kr, Er, ni, ri, Tr, si, ii, l0, AE = (l0 = class {
        constructor(t = {}) {
            ue(this, Ke);
            ue(this, kr);
            ue(this, Er);
            ue(this, ni);
            ue(this, ri);
            ue(this, Tr);
            ue(this, si);
            ue(this, ii);
            X(this, Ke, t.queryCache || new RE), X(this, kr, t.mutationCache || new _E), X(this, Er, t.defaultOptions || {}), X(this, ni, new Map), X(this, ri, new Map), X(this, Tr, 0)
        }
        mount() {
            Ja(this, Tr)._++, P(this, Tr) === 1 && (X(this, si, Ef.subscribe(async t => {
                t && (await this.resumePausedMutations(), P(this, Ke).onFocus())
            })), X(this, ii, Tl.subscribe(async t => {
                t && (await this.resumePausedMutations(), P(this, Ke).onOnline())
            })))
        }
        unmount() {
            var t, e;
            Ja(this, Tr)._--, P(this, Tr) === 0 && ((t = P(this, si)) == null || t.call(this), X(this, si, void 0), (e = P(this, ii)) == null || e.call(this), X(this, ii, void 0))
        }
        isFetching(t) {
            return P(this, Ke).findAll({ ...t,
                fetchStatus: "fetching"
            }).length
        }
        isMutating(t) {
            return P(this, kr).findAll({ ...t,
                status: "pending"
            }).length
        }
        getQueryData(t) {
            var r;
            const e = this.defaultQueryOptions({
                queryKey: t
            });
            return (r = P(this, Ke).get(e.queryHash)) == null ? void 0 : r.state.data
        }
        ensureQueryData(t) {
            const e = this.defaultQueryOptions(t),
                r = P(this, Ke).build(this, e),
                i = r.state.data;
            return i === void 0 ? this.fetchQuery(t) : (t.revalidateIfStale && r.isStaleByTime(Pr(e.staleTime, r)) && this.prefetchQuery(e), Promise.resolve(i))
        }
        getQueriesData(t) {
            return P(this, Ke).findAll(t).map(({
                queryKey: e,
                state: r
            }) => {
                const i = r.data;
                return [e, i]
            })
        }
        setQueryData(t, e, r) {
            const i = this.defaultQueryOptions({
                    queryKey: t
                }),
                a = P(this, Ke).get(i.queryHash),
                l = a == null ? void 0 : a.state.data,
                c = cE(e, l);
            if (c !== void 0) return P(this, Ke).build(this, i).setData(c, { ...r,
                manual: !0
            })
        }
        setQueriesData(t, e, r) {
            return ft.batch(() => P(this, Ke).findAll(t).map(({
                queryKey: i
            }) => [i, this.setQueryData(i, e, r)]))
        }
        getQueryState(t) {
            var r;
            const e = this.defaultQueryOptions({
                queryKey: t
            });
            return (r = P(this, Ke).get(e.queryHash)) == null ? void 0 : r.state
        }
        removeQueries(t) {
            const e = P(this, Ke);
            ft.batch(() => {
                e.findAll(t).forEach(r => {
                    e.remove(r)
                })
            })
        }
        resetQueries(t, e) {
            const r = P(this, Ke);
            return ft.batch(() => (r.findAll(t).forEach(i => {
                i.reset()
            }), this.refetchQueries({
                type: "active",
                ...t
            }, e)))
        }
        cancelQueries(t, e = {}) {
            const r = {
                    revert: !0,
                    ...e
                },
                i = ft.batch(() => P(this, Ke).findAll(t).map(a => a.cancel(r)));
            return Promise.all(i).then(Mt).catch(Mt)
        }
        invalidateQueries(t, e = {}) {
            return ft.batch(() => (P(this, Ke).findAll(t).forEach(r => {
                r.invalidate()
            }), (t == null ? void 0 : t.refetchType) === "none" ? Promise.resolve() : this.refetchQueries({ ...t,
                type: (t == null ? void 0 : t.refetchType) ? ? (t == null ? void 0 : t.type) ? ? "active"
            }, e)))
        }
        refetchQueries(t, e = {}) {
            const r = { ...e,
                    cancelRefetch: e.cancelRefetch ? ? !0
                },
                i = ft.batch(() => P(this, Ke).findAll(t).filter(a => !a.isDisabled() && !a.isStatic()).map(a => {
                    let l = a.fetch(void 0, r);
                    return r.throwOnError || (l = l.catch(Mt)), a.state.fetchStatus === "paused" ? Promise.resolve() : l
                }));
            return Promise.all(i).then(Mt)
        }
        fetchQuery(t) {
            const e = this.defaultQueryOptions(t);
            e.retry === void 0 && (e.retry = !1);
            const r = P(this, Ke).build(this, e);
            return r.isStaleByTime(Pr(e.staleTime, r)) ? r.fetch(e) : Promise.resolve(r.state.data)
        }
        prefetchQuery(t) {
            return this.fetchQuery(t).then(Mt).catch(Mt)
        }
        fetchInfiniteQuery(t) {
            return t.behavior = Fg(t.pages), this.fetchQuery(t)
        }
        prefetchInfiniteQuery(t) {
            return this.fetchInfiniteQuery(t).then(Mt).catch(Mt)
        }
        ensureInfiniteQueryData(t) {
            return t.behavior = Fg(t.pages), this.ensureQueryData(t)
        }
        resumePausedMutations() {
            return Tl.isOnline() ? P(this, kr).resumePausedMutations() : Promise.resolve()
        }
        getQueryCache() {
            return P(this, Ke)
        }
        getMutationCache() {
            return P(this, kr)
        }
        getDefaultOptions() {
            return P(this, Er)
        }
        setDefaultOptions(t) {
            X(this, Er, t)
        }
        setQueryDefaults(t, e) {
            P(this, ni).set(bo(t), {
                queryKey: t,
                defaultOptions: e
            })
        }
        getQueryDefaults(t) {
            const e = [...P(this, ni).values()],
                r = {};
            return e.forEach(i => {
                ko(t, i.queryKey) && Object.assign(r, i.defaultOptions)
            }), r
        }
        setMutationDefaults(t, e) {
            P(this, ri).set(bo(t), {
                mutationKey: t,
                defaultOptions: e
            })
        }
        getMutationDefaults(t) {
            const e = [...P(this, ri).values()],
                r = {};
            return e.forEach(i => {
                ko(t, i.mutationKey) && Object.assign(r, i.defaultOptions)
            }), r
        }
        defaultQueryOptions(t) {
            if (t._defaulted) return t;
            const e = { ...P(this, Er).queries,
                ...this.getQueryDefaults(t.queryKey),
                ...t,
                _defaulted: !0
            };
            return e.queryHash || (e.queryHash = bf(e.queryKey, e)), e.refetchOnReconnect === void 0 && (e.refetchOnReconnect = e.networkMode !== "always"), e.throwOnError === void 0 && (e.throwOnError = !!e.suspense), !e.networkMode && e.persister && (e.networkMode = "offlineFirst"), e.queryFn === kf && (e.enabled = !1), e
        }
        defaultMutationOptions(t) {
            return t != null && t._defaulted ? t : { ...P(this, Er).mutations,
                ...(t == null ? void 0 : t.mutationKey) && this.getMutationDefaults(t.mutationKey),
                ...t,
                _defaulted: !0
            }
        }
        clear() {
            P(this, Ke).clear(), P(this, kr).clear()
        }
    }, Ke = new WeakMap, kr = new WeakMap, Er = new WeakMap, ni = new WeakMap, ri = new WeakMap, Tr = new WeakMap, si = new WeakMap, ii = new WeakMap, l0),
    H0 = D.createContext(void 0),
    NE = t => {
        const e = D.useContext(H0);
        if (!e) throw new Error("No QueryClient set, use QueryClientProvider to set one");
        return e
    },
    OE = ({
        client: t,
        children: e
    }) => (D.useEffect(() => (t.mount(), () => {
        t.unmount()
    }), [t]), T.jsx(H0.Provider, {
        value: t,
        children: e
    })),
    q0 = D.createContext(!1),
    LE = () => D.useContext(q0);
q0.Provider;

function ME() {
    let t = !1;
    return {
        clearReset: () => {
            t = !1
        },
        reset: () => {
            t = !0
        },
        isReset: () => t
    }
}
var DE = D.createContext(ME()),
    jE = () => D.useContext(DE),
    IE = (t, e, r) => {
        const i = r != null && r.state.error && typeof t.throwOnError == "function" ? F0(t.throwOnError, [r.state.error, r]) : t.throwOnError;
        (t.suspense || t.experimental_prefetchInRender || i) && (e.isReset() || (t.retryOnMount = !1))
    },
    FE = t => {
        D.useEffect(() => {
            t.clearReset()
        }, [t])
    },
    VE = ({
        result: t,
        errorResetBoundary: e,
        throwOnError: r,
        query: i,
        suspense: a
    }) => t.isError && !e.isReset() && !t.isFetching && i && (a && t.data === void 0 || F0(r, [t.error, i])),
    BE = t => {
        if (t.suspense) {
            const r = a => a === "static" ? a : Math.max(a ? ? 1e3, 1e3),
                i = t.staleTime;
            t.staleTime = typeof i == "function" ? (...a) => r(i(...a)) : r(i), typeof t.gcTime == "number" && (t.gcTime = Math.max(t.gcTime, 1e3))
        }
    },
    UE = (t, e) => t.isLoading && t.isFetching && !e,
    zE = (t, e) => (t == null ? void 0 : t.suspense) && e.isPending,
    Bg = (t, e, r) => e.fetchOptimistic(t).catch(() => {
        r.clearReset()
    });

function $E(t, e, r) {
    var w, k, S, b;
    const i = LE(),
        a = jE(),
        l = NE(),
        c = l.defaultQueryOptions(t);
    (k = (w = l.getDefaultOptions().queries) == null ? void 0 : w._experimental_beforeQuery) == null || k.call(w, c);
    const d = l.getQueryCache().get(c.queryHash);
    c._optimisticResults = i ? "isRestoring" : "optimistic", BE(c), IE(c, a, d), FE(a);
    const h = !l.getQueryCache().get(c.queryHash),
        [m] = D.useState(() => new e(l, c)),
        g = m.getOptimisticResult(c),
        y = !i && t.subscribed !== !1;
    if (D.useSyncExternalStore(D.useCallback(x => {
            const R = y ? m.subscribe(ft.batchCalls(x)) : Mt;
            return m.updateResult(), R
        }, [m, y]), () => m.getCurrentResult(), () => m.getCurrentResult()), D.useEffect(() => {
            m.setOptions(c)
        }, [c, m]), zE(c, g)) throw Bg(c, m, a);
    if (VE({
            result: g,
            errorResetBoundary: a,
            throwOnError: c.throwOnError,
            query: d,
            suspense: c.suspense
        })) throw g.error;
    if ((b = (S = l.getDefaultOptions().queries) == null ? void 0 : S._experimental_afterQuery) == null || b.call(S, c, g), c.experimental_prefetchInRender && !ds && UE(g, i)) {
        const x = h ? Bg(c, m, a) : d == null ? void 0 : d.promise;
        x == null || x.catch(Mt).finally(() => {
            m.updateResult()
        })
    }
    return c.notifyOnChangeProps ? g : m.trackResult(g)
}

function HE(t, e) {
    return $E(t, bE)
}
const qE = new AE({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: !1,
            retry: 1
        }
    }
});
c0();
/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Cl() {
    return Cl = Object.assign ? Object.assign.bind() : function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i])
        }
        return t
    }, Cl.apply(this, arguments)
}
var Cr;
(function(t) {
    t.Pop = "POP", t.Push = "PUSH", t.Replace = "REPLACE"
})(Cr || (Cr = {}));
const Ug = "popstate";

function WE(t) {
    t === void 0 && (t = {});

    function e(i, a) {
        let {
            pathname: l,
            search: c,
            hash: d
        } = i.location;
        return Ud("", {
            pathname: l,
            search: c,
            hash: d
        }, a.state && a.state.usr || null, a.state && a.state.key || "default")
    }

    function r(i, a) {
        return typeof a == "string" ? a : K0(a)
    }
    return QE(e, r, null, t)
}

function It(t, e) {
    if (t === !1 || t === null || typeof t > "u") throw new Error(e)
}

function W0(t, e) {
    if (!t) {
        typeof console < "u" && console.warn(e);
        try {
            throw new Error(e)
        } catch {}
    }
}

function KE() {
    return Math.random().toString(36).substr(2, 8)
}

function zg(t, e) {
    return {
        usr: t.state,
        key: t.key,
        idx: e
    }
}

function Ud(t, e, r, i) {
    return r === void 0 && (r = null), Cl({
        pathname: typeof t == "string" ? t : t.pathname,
        search: "",
        hash: ""
    }, typeof e == "string" ? Il(e) : e, {
        state: r,
        key: e && e.key || i || KE()
    })
}

function K0(t) {
    let {
        pathname: e = "/",
        search: r = "",
        hash: i = ""
    } = t;
    return r && r !== "?" && (e += r.charAt(0) === "?" ? r : "?" + r), i && i !== "#" && (e += i.charAt(0) === "#" ? i : "#" + i), e
}

function Il(t) {
    let e = {};
    if (t) {
        let r = t.indexOf("#");
        r >= 0 && (e.hash = t.substr(r), t = t.substr(0, r));
        let i = t.indexOf("?");
        i >= 0 && (e.search = t.substr(i), t = t.substr(0, i)), t && (e.pathname = t)
    }
    return e
}

function QE(t, e, r, i) {
    i === void 0 && (i = {});
    let {
        window: a = document.defaultView,
        v5Compat: l = !1
    } = i, c = a.history, d = Cr.Pop, h = null, m = g();
    m == null && (m = 0, c.replaceState(Cl({}, c.state, {
        idx: m
    }), ""));

    function g() {
        return (c.state || {
            idx: null
        }).idx
    }

    function y() {
        d = Cr.Pop;
        let x = g(),
            R = x == null ? null : x - m;
        m = x, h && h({
            action: d,
            location: b.location,
            delta: R
        })
    }

    function w(x, R) {
        d = Cr.Push;
        let V = Ud(b.location, x, R);
        m = g() + 1;
        let M = zg(V, m),
            L = b.createHref(V);
        try {
            c.pushState(M, "", L)
        } catch (B) {
            if (B instanceof DOMException && B.name === "DataCloneError") throw B;
            a.location.assign(L)
        }
        l && h && h({
            action: d,
            location: b.location,
            delta: 1
        })
    }

    function k(x, R) {
        d = Cr.Replace;
        let V = Ud(b.location, x, R);
        m = g();
        let M = zg(V, m),
            L = b.createHref(V);
        c.replaceState(M, "", L), l && h && h({
            action: d,
            location: b.location,
            delta: 0
        })
    }

    function S(x) {
        let R = a.location.origin !== "null" ? a.location.origin : a.location.href,
            V = typeof x == "string" ? x : K0(x);
        return V = V.replace(/ $/, "%20"), It(R, "No window.location.(origin|href) available to create URL for href: " + V), new URL(V, R)
    }
    let b = {
        get action() {
            return d
        },
        get location() {
            return t(a, c)
        },
        listen(x) {
            if (h) throw new Error("A history only accepts one active listener");
            return a.addEventListener(Ug, y), h = x, () => {
                a.removeEventListener(Ug, y), h = null
            }
        },
        createHref(x) {
            return e(a, x)
        },
        createURL: S,
        encodeLocation(x) {
            let R = S(x);
            return {
                pathname: R.pathname,
                search: R.search,
                hash: R.hash
            }
        },
        push: w,
        replace: k,
        go(x) {
            return c.go(x)
        }
    };
    return b
}
var $g;
(function(t) {
    t.data = "data", t.deferred = "deferred", t.redirect = "redirect", t.error = "error"
})($g || ($g = {}));

function GE(t, e, r) {
    return r === void 0 && (r = "/"), YE(t, e, r)
}

function YE(t, e, r, i) {
    let a = typeof e == "string" ? Il(e) : e,
        l = Y0(a.pathname || "/", r);
    if (l == null) return null;
    let c = Q0(t);
    XE(c);
    let d = null;
    for (let h = 0; d == null && h < c.length; ++h) {
        let m = uT(l);
        d = oT(c[h], m)
    }
    return d
}

function Q0(t, e, r, i) {
    e === void 0 && (e = []), r === void 0 && (r = []), i === void 0 && (i = "");
    let a = (l, c, d) => {
        let h = {
            relativePath: d === void 0 ? l.path || "" : d,
            caseSensitive: l.caseSensitive === !0,
            childrenIndex: c,
            route: l
        };
        h.relativePath.startsWith("/") && (It(h.relativePath.startsWith(i), 'Absolute route path "' + h.relativePath + '" nested under path ' + ('"' + i + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), h.relativePath = h.relativePath.slice(i.length));
        let m = Ks([i, h.relativePath]),
            g = r.concat(h);
        l.children && l.children.length > 0 && (It(l.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + m + '".')), Q0(l.children, e, g, m)), !(l.path == null && !l.index) && e.push({
            path: m,
            score: sT(m, l.index),
            routesMeta: g
        })
    };
    return t.forEach((l, c) => {
        var d;
        if (l.path === "" || !((d = l.path) != null && d.includes("?"))) a(l, c);
        else
            for (let h of G0(l.path)) a(l, c, h)
    }), e
}

function G0(t) {
    let e = t.split("/");
    if (e.length === 0) return [];
    let [r, ...i] = e, a = r.endsWith("?"), l = r.replace(/\?$/, "");
    if (i.length === 0) return a ? [l, ""] : [l];
    let c = G0(i.join("/")),
        d = [];
    return d.push(...c.map(h => h === "" ? l : [l, h].join("/"))), a && d.push(...c), d.map(h => t.startsWith("/") && h === "" ? "/" : h)
}

function XE(t) {
    t.sort((e, r) => e.score !== r.score ? r.score - e.score : iT(e.routesMeta.map(i => i.childrenIndex), r.routesMeta.map(i => i.childrenIndex)))
}
const JE = /^:[\w-]+$/,
    ZE = 3,
    eT = 2,
    tT = 1,
    nT = 10,
    rT = -2,
    Hg = t => t === "*";

function sT(t, e) {
    let r = t.split("/"),
        i = r.length;
    return r.some(Hg) && (i += rT), e && (i += eT), r.filter(a => !Hg(a)).reduce((a, l) => a + (JE.test(l) ? ZE : l === "" ? tT : nT), i)
}

function iT(t, e) {
    return t.length === e.length && t.slice(0, -1).every((i, a) => i === e[a]) ? t[t.length - 1] - e[e.length - 1] : 0
}

function oT(t, e, r) {
    let {
        routesMeta: i
    } = t, a = {}, l = "/", c = [];
    for (let d = 0; d < i.length; ++d) {
        let h = i[d],
            m = d === i.length - 1,
            g = l === "/" ? e : e.slice(l.length) || "/",
            y = aT({
                path: h.relativePath,
                caseSensitive: h.caseSensitive,
                end: m
            }, g),
            w = h.route;
        if (!y) return null;
        Object.assign(a, y.params), c.push({
            params: a,
            pathname: Ks([l, y.pathname]),
            pathnameBase: cT(Ks([l, y.pathnameBase])),
            route: w
        }), y.pathnameBase !== "/" && (l = Ks([l, y.pathnameBase]))
    }
    return c
}

function aT(t, e) {
    typeof t == "string" && (t = {
        path: t,
        caseSensitive: !1,
        end: !0
    });
    let [r, i] = lT(t.path, t.caseSensitive, t.end), a = e.match(r);
    if (!a) return null;
    let l = a[0],
        c = l.replace(/(.)\/+$/, "$1"),
        d = a.slice(1);
    return {
        params: i.reduce((m, g, y) => {
            let {
                paramName: w,
                isOptional: k
            } = g;
            if (w === "*") {
                let b = d[y] || "";
                c = l.slice(0, l.length - b.length).replace(/(.)\/+$/, "$1")
            }
            const S = d[y];
            return k && !S ? m[w] = void 0 : m[w] = (S || "").replace(/%2F/g, "/"), m
        }, {}),
        pathname: l,
        pathnameBase: c,
        pattern: t
    }
}

function lT(t, e, r) {
    e === void 0 && (e = !1), r === void 0 && (r = !0), W0(t === "*" || !t.endsWith("*") || t.endsWith("/*"), 'Route path "' + t + '" will be treated as if it were ' + ('"' + t.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + t.replace(/\*$/, "/*") + '".'));
    let i = [],
        a = "^" + t.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (c, d, h) => (i.push({
            paramName: d,
            isOptional: h != null
        }), h ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return t.endsWith("*") ? (i.push({
        paramName: "*"
    }), a += t === "*" || t === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : r ? a += "\\/*$" : t !== "" && t !== "/" && (a += "(?:(?=\\/|$))"), [new RegExp(a, e ? void 0 : "i"), i]
}

function uT(t) {
    try {
        return t.split("/").map(e => decodeURIComponent(e).replace(/\//g, "%2F")).join("/")
    } catch (e) {
        return W0(!1, 'The URL path "' + t + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + e + ").")), t
    }
}

function Y0(t, e) {
    if (e === "/") return t;
    if (!t.toLowerCase().startsWith(e.toLowerCase())) return null;
    let r = e.endsWith("/") ? e.length - 1 : e.length,
        i = t.charAt(r);
    return i && i !== "/" ? null : t.slice(r) || "/"
}
const Ks = t => t.join("/").replace(/\/\/+/g, "/"),
    cT = t => t.replace(/\/+$/, "").replace(/^\/*/, "/");

function dT(t) {
    return t != null && typeof t.status == "number" && typeof t.statusText == "string" && typeof t.internal == "boolean" && "data" in t
}
const X0 = ["post", "put", "patch", "delete"];
new Set(X0);
const fT = ["get", ...X0];
new Set(fT);
/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Pl() {
    return Pl = Object.assign ? Object.assign.bind() : function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i])
        }
        return t
    }, Pl.apply(this, arguments)
}
const hT = D.createContext(null),
    pT = D.createContext(null),
    J0 = D.createContext(null),
    Fl = D.createContext(null),
    Vl = D.createContext({
        outlet: null,
        matches: [],
        isDataRoute: !1
    }),
    Z0 = D.createContext(null);

function Cf() {
    return D.useContext(Fl) != null
}

function ew() {
    return Cf() || It(!1), D.useContext(Fl).location
}

function mT(t, e) {
    return gT(t, e)
}

function gT(t, e, r, i) {
    Cf() || It(!1);
    let {
        navigator: a
    } = D.useContext(J0), {
        matches: l
    } = D.useContext(Vl), c = l[l.length - 1], d = c ? c.params : {};
    c && c.pathname;
    let h = c ? c.pathnameBase : "/";
    c && c.route;
    let m = ew(),
        g;
    if (e) {
        var y;
        let x = typeof e == "string" ? Il(e) : e;
        h === "/" || (y = x.pathname) != null && y.startsWith(h) || It(!1), g = x
    } else g = m;
    let w = g.pathname || "/",
        k = w;
    if (h !== "/") {
        let x = h.replace(/^\//, "").split("/");
        k = "/" + w.replace(/^\//, "").split("/").slice(x.length).join("/")
    }
    let S = GE(t, {
            pathname: k
        }),
        b = ST(S && S.map(x => Object.assign({}, x, {
            params: Object.assign({}, d, x.params),
            pathname: Ks([h, a.encodeLocation ? a.encodeLocation(x.pathname).pathname : x.pathname]),
            pathnameBase: x.pathnameBase === "/" ? h : Ks([h, a.encodeLocation ? a.encodeLocation(x.pathnameBase).pathname : x.pathnameBase])
        })), l, r, i);
    return e && b ? D.createElement(Fl.Provider, {
        value: {
            location: Pl({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, g),
            navigationType: Cr.Pop
        }
    }, b) : b
}

function yT() {
    let t = TT(),
        e = dT(t) ? t.status + " " + t.statusText : t instanceof Error ? t.message : JSON.stringify(t),
        r = t instanceof Error ? t.stack : null,
        a = {
            padding: "0.5rem",
            backgroundColor: "rgba(200,200,200, 0.5)"
        };
    return D.createElement(D.Fragment, null, D.createElement("h2", null, "Unexpected Application Error!"), D.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, e), r ? D.createElement("pre", {
        style: a
    }, r) : null, null)
}
const vT = D.createElement(yT, null);
class wT extends D.Component {
    constructor(e) {
        super(e), this.state = {
            location: e.location,
            revalidation: e.revalidation,
            error: e.error
        }
    }
    static getDerivedStateFromError(e) {
        return {
            error: e
        }
    }
    static getDerivedStateFromProps(e, r) {
        return r.location !== e.location || r.revalidation !== "idle" && e.revalidation === "idle" ? {
            error: e.error,
            location: e.location,
            revalidation: e.revalidation
        } : {
            error: e.error !== void 0 ? e.error : r.error,
            location: r.location,
            revalidation: e.revalidation || r.revalidation
        }
    }
    componentDidCatch(e, r) {
        console.error("React Router caught the following error during render", e, r)
    }
    render() {
        return this.state.error !== void 0 ? D.createElement(Vl.Provider, {
            value: this.props.routeContext
        }, D.createElement(Z0.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}

function xT(t) {
    let {
        routeContext: e,
        match: r,
        children: i
    } = t, a = D.useContext(hT);
    return a && a.static && a.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (a.staticContext._deepestRenderedBoundaryId = r.route.id), D.createElement(Vl.Provider, {
        value: e
    }, i)
}

function ST(t, e, r, i) {
    var a;
    if (e === void 0 && (e = []), r === void 0 && (r = null), i === void 0 && (i = null), t == null) {
        var l;
        if (!r) return null;
        if (r.errors) t = r.matches;
        else if ((l = i) != null && l.v7_partialHydration && e.length === 0 && !r.initialized && r.matches.length > 0) t = r.matches;
        else return null
    }
    let c = t,
        d = (a = r) == null ? void 0 : a.errors;
    if (d != null) {
        let g = c.findIndex(y => y.route.id && (d == null ? void 0 : d[y.route.id]) !== void 0);
        g >= 0 || It(!1), c = c.slice(0, Math.min(c.length, g + 1))
    }
    let h = !1,
        m = -1;
    if (r && i && i.v7_partialHydration)
        for (let g = 0; g < c.length; g++) {
            let y = c[g];
            if ((y.route.HydrateFallback || y.route.hydrateFallbackElement) && (m = g), y.route.id) {
                let {
                    loaderData: w,
                    errors: k
                } = r, S = y.route.loader && w[y.route.id] === void 0 && (!k || k[y.route.id] === void 0);
                if (y.route.lazy || S) {
                    h = !0, m >= 0 ? c = c.slice(0, m + 1) : c = [c[0]];
                    break
                }
            }
        }
    return c.reduceRight((g, y, w) => {
        let k, S = !1,
            b = null,
            x = null;
        r && (k = d && y.route.id ? d[y.route.id] : void 0, b = y.route.errorElement || vT, h && (m < 0 && w === 0 ? (CT("route-fallback"), S = !0, x = null) : m === w && (S = !0, x = y.route.hydrateFallbackElement || null)));
        let R = e.concat(c.slice(0, w + 1)),
            V = () => {
                let M;
                return k ? M = b : S ? M = x : y.route.Component ? M = D.createElement(y.route.Component, null) : y.route.element ? M = y.route.element : M = g, D.createElement(xT, {
                    match: y,
                    routeContext: {
                        outlet: g,
                        matches: R,
                        isDataRoute: r != null
                    },
                    children: M
                })
            };
        return r && (y.route.ErrorBoundary || y.route.errorElement || w === 0) ? D.createElement(wT, {
            location: r.location,
            revalidation: r.revalidation,
            component: b,
            error: k,
            children: V(),
            routeContext: {
                outlet: null,
                matches: R,
                isDataRoute: !0
            }
        }) : V()
    }, null)
}
var tw = (function(t) {
    return t.UseBlocker = "useBlocker", t.UseLoaderData = "useLoaderData", t.UseActionData = "useActionData", t.UseRouteError = "useRouteError", t.UseNavigation = "useNavigation", t.UseRouteLoaderData = "useRouteLoaderData", t.UseMatches = "useMatches", t.UseRevalidator = "useRevalidator", t.UseNavigateStable = "useNavigate", t.UseRouteId = "useRouteId", t
})(tw || {});

function bT(t) {
    let e = D.useContext(pT);
    return e || It(!1), e
}

function kT(t) {
    let e = D.useContext(Vl);
    return e || It(!1), e
}

function ET(t) {
    let e = kT(),
        r = e.matches[e.matches.length - 1];
    return r.route.id || It(!1), r.route.id
}

function TT() {
    var t;
    let e = D.useContext(Z0),
        r = bT(tw.UseRouteError),
        i = ET();
    return e !== void 0 ? e : (t = r.errors) == null ? void 0 : t[i]
}
const qg = {};

function CT(t, e, r) {
    qg[t] || (qg[t] = !0)
}

function PT(t, e) {
    t == null || t.v7_startTransition, t == null || t.v7_relativeSplatPath
}

function zd(t) {
    It(!1)
}

function _T(t) {
    let {
        basename: e = "/",
        children: r = null,
        location: i,
        navigationType: a = Cr.Pop,
        navigator: l,
        static: c = !1,
        future: d
    } = t;
    Cf() && It(!1);
    let h = e.replace(/^\/*/, "/"),
        m = D.useMemo(() => ({
            basename: h,
            navigator: l,
            static: c,
            future: Pl({
                v7_relativeSplatPath: !1
            }, d)
        }), [h, d, l, c]);
    typeof i == "string" && (i = Il(i));
    let {
        pathname: g = "/",
        search: y = "",
        hash: w = "",
        state: k = null,
        key: S = "default"
    } = i, b = D.useMemo(() => {
        let x = Y0(g, h);
        return x == null ? null : {
            location: {
                pathname: x,
                search: y,
                hash: w,
                state: k,
                key: S
            },
            navigationType: a
        }
    }, [h, g, y, w, k, S, a]);
    return b == null ? null : D.createElement(J0.Provider, {
        value: m
    }, D.createElement(Fl.Provider, {
        children: r,
        value: b
    }))
}

function RT(t) {
    let {
        children: e,
        location: r
    } = t;
    return mT($d(e), r)
}
new Promise(() => {});

function $d(t, e) {
    e === void 0 && (e = []);
    let r = [];
    return D.Children.forEach(t, (i, a) => {
        if (!D.isValidElement(i)) return;
        let l = [...e, a];
        if (i.type === D.Fragment) {
            r.push.apply(r, $d(i.props.children, l));
            return
        }
        i.type !== zd && It(!1), !i.props.index || !i.props.children || It(!1);
        let c = {
            id: i.props.id || l.join("-"),
            caseSensitive: i.props.caseSensitive,
            element: i.props.element,
            Component: i.props.Component,
            index: i.props.index,
            path: i.props.path,
            loader: i.props.loader,
            action: i.props.action,
            errorElement: i.props.errorElement,
            ErrorBoundary: i.props.ErrorBoundary,
            hasErrorBoundary: i.props.ErrorBoundary != null || i.props.errorElement != null,
            shouldRevalidate: i.props.shouldRevalidate,
            handle: i.props.handle,
            lazy: i.props.lazy
        };
        i.props.children && (c.children = $d(i.props.children, l)), r.push(c)
    }), r
}
/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
const AT = "6";
try {
    window.__reactRouterVersion = AT
} catch {}
const NT = "startTransition",
    Wg = Sb[NT];

function OT(t) {
    let {
        basename: e,
        children: r,
        future: i,
        window: a
    } = t, l = D.useRef();
    l.current == null && (l.current = WE({
        window: a,
        v5Compat: !0
    }));
    let c = l.current,
        [d, h] = D.useState({
            action: c.action,
            location: c.location
        }),
        {
            v7_startTransition: m
        } = i || {},
        g = D.useCallback(y => {
            m && Wg ? Wg(() => h(y)) : h(y)
        }, [h, m]);
    return D.useLayoutEffect(() => c.listen(g), [c, g]), D.useEffect(() => PT(i), [i]), D.createElement(_T, {
        basename: e,
        children: r,
        location: d.location,
        navigationType: d.action,
        navigator: c,
        future: i
    })
}
var Kg;
(function(t) {
    t.UseScrollRestoration = "useScrollRestoration", t.UseSubmit = "useSubmit", t.UseSubmitFetcher = "useSubmitFetcher", t.UseFetcher = "useFetcher", t.useViewTransitionState = "useViewTransitionState"
})(Kg || (Kg = {}));
var Qg;
(function(t) {
    t.UseFetcher = "useFetcher", t.UseFetchers = "useFetchers", t.UseScrollRestoration = "useScrollRestoration"
})(Qg || (Qg = {}));

function nw(t, e) {
    return function() {
        return t.apply(e, arguments)
    }
}
const {
    toString: LT
} = Object.prototype, {
    getPrototypeOf: Pf
} = Object, {
    iterator: Bl,
    toStringTag: rw
} = Symbol, Ul = (t => e => {
    const r = LT.call(e);
    return t[r] || (t[r] = r.slice(8, -1).toLowerCase())
})(Object.create(null)), pn = t => (t = t.toLowerCase(), e => Ul(e) === t), zl = t => e => typeof e === t, {
    isArray: ui
} = Array, oi = zl("undefined");

function Do(t) {
    return t !== null && !oi(t) && t.constructor !== null && !oi(t.constructor) && Dt(t.constructor.isBuffer) && t.constructor.isBuffer(t)
}
const sw = pn("ArrayBuffer");

function MT(t) {
    let e;
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && sw(t.buffer), e
}
const DT = zl("string"),
    Dt = zl("function"),
    iw = zl("number"),
    jo = t => t !== null && typeof t == "object",
    jT = t => t === !0 || t === !1,
    fl = t => {
        if (Ul(t) !== "object") return !1;
        const e = Pf(t);
        return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(rw in t) && !(Bl in t)
    },
    IT = t => {
        if (!jo(t) || Do(t)) return !1;
        try {
            return Object.keys(t).length === 0 && Object.getPrototypeOf(t) === Object.prototype
        } catch {
            return !1
        }
    },
    FT = pn("Date"),
    VT = pn("File"),
    BT = pn("Blob"),
    UT = pn("FileList"),
    zT = t => jo(t) && Dt(t.pipe),
    $T = t => {
        let e;
        return t && (typeof FormData == "function" && t instanceof FormData || Dt(t.append) && ((e = Ul(t)) === "formdata" || e === "object" && Dt(t.toString) && t.toString() === "[object FormData]"))
    },
    HT = pn("URLSearchParams"),
    [qT, WT, KT, QT] = ["ReadableStream", "Request", "Response", "Headers"].map(pn),
    GT = t => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");

function Io(t, e, {
    allOwnKeys: r = !1
} = {}) {
    if (t === null || typeof t > "u") return;
    let i, a;
    if (typeof t != "object" && (t = [t]), ui(t))
        for (i = 0, a = t.length; i < a; i++) e.call(null, t[i], i, t);
    else {
        if (Do(t)) return;
        const l = r ? Object.getOwnPropertyNames(t) : Object.keys(t),
            c = l.length;
        let d;
        for (i = 0; i < c; i++) d = l[i], e.call(null, t[d], d, t)
    }
}

function ow(t, e) {
    if (Do(t)) return null;
    e = e.toLowerCase();
    const r = Object.keys(t);
    let i = r.length,
        a;
    for (; i-- > 0;)
        if (a = r[i], e === a.toLowerCase()) return a;
    return null
}
const Xr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global,
    aw = t => !oi(t) && t !== Xr;

function Hd() {
    const {
        caseless: t,
        skipUndefined: e
    } = aw(this) && this || {}, r = {}, i = (a, l) => {
        if (l === "__proto__" || l === "constructor" || l === "prototype") return;
        const c = t && ow(r, l) || l;
        fl(r[c]) && fl(a) ? r[c] = Hd(r[c], a) : fl(a) ? r[c] = Hd({}, a) : ui(a) ? r[c] = a.slice() : (!e || !oi(a)) && (r[c] = a)
    };
    for (let a = 0, l = arguments.length; a < l; a++) arguments[a] && Io(arguments[a], i);
    return r
}
const YT = (t, e, r, {
        allOwnKeys: i
    } = {}) => (Io(e, (a, l) => {
        r && Dt(a) ? Object.defineProperty(t, l, {
            value: nw(a, r),
            writable: !0,
            enumerable: !0,
            configurable: !0
        }) : Object.defineProperty(t, l, {
            value: a,
            writable: !0,
            enumerable: !0,
            configurable: !0
        })
    }, {
        allOwnKeys: i
    }), t),
    XT = t => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t),
    JT = (t, e, r, i) => {
        t.prototype = Object.create(e.prototype, i), Object.defineProperty(t.prototype, "constructor", {
            value: t,
            writable: !0,
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t, "super", {
            value: e.prototype
        }), r && Object.assign(t.prototype, r)
    },
    ZT = (t, e, r, i) => {
        let a, l, c;
        const d = {};
        if (e = e || {}, t == null) return e;
        do {
            for (a = Object.getOwnPropertyNames(t), l = a.length; l-- > 0;) c = a[l], (!i || i(c, t, e)) && !d[c] && (e[c] = t[c], d[c] = !0);
            t = r !== !1 && Pf(t)
        } while (t && (!r || r(t, e)) && t !== Object.prototype);
        return e
    },
    eC = (t, e, r) => {
        t = String(t), (r === void 0 || r > t.length) && (r = t.length), r -= e.length;
        const i = t.indexOf(e, r);
        return i !== -1 && i === r
    },
    tC = t => {
        if (!t) return null;
        if (ui(t)) return t;
        let e = t.length;
        if (!iw(e)) return null;
        const r = new Array(e);
        for (; e-- > 0;) r[e] = t[e];
        return r
    },
    nC = (t => e => t && e instanceof t)(typeof Uint8Array < "u" && Pf(Uint8Array)),
    rC = (t, e) => {
        const i = (t && t[Bl]).call(t);
        let a;
        for (;
            (a = i.next()) && !a.done;) {
            const l = a.value;
            e.call(t, l[0], l[1])
        }
    },
    sC = (t, e) => {
        let r;
        const i = [];
        for (;
            (r = t.exec(e)) !== null;) i.push(r);
        return i
    },
    iC = pn("HTMLFormElement"),
    oC = t => t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(r, i, a) {
        return i.toUpperCase() + a
    }),
    Gg = (({
        hasOwnProperty: t
    }) => (e, r) => t.call(e, r))(Object.prototype),
    aC = pn("RegExp"),
    lw = (t, e) => {
        const r = Object.getOwnPropertyDescriptors(t),
            i = {};
        Io(r, (a, l) => {
            let c;
            (c = e(a, l, t)) !== !1 && (i[l] = c || a)
        }), Object.defineProperties(t, i)
    },
    lC = t => {
        lw(t, (e, r) => {
            if (Dt(t) && ["arguments", "caller", "callee"].indexOf(r) !== -1) return !1;
            const i = t[r];
            if (Dt(i)) {
                if (e.enumerable = !1, "writable" in e) {
                    e.writable = !1;
                    return
                }
                e.set || (e.set = () => {
                    throw Error("Can not rewrite read-only method '" + r + "'")
                })
            }
        })
    },
    uC = (t, e) => {
        const r = {},
            i = a => {
                a.forEach(l => {
                    r[l] = !0
                })
            };
        return ui(t) ? i(t) : i(String(t).split(e)), r
    },
    cC = () => {},
    dC = (t, e) => t != null && Number.isFinite(t = +t) ? t : e;

function fC(t) {
    return !!(t && Dt(t.append) && t[rw] === "FormData" && t[Bl])
}
const hC = t => {
        const e = new Array(10),
            r = (i, a) => {
                if (jo(i)) {
                    if (e.indexOf(i) >= 0) return;
                    if (Do(i)) return i;
                    if (!("toJSON" in i)) {
                        e[a] = i;
                        const l = ui(i) ? [] : {};
                        return Io(i, (c, d) => {
                            const h = r(c, a + 1);
                            !oi(h) && (l[d] = h)
                        }), e[a] = void 0, l
                    }
                }
                return i
            };
        return r(t, 0)
    },
    pC = pn("AsyncFunction"),
    mC = t => t && (jo(t) || Dt(t)) && Dt(t.then) && Dt(t.catch),
    uw = ((t, e) => t ? setImmediate : e ? ((r, i) => (Xr.addEventListener("message", ({
        source: a,
        data: l
    }) => {
        a === Xr && l === r && i.length && i.shift()()
    }, !1), a => {
        i.push(a), Xr.postMessage(r, "*")
    }))(`axios@${Math.random()}`, []) : r => setTimeout(r))(typeof setImmediate == "function", Dt(Xr.postMessage)),
    gC = typeof queueMicrotask < "u" ? queueMicrotask.bind(Xr) : typeof process < "u" && process.nextTick || uw,
    yC = t => t != null && Dt(t[Bl]),
    F = {
        isArray: ui,
        isArrayBuffer: sw,
        isBuffer: Do,
        isFormData: $T,
        isArrayBufferView: MT,
        isString: DT,
        isNumber: iw,
        isBoolean: jT,
        isObject: jo,
        isPlainObject: fl,
        isEmptyObject: IT,
        isReadableStream: qT,
        isRequest: WT,
        isResponse: KT,
        isHeaders: QT,
        isUndefined: oi,
        isDate: FT,
        isFile: VT,
        isBlob: BT,
        isRegExp: aC,
        isFunction: Dt,
        isStream: zT,
        isURLSearchParams: HT,
        isTypedArray: nC,
        isFileList: UT,
        forEach: Io,
        merge: Hd,
        extend: YT,
        trim: GT,
        stripBOM: XT,
        inherits: JT,
        toFlatObject: ZT,
        kindOf: Ul,
        kindOfTest: pn,
        endsWith: eC,
        toArray: tC,
        forEachEntry: rC,
        matchAll: sC,
        isHTMLForm: iC,
        hasOwnProperty: Gg,
        hasOwnProp: Gg,
        reduceDescriptors: lw,
        freezeMethods: lC,
        toObjectSet: uC,
        toCamelCase: oC,
        noop: cC,
        toFiniteNumber: dC,
        findKey: ow,
        global: Xr,
        isContextDefined: aw,
        isSpecCompliantForm: fC,
        toJSONObject: hC,
        isAsyncFn: pC,
        isThenable: mC,
        setImmediate: uw,
        asap: gC,
        isIterable: yC
    };
let pe = class cw extends Error {
    static from(e, r, i, a, l, c) {
        const d = new cw(e.message, r || e.code, i, a, l);
        return d.cause = e, d.name = e.name, c && Object.assign(d, c), d
    }
    constructor(e, r, i, a, l) {
        super(e), this.name = "AxiosError", this.isAxiosError = !0, r && (this.code = r), i && (this.config = i), a && (this.request = a), l && (this.response = l, this.status = l.status)
    }
    toJSON() {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: F.toJSONObject(this.config),
            code: this.code,
            status: this.status
        }
    }
};
pe.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";
pe.ERR_BAD_OPTION = "ERR_BAD_OPTION";
pe.ECONNABORTED = "ECONNABORTED";
pe.ETIMEDOUT = "ETIMEDOUT";
pe.ERR_NETWORK = "ERR_NETWORK";
pe.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";
pe.ERR_DEPRECATED = "ERR_DEPRECATED";
pe.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";
pe.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";
pe.ERR_CANCELED = "ERR_CANCELED";
pe.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT";
pe.ERR_INVALID_URL = "ERR_INVALID_URL";
const vC = null;

function qd(t) {
    return F.isPlainObject(t) || F.isArray(t)
}

function dw(t) {
    return F.endsWith(t, "[]") ? t.slice(0, -2) : t
}

function Yg(t, e, r) {
    return t ? t.concat(e).map(function(a, l) {
        return a = dw(a), !r && l ? "[" + a + "]" : a
    }).join(r ? "." : "") : e
}

function wC(t) {
    return F.isArray(t) && !t.some(qd)
}
const xC = F.toFlatObject(F, {}, null, function(e) {
    return /^is[A-Z]/.test(e)
});

function $l(t, e, r) {
    if (!F.isObject(t)) throw new TypeError("target must be an object");
    e = e || new FormData, r = F.toFlatObject(r, {
        metaTokens: !0,
        dots: !1,
        indexes: !1
    }, !1, function(b, x) {
        return !F.isUndefined(x[b])
    });
    const i = r.metaTokens,
        a = r.visitor || g,
        l = r.dots,
        c = r.indexes,
        h = (r.Blob || typeof Blob < "u" && Blob) && F.isSpecCompliantForm(e);
    if (!F.isFunction(a)) throw new TypeError("visitor must be a function");

    function m(S) {
        if (S === null) return "";
        if (F.isDate(S)) return S.toISOString();
        if (F.isBoolean(S)) return S.toString();
        if (!h && F.isBlob(S)) throw new pe("Blob is not supported. Use a Buffer instead.");
        return F.isArrayBuffer(S) || F.isTypedArray(S) ? h && typeof Blob == "function" ? new Blob([S]) : Buffer.from(S) : S
    }

    function g(S, b, x) {
        let R = S;
        if (S && !x && typeof S == "object") {
            if (F.endsWith(b, "{}")) b = i ? b : b.slice(0, -2), S = JSON.stringify(S);
            else if (F.isArray(S) && wC(S) || (F.isFileList(S) || F.endsWith(b, "[]")) && (R = F.toArray(S))) return b = dw(b), R.forEach(function(M, L) {
                !(F.isUndefined(M) || M === null) && e.append(c === !0 ? Yg([b], L, l) : c === null ? b : b + "[]", m(M))
            }), !1
        }
        return qd(S) ? !0 : (e.append(Yg(x, b, l), m(S)), !1)
    }
    const y = [],
        w = Object.assign(xC, {
            defaultVisitor: g,
            convertValue: m,
            isVisitable: qd
        });

    function k(S, b) {
        if (!F.isUndefined(S)) {
            if (y.indexOf(S) !== -1) throw Error("Circular reference detected in " + b.join("."));
            y.push(S), F.forEach(S, function(R, V) {
                (!(F.isUndefined(R) || R === null) && a.call(e, R, F.isString(V) ? V.trim() : V, b, w)) === !0 && k(R, b ? b.concat(V) : [V])
            }), y.pop()
        }
    }
    if (!F.isObject(t)) throw new TypeError("data must be an object");
    return k(t), e
}

function Xg(t) {
    const e = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\0"
    };
    return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, function(i) {
        return e[i]
    })
}

function _f(t, e) {
    this._pairs = [], t && $l(t, this, e)
}
const fw = _f.prototype;
fw.append = function(e, r) {
    this._pairs.push([e, r])
};
fw.toString = function(e) {
    const r = e ? function(i) {
        return e.call(this, i, Xg)
    } : Xg;
    return this._pairs.map(function(a) {
        return r(a[0]) + "=" + r(a[1])
    }, "").join("&")
};

function SC(t) {
    return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+")
}

function hw(t, e, r) {
    if (!e) return t;
    const i = r && r.encode || SC,
        a = F.isFunction(r) ? {
            serialize: r
        } : r,
        l = a && a.serialize;
    let c;
    if (l ? c = l(e, a) : c = F.isURLSearchParams(e) ? e.toString() : new _f(e, a).toString(i), c) {
        const d = t.indexOf("#");
        d !== -1 && (t = t.slice(0, d)), t += (t.indexOf("?") === -1 ? "?" : "&") + c
    }
    return t
}
class Jg {
    constructor() {
        this.handlers = []
    }
    use(e, r, i) {
        return this.handlers.push({
            fulfilled: e,
            rejected: r,
            synchronous: i ? i.synchronous : !1,
            runWhen: i ? i.runWhen : null
        }), this.handlers.length - 1
    }
    eject(e) {
        this.handlers[e] && (this.handlers[e] = null)
    }
    clear() {
        this.handlers && (this.handlers = [])
    }
    forEach(e) {
        F.forEach(this.handlers, function(i) {
            i !== null && e(i)
        })
    }
}
const Rf = {
        silentJSONParsing: !0,
        forcedJSONParsing: !0,
        clarifyTimeoutError: !1,
        legacyInterceptorReqResOrdering: !0
    },
    bC = typeof URLSearchParams < "u" ? URLSearchParams : _f,
    kC = typeof FormData < "u" ? FormData : null,
    EC = typeof Blob < "u" ? Blob : null,
    TC = {
        isBrowser: !0,
        classes: {
            URLSearchParams: bC,
            FormData: kC,
            Blob: EC
        },
        protocols: ["http", "https", "file", "blob", "url", "data"]
    },
    Af = typeof window < "u" && typeof document < "u",
    Wd = typeof navigator == "object" && navigator || void 0,
    CC = Af && (!Wd || ["ReactNative", "NativeScript", "NS"].indexOf(Wd.product) < 0),
    PC = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function",
    _C = Af && window.location.href || "http://localhost",
    RC = Object.freeze(Object.defineProperty({
        __proto__: null,
        hasBrowserEnv: Af,
        hasStandardBrowserEnv: CC,
        hasStandardBrowserWebWorkerEnv: PC,
        navigator: Wd,
        origin: _C
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    xt = { ...RC,
        ...TC
    };

function AC(t, e) {
    return $l(t, new xt.classes.URLSearchParams, {
        visitor: function(r, i, a, l) {
            return xt.isNode && F.isBuffer(r) ? (this.append(i, r.toString("base64")), !1) : l.defaultVisitor.apply(this, arguments)
        },
        ...e
    })
}

function NC(t) {
    return F.matchAll(/\w+|\[(\w*)]/g, t).map(e => e[0] === "[]" ? "" : e[1] || e[0])
}

function OC(t) {
    const e = {},
        r = Object.keys(t);
    let i;
    const a = r.length;
    let l;
    for (i = 0; i < a; i++) l = r[i], e[l] = t[l];
    return e
}

function pw(t) {
    function e(r, i, a, l) {
        let c = r[l++];
        if (c === "__proto__") return !0;
        const d = Number.isFinite(+c),
            h = l >= r.length;
        return c = !c && F.isArray(a) ? a.length : c, h ? (F.hasOwnProp(a, c) ? a[c] = [a[c], i] : a[c] = i, !d) : ((!a[c] || !F.isObject(a[c])) && (a[c] = []), e(r, i, a[c], l) && F.isArray(a[c]) && (a[c] = OC(a[c])), !d)
    }
    if (F.isFormData(t) && F.isFunction(t.entries)) {
        const r = {};
        return F.forEachEntry(t, (i, a) => {
            e(NC(i), a, r, 0)
        }), r
    }
    return null
}

function LC(t, e, r) {
    if (F.isString(t)) try {
        return (e || JSON.parse)(t), F.trim(t)
    } catch (i) {
        if (i.name !== "SyntaxError") throw i
    }
    return (r || JSON.stringify)(t)
}
const Fo = {
    transitional: Rf,
    adapter: ["xhr", "http", "fetch"],
    transformRequest: [function(e, r) {
        const i = r.getContentType() || "",
            a = i.indexOf("application/json") > -1,
            l = F.isObject(e);
        if (l && F.isHTMLForm(e) && (e = new FormData(e)), F.isFormData(e)) return a ? JSON.stringify(pw(e)) : e;
        if (F.isArrayBuffer(e) || F.isBuffer(e) || F.isStream(e) || F.isFile(e) || F.isBlob(e) || F.isReadableStream(e)) return e;
        if (F.isArrayBufferView(e)) return e.buffer;
        if (F.isURLSearchParams(e)) return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
        let d;
        if (l) {
            if (i.indexOf("application/x-www-form-urlencoded") > -1) return AC(e, this.formSerializer).toString();
            if ((d = F.isFileList(e)) || i.indexOf("multipart/form-data") > -1) {
                const h = this.env && this.env.FormData;
                return $l(d ? {
                    "files[]": e
                } : e, h && new h, this.formSerializer)
            }
        }
        return l || a ? (r.setContentType("application/json", !1), LC(e)) : e
    }],
    transformResponse: [function(e) {
        const r = this.transitional || Fo.transitional,
            i = r && r.forcedJSONParsing,
            a = this.responseType === "json";
        if (F.isResponse(e) || F.isReadableStream(e)) return e;
        if (e && F.isString(e) && (i && !this.responseType || a)) {
            const c = !(r && r.silentJSONParsing) && a;
            try {
                return JSON.parse(e, this.parseReviver)
            } catch (d) {
                if (c) throw d.name === "SyntaxError" ? pe.from(d, pe.ERR_BAD_RESPONSE, this, null, this.response) : d
            }
        }
        return e
    }],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
        FormData: xt.classes.FormData,
        Blob: xt.classes.Blob
    },
    validateStatus: function(e) {
        return e >= 200 && e < 300
    },
    headers: {
        common: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": void 0
        }
    }
};
F.forEach(["delete", "get", "head", "post", "put", "patch"], t => {
    Fo.headers[t] = {}
});
const MC = F.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]),
    DC = t => {
        const e = {};
        let r, i, a;
        return t && t.split(`
`).forEach(function(c) {
            a = c.indexOf(":"), r = c.substring(0, a).trim().toLowerCase(), i = c.substring(a + 1).trim(), !(!r || e[r] && MC[r]) && (r === "set-cookie" ? e[r] ? e[r].push(i) : e[r] = [i] : e[r] = e[r] ? e[r] + ", " + i : i)
        }), e
    },
    Zg = Symbol("internals");

function to(t) {
    return t && String(t).trim().toLowerCase()
}

function hl(t) {
    return t === !1 || t == null ? t : F.isArray(t) ? t.map(hl) : String(t)
}

function jC(t) {
    const e = Object.create(null),
        r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let i;
    for (; i = r.exec(t);) e[i[1]] = i[2];
    return e
}
const IC = t => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());

function nd(t, e, r, i, a) {
    if (F.isFunction(i)) return i.call(this, e, r);
    if (a && (e = r), !!F.isString(e)) {
        if (F.isString(i)) return e.indexOf(i) !== -1;
        if (F.isRegExp(i)) return i.test(e)
    }
}

function FC(t) {
    return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, r, i) => r.toUpperCase() + i)
}

function VC(t, e) {
    const r = F.toCamelCase(" " + e);
    ["get", "set", "has"].forEach(i => {
        Object.defineProperty(t, i + r, {
            value: function(a, l, c) {
                return this[i].call(this, e, a, l, c)
            },
            configurable: !0
        })
    })
}
let jt = class {
    constructor(e) {
        e && this.set(e)
    }
    set(e, r, i) {
        const a = this;

        function l(d, h, m) {
            const g = to(h);
            if (!g) throw new Error("header name must be a non-empty string");
            const y = F.findKey(a, g);
            (!y || a[y] === void 0 || m === !0 || m === void 0 && a[y] !== !1) && (a[y || h] = hl(d))
        }
        const c = (d, h) => F.forEach(d, (m, g) => l(m, g, h));
        if (F.isPlainObject(e) || e instanceof this.constructor) c(e, r);
        else if (F.isString(e) && (e = e.trim()) && !IC(e)) c(DC(e), r);
        else if (F.isObject(e) && F.isIterable(e)) {
            let d = {},
                h, m;
            for (const g of e) {
                if (!F.isArray(g)) throw TypeError("Object iterator must return a key-value pair");
                d[m = g[0]] = (h = d[m]) ? F.isArray(h) ? [...h, g[1]] : [h, g[1]] : g[1]
            }
            c(d, r)
        } else e != null && l(r, e, i);
        return this
    }
    get(e, r) {
        if (e = to(e), e) {
            const i = F.findKey(this, e);
            if (i) {
                const a = this[i];
                if (!r) return a;
                if (r === !0) return jC(a);
                if (F.isFunction(r)) return r.call(this, a, i);
                if (F.isRegExp(r)) return r.exec(a);
                throw new TypeError("parser must be boolean|regexp|function")
            }
        }
    }
    has(e, r) {
        if (e = to(e), e) {
            const i = F.findKey(this, e);
            return !!(i && this[i] !== void 0 && (!r || nd(this, this[i], i, r)))
        }
        return !1
    }
    delete(e, r) {
        const i = this;
        let a = !1;

        function l(c) {
            if (c = to(c), c) {
                const d = F.findKey(i, c);
                d && (!r || nd(i, i[d], d, r)) && (delete i[d], a = !0)
            }
        }
        return F.isArray(e) ? e.forEach(l) : l(e), a
    }
    clear(e) {
        const r = Object.keys(this);
        let i = r.length,
            a = !1;
        for (; i--;) {
            const l = r[i];
            (!e || nd(this, this[l], l, e, !0)) && (delete this[l], a = !0)
        }
        return a
    }
    normalize(e) {
        const r = this,
            i = {};
        return F.forEach(this, (a, l) => {
            const c = F.findKey(i, l);
            if (c) {
                r[c] = hl(a), delete r[l];
                return
            }
            const d = e ? FC(l) : String(l).trim();
            d !== l && delete r[l], r[d] = hl(a), i[d] = !0
        }), this
    }
    concat(...e) {
        return this.constructor.concat(this, ...e)
    }
    toJSON(e) {
        const r = Object.create(null);
        return F.forEach(this, (i, a) => {
            i != null && i !== !1 && (r[a] = e && F.isArray(i) ? i.join(", ") : i)
        }), r
    }[Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]()
    }
    toString() {
        return Object.entries(this.toJSON()).map(([e, r]) => e + ": " + r).join(`
`)
    }
    getSetCookie() {
        return this.get("set-cookie") || []
    }
    get[Symbol.toStringTag]() {
        return "AxiosHeaders"
    }
    static from(e) {
        return e instanceof this ? e : new this(e)
    }
    static concat(e, ...r) {
        const i = new this(e);
        return r.forEach(a => i.set(a)), i
    }
    static accessor(e) {
        const i = (this[Zg] = this[Zg] = {
                accessors: {}
            }).accessors,
            a = this.prototype;

        function l(c) {
            const d = to(c);
            i[d] || (VC(a, c), i[d] = !0)
        }
        return F.isArray(e) ? e.forEach(l) : l(e), this
    }
};
jt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
F.reduceDescriptors(jt.prototype, ({
    value: t
}, e) => {
    let r = e[0].toUpperCase() + e.slice(1);
    return {
        get: () => t,
        set(i) {
            this[r] = i
        }
    }
});
F.freezeMethods(jt);

function rd(t, e) {
    const r = this || Fo,
        i = e || r,
        a = jt.from(i.headers);
    let l = i.data;
    return F.forEach(t, function(d) {
        l = d.call(r, l, a.normalize(), e ? e.status : void 0)
    }), a.normalize(), l
}

function mw(t) {
    return !!(t && t.__CANCEL__)
}
let Vo = class extends pe {
    constructor(e, r, i) {
        super(e ? ? "canceled", pe.ERR_CANCELED, r, i), this.name = "CanceledError", this.__CANCEL__ = !0
    }
};

function gw(t, e, r) {
    const i = r.config.validateStatus;
    !r.status || !i || i(r.status) ? t(r) : e(new pe("Request failed with status code " + r.status, [pe.ERR_BAD_REQUEST, pe.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4], r.config, r.request, r))
}

function BC(t) {
    const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
    return e && e[1] || ""
}

function UC(t, e) {
    t = t || 10;
    const r = new Array(t),
        i = new Array(t);
    let a = 0,
        l = 0,
        c;
    return e = e !== void 0 ? e : 1e3,
        function(h) {
            const m = Date.now(),
                g = i[l];
            c || (c = m), r[a] = h, i[a] = m;
            let y = l,
                w = 0;
            for (; y !== a;) w += r[y++], y = y % t;
            if (a = (a + 1) % t, a === l && (l = (l + 1) % t), m - c < e) return;
            const k = g && m - g;
            return k ? Math.round(w * 1e3 / k) : void 0
        }
}

function zC(t, e) {
    let r = 0,
        i = 1e3 / e,
        a, l;
    const c = (m, g = Date.now()) => {
        r = g, a = null, l && (clearTimeout(l), l = null), t(...m)
    };
    return [(...m) => {
        const g = Date.now(),
            y = g - r;
        y >= i ? c(m, g) : (a = m, l || (l = setTimeout(() => {
            l = null, c(a)
        }, i - y)))
    }, () => a && c(a)]
}
const _l = (t, e, r = 3) => {
        let i = 0;
        const a = UC(50, 250);
        return zC(l => {
            const c = l.loaded,
                d = l.lengthComputable ? l.total : void 0,
                h = c - i,
                m = a(h),
                g = c <= d;
            i = c;
            const y = {
                loaded: c,
                total: d,
                progress: d ? c / d : void 0,
                bytes: h,
                rate: m || void 0,
                estimated: m && d && g ? (d - c) / m : void 0,
                event: l,
                lengthComputable: d != null,
                [e ? "download" : "upload"]: !0
            };
            t(y)
        }, r)
    },
    ey = (t, e) => {
        const r = t != null;
        return [i => e[0]({
            lengthComputable: r,
            total: t,
            loaded: i
        }), e[1]]
    },
    ty = t => (...e) => F.asap(() => t(...e)),
    $C = xt.hasStandardBrowserEnv ? ((t, e) => r => (r = new URL(r, xt.origin), t.protocol === r.protocol && t.host === r.host && (e || t.port === r.port)))(new URL(xt.origin), xt.navigator && /(msie|trident)/i.test(xt.navigator.userAgent)) : () => !0,
    HC = xt.hasStandardBrowserEnv ? {
        write(t, e, r, i, a, l, c) {
            if (typeof document > "u") return;
            const d = [`${t}=${encodeURIComponent(e)}`];
            F.isNumber(r) && d.push(`expires=${new Date(r).toUTCString()}`), F.isString(i) && d.push(`path=${i}`), F.isString(a) && d.push(`domain=${a}`), l === !0 && d.push("secure"), F.isString(c) && d.push(`SameSite=${c}`), document.cookie = d.join("; ")
        },
        read(t) {
            if (typeof document > "u") return null;
            const e = document.cookie.match(new RegExp("(?:^|; )" + t + "=([^;]*)"));
            return e ? decodeURIComponent(e[1]) : null
        },
        remove(t) {
            this.write(t, "", Date.now() - 864e5, "/")
        }
    } : {
        write() {},
        read() {
            return null
        },
        remove() {}
    };

function qC(t) {
    return typeof t != "string" ? !1 : /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)
}

function WC(t, e) {
    return e ? t.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : t
}

function yw(t, e, r) {
    let i = !qC(e);
    return t && (i || r == !1) ? WC(t, e) : e
}
const ny = t => t instanceof jt ? { ...t
} : t;

function fs(t, e) {
    e = e || {};
    const r = {};

    function i(m, g, y, w) {
        return F.isPlainObject(m) && F.isPlainObject(g) ? F.merge.call({
            caseless: w
        }, m, g) : F.isPlainObject(g) ? F.merge({}, g) : F.isArray(g) ? g.slice() : g
    }

    function a(m, g, y, w) {
        if (F.isUndefined(g)) {
            if (!F.isUndefined(m)) return i(void 0, m, y, w)
        } else return i(m, g, y, w)
    }

    function l(m, g) {
        if (!F.isUndefined(g)) return i(void 0, g)
    }

    function c(m, g) {
        if (F.isUndefined(g)) {
            if (!F.isUndefined(m)) return i(void 0, m)
        } else return i(void 0, g)
    }

    function d(m, g, y) {
        if (y in e) return i(m, g);
        if (y in t) return i(void 0, m)
    }
    const h = {
        url: l,
        method: l,
        data: l,
        baseURL: c,
        transformRequest: c,
        transformResponse: c,
        paramsSerializer: c,
        timeout: c,
        timeoutMessage: c,
        withCredentials: c,
        withXSRFToken: c,
        adapter: c,
        responseType: c,
        xsrfCookieName: c,
        xsrfHeaderName: c,
        onUploadProgress: c,
        onDownloadProgress: c,
        decompress: c,
        maxContentLength: c,
        maxBodyLength: c,
        beforeRedirect: c,
        transport: c,
        httpAgent: c,
        httpsAgent: c,
        cancelToken: c,
        socketPath: c,
        responseEncoding: c,
        validateStatus: d,
        headers: (m, g, y) => a(ny(m), ny(g), y, !0)
    };
    return F.forEach(Object.keys({ ...t,
        ...e
    }), function(g) {
        if (g === "__proto__" || g === "constructor" || g === "prototype") return;
        const y = F.hasOwnProp(h, g) ? h[g] : a,
            w = y(t[g], e[g], g);
        F.isUndefined(w) && y !== d || (r[g] = w)
    }), r
}
const vw = t => {
        const e = fs({}, t);
        let {
            data: r,
            withXSRFToken: i,
            xsrfHeaderName: a,
            xsrfCookieName: l,
            headers: c,
            auth: d
        } = e;
        if (e.headers = c = jt.from(c), e.url = hw(yw(e.baseURL, e.url, e.allowAbsoluteUrls), t.params, t.paramsSerializer), d && c.set("Authorization", "Basic " + btoa((d.username || "") + ":" + (d.password ? unescape(encodeURIComponent(d.password)) : ""))), F.isFormData(r)) {
            if (xt.hasStandardBrowserEnv || xt.hasStandardBrowserWebWorkerEnv) c.setContentType(void 0);
            else if (F.isFunction(r.getHeaders)) {
                const h = r.getHeaders(),
                    m = ["content-type", "content-length"];
                Object.entries(h).forEach(([g, y]) => {
                    m.includes(g.toLowerCase()) && c.set(g, y)
                })
            }
        }
        if (xt.hasStandardBrowserEnv && (i && F.isFunction(i) && (i = i(e)), i || i !== !1 && $C(e.url))) {
            const h = a && l && HC.read(l);
            h && c.set(a, h)
        }
        return e
    },
    KC = typeof XMLHttpRequest < "u",
    QC = KC && function(t) {
        return new Promise(function(r, i) {
            const a = vw(t);
            let l = a.data;
            const c = jt.from(a.headers).normalize();
            let {
                responseType: d,
                onUploadProgress: h,
                onDownloadProgress: m
            } = a, g, y, w, k, S;

            function b() {
                k && k(), S && S(), a.cancelToken && a.cancelToken.unsubscribe(g), a.signal && a.signal.removeEventListener("abort", g)
            }
            let x = new XMLHttpRequest;
            x.open(a.method.toUpperCase(), a.url, !0), x.timeout = a.timeout;

            function R() {
                if (!x) return;
                const M = jt.from("getAllResponseHeaders" in x && x.getAllResponseHeaders()),
                    B = {
                        data: !d || d === "text" || d === "json" ? x.responseText : x.response,
                        status: x.status,
                        statusText: x.statusText,
                        headers: M,
                        config: t,
                        request: x
                    };
                gw(function(G) {
                    r(G), b()
                }, function(G) {
                    i(G), b()
                }, B), x = null
            }
            "onloadend" in x ? x.onloadend = R : x.onreadystatechange = function() {
                !x || x.readyState !== 4 || x.status === 0 && !(x.responseURL && x.responseURL.indexOf("file:") === 0) || setTimeout(R)
            }, x.onabort = function() {
                x && (i(new pe("Request aborted", pe.ECONNABORTED, t, x)), x = null)
            }, x.onerror = function(L) {
                const B = L && L.message ? L.message : "Network Error",
                    K = new pe(B, pe.ERR_NETWORK, t, x);
                K.event = L || null, i(K), x = null
            }, x.ontimeout = function() {
                let L = a.timeout ? "timeout of " + a.timeout + "ms exceeded" : "timeout exceeded";
                const B = a.transitional || Rf;
                a.timeoutErrorMessage && (L = a.timeoutErrorMessage), i(new pe(L, B.clarifyTimeoutError ? pe.ETIMEDOUT : pe.ECONNABORTED, t, x)), x = null
            }, l === void 0 && c.setContentType(null), "setRequestHeader" in x && F.forEach(c.toJSON(), function(L, B) {
                x.setRequestHeader(B, L)
            }), F.isUndefined(a.withCredentials) || (x.withCredentials = !!a.withCredentials), d && d !== "json" && (x.responseType = a.responseType), m && ([w, S] = _l(m, !0), x.addEventListener("progress", w)), h && x.upload && ([y, k] = _l(h), x.upload.addEventListener("progress", y), x.upload.addEventListener("loadend", k)), (a.cancelToken || a.signal) && (g = M => {
                x && (i(!M || M.type ? new Vo(null, t, x) : M), x.abort(), x = null)
            }, a.cancelToken && a.cancelToken.subscribe(g), a.signal && (a.signal.aborted ? g() : a.signal.addEventListener("abort", g)));
            const V = BC(a.url);
            if (V && xt.protocols.indexOf(V) === -1) {
                i(new pe("Unsupported protocol " + V + ":", pe.ERR_BAD_REQUEST, t));
                return
            }
            x.send(l || null)
        })
    },
    GC = (t, e) => {
        const {
            length: r
        } = t = t ? t.filter(Boolean) : [];
        if (e || r) {
            let i = new AbortController,
                a;
            const l = function(m) {
                if (!a) {
                    a = !0, d();
                    const g = m instanceof Error ? m : this.reason;
                    i.abort(g instanceof pe ? g : new Vo(g instanceof Error ? g.message : g))
                }
            };
            let c = e && setTimeout(() => {
                c = null, l(new pe(`timeout of ${e}ms exceeded`, pe.ETIMEDOUT))
            }, e);
            const d = () => {
                t && (c && clearTimeout(c), c = null, t.forEach(m => {
                    m.unsubscribe ? m.unsubscribe(l) : m.removeEventListener("abort", l)
                }), t = null)
            };
            t.forEach(m => m.addEventListener("abort", l));
            const {
                signal: h
            } = i;
            return h.unsubscribe = () => F.asap(d), h
        }
    },
    YC = function*(t, e) {
        let r = t.byteLength;
        if (r < e) {
            yield t;
            return
        }
        let i = 0,
            a;
        for (; i < r;) a = i + e, yield t.slice(i, a), i = a
    },
    XC = async function*(t, e) {
        for await (const r of JC(t)) yield* YC(r, e)
    },
    JC = async function*(t) {
        if (t[Symbol.asyncIterator]) {
            yield* t;
            return
        }
        const e = t.getReader();
        try {
            for (;;) {
                const {
                    done: r,
                    value: i
                } = await e.read();
                if (r) break;
                yield i
            }
        } finally {
            await e.cancel()
        }
    },
    ry = (t, e, r, i) => {
        const a = XC(t, e);
        let l = 0,
            c, d = h => {
                c || (c = !0, i && i(h))
            };
        return new ReadableStream({
            async pull(h) {
                try {
                    const {
                        done: m,
                        value: g
                    } = await a.next();
                    if (m) {
                        d(), h.close();
                        return
                    }
                    let y = g.byteLength;
                    if (r) {
                        let w = l += y;
                        r(w)
                    }
                    h.enqueue(new Uint8Array(g))
                } catch (m) {
                    throw d(m), m
                }
            },
            cancel(h) {
                return d(h), a.return()
            }
        }, {
            highWaterMark: 2
        })
    },
    sy = 64 * 1024,
    {
        isFunction: rl
    } = F,
    ZC = (({
        Request: t,
        Response: e
    }) => ({
        Request: t,
        Response: e
    }))(F.global),
    {
        ReadableStream: iy,
        TextEncoder: oy
    } = F.global,
    ay = (t, ...e) => {
        try {
            return !!t(...e)
        } catch {
            return !1
        }
    },
    eP = t => {
        t = F.merge.call({
            skipUndefined: !0
        }, ZC, t);
        const {
            fetch: e,
            Request: r,
            Response: i
        } = t, a = e ? rl(e) : typeof fetch == "function", l = rl(r), c = rl(i);
        if (!a) return !1;
        const d = a && rl(iy),
            h = a && (typeof oy == "function" ? (S => b => S.encode(b))(new oy) : async S => new Uint8Array(await new r(S).arrayBuffer())),
            m = l && d && ay(() => {
                let S = !1;
                const b = new r(xt.origin, {
                    body: new iy,
                    method: "POST",
                    get duplex() {
                        return S = !0, "half"
                    }
                }).headers.has("Content-Type");
                return S && !b
            }),
            g = c && d && ay(() => F.isReadableStream(new i("").body)),
            y = {
                stream: g && (S => S.body)
            };
        a && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach(S => {
            !y[S] && (y[S] = (b, x) => {
                let R = b && b[S];
                if (R) return R.call(b);
                throw new pe(`Response type '${S}' is not supported`, pe.ERR_NOT_SUPPORT, x)
            })
        });
        const w = async S => {
                if (S == null) return 0;
                if (F.isBlob(S)) return S.size;
                if (F.isSpecCompliantForm(S)) return (await new r(xt.origin, {
                    method: "POST",
                    body: S
                }).arrayBuffer()).byteLength;
                if (F.isArrayBufferView(S) || F.isArrayBuffer(S)) return S.byteLength;
                if (F.isURLSearchParams(S) && (S = S + ""), F.isString(S)) return (await h(S)).byteLength
            },
            k = async (S, b) => {
                const x = F.toFiniteNumber(S.getContentLength());
                return x ? ? w(b)
            };
        return async S => {
            let {
                url: b,
                method: x,
                data: R,
                signal: V,
                cancelToken: M,
                timeout: L,
                onDownloadProgress: B,
                onUploadProgress: K,
                responseType: G,
                headers: j,
                withCredentials: J = "same-origin",
                fetchOptions: de
            } = vw(S), me = e || fetch;
            G = G ? (G + "").toLowerCase() : "text";
            let Ae = GC([V, M && M.toAbortSignal()], L),
                je = null;
            const Ne = Ae && Ae.unsubscribe && (() => {
                Ae.unsubscribe()
            });
            let Fe;
            try {
                if (K && m && x !== "get" && x !== "head" && (Fe = await k(j, R)) !== 0) {
                    let A = new r(b, {
                            method: "POST",
                            body: R,
                            duplex: "half"
                        }),
                        z;
                    if (F.isFormData(R) && (z = A.headers.get("content-type")) && j.setContentType(z), A.body) {
                        const [ye, ve] = ey(Fe, _l(ty(K)));
                        R = ry(A.body, sy, ye, ve)
                    }
                }
                F.isString(J) || (J = J ? "include" : "omit");
                const xe = l && "credentials" in r.prototype,
                    fe = { ...de,
                        signal: Ae,
                        method: x.toUpperCase(),
                        headers: j.normalize().toJSON(),
                        body: R,
                        duplex: "half",
                        credentials: xe ? J : void 0
                    };
                je = l && new r(b, fe);
                let W = await (l ? me(je, de) : me(b, fe));
                const se = g && (G === "stream" || G === "response");
                if (g && (B || se && Ne)) {
                    const A = {};
                    ["status", "statusText", "headers"].forEach(le => {
                        A[le] = W[le]
                    });
                    const z = F.toFiniteNumber(W.headers.get("content-length")),
                        [ye, ve] = B && ey(z, _l(ty(B), !0)) || [];
                    W = new i(ry(W.body, sy, ye, () => {
                        ve && ve(), Ne && Ne()
                    }), A)
                }
                G = G || "text";
                let U = await y[F.findKey(y, G) || "text"](W, S);
                return !se && Ne && Ne(), await new Promise((A, z) => {
                    gw(A, z, {
                        data: U,
                        headers: jt.from(W.headers),
                        status: W.status,
                        statusText: W.statusText,
                        config: S,
                        request: je
                    })
                })
            } catch (xe) {
                throw Ne && Ne(), xe && xe.name === "TypeError" && /Load failed|fetch/i.test(xe.message) ? Object.assign(new pe("Network Error", pe.ERR_NETWORK, S, je, xe && xe.response), {
                    cause: xe.cause || xe
                }) : pe.from(xe, xe && xe.code, S, je, xe && xe.response)
            }
        }
    },
    tP = new Map,
    ww = t => {
        let e = t && t.env || {};
        const {
            fetch: r,
            Request: i,
            Response: a
        } = e, l = [i, a, r];
        let c = l.length,
            d = c,
            h, m, g = tP;
        for (; d--;) h = l[d], m = g.get(h), m === void 0 && g.set(h, m = d ? new Map : eP(e)), g = m;
        return m
    };
ww();
const Nf = {
    http: vC,
    xhr: QC,
    fetch: {
        get: ww
    }
};
F.forEach(Nf, (t, e) => {
    if (t) {
        try {
            Object.defineProperty(t, "name", {
                value: e
            })
        } catch {}
        Object.defineProperty(t, "adapterName", {
            value: e
        })
    }
});
const ly = t => `- ${t}`,
    nP = t => F.isFunction(t) || t === null || t === !1;

function rP(t, e) {
    t = F.isArray(t) ? t : [t];
    const {
        length: r
    } = t;
    let i, a;
    const l = {};
    for (let c = 0; c < r; c++) {
        i = t[c];
        let d;
        if (a = i, !nP(i) && (a = Nf[(d = String(i)).toLowerCase()], a === void 0)) throw new pe(`Unknown adapter '${d}'`);
        if (a && (F.isFunction(a) || (a = a.get(e)))) break;
        l[d || "#" + c] = a
    }
    if (!a) {
        const c = Object.entries(l).map(([h, m]) => `adapter ${h} ` + (m === !1 ? "is not supported by the environment" : "is not available in the build"));
        let d = r ? c.length > 1 ? `since :
` + c.map(ly).join(`
`) : " " + ly(c[0]) : "as no adapter specified";
        throw new pe("There is no suitable adapter to dispatch the request " + d, "ERR_NOT_SUPPORT")
    }
    return a
}
const xw = {
    getAdapter: rP,
    adapters: Nf
};

function sd(t) {
    if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted) throw new Vo(null, t)
}

function uy(t) {
    return sd(t), t.headers = jt.from(t.headers), t.data = rd.call(t, t.transformRequest), ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), xw.getAdapter(t.adapter || Fo.adapter, t)(t).then(function(i) {
        return sd(t), i.data = rd.call(t, t.transformResponse, i), i.headers = jt.from(i.headers), i
    }, function(i) {
        return mw(i) || (sd(t), i && i.response && (i.response.data = rd.call(t, t.transformResponse, i.response), i.response.headers = jt.from(i.response.headers))), Promise.reject(i)
    })
}
const Sw = "1.13.5",
    Hl = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((t, e) => {
    Hl[t] = function(i) {
        return typeof i === t || "a" + (e < 1 ? "n " : " ") + t
    }
});
const cy = {};
Hl.transitional = function(e, r, i) {
    function a(l, c) {
        return "[Axios v" + Sw + "] Transitional option '" + l + "'" + c + (i ? ". " + i : "")
    }
    return (l, c, d) => {
        if (e === !1) throw new pe(a(c, " has been removed" + (r ? " in " + r : "")), pe.ERR_DEPRECATED);
        return r && !cy[c] && (cy[c] = !0, console.warn(a(c, " has been deprecated since v" + r + " and will be removed in the near future"))), e ? e(l, c, d) : !0
    }
};
Hl.spelling = function(e) {
    return (r, i) => (console.warn(`${i} is likely a misspelling of ${e}`), !0)
};

function sP(t, e, r) {
    if (typeof t != "object") throw new pe("options must be an object", pe.ERR_BAD_OPTION_VALUE);
    const i = Object.keys(t);
    let a = i.length;
    for (; a-- > 0;) {
        const l = i[a],
            c = e[l];
        if (c) {
            const d = t[l],
                h = d === void 0 || c(d, l, t);
            if (h !== !0) throw new pe("option " + l + " must be " + h, pe.ERR_BAD_OPTION_VALUE);
            continue
        }
        if (r !== !0) throw new pe("Unknown option " + l, pe.ERR_BAD_OPTION)
    }
}
const pl = {
        assertOptions: sP,
        validators: Hl
    },
    Gt = pl.validators;
let us = class {
    constructor(e) {
        this.defaults = e || {}, this.interceptors = {
            request: new Jg,
            response: new Jg
        }
    }
    async request(e, r) {
        try {
            return await this._request(e, r)
        } catch (i) {
            if (i instanceof Error) {
                let a = {};
                Error.captureStackTrace ? Error.captureStackTrace(a) : a = new Error;
                const l = a.stack ? a.stack.replace(/^.+\n/, "") : "";
                try {
                    i.stack ? l && !String(i.stack).endsWith(l.replace(/^.+\n.+\n/, "")) && (i.stack += `
` + l) : i.stack = l
                } catch {}
            }
            throw i
        }
    }
    _request(e, r) {
        typeof e == "string" ? (r = r || {}, r.url = e) : r = e || {}, r = fs(this.defaults, r);
        const {
            transitional: i,
            paramsSerializer: a,
            headers: l
        } = r;
        i !== void 0 && pl.assertOptions(i, {
            silentJSONParsing: Gt.transitional(Gt.boolean),
            forcedJSONParsing: Gt.transitional(Gt.boolean),
            clarifyTimeoutError: Gt.transitional(Gt.boolean),
            legacyInterceptorReqResOrdering: Gt.transitional(Gt.boolean)
        }, !1), a != null && (F.isFunction(a) ? r.paramsSerializer = {
            serialize: a
        } : pl.assertOptions(a, {
            encode: Gt.function,
            serialize: Gt.function
        }, !0)), r.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? r.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : r.allowAbsoluteUrls = !0), pl.assertOptions(r, {
            baseUrl: Gt.spelling("baseURL"),
            withXsrfToken: Gt.spelling("withXSRFToken")
        }, !0), r.method = (r.method || this.defaults.method || "get").toLowerCase();
        let c = l && F.merge(l.common, l[r.method]);
        l && F.forEach(["delete", "get", "head", "post", "put", "patch", "common"], S => {
            delete l[S]
        }), r.headers = jt.concat(c, l);
        const d = [];
        let h = !0;
        this.interceptors.request.forEach(function(b) {
            if (typeof b.runWhen == "function" && b.runWhen(r) === !1) return;
            h = h && b.synchronous;
            const x = r.transitional || Rf;
            x && x.legacyInterceptorReqResOrdering ? d.unshift(b.fulfilled, b.rejected) : d.push(b.fulfilled, b.rejected)
        });
        const m = [];
        this.interceptors.response.forEach(function(b) {
            m.push(b.fulfilled, b.rejected)
        });
        let g, y = 0,
            w;
        if (!h) {
            const S = [uy.bind(this), void 0];
            for (S.unshift(...d), S.push(...m), w = S.length, g = Promise.resolve(r); y < w;) g = g.then(S[y++], S[y++]);
            return g
        }
        w = d.length;
        let k = r;
        for (; y < w;) {
            const S = d[y++],
                b = d[y++];
            try {
                k = S(k)
            } catch (x) {
                b.call(this, x);
                break
            }
        }
        try {
            g = uy.call(this, k)
        } catch (S) {
            return Promise.reject(S)
        }
        for (y = 0, w = m.length; y < w;) g = g.then(m[y++], m[y++]);
        return g
    }
    getUri(e) {
        e = fs(this.defaults, e);
        const r = yw(e.baseURL, e.url, e.allowAbsoluteUrls);
        return hw(r, e.params, e.paramsSerializer)
    }
};
F.forEach(["delete", "get", "head", "options"], function(e) {
    us.prototype[e] = function(r, i) {
        return this.request(fs(i || {}, {
            method: e,
            url: r,
            data: (i || {}).data
        }))
    }
});
F.forEach(["post", "put", "patch"], function(e) {
    function r(i) {
        return function(l, c, d) {
            return this.request(fs(d || {}, {
                method: e,
                headers: i ? {
                    "Content-Type": "multipart/form-data"
                } : {},
                url: l,
                data: c
            }))
        }
    }
    us.prototype[e] = r(), us.prototype[e + "Form"] = r(!0)
});
let iP = class bw {
    constructor(e) {
        if (typeof e != "function") throw new TypeError("executor must be a function.");
        let r;
        this.promise = new Promise(function(l) {
            r = l
        });
        const i = this;
        this.promise.then(a => {
            if (!i._listeners) return;
            let l = i._listeners.length;
            for (; l-- > 0;) i._listeners[l](a);
            i._listeners = null
        }), this.promise.then = a => {
            let l;
            const c = new Promise(d => {
                i.subscribe(d), l = d
            }).then(a);
            return c.cancel = function() {
                i.unsubscribe(l)
            }, c
        }, e(function(l, c, d) {
            i.reason || (i.reason = new Vo(l, c, d), r(i.reason))
        })
    }
    throwIfRequested() {
        if (this.reason) throw this.reason
    }
    subscribe(e) {
        if (this.reason) {
            e(this.reason);
            return
        }
        this._listeners ? this._listeners.push(e) : this._listeners = [e]
    }
    unsubscribe(e) {
        if (!this._listeners) return;
        const r = this._listeners.indexOf(e);
        r !== -1 && this._listeners.splice(r, 1)
    }
    toAbortSignal() {
        const e = new AbortController,
            r = i => {
                e.abort(i)
            };
        return this.subscribe(r), e.signal.unsubscribe = () => this.unsubscribe(r), e.signal
    }
    static source() {
        let e;
        return {
            token: new bw(function(a) {
                e = a
            }),
            cancel: e
        }
    }
};

function oP(t) {
    return function(r) {
        return t.apply(null, r)
    }
}

function aP(t) {
    return F.isObject(t) && t.isAxiosError === !0
}
const Kd = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511,
    WebServerIsDown: 521,
    ConnectionTimedOut: 522,
    OriginIsUnreachable: 523,
    TimeoutOccurred: 524,
    SslHandshakeFailed: 525,
    InvalidSslCertificate: 526
};
Object.entries(Kd).forEach(([t, e]) => {
    Kd[e] = t
});

function kw(t) {
    const e = new us(t),
        r = nw(us.prototype.request, e);
    return F.extend(r, us.prototype, e, {
        allOwnKeys: !0
    }), F.extend(r, e, null, {
        allOwnKeys: !0
    }), r.create = function(a) {
        return kw(fs(t, a))
    }, r
}
const Je = kw(Fo);
Je.Axios = us;
Je.CanceledError = Vo;
Je.CancelToken = iP;
Je.isCancel = mw;
Je.VERSION = Sw;
Je.toFormData = $l;
Je.AxiosError = pe;
Je.Cancel = Je.CanceledError;
Je.all = function(e) {
    return Promise.all(e)
};
Je.spread = oP;
Je.isAxiosError = aP;
Je.mergeConfig = fs;
Je.AxiosHeaders = jt;
Je.formToJSON = t => pw(F.isHTMLForm(t) ? new FormData(t) : t);
Je.getAdapter = xw.getAdapter;
Je.HttpStatusCode = Kd;
Je.default = Je;
const {
    Axios: hL,
    AxiosError: pL,
    CanceledError: mL,
    isCancel: gL,
    CancelToken: yL,
    VERSION: vL,
    all: wL,
    Cancel: xL,
    isAxiosError: SL,
    spread: bL,
    toFormData: kL,
    AxiosHeaders: EL,
    HttpStatusCode: TL,
    formToJSON: CL,
    getAdapter: PL,
    mergeConfig: _L
} = Je, lP = typeof window > "u", dy = !lP && window.self !== window.top, id = () => Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15), dt = [];
for (let t = 0; t < 256; ++t) dt.push((t + 256).toString(16).slice(1));

function uP(t, e = 0) {
    return (dt[t[e + 0]] + dt[t[e + 1]] + dt[t[e + 2]] + dt[t[e + 3]] + "-" + dt[t[e + 4]] + dt[t[e + 5]] + "-" + dt[t[e + 6]] + dt[t[e + 7]] + "-" + dt[t[e + 8]] + dt[t[e + 9]] + "-" + dt[t[e + 10]] + dt[t[e + 11]] + dt[t[e + 12]] + dt[t[e + 13]] + dt[t[e + 14]] + dt[t[e + 15]]).toLowerCase()
}
let od;
const cP = new Uint8Array(16);

function dP() {
    if (!od) {
        if (typeof crypto > "u" || !crypto.getRandomValues) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        od = crypto.getRandomValues.bind(crypto)
    }
    return od(cP)
}
const fP = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto),
    fy = {
        randomUUID: fP
    };

function hP(t, e, r) {
    var a;
    t = t || {};
    const i = t.random ? ? ((a = t.rng) == null ? void 0 : a.call(t)) ? ? dP();
    if (i.length < 16) throw new Error("Random bytes length must be >= 16");
    return i[6] = i[6] & 15 | 64, i[8] = i[8] & 63 | 128, uP(i)
}

function pP(t, e, r) {
    return fy.randomUUID && !t ? fy.randomUUID() : hP(t)
}
class mP extends Error {
    constructor(e, r, i, a, l) {
        super(e), this.name = "Base44Error", this.status = r, this.code = i, this.data = a, this.originalError = l
    }
    toJSON() {
        return {
            name: this.name,
            message: this.message,
            status: this.status,
            code: this.code,
            data: this.data
        }
    }
}

function ao({
    baseURL: t,
    headers: e = {},
    token: r,
    interceptResponses: i = !0,
    onError: a
}) {
    const l = Je.create({
        baseURL: t,
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            ...e
        }
    });
    return r && (l.defaults.headers.common.Authorization = `Bearer ${r}`), l.interceptors.request.use(c => {
        typeof window < "u" && c.headers.set("X-Origin-URL", window.location.href);
        const d = pP();
        if (c.requestId = d, dy) try {
            window.parent.postMessage({
                type: "api-request-start",
                requestId: d,
                data: {
                    url: t + c.url,
                    method: c.method,
                    body: c.data instanceof FormData ? "[FormData object]" : c.data
                }
            }, "*")
        } catch {}
        return c
    }), i && l.interceptors.response.use(c => {
        var d;
        const h = (d = c.config) === null || d === void 0 ? void 0 : d.requestId;
        try {
            dy && h && window.parent.postMessage({
                type: "api-request-end",
                requestId: h,
                data: {
                    statusCode: c.status,
                    response: c.data
                }
            }, "*")
        } catch {}
        return c.data
    }, c => {
        var d, h, m, g, y, w, k, S;
        const b = ((h = (d = c.response) === null || d === void 0 ? void 0 : d.data) === null || h === void 0 ? void 0 : h.message) || ((g = (m = c.response) === null || m === void 0 ? void 0 : m.data) === null || g === void 0 ? void 0 : g.detail) || c.message,
            x = new mP(b, (y = c.response) === null || y === void 0 ? void 0 : y.status, (k = (w = c.response) === null || w === void 0 ? void 0 : w.data) === null || k === void 0 ? void 0 : k.code, (S = c.response) === null || S === void 0 ? void 0 : S.data, c);
        return a == null || a(x), Promise.reject(x)
    }), l
}

function hy(t) {
    const {
        axios: e,
        appId: r,
        getSocket: i
    } = t;
    return new Proxy({}, {
        get(a, l) {
            if (!(typeof l != "string" || l === "then" || l.startsWith("_"))) return yP(e, r, l, i)
        }
    })
}

function gP(t) {
    var e;
    try {
        const r = JSON.parse(t);
        return {
            type: r.type,
            data: r.data,
            id: r.id || ((e = r.data) === null || e === void 0 ? void 0 : e.id),
            timestamp: r.timestamp || new Date().toISOString()
        }
    } catch (r) {
        return console.warn("[Base44 SDK] Failed to parse realtime message:", r), null
    }
}

function yP(t, e, r, i) {
    const a = `/apps/${e}/entities/${r}`;
    return {
        async list(l, c, d, h) {
            const m = {};
            return l && (m.sort = l), c && (m.limit = c), d && (m.skip = d), h && (m.fields = Array.isArray(h) ? h.join(",") : h), t.get(a, {
                params: m
            })
        },
        async filter(l, c, d, h, m) {
            const g = {
                q: JSON.stringify(l)
            };
            return c && (g.sort = c), d && (g.limit = d), h && (g.skip = h), m && (g.fields = Array.isArray(m) ? m.join(",") : m), t.get(a, {
                params: g
            })
        },
        async get(l) {
            return t.get(`${a}/${l}`)
        },
        async create(l) {
            return t.post(a, l)
        },
        async update(l, c) {
            return t.put(`${a}/${l}`, c)
        },
        async delete(l) {
            return t.delete(`${a}/${l}`)
        },
        async deleteMany(l) {
            return t.delete(a, {
                data: l
            })
        },
        async bulkCreate(l) {
            return t.post(`${a}/bulk`, l)
        },
        async updateMany(l, c) {
            return t.patch(`${a}/update-many`, {
                query: l,
                data: c
            })
        },
        async bulkUpdate(l) {
            return t.put(`${a}/bulk`, l)
        },
        async importEntities(l) {
            const c = new FormData;
            return c.append("file", l, l.name), t.post(`${a}/import`, c, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
        },
        subscribe(l) {
            const c = `entities:${e}:${r}`;
            return i().subscribeToRoom(c, {
                update_model: m => {
                    const g = gP(m.data);
                    if (g) try {
                        l(g)
                    } catch (y) {
                        console.error("[Base44 SDK] Subscription callback error:", y)
                    }
                }
            })
        }
    }
}

function vP(t, e) {
    return {
        async call(r, i, a) {
            if (!(r != null && r.trim())) throw new Error("Integration slug is required and cannot be empty");
            if (!(i != null && i.trim())) throw new Error("Operation ID is required and cannot be empty");
            const {
                pathParams: l,
                queryParams: c,
                ...d
            } = a ? ? {}, h = { ...d,
                ...l && {
                    path_params: l
                },
                ...c && {
                    query_params: c
                }
            };
            return await t.post(`/apps/${e}/integrations/custom/${r}/${i}`, h)
        }
    }
}

function py(t, e) {
    const r = vP(t, e);
    return new Proxy({}, {
        get(i, a) {
            if (!(typeof a != "string" || a === "then" || a.startsWith("_"))) return a === "custom" ? r : new Proxy({}, {
                get(l, c) {
                    if (!(typeof c != "string" || c === "then" || c.startsWith("_"))) return async d => {
                        if (typeof d == "string") throw new Error(`Integration ${c} must receive an object with named parameters, received: ${d}`);
                        let h, m;
                        return d instanceof FormData || d && Object.values(d).some(g => g instanceof File) ? (h = new FormData, Object.keys(d).forEach(g => {
                            d[g] instanceof File ? h.append(g, d[g], d[g].name) : typeof d[g] == "object" && d[g] !== null ? h.append(g, JSON.stringify(d[g])) : h.append(g, d[g])
                        }), m = "multipart/form-data") : (h = d, m = "application/json"), a === "Core" ? t.post(`/apps/${e}/integration-endpoints/Core/${c}`, h || d, {
                            headers: {
                                "Content-Type": m
                            }
                        }) : t.post(`/apps/${e}/integration-endpoints/installable/${a}/integration-endpoints/${c}`, h || d, {
                            headers: {
                                "Content-Type": m
                            }
                        })
                    }
                }
            })
        }
    })
}

function wP(t, e, r, i) {
    return {
        async me() {
            return t.get(`/apps/${r}/entities/User/me`)
        },
        async updateMe(a) {
            return t.put(`/apps/${r}/entities/User/me`, a)
        },
        redirectToLogin(a) {
            if (typeof window > "u") throw new Error("Login method can only be used in a browser environment");
            const l = a ? new URL(a, window.location.origin).toString() : window.location.href,
                c = `${i.appBaseUrl}/login?from_url=${encodeURIComponent(l)}`;
            window.location.href = c
        },
        loginWithProvider(a, l = "/") {
            const c = new URL(l, window.location.origin).toString(),
                d = `app_id=${r}&from_url=${encodeURIComponent(c)}`;
            let h;
            a === "sso" ? h = `/apps/${r}/auth/sso/login` : h = `/apps/auth${a==="google"?"":`/${a}`}/login`;
            const m = `${i.appBaseUrl}/api${h}?${d}`;
            window.location.href = m
        },
        logout(a) {
            if (delete t.defaults.headers.common.Authorization, typeof window < "u") {
                if (window.localStorage) try {
                    window.localStorage.removeItem("base44_access_token"), window.localStorage.removeItem("token")
                } catch (d) {
                    console.error("Failed to remove token from localStorage:", d)
                }
                const l = a || window.location.href,
                    c = `${i.appBaseUrl}/api/apps/auth/logout?from_url=${encodeURIComponent(l)}`;
                window.location.href = c
            }
        },
        setToken(a, l = !0) {
            if (a && (t.defaults.headers.common.Authorization = `Bearer ${a}`, e.defaults.headers.common.Authorization = `Bearer ${a}`, l && typeof window < "u" && window.localStorage)) try {
                window.localStorage.setItem("base44_access_token", a), window.localStorage.setItem("token", a)
            } catch (c) {
                console.error("Failed to save token to localStorage:", c)
            }
        },
        async loginViaEmailPassword(a, l, c) {
            var d;
            try {
                const h = await t.post(`/apps/${r}/auth/login`, {
                        email: a,
                        password: l,
                        ...c && {
                            turnstile_token: c
                        }
                    }),
                    {
                        access_token: m,
                        user: g
                    } = h;
                return m && this.setToken(m), {
                    access_token: m,
                    user: g
                }
            } catch (h) {
                throw ((d = h.response) === null || d === void 0 ? void 0 : d.status) === 401 && await this.logout(), h
            }
        },
        async isAuthenticated() {
            try {
                return await this.me(), !0
            } catch {
                return !1
            }
        },
        inviteUser(a, l) {
            return t.post(`/apps/${r}/users/invite-user`, {
                user_email: a,
                role: l
            })
        },
        register(a) {
            return t.post(`/apps/${r}/auth/register`, a)
        },
        verifyOtp({
            email: a,
            otpCode: l
        }) {
            return t.post(`/apps/${r}/auth/verify-otp`, {
                email: a,
                otp_code: l
            })
        },
        resendOtp(a) {
            return t.post(`/apps/${r}/auth/resend-otp`, {
                email: a
            })
        },
        resetPasswordRequest(a) {
            return t.post(`/apps/${r}/auth/reset-password-request`, {
                email: a
            })
        },
        resetPassword({
            resetToken: a,
            newPassword: l
        }) {
            return t.post(`/apps/${r}/auth/reset-password`, {
                reset_token: a,
                new_password: l
            })
        },
        changePassword({
            userId: a,
            currentPassword: l,
            newPassword: c
        }) {
            return t.post(`/apps/${r}/auth/change-password`, {
                user_id: a,
                current_password: l,
                new_password: c
            })
        }
    }
}

function xP(t, e) {
    return {
        async getAccessToken(r) {
            const i = `/apps/${e}/auth/sso/accesstoken/${r}`;
            return t.get(i)
        }
    }
}

function SP(t, e) {
    return {
        async getAccessToken(r) {
            if (!r || typeof r != "string") throw new Error("Integration type is required and must be a string");
            return (await t.get(`/apps/${e}/external-auth/tokens/${r}`)).access_token
        },
        async getConnection(r) {
            var i;
            if (!r || typeof r != "string") throw new Error("Integration type is required and must be a string");
            const l = await t.get(`/apps/${e}/external-auth/tokens/${r}`);
            return {
                accessToken: l.access_token,
                connectionConfig: (i = l.connection_config) !== null && i !== void 0 ? i : null
            }
        },
        async getCurrentAppUserAccessToken(r) {
            if (!r || typeof r != "string") throw new Error("Connector ID is required and must be a string");
            return (await t.get(`/apps/${e}/app-user-auth/connectors/${r}/token`)).access_token
        }
    }
}

function bP(t, e) {
    return {
        async connectAppUser(r) {
            if (!r || typeof r != "string") throw new Error("Connector ID is required and must be a string");
            return (await t.post(`/apps/${e}/app-user-auth/connectors/${r}/initiate`)).redirect_url
        },
        async disconnectAppUser(r) {
            if (!r || typeof r != "string") throw new Error("Connector ID is required and must be a string");
            await t.delete(`/apps/${e}/app-user-auth/connectors/${r}`)
        }
    }
}

function Rl(t = {}) {
    const {
        storageKey: e = "base44_access_token",
        paramName: r = "access_token",
        saveToStorage: i = !0,
        removeFromUrl: a = !0
    } = t;
    let l = null;
    if (typeof window < "u" && window.location) try {
        const c = new URLSearchParams(window.location.search);
        if (l = c.get(r), l) {
            if (i && kP(l, {
                    storageKey: e
                }), a) {
                c.delete(r);
                const d = `${window.location.pathname}${c.toString()?`?${c.toString()}`:""}${window.location.hash}`;
                window.history.replaceState({}, document.title, d)
            }
            return l
        }
    } catch (c) {
        console.error("Error retrieving token from URL:", c)
    }
    if (typeof window < "u" && window.localStorage) try {
        return l = window.localStorage.getItem(e), l
    } catch (c) {
        console.error("Error retrieving token from local storage:", c)
    }
    return null
}

function kP(t, e) {
    const {
        storageKey: r = "base44_access_token"
    } = e;
    if (typeof window > "u" || !window.localStorage || !t) return !1;
    try {
        return window.localStorage.setItem(r, t), window.localStorage.setItem("token", t), !0
    } catch (i) {
        return console.error("Error saving token to local storage:", i), !1
    }
}

function my(t, e, r) {
    const i = (l, c) => l ? `${String(l).replace(/\/$/,"")}${c}` : c,
        a = l => {
            const c = new Headers;
            if (r != null && r.getAuthHeaders) {
                const d = r.getAuthHeaders();
                Object.entries(d).forEach(([h, m]) => {
                    m != null && c.set(h, String(m))
                })
            }
            return l && new Headers(l).forEach((d, h) => {
                c.set(h, d)
            }), c
        };
    return {
        async invoke(l, c) {
            if (typeof c == "string") throw new Error(`Function ${l} must receive an object with named parameters, received: ${c}`);
            let d, h;
            return c instanceof FormData || c && Object.values(c).some(m => m instanceof File) ? (d = new FormData, Object.keys(c).forEach(m => {
                c[m] instanceof File ? d.append(m, c[m], c[m].name) : typeof c[m] == "object" && c[m] !== null ? d.append(m, JSON.stringify(c[m])) : d.append(m, c[m])
            }), h = "multipart/form-data") : (d = c, h = "application/json"), t.post(`/apps/${e}/functions/${l}`, d || c, {
                headers: {
                    "Content-Type": h
                }
            })
        },
        async fetch(l, c = {}) {
            const h = `/functions${l.startsWith("/")?l:`/${l}`}`,
                m = a(c.headers),
                g = { ...c,
                    headers: m
                };
            return await fetch(i(r == null ? void 0 : r.baseURL, h), g)
        }
    }
}

function gy({
    axios: t,
    getSocket: e,
    appId: r,
    serverUrl: i,
    token: a
}) {
    const l = `/apps/${r}/agents`,
        c = {},
        d = () => t.get(`${l}/conversations`),
        h = S => t.get(`${l}/conversations/${S}`);
    return {
        getConversations: d,
        getConversation: h,
        listConversations: S => t.get(`${l}/conversations`, {
            params: S
        }),
        createConversation: S => t.post(`${l}/conversations`, S),
        addMessage: async (S, b) => t.post(`${l}/conversations/v2/${S.id}/messages`, b),
        subscribeToConversation: (S, b) => {
            const x = `/agent-conversations/${S}`,
                R = e(),
                V = h(S).then(M => (c[S] = M, M));
            return R.subscribeToRoom(x, {
                connect: () => {},
                update_model: async ({
                    data: M
                }) => {
                    const L = JSON.parse(M);
                    if (L._message) {
                        await V;
                        const B = L._message,
                            K = c[S];
                        if (K) {
                            const G = K.messages || [],
                                j = G.findIndex(de => de.id === B.id),
                                J = j !== -1 ? G.map((de, me) => me === j ? B : de) : [...G, B];
                            c[S] = { ...K,
                                messages: J
                            }, b == null || b(c[S])
                        }
                    }
                }
            })
        },
        getWhatsAppConnectURL: S => {
            const b = `${i}/api/apps/${r}/agents/${encodeURIComponent(S)}/whatsapp`,
                x = a ? ? Rl();
            return x ? `${b}?token=${x}` : b
        }
    }
}

function yy(t, e) {
    const r = `/app-logs/${e}`;
    return {
        async logUserInApp(i) {
            await t.post(`${r}/log-user-in-app/${i}`)
        },
        async fetchLogs(i = {}) {
            return await t.get(r, {
                params: i
            })
        },
        async getStats(i = {}) {
            return await t.get(`${r}/stats`, {
                params: i
            })
        }
    }
}

function EP(t, e) {
    return {
        async inviteUser(r, i) {
            if (i !== "user" && i !== "admin") throw new Error(`Invalid role: "${i}". Role must be either "user" or "admin".`);
            return await t.post(`/apps/${e}/runtime/users/invite-user`, {
                user_email: r,
                role: i
            })
        }
    }
}
const Pn = Object.create(null);
Pn.open = "0";
Pn.close = "1";
Pn.ping = "2";
Pn.pong = "3";
Pn.message = "4";
Pn.upgrade = "5";
Pn.noop = "6";
const ml = Object.create(null);
Object.keys(Pn).forEach(t => {
    ml[Pn[t]] = t
});
const Qd = {
        type: "error",
        data: "parser error"
    },
    Ew = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]",
    Tw = typeof ArrayBuffer == "function",
    Cw = t => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(t) : t && t.buffer instanceof ArrayBuffer,
    Of = ({
        type: t,
        data: e
    }, r, i) => Ew && e instanceof Blob ? r ? i(e) : vy(e, i) : Tw && (e instanceof ArrayBuffer || Cw(e)) ? r ? i(e) : vy(new Blob([e]), i) : i(Pn[t] + (e || "")),
    vy = (t, e) => {
        const r = new FileReader;
        return r.onload = function() {
            const i = r.result.split(",")[1];
            e("b" + (i || ""))
        }, r.readAsDataURL(t)
    };

function wy(t) {
    return t instanceof Uint8Array ? t : t instanceof ArrayBuffer ? new Uint8Array(t) : new Uint8Array(t.buffer, t.byteOffset, t.byteLength)
}
let ad;

function TP(t, e) {
    if (Ew && t.data instanceof Blob) return t.data.arrayBuffer().then(wy).then(e);
    if (Tw && (t.data instanceof ArrayBuffer || Cw(t.data))) return e(wy(t.data));
    Of(t, !1, r => {
        ad || (ad = new TextEncoder), e(ad.encode(r))
    })
}
const xy = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    lo = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let t = 0; t < xy.length; t++) lo[xy.charCodeAt(t)] = t;
const CP = t => {
        let e = t.length * .75,
            r = t.length,
            i, a = 0,
            l, c, d, h;
        t[t.length - 1] === "=" && (e--, t[t.length - 2] === "=" && e--);
        const m = new ArrayBuffer(e),
            g = new Uint8Array(m);
        for (i = 0; i < r; i += 4) l = lo[t.charCodeAt(i)], c = lo[t.charCodeAt(i + 1)], d = lo[t.charCodeAt(i + 2)], h = lo[t.charCodeAt(i + 3)], g[a++] = l << 2 | c >> 4, g[a++] = (c & 15) << 4 | d >> 2, g[a++] = (d & 3) << 6 | h & 63;
        return m
    },
    PP = typeof ArrayBuffer == "function",
    Lf = (t, e) => {
        if (typeof t != "string") return {
            type: "message",
            data: Pw(t, e)
        };
        const r = t.charAt(0);
        return r === "b" ? {
            type: "message",
            data: _P(t.substring(1), e)
        } : ml[r] ? t.length > 1 ? {
            type: ml[r],
            data: t.substring(1)
        } : {
            type: ml[r]
        } : Qd
    },
    _P = (t, e) => {
        if (PP) {
            const r = CP(t);
            return Pw(r, e)
        } else return {
            base64: !0,
            data: t
        }
    },
    Pw = (t, e) => {
        switch (e) {
            case "blob":
                return t instanceof Blob ? t : new Blob([t]);
            case "arraybuffer":
            default:
                return t instanceof ArrayBuffer ? t : t.buffer
        }
    },
    _w = "",
    RP = (t, e) => {
        const r = t.length,
            i = new Array(r);
        let a = 0;
        t.forEach((l, c) => {
            Of(l, !1, d => {
                i[c] = d, ++a === r && e(i.join(_w))
            })
        })
    },
    AP = (t, e) => {
        const r = t.split(_w),
            i = [];
        for (let a = 0; a < r.length; a++) {
            const l = Lf(r[a], e);
            if (i.push(l), l.type === "error") break
        }
        return i
    };

function NP() {
    return new TransformStream({
        transform(t, e) {
            TP(t, r => {
                const i = r.length;
                let a;
                if (i < 126) a = new Uint8Array(1), new DataView(a.buffer).setUint8(0, i);
                else if (i < 65536) {
                    a = new Uint8Array(3);
                    const l = new DataView(a.buffer);
                    l.setUint8(0, 126), l.setUint16(1, i)
                } else {
                    a = new Uint8Array(9);
                    const l = new DataView(a.buffer);
                    l.setUint8(0, 127), l.setBigUint64(1, BigInt(i))
                }
                t.data && typeof t.data != "string" && (a[0] |= 128), e.enqueue(a), e.enqueue(r)
            })
        }
    })
}
let ld;

function sl(t) {
    return t.reduce((e, r) => e + r.length, 0)
}

function il(t, e) {
    if (t[0].length === e) return t.shift();
    const r = new Uint8Array(e);
    let i = 0;
    for (let a = 0; a < e; a++) r[a] = t[0][i++], i === t[0].length && (t.shift(), i = 0);
    return t.length && i < t[0].length && (t[0] = t[0].slice(i)), r
}

function OP(t, e) {
    ld || (ld = new TextDecoder);
    const r = [];
    let i = 0,
        a = -1,
        l = !1;
    return new TransformStream({
        transform(c, d) {
            for (r.push(c);;) {
                if (i === 0) {
                    if (sl(r) < 1) break;
                    const h = il(r, 1);
                    l = (h[0] & 128) === 128, a = h[0] & 127, a < 126 ? i = 3 : a === 126 ? i = 1 : i = 2
                } else if (i === 1) {
                    if (sl(r) < 2) break;
                    const h = il(r, 2);
                    a = new DataView(h.buffer, h.byteOffset, h.length).getUint16(0), i = 3
                } else if (i === 2) {
                    if (sl(r) < 8) break;
                    const h = il(r, 8),
                        m = new DataView(h.buffer, h.byteOffset, h.length),
                        g = m.getUint32(0);
                    if (g > Math.pow(2, 21) - 1) {
                        d.enqueue(Qd);
                        break
                    }
                    a = g * Math.pow(2, 32) + m.getUint32(4), i = 3
                } else {
                    if (sl(r) < a) break;
                    const h = il(r, a);
                    d.enqueue(Lf(l ? h : ld.decode(h), e)), i = 0
                }
                if (a === 0 || a > t) {
                    d.enqueue(Qd);
                    break
                }
            }
        }
    })
}
const Rw = 4;

function et(t) {
    if (t) return LP(t)
}

function LP(t) {
    for (var e in et.prototype) t[e] = et.prototype[e];
    return t
}
et.prototype.on = et.prototype.addEventListener = function(t, e) {
    return this._callbacks = this._callbacks || {}, (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e), this
};
et.prototype.once = function(t, e) {
    function r() {
        this.off(t, r), e.apply(this, arguments)
    }
    return r.fn = e, this.on(t, r), this
};
et.prototype.off = et.prototype.removeListener = et.prototype.removeAllListeners = et.prototype.removeEventListener = function(t, e) {
    if (this._callbacks = this._callbacks || {}, arguments.length == 0) return this._callbacks = {}, this;
    var r = this._callbacks["$" + t];
    if (!r) return this;
    if (arguments.length == 1) return delete this._callbacks["$" + t], this;
    for (var i, a = 0; a < r.length; a++)
        if (i = r[a], i === e || i.fn === e) {
            r.splice(a, 1);
            break
        }
    return r.length === 0 && delete this._callbacks["$" + t], this
};
et.prototype.emit = function(t) {
    this._callbacks = this._callbacks || {};
    for (var e = new Array(arguments.length - 1), r = this._callbacks["$" + t], i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
    if (r) {
        r = r.slice(0);
        for (var i = 0, a = r.length; i < a; ++i) r[i].apply(this, e)
    }
    return this
};
et.prototype.emitReserved = et.prototype.emit;
et.prototype.listeners = function(t) {
    return this._callbacks = this._callbacks || {}, this._callbacks["$" + t] || []
};
et.prototype.hasListeners = function(t) {
    return !!this.listeners(t).length
};
const ql = typeof Promise == "function" && typeof Promise.resolve == "function" ? e => Promise.resolve().then(e) : (e, r) => r(e, 0),
    en = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")(),
    MP = "arraybuffer";

function Aw(t, ...e) {
    return e.reduce((r, i) => (t.hasOwnProperty(i) && (r[i] = t[i]), r), {})
}
const DP = en.setTimeout,
    jP = en.clearTimeout;

function Wl(t, e) {
    e.useNativeTimers ? (t.setTimeoutFn = DP.bind(en), t.clearTimeoutFn = jP.bind(en)) : (t.setTimeoutFn = en.setTimeout.bind(en), t.clearTimeoutFn = en.clearTimeout.bind(en))
}
const IP = 1.33;

function FP(t) {
    return typeof t == "string" ? VP(t) : Math.ceil((t.byteLength || t.size) * IP)
}

function VP(t) {
    let e = 0,
        r = 0;
    for (let i = 0, a = t.length; i < a; i++) e = t.charCodeAt(i), e < 128 ? r += 1 : e < 2048 ? r += 2 : e < 55296 || e >= 57344 ? r += 3 : (i++, r += 4);
    return r
}

function Nw() {
    return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5)
}

function BP(t) {
    let e = "";
    for (let r in t) t.hasOwnProperty(r) && (e.length && (e += "&"), e += encodeURIComponent(r) + "=" + encodeURIComponent(t[r]));
    return e
}

function UP(t) {
    let e = {},
        r = t.split("&");
    for (let i = 0, a = r.length; i < a; i++) {
        let l = r[i].split("=");
        e[decodeURIComponent(l[0])] = decodeURIComponent(l[1])
    }
    return e
}
class zP extends Error {
    constructor(e, r, i) {
        super(e), this.description = r, this.context = i, this.type = "TransportError"
    }
}
class Mf extends et {
    constructor(e) {
        super(), this.writable = !1, Wl(this, e), this.opts = e, this.query = e.query, this.socket = e.socket, this.supportsBinary = !e.forceBase64
    }
    onError(e, r, i) {
        return super.emitReserved("error", new zP(e, r, i)), this
    }
    open() {
        return this.readyState = "opening", this.doOpen(), this
    }
    close() {
        return (this.readyState === "opening" || this.readyState === "open") && (this.doClose(), this.onClose()), this
    }
    send(e) {
        this.readyState === "open" && this.write(e)
    }
    onOpen() {
        this.readyState = "open", this.writable = !0, super.emitReserved("open")
    }
    onData(e) {
        const r = Lf(e, this.socket.binaryType);
        this.onPacket(r)
    }
    onPacket(e) {
        super.emitReserved("packet", e)
    }
    onClose(e) {
        this.readyState = "closed", super.emitReserved("close", e)
    }
    pause(e) {}
    createUri(e, r = {}) {
        return e + "://" + this._hostname() + this._port() + this.opts.path + this._query(r)
    }
    _hostname() {
        const e = this.opts.hostname;
        return e.indexOf(":") === -1 ? e : "[" + e + "]"
    }
    _port() {
        return this.opts.port && (this.opts.secure && Number(this.opts.port) !== 443 || !this.opts.secure && Number(this.opts.port) !== 80) ? ":" + this.opts.port : ""
    }
    _query(e) {
        const r = BP(e);
        return r.length ? "?" + r : ""
    }
}
class $P extends Mf {
    constructor() {
        super(...arguments), this._polling = !1
    }
    get name() {
        return "polling"
    }
    doOpen() {
        this._poll()
    }
    pause(e) {
        this.readyState = "pausing";
        const r = () => {
            this.readyState = "paused", e()
        };
        if (this._polling || !this.writable) {
            let i = 0;
            this._polling && (i++, this.once("pollComplete", function() {
                --i || r()
            })), this.writable || (i++, this.once("drain", function() {
                --i || r()
            }))
        } else r()
    }
    _poll() {
        this._polling = !0, this.doPoll(), this.emitReserved("poll")
    }
    onData(e) {
        const r = i => {
            if (this.readyState === "opening" && i.type === "open" && this.onOpen(), i.type === "close") return this.onClose({
                description: "transport closed by the server"
            }), !1;
            this.onPacket(i)
        };
        AP(e, this.socket.binaryType).forEach(r), this.readyState !== "closed" && (this._polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this._poll())
    }
    doClose() {
        const e = () => {
            this.write([{
                type: "close"
            }])
        };
        this.readyState === "open" ? e() : this.once("open", e)
    }
    write(e) {
        this.writable = !1, RP(e, r => {
            this.doWrite(r, () => {
                this.writable = !0, this.emitReserved("drain")
            })
        })
    }
    uri() {
        const e = this.opts.secure ? "https" : "http",
            r = this.query || {};
        return this.opts.timestampRequests !== !1 && (r[this.opts.timestampParam] = Nw()), !this.supportsBinary && !r.sid && (r.b64 = 1), this.createUri(e, r)
    }
}
let Ow = !1;
try {
    Ow = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest
} catch {}
const HP = Ow;

function qP() {}
class WP extends $P {
    constructor(e) {
        if (super(e), typeof location < "u") {
            const r = location.protocol === "https:";
            let i = location.port;
            i || (i = r ? "443" : "80"), this.xd = typeof location < "u" && e.hostname !== location.hostname || i !== e.port
        }
    }
    doWrite(e, r) {
        const i = this.request({
            method: "POST",
            data: e
        });
        i.on("success", r), i.on("error", (a, l) => {
            this.onError("xhr post error", a, l)
        })
    }
    doPoll() {
        const e = this.request();
        e.on("data", this.onData.bind(this)), e.on("error", (r, i) => {
            this.onError("xhr poll error", r, i)
        }), this.pollXhr = e
    }
}
class En extends et {
    constructor(e, r, i) {
        super(), this.createRequest = e, Wl(this, i), this._opts = i, this._method = i.method || "GET", this._uri = r, this._data = i.data !== void 0 ? i.data : null, this._create()
    }
    _create() {
        var e;
        const r = Aw(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
        r.xdomain = !!this._opts.xd;
        const i = this._xhr = this.createRequest(r);
        try {
            i.open(this._method, this._uri, !0);
            try {
                if (this._opts.extraHeaders) {
                    i.setDisableHeaderCheck && i.setDisableHeaderCheck(!0);
                    for (let a in this._opts.extraHeaders) this._opts.extraHeaders.hasOwnProperty(a) && i.setRequestHeader(a, this._opts.extraHeaders[a])
                }
            } catch {}
            if (this._method === "POST") try {
                i.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
            } catch {}
            try {
                i.setRequestHeader("Accept", "*/*")
            } catch {}(e = this._opts.cookieJar) === null || e === void 0 || e.addCookies(i), "withCredentials" in i && (i.withCredentials = this._opts.withCredentials), this._opts.requestTimeout && (i.timeout = this._opts.requestTimeout), i.onreadystatechange = () => {
                var a;
                i.readyState === 3 && ((a = this._opts.cookieJar) === null || a === void 0 || a.parseCookies(i.getResponseHeader("set-cookie"))), i.readyState === 4 && (i.status === 200 || i.status === 1223 ? this._onLoad() : this.setTimeoutFn(() => {
                    this._onError(typeof i.status == "number" ? i.status : 0)
                }, 0))
            }, i.send(this._data)
        } catch (a) {
            this.setTimeoutFn(() => {
                this._onError(a)
            }, 0);
            return
        }
        typeof document < "u" && (this._index = En.requestsCount++, En.requests[this._index] = this)
    }
    _onError(e) {
        this.emitReserved("error", e, this._xhr), this._cleanup(!0)
    }
    _cleanup(e) {
        if (!(typeof this._xhr > "u" || this._xhr === null)) {
            if (this._xhr.onreadystatechange = qP, e) try {
                this._xhr.abort()
            } catch {}
            typeof document < "u" && delete En.requests[this._index], this._xhr = null
        }
    }
    _onLoad() {
        const e = this._xhr.responseText;
        e !== null && (this.emitReserved("data", e), this.emitReserved("success"), this._cleanup())
    }
    abort() {
        this._cleanup()
    }
}
En.requestsCount = 0;
En.requests = {};
if (typeof document < "u") {
    if (typeof attachEvent == "function") attachEvent("onunload", Sy);
    else if (typeof addEventListener == "function") {
        const t = "onpagehide" in en ? "pagehide" : "unload";
        addEventListener(t, Sy, !1)
    }
}

function Sy() {
    for (let t in En.requests) En.requests.hasOwnProperty(t) && En.requests[t].abort()
}
const KP = (function() {
    const t = Lw({
        xdomain: !1
    });
    return t && t.responseType !== null
})();
class QP extends WP {
    constructor(e) {
        super(e);
        const r = e && e.forceBase64;
        this.supportsBinary = KP && !r
    }
    request(e = {}) {
        return Object.assign(e, {
            xd: this.xd
        }, this.opts), new En(Lw, this.uri(), e)
    }
}

function Lw(t) {
    const e = t.xdomain;
    try {
        if (typeof XMLHttpRequest < "u" && (!e || HP)) return new XMLHttpRequest
    } catch {}
    if (!e) try {
        return new en[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")
    } catch {}
}
const Mw = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class GP extends Mf {
    get name() {
        return "websocket"
    }
    doOpen() {
        const e = this.uri(),
            r = this.opts.protocols,
            i = Mw ? {} : Aw(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
        this.opts.extraHeaders && (i.headers = this.opts.extraHeaders);
        try {
            this.ws = this.createSocket(e, r, i)
        } catch (a) {
            return this.emitReserved("error", a)
        }
        this.ws.binaryType = this.socket.binaryType, this.addEventListeners()
    }
    addEventListeners() {
        this.ws.onopen = () => {
            this.opts.autoUnref && this.ws._socket.unref(), this.onOpen()
        }, this.ws.onclose = e => this.onClose({
            description: "websocket connection closed",
            context: e
        }), this.ws.onmessage = e => this.onData(e.data), this.ws.onerror = e => this.onError("websocket error", e)
    }
    write(e) {
        this.writable = !1;
        for (let r = 0; r < e.length; r++) {
            const i = e[r],
                a = r === e.length - 1;
            Of(i, this.supportsBinary, l => {
                try {
                    this.doWrite(i, l)
                } catch {}
                a && ql(() => {
                    this.writable = !0, this.emitReserved("drain")
                }, this.setTimeoutFn)
            })
        }
    }
    doClose() {
        typeof this.ws < "u" && (this.ws.onerror = () => {}, this.ws.close(), this.ws = null)
    }
    uri() {
        const e = this.opts.secure ? "wss" : "ws",
            r = this.query || {};
        return this.opts.timestampRequests && (r[this.opts.timestampParam] = Nw()), this.supportsBinary || (r.b64 = 1), this.createUri(e, r)
    }
}
const ud = en.WebSocket || en.MozWebSocket;
class YP extends GP {
    createSocket(e, r, i) {
        return Mw ? new ud(e, r, i) : r ? new ud(e, r) : new ud(e)
    }
    doWrite(e, r) {
        this.ws.send(r)
    }
}
class XP extends Mf {
    get name() {
        return "webtransport"
    }
    doOpen() {
        try {
            this._transport = new WebTransport(this.createUri("https"), this.opts.transportOptions[this.name])
        } catch (e) {
            return this.emitReserved("error", e)
        }
        this._transport.closed.then(() => {
            this.onClose()
        }).catch(e => {
            this.onError("webtransport error", e)
        }), this._transport.ready.then(() => {
            this._transport.createBidirectionalStream().then(e => {
                const r = OP(Number.MAX_SAFE_INTEGER, this.socket.binaryType),
                    i = e.readable.pipeThrough(r).getReader(),
                    a = NP();
                a.readable.pipeTo(e.writable), this._writer = a.writable.getWriter();
                const l = () => {
                    i.read().then(({
                        done: d,
                        value: h
                    }) => {
                        d || (this.onPacket(h), l())
                    }).catch(d => {})
                };
                l();
                const c = {
                    type: "open"
                };
                this.query.sid && (c.data = `{"sid":"${this.query.sid}"}`), this._writer.write(c).then(() => this.onOpen())
            })
        })
    }
    write(e) {
        this.writable = !1;
        for (let r = 0; r < e.length; r++) {
            const i = e[r],
                a = r === e.length - 1;
            this._writer.write(i).then(() => {
                a && ql(() => {
                    this.writable = !0, this.emitReserved("drain")
                }, this.setTimeoutFn)
            })
        }
    }
    doClose() {
        var e;
        (e = this._transport) === null || e === void 0 || e.close()
    }
}
const JP = {
        websocket: YP,
        webtransport: XP,
        polling: QP
    },
    ZP = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
    e_ = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];

function Gd(t) {
    if (t.length > 8e3) throw "URI too long";
    const e = t,
        r = t.indexOf("["),
        i = t.indexOf("]");
    r != -1 && i != -1 && (t = t.substring(0, r) + t.substring(r, i).replace(/:/g, ";") + t.substring(i, t.length));
    let a = ZP.exec(t || ""),
        l = {},
        c = 14;
    for (; c--;) l[e_[c]] = a[c] || "";
    return r != -1 && i != -1 && (l.source = e, l.host = l.host.substring(1, l.host.length - 1).replace(/;/g, ":"), l.authority = l.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), l.ipv6uri = !0), l.pathNames = t_(l, l.path), l.queryKey = n_(l, l.query), l
}

function t_(t, e) {
    const r = /\/{2,9}/g,
        i = e.replace(r, "/").split("/");
    return (e.slice(0, 1) == "/" || e.length === 0) && i.splice(0, 1), e.slice(-1) == "/" && i.splice(i.length - 1, 1), i
}

function n_(t, e) {
    const r = {};
    return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(i, a, l) {
        a && (r[a] = l)
    }), r
}
const Yd = typeof addEventListener == "function" && typeof removeEventListener == "function",
    gl = [];
Yd && addEventListener("offline", () => {
    gl.forEach(t => t())
}, !1);
class _r extends et {
    constructor(e, r) {
        if (super(), this.binaryType = MP, this.writeBuffer = [], this._prevBufferLen = 0, this._pingInterval = -1, this._pingTimeout = -1, this._maxPayload = -1, this._pingTimeoutTime = 1 / 0, e && typeof e == "object" && (r = e, e = null), e) {
            const i = Gd(e);
            r.hostname = i.host, r.secure = i.protocol === "https" || i.protocol === "wss", r.port = i.port, i.query && (r.query = i.query)
        } else r.host && (r.hostname = Gd(r.host).host);
        Wl(this, r), this.secure = r.secure != null ? r.secure : typeof location < "u" && location.protocol === "https:", r.hostname && !r.port && (r.port = this.secure ? "443" : "80"), this.hostname = r.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = r.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = [], this._transportsByName = {}, r.transports.forEach(i => {
            const a = i.prototype.name;
            this.transports.push(a), this._transportsByName[a] = i
        }), this.opts = Object.assign({
            path: "/engine.io",
            agent: !1,
            withCredentials: !1,
            upgrade: !0,
            timestampParam: "t",
            rememberUpgrade: !1,
            addTrailingSlash: !0,
            rejectUnauthorized: !0,
            perMessageDeflate: {
                threshold: 1024
            },
            transportOptions: {},
            closeOnBeforeunload: !1
        }, r), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = UP(this.opts.query)), Yd && (this.opts.closeOnBeforeunload && (this._beforeunloadEventListener = () => {
            this.transport && (this.transport.removeAllListeners(), this.transport.close())
        }, addEventListener("beforeunload", this._beforeunloadEventListener, !1)), this.hostname !== "localhost" && (this._offlineEventListener = () => {
            this._onClose("transport close", {
                description: "network connection lost"
            })
        }, gl.push(this._offlineEventListener))), this.opts.withCredentials && (this._cookieJar = void 0), this._open()
    }
    createTransport(e) {
        const r = Object.assign({}, this.opts.query);
        r.EIO = Rw, r.transport = e, this.id && (r.sid = this.id);
        const i = Object.assign({}, this.opts, {
            query: r,
            socket: this,
            hostname: this.hostname,
            secure: this.secure,
            port: this.port
        }, this.opts.transportOptions[e]);
        return new this._transportsByName[e](i)
    }
    _open() {
        if (this.transports.length === 0) {
            this.setTimeoutFn(() => {
                this.emitReserved("error", "No transports available")
            }, 0);
            return
        }
        const e = this.opts.rememberUpgrade && _r.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
        this.readyState = "opening";
        const r = this.createTransport(e);
        r.open(), this.setTransport(r)
    }
    setTransport(e) {
        this.transport && this.transport.removeAllListeners(), this.transport = e, e.on("drain", this._onDrain.bind(this)).on("packet", this._onPacket.bind(this)).on("error", this._onError.bind(this)).on("close", r => this._onClose("transport close", r))
    }
    onOpen() {
        this.readyState = "open", _r.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush()
    }
    _onPacket(e) {
        if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") switch (this.emitReserved("packet", e), this.emitReserved("heartbeat"), e.type) {
            case "open":
                this.onHandshake(JSON.parse(e.data));
                break;
            case "ping":
                this._sendPacket("pong"), this.emitReserved("ping"), this.emitReserved("pong"), this._resetPingTimeout();
                break;
            case "error":
                const r = new Error("server error");
                r.code = e.data, this._onError(r);
                break;
            case "message":
                this.emitReserved("data", e.data), this.emitReserved("message", e.data);
                break
        }
    }
    onHandshake(e) {
        this.emitReserved("handshake", e), this.id = e.sid, this.transport.query.sid = e.sid, this._pingInterval = e.pingInterval, this._pingTimeout = e.pingTimeout, this._maxPayload = e.maxPayload, this.onOpen(), this.readyState !== "closed" && this._resetPingTimeout()
    }
    _resetPingTimeout() {
        this.clearTimeoutFn(this._pingTimeoutTimer);
        const e = this._pingInterval + this._pingTimeout;
        this._pingTimeoutTime = Date.now() + e, this._pingTimeoutTimer = this.setTimeoutFn(() => {
            this._onClose("ping timeout")
        }, e), this.opts.autoUnref && this._pingTimeoutTimer.unref()
    }
    _onDrain() {
        this.writeBuffer.splice(0, this._prevBufferLen), this._prevBufferLen = 0, this.writeBuffer.length === 0 ? this.emitReserved("drain") : this.flush()
    }
    flush() {
        if (this.readyState !== "closed" && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
            const e = this._getWritablePackets();
            this.transport.send(e), this._prevBufferLen = e.length, this.emitReserved("flush")
        }
    }
    _getWritablePackets() {
        if (!(this._maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1)) return this.writeBuffer;
        let r = 1;
        for (let i = 0; i < this.writeBuffer.length; i++) {
            const a = this.writeBuffer[i].data;
            if (a && (r += FP(a)), i > 0 && r > this._maxPayload) return this.writeBuffer.slice(0, i);
            r += 2
        }
        return this.writeBuffer
    }
    _hasPingExpired() {
        if (!this._pingTimeoutTime) return !0;
        const e = Date.now() > this._pingTimeoutTime;
        return e && (this._pingTimeoutTime = 0, ql(() => {
            this._onClose("ping timeout")
        }, this.setTimeoutFn)), e
    }
    write(e, r, i) {
        return this._sendPacket("message", e, r, i), this
    }
    send(e, r, i) {
        return this._sendPacket("message", e, r, i), this
    }
    _sendPacket(e, r, i, a) {
        if (typeof r == "function" && (a = r, r = void 0), typeof i == "function" && (a = i, i = null), this.readyState === "closing" || this.readyState === "closed") return;
        i = i || {}, i.compress = i.compress !== !1;
        const l = {
            type: e,
            data: r,
            options: i
        };
        this.emitReserved("packetCreate", l), this.writeBuffer.push(l), a && this.once("flush", a), this.flush()
    }
    close() {
        const e = () => {
                this._onClose("forced close"), this.transport.close()
            },
            r = () => {
                this.off("upgrade", r), this.off("upgradeError", r), e()
            },
            i = () => {
                this.once("upgrade", r), this.once("upgradeError", r)
            };
        return (this.readyState === "opening" || this.readyState === "open") && (this.readyState = "closing", this.writeBuffer.length ? this.once("drain", () => {
            this.upgrading ? i() : e()
        }) : this.upgrading ? i() : e()), this
    }
    _onError(e) {
        if (_r.priorWebsocketSuccess = !1, this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening") return this.transports.shift(), this._open();
        this.emitReserved("error", e), this._onClose("transport error", e)
    }
    _onClose(e, r) {
        if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") {
            if (this.clearTimeoutFn(this._pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), Yd && (this._beforeunloadEventListener && removeEventListener("beforeunload", this._beforeunloadEventListener, !1), this._offlineEventListener)) {
                const i = gl.indexOf(this._offlineEventListener);
                i !== -1 && gl.splice(i, 1)
            }
            this.readyState = "closed", this.id = null, this.emitReserved("close", e, r), this.writeBuffer = [], this._prevBufferLen = 0
        }
    }
}
_r.protocol = Rw;
class r_ extends _r {
    constructor() {
        super(...arguments), this._upgrades = []
    }
    onOpen() {
        if (super.onOpen(), this.readyState === "open" && this.opts.upgrade)
            for (let e = 0; e < this._upgrades.length; e++) this._probe(this._upgrades[e])
    }
    _probe(e) {
        let r = this.createTransport(e),
            i = !1;
        _r.priorWebsocketSuccess = !1;
        const a = () => {
            i || (r.send([{
                type: "ping",
                data: "probe"
            }]), r.once("packet", y => {
                if (!i)
                    if (y.type === "pong" && y.data === "probe") {
                        if (this.upgrading = !0, this.emitReserved("upgrading", r), !r) return;
                        _r.priorWebsocketSuccess = r.name === "websocket", this.transport.pause(() => {
                            i || this.readyState !== "closed" && (g(), this.setTransport(r), r.send([{
                                type: "upgrade"
                            }]), this.emitReserved("upgrade", r), r = null, this.upgrading = !1, this.flush())
                        })
                    } else {
                        const w = new Error("probe error");
                        w.transport = r.name, this.emitReserved("upgradeError", w)
                    }
            }))
        };

        function l() {
            i || (i = !0, g(), r.close(), r = null)
        }
        const c = y => {
            const w = new Error("probe error: " + y);
            w.transport = r.name, l(), this.emitReserved("upgradeError", w)
        };

        function d() {
            c("transport closed")
        }

        function h() {
            c("socket closed")
        }

        function m(y) {
            r && y.name !== r.name && l()
        }
        const g = () => {
            r.removeListener("open", a), r.removeListener("error", c), r.removeListener("close", d), this.off("close", h), this.off("upgrading", m)
        };
        r.once("open", a), r.once("error", c), r.once("close", d), this.once("close", h), this.once("upgrading", m), this._upgrades.indexOf("webtransport") !== -1 && e !== "webtransport" ? this.setTimeoutFn(() => {
            i || r.open()
        }, 200) : r.open()
    }
    onHandshake(e) {
        this._upgrades = this._filterUpgrades(e.upgrades), super.onHandshake(e)
    }
    _filterUpgrades(e) {
        const r = [];
        for (let i = 0; i < e.length; i++) ~this.transports.indexOf(e[i]) && r.push(e[i]);
        return r
    }
}
let s_ = class extends r_ {
    constructor(e, r = {}) {
        const i = typeof e == "object" ? e : r;
        (!i.transports || i.transports && typeof i.transports[0] == "string") && (i.transports = (i.transports || ["polling", "websocket", "webtransport"]).map(a => JP[a]).filter(a => !!a)), super(e, i)
    }
};

function i_(t, e = "", r) {
    let i = t;
    r = r || typeof location < "u" && location, t == null && (t = r.protocol + "//" + r.host), typeof t == "string" && (t.charAt(0) === "/" && (t.charAt(1) === "/" ? t = r.protocol + t : t = r.host + t), /^(https?|wss?):\/\//.test(t) || (typeof r < "u" ? t = r.protocol + "//" + t : t = "https://" + t), i = Gd(t)), i.port || (/^(http|ws)$/.test(i.protocol) ? i.port = "80" : /^(http|ws)s$/.test(i.protocol) && (i.port = "443")), i.path = i.path || "/";
    const l = i.host.indexOf(":") !== -1 ? "[" + i.host + "]" : i.host;
    return i.id = i.protocol + "://" + l + ":" + i.port + e, i.href = i.protocol + "://" + l + (r && r.port === i.port ? "" : ":" + i.port), i
}
const o_ = typeof ArrayBuffer == "function",
    a_ = t => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(t) : t.buffer instanceof ArrayBuffer,
    Dw = Object.prototype.toString,
    l_ = typeof Blob == "function" || typeof Blob < "u" && Dw.call(Blob) === "[object BlobConstructor]",
    u_ = typeof File == "function" || typeof File < "u" && Dw.call(File) === "[object FileConstructor]";

function Df(t) {
    return o_ && (t instanceof ArrayBuffer || a_(t)) || l_ && t instanceof Blob || u_ && t instanceof File
}

function yl(t, e) {
    if (!t || typeof t != "object") return !1;
    if (Array.isArray(t)) {
        for (let r = 0, i = t.length; r < i; r++)
            if (yl(t[r])) return !0;
        return !1
    }
    if (Df(t)) return !0;
    if (t.toJSON && typeof t.toJSON == "function" && arguments.length === 1) return yl(t.toJSON(), !0);
    for (const r in t)
        if (Object.prototype.hasOwnProperty.call(t, r) && yl(t[r])) return !0;
    return !1
}

function c_(t) {
    const e = [],
        r = t.data,
        i = t;
    return i.data = Xd(r, e), i.attachments = e.length, {
        packet: i,
        buffers: e
    }
}

function Xd(t, e) {
    if (!t) return t;
    if (Df(t)) {
        const r = {
            _placeholder: !0,
            num: e.length
        };
        return e.push(t), r
    } else if (Array.isArray(t)) {
        const r = new Array(t.length);
        for (let i = 0; i < t.length; i++) r[i] = Xd(t[i], e);
        return r
    } else if (typeof t == "object" && !(t instanceof Date)) {
        const r = {};
        for (const i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[i] = Xd(t[i], e));
        return r
    }
    return t
}

function d_(t, e) {
    return t.data = Jd(t.data, e), delete t.attachments, t
}

function Jd(t, e) {
    if (!t) return t;
    if (t && t._placeholder === !0) {
        if (typeof t.num == "number" && t.num >= 0 && t.num < e.length) return e[t.num];
        throw new Error("illegal attachments")
    } else if (Array.isArray(t))
        for (let r = 0; r < t.length; r++) t[r] = Jd(t[r], e);
    else if (typeof t == "object")
        for (const r in t) Object.prototype.hasOwnProperty.call(t, r) && (t[r] = Jd(t[r], e));
    return t
}
const f_ = ["connect", "connect_error", "disconnect", "disconnecting", "newListener", "removeListener"];
var Te;
(function(t) {
    t[t.CONNECT = 0] = "CONNECT", t[t.DISCONNECT = 1] = "DISCONNECT", t[t.EVENT = 2] = "EVENT", t[t.ACK = 3] = "ACK", t[t.CONNECT_ERROR = 4] = "CONNECT_ERROR", t[t.BINARY_EVENT = 5] = "BINARY_EVENT", t[t.BINARY_ACK = 6] = "BINARY_ACK"
})(Te || (Te = {}));
class h_ {
    constructor(e) {
        this.replacer = e
    }
    encode(e) {
        return (e.type === Te.EVENT || e.type === Te.ACK) && yl(e) ? this.encodeAsBinary({
            type: e.type === Te.EVENT ? Te.BINARY_EVENT : Te.BINARY_ACK,
            nsp: e.nsp,
            data: e.data,
            id: e.id
        }) : [this.encodeAsString(e)]
    }
    encodeAsString(e) {
        let r = "" + e.type;
        return (e.type === Te.BINARY_EVENT || e.type === Te.BINARY_ACK) && (r += e.attachments + "-"), e.nsp && e.nsp !== "/" && (r += e.nsp + ","), e.id != null && (r += e.id), e.data != null && (r += JSON.stringify(e.data, this.replacer)), r
    }
    encodeAsBinary(e) {
        const r = c_(e),
            i = this.encodeAsString(r.packet),
            a = r.buffers;
        return a.unshift(i), a
    }
}
class jf extends et {
    constructor(e) {
        super(), this.reviver = e
    }
    add(e) {
        let r;
        if (typeof e == "string") {
            if (this.reconstructor) throw new Error("got plaintext data when reconstructing a packet");
            r = this.decodeString(e);
            const i = r.type === Te.BINARY_EVENT;
            i || r.type === Te.BINARY_ACK ? (r.type = i ? Te.EVENT : Te.ACK, this.reconstructor = new p_(r), r.attachments === 0 && super.emitReserved("decoded", r)) : super.emitReserved("decoded", r)
        } else if (Df(e) || e.base64)
            if (this.reconstructor) r = this.reconstructor.takeBinaryData(e), r && (this.reconstructor = null, super.emitReserved("decoded", r));
            else throw new Error("got binary data when not reconstructing a packet");
        else throw new Error("Unknown type: " + e)
    }
    decodeString(e) {
        let r = 0;
        const i = {
            type: Number(e.charAt(0))
        };
        if (Te[i.type] === void 0) throw new Error("unknown packet type " + i.type);
        if (i.type === Te.BINARY_EVENT || i.type === Te.BINARY_ACK) {
            const l = r + 1;
            for (; e.charAt(++r) !== "-" && r != e.length;);
            const c = e.substring(l, r);
            if (c != Number(c) || e.charAt(r) !== "-") throw new Error("Illegal attachments");
            i.attachments = Number(c)
        }
        if (e.charAt(r + 1) === "/") {
            const l = r + 1;
            for (; ++r && !(e.charAt(r) === "," || r === e.length););
            i.nsp = e.substring(l, r)
        } else i.nsp = "/";
        const a = e.charAt(r + 1);
        if (a !== "" && Number(a) == a) {
            const l = r + 1;
            for (; ++r;) {
                const c = e.charAt(r);
                if (c == null || Number(c) != c) {
                    --r;
                    break
                }
                if (r === e.length) break
            }
            i.id = Number(e.substring(l, r + 1))
        }
        if (e.charAt(++r)) {
            const l = this.tryParse(e.substr(r));
            if (jf.isPayloadValid(i.type, l)) i.data = l;
            else throw new Error("invalid payload")
        }
        return i
    }
    tryParse(e) {
        try {
            return JSON.parse(e, this.reviver)
        } catch {
            return !1
        }
    }
    static isPayloadValid(e, r) {
        switch (e) {
            case Te.CONNECT:
                return by(r);
            case Te.DISCONNECT:
                return r === void 0;
            case Te.CONNECT_ERROR:
                return typeof r == "string" || by(r);
            case Te.EVENT:
            case Te.BINARY_EVENT:
                return Array.isArray(r) && (typeof r[0] == "number" || typeof r[0] == "string" && f_.indexOf(r[0]) === -1);
            case Te.ACK:
            case Te.BINARY_ACK:
                return Array.isArray(r)
        }
    }
    destroy() {
        this.reconstructor && (this.reconstructor.finishedReconstruction(), this.reconstructor = null)
    }
}
class p_ {
    constructor(e) {
        this.packet = e, this.buffers = [], this.reconPack = e
    }
    takeBinaryData(e) {
        if (this.buffers.push(e), this.buffers.length === this.reconPack.attachments) {
            const r = d_(this.reconPack, this.buffers);
            return this.finishedReconstruction(), r
        }
        return null
    }
    finishedReconstruction() {
        this.reconPack = null, this.buffers = []
    }
}

function by(t) {
    return Object.prototype.toString.call(t) === "[object Object]"
}
const m_ = Object.freeze(Object.defineProperty({
    __proto__: null,
    Decoder: jf,
    Encoder: h_,
    get PacketType() {
        return Te
    }
}, Symbol.toStringTag, {
    value: "Module"
}));

function fn(t, e, r) {
    return t.on(e, r),
        function() {
            t.off(e, r)
        }
}
const g_ = Object.freeze({
    connect: 1,
    connect_error: 1,
    disconnect: 1,
    disconnecting: 1,
    newListener: 1,
    removeListener: 1
});
class jw extends et {
    constructor(e, r, i) {
        super(), this.connected = !1, this.recovered = !1, this.receiveBuffer = [], this.sendBuffer = [], this._queue = [], this._queueSeq = 0, this.ids = 0, this.acks = {}, this.flags = {}, this.io = e, this.nsp = r, i && i.auth && (this.auth = i.auth), this._opts = Object.assign({}, i), this.io._autoConnect && this.open()
    }
    get disconnected() {
        return !this.connected
    }
    subEvents() {
        if (this.subs) return;
        const e = this.io;
        this.subs = [fn(e, "open", this.onopen.bind(this)), fn(e, "packet", this.onpacket.bind(this)), fn(e, "error", this.onerror.bind(this)), fn(e, "close", this.onclose.bind(this))]
    }
    get active() {
        return !!this.subs
    }
    connect() {
        return this.connected ? this : (this.subEvents(), this.io._reconnecting || this.io.open(), this.io._readyState === "open" && this.onopen(), this)
    }
    open() {
        return this.connect()
    }
    send(...e) {
        return e.unshift("message"), this.emit.apply(this, e), this
    }
    emit(e, ...r) {
        var i, a, l;
        if (g_.hasOwnProperty(e)) throw new Error('"' + e.toString() + '" is a reserved event name');
        if (r.unshift(e), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile) return this._addToQueue(r), this;
        const c = {
            type: Te.EVENT,
            data: r
        };
        if (c.options = {}, c.options.compress = this.flags.compress !== !1, typeof r[r.length - 1] == "function") {
            const g = this.ids++,
                y = r.pop();
            this._registerAckCallback(g, y), c.id = g
        }
        const d = (a = (i = this.io.engine) === null || i === void 0 ? void 0 : i.transport) === null || a === void 0 ? void 0 : a.writable,
            h = this.connected && !(!((l = this.io.engine) === null || l === void 0) && l._hasPingExpired());
        return this.flags.volatile && !d || (h ? (this.notifyOutgoingListeners(c), this.packet(c)) : this.sendBuffer.push(c)), this.flags = {}, this
    }
    _registerAckCallback(e, r) {
        var i;
        const a = (i = this.flags.timeout) !== null && i !== void 0 ? i : this._opts.ackTimeout;
        if (a === void 0) {
            this.acks[e] = r;
            return
        }
        const l = this.io.setTimeoutFn(() => {
                delete this.acks[e];
                for (let d = 0; d < this.sendBuffer.length; d++) this.sendBuffer[d].id === e && this.sendBuffer.splice(d, 1);
                r.call(this, new Error("operation has timed out"))
            }, a),
            c = (...d) => {
                this.io.clearTimeoutFn(l), r.apply(this, d)
            };
        c.withError = !0, this.acks[e] = c
    }
    emitWithAck(e, ...r) {
        return new Promise((i, a) => {
            const l = (c, d) => c ? a(c) : i(d);
            l.withError = !0, r.push(l), this.emit(e, ...r)
        })
    }
    _addToQueue(e) {
        let r;
        typeof e[e.length - 1] == "function" && (r = e.pop());
        const i = {
            id: this._queueSeq++,
            tryCount: 0,
            pending: !1,
            args: e,
            flags: Object.assign({
                fromQueue: !0
            }, this.flags)
        };
        e.push((a, ...l) => (this._queue[0], a !== null ? i.tryCount > this._opts.retries && (this._queue.shift(), r && r(a)) : (this._queue.shift(), r && r(null, ...l)), i.pending = !1, this._drainQueue())), this._queue.push(i), this._drainQueue()
    }
    _drainQueue(e = !1) {
        if (!this.connected || this._queue.length === 0) return;
        const r = this._queue[0];
        r.pending && !e || (r.pending = !0, r.tryCount++, this.flags = r.flags, this.emit.apply(this, r.args))
    }
    packet(e) {
        e.nsp = this.nsp, this.io._packet(e)
    }
    onopen() {
        typeof this.auth == "function" ? this.auth(e => {
            this._sendConnectPacket(e)
        }) : this._sendConnectPacket(this.auth)
    }
    _sendConnectPacket(e) {
        this.packet({
            type: Te.CONNECT,
            data: this._pid ? Object.assign({
                pid: this._pid,
                offset: this._lastOffset
            }, e) : e
        })
    }
    onerror(e) {
        this.connected || this.emitReserved("connect_error", e)
    }
    onclose(e, r) {
        this.connected = !1, delete this.id, this.emitReserved("disconnect", e, r), this._clearAcks()
    }
    _clearAcks() {
        Object.keys(this.acks).forEach(e => {
            if (!this.sendBuffer.some(i => String(i.id) === e)) {
                const i = this.acks[e];
                delete this.acks[e], i.withError && i.call(this, new Error("socket has been disconnected"))
            }
        })
    }
    onpacket(e) {
        if (e.nsp === this.nsp) switch (e.type) {
            case Te.CONNECT:
                e.data && e.data.sid ? this.onconnect(e.data.sid, e.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
                break;
            case Te.EVENT:
            case Te.BINARY_EVENT:
                this.onevent(e);
                break;
            case Te.ACK:
            case Te.BINARY_ACK:
                this.onack(e);
                break;
            case Te.DISCONNECT:
                this.ondisconnect();
                break;
            case Te.CONNECT_ERROR:
                this.destroy();
                const i = new Error(e.data.message);
                i.data = e.data.data, this.emitReserved("connect_error", i);
                break
        }
    }
    onevent(e) {
        const r = e.data || [];
        e.id != null && r.push(this.ack(e.id)), this.connected ? this.emitEvent(r) : this.receiveBuffer.push(Object.freeze(r))
    }
    emitEvent(e) {
        if (this._anyListeners && this._anyListeners.length) {
            const r = this._anyListeners.slice();
            for (const i of r) i.apply(this, e)
        }
        super.emit.apply(this, e), this._pid && e.length && typeof e[e.length - 1] == "string" && (this._lastOffset = e[e.length - 1])
    }
    ack(e) {
        const r = this;
        let i = !1;
        return function(...a) {
            i || (i = !0, r.packet({
                type: Te.ACK,
                id: e,
                data: a
            }))
        }
    }
    onack(e) {
        const r = this.acks[e.id];
        typeof r == "function" && (delete this.acks[e.id], r.withError && e.data.unshift(null), r.apply(this, e.data))
    }
    onconnect(e, r) {
        this.id = e, this.recovered = r && this._pid === r, this._pid = r, this.connected = !0, this.emitBuffered(), this._drainQueue(!0), this.emitReserved("connect")
    }
    emitBuffered() {
        this.receiveBuffer.forEach(e => this.emitEvent(e)), this.receiveBuffer = [], this.sendBuffer.forEach(e => {
            this.notifyOutgoingListeners(e), this.packet(e)
        }), this.sendBuffer = []
    }
    ondisconnect() {
        this.destroy(), this.onclose("io server disconnect")
    }
    destroy() {
        this.subs && (this.subs.forEach(e => e()), this.subs = void 0), this.io._destroy(this)
    }
    disconnect() {
        return this.connected && this.packet({
            type: Te.DISCONNECT
        }), this.destroy(), this.connected && this.onclose("io client disconnect"), this
    }
    close() {
        return this.disconnect()
    }
    compress(e) {
        return this.flags.compress = e, this
    }
    get volatile() {
        return this.flags.volatile = !0, this
    }
    timeout(e) {
        return this.flags.timeout = e, this
    }
    onAny(e) {
        return this._anyListeners = this._anyListeners || [], this._anyListeners.push(e), this
    }
    prependAny(e) {
        return this._anyListeners = this._anyListeners || [], this._anyListeners.unshift(e), this
    }
    offAny(e) {
        if (!this._anyListeners) return this;
        if (e) {
            const r = this._anyListeners;
            for (let i = 0; i < r.length; i++)
                if (e === r[i]) return r.splice(i, 1), this
        } else this._anyListeners = [];
        return this
    }
    listenersAny() {
        return this._anyListeners || []
    }
    onAnyOutgoing(e) {
        return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.push(e), this
    }
    prependAnyOutgoing(e) {
        return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.unshift(e), this
    }
    offAnyOutgoing(e) {
        if (!this._anyOutgoingListeners) return this;
        if (e) {
            const r = this._anyOutgoingListeners;
            for (let i = 0; i < r.length; i++)
                if (e === r[i]) return r.splice(i, 1), this
        } else this._anyOutgoingListeners = [];
        return this
    }
    listenersAnyOutgoing() {
        return this._anyOutgoingListeners || []
    }
    notifyOutgoingListeners(e) {
        if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
            const r = this._anyOutgoingListeners.slice();
            for (const i of r) i.apply(this, e.data)
        }
    }
}

function ci(t) {
    t = t || {}, this.ms = t.min || 100, this.max = t.max || 1e4, this.factor = t.factor || 2, this.jitter = t.jitter > 0 && t.jitter <= 1 ? t.jitter : 0, this.attempts = 0
}
ci.prototype.duration = function() {
    var t = this.ms * Math.pow(this.factor, this.attempts++);
    if (this.jitter) {
        var e = Math.random(),
            r = Math.floor(e * this.jitter * t);
        t = (Math.floor(e * 10) & 1) == 0 ? t - r : t + r
    }
    return Math.min(t, this.max) | 0
};
ci.prototype.reset = function() {
    this.attempts = 0
};
ci.prototype.setMin = function(t) {
    this.ms = t
};
ci.prototype.setMax = function(t) {
    this.max = t
};
ci.prototype.setJitter = function(t) {
    this.jitter = t
};
class Zd extends et {
    constructor(e, r) {
        var i;
        super(), this.nsps = {}, this.subs = [], e && typeof e == "object" && (r = e, e = void 0), r = r || {}, r.path = r.path || "/socket.io", this.opts = r, Wl(this, r), this.reconnection(r.reconnection !== !1), this.reconnectionAttempts(r.reconnectionAttempts || 1 / 0), this.reconnectionDelay(r.reconnectionDelay || 1e3), this.reconnectionDelayMax(r.reconnectionDelayMax || 5e3), this.randomizationFactor((i = r.randomizationFactor) !== null && i !== void 0 ? i : .5), this.backoff = new ci({
            min: this.reconnectionDelay(),
            max: this.reconnectionDelayMax(),
            jitter: this.randomizationFactor()
        }), this.timeout(r.timeout == null ? 2e4 : r.timeout), this._readyState = "closed", this.uri = e;
        const a = r.parser || m_;
        this.encoder = new a.Encoder, this.decoder = new a.Decoder, this._autoConnect = r.autoConnect !== !1, this._autoConnect && this.open()
    }
    reconnection(e) {
        return arguments.length ? (this._reconnection = !!e, e || (this.skipReconnect = !0), this) : this._reconnection
    }
    reconnectionAttempts(e) {
        return e === void 0 ? this._reconnectionAttempts : (this._reconnectionAttempts = e, this)
    }
    reconnectionDelay(e) {
        var r;
        return e === void 0 ? this._reconnectionDelay : (this._reconnectionDelay = e, (r = this.backoff) === null || r === void 0 || r.setMin(e), this)
    }
    randomizationFactor(e) {
        var r;
        return e === void 0 ? this._randomizationFactor : (this._randomizationFactor = e, (r = this.backoff) === null || r === void 0 || r.setJitter(e), this)
    }
    reconnectionDelayMax(e) {
        var r;
        return e === void 0 ? this._reconnectionDelayMax : (this._reconnectionDelayMax = e, (r = this.backoff) === null || r === void 0 || r.setMax(e), this)
    }
    timeout(e) {
        return arguments.length ? (this._timeout = e, this) : this._timeout
    }
    maybeReconnectOnOpen() {
        !this._reconnecting && this._reconnection && this.backoff.attempts === 0 && this.reconnect()
    }
    open(e) {
        if (~this._readyState.indexOf("open")) return this;
        this.engine = new s_(this.uri, this.opts);
        const r = this.engine,
            i = this;
        this._readyState = "opening", this.skipReconnect = !1;
        const a = fn(r, "open", function() {
                i.onopen(), e && e()
            }),
            l = d => {
                this.cleanup(), this._readyState = "closed", this.emitReserved("error", d), e ? e(d) : this.maybeReconnectOnOpen()
            },
            c = fn(r, "error", l);
        if (this._timeout !== !1) {
            const d = this._timeout,
                h = this.setTimeoutFn(() => {
                    a(), l(new Error("timeout")), r.close()
                }, d);
            this.opts.autoUnref && h.unref(), this.subs.push(() => {
                this.clearTimeoutFn(h)
            })
        }
        return this.subs.push(a), this.subs.push(c), this
    }
    connect(e) {
        return this.open(e)
    }
    onopen() {
        this.cleanup(), this._readyState = "open", this.emitReserved("open");
        const e = this.engine;
        this.subs.push(fn(e, "ping", this.onping.bind(this)), fn(e, "data", this.ondata.bind(this)), fn(e, "error", this.onerror.bind(this)), fn(e, "close", this.onclose.bind(this)), fn(this.decoder, "decoded", this.ondecoded.bind(this)))
    }
    onping() {
        this.emitReserved("ping")
    }
    ondata(e) {
        try {
            this.decoder.add(e)
        } catch (r) {
            this.onclose("parse error", r)
        }
    }
    ondecoded(e) {
        ql(() => {
            this.emitReserved("packet", e)
        }, this.setTimeoutFn)
    }
    onerror(e) {
        this.emitReserved("error", e)
    }
    socket(e, r) {
        let i = this.nsps[e];
        return i ? this._autoConnect && !i.active && i.connect() : (i = new jw(this, e, r), this.nsps[e] = i), i
    }
    _destroy(e) {
        const r = Object.keys(this.nsps);
        for (const i of r)
            if (this.nsps[i].active) return;
        this._close()
    }
    _packet(e) {
        const r = this.encoder.encode(e);
        for (let i = 0; i < r.length; i++) this.engine.write(r[i], e.options)
    }
    cleanup() {
        this.subs.forEach(e => e()), this.subs.length = 0, this.decoder.destroy()
    }
    _close() {
        this.skipReconnect = !0, this._reconnecting = !1, this.onclose("forced close")
    }
    disconnect() {
        return this._close()
    }
    onclose(e, r) {
        var i;
        this.cleanup(), (i = this.engine) === null || i === void 0 || i.close(), this.backoff.reset(), this._readyState = "closed", this.emitReserved("close", e, r), this._reconnection && !this.skipReconnect && this.reconnect()
    }
    reconnect() {
        if (this._reconnecting || this.skipReconnect) return this;
        const e = this;
        if (this.backoff.attempts >= this._reconnectionAttempts) this.backoff.reset(), this.emitReserved("reconnect_failed"), this._reconnecting = !1;
        else {
            const r = this.backoff.duration();
            this._reconnecting = !0;
            const i = this.setTimeoutFn(() => {
                e.skipReconnect || (this.emitReserved("reconnect_attempt", e.backoff.attempts), !e.skipReconnect && e.open(a => {
                    a ? (e._reconnecting = !1, e.reconnect(), this.emitReserved("reconnect_error", a)) : e.onreconnect()
                }))
            }, r);
            this.opts.autoUnref && i.unref(), this.subs.push(() => {
                this.clearTimeoutFn(i)
            })
        }
    }
    onreconnect() {
        const e = this.backoff.attempts;
        this._reconnecting = !1, this.backoff.reset(), this.emitReserved("reconnect", e)
    }
}
const no = {};

function vl(t, e) {
    typeof t == "object" && (e = t, t = void 0), e = e || {};
    const r = i_(t, e.path || "/socket.io"),
        i = r.source,
        a = r.id,
        l = r.path,
        c = no[a] && l in no[a].nsps,
        d = e.forceNew || e["force new connection"] || e.multiplex === !1 || c;
    let h;
    return d ? h = new Zd(i, e) : (no[a] || (no[a] = new Zd(i, e)), h = no[a]), r.query && !e.query && (e.query = r.queryKey), h.socket(r.path, e)
}
Object.assign(vl, {
    Manager: Zd,
    Socket: jw,
    io: vl,
    connect: vl
});

function ky(t, e) {
    var r;
    const i = vl(t.serverUrl, {
        path: t.mountPath,
        transports: t.transports,
        query: {
            app_id: t.appId,
            token: (r = t.token) !== null && r !== void 0 ? r : Rl()
        }
    });
    return i.on("connect", async () => {
        var a;
        return console.log("connect", i.id), (a = e.connect) === null || a === void 0 ? void 0 : a.call(e)
    }), i.on("update_model", async a => {
        var l;
        return (l = e.update_model) === null || l === void 0 ? void 0 : l.call(e, a)
    }), i.on("error", async a => {
        var l;
        return (l = e.error) === null || l === void 0 ? void 0 : l.call(e, a)
    }), i.on("connect_error", async a => {
        var l;
        return console.error("connect_error", a), (l = e.error) === null || l === void 0 ? void 0 : l.call(e, a)
    }), i
}

function y_({
    config: t
}) {
    let e = { ...t
    };
    const r = {},
        i = {
            connect: async () => {
                const k = [];
                Object.keys(r).forEach(S => {
                    h(S);
                    const b = y(S);
                    b == null || b.forEach(({
                        connect: x
                    }) => {
                        const R = async () => x == null ? void 0 : x();
                        k.push(R())
                    })
                }), await Promise.all(k)
            },
            update_model: async k => {
                const b = y(k.room).map(x => {
                    var R;
                    return (R = x.update_model) === null || R === void 0 ? void 0 : R.call(x, k)
                });
                await Promise.all(b)
            },
            error: async k => {
                console.error("error", k);
                const S = Object.values(r).flat().map(b => {
                    var x;
                    return (x = b.error) === null || x === void 0 ? void 0 : x.call(b, k)
                });
                await Promise.all(S)
            }
        };
    let a = ky(t, i);

    function l() {
        c()
    }

    function c() {
        a && a.disconnect()
    }

    function d(k) {
        l(), e = { ...e,
            ...k
        }, a = ky(e, i)
    }

    function h(k) {
        a.emit("join", k)
    }

    function m(k) {
        a.emit("leave", k)
    }
    async function g(k, S) {
        var b;
        const x = JSON.stringify(S);
        return (b = i.update_model) === null || b === void 0 ? void 0 : b.call(i, {
            room: k,
            data: x
        })
    }

    function y(k) {
        return r[k]
    }
    return {
        socket: a,
        subscribeToRoom: (k, S) => (r[k] || (h(k), r[k] = []), r[k].push(S), () => {
            var b, x;
            r[k] = (x = (b = r[k]) === null || b === void 0 ? void 0 : b.filter(R => R !== S)) !== null && x !== void 0 ? x : [], r[k].length === 0 && m(k)
        }),
        updateConfig: d,
        updateModel: g,
        disconnect: c
    }
}
const ro = typeof window < "u" ? window : {
    base44SharedInstances: {}
};

function v_(t, e) {
    return ro.base44SharedInstances || (ro.base44SharedInstances = {}), ro.base44SharedInstances[t] || (ro.base44SharedInstances[t] = {
        instance: e()
    }), ro.base44SharedInstances[t].instance
}
const w_ = "__user_heartbeat_event__",
    x_ = "__initialization_event__",
    S_ = "__session_duration_event__",
    Ey = "analytics-enable",
    Ty = "base44_analytics_session_id",
    b_ = {
        enabled: !0,
        maxQueueSize: 1e3,
        throttleTime: 1e3,
        batchSize: 30,
        heartBeatInterval: 60 * 1e3
    },
    k_ = "analytics",
    Ie = v_(k_, () => ({
        requestsQueue: [],
        isProcessing: !1,
        isHeartBeatProcessing: !1,
        wasInitializationTracked: !1,
        sessionContext: null,
        sessionStartTime: null,
        config: { ...b_,
            ...N_()
        }
    })),
    E_ = ({
        axiosClient: t,
        serverUrl: e,
        appId: r,
        userAuthModule: i
    }) => {
        var a;
        const {
            maxQueueSize: l,
            throttleTime: c,
            batchSize: d
        } = Ie.config;
        if (!(!((a = Ie.config) === null || a === void 0) && a.enabled)) return {
            track: () => {},
            cleanup: () => {}
        };
        let h;
        const m = `${e}/api/apps/${r}/analytics/track/batch`,
            g = async M => {
                await t.request({
                    method: "POST",
                    url: `/apps/${r}/analytics/track/batch`,
                    data: {
                        events: M
                    }
                })
            },
            y = M => {
                try {
                    const L = JSON.stringify({
                            events: M
                        }),
                        B = new Blob([L], {
                            type: "application/json"
                        });
                    return typeof navigator > "u" || L.length > 6e4 || !navigator.sendBeacon(m, B)
                } catch {
                    return !1
                }
            },
            w = async (M, L = {}) => {
                if (M.length === 0) return;
                const B = await A_(i),
                    K = M.map(R_(B));
                try {
                    (!L.isBeacon || !y(K)) && await g(K)
                } catch {}
            },
            k = () => {
                Py(w, {
                    throttleTime: c,
                    batchSize: d
                })
            },
            S = M => {
                if (Ie.requestsQueue.length >= l) return;
                const L = __();
                Ie.requestsQueue.push({ ...M,
                    ...L
                }), k()
            },
            b = () => {
                Py(w, {
                    throttleTime: c,
                    batchSize: d
                }), h = _y(S), C_()
            },
            x = () => {
                Cy(), h == null || h(), P_(S);
                const M = Ie.requestsQueue.splice(0);
                w(M, {
                    isBeacon: !0
                })
            },
            R = () => {
                typeof window > "u" || (document.visibilityState === "hidden" ? x() : document.visibilityState === "visible" && b())
            },
            V = () => {
                Cy(), h == null || h(), typeof window < "u" && window.removeEventListener("visibilitychange", R)
            };
        return k(), h = _y(S), T_(S), typeof window < "u" && window.addEventListener("visibilitychange", R), {
            track: S,
            cleanup: V
        }
    };

function Cy() {
    Ie.isProcessing = !1
}
async function Py(t, e) {
    if (Ie.isProcessing) return;
    Ie.isProcessing = !0;
    const {
        throttleTime: r = 1e3,
        batchSize: i = 30
    } = e ? ? {};
    for (; Ie.isProcessing && Ie.requestsQueue.length > 0;) {
        const a = Ie.requestsQueue.splice(0, i);
        a.length && await t(a), await new Promise(l => setTimeout(l, r))
    }
    Ie.isProcessing = !1
}

function _y(t) {
    var e;
    if (Ie.isHeartBeatProcessing || ((e = Ie.config.heartBeatInterval) !== null && e !== void 0 ? e : 0) < 10) return () => {};
    Ie.isHeartBeatProcessing = !0;
    const r = setInterval(() => {
        t({
            eventName: w_
        })
    }, Ie.config.heartBeatInterval);
    return () => {
        clearInterval(r), Ie.isHeartBeatProcessing = !1
    }
}

function T_(t) {
    typeof window > "u" || Ie.wasInitializationTracked || (Ie.wasInitializationTracked = !0, t({
        eventName: x_,
        properties: {
            referrer: document == null ? void 0 : document.referrer
        }
    }))
}

function C_() {
    typeof window > "u" || Ie.sessionStartTime !== null || (Ie.sessionStartTime = new Date().toISOString())
}

function P_(t) {
    if (typeof window > "u" || Ie.sessionStartTime === null) return;
    const e = new Date().getTime() - new Date(Ie.sessionStartTime).getTime();
    Ie.sessionStartTime = null, t({
        eventName: S_,
        properties: {
            sessionDuration: e
        }
    })
}

function __() {
    return {
        timestamp: new Date().toISOString(),
        pageUrl: typeof window < "u" ? window.location.pathname : null
    }
}

function R_(t) {
    return e => ({
        event_name: e.eventName,
        properties: e.properties,
        timestamp: e.timestamp,
        page_url: e.pageUrl,
        ...t
    })
}
let cd = null;
async function A_(t) {
    if (!Ie.sessionContext) {
        if (!cd) {
            const e = O_();
            cd = t.me().then(r => ({
                user_id: r.id,
                session_id: e
            })).catch(() => ({
                user_id: null,
                session_id: e
            }))
        }
        Ie.sessionContext = await cd
    }
    return Ie.sessionContext
}

function N_() {
    if (typeof window > "u") return;
    const e = new URLSearchParams(window.location.search).get(Ey);
    if (e == null || !e.length) return;
    const r = new URLSearchParams(window.location.search);
    r.delete(Ey);
    const i = window.location.pathname + (r.toString() ? "?" + r.toString() : "");
    return window.history.replaceState({}, "", i), {
        enabled: e === "true"
    }
}

function O_() {
    if (typeof window > "u") return id();
    try {
        const t = localStorage.getItem(Ty);
        if (!t) {
            const e = id();
            return localStorage.setItem(Ty, e), e
        }
        return t
    } catch {
        return id()
    }
}

function L_(t) {
    var e, r;
    const {
        serverUrl: i = "https://base44.app",
        appId: a,
        token: l,
        serviceToken: c,
        requiresAuth: d = !1,
        appBaseUrl: h,
        options: m,
        functionsVersion: g,
        headers: y
    } = t, w = typeof h == "string" ? h : "", k = {
        serverUrl: i,
        mountPath: "/ws-user-apps/socket.io/",
        transports: ["websocket"],
        appId: a,
        token: l
    };
    let S = null;
    const b = () => (S || (S = y_({
            config: k
        })), S),
        x = { ...y,
            "X-App-Id": String(a)
        },
        R = g ? { ...x,
            "Base44-Functions-Version": g
        } : x,
        V = ao({
            baseURL: `${i}/api`,
            headers: x,
            token: l,
            onError: m == null ? void 0 : m.onError
        }),
        M = ao({
            baseURL: `${i}/api`,
            headers: R,
            token: l,
            interceptResponses: !1,
            onError: m == null ? void 0 : m.onError
        }),
        L = { ...x,
            ...l ? {
                "on-behalf-of": `Bearer ${l}`
            } : {}
        },
        B = ao({
            baseURL: `${i}/api`,
            headers: L,
            token: c,
            onError: m == null ? void 0 : m.onError
        }),
        K = ao({
            baseURL: `${i}/api`,
            headers: R,
            token: c,
            interceptResponses: !1
        }),
        G = wP(V, M, a, {
            appBaseUrl: w
        }),
        j = {
            entities: hy({
                axios: V,
                appId: a,
                getSocket: b
            }),
            integrations: py(V, a),
            connectors: bP(V, a),
            auth: G,
            functions: my(M, a, {
                getAuthHeaders: () => {
                    const me = {},
                        Ae = l || Rl();
                    return Ae && (me.Authorization = `Bearer ${Ae}`), me
                },
                baseURL: (e = M.defaults) === null || e === void 0 ? void 0 : e.baseURL
            }),
            agents: gy({
                axios: V,
                getSocket: b,
                appId: a,
                serverUrl: i,
                token: l
            }),
            appLogs: yy(V, a),
            users: EP(V, a),
            analytics: E_({
                axiosClient: V,
                serverUrl: i,
                appId: a,
                userAuthModule: G
            }),
            cleanup: () => {
                j.analytics.cleanup(), S && S.disconnect()
            }
        },
        J = {
            entities: hy({
                axios: B,
                appId: a,
                getSocket: b
            }),
            integrations: py(B, a),
            sso: xP(B, a),
            connectors: SP(B, a),
            functions: my(K, a, {
                getAuthHeaders: () => {
                    const me = {};
                    return c && (me.Authorization = `Bearer ${c}`), me
                },
                baseURL: (r = K.defaults) === null || r === void 0 ? void 0 : r.baseURL
            }),
            agents: gy({
                axios: B,
                getSocket: b,
                appId: a,
                serverUrl: i,
                token: l
            }),
            appLogs: yy(B, a),
            cleanup: () => {
                S && S.disconnect()
            }
        };
    if (typeof window < "u") {
        const me = l || Rl();
        me && j.auth.setToken(me)
    }
    return d && typeof window < "u" && setTimeout(async () => {
        try {
            await j.auth.isAuthenticated() || j.auth.redirectToLogin(window.location.href)
        } catch (me) {
            console.error("Authentication check failed:", me), j.auth.redirectToLogin(window.location.href)
        }
    }, 0), { ...j,
        setToken(me) {
            j.auth.setToken(me), S && S.updateConfig({
                token: me
            }), k.token = me
        },
        getConfig() {
            return {
                serverUrl: i,
                appId: a,
                requiresAuth: d
            }
        },
        get asServiceRole() {
            if (!c) throw new Error("Service token is required to use asServiceRole. Please provide a serviceToken when creating the client.");
            return J
        }
    }
}
const Iw = typeof window > "u",
    M_ = Iw ? {
        localStorage: new Map
    } : window,
    mo = M_.localStorage,
    D_ = t => t.replace(/([A-Z])/g, "_$1").toLowerCase(),
    Us = (t, {
        defaultValue: e = void 0,
        removeFromUrl: r = !1
    } = {}) => {
        if (Iw) return e;
        const i = `base44_${D_(t)}`,
            a = new URLSearchParams(window.location.search),
            l = a.get(t);
        if (r) {
            a.delete(t);
            const d = `${window.location.pathname}${a.toString()?`?${a.toString()}`:""}${window.location.hash}`;
            window.history.replaceState({}, document.title, d)
        }
        if (l) return mo.setItem(i, l), l;
        if (e) return mo.setItem(i, e), e;
        const c = mo.getItem(i);
        return c || null
    },
    j_ = () => (Us("clear_access_token") === "true" && (mo.removeItem("base44_access_token"), mo.removeItem("token")), {
        appId: Us("app_id", {
            defaultValue: "69c2ad8aac8950f4c01d3df3"
        }),
        token: Us("access_token", {
            removeFromUrl: !0
        }),
        fromUrl: Us("from_url", {
            defaultValue: window.location.href
        }),
        functionsVersion: Us("functions_version", {
            defaultValue: "prod"
        }),
        appBaseUrl: Us("app_base_url", {
            defaultValue: void 0
        })
    }),
    uo = { ...j_()
    },
    {
        appId: I_,
        token: F_,
        functionsVersion: V_,
        appBaseUrl: B_
    } = uo,
    Jr = L_({
        appId: I_,
        token: F_,
        functionsVersion: V_,
        serverUrl: "",
        requiresAuth: !1,
        appBaseUrl: B_
    });

function U_({}) {
    var a;
    const e = ew().pathname.substring(1),
        {
            data: r,
            isFetched: i
        } = HE({
            queryKey: ["user"],
            queryFn: async () => {
                try {
                    return {
                        user: await Jr.auth.me(),
                        isAuthenticated: !0
                    }
                } catch {
                    return {
                        user: null,
                        isAuthenticated: !1
                    }
                }
            }
        });
    return T.jsx("div", {
        className: "min-h-screen flex items-center justify-center p-6 bg-slate-50",
        children: T.jsx("div", {
            className: "max-w-md w-full",
            children: T.jsxs("div", {
                className: "text-center space-y-6",
                children: [T.jsxs("div", {
                    className: "space-y-2",
                    children: [T.jsx("h1", {
                        className: "text-7xl font-light text-slate-300",
                        children: "404"
                    }), T.jsx("div", {
                        className: "h-0.5 w-16 bg-slate-200 mx-auto"
                    })]
                }), T.jsxs("div", {
                    className: "space-y-3",
                    children: [T.jsx("h2", {
                        className: "text-2xl font-medium text-slate-800",
                        children: "Page Not Found"
                    }), T.jsxs("p", {
                        className: "text-slate-600 leading-relaxed",
                        children: ["The page ", T.jsxs("span", {
                            className: "font-medium text-slate-700",
                            children: ['"', e, '"']
                        }), " could not be found in this application."]
                    })]
                }), i && r.isAuthenticated && ((a = r.user) == null ? void 0 : a.role) === "admin" && T.jsx("div", {
                    className: "mt-8 p-4 bg-slate-100 rounded-lg border border-slate-200",
                    children: T.jsxs("div", {
                        className: "flex items-start space-x-3",
                        children: [T.jsx("div", {
                            className: "flex-shrink-0 w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center mt-0.5",
                            children: T.jsx("div", {
                                className: "w-2 h-2 rounded-full bg-orange-400"
                            })
                        }), T.jsxs("div", {
                            className: "text-left space-y-1",
                            children: [T.jsx("p", {
                                className: "text-sm font-medium text-slate-700",
                                children: "Admin Note"
                            }), T.jsx("p", {
                                className: "text-sm text-slate-600 leading-relaxed",
                                children: "This could mean that the AI hasn't implemented this page yet. Ask it to implement it in the chat."
                            })]
                        })]
                    })
                }), T.jsx("div", {
                    className: "pt-6",
                    children: T.jsxs("button", {
                        onClick: () => window.location.href = "/",
                        className: "inline-flex items-center px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:border-slate-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500",
                        children: [T.jsx("svg", {
                            className: "w-4 h-4 mr-2",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: T.jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                            })
                        }), "Go Home"]
                    })
                })]
            })
        })
    })
}
const Fw = D.createContext(),
    z_ = ({
        children: t
    }) => {
        const [e, r] = D.useState(null), [i, a] = D.useState(!1), [l, c] = D.useState(!0), [d, h] = D.useState(!0), [m, g] = D.useState(null), [y, w] = D.useState(null);
        D.useEffect(() => {
            k()
        }, []);
        const k = async () => {
                var R, V;
                try {
                    h(!0), g(null);
                    const M = ao({
                        baseURL: "/api/apps/public",
                        headers: {
                            "X-App-Id": uo.appId
                        },
                        token: uo.token,
                        interceptResponses: !0
                    });
                    try {
                        const L = await M.get(`/prod/public-settings/by-id/${uo.appId}`);
                        w(L), uo.token ? await S() : (c(!1), a(!1)), h(!1)
                    } catch (L) {
                        if (console.error("App state check failed:", L), L.status === 403 && ((V = (R = L.data) == null ? void 0 : R.extra_data) != null && V.reason)) {
                            const B = L.data.extra_data.reason;
                            g(B === "auth_required" ? {
                                type: "auth_required",
                                message: "Authentication required"
                            } : B === "user_not_registered" ? {
                                type: "user_not_registered",
                                message: "User not registered for this app"
                            } : {
                                type: B,
                                message: L.message
                            })
                        } else g({
                            type: "unknown",
                            message: L.message || "Failed to load app"
                        });
                        h(!1), c(!1)
                    }
                } catch (M) {
                    console.error("Unexpected error:", M), g({
                        type: "unknown",
                        message: M.message || "An unexpected error occurred"
                    }), h(!1), c(!1)
                }
            },
            S = async () => {
                try {
                    c(!0);
                    const R = await Jr.auth.me();
                    r(R), a(!0), c(!1)
                } catch (R) {
                    console.error("User auth check failed:", R), c(!1), a(!1), (R.status === 401 || R.status === 403) && g({
                        type: "auth_required",
                        message: "Authentication required"
                    })
                }
            },
            b = (R = !0) => {
                r(null), a(!1), R ? Jr.auth.logout(window.location.href) : Jr.auth.logout()
            },
            x = () => {
                Jr.auth.redirectToLogin(window.location.href)
            };
        return T.jsx(Fw.Provider, {
            value: {
                user: e,
                isAuthenticated: i,
                isLoadingAuth: l,
                isLoadingPublicSettings: d,
                authError: m,
                appPublicSettings: y,
                logout: b,
                navigateToLogin: x,
                checkAppState: k
            },
            children: t
        })
    },
    $_ = () => {
        const t = D.useContext(Fw);
        if (!t) throw new Error("useAuth must be used within an AuthProvider");
        return t
    },
    H_ = () => T.jsx("div", {
        className: "flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-white to-slate-50",
        children: T.jsx("div", {
            className: "max-w-md w-full p-8 bg-white rounded-lg shadow-lg border border-slate-100",
            children: T.jsxs("div", {
                className: "text-center",
                children: [T.jsx("div", {
                    className: "inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-orange-100",
                    children: T.jsx("svg", {
                        className: "w-8 h-8 text-orange-600",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: T.jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "2",
                            d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        })
                    })
                }), T.jsx("h1", {
                    className: "text-3xl font-bold text-slate-900 mb-4",
                    children: "Access Restricted"
                }), T.jsx("p", {
                    className: "text-slate-600 mb-8",
                    children: "You are not registered to use this application. Please contact the app administrator to request access."
                }), T.jsxs("div", {
                    className: "p-4 bg-slate-50 rounded-md text-sm text-slate-600",
                    children: [T.jsx("p", {
                        children: "If you believe this is an error, you can:"
                    }), T.jsxs("ul", {
                        className: "list-disc list-inside mt-2 space-y-1",
                        children: [T.jsx("li", {
                            children: "Verify you are logged in with the correct account"
                        }), T.jsx("li", {
                            children: "Contact the app administrator for access"
                        }), T.jsx("li", {
                            children: "Try logging out and back in again"
                        })]
                    })]
                })]
            })
        })
    }),
    If = D.createContext({});

function di(t) {
    const e = D.useRef(null);
    return e.current === null && (e.current = t()), e.current
}
const Kl = D.createContext(null),
    Ql = D.createContext({
        transformPagePoint: t => t,
        isStatic: !1,
        reducedMotion: "never"
    });
class q_ extends D.Component {
    getSnapshotBeforeUpdate(e) {
        const r = this.props.childRef.current;
        if (r && e.isPresent && !this.props.isPresent) {
            const i = this.props.sizeRef.current;
            i.height = r.offsetHeight || 0, i.width = r.offsetWidth || 0, i.top = r.offsetTop, i.left = r.offsetLeft
        }
        return null
    }
    componentDidUpdate() {}
    render() {
        return this.props.children
    }
}

function W_({
    children: t,
    isPresent: e
}) {
    const r = D.useId(),
        i = D.useRef(null),
        a = D.useRef({
            width: 0,
            height: 0,
            top: 0,
            left: 0
        }),
        {
            nonce: l
        } = D.useContext(Ql);
    return D.useInsertionEffect(() => {
        const {
            width: c,
            height: d,
            top: h,
            left: m
        } = a.current;
        if (e || !i.current || !c || !d) return;
        i.current.dataset.motionPopId = r;
        const g = document.createElement("style");
        return l && (g.nonce = l), document.head.appendChild(g), g.sheet && g.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${c}px !important;
            height: ${d}px !important;
            top: ${h}px !important;
            left: ${m}px !important;
          }
        `), () => {
            document.head.removeChild(g)
        }
    }, [e]), T.jsx(q_, {
        isPresent: e,
        childRef: i,
        sizeRef: a,
        children: D.cloneElement(t, {
            ref: i
        })
    })
}
const K_ = ({
    children: t,
    initial: e,
    isPresent: r,
    onExitComplete: i,
    custom: a,
    presenceAffectsLayout: l,
    mode: c
}) => {
    const d = di(Q_),
        h = D.useId(),
        m = D.useCallback(y => {
            d.set(y, !0);
            for (const w of d.values())
                if (!w) return;
            i && i()
        }, [d, i]),
        g = D.useMemo(() => ({
            id: h,
            initial: e,
            isPresent: r,
            custom: a,
            onExitComplete: m,
            register: y => (d.set(y, !1), () => d.delete(y))
        }), l ? [Math.random(), m] : [r, m]);
    return D.useMemo(() => {
        d.forEach((y, w) => d.set(w, !1))
    }, [r]), D.useEffect(() => {
        !r && !d.size && i && i()
    }, [r]), c === "popLayout" && (t = T.jsx(W_, {
        isPresent: r,
        children: t
    })), T.jsx(Kl.Provider, {
        value: g,
        children: t
    })
};

function Q_() {
    return new Map
}

function Vw(t = !0) {
    const e = D.useContext(Kl);
    if (e === null) return [!0, null];
    const {
        isPresent: r,
        onExitComplete: i,
        register: a
    } = e, l = D.useId();
    D.useEffect(() => {
        t && a(l)
    }, [t]);
    const c = D.useCallback(() => t && i && i(l), [l, i, t]);
    return !r && i ? [!1, c] : [!0]
}
const ol = t => t.key || "";

function Ry(t) {
    const e = [];
    return D.Children.forEach(t, r => {
        D.isValidElement(r) && e.push(r)
    }), e
}
const Ff = typeof window < "u",
    Gl = Ff ? D.useLayoutEffect : D.useEffect,
    G_ = ({
        children: t,
        custom: e,
        initial: r = !0,
        onExitComplete: i,
        presenceAffectsLayout: a = !0,
        mode: l = "sync",
        propagate: c = !1
    }) => {
        const [d, h] = Vw(c), m = D.useMemo(() => Ry(t), [t]), g = c && !d ? [] : m.map(ol), y = D.useRef(!0), w = D.useRef(m), k = di(() => new Map), [S, b] = D.useState(m), [x, R] = D.useState(m);
        Gl(() => {
            y.current = !1, w.current = m;
            for (let L = 0; L < x.length; L++) {
                const B = ol(x[L]);
                g.includes(B) ? k.delete(B) : k.get(B) !== !0 && k.set(B, !1)
            }
        }, [x, g.length, g.join("-")]);
        const V = [];
        if (m !== S) {
            let L = [...m];
            for (let B = 0; B < x.length; B++) {
                const K = x[B],
                    G = ol(K);
                g.includes(G) || (L.splice(B, 0, K), V.push(K))
            }
            l === "wait" && V.length && (L = V), R(Ry(L)), b(m);
            return
        }
        const {
            forceRender: M
        } = D.useContext(If);
        return T.jsx(T.Fragment, {
            children: x.map(L => {
                const B = ol(L),
                    K = c && !d ? !1 : m === x || g.includes(B),
                    G = () => {
                        if (k.has(B)) k.set(B, !0);
                        else return;
                        let j = !0;
                        k.forEach(J => {
                            J || (j = !1)
                        }), j && (M == null || M(), R(w.current), c && (h == null || h()), i && i())
                    };
                return T.jsx(K_, {
                    isPresent: K,
                    initial: !y.current || r ? void 0 : !1,
                    custom: K ? void 0 : e,
                    presenceAffectsLayout: a,
                    mode: l,
                    onExitComplete: K ? void 0 : G,
                    children: L
                }, B)
            })
        })
    },
    Ct = t => t;
let Y_ = Ct,
    Bw = Ct;

function Vf(t) {
    let e;
    return () => (e === void 0 && (e = t()), e)
}
const hs = (t, e, r) => {
        const i = e - t;
        return i === 0 ? 1 : (r - t) / i
    },
    $n = t => t * 1e3,
    Hn = t => t / 1e3,
    X_ = {
        useManualTiming: !1
    };

function J_(t) {
    let e = new Set,
        r = new Set,
        i = !1,
        a = !1;
    const l = new WeakSet;
    let c = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    };

    function d(m) {
        l.has(m) && (h.schedule(m), t()), m(c)
    }
    const h = {
        schedule: (m, g = !1, y = !1) => {
            const k = y && i ? e : r;
            return g && l.add(m), k.has(m) || k.add(m), m
        },
        cancel: m => {
            r.delete(m), l.delete(m)
        },
        process: m => {
            if (c = m, i) {
                a = !0;
                return
            }
            i = !0, [e, r] = [r, e], e.forEach(d), e.clear(), i = !1, a && (a = !1, h.process(m))
        }
    };
    return h
}
const al = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"],
    Z_ = 40;

function Uw(t, e) {
    let r = !1,
        i = !0;
    const a = {
            delta: 0,
            timestamp: 0,
            isProcessing: !1
        },
        l = () => r = !0,
        c = al.reduce((R, V) => (R[V] = J_(l), R), {}),
        {
            read: d,
            resolveKeyframes: h,
            update: m,
            preRender: g,
            render: y,
            postRender: w
        } = c,
        k = () => {
            const R = performance.now();
            r = !1, a.delta = i ? 1e3 / 60 : Math.max(Math.min(R - a.timestamp, Z_), 1), a.timestamp = R, a.isProcessing = !0, d.process(a), h.process(a), m.process(a), g.process(a), y.process(a), w.process(a), a.isProcessing = !1, r && e && (i = !1, t(k))
        },
        S = () => {
            r = !0, i = !0, a.isProcessing || t(k)
        };
    return {
        schedule: al.reduce((R, V) => {
            const M = c[V];
            return R[V] = (L, B = !1, K = !1) => (r || S(), M.schedule(L, B, K)), R
        }, {}),
        cancel: R => {
            for (let V = 0; V < al.length; V++) c[al[V]].cancel(R)
        },
        state: a,
        steps: c
    }
}
const {
    schedule: Le,
    cancel: hn,
    state: lt,
    steps: dd
} = Uw(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Ct, !0), zw = D.createContext({
    strict: !1
}), Ay = {
    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"]
}, ai = {};
for (const t in Ay) ai[t] = {
    isEnabled: e => Ay[t].some(r => !!e[r])
};

function eR(t) {
    for (const e in t) ai[e] = { ...ai[e],
        ...t[e]
    }
}
const tR = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);

function Al(t) {
    return t.startsWith("while") || t.startsWith("drag") && t !== "draggable" || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || tR.has(t)
}
let $w = t => !Al(t);

function nR(t) {
    t && ($w = e => e.startsWith("on") ? !Al(e) : t(e))
}
try {
    nR(require("@emotion/is-prop-valid").default)
} catch {}

function rR(t, e, r) {
    const i = {};
    for (const a in t) a === "values" && typeof t.values == "object" || ($w(a) || r === !0 && Al(a) || !e && !Al(a) || t.draggable && a.startsWith("onDrag")) && (i[a] = t[a]);
    return i
}

function sR(t) {
    if (typeof Proxy > "u") return t;
    const e = new Map,
        r = (...i) => t(...i);
    return new Proxy(r, {
        get: (i, a) => a === "create" ? t : (e.has(a) || e.set(a, t(a)), e.get(a))
    })
}
const Yl = D.createContext({});

function Eo(t) {
    return typeof t == "string" || Array.isArray(t)
}

function Xl(t) {
    return t !== null && typeof t == "object" && typeof t.start == "function"
}
const Bf = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
    Uf = ["initial", ...Bf];

function Jl(t) {
    return Xl(t.animate) || Uf.some(e => Eo(t[e]))
}

function Hw(t) {
    return !!(Jl(t) || t.variants)
}

function iR(t, e) {
    if (Jl(t)) {
        const {
            initial: r,
            animate: i
        } = t;
        return {
            initial: r === !1 || Eo(r) ? r : void 0,
            animate: Eo(i) ? i : void 0
        }
    }
    return t.inherit !== !1 ? e : {}
}

function oR(t) {
    const {
        initial: e,
        animate: r
    } = iR(t, D.useContext(Yl));
    return D.useMemo(() => ({
        initial: e,
        animate: r
    }), [Ny(e), Ny(r)])
}

function Ny(t) {
    return Array.isArray(t) ? t.join(" ") : t
}
const aR = Symbol.for("motionComponentSymbol");

function zs(t) {
    return t && typeof t == "object" && Object.prototype.hasOwnProperty.call(t, "current")
}

function lR(t, e, r) {
    return D.useCallback(i => {
        i && t.onMount && t.onMount(i), e && (i ? e.mount(i) : e.unmount()), r && (typeof r == "function" ? r(i) : zs(r) && (r.current = i))
    }, [e])
}
const zf = t => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
    uR = "framerAppearId",
    qw = "data-" + zf(uR),
    {
        schedule: $f
    } = Uw(queueMicrotask, !1),
    Ww = D.createContext({});

function cR(t, e, r, i, a) {
    var l, c;
    const {
        visualElement: d
    } = D.useContext(Yl), h = D.useContext(zw), m = D.useContext(Kl), g = D.useContext(Ql).reducedMotion, y = D.useRef(null);
    i = i || h.renderer, !y.current && i && (y.current = i(t, {
        visualState: e,
        parent: d,
        props: r,
        presenceContext: m,
        blockInitialAnimation: m ? m.initial === !1 : !1,
        reducedMotionConfig: g
    }));
    const w = y.current,
        k = D.useContext(Ww);
    w && !w.projection && a && (w.type === "html" || w.type === "svg") && dR(y.current, r, a, k);
    const S = D.useRef(!1);
    D.useInsertionEffect(() => {
        w && S.current && w.update(r, m)
    });
    const b = r[qw],
        x = D.useRef(!!b && !(!((l = window.MotionHandoffIsComplete) === null || l === void 0) && l.call(window, b)) && ((c = window.MotionHasOptimisedAnimation) === null || c === void 0 ? void 0 : c.call(window, b)));
    return Gl(() => {
        w && (S.current = !0, window.MotionIsMounted = !0, w.updateFeatures(), $f.render(w.render), x.current && w.animationState && w.animationState.animateChanges())
    }), D.useEffect(() => {
        w && (!x.current && w.animationState && w.animationState.animateChanges(), x.current && (queueMicrotask(() => {
            var R;
            (R = window.MotionHandoffMarkAsComplete) === null || R === void 0 || R.call(window, b)
        }), x.current = !1))
    }), w
}

function dR(t, e, r, i) {
    const {
        layoutId: a,
        layout: l,
        drag: c,
        dragConstraints: d,
        layoutScroll: h,
        layoutRoot: m
    } = e;
    t.projection = new r(t.latestValues, e["data-framer-portal-id"] ? void 0 : Kw(t.parent)), t.projection.setOptions({
        layoutId: a,
        layout: l,
        alwaysMeasureLayout: !!c || d && zs(d),
        visualElement: t,
        animationType: typeof l == "string" ? l : "both",
        initialPromotionConfig: i,
        layoutScroll: h,
        layoutRoot: m
    })
}

function Kw(t) {
    if (t) return t.options.allowProjection !== !1 ? t.projection : Kw(t.parent)
}

function fR({
    preloadedFeatures: t,
    createVisualElement: e,
    useRender: r,
    useVisualState: i,
    Component: a
}) {
    var l, c;
    t && eR(t);

    function d(m, g) {
        let y;
        const w = { ...D.useContext(Ql),
                ...m,
                layoutId: hR(m)
            },
            {
                isStatic: k
            } = w,
            S = oR(m),
            b = i(m, k);
        if (!k && Ff) {
            pR();
            const x = mR(w);
            y = x.MeasureLayout, S.visualElement = cR(a, b, w, e, x.ProjectionNode)
        }
        return T.jsxs(Yl.Provider, {
            value: S,
            children: [y && S.visualElement ? T.jsx(y, {
                visualElement: S.visualElement,
                ...w
            }) : null, r(a, m, lR(b, S.visualElement, g), b, k, S.visualElement)]
        })
    }
    d.displayName = `motion.${typeof a=="string"?a:`create(${(c=(l=a.displayName)!==null&&l!==void 0?l:a.name)!==null&&c!==void 0?c:""})`}`;
    const h = D.forwardRef(d);
    return h[aR] = a, h
}

function hR({
    layoutId: t
}) {
    const e = D.useContext(If).id;
    return e && t !== void 0 ? e + "-" + t : t
}

function pR(t, e) {
    D.useContext(zw).strict
}

function mR(t) {
    const {
        drag: e,
        layout: r
    } = ai;
    if (!e && !r) return {};
    const i = { ...e,
        ...r
    };
    return {
        MeasureLayout: e != null && e.isEnabled(t) || r != null && r.isEnabled(t) ? i.MeasureLayout : void 0,
        ProjectionNode: i.ProjectionNode
    }
}
const gR = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

function Hf(t) {
    return typeof t != "string" || t.includes("-") ? !1 : !!(gR.indexOf(t) > -1 || /[A-Z]/u.test(t))
}

function Oy(t) {
    const e = [{}, {}];
    return t == null || t.values.forEach((r, i) => {
        e[0][i] = r.get(), e[1][i] = r.getVelocity()
    }), e
}

function qf(t, e, r, i) {
    if (typeof e == "function") {
        const [a, l] = Oy(i);
        e = e(r !== void 0 ? r : t.custom, a, l)
    }
    if (typeof e == "string" && (e = t.variants && t.variants[e]), typeof e == "function") {
        const [a, l] = Oy(i);
        e = e(r !== void 0 ? r : t.custom, a, l)
    }
    return e
}
const ef = t => Array.isArray(t),
    yR = t => !!(t && typeof t == "object" && t.mix && t.toValue),
    vR = t => ef(t) ? t[t.length - 1] || 0 : t,
    St = t => !!(t && t.getVelocity);

function wl(t) {
    const e = St(t) ? t.get() : t;
    return yR(e) ? e.toValue() : e
}

function wR({
    scrapeMotionValuesFromProps: t,
    createRenderState: e,
    onUpdate: r
}, i, a, l) {
    const c = {
        latestValues: xR(i, a, l, t),
        renderState: e()
    };
    return r && (c.onMount = d => r({
        props: i,
        current: d,
        ...c
    }), c.onUpdate = d => r(d)), c
}
const Qw = t => (e, r) => {
    const i = D.useContext(Yl),
        a = D.useContext(Kl),
        l = () => wR(t, e, i, a);
    return r ? l() : di(l)
};

function xR(t, e, r, i) {
    const a = {},
        l = i(t, {});
    for (const w in l) a[w] = wl(l[w]);
    let {
        initial: c,
        animate: d
    } = t;
    const h = Jl(t),
        m = Hw(t);
    e && m && !h && t.inherit !== !1 && (c === void 0 && (c = e.initial), d === void 0 && (d = e.animate));
    let g = r ? r.initial === !1 : !1;
    g = g || c === !1;
    const y = g ? d : c;
    if (y && typeof y != "boolean" && !Xl(y)) {
        const w = Array.isArray(y) ? y : [y];
        for (let k = 0; k < w.length; k++) {
            const S = qf(t, w[k]);
            if (S) {
                const {
                    transitionEnd: b,
                    transition: x,
                    ...R
                } = S;
                for (const V in R) {
                    let M = R[V];
                    if (Array.isArray(M)) {
                        const L = g ? M.length - 1 : 0;
                        M = M[L]
                    }
                    M !== null && (a[V] = M)
                }
                for (const V in b) a[V] = b[V]
            }
        }
    }
    return a
}
const fi = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
    ms = new Set(fi),
    Gw = t => e => typeof e == "string" && e.startsWith(t),
    Yw = Gw("--"),
    SR = Gw("var(--"),
    Wf = t => SR(t) ? bR.test(t.split("/*")[0].trim()) : !1,
    bR = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
    Xw = (t, e) => e && typeof t == "number" ? e.transform(t) : t,
    _n = (t, e, r) => r > e ? e : r < t ? t : r,
    hi = {
        test: t => typeof t == "number",
        parse: parseFloat,
        transform: t => t
    },
    To = { ...hi,
        transform: t => _n(0, 1, t)
    },
    ll = { ...hi,
        default: 1
    },
    Bo = t => ({
        test: e => typeof e == "string" && e.endsWith(t) && e.split(" ").length === 1,
        parse: parseFloat,
        transform: e => `${e}${t}`
    }),
    mr = Bo("deg"),
    Tn = Bo("%"),
    ce = Bo("px"),
    kR = Bo("vh"),
    ER = Bo("vw"),
    Ly = { ...Tn,
        parse: t => Tn.parse(t) / 100,
        transform: t => Tn.transform(t * 100)
    },
    TR = {
        borderWidth: ce,
        borderTopWidth: ce,
        borderRightWidth: ce,
        borderBottomWidth: ce,
        borderLeftWidth: ce,
        borderRadius: ce,
        radius: ce,
        borderTopLeftRadius: ce,
        borderTopRightRadius: ce,
        borderBottomRightRadius: ce,
        borderBottomLeftRadius: ce,
        width: ce,
        maxWidth: ce,
        height: ce,
        maxHeight: ce,
        top: ce,
        right: ce,
        bottom: ce,
        left: ce,
        padding: ce,
        paddingTop: ce,
        paddingRight: ce,
        paddingBottom: ce,
        paddingLeft: ce,
        margin: ce,
        marginTop: ce,
        marginRight: ce,
        marginBottom: ce,
        marginLeft: ce,
        backgroundPositionX: ce,
        backgroundPositionY: ce
    },
    CR = {
        rotate: mr,
        rotateX: mr,
        rotateY: mr,
        rotateZ: mr,
        scale: ll,
        scaleX: ll,
        scaleY: ll,
        scaleZ: ll,
        skew: mr,
        skewX: mr,
        skewY: mr,
        distance: ce,
        translateX: ce,
        translateY: ce,
        translateZ: ce,
        x: ce,
        y: ce,
        z: ce,
        perspective: ce,
        transformPerspective: ce,
        opacity: To,
        originX: Ly,
        originY: Ly,
        originZ: ce
    },
    My = { ...hi,
        transform: Math.round
    },
    Kf = { ...TR,
        ...CR,
        zIndex: My,
        size: ce,
        fillOpacity: To,
        strokeOpacity: To,
        numOctaves: My
    },
    PR = {
        x: "translateX",
        y: "translateY",
        z: "translateZ",
        transformPerspective: "perspective"
    },
    _R = fi.length;

function RR(t, e, r) {
    let i = "",
        a = !0;
    for (let l = 0; l < _R; l++) {
        const c = fi[l],
            d = t[c];
        if (d === void 0) continue;
        let h = !0;
        if (typeof d == "number" ? h = d === (c.startsWith("scale") ? 1 : 0) : h = parseFloat(d) === 0, !h || r) {
            const m = Xw(d, Kf[c]);
            if (!h) {
                a = !1;
                const g = PR[c] || c;
                i += `${g}(${m}) `
            }
            r && (e[c] = m)
        }
    }
    return i = i.trim(), r ? i = r(e, a ? "" : i) : a && (i = "none"), i
}

function Qf(t, e, r) {
    const {
        style: i,
        vars: a,
        transformOrigin: l
    } = t;
    let c = !1,
        d = !1;
    for (const h in e) {
        const m = e[h];
        if (ms.has(h)) {
            c = !0;
            continue
        } else if (Yw(h)) {
            a[h] = m;
            continue
        } else {
            const g = Xw(m, Kf[h]);
            h.startsWith("origin") ? (d = !0, l[h] = g) : i[h] = g
        }
    }
    if (e.transform || (c || r ? i.transform = RR(e, t.transform, r) : i.transform && (i.transform = "none")), d) {
        const {
            originX: h = "50%",
            originY: m = "50%",
            originZ: g = 0
        } = l;
        i.transformOrigin = `${h} ${m} ${g}`
    }
}
const AR = {
        offset: "stroke-dashoffset",
        array: "stroke-dasharray"
    },
    NR = {
        offset: "strokeDashoffset",
        array: "strokeDasharray"
    };

function OR(t, e, r = 1, i = 0, a = !0) {
    t.pathLength = 1;
    const l = a ? AR : NR;
    t[l.offset] = ce.transform(-i);
    const c = ce.transform(e),
        d = ce.transform(r);
    t[l.array] = `${c} ${d}`
}

function Dy(t, e, r) {
    return typeof t == "string" ? t : ce.transform(e + r * t)
}

function LR(t, e, r) {
    const i = Dy(e, t.x, t.width),
        a = Dy(r, t.y, t.height);
    return `${i} ${a}`
}

function Gf(t, {
    attrX: e,
    attrY: r,
    attrScale: i,
    originX: a,
    originY: l,
    pathLength: c,
    pathSpacing: d = 1,
    pathOffset: h = 0,
    ...m
}, g, y) {
    if (Qf(t, m, y), g) {
        t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
        return
    }
    t.attrs = t.style, t.style = {};
    const {
        attrs: w,
        style: k,
        dimensions: S
    } = t;
    w.transform && (S && (k.transform = w.transform), delete w.transform), S && (a !== void 0 || l !== void 0 || k.transform) && (k.transformOrigin = LR(S, a !== void 0 ? a : .5, l !== void 0 ? l : .5)), e !== void 0 && (w.x = e), r !== void 0 && (w.y = r), i !== void 0 && (w.scale = i), c !== void 0 && OR(w, c, d, h, !1)
}
const Yf = () => ({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {}
    }),
    Jw = () => ({ ...Yf(),
        attrs: {}
    }),
    Xf = t => typeof t == "string" && t.toLowerCase() === "svg";

function Zw(t, {
    style: e,
    vars: r
}, i, a) {
    Object.assign(t.style, e, a && a.getProjectionStyles(i));
    for (const l in r) t.style.setProperty(l, r[l])
}
const ex = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

function tx(t, e, r, i) {
    Zw(t, e, void 0, i);
    for (const a in e.attrs) t.setAttribute(ex.has(a) ? a : zf(a), e.attrs[a])
}
const Nl = {};

function MR(t) {
    Object.assign(Nl, t)
}

function nx(t, {
    layout: e,
    layoutId: r
}) {
    return ms.has(t) || t.startsWith("origin") || (e || r !== void 0) && (!!Nl[t] || t === "opacity")
}

function Jf(t, e, r) {
    var i;
    const {
        style: a
    } = t, l = {};
    for (const c in a)(St(a[c]) || e.style && St(e.style[c]) || nx(c, t) || ((i = r == null ? void 0 : r.getValue(c)) === null || i === void 0 ? void 0 : i.liveStyle) !== void 0) && (l[c] = a[c]);
    return l
}

function rx(t, e, r) {
    const i = Jf(t, e, r);
    for (const a in t)
        if (St(t[a]) || St(e[a])) {
            const l = fi.indexOf(a) !== -1 ? "attr" + a.charAt(0).toUpperCase() + a.substring(1) : a;
            i[l] = t[a]
        }
    return i
}

function DR(t, e) {
    try {
        e.dimensions = typeof t.getBBox == "function" ? t.getBBox() : t.getBoundingClientRect()
    } catch {
        e.dimensions = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        }
    }
}
const jy = ["x", "y", "width", "height", "cx", "cy", "r"],
    jR = {
        useVisualState: Qw({
            scrapeMotionValuesFromProps: rx,
            createRenderState: Jw,
            onUpdate: ({
                props: t,
                prevProps: e,
                current: r,
                renderState: i,
                latestValues: a
            }) => {
                if (!r) return;
                let l = !!t.drag;
                if (!l) {
                    for (const d in a)
                        if (ms.has(d)) {
                            l = !0;
                            break
                        }
                }
                if (!l) return;
                let c = !e;
                if (e)
                    for (let d = 0; d < jy.length; d++) {
                        const h = jy[d];
                        t[h] !== e[h] && (c = !0)
                    }
                c && Le.read(() => {
                    DR(r, i), Le.render(() => {
                        Gf(i, a, Xf(r.tagName), t.transformTemplate), tx(r, i)
                    })
                })
            }
        })
    },
    IR = {
        useVisualState: Qw({
            scrapeMotionValuesFromProps: Jf,
            createRenderState: Yf
        })
    };

function sx(t, e, r) {
    for (const i in e) !St(e[i]) && !nx(i, r) && (t[i] = e[i])
}

function FR({
    transformTemplate: t
}, e) {
    return D.useMemo(() => {
        const r = Yf();
        return Qf(r, e, t), Object.assign({}, r.vars, r.style)
    }, [e])
}

function VR(t, e) {
    const r = t.style || {},
        i = {};
    return sx(i, r, t), Object.assign(i, FR(t, e)), i
}

function BR(t, e) {
    const r = {},
        i = VR(t, e);
    return t.drag && t.dragListener !== !1 && (r.draggable = !1, i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none", i.touchAction = t.drag === !0 ? "none" : `pan-${t.drag==="x"?"y":"x"}`), t.tabIndex === void 0 && (t.onTap || t.onTapStart || t.whileTap) && (r.tabIndex = 0), r.style = i, r
}

function UR(t, e, r, i) {
    const a = D.useMemo(() => {
        const l = Jw();
        return Gf(l, e, Xf(i), t.transformTemplate), { ...l.attrs,
            style: { ...l.style
            }
        }
    }, [e]);
    if (t.style) {
        const l = {};
        sx(l, t.style, t), a.style = { ...l,
            ...a.style
        }
    }
    return a
}

function zR(t = !1) {
    return (r, i, a, {
        latestValues: l
    }, c) => {
        const h = (Hf(r) ? UR : BR)(i, l, c, r),
            m = rR(i, typeof r == "string", t),
            g = r !== D.Fragment ? { ...m,
                ...h,
                ref: a
            } : {},
            {
                children: y
            } = i,
            w = D.useMemo(() => St(y) ? y.get() : y, [y]);
        return D.createElement(r, { ...g,
            children: w
        })
    }
}

function $R(t, e) {
    return function(i, {
        forwardMotionProps: a
    } = {
        forwardMotionProps: !1
    }) {
        const c = { ...Hf(i) ? jR : IR,
            preloadedFeatures: t,
            useRender: zR(a),
            createVisualElement: e,
            Component: i
        };
        return fR(c)
    }
}

function ix(t, e) {
    if (!Array.isArray(e)) return !1;
    const r = e.length;
    if (r !== t.length) return !1;
    for (let i = 0; i < r; i++)
        if (e[i] !== t[i]) return !1;
    return !0
}

function Zl(t, e, r) {
    const i = t.getProps();
    return qf(i, e, r !== void 0 ? r : i.custom, t)
}
const ox = Vf(() => window.ScrollTimeline !== void 0);
class HR {
    constructor(e) {
        this.stop = () => this.runAll("stop"), this.animations = e.filter(Boolean)
    }
    get finished() {
        return Promise.all(this.animations.map(e => "finished" in e ? e.finished : e))
    }
    getAll(e) {
        return this.animations[0][e]
    }
    setAll(e, r) {
        for (let i = 0; i < this.animations.length; i++) this.animations[i][e] = r
    }
    attachTimeline(e, r) {
        const i = this.animations.map(a => {
            if (ox() && a.attachTimeline) return a.attachTimeline(e);
            if (typeof r == "function") return r(a)
        });
        return () => {
            i.forEach((a, l) => {
                a && a(), this.animations[l].stop()
            })
        }
    }
    get time() {
        return this.getAll("time")
    }
    set time(e) {
        this.setAll("time", e)
    }
    get speed() {
        return this.getAll("speed")
    }
    set speed(e) {
        this.setAll("speed", e)
    }
    get startTime() {
        return this.getAll("startTime")
    }
    get duration() {
        let e = 0;
        for (let r = 0; r < this.animations.length; r++) e = Math.max(e, this.animations[r].duration);
        return e
    }
    runAll(e) {
        this.animations.forEach(r => r[e]())
    }
    flatten() {
        this.runAll("flatten")
    }
    play() {
        this.runAll("play")
    }
    pause() {
        this.runAll("pause")
    }
    cancel() {
        this.runAll("cancel")
    }
    complete() {
        this.runAll("complete")
    }
}
class qR extends HR {
    then(e, r) {
        return Promise.all(this.animations).then(e).catch(r)
    }
}

function Zf(t, e) {
    return t ? t[e] || t.default || t : void 0
}
const tf = 2e4;

function ax(t) {
    let e = 0;
    const r = 50;
    let i = t.next(e);
    for (; !i.done && e < tf;) e += r, i = t.next(e);
    return e >= tf ? 1 / 0 : e
}

function eh(t) {
    return typeof t == "function"
}

function Iy(t, e) {
    t.timeline = e, t.onfinish = null
}
const th = t => Array.isArray(t) && typeof t[0] == "number",
    WR = {
        linearEasing: void 0
    };

function KR(t, e) {
    const r = Vf(t);
    return () => {
        var i;
        return (i = WR[e]) !== null && i !== void 0 ? i : r()
    }
}
const Ol = KR(() => {
        try {
            document.createElement("div").animate({
                opacity: 0
            }, {
                easing: "linear(0, 1)"
            })
        } catch {
            return !1
        }
        return !0
    }, "linearEasing"),
    lx = (t, e, r = 10) => {
        let i = "";
        const a = Math.max(Math.round(e / r), 2);
        for (let l = 0; l < a; l++) i += t(hs(0, a - 1, l)) + ", ";
        return `linear(${i.substring(0,i.length-2)})`
    };

function ux(t) {
    return !!(typeof t == "function" && Ol() || !t || typeof t == "string" && (t in nf || Ol()) || th(t) || Array.isArray(t) && t.every(ux))
}
const co = ([t, e, r, i]) => `cubic-bezier(${t}, ${e}, ${r}, ${i})`,
    nf = {
        linear: "linear",
        ease: "ease",
        easeIn: "ease-in",
        easeOut: "ease-out",
        easeInOut: "ease-in-out",
        circIn: co([0, .65, .55, 1]),
        circOut: co([.55, 0, 1, .45]),
        backIn: co([.31, .01, .66, -.59]),
        backOut: co([.33, 1.53, .69, .99])
    };

function cx(t, e) {
    if (t) return typeof t == "function" && Ol() ? lx(t, e) : th(t) ? co(t) : Array.isArray(t) ? t.map(r => cx(r, e) || nf.easeOut) : nf[t]
}
const un = {
    x: !1,
    y: !1
};

function dx() {
    return un.x || un.y
}

function fx(t, e, r) {
    var i;
    if (t instanceof Element) return [t];
    if (typeof t == "string") {
        let a = document;
        const l = (i = void 0) !== null && i !== void 0 ? i : a.querySelectorAll(t);
        return l ? Array.from(l) : []
    }
    return Array.from(t)
}

function hx(t, e) {
    const r = fx(t),
        i = new AbortController,
        a = {
            passive: !0,
            ...e,
            signal: i.signal
        };
    return [r, a, () => i.abort()]
}

function Fy(t) {
    return e => {
        e.pointerType === "touch" || dx() || t(e)
    }
}

function QR(t, e, r = {}) {
    const [i, a, l] = hx(t, r), c = Fy(d => {
        const {
            target: h
        } = d, m = e(d);
        if (typeof m != "function" || !h) return;
        const g = Fy(y => {
            m(y), h.removeEventListener("pointerleave", g)
        });
        h.addEventListener("pointerleave", g, a)
    });
    return i.forEach(d => {
        d.addEventListener("pointerenter", c, a)
    }), l
}
const px = (t, e) => e ? t === e ? !0 : px(t, e.parentElement) : !1,
    nh = t => t.pointerType === "mouse" ? typeof t.button != "number" || t.button <= 0 : t.isPrimary !== !1,
    GR = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);

function YR(t) {
    return GR.has(t.tagName) || t.tabIndex !== -1
}
const fo = new WeakSet;

function Vy(t) {
    return e => {
        e.key === "Enter" && t(e)
    }
}

function fd(t, e) {
    t.dispatchEvent(new PointerEvent("pointer" + e, {
        isPrimary: !0,
        bubbles: !0
    }))
}
const XR = (t, e) => {
    const r = t.currentTarget;
    if (!r) return;
    const i = Vy(() => {
        if (fo.has(r)) return;
        fd(r, "down");
        const a = Vy(() => {
                fd(r, "up")
            }),
            l = () => fd(r, "cancel");
        r.addEventListener("keyup", a, e), r.addEventListener("blur", l, e)
    });
    r.addEventListener("keydown", i, e), r.addEventListener("blur", () => r.removeEventListener("keydown", i), e)
};

function By(t) {
    return nh(t) && !dx()
}

function JR(t, e, r = {}) {
    const [i, a, l] = hx(t, r), c = d => {
        const h = d.currentTarget;
        if (!By(d) || fo.has(h)) return;
        fo.add(h);
        const m = e(d),
            g = (k, S) => {
                window.removeEventListener("pointerup", y), window.removeEventListener("pointercancel", w), !(!By(k) || !fo.has(h)) && (fo.delete(h), typeof m == "function" && m(k, {
                    success: S
                }))
            },
            y = k => {
                g(k, r.useGlobalTarget || px(h, k.target))
            },
            w = k => {
                g(k, !1)
            };
        window.addEventListener("pointerup", y, a), window.addEventListener("pointercancel", w, a)
    };
    return i.forEach(d => {
        !YR(d) && d.getAttribute("tabindex") === null && (d.tabIndex = 0), (r.useGlobalTarget ? window : d).addEventListener("pointerdown", c, a), d.addEventListener("focus", m => XR(m, a), a)
    }), l
}

function ZR(t) {
    return t === "x" || t === "y" ? un[t] ? null : (un[t] = !0, () => {
        un[t] = !1
    }) : un.x || un.y ? null : (un.x = un.y = !0, () => {
        un.x = un.y = !1
    })
}
const mx = new Set(["width", "height", "top", "left", "right", "bottom", ...fi]);
let xl;

function eA() {
    xl = void 0
}
const Cn = {
    now: () => (xl === void 0 && Cn.set(lt.isProcessing || X_.useManualTiming ? lt.timestamp : performance.now()), xl),
    set: t => {
        xl = t, queueMicrotask(eA)
    }
};

function rh(t, e) {
    t.indexOf(e) === -1 && t.push(e)
}

function sh(t, e) {
    const r = t.indexOf(e);
    r > -1 && t.splice(r, 1)
}
class ih {
    constructor() {
        this.subscriptions = []
    }
    add(e) {
        return rh(this.subscriptions, e), () => sh(this.subscriptions, e)
    }
    notify(e, r, i) {
        const a = this.subscriptions.length;
        if (a)
            if (a === 1) this.subscriptions[0](e, r, i);
            else
                for (let l = 0; l < a; l++) {
                    const c = this.subscriptions[l];
                    c && c(e, r, i)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}

function oh(t, e) {
    return e ? t * (1e3 / e) : 0
}
const Uy = 30,
    tA = t => !isNaN(parseFloat(t)),
    go = {
        current: void 0
    };
class nA {
    constructor(e, r = {}) {
        this.version = "11.18.2", this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (i, a = !0) => {
            const l = Cn.now();
            this.updatedAt !== l && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(i), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), a && this.events.renderRequest && this.events.renderRequest.notify(this.current)
        }, this.hasAnimated = !1, this.setCurrent(e), this.owner = r.owner
    }
    setCurrent(e) {
        this.current = e, this.updatedAt = Cn.now(), this.canTrackVelocity === null && e !== void 0 && (this.canTrackVelocity = tA(this.current))
    }
    setPrevFrameValue(e = this.current) {
        this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt
    }
    onChange(e) {
        return this.on("change", e)
    }
    on(e, r) {
        this.events[e] || (this.events[e] = new ih);
        const i = this.events[e].add(r);
        return e === "change" ? () => {
            i(), Le.read(() => {
                this.events.change.getSize() || this.stop()
            })
        } : i
    }
    clearListeners() {
        for (const e in this.events) this.events[e].clear()
    }
    attach(e, r) {
        this.passiveEffect = e, this.stopPassiveEffect = r
    }
    set(e, r = !0) {
        !r || !this.passiveEffect ? this.updateAndNotify(e, r) : this.passiveEffect(e, this.updateAndNotify)
    }
    setWithVelocity(e, r, i) {
        this.set(r), this.prev = void 0, this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt - i
    }
    jump(e, r = !0) {
        this.updateAndNotify(e), this.prev = e, this.prevUpdatedAt = this.prevFrameValue = void 0, r && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
    }
    get() {
        return go.current && go.current.push(this), this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        const e = Cn.now();
        if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > Uy) return 0;
        const r = Math.min(this.updatedAt - this.prevUpdatedAt, Uy);
        return oh(parseFloat(this.current) - parseFloat(this.prevFrameValue), r)
    }
    start(e) {
        return this.stop(), new Promise(r => {
            this.hasAnimated = !0, this.animation = e(r), this.events.animationStart && this.events.animationStart.notify()
        }).then(() => {
            this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
        })
    }
    stop() {
        this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
    }
}

function kn(t, e) {
    return new nA(t, e)
}

function rA(t, e, r) {
    t.hasValue(e) ? t.getValue(e).set(r) : t.addValue(e, kn(r))
}

function sA(t, e) {
    const r = Zl(t, e);
    let {
        transitionEnd: i = {},
        transition: a = {},
        ...l
    } = r || {};
    l = { ...l,
        ...i
    };
    for (const c in l) {
        const d = vR(l[c]);
        rA(t, c, d)
    }
}

function iA(t) {
    return !!(St(t) && t.add)
}

function rf(t, e) {
    const r = t.getValue("willChange");
    if (iA(r)) return r.add(e)
}

function gx(t) {
    return t.props[qw]
}
const yx = (t, e, r) => (((1 - 3 * r + 3 * e) * t + (3 * r - 6 * e)) * t + 3 * e) * t,
    oA = 1e-7,
    aA = 12;

function lA(t, e, r, i, a) {
    let l, c, d = 0;
    do c = e + (r - e) / 2, l = yx(c, i, a) - t, l > 0 ? r = c : e = c; while (Math.abs(l) > oA && ++d < aA);
    return c
}

function Uo(t, e, r, i) {
    if (t === e && r === i) return Ct;
    const a = l => lA(l, 0, 1, t, r);
    return l => l === 0 || l === 1 ? l : yx(a(l), e, i)
}
const vx = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
    wx = t => e => 1 - t(1 - e),
    xx = Uo(.33, 1.53, .69, .99),
    ah = wx(xx),
    Sx = vx(ah),
    bx = t => (t *= 2) < 1 ? .5 * ah(t) : .5 * (2 - Math.pow(2, -10 * (t - 1))),
    lh = t => 1 - Math.sin(Math.acos(t)),
    kx = wx(lh),
    Ex = vx(lh),
    Tx = t => /^0[^.\s]+$/u.test(t);

function uA(t) {
    return typeof t == "number" ? t === 0 : t !== null ? t === "none" || t === "0" || Tx(t) : !0
}
const yo = t => Math.round(t * 1e5) / 1e5,
    uh = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;

function cA(t) {
    return t == null
}
const dA = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
    ch = (t, e) => r => !!(typeof r == "string" && dA.test(r) && r.startsWith(t) || e && !cA(r) && Object.prototype.hasOwnProperty.call(r, e)),
    Cx = (t, e, r) => i => {
        if (typeof i != "string") return i;
        const [a, l, c, d] = i.match(uh);
        return {
            [t]: parseFloat(a),
            [e]: parseFloat(l),
            [r]: parseFloat(c),
            alpha: d !== void 0 ? parseFloat(d) : 1
        }
    },
    fA = t => _n(0, 255, t),
    hd = { ...hi,
        transform: t => Math.round(fA(t))
    },
    Zr = {
        test: ch("rgb", "red"),
        parse: Cx("red", "green", "blue"),
        transform: ({
            red: t,
            green: e,
            blue: r,
            alpha: i = 1
        }) => "rgba(" + hd.transform(t) + ", " + hd.transform(e) + ", " + hd.transform(r) + ", " + yo(To.transform(i)) + ")"
    };

function hA(t) {
    let e = "",
        r = "",
        i = "",
        a = "";
    return t.length > 5 ? (e = t.substring(1, 3), r = t.substring(3, 5), i = t.substring(5, 7), a = t.substring(7, 9)) : (e = t.substring(1, 2), r = t.substring(2, 3), i = t.substring(3, 4), a = t.substring(4, 5), e += e, r += r, i += i, a += a), {
        red: parseInt(e, 16),
        green: parseInt(r, 16),
        blue: parseInt(i, 16),
        alpha: a ? parseInt(a, 16) / 255 : 1
    }
}
const sf = {
        test: ch("#"),
        parse: hA,
        transform: Zr.transform
    },
    $s = {
        test: ch("hsl", "hue"),
        parse: Cx("hue", "saturation", "lightness"),
        transform: ({
            hue: t,
            saturation: e,
            lightness: r,
            alpha: i = 1
        }) => "hsla(" + Math.round(t) + ", " + Tn.transform(yo(e)) + ", " + Tn.transform(yo(r)) + ", " + yo(To.transform(i)) + ")"
    },
    wt = {
        test: t => Zr.test(t) || sf.test(t) || $s.test(t),
        parse: t => Zr.test(t) ? Zr.parse(t) : $s.test(t) ? $s.parse(t) : sf.parse(t),
        transform: t => typeof t == "string" ? t : t.hasOwnProperty("red") ? Zr.transform(t) : $s.transform(t)
    },
    pA = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;

function mA(t) {
    var e, r;
    return isNaN(t) && typeof t == "string" && (((e = t.match(uh)) === null || e === void 0 ? void 0 : e.length) || 0) + (((r = t.match(pA)) === null || r === void 0 ? void 0 : r.length) || 0) > 0
}
const Px = "number",
    _x = "color",
    gA = "var",
    yA = "var(",
    zy = "${}",
    vA = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;

function Co(t) {
    const e = t.toString(),
        r = [],
        i = {
            color: [],
            number: [],
            var: []
        },
        a = [];
    let l = 0;
    const d = e.replace(vA, h => (wt.test(h) ? (i.color.push(l), a.push(_x), r.push(wt.parse(h))) : h.startsWith(yA) ? (i.var.push(l), a.push(gA), r.push(h)) : (i.number.push(l), a.push(Px), r.push(parseFloat(h))), ++l, zy)).split(zy);
    return {
        values: r,
        split: d,
        indexes: i,
        types: a
    }
}

function Rx(t) {
    return Co(t).values
}

function Ax(t) {
    const {
        split: e,
        types: r
    } = Co(t), i = e.length;
    return a => {
        let l = "";
        for (let c = 0; c < i; c++)
            if (l += e[c], a[c] !== void 0) {
                const d = r[c];
                d === Px ? l += yo(a[c]) : d === _x ? l += wt.transform(a[c]) : l += a[c]
            }
        return l
    }
}
const wA = t => typeof t == "number" ? 0 : t;

function xA(t) {
    const e = Rx(t);
    return Ax(t)(e.map(wA))
}
const Rr = {
        test: mA,
        parse: Rx,
        createTransformer: Ax,
        getAnimatableNone: xA
    },
    SA = new Set(["brightness", "contrast", "saturate", "opacity"]);

function bA(t) {
    const [e, r] = t.slice(0, -1).split("(");
    if (e === "drop-shadow") return t;
    const [i] = r.match(uh) || [];
    if (!i) return t;
    const a = r.replace(i, "");
    let l = SA.has(e) ? 1 : 0;
    return i !== r && (l *= 100), e + "(" + l + a + ")"
}
const kA = /\b([a-z-]*)\(.*?\)/gu,
    of = { ...Rr,
        getAnimatableNone: t => {
            const e = t.match(kA);
            return e ? e.map(bA).join(" ") : t
        }
    },
    EA = { ...Kf,
        color: wt,
        backgroundColor: wt,
        outlineColor: wt,
        fill: wt,
        stroke: wt,
        borderColor: wt,
        borderTopColor: wt,
        borderRightColor: wt,
        borderBottomColor: wt,
        borderLeftColor: wt,
        filter: of ,
        WebkitFilter: of
    },
    dh = t => EA[t];

function Nx(t, e) {
    let r = dh(t);
    return r !== of && (r = Rr), r.getAnimatableNone ? r.getAnimatableNone(e) : void 0
}
const TA = new Set(["auto", "none", "0"]);

function CA(t, e, r) {
    let i = 0,
        a;
    for (; i < t.length && !a;) {
        const l = t[i];
        typeof l == "string" && !TA.has(l) && Co(l).values.length && (a = t[i]), i++
    }
    if (a && r)
        for (const l of e) t[l] = Nx(r, a)
}
const $y = t => t === hi || t === ce,
    Hy = (t, e) => parseFloat(t.split(", ")[e]),
    qy = (t, e) => (r, {
        transform: i
    }) => {
        if (i === "none" || !i) return 0;
        const a = i.match(/^matrix3d\((.+)\)$/u);
        if (a) return Hy(a[1], e); {
            const l = i.match(/^matrix\((.+)\)$/u);
            return l ? Hy(l[1], t) : 0
        }
    },
    PA = new Set(["x", "y", "z"]),
    _A = fi.filter(t => !PA.has(t));

function RA(t) {
    const e = [];
    return _A.forEach(r => {
        const i = t.getValue(r);
        i !== void 0 && (e.push([r, i.get()]), i.set(r.startsWith("scale") ? 1 : 0))
    }), e
}
const li = {
    width: ({
        x: t
    }, {
        paddingLeft: e = "0",
        paddingRight: r = "0"
    }) => t.max - t.min - parseFloat(e) - parseFloat(r),
    height: ({
        y: t
    }, {
        paddingTop: e = "0",
        paddingBottom: r = "0"
    }) => t.max - t.min - parseFloat(e) - parseFloat(r),
    top: (t, {
        top: e
    }) => parseFloat(e),
    left: (t, {
        left: e
    }) => parseFloat(e),
    bottom: ({
        y: t
    }, {
        top: e
    }) => parseFloat(e) + (t.max - t.min),
    right: ({
        x: t
    }, {
        left: e
    }) => parseFloat(e) + (t.max - t.min),
    x: qy(4, 13),
    y: qy(5, 14)
};
li.translateX = li.x;
li.translateY = li.y;
const cs = new Set;
let af = !1,
    lf = !1;

function Ox() {
    if (lf) {
        const t = Array.from(cs).filter(i => i.needsMeasurement),
            e = new Set(t.map(i => i.element)),
            r = new Map;
        e.forEach(i => {
            const a = RA(i);
            a.length && (r.set(i, a), i.render())
        }), t.forEach(i => i.measureInitialState()), e.forEach(i => {
            i.render();
            const a = r.get(i);
            a && a.forEach(([l, c]) => {
                var d;
                (d = i.getValue(l)) === null || d === void 0 || d.set(c)
            })
        }), t.forEach(i => i.measureEndState()), t.forEach(i => {
            i.suspendedScrollY !== void 0 && window.scrollTo(0, i.suspendedScrollY)
        })
    }
    lf = !1, af = !1, cs.forEach(t => t.complete()), cs.clear()
}

function Lx() {
    cs.forEach(t => {
        t.readKeyframes(), t.needsMeasurement && (lf = !0)
    })
}

function AA() {
    Lx(), Ox()
}
class fh {
    constructor(e, r, i, a, l, c = !1) {
        this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...e], this.onComplete = r, this.name = i, this.motionValue = a, this.element = l, this.isAsync = c
    }
    scheduleResolve() {
        this.isScheduled = !0, this.isAsync ? (cs.add(this), af || (af = !0, Le.read(Lx), Le.resolveKeyframes(Ox))) : (this.readKeyframes(), this.complete())
    }
    readKeyframes() {
        const {
            unresolvedKeyframes: e,
            name: r,
            element: i,
            motionValue: a
        } = this;
        for (let l = 0; l < e.length; l++)
            if (e[l] === null)
                if (l === 0) {
                    const c = a == null ? void 0 : a.get(),
                        d = e[e.length - 1];
                    if (c !== void 0) e[0] = c;
                    else if (i && r) {
                        const h = i.readValue(r, d);
                        h != null && (e[0] = h)
                    }
                    e[0] === void 0 && (e[0] = d), a && c === void 0 && a.set(e[0])
                } else e[l] = e[l - 1]
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete() {
        this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), cs.delete(this)
    }
    cancel() {
        this.isComplete || (this.isScheduled = !1, cs.delete(this))
    }
    resume() {
        this.isComplete || this.scheduleResolve()
    }
}
const Mx = t => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),
    NA = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;

function OA(t) {
    const e = NA.exec(t);
    if (!e) return [, ];
    const [, r, i, a] = e;
    return [`--${r??i}`, a]
}

function Dx(t, e, r = 1) {
    const [i, a] = OA(t);
    if (!i) return;
    const l = window.getComputedStyle(e).getPropertyValue(i);
    if (l) {
        const c = l.trim();
        return Mx(c) ? parseFloat(c) : c
    }
    return Wf(a) ? Dx(a, e, r + 1) : a
}
const jx = t => e => e.test(t),
    LA = {
        test: t => t === "auto",
        parse: t => t
    },
    Ix = [hi, ce, Tn, mr, ER, kR, LA],
    Wy = t => Ix.find(jx(t));
class Fx extends fh {
    constructor(e, r, i, a, l) {
        super(e, r, i, a, l, !0)
    }
    readKeyframes() {
        const {
            unresolvedKeyframes: e,
            element: r,
            name: i
        } = this;
        if (!r || !r.current) return;
        super.readKeyframes();
        for (let h = 0; h < e.length; h++) {
            let m = e[h];
            if (typeof m == "string" && (m = m.trim(), Wf(m))) {
                const g = Dx(m, r.current);
                g !== void 0 && (e[h] = g), h === e.length - 1 && (this.finalKeyframe = m)
            }
        }
        if (this.resolveNoneKeyframes(), !mx.has(i) || e.length !== 2) return;
        const [a, l] = e, c = Wy(a), d = Wy(l);
        if (c !== d)
            if ($y(c) && $y(d))
                for (let h = 0; h < e.length; h++) {
                    const m = e[h];
                    typeof m == "string" && (e[h] = parseFloat(m))
                } else this.needsMeasurement = !0
    }
    resolveNoneKeyframes() {
        const {
            unresolvedKeyframes: e,
            name: r
        } = this, i = [];
        for (let a = 0; a < e.length; a++) uA(e[a]) && i.push(a);
        i.length && CA(e, i, r)
    }
    measureInitialState() {
        const {
            element: e,
            unresolvedKeyframes: r,
            name: i
        } = this;
        if (!e || !e.current) return;
        i === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = li[i](e.measureViewportBox(), window.getComputedStyle(e.current)), r[0] = this.measuredOrigin;
        const a = r[r.length - 1];
        a !== void 0 && e.getValue(i, a).jump(a, !1)
    }
    measureEndState() {
        var e;
        const {
            element: r,
            name: i,
            unresolvedKeyframes: a
        } = this;
        if (!r || !r.current) return;
        const l = r.getValue(i);
        l && l.jump(this.measuredOrigin, !1);
        const c = a.length - 1,
            d = a[c];
        a[c] = li[i](r.measureViewportBox(), window.getComputedStyle(r.current)), d !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = d), !((e = this.removedTransforms) === null || e === void 0) && e.length && this.removedTransforms.forEach(([h, m]) => {
            r.getValue(h).set(m)
        }), this.resolveNoneKeyframes()
    }
}
const Ky = (t, e) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && (Rr.test(t) || t === "0") && !t.startsWith("url("));

function MA(t) {
    const e = t[0];
    if (t.length === 1) return !0;
    for (let r = 0; r < t.length; r++)
        if (t[r] !== e) return !0
}

function DA(t, e, r, i) {
    const a = t[0];
    if (a === null) return !1;
    if (e === "display" || e === "visibility") return !0;
    const l = t[t.length - 1],
        c = Ky(a, e),
        d = Ky(l, e);
    return !c || !d ? !1 : MA(t) || (r === "spring" || eh(r)) && i
}
const jA = t => t !== null;

function eu(t, {
    repeat: e,
    repeatType: r = "loop"
}, i) {
    const a = t.filter(jA),
        l = e && r !== "loop" && e % 2 === 1 ? 0 : a.length - 1;
    return !l || i === void 0 ? a[l] : i
}
const IA = 40;
class Vx {
    constructor({
        autoplay: e = !0,
        delay: r = 0,
        type: i = "keyframes",
        repeat: a = 0,
        repeatDelay: l = 0,
        repeatType: c = "loop",
        ...d
    }) {
        this.isStopped = !1, this.hasAttemptedResolve = !1, this.createdAt = Cn.now(), this.options = {
            autoplay: e,
            delay: r,
            type: i,
            repeat: a,
            repeatDelay: l,
            repeatType: c,
            ...d
        }, this.updateFinishedPromise()
    }
    calcStartTime() {
        return this.resolvedAt ? this.resolvedAt - this.createdAt > IA ? this.resolvedAt : this.createdAt : this.createdAt
    }
    get resolved() {
        return !this._resolved && !this.hasAttemptedResolve && AA(), this._resolved
    }
    onKeyframesResolved(e, r) {
        this.resolvedAt = Cn.now(), this.hasAttemptedResolve = !0;
        const {
            name: i,
            type: a,
            velocity: l,
            delay: c,
            onComplete: d,
            onUpdate: h,
            isGenerator: m
        } = this.options;
        if (!m && !DA(e, i, a, l))
            if (c) this.options.duration = 0;
            else {
                h && h(eu(e, this.options, r)), d && d(), this.resolveFinishedPromise();
                return
            }
        const g = this.initPlayback(e, r);
        g !== !1 && (this._resolved = {
            keyframes: e,
            finalKeyframe: r,
            ...g
        }, this.onPostResolved())
    }
    onPostResolved() {}
    then(e, r) {
        return this.currentFinishedPromise.then(e, r)
    }
    flatten() {
        this.options.type = "keyframes", this.options.ease = "linear"
    }
    updateFinishedPromise() {
        this.currentFinishedPromise = new Promise(e => {
            this.resolveFinishedPromise = e
        })
    }
}
const qe = (t, e, r) => t + (e - t) * r;

function pd(t, e, r) {
    return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? t + (e - t) * 6 * r : r < 1 / 2 ? e : r < 2 / 3 ? t + (e - t) * (2 / 3 - r) * 6 : t
}

function FA({
    hue: t,
    saturation: e,
    lightness: r,
    alpha: i
}) {
    t /= 360, e /= 100, r /= 100;
    let a = 0,
        l = 0,
        c = 0;
    if (!e) a = l = c = r;
    else {
        const d = r < .5 ? r * (1 + e) : r + e - r * e,
            h = 2 * r - d;
        a = pd(h, d, t + 1 / 3), l = pd(h, d, t), c = pd(h, d, t - 1 / 3)
    }
    return {
        red: Math.round(a * 255),
        green: Math.round(l * 255),
        blue: Math.round(c * 255),
        alpha: i
    }
}

function Ll(t, e) {
    return r => r > 0 ? e : t
}
const md = (t, e, r) => {
        const i = t * t,
            a = r * (e * e - i) + i;
        return a < 0 ? 0 : Math.sqrt(a)
    },
    VA = [sf, Zr, $s],
    BA = t => VA.find(e => e.test(t));

function Qy(t) {
    const e = BA(t);
    if (!e) return !1;
    let r = e.parse(t);
    return e === $s && (r = FA(r)), r
}
const Gy = (t, e) => {
        const r = Qy(t),
            i = Qy(e);
        if (!r || !i) return Ll(t, e);
        const a = { ...r
        };
        return l => (a.red = md(r.red, i.red, l), a.green = md(r.green, i.green, l), a.blue = md(r.blue, i.blue, l), a.alpha = qe(r.alpha, i.alpha, l), Zr.transform(a))
    },
    UA = (t, e) => r => e(t(r)),
    zo = (...t) => t.reduce(UA),
    uf = new Set(["none", "hidden"]);

function zA(t, e) {
    return uf.has(t) ? r => r <= 0 ? t : e : r => r >= 1 ? e : t
}

function $A(t, e) {
    return r => qe(t, e, r)
}

function hh(t) {
    return typeof t == "number" ? $A : typeof t == "string" ? Wf(t) ? Ll : wt.test(t) ? Gy : WA : Array.isArray(t) ? Bx : typeof t == "object" ? wt.test(t) ? Gy : HA : Ll
}

function Bx(t, e) {
    const r = [...t],
        i = r.length,
        a = t.map((l, c) => hh(l)(l, e[c]));
    return l => {
        for (let c = 0; c < i; c++) r[c] = a[c](l);
        return r
    }
}

function HA(t, e) {
    const r = { ...t,
            ...e
        },
        i = {};
    for (const a in r) t[a] !== void 0 && e[a] !== void 0 && (i[a] = hh(t[a])(t[a], e[a]));
    return a => {
        for (const l in i) r[l] = i[l](a);
        return r
    }
}

function qA(t, e) {
    var r;
    const i = [],
        a = {
            color: 0,
            var: 0,
            number: 0
        };
    for (let l = 0; l < e.values.length; l++) {
        const c = e.types[l],
            d = t.indexes[c][a[c]],
            h = (r = t.values[d]) !== null && r !== void 0 ? r : 0;
        i[l] = h, a[c]++
    }
    return i
}
const WA = (t, e) => {
    const r = Rr.createTransformer(e),
        i = Co(t),
        a = Co(e);
    return i.indexes.var.length === a.indexes.var.length && i.indexes.color.length === a.indexes.color.length && i.indexes.number.length >= a.indexes.number.length ? uf.has(t) && !a.values.length || uf.has(e) && !i.values.length ? zA(t, e) : zo(Bx(qA(i, a), a.values), r) : Ll(t, e)
};

function Ux(t, e, r) {
    return typeof t == "number" && typeof e == "number" && typeof r == "number" ? qe(t, e, r) : hh(t)(t, e)
}
const KA = 5;

function zx(t, e, r) {
    const i = Math.max(e - KA, 0);
    return oh(r - t(i), e - i)
}
const Qe = {
        stiffness: 100,
        damping: 10,
        mass: 1,
        velocity: 0,
        duration: 800,
        bounce: .3,
        visualDuration: .3,
        restSpeed: {
            granular: .01,
            default: 2
        },
        restDelta: {
            granular: .005,
            default: .5
        },
        minDuration: .01,
        maxDuration: 10,
        minDamping: .05,
        maxDamping: 1
    },
    gd = .001;

function QA({
    duration: t = Qe.duration,
    bounce: e = Qe.bounce,
    velocity: r = Qe.velocity,
    mass: i = Qe.mass
}) {
    let a, l, c = 1 - e;
    c = _n(Qe.minDamping, Qe.maxDamping, c), t = _n(Qe.minDuration, Qe.maxDuration, Hn(t)), c < 1 ? (a = m => {
        const g = m * c,
            y = g * t,
            w = g - r,
            k = cf(m, c),
            S = Math.exp(-y);
        return gd - w / k * S
    }, l = m => {
        const y = m * c * t,
            w = y * r + r,
            k = Math.pow(c, 2) * Math.pow(m, 2) * t,
            S = Math.exp(-y),
            b = cf(Math.pow(m, 2), c);
        return (-a(m) + gd > 0 ? -1 : 1) * ((w - k) * S) / b
    }) : (a = m => {
        const g = Math.exp(-m * t),
            y = (m - r) * t + 1;
        return -gd + g * y
    }, l = m => {
        const g = Math.exp(-m * t),
            y = (r - m) * (t * t);
        return g * y
    });
    const d = 5 / t,
        h = YA(a, l, d);
    if (t = $n(t), isNaN(h)) return {
        stiffness: Qe.stiffness,
        damping: Qe.damping,
        duration: t
    }; {
        const m = Math.pow(h, 2) * i;
        return {
            stiffness: m,
            damping: c * 2 * Math.sqrt(i * m),
            duration: t
        }
    }
}
const GA = 12;

function YA(t, e, r) {
    let i = r;
    for (let a = 1; a < GA; a++) i = i - t(i) / e(i);
    return i
}

function cf(t, e) {
    return t * Math.sqrt(1 - e * e)
}
const XA = ["duration", "bounce"],
    JA = ["stiffness", "damping", "mass"];

function Yy(t, e) {
    return e.some(r => t[r] !== void 0)
}

function ZA(t) {
    let e = {
        velocity: Qe.velocity,
        stiffness: Qe.stiffness,
        damping: Qe.damping,
        mass: Qe.mass,
        isResolvedFromDuration: !1,
        ...t
    };
    if (!Yy(t, JA) && Yy(t, XA))
        if (t.visualDuration) {
            const r = t.visualDuration,
                i = 2 * Math.PI / (r * 1.2),
                a = i * i,
                l = 2 * _n(.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(a);
            e = { ...e,
                mass: Qe.mass,
                stiffness: a,
                damping: l
            }
        } else {
            const r = QA(t);
            e = { ...e,
                ...r,
                mass: Qe.mass
            }, e.isResolvedFromDuration = !0
        }
    return e
}

function $x(t = Qe.visualDuration, e = Qe.bounce) {
    const r = typeof t != "object" ? {
        visualDuration: t,
        keyframes: [0, 1],
        bounce: e
    } : t;
    let {
        restSpeed: i,
        restDelta: a
    } = r;
    const l = r.keyframes[0],
        c = r.keyframes[r.keyframes.length - 1],
        d = {
            done: !1,
            value: l
        },
        {
            stiffness: h,
            damping: m,
            mass: g,
            duration: y,
            velocity: w,
            isResolvedFromDuration: k
        } = ZA({ ...r,
            velocity: -Hn(r.velocity || 0)
        }),
        S = w || 0,
        b = m / (2 * Math.sqrt(h * g)),
        x = c - l,
        R = Hn(Math.sqrt(h / g)),
        V = Math.abs(x) < 5;
    i || (i = V ? Qe.restSpeed.granular : Qe.restSpeed.default), a || (a = V ? Qe.restDelta.granular : Qe.restDelta.default);
    let M;
    if (b < 1) {
        const B = cf(R, b);
        M = K => {
            const G = Math.exp(-b * R * K);
            return c - G * ((S + b * R * x) / B * Math.sin(B * K) + x * Math.cos(B * K))
        }
    } else if (b === 1) M = B => c - Math.exp(-R * B) * (x + (S + R * x) * B);
    else {
        const B = R * Math.sqrt(b * b - 1);
        M = K => {
            const G = Math.exp(-b * R * K),
                j = Math.min(B * K, 300);
            return c - G * ((S + b * R * x) * Math.sinh(j) + B * x * Math.cosh(j)) / B
        }
    }
    const L = {
        calculatedDuration: k && y || null,
        next: B => {
            const K = M(B);
            if (k) d.done = B >= y;
            else {
                let G = 0;
                b < 1 && (G = B === 0 ? $n(S) : zx(M, B, K));
                const j = Math.abs(G) <= i,
                    J = Math.abs(c - K) <= a;
                d.done = j && J
            }
            return d.value = d.done ? c : K, d
        },
        toString: () => {
            const B = Math.min(ax(L), tf),
                K = lx(G => L.next(B * G).value, B, 30);
            return B + "ms " + K
        }
    };
    return L
}

function Xy({
    keyframes: t,
    velocity: e = 0,
    power: r = .8,
    timeConstant: i = 325,
    bounceDamping: a = 10,
    bounceStiffness: l = 500,
    modifyTarget: c,
    min: d,
    max: h,
    restDelta: m = .5,
    restSpeed: g
}) {
    const y = t[0],
        w = {
            done: !1,
            value: y
        },
        k = j => d !== void 0 && j < d || h !== void 0 && j > h,
        S = j => d === void 0 ? h : h === void 0 || Math.abs(d - j) < Math.abs(h - j) ? d : h;
    let b = r * e;
    const x = y + b,
        R = c === void 0 ? x : c(x);
    R !== x && (b = R - y);
    const V = j => -b * Math.exp(-j / i),
        M = j => R + V(j),
        L = j => {
            const J = V(j),
                de = M(j);
            w.done = Math.abs(J) <= m, w.value = w.done ? R : de
        };
    let B, K;
    const G = j => {
        k(w.value) && (B = j, K = $x({
            keyframes: [w.value, S(w.value)],
            velocity: zx(M, j, w.value),
            damping: a,
            stiffness: l,
            restDelta: m,
            restSpeed: g
        }))
    };
    return G(0), {
        calculatedDuration: null,
        next: j => {
            let J = !1;
            return !K && B === void 0 && (J = !0, L(j), G(j)), B !== void 0 && j >= B ? K.next(j - B) : (!J && L(j), w)
        }
    }
}
const e2 = Uo(.42, 0, 1, 1),
    t2 = Uo(0, 0, .58, 1),
    Hx = Uo(.42, 0, .58, 1),
    n2 = t => Array.isArray(t) && typeof t[0] != "number",
    r2 = {
        linear: Ct,
        easeIn: e2,
        easeInOut: Hx,
        easeOut: t2,
        circIn: lh,
        circInOut: Ex,
        circOut: kx,
        backIn: ah,
        backInOut: Sx,
        backOut: xx,
        anticipate: bx
    },
    Jy = t => {
        if (th(t)) {
            Bw(t.length === 4);
            const [e, r, i, a] = t;
            return Uo(e, r, i, a)
        } else if (typeof t == "string") return r2[t];
        return t
    };

function s2(t, e, r) {
    const i = [],
        a = r || Ux,
        l = t.length - 1;
    for (let c = 0; c < l; c++) {
        let d = a(t[c], t[c + 1]);
        if (e) {
            const h = Array.isArray(e) ? e[c] || Ct : e;
            d = zo(h, d)
        }
        i.push(d)
    }
    return i
}

function ph(t, e, {
    clamp: r = !0,
    ease: i,
    mixer: a
} = {}) {
    const l = t.length;
    if (Bw(l === e.length), l === 1) return () => e[0];
    if (l === 2 && e[0] === e[1]) return () => e[1];
    const c = t[0] === t[1];
    t[0] > t[l - 1] && (t = [...t].reverse(), e = [...e].reverse());
    const d = s2(e, i, a),
        h = d.length,
        m = g => {
            if (c && g < t[0]) return e[0];
            let y = 0;
            if (h > 1)
                for (; y < t.length - 2 && !(g < t[y + 1]); y++);
            const w = hs(t[y], t[y + 1], g);
            return d[y](w)
        };
    return r ? g => m(_n(t[0], t[l - 1], g)) : m
}

function i2(t, e) {
    const r = t[t.length - 1];
    for (let i = 1; i <= e; i++) {
        const a = hs(0, e, i);
        t.push(qe(r, 1, a))
    }
}

function qx(t) {
    const e = [0];
    return i2(e, t.length - 1), e
}

function o2(t, e) {
    return t.map(r => r * e)
}

function a2(t, e) {
    return t.map(() => e || Hx).splice(0, t.length - 1)
}

function Ml({
    duration: t = 300,
    keyframes: e,
    times: r,
    ease: i = "easeInOut"
}) {
    const a = n2(i) ? i.map(Jy) : Jy(i),
        l = {
            done: !1,
            value: e[0]
        },
        c = o2(r && r.length === e.length ? r : qx(e), t),
        d = ph(c, e, {
            ease: Array.isArray(a) ? a : a2(e, a)
        });
    return {
        calculatedDuration: t,
        next: h => (l.value = d(h), l.done = h >= t, l)
    }
}
const l2 = t => {
        const e = ({
            timestamp: r
        }) => t(r);
        return {
            start: () => Le.update(e, !0),
            stop: () => hn(e),
            now: () => lt.isProcessing ? lt.timestamp : Cn.now()
        }
    },
    u2 = {
        decay: Xy,
        inertia: Xy,
        tween: Ml,
        keyframes: Ml,
        spring: $x
    },
    c2 = t => t / 100;
class mh extends Vx {
    constructor(e) {
        super(e), this.holdTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.startTime = null, this.state = "idle", this.stop = () => {
            if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle") return;
            this.teardown();
            const {
                onStop: h
            } = this.options;
            h && h()
        };
        const {
            name: r,
            motionValue: i,
            element: a,
            keyframes: l
        } = this.options, c = (a == null ? void 0 : a.KeyframeResolver) || fh, d = (h, m) => this.onKeyframesResolved(h, m);
        this.resolver = new c(l, d, r, i, a), this.resolver.scheduleResolve()
    }
    flatten() {
        super.flatten(), this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes))
    }
    initPlayback(e) {
        const {
            type: r = "keyframes",
            repeat: i = 0,
            repeatDelay: a = 0,
            repeatType: l,
            velocity: c = 0
        } = this.options, d = eh(r) ? r : u2[r] || Ml;
        let h, m;
        d !== Ml && typeof e[0] != "number" && (h = zo(c2, Ux(e[0], e[1])), e = [0, 100]);
        const g = d({ ...this.options,
            keyframes: e
        });
        l === "mirror" && (m = d({ ...this.options,
            keyframes: [...e].reverse(),
            velocity: -c
        })), g.calculatedDuration === null && (g.calculatedDuration = ax(g));
        const {
            calculatedDuration: y
        } = g, w = y + a, k = w * (i + 1) - a;
        return {
            generator: g,
            mirroredGenerator: m,
            mapPercentToKeyframes: h,
            calculatedDuration: y,
            resolvedDuration: w,
            totalDuration: k
        }
    }
    onPostResolved() {
        const {
            autoplay: e = !0
        } = this.options;
        this.play(), this.pendingPlayState === "paused" || !e ? this.pause() : this.state = this.pendingPlayState
    }
    tick(e, r = !1) {
        const {
            resolved: i
        } = this;
        if (!i) {
            const {
                keyframes: j
            } = this.options;
            return {
                done: !0,
                value: j[j.length - 1]
            }
        }
        const {
            finalKeyframe: a,
            generator: l,
            mirroredGenerator: c,
            mapPercentToKeyframes: d,
            keyframes: h,
            calculatedDuration: m,
            totalDuration: g,
            resolvedDuration: y
        } = i;
        if (this.startTime === null) return l.next(0);
        const {
            delay: w,
            repeat: k,
            repeatType: S,
            repeatDelay: b,
            onUpdate: x
        } = this.options;
        this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - g / this.speed, this.startTime)), r ? this.currentTime = e : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(e - this.startTime) * this.speed;
        const R = this.currentTime - w * (this.speed >= 0 ? 1 : -1),
            V = this.speed >= 0 ? R < 0 : R > g;
        this.currentTime = Math.max(R, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = g);
        let M = this.currentTime,
            L = l;
        if (k) {
            const j = Math.min(this.currentTime, g) / y;
            let J = Math.floor(j),
                de = j % 1;
            !de && j >= 1 && (de = 1), de === 1 && J--, J = Math.min(J, k + 1), !!(J % 2) && (S === "reverse" ? (de = 1 - de, b && (de -= b / y)) : S === "mirror" && (L = c)), M = _n(0, 1, de) * y
        }
        const B = V ? {
            done: !1,
            value: h[0]
        } : L.next(M);
        d && (B.value = d(B.value));
        let {
            done: K
        } = B;
        !V && m !== null && (K = this.speed >= 0 ? this.currentTime >= g : this.currentTime <= 0);
        const G = this.holdTime === null && (this.state === "finished" || this.state === "running" && K);
        return G && a !== void 0 && (B.value = eu(h, this.options, a)), x && x(B.value), G && this.finish(), B
    }
    get duration() {
        const {
            resolved: e
        } = this;
        return e ? Hn(e.calculatedDuration) : 0
    }
    get time() {
        return Hn(this.currentTime)
    }
    set time(e) {
        e = $n(e), this.currentTime = e, this.holdTime !== null || this.speed === 0 ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.speed)
    }
    get speed() {
        return this.playbackSpeed
    }
    set speed(e) {
        const r = this.playbackSpeed !== e;
        this.playbackSpeed = e, r && (this.time = Hn(this.currentTime))
    }
    play() {
        if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
            this.pendingPlayState = "running";
            return
        }
        if (this.isStopped) return;
        const {
            driver: e = l2,
            onPlay: r,
            startTime: i
        } = this.options;
        this.driver || (this.driver = e(l => this.tick(l))), r && r();
        const a = this.driver.now();
        this.holdTime !== null ? this.startTime = a - this.holdTime : this.startTime ? this.state === "finished" && (this.startTime = a) : this.startTime = i ? ? this.calcStartTime(), this.state === "finished" && this.updateFinishedPromise(), this.cancelTime = this.startTime, this.holdTime = null, this.state = "running", this.driver.start()
    }
    pause() {
        var e;
        if (!this._resolved) {
            this.pendingPlayState = "paused";
            return
        }
        this.state = "paused", this.holdTime = (e = this.currentTime) !== null && e !== void 0 ? e : 0
    }
    complete() {
        this.state !== "running" && this.play(), this.pendingPlayState = this.state = "finished", this.holdTime = null
    }
    finish() {
        this.teardown(), this.state = "finished";
        const {
            onComplete: e
        } = this.options;
        e && e()
    }
    cancel() {
        this.cancelTime !== null && this.tick(this.cancelTime), this.teardown(), this.updateFinishedPromise()
    }
    teardown() {
        this.state = "idle", this.stopDriver(), this.resolveFinishedPromise(), this.updateFinishedPromise(), this.startTime = this.cancelTime = null, this.resolver.cancel()
    }
    stopDriver() {
        this.driver && (this.driver.stop(), this.driver = void 0)
    }
    sample(e) {
        return this.startTime = 0, this.tick(e, !0)
    }
}
const d2 = new Set(["opacity", "clipPath", "filter", "transform"]);

function f2(t, e, r, {
    delay: i = 0,
    duration: a = 300,
    repeat: l = 0,
    repeatType: c = "loop",
    ease: d = "easeInOut",
    times: h
} = {}) {
    const m = {
        [e]: r
    };
    h && (m.offset = h);
    const g = cx(d, a);
    return Array.isArray(g) && (m.easing = g), t.animate(m, {
        delay: i,
        duration: a,
        easing: Array.isArray(g) ? "linear" : g,
        fill: "both",
        iterations: l + 1,
        direction: c === "reverse" ? "alternate" : "normal"
    })
}
const h2 = Vf(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
    Dl = 10,
    p2 = 2e4;

function m2(t) {
    return eh(t.type) || t.type === "spring" || !ux(t.ease)
}

function g2(t, e) {
    const r = new mh({ ...e,
        keyframes: t,
        repeat: 0,
        delay: 0,
        isGenerator: !0
    });
    let i = {
        done: !1,
        value: t[0]
    };
    const a = [];
    let l = 0;
    for (; !i.done && l < p2;) i = r.sample(l), a.push(i.value), l += Dl;
    return {
        times: void 0,
        keyframes: a,
        duration: l - Dl,
        ease: "linear"
    }
}
const Wx = {
    anticipate: bx,
    backInOut: Sx,
    circInOut: Ex
};

function y2(t) {
    return t in Wx
}
class Zy extends Vx {
    constructor(e) {
        super(e);
        const {
            name: r,
            motionValue: i,
            element: a,
            keyframes: l
        } = this.options;
        this.resolver = new Fx(l, (c, d) => this.onKeyframesResolved(c, d), r, i, a), this.resolver.scheduleResolve()
    }
    initPlayback(e, r) {
        let {
            duration: i = 300,
            times: a,
            ease: l,
            type: c,
            motionValue: d,
            name: h,
            startTime: m
        } = this.options;
        if (!d.owner || !d.owner.current) return !1;
        if (typeof l == "string" && Ol() && y2(l) && (l = Wx[l]), m2(this.options)) {
            const {
                onComplete: y,
                onUpdate: w,
                motionValue: k,
                element: S,
                ...b
            } = this.options, x = g2(e, b);
            e = x.keyframes, e.length === 1 && (e[1] = e[0]), i = x.duration, a = x.times, l = x.ease, c = "keyframes"
        }
        const g = f2(d.owner.current, h, e, { ...this.options,
            duration: i,
            times: a,
            ease: l
        });
        return g.startTime = m ? ? this.calcStartTime(), this.pendingTimeline ? (Iy(g, this.pendingTimeline), this.pendingTimeline = void 0) : g.onfinish = () => {
            const {
                onComplete: y
            } = this.options;
            d.set(eu(e, this.options, r)), y && y(), this.cancel(), this.resolveFinishedPromise()
        }, {
            animation: g,
            duration: i,
            times: a,
            type: c,
            ease: l,
            keyframes: e
        }
    }
    get duration() {
        const {
            resolved: e
        } = this;
        if (!e) return 0;
        const {
            duration: r
        } = e;
        return Hn(r)
    }
    get time() {
        const {
            resolved: e
        } = this;
        if (!e) return 0;
        const {
            animation: r
        } = e;
        return Hn(r.currentTime || 0)
    }
    set time(e) {
        const {
            resolved: r
        } = this;
        if (!r) return;
        const {
            animation: i
        } = r;
        i.currentTime = $n(e)
    }
    get speed() {
        const {
            resolved: e
        } = this;
        if (!e) return 1;
        const {
            animation: r
        } = e;
        return r.playbackRate
    }
    set speed(e) {
        const {
            resolved: r
        } = this;
        if (!r) return;
        const {
            animation: i
        } = r;
        i.playbackRate = e
    }
    get state() {
        const {
            resolved: e
        } = this;
        if (!e) return "idle";
        const {
            animation: r
        } = e;
        return r.playState
    }
    get startTime() {
        const {
            resolved: e
        } = this;
        if (!e) return null;
        const {
            animation: r
        } = e;
        return r.startTime
    }
    attachTimeline(e) {
        if (!this._resolved) this.pendingTimeline = e;
        else {
            const {
                resolved: r
            } = this;
            if (!r) return Ct;
            const {
                animation: i
            } = r;
            Iy(i, e)
        }
        return Ct
    }
    play() {
        if (this.isStopped) return;
        const {
            resolved: e
        } = this;
        if (!e) return;
        const {
            animation: r
        } = e;
        r.playState === "finished" && this.updateFinishedPromise(), r.play()
    }
    pause() {
        const {
            resolved: e
        } = this;
        if (!e) return;
        const {
            animation: r
        } = e;
        r.pause()
    }
    stop() {
        if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle") return;
        this.resolveFinishedPromise(), this.updateFinishedPromise();
        const {
            resolved: e
        } = this;
        if (!e) return;
        const {
            animation: r,
            keyframes: i,
            duration: a,
            type: l,
            ease: c,
            times: d
        } = e;
        if (r.playState === "idle" || r.playState === "finished") return;
        if (this.time) {
            const {
                motionValue: m,
                onUpdate: g,
                onComplete: y,
                element: w,
                ...k
            } = this.options, S = new mh({ ...k,
                keyframes: i,
                duration: a,
                type: l,
                ease: c,
                times: d,
                isGenerator: !0
            }), b = $n(this.time);
            m.setWithVelocity(S.sample(b - Dl).value, S.sample(b).value, Dl)
        }
        const {
            onStop: h
        } = this.options;
        h && h(), this.cancel()
    }
    complete() {
        const {
            resolved: e
        } = this;
        e && e.animation.finish()
    }
    cancel() {
        const {
            resolved: e
        } = this;
        e && e.animation.cancel()
    }
    static supports(e) {
        const {
            motionValue: r,
            name: i,
            repeatDelay: a,
            repeatType: l,
            damping: c,
            type: d
        } = e;
        if (!r || !r.owner || !(r.owner.current instanceof HTMLElement)) return !1;
        const {
            onUpdate: h,
            transformTemplate: m
        } = r.owner.getProps();
        return h2() && i && d2.has(i) && !h && !m && !a && l !== "mirror" && c !== 0 && d !== "inertia"
    }
}
const v2 = {
        type: "spring",
        stiffness: 500,
        damping: 25,
        restSpeed: 10
    },
    w2 = t => ({
        type: "spring",
        stiffness: 550,
        damping: t === 0 ? 2 * Math.sqrt(550) : 30,
        restSpeed: 10
    }),
    x2 = {
        type: "keyframes",
        duration: .8
    },
    S2 = {
        type: "keyframes",
        ease: [.25, .1, .35, 1],
        duration: .3
    },
    b2 = (t, {
        keyframes: e
    }) => e.length > 2 ? x2 : ms.has(t) ? t.startsWith("scale") ? w2(e[1]) : v2 : S2;

function k2({
    when: t,
    delay: e,
    delayChildren: r,
    staggerChildren: i,
    staggerDirection: a,
    repeat: l,
    repeatType: c,
    repeatDelay: d,
    from: h,
    elapsed: m,
    ...g
}) {
    return !!Object.keys(g).length
}
const gh = (t, e, r, i = {}, a, l) => c => {
    const d = Zf(i, t) || {},
        h = d.delay || i.delay || 0;
    let {
        elapsed: m = 0
    } = i;
    m = m - $n(h);
    let g = {
        keyframes: Array.isArray(r) ? r : [null, r],
        ease: "easeOut",
        velocity: e.getVelocity(),
        ...d,
        delay: -m,
        onUpdate: w => {
            e.set(w), d.onUpdate && d.onUpdate(w)
        },
        onComplete: () => {
            c(), d.onComplete && d.onComplete()
        },
        name: t,
        motionValue: e,
        element: l ? void 0 : a
    };
    k2(d) || (g = { ...g,
        ...b2(t, g)
    }), g.duration && (g.duration = $n(g.duration)), g.repeatDelay && (g.repeatDelay = $n(g.repeatDelay)), g.from !== void 0 && (g.keyframes[0] = g.from);
    let y = !1;
    if ((g.type === !1 || g.duration === 0 && !g.repeatDelay) && (g.duration = 0, g.delay === 0 && (y = !0)), y && !l && e.get() !== void 0) {
        const w = eu(g.keyframes, d);
        if (w !== void 0) return Le.update(() => {
            g.onUpdate(w), g.onComplete()
        }), new qR([])
    }
    return !l && Zy.supports(g) ? new Zy(g) : new mh(g)
};

function E2({
    protectedKeys: t,
    needsAnimating: e
}, r) {
    const i = t.hasOwnProperty(r) && e[r] !== !0;
    return e[r] = !1, i
}

function Kx(t, e, {
    delay: r = 0,
    transitionOverride: i,
    type: a
} = {}) {
    var l;
    let {
        transition: c = t.getDefaultTransition(),
        transitionEnd: d,
        ...h
    } = e;
    i && (c = i);
    const m = [],
        g = a && t.animationState && t.animationState.getState()[a];
    for (const y in h) {
        const w = t.getValue(y, (l = t.latestValues[y]) !== null && l !== void 0 ? l : null),
            k = h[y];
        if (k === void 0 || g && E2(g, y)) continue;
        const S = {
            delay: r,
            ...Zf(c || {}, y)
        };
        let b = !1;
        if (window.MotionHandoffAnimation) {
            const R = gx(t);
            if (R) {
                const V = window.MotionHandoffAnimation(R, y, Le);
                V !== null && (S.startTime = V, b = !0)
            }
        }
        rf(t, y), w.start(gh(y, w, k, t.shouldReduceMotion && mx.has(y) ? {
            type: !1
        } : S, t, b));
        const x = w.animation;
        x && m.push(x)
    }
    return d && Promise.all(m).then(() => {
        Le.update(() => {
            d && sA(t, d)
        })
    }), m
}

function df(t, e, r = {}) {
    var i;
    const a = Zl(t, e, r.type === "exit" ? (i = t.presenceContext) === null || i === void 0 ? void 0 : i.custom : void 0);
    let {
        transition: l = t.getDefaultTransition() || {}
    } = a || {};
    r.transitionOverride && (l = r.transitionOverride);
    const c = a ? () => Promise.all(Kx(t, a, r)) : () => Promise.resolve(),
        d = t.variantChildren && t.variantChildren.size ? (m = 0) => {
            const {
                delayChildren: g = 0,
                staggerChildren: y,
                staggerDirection: w
            } = l;
            return T2(t, e, g + m, y, w, r)
        } : () => Promise.resolve(),
        {
            when: h
        } = l;
    if (h) {
        const [m, g] = h === "beforeChildren" ? [c, d] : [d, c];
        return m().then(() => g())
    } else return Promise.all([c(), d(r.delay)])
}

function T2(t, e, r = 0, i = 0, a = 1, l) {
    const c = [],
        d = (t.variantChildren.size - 1) * i,
        h = a === 1 ? (m = 0) => m * i : (m = 0) => d - m * i;
    return Array.from(t.variantChildren).sort(C2).forEach((m, g) => {
        m.notify("AnimationStart", e), c.push(df(m, e, { ...l,
            delay: r + h(g)
        }).then(() => m.notify("AnimationComplete", e)))
    }), Promise.all(c)
}

function C2(t, e) {
    return t.sortNodePosition(e)
}

function P2(t, e, r = {}) {
    t.notify("AnimationStart", e);
    let i;
    if (Array.isArray(e)) {
        const a = e.map(l => df(t, l, r));
        i = Promise.all(a)
    } else if (typeof e == "string") i = df(t, e, r);
    else {
        const a = typeof e == "function" ? Zl(t, e, r.custom) : e;
        i = Promise.all(Kx(t, a, r))
    }
    return i.then(() => {
        t.notify("AnimationComplete", e)
    })
}
const _2 = Uf.length;

function Qx(t) {
    if (!t) return;
    if (!t.isControllingVariants) {
        const r = t.parent ? Qx(t.parent) || {} : {};
        return t.props.initial !== void 0 && (r.initial = t.props.initial), r
    }
    const e = {};
    for (let r = 0; r < _2; r++) {
        const i = Uf[r],
            a = t.props[i];
        (Eo(a) || a === !1) && (e[i] = a)
    }
    return e
}
const R2 = [...Bf].reverse(),
    A2 = Bf.length;

function N2(t) {
    return e => Promise.all(e.map(({
        animation: r,
        options: i
    }) => P2(t, r, i)))
}

function O2(t) {
    let e = N2(t),
        r = ev(),
        i = !0;
    const a = h => (m, g) => {
        var y;
        const w = Zl(t, g, h === "exit" ? (y = t.presenceContext) === null || y === void 0 ? void 0 : y.custom : void 0);
        if (w) {
            const {
                transition: k,
                transitionEnd: S,
                ...b
            } = w;
            m = { ...m,
                ...b,
                ...S
            }
        }
        return m
    };

    function l(h) {
        e = h(t)
    }

    function c(h) {
        const {
            props: m
        } = t, g = Qx(t.parent) || {}, y = [], w = new Set;
        let k = {},
            S = 1 / 0;
        for (let x = 0; x < A2; x++) {
            const R = R2[x],
                V = r[R],
                M = m[R] !== void 0 ? m[R] : g[R],
                L = Eo(M),
                B = R === h ? V.isActive : null;
            B === !1 && (S = x);
            let K = M === g[R] && M !== m[R] && L;
            if (K && i && t.manuallyAnimateOnMount && (K = !1), V.protectedKeys = { ...k
                }, !V.isActive && B === null || !M && !V.prevProp || Xl(M) || typeof M == "boolean") continue;
            const G = L2(V.prevProp, M);
            let j = G || R === h && V.isActive && !K && L || x > S && L,
                J = !1;
            const de = Array.isArray(M) ? M : [M];
            let me = de.reduce(a(R), {});
            B === !1 && (me = {});
            const {
                prevResolvedValues: Ae = {}
            } = V, je = { ...Ae,
                ...me
            }, Ne = fe => {
                j = !0, w.has(fe) && (J = !0, w.delete(fe)), V.needsAnimating[fe] = !0;
                const W = t.getValue(fe);
                W && (W.liveStyle = !1)
            };
            for (const fe in je) {
                const W = me[fe],
                    se = Ae[fe];
                if (k.hasOwnProperty(fe)) continue;
                let U = !1;
                ef(W) && ef(se) ? U = !ix(W, se) : U = W !== se, U ? W != null ? Ne(fe) : w.add(fe) : W !== void 0 && w.has(fe) ? Ne(fe) : V.protectedKeys[fe] = !0
            }
            V.prevProp = M, V.prevResolvedValues = me, V.isActive && (k = { ...k,
                ...me
            }), i && t.blockInitialAnimation && (j = !1), j && (!(K && G) || J) && y.push(...de.map(fe => ({
                animation: fe,
                options: {
                    type: R
                }
            })))
        }
        if (w.size) {
            const x = {};
            w.forEach(R => {
                const V = t.getBaseTarget(R),
                    M = t.getValue(R);
                M && (M.liveStyle = !0), x[R] = V ? ? null
            }), y.push({
                animation: x
            })
        }
        let b = !!y.length;
        return i && (m.initial === !1 || m.initial === m.animate) && !t.manuallyAnimateOnMount && (b = !1), i = !1, b ? e(y) : Promise.resolve()
    }

    function d(h, m) {
        var g;
        if (r[h].isActive === m) return Promise.resolve();
        (g = t.variantChildren) === null || g === void 0 || g.forEach(w => {
            var k;
            return (k = w.animationState) === null || k === void 0 ? void 0 : k.setActive(h, m)
        }), r[h].isActive = m;
        const y = c(h);
        for (const w in r) r[w].protectedKeys = {};
        return y
    }
    return {
        animateChanges: c,
        setActive: d,
        setAnimateFunction: l,
        getState: () => r,
        reset: () => {
            r = ev(), i = !0
        }
    }
}

function L2(t, e) {
    return typeof e == "string" ? e !== t : Array.isArray(e) ? !ix(e, t) : !1
}

function Kr(t = !1) {
    return {
        isActive: t,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}

function ev() {
    return {
        animate: Kr(!0),
        whileInView: Kr(),
        whileHover: Kr(),
        whileTap: Kr(),
        whileDrag: Kr(),
        whileFocus: Kr(),
        exit: Kr()
    }
}
class Nr {
    constructor(e) {
        this.isMounted = !1, this.node = e
    }
    update() {}
}
class M2 extends Nr {
    constructor(e) {
        super(e), e.animationState || (e.animationState = O2(e))
    }
    updateAnimationControlsSubscription() {
        const {
            animate: e
        } = this.node.getProps();
        Xl(e) && (this.unmountControls = e.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {
            animate: e
        } = this.node.getProps(), {
            animate: r
        } = this.node.prevProps || {};
        e !== r && this.updateAnimationControlsSubscription()
    }
    unmount() {
        var e;
        this.node.animationState.reset(), (e = this.unmountControls) === null || e === void 0 || e.call(this)
    }
}
let D2 = 0;
class j2 extends Nr {
    constructor() {
        super(...arguments), this.id = D2++
    }
    update() {
        if (!this.node.presenceContext) return;
        const {
            isPresent: e,
            onExitComplete: r
        } = this.node.presenceContext, {
            isPresent: i
        } = this.node.prevPresenceContext || {};
        if (!this.node.animationState || e === i) return;
        const a = this.node.animationState.setActive("exit", !e);
        r && !e && a.then(() => r(this.id))
    }
    mount() {
        const {
            register: e
        } = this.node.presenceContext || {};
        e && (this.unmount = e(this.id))
    }
    unmount() {}
}
const I2 = {
    animation: {
        Feature: M2
    },
    exit: {
        Feature: j2
    }
};

function Po(t, e, r, i = {
    passive: !0
}) {
    return t.addEventListener(e, r, i), () => t.removeEventListener(e, r)
}

function $o(t) {
    return {
        point: {
            x: t.pageX,
            y: t.pageY
        }
    }
}
const F2 = t => e => nh(e) && t(e, $o(e));

function vo(t, e, r, i) {
    return Po(t, e, F2(r), i)
}
const tv = (t, e) => Math.abs(t - e);

function V2(t, e) {
    const r = tv(t.x, e.x),
        i = tv(t.y, e.y);
    return Math.sqrt(r ** 2 + i ** 2)
}
class Gx {
    constructor(e, r, {
        transformPagePoint: i,
        contextWindow: a,
        dragSnapToOrigin: l = !1
    } = {}) {
        if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
                if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                const y = vd(this.lastMoveEventInfo, this.history),
                    w = this.startEvent !== null,
                    k = V2(y.offset, {
                        x: 0,
                        y: 0
                    }) >= 3;
                if (!w && !k) return;
                const {
                    point: S
                } = y, {
                    timestamp: b
                } = lt;
                this.history.push({ ...S,
                    timestamp: b
                });
                const {
                    onStart: x,
                    onMove: R
                } = this.handlers;
                w || (x && x(this.lastMoveEvent, y), this.startEvent = this.lastMoveEvent), R && R(this.lastMoveEvent, y)
            }, this.handlePointerMove = (y, w) => {
                this.lastMoveEvent = y, this.lastMoveEventInfo = yd(w, this.transformPagePoint), Le.update(this.updatePoint, !0)
            }, this.handlePointerUp = (y, w) => {
                this.end();
                const {
                    onEnd: k,
                    onSessionEnd: S,
                    resumeAnimation: b
                } = this.handlers;
                if (this.dragSnapToOrigin && b && b(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                const x = vd(y.type === "pointercancel" ? this.lastMoveEventInfo : yd(w, this.transformPagePoint), this.history);
                this.startEvent && k && k(y, x), S && S(y, x)
            }, !nh(e)) return;
        this.dragSnapToOrigin = l, this.handlers = r, this.transformPagePoint = i, this.contextWindow = a || window;
        const c = $o(e),
            d = yd(c, this.transformPagePoint),
            {
                point: h
            } = d,
            {
                timestamp: m
            } = lt;
        this.history = [{ ...h,
            timestamp: m
        }];
        const {
            onSessionStart: g
        } = r;
        g && g(e, vd(d, this.history)), this.removeListeners = zo(vo(this.contextWindow, "pointermove", this.handlePointerMove), vo(this.contextWindow, "pointerup", this.handlePointerUp), vo(this.contextWindow, "pointercancel", this.handlePointerUp))
    }
    updateHandlers(e) {
        this.handlers = e
    }
    end() {
        this.removeListeners && this.removeListeners(), hn(this.updatePoint)
    }
}

function yd(t, e) {
    return e ? {
        point: e(t.point)
    } : t
}

function nv(t, e) {
    return {
        x: t.x - e.x,
        y: t.y - e.y
    }
}

function vd({
    point: t
}, e) {
    return {
        point: t,
        delta: nv(t, Yx(e)),
        offset: nv(t, B2(e)),
        velocity: U2(e, .1)
    }
}

function B2(t) {
    return t[0]
}

function Yx(t) {
    return t[t.length - 1]
}

function U2(t, e) {
    if (t.length < 2) return {
        x: 0,
        y: 0
    };
    let r = t.length - 1,
        i = null;
    const a = Yx(t);
    for (; r >= 0 && (i = t[r], !(a.timestamp - i.timestamp > $n(e)));) r--;
    if (!i) return {
        x: 0,
        y: 0
    };
    const l = Hn(a.timestamp - i.timestamp);
    if (l === 0) return {
        x: 0,
        y: 0
    };
    const c = {
        x: (a.x - i.x) / l,
        y: (a.y - i.y) / l
    };
    return c.x === 1 / 0 && (c.x = 0), c.y === 1 / 0 && (c.y = 0), c
}
const Xx = 1e-4,
    z2 = 1 - Xx,
    $2 = 1 + Xx,
    Jx = .01,
    H2 = 0 - Jx,
    q2 = 0 + Jx;

function zt(t) {
    return t.max - t.min
}

function W2(t, e, r) {
    return Math.abs(t - e) <= r
}

function rv(t, e, r, i = .5) {
    t.origin = i, t.originPoint = qe(e.min, e.max, t.origin), t.scale = zt(r) / zt(e), t.translate = qe(r.min, r.max, t.origin) - t.originPoint, (t.scale >= z2 && t.scale <= $2 || isNaN(t.scale)) && (t.scale = 1), (t.translate >= H2 && t.translate <= q2 || isNaN(t.translate)) && (t.translate = 0)
}

function wo(t, e, r, i) {
    rv(t.x, e.x, r.x, i ? i.originX : void 0), rv(t.y, e.y, r.y, i ? i.originY : void 0)
}

function sv(t, e, r) {
    t.min = r.min + e.min, t.max = t.min + zt(e)
}

function K2(t, e, r) {
    sv(t.x, e.x, r.x), sv(t.y, e.y, r.y)
}

function iv(t, e, r) {
    t.min = e.min - r.min, t.max = t.min + zt(e)
}

function xo(t, e, r) {
    iv(t.x, e.x, r.x), iv(t.y, e.y, r.y)
}

function Q2(t, {
    min: e,
    max: r
}, i) {
    return e !== void 0 && t < e ? t = i ? qe(e, t, i.min) : Math.max(t, e) : r !== void 0 && t > r && (t = i ? qe(r, t, i.max) : Math.min(t, r)), t
}

function ov(t, e, r) {
    return {
        min: e !== void 0 ? t.min + e : void 0,
        max: r !== void 0 ? t.max + r - (t.max - t.min) : void 0
    }
}

function G2(t, {
    top: e,
    left: r,
    bottom: i,
    right: a
}) {
    return {
        x: ov(t.x, r, a),
        y: ov(t.y, e, i)
    }
}

function av(t, e) {
    let r = e.min - t.min,
        i = e.max - t.max;
    return e.max - e.min < t.max - t.min && ([r, i] = [i, r]), {
        min: r,
        max: i
    }
}

function Y2(t, e) {
    return {
        x: av(t.x, e.x),
        y: av(t.y, e.y)
    }
}

function X2(t, e) {
    let r = .5;
    const i = zt(t),
        a = zt(e);
    return a > i ? r = hs(e.min, e.max - i, t.min) : i > a && (r = hs(t.min, t.max - a, e.min)), _n(0, 1, r)
}

function J2(t, e) {
    const r = {};
    return e.min !== void 0 && (r.min = e.min - t.min), e.max !== void 0 && (r.max = e.max - t.min), r
}
const ff = .35;

function Z2(t = ff) {
    return t === !1 ? t = 0 : t === !0 && (t = ff), {
        x: lv(t, "left", "right"),
        y: lv(t, "top", "bottom")
    }
}

function lv(t, e, r) {
    return {
        min: uv(t, e),
        max: uv(t, r)
    }
}

function uv(t, e) {
    return typeof t == "number" ? t : t[e] || 0
}
const cv = () => ({
        translate: 0,
        scale: 1,
        origin: 0,
        originPoint: 0
    }),
    Hs = () => ({
        x: cv(),
        y: cv()
    }),
    dv = () => ({
        min: 0,
        max: 0
    }),
    Xe = () => ({
        x: dv(),
        y: dv()
    });

function Xt(t) {
    return [t("x"), t("y")]
}

function Zx({
    top: t,
    left: e,
    right: r,
    bottom: i
}) {
    return {
        x: {
            min: e,
            max: r
        },
        y: {
            min: t,
            max: i
        }
    }
}

function eN({
    x: t,
    y: e
}) {
    return {
        top: e.min,
        right: t.max,
        bottom: e.max,
        left: t.min
    }
}

function tN(t, e) {
    if (!e) return t;
    const r = e({
            x: t.left,
            y: t.top
        }),
        i = e({
            x: t.right,
            y: t.bottom
        });
    return {
        top: r.y,
        left: r.x,
        bottom: i.y,
        right: i.x
    }
}

function wd(t) {
    return t === void 0 || t === 1
}

function hf({
    scale: t,
    scaleX: e,
    scaleY: r
}) {
    return !wd(t) || !wd(e) || !wd(r)
}

function Qr(t) {
    return hf(t) || e1(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY
}

function e1(t) {
    return fv(t.x) || fv(t.y)
}

function fv(t) {
    return t && t !== "0%"
}

function jl(t, e, r) {
    const i = t - r,
        a = e * i;
    return r + a
}

function hv(t, e, r, i, a) {
    return a !== void 0 && (t = jl(t, a, i)), jl(t, r, i) + e
}

function pf(t, e = 0, r = 1, i, a) {
    t.min = hv(t.min, e, r, i, a), t.max = hv(t.max, e, r, i, a)
}

function t1(t, {
    x: e,
    y: r
}) {
    pf(t.x, e.translate, e.scale, e.originPoint), pf(t.y, r.translate, r.scale, r.originPoint)
}
const pv = .999999999999,
    mv = 1.0000000000001;

function nN(t, e, r, i = !1) {
    const a = r.length;
    if (!a) return;
    e.x = e.y = 1;
    let l, c;
    for (let d = 0; d < a; d++) {
        l = r[d], c = l.projectionDelta;
        const {
            visualElement: h
        } = l.options;
        h && h.props.style && h.props.style.display === "contents" || (i && l.options.layoutScroll && l.scroll && l !== l.root && Ws(t, {
            x: -l.scroll.offset.x,
            y: -l.scroll.offset.y
        }), c && (e.x *= c.x.scale, e.y *= c.y.scale, t1(t, c)), i && Qr(l.latestValues) && Ws(t, l.latestValues))
    }
    e.x < mv && e.x > pv && (e.x = 1), e.y < mv && e.y > pv && (e.y = 1)
}

function qs(t, e) {
    t.min = t.min + e, t.max = t.max + e
}

function gv(t, e, r, i, a = .5) {
    const l = qe(t.min, t.max, a);
    pf(t, e, r, l, i)
}

function Ws(t, e) {
    gv(t.x, e.x, e.scaleX, e.scale, e.originX), gv(t.y, e.y, e.scaleY, e.scale, e.originY)
}

function n1(t, e) {
    return Zx(tN(t.getBoundingClientRect(), e))
}

function rN(t, e, r) {
    const i = n1(t, r),
        {
            scroll: a
        } = e;
    return a && (qs(i.x, a.offset.x), qs(i.y, a.offset.y)), i
}
const r1 = ({
        current: t
    }) => t ? t.ownerDocument.defaultView : null,
    sN = new WeakMap;
class iN {
    constructor(e) {
        this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
            x: 0,
            y: 0
        }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = Xe(), this.visualElement = e
    }
    start(e, {
        snapToCursor: r = !1
    } = {}) {
        const {
            presenceContext: i
        } = this.visualElement;
        if (i && i.isPresent === !1) return;
        const a = g => {
                const {
                    dragSnapToOrigin: y
                } = this.getProps();
                y ? this.pauseAnimation() : this.stopAnimation(), r && this.snapToCursor($o(g).point)
            },
            l = (g, y) => {
                const {
                    drag: w,
                    dragPropagation: k,
                    onDragStart: S
                } = this.getProps();
                if (w && !k && (this.openDragLock && this.openDragLock(), this.openDragLock = ZR(w), !this.openDragLock)) return;
                this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), Xt(x => {
                    let R = this.getAxisMotionValue(x).get() || 0;
                    if (Tn.test(R)) {
                        const {
                            projection: V
                        } = this.visualElement;
                        if (V && V.layout) {
                            const M = V.layout.layoutBox[x];
                            M && (R = zt(M) * (parseFloat(R) / 100))
                        }
                    }
                    this.originPoint[x] = R
                }), S && Le.postRender(() => S(g, y)), rf(this.visualElement, "transform");
                const {
                    animationState: b
                } = this.visualElement;
                b && b.setActive("whileDrag", !0)
            },
            c = (g, y) => {
                const {
                    dragPropagation: w,
                    dragDirectionLock: k,
                    onDirectionLock: S,
                    onDrag: b
                } = this.getProps();
                if (!w && !this.openDragLock) return;
                const {
                    offset: x
                } = y;
                if (k && this.currentDirection === null) {
                    this.currentDirection = oN(x), this.currentDirection !== null && S && S(this.currentDirection);
                    return
                }
                this.updateAxis("x", y.point, x), this.updateAxis("y", y.point, x), this.visualElement.render(), b && b(g, y)
            },
            d = (g, y) => this.stop(g, y),
            h = () => Xt(g => {
                var y;
                return this.getAnimationState(g) === "paused" && ((y = this.getAxisMotionValue(g).animation) === null || y === void 0 ? void 0 : y.play())
            }),
            {
                dragSnapToOrigin: m
            } = this.getProps();
        this.panSession = new Gx(e, {
            onSessionStart: a,
            onStart: l,
            onMove: c,
            onSessionEnd: d,
            resumeAnimation: h
        }, {
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: m,
            contextWindow: r1(this.visualElement)
        })
    }
    stop(e, r) {
        const i = this.isDragging;
        if (this.cancel(), !i) return;
        const {
            velocity: a
        } = r;
        this.startAnimation(a);
        const {
            onDragEnd: l
        } = this.getProps();
        l && Le.postRender(() => l(e, r))
    }
    cancel() {
        this.isDragging = !1;
        const {
            projection: e,
            animationState: r
        } = this.visualElement;
        e && (e.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
        const {
            dragPropagation: i
        } = this.getProps();
        !i && this.openDragLock && (this.openDragLock(), this.openDragLock = null), r && r.setActive("whileDrag", !1)
    }
    updateAxis(e, r, i) {
        const {
            drag: a
        } = this.getProps();
        if (!i || !ul(e, a, this.currentDirection)) return;
        const l = this.getAxisMotionValue(e);
        let c = this.originPoint[e] + i[e];
        this.constraints && this.constraints[e] && (c = Q2(c, this.constraints[e], this.elastic[e])), l.set(c)
    }
    resolveConstraints() {
        var e;
        const {
            dragConstraints: r,
            dragElastic: i
        } = this.getProps(), a = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (e = this.visualElement.projection) === null || e === void 0 ? void 0 : e.layout, l = this.constraints;
        r && zs(r) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : r && a ? this.constraints = G2(a.layoutBox, r) : this.constraints = !1, this.elastic = Z2(i), l !== this.constraints && a && this.constraints && !this.hasMutatedConstraints && Xt(c => {
            this.constraints !== !1 && this.getAxisMotionValue(c) && (this.constraints[c] = J2(a.layoutBox[c], this.constraints[c]))
        })
    }
    resolveRefConstraints() {
        const {
            dragConstraints: e,
            onMeasureDragConstraints: r
        } = this.getProps();
        if (!e || !zs(e)) return !1;
        const i = e.current,
            {
                projection: a
            } = this.visualElement;
        if (!a || !a.layout) return !1;
        const l = rN(i, a.root, this.visualElement.getTransformPagePoint());
        let c = Y2(a.layout.layoutBox, l);
        if (r) {
            const d = r(eN(c));
            this.hasMutatedConstraints = !!d, d && (c = Zx(d))
        }
        return c
    }
    startAnimation(e) {
        const {
            drag: r,
            dragMomentum: i,
            dragElastic: a,
            dragTransition: l,
            dragSnapToOrigin: c,
            onDragTransitionEnd: d
        } = this.getProps(), h = this.constraints || {}, m = Xt(g => {
            if (!ul(g, r, this.currentDirection)) return;
            let y = h && h[g] || {};
            c && (y = {
                min: 0,
                max: 0
            });
            const w = a ? 200 : 1e6,
                k = a ? 40 : 1e7,
                S = {
                    type: "inertia",
                    velocity: i ? e[g] : 0,
                    bounceStiffness: w,
                    bounceDamping: k,
                    timeConstant: 750,
                    restDelta: 1,
                    restSpeed: 10,
                    ...l,
                    ...y
                };
            return this.startAxisValueAnimation(g, S)
        });
        return Promise.all(m).then(d)
    }
    startAxisValueAnimation(e, r) {
        const i = this.getAxisMotionValue(e);
        return rf(this.visualElement, e), i.start(gh(e, i, 0, r, this.visualElement, !1))
    }
    stopAnimation() {
        Xt(e => this.getAxisMotionValue(e).stop())
    }
    pauseAnimation() {
        Xt(e => {
            var r;
            return (r = this.getAxisMotionValue(e).animation) === null || r === void 0 ? void 0 : r.pause()
        })
    }
    getAnimationState(e) {
        var r;
        return (r = this.getAxisMotionValue(e).animation) === null || r === void 0 ? void 0 : r.state
    }
    getAxisMotionValue(e) {
        const r = `_drag${e.toUpperCase()}`,
            i = this.visualElement.getProps(),
            a = i[r];
        return a || this.visualElement.getValue(e, (i.initial ? i.initial[e] : void 0) || 0)
    }
    snapToCursor(e) {
        Xt(r => {
            const {
                drag: i
            } = this.getProps();
            if (!ul(r, i, this.currentDirection)) return;
            const {
                projection: a
            } = this.visualElement, l = this.getAxisMotionValue(r);
            if (a && a.layout) {
                const {
                    min: c,
                    max: d
                } = a.layout.layoutBox[r];
                l.set(e[r] - qe(c, d, .5))
            }
        })
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current) return;
        const {
            drag: e,
            dragConstraints: r
        } = this.getProps(), {
            projection: i
        } = this.visualElement;
        if (!zs(r) || !i || !this.constraints) return;
        this.stopAnimation();
        const a = {
            x: 0,
            y: 0
        };
        Xt(c => {
            const d = this.getAxisMotionValue(c);
            if (d && this.constraints !== !1) {
                const h = d.get();
                a[c] = X2({
                    min: h,
                    max: h
                }, this.constraints[c])
            }
        });
        const {
            transformTemplate: l
        } = this.visualElement.getProps();
        this.visualElement.current.style.transform = l ? l({}, "") : "none", i.root && i.root.updateScroll(), i.updateLayout(), this.resolveConstraints(), Xt(c => {
            if (!ul(c, e, null)) return;
            const d = this.getAxisMotionValue(c),
                {
                    min: h,
                    max: m
                } = this.constraints[c];
            d.set(qe(h, m, a[c]))
        })
    }
    addListeners() {
        if (!this.visualElement.current) return;
        sN.set(this.visualElement, this);
        const e = this.visualElement.current,
            r = vo(e, "pointerdown", h => {
                const {
                    drag: m,
                    dragListener: g = !0
                } = this.getProps();
                m && g && this.start(h)
            }),
            i = () => {
                const {
                    dragConstraints: h
                } = this.getProps();
                zs(h) && h.current && (this.constraints = this.resolveRefConstraints())
            },
            {
                projection: a
            } = this.visualElement,
            l = a.addEventListener("measure", i);
        a && !a.layout && (a.root && a.root.updateScroll(), a.updateLayout()), Le.read(i);
        const c = Po(window, "resize", () => this.scalePositionWithinConstraints()),
            d = a.addEventListener("didUpdate", (({
                delta: h,
                hasLayoutChanged: m
            }) => {
                this.isDragging && m && (Xt(g => {
                    const y = this.getAxisMotionValue(g);
                    y && (this.originPoint[g] += h[g].translate, y.set(y.get() + h[g].translate))
                }), this.visualElement.render())
            }));
        return () => {
            c(), r(), l(), d && d()
        }
    }
    getProps() {
        const e = this.visualElement.getProps(),
            {
                drag: r = !1,
                dragDirectionLock: i = !1,
                dragPropagation: a = !1,
                dragConstraints: l = !1,
                dragElastic: c = ff,
                dragMomentum: d = !0
            } = e;
        return { ...e,
            drag: r,
            dragDirectionLock: i,
            dragPropagation: a,
            dragConstraints: l,
            dragElastic: c,
            dragMomentum: d
        }
    }
}

function ul(t, e, r) {
    return (e === !0 || e === t) && (r === null || r === t)
}

function oN(t, e = 10) {
    let r = null;
    return Math.abs(t.y) > e ? r = "y" : Math.abs(t.x) > e && (r = "x"), r
}
class aN extends Nr {
    constructor(e) {
        super(e), this.removeGroupControls = Ct, this.removeListeners = Ct, this.controls = new iN(e)
    }
    mount() {
        const {
            dragControls: e
        } = this.node.getProps();
        e && (this.removeGroupControls = e.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || Ct
    }
    unmount() {
        this.removeGroupControls(), this.removeListeners()
    }
}
const yv = t => (e, r) => {
    t && Le.postRender(() => t(e, r))
};
class lN extends Nr {
    constructor() {
        super(...arguments), this.removePointerDownListener = Ct
    }
    onPointerDown(e) {
        this.session = new Gx(e, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: r1(this.node)
        })
    }
    createPanHandlers() {
        const {
            onPanSessionStart: e,
            onPanStart: r,
            onPan: i,
            onPanEnd: a
        } = this.node.getProps();
        return {
            onSessionStart: yv(e),
            onStart: yv(r),
            onMove: i,
            onEnd: (l, c) => {
                delete this.session, a && Le.postRender(() => a(l, c))
            }
        }
    }
    mount() {
        this.removePointerDownListener = vo(this.node.current, "pointerdown", e => this.onPointerDown(e))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(), this.session && this.session.end()
    }
}
const Sl = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
};

function vv(t, e) {
    return e.max === e.min ? 0 : t / (e.max - e.min) * 100
}
const so = {
        correct: (t, e) => {
            if (!e.target) return t;
            if (typeof t == "string")
                if (ce.test(t)) t = parseFloat(t);
                else return t;
            const r = vv(t, e.target.x),
                i = vv(t, e.target.y);
            return `${r}% ${i}%`
        }
    },
    uN = {
        correct: (t, {
            treeScale: e,
            projectionDelta: r
        }) => {
            const i = t,
                a = Rr.parse(t);
            if (a.length > 5) return i;
            const l = Rr.createTransformer(t),
                c = typeof a[0] != "number" ? 1 : 0,
                d = r.x.scale * e.x,
                h = r.y.scale * e.y;
            a[0 + c] /= d, a[1 + c] /= h;
            const m = qe(d, h, .5);
            return typeof a[2 + c] == "number" && (a[2 + c] /= m), typeof a[3 + c] == "number" && (a[3 + c] /= m), l(a)
        }
    };
class cN extends D.Component {
    componentDidMount() {
        const {
            visualElement: e,
            layoutGroup: r,
            switchLayoutGroup: i,
            layoutId: a
        } = this.props, {
            projection: l
        } = e;
        MR(dN), l && (r.group && r.group.add(l), i && i.register && a && i.register(l), l.root.didUpdate(), l.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }), l.setOptions({ ...l.options,
            onExitComplete: () => this.safeToRemove()
        })), Sl.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(e) {
        const {
            layoutDependency: r,
            visualElement: i,
            drag: a,
            isPresent: l
        } = this.props, c = i.projection;
        return c && (c.isPresent = l, a || e.layoutDependency !== r || r === void 0 ? c.willUpdate() : this.safeToRemove(), e.isPresent !== l && (l ? c.promote() : c.relegate() || Le.postRender(() => {
            const d = c.getStack();
            (!d || !d.members.length) && this.safeToRemove()
        }))), null
    }
    componentDidUpdate() {
        const {
            projection: e
        } = this.props.visualElement;
        e && (e.root.didUpdate(), $f.postRender(() => {
            !e.currentAnimation && e.isLead() && this.safeToRemove()
        }))
    }
    componentWillUnmount() {
        const {
            visualElement: e,
            layoutGroup: r,
            switchLayoutGroup: i
        } = this.props, {
            projection: a
        } = e;
        a && (a.scheduleCheckAfterUnmount(), r && r.group && r.group.remove(a), i && i.deregister && i.deregister(a))
    }
    safeToRemove() {
        const {
            safeToRemove: e
        } = this.props;
        e && e()
    }
    render() {
        return null
    }
}

function s1(t) {
    const [e, r] = Vw(), i = D.useContext(If);
    return T.jsx(cN, { ...t,
        layoutGroup: i,
        switchLayoutGroup: D.useContext(Ww),
        isPresent: e,
        safeToRemove: r
    })
}
const dN = {
    borderRadius: { ...so,
        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
    },
    borderTopLeftRadius: so,
    borderTopRightRadius: so,
    borderBottomLeftRadius: so,
    borderBottomRightRadius: so,
    boxShadow: uN
};

function fN(t, e, r) {
    const i = St(t) ? t : kn(t);
    return i.start(gh("", i, e, r)), i.animation
}

function hN(t) {
    return t instanceof SVGElement && t.tagName !== "svg"
}
const pN = (t, e) => t.depth - e.depth;
class mN {
    constructor() {
        this.children = [], this.isDirty = !1
    }
    add(e) {
        rh(this.children, e), this.isDirty = !0
    }
    remove(e) {
        sh(this.children, e), this.isDirty = !0
    }
    forEach(e) {
        this.isDirty && this.children.sort(pN), this.isDirty = !1, this.children.forEach(e)
    }
}

function gN(t, e) {
    const r = Cn.now(),
        i = ({
            timestamp: a
        }) => {
            const l = a - r;
            l >= e && (hn(i), t(l - e))
        };
    return Le.read(i, !0), () => hn(i)
}
const i1 = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
    yN = i1.length,
    wv = t => typeof t == "string" ? parseFloat(t) : t,
    xv = t => typeof t == "number" || ce.test(t);

function vN(t, e, r, i, a, l) {
    a ? (t.opacity = qe(0, r.opacity !== void 0 ? r.opacity : 1, wN(i)), t.opacityExit = qe(e.opacity !== void 0 ? e.opacity : 1, 0, xN(i))) : l && (t.opacity = qe(e.opacity !== void 0 ? e.opacity : 1, r.opacity !== void 0 ? r.opacity : 1, i));
    for (let c = 0; c < yN; c++) {
        const d = `border${i1[c]}Radius`;
        let h = Sv(e, d),
            m = Sv(r, d);
        if (h === void 0 && m === void 0) continue;
        h || (h = 0), m || (m = 0), h === 0 || m === 0 || xv(h) === xv(m) ? (t[d] = Math.max(qe(wv(h), wv(m), i), 0), (Tn.test(m) || Tn.test(h)) && (t[d] += "%")) : t[d] = m
    }(e.rotate || r.rotate) && (t.rotate = qe(e.rotate || 0, r.rotate || 0, i))
}

function Sv(t, e) {
    return t[e] !== void 0 ? t[e] : t.borderRadius
}
const wN = o1(0, .5, kx),
    xN = o1(.5, .95, Ct);

function o1(t, e, r) {
    return i => i < t ? 0 : i > e ? 1 : r(hs(t, e, i))
}

function bv(t, e) {
    t.min = e.min, t.max = e.max
}

function Yt(t, e) {
    bv(t.x, e.x), bv(t.y, e.y)
}

function kv(t, e) {
    t.translate = e.translate, t.scale = e.scale, t.originPoint = e.originPoint, t.origin = e.origin
}

function Ev(t, e, r, i, a) {
    return t -= e, t = jl(t, 1 / r, i), a !== void 0 && (t = jl(t, 1 / a, i)), t
}

function SN(t, e = 0, r = 1, i = .5, a, l = t, c = t) {
    if (Tn.test(e) && (e = parseFloat(e), e = qe(c.min, c.max, e / 100) - c.min), typeof e != "number") return;
    let d = qe(l.min, l.max, i);
    t === l && (d -= e), t.min = Ev(t.min, e, r, d, a), t.max = Ev(t.max, e, r, d, a)
}

function Tv(t, e, [r, i, a], l, c) {
    SN(t, e[r], e[i], e[a], e.scale, l, c)
}
const bN = ["x", "scaleX", "originX"],
    kN = ["y", "scaleY", "originY"];

function Cv(t, e, r, i) {
    Tv(t.x, e, bN, r ? r.x : void 0, i ? i.x : void 0), Tv(t.y, e, kN, r ? r.y : void 0, i ? i.y : void 0)
}

function Pv(t) {
    return t.translate === 0 && t.scale === 1
}

function a1(t) {
    return Pv(t.x) && Pv(t.y)
}

function _v(t, e) {
    return t.min === e.min && t.max === e.max
}

function EN(t, e) {
    return _v(t.x, e.x) && _v(t.y, e.y)
}

function Rv(t, e) {
    return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max)
}

function l1(t, e) {
    return Rv(t.x, e.x) && Rv(t.y, e.y)
}

function Av(t) {
    return zt(t.x) / zt(t.y)
}

function Nv(t, e) {
    return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint
}
class TN {
    constructor() {
        this.members = []
    }
    add(e) {
        rh(this.members, e), e.scheduleRender()
    }
    remove(e) {
        if (sh(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
            const r = this.members[this.members.length - 1];
            r && this.promote(r)
        }
    }
    relegate(e) {
        const r = this.members.findIndex(a => e === a);
        if (r === 0) return !1;
        let i;
        for (let a = r; a >= 0; a--) {
            const l = this.members[a];
            if (l.isPresent !== !1) {
                i = l;
                break
            }
        }
        return i ? (this.promote(i), !0) : !1
    }
    promote(e, r) {
        const i = this.lead;
        if (e !== i && (this.prevLead = i, this.lead = e, e.show(), i)) {
            i.instance && i.scheduleRender(), e.scheduleRender(), e.resumeFrom = i, r && (e.resumeFrom.preserveOpacity = !0), i.snapshot && (e.snapshot = i.snapshot, e.snapshot.latestValues = i.animationValues || i.latestValues), e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
            const {
                crossfade: a
            } = e.options;
            a === !1 && i.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(e => {
            const {
                options: r,
                resumingFrom: i
            } = e;
            r.onExitComplete && r.onExitComplete(), i && i.options.onExitComplete && i.options.onExitComplete()
        })
    }
    scheduleRender() {
        this.members.forEach(e => {
            e.instance && e.scheduleRender(!1)
        })
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}

function CN(t, e, r) {
    let i = "";
    const a = t.x.translate / e.x,
        l = t.y.translate / e.y,
        c = (r == null ? void 0 : r.z) || 0;
    if ((a || l || c) && (i = `translate3d(${a}px, ${l}px, ${c}px) `), (e.x !== 1 || e.y !== 1) && (i += `scale(${1/e.x}, ${1/e.y}) `), r) {
        const {
            transformPerspective: m,
            rotate: g,
            rotateX: y,
            rotateY: w,
            skewX: k,
            skewY: S
        } = r;
        m && (i = `perspective(${m}px) ${i}`), g && (i += `rotate(${g}deg) `), y && (i += `rotateX(${y}deg) `), w && (i += `rotateY(${w}deg) `), k && (i += `skewX(${k}deg) `), S && (i += `skewY(${S}deg) `)
    }
    const d = t.x.scale * e.x,
        h = t.y.scale * e.y;
    return (d !== 1 || h !== 1) && (i += `scale(${d}, ${h})`), i || "none"
}
const Gr = {
        type: "projectionFrame",
        totalNodes: 0,
        resolvedTargetDeltas: 0,
        recalculatedProjection: 0
    },
    ho = typeof window < "u" && window.MotionDebug !== void 0,
    xd = ["", "X", "Y", "Z"],
    PN = {
        visibility: "hidden"
    },
    Ov = 1e3;
let _N = 0;

function Sd(t, e, r, i) {
    const {
        latestValues: a
    } = e;
    a[t] && (r[t] = a[t], e.setStaticValue(t, 0), i && (i[t] = 0))
}

function u1(t) {
    if (t.hasCheckedOptimisedAppear = !0, t.root === t) return;
    const {
        visualElement: e
    } = t.options;
    if (!e) return;
    const r = gx(e);
    if (window.MotionHasOptimisedAnimation(r, "transform")) {
        const {
            layout: a,
            layoutId: l
        } = t.options;
        window.MotionCancelOptimisedAnimation(r, "transform", Le, !(a || l))
    }
    const {
        parent: i
    } = t;
    i && !i.hasCheckedOptimisedAppear && u1(i)
}

function c1({
    attachResizeListener: t,
    defaultParent: e,
    measureScroll: r,
    checkIsScrollRoot: i,
    resetTransform: a
}) {
    return class {
        constructor(c = {}, d = e == null ? void 0 : e()) {
            this.id = _N++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
                x: 1,
                y: 1
            }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
            }, this.updateProjection = () => {
                this.projectionUpdateScheduled = !1, ho && (Gr.totalNodes = Gr.resolvedTargetDeltas = Gr.recalculatedProjection = 0), this.nodes.forEach(NN), this.nodes.forEach(jN), this.nodes.forEach(IN), this.nodes.forEach(ON), ho && window.MotionDebug.record(Gr)
            }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = c, this.root = d ? d.root || d : this, this.path = d ? [...d.path, d] : [], this.parent = d, this.depth = d ? d.depth + 1 : 0;
            for (let h = 0; h < this.path.length; h++) this.path[h].shouldResetTransform = !0;
            this.root === this && (this.nodes = new mN)
        }
        addEventListener(c, d) {
            return this.eventHandlers.has(c) || this.eventHandlers.set(c, new ih), this.eventHandlers.get(c).add(d)
        }
        notifyListeners(c, ...d) {
            const h = this.eventHandlers.get(c);
            h && h.notify(...d)
        }
        hasListeners(c) {
            return this.eventHandlers.has(c)
        }
        mount(c, d = this.root.hasTreeAnimated) {
            if (this.instance) return;
            this.isSVG = hN(c), this.instance = c;
            const {
                layoutId: h,
                layout: m,
                visualElement: g
            } = this.options;
            if (g && !g.current && g.mount(c), this.root.nodes.add(this), this.parent && this.parent.children.add(this), d && (m || h) && (this.isLayoutDirty = !0), t) {
                let y;
                const w = () => this.root.updateBlockedByResize = !1;
                t(c, () => {
                    this.root.updateBlockedByResize = !0, y && y(), y = gN(w, 250), Sl.hasAnimatedSinceResize && (Sl.hasAnimatedSinceResize = !1, this.nodes.forEach(Mv))
                })
            }
            h && this.root.registerSharedNode(h, this), this.options.animate !== !1 && g && (h || m) && this.addEventListener("didUpdate", ({
                delta: y,
                hasLayoutChanged: w,
                hasRelativeTargetChanged: k,
                layout: S
            }) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0, this.relativeTarget = void 0;
                    return
                }
                const b = this.options.transition || g.getDefaultTransition() || zN,
                    {
                        onLayoutAnimationStart: x,
                        onLayoutAnimationComplete: R
                    } = g.getProps(),
                    V = !this.targetLayout || !l1(this.targetLayout, S) || k,
                    M = !w && k;
                if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || M || w && (V || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(y, M);
                    const L = { ...Zf(b, "layout"),
                        onPlay: x,
                        onComplete: R
                    };
                    (g.shouldReduceMotion || this.options.layoutRoot) && (L.delay = 0, L.type = !1), this.startAnimation(L)
                } else w || Mv(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = S
            })
        }
        unmount() {
            this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
            const c = this.getStack();
            c && c.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, hn(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(FN), this.animationId++)
        }
        getTransformTemplate() {
            const {
                visualElement: c
            } = this.options;
            return c && c.getProps().transformTemplate
        }
        willUpdate(c = !0) {
            if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && u1(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
            this.isLayoutDirty = !0;
            for (let g = 0; g < this.path.length; g++) {
                const y = this.path[g];
                y.shouldResetTransform = !0, y.updateScroll("snapshot"), y.options.layoutRoot && y.willUpdate(!1)
            }
            const {
                layoutId: d,
                layout: h
            } = this.options;
            if (d === void 0 && !h) return;
            const m = this.getTransformTemplate();
            this.prevTransformTemplateValue = m ? m(this.latestValues, "") : void 0, this.updateSnapshot(), c && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1, this.isUpdateBlocked()) {
                this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Lv);
                return
            }
            this.isUpdating || this.nodes.forEach(MN), this.isUpdating = !1, this.nodes.forEach(DN), this.nodes.forEach(RN), this.nodes.forEach(AN), this.clearAllSnapshots();
            const d = Cn.now();
            lt.delta = _n(0, 1e3 / 60, d - lt.timestamp), lt.timestamp = d, lt.isProcessing = !0, dd.update.process(lt), dd.preRender.process(lt), dd.render.process(lt), lt.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0, $f.read(this.scheduleUpdate))
        }
        clearAllSnapshots() {
            this.nodes.forEach(LN), this.sharedNodes.forEach(VN)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, Le.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            Le.postRender(() => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            })
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure())
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let h = 0; h < this.path.length; h++) this.path[h].updateScroll();
            const c = this.layout;
            this.layout = this.measure(!1), this.layoutCorrected = Xe(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
            const {
                visualElement: d
            } = this.options;
            d && d.notify("LayoutMeasure", this.layout.layoutBox, c ? c.layoutBox : void 0)
        }
        updateScroll(c = "measure") {
            let d = !!(this.options.layoutScroll && this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === c && (d = !1), d) {
                const h = i(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase: c,
                    isRoot: h,
                    offset: r(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : h
                }
            }
        }
        resetTransform() {
            if (!a) return;
            const c = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
                d = this.projectionDelta && !a1(this.projectionDelta),
                h = this.getTransformTemplate(),
                m = h ? h(this.latestValues, "") : void 0,
                g = m !== this.prevTransformTemplateValue;
            c && (d || Qr(this.latestValues) || g) && (a(this.instance, m), this.shouldResetTransform = !1, this.scheduleRender())
        }
        measure(c = !0) {
            const d = this.measurePageBox();
            let h = this.removeElementScroll(d);
            return c && (h = this.removeTransform(h)), $N(h), {
                animationId: this.root.animationId,
                measuredBox: d,
                layoutBox: h,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            var c;
            const {
                visualElement: d
            } = this.options;
            if (!d) return Xe();
            const h = d.measureViewportBox();
            if (!(((c = this.scroll) === null || c === void 0 ? void 0 : c.wasRoot) || this.path.some(HN))) {
                const {
                    scroll: g
                } = this.root;
                g && (qs(h.x, g.offset.x), qs(h.y, g.offset.y))
            }
            return h
        }
        removeElementScroll(c) {
            var d;
            const h = Xe();
            if (Yt(h, c), !((d = this.scroll) === null || d === void 0) && d.wasRoot) return h;
            for (let m = 0; m < this.path.length; m++) {
                const g = this.path[m],
                    {
                        scroll: y,
                        options: w
                    } = g;
                g !== this.root && y && w.layoutScroll && (y.wasRoot && Yt(h, c), qs(h.x, y.offset.x), qs(h.y, y.offset.y))
            }
            return h
        }
        applyTransform(c, d = !1) {
            const h = Xe();
            Yt(h, c);
            for (let m = 0; m < this.path.length; m++) {
                const g = this.path[m];
                !d && g.options.layoutScroll && g.scroll && g !== g.root && Ws(h, {
                    x: -g.scroll.offset.x,
                    y: -g.scroll.offset.y
                }), Qr(g.latestValues) && Ws(h, g.latestValues)
            }
            return Qr(this.latestValues) && Ws(h, this.latestValues), h
        }
        removeTransform(c) {
            const d = Xe();
            Yt(d, c);
            for (let h = 0; h < this.path.length; h++) {
                const m = this.path[h];
                if (!m.instance || !Qr(m.latestValues)) continue;
                hf(m.latestValues) && m.updateSnapshot();
                const g = Xe(),
                    y = m.measurePageBox();
                Yt(g, y), Cv(d, m.latestValues, m.snapshot ? m.snapshot.layoutBox : void 0, g)
            }
            return Qr(this.latestValues) && Cv(d, this.latestValues), d
        }
        setTargetDelta(c) {
            this.targetDelta = c, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
        }
        setOptions(c) {
            this.options = { ...this.options,
                ...c,
                crossfade: c.crossfade !== void 0 ? c.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== lt.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(c = !1) {
            var d;
            const h = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = h.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = h.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = h.isSharedProjectionDirty);
            const m = !!this.resumingFrom || this !== h;
            if (!(c || m && this.isSharedProjectionDirty || this.isProjectionDirty || !((d = this.parent) === null || d === void 0) && d.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
            const {
                layout: y,
                layoutId: w
            } = this.options;
            if (!(!this.layout || !(y || w))) {
                if (this.resolvedRelativeTargetAt = lt.timestamp, !this.targetDelta && !this.relativeTarget) {
                    const k = this.getClosestProjectingParent();
                    k && k.layout && this.animationProgress !== 1 ? (this.relativeParent = k, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Xe(), this.relativeTargetOrigin = Xe(), xo(this.relativeTargetOrigin, this.layout.layoutBox, k.layout.layoutBox), Yt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
                if (!(!this.relativeTarget && !this.targetDelta)) {
                    if (this.target || (this.target = Xe(), this.targetWithTransforms = Xe()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), K2(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Yt(this.target, this.layout.layoutBox), t1(this.target, this.targetDelta)) : Yt(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
                        this.attemptToResolveRelativeTarget = !1;
                        const k = this.getClosestProjectingParent();
                        k && !!k.resumingFrom == !!this.resumingFrom && !k.options.layoutScroll && k.target && this.animationProgress !== 1 ? (this.relativeParent = k, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Xe(), this.relativeTargetOrigin = Xe(), xo(this.relativeTargetOrigin, this.target, k.target), Yt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                    }
                    ho && Gr.resolvedTargetDeltas++
                }
            }
        }
        getClosestProjectingParent() {
            if (!(!this.parent || hf(this.parent.latestValues) || e1(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        calcProjection() {
            var c;
            const d = this.getLead(),
                h = !!this.resumingFrom || this !== d;
            let m = !0;
            if ((this.isProjectionDirty || !((c = this.parent) === null || c === void 0) && c.isProjectionDirty) && (m = !1), h && (this.isSharedProjectionDirty || this.isTransformDirty) && (m = !1), this.resolvedRelativeTargetAt === lt.timestamp && (m = !1), m) return;
            const {
                layout: g,
                layoutId: y
            } = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(g || y)) return;
            Yt(this.layoutCorrected, this.layout.layoutBox);
            const w = this.treeScale.x,
                k = this.treeScale.y;
            nN(this.layoutCorrected, this.treeScale, this.path, h), d.layout && !d.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (d.target = d.layout.layoutBox, d.targetWithTransforms = Xe());
            const {
                target: S
            } = d;
            if (!S) {
                this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
                return
            }!this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (kv(this.prevProjectionDelta.x, this.projectionDelta.x), kv(this.prevProjectionDelta.y, this.projectionDelta.y)), wo(this.projectionDelta, this.layoutCorrected, S, this.latestValues), (this.treeScale.x !== w || this.treeScale.y !== k || !Nv(this.projectionDelta.x, this.prevProjectionDelta.x) || !Nv(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", S)), ho && Gr.recalculatedProjection++
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(c = !0) {
            var d;
            if ((d = this.options.visualElement) === null || d === void 0 || d.scheduleRender(), c) {
                const h = this.getStack();
                h && h.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        createProjectionDeltas() {
            this.prevProjectionDelta = Hs(), this.projectionDelta = Hs(), this.projectionDeltaWithTransform = Hs()
        }
        setAnimationOrigin(c, d = !1) {
            const h = this.snapshot,
                m = h ? h.latestValues : {},
                g = { ...this.latestValues
                },
                y = Hs();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !d;
            const w = Xe(),
                k = h ? h.source : void 0,
                S = this.layout ? this.layout.source : void 0,
                b = k !== S,
                x = this.getStack(),
                R = !x || x.members.length <= 1,
                V = !!(b && !R && this.options.crossfade === !0 && !this.path.some(UN));
            this.animationProgress = 0;
            let M;
            this.mixTargetDelta = L => {
                const B = L / 1e3;
                Dv(y.x, c.x, B), Dv(y.y, c.y, B), this.setTargetDelta(y), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (xo(w, this.layout.layoutBox, this.relativeParent.layout.layoutBox), BN(this.relativeTarget, this.relativeTargetOrigin, w, B), M && EN(this.relativeTarget, M) && (this.isProjectionDirty = !1), M || (M = Xe()), Yt(M, this.relativeTarget)), b && (this.animationValues = g, vN(g, m, this.latestValues, B, V, R)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = B
            }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(c) {
            this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (hn(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = Le.update(() => {
                Sl.hasAnimatedSinceResize = !0, this.currentAnimation = fN(0, Ov, { ...c,
                    onUpdate: d => {
                        this.mixTargetDelta(d), c.onUpdate && c.onUpdate(d)
                    },
                    onComplete: () => {
                        c.onComplete && c.onComplete(), this.completeAnimation()
                    }
                }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
            })
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
            const c = this.getStack();
            c && c.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Ov), this.currentAnimation.stop()), this.completeAnimation()
        }
        applyTransformsToTarget() {
            const c = this.getLead();
            let {
                targetWithTransforms: d,
                target: h,
                layout: m,
                latestValues: g
            } = c;
            if (!(!d || !h || !m)) {
                if (this !== c && this.layout && m && d1(this.options.animationType, this.layout.layoutBox, m.layoutBox)) {
                    h = this.target || Xe();
                    const y = zt(this.layout.layoutBox.x);
                    h.x.min = c.target.x.min, h.x.max = h.x.min + y;
                    const w = zt(this.layout.layoutBox.y);
                    h.y.min = c.target.y.min, h.y.max = h.y.min + w
                }
                Yt(d, h), Ws(d, g), wo(this.projectionDeltaWithTransform, this.layoutCorrected, d, g)
            }
        }
        registerSharedNode(c, d) {
            this.sharedNodes.has(c) || this.sharedNodes.set(c, new TN), this.sharedNodes.get(c).add(d);
            const m = d.options.initialPromotionConfig;
            d.promote({
                transition: m ? m.transition : void 0,
                preserveFollowOpacity: m && m.shouldPreserveFollowOpacity ? m.shouldPreserveFollowOpacity(d) : void 0
            })
        }
        isLead() {
            const c = this.getStack();
            return c ? c.lead === this : !0
        }
        getLead() {
            var c;
            const {
                layoutId: d
            } = this.options;
            return d ? ((c = this.getStack()) === null || c === void 0 ? void 0 : c.lead) || this : this
        }
        getPrevLead() {
            var c;
            const {
                layoutId: d
            } = this.options;
            return d ? (c = this.getStack()) === null || c === void 0 ? void 0 : c.prevLead : void 0
        }
        getStack() {
            const {
                layoutId: c
            } = this.options;
            if (c) return this.root.sharedNodes.get(c)
        }
        promote({
            needsReset: c,
            transition: d,
            preserveFollowOpacity: h
        } = {}) {
            const m = this.getStack();
            m && m.promote(this, h), c && (this.projectionDelta = void 0, this.needsReset = !0), d && this.setOptions({
                transition: d
            })
        }
        relegate() {
            const c = this.getStack();
            return c ? c.relegate(this) : !1
        }
        resetSkewAndRotation() {
            const {
                visualElement: c
            } = this.options;
            if (!c) return;
            let d = !1;
            const {
                latestValues: h
            } = c;
            if ((h.z || h.rotate || h.rotateX || h.rotateY || h.rotateZ || h.skewX || h.skewY) && (d = !0), !d) return;
            const m = {};
            h.z && Sd("z", c, m, this.animationValues);
            for (let g = 0; g < xd.length; g++) Sd(`rotate${xd[g]}`, c, m, this.animationValues), Sd(`skew${xd[g]}`, c, m, this.animationValues);
            c.render();
            for (const g in m) c.setStaticValue(g, m[g]), this.animationValues && (this.animationValues[g] = m[g]);
            c.scheduleRender()
        }
        getProjectionStyles(c) {
            var d, h;
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return PN;
            const m = {
                    visibility: ""
                },
                g = this.getTransformTemplate();
            if (this.needsReset) return this.needsReset = !1, m.opacity = "", m.pointerEvents = wl(c == null ? void 0 : c.pointerEvents) || "", m.transform = g ? g(this.latestValues, "") : "none", m;
            const y = this.getLead();
            if (!this.projectionDelta || !this.layout || !y.target) {
                const b = {};
                return this.options.layoutId && (b.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, b.pointerEvents = wl(c == null ? void 0 : c.pointerEvents) || ""), this.hasProjected && !Qr(this.latestValues) && (b.transform = g ? g({}, "") : "none", this.hasProjected = !1), b
            }
            const w = y.animationValues || y.latestValues;
            this.applyTransformsToTarget(), m.transform = CN(this.projectionDeltaWithTransform, this.treeScale, w), g && (m.transform = g(w, m.transform));
            const {
                x: k,
                y: S
            } = this.projectionDelta;
            m.transformOrigin = `${k.origin*100}% ${S.origin*100}% 0`, y.animationValues ? m.opacity = y === this ? (h = (d = w.opacity) !== null && d !== void 0 ? d : this.latestValues.opacity) !== null && h !== void 0 ? h : 1 : this.preserveOpacity ? this.latestValues.opacity : w.opacityExit : m.opacity = y === this ? w.opacity !== void 0 ? w.opacity : "" : w.opacityExit !== void 0 ? w.opacityExit : 0;
            for (const b in Nl) {
                if (w[b] === void 0) continue;
                const {
                    correct: x,
                    applyTo: R
                } = Nl[b], V = m.transform === "none" ? w[b] : x(w[b], y);
                if (R) {
                    const M = R.length;
                    for (let L = 0; L < M; L++) m[R[L]] = V
                } else m[b] = V
            }
            return this.options.layoutId && (m.pointerEvents = y === this ? wl(c == null ? void 0 : c.pointerEvents) || "" : "none"), m
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(c => {
                var d;
                return (d = c.currentAnimation) === null || d === void 0 ? void 0 : d.stop()
            }), this.root.nodes.forEach(Lv), this.root.sharedNodes.clear()
        }
    }
}

function RN(t) {
    t.updateLayout()
}

function AN(t) {
    var e;
    const r = ((e = t.resumeFrom) === null || e === void 0 ? void 0 : e.snapshot) || t.snapshot;
    if (t.isLead() && t.layout && r && t.hasListeners("didUpdate")) {
        const {
            layoutBox: i,
            measuredBox: a
        } = t.layout, {
            animationType: l
        } = t.options, c = r.source !== t.layout.source;
        l === "size" ? Xt(y => {
            const w = c ? r.measuredBox[y] : r.layoutBox[y],
                k = zt(w);
            w.min = i[y].min, w.max = w.min + k
        }) : d1(l, r.layoutBox, i) && Xt(y => {
            const w = c ? r.measuredBox[y] : r.layoutBox[y],
                k = zt(i[y]);
            w.max = w.min + k, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0, t.relativeTarget[y].max = t.relativeTarget[y].min + k)
        });
        const d = Hs();
        wo(d, i, r.layoutBox);
        const h = Hs();
        c ? wo(h, t.applyTransform(a, !0), r.measuredBox) : wo(h, i, r.layoutBox);
        const m = !a1(d);
        let g = !1;
        if (!t.resumeFrom) {
            const y = t.getClosestProjectingParent();
            if (y && !y.resumeFrom) {
                const {
                    snapshot: w,
                    layout: k
                } = y;
                if (w && k) {
                    const S = Xe();
                    xo(S, r.layoutBox, w.layoutBox);
                    const b = Xe();
                    xo(b, i, k.layoutBox), l1(S, b) || (g = !0), y.options.layoutRoot && (t.relativeTarget = b, t.relativeTargetOrigin = S, t.relativeParent = y)
                }
            }
        }
        t.notifyListeners("didUpdate", {
            layout: i,
            snapshot: r,
            delta: h,
            layoutDelta: d,
            hasLayoutChanged: m,
            hasRelativeTargetChanged: g
        })
    } else if (t.isLead()) {
        const {
            onExitComplete: i
        } = t.options;
        i && i()
    }
    t.options.transition = void 0
}

function NN(t) {
    ho && Gr.totalNodes++, t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
}

function ON(t) {
    t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
}

function LN(t) {
    t.clearSnapshot()
}

function Lv(t) {
    t.clearMeasurements()
}

function MN(t) {
    t.isLayoutDirty = !1
}

function DN(t) {
    const {
        visualElement: e
    } = t.options;
    e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform()
}

function Mv(t) {
    t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = !0
}

function jN(t) {
    t.resolveTargetDelta()
}

function IN(t) {
    t.calcProjection()
}

function FN(t) {
    t.resetSkewAndRotation()
}

function VN(t) {
    t.removeLeadSnapshot()
}

function Dv(t, e, r) {
    t.translate = qe(e.translate, 0, r), t.scale = qe(e.scale, 1, r), t.origin = e.origin, t.originPoint = e.originPoint
}

function jv(t, e, r, i) {
    t.min = qe(e.min, r.min, i), t.max = qe(e.max, r.max, i)
}

function BN(t, e, r, i) {
    jv(t.x, e.x, r.x, i), jv(t.y, e.y, r.y, i)
}

function UN(t) {
    return t.animationValues && t.animationValues.opacityExit !== void 0
}
const zN = {
        duration: .45,
        ease: [.4, 0, .1, 1]
    },
    Iv = t => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t),
    Fv = Iv("applewebkit/") && !Iv("chrome/") ? Math.round : Ct;

function Vv(t) {
    t.min = Fv(t.min), t.max = Fv(t.max)
}

function $N(t) {
    Vv(t.x), Vv(t.y)
}

function d1(t, e, r) {
    return t === "position" || t === "preserve-aspect" && !W2(Av(e), Av(r), .2)
}

function HN(t) {
    var e;
    return t !== t.root && ((e = t.scroll) === null || e === void 0 ? void 0 : e.wasRoot)
}
const qN = c1({
        attachResizeListener: (t, e) => Po(t, "resize", e),
        measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop
        }),
        checkIsScrollRoot: () => !0
    }),
    bd = {
        current: void 0
    },
    f1 = c1({
        measureScroll: t => ({
            x: t.scrollLeft,
            y: t.scrollTop
        }),
        defaultParent: () => {
            if (!bd.current) {
                const t = new qN({});
                t.mount(window), t.setOptions({
                    layoutScroll: !0
                }), bd.current = t
            }
            return bd.current
        },
        resetTransform: (t, e) => {
            t.style.transform = e !== void 0 ? e : "none"
        },
        checkIsScrollRoot: t => window.getComputedStyle(t).position === "fixed"
    }),
    WN = {
        pan: {
            Feature: lN
        },
        drag: {
            Feature: aN,
            ProjectionNode: f1,
            MeasureLayout: s1
        }
    };

function Bv(t, e, r) {
    const {
        props: i
    } = t;
    t.animationState && i.whileHover && t.animationState.setActive("whileHover", r === "Start");
    const a = "onHover" + r,
        l = i[a];
    l && Le.postRender(() => l(e, $o(e)))
}
class KN extends Nr {
    mount() {
        const {
            current: e
        } = this.node;
        e && (this.unmount = QR(e, r => (Bv(this.node, r, "Start"), i => Bv(this.node, i, "End"))))
    }
    unmount() {}
}
class QN extends Nr {
    constructor() {
        super(...arguments), this.isActive = !1
    }
    onFocus() {
        let e = !1;
        try {
            e = this.node.current.matches(":focus-visible")
        } catch {
            e = !0
        }!e || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
    }
    mount() {
        this.unmount = zo(Po(this.node.current, "focus", () => this.onFocus()), Po(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() {}
}

function Uv(t, e, r) {
    const {
        props: i
    } = t;
    t.animationState && i.whileTap && t.animationState.setActive("whileTap", r === "Start");
    const a = "onTap" + (r === "End" ? "" : r),
        l = i[a];
    l && Le.postRender(() => l(e, $o(e)))
}
class GN extends Nr {
    mount() {
        const {
            current: e
        } = this.node;
        e && (this.unmount = JR(e, r => (Uv(this.node, r, "Start"), (i, {
            success: a
        }) => Uv(this.node, i, a ? "End" : "Cancel")), {
            useGlobalTarget: this.node.props.globalTapTarget
        }))
    }
    unmount() {}
}
const mf = new WeakMap,
    kd = new WeakMap,
    YN = t => {
        const e = mf.get(t.target);
        e && e(t)
    },
    XN = t => {
        t.forEach(YN)
    };

function JN({
    root: t,
    ...e
}) {
    const r = t || document;
    kd.has(r) || kd.set(r, {});
    const i = kd.get(r),
        a = JSON.stringify(e);
    return i[a] || (i[a] = new IntersectionObserver(XN, {
        root: t,
        ...e
    })), i[a]
}

function ZN(t, e, r) {
    const i = JN(e);
    return mf.set(t, r), i.observe(t), () => {
        mf.delete(t), i.unobserve(t)
    }
}
const eO = {
    some: 0,
    all: 1
};
class tO extends Nr {
    constructor() {
        super(...arguments), this.hasEnteredView = !1, this.isInView = !1
    }
    startObserver() {
        this.unmount();
        const {
            viewport: e = {}
        } = this.node.getProps(), {
            root: r,
            margin: i,
            amount: a = "some",
            once: l
        } = e, c = {
            root: r ? r.current : void 0,
            rootMargin: i,
            threshold: typeof a == "number" ? a : eO[a]
        }, d = h => {
            const {
                isIntersecting: m
            } = h;
            if (this.isInView === m || (this.isInView = m, l && !m && this.hasEnteredView)) return;
            m && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", m);
            const {
                onViewportEnter: g,
                onViewportLeave: y
            } = this.node.getProps(), w = m ? g : y;
            w && w(h)
        };
        return ZN(this.node.current, c, d)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u") return;
        const {
            props: e,
            prevProps: r
        } = this.node;
        ["amount", "margin", "root"].some(nO(e, r)) && this.startObserver()
    }
    unmount() {}
}

function nO({
    viewport: t = {}
}, {
    viewport: e = {}
} = {}) {
    return r => t[r] !== e[r]
}
const rO = {
        inView: {
            Feature: tO
        },
        tap: {
            Feature: GN
        },
        focus: {
            Feature: QN
        },
        hover: {
            Feature: KN
        }
    },
    sO = {
        layout: {
            ProjectionNode: f1,
            MeasureLayout: s1
        }
    },
    gf = {
        current: null
    },
    h1 = {
        current: !1
    };

function iO() {
    if (h1.current = !0, !!Ff)
        if (window.matchMedia) {
            const t = window.matchMedia("(prefers-reduced-motion)"),
                e = () => gf.current = t.matches;
            t.addListener(e), e()
        } else gf.current = !1
}
const oO = [...Ix, wt, Rr],
    aO = t => oO.find(jx(t)),
    zv = new WeakMap;

function lO(t, e, r) {
    for (const i in e) {
        const a = e[i],
            l = r[i];
        if (St(a)) t.addValue(i, a);
        else if (St(l)) t.addValue(i, kn(a, {
            owner: t
        }));
        else if (l !== a)
            if (t.hasValue(i)) {
                const c = t.getValue(i);
                c.liveStyle === !0 ? c.jump(a) : c.hasAnimated || c.set(a)
            } else {
                const c = t.getStaticValue(i);
                t.addValue(i, kn(c !== void 0 ? c : a, {
                    owner: t
                }))
            }
    }
    for (const i in r) e[i] === void 0 && t.removeValue(i);
    return e
}
const $v = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
class uO {
    scrapeMotionValuesFromProps(e, r, i) {
        return {}
    }
    constructor({
        parent: e,
        props: r,
        presenceContext: i,
        reducedMotionConfig: a,
        blockInitialAnimation: l,
        visualState: c
    }, d = {}) {
        this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.KeyframeResolver = fh, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
            this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }, this.renderScheduledAt = 0, this.scheduleRender = () => {
            const k = Cn.now();
            this.renderScheduledAt < k && (this.renderScheduledAt = k, Le.render(this.render, !1, !0))
        };
        const {
            latestValues: h,
            renderState: m,
            onUpdate: g
        } = c;
        this.onUpdate = g, this.latestValues = h, this.baseTarget = { ...h
        }, this.initialValues = r.initial ? { ...h
        } : {}, this.renderState = m, this.parent = e, this.props = r, this.presenceContext = i, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = a, this.options = d, this.blockInitialAnimation = !!l, this.isControllingVariants = Jl(r), this.isVariantNode = Hw(r), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(e && e.current);
        const {
            willChange: y,
            ...w
        } = this.scrapeMotionValuesFromProps(r, {}, this);
        for (const k in w) {
            const S = w[k];
            h[k] !== void 0 && St(S) && S.set(h[k], !1)
        }
    }
    mount(e) {
        this.current = e, zv.set(e, this), this.projection && !this.projection.instance && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((r, i) => this.bindToMotionValue(i, r)), h1.current || iO(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : gf.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext)
    }
    unmount() {
        zv.delete(this.current), this.projection && this.projection.unmount(), hn(this.notifyUpdate), hn(this.render), this.valueSubscriptions.forEach(e => e()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
        for (const e in this.events) this.events[e].clear();
        for (const e in this.features) {
            const r = this.features[e];
            r && (r.unmount(), r.isMounted = !1)
        }
        this.current = null
    }
    bindToMotionValue(e, r) {
        this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)();
        const i = ms.has(e),
            a = r.on("change", d => {
                this.latestValues[e] = d, this.props.onUpdate && Le.preRender(this.notifyUpdate), i && this.projection && (this.projection.isTransformDirty = !0)
            }),
            l = r.on("renderRequest", this.scheduleRender);
        let c;
        window.MotionCheckAppearSync && (c = window.MotionCheckAppearSync(this, e, r)), this.valueSubscriptions.set(e, () => {
            a(), l(), c && c(), r.owner && r.stop()
        })
    }
    sortNodePosition(e) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== e.type ? 0 : this.sortInstanceNodePosition(this.current, e.current)
    }
    updateFeatures() {
        let e = "animation";
        for (e in ai) {
            const r = ai[e];
            if (!r) continue;
            const {
                isEnabled: i,
                Feature: a
            } = r;
            if (!this.features[e] && a && i(this.props) && (this.features[e] = new a(this)), this.features[e]) {
                const l = this.features[e];
                l.isMounted ? l.update() : (l.mount(), l.isMounted = !0)
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Xe()
    }
    getStaticValue(e) {
        return this.latestValues[e]
    }
    setStaticValue(e, r) {
        this.latestValues[e] = r
    }
    update(e, r) {
        (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = e, this.prevPresenceContext = this.presenceContext, this.presenceContext = r;
        for (let i = 0; i < $v.length; i++) {
            const a = $v[i];
            this.propEventSubscriptions[a] && (this.propEventSubscriptions[a](), delete this.propEventSubscriptions[a]);
            const l = "on" + a,
                c = e[l];
            c && (this.propEventSubscriptions[a] = this.on(a, c))
        }
        this.prevMotionValues = lO(this, this.scrapeMotionValuesFromProps(e, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue(), this.onUpdate && this.onUpdate(this)
    }
    getProps() {
        return this.props
    }
    getVariant(e) {
        return this.props.variants ? this.props.variants[e] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    addVariantChild(e) {
        const r = this.getClosestVariantNode();
        if (r) return r.variantChildren && r.variantChildren.add(e), () => r.variantChildren.delete(e)
    }
    addValue(e, r) {
        const i = this.values.get(e);
        r !== i && (i && this.removeValue(e), this.bindToMotionValue(e, r), this.values.set(e, r), this.latestValues[e] = r.get())
    }
    removeValue(e) {
        this.values.delete(e);
        const r = this.valueSubscriptions.get(e);
        r && (r(), this.valueSubscriptions.delete(e)), delete this.latestValues[e], this.removeValueFromRenderState(e, this.renderState)
    }
    hasValue(e) {
        return this.values.has(e)
    }
    getValue(e, r) {
        if (this.props.values && this.props.values[e]) return this.props.values[e];
        let i = this.values.get(e);
        return i === void 0 && r !== void 0 && (i = kn(r === null ? void 0 : r, {
            owner: this
        }), this.addValue(e, i)), i
    }
    readValue(e, r) {
        var i;
        let a = this.latestValues[e] !== void 0 || !this.current ? this.latestValues[e] : (i = this.getBaseTargetFromProps(this.props, e)) !== null && i !== void 0 ? i : this.readValueFromInstance(this.current, e, this.options);
        return a != null && (typeof a == "string" && (Mx(a) || Tx(a)) ? a = parseFloat(a) : !aO(a) && Rr.test(r) && (a = Nx(e, r)), this.setBaseTarget(e, St(a) ? a.get() : a)), St(a) ? a.get() : a
    }
    setBaseTarget(e, r) {
        this.baseTarget[e] = r
    }
    getBaseTarget(e) {
        var r;
        const {
            initial: i
        } = this.props;
        let a;
        if (typeof i == "string" || typeof i == "object") {
            const c = qf(this.props, i, (r = this.presenceContext) === null || r === void 0 ? void 0 : r.custom);
            c && (a = c[e])
        }
        if (i && a !== void 0) return a;
        const l = this.getBaseTargetFromProps(this.props, e);
        return l !== void 0 && !St(l) ? l : this.initialValues[e] !== void 0 && a === void 0 ? void 0 : this.baseTarget[e]
    }
    on(e, r) {
        return this.events[e] || (this.events[e] = new ih), this.events[e].add(r)
    }
    notify(e, ...r) {
        this.events[e] && this.events[e].notify(...r)
    }
}
class p1 extends uO {
    constructor() {
        super(...arguments), this.KeyframeResolver = Fx
    }
    sortInstanceNodePosition(e, r) {
        return e.compareDocumentPosition(r) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(e, r) {
        return e.style ? e.style[r] : void 0
    }
    removeValueFromRenderState(e, {
        vars: r,
        style: i
    }) {
        delete r[e], delete i[e]
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(), delete this.childSubscription);
        const {
            children: e
        } = this.props;
        St(e) && (this.childSubscription = e.on("change", r => {
            this.current && (this.current.textContent = `${r}`)
        }))
    }
}

function cO(t) {
    return window.getComputedStyle(t)
}
class dO extends p1 {
    constructor() {
        super(...arguments), this.type = "html", this.renderInstance = Zw
    }
    readValueFromInstance(e, r) {
        if (ms.has(r)) {
            const i = dh(r);
            return i && i.default || 0
        } else {
            const i = cO(e),
                a = (Yw(r) ? i.getPropertyValue(r) : i[r]) || 0;
            return typeof a == "string" ? a.trim() : a
        }
    }
    measureInstanceViewportBox(e, {
        transformPagePoint: r
    }) {
        return n1(e, r)
    }
    build(e, r, i) {
        Qf(e, r, i.transformTemplate)
    }
    scrapeMotionValuesFromProps(e, r, i) {
        return Jf(e, r, i)
    }
}
class fO extends p1 {
    constructor() {
        super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = Xe
    }
    getBaseTargetFromProps(e, r) {
        return e[r]
    }
    readValueFromInstance(e, r) {
        if (ms.has(r)) {
            const i = dh(r);
            return i && i.default || 0
        }
        return r = ex.has(r) ? r : zf(r), e.getAttribute(r)
    }
    scrapeMotionValuesFromProps(e, r, i) {
        return rx(e, r, i)
    }
    build(e, r, i) {
        Gf(e, r, this.isSVGTag, i.transformTemplate)
    }
    renderInstance(e, r, i, a) {
        tx(e, r, i, a)
    }
    mount(e) {
        this.isSVGTag = Xf(e.tagName), super.mount(e)
    }
}
const hO = (t, e) => Hf(t) ? new fO(e) : new dO(e, {
        allowProjection: t !== D.Fragment
    }),
    pO = $R({ ...I2,
        ...rO,
        ...WN,
        ...sO
    }, hO),
    Pe = sR(pO);

function m1(t, e) {
    let r;
    const i = () => {
        const {
            currentTime: a
        } = e, c = (a === null ? 0 : a.value) / 100;
        r !== c && t(c), r = c
    };
    return Le.update(i, !0), () => hn(i)
}
const bl = new WeakMap;
let gr;

function mO(t, e) {
    if (e) {
        const {
            inlineSize: r,
            blockSize: i
        } = e[0];
        return {
            width: r,
            height: i
        }
    } else return t instanceof SVGElement && "getBBox" in t ? t.getBBox() : {
        width: t.offsetWidth,
        height: t.offsetHeight
    }
}

function gO({
    target: t,
    contentRect: e,
    borderBoxSize: r
}) {
    var i;
    (i = bl.get(t)) === null || i === void 0 || i.forEach(a => {
        a({
            target: t,
            contentSize: e,
            get size() {
                return mO(t, r)
            }
        })
    })
}

function yO(t) {
    t.forEach(gO)
}

function vO() {
    typeof ResizeObserver > "u" || (gr = new ResizeObserver(yO))
}

function wO(t, e) {
    gr || vO();
    const r = fx(t);
    return r.forEach(i => {
        let a = bl.get(i);
        a || (a = new Set, bl.set(i, a)), a.add(e), gr == null || gr.observe(i)
    }), () => {
        r.forEach(i => {
            const a = bl.get(i);
            a == null || a.delete(e), a != null && a.size || gr == null || gr.unobserve(i)
        })
    }
}
const kl = new Set;
let So;

function xO() {
    So = () => {
        const t = {
                width: window.innerWidth,
                height: window.innerHeight
            },
            e = {
                target: window,
                size: t,
                contentSize: t
            };
        kl.forEach(r => r(e))
    }, window.addEventListener("resize", So)
}

function SO(t) {
    return kl.add(t), So || xO(), () => {
        kl.delete(t), !kl.size && So && (So = void 0)
    }
}

function bO(t, e) {
    return typeof t == "function" ? SO(t) : wO(t, e)
}
const kO = 50,
    Hv = () => ({
        current: 0,
        offset: [],
        progress: 0,
        scrollLength: 0,
        targetOffset: 0,
        targetLength: 0,
        containerLength: 0,
        velocity: 0
    }),
    EO = () => ({
        time: 0,
        x: Hv(),
        y: Hv()
    }),
    TO = {
        x: {
            length: "Width",
            position: "Left"
        },
        y: {
            length: "Height",
            position: "Top"
        }
    };

function qv(t, e, r, i) {
    const a = r[e],
        {
            length: l,
            position: c
        } = TO[e],
        d = a.current,
        h = r.time;
    a.current = t[`scroll${c}`], a.scrollLength = t[`scroll${l}`] - t[`client${l}`], a.offset.length = 0, a.offset[0] = 0, a.offset[1] = a.scrollLength, a.progress = hs(0, a.scrollLength, a.current);
    const m = i - h;
    a.velocity = m > kO ? 0 : oh(a.current - d, m)
}

function CO(t, e, r) {
    qv(t, "x", e, r), qv(t, "y", e, r), e.time = r
}

function PO(t, e) {
    const r = {
        x: 0,
        y: 0
    };
    let i = t;
    for (; i && i !== e;)
        if (i instanceof HTMLElement) r.x += i.offsetLeft, r.y += i.offsetTop, i = i.offsetParent;
        else if (i.tagName === "svg") {
        const a = i.getBoundingClientRect();
        i = i.parentElement;
        const l = i.getBoundingClientRect();
        r.x += a.left - l.left, r.y += a.top - l.top
    } else if (i instanceof SVGGraphicsElement) {
        const {
            x: a,
            y: l
        } = i.getBBox();
        r.x += a, r.y += l;
        let c = null,
            d = i.parentNode;
        for (; !c;) d.tagName === "svg" && (c = d), d = i.parentNode;
        i = c
    } else break;
    return r
}
const yf = {
    start: 0,
    center: .5,
    end: 1
};

function Wv(t, e, r = 0) {
    let i = 0;
    if (t in yf && (t = yf[t]), typeof t == "string") {
        const a = parseFloat(t);
        t.endsWith("px") ? i = a : t.endsWith("%") ? t = a / 100 : t.endsWith("vw") ? i = a / 100 * document.documentElement.clientWidth : t.endsWith("vh") ? i = a / 100 * document.documentElement.clientHeight : t = a
    }
    return typeof t == "number" && (i = e * t), r + i
}
const _O = [0, 0];

function RO(t, e, r, i) {
    let a = Array.isArray(t) ? t : _O,
        l = 0,
        c = 0;
    return typeof t == "number" ? a = [t, t] : typeof t == "string" && (t = t.trim(), t.includes(" ") ? a = t.split(" ") : a = [t, yf[t] ? t : "0"]), l = Wv(a[0], r, i), c = Wv(a[1], e), l - c
}
const AO = {
        All: [
            [0, 0],
            [1, 1]
        ]
    },
    NO = {
        x: 0,
        y: 0
    };

function OO(t) {
    return "getBBox" in t && t.tagName !== "svg" ? t.getBBox() : {
        width: t.clientWidth,
        height: t.clientHeight
    }
}

function LO(t, e, r) {
    const {
        offset: i = AO.All
    } = r, {
        target: a = t,
        axis: l = "y"
    } = r, c = l === "y" ? "height" : "width", d = a !== t ? PO(a, t) : NO, h = a === t ? {
        width: t.scrollWidth,
        height: t.scrollHeight
    } : OO(a), m = {
        width: t.clientWidth,
        height: t.clientHeight
    };
    e[l].offset.length = 0;
    let g = !e[l].interpolate;
    const y = i.length;
    for (let w = 0; w < y; w++) {
        const k = RO(i[w], m[c], h[c], d[l]);
        !g && k !== e[l].interpolatorOffsets[w] && (g = !0), e[l].offset[w] = k
    }
    g && (e[l].interpolate = ph(e[l].offset, qx(i), {
        clamp: !1
    }), e[l].interpolatorOffsets = [...e[l].offset]), e[l].progress = _n(0, 1, e[l].interpolate(e[l].current))
}

function MO(t, e = t, r) {
    if (r.x.targetOffset = 0, r.y.targetOffset = 0, e !== t) {
        let i = e;
        for (; i && i !== t;) r.x.targetOffset += i.offsetLeft, r.y.targetOffset += i.offsetTop, i = i.offsetParent
    }
    r.x.targetLength = e === t ? e.scrollWidth : e.clientWidth, r.y.targetLength = e === t ? e.scrollHeight : e.clientHeight, r.x.containerLength = t.clientWidth, r.y.containerLength = t.clientHeight
}

function DO(t, e, r, i = {}) {
    return {
        measure: () => MO(t, i.target, r),
        update: a => {
            CO(t, r, a), (i.offset || i.target) && LO(t, r, i)
        },
        notify: () => e(r)
    }
}
const io = new WeakMap,
    Kv = new WeakMap,
    Ed = new WeakMap,
    Qv = t => t === document.documentElement ? window : t;

function yh(t, {
    container: e = document.documentElement,
    ...r
} = {}) {
    let i = Ed.get(e);
    i || (i = new Set, Ed.set(e, i));
    const a = EO(),
        l = DO(e, t, a, r);
    if (i.add(l), !io.has(e)) {
        const d = () => {
                for (const w of i) w.measure()
            },
            h = () => {
                for (const w of i) w.update(lt.timestamp)
            },
            m = () => {
                for (const w of i) w.notify()
            },
            g = () => {
                Le.read(d, !1, !0), Le.read(h, !1, !0), Le.update(m, !1, !0)
            };
        io.set(e, g);
        const y = Qv(e);
        window.addEventListener("resize", g, {
            passive: !0
        }), e !== document.documentElement && Kv.set(e, bO(e, g)), y.addEventListener("scroll", g, {
            passive: !0
        })
    }
    const c = io.get(e);
    return Le.read(c, !1, !0), () => {
        var d;
        hn(c);
        const h = Ed.get(e);
        if (!h || (h.delete(l), h.size)) return;
        const m = io.get(e);
        io.delete(e), m && (Qv(e).removeEventListener("scroll", m), (d = Kv.get(e)) === null || d === void 0 || d(), window.removeEventListener("resize", m))
    }
}

function jO({
    source: t,
    container: e,
    axis: r = "y"
}) {
    t && (e = t);
    const i = {
            value: 0
        },
        a = yh(l => {
            i.value = l[r].progress * 100
        }, {
            container: e,
            axis: r
        });
    return {
        currentTime: i,
        cancel: a
    }
}
const Td = new Map;

function g1({
    source: t,
    container: e = document.documentElement,
    axis: r = "y"
} = {}) {
    t && (e = t), Td.has(e) || Td.set(e, {});
    const i = Td.get(e);
    return i[r] || (i[r] = ox() ? new ScrollTimeline({
        source: e,
        axis: r
    }) : jO({
        source: e,
        axis: r
    })), i[r]
}

function IO(t) {
    return t.length === 2
}

function y1(t) {
    return t && (t.target || t.offset)
}

function FO(t, e) {
    return IO(t) || y1(e) ? yh(r => {
        t(r[e.axis].progress, r)
    }, e) : m1(t, g1(e))
}

function VO(t, e) {
    if (t.flatten(), y1(e)) return t.pause(), yh(r => {
        t.time = t.duration * r[e.axis].progress
    }, e); {
        const r = g1(e);
        return t.attachTimeline ? t.attachTimeline(r, i => (i.pause(), m1(a => {
            i.time = i.duration * a
        }, r))) : Ct
    }
}

function BO(t, {
    axis: e = "y",
    ...r
} = {}) {
    const i = {
        axis: e,
        ...r
    };
    return typeof t == "function" ? FO(t, i) : VO(t, i)
}

function Gv(t, e) {
    Y_(!!(!e || e.current))
}
const UO = () => ({
    scrollX: kn(0),
    scrollY: kn(0),
    scrollXProgress: kn(0),
    scrollYProgress: kn(0)
});

function v1({
    container: t,
    target: e,
    layoutEffect: r = !0,
    ...i
} = {}) {
    const a = di(UO);
    return (r ? Gl : D.useEffect)(() => (Gv("target", e), Gv("container", t), BO((c, {
        x: d,
        y: h
    }) => {
        a.scrollX.set(d.current), a.scrollXProgress.set(d.progress), a.scrollY.set(h.current), a.scrollYProgress.set(h.progress)
    }, { ...i,
        container: (t == null ? void 0 : t.current) || void 0,
        target: (e == null ? void 0 : e.current) || void 0
    })), [t, e, JSON.stringify(i.offset)]), a
}

function zO(t) {
    const e = di(() => kn(t)),
        {
            isStatic: r
        } = D.useContext(Ql);
    if (r) {
        const [, i] = D.useState(t);
        D.useEffect(() => e.on("change", i), [])
    }
    return e
}

function w1(t, e) {
    const r = zO(e()),
        i = () => r.set(e());
    return i(), Gl(() => {
        const a = () => Le.preRender(i, !1, !0),
            l = t.map(c => c.on("change", a));
        return () => {
            l.forEach(c => c()), hn(i)
        }
    }), r
}
const $O = t => t && typeof t == "object" && t.mix,
    HO = t => $O(t) ? t.mix : void 0;

function qO(...t) {
    const e = !Array.isArray(t[0]),
        r = e ? 0 : -1,
        i = t[0 + r],
        a = t[1 + r],
        l = t[2 + r],
        c = t[3 + r],
        d = ph(a, l, {
            mixer: HO(l[0]),
            ...c
        });
    return e ? d(i) : d
}

function WO(t) {
    go.current = [], t();
    const e = w1(go.current, t);
    return go.current = void 0, e
}

function yr(t, e, r, i) {
    if (typeof t == "function") return WO(t);
    const a = typeof e == "function" ? e : qO(e, r, i);
    return Array.isArray(t) ? Yv(t, a) : Yv([t], ([l]) => a(l))
}

function Yv(t, e) {
    const r = di(() => []);
    return w1(t, () => {
        r.length = 0;
        const i = t.length;
        for (let a = 0; a < i; a++) r[a] = t[a].get();
        return e(r)
    })
}
const Xv = [{
    label: "Acquisitions",
    href: "#acquisitions"
}, {
    label: "Brokerage",
    href: "#brokerage"
}, {
    label: "Strategy",
    href: "#pillars"
}, {
    label: "Contact",
    href: "#vault"
}];

function KO() {
    const [t, e] = D.useState(!1), [r, i] = D.useState(!1);
    D.useEffect(() => {
        const l = () => e(window.scrollY > 80);
        return window.addEventListener("scroll", l), () => window.removeEventListener("scroll", l)
    }, []);
    const a = l => {
        i(!1);
        const c = document.querySelector(l);
        c == null || c.scrollIntoView({
            behavior: "smooth"
        })
    };
    return T.jsxs(T.Fragment, {
        children: [T.jsx(Pe.header, {
            initial: {
                y: -100
            },
            animate: {
                y: 0
            },
            transition: {
                duration: .8,
                ease: [.16, 1, .3, 1]
            },
            className: `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${t?"py-3 bg-black/60 backdrop-blur-xl border-b border-white/5":"py-6 bg-transparent"}`,
            children: T.jsxs("div", {
                className: "flex items-center justify-between px-6 md:px-12",
                children: [T.jsxs("a", {
                    href: "#",
                    className: "flex items-center gap-3 group",
                    children: [T.jsx("div", {
                        className: "w-2 h-2 rounded-full bg-lime group-hover:shadow-[0_0_12px_rgba(204,255,0,0.6)] transition-shadow"
                    }), T.jsx("span", {
                        className: "font-body font-bold text-lg tracking-tight text-foreground",
                        children: "INVESTBROOK"
                    })]
                }), T.jsxs("nav", {
                    className: "hidden md:flex items-center gap-8",
                    children: [Xv.map(l => T.jsx("button", {
                        onClick: () => a(l.href),
                        className: "font-body text-sm tracking-wide text-muted-foreground hover:text-lime transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-lime focus:ring-offset-2 focus:ring-offset-black rounded px-2 py-1",
                        children: l.label
                    }, l.label)), T.jsx("button", {
                        onClick: () => a("#vault"),
                        className: "font-mono text-xs px-5 py-2.5 border border-lime/30 text-lime hover:bg-lime/10 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-lime",
                        children: "START EXIT →"
                    })]
                }), T.jsx("button", {
                    onClick: () => i(!0),
                    className: "md:hidden p-2 text-foreground hover:text-lime transition-colors focus:outline-none focus:ring-2 focus:ring-lime rounded",
                    "aria-label": "Open menu",
                    children: T.jsx(tk, {
                        className: "w-6 h-6"
                    })
                })]
            })
        }), T.jsx(G_, {
            children: r && T.jsxs(Pe.div, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                exit: {
                    opacity: 0
                },
                transition: {
                    duration: .3
                },
                className: "fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center",
                children: [T.jsx("button", {
                    onClick: () => i(!1),
                    className: "absolute top-6 right-6 p-2 text-foreground hover:text-lime transition-colors focus:outline-none focus:ring-2 focus:ring-lime rounded",
                    "aria-label": "Close menu",
                    children: T.jsx(p0, {
                        className: "w-8 h-8"
                    })
                }), T.jsxs("nav", {
                    className: "flex flex-col items-center gap-10",
                    children: [Xv.map((l, c) => T.jsx(Pe.button, {
                        initial: {
                            opacity: 0,
                            y: 30
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            delay: c * .1,
                            duration: .5
                        },
                        onClick: () => a(l.href),
                        className: "font-body text-3xl font-bold tracking-tight text-foreground hover:text-lime transition-colors focus:outline-none focus:ring-2 focus:ring-lime rounded px-4 py-2",
                        children: l.label
                    }, l.label)), T.jsx(Pe.button, {
                        initial: {
                            opacity: 0,
                            y: 30
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            delay: .4,
                            duration: .5
                        },
                        onClick: () => a("#vault"),
                        className: "mt-4 font-mono text-sm px-8 py-3 border border-lime/40 text-lime hover:bg-lime/10 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-lime",
                        children: "START YOUR EXIT →"
                    })]
                })]
            })
        })]
    })
}

function QO() {
    const {
        scrollYProgress: t
    } = v1(), e = yr(t, [0, 1], [0, -400]), r = yr(t, [0, 1], [0, -250]), i = yr(t, [0, 1], [0, -600]), a = yr(t, [0, 1], [0, -350]), l = yr(t, [0, 1], [0, 180]), c = yr(t, [0, 1], [0, -120]);
    return T.jsxs("div", {
        className: "fixed inset-0 pointer-events-none overflow-hidden z-0",
        children: [T.jsx("div", {
            className: "absolute inset-0 pulse-bg",
            style: {
                backgroundImage: `
            linear-gradient(rgba(204,255,0,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(204,255,0,0.03) 1px, transparent 1px)
          `,
                backgroundSize: "80px 80px"
            }
        }), T.jsx(Pe.div, {
            style: {
                y: e,
                rotate: l
            },
            className: "absolute -top-20 -right-20 w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full border border-lime/5 float-slow"
        }), T.jsx(Pe.div, {
            style: {
                y: r,
                rotate: c
            },
            className: "absolute top-[40%] -left-16 w-48 h-48 md:w-72 md:h-72 border border-cyan/8 rotate-45 float-medium"
        }), T.jsx(Pe.div, {
            style: {
                y: i
            },
            className: "absolute top-[60%] right-[15%] w-3 h-3 rounded-full bg-lime/20 float-slow"
        }), T.jsx(Pe.div, {
            style: {
                y: a
            },
            className: "absolute top-[75%] left-[10%] w-40 h-px bg-gradient-to-r from-transparent via-cyan/15 to-transparent float-medium"
        }), T.jsx(Pe.div, {
            style: {
                y: r
            },
            className: "absolute top-[120%] left-[30%] w-[500px] h-[500px] rounded-full border border-lime/3 float-slow"
        }), T.jsx(Pe.div, {
            style: {
                y: e,
                rotate: c
            },
            className: "absolute top-[200%] right-[5%] w-64 h-64 rounded-full float-medium",
            style2: {
                border: "1px dashed rgba(0, 245, 255, 0.06)"
            }
        })]
    })
}

function GO() {
    const {
        scrollYProgress: t
    } = v1(), e = yr(t, [0, 1], [0, 1]), r = yr(t, [0, .3, .7, 1], [.1, .5, .6, .2]);
    return T.jsx("div", {
        className: "fixed left-1/2 top-0 bottom-0 z-[1] pointer-events-none hidden lg:block",
        children: T.jsx(Pe.div, {
            style: {
                scaleY: e,
                opacity: r,
                transformOrigin: "top"
            },
            className: "w-px h-full bg-gradient-to-b from-transparent via-lime/40 to-transparent"
        })
    })
}

function YO() {
    const t = () => {
        var e;
        (e = document.querySelector("#services")) == null || e.scrollIntoView({
            behavior: "smooth"
        })
    };
    return T.jsxs("section", {
        className: "relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-20 overflow-hidden",
        children: [T.jsx("div", {
            className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-lime/3 rounded-full blur-[200px] pointer-events-none"
        }), T.jsx("div", {
            className: "absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-cyan/3 rounded-full blur-[150px] pointer-events-none"
        }), T.jsxs("div", {
            className: "relative z-10 max-w-6xl pt-32 md:pt-40",
            children: [T.jsxs(Pe.div, {
                initial: {
                    opacity: 0,
                    x: -20
                },
                animate: {
                    opacity: 1,
                    x: 0
                },
                transition: {
                    duration: .8,
                    delay: .2
                },
                className: "flex items-center gap-3 mb-8",
                children: [T.jsx("div", {
                    className: "w-8 h-px bg-lime/60"
                }), T.jsx("span", {
                    className: "font-mono text-xs tracking-[0.2em] text-lime/70 uppercase",
                    children: "Private Investment Firm"
                })]
            }), T.jsxs(Pe.h1, {
                initial: {
                    opacity: 0,
                    y: 40
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 1,
                    delay: .4,
                    ease: [.16, 1, .3, 1]
                },
                className: "font-body font-black text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-[7rem] leading-[0.9] tracking-tighter text-foreground mb-8",
                children: [T.jsxs("span", {
                    className: "block",
                    children: ["Your", " ", T.jsx("span", {
                        className: "text-lime text-glow-lime",
                        children: "Legacy"
                    }), ","]
                }), T.jsxs("span", {
                    className: "block mt-2",
                    children: ["Our", " ", T.jsx("span", {
                        className: "text-cyan text-glow-cyan",
                        children: "Capital"
                    }), "."]
                })]
            }), T.jsxs(Pe.p, {
                initial: {
                    opacity: 0,
                    y: 30
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .8,
                    delay: .7
                },
                className: "font-body text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl leading-relaxed tracking-tight",
                children: ["We buy, scale, and connect the next generation of business.", T.jsx("span", {
                    className: "block mt-3 text-foreground/70",
                    children: "Specializing in seamless exits for founders ready to retire. Whether we buy your business directly or find the perfect buyer as your broker, we ensure your life's work is in good hands."
                })]
            }), T.jsxs(Pe.div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .8,
                    delay: 1
                },
                className: "flex flex-col sm:flex-row gap-4 mt-12",
                children: [T.jsx("button", {
                    onClick: () => {
                        var e;
                        return (e = document.querySelector("#vault")) == null ? void 0 : e.scrollIntoView({
                            behavior: "smooth"
                        })
                    },
                    className: "group relative font-mono text-sm px-8 py-4 bg-lime text-black font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(204,255,0,0.3)] focus:outline-none focus:ring-2 focus:ring-lime focus:ring-offset-2 focus:ring-offset-black",
                    children: T.jsx("span", {
                        className: "relative z-10",
                        children: "BEGIN YOUR EXIT →"
                    })
                }), T.jsx("button", {
                    onClick: () => {
                        var e;
                        return (e = document.querySelector("#pillars")) == null ? void 0 : e.scrollIntoView({
                            behavior: "smooth"
                        })
                    },
                    className: "font-mono text-sm px-8 py-4 border border-white/10 text-foreground/80 rounded-full hover:border-cyan/30 hover:text-cyan transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan focus:ring-offset-2 focus:ring-offset-black",
                    children: "OUR STRATEGY"
                })]
            }), T.jsx(Pe.div, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                transition: {
                    duration: 1,
                    delay: 1.3
                },
                className: "flex flex-wrap gap-8 md:gap-16 mt-20 pt-8 border-t border-white/5",
                children: [{
                    value: "$50M+",
                    label: "Capital Deployed"
                }, {
                    value: "40+",
                    label: "Businesses Acquired"
                }, {
                    value: "98%",
                    label: "Founder Satisfaction"
                }].map(e => T.jsxs("div", {
                    children: [T.jsx("p", {
                        className: "font-mono text-2xl md:text-3xl font-bold text-lime",
                        children: e.value
                    }), T.jsx("p", {
                        className: "font-body text-xs tracking-wide text-muted-foreground mt-1 uppercase",
                        children: e.label
                    })]
                }, e.label))
            })]
        }), T.jsxs(Pe.button, {
            onClick: t,
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            transition: {
                delay: 1.6
            },
            className: "absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-lime transition-colors focus:outline-none",
            "aria-label": "Scroll down",
            children: [T.jsx("span", {
                className: "font-mono text-[10px] tracking-[0.3em] uppercase",
                children: "Scroll"
            }), T.jsx(Pe.div, {
                animate: {
                    y: [0, 8, 0]
                },
                transition: {
                    repeat: 1 / 0,
                    duration: 2,
                    ease: "easeInOut"
                },
                children: T.jsx(Vb, {
                    className: "w-4 h-4"
                })
            })]
        })]
    })
}

function Jv({
    children: t,
    className: e = "",
    glowColor: r = "lime",
    delay: i = 0
}) {
    const a = r === "cyan" ? "hover:border-cyan/20" : "hover:border-lime/20";
    return T.jsx(Pe.div, {
        initial: {
            opacity: 0,
            y: 40
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        viewport: {
            once: !0,
            margin: "-80px"
        },
        transition: {
            duration: .7,
            delay: i,
            ease: [.16, 1, .3, 1]
        },
        whileHover: {
            scale: 1.02
        },
        className: `glass-card rounded-2xl p-6 md:p-8 transition-all duration-500 hover:glass-card-active ${a} ${e}`,
        style: {
            willChange: "transform, opacity"
        },
        children: t
    })
}

function XO() {
    return T.jsxs("section", {
        id: "services",
        className: "relative py-32 px-6 md:px-12 lg:px-20",
        children: [T.jsxs(Pe.div, {
            initial: {
                opacity: 0,
                x: -20
            },
            whileInView: {
                opacity: 1,
                x: 0
            },
            viewport: {
                once: !0
            },
            transition: {
                duration: .6
            },
            className: "flex items-center gap-3 mb-16",
            children: [T.jsx("div", {
                className: "w-8 h-px bg-lime/60"
            }), T.jsx("span", {
                className: "font-mono text-xs tracking-[0.2em] text-lime/70 uppercase",
                children: "What We Do"
            })]
        }), T.jsxs("div", {
            className: "grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl",
            children: [T.jsxs(Jv, {
                glowColor: "lime",
                delay: 0,
                className: "group",
                id: "acquisitions",
                children: [T.jsxs("div", {
                    className: "flex items-start justify-between mb-8",
                    children: [T.jsx("div", {
                        className: "p-3 rounded-xl bg-lime/5 border border-lime/10",
                        children: T.jsx(dk, {
                            className: "w-6 h-6 text-lime"
                        })
                    }), T.jsx("span", {
                        className: "font-mono text-xs text-lime/50",
                        children: "01"
                    })]
                }), T.jsx("h3", {
                    className: "font-body font-bold text-2xl md:text-3xl text-foreground tracking-tight mb-4",
                    children: "Direct Acquisitions"
                }), T.jsx("p", {
                    className: "font-body text-base md:text-lg text-muted-foreground leading-relaxed mb-6",
                    children: "We are a private investment firm that buys and holds undervalued 'founder-exit' businesses with stable cash flows. We don't flip—we build lasting value from what you've created."
                }), T.jsx("div", {
                    className: "flex flex-wrap gap-3",
                    children: ["Stable Cash Flows", "Long-Term Hold", "Founder-Exit Focus"].map(t => T.jsx("span", {
                        className: "font-mono text-[10px] tracking-wider px-3 py-1.5 rounded-full border border-lime/15 text-lime/60 uppercase",
                        children: t
                    }, t))
                })]
            }), T.jsxs(Jv, {
                glowColor: "cyan",
                delay: .15,
                className: "group",
                id: "brokerage",
                children: [T.jsxs("div", {
                    className: "flex items-start justify-between mb-8",
                    children: [T.jsx("div", {
                        className: "p-3 rounded-xl bg-cyan/5 border border-cyan/10",
                        children: T.jsx(Ub, {
                            className: "w-6 h-6 text-cyan"
                        })
                    }), T.jsx("span", {
                        className: "font-mono text-xs text-cyan/50",
                        children: "02"
                    })]
                }), T.jsx("h3", {
                    className: "font-body font-bold text-2xl md:text-3xl text-foreground tracking-tight mb-4",
                    children: "M&A Brokerage"
                }), T.jsx("p", {
                    className: "font-body text-base md:text-lg text-muted-foreground leading-relaxed mb-6",
                    children: "We act as an intermediary to find the perfect buyers for high-quality assets that fall outside our primary portfolio. Your business deserves the right next chapter—we make the match."
                }), T.jsx("div", {
                    className: "flex flex-wrap gap-3",
                    children: ["Buyer Matching", "Deal Structuring", "Premium Assets"].map(t => T.jsx("span", {
                        className: "font-mono text-[10px] tracking-wider px-3 py-1.5 rounded-full border border-cyan/15 text-cyan/60 uppercase",
                        children: t
                    }, t))
                })]
            })]
        })]
    })
}

function JO({
    number: t,
    title: e,
    description: r,
    icon: i,
    delay: a = 0,
    isActive: l
}) {
    return T.jsxs(Pe.div, {
        initial: {
            opacity: 0,
            y: 60,
            filter: "blur(8px)"
        },
        whileInView: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)"
        },
        viewport: {
            once: !0,
            margin: "-100px"
        },
        transition: {
            duration: .8,
            delay: a,
            ease: [.16, 1, .3, 1]
        },
        className: "relative group",
        children: [t < 4 && T.jsx("div", {
            className: "hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-lime/20 to-transparent"
        }), T.jsxs("div", {
            className: "relative glass-card rounded-2xl p-8 md:p-10 transition-all duration-700 hover:glass-card-active overflow-hidden min-h-[280px] flex flex-col",
            children: [T.jsx("div", {
                className: "absolute -top-20 -right-20 w-40 h-40 bg-lime/0 group-hover:bg-lime/5 rounded-full blur-[60px] transition-all duration-700 pointer-events-none"
            }), T.jsxs("div", {
                className: "flex items-center justify-between mb-6",
                children: [T.jsxs("span", {
                    className: "font-mono text-5xl font-bold text-lime/10 group-hover:text-lime/25 transition-colors duration-500",
                    children: ["0", t]
                }), T.jsx("div", {
                    className: "p-2.5 rounded-lg bg-lime/5 border border-lime/10 group-hover:border-lime/25 group-hover:bg-lime/10 transition-all duration-500",
                    children: T.jsx(i, {
                        className: "w-5 h-5 text-lime/60 group-hover:text-lime transition-colors duration-500"
                    })
                })]
            }), T.jsx("h4", {
                className: "font-body font-bold text-xl md:text-2xl text-foreground tracking-tight mb-4 group-hover:text-lime transition-colors duration-500",
                children: e
            }), T.jsx("p", {
                className: "font-body text-base text-muted-foreground leading-relaxed flex-1",
                children: r
            }), T.jsx("div", {
                className: "mt-6 h-px bg-gradient-to-r from-lime/0 via-lime/10 to-lime/0 group-hover:via-lime/30 transition-all duration-500"
            })]
        })]
    })
}
const ZO = [{
    number: 1,
    title: "Seller-Centric Financing",
    description: "Utilizing owner financing, earn-outs, and equity roll-overs to ensure a smooth transition. The deal is structured around your timeline and comfort—not ours.",
    icon: Xb
}, {
    number: 2,
    title: "Asset-Based Lending",
    description: "Leveraging accounts receivable, equipment, or real estate as collateral for the buyout. Your business's existing assets power the deal itself.",
    icon: Zb
}, {
    number: 3,
    title: "External Capital & Partnerships",
    description: "Bringing in angel investors or utilizing SBA 7(a) loans with seller carrybacks. We architect capital stacks that close deals others can't.",
    icon: hk
}, {
    number: 4,
    title: "Assumed Liabilities",
    description: "Acquiring the business by taking over existing debts, leases, or back taxes—providing the seller with a clean break and a fresh start.",
    icon: Kb
}];

function eL() {
    return T.jsxs("section", {
        id: "pillars",
        className: "relative py-32 px-6 md:px-12 lg:px-20",
        children: [T.jsx("div", {
            className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-lime/2 rounded-full blur-[250px] pointer-events-none"
        }), T.jsxs("div", {
            className: "relative z-10 max-w-7xl mb-20",
            children: [T.jsxs(Pe.div, {
                initial: {
                    opacity: 0,
                    x: -20
                },
                whileInView: {
                    opacity: 1,
                    x: 0
                },
                viewport: {
                    once: !0
                },
                transition: {
                    duration: .6
                },
                className: "flex items-center gap-3 mb-8",
                children: [T.jsx("div", {
                    className: "w-8 h-px bg-lime/60"
                }), T.jsx("span", {
                    className: "font-mono text-xs tracking-[0.2em] text-lime/70 uppercase",
                    children: "The Strategy"
                })]
            }), T.jsxs(Pe.h2, {
                initial: {
                    opacity: 0,
                    y: 30
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: !0
                },
                transition: {
                    duration: .8,
                    delay: .1
                },
                className: "font-body font-black text-3xl md:text-5xl lg:text-6xl tracking-tighter text-foreground max-w-4xl",
                children: ["Four Strategic", " ", T.jsx("span", {
                    className: "text-lime text-glow-lime",
                    children: "Acquisition"
                }), " ", "Pillars"]
            }), T.jsx(Pe.p, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: !0
                },
                transition: {
                    duration: .8,
                    delay: .2
                },
                className: "font-body text-lg text-muted-foreground mt-6 max-w-2xl leading-relaxed",
                children: "Our proprietary deal structures are designed to create win-win outcomes— enabling seamless ownership transitions without requiring traditional upfront capital from the seller."
            })]
        }), T.jsx("div", {
            className: "relative z-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl",
            children: ZO.map((t, e) => T.jsx(JO, { ...t,
                delay: e * .12
            }, t.number))
        }), T.jsx(Pe.div, {
            initial: {
                scaleX: 0
            },
            whileInView: {
                scaleX: 1
            },
            viewport: {
                once: !0
            },
            transition: {
                duration: 1.2,
                delay: .6,
                ease: [.16, 1, .3, 1]
            },
            className: "relative z-10 max-w-7xl mt-12 h-px bg-gradient-to-r from-transparent via-lime/20 to-transparent origin-left"
        })]
    })
}
const tL = [{
    icon: rk,
    title: "Initial Consultation",
    desc: "A confidential conversation about your goals, timeline, and business metrics."
}, {
    icon: ak,
    title: "Valuation & Analysis",
    desc: "We assess fair market value using proprietary models and industry benchmarks."
}, {
    icon: Gb,
    title: "Deal Structuring",
    desc: "Tailored acquisition terms designed around your needs—financing, earn-outs, or full buyout."
}, {
    icon: qb,
    title: "Seamless Transition",
    desc: "Hands-on support to ensure your team, clients, and legacy are preserved post-close."
}];

function nL() {
    return T.jsx("section", {
        className: "relative py-32 px-6 md:px-12 lg:px-20",
        children: T.jsxs("div", {
            className: "relative z-10 max-w-7xl",
            children: [T.jsxs(Pe.div, {
                initial: {
                    opacity: 0,
                    x: -20
                },
                whileInView: {
                    opacity: 1,
                    x: 0
                },
                viewport: {
                    once: !0
                },
                transition: {
                    duration: .6
                },
                className: "flex items-center gap-3 mb-8",
                children: [T.jsx("div", {
                    className: "w-8 h-px bg-cyan/60"
                }), T.jsx("span", {
                    className: "font-mono text-xs tracking-[0.2em] text-cyan/70 uppercase",
                    children: "The Process"
                })]
            }), T.jsxs(Pe.h2, {
                initial: {
                    opacity: 0,
                    y: 30
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: !0
                },
                transition: {
                    duration: .8,
                    delay: .1
                },
                className: "font-body font-black text-3xl md:text-5xl lg:text-6xl tracking-tighter text-foreground mb-20",
                children: ["From Conversation to", " ", T.jsx("span", {
                    className: "text-cyan text-glow-cyan",
                    children: "Close"
                })]
            }), T.jsx("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",
                children: tL.map((t, e) => T.jsxs(Pe.div, {
                    initial: {
                        opacity: 0,
                        y: 40
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: !0,
                        margin: "-60px"
                    },
                    transition: {
                        duration: .7,
                        delay: e * .1
                    },
                    className: "relative group",
                    children: [T.jsxs("div", {
                        className: "flex items-center gap-4 mb-6",
                        children: [T.jsx("span", {
                            className: "font-mono text-sm text-cyan/40 group-hover:text-cyan transition-colors duration-300",
                            children: String(e + 1).padStart(2, "0")
                        }), T.jsx("div", {
                            className: "flex-1 h-px bg-white/5 group-hover:bg-cyan/20 transition-colors duration-300"
                        })]
                    }), T.jsx(t.icon, {
                        className: "w-6 h-6 text-cyan/50 group-hover:text-cyan mb-4 transition-colors duration-300"
                    }), T.jsx("h4", {
                        className: "font-body font-bold text-lg text-foreground mb-2 tracking-tight",
                        children: t.title
                    }), T.jsx("p", {
                        className: "font-body text-sm text-muted-foreground leading-relaxed",
                        children: t.desc
                    })]
                }, t.title))
            })]
        })
    })
}
const rL = [{
    quote: "Investbrook understood that my business wasn't just a balance sheet—it was 30 years of my life. They structured a deal that honored my legacy.",
    name: "Robert K.",
    role: "Former Owner, K&R Manufacturing",
    revenue: "$4.2M Revenue"
}, {
    quote: "I thought selling would mean losing everything I built. Instead, my team is thriving and I'm finally enjoying retirement.",
    name: "Patricia M.",
    role: "Founder, MidWest Logistics Co.",
    revenue: "$8.7M Revenue"
}, {
    quote: "Their brokerage team found a buyer who shared my vision within 90 days. The transition was seamless.",
    name: "James T.",
    role: "CEO, TechServe Solutions",
    revenue: "$12M Revenue"
}];

function sL() {
    return T.jsx("section", {
        className: "relative py-32 px-6 md:px-12 lg:px-20",
        children: T.jsxs("div", {
            className: "relative z-10 max-w-7xl",
            children: [T.jsxs(Pe.div, {
                initial: {
                    opacity: 0,
                    x: -20
                },
                whileInView: {
                    opacity: 1,
                    x: 0
                },
                viewport: {
                    once: !0
                },
                transition: {
                    duration: .6
                },
                className: "flex items-center gap-3 mb-16",
                children: [T.jsx("div", {
                    className: "w-8 h-px bg-lime/60"
                }), T.jsx("span", {
                    className: "font-mono text-xs tracking-[0.2em] text-lime/70 uppercase",
                    children: "Founder Stories"
                })]
            }), T.jsx("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                children: rL.map((t, e) => T.jsxs(Pe.div, {
                    initial: {
                        opacity: 0,
                        y: 40
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: !0,
                        margin: "-60px"
                    },
                    transition: {
                        duration: .7,
                        delay: e * .12
                    },
                    className: "glass-card rounded-2xl p-8 flex flex-col hover:glass-card-active transition-all duration-500 group",
                    children: [T.jsx(ik, {
                        className: "w-5 h-5 text-lime/30 group-hover:text-lime/60 mb-6 transition-colors duration-500"
                    }), T.jsxs("p", {
                        className: "font-body text-base text-foreground/80 leading-relaxed flex-1 mb-8",
                        children: ['"', t.quote, '"']
                    }), T.jsxs("div", {
                        className: "border-t border-white/5 pt-5",
                        children: [T.jsx("p", {
                            className: "font-body font-semibold text-sm text-foreground",
                            children: t.name
                        }), T.jsx("p", {
                            className: "font-body text-xs text-muted-foreground mt-0.5",
                            children: t.role
                        }), T.jsx("p", {
                            className: "font-mono text-xs text-lime/50 mt-2",
                            children: t.revenue
                        })]
                    })]
                }, t.name))
            })]
        })
    })
}

function iL() {
    const [t, e] = D.useState({
        name: "",
        email: "",
        revenue: "",
        timeline: ""
    }), [r, i] = D.useState(!1), [a, l] = D.useState(!1), c = async d => {
        d.preventDefault(), l(!0), await Jr.entities.Inquiry.create(t), await Jr.integrations.Core.SendEmail({
            to: "hr@investbrook.net",
            subject: `New Exit Inquiry from ${t.name}`,
            body: `New inquiry received:

Name: ${t.name}
Email: ${t.email}
Revenue: ${t.revenue}
Exit Timeline: ${t.timeline}`
        }), l(!1), i(!0)
    };
    return T.jsxs("footer", {
        id: "vault",
        className: "relative",
        children: [T.jsxs("section", {
            className: "relative bg-lime text-black py-24 md:py-32 px-6 md:px-12 lg:px-20 overflow-hidden",
            children: [T.jsx("div", {
                className: "absolute inset-0 opacity-[0.04]",
                style: {
                    backgroundImage: `
            linear-gradient(black 1px, transparent 1px),
            linear-gradient(90deg, black 1px, transparent 1px)
          `,
                    backgroundSize: "40px 40px"
                }
            }), T.jsxs("div", {
                className: "relative z-10 max-w-5xl",
                children: [T.jsxs(Pe.div, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: !0
                    },
                    transition: {
                        duration: .8
                    },
                    children: [T.jsx("span", {
                        className: "font-mono text-xs tracking-[0.2em] uppercase text-black/50 mb-6 block",
                        children: "The Vault — Inquiry Terminal"
                    }), T.jsxs("h2", {
                        className: "font-body font-black text-4xl md:text-6xl lg:text-7xl tracking-tighter leading-[0.9] mb-6",
                        children: ["Ready to Write", T.jsx("br", {}), "Your Next Chapter?"]
                    }), T.jsx("p", {
                        className: "font-body text-lg md:text-xl text-black/60 max-w-xl leading-relaxed mb-12",
                        children: "Every great exit starts with a conversation. Tell us about your business, and we'll show you what's possible."
                    })]
                }), r ? T.jsxs(Pe.div, {
                    initial: {
                        opacity: 0,
                        scale: .95
                    },
                    animate: {
                        opacity: 1,
                        scale: 1
                    },
                    className: "bg-black/10 rounded-2xl p-8 max-w-lg",
                    children: [T.jsx("p", {
                        className: "font-mono text-sm text-black/60 mb-2",
                        children: "> STATUS:"
                    }), T.jsx("p", {
                        className: "font-body font-bold text-2xl text-black mb-2",
                        children: "Inquiry Received"
                    }), T.jsx("p", {
                        className: "font-body text-black/60",
                        children: "Our team will reach out within 24 hours to discuss your exit strategy."
                    })]
                }) : T.jsxs(Pe.form, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: !0
                    },
                    transition: {
                        duration: .8,
                        delay: .2
                    },
                    onSubmit: c,
                    className: "space-y-4 max-w-lg",
                    children: [
                        [{
                            key: "name",
                            placeholder: "> Name:",
                            type: "text"
                        }, {
                            key: "email",
                            placeholder: "> Email:",
                            type: "email"
                        }, {
                            key: "revenue",
                            placeholder: "> Business Revenue:",
                            type: "text"
                        }, {
                            key: "timeline",
                            placeholder: "> Exit Timeline:",
                            type: "text"
                        }].map(d => T.jsx("input", {
                            type: d.type,
                            placeholder: d.placeholder,
                            value: t[d.key],
                            onChange: h => e({ ...t,
                                [d.key]: h.target.value
                            }),
                            required: d.key === "name" || d.key === "email",
                            className: "w-full font-mono text-sm bg-transparent border-b-2 border-black/20 focus:border-black px-0 py-4 placeholder-black/30 text-black outline-none transition-colors"
                        }, d.key)), T.jsxs("button", {
                            type: "submit",
                            className: "group mt-8 font-mono text-sm px-8 py-4 bg-black text-lime font-semibold rounded-full inline-flex items-center gap-2 hover:gap-4 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-lime",
                            children: [a ? "SENDING..." : "SUBMIT INQUIRY", T.jsx(uk, {
                                className: "w-4 h-4"
                            })]
                        })
                    ]
                })]
            })]
        }), T.jsx("div", {
            className: "bg-black border-t border-white/5 py-8 px-6 md:px-12 lg:px-20",
            children: T.jsxs("div", {
                className: "max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4",
                children: [T.jsxs("div", {
                    className: "flex items-center gap-3",
                    children: [T.jsx("div", {
                        className: "w-2 h-2 rounded-full bg-lime"
                    }), T.jsx("span", {
                        className: "font-body font-bold text-sm text-foreground",
                        children: "INVESTBROOK"
                    })]
                }), T.jsxs("p", {
                    className: "font-mono text-xs text-muted-foreground",
                    children: ["© ", new Date().getFullYear(), " Investbrook. All rights reserved."]
                }), T.jsx("div", {
                    className: "flex gap-6",
                    children: ["Privacy", "Terms", "Contact"].map(d => T.jsxs("a", {
                        href: "#",
                        className: "font-mono text-xs text-muted-foreground hover:text-lime transition-colors",
                        children: [d, T.jsx($b, {
                            className: "w-3 h-3 inline ml-0.5"
                        })]
                    }, d))
                })]
            })
        })]
    })
}

function oL() {
    return T.jsxs("div", {
        className: "bg-black min-h-screen font-body text-foreground overflow-x-hidden",
        children: [T.jsx(QO, {}), T.jsx(GO, {}), T.jsx(KO, {}), T.jsxs("main", {
            className: "relative z-10",
            children: [T.jsx(YO, {}), T.jsx(XO, {}), T.jsx(eL, {}), T.jsx(nL, {}), T.jsx(sL, {})]
        }), T.jsx(iL, {})]
    })
}
const aL = () => {
    const {
        isLoadingAuth: t,
        isLoadingPublicSettings: e,
        authError: r,
        navigateToLogin: i
    } = $_();
    if (e || t) return T.jsx("div", {
        className: "fixed inset-0 flex items-center justify-center",
        children: T.jsx("div", {
            className: "w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"
        })
    });
    if (r) {
        if (r.type === "user_not_registered") return T.jsx(H_, {});
        if (r.type === "auth_required") return i(), null
    }
    return T.jsxs(RT, {
        children: [T.jsx(zd, {
            path: "/",
            element: T.jsx(oL, {})
        }), T.jsx(zd, {
            path: "*",
            element: T.jsx(U_, {})
        })]
    })
};

function lL() {
    return T.jsx(z_, {
        children: T.jsxs(OE, {
            client: qE,
            children: [T.jsx(OT, {
                children: T.jsx(aL, {})
            }), T.jsx(oE, {})]
        })
    })
}
Pb.createRoot(document.getElementById("root")).render(T.jsx(lL, {}));