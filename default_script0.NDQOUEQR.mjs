import {D as y, E as p, G as s, H as g, J as F, M as E, O as v, S as b, W as k, _ as I, e as r, ea as P, h as _} from "./chunk-2KYWQAYW.mjs";
import {c as t} from "./chunk-ELYU6EKT.mjs";
var W = "default"in p ? y : p
  , m = {}
  , D = W;
m.createRoot = D.createRoot;
m.hydrateRoot = D.hydrateRoot;
var f = m.createRoot
  , O = m.hydrateRoot;
t.__framer_importFromPackage = (e,o)=>()=>r(E, {
    error: 'Package component not supported: "' + o + '" in "' + e + '"'
});
t.process = {
    ...t.process,
    env: {
        ...t.process ? t.process.env : void 0,
        NODE_ENV: "production"
    }
};
v();
t.__framer_events = t.__framer_events || [];
function z() {
    t.__framer_events.push(arguments)
}
(async()=>{
    let e = {
        augiA20Il: {
            elements: {},
            page: s(()=>import("./Bkjh5nIPWx7qGO8t7yXpxp1Un3x9mOUWBWdlotN0MrM.OXCYTK6Z.mjs")),
            path: "/"
        },
        nCjwbks54: {
            collectionId: "JGj4qb6Z3",
            elements: {},
            page: s(()=>import("./lcB_oC7OfRHezFGQEm4K6E3VhWt5n8hpSfzb1YRhaNw.U4OINHM5.mjs")),
            path: "/Works/:YOTPkR0Qo"
        },
        p8pG1aD4M: {
            page: s(()=>import("./p8pG1aD4M-BTWZN5TO.mjs"))
        }
    }, o = {
        JGj4qb6Z3: async()=>(await import("./data-module._SyAKHhZnCZJKZBKPg7aX5H1zaPAE262s0Dj11ZE0wo.GEDZCKRS.mjs"))?.utils
    }, u = [{
        code: "en-US",
        id: "default",
        name: "English",
        slug: ""
    }], M = s(()=>import("./__framer-not-found-page.P2X3EXKA.mjs")), c = document.getElementById("main"), n, i, l, d = !1;
    if ("framerHydrateV2"in c.dataset) {
        let a = JSON.parse(c.dataset.framerHydrateV2);
        n = a.routeId,
        i = a.localeId,
        l = a.pathVariables,
        d = !0
    } else {
        let a = F(e, decodeURIComponent(location.pathname), !0, u);
        n = a.routeId,
        i = a.localeId,
        l = a.pathVariables
    }
    let R = await e[n].page.preload();
    e[n].page = R;
    let S = r(P, {
        RootComponent: R,
        isWebsite: !0,
        routeId: n,
        pathVariables: l,
        routes: e,
        collectionUtils: o,
        notFoundPage: M,
        isReducedMotion: void 0,
        localeId: i,
        locales: u,
        preserveQueryParams: void 0,
        enableSuspenseThatPreservesDom: !0,
        shouldMarkHydrationEnd: d
    })
      , w = r(b, {
        children: S,
        value: {
            imgSizesWorkaroundEnabled: !1
        }
    })
      , h = r(g, {
        children: w,
        value: {
            routes: {}
        }
    });
    d ? _(()=>{
        performance.mark("framer-hydration-start"),
        O(c, h)
    }
    ) : f(c).render(h)
}
)().catch(e=>{
    throw z("published_site_load_error", {
        message: String(e),
        stack: e instanceof Error && typeof e.stack == "string" ? e.stack : null
    }),
    e
}
);

//# sourceMappingURL=default_script0.NDQOUEQR.mjs.map
