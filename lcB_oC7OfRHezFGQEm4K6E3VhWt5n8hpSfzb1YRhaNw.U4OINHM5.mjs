import {a as R, h as M, i as X, j as ye, k as _e, l as be, m as _, n as L, r as w} from "./chunk-5NHYI6L6.mjs";
import {a as Z} from "./chunk-NWK44SC6.mjs";
import {a as ve} from "./chunk-PB5NNRFA.mjs";
import "./chunk-42U43NKG.mjs";
import {$ as le, B as e, C as f, F as oe, I as me, K as fe, U as F, V as se, _ as s, aa as pe, ba as de, c as B, da as ce, fa as o, g as re, ia as r, ka as l, l as ae, m as te, o as ie, oa as he, qa as ue, ra as xe, t as W, u as ne, wa as C, xa as P, ya as ge, za as u} from "./chunk-2KYWQAYW.mjs";
import "./chunk-ELYU6EKT.mjs";
var Le = u(L)
  , Ze = u(_)
  , Oe = u(w)
  , b = se(C)
  , Ve = u(M)
  , De = u(X)
  , He = u(R);
var Ke = {
    gj7k8i1x_: "(min-width: 810px) and (max-width: 1199px)",
    Kb52zfZ0N: "(min-width: 1200px)",
    zAubk3y0G: "(max-width: 809px)"
}
  , Qe = ()=>typeof document < "u"
  , Ee = "framer-EuJoh"
  , Ue = {
    gj7k8i1x_: "framer-v-cdd7a8",
    Kb52zfZ0N: "framer-v-haamma",
    zAubk3y0G: "framer-v-1s2j7ta"
}
  , Ye = {
    default: {
        duration: 0
    }
}
  , Je = {
    delay: .4,
    duration: .6,
    ease: [.72, .07, .21, 1.02],
    type: "tween"
}
  , $e = {
    opacity: 0,
    rotate: 0,
    scale: 1,
    transition: Je,
    x: 0,
    y: 100
}
  , t = (a,x)=>`perspective(1200px) ${x}`
  , O = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    transition: Je,
    x: 0,
    y: 0
}
  , p = {
    opacity: .001,
    rotate: 0,
    scale: 1,
    x: 0,
    y: 100
}
  , we = {
    delay: .5,
    duration: .6,
    ease: [.72, .07, .21, 1.02],
    type: "tween"
}
  , er = {
    opacity: 0,
    rotate: 0,
    scale: 1,
    transition: we,
    x: 0,
    y: 100
}
  , V = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    transition: we,
    x: 0,
    y: 0
}
  , h = a=>a != null && a !== ""
  , m = a=>typeof a == "object" && a !== null && typeof a.src == "string" ? a : typeof a == "string" ? {
    src: a
} : void 0
  , ke = {
    delay: .6,
    duration: .6,
    ease: [.72, .07, .21, 1.02],
    type: "tween"
}
  , rr = {
    opacity: 0,
    rotate: 0,
    scale: 1,
    transition: ke,
    x: 0,
    y: 100
}
  , D = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    transition: ke,
    x: 0,
    y: 0
}
  , v = {
    opacity: 0,
    rotate: 0,
    scale: 1,
    x: 0,
    y: 27
}
  , y = {
    damping: 30,
    delay: 0,
    mass: 1,
    stiffness: 400,
    type: "spring"
}
  , E = {
    opacity: 0,
    rotate: 0,
    scale: 1,
    transition: y,
    x: 0,
    y: 27
}
  , kr = Z()
  , ar = {
    Desktop: "Kb52zfZ0N",
    Phone: "zAubk3y0G",
    Tablet: "gj7k8i1x_"
}
  , tr = ({height: a, id: x, width: z, ...J})=>{
    var g, d;
    return {
        ...J,
        variant: (d = (g = ar[J.variant]) !== null && g !== void 0 ? g : J.variant) !== null && d !== void 0 ? d : "Kb52zfZ0N"
    }
}
  , ir = re(function(a, x) {
    let {activeLocale: z, setLocale: J} = me()
      , g = fe()
      , [d] = ue({
        from: {
            data: ve,
            type: "Collection"
        },
        select: [{
            name: "vxvJpsGMR",
            type: "Identifier"
        }, {
            name: "bxU8Blz3q",
            type: "Identifier"
        }, {
            name: "BcpS9evxZ",
            type: "Identifier"
        }, {
            name: "aUYWWcM2W",
            type: "Identifier"
        }, {
            name: "PoMqQL7Lq",
            type: "Identifier"
        }, {
            name: "PNFSXOpwr",
            type: "Identifier"
        }, {
            name: "g0EGSpAZh",
            type: "Identifier"
        }, {
            name: "Wl10FyKJB",
            type: "Identifier"
        }, {
            name: "wxh_AAQp5",
            type: "Identifier"
        }, {
            name: "XwJeUKDOA",
            type: "Identifier"
        }, {
            name: "JoQ30A6vW",
            type: "Identifier"
        }, {
            name: "EjxsgvJlN",
            type: "Identifier"
        }, {
            name: "H7TZS7_kx",
            type: "Identifier"
        }],
        where: xe(g)
    })
      , i = c=>{
        if (!d)
            throw new oe(`No data in "Blog" matches path variables: ${JSON.stringify(g)}`);
        return d[c]
    }
      , {style: ze, className: je, layoutId: j, variant: qe, vxvJpsGMR: H=i("vxvJpsGMR"), bxU8Blz3q: K=i("bxU8Blz3q"), BcpS9evxZ: Q=i("BcpS9evxZ"), aUYWWcM2W: U=i("aUYWWcM2W"), g0EGSpAZh: Y=i("g0EGSpAZh"), PoMqQL7Lq: Ne=i("PoMqQL7Lq"), PNFSXOpwr: Ie=i("PNFSXOpwr"), Wl10FyKJB: q=i("Wl10FyKJB"), wxh_AAQp5: N=i("wxh_AAQp5"), XwJeUKDOA: I=i("XwJeUKDOA"), JoQ30A6vW: A=i("JoQ30A6vW"), EjxsgvJlN: S=i("EjxsgvJlN"), H7TZS7_kx: Ae=i("H7TZS7_kx"), ...Se} = tr(a);
    te(()=>{
        let c = Z(d, z);
        if (document.title = c.title || "",
        c.viewport) {
            var T;
            (T = document.querySelector('meta[name="viewport"]')) === null || T === void 0 || T.setAttribute("content", c.viewport)
        }
        if (c.bodyClassName)
            return Array.from(document.body.classList).filter(G=>G.startsWith("framer-body-")).map(G=>document.body.classList.remove(G)),
            document.body.classList.add(`${c.bodyClassName}-framer-EuJoh`),
            ()=>{
                document.body.classList.remove(`${c.bodyClassName}-framer-EuJoh`)
            }
    }
    , [d, z]);
    let[n,or] = he(qe, Ke, !1)
      , mr = void 0
      , fr = Ye.default
      , Te = ie(null)
      , Ge = h(K)
      , Be = h(Q)
      , We = h(U)
      , Fe = h(q)
      , Ce = h(N)
      , $ = h(I)
      , Pe = h(A)
      , Re = h(S)
      , Me = ()=>["gj7k8i1x_", "zAubk3y0G"].includes(n) ? !Qe() : !0
      , Xe = ae()
      , ee = [be];
    return pe({}),
    e(de.Provider, {
        value: {
            primaryVariantId: "Kb52zfZ0N",
            variantClassNames: Ue
        },
        children: f(ne, {
            id: j ?? Xe,
            children: [f(W.div, {
                ...Se,
                className: F(Ee, ...ee, "framer-haamma", je),
                ref: x ?? Te,
                style: {
                    ...ze
                },
                children: [e(s, {
                    className: "framer-3rodto-container",
                    children: e(o, {
                        breakpoint: n,
                        overrides: {
                            zAubk3y0G: {
                                variant: "iv39lqdKR"
                            }
                        },
                        children: e(L, {
                            height: "100%",
                            id: "PkOD2WooB",
                            layoutId: "PkOD2WooB",
                            style: {
                                maxWidth: "100%",
                                width: "100%"
                            },
                            variant: "XXBVMmUo6",
                            width: "100%",
                            ya6RV_msu: H
                        })
                    })
                }), f("div", {
                    className: "framer-czqb6l",
                    "data-framer-name": "Post",
                    name: "Post",
                    children: [e(o, {
                        breakpoint: n,
                        overrides: {
                            gj7k8i1x_: {
                                "data-framer-appear-id": "6yk2a8",
                                animate: r("animate", "6yk2a8", O, "cdd7a8"),
                                initial: r("initial", "6yk2a8", p, "cdd7a8"),
                                transformTemplate: l("6yk2a8", t)
                            },
                            zAubk3y0G: {
                                "data-framer-appear-id": "75silj",
                                animate: r("animate", "75silj", O, "1s2j7ta"),
                                initial: r("initial", "75silj", p, "1s2j7ta"),
                                transformTemplate: l("75silj", t)
                            }
                        },
                        children: e(P, {
                            __fromCanvasComponent: !0,
                            animate: r("animate", "fqfa9q", O, "haamma"),
                            children: e(B, {
                                children: e("p", {
                                    style: {
                                        "--font-selector": "R0Y7SW50ZXIgVGlnaHQtNjAw",
                                        "--framer-font-family": '"Inter Tight", "Inter Tight Placeholder", sans-serif',
                                        "--framer-font-size": "51px",
                                        "--framer-font-weight": "600",
                                        "--framer-text-color": "var(--token-c59a04d0-3d52-4591-be1d-6424044001a1, rgb(240, 240, 240))"
                                    },
                                    children: e("span", {
                                        "data-text-fill": "true",
                                        style: {
                                            backgroundImage: "radial-gradient(137.1% 233.33333333333334% at 11.600000000000001% 50%, var(--token-c59a04d0-3d52-4591-be1d-6424044001a1, rgb(240, 240, 240)) 10.7723%, rgba(239, 239, 239, 1) 11.367538095238094%, var(--token-e76c097a-6b1c-424d-81e7-8e2648f27f2f, rgb(71, 71, 71)) 99.13897927927928%)"
                                        },
                                        children: "About Me"
                                    })
                                })
                            }),
                            className: "framer-fqfa9q",
                            "data-framer-appear-id": "fqfa9q",
                            exit: $e,
                            fonts: ["GF;Inter Tight-600"],
                            initial: r("initial", "fqfa9q", p, "haamma"),
                            text: H,
                            transformTemplate: l("fqfa9q", t),
                            verticalAlignment: "top",
                            withExternalLayout: !0
                        })
                    }), e(o, {
                        breakpoint: n,
                        overrides: {
                            gj7k8i1x_: {
                                "data-framer-appear-id": "1jsdypc",
                                animate: r("animate", "1jsdypc", V, "cdd7a8"),
                                initial: r("initial", "1jsdypc", p, "cdd7a8"),
                                transformTemplate: l("1jsdypc", t)
                            },
                            zAubk3y0G: {
                                "data-framer-appear-id": "zeyi1v",
                                animate: r("animate", "zeyi1v", V, "1s2j7ta"),
                                initial: r("initial", "zeyi1v", p, "1s2j7ta"),
                                transformTemplate: l("zeyi1v", t)
                            }
                        },
                        children: f(W.div, {
                            animate: r("animate", "1u64uls", V, "haamma"),
                            className: "framer-1u64uls",
                            "data-framer-appear-id": "1u64uls",
                            exit: er,
                            initial: r("initial", "1u64uls", p, "haamma"),
                            transformTemplate: l("1u64uls", t),
                            children: [Ge && e(s, {
                                className: "framer-1bosp8e-container",
                                children: e(_, {
                                    height: "100%",
                                    hyW_EhYsW: "envelope simple",
                                    id: "KCSkbXjED",
                                    layoutId: "KCSkbXjED",
                                    oHe4MlJvN: K,
                                    variant: "sL7T_tSi9",
                                    width: "100%"
                                })
                            }), Be && e(s, {
                                className: "framer-7bjlvv-container",
                                children: e(_, {
                                    height: "100%",
                                    hyW_EhYsW: "envelope simple",
                                    id: "gSk8EWa5S",
                                    layoutId: "gSk8EWa5S",
                                    oHe4MlJvN: Q,
                                    variant: "sL7T_tSi9",
                                    width: "100%"
                                })
                            }), We && e(s, {
                                className: "framer-ei94jx-container",
                                children: e(_, {
                                    height: "100%",
                                    hyW_EhYsW: "envelope simple",
                                    id: "bc8STKIY9",
                                    layoutId: "bc8STKIY9",
                                    oHe4MlJvN: U,
                                    variant: "sL7T_tSi9",
                                    width: "100%"
                                })
                            })]
                        })
                    }), e(o, {
                        breakpoint: n,
                        overrides: {
                            gj7k8i1x_: {
                                "data-framer-appear-id": "xo3k6s",
                                animate: r("animate", "xo3k6s", D, "cdd7a8"),
                                initial: r("initial", "xo3k6s", p, "cdd7a8"),
                                transformTemplate: l("xo3k6s", t)
                            },
                            zAubk3y0G: {
                                "data-framer-appear-id": "ozpv94",
                                animate: r("animate", "ozpv94", D, "1s2j7ta"),
                                background: {
                                    alt: "",
                                    fit: "fill",
                                    sizes: "min(100vw - 40px, 1450px)",
                                    ...m(Y)
                                },
                                initial: r("initial", "ozpv94", p, "1s2j7ta"),
                                transformTemplate: l("ozpv94", t)
                            }
                        },
                        children: e(C, {
                            animate: r("animate", "1syt422", D, "haamma"),
                            background: {
                                alt: "",
                                fit: "fill",
                                sizes: "min(100vw - 80px, 1450px)",
                                ...m(Y)
                            },
                            className: "framer-1syt422",
                            "data-framer-appear-id": "1syt422",
                            "data-framer-name": "Banner",
                            exit: rr,
                            initial: r("initial", "1syt422", p, "haamma"),
                            name: "Banner",
                            transformTemplate: l("1syt422", t)
                        })
                    }), f("div", {
                        className: "framer-pfj8xn",
                        children: [e(s, {
                            className: "framer-56t697-container",
                            children: e(w, {
                                height: "100%",
                                id: "Xef2xxR01",
                                JB9Xxl03C: Ne,
                                JZGHgfGGp: "Target",
                                layoutId: "Xef2xxR01",
                                lG8Wq0qgx: "Goal",
                                style: {
                                    width: "100%"
                                },
                                width: "100%"
                            })
                        }), e(s, {
                            className: "framer-1uku7u4-container",
                            children: e(w, {
                                height: "100%",
                                id: "RUuIGRQpH",
                                JB9Xxl03C: Ie,
                                JZGHgfGGp: "line-segments",
                                layoutId: "RUuIGRQpH",
                                lG8Wq0qgx: "Services",
                                style: {
                                    width: "100%"
                                },
                                width: "100%"
                            })
                        })]
                    }), f("div", {
                        className: "framer-6f21ac",
                        children: [f("div", {
                            className: "framer-4fy12x",
                            children: [Fe && e(o, {
                                breakpoint: n,
                                overrides: {
                                    zAubk3y0G: {
                                        __framer__styleAppearEffectEnabled: void 0,
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            loading: "lazy",
                                            sizes: "min(100vw - 40px, 1450px)",
                                            ...m(q)
                                        },
                                        transformTemplate: void 0
                                    }
                                },
                                children: e(b, {
                                    __framer__animate: {
                                        transition: y
                                    },
                                    __framer__animateOnce: !0,
                                    __framer__enter: v,
                                    __framer__exit: E,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: .5,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    background: {
                                        alt: "",
                                        fit: "fill",
                                        loading: "lazy",
                                        sizes: "max((min(100vw - 80px, 1450px) + 20px) / 0, 0px)",
                                        ...m(q)
                                    },
                                    className: "framer-xv47mk",
                                    "data-framer-name": "Banner",
                                    name: "Banner",
                                    transformTemplate: t
                                })
                            }), Ce && e(o, {
                                breakpoint: n,
                                overrides: {
                                    zAubk3y0G: {
                                        __framer__styleAppearEffectEnabled: void 0,
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            loading: "lazy",
                                            sizes: "min(100vw - 40px, 1450px)",
                                            ...m(N)
                                        },
                                        transformTemplate: void 0
                                    }
                                },
                                children: e(b, {
                                    __framer__animate: {
                                        transition: y
                                    },
                                    __framer__animateOnce: !0,
                                    __framer__enter: v,
                                    __framer__exit: E,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: .5,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    background: {
                                        alt: "",
                                        fit: "fill",
                                        loading: "lazy",
                                        sizes: "max((min(100vw - 80px, 1450px) + 20px) / 0, 0px)",
                                        ...m(N)
                                    },
                                    className: "framer-r29ftv",
                                    "data-framer-name": "Banner",
                                    name: "Banner",
                                    transformTemplate: t
                                })
                            })]
                        }), f("div", {
                            className: "framer-1mbqfpl",
                            children: [$ && e(o, {
                                breakpoint: n,
                                overrides: {
                                    zAubk3y0G: {
                                        __framer__styleAppearEffectEnabled: void 0,
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            loading: "lazy",
                                            sizes: "min(100vw - 40px, 1450px)",
                                            ...m(I)
                                        },
                                        transformTemplate: void 0
                                    }
                                },
                                children: e(b, {
                                    __framer__animate: {
                                        transition: y
                                    },
                                    __framer__animateOnce: !0,
                                    __framer__enter: v,
                                    __framer__exit: E,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: .5,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    background: {
                                        alt: "",
                                        fit: "fill",
                                        loading: "lazy",
                                        sizes: "max((min(100vw - 80px, 1450px) + 20px) / 0, 0px)",
                                        ...m(I)
                                    },
                                    className: "framer-i9291n",
                                    "data-framer-name": "Banner",
                                    name: "Banner",
                                    transformTemplate: t
                                })
                            }), Pe && e(o, {
                                breakpoint: n,
                                overrides: {
                                    zAubk3y0G: {
                                        __framer__styleAppearEffectEnabled: void 0,
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            loading: "lazy",
                                            sizes: "min(100vw - 40px, 1450px)",
                                            ...m(A)
                                        },
                                        transformTemplate: void 0
                                    }
                                },
                                children: e(b, {
                                    __framer__animate: {
                                        transition: y
                                    },
                                    __framer__animateOnce: !0,
                                    __framer__enter: v,
                                    __framer__exit: E,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: .5,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    background: {
                                        alt: "",
                                        fit: "fill",
                                        loading: "lazy",
                                        sizes: "max((min(100vw - 80px, 1450px) + 20px) / 0, 0px)",
                                        ...m(A)
                                    },
                                    className: "framer-1j7d3wp",
                                    "data-framer-name": "Banner",
                                    name: "Banner",
                                    transformTemplate: t
                                })
                            })]
                        }), Re && e("div", {
                            className: "framer-143a85d",
                            children: $ && e(o, {
                                breakpoint: n,
                                overrides: {
                                    zAubk3y0G: {
                                        __framer__styleAppearEffectEnabled: void 0,
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            loading: "lazy",
                                            sizes: "min(100vw - 40px, 1450px)",
                                            ...m(S)
                                        },
                                        transformTemplate: void 0
                                    }
                                },
                                children: e(b, {
                                    __framer__animate: {
                                        transition: y
                                    },
                                    __framer__animateOnce: !0,
                                    __framer__enter: v,
                                    __framer__exit: E,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: .5,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    background: {
                                        alt: "",
                                        fit: "fill",
                                        loading: "lazy",
                                        sizes: "max((min(100vw - 80px, 1450px) + 20px) / 0, 0px)",
                                        ...m(S)
                                    },
                                    className: "framer-1txhqlv",
                                    "data-framer-name": "Banner",
                                    name: "Banner",
                                    transformTemplate: t
                                })
                            })
                        })]
                    }), f("div", {
                        className: "framer-1sqz465",
                        children: [e(P, {
                            __fromCanvasComponent: !0,
                            children: e(B, {
                                children: e("p", {
                                    style: {
                                        "--font-selector": "R0Y7SW50ZXIgVGlnaHQtcmVndWxhcg==",
                                        "--framer-font-family": '"Inter Tight", "Inter Tight Placeholder", sans-serif',
                                        "--framer-font-size": "18px",
                                        "--framer-text-color": "var(--token-c59a04d0-3d52-4591-be1d-6424044001a1, rgb(240, 240, 240))"
                                    },
                                    children: e(ce, {
                                        href: Ae,
                                        openInNewTab: !1,
                                        smoothScroll: !1,
                                        children: e("a", {
                                            className: "framer-styles-preset-4xbu66",
                                            "data-styles-preset": "kl22X4l5h",
                                            children: "Next Project"
                                        })
                                    })
                                })
                            }),
                            className: "framer-t123xb",
                            fonts: ["GF;Inter Tight-regular"],
                            verticalAlignment: "top",
                            withExternalLayout: !0
                        }), e(s, {
                            className: "framer-q031n8-container",
                            children: e(o, {
                                breakpoint: n,
                                overrides: {
                                    zAubk3y0G: {
                                        variant: "SXPdgd0MU"
                                    }
                                },
                                children: e(M, {
                                    height: "100%",
                                    id: "PEvMqPhqZ",
                                    layoutId: "PEvMqPhqZ",
                                    QC2pTHcHG: "thin",
                                    style: {
                                        height: "100%",
                                        width: "100%"
                                    },
                                    variant: "PRbfDc60j",
                                    width: "100%",
                                    ZA3O5UdYP: "var(--token-705b30da-ebd7-4612-98fa-aaf0efec2f3d, rgb(179, 179, 179))",
                                    zu2BQmQeb: "caret-right"
                                })
                            })
                        })]
                    }), e(s, {
                        className: "framer-pt4jhr-container",
                        children: e(o, {
                            breakpoint: n,
                            overrides: {
                                zAubk3y0G: {
                                    variant: "D3ErOqFuF"
                                }
                            },
                            children: e(X, {
                                height: "100%",
                                id: "t_9iy3gC5",
                                layoutId: "t_9iy3gC5",
                                style: {
                                    height: "100%",
                                    width: "100%"
                                },
                                variant: "vad5PnoVS",
                                width: "100%"
                            })
                        })
                    })]
                }), Me() && e(s, {
                    className: "framer-6nfej5-container hidden-cdd7a8 hidden-1s2j7ta",
                    children: e(R, {
                        autoResize: !0,
                        duration: 1.2,
                        height: "100%",
                        id: "Ue0aHqSDJ",
                        infinite: !1,
                        layoutId: "Ue0aHqSDJ",
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
                })]
            }), e("div", {
                className: F(Ee, ...ee),
                id: "overlay"
            })]
        })
    })
})
  , nr = ['.framer-EuJoh[data-border="true"]::after, .framer-EuJoh [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }', "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-EuJoh.framer-1ndkp0k, .framer-EuJoh .framer-1ndkp0k { display: block; }", '.framer-EuJoh.framer-haamma { align-content: center; align-items: center; background: radial-gradient(50% 18.2% at 51.4% 22.400000000000002%, var(--token-3ea46c56-d009-4987-bb7c-030497462c1b, #3d3d3d) /* {"name":"Backgroudn 02"} */ 0%, var(--token-e23e35a8-daac-4a36-9609-ee45ae8fcf3e, rgb(35, 35, 35)) /* {"name":"Background Color"} */ 100%); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 40px 40px 40px 40px; position: relative; width: 1200px; }', ".framer-EuJoh .framer-3rodto-container { flex: none; height: auto; max-width: 1450px; position: relative; width: 100%; }", ".framer-EuJoh .framer-czqb6l { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 31px; height: min-content; justify-content: flex-start; max-width: 1450px; padding: 0px 0px 0px 0px; position: relative; width: 100%; }", ".framer-EuJoh .framer-fqfa9q { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; transform: perspective(1200px); white-space: pre; width: auto; }", ".framer-EuJoh .framer-1u64uls { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; gap: 23px; height: min-content; justify-content: center; overflow: hidden; padding: 15px 0px 40px 0px; position: relative; transform: perspective(1200px); width: 100%; }", ".framer-EuJoh .framer-1bosp8e-container, .framer-EuJoh .framer-7bjlvv-container, .framer-EuJoh .framer-ei94jx-container { flex: none; height: auto; position: relative; width: auto; }", ".framer-EuJoh .framer-1syt422 { aspect-ratio: 1.4414414414414414 / 1; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; border-top-left-radius: 10px; border-top-right-radius: 10px; flex: none; height: var(--framer-aspect-ratio-supported, 777px); position: relative; transform: perspective(1200px); width: 100%; }", ".framer-EuJoh .framer-pfj8xn { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: center; overflow: hidden; padding: 100px 0px 100px 0px; position: relative; width: 100%; }", ".framer-EuJoh .framer-56t697-container, .framer-EuJoh .framer-1uku7u4-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }", ".framer-EuJoh .framer-6f21ac { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 100%; }", ".framer-EuJoh .framer-4fy12x, .framer-EuJoh .framer-1mbqfpl { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 100%; }", ".framer-EuJoh .framer-xv47mk, .framer-EuJoh .framer-r29ftv, .framer-EuJoh .framer-i9291n, .framer-EuJoh .framer-1j7d3wp { aspect-ratio: 1.371571072319202 / 1; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; border-top-left-radius: 10px; border-top-right-radius: 10px; flex: 1 0 0px; height: var(--framer-aspect-ratio-supported, 401px); position: relative; transform: perspective(1200px); width: 1px; }", ".framer-EuJoh .framer-143a85d { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: hidden; padding: 60px 0px 60px 0px; position: relative; width: 100%; }", ".framer-EuJoh .framer-1txhqlv { aspect-ratio: 1.371571072319202 / 1; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; border-top-left-radius: 10px; border-top-right-radius: 10px; flex: 1 0 0px; height: var(--framer-aspect-ratio-supported, 817px); position: relative; transform: perspective(1200px); width: 1px; }", ".framer-EuJoh .framer-1sqz465 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: hidden; padding: 62px 0px 62px 0px; position: relative; width: 100%; }", ".framer-EuJoh .framer-t123xb { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", ".framer-EuJoh .framer-q031n8-container { flex: none; height: 22px; position: relative; width: 22px; }", ".framer-EuJoh .framer-pt4jhr-container { flex: none; height: 323px; position: relative; width: 100%; }", ".framer-EuJoh .framer-6nfej5-container { flex: none; height: auto; position: absolute; right: 0px; top: 1362px; width: auto; }", "@supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-EuJoh.framer-haamma, .framer-EuJoh .framer-czqb6l, .framer-EuJoh .framer-1u64uls, .framer-EuJoh .framer-pfj8xn, .framer-EuJoh .framer-6f21ac, .framer-EuJoh .framer-4fy12x, .framer-EuJoh .framer-1mbqfpl, .framer-EuJoh .framer-143a85d, .framer-EuJoh .framer-1sqz465 { gap: 0px; } .framer-EuJoh.framer-haamma > * { margin: 0px; margin-bottom: calc(80px / 2); margin-top: calc(80px / 2); } .framer-EuJoh.framer-haamma > :first-child, .framer-EuJoh .framer-czqb6l > :first-child, .framer-EuJoh .framer-6f21ac > :first-child { margin-top: 0px; } .framer-EuJoh.framer-haamma > :last-child, .framer-EuJoh .framer-czqb6l > :last-child, .framer-EuJoh .framer-6f21ac > :last-child { margin-bottom: 0px; } .framer-EuJoh .framer-czqb6l > * { margin: 0px; margin-bottom: calc(31px / 2); margin-top: calc(31px / 2); } .framer-EuJoh .framer-1u64uls > * { margin: 0px; margin-left: calc(23px / 2); margin-right: calc(23px / 2); } .framer-EuJoh .framer-1u64uls > :first-child, .framer-EuJoh .framer-pfj8xn > :first-child, .framer-EuJoh .framer-4fy12x > :first-child, .framer-EuJoh .framer-1mbqfpl > :first-child, .framer-EuJoh .framer-143a85d > :first-child, .framer-EuJoh .framer-1sqz465 > :first-child { margin-left: 0px; } .framer-EuJoh .framer-1u64uls > :last-child, .framer-EuJoh .framer-pfj8xn > :last-child, .framer-EuJoh .framer-4fy12x > :last-child, .framer-EuJoh .framer-1mbqfpl > :last-child, .framer-EuJoh .framer-143a85d > :last-child, .framer-EuJoh .framer-1sqz465 > :last-child { margin-right: 0px; } .framer-EuJoh .framer-pfj8xn > * { margin: 0px; margin-left: calc(80px / 2); margin-right: calc(80px / 2); } .framer-EuJoh .framer-6f21ac > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } .framer-EuJoh .framer-4fy12x > *, .framer-EuJoh .framer-1mbqfpl > *, .framer-EuJoh .framer-143a85d > *, .framer-EuJoh .framer-1sqz465 > * { margin: 0px; margin-left: calc(20px / 2); margin-right: calc(20px / 2); } }", "@media (min-width: 1200px) { .framer-EuJoh .hidden-haamma { display: none !important; } }", "@media (min-width: 810px) and (max-width: 1199px) { .framer-EuJoh .hidden-cdd7a8 { display: none !important; } .framer-EuJoh.framer-haamma { width: 810px; } .framer-EuJoh .framer-1syt422 { height: var(--framer-aspect-ratio-supported, 507px); } .framer-EuJoh .framer-pfj8xn { flex-direction: column; } .framer-EuJoh .framer-56t697-container, .framer-EuJoh .framer-1uku7u4-container { flex: none; width: 100%; } .framer-EuJoh .framer-xv47mk, .framer-EuJoh .framer-r29ftv { height: var(--framer-aspect-ratio-supported, 259px); } .framer-EuJoh .framer-i9291n, .framer-EuJoh .framer-1j7d3wp { height: var(--framer-aspect-ratio-supported, 258px); } .framer-EuJoh .framer-1txhqlv { height: var(--framer-aspect-ratio-supported, 533px); } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-EuJoh .framer-pfj8xn { gap: 0px; } .framer-EuJoh .framer-pfj8xn > * { margin: 0px; margin-bottom: calc(80px / 2); margin-top: calc(80px / 2); } .framer-EuJoh .framer-pfj8xn > :first-child { margin-top: 0px; } .framer-EuJoh .framer-pfj8xn > :last-child { margin-bottom: 0px; } }}", "@media (max-width: 809px) { .framer-EuJoh .hidden-1s2j7ta { display: none !important; } .framer-EuJoh.framer-haamma { gap: 55px; padding: 20px 20px 20px 20px; width: 390px; } .framer-EuJoh .framer-czqb6l { gap: 39px; } .framer-EuJoh .framer-1syt422 { height: var(--framer-aspect-ratio-supported, 243px); } .framer-EuJoh .framer-pfj8xn { flex-direction: column; gap: 20px; padding: 0px 0px 0px 0px; } .framer-EuJoh .framer-56t697-container, .framer-EuJoh .framer-1uku7u4-container { flex: none; width: 100%; } .framer-EuJoh .framer-4fy12x, .framer-EuJoh .framer-1mbqfpl, .framer-EuJoh .framer-143a85d { flex-direction: column; } .framer-EuJoh .framer-xv47mk, .framer-EuJoh .framer-i9291n, .framer-EuJoh .framer-1j7d3wp, .framer-EuJoh .framer-1txhqlv { flex: none; height: var(--framer-aspect-ratio-supported, 255px); transform: unset; width: 100%; } .framer-EuJoh .framer-r29ftv { flex: none; height: var(--framer-aspect-ratio-supported, 256px); transform: unset; width: 100%; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-EuJoh.framer-haamma, .framer-EuJoh .framer-czqb6l, .framer-EuJoh .framer-pfj8xn, .framer-EuJoh .framer-4fy12x, .framer-EuJoh .framer-1mbqfpl, .framer-EuJoh .framer-143a85d { gap: 0px; } .framer-EuJoh.framer-haamma > * { margin: 0px; margin-bottom: calc(55px / 2); margin-top: calc(55px / 2); } .framer-EuJoh.framer-haamma > :first-child, .framer-EuJoh .framer-czqb6l > :first-child, .framer-EuJoh .framer-pfj8xn > :first-child, .framer-EuJoh .framer-4fy12x > :first-child, .framer-EuJoh .framer-1mbqfpl > :first-child, .framer-EuJoh .framer-143a85d > :first-child { margin-top: 0px; } .framer-EuJoh.framer-haamma > :last-child, .framer-EuJoh .framer-czqb6l > :last-child, .framer-EuJoh .framer-pfj8xn > :last-child, .framer-EuJoh .framer-4fy12x > :last-child, .framer-EuJoh .framer-1mbqfpl > :last-child, .framer-EuJoh .framer-143a85d > :last-child { margin-bottom: 0px; } .framer-EuJoh .framer-czqb6l > * { margin: 0px; margin-bottom: calc(39px / 2); margin-top: calc(39px / 2); } .framer-EuJoh .framer-pfj8xn > *, .framer-EuJoh .framer-4fy12x > *, .framer-EuJoh .framer-1mbqfpl > *, .framer-EuJoh .framer-143a85d > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } }}", ..._e]
  , k = le(ir, nr, "framer-EuJoh")
  , zr = k;
k.displayName = "Blog Detail";
k.defaultProps = {
    height: 3165,
    width: 1200
};
ge(k, [{
    family: "Inter Tight",
    source: "google",
    style: "normal",
    url: "https://fonts.gstatic.com/s/intertight/v7/NGSnv5HMAFg6IuGlBNMjxJEL2VmU3NS7Z2mj0QiqWSRToK8EPg.woff2",
    weight: "600"
}, {
    family: "Inter Tight",
    source: "google",
    style: "normal",
    url: "https://fonts.gstatic.com/s/intertight/v7/NGSnv5HMAFg6IuGlBNMjxJEL2VmU3NS7Z2mjDw-qWSRToK8EPg.woff2",
    weight: "400"
}, ...Le, ...Ze, ...Oe, ...Ve, ...De, ...He, ...ye]);
var jr = {
    exports: {
        Props: {
            type: "tsType",
            annotations: {
                framerContractVersion: "1"
            }
        },
        default: {
            type: "reactComponent",
            name: "FramernCjwbks54",
            slots: [],
            annotations: {
                framerIntrinsicWidth: "1200",
                framerImmutableVariables: "true",
                framerCanvasComponentVariantDetails: '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"gj7k8i1x_":{"layout":["fixed","auto"]},"zAubk3y0G":{"layout":["fixed","auto"]}}}',
                framerResponsiveScreen: "",
                framerDisplayContentsDiv: "false",
                framerContractVersion: "1",
                framerIntrinsicHeight: "3165"
            }
        },
        __FramerMetadata__: {
            type: "variable"
        }
    }
};
export {jr as __FramerMetadata__, zr as default};
//# sourceMappingURL=lcB_oC7OfRHezFGQEm4K6E3VhWt5n8hpSfzb1YRhaNw.U4OINHM5.mjs.map
