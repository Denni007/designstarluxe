import {a as mt} from "./chunk-F2PC6QML.mjs";
import {a as ct, b as $t, c as er, d as tr, e as Oe, f as Me, g as ze, h as se, i as ft, n as dt, o as rr, p as ar, q as nr, r as Ee} from "./chunk-5NHYI6L6.mjs";
import {a as ir} from "./chunk-PB5NNRFA.mjs";
import "./chunk-42U43NKG.mjs";
import {$ as G, A as Vt, Aa as De, B as t, C as j, I as ae, L as lt, N as v, Q as ne, T as Ut, U as M, V as _e, Y as ie, _ as fe, aa as Yt, b as Le, ba as Gt, c as X, ca as Bt, d as it, da as Qt, f as ot, fa as I, g as V, i as Lt, ia as p, j as de, k as Pe, ka as A, l as re, m as Pt, n as U, na as Zt, o as S, oa as Jt, p as Nt, qa as Kt, r as Y, s as st, sa as oe, t as x, u as N, v as Dt, w as Ot, wa as Ne, x as Mt, xa as z, y as zt, ya as B, z as Et, za as L} from "./chunk-2KYWQAYW.mjs";
import {c as F} from "./chunk-ELYU6EKT.mjs";
var Fe = e=>e;
var Ve = {
    ms: e=>1e3 * e,
    s: e=>e / 1e3
};
function pt(e, r) {
    return r ? e * (1e3 / r) : 0
}
var or = (e,r,n)=>(((1 - 3 * n + 3 * r) * e + (3 * n - 6 * r)) * e + 3 * r) * e
  , Gr = 1e-7
  , Br = 12;
function Qr(e, r, n, a, i) {
    let o, s, h = 0;
    do
        s = r + (n - r) / 2,
        o = or(s, a, i) - e,
        o > 0 ? n = s : r = s;
    while (Math.abs(o) > Gr && ++h < Br);
    return s
}
function Xe(e, r, n, a) {
    if (e === r && n === a)
        return Fe;
    let i = o=>Qr(o, 0, 1, e, n);
    return o=>o === 0 || o === 1 ? o : or(i(o), r, a)
}
var vi = {
    ease: Xe(.25, .1, .25, 1),
    "ease-in": Xe(.42, 0, 1, 1),
    "ease-in-out": Xe(.42, 0, .58, 1),
    "ease-out": Xe(0, 0, .58, 1)
};
function sr(e, r) {
    var n = {};
    for (var a in e)
        Object.prototype.hasOwnProperty.call(e, a) && r.indexOf(a) < 0 && (n[a] = e[a]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function") {
        var i = 0;
        for (a = Object.getOwnPropertySymbols(e); i < a.length; i++)
            r.indexOf(a[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[i]) && (n[a[i]] = e[a[i]])
    }
    return n
}
var ve = {};
Object.defineProperty(ve, "__esModule", {
    value: !0
});
ve.warning = function() {}
;
ve.invariant = function() {}
;
var ki = ve.__esModule
  , _i = ve.warning
  , ea = ve.invariant;
var ta = 5;
function Ue(e, r, n) {
    let a = Math.max(r - ta, 0);
    return pt(n - e(a), r - a)
}
var be = {
    stiffness: 100,
    damping: 10,
    mass: 1
}
  , ra = (e=be.stiffness,r=be.damping,n=be.mass)=>r / (2 * Math.sqrt(e * n));
function aa(e, r, n) {
    return e < r && n >= r || e > r && n <= r
}
var ut = ({stiffness: e=be.stiffness, damping: r=be.damping, mass: n=be.mass, from: a=0, to: i=1, velocity: o=0, restSpeed: s=2, restDistance: h=.5}={})=>{
    o = o ? Ve.s(o) : 0;
    let d = {
        done: !1,
        hasReachedTarget: !1,
        current: a,
        target: i
    }, m = i - a, f = Math.sqrt(e / n) / 1e3, c = ra(e, r, n), u;
    if (c < 1) {
        let b = f * Math.sqrt(1 - c * c);
        u = l=>i - Math.exp(-c * f * l) * ((c * f * m - o) / b * Math.sin(b * l) + m * Math.cos(b * l))
    } else
        u = b=>i - Math.exp(-f * b) * (m + (f * m - o) * b);
    return b=>{
        d.current = u(b);
        let l = b === 0 ? o : Ue(u, b, d.current)
          , C = Math.abs(l) <= s
          , y = Math.abs(i - d.current) <= h;
        return d.done = C && y,
        d.hasReachedTarget = aa(a, i, d.current),
        d
    }
}
  , lr = ({from: e=0, velocity: r=0, power: n=.8, decay: a=.325, bounceDamping: i, bounceStiffness: o, changeTarget: s, min: h, max: d, restDistance: m=.5, restSpeed: f})=>{
    a = Ve.ms(a);
    let c = {
        hasReachedTarget: !1,
        done: !1,
        current: e,
        target: e
    }
      , u = g=>h !== void 0 && g < h || d !== void 0 && g > d
      , b = g=>h === void 0 ? d : d === void 0 || Math.abs(h - g) < Math.abs(d - g) ? h : d
      , l = n * r
      , C = e + l
      , y = s === void 0 ? C : s(C);
    c.target = y,
    y !== C && (l = y - e);
    let R = g=>-l * Math.exp(-g / a), W = g=>y + R(g), w = g=>{
        let q = R(g)
          , K = W(g);
        c.done = Math.abs(q) <= m,
        c.current = c.done ? y : K
    }
    , H, T, P = g=>{
        u(c.current) && (H = g,
        T = ut({
            from: c.current,
            to: b(c.current),
            velocity: Ue(W, g, c.current),
            damping: i,
            stiffness: o,
            restDistance: m,
            restSpeed: f
        }))
    }
    ;
    return P(0),
    g=>{
        let q = !1;
        return !T && H === void 0 && (q = !0,
        w(g),
        P(g)),
        H !== void 0 && g > H ? (c.hasReachedTarget = !0,
        T(g - H)) : (c.hasReachedTarget = !1,
        !q && w(g),
        c)
    }
}
  , ht = 10
  , na = 1e4;
function cr(e) {
    let r, n = ht, a = e(0), i = [a.current];
    for (; !a.done && n < na; )
        a = e(n),
        i.push(a.done ? a.target : a.current),
        r === void 0 && a.hasReachedTarget && (r = n),
        n += ht;
    let o = n - ht;
    return i.length === 1 && i.push(a.current),
    {
        keyframes: i,
        duration: o / 1e3,
        overshootDuration: (r ?? o) / 1e3
    }
}
var ia = ["", "X", "Y", "Z"]
  , oa = ["translate", "scale", "rotate", "skew"];
var fr = {
    syntax: "<angle>",
    initialValue: "0deg",
    toDefaultUnit: e=>e + "deg"
}
  , sa = {
    translate: {
        syntax: "<length-percentage>",
        initialValue: "0px",
        toDefaultUnit: e=>e + "px"
    },
    rotate: fr,
    scale: {
        syntax: "<number>",
        initialValue: 1,
        toDefaultUnit: Fe
    },
    skew: fr
}
  , la = new Map
  , ca = e=>`--motion-${e}`
  , ur = ["x", "y", "z"];
oa.forEach(e=>{
    ia.forEach(r=>{
        ur.push(e + r),
        la.set(ca(e + r), sa[e])
    }
    )
}
);
var Ji = new Set(ur);
var dr = e=>document.createElement("div").animate(e, {
    duration: .001
})
  , mr = {
    cssRegisterProperty: ()=>typeof CSS < "u" && Object.hasOwnProperty.call(CSS, "registerProperty"),
    waapi: ()=>Object.hasOwnProperty.call(Element.prototype, "animate"),
    partialKeyframes: ()=>{
        try {
            dr({
                opacity: [1]
            })
        } catch {
            return !1
        }
        return !0
    }
    ,
    finished: ()=>!!dr({
        opacity: [0, 1]
    }).finished
}
  , gt = {}
  , fa = {};
for (let e in mr)
    fa[e] = ()=>(gt[e] === void 0 && (gt[e] = mr[e]()),
    gt[e]);
function gr(e, r) {
    var n;
    return typeof e == "string" ? r ? ((n = r[e]) !== null && n !== void 0 || (r[e] = document.querySelectorAll(e)),
    e = r[e]) : e = document.querySelectorAll(e) : e instanceof Element && (e = [e]),
    Array.from(e || [])
}
function xr(e) {
    let r = new WeakMap;
    return (n={})=>{
        let a = new Map
          , i = (s=0,h=100,d=0,m=!1)=>{
            let f = `${s}-${h}-${d}-${m}`;
            return a.has(f) || a.set(f, e(Object.assign({
                from: s,
                to: h,
                velocity: d,
                restSpeed: m ? .05 : 2,
                restDistance: m ? .01 : .5
            }, n))),
            a.get(f)
        }
          , o = s=>(r.has(s) || r.set(s, cr(s)),
        r.get(s));
        return {
            createAnimation: (s,h,d,m,f)=>{
                var c, u;
                let b, l = s.length;
                if (d && l <= 2 && s.every(da)) {
                    let y = s[l - 1]
                      , R = l === 1 ? null : s[0]
                      , W = 0
                      , w = 0
                      , H = f?.generator;
                    if (H) {
                        let {animation: g, generatorStartTime: q} = f
                          , K = g?.startTime || q || 0
                          , $ = g?.currentTime || performance.now() - K
                          , le = H($).current;
                        w = (c = R) !== null && c !== void 0 ? c : le,
                        (l === 1 || l === 2 && s[0] === null) && (W = Ue(Ie=>H(Ie).current, $, le))
                    } else
                        w = (u = R) !== null && u !== void 0 ? u : parseFloat(h());
                    let T = i(w, y, W, m?.includes("scale"))
                      , P = o(T);
                    b = Object.assign(Object.assign({}, P), {
                        easing: "linear"
                    }),
                    f && (f.generator = T,
                    f.generatorStartTime = performance.now())
                } else
                    b = {
                        easing: "ease",
                        duration: o(i(0, 100)).overshootDuration
                    };
                return b
            }
        }
    }
}
var da = e=>typeof e != "string"
  , Ki = xr(ut)
  , $i = xr(lr)
  , ma = {
    any: 0,
    all: 1
};
function pa(e, r, {root: n, margin: a, amount: i="any"}={}) {
    if (typeof IntersectionObserver > "u")
        return ()=>{}
        ;
    let o = gr(e)
      , s = new WeakMap
      , h = m=>{
        m.forEach(f=>{
            let c = s.get(f.target);
            if (f.isIntersecting !== !!c)
                if (f.isIntersecting) {
                    let u = r(f);
                    typeof u == "function" ? s.set(f.target, u) : d.unobserve(f.target)
                } else
                    c && (c(f),
                    s.delete(f.target))
        }
        )
    }
      , d = new IntersectionObserver(h,{
        root: n,
        rootMargin: a,
        threshold: typeof i == "number" ? i : ma[i]
    });
    return o.forEach(m=>d.observe(m)),
    ()=>d.disconnect()
}
var Ye = new WeakMap, me;
function ha(e, r) {
    if (r) {
        let {inlineSize: n, blockSize: a} = r[0];
        return {
            width: n,
            height: a
        }
    }
    return e instanceof SVGElement && "getBBox"in e ? e.getBBox() : {
        width: e.offsetWidth,
        height: e.offsetHeight
    }
}
function ua({target: e, contentRect: r, borderBoxSize: n}) {
    var a;
    (a = Ye.get(e)) === null || a === void 0 || a.forEach(i=>{
        i({
            target: e,
            contentSize: r,
            get size() {
                return ha(e, n)
            }
        })
    }
    )
}
function ga(e) {
    e.forEach(ua)
}
function xa() {
    typeof ResizeObserver < "u" && (me = new ResizeObserver(ga))
}
function ya(e, r) {
    me || xa();
    let n = gr(e);
    return n.forEach(a=>{
        let i = Ye.get(a);
        i || (i = new Set,
        Ye.set(a, i)),
        i.add(r),
        me?.observe(a)
    }
    ),
    ()=>{
        n.forEach(a=>{
            let i = Ye.get(a);
            i?.delete(r),
            i?.size || me?.unobserve(a)
        }
        )
    }
}
var Ge = new Set, Ce;
function va() {
    Ce = ()=>{
        let e = {
            width: F.innerWidth,
            height: F.innerHeight
        }
          , r = {
            target: F,
            size: e,
            contentSize: e
        };
        Ge.forEach(n=>n(r))
    }
    ,
    F.addEventListener("resize", Ce)
}
function ba(e) {
    return Ge.add(e),
    Ce || va(),
    ()=>{
        Ge.delete(e),
        !Ge.size && Ce && (Ce = void 0)
    }
}
function yr(e, r) {
    return typeof e == "function" ? ba(e) : ya(e, r)
}
function xt(e, r, n) {
    e.dispatchEvent(new CustomEvent(r,{
        detail: {
            originalEvent: n
        }
    }))
}
function pr(e, r, n) {
    e.dispatchEvent(new CustomEvent(r,{
        detail: {
            originalEntry: n
        }
    }))
}
var wa = {
    isActive: e=>!!e.inView,
    subscribe: (e,{enable: r, disable: n},{inViewOptions: a={}})=>{
        let {once: i} = a
          , o = sr(a, ["once"]);
        return pa(e, s=>{
            if (r(),
            pr(e, "viewenter", s),
            !i)
                return h=>{
                    n(),
                    pr(e, "viewleave", h)
                }
        }
        , o)
    }
}
  , hr = (e,r,n)=>a=>{
    (!a.pointerType || a.pointerType === "mouse") && (n(),
    xt(e, r, a))
}
  , Wa = {
    isActive: e=>!!e.hover,
    subscribe: (e,{enable: r, disable: n})=>{
        let a = hr(e, "hoverstart", r)
          , i = hr(e, "hoverend", n);
        return e.addEventListener("pointerenter", a),
        e.addEventListener("pointerleave", i),
        ()=>{
            e.removeEventListener("pointerenter", a),
            e.removeEventListener("pointerleave", i)
        }
    }
}
  , Ta = {
    isActive: e=>!!e.press,
    subscribe: (e,{enable: r, disable: n})=>{
        let a = o=>{
            n(),
            xt(e, "pressend", o),
            F.removeEventListener("pointerup", a)
        }
          , i = o=>{
            r(),
            xt(e, "pressstart", o),
            F.addEventListener("pointerup", a)
        }
        ;
        return e.addEventListener("pointerdown", i),
        ()=>{
            e.removeEventListener("pointerdown", i),
            F.removeEventListener("pointerup", a)
        }
    }
}
  , ka = {
    inView: wa,
    hover: Wa,
    press: Ta
}
  , eo = ["initial", "animate", ...Object.keys(ka), "exit"];
var _a = 100
  , Fa = {
    left: e=>`translateX(-${e}px)`,
    right: e=>`translateX(${e}px)`,
    top: e=>`translateY(-${e}px)`,
    bottom: e=>`translateY(${e}px)`
}
  , yt = typeof Animation < "u" && typeof Animation.prototype.updatePlaybackRate == "function";
function we(e) {
    let {slots: r, gap: n, padding: a, paddingPerSide: i, paddingTop: o, paddingRight: s, paddingBottom: h, paddingLeft: d, speed: m, hoverFactor: f, direction: c, alignment: u, sizingOptions: b, fadeOptions: l, style: C} = e
      , {fadeContent: y, overflow: R, fadeWidth: W, fadeInset: w, fadeAlpha: H} = l
      , {widthType: T, heightType: P} = b
      , g = i ? `${o}px ${s}px ${h}px ${d}px` : `${a}px`
      , q = lt.current() === lt.canvas
      , K = Le.count(r)
      , $ = K > 0;
    c === !0 && (c = "left");
    let le = c === "left" || c === "right"
      , Ie = Dt(0)
      , Je = Fa[c]
      , Or = Ot(Ie, Je)
      , xe = S(null)
      , ee = U(()=>[ot(), ot()], [])
      , [pe,Mr] = Nt({
        parent: null,
        children: null
    })
      , St = []
      , Ke = []
      , ke = 0
      , $e = 0;
    q && (ke = K ? Math.floor(10 / K) : 0,
    $e = 1),
    !q && $ && pe.parent && (ke = Math.round(pe.parent / pe.children * 2) + 1,
    ke = Math.min(ke, _a),
    $e = 1);
    let At = Lt(()=>{
        if ($ && xe.current) {
            let k = le ? xe.current.offsetWidth : xe.current.offsetHeight
              , _ = ee[0].current ? le ? ee[0].current.offsetLeft : ee[0].current.offsetTop : 0
              , E = (ee[1].current ? le ? ee[1].current.offsetLeft + ee[1].current.offsetWidth : ee[1].current.offsetTop + ee[1].current.offsetHeight : 0) - _ + n;
            Mr({
                parent: k,
                children: E
            })
        }
    }
    , [])
      , jt = q ? {
        contentVisibility: "auto"
    } : {};
    if ($) {
        if (!q) {
            let k = S(!0);
            Pe(()=>(st.read(At),
            yr(xe.current, ({contentSize: _})=>{
                !k.current && (_.width || _.height) && st.read(At),
                k.current = !1
            }
            )), [])
        }
        St = Le.map(r, (k,_)=>{
            var ce, E, he, ue;
            let ge;
            _ === 0 && (ge = ee[0]),
            _ === r.length - 1 && (ge = ee[1]);
            let ye = {
                width: T ? (ce = k.props) === null || ce === void 0 ? void 0 : ce.width : "100%",
                height: P ? (E = k.props) === null || E === void 0 ? void 0 : E.height : "100%"
            };
            return t(N, {
                inherit: "id",
                children: t("li", {
                    ref: ge,
                    style: ye,
                    children: it(k, {
                        style: {
                            ...(he = k.props) === null || he === void 0 ? void 0 : he.style,
                            ...ye,
                            flexShrink: 0,
                            ...jt
                        },
                        layoutId: k.props.layoutId ? k.props.layoutId + "-original-" + _ : void 0
                    }, (ue = k.props) === null || ue === void 0 ? void 0 : ue.children)
                })
            })
        }
        )
    }
    if (!q)
        for (let k = 0; k < ke; k++)
            Ke = [...Ke, ...Le.map(r, (_,ce)=>{
                var E, he, ue, ge, ye, nt;
                let Yr = {
                    width: T ? (E = _.props) === null || E === void 0 ? void 0 : E.width : "100%",
                    height: P ? (he = _.props) === null || he === void 0 ? void 0 : he.height : "100%",
                    willChange: "transform"
                };
                return t(N, {
                    inherit: "id",
                    children: t("li", {
                        style: Yr,
                        "aria-hidden": !0,
                        children: it(_, {
                            key: k + " " + ce,
                            style: {
                                ...(ue = _.props) === null || ue === void 0 ? void 0 : ue.style,
                                width: T ? (ge = _.props) === null || ge === void 0 ? void 0 : ge.width : "100%",
                                height: P ? (ye = _.props) === null || ye === void 0 ? void 0 : ye.height : "100%",
                                flexShrink: 0,
                                ...jt
                            },
                            layoutId: _.props.layoutId ? _.props.layoutId + "-dupe-" + k : void 0
                        }, (nt = _.props) === null || nt === void 0 ? void 0 : nt.children)
                    }, k + "li" + ce)
                }, k + "lg" + ce)
            }
            )];
    let te = pe.children + pe.children * Math.round(pe.parent / pe.children)
      , et = S(null)
      , tt = S(null)
      , qe = S(0)
      , rt = S(!1)
      , Ht = zt()
      , It = S(null)
      , Z = S(null);
    if (!q) {
        let k = Vt(xe);
        yt ? (Pe(()=>{
            if (!(Ht || !te || !m))
                return Z.current = It.current.animate({
                    transform: [Je(0), Je(te)]
                }, {
                    duration: Math.abs(te) / m * 1e3,
                    iterations: 1 / 0,
                    easing: "linear"
                }),
                ()=>Z.current.cancel()
        }
        , [f, te, m]),
        Pe(()=>{
            Z.current && (k && Z.current.playState === "paused" ? Z.current.play() : !k && Z.current.playState === "running" && Z.current.pause())
        }
        , [k])) : Mt(_=>{
            if (!te || Ht || yt)
                return;
            et.current === null && (et.current = _),
            _ = _ - et.current;
            let E = (tt.current === null ? 0 : _ - tt.current) * (m / 1e3);
            rt.current && (E *= f),
            qe.current += E,
            qe.current = Et(0, te, qe.current),
            tt.current = _,
            k && Ie.set(qe.current)
        }
        )
    }
    let zr = le ? "to right" : "to bottom"
      , qt = W / 2
      , Er = 100 - W / 2
      , Vr = Aa(w, 0, qt)
      , Ur = 100 - w
      , at = `linear-gradient(${zr}, rgba(0, 0, 0, ${H}) ${Vr}%, rgba(0, 0, 0, 1) ${qt}%, rgba(0, 0, 0, 1) ${Er}%, rgba(0, 0, 0, ${H}) ${Ur}%)`;
    return $ ? t("section", {
        style: {
            ...vr,
            opacity: $e,
            WebkitMaskImage: y ? at : void 0,
            MozMaskImage: y ? at : void 0,
            maskImage: y ? at : void 0,
            overflow: R ? "visible" : "hidden",
            padding: g
        },
        ref: xe,
        children: j(x.ul, {
            ref: It,
            style: {
                ...vr,
                gap: n,
                top: c === "bottom" && br(te) ? -te : void 0,
                left: c === "right" && br(te) ? -te : void 0,
                placeItems: u,
                position: "relative",
                flexDirection: le ? "row" : "column",
                ...C,
                transform: yt ? void 0 : Or,
                willChange: q ? "auto" : "transform"
            },
            onMouseEnter: ()=>{
                rt.current = !0,
                Z.current && (Z.current.playbackRate = f)
            }
            ,
            onMouseLeave: ()=>{
                rt.current = !1,
                Z.current && (Z.current.playbackRate = 1)
            }
            ,
            children: [St, Ke]
        })
    }) : j("section", {
        style: Xa,
        children: [t("div", {
            style: Ca,
            children: "\u2728"
        }), t("p", {
            style: Ra,
            children: "Connect to Content"
        }), t("p", {
            style: Sa,
            children: "Add layers or components to infinitely loop on your page."
        })]
    })
}
we.defaultProps = {
    gap: 10,
    padding: 10,
    sizingOptions: {
        widthType: !0,
        heightType: !0
    },
    fadeOptions: {
        fadeContent: !0,
        overflow: !1,
        fadeWidth: 25,
        fadeAlpha: 0,
        fadeInset: 0
    },
    direction: !0
};
ne(we, {
    slots: {
        type: v.Array,
        title: "Children",
        control: {
            type: v.ComponentInstance
        }
    },
    speed: {
        type: v.Number,
        title: "Speed",
        min: 0,
        max: 1e3,
        defaultValue: 100,
        unit: "%",
        displayStepper: !0,
        step: 5
    },
    direction: {
        type: v.Enum,
        title: "Direction",
        options: ["left", "right", "top", "bottom"],
        optionIcons: ["direction-left", "direction-right", "direction-up", "direction-down"],
        optionTitles: ["Left", "Right", "Top", "Bottom"],
        defaultValue: "left",
        displaySegmentedControl: !0
    },
    alignment: {
        type: v.Enum,
        title: "Align",
        options: ["flex-start", "center", "flex-end"],
        optionIcons: {
            direction: {
                right: ["align-top", "align-middle", "align-bottom"],
                left: ["align-top", "align-middle", "align-bottom"],
                top: ["align-left", "align-center", "align-right"],
                bottom: ["align-left", "align-center", "align-right"]
            }
        },
        defaultValue: "center",
        displaySegmentedControl: !0
    },
    gap: {
        type: v.Number,
        title: "Gap"
    },
    padding: {
        title: "Padding",
        type: v.FusedNumber,
        toggleKey: "paddingPerSide",
        toggleTitles: ["Padding", "Padding per side"],
        valueKeys: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"],
        valueLabels: ["T", "R", "B", "L"],
        min: 0
    },
    sizingOptions: {
        type: v.Object,
        title: "Sizing",
        controls: {
            widthType: {
                type: v.Boolean,
                title: "Width",
                enabledTitle: "Auto",
                disabledTitle: "Stretch",
                defaultValue: !0
            },
            heightType: {
                type: v.Boolean,
                title: "Height",
                enabledTitle: "Auto",
                disabledTitle: "Stretch",
                defaultValue: !0
            }
        }
    },
    fadeOptions: {
        type: v.Object,
        title: "Clipping",
        controls: {
            fadeContent: {
                type: v.Boolean,
                title: "Fade",
                defaultValue: !0
            },
            overflow: {
                type: v.Boolean,
                title: "Overflow",
                enabledTitle: "Show",
                disabledTitle: "Hide",
                defaultValue: !1,
                hidden(e) {
                    return e.fadeContent === !0
                }
            },
            fadeWidth: {
                type: v.Number,
                title: "Width",
                defaultValue: 25,
                min: 0,
                max: 100,
                unit: "%",
                hidden(e) {
                    return e.fadeContent === !1
                }
            },
            fadeInset: {
                type: v.Number,
                title: "Inset",
                defaultValue: 0,
                min: 0,
                max: 100,
                unit: "%",
                hidden(e) {
                    return e.fadeContent === !1
                }
            },
            fadeAlpha: {
                type: v.Number,
                title: "Opacity",
                defaultValue: 0,
                min: 0,
                max: 1,
                step: .05,
                hidden(e) {
                    return e.fadeContent === !1
                }
            }
        }
    },
    hoverFactor: {
        type: v.Number,
        title: "Hover",
        min: 0,
        max: 1,
        unit: "x",
        defaultValue: 1,
        step: .1,
        displayStepper: !0,
        description: "Slows down the speed while you are hovering."
    }
});
var vr = {
    display: "flex",
    width: "100%",
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
    placeItems: "center",
    margin: 0,
    padding: 0,
    listStyleType: "none",
    textIndent: "none"
}
  , Xa = {
    display: "flex",
    width: "100%",
    height: "100%",
    placeContent: "center",
    placeItems: "center",
    flexDirection: "column",
    color: "#96F",
    background: "rgba(136, 85, 255, 0.1)",
    fontSize: 11,
    overflow: "hidden",
    padding: "20px 20px 30px 20px"
}
  , Ca = {
    fontSize: 32,
    marginBottom: 10
}
  , Ra = {
    margin: 0,
    marginBottom: 10,
    fontWeight: 600,
    textAlign: "center"
}
  , Sa = {
    margin: 0,
    opacity: .7,
    maxWidth: 150,
    lineHeight: 1.5,
    textAlign: "center"
}
  , Aa = (e,r,n)=>Math.min(Math.max(e, r), n)
  , br = e=>typeof e == "number" && !isNaN(e);
var ja = L(se)
  , Ha = L(we)
  , Ia = ["bqzPNuXr3", "aqGhCg0Ct"]
  , qa = "framer-EJjHf"
  , La = {
    aqGhCg0Ct: "framer-v-1jo92pv",
    bqzPNuXr3: "framer-v-1xwjhpk"
};
function wr(e, ...r) {
    let n = {};
    return r?.forEach(a=>a && Object.assign(n, e[a])),
    n
}
var Pa = {
    default: {
        damping: 60,
        delay: 0,
        mass: 1,
        stiffness: 500,
        type: "spring"
    }
}
  , Na = ({value: e, children: r})=>{
    let n = de(Y)
      , a = e ?? n.transition
      , i = U(()=>({
        ...n,
        transition: a
    }), [JSON.stringify(a)]);
    return t(Y.Provider, {
        value: i,
        children: r
    })
}
  , Da = x(X)
  , Oa = {
    "Desktop/Tablet": "bqzPNuXr3",
    Phone: "aqGhCg0Ct"
}
  , Ma = ({height: e, id: r, width: n, ...a})=>{
    var i, o;
    return {
        ...a,
        variant: (o = (i = Oa[a.variant]) !== null && i !== void 0 ? i : a.variant) !== null && o !== void 0 ? o : "bqzPNuXr3"
    }
}
  , za = (e,r)=>r.join("-") + e.layoutDependency
  , Ea = V(function(e, r) {
    let {activeLocale: n, setLocale: a} = ae()
      , {style: i, className: o, layoutId: s, variant: h, ...d} = Ma(e)
      , {baseVariant: m, classNames: f, gestureVariant: c, setGestureState: u, setVariant: b, transition: l, variants: C} = oe({
        cycleOrder: Ia,
        defaultVariant: "bqzPNuXr3",
        transitions: Pa,
        variant: h,
        variantClassNames: La
    })
      , y = za(e, C)
      , R = S(null)
      , W = re()
      , w = [];
    return t(N, {
        id: s ?? W,
        children: t(Da, {
            animate: C,
            initial: !1,
            children: t(Na, {
                value: l,
                children: t(x.div, {
                    ...d,
                    className: M(qa, ...w, "framer-1xwjhpk", o, f),
                    "data-framer-name": "Desktop/Tablet",
                    layoutDependency: y,
                    layoutId: "bqzPNuXr3",
                    onHoverEnd: ()=>u({
                        isHovered: !1
                    }),
                    onHoverStart: ()=>u({
                        isHovered: !0
                    }),
                    onTap: ()=>u({
                        isPressed: !1
                    }),
                    onTapCancel: ()=>u({
                        isPressed: !1
                    }),
                    onTapStart: ()=>u({
                        isPressed: !0
                    }),
                    ref: r ?? R,
                    style: {
                        ...i
                    },
                    ...wr({
                        aqGhCg0Ct: {
                            "data-framer-name": "Phone"
                        }
                    }, m, c),
                    children: t(x.div, {
                        className: "framer-10m2qld-container",
                        layoutDependency: y,
                        layoutId: "nbjtfCVPH-container",
                        children: t(we, {
                            alignment: "center",
                            direction: "left",
                            fadeOptions: {
                                fadeAlpha: 0,
                                fadeContent: !0,
                                fadeInset: 4,
                                fadeWidth: 100,
                                overflow: !1
                            },
                            gap: 40,
                            height: "100%",
                            hoverFactor: .4,
                            id: "nbjtfCVPH",
                            layoutId: "nbjtfCVPH",
                            padding: 10,
                            paddingBottom: 10,
                            paddingLeft: 10,
                            paddingPerSide: !1,
                            paddingRight: 10,
                            paddingTop: 10,
                            sizingOptions: {
                                heightType: !0,
                                widthType: !0
                            },
                            slots: [t(x.div, {
                                className: "framer-1fnedl3-container",
                                layoutDependency: y,
                                layoutId: "ckdx1DMWR-container",
                                children: t(se, {
                                    height: "100%",
                                    id: "ckdx1DMWR",
                                    layoutId: "ckdx1DMWR",
                                    QC2pTHcHG: "thin",
                                    style: {
                                        height: "100%",
                                        width: "100%"
                                    },
                                    variant: "IhAF6VbDb",
                                    width: "100%",
                                    ZA3O5UdYP: "rgb(122, 122, 122)",
                                    zu2BQmQeb: "figma"
                                })
                            }), t(x.div, {
                                className: "framer-1jcxn7q-container",
                                layoutDependency: y,
                                layoutId: "JSXeexQYA-container",
                                children: t(se, {
                                    height: "100%",
                                    id: "JSXeexQYA",
                                    layoutId: "JSXeexQYA",
                                    QC2pTHcHG: "thin",
                                    style: {
                                        height: "100%",
                                        width: "100%"
                                    },
                                    variant: "IhAF6VbDb",
                                    width: "100%",
                                    ZA3O5UdYP: "rgb(122, 122, 122)",
                                    zu2BQmQeb: "css"
                                })
                            }), t(x.div, {
                                className: "framer-19im6aj-container",
                                layoutDependency: y,
                                layoutId: "p5SHA32FV-container",
                                children: t(se, {
                                    height: "100%",
                                    id: "p5SHA32FV",
                                    layoutId: "p5SHA32FV",
                                    QC2pTHcHG: "thin",
                                    style: {
                                        height: "100%",
                                        width: "100%"
                                    },
                                    variant: "IhAF6VbDb",
                                    width: "100%",
                                    ZA3O5UdYP: "rgb(122, 122, 122)",
                                    zu2BQmQeb: "framer"
                                })
                            }), t(x.div, {
                                className: "framer-13oebp1-container",
                                layoutDependency: y,
                                layoutId: "k6NW21QRC-container",
                                children: t(se, {
                                    height: "100%",
                                    id: "k6NW21QRC",
                                    layoutId: "k6NW21QRC",
                                    QC2pTHcHG: "thin",
                                    style: {
                                        height: "100%",
                                        width: "100%"
                                    },
                                    variant: "IhAF6VbDb",
                                    width: "100%",
                                    ZA3O5UdYP: "rgb(122, 122, 122)",
                                    zu2BQmQeb: "atom"
                                })
                            }), t(x.div, {
                                className: "framer-yvnbp0-container",
                                layoutDependency: y,
                                layoutId: "DQAOe72nA-container",
                                children: t(se, {
                                    height: "100%",
                                    id: "DQAOe72nA",
                                    layoutId: "DQAOe72nA",
                                    QC2pTHcHG: "thin",
                                    style: {
                                        height: "100%",
                                        width: "100%"
                                    },
                                    variant: "IhAF6VbDb",
                                    width: "100%",
                                    ZA3O5UdYP: "rgb(122, 122, 122)",
                                    zu2BQmQeb: "Google"
                                })
                            })],
                            speed: 50,
                            style: {
                                height: "100%",
                                width: "100%"
                            },
                            width: "100%",
                            ...wr({
                                aqGhCg0Ct: {
                                    fadeOptions: {
                                        fadeAlpha: 0,
                                        fadeContent: !0,
                                        fadeInset: 17,
                                        fadeWidth: 100,
                                        overflow: !1
                                    }
                                }
                            }, m, c)
                        })
                    })
                })
            })
        })
    })
})
  , Va = ['.framer-EJjHf[data-border="true"]::after, .framer-EJjHf [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }', "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-EJjHf.framer-1aqhuei, .framer-EJjHf .framer-1aqhuei { display: block; }", ".framer-EJjHf.framer-1xwjhpk { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: min-content; }", ".framer-EJjHf .framer-10m2qld-container { cursor: default; flex: none; height: 167px; position: relative; width: 1041px; }", ".framer-EJjHf .framer-1fnedl3-container, .framer-EJjHf .framer-1jcxn7q-container, .framer-EJjHf .framer-19im6aj-container, .framer-EJjHf .framer-13oebp1-container, .framer-EJjHf .framer-yvnbp0-container { cursor: default; height: 50px; position: relative; width: 50px; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-EJjHf.framer-1xwjhpk { gap: 0px; } .framer-EJjHf.framer-1xwjhpk > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-EJjHf.framer-1xwjhpk > :first-child { margin-left: 0px; } .framer-EJjHf.framer-1xwjhpk > :last-child { margin-right: 0px; } }", ".framer-EJjHf.framer-v-1jo92pv .framer-10m2qld-container { height: 95px; width: 517px; }"]
  , Se = G(Ea, Va, "framer-EJjHf")
  , vt = Se;
Se.displayName = "Stack Carrousel";
Se.defaultProps = {
    height: 167,
    width: 1041
};
ne(Se, {
    variant: {
        options: ["bqzPNuXr3", "aqGhCg0Ct"],
        optionTitles: ["Desktop/Tablet", "Phone"],
        title: "Variant",
        type: v.Enum
    }
});
B(Se, [...ja, ...Ha]);
var Ya = L(se)
  , Ga = ["tp0iOouxe", "gLIyU9hkS", "JrSov9U6I", "W4VXSpTHa"]
  , Ba = "framer-YCngu"
  , Qa = {
    gLIyU9hkS: "framer-v-1pdsi2y",
    JrSov9U6I: "framer-v-1094v2l",
    tp0iOouxe: "framer-v-1y1s7td",
    W4VXSpTHa: "framer-v-xg72f4"
};
function Za(e, ...r) {
    let n = {};
    return r?.forEach(a=>a && Object.assign(n, e[a])),
    n
}
var Ja = {
    default: {
        damping: 60,
        delay: 0,
        mass: 1,
        stiffness: 500,
        type: "spring"
    }
}
  , Ka = ({value: e, children: r})=>{
    let n = de(Y)
      , a = e ?? n.transition
      , i = U(()=>({
        ...n,
        transition: a
    }), [JSON.stringify(a)]);
    return t(Y.Provider, {
        value: i,
        children: r
    })
}
  , $a = x(X)
  , en = {
    "Pointing Left Phone": "JrSov9U6I",
    "Pointing Left": "tp0iOouxe",
    "Pointing Right Phone": "W4VXSpTHa",
    "Pointing Right": "gLIyU9hkS"
}
  , tn = ({buttonFill: e, height: r, id: n, text: a, width: i, ...o})=>{
    var s, h, d, m;
    return {
        ...o,
        OsGW_mslC: (s = e ?? o.OsGW_mslC) !== null && s !== void 0 ? s : "rgb(255, 251, 0)",
        variant: (d = (h = en[o.variant]) !== null && h !== void 0 ? h : o.variant) !== null && d !== void 0 ? d : "tp0iOouxe",
        w7JiQRFgs: (m = a ?? o.w7JiQRFgs) !== null && m !== void 0 ? m : "Hi, I'm Muhhamed "
    }
}
  , rn = (e,r)=>r.join("-") + e.layoutDependency
  , an = V(function(e, r) {
    let {activeLocale: n, setLocale: a} = ae()
      , {style: i, className: o, layoutId: s, variant: h, OsGW_mslC: d, w7JiQRFgs: m, ...f} = tn(e)
      , {baseVariant: c, classNames: u, gestureVariant: b, setGestureState: l, setVariant: C, transition: y, variants: R} = oe({
        cycleOrder: Ga,
        defaultVariant: "tp0iOouxe",
        transitions: Ja,
        variant: h,
        variantClassNames: Qa
    })
      , W = rn(e, R)
      , w = S(null)
      , H = re()
      , T = [ze];
    return t(N, {
        id: s ?? H,
        children: t($a, {
            animate: R,
            initial: !1,
            children: t(Ka, {
                value: y,
                children: j(x.div, {
                    ...f,
                    className: M(Ba, ...T, "framer-1y1s7td", o, u),
                    "data-framer-name": "Pointing Left",
                    layoutDependency: W,
                    layoutId: "tp0iOouxe",
                    onHoverEnd: ()=>l({
                        isHovered: !1
                    }),
                    onHoverStart: ()=>l({
                        isHovered: !0
                    }),
                    onTap: ()=>l({
                        isPressed: !1
                    }),
                    onTapCancel: ()=>l({
                        isPressed: !1
                    }),
                    onTapStart: ()=>l({
                        isPressed: !0
                    }),
                    ref: r ?? w,
                    style: {
                        ...i
                    },
                    ...Za({
                        gLIyU9hkS: {
                            "data-framer-name": "Pointing Right"
                        },
                        JrSov9U6I: {
                            "data-framer-name": "Pointing Left Phone"
                        },
                        W4VXSpTHa: {
                            "data-framer-name": "Pointing Right Phone"
                        }
                    }, c, b),
                    children: [t(x.div, {
                        className: "framer-18qp09u",
                        layoutDependency: W,
                        layoutId: "qJRSohUah",
                        children: t(x.div, {
                            className: "framer-jqjgc",
                            layoutDependency: W,
                            layoutId: "WQ_XFVhiH",
                            style: {
                                rotate: 0
                            },
                            variants: {
                                gLIyU9hkS: {
                                    rotate: 90
                                },
                                W4VXSpTHa: {
                                    rotate: 90
                                }
                            },
                            children: t(x.div, {
                                className: "framer-twgcz-container",
                                layoutDependency: W,
                                layoutId: "dCky7PUXQ-container",
                                children: t(se, {
                                    height: "100%",
                                    id: "dCky7PUXQ",
                                    layoutId: "dCky7PUXQ",
                                    QC2pTHcHG: "fill",
                                    style: {
                                        height: "100%",
                                        width: "100%"
                                    },
                                    variant: "PRbfDc60j",
                                    width: "100%",
                                    ZA3O5UdYP: d,
                                    zu2BQmQeb: "navigation-arrow"
                                })
                            })
                        })
                    }), t(x.div, {
                        className: "framer-bjkjgg",
                        "data-framer-name": "Button",
                        layoutDependency: W,
                        layoutId: "iX6X2E2Gs",
                        style: {
                            backgroundColor: d,
                            borderBottomLeftRadius: 7,
                            borderBottomRightRadius: 7,
                            borderTopLeftRadius: 7,
                            borderTopRightRadius: 7
                        },
                        children: t(z, {
                            __fromCanvasComponent: !0,
                            children: t(X, {
                                children: t(x.p, {
                                    className: "framer-styles-preset-1hcerco",
                                    "data-styles-preset": "Mh8l2Hg_t",
                                    style: {
                                        "--framer-text-color": "var(--extracted-r6o4lv, rgb(0, 0, 0))"
                                    },
                                    children: "Hi, I'm Muhhamed "
                                })
                            }),
                            className: "framer-ixkmyw",
                            layoutDependency: W,
                            layoutId: "b0yNOUm19",
                            style: {
                                "--extracted-r6o4lv": "rgb(0, 0, 0)",
                                "--framer-link-text-color": "rgb(0, 153, 255)",
                                "--framer-link-text-decoration": "underline"
                            },
                            text: m,
                            verticalAlignment: "top",
                            withExternalLayout: !0
                        })
                    })]
                })
            })
        })
    })
})
  , nn = ['.framer-YCngu[data-border="true"]::after, .framer-YCngu [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }', "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-YCngu.framer-3tlbah, .framer-YCngu .framer-3tlbah { display: block; }", ".framer-YCngu.framer-1y1s7td { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: min-content; }", ".framer-YCngu .framer-18qp09u { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 76px; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 9px; }", ".framer-YCngu .framer-jqjgc { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: absolute; right: -17px; top: 1px; width: min-content; z-index: 1; }", ".framer-YCngu .framer-twgcz-container { flex: none; height: 22px; position: relative; width: 22px; }", ".framer-YCngu .framer-bjkjgg { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 9px 15px 9px 15px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }", ".framer-YCngu .framer-ixkmyw { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-YCngu.framer-1y1s7td, .framer-YCngu .framer-18qp09u, .framer-YCngu .framer-jqjgc, .framer-YCngu .framer-bjkjgg { gap: 0px; } .framer-YCngu.framer-1y1s7td > *, .framer-YCngu .framer-jqjgc > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-YCngu.framer-1y1s7td > :first-child, .framer-YCngu .framer-jqjgc > :first-child, .framer-YCngu .framer-bjkjgg > :first-child { margin-left: 0px; } .framer-YCngu.framer-1y1s7td > :last-child, .framer-YCngu .framer-jqjgc > :last-child, .framer-YCngu .framer-bjkjgg > :last-child { margin-right: 0px; } .framer-YCngu .framer-18qp09u > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-YCngu .framer-18qp09u > :first-child { margin-top: 0px; } .framer-YCngu .framer-18qp09u > :last-child { margin-bottom: 0px; } .framer-YCngu .framer-bjkjgg > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } }", ".framer-YCngu.framer-v-1pdsi2y .framer-18qp09u, .framer-YCngu.framer-v-xg72f4 .framer-18qp09u { order: 1; }", ".framer-YCngu.framer-v-1pdsi2y .framer-jqjgc { left: -14px; right: unset; top: 0px; }", ".framer-YCngu.framer-v-1pdsi2y .framer-bjkjgg { order: 0; }", ".framer-YCngu.framer-v-1094v2l .framer-jqjgc { right: -12px; top: 6px; }", ".framer-YCngu.framer-v-1094v2l .framer-twgcz-container { height: 16px; order: 0; width: 16px; }", ".framer-YCngu.framer-v-1094v2l .framer-bjkjgg { padding: 6px 10px 6px 10px; }", ".framer-YCngu.framer-v-xg72f4 .framer-jqjgc { left: -12px; right: unset; top: 5px; }", ".framer-YCngu.framer-v-xg72f4 .framer-twgcz-container { height: 14px; order: 0; width: 14px; }", ".framer-YCngu.framer-v-xg72f4 .framer-bjkjgg { order: 0; padding: 6px 10px 6px 10px; }", ...Me]
  , Ae = G(an, nn, "framer-YCngu")
  , Be = Ae;
Ae.displayName = "Arrow Button";
Ae.defaultProps = {
    height: 76,
    width: 178
};
ne(Ae, {
    variant: {
        options: ["tp0iOouxe", "gLIyU9hkS", "JrSov9U6I", "W4VXSpTHa"],
        optionTitles: ["Pointing Left", "Pointing Right", "Pointing Left Phone", "Pointing Right Phone"],
        title: "Variant",
        type: v.Enum
    },
    OsGW_mslC: {
        defaultValue: "rgb(255, 251, 0)",
        title: "Button Fill",
        type: v.Color
    },
    w7JiQRFgs: {
        defaultValue: "Hi, I'm Muhhamed ",
        displayTextArea: !1,
        title: "Text",
        type: v.String
    }
});
B(Ae, [...Ya, ...Oe]);
function Wr(e) {
    let r = S(null);
    return r.current === null && (r.current = e()),
    r.current
}
var Tr = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
function on(e=5) {
    return Array(e).fill(0).map(()=>Tr[Math.floor(Math.random() * Tr.length)]).join("")
}
function kr(e=5) {
    return Wr(()=>on(e))
}
var sn = ["AD1uRb789", "t6uYX0tBZ", "AnI2DvQZf", "JG7MxGgTY", "snFARdAmz", "Nz_Z2NTH0", "cHv8JY9g7", "tR7FlThNE", "bg0lLngd2", "FKNQjSL73", "UozSdcuUY", "EgLxQrxHD", "vol5AdrV3", "rbMcqs1eA", "OY_j7HdJV", "mcvPgNUgN", "Jj_gJ6raO", "UYFenO8zH", "RpMB9X2cU", "tExww8aRk", "anaA6RL0b", "y8osi5SA0", "v2n6jd8d8", "vrPxXX3Sq", "YC5psLXzO", "wQ9whLvFH", "hUi9TraZo", "ji0e3Gqv5", "nMHdUM1t6", "Stnp3oRU4", "TxmZTsvXB", "bNhqIdQoj", "OYkCSZPL0", "bOMpuyzc_", "NqCoJY2pH"]
  , ln = {
    AD1uRb789: "framer-v-rqhbs3",
    t6uYX0tBZ: "framer-v-ina8tq",
    AnI2DvQZf: "framer-v-lwbc2o",
    JG7MxGgTY: "framer-v-vqryag",
    snFARdAmz: "framer-v-kwp1i3",
    Nz_Z2NTH0: "framer-v-1h8ejmh",
    cHv8JY9g7: "framer-v-c75qsa",
    tR7FlThNE: "framer-v-1ftwjq5",
    bg0lLngd2: "framer-v-osfy8l",
    FKNQjSL73: "framer-v-5qhg5s",
    UozSdcuUY: "framer-v-5ats54",
    EgLxQrxHD: "framer-v-z5mnn6",
    vol5AdrV3: "framer-v-6xnqop",
    rbMcqs1eA: "framer-v-xmx6ye",
    OY_j7HdJV: "framer-v-a1v8wx",
    mcvPgNUgN: "framer-v-1oj0oue",
    Jj_gJ6raO: "framer-v-19e1lqz",
    UYFenO8zH: "framer-v-16en86l",
    RpMB9X2cU: "framer-v-1vzsblg",
    tExww8aRk: "framer-v-1kgllbw",
    anaA6RL0b: "framer-v-zia1yx",
    y8osi5SA0: "framer-v-9mi1m7",
    v2n6jd8d8: "framer-v-zgdwlg",
    vrPxXX3Sq: "framer-v-1dgnypb",
    YC5psLXzO: "framer-v-rum36c",
    wQ9whLvFH: "framer-v-1u5c2u8",
    hUi9TraZo: "framer-v-1dt8e1w",
    ji0e3Gqv5: "framer-v-1rkl824",
    nMHdUM1t6: "framer-v-17d51pb",
    Stnp3oRU4: "framer-v-158neyh",
    TxmZTsvXB: "framer-v-1atb71u",
    bNhqIdQoj: "framer-v-1x8h963",
    OYkCSZPL0: "framer-v-hblyuj",
    bOMpuyzc_: "framer-v-cra8ie",
    NqCoJY2pH: "framer-v-1sz721s"
}
  , cn = {
    Jason: "AD1uRb789",
    Jess: "t6uYX0tBZ",
    Olli: "AnI2DvQZf",
    Myah: "JG7MxGgTY",
    Ammaar: "snFARdAmz",
    Siena: "Nz_Z2NTH0",
    Cheryl: "cHv8JY9g7",
    Aleeza: "tR7FlThNE",
    Elli: "bg0lLngd2",
    Piotr: "FKNQjSL73",
    Ayisha: "UozSdcuUY",
    Nataniel: "EgLxQrxHD",
    Nikita: "vol5AdrV3",
    Tim: "rbMcqs1eA",
    Carley: "OY_j7HdJV",
    Arda: "mcvPgNUgN",
    "Lacey-Mae": "Jj_gJ6raO",
    Bo: "UYFenO8zH",
    Shelbie: "RpMB9X2cU",
    Dillon: "tExww8aRk",
    Selin: "OYkCSZPL0",
    Rhian: "y8osi5SA0",
    Ada: "v2n6jd8d8",
    Lois: "vrPxXX3Sq",
    Maisie: "YC5psLXzO",
    Lori: "wQ9whLvFH",
    Jardel: "hUi9TraZo",
    Jethro: "ji0e3Gqv5",
    Carmen: "nMHdUM1t6",
    Patrik: "Stnp3oRU4",
    Barry: "TxmZTsvXB",
    Alejandro: "bNhqIdQoj",
    Denny: "bOMpuyzc_",
    Becca: "NqCoJY2pH"
}
  , fn = {
    default: {
        type: "spring",
        ease: [.44, 0, .56, 1],
        duration: .3,
        delay: 0,
        stiffness: 500,
        damping: 60,
        mass: 1
    }
}
  , dn = V(function({style: e, className: r, layoutId: n, width: a, height: i, variant: o="AD1uRb789", background: s="rgb(255, 219, 222)", radius: h=60, rotation: d=0, ...m}, f) {
    let u = cn[o] || o
      , {variants: b, baseVariant: l, gestureVariant: C, classNames: y, transition: R, setVariant: W, setGestureState: w} = oe({
        defaultVariant: "AD1uRb789",
        variant: u,
        transitions: fn,
        variantClassNames: ln,
        cycleOrder: sn
    })
      , H = U(()=>({
        t6uYX0tBZ: {
            AD1uRb789: {
                center: !1,
                "data-framer-name": "Jess",
                __contentWrapperStyle: {
                    width: "100%",
                    height: "100%",
                    padding: "0px 0px 0px 0px"
                }
            },
            XGgsiaAin: {
                background: {
                    src: new URL("https://framerusercontent.com/images/XfjXHJ2H7SzzlzPr1bGFm1T9BpI.png").href,
                    pixelWidth: 440,
                    pixelHeight: 440,
                    intrinsicWidth: 440,
                    intrinsicHeight: 440,
                    fit: "fill"
                },
                intrinsicWidth: 440,
                intrinsicHeight: 440
            }
        },
        AnI2DvQZf: {
            AD1uRb789: {
                center: !1,
                "data-framer-name": "Olli",
                __contentWrapperStyle: {
                    width: "100%",
                    height: "100%",
                    padding: "0px 0px 0px 0px"
                }
            },
            XGgsiaAin: {
                background: {
                    src: new URL("https://framerusercontent.com/images/qCpU7HJtiveCC9wTFuh7L4wc8YM.png").href,
                    pixelWidth: 440,
                    pixelHeight: 440,
                    intrinsicWidth: 440,
                    intrinsicHeight: 440,
                    fit: "fill"
                },
                intrinsicWidth: 440,
                intrinsicHeight: 440
            }
        },
        JG7MxGgTY: {
            AD1uRb789: {
                center: !1,
                "data-framer-name": "Myah",
                __contentWrapperStyle: {
                    width: "100%",
                    height: "100%",
                    padding: "0px 0px 0px 0px"
                }
            },
            XGgsiaAin: {
                background: {
                    src: new URL("https://framerusercontent.com/images/Q8IGGb6PvVKrjNuovM2HijDWFU.png").href,
                    pixelWidth: 440,
                    pixelHeight: 440,
                    intrinsicWidth: 440,
                    intrinsicHeight: 440,
                    fit: "fill"
                },
                intrinsicWidth: 440,
                intrinsicHeight: 440
            }
        },
        snFARdAmz: {
            AD1uRb789: {
                center: !1,
                "data-framer-name": "Ammaar",
                __contentWrapperStyle: {
                    width: "100%",
                    height: "100%",
                    padding: "0px 0px 0px 0px"
                }
            },
            XGgsiaAin: {
                background: {
                    src: new URL("https://framerusercontent.com/images/iGk4x1NJSVgWzFvuQQADJp9I.png").href,
                    pixelWidth: 440,
                    pixelHeight: 440,
                    intrinsicWidth: 440,
                    intrinsicHeight: 440,
                    fit: "fill"
                },
                intrinsicWidth: 440,
                intrinsicHeight: 440
            }
        },
        Nz_Z2NTH0: {
            AD1uRb789: {
                center: !1,
                "data-framer-name": "Siena",
                __contentWrapperStyle: {
                    width: "100%",
                    height: "100%",
                    padding: "0px 0px 0px 0px"
                }
            },
            XGgsiaAin: {
                background: {
                    src: new URL("https://framerusercontent.com/images/ikD34vgzaLM6N50MKdcR9HVBnk.png").href,
                    pixelWidth: 440,
                    pixelHeight: 440,
                    intrinsicWidth: 440,
                    intrinsicHeight: 440,
                    fit: "fill"
                },
                intrinsicWidth: 440,
                intrinsicHeight: 440
            }
        },
        cHv8JY9g7: {
            AD1uRb789: {
                center: !1,
                "data-framer-name": "Cheryl",
                __contentWrapperStyle: {
                    width: "100%",
                    height: "100%",
                    padding: "0px 0px 0px 0px"
                }
            },
            XGgsiaAin: {
                background: {
                    src: new URL("https://framerusercontent.com/images/mUVPNgOqhd1MFYjLtFtiBwvxfY.png").href,
                    pixelWidth: 440,
                    pixelHeight: 440,
                    intrinsicWidth: 440,
                    intrinsicHeight: 440,
                    fit: "fill"
                },
                intrinsicWidth: 440,
                intrinsicHeight: 440
            }
        },
        tR7FlThNE: {
            AD1uRb789: {
                center: !1,
                "data-framer-name": "Aleeza",
                __contentWrapperStyle: {
                    width: "100%",
                    height: "100%",
                    padding: "0px 0px 0px 0px"
                }
            },
            XGgsiaAin: {
                background: {
                    src: new URL("https://framerusercontent.com/images/62fnqd1V6QN3j0vPr4hlpB3HnQ.png").href,
                    pixelWidth: 440,
                    pixelHeight: 440,
                    intrinsicWidth: 440,
                    intrinsicHeight: 440,
                    fit: "fill"
                },
                intrinsicWidth: 440,
                intrinsicHeight: 440
            }
        },
        bg0lLngd2: {
            AD1uRb789: {
                center: !1,
                "data-framer-name": "Elli",
                __contentWrapperStyle: {
                    width: "100%",
                    height: "100%",
                    padding: "0px 0px 0px 0px"
                }
            },
            XGgsiaAin: {
                background: {
                    src: new URL("https://framerusercontent.com/images/Vu8TxX7VMCMZDjoliFK7D0nOyX0.png").href,
                    pixelWidth: 440,
                    pixelHeight: 440,
                    intrinsicWidth: 440,
                    intrinsicHeight: 440,
                    fit: "fill"
                },
                intrinsicWidth: 440,
                intrinsicHeight: 440
            }
        },
        FKNQjSL73: {
            AD1uRb789: {
                center: !1,
                "data-framer-name": "Piotr",
                __contentWrapperStyle: {
                    width: "100%",
                    height: "100%",
                    padding: "0px 0px 0px 0px"
                }
            },
            XGgsiaAin: {
                background: {
                    src: new URL("https://framerusercontent.com/images/ofIUD8MCjke7Xz8jkh29AWqajJo.png").href,
                    pixelWidth: 440,
                    pixelHeight: 440,
                    intrinsicWidth: 440,
                    intrinsicHeight: 440,
                    fit: "fill"
                },
                intrinsicWidth: 440,
                intrinsicHeight: 440
            }
        },
        UozSdcuUY: {
            AD1uRb789: {
                center: !1,
                "data-framer-name": "Ayisha",
                __contentWrapperStyle: {
                    width: "100%",
                    height: "100%",
                    padding: "0px 0px 0px 0px"
                }
            },
            XGgsiaAin: {
                background: {
                    src: new URL("https://framerusercontent.com/images/5nnqp2inSINDktAAWpI7gxJei0w.png").href,
                    pixelWidth: 440,
                    pixelHeight: 440,
                    intrinsicWidth: 440,
                    intrinsicHeight: 440,
                    fit: "fill"
                },
                intrinsicWidth: 440,
                intrinsicHeight: 440
            }
        },
        EgLxQrxHD: {
            AD1uRb789: {
                center: !1,
                "data-framer-name": "Nataniel",
                __contentWrapperStyle: {
                    width: "100%",
                    height: "100%",
                    padding: "0px 0px 0px 0px"
                }
            },
            XGgsiaAin: {
                background: {
                    src: new URL("https://framerusercontent.com/images/lKaaStgbmdIe8TfrIkFlKzHazV0.png").href,
                    pixelWidth: 440,
                    pixelHeight: 440,
                    intrinsicWidth: 440,
                    intrinsicHeight: 440,
                    fit: "fill"
                },
                intrinsicWidth: 440,
                intrinsicHeight: 440
            }
        },
        vol5AdrV3: {
            AD1uRb789: {
                center: !1,
                "data-framer-name": "Nikita",
                __contentWrapperStyle: {
                    width: "100%",
                    height: "100%",
                    padding: "0px 0px 0px 0px"
                }
            },
            XGgsiaAin: {
                background: {
                    src: new URL("https://framerusercontent.com/images/bpeWvtoxuajqEtlukZhUFt9KM.png").href,
                    pixelWidth: 440,
                    pixelHeight: 440,
                    intrinsicWidth: 440,
                    intrinsicHeight: 440,
                    fit: "fill"
                },
                intrinsicWidth: 440,
                intrinsicHeight: 440
            }
        },
        rbMcqs1eA: {
            AD1uRb789: {
                center: !1,
                "data-framer-name": "Tim",
                __contentWrapperStyle: {
                    width: "100%",
                    height: "100%",
                    padding: "0px 0px 0px 0px"
                }
            },
            XGgsiaAin: {
                background: {
                    src: new URL("https://framerusercontent.com/images/GoWNvgKZvVTzmZQKHoh2Ccnk4E.png").href,
                    pixelWidth: 440,
                    pixelHeight: 440,
                    intrinsicWidth: 440,
                    intrinsicHeight: 440,
                    fit: "fill"
                },
                intrinsicWidth: 440,
                intrinsicHeight: 440
            }
        },
        OY_j7HdJV: {
            AD1uRb789: {
                center: !1,
                "data-framer-name": "Carley",
                __contentWrapperStyle: {
                    width: "100%",
                    height: "100%",
                    padding: "0px 0px 0px 0px"
                }
            },
            XGgsiaAin: {
                background: {
                    src: new URL("https://framerusercontent.com/images/40ioqcNOrsoBIVnpfGVsXh9jpM.png").href,
                    pixelWidth: 440,
                    pixelHeight: 440,
                    intrinsicWidth: 440,
                    intrinsicHeight: 440,
                    fit: "fill"
                },
                intrinsicWidth: 440,
                intrinsicHeight: 440
            }
        },
        mcvPgNUgN: {
            AD1uRb789: {
                center: !1,
                "data-framer-name": "Arda",
                __contentWrapperStyle: {
                    width: "100%",
                    height: "100%",
                    padding: "0px 0px 0px 0px"
                }
            },
            XGgsiaAin: {
                background: {
                    src: new URL("https://framerusercontent.com/images/U8RU6HcYtcK32VUY2uTSF9QTqo.png").href,
                    pixelWidth: 440,
                    pixelHeight: 440,
                    intrinsicWidth: 440,
                    intrinsicHeight: 440,
                    fit: "fill"
                },
                intrinsicWidth: 440,
                intrinsicHeight: 440
            }
        },
        Jj_gJ6raO: {
            AD1uRb789: {
                center: !1,
                "data-framer-name": "Lacey-Mae",
                __contentWrapperStyle: {
                    width: "100%",
                    height: "100%",
                    padding: "0px 0px 0px 0px"
                }
            },
            XGgsiaAin: {
                background: {
                    src: new URL("https://framerusercontent.com/images/1OwzdZHx9ElDw1ZAavs6WGWBSw.png").href,
                    pixelWidth: 440,
                    pixelHeight: 440,
                    intrinsicWidth: 440,
                    intrinsicHeight: 440,
                    fit: "fill"
                },
                intrinsicWidth: 440,
                intrinsicHeight: 440
            }
        },
        UYFenO8zH: {
            AD1uRb789: {
                center: !1,
                "data-framer-name": "Bo",
                __contentWrapperStyle: {
                    width: "100%",
                    height: "100%",
                    padding: "0px 0px 0px 0px"
                }
            },
            XGgsiaAin: {
                background: {
                    src: new URL("https://framerusercontent.com/images/Tlwk5hINm0ferm6DGDyUoqL6pc.png").href,
                    pixelWidth: 440,
                    pixelHeight: 440,
                    intrinsicWidth: 440,
                    intrinsicHeight: 440,
                    fit: "fill"
                },
                intrinsicWidth: 440,
                intrinsicHeight: 440
            }
        },
        RpMB9X2cU: {
            AD1uRb789: {
                center: !1,
                "data-framer-name": "Shelbie",
                __contentWrapperStyle: {
                    width: "100%",
                    height: "100%",
                    padding: "0px 0px 0px 0px"
                }
            },
            XGgsiaAin: {
                background: {
                    src: new URL("https://framerusercontent.com/images/Pm9TTOkN341IYtePLdPGmhG0E.png").href,
                    pixelWidth: 440,
                    pixelHeight: 440,
                    intrinsicWidth: 440,
                    intrinsicHeight: 440,
                    fit: "fill"
                },
                intrinsicWidth: 440,
                intrinsicHeight: 440
            }
        },
        tExww8aRk: {
            AD1uRb789: {
                center: !1,
                "data-framer-name": "Dillon",
                __contentWrapperStyle: {
                    width: "100%",
                    height: "100%",
                    padding: "0px 0px 0px 0px"
                }
            },
            XGgsiaAin: {
                background: {
                    src: new URL("https://framerusercontent.com/images/GOsVbTpzcPHfZ9EMcOSPddNS6go.png").href,
                    pixelWidth: 440,
                    pixelHeight: 440,
                    intrinsicWidth: 440,
                    intrinsicHeight: 440,
                    fit: "fill"
                },
                intrinsicWidth: 440,
                intrinsicHeight: 440
            }
        },
        anaA6RL0b: {
            AD1uRb789: {
                center: !1,
                "data-framer-name": "Selin",
                __contentWrapperStyle: {
                    width: "100%",
                    height: "100%",
                    padding: "0px 0px 0px 0px"
                }
            },
            XGgsiaAin: {
                background: {
                    src: new URL("https://framerusercontent.com/images/GaxkgrTkzKlxI7B3EJtZp4dabI.png").href,
                    pixelWidth: 440,
                    pixelHeight: 440,
                    intrinsicWidth: 440,
                    intrinsicHeight: 440,
                    fit: "fill"
                },
                intrinsicWidth: 440,
                intrinsicHeight: 440
            }
        },
        y8osi5SA0: {
            AD1uRb789: {
                center: !1,
                "data-framer-name": "Rhian",
                __contentWrapperStyle: {
                    width: "100%",
                    height: "100%",
                    padding: "0px 0px 0px 0px"
                }
            },
            XGgsiaAin: {
                background: {
                    src: new URL("https://framerusercontent.com/images/LEd8c4Zf28fU29XZ4c04ImOzs.png").href,
                    pixelWidth: 440,
                    pixelHeight: 440,
                    intrinsicWidth: 440,
                    intrinsicHeight: 440,
                    fit: "fill"
                },
                intrinsicWidth: 440,
                intrinsicHeight: 440
            }
        },
        v2n6jd8d8: {
            AD1uRb789: {
                center: !1,
                "data-framer-name": "Ada",
                __contentWrapperStyle: {
                    width: "100%",
                    height: "100%",
                    padding: "0px 0px 0px 0px"
                }
            },
            XGgsiaAin: {
                background: {
                    src: new URL("https://framerusercontent.com/images/3oPVBjvZEnTN9DZf7tUMW54TS2k.png").href,
                    pixelWidth: 440,
                    pixelHeight: 440,
                    intrinsicWidth: 440,
                    intrinsicHeight: 440,
                    fit: "fill"
                },
                intrinsicWidth: 440,
                intrinsicHeight: 440
            }
        },
        vrPxXX3Sq: {
            AD1uRb789: {
                center: !1,
                "data-framer-name": "Lois",
                __contentWrapperStyle: {
                    width: "100%",
                    height: "100%",
                    padding: "0px 0px 0px 0px"
                }
            },
            XGgsiaAin: {
                background: {
                    src: new URL("https://framerusercontent.com/images/99qcDQP7xzsxlgXsq47uID7sAm4.png").href,
                    pixelWidth: 440,
                    pixelHeight: 440,
                    intrinsicWidth: 440,
                    intrinsicHeight: 440,
                    fit: "fill"
                },
                intrinsicWidth: 440,
                intrinsicHeight: 440
            }
        },
        YC5psLXzO: {
            AD1uRb789: {
                center: !1,
                "data-framer-name": "Maisie",
                __contentWrapperStyle: {
                    width: "100%",
                    height: "100%",
                    padding: "0px 0px 0px 0px"
                }
            },
            XGgsiaAin: {
                background: {
                    src: new URL("https://framerusercontent.com/images/BRu6MhHhp9NjldqU9TTCEAEoGKg.png").href,
                    pixelWidth: 440,
                    pixelHeight: 440,
                    intrinsicWidth: 440,
                    intrinsicHeight: 440,
                    fit: "fill"
                },
                intrinsicWidth: 440,
                intrinsicHeight: 440
            }
        },
        wQ9whLvFH: {
            AD1uRb789: {
                center: !1,
                "data-framer-name": "Lori",
                __contentWrapperStyle: {
                    width: "100%",
                    height: "100%",
                    padding: "0px 0px 0px 0px"
                }
            },
            XGgsiaAin: {
                background: {
                    src: new URL("https://framerusercontent.com/images/ebCaegtDakUaQGRtXSYmPR43Q.png").href,
                    pixelWidth: 440,
                    pixelHeight: 440,
                    intrinsicWidth: 440,
                    intrinsicHeight: 440,
                    fit: "fill"
                },
                intrinsicWidth: 440,
                intrinsicHeight: 440
            }
        },
        hUi9TraZo: {
            AD1uRb789: {
                center: !1,
                "data-framer-name": "Jardel",
                __contentWrapperStyle: {
                    width: "100%",
                    height: "100%",
                    padding: "0px 0px 0px 0px"
                }
            },
            XGgsiaAin: {
                background: {
                    src: new URL("https://framerusercontent.com/images/B8580pOtLEBrg7wIFp62oXfFQ.png").href,
                    pixelWidth: 440,
                    pixelHeight: 440,
                    intrinsicWidth: 440,
                    intrinsicHeight: 440,
                    fit: "fill"
                },
                intrinsicWidth: 440,
                intrinsicHeight: 440
            }
        },
        ji0e3Gqv5: {
            AD1uRb789: {
                center: !1,
                "data-framer-name": "Jethro",
                __contentWrapperStyle: {
                    width: "100%",
                    height: "100%",
                    padding: "0px 0px 0px 0px"
                }
            },
            XGgsiaAin: {
                background: {
                    src: new URL("https://framerusercontent.com/images/szTmT1K4f8nn5CutvLWFlBdt8k.png").href,
                    pixelWidth: 440,
                    pixelHeight: 440,
                    intrinsicWidth: 440,
                    intrinsicHeight: 440,
                    fit: "fill"
                },
                intrinsicWidth: 440,
                intrinsicHeight: 440
            }
        },
        nMHdUM1t6: {
            AD1uRb789: {
                center: !1,
                "data-framer-name": "Carmen",
                __contentWrapperStyle: {
                    width: "100%",
                    height: "100%",
                    padding: "0px 0px 0px 0px"
                }
            },
            XGgsiaAin: {
                background: {
                    src: new URL("https://framerusercontent.com/images/e6GZhp0s96FXaIiLYSRyZYZYypo.png").href,
                    pixelWidth: 440,
                    pixelHeight: 440,
                    intrinsicWidth: 440,
                    intrinsicHeight: 440,
                    fit: "fill"
                },
                intrinsicWidth: 440,
                intrinsicHeight: 440
            }
        },
        Stnp3oRU4: {
            AD1uRb789: {
                center: !1,
                "data-framer-name": "Patrik",
                __contentWrapperStyle: {
                    width: "100%",
                    height: "100%",
                    padding: "0px 0px 0px 0px"
                }
            },
            XGgsiaAin: {
                background: {
                    src: new URL("https://framerusercontent.com/images/6xGPl1j87mG8XoUzCwRYzEohM8.png").href,
                    pixelWidth: 440,
                    pixelHeight: 440,
                    intrinsicWidth: 440,
                    intrinsicHeight: 440,
                    fit: "fill"
                },
                intrinsicWidth: 440,
                intrinsicHeight: 440
            }
        },
        TxmZTsvXB: {
            AD1uRb789: {
                center: !1,
                "data-framer-name": "Barry",
                __contentWrapperStyle: {
                    width: "100%",
                    height: "100%",
                    padding: "0px 0px 0px 0px"
                }
            },
            XGgsiaAin: {
                background: {
                    src: new URL("https://framerusercontent.com/images/mhC7dhzvLcqmUofPcC2BW8vh4.png").href,
                    pixelWidth: 440,
                    pixelHeight: 440,
                    intrinsicWidth: 440,
                    intrinsicHeight: 440,
                    fit: "fill"
                },
                intrinsicWidth: 440,
                intrinsicHeight: 440
            }
        },
        bNhqIdQoj: {
            AD1uRb789: {
                center: !1,
                "data-framer-name": "Alejandro",
                __contentWrapperStyle: {
                    width: "100%",
                    height: "100%",
                    padding: "0px 0px 0px 0px"
                }
            },
            XGgsiaAin: {
                background: {
                    src: new URL("https://framerusercontent.com/images/YynUn6LSLWVQia4pOtIxhY77SSA.png").href,
                    pixelWidth: 440,
                    pixelHeight: 440,
                    intrinsicWidth: 440,
                    intrinsicHeight: 440,
                    fit: "fill"
                },
                intrinsicWidth: 440,
                intrinsicHeight: 440
            }
        },
        OYkCSZPL0: {
            AD1uRb789: {
                center: !1,
                "data-framer-name": "Selin",
                __contentWrapperStyle: {
                    width: "100%",
                    height: "100%",
                    padding: "0px 0px 0px 0px"
                }
            },
            XGgsiaAin: {
                background: {
                    src: new URL("https://framerusercontent.com/images/u2K6WSbQVKHiOUvOF3auFya79y8.png").href,
                    pixelWidth: 440,
                    pixelHeight: 440,
                    intrinsicWidth: 440,
                    intrinsicHeight: 440,
                    fit: "fill"
                },
                intrinsicWidth: 440,
                intrinsicHeight: 440
            }
        },
        bOMpuyzc_: {
            AD1uRb789: {
                center: !1,
                "data-framer-name": "Denny",
                __contentWrapperStyle: {
                    width: "100%",
                    height: "100%",
                    padding: "0px 0px 0px 0px"
                }
            },
            XGgsiaAin: {
                background: {
                    src: new URL("https://framerusercontent.com/images/BJytCbStiWSy9rxpQ0wU6I3SNiI.png").href,
                    pixelWidth: 440,
                    pixelHeight: 440,
                    intrinsicWidth: 440,
                    intrinsicHeight: 440,
                    fit: "fill"
                },
                intrinsicWidth: 440,
                intrinsicHeight: 440
            }
        },
        NqCoJY2pH: {
            AD1uRb789: {
                center: !1,
                "data-framer-name": "Becca",
                __contentWrapperStyle: {
                    width: "100%",
                    height: "100%",
                    padding: "0px 0px 0px 0px"
                }
            },
            XGgsiaAin: {
                background: {
                    src: new URL("https://framerusercontent.com/images/xyIaIR0LhPm1PVVUVrQ7TDGTyA.png").href,
                    pixelWidth: 440,
                    pixelHeight: 440,
                    intrinsicWidth: 440,
                    intrinsicHeight: 440,
                    fit: "fill"
                },
                intrinsicWidth: 440,
                intrinsicHeight: 440
            }
        }
    }), [])
      , T = Zt(l, C, H)
      , P = kr();
    return t(N, {
        id: n ?? P,
        children: t(x.div, {
            initial: u,
            animate: b,
            className: M("framer-47hmZ", y),
            style: {
                display: "contents"
            },
            onHoverStart: ()=>w({
                isHovered: !0
            }),
            onHoverEnd: ()=>w({
                isHovered: !1
            }),
            onTapStart: ()=>w({
                isPressed: !0
            }),
            onTap: ()=>w({
                isPressed: !1
            }),
            onTapCancel: ()=>w({
                isPressed: !1
            }),
            children: t(Ut, {
                ...m,
                layoutId: "AD1uRb789",
                className: M("framer-rqhbs3", r),
                style: {
                    borderBottomLeftRadius: h,
                    borderBottomRightRadius: h,
                    borderTopRightRadius: h,
                    borderTopLeftRadius: h,
                    backgroundColor: s,
                    ...e
                },
                direction: "horizontal",
                distribution: "center",
                alignment: "center",
                gap: 10,
                __fromCanvasComponent: !0,
                __contentWrapperStyle: {
                    width: "100%",
                    height: "100%",
                    padding: "0px 0px 0px 0px"
                },
                center: !1,
                "data-framer-name": "Jason",
                transition: R,
                ref: f,
                ...T("AD1uRb789"),
                children: t(Ne, {
                    layoutId: "XGgsiaAin",
                    className: "framer-kj56m6",
                    style: {
                        borderBottomLeftRadius: 60,
                        borderBottomRightRadius: 60,
                        borderTopRightRadius: 60,
                        borderTopLeftRadius: 60,
                        rotate: d
                    },
                    background: {
                        src: new URL("https://framerusercontent.com/images/CPGgYEBeFy4gDXe5dDzh1qjQG1w.png").href,
                        pixelWidth: 440,
                        pixelHeight: 440,
                        intrinsicWidth: 440,
                        intrinsicHeight: 440,
                        fit: "fill"
                    },
                    "data-framer-name": "Avatar",
                    variants: {
                        t6uYX0tBZ: {
                            borderBottomLeftRadius: 60,
                            borderBottomRightRadius: 60,
                            borderTopRightRadius: 60,
                            borderTopLeftRadius: 60
                        }
                    },
                    transition: R,
                    ...T("XGgsiaAin")
                })
            })
        })
    })
})
  , mn = ['.framer-47hmZ [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none;}', ".framer-47hmZ .framer-rqhbs3 { position: relative; overflow: hidden; width: 100px; height: 100px; }", ".framer-47hmZ .framer-kj56m6 { position: relative; overflow: visible; width: 1px; height: 100%; flex: 1 0 0px; }", ".framer-47hmZ.framer-v-ina8tq .framer-rqhbs3, .framer-47hmZ.framer-v-lwbc2o .framer-rqhbs3, .framer-47hmZ.framer-v-vqryag .framer-rqhbs3, .framer-47hmZ.framer-v-kwp1i3 .framer-rqhbs3, .framer-47hmZ.framer-v-1h8ejmh .framer-rqhbs3, .framer-47hmZ.framer-v-c75qsa .framer-rqhbs3, .framer-47hmZ.framer-v-1ftwjq5 .framer-rqhbs3, .framer-47hmZ.framer-v-osfy8l .framer-rqhbs3, .framer-47hmZ.framer-v-5qhg5s .framer-rqhbs3, .framer-47hmZ.framer-v-5ats54 .framer-rqhbs3, .framer-47hmZ.framer-v-z5mnn6 .framer-rqhbs3, .framer-47hmZ.framer-v-6xnqop .framer-rqhbs3, .framer-47hmZ.framer-v-xmx6ye .framer-rqhbs3, .framer-47hmZ.framer-v-a1v8wx .framer-rqhbs3, .framer-47hmZ.framer-v-1oj0oue .framer-rqhbs3, .framer-47hmZ.framer-v-19e1lqz .framer-rqhbs3, .framer-47hmZ.framer-v-16en86l .framer-rqhbs3, .framer-47hmZ.framer-v-1vzsblg .framer-rqhbs3, .framer-47hmZ.framer-v-1kgllbw .framer-rqhbs3, .framer-47hmZ.framer-v-zia1yx .framer-rqhbs3, .framer-47hmZ.framer-v-9mi1m7 .framer-rqhbs3, .framer-47hmZ.framer-v-zgdwlg .framer-rqhbs3, .framer-47hmZ.framer-v-1dgnypb .framer-rqhbs3, .framer-47hmZ.framer-v-rum36c .framer-rqhbs3, .framer-47hmZ.framer-v-1u5c2u8 .framer-rqhbs3, .framer-47hmZ.framer-v-1dt8e1w .framer-rqhbs3, .framer-47hmZ.framer-v-1rkl824 .framer-rqhbs3, .framer-47hmZ.framer-v-17d51pb .framer-rqhbs3, .framer-47hmZ.framer-v-158neyh .framer-rqhbs3, .framer-47hmZ.framer-v-1atb71u .framer-rqhbs3, .framer-47hmZ.framer-v-1x8h963 .framer-rqhbs3, .framer-47hmZ.framer-v-hblyuj .framer-rqhbs3, .framer-47hmZ.framer-v-cra8ie .framer-rqhbs3, .framer-47hmZ.framer-v-1sz721s .framer-rqhbs3 { width: 100px; height: 100px; }", ".framer-47hmZ.framer-v-1ftwjq5 .framer-kj56m6, .framer-47hmZ.framer-v-osfy8l .framer-kj56m6 { width: 1px; height: 100%; right: auto; bottom: auto; left: auto; top: auto; flex: 1 0 0px; }"]
  , je = G(dn, mn)
  , bt = je;
je.displayName = "Memoji";
je.defaultProps = {
    width: 100,
    height: 100
};
ne(je, {
    variant: {
        type: v.Enum,
        title: "Variant",
        options: ["AD1uRb789", "t6uYX0tBZ", "AnI2DvQZf", "JG7MxGgTY", "snFARdAmz", "Nz_Z2NTH0", "cHv8JY9g7", "tR7FlThNE", "bg0lLngd2", "FKNQjSL73", "UozSdcuUY", "EgLxQrxHD", "vol5AdrV3", "rbMcqs1eA", "OY_j7HdJV", "mcvPgNUgN", "Jj_gJ6raO", "UYFenO8zH", "RpMB9X2cU", "tExww8aRk", "anaA6RL0b", "y8osi5SA0", "v2n6jd8d8", "vrPxXX3Sq", "YC5psLXzO", "wQ9whLvFH", "hUi9TraZo", "ji0e3Gqv5", "nMHdUM1t6", "Stnp3oRU4", "TxmZTsvXB", "bNhqIdQoj", "OYkCSZPL0", "bOMpuyzc_", "NqCoJY2pH"],
        optionTitles: ["Jason", "Jess", "Olli", "Myah", "Ammaar", "Siena", "Cheryl", "Aleeza", "Elli", "Piotr", "Ayisha", "Nataniel", "Nikita", "Tim", "Carley", "Arda", "Lacey-Mae", "Bo", "Shelbie", "Dillon", "Selin", "Rhian", "Ada", "Lois", "Maisie", "Lori", "Jardel", "Jethro", "Carmen", "Patrik", "Barry", "Alejandro", "Selin", "Denny", "Becca"]
    },
    VurELiPqN: {
        type: v.Color,
        title: "Background",
        defaultValue: "rgb(255, 219, 222)"
    },
    Z2NuoQS1k: {
        type: v.Number,
        title: "Radius",
        defaultValue: 60,
        min: 0
    },
    tc_6nmlts: {
        type: v.Number,
        title: "Rotation",
        defaultValue: 0,
        min: -180,
        max: 180,
        unit: "\xB0"
    }
});
B(je, []);
var pn = L(bt)
  , hn = ["yuDMiAjzI"]
  , un = "framer-12Szc"
  , gn = {
    yuDMiAjzI: "framer-v-9jx5hc"
};
var xn = {
    default: {
        damping: 60,
        delay: 0,
        mass: 1,
        stiffness: 500,
        type: "spring"
    }
}
  , yn = ({value: e, children: r})=>{
    let n = de(Y)
      , a = e ?? n.transition
      , i = U(()=>({
        ...n,
        transition: a
    }), [JSON.stringify(a)]);
    return t(Y.Provider, {
        value: i,
        children: r
    })
}
  , vn = x(X)
  , bn = ({height: e, id: r, width: n, ...a})=>({
    ...a
})
  , wn = (e,r)=>r.join("-") + e.layoutDependency
  , Wn = V(function(e, r) {
    let {activeLocale: n, setLocale: a} = ae()
      , {style: i, className: o, layoutId: s, variant: h, ...d} = bn(e)
      , {baseVariant: m, classNames: f, gestureVariant: c, setGestureState: u, setVariant: b, transition: l, variants: C} = oe({
        cycleOrder: hn,
        defaultVariant: "yuDMiAjzI",
        transitions: xn,
        variant: h,
        variantClassNames: gn
    })
      , y = wn(e, C)
      , R = S(null)
      , W = re()
      , w = [];
    return t(N, {
        id: s ?? W,
        children: t(vn, {
            animate: C,
            initial: !1,
            children: t(yn, {
                value: l,
                children: t(x.div, {
                    ...d,
                    className: M(un, ...w, "framer-9jx5hc", o, f),
                    "data-framer-name": "Memoji",
                    layoutDependency: y,
                    layoutId: "yuDMiAjzI",
                    onHoverEnd: ()=>u({
                        isHovered: !1
                    }),
                    onHoverStart: ()=>u({
                        isHovered: !0
                    }),
                    onTap: ()=>u({
                        isPressed: !1
                    }),
                    onTapCancel: ()=>u({
                        isPressed: !1
                    }),
                    onTapStart: ()=>u({
                        isPressed: !0
                    }),
                    ref: r ?? R,
                    style: {
                        ...i
                    },
                    children: t(x.div, {
                        className: "framer-f9do9y-container",
                        layoutDependency: y,
                        layoutId: "a80HDwMsd-container",
                        children: t(bt, {
                            background: "var(--token-3ea46c56-d009-4987-bb7c-030497462c1b, rgb(46, 46, 46))",
                            height: "100%",
                            id: "a80HDwMsd",
                            layoutId: "a80HDwMsd",
                            radius: 8,
                            rotation: 0,
                            style: {
                                height: "100%",
                                width: "100%"
                            },
                            variant: "AD1uRb789",
                            width: "100%"
                        })
                    })
                })
            })
        })
    })
})
  , Tn = ['.framer-12Szc[data-border="true"]::after, .framer-12Szc [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }', "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-12Szc.framer-remu8u, .framer-12Szc .framer-remu8u { display: block; }", ".framer-12Szc.framer-9jx5hc { height: 40px; overflow: hidden; position: relative; width: 40px; }", ".framer-12Szc .framer-f9do9y-container { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; }"]
  , Qe = G(Wn, Tn, "framer-12Szc")
  , wt = Qe;
Qe.displayName = "Profile Picture";
Qe.defaultProps = {
    height: 40,
    width: 40
};
B(Qe, [...pn]);
var kn = L(wt)
  , _n = _e(x.div)
  , Fn = ["nke7Kxrqr", "YmQPoAmym"]
  , Xn = "framer-0b54v"
  , Cn = {
    nke7Kxrqr: "framer-v-1qqtxn3",
    YmQPoAmym: "framer-v-a60p9b"
};
function _r(e, ...r) {
    let n = {};
    return r?.forEach(a=>a && Object.assign(n, e[a])),
    n
}
var Rn = {
    default: {
        damping: 60,
        delay: 0,
        mass: 1,
        stiffness: 500,
        type: "spring"
    }
}
  , Rr = {
    damping: 30,
    delay: .4,
    mass: 1,
    stiffness: 400,
    type: "spring"
}
  , Sn = {
    opacity: 0,
    rotate: 0,
    scale: .6,
    transition: Rr,
    x: 0,
    y: 0
}
  , Fr = (e,r)=>`perspective(1200px) ${r}`
  , Xr = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    transition: Rr,
    x: 0,
    y: 0
}
  , Cr = {
    opacity: .001,
    rotate: 0,
    scale: .6,
    x: 0,
    y: 0
}
  , An = ({value: e, children: r})=>{
    let n = de(Y)
      , a = e ?? n.transition
      , i = U(()=>({
        ...n,
        transition: a
    }), [JSON.stringify(a)]);
    return t(Y.Provider, {
        value: i,
        children: r
    })
}
  , jn = x(X)
  , Hn = {
    "Desktop/Tablet": "nke7Kxrqr",
    Phone: "YmQPoAmym"
}
  , In = ({height: e, id: r, width: n, ...a})=>{
    var i, o;
    return {
        ...a,
        variant: (o = (i = Hn[a.variant]) !== null && i !== void 0 ? i : a.variant) !== null && o !== void 0 ? o : "nke7Kxrqr"
    }
}
  , qn = (e,r)=>r.join("-") + e.layoutDependency
  , Ln = V(function(e, r) {
    let {activeLocale: n, setLocale: a} = ae()
      , {style: i, className: o, layoutId: s, variant: h, ...d} = In(e)
      , {baseVariant: m, classNames: f, gestureVariant: c, setGestureState: u, setVariant: b, transition: l, variants: C} = oe({
        cycleOrder: Fn,
        defaultVariant: "nke7Kxrqr",
        transitions: Rn,
        variant: h,
        variantClassNames: Cn
    })
      , y = qn(e, C)
      , R = S(null)
      , W = re()
      , w = [];
    return t(N, {
        id: s ?? W,
        children: t(jn, {
            animate: C,
            initial: !1,
            children: t(An, {
                value: l,
                children: t(x.div, {
                    ...d,
                    className: M(Xn, ...w, "framer-1qqtxn3", o, f),
                    "data-border": !0,
                    "data-framer-name": "Desktop/Tablet",
                    layoutDependency: y,
                    layoutId: "nke7Kxrqr",
                    onHoverEnd: ()=>u({
                        isHovered: !1
                    }),
                    onHoverStart: ()=>u({
                        isHovered: !0
                    }),
                    onTap: ()=>u({
                        isPressed: !1
                    }),
                    onTapCancel: ()=>u({
                        isPressed: !1
                    }),
                    onTapStart: ()=>u({
                        isPressed: !0
                    }),
                    ref: r ?? R,
                    style: {
                        "--border-bottom-width": "1px",
                        "--border-color": 'var(--token-0de9483b-0bf0-4674-9c5c-41d571dd7ffe, rgb(61, 61, 61)) /* {"name":"Borders"} */',
                        "--border-left-width": "1px",
                        "--border-right-width": "1px",
                        "--border-style": "solid",
                        "--border-top-width": "1px",
                        borderBottomLeftRadius: 8,
                        borderBottomRightRadius: 8,
                        borderTopLeftRadius: 8,
                        borderTopRightRadius: 8,
                        boxShadow: "3px 1px 18px 1px rgba(0, 0, 0, 0.25)",
                        ...i
                    },
                    ..._r({
                        YmQPoAmym: {
                            "data-framer-name": "Phone"
                        }
                    }, m, c),
                    children: t(x.div, {
                        className: "framer-g20d3x",
                        layoutDependency: y,
                        layoutId: "HD1dUWHTI",
                        style: {
                            backgroundColor: "var(--token-e23e35a8-daac-4a36-9609-ee45ae8fcf3e, rgb(35, 35, 35))",
                            borderBottomLeftRadius: 7,
                            borderBottomRightRadius: 7,
                            borderTopLeftRadius: 7,
                            borderTopRightRadius: 7
                        },
                        children: t(_n, {
                            __perspectiveFX: !1,
                            __smartComponentFX: !0,
                            __targetOpacity: 1,
                            animate: p("animate", "vrew3m", Xr, "1qqtxn3"),
                            className: "framer-vrew3m-container",
                            "data-framer-appear-id": "vrew3m",
                            exit: Sn,
                            initial: p("initial", "vrew3m", Cr, "1qqtxn3"),
                            layoutDependency: y,
                            layoutId: "dexIqQml3-container",
                            transformTemplate: A("vrew3m", Fr),
                            ..._r({
                                YmQPoAmym: {
                                    "data-framer-appear-id": "x7n5pz",
                                    animate: p("animate", "x7n5pz", Xr, "a60p9b"),
                                    initial: p("initial", "x7n5pz", Cr, "a60p9b"),
                                    transformTemplate: A("x7n5pz", Fr)
                                }
                            }, m, c),
                            children: t(wt, {
                                height: "100%",
                                id: "dexIqQml3",
                                layoutId: "dexIqQml3",
                                style: {
                                    height: "100%",
                                    width: "100%"
                                },
                                width: "100%"
                            })
                        })
                    })
                })
            })
        })
    })
})
  , Pn = ['.framer-0b54v[data-border="true"]::after, .framer-0b54v [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }', "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-0b54v.framer-18hh6u, .framer-0b54v .framer-18hh6u { display: block; }", ".framer-0b54v.framer-1qqtxn3 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 5px 5px 5px 5px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }", ".framer-0b54v .framer-g20d3x { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 8px 8px 8px 8px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }", ".framer-0b54v .framer-vrew3m-container { flex: none; height: 98px; position: relative; width: 98px; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-0b54v.framer-1qqtxn3, .framer-0b54v .framer-g20d3x { gap: 0px; } .framer-0b54v.framer-1qqtxn3 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-0b54v.framer-1qqtxn3 > :first-child, .framer-0b54v .framer-g20d3x > :first-child { margin-left: 0px; } .framer-0b54v.framer-1qqtxn3 > :last-child, .framer-0b54v .framer-g20d3x > :last-child { margin-right: 0px; } .framer-0b54v .framer-g20d3x > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } }", ".framer-0b54v.framer-v-a60p9b .framer-vrew3m-container { height: 50px; width: 50px; }"]
  , He = G(Ln, Pn, "framer-0b54v")
  , Wt = He;
He.displayName = "Profile";
He.defaultProps = {
    height: 124,
    width: 124
};
ne(He, {
    variant: {
        options: ["nke7Kxrqr", "YmQPoAmym"],
        optionTitles: ["Desktop/Tablet", "Phone"],
        title: "Variant",
        type: v.Enum
    }
});
B(He, [...kn]);
var Nn = L(dt)
  , Dn = L(Wt)
  , On = L(Be)
  , Sr = _e(fe)
  , Mn = L(vt)
  , zn = _e(x.div)
  , En = L(Ee)
  , Vn = L(ft)
  , Un = L(ct);
var Yn = {
    e7YxtXCzn: "(max-width: 809px)",
    us63uQt7f: "(min-width: 810px) and (max-width: 1199px)",
    WQLkyLRf1: "(min-width: 1200px)"
}
  , Gn = ()=>typeof document < "u"
  , Ar = "framer-TWFWX"
  , Bn = {
    e7YxtXCzn: "framer-v-1tv2w3x",
    us63uQt7f: "framer-v-13j3ajv",
    WQLkyLRf1: "framer-v-72rtr7"
}
  , Hr = {
    delay: .8,
    duration: .6,
    ease: [.72, .07, .21, 1.02],
    type: "tween"
}
  , Qn = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: Hr,
    x: 0,
    y: 50
}
  , We = (e,r)=>`perspective(1200px) translate(-50%, -50%) ${r}`
  , Tt = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: Hr,
    x: 0,
    y: 0
}
  , Te = {
    opacity: .001,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 50
}
  , Ir = {
    delay: .5,
    duration: .6,
    ease: [.72, .07, .21, 1.02],
    type: "tween"
}
  , Zn = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: Ir,
    x: 0,
    y: 150
}
  , Q = (e,r)=>`perspective(1200px) ${r}`
  , kt = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: Ir,
    x: 0,
    y: 0
}
  , J = {
    opacity: .001,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 150
}
  , qr = {
    delay: .6,
    duration: .6,
    ease: [.72, .07, .21, 1.02],
    type: "tween"
}
  , Jn = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: qr,
    x: 0,
    y: 150
}
  , _t = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: qr,
    x: 0,
    y: 0
}
  , Lr = {
    delay: .7,
    duration: .6,
    ease: [.72, .07, .21, 1.02],
    type: "tween"
}
  , Kn = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: Lr,
    x: 0,
    y: 50
}
  , Ft = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: Lr,
    x: 0,
    y: 0
}
  , Pr = {
    delay: .9,
    duration: .6,
    ease: [.72, .07, .21, 1.02],
    type: "tween"
}
  , $n = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: Pr,
    x: 0,
    y: 150
}
  , Xt = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: Pr,
    x: 0,
    y: 0
}
  , Nr = {
    delay: 1,
    duration: .6,
    ease: [.72, .07, .21, 1.02],
    type: "tween"
}
  , ei = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: Nr,
    x: 0,
    y: 150
}
  , jr = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: Nr,
    x: 0,
    y: 0
}
  , ti = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 27
}
  , Dr = {
    damping: 30,
    delay: 0,
    mass: 1,
    stiffness: 400,
    type: "spring"
}
  , ri = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: Dr,
    x: 0,
    y: 27
}
  , Ct = e=>typeof e == "object" && e !== null && typeof e.src == "string" ? e : typeof e == "string" ? {
    src: e
} : void 0
  , ai = ({query: e, children: r})=>{
    let n = Kt(e);
    return r(n)
}
  , Rt = mt()
  , ni = {
    Desktop: "WQLkyLRf1",
    Phone: "e7YxtXCzn",
    Tablet: "us63uQt7f"
}
  , ii = ({height: e, id: r, width: n, ...a})=>{
    var i, o;
    return {
        ...a,
        variant: (o = (i = ni[a.variant]) !== null && i !== void 0 ? i : a.variant) !== null && o !== void 0 ? o : "WQLkyLRf1"
    }
}
  , oi = V(function(e, r) {
    let {activeLocale: n, setLocale: a} = ae()
      , {style: i, className: o, layoutId: s, variant: h, vxvJpsGMRws9v5Kz8V: d, IF2bV_uxZws9v5Kz8V: m, g0EGSpAZhws9v5Kz8V: f, YOTPkR0Qows9v5Kz8V: c, idws9v5Kz8V: u, ...b} = ii(e);
    Pt(()=>{
        let T = mt(void 0, n);
        if (document.title = T.title || "",
        T.viewport) {
            var P;
            (P = document.querySelector('meta[name="viewport"]')) === null || P === void 0 || P.setAttribute("content", T.viewport)
        }
        if (T.bodyClassName)
            return Array.from(document.body.classList).filter(g=>g.startsWith("framer-body-")).map(g=>document.body.classList.remove(g)),
            document.body.classList.add(`${T.bodyClassName}-framer-TWFWX`),
            ()=>{
                document.body.classList.remove(`${T.bodyClassName}-framer-TWFWX`)
            }
    }
    , [void 0, n]);
    let[l,C] = Jt(h, Yn, !1)
      , y = void 0
      , R = S(null)
      , W = ()=>["us63uQt7f", "e7YxtXCzn"].includes(l) ? !Gn() : !0
      , w = re()
      , H = [tr, ze, nr];
    return Yt({}),
    t(Gt.Provider, {
        value: {
            primaryVariantId: "WQLkyLRf1",
            variantClassNames: Bn
        },
        children: j(N, {
            id: s ?? w,
            children: [j(x.div, {
                ...b,
                className: M(Ar, ...H, "framer-72rtr7", o),
                ref: r ?? R,
                style: {
                    ...i
                },
                children: [t(I, {
                    breakpoint: l,
                    overrides: {
                        e7YxtXCzn: {
                            width: "min(100vw - 40px, 1450px)"
                        }
                    },
                    children: t(ie, {
                        width: "min(100vw - 80px, 1450px)",
                        children: t(fe, {
                            className: "framer-10a3ka8-container",
                            children: t(I, {
                                breakpoint: l,
                                overrides: {
                                    e7YxtXCzn: {
                                        variant: "YtGM9jrNf"
                                    }
                                },
                                children: t(dt, {
                                    height: "100%",
                                    id: "cVQpPXrWh",
                                    layoutId: "cVQpPXrWh",
                                    style: {
                                        maxWidth: "100%",
                                        width: "100%"
                                    },
                                    variant: "e9F1aSOcq",
                                    width: "100%",
                                    ya6RV_msu: "dasd"
                                })
                            })
                        })
                    })
                }), j("div", {
                    className: "framer-ywmrlk",
                    "data-framer-name": "Hero Layout",
                    name: "Hero Layout",
                    children: [t(ie, {
                        children: t(fe, {
                            className: "framer-1wius5h-container",
                            children: t(I, {
                                breakpoint: l,
                                overrides: {
                                    e7YxtXCzn: {
                                        variant: "YmQPoAmym"
                                    }
                                },
                                children: t(Wt, {
                                    height: "100%",
                                    id: "dh5GaoeW2",
                                    layoutId: "dh5GaoeW2",
                                    variant: "nke7Kxrqr",
                                    width: "100%"
                                })
                            })
                        })
                    }), t(ie, {
                        children: t(I, {
                            breakpoint: l,
                            overrides: {
                                e7YxtXCzn: {
                                    "data-framer-appear-id": "m991ov",
                                    animate: p("animate", "m991ov", Tt, "1tv2w3x"),
                                    initial: p("initial", "m991ov", Te, "1tv2w3x"),
                                    transformTemplate: A("m991ov", We)
                                },
                                us63uQt7f: {
                                    "data-framer-appear-id": "142w26z",
                                    animate: p("animate", "142w26z", Tt, "13j3ajv"),
                                    initial: p("initial", "142w26z", Te, "13j3ajv"),
                                    transformTemplate: A("142w26z", We)
                                }
                            },
                            children: t(Sr, {
                                __framer__adjustPosition: !1,
                                __framer__offset: 0,
                                __framer__parallaxTransformEnabled: !0,
                                __framer__speed: 130,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                animate: p("animate", "a1xojy", Tt, "72rtr7"),
                                className: "framer-a1xojy-container",
                                "data-framer-appear-id": "a1xojy",
                                exit: Qn,
                                initial: p("initial", "a1xojy", Te, "72rtr7"),
                                transformTemplate: A("a1xojy", We),
                                children: t(I, {
                                    breakpoint: l,
                                    overrides: {
                                        e7YxtXCzn: {
                                            variant: "JrSov9U6I"
                                        }
                                    },
                                    children: t(Be, {
                                        height: "100%",
                                        id: "YXjcWm_uM",
                                        layoutId: "YXjcWm_uM",
                                        OsGW_mslC: "rgb(163, 163, 163)",
                                        variant: "tp0iOouxe",
                                        w7JiQRFgs: "Hi, I'm Ravi Patel",
                                        width: "100%"
                                    })
                                })
                            })
                        })
                    }), t(I, {
                        breakpoint: l,
                        overrides: {
                            e7YxtXCzn: {
                                "data-framer-appear-id": "1tt4qpk",
                                animate: p("animate", "1tt4qpk", kt, "1tv2w3x"),
                                initial: p("initial", "1tt4qpk", J, "1tv2w3x"),
                                transformTemplate: A("1tt4qpk", Q)
                            },
                            us63uQt7f: {
                                "data-framer-appear-id": "1plkmue",
                                animate: p("animate", "1plkmue", kt, "13j3ajv"),
                                initial: p("initial", "1plkmue", J, "13j3ajv"),
                                transformTemplate: A("1plkmue", Q)
                            }
                        },
                        children: t(z, {
                            __fromCanvasComponent: !0,
                            animate: p("animate", "1uu1vus", kt, "72rtr7"),
                            children: t(X, {
                                children: t("h1", {
                                    className: "framer-styles-preset-1ogq7h3",
                                    "data-styles-preset": "lc3x1mxQ4",
                                    style: {
                                        "--framer-text-alignment": "center"
                                    },
                                    children: j("span", {
                                        "data-text-fill": "true",
                                        style: {
                                            backgroundImage: "radial-gradient(57.4% 118.6% at 50% 58.9%, var(--token-c59a04d0-3d52-4591-be1d-6424044001a1, rgb(240, 240, 240)) 0%, rgba(236, 236, 236, 1) 30.631629528688297%, var(--token-e23e35a8-daac-4a36-9609-ee45ae8fcf3e, rgb(35, 35, 35)) 100%)"
                                        },
                                        children: ["Digital Designer", t("br", {}), "and Creative Developer"]
                                    })
                                })
                            }),
                            className: "framer-1uu1vus",
                            "data-framer-appear-id": "1uu1vus",
                            exit: Zn,
                            fonts: ["Inter"],
                            initial: p("initial", "1uu1vus", J, "72rtr7"),
                            transformTemplate: A("1uu1vus", Q),
                            verticalAlignment: "top",
                            withExternalLayout: !0
                        })
                    }), t(I, {
                        breakpoint: l,
                        overrides: {
                            e7YxtXCzn: {
                                "data-framer-appear-id": "1iuibyx",
                                animate: p("animate", "1iuibyx", _t, "1tv2w3x"),
                                initial: p("initial", "1iuibyx", J, "1tv2w3x"),
                                transformTemplate: A("1iuibyx", Q)
                            },
                            us63uQt7f: {
                                "data-framer-appear-id": "ljp83x",
                                animate: p("animate", "ljp83x", _t, "13j3ajv"),
                                initial: p("initial", "ljp83x", J, "13j3ajv"),
                                transformTemplate: A("ljp83x", Q)
                            }
                        },
                        children: j(x.div, {
                            animate: p("animate", "1p49ryl", _t, "72rtr7"),
                            className: "framer-1p49ryl",
                            "data-framer-appear-id": "1p49ryl",
                            exit: Jn,
                            initial: p("initial", "1p49ryl", J, "72rtr7"),
                            transformTemplate: A("1p49ryl", Q),
                            children: [j("div", {
                                className: "framer-dacqig",
                                children: [t(z, {
                                    __fromCanvasComponent: !0,
                                    children: t(X, {
                                        children: t("p", {
                                            className: "framer-styles-preset-1hcerco",
                                            "data-styles-preset": "Mh8l2Hg_t",
                                            style: {
                                                "--framer-text-color": "var(--token-e76c097a-6b1c-424d-81e7-8e2648f27f2f, rgb(71, 71, 71))"
                                            },
                                            children: "Contact"
                                        })
                                    }),
                                    className: "framer-1m7dtyp",
                                    fonts: ["Inter"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                }), t(z, {
                                    __fromCanvasComponent: !0,
                                    children: t(X, {
                                        children: t("p", {
                                            className: "framer-styles-preset-1hcerco",
                                            "data-styles-preset": "Mh8l2Hg_t",
                                            children: "starluxetech@gmail.com"
                                        })
                                    }),
                                    className: "framer-tm5sir",
                                    fonts: ["Inter"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                })]
                            }), j("div", {
                                className: "framer-17fpcks",
                                children: [t(z, {
                                    __fromCanvasComponent: !0,
                                    children: t(X, {
                                        children: t("p", {
                                            className: "framer-styles-preset-1hcerco",
                                            "data-styles-preset": "Mh8l2Hg_t",
                                            style: {
                                                "--framer-text-color": "var(--token-e76c097a-6b1c-424d-81e7-8e2648f27f2f, rgb(71, 71, 71))"
                                            },
                                            children: "Location"
                                        })
                                    }),
                                    className: "framer-1stsoct",
                                    fonts: ["Inter"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                }), t(z, {
                                    __fromCanvasComponent: !0,
                                    children: t(X, {
                                        children: t("p", {
                                            className: "framer-styles-preset-1hcerco",
                                            "data-styles-preset": "Mh8l2Hg_t",
                                            children: "Surat, India 🇮🇳/ Remote"
                                        })
                                    }),
                                    className: "framer-xqoiyk",
                                    fonts: ["Inter"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                })]
                            })]
                        })
                    }), t(ie, {
                        children: t(I, {
                            breakpoint: l,
                            overrides: {
                                e7YxtXCzn: {
                                    "data-framer-appear-id": "1pufu9a",
                                    animate: p("animate", "1pufu9a", Ft, "1tv2w3x"),
                                    initial: p("initial", "1pufu9a", Te, "1tv2w3x"),
                                    transformTemplate: A("1pufu9a", We)
                                },
                                us63uQt7f: {
                                    "data-framer-appear-id": "tw2kes",
                                    animate: p("animate", "tw2kes", Ft, "13j3ajv"),
                                    initial: p("initial", "tw2kes", Te, "13j3ajv"),
                                    transformTemplate: A("tw2kes", We)
                                }
                            },
                            children: t(Sr, {
                                __framer__adjustPosition: !1,
                                __framer__offset: 0,
                                __framer__parallaxTransformEnabled: !0,
                                __framer__speed: 120,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                animate: p("animate", "1unle6f", Ft, "72rtr7"),
                                className: "framer-1unle6f-container",
                                "data-framer-appear-id": "1unle6f",
                                exit: Kn,
                                initial: p("initial", "1unle6f", Te, "72rtr7"),
                                transformTemplate: A("1unle6f", We),
                                children: t(I, {
                                    breakpoint: l,
                                    overrides: {
                                        e7YxtXCzn: {
                                            variant: "W4VXSpTHa"
                                        }
                                    },
                                    children: t(Be, {
                                        height: "100%",
                                        id: "OhdXRJhIP",
                                        layoutId: "OhdXRJhIP",
                                        OsGW_mslC: "rgb(255, 93, 43)",
                                        variant: "gLIyU9hkS",
                                        w7JiQRFgs: "Web Designer",
                                        width: "100%"
                                    })
                                })
                            })
                        })
                    })]
                }), t(ie, {
                    children: t(I, {
                        breakpoint: l,
                        overrides: {
                            e7YxtXCzn: {
                                "data-framer-appear-id": "17gd96k",
                                animate: p("animate", "17gd96k", Xt, "1tv2w3x"),
                                initial: p("initial", "17gd96k", J, "1tv2w3x"),
                                transformTemplate: A("17gd96k", Q)
                            },
                            us63uQt7f: {
                                "data-framer-appear-id": "1xqhh66",
                                animate: p("animate", "1xqhh66", Xt, "13j3ajv"),
                                initial: p("initial", "1xqhh66", J, "13j3ajv"),
                                transformTemplate: A("1xqhh66", Q)
                            }
                        },
                        children: t(fe, {
                            animate: p("animate", "gl7g2q", Xt, "72rtr7"),
                            className: "framer-gl7g2q-container",
                            "data-framer-appear-id": "gl7g2q",
                            exit: $n,
                            initial: p("initial", "gl7g2q", J, "72rtr7"),
                            transformTemplate: A("gl7g2q", Q),
                            children: t(I, {
                                breakpoint: l,
                                overrides: {
                                    e7YxtXCzn: {
                                        variant: "aqGhCg0Ct"
                                    }
                                },
                                children: t(vt, {
                                    height: "100%",
                                    id: "Yr4yOIJyA",
                                    layoutId: "Yr4yOIJyA",
                                    style: {
                                        width: "100%"
                                    },
                                    variant: "bqzPNuXr3",
                                    width: "100%"
                                })
                            })
                        })
                    })
                }), t(I, {
                    breakpoint: l,
                    overrides: {
                        e7YxtXCzn: {
                            animate: void 0,
                            exit: void 0,
                            initial: void 0,
                            transformTemplate: void 0
                        },
                        us63uQt7f: {
                            "data-framer-appear-id": "1p3eue3",
                            animate: p("animate", "1p3eue3", jr, "13j3ajv"),
                            initial: p("initial", "1p3eue3", J, "13j3ajv"),
                            transformTemplate: A("1p3eue3", Q)
                        }
                    },
                    children: t(x.div, {
                        animate: p("animate", "eqf3vq", jr, "72rtr7"),
                        className: "framer-eqf3vq",
                        "data-framer-appear-id": "eqf3vq",
                        exit: ei,
                        initial: p("initial", "eqf3vq", J, "72rtr7"),
                        transformTemplate: A("eqf3vq", Q),
                        children: t(ai, {
                            query: {
                                from: {
                                    data: ir,
                                    type: "Collection"
                                },
                                select: [{
                                    name: "vxvJpsGMR",
                                    type: "Identifier"
                                }, {
                                    name: "IF2bV_uxZ",
                                    type: "Identifier"
                                }, {
                                    name: "g0EGSpAZh",
                                    type: "Identifier"
                                }, {
                                    name: "YOTPkR0Qo",
                                    type: "Identifier"
                                }, {
                                    name: "id",
                                    type: "Identifier"
                                }]
                            },
                            children: T=>T.map(({vxvJpsGMR: P, IF2bV_uxZ: g, g0EGSpAZh: q, YOTPkR0Qo: K, id: $},le)=>t(N, {
                                id: `ws9v5Kz8V-${$}`,
                                children: t(Bt.Provider, {
                                    value: {
                                        YOTPkR0Qo: K
                                    },
                                    children: t(I, {
                                        breakpoint: l,
                                        overrides: {
                                            e7YxtXCzn: {
                                                __framer__styleAppearEffectEnabled: void 0,
                                                transformTemplate: void 0
                                            }
                                        },
                                        children: j(zn, {
                                            __framer__animate: {
                                                transition: Dr
                                            },
                                            __framer__animateOnce: !0,
                                            __framer__enter: ti,
                                            __framer__exit: ri,
                                            __framer__styleAppearEffectEnabled: !0,
                                            __framer__threshold: 0,
                                            __perspectiveFX: !1,
                                            __targetOpacity: 1,
                                            className: "framer-1l79iu9",
                                            "data-framer-name": "Work Card",
                                            name: "Work Card",
                                            transformTemplate: Q,
                                            children: [j("div", {
                                                className: "framer-ol6nlk",
                                                "data-framer-name": "Post",
                                                name: "Post",
                                                children: [t(z, {
                                                    __fromCanvasComponent: !0,
                                                    children: t(X, {
                                                        children: t("p", {
                                                            className: "framer-styles-preset-1hcerco",
                                                            "data-styles-preset": "Mh8l2Hg_t",
                                                            style: {
                                                                "--framer-text-color": "var(--token-c59a04d0-3d52-4591-be1d-6424044001a1, rgb(240, 240, 240))"
                                                            },
                                                            children: "Title"
                                                        })
                                                    }),
                                                    className: "framer-edx07w",
                                                    "data-framer-name": "Title",
                                                    fonts: ["Inter"],
                                                    name: "Title",
                                                    text: P,
                                                    verticalAlignment: "top",
                                                    withExternalLayout: !0
                                                }), t(z, {
                                                    __fromCanvasComponent: !0,
                                                    children: t(X, {
                                                        children: t("p", {
                                                            className: "framer-styles-preset-1hcerco",
                                                            "data-styles-preset": "Mh8l2Hg_t",
                                                            style: {
                                                                "--framer-text-color": "var(--token-e76c097a-6b1c-424d-81e7-8e2648f27f2f, rgb(71, 71, 71))"
                                                            },
                                                            children: "Date"
                                                        })
                                                    }),
                                                    className: "framer-36azd3",
                                                    "data-framer-name": "Date",
                                                    fonts: ["Inter"],
                                                    name: "Date",
                                                    text: g,
                                                    verticalAlignment: "top",
                                                    withExternalLayout: !0
                                                })]
                                            }), t(Qt, {
                                                href: {
                                                    pathVariables: {
                                                        YOTPkR0Qo: K
                                                    },
                                                    webPageId: "nCjwbks54"
                                                },
                                                children: t(I, {
                                                    breakpoint: l,
                                                    overrides: {
                                                        e7YxtXCzn: {
                                                            background: {
                                                                alt: "",
                                                                fit: "fill",
                                                                sizes: "max(min(100vw - 40px, 1450px), 1px)",
                                                                ...Ct(q)
                                                            }
                                                        },
                                                        us63uQt7f: {
                                                            background: {
                                                                alt: "",
                                                                fit: "fill",
                                                                sizes: "calc(max((min(100vw - 80px, 1450px) - 400px) / 6, 1px) * 6 + 400px)",
                                                                ...Ct(q)
                                                            }
                                                        }
                                                    },
                                                    children: t(Ne, {
                                                        as: "a",
                                                        background: {
                                                            alt: "",
                                                            fit: "fill",
                                                            sizes: "calc(max((min(100vw - 80px, 1450px) - 200px) / 6, 1px) * 3 + 80px)",
                                                            ...Ct(q)
                                                        },
                                                        className: "framer-1gooi2g framer-lux5qc"
                                                    })
                                                })
                                            }), j("div", {
                                                className: "framer-efbv1y",
                                                "data-framer-name": "Post",
                                                name: "Post",
                                                children: [t("div", {
                                                    className: "framer-1q2fy1",
                                                    "data-border": !0,
                                                    children: t(z, {
                                                        __fromCanvasComponent: !0,
                                                        children: t(X, {
                                                            children: t("p", {
                                                                className: "framer-styles-preset-1hcerco",
                                                                "data-styles-preset": "Mh8l2Hg_t",
                                                                children: "Netlify"
                                                            })
                                                        }),
                                                        className: "framer-1jjbq7z",
                                                        "data-framer-name": "Title",
                                                        fonts: ["Inter"],
                                                        name: "Title",
                                                        verticalAlignment: "top",
                                                        withExternalLayout: !0
                                                    })
                                                }), t("div", {
                                                    className: "framer-acrvkf",
                                                    "data-border": !0,
                                                    children: t(z, {
                                                        __fromCanvasComponent: !0,
                                                        children: t(X, {
                                                            children: t("p", {
                                                                className: "framer-styles-preset-1hcerco",
                                                                "data-styles-preset": "Mh8l2Hg_t",
                                                                children: "StrapiCMS"
                                                            })
                                                        }),
                                                        className: "framer-1mfuezr",
                                                        "data-framer-name": "Title",
                                                        fonts: ["Inter"],
                                                        name: "Title",
                                                        verticalAlignment: "top",
                                                        withExternalLayout: !0
                                                    })
                                                }), t("div", {
                                                    className: "framer-xlgipr",
                                                    "data-border": !0,
                                                    children: t(z, {
                                                        __fromCanvasComponent: !0,
                                                        children: t(X, {
                                                            children: t("p", {
                                                                className: "framer-styles-preset-1hcerco",
                                                                "data-styles-preset": "Mh8l2Hg_t",
                                                                children: "StrapiCMS"
                                                            })
                                                        }),
                                                        className: "framer-sb831y",
                                                        "data-framer-name": "Title",
                                                        fonts: ["Inter"],
                                                        name: "Title",
                                                        verticalAlignment: "top",
                                                        withExternalLayout: !0
                                                    })
                                                })]
                                            })]
                                        })
                                    })
                                })
                            }, $))
                        })
                    })
                }), t("div", {
                    className: "framer-okb42e",
                    children: t("div", {
                        className: "framer-1d3avhb",
                        "data-framer-name": "Topic Container",
                        name: "Topic Container",
                        children: t("div", {
                            className: "framer-5geqr6",
                            children: t(z, {
                                __fromCanvasComponent: !0,
                                children: t(X, {
                                    children: t("h2", {
                                        className: "framer-styles-preset-1ftj3nv",
                                        "data-styles-preset": "j4yGLhBGP",
                                        style: {
                                            "--framer-text-alignment": "center"
                                        },
                                        children: "Hi I'm Ravi, and I craft visually striking digital experiences"
                                    })
                                }),
                                className: "framer-mdkdua",
                                fonts: ["Inter"],
                                verticalAlignment: "top",
                                withExternalLayout: !0
                            })
                        })
                    })
                }), j("div", {
                    className: "framer-tgky4f",
                    children: [t(ie, {
                        children: t(fe, {
                            className: "framer-ekk0as-container",
                            children: t(I, {
                                breakpoint: l,
                                overrides: {
                                    us63uQt7f: {
                                        style: {
                                            width: "100%"
                                        }
                                    }
                                },
                                children: t(Ee, {
                                    height: "100%",
                                    id: "MMVvKLFTg",
                                    JB9Xxl03C: j(X, {
                                        children: [j("p", {
                                            children: ["My expertise lies in creating seamless user experiences and engaging ", t("strong", {
                                                children: "web interfaces"
                                            }), ", using a mix of Adobe Creative Suite, Sketch, and front-end technologies like", t("strong", {
                                                children: " HTML5,"
                                            }), " ", t("strong", {
                                                children: "CSS3"
                                            }), ", and J", t("strong", {
                                                children: "avaScript"
                                            })]
                                        }), t("p", {
                                            children: t("br", {
                                                className: "trailing-break"
                                            })
                                        })]
                                    }),
                                    JZGHgfGGp: "Brain",
                                    layoutId: "MMVvKLFTg",
                                    lG8Wq0qgx: "Skills",
                                    style: {
                                        maxWidth: "100%",
                                        width: "100%"
                                    },
                                    width: "100%"
                                })
                            })
                        })
                    }), t(ie, {
                        children: t(fe, {
                            className: "framer-2610e-container",
                            children: t(I, {
                                breakpoint: l,
                                overrides: {
                                    us63uQt7f: {
                                        style: {
                                            width: "100%"
                                        }
                                    }
                                },
                                children: t(Ee, {
                                    height: "100%",
                                    id: "mmBWqYSwi",
                                    JB9Xxl03C: j(X, {
                                        children: [t("p", {
                                            children: t("br", {
                                                className: "trailing-break"
                                            })
                                        }), t("p", {
                                            children: "I've had the honor of leading the creative direction for a mobile app for a prestigious cultural institution, winning acclaim for its innovative approach to visitor engagement."
                                        })]
                                    }),
                                    JZGHgfGGp: "line-segments",
                                    layoutId: "mmBWqYSwi",
                                    lG8Wq0qgx: "Experiences",
                                    style: {
                                        maxWidth: "100%",
                                        width: "100%"
                                    },
                                    width: "100%"
                                })
                            })
                        })
                    })]
                }), t("div", {
                    className: "framer-1trwwo4",
                    children: t(I, {
                        breakpoint: l,
                        overrides: {
                            e7YxtXCzn: {
                                width: "calc(100vw - 40px)"
                            }
                        },
                        children: t(ie, {
                            children: t(fe, {
                                className: "framer-1nqskuo-container",
                                children: t(I, {
                                    breakpoint: l,
                                    overrides: {
                                        e7YxtXCzn: {
                                            style: {
                                                height: "100%",
                                                width: "100%"
                                            },
                                            variant: "D3ErOqFuF"
                                        }
                                    },
                                    children: t(ft, {
                                        height: "100%",
                                        id: "h5i3XuQaN",
                                        layoutId: "h5i3XuQaN",
                                        variant: "vad5PnoVS",
                                        width: "100%"
                                    })
                                })
                            })
                        })
                    })
                }), W() && t(ie, {
                    children: t(fe, {
                        className: "framer-1ga8s4j-container hidden-13j3ajv hidden-1tv2w3x",
                        children: t(ct, {
                            autoResize: !0,
                            duration: 1.2,
                            height: "100%",
                            id: "y06JkBuOm",
                            infinite: !1,
                            layoutId: "y06JkBuOm",
                            lerp: 1,
                            normalizeWheel: !0,
                            smoothTouch: !0,
                            smoothWheel: !0,
                            syncTouchLerp: .1,
                            touchInertiaMultiplier: 1,
                            touchMultiplier: 2,
                            wheelMultiplier: 1,
                            width: "100%"
                        })
                    })
                })]
            }), t("div", {
                className: M(Ar, ...H),
                id: "overlay"
            })]
        })
    })
})
  , si = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", `.${Rt.bodyClassName}-framer-TWFWX { background: var(--token-e23e35a8-daac-4a36-9609-ee45ae8fcf3e, rgb(35, 35, 35)); }`, ".framer-TWFWX.framer-lux5qc, .framer-TWFWX .framer-lux5qc { display: block; }", ".framer-TWFWX.framer-72rtr7 { align-content: center; align-items: center; background-color: var(--token-e23e35a8-daac-4a36-9609-ee45ae8fcf3e, #232323); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 40px 40px 60px 40px; position: relative; width: 1200px; }", ".framer-TWFWX .framer-10a3ka8-container { flex: none; height: auto; max-width: 1450px; position: relative; width: 100%; }", ".framer-TWFWX .framer-ywmrlk { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: auto; justify-content: center; max-width: 1405px; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 100%; }", ".framer-TWFWX .framer-1wius5h-container, .framer-TWFWX .framer-1nqskuo-container { flex: none; height: auto; position: relative; width: auto; }", ".framer-TWFWX .framer-a1xojy-container { flex: none; height: auto; left: 78%; position: absolute; top: 19%; transform: perspective(1200px) translate(-50%, -50%); width: auto; z-index: 1; }", ".framer-TWFWX .framer-1uu1vus { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; transform: perspective(1200px); white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", ".framer-TWFWX .framer-1p49ryl { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; transform: perspective(1200px); width: min-content; }", ".framer-TWFWX .framer-dacqig, .framer-TWFWX .framer-17fpcks { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 3px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: min-content; }", ".framer-TWFWX .framer-1m7dtyp, .framer-TWFWX .framer-tm5sir, .framer-TWFWX .framer-1stsoct, .framer-TWFWX .framer-xqoiyk { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }", ".framer-TWFWX .framer-1unle6f-container { flex: none; height: auto; left: 22%; position: absolute; top: 32%; transform: perspective(1200px) translate(-50%, -50%); width: auto; z-index: 1; }", ".framer-TWFWX .framer-gl7g2q-container { flex: none; height: auto; position: relative; transform: perspective(1200px); width: 93%; }", ".framer-TWFWX .framer-eqf3vq { display: grid; flex: none; gap: 40px; grid-auto-rows: min-content; grid-template-columns: repeat(6, minmax(1px, 1fr)); height: min-content; justify-content: center; max-width: 1450px; padding: 0px 0px 0px 0px; position: relative; transform: perspective(1200px); width: 100%; }", ".framer-TWFWX .framer-1l79iu9 { align-content: flex-end; align-items: flex-end; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: wrap; gap: 20px; grid-column: auto / span 3; height: auto; justify-content: flex-end; justify-self: start; padding: 0px 0px 20px 0px; position: relative; transform: perspective(1200px); width: 100%; }", ".framer-TWFWX .framer-ol6nlk { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; padding: 0px 0px 0px 0px; position: relative; width: 100%; }", ".framer-TWFWX .framer-edx07w, .framer-TWFWX .framer-36azd3, .framer-TWFWX .framer-1jjbq7z, .framer-TWFWX .framer-1mfuezr, .framer-TWFWX .framer-sb831y { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", ".framer-TWFWX .framer-1gooi2g { align-content: flex-end; align-items: flex-end; aspect-ratio: 1.3598484848484849 / 1; border-bottom-left-radius: 21px; border-bottom-right-radius: 21px; border-top-left-radius: 21px; border-top-right-radius: 21px; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: var(--framer-aspect-ratio-supported, 397px); justify-content: center; overflow: visible; padding: 30px 30px 0px 30px; position: relative; text-decoration: none; width: 100%; }", ".framer-TWFWX .framer-efbv1y { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px 0px 0px 0px; position: relative; width: 100%; }", ".framer-TWFWX .framer-1q2fy1, .framer-TWFWX .framer-acrvkf, .framer-TWFWX .framer-xlgipr { --border-bottom-width: 1px; --border-color: var(--token-1c7cdc5f-282d-4b6b-8100-a82aafc94db6, #3d3d3d); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; border-bottom-left-radius: 9px; border-bottom-right-radius: 9px; border-top-left-radius: 9px; border-top-right-radius: 9px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 8px 15px 8px 15px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }", ".framer-TWFWX .framer-okb42e { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 100px; height: auto; justify-content: center; overflow: hidden; padding: 60px 0px 60px 0px; position: relative; width: 100%; }", ".framer-TWFWX .framer-1d3avhb { align-content: flex-start; align-items: flex-start; border-bottom-left-radius: 9px; border-bottom-right-radius: 9px; border-top-left-radius: 9px; border-top-right-radius: 9px; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 9px 9px 9px 9px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }", ".framer-TWFWX .framer-5geqr6 { align-content: center; align-items: center; border-bottom-left-radius: 6px; border-bottom-right-radius: 6px; border-top-left-radius: 6px; border-top-right-radius: 6px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: flex-start; overflow: visible; padding: 20px 20px 20px 20px; position: relative; width: 100%; }", ".framer-TWFWX .framer-mdkdua { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", ".framer-TWFWX .framer-tgky4f { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 100px; height: auto; justify-content: center; overflow: hidden; padding: 60px 0px 100px 0px; position: relative; width: 100%; }", ".framer-TWFWX .framer-ekk0as-container, .framer-TWFWX .framer-2610e-container { flex: 1 0 0px; height: auto; max-width: 400px; position: relative; width: 1px; }", ".framer-TWFWX .framer-1trwwo4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 100%; }", ".framer-TWFWX .framer-1ga8s4j-container { flex: none; height: auto; position: absolute; right: 0px; top: 1362px; width: auto; }", "@supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-TWFWX.framer-72rtr7, .framer-TWFWX .framer-ywmrlk, .framer-TWFWX .framer-1p49ryl, .framer-TWFWX .framer-dacqig, .framer-TWFWX .framer-17fpcks, .framer-TWFWX .framer-1l79iu9, .framer-TWFWX .framer-1gooi2g, .framer-TWFWX .framer-efbv1y, .framer-TWFWX .framer-1q2fy1, .framer-TWFWX .framer-acrvkf, .framer-TWFWX .framer-xlgipr, .framer-TWFWX .framer-okb42e, .framer-TWFWX .framer-1d3avhb, .framer-TWFWX .framer-5geqr6, .framer-TWFWX .framer-tgky4f, .framer-TWFWX .framer-1trwwo4 { gap: 0px; } .framer-TWFWX.framer-72rtr7 > *, .framer-TWFWX .framer-ywmrlk > * { margin: 0px; margin-bottom: calc(60px / 2); margin-top: calc(60px / 2); } .framer-TWFWX.framer-72rtr7 > :first-child, .framer-TWFWX .framer-ywmrlk > :first-child, .framer-TWFWX .framer-dacqig > :first-child, .framer-TWFWX .framer-17fpcks > :first-child, .framer-TWFWX .framer-1l79iu9 > :first-child, .framer-TWFWX .framer-1q2fy1 > :first-child, .framer-TWFWX .framer-acrvkf > :first-child, .framer-TWFWX .framer-xlgipr > :first-child, .framer-TWFWX .framer-1d3avhb > :first-child, .framer-TWFWX .framer-5geqr6 > :first-child { margin-top: 0px; } .framer-TWFWX.framer-72rtr7 > :last-child, .framer-TWFWX .framer-ywmrlk > :last-child, .framer-TWFWX .framer-dacqig > :last-child, .framer-TWFWX .framer-17fpcks > :last-child, .framer-TWFWX .framer-1l79iu9 > :last-child, .framer-TWFWX .framer-1q2fy1 > :last-child, .framer-TWFWX .framer-acrvkf > :last-child, .framer-TWFWX .framer-xlgipr > :last-child, .framer-TWFWX .framer-1d3avhb > :last-child, .framer-TWFWX .framer-5geqr6 > :last-child { margin-bottom: 0px; } .framer-TWFWX .framer-1p49ryl > * { margin: 0px; margin-left: calc(60px / 2); margin-right: calc(60px / 2); } .framer-TWFWX .framer-1p49ryl > :first-child, .framer-TWFWX .framer-1gooi2g > :first-child, .framer-TWFWX .framer-efbv1y > :first-child, .framer-TWFWX .framer-okb42e > :first-child, .framer-TWFWX .framer-tgky4f > :first-child, .framer-TWFWX .framer-1trwwo4 > :first-child { margin-left: 0px; } .framer-TWFWX .framer-1p49ryl > :last-child, .framer-TWFWX .framer-1gooi2g > :last-child, .framer-TWFWX .framer-efbv1y > :last-child, .framer-TWFWX .framer-okb42e > :last-child, .framer-TWFWX .framer-tgky4f > :last-child, .framer-TWFWX .framer-1trwwo4 > :last-child { margin-right: 0px; } .framer-TWFWX .framer-dacqig > *, .framer-TWFWX .framer-17fpcks > * { margin: 0px; margin-bottom: calc(3px / 2); margin-top: calc(3px / 2); } .framer-TWFWX .framer-1l79iu9 > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } .framer-TWFWX .framer-1gooi2g > *, .framer-TWFWX .framer-efbv1y > *, .framer-TWFWX .framer-1trwwo4 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-TWFWX .framer-1q2fy1 > *, .framer-TWFWX .framer-acrvkf > *, .framer-TWFWX .framer-xlgipr > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-TWFWX .framer-okb42e > *, .framer-TWFWX .framer-tgky4f > * { margin: 0px; margin-left: calc(100px / 2); margin-right: calc(100px / 2); } .framer-TWFWX .framer-1d3avhb > * { margin: 0px; margin-bottom: calc(40px / 2); margin-top: calc(40px / 2); } .framer-TWFWX .framer-5geqr6 > * { margin: 0px; margin-bottom: calc(30px / 2); margin-top: calc(30px / 2); } }", "@media (min-width: 1200px) { .framer-TWFWX .hidden-72rtr7 { display: none !important; } }", `@media (min-width: 810px) and (max-width: 1199px) { .framer-TWFWX .hidden-13j3ajv { display: none !important; } .${Rt.bodyClassName}-framer-TWFWX { background: var(--token-e23e35a8-daac-4a36-9609-ee45ae8fcf3e, rgb(35, 35, 35)); } .framer-TWFWX.framer-72rtr7 { width: 810px; } .framer-TWFWX .framer-a1xojy-container { left: 85%; top: 21%; } .framer-TWFWX .framer-1unle6f-container { left: 13%; top: 38%; } .framer-TWFWX .framer-eqf3vq { gap: 80px; } .framer-TWFWX .framer-1l79iu9 { grid-column: 1 / -1; } .framer-TWFWX .framer-1gooi2g { height: var(--framer-aspect-ratio-supported, 537px); } .framer-TWFWX .framer-okb42e { flex-direction: column; gap: 20px; } .framer-TWFWX .framer-1d3avhb { flex: none; width: 100%; } .framer-TWFWX .framer-tgky4f { flex-direction: column; gap: 20px; padding: 60px 60px 100px 60px; } .framer-TWFWX .framer-ekk0as-container, .framer-TWFWX .framer-2610e-container { flex: none; max-width: unset; width: 100%; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-TWFWX .framer-eqf3vq, .framer-TWFWX .framer-okb42e, .framer-TWFWX .framer-tgky4f { gap: 0px; } .framer-TWFWX .framer-eqf3vq > *, .framer-TWFWX .framer-eqf3vq > :first-child, .framer-TWFWX .framer-eqf3vq > :last-child { margin: 0px; } .framer-TWFWX .framer-okb42e > *, .framer-TWFWX .framer-tgky4f > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } .framer-TWFWX .framer-okb42e > :first-child, .framer-TWFWX .framer-tgky4f > :first-child { margin-top: 0px; } .framer-TWFWX .framer-okb42e > :last-child, .framer-TWFWX .framer-tgky4f > :last-child { margin-bottom: 0px; } }}`, `@media (max-width: 809px) { .framer-TWFWX .hidden-1tv2w3x { display: none !important; } .${Rt.bodyClassName}-framer-TWFWX { background: var(--token-e23e35a8-daac-4a36-9609-ee45ae8fcf3e, rgb(35, 35, 35)); } .framer-TWFWX.framer-72rtr7 { padding: 20px 20px 20px 20px; width: 390px; } .framer-TWFWX .framer-ywmrlk { gap: 86px; overflow: visible; } .framer-TWFWX .framer-a1xojy-container { left: 77%; top: 31%; } .framer-TWFWX .framer-1unle6f-container { left: 20%; top: 38%; } .framer-TWFWX .framer-eqf3vq { gap: 30px; grid-template-columns: repeat(1, minmax(1px, 1fr)); transform: unset; } .framer-TWFWX .framer-1l79iu9 { grid-column: 1 / -1; transform: unset; } .framer-TWFWX .framer-1gooi2g { border-bottom-left-radius: 17px; border-bottom-right-radius: 17px; border-top-left-radius: 17px; border-top-right-radius: 17px; height: var(--framer-aspect-ratio-supported, 257px); } .framer-TWFWX .framer-okb42e, .framer-TWFWX .framer-tgky4f { flex-direction: column; gap: 60px; padding: 0px 0px 0px 0px; } .framer-TWFWX .framer-1d3avhb, .framer-TWFWX .framer-ekk0as-container, .framer-TWFWX .framer-2610e-container { flex: none; width: 100%; } .framer-TWFWX .framer-1trwwo4 { flex-direction: column; } .framer-TWFWX .framer-1nqskuo-container { height: 293px; width: 100%; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-TWFWX .framer-ywmrlk, .framer-TWFWX .framer-eqf3vq, .framer-TWFWX .framer-okb42e, .framer-TWFWX .framer-tgky4f, .framer-TWFWX .framer-1trwwo4 { gap: 0px; } .framer-TWFWX .framer-ywmrlk > * { margin: 0px; margin-bottom: calc(86px / 2); margin-top: calc(86px / 2); } .framer-TWFWX .framer-ywmrlk > :first-child, .framer-TWFWX .framer-okb42e > :first-child, .framer-TWFWX .framer-tgky4f > :first-child, .framer-TWFWX .framer-1trwwo4 > :first-child { margin-top: 0px; } .framer-TWFWX .framer-ywmrlk > :last-child, .framer-TWFWX .framer-okb42e > :last-child, .framer-TWFWX .framer-tgky4f > :last-child, .framer-TWFWX .framer-1trwwo4 > :last-child { margin-bottom: 0px; } .framer-TWFWX .framer-eqf3vq > *, .framer-TWFWX .framer-eqf3vq > :first-child, .framer-TWFWX .framer-eqf3vq > :last-child { margin: 0px; } .framer-TWFWX .framer-okb42e > *, .framer-TWFWX .framer-tgky4f > * { margin: 0px; margin-bottom: calc(60px / 2); margin-top: calc(60px / 2); } .framer-TWFWX .framer-1trwwo4 > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } }}`, ...er, ...Me, ...ar, '.framer-TWFWX[data-border="true"]::after, .framer-TWFWX [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }']
  , Ze = G(oi, si, "framer-TWFWX")
  , ls = Ze;
Ze.displayName = "Home";
Ze.defaultProps = {
    height: 3076,
    width: 1200
};
B(Ze, [{
    explicitInter: !0,
    fonts: [{
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
        url: "https://app.framerstatic.com/Inter-Regular.cyrillic-ext-CFTLRB35.woff2",
        weight: "400"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
        url: "https://app.framerstatic.com/Inter-Regular.cyrillic-KKLZBALH.woff2",
        weight: "400"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+1F00-1FFF",
        url: "https://app.framerstatic.com/Inter-Regular.greek-ext-ULEBLIFV.woff2",
        weight: "400"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0370-03FF",
        url: "https://app.framerstatic.com/Inter-Regular.greek-IRHSNFQB.woff2",
        weight: "400"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
        url: "https://app.framerstatic.com/Inter-Regular.latin-ext-VZDUGU3Q.woff2",
        weight: "400"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
        url: "https://app.framerstatic.com/Inter-Regular.latin-JLQMKCHE.woff2",
        weight: "400"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
        url: "https://app.framerstatic.com/Inter-Regular.vietnamese-QK7VSWXK.woff2",
        weight: "400"
    }]
}, ...Nn, ...Dn, ...On, ...Mn, ...En, ...Vn, ...Un, ...De($t), ...De(Oe), ...De(rr)], {
    supportsExplicitInterCodegen: !0
});
var cs = {
    exports: {
        Props: {
            type: "tsType",
            annotations: {
                framerContractVersion: "1"
            }
        },
        default: {
            type: "reactComponent",
            name: "FrameraugiA20Il",
            slots: [],
            annotations: {
                framerCanvasComponentVariantDetails: '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"us63uQt7f":{"layout":["fixed","auto"]},"e7YxtXCzn":{"layout":["fixed","auto"]}}}',
                framerDisplayContentsDiv: "false",
                framerComponentViewportWidth: "true",
                framerIntrinsicWidth: "1200",
                framerContractVersion: "1",
                framerIntrinsicHeight: "3076",
                framerResponsiveScreen: "",
                framerImmutableVariables: "true"
            }
        },
        __FramerMetadata__: {
            type: "variable"
        }
    }
};
export {cs as __FramerMetadata__, ls as default};
//# sourceMappingURL=Bkjh5nIPWx7qGO8t7yXpxp1Un3x9mOUWBWdlotN0MrM.OXCYTK6Z.mjs.map
