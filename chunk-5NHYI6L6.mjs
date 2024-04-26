import {$ as W, Aa as ne, B as r, C as A, I as q, L as Ce, N as l, Q as P, R as Ae, U as E, V as De, X as de, Y as M, c as x, da as oe, g as D, ia as S, j as U, k as fe, ka as J, l as G, n as B, o as N, p as He, q as Q, r as I, sa as O, t as n, u as j, va as Z, xa as k, ya as z, za as V} from "./chunk-2KYWQAYW.mjs";
import {c as b} from "./chunk-ELYU6EKT.mjs";
function Be(e) {
    return fe(()=>{
        if (setTimeout(function() {
            b.scrollTo(0, 0)
        }, 1),
        typeof document < "u" && typeof b < "u" && (document.querySelector("head title") || (document.querySelector("#smoothy").style.display = "inline-block"),
        document.querySelector("head title"))) {
            let t = function(o, i=!0) {
                if (typeof Lenis > "u") {
                    let s = document.createElement("script");
                    s.setAttribute("src", o),
                    s.id = "lenis",
                    s.setAttribute("type", "text/javascript"),
                    s.setAttribute("async", i),
                    document.body.appendChild(s),
                    s.addEventListener("load", ()=>{
                        a()
                    }
                    ),
                    s.addEventListener("error", c=>{
                        console.log("Error on loading file", c)
                    }
                    )
                } else
                    a()
            }
              , a = function() {
                b.addEventListener("popstate", function(o) {
                    o.preventDefault()
                });
                try {
                    b.lenis.destroy()
                } catch {}
                setTimeout(function() {
                    b.lenis = new Lenis({
                        lerp: e.lerp,
                        duration: e.duration,
                        easing: i=>Math.min(1, 1.001 - Math.pow(2, -10 * i)),
                        orientation: "vertical",
                        gestureOrientation: "vertical",
                        smoothWheel: e.smoothWheel,
                        smoothTouch: e.smoothTouch,
                        syncTouch: e.syncTouch,
                        syncTouchLerp: e.syncTouchLerp,
                        touchInertiaMultiplier: e.touchInertiaMultiplier,
                        wheelMultiplier: e.wheelMultiplier,
                        touchMultiplier: e.touchMultiplier,
                        normalizeWheel: e.normalizeWheel,
                        infinite: e.infinite,
                        autoResize: e.autoResize
                    });
                    function o(i) {
                        b.lenis.raf(i),
                        requestAnimationFrame(o)
                    }
                    requestAnimationFrame(o)
                }, 0)
            };
            t("https://cdn.jsdelivr.net/gh/studio-freight/lenis@1.0.29/bundled/lenis.min.js", !0)
        }
    }
    ),
    A("div", {
        id: "smoothy",
        children: [r("style", {
            children: `
html.lenis {
  height: auto;
}

.lenis.lenis-smooth {
  scroll-behavior: auto;
}

.lenis.lenis-smooth [data-lenis-prevent] {
  overscroll-behavior: contain;
}

.lenis.lenis-stopped {
  overflow: hidden;
}

.lenis.lenis-scrolling iframe {
  pointer-events: none;
}

                #smoothy {
                    display: none;
                    background-color: black;
                    color: white;
                    font-weight: bold;
                    text-align: center;
                    margin: 10px;
                    padding: 5px;
                }
             `
        }), "Smooth Scroll", r("br", {}), r("small", {
            children: "This will hide itself!"
        })]
    })
}
P(Be, {
    lerp: {
        type: l.Number,
        min: .1,
        max: 2,
        step: .1,
        defaultValue: .1
    },
    duration: {
        type: l.Number,
        min: .1,
        max: 5,
        step: .1,
        defaultValue: 1.2
    },
    smoothWheel: {
        type: l.Boolean,
        defaultValue: !0
    },
    smoothTouch: {
        type: l.Boolean,
        defaultValue: !1
    },
    syncTouchLerp: {
        type: l.Number,
        min: .1,
        max: 2,
        step: .1,
        defaultValue: .1
    },
    touchInertiaMultiplier: {
        type: l.Number,
        min: 1,
        max: 100,
        step: 1,
        defaultValue: 35
    },
    wheelMultiplier: {
        type: l.Number,
        min: 1,
        max: 5,
        step: 1,
        defaultValue: 1
    },
    touchMultiplier: {
        type: l.Number,
        min: 1,
        max: 5,
        step: 1,
        defaultValue: 2
    },
    normalizeWheel: {
        type: l.Boolean,
        defaultValue: !0
    },
    infinite: {
        type: l.Boolean,
        defaultValue: !1
    },
    autoResize: {
        type: l.Boolean,
        defaultValue: !1
    }
});
Z.loadFonts(["GF;Inter Tight-600", "GF;Inter Tight-900", "GF;Inter Tight-900italic", "GF;Inter Tight-600italic"]);
var pe = [{
    family: "Inter Tight",
    source: "google",
    style: "normal",
    url: "https://fonts.gstatic.com/s/intertight/v7/NGSnv5HMAFg6IuGlBNMjxJEL2VmU3NS7Z2mj0QiqWSRToK8EPg.woff2",
    weight: "600"
}, {
    family: "Inter Tight",
    source: "google",
    style: "normal",
    url: "https://fonts.gstatic.com/s/intertight/v7/NGSnv5HMAFg6IuGlBNMjxJEL2VmU3NS7Z2mjpgiqWSRToK8EPg.woff2",
    weight: "900"
}, {
    family: "Inter Tight",
    source: "google",
    style: "italic",
    url: "https://fonts.gstatic.com/s/intertight/v7/NGShv5HMAFg6IuGlBNMjxLsC66ZMtb8hyW62x0zrGC5SgqoUPvi5.woff2",
    weight: "900"
}, {
    family: "Inter Tight",
    source: "google",
    style: "italic",
    url: "https://fonts.gstatic.com/s/intertight/v7/NGShv5HMAFg6IuGlBNMjxLsC66ZMtb8hyW62x0ycGC5SgqoUPvi5.woff2",
    weight: "600"
}]
  , he = ['.framer-ZMK2v .framer-styles-preset-1ogq7h3:not(.rich-text-wrapper), .framer-ZMK2v .framer-styles-preset-1ogq7h3.rich-text-wrapper h1 { --framer-font-family: "Inter Tight", "Inter Tight Placeholder", sans-serif; --framer-font-family-bold: "Inter Tight", sans-serif; --framer-font-family-bold-italic: "Inter Tight", sans-serif; --framer-font-family-italic: "Inter Tight", "Inter Tight Placeholder", sans-serif; --framer-font-size: 48px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 600; --framer-font-weight-bold: 900; --framer-font-weight-bold-italic: 900; --framer-font-weight-italic: 600; --framer-letter-spacing: 0em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-c59a04d0-3d52-4591-be1d-6424044001a1, #f0f0f0); --framer-text-decoration: none; --framer-text-transform: none; }', '@media (max-width: 1199px) and (min-width: 810px) { .framer-ZMK2v .framer-styles-preset-1ogq7h3:not(.rich-text-wrapper), .framer-ZMK2v .framer-styles-preset-1ogq7h3.rich-text-wrapper h1 { --framer-font-family: "Inter Tight", "Inter Tight Placeholder", sans-serif; --framer-font-family-bold: "Inter Tight", sans-serif; --framer-font-family-bold-italic: "Inter Tight", sans-serif; --framer-font-family-italic: "Inter Tight", "Inter Tight Placeholder", sans-serif; --framer-font-size: 38px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 600; --framer-font-weight-bold: 900; --framer-font-weight-bold-italic: 900; --framer-font-weight-italic: 600; --framer-letter-spacing: 0em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-c59a04d0-3d52-4591-be1d-6424044001a1, #f0f0f0); --framer-text-decoration: none; --framer-text-transform: none; } }', '@media (max-width: 809px) and (min-width: 0px) { .framer-ZMK2v .framer-styles-preset-1ogq7h3:not(.rich-text-wrapper), .framer-ZMK2v .framer-styles-preset-1ogq7h3.rich-text-wrapper h1 { --framer-font-family: "Inter Tight", "Inter Tight Placeholder", sans-serif; --framer-font-family-bold: "Inter Tight", sans-serif; --framer-font-family-bold-italic: "Inter Tight", sans-serif; --framer-font-family-italic: "Inter Tight", "Inter Tight Placeholder", sans-serif; --framer-font-size: 26px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 600; --framer-font-weight-bold: 900; --framer-font-weight-bold-italic: 900; --framer-font-weight-italic: 600; --framer-letter-spacing: 0em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-c59a04d0-3d52-4591-be1d-6424044001a1, #f0f0f0); --framer-text-decoration: none; --framer-text-transform: none; } }']
  , ue = "framer-ZMK2v";
Z.loadFonts(["GF;Inter Tight-regular", "GF;Inter Tight-500", "GF;Inter Tight-700italic", "GF;Inter Tight-italic"]);
var K = [{
    family: "Inter Tight",
    source: "google",
    style: "normal",
    url: "https://fonts.gstatic.com/s/intertight/v7/NGSnv5HMAFg6IuGlBNMjxJEL2VmU3NS7Z2mjDw-qWSRToK8EPg.woff2",
    weight: "400"
}, {
    family: "Inter Tight",
    source: "google",
    style: "normal",
    url: "https://fonts.gstatic.com/s/intertight/v7/NGSnv5HMAFg6IuGlBNMjxJEL2VmU3NS7Z2mjPQ-qWSRToK8EPg.woff2",
    weight: "500"
}, {
    family: "Inter Tight",
    source: "google",
    style: "italic",
    url: "https://fonts.gstatic.com/s/intertight/v7/NGShv5HMAFg6IuGlBNMjxLsC66ZMtb8hyW62x0ylGC5SgqoUPvi5.woff2",
    weight: "700"
}, {
    family: "Inter Tight",
    source: "google",
    style: "italic",
    url: "https://fonts.gstatic.com/s/intertight/v7/NGShv5HMAFg6IuGlBNMjxLsC66ZMtb8hyW62x0xCHy5SgqoUPvi5.woff2",
    weight: "400"
}]
  , $ = ['.framer-b6EPN .framer-styles-preset-1hcerco:not(.rich-text-wrapper), .framer-b6EPN .framer-styles-preset-1hcerco.rich-text-wrapper p { --framer-font-family: "Inter Tight", "Inter Tight Placeholder", sans-serif; --framer-font-family-bold: "Inter Tight", "Inter Tight Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter Tight", "Inter Tight Placeholder", sans-serif; --framer-font-family-italic: "Inter Tight", "Inter Tight Placeholder", sans-serif; --framer-font-size: 18px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 400; --framer-font-weight-bold: 500; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-3b5ae20b-c265-46d5-aec7-61a496c56f0f, #808080); --framer-text-decoration: none; --framer-text-transform: none; }', '@media (max-width: 1199px) and (min-width: 810px) { .framer-b6EPN .framer-styles-preset-1hcerco:not(.rich-text-wrapper), .framer-b6EPN .framer-styles-preset-1hcerco.rich-text-wrapper p { --framer-font-family: "Inter Tight", "Inter Tight Placeholder", sans-serif; --framer-font-family-bold: "Inter Tight", "Inter Tight Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter Tight", "Inter Tight Placeholder", sans-serif; --framer-font-family-italic: "Inter Tight", "Inter Tight Placeholder", sans-serif; --framer-font-size: 15px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 400; --framer-font-weight-bold: 500; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-3b5ae20b-c265-46d5-aec7-61a496c56f0f, #808080); --framer-text-decoration: none; --framer-text-transform: none; } }', '@media (max-width: 809px) and (min-width: 0px) { .framer-b6EPN .framer-styles-preset-1hcerco:not(.rich-text-wrapper), .framer-b6EPN .framer-styles-preset-1hcerco.rich-text-wrapper p { --framer-font-family: "Inter Tight", "Inter Tight Placeholder", sans-serif; --framer-font-family-bold: "Inter Tight", "Inter Tight Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter Tight", "Inter Tight Placeholder", sans-serif; --framer-font-family-italic: "Inter Tight", "Inter Tight Placeholder", sans-serif; --framer-font-size: 13px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 400; --framer-font-weight-bold: 500; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-3b5ae20b-c265-46d5-aec7-61a496c56f0f, #808080); --framer-text-decoration: none; --framer-text-transform: none; } }']
  , ee = "framer-b6EPN";
var rr = {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
};
var tr = {
    ...rr,
    borderRadius: 6,
    background: "rgba(149, 149, 149, 0.1)",
    border: "1px dashed rgba(149, 149, 149, 0.15)",
    color: "#a5a5a5",
    flexDirection: "column"
}
  , Re = D((e,t)=>r("div", {
    style: tr,
    ref: t
}));
var Te, Me = e=>{
    if (!Te) {
        let t = new Map([["bold", e.createElement(e.Fragment, null, e.createElement("path", {
            d: "M221.56,100.85,141.61,25.38l-.16-.15a19.93,19.93,0,0,0-26.91,0l-.17.15L34.44,100.85A20.07,20.07,0,0,0,28,115.55V208a20,20,0,0,0,20,20H96a20,20,0,0,0,20-20V164h24v44a20,20,0,0,0,20,20h48a20,20,0,0,0,20-20V115.55A20.07,20.07,0,0,0,221.56,100.85ZM204,204H164V160a20,20,0,0,0-20-20H112a20,20,0,0,0-20,20v44H52V117.28l76-71.75,76,71.75Z"
        }))], ["duotone", e.createElement(e.Fragment, null, e.createElement("path", {
            d: "M216,115.54V208a8,8,0,0,1-8,8H160a8,8,0,0,1-8-8V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.54a8,8,0,0,1,2.62-5.92l80-75.54a8,8,0,0,1,10.77,0l80,75.54A8,8,0,0,1,216,115.54Z",
            opacity: "0.2"
        }), e.createElement("path", {
            d: "M218.83,103.77l-80-75.48a1.14,1.14,0,0,1-.11-.11,16,16,0,0,0-21.53,0l-.11.11L37.17,103.77A16,16,0,0,0,32,115.55V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V160h32v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V115.55A16,16,0,0,0,218.83,103.77ZM208,208H160V160a16,16,0,0,0-16-16H112a16,16,0,0,0-16,16v48H48V115.55l.11-.1L128,40l79.9,75.43.11.1Z"
        }))], ["fill", e.createElement(e.Fragment, null, e.createElement("path", {
            d: "M224,115.55V208a16,16,0,0,1-16,16H168a16,16,0,0,1-16-16V168a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V115.55a16,16,0,0,1,5.17-11.78l80-75.48.11-.11a16,16,0,0,1,21.53,0,1.14,1.14,0,0,0,.11.11l80,75.48A16,16,0,0,1,224,115.55Z"
        }))], ["light", e.createElement(e.Fragment, null, e.createElement("path", {
            d: "M217.47,105.24l-80-75.5-.09-.08a13.94,13.94,0,0,0-18.83,0l-.09.08-80,75.5A14,14,0,0,0,34,115.55V208a14,14,0,0,0,14,14H96a14,14,0,0,0,14-14V160a2,2,0,0,1,2-2h32a2,2,0,0,1,2,2v48a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V115.55A14,14,0,0,0,217.47,105.24ZM210,208a2,2,0,0,1-2,2H160a2,2,0,0,1-2-2V160a14,14,0,0,0-14-14H112a14,14,0,0,0-14,14v48a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V115.55a2,2,0,0,1,.65-1.48l.09-.08,79.94-75.48a2,2,0,0,1,2.63,0L209.26,114l.08.08a2,2,0,0,1,.66,1.48Z"
        }))], ["regular", e.createElement(e.Fragment, null, e.createElement("path", {
            d: "M218.83,103.77l-80-75.48a1.14,1.14,0,0,1-.11-.11,16,16,0,0,0-21.53,0l-.11.11L37.17,103.77A16,16,0,0,0,32,115.55V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V160h32v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V115.55A16,16,0,0,0,218.83,103.77ZM208,208H160V160a16,16,0,0,0-16-16H112a16,16,0,0,0-16,16v48H48V115.55l.11-.1L128,40l79.9,75.43.11.1Z"
        }))], ["thin", e.createElement(e.Fragment, null, e.createElement("path", {
            d: "M216.13,106.72,136.07,31.13a12,12,0,0,0-16.2.05L39.93,106.67A12,12,0,0,0,36,115.54V208a12,12,0,0,0,12,12H96a12,12,0,0,0,12-12V160a4,4,0,0,1,4-4h32a4,4,0,0,1,4,4v48a12,12,0,0,0,12,12h48a12,12,0,0,0,12-12V115.54A12,12,0,0,0,216.13,106.72ZM212,208a4,4,0,0,1-4,4H160a4,4,0,0,1-4-4V160a12,12,0,0,0-12-12H112a12,12,0,0,0-12,12v48a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V115.54a4.09,4.09,0,0,1,1.36-3L125.3,37.05a4,4,0,0,1,5.33,0l80.06,75.58a4,4,0,0,1,1.31,3Z"
        }))]])
          , a = e.forwardRef((o,i)=>e.createElement("g", {
            ref: i,
            ...o
        }, t.get(o.weight)));
        a.displayName = "House",
        Te = a
    }
    return Te
}
;
var Ve = {
    onClick: {
        type: l.EventHandler
    },
    onMouseDown: {
        type: l.EventHandler
    },
    onMouseUp: {
        type: l.EventHandler
    },
    onMouseEnter: {
        type: l.EventHandler
    },
    onMouseLeave: {
        type: l.EventHandler
    }
}
  , ar = (e,t)=>e.find(a=>a.toLowerCase().includes(t));
function _e(e, t, a="", o, i) {
    let s = B(()=>{
        if (a == null || a?.length === 0)
            return null;
        let m = a.toLowerCase().replace(/-|\s/g, "");
        var d;
        return (d = i[m]) !== null && d !== void 0 ? d : ar(e, m)
    }
    , [o, a]);
    return t ? o : s
}
var Ie = ["AddressBook", "AirTrafficControl", "Airplane", "AirplaneInFlight", "AirplaneLanding", "AirplaneTakeoff", "AirplaneTilt", "Airplay", "Alarm", "Alien", "AlignBottom", "AlignBottomSimple", "AlignCenterVertical", "AlignLeft", "AlignLeftSimple", "AlignRight", "AlignRightSimple", "AlignTop", "AlignTopSimple", "AmazonLogo", "Anchor", "AnchorSimple", "AndroidLogo", "AngularLogo", "Aperture", "AppStoreLogo", "AppWindow", "AppleLogo", "ApplePodcastsLogo", "Archive", "ArchiveBox", "ArchiveTray", "Armchair", "ArrowArcLeft", "ArrowArcRight", "ArrowBendDownLeft", "ArrowBendDownRight", "ArrowBendLeftDown", "ArrowBendLeftUp", "ArrowBendRightDown", "ArrowBendRightUp", "ArrowBendUpLeft", "ArrowBendUpRight", "ArrowCircleDown", "ArrowCircleDownLeft", "ArrowCircleDownRight", "ArrowCircleLeft", "ArrowCircleRight", "ArrowCircleUp", "ArrowCircleUpLeft", "ArrowCircleUpRight", "ArrowClockwise", "ArrowDown", "ArrowDownLeft", "ArrowDownRight", "ArrowElbowDownLeft", "ArrowElbowDownRight", "ArrowElbowLeft", "ArrowElbowLeftDown", "ArrowElbowLeftUp", "ArrowElbowRight", "ArrowElbowRightDown", "ArrowElbowRightUp", "ArrowElbowUpLeft", "ArrowElbowUpRight", "ArrowFatDown", "ArrowFatLeft", "ArrowFatLineDown", "ArrowFatLineLeft", "ArrowFatLineRight", "ArrowFatLineUp", "ArrowFatLinesDown", "ArrowFatLinesLeft", "ArrowFatLinesRight", "ArrowFatLinesUp", "ArrowFatRight", "ArrowFatUp", "ArrowLeft", "ArrowLineDown", "ArrowLineDownLeft", "ArrowLineDownRight", "ArrowLineLeft", "ArrowLineRight", "ArrowLineUp", "ArrowLineUpLeft", "ArrowLineUpRight", "ArrowRight", "ArrowSquareDown", "ArrowSquareDownLeft", "ArrowSquareDownRight", "ArrowSquareIn", "ArrowSquareLeft", "ArrowSquareOut", "ArrowSquareRight", "ArrowSquareUp", "ArrowSquareUpLeft", "ArrowSquareUpRight", "ArrowUDownLeft", "ArrowUDownRight", "ArrowULeftDown", "ArrowULeftUp", "ArrowURightDown", "ArrowURightUp", "ArrowUUpLeft", "ArrowUUpRight", "ArrowUp", "ArrowUpLeft", "ArrowUpRight", "ArrowsClockwise", "ArrowsDownUp", "ArrowsHorizontal", "ArrowsIn", "ArrowsInCardinal", "ArrowsInLineVertical", "ArrowsInSimple", "ArrowsLeftRight", "ArrowsMerge", "ArrowsOut", "ArrowsOutCardinal", "ArrowsOutSimple", "ArrowsSplit", "ArrowsVertical", "Article", "ArticleMedium", "ArticleNyTimes", "Asterisk", "AsteriskSimple", "At", "Atom", "Baby", "Backpack", "Backspace", "Bag", "BagSimple", "Balloon", "Bandaids", "Bank", "Barbell", "Barcode", "Barricade", "Baseball", "BaseballCap", "Basket", "Basketball", "Bathtub", "BatteryCharging", "BatteryEmpty", "BatteryFull", "BatteryHigh", "BatteryLow", "BatteryMedium", "BatteryPlus", "BatteryPlusVertical", "BatteryVerticalEmpty", "BatteryVerticalFull", "BatteryVerticalHigh", "BatteryVerticalLow", "BatteryWarning", "Bed", "BeerBottle", "BeerStein", "BehanceLogo", "Bell", "BellRinging", "BellSimple", "BellSimpleRinging", "BellSimpleSlash", "BellSimpleZ", "BellSlash", "BellZ", "BezierCurve", "Bicycle", "Binoculars", "Bird", "Bluetooth", "BluetoothConnected", "BluetoothSlash", "BluetoothX", "Boat", "Bone", "Book", "BookBookmark", "BookOpen", "BookOpenText", "Bookmark", "BookmarkSimple", "Bookmarks", "BookmarksSimple", "Books", "Boot", "BoundingBox", "BowlFood", "BracketsAngle", "BracketsCurly", "BracketsRound", "BracketsSquare", "Brain", "Brandy", "Bridge", "Briefcase", "BriefcaseMetal", "Broadcast", "Broom", "Browser", "Browsers", "Bug", "BugBeetle", "BugDroid", "Buildings", "Bus", "Butterfly", "Cactus", "Cake", "Calculator", "Calendar", "CalendarBlank", "CalendarCheck", "CalendarPlus", "CalendarX", "CallBell", "Camera", "CameraPlus", "CameraRotate", "CameraSlash", "Campfire", "Car", "CarProfile", "CarSimple", "Cardholder", "Cards", "CaretCircleDoubleUp", "CaretCircleDown", "CaretCircleLeft", "CaretCircleRight", "CaretCircleUp", "CaretCircleUpDown", "CaretDoubleDown", "CaretDoubleLeft", "CaretDoubleRight", "CaretDoubleUp", "CaretDown", "CaretLeft", "CaretRight", "CaretUp", "CaretUpDown", "Carrot", "CassetteTape", "CastleTurret", "Cat", "CellSignalFull", "CellSignalHigh", "CellSignalLow", "CellSignalMedium", "CellSignalNone", "CellSignalSlash", "CellSignalX", "Certificate", "Chair", "Chalkboard", "ChalkboardSimple", "ChalkboardTeacher", "Champagne", "ChargingStation", "ChartBar", "ChartBarHorizontal", "ChartDonut", "ChartLine", "ChartLineDown", "ChartLineUp", "ChartPie", "ChartPieSlice", "ChartPolar", "ChartScatter", "Chat", "ChatCentered", "ChatCenteredDots", "ChatCenteredText", "ChatCircle", "ChatCircleDots", "ChatCircleText", "ChatDots", "ChatTeardrop", "ChatTeardropDots", "ChatTeardropText", "ChatText", "Chats", "ChatsCircle", "ChatsTeardrop", "Check", "CheckCircle", "CheckFat", "CheckSquare", "CheckSquareOffset", "Checks", "Church", "Circle", "CircleDashed", "CircleHalf", "CircleHalfTilt", "CircleNotch", "CirclesFour", "CirclesThree", "CirclesThreePlus", "Circuitry", "Clipboard", "ClipboardText", "Clock", "ClockAfternoon", "ClockClockwise", "ClockCounterClockwise", "ClockCountdown", "ClosedCaptioning", "Cloud", "CloudArrowDown", "CloudArrowUp", "CloudCheck", "CloudFog", "CloudLightning", "CloudMoon", "CloudRain", "CloudSlash", "CloudSnow", "CloudSun", "CloudWarning", "CloudX", "Club", "CoatHanger", "CodaLogo", "Code", "CodeBlock", "CodeSimple", "CodepenLogo", "CodesandboxLogo", "Coffee", "Coin", "CoinVertical", "Coins", "Columns", "Command", "Compass", "CompassTool", "ComputerTower", "Confetti", "ContactlessPayment", "Control", "Cookie", "CookingPot", "Copy", "CopySimple", "Copyleft", "Copyright", "CornersIn", "CornersOut", "Couch", "Cpu", "CreditCard", "Crop", "Cross", "Crosshair", "CrosshairSimple", "Crown", "CrownSimple", "Cube", "CubeFocus", "CubeTransparent", "CurrencyBtc", "CurrencyCircleDollar", "CurrencyCny", "CurrencyDollar", "CurrencyDollarSimple", "CurrencyEth", "CurrencyEur", "CurrencyGbp", "CurrencyInr", "CurrencyJpy", "CurrencyKrw", "CurrencyKzt", "CurrencyNgn", "CurrencyRub", "Cursor", "CursorClick", "CursorText", "Cylinder", "Database", "Desktop", "DesktopTower", "Detective", "DevToLogo", "DeviceMobile", "DeviceMobileCamera", "DeviceMobileSpeaker", "DeviceTablet", "DeviceTabletCamera", "DeviceTabletSpeaker", "Devices", "Diamond", "DiamondsFour", "DiceFive", "DiceFour", "DiceOne", "DiceSix", "DiceThree", "DiceTwo", "Disc", "DiscordLogo", "Divide", "Dna", "Dog", "Door", "DoorOpen", "Dot", "DotOutline", "DotsNine", "DotsSix", "DotsSixVertical", "DotsThree", "DotsThreeCircle", "DotsThreeOutline", "DotsThreeVertical", "Download", "DownloadSimple", "Dress", "DribbbleLogo", "Drop", "DropHalf", "DropHalfBottom", "DropboxLogo", "Ear", "EarSlash", "Egg", "EggCrack", "Eject", "EjectSimple", "Elevator", "Engine", "Envelope", "EnvelopeOpen", "EnvelopeSimple", "EnvelopeSimpleOpen", "Equalizer", "Equals", "Eraser", "EscalatorDown", "EscalatorUp", "Exam", "Exclude", "ExcludeSquare", "Export", "Eye", "EyeClosed", "EyeSlash", "Eyedropper", "EyedropperSample", "Eyeglasses", "FaceMask", "FacebookLogo", "Factory", "Faders", "FadersHorizontal", "Fan", "FastForward", "FastForwardCircle", "Feather", "FigmaLogo", "File", "FileArchive", "FileArrowDown", "FileArrowUp", "FileAudio", "FileCloud", "FileCode", "FileCss", "FileCsv", "FileDashed", "FileDoc", "FileHtml", "FileImage", "FileJpg", "FileJs", "FileJsx", "FileLock", "FileMagnifyingGlass", "FileMinus", "FilePdf", "FilePlus", "FilePng", "FilePpt", "FileRs", "FileSql", "FileSvg", "FileText", "FileTs", "FileTsx", "FileVideo", "FileVue", "FileX", "FileXls", "FileZip", "Files", "FilmReel", "FilmScript", "FilmSlate", "FilmStrip", "Fingerprint", "FingerprintSimple", "FinnTheHuman", "Fire", "FireExtinguisher", "FireSimple", "FirstAid", "FirstAidKit", "Fish", "FishSimple", "Flag", "FlagBanner", "FlagCheckered", "FlagPennant", "Flame", "Flashlight", "Flask", "FloppyDisk", "FloppyDiskBack", "FlowArrow", "Flower", "FlowerLotus", "FlowerTulip", "FlyingSaucer", "Folder", "FolderDashed", "FolderLock", "FolderMinus", "FolderNotch", "FolderNotchMinus", "FolderNotchOpen", "FolderNotchPlus", "FolderOpen", "FolderPlus", "FolderSimple", "FolderSimpleDashed", "FolderSimpleLock", "FolderSimpleMinus", "FolderSimplePlus", "FolderSimpleStar", "FolderSimpleUser", "FolderStar", "FolderUser", "Folders", "Football", "Footprints", "ForkKnife", "FrameCorners", "FramerLogo", "Function", "Funnel", "FunnelSimple", "GameController", "Garage", "GasCan", "GasPump", "Gauge", "Gavel", "Gear", "GearFine", "GearSix", "GenderFemale", "GenderIntersex", "GenderMale", "GenderNeuter", "GenderNonbinary", "GenderTransgender", "Ghost", "Gif", "Gift", "GitBranch", "GitCommit", "GitDiff", "GitFork", "GitMerge", "GitPullRequest", "GithubLogo", "GitlabLogo", "GitlabLogoSimple", "Globe", "GlobeHemisphereEast", "GlobeHemisphereWest", "GlobeSimple", "GlobeStand", "Goggles", "GoodreadsLogo", "GoogleCardboardLogo", "GoogleChromeLogo", "GoogleDriveLogo", "GoogleLogo", "GooglePhotosLogo", "GooglePlayLogo", "GooglePodcastsLogo", "Gradient", "GraduationCap", "Grains", "GrainsSlash", "Graph", "GridFour", "GridNine", "Guitar", "Hamburger", "Hammer", "Hand", "HandCoins", "HandEye", "HandFist", "HandGrabbing", "HandHeart", "HandPalm", "HandPointing", "HandSoap", "HandSwipeLeft", "HandSwipeRight", "HandTap", "HandWaving", "Handbag", "HandbagSimple", "HandsClapping", "HandsPraying", "Handshake", "HardDrive", "HardDrives", "Hash", "HashStraight", "Headlights", "Headphones", "Headset", "Heart", "HeartBreak", "HeartHalf", "HeartStraight", "HeartStraightBreak", "Heartbeat", "Hexagon", "HighHeel", "HighlighterCircle", "Hoodie", "Horse", "Hourglass", "HourglassHigh", "HourglassLow", "HourglassMedium", "HourglassSimple", "HourglassSimpleHigh", "HourglassSimpleLow", "House", "HouseLine", "HouseSimple", "IceCream", "IdentificationBadge", "IdentificationCard", "Image", "ImageSquare", "Images", "ImagesSquare", "Infinity", "Info", "InstagramLogo", "Intersect", "IntersectSquare", "IntersectThree", "Jeep", "Kanban", "Key", "KeyReturn", "Keyboard", "Keyhole", "Knife", "Ladder", "LadderSimple", "Lamp", "Laptop", "Layout", "Leaf", "Lifebuoy", "Lightbulb", "LightbulbFilament", "Lighthouse", "Lightning", "LightningA", "LightningSlash", "LineSegment", "LineSegments", "Link", "LinkBreak", "LinkSimple", "LinkSimpleBreak", "LinkSimpleHorizontal", "LinkedinLogo", "LinuxLogo", "List", "ListBullets", "ListChecks", "ListDashes", "ListMagnifyingGlass", "ListNumbers", "ListPlus", "Lock", "LockKey", "LockKeyOpen", "LockLaminated", "LockLaminatedOpen", "LockOpen", "LockSimple", "LockSimpleOpen", "Lockers", "MagicWand", "Magnet", "MagnetStraight", "MagnifyingGlass", "MagnifyingGlassMinus", "MagnifyingGlassPlus", "MapPin", "MapPinLine", "MapTrifold", "MarkerCircle", "Martini", "MaskHappy", "MaskSad", "MathOperations", "Medal", "MedalMilitary", "MediumLogo", "Megaphone", "MegaphoneSimple", "MessengerLogo", "MetaLogo", "Metronome", "Microphone", "MicrophoneSlash", "MicrophoneStage", "MicrosoftExcelLogo", "MicrosoftOutlookLogo", "MicrosoftTeamsLogo", "MicrosoftWordLogo", "Minus", "MinusCircle", "MinusSquare", "Money", "Monitor", "MonitorPlay", "Moon", "MoonStars", "Moped", "MopedFront", "Mosque", "Motorcycle", "Mountains", "Mouse", "MouseSimple", "MusicNote", "MusicNoteSimple", "MusicNotes", "MusicNotesPlus", "MusicNotesSimple", "NavigationArrow", "Needle", "Newspaper", "NewspaperClipping", "Notches", "Note", "NoteBlank", "NotePencil", "Notebook", "Notepad", "Notification", "NotionLogo", "NumberCircleEight", "NumberCircleFive", "NumberCircleFour", "NumberCircleNine", "NumberCircleOne", "NumberCircleSeven", "NumberCircleSix", "NumberCircleThree", "NumberCircleTwo", "NumberCircleZero", "NumberEight", "NumberFive", "NumberFour", "NumberNine", "NumberOne", "NumberSeven", "NumberSix", "NumberSquareEight", "NumberSquareFive", "NumberSquareFour", "NumberSquareNine", "NumberSquareOne", "NumberSquareSeven", "NumberSquareSix", "NumberSquareThree", "NumberSquareTwo", "NumberSquareZero", "NumberThree", "NumberTwo", "NumberZero", "Nut", "NyTimesLogo", "Octagon", "OfficeChair", "Option", "OrangeSlice", "Package", "PaintBrush", "PaintBrushBroad", "PaintBrushHousehold", "PaintBucket", "PaintRoller", "Palette", "Pants", "PaperPlane", "PaperPlaneRight", "PaperPlaneTilt", "Paperclip", "PaperclipHorizontal", "Parachute", "Paragraph", "Parallelogram", "Park", "Password", "Path", "PatreonLogo", "Pause", "PauseCircle", "PawPrint", "PaypalLogo", "Peace", "Pen", "PenNib", "PenNibStraight", "Pencil", "PencilCircle", "PencilLine", "PencilSimple", "PencilSimpleLine", "PencilSimpleSlash", "PencilSlash", "Pentagram", "Pepper", "Percent", "Person", "PersonArmsSpread", "PersonSimple", "PersonSimpleBike", "PersonSimpleRun", "PersonSimpleThrow", "PersonSimpleWalk", "Perspective", "Phone", "PhoneCall", "PhoneDisconnect", "PhoneIncoming", "PhoneOutgoing", "PhonePlus", "PhoneSlash", "PhoneX", "PhosphorLogo", "Pi", "PianoKeys", "PictureInPicture", "PiggyBank", "Pill", "PinterestLogo", "Pinwheel", "Pizza", "Placeholder", "Planet", "Plant", "Play", "PlayCircle", "PlayPause", "Playlist", "Plug", "PlugCharging", "Plugs", "PlugsConnected", "Plus", "PlusCircle", "PlusMinus", "PlusSquare", "PokerChip", "PoliceCar", "Polygon", "Popcorn", "PottedPlant", "Power", "Prescription", "Presentation", "PresentationChart", "Printer", "Prohibit", "ProhibitInset", "ProjectorScreen", "ProjectorScreenChart", "Pulse", "PushPin", "PushPinSimple", "PushPinSimpleSlash", "PushPinSlash", "PuzzlePiece", "QrCode", "Question", "Queue", "Quotes", "Radical", "Radio", "RadioButton", "Radioactive", "Rainbow", "RainbowCloud", "ReadCvLogo", "Receipt", "ReceiptX", "Record", "Rectangle", "Recycle", "RedditLogo", "Repeat", "RepeatOnce", "Rewind", "RewindCircle", "RoadHorizon", "Robot", "Rocket", "RocketLaunch", "Rows", "Rss", "RssSimple", "Rug", "Ruler", "Scales", "Scan", "Scissors", "Scooter", "Screencast", "ScribbleLoop", "Scroll", "Seal", "SealCheck", "SealQuestion", "SealWarning", "Selection", "SelectionAll", "SelectionBackground", "SelectionForeground", "SelectionInverse", "SelectionPlus", "SelectionSlash", "Shapes", "Share", "ShareFat", "ShareNetwork", "Shield", "ShieldCheck", "ShieldCheckered", "ShieldChevron", "ShieldPlus", "ShieldSlash", "ShieldStar", "ShieldWarning", "ShirtFolded", "ShootingStar", "ShoppingBag", "ShoppingBagOpen", "ShoppingCart", "ShoppingCartSimple", "Shower", "Shrimp", "Shuffle", "ShuffleAngular", "ShuffleSimple", "Sidebar", "SidebarSimple", "Sigma", "SignIn", "SignOut", "Signature", "Signpost", "SimCard", "Siren", "SketchLogo", "SkipBack", "SkipBackCircle", "SkipForward", "SkipForwardCircle", "Skull", "SlackLogo", "Sliders", "SlidersHorizontal", "Slideshow", "Smiley", "SmileyAngry", "SmileyBlank", "SmileyMeh", "SmileyNervous", "SmileySad", "SmileySticker", "SmileyWink", "SmileyXEyes", "SnapchatLogo", "Sneaker", "SneakerMove", "Snowflake", "SoccerBall", "SortAscending", "SortDescending", "SoundcloudLogo", "Spade", "Sparkle", "SpeakerHifi", "SpeakerHigh", "SpeakerLow", "SpeakerNone", "SpeakerSimpleHigh", "SpeakerSimpleLow", "SpeakerSimpleNone", "SpeakerSimpleSlash", "SpeakerSimpleX", "SpeakerSlash", "SpeakerX", "Spinner", "SpinnerGap", "Spiral", "SplitHorizontal", "SplitVertical", "SpotifyLogo", "Square", "SquareHalf", "SquareHalfBottom", "SquareLogo", "SquareSplitVertical", "SquaresFour", "Stack", "StackOverflowLogo", "StackSimple", "Stairs", "Stamp", "Star", "StarAndCrescent", "StarFour", "StarHalf", "StarOfDavid", "SteeringWheel", "Steps", "Stethoscope", "Sticker", "Stool", "Stop", "StopCircle", "Storefront", "Strategy", "StripeLogo", "Student", "Subtitles", "Subtract", "SubtractSquare", "Suitcase", "SuitcaseRolling", "SuitcaseSimple", "Sun", "SunDim", "SunHorizon", "Sunglasses", "Swap", "Swatches", "SwimmingPool", "Sword", "Synagogue", "Syringe", "TShirt", "Table", "Tabs", "Tag", "TagChevron", "TagSimple", "Target", "Taxi", "TelegramLogo", "Television", "TelevisionSimple", "TennisBall", "Tent", "Terminal", "TerminalWindow", "TestTube", "TextAUnderline", "TextAa", "TextAlignCenter", "TextAlignJustify", "TextAlignLeft", "TextAlignRight", "TextB", "TextColumns", "TextH", "TextHFive", "TextHFour", "TextHOne", "TextHSix", "TextHThree", "TextHTwo", "TextIndent", "TextItalic", "TextOutdent", "TextStrikethrough", "TextT", "TextUnderline", "Textbox", "Thermometer", "ThermometerCold", "ThermometerHot", "ThermometerSimple", "ThumbsDown", "ThumbsUp", "Ticket", "TidalLogo", "TiktokLogo", "Timer", "Tipi", "ToggleLeft", "ToggleRight", "Toilet", "ToiletPaper", "Toolbox", "Tooth", "Tote", "ToteSimple", "Trademark", "TrademarkRegistered", "TrafficCone", "TrafficSign", "TrafficSignal", "Train", "TrainRegional", "TrainSimple", "Tram", "Translate", "Trash", "TrashSimple", "Tray", "Tree", "TreeEvergreen", "TreePalm", "TreeStructure", "TrendDown", "TrendUp", "Triangle", "Trophy", "Truck", "TwitchLogo", "TwitterLogo", "Umbrella", "UmbrellaSimple", "Unite", "UniteSquare", "Upload", "UploadSimple", "Usb", "User", "UserCircle", "UserCircleGear", "UserCircleMinus", "UserCirclePlus", "UserFocus", "UserGear", "UserList", "UserMinus", "UserPlus", "UserRectangle", "UserSquare", "UserSwitch", "Users", "UsersFour", "UsersThree", "Van", "Vault", "Vibrate", "Video", "VideoCamera", "VideoCameraSlash", "Vignette", "VinylRecord", "VirtualReality", "Virus", "Voicemail", "Volleyball", "Wall", "Wallet", "Warehouse", "Warning", "WarningCircle", "WarningDiamond", "WarningOctagon", "Watch", "WaveSawtooth", "WaveSine", "WaveSquare", "WaveTriangle", "Waveform", "Waves", "Webcam", "WebcamSlash", "WebhooksLogo", "WechatLogo", "WhatsappLogo", "Wheelchair", "WheelchairMotion", "WifiHigh", "WifiLow", "WifiMedium", "WifiNone", "WifiSlash", "WifiX", "Wind", "WindowsLogo", "Wine", "Wrench", "X", "XCircle", "XSquare", "YinYang", "YoutubeLogo"]
  , or = "https://framer.com/m/phosphor-icons/"
  , Ue = ["thin", "light", "regular", "bold", "fill", "duotone"]
  , nr = Ie.reduce((e,t)=>(e[t.toLowerCase()] = t,
e), {});
function R(e) {
    let {color: t, selectByList: a, iconSearch: o, iconSelection: i, onClick: s, onMouseDown: c, onMouseUp: m, onMouseEnter: d, onMouseLeave: p, weight: g, mirrored: w} = e
      , u = N(!1)
      , y = _e(Ie, a, o, i, nr)
      , [v,f] = He(y === "Home" ? Me(Q) : null);
    async function h() {
        try {
            let X = await import(`${or}${y}.js@0.0.53`);
            u.current && f(X.default(Q))
        } catch {
            u.current && f(null)
        }
    }
    fe(()=>(u.current = !0,
    h(),
    ()=>{
        u.current = !1
    }
    ), [y]);
    let F = Ce.current() === Ce.canvas ? r(Re, {}) : null;
    return r(n.div, {
        style: {
            display: "contents"
        },
        onClick: s,
        onMouseEnter: d,
        onMouseLeave: p,
        onMouseDown: c,
        onMouseUp: m,
        children: v ? r("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 256 256",
            style: {
                userSelect: "none",
                width: "100%",
                height: "100%",
                display: "inline-block",
                fill: t,
                color: t,
                flexShrink: 0,
                transform: w ? "scale(-1, 1)" : void 0
            },
            focusable: "false",
            color: t,
            children: r(v, {
                color: t,
                weight: g
            })
        }) : F
    })
}
R.displayName = "Phosphor";
R.defaultProps = {
    width: 24,
    height: 24,
    iconSelection: "House",
    iconSearch: "House",
    color: "#66F",
    selectByList: !0,
    weight: "regular",
    mirrored: !1
};
P(R, {
    selectByList: {
        type: l.Boolean,
        title: "Select",
        enabledTitle: "List",
        disabledTitle: "Search",
        defaultValue: R.defaultProps.selectByList
    },
    iconSelection: {
        type: l.Enum,
        options: Ie,
        defaultValue: R.defaultProps.iconSelection,
        title: "Name",
        hidden: ({selectByList: e})=>!e,
        description: "Find every icon name on the [Phosphor site](https://phosphoricons.com/)"
    },
    iconSearch: {
        type: l.String,
        title: "Name",
        placeholder: "Menu, Wifi, Box\u2026",
        hidden: ({selectByList: e})=>e
    },
    color: {
        type: l.Color,
        title: "Color",
        defaultValue: R.defaultProps.color
    },
    weight: {
        type: l.Enum,
        title: "Weight",
        optionTitles: Ue.map(e=>e.charAt(0).toUpperCase() + e.slice(1)),
        options: Ue,
        defaultValue: R.defaultProps.weight
    },
    mirrored: {
        type: l.Boolean,
        enabledTitle: "Yes",
        disabledTitle: "No",
        defaultValue: R.defaultProps.mirrored
    },
    ...Ve
});
var ir = V(R)
  , ye = Ae(R)
  , lr = {
    IhAF6VbDb: {
        hover: !0
    }
}
  , sr = ["PRbfDc60j", "IhAF6VbDb", "SXPdgd0MU"]
  , cr = "framer-vcCWg"
  , mr = {
    IhAF6VbDb: "framer-v-hrp5q3",
    PRbfDc60j: "framer-v-rbsvfm",
    SXPdgd0MU: "framer-v-g3ckde"
};
function Ge(e, ...t) {
    let a = {};
    return t?.forEach(o=>o && Object.assign(a, e[o])),
    a
}
var fr = {
    default: {
        damping: 60,
        delay: 0,
        mass: 1,
        stiffness: 500,
        type: "spring"
    }
}
  , dr = ({value: e, children: t})=>{
    let a = U(I)
      , o = e ?? a.transition
      , i = B(()=>({
        ...a,
        transition: o
    }), [JSON.stringify(o)]);
    return r(I.Provider, {
        value: i,
        children: t
    })
}
  , pr = n(x)
  , hr = {
    Bold: "bold",
    Duotone: "duotone",
    Fill: "fill",
    Light: "light",
    Regular: "regular",
    Thin: "thin"
}
  , ur = {
    "No Hover": "PRbfDc60j",
    Hover: "IhAF6VbDb",
    Phone: "SXPdgd0MU"
}
  , gr = ({height: e, icon: t, iconColor: a, iconWeight: o, id: i, link: s, width: c, ...m})=>{
    var d, p, g, w, u, y, v;
    return {
        ...m,
        kmbguCD3u: s ?? m.kmbguCD3u,
        QC2pTHcHG: (g = (p = (d = hr[o]) !== null && d !== void 0 ? d : o) !== null && p !== void 0 ? p : m.QC2pTHcHG) !== null && g !== void 0 ? g : "thin",
        variant: (u = (w = ur[m.variant]) !== null && w !== void 0 ? w : m.variant) !== null && u !== void 0 ? u : "PRbfDc60j",
        ZA3O5UdYP: (y = a ?? m.ZA3O5UdYP) !== null && y !== void 0 ? y : "var(--token-705b30da-ebd7-4612-98fa-aaf0efec2f3d, rgb(0, 0, 0))",
        zu2BQmQeb: (v = t ?? m.zu2BQmQeb) !== null && v !== void 0 ? v : "House"
    }
}
  , yr = (e,t)=>t.join("-") + e.layoutDependency
  , br = D(function(e, t) {
    let {activeLocale: a, setLocale: o} = q()
      , {style: i, className: s, layoutId: c, variant: m, ZA3O5UdYP: d, QC2pTHcHG: p, zu2BQmQeb: g, kmbguCD3u: w, ...u} = gr(e)
      , {baseVariant: y, classNames: v, gestureVariant: f, setGestureState: h, setVariant: _, transition: F, variants: T} = O({
        cycleOrder: sr,
        defaultVariant: "PRbfDc60j",
        enabledGestures: lr,
        transitions: fr,
        variant: m,
        variantClassNames: mr
    })
      , Y = yr(e, T)
      , X = N(null)
      , ae = G()
      , Le = [];
    return r(j, {
        id: c ?? ae,
        children: r(pr, {
            animate: T,
            initial: !1,
            children: r(dr, {
                value: F,
                children: r(oe, {
                    href: w,
                    children: r(n.a, {
                        ...u,
                        className: `${E(cr, ...Le, "framer-rbsvfm", s, v)} framer-1do5lil`,
                        "data-framer-name": "No Hover",
                        layoutDependency: Y,
                        layoutId: "PRbfDc60j",
                        onHoverEnd: ()=>h({
                            isHovered: !1
                        }),
                        onHoverStart: ()=>h({
                            isHovered: !0
                        }),
                        onTap: ()=>h({
                            isPressed: !1
                        }),
                        onTapCancel: ()=>h({
                            isPressed: !1
                        }),
                        onTapStart: ()=>h({
                            isPressed: !0
                        }),
                        ref: t ?? X,
                        style: {
                            ...i
                        },
                        ...Ge({
                            "IhAF6VbDb-hover": {
                                "data-framer-name": void 0
                            },
                            IhAF6VbDb: {
                                "data-framer-name": "Hover"
                            },
                            SXPdgd0MU: {
                                "data-framer-name": "Phone"
                            }
                        }, y, f),
                        children: r(n.div, {
                            className: "framer-12gdta2-container",
                            layoutDependency: Y,
                            layoutId: "qBptjfhiC-container",
                            children: r(R, {
                                color: d,
                                height: "100%",
                                iconSearch: g,
                                iconSelection: "House",
                                id: "qBptjfhiC",
                                layoutId: "qBptjfhiC",
                                mirrored: !1,
                                selectByList: !1,
                                style: {
                                    height: "100%",
                                    width: "100%"
                                },
                                weight: p,
                                width: "100%",
                                ...Ge({
                                    "IhAF6VbDb-hover": {
                                        color: "var(--token-c59a04d0-3d52-4591-be1d-6424044001a1, rgb(240, 240, 240))"
                                    }
                                }, y, f)
                            })
                        })
                    })
                })
            })
        })
    })
})
  , xr = ['.framer-vcCWg[data-border="true"]::after, .framer-vcCWg [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }', "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-vcCWg.framer-1do5lil, .framer-vcCWg .framer-1do5lil { display: block; }", ".framer-vcCWg.framer-rbsvfm { height: 36px; overflow: hidden; position: relative; text-decoration: none; width: 36px; }", ".framer-vcCWg .framer-12gdta2-container { bottom: 0px; cursor: default; flex: none; left: 0px; pointer-events: none; position: absolute; right: 0px; top: 0px; }", ".framer-vcCWg.framer-v-hrp5q3.framer-rbsvfm { cursor: pointer; }", ".framer-vcCWg.framer-v-g3ckde.framer-rbsvfm { height: 20px; width: 20px; }"]
  , ie = W(br, xr, "framer-vcCWg")
  , C = ie;
ie.displayName = "Icon";
ie.defaultProps = {
    height: 36,
    width: 36
};
P(ie, {
    variant: {
        options: ["PRbfDc60j", "IhAF6VbDb", "SXPdgd0MU"],
        optionTitles: ["No Hover", "Hover", "Phone"],
        title: "Variant",
        type: l.Enum
    },
    ZA3O5UdYP: {
        defaultValue: 'var(--token-705b30da-ebd7-4612-98fa-aaf0efec2f3d, rgb(0, 0, 0)) /* {"name":"Icons"} */',
        title: "Icon Color",
        type: l.Color
    },
    QC2pTHcHG: ye?.weight && {
        ...ye.weight,
        defaultValue: "thin",
        description: void 0,
        hidden: void 0,
        title: "Icon Weight"
    },
    zu2BQmQeb: {
        defaultValue: "House",
        placeholder: "Menu, Wifi, Box\u2026",
        title: "Icon",
        type: l.String
    },
    kmbguCD3u: {
        title: "Link",
        type: l.Link
    }
});
z(ie, [...ir]);
var vr = V(C)
  , wr = ["vad5PnoVS", "D3ErOqFuF"]
  , Sr = "framer-Hbyap"
  , Cr = {
    D3ErOqFuF: "framer-v-1khrq5",
    vad5PnoVS: "framer-v-1lepo7n"
};
function je(e, ...t) {
    let a = {};
    return t?.forEach(o=>o && Object.assign(a, e[o])),
    a
}
var Tr = {
    damping: 60,
    delay: 0,
    mass: 1,
    stiffness: 500,
    type: "spring"
}
  , Ir = ({value: e, children: t})=>{
    let a = U(I)
      , o = e ?? a.transition
      , i = B(()=>({
        ...a,
        transition: o
    }), [JSON.stringify(o)]);
    return r(I.Provider, {
        value: i,
        children: t
    })
}
  , Fr = n(x)
  , Pr = {
    "Desktop/Tablet": "vad5PnoVS",
    Phone: "D3ErOqFuF"
}
  , kr = ({height: e, id: t, width: a, ...o})=>{
    var i, s;
    return {
        ...o,
        variant: (s = (i = Pr[o.variant]) !== null && i !== void 0 ? i : o.variant) !== null && s !== void 0 ? s : "vad5PnoVS"
    }
}
  , Lr = (e,t)=>t.join("-") + e.layoutDependency
  , Hr = D(function(e, t) {
    let {activeLocale: a, setLocale: o} = q()
      , {style: i, className: s, layoutId: c, variant: m, ...d} = kr(e)
      , {baseVariant: p, classNames: g, gestureVariant: w, setGestureState: u, setVariant: y, variants: v} = O({
        cycleOrder: wr,
        defaultVariant: "vad5PnoVS",
        variant: m,
        variantClassNames: Cr
    })
      , f = Lr(e, v)
      , h = N(null)
      , _ = G()
      , F = [ue, ee]
      , T = de();
    return r(j, {
        id: c ?? _,
        children: r(Fr, {
            animate: v,
            initial: !1,
            children: r(Ir, {
                value: Tr,
                children: A(n.div, {
                    ...d,
                    className: E(Sr, ...F, "framer-1lepo7n", s, g),
                    "data-framer-name": "Desktop/Tablet",
                    layoutDependency: f,
                    layoutId: "vad5PnoVS",
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
                    ref: t ?? h,
                    style: {
                        ...i
                    },
                    ...je({
                        D3ErOqFuF: {
                            "data-framer-name": "Phone"
                        }
                    }, p, w),
                    children: [A(n.div, {
                        className: "framer-15ohjrn",
                        layoutDependency: f,
                        layoutId: "yoW29LMiC",
                        children: [r(k, {
                            __fromCanvasComponent: !0,
                            children: r(x, {
                                children: r(n.h1, {
                                    className: "framer-styles-preset-1ogq7h3",
                                    "data-styles-preset": "lc3x1mxQ4",
                                    style: {
                                        "--framer-text-color": "var(--extracted-gdpscs, var(--token-c59a04d0-3d52-4591-be1d-6424044001a1, rgb(240, 240, 240)))"
                                    },
                                    children: r(n.span, {
                                        "data-text-fill": "true",
                                        style: {
                                            backgroundImage: "radial-gradient(67.80000000000001% 75% at 47.3% 50%, var(--token-c59a04d0-3d52-4591-be1d-6424044001a1, rgb(240, 240, 240)) 10.7723%, var(--token-e23e35a8-daac-4a36-9609-ee45ae8fcf3e, rgb(35, 35, 35)) 99.13897927927928%)"
                                        },
                                        children: "Let's Get In Touch !"
                                    })
                                })
                            }),
                            className: "framer-or7zl0",
                            fonts: ["Inter"],
                            layoutDependency: f,
                            layoutId: "AQtGMibuf",
                            style: {
                                "--extracted-gdpscs": "var(--token-c59a04d0-3d52-4591-be1d-6424044001a1, rgb(240, 240, 240))",
                                "--framer-link-text-color": "rgb(0, 153, 255)",
                                "--framer-link-text-decoration": "underline"
                            },
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                            ...je({
                                D3ErOqFuF: {
                                    children: r(x, {
                                        children: r(n.h1, {
                                            className: "framer-styles-preset-1ogq7h3",
                                            "data-styles-preset": "lc3x1mxQ4",
                                            style: {
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "var(--extracted-gdpscs, var(--token-c59a04d0-3d52-4591-be1d-6424044001a1, rgb(240, 240, 240)))"
                                            },
                                            children: r(n.span, {
                                                "data-text-fill": "true",
                                                style: {
                                                    backgroundImage: "radial-gradient(67.80000000000001% 75% at 47.3% 50%, var(--token-c59a04d0-3d52-4591-be1d-6424044001a1, rgb(240, 240, 240)) 10.7723%, var(--token-e23e35a8-daac-4a36-9609-ee45ae8fcf3e, rgb(35, 35, 35)) 99.13897927927928%)"
                                                },
                                                children: "Let's Get In Touch !"
                                            })
                                        })
                                    })
                                }
                            }, p, w)
                        }), r(k, {
                            __fromCanvasComponent: !0,
                            children: r(x, {
                                children: r(n.p, {
                                    style: {
                                        "--framer-font-size": "35px"
                                    },
                                    children: "\u{1F44B}"
                                })
                            }),
                            className: "framer-1aimx6y",
                            fonts: ["Inter"],
                            layoutDependency: f,
                            layoutId: "SqZWRXerh",
                            style: {
                                "--framer-link-text-color": "rgb(0, 153, 255)",
                                "--framer-link-text-decoration": "underline"
                            },
                            verticalAlignment: "top",
                            withExternalLayout: !0
                        })]
                    }), r(n.div, {
                        className: "framer-1p504dr",
                        layoutDependency: f,
                        layoutId: "zlxa0mIqJ",
                        children: r(n.div, {
                            className: "framer-f2wv9s",
                            "data-border": !0,
                            "data-framer-name": "Topic Container",
                            layoutDependency: f,
                            layoutId: "wV_RnSwV1",
                            style: {
                                "--border-bottom-width": "1px",
                                "--border-color": "var(--token-0de9483b-0bf0-4674-9c5c-41d571dd7ffe, rgb(61, 61, 61))",
                                "--border-left-width": "1px",
                                "--border-right-width": "1px",
                                "--border-style": "solid",
                                "--border-top-width": "1px",
                                borderBottomLeftRadius: 9,
                                borderBottomRightRadius: 9,
                                borderTopLeftRadius: 9,
                                borderTopRightRadius: 9,
                                boxShadow: "0.12043746035487857px 0.24087492070975713px 0.3770288877473221px -0.75px rgba(0, 0, 0, 0.11857), 0.4577066606486914px 0.9154133212973828px 1.4328484897508624px -1.5px rgba(0, 0, 0, 0.12295), 2px 4px 6.260990336999409px -2.25px rgba(0, 0, 0, 0.143)"
                            },
                            children: A(n.div, {
                                className: "framer-t5aidy",
                                layoutDependency: f,
                                layoutId: "JKe64upJG",
                                style: {
                                    backgroundColor: "var(--token-3ea46c56-d009-4987-bb7c-030497462c1b, rgb(46, 46, 46))",
                                    borderBottomLeftRadius: 6,
                                    borderBottomRightRadius: 6,
                                    borderTopLeftRadius: 6,
                                    borderTopRightRadius: 6
                                },
                                children: [r(M, {
                                    children: r(n.div, {
                                        className: "framer-xofqo7-container",
                                        layoutDependency: f,
                                        layoutId: "qulpqiGmW-container",
                                        children: r(C, {
                                            height: "100%",
                                            id: "qulpqiGmW",
                                            kmbguCD3u: "https://www.instagram.com/starluxetech",
                                            layoutId: "qulpqiGmW",
                                            QC2pTHcHG: "regular",
                                            style: {
                                                height: "100%",
                                                width: "100%"
                                            },
                                            variant: "IhAF6VbDb",
                                            width: "100%",
                                            ZA3O5UdYP: "var(--token-705b30da-ebd7-4612-98fa-aaf0efec2f3d, rgb(179, 179, 179))",
                                            zu2BQmQeb: "Instagram"
                                        })
                                    })
                                }), r(M, {
                                    children: r(n.div, {
                                        className: "framer-1d5sp7l-container",
                                        layoutDependency: f,
                                        layoutId: "F1zp963Xt-container",
                                        children: r(C, {
                                            height: "100%",
                                            id: "F1zp963Xt",
                                            kmbguCD3u: "https://dribbble.com/dennyoo7",
                                            layoutId: "F1zp963Xt",
                                            QC2pTHcHG: "light",
                                            style: {
                                                height: "100%",
                                                width: "100%"
                                            },
                                            variant: "IhAF6VbDb",
                                            width: "100%",
                                            ZA3O5UdYP: "var(--token-705b30da-ebd7-4612-98fa-aaf0efec2f3d, rgb(179, 179, 179))",
                                            zu2BQmQeb: "Dribbble"
                                        })
                                    })
                                }), r(M, {
                                    children: r(n.div, {
                                        className: "framer-jk1sgn-container",
                                        layoutDependency: f,
                                        layoutId: "KvtaUMNjz-container",
                                        children: r(C, {
                                            height: "100%",
                                            id: "KvtaUMNjz",
                                            kmbguCD3u: "https://www.behance.net/starluxetech-",
                                            layoutId: "KvtaUMNjz",
                                            QC2pTHcHG: "light",
                                            style: {
                                                height: "100%",
                                                width: "100%"
                                            },
                                            variant: "IhAF6VbDb",
                                            width: "100%",
                                            ZA3O5UdYP: "var(--token-705b30da-ebd7-4612-98fa-aaf0efec2f3d, rgb(179, 179, 179))",
                                            zu2BQmQeb: "Behance"
                                        })
                                    })
                                }), r(M, {
                                    children: r(n.div, {
                                        className: "framer-ub10kv-container",
                                        layoutDependency: f,
                                        layoutId: "BNDv9U5ik-container",
                                        children: r(C, {
                                            height: "100%",
                                            id: "BNDv9U5ik",
                                            kmbguCD3u: "https://www.linkedin.com/in/ravi-patel-7a037420b/",
                                            layoutId: "BNDv9U5ik",
                                            QC2pTHcHG: "light",
                                            style: {
                                                height: "100%",
                                                width: "100%"
                                            },
                                            variant: "IhAF6VbDb",
                                            width: "100%",
                                            ZA3O5UdYP: "var(--token-705b30da-ebd7-4612-98fa-aaf0efec2f3d, rgb(179, 179, 179))",
                                            zu2BQmQeb: "linkedin"
                                        })
                                    })
                                }), r(M, {
                                    children: r(n.div, {
                                        className: "framer-z7klur-container",
                                        layoutDependency: f,
                                        layoutId: "PlcHkI5fV-container",
                                        children: r(C, {
                                            height: "100%",
                                            id: "PlcHkI5fV",
                                            kmbguCD3u: "mailto:starluxetech@gmail.com",
                                            layoutId: "PlcHkI5fV",
                                            QC2pTHcHG: "light",
                                            style: {
                                                height: "100%",
                                                width: "100%"
                                            },
                                            variant: "IhAF6VbDb",
                                            width: "100%",
                                            ZA3O5UdYP: "var(--token-705b30da-ebd7-4612-98fa-aaf0efec2f3d, rgb(179, 179, 179))",
                                            zu2BQmQeb: "envelope simple"
                                        })
                                    })
                                })]
                            })
                        })
                    }), r(k, {
                        __fromCanvasComponent: !0,
                        children: r(x, {
                            children: r(n.p, {
                                className: "framer-styles-preset-1hcerco",
                                "data-styles-preset": "Mh8l2Hg_t",
                                style: {
                                    "--framer-text-color": "var(--extracted-r6o4lv, var(--token-e76c097a-6b1c-424d-81e7-8e2648f27f2f, rgb(71, 71, 71)))"
                                },
                                children: "@2024 Star Luxe - All Rights Reserved."
                            })
                        }),
                        className: "framer-9hug37",
                        fonts: ["Inter"],
                        layoutDependency: f,
                        layoutId: "Ct8a_zR1Z",
                        style: {
                            "--extracted-r6o4lv": "var(--token-e76c097a-6b1c-424d-81e7-8e2648f27f2f, rgb(71, 71, 71))",
                            "--framer-link-text-color": "rgb(0, 153, 255)",
                            "--framer-link-text-decoration": "underline"
                        },
                        verticalAlignment: "top",
                        withExternalLayout: !0
                    })]
                })
            })
        })
    })
})
  , Ar = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-Hbyap.framer-wuu6zo, .framer-Hbyap .framer-wuu6zo { display: block; }", ".framer-Hbyap.framer-1lepo7n { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }", ".framer-Hbyap .framer-15ohjrn { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }", ".framer-Hbyap .framer-or7zl0, .framer-Hbyap .framer-1aimx6y, .framer-Hbyap .framer-9hug37 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", ".framer-Hbyap .framer-1p504dr { align-content: center; align-items: center; align-self: stretch; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: auto; }", ".framer-Hbyap .framer-f2wv9s { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 9px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }", ".framer-Hbyap .framer-t5aidy { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: flex-start; overflow: visible; padding: 8px 15px 8px 15px; position: relative; width: min-content; }", ".framer-Hbyap .framer-xofqo7-container, .framer-Hbyap .framer-1d5sp7l-container, .framer-Hbyap .framer-jk1sgn-container, .framer-Hbyap .framer-ub10kv-container, .framer-Hbyap .framer-z7klur-container { flex: none; height: 26px; position: relative; width: 26px; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-Hbyap.framer-1lepo7n, .framer-Hbyap .framer-15ohjrn, .framer-Hbyap .framer-1p504dr, .framer-Hbyap .framer-f2wv9s, .framer-Hbyap .framer-t5aidy { gap: 0px; } .framer-Hbyap.framer-1lepo7n > * { margin: 0px; margin-bottom: calc(30px / 2); margin-top: calc(30px / 2); } .framer-Hbyap.framer-1lepo7n > :first-child, .framer-Hbyap .framer-f2wv9s > :first-child { margin-top: 0px; } .framer-Hbyap.framer-1lepo7n > :last-child, .framer-Hbyap .framer-f2wv9s > :last-child { margin-bottom: 0px; } .framer-Hbyap .framer-15ohjrn > *, .framer-Hbyap .framer-1p504dr > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-Hbyap .framer-15ohjrn > :first-child, .framer-Hbyap .framer-1p504dr > :first-child, .framer-Hbyap .framer-t5aidy > :first-child { margin-left: 0px; } .framer-Hbyap .framer-15ohjrn > :last-child, .framer-Hbyap .framer-1p504dr > :last-child, .framer-Hbyap .framer-t5aidy > :last-child { margin-right: 0px; } .framer-Hbyap .framer-f2wv9s > * { margin: 0px; margin-bottom: calc(12px / 2); margin-top: calc(12px / 2); } .framer-Hbyap .framer-t5aidy > * { margin: 0px; margin-left: calc(15px / 2); margin-right: calc(15px / 2); } }", ".framer-Hbyap.framer-v-1khrq5.framer-1lepo7n { padding: 0px 0px 15px 0px; width: 375px; }", ".framer-Hbyap.framer-v-1khrq5 .framer-15ohjrn { flex-direction: column; width: 100%; }", ".framer-Hbyap.framer-v-1khrq5 .framer-or7zl0 { order: 2; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", ".framer-Hbyap.framer-v-1khrq5 .framer-1aimx6y { order: 1; }", ".framer-Hbyap.framer-v-1khrq5 .framer-1p504dr { align-self: unset; width: 100%; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-Hbyap.framer-v-1khrq5 .framer-15ohjrn { gap: 0px; } .framer-Hbyap.framer-v-1khrq5 .framer-15ohjrn > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-Hbyap.framer-v-1khrq5 .framer-15ohjrn > :first-child { margin-top: 0px; } .framer-Hbyap.framer-v-1khrq5 .framer-15ohjrn > :last-child { margin-bottom: 0px; } }", ...he, ...$, '.framer-Hbyap[data-border="true"]::after, .framer-Hbyap [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }']
  , le = W(Hr, Ar, "framer-Hbyap")
  , ta = le;
le.displayName = "Footer";
le.defaultProps = {
    height: 199,
    width: 470
};
P(le, {
    variant: {
        options: ["vad5PnoVS", "D3ErOqFuF"],
        optionTitles: ["Desktop/Tablet", "Phone"],
        title: "Variant",
        type: l.Enum
    }
});
z(le, [{
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
}, ...vr, ...ne(pe), ...ne(K)], {
    supportsExplicitInterCodegen: !0
});
Z.loadFonts([]);
var be = []
  , xe = ['.framer-QAZfh .framer-styles-preset-4xbu66:not(.rich-text-wrapper), .framer-QAZfh .framer-styles-preset-4xbu66.rich-text-wrapper a { --framer-link-current-text-color: #111111; --framer-link-current-text-decoration: underline; --framer-link-hover-text-color: var(--token-c59a04d0-3d52-4591-be1d-6424044001a1, #f0f0f0) /* {"name":"Primary Text Color"} */; --framer-link-hover-text-decoration: none; --framer-link-text-color: var(--token-3b5ae20b-c265-46d5-aec7-61a496c56f0f, #808080); --framer-link-text-decoration: none; }']
  , ve = "framer-QAZfh";
var Dr = V(C)
  , Br = {
    DyY16raOG: {
        hover: !0,
        pressed: !0
    }
}
  , Nr = ["sL7T_tSi9", "lsRhgy4aA", "DyY16raOG"]
  , Rr = "framer-ShYfG"
  , Mr = {
    DyY16raOG: "framer-v-18huwhl",
    lsRhgy4aA: "framer-v-19q1bd2",
    sL7T_tSi9: "framer-v-2mq4ij"
};
function Vr(e, ...t) {
    let a = {};
    return t?.forEach(o=>o && Object.assign(a, e[o])),
    a
}
var _r = {
    default: {
        damping: 60,
        delay: 0,
        mass: 1,
        stiffness: 500,
        type: "spring"
    }
}
  , Ur = ({value: e, children: t})=>{
    let a = U(I)
      , o = e ?? a.transition
      , i = B(()=>({
        ...a,
        transition: o
    }), [JSON.stringify(o)]);
    return r(I.Provider, {
        value: i,
        children: t
    })
}
  , Gr = n(x)
  , jr = {
    "Button + Icon": "lsRhgy4aA",
    "Button Clickable": "DyY16raOG",
    Button: "sL7T_tSi9"
}
  , qr = ({content: e, height: t, icon: a, id: o, width: i, ...s})=>{
    var c, m, d, p;
    return {
        ...s,
        hyW_EhYsW: (c = a ?? s.hyW_EhYsW) !== null && c !== void 0 ? c : "envelope simple",
        oHe4MlJvN: (m = e ?? s.oHe4MlJvN) !== null && m !== void 0 ? m : "Button",
        variant: (p = (d = jr[s.variant]) !== null && d !== void 0 ? d : s.variant) !== null && p !== void 0 ? p : "sL7T_tSi9"
    }
}
  , Er = (e,t)=>t.join("-") + e.layoutDependency
  , Wr = D(function(e, t) {
    let {activeLocale: a, setLocale: o} = q()
      , {style: i, className: s, layoutId: c, variant: m, oHe4MlJvN: d, hyW_EhYsW: p, ...g} = qr(e)
      , {baseVariant: w, classNames: u, gestureVariant: y, setGestureState: v, setVariant: f, transition: h, variants: _} = O({
        cycleOrder: Nr,
        defaultVariant: "sL7T_tSi9",
        enabledGestures: Br,
        transitions: _r,
        variant: m,
        variantClassNames: Mr
    })
      , F = Er(e, _)
      , T = N(null)
      , Y = ()=>w === "lsRhgy4aA"
      , X = G()
      , ae = [ee];
    return r(j, {
        id: c ?? X,
        children: r(Gr, {
            animate: _,
            initial: !1,
            children: r(Ur, {
                value: h,
                children: A(n.div, {
                    ...g,
                    className: E(Rr, ...ae, "framer-2mq4ij", s, u),
                    "data-border": !0,
                    "data-framer-name": "Button",
                    layoutDependency: F,
                    layoutId: "sL7T_tSi9",
                    onHoverEnd: ()=>v({
                        isHovered: !1
                    }),
                    onHoverStart: ()=>v({
                        isHovered: !0
                    }),
                    onTap: ()=>v({
                        isPressed: !1
                    }),
                    onTapCancel: ()=>v({
                        isPressed: !1
                    }),
                    onTapStart: ()=>v({
                        isPressed: !0
                    }),
                    ref: t ?? T,
                    style: {
                        "--border-bottom-width": "1px",
                        "--border-color": 'var(--token-0de9483b-0bf0-4674-9c5c-41d571dd7ffe, rgb(61, 61, 61)) /* {"name":"Borders"} */',
                        "--border-left-width": "1px",
                        "--border-right-width": "1px",
                        "--border-style": "solid",
                        "--border-top-width": "1px",
                        borderBottomLeftRadius: 7,
                        borderBottomRightRadius: 7,
                        borderTopLeftRadius: 7,
                        borderTopRightRadius: 7,
                        opacity: 1,
                        ...i
                    },
                    variants: {
                        "DyY16raOG-hover": {
                            opacity: .56
                        },
                        "DyY16raOG-pressed": {
                            opacity: .56
                        }
                    },
                    ...Vr({
                        "DyY16raOG-hover": {
                            "data-framer-name": void 0
                        },
                        "DyY16raOG-pressed": {
                            "data-framer-name": void 0
                        },
                        DyY16raOG: {
                            "data-framer-name": "Button Clickable"
                        },
                        lsRhgy4aA: {
                            "data-framer-name": "Button + Icon"
                        }
                    }, w, y),
                    children: [r(k, {
                        __fromCanvasComponent: !0,
                        children: r(x, {
                            children: r(n.p, {
                                className: "framer-styles-preset-1hcerco",
                                "data-styles-preset": "Mh8l2Hg_t",
                                children: "Button"
                            })
                        }),
                        className: "framer-92iira",
                        layoutDependency: F,
                        layoutId: "HunezdVTC",
                        style: {
                            "--framer-link-text-color": "rgb(0, 153, 255)",
                            "--framer-link-text-decoration": "underline"
                        },
                        text: d,
                        verticalAlignment: "top",
                        withExternalLayout: !0
                    }), Y() && r(n.div, {
                        className: "framer-1gmp165-container",
                        layoutDependency: F,
                        layoutId: "WCjjeRzov-container",
                        children: r(C, {
                            height: "100%",
                            id: "WCjjeRzov",
                            layoutId: "WCjjeRzov",
                            QC2pTHcHG: "regular",
                            style: {
                                height: "100%",
                                width: "100%"
                            },
                            variant: "PRbfDc60j",
                            width: "100%",
                            ZA3O5UdYP: "var(--token-705b30da-ebd7-4612-98fa-aaf0efec2f3d, rgb(0, 0, 0))",
                            zu2BQmQeb: p
                        })
                    })]
                })
            })
        })
    })
})
  , Or = ['.framer-ShYfG[data-border="true"]::after, .framer-ShYfG [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }', "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-ShYfG.framer-1akv8vk, .framer-ShYfG .framer-1akv8vk { display: block; }", ".framer-ShYfG.framer-2mq4ij { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 9px 15px 9px 15px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }", ".framer-ShYfG .framer-92iira { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", ".framer-ShYfG .framer-1gmp165-container { flex: none; height: 18px; position: relative; width: 18px; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-ShYfG.framer-2mq4ij { gap: 0px; } .framer-ShYfG.framer-2mq4ij > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-ShYfG.framer-2mq4ij > :first-child { margin-left: 0px; } .framer-ShYfG.framer-2mq4ij > :last-child { margin-right: 0px; } }", ".framer-ShYfG.framer-v-19q1bd2.framer-2mq4ij { gap: 10px; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-ShYfG.framer-v-19q1bd2.framer-2mq4ij { gap: 0px; } .framer-ShYfG.framer-v-19q1bd2.framer-2mq4ij > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-ShYfG.framer-v-19q1bd2.framer-2mq4ij > :first-child { margin-left: 0px; } .framer-ShYfG.framer-v-19q1bd2.framer-2mq4ij > :last-child { margin-right: 0px; } }", ".framer-ShYfG.framer-v-18huwhl.framer-2mq4ij { cursor: pointer; }", ".framer-ShYfG.framer-v-18huwhl.pressed.framer-2mq4ij { padding: 6px 12px 6px 12px; }", ...$]
  , se = W(Wr, Or, "framer-ShYfG")
  , we = se;
se.displayName = "Button";
se.defaultProps = {
    height: 37,
    width: 76
};
P(se, {
    variant: {
        options: ["sL7T_tSi9", "lsRhgy4aA", "DyY16raOG"],
        optionTitles: ["Button", "Button + Icon", "Button Clickable"],
        title: "Variant",
        type: l.Enum
    },
    oHe4MlJvN: {
        defaultValue: "Button",
        displayTextArea: !1,
        title: "Content",
        type: l.String
    },
    hyW_EhYsW: {
        defaultValue: "envelope simple",
        placeholder: "Menu, Wifi, Box\u2026",
        title: "Icon",
        type: l.String
    }
});
z(se, [...Dr, ...K]);
var Zr = V(we)
  , Fe = De(n.div)
  , zr = V(C)
  , Yr = ["e9F1aSOcq", "XXBVMmUo6", "iv39lqdKR", "YtGM9jrNf"]
  , Xr = "framer-LITPZ"
  , Qr = {
    e9F1aSOcq: "framer-v-1c3v9xu",
    iv39lqdKR: "framer-v-1coyka",
    XXBVMmUo6: "framer-v-c82jtp",
    YtGM9jrNf: "framer-v-j34nnb"
};
function Se(e, ...t) {
    let a = {};
    return t?.forEach(o=>o && Object.assign(a, e[o])),
    a
}
var Jr = {
    damping: 60,
    delay: 0,
    mass: 1,
    stiffness: 500,
    type: "spring"
}
  , Ze = {
    delay: .1,
    duration: .6,
    ease: [.72, .07, .21, 1.02],
    type: "tween"
}
  , Ee = {
    opacity: 1,
    rotate: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: Ze,
    x: 0,
    y: 150
}
  , re = (e,t)=>`perspective(1200px) ${t}`
  , Pe = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: Ze,
    x: 0,
    y: 0
}
  , te = {
    opacity: 1,
    rotate: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 150
}
  , ze = {
    delay: 0,
    duration: .6,
    ease: [.72, .07, .21, 1.02],
    type: "tween"
}
  , We = {
    opacity: 1,
    rotate: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: ze,
    x: 0,
    y: 150
}
  , Oe = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: ze,
    x: 0,
    y: 0
}
  , Ye = {
    delay: .2,
    duration: .6,
    ease: [.72, .07, .21, 1.02],
    type: "tween"
}
  , Kr = {
    opacity: 1,
    rotate: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: Ye,
    x: 0,
    y: 150
}
  , ke = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: Ye,
    x: 0,
    y: 0
}
  , $r = ({value: e, children: t})=>{
    let a = U(I)
      , o = e ?? a.transition
      , i = B(()=>({
        ...a,
        transition: o
    }), [JSON.stringify(o)]);
    return r(I.Provider, {
        value: i,
        children: t
    })
}
  , et = n(x)
  , rt = {
    "Home Page Desktop/Tablet": "e9F1aSOcq",
    "Home Page Phone": "YtGM9jrNf",
    "Work Page Phone ": "iv39lqdKR",
    "Work Page": "XXBVMmUo6"
}
  , tt = ({height: e, id: t, projectTitle: a, width: o, ...i})=>{
    var s, c, m;
    return {
        ...i,
        variant: (c = (s = rt[i.variant]) !== null && s !== void 0 ? s : i.variant) !== null && c !== void 0 ? c : "e9F1aSOcq",
        ya6RV_msu: (m = a ?? i.ya6RV_msu) !== null && m !== void 0 ? m : "text"
    }
}
  , at = (e,t)=>t.join("-") + e.layoutDependency
  , ot = D(function(e, t) {
    let {activeLocale: a, setLocale: o} = q()
      , {style: i, className: s, layoutId: c, variant: m, ya6RV_msu: d, ...p} = tt(e)
      , {baseVariant: g, classNames: w, gestureVariant: u, setGestureState: y, setVariant: v, variants: f} = O({
        cycleOrder: Yr,
        defaultVariant: "e9F1aSOcq",
        variant: m,
        variantClassNames: Qr
    })
      , h = at(e, f)
      , _ = N(null)
      , F = ()=>!["XXBVMmUo6", "iv39lqdKR"].includes(g)
      , T = ()=>g !== "iv39lqdKR"
      , Y = ()=>!!["XXBVMmUo6", "iv39lqdKR"].includes(g)
      , X = G()
      , ae = [ee, ve]
      , Le = de();
    return r(j, {
        id: c ?? X,
        children: r(et, {
            animate: f,
            initial: !1,
            children: r($r, {
                value: Jr,
                children: A(n.div, {
                    ...p,
                    className: E(Xr, ...ae, "framer-1c3v9xu", s, w),
                    "data-framer-name": "Home Page Desktop/Tablet",
                    layoutDependency: h,
                    layoutId: "e9F1aSOcq",
                    onHoverEnd: ()=>y({
                        isHovered: !1
                    }),
                    onHoverStart: ()=>y({
                        isHovered: !0
                    }),
                    onTap: ()=>y({
                        isPressed: !1
                    }),
                    onTapCancel: ()=>y({
                        isPressed: !1
                    }),
                    onTapStart: ()=>y({
                        isPressed: !0
                    }),
                    ref: t ?? _,
                    style: {
                        ...i
                    },
                    ...Se({
                        iv39lqdKR: {
                            "data-framer-name": "Work Page Phone "
                        },
                        XXBVMmUo6: {
                            "data-framer-name": "Work Page"
                        },
                        YtGM9jrNf: {
                            "data-framer-name": "Home Page Phone"
                        }
                    }, g, u),
                    children: [F() && r(k, {
                        __fromCanvasComponent: !0,
                        children: r(x, {
                            children: r(n.p, {
                                className: "framer-styles-preset-1hcerco",
                                "data-styles-preset": "Mh8l2Hg_t",
                                children: "Ravi Patel"
                            })
                        }),
                        className: "framer-1r1kfbw",
                        fonts: ["Inter"],
                        layoutDependency: h,
                        layoutId: "GbQawu2Od",
                        style: {
                            "--framer-link-text-color": "rgb(0, 153, 255)",
                            "--framer-link-text-decoration": "underline"
                        },
                        verticalAlignment: "top",
                        withExternalLayout: !0
                    }), T() && r(oe, {
                        href: {
                            webPageId: "augiA20Il"
                        },
                        children: r(n.a, {
                            className: "framer-1qebnmh framer-1erjxl7",
                            layoutDependency: h,
                            layoutId: "tW9xCHQ0z",
                            children: r(M, {
                                children: r(Fe, {
                                    __perspectiveFX: !1,
                                    __smartComponentFX: !0,
                                    __targetOpacity: 1,
                                    animate: S("animate", "guq2iw", Pe, "1c3v9xu"),
                                    className: "framer-guq2iw-container",
                                    "data-framer-appear-id": "guq2iw",
                                    exit: Ee,
                                    initial: S("initial", "guq2iw", te, "1c3v9xu"),
                                    layoutDependency: h,
                                    layoutId: "JnPNxitfo-container",
                                    transformTemplate: J("guq2iw", re),
                                    ...Se({
                                        XXBVMmUo6: {
                                            "data-framer-appear-id": "ul8w1l",
                                            animate: S("animate", "ul8w1l", Oe, "c82jtp"),
                                            exit: We,
                                            initial: S("initial", "ul8w1l", te, "c82jtp"),
                                            transformTemplate: J("ul8w1l", re)
                                        },
                                        YtGM9jrNf: {
                                            "data-framer-appear-id": "1h4ibm",
                                            animate: S("animate", "1h4ibm", Pe, "j34nnb"),
                                            initial: S("initial", "1h4ibm", te, "j34nnb"),
                                            transformTemplate: J("1h4ibm", re)
                                        }
                                    }, g, u),
                                    children: r(we, {
                                        height: "100%",
                                        hyW_EhYsW: "envelope simple",
                                        id: "JnPNxitfo",
                                        layoutId: "JnPNxitfo",
                                        oHe4MlJvN: "Home",
                                        variant: "DyY16raOG",
                                        width: "100%"
                                    })
                                })
                            })
                        })
                    }), T() && r(oe, {
                        href: "https://www.starluxetech.com/contact-us",
                        openInNewTab: !0,
                        children: r(n.a, {
                            className: "framer-1pe55oc framer-1erjxl7",
                            layoutDependency: h,
                            layoutId: "TJiZ_dKv1",
                            children: r(M, {
                                children: r(Fe, {
                                    __perspectiveFX: !1,
                                    __smartComponentFX: !0,
                                    __targetOpacity: 1,
                                    animate: S("animate", "hbw5xl", ke, "1c3v9xu"),
                                    className: "framer-hbw5xl-container",
                                    "data-framer-appear-id": "hbw5xl",
                                    exit: Kr,
                                    initial: S("initial", "hbw5xl", te, "1c3v9xu"),
                                    layoutDependency: h,
                                    layoutId: "QNSkc1EFO-container",
                                    transformTemplate: J("hbw5xl", re),
                                    ...Se({
                                        XXBVMmUo6: {
                                            "data-framer-appear-id": "hxwzap",
                                            animate: S("animate", "hxwzap", ke, "c82jtp"),
                                            initial: S("initial", "hxwzap", te, "c82jtp"),
                                            transformTemplate: J("hxwzap", re)
                                        },
                                        YtGM9jrNf: {
                                            "data-framer-appear-id": "uie5zz",
                                            animate: S("animate", "uie5zz", ke, "j34nnb"),
                                            initial: S("initial", "uie5zz", te, "j34nnb"),
                                            transformTemplate: J("uie5zz", re)
                                        }
                                    }, g, u),
                                    children: r(we, {
                                        height: "100%",
                                        hyW_EhYsW: "envelope simple",
                                        id: "QNSkc1EFO",
                                        layoutId: "QNSkc1EFO",
                                        oHe4MlJvN: "Contact",
                                        variant: "DyY16raOG",
                                        width: "100%"
                                    })
                                })
                            })
                        })
                    }), Y() && A(Fe, {
                        className: "framer-1h20l1u",
                        layoutDependency: h,
                        layoutId: "tAFdDWFrv",
                        ...Se({
                            iv39lqdKR: {
                                __perspectiveFX: !1,
                                __smartComponentFX: !0,
                                __targetOpacity: 1,
                                "data-framer-appear-id": "ouya90",
                                animate: S("animate", "ouya90", Oe, "1coyka"),
                                exit: We,
                                initial: S("initial", "ouya90", te, "1coyka"),
                                transformTemplate: J("ouya90", re)
                            },
                            XXBVMmUo6: {
                                __perspectiveFX: !1,
                                __smartComponentFX: !0,
                                __targetOpacity: 1,
                                "data-framer-appear-id": "oglqon",
                                animate: S("animate", "oglqon", Pe, "c82jtp"),
                                exit: Ee,
                                initial: S("initial", "oglqon", te, "c82jtp"),
                                transformTemplate: J("oglqon", re)
                            }
                        }, g, u),
                        children: [r(k, {
                            __fromCanvasComponent: !0,
                            children: r(x, {
                                children: r(n.p, {
                                    className: "framer-styles-preset-1hcerco",
                                    "data-styles-preset": "Mh8l2Hg_t",
                                    children: r(oe, {
                                        href: {
                                            webPageId: "augiA20Il"
                                        },
                                        openInNewTab: !1,
                                        smoothScroll: !1,
                                        children: r(n.a, {
                                            className: "framer-styles-preset-4xbu66",
                                            "data-styles-preset": "kl22X4l5h",
                                            children: "Home"
                                        })
                                    })
                                })
                            }),
                            className: "framer-1yytx0w",
                            fonts: ["Inter"],
                            layoutDependency: h,
                            layoutId: "ChBZ9lJHu",
                            verticalAlignment: "top",
                            withExternalLayout: !0
                        }), r(M, {
                            children: r(n.div, {
                                className: "framer-1a4yn20-container",
                                layoutDependency: h,
                                layoutId: "atqgH3ogY-container",
                                children: r(C, {
                                    height: "100%",
                                    id: "atqgH3ogY",
                                    layoutId: "atqgH3ogY",
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
                        }), r(k, {
                            __fromCanvasComponent: !0,
                            children: r(x, {
                                children: r(n.p, {
                                    className: "framer-styles-preset-1hcerco",
                                    "data-styles-preset": "Mh8l2Hg_t",
                                    style: {
                                        "--framer-text-color": "var(--extracted-r6o4lv, var(--token-e76c097a-6b1c-424d-81e7-8e2648f27f2f, rgb(71, 71, 71)))"
                                    },
                                    children: "Works"
                                })
                            }),
                            className: "framer-r3hp2r",
                            fonts: ["Inter"],
                            layoutDependency: h,
                            layoutId: "xpuyGokDK",
                            style: {
                                "--extracted-r6o4lv": "var(--token-e76c097a-6b1c-424d-81e7-8e2648f27f2f, rgb(71, 71, 71))",
                                "--framer-link-text-color": "rgb(0, 153, 255)",
                                "--framer-link-text-decoration": "underline"
                            },
                            verticalAlignment: "top",
                            withExternalLayout: !0
                        }), r(M, {
                            children: r(n.div, {
                                className: "framer-1up6qcr-container",
                                layoutDependency: h,
                                layoutId: "OrnrLJaC3-container",
                                children: r(C, {
                                    height: "100%",
                                    id: "OrnrLJaC3",
                                    layoutId: "OrnrLJaC3",
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
                        }), r(k, {
                            __fromCanvasComponent: !0,
                            children: r(x, {
                                children: r(n.p, {
                                    className: "framer-styles-preset-1hcerco",
                                    "data-styles-preset": "Mh8l2Hg_t",
                                    children: "text"
                                })
                            }),
                            className: "framer-4pnac",
                            fonts: ["Inter"],
                            layoutDependency: h,
                            layoutId: "I2jZ8cYG_",
                            style: {
                                "--framer-link-text-color": "rgb(0, 153, 255)",
                                "--framer-link-text-decoration": "underline"
                            },
                            text: d,
                            verticalAlignment: "top",
                            withExternalLayout: !0
                        })]
                    })]
                })
            })
        })
    })
})
  , nt = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-LITPZ.framer-1erjxl7, .framer-LITPZ .framer-1erjxl7 { display: block; }", ".framer-LITPZ.framer-1c3v9xu { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 462px; }", ".framer-LITPZ .framer-1r1kfbw { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 130px; word-break: break-word; word-wrap: break-word; }", ".framer-LITPZ .framer-1qebnmh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; text-decoration: none; width: min-content; }", ".framer-LITPZ .framer-guq2iw-container, .framer-LITPZ .framer-hbw5xl-container { cursor: pointer; flex: none; height: auto; position: relative; width: auto; }", ".framer-LITPZ .framer-1pe55oc { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-end; min-width: 130px; overflow: visible; padding: 0px 0px 0px 0px; position: relative; text-decoration: none; width: min-content; }", ".framer-LITPZ .framer-1h20l1u { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 1px; }", ".framer-LITPZ .framer-1yytx0w, .framer-LITPZ .framer-r3hp2r, .framer-LITPZ .framer-4pnac { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", ".framer-LITPZ .framer-1a4yn20-container, .framer-LITPZ .framer-1up6qcr-container { flex: none; height: 22px; position: relative; width: 22px; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-LITPZ .framer-1qebnmh, .framer-LITPZ .framer-1pe55oc, .framer-LITPZ .framer-1h20l1u { gap: 0px; } .framer-LITPZ .framer-1qebnmh > *, .framer-LITPZ .framer-1pe55oc > *, .framer-LITPZ .framer-1h20l1u > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-LITPZ .framer-1qebnmh > :first-child, .framer-LITPZ .framer-1pe55oc > :first-child, .framer-LITPZ .framer-1h20l1u > :first-child { margin-left: 0px; } .framer-LITPZ .framer-1qebnmh > :last-child, .framer-LITPZ .framer-1pe55oc > :last-child, .framer-LITPZ .framer-1h20l1u > :last-child { margin-right: 0px; } }", ".framer-LITPZ.framer-v-c82jtp .framer-1qebnmh { order: 0; }", ".framer-LITPZ.framer-v-c82jtp .framer-1pe55oc { min-width: unset; order: 2; }", ".framer-LITPZ.framer-v-c82jtp .framer-1h20l1u { order: 1; }", ".framer-LITPZ.framer-v-c82jtp .framer-r3hp2r, .framer-LITPZ.framer-v-c82jtp .framer-4pnac { pointer-events: none; }", ".framer-LITPZ.framer-v-1coyka.framer-1c3v9xu { flex-direction: column; gap: 20px; justify-content: center; }", ".framer-LITPZ.framer-v-1coyka .framer-1h20l1u { flex: none; order: 1; width: 100%; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-LITPZ.framer-v-1coyka.framer-1c3v9xu { gap: 0px; } .framer-LITPZ.framer-v-1coyka.framer-1c3v9xu > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } .framer-LITPZ.framer-v-1coyka.framer-1c3v9xu > :first-child { margin-top: 0px; } .framer-LITPZ.framer-v-1coyka.framer-1c3v9xu > :last-child { margin-bottom: 0px; } }", ".framer-LITPZ.framer-v-j34nnb.framer-1c3v9xu { gap: 10px; justify-content: center; }", ".framer-LITPZ.framer-v-j34nnb .framer-1r1kfbw { flex: 1 0 0px; width: 1px; }", ".framer-LITPZ.framer-v-j34nnb .framer-1pe55oc { min-width: unset; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-LITPZ.framer-v-j34nnb.framer-1c3v9xu { gap: 0px; } .framer-LITPZ.framer-v-j34nnb.framer-1c3v9xu > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-LITPZ.framer-v-j34nnb.framer-1c3v9xu > :first-child { margin-left: 0px; } .framer-LITPZ.framer-v-j34nnb.framer-1c3v9xu > :last-child { margin-right: 0px; } }", ...$, ...xe]
  , ce = W(ot, nt, "framer-LITPZ")
  , ba = ce;
ce.displayName = "Nav Bar";
ce.defaultProps = {
    height: 40,
    width: 462
};
P(ce, {
    variant: {
        options: ["e9F1aSOcq", "XXBVMmUo6", "iv39lqdKR", "YtGM9jrNf"],
        optionTitles: ["Home Page Desktop/Tablet", "Work Page", "Work Page Phone ", "Home Page Phone"],
        title: "Variant",
        type: l.Enum
    },
    ya6RV_msu: {
        defaultValue: "text",
        displayTextArea: !1,
        title: "Project Title",
        type: l.String
    }
});
z(ce, [{
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
}, ...Zr, ...zr, ...ne(K), ...ne(be)], {
    supportsExplicitInterCodegen: !0
});
Z.loadFonts(["GF;Inter Tight-regular", "GF;Inter Tight-700", "GF;Inter Tight-700italic", "GF;Inter Tight-italic"]);
var Xe = [{
    family: "Inter Tight",
    source: "google",
    style: "normal",
    url: "https://fonts.gstatic.com/s/intertight/v7/NGSnv5HMAFg6IuGlBNMjxJEL2VmU3NS7Z2mjDw-qWSRToK8EPg.woff2",
    weight: "400"
}, {
    family: "Inter Tight",
    source: "google",
    style: "normal",
    url: "https://fonts.gstatic.com/s/intertight/v7/NGSnv5HMAFg6IuGlBNMjxJEL2VmU3NS7Z2mj6AiqWSRToK8EPg.woff2",
    weight: "700"
}, {
    family: "Inter Tight",
    source: "google",
    style: "italic",
    url: "https://fonts.gstatic.com/s/intertight/v7/NGShv5HMAFg6IuGlBNMjxLsC66ZMtb8hyW62x0ylGC5SgqoUPvi5.woff2",
    weight: "700"
}, {
    family: "Inter Tight",
    source: "google",
    style: "italic",
    url: "https://fonts.gstatic.com/s/intertight/v7/NGShv5HMAFg6IuGlBNMjxLsC66ZMtb8hyW62x0xCHy5SgqoUPvi5.woff2",
    weight: "400"
}]
  , Qe = ['.framer-YVtXd .framer-styles-preset-1ftj3nv:not(.rich-text-wrapper), .framer-YVtXd .framer-styles-preset-1ftj3nv.rich-text-wrapper h2 { --framer-font-family: "Inter Tight", "Inter Tight Placeholder", sans-serif; --framer-font-family-bold: "Inter Tight", "Inter Tight Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter Tight", "Inter Tight Placeholder", sans-serif; --framer-font-family-italic: "Inter Tight", "Inter Tight Placeholder", sans-serif; --framer-font-size: 28px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.4em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: var(--token-c59a04d0-3d52-4591-be1d-6424044001a1, #f0f0f0); --framer-text-decoration: none; --framer-text-transform: none; }']
  , Je = "framer-YVtXd";
Z.loadFonts(["Inter-Bold", "Inter-Black", "Inter-BlackItalic", "Inter-BoldItalic"]);
var Ke = []
  , $e = ['.framer-JNJbk .framer-styles-preset-fzgjoo:not(.rich-text-wrapper), .framer-JNJbk .framer-styles-preset-fzgjoo.rich-text-wrapper h3 { --framer-font-family: "Inter-Bold", "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter-Black", "Inter", sans-serif; --framer-font-family-bold-italic: "Inter-BlackItalic", "Inter", sans-serif; --framer-font-family-italic: "Inter-BoldItalic", "Inter", "Inter Placeholder", sans-serif; --framer-font-size: 22px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 700; --framer-font-weight-bold: 900; --framer-font-weight-bold-italic: 900; --framer-font-weight-italic: 700; --framer-letter-spacing: 0em; --framer-line-height: 1.4em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: #333333; --framer-text-decoration: none; --framer-text-transform: none; }']
  , er = "framer-JNJbk";
var st = V(C)
  , ct = ["G2C4ZNJ_h"]
  , mt = "framer-7rIxb"
  , ft = {
    G2C4ZNJ_h: "framer-v-18p0v2c"
};
var dt = {
    default: {
        damping: 60,
        delay: 0,
        mass: 1,
        stiffness: 500,
        type: "spring"
    }
}
  , pt = ({value: e, children: t})=>{
    let a = U(I)
      , o = e ?? a.transition
      , i = B(()=>({
        ...a,
        transition: o
    }), [JSON.stringify(o)]);
    return r(I.Provider, {
        value: i,
        children: t
    })
}
  , ht = n(x)
  , ut = ({body: e, heading: t, height: a, icon: o, id: i, width: s, ...c})=>{
    var m, d, p;
    return {
        ...c,
        JB9Xxl03C: (m = e ?? c.JB9Xxl03C) !== null && m !== void 0 ? m : r(x, {
            children: r(n.p, {
                children: "Hey I\u2019m Muhhamed, a Digital Designer Based in Mumbai, I craft jaw-dropping digital experiences"
            })
        }),
        JZGHgfGGp: (d = o ?? c.JZGHgfGGp) !== null && d !== void 0 ? d : "Brain",
        lG8Wq0qgx: (p = t ?? c.lG8Wq0qgx) !== null && p !== void 0 ? p : "Skills"
    }
}
  , gt = (e,t)=>t.join("-") + e.layoutDependency
  , yt = D(function(e, t) {
    let {activeLocale: a, setLocale: o} = q()
      , {style: i, className: s, layoutId: c, variant: m, JZGHgfGGp: d, lG8Wq0qgx: p, JB9Xxl03C: g, ...w} = ut(e)
      , {baseVariant: u, classNames: y, gestureVariant: v, setGestureState: f, setVariant: h, transition: _, variants: F} = O({
        cycleOrder: ct,
        defaultVariant: "G2C4ZNJ_h",
        transitions: dt,
        variant: m,
        variantClassNames: ft
    })
      , T = gt(e, F)
      , Y = N(null)
      , X = G()
      , ae = [ue, Je, er, ee, ve];
    return r(j, {
        id: c ?? X,
        children: r(ht, {
            animate: F,
            initial: !1,
            children: r(pt, {
                value: _,
                children: r(n.div, {
                    ...w,
                    className: E(mt, ...ae, "framer-18p0v2c", s, y),
                    "data-border": !0,
                    "data-framer-name": "Variant 1",
                    layoutDependency: T,
                    layoutId: "G2C4ZNJ_h",
                    onHoverEnd: ()=>f({
                        isHovered: !1
                    }),
                    onHoverStart: ()=>f({
                        isHovered: !0
                    }),
                    onTap: ()=>f({
                        isPressed: !1
                    }),
                    onTapCancel: ()=>f({
                        isPressed: !1
                    }),
                    onTapStart: ()=>f({
                        isPressed: !0
                    }),
                    ref: t ?? Y,
                    style: {
                        "--border-bottom-width": "1px",
                        "--border-color": 'var(--token-0de9483b-0bf0-4674-9c5c-41d571dd7ffe, rgb(61, 61, 61)) /* {"name":"Borders"} */',
                        "--border-left-width": "1px",
                        "--border-right-width": "1px",
                        "--border-style": "solid",
                        "--border-top-width": "1px",
                        borderBottomLeftRadius: 9,
                        borderBottomRightRadius: 9,
                        borderTopLeftRadius: 9,
                        borderTopRightRadius: 9,
                        boxShadow: "0.24087492070975713px 0.24087492070975713px 0.47690801158459534px -0.75px rgba(0, 0, 0, 0.11857), 0.9154133212973828px 0.9154133212973828px 1.8124259078180616px -1.5px rgba(0, 0, 0, 0.12295), 4px 4px 7.919595949289331px -2.25px rgba(0, 0, 0, 0.143)",
                        ...i
                    },
                    children: A(n.div, {
                        className: "framer-1c34sb7",
                        layoutDependency: T,
                        layoutId: "s5yCgL8Bn",
                        style: {
                            backgroundColor: "var(--token-3ea46c56-d009-4987-bb7c-030497462c1b, rgb(46, 46, 46))",
                            borderBottomLeftRadius: 6,
                            borderBottomRightRadius: 6,
                            borderTopLeftRadius: 6,
                            borderTopRightRadius: 6
                        },
                        children: [r(n.div, {
                            className: "framer-daojy3-container",
                            layoutDependency: T,
                            layoutId: "zC82JXbN1-container",
                            children: r(C, {
                                height: "100%",
                                id: "zC82JXbN1",
                                layoutId: "zC82JXbN1",
                                QC2pTHcHG: "light",
                                style: {
                                    height: "100%",
                                    width: "100%"
                                },
                                variant: "PRbfDc60j",
                                width: "100%",
                                ZA3O5UdYP: "var(--token-e76c097a-6b1c-424d-81e7-8e2648f27f2f, rgb(71, 71, 71))",
                                zu2BQmQeb: d
                            })
                        }), r(k, {
                            __fromCanvasComponent: !0,
                            children: r(x, {
                                children: r(n.h1, {
                                    className: "framer-styles-preset-1ogq7h3",
                                    "data-styles-preset": "lc3x1mxQ4",
                                    children: r(n.span, {
                                        "data-text-fill": "true",
                                        style: {
                                            backgroundImage: "radial-gradient(137.1% 233.33333333333334% at 11.600000000000001% 50%, var(--token-c59a04d0-3d52-4591-be1d-6424044001a1, rgb(240, 240, 240)) 10.7723%, rgba(239, 239, 239, 1) 11.367538095238094%, var(--token-e76c097a-6b1c-424d-81e7-8e2648f27f2f, rgb(71, 71, 71)) 99.13897927927928%)"
                                        },
                                        children: "Skills"
                                    })
                                })
                            }),
                            className: "framer-d7rgrm",
                            layoutDependency: T,
                            layoutId: "tCLOIL9N9",
                            style: {
                                "--framer-link-text-color": "rgb(0, 153, 255)",
                                "--framer-link-text-decoration": "underline"
                            },
                            text: p,
                            verticalAlignment: "top",
                            withExternalLayout: !0
                        }), r(k, {
                            __fromCanvasComponent: !0,
                            children: g,
                            className: "framer-1ok6sdb",
                            layoutDependency: T,
                            layoutId: "I_ghr6XIy",
                            style: {
                                "--extracted-r6o4lv": "var(--token-3b5ae20b-c265-46d5-aec7-61a496c56f0f, rgb(128, 128, 128))",
                                "--framer-link-text-color": "rgb(0, 153, 255)",
                                "--framer-link-text-decoration": "underline"
                            },
                            stylesPresetsClassNames: {
                                a: "framer-styles-preset-4xbu66",
                                h1: "framer-styles-preset-1ogq7h3",
                                h2: "framer-styles-preset-1ftj3nv",
                                h3: "framer-styles-preset-fzgjoo",
                                p: "framer-styles-preset-1hcerco"
                            },
                            verticalAlignment: "top",
                            withExternalLayout: !0
                        })]
                    })
                })
            })
        })
    })
})
  , bt = ['.framer-7rIxb[data-border="true"]::after, .framer-7rIxb [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }', "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-7rIxb.framer-dwjji2, .framer-7rIxb .framer-dwjji2 { display: block; }", ".framer-7rIxb.framer-18p0v2c { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 9px 9px 9px 9px; position: relative; width: 293px; will-change: var(--framer-will-change-override, transform); }", ".framer-7rIxb .framer-1c34sb7 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: flex-start; overflow: visible; padding: 20px 20px 20px 20px; position: relative; width: 100%; }", ".framer-7rIxb .framer-daojy3-container { flex: none; height: 50px; position: relative; width: 50px; }", ".framer-7rIxb .framer-d7rgrm { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", ".framer-7rIxb .framer-1ok6sdb { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-7rIxb.framer-18p0v2c, .framer-7rIxb .framer-1c34sb7 { gap: 0px; } .framer-7rIxb.framer-18p0v2c > * { margin: 0px; margin-bottom: calc(40px / 2); margin-top: calc(40px / 2); } .framer-7rIxb.framer-18p0v2c > :first-child, .framer-7rIxb .framer-1c34sb7 > :first-child { margin-top: 0px; } .framer-7rIxb.framer-18p0v2c > :last-child, .framer-7rIxb .framer-1c34sb7 > :last-child { margin-bottom: 0px; } .framer-7rIxb .framer-1c34sb7 > * { margin: 0px; margin-bottom: calc(30px / 2); margin-top: calc(30px / 2); } }", ...he, ...Qe, ...$e, ...$, ...xe]
  , me = W(yt, bt, "framer-7rIxb")
  , La = me;
me.displayName = "Topic Container";
me.defaultProps = {
    height: 312,
    width: 293
};
P(me, {
    JZGHgfGGp: {
        defaultValue: "Brain",
        placeholder: "Menu, Wifi, Box\u2026",
        title: "Icon",
        type: l.String
    },
    lG8Wq0qgx: {
        defaultValue: "Skills",
        displayTextArea: !1,
        title: "Heading",
        type: l.String
    },
    JB9Xxl03C: {
        defaultValue: "<p>Hey I\u2019m Muhhamed, a Digital Designer Based in Mumbai, I craft jaw-dropping digital experiences</p>",
        title: "Body",
        type: l.RichText
    }
});
z(me, [...st, ...pe, ...Xe, ...Ke, ...K, ...be]);
export {Be as a, pe as b, he as c, ue as d, K as e, $ as f, ee as g, C as h, ta as i, be as j, xe as k, ve as l, we as m, ba as n, Xe as o, Qe as p, Je as q, La as r};
//# sourceMappingURL=chunk-5NHYI6L6.mjs.map
