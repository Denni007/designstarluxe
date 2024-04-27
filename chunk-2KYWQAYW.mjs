import {a as Tu, b as Ke, c as _} from "./chunk-ELYU6EKT.mjs";
var Re = {};
Tu(Re, {
    Children: ()=>yn,
    Component: ()=>xe,
    Fragment: ()=>Ii,
    Profiler: ()=>qC,
    PureComponent: ()=>QC,
    StrictMode: ()=>ZC,
    Suspense: ()=>Ao,
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ()=>JC,
    cloneElement: ()=>an,
    createContext: ()=>Se,
    createElement: ()=>ce,
    createFactory: ()=>ek,
    createRef: ()=>Lm,
    default: ()=>b,
    forwardRef: ()=>We,
    isValidElement: ()=>bn,
    lazy: ()=>tk,
    memo: ()=>nk,
    startTransition: ()=>Fi,
    unstable_act: ()=>rk,
    useCallback: ()=>ue,
    useContext: ()=>M,
    useDebugValue: ()=>ik,
    useDeferredValue: ()=>ok,
    useEffect: ()=>$,
    useId: ()=>Yr,
    useImperativeHandle: ()=>ak,
    useInsertionEffect: ()=>Ct,
    useLayoutEffect: ()=>lr,
    useMemo: ()=>he,
    useReducer: ()=>sk,
    useRef: ()=>O,
    useState: ()=>kt,
    useSyncExternalStore: ()=>lk,
    useTransition: ()=>ck,
    version: ()=>uk
});
var b = {}
  , Do = Symbol.for("react.element")
  , DC = Symbol.for("react.portal")
  , AC = Symbol.for("react.fragment")
  , VC = Symbol.for("react.strict_mode")
  , BC = Symbol.for("react.profiler")
  , zC = Symbol.for("react.provider")
  , HC = Symbol.for("react.context")
  , NC = Symbol.for("react.forward_ref")
  , $C = Symbol.for("react.suspense")
  , jC = Symbol.for("react.memo")
  , WC = Symbol.for("react.lazy")
  , wm = Symbol.iterator;
function UC(e) {
    return e === null || typeof e != "object" ? null : (e = wm && e[wm] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var Tm = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , Em = Object.assign
  , Rm = {};
function Pi(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Rm,
    this.updater = n || Tm
}
Pi.prototype.isReactComponent = {};
Pi.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
Pi.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function Pm() {}
Pm.prototype = Pi.prototype;
function Ru(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Rm,
    this.updater = n || Tm
}
var Pu = Ru.prototype = new Pm;
Pu.constructor = Ru;
Em(Pu, Pi.prototype);
Pu.isPureReactComponent = !0;
var Cm = Array.isArray
  , Im = Object.prototype.hasOwnProperty
  , Iu = {
    current: null
}
  , Fm = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function _m(e, t, n) {
    var r, i = {}, o = null, a = null;
    if (t != null)
        for (r in t.ref !== void 0 && (a = t.ref),
        t.key !== void 0 && (o = "" + t.key),
        t)
            Im.call(t, r) && !Fm.hasOwnProperty(r) && (i[r] = t[r]);
    var s = arguments.length - 2;
    if (s === 1)
        i.children = n;
    else if (1 < s) {
        for (var l = Array(s), c = 0; c < s; c++)
            l[c] = arguments[c + 2];
        i.children = l
    }
    if (e && e.defaultProps)
        for (r in s = e.defaultProps,
        s)
            i[r] === void 0 && (i[r] = s[r]);
    return {
        $$typeof: Do,
        type: e,
        key: o,
        ref: a,
        props: i,
        _owner: Iu.current
    }
}
function XC(e, t) {
    return {
        $$typeof: Do,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function Fu(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Do
}
function YC(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var km = /\/+/g;
function Eu(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? YC("" + e.key) : t.toString(36)
}
function Ms(e, t, n, r, i) {
    var o = typeof e;
    o !== "undefined" && o !== "boolean" || (e = null);
    var a = !1;
    if (e === null)
        a = !0;
    else
        switch (o) {
        case "string":
        case "number":
            a = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case Do:
            case DC:
                a = !0
            }
        }
    if (a)
        return a = e,
        i = i(a),
        e = r === "" ? "." + Eu(a, 0) : r,
        Cm(i) ? (n = "",
        e != null && (n = e.replace(km, "$&/") + "/"),
        Ms(i, t, n, "", function(c) {
            return c
        })) : i != null && (Fu(i) && (i = XC(i, n + (!i.key || a && a.key === i.key ? "" : ("" + i.key).replace(km, "$&/") + "/") + e)),
        t.push(i)),
        1;
    if (a = 0,
    r = r === "" ? "." : r + ":",
    Cm(e))
        for (var s = 0; s < e.length; s++) {
            o = e[s];
            var l = r + Eu(o, s);
            a += Ms(o, t, n, l, i)
        }
    else if (l = UC(e),
    typeof l == "function")
        for (e = l.call(e),
        s = 0; !(o = e.next()).done; )
            o = o.value,
            l = r + Eu(o, s++),
            a += Ms(o, t, n, l, i);
    else if (o === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return a
}
function Ls(e, t, n) {
    if (e == null)
        return e;
    var r = []
      , i = 0;
    return Ms(e, r, "", "", function(o) {
        return t.call(n, o, i++)
    }),
    r
}
function GC(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(n) {
            e._status !== 0 && e._status !== -1 || (e._status = 1,
            e._result = n)
        }, function(n) {
            e._status !== 0 && e._status !== -1 || (e._status = 2,
            e._result = n)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var dt = {
    current: null
}
  , Os = {
    transition: null
}
  , KC = {
    ReactCurrentDispatcher: dt,
    ReactCurrentBatchConfig: Os,
    ReactCurrentOwner: Iu
};
b.Children = {
    map: Ls,
    forEach: function(e, t, n) {
        Ls(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return Ls(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return Ls(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!Fu(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
b.Component = Pi;
b.Fragment = AC;
b.Profiler = BC;
b.PureComponent = Ru;
b.StrictMode = VC;
b.Suspense = $C;
b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = KC;
b.cloneElement = function(e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = Em({}, e.props)
      , i = e.key
      , o = e.ref
      , a = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (o = t.ref,
        a = Iu.current),
        t.key !== void 0 && (i = "" + t.key),
        e.type && e.type.defaultProps)
            var s = e.type.defaultProps;
        for (l in t)
            Im.call(t, l) && !Fm.hasOwnProperty(l) && (r[l] = t[l] === void 0 && s !== void 0 ? s[l] : t[l])
    }
    var l = arguments.length - 2;
    if (l === 1)
        r.children = n;
    else if (1 < l) {
        s = Array(l);
        for (var c = 0; c < l; c++)
            s[c] = arguments[c + 2];
        r.children = s
    }
    return {
        $$typeof: Do,
        type: e.type,
        key: i,
        ref: o,
        props: r,
        _owner: a
    }
}
;
b.createContext = function(e) {
    return e = {
        $$typeof: HC,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: zC,
        _context: e
    },
    e.Consumer = e
}
;
b.createElement = _m;
b.createFactory = function(e) {
    var t = _m.bind(null, e);
    return t.type = e,
    t
}
;
b.createRef = function() {
    return {
        current: null
    }
}
;
b.forwardRef = function(e) {
    return {
        $$typeof: NC,
        render: e
    }
}
;
b.isValidElement = Fu;
b.lazy = function(e) {
    return {
        $$typeof: WC,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: GC
    }
}
;
b.memo = function(e, t) {
    return {
        $$typeof: jC,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
b.startTransition = function(e) {
    var t = Os.transition;
    Os.transition = {};
    try {
        e()
    } finally {
        Os.transition = t
    }
}
;
b.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.")
}
;
b.useCallback = function(e, t) {
    return dt.current.useCallback(e, t)
}
;
b.useContext = function(e) {
    return dt.current.useContext(e)
}
;
b.useDebugValue = function() {}
;
b.useDeferredValue = function(e) {
    return dt.current.useDeferredValue(e)
}
;
b.useEffect = function(e, t) {
    return dt.current.useEffect(e, t)
}
;
b.useId = function() {
    return dt.current.useId()
}
;
b.useImperativeHandle = function(e, t, n) {
    return dt.current.useImperativeHandle(e, t, n)
}
;
b.useInsertionEffect = function(e, t) {
    return dt.current.useInsertionEffect(e, t)
}
;
b.useLayoutEffect = function(e, t) {
    return dt.current.useLayoutEffect(e, t)
}
;
b.useMemo = function(e, t) {
    return dt.current.useMemo(e, t)
}
;
b.useReducer = function(e, t, n) {
    return dt.current.useReducer(e, t, n)
}
;
b.useRef = function(e) {
    return dt.current.useRef(e)
}
;
b.useState = function(e) {
    return dt.current.useState(e)
}
;
b.useSyncExternalStore = function(e, t, n) {
    return dt.current.useSyncExternalStore(e, t, n)
}
;
b.useTransition = function() {
    return dt.current.useTransition()
}
;
b.version = "18.2.0";
var yn = b.Children
  , xe = b.Component
  , Ii = b.Fragment
  , qC = b.Profiler
  , QC = b.PureComponent
  , ZC = b.StrictMode
  , Ao = b.Suspense
  , JC = b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , an = b.cloneElement
  , Se = b.createContext
  , ce = b.createElement
  , ek = b.createFactory
  , Lm = b.createRef
  , We = b.forwardRef
  , bn = b.isValidElement
  , tk = b.lazy
  , nk = b.memo
  , Fi = b.startTransition
  , rk = b.unstable_act
  , ue = b.useCallback
  , M = b.useContext
  , ik = b.useDebugValue
  , ok = b.useDeferredValue
  , $ = b.useEffect
  , Yr = b.useId
  , ak = b.useImperativeHandle
  , Ct = b.useInsertionEffect
  , lr = b.useLayoutEffect
  , he = b.useMemo
  , sk = b.useReducer
  , O = b.useRef
  , kt = b.useState
  , lk = b.useSyncExternalStore
  , ck = b.useTransition
  , uk = b.version;
var fk = Object.create
  , lf = Object.defineProperty
  , dk = Object.getOwnPropertyDescriptor
  , Yv = Object.getOwnPropertyNames
  , hk = Object.getPrototypeOf
  , pk = Object.prototype.hasOwnProperty
  , mk = (e,t,n)=>t in e ? lf(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n
  , sn = (e,t)=>function() {
    return t || (0,
    e[Yv(e)[0]])((t = {
        exports: {}
    }).exports, t),
    t.exports
}
  , vk = (e,t,n,r)=>{
    if (t && typeof t == "object" || typeof t == "function")
        for (let i of Yv(t))
            !pk.call(e, i) && i !== n && lf(e, i, {
                get: ()=>t[i],
                enumerable: !(r = dk(t, i)) || r.enumerable
            });
    return e
}
  , Gt = (e,t,n)=>(n = e != null ? fk(hk(e)) : {},
vk(t || !e || !e.__esModule ? lf(n, "default", {
    value: e,
    enumerable: !0
}) : n, e))
  , R = (e,t,n)=>(mk(e, typeof t != "symbol" ? t + "" : t, n),
n)
  , Gv = (e,t,n)=>{
    if (!t.has(e))
        throw TypeError("Cannot " + n)
}
  , Et = (e,t,n)=>(Gv(e, t, "read from private field"),
n ? n.call(e) : t.get(e))
  , Qo = (e,t,n)=>{
    if (t.has(e))
        throw TypeError("Cannot add the same private member more than once");
    t instanceof WeakSet ? t.add(e) : t.set(e, n)
}
  , cf = (e,t,n,r)=>(Gv(e, t, "write to private field"),
r ? r.call(e, n) : t.set(e, n),
n)
  , gk = sn({
    "../../../node_modules/@emotion/memoize/dist/memoize.browser.cjs.js"(e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        function t(n) {
            var r = {};
            return function(i) {
                return r[i] === void 0 && (r[i] = n(i)),
                r[i]
            }
        }
        e.default = t
    }
})
  , yk = sn({
    "../../../node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.cjs.js"(e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        function t(o) {
            return o && typeof o == "object" && "default"in o ? o.default : o
        }
        var n = t(gk())
          , r = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/
          , i = n(function(o) {
            return r.test(o) || o.charCodeAt(0) === 111 && o.charCodeAt(1) === 110 && o.charCodeAt(2) < 91
        });
        e.default = i
    }
})
  , kn = Se({
    transformPagePoint: e=>e,
    isStatic: !1,
    reducedMotion: "never"
})
  , Zo = Se({})
  , Vi = Se(null)
  , Jo = typeof document < "u"
  , hr = Jo ? lr : $
  , uf = e=>e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase()
  , bk = "framerAppearId"
  , el = "data-" + uf(bk)
  , tl = {
    skipAnimations: !1,
    useManualTiming: !1
}
  , Go = Se({})
  , nl = Se({})
  , Kv = Se({
    strict: !1
})
  , Mm = class {
    constructor() {
        this.order = [],
        this.scheduled = new Set
    }
    add(e) {
        if (!this.scheduled.has(e))
            return this.scheduled.add(e),
            this.order.push(e),
            !0
    }
    remove(e) {
        let t = this.order.indexOf(e);
        t !== -1 && (this.order.splice(t, 1),
        this.scheduled.delete(e))
    }
    clear() {
        this.order.length = 0,
        this.scheduled.clear()
    }
}
;
function xk(e) {
    let t = new Mm
      , n = new Mm
      , r = 0
      , i = !1
      , o = !1
      , a = new WeakSet
      , s = {
        schedule: (l,c=!1,u=!1)=>{
            let f = u && i
              , d = f ? t : n;
            return c && a.add(l),
            d.add(l) && f && i && (r = t.order.length),
            l
        }
        ,
        cancel: l=>{
            n.remove(l),
            a.delete(l)
        }
        ,
        process: l=>{
            if (i) {
                o = !0;
                return
            }
            if (i = !0,
            [t,n] = [n, t],
            n.clear(),
            r = t.order.length,
            r)
                for (let c = 0; c < r; c++) {
                    let u = t.order[c];
                    a.has(u) && (s.schedule(u),
                    e()),
                    u(l)
                }
            i = !1,
            o && (o = !1,
            s.process(l))
        }
    };
    return s
}
var Ho = ["prepare", "read", "update", "preRender", "render", "postRender"]
  , Sk = 40;
function qv(e, t) {
    let n = !1
      , r = !0
      , i = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    }
      , o = Ho.reduce((f,d)=>(f[d] = xk(()=>n = !0),
    f), {})
      , a = f=>{
        o[f].process(i)
    }
      , s = ()=>{
        let f = tl.useManualTiming ? i.timestamp : performance.now();
        n = !1,
        i.delta = r ? 1e3 / 60 : Math.max(Math.min(f - i.timestamp, Sk), 1),
        i.timestamp = f,
        i.isProcessing = !0,
        Ho.forEach(a),
        i.isProcessing = !1,
        n && t && (r = !1,
        e(s))
    }
      , l = ()=>{
        n = !0,
        r = !0,
        i.isProcessing || e(s)
    }
    ;
    return {
        schedule: Ho.reduce((f,d)=>{
            let h = o[d];
            return f[d] = (g,y=!1,S=!1)=>(n || l(),
            h.schedule(g, y, S)),
            f
        }
        , {}),
        cancel: f=>Ho.forEach(d=>o[d].cancel(f)),
        state: i,
        steps: o
    }
}
var {schedule: ff, cancel: dB} = qv(queueMicrotask, !1);
function wk(e, t, n, r) {
    let {visualElement: i} = M(Zo)
      , o = M(Kv)
      , a = M(Vi)
      , s = M(kn).reducedMotion
      , l = O();
    r = r || o.renderer,
    !l.current && r && (l.current = r(e, {
        visualState: t,
        parent: i,
        props: n,
        presenceContext: a,
        blockInitialAnimation: a ? a.initial === !1 : !1,
        reducedMotionConfig: s
    }));
    let c = l.current;
    Ct(()=>{
        c && c.update(n, a)
    }
    );
    let u = O(!!(n[el] && !_.HandoffComplete));
    return hr(()=>{
        c && (ff.postRender(c.render),
        u.current && c.animationState && c.animationState.animateChanges())
    }
    ),
    $(()=>{
        c && (c.updateFeatures(),
        !u.current && c.animationState && c.animationState.animateChanges(),
        u.current && (u.current = !1,
        _.HandoffComplete = !0))
    }
    ),
    c
}
function _i(e) {
    return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
}
function Ck(e, t, n) {
    return ue(r=>{
        r && e.mount && e.mount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : _i(n) && (n.current = r))
    }
    , [t])
}
function Ko(e) {
    return typeof e == "string" || Array.isArray(e)
}
function rl(e) {
    return e !== null && typeof e == "object" && typeof e.start == "function"
}
var df = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]
  , hf = ["initial", ...df];
function il(e) {
    return rl(e.animate) || hf.some(t=>Ko(e[t]))
}
function Qv(e) {
    return !!(il(e) || e.variants)
}
function kk(e, t) {
    if (il(e)) {
        let {initial: n, animate: r} = e;
        return {
            initial: n === !1 || Ko(n) ? n : void 0,
            animate: Ko(r) ? r : void 0
        }
    }
    return e.inherit !== !1 ? t : {}
}
function Tk(e) {
    let {initial: t, animate: n} = kk(e, M(Zo));
    return he(()=>({
        initial: t,
        animate: n
    }), [Om(t), Om(n)])
}
function Om(e) {
    return Array.isArray(e) ? e.join(" ") : e
}
var Dm = {
    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"]
}
  , qo = {};
for (let e in Dm)
    qo[e] = {
        isEnabled: t=>Dm[e].some(n=>!!t[n])
    };
function Ek(e) {
    for (let t in e)
        qo[t] = {
            ...qo[t],
            ...e[t]
        }
}
var pf = Symbol.for("motionComponentSymbol");
function Zv({preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: r, Component: i}) {
    e && Ek(e);
    function o(s, l) {
        let c, u = {
            ...M(kn),
            ...s,
            layoutId: Rk(s)
        }, {isStatic: f} = u, d = Tk(s), h = r(s, f);
        if (!f && Jo) {
            d.visualElement = wk(i, h, u, t);
            let g = M(nl)
              , y = M(Kv).strict;
            d.visualElement && (c = d.visualElement.loadFeatures(u, y, e, g))
        }
        return ce(Zo.Provider, {
            value: d
        }, c && d.visualElement ? ce(c, {
            visualElement: d.visualElement,
            ...u
        }) : null, n(i, s, Ck(h, d.visualElement, l), h, f, d.visualElement))
    }
    let a = We(o);
    return a[pf] = i,
    a
}
function Rk({layoutId: e}) {
    let t = M(Go).id;
    return t && e !== void 0 ? t + "-" + e : e
}
var Us = {};
function mf(e) {
    Object.assign(Us, e)
}
var Fe = e=>!!(e && e.getVelocity)
  , ea = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
  , ni = new Set(ea)
  , Pk = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
}
  , Ik = ea.length;
function Jv(e, {enableHardwareAcceleration: t=!0, allowTransformNone: n=!0}, r, i) {
    let o = "";
    for (let a = 0; a < Ik; a++) {
        let s = ea[a];
        if (e[s] !== void 0) {
            let l = Pk[s] || s;
            o += `${l}(${e[s]}) `
        }
    }
    return t && !e.z && (o += "translateZ(0)"),
    o = o.trim(),
    i ? o = i(e, r ? "" : o) : n && r && (o = "none"),
    o
}
var Wn = (e,t,n)=>n > t ? t : n < e ? e : n
  , $o = e=>Math.round(e * 1e5) / 1e5
  , vf = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu
  , Fk = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu
  , _k = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
function ta(e) {
    return typeof e == "string"
}
var na = e=>({
    test: t=>ta(t) && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: t=>`${t}${e}`
})
  , cr = na("deg")
  , xn = na("%")
  , j = na("px")
  , Lk = na("vh")
  , Mk = na("vw")
  , Am = {
    ...xn,
    parse: e=>xn.parse(e) / 100,
    transform: e=>xn.transform(e * 100)
}
  , Ok = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);
function Di(e) {
    return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || Ok.has(e)
}
var eg = e=>!Di(e);
function tg(e) {
    e && (eg = t=>t.startsWith("on") ? !Di(t) : e(t))
}
try {
    tg(yk().default)
} catch {}
function ng(e, t, n) {
    let r = {};
    for (let i in e)
        i === "values" && typeof e.values == "object" || (eg(i) || n === !0 && Di(i) || !t && !Di(i) || e.draggable && i.startsWith("onDrag")) && (r[i] = e[i]);
    return r
}
var Xs = e=>Array.isArray(e)
  , Dk = e=>!!(e && typeof e == "object" && e.mix && e.toValue)
  , Ak = e=>Xs(e) ? e[e.length - 1] || 0 : e;
function nt(e) {
    let t = Fe(e) ? e.get() : e;
    return Dk(t) ? t.toValue() : t
}
function gf(e, t, n, r={}, i={}) {
    return typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)),
    typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)),
    t
}
function Yn(e) {
    let t = O(null);
    return t.current === null && (t.current = e()),
    t.current
}
function Vk({scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n}, r, i, o) {
    let a = {
        latestValues: Bk(r, i, o, e),
        renderState: t()
    };
    return n && (a.mount = s=>n(r, s, a)),
    a
}
var ol = e=>(t,n)=>{
    let r = M(Zo)
      , i = M(Vi)
      , o = ()=>Vk(e, t, r, i);
    return n ? o() : Yn(o)
}
;
function Bk(e, t, n, r) {
    let i = {}
      , o = r(e, {});
    for (let d in o)
        i[d] = nt(o[d]);
    let {initial: a, animate: s} = e
      , l = il(e)
      , c = Qv(e);
    t && c && !l && e.inherit !== !1 && (a === void 0 && (a = t.initial),
    s === void 0 && (s = t.animate));
    let u = n ? n.initial === !1 : !1;
    u = u || a === !1;
    let f = u ? s : a;
    return f && typeof f != "boolean" && !rl(f) && (Array.isArray(f) ? f : [f]).forEach(h=>{
        let g = gf(e, h);
        if (!g)
            return;
        let {transitionEnd: y, transition: S, ...m} = g;
        for (let p in m) {
            let v = m[p];
            if (Array.isArray(v)) {
                let x = u ? v.length - 1 : 0;
                v = v[x]
            }
            v !== null && (i[p] = v)
        }
        for (let p in y)
            i[p] = y[p]
    }
    ),
    i
}
var De = e=>e
  , {schedule: J, cancel: rt, state: Ie, steps: Hs} = qv(typeof requestAnimationFrame < "u" ? requestAnimationFrame : De, !0)
  , rg = e=>e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1;
function al(e, t="page") {
    return {
        point: {
            x: e[t + "X"],
            y: e[t + "Y"]
        }
    }
}
var ig = e=>t=>rg(t) && e(t, al(t));
function $n(e, t, n, r={
    passive: !0
}) {
    return e.addEventListener(t, n, r),
    ()=>e.removeEventListener(t, n)
}
function Sn(e, t, n, r) {
    return $n(e, t, ig(n), r)
}
var zk = (e,t)=>n=>t(e(n))
  , wn = (...e)=>e.reduce(zk);
function og(e) {
    let t = null;
    return ()=>{
        let n = ()=>{
            t = null
        }
        ;
        return t === null ? (t = e,
        n) : !1
    }
}
var Vm = og("dragHorizontal")
  , Bm = og("dragVertical");
function ag(e) {
    let t = !1;
    if (e === "y")
        t = Bm();
    else if (e === "x")
        t = Vm();
    else {
        let n = Vm()
          , r = Bm();
        n && r ? t = ()=>{
            n(),
            r()
        }
        : (n && n(),
        r && r())
    }
    return t
}
function yf() {
    let e = ag(!0);
    return e ? (e(),
    !1) : !0
}
var ra = De
  , it = De
  , sg = (e,t,n)=>(((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e
  , Hk = 1e-7
  , Nk = 12;
function $k(e, t, n, r, i) {
    let o, a, s = 0;
    do
        a = t + (n - t) / 2,
        o = sg(a, r, i) - e,
        o > 0 ? n = a : t = a;
    while (Math.abs(o) > Hk && ++s < Nk);
    return a
}
function Bi(e, t, n, r) {
    if (e === t && n === r)
        return De;
    let i = o=>$k(o, 0, 1, e, n);
    return o=>o === 0 || o === 1 ? o : sg(i(o), t, r)
}
var lg = Bi(.42, 0, 1, 1)
  , cg = Bi(0, 0, .58, 1)
  , bf = Bi(.42, 0, .58, 1)
  , xf = e=>t=>t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2
  , Sf = e=>t=>1 - e(1 - t)
  , sl = e=>1 - Math.sin(Math.acos(e))
  , wf = Sf(sl)
  , ug = xf(sl)
  , Cf = Bi(.33, 1.53, .69, .99)
  , ll = Sf(Cf)
  , fg = xf(ll)
  , dg = e=>(e *= 2) < 1 ? .5 * ll(e) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
  , dr = (e,t,n)=>{
    let r = t - e;
    return r === 0 ? 1 : (n - e) / r
}
  , zi = {
    test: e=>typeof e == "number",
    parse: parseFloat,
    transform: e=>e
}
  , jo = {
    ...zi,
    transform: e=>Wn(0, 1, e)
}
  , As = {
    ...zi,
    default: 1
}
  , kf = (e,t)=>n=>!!(ta(n) && _k.test(n) && n.startsWith(e) || t && Object.prototype.hasOwnProperty.call(n, t))
  , hg = (e,t,n)=>r=>{
    if (!ta(r))
        return r;
    let[i,o,a,s] = r.match(vf);
    return {
        [e]: parseFloat(i),
        [t]: parseFloat(o),
        [n]: parseFloat(a),
        alpha: s !== void 0 ? parseFloat(s) : 1
    }
}
  , jk = e=>Wn(0, 255, e)
  , _u = {
    ...zi,
    transform: e=>Math.round(jk(e))
}
  , Zr = {
    test: kf("rgb", "red"),
    parse: hg("red", "green", "blue"),
    transform: ({red: e, green: t, blue: n, alpha: r=1})=>"rgba(" + _u.transform(e) + ", " + _u.transform(t) + ", " + _u.transform(n) + ", " + $o(jo.transform(r)) + ")"
};
function Wk(e) {
    let t = ""
      , n = ""
      , r = ""
      , i = "";
    return e.length > 5 ? (t = e.substring(1, 3),
    n = e.substring(3, 5),
    r = e.substring(5, 7),
    i = e.substring(7, 9)) : (t = e.substring(1, 2),
    n = e.substring(2, 3),
    r = e.substring(3, 4),
    i = e.substring(4, 5),
    t += t,
    n += n,
    r += r,
    i += i),
    {
        red: parseInt(t, 16),
        green: parseInt(n, 16),
        blue: parseInt(r, 16),
        alpha: i ? parseInt(i, 16) / 255 : 1
    }
}
var Wu = {
    test: kf("#"),
    parse: Wk,
    transform: Zr.transform
}
  , Li = {
    test: kf("hsl", "hue"),
    parse: hg("hue", "saturation", "lightness"),
    transform: ({hue: e, saturation: t, lightness: n, alpha: r=1})=>"hsla(" + Math.round(e) + ", " + xn.transform($o(t)) + ", " + xn.transform($o(n)) + ", " + $o(jo.transform(r)) + ")"
}
  , qe = {
    test: e=>Zr.test(e) || Wu.test(e) || Li.test(e),
    parse: e=>Zr.test(e) ? Zr.parse(e) : Li.test(e) ? Li.parse(e) : Wu.parse(e),
    transform: e=>ta(e) ? e : e.hasOwnProperty("red") ? Zr.transform(e) : Li.transform(e)
};
function Uk(e) {
    var t, n;
    return isNaN(e) && ta(e) && (((t = e.match(vf)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(Fk)) === null || n === void 0 ? void 0 : n.length) || 0) > 0
}
var pg = "number"
  , mg = "color"
  , Xk = "var"
  , Yk = "var("
  , zm = "${}"
  , Gk = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Ys(e) {
    let t = e.toString()
      , n = []
      , r = {
        color: [],
        number: [],
        var: []
    }
      , i = []
      , o = 0
      , s = t.replace(Gk, l=>(qe.test(l) ? (r.color.push(o),
    i.push(mg),
    n.push(qe.parse(l))) : l.startsWith(Yk) ? (r.var.push(o),
    i.push(Xk),
    n.push(l)) : (r.number.push(o),
    i.push(pg),
    n.push(parseFloat(l))),
    ++o,
    zm)).split(zm);
    return {
        values: n,
        split: s,
        indexes: r,
        types: i
    }
}
function vg(e) {
    return Ys(e).values
}
function gg(e) {
    let {split: t, types: n} = Ys(e)
      , r = t.length;
    return i=>{
        let o = "";
        for (let a = 0; a < r; a++)
            if (o += t[a],
            i[a] !== void 0) {
                let s = n[a];
                s === pg ? o += $o(i[a]) : s === mg ? o += qe.transform(i[a]) : o += i[a]
            }
        return o
    }
}
var Kk = e=>typeof e == "number" ? 0 : e;
function qk(e) {
    let t = vg(e);
    return gg(e)(t.map(Kk))
}
var Un = {
    test: Uk,
    parse: vg,
    createTransformer: gg,
    getAnimatableNone: qk
}
  , pe = (e,t,n)=>e + (t - e) * n;
function Lu(e, t, n) {
    return n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
}
function Qk({hue: e, saturation: t, lightness: n, alpha: r}) {
    e /= 360,
    t /= 100,
    n /= 100;
    let i = 0
      , o = 0
      , a = 0;
    if (!t)
        i = o = a = n;
    else {
        let s = n < .5 ? n * (1 + t) : n + t - n * t
          , l = 2 * n - s;
        i = Lu(l, s, e + 1 / 3),
        o = Lu(l, s, e),
        a = Lu(l, s, e - 1 / 3)
    }
    return {
        red: Math.round(i * 255),
        green: Math.round(o * 255),
        blue: Math.round(a * 255),
        alpha: r
    }
}
var Mu = (e,t,n)=>{
    let r = e * e
      , i = n * (t * t - r) + r;
    return i < 0 ? 0 : Math.sqrt(i)
}
  , Zk = [Wu, Zr, Li]
  , Jk = e=>Zk.find(t=>t.test(e));
function Hm(e) {
    let t = Jk(e);
    it(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`);
    let n = t.parse(e);
    return t === Li && (n = Qk(n)),
    n
}
var Nm = (e,t)=>{
    let n = Hm(e)
      , r = Hm(t)
      , i = {
        ...n
    };
    return o=>(i.red = Mu(n.red, r.red, o),
    i.green = Mu(n.green, r.green, o),
    i.blue = Mu(n.blue, r.blue, o),
    i.alpha = pe(n.alpha, r.alpha, o),
    Zr.transform(i))
}
  , yg = e=>t=>typeof t == "string" && t.startsWith(e)
  , bg = yg("--")
  , eT = yg("var(--")
  , Gs = e=>eT(e) ? tT.test(e.split("/*")[0].trim()) : !1
  , tT = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function Uu(e, t) {
    return n=>n > 0 ? t : e
}
function nT(e, t) {
    return n=>pe(e, t, n)
}
function Tf(e) {
    return typeof e == "number" ? nT : typeof e == "string" ? Gs(e) ? Uu : qe.test(e) ? Nm : oT : Array.isArray(e) ? xg : typeof e == "object" ? qe.test(e) ? Nm : rT : Uu
}
function xg(e, t) {
    let n = [...e]
      , r = n.length
      , i = e.map((o,a)=>Tf(o)(o, t[a]));
    return o=>{
        for (let a = 0; a < r; a++)
            n[a] = i[a](o);
        return n
    }
}
function rT(e, t) {
    let n = {
        ...e,
        ...t
    }
      , r = {};
    for (let i in n)
        e[i] !== void 0 && t[i] !== void 0 && (r[i] = Tf(e[i])(e[i], t[i]));
    return i=>{
        for (let o in r)
            n[o] = r[o](i);
        return n
    }
}
function iT(e, t) {
    var n;
    let r = []
      , i = {
        color: 0,
        var: 0,
        number: 0
    };
    for (let o = 0; o < t.values.length; o++) {
        let a = t.types[o]
          , s = e.indexes[a][i[a]]
          , l = (n = e.values[s]) !== null && n !== void 0 ? n : 0;
        r[o] = l,
        i[a]++
    }
    return r
}
var oT = (e,t)=>{
    let n = Un.createTransformer(t)
      , r = Ys(e)
      , i = Ys(t);
    return r.indexes.var.length === i.indexes.var.length && r.indexes.color.length === i.indexes.color.length && r.indexes.number.length >= i.indexes.number.length ? wn(xg(iT(r, i), i.values), n) : (ra(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),
    Uu(e, t))
}
;
function Ef(e, t, n) {
    return typeof e == "number" && typeof t == "number" && typeof n == "number" ? pe(e, t, n) : Tf(e)(e, t)
}
function aT(e, t, n) {
    let r = []
      , i = n || Ef
      , o = e.length - 1;
    for (let a = 0; a < o; a++) {
        let s = i(e[a], e[a + 1]);
        if (t) {
            let l = Array.isArray(t) ? t[a] || De : t;
            s = wn(l, s)
        }
        r.push(s)
    }
    return r
}
function Hi(e, t, {clamp: n=!0, ease: r, mixer: i}={}) {
    let o = e.length;
    if (it(o === t.length, "Both input and output ranges must be the same length"),
    o === 1)
        return ()=>t[0];
    e[0] > e[o - 1] && (e = [...e].reverse(),
    t = [...t].reverse());
    let a = aT(t, r, i)
      , s = a.length
      , l = c=>{
        let u = 0;
        if (s > 1)
            for (; u < e.length - 2 && !(c < e[u + 1]); u++)
                ;
        let f = dr(e[u], e[u + 1], c);
        return a[u](f)
    }
    ;
    return n ? c=>l(Wn(e[0], e[o - 1], c)) : l
}
var jn = e=>e * 1e3
  , Cn = e=>e / 1e3;
function Rf(e, t) {
    return t ? e * (1e3 / t) : 0
}
var sT = 5;
function Sg(e, t, n) {
    let r = Math.max(t - sT, 0);
    return Rf(n - e(r), t - r)
}
var Ou = .001
  , lT = .01
  , $m = 10
  , cT = .05
  , uT = 1;
function fT({duration: e=800, bounce: t=.25, velocity: n=0, mass: r=1}) {
    let i, o;
    ra(e <= jn($m), "Spring duration must be 10 seconds or less");
    let a = 1 - t;
    a = Wn(cT, uT, a),
    e = Wn(lT, $m, Cn(e)),
    a < 1 ? (i = c=>{
        let u = c * a
          , f = u * e
          , d = u - n
          , h = Xu(c, a)
          , g = Math.exp(-f);
        return Ou - d / h * g
    }
    ,
    o = c=>{
        let f = c * a * e
          , d = f * n + n
          , h = Math.pow(a, 2) * Math.pow(c, 2) * e
          , g = Math.exp(-f)
          , y = Xu(Math.pow(c, 2), a);
        return (-i(c) + Ou > 0 ? -1 : 1) * ((d - h) * g) / y
    }
    ) : (i = c=>{
        let u = Math.exp(-c * e)
          , f = (c - n) * e + 1;
        return -Ou + u * f
    }
    ,
    o = c=>{
        let u = Math.exp(-c * e)
          , f = (n - c) * (e * e);
        return u * f
    }
    );
    let s = 5 / e
      , l = hT(i, o, s);
    if (e = jn(e),
    isNaN(l))
        return {
            stiffness: 100,
            damping: 10,
            duration: e
        };
    {
        let c = Math.pow(l, 2) * r;
        return {
            stiffness: c,
            damping: a * 2 * Math.sqrt(r * c),
            duration: e
        }
    }
}
var dT = 12;
function hT(e, t, n) {
    let r = n;
    for (let i = 1; i < dT; i++)
        r = r - e(r) / t(r);
    return r
}
function Xu(e, t) {
    return e * Math.sqrt(1 - t * t)
}
var pT = ["duration", "bounce"]
  , mT = ["stiffness", "damping", "mass"];
function jm(e, t) {
    return t.some(n=>e[n] !== void 0)
}
function vT(e) {
    let t = {
        velocity: 0,
        stiffness: 100,
        damping: 10,
        mass: 1,
        isResolvedFromDuration: !1,
        ...e
    };
    if (!jm(e, mT) && jm(e, pT)) {
        let n = fT(e);
        t = {
            ...t,
            ...n,
            mass: 1
        },
        t.isResolvedFromDuration = !0
    }
    return t
}
function ia({keyframes: e, restDelta: t, restSpeed: n, ...r}) {
    let i = e[0]
      , o = e[e.length - 1]
      , a = {
        done: !1,
        value: i
    }
      , {stiffness: s, damping: l, mass: c, duration: u, velocity: f, isResolvedFromDuration: d} = vT({
        ...r,
        velocity: -Cn(r.velocity || 0)
    })
      , h = f || 0
      , g = l / (2 * Math.sqrt(s * c))
      , y = o - i
      , S = Cn(Math.sqrt(s / c))
      , m = Math.abs(y) < 5;
    n || (n = m ? .01 : 2),
    t || (t = m ? .005 : .5);
    let p;
    if (g < 1) {
        let v = Xu(S, g);
        p = x=>{
            let C = Math.exp(-g * S * x);
            return o - C * ((h + g * S * y) / v * Math.sin(v * x) + y * Math.cos(v * x))
        }
    } else if (g === 1)
        p = v=>o - Math.exp(-S * v) * (y + (h + S * y) * v);
    else {
        let v = S * Math.sqrt(g * g - 1);
        p = x=>{
            let C = Math.exp(-g * S * x)
              , w = Math.min(v * x, 300);
            return o - C * ((h + g * S * y) * Math.sinh(w) + v * y * Math.cosh(w)) / v
        }
    }
    return {
        calculatedDuration: d && u || null,
        next: v=>{
            let x = p(v);
            if (d)
                a.done = v >= u;
            else {
                let C = h;
                v !== 0 && (g < 1 ? C = Sg(p, v, x) : C = 0);
                let w = Math.abs(C) <= n
                  , k = Math.abs(o - x) <= t;
                a.done = w && k
            }
            return a.value = a.done ? o : x,
            a
        }
    }
}
var wg = e=>Array.isArray(e) && typeof e[0] != "number"
  , Wm = {
    linear: De,
    easeIn: lg,
    easeInOut: bf,
    easeOut: cg,
    circIn: sl,
    circInOut: ug,
    circOut: wf,
    backIn: ll,
    backInOut: fg,
    backOut: Cf,
    anticipate: dg
}
  , Um = e=>{
    if (Array.isArray(e)) {
        it(e.length === 4, "Cubic bezier arrays must contain four numerical values.");
        let[t,n,r,i] = e;
        return Bi(t, n, r, i)
    } else if (typeof e == "string")
        return it(Wm[e] !== void 0, `Invalid easing type '${e}'`),
        Wm[e];
    return e
}
;
function Cg(e, t) {
    let n = e[e.length - 1];
    for (let r = 1; r <= t; r++) {
        let i = dr(0, t, r);
        e.push(pe(n, 1, i))
    }
}
function Pf(e) {
    let t = [0];
    return Cg(t, e.length - 1),
    t
}
function gT(e, t) {
    return e.map(n=>n * t)
}
function yT(e, t) {
    return e.map(()=>t || bf).splice(0, e.length - 1)
}
function Ks({duration: e=300, keyframes: t, times: n, ease: r="easeInOut"}) {
    let i = wg(r) ? r.map(Um) : Um(r)
      , o = {
        done: !1,
        value: t[0]
    }
      , a = gT(n && n.length === t.length ? n : Pf(t), e)
      , s = Hi(a, t, {
        ease: Array.isArray(i) ? i : yT(t, i)
    });
    return {
        calculatedDuration: e,
        next: l=>(o.value = s(l),
        o.done = l >= e,
        o)
    }
}
function Xm({keyframes: e, velocity: t=0, power: n=.8, timeConstant: r=325, bounceDamping: i=10, bounceStiffness: o=500, modifyTarget: a, min: s, max: l, restDelta: c=.5, restSpeed: u}) {
    let f = e[0]
      , d = {
        done: !1,
        value: f
    }
      , h = E=>s !== void 0 && E < s || l !== void 0 && E > l
      , g = E=>s === void 0 ? l : l === void 0 || Math.abs(s - E) < Math.abs(l - E) ? s : l
      , y = n * t
      , S = f + y
      , m = a === void 0 ? S : a(S);
    m !== S && (y = m - f);
    let p = E=>-y * Math.exp(-E / r), v = E=>m + p(E), x = E=>{
        let I = p(E)
          , P = v(E);
        d.done = Math.abs(I) <= c,
        d.value = d.done ? m : P
    }
    , C, w, k = E=>{
        h(d.value) && (C = E,
        w = ia({
            keyframes: [d.value, g(d.value)],
            velocity: Sg(v, E, d.value),
            damping: i,
            stiffness: o,
            restDelta: c,
            restSpeed: u
        }))
    }
    ;
    return k(0),
    {
        calculatedDuration: null,
        next: E=>{
            let I = !1;
            return !w && C === void 0 && (I = !0,
            x(E),
            k(E)),
            C !== void 0 && E > C ? w.next(E - C) : (!I && x(E),
            d)
        }
    }
}
var Ns;
function bT() {
    Ns = void 0
}
var Jr = {
    now: ()=>(Ns === void 0 && Jr.set(Ie.isProcessing || tl.useManualTiming ? Ie.timestamp : performance.now()),
    Ns),
    set: e=>{
        Ns = e,
        queueMicrotask(bT)
    }
}
  , xT = e=>{
    let t = ({timestamp: n})=>e(n);
    return {
        start: ()=>J.update(t, !0),
        stop: ()=>rt(t),
        now: ()=>Ie.isProcessing ? Ie.timestamp : Jr.now()
    }
}
  , Yu = 2e4;
function Gu(e) {
    let t = 0
      , n = 50
      , r = e.next(t);
    for (; !r.done && t < Yu; )
        t += n,
        r = e.next(t);
    return t >= Yu ? 1 / 0 : t
}
var ST = {
    decay: Xm,
    inertia: Xm,
    tween: Ks,
    keyframes: Ks,
    spring: ia
}
  , wT = e=>e / 100;
function ti({autoplay: e=!0, delay: t=0, driver: n=xT, keyframes: r, type: i="keyframes", repeat: o=0, repeatDelay: a=0, repeatType: s="loop", onPlay: l, onStop: c, onComplete: u, onUpdate: f, ...d}) {
    let h = 1, g = !1, y, S, m = ()=>{
        S = new Promise(B=>{
            y = B
        }
        )
    }
    ;
    m();
    let p, v = ST[i] || Ks, x;
    v !== Ks && typeof r[0] != "number" && (x = wn(wT, Ef(r[0], r[1])),
    r = [0, 100]);
    let C = v({
        ...d,
        keyframes: r
    }), w;
    s === "mirror" && (w = v({
        ...d,
        keyframes: [...r].reverse(),
        velocity: -(d.velocity || 0)
    }));
    let k = "idle"
      , E = null
      , I = null
      , P = null;
    C.calculatedDuration === null && o && (C.calculatedDuration = Gu(C));
    let {calculatedDuration: z} = C
      , L = 1 / 0
      , ee = 1 / 0;
    z !== null && (L = z + a,
    ee = L * (o + 1) - a);
    let H = 0
      , te = B=>{
        if (I === null)
            return;
        h > 0 && (I = Math.min(I, B)),
        h < 0 && (I = Math.min(B - ee / h, I)),
        E !== null ? H = E : H = Math.round(B - I) * h;
        let Y = H - t * (h >= 0 ? 1 : -1)
          , K = h >= 0 ? Y < 0 : Y > ee;
        H = Math.max(Y, 0),
        k === "finished" && E === null && (H = ee);
        let Z = H
          , Ut = C;
        if (o) {
            let Mt = Math.min(H, ee) / L
              , St = Math.floor(Mt)
              , ft = Mt % 1;
            !ft && Mt >= 1 && (ft = 1),
            ft === 1 && St--,
            St = Math.min(St, o + 1),
            !!(St % 2) && (s === "reverse" ? (ft = 1 - ft,
            a && (ft -= a / L)) : s === "mirror" && (Ut = w)),
            Z = Wn(0, 1, ft) * L
        }
        let re = K ? {
            done: !1,
            value: r[0]
        } : Ut.next(Z);
        x && (re.value = x(re.value));
        let {done: ut} = re;
        !K && z !== null && (ut = h >= 0 ? H >= ee : H <= 0);
        let Q = E === null && (k === "finished" || k === "running" && ut);
        return f && f(re.value),
        Q && W(),
        re
    }
      , G = ()=>{
        p && p.stop(),
        p = void 0
    }
      , V = ()=>{
        k = "idle",
        G(),
        y(),
        m(),
        I = P = null
    }
      , W = ()=>{
        k = "finished",
        u && u(),
        G(),
        y()
    }
      , A = ()=>{
        if (g)
            return;
        p || (p = n(te));
        let B = p.now();
        l && l(),
        E !== null ? I = B - E : (!I || k === "finished") && (I = B),
        k === "finished" && m(),
        P = I,
        E = null,
        k = "running",
        p.start()
    }
    ;
    e && A();
    let q = {
        then(B, Y) {
            return S.then(B, Y)
        },
        get time() {
            return Cn(H)
        },
        set time(B) {
            B = jn(B),
            H = B,
            E !== null || !p || h === 0 ? E = B : I = p.now() - B / h
        },
        get duration() {
            let B = C.calculatedDuration === null ? Gu(C) : C.calculatedDuration;
            return Cn(B)
        },
        get speed() {
            return h
        },
        set speed(B) {
            B === h || !p || (h = B,
            q.time = Cn(H))
        },
        get state() {
            return k
        },
        play: A,
        pause: ()=>{
            k = "paused",
            E = H
        }
        ,
        stop: ()=>{
            g = !0,
            k !== "idle" && (k = "idle",
            c && c(),
            V())
        }
        ,
        cancel: ()=>{
            P !== null && te(P),
            V()
        }
        ,
        complete: ()=>{
            k = "finished"
        }
        ,
        sample: B=>(I = 0,
        te(B))
    };
    return q
}
function If(e, t) {
    e.indexOf(t) === -1 && e.push(t)
}
function cl(e, t) {
    let n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}
function CT([...e], t, n) {
    let r = t < 0 ? e.length + t : t;
    if (r >= 0 && r < e.length) {
        let i = n < 0 ? e.length + n : n
          , [o] = e.splice(t, 1);
        e.splice(i, 0, o)
    }
    return e
}
var Ff = class {
    constructor() {
        this.subscriptions = []
    }
    add(e) {
        return If(this.subscriptions, e),
        ()=>cl(this.subscriptions, e)
    }
    notify(e, t, n) {
        let r = this.subscriptions.length;
        if (r)
            if (r === 1)
                this.subscriptions[0](e, t, n);
            else
                for (let i = 0; i < r; i++) {
                    let o = this.subscriptions[i];
                    o && o(e, t, n)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
  , Ym = 30
  , kT = e=>!isNaN(parseFloat(e))
  , Wo = {
    current: void 0
}
  , ul = class {
    constructor(e, t={}) {
        this.version = "11.0.11-sync.5",
        this.canTrackVelocity = !1,
        this.events = {},
        this.updateAndNotify = (n,r=!0)=>{
            let i = Jr.now();
            this.updatedAt !== i && this.setPrevFrameValue(),
            this.prev = this.current,
            this.setCurrent(n),
            this.current !== this.prev && this.events.change && this.events.change.notify(this.current),
            r && this.events.renderRequest && this.events.renderRequest.notify(this.current)
        }
        ,
        this.hasAnimated = !1,
        this.setCurrent(e),
        this.canTrackVelocity = kT(this.current),
        this.owner = t.owner
    }
    setCurrent(e) {
        this.current = e,
        this.updatedAt = Jr.now()
    }
    setPrevFrameValue(e=this.current) {
        this.prevFrameValue = e,
        this.prevUpdatedAt = this.updatedAt
    }
    onChange(e) {
        return this.on("change", e)
    }
    on(e, t) {
        this.events[e] || (this.events[e] = new Ff);
        let n = this.events[e].add(t);
        return e === "change" ? ()=>{
            n(),
            J.read(()=>{
                this.events.change.getSize() || this.stop()
            }
            )
        }
        : n
    }
    clearListeners() {
        for (let e in this.events)
            this.events[e].clear()
    }
    attach(e, t) {
        this.passiveEffect = e,
        this.stopPassiveEffect = t
    }
    set(e, t=!0) {
        !t || !this.passiveEffect ? this.updateAndNotify(e, t) : this.passiveEffect(e, this.updateAndNotify)
    }
    setWithVelocity(e, t, n) {
        this.set(t),
        this.prev = void 0,
        this.prevFrameValue = e,
        this.prevUpdatedAt = this.updatedAt - n
    }
    jump(e) {
        this.updateAndNotify(e),
        this.prev = e,
        this.prevUpdatedAt = this.prevFrameValue = void 0,
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
    get() {
        return Wo.current && Wo.current.push(this),
        this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        let e = Jr.now();
        if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > Ym)
            return 0;
        let t = Math.min(this.updatedAt - this.prevUpdatedAt, Ym);
        return Rf(parseFloat(this.current) - parseFloat(this.prevFrameValue), t)
    }
    start(e) {
        return this.stop(),
        new Promise(t=>{
            this.hasAnimated = !0,
            this.animation = e(t),
            this.events.animationStart && this.events.animationStart.notify()
        }
        ).then(()=>{
            this.events.animationComplete && this.events.animationComplete.notify(),
            this.clearAnimation()
        }
        )
    }
    stop() {
        this.animation && (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
}
;
function we(e, t) {
    return new ul(e,t)
}
var kg = e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e)
  , Tg = e=>/^0[^.\s]+$/u.test(e)
  , TT = new Set(["brightness", "contrast", "saturate", "opacity"]);
function ET(e) {
    let[t,n] = e.slice(0, -1).split("(");
    if (t === "drop-shadow")
        return e;
    let[r] = n.match(vf) || [];
    if (!r)
        return e;
    let i = n.replace(r, "")
      , o = TT.has(t) ? 1 : 0;
    return r !== n && (o *= 100),
    t + "(" + o + i + ")"
}
var RT = /\b([a-z-]*)\(.*?\)/gu
  , Ku = {
    ...Un,
    getAnimatableNone: e=>{
        let t = e.match(RT);
        return t ? t.map(ET).join(" ") : e
    }
}
  , Gm = {
    ...zi,
    transform: Math.round
}
  , Eg = {
    borderWidth: j,
    borderTopWidth: j,
    borderRightWidth: j,
    borderBottomWidth: j,
    borderLeftWidth: j,
    borderRadius: j,
    radius: j,
    borderTopLeftRadius: j,
    borderTopRightRadius: j,
    borderBottomRightRadius: j,
    borderBottomLeftRadius: j,
    width: j,
    maxWidth: j,
    height: j,
    maxHeight: j,
    size: j,
    top: j,
    right: j,
    bottom: j,
    left: j,
    padding: j,
    paddingTop: j,
    paddingRight: j,
    paddingBottom: j,
    paddingLeft: j,
    margin: j,
    marginTop: j,
    marginRight: j,
    marginBottom: j,
    marginLeft: j,
    rotate: cr,
    rotateX: cr,
    rotateY: cr,
    rotateZ: cr,
    scale: As,
    scaleX: As,
    scaleY: As,
    scaleZ: As,
    skew: cr,
    skewX: cr,
    skewY: cr,
    distance: j,
    translateX: j,
    translateY: j,
    translateZ: j,
    x: j,
    y: j,
    z: j,
    perspective: j,
    transformPerspective: j,
    opacity: jo,
    originX: Am,
    originY: Am,
    originZ: j,
    zIndex: Gm,
    fillOpacity: jo,
    strokeOpacity: jo,
    numOctaves: Gm
}
  , PT = {
    ...Eg,
    color: qe,
    backgroundColor: qe,
    outlineColor: qe,
    fill: qe,
    stroke: qe,
    borderColor: qe,
    borderTopColor: qe,
    borderRightColor: qe,
    borderBottomColor: qe,
    borderLeftColor: qe,
    filter: Ku,
    WebkitFilter: Ku
}
  , _f = e=>PT[e];
function Rg(e, t) {
    let n = _f(e);
    return n !== Ku && (n = Un),
    n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
}
var Pg = e=>t=>t.test(e)
  , IT = {
    test: e=>e === "auto",
    parse: e=>e
}
  , Ig = [zi, j, xn, cr, Mk, Lk, IT]
  , Vo = e=>Ig.find(Pg(e))
  , FT = [...Ig, qe, Un]
  , _T = e=>FT.find(Pg(e));
function LT(e) {
    let t = {};
    return e.values.forEach((n,r)=>t[r] = n.get()),
    t
}
function MT(e) {
    let t = {};
    return e.values.forEach((n,r)=>t[r] = n.getVelocity()),
    t
}
function fl(e, t, n) {
    let r = e.getProps();
    return gf(r, t, n !== void 0 ? n : r.custom, LT(e), MT(e))
}
function OT(e, t, n) {
    e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, we(n))
}
function Lf(e, t) {
    let n = fl(e, t)
      , {transitionEnd: r={}, transition: i={}, ...o} = n ? e.makeTargetAnimatable(n, !1) : {};
    o = {
        ...o,
        ...r
    };
    for (let a in o) {
        let s = Ak(o[a]);
        OT(e, a, s)
    }
}
function qu(e, t) {
    [...t].reverse().forEach(r=>{
        let i = e.getVariant(r);
        i && Lf(e, i),
        e.variantChildren && e.variantChildren.forEach(o=>{
            qu(o, t)
        }
        )
    }
    )
}
function DT(e, t) {
    if (Array.isArray(t))
        return qu(e, t);
    if (typeof t == "string")
        return qu(e, [t]);
    Lf(e, t)
}
function Fg(e, t, n) {
    var r, i;
    let o = Object.keys(t).filter(s=>!e.hasValue(s))
      , a = o.length;
    if (a)
        for (let s = 0; s < a; s++) {
            let l = o[s]
              , c = t[l]
              , u = null;
            Array.isArray(c) && (u = c[0]),
            u === null && (u = (i = (r = n[l]) !== null && r !== void 0 ? r : e.readValue(l)) !== null && i !== void 0 ? i : t[l]),
            u != null && (typeof u == "string" && (kg(u) || Tg(u)) ? u = parseFloat(u) : !_T(u) && Un.test(c) && (u = Rg(l, c)),
            e.addValue(l, we(u, {
                owner: e
            })),
            n[l] === void 0 && (n[l] = u),
            u !== null && e.setBaseTarget(l, u))
        }
}
function AT(e, t) {
    return t ? (t[e] || t.default || t).from : void 0
}
function VT(e, t, n) {
    let r = {};
    for (let i in e) {
        let o = AT(i, t);
        if (o !== void 0)
            r[i] = o;
        else {
            let a = n.getValue(i);
            a && (r[i] = a.get())
        }
    }
    return r
}
var qs = {
    current: !1
}
  , _g = e=>Array.isArray(e) && typeof e[0] == "number";
function Lg(e) {
    return !!(!e || typeof e == "string" && Mg[e] || _g(e) || Array.isArray(e) && e.every(Lg))
}
var No = ([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`
  , Mg = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: No([0, .65, .55, 1]),
    circOut: No([.55, 0, 1, .45]),
    backIn: No([.31, .01, .66, -.59]),
    backOut: No([.33, 1.53, .69, .99])
};
function Og(e) {
    if (e)
        return _g(e) ? No(e) : Array.isArray(e) ? e.map(Og) : Mg[e]
}
function BT(e, t, n, {delay: r=0, duration: i, repeat: o=0, repeatType: a="loop", ease: s, times: l}={}) {
    let c = {
        [t]: n
    };
    l && (c.offset = l);
    let u = Og(s);
    return Array.isArray(u) && (c.easing = u),
    e.animate(c, {
        delay: r,
        duration: i,
        easing: Array.isArray(u) ? "linear" : u,
        fill: "both",
        iterations: o + 1,
        direction: a === "reverse" ? "alternate" : "normal"
    })
}
function zT(e, {repeat: t, repeatType: n="loop"}) {
    let r = t && n !== "loop" && t % 2 === 1 ? 0 : e.length - 1;
    return e[r]
}
function Dg(e) {
    let t;
    return ()=>(t === void 0 && (t = e()),
    t)
}
var HT = Dg(()=>Object.hasOwnProperty.call(Element.prototype, "animate"))
  , NT = new Set(["opacity", "clipPath", "filter", "transform"])
  , Vs = 10
  , $T = 2e4
  , jT = (e,t)=>t.type === "spring" || e === "backgroundColor" || !Lg(t.ease);
function WT(e, t, {onUpdate: n, onComplete: r, ...i}) {
    if (!(HT() && NT.has(t) && !i.repeatDelay && i.repeatType !== "mirror" && i.damping !== 0 && i.type !== "inertia"))
        return !1;
    let a = !1, s, l, c = !1, u = ()=>{
        l = new Promise(v=>{
            s = v
        }
        )
    }
    ;
    u();
    let {keyframes: f, duration: d=300, ease: h, times: g} = i;
    if (jT(t, i)) {
        let v = ti({
            ...i,
            repeat: 0,
            delay: 0
        })
          , x = {
            done: !1,
            value: f[0]
        }
          , C = []
          , w = 0;
        for (; !x.done && w < $T; )
            x = v.sample(w),
            C.push(x.value),
            w += Vs;
        g = void 0,
        f = C,
        d = w - Vs,
        h = "linear"
    }
    let y = BT(e.owner.current, t, f, {
        ...i,
        duration: d,
        ease: h,
        times: g
    })
      , S = ()=>{
        c = !1,
        y.cancel()
    }
      , m = ()=>{
        c = !0,
        J.update(S),
        s(),
        u()
    }
    ;
    return y.onfinish = ()=>{
        c || (e.set(zT(f, i)),
        r && r(),
        m())
    }
    ,
    {
        then(v, x) {
            return l.then(v, x)
        },
        attachTimeline(v) {
            return y.timeline = v,
            y.onfinish = null,
            De
        },
        get time() {
            return Cn(y.currentTime || 0)
        },
        set time(v) {
            y.currentTime = jn(v)
        },
        get speed() {
            return y.playbackRate
        },
        set speed(v) {
            y.playbackRate = v
        },
        get duration() {
            return Cn(d)
        },
        play: ()=>{
            a || (y.play(),
            rt(S))
        }
        ,
        pause: ()=>y.pause(),
        stop: ()=>{
            if (a = !0,
            y.playState === "idle")
                return;
            let {currentTime: v} = y;
            if (v) {
                let x = ti({
                    ...i,
                    autoplay: !1
                });
                e.setWithVelocity(x.sample(v - Vs).value, x.sample(v).value, Vs)
            }
            m()
        }
        ,
        complete: ()=>{
            c || y.finish()
        }
        ,
        cancel: m
    }
}
function UT({keyframes: e, delay: t, onUpdate: n, onComplete: r}) {
    let i = ()=>(n && n(e[e.length - 1]),
    r && r(),
    {
        time: 0,
        speed: 1,
        duration: 0,
        play: De,
        pause: De,
        stop: De,
        then: o=>(o(),
        Promise.resolve()),
        cancel: De,
        complete: De
    });
    return t ? ti({
        keyframes: [0, 1],
        duration: 0,
        delay: t,
        onComplete: i
    }) : i()
}
var XT = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
}
  , YT = e=>({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
})
  , GT = {
    type: "keyframes",
    duration: .8
}
  , KT = {
    type: "keyframes",
    ease: [.25, .1, .35, 1],
    duration: .3
}
  , qT = (e,{keyframes: t})=>t.length > 2 ? GT : ni.has(e) ? e.startsWith("scale") ? YT(t[1]) : XT : KT
  , Qu = (e,t)=>e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && (Un.test(t) || t === "0") && !t.startsWith("url("));
function QT(e) {
    if (typeof e == "number")
        return e === 0;
    if (e !== null)
        return e === "none" || e === "0" || Tg(e)
}
function ZT(e, t, n, r) {
    let i = Qu(t, n), o;
    Array.isArray(n) ? o = [...n] : o = [null, n];
    let a = r.from !== void 0 ? r.from : e.get(), s, l = [];
    for (let c = 0; c < o.length; c++)
        o[c] === null && (o[c] = c === 0 ? a : o[c - 1]),
        QT(o[c]) && l.push(c),
        typeof o[c] == "string" && o[c] !== "none" && o[c] !== "0" && (s = o[c]);
    if (i && l.length && s)
        for (let c = 0; c < l.length; c++) {
            let u = l[c];
            o[u] = Rg(t, s)
        }
    return o
}
function JT({when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: i, repeat: o, repeatType: a, repeatDelay: s, from: l, elapsed: c, ...u}) {
    return !!Object.keys(u).length
}
function Mf(e, t) {
    return e[t] || e.default || e
}
var Of = (e,t,n,r={})=>i=>{
    let o = Mf(r, e) || {}
      , a = o.delay || r.delay || 0
      , {elapsed: s=0} = r;
    s = s - jn(a);
    let l = ZT(t, e, n, o)
      , c = l[0]
      , u = l[l.length - 1]
      , f = Qu(e, c)
      , d = Qu(e, u);
    ra(f === d, `You are trying to animate ${e} from "${c}" to "${u}". ${c} is not an animatable value - to enable this animation set ${c} to a value animatable to ${u} via the \`style\` property.`);
    let h = {
        keyframes: l,
        velocity: t.getVelocity(),
        ease: "easeOut",
        ...o,
        delay: -s,
        onUpdate: g=>{
            t.set(g),
            o.onUpdate && o.onUpdate(g)
        }
        ,
        onComplete: ()=>{
            i(),
            o.onComplete && o.onComplete()
        }
    };
    if (JT(o) || (h = {
        ...h,
        ...qT(e, h)
    }),
    h.duration && (h.duration = jn(h.duration)),
    h.repeatDelay && (h.repeatDelay = jn(h.repeatDelay)),
    !f || !d || qs.current || o.type === !1 || tl.skipAnimations)
        return UT(qs.current ? {
            ...h,
            delay: 0
        } : h);
    if (!r.isHandoff && t.owner && t.owner.current instanceof HTMLElement && !t.owner.getProps().onUpdate) {
        let g = WT(t, e, h);
        if (g)
            return g
    }
    return ti(h)
}
;
function Qs(e) {
    return !!(Fe(e) && e.add)
}
function eE({protectedKeys: e, needsAnimating: t}, n) {
    let r = e.hasOwnProperty(n) && t[n] !== !0;
    return t[n] = !1,
    r
}
function tE(e, t) {
    let n = e.get();
    if (Array.isArray(t)) {
        for (let r = 0; r < t.length; r++)
            if (t[r] !== n)
                return !0
    } else
        return n !== t
}
function Df(e, t, {delay: n=0, transitionOverride: r, type: i}={}) {
    let {transition: o=e.getDefaultTransition(), transitionEnd: a, ...s} = e.makeTargetAnimatable(t)
      , l = e.getValue("willChange");
    r && (o = r);
    let c = []
      , u = i && e.animationState && e.animationState.getState()[i];
    for (let f in s) {
        let d = e.getValue(f)
          , h = s[f];
        if (!d || h === void 0 || u && eE(u, f))
            continue;
        let g = {
            delay: n,
            elapsed: 0,
            ...Mf(o || {}, f)
        };
        if (_.HandoffAppearAnimations) {
            let m = e.getProps()[el];
            if (m) {
                let p = _.HandoffAppearAnimations(m, f, d, J);
                p !== null && (g.elapsed = p,
                g.isHandoff = !0)
            }
        }
        let y = !g.isHandoff && !tE(d, h);
        if (g.type === "spring" && (d.getVelocity() || g.velocity) && (y = !1),
        d.animation && (y = !1),
        y)
            continue;
        d.start(Of(f, d, h, e.shouldReduceMotion && ni.has(f) ? {
            type: !1
        } : g));
        let S = d.animation;
        Qs(l) && (l.add(f),
        S.then(()=>l.remove(f))),
        c.push(S)
    }
    return a && Promise.all(c).then(()=>{
        a && Lf(e, a)
    }
    ),
    c
}
function Zu(e, t, n={}) {
    let r = fl(e, t, n.custom)
      , {transition: i=e.getDefaultTransition() || {}} = r || {};
    n.transitionOverride && (i = n.transitionOverride);
    let o = r ? ()=>Promise.all(Df(e, r, n)) : ()=>Promise.resolve()
      , a = e.variantChildren && e.variantChildren.size ? (l=0)=>{
        let {delayChildren: c=0, staggerChildren: u, staggerDirection: f} = i;
        return nE(e, t, c + l, u, f, n)
    }
    : ()=>Promise.resolve()
      , {when: s} = i;
    if (s) {
        let[l,c] = s === "beforeChildren" ? [o, a] : [a, o];
        return l().then(()=>c())
    } else
        return Promise.all([o(), a(n.delay)])
}
function nE(e, t, n=0, r=0, i=1, o) {
    let a = []
      , s = (e.variantChildren.size - 1) * r
      , l = i === 1 ? (c=0)=>c * r : (c=0)=>s - c * r;
    return Array.from(e.variantChildren).sort(rE).forEach((c,u)=>{
        c.notify("AnimationStart", t),
        a.push(Zu(c, t, {
            ...o,
            delay: n + l(u)
        }).then(()=>c.notify("AnimationComplete", t)))
    }
    ),
    Promise.all(a)
}
function rE(e, t) {
    return e.sortNodePosition(t)
}
function Af(e, t, n={}) {
    e.notify("AnimationStart", t);
    let r;
    if (Array.isArray(t)) {
        let i = t.map(o=>Zu(e, o, n));
        r = Promise.all(i)
    } else if (typeof t == "string")
        r = Zu(e, t, n);
    else {
        let i = typeof t == "function" ? fl(e, t, n.custom) : t;
        r = Promise.all(Df(e, i, n))
    }
    return r.then(()=>e.notify("AnimationComplete", t))
}
function Ag(e, t) {
    if (!Array.isArray(t))
        return !1;
    let n = t.length;
    if (n !== e.length)
        return !1;
    for (let r = 0; r < n; r++)
        if (t[r] !== e[r])
            return !1;
    return !0
}
var iE = [...df].reverse()
  , oE = df.length;
function aE(e) {
    return t=>Promise.all(t.map(({animation: n, options: r})=>Af(e, n, r)))
}
function sE(e) {
    let t = aE(e)
      , n = cE()
      , r = !0
      , i = (l,c)=>{
        let u = fl(e, c);
        if (u) {
            let {transition: f, transitionEnd: d, ...h} = u;
            l = {
                ...l,
                ...h,
                ...d
            }
        }
        return l
    }
    ;
    function o(l) {
        t = l(e)
    }
    function a(l, c) {
        let u = e.getProps()
          , f = e.getVariantContext(!0) || {}
          , d = []
          , h = new Set
          , g = {}
          , y = 1 / 0;
        for (let m = 0; m < oE; m++) {
            let p = iE[m]
              , v = n[p]
              , x = u[p] !== void 0 ? u[p] : f[p]
              , C = Ko(x)
              , w = p === c ? v.isActive : null;
            w === !1 && (y = m);
            let k = x === f[p] && x !== u[p] && C;
            if (k && r && e.manuallyAnimateOnMount && (k = !1),
            v.protectedKeys = {
                ...g
            },
            !v.isActive && w === null || !x && !v.prevProp || rl(x) || typeof x == "boolean")
                continue;
            let I = lE(v.prevProp, x) || p === c && v.isActive && !k && C || m > y && C
              , P = !1
              , z = Array.isArray(x) ? x : [x]
              , L = z.reduce(i, {});
            w === !1 && (L = {});
            let {prevResolvedValues: ee={}} = v
              , H = {
                ...ee,
                ...L
            }
              , te = G=>{
                I = !0,
                h.has(G) && (P = !0,
                h.delete(G)),
                v.needsAnimating[G] = !0;
                let V = e.getValue(G);
                V && (V.liveStyle = !1)
            }
            ;
            for (let G in H) {
                let V = L[G]
                  , W = ee[G];
                if (g.hasOwnProperty(G))
                    continue;
                let A = !1;
                Xs(V) && Xs(W) ? A = !Ag(V, W) : A = V !== W,
                A ? V !== void 0 ? te(G) : h.add(G) : V !== void 0 && h.has(G) ? te(G) : v.protectedKeys[G] = !0
            }
            v.prevProp = x,
            v.prevResolvedValues = L,
            v.isActive && (g = {
                ...g,
                ...L
            }),
            r && e.blockInitialAnimation && (I = !1),
            I && (!k || P) && d.push(...z.map(G=>({
                animation: G,
                options: {
                    type: p,
                    ...l
                }
            })))
        }
        if (h.size) {
            let m = {};
            h.forEach(p=>{
                let v = e.getBaseTarget(p);
                v !== void 0 && (m[p] = v);
                let x = e.getValue(p);
                x && (x.liveStyle = !0)
            }
            ),
            d.push({
                animation: m
            })
        }
        let S = !!d.length;
        return r && (u.initial === !1 || u.initial === u.animate) && !e.manuallyAnimateOnMount && (S = !1),
        r = !1,
        S ? t(d) : Promise.resolve()
    }
    function s(l, c, u) {
        var f;
        if (n[l].isActive === c)
            return Promise.resolve();
        (f = e.variantChildren) === null || f === void 0 || f.forEach(h=>{
            var g;
            return (g = h.animationState) === null || g === void 0 ? void 0 : g.setActive(l, c)
        }
        ),
        n[l].isActive = c;
        let d = a(u, l);
        for (let h in n)
            n[h].protectedKeys = {};
        return d
    }
    return {
        animateChanges: a,
        setActive: s,
        setAnimateFunction: o,
        getState: ()=>n
    }
}
function lE(e, t) {
    return typeof t == "string" ? t !== e : Array.isArray(t) ? !Ag(t, e) : !1
}
function Gr(e=!1) {
    return {
        isActive: e,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}
function cE() {
    return {
        animate: Gr(!0),
        whileInView: Gr(),
        whileHover: Gr(),
        whileTap: Gr(),
        whileDrag: Gr(),
        whileFocus: Gr(),
        exit: Gr()
    }
}
var pr = class {
    constructor(e) {
        this.isMounted = !1,
        this.node = e
    }
    update() {}
}
  , uE = class extends pr {
    constructor(e) {
        super(e),
        e.animationState || (e.animationState = sE(e))
    }
    updateAnimationControlsSubscription() {
        let {animate: e} = this.node.getProps();
        this.unmount(),
        rl(e) && (this.unmount = e.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        let {animate: e} = this.node.getProps()
          , {animate: t} = this.node.prevProps || {};
        e !== t && this.updateAnimationControlsSubscription()
    }
    unmount() {}
}
  , fE = 0
  , dE = class extends pr {
    constructor() {
        super(...arguments),
        this.id = fE++
    }
    update() {
        if (!this.node.presenceContext)
            return;
        let {isPresent: e, onExitComplete: t, custom: n} = this.node.presenceContext
          , {isPresent: r} = this.node.prevPresenceContext || {};
        if (!this.node.animationState || e === r)
            return;
        let i = this.node.animationState.setActive("exit", !e, {
            custom: n ?? this.node.getProps().custom
        });
        t && !e && i.then(()=>t(this.id))
    }
    mount() {
        let {register: e} = this.node.presenceContext || {};
        e && (this.unmount = e(this.id))
    }
    unmount() {}
}
  , Vf = {
    animation: {
        Feature: uE
    },
    exit: {
        Feature: dE
    }
}
  , Ju = (e,t)=>Math.abs(e - t);
function Vg(e, t) {
    let n = Ju(e.x, t.x)
      , r = Ju(e.y, t.y);
    return Math.sqrt(n ** 2 + r ** 2)
}
function Tt(e) {
    return e.max - e.min
}
function ef(e, t=0, n=.01) {
    return Math.abs(e - t) <= n
}
function Km(e, t, n, r=.5) {
    e.origin = r,
    e.originPoint = pe(t.min, t.max, e.origin),
    e.scale = Tt(n) / Tt(t),
    (ef(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
    e.translate = pe(n.min, n.max, e.origin) - e.originPoint,
    (ef(e.translate) || isNaN(e.translate)) && (e.translate = 0)
}
function Uo(e, t, n, r) {
    Km(e.x, t.x, n.x, r ? r.originX : void 0),
    Km(e.y, t.y, n.y, r ? r.originY : void 0)
}
function qm(e, t, n) {
    e.min = n.min + t.min,
    e.max = e.min + Tt(t)
}
function hE(e, t, n) {
    qm(e.x, t.x, n.x),
    qm(e.y, t.y, n.y)
}
function Qm(e, t, n) {
    e.min = t.min - n.min,
    e.max = e.min + Tt(t)
}
function Xo(e, t, n) {
    Qm(e.x, t.x, n.x),
    Qm(e.y, t.y, n.y)
}
var Zm = ()=>({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
})
  , Mi = ()=>({
    x: Zm(),
    y: Zm()
})
  , Jm = ()=>({
    min: 0,
    max: 0
})
  , Pe = ()=>({
    x: Jm(),
    y: Jm()
});
function Bf() {
    let e = M(Vi);
    if (e === null)
        return [!0, null];
    let {isPresent: t, onExitComplete: n, register: r} = e
      , i = Yr();
    return $(()=>r(i), []),
    !t && n ? [!1, ()=>n && n(i)] : [!0]
}
var pE = (e,t)=>e.depth - t.depth
  , Bg = class {
    constructor() {
        this.children = [],
        this.isDirty = !1
    }
    add(e) {
        If(this.children, e),
        this.isDirty = !0
    }
    remove(e) {
        cl(this.children, e),
        this.isDirty = !0
    }
    forEach(e) {
        this.isDirty && this.children.sort(pE),
        this.isDirty = !1,
        this.children.forEach(e)
    }
}
;
function zg(e, t) {
    let n = Jr.now()
      , r = ({timestamp: i})=>{
        let o = i - n;
        o >= t && (rt(r),
        e(o - t))
    }
    ;
    return J.read(r, !0),
    ()=>rt(r)
}
var Xn = new WeakMap
  , Zs = {
    current: null
}
  , zf = {
    current: !1
};
function Hg() {
    if (zf.current = !0,
    !!Jo)
        if (_.matchMedia) {
            let e = _.matchMedia("(prefers-reduced-motion)")
              , t = ()=>Zs.current = e.matches;
            e.addListener(t),
            t()
        } else
            Zs.current = !1
}
function mE(e, t, n) {
    let {willChange: r} = t;
    for (let i in t) {
        let o = t[i]
          , a = n[i];
        if (Fe(o))
            e.addValue(i, o),
            Qs(r) && r.add(i);
        else if (Fe(a))
            e.addValue(i, we(o, {
                owner: e
            })),
            Qs(r) && r.remove(i);
        else if (a !== o)
            if (e.hasValue(i)) {
                let s = e.getValue(i);
                s.liveStyle === !0 ? s.jump(o) : s.hasAnimated || s.set(o)
            } else {
                let s = e.getStaticValue(i);
                e.addValue(i, we(s !== void 0 ? s : o, {
                    owner: e
                }))
            }
    }
    for (let i in n)
        t[i] === void 0 && e.removeValue(i);
    return t
}
var Ng = Object.keys(qo)
  , vE = Ng.length;
function $g(e) {
    if (e)
        return e.options.allowProjection !== !1 ? e.projection : $g(e.parent)
}
var ev = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"]
  , gE = hf.length
  , jg = class {
    constructor({parent: e, props: t, presenceContext: n, reducedMotionConfig: r, visualState: i}, o={}) {
        this.current = null,
        this.children = new Set,
        this.isVariantNode = !1,
        this.isControllingVariants = !1,
        this.shouldReduceMotion = null,
        this.values = new Map,
        this.features = {},
        this.valueSubscriptions = new Map,
        this.prevMotionValues = {},
        this.events = {},
        this.propEventSubscriptions = {},
        this.notifyUpdate = ()=>this.notify("Update", this.latestValues),
        this.render = ()=>{
            this.current && (this.triggerBuild(),
            this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }
        ,
        this.scheduleRender = ()=>J.render(this.render, !1, !0);
        let {latestValues: a, renderState: s} = i;
        this.latestValues = a,
        this.baseTarget = {
            ...a
        },
        this.initialValues = t.initial ? {
            ...a
        } : {},
        this.renderState = s,
        this.parent = e,
        this.props = t,
        this.presenceContext = n,
        this.depth = e ? e.depth + 1 : 0,
        this.reducedMotionConfig = r,
        this.options = o,
        this.isControllingVariants = il(t),
        this.isVariantNode = Qv(t),
        this.isVariantNode && (this.variantChildren = new Set),
        this.manuallyAnimateOnMount = !!(e && e.current);
        let {willChange: l, ...c} = this.scrapeMotionValuesFromProps(t, {}, this);
        for (let u in c) {
            let f = c[u];
            a[u] !== void 0 && Fe(f) && (f.set(a[u], !1),
            Qs(l) && l.add(u))
        }
    }
    scrapeMotionValuesFromProps(e, t, n) {
        return {}
    }
    mount(e) {
        this.current = e,
        Xn.set(e, this),
        this.projection && !this.projection.instance && this.projection.mount(e),
        this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach((t,n)=>this.bindToMotionValue(n, t)),
        zf.current || Hg(),
        this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Zs.current,
        this.parent && this.parent.children.add(this),
        this.update(this.props, this.presenceContext)
    }
    unmount() {
        Xn.delete(this.current),
        this.projection && this.projection.unmount(),
        rt(this.notifyUpdate),
        rt(this.render),
        this.valueSubscriptions.forEach(e=>e()),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        this.parent && this.parent.children.delete(this);
        for (let e in this.events)
            this.events[e].clear();
        for (let e in this.features)
            this.features[e].unmount();
        this.current = null
    }
    bindToMotionValue(e, t) {
        let n = ni.has(e)
          , r = t.on("change", o=>{
            this.latestValues[e] = o,
            this.props.onUpdate && J.update(this.notifyUpdate, !1, !0),
            n && this.projection && (this.projection.isTransformDirty = !0)
        }
        )
          , i = t.on("renderRequest", this.scheduleRender);
        this.valueSubscriptions.set(e, ()=>{
            r(),
            i()
        }
        )
    }
    sortNodePosition(e) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== e.type ? 0 : this.sortInstanceNodePosition(this.current, e.current)
    }
    loadFeatures({children: e, ...t}, n, r, i) {
        let o, a;
        for (let s = 0; s < vE; s++) {
            let l = Ng[s]
              , {isEnabled: c, Feature: u, ProjectionNode: f, MeasureLayout: d} = qo[l];
            f && (o = f),
            c(t) && (!this.features[l] && u && (this.features[l] = new u(this)),
            d && (a = d))
        }
        if ((this.type === "html" || this.type === "svg") && !this.projection && o) {
            this.projection = new o(this.latestValues,$g(this.parent));
            let {layoutId: s, layout: l, drag: c, dragConstraints: u, layoutScroll: f, layoutRoot: d} = t;
            this.projection.setOptions({
                layoutId: s,
                layout: l,
                alwaysMeasureLayout: !!c || u && _i(u),
                visualElement: this,
                scheduleRender: ()=>this.scheduleRender(),
                animationType: typeof l == "string" ? l : "both",
                initialPromotionConfig: i,
                layoutScroll: f,
                layoutRoot: d
            })
        }
        return a
    }
    updateFeatures() {
        for (let e in this.features) {
            let t = this.features[e];
            t.isMounted ? t.update() : (t.mount(),
            t.isMounted = !0)
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.options, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Pe()
    }
    getStaticValue(e) {
        return this.latestValues[e]
    }
    setStaticValue(e, t) {
        this.latestValues[e] = t
    }
    makeTargetAnimatable(e, t=!0) {
        return this.makeTargetAnimatableFromInstance(e, t)
    }
    update(e, t) {
        (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
        this.prevProps = this.props,
        this.props = e,
        this.prevPresenceContext = this.presenceContext,
        this.presenceContext = t;
        for (let n = 0; n < ev.length; n++) {
            let r = ev[n];
            this.propEventSubscriptions[r] && (this.propEventSubscriptions[r](),
            delete this.propEventSubscriptions[r]);
            let i = e["on" + r];
            i && (this.propEventSubscriptions[r] = this.on(r, i))
        }
        this.prevMotionValues = mE(this, this.scrapeMotionValuesFromProps(e, this.prevProps, this), this.prevMotionValues),
        this.handleChildMotionValue && this.handleChildMotionValue()
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
    getVariantContext(e=!1) {
        if (e)
            return this.parent ? this.parent.getVariantContext() : void 0;
        if (!this.isControllingVariants) {
            let n = this.parent ? this.parent.getVariantContext() || {} : {};
            return this.props.initial !== void 0 && (n.initial = this.props.initial),
            n
        }
        let t = {};
        for (let n = 0; n < gE; n++) {
            let r = hf[n]
              , i = this.props[r];
            (Ko(i) || i === !1) && (t[r] = i)
        }
        return t
    }
    addVariantChild(e) {
        let t = this.getClosestVariantNode();
        if (t)
            return t.variantChildren && t.variantChildren.add(e),
            ()=>t.variantChildren.delete(e)
    }
    addValue(e, t) {
        t !== this.values.get(e) && (this.removeValue(e),
        this.bindToMotionValue(e, t)),
        this.values.set(e, t),
        this.latestValues[e] = t.get()
    }
    removeValue(e) {
        this.values.delete(e);
        let t = this.valueSubscriptions.get(e);
        t && (t(),
        this.valueSubscriptions.delete(e)),
        delete this.latestValues[e],
        this.removeValueFromRenderState(e, this.renderState)
    }
    hasValue(e) {
        return this.values.has(e)
    }
    getValue(e, t) {
        if (this.props.values && this.props.values[e])
            return this.props.values[e];
        let n = this.values.get(e);
        return n === void 0 && t !== void 0 && (n = we(t, {
            owner: this
        }),
        this.addValue(e, n)),
        n
    }
    readValue(e) {
        var t;
        return this.latestValues[e] !== void 0 || !this.current ? this.latestValues[e] : (t = this.getBaseTargetFromProps(this.props, e)) !== null && t !== void 0 ? t : this.readValueFromInstance(this.current, e, this.options)
    }
    setBaseTarget(e, t) {
        this.baseTarget[e] = t
    }
    getBaseTarget(e) {
        var t;
        let {initial: n} = this.props
          , r = typeof n == "string" || typeof n == "object" ? (t = gf(this.props, n)) === null || t === void 0 ? void 0 : t[e] : void 0;
        if (n && r !== void 0)
            return r;
        let i = this.getBaseTargetFromProps(this.props, e);
        return i !== void 0 && !Fe(i) ? i : this.initialValues[e] !== void 0 && r === void 0 ? void 0 : this.baseTarget[e]
    }
    on(e, t) {
        return this.events[e] || (this.events[e] = new Ff),
        this.events[e].add(t)
    }
    notify(e, ...t) {
        this.events[e] && this.events[e].notify(...t)
    }
}
;
function Wg(e) {
    function t(r, i={}) {
        return Zv(e(r, i))
    }
    if (typeof Proxy > "u")
        return t;
    let n = new Map;
    return new Proxy(t,{
        get: (r,i)=>(n.has(i) || n.set(i, t(i)),
        n.get(i))
    })
}
var yE = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
function Hf(e) {
    return typeof e != "string" || e.includes("-") ? !1 : !!(yE.indexOf(e) > -1 || /[A-Z]/u.test(e))
}
function Ug(e, {layout: t, layoutId: n}) {
    return ni.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!Us[e] || e === "opacity")
}
var bE = (e,t)=>t && typeof e == "number" ? t.transform(e) : e;
function Nf(e, t, n, r) {
    let {style: i, vars: o, transform: a, transformOrigin: s} = e
      , l = !1
      , c = !1
      , u = !0;
    for (let f in t) {
        let d = t[f];
        if (bg(f)) {
            o[f] = d;
            continue
        }
        let h = Eg[f]
          , g = bE(d, h);
        if (ni.has(f)) {
            if (l = !0,
            a[f] = g,
            !u)
                continue;
            d !== (h.default || 0) && (u = !1)
        } else
            f.startsWith("origin") ? (c = !0,
            s[f] = g) : i[f] = g
    }
    if (t.transform || (l || r ? i.transform = Jv(e.transform, n, u, r) : i.transform && (i.transform = "none")),
    c) {
        let {originX: f="50%", originY: d="50%", originZ: h=0} = s;
        i.transformOrigin = `${f} ${d} ${h}`
    }
}
var $f = ()=>({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
});
function Xg(e, t, n) {
    for (let r in t)
        !Fe(t[r]) && !Ug(r, n) && (e[r] = t[r])
}
function xE({transformTemplate: e}, t, n) {
    return he(()=>{
        let r = $f();
        return Nf(r, t, {
            enableHardwareAcceleration: !n
        }, e),
        Object.assign({}, r.vars, r.style)
    }
    , [t])
}
function SE(e, t, n) {
    let r = e.style || {}
      , i = {};
    return Xg(i, r, e),
    Object.assign(i, xE(e, t, n)),
    i
}
function wE(e, t, n) {
    let r = {}
      , i = SE(e, t, n);
    return e.drag && e.dragListener !== !1 && (r.draggable = !1,
    i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none",
    i.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`),
    e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (r.tabIndex = 0),
    r.style = i,
    r
}
function tv(e, t, n) {
    return typeof e == "string" ? e : j.transform(t + n * e)
}
function CE(e, t, n) {
    let r = tv(t, e.x, e.width)
      , i = tv(n, e.y, e.height);
    return `${r} ${i}`
}
var kE = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
}
  , TE = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
};
function EE(e, t, n=1, r=0, i=!0) {
    e.pathLength = 1;
    let o = i ? kE : TE;
    e[o.offset] = j.transform(-r);
    let a = j.transform(t)
      , s = j.transform(n);
    e[o.array] = `${a} ${s}`
}
function jf(e, {attrX: t, attrY: n, attrScale: r, originX: i, originY: o, pathLength: a, pathSpacing: s=1, pathOffset: l=0, ...c}, u, f, d) {
    if (Nf(e, c, u, d),
    f) {
        e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
        return
    }
    e.attrs = e.style,
    e.style = {};
    let {attrs: h, style: g, dimensions: y} = e;
    h.transform && (y && (g.transform = h.transform),
    delete h.transform),
    y && (i !== void 0 || o !== void 0 || g.transform) && (g.transformOrigin = CE(y, i !== void 0 ? i : .5, o !== void 0 ? o : .5)),
    t !== void 0 && (h.x = t),
    n !== void 0 && (h.y = n),
    r !== void 0 && (h.scale = r),
    a !== void 0 && EE(h, a, s, l, !1)
}
var Yg = ()=>({
    ...$f(),
    attrs: {}
})
  , Wf = e=>typeof e == "string" && e.toLowerCase() === "svg";
function RE(e, t, n, r) {
    let i = he(()=>{
        let o = Yg();
        return jf(o, t, {
            enableHardwareAcceleration: !1
        }, Wf(r), e.transformTemplate),
        {
            ...o.attrs,
            style: {
                ...o.style
            }
        }
    }
    , [t]);
    if (e.style) {
        let o = {};
        Xg(o, e.style, e),
        i.style = {
            ...o,
            ...i.style
        }
    }
    return i
}
function PE(e=!1) {
    return (n,r,i,{latestValues: o},a)=>{
        let l = (Hf(n) ? RE : wE)(r, o, a, n)
          , c = ng(r, typeof n == "string", e)
          , u = n !== Ii ? {
            ...c,
            ...l,
            ref: i
        } : {}
          , {children: f} = r
          , d = he(()=>Fe(f) ? f.get() : f, [f]);
        return ce(n, {
            ...u,
            children: d
        })
    }
}
function Gg(e, {style: t, vars: n}, r, i) {
    Object.assign(e.style, t, i && i.getProjectionStyles(r));
    for (let o in n)
        e.style.setProperty(o, n[o])
}
var Kg = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
function qg(e, t, n, r) {
    Gg(e, t, void 0, r);
    for (let i in t.attrs)
        e.setAttribute(Kg.has(i) ? i : uf(i), t.attrs[i])
}
function Uf(e, t, n) {
    var r;
    let {style: i} = e
      , o = {};
    for (let a in i)
        (Fe(i[a]) || t.style && Fe(t.style[a]) || Ug(a, e) || ((r = n?.getValue(a)) === null || r === void 0 ? void 0 : r.liveStyle) !== void 0) && (o[a] = i[a]);
    return o
}
function Qg(e, t, n) {
    let r = Uf(e, t, n);
    for (let i in e)
        if (Fe(e[i]) || Fe(t[i])) {
            let o = ea.indexOf(i) !== -1 ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i;
            r[o] = e[i]
        }
    return r
}
var IE = {
    useVisualState: ol({
        scrapeMotionValuesFromProps: Qg,
        createRenderState: Yg,
        onMount: (e,t,{renderState: n, latestValues: r})=>{
            J.read(()=>{
                try {
                    n.dimensions = typeof t.getBBox == "function" ? t.getBBox() : t.getBoundingClientRect()
                } catch {
                    n.dimensions = {
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    }
                }
            }
            ),
            J.render(()=>{
                jf(n, r, {
                    enableHardwareAcceleration: !1
                }, Wf(t.tagName), e.transformTemplate),
                qg(t, n)
            }
            )
        }
    })
}
  , FE = {
    useVisualState: ol({
        scrapeMotionValuesFromProps: Uf,
        createRenderState: $f
    })
};
function Zg(e, {forwardMotionProps: t=!1}, n, r) {
    return {
        ...Hf(e) ? IE : FE,
        preloadedFeatures: n,
        useRender: PE(t),
        createVisualElement: r,
        Component: e
    }
}
function nv(e, t) {
    let n = "pointer" + (t ? "enter" : "leave")
      , r = "onHover" + (t ? "Start" : "End")
      , i = (o,a)=>{
        if (o.pointerType === "touch" || yf())
            return;
        let s = e.getProps();
        e.animationState && s.whileHover && e.animationState.setActive("whileHover", t),
        s[r] && J.update(()=>s[r](o, a))
    }
    ;
    return Sn(e.current, n, i, {
        passive: !e.getProps()[r]
    })
}
var _E = class extends pr {
    mount() {
        this.unmount = wn(nv(this.node, !0), nv(this.node, !1))
    }
    unmount() {}
}
  , LE = class extends pr {
    constructor() {
        super(...arguments),
        this.isActive = !1
    }
    onFocus() {
        let e = !1;
        try {
            e = this.node.current.matches(":focus-visible")
        } catch {
            e = !0
        }
        !e || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0),
        this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1),
        this.isActive = !1)
    }
    mount() {
        this.unmount = wn($n(this.node.current, "focus", ()=>this.onFocus()), $n(this.node.current, "blur", ()=>this.onBlur()))
    }
    unmount() {}
}
  , Jg = (e,t)=>t ? e === t ? !0 : Jg(e, t.parentElement) : !1;
function Du(e, t) {
    if (!t)
        return;
    let n = new PointerEvent("pointer" + e);
    t(n, al(n))
}
var ME = class extends pr {
    constructor() {
        super(...arguments),
        this.removeStartListeners = De,
        this.removeEndListeners = De,
        this.removeAccessibleListeners = De,
        this.startPointerPress = (e,t)=>{
            if (this.isPressing)
                return;
            this.removeEndListeners();
            let n = this.node.getProps()
              , i = Sn(_, "pointerup", (a,s)=>{
                if (!this.checkPressEnd())
                    return;
                let {onTap: l, onTapCancel: c, globalTapTarget: u} = this.node.getProps();
                J.update(()=>{
                    !u && !Jg(this.node.current, a.target) ? c && c(a, s) : l && l(a, s)
                }
                )
            }
            , {
                passive: !(n.onTap || n.onPointerUp)
            })
              , o = Sn(_, "pointercancel", (a,s)=>this.cancelPress(a, s), {
                passive: !(n.onTapCancel || n.onPointerCancel)
            });
            this.removeEndListeners = wn(i, o),
            this.startPress(e, t)
        }
        ,
        this.startAccessiblePress = ()=>{
            let e = i=>{
                if (i.key !== "Enter" || this.isPressing)
                    return;
                let o = a=>{
                    a.key !== "Enter" || !this.checkPressEnd() || Du("up", (s,l)=>{
                        let {onTap: c} = this.node.getProps();
                        c && J.update(()=>c(s, l))
                    }
                    )
                }
                ;
                this.removeEndListeners(),
                this.removeEndListeners = $n(this.node.current, "keyup", o),
                Du("down", (a,s)=>{
                    this.startPress(a, s)
                }
                )
            }
              , t = $n(this.node.current, "keydown", e)
              , n = ()=>{
                this.isPressing && Du("cancel", (i,o)=>this.cancelPress(i, o))
            }
              , r = $n(this.node.current, "blur", n);
            this.removeAccessibleListeners = wn(t, r)
        }
    }
    startPress(e, t) {
        this.isPressing = !0;
        let {onTapStart: n, whileTap: r} = this.node.getProps();
        r && this.node.animationState && this.node.animationState.setActive("whileTap", !0),
        n && J.update(()=>n(e, t))
    }
    checkPressEnd() {
        return this.removeEndListeners(),
        this.isPressing = !1,
        this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1),
        !yf()
    }
    cancelPress(e, t) {
        if (!this.checkPressEnd())
            return;
        let {onTapCancel: n} = this.node.getProps();
        n && J.update(()=>n(e, t))
    }
    mount() {
        let e = this.node.getProps()
          , t = Sn(e.globalTapTarget ? _ : this.node.current, "pointerdown", this.startPointerPress, {
            passive: !(e.onTapStart || e.onPointerStart)
        })
          , n = $n(this.node.current, "focus", this.startAccessiblePress);
        this.removeStartListeners = wn(t, n)
    }
    unmount() {
        this.removeStartListeners(),
        this.removeEndListeners(),
        this.removeAccessibleListeners()
    }
}
  , tf = new WeakMap
  , Au = new WeakMap
  , OE = e=>{
    let t = tf.get(e.target);
    t && t(e)
}
  , DE = e=>{
    e.forEach(OE)
}
;
function AE({root: e, ...t}) {
    let n = e || document;
    Au.has(n) || Au.set(n, {});
    let r = Au.get(n)
      , i = JSON.stringify(t);
    return r[i] || (r[i] = new IntersectionObserver(DE,{
        root: e,
        ...t
    })),
    r[i]
}
function VE(e, t, n) {
    let r = AE(t);
    return tf.set(e, n),
    r.observe(e),
    ()=>{
        tf.delete(e),
        r.unobserve(e)
    }
}
var BE = {
    some: 0,
    all: 1
}
  , zE = class extends pr {
    constructor() {
        super(...arguments),
        this.hasEnteredView = !1,
        this.isInView = !1
    }
    startObserver() {
        this.unmount();
        let {viewport: e={}} = this.node.getProps()
          , {root: t, margin: n, amount: r="some", once: i} = e
          , o = {
            root: t ? t.current : void 0,
            rootMargin: n,
            threshold: typeof r == "number" ? r : BE[r]
        }
          , a = s=>{
            let {isIntersecting: l} = s;
            if (this.isInView === l || (this.isInView = l,
            i && !l && this.hasEnteredView))
                return;
            l && (this.hasEnteredView = !0),
            this.node.animationState && this.node.animationState.setActive("whileInView", l);
            let {onViewportEnter: c, onViewportLeave: u} = this.node.getProps()
              , f = l ? c : u;
            f && f(s)
        }
        ;
        return VE(this.node.current, o, a)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u")
            return;
        let {props: e, prevProps: t} = this.node;
        ["amount", "margin", "root"].some(HE(e, t)) && this.startObserver()
    }
    unmount() {}
}
;
function HE({viewport: e={}}, {viewport: t={}}={}) {
    return n=>e[n] !== t[n]
}
var ey = {
    inView: {
        Feature: zE
    },
    tap: {
        Feature: ME
    },
    focus: {
        Feature: LE
    },
    hover: {
        Feature: _E
    }
}
  , ty = class {
    constructor(e, t, {transformPagePoint: n, contextWindow: r, dragSnapToOrigin: i=!1}={}) {
        if (this.startEvent = null,
        this.lastMoveEvent = null,
        this.lastMoveEventInfo = null,
        this.handlers = {},
        this.contextWindow = _,
        this.updatePoint = ()=>{
            if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            let u = Bu(this.lastMoveEventInfo, this.history)
              , f = this.startEvent !== null
              , d = Vg(u.offset, {
                x: 0,
                y: 0
            }) >= 3;
            if (!f && !d)
                return;
            let {point: h} = u
              , {timestamp: g} = Ie;
            this.history.push({
                ...h,
                timestamp: g
            });
            let {onStart: y, onMove: S} = this.handlers;
            f || (y && y(this.lastMoveEvent, u),
            this.startEvent = this.lastMoveEvent),
            S && S(this.lastMoveEvent, u)
        }
        ,
        this.handlePointerMove = (u,f)=>{
            this.lastMoveEvent = u,
            this.lastMoveEventInfo = Vu(f, this.transformPagePoint),
            J.update(this.updatePoint, !0)
        }
        ,
        this.handlePointerUp = (u,f)=>{
            this.end();
            let {onEnd: d, onSessionEnd: h, resumeAnimation: g} = this.handlers;
            if (this.dragSnapToOrigin && g && g(),
            !(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            let y = Bu(u.type === "pointercancel" ? this.lastMoveEventInfo : Vu(f, this.transformPagePoint), this.history);
            this.startEvent && d && d(u, y),
            h && h(u, y)
        }
        ,
        !rg(e))
            return;
        this.dragSnapToOrigin = i,
        this.handlers = t,
        this.transformPagePoint = n,
        this.contextWindow = r || _;
        let o = al(e)
          , a = Vu(o, this.transformPagePoint)
          , {point: s} = a
          , {timestamp: l} = Ie;
        this.history = [{
            ...s,
            timestamp: l
        }];
        let {onSessionStart: c} = t;
        c && c(e, Bu(a, this.history)),
        this.removeListeners = wn(Sn(this.contextWindow, "pointermove", this.handlePointerMove), Sn(this.contextWindow, "pointerup", this.handlePointerUp), Sn(this.contextWindow, "pointercancel", this.handlePointerUp))
    }
    updateHandlers(e) {
        this.handlers = e
    }
    end() {
        this.removeListeners && this.removeListeners(),
        rt(this.updatePoint)
    }
}
;
function Vu(e, t) {
    return t ? {
        point: t(e.point)
    } : e
}
function rv(e, t) {
    return {
        x: e.x - t.x,
        y: e.y - t.y
    }
}
function Bu({point: e}, t) {
    return {
        point: e,
        delta: rv(e, ny(t)),
        offset: rv(e, NE(t)),
        velocity: $E(t, .1)
    }
}
function NE(e) {
    return e[0]
}
function ny(e) {
    return e[e.length - 1]
}
function $E(e, t) {
    if (e.length < 2)
        return {
            x: 0,
            y: 0
        };
    let n = e.length - 1
      , r = null
      , i = ny(e);
    for (; n >= 0 && (r = e[n],
    !(i.timestamp - r.timestamp > jn(t))); )
        n--;
    if (!r)
        return {
            x: 0,
            y: 0
        };
    let o = Cn(i.timestamp - r.timestamp);
    if (o === 0)
        return {
            x: 0,
            y: 0
        };
    let a = {
        x: (i.x - r.x) / o,
        y: (i.y - r.y) / o
    };
    return a.x === 1 / 0 && (a.x = 0),
    a.y === 1 / 0 && (a.y = 0),
    a
}
function jE(e, {min: t, max: n}, r) {
    return t !== void 0 && e < t ? e = r ? pe(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? pe(n, e, r.max) : Math.min(e, n)),
    e
}
function iv(e, t, n) {
    return {
        min: t !== void 0 ? e.min + t : void 0,
        max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
    }
}
function WE(e, {top: t, left: n, bottom: r, right: i}) {
    return {
        x: iv(e.x, n, i),
        y: iv(e.y, t, r)
    }
}
function ov(e, t) {
    let n = t.min - e.min
      , r = t.max - e.max;
    return t.max - t.min < e.max - e.min && ([n,r] = [r, n]),
    {
        min: n,
        max: r
    }
}
function UE(e, t) {
    return {
        x: ov(e.x, t.x),
        y: ov(e.y, t.y)
    }
}
function XE(e, t) {
    let n = .5
      , r = Tt(e)
      , i = Tt(t);
    return i > r ? n = dr(t.min, t.max - r, e.min) : r > i && (n = dr(e.min, e.max - i, t.min)),
    Wn(0, 1, n)
}
function YE(e, t) {
    let n = {};
    return t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
}
var nf = .35;
function GE(e=nf) {
    return e === !1 ? e = 0 : e === !0 && (e = nf),
    {
        x: av(e, "left", "right"),
        y: av(e, "top", "bottom")
    }
}
function av(e, t, n) {
    return {
        min: sv(e, t),
        max: sv(e, n)
    }
}
function sv(e, t) {
    return typeof e == "number" ? e : e[t] || 0
}
function Yt(e) {
    return [e("x"), e("y")]
}
function ry({top: e, left: t, right: n, bottom: r}) {
    return {
        x: {
            min: t,
            max: n
        },
        y: {
            min: e,
            max: r
        }
    }
}
function KE({x: e, y: t}) {
    return {
        top: t.min,
        right: e.max,
        bottom: t.max,
        left: e.min
    }
}
function qE(e, t) {
    if (!t)
        return e;
    let n = t({
        x: e.left,
        y: e.top
    })
      , r = t({
        x: e.right,
        y: e.bottom
    });
    return {
        top: n.y,
        left: n.x,
        bottom: r.y,
        right: r.x
    }
}
function zu(e) {
    return e === void 0 || e === 1
}
function rf({scale: e, scaleX: t, scaleY: n}) {
    return !zu(e) || !zu(t) || !zu(n)
}
function Kr(e) {
    return rf(e) || iy(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY
}
function iy(e) {
    return lv(e.x) || lv(e.y)
}
function lv(e) {
    return e && e !== "0%"
}
function Js(e, t, n) {
    let r = e - n
      , i = t * r;
    return n + i
}
function cv(e, t, n, r, i) {
    return i !== void 0 && (e = Js(e, i, r)),
    Js(e, n, r) + t
}
function of(e, t=0, n=1, r, i) {
    e.min = cv(e.min, t, n, r, i),
    e.max = cv(e.max, t, n, r, i)
}
function oy(e, {x: t, y: n}) {
    of(e.x, t.translate, t.scale, t.originPoint),
    of(e.y, n.translate, n.scale, n.originPoint)
}
function QE(e, t, n, r=!1) {
    let i = n.length;
    if (!i)
        return;
    t.x = t.y = 1;
    let o, a;
    for (let s = 0; s < i; s++) {
        o = n[s],
        a = o.projectionDelta;
        let l = o.instance;
        l && l.style && l.style.display === "contents" || (r && o.options.layoutScroll && o.scroll && o !== o.root && Oi(e, {
            x: -o.scroll.offset.x,
            y: -o.scroll.offset.y
        }),
        a && (t.x *= a.x.scale,
        t.y *= a.y.scale,
        oy(e, a)),
        r && Kr(o.latestValues) && Oi(e, o.latestValues))
    }
    t.x = uv(t.x),
    t.y = uv(t.y)
}
function uv(e) {
    return Number.isInteger(e) || e > 1.0000000000001 || e < .999999999999 ? e : 1
}
function fr(e, t) {
    e.min = e.min + t,
    e.max = e.max + t
}
function fv(e, t, [n,r,i]) {
    let o = t[i] !== void 0 ? t[i] : .5
      , a = pe(e.min, e.max, o);
    of(e, t[n], t[r], a, t.scale)
}
var ZE = ["x", "scaleX", "originX"]
  , JE = ["y", "scaleY", "originY"];
function Oi(e, t) {
    fv(e.x, t, ZE),
    fv(e.y, t, JE)
}
function ay(e, t) {
    return ry(qE(e.getBoundingClientRect(), t))
}
function eR(e, t, n) {
    let r = ay(e, n)
      , {scroll: i} = t;
    return i && (fr(r.x, i.offset.x),
    fr(r.y, i.offset.y)),
    r
}
var sy = ({current: e})=>e ? e.ownerDocument.defaultView : null
  , tR = new WeakMap
  , nR = class {
    constructor(e) {
        this.openGlobalLock = null,
        this.isDragging = !1,
        this.currentDirection = null,
        this.originPoint = {
            x: 0,
            y: 0
        },
        this.constraints = !1,
        this.hasMutatedConstraints = !1,
        this.elastic = Pe(),
        this.visualElement = e
    }
    start(e, {snapToCursor: t=!1}={}) {
        let {presenceContext: n} = this.visualElement;
        if (n && n.isPresent === !1)
            return;
        let r = c=>{
            let {dragSnapToOrigin: u} = this.getProps();
            u ? this.pauseAnimation() : this.stopAnimation(),
            t && this.snapToCursor(al(c, "page").point)
        }
          , i = (c,u)=>{
            let {drag: f, dragPropagation: d, onDragStart: h} = this.getProps();
            if (f && !d && (this.openGlobalLock && this.openGlobalLock(),
            this.openGlobalLock = ag(f),
            !this.openGlobalLock))
                return;
            this.isDragging = !0,
            this.currentDirection = null,
            this.resolveConstraints(),
            this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
            this.visualElement.projection.target = void 0),
            Yt(y=>{
                let S = this.getAxisMotionValue(y).get() || 0;
                if (xn.test(S)) {
                    let {projection: m} = this.visualElement;
                    if (m && m.layout) {
                        let p = m.layout.layoutBox[y];
                        p && (S = Tt(p) * (parseFloat(S) / 100))
                    }
                }
                this.originPoint[y] = S
            }
            ),
            h && J.update(()=>h(c, u), !1, !0);
            let {animationState: g} = this.visualElement;
            g && g.setActive("whileDrag", !0)
        }
          , o = (c,u)=>{
            let {dragPropagation: f, dragDirectionLock: d, onDirectionLock: h, onDrag: g} = this.getProps();
            if (!f && !this.openGlobalLock)
                return;
            let {offset: y} = u;
            if (d && this.currentDirection === null) {
                this.currentDirection = rR(y),
                this.currentDirection !== null && h && h(this.currentDirection);
                return
            }
            this.updateAxis("x", u.point, y),
            this.updateAxis("y", u.point, y),
            this.visualElement.render(),
            g && g(c, u)
        }
          , a = (c,u)=>this.stop(c, u)
          , s = ()=>Yt(c=>{
            var u;
            return this.getAnimationState(c) === "paused" && ((u = this.getAxisMotionValue(c).animation) === null || u === void 0 ? void 0 : u.play())
        }
        )
          , {dragSnapToOrigin: l} = this.getProps();
        this.panSession = new ty(e,{
            onSessionStart: r,
            onStart: i,
            onMove: o,
            onSessionEnd: a,
            resumeAnimation: s
        },{
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: l,
            contextWindow: sy(this.visualElement)
        })
    }
    stop(e, t) {
        let n = this.isDragging;
        if (this.cancel(),
        !n)
            return;
        let {velocity: r} = t;
        this.startAnimation(r);
        let {onDragEnd: i} = this.getProps();
        i && J.update(()=>i(e, t))
    }
    cancel() {
        this.isDragging = !1;
        let {projection: e, animationState: t} = this.visualElement;
        e && (e.isAnimationBlocked = !1),
        this.panSession && this.panSession.end(),
        this.panSession = void 0;
        let {dragPropagation: n} = this.getProps();
        !n && this.openGlobalLock && (this.openGlobalLock(),
        this.openGlobalLock = null),
        t && t.setActive("whileDrag", !1)
    }
    updateAxis(e, t, n) {
        let {drag: r} = this.getProps();
        if (!n || !Bs(e, r, this.currentDirection))
            return;
        let i = this.getAxisMotionValue(e)
          , o = this.originPoint[e] + n[e];
        this.constraints && this.constraints[e] && (o = jE(o, this.constraints[e], this.elastic[e])),
        i.set(o)
    }
    resolveConstraints() {
        var e;
        let {dragConstraints: t, dragElastic: n} = this.getProps()
          , r = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (e = this.visualElement.projection) === null || e === void 0 ? void 0 : e.layout
          , i = this.constraints;
        t && _i(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && r ? this.constraints = WE(r.layoutBox, t) : this.constraints = !1,
        this.elastic = GE(n),
        i !== this.constraints && r && this.constraints && !this.hasMutatedConstraints && Yt(o=>{
            this.getAxisMotionValue(o) && (this.constraints[o] = YE(r.layoutBox[o], this.constraints[o]))
        }
        )
    }
    resolveRefConstraints() {
        let {dragConstraints: e, onMeasureDragConstraints: t} = this.getProps();
        if (!e || !_i(e))
            return !1;
        let n = e.current;
        it(n !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
        let {projection: r} = this.visualElement;
        if (!r || !r.layout)
            return !1;
        let i = eR(n, r.root, this.visualElement.getTransformPagePoint())
          , o = UE(r.layout.layoutBox, i);
        if (t) {
            let a = t(KE(o));
            this.hasMutatedConstraints = !!a,
            a && (o = ry(a))
        }
        return o
    }
    startAnimation(e) {
        let {drag: t, dragMomentum: n, dragElastic: r, dragTransition: i, dragSnapToOrigin: o, onDragTransitionEnd: a} = this.getProps()
          , s = this.constraints || {}
          , l = Yt(c=>{
            if (!Bs(c, t, this.currentDirection))
                return;
            let u = s && s[c] || {};
            o && (u = {
                min: 0,
                max: 0
            });
            let f = r ? 200 : 1e6
              , d = r ? 40 : 1e7
              , h = {
                type: "inertia",
                velocity: n ? e[c] : 0,
                bounceStiffness: f,
                bounceDamping: d,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...i,
                ...u
            };
            return this.startAxisValueAnimation(c, h)
        }
        );
        return Promise.all(l).then(a)
    }
    startAxisValueAnimation(e, t) {
        let n = this.getAxisMotionValue(e);
        return n.start(Of(e, n, 0, t))
    }
    stopAnimation() {
        Yt(e=>this.getAxisMotionValue(e).stop())
    }
    pauseAnimation() {
        Yt(e=>{
            var t;
            return (t = this.getAxisMotionValue(e).animation) === null || t === void 0 ? void 0 : t.pause()
        }
        )
    }
    getAnimationState(e) {
        var t;
        return (t = this.getAxisMotionValue(e).animation) === null || t === void 0 ? void 0 : t.state
    }
    getAxisMotionValue(e) {
        let t = "_drag" + e.toUpperCase()
          , n = this.visualElement.getProps()
          , r = n[t];
        return r || this.visualElement.getValue(e, (n.initial ? n.initial[e] : void 0) || 0)
    }
    snapToCursor(e) {
        Yt(t=>{
            let {drag: n} = this.getProps();
            if (!Bs(t, n, this.currentDirection))
                return;
            let {projection: r} = this.visualElement
              , i = this.getAxisMotionValue(t);
            if (r && r.layout) {
                let {min: o, max: a} = r.layout.layoutBox[t];
                i.set(e[t] - pe(o, a, .5))
            }
        }
        )
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current)
            return;
        let {drag: e, dragConstraints: t} = this.getProps()
          , {projection: n} = this.visualElement;
        if (!_i(t) || !n || !this.constraints)
            return;
        this.stopAnimation();
        let r = {
            x: 0,
            y: 0
        };
        Yt(o=>{
            let a = this.getAxisMotionValue(o);
            if (a) {
                let s = a.get();
                r[o] = XE({
                    min: s,
                    max: s
                }, this.constraints[o])
            }
        }
        );
        let {transformTemplate: i} = this.visualElement.getProps();
        this.visualElement.current.style.transform = i ? i({}, "") : "none",
        n.root && n.root.updateScroll(),
        n.updateLayout(),
        this.resolveConstraints(),
        Yt(o=>{
            if (!Bs(o, e, null))
                return;
            let a = this.getAxisMotionValue(o)
              , {min: s, max: l} = this.constraints[o];
            a.set(pe(s, l, r[o]))
        }
        )
    }
    addListeners() {
        if (!this.visualElement.current)
            return;
        tR.set(this.visualElement, this);
        let e = this.visualElement.current
          , t = Sn(e, "pointerdown", s=>{
            let {drag: l, dragListener: c=!0} = this.getProps();
            l && c && this.start(s)
        }
        )
          , n = ()=>{
            let {dragConstraints: s} = this.getProps();
            _i(s) && (this.constraints = this.resolveRefConstraints())
        }
          , {projection: r} = this.visualElement
          , i = r.addEventListener("measure", n);
        r && !r.layout && (r.root && r.root.updateScroll(),
        r.updateLayout()),
        n();
        let o = $n(_, "resize", ()=>this.scalePositionWithinConstraints())
          , a = r.addEventListener("didUpdate", ({delta: s, hasLayoutChanged: l})=>{
            this.isDragging && l && (Yt(c=>{
                let u = this.getAxisMotionValue(c);
                u && (this.originPoint[c] += s[c].translate,
                u.set(u.get() + s[c].translate))
            }
            ),
            this.visualElement.render())
        }
        );
        return ()=>{
            o(),
            t(),
            i(),
            a && a()
        }
    }
    getProps() {
        let e = this.visualElement.getProps()
          , {drag: t=!1, dragDirectionLock: n=!1, dragPropagation: r=!1, dragConstraints: i=!1, dragElastic: o=nf, dragMomentum: a=!0} = e;
        return {
            ...e,
            drag: t,
            dragDirectionLock: n,
            dragPropagation: r,
            dragConstraints: i,
            dragElastic: o,
            dragMomentum: a
        }
    }
}
;
function Bs(e, t, n) {
    return (t === !0 || t === e) && (n === null || n === e)
}
function rR(e, t=10) {
    let n = null;
    return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"),
    n
}
var iR = class extends pr {
    constructor(e) {
        super(e),
        this.removeGroupControls = De,
        this.removeListeners = De,
        this.controls = new nR(e)
    }
    mount() {
        let {dragControls: e} = this.node.getProps();
        e && (this.removeGroupControls = e.subscribe(this.controls)),
        this.removeListeners = this.controls.addListeners() || De
    }
    unmount() {
        this.removeGroupControls(),
        this.removeListeners()
    }
}
  , dv = e=>(t,n)=>{
    e && J.update(()=>e(t, n))
}
  , oR = class extends pr {
    constructor() {
        super(...arguments),
        this.removePointerDownListener = De
    }
    onPointerDown(e) {
        this.session = new ty(e,this.createPanHandlers(),{
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: sy(this.node)
        })
    }
    createPanHandlers() {
        let {onPanSessionStart: e, onPanStart: t, onPan: n, onPanEnd: r} = this.node.getProps();
        return {
            onSessionStart: dv(e),
            onStart: dv(t),
            onMove: n,
            onEnd: (i,o)=>{
                delete this.session,
                r && J.update(()=>r(i, o))
            }
        }
    }
    mount() {
        this.removePointerDownListener = Sn(this.node.current, "pointerdown", e=>this.onPointerDown(e))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(),
        this.session && this.session.end()
    }
}
  , $s = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
};
function hv(e, t) {
    return t.max === t.min ? 0 : e / (t.max - t.min) * 100
}
var Bo = {
    correct: (e,t)=>{
        if (!t.target)
            return e;
        if (typeof e == "string")
            if (j.test(e))
                e = parseFloat(e);
            else
                return e;
        let n = hv(e, t.target.x)
          , r = hv(e, t.target.y);
        return `${n}% ${r}%`
    }
}
  , aR = {
    correct: (e,{treeScale: t, projectionDelta: n})=>{
        let r = e
          , i = Un.parse(e);
        if (i.length > 5)
            return r;
        let o = Un.createTransformer(e)
          , a = typeof i[0] != "number" ? 1 : 0
          , s = n.x.scale * t.x
          , l = n.y.scale * t.y;
        i[0 + a] /= s,
        i[1 + a] /= l;
        let c = pe(s, l, .5);
        return typeof i[2 + a] == "number" && (i[2 + a] /= c),
        typeof i[3 + a] == "number" && (i[3 + a] /= c),
        o(i)
    }
}
  , sR = class extends b.Component {
    componentDidMount() {
        let {visualElement: e, layoutGroup: t, switchLayoutGroup: n, layoutId: r} = this.props
          , {projection: i} = e;
        mf(lR),
        i && (t.group && t.group.add(i),
        n && n.register && r && n.register(i),
        i.root.didUpdate(),
        i.addEventListener("animationComplete", ()=>{
            this.safeToRemove()
        }
        ),
        i.setOptions({
            ...i.options,
            onExitComplete: ()=>this.safeToRemove()
        })),
        $s.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(e) {
        let {layoutDependency: t, visualElement: n, drag: r, isPresent: i} = this.props
          , o = n.projection;
        return o && (o.isPresent = i,
        r || e.layoutDependency !== t || t === void 0 ? o.willUpdate() : this.safeToRemove(),
        e.isPresent !== i && (i ? o.promote() : o.relegate() || J.postRender(()=>{
            let a = o.getStack();
            (!a || !a.members.length) && this.safeToRemove()
        }
        ))),
        null
    }
    componentDidUpdate() {
        let {projection: e} = this.props.visualElement;
        e && (e.root.didUpdate(),
        ff.postRender(()=>{
            !e.currentAnimation && e.isLead() && this.safeToRemove()
        }
        ))
    }
    componentWillUnmount() {
        let {visualElement: e, layoutGroup: t, switchLayoutGroup: n} = this.props
          , {projection: r} = e;
        r && (r.scheduleCheckAfterUnmount(),
        t && t.group && t.group.remove(r),
        n && n.deregister && n.deregister(r))
    }
    safeToRemove() {
        let {safeToRemove: e} = this.props;
        e && e()
    }
    render() {
        return null
    }
}
;
function ly(e) {
    let[t,n] = Bf()
      , r = M(Go);
    return b.createElement(sR, {
        ...e,
        layoutGroup: r,
        switchLayoutGroup: M(nl),
        isPresent: t,
        safeToRemove: n
    })
}
var lR = {
    borderRadius: {
        ...Bo,
        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
    },
    borderTopLeftRadius: Bo,
    borderTopRightRadius: Bo,
    borderBottomLeftRadius: Bo,
    borderBottomRightRadius: Bo,
    boxShadow: aR
}
  , cy = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]
  , cR = cy.length
  , pv = e=>typeof e == "string" ? parseFloat(e) : e
  , mv = e=>typeof e == "number" || j.test(e);
function uR(e, t, n, r, i, o) {
    i ? (e.opacity = pe(0, n.opacity !== void 0 ? n.opacity : 1, fR(r)),
    e.opacityExit = pe(t.opacity !== void 0 ? t.opacity : 1, 0, dR(r))) : o && (e.opacity = pe(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
    for (let a = 0; a < cR; a++) {
        let s = `border${cy[a]}Radius`
          , l = vv(t, s)
          , c = vv(n, s);
        if (l === void 0 && c === void 0)
            continue;
        l || (l = 0),
        c || (c = 0),
        l === 0 || c === 0 || mv(l) === mv(c) ? (e[s] = Math.max(pe(pv(l), pv(c), r), 0),
        (xn.test(c) || xn.test(l)) && (e[s] += "%")) : e[s] = c
    }
    (t.rotate || n.rotate) && (e.rotate = pe(t.rotate || 0, n.rotate || 0, r))
}
function vv(e, t) {
    return e[t] !== void 0 ? e[t] : e.borderRadius
}
var fR = uy(0, .5, wf)
  , dR = uy(.5, .95, De);
function uy(e, t, n) {
    return r=>r < e ? 0 : r > t ? 1 : n(dr(e, t, r))
}
function gv(e, t) {
    e.min = t.min,
    e.max = t.max
}
function Xt(e, t) {
    gv(e.x, t.x),
    gv(e.y, t.y)
}
function yv(e, t, n, r, i) {
    return e -= t,
    e = Js(e, 1 / n, r),
    i !== void 0 && (e = Js(e, 1 / i, r)),
    e
}
function hR(e, t=0, n=1, r=.5, i, o=e, a=e) {
    if (xn.test(t) && (t = parseFloat(t),
    t = pe(a.min, a.max, t / 100) - a.min),
    typeof t != "number")
        return;
    let s = pe(o.min, o.max, r);
    e === o && (s -= t),
    e.min = yv(e.min, t, n, s, i),
    e.max = yv(e.max, t, n, s, i)
}
function bv(e, t, [n,r,i], o, a) {
    hR(e, t[n], t[r], t[i], t.scale, o, a)
}
var pR = ["x", "scaleX", "originX"]
  , mR = ["y", "scaleY", "originY"];
function xv(e, t, n, r) {
    bv(e.x, t, pR, n ? n.x : void 0, r ? r.x : void 0),
    bv(e.y, t, mR, n ? n.y : void 0, r ? r.y : void 0)
}
function Sv(e) {
    return e.translate === 0 && e.scale === 1
}
function fy(e) {
    return Sv(e.x) && Sv(e.y)
}
function vR(e, t) {
    return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max
}
function dy(e, t) {
    return Math.round(e.x.min) === Math.round(t.x.min) && Math.round(e.x.max) === Math.round(t.x.max) && Math.round(e.y.min) === Math.round(t.y.min) && Math.round(e.y.max) === Math.round(t.y.max)
}
function wv(e) {
    return Tt(e.x) / Tt(e.y)
}
var gR = class {
    constructor() {
        this.members = []
    }
    add(e) {
        If(this.members, e),
        e.scheduleRender()
    }
    remove(e) {
        if (cl(this.members, e),
        e === this.prevLead && (this.prevLead = void 0),
        e === this.lead) {
            let t = this.members[this.members.length - 1];
            t && this.promote(t)
        }
    }
    relegate(e) {
        let t = this.members.findIndex(r=>e === r);
        if (t === 0)
            return !1;
        let n;
        for (let r = t; r >= 0; r--) {
            let i = this.members[r];
            if (i.isPresent !== !1) {
                n = i;
                break
            }
        }
        return n ? (this.promote(n),
        !0) : !1
    }
    promote(e, t) {
        let n = this.lead;
        if (e !== n && (this.prevLead = n,
        this.lead = e,
        e.show(),
        n)) {
            n.instance && n.scheduleRender(),
            e.scheduleRender(),
            e.resumeFrom = n,
            t && (e.resumeFrom.preserveOpacity = !0),
            n.snapshot && (e.snapshot = n.snapshot,
            e.snapshot.latestValues = n.animationValues || n.latestValues),
            e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
            let {crossfade: r} = e.options;
            r === !1 && n.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(e=>{
            let {options: t, resumingFrom: n} = e;
            t.onExitComplete && t.onExitComplete(),
            n && n.options.onExitComplete && n.options.onExitComplete()
        }
        )
    }
    scheduleRender() {
        this.members.forEach(e=>{
            e.instance && e.scheduleRender(!1)
        }
        )
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}
;
function Cv(e, t, n) {
    let r = ""
      , i = e.x.translate / t.x
      , o = e.y.translate / t.y
      , a = n?.z || 0;
    if ((i || o || a) && (r = `translate3d(${i}px, ${o}px, ${a}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n) {
        let {transformPerspective: c, rotate: u, rotateX: f, rotateY: d, skewX: h, skewY: g} = n;
        c && (r = `perspective(${c}px) ${r}`),
        u && (r += `rotate(${u}deg) `),
        f && (r += `rotateX(${f}deg) `),
        d && (r += `rotateY(${d}deg) `),
        h && (r += `skewX(${h}deg) `),
        g && (r += `skewY(${g}deg) `)
    }
    let s = e.x.scale * t.x
      , l = e.y.scale * t.y;
    return (s !== 1 || l !== 1) && (r += `scale(${s}, ${l})`),
    r || "none"
}
function yR(e) {
    _.MotionDebug && _.MotionDebug.record(e)
}
function hy(e) {
    return e instanceof SVGElement && e.tagName !== "svg"
}
function Xf(e, t, n) {
    let r = Fe(e) ? e : we(e);
    return r.start(Of("", r, t, n)),
    r.animation
}
var Hu = ["", "X", "Y", "Z"]
  , bR = {
    visibility: "hidden"
};
function Nu(e, t, n) {
    let {latestValues: r} = t;
    r[e] && (n[e] = r[e],
    t.setStaticValue(e, 0))
}
var kv = 1e3
  , xR = 0
  , qr = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0
};
function py({attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: i}) {
    return class {
        constructor(a={}, s=t?.()) {
            this.id = xR++,
            this.animationId = 0,
            this.children = new Set,
            this.options = {},
            this.isTreeAnimating = !1,
            this.isAnimationBlocked = !1,
            this.isLayoutDirty = !1,
            this.isProjectionDirty = !1,
            this.isSharedProjectionDirty = !1,
            this.isTransformDirty = !1,
            this.updateManuallyBlocked = !1,
            this.updateBlockedByResize = !1,
            this.isUpdating = !1,
            this.isSVG = !1,
            this.needsReset = !1,
            this.shouldResetTransform = !1,
            this.treeScale = {
                x: 1,
                y: 1
            },
            this.eventHandlers = new Map,
            this.hasTreeAnimated = !1,
            this.updateScheduled = !1,
            this.projectionUpdateScheduled = !1,
            this.checkUpdateFailed = ()=>{
                this.isUpdating && (this.isUpdating = !1,
                this.clearAllSnapshots())
            }
            ,
            this.updateProjection = ()=>{
                this.projectionUpdateScheduled = !1,
                qr.totalNodes = qr.resolvedTargetDeltas = qr.recalculatedProjection = 0,
                this.nodes.forEach(CR),
                this.nodes.forEach(PR),
                this.nodes.forEach(IR),
                this.nodes.forEach(kR),
                yR(qr)
            }
            ,
            this.hasProjected = !1,
            this.isVisible = !0,
            this.animationProgress = 0,
            this.sharedNodes = new Map,
            this.latestValues = a,
            this.root = s ? s.root || s : this,
            this.path = s ? [...s.path, s] : [],
            this.parent = s,
            this.depth = s ? s.depth + 1 : 0;
            for (let l = 0; l < this.path.length; l++)
                this.path[l].shouldResetTransform = !0;
            this.root === this && (this.nodes = new Bg)
        }
        addEventListener(a, s) {
            return this.eventHandlers.has(a) || this.eventHandlers.set(a, new Ff),
            this.eventHandlers.get(a).add(s)
        }
        notifyListeners(a, ...s) {
            let l = this.eventHandlers.get(a);
            l && l.notify(...s)
        }
        hasListeners(a) {
            return this.eventHandlers.has(a)
        }
        mount(a, s=this.root.hasTreeAnimated) {
            if (this.instance)
                return;
            this.isSVG = hy(a),
            this.instance = a;
            let {layoutId: l, layout: c, visualElement: u} = this.options;
            if (u && !u.current && u.mount(a),
            this.root.nodes.add(this),
            this.parent && this.parent.children.add(this),
            s && (c || l) && (this.isLayoutDirty = !0),
            e) {
                let f, d = ()=>this.root.updateBlockedByResize = !1;
                e(a, ()=>{
                    this.root.updateBlockedByResize = !0,
                    f && f(),
                    f = zg(d, 250),
                    $s.hasAnimatedSinceResize && ($s.hasAnimatedSinceResize = !1,
                    this.nodes.forEach(Ev))
                }
                )
            }
            l && this.root.registerSharedNode(l, this),
            this.options.animate !== !1 && u && (l || c) && this.addEventListener("didUpdate", ({delta: f, hasLayoutChanged: d, hasRelativeTargetChanged: h, layout: g})=>{
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0,
                    this.relativeTarget = void 0;
                    return
                }
                let y = this.options.transition || u.getDefaultTransition() || OR
                  , {onLayoutAnimationStart: S, onLayoutAnimationComplete: m} = u.getProps()
                  , p = !this.targetLayout || !dy(this.targetLayout, g) || h
                  , v = !d && h;
                if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || v || d && (p || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom,
                    this.resumingFrom.resumingFrom = void 0),
                    this.setAnimationOrigin(f, v);
                    let x = {
                        ...Mf(y, "layout"),
                        onPlay: S,
                        onComplete: m
                    };
                    (u.shouldReduceMotion || this.options.layoutRoot) && (x.delay = 0,
                    x.type = !1),
                    this.startAnimation(x)
                } else
                    d || Ev(this),
                    this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = g
            }
            )
        }
        unmount() {
            this.options.layoutId && this.willUpdate(),
            this.root.nodes.remove(this);
            let a = this.getStack();
            a && a.remove(this),
            this.parent && this.parent.children.delete(this),
            this.instance = void 0,
            rt(this.updateProjection)
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
            this.isUpdateBlocked() || (this.isUpdating = !0,
            this.nodes && this.nodes.forEach(FR),
            this.animationId++)
        }
        getTransformTemplate() {
            let {visualElement: a} = this.options;
            return a && a.getProps().transformTemplate
        }
        willUpdate(a=!0) {
            if (this.root.hasTreeAnimated = !0,
            this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (!this.root.isUpdating && this.root.startUpdate(),
            this.isLayoutDirty)
                return;
            this.isLayoutDirty = !0;
            for (let u = 0; u < this.path.length; u++) {
                let f = this.path[u];
                f.shouldResetTransform = !0,
                f.updateScroll("snapshot"),
                f.options.layoutRoot && f.willUpdate(!1)
            }
            let {layoutId: s, layout: l} = this.options;
            if (s === void 0 && !l)
                return;
            let c = this.getTransformTemplate();
            this.prevTransformTemplateValue = c ? c(this.latestValues, "") : void 0,
            this.updateSnapshot(),
            a && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1,
            this.isUpdateBlocked()) {
                this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(Tv);
                return
            }
            this.isUpdating || this.nodes.forEach(ER),
            this.isUpdating = !1,
            _.HandoffCancelAllAnimations && _.HandoffCancelAllAnimations(),
            this.nodes.forEach(RR),
            this.nodes.forEach(SR),
            this.nodes.forEach(wR),
            this.clearAllSnapshots();
            let s = Jr.now();
            Ie.delta = Wn(0, 1e3 / 60, s - Ie.timestamp),
            Ie.timestamp = s,
            Ie.isProcessing = !0,
            Hs.update.process(Ie),
            Hs.preRender.process(Ie),
            Hs.render.process(Ie),
            Ie.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0,
            ff.read(()=>this.update()))
        }
        clearAllSnapshots() {
            this.nodes.forEach(TR),
            this.sharedNodes.forEach(_R)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0,
            J.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            J.postRender(()=>{
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            }
            )
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure())
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(),
            !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
                return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let l = 0; l < this.path.length; l++)
                    this.path[l].updateScroll();
            let a = this.layout;
            this.layout = this.measure(!1),
            this.layoutCorrected = Pe(),
            this.isLayoutDirty = !1,
            this.projectionDelta = void 0,
            this.notifyListeners("measure", this.layout.layoutBox);
            let {visualElement: s} = this.options;
            s && s.notify("LayoutMeasure", this.layout.layoutBox, a ? a.layoutBox : void 0)
        }
        updateScroll(a="measure") {
            let s = !!(this.options.layoutScroll && this.instance);
            this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === a && (s = !1),
            s && (this.scroll = {
                animationId: this.root.animationId,
                phase: a,
                isRoot: r(this.instance),
                offset: n(this.instance)
            })
        }
        resetTransform() {
            if (!i)
                return;
            let a = this.isLayoutDirty || this.shouldResetTransform
              , s = this.projectionDelta && !fy(this.projectionDelta)
              , l = this.getTransformTemplate()
              , c = l ? l(this.latestValues, "") : void 0
              , u = c !== this.prevTransformTemplateValue;
            a && (s || Kr(this.latestValues) || u) && (i(this.instance, c),
            this.shouldResetTransform = !1,
            this.scheduleRender())
        }
        measure(a=!0) {
            let s = this.measurePageBox()
              , l = this.removeElementScroll(s);
            return a && (l = this.removeTransform(l)),
            DR(l),
            {
                animationId: this.root.animationId,
                measuredBox: s,
                layoutBox: l,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            let {visualElement: a} = this.options;
            if (!a)
                return Pe();
            let s = a.measureViewportBox()
              , {scroll: l} = this.root;
            return l && (fr(s.x, l.offset.x),
            fr(s.y, l.offset.y)),
            s
        }
        removeElementScroll(a) {
            let s = Pe();
            Xt(s, a);
            for (let l = 0; l < this.path.length; l++) {
                let c = this.path[l]
                  , {scroll: u, options: f} = c;
                if (c !== this.root && u && f.layoutScroll) {
                    if (u.isRoot) {
                        Xt(s, a);
                        let {scroll: d} = this.root;
                        d && (fr(s.x, -d.offset.x),
                        fr(s.y, -d.offset.y))
                    }
                    fr(s.x, u.offset.x),
                    fr(s.y, u.offset.y)
                }
            }
            return s
        }
        applyTransform(a, s=!1) {
            let l = Pe();
            Xt(l, a);
            for (let c = 0; c < this.path.length; c++) {
                let u = this.path[c];
                !s && u.options.layoutScroll && u.scroll && u !== u.root && Oi(l, {
                    x: -u.scroll.offset.x,
                    y: -u.scroll.offset.y
                }),
                Kr(u.latestValues) && Oi(l, u.latestValues)
            }
            return Kr(this.latestValues) && Oi(l, this.latestValues),
            l
        }
        removeTransform(a) {
            let s = Pe();
            Xt(s, a);
            for (let l = 0; l < this.path.length; l++) {
                let c = this.path[l];
                if (!c.instance || !Kr(c.latestValues))
                    continue;
                rf(c.latestValues) && c.updateSnapshot();
                let u = Pe()
                  , f = c.measurePageBox();
                Xt(u, f),
                xv(s, c.latestValues, c.snapshot ? c.snapshot.layoutBox : void 0, u)
            }
            return Kr(this.latestValues) && xv(s, this.latestValues),
            s
        }
        setTargetDelta(a) {
            this.targetDelta = a,
            this.root.scheduleUpdateProjection(),
            this.isProjectionDirty = !0
        }
        setOptions(a) {
            this.options = {
                ...this.options,
                ...a,
                crossfade: a.crossfade !== void 0 ? a.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0,
            this.layout = void 0,
            this.snapshot = void 0,
            this.prevTransformTemplateValue = void 0,
            this.targetDelta = void 0,
            this.target = void 0,
            this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== Ie.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(a=!1) {
            var s;
            let l = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
            this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
            this.isSharedProjectionDirty || (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
            let c = !!this.resumingFrom || this !== l;
            if (!(a || c && this.isSharedProjectionDirty || this.isProjectionDirty || !((s = this.parent) === null || s === void 0) && s.isProjectionDirty || this.attemptToResolveRelativeTarget))
                return;
            let {layout: f, layoutId: d} = this.options;
            if (!(!this.layout || !(f || d))) {
                if (this.resolvedRelativeTargetAt = Ie.timestamp,
                !this.targetDelta && !this.relativeTarget) {
                    let h = this.getClosestProjectingParent();
                    h && h.layout && this.animationProgress !== 1 ? (this.relativeParent = h,
                    this.forceRelativeParentToResolveTarget(),
                    this.relativeTarget = Pe(),
                    this.relativeTargetOrigin = Pe(),
                    Xo(this.relativeTargetOrigin, this.layout.layoutBox, h.layout.layoutBox),
                    Xt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
                if (!(!this.relativeTarget && !this.targetDelta)) {
                    if (this.target || (this.target = Pe(),
                    this.targetWithTransforms = Pe()),
                    this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(),
                    hE(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Xt(this.target, this.layout.layoutBox),
                    oy(this.target, this.targetDelta)) : Xt(this.target, this.layout.layoutBox),
                    this.attemptToResolveRelativeTarget) {
                        this.attemptToResolveRelativeTarget = !1;
                        let h = this.getClosestProjectingParent();
                        h && !!h.resumingFrom == !!this.resumingFrom && !h.options.layoutScroll && h.target && this.animationProgress !== 1 ? (this.relativeParent = h,
                        this.forceRelativeParentToResolveTarget(),
                        this.relativeTarget = Pe(),
                        this.relativeTargetOrigin = Pe(),
                        Xo(this.relativeTargetOrigin, this.target, h.target),
                        Xt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                    }
                    qr.resolvedTargetDeltas++
                }
            }
        }
        getClosestProjectingParent() {
            if (!(!this.parent || rf(this.parent.latestValues) || iy(this.parent.latestValues)))
                return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        calcProjection() {
            var a;
            let s = this.getLead()
              , l = !!this.resumingFrom || this !== s
              , c = !0;
            if ((this.isProjectionDirty || !((a = this.parent) === null || a === void 0) && a.isProjectionDirty) && (c = !1),
            l && (this.isSharedProjectionDirty || this.isTransformDirty) && (c = !1),
            this.resolvedRelativeTargetAt === Ie.timestamp && (c = !1),
            c)
                return;
            let {layout: u, layoutId: f} = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
            this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
            !this.layout || !(u || f))
                return;
            Xt(this.layoutCorrected, this.layout.layoutBox);
            let d = this.treeScale.x
              , h = this.treeScale.y;
            QE(this.layoutCorrected, this.treeScale, this.path, l),
            s.layout && !s.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (s.target = s.layout.layoutBox,
            s.targetWithTransforms = Pe());
            let {target: g} = s;
            if (!g) {
                this.projectionTransform && (this.projectionDelta = Mi(),
                this.projectionTransform = "none",
                this.scheduleRender());
                return
            }
            this.projectionDelta || (this.projectionDelta = Mi(),
            this.projectionDeltaWithTransform = Mi());
            let y = this.projectionTransform;
            Uo(this.projectionDelta, this.layoutCorrected, g, this.latestValues),
            this.projectionTransform = Cv(this.projectionDelta, this.treeScale),
            (this.projectionTransform !== y || this.treeScale.x !== d || this.treeScale.y !== h) && (this.hasProjected = !0,
            this.scheduleRender(),
            this.notifyListeners("projectionUpdate", g)),
            qr.recalculatedProjection++
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(a=!0) {
            if (this.options.scheduleRender && this.options.scheduleRender(),
            a) {
                let s = this.getStack();
                s && s.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        setAnimationOrigin(a, s=!1) {
            let l = this.snapshot
              , c = l ? l.latestValues : {}
              , u = {
                ...this.latestValues
            }
              , f = Mi();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0),
            this.attemptToResolveRelativeTarget = !s;
            let d = Pe()
              , h = l ? l.source : void 0
              , g = this.layout ? this.layout.source : void 0
              , y = h !== g
              , S = this.getStack()
              , m = !S || S.members.length <= 1
              , p = !!(y && !m && this.options.crossfade === !0 && !this.path.some(MR));
            this.animationProgress = 0;
            let v;
            this.mixTargetDelta = x=>{
                let C = x / 1e3;
                Rv(f.x, a.x, C),
                Rv(f.y, a.y, C),
                this.setTargetDelta(f),
                this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Xo(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                LR(this.relativeTarget, this.relativeTargetOrigin, d, C),
                v && vR(this.relativeTarget, v) && (this.isProjectionDirty = !1),
                v || (v = Pe()),
                Xt(v, this.relativeTarget)),
                y && (this.animationValues = u,
                uR(u, c, this.latestValues, C, p, m)),
                this.root.scheduleUpdateProjection(),
                this.scheduleRender(),
                this.animationProgress = C
            }
            ,
            this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(a) {
            this.notifyListeners("animationStart"),
            this.currentAnimation && this.currentAnimation.stop(),
            this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(),
            this.pendingAnimation && (rt(this.pendingAnimation),
            this.pendingAnimation = void 0),
            this.pendingAnimation = J.update(()=>{
                $s.hasAnimatedSinceResize = !0,
                this.currentAnimation = Xf(0, kv, {
                    ...a,
                    onUpdate: s=>{
                        this.mixTargetDelta(s),
                        a.onUpdate && a.onUpdate(s)
                    }
                    ,
                    onComplete: ()=>{
                        a.onComplete && a.onComplete(),
                        this.completeAnimation()
                    }
                }),
                this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                this.pendingAnimation = void 0
            }
            )
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
            this.resumingFrom.preserveOpacity = void 0);
            let a = this.getStack();
            a && a.exitAnimationComplete(),
            this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
            this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(kv),
            this.currentAnimation.stop()),
            this.completeAnimation()
        }
        applyTransformsToTarget() {
            let a = this.getLead()
              , {targetWithTransforms: s, target: l, layout: c, latestValues: u} = a;
            if (!(!s || !l || !c)) {
                if (this !== a && this.layout && c && my(this.options.animationType, this.layout.layoutBox, c.layoutBox)) {
                    l = this.target || Pe();
                    let f = Tt(this.layout.layoutBox.x);
                    l.x.min = a.target.x.min,
                    l.x.max = l.x.min + f;
                    let d = Tt(this.layout.layoutBox.y);
                    l.y.min = a.target.y.min,
                    l.y.max = l.y.min + d
                }
                Xt(s, l),
                Oi(s, u),
                Uo(this.projectionDeltaWithTransform, this.layoutCorrected, s, u)
            }
        }
        registerSharedNode(a, s) {
            this.sharedNodes.has(a) || this.sharedNodes.set(a, new gR),
            this.sharedNodes.get(a).add(s);
            let c = s.options.initialPromotionConfig;
            s.promote({
                transition: c ? c.transition : void 0,
                preserveFollowOpacity: c && c.shouldPreserveFollowOpacity ? c.shouldPreserveFollowOpacity(s) : void 0
            })
        }
        isLead() {
            let a = this.getStack();
            return a ? a.lead === this : !0
        }
        getLead() {
            var a;
            let {layoutId: s} = this.options;
            return s ? ((a = this.getStack()) === null || a === void 0 ? void 0 : a.lead) || this : this
        }
        getPrevLead() {
            var a;
            let {layoutId: s} = this.options;
            return s ? (a = this.getStack()) === null || a === void 0 ? void 0 : a.prevLead : void 0
        }
        getStack() {
            let {layoutId: a} = this.options;
            if (a)
                return this.root.sharedNodes.get(a)
        }
        promote({needsReset: a, transition: s, preserveFollowOpacity: l}={}) {
            let c = this.getStack();
            c && c.promote(this, l),
            a && (this.projectionDelta = void 0,
            this.needsReset = !0),
            s && this.setOptions({
                transition: s
            })
        }
        relegate() {
            let a = this.getStack();
            return a ? a.relegate(this) : !1
        }
        resetRotation() {
            let {visualElement: a} = this.options;
            if (!a)
                return;
            let s = !1
              , {latestValues: l} = a;
            if ((l.z || l.rotate || l.rotateX || l.rotateY || l.rotateZ || l.skewX || l.skewY) && (s = !0),
            !s)
                return;
            let c = {};
            l.z && Nu("z", a, c);
            for (let u = 0; u < Hu.length; u++)
                Nu(`rotate${Hu[u]}`, a, c),
                Nu(`skew${Hu[u]}`, a, c);
            a.render();
            for (let u in c)
                a.setStaticValue(u, c[u]);
            a.scheduleRender()
        }
        getProjectionStyles(a) {
            var s, l;
            if (!this.instance || this.isSVG)
                return;
            if (!this.isVisible)
                return bR;
            let c = {
                visibility: ""
            }
              , u = this.getTransformTemplate();
            if (this.needsReset)
                return this.needsReset = !1,
                c.opacity = "",
                c.pointerEvents = nt(a?.pointerEvents) || "",
                c.transform = u ? u(this.latestValues, "") : "none",
                c;
            let f = this.getLead();
            if (!this.projectionDelta || !this.layout || !f.target) {
                let y = {};
                return this.options.layoutId && (y.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1,
                y.pointerEvents = nt(a?.pointerEvents) || ""),
                this.hasProjected && !Kr(this.latestValues) && (y.transform = u ? u({}, "") : "none",
                this.hasProjected = !1),
                y
            }
            let d = f.animationValues || f.latestValues;
            this.applyTransformsToTarget(),
            c.transform = Cv(this.projectionDeltaWithTransform, this.treeScale, d),
            u && (c.transform = u(d, c.transform));
            let {x: h, y: g} = this.projectionDelta;
            c.transformOrigin = `${h.origin * 100}% ${g.origin * 100}% 0`,
            f.animationValues ? c.opacity = f === this ? (l = (s = d.opacity) !== null && s !== void 0 ? s : this.latestValues.opacity) !== null && l !== void 0 ? l : 1 : this.preserveOpacity ? this.latestValues.opacity : d.opacityExit : c.opacity = f === this ? d.opacity !== void 0 ? d.opacity : "" : d.opacityExit !== void 0 ? d.opacityExit : 0;
            for (let y in Us) {
                if (d[y] === void 0)
                    continue;
                let {correct: S, applyTo: m} = Us[y]
                  , p = c.transform === "none" ? d[y] : S(d[y], f);
                if (m) {
                    let v = m.length;
                    for (let x = 0; x < v; x++)
                        c[m[x]] = p
                } else
                    c[y] = p
            }
            return this.options.layoutId && (c.pointerEvents = f === this ? nt(a?.pointerEvents) || "" : "none"),
            c
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(a=>{
                var s;
                return (s = a.currentAnimation) === null || s === void 0 ? void 0 : s.stop()
            }
            ),
            this.root.nodes.forEach(Tv),
            this.root.sharedNodes.clear()
        }
    }
}
function SR(e) {
    e.updateLayout()
}
function wR(e) {
    var t;
    let n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
    if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
        let {layoutBox: r, measuredBox: i} = e.layout
          , {animationType: o} = e.options
          , a = n.source !== e.layout.source;
        o === "size" ? Yt(f=>{
            let d = a ? n.measuredBox[f] : n.layoutBox[f]
              , h = Tt(d);
            d.min = r[f].min,
            d.max = d.min + h
        }
        ) : my(o, n.layoutBox, r) && Yt(f=>{
            let d = a ? n.measuredBox[f] : n.layoutBox[f]
              , h = Tt(r[f]);
            d.max = d.min + h,
            e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0,
            e.relativeTarget[f].max = e.relativeTarget[f].min + h)
        }
        );
        let s = Mi();
        Uo(s, r, n.layoutBox);
        let l = Mi();
        a ? Uo(l, e.applyTransform(i, !0), n.measuredBox) : Uo(l, r, n.layoutBox);
        let c = !fy(s)
          , u = !1;
        if (!e.resumeFrom) {
            let f = e.getClosestProjectingParent();
            if (f && !f.resumeFrom) {
                let {snapshot: d, layout: h} = f;
                if (d && h) {
                    let g = Pe();
                    Xo(g, n.layoutBox, d.layoutBox);
                    let y = Pe();
                    Xo(y, r, h.layoutBox),
                    dy(g, y) || (u = !0),
                    f.options.layoutRoot && (e.relativeTarget = y,
                    e.relativeTargetOrigin = g,
                    e.relativeParent = f)
                }
            }
        }
        e.notifyListeners("didUpdate", {
            layout: r,
            snapshot: n,
            delta: l,
            layoutDelta: s,
            hasLayoutChanged: c,
            hasRelativeTargetChanged: u
        })
    } else if (e.isLead()) {
        let {onExitComplete: r} = e.options;
        r && r()
    }
    e.options.transition = void 0
}
function CR(e) {
    qr.totalNodes++,
    e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
    e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)),
    e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty))
}
function kR(e) {
    e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
}
function TR(e) {
    e.clearSnapshot()
}
function Tv(e) {
    e.clearMeasurements()
}
function ER(e) {
    e.isLayoutDirty = !1
}
function RR(e) {
    let {visualElement: t} = e.options;
    t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform()
}
function Ev(e) {
    e.finishAnimation(),
    e.targetDelta = e.relativeTarget = e.target = void 0,
    e.isProjectionDirty = !0
}
function PR(e) {
    e.resolveTargetDelta()
}
function IR(e) {
    e.calcProjection()
}
function FR(e) {
    e.resetRotation()
}
function _R(e) {
    e.removeLeadSnapshot()
}
function Rv(e, t, n) {
    e.translate = pe(t.translate, 0, n),
    e.scale = pe(t.scale, 1, n),
    e.origin = t.origin,
    e.originPoint = t.originPoint
}
function Pv(e, t, n, r) {
    e.min = pe(t.min, n.min, r),
    e.max = pe(t.max, n.max, r)
}
function LR(e, t, n, r) {
    Pv(e.x, t.x, n.x, r),
    Pv(e.y, t.y, n.y, r)
}
function MR(e) {
    return e.animationValues && e.animationValues.opacityExit !== void 0
}
var OR = {
    duration: .45,
    ease: [.4, 0, .1, 1]
}
  , Iv = e=>typeof Ke < "u" && Ke.userAgent && Ke.userAgent.toLowerCase().includes(e)
  , Fv = Iv("applewebkit/") && !Iv("chrome/") ? Math.round : De;
function _v(e) {
    e.min = Fv(e.min),
    e.max = Fv(e.max)
}
function DR(e) {
    _v(e.x),
    _v(e.y)
}
function my(e, t, n) {
    return e === "position" || e === "preserve-aspect" && !ef(wv(t), wv(n), .2)
}
var AR = py({
    attachResizeListener: (e,t)=>$n(e, "resize", t),
    measureScroll: ()=>({
        x: document.documentElement.scrollLeft || document.body.scrollLeft,
        y: document.documentElement.scrollTop || document.body.scrollTop
    }),
    checkIsScrollRoot: ()=>!0
})
  , ei = {
    current: void 0
}
  , vy = py({
    measureScroll: e=>({
        x: e.scrollLeft,
        y: e.scrollTop
    }),
    defaultParent: ()=>{
        if (!ei.current) {
            let e = new AR({});
            e.mount(_),
            e.setOptions({
                layoutScroll: !0
            }),
            ei.current = e
        }
        return ei.current
    }
    ,
    resetTransform: (e,t)=>{
        e.style.transform = t !== void 0 ? t : "none"
    }
    ,
    checkIsScrollRoot: e=>_.getComputedStyle(e).position === "fixed"
})
  , gy = {
    pan: {
        Feature: oR
    },
    drag: {
        Feature: iR,
        ProjectionNode: vy,
        MeasureLayout: ly
    }
}
  , VR = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function BR(e) {
    let t = VR.exec(e);
    if (!t)
        return [, ];
    let[,n,r,i] = t;
    return [`--${n ?? r}`, i]
}
var zR = 4;
function af(e, t, n=1) {
    it(n <= zR, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);
    let[r,i] = BR(e);
    if (!r)
        return;
    let o = _.getComputedStyle(t).getPropertyValue(r);
    if (o) {
        let a = o.trim();
        return kg(a) ? parseFloat(a) : a
    }
    return Gs(i) ? af(i, t, n + 1) : i
}
function HR(e, {...t}, n) {
    let r = e.current;
    if (!(r instanceof Element))
        return {
            target: t,
            transitionEnd: n
        };
    n && (n = {
        ...n
    }),
    e.values.forEach(i=>{
        let o = i.get();
        if (!Gs(o))
            return;
        let a = af(o, r);
        a && i.set(a)
    }
    );
    for (let i in t) {
        let o = t[i];
        if (!Gs(o))
            continue;
        let a = af(o, r);
        a && (t[i] = a,
        n || (n = {}),
        n[i] === void 0 && (n[i] = o))
    }
    return {
        target: t,
        transitionEnd: n
    }
}
var NR = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"])
  , yy = e=>NR.has(e)
  , $R = e=>Object.keys(e).some(yy)
  , zs = e=>e === zi || e === j
  , Lv = (e,t)=>parseFloat(e.split(", ")[t])
  , Mv = (e,t)=>(n,{transform: r})=>{
    if (r === "none" || !r)
        return 0;
    let i = r.match(/^matrix3d\((.+)\)$/u);
    if (i)
        return Lv(i[1], t);
    {
        let o = r.match(/^matrix\((.+)\)$/u);
        return o ? Lv(o[1], e) : 0
    }
}
  , jR = new Set(["x", "y", "z"])
  , WR = ea.filter(e=>!jR.has(e));
function UR(e) {
    let t = [];
    return WR.forEach(n=>{
        let r = e.getValue(n);
        r !== void 0 && (t.push([n, r.get()]),
        r.set(n.startsWith("scale") ? 1 : 0))
    }
    ),
    t.length && e.render(),
    t
}
var Ai = {
    width: ({x: e},{paddingLeft: t="0", paddingRight: n="0"})=>e.max - e.min - parseFloat(t) - parseFloat(n),
    height: ({y: e},{paddingTop: t="0", paddingBottom: n="0"})=>e.max - e.min - parseFloat(t) - parseFloat(n),
    top: (e,{top: t})=>parseFloat(t),
    left: (e,{left: t})=>parseFloat(t),
    bottom: ({y: e},{top: t})=>parseFloat(t) + (e.max - e.min),
    right: ({x: e},{left: t})=>parseFloat(t) + (e.max - e.min),
    x: Mv(4, 13),
    y: Mv(5, 14)
};
Ai.translateX = Ai.x;
Ai.translateY = Ai.y;
var XR = (e,t,n)=>{
    let r = t.measureViewportBox()
      , i = t.current
      , o = getComputedStyle(i)
      , {display: a} = o
      , s = {};
    a === "none" && t.setStaticValue("display", e.display || "block"),
    n.forEach(c=>{
        s[c] = Ai[c](r, o)
    }
    ),
    t.render();
    let l = t.measureViewportBox();
    return n.forEach(c=>{
        let u = t.getValue(c);
        u && u.jump(s[c]),
        e[c] = Ai[c](l, o)
    }
    ),
    e
}
  , YR = (e,t,n={},r={})=>{
    t = {
        ...t
    },
    r = {
        ...r
    };
    let i = Object.keys(t).filter(yy)
      , o = []
      , a = !1
      , s = [];
    if (i.forEach(l=>{
        let c = e.getValue(l);
        if (!e.hasValue(l))
            return;
        let u = n[l], f = Vo(u), d = t[l], h;
        if (Xs(d)) {
            let g = d.length
              , y = d[0] === null ? 1 : 0;
            u = d[y],
            f = Vo(u);
            for (let S = y; S < g && d[S] !== null; S++)
                h ? it(Vo(d[S]) === h, "All keyframes must be of the same type") : (h = Vo(d[S]),
                it(h === f || zs(f) && zs(h), "Keyframes must be of the same dimension as the current value"))
        } else
            h = Vo(d);
        if (f !== h)
            if (zs(f) && zs(h)) {
                let g = c.get();
                typeof g == "string" && c.set(parseFloat(g)),
                typeof d == "string" ? t[l] = parseFloat(d) : Array.isArray(d) && h === j && (t[l] = d.map(parseFloat))
            } else
                f?.transform && h?.transform && (u === 0 || d === 0) ? u === 0 ? c.set(h.transform(u)) : t[l] = f.transform(d) : (a || (o = UR(e),
                a = !0),
                s.push(l),
                r[l] = r[l] !== void 0 ? r[l] : t[l],
                c.jump(d))
    }
    ),
    s.length) {
        let l = s.indexOf("height") >= 0 ? _.pageYOffset : null
          , c = XR(t, e, s);
        return o.length && o.forEach(([u,f])=>{
            e.getValue(u).set(f)
        }
        ),
        e.render(),
        Jo && l !== null && _.scrollTo({
            top: l
        }),
        {
            target: c,
            transitionEnd: r
        }
    } else
        return {
            target: t,
            transitionEnd: r
        }
}
;
function GR(e, t, n, r) {
    return $R(t) ? YR(e, t, n, r) : {
        target: t,
        transitionEnd: r
    }
}
var KR = (e,t,n,r)=>{
    let i = HR(e, t, r);
    return t = i.target,
    r = i.transitionEnd,
    GR(e, t, n, r)
}
  , by = class extends jg {
    sortInstanceNodePosition(e, t) {
        return e.compareDocumentPosition(t) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(e, t) {
        return e.style ? e.style[t] : void 0
    }
    removeValueFromRenderState(e, {vars: t, style: n}) {
        delete t[e],
        delete n[e]
    }
    makeTargetAnimatableFromInstance({transition: e, transitionEnd: t, ...n}, r) {
        let i = VT(n, e || {}, this);
        if (r) {
            Fg(this, n, i);
            let o = KR(this, n, i, t);
            t = o.transitionEnd,
            n = o.target
        }
        return {
            transition: e,
            transitionEnd: t,
            ...n
        }
    }
}
;
function qR(e) {
    return _.getComputedStyle(e)
}
var xy = class extends by {
    constructor() {
        super(...arguments),
        this.type = "html"
    }
    readValueFromInstance(e, t) {
        if (ni.has(t)) {
            let n = _f(t);
            return n && n.default || 0
        } else {
            let n = qR(e)
              , r = (bg(t) ? n.getPropertyValue(t) : n[t]) || 0;
            return typeof r == "string" ? r.trim() : r
        }
    }
    measureInstanceViewportBox(e, {transformPagePoint: t}) {
        return ay(e, t)
    }
    build(e, t, n, r) {
        Nf(e, t, n, r.transformTemplate)
    }
    scrapeMotionValuesFromProps(e, t, n) {
        return Uf(e, t, n)
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(),
        delete this.childSubscription);
        let {children: e} = this.props;
        Fe(e) && (this.childSubscription = e.on("change", t=>{
            this.current && (this.current.textContent = `${t}`)
        }
        ))
    }
    renderInstance(e, t, n, r) {
        Gg(e, t, n, r)
    }
}
  , Sy = class extends by {
    constructor() {
        super(...arguments),
        this.type = "svg",
        this.isSVGTag = !1
    }
    getBaseTargetFromProps(e, t) {
        return e[t]
    }
    readValueFromInstance(e, t) {
        if (ni.has(t)) {
            let n = _f(t);
            return n && n.default || 0
        }
        return t = Kg.has(t) ? t : uf(t),
        e.getAttribute(t)
    }
    measureInstanceViewportBox() {
        return Pe()
    }
    scrapeMotionValuesFromProps(e, t) {
        return Qg(e, t, this)
    }
    build(e, t, n, r) {
        jf(e, t, n, this.isSVGTag, r.transformTemplate)
    }
    renderInstance(e, t, n, r) {
        qg(e, t, n, r)
    }
    mount(e) {
        this.isSVGTag = Wf(e.tagName),
        super.mount(e)
    }
}
  , wy = (e,t)=>Hf(e) ? new Sy(t,{
    enableHardwareAcceleration: !1
}) : new xy(t,{
    enableHardwareAcceleration: !0,
    allowProjection: e !== b.Fragment
})
  , Cy = {
    layout: {
        ProjectionNode: vy,
        MeasureLayout: ly
    }
}
  , QR = {
    ...Vf,
    ...ey,
    ...gy,
    ...Cy
}
  , Rt = Wg((e,t)=>Zg(e, t, QR, wy));
var ZR = Wg(Zg);
function ky() {
    let e = O(!1);
    return hr(()=>(e.current = !0,
    ()=>{
        e.current = !1
    }
    ), []),
    e
}
function dl() {
    let e = ky()
      , [t,n] = kt(0)
      , r = ue(()=>{
        e.current && n(t + 1)
    }
    , [t]);
    return [ue(()=>J.postRender(r), [r]), t]
}
function Ty(e) {
    return $(()=>()=>e(), [])
}
var JR = class extends xe {
    getSnapshotBeforeUpdate(e) {
        let t = this.props.childRef.current;
        if (t && e.isPresent && !this.props.isPresent) {
            let n = this.props.sizeRef.current;
            n.height = t.offsetHeight || 0,
            n.width = t.offsetWidth || 0,
            n.top = t.offsetTop,
            n.left = t.offsetLeft
        }
        return null
    }
    componentDidUpdate() {}
    render() {
        return this.props.children
    }
}
;
function eP({children: e, isPresent: t}) {
    let n = Yr()
      , r = O(null)
      , i = O({
        width: 0,
        height: 0,
        top: 0,
        left: 0
    })
      , {nonce: o} = M(kn);
    return Ct(()=>{
        let {width: a, height: s, top: l, left: c} = i.current;
        if (t || !r.current || !a || !s)
            return;
        r.current.dataset.motionPopId = n;
        let u = document.createElement("style");
        return o && (u.nonce = o),
        document.head.appendChild(u),
        u.sheet && u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${a}px !important;
            height: ${s}px !important;
            top: ${l}px !important;
            left: ${c}px !important;
          }
        `),
        ()=>{
            document.head.removeChild(u)
        }
    }
    , [t]),
    ce(JR, {
        isPresent: t,
        childRef: r,
        sizeRef: i
    }, an(e, {
        ref: r
    }))
}
var $u = ({children: e, initial: t, isPresent: n, onExitComplete: r, custom: i, presenceAffectsLayout: o, mode: a})=>{
    let s = Yn(tP)
      , l = Yr()
      , c = he(()=>({
        id: l,
        initial: t,
        isPresent: n,
        custom: i,
        onExitComplete: u=>{
            s.set(u, !0);
            for (let f of s.values())
                if (!f)
                    return;
            r && r()
        }
        ,
        register: u=>(s.set(u, !1),
        ()=>s.delete(u))
    }), o ? void 0 : [n]);
    return he(()=>{
        s.forEach((u,f)=>s.set(f, !1))
    }
    , [n]),
    $(()=>{
        !n && !s.size && r && r()
    }
    , [n]),
    a === "popLayout" && (e = ce(eP, {
        isPresent: n
    }, e)),
    ce(Vi.Provider, {
        value: c
    }, e)
}
;
function tP() {
    return new Map
}
var Qr = e=>e.key || "";
function nP(e, t) {
    e.forEach(n=>{
        let r = Qr(n);
        t.set(r, n)
    }
    )
}
function rP(e) {
    let t = [];
    return yn.forEach(e, n=>{
        bn(n) && t.push(n)
    }
    ),
    t
}
var Yf = ({children: e, custom: t, initial: n=!0, onExitComplete: r, exitBeforeEnter: i, presenceAffectsLayout: o=!0, mode: a="sync"})=>{
    it(!i, "Replace exitBeforeEnter with mode='wait'");
    let s = M(Go).forceRender || dl()[0]
      , l = ky()
      , c = rP(e)
      , u = c
      , f = O(new Map).current
      , d = O(u)
      , h = O(new Map).current
      , g = O(!0);
    if (hr(()=>{
        g.current = !1,
        nP(c, h),
        d.current = u
    }
    ),
    Ty(()=>{
        g.current = !0,
        h.clear(),
        f.clear()
    }
    ),
    g.current)
        return ce(Ii, null, u.map(p=>ce($u, {
            key: Qr(p),
            isPresent: !0,
            initial: n ? void 0 : !1,
            presenceAffectsLayout: o,
            mode: a
        }, p)));
    u = [...u];
    let y = d.current.map(Qr)
      , S = c.map(Qr)
      , m = y.length;
    for (let p = 0; p < m; p++) {
        let v = y[p];
        S.indexOf(v) === -1 && !f.has(v) && f.set(v, void 0)
    }
    return a === "wait" && f.size && (u = []),
    f.forEach((p,v)=>{
        if (S.indexOf(v) !== -1)
            return;
        let x = h.get(v);
        if (!x)
            return;
        let C = y.indexOf(v)
          , w = p;
        if (!w) {
            let k = ()=>{
                f.delete(v);
                let E = Array.from(h.keys()).filter(I=>!S.includes(I));
                if (E.forEach(I=>h.delete(I)),
                d.current = c.filter(I=>{
                    let P = Qr(I);
                    return P === v || E.includes(P)
                }
                ),
                !f.size) {
                    if (l.current === !1)
                        return;
                    s(),
                    r && r()
                }
            }
            ;
            w = ce($u, {
                key: Qr(x),
                isPresent: !1,
                onExitComplete: k,
                custom: t,
                presenceAffectsLayout: o,
                mode: a
            }, x),
            f.set(v, w)
        }
        u.splice(C, 0, w)
    }
    ),
    u = u.map(p=>{
        let v = p.key;
        return f.has(v) ? p : ce($u, {
            key: Qr(p),
            isPresent: !0,
            presenceAffectsLayout: o,
            mode: a
        }, p)
    }
    ),
    ce(Ii, null, f.size ? u : u.map(p=>an(p)))
}
;
function Ey({children: e, isValidProp: t, ...n}) {
    t && tg(t),
    n = {
        ...M(kn),
        ...n
    },
    n.isStatic = Yn(()=>n.isStatic);
    let r = he(()=>n, [JSON.stringify(n.transition), n.transformPagePoint, n.reducedMotion]);
    return ce(kn.Provider, {
        value: r
    }, e)
}
var Ry = Se(null)
  , iP = e=>!e.isLayoutDirty && e.willUpdate(!1);
function Ov() {
    let e = new Set
      , t = new WeakMap
      , n = ()=>e.forEach(iP);
    return {
        add: r=>{
            e.add(r),
            t.set(r, r.addEventListener("willUpdate", n))
        }
        ,
        remove: r=>{
            e.delete(r);
            let i = t.get(r);
            i && (i(),
            t.delete(r)),
            n()
        }
        ,
        dirty: n
    }
}
var Py = e=>e === !0
  , oP = e=>Py(e === !0) || e === "id"
  , Iy = ({children: e, id: t, inherit: n=!0})=>{
    let r = M(Go)
      , i = M(Ry)
      , [o,a] = dl()
      , s = O(null)
      , l = r.id || i;
    s.current === null && (oP(n) && l && (t = t ? l + "-" + t : l),
    s.current = {
        id: t,
        group: Py(n) && r.group || Ov()
    });
    let c = he(()=>({
        ...s.current,
        forceRender: o
    }), [a]);
    return ce(Go.Provider, {
        value: c
    }, e)
}
;
function Tn(e) {
    let t = Yn(()=>we(e))
      , {isStatic: n} = M(kn);
    if (n) {
        let[,r] = kt(e);
        $(()=>t.on("change", r), [])
    }
    return t
}
var aP = e=>e && typeof e == "object" && e.mix
  , sP = e=>aP(e) ? e.mix : void 0;
function oa(...e) {
    let t = !Array.isArray(e[0])
      , n = t ? 0 : -1
      , r = e[0 + n]
      , i = e[1 + n]
      , o = e[2 + n]
      , a = e[3 + n]
      , s = Hi(i, o, {
        mixer: sP(o[0]),
        ...a
    });
    return t ? s(r) : s
}
function Fy(e, t) {
    let n = Tn(t())
      , r = ()=>n.set(t());
    return r(),
    hr(()=>{
        let i = ()=>J.update(r, !1, !0)
          , o = e.map(a=>a.on("change", i));
        return ()=>{
            o.forEach(a=>a()),
            rt(r)
        }
    }
    ),
    n
}
function lP(e) {
    Wo.current = [],
    e();
    let t = Fy(Wo.current, e);
    return Wo.current = void 0,
    t
}
function ht(e, t, n, r) {
    if (typeof e == "function")
        return lP(e);
    let i = typeof t == "function" ? t : oa(t, n, r);
    return Array.isArray(e) ? Dv(e, i) : Dv([e], ([o])=>i(o))
}
function Dv(e, t) {
    let n = Yn(()=>[]);
    return Fy(e, ()=>{
        n.length = 0;
        let r = e.length;
        for (let i = 0; i < r; i++)
            n[i] = e[i].get();
        return t(n)
    }
    )
}
var _y = Se(null);
function cP(e, t, n, r) {
    if (!r)
        return e;
    let i = e.findIndex(u=>u.value === t);
    if (i === -1)
        return e;
    let o = r > 0 ? 1 : -1
      , a = e[i + o];
    if (!a)
        return e;
    let s = e[i]
      , l = a.layout
      , c = pe(l.min, l.max, .5);
    return o === 1 && s.layout.max + n > c || o === -1 && s.layout.min + n < c ? CT(e, i, i + o) : e
}
function uP({children: e, as: t="ul", axis: n="y", onReorder: r, values: i, ...o}, a) {
    let s = Yn(()=>Rt(t))
      , l = []
      , c = O(!1);
    it(!!i, "Reorder.Group must be provided a values prop");
    let u = {
        axis: n,
        registerItem: (f,d)=>{
            let h = l.findIndex(g=>f === g.value);
            h !== -1 ? l[h].layout = d[n] : l.push({
                value: f,
                layout: d[n]
            }),
            l.sort(dP)
        }
        ,
        updateOrder: (f,d,h)=>{
            if (c.current)
                return;
            let g = cP(l, f, d, h);
            l !== g && (c.current = !0,
            r(g.map(fP).filter(y=>i.indexOf(y) !== -1)))
        }
    };
    return $(()=>{
        c.current = !1
    }
    ),
    ce(s, {
        ...o,
        ref: a,
        ignoreStrict: !0
    }, ce(_y.Provider, {
        value: u
    }, e))
}
var VB = We(uP);
function fP(e) {
    return e.value
}
function dP(e, t) {
    return e.layout.min - t.layout.min
}
function Av(e, t=0) {
    return Fe(e) ? e : Tn(t)
}
function hP({children: e, style: t={}, value: n, as: r="li", onDrag: i, layout: o=!0, ...a}, s) {
    let l = Yn(()=>Rt(r))
      , c = M(_y)
      , u = {
        x: Av(t.x),
        y: Av(t.y)
    }
      , f = ht([u.x, u.y], ([y,S])=>y || S ? 1 : "unset");
    it(!!c, "Reorder.Item must be a child of Reorder.Group");
    let {axis: d, registerItem: h, updateOrder: g} = c;
    return ce(l, {
        drag: d,
        ...a,
        dragSnapToOrigin: !0,
        style: {
            ...t,
            x: u.x,
            y: u.y,
            zIndex: f
        },
        layout: o,
        onDrag: (y,S)=>{
            let {velocity: m} = S;
            m[d] && g(n, u[d].get(), m[d]),
            i && i(y, S)
        }
        ,
        onLayoutMeasure: y=>h(n, y),
        ref: s,
        ignoreStrict: !0
    }, e)
}
var zB = We(hP);
var Ly = {
    renderer: wy,
    ...Vf,
    ...ey
}
  , pP = {
    ...Ly,
    ...gy,
    ...Cy
};
function Gf(e, t={}) {
    let {isStatic: n} = M(kn)
      , r = O(null)
      , i = Tn(Fe(e) ? e.get() : e)
      , o = ()=>{
        r.current && r.current.stop()
    }
    ;
    return Ct(()=>i.attach((a,s)=>{
        if (n)
            return s(a);
        let l = r.current;
        return l && l.time === 0 && l.sample(Ie.delta),
        o(),
        r.current = ti({
            keyframes: [i.get(), a],
            velocity: i.getVelocity(),
            type: "spring",
            restDelta: .001,
            restSpeed: .01,
            ...t,
            onUpdate: s
        }),
        i.get()
    }
    , o), [JSON.stringify(t)]),
    hr(()=>{
        if (Fe(e))
            return e.on("change", a=>i.set(parseFloat(a)))
    }
    , [i]),
    i
}
function hl(e, t, n) {
    var r;
    if (typeof e == "string") {
        let i = document;
        t && (it(!!t.current, "Scope provided, but no element detected."),
        i = t.current),
        n ? ((r = n[e]) !== null && r !== void 0 || (n[e] = i.querySelectorAll(e)),
        e = n[e]) : e = i.querySelectorAll(e)
    } else
        e instanceof Element && (e = [e]);
    return Array.from(e || [])
}
var js = new WeakMap, ur;
function mP(e, t) {
    if (t) {
        let {inlineSize: n, blockSize: r} = t[0];
        return {
            width: n,
            height: r
        }
    } else
        return e instanceof SVGElement && "getBBox"in e ? e.getBBox() : {
            width: e.offsetWidth,
            height: e.offsetHeight
        }
}
function vP({target: e, contentRect: t, borderBoxSize: n}) {
    var r;
    (r = js.get(e)) === null || r === void 0 || r.forEach(i=>{
        i({
            target: e,
            contentSize: t,
            get size() {
                return mP(e, n)
            }
        })
    }
    )
}
function gP(e) {
    e.forEach(vP)
}
function yP() {
    typeof ResizeObserver > "u" || (ur = new ResizeObserver(gP))
}
function bP(e, t) {
    ur || yP();
    let n = hl(e);
    return n.forEach(r=>{
        let i = js.get(r);
        i || (i = new Set,
        js.set(r, i)),
        i.add(t),
        ur?.observe(r)
    }
    ),
    ()=>{
        n.forEach(r=>{
            let i = js.get(r);
            i?.delete(t),
            i?.size || ur?.unobserve(r)
        }
        )
    }
}
var Ws = new Set, Yo;
function xP() {
    Yo = ()=>{
        let e = {
            width: _.innerWidth,
            height: _.innerHeight
        }
          , t = {
            target: _,
            size: e,
            contentSize: e
        };
        Ws.forEach(n=>n(t))
    }
    ,
    _.addEventListener("resize", Yo)
}
function SP(e) {
    return Ws.add(e),
    Yo || xP(),
    ()=>{
        Ws.delete(e),
        !Ws.size && Yo && (Yo = void 0)
    }
}
function wP(e, t) {
    return typeof e == "function" ? SP(e) : bP(e, t)
}
var CP = 50
  , Vv = ()=>({
    current: 0,
    offset: [],
    progress: 0,
    scrollLength: 0,
    targetOffset: 0,
    targetLength: 0,
    containerLength: 0,
    velocity: 0
})
  , kP = ()=>({
    time: 0,
    x: Vv(),
    y: Vv()
})
  , TP = {
    x: {
        length: "Width",
        position: "Left"
    },
    y: {
        length: "Height",
        position: "Top"
    }
};
function Bv(e, t, n, r) {
    let i = n[t]
      , {length: o, position: a} = TP[t]
      , s = i.current
      , l = n.time;
    i.current = e["scroll" + a],
    i.scrollLength = e["scroll" + o] - e["client" + o],
    i.offset.length = 0,
    i.offset[0] = 0,
    i.offset[1] = i.scrollLength,
    i.progress = dr(0, i.scrollLength, i.current);
    let c = r - l;
    i.velocity = c > CP ? 0 : Rf(i.current - s, c)
}
function EP(e, t, n) {
    Bv(e, "x", t, n),
    Bv(e, "y", t, n),
    t.time = n
}
function RP(e, t) {
    let n = {
        x: 0,
        y: 0
    }
      , r = e;
    for (; r && r !== t; )
        if (r instanceof HTMLElement)
            n.x += r.offsetLeft,
            n.y += r.offsetTop,
            r = r.offsetParent;
        else if (r.tagName === "svg") {
            let i = r.getBoundingClientRect();
            r = r.parentElement;
            let o = r.getBoundingClientRect();
            n.x += i.left - o.left,
            n.y += i.top - o.top
        } else if (r instanceof SVGGraphicsElement) {
            let {x: i, y: o} = r.getBBox();
            n.x += i,
            n.y += o;
            let a = null
              , s = r.parentNode;
            for (; !a; )
                s.tagName === "svg" && (a = s),
                s = r.parentNode;
            r = a
        } else
            break;
    return n
}
var PP = {
    Enter: [[0, 1], [1, 1]],
    Exit: [[0, 0], [1, 0]],
    Any: [[1, 0], [0, 1]],
    All: [[0, 0], [1, 1]]
}
  , sf = {
    start: 0,
    center: .5,
    end: 1
};
function zv(e, t, n=0) {
    let r = 0;
    if (sf[e] !== void 0 && (e = sf[e]),
    typeof e == "string") {
        let i = parseFloat(e);
        e.endsWith("px") ? r = i : e.endsWith("%") ? e = i / 100 : e.endsWith("vw") ? r = i / 100 * document.documentElement.clientWidth : e.endsWith("vh") ? r = i / 100 * document.documentElement.clientHeight : e = i
    }
    return typeof e == "number" && (r = t * e),
    n + r
}
var IP = [0, 0];
function FP(e, t, n, r) {
    let i = Array.isArray(e) ? e : IP
      , o = 0
      , a = 0;
    return typeof e == "number" ? i = [e, e] : typeof e == "string" && (e = e.trim(),
    e.includes(" ") ? i = e.split(" ") : i = [e, sf[e] ? e : "0"]),
    o = zv(i[0], n, r),
    a = zv(i[1], t),
    o - a
}
var _P = {
    x: 0,
    y: 0
};
function LP(e) {
    return "getBBox"in e && e.tagName !== "svg" ? e.getBBox() : {
        width: e.clientWidth,
        height: e.clientHeight
    }
}
function MP(e, t, n) {
    let {offset: r=PP.All} = n
      , {target: i=e, axis: o="y"} = n
      , a = o === "y" ? "height" : "width"
      , s = i !== e ? RP(i, e) : _P
      , l = i === e ? {
        width: e.scrollWidth,
        height: e.scrollHeight
    } : LP(i)
      , c = {
        width: e.clientWidth,
        height: e.clientHeight
    };
    t[o].offset.length = 0;
    let u = !t[o].interpolate
      , f = r.length;
    for (let d = 0; d < f; d++) {
        let h = FP(r[d], c[a], l[a], s[o]);
        !u && h !== t[o].interpolatorOffsets[d] && (u = !0),
        t[o].offset[d] = h
    }
    u && (t[o].interpolate = Hi(t[o].offset, Pf(r)),
    t[o].interpolatorOffsets = [...t[o].offset]),
    t[o].progress = t[o].interpolate(t[o].current)
}
function OP(e, t=e, n) {
    if (n.x.targetOffset = 0,
    n.y.targetOffset = 0,
    t !== e) {
        let r = t;
        for (; r && r !== e; )
            n.x.targetOffset += r.offsetLeft,
            n.y.targetOffset += r.offsetTop,
            r = r.offsetParent
    }
    n.x.targetLength = t === e ? t.scrollWidth : t.clientWidth,
    n.y.targetLength = t === e ? t.scrollHeight : t.clientHeight,
    n.x.containerLength = e.clientWidth,
    n.y.containerLength = e.clientHeight
}
function DP(e, t, n, r={}) {
    return {
        measure: ()=>OP(e, r.target, n),
        update: i=>{
            EP(e, n, i),
            (r.offset || r.target) && MP(e, n, r)
        }
        ,
        notify: ()=>t(n)
    }
}
var zo = new WeakMap
  , Hv = new WeakMap
  , ju = new WeakMap
  , Nv = e=>e === document.documentElement ? _ : e;
function Ni(e, {container: t=document.documentElement, ...n}={}) {
    let r = ju.get(t);
    r || (r = new Set,
    ju.set(t, r));
    let i = kP()
      , o = DP(t, e, i, n);
    if (r.add(o),
    !zo.has(t)) {
        let s = ()=>{
            for (let d of r)
                d.measure()
        }
          , l = ()=>{
            for (let d of r)
                d.update(Ie.timestamp)
        }
          , c = ()=>{
            for (let d of r)
                d.notify()
        }
          , u = ()=>{
            J.read(s, !1, !0),
            J.read(l, !1, !0),
            J.update(c, !1, !0)
        }
        ;
        zo.set(t, u);
        let f = Nv(t);
        _.addEventListener("resize", u, {
            passive: !0
        }),
        t !== document.documentElement && Hv.set(t, wP(t, u)),
        f.addEventListener("scroll", u, {
            passive: !0
        })
    }
    let a = zo.get(t);
    return J.read(a, !1, !0),
    ()=>{
        var s;
        rt(a);
        let l = ju.get(t);
        if (!l || (l.delete(o),
        l.size))
            return;
        let c = zo.get(t);
        zo.delete(t),
        c && (Nv(t).removeEventListener("scroll", c),
        (s = Hv.get(t)) === null || s === void 0 || s(),
        _.removeEventListener("resize", c))
    }
}
function $v(e, t) {
    ra(!!(!t || t.current), `You have defined a ${e} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`)
}
var AP = ()=>({
    scrollX: we(0),
    scrollY: we(0),
    scrollXProgress: we(0),
    scrollYProgress: we(0)
});
function My({container: e, target: t, layoutEffect: n=!0, ...r}={}) {
    let i = Yn(AP);
    return (n ? hr : $)(()=>($v("target", t),
    $v("container", e),
    Ni(({x: a, y: s})=>{
        i.scrollX.set(a.current),
        i.scrollXProgress.set(a.progress),
        i.scrollY.set(s.current),
        i.scrollYProgress.set(s.progress)
    }
    , {
        ...r,
        container: e?.current || void 0,
        target: t?.current || void 0
    })), [e, t, JSON.stringify(r.offset)]),
    i
}
function VP(e) {
    let t = O(0)
      , {isStatic: n} = M(kn);
    $(()=>{
        if (n)
            return;
        let r = ({timestamp: i, delta: o})=>{
            t.current || (t.current = i),
            e(i - t.current, o)
        }
        ;
        return J.update(r, !0),
        ()=>rt(r)
    }
    , [e])
}
function Oy() {
    !zf.current && Hg();
    let[e] = kt(Zs.current);
    return e
}
function ri() {
    let e = Oy()
      , {reducedMotion: t} = M(kn);
    return t === "never" ? !1 : t === "always" ? !0 : e
}
function BP(e) {
    e.values.forEach(t=>t.stop())
}
function Dy() {
    let e = !1
      , t = new Set
      , n = {
        subscribe(r) {
            return t.add(r),
            ()=>void t.delete(r)
        },
        start(r, i) {
            it(e, "controls.start() should only be called after a component has mounted. Consider calling within a useEffect hook.");
            let o = [];
            return t.forEach(a=>{
                o.push(Af(a, r, {
                    transitionOverride: i
                }))
            }
            ),
            Promise.all(o)
        },
        set(r) {
            return it(e, "controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."),
            t.forEach(i=>{
                DT(i, r)
            }
            )
        },
        stop() {
            t.forEach(r=>{
                BP(r)
            }
            )
        },
        mount() {
            return e = !0,
            ()=>{
                e = !1,
                n.stop()
            }
        }
    };
    return n
}
var Ay = (e,t,n)=>{
    let r = t - e;
    return ((n - e) % r + r) % r + e
}
;
function zP(e, t) {
    let n, r = ()=>{
        let {currentTime: i} = t
          , a = (i === null ? 0 : i.value) / 100;
        n !== a && e(a),
        n = a
    }
    ;
    return J.update(r, !0),
    ()=>rt(r)
}
var HP = Dg(()=>_.ScrollTimeline !== void 0)
  , Vy = class {
    constructor(e) {
        this.animations = e.filter(Boolean)
    }
    then(e, t) {
        return Promise.all(this.animations).then(e).catch(t)
    }
    getAll(e) {
        return this.animations[0][e]
    }
    setAll(e, t) {
        for (let n = 0; n < this.animations.length; n++)
            this.animations[n][e] = t
    }
    attachTimeline(e) {
        let t = this.animations.map(n=>{
            if (HP() && n.attachTimeline)
                n.attachTimeline(e);
            else
                return n.pause(),
                zP(r=>{
                    n.time = n.duration * r
                }
                , e)
        }
        );
        return ()=>{
            t.forEach((n,r)=>{
                n && n(),
                this.animations[r].stop()
            }
            )
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
    get duration() {
        let e = 0;
        for (let t = 0; t < this.animations.length; t++)
            e = Math.max(e, this.animations[t].duration);
        return e
    }
    runAll(e) {
        this.animations.forEach(t=>t[e]())
    }
    play() {
        this.runAll("play")
    }
    pause() {
        this.runAll("pause")
    }
    stop() {
        this.runAll("stop")
    }
    cancel() {
        this.runAll("cancel")
    }
    complete() {
        this.runAll("complete")
    }
}
;
function NP(e) {
    return typeof e == "object" && !Array.isArray(e)
}
function $P(e) {
    let t = {
        presenceContext: null,
        props: {},
        visualState: {
            renderState: {
                transform: {},
                transformOrigin: {},
                style: {},
                vars: {},
                attrs: {}
            },
            latestValues: {}
        }
    }
      , n = hy(e) ? new Sy(t,{
        enableHardwareAcceleration: !1
    }) : new xy(t,{
        enableHardwareAcceleration: !0
    });
    n.mount(e),
    Xn.set(e, n)
}
function jP(e, t=100) {
    let n = ia({
        keyframes: [0, t],
        ...e
    })
      , r = Math.min(Gu(n), Yu);
    return {
        type: "keyframes",
        ease: i=>n.next(r * i).value / t,
        duration: Cn(r)
    }
}
function jv(e, t, n, r) {
    var i;
    return typeof t == "number" ? t : t.startsWith("-") || t.startsWith("+") ? Math.max(0, e + parseFloat(t)) : t === "<" ? n : (i = r.get(t)) !== null && i !== void 0 ? i : e
}
function WP(e, t) {
    return wg(e) ? e[Ay(0, e.length, t)] : e
}
function UP(e, t, n) {
    for (let r = 0; r < e.length; r++) {
        let i = e[r];
        i.at > t && i.at < n && (cl(e, i),
        r--)
    }
}
function XP(e, t, n, r, i, o) {
    UP(e, i, o);
    for (let a = 0; a < t.length; a++)
        e.push({
            value: t[a],
            at: pe(i, o, r[a]),
            easing: WP(n, a)
        })
}
function YP(e, t) {
    return e.at === t.at ? e.value === null ? 1 : t.value === null ? -1 : 0 : e.at - t.at
}
var GP = "easeInOut";
function KP(e, {defaultTransition: t={}, ...n}={}, r) {
    let i = t.duration || .3
      , o = new Map
      , a = new Map
      , s = {}
      , l = new Map
      , c = 0
      , u = 0
      , f = 0;
    for (let d = 0; d < e.length; d++) {
        let h = e[d];
        if (typeof h == "string") {
            l.set(h, u);
            continue
        } else if (!Array.isArray(h)) {
            l.set(h.name, jv(u, h.at, c, l));
            continue
        }
        let[g,y,S={}] = h;
        S.at !== void 0 && (u = jv(u, S.at, c, l));
        let m = 0
          , p = (v,x,C,w=0,k=0)=>{
            let E = qP(v)
              , {delay: I=0, times: P=Pf(E), type: z="keyframes", ...L} = x
              , {ease: ee=t.ease || "easeOut", duration: H} = x
              , te = typeof I == "function" ? I(w, k) : I
              , G = E.length;
            if (G <= 2 && z === "spring") {
                let q = 100;
                if (G === 2 && JP(E)) {
                    let K = E[1] - E[0];
                    q = Math.abs(K)
                }
                let B = {
                    ...L
                };
                H !== void 0 && (B.duration = jn(H));
                let Y = jP(B, q);
                ee = Y.ease,
                H = Y.duration
            }
            H ?? (H = i);
            let V = u + te
              , W = V + H;
            P.length === 1 && P[0] === 0 && (P[1] = 1);
            let A = P.length - E.length;
            A > 0 && Cg(P, A),
            E.length === 1 && E.unshift(null),
            XP(C, E, ee, P, V, W),
            m = Math.max(te + H, m),
            f = Math.max(W, f)
        }
        ;
        if (Fe(g)) {
            let v = Wv(g, a);
            p(y, S, Uv("default", v))
        } else {
            let v = hl(g, r, s)
              , x = v.length;
            for (let C = 0; C < x; C++) {
                y = y,
                S = S;
                let w = v[C]
                  , k = Wv(w, a);
                for (let E in y)
                    p(y[E], QP(S, E), Uv(E, k), C, x)
            }
        }
        c = u,
        u += m
    }
    return a.forEach((d,h)=>{
        for (let g in d) {
            let y = d[g];
            y.sort(YP);
            let S = []
              , m = []
              , p = [];
            for (let x = 0; x < y.length; x++) {
                let {at: C, value: w, easing: k} = y[x];
                S.push(w),
                m.push(dr(0, f, C)),
                p.push(k || "easeOut")
            }
            m[0] !== 0 && (m.unshift(0),
            S.unshift(S[0]),
            p.unshift(GP)),
            m[m.length - 1] !== 1 && (m.push(1),
            S.push(null)),
            o.has(h) || o.set(h, {
                keyframes: {},
                transition: {}
            });
            let v = o.get(h);
            v.keyframes[g] = S,
            v.transition[g] = {
                ...t,
                duration: f,
                ease: p,
                times: m,
                ...n
            }
        }
    }
    ),
    o
}
function Wv(e, t) {
    return !t.has(e) && t.set(e, {}),
    t.get(e)
}
function Uv(e, t) {
    return t[e] || (t[e] = []),
    t[e]
}
function qP(e) {
    return Array.isArray(e) ? e : [e]
}
function QP(e, t) {
    return e[t] ? {
        ...e,
        ...e[t]
    } : {
        ...e
    }
}
var ZP = e=>typeof e == "number"
  , JP = e=>e.every(ZP);
function By(e, t, n, r) {
    let i = hl(e, r)
      , o = i.length;
    it(!!o, "No valid element provided.");
    let a = [];
    for (let s = 0; s < o; s++) {
        let l = i[s];
        Xn.has(l) || $P(l);
        let c = Xn.get(l)
          , u = {
            ...n
        };
        typeof u.delay == "function" && (u.delay = u.delay(s, o)),
        a.push(...Df(c, {
            ...t,
            transition: u
        }, {}))
    }
    return new Vy(a)
}
var eI = e=>Array.isArray(e) && Array.isArray(e[0]);
function tI(e, t, n) {
    let r = [];
    return KP(e, t, n).forEach(({keyframes: o, transition: a},s)=>{
        let l;
        Fe(s) ? l = Xf(s, o.default, a.default) : l = By(s, o, a),
        r.push(l)
    }
    ),
    new Vy(r)
}
var zy = e=>{
    function t(n, r, i) {
        let o;
        return eI(n) ? o = tI(n, r, e) : NP(r) ? o = By(n, r, i, e) : o = Xf(n, r, i),
        e && e.animations.push(o),
        o
    }
    return t
}
  , $i = zy();
function Hy() {
    let e = Yn(Dy);
    return hr(e.mount, []),
    e
}
var Ny = Hy;
var nI = {
    some: 0,
    all: 1
};
function $y(e, t, {root: n, margin: r, amount: i="some"}={}) {
    let o = hl(e)
      , a = new WeakMap
      , s = c=>{
        c.forEach(u=>{
            let f = a.get(u.target);
            if (u.isIntersecting !== !!f)
                if (u.isIntersecting) {
                    let d = t(u);
                    typeof d == "function" ? a.set(u.target, d) : l.unobserve(u.target)
                } else
                    f && (f(u),
                    a.delete(u.target))
        }
        )
    }
      , l = new IntersectionObserver(s,{
        root: n,
        rootMargin: r,
        threshold: typeof i == "number" ? i : nI[i]
    });
    return o.forEach(c=>l.observe(c)),
    ()=>l.disconnect()
}
function rI(e, {root: t, margin: n, amount: r, once: i=!1}={}) {
    let[o,a] = kt(!1);
    return $(()=>{
        if (!e.current || i && o)
            return;
        let s = ()=>(a(!0),
        i ? void 0 : ()=>a(!1))
          , l = {
            root: t && t.current || void 0,
            margin: n,
            amount: r
        };
        return $y(e.current, s, l)
    }
    , [t, e, n, i, r]),
    o
}
function Kf(e) {
    return e !== null && typeof e == "object" && pf in e
}
function jy(e) {
    if (Kf(e))
        return e[pf]
}
function qf() {
    return iI
}
function iI(e) {
    ei.current && (ei.current.isUpdating = !1,
    ei.current.blockUpdate(),
    e && e())
}
function Wy() {
    let[e,t] = dl()
      , n = qf()
      , r = O();
    return $(()=>{
        J.postRender(()=>J.postRender(()=>{
            t === r.current && (qs.current = !1)
        }
        ))
    }
    , [t]),
    i=>{
        n(()=>{
            qs.current = !0,
            e(),
            i(),
            r.current = t + 1
        }
        )
    }
}
function Uy() {
    return ue(()=>{
        let t = ei.current;
        t && t.resetTree()
    }
    , [])
}
var Xv = ()=>({});
var QB = ol({
    scrapeMotionValuesFromProps: Xv,
    createRenderState: Xv
});
var oI = Ho.reduce((e,t)=>(e[t] = n=>rt(n),
e), {});
var aI = "default"in Re ? b : Re
  , ji = {}
  , sI = aI
  , lI = Symbol.for("react.element")
  , cI = Symbol.for("react.fragment")
  , uI = Object.prototype.hasOwnProperty
  , fI = sI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , dI = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Xy(e, t, n) {
    var r, i = {}, o = null, a = null;
    n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (a = t.ref);
    for (r in t)
        uI.call(t, r) && !dI.hasOwnProperty(r) && (i[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
        t)
            i[r] === void 0 && (i[r] = t[r]);
    return {
        $$typeof: lI,
        type: e,
        key: o,
        ref: a,
        props: i,
        _owner: fI.current
    }
}
ji.Fragment = cI;
ji.jsx = Xy;
ji.jsxs = Xy;
var Ne = ji.Fragment
  , T = ji.jsx
  , ae = ji.jsxs;
var Y_ = {};
Tu(Y_, {
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ()=>D_,
    createPortal: ()=>A_,
    createRoot: ()=>V_,
    default: ()=>c1,
    findDOMNode: ()=>B_,
    flushSync: ()=>z_,
    hydrate: ()=>H_,
    hydrateRoot: ()=>N_,
    render: ()=>$_,
    unmountComponentAtNode: ()=>j_,
    unstable_batchedUpdates: ()=>W_,
    unstable_renderSubtreeIntoContainer: ()=>U_,
    version: ()=>X_
});
var bl = {};
Tu(bl, {
    default: ()=>X,
    unstable_IdlePriority: ()=>mI,
    unstable_ImmediatePriority: ()=>vI,
    unstable_LowPriority: ()=>gI,
    unstable_NormalPriority: ()=>yI,
    unstable_Profiling: ()=>bI,
    unstable_UserBlockingPriority: ()=>xI,
    unstable_cancelCallback: ()=>SI,
    unstable_continueExecution: ()=>wI,
    unstable_forceFrameRate: ()=>CI,
    unstable_getCurrentPriorityLevel: ()=>kI,
    unstable_getFirstCallbackNode: ()=>TI,
    unstable_next: ()=>EI,
    unstable_now: ()=>pI,
    unstable_pauseExecution: ()=>RI,
    unstable_requestPaint: ()=>PI,
    unstable_runWithPriority: ()=>II,
    unstable_scheduleCallback: ()=>FI,
    unstable_shouldYield: ()=>_I,
    unstable_wrapCallback: ()=>LI
});
var X = {};
function ed(e, t) {
    var n = e.length;
    e.push(t);
    e: for (; 0 < n; ) {
        var r = n - 1 >>> 1
          , i = e[r];
        if (!(0 < pl(i, t)))
            break e;
        e[r] = t,
        e[n] = i,
        n = r
    }
}
function ln(e) {
    return e.length === 0 ? null : e[0]
}
function vl(e) {
    if (e.length === 0)
        return null;
    var t = e[0]
      , n = e.pop();
    if (n !== t) {
        e[0] = n;
        e: for (var r = 0, i = e.length, o = i >>> 1; r < o; ) {
            var a = 2 * (r + 1) - 1
              , s = e[a]
              , l = a + 1
              , c = e[l];
            if (0 > pl(s, n))
                l < i && 0 > pl(c, s) ? (e[r] = c,
                e[l] = n,
                r = l) : (e[r] = s,
                e[a] = n,
                r = a);
            else {
                if (!(l < i && 0 > pl(c, n)))
                    break e;
                e[r] = c,
                e[l] = n,
                r = l
            }
        }
    }
    return t
}
function pl(e, t) {
    var n = e.sortIndex - t.sortIndex;
    return n !== 0 ? n : e.id - t.id
}
typeof performance == "object" && typeof performance.now == "function" ? (Yy = performance,
X.unstable_now = function() {
    return Yy.now()
}
) : (Qf = Date,
Gy = Qf.now(),
X.unstable_now = function() {
    return Qf.now() - Gy
}
);
var Yy, Qf, Gy, En = [], mr = [], hI = 1, Kt = null, ot = 3, gl = !1, ii = !1, sa = !1, Qy = typeof setTimeout == "function" ? setTimeout : null, Zy = typeof clearTimeout == "function" ? clearTimeout : null, Ky = typeof setImmediate < "u" ? setImmediate : null;
typeof Ke < "u" && Ke.scheduling !== void 0 && Ke.scheduling.isInputPending !== void 0 && Ke.scheduling.isInputPending.bind(Ke.scheduling);
function td(e) {
    for (var t = ln(mr); t !== null; ) {
        if (t.callback === null)
            vl(mr);
        else {
            if (!(t.startTime <= e))
                break;
            vl(mr),
            t.sortIndex = t.expirationTime,
            ed(En, t)
        }
        t = ln(mr)
    }
}
function nd(e) {
    if (sa = !1,
    td(e),
    !ii)
        if (ln(En) !== null)
            ii = !0,
            id(rd);
        else {
            var t = ln(mr);
            t !== null && od(nd, t.startTime - e)
        }
}
function rd(e, t) {
    ii = !1,
    sa && (sa = !1,
    Zy(la),
    la = -1),
    gl = !0;
    var n = ot;
    try {
        for (td(t),
        Kt = ln(En); Kt !== null && (!(Kt.expirationTime > t) || e && !t0()); ) {
            var r = Kt.callback;
            if (typeof r == "function") {
                Kt.callback = null,
                ot = Kt.priorityLevel;
                var i = r(Kt.expirationTime <= t);
                t = X.unstable_now(),
                typeof i == "function" ? Kt.callback = i : Kt === ln(En) && vl(En),
                td(t)
            } else
                vl(En);
            Kt = ln(En)
        }
        if (Kt !== null)
            var o = !0;
        else {
            var a = ln(mr);
            a !== null && od(nd, a.startTime - t),
            o = !1
        }
        return o
    } finally {
        Kt = null,
        ot = n,
        gl = !1
    }
}
var yl = !1
  , ml = null
  , la = -1
  , Jy = 5
  , e0 = -1;
function t0() {
    return !(X.unstable_now() - e0 < Jy)
}
function Zf() {
    if (ml !== null) {
        var e = X.unstable_now();
        e0 = e;
        var t = !0;
        try {
            t = ml(!0, e)
        } finally {
            t ? aa() : (yl = !1,
            ml = null)
        }
    } else
        yl = !1
}
var aa;
typeof Ky == "function" ? aa = function() {
    Ky(Zf)
}
: typeof MessageChannel < "u" ? (Jf = new MessageChannel,
qy = Jf.port2,
Jf.port1.onmessage = Zf,
aa = function() {
    qy.postMessage(null)
}
) : aa = function() {
    Qy(Zf, 0)
}
;
var Jf, qy;
function id(e) {
    ml = e,
    yl || (yl = !0,
    aa())
}
function od(e, t) {
    la = Qy(function() {
        e(X.unstable_now())
    }, t)
}
X.unstable_IdlePriority = 5;
X.unstable_ImmediatePriority = 1;
X.unstable_LowPriority = 4;
X.unstable_NormalPriority = 3;
X.unstable_Profiling = null;
X.unstable_UserBlockingPriority = 2;
X.unstable_cancelCallback = function(e) {
    e.callback = null
}
;
X.unstable_continueExecution = function() {
    ii || gl || (ii = !0,
    id(rd))
}
;
X.unstable_forceFrameRate = function(e) {
    0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Jy = 0 < e ? Math.floor(1e3 / e) : 5
}
;
X.unstable_getCurrentPriorityLevel = function() {
    return ot
}
;
X.unstable_getFirstCallbackNode = function() {
    return ln(En)
}
;
X.unstable_next = function(e) {
    switch (ot) {
    case 1:
    case 2:
    case 3:
        var t = 3;
        break;
    default:
        t = ot
    }
    var n = ot;
    ot = t;
    try {
        return e()
    } finally {
        ot = n
    }
}
;
X.unstable_pauseExecution = function() {}
;
X.unstable_requestPaint = function() {}
;
X.unstable_runWithPriority = function(e, t) {
    switch (e) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        break;
    default:
        e = 3
    }
    var n = ot;
    ot = e;
    try {
        return t()
    } finally {
        ot = n
    }
}
;
X.unstable_scheduleCallback = function(e, t, n) {
    var r = X.unstable_now();
    switch (typeof n == "object" && n !== null ? (n = n.delay,
    n = typeof n == "number" && 0 < n ? r + n : r) : n = r,
    e) {
    case 1:
        var i = -1;
        break;
    case 2:
        i = 250;
        break;
    case 5:
        i = 1073741823;
        break;
    case 4:
        i = 1e4;
        break;
    default:
        i = 5e3
    }
    return i = n + i,
    e = {
        id: hI++,
        callback: t,
        priorityLevel: e,
        startTime: n,
        expirationTime: i,
        sortIndex: -1
    },
    n > r ? (e.sortIndex = n,
    ed(mr, e),
    ln(En) === null && e === ln(mr) && (sa ? (Zy(la),
    la = -1) : sa = !0,
    od(nd, n - r))) : (e.sortIndex = i,
    ed(En, e),
    ii || gl || (ii = !0,
    id(rd))),
    e
}
;
X.unstable_shouldYield = t0;
X.unstable_wrapCallback = function(e) {
    var t = ot;
    return function() {
        var n = ot;
        ot = t;
        try {
            return e.apply(this, arguments)
        } finally {
            ot = n
        }
    }
}
;
var pI = X.unstable_now
  , mI = X.unstable_IdlePriority
  , vI = X.unstable_ImmediatePriority
  , gI = X.unstable_LowPriority
  , yI = X.unstable_NormalPriority
  , bI = X.unstable_Profiling
  , xI = X.unstable_UserBlockingPriority
  , SI = X.unstable_cancelCallback
  , wI = X.unstable_continueExecution
  , CI = X.unstable_forceFrameRate
  , kI = X.unstable_getCurrentPriorityLevel
  , TI = X.unstable_getFirstCallbackNode
  , EI = X.unstable_next
  , RI = X.unstable_pauseExecution
  , PI = X.unstable_requestPaint
  , II = X.unstable_runWithPriority
  , FI = X.unstable_scheduleCallback
  , _I = X.unstable_shouldYield
  , LI = X.unstable_wrapCallback;
var MI = "default"in Re ? b : Re
  , OI = "default"in bl ? X : bl
  , Bt = {}
  , lb = MI
  , Vt = OI;
function F(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var cb = new Set
  , Fa = {};
function gi(e, t) {
    uo(e, t),
    uo(e + "Capture", t)
}
function uo(e, t) {
    for (Fa[e] = t,
    e = 0; e < t.length; e++)
        cb.add(t[e])
}
var Jn = !(typeof _ > "u" || typeof _.document > "u" || typeof _.document.createElement > "u")
  , Pd = Object.prototype.hasOwnProperty
  , DI = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , n0 = {}
  , r0 = {};
function AI(e) {
    return Pd.call(r0, e) ? !0 : Pd.call(n0, e) ? !1 : DI.test(e) ? r0[e] = !0 : (n0[e] = !0,
    !1)
}
function VI(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function BI(e, t, n, r) {
    if (t === null || typeof t > "u" || VI(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function vt(e, t, n, r, i, o, a) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = r,
    this.attributeNamespace = i,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = o,
    this.removeEmptyString = a
}
var Je = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    Je[e] = new vt(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    Je[t] = new vt(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    Je[e] = new vt(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    Je[e] = new vt(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    Je[e] = new vt(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    Je[e] = new vt(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    Je[e] = new vt(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    Je[e] = new vt(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    Je[e] = new vt(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var bh = /[\-:]([a-z])/g;
function xh(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(bh, xh);
    Je[t] = new vt(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(bh, xh);
    Je[t] = new vt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(bh, xh);
    Je[t] = new vt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    Je[e] = new vt(e,1,!1,e.toLowerCase(),null,!1,!1)
});
Je.xlinkHref = new vt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    Je[e] = new vt(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function Sh(e, t, n, r) {
    var i = Je.hasOwnProperty(t) ? Je[t] : null;
    (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (BI(t, n, i, r) && (n = null),
    r || i === null ? AI(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type !== 3 && "" : n : (t = i.attributeName,
    r = i.attributeNamespace,
    n === null ? e.removeAttribute(t) : (i = i.type,
    n = i === 3 || i === 4 && n === !0 ? "" : "" + n,
    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var rr = lb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , xl = Symbol.for("react.element")
  , Xi = Symbol.for("react.portal")
  , Yi = Symbol.for("react.fragment")
  , wh = Symbol.for("react.strict_mode")
  , Id = Symbol.for("react.profiler")
  , ub = Symbol.for("react.provider")
  , fb = Symbol.for("react.context")
  , Ch = Symbol.for("react.forward_ref")
  , Fd = Symbol.for("react.suspense")
  , _d = Symbol.for("react.suspense_list")
  , kh = Symbol.for("react.memo")
  , gr = Symbol.for("react.lazy");
Symbol.for("react.scope");
Symbol.for("react.debug_trace_mode");
var db = Symbol.for("react.offscreen");
Symbol.for("react.legacy_hidden");
Symbol.for("react.cache");
Symbol.for("react.tracing_marker");
var i0 = Symbol.iterator;
function ca(e) {
    return e === null || typeof e != "object" ? null : (e = i0 && e[i0] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var ad, Te = Object.assign;
function ga(e) {
    if (ad === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            ad = t && t[1] || ""
        }
    return `
` + ad + e
}
var sd = !1;
function ld(e, t) {
    if (!e || sd)
        return "";
    sd = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (c) {
                    var r = c
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (c) {
                    r = c
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (c) {
                r = c
            }
            e()
        }
    } catch (c) {
        if (c && r && typeof c.stack == "string") {
            for (var i = c.stack.split(`
`), o = r.stack.split(`
`), a = i.length - 1, s = o.length - 1; 1 <= a && 0 <= s && i[a] !== o[s]; )
                s--;
            for (; 1 <= a && 0 <= s; a--,
            s--)
                if (i[a] !== o[s]) {
                    if (a !== 1 || s !== 1)
                        do
                            if (a--,
                            s--,
                            0 > s || i[a] !== o[s]) {
                                var l = `
` + i[a].replace(" at new ", " at ");
                                return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)),
                                l
                            }
                        while (1 <= a && 0 <= s);
                    break
                }
        }
    } finally {
        sd = !1,
        Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? ga(e) : ""
}
function zI(e) {
    switch (e.tag) {
    case 5:
        return ga(e.type);
    case 16:
        return ga("Lazy");
    case 13:
        return ga("Suspense");
    case 19:
        return ga("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = ld(e.type, !1),
        e;
    case 11:
        return e = ld(e.type.render, !1),
        e;
    case 1:
        return e = ld(e.type, !0),
        e;
    default:
        return ""
    }
}
function Ld(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case Yi:
        return "Fragment";
    case Xi:
        return "Portal";
    case Id:
        return "Profiler";
    case wh:
        return "StrictMode";
    case Fd:
        return "Suspense";
    case _d:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case fb:
            return (e.displayName || "Context") + ".Consumer";
        case ub:
            return (e._context.displayName || "Context") + ".Provider";
        case Ch:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case kh:
            return t = e.displayName || null,
            t !== null ? t : Ld(e.type) || "Memo";
        case gr:
            t = e._payload,
            e = e._init;
            try {
                return Ld(e(t))
            } catch {}
        }
    return null
}
function HI(e) {
    var t = e.type;
    switch (e.tag) {
    case 24:
        return "Cache";
    case 9:
        return (t.displayName || "Context") + ".Consumer";
    case 10:
        return (t._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return t;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return Ld(t);
    case 8:
        return t === wh ? "StrictMode" : "Mode";
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
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function _r(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function hb(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function NI(e) {
    var t = hb(e) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var i = n.get
          , o = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return i.call(this)
            },
            set: function(a) {
                r = "" + a,
                o.call(this, a)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(a) {
                r = "" + a
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function Sl(e) {
    e._valueTracker || (e._valueTracker = NI(e))
}
function pb(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
      , r = "";
    return e && (r = hb(e) ? e.checked ? "true" : "false" : e.value),
    e = r,
    e !== n && (t.setValue(e),
    !0)
}
function Kl(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function Md(e, t) {
    var n = t.checked;
    return Te({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function o0(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
      , r = t.checked != null ? t.checked : t.defaultChecked;
    n = _r(t.value != null ? t.value : n),
    e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function mb(e, t) {
    t = t.checked,
    t != null && Sh(e, "checked", t, !1)
}
function Od(e, t) {
    mb(e, t);
    var n = _r(t.value)
      , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? Dd(e, t.type, n) : t.hasOwnProperty("defaultValue") && Dd(e, t.type, _r(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function a0(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        n || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    n = e.name,
    n !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    n !== "" && (e.name = n)
}
function Dd(e, t, n) {
    t === "number" && Kl(e.ownerDocument) === e || (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var ya = Array.isArray;
function io(e, t, n, r) {
    if (e = e.options,
    t) {
        t = {};
        for (var i = 0; i < n.length; i++)
            t["$" + n[i]] = !0;
        for (n = 0; n < e.length; n++)
            i = t.hasOwnProperty("$" + e[n].value),
            e[n].selected !== i && (e[n].selected = i),
            i && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + _r(n),
        t = null,
        i = 0; i < e.length; i++) {
            if (e[i].value === n) {
                e[i].selected = !0,
                r && (e[i].defaultSelected = !0);
                return
            }
            t !== null || e[i].disabled || (t = e[i])
        }
        t !== null && (t.selected = !0)
    }
}
function Ad(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(F(91));
    return Te({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function s0(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
        t = t.defaultValue,
        n != null) {
            if (t != null)
                throw Error(F(92));
            if (ya(n)) {
                if (1 < n.length)
                    throw Error(F(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
        n = t
    }
    e._wrapperState = {
        initialValue: _r(n)
    }
}
function vb(e, t) {
    var n = _r(t.value)
      , r = _r(t.defaultValue);
    n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r)
}
function l0(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function gb(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function Vd(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? gb(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var wl, yb = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, i)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (wl = wl || document.createElement("div"),
        wl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = wl.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function _a(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var Sa = {
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
}
  , $I = ["Webkit", "ms", "Moz", "O"];
Object.keys(Sa).forEach(function(e) {
    $I.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        Sa[t] = Sa[e]
    })
});
function bb(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Sa.hasOwnProperty(e) && Sa[e] ? ("" + t).trim() : t + "px"
}
function xb(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , i = bb(n, t[n], r);
            n === "float" && (n = "cssFloat"),
            r ? e.setProperty(n, i) : e[n] = i
        }
}
var jI = Te({
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
function Bd(e, t) {
    if (t) {
        if (jI[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(F(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(F(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(F(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(F(62))
    }
}
function zd(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
    switch (e) {
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
var Hd = null;
function Th(e) {
    return e = e.target || e.srcElement || _,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var Nd = null
  , oo = null
  , ao = null;
function c0(e) {
    if (e = Ka(e)) {
        if (typeof Nd != "function")
            throw Error(F(280));
        var t = e.stateNode;
        t && (t = Cc(t),
        Nd(e.stateNode, e.type, t))
    }
}
function Sb(e) {
    oo ? ao ? ao.push(e) : ao = [e] : oo = e
}
function wb() {
    if (oo) {
        var e = oo
          , t = ao;
        if (ao = oo = null,
        c0(e),
        t)
            for (e = 0; e < t.length; e++)
                c0(t[e])
    }
}
function Cb(e, t) {
    return e(t)
}
function kb() {}
var cd = !1;
function Tb(e, t, n) {
    if (cd)
        return e(t, n);
    cd = !0;
    try {
        return Cb(e, t, n)
    } finally {
        cd = !1,
        (oo !== null || ao !== null) && (kb(),
        wb())
    }
}
function La(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = Cc(n);
    if (r === null)
        return null;
    n = r[t];
    e: switch (t) {
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
        (r = !r.disabled) || (e = e.type,
        r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !r;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(F(231, t, typeof n));
    return n
}
var $d = !1;
if (Jn)
    try {
        Wi = {},
        Object.defineProperty(Wi, "passive", {
            get: function() {
                $d = !0
            }
        }),
        _.addEventListener("test", Wi, Wi),
        _.removeEventListener("test", Wi, Wi)
    } catch {
        $d = !1
    }
var Wi;
function WI(e, t, n, r, i, o, a, s, l) {
    var c = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, c)
    } catch (u) {
        this.onError(u)
    }
}
var wa = !1
  , ql = null
  , Ql = !1
  , jd = null
  , UI = {
    onError: function(e) {
        wa = !0,
        ql = e
    }
};
function XI(e, t, n, r, i, o, a, s, l) {
    wa = !1,
    ql = null,
    WI.apply(UI, arguments)
}
function YI(e, t, n, r, i, o, a, s, l) {
    if (XI.apply(this, arguments),
    wa) {
        if (!wa)
            throw Error(F(198));
        var c = ql;
        wa = !1,
        ql = null,
        Ql || (Ql = !0,
        jd = c)
    }
}
function yi(e) {
    var t = e
      , n = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            4098 & t.flags && (n = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function Eb(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function u0(e) {
    if (yi(e) !== e)
        throw Error(F(188))
}
function GI(e) {
    var t = e.alternate;
    if (!t) {
        if (t = yi(e),
        t === null)
            throw Error(F(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
        var i = n.return;
        if (i === null)
            break;
        var o = i.alternate;
        if (o === null) {
            if (r = i.return,
            r !== null) {
                n = r;
                continue
            }
            break
        }
        if (i.child === o.child) {
            for (o = i.child; o; ) {
                if (o === n)
                    return u0(i),
                    e;
                if (o === r)
                    return u0(i),
                    t;
                o = o.sibling
            }
            throw Error(F(188))
        }
        if (n.return !== r.return)
            n = i,
            r = o;
        else {
            for (var a = !1, s = i.child; s; ) {
                if (s === n) {
                    a = !0,
                    n = i,
                    r = o;
                    break
                }
                if (s === r) {
                    a = !0,
                    r = i,
                    n = o;
                    break
                }
                s = s.sibling
            }
            if (!a) {
                for (s = o.child; s; ) {
                    if (s === n) {
                        a = !0,
                        n = o,
                        r = i;
                        break
                    }
                    if (s === r) {
                        a = !0,
                        r = o,
                        n = i;
                        break
                    }
                    s = s.sibling
                }
                if (!a)
                    throw Error(F(189))
            }
        }
        if (n.alternate !== r)
            throw Error(F(190))
    }
    if (n.tag !== 3)
        throw Error(F(188));
    return n.stateNode.current === n ? e : t
}
function Rb(e) {
    return e = GI(e),
    e !== null ? Pb(e) : null
}
function Pb(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = Pb(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var Ib = Vt.unstable_scheduleCallback
  , f0 = Vt.unstable_cancelCallback
  , KI = Vt.unstable_shouldYield
  , qI = Vt.unstable_requestPaint
  , Ae = Vt.unstable_now
  , QI = Vt.unstable_getCurrentPriorityLevel
  , Eh = Vt.unstable_ImmediatePriority
  , Fb = Vt.unstable_UserBlockingPriority
  , Zl = Vt.unstable_NormalPriority
  , ZI = Vt.unstable_LowPriority
  , _b = Vt.unstable_IdlePriority
  , bc = null
  , Fn = null;
function JI(e) {
    if (Fn && typeof Fn.onCommitFiberRoot == "function")
        try {
            Fn.onCommitFiberRoot(bc, e, void 0, (128 & e.current.flags) === 128)
        } catch {}
}
var hn = Math.clz32 ? Math.clz32 : nF
  , eF = Math.log
  , tF = Math.LN2;
function nF(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (eF(e) / tF | 0) | 0
}
var Cl = 64
  , kl = 4194304;
function ba(e) {
    switch (e & -e) {
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
        return 4194240 & e;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return 130023424 & e;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return e
    }
}
function Jl(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , i = e.suspendedLanes
      , o = e.pingedLanes
      , a = 268435455 & n;
    if (a !== 0) {
        var s = a & ~i;
        s !== 0 ? r = ba(s) : (o &= a,
        o !== 0 && (r = ba(o)))
    } else
        a = n & ~i,
        a !== 0 ? r = ba(a) : o !== 0 && (r = ba(o));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && !(t & i) && (i = r & -r,
    o = t & -t,
    i >= o || i === 16 && (4194240 & o) !== 0))
        return t;
    if (4 & r && (r |= 16 & n),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= r; 0 < t; )
            n = 31 - hn(t),
            i = 1 << n,
            r |= e[n],
            t &= ~i;
    return r
}
function rF(e, t) {
    switch (e) {
    case 1:
    case 2:
    case 4:
        return t + 250;
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
        return t + 5e3;
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
function iF(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
        var a = 31 - hn(o)
          , s = 1 << a
          , l = i[a];
        l === -1 ? s & n && !(s & r) || (i[a] = rF(s, t)) : l <= t && (e.expiredLanes |= s),
        o &= ~s
    }
}
function Wd(e) {
    return e = -1073741825 & e.pendingLanes,
    e !== 0 ? e : 1073741824 & e ? 1073741824 : 0
}
function Lb() {
    var e = Cl;
    return Cl <<= 1,
    !(4194240 & Cl) && (Cl = 64),
    e
}
function ud(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function Ya(e, t, n) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - hn(t),
    e[t] = n
}
function oF(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var i = 31 - hn(n)
          , o = 1 << i;
        t[i] = 0,
        r[i] = -1,
        e[i] = -1,
        n &= ~o
    }
}
function Rh(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
        var r = 31 - hn(n)
          , i = 1 << r;
        i & t | e[r] & t && (e[r] |= t),
        n &= ~i
    }
}
var se = 0;
function Mb(e) {
    return e &= -e,
    1 < e ? 4 < e ? 268435455 & e ? 16 : 536870912 : 4 : 1
}
var Ob, Ph, Db, Ab, Vb, Ud = !1, Tl = [], Cr = null, kr = null, Tr = null, Ma = new Map, Oa = new Map, br = [], aF = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function d0(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        Cr = null;
        break;
    case "dragenter":
    case "dragleave":
        kr = null;
        break;
    case "mouseover":
    case "mouseout":
        Tr = null;
        break;
    case "pointerover":
    case "pointerout":
        Ma.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        Oa.delete(t.pointerId)
    }
}
function ua(e, t, n, r, i, o) {
    return e === null || e.nativeEvent !== o ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i]
    },
    t !== null && (t = Ka(t),
    t !== null && Ph(t)),
    e) : (e.eventSystemFlags |= r,
    t = e.targetContainers,
    i !== null && t.indexOf(i) === -1 && t.push(i),
    e)
}
function sF(e, t, n, r, i) {
    switch (t) {
    case "focusin":
        return Cr = ua(Cr, e, t, n, r, i),
        !0;
    case "dragenter":
        return kr = ua(kr, e, t, n, r, i),
        !0;
    case "mouseover":
        return Tr = ua(Tr, e, t, n, r, i),
        !0;
    case "pointerover":
        var o = i.pointerId;
        return Ma.set(o, ua(Ma.get(o) || null, e, t, n, r, i)),
        !0;
    case "gotpointercapture":
        return o = i.pointerId,
        Oa.set(o, ua(Oa.get(o) || null, e, t, n, r, i)),
        !0
    }
    return !1
}
function Bb(e) {
    var t = si(e.target);
    if (t !== null) {
        var n = yi(t);
        if (n !== null) {
            if (t = n.tag,
            t === 13) {
                if (t = Eb(n),
                t !== null) {
                    e.blockedOn = t,
                    Vb(e.priority, function() {
                        Db(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function zl(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = Xd(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n !== null)
            return t = Ka(n),
            t !== null && Ph(t),
            e.blockedOn = n,
            !1;
        n = e.nativeEvent;
        var r = new n.constructor(n.type,n);
        Hd = r,
        n.target.dispatchEvent(r),
        Hd = null,
        t.shift()
    }
    return !0
}
function h0(e, t, n) {
    zl(e) && n.delete(t)
}
function lF() {
    Ud = !1,
    Cr !== null && zl(Cr) && (Cr = null),
    kr !== null && zl(kr) && (kr = null),
    Tr !== null && zl(Tr) && (Tr = null),
    Ma.forEach(h0),
    Oa.forEach(h0)
}
function fa(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    Ud || (Ud = !0,
    Vt.unstable_scheduleCallback(Vt.unstable_NormalPriority, lF)))
}
function Da(e) {
    function t(i) {
        return fa(i, e)
    }
    if (0 < Tl.length) {
        fa(Tl[0], e);
        for (var n = 1; n < Tl.length; n++) {
            var r = Tl[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (Cr !== null && fa(Cr, e),
    kr !== null && fa(kr, e),
    Tr !== null && fa(Tr, e),
    Ma.forEach(t),
    Oa.forEach(t),
    n = 0; n < br.length; n++)
        r = br[n],
        r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < br.length && (n = br[0],
    n.blockedOn === null); )
        Bb(n),
        n.blockedOn === null && br.shift()
}
var so = rr.ReactCurrentBatchConfig
  , ec = !0;
function cF(e, t, n, r) {
    var i = se
      , o = so.transition;
    so.transition = null;
    try {
        se = 1,
        Ih(e, t, n, r)
    } finally {
        se = i,
        so.transition = o
    }
}
function uF(e, t, n, r) {
    var i = se
      , o = so.transition;
    so.transition = null;
    try {
        se = 4,
        Ih(e, t, n, r)
    } finally {
        se = i,
        so.transition = o
    }
}
function Ih(e, t, n, r) {
    if (ec) {
        var i = Xd(e, t, n, r);
        if (i === null)
            gd(e, t, r, tc, n),
            d0(e, r);
        else if (sF(i, e, t, n, r))
            r.stopPropagation();
        else if (d0(e, r),
        4 & t && -1 < aF.indexOf(e)) {
            for (; i !== null; ) {
                var o = Ka(i);
                if (o !== null && Ob(o),
                o = Xd(e, t, n, r),
                o === null && gd(e, t, r, tc, n),
                o === i)
                    break;
                i = o
            }
            i !== null && r.stopPropagation()
        } else
            gd(e, t, r, null, n)
    }
}
var tc = null;
function Xd(e, t, n, r) {
    if (tc = null,
    e = Th(r),
    e = si(e),
    e !== null)
        if (t = yi(e),
        t === null)
            e = null;
        else if (n = t.tag,
        n === 13) {
            if (e = Eb(t),
            e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return tc = e,
    null
}
function zb(e) {
    switch (e) {
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
        switch (QI()) {
        case Eh:
            return 1;
        case Fb:
            return 4;
        case Zl:
        case ZI:
            return 16;
        case _b:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var Sr = null
  , Fh = null
  , Hl = null;
function Hb() {
    if (Hl)
        return Hl;
    var e, t, n = Fh, r = n.length, i = "value"in Sr ? Sr.value : Sr.textContent, o = i.length;
    for (e = 0; e < r && n[e] === i[e]; e++)
        ;
    var a = r - e;
    for (t = 1; t <= a && n[r - t] === i[o - t]; t++)
        ;
    return Hl = i.slice(e, 1 < t ? 1 - t : void 0)
}
function Nl(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function El() {
    return !0
}
function p0() {
    return !1
}
function zt(e) {
    function t(n, r, i, o, a) {
        this._reactName = n,
        this._targetInst = i,
        this.type = r,
        this.nativeEvent = o,
        this.target = a,
        this.currentTarget = null;
        for (var s in e)
            e.hasOwnProperty(s) && (n = e[s],
            this[s] = n ? n(o) : o[s]);
        return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? El : p0,
        this.isPropagationStopped = p0,
        this
    }
    return Te(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = El)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = El)
        },
        persist: function() {},
        isPersistent: El
    }),
    t
}
var fd, dd, da, yo = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, _h = zt(yo), Ga = Te({}, yo, {
    view: 0,
    detail: 0
}), fF = zt(Ga), xc = Te({}, Ga, {
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
    getModifierState: Lh,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== da && (da && e.type === "mousemove" ? (fd = e.screenX - da.screenX,
        dd = e.screenY - da.screenY) : dd = fd = 0,
        da = e),
        fd)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : dd
    }
}), m0 = zt(xc), dF = Te({}, xc, {
    dataTransfer: 0
}), hF = zt(dF), pF = Te({}, Ga, {
    relatedTarget: 0
}), hd = zt(pF), mF = Te({}, yo, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), vF = zt(mF), gF = Te({}, yo, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : _.clipboardData
    }
}), yF = zt(gF), bF = Te({}, yo, {
    data: 0
}), v0 = zt(bF), xF = {
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
}, SF = {
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
}, wF = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function CF(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : !!(e = wF[e]) && !!t[e]
}
function Lh() {
    return CF
}
var kF = Te({}, Ga, {
    key: function(e) {
        if (e.key) {
            var t = xF[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = Nl(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? SF[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Lh,
    charCode: function(e) {
        return e.type === "keypress" ? Nl(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? Nl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , TF = zt(kF)
  , EF = Te({}, xc, {
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
})
  , g0 = zt(EF)
  , RF = Te({}, Ga, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Lh
})
  , PF = zt(RF)
  , IF = Te({}, yo, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , FF = zt(IF)
  , _F = Te({}, xc, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , LF = zt(_F)
  , MF = [9, 13, 27, 32]
  , Mh = Jn && "CompositionEvent"in _
  , Ca = null;
Jn && "documentMode"in document && (Ca = document.documentMode);
var OF = Jn && "TextEvent"in _ && !Ca
  , Nb = Jn && (!Mh || Ca && 8 < Ca && 11 >= Ca)
  , y0 = String.fromCharCode(32)
  , b0 = !1;
function $b(e, t) {
    switch (e) {
    case "keyup":
        return MF.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function jb(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var Gi = !1;
function DF(e, t) {
    switch (e) {
    case "compositionend":
        return jb(t);
    case "keypress":
        return t.which !== 32 ? null : (b0 = !0,
        y0);
    case "textInput":
        return e = t.data,
        e === y0 && b0 ? null : e;
    default:
        return null
    }
}
function AF(e, t) {
    if (Gi)
        return e === "compositionend" || !Mh && $b(e, t) ? (e = Hb(),
        Hl = Fh = Sr = null,
        Gi = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return Nb && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var VF = {
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
function x0(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!VF[e.type] : t === "textarea"
}
function Wb(e, t, n, r) {
    Sb(r),
    t = nc(t, "onChange"),
    0 < t.length && (n = new _h("onChange","change",null,n,r),
    e.push({
        event: n,
        listeners: t
    }))
}
var ka = null
  , Aa = null;
function BF(e) {
    tx(e, 0)
}
function Sc(e) {
    var t = Qi(e);
    if (pb(t))
        return e
}
function zF(e, t) {
    if (e === "change")
        return t
}
var Ub = !1;
Jn && (Jn ? (Pl = "oninput"in document,
Pl || (pd = document.createElement("div"),
pd.setAttribute("oninput", "return;"),
Pl = typeof pd.oninput == "function"),
Rl = Pl) : Rl = !1,
Ub = Rl && (!document.documentMode || 9 < document.documentMode));
var Rl, Pl, pd;
function S0() {
    ka && (ka.detachEvent("onpropertychange", Xb),
    Aa = ka = null)
}
function Xb(e) {
    if (e.propertyName === "value" && Sc(Aa)) {
        var t = [];
        Wb(t, Aa, e, Th(e)),
        Tb(BF, t)
    }
}
function HF(e, t, n) {
    e === "focusin" ? (S0(),
    ka = t,
    Aa = n,
    ka.attachEvent("onpropertychange", Xb)) : e === "focusout" && S0()
}
function NF(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return Sc(Aa)
}
function $F(e, t) {
    if (e === "click")
        return Sc(t)
}
function jF(e, t) {
    if (e === "input" || e === "change")
        return Sc(t)
}
function WF(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var mn = typeof Object.is == "function" ? Object.is : WF;
function Va(e, t) {
    if (mn(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
      , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!Pd.call(t, i) || !mn(e[i], t[i]))
            return !1
    }
    return !0
}
function w0(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function C0(e, t) {
    var n = w0(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
            e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = w0(n)
    }
}
function Yb(e, t) {
    return !(!e || !t) && (e === t || (!e || e.nodeType !== 3) && (t && t.nodeType === 3 ? Yb(e, t.parentNode) : "contains"in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t))))
}
function Gb() {
    for (var e = _, t = Kl(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (!n)
            break;
        e = t.contentWindow,
        t = Kl(e.document)
    }
    return t
}
function Oh(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function UF(e) {
    var t = Gb()
      , n = e.focusedElem
      , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Yb(n.ownerDocument.documentElement, n)) {
        if (r !== null && Oh(n)) {
            if (t = r.start,
            e = r.end,
            e === void 0 && (e = t),
            "selectionStart"in n)
                n.selectionStart = t,
                n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || _,
            e.getSelection) {
                e = e.getSelection();
                var i = n.textContent.length
                  , o = Math.min(r.start, i);
                r = r.end === void 0 ? o : Math.min(r.end, i),
                !e.extend && o > r && (i = r,
                r = o,
                o = i),
                i = C0(n, o);
                var a = C0(n, r);
                i && a && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== a.node || e.focusOffset !== a.offset) && (t = t.createRange(),
                t.setStart(i.node, i.offset),
                e.removeAllRanges(),
                o > r ? (e.addRange(t),
                e.extend(a.node, a.offset)) : (t.setEnd(a.node, a.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = n; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < t.length; n++)
            e = t[n],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var XF = Jn && "documentMode"in document && 11 >= document.documentMode
  , Ki = null
  , Yd = null
  , Ta = null
  , Gd = !1;
function k0(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Gd || Ki == null || Ki !== Kl(r) || (r = Ki,
    "selectionStart"in r && Oh(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || _).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    Ta && Va(Ta, r) || (Ta = r,
    r = nc(Yd, "onSelect"),
    0 < r.length && (t = new _h("onSelect","select",null,t,n),
    e.push({
        event: t,
        listeners: r
    }),
    t.target = Ki)))
}
function Il(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var qi = {
    animationend: Il("Animation", "AnimationEnd"),
    animationiteration: Il("Animation", "AnimationIteration"),
    animationstart: Il("Animation", "AnimationStart"),
    transitionend: Il("Transition", "TransitionEnd")
}
  , md = {}
  , Kb = {};
Jn && (Kb = document.createElement("div").style,
"AnimationEvent"in _ || (delete qi.animationend.animation,
delete qi.animationiteration.animation,
delete qi.animationstart.animation),
"TransitionEvent"in _ || delete qi.transitionend.transition);
function wc(e) {
    if (md[e])
        return md[e];
    if (!qi[e])
        return e;
    var t, n = qi[e];
    for (t in n)
        if (n.hasOwnProperty(t) && t in Kb)
            return md[e] = n[t];
    return e
}
var qb = wc("animationend")
  , Qb = wc("animationiteration")
  , Zb = wc("animationstart")
  , Jb = wc("transitionend")
  , ex = new Map
  , T0 = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Mr(e, t) {
    ex.set(e, t),
    gi(t, [e])
}
for (Fl = 0; Fl < T0.length; Fl++)
    _l = T0[Fl],
    E0 = _l.toLowerCase(),
    R0 = _l[0].toUpperCase() + _l.slice(1),
    Mr(E0, "on" + R0);
var _l, E0, R0, Fl;
Mr(qb, "onAnimationEnd");
Mr(Qb, "onAnimationIteration");
Mr(Zb, "onAnimationStart");
Mr("dblclick", "onDoubleClick");
Mr("focusin", "onFocus");
Mr("focusout", "onBlur");
Mr(Jb, "onTransitionEnd");
uo("onMouseEnter", ["mouseout", "mouseover"]);
uo("onMouseLeave", ["mouseout", "mouseover"]);
uo("onPointerEnter", ["pointerout", "pointerover"]);
uo("onPointerLeave", ["pointerout", "pointerover"]);
gi("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
gi("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
gi("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
gi("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
gi("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
gi("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var xa = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , YF = new Set("cancel close invalid load scroll toggle".split(" ").concat(xa));
function P0(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
    YI(r, t, void 0, e),
    e.currentTarget = null
}
function tx(e, t) {
    t = (4 & t) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
          , i = r.event;
        r = r.listeners;
        e: {
            var o = void 0;
            if (t)
                for (var a = r.length - 1; 0 <= a; a--) {
                    var s = r[a]
                      , l = s.instance
                      , c = s.currentTarget;
                    if (s = s.listener,
                    l !== o && i.isPropagationStopped())
                        break e;
                    P0(i, s, c),
                    o = l
                }
            else
                for (a = 0; a < r.length; a++) {
                    if (s = r[a],
                    l = s.instance,
                    c = s.currentTarget,
                    s = s.listener,
                    l !== o && i.isPropagationStopped())
                        break e;
                    P0(i, s, c),
                    o = l
                }
        }
    }
    if (Ql)
        throw e = jd,
        Ql = !1,
        jd = null,
        e
}
function me(e, t) {
    var n = t[Jd];
    n === void 0 && (n = t[Jd] = new Set);
    var r = e + "__bubble";
    n.has(r) || (nx(t, e, 2, !1),
    n.add(r))
}
function vd(e, t, n) {
    var r = 0;
    t && (r |= 4),
    nx(n, e, r, t)
}
var Ll = "_reactListening" + Math.random().toString(36).slice(2);
function Ba(e) {
    if (!e[Ll]) {
        e[Ll] = !0,
        cb.forEach(function(n) {
            n !== "selectionchange" && (YF.has(n) || vd(n, !1, e),
            vd(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Ll] || (t[Ll] = !0,
        vd("selectionchange", !1, t))
    }
}
function nx(e, t, n, r) {
    switch (zb(t)) {
    case 1:
        var i = cF;
        break;
    case 4:
        i = uF;
        break;
    default:
        i = Ih
    }
    n = i.bind(null, t, n, e),
    i = void 0,
    !$d || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0),
    r ? i !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: i
    }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, {
        passive: i
    }) : e.addEventListener(t, n, !1)
}
function gd(e, t, n, r, i) {
    var o = r;
    if (!(1 & t) && !(2 & t) && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var a = r.tag;
            if (a === 3 || a === 4) {
                var s = r.stateNode.containerInfo;
                if (s === i || s.nodeType === 8 && s.parentNode === i)
                    break;
                if (a === 4)
                    for (a = r.return; a !== null; ) {
                        var l = a.tag;
                        if ((l === 3 || l === 4) && (l = a.stateNode.containerInfo,
                        l === i || l.nodeType === 8 && l.parentNode === i))
                            return;
                        a = a.return
                    }
                for (; s !== null; ) {
                    if (a = si(s),
                    a === null)
                        return;
                    if (l = a.tag,
                    l === 5 || l === 6) {
                        r = o = a;
                        continue e
                    }
                    s = s.parentNode
                }
            }
            r = r.return
        }
    Tb(function() {
        var c = o
          , u = Th(n)
          , f = [];
        e: {
            var d = ex.get(e);
            if (d !== void 0) {
                var h = _h
                  , g = e;
                switch (e) {
                case "keypress":
                    if (Nl(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    h = TF;
                    break;
                case "focusin":
                    g = "focus",
                    h = hd;
                    break;
                case "focusout":
                    g = "blur",
                    h = hd;
                    break;
                case "beforeblur":
                case "afterblur":
                    h = hd;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    h = m0;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    h = hF;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    h = PF;
                    break;
                case qb:
                case Qb:
                case Zb:
                    h = vF;
                    break;
                case Jb:
                    h = FF;
                    break;
                case "scroll":
                    h = fF;
                    break;
                case "wheel":
                    h = LF;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    h = yF;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    h = g0
                }
                var y = (4 & t) !== 0
                  , S = !y && e === "scroll"
                  , m = y ? d !== null ? d + "Capture" : null : d;
                y = [];
                for (var p, v = c; v !== null; ) {
                    p = v;
                    var x = p.stateNode;
                    if (p.tag === 5 && x !== null && (p = x,
                    m !== null && (x = La(v, m),
                    x != null && y.push(za(v, x, p)))),
                    S)
                        break;
                    v = v.return
                }
                0 < y.length && (d = new h(d,g,null,n,u),
                f.push({
                    event: d,
                    listeners: y
                }))
            }
        }
        if (!(7 & t)) {
            if (d = e === "mouseover" || e === "pointerover",
            h = e === "mouseout" || e === "pointerout",
            (!d || n === Hd || !(g = n.relatedTarget || n.fromElement) || !si(g) && !g[er]) && (h || d) && (d = u.window === u ? u : (d = u.ownerDocument) ? d.defaultView || d.parentWindow : _,
            h ? (g = n.relatedTarget || n.toElement,
            h = c,
            g = g ? si(g) : null,
            g !== null && (S = yi(g),
            g !== S || g.tag !== 5 && g.tag !== 6) && (g = null)) : (h = null,
            g = c),
            h !== g)) {
                if (y = m0,
                x = "onMouseLeave",
                m = "onMouseEnter",
                v = "mouse",
                e !== "pointerout" && e !== "pointerover" || (y = g0,
                x = "onPointerLeave",
                m = "onPointerEnter",
                v = "pointer"),
                S = h == null ? d : Qi(h),
                p = g == null ? d : Qi(g),
                d = new y(x,v + "leave",h,n,u),
                d.target = S,
                d.relatedTarget = p,
                x = null,
                si(u) === c && (y = new y(m,v + "enter",g,n,u),
                y.target = p,
                y.relatedTarget = S,
                x = y),
                S = x,
                h && g)
                    e: {
                        for (y = h,
                        m = g,
                        v = 0,
                        p = y; p; p = Ui(p))
                            v++;
                        for (p = 0,
                        x = m; x; x = Ui(x))
                            p++;
                        for (; 0 < v - p; )
                            y = Ui(y),
                            v--;
                        for (; 0 < p - v; )
                            m = Ui(m),
                            p--;
                        for (; v--; ) {
                            if (y === m || m !== null && y === m.alternate)
                                break e;
                            y = Ui(y),
                            m = Ui(m)
                        }
                        y = null
                    }
                else
                    y = null;
                h !== null && I0(f, d, h, y, !1),
                g !== null && S !== null && I0(f, S, g, y, !0)
            }
            if (d = c ? Qi(c) : _,
            h = d.nodeName && d.nodeName.toLowerCase(),
            h === "select" || h === "input" && d.type === "file")
                var C = zF;
            else if (x0(d))
                if (Ub)
                    C = jF;
                else {
                    C = NF;
                    var w = HF
                }
            else
                (h = d.nodeName) && h.toLowerCase() === "input" && (d.type === "checkbox" || d.type === "radio") && (C = $F);
            switch (C && (C = C(e, c)) ? Wb(f, C, n, u) : (w && w(e, d, c),
            e === "focusout" && (w = d._wrapperState) && w.controlled && d.type === "number" && Dd(d, "number", d.value)),
            w = c ? Qi(c) : _,
            e) {
            case "focusin":
                (x0(w) || w.contentEditable === "true") && (Ki = w,
                Yd = c,
                Ta = null);
                break;
            case "focusout":
                Ta = Yd = Ki = null;
                break;
            case "mousedown":
                Gd = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                Gd = !1,
                k0(f, n, u);
                break;
            case "selectionchange":
                if (XF)
                    break;
            case "keydown":
            case "keyup":
                k0(f, n, u)
            }
            var k;
            if (Mh)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var E = "onCompositionStart";
                        break e;
                    case "compositionend":
                        E = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        E = "onCompositionUpdate";
                        break e
                    }
                    E = void 0
                }
            else
                Gi ? $b(e, n) && (E = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (E = "onCompositionStart");
            E && (Nb && n.locale !== "ko" && (Gi || E !== "onCompositionStart" ? E === "onCompositionEnd" && Gi && (k = Hb()) : (Sr = u,
            Fh = "value"in Sr ? Sr.value : Sr.textContent,
            Gi = !0)),
            w = nc(c, E),
            0 < w.length && (E = new v0(E,e,null,n,u),
            f.push({
                event: E,
                listeners: w
            }),
            k ? E.data = k : (k = jb(n),
            k !== null && (E.data = k)))),
            (k = OF ? DF(e, n) : AF(e, n)) && (c = nc(c, "onBeforeInput"),
            0 < c.length && (u = new v0("onBeforeInput","beforeinput",null,n,u),
            f.push({
                event: u,
                listeners: c
            }),
            u.data = k))
        }
        tx(f, t)
    })
}
function za(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function nc(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var i = e
          , o = i.stateNode;
        i.tag === 5 && o !== null && (i = o,
        o = La(e, n),
        o != null && r.unshift(za(e, o, i)),
        o = La(e, t),
        o != null && r.push(za(e, o, i))),
        e = e.return
    }
    return r
}
function Ui(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function I0(e, t, n, r, i) {
    for (var o = t._reactName, a = []; n !== null && n !== r; ) {
        var s = n
          , l = s.alternate
          , c = s.stateNode;
        if (l !== null && l === r)
            break;
        s.tag === 5 && c !== null && (s = c,
        i ? (l = La(n, o),
        l != null && a.unshift(za(n, l, s))) : i || (l = La(n, o),
        l != null && a.push(za(n, l, s)))),
        n = n.return
    }
    a.length !== 0 && e.push({
        event: t,
        listeners: a
    })
}
var GF = /\r\n?/g
  , KF = /\u0000|\uFFFD/g;
function F0(e) {
    return (typeof e == "string" ? e : "" + e).replace(GF, `
`).replace(KF, "")
}
function Ml(e, t, n) {
    if (t = F0(t),
    F0(e) !== t && n)
        throw Error(F(425))
}
function rc() {}
var Kd = null
  , qd = null;
function Qd(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var Zd = typeof setTimeout == "function" ? setTimeout : void 0
  , qF = typeof clearTimeout == "function" ? clearTimeout : void 0
  , _0 = typeof Promise == "function" ? Promise : void 0
  , QF = typeof queueMicrotask == "function" ? queueMicrotask : typeof _0 < "u" ? function(e) {
    return _0.resolve(null).then(e).catch(ZF)
}
: Zd;
function ZF(e) {
    setTimeout(function() {
        throw e
    })
}
function yd(e, t) {
    var n = t
      , r = 0;
    do {
        var i = n.nextSibling;
        if (e.removeChild(n),
        i && i.nodeType === 8)
            if (n = i.data,
            n === "/$") {
                if (r === 0) {
                    e.removeChild(i),
                    Da(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = i
    } while (n);
    Da(t)
}
function Er(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function L0(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var bo = Math.random().toString(36).slice(2)
  , In = "__reactFiber$" + bo
  , Ha = "__reactProps$" + bo
  , er = "__reactContainer$" + bo
  , Jd = "__reactEvents$" + bo
  , JF = "__reactListeners$" + bo
  , e_ = "__reactHandles$" + bo;
function si(e) {
    var t = e[In];
    if (t)
        return t;
    for (var n = e.parentNode; n; ) {
        if (t = n[er] || n[In]) {
            if (n = t.alternate,
            t.child !== null || n !== null && n.child !== null)
                for (e = L0(e); e !== null; ) {
                    if (n = e[In])
                        return n;
                    e = L0(e)
                }
            return t
        }
        e = n,
        n = e.parentNode
    }
    return null
}
function Ka(e) {
    return e = e[In] || e[er],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function Qi(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(F(33))
}
function Cc(e) {
    return e[Ha] || null
}
var eh = []
  , Zi = -1;
function Or(e) {
    return {
        current: e
    }
}
function ve(e) {
    0 > Zi || (e.current = eh[Zi],
    eh[Zi] = null,
    Zi--)
}
function de(e, t) {
    Zi++,
    eh[Zi] = e.current,
    e.current = t
}
var Lr = {}
  , ct = Or(Lr)
  , Ft = Or(!1)
  , di = Lr;
function fo(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return Lr;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var i, o = {};
    for (i in n)
        o[i] = t[i];
    return r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = o),
    o
}
function _t(e) {
    return e = e.childContextTypes,
    e != null
}
function ic() {
    ve(Ft),
    ve(ct)
}
function M0(e, t, n) {
    if (ct.current !== Lr)
        throw Error(F(168));
    de(ct, t),
    de(Ft, n)
}
function rx(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var i in r)
        if (!(i in t))
            throw Error(F(108, HI(e) || "Unknown", i));
    return Te({}, n, r)
}
function oc(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Lr,
    di = ct.current,
    de(ct, e),
    de(Ft, Ft.current),
    !0
}
function O0(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(F(169));
    n ? (e = rx(e, t, di),
    r.__reactInternalMemoizedMergedChildContext = e,
    ve(Ft),
    ve(ct),
    de(ct, e)) : ve(Ft),
    de(Ft, n)
}
var Kn = null
  , kc = !1
  , bd = !1;
function ix(e) {
    Kn === null ? Kn = [e] : Kn.push(e)
}
function t_(e) {
    kc = !0,
    ix(e)
}
function Dr() {
    if (!bd && Kn !== null) {
        bd = !0;
        var e = 0
          , t = se;
        try {
            var n = Kn;
            for (se = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            Kn = null,
            kc = !1
        } catch (i) {
            throw Kn !== null && (Kn = Kn.slice(e + 1)),
            Ib(Eh, Dr),
            i
        } finally {
            se = t,
            bd = !1
        }
    }
    return null
}
var Ji = []
  , eo = 0
  , ac = null
  , sc = 0
  , qt = []
  , Qt = 0
  , hi = null
  , qn = 1
  , Qn = "";
function oi(e, t) {
    Ji[eo++] = sc,
    Ji[eo++] = ac,
    ac = e,
    sc = t
}
function ox(e, t, n) {
    qt[Qt++] = qn,
    qt[Qt++] = Qn,
    qt[Qt++] = hi,
    hi = e;
    var r = qn;
    e = Qn;
    var i = 32 - hn(r) - 1;
    r &= ~(1 << i),
    n += 1;
    var o = 32 - hn(t) + i;
    if (30 < o) {
        var a = i - i % 5;
        o = (r & (1 << a) - 1).toString(32),
        r >>= a,
        i -= a,
        qn = 1 << 32 - hn(t) + i | n << i | r,
        Qn = o + e
    } else
        qn = 1 << o | n << i | r,
        Qn = e
}
function Dh(e) {
    e.return !== null && (oi(e, 1),
    ox(e, 1, 0))
}
function Ah(e) {
    for (; e === ac; )
        ac = Ji[--eo],
        Ji[eo] = null,
        sc = Ji[--eo],
        Ji[eo] = null;
    for (; e === hi; )
        hi = qt[--Qt],
        qt[Qt] = null,
        Qn = qt[--Qt],
        qt[Qt] = null,
        qn = qt[--Qt],
        qt[Qt] = null
}
var At = null
  , Dt = null
  , be = !1
  , dn = null;
function ax(e, t) {
    var n = Zt(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
    e.flags |= 16) : t.push(n)
}
function D0(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null && (e.stateNode = t,
        At = e,
        Dt = Er(t.firstChild),
        !0);
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null && (e.stateNode = t,
        At = e,
        Dt = null,
        !0);
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null && (n = hi !== null ? {
            id: qn,
            overflow: Qn
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
        },
        n = Zt(18, null, null, 0),
        n.stateNode = t,
        n.return = e,
        e.child = n,
        At = e,
        Dt = null,
        !0);
    default:
        return !1
    }
}
function th(e) {
    return (1 & e.mode) !== 0 && (128 & e.flags) === 0
}
function nh(e) {
    if (be) {
        var t = Dt;
        if (t) {
            var n = t;
            if (!D0(e, t)) {
                if (th(e))
                    throw Error(F(418));
                t = Er(n.nextSibling);
                var r = At;
                t && D0(e, t) ? ax(r, n) : (e.flags = -4097 & e.flags | 2,
                be = !1,
                At = e)
            }
        } else {
            if (th(e))
                throw Error(F(418));
            e.flags = -4097 & e.flags | 2,
            be = !1,
            At = e
        }
    }
}
function A0(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    At = e
}
function Ol(e) {
    if (e !== At)
        return !1;
    if (!be)
        return A0(e),
        be = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !Qd(e.type, e.memoizedProps)),
    t && (t = Dt)) {
        if (th(e))
            throw sx(),
            Error(F(418));
        for (; t; )
            ax(e, t),
            t = Er(t.nextSibling)
    }
    if (A0(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(F(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Dt = Er(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            Dt = null
        }
    } else
        Dt = At ? Er(e.stateNode.nextSibling) : null;
    return !0
}
function sx() {
    for (var e = Dt; e; )
        e = Er(e.nextSibling)
}
function ho() {
    Dt = At = null,
    be = !1
}
function Vh(e) {
    dn === null ? dn = [e] : dn.push(e)
}
var n_ = rr.ReactCurrentBatchConfig;
function un(e, t) {
    if (e && e.defaultProps) {
        t = Te({}, t),
        e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
var lc = Or(null)
  , cc = null
  , to = null
  , Bh = null;
function zh() {
    Bh = to = cc = null
}
function Hh(e) {
    var t = lc.current;
    ve(lc),
    e._currentValue = t
}
function rh(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
            break;
        e = e.return
    }
}
function lo(e, t) {
    cc = e,
    Bh = to = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (It = !0),
    e.firstContext = null)
}
function en(e) {
    var t = e._currentValue;
    if (Bh !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        to === null) {
            if (cc === null)
                throw Error(F(308));
            to = e,
            cc.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            to = to.next = e;
    return t
}
var li = null;
function Nh(e) {
    li === null ? li = [e] : li.push(e)
}
function lx(e, t, n, r) {
    var i = t.interleaved;
    return i === null ? (n.next = n,
    Nh(t)) : (n.next = i.next,
    i.next = n),
    t.interleaved = n,
    tr(e, r)
}
function tr(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
    n = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        n = e.alternate,
        n !== null && (n.childLanes |= t),
        n = e,
        e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var yr = !1;
function $h(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
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
function cx(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function Zn(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function Rr(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    2 & ie) {
        var i = r.pending;
        return i === null ? t.next = t : (t.next = i.next,
        i.next = t),
        r.pending = t,
        tr(e, n)
    }
    return i = r.interleaved,
    i === null ? (t.next = t,
    Nh(r)) : (t.next = i.next,
    i.next = t),
    r.interleaved = t,
    tr(e, n)
}
function $l(e, t, n) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (4194240 & n) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        Rh(e, n)
    }
}
function V0(e, t) {
    var n = e.updateQueue
      , r = e.alternate;
    if (r === null || (r = r.updateQueue,
    n !== r))
        e = n.lastBaseUpdate,
        e === null ? n.firstBaseUpdate = t : e.next = t,
        n.lastBaseUpdate = t;
    else {
        var i = null
          , o = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var a = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                o === null ? i = o = a : o = o.next = a,
                n = n.next
            } while (n !== null);
            o === null ? i = o = t : o = o.next = t
        } else
            i = o = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: i,
            lastBaseUpdate: o,
            shared: r.shared,
            effects: r.effects
        },
        e.updateQueue = n
    }
}
function uc(e, t, n, r) {
    var i = e.updateQueue;
    yr = !1;
    var o = i.firstBaseUpdate
      , a = i.lastBaseUpdate
      , s = i.shared.pending;
    if (s !== null) {
        i.shared.pending = null;
        var l = s
          , c = l.next;
        l.next = null,
        a === null ? o = c : a.next = c,
        a = l;
        var u = e.alternate;
        u !== null && (u = u.updateQueue,
        s = u.lastBaseUpdate,
        s !== a && (s === null ? u.firstBaseUpdate = c : s.next = c,
        u.lastBaseUpdate = l))
    }
    if (o !== null) {
        var f = i.baseState;
        a = 0,
        u = c = l = null,
        s = o;
        do {
            var d = s.lane
              , h = s.eventTime;
            if ((r & d) === d) {
                u !== null && (u = u.next = {
                    eventTime: h,
                    lane: 0,
                    tag: s.tag,
                    payload: s.payload,
                    callback: s.callback,
                    next: null
                });
                e: {
                    var g = e
                      , y = s;
                    switch (d = t,
                    h = n,
                    y.tag) {
                    case 1:
                        if (g = y.payload,
                        typeof g == "function") {
                            f = g.call(h, f, d);
                            break e
                        }
                        f = g;
                        break e;
                    case 3:
                        g.flags = -65537 & g.flags | 128;
                    case 0:
                        if (g = y.payload,
                        d = typeof g == "function" ? g.call(h, f, d) : g,
                        d == null)
                            break e;
                        f = Te({}, f, d);
                        break e;
                    case 2:
                        yr = !0
                    }
                }
                s.callback !== null && s.lane !== 0 && (e.flags |= 64,
                d = i.effects,
                d === null ? i.effects = [s] : d.push(s))
            } else
                h = {
                    eventTime: h,
                    lane: d,
                    tag: s.tag,
                    payload: s.payload,
                    callback: s.callback,
                    next: null
                },
                u === null ? (c = u = h,
                l = f) : u = u.next = h,
                a |= d;
            if (s = s.next,
            s === null) {
                if (s = i.shared.pending,
                s === null)
                    break;
                d = s,
                s = d.next,
                d.next = null,
                i.lastBaseUpdate = d,
                i.shared.pending = null
            }
        } while (1);
        if (u === null && (l = f),
        i.baseState = l,
        i.firstBaseUpdate = c,
        i.lastBaseUpdate = u,
        t = i.shared.interleaved,
        t !== null) {
            i = t;
            do
                a |= i.lane,
                i = i.next;
            while (i !== t)
        } else
            o === null && (i.shared.lanes = 0);
        mi |= a,
        e.lanes = a,
        e.memoizedState = f
    }
}
function B0(e, t, n) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
              , i = r.callback;
            if (i !== null) {
                if (r.callback = null,
                r = n,
                typeof i != "function")
                    throw Error(F(191, i));
                i.call(r)
            }
        }
}
var ux = new lb.Component().refs;
function ih(e, t, n, r) {
    t = e.memoizedState,
    n = n(r, t),
    n = n == null ? t : Te({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Tc = {
    isMounted: function(e) {
        return !!(e = e._reactInternals) && yi(e) === e
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = mt()
          , i = Ir(e)
          , o = Zn(r, i);
        o.payload = t,
        n != null && (o.callback = n),
        t = Rr(e, o, i),
        t !== null && (pn(t, e, i, r),
        $l(t, e, i))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = mt()
          , i = Ir(e)
          , o = Zn(r, i);
        o.tag = 1,
        o.payload = t,
        n != null && (o.callback = n),
        t = Rr(e, o, i),
        t !== null && (pn(t, e, i, r),
        $l(t, e, i))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = mt()
          , r = Ir(e)
          , i = Zn(n, r);
        i.tag = 2,
        t != null && (i.callback = t),
        t = Rr(e, i, r),
        t !== null && (pn(t, e, r, n),
        $l(t, e, r))
    }
};
function z0(e, t, n, r, i, o, a) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, a) : !t.prototype || !t.prototype.isPureReactComponent || !Va(n, r) || !Va(i, o)
}
function fx(e, t, n) {
    var r = !1
      , i = Lr
      , o = t.contextType;
    return typeof o == "object" && o !== null ? o = en(o) : (i = _t(t) ? di : ct.current,
    r = t.contextTypes,
    o = (r = r != null) ? fo(e, i) : Lr),
    t = new t(n,o),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = Tc,
    e.stateNode = t,
    t._reactInternals = e,
    r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = i,
    e.__reactInternalMemoizedMaskedChildContext = o),
    t
}
function H0(e, t, n, r) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Tc.enqueueReplaceState(t, t.state, null)
}
function oh(e, t, n, r) {
    var i = e.stateNode;
    i.props = n,
    i.state = e.memoizedState,
    i.refs = ux,
    $h(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? i.context = en(o) : (o = _t(t) ? di : ct.current,
    i.context = fo(e, o)),
    i.state = e.memoizedState,
    o = t.getDerivedStateFromProps,
    typeof o == "function" && (ih(e, t, o, n),
    i.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state,
    typeof i.componentWillMount == "function" && i.componentWillMount(),
    typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(),
    t !== i.state && Tc.enqueueReplaceState(i, i.state, null),
    uc(e, n, i, r),
    i.state = e.memoizedState),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308)
}
function ha(e, t, n) {
    if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(F(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(F(147, e));
            var i = r
              , o = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(a) {
                var s = i.refs;
                s === ux && (s = i.refs = {}),
                a === null ? delete s[o] : s[o] = a
            }
            ,
            t._stringRef = o,
            t)
        }
        if (typeof e != "string")
            throw Error(F(284));
        if (!n._owner)
            throw Error(F(290, e))
    }
    return e
}
function Dl(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(F(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function N0(e) {
    var t = e._init;
    return t(e._payload)
}
function dx(e) {
    function t(m, p) {
        if (e) {
            var v = m.deletions;
            v === null ? (m.deletions = [p],
            m.flags |= 16) : v.push(p)
        }
    }
    function n(m, p) {
        if (!e)
            return null;
        for (; p !== null; )
            t(m, p),
            p = p.sibling;
        return null
    }
    function r(m, p) {
        for (m = new Map; p !== null; )
            p.key !== null ? m.set(p.key, p) : m.set(p.index, p),
            p = p.sibling;
        return m
    }
    function i(m, p) {
        return m = Fr(m, p),
        m.index = 0,
        m.sibling = null,
        m
    }
    function o(m, p, v) {
        return m.index = v,
        e ? (v = m.alternate,
        v !== null ? (v = v.index,
        v < p ? (m.flags |= 2,
        p) : v) : (m.flags |= 2,
        p)) : (m.flags |= 1048576,
        p)
    }
    function a(m) {
        return e && m.alternate === null && (m.flags |= 2),
        m
    }
    function s(m, p, v, x) {
        return p === null || p.tag !== 6 ? (p = Ed(v, m.mode, x),
        p.return = m,
        p) : (p = i(p, v),
        p.return = m,
        p)
    }
    function l(m, p, v, x) {
        var C = v.type;
        return C === Yi ? u(m, p, v.props.children, x, v.key) : p !== null && (p.elementType === C || typeof C == "object" && C !== null && C.$$typeof === gr && N0(C) === p.type) ? (x = i(p, v.props),
        x.ref = ha(m, p, v),
        x.return = m,
        x) : (x = Gl(v.type, v.key, v.props, null, m.mode, x),
        x.ref = ha(m, p, v),
        x.return = m,
        x)
    }
    function c(m, p, v, x) {
        return p === null || p.tag !== 4 || p.stateNode.containerInfo !== v.containerInfo || p.stateNode.implementation !== v.implementation ? (p = Rd(v, m.mode, x),
        p.return = m,
        p) : (p = i(p, v.children || []),
        p.return = m,
        p)
    }
    function u(m, p, v, x, C) {
        return p === null || p.tag !== 7 ? (p = fi(v, m.mode, x, C),
        p.return = m,
        p) : (p = i(p, v),
        p.return = m,
        p)
    }
    function f(m, p, v) {
        if (typeof p == "string" && p !== "" || typeof p == "number")
            return p = Ed("" + p, m.mode, v),
            p.return = m,
            p;
        if (typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
            case xl:
                return v = Gl(p.type, p.key, p.props, null, m.mode, v),
                v.ref = ha(m, null, p),
                v.return = m,
                v;
            case Xi:
                return p = Rd(p, m.mode, v),
                p.return = m,
                p;
            case gr:
                var x = p._init;
                return f(m, x(p._payload), v)
            }
            if (ya(p) || ca(p))
                return p = fi(p, m.mode, v, null),
                p.return = m,
                p;
            Dl(m, p)
        }
        return null
    }
    function d(m, p, v, x) {
        var C = p !== null ? p.key : null;
        if (typeof v == "string" && v !== "" || typeof v == "number")
            return C !== null ? null : s(m, p, "" + v, x);
        if (typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
            case xl:
                return v.key === C ? l(m, p, v, x) : null;
            case Xi:
                return v.key === C ? c(m, p, v, x) : null;
            case gr:
                return C = v._init,
                d(m, p, C(v._payload), x)
            }
            if (ya(v) || ca(v))
                return C !== null ? null : u(m, p, v, x, null);
            Dl(m, v)
        }
        return null
    }
    function h(m, p, v, x, C) {
        if (typeof x == "string" && x !== "" || typeof x == "number")
            return m = m.get(v) || null,
            s(p, m, "" + x, C);
        if (typeof x == "object" && x !== null) {
            switch (x.$$typeof) {
            case xl:
                return m = m.get(x.key === null ? v : x.key) || null,
                l(p, m, x, C);
            case Xi:
                return m = m.get(x.key === null ? v : x.key) || null,
                c(p, m, x, C);
            case gr:
                var w = x._init;
                return h(m, p, v, w(x._payload), C)
            }
            if (ya(x) || ca(x))
                return m = m.get(v) || null,
                u(p, m, x, C, null);
            Dl(p, x)
        }
        return null
    }
    function g(m, p, v, x) {
        for (var C = null, w = null, k = p, E = p = 0, I = null; k !== null && E < v.length; E++) {
            k.index > E ? (I = k,
            k = null) : I = k.sibling;
            var P = d(m, k, v[E], x);
            if (P === null) {
                k === null && (k = I);
                break
            }
            e && k && P.alternate === null && t(m, k),
            p = o(P, p, E),
            w === null ? C = P : w.sibling = P,
            w = P,
            k = I
        }
        if (E === v.length)
            return n(m, k),
            be && oi(m, E),
            C;
        if (k === null) {
            for (; E < v.length; E++)
                k = f(m, v[E], x),
                k !== null && (p = o(k, p, E),
                w === null ? C = k : w.sibling = k,
                w = k);
            return be && oi(m, E),
            C
        }
        for (k = r(m, k); E < v.length; E++)
            I = h(k, m, E, v[E], x),
            I !== null && (e && I.alternate !== null && k.delete(I.key === null ? E : I.key),
            p = o(I, p, E),
            w === null ? C = I : w.sibling = I,
            w = I);
        return e && k.forEach(function(z) {
            return t(m, z)
        }),
        be && oi(m, E),
        C
    }
    function y(m, p, v, x) {
        var C = ca(v);
        if (typeof C != "function")
            throw Error(F(150));
        if (v = C.call(v),
        v == null)
            throw Error(F(151));
        for (var w = C = null, k = p, E = p = 0, I = null, P = v.next(); k !== null && !P.done; E++,
        P = v.next()) {
            k.index > E ? (I = k,
            k = null) : I = k.sibling;
            var z = d(m, k, P.value, x);
            if (z === null) {
                k === null && (k = I);
                break
            }
            e && k && z.alternate === null && t(m, k),
            p = o(z, p, E),
            w === null ? C = z : w.sibling = z,
            w = z,
            k = I
        }
        if (P.done)
            return n(m, k),
            be && oi(m, E),
            C;
        if (k === null) {
            for (; !P.done; E++,
            P = v.next())
                P = f(m, P.value, x),
                P !== null && (p = o(P, p, E),
                w === null ? C = P : w.sibling = P,
                w = P);
            return be && oi(m, E),
            C
        }
        for (k = r(m, k); !P.done; E++,
        P = v.next())
            P = h(k, m, E, P.value, x),
            P !== null && (e && P.alternate !== null && k.delete(P.key === null ? E : P.key),
            p = o(P, p, E),
            w === null ? C = P : w.sibling = P,
            w = P);
        return e && k.forEach(function(L) {
            return t(m, L)
        }),
        be && oi(m, E),
        C
    }
    function S(m, p, v, x) {
        if (typeof v == "object" && v !== null && v.type === Yi && v.key === null && (v = v.props.children),
        typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
            case xl:
                e: {
                    for (var C = v.key, w = p; w !== null; ) {
                        if (w.key === C) {
                            if (C = v.type,
                            C === Yi) {
                                if (w.tag === 7) {
                                    n(m, w.sibling),
                                    p = i(w, v.props.children),
                                    p.return = m,
                                    m = p;
                                    break e
                                }
                            } else if (w.elementType === C || typeof C == "object" && C !== null && C.$$typeof === gr && N0(C) === w.type) {
                                n(m, w.sibling),
                                p = i(w, v.props),
                                p.ref = ha(m, w, v),
                                p.return = m,
                                m = p;
                                break e
                            }
                            n(m, w);
                            break
                        }
                        t(m, w),
                        w = w.sibling
                    }
                    v.type === Yi ? (p = fi(v.props.children, m.mode, x, v.key),
                    p.return = m,
                    m = p) : (x = Gl(v.type, v.key, v.props, null, m.mode, x),
                    x.ref = ha(m, p, v),
                    x.return = m,
                    m = x)
                }
                return a(m);
            case Xi:
                e: {
                    for (w = v.key; p !== null; ) {
                        if (p.key === w) {
                            if (p.tag === 4 && p.stateNode.containerInfo === v.containerInfo && p.stateNode.implementation === v.implementation) {
                                n(m, p.sibling),
                                p = i(p, v.children || []),
                                p.return = m,
                                m = p;
                                break e
                            }
                            n(m, p);
                            break
                        }
                        t(m, p),
                        p = p.sibling
                    }
                    p = Rd(v, m.mode, x),
                    p.return = m,
                    m = p
                }
                return a(m);
            case gr:
                return w = v._init,
                S(m, p, w(v._payload), x)
            }
            if (ya(v))
                return g(m, p, v, x);
            if (ca(v))
                return y(m, p, v, x);
            Dl(m, v)
        }
        return typeof v == "string" && v !== "" || typeof v == "number" ? (v = "" + v,
        p !== null && p.tag === 6 ? (n(m, p.sibling),
        p = i(p, v),
        p.return = m,
        m = p) : (n(m, p),
        p = Ed(v, m.mode, x),
        p.return = m,
        m = p),
        a(m)) : n(m, p)
    }
    return S
}
var po = dx(!0)
  , hx = dx(!1)
  , qa = {}
  , _n = Or(qa)
  , Na = Or(qa)
  , $a = Or(qa);
function ci(e) {
    if (e === qa)
        throw Error(F(174));
    return e
}
function jh(e, t) {
    switch (de($a, t),
    de(Na, e),
    de(_n, qa),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Vd(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = Vd(t, e)
    }
    ve(_n),
    de(_n, t)
}
function mo() {
    ve(_n),
    ve(Na),
    ve($a)
}
function px(e) {
    ci($a.current);
    var t = ci(_n.current)
      , n = Vd(t, e.type);
    t !== n && (de(Na, e),
    de(_n, n))
}
function Wh(e) {
    Na.current === e && (ve(_n),
    ve(Na))
}
var Ce = Or(0);
function fc(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (128 & t.flags)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var xd = [];
function Uh() {
    for (var e = 0; e < xd.length; e++)
        xd[e]._workInProgressVersionPrimary = null;
    xd.length = 0
}
var jl = rr.ReactCurrentDispatcher
  , Sd = rr.ReactCurrentBatchConfig
  , pi = 0
  , ke = null
  , $e = null
  , Ue = null
  , dc = !1
  , Ea = !1
  , ja = 0
  , r_ = 0;
function at() {
    throw Error(F(321))
}
function Xh(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!mn(e[n], t[n]))
            return !1;
    return !0
}
function Yh(e, t, n, r, i, o) {
    if (pi = o,
    ke = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    jl.current = e === null || e.memoizedState === null ? s_ : l_,
    e = n(r, i),
    Ea) {
        o = 0;
        do {
            if (Ea = !1,
            ja = 0,
            25 <= o)
                throw Error(F(301));
            o += 1,
            Ue = $e = null,
            t.updateQueue = null,
            jl.current = c_,
            e = n(r, i)
        } while (Ea)
    }
    if (jl.current = hc,
    t = $e !== null && $e.next !== null,
    pi = 0,
    Ue = $e = ke = null,
    dc = !1,
    t)
        throw Error(F(300));
    return e
}
function Gh() {
    var e = ja !== 0;
    return ja = 0,
    e
}
function Pn() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return Ue === null ? ke.memoizedState = Ue = e : Ue = Ue.next = e,
    Ue
}
function tn() {
    if ($e === null) {
        var e = ke.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = $e.next;
    var t = Ue === null ? ke.memoizedState : Ue.next;
    if (t !== null)
        Ue = t,
        $e = e;
    else {
        if (e === null)
            throw Error(F(310));
        $e = e,
        e = {
            memoizedState: $e.memoizedState,
            baseState: $e.baseState,
            baseQueue: $e.baseQueue,
            queue: $e.queue,
            next: null
        },
        Ue === null ? ke.memoizedState = Ue = e : Ue = Ue.next = e
    }
    return Ue
}
function Wa(e, t) {
    return typeof t == "function" ? t(e) : t
}
function wd(e) {
    var t = tn()
      , n = t.queue;
    if (n === null)
        throw Error(F(311));
    n.lastRenderedReducer = e;
    var r = $e
      , i = r.baseQueue
      , o = n.pending;
    if (o !== null) {
        if (i !== null) {
            var a = i.next;
            i.next = o.next,
            o.next = a
        }
        r.baseQueue = i = o,
        n.pending = null
    }
    if (i !== null) {
        o = i.next,
        r = r.baseState;
        var s = a = null
          , l = null
          , c = o;
        do {
            var u = c.lane;
            if ((pi & u) === u)
                l !== null && (l = l.next = {
                    lane: 0,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null
                }),
                r = c.hasEagerState ? c.eagerState : e(r, c.action);
            else {
                var f = {
                    lane: u,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null
                };
                l === null ? (s = l = f,
                a = r) : l = l.next = f,
                ke.lanes |= u,
                mi |= u
            }
            c = c.next
        } while (c !== null && c !== o);
        l === null ? a = r : l.next = s,
        mn(r, t.memoizedState) || (It = !0),
        t.memoizedState = r,
        t.baseState = a,
        t.baseQueue = l,
        n.lastRenderedState = r
    }
    if (e = n.interleaved,
    e !== null) {
        i = e;
        do
            o = i.lane,
            ke.lanes |= o,
            mi |= o,
            i = i.next;
        while (i !== e)
    } else
        i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function Cd(e) {
    var t = tn()
      , n = t.queue;
    if (n === null)
        throw Error(F(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
      , i = n.pending
      , o = t.memoizedState;
    if (i !== null) {
        n.pending = null;
        var a = i = i.next;
        do
            o = e(o, a.action),
            a = a.next;
        while (a !== i);
        mn(o, t.memoizedState) || (It = !0),
        t.memoizedState = o,
        t.baseQueue === null && (t.baseState = o),
        n.lastRenderedState = o
    }
    return [o, r]
}
function mx() {}
function vx(e, t) {
    var n = ke
      , r = tn()
      , i = t()
      , o = !mn(r.memoizedState, i);
    if (o && (r.memoizedState = i,
    It = !0),
    r = r.queue,
    Kh(bx.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || Ue !== null && 1 & Ue.memoizedState.tag) {
        if (n.flags |= 2048,
        Ua(9, yx.bind(null, n, r, i, t), void 0, null),
        Xe === null)
            throw Error(F(349));
        30 & pi || gx(n, t, i)
    }
    return i
}
function gx(e, t, n) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: n
    },
    t = ke.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    ke.updateQueue = t,
    t.stores = [e]) : (n = t.stores,
    n === null ? t.stores = [e] : n.push(e))
}
function yx(e, t, n, r) {
    t.value = n,
    t.getSnapshot = r,
    xx(t) && Sx(e)
}
function bx(e, t, n) {
    return n(function() {
        xx(t) && Sx(e)
    })
}
function xx(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !mn(e, n)
    } catch {
        return !0
    }
}
function Sx(e) {
    var t = tr(e, 1);
    t !== null && pn(t, e, 1, -1)
}
function $0(e) {
    var t = Pn();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Wa,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = a_.bind(null, ke, e),
    [t.memoizedState, e]
}
function Ua(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
    t = ke.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    ke.updateQueue = t,
    t.lastEffect = e.next = e) : (n = t.lastEffect,
    n === null ? t.lastEffect = e.next = e : (r = n.next,
    n.next = e,
    e.next = r,
    t.lastEffect = e)),
    e
}
function wx() {
    return tn().memoizedState
}
function Wl(e, t, n, r) {
    var i = Pn();
    ke.flags |= e,
    i.memoizedState = Ua(1 | t, n, void 0, r === void 0 ? null : r)
}
function Ec(e, t, n, r) {
    var i = tn();
    r = r === void 0 ? null : r;
    var o = void 0;
    if ($e !== null) {
        var a = $e.memoizedState;
        if (o = a.destroy,
        r !== null && Xh(r, a.deps)) {
            i.memoizedState = Ua(t, n, o, r);
            return
        }
    }
    ke.flags |= e,
    i.memoizedState = Ua(1 | t, n, o, r)
}
function j0(e, t) {
    return Wl(8390656, 8, e, t)
}
function Kh(e, t) {
    return Ec(2048, 8, e, t)
}
function Cx(e, t) {
    return Ec(4, 2, e, t)
}
function kx(e, t) {
    return Ec(4, 4, e, t)
}
function Tx(e, t) {
    return typeof t == "function" ? (e = e(),
    t(e),
    function() {
        t(null)
    }
    ) : t != null ? (e = e(),
    t.current = e,
    function() {
        t.current = null
    }
    ) : void 0
}
function Ex(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
    Ec(4, 4, Tx.bind(null, t, e), n)
}
function qh() {}
function Rx(e, t) {
    var n = tn();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Xh(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
    e)
}
function Px(e, t) {
    var n = tn();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Xh(t, r[1]) ? r[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function Ix(e, t, n) {
    return 21 & pi ? (mn(n, t) || (n = Lb(),
    ke.lanes |= n,
    mi |= n,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    It = !0),
    e.memoizedState = n)
}
function i_(e, t) {
    var n = se;
    se = n !== 0 && 4 > n ? n : 4,
    e(!0);
    var r = Sd.transition;
    Sd.transition = {};
    try {
        e(!1),
        t()
    } finally {
        se = n,
        Sd.transition = r
    }
}
function Fx() {
    return tn().memoizedState
}
function o_(e, t, n) {
    var r = Ir(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    _x(e))
        Lx(t, n);
    else if (n = lx(e, t, n, r),
    n !== null) {
        var i = mt();
        pn(n, e, r, i),
        Mx(n, t, r)
    }
}
function a_(e, t, n) {
    var r = Ir(e)
      , i = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (_x(e))
        Lx(t, i);
    else {
        var o = e.alternate;
        if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer,
        o !== null))
            try {
                var a = t.lastRenderedState
                  , s = o(a, n);
                if (i.hasEagerState = !0,
                i.eagerState = s,
                mn(s, a)) {
                    var l = t.interleaved;
                    l === null ? (i.next = i,
                    Nh(t)) : (i.next = l.next,
                    l.next = i),
                    t.interleaved = i;
                    return
                }
            } catch {}
        n = lx(e, t, i, r),
        n !== null && (i = mt(),
        pn(n, e, r, i),
        Mx(n, t, r))
    }
}
function _x(e) {
    var t = e.alternate;
    return e === ke || t !== null && t === ke
}
function Lx(e, t) {
    Ea = dc = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function Mx(e, t, n) {
    if (4194240 & n) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        Rh(e, n)
    }
}
var hc = {
    readContext: en,
    useCallback: at,
    useContext: at,
    useEffect: at,
    useImperativeHandle: at,
    useInsertionEffect: at,
    useLayoutEffect: at,
    useMemo: at,
    useReducer: at,
    useRef: at,
    useState: at,
    useDebugValue: at,
    useDeferredValue: at,
    useTransition: at,
    useMutableSource: at,
    useSyncExternalStore: at,
    useId: at,
    unstable_isNewReconciler: !1
}
  , s_ = {
    readContext: en,
    useCallback: function(e, t) {
        return Pn().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: en,
    useEffect: j0,
    useImperativeHandle: function(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        Wl(4194308, 4, Tx.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
        return Wl(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return Wl(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var n = Pn();
        return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, n) {
        var r = Pn();
        return t = n !== void 0 ? n(t) : t,
        r.memoizedState = r.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        r.queue = e,
        e = e.dispatch = o_.bind(null, ke, e),
        [r.memoizedState, e]
    },
    useRef: function(e) {
        var t = Pn();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: $0,
    useDebugValue: qh,
    useDeferredValue: function(e) {
        return Pn().memoizedState = e
    },
    useTransition: function() {
        var e = $0(!1)
          , t = e[0];
        return e = i_.bind(null, e[1]),
        Pn().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
        var r = ke
          , i = Pn();
        if (be) {
            if (n === void 0)
                throw Error(F(407));
            n = n()
        } else {
            if (n = t(),
            Xe === null)
                throw Error(F(349));
            30 & pi || gx(r, t, n)
        }
        i.memoizedState = n;
        var o = {
            value: n,
            getSnapshot: t
        };
        return i.queue = o,
        j0(bx.bind(null, r, o, e), [e]),
        r.flags |= 2048,
        Ua(9, yx.bind(null, r, o, n, t), void 0, null),
        n
    },
    useId: function() {
        var e = Pn()
          , t = Xe.identifierPrefix;
        if (be) {
            var n = Qn
              , r = qn;
            n = (r & ~(1 << 32 - hn(r) - 1)).toString(32) + n,
            t = ":" + t + "R" + n,
            n = ja++,
            0 < n && (t += "H" + n.toString(32)),
            t += ":"
        } else
            n = r_++,
            t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , l_ = {
    readContext: en,
    useCallback: Rx,
    useContext: en,
    useEffect: Kh,
    useImperativeHandle: Ex,
    useInsertionEffect: Cx,
    useLayoutEffect: kx,
    useMemo: Px,
    useReducer: wd,
    useRef: wx,
    useState: function() {
        return wd(Wa)
    },
    useDebugValue: qh,
    useDeferredValue: function(e) {
        var t = tn();
        return Ix(t, $e.memoizedState, e)
    },
    useTransition: function() {
        var e = wd(Wa)[0]
          , t = tn().memoizedState;
        return [e, t]
    },
    useMutableSource: mx,
    useSyncExternalStore: vx,
    useId: Fx,
    unstable_isNewReconciler: !1
}
  , c_ = {
    readContext: en,
    useCallback: Rx,
    useContext: en,
    useEffect: Kh,
    useImperativeHandle: Ex,
    useInsertionEffect: Cx,
    useLayoutEffect: kx,
    useMemo: Px,
    useReducer: Cd,
    useRef: wx,
    useState: function() {
        return Cd(Wa)
    },
    useDebugValue: qh,
    useDeferredValue: function(e) {
        var t = tn();
        return $e === null ? t.memoizedState = e : Ix(t, $e.memoizedState, e)
    },
    useTransition: function() {
        var e = Cd(Wa)[0]
          , t = tn().memoizedState;
        return [e, t]
    },
    useMutableSource: mx,
    useSyncExternalStore: vx,
    useId: Fx,
    unstable_isNewReconciler: !1
};
function vo(e, t) {
    try {
        var n = ""
          , r = t;
        do
            n += zI(r),
            r = r.return;
        while (r);
        var i = n
    } catch (o) {
        i = `
Error generating stack: ` + o.message + `
` + o.stack
    }
    return {
        value: e,
        source: t,
        stack: i,
        digest: null
    }
}
function kd(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function ah(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var u_ = typeof WeakMap == "function" ? WeakMap : Map;
function Ox(e, t, n) {
    n = Zn(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        mc || (mc = !0,
        mh = r),
        ah(e, t)
    }
    ,
    n
}
function Dx(e, t, n) {
    n = Zn(-1, n),
    n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var i = t.value;
        n.payload = function() {
            return r(i)
        }
        ,
        n.callback = function() {
            ah(e, t)
        }
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
        ah(e, t),
        typeof r != "function" && (Pr === null ? Pr = new Set([this]) : Pr.add(this));
        var a = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: a !== null ? a : ""
        })
    }
    ),
    n
}
function W0(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new u_;
        var i = new Set;
        r.set(t, i)
    } else
        i = r.get(t),
        i === void 0 && (i = new Set,
        r.set(t, i));
    i.has(n) || (i.add(n),
    e = k_.bind(null, e, t, n),
    t.then(e, e))
}
function U0(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t === null || t.dehydrated !== null),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function X0(e, t, n, r, i) {
    return 1 & e.mode ? (e.flags |= 65536,
    e.lanes = i,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Zn(-1, 1),
    t.tag = 2,
    Rr(n, t, 1))),
    n.lanes |= 1),
    e)
}
var f_ = rr.ReactCurrentOwner
  , It = !1;
function pt(e, t, n, r) {
    t.child = e === null ? hx(t, null, n, r) : po(t, e.child, n, r)
}
function Y0(e, t, n, r, i) {
    n = n.render;
    var o = t.ref;
    return lo(t, i),
    r = Yh(e, t, n, r, o, i),
    n = Gh(),
    e !== null && !It ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~i,
    nr(e, t, i)) : (be && n && Dh(t),
    t.flags |= 1,
    pt(e, t, r, i),
    t.child)
}
function G0(e, t, n, r, i) {
    if (e === null) {
        var o = n.type;
        return typeof o == "function" && !ip(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
        t.type = o,
        Ax(e, t, o, r, i)) : (e = Gl(n.type, null, r, t, t.mode, i),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (o = e.child,
    !(e.lanes & i)) {
        var a = o.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : Va,
        n(a, r) && e.ref === t.ref)
            return nr(e, t, i)
    }
    return t.flags |= 1,
    e = Fr(o, r),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function Ax(e, t, n, r, i) {
    if (e !== null) {
        var o = e.memoizedProps;
        if (Va(o, r) && e.ref === t.ref) {
            if (It = !1,
            t.pendingProps = r = o,
            (e.lanes & i) === 0)
                return t.lanes = e.lanes,
                nr(e, t, i);
            131072 & e.flags && (It = !0)
        }
    }
    return sh(e, t, n, r, i)
}
function Vx(e, t, n) {
    var r = t.pendingProps
      , i = r.children
      , o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(1 & t.mode))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            de(ro, Ot),
            Ot |= n;
        else {
            if (!(1073741824 & n))
                return e = o !== null ? o.baseLanes | n : n,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                de(ro, Ot),
                Ot |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = o !== null ? o.baseLanes : n,
            de(ro, Ot),
            Ot |= r
        }
    else
        o !== null ? (r = o.baseLanes | n,
        t.memoizedState = null) : r = n,
        de(ro, Ot),
        Ot |= r;
    return pt(e, t, i, n),
    t.child
}
function Bx(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function sh(e, t, n, r, i) {
    var o = _t(n) ? di : ct.current;
    return o = fo(t, o),
    lo(t, i),
    n = Yh(e, t, n, r, o, i),
    r = Gh(),
    e !== null && !It ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~i,
    nr(e, t, i)) : (be && r && Dh(t),
    t.flags |= 1,
    pt(e, t, n, i),
    t.child)
}
function K0(e, t, n, r, i) {
    if (_t(n)) {
        var o = !0;
        oc(t)
    } else
        o = !1;
    if (lo(t, i),
    t.stateNode === null)
        Ul(e, t),
        fx(t, n, r),
        oh(t, n, r, i),
        r = !0;
    else if (e === null) {
        var a = t.stateNode
          , s = t.memoizedProps;
        a.props = s;
        var l = a.context
          , c = n.contextType;
        typeof c == "object" && c !== null ? c = en(c) : (c = _t(n) ? di : ct.current,
        c = fo(t, c));
        var u = n.getDerivedStateFromProps
          , f = typeof u == "function" || typeof a.getSnapshotBeforeUpdate == "function";
        f || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (s !== r || l !== c) && H0(t, a, r, c),
        yr = !1;
        var d = t.memoizedState;
        a.state = d,
        uc(t, r, a, i),
        l = t.memoizedState,
        s !== r || d !== l || Ft.current || yr ? (typeof u == "function" && (ih(t, n, u, r),
        l = t.memoizedState),
        (s = yr || z0(t, n, s, r, d, l, c)) ? (f || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(),
        typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()),
        typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = r,
        t.memoizedState = l),
        a.props = r,
        a.state = l,
        a.context = c,
        r = s) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
        r = !1)
    } else {
        a = t.stateNode,
        cx(e, t),
        s = t.memoizedProps,
        c = t.type === t.elementType ? s : un(t.type, s),
        a.props = c,
        f = t.pendingProps,
        d = a.context,
        l = n.contextType,
        typeof l == "object" && l !== null ? l = en(l) : (l = _t(n) ? di : ct.current,
        l = fo(t, l));
        var h = n.getDerivedStateFromProps;
        (u = typeof h == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (s !== f || d !== l) && H0(t, a, r, l),
        yr = !1,
        d = t.memoizedState,
        a.state = d,
        uc(t, r, a, i);
        var g = t.memoizedState;
        s !== f || d !== g || Ft.current || yr ? (typeof h == "function" && (ih(t, n, h, r),
        g = t.memoizedState),
        (c = yr || z0(t, n, c, r, d, g, l) || !1) ? (u || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(r, g, l),
        typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(r, g, l)),
        typeof a.componentDidUpdate == "function" && (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || s === e.memoizedProps && d === e.memoizedState || (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = r,
        t.memoizedState = g),
        a.props = r,
        a.state = g,
        a.context = l,
        r = c) : (typeof a.componentDidUpdate != "function" || s === e.memoizedProps && d === e.memoizedState || (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024),
        r = !1)
    }
    return lh(e, t, n, r, o, i)
}
function lh(e, t, n, r, i, o) {
    Bx(e, t);
    var a = (128 & t.flags) !== 0;
    if (!r && !a)
        return i && O0(t, n, !1),
        nr(e, t, o);
    r = t.stateNode,
    f_.current = t;
    var s = a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
    e !== null && a ? (t.child = po(t, e.child, null, o),
    t.child = po(t, null, s, o)) : pt(e, t, s, o),
    t.memoizedState = r.state,
    i && O0(t, n, !0),
    t.child
}
function zx(e) {
    var t = e.stateNode;
    t.pendingContext ? M0(e, t.pendingContext, t.pendingContext !== t.context) : t.context && M0(e, t.context, !1),
    jh(e, t.containerInfo)
}
function q0(e, t, n, r, i) {
    return ho(),
    Vh(i),
    t.flags |= 256,
    pt(e, t, n, r),
    t.child
}
var ch = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function uh(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function Hx(e, t, n) {
    var r, i = t.pendingProps, o = Ce.current, a = !1, s = (128 & t.flags) !== 0;
    if ((r = s) || (r = (e === null || e.memoizedState !== null) && (2 & o) !== 0),
    r ? (a = !0,
    t.flags &= -129) : e !== null && e.memoizedState === null || (o |= 1),
    de(Ce, 1 & o),
    e === null)
        return nh(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (1 & t.mode ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (s = i.children,
        e = i.fallback,
        a ? (i = t.mode,
        a = t.child,
        s = {
            mode: "hidden",
            children: s
        },
        !(1 & i) && a !== null ? (a.childLanes = 0,
        a.pendingProps = s) : a = Ic(s, i, 0, null),
        e = fi(e, i, n, null),
        a.return = t,
        e.return = t,
        a.sibling = e,
        t.child = a,
        t.child.memoizedState = uh(n),
        t.memoizedState = ch,
        e) : Qh(t, s));
    if (o = e.memoizedState,
    o !== null && (r = o.dehydrated,
    r !== null))
        return d_(e, t, s, i, r, o, n);
    if (a) {
        a = i.fallback,
        s = t.mode,
        o = e.child,
        r = o.sibling;
        var l = {
            mode: "hidden",
            children: i.children
        };
        return !(1 & s) && t.child !== o ? (i = t.child,
        i.childLanes = 0,
        i.pendingProps = l,
        t.deletions = null) : (i = Fr(o, l),
        i.subtreeFlags = 14680064 & o.subtreeFlags),
        r !== null ? a = Fr(r, a) : (a = fi(a, s, n, null),
        a.flags |= 2),
        a.return = t,
        i.return = t,
        i.sibling = a,
        t.child = i,
        i = a,
        a = t.child,
        s = e.child.memoizedState,
        s = s === null ? uh(n) : {
            baseLanes: s.baseLanes | n,
            cachePool: null,
            transitions: s.transitions
        },
        a.memoizedState = s,
        a.childLanes = e.childLanes & ~n,
        t.memoizedState = ch,
        i
    }
    return a = e.child,
    e = a.sibling,
    i = Fr(a, {
        mode: "visible",
        children: i.children
    }),
    !(1 & t.mode) && (i.lanes = n),
    i.return = t,
    i.sibling = null,
    e !== null && (n = t.deletions,
    n === null ? (t.deletions = [e],
    t.flags |= 16) : n.push(e)),
    t.child = i,
    t.memoizedState = null,
    i
}
function Qh(e, t) {
    return t = Ic({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function Al(e, t, n, r) {
    return r !== null && Vh(r),
    po(t, e.child, null, n),
    e = Qh(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function d_(e, t, n, r, i, o, a) {
    if (n)
        return 256 & t.flags ? (t.flags &= -257,
        r = kd(Error(F(422))),
        Al(e, t, a, r)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (o = r.fallback,
        i = t.mode,
        r = Ic({
            mode: "visible",
            children: r.children
        }, i, 0, null),
        o = fi(o, i, a, null),
        o.flags |= 2,
        r.return = t,
        o.return = t,
        r.sibling = o,
        t.child = r,
        1 & t.mode && po(t, e.child, null, a),
        t.child.memoizedState = uh(a),
        t.memoizedState = ch,
        o);
    if (!(1 & t.mode))
        return Al(e, t, a, null);
    if (i.data === "$!") {
        if (r = i.nextSibling && i.nextSibling.dataset,
        r)
            var s = r.dgst;
        return r = s,
        o = Error(F(419)),
        r = kd(o, r, void 0),
        Al(e, t, a, r)
    }
    if (s = (a & e.childLanes) !== 0,
    It || s) {
        if (r = Xe,
        r !== null) {
            switch (a & -a) {
            case 4:
                i = 2;
                break;
            case 16:
                i = 8;
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
                i = 32;
                break;
            case 536870912:
                i = 268435456;
                break;
            default:
                i = 0
            }
            i = i & (r.suspendedLanes | a) ? 0 : i,
            i !== 0 && i !== o.retryLane && (o.retryLane = i,
            tr(e, i),
            pn(r, e, i, -1))
        }
        return rp(),
        r = kd(Error(F(421))),
        Al(e, t, a, r)
    }
    return i.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = T_.bind(null, e),
    i._reactRetry = t,
    null) : (e = o.treeContext,
    Dt = Er(i.nextSibling),
    At = t,
    be = !0,
    dn = null,
    e !== null && (qt[Qt++] = qn,
    qt[Qt++] = Qn,
    qt[Qt++] = hi,
    qn = e.id,
    Qn = e.overflow,
    hi = t),
    t = Qh(t, r.children),
    t.flags |= 4096,
    t)
}
function Q0(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
    rh(e.return, t, n)
}
function Td(e, t, n, r, i) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i
    } : (o.isBackwards = t,
    o.rendering = null,
    o.renderingStartTime = 0,
    o.last = r,
    o.tail = n,
    o.tailMode = i)
}
function Nx(e, t, n) {
    var r = t.pendingProps
      , i = r.revealOrder
      , o = r.tail;
    if (pt(e, t, r.children, n),
    r = Ce.current,
    2 & r)
        r = 1 & r | 2,
        t.flags |= 128;
    else {
        if (e !== null && 128 & e.flags)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && Q0(e, n, t);
                else if (e.tag === 19)
                    Q0(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        r &= 1
    }
    if (de(Ce, r),
    !(1 & t.mode))
        t.memoizedState = null;
    else
        switch (i) {
        case "forwards":
            for (n = t.child,
            i = null; n !== null; )
                e = n.alternate,
                e !== null && fc(e) === null && (i = n),
                n = n.sibling;
            n = i,
            n === null ? (i = t.child,
            t.child = null) : (i = n.sibling,
            n.sibling = null),
            Td(t, !1, i, n, o);
            break;
        case "backwards":
            for (n = null,
            i = t.child,
            t.child = null; i !== null; ) {
                if (e = i.alternate,
                e !== null && fc(e) === null) {
                    t.child = i;
                    break
                }
                e = i.sibling,
                i.sibling = n,
                n = i,
                i = e
            }
            Td(t, !0, n, null, o);
            break;
        case "together":
            Td(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function Ul(e, t) {
    !(1 & t.mode) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function nr(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
    mi |= t.lanes,
    !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(F(153));
    if (t.child !== null) {
        for (e = t.child,
        n = Fr(e, e.pendingProps),
        t.child = n,
        n.return = t; e.sibling !== null; )
            e = e.sibling,
            n = n.sibling = Fr(e, e.pendingProps),
            n.return = t;
        n.sibling = null
    }
    return t.child
}
function h_(e, t, n) {
    switch (t.tag) {
    case 3:
        zx(t),
        ho();
        break;
    case 5:
        px(t);
        break;
    case 1:
        _t(t.type) && oc(t);
        break;
    case 4:
        jh(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context
          , i = t.memoizedProps.value;
        de(lc, r._currentValue),
        r._currentValue = i;
        break;
    case 13:
        if (r = t.memoizedState,
        r !== null)
            return r.dehydrated !== null ? (de(Ce, 1 & Ce.current),
            t.flags |= 128,
            null) : n & t.child.childLanes ? Hx(e, t, n) : (de(Ce, 1 & Ce.current),
            e = nr(e, t, n),
            e !== null ? e.sibling : null);
        de(Ce, 1 & Ce.current);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0,
        128 & e.flags) {
            if (r)
                return Nx(e, t, n);
            t.flags |= 128
        }
        if (i = t.memoizedState,
        i !== null && (i.rendering = null,
        i.tail = null,
        i.lastEffect = null),
        de(Ce, Ce.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        Vx(e, t, n)
    }
    return nr(e, t, n)
}
var $x, fh, jx, Wx;
$x = function(e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
fh = function() {}
;
jx = function(e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
        e = t.stateNode,
        ci(_n.current);
        var o = null;
        switch (n) {
        case "input":
            i = Md(e, i),
            r = Md(e, r),
            o = [];
            break;
        case "select":
            i = Te({}, i, {
                value: void 0
            }),
            r = Te({}, r, {
                value: void 0
            }),
            o = [];
            break;
        case "textarea":
            i = Ad(e, i),
            r = Ad(e, r),
            o = [];
            break;
        default:
            typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = rc)
        }
        Bd(n, r);
        var a;
        n = null;
        for (c in i)
            if (!r.hasOwnProperty(c) && i.hasOwnProperty(c) && i[c] != null)
                if (c === "style") {
                    var s = i[c];
                    for (a in s)
                        s.hasOwnProperty(a) && (n || (n = {}),
                        n[a] = "")
                } else
                    c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (Fa.hasOwnProperty(c) ? o || (o = []) : (o = o || []).push(c, null));
        for (c in r) {
            var l = r[c];
            if (s = i?.[c],
            r.hasOwnProperty(c) && l !== s && (l != null || s != null))
                if (c === "style")
                    if (s) {
                        for (a in s)
                            !s.hasOwnProperty(a) || l && l.hasOwnProperty(a) || (n || (n = {}),
                            n[a] = "");
                        for (a in l)
                            l.hasOwnProperty(a) && s[a] !== l[a] && (n || (n = {}),
                            n[a] = l[a])
                    } else
                        n || (o || (o = []),
                        o.push(c, n)),
                        n = l;
                else
                    c === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                    s = s ? s.__html : void 0,
                    l != null && s !== l && (o = o || []).push(c, l)) : c === "children" ? typeof l != "string" && typeof l != "number" || (o = o || []).push(c, "" + l) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (Fa.hasOwnProperty(c) ? (l != null && c === "onScroll" && me("scroll", e),
                    o || s === l || (o = [])) : (o = o || []).push(c, l))
        }
        n && (o = o || []).push("style", n);
        var c = o;
        (t.updateQueue = c) && (t.flags |= 4)
    }
}
;
Wx = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
}
;
function pa(e, t) {
    if (!be)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
                t.alternate !== null && (n = t),
                t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null; )
                n.alternate !== null && (r = n),
                n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function st(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , n = 0
      , r = 0;
    if (t)
        for (var i = e.child; i !== null; )
            n |= i.lanes | i.childLanes,
            r |= 14680064 & i.subtreeFlags,
            r |= 14680064 & i.flags,
            i.return = e,
            i = i.sibling;
    else
        for (i = e.child; i !== null; )
            n |= i.lanes | i.childLanes,
            r |= i.subtreeFlags,
            r |= i.flags,
            i.return = e,
            i = i.sibling;
    return e.subtreeFlags |= r,
    e.childLanes = n,
    t
}
function p_(e, t, n) {
    var r = t.pendingProps;
    switch (Ah(t),
    t.tag) {
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
        return st(t),
        null;
    case 1:
        return _t(t.type) && ic(),
        st(t),
        null;
    case 3:
        return r = t.stateNode,
        mo(),
        ve(Ft),
        ve(ct),
        Uh(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        e !== null && e.child !== null || (Ol(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(256 & t.flags) || (t.flags |= 1024,
        dn !== null && (yh(dn),
        dn = null))),
        fh(e, t),
        st(t),
        null;
    case 5:
        Wh(t);
        var i = ci($a.current);
        if (n = t.type,
        e !== null && t.stateNode != null)
            jx(e, t, n, r, i),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(F(166));
                return st(t),
                null
            }
            if (e = ci(_n.current),
            Ol(t)) {
                r = t.stateNode,
                n = t.type;
                var o = t.memoizedProps;
                switch (r[In] = t,
                r[Ha] = o,
                e = (1 & t.mode) !== 0,
                n) {
                case "dialog":
                    me("cancel", r),
                    me("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    me("load", r);
                    break;
                case "video":
                case "audio":
                    for (i = 0; i < xa.length; i++)
                        me(xa[i], r);
                    break;
                case "source":
                    me("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    me("error", r),
                    me("load", r);
                    break;
                case "details":
                    me("toggle", r);
                    break;
                case "input":
                    o0(r, o),
                    me("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!o.multiple
                    },
                    me("invalid", r);
                    break;
                case "textarea":
                    s0(r, o),
                    me("invalid", r)
                }
                Bd(n, o),
                i = null;
                for (var a in o)
                    if (o.hasOwnProperty(a)) {
                        var s = o[a];
                        a === "children" ? typeof s == "string" ? r.textContent !== s && (o.suppressHydrationWarning !== !0 && Ml(r.textContent, s, e),
                        i = ["children", s]) : typeof s == "number" && r.textContent !== "" + s && (o.suppressHydrationWarning !== !0 && Ml(r.textContent, s, e),
                        i = ["children", "" + s]) : Fa.hasOwnProperty(a) && s != null && a === "onScroll" && me("scroll", r)
                    }
                switch (n) {
                case "input":
                    Sl(r),
                    a0(r, o, !0);
                    break;
                case "textarea":
                    Sl(r),
                    l0(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof o.onClick == "function" && (r.onclick = rc)
                }
                r = i,
                t.updateQueue = r,
                r !== null && (t.flags |= 4)
            } else {
                a = i.nodeType === 9 ? i : i.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = gb(n)),
                e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = a.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = a.createElement(n, {
                    is: r.is
                }) : (e = a.createElement(n),
                n === "select" && (a = e,
                r.multiple ? a.multiple = !0 : r.size && (a.size = r.size))) : e = a.createElementNS(e, n),
                e[In] = t,
                e[Ha] = r,
                $x(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (a = zd(n, r),
                    n) {
                    case "dialog":
                        me("cancel", e),
                        me("close", e),
                        i = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        me("load", e),
                        i = r;
                        break;
                    case "video":
                    case "audio":
                        for (i = 0; i < xa.length; i++)
                            me(xa[i], e);
                        i = r;
                        break;
                    case "source":
                        me("error", e),
                        i = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        me("error", e),
                        me("load", e),
                        i = r;
                        break;
                    case "details":
                        me("toggle", e),
                        i = r;
                        break;
                    case "input":
                        o0(e, r),
                        i = Md(e, r),
                        me("invalid", e);
                        break;
                    case "option":
                        i = r;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        i = Te({}, r, {
                            value: void 0
                        }),
                        me("invalid", e);
                        break;
                    case "textarea":
                        s0(e, r),
                        i = Ad(e, r),
                        me("invalid", e);
                        break;
                    default:
                        i = r
                    }
                    Bd(n, i),
                    s = i;
                    for (o in s)
                        if (s.hasOwnProperty(o)) {
                            var l = s[o];
                            o === "style" ? xb(e, l) : o === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                            l != null && yb(e, l)) : o === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && _a(e, l) : typeof l == "number" && _a(e, "" + l) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Fa.hasOwnProperty(o) ? l != null && o === "onScroll" && me("scroll", e) : l != null && Sh(e, o, l, a))
                        }
                    switch (n) {
                    case "input":
                        Sl(e),
                        a0(e, r, !1);
                        break;
                    case "textarea":
                        Sl(e),
                        l0(e);
                        break;
                    case "option":
                        r.value != null && e.setAttribute("value", "" + _r(r.value));
                        break;
                    case "select":
                        e.multiple = !!r.multiple,
                        o = r.value,
                        o != null ? io(e, !!r.multiple, o, !1) : r.defaultValue != null && io(e, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof i.onClick == "function" && (e.onclick = rc)
                    }
                    switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        r = !!r.autoFocus;
                        break e;
                    case "img":
                        r = !0;
                        break e;
                    default:
                        r = !1
                    }
                }
                r && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return st(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            Wx(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(F(166));
            if (n = ci($a.current),
            ci(_n.current),
            Ol(t)) {
                if (r = t.stateNode,
                n = t.memoizedProps,
                r[In] = t,
                (o = r.nodeValue !== n) && (e = At,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        Ml(r.nodeValue, n, (1 & e.mode) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && Ml(r.nodeValue, n, (1 & e.mode) !== 0)
                    }
                o && (t.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[In] = t,
                t.stateNode = r
        }
        return st(t),
        null;
    case 13:
        if (ve(Ce),
        r = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (be && Dt !== null && 1 & t.mode && !(128 & t.flags))
                sx(),
                ho(),
                t.flags |= 98560,
                o = !1;
            else if (o = Ol(t),
            r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!o)
                        throw Error(F(318));
                    if (o = t.memoizedState,
                    o = o !== null ? o.dehydrated : null,
                    !o)
                        throw Error(F(317));
                    o[In] = t
                } else
                    ho(),
                    !(128 & t.flags) && (t.memoizedState = null),
                    t.flags |= 4;
                st(t),
                o = !1
            } else
                dn !== null && (yh(dn),
                dn = null),
                o = !0;
            if (!o)
                return 65536 & t.flags ? t : null
        }
        return 128 & t.flags ? (t.lanes = n,
        t) : (r = r !== null,
        r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
        1 & t.mode && (e === null || 1 & Ce.current ? je === 0 && (je = 3) : rp())),
        t.updateQueue !== null && (t.flags |= 4),
        st(t),
        null);
    case 4:
        return mo(),
        fh(e, t),
        e === null && Ba(t.stateNode.containerInfo),
        st(t),
        null;
    case 10:
        return Hh(t.type._context),
        st(t),
        null;
    case 17:
        return _t(t.type) && ic(),
        st(t),
        null;
    case 19:
        if (ve(Ce),
        o = t.memoizedState,
        o === null)
            return st(t),
            null;
        if (r = (128 & t.flags) !== 0,
        a = o.rendering,
        a === null)
            if (r)
                pa(o, !1);
            else {
                if (je !== 0 || e !== null && 128 & e.flags)
                    for (e = t.child; e !== null; ) {
                        if (a = fc(e),
                        a !== null) {
                            for (t.flags |= 128,
                            pa(o, !1),
                            r = a.updateQueue,
                            r !== null && (t.updateQueue = r,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child; n !== null; )
                                o = n,
                                e = r,
                                o.flags &= 14680066,
                                a = o.alternate,
                                a === null ? (o.childLanes = 0,
                                o.lanes = e,
                                o.child = null,
                                o.subtreeFlags = 0,
                                o.memoizedProps = null,
                                o.memoizedState = null,
                                o.updateQueue = null,
                                o.dependencies = null,
                                o.stateNode = null) : (o.childLanes = a.childLanes,
                                o.lanes = a.lanes,
                                o.child = a.child,
                                o.subtreeFlags = 0,
                                o.deletions = null,
                                o.memoizedProps = a.memoizedProps,
                                o.memoizedState = a.memoizedState,
                                o.updateQueue = a.updateQueue,
                                o.type = a.type,
                                e = a.dependencies,
                                o.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                n = n.sibling;
                            return de(Ce, 1 & Ce.current | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                o.tail !== null && Ae() > go && (t.flags |= 128,
                r = !0,
                pa(o, !1),
                t.lanes = 4194304)
            }
        else {
            if (!r)
                if (e = fc(a),
                e !== null) {
                    if (t.flags |= 128,
                    r = !0,
                    n = e.updateQueue,
                    n !== null && (t.updateQueue = n,
                    t.flags |= 4),
                    pa(o, !0),
                    o.tail === null && o.tailMode === "hidden" && !a.alternate && !be)
                        return st(t),
                        null
                } else
                    2 * Ae() - o.renderingStartTime > go && n !== 1073741824 && (t.flags |= 128,
                    r = !0,
                    pa(o, !1),
                    t.lanes = 4194304);
            o.isBackwards ? (a.sibling = t.child,
            t.child = a) : (n = o.last,
            n !== null ? n.sibling = a : t.child = a,
            o.last = a)
        }
        return o.tail !== null ? (t = o.tail,
        o.rendering = t,
        o.tail = t.sibling,
        o.renderingStartTime = Ae(),
        t.sibling = null,
        n = Ce.current,
        de(Ce, r ? 1 & n | 2 : 1 & n),
        t) : (st(t),
        null);
    case 22:
    case 23:
        return np(),
        r = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
        r && 1 & t.mode ? 1073741824 & Ot && (st(t),
        6 & t.subtreeFlags && (t.flags |= 8192)) : st(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(F(156, t.tag))
}
function m_(e, t) {
    switch (Ah(t),
    t.tag) {
    case 1:
        return _t(t.type) && ic(),
        e = t.flags,
        65536 & e ? (t.flags = -65537 & e | 128,
        t) : null;
    case 3:
        return mo(),
        ve(Ft),
        ve(ct),
        Uh(),
        e = t.flags,
        65536 & e && !(128 & e) ? (t.flags = -65537 & e | 128,
        t) : null;
    case 5:
        return Wh(t),
        null;
    case 13:
        if (ve(Ce),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(F(340));
            ho()
        }
        return e = t.flags,
        65536 & e ? (t.flags = -65537 & e | 128,
        t) : null;
    case 19:
        return ve(Ce),
        null;
    case 4:
        return mo(),
        null;
    case 10:
        return Hh(t.type._context),
        null;
    case 22:
    case 23:
        return np(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var Vl = !1
  , lt = !1
  , v_ = typeof WeakSet == "function" ? WeakSet : Set
  , D = null;
function no(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                _e(e, t, r)
            }
        else
            n.current = null
}
function Ux(e, t, n) {
    try {
        n()
    } catch (r) {
        _e(e, t, r)
    }
}
var Z0 = !1;
function g_(e, t) {
    if (Kd = ec,
    e = Gb(),
    Oh(e)) {
        if ("selectionStart"in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || _;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var i = r.anchorOffset
                      , o = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                        o.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var a = 0
                      , s = -1
                      , l = -1
                      , c = 0
                      , u = 0
                      , f = e
                      , d = null;
                    t: for (; ; ) {
                        for (var h; f !== n || i !== 0 && f.nodeType !== 3 || (s = a + i),
                        f !== o || r !== 0 && f.nodeType !== 3 || (l = a + r),
                        f.nodeType === 3 && (a += f.nodeValue.length),
                        (h = f.firstChild) !== null; )
                            d = f,
                            f = h;
                        for (; ; ) {
                            if (f === e)
                                break t;
                            if (d === n && ++c === i && (s = a),
                            d === o && ++u === r && (l = a),
                            (h = f.nextSibling) !== null)
                                break;
                            f = d,
                            d = f.parentNode
                        }
                        f = h
                    }
                    n = s === -1 || l === -1 ? null : {
                        start: s,
                        end: l
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (qd = {
        focusedElem: e,
        selectionRange: n
    },
    ec = !1,
    D = t; D !== null; )
        if (t = D,
        e = t.child,
        (1028 & t.subtreeFlags) !== 0 && e !== null)
            e.return = t,
            D = e;
        else
            for (; D !== null; ) {
                t = D;
                try {
                    var g = t.alternate;
                    if (1024 & t.flags)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (g !== null) {
                                var y = g.memoizedProps
                                  , S = g.memoizedState
                                  , m = t.stateNode
                                  , p = m.getSnapshotBeforeUpdate(t.elementType === t.type ? y : un(t.type, y), S);
                                m.__reactInternalSnapshotBeforeUpdate = p
                            }
                            break;
                        case 3:
                            var v = t.stateNode.containerInfo;
                            v.nodeType === 1 ? v.textContent = "" : v.nodeType === 9 && v.documentElement && v.removeChild(v.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(F(163))
                        }
                } catch (x) {
                    _e(t, t.return, x)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    D = e;
                    break
                }
                D = t.return
            }
    return g = Z0,
    Z0 = !1,
    g
}
function Ra(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var i = r = r.next;
        do {
            if ((i.tag & e) === e) {
                var o = i.destroy;
                i.destroy = void 0,
                o !== void 0 && Ux(t, n, o)
            }
            i = i.next
        } while (i !== r)
    }
}
function Rc(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function dh(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
        case 5:
            e = n;
            break;
        default:
            e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function Xx(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    Xx(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[In],
    delete t[Ha],
    delete t[Jd],
    delete t[JF],
    delete t[e_])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function Yx(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function J0(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || Yx(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (2 & e.flags || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(2 & e.flags))
            return e.stateNode
    }
}
function hh(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
        t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = rc));
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (hh(e, t, n),
        e = e.sibling; e !== null; )
            hh(e, t, n),
            e = e.sibling
}
function ph(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (ph(e, t, n),
        e = e.sibling; e !== null; )
            ph(e, t, n),
            e = e.sibling
}
var Qe = null
  , fn = !1;
function vr(e, t, n) {
    for (n = n.child; n !== null; )
        Gx(e, t, n),
        n = n.sibling
}
function Gx(e, t, n) {
    if (Fn && typeof Fn.onCommitFiberUnmount == "function")
        try {
            Fn.onCommitFiberUnmount(bc, n)
        } catch {}
    switch (n.tag) {
    case 5:
        lt || no(n, t);
    case 6:
        var r = Qe
          , i = fn;
        Qe = null,
        vr(e, t, n),
        Qe = r,
        fn = i,
        Qe !== null && (fn ? (e = Qe,
        n = n.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Qe.removeChild(n.stateNode));
        break;
    case 18:
        Qe !== null && (fn ? (e = Qe,
        n = n.stateNode,
        e.nodeType === 8 ? yd(e.parentNode, n) : e.nodeType === 1 && yd(e, n),
        Da(e)) : yd(Qe, n.stateNode));
        break;
    case 4:
        r = Qe,
        i = fn,
        Qe = n.stateNode.containerInfo,
        fn = !0,
        vr(e, t, n),
        Qe = r,
        fn = i;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!lt && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            i = r = r.next;
            do {
                var o = i
                  , a = o.destroy;
                o = o.tag,
                a !== void 0 && (2 & o || 4 & o) && Ux(n, t, a),
                i = i.next
            } while (i !== r)
        }
        vr(e, t, n);
        break;
    case 1:
        if (!lt && (no(n, t),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (s) {
                _e(n, t, s)
            }
        vr(e, t, n);
        break;
    case 21:
        vr(e, t, n);
        break;
    case 22:
        1 & n.mode ? (lt = (r = lt) || n.memoizedState !== null,
        vr(e, t, n),
        lt = r) : vr(e, t, n);
        break;
    default:
        vr(e, t, n)
    }
}
function eb(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new v_),
        t.forEach(function(r) {
            var i = E_.bind(null, e, r);
            n.has(r) || (n.add(r),
            r.then(i, i))
        })
    }
}
function cn(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var i = n[r];
            try {
                var o = e
                  , a = t
                  , s = a;
                e: for (; s !== null; ) {
                    switch (s.tag) {
                    case 5:
                        Qe = s.stateNode,
                        fn = !1;
                        break e;
                    case 3:
                        Qe = s.stateNode.containerInfo,
                        fn = !0;
                        break e;
                    case 4:
                        Qe = s.stateNode.containerInfo,
                        fn = !0;
                        break e
                    }
                    s = s.return
                }
                if (Qe === null)
                    throw Error(F(160));
                Gx(o, a, i),
                Qe = null,
                fn = !1;
                var l = i.alternate;
                l !== null && (l.return = null),
                i.return = null
            } catch (c) {
                _e(i, t, c)
            }
        }
    if (12854 & t.subtreeFlags)
        for (t = t.child; t !== null; )
            Kx(t, e),
            t = t.sibling
}
function Kx(e, t) {
    var n = e.alternate
      , r = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (cn(t, e),
        Rn(e),
        4 & r) {
            try {
                Ra(3, e, e.return),
                Rc(3, e)
            } catch (y) {
                _e(e, e.return, y)
            }
            try {
                Ra(5, e, e.return)
            } catch (y) {
                _e(e, e.return, y)
            }
        }
        break;
    case 1:
        cn(t, e),
        Rn(e),
        512 & r && n !== null && no(n, n.return);
        break;
    case 5:
        if (cn(t, e),
        Rn(e),
        512 & r && n !== null && no(n, n.return),
        32 & e.flags) {
            var i = e.stateNode;
            try {
                _a(i, "")
            } catch (y) {
                _e(e, e.return, y)
            }
        }
        if (4 & r && (i = e.stateNode,
        i != null)) {
            var o = e.memoizedProps
              , a = n !== null ? n.memoizedProps : o
              , s = e.type
              , l = e.updateQueue;
            if (e.updateQueue = null,
            l !== null)
                try {
                    s === "input" && o.type === "radio" && o.name != null && mb(i, o),
                    zd(s, a);
                    var c = zd(s, o);
                    for (a = 0; a < l.length; a += 2) {
                        var u = l[a]
                          , f = l[a + 1];
                        u === "style" ? xb(i, f) : u === "dangerouslySetInnerHTML" ? yb(i, f) : u === "children" ? _a(i, f) : Sh(i, u, f, c)
                    }
                    switch (s) {
                    case "input":
                        Od(i, o);
                        break;
                    case "textarea":
                        vb(i, o);
                        break;
                    case "select":
                        var d = i._wrapperState.wasMultiple;
                        i._wrapperState.wasMultiple = !!o.multiple;
                        var h = o.value;
                        h != null ? io(i, !!o.multiple, h, !1) : d !== !!o.multiple && (o.defaultValue != null ? io(i, !!o.multiple, o.defaultValue, !0) : io(i, !!o.multiple, o.multiple ? [] : "", !1))
                    }
                    i[Ha] = o
                } catch (y) {
                    _e(e, e.return, y)
                }
        }
        break;
    case 6:
        if (cn(t, e),
        Rn(e),
        4 & r) {
            if (e.stateNode === null)
                throw Error(F(162));
            i = e.stateNode,
            o = e.memoizedProps;
            try {
                i.nodeValue = o
            } catch (y) {
                _e(e, e.return, y)
            }
        }
        break;
    case 3:
        if (cn(t, e),
        Rn(e),
        4 & r && n !== null && n.memoizedState.isDehydrated)
            try {
                Da(t.containerInfo)
            } catch (y) {
                _e(e, e.return, y)
            }
        break;
    case 4:
        cn(t, e),
        Rn(e);
        break;
    case 13:
        cn(t, e),
        Rn(e),
        i = e.child,
        8192 & i.flags && (o = i.memoizedState !== null,
        i.stateNode.isHidden = o,
        !o || i.alternate !== null && i.alternate.memoizedState !== null || (ep = Ae())),
        4 & r && eb(e);
        break;
    case 22:
        if (u = n !== null && n.memoizedState !== null,
        1 & e.mode ? (lt = (c = lt) || u,
        cn(t, e),
        lt = c) : cn(t, e),
        Rn(e),
        8192 & r) {
            if (c = e.memoizedState !== null,
            (e.stateNode.isHidden = c) && !u && 1 & e.mode)
                for (D = e,
                u = e.child; u !== null; ) {
                    for (f = D = u; D !== null; ) {
                        switch (d = D,
                        h = d.child,
                        d.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            Ra(4, d, d.return);
                            break;
                        case 1:
                            no(d, d.return);
                            var g = d.stateNode;
                            if (typeof g.componentWillUnmount == "function") {
                                r = d,
                                n = d.return;
                                try {
                                    t = r,
                                    g.props = t.memoizedProps,
                                    g.state = t.memoizedState,
                                    g.componentWillUnmount()
                                } catch (y) {
                                    _e(r, n, y)
                                }
                            }
                            break;
                        case 5:
                            no(d, d.return);
                            break;
                        case 22:
                            if (d.memoizedState !== null) {
                                nb(f);
                                continue
                            }
                        }
                        h !== null ? (h.return = d,
                        D = h) : nb(f)
                    }
                    u = u.sibling
                }
            e: for (u = null,
            f = e; ; ) {
                if (f.tag === 5) {
                    if (u === null) {
                        u = f;
                        try {
                            i = f.stateNode,
                            c ? (o = i.style,
                            typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (s = f.stateNode,
                            l = f.memoizedProps.style,
                            a = l != null && l.hasOwnProperty("display") ? l.display : null,
                            s.style.display = bb("display", a))
                        } catch (y) {
                            _e(e, e.return, y)
                        }
                    }
                } else if (f.tag === 6) {
                    if (u === null)
                        try {
                            f.stateNode.nodeValue = c ? "" : f.memoizedProps
                        } catch (y) {
                            _e(e, e.return, y)
                        }
                } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === e) && f.child !== null) {
                    f.child.return = f,
                    f = f.child;
                    continue
                }
                if (f === e)
                    break e;
                for (; f.sibling === null; ) {
                    if (f.return === null || f.return === e)
                        break e;
                    u === f && (u = null),
                    f = f.return
                }
                u === f && (u = null),
                f.sibling.return = f.return,
                f = f.sibling
            }
        }
        break;
    case 19:
        cn(t, e),
        Rn(e),
        4 & r && eb(e);
        break;
    case 21:
        break;
    default:
        cn(t, e),
        Rn(e)
    }
}
function Rn(e) {
    var t = e.flags;
    if (2 & t) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (Yx(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(F(160))
            }
            switch (r.tag) {
            case 5:
                var i = r.stateNode;
                32 & r.flags && (_a(i, ""),
                r.flags &= -33);
                var o = J0(e);
                ph(e, o, i);
                break;
            case 3:
            case 4:
                var a = r.stateNode.containerInfo
                  , s = J0(e);
                hh(e, s, a);
                break;
            default:
                throw Error(F(161))
            }
        } catch (l) {
            _e(e, e.return, l)
        }
        e.flags &= -3
    }
    4096 & t && (e.flags &= -4097)
}
function y_(e, t, n) {
    D = e,
    qx(e, t, n)
}
function qx(e, t, n) {
    for (var r = (1 & e.mode) !== 0; D !== null; ) {
        var i = D
          , o = i.child;
        if (i.tag === 22 && r) {
            var a = i.memoizedState !== null || Vl;
            if (!a) {
                var s = i.alternate
                  , l = s !== null && s.memoizedState !== null || lt;
                s = Vl;
                var c = lt;
                if (Vl = a,
                (lt = l) && !c)
                    for (D = i; D !== null; )
                        a = D,
                        l = a.child,
                        a.tag === 22 && a.memoizedState !== null ? rb(i) : l !== null ? (l.return = a,
                        D = l) : rb(i);
                for (; o !== null; )
                    D = o,
                    qx(o, t, n),
                    o = o.sibling;
                D = i,
                Vl = s,
                lt = c
            }
            tb(e, t, n)
        } else
            8772 & i.subtreeFlags && o !== null ? (o.return = i,
            D = o) : tb(e, t, n)
    }
}
function tb(e) {
    for (; D !== null; ) {
        var t = D;
        if (8772 & t.flags) {
            var n = t.alternate;
            try {
                if (8772 & t.flags)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        lt || Rc(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (4 & t.flags && !lt)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var i = t.elementType === t.type ? n.memoizedProps : un(t.type, n.memoizedProps);
                                r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var o = t.updateQueue;
                        o !== null && B0(t, o, r);
                        break;
                    case 3:
                        var a = t.updateQueue;
                        if (a !== null) {
                            if (n = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                                }
                            B0(t, a, n)
                        }
                        break;
                    case 5:
                        var s = t.stateNode;
                        if (n === null && 4 & t.flags) {
                            n = s;
                            var l = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                l.autoFocus && n.focus();
                                break;
                            case "img":
                                l.src && (n.src = l.src)
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
                        if (t.memoizedState === null) {
                            var c = t.alternate;
                            if (c !== null) {
                                var u = c.memoizedState;
                                if (u !== null) {
                                    var f = u.dehydrated;
                                    f !== null && Da(f)
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
                        throw Error(F(163))
                    }
                lt || 512 & t.flags && dh(t)
            } catch (d) {
                _e(t, t.return, d)
            }
        }
        if (t === e) {
            D = null;
            break
        }
        if (n = t.sibling,
        n !== null) {
            n.return = t.return,
            D = n;
            break
        }
        D = t.return
    }
}
function nb(e) {
    for (; D !== null; ) {
        var t = D;
        if (t === e) {
            D = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
            D = n;
            break
        }
        D = t.return
    }
}
function rb(e) {
    for (; D !== null; ) {
        var t = D;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    Rc(4, t)
                } catch (l) {
                    _e(t, n, l)
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var i = t.return;
                    try {
                        r.componentDidMount()
                    } catch (l) {
                        _e(t, i, l)
                    }
                }
                var o = t.return;
                try {
                    dh(t)
                } catch (l) {
                    _e(t, o, l)
                }
                break;
            case 5:
                var a = t.return;
                try {
                    dh(t)
                } catch (l) {
                    _e(t, a, l)
                }
            }
        } catch (l) {
            _e(t, t.return, l)
        }
        if (t === e) {
            D = null;
            break
        }
        var s = t.sibling;
        if (s !== null) {
            s.return = t.return,
            D = s;
            break
        }
        D = t.return
    }
}
var b_ = Math.ceil
  , pc = rr.ReactCurrentDispatcher
  , Zh = rr.ReactCurrentOwner
  , Jt = rr.ReactCurrentBatchConfig
  , ie = 0
  , Xe = null
  , ze = null
  , Ze = 0
  , Ot = 0
  , ro = Or(0)
  , je = 0
  , Xa = null
  , mi = 0
  , Pc = 0
  , Jh = 0
  , Pa = null
  , Pt = null
  , ep = 0
  , go = 1 / 0
  , Gn = null
  , mc = !1
  , mh = null
  , Pr = null
  , Bl = !1
  , wr = null
  , vc = 0
  , Ia = 0
  , vh = null
  , Xl = -1
  , Yl = 0;
function mt() {
    return 6 & ie ? Ae() : Xl !== -1 ? Xl : Xl = Ae()
}
function Ir(e) {
    return 1 & e.mode ? 2 & ie && Ze !== 0 ? Ze & -Ze : n_.transition !== null ? (Yl === 0 && (Yl = Lb()),
    Yl) : (e = se,
    e !== 0 || (e = _.event,
    e = e === void 0 ? 16 : zb(e.type)),
    e) : 1
}
function pn(e, t, n, r) {
    if (50 < Ia)
        throw Ia = 0,
        vh = null,
        Error(F(185));
    Ya(e, n, r),
    2 & ie && e === Xe || (e === Xe && (!(2 & ie) && (Pc |= n),
    je === 4 && xr(e, Ze)),
    Lt(e, r),
    n === 1 && ie === 0 && !(1 & t.mode) && (go = Ae() + 500,
    kc && Dr()))
}
function Lt(e, t) {
    var n = e.callbackNode;
    iF(e, t);
    var r = Jl(e, e === Xe ? Ze : 0);
    if (r === 0)
        n !== null && f0(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = r & -r,
    e.callbackPriority !== t) {
        if (n != null && f0(n),
        t === 1)
            e.tag === 0 ? t_(ib.bind(null, e)) : ix(ib.bind(null, e)),
            QF(function() {
                !(6 & ie) && Dr()
            }),
            n = null;
        else {
            switch (Mb(r)) {
            case 1:
                n = Eh;
                break;
            case 4:
                n = Fb;
                break;
            case 16:
                n = Zl;
                break;
            case 536870912:
                n = _b;
                break;
            default:
                n = Zl
            }
            n = i1(n, Qx.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = n
    }
}
function Qx(e, t) {
    if (Xl = -1,
    Yl = 0,
    6 & ie)
        throw Error(F(327));
    var n = e.callbackNode;
    if (co() && e.callbackNode !== n)
        return null;
    var r = Jl(e, e === Xe ? Ze : 0);
    if (r === 0)
        return null;
    if (30 & r || r & e.expiredLanes || t)
        t = gc(e, r);
    else {
        t = r;
        var i = ie;
        ie |= 2;
        var o = Jx();
        Xe === e && Ze === t || (Gn = null,
        go = Ae() + 500,
        ui(e, t));
        do
            try {
                w_();
                break
            } catch (s) {
                Zx(e, s)
            }
        while (1);
        zh(),
        pc.current = o,
        ie = i,
        ze !== null ? t = 0 : (Xe = null,
        Ze = 0,
        t = je)
    }
    if (t !== 0) {
        if (t === 2 && (i = Wd(e),
        i !== 0 && (r = i,
        t = gh(e, i))),
        t === 1)
            throw n = Xa,
            ui(e, 0),
            xr(e, r),
            Lt(e, Ae()),
            n;
        if (t === 6)
            xr(e, r);
        else {
            if (i = e.current.alternate,
            !(30 & r) && !x_(i) && (t = gc(e, r),
            t === 2 && (o = Wd(e),
            o !== 0 && (r = o,
            t = gh(e, o))),
            t === 1))
                throw n = Xa,
                ui(e, 0),
                xr(e, r),
                Lt(e, Ae()),
                n;
            switch (e.finishedWork = i,
            e.finishedLanes = r,
            t) {
            case 0:
            case 1:
                throw Error(F(345));
            case 2:
                ai(e, Pt, Gn);
                break;
            case 3:
                if (xr(e, r),
                (130023424 & r) === r && (t = ep + 500 - Ae(),
                10 < t)) {
                    if (Jl(e, 0) !== 0)
                        break;
                    if (i = e.suspendedLanes,
                    (i & r) !== r) {
                        mt(),
                        e.pingedLanes |= e.suspendedLanes & i;
                        break
                    }
                    e.timeoutHandle = Zd(ai.bind(null, e, Pt, Gn), t);
                    break
                }
                ai(e, Pt, Gn);
                break;
            case 4:
                if (xr(e, r),
                (4194240 & r) === r)
                    break;
                for (t = e.eventTimes,
                i = -1; 0 < r; ) {
                    var a = 31 - hn(r);
                    o = 1 << a,
                    a = t[a],
                    a > i && (i = a),
                    r &= ~o
                }
                if (r = i,
                r = Ae() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * b_(r / 1960)) - r,
                10 < r) {
                    e.timeoutHandle = Zd(ai.bind(null, e, Pt, Gn), r);
                    break
                }
                ai(e, Pt, Gn);
                break;
            case 5:
                ai(e, Pt, Gn);
                break;
            default:
                throw Error(F(329))
            }
        }
    }
    return Lt(e, Ae()),
    e.callbackNode === n ? Qx.bind(null, e) : null
}
function gh(e, t) {
    var n = Pa;
    return e.current.memoizedState.isDehydrated && (ui(e, t).flags |= 256),
    e = gc(e, t),
    e !== 2 && (t = Pt,
    Pt = n,
    t !== null && yh(t)),
    e
}
function yh(e) {
    Pt === null ? Pt = e : Pt.push.apply(Pt, e)
}
function x_(e) {
    for (var t = e; ; ) {
        if (16384 & t.flags) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var r = 0; r < n.length; r++) {
                    var i = n[r]
                      , o = i.getSnapshot;
                    i = i.value;
                    try {
                        if (!mn(o(), i))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
        16384 & t.subtreeFlags && n !== null)
            n.return = t,
            t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function xr(e, t) {
    for (t &= ~Jh,
    t &= ~Pc,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var n = 31 - hn(t)
          , r = 1 << n;
        e[n] = -1,
        t &= ~r
    }
}
function ib(e) {
    if (6 & ie)
        throw Error(F(327));
    co();
    var t = Jl(e, 0);
    if (!(1 & t))
        return Lt(e, Ae()),
        null;
    var n = gc(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = Wd(e);
        r !== 0 && (t = r,
        n = gh(e, r))
    }
    if (n === 1)
        throw n = Xa,
        ui(e, 0),
        xr(e, t),
        Lt(e, Ae()),
        n;
    if (n === 6)
        throw Error(F(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    ai(e, Pt, Gn),
    Lt(e, Ae()),
    null
}
function tp(e, t) {
    var n = ie;
    ie |= 1;
    try {
        return e(t)
    } finally {
        ie = n,
        ie === 0 && (go = Ae() + 500,
        kc && Dr())
    }
}
function vi(e) {
    wr !== null && wr.tag === 0 && !(6 & ie) && co();
    var t = ie;
    ie |= 1;
    var n = Jt.transition
      , r = se;
    try {
        if (Jt.transition = null,
        se = 1,
        e)
            return e()
    } finally {
        se = r,
        Jt.transition = n,
        ie = t,
        !(6 & ie) && Dr()
    }
}
function np() {
    Ot = ro.current,
    ve(ro)
}
function ui(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
    qF(n)),
    ze !== null)
        for (n = ze.return; n !== null; ) {
            var r = n;
            switch (Ah(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && ic();
                break;
            case 3:
                mo(),
                ve(Ft),
                ve(ct),
                Uh();
                break;
            case 5:
                Wh(r);
                break;
            case 4:
                mo();
                break;
            case 13:
                ve(Ce);
                break;
            case 19:
                ve(Ce);
                break;
            case 10:
                Hh(r.type._context);
                break;
            case 22:
            case 23:
                np()
            }
            n = n.return
        }
    if (Xe = e,
    ze = e = Fr(e.current, null),
    Ze = Ot = t,
    je = 0,
    Xa = null,
    Jh = Pc = mi = 0,
    Pt = Pa = null,
    li !== null) {
        for (t = 0; t < li.length; t++)
            if (n = li[t],
            r = n.interleaved,
            r !== null) {
                n.interleaved = null;
                var i = r.next
                  , o = n.pending;
                if (o !== null) {
                    var a = o.next;
                    o.next = i,
                    r.next = a
                }
                n.pending = r
            }
        li = null
    }
    return e
}
function Zx(e, t) {
    do {
        var n = ze;
        try {
            if (zh(),
            jl.current = hc,
            dc) {
                for (var r = ke.memoizedState; r !== null; ) {
                    var i = r.queue;
                    i !== null && (i.pending = null),
                    r = r.next
                }
                dc = !1
            }
            if (pi = 0,
            Ue = $e = ke = null,
            Ea = !1,
            ja = 0,
            Zh.current = null,
            n === null || n.return === null) {
                je = 1,
                Xa = t,
                ze = null;
                break
            }
            e: {
                var o = e
                  , a = n.return
                  , s = n
                  , l = t;
                if (t = Ze,
                s.flags |= 32768,
                l !== null && typeof l == "object" && typeof l.then == "function") {
                    var c = l
                      , u = s
                      , f = u.tag;
                    if (!(1 & u.mode) && (f === 0 || f === 11 || f === 15)) {
                        var d = u.alternate;
                        d ? (u.updateQueue = d.updateQueue,
                        u.memoizedState = d.memoizedState,
                        u.lanes = d.lanes) : (u.updateQueue = null,
                        u.memoizedState = null)
                    }
                    var h = U0(a);
                    if (h !== null) {
                        h.flags &= -257,
                        X0(h, a, s, o, t),
                        1 & h.mode && W0(o, c, t),
                        t = h,
                        l = c;
                        var g = t.updateQueue;
                        if (g === null) {
                            var y = new Set;
                            y.add(l),
                            t.updateQueue = y
                        } else
                            g.add(l);
                        break e
                    }
                    if (!(1 & t)) {
                        W0(o, c, t),
                        rp();
                        break e
                    }
                    l = Error(F(426))
                } else if (be && 1 & s.mode) {
                    var S = U0(a);
                    if (S !== null) {
                        !(65536 & S.flags) && (S.flags |= 256),
                        X0(S, a, s, o, t),
                        Vh(vo(l, s));
                        break e
                    }
                }
                o = l = vo(l, s),
                je !== 4 && (je = 2),
                Pa === null ? Pa = [o] : Pa.push(o),
                o = a;
                do {
                    switch (o.tag) {
                    case 3:
                        o.flags |= 65536,
                        t &= -t,
                        o.lanes |= t;
                        var m = Ox(o, l, t);
                        V0(o, m);
                        break e;
                    case 1:
                        s = l;
                        var p = o.type
                          , v = o.stateNode;
                        if (!(128 & o.flags) && (typeof p.getDerivedStateFromError == "function" || v !== null && typeof v.componentDidCatch == "function" && (Pr === null || !Pr.has(v)))) {
                            o.flags |= 65536,
                            t &= -t,
                            o.lanes |= t;
                            var x = Dx(o, s, t);
                            V0(o, x);
                            break e
                        }
                    }
                    o = o.return
                } while (o !== null)
            }
            t1(n)
        } catch (C) {
            t = C,
            ze === n && n !== null && (ze = n = n.return);
            continue
        }
        break
    } while (1)
}
function Jx() {
    var e = pc.current;
    return pc.current = hc,
    e === null ? hc : e
}
function rp() {
    je !== 0 && je !== 3 && je !== 2 || (je = 4),
    Xe === null || !(268435455 & mi) && !(268435455 & Pc) || xr(Xe, Ze)
}
function gc(e, t) {
    var n = ie;
    ie |= 2;
    var r = Jx();
    Xe === e && Ze === t || (Gn = null,
    ui(e, t));
    do
        try {
            S_();
            break
        } catch (i) {
            Zx(e, i)
        }
    while (1);
    if (zh(),
    ie = n,
    pc.current = r,
    ze !== null)
        throw Error(F(261));
    return Xe = null,
    Ze = 0,
    je
}
function S_() {
    for (; ze !== null; )
        e1(ze)
}
function w_() {
    for (; ze !== null && !KI(); )
        e1(ze)
}
function e1(e) {
    var t = r1(e.alternate, e, Ot);
    e.memoizedProps = e.pendingProps,
    t === null ? t1(e) : ze = t,
    Zh.current = null
}
function t1(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
        32768 & t.flags) {
            if (n = m_(n, t),
            n !== null) {
                n.flags &= 32767,
                ze = n;
                return
            }
            if (e === null) {
                je = 6,
                ze = null;
                return
            }
            e.flags |= 32768,
            e.subtreeFlags = 0,
            e.deletions = null
        } else if (n = p_(n, t, Ot),
        n !== null) {
            ze = n;
            return
        }
        if (t = t.sibling,
        t !== null) {
            ze = t;
            return
        }
        ze = t = e
    } while (t !== null);
    je === 0 && (je = 5)
}
function ai(e, t, n) {
    var r = se
      , i = Jt.transition;
    try {
        Jt.transition = null,
        se = 1,
        C_(e, t, n, r)
    } finally {
        Jt.transition = i,
        se = r
    }
    return null
}
function C_(e, t, n, r) {
    do
        co();
    while (wr !== null);
    if (6 & ie)
        throw Error(F(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
        throw Error(F(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (oF(e, o),
    e === Xe && (ze = Xe = null,
    Ze = 0),
    !(2064 & n.subtreeFlags) && !(2064 & n.flags) || Bl || (Bl = !0,
    i1(Zl, function() {
        return co(),
        null
    })),
    o = (15990 & n.flags) !== 0,
    15990 & n.subtreeFlags || o) {
        o = Jt.transition,
        Jt.transition = null;
        var a = se;
        se = 1;
        var s = ie;
        ie |= 4,
        Zh.current = null,
        g_(e, n),
        Kx(n, e),
        UF(qd),
        ec = !!Kd,
        qd = Kd = null,
        e.current = n,
        y_(n, e, i),
        qI(),
        ie = s,
        se = a,
        Jt.transition = o
    } else
        e.current = n;
    if (Bl && (Bl = !1,
    wr = e,
    vc = i),
    o = e.pendingLanes,
    o === 0 && (Pr = null),
    JI(n.stateNode, r),
    Lt(e, Ae()),
    t !== null)
        for (r = e.onRecoverableError,
        n = 0; n < t.length; n++)
            i = t[n],
            r(i.value, {
                componentStack: i.stack,
                digest: i.digest
            });
    if (mc)
        throw mc = !1,
        e = mh,
        mh = null,
        e;
    return 1 & vc && e.tag !== 0 && co(),
    o = e.pendingLanes,
    1 & o ? e === vh ? Ia++ : (Ia = 0,
    vh = e) : Ia = 0,
    Dr(),
    null
}
function co() {
    if (wr !== null) {
        var e = Mb(vc)
          , t = Jt.transition
          , n = se;
        try {
            if (Jt.transition = null,
            se = 16 > e ? 16 : e,
            wr === null)
                var r = !1;
            else {
                if (e = wr,
                wr = null,
                vc = 0,
                6 & ie)
                    throw Error(F(331));
                var i = ie;
                for (ie |= 4,
                D = e.current; D !== null; ) {
                    var o = D
                      , a = o.child;
                    if (16 & D.flags) {
                        var s = o.deletions;
                        if (s !== null) {
                            for (var l = 0; l < s.length; l++) {
                                var c = s[l];
                                for (D = c; D !== null; ) {
                                    var u = D;
                                    switch (u.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Ra(8, u, o)
                                    }
                                    var f = u.child;
                                    if (f !== null)
                                        f.return = u,
                                        D = f;
                                    else
                                        for (; D !== null; ) {
                                            u = D;
                                            var d = u.sibling
                                              , h = u.return;
                                            if (Xx(u),
                                            u === c) {
                                                D = null;
                                                break
                                            }
                                            if (d !== null) {
                                                d.return = h,
                                                D = d;
                                                break
                                            }
                                            D = h
                                        }
                                }
                            }
                            var g = o.alternate;
                            if (g !== null) {
                                var y = g.child;
                                if (y !== null) {
                                    g.child = null;
                                    do {
                                        var S = y.sibling;
                                        y.sibling = null,
                                        y = S
                                    } while (y !== null)
                                }
                            }
                            D = o
                        }
                    }
                    if (2064 & o.subtreeFlags && a !== null)
                        a.return = o,
                        D = a;
                    else
                        e: for (; D !== null; ) {
                            if (o = D,
                            2048 & o.flags)
                                switch (o.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Ra(9, o, o.return)
                                }
                            var m = o.sibling;
                            if (m !== null) {
                                m.return = o.return,
                                D = m;
                                break e
                            }
                            D = o.return
                        }
                }
                var p = e.current;
                for (D = p; D !== null; ) {
                    a = D;
                    var v = a.child;
                    if (2064 & a.subtreeFlags && v !== null)
                        v.return = a,
                        D = v;
                    else
                        e: for (a = p; D !== null; ) {
                            if (s = D,
                            2048 & s.flags)
                                try {
                                    switch (s.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Rc(9, s)
                                    }
                                } catch (C) {
                                    _e(s, s.return, C)
                                }
                            if (s === a) {
                                D = null;
                                break e
                            }
                            var x = s.sibling;
                            if (x !== null) {
                                x.return = s.return,
                                D = x;
                                break e
                            }
                            D = s.return
                        }
                }
                if (ie = i,
                Dr(),
                Fn && typeof Fn.onPostCommitFiberRoot == "function")
                    try {
                        Fn.onPostCommitFiberRoot(bc, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            se = n,
            Jt.transition = t
        }
    }
    return !1
}
function ob(e, t, n) {
    t = vo(n, t),
    t = Ox(e, t, 1),
    e = Rr(e, t, 1),
    t = mt(),
    e !== null && (Ya(e, 1, t),
    Lt(e, t))
}
function _e(e, t, n) {
    if (e.tag === 3)
        ob(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                ob(t, e, n);
                break
            }
            if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Pr === null || !Pr.has(r))) {
                    e = vo(n, e),
                    e = Dx(t, e, 1),
                    t = Rr(t, e, 1),
                    e = mt(),
                    t !== null && (Ya(t, 1, e),
                    Lt(t, e));
                    break
                }
            }
            t = t.return
        }
}
function k_(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
    t = mt(),
    e.pingedLanes |= e.suspendedLanes & n,
    Xe === e && (Ze & n) === n && (je === 4 || je === 3 && (130023424 & Ze) === Ze && 500 > Ae() - ep ? ui(e, 0) : Jh |= n),
    Lt(e, t)
}
function n1(e, t) {
    t === 0 && (1 & e.mode ? (t = kl,
    kl <<= 1,
    !(130023424 & kl) && (kl = 4194304)) : t = 1);
    var n = mt();
    e = tr(e, t),
    e !== null && (Ya(e, t, n),
    Lt(e, n))
}
function T_(e) {
    var t = e.memoizedState
      , n = 0;
    t !== null && (n = t.retryLane),
    n1(e, n)
}
function E_(e, t) {
    var n = 0;
    switch (e.tag) {
    case 13:
        var r = e.stateNode
          , i = e.memoizedState;
        i !== null && (n = i.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default:
        throw Error(F(314))
    }
    r !== null && r.delete(t),
    n1(e, n)
}
var r1;
r1 = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Ft.current)
            It = !0;
        else {
            if (!(e.lanes & n) && !(128 & t.flags))
                return It = !1,
                h_(e, t, n);
            It = (131072 & e.flags) !== 0
        }
    else
        It = !1,
        be && 1048576 & t.flags && ox(t, sc, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var r = t.type;
        Ul(e, t),
        e = t.pendingProps;
        var i = fo(t, ct.current);
        lo(t, n),
        i = Yh(null, t, r, e, i, n);
        var o = Gh();
        return t.flags |= 1,
        typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        _t(r) ? (o = !0,
        oc(t)) : o = !1,
        t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null,
        $h(t),
        i.updater = Tc,
        t.stateNode = i,
        i._reactInternals = t,
        oh(t, r, e, n),
        t = lh(null, t, r, !0, o, n)) : (t.tag = 0,
        be && o && Dh(t),
        pt(null, t, i, n),
        t = t.child),
        t;
    case 16:
        r = t.elementType;
        e: {
            switch (Ul(e, t),
            e = t.pendingProps,
            i = r._init,
            r = i(r._payload),
            t.type = r,
            i = t.tag = P_(r),
            e = un(r, e),
            i) {
            case 0:
                t = sh(null, t, r, e, n);
                break e;
            case 1:
                t = K0(null, t, r, e, n);
                break e;
            case 11:
                t = Y0(null, t, r, e, n);
                break e;
            case 14:
                t = G0(null, t, r, un(r.type, e), n);
                break e
            }
            throw Error(F(306, r, ""))
        }
        return t;
    case 0:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : un(r, i),
        sh(e, t, r, i, n);
    case 1:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : un(r, i),
        K0(e, t, r, i, n);
    case 3:
        e: {
            if (zx(t),
            e === null)
                throw Error(F(387));
            r = t.pendingProps,
            o = t.memoizedState,
            i = o.element,
            cx(e, t),
            uc(t, r, null, n);
            var a = t.memoizedState;
            if (r = a.element,
            o.isDehydrated) {
                if (o = {
                    element: r,
                    isDehydrated: !1,
                    cache: a.cache,
                    pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
                    transitions: a.transitions
                },
                t.updateQueue.baseState = o,
                t.memoizedState = o,
                256 & t.flags) {
                    i = vo(Error(F(423)), t),
                    t = q0(e, t, r, n, i);
                    break e
                }
                if (r !== i) {
                    i = vo(Error(F(424)), t),
                    t = q0(e, t, r, n, i);
                    break e
                }
                for (Dt = Er(t.stateNode.containerInfo.firstChild),
                At = t,
                be = !0,
                dn = null,
                n = hx(t, null, r, n),
                t.child = n; n; )
                    n.flags = -3 & n.flags | 4096,
                    n = n.sibling
            } else {
                if (ho(),
                r === i) {
                    t = nr(e, t, n);
                    break e
                }
                pt(e, t, r, n)
            }
            t = t.child
        }
        return t;
    case 5:
        return px(t),
        e === null && nh(t),
        r = t.type,
        i = t.pendingProps,
        o = e !== null ? e.memoizedProps : null,
        a = i.children,
        Qd(r, i) ? a = null : o !== null && Qd(r, o) && (t.flags |= 32),
        Bx(e, t),
        pt(e, t, a, n),
        t.child;
    case 6:
        return e === null && nh(t),
        null;
    case 13:
        return Hx(e, t, n);
    case 4:
        return jh(t, t.stateNode.containerInfo),
        r = t.pendingProps,
        e === null ? t.child = po(t, null, r, n) : pt(e, t, r, n),
        t.child;
    case 11:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : un(r, i),
        Y0(e, t, r, i, n);
    case 7:
        return pt(e, t, t.pendingProps, n),
        t.child;
    case 8:
        return pt(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
        return pt(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
        e: {
            if (r = t.type._context,
            i = t.pendingProps,
            o = t.memoizedProps,
            a = i.value,
            de(lc, r._currentValue),
            r._currentValue = a,
            o !== null)
                if (mn(o.value, a)) {
                    if (o.children === i.children && !Ft.current) {
                        t = nr(e, t, n);
                        break e
                    }
                } else
                    for (o = t.child,
                    o !== null && (o.return = t); o !== null; ) {
                        var s = o.dependencies;
                        if (s !== null) {
                            a = o.child;
                            for (var l = s.firstContext; l !== null; ) {
                                if (l.context === r) {
                                    if (o.tag === 1) {
                                        l = Zn(-1, n & -n),
                                        l.tag = 2;
                                        var c = o.updateQueue;
                                        if (c !== null) {
                                            c = c.shared;
                                            var u = c.pending;
                                            u === null ? l.next = l : (l.next = u.next,
                                            u.next = l),
                                            c.pending = l
                                        }
                                    }
                                    o.lanes |= n,
                                    l = o.alternate,
                                    l !== null && (l.lanes |= n),
                                    rh(o.return, n, t),
                                    s.lanes |= n;
                                    break
                                }
                                l = l.next
                            }
                        } else if (o.tag === 10)
                            a = o.type === t.type ? null : o.child;
                        else if (o.tag === 18) {
                            if (a = o.return,
                            a === null)
                                throw Error(F(341));
                            a.lanes |= n,
                            s = a.alternate,
                            s !== null && (s.lanes |= n),
                            rh(a, n, t),
                            a = o.sibling
                        } else
                            a = o.child;
                        if (a !== null)
                            a.return = o;
                        else
                            for (a = o; a !== null; ) {
                                if (a === t) {
                                    a = null;
                                    break
                                }
                                if (o = a.sibling,
                                o !== null) {
                                    o.return = a.return,
                                    a = o;
                                    break
                                }
                                a = a.return
                            }
                        o = a
                    }
            pt(e, t, i.children, n),
            t = t.child
        }
        return t;
    case 9:
        return i = t.type,
        r = t.pendingProps.children,
        lo(t, n),
        i = en(i),
        r = r(i),
        t.flags |= 1,
        pt(e, t, r, n),
        t.child;
    case 14:
        return r = t.type,
        i = un(r, t.pendingProps),
        i = un(r.type, i),
        G0(e, t, r, i, n);
    case 15:
        return Ax(e, t, t.type, t.pendingProps, n);
    case 17:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : un(r, i),
        Ul(e, t),
        t.tag = 1,
        _t(r) ? (e = !0,
        oc(t)) : e = !1,
        lo(t, n),
        fx(t, r, i),
        oh(t, r, i, n),
        lh(null, t, r, !0, e, n);
    case 19:
        return Nx(e, t, n);
    case 22:
        return Vx(e, t, n)
    }
    throw Error(F(156, t.tag))
}
;
function i1(e, t) {
    return Ib(e, t)
}
function R_(e, t, n, r) {
    this.tag = e,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function Zt(e, t, n, r) {
    return new R_(e,t,n,r)
}
function ip(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function P_(e) {
    if (typeof e == "function")
        return ip(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === Ch)
            return 11;
        if (e === kh)
            return 14
    }
    return 2
}
function Fr(e, t) {
    var n = e.alternate;
    return n === null ? (n = Zt(e.tag, t, e.key, e.mode),
    n.elementType = e.elementType,
    n.type = e.type,
    n.stateNode = e.stateNode,
    n.alternate = e,
    e.alternate = n) : (n.pendingProps = t,
    n.type = e.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = 14680064 & e.flags,
    n.childLanes = e.childLanes,
    n.lanes = e.lanes,
    n.child = e.child,
    n.memoizedProps = e.memoizedProps,
    n.memoizedState = e.memoizedState,
    n.updateQueue = e.updateQueue,
    t = e.dependencies,
    n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    n.sibling = e.sibling,
    n.index = e.index,
    n.ref = e.ref,
    n
}
function Gl(e, t, n, r, i, o) {
    var a = 2;
    if (r = e,
    typeof e == "function")
        ip(e) && (a = 1);
    else if (typeof e == "string")
        a = 5;
    else
        e: switch (e) {
        case Yi:
            return fi(n.children, i, o, t);
        case wh:
            a = 8,
            i |= 8;
            break;
        case Id:
            return e = Zt(12, n, t, 2 | i),
            e.elementType = Id,
            e.lanes = o,
            e;
        case Fd:
            return e = Zt(13, n, t, i),
            e.elementType = Fd,
            e.lanes = o,
            e;
        case _d:
            return e = Zt(19, n, t, i),
            e.elementType = _d,
            e.lanes = o,
            e;
        case db:
            return Ic(n, i, o, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case ub:
                    a = 10;
                    break e;
                case fb:
                    a = 9;
                    break e;
                case Ch:
                    a = 11;
                    break e;
                case kh:
                    a = 14;
                    break e;
                case gr:
                    a = 16,
                    r = null;
                    break e
                }
            throw Error(F(130, e == null ? e : typeof e, ""))
        }
    return t = Zt(a, n, t, i),
    t.elementType = e,
    t.type = r,
    t.lanes = o,
    t
}
function fi(e, t, n, r) {
    return e = Zt(7, e, r, t),
    e.lanes = n,
    e
}
function Ic(e, t, n, r) {
    return e = Zt(22, e, r, t),
    e.elementType = db,
    e.lanes = n,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function Ed(e, t, n) {
    return e = Zt(6, e, null, t),
    e.lanes = n,
    e
}
function Rd(e, t, n) {
    return t = Zt(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function I_(e, t, n, r, i) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = ud(0),
    this.expirationTimes = ud(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = ud(0),
    this.identifierPrefix = r,
    this.onRecoverableError = i,
    this.mutableSourceEagerHydrationData = null
}
function op(e, t, n, r, i, o, a, s, l) {
    return e = new I_(e,t,n,s,l),
    t === 1 ? (t = 1,
    o === !0 && (t |= 8)) : t = 0,
    o = Zt(3, null, null, t),
    e.current = o,
    o.stateNode = e,
    o.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    $h(o),
    e
}
function F_(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: Xi,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function o1(e) {
    if (!e)
        return Lr;
    e = e._reactInternals;
    e: {
        if (yi(e) !== e || e.tag !== 1)
            throw Error(F(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (_t(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(F(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (_t(n))
            return rx(e, n, t)
    }
    return t
}
function a1(e, t, n, r, i, o, a, s, l) {
    return e = op(n, r, !0, e, i, o, a, s, l),
    e.context = o1(null),
    n = e.current,
    r = mt(),
    i = Ir(n),
    o = Zn(r, i),
    o.callback = t ?? null,
    Rr(n, o, i),
    e.current.lanes = i,
    Ya(e, i, r),
    Lt(e, r),
    e
}
function Fc(e, t, n, r) {
    var i = t.current
      , o = mt()
      , a = Ir(i);
    return n = o1(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = Zn(o, a),
    t.payload = {
        element: e
    },
    r = r === void 0 ? null : r,
    r !== null && (t.callback = r),
    e = Rr(i, t, a),
    e !== null && (pn(e, i, a, o),
    $l(e, i, a)),
    a
}
function yc(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function ab(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function ap(e, t) {
    ab(e, t),
    (e = e.alternate) && ab(e, t)
}
function __() {
    return null
}
var s1 = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function sp(e) {
    this._internalRoot = e
}
_c.prototype.render = sp.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(F(409));
    Fc(e, t, null, null)
}
;
_c.prototype.unmount = sp.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        vi(function() {
            Fc(null, e, null, null)
        }),
        t[er] = null
    }
}
;
function _c(e) {
    this._internalRoot = e
}
_c.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = Ab();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < br.length && t !== 0 && t < br[n].priority; n++)
            ;
        br.splice(n, 0, e),
        n === 0 && Bb(e)
    }
}
;
function lp(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function Lc(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function sb() {}
function L_(e, t, n, r, i) {
    if (i) {
        if (typeof r == "function") {
            var o = r;
            r = function() {
                var c = yc(a);
                o.call(c)
            }
        }
        var a = a1(t, r, e, 0, null, !1, !1, "", sb);
        return e._reactRootContainer = a,
        e[er] = a.current,
        Ba(e.nodeType === 8 ? e.parentNode : e),
        vi(),
        a
    }
    for (; i = e.lastChild; )
        e.removeChild(i);
    if (typeof r == "function") {
        var s = r;
        r = function() {
            var c = yc(l);
            s.call(c)
        }
    }
    var l = op(e, 0, !1, null, null, !1, !1, "", sb);
    return e._reactRootContainer = l,
    e[er] = l.current,
    Ba(e.nodeType === 8 ? e.parentNode : e),
    vi(function() {
        Fc(t, l, n, r)
    }),
    l
}
function Mc(e, t, n, r, i) {
    var o = n._reactRootContainer;
    if (o) {
        var a = o;
        if (typeof i == "function") {
            var s = i;
            i = function() {
                var l = yc(a);
                s.call(l)
            }
        }
        Fc(t, a, e, i)
    } else
        a = L_(n, t, e, i, r);
    return yc(a)
}
Ob = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = ba(t.pendingLanes);
            n !== 0 && (Rh(t, 1 | n),
            Lt(t, Ae()),
            !(6 & ie) && (go = Ae() + 500,
            Dr()))
        }
        break;
    case 13:
        vi(function() {
            var r = tr(e, 1);
            if (r !== null) {
                var i = mt();
                pn(r, e, 1, i)
            }
        }),
        ap(e, 1)
    }
}
;
Ph = function(e) {
    if (e.tag === 13) {
        var t = tr(e, 134217728);
        if (t !== null) {
            var n = mt();
            pn(t, e, 134217728, n)
        }
        ap(e, 134217728)
    }
}
;
Db = function(e) {
    if (e.tag === 13) {
        var t = Ir(e)
          , n = tr(e, t);
        if (n !== null) {
            var r = mt();
            pn(n, e, t, r)
        }
        ap(e, t)
    }
}
;
Ab = function() {
    return se
}
;
Vb = function(e, t) {
    var n = se;
    try {
        return se = e,
        t()
    } finally {
        se = n
    }
}
;
Nd = function(e, t, n) {
    switch (t) {
    case "input":
        if (Od(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
            for (n = e; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var i = Cc(r);
                    if (!i)
                        throw Error(F(90));
                    pb(r),
                    Od(r, i)
                }
            }
        }
        break;
    case "textarea":
        vb(e, n);
        break;
    case "select":
        t = n.value,
        t != null && io(e, !!n.multiple, t, !1)
    }
}
;
Cb = tp;
kb = vi;
var M_ = {
    usingClientEntryPoint: !1,
    Events: [Ka, Qi, Cc, Sb, wb, tp]
}
  , ma = {
    findFiberByHostInstance: si,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom"
}
  , O_ = {
    bundleType: ma.bundleType,
    version: ma.version,
    rendererPackageName: ma.rendererPackageName,
    rendererConfig: ma.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: rr.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = Rb(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: ma.findFiberByHostInstance || __,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && (va = __REACT_DEVTOOLS_GLOBAL_HOOK__,
!va.isDisabled && va.supportsFiber))
    try {
        bc = va.inject(O_),
        Fn = va
    } catch {}
var va;
Bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = M_;
Bt.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!lp(t))
        throw Error(F(200));
    return F_(e, t, null, n)
}
;
Bt.createRoot = function(e, t) {
    if (!lp(e))
        throw Error(F(299));
    var n = !1
      , r = ""
      , i = s1;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    t = op(e, 1, !1, null, null, n, !1, r, i),
    e[er] = t.current,
    Ba(e.nodeType === 8 ? e.parentNode : e),
    new sp(t)
}
;
Bt.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(F(188)) : (e = Object.keys(e).join(","),
        Error(F(268, e)));
    return e = Rb(t),
    e = e === null ? null : e.stateNode,
    e
}
;
Bt.flushSync = function(e) {
    return vi(e)
}
;
Bt.hydrate = function(e, t, n) {
    if (!Lc(t))
        throw Error(F(200));
    return Mc(null, e, t, !0, n)
}
;
Bt.hydrateRoot = function(e, t, n) {
    if (!lp(e))
        throw Error(F(405));
    var r = n != null && n.hydratedSources || null
      , i = !1
      , o = ""
      , a = s1;
    if (n != null && (n.unstable_strictMode === !0 && (i = !0),
    n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
    t = a1(t, null, e, 1, n ?? null, i, !1, o, a),
    e[er] = t.current,
    Ba(e),
    r)
        for (e = 0; e < r.length; e++)
            n = r[e],
            i = n._getVersion,
            i = i(n._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(n, i);
    return new _c(t)
}
;
Bt.render = function(e, t, n) {
    if (!Lc(t))
        throw Error(F(200));
    return Mc(null, e, t, !1, n)
}
;
Bt.unmountComponentAtNode = function(e) {
    if (!Lc(e))
        throw Error(F(40));
    return !!e._reactRootContainer && (vi(function() {
        Mc(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[er] = null
        })
    }),
    !0)
}
;
Bt.unstable_batchedUpdates = tp;
Bt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Lc(n))
        throw Error(F(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(F(38));
    return Mc(e, t, n, !1, r)
}
;
Bt.version = "18.2.0-next-9e3b772b8-20220608";
function l1() {
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE == "function")
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l1)
        } catch (e) {
            console.error(e)
        }
}
l1();
var Ht = Bt
  , c1 = Ht
  , D_ = Ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , A_ = Ht.createPortal
  , V_ = Ht.createRoot
  , B_ = Ht.findDOMNode
  , z_ = Ht.flushSync
  , H_ = Ht.hydrate
  , N_ = Ht.hydrateRoot
  , $_ = Ht.render
  , j_ = Ht.unmountComponentAtNode
  , W_ = Ht.unstable_batchedUpdates
  , U_ = Ht.unstable_renderSubtreeIntoContainer
  , X_ = Ht.version;
var G_ = sn({
    "../../../node_modules/hsluv/hsluv.js"(e, t) {
        var n = n || {};
        n.Geometry = function() {}
        ,
        n.Geometry.intersectLineLine = function(i, o) {
            var a = (i.intercept - o.intercept) / (o.slope - i.slope)
              , s = i.slope * a + i.intercept;
            return {
                x: a,
                y: s
            }
        }
        ,
        n.Geometry.distanceFromOrigin = function(i) {
            return Math.sqrt(Math.pow(i.x, 2) + Math.pow(i.y, 2))
        }
        ,
        n.Geometry.distanceLineFromOrigin = function(i) {
            return Math.abs(i.intercept) / Math.sqrt(Math.pow(i.slope, 2) + 1)
        }
        ,
        n.Geometry.perpendicularThroughPoint = function(i, o) {
            var a = -1 / i.slope
              , s = o.y - a * o.x;
            return {
                slope: a,
                intercept: s
            }
        }
        ,
        n.Geometry.angleFromOrigin = function(i) {
            return Math.atan2(i.y, i.x)
        }
        ,
        n.Geometry.normalizeAngle = function(i) {
            var o = 2 * Math.PI;
            return (i % o + o) % o
        }
        ,
        n.Geometry.lengthOfRayUntilIntersect = function(i, o) {
            return o.intercept / (Math.sin(i) - o.slope * Math.cos(i))
        }
        ,
        n.Hsluv = function() {}
        ,
        n.Hsluv.getBounds = function(i) {
            for (var o = [], a = Math.pow(i + 16, 3) / 1560896, s = a > n.Hsluv.epsilon ? a : i / n.Hsluv.kappa, l = 0; l < 3; )
                for (var c = l++, u = n.Hsluv.m[c][0], f = n.Hsluv.m[c][1], d = n.Hsluv.m[c][2], h = 0; h < 2; ) {
                    var g = h++
                      , y = (284517 * u - 94839 * d) * s
                      , S = (838422 * d + 769860 * f + 731718 * u) * i * s - 769860 * g * i
                      , m = (632260 * d - 126452 * f) * s + 126452 * g;
                    o.push({
                        slope: y / m,
                        intercept: S / m
                    })
                }
            return o
        }
        ,
        n.Hsluv.maxSafeChromaForL = function(i) {
            for (var o = n.Hsluv.getBounds(i), a = 1 / 0, s = 0; s < o.length; ) {
                var l = o[s];
                ++s;
                var c = n.Geometry.distanceLineFromOrigin(l);
                a = Math.min(a, c)
            }
            return a
        }
        ,
        n.Hsluv.maxChromaForLH = function(i, o) {
            for (var a = o / 360 * Math.PI * 2, s = n.Hsluv.getBounds(i), l = 1 / 0, c = 0; c < s.length; ) {
                var u = s[c];
                ++c;
                var f = n.Geometry.lengthOfRayUntilIntersect(a, u);
                f >= 0 && (l = Math.min(l, f))
            }
            return l
        }
        ,
        n.Hsluv.dotProduct = function(i, o) {
            for (var a = 0, s = 0, l = i.length; s < l; ) {
                var c = s++;
                a += i[c] * o[c]
            }
            return a
        }
        ,
        n.Hsluv.fromLinear = function(i) {
            return i <= .0031308 ? 12.92 * i : 1.055 * Math.pow(i, .4166666666666667) - .055
        }
        ,
        n.Hsluv.toLinear = function(i) {
            return i > .04045 ? Math.pow((i + .055) / 1.055, 2.4) : i / 12.92
        }
        ,
        n.Hsluv.xyzToRgb = function(i) {
            return [n.Hsluv.fromLinear(n.Hsluv.dotProduct(n.Hsluv.m[0], i)), n.Hsluv.fromLinear(n.Hsluv.dotProduct(n.Hsluv.m[1], i)), n.Hsluv.fromLinear(n.Hsluv.dotProduct(n.Hsluv.m[2], i))]
        }
        ,
        n.Hsluv.rgbToXyz = function(i) {
            var o = [n.Hsluv.toLinear(i[0]), n.Hsluv.toLinear(i[1]), n.Hsluv.toLinear(i[2])];
            return [n.Hsluv.dotProduct(n.Hsluv.minv[0], o), n.Hsluv.dotProduct(n.Hsluv.minv[1], o), n.Hsluv.dotProduct(n.Hsluv.minv[2], o)]
        }
        ,
        n.Hsluv.yToL = function(i) {
            return i <= n.Hsluv.epsilon ? i / n.Hsluv.refY * n.Hsluv.kappa : 116 * Math.pow(i / n.Hsluv.refY, .3333333333333333) - 16
        }
        ,
        n.Hsluv.lToY = function(i) {
            return i <= 8 ? n.Hsluv.refY * i / n.Hsluv.kappa : n.Hsluv.refY * Math.pow((i + 16) / 116, 3)
        }
        ,
        n.Hsluv.xyzToLuv = function(i) {
            var o = i[0]
              , a = i[1]
              , s = i[2]
              , l = o + 15 * a + 3 * s
              , c = 4 * o
              , u = 9 * a;
            l != 0 ? (c /= l,
            u /= l) : (c = NaN,
            u = NaN);
            var f = n.Hsluv.yToL(a);
            if (f == 0)
                return [0, 0, 0];
            var d = 13 * f * (c - n.Hsluv.refU)
              , h = 13 * f * (u - n.Hsluv.refV);
            return [f, d, h]
        }
        ,
        n.Hsluv.luvToXyz = function(i) {
            var o = i[0]
              , a = i[1]
              , s = i[2];
            if (o == 0)
                return [0, 0, 0];
            var l = a / (13 * o) + n.Hsluv.refU
              , c = s / (13 * o) + n.Hsluv.refV
              , u = n.Hsluv.lToY(o)
              , f = 0 - 9 * u * l / ((l - 4) * c - l * c)
              , d = (9 * u - 15 * c * u - c * f) / (3 * c);
            return [f, u, d]
        }
        ,
        n.Hsluv.luvToLch = function(i) {
            var o = i[0], a = i[1], s = i[2], l = Math.sqrt(a * a + s * s), c;
            if (l < 1e-8)
                c = 0;
            else {
                var u = Math.atan2(s, a);
                c = u * 180 / Math.PI,
                c < 0 && (c = 360 + c)
            }
            return [o, l, c]
        }
        ,
        n.Hsluv.lchToLuv = function(i) {
            var o = i[0]
              , a = i[1]
              , s = i[2]
              , l = s / 360 * 2 * Math.PI
              , c = Math.cos(l) * a
              , u = Math.sin(l) * a;
            return [o, c, u]
        }
        ,
        n.Hsluv.hsluvToLch = function(i) {
            var o = i[0]
              , a = i[1]
              , s = i[2];
            if (s > 99.9999999)
                return [100, 0, o];
            if (s < 1e-8)
                return [0, 0, o];
            var l = n.Hsluv.maxChromaForLH(s, o)
              , c = l / 100 * a;
            return [s, c, o]
        }
        ,
        n.Hsluv.lchToHsluv = function(i) {
            var o = i[0]
              , a = i[1]
              , s = i[2];
            if (o > 99.9999999)
                return [s, 0, 100];
            if (o < 1e-8)
                return [s, 0, 0];
            var l = n.Hsluv.maxChromaForLH(o, s)
              , c = a / l * 100;
            return [s, c, o]
        }
        ,
        n.Hsluv.hpluvToLch = function(i) {
            var o = i[0]
              , a = i[1]
              , s = i[2];
            if (s > 99.9999999)
                return [100, 0, o];
            if (s < 1e-8)
                return [0, 0, o];
            var l = n.Hsluv.maxSafeChromaForL(s)
              , c = l / 100 * a;
            return [s, c, o]
        }
        ,
        n.Hsluv.lchToHpluv = function(i) {
            var o = i[0]
              , a = i[1]
              , s = i[2];
            if (o > 99.9999999)
                return [s, 0, 100];
            if (o < 1e-8)
                return [s, 0, 0];
            var l = n.Hsluv.maxSafeChromaForL(o)
              , c = a / l * 100;
            return [s, c, o]
        }
        ,
        n.Hsluv.rgbToHex = function(i) {
            for (var o = "#", a = 0; a < 3; ) {
                var s = a++
                  , l = i[s]
                  , c = Math.round(l * 255)
                  , u = c % 16
                  , f = (c - u) / 16 | 0;
                o += n.Hsluv.hexChars.charAt(f) + n.Hsluv.hexChars.charAt(u)
            }
            return o
        }
        ,
        n.Hsluv.hexToRgb = function(i) {
            i = i.toLowerCase();
            for (var o = [], a = 0; a < 3; ) {
                var s = a++
                  , l = n.Hsluv.hexChars.indexOf(i.charAt(s * 2 + 1))
                  , c = n.Hsluv.hexChars.indexOf(i.charAt(s * 2 + 2))
                  , u = l * 16 + c;
                o.push(u / 255)
            }
            return o
        }
        ,
        n.Hsluv.lchToRgb = function(i) {
            return n.Hsluv.xyzToRgb(n.Hsluv.luvToXyz(n.Hsluv.lchToLuv(i)))
        }
        ,
        n.Hsluv.rgbToLch = function(i) {
            return n.Hsluv.luvToLch(n.Hsluv.xyzToLuv(n.Hsluv.rgbToXyz(i)))
        }
        ,
        n.Hsluv.hsluvToRgb = function(i) {
            return n.Hsluv.lchToRgb(n.Hsluv.hsluvToLch(i))
        }
        ,
        n.Hsluv.rgbToHsluv = function(i) {
            return n.Hsluv.lchToHsluv(n.Hsluv.rgbToLch(i))
        }
        ,
        n.Hsluv.hpluvToRgb = function(i) {
            return n.Hsluv.lchToRgb(n.Hsluv.hpluvToLch(i))
        }
        ,
        n.Hsluv.rgbToHpluv = function(i) {
            return n.Hsluv.lchToHpluv(n.Hsluv.rgbToLch(i))
        }
        ,
        n.Hsluv.hsluvToHex = function(i) {
            return n.Hsluv.rgbToHex(n.Hsluv.hsluvToRgb(i))
        }
        ,
        n.Hsluv.hpluvToHex = function(i) {
            return n.Hsluv.rgbToHex(n.Hsluv.hpluvToRgb(i))
        }
        ,
        n.Hsluv.hexToHsluv = function(i) {
            return n.Hsluv.rgbToHsluv(n.Hsluv.hexToRgb(i))
        }
        ,
        n.Hsluv.hexToHpluv = function(i) {
            return n.Hsluv.rgbToHpluv(n.Hsluv.hexToRgb(i))
        }
        ,
        n.Hsluv.m = [[3.240969941904521, -1.537383177570093, -.498610760293], [-.96924363628087, 1.87596750150772, .041555057407175], [.055630079696993, -.20397695888897, 1.056971514242878]],
        n.Hsluv.minv = [[.41239079926595, .35758433938387, .18048078840183], [.21263900587151, .71516867876775, .072192315360733], [.019330818715591, .11919477979462, .95053215224966]],
        n.Hsluv.refY = 1,
        n.Hsluv.refU = .19783000664283,
        n.Hsluv.refV = .46831999493879,
        n.Hsluv.kappa = 903.2962962,
        n.Hsluv.epsilon = .0088564516,
        n.Hsluv.hexChars = "0123456789abcdef";
        var r = {
            hsluvToRgb: n.Hsluv.hsluvToRgb,
            rgbToHsluv: n.Hsluv.rgbToHsluv,
            hpluvToRgb: n.Hsluv.hpluvToRgb,
            rgbToHpluv: n.Hsluv.rgbToHpluv,
            hsluvToHex: n.Hsluv.hsluvToHex,
            hexToHsluv: n.Hsluv.hexToHsluv,
            hpluvToHex: n.Hsluv.hpluvToHex,
            hexToHpluv: n.Hsluv.hexToHpluv,
            lchToHpluv: n.Hsluv.lchToHpluv,
            hpluvToLch: n.Hsluv.hpluvToLch,
            lchToHsluv: n.Hsluv.lchToHsluv,
            hsluvToLch: n.Hsluv.hsluvToLch,
            lchToLuv: n.Hsluv.lchToLuv,
            luvToLch: n.Hsluv.luvToLch,
            xyzToLuv: n.Hsluv.xyzToLuv,
            luvToXyz: n.Hsluv.luvToXyz,
            xyzToRgb: n.Hsluv.xyzToRgb,
            rgbToXyz: n.Hsluv.rgbToXyz,
            lchToRgb: n.Hsluv.lchToRgb,
            rgbToLch: n.Hsluv.rgbToLch
        };
        t.exports = r
    }
})
  , K_ = sn({
    "../../../node_modules/eventemitter3/index.js"(e, t) {
        "use strict";
        var n = Object.prototype.hasOwnProperty
          , r = "~";
        function i() {}
        Object.create && (i.prototype = Object.create(null),
        new i().__proto__ || (r = !1));
        function o(c, u, f) {
            this.fn = c,
            this.context = u,
            this.once = f || !1
        }
        function a(c, u, f, d, h) {
            if (typeof f != "function")
                throw new TypeError("The listener must be a function");
            var g = new o(f,d || c,h)
              , y = r ? r + u : u;
            return c._events[y] ? c._events[y].fn ? c._events[y] = [c._events[y], g] : c._events[y].push(g) : (c._events[y] = g,
            c._eventsCount++),
            c
        }
        function s(c, u) {
            --c._eventsCount === 0 ? c._events = new i : delete c._events[u]
        }
        function l() {
            this._events = new i,
            this._eventsCount = 0
        }
        l.prototype.eventNames = function() {
            var u = [], f, d;
            if (this._eventsCount === 0)
                return u;
            for (d in f = this._events)
                n.call(f, d) && u.push(r ? d.slice(1) : d);
            return Object.getOwnPropertySymbols ? u.concat(Object.getOwnPropertySymbols(f)) : u
        }
        ,
        l.prototype.listeners = function(u) {
            var f = r ? r + u : u
              , d = this._events[f];
            if (!d)
                return [];
            if (d.fn)
                return [d.fn];
            for (var h = 0, g = d.length, y = new Array(g); h < g; h++)
                y[h] = d[h].fn;
            return y
        }
        ,
        l.prototype.listenerCount = function(u) {
            var f = r ? r + u : u
              , d = this._events[f];
            return d ? d.fn ? 1 : d.length : 0
        }
        ,
        l.prototype.emit = function(u, f, d, h, g, y) {
            var S = r ? r + u : u;
            if (!this._events[S])
                return !1;
            var m = this._events[S], p = arguments.length, v, x;
            if (m.fn) {
                switch (m.once && this.removeListener(u, m.fn, void 0, !0),
                p) {
                case 1:
                    return m.fn.call(m.context),
                    !0;
                case 2:
                    return m.fn.call(m.context, f),
                    !0;
                case 3:
                    return m.fn.call(m.context, f, d),
                    !0;
                case 4:
                    return m.fn.call(m.context, f, d, h),
                    !0;
                case 5:
                    return m.fn.call(m.context, f, d, h, g),
                    !0;
                case 6:
                    return m.fn.call(m.context, f, d, h, g, y),
                    !0
                }
                for (x = 1,
                v = new Array(p - 1); x < p; x++)
                    v[x - 1] = arguments[x];
                m.fn.apply(m.context, v)
            } else {
                var C = m.length, w;
                for (x = 0; x < C; x++)
                    switch (m[x].once && this.removeListener(u, m[x].fn, void 0, !0),
                    p) {
                    case 1:
                        m[x].fn.call(m[x].context);
                        break;
                    case 2:
                        m[x].fn.call(m[x].context, f);
                        break;
                    case 3:
                        m[x].fn.call(m[x].context, f, d);
                        break;
                    case 4:
                        m[x].fn.call(m[x].context, f, d, h);
                        break;
                    default:
                        if (!v)
                            for (w = 1,
                            v = new Array(p - 1); w < p; w++)
                                v[w - 1] = arguments[w];
                        m[x].fn.apply(m[x].context, v)
                    }
            }
            return !0
        }
        ,
        l.prototype.on = function(u, f, d) {
            return a(this, u, f, d, !1)
        }
        ,
        l.prototype.once = function(u, f, d) {
            return a(this, u, f, d, !0)
        }
        ,
        l.prototype.removeListener = function(u, f, d, h) {
            var g = r ? r + u : u;
            if (!this._events[g])
                return this;
            if (!f)
                return s(this, g),
                this;
            var y = this._events[g];
            if (y.fn)
                y.fn === f && (!h || y.once) && (!d || y.context === d) && s(this, g);
            else {
                for (var S = 0, m = [], p = y.length; S < p; S++)
                    (y[S].fn !== f || h && !y[S].once || d && y[S].context !== d) && m.push(y[S]);
                m.length ? this._events[g] = m.length === 1 ? m[0] : m : s(this, g)
            }
            return this
        }
        ,
        l.prototype.removeAllListeners = function(u) {
            var f;
            return u ? (f = r ? r + u : u,
            this._events[f] && s(this, f)) : (this._events = new i,
            this._eventsCount = 0),
            this
        }
        ,
        l.prototype.off = l.prototype.removeListener,
        l.prototype.addListener = l.prototype.on,
        l.prefixed = r,
        l.EventEmitter = l,
        typeof t < "u" && (t.exports = l)
    }
})
  , jp = sn({
    "../../../node_modules/process/browser.js"(e, t) {
        var n = t.exports = {}, r, i;
        function o() {
            throw new Error("setTimeout has not been defined")
        }
        function a() {
            throw new Error("clearTimeout has not been defined")
        }
        (function() {
            try {
                typeof setTimeout == "function" ? r = setTimeout : r = o
            } catch {
                r = o
            }
            try {
                typeof clearTimeout == "function" ? i = clearTimeout : i = a
            } catch {
                i = a
            }
        }
        )();
        function s(m) {
            if (r === setTimeout)
                return setTimeout(m, 0);
            if ((r === o || !r) && setTimeout)
                return r = setTimeout,
                setTimeout(m, 0);
            try {
                return r(m, 0)
            } catch {
                try {
                    return r.call(null, m, 0)
                } catch {
                    return r.call(this, m, 0)
                }
            }
        }
        function l(m) {
            if (i === clearTimeout)
                return clearTimeout(m);
            if ((i === a || !i) && clearTimeout)
                return i = clearTimeout,
                clearTimeout(m);
            try {
                return i(m)
            } catch {
                try {
                    return i.call(null, m)
                } catch {
                    return i.call(this, m)
                }
            }
        }
        var c = [], u = !1, f, d = -1;
        function h() {
            !u || !f || (u = !1,
            f.length ? c = f.concat(c) : d = -1,
            c.length && g())
        }
        function g() {
            if (!u) {
                var m = s(h);
                u = !0;
                for (var p = c.length; p; ) {
                    for (f = c,
                    c = []; ++d < p; )
                        f && f[d].run();
                    d = -1,
                    p = c.length
                }
                f = null,
                u = !1,
                l(m)
            }
        }
        n.nextTick = function(m) {
            var p = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var v = 1; v < arguments.length; v++)
                    p[v - 1] = arguments[v];
            c.push(new y(m,p)),
            c.length === 1 && !u && s(g)
        }
        ;
        function y(m, p) {
            this.fun = m,
            this.array = p
        }
        y.prototype.run = function() {
            this.fun.apply(null, this.array)
        }
        ,
        n.title = "browser",
        n.browser = !0,
        n.env = {},
        n.argv = [],
        n.version = "",
        n.versions = {};
        function S() {}
        n.on = S,
        n.addListener = S,
        n.once = S,
        n.off = S,
        n.removeListener = S,
        n.removeAllListeners = S,
        n.emit = S,
        n.prependListener = S,
        n.prependOnceListener = S,
        n.listeners = function(m) {
            return []
        }
        ,
        n.binding = function(m) {
            throw new Error("process.binding is not supported")
        }
        ,
        n.cwd = function() {
            return "/"
        }
        ,
        n.chdir = function(m) {
            throw new Error("process.chdir is not supported")
        }
        ,
        n.umask = function() {
            return 0
        }
    }
})
  , q_ = sn({
    "../../../node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.production.min.js"(e) {
        "use strict";
        var t = typeof Symbol == "function" && Symbol.for
          , n = t ? Symbol.for("react.element") : 60103
          , r = t ? Symbol.for("react.portal") : 60106
          , i = t ? Symbol.for("react.fragment") : 60107
          , o = t ? Symbol.for("react.strict_mode") : 60108
          , a = t ? Symbol.for("react.profiler") : 60114
          , s = t ? Symbol.for("react.provider") : 60109
          , l = t ? Symbol.for("react.context") : 60110
          , c = t ? Symbol.for("react.async_mode") : 60111
          , u = t ? Symbol.for("react.concurrent_mode") : 60111
          , f = t ? Symbol.for("react.forward_ref") : 60112
          , d = t ? Symbol.for("react.suspense") : 60113
          , h = t ? Symbol.for("react.suspense_list") : 60120
          , g = t ? Symbol.for("react.memo") : 60115
          , y = t ? Symbol.for("react.lazy") : 60116
          , S = t ? Symbol.for("react.block") : 60121
          , m = t ? Symbol.for("react.fundamental") : 60117
          , p = t ? Symbol.for("react.responder") : 60118
          , v = t ? Symbol.for("react.scope") : 60119;
        function x(w) {
            if (typeof w == "object" && w !== null) {
                var k = w.$$typeof;
                switch (k) {
                case n:
                    switch (w = w.type,
                    w) {
                    case c:
                    case u:
                    case i:
                    case a:
                    case o:
                    case d:
                        return w;
                    default:
                        switch (w = w && w.$$typeof,
                        w) {
                        case l:
                        case f:
                        case y:
                        case g:
                        case s:
                            return w;
                        default:
                            return k
                        }
                    }
                case r:
                    return k
                }
            }
        }
        function C(w) {
            return x(w) === u
        }
        e.AsyncMode = c,
        e.ConcurrentMode = u,
        e.ContextConsumer = l,
        e.ContextProvider = s,
        e.Element = n,
        e.ForwardRef = f,
        e.Fragment = i,
        e.Lazy = y,
        e.Memo = g,
        e.Portal = r,
        e.Profiler = a,
        e.StrictMode = o,
        e.Suspense = d,
        e.isAsyncMode = function(w) {
            return C(w) || x(w) === c
        }
        ,
        e.isConcurrentMode = C,
        e.isContextConsumer = function(w) {
            return x(w) === l
        }
        ,
        e.isContextProvider = function(w) {
            return x(w) === s
        }
        ,
        e.isElement = function(w) {
            return typeof w == "object" && w !== null && w.$$typeof === n
        }
        ,
        e.isForwardRef = function(w) {
            return x(w) === f
        }
        ,
        e.isFragment = function(w) {
            return x(w) === i
        }
        ,
        e.isLazy = function(w) {
            return x(w) === y
        }
        ,
        e.isMemo = function(w) {
            return x(w) === g
        }
        ,
        e.isPortal = function(w) {
            return x(w) === r
        }
        ,
        e.isProfiler = function(w) {
            return x(w) === a
        }
        ,
        e.isStrictMode = function(w) {
            return x(w) === o
        }
        ,
        e.isSuspense = function(w) {
            return x(w) === d
        }
        ,
        e.isValidElementType = function(w) {
            return typeof w == "string" || typeof w == "function" || w === i || w === u || w === a || w === o || w === d || w === h || typeof w == "object" && w !== null && (w.$$typeof === y || w.$$typeof === g || w.$$typeof === s || w.$$typeof === l || w.$$typeof === f || w.$$typeof === m || w.$$typeof === p || w.$$typeof === v || w.$$typeof === S)
        }
        ,
        e.typeOf = x
    }
})
  , Q_ = sn({
    "../../../node_modules/hoist-non-react-statics/node_modules/react-is/index.js"(e, t) {
        "use strict";
        t.exports = q_()
    }
})
  , cu = sn({
    "../../../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"(e, t) {
        "use strict";
        var n = Q_()
          , r = {
            childContextTypes: !0,
            contextType: !0,
            contextTypes: !0,
            defaultProps: !0,
            displayName: !0,
            getDefaultProps: !0,
            getDerivedStateFromError: !0,
            getDerivedStateFromProps: !0,
            mixins: !0,
            propTypes: !0,
            type: !0
        }
          , i = {
            name: !0,
            length: !0,
            prototype: !0,
            caller: !0,
            callee: !0,
            arguments: !0,
            arity: !0
        }
          , o = {
            $$typeof: !0,
            render: !0,
            defaultProps: !0,
            displayName: !0,
            propTypes: !0
        }
          , a = {
            $$typeof: !0,
            compare: !0,
            defaultProps: !0,
            displayName: !0,
            propTypes: !0,
            type: !0
        }
          , s = {};
        s[n.ForwardRef] = o,
        s[n.Memo] = a;
        function l(S) {
            return n.isMemo(S) ? a : s[S.$$typeof] || r
        }
        var c = Object.defineProperty
          , u = Object.getOwnPropertyNames
          , f = Object.getOwnPropertySymbols
          , d = Object.getOwnPropertyDescriptor
          , h = Object.getPrototypeOf
          , g = Object.prototype;
        function y(S, m, p) {
            if (typeof m != "string") {
                if (g) {
                    var v = h(m);
                    v && v !== g && y(S, v, p)
                }
                var x = u(m);
                f && (x = x.concat(f(m)));
                for (var C = l(S), w = l(m), k = 0; k < x.length; ++k) {
                    var E = x[k];
                    if (!i[E] && !(p && p[E]) && !(w && w[E]) && !(C && C[E])) {
                        var I = d(m, E);
                        try {
                            c(S, E, I)
                        } catch {}
                    }
                }
            }
            return S
        }
        t.exports = y
    }
})
  , Z_ = sn({
    "../../../node_modules/archy/index.js"(e, t) {
        t.exports = function n(r, i, o) {
            i === void 0 && (i = ""),
            o || (o = {});
            var a = function(u) {
                var f = {
                    "\u2502": "|",
                    "\u2514": "`",
                    "\u251C": "+",
                    "\u2500": "-",
                    "\u252C": "-"
                };
                return o.unicode === !1 ? f[u] : u
            };
            typeof r == "string" && (r = {
                label: r
            });
            var s = r.nodes || []
              , l = (r.label || "").split(`
`)
              , c = `
` + i + (s.length ? a("\u2502") : " ") + " ";
            return i + l.join(c) + `
` + s.map(function(u, f) {
                var d = f === s.length - 1
                  , h = u.nodes && u.nodes.length
                  , g = i + (d ? " " : a("\u2502")) + " ";
                return i + a(d ? "\u2514" : "\u251C") + a("\u2500") + a(h ? "\u252C" : "\u2500") + " " + n(u, g, o).slice(i.length + 2)
            }).join("")
        }
    }
})
  , J_ = sn({
    "../../../node_modules/fontfaceobserver/fontfaceobserver.standalone.js"(e, t) {
        (function() {
            function n(m, p) {
                document.addEventListener ? m.addEventListener("scroll", p, !1) : m.attachEvent("scroll", p)
            }
            function r(m) {
                document.body ? m() : document.addEventListener ? document.addEventListener("DOMContentLoaded", function p() {
                    document.removeEventListener("DOMContentLoaded", p),
                    m()
                }) : document.attachEvent("onreadystatechange", function p() {
                    (document.readyState == "interactive" || document.readyState == "complete") && (document.detachEvent("onreadystatechange", p),
                    m())
                })
            }
            function i(m) {
                this.a = document.createElement("div"),
                this.a.setAttribute("aria-hidden", "true"),
                this.a.appendChild(document.createTextNode(m)),
                this.b = document.createElement("span"),
                this.c = document.createElement("span"),
                this.h = document.createElement("span"),
                this.f = document.createElement("span"),
                this.g = -1,
                this.b.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",
                this.c.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",
                this.f.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",
                this.h.style.cssText = "display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;",
                this.b.appendChild(this.h),
                this.c.appendChild(this.f),
                this.a.appendChild(this.b),
                this.a.appendChild(this.c)
            }
            function o(m, p) {
                m.a.style.cssText = "max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:" + p + ";"
            }
            function a(m) {
                var p = m.a.offsetWidth
                  , v = p + 100;
                return m.f.style.width = v + "px",
                m.c.scrollLeft = v,
                m.b.scrollLeft = m.b.scrollWidth + 100,
                m.g !== p ? (m.g = p,
                !0) : !1
            }
            function s(m, p) {
                function v() {
                    var C = x;
                    a(C) && C.a.parentNode && p(C.g)
                }
                var x = m;
                n(m.b, v),
                n(m.c, v),
                a(m)
            }
            function l(m, p) {
                var v = p || {};
                this.family = m,
                this.style = v.style || "normal",
                this.weight = v.weight || "normal",
                this.stretch = v.stretch || "normal"
            }
            var c = null
              , u = null
              , f = null
              , d = null;
            function h() {
                if (u === null)
                    if (g() && /Apple/.test(_.navigator.vendor)) {
                        var m = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(_.navigator.userAgent);
                        u = !!m && 603 > parseInt(m[1], 10)
                    } else
                        u = !1;
                return u
            }
            function g() {
                return d === null && (d = !!document.fonts),
                d
            }
            function y() {
                if (f === null) {
                    var m = document.createElement("div");
                    try {
                        m.style.font = "condensed 100px sans-serif"
                    } catch {}
                    f = m.style.font !== ""
                }
                return f
            }
            function S(m, p) {
                return [m.style, m.weight, y() ? m.stretch : "", "100px", p].join(" ")
            }
            l.prototype.load = function(m, p) {
                var v = this
                  , x = m || "BESbswy"
                  , C = 0
                  , w = p || 3e3
                  , k = new Date().getTime();
                return new Promise(function(E, I) {
                    if (g() && !h()) {
                        var P = new Promise(function(L, ee) {
                            function H() {
                                new Date().getTime() - k >= w ? ee(Error("" + w + "ms timeout exceeded")) : document.fonts.load(S(v, '"' + v.family + '"'), x).then(function(te) {
                                    1 <= te.length ? L() : setTimeout(H, 25)
                                }, ee)
                            }
                            H()
                        }
                        )
                          , z = new Promise(function(L, ee) {
                            C = setTimeout(function() {
                                ee(Error("" + w + "ms timeout exceeded"))
                            }, w)
                        }
                        );
                        Promise.race([z, P]).then(function() {
                            clearTimeout(C),
                            E(v)
                        }, I)
                    } else
                        r(function() {
                            function L() {
                                var Z;
                                (Z = V != -1 && W != -1 || V != -1 && A != -1 || W != -1 && A != -1) && ((Z = V != W && V != A && W != A) || (c === null && (Z = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(_.navigator.userAgent),
                                c = !!Z && (536 > parseInt(Z[1], 10) || parseInt(Z[1], 10) === 536 && 11 >= parseInt(Z[2], 10))),
                                Z = c && (V == q && W == q && A == q || V == B && W == B && A == B || V == Y && W == Y && A == Y)),
                                Z = !Z),
                                Z && (K.parentNode && K.parentNode.removeChild(K),
                                clearTimeout(C),
                                E(v))
                            }
                            function ee() {
                                if (new Date().getTime() - k >= w)
                                    K.parentNode && K.parentNode.removeChild(K),
                                    I(Error("" + w + "ms timeout exceeded"));
                                else {
                                    var Z = document.hidden;
                                    (Z === !0 || Z === void 0) && (V = H.a.offsetWidth,
                                    W = te.a.offsetWidth,
                                    A = G.a.offsetWidth,
                                    L()),
                                    C = setTimeout(ee, 50)
                                }
                            }
                            var H = new i(x)
                              , te = new i(x)
                              , G = new i(x)
                              , V = -1
                              , W = -1
                              , A = -1
                              , q = -1
                              , B = -1
                              , Y = -1
                              , K = document.createElement("div");
                            K.dir = "ltr",
                            o(H, S(v, "sans-serif")),
                            o(te, S(v, "serif")),
                            o(G, S(v, "monospace")),
                            K.appendChild(H.a),
                            K.appendChild(te.a),
                            K.appendChild(G.a),
                            document.body.appendChild(K),
                            q = H.a.offsetWidth,
                            B = te.a.offsetWidth,
                            Y = G.a.offsetWidth,
                            ee(),
                            s(H, function(Z) {
                                V = Z,
                                L()
                            }),
                            o(H, S(v, '"' + v.family + '",sans-serif')),
                            s(te, function(Z) {
                                W = Z,
                                L()
                            }),
                            o(te, S(v, '"' + v.family + '",serif')),
                            s(G, function(Z) {
                                A = Z,
                                L()
                            }),
                            o(G, S(v, '"' + v.family + '",monospace'))
                        })
                }
                )
            }
            ,
            typeof t == "object" ? t.exports = l : (_.FontFaceObserver = l,
            _.FontFaceObserver.prototype.load = l.prototype.load)
        }
        )()
    }
});
function Fp(e, t) {
    let n = {
        style: t
    };
    return b.isValidElement(e) ? b.cloneElement(e, n) : b.createElement(e, n)
}
var e2 = class extends Error {
}
  , jS = class extends Error {
}
  , t2 = class extends xe {
    constructor(e) {
        super(e),
        this.state = {
            error: void 0,
            forceUpdateKey: e.forceUpdateKey
        }
    }
    static getDerivedStateFromError(e) {
        return {
            error: e
        }
    }
    static getDerivedStateFromProps(e, t) {
        if (e.forceUpdateKey !== t.forceUpdateKey) {
            let n = {
                forceUpdateKey: e.forceUpdateKey
            };
            return t.error && (n.error = void 0),
            n
        }
        return null
    }
    render() {
        if (this.state.error === void 0)
            return this.props.children;
        if (!(this.state.error instanceof e2)) {
            let n = new jS;
            throw n.cause = this.state.error,
            n
        }
        let {notFoundPage: e, defaultPageStyle: t} = this.props;
        if (!e)
            throw this.state.error;
        return Fp(e, t)
    }
}
  , n2 = ":([a-z]\\w*)"
  , Ci = new RegExp(n2,"gi");
function WS(e, t) {
    return e.replace(Ci, (n,r)=>{
        let i = t[r];
        return typeof i != "string" || i.length === 0 ? n : encodeURIComponent(i)
    }
    )
}
function US(e, t) {
    if (!e.startsWith("/") || !t.startsWith("/"))
        throw new Error("from/to paths are expected to be absolute");
    let[n] = u1(e)
      , [r,i] = u1(t)
      , o = r2(n, r);
    return o === "" && (o = "."),
    !o.startsWith(".") && !o.startsWith("/") && (o = "./" + o),
    o + "/" + i
}
function u1(e) {
    let t = e.lastIndexOf("/");
    return [e.substring(0, t + 1), e.substring(t + 1)]
}
var cp = 46
  , wo = 47
  , jr = (e,t)=>e.charCodeAt(t)
  , f1 = (e,t)=>e.lastIndexOf(t)
  , ko = (e,t,n)=>e.slice(t, n);
function r2(e, t) {
    if (e === t || (e = "/" + h1(e),
    t = "/" + h1(t),
    e === t))
        return "";
    let n = 1
      , r = e.length
      , i = r - n
      , o = 1
      , a = t.length - o
      , s = i < a ? i : a
      , l = -1
      , c = 0;
    for (; c < s; c++) {
        let f = jr(e, n + c);
        if (f !== jr(t, o + c))
            break;
        f === wo && (l = c)
    }
    if (c === s)
        if (a > s) {
            if (jr(t, o + c) === wo)
                return ko(t, o + c + 1);
            if (c === 0)
                return ko(t, o + c)
        } else
            i > s && (jr(e, n + c) === wo ? l = c : c === 0 && (l = 0));
    let u = "";
    for (c = n + l + 1; c <= r; ++c)
        (c === r || jr(e, c) === wo) && (u += u.length === 0 ? ".." : "/..");
    return `${u}${ko(t, o + l)}`
}
var i2 = !1
  , Oc = "/"
  , d1 = e=>e === wo;
function h1(e) {
    let t = ""
      , n = 0
      , r = -1
      , i = 0
      , o = 0;
    for (let a = 0; a <= e.length; ++a) {
        if (a < e.length)
            o = jr(e, a);
        else {
            if (d1(o))
                break;
            o = wo
        }
        if (d1(o)) {
            if (!(r === a - 1 || i === 1))
                if (i === 2) {
                    if (t.length < 2 || n !== 2 || jr(t, t.length - 1) !== cp || jr(t, t.length - 2) !== cp) {
                        if (t.length > 2) {
                            let s = f1(t, Oc);
                            s === -1 ? (t = "",
                            n = 0) : (t = ko(t, 0, s),
                            n = t.length - 1 - f1(t, Oc)),
                            r = a,
                            i = 0;
                            continue
                        } else if (t.length !== 0) {
                            t = "",
                            n = 0,
                            r = a,
                            i = 0;
                            continue
                        }
                    }
                    i2 && (t += t.length > 0 ? `${Oc}..` : "..",
                    n = 2)
                } else
                    t.length > 0 ? t += `${Oc}${ko(e, r + 1, a)}` : t = ko(e, r + 1, a),
                    n = a - r - 1;
            r = a,
            i = 0
        } else
            o === cp && i !== -1 ? ++i : i = -1
    }
    return t
}
function XS(e) {
    let t = typeof _ < "u" ? _.location.search : "";
    return t ? o2(t, e) : e
}
function o2(e, t) {
    let n = t.indexOf("#")
      , r = n === -1 ? t : t.substring(0, n)
      , i = n === -1 ? "" : t.substring(n)
      , o = r.indexOf("?");
    if (o === -1)
        return r + e + i;
    let a = new URLSearchParams(e)
      , s = r.substring(o + 1)
      , l = new URLSearchParams(s);
    for (let[c,u] of a)
        l.has(c) || l.append(c, u);
    return r.substring(0, o + 1) + l.toString() + i
}
function Zc(e) {
    return typeof e == "object" && e !== null && !Array.isArray(e)
}
function rs(e) {
    return typeof e == "string"
}
var a2 = "preload";
function YS(e) {
    return typeof e == "object" && e !== null && !b.isValidElement(e) && a2 in e
}
function iH(e) {
    let t = b.lazy(e), n, r, i = b.forwardRef(function(a, s) {
        return b.createElement(r ?? t, Object.assign(s ? {
            ref: s
        } : {}, a))
    });
    return i.preload = ()=>(n || (n = e().then(o=>(r = o.default,
    r))),
    n),
    i
}
function Wp(e, t) {
    if (t && e)
        return e.elements && t in e.elements ? e.elements[t] : t
}
function s2(e) {
    return /bot|Mediapartners-Google|Google-PageRenderer|yandex|ia_archiver/i.test(e)
}
async function l2(e, t, n, r, i, o, a) {
    var s, l, c;
    let u = e
      , f = !1
      , d = {
        ...o
    }
      , h = Array.from(u.matchAll(Ci))
      , g = await Promise.all(h.map(async p=>{
        var v;
        let x = p?.[0]
          , C = p?.[1];
        if (!x || !C)
            throw new Error("Failed to replace path variables: unexpected regex match group");
        let w = o[C];
        if (!w || !rs(w))
            throw new Error(`No slug found for path variable ${C}`);
        let k = await ((v = a?.[i]) === null || v === void 0 ? void 0 : v.call(a));
        if (!k || !t)
            return w;
        let E = await k.getRecordIdBySlug(w, t);
        if (!E)
            return w;
        let I = await k.getSlugByRecordId(E, n);
        if (!I) {
            f = !0;
            let P = await k.getSlugByRecordId(E, r);
            return P && (d[C] = P),
            P ?? w
        }
        return d[C] = I,
        I
    }
    ))
      , y = 0
      , S = ""
      , m = !1;
    for (let p = 0; p < h.length; p++) {
        let v = h[p]
          , x = g[p];
        !v || !x || (S += u.substring(y, v.index),
        y = ((s = v.index) !== null && s !== void 0 ? s : 0) + ((c = (l = v[0]) === null || l === void 0 ? void 0 : l.length) !== null && c !== void 0 ? c : 0),
        S += g[p],
        m = !0)
    }
    return m && (u = S),
    {
        path: u,
        pathVariables: d,
        isMissingInLocale: f
    }
}
async function c2({currentLocale: e, nextLocale: t, defaultLocale: n, route: r, pathVariables: i, collectionUtils: o, preserveQueryParams: a}) {
    let {path: s} = r
      , l = {
        path: s,
        pathVariables: i,
        isMissingInLocale: !1
    };
    if (!s)
        return l;
    if (i && r.collectionId)
        try {
            l = await l2(s, e, t, n, r.collectionId, i, o)
        } catch {}
    return t.slug && (l.path = "/" + t.slug + l.path),
    a && l.path && (l.path = XS(l.path)),
    l
}
function u2(e, t, {global: n, routes: r}) {
    var i;
    return ((i = r[e]) === null || i === void 0 ? void 0 : i[t]) || n
}
var f2 = {
    global: void 0,
    routes: {}
}
  , GS = b.createContext(f2);
function lH({children: e, value: t}) {
    return T(GS.Provider, {
        value: t,
        children: e
    })
}
function d2() {
    return b.useContext(GS)
}
var up = 10
  , h2 = 1e4;
function p2(e) {
    let t = up
      , n = e.next(0)
      , r = [n.value];
    for (; !n.done && t < h2; )
        n = e.next(t),
        r.push(n.value),
        t += up;
    return r.length === 1 && r.push(n.value),
    {
        easing: `linear(${r.join(",")})`,
        duration: t - up
    }
}
var sr = e=>`--view-transition-${e}`;
function _p(e) {
    return [parseFloat(e), e.endsWith("px") ? "px" : "%"]
}
function KS(e) {
    let {innerWidth: t, innerHeight: n} = _
      , [r,i] = _p(e.x)
      , [o,a] = _p(e.y);
    return {
        x: i === "px" ? r : t * (r / 100),
        y: a === "px" ? o : n * (o / 100)
    }
}
var m2 = {
    makeKeyframe: (e,t,n)=>{
        let r = 0;
        return (n === "exit" && e.angularDirection === "clockwise" && t === "start" || n === "exit" && e.angularDirection === "counter-clockwise" && t === "end" || n === "enter" && e.angularDirection === "counter-clockwise" && t === "start" || n === "enter" && e.angularDirection === "clockwise" && t === "end") && (r = e.sweepAngle / 360 * 100),
        `${sr("conic-offset")}: ${r}%;`
    }
    ,
    makeStyles: (e,t)=>{
        let n = `var(${sr("conic-offset")})`
          , r = t === "exit" && e.angularDirection === "clockwise" || t === "enter" && e.angularDirection === "counter-clockwise"
          , i = r ? "transparent" : "black"
          , o = r ? "black" : "transparent"
          , a = "conic-gradient(from ";
        return a += `${e.angle}deg at ${e.x} ${e.y}, `,
        a += `${i} 0%, ${i} ${n}, `,
        a += `${o} ${n}, ${o} 100%)`,
        `mask-image: ${a}; -webkit-mask-image: ${a};`
    }
    ,
    makePropertyRules: ()=>`
        @property ${sr("conic-offset")} {
            syntax: '<percentage>';
            initial-value: 0%;
            inherits: false;
        }
    `
}
  , v2 = {
    makeKeyframe: (e,t)=>{
        let {x: n, y: r} = KS(e);
        return t === "start" ? `clip-path: circle(0 at ${n}px ${r}px);` : `clip-path: circle(${Math.hypot(Math.max(n, _.innerWidth - n), Math.max(r, _.innerHeight - r))}px at ${n}px ${r}px);`
    }
}
  , g2 = {
    makeKeyframe: (e,t)=>{
        let {x: n, y: r} = KS(e)
          , i = _.innerHeight - r
          , o = _.innerWidth - n;
        return t === "start" ? `clip-path: inset(${r}px ${o}px ${i}px ${n}px round ${e.round}px);` : "clip-path: inset(0 round 0);"
    }
}
  , y2 = {
    makeKeyframe: (e,t,n)=>{
        let[,r] = _p(e.width)
          , i = `0${r}`;
        return (t === "start" && n === "exit" || t === "end" && n === "enter") && (i = e.width),
        `${sr("blinds-width")}: ${i};`
    }
    ,
    makeStyles: (e,t)=>{
        let n = `var(${sr("blinds-width")})`
          , r = t === "exit" ? "transparent" : "black"
          , i = t === "exit" ? "black" : "transparent"
          , o = "repeating-linear-gradient(";
        return o += e.angle + 90 + "deg, ",
        o += `${r} 0px, ${r} ${n}, `,
        o += `${i} ${n}, ${i} ${e.width})`,
        `mask-image: ${o}; -webkit-mask-image: ${o};`
    }
    ,
    makePropertyRules: ()=>`
            @property ${sr("blinds-width")} {
                syntax: '<length-percentage>';
                initial-value: 0px;
                inherits: false;
            }
        `
}
  , b2 = {
    makeKeyframe: (e,t,n)=>{
        let r = t === "start" && n === "exit" || t === "end" && n === "enter" ? 1 : 0;
        return `${sr("wipe-offset")}: ${r};`
    }
    ,
    makeStyles: (e,t)=>{
        let n = `var(${sr("wipe-offset")})`
          , r = t === "exit" ? "transparent" : "black"
          , i = t === "exit" ? "black" : "transparent"
          , o = "linear-gradient(";
        return o += e.angle + 90 + "deg, ",
        o += `${r} calc(calc(0% - ${e.width}) + calc(calc(100% + ${e.width}) * ${n})), `,
        o += `${i} calc(calc(100% + ${e.width}) * ${n}))`,
        `mask-image: ${o}; -webkit-mask-image: ${o};`
    }
    ,
    makePropertyRules: ()=>`
            @property ${sr("wipe-offset")} {
                syntax: '<number>';
                initial-value: 0;
                inherits: false;
            }
        `
}
  , x2 = {
    circle: v2,
    conic: m2,
    inset: g2,
    blinds: y2,
    wipe: b2
}
  , S2 = {
    opacity: 1,
    x: "0px",
    y: "0px",
    scale: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    mask: void 0
};
function p1(e, t, n, r) {
    var i;
    let o = `
      opacity: ${e.opacity};
      transform: translate(${e.x}, ${e.y}) scale(${e.scale}) rotateX(${e.rotateX}deg) rotateY(${e.rotateY}deg) rotateZ(${e.rotate}deg);
    `;
    return e.mask && (o += ((i = r?.makeKeyframe) === null || i === void 0 ? void 0 : i.call(r, e.mask, t, n)) || ""),
    o
}
function w2(e) {
    return e ? x2[e] : void 0
}
function m1(e, {transition: t, ...n}) {
    var r;
    let i = "view-transition-" + e
      , o = {
        duration: "0s",
        easing: "linear"
    };
    if (t.type === "tween")
        o.duration = t.duration + "s",
        o.easing = `cubic-bezier(${t.ease.join(",")})`;
    else if (t.type === "spring") {
        let {easing: c, duration: u} = p2(ia({
            keyframes: [0, 1],
            stiffness: t.stiffness,
            damping: t.damping,
            mass: t.mass,
            restDelta: .001,
            restSpeed: 1e-4
        }));
        o.duration = u + "ms",
        o.easing = c
    }
    let a = w2((r = n?.mask) === null || r === void 0 ? void 0 : r.type)
      , s = p1(n, "start", e, a)
      , l = p1({
        ...S2,
        mask: n.mask
    }, "end", e, a);
    return e === "exit" && ([s,l] = [l, s]),
    `
        ${n.mask && a?.makePropertyRules ? a.makePropertyRules(n.mask) : ""}

        @keyframes ${i} {
            0% {
                ${s}
            }

            100% {
                ${l}
            }
        }

        ::view-transition-${e === "enter" ? "new" : "old"}(root) {
            animation-name: ${i};
            animation-duration: ${o.duration};
            animation-delay: ${t.delay}s;
            animation-timing-function: ${o.easing};
            animation-fill-mode: both;
            ${n.mask && a?.makeStyles ? a.makeStyles(n.mask, e) : ""}
        }
    `
}
var qS = "view-transition-styles"
  , C2 = {
    x: "0px",
    y: "0px",
    scale: 1,
    opacity: 1,
    rotate3d: !1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    mask: void 0,
    transition: {
        type: "tween",
        delay: 0,
        duration: .2,
        ease: [.27, 0, .51, 1],
        stiffness: 400,
        damping: 30,
        mass: 1
    }
};
function k2({exit: e=C2, enter: t}) {
    let n = document.createElement("style");
    n.id = qS;
    let r = `
        @media (prefers-reduced-motion) {
            ::view-transition-group(*),
            ::view-transition-old(*),
            ::view-transition-new(*) {
                animation: none !important;
            }
        }
    `;
    (e.mask || t.mask || e.opacity || t.opacity || e.transition.delay || t.transition.delay) && (r += `
            ::view-transition-old(*),
            ::view-transition-new(*) {
                mix-blend-mode: normal;
            }
        `),
    r += `
        ::view-transition-old(*),
        ::view-transition-new(*) {
            backface-visibility: hidden;
        }
    `,
    r += m1("exit", e),
    r += m1("enter", t),
    n.textContent = r,
    document.head.appendChild(n)
}
function T2() {
    J.render(()=>{
        let e = document.getElementById(qS);
        e && document.head.removeChild(e)
    }
    )
}
function E2() {
    return !!document.startViewTransition
}
function R2(e, t) {
    if (!E2())
        return void e();
    k2(t);
    let n = document.startViewTransition(e);
    return Promise.all([n.ready, n.finished]).then(T2).catch(()=>{}
    ),
    n
}
function QS() {
    let e = d2()
      , t = O(void 0);
    return $(()=>{
        t.current && (t.current(),
        t.current = void 0)
    }
    ),
    ue((n,r,i)=>{
        let o = u2(n, r, e);
        if (o) {
            let a = new Promise(l=>{
                t.current = l
            }
            );
            return R2(async()=>{
                i(),
                await a
            }
            , o)
        } else
            return i()
    }
    , [e])
}
function v1(e, t, {currentRoutePath: n, currentPathVariables: r, hash: i, pathVariables: o, localeId: a, preserveQueryParams: s}) {
    let {path: l} = t;
    if (l)
        try {
            let c = Up(t, {
                currentRoutePath: n,
                currentPathVariables: r,
                hash: i,
                pathVariables: o,
                preserveQueryParams: s
            });
            ZS({
                routeId: e,
                hash: i,
                pathVariables: o,
                localeId: a
            }, c)
        } catch {}
}
function P2(e, t) {
    _.history.replaceState(e, "", t)
}
function ZS(e, t) {
    _.history.pushState(e, "", t)
}
function I2({disabled: e, routeId: t, initialPathVariables: n, initialLocaleId: r}) {
    b.useLayoutEffect(()=>{
        e || P2({
            routeId: t,
            pathVariables: n,
            localeId: r
        })
    }
    , [])
}
function F2(e, t) {
    let n = QS()
      , r = b.useRef(void 0)
      , i = b.useCallback(({state: a})=>{
        var s, l, c;
        if (!Zc(a))
            return;
        let {routeId: u, hash: f, pathVariables: d, localeId: h} = a;
        if (!rs(u))
            return;
        let g = ()=>{
            t(u, rs(h) ? h : void 0, rs(f) ? f : void 0, Zc(d) ? d : void 0, !1, !0)
        }
          , y = n(e.current, u, g);
        y ? y.updateCallbackDone.then((s = r.current) === null || s === void 0 ? void 0 : s.resolve).catch((l = r.current) === null || l === void 0 ? void 0 : l.reject) : (c = r.current) === null || c === void 0 || c.resolve()
    }
    , [e, t, n])
      , o = ue(a=>{
        a.navigationType === "traverse" && a.intercept({
            async handler() {
                await new Promise((s,l)=>{
                    r.current = {
                        resolve: s,
                        reject: l
                    }
                }
                )
            },
            scroll: "after-transition"
        })
    }
    , []);
    b.useEffect(()=>{
        var a;
        return _.addEventListener("popstate", i),
        (a = _.navigation) === null || a === void 0 || a.addEventListener("navigate", o),
        ()=>{
            var s;
            _.removeEventListener("popstate", i),
            (s = _.navigation) === null || s === void 0 || s.removeEventListener("navigate", o)
        }
    }
    , [i, o])
}
function _2(e, t, n) {
    let r = Wp(t, e);
    if (!r)
        return;
    let i = Object.assign({}, t?.elements, n);
    return r.replace(Ci, (o,a)=>{
        var s;
        return String((s = i[a]) !== null && s !== void 0 ? s : o)
    }
    )
}
function Up(e, {currentRoutePath: t, currentPathVariables: n, hash: r, pathVariables: i, hashVariables: o, relative: a=!0, preserveQueryParams: s}) {
    var l;
    let c = t ?? "/";
    n && (c = c.replace(Ci, (g,y)=>{
        var S;
        return String((S = n[y]) !== null && S !== void 0 ? S : g)
    }
    ));
    let f = (l = e?.path) !== null && l !== void 0 ? l : "/";
    i && (f = f.replace(Ci, (g,y)=>{
        var S;
        return String((S = i[y]) !== null && S !== void 0 ? S : g)
    }
    ));
    let d = _2(r, e, o)
      , h = c === f && d;
    return a && (f = US(c, f)),
    (s || h) && (f = XS(f)),
    d && (f = `${f}#${d}`),
    f
}
async function L2(e, t, n) {
    if (!e.path || !t)
        return !1;
    let i = `${n.slug ? `/${n.slug}` : ""}${WS(e.path, t)}`;
    return (await fetch(i, {
        method: "HEAD",
        redirect: "manual"
    })).type === "opaqueredirect" ? (_.location.href = _.location.origin + i,
    !0) : !1
}
async function M2(e) {
    let t = await c2(e);
    if (t) {
        try {
            localStorage.setItem("preferredLocale", e.nextLocale.code)
        } catch {}
        try {
            if (typeof t.path != "string")
                throw new Error("Expected result.path to be a string");
            if (t.isMissingInLocale && await L2(e.route, t.pathVariables, e.nextLocale))
                return;
            ZS({
                routeId: e.routeId,
                pathVariables: t.pathVariables,
                localeId: e.nextLocale.id
            }, t.path)
        } catch {}
        return t
    }
}
function O2(e, t) {
    if (e.routeId !== t.routeId)
        return !1;
    if (e.pathVariables === t.pathVariables)
        return !0;
    let n = e.pathVariables || {}
      , r = t.pathVariables || {};
    return n.length === r.length && Object.keys(n).every(i=>n[i] === r[i])
}
function JS(e) {
    return b.useCallback(t=>e[t], [e])
}
var Xp = b.createContext({});
function D2({api: e, children: t}) {
    return T(Xp.Provider, {
        value: e,
        children: t
    })
}
function uu() {
    return b.useContext(Xp)
}
function A2({routes: e, children: t}) {
    let n = JS(e);
    return T(Xp.Provider, {
        value: {
            getRoute: n
        },
        children: t
    })
}
var V2 = class extends xe {
    constructor() {
        super(...arguments),
        this.state = {
            error: void 0
        }
    }
    static getDerivedStateFromError(e) {
        return console.error("Derived error in SuspenseErrorBoundary", e),
        {
            error: e
        }
    }
    componentDidCatch(e, t) {
        var n;
        console.error("Caught error in SuspenseErrorBoundary", e, t),
        (n = _.__framer_events) === null || n === void 0 || n.push(["published_site_load_recoverable_error", {
            message: String(e),
            componentStack: t?.componentStack
        }])
    }
    render() {
        if (this.state.error === void 0)
            return this.props.children;
        if (this.state.error instanceof jS)
            throw this.state.error.cause;
        return T(Ao, {
            children: this.props.fallbackChildren
        })
    }
}
  , B2 = typeof _ < "u" ? new Promise(()=>{}
) : null;
function z2() {
    if (typeof _ > "u")
        return null;
    throw B2
}
function H2({children: e}) {
    return T(V2, {
        fallbackChildren: e,
        children: T(Ao, {
            fallback: T(z2, {}),
            children: e
        })
    })
}
var g1 = "default";
function N2() {
    let[e,t] = b.useState(0);
    return [e, b.useCallback(()=>t(n=>n + 1), [])]
}
var $2 = async()=>{}
  , j2 = {
    activeLocale: null,
    locales: [],
    setLocale: $2
}
  , ew = b.createContext(j2);
function Yp() {
    return b.useContext(ew)
}
function W2(e) {
    let t = `start-${e}`
      , n = `end-${e}`
      , r = O(void 0);
    return $(()=>{
        r.current && (r.current(),
        r.current = void 0)
    }
    ),
    ue(()=>{
        let i = new Promise(o=>{
            r.current = o
        }
        );
        performance.mark(t),
        i.then(()=>{
            performance.mark(n),
            performance.measure(e, t, n)
        }
        ).catch(()=>{}
        )
    }
    , [e, t, n])
}
function y1(e, t, n) {
    let r = e && document.getElementById(e);
    if (r) {
        Y2(r, t);
        return
    }
    n || _.scrollTo(0, 0)
}
function U2(e) {
    let t = b.useRef([]);
    return b.useLayoutEffect(()=>{
        var n;
        !((n = t.current) === null || n === void 0) && n.length && (t.current.forEach(r=>r()),
        t.current = [])
    }
    , [e]),
    b.useCallback(n=>{
        t.current.push(n)
    }
    , [])
}
function X2({defaultPageStyle: e, disableHistory: t, initialPathVariables: n, initialRoute: r, notFoundPage: i, collectionUtils: o, routes: a, initialLocaleId: s, locales: l=[], preserveQueryParams: c=!1, enableSuspenseThatPreservesDom: u}) {
    I2({
        disabled: t,
        routeId: r,
        initialPathVariables: n,
        initialLocaleId: s
    });
    let f = QS()
      , d = W2("route-change")
      , h = b.useRef(r)
      , g = b.useRef(n)
      , y = b.useRef(s)
      , S = y.current
      , m = b.useMemo(()=>{
        var V;
        return (V = l.find(({id: W})=>S ? W === S : W === g1)) !== null && V !== void 0 ? V : null
    }
    , [S, l])
      , [p,v] = N2()
      , x = b.useMemo(()=>({
        activeLocale: m,
        locales: l,
        setLocale: async V=>{
            let W;
            rs(V) ? W = V : Zc(V) && (W = V.id);
            let A = l.find(({id: K})=>K === g1)
              , q = l.find(({id: K})=>K === W);
            if (!q)
                return;
            let B = h.current
              , Y = a[B];
            if (Y)
                try {
                    let K = await M2({
                        currentLocale: m,
                        nextLocale: q,
                        route: Y,
                        routeId: B,
                        defaultLocale: A,
                        pathVariables: g.current,
                        collectionUtils: o,
                        preserveQueryParams: c
                    });
                    if (!K)
                        return;
                    g.current = K.pathVariables,
                    y.current = q.id,
                    f(h.current, B, ()=>Fi(v)),
                    d()
                } catch {}
        }
    }), [m, o, v, l, d, a, f, c])
      , C = U2(p)
      , w = b.useCallback((V,W,A,q,B=!1,Y=!1)=>{
        h.current = V,
        g.current = q,
        y.current = W,
        C(()=>{
            y1(A, B, Y)
        }
        ),
        Fi(v),
        d()
    }
    , [v, d, C]);
    F2(h, w);
    let k = b.useCallback((V,W,A,q)=>{
        var B, Y;
        let K = a[V];
        if (A) {
            let re = new Set
              , ut = (B = K?.path) !== null && B !== void 0 ? B : "/";
            for (let Q of ut.matchAll(Ci)) {
                let Mt = Q[1];
                if (Mt === void 0)
                    throw new Error("A matching path variable should not be undefined");
                re.add(Mt)
            }
            A = Object.fromEntries(Object.entries(A).filter(([Q])=>re.has(Q)))
        }
        let Z = Wp(K, W);
        if (O2({
            routeId: h.current,
            pathVariables: g.current
        }, {
            routeId: V,
            pathVariables: A
        })) {
            if (((Y = _.history.state) === null || Y === void 0 ? void 0 : Y.hash) !== W && !t) {
                let re = a[V];
                re && v1(V, re, {
                    currentRoutePath: re.path,
                    currentPathVariables: g.current,
                    pathVariables: A,
                    hash: W,
                    localeId: y.current,
                    preserveQueryParams: c
                })
            }
            y1(Z, q, !1);
            return
        }
        if (!K)
            return;
        if (!t) {
            let re = a[h.current];
            v1(V, K, {
                currentRoutePath: re?.path,
                currentPathVariables: g.current,
                hash: W,
                pathVariables: A,
                localeId: y.current,
                preserveQueryParams: c
            })
        }
        let Ut = ()=>w(V, y.current, Z, A, q, !1);
        f(h.current, V, Ut)
    }
    , [a, t, w, f, c])
      , E = JS(a)
      , I = h.current
      , P = g.current
      , z = b.useMemo(()=>({
        navigate: k,
        getRoute: E,
        currentRouteId: I,
        currentPathVariables: P,
        routes: a,
        collectionUtils: o,
        preserveQueryParams: c
    }), [k, E, I, P, a, o, c])
      , L = a[h.current];
    if (!L)
        throw new Error(`Router cannot find route for ${h.current}`);
    let ee = !m || !L.includedLocales || L.includedLocales.includes(m.id)
      , H = L.path && P ? WS(L.path, P) : L.path
      , te = String(S) + H
      , G = T(t2, {
        notFoundPage: i,
        defaultPageStyle: e,
        forceUpdateKey: p,
        children: T(b.Fragment, {
            children: ee ? Fp(L.page, e) : i && Fp(i, e)
        }, te)
    });
    return T(D2, {
        api: z,
        children: T(ew.Provider, {
            value: x,
            children: u ? T(H2, {
                children: G
            }) : T(b.Suspense, {
                fallback: null,
                children: G
            })
        })
    })
}
function Y2(e, t) {
    let n = t ? {
        behavior: "smooth",
        block: "start",
        inline: "nearest"
    } : void 0;
    e.scrollIntoView(n)
}
var Dc, fp, b1;
function G2(e) {
    if (b1 !== e) {
        Dc = {};
        for (let[t,{path: n}] of Object.entries(e))
            n && (Dc[n] = {
                path: n,
                depth: q2(n),
                routeId: t
            });
        fp = Object.values(Dc),
        fp.sort(({depth: t},{depth: n})=>n - t),
        b1 = e
    }
    return [Dc, fp]
}
function K2(e, t, n=!0, r=[]) {
    let[i,o] = G2(e), a, s, l = t;
    if (r.length > 0) {
        let d = l.split("/").find(Boolean);
        if (d && (a = r.find(({slug: h})=>h === d),
        a && (s = a.id,
        l = l.substring(a.slug.length + 1))),
        !s) {
            let h = r.find(({slug: g})=>g === "");
            h && (s = h.id)
        }
    }
    let c = i[l];
    if (c) {
        let d = x1(l, c.path);
        if (d.isMatch)
            return {
                routeId: c.routeId,
                localeId: s,
                pathVariables: d.pathVariables
            }
    }
    for (let {path: d, routeId: h} of o) {
        let g = x1(l, d);
        if (g.isMatch)
            return {
                routeId: h,
                localeId: s,
                pathVariables: g.pathVariables
            }
    }
    if (!n)
        throw new Error("No exact match found for path");
    let u = i["/"];
    if (u)
        return {
            routeId: u.routeId,
            localeId: s
        };
    let f = Object.keys(e)[0];
    if (!f)
        throw new Error("Router should not have undefined routes");
    return {
        routeId: f,
        localeId: s
    }
}
function q2(e) {
    let t = e.replace(/^\/|\/$/gu, "");
    return t === "" ? 0 : t.split("/").length
}
function x1(e, t) {
    let n = []
      , i = Q2(t).replace(Ci, (c,u)=>(n.push(u),
    "([^/]+)"))
      , o = new RegExp(i + "$")
      , a = e.match(o);
    if (!a)
        return {
            isMatch: !1
        };
    if (a.length === 1)
        return {
            isMatch: !0
        };
    let s = {}
      , l = a.slice(1);
    for (let c = 0; c < n.length; ++c) {
        let u = n[c];
        if (u === void 0)
            continue;
        let f = l[c]
          , d = s[u];
        if (d) {
            if (d !== f)
                return {
                    isMatch: !1
                };
            continue
        }
        if (f === void 0)
            throw new Error("Path variable values cannot be undefined");
        s[u] = f
    }
    return {
        isMatch: !0,
        pathVariables: s
    }
}
function Q2(e) {
    return e.replace(/[|\\{}()[\]^$+*?.]/gu, "\\$&").replace(/-/gu, "\\x2d")
}
var Z2 = "page";
function S1(e) {
    return Zc(e) && Z2 in e && e.page !== void 0
}
var J2 = b.createContext(void 0);
function fu() {
    var e;
    let t = uu()
      , n = M(J2)
      , r = n ?? t.currentRouteId;
    if (!r)
        return;
    let i = (e = t.getRoute) === null || e === void 0 ? void 0 : e.call(t, r);
    if (i)
        return {
            ...i,
            id: r,
            pathVariables: n ? void 0 : t.currentPathVariables
        }
}
function wH() {
    var e;
    return (e = fu()) === null || e === void 0 ? void 0 : e.pathVariables
}
var tw = typeof _ < "u" && !s2(Ke.userAgent);
function eL(e, t=!0) {
    let {getRoute: n} = uu();
    b.useEffect(()=>{
        if (!(!n || !t || !tw))
            for (let r of e) {
                let i = n(r);
                i?.page && Gp(i.page)
            }
    }
    , [e, n, t])
}
function Gp(e) {
    tw && YS(e) && e.preload()
}
var w1 = new Set;
function cs(e, ...t) {
    w1.has(e) || (w1.add(e),
    console.warn(e, ...t))
}
function tL(e, t, n) {
    let r = n ? `, use ${n} instead` : ""
      , i = `Deprecation warning: ${e} will be removed in version ${t}${r}.`;
    cs(i)
}
var nw = class {
    constructor() {
        R(this, "observers", new Set),
        R(this, "transactions", {})
    }
    add(e) {
        this.observers.add(e);
        let t = !1;
        return ()=>{
            t || (t = !0,
            this.remove(e))
        }
    }
    remove(e) {
        this.observers.delete(e)
    }
    notify(e, t) {
        if (t) {
            let n = this.transactions[t] || e;
            n.value = e.value,
            this.transactions[t] = n
        } else
            this.callObservers(e)
    }
    finishTransaction(e) {
        let t = this.transactions[e];
        return delete this.transactions[e],
        this.callObservers(t, e)
    }
    callObservers(e, t) {
        let n = [];
        return new Set(this.observers).forEach(r=>{
            typeof r == "function" ? r(e, t) : (r.update(e, t),
            n.push(r.finish))
        }
        ),
        n
    }
}
  , He = (()=>{
    function e(t) {
        return tL("Animatable()", "2.0.0", "the new animation API (https://www.framer.com/api/animation/)"),
        vn(t) ? t : new rL(t)
    }
    return e.transaction = t=>{
        let n = Math.random()
          , r = new Set;
        t((a,s)=>{
            a.set(s, n),
            r.add(a)
        }
        , n);
        let o = [];
        r.forEach(a=>{
            o.push(...a.finishTransaction(n))
        }
        ),
        o.forEach(a=>{
            a(n)
        }
        )
    }
    ,
    e.getNumber = (t,n=0)=>e.get(t, n),
    e.get = (t,n)=>t == null ? n : vn(t) ? t.get() : t,
    e.objectToValues = t=>{
        if (!t)
            return t;
        let n = {};
        for (let r in t) {
            let i = t[r];
            vn(i) ? n[r] = i.get() : n[r] = i
        }
        return n
    }
    ,
    e
}
)()
  , C1 = "onUpdate"
  , k1 = "finishTransaction";
function vn(e) {
    return e !== null && typeof e == "object" && C1 in e && e[C1]instanceof Function && k1 in e && e[k1]instanceof Function
}
function nL(e, t) {
    return {
        interpolate(n, r) {
            let i = n.get()
              , o = r.get()
              , a = He(i);
            return s=>{
                let l = t.interpolate(i, o)(s);
                return a.set(l),
                a
            }
        },
        difference(n, r) {
            let i = n.get();
            return t.difference(i, r.get())
        }
    }
}
var rL = class {
    constructor(e) {
        this.value = e,
        R(this, "observers", new nw)
    }
    static interpolationFor(e, t) {
        if (vn(e))
            return nL(e, t)
    }
    get() {
        return this.value
    }
    set(e, t) {
        let n = this.value;
        vn(e) && (e = e.get()),
        this.value = e;
        let r = {
            value: e,
            oldValue: n
        };
        this.observers.notify(r, t)
    }
    finishTransaction(e) {
        return this.observers.finishTransaction(e)
    }
    onUpdate(e) {
        return this.observers.add(e)
    }
}
;
function Ac(e, t) {
    let r = 10 ** Math.round(Math.abs(t));
    return Math.round(e * r) / r
}
function T1(e, t) {
    return t === 0 ? Math.round(e) : (t -= t | 0,
    t < 0 && (t = 1 - t),
    Math.round(e - t) + t)
}
function et(e, t) {
    return {
        x: e,
        y: t
    }
}
(e=>{
    e.add = (...n)=>n.reduce((r,i)=>({
        x: r.x + i.x,
        y: r.y + i.y
    }), {
        x: 0,
        y: 0
    }),
    e.subtract = (n,r)=>({
        x: n.x - r.x,
        y: n.y - r.y
    }),
    e.multiply = (n,r)=>({
        x: n.x * r,
        y: n.y * r
    }),
    e.divide = (n,r)=>({
        x: n.x / r,
        y: n.y / r
    }),
    e.absolute = n=>({
        x: Math.abs(n.x),
        y: Math.abs(n.y)
    }),
    e.reverse = n=>({
        x: n.x * -1,
        y: n.y * -1
    }),
    e.pixelAligned = (n,r={
        x: 0,
        y: 0
    })=>({
        x: T1(n.x, r.x),
        y: T1(n.y, r.y)
    }),
    e.distance = (n,r)=>{
        let i = Math.abs(n.x - r.x)
          , o = Math.abs(n.y - r.y);
        return Math.sqrt(i * i + o * o)
    }
    ,
    e.angle = (n,r)=>Math.atan2(r.y - n.y, r.x - n.x) * 180 / Math.PI - 90,
    e.angleFromX = (n,r)=>Math.atan2(r.y - n.y, r.x - n.x) * 180 / Math.PI,
    e.isEqual = (n,r)=>n.x === r.x && n.y === r.y,
    e.rotationNormalizer = ()=>{
        let n;
        return r=>{
            typeof n != "number" && (n = r);
            let i = n - r
              , o = Math.abs(i) + 180
              , a = Math.floor(o / 360);
            return i < 180 && (r -= a * 360),
            i > 180 && (r += a * 360),
            n = r,
            r
        }
    }
    ;
    function t(n, r) {
        return {
            x: (n.x + r.x) / 2,
            y: (n.y + r.y) / 2
        }
    }
    e.center = t
}
)(et || (et = {}));
var RH = Number.MIN_VALUE;
var PH = {
    tension: 500,
    friction: 10,
    tolerance: 1 / 1e4,
    velocity: 0
};
var iL = Gt(G_(), 1)
  , Lp = {
    aliceblue: "f0f8ff",
    antiquewhite: "faebd7",
    aqua: "0ff",
    aquamarine: "7fffd4",
    azure: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "000",
    blanchedalmond: "ffebcd",
    blue: "00f",
    blueviolet: "8a2be2",
    brown: "a52a2a",
    burlywood: "deb887",
    burntsienna: "ea7e5d",
    cadetblue: "5f9ea0",
    chartreuse: "7fff00",
    chocolate: "d2691e",
    coral: "ff7f50",
    cornflowerblue: "6495ed",
    cornsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "0ff",
    darkblue: "00008b",
    darkcyan: "008b8b",
    darkgoldenrod: "b8860b",
    darkgray: "a9a9a9",
    darkgreen: "006400",
    darkgrey: "a9a9a9",
    darkkhaki: "bdb76b",
    darkmagenta: "8b008b",
    darkolivegreen: "556b2f",
    darkorange: "ff8c00",
    darkorchid: "9932cc",
    darkred: "8b0000",
    darksalmon: "e9967a",
    darkseagreen: "8fbc8f",
    darkslateblue: "483d8b",
    darkslategray: "2f4f4f",
    darkslategrey: "2f4f4f",
    darkturquoise: "00ced1",
    darkviolet: "9400d3",
    deeppink: "ff1493",
    deepskyblue: "00bfff",
    dimgray: "696969",
    dimgrey: "696969",
    dodgerblue: "1e90ff",
    firebrick: "b22222",
    floralwhite: "fffaf0",
    forestgreen: "228b22",
    fuchsia: "f0f",
    gainsboro: "dcdcdc",
    ghostwhite: "f8f8ff",
    gold: "ffd700",
    goldenrod: "daa520",
    gray: "808080",
    green: "008000",
    greenyellow: "adff2f",
    grey: "808080",
    honeydew: "f0fff0",
    hotpink: "ff69b4",
    indianred: "cd5c5c",
    indigo: "4b0082",
    ivory: "fffff0",
    khaki: "f0e68c",
    lavender: "e6e6fa",
    lavenderblush: "fff0f5",
    lawngreen: "7cfc00",
    lemonchiffon: "fffacd",
    lightblue: "add8e6",
    lightcoral: "f08080",
    lightcyan: "e0ffff",
    lightgoldenrodyellow: "fafad2",
    lightgray: "d3d3d3",
    lightgreen: "90ee90",
    lightgrey: "d3d3d3",
    lightpink: "ffb6c1",
    lightsalmon: "ffa07a",
    lightseagreen: "20b2aa",
    lightskyblue: "87cefa",
    lightslategray: "789",
    lightslategrey: "789",
    lightsteelblue: "b0c4de",
    lightyellow: "ffffe0",
    lime: "0f0",
    limegreen: "32cd32",
    linen: "faf0e6",
    magenta: "f0f",
    maroon: "800000",
    mediumaquamarine: "66cdaa",
    mediumblue: "0000cd",
    mediumorchid: "ba55d3",
    mediumpurple: "9370db",
    mediumseagreen: "3cb371",
    mediumslateblue: "7b68ee",
    mediumspringgreen: "00fa9a",
    mediumturquoise: "48d1cc",
    mediumvioletred: "c71585",
    midnightblue: "191970",
    mintcream: "f5fffa",
    mistyrose: "ffe4e1",
    moccasin: "ffe4b5",
    navajowhite: "ffdead",
    navy: "000080",
    oldlace: "fdf5e6",
    olive: "808000",
    olivedrab: "6b8e23",
    orange: "ffa500",
    orangered: "ff4500",
    orchid: "da70d6",
    palegoldenrod: "eee8aa",
    palegreen: "98fb98",
    paleturquoise: "afeeee",
    palevioletred: "db7093",
    papayawhip: "ffefd5",
    peachpuff: "ffdab9",
    peru: "cd853f",
    pink: "ffc0cb",
    plum: "dda0dd",
    powderblue: "b0e0e6",
    purple: "800080",
    rebeccapurple: "663399",
    red: "f00",
    rosybrown: "bc8f8f",
    royalblue: "4169e1",
    saddlebrown: "8b4513",
    salmon: "fa8072",
    sandybrown: "f4a460",
    seagreen: "2e8b57",
    seashell: "fff5ee",
    sienna: "a0522d",
    silver: "c0c0c0",
    skyblue: "87ceeb",
    slateblue: "6a5acd",
    slategray: "708090",
    slategrey: "708090",
    snow: "fffafa",
    springgreen: "00ff7f",
    steelblue: "4682b4",
    tan: "d2b48c",
    teal: "008080",
    thistle: "d8bfd8",
    tomato: "ff6347",
    turquoise: "40e0d0",
    violet: "ee82ee",
    wheat: "f5deb3",
    white: "fff",
    whitesmoke: "f5f5f5",
    yellow: "ff0",
    yellowgreen: "9acd32"
};
function Ar(e, t, n, r=!1) {
    let[i,o] = t
      , [a,s] = n
      , l = o - i;
    if (l === 0)
        return (s + a) / 2;
    let c = s - a;
    if (c === 0)
        return a;
    let u = a + (e - i) / l * c;
    if (r === !0)
        if (a < s) {
            if (u < a)
                return a;
            if (u > s)
                return s
        } else {
            if (u > a)
                return a;
            if (u < s)
                return s
        }
    return u
}
function To(e) {
    return !isNaN(e) && isFinite(e)
}
function Vr(e) {
    let t = Mp(e);
    return t !== void 0 ? e.includes("%") ? t / 100 : t : 0
}
function Mp(e) {
    let t = /\d?\.?\d+/u.exec(e);
    return t ? Number(t[0]) : void 0
}
var {hsluvToRgb: oL, rgbToHsluv: aL} = iL.default;
function sL(e, t, n) {
    let[r,i,o] = aL([e / 255, t / 255, n / 255]);
    return {
        h: r,
        s: i,
        l: o
    }
}
function lL(e, t, n, r=1) {
    let i = oL([e, t, n]);
    return {
        r: i[0] * 255,
        g: i[1] * 255,
        b: i[2] * 255,
        a: r
    }
}
function Vc(e, t, n, r) {
    let i = Math.round(e)
      , o = Math.round(t * 100)
      , a = Math.round(n * 100);
    return r === void 0 || r === 1 ? "hsv(" + i + ", " + o + "%, " + a + "%)" : "hsva(" + i + ", " + o + "%, " + a + "%, " + r + ")"
}
function cL(e, t, n) {
    return {
        r: To(e) ? bt(e, 255) * 255 : 0,
        g: To(t) ? bt(t, 255) * 255 : 0,
        b: To(n) ? bt(n, 255) * 255 : 0
    }
}
function E1(e, t, n, r) {
    let i = [hp(Math.round(e).toString(16)), hp(Math.round(t).toString(16)), hp(Math.round(n).toString(16))];
    return r && i[0].charAt(0) === i[0].charAt(1) && i[1].charAt(0) === i[1].charAt(1) && i[2].charAt(0) === i[2].charAt(1) ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) : i.join("")
}
function Kp(e, t, n) {
    let r, i, o = bt(e, 255), a = bt(t, 255), s = bt(n, 255), l = Math.max(o, a, s), c = Math.min(o, a, s), u = i = r = (l + c) / 2;
    if (l === c)
        u = i = 0;
    else {
        let f = l - c;
        switch (i = r > .5 ? f / (2 - l - c) : f / (l + c),
        l) {
        case o:
            u = (a - s) / f + (a < s ? 6 : 0);
            break;
        case a:
            u = (s - o) / f + 2;
            break;
        case s:
            u = (o - a) / f + 4;
            break
        }
        u /= 6
    }
    return {
        h: u * 360,
        s: i,
        l: r
    }
}
function dp(e, t, n) {
    return n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
}
function uL(e, t, n) {
    let r, i, o;
    if (e = bt(e, 360),
    t = bt(t * 100, 100),
    n = bt(n * 100, 100),
    t === 0)
        r = i = o = n;
    else {
        let a = n < .5 ? n * (1 + t) : n + t - n * t
          , s = 2 * n - a;
        r = dp(s, a, e + 1 / 3),
        i = dp(s, a, e),
        o = dp(s, a, e - 1 / 3)
    }
    return {
        r: r * 255,
        g: i * 255,
        b: o * 255
    }
}
function R1(e, t, n) {
    e = bt(e, 255),
    t = bt(t, 255),
    n = bt(n, 255);
    let r = Math.max(e, t, n), i = Math.min(e, t, n), o = r - i, a, s = r === 0 ? 0 : o / r, l = r;
    if (r === i)
        a = 0;
    else {
        switch (r) {
        case e:
            a = (t - n) / o + (t < n ? 6 : 0);
            break;
        case t:
            a = (n - e) / o + 2;
            break;
        case n:
            a = (e - t) / o + 4;
            break
        }
        a /= 6
    }
    return {
        h: a,
        s,
        v: l
    }
}
function fL(e, t, n) {
    e = bt(e, 360) * 6,
    t = bt(t * 100, 100),
    n = bt(n * 100, 100);
    let r = Math.floor(e)
      , i = e - r
      , o = n * (1 - t)
      , a = n * (1 - i * t)
      , s = n * (1 - (1 - i) * t)
      , l = r % 6
      , c = [n, a, o, o, s, n][l]
      , u = [s, n, n, a, o, o][l]
      , f = [o, o, s, n, n, a][l];
    return {
        r: c * 255,
        g: u * 255,
        b: f * 255
    }
}
function bt(e, t) {
    let n, r;
    if (typeof t == "string" ? n = parseFloat(t) : n = t,
    typeof e == "string") {
        dL(e) && (e = "100%");
        let i = hL(e);
        r = Math.min(n, Math.max(0, parseFloat(e))),
        i && (r = Math.floor(r * n) / 100)
    } else
        r = e;
    return Math.abs(r - n) < 1e-6 ? 1 : r % n / n
}
function dL(e) {
    return typeof e == "string" && e.includes(".") && parseFloat(e) === 1
}
function hL(e) {
    return typeof e == "string" && e.includes("%")
}
function hp(e) {
    return e.length === 1 ? "0" + e : "" + e
}
var Ln = (()=>{
    let e = "[-\\+]?\\d+%?"
      , n = "(?:" + "[-\\+]?\\d*\\.\\d+%?" + ")|(?:" + e + ")"
      , r = "[\\s|\\(]+(" + n + ")[,|\\s]+(" + n + ")[,|\\s]+(" + n + ")\\s*\\)?"
      , i = "[\\s|\\(]+(" + n + ")[,|\\s]+(" + n + ")[,|\\s]+(" + n + ")[,|\\s]+(" + n + ")\\s*\\)?";
    return {
        rgb: new RegExp("rgb" + r),
        rgba: new RegExp("rgba" + i),
        hsl: new RegExp("hsl" + r),
        hsla: new RegExp("hsla" + i),
        hsv: new RegExp("hsv" + r),
        hsva: new RegExp("hsva" + i),
        hex3: /^([\da-f])([\da-f])([\da-f])$/iu,
        hex6: /^([\da-f]{2})([\da-f]{2})([\da-f]{2})$/iu,
        hex4: /^#?([\da-f])([\da-f])([\da-f])([\da-f])$/iu,
        hex8: /^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})([\da-f]{2})$/iu
    }
}
)();
function qp(e) {
    if (e.includes("gradient(") || e.includes("var("))
        return !1;
    let t = /^[\s,#]+/u
      , n = e.replace(t, "").trimEnd().toLowerCase()
      , r = Lp[n];
    if (r && (n = r),
    n === "transparent")
        return {
            r: 0,
            g: 0,
            b: 0,
            a: 0,
            format: "name"
        };
    let i;
    return (i = Ln.rgb.exec(n)) ? {
        r: parseInt(i[1] ?? ""),
        g: parseInt(i[2] ?? ""),
        b: parseInt(i[3] ?? ""),
        a: 1,
        format: "rgb"
    } : (i = Ln.rgba.exec(n)) ? {
        r: parseInt(i[1] ?? ""),
        g: parseInt(i[2] ?? ""),
        b: parseInt(i[3] ?? ""),
        a: parseFloat(i[4] ?? ""),
        format: "rgb"
    } : (i = Ln.hsl.exec(n)) ? {
        h: parseInt(i[1] ?? ""),
        s: Vr(i[2] ?? ""),
        l: Vr(i[3] ?? ""),
        a: 1,
        format: "hsl"
    } : (i = Ln.hsla.exec(n)) ? {
        h: parseInt(i[1] ?? ""),
        s: Vr(i[2] ?? ""),
        l: Vr(i[3] ?? ""),
        a: parseFloat(i[4] ?? ""),
        format: "hsl"
    } : (i = Ln.hsv.exec(n)) ? {
        h: parseInt(i[1] ?? ""),
        s: Vr(i[2] ?? ""),
        v: Vr(i[3] ?? ""),
        a: 1,
        format: "hsv"
    } : (i = Ln.hsva.exec(n)) ? {
        h: parseInt(i[1] ?? ""),
        s: Vr(i[2] ?? ""),
        v: Vr(i[3] ?? ""),
        a: parseFloat(i[4] ?? ""),
        format: "hsv"
    } : (i = Ln.hex8.exec(n)) ? {
        r: Nt(i[1] ?? ""),
        g: Nt(i[2] ?? ""),
        b: Nt(i[3] ?? ""),
        a: P1(i[4] ?? ""),
        format: r ? "name" : "hex"
    } : (i = Ln.hex6.exec(n)) ? {
        r: Nt(i[1] ?? ""),
        g: Nt(i[2] ?? ""),
        b: Nt(i[3] ?? ""),
        a: 1,
        format: r ? "name" : "hex"
    } : (i = Ln.hex4.exec(n)) ? {
        r: Nt(`${i[1]}${i[1]}`),
        g: Nt(`${i[2]}${i[2]}`),
        b: Nt(`${i[3]}${i[3]}`),
        a: P1(i[4] + "" + i[4]),
        format: r ? "name" : "hex"
    } : (i = Ln.hex3.exec(n)) ? {
        r: Nt(`${i[1]}${i[1]}`),
        g: Nt(`${i[2]}${i[2]}`),
        b: Nt(`${i[3]}${i[3]}`),
        a: 1,
        format: r ? "name" : "hex"
    } : !1
}
function Nt(e) {
    return parseInt(e, 16)
}
function P1(e) {
    return Nt(e) / 255
}
var I1 = new Map
  , N = (()=>{
    function e(o, a, s, l) {
        if (typeof o == "string") {
            let u = I1.get(o);
            return u || (u = t(o),
            u === void 0 ? {
                ...e("black"),
                isValid: !1
            } : (I1.set(o, u),
            u))
        }
        let c = t(o, a, s, l);
        return c !== void 0 ? c : {
            ...e("black"),
            isValid: !1
        }
    }
    function t(o, a, s, l) {
        if (o === "")
            return;
        let c = pL(o, a, s, l);
        if (c) {
            let u = {
                r: c.r,
                g: c.g,
                b: c.b,
                a: c.a,
                h: c.h,
                s: c.s,
                l: c.l,
                initialValue: typeof o == "string" && c.format !== "hsv" ? o : void 0,
                roundA: Math.round(100 * c.a) / 100,
                format: c.format,
                mix: e.mix,
                toValue: ()=>e.toRgbString(u)
            };
            return u
        } else
            return
    }
    let n = {
        isRGB(o) {
            return o === "rgb" || o === "rgba"
        },
        isHSL(o) {
            return o === "hsl" || o === "hsla"
        }
    };
    e.inspect = (o,a)=>o.format === "hsl" ? `<${o.constructor.name} h:${o.h} s:${o.s} l:${o.l} a:${o.a}>` : o.format === "hex" || o.format === "name" ? `<${o.constructor.name} "${a}">` : `<${o.constructor.name} r:${o.r} g:${o.g} b:${o.b} a:${o.a}>`,
    e.isColor = o=>typeof o == "string" ? e.isColorString(o) : e.isColorObject(o),
    e.isColorString = o=>typeof o == "string" ? qp(o) !== !1 : !1,
    e.isColorObject = o=>o && typeof o != "string" && typeof o.r == "number" && typeof o.g == "number" && typeof o.b == "number" && typeof o.h == "number" && typeof o.s == "number" && typeof o.l == "number" && typeof o.a == "number" && typeof o.roundA == "number" && typeof o.format == "string",
    e.toString = o=>e.toRgbString(o),
    e.toHex = (o,a=!1)=>E1(o.r, o.g, o.b, a),
    e.toHexString = (o,a=!1)=>`#${e.toHex(o, a)}`,
    e.toRgbString = o=>o.a === 1 ? "rgb(" + Math.round(o.r) + ", " + Math.round(o.g) + ", " + Math.round(o.b) + ")" : "rgba(" + Math.round(o.r) + ", " + Math.round(o.g) + ", " + Math.round(o.b) + ", " + o.roundA + ")",
    e.toHusl = o=>({
        ...sL(o.r, o.g, o.b),
        a: o.roundA
    }),
    e.toHslString = o=>{
        let a = e.toHsl(o)
          , s = Math.round(a.h)
          , l = Math.round(a.s * 100)
          , c = Math.round(a.l * 100);
        return o.a === 1 ? "hsl(" + s + ", " + l + "%, " + c + "%)" : "hsla(" + s + ", " + l + "%, " + c + "%, " + o.roundA + ")"
    }
    ,
    e.toHsv = o=>{
        let a = R1(o.r, o.g, o.b);
        return {
            h: a.h * 360,
            s: a.s,
            v: a.v,
            a: o.a
        }
    }
    ,
    e.toHsvString = o=>{
        let a = R1(o.r, o.g, o.b)
          , s = Math.round(a.h * 360)
          , l = Math.round(a.s * 100)
          , c = Math.round(a.v * 100);
        return o.a === 1 ? "hsv(" + s + ", " + l + "%, " + c + "%)" : "hsva(" + s + ", " + l + "%, " + c + "%, " + o.roundA + ")"
    }
    ,
    e.toName = o=>{
        if (o.a === 0)
            return "transparent";
        if (o.a < 1)
            return !1;
        let a = E1(o.r, o.g, o.b, !0);
        for (let s of Object.keys(Lp))
            if (Lp[s] === a)
                return s;
        return !1
    }
    ,
    e.toHsl = o=>({
        h: Math.round(o.h),
        s: o.s,
        l: o.l,
        a: o.a
    }),
    e.toRgb = o=>({
        r: Math.round(o.r),
        g: Math.round(o.g),
        b: Math.round(o.b),
        a: o.a
    }),
    e.brighten = (o,a=10)=>{
        let s = e.toRgb(o);
        return s.r = Math.max(0, Math.min(255, s.r - Math.round(255 * -(a / 100)))),
        s.g = Math.max(0, Math.min(255, s.g - Math.round(255 * -(a / 100)))),
        s.b = Math.max(0, Math.min(255, s.b - Math.round(255 * -(a / 100)))),
        e(s)
    }
    ,
    e.lighten = (o,a=10)=>{
        let s = e.toHsl(o);
        return s.l += a / 100,
        s.l = Math.min(1, Math.max(0, s.l)),
        e(s)
    }
    ,
    e.darken = (o,a=10)=>{
        let s = e.toHsl(o);
        return s.l -= a / 100,
        s.l = Math.min(1, Math.max(0, s.l)),
        e(s)
    }
    ,
    e.saturate = (o,a=10)=>{
        let s = e.toHsl(o);
        return s.s += a / 100,
        s.s = Math.min(1, Math.max(0, s.s)),
        e(s)
    }
    ,
    e.desaturate = (o,a=10)=>{
        let s = e.toHsl(o);
        return s.s -= a / 100,
        s.s = Math.min(1, Math.max(0, s.s)),
        e(s)
    }
    ,
    e.grayscale = o=>e.desaturate(o, 100),
    e.hueRotate = (o,a)=>{
        let s = e.toHsl(o);
        return s.h += a,
        s.h = s.h > 360 ? s.h - 360 : s.h,
        e(s)
    }
    ,
    e.alpha = (o,a=1)=>e({
        r: o.r,
        g: o.g,
        b: o.b,
        a
    }),
    e.transparent = o=>e.alpha(o, 0),
    e.multiplyAlpha = (o,a=1)=>e({
        r: o.r,
        g: o.g,
        b: o.b,
        a: o.a * a
    }),
    e.interpolate = (o,a,s="rgb")=>{
        if (!e.isColorObject(o) || !e.isColorObject(a))
            throw new TypeError("Both arguments for Color.interpolate must be Color objects");
        return l=>e.mixAsColor(o, a, l, !1, s)
    }
    ,
    e.mix = (o,a,{model: s="rgb"}={})=>{
        let l = typeof o == "string" ? e(o) : o
          , c = e.interpolate(l, a, s);
        return u=>e.toRgbString(c(u))
    }
    ,
    e.mixAsColor = (o,a,s=.5,l=!1,c="rgb")=>{
        let u = null;
        if (n.isRGB(c))
            u = e({
                r: Ar(s, [0, 1], [o.r, a.r], l),
                g: Ar(s, [0, 1], [o.g, a.g], l),
                b: Ar(s, [0, 1], [o.b, a.b], l),
                a: Ar(s, [0, 1], [o.a, a.a], l)
            });
        else {
            let f, d;
            n.isHSL(c) ? (f = e.toHsl(o),
            d = e.toHsl(a)) : (f = e.toHusl(o),
            d = e.toHusl(a)),
            f.s === 0 ? f.h = d.h : d.s === 0 && (d.h = f.h);
            let h = f.h
              , g = d.h
              , y = g - h;
            y > 180 ? y = g - 360 - h : y < -180 && (y = g + 360 - h);
            let S = {
                h: Ar(s, [0, 1], [h, h + y], l),
                s: Ar(s, [0, 1], [f.s, d.s], l),
                l: Ar(s, [0, 1], [f.l, d.l], l),
                a: Ar(s, [0, 1], [o.a, a.a], l)
            };
            n.isHSL(c) ? u = e(S) : u = e(lL(S.h, S.s, S.l, S.a))
        }
        return u
    }
    ,
    e.random = (o=1)=>{
        function a() {
            return Math.floor(Math.random() * 255)
        }
        return e("rgba(" + a() + ", " + a() + ", " + a() + ", " + o + ")")
    }
    ,
    e.grey = (o=.5,a=1)=>(o = Math.floor(o * 255),
    e("rgba(" + o + ", " + o + ", " + o + ", " + a + ")")),
    e.gray = e.grey,
    e.rgbToHsl = (o,a,s)=>Kp(o, a, s),
    e.isValidColorProperty = (o,a)=>!!((o.toLowerCase().slice(-5) === "color" || o === "fill" || o === "stroke") && typeof a == "string" && e.isColorString(a)),
    e.difference = (o,a)=>{
        let s = (o.r + a.r) / 2
          , l = o.r - a.r
          , c = o.g - a.g
          , u = o.b - a.b
          , f = Math.pow(l, 2)
          , d = Math.pow(c, 2)
          , h = Math.pow(u, 2);
        return Math.sqrt(2 * f + 4 * d + 3 * h + s * (f - h) / 256)
    }
    ,
    e.equal = (o,a,s=.1)=>!(Math.abs(o.r - a.r) >= s || Math.abs(o.g - a.g) >= s || Math.abs(o.b - a.b) >= s || Math.abs(o.a - a.a) * 256 >= s);
    let r = Hi([0, 255], [0, 1]);
    function i(o) {
        o = r(o);
        let a = Math.abs(o);
        return a < .04045 ? o / 12.92 : (Math.sign(o) || 1) * Math.pow((a + .055) / 1.055, 2.4)
    }
    return e.luminance = o=>{
        let {r: a, g: s, b: l} = e.toRgb(o);
        return .2126 * i(a) + .7152 * i(s) + .0722 * i(l)
    }
    ,
    e.contrast = (o,a)=>{
        let s = e.luminance(o)
          , l = e.luminance(a);
        return (Math.max(s, l) + .05) / (Math.min(s, l) + .05)
    }
    ,
    e
}
)();
function pL(e, t, n, r=1) {
    let i;
    return typeof e == "number" && !Number.isNaN(e) && typeof t == "number" && !Number.isNaN(t) && typeof n == "number" && !Number.isNaN(n) ? i = Op({
        r: e,
        g: t,
        b: n,
        a: r
    }) : typeof e == "string" ? i = mL(e) : typeof e == "object" && (e.hasOwnProperty("r") && e.hasOwnProperty("g") && e.hasOwnProperty("b") ? i = Op(e) : i = rw(e)),
    i
}
function mL(e) {
    let t = qp(e);
    if (t)
        return t.format === "hsl" ? rw(t) : t.format === "hsv" ? vL(t) : Op(t)
}
function vL(e) {
    let t = fL(e.h, e.s, e.v);
    return {
        ...Kp(t.r, t.g, t.b),
        ...t,
        format: "rgb",
        a: e.a !== void 0 ? iw(e.a) : 1
    }
}
function Op(e) {
    let t = cL(e.r, e.g, e.b);
    return {
        ...Kp(t.r, t.g, t.b),
        ...t,
        format: "rgb",
        a: e.a !== void 0 ? iw(e.a) : 1
    }
}
function rw(e) {
    let t, n, r, i = {
        r: 0,
        g: 0,
        b: 0
    }, o = {
        h: 0,
        s: 0,
        l: 0
    };
    return t = To(e.h) ? e.h : 0,
    t = (t + 360) % 360,
    n = To(e.s) ? e.s : 1,
    typeof e.s == "string" && (n = Mp(e.s)),
    r = To(e.l) ? e.l : .5,
    typeof e.l == "string" && (r = Mp(e.l)),
    i = uL(t, n, r),
    o = {
        h: t,
        s: n,
        l: r
    },
    {
        ...i,
        ...o,
        a: e.a === void 0 ? 1 : e.a,
        format: "hsl"
    }
}
function iw(e) {
    return e = parseFloat(e),
    e < 0 && (e = 0),
    (isNaN(e) || e > 1) && (e = 1),
    e
}
var F1 = e=>e instanceof ul
  , IH = {
    delta: 1 / 60,
    maxValues: 1e4
};
var gL = Gt(K_(), 1)
  , {EventEmitter: yL} = gL.default
  , bL = class {
    constructor() {
        R(this, "_emitter", new yL)
    }
    eventNames() {
        return this._emitter.eventNames()
    }
    eventListeners() {
        let e = {};
        for (let t of this._emitter.eventNames())
            e[t] = this._emitter.listeners(t);
        return e
    }
    on(e, t) {
        this.addEventListener(e, t, !1, !1, this)
    }
    off(e, t) {
        this.removeEventListeners(e, t)
    }
    once(e, t) {
        this.addEventListener(e, t, !0, !1, this)
    }
    unique(e, t) {
        this.addEventListener(e, t, !1, !0, this)
    }
    addEventListener(e, t, n, r, i) {
        if (r) {
            for (let o of this._emitter.eventNames())
                if (t === this._emitter.listeners(o))
                    return
        }
        n === !0 ? this._emitter.once(e, t, i) : this._emitter.addListener(e, t, i)
    }
    removeEventListeners(e, t) {
        e ? this._emitter.removeListener(e, t) : this.removeAllEventListeners()
    }
    removeAllEventListeners() {
        this._emitter.removeAllListeners()
    }
    countEventListeners(e, t) {
        if (e)
            return this._emitter.listeners(e).length;
        {
            let n = 0;
            for (let r of this._emitter.eventNames())
                n += this._emitter.listeners(r).length;
            return n
        }
    }
    emit(e, ...t) {
        this._emitter.emit(e, ...t)
    }
}
  , xL = {
    addEventListener: ()=>{}
    ,
    removeEventListener: ()=>{}
    ,
    dispatchEvent: ()=>!1,
    ResizeObserver: void 0,
    onpointerdown: !1,
    onpointermove: !1,
    onpointerup: !1,
    ontouchstart: !1,
    ontouchmove: !1,
    ontouchend: !1,
    onmousedown: !1,
    onmousemove: !1,
    onmouseup: !1,
    devicePixelRatio: 1,
    scrollX: 0,
    scrollY: 0,
    location: {
        href: ""
    },
    setTimeout: ()=>0,
    clearTimeout: ()=>{}
    ,
    setInterval: ()=>0,
    clearInterval: ()=>{}
    ,
    requestAnimationFrame: ()=>0,
    cancelAnimationFrame: ()=>{}
    ,
    getSelection: ()=>null,
    matchMedia: e=>({
        matches: !1,
        media: e,
        onchange: ()=>{}
        ,
        addEventListener: ()=>{}
        ,
        removeEventListener: ()=>{}
        ,
        addListener: ()=>{}
        ,
        removeListener: ()=>{}
        ,
        dispatchEvent: ()=>!1
    }),
    innerHeight: 0,
    innerWidth: 0,
    SVGSVGElement: {}
}
  , jt = typeof _ > "u" ? xL : _
  , SL = e=>{
    setTimeout(e, 1 / 60)
}
  , wL = jt.requestAnimationFrame || SL
  , _1 = e=>wL(e)
  , Qa = 1 / 60
  , CL = class extends bL {
    constructor(e=!1) {
        super(),
        R(this, "_started", !1),
        R(this, "_frame", 0),
        R(this, "_frameTasks", []),
        R(this, "tick", ()=>{
            this._started && (_1(this.tick),
            this.emit("update", this._frame, Qa),
            this.emit("render", this._frame, Qa),
            this._processFrameTasks(),
            this._frame++)
        }
        ),
        e && this.start()
    }
    addFrameTask(e) {
        this._frameTasks.push(e)
    }
    _processFrameTasks() {
        var e;
        let t = this._frameTasks
          , n = t.length;
        if (n !== 0) {
            for (let r = 0; r < n; r++)
                (e = t[r]) == null || e.call(t);
            t.length = 0
        }
    }
    static set TimeStep(e) {
        Qa = e
    }
    static get TimeStep() {
        return Qa
    }
    start() {
        return this._started ? this : (this._frame = 0,
        this._started = !0,
        _1(this.tick),
        this)
    }
    stop() {
        return this._started = !1,
        this
    }
    get frame() {
        return this._frame
    }
    get time() {
        return this._frame * Qa
    }
}
  , ow = new CL
  , Oe = (e=>(e.canvas = "CANVAS",
e.export = "EXPORT",
e.thumbnail = "THUMBNAIL",
e.preview = "PREVIEW",
e))(Oe || {})
  , Jc = {
    target: "PREVIEW",
    zoom: 1
};
(e=>{
    function t() {
        return Jc.target
    }
    e.current = t;
    function n() {
        let r = Jc.target;
        return r === "CANVAS" || r === "EXPORT"
    }
    e.hasRestrictions = n
}
)(Oe || (Oe = {}));
var Bc = e=>({
    correct: (t,{delta: n, treeScale: r})=>{
        if (typeof t == "string" && (t = parseFloat(t)),
        t === 0)
            return "0px";
        let i = t;
        return n && r && (i = Math.round(t / n[e].scale / r[e]),
        i = Math.max(i, 1)),
        i + "px"
    }
});
mf({
    borderTopWidth: Bc("y"),
    borderLeftWidth: Bc("x"),
    borderRightWidth: Bc("x"),
    borderBottomWidth: Bc("y")
});
function le(e, ...t) {
    var n, r;
    if (e)
        return;
    let i = Error("Assertion Error" + (t.length > 0 ? ": " + t.join(" ") : ""));
    if (i.stack)
        try {
            let o = i.stack.split(`
`);
            (n = o[1]) != null && n.includes("assert") ? (o.splice(1, 1),
            i.stack = o.join(`
`)) : (r = o[0]) != null && r.includes("assert") && (o.splice(0, 1),
            i.stack = o.join(`
`))
        } catch {}
    throw i
}
function Wt(e, t) {
    throw t || new Error(e ? `Unexpected value: ${e}` : "Application entered invalid state")
}
var Po = b.createContext({
    getLayoutId: e=>null,
    persistLayoutIdCache: ()=>{}
    ,
    top: !1,
    enabled: !0
});
function kL({children: e}) {
    if (M(Po).top)
        return T(Ne, {
            children: e
        });
    let n = O({
        byId: {},
        byName: {},
        byLastId: {},
        byPossibleId: {},
        byLastName: {},
        byLayoutId: {},
        count: {
            byId: {},
            byName: {}
        }
    })
      , r = O({
        byId: {},
        byName: {},
        byLastId: {},
        byPossibleId: {},
        byLastName: {},
        byLayoutId: {}
    })
      , i = O(new Set).current
      , o = ue(({id: l, name: c, duplicatedFrom: u})=>{
        if (!l)
            return null;
        let f = c ? "byName" : "byId"
          , d = n.current[f][l];
        if (d)
            return d;
        let h = c || l;
        if (!u && !i.has(h) && (!n.current.byLayoutId[h] || n.current.byLayoutId[h] === h))
            return n.current.count[f][h] === void 0 && (n.current.count[f][h] = 0,
            n.current.byLayoutId[h] = h,
            r.current[f][l] = h),
            i.add(h),
            h;
        let g;
        if (u?.length)
            for (let w = u.length - 1; w >= 0; w--) {
                let k = u[w];
                le(!!k, "duplicatedId must be defined");
                let E = n.current[f][k]
                  , I = n.current.byLastId[k];
                if (I && !g) {
                    let L = n.current.byLayoutId[I]
                      , ee = !L || L === c;
                    I && !i.has(I) && (!c || ee) && (g = [I, k])
                }
                let P = E ? n.current.byLayoutId[E] : void 0
                  , z = !P || P === c;
                if (E && !i.has(E) && (!c || z))
                    return r.current[f][l] = E,
                    r.current.byLastId[k] = E,
                    i.add(E),
                    E
            }
        let y = n.current.byLastId[l];
        if (y && !i.has(y))
            return i.add(y),
            r.current.byId[l] = y,
            y;
        if (g) {
            let[w,k] = g;
            return r.current[f][l] = w,
            r.current.byLastId[k] = w,
            i.add(w),
            w
        }
        let S = n.current.byPossibleId[l];
        if (S && !i.has(S))
            return i.add(S),
            r.current.byId[l] = S,
            S;
        let m = u?.[0]
          , p = c || m || l
          , v = (n.current.count[f][p] ?? -1) + 1
          , {layoutId: x, value: C} = TL(p, v, i);
        if (n.current.count[f][p] = C,
        r.current[f][l] = x,
        u?.length && !c) {
            let w = u[u.length - 1];
            if (w && (r.current.byLastId[w] = x),
            u.length > 1)
                for (let k = 0; k < u.length - 1; k++) {
                    let E = u[k];
                    E !== void 0 && (r.current.byPossibleId[E] || (r.current.byPossibleId[E] = x))
                }
        }
        return r.current.byLayoutId[x] = h,
        i.add(x),
        x
    }
    , [])
      , a = ue(()=>{
        n.current = {
            byId: {
                ...n.current.byId,
                ...r.current.byId
            },
            byLastId: {
                ...n.current.byLastId,
                ...r.current.byLastId
            },
            byPossibleId: {
                ...n.current.byPossibleId,
                ...r.current.byPossibleId
            },
            byName: {
                ...n.current.byName,
                ...r.current.byName
            },
            byLastName: {
                ...n.current.byLastName,
                ...r.current.byLastName
            },
            byLayoutId: {
                ...n.current.byLayoutId,
                ...r.current.byLayoutId
            },
            count: {
                ...n.current.count,
                byName: {}
            }
        },
        r.current = {
            byId: {},
            byName: {},
            byLastId: {},
            byPossibleId: {},
            byLastName: {},
            byLayoutId: {}
        },
        i.clear()
    }
    , [])
      , s = O({
        getLayoutId: o,
        persistLayoutIdCache: a,
        top: !0,
        enabled: !0
    }).current;
    return T(Po.Provider, {
        value: s,
        children: e
    })
}
function TL(e, t, n) {
    let r = t
      , i = r ? `${e}-${r}` : e;
    for (; n.has(i); )
        r++,
        i = `${e}-${r}`;
    return {
        layoutId: i,
        value: r
    }
}
function EL({enabled: e=!0, ...t}) {
    let n = M(Po)
      , r = he(()=>({
        ...n,
        enabled: e
    }), [e]);
    return T(Po.Provider, {
        ...t,
        value: r
    })
}
function Hn(e) {
    let t = O(null);
    return t.current === null && (t.current = e()),
    t.current
}
var RL = {
    background: void 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    lineHeight: "1.4em",
    textOverflow: "ellipsis",
    overflow: "hidden",
    minHeight: 0,
    width: "100%",
    height: "100%"
}
  , PL = {
    ...RL,
    border: "1px solid rgba(149, 149, 149, 0.15)",
    borderRadius: 6,
    fontSize: "12px",
    backgroundColor: "rgba(149, 149, 149, 0.1)",
    color: "#a5a5a5"
}
  , aw = {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    maxWidth: "100%",
    flexShrink: 0,
    padding: "0 10px"
}
  , IL = {
    ...aw,
    fontWeight: 500
}
  , FL = {
    ...aw,
    whiteSpace: "pre",
    maxHeight: "calc(50% - calc(20px * var(--framerInternalCanvas-canvasPlaceholderContentScaleFactor, 1)))",
    WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)"
};
function AH(e) {
    let {error: t, file: n} = e
      , r = n ? `Error in ${_L(n)}` : "Error"
      , i = t instanceof Error ? t.message : "" + t;
    return ae("div", {
        style: PL,
        children: [T("div", {
            className: "text",
            style: IL,
            children: r
        }), i && T("div", {
            className: "text",
            style: FL,
            children: i
        })]
    })
}
function _L(e) {
    return e.startsWith("./") ? e.replace("./", "") : e
}
var BH = 992 - 5;
function U(e) {
    return typeof e == "number" && isFinite(e)
}
function LL(e) {
    return !e || !Object.keys(e).length && e.constructor === Object
}
function is(e) {
    return typeof e != "string" && typeof e != "number"
}
function os(e) {
    return e !== null && typeof e < "u" && typeof e != "boolean" && !LL(e)
}
var eu;
(e=>{
    function t(i, o) {
        return i === o ? !0 : !i || !o ? !1 : i.x === o.x && i.y === o.y && i.width === o.width && i.height === o.height
    }
    e.equals = t,
    e.atOrigin = i=>({
        ...i,
        x: 0,
        y: 0
    }),
    e.fromTwoPoints = (i,o)=>({
        x: Math.min(i.x, o.x),
        y: Math.min(i.y, o.y),
        width: Math.abs(i.x - o.x),
        height: Math.abs(i.y - o.y)
    }),
    e.fromRect = i=>({
        x: i.left,
        y: i.top,
        width: i.right - i.left,
        height: i.bottom - i.top
    }),
    e.multiply = (i,o)=>({
        x: i.x * o,
        y: i.y * o,
        width: i.width * o,
        height: i.height * o
    }),
    e.divide = (i,o)=>(0,
    e.multiply)(i, 1 / o),
    e.offset = (i,o)=>{
        let a = typeof o.x == "number" ? o.x : 0
          , s = typeof o.y == "number" ? o.y : 0;
        return {
            ...i,
            x: i.x + a,
            y: i.y + s
        }
    }
    ;
    function n(i, o) {
        if (o === 0)
            return i;
        let a = 2 * o;
        return {
            x: i.x - o,
            y: i.y - o,
            width: i.width + a,
            height: i.height + a
        }
    }
    e.inflate = n,
    e.pixelAligned = i=>{
        let o = Math.round(i.x)
          , a = Math.round(i.y)
          , s = Math.round(i.x + i.width)
          , l = Math.round(i.y + i.height)
          , c = Math.max(s - o, 0)
          , u = Math.max(l - a, 0);
        return {
            x: o,
            y: a,
            width: c,
            height: u
        }
    }
    ,
    e.halfPixelAligned = i=>{
        let o = Math.round(i.x * 2) / 2
          , a = Math.round(i.y * 2) / 2
          , s = Math.round((i.x + i.width) * 2) / 2
          , l = Math.round((i.y + i.height) * 2) / 2
          , c = Math.max(s - o, 1)
          , u = Math.max(l - a, 1);
        return {
            x: o,
            y: a,
            width: c,
            height: u
        }
    }
    ,
    e.round = (i,o=0)=>{
        let a = Ac(i.x, o)
          , s = Ac(i.y, o)
          , l = Ac(i.width, o)
          , c = Ac(i.height, o);
        return {
            x: a,
            y: s,
            width: l,
            height: c
        }
    }
    ,
    e.roundToOutside = i=>{
        let o = Math.floor(i.x)
          , a = Math.floor(i.y)
          , s = Math.ceil(i.x + i.width)
          , l = Math.ceil(i.y + i.height)
          , c = Math.max(s - o, 0)
          , u = Math.max(l - a, 0);
        return {
            x: o,
            y: a,
            width: c,
            height: u
        }
    }
    ,
    e.minX = i=>i.x,
    e.maxX = i=>i.x + i.width,
    e.minY = i=>i.y,
    e.maxY = i=>i.y + i.height,
    e.positions = i=>({
        minX: i.x,
        midX: i.x + i.width / 2,
        maxX: (0,
        e.maxX)(i),
        minY: i.y,
        midY: i.y + i.height / 2,
        maxY: (0,
        e.maxY)(i)
    }),
    e.center = i=>({
        x: i.x + i.width / 2,
        y: i.y + i.height / 2
    }),
    e.boundingRectFromPoints = i=>{
        let o = 1 / 0
          , a = -1 / 0
          , s = 1 / 0
          , l = -1 / 0;
        for (let c = 0; c < i.length; c++) {
            let u = i[c];
            o = Math.min(o, u.x),
            a = Math.max(a, u.x),
            s = Math.min(s, u.y),
            l = Math.max(l, u.y)
        }
        return {
            x: o,
            y: s,
            width: a - o,
            height: l - s
        }
    }
    ,
    e.fromPoints = i=>{
        let[o,a,s,l] = i
          , {x: c, y: u} = o
          , f = et.distance(o, a)
          , d = et.distance(o, l);
        return {
            x: c,
            y: u,
            width: f,
            height: d
        }
    }
    ,
    e.merge = (...i)=>{
        let o = {
            x: Math.min(...i.map(e.minX)),
            y: Math.min(...i.map(e.minY))
        }
          , a = {
            x: Math.max(...i.map(e.maxX)),
            y: Math.max(...i.map(e.maxY))
        };
        return (0,
        e.fromTwoPoints)(o, a)
    }
    ,
    e.intersection = (i,o)=>{
        let a = Math.max(i.x, o.x)
          , s = Math.min(i.x + i.width, o.x + o.width)
          , l = Math.max(i.y, o.y)
          , c = Math.min(i.y + i.height, o.y + o.height);
        return {
            x: a,
            y: l,
            width: s - a,
            height: c - l
        }
    }
    ,
    e.points = i=>[{
        x: (0,
        e.minX)(i),
        y: (0,
        e.minY)(i)
    }, {
        x: (0,
        e.minX)(i),
        y: (0,
        e.maxY)(i)
    }, {
        x: (0,
        e.maxX)(i),
        y: (0,
        e.minY)(i)
    }, {
        x: (0,
        e.maxX)(i),
        y: (0,
        e.maxY)(i)
    }],
    e.pointsAtOrigin = i=>[{
        x: 0,
        y: 0
    }, {
        x: i.width,
        y: 0
    }, {
        x: i.width,
        y: i.height
    }, {
        x: 0,
        y: i.height
    }],
    e.transform = (i,o)=>{
        let {x: a, y: s} = o.transformPoint({
            x: i.x,
            y: i.y
        })
          , {x: l, y: c} = o.transformPoint({
            x: i.x + i.width,
            y: i.y
        })
          , {x: u, y: f} = o.transformPoint({
            x: i.x + i.width,
            y: i.y + i.height
        })
          , {x: d, y: h} = o.transformPoint({
            x: i.x,
            y: i.y + i.height
        })
          , g = Math.min(a, l, u, d)
          , y = Math.max(a, l, u, d) - g
          , S = Math.min(s, c, f, h)
          , m = Math.max(s, c, f, h) - S;
        return {
            x: g,
            y: S,
            width: y,
            height: m
        }
    }
    ,
    e.containsPoint = (i,o)=>!(o.x < (0,
    e.minX)(i) || o.x > (0,
    e.maxX)(i) || o.y < (0,
    e.minY)(i) || o.y > (0,
    e.maxY)(i) || isNaN(i.x) || isNaN(i.y)),
    e.containsRect = (i,o)=>{
        for (let a of (0,
        e.points)(o))
            if (!(0,
            e.containsPoint)(i, a))
                return !1;
        return !0
    }
    ,
    e.toCSS = i=>({
        display: "block",
        transform: `translate(${i.x}px, ${i.y}px)`,
        width: `${i.width}px`,
        height: `${i.height}px`
    }),
    e.inset = (i,o)=>({
        x: i.x + o,
        y: i.y + o,
        width: Math.max(0, i.width - 2 * o),
        height: Math.max(0, i.height - 2 * o)
    }),
    e.intersects = (i,o)=>!(o.x >= (0,
    e.maxX)(i) || (0,
    e.maxX)(o) <= i.x || o.y >= (0,
    e.maxY)(i) || (0,
    e.maxY)(o) <= i.y),
    e.overlapHorizontally = (i,o)=>{
        let a = e.maxX(i)
          , s = e.maxX(o);
        return a > o.x && s > i.x
    }
    ,
    e.overlapVertically = (i,o)=>{
        let a = e.maxY(i)
          , s = e.maxY(o);
        return a > o.y && s > i.y
    }
    ,
    e.doesNotIntersect = (i,o)=>o.find(a=>e.intersects(a, i)) === void 0,
    e.isEqual = (i,o)=>e.equals(i, o),
    e.cornerPoints = i=>{
        let o = i.x
          , a = i.x + i.width
          , s = i.y
          , l = i.y + i.height;
        return [{
            x: o,
            y: s
        }, {
            x: a,
            y: s
        }, {
            x: a,
            y: l
        }, {
            x: o,
            y: l
        }]
    }
    ,
    e.midPoints = i=>{
        let o = i.x
          , a = i.x + i.width / 2
          , s = i.x + i.width
          , l = i.y
          , c = i.y + i.height / 2
          , u = i.y + i.height;
        return [{
            x: a,
            y: l
        }, {
            x: s,
            y: c
        }, {
            x: a,
            y: u
        }, {
            x: o,
            y: c
        }]
    }
    ,
    e.pointDistance = (i,o)=>{
        let a = 0
          , s = 0;
        return o.x < i.x ? a = i.x - o.x : o.x > e.maxX(i) && (a = o.x - e.maxX(i)),
        o.y < i.y ? s = i.y - o.y : o.y > e.maxY(i) && (s = o.y - e.maxY(i)),
        et.distance({
            x: a,
            y: s
        }, {
            x: 0,
            y: 0
        })
    }
    ;
    let r = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
    };
    e.fromAny = (i,o=r)=>({
        x: i.x || o.x,
        y: i.y || o.y,
        width: i.width || o.width,
        height: i.height || o.height
    }),
    e.delta = (i,o)=>{
        let a = {
            x: (0,
            e.minX)(i),
            y: (0,
            e.minY)(i)
        }
          , s = {
            x: (0,
            e.minX)(o),
            y: (0,
            e.minY)(o)
        };
        return {
            x: a.x - s.x,
            y: a.y - s.y
        }
    }
    ,
    e.withMinSize = (i,o)=>{
        let {width: a, height: s} = o
          , l = i.width - a
          , c = i.height - s;
        return {
            width: Math.max(i.width, a),
            height: Math.max(i.height, s),
            x: i.width < a ? i.x + l / 2 : i.x,
            y: i.height < s ? i.y + c / 2 : i.y
        }
    }
    ,
    e.anyPointsOutsideRect = (i,o)=>{
        let a = (0,
        e.minX)(i)
          , s = (0,
        e.minY)(i)
          , l = (0,
        e.maxX)(i)
          , c = (0,
        e.maxY)(i);
        for (let u of o)
            if (u.x < a || u.x > l || u.y < s || u.y > c)
                return !0;
        return !1
    }
    ,
    e.rebaseRectOnto = (i,o,a,s)=>{
        let l = {
            ...i
        };
        switch (a) {
        case "bottom":
        case "top":
            switch (s) {
            case "start":
                l.x = o.x;
                break;
            case "center":
                l.x = o.x + o.width / 2 - i.width / 2;
                break;
            case "end":
                l.x = o.x + o.width - i.width;
                break;
            default:
                Wt(s)
            }
            break;
        case "left":
            l.x = o.x - i.width;
            break;
        case "right":
            l.x = o.x + o.width;
            break;
        default:
            Wt(a)
        }
        switch (a) {
        case "left":
        case "right":
            switch (s) {
            case "start":
                l.y = o.y;
                break;
            case "center":
                l.y = o.y + o.height / 2 - i.height / 2;
                break;
            case "end":
                l.y = o.y + o.height - i.height;
                break;
            default:
                Wt(s)
            }
            break;
        case "top":
            l.y = o.y - i.height;
            break;
        case "bottom":
            l.y = o.y + o.height;
            break;
        default:
            Wt(a)
        }
        return l
    }
}
)(eu || (eu = {}));
var tu;
(e=>{
    e.quickfix = t=>((t.widthType === 2 || t.heightType === 2) && (t.aspectRatio = null),
    U(t.aspectRatio) && (t.left && t.right && (t.widthType = 0),
    t.top && t.bottom && (t.heightType = 0),
    t.left && t.right && t.top && t.bottom && (t.bottom = !1),
    t.widthType !== 0 && t.heightType !== 0 && (t.heightType = 0)),
    t.left && t.right && ((t.fixedSize || t.widthType === 2 || U(t.maxWidth)) && (t.right = !1),
    t.widthType = 0),
    t.top && t.bottom && ((t.fixedSize || t.heightType === 2 || U(t.maxHeight)) && (t.bottom = !1),
    t.heightType = 0),
    t)
}
)(tu || (tu = {}));
function nu(e) {
    if (typeof e == "string") {
        let t = e.trim();
        if (t === "auto")
            return 2;
        if (t.endsWith("fr"))
            return 3;
        if (t.endsWith("%"))
            return 1;
        if (t.endsWith("vw") || t.endsWith("vh"))
            return 4
    }
    return 0
}
var Dp;
(e=>{
    e.fromProperties = t=>{
        let {left: n, right: r, top: i, bottom: o, width: a, height: s, centerX: l, centerY: c, aspectRatio: u, autoSize: f} = t
          , d = tu.quickfix({
            left: U(n) || vn(n),
            right: U(r) || vn(r),
            top: U(i) || vn(i),
            bottom: U(o) || vn(o),
            widthType: nu(a),
            heightType: nu(s),
            aspectRatio: u || null,
            fixedSize: f === !0
        })
          , h = null
          , g = null
          , y = 0
          , S = 0;
        if (d.widthType !== 0 && typeof a == "string") {
            let v = parseFloat(a);
            a.endsWith("fr") ? (y = 3,
            h = v) : a === "auto" ? y = 2 : (y = 1,
            h = v / 100)
        } else
            a !== void 0 && typeof a != "string" && (h = He.getNumber(a));
        if (d.heightType !== 0 && typeof s == "string") {
            let v = parseFloat(s);
            s.endsWith("fr") ? (S = 3,
            g = v) : s === "auto" ? S = 2 : (S = 1,
            g = parseFloat(s) / 100)
        } else
            s !== void 0 && typeof s != "string" && (g = He.getNumber(s));
        let m = .5
          , p = .5;
        return l && (m = parseFloat(l) / 100),
        c && (p = parseFloat(c) / 100),
        {
            left: d.left ? He.getNumber(n) : null,
            right: d.right ? He.getNumber(r) : null,
            top: d.top ? He.getNumber(i) : null,
            bottom: d.bottom ? He.getNumber(o) : null,
            widthType: y,
            heightType: S,
            width: h,
            height: g,
            aspectRatio: d.aspectRatio || null,
            centerAnchorX: m,
            centerAnchorY: p
        }
    }
    ,
    e.toSize = (t,n,r,i)=>{
        let o = null
          , a = null
          , s = n?.sizing ? He.getNumber(n?.sizing.width) : null
          , l = n?.sizing ? He.getNumber(n?.sizing.height) : null
          , c = L1(t.left, t.right);
        if (s && U(c))
            o = s - c;
        else if (r && t.widthType === 2)
            o = r.width;
        else if (U(t.width))
            switch (t.widthType) {
            case 0:
                o = t.width;
                break;
            case 3:
                o = i ? i.freeSpaceInParent.width / i.freeSpaceUnitDivisor.width * t.width : null;
                break;
            case 1:
            case 4:
                s && (o = s * t.width);
                break;
            case 2:
                break;
            default:
                Wt(t.widthType)
            }
        let u = L1(t.top, t.bottom);
        if (l && U(u))
            a = l - u;
        else if (r && t.heightType === 2)
            a = r.height;
        else if (U(t.height))
            switch (t.heightType) {
            case 0:
                a = t.height;
                break;
            case 3:
                a = i ? i.freeSpaceInParent.height / i.freeSpaceUnitDivisor.height * t.height : null;
                break;
            case 1:
            case 4:
                l && (a = l * t.height);
                break;
            case 2:
                break;
            default:
                Wt(t.heightType)
            }
        return VL(o, a, t, {
            height: l ?? 0,
            width: s ?? 0
        }, n?.viewport)
    }
    ,
    e.toRect = (t,n=null,r=null,i=!1,o=null)=>{
        let a = t.left || 0
          , s = t.top || 0
          , {width: l, height: c} = e.toSize(t, n, r, o)
          , u = n?.positioning ?? null
          , f = u ? He.getNumber(u.width) : null
          , d = u ? He.getNumber(u.height) : null;
        t.left !== null ? a = t.left : f && t.right !== null ? a = f - t.right - l : f && (a = t.centerAnchorX * f - l / 2),
        t.top !== null ? s = t.top : d && t.bottom !== null ? s = d - t.bottom - c : d && (s = t.centerAnchorY * d - c / 2);
        let h = {
            x: a,
            y: s,
            width: l,
            height: c
        };
        return i ? eu.pixelAligned(h) : h
    }
}
)(Dp || (Dp = {}));
var ML = 200
  , OL = 200;
function ru(e, t, n, r) {
    if (typeof t == "string") {
        if (t.endsWith("%") && n)
            switch (e) {
            case "maxWidth":
            case "minWidth":
                return parseFloat(t) / 100 * n.width;
            case "maxHeight":
            case "minHeight":
                return parseFloat(t) / 100 * n.height;
            default:
                break
            }
        if (t.endsWith("vh") && r)
            switch (e) {
            case "maxWidth":
            case "minWidth":
                return parseFloat(t) / 100 * r.width;
            case "maxHeight":
            case "minHeight":
                return parseFloat(t) / 100 * r.height;
            default:
                break
            }
        return parseFloat(t)
    }
    return t
}
function DL(e, t, n, r) {
    return t.minHeight && (e = Math.max(ru("minHeight", t.minHeight, n, r), e)),
    t.maxHeight && (e = Math.min(ru("maxHeight", t.maxHeight, n, r), e)),
    e
}
function AL(e, t, n, r) {
    return t.minWidth && (e = Math.max(ru("minWidth", t.minWidth, n, r), e)),
    t.maxWidth && (e = Math.min(ru("maxWidth", t.maxWidth, n, r), e)),
    e
}
function VL(e, t, n, r, i) {
    let o = AL(U(e) ? e : ML, n, r, i)
      , a = DL(U(t) ? t : OL, n, r, i);
    return U(n.aspectRatio) && n.aspectRatio > 0 && (U(n.left) && U(n.right) ? a = o / n.aspectRatio : U(n.top) && U(n.bottom) ? o = a * n.aspectRatio : n.widthType !== 0 ? a = o / n.aspectRatio : o = a * n.aspectRatio),
    {
        width: o,
        height: a
    }
}
function L1(e, t) {
    return !U(e) || !U(t) ? null : e + t
}
function BL(e) {
    return typeof e.right == "string" || typeof e.bottom == "string" || typeof e.left == "string" && (!e.center || e.center === "y") || typeof e.top == "string" && (!e.center || e.center === "x")
}
function _o(e) {
    return !e._constraints || BL(e) ? !1 : e._constraints.enabled
}
function zL(e) {
    let {size: t} = e
      , {width: n, height: r} = e;
    return U(t) && (n === void 0 && (n = t),
    r === void 0 && (r = t)),
    U(n) && U(r) ? {
        width: n,
        height: r
    } : null
}
function HL(e) {
    let t = zL(e);
    if (t === null)
        return null;
    let {left: n, top: r} = e;
    return U(n) && U(r) ? {
        x: n,
        y: r,
        ...t
    } : null
}
function us(e, t, n=!0) {
    if (e.positionFixed || e.positionAbsolute)
        return null;
    let r = t === 1 || t === 2;
    if (!_o(e) || r)
        return HL(e);
    let i = NL(e)
      , o = $L(t)
      , a = o ? {
        sizing: o,
        positioning: o,
        viewport: null
    } : null;
    return Dp.toRect(i, a, null, n, null)
}
function NL(e) {
    let {left: t, right: n, top: r, bottom: i, center: o, _constraints: a, size: s} = e
      , {width: l, height: c} = e;
    l === void 0 && (l = s),
    c === void 0 && (c = s);
    let {aspectRatio: u, autoSize: f} = a
      , d = tu.quickfix({
        left: U(t),
        right: U(n),
        top: U(r),
        bottom: U(i),
        widthType: nu(l),
        heightType: nu(c),
        aspectRatio: u || null,
        fixedSize: f === !0
    })
      , h = null
      , g = null
      , y = 0
      , S = 0;
    if (d.widthType !== 0 && typeof l == "string") {
        let v = parseFloat(l);
        l.endsWith("fr") ? (y = 3,
        h = v) : l === "auto" ? y = 2 : (y = 1,
        h = v / 100)
    } else
        l !== void 0 && typeof l != "string" && (h = l);
    if (d.heightType !== 0 && typeof c == "string") {
        let v = parseFloat(c);
        c.endsWith("fr") ? (S = 3,
        g = v) : c === "auto" ? S = 2 : (S = 1,
        g = parseFloat(c) / 100)
    } else
        c !== void 0 && typeof c != "string" && (g = c);
    let m = .5
      , p = .5;
    return (o === !0 || o === "x") && (d.left = !1,
    typeof t == "string" && (m = parseFloat(t) / 100)),
    (o === !0 || o === "y") && (d.top = !1,
    typeof r == "string" && (p = parseFloat(r) / 100)),
    {
        left: d.left ? t : null,
        right: d.right ? n : null,
        top: d.top ? r : null,
        bottom: d.bottom ? i : null,
        widthType: y,
        heightType: S,
        width: h,
        height: g,
        aspectRatio: d.aspectRatio || null,
        centerAnchorX: m,
        centerAnchorY: p,
        minHeight: e.minHeight,
        maxHeight: e.maxHeight,
        minWidth: e.minWidth,
        maxWidth: e.maxWidth
    }
}
var Qp = b.createContext({
    parentSize: 0
});
function $L(e) {
    return e === 0 || e === 1 || e === 2 ? null : e
}
function ks() {
    return b.useContext(Qp).parentSize
}
function sw(e) {
    return typeof e == "object"
}
var jL = e=>{
    let t = ks()
      , {parentSize: n, children: r} = e
      , i = b.useMemo(()=>({
        parentSize: n
    }), [WL(n), UL(n)]);
    return t === 1 ? r ? T(Ne, {
        children: r
    }) : null : T(Qp.Provider, {
        value: i,
        children: r
    })
}
;
function WL(e) {
    return sw(e) ? e.width : e
}
function UL(e) {
    return sw(e) ? e.height : e
}
var $H = Qp.Consumer;
function lw(e, t) {
    return T(jL, {
        parentSize: t,
        children: e
    })
}
function XL(e) {
    let t = ks();
    return us(e, t, !0)
}
var YL = (e=>(e.Boolean = "boolean",
e.Number = "number",
e.String = "string",
e.RichText = "richtext",
e.FusedNumber = "fusednumber",
e.Enum = "enum",
e.SegmentedEnum = "segmentedenum",
e.Color = "color",
e.Image = "image",
e.ResponsiveImage = "responsiveimage",
e.File = "file",
e.ComponentInstance = "componentinstance",
e.Array = "array",
e.EventHandler = "eventhandler",
e.Transition = "transition",
e.BoxShadow = "boxshadow",
e.Link = "link",
e.Date = "date",
e.Object = "object",
e.Font = "font",
e.PageScope = "pagescope",
e.ScrollSectionRef = "scrollsectionref",
e.CustomCursor = "customcursor",
e.Border = "border",
e.Cursor = "cursor",
e.Padding = "padding",
e.BorderRadius = "borderradius",
e))(YL || {}), pp;
function GL() {
    if (pp !== void 0)
        return pp;
    let e = document.createElement("div");
    Object.assign(e.style, {
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        rowGap: "1px"
    }),
    e.appendChild(document.createElement("div")),
    e.appendChild(document.createElement("div")),
    document.body.appendChild(e);
    let t = e.scrollHeight === 1;
    return e.parentNode && e.parentNode.removeChild(e),
    pp = t,
    t
}
var ki = "flexbox-gap-not-supported"
  , M1 = !1;
function jH() {
    M1 || (M1 = !0,
    !GL() && document.body.classList.add(ki))
}
var KL = `
[data-framer-component-type="DeprecatedRichText"] p,
[data-framer-component-type="DeprecatedRichText"] div,
[data-framer-component-type="DeprecatedRichText"] h1,
[data-framer-component-type="DeprecatedRichText"] h2,
[data-framer-component-type="DeprecatedRichText"] h3,
[data-framer-component-type="DeprecatedRichText"] h4,
[data-framer-component-type="DeprecatedRichText"] h5,
[data-framer-component-type="DeprecatedRichText"] h6,
[data-framer-component-type="DeprecatedRichText"] li,
[data-framer-component-type="DeprecatedRichText"] ol,
[data-framer-component-type="DeprecatedRichText"] ul,
[data-framer-component-type="DeprecatedRichText"] span:not([data-text-fill]) {
    font-family: var(--framer-font-family, Inter, Inter Placeholder, sans-serif);
    font-style: var(--framer-font-style, normal);
    font-weight: var(--framer-font-weight, 400);
    color: var(--framer-text-color, #000);
    font-size: var(--framer-font-size, 16px);
    letter-spacing: var(--framer-letter-spacing, 0);
    text-transform: var(--framer-text-transform, none);
    text-decoration: var(--framer-text-decoration, none);
    line-height: var(--framer-line-height, 1.2em);
    text-align: var(--framer-text-alignment, start);
}
`, qL = `
[data-framer-component-type="DeprecatedRichText"] p:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] div:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h1:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h2:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h3:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h4:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h5:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h6:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] ol:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] ul:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] .framer-image:not(:first-child) {
    margin-top: var(--framer-paragraph-spacing, 0);
}
`, QL = `
[data-framer-component-type="DeprecatedRichText"] span[data-text-fill] {
    display: inline-block;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
`, ZL = `
[data-framer-component-type="DeprecatedRichText"] a,
[data-framer-component-type="DeprecatedRichText"] a span:not([data-text-fill]) {
    font-family: var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
    font-style: var(--framer-link-font-style, var(--framer-font-style, normal));
    font-weight: var(--framer-link-font-weight, var(--framer-font-weight, 400));
    color: var(--framer-link-text-color, var(--framer-text-color, #000));
    font-size: var(--framer-link-font-size, var(--framer-font-size, 16px));
    text-transform: var(--framer-link-text-transform, var(--framer-text-transform, none));
    text-decoration: var(--framer-link-text-decoration, var(--framer-text-decoration, none));
}
`, JL = `
[data-framer-component-type="DeprecatedRichText"] a:hover,
[data-framer-component-type="DeprecatedRichText"] a:hover span:not([data-text-fill]) {
    font-family: var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
    font-style: var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
    font-weight: var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
    color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
    font-size: var(--framer-link-hover-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)));
    text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
    text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none)));
}
`, eM = `
a[data-framer-page-link-current],
a[data-framer-page-link-current] span:not([data-text-fill]) {
    font-family: var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
    font-style: var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
    font-weight: var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
    color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
    font-size: var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)));
    text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
    text-decoration: var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none)));
}
`, tM = `
a[data-framer-page-link-current]:hover,
a[data-framer-page-link-current]:hover span:not([data-text-fill]) {
    font-family: var(--framer-link-hover-font-family, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
    font-style: var(--framer-link-hover-font-style, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal))));
    font-weight: var(--framer-link-hover-font-weight, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400))));
    color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000))));
    font-size: var(--framer-link-hover-font-size, var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))));
    text-transform: var(--framer-link-hover-text-transform, var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none))));
    text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))));
}
`, nM = `
[data-framer-component-type="DeprecatedRichText"] strong {
    font-weight: bolder;
}
`, rM = `
[data-framer-component-type="DeprecatedRichText"] em {
    font-style: italic;
}
`, iM = `
[data-framer-component-type="DeprecatedRichText"] .framer-image {
    display: block;
    max-width: 100%;
    height: auto;
}
`, oM = `
[data-framer-component-type="DeprecatedRichText"] p,
[data-framer-component-type="DeprecatedRichText"] div,
[data-framer-component-type="DeprecatedRichText"] h1,
[data-framer-component-type="DeprecatedRichText"] h2,
[data-framer-component-type="DeprecatedRichText"] h3,
[data-framer-component-type="DeprecatedRichText"] h4,
[data-framer-component-type="DeprecatedRichText"] h5,
[data-framer-component-type="DeprecatedRichText"] h6 {
    margin: 0;
    padding: 0;
}
`, aM = `
[data-framer-component-type="DeprecatedRichText"] .text-styles-preset-reset {
    --framer-font-family: Inter, Inter Placeholder, sans-serif;
    --framer-font-style: normal;
    --framer-font-weight: 500;
    --framer-text-color: #000;
    --framer-font-size: 16px;
    --framer-letter-spacing: 0;
    --framer-text-transform: none;
    --framer-text-decoration: none;
    --framer-line-height: 1.2em;
    --framer-text-alignment: start;
}
`, sM = `
[data-framer-component-type="DeprecatedRichText"] ul,
[data-framer-component-type="DeprecatedRichText"] ol {
    display: table;
    width: 100%;
    padding-left: 0;
    margin: 0;
}
`, lM = `
[data-framer-component-type="DeprecatedRichText"] li {
    display: table-row;
    counter-increment: list-item;
    list-style: none;
}
`, cM = `
[data-framer-component-type="DeprecatedRichText"] ol > li::before {
    display: table-cell;
    width: 2.25ch;
    box-sizing: border-box;
    padding-right: 0.75ch;
    content: counter(list-item) ".";
    white-space: nowrap;
}
`, uM = `
[data-framer-component-type="DeprecatedRichText"] ul > li::before {
    display: table-cell;
    width: 2.25ch;
    box-sizing: border-box;
    padding-right: 0.75ch;
    content: "\u2022";
}
`, fM = ['[data-framer-component-type="DeprecatedRichText"] { cursor: inherit; }', aM, oM, KL, qL, QL, ZL, JL, eM, tM, nM, rM, iM, sM, lM, cM, uM], dM = [`
        p.framer-text,
        div.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        ol.framer-text,
        ul.framer-text {
            margin: 0;
            padding: 0;
        }
    `, `
        p.framer-text,
        div.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        li.framer-text,
        ol.framer-text,
        ul.framer-text,
        span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-font-family, Inter, Inter Placeholder, sans-serif);
            font-style: var(--framer-font-style, normal);
            font-weight: var(--framer-font-weight, 400);
            color: var(--framer-text-color, #000);
            font-size: calc(var(--framer-font-size, 16px) * var(--framer-font-size-scale, 1));
            letter-spacing: var(--framer-letter-spacing, 0);
            text-transform: var(--framer-text-transform, none);
            text-decoration: var(--framer-text-decoration, none);
            line-height: var(--framer-line-height, 1.2em);
            text-align: var(--framer-text-alignment, start);
        }
    `, `
        .framer-fit-text .framer-text {
            white-space: nowrap;
        }
    `, `
        strong.framer-text {
            font-family: var(--framer-font-family-bold);
            font-style: var(--framer-font-style-bold);
            font-weight: var(--framer-font-weight-bold, bolder);
        }
    `, `
        em.framer-text {
            font-family: var(--framer-font-family-italic);
            font-style: var(--framer-font-style-italic, italic);
            font-weight: var(--framer-font-weight-italic);
        }
    `, `
        em.framer-text > strong.framer-text {
            font-family: var(--framer-font-family-bold-italic);
            font-style: var(--framer-font-style-bold-italic, italic);
            font-weight: var(--framer-font-weight-bold-italic, bolder);
        }
    `, `
        p.framer-text:not(:first-child),
        div.framer-text:not(:first-child),
        h1.framer-text:not(:first-child),
        h2.framer-text:not(:first-child),
        h3.framer-text:not(:first-child),
        h4.framer-text:not(:first-child),
        h5.framer-text:not(:first-child),
        h6.framer-text:not(:first-child),
        ol.framer-text:not(:first-child),
        ul.framer-text:not(:first-child),
        .framer-image.framer-text:not(:first-child) {
            margin-top: var(--framer-paragraph-spacing, 0);
        }
    `, `
        li.framer-text > ul.framer-text:nth-child(2),
        li.framer-text > ol.framer-text:nth-child(2) {
            margin-top: 0;
        }
    `, `
        .framer-text[data-text-fill] {
            display: inline-block;
            background-clip: text;
            -webkit-background-clip: text;
            /* make this a transparent color if you want to visualise the clipping  */
            -webkit-text-fill-color: transparent;
            padding: max(0em, calc(calc(1.3em - var(--framer-line-height, 1.3em)) / 2));
            margin: min(0em, calc(calc(1.3em - var(--framer-line-height, 1.3em)) / -2));
        }
    `, `
        code.framer-text,
        code.framer-text span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-code-font-style, var(--framer-font-style, normal));
            font-weight: var(--framer-code-font-weight, var(--framer-font-weight, 400));
            color: var(--framer-code-text-color, var(--framer-text-color, #000));
            font-size: calc(var(--framer-font-size, 16px) * var(--framer-font-size-scale, 1));
            letter-spacing: var(--framer-letter-spacing, 0);
            line-height: var(--framer-line-height, 1.2em);
        }
    `, `
        a.framer-text,
        a.framer-text span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-link-font-style, var(--framer-font-style, normal));
            font-weight: var(--framer-link-font-weight, var(--framer-font-weight, 400));
            color: var(--framer-link-text-color, var(--framer-text-color, #000));
            font-size: calc(var(--framer-link-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-text-transform, var(--framer-text-transform, none));
            text-decoration: var(--framer-link-text-decoration, var(--framer-text-decoration, none));
            /* Cursor inherit to overwrite the user agent stylesheet on rich text links. */
            cursor: var(--framer-custom-cursors, pointer);
        }
    `, `
        code.framer-text a.framer-text,
        code.framer-text a.framer-text span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-code-font-style, var(--framer-font-style, normal));
            font-weight: var(--framer-code-font-weight, var(--framer-font-weight, 400));
            color: var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)));
            font-size: calc(var(--framer-link-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
        }
    `, `
        a.framer-text:hover,
        a.framer-text:hover span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
            font-style: var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
            text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none)));
        }
    `, `
        code.framer-text a.framer-text:hover,
        code.framer-text a.framer-text:hover span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-code-font-style, var(--framer-font-style, normal));
            font-weight: var(--framer-code-font-weight, var(--framer-font-weight, 400));
            color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
        }
    `, `
        a.framer-text[data-framer-page-link-current],
        a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
            font-style: var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
            font-size: calc(var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
            text-decoration: var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none)));
        }
    `, `
        code.framer-text a.framer-text[data-framer-page-link-current],
        code.framer-text a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-code-font-style, var(--framer-font-style, normal));
            font-weight: var(--framer-code-font-weight, var(--framer-font-weight, 400));
            color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000))));
            font-size: calc(var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
        }
    `, `
        a.framer-text[data-framer-page-link-current]:hover,
        a.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-link-hover-font-family, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
            font-style: var(--framer-link-hover-font-style, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal))));
            font-weight: var(--framer-link-hover-font-weight, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400))));
            color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-hover-text-transform, var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none))));
            text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))));
        }
    `, `
        code.framer-text a.framer-text[data-framer-page-link-current]:hover,
        code.framer-text a.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-code-font-style, var(--framer-font-style, normal));
            font-weight: var(--framer-code-font-weight, var(--framer-font-weight, 400));
            color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)))) * var(--framer-font-size-scale, 1));
        }
    `, `
        .framer-image.framer-text {
            display: block;
            max-width: 100%;
            height: auto;
        }
    `, `
        .text-styles-preset-reset.framer-text {
            --framer-font-family: Inter, Inter Placeholder, sans-serif;
            --framer-font-style: normal;
            --framer-font-weight: 500;
            --framer-text-color: #000;
            --framer-font-size: 16px;
            --framer-letter-spacing: 0;
            --framer-text-transform: none;
            --framer-text-decoration: none;
            --framer-line-height: 1.2em;
            --framer-text-alignment: start;
        }
    `, `
        ol.framer-text {
            --list-style-type: decimal;
        }
    `, `
        ul.framer-text,
        ol.framer-text {
            display: table;
            width: 100%;
        }
    `, `
        li.framer-text {
            display: table-row;
            counter-increment: list-item;
            list-style: none;
        }
    `, `
        ol.framer-text > li.framer-text::before {
            display: table-cell;
            width: 2.25ch;
            box-sizing: border-box;
            padding-inline-end: 0.75ch;
            content: counter(list-item, var(--list-style-type)) ".";
            white-space: nowrap;
        }
    `, `
        ul.framer-text > li.framer-text::before {
            display: table-cell;
            width: 2.25ch;
            box-sizing: border-box;
            padding-inline-end: 0.75ch;
            content: "\u2022";
        }
    `, `
        .framer-text-module[style*="aspect-ratio"] > :first-child {
            width: 100%;
        }
    `, `
        @supports not (aspect-ratio: 1) {
            .framer-text-module[style*="aspect-ratio"] {
                position: relative;
            }
        }
    `, `
        @supports not (aspect-ratio: 1) {
            .framer-text-module[style*="aspect-ratio"]::before {
                content: "";
                display: block;
                padding-bottom: calc(100% / calc(var(--aspect-ratio)));
            }
        }
    `, `
        @supports not (aspect-ratio: 1) {
            .framer-text-module[style*="aspect-ratio"] > :first-child {
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
            }
        }
    `], hM = new Set, mp;
function cw(e, t, n=hM) {
    if (!(!e || n.has(e) || typeof document > "u")) {
        if (n.add(e),
        !t) {
            if (!mp) {
                let r = document.createElement("style");
                if (r.setAttribute("type", "text/css"),
                r.setAttribute("data-framer-css", "true"),
                !document.head) {
                    console.warn("not injecting CSS: the document is missing a <head> element");
                    return
                }
                if (document.head.appendChild(r),
                r.sheet)
                    mp = r.sheet;
                else {
                    console.warn("not injecting CSS: injected <style> element does not have a sheet", r);
                    return
                }
            }
            t = mp
        }
        try {
            t.insertRule(e, t.cssRules.length)
        } catch {}
    }
}
var pM = ["[data-framer-component-type] { position: absolute; }"]
  , mM = `
[data-framer-component-type="Text"] > * {
    text-align: var(--framer-text-alignment, start);
}`
  , vM = `
[data-framer-component-type="Text"] span span,
[data-framer-component-type="Text"] p span,
[data-framer-component-type="Text"] h1 span,
[data-framer-component-type="Text"] h2 span,
[data-framer-component-type="Text"] h3 span,
[data-framer-component-type="Text"] h4 span,
[data-framer-component-type="Text"] h5 span,
[data-framer-component-type="Text"] h6 span {
    display: block;
}`
  , gM = `
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span {
    display: unset;
}`
  , yM = `
[data-framer-component-type="Text"] div div span,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span,
[data-framer-component-type="Text"] a {
    font-family: var(--font-family);
    font-style: var(--font-style);
    font-weight: min(calc(var(--framer-font-weight-increase, 0) + var(--font-weight, 400)), 900);
    color: var(--text-color);
    letter-spacing: var(--letter-spacing);
    font-size: var(--font-size);
    text-transform: var(--text-transform);
    text-decoration: var(--text-decoration);
    line-height: var(--line-height);
}`
  , bM = `
[data-framer-component-type="Text"] div div span,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span,
[data-framer-component-type="Text"] a {
    --font-family: var(--framer-font-family);
    --font-style: var(--framer-font-style);
    --font-weight: var(--framer-font-weight);
    --text-color: var(--framer-text-color);
    --letter-spacing: var(--framer-letter-spacing);
    --font-size: var(--framer-font-size);
    --text-transform: var(--framer-text-transform);
    --text-decoration: var(--framer-text-decoration);
    --line-height: var(--framer-line-height);
}`
  , xM = `
[data-framer-component-type="Text"] a,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] a span span span,
[data-framer-component-type="Text"] a p span span,
[data-framer-component-type="Text"] a h1 span span,
[data-framer-component-type="Text"] a h2 span span,
[data-framer-component-type="Text"] a h3 span span,
[data-framer-component-type="Text"] a h4 span span,
[data-framer-component-type="Text"] a h5 span span,
[data-framer-component-type="Text"] a h6 span span {
    --font-family: var(--framer-link-font-family, var(--framer-font-family));
    --font-style: var(--framer-link-font-style, var(--framer-font-style));
    --font-weight: var(--framer-link-font-weight, var(--framer-font-weight));
    --text-color: var(--framer-link-text-color, var(--framer-text-color));
    --font-size: var(--framer-link-font-size, var(--framer-font-size));
    --text-transform: var(--framer-link-text-transform, var(--framer-text-transform));
    --text-decoration: var(--framer-link-text-decoration, var(--framer-text-decoration));
}`
  , SM = `
[data-framer-component-type="Text"] a:hover,
[data-framer-component-type="Text"] a div span:hover,
[data-framer-component-type="Text"] a span span span:hover,
[data-framer-component-type="Text"] a p span span:hover,
[data-framer-component-type="Text"] a h1 span span:hover,
[data-framer-component-type="Text"] a h2 span span:hover,
[data-framer-component-type="Text"] a h3 span span:hover,
[data-framer-component-type="Text"] a h4 span span:hover,
[data-framer-component-type="Text"] a h5 span span:hover,
[data-framer-component-type="Text"] a h6 span span:hover {
    --font-family: var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-font-family)));
    --font-style: var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-font-style)));
    --font-weight: var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-font-weight)));
    --text-color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-text-color)));
    --font-size: var(--framer-link-hover-font-size, var(--framer-link-font-size, var(--framer-font-size)));
    --text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-text-transform)));
    --text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration)));
}`
  , wM = `
[data-framer-component-type="Text"].isCurrent a,
[data-framer-component-type="Text"].isCurrent a div span,
[data-framer-component-type="Text"].isCurrent a span span span,
[data-framer-component-type="Text"].isCurrent a p span span,
[data-framer-component-type="Text"].isCurrent a h1 span span,
[data-framer-component-type="Text"].isCurrent a h2 span span,
[data-framer-component-type="Text"].isCurrent a h3 span span,
[data-framer-component-type="Text"].isCurrent a h4 span span,
[data-framer-component-type="Text"].isCurrent a h5 span span,
[data-framer-component-type="Text"].isCurrent a h6 span span {
    --font-family: var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family)));
    --font-style: var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style)));
    --font-weight: var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight)));
    --text-color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color)));
    --font-size: var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size)));
    --text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform)));
    --text-decoration: var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration)));
}`
  , CM = ['[data-framer-component-type="Text"] { cursor: inherit; }', "[data-framer-component-text-autosized] * { white-space: pre; }", mM, vM, gM, yM, bM, xM, SM, wM]
  , kM = `
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > *,
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > [data-framer-component-type],
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > [data-framer-legacy-stack-gap-enabled] > *,
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > [data-framer-legacy-stack-gap-enabled] > [data-framer-component-type] {
    position: relative;
}`
  , TM = [`[data-framer-stack-content-wrapper][data-framer-stack-gap-enabled="true"] {
        row-gap: var(--stack-native-row-gap);
        column-gap: var(--stack-native-column-gap);
    }`, `.${ki} [data-framer-stack-content-wrapper][data-framer-stack-gap-enabled="true"] {
        row-gap: unset;
        column-gap: unset;
    }`]
  , EM = `
.${ki} [data-framer-legacy-stack-gap-enabled="true"] > *, [data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"] {
    margin-top: calc(var(--stack-gap-y) / 2);
    margin-bottom: calc(var(--stack-gap-y) / 2);
    margin-right: calc(var(--stack-gap-x) / 2);
    margin-left: calc(var(--stack-gap-x) / 2);
}
`
  , RM = `
.${ki}
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:first-child,
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:first-child,
.${ki}
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:last-child,
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:last-child {
    margin-top: 0;
    margin-left: 0;
}`
  , PM = `
.${ki}
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:last-child,
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:last-child,
.${ki}
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:first-child,
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:first-child {
    margin-right: 0;
    margin-bottom: 0;
}`
  , IM = [kM, EM, ...TM, RM, PM]
  , FM = [`
NavigationContainer
[data-framer-component-type="NavigationContainer"] > *,
[data-framer-component-type="NavigationContainer"] > [data-framer-component-type] {
    position: relative;
}`]
  , _M = ['[data-framer-component-type="Scroll"]::-webkit-scrollbar { display: none; }', '[data-framer-component-type="ScrollContentWrapper"] > * { position: relative; }']
  , LM = ['[data-framer-component-type="NativeScroll"] { -webkit-overflow-scrolling: touch; }', '[data-framer-component-type="NativeScroll"] > * { position: relative; }', '[data-framer-component-type="NativeScroll"].direction-both { overflow-x: scroll; overflow-y: scroll; }', '[data-framer-component-type="NativeScroll"].direction-vertical { overflow-x: hidden; overflow-y: scroll; }', '[data-framer-component-type="NativeScroll"].direction-horizontal { overflow-x: scroll; overflow-y: hidden; }', '[data-framer-component-type="NativeScroll"].direction-vertical > * { width: 100% !important; }', '[data-framer-component-type="NativeScroll"].direction-horizontal > * { height: 100% !important; }', '[data-framer-component-type="NativeScroll"].scrollbar-hidden::-webkit-scrollbar { display: none; }']
  , MM = ['[data-framer-component-type="DeviceComponent"].no-device > * { width: 100% !important; height: 100% !important; }']
  , OM = ['[data-framer-component-type="PageContentWrapper"] > *, [data-framer-component-type="PageContentWrapper"] > [data-framer-component-type] { position: relative; }']
  , DM = ['[data-is-present="false"], [data-is-present="false"] * { pointer-events: none !important; }']
  , AM = ['[data-framer-cursor="pointer"] { cursor: pointer; }', '[data-framer-cursor="grab"] { cursor: grab; }', '[data-framer-cursor="grab"]:active { cursor: grabbing; }']
  , VM = ['[data-framer-component-type="Frame"] *, [data-framer-component-type="Stack"] * { pointer-events: auto; }', "[data-framer-generated] * { pointer-events: unset }"]
  , BM = [`[data-reset="button"] {
        border-width: 0;
        padding: 0;
        background: none;
}`]
  , zM = ['[data-hide-scrollbars="true"]::-webkit-scrollbar { width: 0px; height: 0px; }', '[data-hide-scrollbars="true"]::-webkit-scrollbar-thumb { background: transparent; }']
  , HM = ['[data-framer-component-type="Form"] input { padding: var(--input-padding); }']
  , NM = e=>e ? VM : []
  , $M = [".svgContainer svg { display: block; }"]
  , uw = e=>[...pM, ...CM, ...dM, ...fM, ...IM, ...FM, ..._M, ...LM, ...OM, ...MM, ...DM, ...AM, ...NM(e), ...$M, ...BM, ...zM, ...HM]
  , jM = uw(!1)
  , WM = uw(!0)
  , O1 = !1;
function Ts() {
    if (O1)
        return;
    O1 = !0;
    let e = Oe.current() === "PREVIEW" ? WM : jM;
    for (let t of e)
        cw(t, void 0, void 0)
}
function fs(e) {
    return typeof e == "function"
}
function fw(e) {
    return typeof e == "boolean"
}
function ne(e) {
    return typeof e == "string"
}
function fe(e) {
    return Number.isFinite(e)
}
function du(e) {
    return Array.isArray(e)
}
function Be(e) {
    return e !== null && typeof e == "object" && !du(e)
}
function xt(e) {
    return typeof e > "u"
}
function Le(e) {
    return e === null
}
function ds(e) {
    return xt(e) || Le(e)
}
function nn(e) {
    return e instanceof Date && !isNaN(e.getTime())
}
function UM(e) {
    return Be(e) || fs(e)
}
var D1 = "optional";
function XM(e) {
    return !!e && D1 in e && e[D1] === !0
}
function YM(e) {
    try {
        switch (e.type) {
        case "string":
        case "color":
        case "date":
        case "link":
        case "boxshadow":
        case "padding":
        case "borderradius":
            return ne(e.defaultValue) ? e.defaultValue : void 0;
        case "boolean":
            return fw(e.defaultValue) ? e.defaultValue : void 0;
        case "enum":
            return xt(e.defaultValue) ? void 0 : e.options.includes(e.defaultValue) ? e.defaultValue : void 0;
        case "fusednumber":
        case "number":
            return fe(e.defaultValue) ? e.defaultValue : void 0;
        case "transition":
            return Be(e.defaultValue) ? e.defaultValue : void 0;
        case "border":
            return Be(e.defaultValue) ? e.defaultValue : void 0;
        case "font":
            return Be(e.defaultValue) ? e.defaultValue : void 0;
        case "object":
            {
                let t = Be(e.defaultValue) ? e.defaultValue : {};
                return Be(e.controls) && dw(t, e.controls),
                t
            }
        case "array":
            return du(e.defaultValue) ? e.defaultValue : void 0;
        case "file":
        case "image":
        case "richtext":
        case "pagescope":
        case "eventhandler":
        case "segmentedenum":
        case "responsiveimage":
        case "componentinstance":
        case "scrollsectionref":
        case "customcursor":
        case "cursor":
            return;
        default:
            return
        }
    } catch {
        return
    }
}
function dw(e, t) {
    for (let n in t) {
        let r = t[n];
        if (!r)
            continue;
        let i = e[n];
        if (!xt(i) || XM(r))
            continue;
        let o = YM(r);
        xt(o) || (e[n] = o)
    }
}
function GM(e) {
    if (Be(e.defaultProps))
        return e.defaultProps;
    let t = {};
    return e.defaultProps = t,
    t
}
function KM(e, t) {
    if (!UM(e))
        return;
    let n = GM(e);
    dw(n, t)
}
function qM(e, t) {
    Object.assign(e, {
        propertyControls: t
    }),
    KM(e, t)
}
function QM(e) {
    return e.propertyControls
}
var Mn = {
    iPhonePro: {
        screenRadius: 0,
        clayBezelLeft: 21,
        clayBezelRight: 21,
        clayBezelTop: 21,
        clayBezelBottom: 21,
        clayBezelRadius: 38 + 21
    },
    iPhone8: {
        screenRadius: 0,
        clayBezelLeft: 24,
        clayBezelRight: 24,
        clayBezelTop: 96,
        clayBezelBottom: 96,
        clayBezelRadius: 38 * 1.5
    },
    iPadPro: {
        screenRadius: 25,
        clayBezelLeft: 38,
        clayBezelRight: 38,
        clayBezelTop: 38,
        clayBezelBottom: 38,
        clayBezelRadius: 25 + 38
    },
    desktop: {
        clayBezelLeft: 20,
        clayBezelRight: 20,
        clayBezelTop: 20,
        clayBezelBottom: 20,
        clayBezelRadius: 20
    }
}
  , ZM = [{
    id: "iphone-12",
    title: "iPhone 12",
    screenRadius: 0,
    clayBezelLeft: 22,
    clayBezelRight: 22,
    clayBezelTop: 22,
    clayBezelBottom: 22,
    clayBezelRadius: 66,
    screenWidth: 390,
    screenHeight: 844,
    externalClay: {
        width: 500,
        height: 974,
        screenOffsetTop: 65,
        screenOffsetLeft: 55
    },
    screenMask: '<g style="transform: scale(0.5);"><path d="M171.2 0c2.3 0 4 .5 5.4 1.3 1.6 1 2.8 2.2 3.7 3.8.8 1.6 1.2 2.3 1.2 4.9 0 12 2.2 19 6.2 26.5s9.8 13.3 17.3 17.4c7.5 4 15.8 6.1 30.6 6.1h311.5c14.3 0 22.5-2.2 29.9-6.1 7.5-4 13.3-10 17.3-17.4 4-7.5 6.2-14.5 6.2-26.5 0-2.6.4-3.2 1.1-4.9.8-1.6 2-2.9 3.4-3.8 1.4-.8 3.2-1.3 5.4-1.3h54.2c40.1 0 54.7 4.2 69.4 12a81.8 81.8 0 0134 34c7.8 14.7 12 29.3 12 69.4v1457.2c0 40.1-4.2 54.7-12 69.4a81.8 81.8 0 01-34 34c-14.7 7.8-29.3 12-69.4 12H115.4c-40.1 0-54.7-4.2-69.4-12a81.8 81.8 0 01-34-34c-7.8-14.7-12-29.3-12-69.4V115.4C0 75.3 4.2 60.7 12 46a81.8 81.8 0 0134-34C60.7 4.2 75.3 0 115.4 0h55.4z" fill="#000" fill-rule="evenodd"/></g>',
    realisticImage: {
        width: 490,
        height: 944,
        screenOffsetLeft: 50,
        screenOffsetTop: 50,
        availableColors: [{
            id: "black",
            title: "Black",
            colorValue: "#2E2C36"
        }, {
            id: "white",
            title: "White",
            colorValue: "#F7F3F0"
        }, {
            id: "blue",
            title: "Blue",
            colorValue: "#14496D"
        }, {
            id: "green",
            title: "Green",
            colorValue: "#DAF0D9"
        }, {
            id: "red",
            title: "Red",
            colorValue: "#DB4141"
        }],
        handOffset: {
            left: 29,
            right: 29,
            bottom: 29
        }
    }
}, {
    id: "iphone-12-mini",
    title: "iPhone 12 Mini",
    screenRadius: 0,
    clayBezelLeft: 22,
    clayBezelRight: 22,
    clayBezelTop: 22,
    clayBezelBottom: 22,
    clayBezelRadius: 66,
    screenWidth: 360,
    screenHeight: 780,
    externalClay: {
        width: 450,
        height: 890,
        screenOffsetTop: 55,
        screenOffsetLeft: 45
    },
    screenMask: '<g style="transform: scale(0.5);"><path d="M142 18c0 19 14 47 43 48h349c31 0 44-29 44-48 0-12 4-18 14-18h18c38 0 52 4 66 11 14 8 25 19 33 33v1c7 14 11 28 11 65v1340c0 38-4 52-11 66-8 14-19 25-33 33h-1c-14 7-28 11-65 11H110c-38 0-52-4-66-11-14-8-25-19-33-33v-1c-7-13-11-27-11-64V110c0-38 4-52 11-66 8-14 19-25 33-33h1C58 4 72 0 109 0h16c11 0 17 6 17 18z" fill="#000" fill-rule="evenodd"/></g>',
    realisticImage: {
        width: 460,
        height: 880,
        screenOffsetLeft: 50,
        screenOffsetTop: 50,
        availableColors: [{
            id: "black",
            title: "Black",
            colorValue: "#2E2C36"
        }, {
            id: "white",
            title: "White",
            colorValue: "#F7F3F0"
        }, {
            id: "blue",
            title: "Blue",
            colorValue: "#14496D"
        }, {
            id: "green",
            title: "Green",
            colorValue: "#DAF0D9"
        }, {
            id: "red",
            title: "Red",
            colorValue: "#DB4141"
        }],
        handOffset: {
            left: 31.5,
            right: 30.5,
            bottom: 30
        }
    }
}, {
    id: "iphone-12-pro",
    title: "iPhone 12 Pro",
    screenRadius: 0,
    clayBezelLeft: 22,
    clayBezelRight: 22,
    clayBezelTop: 22,
    clayBezelBottom: 22,
    clayBezelRadius: 66,
    screenWidth: 390,
    screenHeight: 844,
    externalClay: {
        width: 494,
        height: 968,
        screenOffsetTop: 62,
        screenOffsetLeft: 52
    },
    screenMask: '<g style="transform: scale(0.5);"><path d="M171.2 0c2.3 0 4 .5 5.4 1.3 1.6 1 2.8 2.2 3.7 3.8.8 1.6 1.2 2.3 1.2 4.9 0 12 2.2 19 6.2 26.5s9.8 13.3 17.3 17.4c7.5 4 15.8 6.1 30.6 6.1h311.5c14.3 0 22.5-2.2 29.9-6.1 7.5-4 13.3-10 17.3-17.4 4-7.5 6.2-14.5 6.2-26.5 0-2.6.4-3.2 1.1-4.9.8-1.6 2-2.9 3.4-3.8 1.4-.8 3.2-1.3 5.4-1.3h54.2c40.1 0 54.7 4.2 69.4 12a81.8 81.8 0 0134 34c7.8 14.7 12 29.3 12 69.4v1457.2c0 40.1-4.2 54.7-12 69.4a81.8 81.8 0 01-34 34c-14.7 7.8-29.3 12-69.4 12H115.4c-40.1 0-54.7-4.2-69.4-12a81.8 81.8 0 01-34-34c-7.8-14.7-12-29.3-12-69.4V115.4C0 75.3 4.2 60.7 12 46a81.8 81.8 0 0134-34C60.7 4.2 75.3 0 115.4 0h55.4z" fill="#000" fill-rule="evenodd"/></g>',
    realisticImage: {
        width: 490,
        height: 944,
        screenOffsetLeft: 50,
        screenOffsetTop: 50,
        availableColors: [{
            id: "graphite",
            title: "Graphite",
            colorValue: "#585753"
        }, {
            id: "silver",
            title: "Silver",
            colorValue: "#E5E6E1"
        }, {
            id: "pacific-blue",
            title: "Pacific Blue",
            colorValue: "#415D6C"
        }, {
            id: "gold",
            title: "Gold",
            colorValue: "#FCECD5"
        }],
        handOffset: {
            left: 29,
            right: 29,
            bottom: 29
        }
    }
}, {
    id: "iphone-12-pro-max",
    title: "iPhone 12 Pro Max",
    screenRadius: 50,
    clayBezelLeft: 22,
    clayBezelRight: 22,
    clayBezelTop: 22,
    clayBezelBottom: 22,
    clayBezelRadius: 66,
    screenWidth: 428,
    screenHeight: 926,
    externalClay: {
        width: 532,
        height: 1050,
        screenOffsetTop: 62,
        screenOffsetLeft: 52
    },
    screenMask: '<path d="M102 0c6 0 7 3 7 9 0 10 7 23 24 23h164c13 0 22-12 22-23 0-6 1-9 7-9h34c24 0 32 2 41 7s15 11 20 20 7 17 7 41v790c0 24-2 32-7 41s-11 15-20 20-17 7-41 7H68c-24 0-32-2-41-7s-15-11-20-20-7-17-7-41V68c0-24 2-32 7-41S18 12 27 7s17-7 41-7h34z" fill="#000" fill-rule="evenodd"/>',
    realisticImage: {
        width: 528,
        height: 1026,
        screenOffsetLeft: 50,
        screenOffsetTop: 50,
        availableColors: [{
            id: "graphite",
            title: "Graphite",
            colorValue: "#585753"
        }, {
            id: "silver",
            title: "Silver",
            colorValue: "#E5E6E1"
        }, {
            id: "pacific-blue",
            title: "Pacific Blue",
            colorValue: "#415D6C"
        }, {
            id: "gold",
            title: "Gold",
            colorValue: "#FCECD5"
        }],
        handOffset: {
            left: 28.5,
            right: 28,
            bottom: 29
        }
    }
}, {
    id: "iphone-11",
    title: "iPhone 11",
    screenRadius: 0,
    clayBezelLeft: 35.5,
    clayBezelRight: 35.5,
    clayBezelTop: 35.5,
    clayBezelBottom: 35.5,
    clayBezelRadius: 77,
    screenWidth: 414,
    screenHeight: 896,
    externalClay: {
        width: 524,
        height: 1026,
        screenOffsetTop: 65,
        screenOffsetLeft: 55
    },
    screenMask: '<path d="M85.5 0C89.1 0 92 3 92 6.5c.3 6 1.5 10 3.4 13.5 2.2 4.1 5.5 7.4 9.6 9.6 4.2 2.2 8.9 3.4 17 3.4h170c8.1 0 12.8-1.2 17-3.4 4.1-2.2 7.4-5.5 9.6-9.6A31 31 0 00322 6.5c0-3.6 3-6.5 6.5-6.5h32.3c18.5 0 25.2 2 32 5.5 6.7 3.7 12 9 15.7 15.7 3.6 6.8 5.5 13.5 5.5 32v789.6c0 18.5-2 25.2-5.5 32-3.7 6.7-9 12-15.7 15.7-6.8 3.6-13.5 5.5-32 5.5H53.2c-18.5 0-25.2-2-32-5.5-6.7-3.7-12-9-15.7-15.7C2 868 0 861.3 0 842.8V53.2c0-18.5 2-25.2 5.5-32 3.7-6.7 9-12 15.7-15.7C28 2 34.7 0 53.2 0h32.3z" fill="#000" fill-rule="nonzero"/>',
    realisticImage: {
        width: 514,
        height: 996,
        screenOffsetLeft: 50,
        screenOffsetTop: 50,
        availableColors: [{
            id: "black",
            title: "Black",
            colorValue: "#202120"
        }, {
            id: "white",
            title: "White",
            colorValue: "#F9F6EF"
        }, {
            id: "purple",
            title: "Purple",
            colorValue: "#D1CDDB"
        }, {
            id: "green",
            title: "Green",
            colorValue: "#ADE0CD"
        }, {
            id: "red",
            title: "Red",
            colorValue: "#B90D2E"
        }, {
            id: "yellow",
            title: "Yellow",
            colorValue: "#FFE680"
        }],
        handOffset: {
            left: 14.5,
            right: 14.5,
            bottom: 14.5
        }
    }
}, {
    id: "iphone-11-pro",
    title: "iPhone 11 Pro",
    ...Mn.iPhonePro,
    screenWidth: 375,
    screenHeight: 812,
    externalClay: {
        width: 485,
        height: 942,
        screenOffsetTop: 65,
        screenOffsetLeft: 55
    },
    screenMask: '<path d="M292 8.668V9c0 9.266-7.07 21-23.332 21h-162C90.402 30 83.332 18.266 83.332 9v-.332c0-4.285 0-8.668-7.664-8.668H43.332C16.312 0 0 16.313 0 43.332v725.336C0 795.688 16.313 812 43.332 812h288.336c27.02 0 43.332-16.313 43.332-43.332V43.332C375 16.312 358.687 0 331.668 0h-32C292 0 292 4.383 292 8.668zm0 0"/>',
    realisticImage: {
        width: 475,
        height: 912,
        screenOffsetLeft: 50,
        screenOffsetTop: 50,
        availableColors: [{
            id: "space-grey",
            title: "Space Grey",
            colorValue: "#52514F"
        }, {
            id: "silver",
            title: "Silver",
            colorValue: "#EBEBE3"
        }, {
            id: "gold",
            title: "Gold",
            colorValue: "#FBD7BD"
        }, {
            id: "midnight-green",
            title: "Midnight Green",
            colorValue: "#4F5850"
        }],
        handOffset: {
            left: 24.5,
            right: 24.5,
            bottom: 23.5
        }
    }
}, {
    id: "iphone-11-pro-max",
    title: "iPhone 11 Pro Max",
    ...Mn.iPhonePro,
    screenWidth: 414,
    screenHeight: 896,
    externalClay: {
        width: 524,
        height: 1026,
        screenOffsetTop: 65,
        screenOffsetLeft: 55
    },
    screenMask: '<path d="M96 0c3.313 0 5.91 2.688 6 6 .18 6.645 1.191 10.148 2.938 13.41 1.917 3.586 4.73 6.402 8.316 8.317 3.586 1.918 7.441 2.941 15.445 2.941h156.602c8.004 0 11.86-1.023 15.445-2.941 3.586-1.915 6.399-4.73 8.317-8.317 1.746-3.265 2.746-6.758 2.937-13.41.094-3.313 2.688-6 6-6h46.004c17.387 0 23.687 1.809 30.043 5.21 6.355 3.4 11.344 8.388 14.742 14.743C412.191 26.31 414 32.61 414 49.996v796.008c0 17.387-1.809 23.687-5.21 30.043-3.4 6.355-8.388 11.344-14.743 14.742-6.356 3.402-12.656 5.211-30.043 5.211H49.996c-17.387 0-23.687-1.809-30.043-5.21-6.355-3.4-11.344-8.388-14.742-14.743C1.809 869.69 0 863.39 0 846.004V49.996C0 32.61 1.809 26.31 5.21 19.953c3.4-6.355 8.388-11.344 14.743-14.742C26.31 1.809 32.61 0 49.996 0zm0 0"/>',
    realisticImage: {
        width: 514,
        height: 996,
        screenOffsetLeft: 50,
        screenOffsetTop: 50,
        availableColors: [{
            id: "space-grey",
            title: "Space Grey",
            colorValue: "#52514F"
        }, {
            id: "silver",
            title: "Silver",
            colorValue: "#EBEBE3"
        }, {
            id: "gold",
            title: "Gold",
            colorValue: "#FBD7BD"
        }, {
            id: "midnight-green",
            title: "Midnight Green",
            colorValue: "#4F5850"
        }],
        handOffset: {
            left: 23.5,
            right: 24.5,
            bottom: 24
        }
    }
}, {
    id: "iphone-8",
    title: "iPhone 8",
    ...Mn.iPhone8,
    screenWidth: 375,
    screenHeight: 667,
    externalClay: {
        width: 491,
        height: 971,
        screenOffsetLeft: 58,
        screenOffsetTop: 152
    },
    realisticImage: {
        width: 475,
        height: 927,
        screenOffsetLeft: 50,
        screenOffsetTop: 130,
        availableColors: [{
            id: "space-grey",
            title: "Space Grey",
            colorValue: "#28282A"
        }, {
            id: "silver",
            title: "Silver",
            colorValue: "#DFE1E2"
        }, {
            id: "gold",
            title: "Gold",
            colorValue: "#F6E6DB"
        }],
        handOffset: {
            left: 22,
            right: 22,
            bottom: 18.5
        }
    }
}, {
    id: "iphone-8-plus",
    title: "iPhone 8 Plus",
    ...Mn.iPhone8,
    screenWidth: 414,
    screenHeight: 736,
    externalClay: {
        width: 530,
        height: 1064,
        screenOffsetLeft: 58,
        screenOffsetTop: 164
    },
    realisticImage: {
        width: 514,
        height: 996,
        screenOffsetLeft: 50,
        screenOffsetTop: 130,
        availableColors: [{
            id: "space-grey",
            title: "Space Grey",
            colorValue: "#28282A"
        }, {
            id: "silver",
            title: "Silver",
            colorValue: "#DFE1E2"
        }, {
            id: "gold",
            title: "Gold",
            colorValue: "#F6E6DB"
        }],
        handOffset: {
            left: 21,
            right: 20.5,
            bottom: 19
        }
    }
}, {
    id: "iphone-se",
    title: "iPhone SE",
    screenWidth: 320,
    screenHeight: 568,
    screenRadius: 0,
    clayBezelLeft: 20,
    clayBezelRight: 20,
    clayBezelTop: 112,
    clayBezelBottom: 112,
    clayBezelRadius: 38 * 1.5,
    externalClay: {
        width: 436,
        height: 872,
        screenOffsetLeft: 58,
        screenOffsetTop: 152
    },
    realisticImage: {
        width: 420,
        height: 828,
        screenOffsetLeft: 50,
        screenOffsetTop: 130,
        availableColors: [{
            id: "space-grey",
            title: "Space Grey",
            colorValue: "#C3C4C8"
        }, {
            id: "silver",
            title: "Silver",
            colorValue: "#E1E2E4"
        }, {
            id: "gold",
            title: "Gold",
            colorValue: "#EFD8BD"
        }, {
            id: "rose-gold",
            title: "Rose Gold",
            colorValue: "#F7CFCA"
        }],
        handOffset: {
            left: 22,
            right: 22,
            bottom: 26.5
        }
    }
}, {
    id: "samsung-galaxy-s7",
    title: "Samsung Galaxy S7",
    screenRadius: 0,
    clayBezelLeft: 22,
    clayBezelRight: 22,
    clayBezelTop: 22,
    clayBezelBottom: 22,
    clayBezelRadius: 66,
    screenWidth: 360,
    screenHeight: 640,
    externalClay: {
        width: 454,
        height: 880,
        screenOffsetTop: 120,
        screenOffsetLeft: 47
    },
    realisticImage: {
        width: 440,
        height: 860,
        screenOffsetLeft: 40,
        screenOffsetTop: 110,
        availableColors: [{
            id: "black",
            title: "Black",
            colorValue: "#2E2C36"
        }, {
            id: "white",
            title: "White",
            colorValue: "#F7F3F0"
        }, {
            id: "silver",
            title: "Silver",
            colorValue: "#E5E6E1"
        }, {
            id: "gold",
            title: "Gold",
            colorValue: "#FCECD5"
        }],
        handOffset: {
            left: 26,
            right: 25.5,
            bottom: 32
        }
    }
}, {
    id: "samsung-note-10",
    title: "Samsung Note 10",
    screenWidth: 360,
    screenHeight: 760,
    screenRadius: 10,
    clayBezelLeft: 7,
    clayBezelRight: 7,
    clayBezelTop: 15,
    clayBezelBottom: 15,
    clayBezelRadius: 15
}, {
    id: "pixel-5",
    title: "Google Pixel 5",
    screenRadius: 31,
    clayBezelLeft: 22,
    clayBezelRight: 22,
    clayBezelTop: 22,
    clayBezelBottom: 22,
    clayBezelRadius: 66,
    screenWidth: 360,
    screenHeight: 780,
    externalClay: {
        width: 460,
        height: 900,
        screenOffsetTop: 60,
        screenOffsetLeft: 50
    },
    realisticImage: {
        width: 920 / 2,
        height: 1760 / 2,
        screenOffsetLeft: 100 / 2,
        screenOffsetTop: 100 / 2,
        availableColors: [{
            id: "just-black",
            title: "Just Black",
            colorValue: "#2E2C36"
        }, {
            id: "sorta-sage",
            title: "Sorta Sage",
            colorValue: "#B7C9C0"
        }],
        handOffset: {
            left: 31.5,
            right: 31,
            bottom: 31
        }
    }
}, {
    id: "pixel-4",
    title: "Google Pixel 4",
    screenWidth: 360,
    screenHeight: 760,
    screenRadius: 34,
    clayBezelLeft: 10,
    clayBezelRight: 10,
    clayBezelTop: 50,
    clayBezelBottom: 25,
    clayBezelRadius: 50,
    externalClay: {
        width: 460,
        height: 938,
        screenOffsetLeft: 50,
        screenOffsetTop: 89
    },
    realisticImage: {
        width: 460,
        height: 920,
        screenOffsetLeft: 50,
        screenOffsetTop: 80,
        availableColors: [{
            id: "clearly-white",
            title: "Clearly White",
            colorValue: "#EAEDF2"
        }, {
            id: "just-black",
            title: "Just Black",
            colorValue: "#1A1A1A"
        }, {
            id: "oh-so-orange",
            title: "Oh So Orange",
            colorValue: "#FF7A68"
        }],
        handOffset: {
            left: 35.5,
            right: 35.5,
            bottom: 57
        }
    }
}, {
    id: "macbook-air",
    title: "MacBook Air",
    screenWidth: 1440,
    screenHeight: 900,
    disableRotation: !0,
    externalClay: {
        width: 1890,
        height: 1125,
        screenOffsetLeft: 225,
        screenOffsetTop: 98
    },
    realisticImage: {
        width: 3848 / 2,
        height: 2240 / 2,
        screenOffsetLeft: 484 / 2,
        screenOffsetTop: 196 / 2,
        availableColors: [{
            id: "silver",
            title: "Silver",
            colorValue: "#E5E6E1"
        }, {
            id: "space-grey",
            title: "Space Grey",
            colorValue: "#B1B5B7"
        }, {
            id: "gold",
            title: "Gold",
            colorValue: "#FCECD5"
        }]
    }
}, {
    id: "macbook-pro-13",
    title: 'MacBook Pro 13"',
    screenWidth: 1440,
    screenHeight: 900,
    disableRotation: !0,
    externalClay: {
        width: 1914,
        height: 1169,
        screenOffsetLeft: 236,
        screenOffsetTop: 109
    },
    realisticImage: {
        width: 3916 / 2,
        height: 2330 / 2,
        screenOffsetLeft: 518 / 2,
        screenOffsetTop: 218 / 2,
        availableColors: [{
            id: "silver",
            title: "Silver",
            colorValue: "#E5E6E1"
        }, {
            id: "space-grey",
            title: "Space Grey",
            colorValue: "#B1B5B7"
        }]
    }
}, {
    id: "macbook-pro-16",
    title: 'MacBook Pro 16"',
    screenWidth: 1536,
    screenHeight: 960,
    disableRotation: !0,
    externalClay: {
        width: 1984,
        height: 1179,
        screenOffsetLeft: 225,
        screenOffsetTop: 78
    },
    realisticImage: {
        width: 4032 / 2,
        height: 2348 / 2,
        screenOffsetLeft: 480 / 2,
        screenOffsetTop: 148 / 2,
        availableColors: [{
            id: "silver",
            title: "Silver",
            colorValue: "#E5E6E1"
        }, {
            id: "space-grey",
            title: "Space Grey",
            colorValue: "#B1B5B7"
        }]
    }
}, {
    id: "imac-21-5",
    title: 'iMac 21.5"',
    screenWidth: 2048,
    screenHeight: 1152,
    disableRotation: !0,
    externalClay: {
        width: 2288,
        height: 1892,
        screenOffsetLeft: 120,
        screenOffsetTop: 120
    },
    realisticImage: {
        width: 4562 / 2,
        height: 3796 / 2,
        screenOffsetLeft: 232 / 2,
        screenOffsetTop: 244 / 2
    }
}, {
    id: "imac-27",
    title: 'iMac 27"',
    screenWidth: 2560,
    screenHeight: 1440,
    disableRotation: !0,
    externalClay: {
        width: 2848,
        height: 2351,
        screenOffsetLeft: 144,
        screenOffsetTop: 151
    },
    realisticImage: {
        width: 5676 / 2,
        height: 4720 / 2,
        screenOffsetLeft: 278 / 2,
        screenOffsetTop: 292 / 2,
        availableColors: [{
            id: "silver",
            title: "Silver",
            colorValue: "#E5E6E1"
        }, {
            id: "pro",
            title: "Pro",
            colorValue: "#5F5E63"
        }]
    }
}, {
    id: "pro-display-xdr",
    title: "Pro Display XDR",
    screenWidth: 3008,
    screenHeight: 1692,
    disableRotation: !0,
    externalClay: {
        width: 3148,
        height: 2325,
        screenOffsetLeft: 70,
        screenOffsetTop: 60
    },
    realisticImage: {
        width: 6276 / 2,
        height: 4695 / 2,
        screenOffsetLeft: 130 / 2,
        screenOffsetTop: 130 / 2
    }
}, {
    id: "dell-xps",
    title: "Dell XPS",
    screenWidth: 1920,
    screenHeight: 1080,
    disableRotation: !0,
    externalClay: {
        width: 2624,
        height: 1381,
        screenOffsetLeft: 352,
        screenOffsetTop: 57
    },
    realisticImage: {
        width: 5412 / 2,
        height: 2746 / 2,
        screenOffsetLeft: 786 / 2,
        screenOffsetTop: 108 / 2
    }
}, {
    id: "surface-book",
    title: "Microsoft Surface Book",
    screenWidth: 1500,
    screenHeight: 1e3,
    disableRotation: !0,
    externalClay: {
        width: 2089,
        height: 1234,
        screenOffsetLeft: 296,
        screenOffsetTop: 93
    },
    realisticImage: {
        width: 4200 / 2,
        height: 2508 / 2,
        screenOffsetLeft: 600 / 2,
        screenOffsetTop: 210 / 2
    }
}, {
    id: "ipad",
    title: "iPad",
    screenRadius: 0,
    screenWidth: 810,
    screenHeight: 1080,
    clayBezelLeft: 30,
    clayBezelRight: 30,
    clayBezelTop: 95,
    clayBezelBottom: 95,
    clayBezelRadius: 0,
    externalClay: {
        width: 966,
        height: 1378,
        screenOffsetLeft: 78,
        screenOffsetTop: 149
    },
    realisticImage: {
        width: 1920 / 2,
        height: 2720 / 2,
        screenOffsetLeft: 75,
        screenOffsetTop: 140,
        availableColors: [{
            id: "space-grey",
            title: "Space Grey",
            colorValue: "#C3C4C8"
        }, {
            id: "silver",
            title: "Silver",
            colorValue: "#E1E2E4"
        }, {
            id: "gold",
            title: "Gold",
            colorValue: "#EFD8BD"
        }]
    }
}, {
    id: "ipad-mini",
    title: "iPad Mini",
    screenRadius: 0,
    clayBezelLeft: 49,
    clayBezelRight: 49,
    clayBezelTop: 49,
    clayBezelBottom: 49,
    clayBezelRadius: 49,
    screenWidth: 768,
    screenHeight: 1024,
    externalClay: {
        width: 924,
        height: 1384,
        screenOffsetLeft: 78,
        screenOffsetTop: 180
    },
    realisticImage: {
        width: 1856 / 2,
        height: 2728 / 2,
        screenOffsetLeft: 160 / 2,
        screenOffsetTop: 340 / 2,
        availableColors: [{
            id: "space-grey",
            title: "Space Grey",
            colorValue: "#C3C4C8"
        }, {
            id: "silver",
            title: "Silver",
            colorValue: "#E1E2E4"
        }, {
            id: "gold",
            title: "Gold",
            colorValue: "#EFD8BD"
        }]
    }
}, {
    id: "ipad-air",
    title: "iPad Air",
    screenRadius: 18,
    clayBezelLeft: 49,
    clayBezelRight: 49,
    clayBezelTop: 49,
    clayBezelBottom: 49,
    clayBezelRadius: 49,
    screenWidth: 820,
    screenHeight: 1180,
    externalClay: {
        width: 994,
        height: 1374,
        screenOffsetLeft: 87,
        screenOffsetTop: 97
    },
    realisticImage: {
        width: 1960 / 2,
        height: 2680 / 2,
        screenOffsetLeft: 160 / 2,
        screenOffsetTop: 160 / 2,
        availableColors: [{
            id: "space-grey",
            title: "Space Grey",
            colorValue: "#C3C4C8"
        }, {
            id: "silver",
            title: "Silver",
            colorValue: "#E1E2E4"
        }, {
            id: "rose-gold",
            title: "Rose Gold",
            colorValue: "#ECCBC4"
        }, {
            id: "blue",
            title: "Blue",
            colorValue: "#CBDAE6"
        }, {
            id: "green",
            title: "Green",
            colorValue: "#DAF0D9"
        }]
    }
}, {
    id: "ipad-pro-11",
    title: "iPad Pro 11\u2033",
    screenRadius: 17,
    clayBezelLeft: 49,
    clayBezelRight: 49,
    clayBezelTop: 49,
    clayBezelBottom: 49,
    clayBezelRadius: 49,
    screenWidth: 834,
    screenHeight: 1194,
    externalClay: {
        width: 990,
        height: 1370,
        screenOffsetLeft: 78,
        screenOffsetTop: 88
    },
    realisticImage: {
        width: 1968 / 2,
        height: 2688 / 2,
        screenOffsetLeft: 75,
        screenOffsetTop: 75,
        availableColors: [{
            id: "space-grey",
            title: "Space Grey",
            colorValue: "#C3C4C8"
        }, {
            id: "silver",
            title: "Silver",
            colorValue: "#E1E2E4"
        }]
    }
}, {
    id: "ipad-pro-12-9",
    title: "iPad Pro 12.9\u2033",
    ...Mn.iPadPro,
    screenRadius: 17,
    screenWidth: 1024,
    screenHeight: 1366,
    externalClay: {
        width: 1180,
        height: 1542,
        screenOffsetLeft: 78,
        screenOffsetTop: 88
    },
    realisticImage: {
        width: 2348 / 2,
        height: 3032 / 2,
        screenOffsetLeft: 75,
        screenOffsetTop: 75,
        availableColors: [{
            id: "space-grey",
            title: "Space Grey",
            colorValue: "#C3C4C8"
        }, {
            id: "silver",
            title: "Silver",
            colorValue: "#E1E2E4"
        }]
    }
}, {
    id: "surface-3",
    title: "Microsoft Surface 3",
    screenRadius: 0,
    clayBezelLeft: 49,
    clayBezelRight: 49,
    clayBezelTop: 49,
    clayBezelBottom: 49,
    clayBezelRadius: 49,
    screenWidth: 960,
    screenHeight: 640,
    externalClay: {
        width: 1184,
        height: 864,
        screenOffsetLeft: 112,
        screenOffsetTop: 112
    },
    realisticImage: {
        width: 2280 / 2,
        height: 1580 / 2,
        screenOffsetLeft: 180 / 2,
        screenOffsetTop: 150 / 2
    }
}, {
    id: "surface-pro-4",
    title: "Microsoft Surface Pro 4",
    screenRadius: 0,
    clayBezelLeft: 49,
    clayBezelRight: 49,
    clayBezelTop: 49,
    clayBezelBottom: 49,
    clayBezelRadius: 49,
    screenWidth: 1368,
    screenHeight: 912,
    externalClay: {
        width: 1592,
        height: 1136,
        screenOffsetLeft: 112,
        screenOffsetTop: 112
    },
    realisticImage: {
        width: 3176 / 2,
        height: 2224 / 2,
        screenOffsetLeft: 220 / 2,
        screenOffsetTop: 200 / 2
    }
}, {
    id: "apple-watch-44",
    title: "Apple Watch 44mm",
    screenRadius: 33,
    screenWidth: 184,
    screenHeight: 224,
    disableRotation: !0,
    externalClay: {
        width: 298,
        height: 502,
        screenOffsetLeft: 57,
        screenOffsetTop: 129
    },
    realisticImage: {
        width: 548 / 2,
        height: 908 / 2,
        screenOffsetLeft: 90 / 2,
        screenOffsetTop: 230 / 2,
        availableColors: [{
            id: "black",
            title: "Black",
            colorValue: "#2E2C36"
        }, {
            id: "white",
            title: "White",
            colorValue: "#F7F3F0"
        }, {
            id: "yellow",
            title: "Yellow",
            colorValue: "#FDDC6C"
        }, {
            id: "orange",
            title: "Orange",
            colorValue: "#F35C56"
        }]
    }
}, {
    id: "apple-watch-40",
    title: "Apple Watch 40mm",
    screenRadius: 27,
    screenWidth: 162,
    screenHeight: 197,
    disableRotation: !0,
    externalClay: {
        width: 280,
        height: 463,
        screenOffsetLeft: 59,
        screenOffsetTop: 124
    },
    realisticImage: {
        width: 504 / 2,
        height: 854 / 2,
        screenOffsetLeft: 90 / 2,
        screenOffsetTop: 230 / 2,
        availableColors: [{
            id: "black",
            title: "Black",
            colorValue: "#2E2C36"
        }, {
            id: "white",
            title: "White",
            colorValue: "#F7F3F0"
        }, {
            id: "yellow",
            title: "Yellow",
            colorValue: "#FDDC6C"
        }, {
            id: "orange",
            title: "Orange",
            colorValue: "#F35C56"
        }]
    }
}, {
    id: "tv-full-hd",
    title: "Full HD",
    screenRadius: 0,
    screenWidth: 1920,
    screenHeight: 1080,
    externalClay: {
        width: 1968,
        height: 1168,
        screenOffsetLeft: 24,
        screenOffsetTop: 12
    },
    realisticImage: {
        width: 4040 / 2,
        height: 2360 / 2,
        screenOffsetLeft: 100 / 2,
        screenOffsetTop: 100 / 2
    }
}, {
    id: "tv-4k",
    title: "4K",
    screenRadius: 0,
    screenWidth: 3840,
    screenHeight: 2160,
    externalClay: {
        width: 3908,
        height: 2308,
        screenOffsetLeft: 34,
        screenOffsetTop: 24
    },
    realisticImage: {
        width: 7960 / 2,
        height: 4600 / 2,
        screenOffsetLeft: 140 / 2,
        screenOffsetTop: 140 / 2
    }
}, {
    id: "720p",
    title: "720p",
    ...Mn.desktop,
    screenWidth: 720,
    screenHeight: 1280
}, {
    id: "900p",
    title: "900p",
    ...Mn.desktop,
    screenWidth: 900,
    screenHeight: 1440
}, {
    id: "1080p",
    title: "1080p",
    ...Mn.desktop,
    screenWidth: 1080,
    screenHeight: 1920
}, {
    id: "1440p",
    title: "1440p",
    ...Mn.desktop,
    screenWidth: 1440,
    screenHeight: 2560
}, {
    id: "4k",
    title: "4K",
    ...Mn.desktop,
    screenWidth: 2160,
    screenHeight: 3840
}];
var WH = ZM.reduce((e,t)=>(e[t.id] = t,
e), {});
var ge = e=>e;
function JM(e) {
    let t = Object.create(Object.prototype);
    return n=>(t[n] === void 0 && (t[n] = e(n)),
    t[n])
}
var eO = /^(?:children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|[dkrxyz]|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y1|y2|yChannelSelector|zoomAndPan|for|class|autofocus|(?:[Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*)$/
  , tO = JM(e=>eO.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91)
  , hw = b.createContext(void 0)
  , QH = hw.Provider
  , nO = ()=>b.useContext(hw) ?? {}
  , rO = Gt(jp(), 1)
  , rn = typeof Ke < "u" ? Ke : void 0
  , Nn = ()=>typeof document == "object";
var iO = ()=>{
    let e = -1
      , n = rn && /Version\/([\d.]+)/.exec(rn.userAgent);
    return n && n[1] && (e = parseFloat(n[1])),
    e
}
  , oO = ()=>rn && /Chrome/.test(rn.userAgent) && /Google Inc/.test(rn.vendor) && !sO()
  , pw = ()=>rn && /Safari/.test(rn.userAgent) && /Apple Computer/.test(rn.vendor);
var aO = ()=>rn && /FramerX/.test(rn.userAgent)
  , sO = ()=>rn && /Edg\//.test(rn.userAgent);
var mw = ()=>rO.default.env.NODE_ENV === "test";
var A1 = e=>()=>{
    cs(e)
}
  , lO = ()=>()=>{}
  , cO = {
    useImageSource(e) {
        return e.src ?? ""
    },
    useImageElement(e, t, n) {
        let r = new Image;
        return r.src = Ge.useImageSource(e, t, n),
        e.srcSet && (r.srcset = e.srcSet),
        r
    },
    canRenderOptimizedCanvasImage() {
        return !1
    }
}
  , uO = !1
  , fO = {
    get(e, t, n) {
        return Reflect.has(e, t) ? Reflect.get(e, t, n) : ["getLogger"].includes(String(t)) ? lO() : A1(uO ? `${String(t)} is not available in this version of Framer.` : `${String(t)} is only available inside of Framer. https://www.framer.com/`)
    }
}
  , Ge = new Proxy(cO,fO);
function dO(e, t, n=1) {
    let {width: r, height: i} = t
      , o = e.pixelWidth ?? e.intrinsicWidth ?? 0
      , a = e.pixelHeight ?? e.intrinsicHeight ?? 0;
    if (r < 1 || i < 1 || o < 1 || a < 1)
        return;
    r *= n,
    i *= n;
    let s = r / i
      , l = o / a;
    switch (e.fit) {
    case "fill":
        return l > s ? a / i : o / r;
    case "fit":
    case "stretch":
        return Math.max(o / r, a / i)
    }
}
function V1(e, t) {
    return t && Math.max(1, e) > t ? "pixelated" : "auto"
}
var B1 = {
    position: "absolute",
    borderRadius: "inherit",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
}
  , hO = {
    backgroundSize: "16px 16px",
    backgroundImage: "repeating-linear-gradient(45deg, rgba(180, 180, 180, 0.8) 0, rgba(180, 180, 180, 0.8) 1px, rgba(255, 255, 255, 0.2) 0, rgba(255, 255, 255, 0.2) 50%)",
    border: "1px solid #c4c4c4"
};
function pO(e) {
    switch (e) {
    case "fit":
        return "contain";
    case "stretch":
        return "fill";
    default:
        return "cover"
    }
}
function vw(e, t) {
    let n = e ?? "center"
      , r = t ?? "center";
    return n === "center" && r === "center" ? "center" : n + " " + r
}
function mO(e, t) {
    if (!t)
        return "auto";
    let n = Oe.current() === "CANVAS" ? jt.devicePixelRatio : 1
      , r = dO(e, t, n);
    return Oe.current() === "CANVAS" ? V1(1, r) : V1(Jc.zoom, r)
}
function Zp(e, t) {
    return {
        display: "block",
        width: "100%",
        height: "100%",
        borderRadius: "inherit",
        objectPosition: vw(e.positionX, e.positionY),
        objectFit: pO(e.fit),
        imageRendering: mO(e, t)
    }
}
function vO({image: e, containerSize: t, nodeId: n, alt: r}) {
    let i = Ge.useImageSource(e, t, n)
      , o = Zp(e, t)
      , [a,s] = b.useState()
      , l = b.useRef(null)
      , c = nO();
    return b.useEffect(()=>{
        if (!c.imgSizesWorkaroundEnabled)
            return;
        let u = l.current;
        if (!u || mw() || !e.sizes || !u.closest("[data-framer-name]"))
            return;
        let d = u.clientWidth
          , h = Number(e.sizes.replace("px", ""));
        !isNaN(h) && d < h || s(d + "px")
    }
    , [e.sizes]),
    T("img", {
        ref: l,
        decoding: "async",
        loading: e.loading,
        sizes: a ?? e.sizes,
        srcSet: e.srcSet,
        src: i,
        alt: r ?? e.alt,
        style: o
    })
}
function gO({image: e, containerSize: t, nodeId: n}) {
    let r = b.useRef(null)
      , i = Ge.useImageElement(e, t, n)
      , o = Zp(e, t);
    return b.useLayoutEffect(()=>{
        let a = r.current;
        if (a !== null)
            return a.appendChild(i),
            ()=>{
                a.removeChild(i)
            }
    }
    , [i]),
    Object.assign(i.style, o),
    T("div", {
        ref: r,
        style: {
            display: "contents",
            borderRadius: "inherit"
        }
    })
}
function yO({nodeId: e, image: t, containerSize: n}) {
    let r = b.useRef(null)
      , i = Ge.useImageSource(t, n, e);
    return b.useLayoutEffect(()=>{
        let o = r.current;
        if (o === null)
            return;
        let a = Zp(t, n);
        Ge.renderOptimizedCanvasImage(o, i, a, e)
    }
    , [e, t, i, n]),
    T("div", {
        ref: r,
        style: {
            display: "contents",
            borderRadius: "inherit"
        }
    })
}
function gw({layoutId: e, image: t, ...n}) {
    e && (e = e + "-background");
    let r = {
        ...B1,
        ...hO
    }
      , i = null;
    if (ne(t.src))
        if (t.fit === "tile" && t.pixelWidth && t.pixelHeight) {
            let o = fe(t.backgroundSize) ? t.backgroundSize : 1
              , a = {
                width: Math.round(o * t.pixelWidth),
                height: Math.round(o * t.pixelHeight)
            }
              , s = Ge.useImageSource(t, a);
            r.backgroundImage = `url(${s})`,
            r.backgroundRepeat = "repeat",
            r.backgroundPosition = vw(t.positionX, t.positionY),
            t.pixelWidth && (r.backgroundSize = `${(o * (t.pixelWidth / 2)).toFixed(2)}px auto`),
            r.border = 0,
            i = null
        } else
            Oe.current() !== "CANVAS" ? i = T(vO, {
                image: t,
                ...n
            }) : Ge.canRenderOptimizedCanvasImage(Ge.useImageSource(t)) ? i = T(yO, {
                image: t,
                ...n
            }) : i = T(gO, {
                image: t,
                ...n
            });
    return T(Rt.div, {
        layoutId: e,
        style: i ? B1 : r,
        "data-framer-background-image-wrapper": !0,
        children: i
    })
}
var bO = "src", ar;
(e=>{
    e.isImageObject = function(t) {
        return !t || typeof t == "string" ? !1 : bO in t
    }
}
)(ar || (ar = {}));
function xO(e, t) {
    let {_forwardedOverrideId: n, _forwardedOverrides: r, id: i} = t
      , o = n ?? i
      , a = r && o ? r[o] : void 0;
    return a && typeof a == "string" && (e = {
        ...e,
        src: a
    }),
    e
}
function SO(e) {
    let {background: t, image: n} = e;
    if (n !== void 0 && t && !ar.isImageObject(t))
        return;
    let r = null;
    if (ne(n) ? r = {
        alt: "",
        src: n
    } : r = He.get(t, null),
    !!ar.isImageObject(r))
        return xO(r, e)
}
function wO(e, t, n=!0) {
    let {borderWidth: r, borderStyle: i, borderColor: o} = e;
    if (!r)
        return;
    let a, s, l, c;
    if (typeof r == "number" ? a = s = l = c = r : (a = r.top || 0,
    s = r.bottom || 0,
    l = r.left || 0,
    c = r.right || 0),
    !(a === 0 && s === 0 && l === 0 && c === 0)) {
        if (n && a === s && a === l && a === c) {
            t.border = `${a}px ${i} ${o}`;
            return
        }
        t.borderStyle = e.borderStyle,
        t.borderColor = e.borderColor,
        t.borderTopWidth = `${a}px`,
        t.borderBottomWidth = `${s}px`,
        t.borderLeftWidth = `${l}px`,
        t.borderRightWidth = `${c}px`
    }
}
function CO(e) {
    let t = e.layoutId ? `${e.layoutId}-border` : void 0;
    if (!e.borderWidth)
        return null;
    let n = {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        borderRadius: "inherit",
        pointerEvents: "none"
    };
    return e.border ? (n.border = e.border,
    T(Rt.div, {
        style: n
    })) : (wO(e, n, !1),
    T(Rt.div, {
        "data-frame-border": !0,
        style: n,
        layoutId: t
    }))
}
function hu(e) {
    return e && e !== "search" && e !== "slot" && e !== "template" ? Rt[e] : Rt.div
}
var kO = oO();
function yw(e) {
    let t = {};
    return !kO || Oe.current() !== "CANVAS" || ((e === !0 || e === "x") && (t["data-framer-layout-hint-center-x"] = !0),
    (e === !0 || e === "y") && (t["data-framer-layout-hint-center-y"] = !0)),
    t
}
function Jp(e) {
    return e.replace(/^id_/, "").replace(/\\/g, "")
}
function bw(e, t) {
    if (!t && (t = e.children,
    !t))
        return {
            props: e,
            children: t
        };
    let n = e._forwardedOverrides
      , r = e._overrideForwardingDescription;
    if (r) {
        n = void 0;
        for (let i in r) {
            let o = r[i];
            e[o] !== void 0 && (n || (n = {},
            e = {
                ...e
            }),
            n[i] = e[o],
            delete e[o])
        }
    }
    return n ? (t = b.Children.map(t, i=>b.isValidElement(i) ? b.cloneElement(i, {
        _forwardedOverrides: n
    }) : i),
    {
        props: e,
        children: t
    }) : {
        props: e,
        children: t
    }
}
function pu(e) {
    return (t,n)=>e === !0 ? `translate(-50%, -50%) ${n}` : e === "x" ? `translateX(-50%) ${n}` : e === "y" ? `translateY(-50%) ${n}` : n || "none"
}
function Lo(e, {specificLayoutId: t, postfix: n}={}) {
    let {name: r, layoutIdKey: i, duplicatedFrom: o, __fromCodeComponentNode: a=!1, drag: s} = e
      , {getLayoutId: l, enabled: c} = M(Po);
    return he(()=>{
        if (!c)
            return e.layoutId;
        let u = t || e.layoutId;
        if (!u && (s || !i || a))
            return;
        let f = u || l({
            id: i,
            name: r,
            duplicatedFrom: o
        });
        if (f)
            return n ? `${f}-${n}` : f
    }
    , [c])
}
var xw = typeof document < "u" ? lr : $, Mo = b.createContext(!1), xi = [], TO = function() {
    return xi.some(function(e) {
        return e.activeTargets.length > 0
    })
}, EO = function() {
    return xi.some(function(e) {
        return e.skippedTargets.length > 0
    })
}, z1 = "ResizeObserver loop completed with undelivered notifications.", RO = function() {
    var e;
    typeof ErrorEvent == "function" ? e = new ErrorEvent("error",{
        message: z1
    }) : (e = document.createEvent("Event"),
    e.initEvent("error", !1, !1),
    e.message = z1),
    _.dispatchEvent(e)
}, hs;
(function(e) {
    e.BORDER_BOX = "border-box",
    e.CONTENT_BOX = "content-box",
    e.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box"
}
)(hs || (hs = {}));
var Si = function(e) {
    return Object.freeze(e)
}, PO = function() {
    function e(t, n) {
        this.inlineSize = t,
        this.blockSize = n,
        Si(this)
    }
    return e
}(), Sw = function() {
    function e(t, n, r, i) {
        return this.x = t,
        this.y = n,
        this.width = r,
        this.height = i,
        this.top = this.y,
        this.left = this.x,
        this.bottom = this.top + this.height,
        this.right = this.left + this.width,
        Si(this)
    }
    return e.prototype.toJSON = function() {
        var t = this
          , n = t.x
          , r = t.y
          , i = t.top
          , o = t.right
          , a = t.bottom
          , s = t.left
          , l = t.width
          , c = t.height;
        return {
            x: n,
            y: r,
            top: i,
            right: o,
            bottom: a,
            left: s,
            width: l,
            height: c
        }
    }
    ,
    e.fromRect = function(t) {
        return new e(t.x,t.y,t.width,t.height)
    }
    ,
    e
}(), em = function(e) {
    return e instanceof SVGElement && "getBBox"in e
}, ww = function(e) {
    if (em(e)) {
        var t = e.getBBox()
          , n = t.width
          , r = t.height;
        return !n && !r
    }
    var i = e
      , o = i.offsetWidth
      , a = i.offsetHeight;
    return !(o || a || e.getClientRects().length)
}, H1 = function(e) {
    var t, n;
    if (e instanceof Element)
        return !0;
    var r = (n = (t = e) === null || t === void 0 ? void 0 : t.ownerDocument) === null || n === void 0 ? void 0 : n.defaultView;
    return !!(r && e instanceof r.Element)
}, IO = function(e) {
    switch (e.tagName) {
    case "INPUT":
        if (e.type !== "image")
            break;
    case "VIDEO":
    case "AUDIO":
    case "EMBED":
    case "OBJECT":
    case "CANVAS":
    case "IFRAME":
    case "IMG":
        return !0
    }
    return !1
}, as = typeof _ < "u" ? _ : {}, zc = new WeakMap, N1 = /auto|scroll/, FO = /^tb|vertical/, _O = /msie|trident/i.test(as.navigator && as.navigator.userAgent), On = function(e) {
    return parseFloat(e || "0")
}, Eo = function(e, t, n) {
    return e === void 0 && (e = 0),
    t === void 0 && (t = 0),
    n === void 0 && (n = !1),
    new PO((n ? t : e) || 0,(n ? e : t) || 0)
}, $1 = Si({
    devicePixelContentBoxSize: Eo(),
    borderBoxSize: Eo(),
    contentBoxSize: Eo(),
    contentRect: new Sw(0,0,0,0)
}), Cw = function(e, t) {
    if (t === void 0 && (t = !1),
    zc.has(e) && !t)
        return zc.get(e);
    if (ww(e))
        return zc.set(e, $1),
        $1;
    var n = getComputedStyle(e)
      , r = em(e) && e.ownerSVGElement && e.getBBox()
      , i = !_O && n.boxSizing === "border-box"
      , o = FO.test(n.writingMode || "")
      , a = !r && N1.test(n.overflowY || "")
      , s = !r && N1.test(n.overflowX || "")
      , l = r ? 0 : On(n.paddingTop)
      , c = r ? 0 : On(n.paddingRight)
      , u = r ? 0 : On(n.paddingBottom)
      , f = r ? 0 : On(n.paddingLeft)
      , d = r ? 0 : On(n.borderTopWidth)
      , h = r ? 0 : On(n.borderRightWidth)
      , g = r ? 0 : On(n.borderBottomWidth)
      , y = r ? 0 : On(n.borderLeftWidth)
      , S = f + c
      , m = l + u
      , p = y + h
      , v = d + g
      , x = s ? e.offsetHeight - v - e.clientHeight : 0
      , C = a ? e.offsetWidth - p - e.clientWidth : 0
      , w = i ? S + p : 0
      , k = i ? m + v : 0
      , E = r ? r.width : On(n.width) - w - C
      , I = r ? r.height : On(n.height) - k - x
      , P = E + S + C + p
      , z = I + m + x + v
      , L = Si({
        devicePixelContentBoxSize: Eo(Math.round(E * devicePixelRatio), Math.round(I * devicePixelRatio), o),
        borderBoxSize: Eo(P, z, o),
        contentBoxSize: Eo(E, I, o),
        contentRect: new Sw(f,l,E,I)
    });
    return zc.set(e, L),
    L
}, kw = function(e, t, n) {
    var r = Cw(e, n)
      , i = r.borderBoxSize
      , o = r.contentBoxSize
      , a = r.devicePixelContentBoxSize;
    switch (t) {
    case hs.DEVICE_PIXEL_CONTENT_BOX:
        return a;
    case hs.BORDER_BOX:
        return i;
    default:
        return o
    }
}, LO = function() {
    function e(t) {
        var n = Cw(t);
        this.target = t,
        this.contentRect = n.contentRect,
        this.borderBoxSize = Si([n.borderBoxSize]),
        this.contentBoxSize = Si([n.contentBoxSize]),
        this.devicePixelContentBoxSize = Si([n.devicePixelContentBoxSize])
    }
    return e
}(), Tw = function(e) {
    if (ww(e))
        return 1 / 0;
    for (var t = 0, n = e.parentNode; n; )
        t += 1,
        n = n.parentNode;
    return t
}, MO = function() {
    var e = 1 / 0
      , t = [];
    xi.forEach(function(a) {
        if (a.activeTargets.length !== 0) {
            var s = [];
            a.activeTargets.forEach(function(c) {
                var u = new LO(c.target)
                  , f = Tw(c.target);
                s.push(u),
                c.lastReportedSize = kw(c.target, c.observedBox),
                f < e && (e = f)
            }),
            t.push(function() {
                a.callback.call(a.observer, s, a.observer)
            }),
            a.activeTargets.splice(0, a.activeTargets.length)
        }
    });
    for (var n = 0, r = t; n < r.length; n++) {
        var i = r[n];
        i()
    }
    return e
}, j1 = function(e) {
    xi.forEach(function(n) {
        n.activeTargets.splice(0, n.activeTargets.length),
        n.skippedTargets.splice(0, n.skippedTargets.length),
        n.observationTargets.forEach(function(i) {
            i.isActive() && (Tw(i.target) > e ? n.activeTargets.push(i) : n.skippedTargets.push(i))
        })
    })
}, OO = function() {
    var e = 0;
    for (j1(e); TO(); )
        e = MO(),
        j1(e);
    return EO() && RO(),
    e > 0
}, vp, Ew = [], DO = function() {
    return Ew.splice(0).forEach(function(e) {
        return e()
    })
}, AO = function(e) {
    if (!vp) {
        var t = 0
          , n = document.createTextNode("")
          , r = {
            characterData: !0
        };
        new MutationObserver(function() {
            return DO()
        }
        ).observe(n, r),
        vp = function() {
            n.textContent = "" + (t ? t-- : t++)
        }
    }
    Ew.push(e),
    vp()
}, VO = function(e) {
    AO(function() {
        requestAnimationFrame(e)
    })
}, Yc = 0, BO = function() {
    return !!Yc
}, zO = 250, HO = {
    attributes: !0,
    characterData: !0,
    childList: !0,
    subtree: !0
}, W1 = ["resize", "load", "transitionend", "animationend", "animationstart", "animationiteration", "keyup", "keydown", "mouseup", "mousedown", "mouseover", "mouseout", "blur", "focus"], U1 = function(e) {
    return e === void 0 && (e = 0),
    Date.now() + e
}, gp = !1, NO = function() {
    function e() {
        var t = this;
        this.stopped = !0,
        this.listener = function() {
            return t.schedule()
        }
    }
    return e.prototype.run = function(t) {
        var n = this;
        if (t === void 0 && (t = zO),
        !gp) {
            gp = !0;
            var r = U1(t);
            VO(function() {
                var i = !1;
                try {
                    i = OO()
                } finally {
                    if (gp = !1,
                    t = r - U1(),
                    !BO())
                        return;
                    i ? n.run(1e3) : t > 0 ? n.run(t) : n.start()
                }
            })
        }
    }
    ,
    e.prototype.schedule = function() {
        this.stop(),
        this.run()
    }
    ,
    e.prototype.observe = function() {
        var t = this
          , n = function() {
            return t.observer && t.observer.observe(document.body, HO)
        };
        document.body ? n() : as.addEventListener("DOMContentLoaded", n)
    }
    ,
    e.prototype.start = function() {
        var t = this;
        this.stopped && (this.stopped = !1,
        this.observer = new MutationObserver(this.listener),
        this.observe(),
        W1.forEach(function(n) {
            return as.addEventListener(n, t.listener, !0)
        }))
    }
    ,
    e.prototype.stop = function() {
        var t = this;
        this.stopped || (this.observer && this.observer.disconnect(),
        W1.forEach(function(n) {
            return as.removeEventListener(n, t.listener, !0)
        }),
        this.stopped = !0)
    }
    ,
    e
}(), Ap = new NO, X1 = function(e) {
    !Yc && e > 0 && Ap.start(),
    Yc += e,
    !Yc && Ap.stop()
}, $O = function(e) {
    return !em(e) && !IO(e) && getComputedStyle(e).display === "inline"
}, jO = function() {
    function e(t, n) {
        this.target = t,
        this.observedBox = n || hs.CONTENT_BOX,
        this.lastReportedSize = {
            inlineSize: 0,
            blockSize: 0
        }
    }
    return e.prototype.isActive = function() {
        var t = kw(this.target, this.observedBox, !0);
        return $O(this.target) && (this.lastReportedSize = t),
        this.lastReportedSize.inlineSize !== t.inlineSize || this.lastReportedSize.blockSize !== t.blockSize
    }
    ,
    e
}(), WO = function() {
    function e(t, n) {
        this.activeTargets = [],
        this.skippedTargets = [],
        this.observationTargets = [],
        this.observer = t,
        this.callback = n
    }
    return e
}(), Hc = new WeakMap, Y1 = function(e, t) {
    for (var n = 0; n < e.length; n += 1)
        if (e[n].target === t)
            return n;
    return -1
}, Nc = function() {
    function e() {}
    return e.connect = function(t, n) {
        var r = new WO(t,n);
        Hc.set(t, r)
    }
    ,
    e.observe = function(t, n, r) {
        var i = Hc.get(t)
          , o = i.observationTargets.length === 0;
        Y1(i.observationTargets, n) < 0 && (o && xi.push(i),
        i.observationTargets.push(new jO(n,r && r.box)),
        X1(1),
        Ap.schedule())
    }
    ,
    e.unobserve = function(t, n) {
        var r = Hc.get(t)
          , i = Y1(r.observationTargets, n)
          , o = r.observationTargets.length === 1;
        i >= 0 && (o && xi.splice(xi.indexOf(r), 1),
        r.observationTargets.splice(i, 1),
        X1(-1))
    }
    ,
    e.disconnect = function(t) {
        var n = this
          , r = Hc.get(t);
        r.observationTargets.slice().forEach(function(i) {
            return n.unobserve(t, i.target)
        }),
        r.activeTargets.splice(0, r.activeTargets.length)
    }
    ,
    e
}(), UO = function() {
    function e(t) {
        if (arguments.length === 0)
            throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
        if (typeof t != "function")
            throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
        Nc.connect(this, t)
    }
    return e.prototype.observe = function(t, n) {
        if (arguments.length === 0)
            throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
        if (!H1(t))
            throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
        Nc.observe(this, t, n)
    }
    ,
    e.prototype.unobserve = function(t) {
        if (arguments.length === 0)
            throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
        if (!H1(t))
            throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
        Nc.unobserve(this, t)
    }
    ,
    e.prototype.disconnect = function() {
        Nc.disconnect(this)
    }
    ,
    e.toString = function() {
        return "function ResizeObserver () { [polyfill code] }"
    }
    ,
    e
}();
function mu() {
    let[e,t] = b.useState(0);
    return b.useCallback(()=>t(n=>n + 1), [])
}
var es, ts, XO = class {
    constructor() {
        Qo(this, es, void 0),
        Qo(this, ts, new WeakMap);
        let e = jt.ResizeObserver ?? UO;
        cf(this, es, new e(this.updateResizedElements.bind(this)))
    }
    updateResizedElements(e) {
        for (let t of e) {
            let n = Et(this, ts).get(t.target);
            n && n(t.contentRect)
        }
    }
    observeElementWithCallback(e, t) {
        Et(this, es).observe(e),
        Et(this, ts).set(e, t)
    }
    unobserve(e) {
        Et(this, es).unobserve(e),
        Et(this, ts).delete(e)
    }
}
;
es = new WeakMap;
ts = new WeakMap;
var $c = Nn() ? new XO : void 0;
function YO(e) {
    let t = mu();
    $(()=>{
        let n = e?.current;
        if (n)
            return $c?.observeElementWithCallback(e.current, t),
            ()=>{
                $c?.unobserve(n)
            }
    }
    , [e, t])
}
var GO = "data-framer-size-compatibility-wrapper";
function KO(e) {
    return [...e.firstElementChild && e.firstElementChild.hasAttribute(GO) ? e.firstElementChild.children : e.children].filter(Rw).map(Pw)
}
function Rw(e) {
    return e instanceof HTMLBaseElement || e instanceof HTMLHeadElement || e instanceof HTMLLinkElement || e instanceof HTMLMetaElement || e instanceof HTMLScriptElement || e instanceof HTMLStyleElement || e instanceof HTMLTitleElement ? !1 : e instanceof HTMLElement || e instanceof SVGElement
}
function Pw(e) {
    if (!(e instanceof HTMLElement) || e.children.length === 0 || e.style.display !== "contents")
        return e;
    let t = [...e.children].find(Rw);
    return t ? Pw(t) : e
}
function vu(e, t, n=()=>[], r={}) {
    let {id: i, visible: o, _needsMeasure: a} = e
      , {skipHook: s=!1} = r
      , l = !!M(Mo)
      , c = Oe.current() === "CANVAS";
    xw(()=>{
        !c || l || s || t.current && i && o && a && Ge.queueMeasureRequest(Jp(i), t.current, n(t.current))
    }
    )
}
function qO(e) {
    let t = e.closest("[data-framer-component-container]");
    t && Ge.queueMeasureRequest(Jp(t.id), t, KO(t))
}
var Ti = Object.keys;
function ps(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
}
function G1(e) {
    return ps(e, "equals") ? typeof e.equals == "function" : !1
}
function tm(e, t) {
    return e === t ? !0 : e !== e && t !== t
}
function QO(e, t) {
    let n = e.length;
    if (n !== t.length)
        return !1;
    for (let r = n; r-- !== 0; )
        if (!tm(e[r], t[r]))
            return !1;
    return !0
}
function ZO(e, t) {
    let n = e.length;
    if (n !== t.length)
        return !1;
    for (let r = n; r-- !== 0; )
        if (!gu(e[r], t[r], !0))
            return !1;
    return !0
}
function JO(e, t) {
    if (e.size !== t.size)
        return !1;
    for (let[n,r] of e.entries())
        if (!tm(r, t.get(n)))
            return !1;
    return !0
}
function eD(e, t) {
    if (e.size !== t.size)
        return !1;
    for (let[n,r] of e.entries())
        if (!gu(r, t.get(n), !0))
            return !1;
    return !0
}
function tD(e, t) {
    if (e.size !== t.size)
        return !1;
    for (let n of e.keys())
        if (!t.has(n))
            return !1;
    return !0
}
function nD(e, t) {
    let n = Ti(e);
    if (n.length !== Ti(t).length)
        return !1;
    for (let r of n) {
        if (!ps(t, r))
            return !1;
        if (!(r === "_owner" && ps(e, "$$typeof") && e.$$typeof) && !tm(e[r], t[r]))
            return !1
    }
    return !0
}
function rD(e, t) {
    let n = Ti(e);
    if (n.length !== Ti(t).length)
        return !1;
    for (let r of n) {
        if (!ps(t, r))
            return !1;
        if (!(r === "_owner" && ps(e, "$$typeof") && e.$$typeof) && !gu(e[r], t[r], !0))
            return !1
    }
    return !0
}
function gu(e, t, n) {
    if (e === t)
        return !0;
    if (!e || !t)
        return e !== e && t !== t;
    let r = typeof e;
    if (r !== typeof t || r !== "object")
        return !1;
    let o = Array.isArray(e)
      , a = Array.isArray(t);
    if (o && a)
        return n ? ZO(e, t) : QO(e, t);
    if (o !== a)
        return !1;
    let s = e instanceof Map
      , l = t instanceof Map;
    if (s && l)
        return n ? eD(e, t) : JO(e, t);
    if (s !== l)
        return !1;
    let c = e instanceof Set
      , u = t instanceof Set;
    if (c && u)
        return tD(e, t);
    if (c !== u)
        return !1;
    let f = e instanceof Date
      , d = t instanceof Date;
    if (f && d)
        return e.getTime() === t.getTime();
    if (f !== d)
        return !1;
    let h = e instanceof RegExp
      , g = t instanceof RegExp;
    return h && g ? e.toString() === t.toString() : h !== g ? !1 : G1(e) && G1(t) ? e.equals(t) : n ? rD(e, t) : nD(e, t)
}
function Me(e, t, n=!0) {
    try {
        return gu(e, t, n)
    } catch (r) {
        if (r instanceof Error && /stack|recursion/iu.exec(r.message))
            return console.warn("Warning: isEqual does not handle circular references.", r.name, r.message),
            !1;
        throw r
    }
}
var Iw = "0.000001px"
  , yp = ` translateZ(${Iw})`
  , Fw = aO() || pw() || mw();
function iD(e) {
    e.willChange = "transform";
    let t = Oe.current() === "CANVAS";
    Fw && t && (e.translateZ = Iw)
}
function nm(e) {
    e.willChange = "transform",
    oD(e, !0)
}
function oD(e, t) {
    let n = Oe.current() === "CANVAS";
    if (!Fw || !n)
        return;
    let r = ne(e.transform) && e.transform || "";
    t ? r.includes(yp) || (e.transform = r + yp) : e.transform = r.replace(yp, "")
}
function _w(e, t, n, r=!0) {
    if (!e)
        return;
    let i = ge(e.style)
      , o = n || i[t]
      , a = ()=>{
        i[t] = o
    }
    ;
    i[t] = null,
    r ? Promise.resolve().then(a) : setTimeout(a, 0)
}
var Ro = class extends xe {
    constructor() {
        super(...arguments),
        R(this, "layerElement", null),
        R(this, "setLayerElement", e=>{
            this.layerElement = e
        }
        )
    }
    static applyWillChange(e, t, n) {
        e.willChangeTransform && (n ? iD(t) : nm(t))
    }
    shouldComponentUpdate(e, t) {
        return e._needsMeasure || this.state !== t || !Me(this.props, e)
    }
    componentDidUpdate(e) {
        ge(this.props).clip && ge(this.props).radius === 0 && ge(e).radius !== 0 && _w(this.layerElement, "overflow", "hidden", !1)
    }
}
;
R(Ro, "defaultProps", {});
function aD(e, t) {
    if (e.size < t)
        return;
    let r = Math.round(Math.random());
    for (let i of e.keys())
        (++r & 1) !== 1 && e.delete(i)
}
function sD(e, t, n, r) {
    let i = t.get(n);
    if (i)
        return i;
    aD(t, e);
    let o = r(n);
    return t.set(n, o),
    o
}
var Lw = e=>{
    let t = 0, n, r;
    if (e.length === 0)
        return t;
    for (n = 0; n < e.length; n++)
        r = e.charCodeAt(n),
        t = (t << 5) - t + r,
        t |= 0;
    return t
}
  , rm = {
    hueRotate: (e,t)=>N.toHslString(N.hueRotate(N(e), t)),
    setAlpha: (e,t)=>N.toRgbString(N.alpha(N(e), t)),
    getAlpha: e=>{
        let t = qp(e);
        return t ? t.a : 1
    }
    ,
    multiplyAlpha: (e,t)=>N.toRgbString(N.multiplyAlpha(N(e), t)),
    toHex: e=>N.toHexString(N(e)).toUpperCase(),
    toRgb: e=>N.toRgb(N(e)),
    toRgbString: e=>N.toRgbString(N(e)),
    toHSV: e=>N.toHsv(N(e)),
    toHSL: e=>N.toHsl(N(e)),
    toHslString: e=>N.toHslString(N(e)),
    toHsvString: e=>N.toHsvString(N(e)),
    hsvToHSLString: e=>N.toHslString(N(Vc(e.h, e.s, e.v, e.a))),
    hsvToHex: e=>N.toHexString(N(Vc(e.h, e.s, e.v, e.a))).toUpperCase(),
    hsvToRgbString: e=>N.toRgbString(N(Vc(e.h, e.s, e.v, e.a))),
    hsvToString: e=>Vc(e.h, e.s, e.v),
    rgbaToString: e=>N.toRgbString(N(e)),
    rgbToHexString: e=>N.toHexString(N(e)),
    hslToString: e=>N.toHslString(N(e)),
    hslToRgbString: e=>N.toRgbString(N(e)),
    toColorPickerSquare: e=>N.toRgbString(N({
        h: e,
        s: 1,
        l: .5,
        a: 1
    })),
    isValid: e=>N(e).isValid !== !1,
    equals: (e,t)=>(typeof e == "string" && (e = N(e)),
    typeof t == "string" && (t = N(t)),
    N.equal(e, t)),
    toHexOrRgbaString: e=>{
        let t = N(e);
        return t.a !== 1 ? N.toRgbString(t) : N.toHexString(t)
    }
}
  , lD = /var\(.+\)/
  , cD = new Map;
function uD(e, t) {
    let n = [e, t];
    return lD.test(e) ? e : sD(1e3, cD, n, ()=>rm.multiplyAlpha(e, t))
}
function Es(e, t=1) {
    let n;
    return "stops"in e ? n = e.stops : n = [{
        value: e.start,
        position: 0
    }, {
        value: e.end,
        position: 1
    }],
    t === 1 ? n : n.map(r=>({
        ...r,
        value: uD(r.value, t)
    }))
}
function Mw(e, t) {
    let n = 0;
    return Es(e, t).forEach(r=>{
        n ^= Lw(r.value) ^ r.position
    }
    ),
    n
}
var fD = ["stops"];
function Ow(e) {
    return e && fD.every(t=>t in e)
}
var dD = ["start", "end"];
function Dw(e) {
    return e && dD.every(t=>t in e)
}
var hD = ["angle", "alpha"]
  , ms = {
    isLinearGradient: e=>e && hD.every(t=>t in e) && (Dw(e) || Ow(e)),
    hash: e=>e.angle ^ Mw(e, e.alpha),
    toCSS: (e,t)=>{
        let n = Es(e, e.alpha)
          , r = t !== void 0 ? t : e.angle
          , i = n.map(o=>`${o.value} ${o.position * 100}%`);
        return `linear-gradient(${r}deg, ${i.join(", ")})`
    }
}
  , pD = ["widthFactor", "heightFactor", "centerAnchorX", "centerAnchorY", "alpha"]
  , vs = {
    isRadialGradient: e=>e && pD.every(t=>t in e) && (Dw(e) || Ow(e)),
    hash: e=>e.centerAnchorX ^ e.centerAnchorY ^ e.widthFactor ^ e.heightFactor ^ Mw(e, e.alpha),
    toCSS: e=>{
        let {alpha: t, widthFactor: n, heightFactor: r, centerAnchorX: i, centerAnchorY: o} = e
          , s = Es(e, t).map(l=>`${l.value} ${l.position * 100}%`);
        return `radial-gradient(${n * 100}% ${r * 100}% at ${i * 100}% ${o * 100}%, ${s.join(", ")})`
    }
};
function mD({background: e, backgroundColor: t}, n) {
    t ? typeof t == "string" || F1(t) ? n.backgroundColor = t : N.isColorObject(e) && (n.backgroundColor = e.initialValue || N.toRgbString(e)) : e && (e = He.get(e, null),
    typeof e == "string" || F1(e) ? n.background = e : ms.isLinearGradient(e) ? n.background = ms.toCSS(e) : vs.isRadialGradient(e) ? n.background = vs.toCSS(e) : N.isColorObject(e) && (n.backgroundColor = e.initialValue || N.toRgbString(e)))
}
function oe(e, t, n, r) {
    if (r === void 0 && (r = t),
    e[t] !== void 0) {
        n[r] = e[t];
        return
    }
}
function vD(e) {
    return e ? e.left !== void 0 && e.right !== void 0 : !1
}
function gD(e) {
    return e ? e.top !== void 0 && e.bottom !== void 0 : !1
}
function yD(e) {
    if (!e)
        return {};
    let t = {};
    return e.preserve3d === !0 ? t.transformStyle = "preserve-3d" : e.preserve3d === !1 && (t.transformStyle = "flat"),
    e.backfaceVisible === !0 ? t.backfaceVisibility = "visible" : e.backfaceVisible === !1 && (t.backfaceVisibility = "hidden"),
    t.backfaceVisibility && (t.WebkitBackfaceVisibility = t.backfaceVisibility),
    e.perspective !== void 0 && (t.perspective = t.WebkitPerspective = e.perspective),
    e.__fromCanvasComponent || (e.center === !0 ? (t.left = "50%",
    t.top = "50%") : e.center === "x" ? t.left = "50%" : e.center === "y" && (t.top = "50%")),
    oe(e, "size", t),
    oe(e, "width", t),
    oe(e, "height", t),
    oe(e, "minWidth", t),
    oe(e, "minHeight", t),
    oe(e, "top", t),
    oe(e, "right", t),
    oe(e, "bottom", t),
    oe(e, "left", t),
    oe(e, "position", t),
    oe(e, "overflow", t),
    oe(e, "opacity", t),
    (!e._border || !e._border.borderWidth) && oe(e, "border", t),
    oe(e, "borderRadius", t),
    oe(e, "radius", t, "borderRadius"),
    oe(e, "color", t),
    oe(e, "shadow", t, "boxShadow"),
    oe(e, "x", t),
    oe(e, "y", t),
    oe(e, "z", t),
    oe(e, "rotate", t),
    oe(e, "rotateX", t),
    oe(e, "rotateY", t),
    oe(e, "rotateZ", t),
    oe(e, "scale", t),
    oe(e, "scaleX", t),
    oe(e, "scaleY", t),
    oe(e, "skew", t),
    oe(e, "skewX", t),
    oe(e, "skewY", t),
    oe(e, "originX", t),
    oe(e, "originY", t),
    oe(e, "originZ", t),
    mD(e, t),
    t
}
function bD(e) {
    for (let t in e)
        if (t === "drag" || t.startsWith("while") || typeof ge(e)[t] == "function" && t.startsWith("on") && !t.includes("Animation"))
            return !0;
    return !1
}
var K1 = ["onClick", "onDoubleClick", "onMouse", "onMouseDown", "onMouseUp", "onTapDown", "onTap", "onTapUp", "onPointer", "onPointerDown", "onPointerUp", "onTouch", "onTouchDown", "onTouchUp"]
  , xD = new Set([...K1, ...K1.map(e=>`${e}Capture`)]);
function SD(e) {
    if (e.drag)
        return "grab";
    for (let t in e)
        if (xD.has(t))
            return "pointer"
}
var bp = "overflow";
function wD(e) {
    return q1(e) ? !0 : e.style ? !!q1(e.style) : !1
}
function q1(e) {
    return bp in e && (e[bp] === "scroll" || e[bp] === "auto")
}
function im(e) {
    let {left: t, top: n, bottom: r, right: i, width: o, height: a, center: s, _constraints: l, size: c, widthType: u, heightType: f, positionFixed: d, positionAbsolute: h} = e
      , g = nt(e.minWidth)
      , y = nt(e.minHeight)
      , S = nt(e.maxWidth)
      , m = nt(e.maxHeight);
    return {
        top: nt(n),
        left: nt(t),
        bottom: nt(r),
        right: nt(i),
        width: nt(o),
        height: nt(a),
        size: nt(c),
        center: s,
        _constraints: l,
        widthType: u,
        heightType: f,
        positionFixed: d,
        positionAbsolute: h,
        minWidth: g,
        minHeight: y,
        maxWidth: S,
        maxHeight: m
    }
}
var Q1 = {
    x: 0,
    y: 0,
    width: 200,
    height: 200
};
function CD(e) {
    b.useInsertionEffect(()=>{
        Ts()
    }
    , []);
    let t = !!M(Mo)
      , {style: n, _initialStyle: r, __fromCanvasComponent: i, size: o} = e
      , a = im(e)
      , s = XL(a)
      , l = {
        display: "block",
        flex: n?.flex ?? "0 0 auto",
        userSelect: Oe.current() !== "PREVIEW" ? "none" : void 0
    };
    e.__fromCanvasComponent || (l.backgroundColor = e.background === void 0 ? "rgba(0, 170, 255, 0.3)" : void 0);
    let c = !bD(e) && !e.__fromCanvasComponent && !wD(e)
      , u = e.style ? !("pointerEvents"in e.style) : !0;
    c && u && (l.pointerEvents = "none");
    let d = b.Children.count(e.children) > 0 && b.Children.toArray(e.children).every(m=>typeof m == "string" || typeof m == "number") && {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center"
    }
      , h = yD(e);
    o === void 0 && !i && (vD(h) || (l.width = Q1.width),
    gD(h) || (l.height = Q1.height)),
    a.minWidth !== void 0 && (l.minWidth = a.minWidth),
    a.minHeight !== void 0 && (l.minHeight = a.minHeight);
    let g = {};
    _o(a) && s && !Aw(e) && (g = {
        left: s.x,
        top: s.y,
        width: s.width,
        height: s.height,
        right: void 0,
        bottom: void 0
    }),
    Object.assign(l, d, r, h, g, n),
    Object.assign(l, {
        overflowX: l.overflowX ?? l.overflow,
        overflowY: l.overflowY ?? l.overflow,
        overflow: void 0
    }),
    Ro.applyWillChange(e, l, !0);
    let y = l;
    l.transform || (y = {
        x: 0,
        y: 0,
        ...l
    });
    let S = Oe.current() === "CANVAS";
    return e.positionSticky ? (!S || t) && (y.position = "sticky",
    y.willChange = "transform",
    y.zIndex = 1,
    y.top = e.positionStickyTop,
    y.right = e.positionStickyRight,
    y.bottom = e.positionStickyBottom,
    y.left = e.positionStickyLeft) : S && (e.positionFixed || e.positionAbsolute) && (y.position = "absolute"),
    "rotate"in y && y.rotate === void 0 && delete y.rotate,
    [y, s]
}
var kD = new Set(["width", "height", "opacity", "overflow", "radius", "background", "color", "x", "y", "z", "rotate", "rotateX", "rotateY", "rotateZ", "scale", "scaleX", "scaleY", "skew", "skewX", "skewY", "originX", "originY", "originZ"]);
function TD(e) {
    let t = {};
    for (let n in e)
        (Di(n) || tO(n)) && !kD.has(n) ? t[n] = ge(e)[n] : (n === "positionTransition" || n === "layoutTransition") && (t.layout = !0,
        typeof ge(e)[n] != "boolean" && !e.transition && (t.transition = ge(e)[n]));
    return t
}
function ED(e) {
    return "data-framer-name"in e
}
var RD = We(function(t, n) {
    let {name: r, center: i, border: o, _border: a, __portal: s} = t
      , {props: l, children: c} = bw(t)
      , u = TD(l)
      , f = Lo(t)
      , d = SD(t)
      , h = O(null)
      , g = n ?? h
      , y = {
        "data-framer-component-type": t.componentType ?? "Frame",
        "data-framer-cursor": d,
        "data-framer-highlight": d === "pointer" ? !0 : void 0,
        "data-layoutid": f,
        "data-framer-offset-parent-id": ge(t)["data-framer-offset-parent-id"]
    };
    !ED(t) && r && (ge(y)["data-framer-name"] = r);
    let[S,m] = CD(l)
      , p = im(l)
      , v = Aw(p);
    i && !(m && !v && _o(p)) ? (u.transformTemplate || (u.transformTemplate = pu(i)),
    Object.assign(y, yw(i))) : u.transformTemplate || (u.transformTemplate = void 0),
    vu(t, g);
    let x = SO(t)
      , C = !!M(Mo)
      , w = PD(l, p, m, C)
      , k = lw(ae(Ne, {
        children: [x ? T(gw, {
            alt: t.alt ?? "",
            image: x,
            containerSize: m ?? void 0,
            nodeId: t.id && Jp(t.id),
            layoutId: f
        }) : null, c, T(CO, {
            ...a,
            border: o,
            layoutId: f
        })]
    }), w)
      , E = hu(t.as)
      , {size: I, radius: P, shadow: z} = S;
    return I !== void 0 && (delete S.size,
    S.height === void 0 && (S.height = I),
    S.width === void 0 && (S.width = I)),
    P !== void 0 && (delete S.radius,
    S.borderRadius = P),
    z !== void 0 && (delete S.shadow,
    S.boxShadow = z),
    ae(E, {
        ...y,
        ...u,
        layoutId: f,
        style: S,
        ref: g,
        children: [k, s]
    })
})
  , ss = We(function(t, n) {
    let {visible: r=!0} = t;
    return r ? T(RD, {
        ...t,
        ref: n
    }) : null
});
function PD(e, t, n, r) {
    if (r)
        return n ? {
            width: n.width,
            height: n.height
        } : 1;
    let {_usesDOMRect: i} = e
      , {widthType: o=0, heightType: a=0, width: s, height: l} = t;
    return n && !i ? n : o === 0 && a === 0 && typeof s == "number" && typeof l == "number" ? {
        width: s,
        height: l
    } : i || e.positionFixed || e.positionAbsolute ? 2 : 0
}
function Aw({width: e, height: t}) {
    return e === "auto" || e === "min-content" || t === "auto" || t === "min-content"
}
var om = "__LAYOUT_TREE_ROOT"
  , Vw = b.createContext({
    schedulePromoteTree: ()=>{}
    ,
    scheduleProjectionDidUpdate: ()=>{}
    ,
    initLead: ()=>{}
})
  , ID = class extends xe {
    constructor() {
        super(...arguments),
        R(this, "shouldAnimate", !1),
        R(this, "transition"),
        R(this, "lead"),
        R(this, "follow"),
        R(this, "scheduledPromotion", !1),
        R(this, "scheduledDidUpdate", !1),
        R(this, "scheduleProjectionDidUpdate", ()=>{
            this.scheduledDidUpdate = !0
        }
        ),
        R(this, "schedulePromoteTree", (e,t,n)=>{
            this.follow = this.lead,
            this.shouldAnimate = n,
            this.lead = e,
            this.transition = t,
            this.scheduledPromotion = !0
        }
        ),
        R(this, "initLead", (e,t)=>{
            this.follow = this.lead,
            this.lead = e,
            this.follow && t && (this.follow.layoutMaybeMutated = !0)
        }
        ),
        R(this, "sharedLayoutContext", {
            schedulePromoteTree: this.schedulePromoteTree,
            scheduleProjectionDidUpdate: this.scheduleProjectionDidUpdate,
            initLead: this.initLead
        })
    }
    getSnapshotBeforeUpdate() {
        var e;
        if (!this.scheduledPromotion || !this.lead || !this.follow)
            return null;
        let t = !!((e = this.lead) != null && e.layoutMaybeMutated) && !this.shouldAnimate;
        return this.lead.projectionNodes.forEach(n=>{
            var r;
            n?.promote({
                needsReset: t,
                transition: this.shouldAnimate ? this.transition : void 0,
                preserveFollowOpacity: n.options.layoutId === om && !((r = this.follow) != null && r.isExiting)
            })
        }
        ),
        this.shouldAnimate ? this.follow.layoutMaybeMutated = !0 : this.scheduleProjectionDidUpdate(),
        this.lead.layoutMaybeMutated = !1,
        this.transition = void 0,
        this.scheduledPromotion = !1,
        null
    }
    componentDidUpdate() {
        var e, t;
        if (!this.lead)
            return null;
        this.scheduledDidUpdate && ((t = (e = this.lead.rootProjectionNode) == null ? void 0 : e.root) == null || t.didUpdate(),
        this.scheduledDidUpdate = !1)
    }
    render() {
        return T(Vw.Provider, {
            value: this.sharedLayoutContext,
            children: this.props.children
        })
    }
}
  , FD = {
    width: "100%",
    height: "100%",
    backgroundColor: "none"
};
function _D(e) {
    return T(Rt.div, {
        layoutId: om,
        style: FD,
        children: e.children
    })
}
var zr, ns, LD = class {
    constructor(e) {
        Qo(this, zr, void 0),
        Qo(this, ns, new WeakMap),
        document && cf(this, zr, new IntersectionObserver(this.resizeObserverCallback.bind(this),e))
    }
    resizeObserverCallback(e, t) {
        for (let n of e) {
            let r = Et(this, ns).get(n.target);
            r && r([n], t)
        }
    }
    observeElementWithCallback(e, t) {
        Et(this, zr) && (Et(this, zr).observe(e),
        Et(this, ns).set(e, t))
    }
    unobserve(e) {
        Et(this, zr) && (Et(this, zr).unobserve(e),
        Et(this, ns).delete(e))
    }
    get root() {
        var e;
        return (e = Et(this, zr)) == null ? void 0 : e.root
    }
}
;
zr = new WeakMap;
ns = new WeakMap;
var MD = b.createContext(new Map);
function OD(e, t, n) {
    if (typeof IntersectionObserver > "u")
        return;
    let r = Hn(()=>`${n.rootMargin}`)
      , i = b.useContext(MD)
      , {enabled: o} = n;
    b.useEffect(()=>{
        var a;
        let s = e.current;
        if (!o || !s)
            return;
        let l = i.get(r);
        if (!l || l.root !== ((a = n.root) == null ? void 0 : a.current)) {
            let {root: c, ...u} = n;
            l = new LD({
                ...u,
                root: c?.current
            }),
            i.set(r, l)
        }
        return l.observeElementWithCallback(s, t),
        ()=>l?.unobserve(s)
    }
    , [o])
}
var DD = new Array(100).fill(void 0).map((e,t)=>t * .01)
  , AD = b.createContext(null);
function VD(e, t, n) {
    let r = b.useRef({
        isInView: !1,
        hasAnimatedOnce: !1
    })
      , {enabled: i, animateOnce: o, threshold: a, rootMargin: s="0px 0px 0px 0px"} = n
      , l = b.useCallback(([c])=>{
        if (!c)
            return;
        let {isInView: u, hasAnimatedOnce: f} = r.current
          , d = zD(c, a?.y ?? 0);
        if (d && !u) {
            if (o && f)
                return;
            r.current.hasAnimatedOnce = !0,
            r.current.isInView = !0,
            t(!0);
            return
        }
        if (!d && u) {
            if (r.current.isInView = !1,
            o)
                return;
            t(!1);
            return
        }
    }
    , [o, a?.y, t]);
    OD(e, l, {
        threshold: DD,
        rootMargin: s,
        enabled: i ?? !0
    })
}
function BD(e, t) {
    return t.height === 0 ? 0 : e.height / Math.min(t.height, jt.innerHeight)
}
function zD({boundingClientRect: e, intersectionRect: t, isIntersecting: n}, r) {
    return e.height === 0 ? n : n && BD(t, e) >= r
}
var SN = Gt(cu(), 1);
var CN = Gt(cu(), 1);
var EN = b.createContext({
    dragging: !1
});
var HD = {
    onMouseEnter: "mouseenter",
    onMouseLeave: "mouseleave"
}
  , PN = Object.keys(HD);
var Z1 = (e,t)=>Object.prototype.hasOwnProperty.call(e, t)
  , ir = Symbol("private")
  , xp = (()=>{
    function e(t={}, n=!1, r=!0) {
        let i = {
            [ir]: {
                makeAnimatables: n,
                observeAnimatables: r,
                observers: new nw,
                reset() {
                    for (let a in o)
                        if (Z1(o, a)) {
                            let s = Z1(t, a) ? ge(t)[a] : void 0;
                            s !== void 0 ? o[a] = s : delete o[a]
                        }
                },
                transactions: new Set
            }
        }
          , o = new Proxy(i,$D);
        return Object.assign(o, t),
        o
    }
    return e.resetObject = t=>t[ir].reset(),
    e.addObserver = (t,n)=>t[ir].observers.add(n),
    e
}
)()
  , ND = class {
    constructor() {
        R(this, "set", (e,t,n,r)=>{
            if (t === ir)
                return !1;
            let i = e[ir], o, a;
            if (vn(n) ? (o = n,
            a = o.get()) : a = n,
            i.makeAnimatables && typeof n != "function" && typeof n != "object" && !o && (o = He(n)),
            i.observeAnimatables && o) {
                let u = i.transactions;
                o.onUpdate({
                    update: (f,d)=>{
                        d && u.add(d),
                        i.observers.notify({
                            value: r
                        }, d)
                    }
                    ,
                    finish: f=>{
                        u.delete(f) && i.observers.finishTransaction(f)
                    }
                })
            }
            let s = !1
              , l = !0
              , c = ge(e)[t];
            if (c !== void 0) {
                vn(c) ? (l = c.get() !== a,
                c.set(a)) : (l = c !== a,
                ge(e)[t] = a);
                let u = a !== null && typeof a == "object";
                (Array.isArray(a) || u) && (l = !0),
                s = !0
            } else
                o && (n = o),
                s = Reflect.set(e, t, n);
            return l && i.observers.notify({
                value: r
            }),
            s
        }
        ),
        R(this, "get", (e,t,n)=>{
            if (t === ir)
                return ge(e)[t];
            let r = Reflect.get(e, t, n);
            return typeof r == "function" ? r.bind(n) : r
        }
        )
    }
    deleteProperty(e, t) {
        let n = Reflect.deleteProperty(e, t);
        return e[ir].observers.notify({
            value: e
        }),
        n
    }
    ownKeys(e) {
        let t = Reflect.ownKeys(e)
          , n = t.indexOf(ir);
        return n !== -1 && t.splice(n, 1),
        t
    }
    getOwnPropertyDescriptor(e, t) {
        if (t !== ir)
            return Reflect.getOwnPropertyDescriptor(e, t)
    }
}
  , $D = new ND;
var jD = "opacity";
function WD(e) {
    return jD in e
}
function UD(e, t) {
    if (!WD(e))
        return;
    let n = He.getNumber(e.opacity);
    n !== 1 && (t.opacity = n)
}
function XD(e) {
    let t = [];
    if (e && e.length) {
        let n = e.map(r=>`drop-shadow(${r.x}px ${r.y}px ${r.blur}px ${r.color})`);
        t.push(...n)
    }
    return t
}
function Bw(e, t) {
    if (!e.shadows || e.shadows.length === 0)
        return;
    let n = e.shadows.map(r=>`${r.x}px ${r.y}px ${r.blur}px ${r.color}`).join(", ");
    n && (t.textShadow = n)
}
function YD(e, t) {
    let n = [];
    U(e.brightness) && n.push(`brightness(${e.brightness / 100})`),
    U(e.contrast) && n.push(`contrast(${e.contrast / 100})`),
    U(e.grayscale) && n.push(`grayscale(${e.grayscale / 100})`),
    U(e.hueRotate) && n.push(`hue-rotate(${e.hueRotate}deg)`),
    U(e.invert) && n.push(`invert(${e.invert / 100})`),
    U(e.saturate) && n.push(`saturate(${e.saturate / 100})`),
    U(e.sepia) && n.push(`sepia(${e.sepia / 100})`),
    U(e.blur) && n.push(`blur(${e.blur}px)`),
    e.dropShadows && n.push(...XD(e.dropShadows)),
    n.length !== 0 && (t.filter = t.WebkitFilter = n.join(" "))
}
function GD(e, t) {
    U(e.backgroundBlur) && (t.backdropFilter = t.WebkitBackdropFilter = `blur(${e.backgroundBlur}px)`)
}
function am(e, t) {
    GD(e, t),
    YD(e, t)
}
var {getNumber: _N} = He;
var KD = class extends xe {
    constructor() {
        super(...arguments),
        R(this, "layoutMaybeMutated"),
        R(this, "projectionNodes", new Map),
        R(this, "rootProjectionNode"),
        R(this, "isExiting"),
        R(this, "shouldPreserveFollowOpacity", e=>e.options.layoutId === om && !this.props.isExiting),
        R(this, "switchLayoutGroupContext", {
            register: e=>this.addChild(e),
            deregister: e=>this.removeChild(e),
            transition: this.props.isLead !== void 0 && this.props.animatesLayout ? this.props.transition : void 0,
            shouldPreserveFollowOpacity: this.shouldPreserveFollowOpacity
        })
    }
    componentDidMount() {
        this.props.isLead && this.props.sharedLayoutContext.initLead(this, !!this.props.animatesLayout)
    }
    shouldComponentUpdate(e) {
        let {isLead: t, isExiting: n, isOverlayed: r, animatesLayout: i, transition: o, sharedLayoutContext: a} = e;
        if (this.isExiting = n,
        t === void 0)
            return !0;
        let s = !this.props.isLead && !!t
          , l = this.props.isExiting && !n
          , c = s || l
          , u = !!this.props.isLead && !t
          , f = this.props.isOverlayed !== r;
        return (c || u) && this.projectionNodes.forEach(d=>d?.willUpdate()),
        c ? a.schedulePromoteTree(this, o, !!i) : f && a.scheduleProjectionDidUpdate(),
        !!c && !!i
    }
    addChild(e) {
        let t = e.options.layoutId;
        t && (this.projectionNodes.set(t, e),
        this.setRootChild(e))
    }
    setRootChild(e) {
        if (!this.rootProjectionNode)
            return this.rootProjectionNode = e;
        this.rootProjectionNode = this.rootProjectionNode.depth < e.depth ? this.rootProjectionNode : e
    }
    removeChild(e) {
        let t = e.options.layoutId;
        t && this.projectionNodes.delete(t)
    }
    render() {
        return T(nl.Provider, {
            value: this.switchLayoutGroupContext,
            children: this.props.children
        })
    }
}
  , qD = e=>{
    let t = b.useContext(Vw);
    return T(KD, {
        ...e,
        sharedLayoutContext: t
    })
}
  , QD = b.createContext(!0);
function ZD() {
    return new Map
}
function JD() {
    return Hn(ZD)
}
var zw = Se({
    register: ()=>{}
    ,
    deregister: ()=>{}
})
  , eA = ({isCurrent: e, isOverlayed: t, children: n})=>{
    let r = JD()
      , i = ue(s=>{
        if (r.has(s)) {
            console.warn("NavigationTargetWrapper: already registered");
            return
        }
        r.set(s, void 0)
    }
    , [r])
      , o = ue(s=>{
        let l = r.get(s);
        l?.(),
        r.delete(s)
    }
    , [r])
      , a = O({
        register: i,
        deregister: o
    }).current;
    return $(()=>(r.forEach((s,l)=>{
        let c = l(e, t);
        r.set(l, fs(c) ? c : void 0)
    }
    ),
    ()=>{
        r.forEach((s,l)=>{
            s && (s(),
            r.set(l, void 0))
        }
        )
    }
    ), [e, t, r]),
    T(zw.Provider, {
        value: a,
        children: n
    })
}
;
function tA(e, t=[]) {
    let {register: n, deregister: r} = M(zw);
    $(()=>{
        if (e)
            return n(e),
            ()=>r(e)
    }
    , [n, r, ...t])
}
var Sp = b.memo(function({isLayeredContainer: t, isCurrent: n, isPrevious: r, isOverlayed: i=!1, visible: o, transitionProps: a, children: s, backdropColor: l, onTapBackdrop: c, backfaceVisible: u, exitBackfaceVisible: f, animation: d, exitAnimation: h, instant: g, initialProps: y, exitProps: S, position: m={
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
}, withMagicMotion: p, index: v, areMagicMotionLayersPresent: x, id: C, isInitial: w}) {
    let k = Ny()
      , E = M(Vi)
      , {persistLayoutIdCache: I} = M(Po)
      , P = O({
        wasCurrent: void 0,
        wasPrevious: !1,
        wasBeingRemoved: !1,
        wasReset: !0,
        origins: J1({}, y, a)
    })
      , z = O(null)
      , L = E !== null && !E.isPresent;
    n && P.current.wasCurrent === void 0 && I(),
    $(()=>{
        if (t || !k)
            return;
        if (L) {
            P.current = {
                ...P.current,
                wasBeingRemoved: L
            };
            return
        }
        let {wasPrevious: K, wasCurrent: Z} = P.current
          , Ut = n && !Z || !L && P.current.wasBeingRemoved && n
          , re = r && !K
          , ut = J1(P.current.origins, y, a)
          , Q = P.current.wasReset;
        Ut || re ? (k.stop(),
        k.start({
            zIndex: v,
            ...ut,
            ...a
        }),
        Q = !1) : Q === !1 && (k.stop(),
        k.set({
            zIndex: v,
            ...bi,
            opacity: 0
        }),
        Q = !0),
        P.current = {
            wasCurrent: !!n,
            wasPrevious: !!r,
            wasBeingRemoved: !1,
            wasReset: Q,
            origins: ut
        }
    }
    , [n, r, L]);
    let ee = g ? {
        type: !1
    } : "velocity"in d ? {
        ...d,
        velocity: 0
    } : d
      , H = g ? {
        type: !1
    } : h || d
      , te = {
        ...m
    };
    (te.left === void 0 || te.right === void 0) && (te.width = "auto"),
    (te.top === void 0 || te.bottom === void 0) && (te.height = "auto");
    let V = (eS(a) || eS(y)) && (t || n || r) ? 1200 : void 0
      , W = {
        ...bi,
        ...P.current.origins
    }
      , A = t ? {
        initial: {
            ...W,
            ...y
        },
        animate: {
            ...W,
            ...a,
            transition: ee
        },
        exit: {
            ...W,
            ...S,
            transition: d
        }
    } : {
        animate: k,
        exit: {
            ...W,
            ...S,
            transition: H
        }
    }
      , q = !(L || x === !1)
      , B = !!n && q;
    return ae(ss, {
        "data-framer-component-type": "NavigationContainerWrapper",
        width: "100%",
        height: "100%",
        style: {
            position: "absolute",
            transformStyle: "flat",
            backgroundColor: "transparent",
            overflow: "hidden",
            zIndex: t || L || n && p ? v : void 0,
            pointerEvents: void 0,
            visibility: o ? "visible" : "hidden",
            perspective: V
        },
        children: [t && T(ss, {
            width: "100%",
            height: "100%",
            "data-framer-component-type": "NavigationContainerBackdrop",
            transition: d,
            initial: {
                opacity: g && o ? 1 : 0
            },
            animate: {
                opacity: 1
            },
            exit: {
                opacity: 0
            },
            backgroundColor: l || "transparent",
            onTap: L ? void 0 : c
        }), T(ss, {
            ...te,
            ...A,
            transition: {
                default: ee,
                originX: {
                    type: !1
                },
                originY: {
                    type: !1
                },
                originZ: {
                    type: !1
                }
            },
            backgroundColor: "transparent",
            backfaceVisible: L ? f : u,
            "data-framer-component-type": "NavigationContainer",
            "data-framer-is-current-navigation-target": !!n,
            style: {
                pointerEvents: void 0,
                opacity: n && w || t || n && p ? 1 : 0
            },
            "data-is-present": q ? void 0 : !1,
            ref: z,
            children: T(AD.Provider, {
                value: z,
                children: T(QD.Provider, {
                    value: B,
                    children: T(eA, {
                        isCurrent: B,
                        isOverlayed: i,
                        children: T(qD, {
                            isLead: n,
                            animatesLayout: !!p,
                            transition: ee,
                            isExiting: !q,
                            isOverlayed: i,
                            id: C,
                            children: s
                        })
                    })
                })
            })
        })]
    })
}, nA);
function nA(e, t) {
    return !(t.isCurrent === void 0 || e.isCurrent !== t.isCurrent || e.isPrevious !== t.isPrevious || t.isCurrent && e.isOverlayed !== t.isOverlayed)
}
function J1(e, t, n) {
    let r = {
        ...e
    };
    return t && (U(t.originX) && (r.originX = t.originX),
    U(t.originY) && (r.originY = t.originY),
    U(t.originZ) && (r.originZ = t.originZ)),
    n && (U(n.originX) && (r.originX = n.originX),
    U(n.originY) && (r.originY = n.originY),
    U(n.originZ) && (r.originZ = n.originZ)),
    r
}
function eS(e) {
    var t, n, r;
    if (!e || !("rotateX"in e || "rotateY"in e || "z"in e))
        return !1;
    let o = e.rotateX !== 0 || e.rotateY !== 0 || e.z !== 0
      , a = ((t = e?.transition) == null ? void 0 : t.rotateX.from) !== 0 || ((n = e?.transition) == null ? void 0 : n.rotateY.from) !== 0 || ((r = e?.transition) == null ? void 0 : r.z.from) !== 0;
    return o || a
}
var bi = {
    x: 0,
    y: 0,
    z: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0,
    scale: 1,
    scaleX: 1,
    scaleY: 1,
    scaleZ: 1,
    skew: 0,
    skewX: 0,
    skewY: 0,
    originX: .5,
    originY: .5,
    originZ: 0,
    opacity: 1
}
  , rA = class {
    constructor() {
        R(this, "warning", ()=>{
            cs("The Navigator API is only available inside of Framer: https://www.framer.com/")
        }
        ),
        R(this, "goBack", ()=>this.warning()),
        R(this, "instant", ()=>this.warning()),
        R(this, "fade", ()=>this.warning()),
        R(this, "push", ()=>this.warning()),
        R(this, "modal", ()=>this.warning()),
        R(this, "overlay", ()=>this.warning()),
        R(this, "flip", ()=>this.warning()),
        R(this, "customTransition", ()=>this.warning()),
        R(this, "magicMotion", ()=>this.warning())
    }
}
  , iA = new rA
  , Hw = Se(iA)
  , Ye = {
    Fade: {
        exit: {
            opacity: 0
        },
        enter: {
            opacity: 0
        }
    },
    PushLeft: {
        exit: {
            x: "-30%"
        },
        enter: {
            x: "100%"
        }
    },
    PushRight: {
        exit: {
            x: "30%"
        },
        enter: {
            x: "-100%"
        }
    },
    PushUp: {
        exit: {
            y: "-30%"
        },
        enter: {
            y: "100%"
        }
    },
    PushDown: {
        exit: {
            y: "30%"
        },
        enter: {
            y: "-100%"
        }
    },
    Instant: {
        animation: {
            type: !1
        },
        enter: {
            opacity: 0
        }
    },
    Modal: {
        overCurrentContext: !0,
        goBackOnTapOutside: !0,
        position: {
            center: !0
        },
        enter: {
            opacity: 0,
            scale: 1.2
        }
    },
    OverlayLeft: {
        overCurrentContext: !0,
        goBackOnTapOutside: !0,
        position: {
            right: 0,
            top: 0,
            bottom: 0
        },
        enter: {
            x: "100%"
        }
    },
    OverlayRight: {
        overCurrentContext: !0,
        goBackOnTapOutside: !0,
        position: {
            left: 0,
            top: 0,
            bottom: 0
        },
        enter: {
            x: "-100%"
        }
    },
    OverlayUp: {
        overCurrentContext: !0,
        goBackOnTapOutside: !0,
        position: {
            bottom: 0,
            left: 0,
            right: 0
        },
        enter: {
            y: "100%"
        }
    },
    OverlayDown: {
        overCurrentContext: !0,
        goBackOnTapOutside: !0,
        position: {
            top: 0,
            left: 0,
            right: 0
        },
        enter: {
            y: "-100%"
        }
    },
    FlipLeft: {
        backfaceVisible: !1,
        exit: {
            rotateY: -180
        },
        enter: {
            rotateY: 180
        }
    },
    FlipRight: {
        backfaceVisible: !1,
        exit: {
            rotateY: 180
        },
        enter: {
            rotateY: -180
        }
    },
    FlipUp: {
        backfaceVisible: !1,
        exit: {
            rotateX: 180
        },
        enter: {
            rotateX: -180
        }
    },
    FlipDown: {
        backfaceVisible: !1,
        exit: {
            rotateX: -180
        },
        enter: {
            rotateX: 180
        }
    },
    MagicMotion: {
        withMagicMotion: !0
    }
};
function oA(e) {
    switch (e && e.appearsFrom ? e.appearsFrom : "right") {
    case "right":
        return Ye.PushLeft;
    case "left":
        return Ye.PushRight;
    case "bottom":
        return Ye.PushUp;
    case "top":
        return Ye.PushDown
    }
}
function aA(e) {
    switch (e && e.appearsFrom ? e.appearsFrom : "bottom") {
    case "right":
        return Ye.OverlayLeft;
    case "left":
        return Ye.OverlayRight;
    case "bottom":
        return Ye.OverlayUp;
    case "top":
        return Ye.OverlayDown
    }
}
function sA(e) {
    switch (e && e.appearsFrom ? e.appearsFrom : "bottom") {
    case "right":
        return Ye.FlipLeft;
    case "left":
        return Ye.FlipRight;
    case "bottom":
        return Ye.FlipUp;
    case "top":
        return Ye.FlipDown
    }
}
var lA = ()=>({
    current: -1,
    previous: -1,
    currentOverlay: -1,
    previousOverlay: -1,
    visualIndex: 0,
    overlayItemId: 0,
    historyItemId: 0,
    history: [],
    overlayStack: [],
    containers: {},
    containerIndex: {},
    containerVisualIndex: {},
    containerIsRemoved: {},
    transitionForContainer: {},
    previousTransition: null
});
function tS(e, t) {
    switch (t.type) {
    case "addOverlay":
        return uA(e, t.transition, t.component);
    case "removeOverlay":
        return fA(e);
    case "add":
        return Nw(e, t.key, t.transition, t.component);
    case "remove":
        return $w(e);
    case "update":
        return cA(e, t.key, t.component);
    case "back":
        return dA(e);
    case "forward":
        return hA(e);
    default:
        return
    }
}
function cA(e, t, n) {
    return {
        ...e,
        containers: {
            ...e.containers,
            [t]: n
        }
    }
}
function uA(e, t, n) {
    let r = e.overlayStack[e.currentOverlay];
    if (r && r.component === n)
        return;
    let i = e.overlayItemId + 1
      , o = [...e.overlayStack, {
        key: `stack-${i}`,
        component: n,
        transition: t
    }];
    return {
        ...e,
        overlayStack: o,
        overlayItemId: i,
        currentOverlay: Math.max(0, Math.min(e.currentOverlay + 1, o.length - 1)),
        previousOverlay: e.currentOverlay
    }
}
function fA(e) {
    return {
        ...e,
        overlayStack: [],
        currentOverlay: -1,
        previousOverlay: e.currentOverlay
    }
}
function Nw(e, t, n, r) {
    e.containers[t] || (e.containers[t] = r),
    e.history = e.history.slice(0, e.current + 1),
    e.visualIndex = Math.max(e.history.length, 0);
    let i = e.history[e.history.length - 1]
      , o = i && i.key === t;
    if (e.overlayStack = [],
    o && e.currentOverlay > -1)
        return {
            ...e,
            currentOverlay: -1,
            previousOverlay: e.currentOverlay
        };
    if (o)
        return;
    let a = e.containerVisualIndex[t]
      , s = e.containerIsRemoved[t]
      , l = i?.key && n.withMagicMotion ? gA(t, a, s, e.history) : !0;
    e.history.push({
        key: t,
        transition: n,
        visualIndex: l ? Math.max(e.visualIndex, 0) : e.containerVisualIndex[t]
    });
    let c = e.current + 1
      , u = e.current;
    for (let g in e.containerIndex)
        e.containerIndex[g] === c && (e.containerIndex[g] = vA(g, e.history));
    e.containerIndex[t] = c;
    let {containerVisualIndex: f, containerIsRemoved: d} = pA(e, t, l)
      , h = jw(c, u, e.history, e.containerIndex, e.transitionForContainer);
    return {
        ...e,
        current: c,
        previous: u,
        containerVisualIndex: f,
        containerIsRemoved: d,
        transitionForContainer: h,
        previousTransition: null,
        currentOverlay: -1,
        historyItemId: e.historyItemId + 1,
        previousOverlay: e.currentOverlay
    }
}
function dA(e) {
    let t = {
        ...e.containers
    }
      , n = $w(e);
    if (n)
        return n.containers = t,
        n
}
function hA(e) {
    let t = e.history[e.current + 1];
    if (!t)
        return;
    let {key: n, transition: r, component: i} = t
      , o = [...e.history]
      , a = Nw(e, n, r, i);
    if (a)
        return a.history = o,
        a
}
function $w(e) {
    let t = [...e.history.slice(0, e.current + 1)];
    if (t.length === 1)
        return;
    let n = t.pop();
    if (!n)
        return;
    let r = t[t.length - 1];
    le(r, "The navigation history must have at least one component"),
    e.containerIndex[r.key] = t.length - 1,
    t.every(d=>d.key !== n.key) && delete e.containers[n.key];
    let o = e.current - 1
      , a = e.current
      , {containerIsRemoved: s, containerVisualIndex: l, previousTransition: c, visualIndex: u} = mA(e, r, n)
      , f = jw(o, a, e.history, e.containerIndex, e.transitionForContainer);
    return {
        ...e,
        current: o,
        previous: a,
        containerIsRemoved: s,
        containerVisualIndex: l,
        previousTransition: c,
        visualIndex: u,
        transitionForContainer: f
    }
}
function pA(e, t, n) {
    let r = {
        containerVisualIndex: {
            ...e.containerVisualIndex
        },
        containerIsRemoved: {
            ...e.containerIsRemoved
        }
    };
    if (n)
        r.containerVisualIndex[t] = e.history.length - 1,
        r.containerIsRemoved[t] = !1;
    else {
        let i = e.containerVisualIndex[t];
        for (let[o,a] of Object.entries(e.containerVisualIndex))
            i !== void 0 && a > i && (r.containerIsRemoved[o] = !0)
    }
    return r
}
function mA(e, t, n) {
    let r = [t.key, n.key]
      , i = e.history[e.history.length - 2]
      , o = e.previousTransition === null ? null : {
        ...e.previousTransition
    }
      , a = {
        containerIsRemoved: {
            ...e.containerIsRemoved
        },
        containerVisualIndex: {
            ...e.containerVisualIndex
        },
        previousTransition: o,
        visualIndex: e.visualIndex
    };
    i && r.push(i.key);
    let s = e.containerVisualIndex[t.key]
      , l = e.containerVisualIndex[n.key]
      , c = s !== void 0 && l !== void 0 && s <= l || t.visualIndex !== void 0 && t.visualIndex < e.history.length - 1
      , u = t.visualIndex;
    return c ? (a.containerIsRemoved[n.key] = !0,
    a.containerVisualIndex[t.key] = u !== void 0 ? u : e.history.length - 1) : (a.visualIndex = e.visualIndex + 1,
    a.containerVisualIndex[t.key] = e.visualIndex + 1),
    n.transition.withMagicMotion && (a.previousTransition = n.transition || null),
    e.containerIsRemoved[t.key] = !1,
    a
}
function vA(e, t) {
    var n;
    for (let r = t.length; r > t.length; r--)
        if (((n = t[r]) == null ? void 0 : n.key) === e)
            return r;
    return -1
}
function jw(e, t, n, r, i) {
    let o = {
        ...i
    };
    for (let[a,s] of Object.entries(r)) {
        let l = yA(s, {
            current: e,
            previous: t,
            history: n
        });
        l && (o[a] = l)
    }
    return o
}
function gA(e, t, n, r) {
    return n || t === void 0 ? !0 : t === 0 ? !1 : r.slice(t, r.length).findIndex(a=>a.key === e) > -1 ? !0 : !(r.slice(0, t - 1).findIndex(a=>a.key === e) > -1)
}
function yA(e, t) {
    let {current: n, previous: r, history: i} = t;
    if (!(e !== n && e !== r)) {
        if (e === n && n > r) {
            let o = i[e];
            return jc("enter", o?.transition.enter, o?.transition.animation)
        }
        if (e === r && n > r) {
            let o = i[e + 1];
            return jc("exit", o?.transition.exit, o?.transition.animation)
        }
        if (e === n && n < r) {
            let o = i[e + 1];
            return jc("enter", o?.transition.exit, o?.transition.animation)
        }
        if (e === r && n < r) {
            let o = i[e];
            return jc("exit", o?.transition.enter, o?.transition.animation)
        }
    }
}
var bA = Ti(bi);
function jc(e, t, n) {
    let r = {}
      , i = {};
    return bA.forEach(o=>{
        r[o] = bi[o],
        i[o] = {
            ...n,
            from: bi[o]
        }
    }
    ),
    t && Object.keys(t).forEach(o=>{
        if (t[o] === void 0)
            return;
        let a = t[o]
          , s = typeof t[o] == "string" ? `${ge(bi)[o]}%` : ge(bi)[o];
        ge(r)[o] = e === "enter" ? s : a,
        i[o] = {
            ...n,
            from: e === "enter" ? a : s,
            velocity: 0
        }
    }
    ),
    {
        ...r,
        transition: {
            ...i
        }
    }
}
var $N = Hw.Consumer
  , Ww = b.createContext(void 0)
  , jN = Ww.Provider
  , Uw = b.createContext(void 0)
  , sm = class extends xe {
    constructor(e) {
        var t;
        super(e),
        R(this, "lastEventTimeStamp", null),
        R(this, "state", lA()),
        R(this, "navigationAction", s=>{
            if (!this.props.enabled && this.state.history.length > 0)
                return;
            let l = tS(this.state, s);
            if (!l)
                return;
            let {skipLayoutAnimation: c} = this.props
              , u = l.history[l.current]
              , f = s.type === "add" && s.transition.withMagicMotion || s.type === "forward" && u?.transition.withMagicMotion || s.type === "remove" && !!l.previousTransition
              , d = ()=>{
                var h;
                this.setState(l),
                u?.key && ((h = this.context) == null || h.call(this, u.key))
            }
            ;
            c && !f ? c(d) : d()
        }
        ),
        R(this, "goBack", ()=>{
            var s;
            if (!this.isSameEventTransition())
                return this.lastEventTimeStamp = ((s = globalThis.event) == null ? void 0 : s.timeStamp) || null,
                this.state.currentOverlay !== -1 ? this.navigationAction({
                    type: "removeOverlay"
                }) : this.navigationAction({
                    type: "remove"
                })
        }
        );
        let n = this.props.children;
        if (!n || !os(n) || !is(n))
            return;
        let r = {
            ...Ye.Instant
        }
          , o = {
            type: "add",
            key: ((t = n.key) == null ? void 0 : t.toString()) || `stack-${this.state.historyItemId + 1}`,
            transition: r,
            component: n
        }
          , a = tS(this.state, o);
        a && (this.state = a)
    }
    componentDidMount() {
        var e;
        let t = this.state.history[this.state.current];
        t && ((e = this.context) == null || e.call(this, t.key))
    }
    UNSAFE_componentWillReceiveProps(e) {
        var t;
        let n = e.children;
        if (!os(n) || !is(n))
            return;
        let r = (t = n.key) == null ? void 0 : t.toString();
        r && (this.state.history.length === 0 ? this.transition(n, Ye.Instant) : this.navigationAction({
            type: "update",
            key: r,
            component: n
        }))
    }
    componentWillUnmount() {
        var e, t;
        (t = (e = this.props).resetProjection) == null || t.call(e)
    }
    getStackState(e) {
        let {current: t, previous: n, currentOverlay: r, previousOverlay: i} = this.state;
        return e.overCurrentContext ? {
            current: r,
            previous: i,
            history: this.state.overlayStack
        } : {
            current: t,
            previous: n,
            history: this.state.history
        }
    }
    isSameEventTransition() {
        return globalThis.event ? this.lastEventTimeStamp === globalThis.event.timeStamp : !1
    }
    transition(e, t, n) {
        var r, i;
        if (this.isSameEventTransition() || (this.lastEventTimeStamp = ((r = globalThis.event) == null ? void 0 : r.timeStamp) || null,
        !e || !os(e) || !is(e)))
            return;
        let o = {
            ...t,
            ...n
        };
        if (!!o.overCurrentContext)
            return this.navigationAction({
                type: "addOverlay",
                transition: o,
                component: e
            });
        let s = ((i = e.key) == null ? void 0 : i.toString()) || `stack-${this.state.historyItemId + 1}`;
        this.navigationAction({
            type: "add",
            key: s,
            transition: o,
            component: e
        })
    }
    instant(e) {
        this.transition(e, Ye.Instant, void 0)
    }
    fade(e, t) {
        this.transition(e, Ye.Fade, t)
    }
    push(e, t) {
        this.transition(e, oA(t), t)
    }
    modal(e, t) {
        this.transition(e, Ye.Modal, t)
    }
    overlay(e, t) {
        this.transition(e, aA(t), t)
    }
    flip(e, t) {
        this.transition(e, sA(t), t)
    }
    magicMotion(e, t) {
        this.transition(e, Ye.MagicMotion, t)
    }
    customTransition(e, t) {
        this.transition(e, t)
    }
    render() {
        var e, t, n, r, i;
        let o = this.getStackState({
            overCurrentContext: !1
        })
          , a = this.getStackState({
            overCurrentContext: !0
        })
          , s = xA(a)
          , l = a.current > -1
          , c = this.state.history.length === 1
          , u = [];
        for (let[d,h] of Object.entries(this.state.containers)) {
            let g = this.state.containerIndex[d];
            le(g !== void 0, "Container's index must be registered");
            let y = this.state.containerVisualIndex[d];
            le(y !== void 0, "Container's visual index must be registered");
            let S = this.state.containerIsRemoved[d]
              , m = this.state.history[g]
              , p = this.state.transitionForContainer[d]
              , v = g === this.state.current
              , x = g === this.state.previous
              , C = v ? !1 : S
              , w = ((e = m?.transition) == null ? void 0 : e.withMagicMotion) || v && !!this.state.previousTransition;
            u.push(T(Sp, {
                id: d,
                index: y,
                isInitial: c,
                isCurrent: v,
                isPrevious: x,
                isOverlayed: l,
                visible: v || x,
                position: (t = m?.transition) == null ? void 0 : t.position,
                instant: rS(g, o),
                transitionProps: p,
                animation: nS(g, o),
                backfaceVisible: RA(g, o),
                exitAnimation: (n = m?.transition) == null ? void 0 : n.animation,
                exitBackfaceVisible: (r = m?.transition) == null ? void 0 : r.backfaceVisible,
                exitProps: (i = m?.transition) == null ? void 0 : i.enter,
                withMagicMotion: w,
                areMagicMotionLayersPresent: C ? !1 : void 0,
                children: T(_D, {
                    children: iS({
                        component: h,
                        transition: m?.transition
                    })
                })
            }, d))
        }
        let f = this.state.overlayStack.map((d,h)=>T(Sp, {
            isLayeredContainer: !0,
            isCurrent: h === this.state.currentOverlay,
            position: d.transition.position,
            initialProps: EA(h, a),
            transitionProps: PA(h, a),
            instant: rS(h, a, !0),
            animation: nS(h, a),
            exitProps: d.transition.enter,
            visible: IA(h, a),
            backdropColor: kA(d.transition),
            backfaceVisible: TA(h, a),
            onTapBackdrop: FA(d.transition, this.goBack),
            index: this.state.current + 1 + h,
            children: iS({
                component: d.component,
                transition: d.transition
            })
        }, d.key));
        return T(ss, {
            "data-framer-component-type": "NavigationRoot",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            position: "relative",
            style: {
                overflow: "hidden",
                backgroundColor: "unset",
                pointerEvents: void 0,
                ...this.props.style
            },
            children: T(Hw.Provider, {
                value: this,
                children: ae(Uw.Provider, {
                    value: c,
                    children: [T(Sp, {
                        isLayeredContainer: !0,
                        position: void 0,
                        initialProps: {},
                        instant: !1,
                        transitionProps: SA(s),
                        animation: wA(s),
                        backfaceVisible: CA(s),
                        visible: !0,
                        backdropColor: void 0,
                        onTapBackdrop: void 0,
                        index: 0,
                        children: T(kL, {
                            children: T(ID, {
                                children: T(Yf, {
                                    presenceAffectsLayout: !1,
                                    children: u
                                })
                            })
                        })
                    }), T(Yf, {
                        children: f
                    })]
                })
            })
        })
    }
}
;
R(sm, "defaultProps", {
    enabled: !0
});
R(sm, "contextType", Ww);
var Xw = {
    stiffness: 500,
    damping: 50,
    restDelta: 1,
    type: "spring"
};
function xA(e) {
    let t, n;
    return e.current !== -1 ? t = e.history[e.current] : n = e.history[e.previous],
    {
        currentOverlayItem: t,
        previousOverlayItem: n
    }
}
function SA({currentOverlayItem: e}) {
    return e && e.transition.exit
}
function wA({currentOverlayItem: e, previousOverlayItem: t}) {
    return e && e.transition.animation ? e.transition.animation : t && t.transition.animation ? t.transition.animation : Xw
}
function CA({currentOverlayItem: e, previousOverlayItem: t}) {
    return e ? e.transition.backfaceVisible : t && t.transition.backfaceVisible
}
function kA(e) {
    if (e.backdropColor)
        return e.backdropColor;
    if (e.overCurrentContext)
        return "rgba(4,4,15,.4)"
}
function TA(e, t) {
    let {current: n, history: r} = t;
    if (e === n) {
        let i = r[e];
        return i && i.transition ? i.transition.backfaceVisible : !0
    } else if (e < n) {
        let i = r[e + 1];
        return i && i.transition ? i.transition.backfaceVisible : !0
    } else {
        let i = r[e];
        return i && i.transition ? i.transition.backfaceVisible : !0
    }
}
function EA(e, t) {
    let n = t.history[e];
    if (n)
        return n.transition.enter
}
function RA(e, t) {
    var n, r, i, o;
    let {current: a, previous: s, history: l} = t;
    return e === s && a > s || e === a && a < s ? (r = (n = l[e + 1]) == null ? void 0 : n.transition) == null ? void 0 : r.backfaceVisible : (o = (i = l[e]) == null ? void 0 : i.transition) == null ? void 0 : o.backfaceVisible
}
function PA(e, t) {
    let {current: n, history: r} = t;
    if (e !== n)
        if (e < n) {
            let i = r[e + 1];
            if (i && i.transition)
                return i.transition.exit
        } else {
            let i = r[e];
            if (i && i.transition)
                return i.transition.enter
        }
}
function nS(e, t) {
    let {current: n, previous: r, history: i} = t
      , o = r > n ? r : n;
    if (e < o) {
        let a = i[e + 1];
        if (a && a.transition.animation)
            return a.transition.animation
    } else if (e !== o) {
        let a = i[e];
        if (a && a.transition.animation)
            return a.transition.animation
    } else {
        let a = i[e];
        if (a?.transition.animation)
            return a.transition.animation
    }
    return Xw
}
function rS(e, t, n) {
    let {current: r, previous: i, history: o} = t;
    return !!(n && o.length > 1 || e !== i && e !== r || r === i)
}
function IA(e, t) {
    let {current: n, previous: r} = t;
    return e > n && e > r ? !1 : e === n
}
function iS(e) {
    return b.Children.map(e.component, n=>{
        var r;
        if (!os(n) || !is(n) || !n.props)
            return n;
        let i = {
            style: n.props.style ?? {}
        }
          , o = (r = e?.transition) == null ? void 0 : r.position
          , a = !o || o.left !== void 0 && o.right !== void 0
          , s = !o || o.top !== void 0 && o.bottom !== void 0
          , l = "style"in n.props ? Be(n.props.style) : !0;
        return a && ("width"in n.props && (i.width = "100%"),
        l && (i.style.width = "100%")),
        s && ("height"in n.props && (i.height = "100%"),
        l && (i.style.height = "100%")),
        b.cloneElement(n, i)
    }
    )
}
function FA(e, t) {
    if (e.goBackOnTapOutside !== !1)
        return t
}
function _A() {
    return b.useInsertionEffect(()=>{
        Ts()
    }
    , []),
    null
}
function LA(e) {
    let t = Uy()
      , n = qf();
    return ae(sm, {
        ...e,
        resetProjection: t,
        skipLayoutAnimation: n,
        children: [e.children, T(_A, {})]
    })
}
var WN = Gt(cu(), 1);
var YN = Gt(jp(), 1);
function Yw(e) {
    let {paddingPerSide: t, paddingTop: n, paddingBottom: r, paddingLeft: i, paddingRight: o} = e;
    return t !== !1 && (n !== void 0 || r !== void 0 || i !== void 0 || o !== void 0)
}
function MA(e) {
    let {padding: t=0, paddingTop: n, paddingBottom: r, paddingLeft: i, paddingRight: o} = e;
    return Yw(e) ? {
        top: n !== void 0 ? n : t,
        bottom: r !== void 0 ? r : t,
        left: i !== void 0 ? i : t,
        right: o !== void 0 ? o : t
    } : {
        top: t,
        bottom: t,
        left: t,
        right: t
    }
}
function OA({top: e, left: t, bottom: n, right: r}) {
    return e === r && r === n && n === t ? `${e}px` : `${e}px ${r}px ${n}px ${t}px`
}
function oS(e, t) {
    e && (e.style.display = "none",
    e.offsetHeight,
    e.style.display = t)
}
var DA = !!(pw() && iO() < 15.4);
function AA(e, t, n) {
    if (!DA)
        return;
    let r = b.useRef(!0)
      , i = b.useRef(!1)
      , o = b.useRef(e);
    return i.current = !1,
    b.useLayoutEffect(()=>{
        if (o.current = e,
        r.current) {
            r.current = !1;
            return
        }
        i.current || (oS(t.current, n),
        i.current = !0)
    }
    , [e, t, o, n]),
    b.useCallback(()=>{
        o.current !== e && (i.current || oS(t.current, n),
        i.current = !0)
    }
    , [e, t])
}
var JN = (()=>{
    let e = b.forwardRef(function(n, r) {
        let {as: i="div", direction: o="vertical", distribution: a="start", alignment: s="center", gap: l=10, wrap: c=!1, useFlexboxGap: u=!0, children: f, style: d, className: h, willChangeTransform: g, __fromCodeComponentNode: y, parentSize: S, __contentWrapperStyle: m, ...p} = n
          , v = !!(u || c)
          , x = b.useRef(null)
          , C = AA(l, x, "flex")
          , w = zA(o)
          , k = NA(w)
          , E = sS(a)
          , I = Yw(p) || p.padding ? OA(MA(p)) : void 0
          , P = {
            ...d
        };
        Ro.applyWillChange({
            willChangeTransform: g
        }, P, !0),
        y && !_o(im(p)) && (p.width = "100%",
        p.height = "100%",
        p._constraints = {
            enabled: !0
        });
        let z = Lo(n)
          , {children: L, props: ee} = bw(p, f)
          , H = p.widthType ?? (p.width === "auto" ? 2 : 0)
          , te = p.heightType ?? (p.height === "auto" ? 2 : 0)
          , G = VA(L, o, H, te)
          , V = BA(G, l, w, E, v, c)
          , W = lw(V, S ?? 1)
          , A = {
            "data-framer-component-type": "Stack"
        }
          , q = p.__fromCanvasComponent;
        q && (A["data-framer-generated"] = !0);
        let B = sS(s)
          , Y = {
            display: "flex",
            flexDirection: w,
            flexWrap: c ? "wrap" : "nowrap",
            justifyContent: E,
            alignItems: B,
            alignContent: B,
            padding: I,
            ...m
        }
          , K = Kw(l, E, c);
        if (v && K) {
            let Z = Gw(E);
            (Z || o !== "horizontal") && (ge(Y)["--stack-native-column-gap"] = `${l}px`),
            (Z || o !== "vertical") && (ge(Y)["--stack-native-row-gap"] = `${l}px`)
        }
        return Y.width === void 0 && (Y.width = H === 2 ? "min-content" : "100%"),
        Y.height === void 0 && (Y.height = te === 2 ? "min-content" : "100%"),
        q && (d?.width && (Y.width = d?.width),
        d?.height && (Y.height = d?.height)),
        T(ss, {
            as: i,
            background: q ? void 0 : "none",
            ...ee,
            layoutId: z,
            ref: $A(r, x),
            ...A,
            style: P,
            className: h,
            layoutScroll: !0,
            children: T(Rt.div, {
                "data-framer-stack-content-wrapper": !0,
                "data-framer-stack-direction-reverse": k,
                "data-framer-stack-gap-enabled": K,
                style: Y,
                onBeforeLayoutMeasure: C,
                children: W
            })
        })
    });
    return e.defaultProps = {
        distribution: "start"
    },
    e.displayName = "Stack",
    qM(e, {
        direction: {
            type: "segmentedenum",
            options: ["horizontal", "vertical"],
            title: "Direction",
            defaultValue: "vertical"
        },
        distribution: {
            type: "enum",
            options: ["start", "center", "end", "space-between", "space-around", "space-evenly"],
            optionTitles: ["Start", "Center", "End", "Space Between", "Space Around", "Space Evenly"],
            title: "Distribute",
            defaultValue: "space-around"
        },
        alignment: {
            type: "segmentedenum",
            options: ["start", "center", "end"],
            title: "Align",
            defaultValue: "center"
        },
        gap: {
            type: "number",
            min: 0,
            title: "Gap",
            hidden: t=>t.distribution !== void 0 && ["space-between", "space-around", "space-evenly"].includes(t.distribution),
            defaultValue: 10
        },
        padding: {
            type: "fusednumber",
            toggleKey: "paddingPerSide",
            toggleTitles: ["Padding", "Padding per side"],
            valueKeys: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"],
            valueLabels: ["t", "r", "b", "l"],
            min: 0,
            title: "Padding",
            defaultValue: 0
        }
    }),
    e
}
)();
function aS(e) {
    return typeof e == "string" && e.endsWith("fr")
}
function Wc(e) {
    let t = parseFloat(e);
    return U(t) ? t : 0
}
function VA(e, t, n, r) {
    return b.Children.map(e, i=>{
        if (!os(i) || !is(i))
            return;
        let o = t === "vertical"
          , a = {}
          , s = !1
          , {style: l, size: c} = i.props
          , {width: u, height: f} = i.props;
        c !== void 0 && (u === void 0 && (u = c),
        f === void 0 && (f = c));
        let d = u
          , h = f;
        if (aS(u) && (s = !0,
        s = !0,
        o ? n === 2 ? (a.alignSelf = "stretch",
        d = "auto") : d = `${Wc(u) * 100}%` : (d = 1,
        a.flexGrow = Wc(u),
        a.flexBasis = 0),
        a.width = d),
        aS(f) && (s = !0,
        o ? (h = 1,
        a.flexGrow = Wc(f),
        a.flexBasis = 0) : r === 2 ? (a.alignSelf = "stretch",
        h = "auto") : h = `${Wc(f) * 100}%`,
        a.height = h),
        !s)
            return i;
        let g = {
            ...l,
            ...a
        };
        return b.cloneElement(i, {
            width: d,
            height: h,
            style: g
        })
    }
    )
}
function Gw(e) {
    return e ? !["space-between", "space-around", "space-evenly", "stretch"].includes(e) : !1
}
function Kw(e, t, n) {
    return !(!e || !n && !Gw(t))
}
function BA(e, t, n, r, i, o) {
    let a = {
        display: "contents"
    }
      , s = Kw(t, r, o);
    if (s) {
        let l = HA(n);
        ge(a)["--stack-gap-x"] = `${l ? 0 : t}px`,
        ge(a)["--stack-gap-y"] = `${l ? t : 0}px`
    }
    return T("div", {
        "data-framer-legacy-stack-gap-enabled": s,
        "data-framer-stack-flexbox-gap": i,
        style: a,
        children: e
    })
}
function zA(e) {
    switch (e) {
    case "vertical":
        return "column";
    case "horizontal":
        return "row";
    default:
        return e
    }
}
function HA(e) {
    return e === "column" || e === "column-reverse"
}
function NA(e) {
    switch (e) {
    case "column-reverse":
    case "row-reverse":
        return !0;
    default:
        return !1
    }
}
function sS(e) {
    switch (e) {
    case "start":
        return "flex-start";
    case "end":
        return "flex-end";
    default:
        return e
    }
}
function $A(e, t) {
    return n=>{
        t.current = n,
        typeof e == "function" ? e(n) : e && (e.current = n)
    }
}
function lm(...e) {
    return e.filter(Boolean).join(" ")
}
var jA = {};
Object.freeze(jA);
var p6 = 4 / 60 * 1e3;
var WA = (()=>{
    function e(t={}) {
        let n = xp(t, !1, !1);
        return e.addData(n),
        n
    }
    return e._stores = [],
    e.addData = t=>{
        e._stores.push(t)
    }
    ,
    e.reset = ()=>{
        e._stores.forEach(t=>xp.resetObject(t))
    }
    ,
    e.addObserver = (t,n)=>xp.addObserver(t, n),
    e
}
)()
  , wp = WA;
var UA = {
    update: 0
}
  , XA = b.createContext({
    update: NaN
});
var YA = class extends xe {
    constructor() {
        super(...arguments),
        R(this, "observers", []),
        R(this, "state", UA),
        R(this, "taskAdded", !1),
        R(this, "frameTask", ()=>{
            this.setState({
                update: this.state.update + 1
            }),
            this.taskAdded = !1
        }
        ),
        R(this, "observer", ()=>{
            this.taskAdded || (this.taskAdded = !0,
            ow.addFrameTask(this.frameTask))
        }
        )
    }
    componentWillUnmount() {
        this.observers.map(e=>e()),
        wp.reset()
    }
    render() {
        let {children: e} = this.props;
        return this.observers.map(t=>t()),
        this.observers = [],
        wp._stores.forEach(t=>{
            let n = wp.addObserver(t, this.observer);
            this.observers.push(n)
        }
        ),
        T(XA.Provider, {
            value: {
                ...this.state
            },
            children: e
        })
    }
}
  , S6 = Gt(cu(), 1);
var qw = "__framer__"
  , GA = qw.length;
function KA(e) {
    if (e.startsWith(qw))
        return e.substr(GA)
}
var Vn = ["opacity", "x", "y", "scale", "rotate", "rotateX", "rotateY", "skewX", "skewY", "transformPerspective"]
  , iu = e=>({
    x: we(e?.x ?? 0),
    y: we(e?.y ?? 0),
    opacity: we(e?.opacity ?? 1),
    scale: we(e?.scale ?? 1),
    rotate: we(e?.rotate ?? 0),
    rotateX: we(e?.rotateX ?? 0),
    rotateY: we(e?.rotateY ?? 0),
    skewX: we(e?.skewX ?? 0),
    skewY: we(e?.skewY ?? 0),
    transformPerspective: we(e?.transformPerspective ?? 0)
})
  , Ve = {
    x: 0,
    y: 0,
    scale: 1,
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    skewX: 0,
    skewY: 0,
    transformPerspective: 0
};
function Qw(e) {
    return e in Ve
}
function Zw(e, t) {
    let n = Hn(()=>({
        values: iu(t ? e : void 0)
    }));
    return b.useEffect(()=>{
        if (!t)
            for (let r of Vn) {
                let i = Ve[r];
                xt(i) || n.values[r].set(i)
            }
    }
    , [n, t]),
    n
}
var qA = new Set(["loopEffectEnabled", "loopTransition", "loop", "loopRepeatType", "loopRepeatDelay"])
  , QA = ()=>{
    let e = O();
    return $(()=>()=>{
        clearTimeout(e.current)
    }
    , []),
    async t=>new Promise(n=>{
        e.current = setTimeout(()=>{
            n(!0)
        }
        , t * 1e3)
    }
    )
}
;
function ZA({loopEffectEnabled: e, loopRepeatDelay: t, loopTransition: n, loopRepeatType: r, loop: i}) {
    let o = ri()
      , a = Hn(()=>({
        values: iu()
    }))
      , s = b.useRef(!1)
      , l = QA()
      , c = async()=>{
        if (!i)
            return;
        let d = n || void 0
          , h = s.current && r === "mirror"
          , g = h ? Ve : i
          , y = h ? i : Ve;
        return s.current = !s.current,
        Promise.all(Vn.map(S=>{
            if (!(o && S !== "opacity"))
                return a.values[S].set(y[S] ?? Ve[S]),
                new Promise(m=>{
                    let p = {
                        ...d,
                        onComplete: ()=>m()
                    };
                    $i(a.values[S], g[S] ?? y[S], p)
                }
                )
        }
        ))
    }
      , u = async()=>{
        e && (await c(),
        await l(t ?? 0),
        await u())
    }
      , f = ue(()=>{
        Vn.forEach(d=>{
            a.values[d].stop()
        }
        ),
        Vn.forEach(d=>{
            a.values[d].set(Ve[d])
        }
        ),
        s.current = !1
    }
    , [a]);
    return b.useEffect(()=>(e && i ? u() : f(),
    ()=>f()), [e]),
    a
}
function JA(e, t, n, r, i) {
    let o = n / 100 - 1
      , a = i ? (t - r) * o : 0
      , s = -e * o;
    return a + s
}
var eV = new Set(["speed", "adjustPosition", "offset", "parallaxTransformEnabled"]);
function tV(e, t, n) {
    let {speed: r=100, offset: i=0, adjustPosition: o=!1, parallaxTransformEnabled: a} = e
      , s = b.useRef(null)
      , l = ri()
      , c = b.useCallback(g=>s.current === null || r === 100 ? 0 : JA(g, s.current, r, i, o), [s, r, i, o]);
    b.useLayoutEffect(()=>{
        J.read(()=>{
            var g, y;
            s.current = ((y = (g = t.current) == null ? void 0 : g.getBoundingClientRect()) == null ? void 0 : y.top) ?? 0
        }
        ),
        J.update(()=>{
            f.set(c(u.get())),
            o && d.set(n ?? "initial")
        }
        )
    }
    , [t, s, o]);
    let {scrollY: u} = My()
      , f = ht(u, c)
      , d = Tn(o && s.current === null ? "hidden" : n)
      , h = Tn(0);
    return {
        values: {
            y: l || !a ? h : f
        },
        style: a ? {
            visibility: d
        } : void 0
    }
}
function nV(e) {
    if (!(ne(e) || !Be(e)))
        return e?.transition
}
async function Cp(e, t, n, r, i, o) {
    let a = nV(e);
    return Promise.all(Vn.map(s=>new Promise(l=>{
        if (n && s !== "opacity")
            return l();
        let c = t.values[s];
        c.stop();
        let u = Be(e) ? e?.[s] ?? Ve[s] : Ve[s];
        if (Fe(u) && (u = u.get()),
        !fe(u))
            return l();
        let f = Xn.get(r.current);
        f && f.setBaseTarget(s, u);
        let d = ne(i) && !c?.hasAnimated && jt.HandoffAppearAnimations ? {
            elapsed: jt.HandoffAppearAnimations(i, s, c, J)
        } : void 0;
        o ? c.set(u) : $i(c, u, {
            ...a,
            velocity: 0,
            elapsed: 0,
            ...d,
            onComplete: ()=>l()
        })
    }
    )))
}
var rV = new Set(["presenceInitial", "presenceAnimate", "presenceExit"]);
function iV({initial: e, animate: t, exit: n, presenceInitial: r, presenceAnimate: i, presenceExit: o}, a, s, l, c) {
    let u = r ?? e
      , f = i ?? t
      , d = o ?? n
      , h = O(!1)
      , g = O(f)
      , [y,S] = Bf()
      , m = O(!1)
      , p = Hn(()=>{
        var x;
        let C = u ?? l;
        if (!Be(C))
            return {
                values: iu()
            };
        let w = {};
        for (let k in C) {
            let E = Be(C) ? (x = ge(C)) == null ? void 0 : x[k] : void 0;
            fe(E) && (w[k] = E)
        }
        return {
            values: iu(w)
        }
    }
    );
    lr(()=>{
        if (h.current && f)
            return;
        let x = Xn.get(a.current);
        if (x) {
            h.current = !0;
            for (let C in p.values) {
                if (!Qw(C))
                    continue;
                let w = l?.[C];
                x.setBaseTarget(C, fe(w) ? w : Ve[C])
            }
        }
    }
    , [f]);
    let v = ri();
    return lr(()=>{
        if (!s) {
            S?.();
            return
        }
        if (y !== m.current)
            m.current = y,
            y ? u && f && Cp(f, p, v, a, c) : d ? Cp(d, p, v, a, c).then(()=>S()) : S();
        else {
            if (!!Me(f, g.current) || !f)
                return;
            g.current = f,
            Cp(f, p, v, a, c, !0)
        }
    }
    ),
    p
}
function oV(e, t) {
    let n = 0
      , r = e;
    for (; r && r !== t && r instanceof HTMLElement; )
        n += r.offsetTop,
        r = r.offsetParent;
    return n
}
var aV = 1;
function Jw(e, t=0, n) {
    var r;
    let i = []
      , o = [];
    for (let a = e.length; a >= 0; a--) {
        let {ref: s, offset: l} = e[a] ?? {};
        if (!s || !s.current)
            continue;
        let u = oV(s.current, document.documentElement) - aV - (l ?? 0) - t
          , f = ((r = s.current) == null ? void 0 : r.clientHeight) ?? 0
          , d = i[i.length - 1]
          , h = Math.max(u + f, 0);
        i.push(u),
        o.unshift(Math.max(u, 0), d === void 0 ? h : Math.min(h, Math.max(d - 1, 0))),
        n?.(a)
    }
    return o
}
function sV(e, t=0) {
    return e < t ? "up" : "down"
}
var lV = 4;
function cV(e, t, n={}) {
    let {direction: r, target: i} = e ?? {}
      , {repeat: o=!0, enabled: a=!0} = n;
    b.useEffect(()=>{
        if (!r || !a)
            return;
        let s, l = 0, c, u;
        return Ni(({y: f})=>{
            if (!o && u === i || f.current > f.scrollLength || f.current < 0)
                return;
            let d = sV(f.current, s);
            s = f.current;
            let h = d !== c;
            if (c = d,
            h)
                l = f.current;
            else {
                if (Math.abs(f.current - l) < lV)
                    return;
                let y = d === r ? i : void 0;
                y !== u && t(y),
                u = y
            }
        }
        )
    }
    , [r, o, i, a, t])
}
var uV = new Set(["threshold", "animateOnce", "opacity", "targetOpacity", "x", "y", "scale", "transition", "rotate", "rotateX", "rotateY", "perspective", "enter", "exit", "animate", "styleAppearEffectEnabled", "targets", "scrollDirection"])
  , fV = ["animate", "animate"]
  , lS = {
    inputRange: [],
    outputRange: []
};
function dV(e, t, n) {
    let r = Jw(e, t)
      , i = [...fV]
      , o = r[0];
    if (!fe(o))
        return lS;
    if (o > 1 && (r.unshift(0, o - 1),
    i.unshift("initial", "initial")),
    n) {
        let a = r.length - 1
          , s = r[a];
        if (!fe(s))
            return lS;
        r.push(s + 1),
        i.push("exit")
    }
    return {
        inputRange: r,
        outputRange: i
    }
}
function kp(e) {
    return {
        x: e?.x ?? Ve.x,
        y: e?.y ?? Ve.y,
        scale: e?.scale ?? Ve.scale,
        opacity: e?.opacity ?? Ve.opacity,
        transformPerspective: e?.transformPerspective ?? Ve.transformPerspective,
        rotate: e?.rotate ?? Ve.rotate,
        rotateX: e?.rotateX ?? Ve.rotateX,
        rotateY: e?.rotateY ?? Ve.rotateY,
        skewX: e?.skewX ?? Ve.skewX,
        skewY: e?.skewY ?? Ve.skewY,
        transition: e?.transition ?? void 0
    }
}
function hV({opacity: e, targetOpacity: t, perspective: n, enter: r, exit: i, animate: o, ...a}) {
    return b.useMemo(()=>({
        initial: r ?? kp({
            ...a,
            opacity: e ?? t ?? 1,
            transformPerspective: n
        }),
        animate: o ?? kp({
            opacity: t
        }),
        exit: i ?? kp()
    }), [o, a, r, i, e, t, n])
}
function pV(e, t) {
    let n = ri()
      , r = hV(e)
      , i = e.styleAppearEffectEnabled
      , o = Zw(i ? r.initial : r.animate, i)
      , a = b.useRef({
        isPlaying: !1,
        scheduledAppearState: void 0,
        lastAppearState: !e.styleAppearEffectEnabled
    })
      , s = b.useRef()
      , l = b.useCallback(async({transition: d, ...h},g)=>{
        let y = d ?? r.animate.transition ?? e.transition;
        await s.current,
        s.current = Promise.all(Vn.map(S=>{
            g && o.values[S].set(r.initial[S] ?? Ve[S]);
            let m = h[S] ?? Ve[S]
              , p = Xn.get(t.current);
            return p && typeof m != "object" && p.setBaseTarget(S, m),
            new Promise(v=>{
                if (n && S !== "opacity")
                    v();
                else {
                    let x = {
                        restDelta: S === "scale" ? .001 : void 0,
                        ...y,
                        onComplete: ()=>v()
                    };
                    $i(o.values[S], m, x)
                }
            }
            )
        }
        ))
    }
    , [])
      , c = e.animateOnce && a.current.lastAppearState === !0
      , u = !e.targets && e.styleAppearEffectEnabled && !e.scrollDirection && !c;
    VD(t, d=>{
        let {isPlaying: h, lastAppearState: g} = a.current;
        if (h) {
            a.current.scheduledAppearState = d;
            return
        }
        a.current.scheduledAppearState = void 0,
        a.current.lastAppearState = d,
        g !== d && l(d ? r.animate : r.exit, d)
    }
    , {
        enabled: u,
        animateOnce: !!e.animateOnce,
        threshold: {
            y: e.threshold
        }
    });
    let f = e.targets && i && !e.scrollDirection;
    return b.useEffect(()=>{
        if (!f)
            return;
        let d = {
            initial: !0
        }
          , h = "initial";
        return Ni(({y: g})=>{
            let {targets: y} = e;
            if (!y || !y[0] || y[0].ref && !y[0].ref.current)
                return;
            let {inputRange: S, outputRange: m} = dV(y, (e.threshold ?? 0) * g.containerLength, !!e.exit);
            if (S.length === 0 || S.length !== m.length)
                return;
            let p = oa(g.current, S, m);
            if (e.animateOnce && d[p] || (d[p] = !0,
            h === p))
                return;
            h = p;
            let v = ge(r)[p];
            v && l(v)
        }
        )
    }
    , [f]),
    cV(e.scrollDirection, d=>l(d ?? r.animate), {
        enabled: i,
        repeat: !e.animateOnce
    }),
    o
}
var mV = new Set(["transformViewportThreshold", "styleTransformEffectEnabled", "transformTargets", "spring", "transformTrigger"])
  , vV = (e,t)=>{
    var n;
    let r = (n = e?.[0]) == null ? void 0 : n.target;
    return t ? {
        opacity: r?.opacity ?? 1
    } : r
}
  , eC = ()=>({
    opacity: [],
    x: [],
    y: [],
    scale: [],
    rotate: [],
    rotateX: [],
    rotateY: [],
    skewX: [],
    skewY: [],
    transformPerspective: []
});
function gV(e, t) {
    let n = b.useRef({});
    b.useEffect(()=>{
        if (t !== void 0)
            for (let r of Ti(e)) {
                let i = e[r];
                i.attach((o,a)=>{
                    let s = n.current[r];
                    if (s && s.stop(),
                    n.current[r] = ti({
                        keyframes: [i.get(), o],
                        velocity: i.getVelocity(),
                        ...t,
                        restDelta: .001,
                        onUpdate: a
                    }),
                    !Ie.isProcessing) {
                        let l = performance.now() - Ie.timestamp;
                        l < 40 && (n.current[r].time = l / 1e3)
                    }
                    return i.get()
                }
                )
            }
    }
    , [JSON.stringify(t)])
}
function yV(e, t) {
    let n = eC();
    return {
        inputRange: Jw(e, t, i=>{
            var o, a, s;
            let l = (o = e[i - 1]) == null ? void 0 : o.target
              , c = (a = e[i]) == null ? void 0 : a.target;
            for (let u of Vn)
                (s = n[u]) == null || s.unshift(l?.[u] ?? 0, c?.[u] ?? 0)
        }
        ),
        effectKeyOutputRange: n
    }
}
function bV(e) {
    var t;
    let n = eC();
    for (let {target: r} of e)
        for (let i of Vn)
            (t = n[i]) == null || t.push(r[i]);
    return n
}
var cS = [0, 1];
function xV({transformTrigger: e, styleTransformEffectEnabled: t, transformTargets: n, spring: r, transformViewportThreshold: i=0}, o) {
    let a = ri()
      , s = Zw(vV(n, a), t);
    return b.useLayoutEffect(()=>{
        if (!(!t || !n))
            if (e !== "onScrollTarget") {
                let l = bV(n);
                return Ni(({y: c})=>{
                    for (let u of Vn)
                        a && u !== "opacity" || cS.length === l[u].length && l[u][0] !== void 0 && s.values[u].set(oa(c.progress, cS, l[u]))
                }
                , e === "onInView" ? {
                    target: o.current ?? void 0,
                    offset: ["start end", "end end"]
                } : void 0)
            } else
                return Ni(({y: l})=>{
                    if (!n[0] || n[0].ref && !n[0].ref.current)
                        return;
                    let {inputRange: c, effectKeyOutputRange: u} = yV(n, i * l.containerLength);
                    if (c.length !== 0)
                        for (let f of Vn)
                            a && f !== "opacity" || c.length === u[f].length && u[f][0] !== void 0 && s.values[f].set(oa(l.current, c, u[f]))
                }
                )
    }
    , [a, e, o, i, t, s, n]),
    gV(s.values, r),
    s
}
var tC = {
    parallax: eV,
    styleAppear: uV,
    styleTransform: mV,
    loop: qA,
    presence: rV
}
  , SV = Ti(tC);
function uS(e, t, n) {
    return !(e in n) && t in n || n[e] === !0
}
function wV(e) {
    let t = {
        parallax: {},
        styleAppear: {},
        styleTransform: {},
        presence: {
            animate: e.animate,
            initial: e.initial,
            exit: e.exit
        },
        loop: {},
        forwardedProps: {}
    };
    for (let n in e) {
        let r = KA(n);
        if (r)
            for (let i of SV) {
                let o = tC[i];
                if (o?.has(r)) {
                    t[i][r] = ge(e)[n];
                    break
                }
            }
        else
            t.forwardedProps[n] = ge(e)[n]
    }
    return t.parallax.parallaxTransformEnabled = uS("parallaxTransformEnabled", "speed", t.parallax),
    t.styleAppear.styleAppearEffectEnabled = uS("styleAppearEffectEnabled", "animateOnce", t.styleAppear),
    t
}
var Br = e=>e.reduce((t,n)=>t += n, 0)
  , fS = e=>e.reduce((t,n)=>t = t * n, 1)
  , CV = "current";
function kV(e) {
    return Be(e) && CV in e
}
function TV(e, t) {
    if (!e || !Be(e))
        return t;
    for (let n in e) {
        let r = e[n];
        !Fe(r) || !Qw(n) || fe(r.get()) && t[n].push(r)
    }
}
function Za(e) {
    return ne(e) || Array.isArray(e)
}
var EV = e=>b.forwardRef((t,n)=>{
    if (t.__withFX)
        return T(e, {
            ...t,
            animate: void 0,
            initial: void 0,
            exit: void 0,
            ref: n
        });
    if (Oe.current() === "CANVAS") {
        let K = Za(t.animate) ? t.animate : void 0
          , Z = Za(t.initial) ? t.initial : void 0;
        return T(e, {
            ...t,
            animate: K,
            initial: Z,
            exit: void 0,
            ref: n
        })
    }
    let r = b.useRef(null)
      , i = n ?? r
      , {parallax: o={}, styleAppear: a={}, styleTransform: s={}, presence: l={}, loop: c={}, forwardedProps: u} = wV(t)
      , {__targetOpacity: f, __perspectiveFX: d, __smartComponentFX: h=!1} = t
      , g = Tn(f ?? 1)
      , {values: y} = iV(l, i, h, t.style, t[el])
      , {values: S, style: m} = tV(o, i)
      , {values: p} = xV(s, i)
      , {values: v} = pV(a, i)
      , {values: x} = ZA(c)
      , C = b.useMemo(()=>({
        scale: [v.scale, x.scale, y.scale, p.scale],
        opacity: [v.opacity, x.opacity, y.opacity, g, p.opacity],
        x: [v.x, x.x, y.x, p.x],
        y: [v.y, x.y, S.y, y.y, p.y],
        rotate: [v.rotate, x.rotate, y.rotate, p.rotate],
        rotateX: [v.rotateX, x.rotateX, y.rotateX, p.rotateX],
        rotateY: [v.rotateY, x.rotateY, y.rotateY, p.rotateY],
        skewX: [v.skewX, x.skewX, y.skewX, p.skewX],
        skewY: [v.skewY, x.skewY, y.skewY, p.skewY],
        transformPerspective: [p.transformPerspective, v.transformPerspective]
    }), [g, p, S, v, x, y]);
    TV(t.style, C);
    let w = ht(C.scale, fS)
      , k = ht(C.opacity, fS)
      , E = ht(C.x, Br)
      , I = ht(C.y, Br)
      , P = ht(C.rotate, Br)
      , z = ht(C.rotateX, Br)
      , L = ht(C.rotateY, Br)
      , ee = ht(C.skewX, Br)
      , H = ht(C.skewY, Br)
      , te = ht(C.transformPerspective, Br)
      , {drag: G, dragConstraints: V} = u;
    YO(G && kV(V) ? V : void 0);
    let W = {
        opacity: k,
        scale: w,
        x: E,
        y: I,
        rotate: P,
        rotateX: z,
        rotateY: L,
        skewX: ee,
        skewY: H
    };
    xt(d) && (W.transformPerspective = te);
    let A = Za(t.animate) ? t.animate : void 0
      , q = Za(t.initial) ? t.initial : void 0
      , B = Za(t.exit) ? t.exit : void 0
      , Y = h && !l.presenceInitial ? {
        initial: q,
        animate: A,
        exit: B
    } : {};
    return T(e, {
        ...u,
        ...Y,
        __withFX: !0,
        style: {
            ...t.style,
            ...m,
            ...W
        },
        values: y,
        ref: i
    })
}
);
var M6 = EV;
function cm(e) {
    let t = Hn(()=>RV(e));
    return t.useSetup(e),
    t.cloneAsElement
}
function RV(e) {
    let t = {
        forwardedRef: e,
        childRef: null,
        ref: null
    };
    t.ref = dS(t);
    let n = (a,s)=>{
        if (!t.forwardedRef && t.forwardedRef === a) {
            t.ref = s;
            return
        }
        let l = !1;
        t.childRef !== s && (t.childRef = s,
        l = !0),
        t.forwardedRef !== a && (t.forwardedRef = a,
        l = !0),
        l && (t.ref = dS(t))
    }
      , r = !1;
    function i(a, s) {
        if (r)
            throw new ReferenceError("useCloneChildrenWithPropsAndRef: You should not call cloneChildrenWithPropsAndRef more than once during the render cycle.");
        return r = !0,
        yn.count(a) > 1 && e && (t.forwardedRef = void 0,
        t.ref = t.childRef),
        yn.map(a, l=>{
            if (bn(l)) {
                let c = "ref"in l ? l.ref : void 0;
                n(t.forwardedRef, c);
                let u = t.ref !== c ? {
                    ...s,
                    ref: t.ref
                } : s;
                return an(l, u)
            }
            return l
        }
        )
    }
    let o = function(s, l) {
        return T(Ne, {
            children: i(s, l)
        })
    };
    return o.cloneAsArray = i,
    {
        useSetup: a=>{
            r = !1,
            n(a, t.childRef)
        }
        ,
        cloneAsElement: o
    }
}
function dS(e) {
    if (!e.forwardedRef)
        return e.childRef;
    let {forwardedRef: t, childRef: n} = e;
    return r=>{
        hS(n, r),
        hS(t, r)
    }
}
function hS(e, t) {
    fs(e) ? e(t) : PV(e) && (e.current = t)
}
function PV(e) {
    return Be(e) && "current"in e
}
var nC = b.createContext({});
function z6() {
    return b.useContext(nC)
}
var H6 = b.forwardRef(({width: e, children: t, ...n},r)=>{
    let i = b.useMemo(()=>({
        width: e
    }), [e])
      , o = cm(r);
    return T(nC.Provider, {
        value: i,
        children: o(t, n)
    })
}
)
  , IV = e=>b.forwardRef((t,n)=>{
    let r = Lo(t);
    return T(e, {
        layoutId: r,
        ...t,
        layoutIdKey: void 0,
        duplicatedFrom: void 0,
        ref: n
    })
}
)
  , FV = b.forwardRef(({children: e, layoutId: t, ...n},r)=>{
    let i = Hn(()=>t ? `${t}-container` : void 0);
    return T(Rt.div, {
        layoutId: i,
        ...n,
        ref: r,
        children: T(Mo.Provider, {
            value: !0,
            children: T(EL, {
                enabled: !1,
                children: T(Iy, {
                    id: t ?? "",
                    inherit: "id",
                    children: b.Children.map(e, o=>b.isValidElement(o) ? b.cloneElement(o, {
                        layoutId: t
                    }) : o)
                })
            })
        })
    })
}
)
  , U6 = IV(FV)
  , _V = b.createContext(void 0);
if (Nn())
    for (let e of document.querySelectorAll("style[data-framer-css-ssr]"))
        document.head.appendChild(e);
var LV = (()=>{
    var e;
    if (!Nn())
        return new Set;
    let t = (e = document.querySelector("style[data-framer-css-ssr-minified]")) == null ? void 0 : e.getAttribute("data-framer-components");
    return t ? new Set(t.split(" ")) : new Set
}
)()
  , rC = {
    "data-framer-css-ssr": !0
}
  , MV = (e,t,n)=>b.forwardRef((r,i)=>{
    let {sheet: o, cache: a} = b.useContext(_V) ?? {};
    if (!Nn()) {
        let s = Array.isArray(t) ? t.join(`
`) : t;
        return ae(Ne, {
            children: [T("style", {
                ...rC,
                "data-framer-component": n,
                dangerouslySetInnerHTML: {
                    __html: s
                }
            }), T(e, {
                ...r,
                ref: i
            })]
        })
    }
    return b.useInsertionEffect(()=>{
        if (n && LV.has(n))
            return;
        (Array.isArray(t) ? t : t.split(`
`)).forEach(l=>l && cw(l, o, a))
    }
    , []),
    T(e, {
        ...r,
        ref: i
    })
}
)
  , um = b.createContext({
    onRegisterCursors: ()=>()=>{}
    ,
    registerCursors: ()=>{}
})
  , ou = "framer-cursor-none"
  , Vp = "framer-pointer-events-none"
  , OV = b.memo(function({children: t}) {
    let n = Hn(()=>{
        let i = new Set
          , o = {};
        return {
            onRegisterCursors: a=>(a(o),
            i.add(a),
            ()=>i.delete(a)),
            registerCursors: a=>{
                let s = {};
                for (let l in a) {
                    let c = o[l] ?? a[l];
                    c && (s[l] = c)
                }
                o = s;
                for (let l of i)
                    l(o)
            }
        }
    }
    )
      , r = ri();
    return ae(um.Provider, {
        value: n,
        children: [t, !r && T(HV, {})]
    })
})
  , DV = MV(OV, [`.${ou}, .${ou} * { cursor: none !important; }`, `.${Vp}, .${Vp} * { pointer-events: none !important; }`])
  , AV = {
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 12 + 1,
    pointerEvents: "none"
};
function VV(e) {
    return !(!e || e.placement || e.alignment)
}
function Uc(e) {
    switch (e) {
    case "start":
        return "0%";
    case "center":
        return "-50%";
    case "end":
        return "-100%";
    default:
        Wt(e)
    }
}
function BV(e, t="center") {
    switch (e) {
    case "top":
        return `${Uc(t)}, -100%`;
    case "right":
        return `0%, ${Uc(t)}`;
    case "bottom":
        return `${Uc(t)}, 0%`;
    case "left":
        return `-100%, ${Uc(t)}`;
    default:
        return "-50%, -50%"
    }
}
var pS = "data-framer-portal-id";
function mS(e, t) {
    let n = document.elementFromPoint(e, t);
    for (; n; ) {
        if (n === document.body)
            return;
        let r = n.getAttribute("data-framer-cursor");
        if (r)
            return r;
        if (n.hasAttribute(pS)) {
            let i = n.getAttribute(pS);
            n = n.parentElement,
            i && (n = document.getElementById(i) ?? n)
        } else
            n = n.parentElement
    }
}
function zV(e) {
    for (let t in e)
        return !1;
    return !0
}
var HV = b.memo(function() {
    let {onRegisterCursors: t} = M(um)
      , n = Tn(0)
      , r = Tn(0)
      , i = Tn(0)
      , o = b.useRef(null)
      , a = b.useRef({
        cursors: {},
        cursorHash: void 0
    })
      , s = mu()
      , l = !zV(a.current.cursors);
    b.useEffect(()=>{
        let w = 0
          , k = 0;
        function E() {
            n.set(w),
            r.set(k),
            $i(i, 1, {
                type: "tween",
                duration: .2
            })
        }
        function I(L) {
            L.pointerType !== "touch" && (w = L.clientX,
            k = L.clientY,
            J.update(E))
        }
        let P = ()=>{
            if (!l)
                return;
            let L = mS(w, k);
            L !== a.current.cursorHash && (a.current.cursorHash = L,
            J.update(()=>s()))
        }
        ;
        J.read(P, !0);
        function z(L) {
            if (L.target === o.current || !o.current)
                return;
            let ee = new PointerEvent(L.type,{
                bubbles: !0,
                cancelable: L.cancelable,
                pointerType: L.pointerType,
                pointerId: L.pointerId,
                composed: L.composed,
                isPrimary: L.isPrimary,
                buttons: L.buttons,
                button: L.button
            });
            J.update(()=>{
                var H;
                (H = o.current) == null || H.dispatchEvent(ee)
            }
            )
        }
        return jt.addEventListener("pointermove", I),
        document.addEventListener("pointerdown", z),
        document.addEventListener("pointerup", z),
        ()=>{
            jt.removeEventListener("pointermove", I),
            document.removeEventListener("pointerdown", z),
            document.removeEventListener("pointerup", z),
            rt(P)
        }
    }
    , [i, n, r, l, s]),
    b.useEffect(()=>{
        function w() {
            $i(i, 0, {
                type: "tween",
                duration: .2
            })
        }
        return document.addEventListener("mouseleave", w),
        jt.addEventListener("blur", w),
        ()=>{
            document.removeEventListener("mouseleave", w),
            jt.removeEventListener("blur", w)
        }
    }
    , [i]),
    b.useLayoutEffect(()=>{
        function w(E) {
            a.current.cursors = E,
            a.current.cursorHash = mS(n.get(), r.get()),
            s()
        }
        let k = t(w);
        return ()=>{
            k(),
            document.body.classList.toggle(ou, !1)
        }
    }
    , [n, r, t, s]);
    let {cursors: c, cursorHash: u} = a.current
      , f = u ? c[u] : null
      , d = VV(f);
    b.useLayoutEffect(()=>{
        document.body.classList.toggle(ou, d)
    }
    , [d]);
    let h = f?.component
      , g = f?.transition ?? {
        duration: 0
    }
      , y = Gf(n, g)
      , S = Gf(r, g)
      , m = ht(()=>{
        var w;
        return y.get() + (((w = f?.offset) == null ? void 0 : w.x) ?? 0)
    }
    )
      , p = ht(()=>{
        var w;
        return S.get() + (((w = f?.offset) == null ? void 0 : w.y) ?? 0)
    }
    )
      , v = f?.alignment
      , x = f?.placement
      , C = b.useCallback((w,k)=>`translate(${BV(x, v)}) ${k}`, [v, x]);
    return !f || !h ? null : T(h, {
        transformTemplate: C,
        style: {
            ...AV,
            x: m,
            y: p,
            opacity: i
        },
        globalTapTarget: !0,
        variant: f?.variant,
        ref: o,
        className: Vp
    })
});
function Q6(e) {
    let {registerCursors: t} = M(um)
      , n = Hn(()=>e);
    b.useLayoutEffect(()=>{
        t(n)
    }
    , [n, t])
}
function NV(e) {
    return e * (Math.PI / 180)
}
var Hr = (()=>{
    function e(t, n) {
        return {
            a: t,
            b: n
        }
    }
    return e.offset = (t,n)=>{
        let r = et.angleFromX(t.a, t.b)
          , i = NV(r)
          , o = n * Math.sin(i)
          , a = n * Math.cos(i);
        return e({
            x: t.a.x + o,
            y: t.a.y - a
        }, {
            x: t.b.x + o,
            y: t.b.y - a
        })
    }
    ,
    e.intersection = (t,n)=>{
        let r = t.a.x
          , i = t.a.y
          , o = t.b.x
          , a = t.b.y
          , s = n.a.x
          , l = n.a.y
          , c = n.b.x
          , u = n.b.y
          , f = (r - o) * (l - u) - (i - a) * (s - c);
        if (f === 0)
            return null;
        let d = ((s - c) * (r * a - i * o) - (r - o) * (s * u - l * c)) / f
          , h = ((l - u) * (r * a - i * o) - (i - a) * (s * u - l * c)) / f;
        return {
            x: d,
            y: h
        }
    }
    ,
    e.intersectionAngle = (t,n)=>{
        let r = t.b.x - t.a.x
          , i = t.b.y - t.a.y
          , o = n.b.x - n.a.x
          , a = n.b.y - n.a.y;
        return Math.atan2(r * a - i * o, r * o + i * a) * (180 / Math.PI)
    }
    ,
    e.isOrthogonal = t=>t.a.x === t.b.x || t.a.y === t.b.y,
    e.perpendicular = (t,n)=>{
        let r = t.a.x - t.b.x
          , i = t.a.y - t.b.y
          , o = et(n.x - i, n.y + r);
        return e(o, n)
    }
    ,
    e.projectPoint = (t,n)=>{
        let r = e.perpendicular(t, n);
        return e.intersection(t, r)
    }
    ,
    e.pointAtPercentDistance = (t,n)=>{
        let r = e.distance(t)
          , i = n * r / r;
        return {
            x: i * t.b.x + (1 - i) * t.a.x,
            y: i * t.b.y + (1 - i) * t.a.y
        }
    }
    ,
    e.distance = t=>et.distance(t.a, t.b),
    e
}
)();
var $V = b.createContext(void 0)
  , Rs = class {
    constructor(e) {
        this.resolver = e,
        R(this, "status")
    }
    static is(e) {
        return e instanceof Rs
    }
    preload() {
        if (this.status) {
            let t = this.status;
            return t.type !== "pending" ? void 0 : t.promise
        }
        let e = this.resolver().then(t=>{
            this.status = {
                type: "fulfilled",
                value: t
            }
        }
        , t=>{
            this.status = {
                type: "rejected",
                error: t
            }
        }
        );
        return this.status = {
            type: "pending",
            promise: e
        },
        e
    }
    read() {
        let e = this.status;
        if (!e)
            throw new Error("Need to call preload() before read()");
        switch (e.type) {
        case "pending":
            throw new Error("Need to wait for preload() to resolve");
        case "fulfilled":
            return e.value;
        case "rejected":
            throw e.error;
        default:
            Wt(e)
        }
    }
}
;
function fm(e, t) {
    return e instanceof HTMLAnchorElement ? e : e instanceof Element ? e === t ? null : fm(e.parentElement, t) : null
}
var vS = "element"
  , jV = "collection"
  , WV = "collectionItemId"
  , UV = "pathVariables"
  , iC = "framer/page-link,";
function oC(e) {
    return ne(e) && e.startsWith(`data:${iC}`)
}
function dm(e) {
    if (oC(e))
        try {
            let t = new URL(e), n = t.pathname.substring(iC.length), r = t.searchParams, i = r.has(vS) ? r.get(vS) : void 0, o, a = r.get(jV), s = r.get(WV), l = r.get(UV);
            if (a && s && l) {
                let c = Object.fromEntries(new URLSearchParams(l).entries());
                o = {
                    collection: a,
                    collectionItemId: s,
                    pathVariables: c
                }
            }
            return {
                target: n === "none" ? null : n,
                element: i === "none" ? void 0 : i,
                collectionItem: o
            }
        } catch {
            return
        }
}
function XV(e, t, n) {
    var r;
    let i = t.getAttribute("data-framer-page-link-target"), o, a;
    if (i) {
        o = t.getAttribute("data-framer-page-link-element") ?? void 0;
        let l = t.getAttribute("data-framer-page-link-path-variables");
        l && (a = Object.fromEntries(new URLSearchParams(l).entries()))
    } else {
        let l = t.getAttribute("href");
        if (!l)
            return !1;
        let c = dm(l);
        if (!c || !c.target)
            return !1;
        i = c.target,
        o = c.element ?? void 0,
        a = (r = c.collectionItem) == null ? void 0 : r.pathVariables
    }
    let s = o ? t.dataset.framerSmoothScroll !== void 0 : void 0;
    return e(i, o, Object.assign({}, n, a), s),
    !0
}
var Tp = {}
  , Xc = new WeakMap;
function YV(e, t, n) {
    var r, i;
    let o = (i = (r = Xc?.get(n ?? Tp)) == null ? void 0 : r.get(e.collectionId)) == null ? void 0 : i.get(e.collectionItemId);
    if (o)
        return o;
    let a = Xc.get(n ?? Tp) ?? new Map;
    Xc.set(n ?? Tp, a);
    let s = a.get(e.collectionId) ?? new Map;
    a.set(e.collectionId, s);
    let l = new Rs(async()=>{
        try {
            let c = t[e.collectionId];
            if (!c)
                throw new Error(`Key not found in collection utils for collection id: "${e.collectionId}`);
            let u = await c();
            if (!u)
                throw new Error("Collection does not contain utility functions");
            return await u.getSlugByRecordId(e.collectionItemId, n ?? void 0)
        } catch (c) {
            // console.warn(`Failed to resolve slug: ${cinstanceof Error ? c.message : "Unknown error"}`);
            return
        }
    }
    );
    return s.set(e.collectionItemId, l),
    l
}
var GV = "webPageId";
function KV(e) {
    return !!(e && typeof e == "object" && GV in e)
}
function qV(e) {
    if (!e)
        return;
    let t = {};
    for (let n in e.pathVariables) {
        let r = e.pathVariables[n];
        r && (t[n] = r)
    }
    return t
}
function aC(e) {
    if (!oC(e))
        return e;
    let t = dm(e);
    if (!t)
        return;
    let {target: n, element: r, collectionItem: i} = t;
    if (n)
        return {
            webPageId: n,
            hash: r ?? void 0,
            pathVariables: qV(i)
        }
}
var sC = /:([a-z]\w*)/gi
  , QV = b.createContext(void 0);
function lC() {
    var e;
    let t = b.useContext(QV)
      , n = (e = fu()) == null ? void 0 : e.pathVariables;
    return t || n
}
function cC(e, {webPageId: t, hash: n, pathVariables: r}, i) {
    if (t !== e.id || n)
        return !1;
    if (e.path && e.pathVariables) {
        let o = Object.assign({}, i, r);
        for (let[,a] of e.path.matchAll(sC))
            if (!a || e.pathVariables[a] !== o[a])
                return !1
    }
    return !0
}
function uC(e) {
    return e === void 0 ? !1 : !!(e.startsWith("#") || e.startsWith("/") || e.startsWith("."))
}
function ZV(e, t) {
    try {
        return !!new URL(e).protocol
    } catch {}
    return t
}
function hm(e, t) {
    return e !== void 0 ? e ? "_blank" : void 0 : t ? void 0 : "_blank"
}
function gS(e, t=void 0) {
    let n = uC(e)
      , r = hm(t, n);
    return {
        href: ZV(e, n) ? e : `https://${e}`,
        target: r,
        rel: n ? void 0 : "noopener"
    }
}
function fC(e, t, n, r, i) {
    return async o=>{
        var a, s;
        if (o.metaKey)
            return;
        let l = fm(o.target);
        if (!l || l.getAttribute("target") === "_blank")
            return;
        o.preventDefault();
        let c = (a = e.getRoute) == null ? void 0 : a.call(e, t);
        c && YS(c?.page) && await c.page.preload(),
        (s = e.navigate) == null || s.call(e, t, n, r, i)
    }
}
function JV(e, t, n, r, i, o) {
    let a = uC(e);
    if (!n.routes || !n.getRoute || !r || !a)
        return gS(e, t);
    try {
        let[s,l] = e.split("#", 2);
        le(s !== void 0, "A href must have a defined pathname.");
        let[c] = s.split("?", 2);
        le(c !== void 0, "A href must have a defined pathname.");
        let {routeId: u, pathVariables: f} = K2(n.routes, c)
          , d = n.getRoute(u);
        if (d) {
            Gp(d.page);
            let h = Object.assign({}, i, f)
              , g = Up(d, {
                currentRoutePath: r.path,
                currentPathVariables: r.pathVariables,
                hash: l || void 0,
                pathVariables: h,
                preserveQueryParams: n.preserveQueryParams
            })
              , y = hm(t, !0);
            return {
                href: g,
                target: y,
                onClick: fC(n, u, l || void 0, h, o)
            }
        }
    } catch {}
    return gS(e, t)
}
function e3(e, t, n, r) {
    let i = [];
    function o(s) {
        if (!s || !n)
            return;
        let l = {};
        for (let c in s) {
            let u = s[c];
            le(u, "unresolvedSlug should be defined");
            let f = YV(u, n, r)
              , d = f.preload();
            if (d)
                i.push(d);
            else {
                let h = f.read();
                h && (l[c] = h)
            }
        }
        return l
    }
    let a = {
        path: o(e),
        hash: o(t)
    };
    if (i.length)
        throw Promise.allSettled(i);
    return a
}
var r$ = b.forwardRef(({children: e, href: t, openInNewTab: n, smoothScroll: r, ...i},o)=>{
    let a = uu()
      , s = fu()
      , l = lC()
      , {activeLocale: c} = Yp()
      , u = cm(o)
      , f = b.useMemo(()=>{
        var d;
        if (!t)
            return {};
        let h = KV(t) ? t : aC(t);
        if (!h)
            return {};
        if (ne(h))
            return JV(h, n, a, s, l, r);
        let {webPageId: g, hash: y, pathVariables: S, hashVariables: m, unresolvedHashSlugs: p, unresolvedPathSlugs: v} = h
          , x = (d = a.getRoute) == null ? void 0 : d.call(a, g)
          , C = e3(v, p, a.collectionUtils, c);
        x && Gp(x.page);
        let w = Object.assign({}, l, S, C?.path)
          , k = Object.assign({}, l, m, C?.hash)
          , E = hm(n, !0)
          , I = Up(x, {
            currentRoutePath: s?.path,
            currentPathVariables: s?.pathVariables,
            hash: y,
            pathVariables: w,
            hashVariables: k,
            preserveQueryParams: a.preserveQueryParams
        })
          , P = I.split("#", 2)[1];
        return {
            href: I,
            target: E,
            onClick: fC(a, g, P, w, r),
            "data-framer-page-link-current": s && cC(s, h, l) || void 0
        }
    }
    , [t, a, c, l, n, s, r]);
    return u(e, {
        ...i,
        ...f
    })
}
);
function a$({RootComponent: e, isWebsite: t, routeId: n, pathVariables: r, routes: i, collectionUtils: o, notFoundPage: a, isReducedMotion: s=!1, includeDataObserver: l=!1, localeId: c, locales: u, preserveQueryParams: f, enableSuspenseThatPreservesDom: d, shouldMarkHydrationEnd: h=!1}) {
    if (b.useLayoutEffect(()=>{
        h && (performance.mark("framer-hydration-end"),
        performance.measure("framer-hydration", "framer-hydration-start", "framer-hydration-end"))
    }
    , []),
    b.useEffect(()=>{
        t || ow.start()
    }
    , []),
    t)
        return T(Ey, {
            reducedMotion: s ? "user" : "never",
            children: T(DV, {
                children: T(X2, {
                    initialRoute: n,
                    initialPathVariables: r,
                    initialLocaleId: c,
                    routes: i,
                    collectionUtils: o,
                    notFoundPage: a,
                    locales: u,
                    defaultPageStyle: {
                        minHeight: "100vh",
                        width: "auto"
                    },
                    preserveQueryParams: f,
                    enableSuspenseThatPreservesDom: d
                })
            })
        });
    {
        let g = l ? YA : b.Fragment;
        return T(g, {
            children: T(A2, {
                routes: i,
                children: T(LA, {
                    children: b.isValidElement(e) ? e : b.createElement(e, {
                        key: n
                    })
                })
            })
        })
    }
}
function Ep(e, t, n) {
    let r = yn.map(e, i=>bn(i) ? an(i, t) : i);
    return n ? r : T(Ne, {
        children: r
    })
}
var dC = b.createContext(void 0)
  , yS = "ssr-variant";
function t3(e, t, n, r, i, o, a) {
    if (Nn())
        throw new Error("This should not be called on the client");
    let s = b.Children.toArray(t)
      , l = s[0];
    if (s.length !== 1 || !b.isValidElement(l))
        return console.warn(a + ": expected exactly one React element for a child", t),
        Ep(t, n);
    let c = []
      , u = [];
    for (let[g] of Object.entries(r)) {
        if (g === i)
            continue;
        let y = e[g];
        if (!y || !r3(l.props, y)) {
            u.push(g);
            continue
        }
        let S = bS([g], o);
        S.length && c.push({
            variants: S,
            propOverrides: y
        })
    }
    if (c.length === 0)
        return Ep(l, n);
    let f = [i, ...u]
      , d = bS(f, o);
    d.length && c.unshift({
        variants: d
    });
    let h = `.${yS} { display: contents }`;
    return ae(Ne, {
        children: [!o && T("style", {
            ...rC,
            children: h
        }), c.map(({variants: g, propOverrides: y})=>{
            let S = g.join("+")
              , m = T(dC.Provider, {
                value: new Set(g),
                children: Ep(l, {
                    ...n,
                    ...y
                })
            }, S)
              , p = n3(g, o, r);
            return p.length ? (le(c.length > 1, "Must branch out when there are hiddenClassNames"),
            m = T("div", {
                className: `${yS} ${p.join(" ")}`,
                children: m
            }, S)) : le(c.length === 1, "Cannot branch out when hiddenClassNames is empty"),
            m
        }
        )]
    })
}
function n3(e, t, n) {
    let r = [];
    for (let[i,o] of Object.entries(n)) {
        let a = t && !t.has(i);
        if (e.includes(i) || a)
            continue;
        let s = o.split("-")[2];
        r.push(`hidden-${s}`)
    }
    return r
}
function bS(e, t) {
    return t ? e.filter(n=>t.has(n)) : e
}
function r3(e, t) {
    for (let n of Object.keys(t))
        if (!Me(e[n], t[n], !0))
            return !0;
    return !1
}
function i3(e, t, n) {
    return !n || !e ? t : {
        ...t,
        ...n[e]
    }
}
var u$ = b.forwardRef(function({breakpoint: t, overrides: n, children: r, ...i}, o) {
    let a = cm(o);
    if (Nn())
        return a(r, i3(t, i, n));
    let s = b.useContext($V);
    if (!s)
        return console.warn("PropertyOverrides is missing GeneratedComponentContext"),
        a(r, i);
    let {primaryVariantId: l, variantClassNames: c} = s
      , u = b.useContext(dC);
    return t3(n, r, i, c, l, u, "PropertyOverrides")
});
var o3 = Gt(Z_(), 1);
function a3(e) {
    return {
        trace(...t) {
            var n;
            return (n = Ge.getLogger(e)) == null ? void 0 : n.trace(...t)
        },
        debug(...t) {
            var n;
            return (n = Ge.getLogger(e)) == null ? void 0 : n.debug(...t)
        },
        info(...t) {
            var n;
            return (n = Ge.getLogger(e)) == null ? void 0 : n.info(...t)
        },
        warn(...t) {
            var n;
            return (n = Ge.getLogger(e)) == null ? void 0 : n.warn(...t)
        },
        error(...t) {
            var n;
            return (n = Ge.getLogger(e)) == null ? void 0 : n.error(...t)
        }
    }
}
function s3(e) {
    return du(e) && e.every(Be)
}
function l3(e) {
    return Be(e) && fs(e.read) && fs(e.preload)
}
function yu(e) {
    return Be(e) && Be(e.collectionByLocaleId)
}
var on = {
    equal(e, t, n) {
        return e?.type !== t?.type ? !1 : Ja(e, t, n) === 0
    },
    lessThan(e, t, n) {
        return e?.type !== t?.type ? !1 : Ja(e, t, n) < 0
    },
    lessThanOrEqual(e, t, n) {
        return e?.type !== t?.type ? !1 : Ja(e, t, n) <= 0
    },
    greaterThan(e, t, n) {
        return e?.type !== t?.type ? !1 : Ja(e, t, n) > 0
    },
    greaterThanOrEqual(e, t, n) {
        return e?.type !== t?.type ? !1 : Ja(e, t, n) >= 0
    },
    stringify(e) {
        if (e === null)
            return "null";
        switch (e.type) {
        case "boolean":
        case "number":
            return String(e.value);
        case "string":
            return `'${e.value}'`;
        case "enum":
            return `'${e.value}' /* Enum */`;
        case "color":
            return `'${e.value}' /* Color */`;
        case "date":
            return `'${e.value}' /* Date */`;
        case "richtext":
            return "RichText";
        case "responsiveimage":
            return "ResponsiveImage";
        case "file":
            return "File";
        case "link":
            return ne(e.value) ? `'${e.value}' /* Link */` : "Link";
        default:
            Wt(e)
        }
    }
};
function Ja(e, t, n) {
    if (Le(e) || Le(t))
        return le(e === t),
        0;
    switch (e.type) {
    case "boolean":
        return le(e.type === t.type),
        e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
    case "color":
        return le(e.type === t.type),
        e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
    case "date":
        {
            le(e.type === t.type);
            let r = new Date(e.value)
              , i = new Date(t.value);
            return r < i ? -1 : r > i ? 1 : 0
        }
    case "enum":
        return le(e.type === t.type),
        e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
    case "file":
        return le(e.type === t.type),
        e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
    case "responsiveimage":
        {
            le(e.type === t.type);
            let r = JSON.stringify(e.value)
              , i = JSON.stringify(t.value);
            return r < i ? -1 : r > i ? 1 : 0
        }
    case "link":
        {
            le(e.type === t.type);
            let r = JSON.stringify(e.value)
              , i = JSON.stringify(t.value);
            return r < i ? -1 : r > i ? 1 : 0
        }
    case "number":
        return le(e.type === t.type),
        e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
    case "richtext":
        {
            le(e.type === t.type);
            let r = e.value
              , i = t.value;
            return r < i ? -1 : r > i ? 1 : 0
        }
    case "string":
        {
            le(e.type === t.type);
            let r = e.value
              , i = t.value;
            return n.type === 0 && (r = e.value.toLowerCase(),
            i = t.value.toLowerCase()),
            r < i ? -1 : r > i ? 1 : 0
        }
    default:
        Wt(e)
    }
}
var Bp = "index"
  , gt = class {
    static from(e, t) {
        return An(e, t, void 0)
    }
}
  , tt = class extends gt {
    constructor(e, t) {
        super(),
        this.schema = e,
        this.name = t,
        R(this, "definition"),
        t === Bp ? this.definition = {
            type: "number",
            isNullable: !1
        } : this.definition = e[t] ?? null
    }
    stringify() {
        return this.name
    }
    equals(e) {
        return e instanceof tt && Me(this.definition, e.definition) && Me(e.name, this.name)
    }
    evaluate(e) {
        let t = this.name;
        if (xt(e) || t === Bp)
            throw new Error(`Can't evaluate identifier: ${t}`);
        return e.data[t] ?? null
    }
    canEvaluate() {
        return !1
    }
}
  , Ee = class extends gt {
    constructor(e, t) {
        super(),
        this.definition = e,
        this.value = t
    }
    stringify() {
        return on.stringify(this.value)
    }
    static fromNull() {
        return new Ee(null,null)
    }
    static fromBoolean(e) {
        return new Ee({
            type: "boolean",
            isNullable: Le(e)
        },Le(e) ? null : {
            type: "boolean",
            value: e
        })
    }
    static fromDate(e) {
        return new Ee({
            type: "date",
            isNullable: Le(e)
        },Le(e) ? null : {
            type: "date",
            value: e.toISOString()
        })
    }
    static fromEnum(e) {
        return new Ee({
            type: "enum",
            isNullable: Le(e)
        },Le(e) ? null : {
            type: "enum",
            value: e
        })
    }
    static fromNumber(e) {
        return new Ee({
            type: "number",
            isNullable: Le(e)
        },Le(e) ? null : {
            type: "number",
            value: e
        })
    }
    static fromString(e) {
        return new Ee({
            type: "string",
            isNullable: Le(e)
        },Le(e) ? null : {
            type: "string",
            value: e
        })
    }
    equals(e) {
        return e instanceof Ee && Me(this.definition, e.definition) && Me(e.value, this.value)
    }
    evaluate() {
        return this.value
    }
    canEvaluate() {
        return !0
    }
}
  , Ps = class extends gt {
    constructor(e) {
        super(),
        this.argumentExpressions = e,
        R(this, "collation", {
            type: 0
        })
    }
    getArgumentExpression(e) {
        let t = this.argumentExpressions[e];
        if (xt(t))
            throw new Error("Missing argument in function call");
        return t
    }
    equals(e) {
        return e instanceof Ps && Me(this.constructor, e.constructor) && Me(this.argumentExpressions, e.argumentExpressions)
    }
    canEvaluate() {
        return this.argumentExpressions.every(e=>e.canEvaluate())
    }
}
  , bu = class extends Ps {
    constructor() {
        super(...arguments),
        R(this, "definition", bu.getDefinition()),
        R(this, "sourceExpression", this.getArgumentExpression(0)),
        R(this, "targetExpression", this.getArgumentExpression(1))
    }
    static getDefinition() {
        return {
            type: "boolean",
            isNullable: !1
        }
    }
    stringify() {
        return `CONTAINS(${this.sourceExpression.stringify()}, ${this.targetExpression.stringify()})`
    }
    getValue(e, t) {
        if (Le(e) || e.type !== "string" || Le(t) || t.type !== "string")
            return !1;
        let n = e.value
          , r = t.value;
        return this.collation.type === 0 && (n = n.toLowerCase(),
        r = r.toLowerCase()),
        n.includes(r)
    }
    evaluate(e) {
        let t = this.sourceExpression.evaluate(e)
          , n = this.targetExpression.evaluate(e);
        return {
            type: "boolean",
            value: this.getValue(t, n)
        }
    }
}
  , xu = class extends Ps {
    constructor() {
        super(...arguments),
        R(this, "definition", xu.getDefinition()),
        R(this, "sourceExpression", this.getArgumentExpression(0)),
        R(this, "targetExpression", this.getArgumentExpression(1))
    }
    static getDefinition() {
        return {
            type: "boolean",
            isNullable: !1
        }
    }
    stringify() {
        return `STARTS_WITH(${this.sourceExpression.stringify()}, ${this.targetExpression.stringify()})`
    }
    getValue(e, t) {
        if (Le(e) || e.type !== "string" || Le(t) || t.type !== "string")
            return !1;
        let n = e.value
          , r = t.value;
        return this.collation.type === 0 && (n = n.toLowerCase(),
        r = r.toLowerCase()),
        n.startsWith(r)
    }
    evaluate(e) {
        let t = this.sourceExpression.evaluate(e)
          , n = this.targetExpression.evaluate(e);
        return {
            type: "boolean",
            value: this.getValue(t, n)
        }
    }
}
  , Su = class extends Ps {
    constructor() {
        super(...arguments),
        R(this, "definition", Su.getDefinition()),
        R(this, "sourceExpression", this.getArgumentExpression(0)),
        R(this, "targetExpression", this.getArgumentExpression(1))
    }
    static getDefinition() {
        return {
            type: "boolean",
            isNullable: !1
        }
    }
    stringify() {
        return `ENDS_WITH(${this.sourceExpression.stringify()}, ${this.targetExpression.stringify()})`
    }
    getValue(e, t) {
        if (Le(e) || e.type !== "string" || Le(t) || t.type !== "string")
            return !1;
        let n = e.value
          , r = t.value;
        return this.collation.type === 0 && (n = n.toLowerCase(),
        r = r.toLowerCase()),
        n.endsWith(r)
    }
    evaluate(e) {
        let t = this.sourceExpression.evaluate(e)
          , n = this.targetExpression.evaluate(e);
        return {
            type: "boolean",
            value: this.getValue(t, n)
        }
    }
}
  , au = class extends gt {
    constructor(e, t, n) {
        super(),
        this.valueExpression = e,
        this.conditions = t,
        this.elseExpression = n,
        R(this, "definition"),
        R(this, "collation", {
            type: 0
        });
        let r = [];
        for (let {thenExpression: i} of t)
            r.push(i.definition);
        n && r.push(n.definition),
        this.definition = au.getDefinition(r)
    }
    static getDefinition(e) {
        let t = null
          , n = !1;
        for (let r of e) {
            if (t ?? (t = r),
            t && r && t.type !== r.type)
                throw new Error("Incompatible types in CASE expression");
            n || (n = r?.isNullable ?? !0)
        }
        return t ? {
            type: t.type,
            isNullable: n
        } : null
    }
    stringify() {
        let e = "CASE";
        this.valueExpression && (e += ` ${this.valueExpression.stringify()}`);
        for (let {whenExpression: t, thenExpression: n} of this.conditions)
            e += ` WHEN ${t.stringify()} THEN ${n.stringify()}`;
        return this.elseExpression && (e += ` ELSE ${this.elseExpression.stringify()}`),
        e += " END",
        e
    }
    equals(e) {
        return e instanceof au && Me(this.valueExpression, e.valueExpression) && Me(this.conditions, e.conditions) && Me(this.elseExpression, e.elseExpression)
    }
    evaluate(e) {
        var t, n;
        let r = ((t = this.valueExpression) == null ? void 0 : t.evaluate(e)) ?? null;
        for (let {whenExpression: i, thenExpression: o} of this.conditions) {
            let a = i.evaluate(e);
            if (this.valueExpression ? on.equal(a, r, this.collation) : Ei(a))
                return o.evaluate(e)
        }
        return ((n = this.elseExpression) == null ? void 0 : n.evaluate(e)) ?? null
    }
    canEvaluate() {
        let e = [];
        this.valueExpression && e.push(this.valueExpression);
        for (let t of this.conditions)
            e.push(t.whenExpression),
            e.push(t.thenExpression);
        return this.elseExpression && e.push(this.elseExpression),
        e.every(t=>t.canEvaluate())
    }
}
  , c3 = class {
    constructor(e, t) {
        this.whenExpression = e,
        this.thenExpression = t
    }
}
  , hC = class extends gt {
    constructor(e) {
        super(),
        this.valueExpression = e
    }
    equals(e) {
        return e instanceof hC && Me(this.constructor, e.constructor) && Me(this.valueExpression, e.valueExpression)
    }
    canEvaluate() {
        return this.valueExpression.canEvaluate()
    }
}
  , gs = class extends hC {
    constructor() {
        super(...arguments),
        R(this, "definition", gs.getDefinition())
    }
    static getDefinition() {
        return {
            type: "boolean",
            isNullable: !1
        }
    }
    stringify() {
        return `NOT ${this.valueExpression.stringify()}`
    }
    evaluate(e) {
        let t = this.valueExpression.evaluate(e);
        return {
            type: "boolean",
            value: !Ei(t)
        }
    }
}
  , ys = class extends gt {
    constructor(e) {
        super(),
        this.operandExpressions = e,
        R(this, "definition", ys.getDefinition())
    }
    static getDefinition() {
        return {
            type: "boolean",
            isNullable: !1
        }
    }
    stringify() {
        return this.operandExpressions.map(e=>e.stringify()).join(" AND ")
    }
    equals(e) {
        return e instanceof ys && Me(this.constructor, e.constructor) && Me(this.operandExpressions, e.operandExpressions)
    }
    canEvaluate() {
        return this.operandExpressions.every(e=>e.canEvaluate())
    }
}
  , wi = class extends ys {
    constructor() {
        super(...arguments),
        R(this, "operator", "AND")
    }
    evaluate(e) {
        return {
            type: "boolean",
            value: this.operandExpressions.every(n=>{
                let r = n.evaluate(e);
                return Ei(r)
            }
            )
        }
    }
}
  , ls = class extends ys {
    constructor() {
        super(...arguments),
        R(this, "operator", "OR")
    }
    evaluate(e) {
        return {
            type: "boolean",
            value: this.operandExpressions.some(n=>{
                let r = n.evaluate(e);
                return Ei(r)
            }
            )
        }
    }
}
  , Bn = class extends gt {
    constructor(e, t) {
        super(),
        this.leftExpression = e,
        this.rightExpression = t,
        R(this, "definition", Bn.getDefinition()),
        R(this, "collation", {
            type: 0
        })
    }
    static getDefinition() {
        return {
            type: "boolean",
            isNullable: !1
        }
    }
    stringify() {
        return `${this.leftExpression.stringify()} ${this.operator} ${this.rightExpression.stringify()}`
    }
    equals(e) {
        return e instanceof Bn && Me(this.constructor, e.constructor) && Me(this.leftExpression, e.leftExpression) && Me(this.rightExpression, e.rightExpression)
    }
    canEvaluate() {
        return this.leftExpression.canEvaluate() && this.rightExpression.canEvaluate()
    }
}
  , Io = class extends Bn {
    constructor() {
        super(...arguments),
        R(this, "operator", "=")
    }
    evaluate(e) {
        let t = this.leftExpression.evaluate(e)
          , n = this.rightExpression.evaluate(e);
        return {
            type: "boolean",
            value: on.equal(t, n, this.collation)
        }
    }
}
  , Fo = class extends Bn {
    constructor() {
        super(...arguments),
        R(this, "operator", "!=")
    }
    evaluate(e) {
        let t = this.leftExpression.evaluate(e)
          , n = this.rightExpression.evaluate(e);
        return {
            type: "boolean",
            value: !on.equal(t, n, this.collation)
        }
    }
}
  , bs = class extends Bn {
    constructor() {
        super(...arguments),
        R(this, "operator", "<")
    }
    evaluate(e) {
        let t = this.leftExpression.evaluate(e)
          , n = this.rightExpression.evaluate(e);
        return {
            type: "boolean",
            value: on.lessThan(t, n, this.collation)
        }
    }
}
  , xs = class extends Bn {
    constructor() {
        super(...arguments),
        R(this, "operator", "<=")
    }
    evaluate(e) {
        let t = this.leftExpression.evaluate(e)
          , n = this.rightExpression.evaluate(e);
        return {
            type: "boolean",
            value: on.lessThanOrEqual(t, n, this.collation)
        }
    }
}
  , Ss = class extends Bn {
    constructor() {
        super(...arguments),
        R(this, "operator", ">")
    }
    evaluate(e) {
        let t = this.leftExpression.evaluate(e)
          , n = this.rightExpression.evaluate(e);
        return {
            type: "boolean",
            value: on.greaterThan(t, n, this.collation)
        }
    }
}
  , ws = class extends Bn {
    constructor() {
        super(...arguments),
        R(this, "operator", ">=")
    }
    evaluate(e) {
        let t = this.leftExpression.evaluate(e)
          , n = this.rightExpression.evaluate(e);
        return {
            type: "boolean",
            value: on.greaterThanOrEqual(t, n, this.collation)
        }
    }
}
  , Is = class extends gt {
    constructor(e) {
        super(),
        this.valueExpression = e
    }
    stringify() {
        return `CAST(${this.valueExpression.stringify()} AS ${this.dataType})`
    }
    equals(e) {
        return e instanceof Is && Me(this.constructor, e.constructor) && Me(this.valueExpression, e.valueExpression)
    }
    canEvaluate() {
        return this.valueExpression.canEvaluate()
    }
}
  , wu = class extends Is {
    constructor() {
        super(...arguments),
        R(this, "dataType", "BOOLEAN"),
        R(this, "definition", wu.getDefinition())
    }
    static getDefinition() {
        return {
            type: "boolean",
            isNullable: !1
        }
    }
    evaluate(e) {
        let t = this.valueExpression.evaluate(e);
        return {
            type: "boolean",
            value: Ei(t)
        }
    }
}
;
function Ei(e) {
    switch (e?.type) {
    case "boolean":
    case "number":
    case "string":
        return !!e.value
    }
    return !1
}
var pm = class extends Is {
    constructor() {
        super(...arguments),
        R(this, "dataType", "DATE"),
        R(this, "definition", pm.getDefinition())
    }
    static getDefinition() {
        return {
            type: "date",
            isNullable: !0
        }
    }
    evaluate(e) {
        let t = this.valueExpression.evaluate(e)
          , n = pC(t);
        return Le(n) ? null : {
            type: "date",
            value: n.toISOString()
        }
    }
}
;
function pC(e) {
    switch (e?.type) {
    case "date":
    case "number":
    case "string":
        {
            let t = new Date(e.value);
            return nn(t) ? t : null
        }
    }
    return null
}
var mm = class extends Is {
    constructor() {
        super(...arguments),
        R(this, "dataType", "NUMBER"),
        R(this, "definition", mm.getDefinition())
    }
    static getDefinition() {
        return {
            type: "number",
            isNullable: !0
        }
    }
    evaluate(e) {
        let t = this.valueExpression.evaluate(e)
          , n = mC(t);
        return Le(n) ? null : {
            type: "number",
            value: n
        }
    }
}
;
function mC(e) {
    switch (e?.type) {
    case "number":
    case "string":
        {
            let t = Number(e.value);
            return Number.isFinite(t) ? t : null
        }
    }
    return null
}
var vm = class extends Is {
    constructor() {
        super(...arguments),
        R(this, "dataType", "STRING"),
        R(this, "definition", vm.getDefinition())
    }
    static getDefinition() {
        return {
            type: "string",
            isNullable: !0
        }
    }
    evaluate(e) {
        let t = this.valueExpression.evaluate(e)
          , n = vC(t);
        return Le(n) ? null : {
            type: "string",
            value: n
        }
    }
}
;
function vC(e) {
    switch (e?.type) {
    case "string":
    case "number":
        return String(e.value)
    }
    return null
}
function An(e, t, n) {
    let r = u3(e, t, n)
      , i = r instanceof Ee;
    if (r.canEvaluate() && !i) {
        let o = r.evaluate();
        return new Ee(r.definition,o)
    }
    return r
}
function u3(e, t, n) {
    switch (e.type) {
    case "Identifier":
        return f3(e, t);
    case "LiteralValue":
        return d3(e, n);
    case "FunctionCall":
        return p3(e, t);
    case "Case":
        return m3(e, t, n);
    case "UnaryOperation":
        return v3(e, t);
    case "BinaryOperation":
        return g3(e, t);
    case "TypeCast":
        return E3(e, t);
    default:
        throw new Error(`Unsupported expression: ${JSON.stringify(e)}`)
    }
}
function f3(e, t) {
    return new tt(t,e.name)
}
function d3(e, t) {
    var n;
    let r = h3(e.value);
    switch (t?.type) {
    case "boolean":
        {
            let i = Ei(r.value);
            return Ee.fromBoolean(i)
        }
    case "date":
        {
            let i = pC(r.value);
            return Ee.fromDate(i)
        }
    case "enum":
        return ((n = r.value) == null ? void 0 : n.type) === "string" ? Ee.fromEnum(r.value.value) : r;
    case "number":
        {
            let i = mC(r.value);
            return Ee.fromNumber(i)
        }
    case "string":
        {
            let i = vC(r.value);
            return Ee.fromString(i)
        }
    }
    return r
}
function h3(e) {
    return fw(e) ? Ee.fromBoolean(e) : nn(e) ? Ee.fromDate(e) : fe(e) ? Ee.fromNumber(e) : ne(e) ? Ee.fromString(e) : Ee.fromNull()
}
function p3(e, t) {
    let n = e.arguments.map(r=>An(r, t, void 0));
    switch (e.functionName) {
    case "CONTAINS":
        return new bu(n);
    case "STARTS_WITH":
        return new xu(n);
    case "ENDS_WITH":
        return new Su(n);
    default:
        throw new Error(`Unsupported function name: ${e.functionName}`)
    }
}
function m3(e, t, n) {
    let r = e.value && An(e.value, t, void 0)
      , i = e.value && Cs(e.value, t)
      , o = e.conditions.map(s=>{
        let l = An(s.when, t, i)
          , c = An(s.then, t, n);
        return new c3(l,c)
    }
    )
      , a = e.else && An(e.else, t, n);
    return new au(r,o,a)
}
function v3(e, t) {
    let n = An(e.value, t, void 0);
    switch (e.operator) {
    case "not":
        return zp(n);
    default:
        throw new Error(`Unsupported unary operator: ${e.operator}`)
    }
}
function zp(e) {
    var t;
    if (e instanceof gs) {
        let n = e.valueExpression;
        return ((t = n.definition) == null ? void 0 : t.type) === "boolean" ? n : new wu(n)
    }
    if (e instanceof Io) {
        let {leftExpression: n, rightExpression: r} = e;
        return new Fo(n,r)
    }
    if (e instanceof Fo) {
        let {leftExpression: n, rightExpression: r} = e;
        return new Io(n,r)
    }
    if (e instanceof bs) {
        let {leftExpression: n, rightExpression: r} = e;
        return new ws(n,r)
    }
    if (e instanceof xs) {
        let {leftExpression: n, rightExpression: r} = e;
        return new Ss(n,r)
    }
    if (e instanceof Ss) {
        let {leftExpression: n, rightExpression: r} = e;
        return new xs(n,r)
    }
    if (e instanceof ws) {
        let {leftExpression: n, rightExpression: r} = e;
        return new bs(n,r)
    }
    if (e instanceof wi) {
        let {operandExpressions: n} = e
          , r = n.map(zp);
        return new ls(r)
    }
    if (e instanceof wi) {
        let {operandExpressions: n} = e
          , r = n.map(zp);
        return new wi(r)
    }
    return new gs(e)
}
function g3(e, t) {
    let n = e.operator !== "and" && e.operator !== "or" ? Cs(e.left, t) || Cs(e.right, t) : void 0
      , r = An(e.left, t, n)
      , i = An(e.right, t, n);
    switch (e.operator) {
    case "and":
        return y3(r, i);
    case "or":
        return b3(r, i);
    case "==":
        return x3(r, i);
    case "!=":
        return S3(r, i);
    case "<":
        return w3(r, i);
    case "<=":
        return C3(r, i);
    case ">":
        return k3(r, i);
    case ">=":
        return T3(r, i);
    default:
        throw new Error(`Unsupported binary operator: ${e.operator}`)
    }
}
function y3(e, t) {
    let n = [];
    return e instanceof wi ? n.push(...e.operandExpressions) : n.push(e),
    t instanceof wi ? n.push(...t.operandExpressions) : n.push(t),
    new wi(n)
}
function b3(e, t) {
    let n = [];
    return e instanceof ls ? n.push(...e.operandExpressions) : n.push(e),
    t instanceof ls ? n.push(...t.operandExpressions) : n.push(t),
    new ls(n)
}
function x3(e, t) {
    let n = e instanceof tt;
    return t instanceof tt && !n ? new Io(t,e) : new Io(e,t)
}
function S3(e, t) {
    let n = e instanceof tt;
    return t instanceof tt && !n ? new Fo(t,e) : new Fo(e,t)
}
function w3(e, t) {
    let n = e instanceof tt;
    return t instanceof tt && !n ? new Ss(t,e) : new bs(e,t)
}
function C3(e, t) {
    let n = e instanceof tt;
    return t instanceof tt && !n ? new ws(t,e) : new xs(e,t)
}
function k3(e, t) {
    let n = e instanceof tt;
    return t instanceof tt && !n ? new bs(t,e) : new Ss(e,t)
}
function T3(e, t) {
    let n = e instanceof tt;
    return t instanceof tt && !n ? new xs(t,e) : new ws(e,t)
}
function E3(e, t) {
    let n = An(e.value, t, void 0);
    switch (e.dataType) {
    case "BOOLEAN":
        return R3(n);
    case "DATE":
        return P3(n);
    case "NUMBER":
        return I3(n);
    case "STRING":
        return F3(n);
    default:
        throw new Error(`Unsupported data type: ${e.dataType}`)
    }
}
function R3(e) {
    var t;
    return ((t = e.definition) == null ? void 0 : t.type) === "boolean" ? e : new wu(e)
}
function P3(e) {
    var t;
    return ((t = e.definition) == null ? void 0 : t.type) === "date" ? e : new pm(e)
}
function I3(e) {
    var t;
    return ((t = e.definition) == null ? void 0 : t.type) === "number" ? e : new mm(e)
}
function F3(e) {
    var t;
    return ((t = e.definition) == null ? void 0 : t.type) === "string" ? e : new vm(e)
}
function Cs(e, t) {
    switch (e.type) {
    case "Identifier":
        return _3(e, t);
    case "LiteralValue":
        return;
    case "FunctionCall":
        return L3(e);
    case "Case":
        return M3(e, t);
    case "UnaryOperation":
        return O3(e);
    case "BinaryOperation":
        return D3(e);
    case "TypeCast":
        return A3(e);
    default:
        throw new Error(`Unsupported expression: ${JSON.stringify(e)}`)
    }
}
function _3(e, t) {
    return t[e.name]
}
function L3(e) {
    switch (e.functionName) {
    case "CONTAINS":
        return bu.getDefinition();
    case "STARTS_WITH":
        return xu.getDefinition();
    case "ENDS_WITH":
        return Su.getDefinition();
    default:
        throw new Error(`Unsupported function name: ${e.functionName}`)
    }
}
function M3(e, t) {
    let n = [];
    for (let r of e.conditions) {
        let i = Cs(r.then, t);
        xt(i) || n.push(i)
    }
    if (e.else) {
        let r = Cs(e.else, t);
        xt(r) || n.push(r)
    }
    return au.getDefinition(n) ?? void 0
}
function O3(e) {
    switch (e.operator) {
    case "not":
        return gs.getDefinition();
    default:
        throw new Error(`Unsupported unary operator: ${e.operator}`)
    }
}
function D3(e) {
    switch (e.operator) {
    case "and":
    case "or":
        return ys.getDefinition();
    case "==":
    case "!=":
    case "<":
    case "<=":
    case ">":
    case ">=":
        return Bn.getDefinition();
    default:
        throw new Error(`Unsupported binary operator: ${e.operator}`)
    }
}
function A3(e) {
    switch (e.dataType) {
    case "BOOLEAN":
        return wu.getDefinition();
    case "DATE":
        return pm.getDefinition();
    case "NUMBER":
        return mm.getDefinition();
    case "STRING":
        return vm.getDefinition();
    default:
        throw new Error(`Unsupported data type: ${e.dataType}`)
    }
}
function Wr(e, t) {
    return `(self: ${e}ms${t ? `, total: ${t}ms` : ""})`
}
function zn(e) {
    return `(items: ${e})`
}
var Ur = class {
    constructor() {
        R(this, "executionTime", 0),
        R(this, "itemCount", 0)
    }
    async execute() {
        let e = performance.now()
          , t = await this._execute();
        return this.executionTime = performance.now() - e,
        this.itemCount = t.length,
        t
    }
}
  , gC = class extends Ur {
    constructor(e) {
        super(),
        this.collection = e
    }
    inspect() {
        return {
            label: `ScanCollectionPlan ${Wr(this.executionTime)} ${zn(this.itemCount)}`
        }
    }
    async _execute() {
        return this.collection.scanItems()
    }
}
  , or = class extends Ur {
    constructor(e, t) {
        super(),
        this.index = e,
        this.query = t
    }
    inspect() {
        let e = []
          , t = n=>{
            switch (n.type) {
            case "All":
                return n.type;
            case "Equals":
            case "NotEquals":
            case "LessThan":
            case "GreaterThan":
            case "Contains":
            case "StartsWith":
            case "EndsWith":
                return `${n.type} ${on.stringify(n.value)}`;
            default:
                Wt(n)
            }
        }
        ;
        for (let n = 0; n < this.index.fields.length; n++) {
            let r = this.index.fields[n]
              , i = this.query[n];
            !r || r.type !== "Identifier" || !i || i.type === "All" || e.push(`${r.name} ${t(i)}`)
        }
        return {
            label: `LookupIndexPlan(${e.join(", ")}) ${Wr(this.executionTime)} ${zn(this.itemCount)}`
        }
    }
    async _execute() {
        return this.index.lookupItems(this.query)
    }
}
  , V3 = class extends Ur {
    constructor(e) {
        super(),
        this.childPlans = e
    }
    inspect() {
        let e = Math.max(...this.childPlans.map(t=>t.executionTime ?? 0));
        return {
            label: `UnionPlan ${Wr(this.executionTime - e, this.executionTime)} ${zn(this.itemCount)}`,
            nodes: this.childPlans.map(t=>t.inspect())
        }
    }
    async _execute() {
        let e = await Promise.all(this.childPlans.map(async n=>{
            let r = await n.execute();
            return new su(r)
        }
        )), t;
        for (let n of e)
            t ? t = t.union(n) : t = n;
        return t?.items() ?? []
    }
}
  , B3 = class extends Ur {
    constructor(e) {
        super(),
        this.childPlans = e
    }
    inspect() {
        let e = Math.max(...this.childPlans.map(t=>t.executionTime ?? 0));
        return {
            label: `IntersectionPlan ${Wr(this.executionTime - e, this.executionTime)} ${zn(this.itemCount)} ${zn(this.itemCount)}`,
            nodes: this.childPlans.map(t=>t.inspect())
        }
    }
    async _execute() {
        let e = await Promise.all(this.childPlans.map(async n=>{
            let r = await n.execute();
            return new su(r)
        }
        )), t;
        for (let n of e)
            t ? t = t.intersection(n) : t = n;
        return t?.items() ?? []
    }
}
  , z3 = class extends Ur {
    constructor(e, t, n, r) {
        super(),
        this.childPlan = e,
        this.collection = t,
        this.richTextResolver = n,
        this.select = r
    }
    inspect() {
        return {
            label: `ResolveItemsPlan ${Wr(this.executionTime - this.childPlan.executionTime, this.executionTime)} ${zn(this.itemCount)}`,
            nodes: [this.childPlan.inspect()]
        }
    }
    async _execute() {
        let e = await this.childPlan.execute()
          , t = e.map(n=>n.pointer);
        for (let n of e)
            for (let r of this.select) {
                if (r.type !== "Identifier")
                    continue;
                let i = n.data[r.name];
                i?.type === "richtext" && this.richTextResolver.resolve(i.value)
            }
        return this.collection.resolveItems(t)
    }
}
  , H3 = class extends Ur {
    constructor(e, t) {
        super(),
        this.childPlan = e,
        this.filterExpression = t
    }
    inspect() {
        return {
            label: `FilterItemsPlan(${this.filterExpression.stringify()}) ${Wr(this.executionTime - this.childPlan.executionTime, this.executionTime)} ${zn(this.itemCount)} ${zn(this.itemCount)}`,
            nodes: [this.childPlan.inspect()]
        }
    }
    async _execute() {
        return (await this.childPlan.execute()).filter(t=>{
            let n = this.filterExpression.evaluate(t);
            return Ei(n)
        }
        )
    }
}
  , N3 = class extends Ur {
    constructor(e, t, n) {
        super(),
        this.childPlan = e,
        this.orderExpressions = t,
        this.collection = n
    }
    inspect() {
        return {
            label: `SortItemsPlan(${this.orderExpressions.map(t=>`${t.expression.stringify()} ${t.direction.toUpperCase()}`).join(", ")}) ${Wr(this.executionTime - this.childPlan.executionTime, this.executionTime)} ${zn(this.itemCount)}`,
            nodes: [this.childPlan.inspect()]
        }
    }
    async _execute() {
        return (await this.childPlan.execute()).sort((t,n)=>{
            for (let {expression: r, direction: i, collation: o} of this.orderExpressions) {
                let a = i === "asc";
                if (r instanceof tt && r.name === Bp) {
                    let c = this.collection.compareItems(t, n);
                    return a ? c : -c
                }
                let s = r.evaluate(t)
                  , l = r.evaluate(n);
                if (!on.equal(s, l, o)) {
                    if (on.lessThan(s, l, o) || ds(s))
                        return a ? -1 : 1;
                    if (on.greaterThan(s, l, o) || ds(l))
                        return a ? 1 : -1;
                    throw new Error("Invalid comparison result.")
                }
            }
            return this.collection.compareItems(t, n)
        }
        )
    }
}
  , $3 = class {
    constructor(e, t, n) {
        this.expression = e,
        this.direction = t,
        this.collation = n
    }
}
  , j3 = class extends Ur {
    constructor(e, t, n) {
        super(),
        this.childPlan = e,
        this.offsetExpression = t,
        this.limitExpression = n
    }
    inspect() {
        var e, t;
        return {
            label: `SliceItemsPlan(LIMIT ${((e = this.limitExpression) == null ? void 0 : e.stringify()) ?? "Infinity"}, OFFSET ${((t = this.offsetExpression) == null ? void 0 : t.stringify()) ?? "0"}) ${Wr(this.executionTime - this.childPlan.executionTime, this.executionTime)} ${zn(this.itemCount)}`,
            nodes: [this.childPlan.inspect()]
        }
    }
    getOffset() {
        var e;
        let t = (e = this.offsetExpression) == null ? void 0 : e.evaluate();
        if (!(ds(t) || t.type !== "number"))
            return t.value
    }
    getLimit() {
        var e;
        let t = (e = this.limitExpression) == null ? void 0 : e.evaluate();
        if (!(ds(t) || t.type !== "number"))
            return t.value
    }
    async _execute() {
        let e = await this.childPlan.execute()
          , t = this.getOffset() ?? 0
          , n = this.getLimit() ?? 1 / 0;
        return e.slice(t, t + n)
    }
}
  , su = class extends Map {
    constructor(e=[]) {
        super();
        for (let t of e)
            this.set(t.pointer, t)
    }
    union(e) {
        let t = new su;
        for (let[n,r] of this)
            t.set(n, r);
        for (let[n,r] of e)
            t.set(n, r);
        return t
    }
    intersection(e) {
        let t = new su;
        for (let[n,r] of this)
            e.has(n) && t.set(n, r);
        return t
    }
    items() {
        return [...this.values()]
    }
}
  , W3 = class {
    constructor(e) {
        this.collection = e,
        R(this, "cache", new Map)
    }
    resolve(e) {
        let t = this.cache.get(e);
        if (t)
            return t;
        let n = this.collection.resolveRichText(e);
        return this.cache.set(e, n),
        n
    }
}
;
function U3(e, t) {
    var n;
    if (yu(e)) {
        let r = QM(e)
          , i = (n = r?.[t.name]) == null ? void 0 : n.title;
        if (i)
            return `"${t.name}" /* ${i} */`
    }
    return `"${t.name}"`
}
function X3(e) {
    return typeof e.value == "string" ? `'${e.value}'` : e.value
}
function Y3(e, t) {
    return `${t.functionName}(${t.arguments.map(n=>$t(e, n)).join(", ")})`
}
function G3(e, t) {
    let n = "CASE";
    t.value && (n += ` ${$t(e, t.value)}`);
    for (let r of t.conditions)
        n += ` WHEN ${$t(e, r.when)} THEN ${$t(e, r.then)}`;
    return t.else && (n += ` ELSE ${t.else}`),
    n += " END",
    n
}
function K3(e, t) {
    let n = $t(e, t.value);
    return `${t.operator.toUpperCase()} ${n}`
}
function q3(e, t) {
    let n = $t(e, t.left)
      , r = $t(e, t.right)
      , i = t.operator.toUpperCase();
    return `${n} ${i} ${r}`
}
function Q3(e, t) {
    return `CAST(${$t(e, t.value)} as ${t.dataType})`
}
function $t(e, t) {
    switch (t.type) {
    case "Identifier":
        return U3(e, t);
    case "LiteralValue":
        return X3(t);
    case "FunctionCall":
        return Y3(e, t);
    case "Case":
        return G3(e, t);
    case "UnaryOperation":
        return K3(e, t);
    case "BinaryOperation":
        return q3(e, t);
    case "TypeCast":
        return Q3(e, t);
    default:
        Wt(t)
    }
}
function Z3(e) {
    let t = "";
    return e.split(/\s+/u).forEach(r=>{
        r !== "" && (["SELECT", "FROM", "WHERE", "ORDER", "LIMIT", "OFFSET"].includes(r) ? t += `
${r}` : ["AND", "OR"].includes(r) ? t += `
	${r}` : t += ` ${r}`)
    }
    ),
    t.trim()
}
function J3(e) {
    let t = "";
    return t += `SELECT ${e.select.map(n=>{
        letr = $t(e.from.data, n);
        return n.alias ? `${r} AS ${n.alias}` : r
    }
    ).join(", ")}`,
    yu(e.from.data) ? t += ` FROM ${e.from.data.displayName}` : t += ` FROM ${e.from.data.displayName}`,
    e.where && (t += ` WHERE ${$t(e.from.data, e.where)}`),
    e.orderBy && (t += ` ORDER BY ${e.orderBy.map(n=>`${$t(e.from.data, n)} ${n.direction ?? "asc"}`).join(", ")}`),
    e.limit && (t += ` LIMIT ${$t(e.from.data, e.limit)}`),
    e.offset && (t += ` OFFSET ${$t(e.from.data, e.offset)}`),
    Z3(t)
}
var e4 = a3("query-engine");
function t4({data: e}, t) {
    if (yu(e)) {
        for (; t; ) {
            let n = e.collectionByLocaleId[t.id];
            if (n)
                return n;
            t = t.fallback
        }
        return e.collectionByLocaleId.default
    }
    throw new Error("Unsupported collection type")
}
var n4 = class {
    async query(e, t) {
        let n = t4(e.from, t)
          , r = new W3(n)
          , i = this.createQueryPlan(n, r, e)
          , o = await this.executeQueryPlan(n, r, e, i);
        return e4.debug(`Query:
${J3(e)}

${(0,
        o3.default)(i.inspect())}`),
        o
    }
    createQueryPlan(e, t, n) {
        var r;
        let i = new gC(e);
        if (n.where) {
            let l = gt.from(n.where, e.schema);
            i = Hp(e, l)
        }
        let o = (r = n.orderBy) == null ? void 0 : r.map(l=>new $3(gt.from(l, e.schema),l.direction ?? "asc",{
            type: 0
        }));
        i = new N3(i,o ?? [],e);
        let a;
        n.offset && (a = gt.from(n.offset, e.schema));
        let s;
        return n.limit && (s = gt.from(n.limit, e.schema)),
        (a || s) && (i = new j3(i,a,s)),
        n.select.length > 0 && (i = new z3(i,e,t,n.select)),
        i
    }
    async executeQueryPlan(e, t, n, r) {
        let i = await r.execute();
        return Promise.all(i.map(async o=>{
            let a = {};
            for (let s of n.select) {
                let l = gt.from(s, e.schema)
                  , c = r4(s)
                  , u = l.evaluate(o);
                a[c] = await i4(t, u)
            }
            return a
        }
        ))
    }
}
;
function r4(e) {
    if (e.alias)
        return e.alias;
    if (e.type === "Identifier")
        return e.name;
    throw new Error("Can't serialize expression")
}
async function i4(e, t) {
    return ds(t) ? null : t.type === "richtext" ? e.resolve(t.value) : t.value
}
function Hp(e, t) {
    if (t instanceof wi) {
        let n = t.operandExpressions.map(r=>Hp(e, r));
        return new B3(n)
    }
    if (t instanceof ls) {
        let n = t.operandExpressions.map(r=>Hp(e, r));
        return new V3(n)
    }
    return o4(e, t) ?? s4(e, t)
}
function o4(e, t) {
    var n, r;
    if (t instanceof Bn)
        return Rp(e, t);
    if (t instanceof Ps)
        return a4(e, t);
    if (t instanceof tt && ((n = t.definition) == null ? void 0 : n.type) === "boolean") {
        let i = Ee.fromBoolean(!0)
          , o = new Io(t,i);
        return Rp(e, o)
    }
    if (t instanceof gs && t.valueExpression instanceof tt && ((r = t.valueExpression.definition) == null ? void 0 : r.type) === "boolean") {
        let i = Ee.fromBoolean(!0)
          , o = new Fo(t.valueExpression,i);
        return Rp(e, o)
    }
}
function Rp(e, t) {
    let n = t.leftExpression
      , r = t.rightExpression;
    if (r instanceof Ee)
        for (let i of e.indexes) {
            let o = i.fields[0];
            if (xt(o))
                continue;
            let a = gt.from(o, e.schema);
            if (!n.equals(a))
                continue;
            let s = new Array(i.fields.length - 1).fill({
                type: "All"
            });
            if (t instanceof Io && i.supportedLookupTypes.includes("Equals"))
                return new or(i,[{
                    type: "Equals",
                    value: r.evaluate()
                }, ...s]);
            if (t instanceof Fo && i.supportedLookupTypes.includes("NotEquals"))
                return new or(i,[{
                    type: "NotEquals",
                    value: r.evaluate()
                }, ...s]);
            if (t instanceof bs && i.supportedLookupTypes.includes("LessThan"))
                return new or(i,[{
                    type: "LessThan",
                    value: r.evaluate(),
                    inclusive: !1
                }, ...s]);
            if (t instanceof xs && i.supportedLookupTypes.includes("LessThan"))
                return new or(i,[{
                    type: "LessThan",
                    value: r.evaluate(),
                    inclusive: !0
                }, ...s]);
            if (t instanceof Ss && i.supportedLookupTypes.includes("GreaterThan"))
                return new or(i,[{
                    type: "GreaterThan",
                    value: r.evaluate(),
                    inclusive: !1
                }, ...s]);
            if (t instanceof ws && i.supportedLookupTypes.includes("GreaterThan"))
                return new or(i,[{
                    type: "GreaterThan",
                    value: r.evaluate(),
                    inclusive: !0
                }, ...s])
        }
}
function a4(e, t) {
    if (t.argumentExpressions.length !== 2)
        return;
    let n = t.argumentExpressions[0]
      , r = t.argumentExpressions[1];
    if (!xt(n) && !xt(r) && r instanceof Ee)
        for (let i of e.indexes) {
            let o = i.fields[0];
            if (xt(o))
                continue;
            let a = gt.from(o, e.schema);
            if (!n.equals(a))
                continue;
            let s = new Array(i.fields.length - 1).fill({
                type: "All"
            });
            if (t instanceof bu && i.supportedLookupTypes.includes("Contains"))
                return new or(i,[{
                    type: "Contains",
                    value: r.evaluate()
                }, ...s]);
            if (t instanceof xu && i.supportedLookupTypes.includes("StartsWith"))
                return new or(i,[{
                    type: "StartsWith",
                    value: r.evaluate()
                }, ...s]);
            if (t instanceof Su && i.supportedLookupTypes.includes("EndsWith"))
                return new or(i,[{
                    type: "EndsWith",
                    value: r.evaluate()
                }, ...s])
        }
}
function s4(e, t) {
    let n = new gC(e);
    return new H3(n,t)
}
var l4 = class {
    constructor() {
        R(this, "entries", new Map)
    }
    set(e, t, n, r) {
        let i = this.entries.get(e);
        switch (t) {
        case "transformTemplate":
            {
                le(typeof n == "string", `transformTemplate must be a string, received: ${n}`),
                i ? i.transformTemplate = n : this.entries.set(e, {
                    transformTemplate: n
                });
                break
            }
        case "initial":
        case "animate":
            {
                le(typeof n == "object", `${t} must be a valid object, received: ${n}`),
                i ? (i[t] = n,
                i.variantHash || (i.variantHash = r)) : this.entries.set(e, {
                    [t]: n,
                    variantHash: r
                });
                break
            }
        default:
            break
        }
    }
    clear() {
        this.entries.clear()
    }
    toObject() {
        return Object.fromEntries(this.entries)
    }
}
  , yC = new l4
  , f$ = (e,t,n,r)=>(Nn() || yC.set(t, e, n, r),
n)
  , c4 = "__Appear_Animation_Transform__"
  , d$ = (e,t)=>{
    if (!Nn()) {
        let n = t?.({}, c4);
        if (n === void 0)
            return t;
        yC.set(e, "transformTemplate", n)
    }
    return t
}
  , h$ = "data-framer-appear-id"
  , p$ = "data-framer-appear-animation";
function u4(e, t, n) {
    return b.useCallback(r=>{
        var i, o, a;
        return n ? e ? t ? Object.assign({}, (i = n[e]) == null ? void 0 : i[r], (o = n[t]) == null ? void 0 : o[r]) : ((a = n[e]) == null ? void 0 : a[r]) || {} : {} : {}
    }
    , [e, t, n])
}
function f4(e) {
    for (let[t,n] of Object.entries(e))
        if (jt.matchMedia(n).matches)
            return t
}
function y$(e, t, n=!0) {
    let r = M(Uw)
      , i = O(Nn() ? f4(t) ?? e : e)
      , o = O(n && r ? e : i.current)
      , a = mu()
      , s = Wy()
      , l = ue(c=>{
        (c !== i.current || c !== o.current) && s(()=>{
            i.current = o.current = c,
            Fi(()=>{
                a()
            }
            )
        }
        )
    }
    , [s, a]);
    return xw(()=>{
        !n || r !== !0 || l(i.current)
    }
    , []),
    $(()=>{
        let c = [];
        for (let[u,f] of Object.entries(t)) {
            let d = jt.matchMedia(f)
              , h = g=>{
                g.matches && l(u)
            }
            ;
            d4(d, h),
            c.push([d, h])
        }
        return ()=>c.forEach(([u,f])=>h4(u, f))
    }
    , [t, l]),
    [i.current, o.current]
}
function d4(e, t) {
    e.addEventListener ? e.addEventListener("change", t) : e.addListener(t)
}
function h4(e, t) {
    e.removeEventListener ? e.removeEventListener("change", t) : e.removeListener(t)
}
function gm() {
    return Oe.current() === "CANVAS"
}
function xS(e, t) {
    if (e[t])
        return e[t];
    if (!(t in e))
        return e.default
}
function p4(e, t) {
    if (gm())
        return;
    let r = b.useRef(!0)
      , i = b.useRef(t);
    tA((o,a)=>{
        let s = o && !a;
        if (!r.current && s) {
            let l = xS(i.current, e);
            l && l()
        }
        r.current = s
    }
    , []),
    b.useEffect(()=>{
        if (r.current) {
            let o = xS(i.current, e);
            o && o()
        }
    }
    , [e])
}
function k$(e) {
    p4("default", {
        default: e
    })
}
var m4 = class {
    constructor(e) {
        this.queryEngine = e,
        R(this, "cache", new Map)
    }
    get(e, t) {
        let n = g4(e, t)
          , r = this.cache.get(n);
        if (r)
            return r;
        let i = ()=>this.queryEngine.query(e, t)
          , o = new Rs(i);
        return this.cache.set(n, o),
        o
    }
}
  , SS = new WeakMap;
function v4(e) {
    let t = SS.get(e);
    if (t)
        return t;
    let n = Math.random().toString(16).slice(2);
    return SS.set(e, n),
    n
}
function g4({from: e, ...t}, n) {
    let r = v4(e.data)
      , i = n?.id ?? "default";
    return r + JSON.stringify(t) + i
}
function ym(e) {
    throw e
}
var Fs = class {
    constructor() {
        R(this, "map1", new WeakMap)
    }
    get(e, t) {
        let n = this.map1.get(e);
        return n?.get(t)
    }
    set(e, t, n) {
        let r = this.map1.get(e) ?? new WeakMap;
        return this.map1.set(e, r),
        r.set(t, n)
    }
}
;
function y4({data: e}) {
    let {activeLocale: t} = Yp();
    if (s3(e))
        return e;
    if (l3(e)) {
        let n = e.preload(t);
        return n && ym(n),
        e.read(t)
    }
    throw new Error("Unsupported collection module")
}
var wS = new WeakMap;
function b4(e) {
    let t = wS.get(e);
    if (t)
        return t;
    let n = e.map((r,i)=>({
        ...r,
        index: i
    }));
    return wS.set(e, n),
    n
}
var CS = new Fs;
function x4(e, t) {
    if (!t)
        return e;
    let n = CS.get(e, t);
    if (n)
        return n;
    let r = e.filter(i=>yt(t, {
        resolveIdentifier(o) {
            return i[o]
        }
    }));
    return CS.set(e, t, r),
    r
}
var kS = new Fs;
function S4(e, t) {
    if (!t)
        return e;
    let n = kS.get(e, t);
    if (n)
        return n;
    let r = [...e].sort((i,o)=>{
        let a = 0;
        for (let s of t) {
            let l = yt(s, {
                resolveIdentifier(u) {
                    return i[u]
                }
            })
              , c = yt(s, {
                resolveIdentifier(u) {
                    return o[u]
                }
            });
            if (fe(l) && fe(c) && (a = l - c),
            ne(l) && ne(c) && (a = l.localeCompare(c, "en")),
            a !== 0)
                return s.direction === "desc" ? -a : a
        }
        return fe(i.index) && fe(o.index) ? i.index - o.index : 0
    }
    );
    return kS.set(e, t, r),
    r
}
var TS = new Fs;
function w4(e, t) {
    if (!t)
        return e;
    let n = TS.get(e, t);
    if (n)
        return n;
    let r = yt(t, {
        resolveIdentifier() {
            throw new Error("Can't resolve identifier")
        }
    })
      , i = fe(r) ? e.slice(r) : e;
    return TS.set(e, t, i),
    i
}
var ES = new Fs;
function C4(e, t) {
    if (!t)
        return e;
    let n = ES.get(e, t);
    if (n)
        return n;
    let r = yt(t, {
        resolveIdentifier() {
            throw new Error("Can't resolve identifier")
        }
    })
      , i = fe(r) ? e.slice(0, r) : e;
    return ES.set(e, t, i),
    i
}
var RS = new Fs;
function k4(e, t) {
    let n = RS.get(e, t);
    if (n)
        return n;
    let r = T4(t, e);
    r && ym(r);
    let i = e.map(o=>{
        let a = {};
        for (let s of t) {
            let l = s.alias ?? O4(s);
            a[l] = yt(s, {
                resolveIdentifier(c) {
                    let u = o[c];
                    return Rs.is(u) ? u.read() : u
                }
            })
        }
        return a
    }
    );
    return RS.set(e, t, i),
    i
}
function T4(e, t) {
    let n = [];
    for (let i of e)
        Dn(n, i);
    if (n.length === 0)
        return;
    let r = [];
    for (let i of t)
        for (let o of n) {
            let a = i[o];
            if (!Rs.is(a))
                continue;
            let s = a.preload();
            s && r.push(s)
        }
    if (r.length !== 0)
        return Promise.all(r)
}
function Dn(e, t) {
    if (t.type === "Identifier" && e.push(t.name),
    t.type === "FunctionCall")
        for (let n of t.arguments)
            Dn(e, n);
    if (t.type === "Case") {
        t.value && Dn(e, t.value);
        for (let n of t.conditions)
            Dn(e, n.when),
            Dn(e, n.then);
        t.else && Dn(e, t.else)
    }
    t.type === "UnaryOperation" && Dn(e, t.value),
    t.type === "BinaryOperation" && (Dn(e, t.left),
    Dn(e, t.right)),
    t.type === "TypeCast" && Dn(e, t.value)
}
var E4 = new n4
  , R4 = new m4(E4);
function P4(e) {
    let {activeLocale: t} = Yp()
      , n = R4.get(e, t)
      , r = n.preload();
    return r && ym(r),
    n.read()
}
function P$(e) {
    if (yu(e.from.data))
        return P4(e);
    let t = O();
    t.current && Me(t.current, e) ? e = t.current : t.current = e;
    let n = y4(e.from);
    return n = b4(n),
    n = x4(n, e.where),
    n = S4(n, e.orderBy),
    n = w4(n, e.offset),
    n = C4(n, e.limit),
    n = k4(n, e.select),
    n
}
function yt(e, t) {
    switch (e.type) {
    case "Identifier":
        return t.resolveIdentifier(e.name);
    case "LiteralValue":
        return e.value;
    case "FunctionCall":
        return I4(e, t);
    case "Case":
        return F4(e, t);
    case "UnaryOperation":
        return _4(e, t);
    case "BinaryOperation":
        return L4(e, t);
    case "TypeCast":
        return M4(e, t);
    default:
        throw new Error(`Unsupported expression: ${JSON.stringify(e)}`)
    }
}
function I4(e, t) {
    function n(r) {
        let i = e.arguments[r];
        if (i)
            return yt(i, t)
    }
    switch (e.functionName) {
    case "CONTAINS":
        {
            let r = n(0)
              , i = n(1);
            return ne(r) && ne(i) ? r.toLowerCase().includes(i.toLowerCase()) : !1
        }
    case "STARTS_WITH":
        {
            let r = n(0)
              , i = n(1);
            return ne(r) && ne(i) ? r.toLowerCase().startsWith(i.toLowerCase()) : !1
        }
    case "ENDS_WITH":
        {
            let r = n(0)
              , i = n(1);
            return ne(r) && ne(i) ? r.toLowerCase().endsWith(i.toLowerCase()) : !1
        }
    default:
        throw new Error(`Unsupported function: ${e.functionName}`)
    }
}
function F4(e, t) {
    let n = e.value && yt(e.value, t);
    for (let r of e.conditions) {
        let i = yt(r.when, t);
        if (e.value ? Np(i, n) : i)
            return yt(r.then, t)
    }
    if (e.else)
        return yt(e.else, t)
}
function _4(e, t) {
    let n = yt(e.value, t);
    switch (e.operator) {
    case "not":
        return !n;
    default:
        throw new Error(`Unsupported unary operation: ${e.operator}`)
    }
}
function L4(e, t) {
    let n = yt(e.left, t)
      , r = yt(e.right, t);
    switch (e.operator) {
    case "and":
        return !!(n && r);
    case "or":
        return !!(n || r);
    case "==":
        return Np(n, r);
    case "!=":
        return !Np(n, r);
    case "<":
        return fe(n) && fe(r) || nn(n) && nn(r) ? n < r : !1;
    case "<=":
        return fe(n) && fe(r) || nn(n) && nn(r) ? n <= r : !1;
    case ">":
        return fe(n) && fe(r) || nn(n) && nn(r) ? n > r : !1;
    case ">=":
        return fe(n) && fe(r) || nn(n) && nn(r) ? n >= r : !1;
    default:
        throw new Error(`Unsupported binary operation: ${e.operator}`)
    }
}
function M4(e, t) {
    let n = yt(e.value, t);
    switch (e.dataType) {
    case "BOOLEAN":
        return !!n;
    case "NUMBER":
        {
            if (fe(n) && isFinite(n))
                return n;
            if (ne(n)) {
                let r = parseFloat(n);
                if (isFinite(r))
                    return r
            }
            return 0
        }
    case "DATE":
        return n instanceof Date ? n : !ne(n) && !fe(n) ? void 0 : new Date(n);
    case "STRING":
        return String(n);
    default:
        throw new Error(`Unsupported type cast: ${e.dataType}`)
    }
}
function O4(e) {
    switch (e.type) {
    case "Identifier":
        return e.name;
    default:
        throw new Error(`Can't stringify expression: ${JSON.stringify(e)}`)
    }
}
function Np(e, t) {
    return e == null && t == null ? !0 : ne(e) && ne(t) ? e.toLowerCase() === t.toLowerCase() : nn(e) && nn(t) ? e.getTime() === t.getTime() : e === t
}
function I$(e) {
    let n = Object.entries(e).filter(([,r])=>!(xt(r) || Be(r))).map(([r,i])=>({
        type: "BinaryOperation",
        operator: "==",
        left: {
            type: "TypeCast",
            value: {
                type: "Identifier",
                name: r
            },
            dataType: "STRING"
        },
        right: {
            type: "LiteralValue",
            value: String(i)
        }
    }));
    return n.length === 0 ? {
        type: "LiteralValue",
        value: !1
    } : n.reduce((r,i)=>({
        type: "BinaryOperation",
        operator: "and",
        left: r,
        right: i
    }))
}
function D4(e, t) {
    return `${e}-${t}`
}
function A4(e, t) {
    let r = e.indexOf(t) + 1;
    r >= e.length && (r = 0);
    let i = e[r];
    return le(i !== void 0, "nextVariant should be defined"),
    i
}
function V4(e, t) {
    if (e) {
        if (t) {
            let n = e[t];
            if (n)
                return n
        }
        return e.default
    }
}
function PS(e, t, n) {
    let {hover: r, pressed: i} = e || {};
    if (i && n)
        return "pressed";
    if (r && t)
        return "hover"
}
function B4(e, t) {
    let n = t[e];
    return n || `framer-v-${e}`
}
function IS(e, t, n) {
    return e && n.has(e) ? e : t
}
var z4 = Symbol("cycle");
function _$({variant: e, defaultVariant: t, transitions: n, enabledGestures: r, cycleOrder: i=[], variantProps: o={}, variantClassNames: a={}}) {
    let s = mu()
      , l = Hn(()=>new Set(i))
      , c = b.useRef({
        isHovered: !1,
        isPressed: !1,
        baseVariant: IS(e, t, l),
        lastVariant: e,
        gestureVariant: void 0,
        defaultVariant: t,
        enabledGestures: r,
        cycleOrder: i,
        transitions: n
    })
      , u = b.useCallback(x=>{
        let {isHovered: C, isPressed: w, enabledGestures: k, defaultVariant: E} = c.current
          , I = IS(x, E, l)
          , P = PS(k?.[I], C, w)
          , z = P ? D4(I, P) : void 0;
        return [I, z]
    }
    , [l])
      , f = b.useCallback(({isHovered: x, isPressed: C})=>{
        x !== void 0 && (c.current.isHovered = x),
        C !== void 0 && (c.current.isPressed = C);
        let {baseVariant: w, gestureVariant: k, defaultVariant: E} = c.current
          , [I,P] = u(w);
        (I !== w || P !== k) && (c.current.baseVariant = I || E,
        c.current.gestureVariant = P,
        s())
    }
    , [u, s])
      , d = b.useCallback(x=>{
        let {defaultVariant: C, cycleOrder: w, baseVariant: k, gestureVariant: E} = c.current
          , I = x === z4 ? A4(w || [], k || C) : x
          , [P,z] = u(I);
        (P !== k || z !== E) && (c.current.baseVariant = P || C,
        c.current.gestureVariant = z,
        s())
    }
    , [u, s]);
    if (e !== c.current.lastVariant) {
        let[x,C] = u(e);
        c.current.lastVariant = x,
        (x !== c.current.baseVariant || C !== c.current.gestureVariant) && (c.current.baseVariant = x,
        c.current.gestureVariant = C)
    }
    let {baseVariant: h, gestureVariant: g, defaultVariant: y, enabledGestures: S, isHovered: m, isPressed: p} = c.current
      , v = u4(c.current.baseVariant, c.current.gestureVariant, o);
    return b.useMemo(()=>{
        let x = [];
        return h !== y && x.push(h),
        g && x.push(g),
        {
            variants: x,
            baseVariant: h,
            gestureVariant: g,
            transition: V4(c.current.transitions, h),
            setVariant: d,
            setGestureState: f,
            addVariantProps: v,
            classNames: lm(B4(h, a), PS(S?.[h], m, p))
        }
    }
    , [h, g, m, p, v, d, y, S, f, a])
}
function H4(e) {
    var t, n;
    let r = e * Math.PI / 180
      , i = {
        x: -Math.sin(r) * 100,
        y: Math.cos(r) * 100
    }
      , o = et(i.x, i.y)
      , a = Hr(et(.5, .5), o)
      , s = eu.points({
        x: 0,
        y: 0,
        width: 1,
        height: 1
    })
      , l = s.map(y=>({
        point: y,
        distance: et.distance(o, y)
    })).sort((y,S)=>y.distance - S.distance)
      , c = (t = l[0]) == null ? void 0 : t.point
      , u = (n = l[1]) == null ? void 0 : n.point;
    le(c && u, "linearGradientLine: Must have 2 closest points.");
    let[f,d] = s.filter(y=>!et.isEqual(y, c) && !et.isEqual(y, u));
    le(f && d, "linearGradientLine: Must have 2 opposing points.");
    let h = Hr.intersection(a, Hr(c, u))
      , g = Hr.intersection(a, Hr(f, d));
    return le(h && g, "linearGradientLine: Must have a start and end point."),
    Hr(h, g)
}
function N4(e, t) {
    var n, r;
    let i = H4(e.angle)
      , o = Es(e)
      , a = ((n = o[0]) == null ? void 0 : n.position) ?? 0
      , s = ((r = o[o.length - 1]) == null ? void 0 : r.position) ?? 1
      , l = Hr.pointAtPercentDistance(i, a)
      , c = Hr.pointAtPercentDistance(i, s)
      , u = Hi([a, s], [0, 1]);
    return {
        id: `id${t}g${ms.hash(e)}`,
        x1: l.x,
        y1: l.y,
        x2: c.x,
        y2: c.y,
        stops: o.map(f=>({
            color: f.value,
            alpha: rm.getAlpha(f.value) * e.alpha,
            position: u(f.position)
        }))
    }
}
function $4(e, t) {
    return {
        id: `id${t}g${vs.hash(e)}`,
        widthFactor: e.widthFactor,
        heightFactor: e.heightFactor,
        centerAnchorX: e.centerAnchorX,
        centerAnchorY: e.centerAnchorY,
        stops: Es(e).map(n=>({
            color: n.value,
            alpha: rm.getAlpha(n.value) * e.alpha,
            position: n.position
        }))
    }
}
function bC(e) {
    if (!ne(e) || e.charAt(e.length - 1) !== "%")
        return !1;
    let n = e.slice(0, -1)
      , r = parseFloat(n);
    return fe(r)
}
function xC(e) {
    let t = e.slice(0, -1)
      , n = parseFloat(t);
    return fe(n) ? n : 50
}
function FS(e) {
    return bC(e) ? xC(e) / 100 : e === "left" ? 0 : e === "right" ? 1 : .5
}
function _S(e) {
    return bC(e) ? xC(e) / 100 : e === "top" ? 0 : e === "bottom" ? 1 : .5
}
function j4(e, t, n, r) {
    if (e = He.get(e, "#09F"),
    !ar.isImageObject(e) || !e.pixelWidth || !e.pixelHeight)
        return;
    let i = e.pixelWidth, o = e.pixelHeight, a, {fit: s} = e, l = 1, c = 1, u = 0, f = 0;
    if (s === "fill" || s === "fit" || s === "tile" || !s) {
        let h = 1
          , g = 1
          , y = i / o
          , S = t.height * y
          , m = t.width / y
          , p = S / t.width
          , v = m / t.height;
        if (s === "tile") {
            e.backgroundSize ?? (e.backgroundSize = 1),
            l = Math.round(e.backgroundSize * (i / 2)),
            c = Math.round(e.backgroundSize * (o / 2));
            let x = t.x ?? 0
              , C = t.y ?? 0
              , w = 0
              , k = 0;
            r && (w = x,
            k = C),
            u = (t.width - l) * FS(e.positionX) + w,
            f = (t.height - c) * _S(e.positionY) + k,
            a = `translate(${u + x}, ${f + C})`
        } else
            (s === "fill" || !s ? v > p : v < p) ? (g = v,
            f = (1 - v) * _S(e.positionY)) : (h = p,
            u = (1 - p) * FS(e.positionX)),
            a = `translate(${u}, ${f}) scale(${h}, ${g})`
    }
    return {
        id: `id${n}g-fillImage`,
        path: e.src ?? "",
        transform: a,
        width: l,
        height: c,
        offsetX: u,
        offsetY: f
    }
}
var W4 = b.createContext(void 0)
  , U4 = ()=>b.useContext(W4)
  , X4 = "framer/asset-reference,";
function Y4(e) {
    return e.startsWith(`data:${X4}`)
}
function G4(e, t) {
    if (/^\w+:/.test(e) && !Y4(e))
        return e;
    typeof t != "number" ? t = void 0 : t <= 512 ? t = 512 : t <= 1024 ? t = 1024 : t <= 2048 ? t = 2048 : t = 4096;
    let n = Oe.current() === "EXPORT";
    return Ge.assetResolver(e, {
        pixelSize: t,
        isExport: n
    }) ?? ""
}
var K4 = ({id: e, path: t, transform: n, repeat: r, width: i, height: o, offsetX: a, offsetY: s})=>{
    let l = G4(t);
    return T("pattern", {
        id: e,
        width: r ? i : "100%",
        height: r ? o : "100%",
        patternContentUnits: r ? void 0 : "objectBoundingBox",
        patternUnits: r ? "userSpaceOnUse" : void 0,
        x: r ? a : void 0,
        y: r ? s : void 0,
        children: T("image", {
            width: r ? i : 1,
            height: r ? o : 1,
            href: l,
            preserveAspectRatio: "none",
            transform: r ? void 0 : n,
            x: r ? 0 : void 0,
            y: r ? 0 : void 0
        }, l)
    })
}
  , LS = Nn()
  , q4 = class {
    constructor(e, t, n, r, i=0) {
        this.id = e,
        this.svg = t,
        this.innerHTML = n,
        this.viewBox = r,
        this.count = i
    }
}
  , Q4 = class {
    constructor() {
        R(this, "entries", new Map)
    }
    debugGetEntries() {
        return this.entries
    }
    subscribe(e, t, n) {
        if (!e || e === "")
            return "";
        let r = this.entries.get(e);
        if (!r) {
            n || (n = "svg" + String(Lw(e)) + "_" + String(e.length));
            let i = e, o, a = Z4(e);
            a && (t && J4(a, n),
            a.id = n,
            o = r5(a),
            i = a.outerHTML),
            r = this.createDOMElementFor(i, n, o),
            this.entries.set(e, r)
        }
        return r.count += 1,
        r.innerHTML
    }
    getViewBox(e) {
        if (!e || e === "")
            return;
        let t = this.entries.get(e);
        return t?.viewBox
    }
    unsubscribe(e) {
        if (!e || e === "")
            return;
        let t = this.entries.get(e);
        t && (t.count -= 1,
        !(t.count > 0) && setTimeout(()=>this.maybeRemoveEntry(e), 5e3))
    }
    maybeRemoveEntry(e) {
        let t = this.entries.get(e);
        t && (t.count > 0 || (this.entries.delete(e),
        this.removeDOMElement(t)))
    }
    removeDOMElement(e) {
        let t = "container_" + e.id;
        if (LS) {
            let n = document?.querySelector("#" + t);
            n?.remove()
        }
    }
    createDOMElementFor(e, t, n) {
        let r = "container_" + t;
        if (LS) {
            let s = document.querySelector("#svg-templates");
            if (s || (s = document.createElement("div"),
            s.id = "svg-templates",
            s.style.position = "absolute",
            s.style.top = "0",
            s.style.left = "0",
            s.style.width = "0",
            s.style.height = "0",
            s.style.overflow = "hidden",
            document.body.appendChild(s)),
            !document.querySelector("#" + r)) {
                let l = document.createElement("div");
                l.id = r,
                l.innerHTML = e,
                l.firstElementChild && (l.firstElementChild.id = t),
                s.appendChild(l)
            }
        }
        let i = n ? `0 0 ${n.width} ${n.height}` : void 0
          , a = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="width: 100%; height: 100%"${i ? ` viewBox="${i}"` : ""}><use href="#${t}"></use></svg>`;
        return new q4(t,e,a,i)
    }
    clear() {
        this.entries.clear()
    }
    generateTemplates() {
        let e = []
          , t = "position: absolute; overflow: hidden; top: 0; left: 0; width: 0; height: 0";
        e.push(`<div id="svg-templates" style="${t}">`);
        for (let n of this.entries.values()) {
            let r = "container_" + n.id;
            e.push(`  <div id="${r}">`),
            e.push(`    ${n.svg}`),
            e.push("  </div>")
        }
        return e.push("</div>"),
        e.join(`
`)
    }
}
  , xo = new Q4;
function Z4(e) {
    if (typeof DOMParser > "u") {
        console.warn("unable to find DOMParser");
        return
    }
    try {
        let r = new DOMParser().parseFromString(e, "text/html").getElementsByTagName("svg")[0];
        if (!r)
            throw Error("no svg element found");
        return r
    } catch {
        return
    }
}
function J4(e, t) {
    let n = e5(t);
    SC(e, n)
}
function e5(e) {
    return e.replace(/[^\w\-:.]|^[^a-z]+/gi, "")
}
function SC(e, t) {
    t5(e, t),
    Array.from(e.children).forEach(r=>{
        SC(r, t)
    }
    )
}
function t5(e, t) {
    e.getAttributeNames().forEach(r=>{
        let i = e.getAttribute(r);
        if (!i)
            return;
        if (r === "id" && e.setAttribute(r, `${t}_${i}`),
        r === "href" || r === "xlink:href") {
            let[a,s] = i.split("#");
            if (a)
                return;
            e.setAttribute(r, `#${t}_${s}`);
            return
        }
        let o = "url(#";
        if (i.includes(o)) {
            let a = i.replace(o, `${o}${t}_`);
            e.setAttribute(r, a)
        }
    }
    )
}
var n5 = {
    cm: 96 / 2.54,
    mm: 96 / 2.54 / 10,
    Q: 96 / 2.54 / 40,
    in: 96,
    pc: 96 / 6,
    pt: 96 / 72,
    px: 1,
    em: 16,
    ex: 8,
    ch: 8,
    rem: 16
};
function MS(e) {
    var t;
    if (!e)
        return;
    let n = /(-?[\d.]+)([a-z%]*)/.exec(e);
    if (!(n?.[1] === void 0 || n?.[2] === void 0) && !((t = n[2]) != null && t.startsWith("%")))
        return Math.round(parseFloat(n[1]) * (n5[n[2]] || 1))
}
function r5(e) {
    let t = MS(e.getAttribute("width"))
      , n = MS(e.getAttribute("height"));
    if (!(typeof t != "number" || typeof n != "number") && !(t <= 0 || n <= 0))
        return {
            width: t,
            height: n
        }
}
function W$(e) {
    let t = ks()
      , n = Lo(e)
      , r = b.useRef(null)
      , i = U4();
    return vu(e, r),
    T(c5, {
        ...e,
        innerRef: r,
        parentSize: t,
        layoutId: n,
        providedWindow: i
    })
}
var i5 = 5e4;
function o5(e) {
    return e.indexOf("image") >= 0
}
function a5(e) {
    return e.indexOf("var(--") >= 0
}
function s5(e) {
    return !!(e.borderRadius || e.borderBottomLeftRadius || e.borderBottomRightRadius || e.borderTopLeftRadius || e.borderTopRightRadius)
}
function OS(e, t) {
    var n, r;
    let i = e.current;
    if (!i)
        return;
    let o = t.providedWindow ?? jt
      , a = i.firstElementChild;
    if (!a || !(a instanceof o.SVGSVGElement))
        return;
    if (!a.getAttribute("viewBox")) {
        let h = xo.getViewBox(t.svg);
        h && a.setAttribute("viewBox", h)
    }
    let {withExternalLayout: s, parentSize: l} = t;
    if (!s && _o(t) && l !== 1 && l !== 2)
        return;
    let {intrinsicWidth: u, intrinsicHeight: f, _constraints: d} = t;
    ((n = a.viewBox.baseVal) == null ? void 0 : n.width) === 0 && ((r = a.viewBox.baseVal) == null ? void 0 : r.height) === 0 && U(u) && U(f) && a.setAttribute("viewBox", `0 0 ${u} ${f}`),
    d && d.aspectRatio ? a.setAttribute("preserveAspectRatio", "") : a.setAttribute("preserveAspectRatio", "none"),
    a.setAttribute("width", "100%"),
    a.setAttribute("height", "100%")
}
function l5() {
    return b.useInsertionEffect(()=>{
        Ts()
    }
    , []),
    null
}
var c5 = (()=>{
    var e;
    return e = class extends Ro {
        constructor() {
            super(...arguments),
            R(this, "container", b.createRef()),
            R(this, "svgElement", null),
            R(this, "setSVGElement", t=>{
                this.svgElement = t,
                this.setLayerElement(t)
            }
            ),
            R(this, "previouslyRenderedSVG", ""),
            R(this, "unmountedSVG", "")
        }
        static frame(t) {
            return us(t, t.parentSize || 0)
        }
        get frame() {
            return us(this.props, this.props.parentSize || 0)
        }
        componentDidMount() {
            if (this.unmountedSVG) {
                let {svgContentId: t} = this.props
                  , n = t ? "svg" + t : null;
                xo.subscribe(this.unmountedSVG, !t, n),
                this.previouslyRenderedSVG = this.unmountedSVG
            }
            this.props.svgContentId || OS(this.container, this.props)
        }
        componentWillUnmount() {
            xo.unsubscribe(this.previouslyRenderedSVG),
            this.unmountedSVG = this.previouslyRenderedSVG,
            this.previouslyRenderedSVG = ""
        }
        componentDidUpdate(t) {
            if (super.componentDidUpdate(t),
            this.props.svgContentId)
                return;
            let {fill: n} = this.props;
            ar.isImageObject(n) && ar.isImageObject(t.fill) && n.src !== t.fill.src && _w(this.svgElement, "fill", null, !1),
            OS(this.container, this.props)
        }
        collectLayout(t, n) {
            if (this.props.withExternalLayout) {
                n.width = "100%",
                n.height = "100%",
                n.aspectRatio = "inherit";
                return
            }
            let r = this.frame
              , {rotation: i, intrinsicWidth: o, intrinsicHeight: a, width: s, height: l} = this.props
              , c = He.getNumber(i);
            if (t.opacity = U(this.props.opacity) ? this.props.opacity : 1,
            Oe.hasRestrictions() && r) {
                Object.assign(t, {
                    transform: `translate(${r.x}px, ${r.y}px) rotate(${c.toFixed(4)}deg)`,
                    width: `${r.width}px`,
                    height: `${r.height}px`
                }),
                _o(this.props) && (t.position = "absolute");
                let u = r.width / (o || 1)
                  , f = r.height / (a || 1);
                n.transformOrigin = "top left";
                let {zoom: d, target: h} = Jc;
                if (h === "EXPORT") {
                    let g = d > 1 ? d : 1;
                    n.transform = `scale(${u * g}, ${f * g})`,
                    n.zoom = 1 / g
                } else
                    n.transform = `scale(${u}, ${f})`;
                o && a && (n.width = o,
                n.height = a)
            } else {
                let {left: u, right: f, top: d, bottom: h} = this.props;
                Object.assign(t, {
                    left: u,
                    right: f,
                    top: d,
                    bottom: h,
                    width: s,
                    height: l,
                    rotate: c
                }),
                Object.assign(n, {
                    left: 0,
                    top: 0,
                    bottom: 0,
                    right: 0,
                    position: "absolute"
                })
            }
        }
        render() {
            let {id: t, visible: n, style: r, fill: i, svg: o, intrinsicHeight: a, intrinsicWidth: s, title: l, description: c, layoutId: u, className: f, variants: d, withExternalLayout: h, innerRef: g, svgContentId: y, height: S, opacity: m, width: p, ...v} = this.props;
            if (!h && (!n || !t))
                return null;
            let x = t ?? u ?? "svg"
              , C = this.frame
              , w = C || {
                width: s || 100,
                height: a || 100
            }
              , k = {
                ...r,
                imageRendering: "pixelated",
                flexShrink: 0
            }
              , E = {};
            this.collectLayout(k, E),
            UD(this.props, k),
            am(this.props, k),
            Ro.applyWillChange(this.props, k, !1);
            let I = null;
            if (typeof i == "string" || N.isColorObject(i)) {
                let A = N.isColorObject(i) ? i.initialValue || N.toRgbString(i) : i;
                k.fill = A,
                k.color = A
            } else if (ms.isLinearGradient(i)) {
                let A = i
                  , q = `${encodeURI(t || "")}g${ms.hash(A)}`;
                k.fill = `url(#${q})`;
                let {stops: B, x1: Y, x2: K, y1: Z, y2: Ut} = N4(A, x);
                I = T("svg", {
                    ref: this.setSVGElement,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "100%",
                    height: "100%",
                    style: {
                        position: "absolute"
                    },
                    children: T("linearGradient", {
                        id: q,
                        x1: Y,
                        x2: K,
                        y1: Z,
                        y2: Ut,
                        children: B.map((re,ut)=>T("stop", {
                            offset: re.position,
                            stopColor: re.color,
                            stopOpacity: re.alpha
                        }, ut))
                    })
                })
            } else if (vs.isRadialGradient(i)) {
                let A = i
                  , q = `${encodeURI(t || "")}g${vs.hash(A)}`;
                k.fill = `url(#${q})`;
                let B = $4(A, x);
                I = T("svg", {
                    ref: this.setSVGElement,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "100%",
                    height: "100%",
                    style: {
                        position: "absolute"
                    },
                    children: T("radialGradient", {
                        id: q,
                        cy: A.centerAnchorY,
                        cx: A.centerAnchorX,
                        r: A.widthFactor,
                        children: B.stops.map((Y,K)=>T("stop", {
                            offset: Y.position,
                            stopColor: Y.color,
                            stopOpacity: Y.alpha
                        }, K))
                    })
                })
            } else if (ar.isImageObject(i)) {
                let A = j4(i, w, x);
                A && (k.fill = `url(#${A.id})`,
                I = T("svg", {
                    ref: this.setSVGElement,
                    xmlns: "http://www.w3.org/2000/svg",
                    xmlnsXlink: "http://www.w3.org/1999/xlink",
                    width: "100%",
                    height: "100%",
                    style: {
                        position: "absolute"
                    },
                    children: T("defs", {
                        children: T(K4, {
                            ...A
                        })
                    })
                }))
            }
            let P = {
                "data-framer-component-type": "SVG"
            }
              , z = !C;
            z && Object.assign(P, yw(this.props.center));
            let L = !I && !k.fill && !k.background && !k.backgroundImage && o.length < i5 && !o5(o) && !a5(o)
              , ee = null;
            if (L)
                k.backgroundSize = "100% 100%",
                k.backgroundImage = `url('data:image/svg+xml;utf8,${encodeURIComponent(o)}')`,
                xo.unsubscribe(this.previouslyRenderedSVG),
                this.previouslyRenderedSVG = "";
            else {
                let A = y ? "svg" + y : null
                  , q = xo.subscribe(o, !y, A);
                xo.unsubscribe(this.previouslyRenderedSVG),
                this.previouslyRenderedSVG = o,
                s5(k) && (k.overflow = "hidden"),
                ee = ae(Ne, {
                    children: [I, T("div", {
                        className: "svgContainer",
                        style: E,
                        ref: this.container,
                        dangerouslySetInnerHTML: {
                            __html: q
                        }
                    }, ar.isImageObject(i) ? i.src : "")]
                })
            }
            let H = hu(this.props.as)
              , {href: te, target: G, rel: V, onClick: W} = this.props;
            return ae(H, {
                ...P,
                ...v,
                layoutId: u,
                transformTemplate: z ? pu(this.props.center) : void 0,
                id: t,
                ref: g,
                style: k,
                className: f,
                variants: d,
                tabIndex: this.props.tabIndex,
                role: l || c ? "img" : void 0,
                "aria-label": l,
                "aria-description": c,
                href: te,
                target: G,
                rel: V,
                onClick: W,
                children: [ee, T(l5, {})]
            })
        }
    }
    ,
    R(e, "supportsConstraints", !0),
    R(e, "defaultSVGProps", {
        left: void 0,
        right: void 0,
        top: void 0,
        bottom: void 0,
        style: void 0,
        _constraints: {
            enabled: !0,
            aspectRatio: null
        },
        parentSize: 0,
        rotation: 0,
        visible: !0,
        svg: "",
        shadows: []
    }),
    R(e, "defaultProps", {
        ...Ro.defaultProps,
        ...e.defaultSVGProps
    }),
    e
}
)()
  , u5 = /[&<>'"]/g
  , f5 = e=>e.replace(u5, t=>({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;"
})[t] || t)
  , d5 = /(<([a-z]+)(?:\s+(?!href[\s=])[^=\s]+=(?:'[^']*'|"[^"]*"))*)(?:(\s+href\s*=)(?:'([^']*)'|"([^"]*)"))?((?:\s+[^=\s]+=(?:'[^']*'|"[^"]*"))*>)/gi;
function h5(e, t, n, r) {
    return e.replace(d5, (i,o,a,s,l,c,u)=>{
        var f, d;
        if (a.toLowerCase() !== "a")
            return i;
        let h = l || c
          , g = dm(h.replace(/&amp;/g, "&"));
        if (!g || !g.target)
            return i;
        let y = t(g.target);
        if (!S1(y) || !S1(n))
            return i;
        let S = y.path
          , m = n.path;
        if (!S || !m)
            return i;
        let p = ` data-framer-page-link-target="${g.target}"`
          , v = Wp(y, g.element ?? void 0);
        v && (p += ` data-framer-page-link-element="${g.element}"`);
        let x = aC(h);
        if (!x || ne(x))
            return i;
        cC(n, x, r) && (p += " data-framer-page-link-current");
        let C = S
          , w = Object.assign({}, r, (f = g.collectionItem) == null ? void 0 : f.pathVariables);
        if (Object.keys(w).length > 0 && (C = C.replace(sC, (k,E)=>"" + w[E])),
        (d = g.collectionItem) != null && d.pathVariables) {
            let k = new URLSearchParams(g.collectionItem.pathVariables);
            p += ` data-framer-page-link-path-variables="${k}"`
        }
        return C = US(m, C),
        o + s + `"${f5(C + (v ? `#${v}` : ""))}"` + p + u
    }
    )
}
var p5 = Gt(jp(), 1);
var Co = "CUSTOM;";
function m5(e, t) {
    if (!t)
        return e.substring(0, e.lastIndexOf("."));
    let n = t.font.preferredFamily === "" ? t.font.fontFamily : t.font.preferredFamily
      , r = t.font.preferredSubFamily === "" ? t.font.fontSubFamily : t.font.preferredSubFamily;
    return `${n} ${r}`
}
var v5 = class {
    constructor() {
        R(this, "name", "custom"),
        R(this, "fontFamilies", []),
        R(this, "byFamilyName", new Map),
        R(this, "assetsByFamily", new Map)
    }
    importFonts(e) {
        var t;
        this.fontFamilies.length = 0,
        this.byFamilyName.clear(),
        this.assetsByFamily.clear();
        let n = [];
        for (let r of e) {
            if (!this.isValidCustomFontAsset(r))
                continue;
            let i = m5(r.name, r.properties)
              , o = this.createFontFamily(i)
              , a = {
                family: o,
                selector: `${Co}${i}`,
                variant: this.inferVariantName(i),
                postscriptName: (t = r.properties) == null ? void 0 : t.font.postscriptName,
                file: r.url
            };
            o.fonts.push(a),
            o.owner = r.ownerType === "team" ? "team" : "project",
            this.assetsByFamily.set(i, r),
            n.push(...o.fonts)
        }
        return n
    }
    isValidCustomFontAsset(e) {
        var t;
        return !e.mimeType.startsWith("font/") || ((t = e.properties) == null ? void 0 : t.kind) !== "font" || !e.properties.font ? !1 : "fontFamily"in e.properties.font
    }
    inferVariantName(e) {
        let t = ["thin", "ultra light", "extra light", "light", "normal", "medium", "semi bold", "bold", "extra bold", "black"]
          , n = [...t.map(a=>`${a} italic`), ...t]
          , r = e.toLowerCase()
          , i = [...r.split(" "), ...r.split("-"), ...r.split("_")]
          , o = n.find(a=>i.includes(a) || i.includes(a.replace(/\s+/g, "")));
        return o ? o.replace(/^\w|\s\w/g, a=>a.toUpperCase()) : "Regular"
    }
    createFontFamily(e) {
        let t = this.byFamilyName.get(e);
        if (t)
            return t;
        let n = {
            source: this.name,
            name: e,
            fonts: []
        };
        return this.addFontFamily(n),
        n
    }
    addFontFamily(e) {
        this.fontFamilies.push(e),
        this.byFamilyName.set(e.name, e)
    }
    parseSelector(e) {
        if (!e.startsWith(Co))
            return null;
        let t = e.split(Co);
        return t[1] === void 0 ? null : {
            source: "custom",
            name: t[1]
        }
    }
    getFontBySelector(e, t=!0) {
        let n = this.parseSelector(e);
        if (!n || !t && !this.byFamilyName.get(n.name))
            return;
        let r = this.getFontFamilyByName(n.name).fonts;
        return r.find(o=>{
            var a;
            return (a = o.file) == null ? void 0 : a.endsWith(".woff2")
        }
        ) || r[0]
    }
    getFontFamilyByName(e) {
        let t = this.byFamilyName.get(e);
        if (t)
            return t;
        let n = {
            source: "custom",
            name: e,
            fonts: []
        };
        return n.fonts.push({
            selector: `${Co}${e}`,
            variant: this.inferVariantName(e),
            family: n
        }),
        n
    }
}
;
function wC(e, t, n) {
    if (t.length === 0)
        return {};
    let r = n(e);
    if (!r)
        return {};
    let {weight: i, style: o} = r
      , a = new Map
      , s = new Map;
    t.forEach(f=>{
        let d = ne(f) ? f : f.name.toLocaleLowerCase()
          , h = n(d);
        h && (a.set(`${h.weight}-${h.style}`, d),
        !(h.weight <= i) && (s.has(h.style) || s.set(h.style, d)))
    }
    );
    let l = s.get(o)
      , c = s.get("italic") ?? s.get("oblique");
    r.weight <= 300 ? (l = a.get(`400-${o}`) ?? l,
    c = a.get("400-italic") ?? a.get("400-oblique") ?? c) : r.weight <= 500 ? (l = a.get(`700-${o}`) ?? l,
    c = a.get("700-italic") ?? a.get("700-oblique") ?? c) : (l = a.get(`900-${o}`) ?? l,
    c = a.get("900-italic") ?? a.get("900-oblique") ?? c);
    let u = a.get(`${i}-italic`) ?? a.get(`${i}-oblique`);
    return {
        variantBold: l,
        variantItalic: u,
        variantBoldItalic: c
    }
}
var g5 = ["display", "sans", "serif", "slab", "handwritten", "script"];
function y5(e) {
    return e.split(",").map(t=>t.trim().toLowerCase()).filter(b5)
}
function b5(e) {
    return g5.includes(e)
}
var Gc = "FS;"
  , CC = {
    thin: 100,
    hairline: 100,
    extralight: 200,
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    ultra: 800,
    black: 900,
    heavy: 900
}
  , kC = Object.keys(CC)
  , x5 = new RegExp(`^(?:${[...kC, "italic"].join("|")})`,"u")
  , Nr = class {
    constructor() {
        R(this, "name", "fontshare"),
        R(this, "fontFamilies", []),
        R(this, "byFamilyName", new Map)
    }
    getFontFamilyByName(e) {
        return this.byFamilyName.get(e) ?? null
    }
    static parseVariant(e) {
        let t = e.split(" ")
          , n = kC.find(a=>t.includes(a))
          , r = e.includes("italic") ? "italic" : "normal";
        return {
            weight: n && CC[n] || 400,
            style: r === "italic" ? r : "normal"
        }
    }
    parseSelector(e) {
        if (!e.startsWith(Gc))
            return null;
        let t = e.split("-");
        if (t.length !== 2)
            return null;
        let[n,r] = t;
        return !n || !r ? null : {
            name: n.replace(Gc, ""),
            variant: r,
            source: this.name
        }
    }
    static createSelector(e, t) {
        return `${Gc}${e}-${t}`
    }
    addFontFamily(e) {
        this.fontFamilies.push(e),
        this.byFamilyName.set(e.name, e)
    }
    importFonts(e) {
        this.fontFamilies.length = 0,
        this.byFamilyName.clear();
        let t = [];
        for (let n of e) {
            let r = n.font_styles.filter(i=>{
                let o = i.name.toLowerCase();
                return !(!x5.exec(o) || o.endsWith("wide"))
            }
            );
            for (let i of r) {
                let {name: o} = n
                  , a = i.name.toLowerCase()
                  , s = this.getFontFamilyByName(o);
                s || (s = {
                    name: o,
                    fonts: [],
                    source: this.name
                },
                this.addFontFamily(s));
                let l = Nr.createSelector(o, a)
                  , c = Nr.parseVariant(a) || {
                    weight: void 0,
                    style: void 0
                }
                  , {weight: u, style: f} = c
                  , {variantBold: d, variantBoldItalic: h, variantItalic: g} = wC(a, r, Nr.parseVariant)
                  , y = {
                    family: s,
                    variant: a,
                    selector: l,
                    selectorBold: d ? Nr.createSelector(o, d) : void 0,
                    selectorBoldItalic: h ? Nr.createSelector(o, h) : void 0,
                    selectorItalic: g ? Nr.createSelector(o, g) : void 0,
                    weight: u,
                    style: f,
                    file: i.file,
                    category: S5(n.category)
                };
                s.fonts.push(y),
                t.push(y)
            }
        }
        return t
    }
}
;
function S5(e) {
    let t = {
        serif: "serif",
        sans: "sans-serif",
        slab: "slab",
        display: "display",
        handwritten: "handwriting",
        script: "handwriting"
    }
      , n = y5(e)[0];
    return n && t[n]
}
var w5 = "Inter"
  , C5 = {
    Thin: 100,
    ExtraLight: 200,
    Light: 300,
    "": 400,
    Medium: 500,
    SemiBold: 600,
    Bold: 700,
    ExtraBold: 800,
    Black: 900
}
  , DS = class {
    constructor() {
        R(this, "name", "framer"),
        R(this, "fontFamilies", []),
        R(this, "byFamilyName", new Map)
    }
    getFontFamilyByName(e) {
        return this.byFamilyName.get(e) ?? null
    }
    addFontFamily(e) {
        let t = {
            name: e,
            fonts: [],
            source: this.name
        };
        return this.fontFamilies.push(t),
        this.byFamilyName.set(t.name, t),
        t
    }
    static getDraftFontPropertiesBySelector(e) {
        if (!e.startsWith(w5))
            return null;
        let t = e.split("-")
          , [n,r=""] = t;
        if (!n)
            return null;
        let i = r.includes("Italic") ? "italic" : "normal"
          , o = r.replace("Italic", "")
          , a = o && C5[o] || 400;
        return {
            family: n,
            style: i,
            weight: a,
            source: "framer",
            variant: void 0,
            category: "sans-serif"
        }
    }
    importFonts(e) {
        this.fontFamilies.length = 0,
        this.byFamilyName.clear();
        let t = [];
        return e.forEach(n=>{
            let {familyName: r, ...i} = n
              , o = this.getFontFamilyByName(r);
            o || (o = this.addFontFamily(r));
            let a = {
                ...i,
                family: o
            };
            o.fonts.push(a),
            t.push(a)
        }
        ),
        t
    }
}
  , Kc = "GF;"
  , $r = class {
    constructor() {
        R(this, "name", "google"),
        R(this, "fontFamilies", []),
        R(this, "byFamilyName", new Map)
    }
    getFontFamilyByName(e) {
        return this.byFamilyName.get(e) ?? null
    }
    static parseVariant(e) {
        if (e === "regular")
            return {
                style: "normal",
                weight: 400
            };
        let t = /(\d*)(normal|italic)?/.exec(e);
        if (!t)
            return null;
        let n = parseInt(t[1] || "400")
          , r = t[2] === "italic" ? "italic" : "normal";
        return {
            weight: n,
            style: r
        }
    }
    parseSelector(e) {
        if (!e.startsWith(Kc))
            return null;
        let t = e.split("-");
        if (t.length !== 2)
            return null;
        let[n,r] = t;
        return !n || !r ? null : {
            name: n.replace(Kc, ""),
            variant: r,
            source: this.name
        }
    }
    static createSelector(e, t) {
        return `${Kc}${e}-${t}`
    }
    addFontFamily(e) {
        let t = {
            name: e,
            fonts: [],
            source: this.name
        };
        return this.fontFamilies.push(t),
        this.byFamilyName.set(t.name, t),
        t
    }
    importFonts(e) {
        this.fontFamilies.length = 0,
        this.byFamilyName.clear();
        let t = [];
        return e.forEach(n=>{
            n.variants.forEach(r=>{
                var i;
                let o = n.family
                  , a = this.getFontFamilyByName(o);
                a || (a = this.addFontFamily(o));
                let s = $r.parseVariant(r) ?? {}
                  , {weight: l, style: c} = s
                  , u = $r.createSelector(o, r)
                  , {variantBold: f, variantItalic: d, variantBoldItalic: h} = wC(r, n.variants, $r.parseVariant)
                  , g = {
                    family: a,
                    variant: r,
                    selector: u,
                    selectorBold: f ? $r.createSelector(o, f) : void 0,
                    selectorBoldItalic: h ? $r.createSelector(o, h) : void 0,
                    selectorItalic: d ? $r.createSelector(o, d) : void 0,
                    weight: l,
                    style: c,
                    category: k5(n.category),
                    file: (i = n.files[r]) == null ? void 0 : i.replace("http://", "https://")
                };
                a.fonts.push(g),
                t.push(g)
            }
            )
        }
        ),
        t
    }
}
;
function k5(e) {
    let t = {
        serif: "serif",
        "sans-serif": "sans-serif",
        display: "display",
        handwriting: "handwriting",
        monospace: "monospace"
    };
    if (e)
        return t[e]
}
var T5 = Gt(J_(), 1)
  , AS = 5e3
  , E5 = 3
  , TC = class extends Error {
    constructor(e) {
        super(e),
        this.name = "FontLoadingError"
    }
}
  , Pp = new Map
  , Ip = new Map
  , R5 = (e,t)=>EC(e, t);
async function EC(e, t, n=0) {
    let {family: r, url: i, stretch: o, unicodeRange: a} = e
      , s = e.weight || 500
      , l = e.style || "normal"
      , c = `${r}-${l}-${s}-${i}`;
    if (!Pp.has(c) || n > 0) {
        let u = new FontFace(r,`url(${i})`,{
            weight: ne(s) ? s : s?.toString(),
            style: l,
            stretch: o,
            unicodeRange: a
        })
          , f = u.load().then(()=>(t.fonts.add(u),
        RC(r, l, s))).catch(d=>{
            if (d.name !== "NetworkError")
                throw d;
            if (n < E5)
                return EC(e, t, n + 1);
            throw new TC(`Font loading failed after ${n} retries due to network error: ${JSON.stringify({
                family: r,
                style: l,
                weight: s,
                url: i,
                stretch: o,
                unicodeRange: a
            })}`)
        }
        );
        Pp.set(c, f)
    }
    await Pp.get(c)
}
async function RC(e, t, n) {
    let r = `${e}-${t}-${n}`;
    if (!Ip.has(r)) {
        let o = new T5.default(e,{
            style: t,
            weight: n
        }).load(null, AS);
        Ip.set(r, o)
    }
    try {
        await Ip.get(r)
    } catch {
        throw new TC(`Failed to check if font is ready (${AS}ms timeout exceeded): ${JSON.stringify({
            family: e,
            style: t,
            weight: n
        })}`)
    }
}
var P5 = {
    Arial: {
        Regular: {
            selector: "Arial",
            weight: void 0
        },
        Black: {
            selector: "Arial-Black",
            weight: void 0
        },
        Narrow: {
            selector: "Arial Narrow",
            weight: void 0
        },
        "Rounded Bold": {
            selector: "Arial Rounded MT Bold",
            weight: void 0
        }
    },
    Avenir: {
        Book: {
            selector: "Avenir",
            weight: void 0
        },
        Light: {
            selector: "Avenir-Light",
            weight: void 0
        },
        Medium: {
            selector: "Avenir-Medium",
            weight: void 0
        },
        Heavy: {
            selector: "Avenir-Heavy",
            weight: void 0
        },
        Black: {
            selector: "Avenir-Black",
            weight: void 0
        }
    },
    "Avenir Next": {
        Regular: {
            selector: "Avenir Next",
            weight: void 0
        },
        "Ultra Light": {
            selector: "AvenirNext-UltraLight",
            weight: void 0
        },
        Medium: {
            selector: "AvenirNext-Medium",
            weight: void 0
        },
        "Demi Bold": {
            selector: "AvenirNext-DemiBold",
            weight: void 0
        },
        Heavy: {
            selector: "AvenirNext-Heavy",
            weight: void 0
        }
    },
    "Avenir Next Condensed": {
        Regular: {
            selector: "Avenir Next Condensed",
            weight: void 0
        },
        "Ultra Light": {
            selector: "AvenirNextCondensed-UltraLight",
            weight: void 0
        },
        Medium: {
            selector: "AvenirNextCondensed-Medium",
            weight: void 0
        },
        "Demi Bold": {
            selector: "AvenirNextCondensed-DemiBold",
            weight: void 0
        },
        Heavy: {
            selector: "AvenirNextCondensed-Heavy",
            weight: void 0
        }
    },
    Baskerville: {
        Regular: {
            selector: "Baskerville",
            weight: void 0
        },
        "Semi Bold": {
            selector: "Baskerville-SemiBold",
            weight: void 0
        }
    },
    "Bodoni 72": {
        Book: {
            selector: "Bodoni 72",
            weight: void 0
        },
        Oldstyle: {
            selector: "Bodoni 72 Oldstyle",
            weight: void 0
        },
        Smallcaps: {
            selector: "Bodoni 72 Smallcaps",
            weight: void 0
        }
    },
    Courier: {
        Regular: {
            selector: "Courier",
            weight: void 0
        }
    },
    "Courier New": {
        Regular: {
            selector: "Courier New",
            weight: void 0
        }
    },
    Futura: {
        Medium: {
            selector: "Futura",
            weight: void 0
        },
        Condensed: {
            selector: "Futura-CondensedMedium",
            weight: void 0
        },
        "Condensed ExtraBold": {
            selector: "Futura-CondensedExtraBold",
            weight: void 0
        }
    },
    Georgia: {
        Regular: {
            selector: "Georgia",
            weight: void 0
        }
    },
    "Gill Sans": {
        Regular: {
            selector: "Gill Sans",
            weight: void 0
        },
        Light: {
            selector: "GillSans-Light",
            weight: void 0
        },
        SemiBold: {
            selector: "GillSans-SemiBold",
            weight: void 0
        },
        UltraBold: {
            selector: "GillSans-UltraBold",
            weight: void 0
        }
    },
    Helvetica: {
        Regular: {
            selector: "Helvetica",
            weight: void 0
        },
        Light: {
            selector: "Helvetica-Light",
            weight: void 0
        },
        Bold: {
            selector: "Helvetica-Bold",
            weight: void 0
        },
        Oblique: {
            selector: "Helvetica-Oblique",
            weight: void 0
        },
        "Light Oblique": {
            selector: "Helvetica-LightOblique",
            weight: void 0
        },
        "Bold Oblique": {
            selector: "Helvetica-BoldOblique",
            weight: void 0
        }
    },
    "Helvetica Neue": {
        Regular: {
            selector: "Helvetica Neue",
            weight: void 0
        },
        UltraLight: {
            selector: "HelveticaNeue-UltraLight",
            weight: void 0
        },
        Thin: {
            selector: "HelveticaNeue-Thin",
            weight: void 0
        },
        Light: {
            selector: "HelveticaNeue-Light",
            weight: void 0
        },
        Medium: {
            selector: "HelveticaNeue-Medium",
            weight: void 0
        },
        Bold: {
            selector: "HelveticaNeue-Bold",
            weight: void 0
        },
        Italic: {
            selector: "HelveticaNeue-Italic",
            weight: void 0
        },
        "UltraLight Italic": {
            selector: "HelveticaNeue-UltraLightItalic",
            weight: void 0
        },
        "Thin Italic": {
            selector: "HelveticaNeue-ThinItalic",
            weight: void 0
        },
        "Light Italic": {
            selector: "HelveticaNeue-LightItalic",
            weight: void 0
        },
        "Medium Italic": {
            selector: "HelveticaNeue-MediumItalic",
            weight: void 0
        },
        "Bold Italic": {
            selector: "HelveticaNeue-BoldItalic",
            weight: void 0
        },
        "Condensed Bold": {
            selector: "HelveticaNeue-CondensedBold",
            weight: void 0
        },
        "Condensed Black": {
            selector: "HelveticaNeue-CondensedBlack",
            weight: void 0
        }
    },
    "Hoefler Text": {
        Regular: {
            selector: "Hoefler Text",
            weight: void 0
        }
    },
    Impact: {
        Regular: {
            selector: "Impact",
            weight: void 0
        }
    },
    "Lucida Grande": {
        Regular: {
            selector: "Lucida Grande",
            weight: void 0
        }
    },
    Menlo: {
        Regular: {
            selector: "Menlo",
            weight: void 0
        }
    },
    Monaco: {
        Regular: {
            selector: "Monaco",
            weight: void 0
        }
    },
    Optima: {
        Regular: {
            selector: "Optima",
            weight: void 0
        },
        ExtraBlack: {
            selector: "Optima-ExtraBlack",
            weight: void 0
        }
    },
    Palatino: {
        Regular: {
            selector: "Palatino",
            weight: void 0
        }
    },
    "SF Pro Display": {
        Regular: {
            selector: "__SF-UI-Display-Regular__",
            weight: 400
        },
        Ultralight: {
            selector: "__SF-UI-Display-Ultralight__",
            weight: 100
        },
        Thin: {
            selector: "__SF-UI-Display-Thin__",
            weight: 200
        },
        Light: {
            selector: "__SF-UI-Display-Light__",
            weight: 300
        },
        Medium: {
            selector: "__SF-UI-Display-Medium__",
            weight: 500
        },
        Semibold: {
            selector: "__SF-UI-Display-Semibold__",
            weight: 600
        },
        Bold: {
            selector: "__SF-UI-Display-Bold__",
            weight: 700
        },
        Heavy: {
            selector: "__SF-UI-Display-Heavy__",
            weight: 800
        },
        Black: {
            selector: "__SF-UI-Display-Black__",
            weight: 900
        },
        Italic: {
            selector: "__SF-UI-Display-Italic__",
            weight: 400
        },
        "Ultralight Italic": {
            selector: "__SF-UI-Display-Ultralight-Italic__",
            weight: 100
        },
        "Thin Italic": {
            selector: "__SF-UI-Display-Thin-Italic__",
            weight: 200
        },
        "Light Italic": {
            selector: "__SF-UI-Display-Light-Italic__",
            weight: 300
        },
        "Medium Italic": {
            selector: "__SF-UI-Display-Medium-Italic__",
            weight: 500
        },
        "Semibold Italic": {
            selector: "__SF-UI-Display-Semibold-Italic__",
            weight: 600
        },
        "Bold Italic": {
            selector: "__SF-UI-Display-Bold-Italic__",
            weight: 700
        },
        "Heavy Italic": {
            selector: "__SF-UI-Display-Heavy-Italic__",
            weight: 800
        },
        "Black Italic": {
            selector: "__SF-UI-Display-Black-Italic__",
            weight: 900
        }
    },
    "SF Pro Display Condensed": {
        Regular: {
            selector: "__SF-UI-Display-Condensed-Regular__",
            weight: 400
        },
        Ultralight: {
            selector: "__SF-UI-Display-Condensed-Ultralight__",
            weight: 100
        },
        Thin: {
            selector: "__SF-UI-Display-Condensed-Thin__",
            weight: 200
        },
        Light: {
            selector: "__SF-UI-Display-Condensed-Light__",
            weight: 300
        },
        Medium: {
            selector: "__SF-UI-Display-Condensed-Medium__",
            weight: 500
        },
        Semibold: {
            selector: "__SF-UI-Display-Condensed-Semibold__",
            weight: 600
        },
        Bold: {
            selector: "__SF-UI-Display-Condensed-Bold__",
            weight: 700
        },
        Heavy: {
            selector: "__SF-UI-Display-Condensed-Heavy__",
            weight: 800
        },
        Black: {
            selector: "__SF-UI-Display-Condensed-Black__",
            weight: 900
        }
    },
    "SF Pro Text": {
        Regular: {
            selector: "__SF-UI-Text-Regular__",
            weight: 400
        },
        Light: {
            selector: "__SF-UI-Text-Light__",
            weight: 200
        },
        Medium: {
            selector: "__SF-UI-Text-Medium__",
            weight: 500
        },
        Semibold: {
            selector: "__SF-UI-Text-Semibold__",
            weight: 600
        },
        Bold: {
            selector: "__SF-UI-Text-Bold__",
            weight: 700
        },
        Heavy: {
            selector: "__SF-UI-Text-Heavy__",
            weight: 800
        },
        Italic: {
            selector: "__SF-UI-Text-Italic__",
            weight: 400
        },
        "Light Italic": {
            selector: "__SF-UI-Text-Light-Italic__",
            weight: 200
        },
        "Medium Italic": {
            selector: "__SF-UI-Text-Medium-Italic__",
            weight: 500
        },
        "Semibold Italic": {
            selector: "__SF-UI-Text-Semibold-Italic__",
            weight: 600
        },
        "Bold Italic": {
            selector: "__SF-UI-Text-Bold-Italic__",
            weight: 700
        },
        "Heavy Italic": {
            selector: "__SF-UI-Text-Heavy-Italic__",
            weight: 800
        }
    },
    "SF Pro Text Condensed": {
        Regular: {
            selector: "__SF-UI-Text-Condensed-Regular__",
            weight: 400
        },
        Light: {
            selector: "__SF-UI-Text-Condensed-Light__",
            weight: 200
        },
        Medium: {
            selector: "__SF-UI-Text-Condensed-Medium__",
            weight: 500
        },
        Semibold: {
            selector: "__SF-UI-Text-Condensed-Semibold__",
            weight: 600
        },
        Bold: {
            selector: "__SF-UI-Text-Condensed-Bold__",
            weight: 700
        },
        Heavy: {
            selector: "__SF-UI-Text-Condensed-Heavy__",
            weight: 800
        }
    },
    Tahoma: {
        Regular: {
            selector: "Tahoma",
            weight: void 0
        }
    },
    Times: {
        Regular: {
            selector: "Times",
            weight: void 0
        }
    },
    "Times New Roman": {
        Regular: {
            selector: "Times New Roman",
            weight: void 0
        }
    },
    Trebuchet: {
        Regular: {
            selector: "Trebuchet MS",
            weight: void 0
        }
    },
    Verdana: {
        Regular: {
            selector: "Verdana",
            weight: void 0
        }
    }
}
  , I5 = {
    "__SF-Compact-Display-Regular__": "SFCompactDisplay-Regular|.SFCompactDisplay-Regular",
    "__SF-Compact-Display-Ultralight__": "SFCompactDisplay-Ultralight|.SFCompactDisplay-Ultralight",
    "__SF-Compact-Display-Thin__": "SFCompactDisplay-Thin|.SFCompactDisplay-Thin",
    "__SF-Compact-Display-Light__": "SFCompactDisplay-Light|.SFCompactDisplay-Light",
    "__SF-Compact-Display-Medium__": "SFCompactDisplay-Medium|.SFCompactDisplay-Medium",
    "__SF-Compact-Display-Semibold__": "SFCompactDisplay-Semibold|.SFCompactDisplay-Semibold",
    "__SF-Compact-Display-Heavy__": "SFCompactDisplay-Heavy|.SFCompactDisplay-Heavy",
    "__SF-Compact-Display-Black__": "SFCompactDisplay-Black|.SFCompactDisplay-Black",
    "__SF-Compact-Display-Bold__": "SFCompactDisplay-Bold|.SFCompactDisplay-Bold",
    "__SF-UI-Text-Regular__": ".SFNSText|SFProText-Regular|SFUIText-Regular|.SFUIText",
    "__SF-UI-Text-Light__": ".SFNSText-Light|SFProText-Light|SFUIText-Light|.SFUIText-Light",
    "__SF-UI-Text-Medium__": ".SFNSText-Medium|SFProText-Medium|SFUIText-Medium|.SFUIText-Medium",
    "__SF-UI-Text-Semibold__": ".SFNSText-Semibold|SFProText-Semibold|SFUIText-Semibold|.SFUIText-Semibold",
    "__SF-UI-Text-Bold__": ".SFNSText-Bold|SFProText-Bold|SFUIText-Bold|.SFUIText-Bold",
    "__SF-UI-Text-Heavy__": ".SFNSText-Heavy|SFProText-Heavy|.SFUIText-Heavy",
    "__SF-UI-Text-Italic__": ".SFNSText-Italic|SFProText-Italic|SFUIText-Italic|.SFUIText-Italic",
    "__SF-UI-Text-Light-Italic__": ".SFNSText-LightItalic|SFProText-LightItalic|SFUIText-LightItalic|.SFUIText-LightItalic",
    "__SF-UI-Text-Medium-Italic__": ".SFNSText-MediumItalic|SFProText-MediumItalic|SFUIText-MediumItalic|.SFUIText-MediumItalic",
    "__SF-UI-Text-Semibold-Italic__": ".SFNSText-SemiboldItalic|SFProText-SemiboldItalic|SFUIText-SemiboldItalic|.SFUIText-SemiboldItalic",
    "__SF-UI-Text-Bold-Italic__": ".SFNSText-BoldItalic|SFProText-BoldItalic|SFUIText-BoldItalic|.SFUIText-BoldItalic",
    "__SF-UI-Text-Heavy-Italic__": ".SFNSText-HeavyItalic|SFProText-HeavyItalic|.SFUIText-HeavyItalic",
    "__SF-Compact-Text-Regular__": "SFCompactText-Regular|.SFCompactText-Regular",
    "__SF-Compact-Text-Light__": "SFCompactText-Light|.SFCompactText-Light",
    "__SF-Compact-Text-Medium__": "SFCompactText-Medium|.SFCompactText-Medium",
    "__SF-Compact-Text-Semibold__": "SFCompactText-Semibold|.SFCompactText-Semibold",
    "__SF-Compact-Text-Bold__": "SFCompactText-Bold|.SFCompactText-Bold",
    "__SF-Compact-Text-Heavy__": "SFCompactText-Heavy|.SFCompactText-Heavy",
    "__SF-Compact-Text-Italic__": "SFCompactText-Italic|.SFCompactText-Italic",
    "__SF-Compact-Text-Light-Italic__": "SFCompactText-LightItalic|.SFCompactText-LightItalic",
    "__SF-Compact-Text-Medium-Italic__": "SFCompactText-MediumItalic|.SFCompactText-MediumItalic",
    "__SF-Compact-Text-Semibold-Italic__": "SFCompactText-SemiboldItalic|.SFCompactText-SemiboldItalic",
    "__SF-Compact-Text-Bold-Italic__": "SFCompactText-BoldItalic|.SFCompactText-BoldItalic",
    "__SF-Compact-Text-Heavy-Italic__": "SFCompactText-HeavyItalic|.SFCompactText-HeavyItalic",
    "__SF-UI-Display-Condensed-Regular__": ".SFNSDisplayCondensed-Regular|SFUIDisplayCondensed-Regular|.SFUIDisplayCondensed-Regular",
    "__SF-UI-Display-Condensed-Ultralight__": ".SFNSDisplayCondensed-Ultralight|SFUIDisplayCondensed-Ultralight|.SFUIDisplayCondensed-Ultralight",
    "__SF-UI-Display-Condensed-Thin__": ".SFNSDisplayCondensed-Thin|SFUIDisplayCondensed-Thin|.SFUIDisplayCondensed-Thin",
    "__SF-UI-Display-Condensed-Light__": ".SFNSDisplayCondensed-Light|SFUIDisplayCondensed-Light|.SFUIDisplayCondensed-Light",
    "__SF-UI-Display-Condensed-Medium__": ".SFNSDisplayCondensed-Medium|SFUIDisplayCondensed-Medium|.SFUIDisplayCondensed-Medium",
    "__SF-UI-Display-Condensed-Semibold__": ".SFNSDisplayCondensed-Semibold|SFUIDisplayCondensed-Semibold|.SFUIDisplayCondensed-Semibold",
    "__SF-UI-Display-Condensed-Bold__": ".SFNSDisplayCondensed-Bold|SFUIDisplayCondensed-Bold|.SFUIDisplayCondensed-Bold",
    "__SF-UI-Display-Condensed-Heavy__": ".SFNSDisplayCondensed-Heavy|SFUIDisplayCondensed-Heavy|.SFUIDisplayCondensed-Heavy",
    "__SF-UI-Display-Condensed-Black__": ".SFNSDisplayCondensed-Black|.SFUIDisplayCondensed-Black",
    "__SF-UI-Display-Regular__": ".SFNSDisplay|SFProDisplay-Regular|SFUIDisplay-Regular|.SFUIDisplay",
    "__SF-UI-Display-Ultralight__": ".SFNSDisplay-Ultralight|SFProDisplay-Ultralight|SFUIDisplay-Ultralight|.SFUIDisplay-Ultralight",
    "__SF-UI-Display-Thin__": ".SFNSDisplay-Thin|SFProDisplay-Thin|SFUIDisplay-Thin|.SFUIDisplay-Thin",
    "__SF-UI-Display-Light__": ".SFNSDisplay-Light|SFProDisplay-Light|SFUIDisplay-Light|.SFUIDisplay-Light",
    "__SF-UI-Display-Medium__": ".SFNSDisplay-Medium|SFProDisplay-Medium|SFUIDisplay-Medium|.SFUIDisplay-Medium",
    "__SF-UI-Display-Semibold__": ".SFNSDisplay-Semibold|SFProDisplay-Semibold|SFUIDisplay-Semibold|.SFUIDisplay-Semibold",
    "__SF-UI-Display-Bold__": ".SFNSDisplay-Bold|SFProDisplay-Bold|SFUIDisplay-Bold|.SFUIDisplay-Bold",
    "__SF-UI-Display-Heavy__": ".SFNSDisplay-Heavy|SFProDisplay-Heavy|SFUIDisplay-Heavy|.SFUIDisplay-Heavy",
    "__SF-UI-Display-Black__": ".SFNSDisplay-Black|SFProDisplay-Black|.SFUIDisplay-Black",
    "__SF-UI-Display-Italic__": ".SFNSDisplay-Italic|SFProDisplay-Italic|SFUIDisplay-Italic",
    "__SF-UI-Display-Ultralight-Italic__": ".SFNSDisplay-UltralightItalic|SFProDisplay-UltralightItalic|SFUIDisplay-UltralightItalic|.SFUIDisplay-UltralightItalic",
    "__SF-UI-Display-Thin-Italic__": ".SFNSDisplay-ThinItalic|SFProDisplay-ThinItalic|SFUIDisplay-ThinItalic|.SFUIDisplay-ThinItalic",
    "__SF-UI-Display-Light-Italic__": ".SFNSDisplay-LightItalic|SFProDisplay-LightItalic|SFUIDisplay-LightItalic|.SFUIDisplay-LightItalic",
    "__SF-UI-Display-Medium-Italic__": ".SFNSDisplay-MediumItalic|SFProDisplay-MediumItalic|SFUIDisplay-MediumItalic|.SFUIDisplay-MediumItalic",
    "__SF-UI-Display-Semibold-Italic__": ".SFNSDisplay-SemiboldItalic|SFProDisplay-SemiboldItalic|SFUIDisplay-SemiboldItalic|.SFUIDisplay-SemiboldItalic",
    "__SF-UI-Display-Bold-Italic__": ".SFNSDisplay-BoldItalic|SFProDisplay-BoldItalic|SFUIDisplay-BoldItalic|.SFUIDisplay-BoldItalic",
    "__SF-UI-Display-Heavy-Italic__": ".SFNSDisplay-HeavyItalic|SFProDisplay-HeavyItalic|SFUIDisplay-HeavyItalic|.SFUIDisplay-HeavyItalic",
    "__SF-UI-Display-Black-Italic__": ".SFNSDisplay-BlackItalic|SFProDisplay-BlackItalic|.SFUIDisplay-BlackItalic",
    "__SF-UI-Text-Condensed-Regular__": ".SFNSTextCondensed-Regular|SFUITextCondensed-Regular|.SFUITextCondensed-Regular",
    "__SF-UI-Text-Condensed-Light__": ".SFNSTextCondensed-Light|SFUITextCondensed-Light|.SFUITextCondensed-Light",
    "__SF-UI-Text-Condensed-Medium__": ".SFNSTextCondensed-Medium|SFUITextCondensed-Medium|.SFUITextCondensed-Medium",
    "__SF-UI-Text-Condensed-Semibold__": ".SFNSTextCondensed-Semibold|SFUITextCondensed-Semibold|.SFUITextCondensed-Semibold",
    "__SF-UI-Text-Condensed-Bold__": ".SFNSTextCondensed-Bold|SFUITextCondensed-Bold|.SFUITextCondensed-Bold",
    "__SF-UI-Text-Condensed-Heavy__": ".SFNSTextCondensed-Heavy|.SFUITextCondensed-Heavy",
    "__SF-Compact-Rounded-Regular__": "SFCompactRounded-Regular|.SFCompactRounded-Regular",
    "__SF-Compact-Rounded-Ultralight__": "SFCompactRounded-Ultralight|.SFCompactRounded-Ultralight",
    "__SF-Compact-Rounded-Thin__": "SFCompactRounded-Thin|.SFCompactRounded-Thin",
    "__SF-Compact-Rounded-Light__": "SFCompactRounded-Light|.SFCompactRounded-Light",
    "__SF-Compact-Rounded-Medium__": "SFCompactRounded-Medium|.SFCompactRounded-Medium",
    "__SF-Compact-Rounded-Semibold__": "SFCompactRounded-Semibold|.SFCompactRounded-Semibold",
    "__SF-Compact-Rounded-Bold__": "SFCompactRounded-Bold|.SFCompactRounded-Bold",
    "__SF-Compact-Rounded-Heavy__": "SFCompactRounded-Heavy|.SFCompactRounded-Heavy",
    "__SF-Compact-Rounded-Black__": "SFCompactRounded-Black|.SFCompactRounded-Black"
}
  , VS = P5
  , F5 = "System Default"
  , _5 = class {
    constructor() {
        R(this, "name", "local"),
        R(this, "fontFamilies", []),
        R(this, "byFamilyName", new Map),
        R(this, "fontAliasBySelector", new Map),
        R(this, "fontAliases", new Map)
    }
    getFontFamilyByName(e) {
        return this.byFamilyName.get(e) ?? null
    }
    createFontFamily(e) {
        let t = {
            name: e,
            fonts: [],
            source: this.name
        };
        return this.addFontFamily(t),
        t
    }
    addFontFamily(e) {
        this.fontFamilies.push(e),
        this.byFamilyName.set(e.name, e)
    }
    importFonts() {
        let e = [];
        for (let r of Object.keys(VS)) {
            let i = VS[r];
            if (!i)
                continue;
            let o = this.createFontFamily(r);
            for (let a of Object.keys(i)) {
                let s = i[a];
                if (!s)
                    continue;
                let {selector: l, weight: c} = s
                  , u = {
                    variant: a,
                    selector: l,
                    weight: c,
                    family: o
                };
                o.fonts.push(u)
            }
            e.push(...o.fonts)
        }
        for (let[r,i] of Object.entries(I5))
            this.addFontAlias(r, i);
        let {fontFamily: t, aliases: n} = this.getSystemFontFamily();
        this.addFontFamily(t);
        for (let[r,i] of n)
            this.addFontAlias(r, i);
        return e.push(...t.fonts),
        e
    }
    addFontAlias(e, t) {
        this.fontAliases.set(e, t),
        this.fontAliasBySelector.set(t, e)
    }
    getSystemFontFamily() {
        let e = "system-ui|-apple-system|BlinkMacSystemFont|Segoe UI|Roboto|Oxygen|Ubuntu|Cantarell|Fira Sans|Droid Sans|Helvetica Neue|sans-serif"
          , t = {
            name: F5,
            fonts: [],
            source: this.name
        }
          , n = new Map
          , r = [400, 100, 200, 300, 500, 600, 700, 800, 900]
          , i = ["normal", "italic"];
        for (let o of i)
            for (let a of r) {
                let s = L5(a, o)
                  , l = `__SystemDefault-${a}-${o}__`
                  , c = {
                    variant: s,
                    selector: l,
                    style: o,
                    weight: a,
                    family: t
                };
                t.fonts.push(c),
                n.set(l, e)
            }
        return {
            fontFamily: t,
            aliases: n
        }
    }
    getFontAliasBySelector(e) {
        return this.fontAliasBySelector.get(e) || null
    }
    getFontSelectorByAlias(e) {
        return this.fontAliases.get(e) || null
    }
    isFontFamilyAlias(e) {
        return !!(e && /^__.*__$/u.exec(e))
    }
}
  , BS = {
    100: "Thin",
    200: "Extra Light",
    300: "Light",
    400: "Normal",
    500: "Medium",
    600: "Semi Bold",
    700: "Bold",
    800: "Extra Bold",
    900: "Black"
};
function L5(e, t) {
    let n = t === "normal" ? "Regular" : "Italic";
    return e === 400 ? n : t !== "normal" ? `${BS[e]} ${n}` : `${BS[e]}`
}
var M5 = class {
    constructor() {
        R(this, "enabled", !1),
        R(this, "bySelector", new Map),
        R(this, "getGoogleFontsListPromise"),
        R(this, "getFontshareFontsListPromise"),
        R(this, "loadedSelectors", new Set),
        R(this, "googleFamilyNames", new Set),
        R(this, "local"),
        R(this, "google"),
        R(this, "fontshare"),
        R(this, "framer"),
        R(this, "custom"),
        this.local = new _5,
        this.google = new $r,
        this.fontshare = new Nr,
        this.framer = new DS,
        this.custom = new v5,
        this.bySelector = new Map,
        this.importLocalFonts()
    }
    addFont(e) {
        this.bySelector.set(e.selector, e)
    }
    getAvailableFonts() {
        return Array.from(this.bySelector.values())
    }
    importLocalFonts() {
        for (let e of this.local.importFonts())
            this.addFont(e),
            this.loadFont(e)
    }
    async importGoogleFonts() {
        if (!this.getGoogleFontsListPromise) {
            this.getGoogleFontsListPromise = Ge.fetchGoogleFontsList();
            let e = await this.getGoogleFontsListPromise;
            for (let t of this.google.importFonts(e))
                this.googleFamilyNames.add(t.family.name.toLowerCase()),
                this.addFont(t)
        }
        return this.getGoogleFontsListPromise
    }
    async importFontshareFonts() {
        if (!this.getFontshareFontsListPromise) {
            this.getFontshareFontsListPromise = Ge.fetchFontshareFontsList();
            let e = await this.getFontshareFontsListPromise;
            for (let t of this.fontshare.importFonts(e))
                this.googleFamilyNames.has(t.family.name.toLowerCase()) || this.addFont(t)
        }
        return this.getFontshareFontsListPromise
    }
    importFramerFonts(e) {
        this.framer.importFonts(e).forEach(t=>{
            this.addFont(t)
        }
        )
    }
    importCustomFonts(e) {
        this.bySelector.forEach((t,n)=>{
            n.startsWith(Co) && this.bySelector.delete(n)
        }
        );
        for (let t of this.custom.importFonts(e))
            this.addFont(t)
    }
    getFontFamily(e) {
        return this[e.source].getFontFamilyByName(e.name)
    }
    getFontBySelector(e, t=!0) {
        return e.startsWith(Co) ? this.custom.getFontBySelector(e, t) : this.bySelector.get(e)
    }
    getDraftPropertiesBySelector(e) {
        let t = this.getFontBySelector(e);
        if (t)
            return {
                style: t.style,
                weight: t.weight,
                variant: t.variant,
                family: t.family.name,
                source: t.family.source,
                category: t.category
            };
        let n = this.google.parseSelector(e);
        if (n) {
            let o = $r.parseVariant(n.variant);
            if (o)
                return {
                    style: o.style,
                    weight: o.weight,
                    variant: n.variant,
                    family: n.name,
                    source: "google",
                    category: void 0
                }
        }
        let r = this.fontshare.parseSelector(e);
        if (r) {
            let o = Nr.parseVariant(r.variant);
            if (o)
                return {
                    style: o.style,
                    weight: o.weight,
                    variant: r.variant,
                    family: r.name,
                    source: "fontshare",
                    category: void 0
                }
        }
        let i = DS.getDraftFontPropertiesBySelector(e);
        return i || null
    }
    isSelectorLoaded(e) {
        return this.loadedSelectors.has(e)
    }
    async loadFont(e) {
        if (this.isSelectorLoaded(e.selector))
            return 0;
        let t = e.family.source;
        switch (t) {
        case "local":
            return this.loadedSelectors.add(e.selector),
            1;
        case "framer":
            return p5.default.env.NODE_ENV !== "test" && await RC(e.family.name, e.style, e.weight),
            this.loadedSelectors.add(e.selector),
            1;
        case "google":
        case "fontshare":
        case "custom":
            return e.file ? (await R5({
                family: e.family.name,
                url: e.file,
                weight: e.weight,
                style: e.style
            }, document),
            this.loadedSelectors.add(e.selector),
            1) : Promise.reject(`Unable to load font: ${e.selector}`);
        default:
            Wt(t)
        }
    }
    async loadFontsFromSelectors(e) {
        if (!this.enabled)
            return [];
        let t = e.some(i=>i.startsWith(Kc))
          , n = e.some(i=>i.startsWith(Gc));
        if (t || n) {
            try {
                await this.importGoogleFonts()
            } catch (i) {
                cs("Failed to load Google fonts:", i)
            }
            try {
                await this.importFontshareFonts()
            } catch (i) {
                cs("Failed to load Fontshare fonts:", i)
            }
        }
        let r = e.map(i=>this.bySelector.get(i)).filter(i=>!!i);
        return Promise.allSettled(r.map(i=>this.loadFont(i)))
    }
    async loadFonts(e) {
        return {
            newlyLoadedFontCount: (await this.loadFontsFromSelectors(e)).filter(r=>r.status === "fulfilled" && r.value === 1).length
        }
    }
    async loadMissingFonts(e, t) {
        let n = e.filter(i=>!qc.isSelectorLoaded(i));
        if (n.length === 0)
            return;
        await qc.loadWebFontsFromSelectors(n),
        n.every(i=>qc.isSelectorLoaded(i)) && t && t()
    }
    async loadWebFontsFromSelectors(e) {
        return this.loadFontsFromSelectors(e)
    }
    get defaultFont() {
        let e = this.getFontBySelector("Inter");
        return le(e, "Can\u2019t find Inter font"),
        e
    }
}
  , qc = new M5;
Promise.allSettled = Promise.allSettled || (e=>Promise.all(e.map(t=>t.then(n=>({
    status: "fulfilled",
    value: n
})).catch(n=>({
    status: "rejected",
    reason: n
})))));
function O5(e, t) {
    return e.length === t.length && e.every((n,r)=>n === t[r])
}
var D5 = "(?:<a[^>]*>)?"
  , A5 = "(?:</a>)?"
  , V5 = "<[^>]+>"
  , B5 = "</[^>]+>"
  , z5 = "<(?:div|span)[^>]*>"
  , H5 = "</(?:div|span)>"
  , N5 = "<[^>]+>"
  , $5 = "</[^>]+>"
  , G$ = new RegExp(`^(${D5}${V5}${z5}${N5}).*?(${$5}).*?(${H5}${B5}${A5})$`,"s");
var lu = class {
    constructor(e) {
        R(this, "__class", "PathSegment"),
        R(this, "x", 0),
        R(this, "y", 0),
        R(this, "handleMirroring", "straight"),
        R(this, "handleOutX", 0),
        R(this, "handleOutY", 0),
        R(this, "handleInX", 0),
        R(this, "handleInY", 0),
        R(this, "radius", 0),
        e && Object.assign(this, e)
    }
    merge(e) {
        return Object.assign(Object.create(Object.getPrototypeOf(this)), this, e)
    }
}
;
R(lu, "displayName", "WithClassDiscriminatorMixin(PathSegment)");
lu.prototype.__class = "PathSegment";
(e=>{
    e.point = t=>({
        x: t.x,
        y: t.y
    }),
    e.handleOut = t=>({
        x: t.handleOutX,
        y: t.handleOutY
    }),
    e.handleIn = t=>({
        x: t.handleInX,
        y: t.handleInY
    }),
    e.calculatedHandleOut = t=>{
        switch (t.handleMirroring) {
        case "symmetric":
        case "disconnected":
        case "asymmetric":
            return et.add((0,
            e.point)(t), (0,
            e.handleOut)(t));
        default:
            return {
                x: t.x,
                y: t.y
            }
        }
    }
    ,
    e.calculatedHandleIn = t=>{
        switch (t.handleMirroring) {
        case "symmetric":
            return et.subtract((0,
            e.point)(t), (0,
            e.handleOut)(t));
        case "disconnected":
        case "asymmetric":
            return et.add((0,
            e.point)(t), (0,
            e.handleIn)(t));
        default:
            return (0,
            e.point)(t)
        }
    }
    ,
    e.curveDefault = (t,n)=>{
        if (t.length > 2) {
            let r, i;
            n === 0 ? r = t[t.length - 1] : r = t[n - 1],
            n === t.length - 1 ? i = t[0] : i = t[n + 1],
            le(r, "pointBefore should be defined"),
            le(i, "pointAfter should be defined");
            let o = et.subtract((0,
            e.point)(i), (0,
            e.point)(r));
            return {
                x: o.x / 4,
                y: o.y / 4
            }
        }
        return {
            x: 10,
            y: 10
        }
    }
}
)(lu || (lu = {}));
var So = class {
    constructor() {
        R(this, "canvas", {
            children: []
        }),
        R(this, "listeners", []),
        R(this, "ids", [])
    }
    static shared(e) {
        if (e) {
            let t = new So;
            return t.setCanvas(e),
            t
        }
        return So.__shared || (So.__shared = new So),
        So.__shared
    }
    updateNode(e) {
        let t = e.props.id
          , n = this.canvas.children;
        n || (this.canvas.children = n = []);
        let r = !1;
        for (let i = 0; i < n.length; i++) {
            let o = n[i];
            if (o?.props.id === t) {
                r = !0,
                n[i] = e;
                break
            }
        }
        r || n.push(e),
        this.setCanvas(this.canvas)
    }
    setCanvas(e) {
        e.children && (this.canvas = e,
        this.listeners.forEach((t,n)=>{
            let r = this.ids[n];
            if (!r)
                return;
            let i = $p(e, r);
            t.setState({
                data: i
            })
        }
        ))
    }
    registerListener(e, t) {
        return this.listeners.push(e),
        this.ids.push(t),
        $p(this.canvas, t)
    }
    removeListener(e) {
        let t = this.listeners.indexOf(e);
        t !== -1 && (this.listeners.splice(t, 1),
        this.ids.splice(t, 1))
    }
}
  , j5 = So;
R(j5, "__shared", null);
function zS(e, t) {
    let {name: n, props: r} = t;
    return r && r.id === e || n === e
}
function $p(e, t) {
    if (!e)
        return null;
    if (zS(t, e))
        return e;
    let {children: n} = e;
    if (!n || !du(n))
        return null;
    for (let r of n)
        if (zS(t, r))
            return r;
    for (let r of n) {
        let i = $p(r, t);
        if (i)
            return i
    }
    return null
}
var W5 = b.createContext(null)
  , n8 = W5.Provider;
var f8 = b.forwardRef(function(t, n) {
    let {background: r, children: i, alt: o, ...a} = t
      , s = {
        ...a.style
    };
    r && delete s.background;
    let l = hu(t.as);
    return ae(l, {
        ...a,
        style: s,
        ref: n,
        children: [r && T(gw, {
            image: r,
            alt: o
        }), i]
    })
});
var U5 = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
}
  , PC = /[&<>"']/g
  , X5 = RegExp(PC.source);
function HS(e) {
    return e && X5.test(e) ? e.replace(PC, t=>U5[t] ?? "") : e || ""
}
var NS = "{{ text-placeholder }}"
  , Y5 = "rich-text-wrapper"
  , G5 = We(function(t, n) {
    let {id: r, name: i, html: o, htmlFromDesign: a, text: s, textFromDesign: l, fonts: c=[], width: u, height: f, left: d, right: h, top: g, bottom: y, center: S, className: m, stylesPresetsClassName: p, visible: v=!0, opacity: x, rotation: C=0, verticalAlignment: w="top", isEditable: k=!1, willChangeTransform: E, environment: I=Oe.current, withExternalLayout: P=!1, positionSticky: z, positionStickyTop: L, positionStickyRight: ee, positionStickyBottom: H, positionStickyLeft: te, __htmlStructure: G, __fromCanvasComponent: V=!1, _forwardedOverrideId: W, _forwardedOverrides: A, _usesDOMRect: q, children: B, ...Y} = t
      , K = ks()
      , Z = Lo(t)
      , Ut = O(null)
      , re = n ?? Ut
      , {navigate: ut, getRoute: Q} = uu()
      , Mt = fu();
    eL(t.preload ?? []),
    vu(t, re);
    let St = M(Mo)
      , ft = gm()
      , Oo = s
      , Ri = W ?? r;
    if (Ri && A) {
        let wt = A[Ri];
        typeof wt == "string" && (Oo = wt)
    }
    let gn = "";
    if (Oo) {
        let wt = HS(Oo);
        gn = G ? G.replace(NS, wt) : `<p>${wt}</p>`
    } else if (o)
        gn = o;
    else if (l) {
        let wt = HS(l);
        gn = G ? G.replace(NS, wt) : `<p>${wt}</p>`
    } else
        a && (gn = a);
    let _s = lC()
      , LC = he(()=>ft || !Q || !Mt ? gn : h5(gn, Q, Mt, _s), [ft, gn, Q, Mt, _s]);
    if ($(()=>{
        let wt = re.current;
        if (wt === null)
            return;
        function Sm(Cu) {
            let ku = fm(Cu.target, re.current);
            if (Cu.metaKey || !ut || !ku || ku.getAttribute("target") === "_blank")
                return;
            XV(ut, ku, _s) && Cu.preventDefault()
        }
        return wt.addEventListener("click", Sm),
        ()=>{
            wt.removeEventListener("click", Sm)
        }
    }
    , [ut, _s]),
    FC(c, V, re),
    Ct(()=>{
        Ts()
    }
    , []),
    !v)
        return null;
    let MC = k && I() === "CANVAS"
      , ye = {
        outline: "none",
        display: "flex",
        flexDirection: "column",
        justifyContent: IC(w),
        opacity: MC ? 0 : x,
        flexShrink: 0
    }
      , bm = Oe.hasRestrictions()
      , Xr = us(t, K || 0, !1)
      , xm = q && (u === "auto" || f === "auto")
      , OC = !!t.transformTemplate || !Xr || !bm || V || xm ? t.transformTemplate ?? pu(S) : void 0;
    if (!P) {
        if (Xr && bm && !xm) {
            let wt = He.getNumber(C).toFixed(4);
            ye.transform = `translate(${Xr.x}px, ${Xr.y}px) rotate(${wt}deg)`,
            ye.width = Xr.width,
            ye.minWidth = Xr.width,
            ye.height = Xr.height
        } else
            ye.left = d,
            ye.right = h,
            ye.top = g,
            ye.bottom = y,
            ye.width = u,
            ye.height = f,
            ye.rotate = C;
        z ? (!ft || St) && (ye.position = "sticky",
        ye.willChange = "transform",
        ye.zIndex = 1,
        ye.top = L,
        ye.right = ee,
        ye.bottom = H,
        ye.left = te) : ft && (t.positionFixed || t.positionAbsolute) && (ye.position = "absolute")
    }
    return am(t, ye),
    Bw(t, ye),
    E && nm(ye),
    Object.assign(ye, t.style),
    T(Rt.div, {
        id: r,
        ref: re,
        ...Y,
        style: ye,
        layoutId: Z,
        "data-framer-name": i,
        "data-framer-component-type": "DeprecatedRichText",
        "data-center": S,
        className: lm(m, p, Y5),
        transformTemplate: OC,
        dangerouslySetInnerHTML: {
            __html: LC
        }
    })
});
function IC(e) {
    switch (e) {
    case "top":
        return "flex-start";
    case "center":
        return "center";
    case "bottom":
        return "flex-end"
    }
}
function FC(e, t, n) {
    let r = O([]);
    O5(r.current, e) || (r.current = e,
    qc.loadFonts(e).then(({newlyLoadedFontCount: i})=>{
        !t || !n.current || Oe.current() !== "CANVAS" || i > 0 && qO(n.current)
    }
    ))
}
var $S = We(({viewBoxScale: e, viewBox: t, children: n, ...r},i)=>T(Rt.svg, {
    ref: i,
    ...r,
    viewBox: t,
    children: T(Rt.foreignObject, {
        width: "100%",
        height: "100%",
        className: "framer-fit-text",
        transform: `scale(${e})`,
        style: {
            overflow: "visible",
            transformOrigin: "center center"
        },
        children: n
    })
}))
  , K5 = We((e,t)=>{
    let {__fromCanvasComponent: n=!1, _forwardedOverrideId: r, _forwardedOverrides: i, _usesDOMRect: o, as: a, bottom: s, center: l, children: c, environment: u=Oe.current, fonts: f=[], height: d, isEditable: h=!1, left: g, name: y, opacity: S, positionSticky: m, positionStickyBottom: p, positionStickyLeft: v, positionStickyRight: x, positionStickyTop: C, right: w, rotation: k=0, style: E, _initialStyle: I, stylesPresetsClassNames: P, text: z, top: L, verticalAlignment: ee="top", visible: H=!0, width: te, willChangeTransform: G, withExternalLayout: V=!1, viewBox: W, viewBoxScale: A=1, ...q} = e
      , B = ks()
      , Y = gm()
      , K = M(Mo)
      , Z = Lo(e)
      , Ut = O(null)
      , re = t ?? Ut;
    if (vu(e, re),
    FC(f, n, re),
    Ct(()=>{
        Ts()
    }
    , []),
    !H)
        return null;
    let ut = h && u() === "CANVAS"
      , Q = {
        outline: "none",
        display: "flex",
        flexDirection: "column",
        justifyContent: IC(ee),
        opacity: ut ? 0 : S,
        flexShrink: 0
    }
      , Mt = Oe.hasRestrictions()
      , St = us(e, B || 0, !1)
      , ft = o && (te === "auto" || d === "auto")
      , Ri = !!e.transformTemplate || !St || !Mt || n || ft ? e.transformTemplate ?? pu(l) : void 0;
    V || (St && Mt && !ft ? (Q.x = St.x,
    Q.y = St.y,
    Q.rotate = He.getNumber(k),
    Q.width = St.width,
    Q.minWidth = St.width,
    Q.height = St.height) : (Q.left = g,
    Q.right = w,
    Q.top = L,
    Q.bottom = s,
    Q.width = te,
    Q.height = d,
    Q.rotate = k),
    m ? (!Y || K) && (Q.position = "sticky",
    Q.willChange = "transform",
    Q.zIndex = 1,
    Q.top = C,
    Q.right = x,
    Q.bottom = p,
    Q.left = v) : Y && (e.positionFixed || e.positionAbsolute) && (Q.position = "absolute")),
    am(e, Q),
    Bw(e, Q),
    G && nm(Q),
    Object.assign(Q, I, E),
    Z && (q.layout = "preserve-aspect");
    let gn = hu(e.as);
    return ne(e.viewBox) ? e.as !== void 0 ? T(gn, {
        ...q,
        ref: re,
        style: Q,
        layoutId: Z,
        transformTemplate: Ri,
        "data-framer-name": y,
        "data-framer-component-type": "RichTextContainer",
        children: T($S, {
            viewBox: W,
            viewBoxScale: A,
            style: {
                width: "100%",
                height: "100%"
            },
            children: c && Qc(c, P, z)
        })
    }) : T($S, {
        ...q,
        ref: re,
        style: Q,
        layoutId: Z,
        viewBox: W,
        viewBoxScale: A,
        transformTemplate: Ri,
        "data-framer-name": y,
        "data-framer-component-type": "RichTextContainer",
        children: c && Qc(c, P, z)
    }) : T(gn, {
        ...q,
        ref: re,
        style: Q,
        layoutId: Z,
        transformTemplate: Ri,
        "data-framer-name": y,
        "data-framer-component-type": "RichTextContainer",
        children: c && Qc(c, P, z)
    })
}
);
function Qc(e, t, n) {
    let r = yn.toArray(e.props.children);
    ne(n) && (r = r.slice(0, 1)),
    r = r.map(a=>bn(a) ? Qc(a, t, n) : ne(n) ? n : a);
    let {["data-preset-tag"]: i, ...o} = e.props;
    if (ne(e.type) || Kf(e.type)) {
        let a = i || jy(e.type) || e.type
          , s = ne(a) ? t?.[a] : void 0;
        o.className = lm("framer-text", o.className, s)
    }
    return an(e, o, ...r)
}
var v8 = We(({children: e, html: t, htmlFromDesign: n, ...r},i)=>{
    let o = t || e || n;
    if (ne(o)) {
        !r.stylesPresetsClassName && Be(r.stylesPresetsClassNames) && (r.stylesPresetsClassName = Object.values(r.stylesPresetsClassNames).join(" "));
        let a = {
            [ne(t) ? "html" : "htmlFromDesign"]: o
        };
        return T(G5, {
            ...r,
            ...a,
            ref: i
        })
    }
    if (!r.stylesPresetsClassNames && ne(r.stylesPresetsClassName)) {
        let[a,s,l,c,u] = r.stylesPresetsClassName.split(" ");
        a === void 0 || s === void 0 || l === void 0 || c === void 0 || u === void 0 ? console.warn(`Encountered invalid stylesPresetsClassNames: ${r.stylesPresetsClassNames}`) : r.stylesPresetsClassNames = {
            h1: a,
            h2: s,
            h3: l,
            p: c,
            a: u
        }
    }
    return T(K5, {
        ...r,
        ref: i,
        children: bn(o) ? o : void 0
    })
}
);
function g8(e, t, n) {
    let r = _C(t);
    !n?.supportsExplicitInterCodegen && !r.some(i=>i.explicitInter === !1) && r.push({
        explicitInter: !1,
        fonts: []
    }),
    Object.assign(e, {
        fonts: r
    })
}
function y8(e) {
    return e.fonts ?? []
}
function b8(e) {
    return e.length === 0 ? [{
        explicitInter: !1,
        fonts: []
    }] : _C(e)
}
function _C(e) {
    let t = {
        explicitInter: !1,
        fonts: []
    }
      , n = [];
    for (let r of e)
        Q5(r) ? n.push(r) : t.fonts.push(Z5(r));
    return t.fonts.length > 0 && n.push(t),
    n
}
var q5 = "explicitInter";
function Q5(e) {
    return q5 in e
}
function Z5(e) {
    let t;
    return e.url.startsWith("https://fonts.gstatic.com/s/") ? t = "google" : e.url.startsWith("https://framerusercontent.com/third-party-assets/fontshare/") ? t = "fontshare" : t = "custom",
    {
        ...e,
        source: t
    }
}
var J5 = {
    name: "framer",
    version: "2.4.1",
    main: "build/index.js",
    type: "module",
    exports: {
        ".": "./build/index.js",
        "./package.json": "./package.json",
        "./*": "./build/*"
    },
    files: ["build", "CHANGELOG.md", "README.md", "LICENSE.md", "postinstall.cjs"],
    types: "./build/index.d.ts",
    author: "Framer",
    license: "MIT",
    scripts: {
        prepublishOnly: "make build",
        coverage: "yarn :jest --coverage",
        lint: "yarn format-check:ts && yarn :eslint ./src --ext .ts,.tsx --format codeframe --quiet",
        "format:ts": 'yarn :format "src/**/*.{ts,tsx}"',
        "format-check:ts": 'yarn :format-check "src/**/*.{ts,tsx}"',
        "lint:fix": "yarn lint --fix --cache",
        test: "yarn :jest",
        watch: "yarn :jest --watch",
        postinstall: "node postinstall.cjs"
    },
    dependencies: {
        "@framerjs/router": "workspace:*",
        "@juggle/resize-observer": "^3.3.1",
        eventemitter3: "^3.1.0",
        fontfaceobserver: "^2.1.0",
        "hoist-non-react-statics": "^3.3.2",
        hsluv: "^0.0.3"
    },
    devDependencies: {
        "@microsoft/api-extractor": "^7.42.3",
        "@testing-library/dom": "^8.19.1",
        "@testing-library/jest-dom": "^5.16.5",
        "@testing-library/react": "^13.4.0",
        "@testing-library/user-event": "^14.4.3",
        "@types/google.fonts": "1.0.3",
        "@types/hsluv": "https://github.com/framer/typed_hsluv#bump",
        "@types/node": "^18.17.15",
        "@types/react": "^18.2.67",
        "@types/react-dom": "^18.2.22",
        "@types/yargs": "^17.0.19",
        "@typescript-eslint/eslint-plugin": "^6.16.0",
        "@typescript-eslint/parser": "^6.16.0",
        chalk: "^4.1.2",
        eslint: "^8.56.0",
        immutable: "^3.8.2",
        "jest-diff": "^29.3.1",
        "jest-junit": "^15.0.0",
        react: "^18.2.0",
        "react-dom": "^18.2.0",
        semver: "^7.5.2",
        typescript: "^5.3.3",
        yargs: "^17.6.2"
    },
    peerDependencies: {
        "framer-motion": "11.0.11-sync.4",
        react: "^18.2.0",
        "react-dom": "^18.2.0"
    },
    tsdoc: {
        tsdocFlavor: "AEDoc"
    },
    framer: {
        components: [{
            name: "Scroll",
            children: !0,
            properties: [{
                key: "direction",
                title: "Direction",
                kind: "enum",
                options: ["horizontal", "vertical", "both"]
            }]
        }, {
            name: "Page"
        }]
    }
}
  , {version: S8} = J5;
ul.prototype.addChild = function({transformer: e=t=>t}) {
    let t = we(e(this.get()));
    return this.onChange(n=>t.set(e(n))),
    t
}
;
/**
 * @license Emotion v11.0.0
 * MIT License
 *
 * Copyright (c) Emotion team and other contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
/*! Bundled license information:

react-is/cjs/react-is.production.min.js:
  (** @license React v16.13.1
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
export {b as a, yn as b, Ii as c, an as d, ce as e, Lm as f, We as g, Fi as h, ue as i, M as j, $ as k, Yr as l, lr as m, he as n, O as o, kt as p, Re as q, kn as r, J as s, Rt as t, Iy as u, Tn as v, ht as w, VP as x, Oy as y, Ay as z, rI as A, T as B, ae as C, c1 as D, Y_ as E, e2 as F, iH as G, lH as H, Yp as I, K2 as J, wH as K, Oe as L, AH as M, YL as N, jH as O, WM as P, qM as Q, QM as R, QH as S, JN as T, lm as U, EV as V, M6 as W, z6 as X, H6 as Y, IV as Z, U6 as _, MV as $, Q6 as aa, $V as ba, QV as ca, r$ as da, a$ as ea, u$ as fa, n4 as ga, yC as ha, f$ as ia, c4 as ja, d$ as ka, h$ as la, p$ as ma, u4 as na, y$ as oa, k$ as pa, P$ as qa, I$ as ra, _$ as sa, xo as ta, W$ as ua, qc as va, f8 as wa, v8 as xa, g8 as ya, y8 as za, b8 as Aa};
//# sourceMappingURL=chunk-2KYWQAYW.mjs.map
