// Version 0.5.0
'use strict';
var requirejs, require, define;
(function (e) {
    function c(a) {
        return A.call(a) === "[object Function]"
    }

    function b(a) {
        return A.call(a) === "[object Array]"
    }

    function a(a, d) {
        if (a) {
            var g;
            for (g = 0; g < a.length; g += 1)
                if (a[g] && d(a[g], g, a)) break
        }
    }

    function d(a, d) {
        if (a) {
            var g;
            for (g = a.length - 1; g > -1; g -= 1)
                if (a[g] && d(a[g], g, a)) break
        }
    }

    function g(a, d) {
        for (var g in a)
            if (a.hasOwnProperty(g) && d(a[g], g)) break
    }

    function f(a, d, b, c) {
        d && g(d, function (d, g) {
            if (b || !y.call(a, g)) c && typeof d !== "string" ? (a[g] || (a[g] = {}), f(a[g], d, b, c)) : a[g] = d
        });
        return a
    }

    function i(a, d) {
        return function () {
            return d.apply(a,
                arguments)
        }
    }

    function h(d) {
        if (!d) return d;
        var g = e;
        a(d.split("."), function (a) {
            g = g[a]
        });
        return g
    }

    function k(a, d, g, b) {
        d = Error(d + "\nhttp://requirejs.org/docs/errors.html#" + a);
        d.requireType = a;
        d.requireModules = b;
        if (g) d.originalError = g;
        return d
    }

    function j() {
        if (r && r.readyState === "interactive") return r;
        d(document.getElementsByTagName("script"), function (a) {
            if (a.readyState === "interactive") return r = a
        });
        return r
    }
    var l, m, o, p, n, s, r, u, q, x, t = /(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/mg,
        w = /[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,
        z = /\.js$/,
        v = /^\.\//;
    m = Object.prototype;
    var A = m.toString,
        y = m.hasOwnProperty,
        B = Array.prototype.splice,
        C = !! (typeof window !== "undefined" && navigator && document),
        F = !C && typeof importScripts !== "undefined",
        N = C && navigator.platform === "PLAYSTATION 3" ? /^complete$/ : /^(complete|loaded)$/,
        D = typeof opera !== "undefined" && opera.toString() === "[object Opera]",
        K = {}, J = {}, O = [],
        M = !1;
    if (typeof define === "undefined") {
        if (typeof requirejs !== "undefined") {
            if (c(requirejs)) return;
            J = requirejs;
            requirejs = void 0
        }
        typeof require !== "undefined" && !c(require) && (J = require, require = void 0);
        l = requirejs = function (a, d, g, f) {
            var c, i = "_";
            !b(a) && typeof a !== "string" && (c = a, b(d) ? (a = d, d = g, g = f) : a = []);
            if (c && c.context) i = c.context;
            (f = K[i]) || (f = K[i] = l.s.newContext(i));
            c && f.configure(c);
            return f.require(a, d, g)
        };
        l.config = function (a) {
            return l(a)
        };
        l.nextTick = typeof setTimeout !== "undefined" ? function (a) {
            setTimeout(a, 4)
        } : function (a) {
            a()
        };
        require || (require = l);
        l.version = "2.1.1";
        l.jsExtRegExp = /^\/|:|\?|\.js$/;
        l.isBrowser = C;
        m = l.s = {
            contexts: K,
            newContext: function (d) {
                function j(a,
                    d, g) {
                    var b, f, c, i, h, e, k, n = d && d.split("/"),
                        l = G.map,
                        m = l && l["*"];
                    if (a && a.charAt(0) === ".")
                        if (d) {
                            b = G.pkgs[d] ? n = [d] : n.slice(0, n.length - 1);
                            d = a = b.concat(a.split("/"));
                            for (b = 0; d[b]; b += 1)
                                if (f = d[b], f === ".") d.splice(b, 1), b -= 1;
                                else if (f === "..")
                                if (b === 1 && (d[2] === ".." || d[0] === "..")) break;
                                else b > 0 && (d.splice(b - 1, 2), b -= 2);
                            b = G.pkgs[d = a[0]];
                            a = a.join("/");
                            b && a === d + "/" + b.main && (a = d)
                        } else a.indexOf("./") === 0 && (a = a.substring(2));
                    if (g && (n || m) && l) {
                        d = a.split("/");
                        for (b = d.length; b > 0; b -= 1) {
                            c = d.slice(0, b).join("/");
                            if (n)
                                for (f =
                                    n.length; f > 0; f -= 1)
                                    if (g = l[n.slice(0, f).join("/")])
                                        if (g = g[c]) {
                                            i = g;
                                            h = b;
                                            break
                                        }
                            if (i) break;
                            !e && m && m[c] && (e = m[c], k = b)
                        }!i && e && (i = e, h = k);
                        i && (d.splice(0, h, i), a = d.join("/"))
                    }
                    return a
                }

                function n(d) {
                    C && a(document.getElementsByTagName("script"), function (a) {
                        if (a.getAttribute("data-requiremodule") === d && a.getAttribute("data-requirecontext") === E.contextName) return a.parentNode.removeChild(a), !0
                    })
                }

                function m(a) {
                    var d = G.paths[a];
                    if (d && b(d) && d.length > 1) return n(a), d.shift(), E.require.undef(a), E.require([a]), !0
                }

                function p(a) {
                    var d,
                        g = a ? a.indexOf("!") : -1;
                    g > -1 && (d = a.substring(0, g), a = a.substring(g + 1, a.length));
                    return [d, a]
                }

                function o(a, d, g, b) {
                    var f, c, i = null,
                        h = d ? d.name : null,
                        e = a,
                        k = !0,
                        n = "";
                    a || (k = !1, a = "_@r" + (X += 1));
                    a = p(a);
                    i = a[0];
                    a = a[1];
                    i && (i = j(i, h, b), c = L[i]);
                    a && (i ? n = c && c.normalize ? c.normalize(a, function (a) {
                        return j(a, h, b)
                    }) : j(a, h, b) : (n = j(a, h, b), a = p(n), i = a[0], n = a[1], g = !0, f = E.nameToUrl(n)));
                    g = i && !c && !g ? "_unnormalized" + (Y += 1) : "";
                    return {
                        prefix: i,
                        name: n,
                        parentMap: d,
                        unnormalized: !! g,
                        url: f,
                        originalName: e,
                        isDefine: k,
                        id: (i ? i + "!" + n : n) + g
                    }
                }

                function s(a) {
                    var d =
                        a.id,
                        g = H[d];
                    g || (g = H[d] = new E.Module(a));
                    return g
                }

                function x(a, d, g) {
                    var b = a.id,
                        f = H[b];
                    if (y.call(L, b) && (!f || f.defineEmitComplete)) d === "defined" && g(L[b]);
                    else s(a).on(d, g)
                }

                function q(d, g) {
                    var b = d.requireModules,
                        f = !1;
                    if (g) g(d);
                    else if (a(b, function (a) {
                        if (a = H[a]) a.error = d, a.events.error && (f = !0, a.emit("error", d))
                    }), !f) l.onError(d)
                }

                function t() {
                    O.length && (B.apply(P, [P.length - 1, 0].concat(O)), O = [])
                }

                function u(d, g, b) {
                    var f = d.map.id;
                    d.error ? d.emit("error", d.error) : (g[f] = !0, a(d.depMaps, function (a, f) {
                        var c = a.id,
                            i = H[c];
                        i && !d.depMatched[f] && !b[c] && (g[c] ? (d.defineDep(f, L[c]), d.check()) : u(i, g, b))
                    }), b[f] = !0)
                }

                function A() {
                    var d, b, f, c, i = (f = G.waitSeconds * 1E3) && E.startTime + f < (new Date).getTime(),
                        h = [],
                        e = [],
                        j = !1,
                        l = !0;
                    if (!S) {
                        S = !0;
                        g(H, function (a) {
                            d = a.map;
                            b = d.id;
                            if (a.enabled && (d.isDefine || e.push(a), !a.error))
                                if (!a.inited && i) m(b) ? j = c = !0 : (h.push(b), n(b));
                                else if (!a.inited && a.fetched && d.isDefine && (j = !0, !d.prefix)) return l = !1
                        });
                        if (i && h.length) return f = k("timeout", "Load timeout for modules: " + h, null, h), f.contextName = E.contextName,
                        q(f);
                        l && a(e, function (a) {
                            u(a, {}, {})
                        });
                        if ((!i || c) && j)
                            if ((C || F) && !T) T = setTimeout(function () {
                                T = 0;
                                A()
                            }, 50);
                        S = !1
                    }
                }

                function w(a) {
                    s(o(a[0], null, !0)).init(a[1], a[2])
                }

                function J(a) {
                    var a = a.currentTarget || a.srcElement,
                        d = E.onScriptLoad;
                    a.detachEvent && !D ? a.detachEvent("onreadystatechange", d) : a.removeEventListener("load", d, !1);
                    d = E.onScriptError;
                    a.detachEvent && !D || a.removeEventListener("error", d, !1);
                    return {
                        node: a,
                        id: a && a.getAttribute("data-requiremodule")
                    }
                }

                function K() {
                    var a;
                    for (t(); P.length;)
                        if (a = P.shift(), a[0] ===
                            null) return q(k("mismatch", "Mismatched anonymous define() module: " + a[a.length - 1]));
                        else w(a)
                }
                var S, U, E, Q, T, G = {
                        waitSeconds: 7,
                        baseUrl: "./",
                        paths: {},
                        pkgs: {},
                        shim: {},
                        map: {},
                        config: {}
                    }, H = {}, V = {}, P = [],
                    L = {}, R = {}, X = 1,
                    Y = 1;
                Q = {
                    require: function (a) {
                        return a.require ? a.require : a.require = E.makeRequire(a.map)
                    },
                    exports: function (a) {
                        a.usingExports = !0;
                        if (a.map.isDefine) return a.exports ? a.exports : a.exports = L[a.map.id] = {}
                    },
                    module: function (a) {
                        return a.module ? a.module : a.module = {
                            id: a.map.id,
                            uri: a.map.url,
                            config: function () {
                                return G.config &&
                                    G.config[a.map.id] || {}
                            },
                            exports: L[a.map.id]
                        }
                    }
                };
                U = function (a) {
                    this.events = V[a.id] || {};
                    this.map = a;
                    this.shim = G.shim[a.id];
                    this.depExports = [];
                    this.depMaps = [];
                    this.depMatched = [];
                    this.pluginMaps = {};
                    this.depCount = 0
                };
                U.prototype = {
                    init: function (a, d, g, b) {
                        b = b || {};
                        if (!this.inited) {
                            this.factory = d;
                            if (g) this.on("error", g);
                            else this.events.error && (g = i(this, function (a) {
                                this.emit("error", a)
                            }));
                            this.depMaps = a && a.slice(0);
                            this.errback = g;
                            this.inited = !0;
                            this.ignore = b.ignore;
                            b.enabled || this.enabled ? this.enable() : this.check()
                        }
                    },
                    defineDep: function (a, d) {
                        this.depMatched[a] || (this.depMatched[a] = !0, this.depCount -= 1, this.depExports[a] = d)
                    },
                    fetch: function () {
                        if (!this.fetched) {
                            this.fetched = !0;
                            E.startTime = (new Date).getTime();
                            var a = this.map;
                            if (this.shim) E.makeRequire(this.map, {
                                enableBuildCallback: !0
                            })(this.shim.deps || [], i(this, function () {
                                return a.prefix ? this.callPlugin() : this.load()
                            }));
                            else return a.prefix ? this.callPlugin() : this.load()
                        }
                    },
                    load: function () {
                        var a = this.map.url;
                        R[a] || (R[a] = !0, E.load(this.map.id, a))
                    },
                    check: function () {
                        if (this.enabled && !this.enabling) {
                            var a, d, g = this.map.id;
                            d = this.depExports;
                            var b = this.exports,
                                f = this.factory;
                            if (this.inited)
                                if (this.error) this.emit("error", this.error);
                                else {
                                    if (!this.defining) {
                                        this.defining = !0;
                                        if (this.depCount < 1 && !this.defined) {
                                            if (c(f)) {
                                                if (this.events.error) try {
                                                    b = E.execCb(g, f, d, b)
                                                } catch (i) {
                                                    a = i
                                                } else b = E.execCb(g, f, d, b);
                                                if (this.map.isDefine)
                                                    if ((d = this.module) && d.exports !== void 0 && d.exports !== this.exports) b = d.exports;
                                                    else if (b === void 0 && this.usingExports) b = this.exports;
                                                if (a) return a.requireMap = this.map,
                                                a.requireModules = [this.map.id], a.requireType = "define", q(this.error = a)
                                            } else b = f;
                                            this.exports = b;
                                            if (this.map.isDefine && !this.ignore && (L[g] = b, l.onResourceLoad)) l.onResourceLoad(E, this.map, this.depMaps);
                                            delete H[g];
                                            this.defined = !0
                                        }
                                        this.defining = !1;
                                        if (this.defined && !this.defineEmitted) this.defineEmitted = !0, this.emit("defined", this.exports), this.defineEmitComplete = !0
                                    }
                                } else this.fetch()
                        }
                    },
                    callPlugin: function () {
                        var a = this.map,
                            d = a.id,
                            b = o(a.prefix);
                        this.depMaps.push(b);
                        x(b, "defined", i(this, function (b) {
                            var f,
                                c;
                            c = this.map.name;
                            var h = this.map.parentMap ? this.map.parentMap.name : null,
                                e = E.makeRequire(a.parentMap, {
                                    enableBuildCallback: !0,
                                    skipMap: !0
                                });
                            if (this.map.unnormalized) {
                                if (b.normalize && (c = b.normalize(c, function (a) {
                                    return j(a, h, !0)
                                }) || ""), b = o(a.prefix + "!" + c, this.map.parentMap), x(b, "defined", i(this, function (a) {
                                    this.init([], function () {
                                        return a
                                    }, null, {
                                        enabled: !0,
                                        ignore: !0
                                    })
                                })), c = H[b.id]) {
                                    this.depMaps.push(b);
                                    if (this.events.error) c.on("error", i(this, function (a) {
                                        this.emit("error", a)
                                    }));
                                    c.enable()
                                }
                            } else f = i(this,
                                function (a) {
                                    this.init([], function () {
                                        return a
                                    }, null, {
                                        enabled: !0
                                    })
                                }), f.error = i(this, function (a) {
                                this.inited = !0;
                                this.error = a;
                                a.requireModules = [d];
                                g(H, function (a) {
                                    a.map.id.indexOf(d + "_unnormalized") === 0 && delete H[a.map.id]
                                });
                                q(a)
                            }), f.fromText = i(this, function (d, g) {
                                var b = a.name,
                                    c = o(b),
                                    i = M;
                                g && (d = g);
                                i && (M = !1);
                                s(c);
                                try {
                                    l.exec(d)
                                } catch (h) {
                                    throw Error("fromText eval for " + b + " failed: " + h);
                                }
                                i && (M = !0);
                                this.depMaps.push(c);
                                E.completeLoad(b);
                                e([b], f)
                            }), b.load(a.name, e, f, G)
                        }));
                        E.enable(b, this);
                        this.pluginMaps[b.id] =
                            b
                    },
                    enable: function () {
                        this.enabling = this.enabled = !0;
                        a(this.depMaps, i(this, function (a, d) {
                            var g, b;
                            if (typeof a === "string") {
                                a = o(a, this.map.isDefine ? this.map : this.map.parentMap, !1, !this.skipMap);
                                this.depMaps[d] = a;
                                if (g = Q[a.id]) {
                                    this.depExports[d] = g(this);
                                    return
                                }
                                this.depCount += 1;
                                x(a, "defined", i(this, function (a) {
                                    this.defineDep(d, a);
                                    this.check()
                                }));
                                this.errback && x(a, "error", this.errback)
                            }
                            g = a.id;
                            b = H[g];
                            !Q[g] && b && !b.enabled && E.enable(a, this)
                        }));
                        g(this.pluginMaps, i(this, function (a) {
                            var d = H[a.id];
                            d && !d.enabled &&
                                E.enable(a, this)
                        }));
                        this.enabling = !1;
                        this.check()
                    },
                    on: function (a, d) {
                        var g = this.events[a];
                        g || (g = this.events[a] = []);
                        g.push(d)
                    },
                    emit: function (d, g) {
                        a(this.events[d], function (a) {
                            a(g)
                        });
                        d === "error" && delete this.events[d]
                    }
                };
                E = {
                    config: G,
                    contextName: d,
                    registry: H,
                    defined: L,
                    urlFetched: R,
                    defQueue: P,
                    Module: U,
                    makeModuleMap: o,
                    nextTick: l.nextTick,
                    configure: function (d) {
                        d.baseUrl && d.baseUrl.charAt(d.baseUrl.length - 1) !== "/" && (d.baseUrl += "/");
                        var c = G.pkgs,
                            i = G.shim,
                            h = {
                                paths: !0,
                                config: !0,
                                map: !0
                            };
                        g(d, function (a, d) {
                            h[d] ?
                                d === "map" ? f(G[d], a, !0, !0) : f(G[d], a, !0) : G[d] = a
                        });
                        if (d.shim) g(d.shim, function (a, d) {
                            b(a) && (a = {
                                deps: a
                            });
                            if (a.exports && !a.exportsFn) a.exportsFn = E.makeShimExports(a);
                            i[d] = a
                        }), G.shim = i;
                        if (d.packages) a(d.packages, function (a) {
                            a = typeof a === "string" ? {
                                name: a
                            } : a;
                            c[a.name] = {
                                name: a.name,
                                location: a.location || a.name,
                                main: (a.main || "main").replace(v, "").replace(z, "")
                            }
                        }), G.pkgs = c;
                        g(H, function (a, d) {
                            if (!a.inited && !a.map.unnormalized) a.map = o(d)
                        });
                        if (d.deps || d.callback) E.require(d.deps || [], d.callback)
                    },
                    makeShimExports: function (a) {
                        return function () {
                            var d;
                            a.init && (d = a.init.apply(e, arguments));
                            return d || h(a.exports)
                        }
                    },
                    makeRequire: function (a, g) {
                        function b(f, i, h) {
                            var e, j;
                            if (g.enableBuildCallback && i && c(i)) i.__requireJsBuild = !0;
                            if (typeof f === "string") {
                                if (c(i)) return q(k("requireargs", "Invalid require call"), h);
                                if (a && Q[f]) return Q[f](H[a.id]);
                                if (l.get) return l.get(E, f, a);
                                e = o(f, a, !1, !0);
                                e = e.id;
                                return !y.call(L, e) ? q(k("notloaded", 'Module name "' + e + '" has not been loaded yet for context: ' + d + (a ? "" : ". Use require([])"))) : L[e]
                            }
                            K();
                            E.nextTick(function () {
                                K();
                                j =
                                    s(o(null, a));
                                j.skipMap = g.skipMap;
                                j.init(f, i, h, {
                                    enabled: !0
                                });
                                A()
                            });
                            return b
                        }
                        g = g || {};
                        f(b, {
                            isBrowser: C,
                            toUrl: function (d) {
                                var g = d.lastIndexOf("."),
                                    b = null;
                                g !== -1 && (b = d.substring(g, d.length), d = d.substring(0, g));
                                return E.nameToUrl(j(d, a && a.id, !0), b)
                            },
                            defined: function (d) {
                                d = o(d, a, !1, !0).id;
                                return y.call(L, d)
                            },
                            specified: function (d) {
                                d = o(d, a, !1, !0).id;
                                return y.call(L, d) || y.call(H, d)
                            }
                        });
                        if (!a) b.undef = function (d) {
                            t();
                            var g = o(d, a, !0),
                                b = H[d];
                            delete L[d];
                            delete R[g.url];
                            delete V[d];
                            if (b) {
                                if (b.events.defined) V[d] =
                                    b.events;
                                delete H[d]
                            }
                        };
                        return b
                    },
                    enable: function (a) {
                        H[a.id] && s(a).enable()
                    },
                    completeLoad: function (a) {
                        var d, g, b = G.shim[a] || {}, f = b.exports;
                        for (t(); P.length;) {
                            g = P.shift();
                            if (g[0] === null) {
                                g[0] = a;
                                if (d) break;
                                d = !0
                            } else g[0] === a && (d = !0);
                            w(g)
                        }
                        g = H[a];
                        if (!d && !L[a] && g && !g.inited)
                            if (G.enforceDefine && (!f || !h(f)))
                                if (m(a)) return;
                                else return q(k("nodefine", "No define call for " + a, null, [a]));
                                else w([a, b.deps || [], b.exportsFn]);
                        A()
                    },
                    nameToUrl: function (a, d) {
                        var g, f, c, i, h, e;
                        if (l.jsExtRegExp.test(a)) i = a + (d || "");
                        else {
                            g =
                                G.paths;
                            f = G.pkgs;
                            i = a.split("/");
                            for (h = i.length; h > 0; h -= 1)
                                if (e = i.slice(0, h).join("/"), c = f[e], e = g[e]) {
                                    b(e) && (e = e[0]);
                                    i.splice(0, h, e);
                                    break
                                } else if (c) {
                                g = a === c.name ? c.location + "/" + c.main : c.location;
                                i.splice(0, h, g);
                                break
                            }
                            i = i.join("/");
                            i += d || (/\?/.test(i) ? "" : ".js");
                            i = (i.charAt(0) === "/" || i.match(/^[\w\+\.\-]+:/) ? "" : G.baseUrl) + i
                        }
                        return G.urlArgs ? i + ((i.indexOf("?") === -1 ? "?" : "&") + G.urlArgs) : i
                    },
                    load: function (a, d) {
                        l.load(E, a, d)
                    },
                    execCb: function (a, d, g, b) {
                        return d.apply(b, g)
                    },
                    onScriptLoad: function (a) {
                        if (a.type ===
                            "load" || N.test((a.currentTarget || a.srcElement).readyState)) r = null, a = J(a), E.completeLoad(a.id)
                    },
                    onScriptError: function (a) {
                        var d = J(a);
                        if (!m(d.id)) return q(k("scripterror", "Script error", a, [d.id]))
                    }
                };
                E.require = E.makeRequire();
                return E
            }
        };
        l({});
        a(["toUrl", "undef", "defined", "specified"], function (a) {
            l[a] = function () {
                var d = K._;
                return d.require[a].apply(d, arguments)
            }
        });
        if (C && (o = m.head = document.getElementsByTagName("head")[0], p = document.getElementsByTagName("base")[0])) o = m.head = p.parentNode;
        l.onError = function (a) {
            throw a;
        };
        l.load = function (a, d, g) {
            var b = a && a.config || {}, f;
            if (C) return f = b.xhtml ? document.createElementNS("http://www.w3.org/1999/xhtml", "html:script") : document.createElement("script"), f.type = b.scriptType || "text/javascript", f.charset = "utf-8", f.async = !0, f.setAttribute("data-requirecontext", a.contextName), f.setAttribute("data-requiremodule", d), f.attachEvent && !(f.attachEvent.toString && f.attachEvent.toString().indexOf("[native code") < 0) && !D ? (M = !0, f.attachEvent("onreadystatechange", a.onScriptLoad)) : (f.addEventListener("load",
                a.onScriptLoad, !1), f.addEventListener("error", a.onScriptError, !1)), f.src = g, u = f, p ? o.insertBefore(f, p) : o.appendChild(f), u = null, f;
            else F && (importScripts(g), a.completeLoad(d))
        };
        C && d(document.getElementsByTagName("script"), function (a) {
            if (!o) o = a.parentNode;
            if (n = a.getAttribute("data-main")) {
                if (!J.baseUrl) s = n.split("/"), q = s.pop(), x = s.length ? s.join("/") + "/" : "./", J.baseUrl = x, n = q;
                n = n.replace(z, "");
                J.deps = J.deps ? J.deps.concat(n) : [n];
                return !0
            }
        });
        define = function (a, d, g) {
            var f, i;
            typeof a !== "string" && (g = d, d = a, a = null);
            b(d) || (g = d, d = []);
            !d.length && c(g) && g.length && (g.toString().replace(t, "").replace(w, function (a, g) {
                d.push(g)
            }), d = (g.length === 1 ? ["require"] : ["require", "exports", "module"]).concat(d));
            if (M && (f = u || j())) a || (a = f.getAttribute("data-requiremodule")), i = K[f.getAttribute("data-requirecontext")];
            (i ? i.defQueue : O).push([a, d, g])
        };
        define.amd = {
            jQuery: !0
        };
        l.exec = function (a) {
            return eval(a)
        };
        l(J)
    }
})(this);
define("requireLib", function () {});
define("goo/entities/components/Component", [], function () {
    return function () {
        this.enabled = !0
    }
});
define("goo/addons/box2d/components/Box2DComponent", ["goo/entities/components/Component"], function (e) {
    function c(b) {
        this.type = "Box2DComponent";
        this.world = this.body = null;
        this.mass = 1;
        this.settings = b || {};
        this.shape = b.shape ? b.shape : "box";
        this.width = b.width ? b.width : 1;
        this.height = b.height ? b.height : 1;
        this.radius = b.radius ? b.radius : 1;
        this.vertices = b.vertices ? b.vertices : [0, 1, 2, 2, 0, 2];
        this.movable = b.movable === !0 ? !0 : !1;
        this.friction = b.friction ? b.friction : 1;
        this.offsetX = b.offsetX ? b.offsetX : 0;
        this.offsetY = b.offsetY ?
            b.offsetY : 0
    }
    c.prototype = Object.create(e.prototype);
    return c
});
define("goo/entities/systems/System", [], function () {
    function e(c, b) {
        this.type = c;
        this.interests = b;
        this._activeEntities = [];
        this.passive = !1
    }
    e.prototype.added = function (c) {
        this._check(c)
    };
    e.prototype.changed = function (c) {
        this._check(c)
    };
    e.prototype.removed = function (c) {
        var b = this._activeEntities.indexOf(c);
        b !== -1 && (this._activeEntities.splice(b, 1), this.deleted && this.deleted(c))
    };
    e.prototype._check = function (c) {
        if (this.type == "AnimationSystem") {
        }
        if (!(this.interests && this.interests.length === 0)) {
            var b = this.interests === null;
            if (!b && this.interests.length <=
                c._components.length)
                for (var b = !0, a = 0; a < this.interests.length; a++) {
                    var d = this.interests[a].charAt(0).toLowerCase() + this.interests[a].substr(1);
                    if (!c[d]) {
                        b = !1;
                        break
                    }
                }
            a = this._activeEntities.indexOf(c);
            b && a === -1 ? (this._activeEntities.push(c), this.inserted && this.inserted(c)) : !b && a !== -1 && (this._activeEntities.splice(a, 1), this.deleted && this.deleted(c))
        }
    };
    e.prototype._process = function (c) {
        this.process && this.process(this._activeEntities, c)
    };
    return e
});
define("goo/addons/box2d/systems/Box2DSystem", ["goo/entities/systems/System"], function (e) {
    function c() {
        e.call(this, "Box2DSystem", ["Box2DComponent", "MeshDataComponent"]);
        this.SCALE = 0.5;
        this.world = new Box2D.b2World(new Box2D.b2Vec2(0, -9));
        this.sortVertexesClockWise = function (b, a) {
            var d = Math.atan2(b.get_y(), b.get_x()),
                g = Math.atan2(a.get_y(), a.get_x());
            return d > g ? 1 : -1
        };
        this.createPolygonShape = function (b) {
            for (var a = new Box2D.b2PolygonShape, d = Box2D.allocate(b.length * 8, "float", Box2D.ALLOC_STACK), g = 0, f = 0; f <
                b.length; f++) Box2D.setValue(d + g, b[f].get_x(), "float"), Box2D.setValue(d + (g + 4), b[f].get_y(), "float"), g += 8;
            d = Box2D.wrapPointer(d, Box2D.b2Vec2);
            a.Set(d, b.length);
            return a
        }
    }
    c.prototype = Object.create(e.prototype);
    c.prototype.inserted = function (b) {
        var a = b.physics2DComponent,
            d = 0,
            g = 0,
            f = new Box2D.b2PolygonShape;
        if (a.shape === "box") f.SetAsBox(a.width * this.SCALE, a.height * this.SCALE);
        else if (a.shape === "circle") f = new Box2D.b2CircleShape, f.set_m_radius(a.radius);
        else if (a.shape === "mesh") {
            for (var c = b.meshDataComponent.meshData.getAttributeBuffer("POSITION"),
                    f = 0, h = [], d = 1E4, e = -1E4, g = 1E4, j = -1E4; f <= c.length - 3;) {
                var l = c[f],
                    m = c[++f];
                m < d && (d = m);
                m > e && (e = m);
                l < g && (g = l);
                l > j && (j = l);
                ++f;
                b.transformComponent.updateWorldTransform();
                l = new Box2D.b2Vec2(l, m);
                h.push(l)
            }
            f = this.createPolygonShape(h);
            d = Math.abs(e - d);
            g = Math.abs(j - g)
        } else if (a.shape === "polygon") {
            h = [];
            for (f = 0; f <= a.vertices.length - 2;) l = new Box2D.b2Vec2(a.vertices[f], a.vertices[++f]), h.push(l), ++f;
            f = this.createPolygonShape(h);
            console.log(h)
        }
        h = new Box2D.b2FixtureDef;
        h.set_shape(f);
        h.set_density(1);
        h.set_friction(a.friction);
        f = new Box2D.b2BodyDef;
        a.movable === !0 && f.set_type(Box2D.b2_dynamicBody);
        f.set_position(new Box2D.b2Vec2(b.transformComponent.transform.translation.x + a.offsetX, b.transformComponent.transform.translation.y + a.offsetY));
        f = this.world.CreateBody(f);
        f.CreateFixture(h);
        f.SetLinearDamping(0.95);
        f.SetAngularDamping(0.6);
        a.body = f;
        a.world = this.world;
        b.body = f;
        b.body.h = d;
        b.body.w = g
    };
    c.prototype.deleted = function () {};
    c.prototype.process = function (b, a) {
        this.world.Step(a, 2, 2);
        for (var d = 0; d < b.length; d++) {
            var g = b[d].body.GetPosition();
            b[d].transformComponent.transform.translation.y = g.get_y() - b[d].physics2DComponent.offsetY;
            b[d].transformComponent.transform.translation.x = g.get_x() - b[d].physics2DComponent.offsetX;
            b[d].transformComponent.setUpdated();
            b[d].transformComponent.transform.rotation.z = b[d].body.GetAngle();
            g.get_y() > 100 && b[d].body.ApplyForce(new Box2D.b2Vec2(0, -100), b[d].body.GetPosition())
        }
    };
    return c
});
define("goo/addons/cannon/components/CannonjsComponent", ["goo/entities/components/Component"], function (e) {
    function c(b) {
        this.type = "CannonjsComponent";
        this.settings = b || {};
        this.mass = b.mass !== void 0 ? b.mass : 0;
        this.useBounds = b.useBounds !== void 0 ? b.useBounds : !1;
        this.linearDamping = b.linearDamping !== void 0 ? b.linearDamping : 0;
        this.angularDamping = b.angularDamping !== void 0 ? b.angularDamping : 0
    }
    c.prototype = Object.create(e.prototype);
    return c
});
define("goo/math/MathUtils", [], function () {
    function e() {}
    e.DEG_TO_RAD = Math.PI / 180;
    e.RAD_TO_DEG = 180 / Math.PI;
    e.HALF_PI = 0.5 * Math.PI;
    e.TWO_PI = 2 * Math.PI;
    e.EPSILON = 1.0E-7;
    e.radFromDeg = function (c) {
        return c * e.DEG_TO_RAD
    };
    e.degFromRad = function (c) {
        return c * e.RAD_TO_DEG
    };
    e.lerp = function (c, b, a) {
        return b === a ? b : b + (a - b) * c
    };
    e.clamp = function (c, b, a) {
        return b < a ? c < b ? b : c > a ? a : c : c < a ? a : c > b ? b : c
    };
    e.moduloPositive = function (c, b) {
        var a = c % b;
        a += a < 0 ? b : 0;
        return a
    };
    e.scurve3 = function (c) {
        return (-2 * c + 3) * c * c
    };
    e.scurve5 = function (c) {
        return ((6 *
            c - 15) * c + 10) * c * c * c
    };
    e.sphericalToCartesian = function (c, b, a, d) {
        var g = c * Math.cos(a);
        d.x = g * Math.cos(b);
        d.y = c * Math.sin(a);
        d.z = g * Math.sin(b)
    };
    e.cartesianToSpherical = function (c, b, a, d) {
        var g = Math.sqrt(c * c + a * a);
        d.x = Math.sqrt(c * c + b * b + a * a);
        d.y = Math.atan2(a, c);
        d.z = Math.atan2(b, g)
    };
    e.getTriangleNormal = function (c, b, a, d, g, f, i, h, e) {
        d -= c;
        g -= b;
        f -= a;
        c = i - c;
        b = h - b;
        a = e - a;
        return [g * a - f * b, f * c - d * a, d * b - g * c]
    };
    e.isPowerOfTwo = function (c) {
        return (c & c - 1) === 0
    };
    e.nearestHigherPowerOfTwo = function (c) {
        return Math.floor(Math.pow(2, Math.ceil(Math.log(c) /
            Math.log(2))))
    };
    return e
});
define("goo/math/Vector", ["goo/math/MathUtils"], function (e) {
    function c(b) {
        this.data = new Float32Array(b || 0)
    }
    c.prototype.setupAliases = function (b) {
        for (var a = this, d = 0; d < b.length; d++)(function (g) {
            for (var f = 0; f < b[g].length; f++) Object.defineProperty(a, b[g][f], {
                get: function () {
                    return this.data[g]
                },
                set: function (a) {
                    this.data[g] = a
                }
            });
            Object.defineProperty(a, d, {
                get: function () {
                    return this.data[g]
                },
                set: function (a) {
                    this.data[g] = a
                }
            })
        })(d)
    };
    c.add = function (b, a, d) {
        var b = b.data || b,
            a = a.data || a,
            g = b.length;
        d || (d = new c(g));
        if (a.length !== g || d.data.length !== g) throw {
            name: "Illegal Arguments",
            message: "The arguments are of incompatible sizes."
        };
        for (var f = 0; f < g; f++) d.data[f] = b[f] + a[f];
        return d
    };
    c.prototype.add = function (b) {
        return c.add(this, b, this)
    };
    c.sub = function (b, a, d) {
        var b = b.data || b,
            a = a.data || a,
            g = b.length;
        d || (d = new c(g));
        if (a.length !== g || d.data.length !== g) throw {
            name: "Illegal Arguments",
            message: "The arguments are of incompatible sizes."
        };
        for (var f = 0; f < g; f++) d.data[f] = b[f] - a[f];
        return d
    };
    c.prototype.sub = function (b) {
        return c.sub(this,
            b, this)
    };
    c.mul = function (b, a, d) {
        var b = b.data || b,
            a = a.data || a,
            g = b.length;
        d || (d = new c(g));
        if (a.length !== g || d.data.length !== g) throw {
            name: "Illegal Arguments",
            message: "The arguments are of incompatible sizes."
        };
        for (var f = 0; f < g; f++) d.data[f] = b[f] * a[f];
        return d
    };
    c.prototype.mul = function (b) {
        return c.mul(this, b, this)
    };
    c.div = function (b, a, d) {
        var b = b.data || b,
            a = a.data || a,
            g = b.length;
        d || (d = new c(g));
        if (a.length !== g || d.data.length !== g) throw {
            name: "Illegal Arguments",
            message: "The arguments are of incompatible sizes."
        };
        for (var f = 0; f < g; f++) d.data[f] = b[f] / a[f];
        return d
    };
    c.prototype.div = function (b) {
        return c.div(this, b, this)
    };
    c.copy = function (b, a) {
        var d = b.data.length;
        a || (a = new c(d));
        if (a.data.length !== d) throw {
            name: "Illegal Arguments",
            message: "The arguments are of incompatible sizes."
        };
        a.data.set(b.data);
        return a
    };
    c.prototype.copy = function (b) {
        return c.copy(b, this)
    };
    c.dot = function (b, a) {
        var d = b.data || b,
            g = a.data || a,
            f = d.length;
        if (g.length !== f) throw {
            name: "Illegal Arguments",
            message: "The arguments are of incompatible sizes."
        };
        for (var c = 0, h = 0; h < f; h++) c += d[h] * g[h];
        return c
    };
    c.prototype.dot = function (b) {
        return c.dot(this, b)
    };
    c.apply = function (b, a, d) {
        var g = b.rows,
            f = b.cols,
            i = a.data.length;
        d || (d = new c(g));
        if (d.data.length !== g || f !== i) throw {
            name: "Illegal Arguments",
            message: "The arguments are of incompatible sizes."
        };
        if (d === a) return c.copy(c.apply(b, a), d);
        for (var h = 0; h < f; h++)
            for (var e = h * g, j = 0; j < g; j++) {
                for (var l = 0, m = 0; m < i; m++) l += b.data[m * b.rows + j] * a.data[m];
                d.data[e + j] = l
            }
        return d
    };
    c.prototype.apply = function (b) {
        return c.apply(b, this,
            this)
    };
    c.equals = function (b, a) {
        var d = b.data.length;
        if (d !== a.data.length) return !1;
        for (var g = 0; g < d; g++)
            if (Math.abs(b.data[g] - a.data[g]) > e.EPSILON) return !1;
        return !0
    };
    c.prototype.equals = function (b) {
        return c.equals(this, b)
    };
    c.distanceSquared = function (b, a) {
        return c.sub(b, a).lengthSquared()
    };
    c.prototype.distanceSquared = function (b) {
        return c.sub(this, b).lengthSquared()
    };
    c.distance = function (b, a) {
        return c.sub(b, a).length()
    };
    c.prototype.distance = function (b) {
        return c.sub(this, b).length()
    };
    c.prototype.lengthSquared =
        function () {
            return c.dot(this, this)
    };
    c.prototype.length = function () {
        return Math.sqrt(c.dot(this, this))
    };
    c.prototype.scale = function (b) {
        for (var a = this.data.length - 1; a >= 0; a--) this.data[a] *= b;
        return this
    };
    c.prototype.invert = function () {
        for (var b = 0; b < this.data.length; b++) this.data[b] = 0 - this.data[b];
        return this
    };
    c.prototype.normalize = function () {
        var b = this.length(),
            a = this.data.length;
        if (b < e.EPSILON)
            for (var d = 0; d < a; d++) this.data[d] = 0;
        else {
            b = 1 / b;
            for (d = 0; d < a; d++) this.data[d] *= b
        }
        return this
    };
    c.prototype.clone =
        function () {
            return c.copy(this)
    };
    c.prototype.set = function () {
        if (arguments.length === 1 && typeof arguments[0] === "object")
            if (arguments[0] instanceof c) this.copy(arguments[0]);
            else if (arguments[0].length > 1)
            for (var b = 0; b < arguments[0].length; b++) this.data[b] = arguments[0][b];
        else this.set(arguments[0][0]);
        else
            for (b = 0; b < arguments.length; b++) this.data[b] = arguments[b];
        return this
    };
    c.prototype.toString = function () {
        var b = "";
        b += "[";
        for (var a = 0; a < this.data.length; a++) b += this.data[a], b += a !== this.data.length - 1 ? ", " : "";
        b += "]";
        return b
    };
    return c
});
define("goo/math/Vector3", ["goo/math/Vector"], function (e) {
    function c() {
        e.call(this, 3);
        arguments.length !== 0 ? this.set(arguments) : this.setd(0, 0, 0)
    }
    c.prototype = Object.create(e.prototype);
    c.prototype.setupAliases([
        ["x", "u", "r"],
        ["y", "v", "g"],
        ["z", "w", "b"]
    ]);
    c.ZERO = new c(0, 0, 0);
    c.ONE = new c(1, 1, 1);
    c.UNIT_X = new c(1, 0, 0);
    c.UNIT_Y = new c(0, 1, 0);
    c.UNIT_Z = new c(0, 0, 1);
    c.add = function (b, a, d) {
        typeof b === "number" && (b = [b, b, b]);
        typeof a === "number" && (a = [a, a, a]);
        d || (d = new c);
        b = b.data || b;
        a = a.data || a;
        if (b.length !== 3 || a.length !==
            3) throw {
            name: "Illegal Arguments",
            message: "The arguments are of incompatible sizes."
        };
        d.data[0] = b[0] + a[0];
        d.data[1] = b[1] + a[1];
        d.data[2] = b[2] + a[2];
        return d
    };
    c.addv = function (b, a, d) {
        d || (d = new c);
        d.data[0] = b.data[0] + a.data[0];
        d.data[1] = b.data[1] + a.data[1];
        d.data[2] = b.data[2] + a.data[2];
        return d
    };
    c.prototype.add = function (b) {
        return c.add(this, b, this)
    };
    c.sub = function (b, a, d) {
        typeof b === "number" && (b = [b, b, b]);
        typeof a === "number" && (a = [a, a, a]);
        d || (d = new c);
        b = b.data || b;
        a = a.data || a;
        if (b.length !== 3 || a.length !== 3) throw {
            name: "Illegal Arguments",
            message: "The arguments are of incompatible sizes."
        };
        d.data[0] = b[0] - a[0];
        d.data[1] = b[1] - a[1];
        d.data[2] = b[2] - a[2];
        return d
    };
    c.subv = function (b, a, d) {
        d || (d = new c);
        d.data[0] = b.data[0] - a.data[0];
        d.data[1] = b.data[1] - a.data[1];
        d.data[2] = b.data[2] - a.data[2];
        return d
    };
    c.prototype.sub = function (b) {
        return c.sub(this, b, this)
    };
    c.mul = function (b, a, d) {
        typeof b === "number" && (b = [b, b, b]);
        typeof a === "number" && (a = [a, a, a]);
        d || (d = new c);
        b = b.data || b;
        a = a.data || a;
        if (b.length !== 3 || a.length !== 3) throw {
            name: "Illegal Arguments",
            message: "The arguments are of incompatible sizes."
        };
        d.data[0] = b[0] * a[0];
        d.data[1] = b[1] * a[1];
        d.data[2] = b[2] * a[2];
        return d
    };
    c.prototype.mul = function (b) {
        return c.mul(this, b, this)
    };
    c.div = function (b, a, d) {
        typeof b === "number" && (b = [b, b, b]);
        typeof a === "number" && (a = [a, a, a]);
        d || (d = new c);
        b = b.data || b;
        a = a.data || a;
        if (b.length !== 3 || a.length !== 3) throw {
            name: "Illegal Arguments",
            message: "The arguments are of incompatible sizes."
        };
        d.data[0] = b[0] / a[0];
        d.data[1] = b[1] / a[1];
        d.data[2] = b[2] / a[2];
        return d
    };
    c.prototype.div = function (b) {
        return c.div(this, b, this)
    };
    c.dot = function (b,
        a) {
        typeof b === "number" && (b = [b, b, b]);
        typeof a === "number" && (a = [a, a, a]);
        var d = b.data || b,
            g = a.data || a;
        if (d.length !== 3 || g.length !== 3) throw {
            name: "Illegal Arguments",
            message: "The arguments are of incompatible sizes."
        };
        var f = 0;
        f += d[0] * g[0];
        f += d[1] * g[1];
        f += d[2] * g[2];
        return f
    };
    c.prototype.dot = function (b) {
        return c.dot(this, b)
    };
    c.cross = function (b, a, d) {
        d || (d = new c);
        var g = a.data || a;
        if ((b.data || b).length !== 3 || g.length !== 3) throw {
            name: "Illegal Arguments",
            message: "The arguments are of incompatible sizes."
        };
        var g = a.data[0] *
            b.data[2] - a.data[2] * b.data[0],
            f = a.data[1] * b.data[0] - a.data[0] * b.data[1];
        d.data[0] = a.data[2] * b.data[1] - a.data[1] * b.data[2];
        d.data[1] = g;
        d.data[2] = f;
        return d
    };
    c.prototype.cross = function (b) {
        return c.cross(this, b, this)
    };
    c.prototype.lerp = function (b, a) {
        this.data[0] = (1 - a) * this.data[0] + a * b.data[0];
        this.data[1] = (1 - a) * this.data[1] + a * b.data[1];
        this.data[2] = (1 - a) * this.data[2] + a * b.data[2];
        return this
    };
    c.prototype.setd = function (b, a, d) {
        this.data[0] = b;
        this.data[1] = a;
        this.data[2] = d;
        return this
    };
    c.prototype.seta = function (b) {
        this.data[0] =
            b[0];
        this.data[1] = b[1];
        this.data[2] = b[2];
        return this
    };
    c.prototype.setv = function (b) {
        this.data[0] = b.data[0];
        this.data[1] = b.data[1];
        this.data[2] = b.data[2];
        return this
    };
    c.prototype.add_d = function (b, a, d) {
        this.data[0] += b;
        this.data[1] += a;
        this.data[2] += d;
        return this
    };
    c.prototype.addv = function (b) {
        this.data[0] += b.data[0];
        this.data[1] += b.data[1];
        this.data[2] += b.data[2];
        return this
    };
    c.prototype.mulv = function (b) {
        this.data[0] *= b.data[0];
        this.data[1] *= b.data[1];
        this.data[2] *= b.data[2];
        return this
    };
    c.prototype.muld =
        function (b, a, d) {
            this.data[0] *= b;
            this.data[1] *= a;
            this.data[2] *= d;
            return this
    };
    c.prototype.subv = function (b) {
        this.data[0] -= b.data[0];
        this.data[1] -= b.data[1];
        this.data[2] -= b.data[2];
        return this
    };
    c.prototype.sub_d = function (b, a, d) {
        this.data[0] -= b;
        this.data[1] -= a;
        this.data[2] -= d;
        return this
    };
    c.prototype.lengthSquared = function () {
        return this.data[0] * this.data[0] + this.data[1] * this.data[1] + this.data[2] * this.data[2]
    };
    c.distanceSquared = function (b, a) {
        var d = b.data[0] - a.data[0],
            g = b.data[1] - a.data[1],
            f = b.data[2] -
                a.data[2];
        return d * d + g * g + f * f
    };
    c.distance = function (b, a) {
        return Math.sqrt(c.distanceSquared(b, a))
    };
    c.prototype.distanceSquared = function (b) {
        return c.distanceSquared(this, b)
    };
    c.prototype.distance = function (b) {
        return c.distance(this, b)
    };
    return c
});
define("goo/renderer/bounds/BoundingVolume", ["goo/math/Vector3"], function (e) {
    function c(b) {
        this.center = new e;
        b !== void 0 && this.center.setv(b);
        this.min = new e(Infinity, Infinity, Infinity);
        this.max = new e(-Infinity, -Infinity, -Infinity)
    }
    c.Outside = 0;
    c.Inside = 1;
    c.Intersects = 2;
    return c
});
define("goo/renderer/bounds/BoundingBox", ["goo/math/Vector3", "goo/renderer/bounds/BoundingVolume", "goo/math/MathUtils"], function (e, c, b) {
    function a(a, g, b, i) {
        c.call(this, a);
        this.xExtent = g !== void 0 ? g : 1;
        this.yExtent = b !== void 0 ? b : 1;
        this.zExtent = i !== void 0 ? i : 1;
        this._compVect1 = new e;
        this._compVect2 = new e;
        this.vec = new e;
        this.corners = [];
        for (a = 0; a < 8; a++) this.corners.push(new e)
    }
    a.prototype = Object.create(c.prototype);
    a.prototype.constructor = a;
    a.prototype.computeFromPoints = function (a) {
        var g = this.min,
            b = this.max,
            c = this.vec;
        g.setd(Infinity, Infinity, Infinity);
        b.setd(-Infinity, -Infinity, -Infinity);
        for (var h, e, j, l = 0; l < a.length; l += 3) h = a[l + 0], e = a[l + 1], j = a[l + 2], g.x = h < g.x ? h : g.x, g.y = e < g.y ? e : g.y, g.z = j < g.z ? j : g.z, b.x = h > b.x ? h : b.x, b.y = e > b.y ? e : b.y, b.z = j > b.z ? j : b.z;
        c.setv(b).subv(g).div(2);
        this.xExtent = c.x;
        this.yExtent = c.y;
        this.zExtent = c.z;
        this.center.setv(b).addv(g).div(2)
    };
    a.prototype.computeFromPrimitives = function (d, g, b, c, h) {
        if (!(h - c <= 0)) {
            for (var e = this._compVect1.set(Infinity, Infinity, Infinity), j = this._compVect2.set(-Infinity, -Infinity, -Infinity), l = []; c < h; c++)
                for (var l = d.getPrimitiveVertices(b[c], g, l), m = 0; m < l.length; m++) a.checkMinMax(e, j, l[m]);
            this.center.copy(e.add(j));
            this.center.mul(0.5);
            this.xExtent = j.x - this.center.x;
            this.yExtent = j.y - this.center.y;
            this.zExtent = j.z - this.center.z
        }
    };
    a.checkMinMax = function (a, g, b) {
        if (b.x < a.x) a.x = b.x;
        if (b.x > g.x) g.x = b.x;
        if (b.y < a.y) a.y = b.y;
        if (b.y > g.y) g.y = b.y;
        if (b.z < a.z) a.z = b.z;
        if (b.z > g.z) g.z = b.z
    };
    a.prototype.transform = function (d, g) {
        g === null && (g = new a);
        var b = this.corners;
        this.getCorners(b);
        for (var c = 0; c < b.length; c++) d.matrix.applyPostPoint(b[c]);
        for (var h = b[0].data[0], e = b[0].data[1], j = b[0].data[2], l = h, m = e, o = j, c = 1; c < b.length; c++) var p = b[c].data[0],
        n = b[c].data[1], s = b[c].data[2], h = Math.min(h, p), e = Math.min(e, n), j = Math.min(j, s), l = Math.max(l, p), m = Math.max(m, n), o = Math.max(o, s);
        b = (l + h) * 0.5;
        e = (m + e) * 0.5;
        j = (o + j) * 0.5;
        g.center.setd(b, e, j);
        g.xExtent = l - b;
        g.yExtent = m - e;
        g.zExtent = o - j;
        return g
    };
    a.prototype.getCorners = function (a) {
        if (!a || a.length !== 8)
            for (var a = [], g = 0; g < a.length; g++) a.push(new e);
        a[0].setd(this.center.data[0] +
            this.xExtent, this.center.data[1] + this.yExtent, this.center.data[2] + this.zExtent);
        a[1].setd(this.center.data[0] + this.xExtent, this.center.data[1] + this.yExtent, this.center.data[2] - this.zExtent);
        a[2].setd(this.center.data[0] + this.xExtent, this.center.data[1] - this.yExtent, this.center.data[2] + this.zExtent);
        a[3].setd(this.center.data[0] + this.xExtent, this.center.data[1] - this.yExtent, this.center.data[2] - this.zExtent);
        a[4].setd(this.center.data[0] - this.xExtent, this.center.data[1] + this.yExtent, this.center.data[2] +
            this.zExtent);
        a[5].setd(this.center.data[0] - this.xExtent, this.center.data[1] + this.yExtent, this.center.data[2] - this.zExtent);
        a[6].setd(this.center.data[0] - this.xExtent, this.center.data[1] - this.yExtent, this.center.data[2] + this.zExtent);
        a[7].setd(this.center.data[0] - this.xExtent, this.center.data[1] - this.yExtent, this.center.data[2] - this.zExtent);
        return a
    };
    a.prototype.whichSide = function (a) {
        var g = a.normal.data,
            b = this.center.data,
            i = Math.abs(this.xExtent * g[0]) + Math.abs(this.yExtent * g[1]) + Math.abs(this.zExtent *
                g[2]),
            a = g[0] * b[0] + g[1] * b[1] + g[2] * b[2] - a.constant;
        return a < -i ? c.Inside : a > i ? c.Outside : c.Intersects
    };
    a.prototype._pseudoDistance = function (a, g) {
        var b = a.normal.data,
            c = g.data;
        return b[0] * c[0] + b[1] * c[1] + b[2] * c[2] - a.constant
    };
    a.prototype._maxAxis = function (a) {
        return Math.max(Math.abs(a.x), Math.max(Math.abs(a.y), Math.abs(a.z)))
    };
    a.prototype.toString = function () {
        var a = Math.round(this.center.x * 10) / 10,
            g = Math.round(this.center.y * 10) / 10,
            b = Math.round(this.center.z * 10) / 10;
        return "[" + a + "," + g + "," + b + "] - [" + this.xExtent +
            "," + this.yExtent + "," + this.zExtent + "]"
    };
    a.prototype.intersects = function (a) {
        return a.intersectsBoundingBox(this)
    };
    a.prototype.intersectsBoundingBox = function (a) {
        return this.center.x + this.xExtent < a.center.x - a.xExtent || this.center.x - this.xExtent > a.center.x + a.xExtent ? !1 : this.center.y + this.yExtent < a.center.y - a.yExtent || this.center.y - this.yExtent > a.center.y + a.yExtent ? !1 : this.center.z + this.zExtent < a.center.z - a.zExtent || this.center.z - this.zExtent > a.center.z + a.zExtent ? !1 : !0
    };
    a.prototype.intersectsSphere = function (a) {
        return Math.abs(this.center.x -
            a.center.x) < a.radius + this.xExtent && Math.abs(this.center.y - a.center.y) < a.radius + this.yExtent && Math.abs(this.center.z - a.center.z) < a.radius + this.zExtent ? !0 : !1
    };
    a.prototype.testStaticAABBAABB = function (a, g) {
        var b = {
            mtvDistance: 1E10,
            mtvAxis: new e
        };
        if (!this.testAxisStatic(e.UNIT_X, this.center.x - this.xExtent, this.center.x + this.xExtent, a.center.x - a.xExtent, a.center.x + a.xExtent, b)) return !1;
        if (!this.testAxisStatic(e.UNIT_Y, this.center.y - this.yExtent, this.center.y + this.yExtent, a.center.y - a.yExtent, a.center.y +
            a.yExtent, b)) return !1;
        if (!this.testAxisStatic(e.UNIT_Z, this.center.z - this.zExtent, this.center.z + this.zExtent, a.center.z - a.zExtent, a.center.z + a.zExtent, b)) return !1;
        if (g) g.isIntersecting = !0, g.normal = b.mtvAxis, g.penetration = Math.sqrt(b.mtvDistance) * 1.001;
        return !0
    };
    a.prototype.testAxisStatic = function (a, g, b, c, h, k) {
        var j = e.dot(a, a);
        if (j < 1.0E-6) return !0;
        g = h - g;
        b -= c;
        if (g <= 0 || b <= 0) return !1;
        b = g < b ? g : -b;
        j = (new e).copy(a).mul(b / j);
        j = e.dot(j, j);
        if (j < k.mtvDistance) k.mtvDistance = j, k.mtvAxis = a;
        return !0
    };
    a.prototype.intersectsRay =
        function (d) {
            if (isNaN(this.center.x) || isNaN(this.center.y) || isNaN(this.center.z)) return !1;
            var g = this._compVect1.setv(d.origin).subv(this.center),
                d = d.direction,
                f = [0, Infinity],
                c = this.xExtent;
            if (c < b.ZERO_TOLERANCE && c >= 0) c = b.ZERO_TOLERANCE;
            var h = this.yExtent;
            if (h < b.ZERO_TOLERANCE && h >= 0) h = b.ZERO_TOLERANCE;
            var e = this.zExtent;
            if (e < b.ZERO_TOLERANCE && e >= 0) e = b.ZERO_TOLERANCE;
            return a.clip(d.data[0], -g.data[0] - c, f) && a.clip(-d.data[0], g.data[0] - c, f) && a.clip(d.data[1], -g.data[1] - h, f) && a.clip(-d.data[1], g.data[1] -
                h, f) && a.clip(d.data[2], -g.data[2] - e, f) && a.clip(-d.data[2], g.data[2] - e, f) && (f[0] !== 0 || f[1] !== Infinity) ? !0 : !1
    };
    a.prototype.intersectsRayWhere = function (d) {
        if (isNaN(this.center.x) || isNaN(this.center.y) || isNaN(this.center.z)) return null;
        var g = e.sub(d.origin, this.center, this._compVect1),
            f = d.direction,
            c = [0, Infinity],
            h = this.xExtent;
        if (h < b.ZERO_TOLERANCE && h >= 0) h = b.ZERO_TOLERANCE;
        var k = this.yExtent;
        if (k < b.ZERO_TOLERANCE && k >= 0) k = b.ZERO_TOLERANCE;
        var j = this.zExtent;
        if (j < b.ZERO_TOLERANCE && j >= 0) j = b.ZERO_TOLERANCE;
        if (a.clip(f.x, -g.x - h, c) && a.clip(-f.x, g.x - h, c) && a.clip(f.y, -g.y - k, c) && a.clip(-f.y, g.y - k, c) && a.clip(f.z, -g.z - j, c) && a.clip(-f.z, g.z - j, c) && (c[0] !== 0 || c[1] !== Infinity)) {
            if (c[1] > c[0]) return g = c, d = [(new e(d.direction)).mul(g[0]).add(d.origin), (new e(d.direction)).mul(g[1]).add(d.origin)], {
                distances: g,
                points: d
            };
            g = [c[0]];
            d = [(new e(d.direction)).mul(g[0]).add(d.origin)];
            return {
                distances: g,
                points: d
            }
        }
        return null
    };
    a.clip = function (a, g, b) {
        if (a > 0) {
            if (g > a * b[1]) return !1;
            g > a * b[0] && (b[0] = g / a);
            return !0
        } else if (a < 0) {
            if (g >
                a * b[0]) return !1;
            g > a * b[1] && (b[1] = g / a);
            return !0
        } else return g <= 0
    };
    a.prototype.merge = function (d) {
        return d instanceof a ? this.mergeBox(d.center, d.xExtent, d.yExtent, d.zExtent, this) : this.mergeBox(d.center, d.radius, d.radius, d.radius, this)
    };
    a.prototype.mergeBox = function (d, g, b, c, h) {
        h || (h = new a);
        var e = this._compVect1,
            j = this._compVect2;
        e.x = this.center.x - this.xExtent;
        if (e.x > d.x - g) e.x = d.x - g;
        e.y = this.center.y - this.yExtent;
        if (e.y > d.y - b) e.y = d.y - b;
        e.z = this.center.z - this.zExtent;
        if (e.z > d.z - c) e.z = d.z - c;
        j.x = this.center.x +
            this.xExtent;
        if (j.x < d.x + g) j.x = d.x + g;
        j.y = this.center.y + this.yExtent;
        if (j.y < d.y + b) j.y = d.y + b;
        j.z = this.center.z + this.zExtent;
        if (j.z < d.z + c) j.z = d.z + c;
        h.center.set(j).addv(e).muld(0.5, 0.5, 0.5);
        h.xExtent = j.x - h.center.x;
        h.yExtent = j.y - h.center.y;
        h.zExtent = j.z - h.center.z;
        return h
    };
    a.prototype.clone = function (d) {
        return d && d instanceof a ? (d.center.setv(this.center), d.xExtent = this.xExtent, d.yExtent = this.yExtent, d.zExtent = this.zExtent, d) : new a(this.center, this.xExtent, this.yExtent, this.zExtent)
    };
    return a
});
define("goo/renderer/BufferData", [], function () {
    function e(c, b) {
        this.data = c;
        this.target = b;
        this.glBuffer = null;
        this._dataUsage = "StaticDraw";
        this._dataNeedsRefresh = !1
    }
    e.prototype.setDataUsage = function (c) {
        this._dataUsage = c
    };
    e.prototype.setDataNeedsRefresh = function () {
        this._dataNeedsRefresh = !0
    };
    return e
});
define("goo/renderer/Util", [], function () {
    function e() {}
    e.getByteSize = function (c) {
        switch (c) {
        case "Byte":
            return 1;
        case "UnsignedByte":
            return 1;
        case "Short":
            return 2;
        case "UnsignedShort":
            return 2;
        case "Int":
            return 4;
        case "HalfFloat":
            return 2;
        case "Float":
            return 4;
        case "Double":
            return 8;
        default:
            throw "Unknown type: " + c;
        }
    };
    e.checkGLError = function (c) {
        for (var b = c.getError(), a = !1; b !== c.NO_ERROR;) {
            a = !0;
            if (b === c.INVALID_ENUM) console.error("An unacceptable value is specified for an enumerated argument. The offending command is ignored and has no other side effect than to set the error flag.");
            else if (b === c.INVALID_VALUE) console.error("A numeric argument is out of range. The offending command is ignored and has no other side effect than to set the error flag.");
            else if (b === c.INVALID_OPERATION) console.error("The specified operation is not allowed in the current state. The offending command is ignored and has no other side effect than to set the error flag.");
            else if (b === c.FRAMEBUFFER_COMPLETE) console.error("The command is trying to render to or read from the framebuffer while the currently bound framebuffer is not framebuffer complete (i.e. the return value from glCheckFramebufferStatus is not GL_FRAMEBUFFER_COMPLETE). The offending command is ignored and has no other side effect than to set the error flag.");
            else if (b === c.OUT_OF_MEMORY) throw "There is not enough memory left to execute the command. The state of the GL is undefined, except for the state of the error flags, after this error is recorded.";
            b = c.getError()
        }
        if (a) throw "Stopping due to error";
    };
    e.isPowerOfTwo = function (c) {
        return (c & c - 1) === 0
    };
    e.nearestPowerOfTwo = function (c) {
        return Math.pow(2, Math.ceil(Math.log(c) / Math.log(2)))
    };
    e.clone = function (c) {
        if (c === null || typeof c !== "object") return c;
        if (c instanceof Uint8Array) return c;
        if (c instanceof Date) {
            var b =
                new Date;
            b.setTime(c.getTime());
            return b
        }
        if (c instanceof Array) {
            for (var b = [], a = 0, d = c.length; a < d; ++a) b[a] = e.clone(c[a]);
            return b
        }
        if (c instanceof Object) {
            b = {};
            for (a in c) c.hasOwnProperty(a) && (b[a] = e.clone(c[a]));
            return b
        }
        throw Error("Unable to copy obj! Its type isn't supported.");
    };
    return e
});
define("goo/renderer/BufferUtils", [], function () {
    function e() {}
    e.createIndexBuffer = function (c, b) {
        var a;
        if (b < 256) a = new Uint8Array(c);
        else if (b < 65536) a = new Uint16Array(c);
        else throw Error("Maximum number of vertices is 65535. Got: " + b);
        return a
    };
    return e
});
define("goo/math/Vector2", ["goo/math/Vector"], function (e) {
    function c() {
        e.call(this, 2);
        arguments.length !== 0 ? this.set(arguments) : this.setd(0, 0)
    }
    c.prototype = Object.create(e.prototype);
    c.prototype.setupAliases([
        ["x", "u", "s"],
        ["y", "v", "t"]
    ]);
    c.ZERO = new c(0, 0);
    c.ONE = new c(1, 1);
    c.UNIT_X = new c(1, 0);
    c.UNIT_Y = new c(0, 1);
    c.add = function (b, a, d) {
        typeof b === "number" && (b = [b, b]);
        typeof a === "number" && (a = [a, a]);
        d || (d = new c);
        b = b.data || b;
        a = a.data || a;
        if (b.length !== 2 || a.length !== 2) throw {
            name: "Illegal Arguments",
            message: "The arguments are of incompatible sizes."
        };
        d.data[0] = b[0] + a[0];
        d.data[1] = b[1] + a[1];
        return d
    };
    c.prototype.add = function (b) {
        return c.add(this, b, this)
    };
    c.sub = function (b, a, d) {
        typeof b === "number" && (b = [b, b]);
        typeof a === "number" && (a = [a, a]);
        d || (d = new c);
        b = b.data || b;
        a = a.data || a;
        if (b.length !== 2 || a.length !== 2) throw {
            name: "Illegal Arguments",
            message: "The arguments are of incompatible sizes."
        };
        d.data[0] = b[0] - a[0];
        d.data[1] = b[1] - a[1];
        return d
    };
    c.prototype.sub = function (b) {
        return c.sub(this, b, this)
    };
    c.mul = function (b, a, d) {
        typeof b === "number" && (b = [b, b]);
        typeof a ===
            "number" && (a = [a, a]);
        d || (d = new c);
        b = b.data || b;
        a = a.data || a;
        if (b.length !== 2 || a.length !== 2) throw {
            name: "Illegal Arguments",
            message: "The arguments are of incompatible sizes."
        };
        d.data[0] = b[0] * a[0];
        d.data[1] = b[1] * a[1];
        return d
    };
    c.prototype.mul = function (b) {
        return c.mul(this, b, this)
    };
    c.div = function (b, a, d) {
        typeof b === "number" && (b = [b, b]);
        typeof a === "number" && (a = [a, a]);
        d || (d = new c);
        b = b.data || b;
        a = a.data || a;
        if (b.length !== 2 || a.length !== 2) throw {
            name: "Illegal Arguments",
            message: "The arguments are of incompatible sizes."
        };
        d.data[0] = b[0] / a[0];
        d.data[1] = b[1] / a[1];
        return d
    };
    c.prototype.div = function (b) {
        return c.div(this, b, this)
    };
    c.dot = function (b, a) {
        typeof b === "number" && (b = [b, b]);
        typeof a === "number" && (a = [a, a]);
        var d = b.data || b,
            g = a.data || a;
        if (d.length !== 2 || g.length !== 2) throw {
            name: "Illegal Arguments",
            message: "The arguments are of incompatible sizes."
        };
        var f = 0;
        f += d[0] * g[0];
        f += d[1] * g[1];
        return f
    };
    c.prototype.dot = function (b) {
        return c.dot(this, b)
    };
    c.prototype.setd = function (b, a) {
        this.data[0] = b;
        this.data[1] = a;
        return this
    };
    c.prototype.seta =
        function (b) {
            this.data[0] = b[0];
            this.data[1] = b[1];
            return this
    };
    c.prototype.setv = function (b) {
        this.data[0] = b.data[0];
        this.data[1] = b.data[1];
        return this
    };
    return c
});
define("goo/math/Vector4", ["goo/math/Vector"], function (e) {
    function c() {
        e.call(this, 4);
        arguments.length !== 0 ? this.set(arguments) : this.setd(0, 0, 0, 0)
    }
    c.prototype = Object.create(e.prototype);
    c.prototype.setupAliases([
        ["x", "r"],
        ["y", "g"],
        ["z", "b"],
        ["w", "a"]
    ]);
    c.ZERO = new c(0, 0, 0, 0);
    c.ONE = new c(1, 1, 1, 1);
    c.UNIT_X = new c(1, 0, 0, 0);
    c.UNIT_Y = new c(0, 1, 0, 0);
    c.UNIT_Z = new c(0, 0, 1, 0);
    c.UNIT_W = new c(0, 0, 0, 1);
    c.add = function (b, a, d) {
        typeof b === "number" && (b = [b, b, b, b]);
        typeof a === "number" && (a = [a, a, a, a]);
        d || (d = new c);
        b = b.data ||
            b;
        a = a.data || a;
        if (b.length !== 4 || a.length !== 4) throw {
            name: "Illegal Arguments",
            message: "The arguments are of incompatible sizes."
        };
        d.data[0] = b[0] + a[0];
        d.data[1] = b[1] + a[1];
        d.data[2] = b[2] + a[2];
        d.data[3] = b[3] + a[3];
        return d
    };
    c.prototype.add = function (b) {
        return c.add(this, b, this)
    };
    c.sub = function (b, a, d) {
        typeof b === "number" && (b = [b, b, b, b]);
        typeof a === "number" && (a = [a, a, a, a]);
        d || (d = new c);
        b = b.data || b;
        a = a.data || a;
        if (b.length !== 4 || a.length !== 4) throw {
            name: "Illegal Arguments",
            message: "The arguments are of incompatible sizes."
        };
        d.data[0] = b[0] - a[0];
        d.data[1] = b[1] - a[1];
        d.data[2] = b[2] - a[2];
        d.data[3] = b[3] - a[3];
        return d
    };
    c.prototype.sub = function (b) {
        return c.sub(this, b, this)
    };
    c.mul = function (b, a, d) {
        typeof b === "number" && (b = [b, b, b, b]);
        typeof a === "number" && (a = [a, a, a, a]);
        d || (d = new c);
        b = b.data || b;
        a = a.data || a;
        if (b.length !== 4 || a.length !== 4) throw {
            name: "Illegal Arguments",
            message: "The arguments are of incompatible sizes."
        };
        d.data[0] = b[0] * a[0];
        d.data[1] = b[1] * a[1];
        d.data[2] = b[2] * a[2];
        d.data[3] = b[3] * a[3];
        return d
    };
    c.prototype.mul = function (b) {
        return c.mul(this,
            b, this)
    };
    c.div = function (b, a, d) {
        typeof b === "number" && (b = [b, b, b, b]);
        typeof a === "number" && (a = [a, a, a, a]);
        d || (d = new c);
        b = b.data || b;
        a = a.data || a;
        if (b.length !== 4 || a.length !== 4) throw {
            name: "Illegal Arguments",
            message: "The arguments are of incompatible sizes."
        };
        d.data[0] = b[0] / a[0];
        d.data[1] = b[1] / a[1];
        d.data[2] = b[2] / a[2];
        d.data[3] = b[3] / a[3];
        return d
    };
    c.prototype.div = function (b) {
        return c.div(this, b, this)
    };
    c.dot = function (b, a) {
        typeof b === "number" && (b = [b, b, b, b]);
        typeof a === "number" && (a = [a, a, a, a]);
        var d = b.data || b,
            g = a.data || a;
        if (d.length !== 4 || g.length !== 4) throw {
            name: "Illegal Arguments",
            message: "The arguments are of incompatible sizes."
        };
        var f = 0;
        f += d[0] * g[0];
        f += d[1] * g[1];
        f += d[2] * g[2];
        f += d[3] * g[3];
        return f
    };
    c.prototype.dot = function (b) {
        return c.dot(this, b)
    };
    c.prototype.lerp = function (b, a) {
        this.x = (1 - a) * this.x + a * b.x;
        this.y = (1 - a) * this.y + a * b.y;
        this.z = (1 - a) * this.z + a * b.z;
        this.w = (1 - a) * this.w + a * b.w;
        return this
    };
    c.prototype.setd = function (b, a, d, g) {
        this.data[0] = b;
        this.data[1] = a;
        this.data[2] = d;
        this.data[3] = g;
        return this
    };
    c.prototype.seta = function (b) {
        this.data[0] = b[0];
        this.data[1] = b[1];
        this.data[2] = b[2];
        this.data[3] = b[3];
        return this
    };
    c.prototype.setv = function (b) {
        this.data[0] = b.data[0];
        this.data[1] = b.data[1];
        this.data[2] = b.data[2];
        this.data[3] = b.data[3];
        return this
    };
    return c
});
define("goo/renderer/MeshData", "goo/renderer/BufferData,goo/renderer/Util,goo/renderer/BufferUtils,goo/math/Vector2,goo/math/Vector3,goo/math/Vector4".split(","), function (e, c, b, a, d, g) {
    function f(a, d, g) {
        this.attributeMap = a;
        this.vertexCount = d !== void 0 ? d : 0;
        this.indexCount = g !== void 0 ? g : 0;
        this.primitiveCounts = [0];
        this.indexData = this.vertexData = null;
        this.dataViews = {};
        this.indexLengths = null;
        this.indexModes = ["Triangles"];
        this.type = f.MESH;
        this.rebuildData(this.vertexCount, this.indexCount)
    }

    function i(a) {
        for (var d = {}, g = 0; g < a.length; g++) {
            var b = a[g];
            if (o[b] !== void 0) d[b] = c.clone(o[b]);
            else throw "No default attribute named: " + b;
        }
        return d
    }
    var h = window.Uint8ClampedArray;
    f.MESH = 0;
    f.SKINMESH = 1;
    f.prototype.rebuildData = function (a, d, g) {
        var b = {}, f = null;
        if (g) {
            for (var c in this.attributeMap) {
                var i = this.dataViews[c];
                i && (b[c] = i)
            }
            if (this.indexData) f = this.indexData.data
        }
        this.rebuildVertexData(a);
        this.rebuildIndexData(d);
        if (g) {
            for (c in this.attributeMap)
                if (a = b[c]) i = this.dataViews[c], i.set(a);
            f && this.indexData.data.set(f)
        }
    };
    f.prototype.rebuildVertexData = function (a) {
        if (!isNaN(a)) this._vertexCountStore = this.vertexCount = a;
        if (this.vertexCount > 0) {
            var a = 0,
                d;
            for (d in this.attributeMap) {
                var g = this.attributeMap[d];
                a += c.getByteSize(g.type) * g.count
            }
            this.vertexData = new e(new ArrayBuffer(a * this.vertexCount), "ArrayBuffer");
            this.generateAttributeData()
        }
    };
    f.prototype.rebuildIndexData = function (a) {
        if (a !== void 0) this.indexCount = a;
        if (this.indexCount > 0) a = b.createIndexBuffer(this.indexCount, this.vertexCount), this.indexData = new e(a, "ElementArrayBuffer")
    };
    f.prototype.setVertexDataUpdated = function () {
        this.vertexData._dataNeedsRefresh = !0
    };
    f.prototype.getSectionCount = function () {
        return this.indexLengths ? this.indexLengths.length : 1
    };
    f.prototype.getPrimitiveCount = function (a) {
        return a >= 0 && a < this.primitiveCounts.length ? this.primitiveCounts[a] : 0
    };
    f.prototype.getPrimitiveVertices = function (a, g, b) {
        var c = this.getPrimitiveCount(g);
        if (a >= c || a < 0) throw Error("Invalid primitiveIndex '" + a + "'.  Count is " + c);
        c = f.getVertexCount(this.indexModes[g]);
        if (!b || b.length < c) b = [];
        for (var i = this.getAttributeBuffer(f.POSITION), h = 0; h < c; h++) {
            b[h] || (b[h] = new d);
            var e = this.getIndexBuffer() ? this.getIndexBuffer()[this.getVertexIndex(a, h, g)] : this.getVertexIndex(a, h, g);
            b[h].x = i[e * 3 + 0];
            b[h].y = i[e * 3 + 1];
            b[h].z = i[e * 3 + 2]
        }
        return b
    };
    f.prototype.getVertexIndex = function (a, d, g) {
        for (var b = 0, c = 0; c < g; c++) b += this.indexLengths[c];
        switch (this.indexModes[g]) {
        case "Triangles":
            b += a * 3 + d;
            break;
        case "TriangleStrip":
            b += a + d;
            break;
        case "TriangleFan":
            b += d === 0 ? 0 : a + d;
            break;
        case "Points":
            b += a;
            break;
        case "Lines":
            b +=
                a * 2 + d;
            break;
        case "LineStrip":
        case "LineLoop":
            b += a + d;
            break;
        default:
            return f.logger.warning("unimplemented index mode: " + this.indexModes[g]), -1
        }
        return b
    };
    f.prototype.getTotalPrimitiveCount = function () {
        for (var a = 0, d = 0, g = this.primitiveCounts.length; d < g; d++) a += this.primitiveCounts[d];
        return a
    };
    f.prototype.updatePrimitiveCounts = function () {
        var a = this.indexData ? this.indexData.data.length : this.vertexCount,
            d = this.getSectionCount();
        if (this.primitiveCounts.length !== d) this.primitiveCounts = [];
        for (var g = 0; g < d; g++) {
            var b =
                f.getPrimitiveCount(this.indexModes[g], this.indexLengths ? this.indexLengths[g] : a);
            this.primitiveCounts[g] = b
        }
    };
    f.getPrimitiveCount = function (a, d) {
        switch (a) {
        case "Triangles":
            return d / 3;
        case "TriangleFan":
        case "TriangleStrip":
            return d - 2;
        case "Lines":
            return d / 2;
        case "LineStrip":
            return d - 1;
        case "LineLoop":
            return d;
        case "Points":
            return d
        }
        throw Error("unimplemented index mode: " + a);
    };
    f.getVertexCount = function (a) {
        switch (a) {
        case "Triangles":
        case "TriangleFan":
        case "TriangleStrip":
            return 3;
        case "Lines":
        case "LineStrip":
        case "LineLoop":
            return 2;
        case "Points":
            return 1
        }
        throw Error("unimplemented index mode: " + a);
    };
    var k = {
        Byte: Int8Array,
        UnsignedByte: Uint8Array,
        UnsignedByteClamped: h,
        Short: Int16Array,
        UnsignedShort: Uint16Array,
        Int: Int32Array,
        UnsignedInt: Uint32Array,
        Float: Float32Array
    };
    f.prototype.generateAttributeData = function () {
        var a = this.vertexData.data,
            d, g = 0,
            b;
        for (b in this.attributeMap) {
            d = this.attributeMap[b];
            d.offset = g;
            var f = this.vertexCount * d.count;
            g += f * c.getByteSize(d.type);
            var i = k[d.type];
            if (i) d = new i(a, d.offset, f);
            else throw "Unsupported DataType: " +
                d.type;
            this.dataViews[b] = d
        }
    };
    f.prototype.makeInterleavedData = function () {
        var a = 0,
            d = 0,
            g;
        for (g in this.attributeMap) {
            var b = this.attributeMap[g];
            b.offset = a;
            a += b.count * c.getByteSize(b.type)
        }
        var f = new e(new ArrayBuffer(a * this.vertexCount), this.vertexData.target);
        f._dataUsage = this.vertexData._dataUsage;
        f._dataNeedsRefresh = !0;
        var i = new DataView(f.data);
        for (g in this.attributeMap) {
            var h = this.dataViews[g],
                b = this.attributeMap[g];
            b.stride = a;
            for (var d = b.offset, j = b.count, k = c.getByteSize(b.type), b = this.getDataMethod(b.type),
                    b = i[b], l = 0; l < this.vertexCount; l++)
                for (var m = 0; m < j; m++) b.apply(i, [d + a * l + m * k, h[l * j + m], !0])
        }
        this.vertexData = f
    };
    f.prototype.getDataMethod = function (a) {
        switch (a) {
        case "Byte":
            return "setInt8";
        case "UnsignedByte":
            return "setUInt8";
        case "Short":
            return "setInt16";
        case "UnsignedShort":
            return "setUInt16";
        case "Int":
            return "setInt32";
        case "HalfFloat":
            return "setInt16";
        case "Float":
            return "setFloat32"
        }
    };
    f.prototype.getAttributeBuffer = function (a) {
        return this.dataViews[a]
    };
    f.prototype.getIndexData = function () {
        return this.indexData
    };
    f.prototype.getIndexBuffer = function () {
        return this.indexData !== null ? this.indexData.data : null
    };
    f.prototype.getIndexLengths = function () {
        return this.indexLengths
    };
    f.prototype.getIndexModes = function () {
        return this.indexModes
    };
    f.prototype.resetVertexCount = function () {
        this.vertexCount = this.vertexCountStore
    };
    f.prototype.applyTransform = function (a, g) {
        var b = new d,
            c = this.getAttributeBuffer(a),
            i = c.length;
        if (a === f.POSITION)
            for (var h = 0; h < i; h += 3) b.setd(c[h + 0], c[h + 1], c[h + 2]), g.matrix.applyPostPoint(b), c[h + 0] = b[0], c[h +
                1] = b[1], c[h + 2] = b[2];
        else if (a === f.NORMAL)
            for (h = 0; h < i; h += 3) b.setd(c[h + 0], c[h + 1], c[h + 2]), g.rotation.applyPost(b), c[h + 0] = b[0], c[h + 1] = b[1], c[h + 2] = b[2];
        else if (a === f.TANGENT)
            for (h = 0; h < i; h += 3) b.setd(c[h + 0], c[h + 1], c[h + 2]), g.rotation.applyPost(b), c[h + 0] = b[0], c[h + 1] = b[1], c[h + 2] = b[2];
        return this
    };
    f.prototype.applyFunction = function (b, f) {
        var c, i, h = this.getAttributeBuffer(b),
            e = h.length;
        switch (this.attributeMap[b].count) {
        case 1:
            for (var j = 0; j < e; j++) h[j] = f(h[j]);
            break;
        case 2:
            c = new a;
            for (j = 0; j < e; j += 2) c.setd(h[j + 0],
                h[j + 1]), i = f(c), h[j + 0] = i[0], h[j + 1] = i[1];
            break;
        case 3:
            c = new d;
            for (j = 0; j < e; j += 3) c.setd(h[j + 0], h[j + 1], h[j + 2]), i = f(c), h[j + 0] = i[0], h[j + 1] = i[1], h[j + 2] = i[2];
            break;
        case 4:
            c = new g;
            for (j = 0; j < e; j += 4) c.setd(h[j + 0], h[j + 1], h[j + 2], h[j + 3]), i = f(c), h[j + 0] = i[0], h[j + 1] = i[1], h[j + 2] = i[2], h[j + 3] = i[3]
        }
        return this
    };
    f.prototype.getNormalsMeshData = function (a) {
        if (this.getAttributeBuffer("POSITION") !== void 0 && this.getAttributeBuffer("NORMAL") !== void 0) {
            for (var a = a !== void 0 ? a : 1, d = [], g = [], b = this.dataViews.POSITION.length / 3, c = 0; c <
                b; c++) d.push(this.dataViews.POSITION[c * 3 + 0], this.dataViews.POSITION[c * 3 + 1], this.dataViews.POSITION[c * 3 + 2], this.dataViews.POSITION[c * 3 + 0] + this.dataViews.NORMAL[c * 3 + 0] * a, this.dataViews.POSITION[c * 3 + 1] + this.dataViews.NORMAL[c * 3 + 1] * a, this.dataViews.POSITION[c * 3 + 2] + this.dataViews.NORMAL[c * 3 + 2] * a);
            for (c = 0; c < b * 2; c += 2) g.push(c, c + 1);
            a = new f(f.defaultMap([f.POSITION]), d.length, g.length);
            a.getAttributeBuffer(f.POSITION).set(d);
            a.getIndexBuffer().set(g);
            a.indexModes[0] = "Lines";
            return a
        }
    };
    f.prototype.buildWireframeData =
        function () {
            var a = c.clone(this.attributeMap),
                d = new f(a, this.vertexCount, 0);
            d.indexModes[0] = "Lines";
            var g = this.getIndexBuffer(),
                b = [],
                i = 0;
            this.updatePrimitiveCounts();
            for (var h = 0; h < this.getSectionCount(); h++)
                for (var e = this.indexModes[h], j = this.getPrimitiveCount(h), k = 0; k < j; k++) switch (e) {
                case "Triangles":
                case "TriangleFan":
                case "TriangleStrip":
                    var l = g[this.getVertexIndex(k, 0, h)],
                        m = g[this.getVertexIndex(k, 1, h)],
                        o = g[this.getVertexIndex(k, 2, h)];
                    b[i + 0] = l;
                    b[i + 1] = m;
                    b[i + 2] = m;
                    b[i + 3] = o;
                    b[i + 4] = o;
                    b[i + 5] = l;
                    i += 6;
                    break;
                case "Lines":
                case "LineStrip":
                    l = g[this.getVertexIndex(k, 0, h)];
                    m = g[this.getVertexIndex(k, 1, h)];
                    b[i + 0] = l;
                    b[i + 1] = m;
                    i += 2;
                    break;
                case "LineLoop":
                    l = g[this.getVertexIndex(k, 0, h)], m = g[this.getVertexIndex(k, 1, h)], k === j - 1 && (m = g[this.getVertexIndex(0, 0, h)]), b[i + 0] = l, b[i + 1] = m, i += 2
                }
            if (i > 0) {
                d.rebuildIndexData(i);
                for (var y in a) d.getAttributeBuffer(y).set(this.getAttributeBuffer(y));
                d.getIndexBuffer().set(b)
            }
            d.paletteMap = this.paletteMap;
            d.weightsPerVertex = this.weightsPerVertex;
            return d
    };
    var j = new d,
        l = new d,
        m = new d;
    f.prototype.buildFlatMeshData = function () {
        var a = [],
            d = this.getIndexBuffer();
        if (d === null) return console.debug("No indices, probably a point mesh"), this;
        if (d.length > 65535) return console.warn("Mesh too big, cannot build flat mesh data"), this;
        var g = c.clone(this.attributeMap),
            b = {}, i;
        for (i in g) b[i] = {
            oldBuffer: this.getAttributeBuffer(i),
            values: []
        };
        var h = 0;
        this.updatePrimitiveCounts();
        for (var e = 0; e < this.getSectionCount(); e++)
            for (var k = this.indexModes[e], o = this.getPrimitiveCount(e), z = !1, v = 0; v < o; v++) switch (k) {
            case "TriangleStrip":
                z =
                    v % 2 === 1 ? !0 : !1;
            case "Triangles":
            case "TriangleFan":
                var A = d[this.getVertexIndex(v, 0, e)],
                    y = d[this.getVertexIndex(v, 1, e)],
                    B = d[this.getVertexIndex(v, 2, e)];
                if (z) var C = B,
                B = y, y = C;
                for (i in b)
                    if (i !== f.NORMAL) {
                        for (var C = g[i].count, F = 0; F < C; F++) b[i].values[h * C + F] = b[i].oldBuffer[A * C + F], b[i].values[(h + 1) * C + F] = b[i].oldBuffer[y * C + F], b[i].values[(h + 2) * C + F] = b[i].oldBuffer[B * C + F];
                        i === f.POSITION && (j.setd(b[i].values[h * 3], b[i].values[h * 3 + 1], b[i].values[h * 3 + 2]), l.setd(b[i].values[(h + 1) * 3], b[i].values[(h + 1) * 3 + 1], b[i].values[(h +
                            1) * 3 + 2]), m.setd(b[i].values[(h + 2) * 3], b[i].values[(h + 2) * 3 + 1], b[i].values[(h + 2) * 3 + 2]), l.subv(j), m.subv(j), l.cross(m).normalize(), b[f.NORMAL] && (b[f.NORMAL].values[h * 3] = l.data[0], b[f.NORMAL].values[h * 3 + 1] = l.data[1], b[f.NORMAL].values[h * 3 + 2] = l.data[2], b[f.NORMAL].values[(h + 1) * 3] = l.data[0], b[f.NORMAL].values[(h + 1) * 3 + 1] = l.data[1], b[f.NORMAL].values[(h + 1) * 3 + 2] = l.data[2], b[f.NORMAL].values[(h + 2) * 3] = l.data[0], b[f.NORMAL].values[(h + 2) * 3 + 1] = l.data[1], b[f.NORMAL].values[(h + 2) * 3 + 2] = l.data[2]))
                    }
                a.push(a.length);
                a.push(a.length);
                a.push(a.length);
                h += 3
            }
        if (a.length === 0) return console.warn("Could not build flat data"), this;
        d = new f(g, a.length, a.length);
        for (i in b) d.getAttributeBuffer(i).set(b[i].values);
        d.getIndexBuffer().set(a);
        d.paletteMap = this.paletteMap;
        d.weightPerVertex = this.weightsPerVertex;
        return d
    };
    f.POSITION = "POSITION";
    f.NORMAL = "NORMAL";
    f.COLOR = "COLOR";
    f.TANGENT = "TANGENT";
    f.TEXCOORD0 = "TEXCOORD0";
    f.TEXCOORD1 = "TEXCOORD1";
    f.TEXCOORD2 = "TEXCOORD2";
    f.TEXCOORD3 = "TEXCOORD3";
    f.WEIGHTS = "WEIGHTS";
    f.JOINTIDS = "JOINTIDS";
    f.createAttribute = function (a, d, g) {
        return {
            count: a,
            type: d,
            stride: 0,
            offset: 0,
            normalized: g !== void 0 ? g : !1
        }
    };
    var o = {
        POSITION: f.createAttribute(3, "Float"),
        NORMAL: f.createAttribute(3, "Float"),
        COLOR: f.createAttribute(4, "Float"),
        TANGENT: f.createAttribute(4, "Float"),
        TEXCOORD0: f.createAttribute(2, "Float"),
        TEXCOORD1: f.createAttribute(2, "Float"),
        TEXCOORD2: f.createAttribute(2, "Float"),
        TEXCOORD3: f.createAttribute(2, "Float"),
        WEIGHTS: f.createAttribute(4, "Float"),
        JOINTIDS: f.createAttribute(4, "Short")
    };
    f.defaultMap =
        function (a) {
            return a === void 0 ? i(Object.keys(o)) : i(a)
    };
    return f
});
define("goo/renderer/bounds/BoundingSphere", ["goo/math/Vector3", "goo/math/MathUtils", "goo/renderer/bounds/BoundingVolume", "goo/renderer/MeshData"], function (e, c, b, a) {
    function d(a, d) {
        b.call(this, a);
        this.radius = d !== void 0 ? d : 1;
        this.vec = new e
    }
    d.prototype = Object.create(b.prototype);
    d.prototype.constructor = d;
    d.prototype.computeFromPoints = function (a) {
        var d = this.min,
            b = this.max,
            c = this.vec;
        d.setd(Infinity, Infinity, Infinity);
        b.setd(-Infinity, -Infinity, -Infinity);
        for (var e, j, l, m = 0; m < a.length; m += 3) e = a[m + 0], j = a[m +
            1], l = a[m + 2], d.x = e < d.x ? e : d.x, d.y = j < d.y ? j : d.y, d.z = l < d.z ? l : d.z, b.x = e > b.x ? e : b.x, b.y = j > b.y ? j : b.y, b.z = l > b.z ? l : b.z;
        d = b.addv(d).div(2);
        for (m = b = 0; m < a.length; m += 3) c.setd(a[m], a[m + 1], a[m + 2]), e = c.subv(d).lengthSquared(), e > b && (b = e);
        this.radius = Math.sqrt(b);
        this.center.setv(d)
    };
    d.prototype.computeFromPrimitives = function (d, b, c, h, k) {
        if (!(k - h <= 0)) {
            for (var j = [], l = [], m = a.getVertexCount(d.indexModes[b]), o = 0; h < k; h++)
                for (var l = d.getPrimitiveVertices(c[h], b, l), p = 0; p < m; p++) j[o++] = (new e).set(l[p]);
            this.averagePoints(j)
        }
    };
    d.prototype.averagePoints = function (a) {
        this.center.set(a[0]);
        for (var d = 1; d < a.length; d++) this.center.add(a[d]);
        this.center.mul(1 / a.length);
        for (var b = 0, d = 0; d < a.length; d++) {
            var c = e.sub(a[d], this.center, this.vec).lengthSquared();
            c > b && (b = c)
        }
        this.radius = Math.sqrt(b) + 1.0E-5
    };
    d.prototype.transform = function (a, b) {
        b === null && (b = new d);
        a.applyForward(this.center, b.center);
        b.radius = Math.abs(this._maxAxis(a.scale) * this.radius);
        return b
    };
    d.prototype.whichSide = function (a) {
        var d = a.normal.data,
            c = this.center.data,
            a = d[0] *
                c[0] + d[1] * c[1] + d[2] * c[2] - a.constant;
        return a < -this.radius ? b.Inside : a > this.radius ? b.Outside : b.Intersects
    };
    d.prototype._pseudoDistance = function (a, d) {
        return a.normal.x * d.x + a.normal.y * d.y + a.normal.z * d.z - a.constant
    };
    d.prototype._maxAxis = function (a) {
        return Math.max(Math.abs(a.x), Math.max(Math.abs(a.y), Math.abs(a.z)))
    };
    d.prototype.toString = function () {
        var a = Math.round(this.center.x * 10) / 10,
            d = Math.round(this.center.y * 10) / 10,
            b = Math.round(this.center.z * 10) / 10,
            c = Math.round(this.radius * 10) / 10;
        return "[" + a + "," + d +
            "," + b + "] - " + c
    };
    d.prototype.intersects = function (a) {
        return a.intersectsSphere(this)
    };
    d.prototype.intersectsBoundingBox = function (a) {
        return Math.abs(a.center.x - this.center.x) < this.radius + a.xExtent && Math.abs(a.center.y - this.center.y) < this.radius + a.yExtent && Math.abs(a.center.z - this.center.z) < this.radius + a.zExtent ? !0 : !1
    };
    d.prototype.intersectsSphere = function (a) {
        var d = this.vec.setv(this.center).subv(a.center),
            a = this.radius + a.radius;
        return d.dot(d) <= a * a
    };
    d.prototype.intersectsRay = function (a) {
        if (!this.center) return !1;
        var d = (new e).copy(a.origin).sub(this.center),
            b = d.dot(d) - this.radius * this.radius;
        if (b <= 0) return !0;
        a = a.direction.dot(d);
        return a >= 0 ? !1 : a * a >= b
    };
    d.prototype.intersectsRayWhere = function (a) {
        var d = (new e).copy(a.origin).sub(this.center),
            b = d.dot(d) - this.radius * this.radius;
        if (b <= 0) return d = a.direction.dot(d), b = Math.sqrt(d * d - b), d = [b - d], a = [(new e).copy(a.direction).mul(d[0]).add(a.origin)], {
            distances: d,
            points: a
        };
        d = a.direction.dot(d);
        if (d >= 0) return null;
        b = d * d - b;
        if (b < 0) return null;
        else if (b >= 1.0E-5) return b =
            Math.sqrt(b), d = [-d - b, -d + b], a = [(new e).copy(a.direction).mul(d[0]).add(a.origin), (new e).copy(a.direction).mul(d[1]).add(a.origin)], {
                distances: d,
                points: a
        };
        d = [-d];
        a = [(new e).copy(a.direction).mul(d[0]).add(a.origin)];
        return {
            distances: d,
            points: a
        }
    };
    d.prototype.merge = function (a) {
        if (a instanceof d) return this.mergeSphere(a.center, a.radius, this);
        else {
            var b = this.vec.setd(a.xExtent, a.yExtent, a.zExtent).length();
            return this.mergeSphere(a.center, b, this)
        }
    };
    d.prototype.mergeSphere = function (a, b, i) {
        i || (i = new d);
        var h = this.vec.setv(a).subv(this.center),
            e = h.lengthSquared(),
            j = b - this.radius;
        if (j * j >= e) return j <= 0 ? (i.center.setv(this.center), i.radius = this.radius) : (i.center.setv(a), i.radius = b), i;
        a = Math.sqrt(e);
        e = i.center;
        a > c.EPSILON && e.addv(h.mul((a + j) / (2 * a)));
        i.radius = 0.5 * (a + this.radius + b);
        return i
    };
    d.prototype.clone = function (a) {
        return a && a instanceof d ? (a.center.setv(this.center), a.radius = this.radius, a) : new d(this.center, this.radius)
    };
    return d
});
define("goo/math/Matrix", ["goo/math/MathUtils"], function (e) {
    function c(b, a) {
        this.rows = b || 0;
        this.cols = a || 0;
        this.data = new Float32Array(this.rows * this.cols)
    }
    c.prototype.setupAliases = function (b) {
        for (var a = this, d = 0; d < b.length; d++)(function (g) {
            for (var f = 0; f < b[g].length; f++) Object.defineProperty(a, b[g][f], {
                get: function () {
                    return this.data[g]
                },
                set: function (a) {
                    this.data[g] = a
                }
            });
            Object.defineProperty(a, d, {
                get: function () {
                    return this.data[g]
                },
                set: function (a) {
                    this.data[g] = a
                }
            })
        })(d)
    };
    c.add = function (b, a, d) {
        var g =
            b.rows,
            f = b.cols;
        d || (d = new c(g, f));
        if (a instanceof c) {
            if (a.rows !== g || a.cols !== f || d.rows !== g || d.cols !== f) throw {
                name: "Illegal Arguments",
                message: "The arguments are of incompatible sizes."
            };
            for (g = 0; g < b.data.length; g++) d.data[g] = b.data[g] + a.data[g]
        } else {
            if (d.rows !== g || d.cols !== f) throw {
                name: "Illegal Arguments",
                message: "The arguments are of incompatible sizes."
            };
            for (g = 0; g < b.data.length; g++) d.data[g] = b.data[g] + a
        }
        return d
    };
    c.prototype.add = function (b) {
        return c.add(this, b, this)
    };
    c.sub = function (b, a, d) {
        var g =
            b.rows,
            f = b.cols;
        d || (d = new c(g, f));
        if (a instanceof c) {
            if (a.rows !== g || a.cols !== f || d.rows !== g || d.cols !== f) throw {
                name: "Illegal Arguments",
                message: "The arguments are of incompatible sizes."
            };
            for (g = 0; g < b.data.length; g++) d.data[g] = b.data[g] - a.data[g]
        } else {
            if (d.rows !== g || d.cols !== f) throw {
                name: "Illegal Arguments",
                message: "The arguments are of incompatible sizes."
            };
            for (g = 0; g < b.data.length; g++) d.data[g] = b.data[g] - a
        }
        return d
    };
    c.prototype.sub = function (b) {
        return c.sub(this, b, this)
    };
    c.mul = function (b, a, d) {
        var g =
            b.rows,
            f = b.cols;
        d || (d = new c(g, f));
        if (a instanceof c) {
            if (a.rows !== g || a.cols !== f || d.rows !== g || d.cols !== f) throw {
                name: "Illegal Arguments",
                message: "The arguments are of incompatible sizes."
            };
            for (g = 0; g < b.data.length; g++) d.data[g] = b.data[g] * a.data[g]
        } else {
            if (d.rows !== g || d.cols !== f) throw {
                name: "Illegal Arguments",
                message: "The arguments are of incompatible sizes."
            };
            for (g = 0; g < b.data.length; g++) d.data[g] = b.data[g] * a
        }
        return d
    };
    c.prototype.mul = function (b) {
        return c.mul(this, b, this)
    };
    c.div = function (b, a, d) {
        var g =
            b.rows,
            f = b.cols;
        d || (d = new c(g, f));
        if (a instanceof c) {
            if (a.rows !== g || a.cols !== f || d.rows !== g || d.cols !== f) throw {
                name: "Illegal Arguments",
                message: "The arguments are of incompatible sizes."
            };
            for (g = 0; g < b.data.length; g++) d.data[g] = b.data[g] / a.data[g]
        } else {
            if (d.rows !== g || d.cols !== f) throw {
                name: "Illegal Arguments",
                message: "The arguments are of incompatible sizes."
            };
            a = 1 / a;
            for (g = 0; g < b.data.length; g++) d.data[g] = b.data[g] * a
        }
        return d
    };
    c.prototype.div = function (b) {
        return c.div(this, b, this)
    };
    c.combine = function (b, a,
        d) {
        var g = b.rows,
            f = a.cols,
            i = b.cols = a.rows;
        d || (d = new c(g, f));
        if (b.cols !== i || a.rows !== i || d.rows !== g || d.cols !== f) throw {
            name: "Illegal Arguments",
            message: "The arguments are of incompatible sizes."
        };
        if (d === b || d === a) return c.copy(c.combine(b, a), d);
        for (var h = 0; h < f; h++)
            for (var e = h * g, j = 0; j < g; j++) {
                for (var l = 0, m = 0; m < i; m++) l += b.data[m * b.rows + j] * a.data[h * a.rows + m];
                d.data[e + j] = l
            }
        return d
    };
    c.prototype.combine = function (b) {
        return c.combine(this, b, this)
    };
    c.transpose = function (b, a) {
        var d = b.cols,
            g = b.rows;
        a || (a = new c(d,
            g));
        if (a.rows !== d || a.cols !== g) throw {
            name: "Illegal Arguments",
            message: "The arguments are of incompatible sizes."
        };
        if (a === b) return c.copy(c.transpose(b), a);
        for (var f = 0; f < g; f++)
            for (var i = f * d, h = 0; h < d; h++) a.data[i + h] = b.data[h * g + f];
        return a
    };
    c.prototype.transpose = function () {
        return c.transpose(this, this)
    };
    c.copy = function (b, a) {
        var d = b.rows,
            g = b.cols;
        a || (a = new c(d, g));
        if (a.rows !== d || a.cols !== g) throw {
            name: "Illegal Arguments",
            message: "The arguments are of incompatible sizes."
        };
        a.data.set(b.data);
        return a
    };
    c.prototype.copy =
        function (b) {
            return c.copy(b, this)
    };
    c.equals = function (b, a) {
        if (b.rows !== a.rows || b.cols !== a.cols) return !1;
        for (var d = 0; d < b.data.length; d++)
            if (Math.abs(b.data[d] - a.data[d]) > e.EPSILON) return !1;
        return !0
    };
    c.prototype.equals = function (b) {
        return c.equals(this, b)
    };
    c.prototype.isOrthogonal = function () {
        for (var b = 0; b < this.cols; b++)
            for (var a = b + 1; a < this.cols; a++) {
                for (var d = b * this.rows, g = a * this.rows, f = 0, c = 0; c < this.rows; c++) f += this.data[d + c] * this.data[g + c];
                if (Math.abs(f) > e.EPSILON) return !1
            }
        return !0
    };
    c.prototype.isNormal =
        function () {
            for (var b = 0; b < this.cols; b++) {
                for (var a = b * this.rows, d = 0, g = 0; g < this.rows; g++) d += this.data[a + g] * this.data[a + g];
                if (Math.abs(d - 1) > e.EPSILON) return !1
            }
            return !0
    };
    c.prototype.isOrthonormal = function () {
        return this.isOrthogonal() && this.isNormal()
    };
    c.prototype.clone = function () {
        return c.copy(this)
    };
    c.prototype.set = function () {
        if (arguments.length === 1 && typeof arguments[0] === "object")
            if (arguments[0] instanceof c) this.copy(arguments[0]);
            else
                for (var b = 0; b < arguments[0].length; b++) this.data[b] = arguments[0][b];
            else
                for (b = 0; b < arguments.length; b++) this.data[b] = arguments[b];
        return this
    };
    c.prototype.toString = function () {
        for (var b = "", a = 0; a < this.cols; a++) {
            var d = a * this.rows;
            b += "[";
            for (var g = 0; g < this.rows; g++) b += this.data[d + g], b += g !== this.rows - 1 ? ", " : "";
            b += a !== this.cols - 1 ? "], " : "]"
        }
        return b
    };
    return c
});
define("goo/math/Matrix3x3", ["goo/math/MathUtils", "goo/math/Matrix", "goo/math/Vector3"], function (e, c, b) {
    function a() {
        c.call(this, 3, 3);
        arguments.length === 0 ? this.setIdentity() : this.set(arguments);
        this._tempX = new b;
        this._tempY = new b;
        this._tempZ = new b
    }
    a.prototype = Object.create(c.prototype);
    a.prototype.setupAliases([
        ["e00"],
        ["e10"],
        ["e20"],
        ["e01"],
        ["e11"],
        ["e21"],
        ["e02"],
        ["e12"],
        ["e22"]
    ]);
    a.IDENTITY = new a(1, 0, 0, 0, 1, 0, 0, 0, 1);
    a.add = function (d, b, f) {
        f || (f = new a);
        var c = f.data,
            d = d.data;
        b instanceof a ? (b = b.data,
            c[0] = d[0] + b[0], c[1] = d[1] + b[1], c[2] = d[2] + b[2], c[3] = d[3] + b[3], c[4] = d[4] + b[4], c[5] = d[5] + b[5], c[6] = d[6] + b[6], c[7] = d[7] + b[7], c[8] = d[8] + b[8]) : (c[0] = d[0] + b, c[1] = d[1] + b, c[2] = d[2] + b, c[3] = d[3] + b, c[4] = d[4] + b, c[5] = d[5] + b, c[6] = d[6] + b, c[7] = d[7] + b, c[8] = d[8] + b);
        return f
    };
    a.prototype.add = function (d) {
        return a.add(this, d, this)
    };
    a.sub = function (d, b, f) {
        f || (f = new a);
        var c = f.data,
            d = d.data;
        b instanceof a ? (b = b.data, c[0] = d[0] - b[0], c[1] = d[1] - b[1], c[2] = d[2] - b[2], c[3] = d[3] - b[3], c[4] = d[4] - b[4], c[5] = d[5] - b[5], c[6] = d[6] - b[6], c[7] =
            d[7] - b[7], c[8] = d[8] - b[8]) : (c[0] = d[0] - b, c[1] = d[1] - b, c[2] = d[2] - b, c[3] = d[3] - b, c[4] = d[4] - b, c[5] = d[5] - b, c[6] = d[6] - b, c[7] = d[7] - b, c[8] = d[8] - b);
        return f
    };
    a.prototype.sub = function (d) {
        return a.sub(this, d, this)
    };
    a.mul = function (d, b, f) {
        f || (f = new a);
        var c = f.data,
            d = d.data;
        b instanceof a ? (b = b.data, c[0] = d[0] * b[0], c[1] = d[1] * b[1], c[2] = d[2] * b[2], c[3] = d[3] * b[3], c[4] = d[4] * b[4], c[5] = d[5] * b[5], c[6] = d[6] * b[6], c[7] = d[7] * b[7], c[8] = d[8] * b[8]) : (c[0] = d[0] * b, c[1] = d[1] * b, c[2] = d[2] * b, c[3] = d[3] * b, c[4] = d[4] * b, c[5] = d[5] * b, c[6] = d[6] *
            b, c[7] = d[7] * b, c[8] = d[8] * b);
        return f
    };
    a.prototype.mul = function (d) {
        return a.mul(this, d, this)
    };
    a.div = function (d, b, f) {
        f || (f = new a);
        var c = f.data,
            d = d.data;
        b instanceof a ? (b = b.data, c[0] = d[0] / b[0], c[1] = d[1] / b[1], c[2] = d[2] / b[2], c[3] = d[3] / b[3], c[4] = d[4] / b[4], c[5] = d[5] / b[5], c[6] = d[6] / b[6], c[7] = d[7] / b[7], c[8] = d[8] / b[8]) : (c[0] = d[0] / b, c[1] = d[1] / b, c[2] = d[2] / b, c[3] = d[3] / b, c[4] = d[4] / b, c[5] = d[5] / b, c[6] = d[6] / b, c[7] = d[7] / b, c[8] = d[8] / b);
        return f
    };
    a.prototype.div = function (d) {
        return a.div(this, d, this)
    };
    a.combine = function (d,
        b, f) {
        f || (f = new a);
        var c = d.data,
            d = c[0],
            h = c[3],
            e = c[6],
            j = c[1],
            l = c[4],
            m = c[7],
            o = c[2],
            p = c[5],
            c = c[8],
            n = b.data,
            b = n[0],
            s = n[3],
            r = n[6],
            u = n[1],
            q = n[4],
            x = n[7],
            t = n[2],
            w = n[5],
            n = n[8],
            z = f.data;
        z[0] = d * b + h * u + e * t;
        z[3] = d * s + h * q + e * w;
        z[6] = d * r + h * x + e * n;
        z[1] = j * b + l * u + m * t;
        z[4] = j * s + l * q + m * w;
        z[7] = j * r + l * x + m * n;
        z[2] = o * b + p * u + c * t;
        z[5] = o * s + p * q + c * w;
        z[8] = o * r + p * x + c * n;
        return f
    };
    a.prototype.combine = function (d) {
        return a.combine(this, d, this)
    };
    a.transpose = function (d, b) {
        b || (b = new a);
        var f = d.data,
            c = b.data;
        if (b === d) {
            var h = f[3],
                e = f[6],
                j = f[7];
            c[3] =
                f[1];
            c[6] = f[2];
            c[7] = f[5];
            c[1] = h;
            c[2] = e;
            c[5] = j;
            return b
        }
        c[0] = f[0];
        c[1] = f[3];
        c[2] = f[6];
        c[3] = f[1];
        c[4] = f[4];
        c[5] = f[7];
        c[6] = f[2];
        c[7] = f[5];
        c[8] = f[8];
        return b
    };
    a.prototype.transpose = function () {
        return a.transpose(this, this)
    };
    a.invert = function (d, b) {
        b || (b = new a);
        if (b === d) return c.copy(a.invert(d), b);
        var f = d.determinant();
        if (Math.abs(f) < e.EPSILON) throw {
            name: "Singular Matrix",
            message: "The matrix is singular and cannot be inverted."
        };
        var f = 1 / f,
            i = b.data,
            h = d.data;
        i[0] = (h[4] * h[8] - h[7] * h[5]) * f;
        i[1] = (h[7] * h[2] - h[1] *
            h[8]) * f;
        i[2] = (h[1] * h[5] - h[4] * h[2]) * f;
        i[3] = (h[6] * h[5] - h[3] * h[8]) * f;
        i[4] = (h[0] * h[8] - h[6] * h[2]) * f;
        i[5] = (h[3] * h[2] - h[0] * h[5]) * f;
        i[6] = (h[3] * h[7] - h[6] * h[4]) * f;
        i[7] = (h[6] * h[1] - h[0] * h[7]) * f;
        i[8] = (h[0] * h[4] - h[3] * h[1]) * f;
        return b
    };
    a.prototype.invert = function () {
        return a.invert(this, this)
    };
    a.prototype.isOrthogonal = function () {
        var a = this.data,
            b = a[0] * a[3] + a[1] * a[4] + a[2] * a[5];
        if (Math.abs(b) > e.EPSILON) return !1;
        b = a[0] * a[6] + a[1] * a[7] + a[2] * a[8];
        if (Math.abs(b) > e.EPSILON) return !1;
        b = a[3] * a[6] + a[4] * a[7] + a[5] * a[8];
        return Math.abs(b) >
            e.EPSILON ? !1 : !0
    };
    a.prototype.isNormal = function () {
        var a = this.data,
            b = a[0] * a[0] + a[1] * a[1] + a[2] * a[2];
        if (Math.abs(b - 1) > e.EPSILON) return !1;
        b = a[3] * a[3] + a[4] * a[4] + a[5] * a[5];
        if (Math.abs(b - 1) > e.EPSILON) return !1;
        b = a[6] * a[6] + a[7] * a[7] + a[8] * a[8];
        return Math.abs(b - 1) > e.EPSILON ? !1 : !0
    };
    a.prototype.isOrthonormal = function () {
        return this.isOrthogonal() && this.isNormal()
    };
    a.prototype.determinant = function () {
        var a = this.data;
        return a[0] * (a[4] * a[8] - a[7] * a[5]) - a[3] * (a[1] * a[8] - a[7] * a[2]) + a[6] * (a[1] * a[5] - a[4] * a[2])
    };
    a.prototype.setIdentity =
        function () {
            var a = this.data;
            a[0] = 1;
            a[1] = 0;
            a[2] = 0;
            a[3] = 0;
            a[4] = 1;
            a[5] = 0;
            a[6] = 0;
            a[7] = 0;
            a[8] = 1;
            return this
    };
    a.prototype.applyPost = function (a) {
        var b = a.data,
            f = this.data,
            c = b[0],
            h = b[1],
            e = b[2];
        b[0] = f[0] * c + f[3] * h + f[6] * e;
        b[1] = f[1] * c + f[4] * h + f[7] * e;
        b[2] = f[2] * c + f[5] * h + f[8] * e;
        return a
    };
    a.prototype.applyPre = function (a) {
        var b = a.data,
            f = this.data,
            c = b[0],
            h = b[1],
            e = b[2];
        b[0] = f[0] * c + f[1] * h + f[2] * e;
        b[1] = f[3] * c + f[4] * h + f[5] * e;
        b[2] = f[6] * c + f[7] * h + f[8] * e;
        return a
    };
    a.prototype.multiplyDiagonalPost = function (a, b) {
        var f = a.data[0],
            c = a.data[1],
            h = a.data[2],
            e = this.data,
            j = b.data;
        j[0] = f * e[0];
        j[1] = f * e[1];
        j[2] = f * e[2];
        j[3] = c * e[3];
        j[4] = c * e[4];
        j[5] = c * e[5];
        j[6] = h * e[6];
        j[7] = h * e[7];
        j[8] = h * e[8];
        return b
    };
    a.prototype.fromAngles = function (a, b, f) {
        var c = Math.cos(a),
            a = Math.sin(a),
            h = Math.cos(b),
            b = Math.sin(b),
            e = Math.cos(f),
            f = Math.sin(f),
            j = this.data;
        j[0] = h * e;
        j[3] = b * a - h * f * c;
        j[6] = h * f * a + b * c;
        j[1] = f;
        j[4] = e * c;
        j[7] = -e * a;
        j[2] = -b * e;
        j[5] = b * f * c + h * a;
        j[8] = -b * f * a + h * c;
        return this
    };
    a.prototype.rotateX = function (a, b) {
        var f = this.data,
            c = (b || this).data,
            h = Math.sin(a),
            e = Math.cos(a),
            j = f[3],
            l = f[4],
            m = f[5],
            o = f[6],
            p = f[7],
            n = f[8];
        f !== c && (c[0] = f[0], c[1] = f[1], c[2] = f[2]);
        c[3] = j * e + o * h;
        c[4] = l * e + p * h;
        c[5] = m * e + n * h;
        c[6] = o * e - j * h;
        c[7] = p * e - l * h;
        c[8] = n * e - m * h;
        return c
    };
    a.prototype.rotateY = function (a, b) {
        var f = this.data,
            c = (b || this).data,
            h = Math.sin(a),
            e = Math.cos(a),
            j = f[0],
            l = f[1],
            m = f[2],
            o = f[6],
            p = f[7],
            n = f[8];
        f !== c && (c[3] = f[3], c[4] = f[4], c[5] = f[5]);
        c[0] = j * e - o * h;
        c[1] = l * e - p * h;
        c[2] = m * e - n * h;
        c[6] = j * h + o * e;
        c[7] = l * h + p * e;
        c[8] = m * h + n * e;
        return c
    };
    a.prototype.rotateZ = function (a, b) {
        var f = this.data,
            c = (b ||
                this).data,
            h = Math.sin(a),
            e = Math.cos(a),
            j = f[0],
            l = f[1],
            m = f[2],
            o = f[3],
            p = f[4],
            n = f[5];
        f !== c && (c[6] = f[6], c[7] = f[7], c[8] = f[8]);
        c[0] = j * e + o * h;
        c[1] = l * e + p * h;
        c[2] = m * e + n * h;
        c[3] = o * e - j * h;
        c[4] = p * e - l * h;
        c[5] = n * e - m * h;
        return c
    };
    a.prototype.toAngles = function (a) {
        a || (a = new b);
        var g = this.data,
            f = a.data;
        g[3] > 1 - e.EPSILON ? (f[1] = Math.atan2(g[2], g[8]), f[2] = Math.PI / 2, f[0] = 0) : g[3] < -1 + e.EPSILON ? (f[1] = Math.atan2(g[2], g[8]), f[2] = -Math.PI / 2, f[0] = 0) : (f[1] = Math.atan2(-g[2], g[0]), f[0] = Math.atan2(-g[7], g[4]), f[2] = Math.asin(g[1]));
        return a
    };
    a.prototype.fromAngleNormalAxis = function (a, b, f, c) {
        var h = Math.cos(a),
            e = Math.sin(a),
            a = 1 - h,
            j = b * f * a,
            l = b * c * a,
            m = f * c * a,
            o = b * e,
            p = f * e;
        e *= c;
        var n = this.data;
        n[0] = b * b * a + h;
        n[3] = j - e;
        n[6] = l + p;
        n[1] = j + e;
        n[4] = f * f * a + h;
        n[7] = m - o;
        n[2] = l - p;
        n[5] = m + o;
        n[8] = c * c * a + h;
        return this
    };
    a.prototype.lookAt = function (a, g) {
        var f = this._tempX,
            c = this._tempY,
            h = this._tempZ;
        h.setv(a).normalize();
        f.setv(g).cross(h).normalize();
        f.equals(b.ZERO) && (h.data[0] !== 0 ? f.setd(h.data[1], -h.data[0], 0) : f.setd(0, h.data[2], -h.data[1]));
        c.setv(h).cross(f);
        var e =
            this.data;
        e[0] = f.data[0];
        e[1] = f.data[1];
        e[2] = f.data[2];
        e[3] = c.data[0];
        e[4] = c.data[1];
        e[5] = c.data[2];
        e[6] = h.data[0];
        e[7] = h.data[1];
        e[8] = h.data[2];
        return this
    };
    a.prototype.copyQuaternion = function (a) {
        return a.toRotationMatrix(this)
    };
    a.prototype.copy = function (a) {
        var b = this.data,
            a = a.data;
        b[0] = a[0];
        b[1] = a[1];
        b[2] = a[2];
        b[3] = a[3];
        b[4] = a[4];
        b[5] = a[5];
        b[6] = a[6];
        b[7] = a[7];
        b[8] = a[8];
        return this
    };
    a.prototype.clone = function () {
        var b = this.data;
        return new a(b[0], b[1], b[2], b[3], b[4], b[5], b[4], b[5], b[6])
    };
    return a
});
define("goo/math/Quaternion", ["goo/math/Vector", "goo/math/Vector3", "goo/math/Matrix3x3", "goo/math/MathUtils"], function (e, c, b, a) {
    function d() {
        e.call(this, 4);
        arguments.length !== 0 ? this.set(arguments) : this.setd(0, 0, 0, 1)
    }
    d.prototype = Object.create(e.prototype);
    d.prototype.setupAliases([
        ["x"],
        ["y"],
        ["z"],
        ["w"]
    ]);
    d.IDENTITY = new d(0, 0, 0, 1);
    d.ALLOWED_DEVIANCE = 1.0E-8;
    d.add = function (a, b, c) {
        c || (c = new d);
        c.data[0] = a.data[0] + b.data[0];
        c.data[1] = a.data[1] + b.data[1];
        c.data[2] = a.data[2] + b.data[2];
        c.data[3] = a.data[3] +
            b.data[3];
        return c
    };
    d.sub = function (a, b, c) {
        c || (c = new d);
        c.data[0] = a.data[0] - b.data[0];
        c.data[1] = a.data[1] - b.data[1];
        c.data[2] = a.data[2] - b.data[2];
        c.data[3] = a.data[3] - b.data[3];
        return c
    };
    d.mul = function (a, b, c) {
        c || (c = new d);
        c.data[0] = a.data[0] * b.data[0];
        c.data[1] = a.data[1] * b.data[1];
        c.data[2] = a.data[2] * b.data[2];
        c.data[3] = a.data[3] * b.data[3];
        return c
    };
    d.div = function (a, b, c) {
        c || (c = new d);
        var h = !0;
        c.data[0] = (h &= b.data[0] < 0 || b.data[0] > 0) ? a.data[0] / b.data[0] : 0;
        c.data[1] = (h &= b.data[1] < 0 || b.data[1] > 0) ? a.data[1] /
            b.data[1] : 0;
        c.data[2] = (h &= b.data[2] < 0 || b.data[2] > 0) ? a.data[2] / b.data[2] : 0;
        c.data[3] = (h &= b.data[3] < 0 || b.data[3] > 0) ? a.data[3] / b.data[3] : 0;
        h === !1 && console.warn("[Quaternion.div] Attempted to divide by zero!");
        return c
    };
    d.scalarAdd = function (a, b, c) {
        c || (c = new d);
        c.data[0] = a.data[0] + b;
        c.data[1] = a.data[1] + b;
        c.data[2] = a.data[2] + b;
        c.data[3] = a.data[3] + b;
        return c
    };
    d.scalarSub = function (a, b, c) {
        c || (c = new d);
        c.data[0] = a.data[0] - b;
        c.data[1] = a.data[1] - b;
        c.data[2] = a.data[2] - b;
        c.data[3] = a.data[3] - b;
        return c
    };
    d.scalarMul =
        function (a, b, c) {
            c || (c = new d);
            c.data[0] = a.data[0] * b;
            c.data[1] = a.data[1] * b;
            c.data[2] = a.data[2] * b;
            c.data[3] = a.data[3] * b;
            return c
    };
    d.scalarDiv = function (a, b, c) {
        c || (c = new d);
        var h = !0,
            b = (h &= b < 0 || b > 0) ? 1 / b : 0;
        c.data[0] = a.data[0] * b;
        c.data[1] = a.data[1] * b;
        c.data[2] = a.data[2] * b;
        c.data[3] = a.data[3] * b;
        h === !1 && console.warn("[Quaternion.scalarDiv] Attempted to divide by zero!");
        return c
    };
    d.slerp = function (a, b, d, c) {
        if (d === 0) return c.setv(a);
        else if (d === 1) return c.setv(b);
        if (a.equals(b)) return c.setv(a);
        var e = a.dot(b);
        c.setv(b);
        e < 0 && (c.negate(), e = -e);
        var b = 1 - d,
            j = d;
        1 - e > 0.1 && (e = Math.acos(e), j = 1 / Math.sin(e), b = Math.sin((1 - d) * e) * j, j *= Math.sin(d * e));
        c.setd(b * a.data[0] + j * c.data[0], b * a.data[1] + j * c.data[1], b * a.data[2] + j * c.data[2], b * a.data[3] + j * c.data[3]);
        return c
    };
    d.prototype.negate = function () {
        this.data[0] *= -1;
        this.data[1] *= -1;
        this.data[2] *= -1;
        this.data[3] *= -1;
        return this
    };
    d.prototype.dot = function (a) {
        var b = this.data,
            a = a.data || a,
            d = 0;
        d += b[0] * a[0];
        d += b[1] * a[1];
        d += b[2] * a[2];
        d += b[3] * a[3];
        return d
    };
    d.prototype.add = function (a) {
        return d.add(this,
            a, this)
    };
    d.prototype.sub = function (a) {
        return d.sub(this, a, this)
    };
    d.prototype.mul = function (a) {
        return d.mul(this, a, this)
    };
    d.prototype.div = function (a) {
        return d.div(this, a, this)
    };
    d.prototype.scalarAdd = function (a) {
        return d.scalarAdd(this, a, this)
    };
    d.prototype.scalarSub = function (a) {
        return d.scalarSub(this, a, this)
    };
    d.prototype.scalarMul = function (a) {
        return d.scalarMul(this, a, this)
    };
    d.prototype.scalarDiv = function (a) {
        return d.scalarDiv(this, a, this)
    };
    d.prototype.slerp = function (a, b) {
        var c = (new d).copy(a);
        d.slerp(this,
            a, b, c);
        this.copy(c);
        return this
    };
    d.prototype.fromRotationMatrix = function (a) {
        var b = a.e00 + a.e11 + a.e22,
            d, c, e;
        if (b >= 0) {
            var j = Math.sqrt(b + 1);
            e = 0.5 * j;
            j = 0.5 / j;
            b = (a.e21 - a.e12) * j;
            d = (a.e02 - a.e20) * j;
            c = (a.e10 - a.e01) * j
        } else a.e00 > a.e11 && a.e00 > a.e22 ? (j = Math.sqrt(1 + a.e00 - a.e11 - a.e22), b = j * 0.5, j = 0.5 / j, d = (a.e10 + a.e01) * j, c = (a.e02 + a.e20) * j, e = (a.e21 - a.e12) * j) : a.e11 > a.e22 ? (j = Math.sqrt(1 + a.e11 - a.e00 - a.e22), d = j * 0.5, j = 0.5 / j, b = (a.e10 + a.e01) * j, c = (a.e21 + a.e12) * j, e = (a.e02 - a.e20) * j) : (j = Math.sqrt(1 + a.e22 - a.e00 - a.e11), c = j * 0.5, j =
            0.5 / j, b = (a.e02 + a.e20) * j, d = (a.e21 + a.e12) * j, e = (a.e10 - a.e01) * j);
        return this.set(b, d, c, e)
    };
    d.prototype.toRotationMatrix = function (a) {
        a || (a = new b);
        var d = this.magnitudeSquared(),
            d = d > 0 ? 2 / d : 0,
            c = this.data,
            h = c[0] * d,
            e = c[1] * d,
            j = c[2] * d,
            d = c[0] * h,
            l = c[0] * e,
            m = c[0] * j;
        h *= c[3];
        var o = c[1] * e,
            p = c[1] * j;
        e *= c[3];
        var n = c[2] * j,
            c = c[3] * j,
            j = a.data;
        j[0] = 1 - (o + n);
        j[1] = l + c;
        j[2] = m - e;
        j[3] = l - c;
        j[4] = 1 - (d + n);
        j[5] = p + h;
        j[6] = m + e;
        j[7] = p - h;
        j[8] = 1 - (d + o);
        return a
    };
    d.prototype.fromVectorToVector = function (b, f) {
        var i = b.length() * f.length();
        if (Math.abs(i) >
            a.EPSILON) {
            var h = new c,
                e = b.dot(f) / i,
                i = Math.acos(Math.max(-1, Math.min(e, 1)));
            b.cross(f, h);
            e < 0 && h.length() < a.EPSILON && (e = Math.abs(b.x) > Math.abs(b.y) ? Math.abs(b.x) > Math.abs(b.z) ? 0 : 2 : Math.abs(b.y) > Math.abs(b.z) ? 1 : 2, h.setValue(e, -b[(e + 1) % 3]), h.setValue((e + 1) % 3, b[e]), h.setValue((e + 2) % 3, 0));
            return this.fromAngleAxis(i, h)
        } else return this.set(d.IDENTITY)
    };
    d.prototype.normalize = function () {
        var a = 1 / this.magnitude();
        return this.set(this.x * a, this.y * a, this.z * a, this.w * a)
    };
    d.prototype.magnitude = function () {
        var a =
            this.data[0] * this.data[0] + this.data[1] * this.data[1] + this.data[2] * this.data[2] + this.data[3] * this.data[3];
        return a === 1 ? 1 : Math.sqrt(a)
    };
    d.prototype.magnitudeSquared = function () {
        return this.data[0] * this.data[0] + this.data[1] * this.data[1] + this.data[2] * this.data[2] + this.data[3] * this.data[3]
    };
    d.prototype.fromAngleAxis = function (a, b) {
        var d = (new c(b)).normalize();
        return this.fromAngleNormalAxis(a, d)
    };
    d.prototype.fromAngleNormalAxis = function (b, f) {
        if (f.equals(c.ZERO)) return this.set(d.IDENTITY);
        var i = 0.5 * b,
            h = a.sin(i),
            i = a.cos(i),
            e = h * f.getX(),
            j = h * f.getY();
        h *= f.getZ();
        return this.set(e, j, h, i)
    };
    d.prototype.toAngleAxis = function (a) {
        var b = this.x * this.x + this.y * this.y + this.z * this.z,
            c;
        if (Math.abs(b) <= d.ALLOWED_DEVIANCE) {
            if (c = 0, a !== null) a.x = 1, a.y = 0, a.z = 0
        } else if (c = 2 * Math.acos(this.w), a !== null) b = 1 / Math.sqrt(b), a.x = this.x * b, a.y = this.y * b, a.z = this.z * b;
        return c
    };
    d.prototype.equals = function (a) {
        return this === a ? !0 : !a instanceof d ? !1 : Math.abs(this.data[0] - a.data[0]) < d.ALLOWED_DEVIANCE && Math.abs(this.data[1] - a.data[1]) < d.ALLOWED_DEVIANCE &&
            Math.abs(this.data[2] - a.data[2]) < d.ALLOWED_DEVIANCE && Math.abs(this.data[3] - a.data[3]) < d.ALLOWED_DEVIANCE
    };
    d.prototype.setd = function (a, b, d, c) {
        this.data[0] = a;
        this.data[1] = b;
        this.data[2] = d;
        this.data[3] = c;
        return this
    };
    d.prototype.seta = function (a) {
        this.data[0] = a[0];
        this.data[1] = a[1];
        this.data[2] = a[2];
        this.data[3] = a[3];
        return this
    };
    d.prototype.setv = function (a) {
        this.data[0] = a.data[0];
        this.data[1] = a.data[1];
        this.data[2] = a.data[2];
        this.data[3] = a.data[3];
        return this
    };
    return d
});
define("goo/shapes/Box", ["goo/renderer/MeshData"], function (e) {
    function c(b, a, d, c, f) {
        if (arguments.length === 1 && arguments[0] instanceof Object) var i = arguments[0],
        b = i.width, a = i.height, d = i.length, c = i.tileX, f = i.tileY;
        this.xExtent = b !== void 0 ? b * 0.5 : 0.5;
        this.yExtent = a !== void 0 ? a * 0.5 : 0.5;
        this.zExtent = d !== void 0 ? d * 0.5 : 0.5;
        this.tileX = c || 1;
        this.tileY = f || 1;
        i = e.defaultMap([e.POSITION, e.NORMAL, e.TEXCOORD0]);
        e.call(this, i, 24, 36);
        this.rebuild()
    }
    c.prototype = Object.create(e.prototype);
    c.prototype.rebuild = function () {
        var b =
            this.xExtent,
            a = this.yExtent,
            d = this.zExtent,
            c = this.tileX,
            f = this.tileY,
            i = [-b, -a, -d, b, -a, -d, b, a, -d, -b, a, -d, b, -a, d, -b, -a, d, b, a, d, -b, a, d],
            h = [];
        (function (a) {
            for (var b = 0; b < a.length; b++) {
                var d = a[b] * 3;
                h.push(i[d]);
                h.push(i[d + 1]);
                h.push(i[d + 2])
            }
        })([0, 1, 2, 3, 1, 4, 6, 2, 4, 5, 7, 6, 5, 0, 3, 7, 2, 6, 7, 3, 0, 5, 4, 1]);
        this.getAttributeBuffer(e.POSITION).set(h);
        var k = [0, 0, -1, 1, 0, 0, 0, 0, 1, -1, 0, 0, 0, 1, 0, 0, -1, 0],
            j = [];
        (function () {
            for (var a = 0; a < k.length / 3; a++)
                for (var b = 0; b < 4; b++) {
                    var d = a * 3;
                    j.push(k[d]);
                    j.push(k[d + 1]);
                    j.push(k[d + 2])
                }
        })();
        this.getAttributeBuffer(e.NORMAL).set(j);
        b = [];
        for (a = 0; a < 6; a++) b.push(c), b.push(0), b.push(0), b.push(0), b.push(0), b.push(f), b.push(c), b.push(f);
        this.getAttributeBuffer(e.TEXCOORD0).set(b);
        this.getIndexBuffer().set([2, 1, 0, 3, 2, 0, 6, 5, 4, 7, 6, 4, 10, 9, 8, 11, 10, 8, 14, 13, 12, 15, 14, 12, 18, 17, 16, 19, 18, 16, 22, 21, 20, 23, 22, 20]);
        return this
    };
    return c
});
define("goo/shapes/Quad", ["goo/renderer/MeshData"], function (e) {
    function c(b, a, d, c) {
        if (arguments.length === 1 && arguments[0] instanceof Object) var f = arguments[0],
        b = f.width, a = f.height, d = f.tileX, c = f.tileY;
        this.xExtent = b !== void 0 ? b * 0.5 : 0.5;
        this.yExtent = a !== void 0 ? a * 0.5 : 0.5;
        this.tileX = d || 1;
        this.tileY = c || 1;
        f = e.defaultMap([e.POSITION, e.NORMAL, e.TEXCOORD0]);
        e.call(this, f, 4, 6);
        this.rebuild()
    }
    c.prototype = Object.create(e.prototype);
    c.prototype.rebuild = function () {
        var b = this.xExtent,
            a = this.yExtent,
            d = this.tileX,
            c =
                this.tileY;
        this.getAttributeBuffer(e.POSITION).set([-b, -a, 0, -b, a, 0, b, a, 0, b, -a, 0]);
        this.getAttributeBuffer(e.NORMAL).set([0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1]);
        this.getAttributeBuffer(e.TEXCOORD0).set([0, 0, 0, c, d, c, d, 0]);
        this.getIndexBuffer().set([0, 3, 1, 1, 3, 2]);
        return this
    };
    return c
});
define("goo/util/Enum", [], function () {
    function e(a, b) {
        Object.getOwnPropertyNames(b).forEach(function (c) {
            Object.defineProperty(a, c, Object.getOwnPropertyDescriptor(b, c))
        });
        return a
    }

    function c(a, b) {
        this.name = a;
        b && e(this, b);
        Object.freeze(this)
    }

    function b(a) {
        arguments.length === 1 && a !== null && typeof a === "object" ? Object.keys(a).forEach(function (b) {
            this[b] = new c(b, a[b])
        }, this) : Array.prototype.forEach.call(arguments, function (a) {
            this[a] = new c(a)
        }, this);
        Object.freeze(this)
    }
    c.prototype = Object.create(null);
    c.prototype.constructor =
        c;
    c.prototype.toString = function () {
        return "|" + this.name + "|"
    };
    Object.freeze(c.prototype);
    b.prototype.symbols = function () {
        return Object.keys(this).map(function (a) {
            return this[a]
        }, this)
    };
    b.prototype.contains = function (a) {
        return !a instanceof c ? !1 : this[a.name] === a
    };
    return b
});
define("goo/shapes/Sphere", ["goo/renderer/MeshData", "goo/util/Enum", "goo/math/Vector3", "goo/math/MathUtils"], function (e, c, b, a) {
    function d(a, b, c, g) {
        if (arguments.length === 1 && arguments[0] instanceof Object) var j = arguments[0],
        a = j.zSamples, b = j.radialSamples, c = j.radius, g = j.textureMode;
        this.zSamples = (a !== void 0 ? a : 8) + 1;
        this.radialSamples = b !== void 0 ? b : 8;
        this.radius = c !== void 0 ? c : 0.5;
        this.textureMode = g !== void 0 ? g : d.TextureModes.Polar;
        this.viewInside = !1;
        var j = e.defaultMap([e.POSITION, e.NORMAL, e.TEXCOORD0]),
            l =
                this.textureMode === d.TextureModes.Chromeball ? this.zSamples + 1 : this.zSamples;
        e.call(this, j, (l - 2) * (this.radialSamples + 1) + 2, 6 * (l - 2) * this.radialSamples);
        this.rebuild()
    }

    function g(a, b, d) {
        a[d * 3 + 0] = a[b * 3 + 0];
        a[d * 3 + 1] = a[b * 3 + 1];
        a[d * 3 + 2] = a[b * 3 + 2]
    }
    d.prototype = Object.create(e.prototype);
    d.prototype.rebuild = function () {
        for (var c = this.getAttributeBuffer(e.POSITION), i = this.getAttributeBuffer(e.NORMAL), h = this.getAttributeBuffer(e.TEXCOORD0), k = this.getIndexBuffer(), j = 1 / this.radialSamples, l = 2 / (this.zSamples - 1), m = [], o = [], p = 0; p < this.radialSamples; p++) {
            var n = a.TWO_PI * j * p;
            o[p] = Math.cos(n);
            m[p] = Math.sin(n)
        }
        m[this.radialSamples] = m[0];
        o[this.radialSamples] = o[0];
        for (var n = 0, s = new b, r = new b, u = new b, q = 1; q < this.zSamples - 1; q++) {
            var x = a.HALF_PI * (-1 + l * q),
                t = Math.sin(x),
                p = this.radius * t,
                w = r.set(0, 0, 0);
            w.z += p;
            for (var z = Math.sqrt(Math.abs(this.radius * this.radius - p * p)), v, A = n, p = 0; p < this.radialSamples; p++) {
                var y = p * j;
                v = u.set(o[p], m[p], 0);
                b.mul(v, z, s);
                c[n * 3 + 0] = w.x + s.x;
                c[n * 3 + 1] = w.y + s.y;
                c[n * 3 + 2] = w.z + s.z;
                v = s.set(c[n * 3 + 0], c[n * 3 + 1], c[n * 3 +
                    2]);
                v.normalize();
                this.viewInside ? (i[n * 3 + 0] = -v.x, i[n * 3 + 1] = -v.y, i[n * 3 + 2] = -v.z) : (i[n * 3 + 0] = v.x, i[n * 3 + 1] = v.y, i[n * 3 + 2] = v.z);
                this.textureMode === d.TextureModes.Linear ? (h[n * 2 + 0] = y, h[n * 2 + 1] = 0.5 * (t + 1)) : this.textureMode === d.TextureModes.Projected ? (h[n * 2 + 0] = y, h[n * 2 + 1] = (a.HALF_PI + Math.asin(t)) / Math.PI) : this.textureMode === d.TextureModes.Polar ? (y = (a.HALF_PI - Math.abs(x)) / Math.PI, v = y * o[p] + 0.5, y = y * m[p] + 0.5, h[n * 2 + 0] = v, h[n * 2 + 1] = y) : this.textureMode === d.TextureModes.Chromeball && (y = Math.sin((a.HALF_PI + x) / 2), y /= 2, v = y * o[p] +
                    0.5, y = y * m[p] + 0.5, h[n * 2 + 0] = v, h[n * 2 + 1] = y);
                n++
            }
            g(c, A, n);
            g(i, A, n);
            this.textureMode === d.TextureModes.Linear ? (h[n * 2 + 0] = 1, h[n * 2 + 1] = 0.5 * (t + 1)) : this.textureMode === d.TextureModes.Projected ? (h[n * 2 + 0] = 1, h[n * 2 + 1] = (a.HALF_PI + Math.asin(t)) / Math.PI) : this.textureMode === d.TextureModes.Polar ? (y = (a.HALF_PI - Math.abs(x)) / Math.PI, h[n * 2 + 0] = y + 0.5, h[n * 2 + 1] = 0.5) : this.textureMode === d.TextureModes.Chromeball && (y = Math.sin((a.HALF_PI + x) / 2), y /= 2, h[n * 2 + 0] = y + 0.5, h[n * 2 + 1] = 0.5);
            n++
        }
        if (this.textureMode === d.TextureModes.Chromeball) {
            q =
                a.HALF_PI - 0.001;
            j = this.radius * Math.sin(q);
            l = Math.sqrt(Math.abs(this.radius * this.radius - j * j));
            A = n;
            for (p = 0; p < this.radialSamples; p++) c[n * 3 + 0] = l * o[p], c[n * 3 + 1] = l * m[p], c[n * 3 + 2] = j, v = s.set(c[n * 3 + 0], c[n * 3 + 1], c[n * 3 + 2]), v.normalize(), this.viewInside ? (i[n * 3 + 0] = -v.x, i[n * 3 + 1] = -v.y, i[n * 3 + 2] = -v.z) : (i[n * 3 + 0] = v.x, i[n * 3 + 1] = v.y, i[n * 3 + 2] = v.z), y = Math.sin((a.HALF_PI + q) / 2), y /= 2, v = y * o[p] + 0.5, y = y * m[p] + 0.5, h[n * 2 + 0] = v, h[n * 2 + 1] = y, n++;
            g(c, A, n);
            g(i, A, n);
            y = Math.sin((a.HALF_PI + q) / 2);
            y /= 2;
            h[n * 2 + 0] = y + 0.5;
            h[n * 2 + 1] = 0.5;
            n++
        }
        c[n * 3 + 0] =
            0;
        c[n * 3 + 1] = 0;
        c[n * 3 + 2] = -this.radius;
        this.viewInside ? (i[n * 3 + 0] = 0, i[n * 3 + 1] = 0, i[n * 3 + 2] = 1) : (i[n * 3 + 0] = 0, i[n * 3 + 1] = 0, i[n * 3 + 2] = -1);
        this.textureMode === d.TextureModes.Polar || this.textureMode === d.TextureModes.Chromeball ? (h[n * 2 + 0] = 0.5, h[n * 2 + 1] = 0.5) : (h[n * 2 + 0] = 0.5, h[n * 2 + 1] = 0);
        n++;
        c[n * 3 + 0] = 0;
        c[n * 3 + 1] = 0;
        c[n * 3 + 2] = this.radius;
        this.viewInside ? (i[n * 3 + 0] = 0, i[n * 3 + 1] = 0, i[n * 3 + 2] = -1) : (i[n * 3 + 0] = 0, i[n * 3 + 1] = 0, i[n * 3 + 2] = 1);
        this.textureMode === d.TextureModes.Polar ? (h[n * 2 + 0] = 0.5, h[n * 2 + 1] = 0.5) : this.textureMode === d.TextureModes.Chromeball ?
            (h[n * 2 + 0] = 1, h[n * 2 + 1] = -0.5) : (h[n * 2 + 0] = 0.5, h[n * 2 + 1] = 1);
        c = 0;
        i = this.textureMode === d.TextureModes.Chromeball ? this.zSamples + 1 : this.zSamples;
        for (h = q = 0; q < i - 3; q++) {
            m = h;
            o = m + 1;
            h += this.radialSamples + 1;
            p = h;
            s = p + 1;
            for (n = 0; n < this.radialSamples; n++) this.viewInside ? (k[c++] = m++, k[c++] = p, k[c++] = o, k[c++] = o++, k[c++] = p++, k[c++] = s++) : (k[c++] = m++, k[c++] = o, k[c++] = p, k[c++] = o++, k[c++] = s++, k[c++] = p++)
        }
        for (n = 0; n < this.radialSamples; n++) this.viewInside ? (k[c++] = n, k[c++] = n + 1, k[c++] = this.vertexCount - 2) : (k[c++] = n, k[c++] = this.vertexCount -
            2, k[c++] = n + 1);
        q = (i - 3) * (this.radialSamples + 1);
        for (n = 0; n < this.radialSamples; n++) this.viewInside ? (k[c++] = n + q, k[c++] = this.vertexCount - 1, k[c++] = n + 1 + q) : (k[c++] = n + q, k[c++] = n + 1 + q, k[c++] = this.vertexCount - 1);
        return this
    };
    d.TextureModes = new c("Linear", "Projected", "Polar", "Chromeball");
    return d
});
define("goo/addons/cannon/systems/CannonjsSystem", "goo/entities/systems/System,goo/renderer/bounds/BoundingBox,goo/renderer/bounds/BoundingSphere,goo/math/Quaternion,goo/shapes/Box,goo/shapes/Quad,goo/shapes/Sphere,goo/renderer/MeshData".split(","), function (e, c, b, a, d, g, f, i) {
    function h(b) {
        e.call(this, "CannonjsSystem", ["CannonjsComponent", "TransformComponent"]);
        var b = b || {}, d = this.world = new k.World;
        d.gravity.y = -9.82;
        d.broadphase = new k.NaiveBroadphase;
        this.stepFrequency = b.stepFrequency || 60;
        this.quat =
            new a
    }
    var k = window.CANNON;
    h.prototype = Object.create(e.prototype);
    h.prototype.createShape = function (a) {
        var h = a.cannonjsComponent,
            e = a.transformComponent,
            o;
        if (a.meshDataComponent)
            if (a = a.meshDataComponent, h.useBounds) a.computeBoundFromPoints(), h = a.modelBound, h instanceof c ? o = new k.Box(new k.Vec3(h.xExtent, h.yExtent, h.zExtent)) : h instanceof b && (o = new k.Sphere(h.radius));
            else if (o = a.meshData, o instanceof d) o = new k.Box(new k.Vec3(o.xExtent, o.yExtent, o.zExtent));
        else if (o instanceof f) o = new k.Sphere(o.radius);
        else if (o instanceof g) o = new k.Plane;
        else {
            for (var a = [], e = [], p = o.getAttributeBuffer(i.POSITION), n = o.getIndexBuffer(), h = 0; h < o.vertexCount * 3; h += 3) a.push(new k.Vec3(p[h], p[h + 1], p[h + 2]));
            for (h = 0; h < o.indexCount; h += 3) e.push([n[h], n[h + 1], n[h + 2]]);
            o = new k.ConvexPolyhedron(a, e)
        } else {
            a = e.children;
            for (h = 0; h < a.length; h++)
                if (n = a[h].entity, e = this.createShape(n)) o || (o = new k.Compound), p = n.transformComponent.transform.translation, n = n.transformComponent.transform.rotation, p = new k.Vec3(p.x, p.y, p.z), this.quat.fromRotationMatrix(n),
            n = new k.Quaternion(this.quat.x, this.quat.y, this.quat.z, this.quat.w), o.addChild(e, p, n)
        }
        return o
    };
    h.prototype.inserted = function (a) {
        var b = a.cannonjsComponent,
            d = a.transformComponent,
            c = this.createShape(a);
        c ? (a = new k.RigidBody(b.mass, c), a.position.set(d.transform.translation.x, d.transform.translation.y, d.transform.translation.z), this.quat.fromRotationMatrix(d.transform.rotation), a.quaternion.set(this.quat.x, this.quat.y, this.quat.z, this.quat.w), b.body = a, this.world.add(a)) : a.clearComponent("CannonjsComponent")
    };
    h.prototype.deleted = function (a) {
        (a = a.cannonjsComponent) && this.world.remove(a.body)
    };
    h.prototype.process = function (a) {
        this.world.step(1 / this.stepFrequency);
        for (var b = 0; b < a.length; b++) {
            var d = a[b],
                c = d.cannonjsComponent,
                g = c.body.position;
            d.transformComponent.transform.translation.x = g.x;
            d.transformComponent.transform.translation.y = g.y;
            d.transformComponent.transform.translation.z = g.z;
            c = c.body.quaternion;
            this.quat.set(c.x, c.y, c.z, c.w);
            d.transformComponent.transform.rotation.copyQuaternion(this.quat);
            d.transformComponent.setUpdated()
        }
    };
    return h
});
define("goo/addons/howler/components/HowlerComponent", ["goo/entities/components/Component"], function (e) {
    function c() {
        this.type = "HowlerComponent";
        this.sounds = {}
    }
    c.prototype = Object.create(e.prototype);
    c.prototype.addSound = function (b, a) {
        this.sounds[b] = a
    };
    c.prototype.playSound = function (b, a, d) {
        this.sounds[b].play(a, d)
    };
    c.prototype.getSound = function (b) {
        return this.sounds[b]
    };
    return c
});
define("goo/renderer/RendererRecord", [], function () {
    function e() {
        this.currentBuffer = {
            ArrayBuffer: {
                buffer: null,
                valid: !1
            },
            ElementArrayBuffer: {
                buffer: null,
                valid: !1
            }
        };
        this.currentFrameBuffer = null;
        this.clippingTestEnabled = this.clippingTestValid = !1;
        this.clips = [];
        this.enabledTextures = 0;
        this.texturesValid = !1;
        this.currentTextureArraysUnit = 0;
        this.textureRecord = [];
        this.usedProgram = null;
        this.boundAttributes = [];
        this.depthRecord = {};
        this.cullRecord = {};
        this.blendRecord = {};
        this.offsetRecord = {};
        this.lineRecord = {};
        this.pointRecord = {}
    }
    e.prototype.invalidateBuffer = function (c) {
        this.currentBuffer[c].buffer = null;
        this.currentBuffer[c].valid = !1
    };
    return e
});
define("goo/util/rsvp", ["exports"], function (e) {
    function c(b, d) {
        a.async(function () {
            b.trigger("promise:resolved", {
                detail: d
            });
            b.isResolved = !0;
            b.resolvedValue = d
        })
    }

    function b(b, d) {
        a.async(function () {
            b.trigger("promise:failed", {
                detail: d
            });
            b.isRejected = !0;
            b.rejectedValue = d
        })
    }
    var a = {}, d = typeof window !== "undefined" ? window : {}, d = d.MutationObserver || d.WebKitMutationObserver,
        g = window.process;
    if (typeof g !== "undefined" && {}.toString.call(g) === "[object process]") a.async = function (a, b) {
        g.nextTick(function () {
            a.call(b)
        })
    };
    else if (d) {
        var f = [],
            i = new d(function () {
                var a = f.slice();
                f = [];
                a.forEach(function (a) {
                    a[0].call(a[1])
                })
            }),
            h = document.createElement("div");
        i.observe(h, {
            attributes: !0
        });
        window.addEventListener("unload", function () {
            i.disconnect();
            i = null
        });
        a.async = function (a, b) {
            f.push([a, b]);
            h.setAttribute("drainQueue", "drainQueue")
        }
    } else a.async = function (a, b) {
        setTimeout(function () {
            a.call(b)
        }, 1)
    };
    var k = function (a, b) {
        this.type = a;
        for (var d in b) b.hasOwnProperty(d) && (this[d] = b[d])
    }, j = function (a, b) {
            for (var d = 0, c = a.length; d < c; d++)
                if (a[d][0] ===
                    b) return d;
            return -1
        }, l = function (a) {
            var b = a._promiseCallbacks;
            if (!b) b = a._promiseCallbacks = {};
            return b
        }, d = {
            mixin: function (a) {
                a.on = this.on;
                a.off = this.off;
                a.trigger = this.trigger;
                return a
            },
            on: function (a, b, d) {
                for (var c = l(this), g, f, a = a.split(/\s+/), d = d || this; f = a.shift();)(g = c[f]) || (g = c[f] = []), j(g, b) === -1 && g.push([b, d])
            },
            off: function (a, b) {
                for (var d = l(this), c, g, a = a.split(/\s+/); c = a.shift();) b ? (c = d[c], g = j(c, b), g !== -1 && c.splice(g, 1)) : d[c] = []
            },
            trigger: function (a, b) {
                var d, c, g, f;
                if (d = l(this)[a])
                    for (var h = 0, i = d.length; h <
                        i; h++) c = d[h], g = c[0], c = c[1], typeof b !== "object" && (b = {
                        detail: b
                    }), f = new k(a, b), g.call(c, f)
            }
        }, m = function () {
            this.on("promise:resolved", function (a) {
                this.trigger("success", {
                    detail: a.detail
                })
            }, this);
            this.on("promise:failed", function (a) {
                this.trigger("error", {
                    detail: a.detail
                })
            }, this)
        }, o = function () {}, p = function (a, b, d, c) {
            var g = typeof d === "function",
                f, h, i, e;
            if (g) try {
                f = d(c.detail), i = !0
            } catch (j) {
                e = !0, h = j
            } else f = c.detail, i = !0;
            if (f && typeof f.then === "function") f.then(function (a) {
                b.resolve(a)
            }, function (a) {
                b.reject(a)
            });
            else if (g && i) b.resolve(f);
            else if (e) b.reject(h);
            else b[a](f)
        };
    m.prototype = {
        then: function (b, d) {
            var c = new m;
            this.isResolved && a.async(function () {
                p("resolve", c, b, {
                    detail: this.resolvedValue
                })
            }, this);
            this.isRejected && a.async(function () {
                p("reject", c, d, {
                    detail: this.rejectedValue
                })
            }, this);
            this.on("promise:resolved", function (a) {
                p("resolve", c, b, a)
            });
            this.on("promise:failed", function (a) {
                p("reject", c, d, a)
            });
            return c
        },
        resolve: function (a) {
            c(this, a);
            this.reject = this.resolve = o
        },
        reject: function (a) {
            b(this, a);
            this.reject =
                this.resolve = o
        }
    };
    d.mixin(m.prototype);
    e.Promise = m;
    e.Event = k;
    e.EventTarget = d;
    e.all = function (a) {
        var b, d = [],
            c = new m,
            g = a.length;
        g === 0 && c.resolve([]);
        var f = function (a) {
            return function (b) {
                d[a] = b;
                --g === 0 && c.resolve(d)
            }
        }, h = function (a) {
                c.reject(a)
            };
        for (b = 0; b < g; b++) a[b].then(f(b), h);
        return c
    };
    e.configure = function (b, d) {
        a[b] = d
    }
});
define("goo/util/Ajax", ["goo/util/rsvp"], function (e) {
    function c(b) {
        this._loadStack = [];
        this._callback = b
    }
    c.prototype.get = function (b) {
        var a = new e.Promise,
            d = this._progress.bind(this),
            c = {
                loaded: 0,
                total: 0,
                lengthComputable: !1
            };
        this._loadStack.push(c);
        var b = b || {}, f = new XMLHttpRequest;
        f.open("GET", b.url || "", !0);
        if (b.responseType) f.responseType = b.responseType;
        f.onreadystatechange = function () {
            if (f.readyState === 4) f.status >= 200 && f.status <= 299 ? (c.loaded = c.total, d(), a.resolve(f)) : a.reject(f.statusText)
        };
        f.addEventListener("progress",
            function (a) {
                c.loaded = a.loaded || a.position;
                c.total = a.total || a.totalSize;
                c.lengthComputable = a.lengthComputable;
                d()
            }, !1);
        f.send();
        return a
    };
    c.prototype._progress = function () {
        if (this._callback) {
            for (var b = {
                total: 0,
                loaded: 0,
                count: this._loadStack.length
            }, a = 0; a < this._loadStack.length; a++) b.total += this._loadStack[a].total, b.loaded += this._loadStack[a].loaded;
            this._callback(b)
        }
    };
    c.ARRAY_BUFFER = "arraybuffer";
    c.prototype.load = function (b, a) {
        if (typeof b === "undefined" || b === null) throw Error("Ajax(): `path` was undefined/null");
        var d = {
            url: b
        };
        if (a === c.ARRAY_BUFFER) d.responseType = c.ARRAY_BUFFER;
        var g = this.get(d).then(function (a) {
            return a.response
        });
        g.then(null, function (a) {
            console.error("Ajax.load(): Could not retrieve data from `" + d.url + "`.\n Reason: " + a);
            throw Error("Ajax.load(): Could not retrieve data from `" + d.url + "`.\n Reason: " + a);
        });
        return g
    };
    c.prototype.loadImage = function (b, a) {
        window.URL = window.URL || window.webkitURL;
        var d = new e.Promise,
            g = new Image;
        g.addEventListener("load", function () {
            g.dataReady = !0;
            window.URL.revokeObjectURL(g.src);
            d.resolve(g)
        }, !1);
        g.addEventListener("error", function (a) {
            console.log(a);
            d.reject("Ajax.loadImage(): Couldn't load from [" + b + "]")
        }, !1);
        a ? this.load(b, function (a) {
            var a = new Uint8Array(a, 0, a.byteLength),
                d = "image/jpeg";
            /\.png$/.test(b) && (d = "image/png");
            a = new Blob([a], {
                type: d
            });
            g.src = window.URL.createObjectURL(a);
            return g
        }, c.ARRAY_BUFFER) : g.src = b;
        return d
    };
    return c
});
define("goo/loaders/Loader", ["goo/util/rsvp", "goo/util/Ajax"], function (e, c) {
    function b(a) {
        if (typeof a !== "undefined" && a !== null && typeof a !== "object") throw Error("Loader(): Argument `parameters` must be of type `object`");
        else if (typeof a === "undefined" || a === null) a = {};
        this.rootPath = a.rootPath || "";
        this.xhr = a.xhr || new c(this._progressCallback.bind(this));
        this._progressCallbacks = [];
        this.total = 0
    }
    b.prototype.load = function (a, d, c) {
        if (typeof a === "undefined" || a === null) throw Error("Loader(): `path` was undefined/null");
        var f = {
            url: this._buildURL(a)
        };
        if (c === b.ARRAY_BUFFER) f.responseType = b.ARRAY_BUFFER;
        a = this.xhr.get(f).then(function (a) {
            return a.response
        });
        d && (a = a.then(function (a) {
            return typeof d === "function" ? d(a) : a
        }));
        a.then(function () {
            console.log("Loaded: " + f.url)
        });
        a.then(null, function (a) {
            console.error("Loader.load(): Could not retrieve data from `" + f.url + "`.\n Reason: " + a);
            throw Error("Loader.load(): Could not retrieve data from `" + f.url + "`.\n Reason: " + a);
        });
        return a
    };
    b.prototype.addProgressCallback = function (a) {
        this._progressCallbacks.push(a)
    };
    b.prototype.removeProgressCallback = function (a) {
        for (var b = 0; b < this._progressCallbacks.length; b++)
            if (this._progressCallbacks[b] === a) {
                this._progressCallbacks.splice(b, 1);
                break
            }
    };
    b.prototype._progressCallback = function (a) {
        if (this.total) a.total = this.total;
        for (var b = 0; b < this._progressCallbacks.length; b++) this._progressCallbacks[b](a)
    };
    b.prototype.loadImage = function (a, d) {
        window.URL = window.URL || window.webkitURL;
        var c = new e.Promise,
            f = new Image;
        f.addEventListener("load", function () {
            f.dataReady = !0;
            window.URL.revokeObjectURL(f.src);
            c.resolve(f)
        }, !1);
        f.addEventListener("error", function () {
            c.reject("Loader.loadImage(): Couldn't load from [" + a + "]")
        }, !1);
        d ? this.load(a, function (b) {
            var b = new Uint8Array(b, 0, b.byteLength),
                d = "image/jpeg";
            /\.png$/.test(a) && (d = "image/png");
            b = new Blob([b], {
                type: d
            });
            f.src = window.URL.createObjectURL(b)
        }, b.ARRAY_BUFFER) : f.src = this._buildURL(a);
        return c
    };
    b.prototype._buildURL = function (a) {
        return this.rootPath + window.escape(a)
    };
    b.ARRAY_BUFFER = "arraybuffer";
    return b
});
define("goo/renderer/Texture", ["goo/math/Vector2"], function (e) {
    function c(b, a, d, c) {
        this.glTexture = null;
        a = a || {};
        this.wrapS = a.wrapS || "Repeat";
        this.wrapT = a.wrapT || "Repeat";
        this.magFilter = a.magFilter || "Bilinear";
        this.minFilter = a.minFilter || "Trilinear";
        this.anisotropy = a.anisotropy !== void 0 ? a.anisotropy : 1;
        this.format = a.format || "RGBA";
        this.type = a.type || "UnsignedByte";
        this.variant = "2D";
        this.offset = new e(a.offset || [0, 0]);
        this.repeat = new e(a.repeat || [1, 1]);
        this.generateMipmaps = a.generateMipmaps !== void 0 ? a.generateMipmaps : !0;
        this.premultiplyAlpha = a.premultiplyAlpha !== void 0 ? a.premultiplyAlpha : !1;
        this.unpackAlignment = a.unpackAlignment !== void 0 ? a.unpackAlignment : 1;
        this.flipY = a.flipY !== void 0 ? a.flipY : !0;
        this.needsUpdate = this.hasBorder = !1;
        this.readyCallback = this.updateCallback = null;
        b && this.setImage(b, a, d, c)
    }
    c.prototype.checkDataReady = function () {
        return this.image && (this.image.dataReady || this.image instanceof HTMLImageElement) || this.readyCallback !== null && this.readyCallback()
    };
    c.prototype.checkNeedsUpdate = function () {
        return this.needsUpdate ||
            this.updateCallback !== null && this.updateCallback()
    };
    c.prototype.setNeedsUpdate = function () {
        this.needsUpdate = !0
    };
    c.prototype.setImage = function (b, a, d, c) {
        this.image = b;
        var f = b instanceof Array ? b[0] : b;
        if (f instanceof Uint8Array || f instanceof Uint8ClampedArray || f instanceof Uint16Array)
            if (d = d || b.width, c = c || b.height, d !== void 0 && c !== void 0)
                if (this.image = {
                    data: b
                }, this.image.width = d, this.image.height = c, this.image.isData = !0, this.image.dataReady = !0, f instanceof Uint8Array || f instanceof Uint8ClampedArray) a.type =
                    "UnsignedByte";
                else {
                    if (f instanceof Uint16Array) a.type = "UnsignedShort4444"
                } else throw "Data textures need width and height";
                else if (b instanceof Array) this.image = {
            data: b
        }
    };
    c.CUBE_FACES = "PositiveX,NegativeX,PositiveY,NegativeY,PositiveZ,NegativeZ".split(",");
    return c
});
define("goo/loaders/dds/DdsUtils", [], function () {
    function e() {}
    e.getDdsExtension = function (c) {
        for (var b = ["", "WEBKIT_", "MOZ_"], a = 0; a < b.length; a++) {
            var d = c.getExtension(b[a] + "WEBGL_compressed_texture_s3tc");
            if (typeof d !== "undefined" && d !== null) return d
        }
        return null
    };
    e.isSupported = function (c) {
        return e.getDdsExtension(c) !== null
    };
    e.shiftCount = function (c) {
        if (c === 0) return 0;
        for (var b = 0;
            (c & 1) === 0;)
            if (c >>= 1, b++, b > 32) throw "invalid mask!";
        return b
    };
    e.isSet = function (c, b) {
        return (c & b) === b
    };
    e.getIntFromString = function (c) {
        for (var b = [], a = 0; a < c.length; a++) b[a] = c.charCodeAt(a);
        return e.getIntFromBytes(b)
    };
    e.getIntFromBytes = function (c) {
        var b = 0;
        b |= (c[0] & 255) << 0;
        c.length > 1 && (b |= (c[1] & 255) << 8);
        c.length > 2 && (b |= (c[2] & 255) << 16);
        c.length > 3 && (b |= (c[3] & 255) << 24);
        return b
    };
    e.getComponents = function (c) {
        switch (c) {
        case "Alpha":
            return 1;
        case "RGB":
            return 3;
        case "RGBA":
            return 4;
        case "Luminance":
            return 1;
        case "LuminanceAlpha":
            return 2;
        case "PrecompressedDXT1":
            return 1;
        case "PrecompressedDXT1A":
            return 1;
        case "PrecompressedDXT3":
            return 2;
        case "PrecompressedDXT5":
            return 2
        }
        return 0
    };
    e.flipDXT = function (c, b, a, d) {
        for (var g = new Uint8Array(c.length), b = b + 3 >> 2, a = a + 3 >> 2, f = e.getComponents(d) * 8, i = 0; i < a; i++)
            for (var h = a - i - 1, k = 0; k < b; k++) {
                var j = (h * b + k) * f,
                    l = (i * b + k) * f;
                switch (d) {
                case "PrecompressedDXT1":
                case "PrecompressedDXT1A":
                    g[j + 0] = c[l + 0];
                    g[j + 1] = c[l + 1];
                    g[j + 2] = c[l + 2];
                    g[j + 3] = c[l + 3];
                    g[j + 4] = c[l + 7];
                    g[j + 5] = c[l + 6];
                    g[j + 6] = c[l + 5];
                    g[j + 7] = c[l + 4];
                    break;
                case "PrecompressedDXT3":
                    g[j + 0] = c[l + 6];
                    g[j + 1] = c[l + 7];
                    g[j + 2] = c[l + 4];
                    g[j + 3] = c[l + 5];
                    g[j + 4] = c[l + 2];
                    g[j + 5] = c[l + 3];
                    g[j + 6] = c[l + 0];
                    g[j + 7] = c[l + 1];
                    g[j + 8] = c[l + 8];
                    g[j + 9] = c[l + 9];
                    g[j + 10] = c[l + 10];
                    g[j + 11] = c[l + 11];
                    g[j + 12] = c[l + 15];
                    g[j + 13] = c[l + 14];
                    g[j + 14] = c[l + 13];
                    g[j + 15] = c[l + 12];
                    break;
                case "PrecompressedDXT5":
                    g[j + 0] = c[l + 0], g[j + 1] = c[l + 1], e.getBytesFromUInt24(g, j + 5, e.flipUInt24(e.getUInt24(c, l + 2))), e.getBytesFromUInt24(g, j + 2, e.flipUInt24(e.getUInt24(c, l + 5))), g[j + 8] = c[l + 8], g[j + 9] = c[l + 9], g[j + 10] = c[l + 10], g[j + 11] = c[l + 11], g[j + 12] = c[l + 15], g[j + 13] = c[l + 14], g[j + 14] = c[l + 13], g[j + 15] = c[l + 12]
                }
            }
        return g
    };
    e.getUInt24 = function (c, b) {
        var a = 0;
        a |= (c[b + 0] & 255) << 0;
        a |= (c[b + 1] & 255) << 8;
        a |=
            (c[b + 2] & 255) << 16;
        return a
    };
    e.getBytesFromUInt24 = function (c, b, a) {
        c[b + 0] = a & 255;
        c[b + 1] = (a & 65280) >> 8;
        c[b + 2] = (a & 16711680) >> 16
    };
    e.ThreeBitMask = 7;
    e.flipUInt24 = function (c) {
        for (var b = [], a = 0; a < 2; a++) b.push([0, 0, 0, 0]);
        b[0][0] = c & e.ThreeBitMask;
        c >>= 3;
        b[0][1] = c & e.ThreeBitMask;
        c >>= 3;
        b[0][2] = c & e.ThreeBitMask;
        c >>= 3;
        b[0][3] = c & e.ThreeBitMask;
        c >>= 3;
        b[1][0] = c & e.ThreeBitMask;
        c >>= 3;
        b[1][1] = c & e.ThreeBitMask;
        c >>= 3;
        b[1][2] = c & e.ThreeBitMask;
        c >>= 3;
        b[1][3] = c & e.ThreeBitMask;
        c = 0;
        c |= b[1][0] << 0;
        c |= b[1][1] << 3;
        c |= b[1][2] << 6;
        c |= b[1][3] <<
            9;
        c |= b[0][0] << 12;
        c |= b[0][1] << 15;
        c |= b[0][2] << 18;
        c |= b[0][3] << 21;
        return c
    };
    return e
});
define("goo/loaders/dds/DdsLoader", ["goo/loaders/dds/DdsUtils"], function (e) {
    function c() {
        this.dwABitMask = this.dwBBitMask = this.dwGBitMask = this.dwRBitMask = this.dwRGBBitCount = this.dwFourCC = this.dwFlags = this.dwSize = 0
    }

    function b() {
        this.dwAlphaBitDepth = this.dwMipMapCount = this.dwDepth = this.dwLinearSize = this.dwWidth = this.dwHeight = this.dwFlags = this.dwSize = 0;
        this.dwReserved1 = [];
        this.ddpf = null;
        this.dwTextureStage = this.dwCaps4 = this.dwCaps3 = this.dwCaps2 = this.dwCaps = 0
    }

    function a() {
        this.flipVertically = !1;
        this.bpp =
            0;
        this.headerDX10 = this.header = null;
        this.mipmapByteSizes = []
    }

    function d() {}
    c.HEADER_OFFSET = 19;
    c.DDPF_ALPHAPIXELS = 1;
    c.DDPF_ALPHA = 2;
    c.DDPF_FOURCC = 4;
    c.DDPF_RGB = 64;
    c.DDPF_YUV = 512;
    c.DDPF_LUMINANCE = 131072;
    c.read = function (a) {
        var b = new c;
        b.dwSize = a[c.HEADER_OFFSET + 0];
        if (b.dwSize !== 32) throw "invalid pixel format size: " + b.dwSize;
        b.dwFlags = a[c.HEADER_OFFSET + 1];
        b.dwFourCC = a[c.HEADER_OFFSET + 2];
        b.dwRGBBitCount = a[c.HEADER_OFFSET + 3];
        b.dwRBitMask = a[c.HEADER_OFFSET + 4];
        b.dwGBitMask = a[c.HEADER_OFFSET + 5];
        b.dwBBitMask = a[c.HEADER_OFFSET +
            6];
        b.dwABitMask = a[c.HEADER_OFFSET + 7];
        return b
    };
    b.DDSD_CAPS = 1;
    b.DDSD_HEIGHT = 2;
    b.DDSD_WIDTH = 4;
    b.DDSD_PITCH = 8;
    b.DDSD_PIXELFORMAT = 4096;
    b.DDSD_MIPMAPCOUNT = 131072;
    b.DDSD_LINEARSIZE = 524288;
    b.DDSD_DEPTH = 8388608;
    b.DDSCAPS_COMPLEX = 8;
    b.DDSCAPS_MIPMAP = 4194304;
    b.DDSCAPS_TEXTURE = 4096;
    b.DDSCAPS2_CUBEMAP = 512;
    b.DDSCAPS2_CUBEMAP_POSITIVEX = 1024;
    b.DDSCAPS2_CUBEMAP_NEGATIVEX = 2048;
    b.DDSCAPS2_CUBEMAP_POSITIVEY = 4096;
    b.DDSCAPS2_CUBEMAP_NEGATIVEY = 8192;
    b.DDSCAPS2_CUBEMAP_POSITIVEZ = 16384;
    b.DDSCAPS2_CUBEMAP_NEGATIVEZ = 32768;
    b.DDSCAPS2_VOLUME =
        2097152;
    b.read = function (a) {
        var d = new b;
        d.dwSize = a[1];
        if (d.dwSize !== 124) throw "invalid dds header size: " + d.dwSize;
        d.dwFlags = a[2];
        d.dwHeight = a[3];
        d.dwWidth = a[4];
        d.dwLinearSize = a[5];
        d.dwDepth = a[6];
        d.dwMipMapCount = a[7];
        d.dwAlphaBitDepth = a[8];
        for (var i = 0; i < d.dwReserved1.length; i++) d.dwReserved1[i] = a[9 + i];
        d.ddpf = c.read(a);
        d.dwCaps = a[27];
        d.dwCaps2 = a[28];
        d.dwCaps3 = a[29];
        d.dwCaps4 = a[30];
        d.dwTextureStage = a[31];
        a = 1 + Math.ceil(Math.log(Math.max(d.dwHeight, d.dwWidth)) / Math.log(2));
        e.isSet(d.dwCaps, b.DDSCAPS_MIPMAP) ?
            e.isSet(d.dwFlags, b.DDSD_MIPMAPCOUNT) ? d.dwMipMapCount !== a && console.warn("Got " + d.dwMipMapCount + " mipmaps, expected " + a) : d.dwMipMapCount = a : d.dwMipMapCount = 1;
        return d
    };
    a.prototype.calcMipmapSizes = function (a) {
        for (var b = this.header.dwWidth, d = this.header.dwHeight, c = 0, e = 0; e < this.header.dwMipMapCount; e++) c = a ? ~~((b + 3) / 4) * ~~((d + 3) / 4) * this.bpp * 2 : ~~(b * d * this.bpp / 8), this.mipmapByteSizes.push(~~((c + 3) / 4) * 4), b = ~~ (b / 2) > 1 ? ~~(b / 2) : 1, d = ~~ (d / 2) > 1 ? ~~(d / 2) : 1
    };
    d.updateDepth = function (a, d) {
        if (e.isSet(d.header.dwCaps2, b.DDSCAPS2_CUBEMAP)) {
            var c =
                0;
            e.isSet(d.header.dwCaps2, b.DDSCAPS2_CUBEMAP_POSITIVEX) && c++;
            e.isSet(d.header.dwCaps2, b.DDSCAPS2_CUBEMAP_NEGATIVEX) && c++;
            e.isSet(d.header.dwCaps2, b.DDSCAPS2_CUBEMAP_POSITIVEY) && c++;
            e.isSet(d.header.dwCaps2, b.DDSCAPS2_CUBEMAP_NEGATIVEY) && c++;
            e.isSet(d.header.dwCaps2, b.DDSCAPS2_CUBEMAP_POSITIVEZ) && c++;
            e.isSet(d.header.dwCaps2, b.DDSCAPS2_CUBEMAP_NEGATIVEZ) && c++;
            if (c !== 6) throw Error("Cubemaps without all faces defined are not currently supported.");
            a.depth = c
        } else a.depth = d.header.dwDepth > 0 ? d.header.dwDepth :
            1
    };
    d.readDXT = function (a, b, d, c) {
        c.image.isCompressed = !0;
        if (!d.flipVertically) return new Uint8Array(a.buffer, a.byteOffset + 0, b);
        for (var k = d.header.dwWidth, j = d.header.dwHeight, b = new Uint8Array(b), l = 0, m = 0; m < d.header.dwMipMapCount; m++) {
            var o = a.subarray(l, l + d.mipmapByteSizes[m]),
                o = e.flipDXT(o, k, j, c.format);
            b.set(o, l);
            l += o.length;
            k = ~~ (k / 2) > 1 ? ~~(k / 2) : 1;
            j = ~~ (j / 2) > 1 ? ~~(j / 2) : 1
        }
        return b
    };
    d.readUncompressed = function (a, b, d, c, k, j, l, m) {
        for (var o = e.shiftCount(l.header.ddpf.dwRBitMask), p = e.shiftCount(l.header.ddpf.dwGBitMask),
                n = e.shiftCount(l.header.ddpf.dwBBitMask), s = e.shiftCount(l.header.ddpf.dwABitMask), r = ~~ (l.header.ddpf.dwRGBBitCount / 8), m = e.getComponents(m.format) * 1, b = new Uint8Array(b), u = l.header.dwWidth, q = l.header.dwHeight, x = 0, t = 0, w = 0, z = [], w = 0; w < r; w++) z.push(0);
        for (var v = 0; v < l.header.dwMipMapCount; v++) {
            for (var A = 0; A < q; A++)
                for (var y = 0; y < u; y++) {
                    for (w = 0; w < r; w++) z[w] = a[t++];
                    var w = e.getIntFromBytes(z),
                        B = (w & l.header.ddpf.dwRBitMask) >> o,
                        C = (w & l.header.ddpf.dwGBitMask) >> p,
                        F = (w & l.header.ddpf.dwBBitMask) >> n,
                        w = (w & l.header.ddpf.dwABitMask) >>
                            s;
                    k ? b[x++] = w : c ? (b[x++] = B, j && (b[x++] = w)) : d && (b[x++] = B, b[x++] = C, b[x++] = F, j && (b[x++] = w))
                }
            x += u * q * m;
            u = ~~ (u / 2) > 1 ? ~~(u / 2) : 1;
            q = ~~ (q / 2) > 1 ? ~~(q / 2) : 1
        }
        return b
    };
    d.populate = function (a, b, i) {
        var h = b.header.ddpf.dwFlags,
            k = e.isSet(h, c.DDPF_FOURCC),
            j = e.isSet(h, c.DDPF_RGB),
            l = e.isSet(h, c.DDPF_ALPHAPIXELS),
            m = e.isSet(h, c.DDPF_LUMINANCE),
            h = e.isSet(h, c.DDPF_ALPHA);
        a.type = "UnsignedByte";
        if (k) {
            var o = b.header.ddpf.dwFourCC;
            if (o === e.getIntFromString("DXT1")) b.bpp = 4, a.format = "PrecompressedDXT1A";
            else if (o === e.getIntFromString("DXT3")) b.bpp =
                8, a.format = "PrecompressedDXT3";
            else if (o === e.getIntFromString("DXT5")) b.bpp = 8, a.format = "PrecompressedDXT5";
            else if (o === e.getIntFromString("DX10")) throw Error("dxt10 LATC formats not supported currently: " + b.headerDX10.dxgiFormat);
            else if (o === e.getIntFromString("DXT2")) throw "DXT2 is not supported.";
            else if (o === e.getIntFromString("DXT4")) throw "DXT4 is not supported.";
            else throw "unsupported compressed dds format found (" + o + ")";
        } else if (b.bpp = b.header.ddpf.dwRGBBitCount, j) a.format = l ? "RGBA" : "RGB";
        else if (m ||
            l)
            if (m && l) a.format = "LuminanceAlpha";
            else if (m) a.format = "Luminance";
        else {
            if (h) a.format = "Alpha"
        } else throw Error("unsupported uncompressed dds format found.");
        b.calcMipmapSizes(k);
        a.image.mipmapSizes = b.mipmapByteSizes;
        for (var p = o = 0; p < b.mipmapByteSizes.length; p++) o += b.mipmapByteSizes[p];
        for (var n = [], p = 0; p < a.image.depth; p++) k ? n.push(d.readDXT(i, o, b, a)) : (j || m || h) && n.push(d.readUncompressed(i, o, j, m, h, l, b, a));
        a.image.data = a.image.depth === 1 ? n[0] : n;
        a.image.useArrays = !0
    };
    d.prototype.load = function (c, f, i, h, k) {
        var j =
            new Int32Array(c, h + 0, 32);
        if (j[0] !== e.getIntFromString("DDS ")) throw "Not a dds file.";
        var l = new a;
        l.flipVertically = i;
        l.header = b.read(j);
        l.headerDX10 = l.header.ddpf.dwFourCC === e.getIntFromString("DX10") ? b.read(Int32Array.create(c, h + 128, 5)) : null;
        i = f.image;
        if (typeof i === "undefined" || i === null) i = {}, f.image = i;
        i.width = l.header.dwWidth;
        i.height = l.header.dwHeight;
        d.updateDepth(i, l);
        j = 128 + (l.headerDX10 ? 20 : 0);
        d.populate(f, l, new Uint8Array(c, h + j, k - j));
        if (!l.mipmapByteSizes || l.mipmapByteSizes.length < 2) f.minFilter =
            "BilinearNoMipMaps";
        i.bpp = l.bpp;
        i.dataReady = !0;
        f.needsUpdate = !0
    };
    d.SUPPORTS_DDS = !1;
    d.prototype.isSupported = function () {
        return d.SUPPORTS_DDS
    };
    d.prototype.toString = function () {
        return "DdsLoader"
    };
    return d
});
define("goo/loaders/crunch/CrunchLoader", ["goo/loaders/dds/DdsLoader", "goo/loaders/dds/DdsUtils"], function (e, c) {
    function b() {}
    b.cCRNFmtDXT1 = 0;
    b.cCRNFmtDXT3 = 1;
    b.cCRNFmtDXT5 = 2;
    b.prototype.arrayBufferCopy = function (a, b, c, f) {
        var e = c / 4,
            h = f % 4,
            k = new Uint32Array(a.buffer, 0, (f - h) / 4),
            j = new Uint32Array(b.buffer),
            l;
        for (l = 0; l < k.length; l++) j[e + l] = k[l];
        for (l = f - h; l < f; l++) b[c + l] = a[l]
    };
    b.prototype.load = function (a, d, g) {
        if (typeof window.CrunchModule === "undefined") console.warn("Crunch library not loaded! Include a script tag pointing to lib/crunch/crunch.js in your html-file.");
        else {
            var f = window.CrunchModule,
                e = new Uint8Array(a),
                a = a.byteLength,
                h = f._malloc(a),
                k, j, l, m, o, p;
            this.arrayBufferCopy(e, f.HEAPU8, h, a);
            var n;
            switch (f._crn_get_dxt_format(h, a)) {
            case b.cCRNFmtDXT1:
                d.format = "PrecompressedDXT1A";
                n = 4;
                break;
            case b.cCRNFmtDXT3:
                d.format = "PrecompressedDXT3";
                n = 8;
                break;
            case b.cCRNFmtDXT5:
                d.format = "PrecompressedDXT5";
                n = 8;
                break;
            default:
                return console.error("Unsupported image format"), 0
            }
            j = f._crn_get_width(h, a);
            l = f._crn_get_height(h, a);
            m = f._crn_get_levels(h, a);
            k = f._crn_get_uncompressed_size(h,
                a, 0);
            var e = f._malloc(k),
                s = d.image;
            if (typeof s === "undefined" || s === null) s = {}, d.image = s;
            s.width = j;
            s.height = l;
            s.depth = 1;
            var r = [];
            d.image.mipmapSizes = [];
            for (p = 0; p < m; ++p) p && (k = f._crn_get_uncompressed_size(h, a, p)), f._crn_decompress(h, a, e, k, p), o = new Uint8Array(f.HEAPU8.buffer, e, k), g && (o = c.flipDXT(o, j, l, d.format)), r.push(o), d.image.mipmapSizes.push(k), j *= 0.5, l *= 0.5;
            d.image.data = r;
            d.image.useArrays = !0;
            d.type = "UnsignedByte";
            d.image.isCompressed = !0;
            if (m <= 1) d.minFilter = "BilinearNoMipMaps";
            s.bpp = n;
            s.dataReady = !0;
            d.needsUpdate = !0;
            f._free(h);
            f._free(e)
        }
    };
    b.prototype.dxtToRgb565 = function (a, b, c, f) {
        var e = new Uint16Array(4),
            h = new Uint16Array(c * f),
            k = 0,
            j = 0,
            l = 0,
            m = j = k = 0,
            o = 0,
            p = 0,
            n = 0,
            s = c / 4;
        f /= 4;
        for (var r = 0; r < f; r++)
            for (var u = 0; u < s; u++) l = b + 4 * (r * s + u), e[0] = a[l], e[1] = a[l + 1], k = e[0] & 31, j = e[0] & 2016, m = e[0] & 63488, o = e[1] & 31, p = e[1] & 2016, n = e[1] & 63488, e[2] = 5 * k + 3 * o >> 3 | 5 * j + 3 * p >> 3 & 2016 | 5 * m + 3 * n >> 3 & 63488, e[3] = 5 * o + 3 * k >> 3 | 5 * p + 3 * j >> 3 & 2016 | 5 * n + 3 * m >> 3 & 63488, k = a[l + 2], j = r * 4 * c + u * 4, h[j] = e[k & 3], h[j + 1] = e[k >> 2 & 3], h[j + 2] = e[k >> 4 & 3], h[j + 3] = e[k >> 6 &
                3], j += c, h[j] = e[k >> 8 & 3], h[j + 1] = e[k >> 10 & 3], h[j + 2] = e[k >> 12 & 3], h[j + 3] = e[k >> 14], k = a[l + 3], j += c, h[j] = e[k & 3], h[j + 1] = e[k >> 2 & 3], h[j + 2] = e[k >> 4 & 3], h[j + 3] = e[k >> 6 & 3], j += c, h[j] = e[k >> 8 & 3], h[j + 1] = e[k >> 10 & 3], h[j + 2] = e[k >> 12 & 3], h[j + 3] = e[k >> 14];
        return h
    };
    b.prototype.isSupported = function () {
        return e.SUPPORTS_DDS
    };
    b.prototype.toString = function () {
        return "CrunchLoader"
    };
    return b
});
define("goo/loaders/tga/TgaLoader", [], function () {
    function e() {
        this.header = null;
        this.offset = 0;
        this.use_grey = this.use_rgb = this.use_pal = this.use_rle = !1
    }
    e.TYPE_NO_DATA = 0;
    e.TYPE_INDEXED = 1;
    e.TYPE_RGB = 2;
    e.TYPE_GREY = 3;
    e.TYPE_RLE_INDEXED = 9;
    e.TYPE_RLE_RGB = 10;
    e.TYPE_RLE_GREY = 11;
    e.ORIGIN_MASK = 48;
    e.ORIGIN_SHIFT = 4;
    e.ORIGIN_BL = 0;
    e.ORIGIN_BR = 1;
    e.ORIGIN_UL = 2;
    e.ORIGIN_UR = 3;
    e.prototype.load = function (c, b) {
        this.loadData(new Uint8Array(c));
        var a = this.getImageData();
        b.setImage(a, null, a.width, a.height);
        a.dataReady = !0;
        b.needsUpdate = !0
    };
    e.prototype.loadData = function (c) {
        if (c.length < 19) throw Error("Targa::load() - Not enough data to contain header.");
        this.offset = 0;
        this.header = {
            id_length: c[this.offset++],
            colormap_type: c[this.offset++],
            image_type: c[this.offset++],
            colormap_index: c[this.offset++] | c[this.offset++] << 8,
            colormap_length: c[this.offset++] | c[this.offset++] << 8,
            colormap_size: c[this.offset++],
            origin: [c[this.offset++] | c[this.offset++] << 8, c[this.offset++] | c[this.offset++] << 8],
            width: c[this.offset++] | c[this.offset++] << 8,
            height: c[this.offset++] |
                c[this.offset++] << 8,
            pixel_size: c[this.offset++],
            flags: c[this.offset++]
        };
        this.checkHeader();
        if (this.header.id_length + this.offset > c.length) throw Error("Targa::load() - No data ?");
        this.offset += this.header.id_length;
        switch (this.header.image_type) {
        case e.TYPE_RLE_INDEXED:
            this.use_rle = !0;
            break;
        case e.TYPE_INDEXED:
            this.use_pal = !0;
            break;
        case e.TYPE_RLE_RGB:
            this.use_rle = !0;
            break;
        case e.TYPE_RGB:
            this.use_rgb = !0;
            break;
        case e.TYPE_RLE_GREY:
            this.use_rle = !0;
            break;
        case e.TYPE_GREY:
            this.use_grey = !0
        }
        this.parse(c)
    };
    e.prototype.checkHeader = function () {
        switch (this.header.image_type) {
        case e.TYPE_INDEXED:
        case e.TYPE_RLE_INDEXED:
            if (this.header.colormap_length > 256 || this.header.colormap_size !== 24 || this.header.colormap_type !== 1) throw Error("Targa::checkHeader() - Invalid type colormap data for indexed type");
            break;
        case e.TYPE_RGB:
        case e.TYPE_GREY:
        case e.TYPE_RLE_RGB:
        case e.TYPE_RLE_GREY:
            if (this.header.colormap_type) throw Error("Targa::checkHeader() - Invalid type colormap data for colormap type");
            break;
        case e.TYPE_NO_DATA:
            throw Error("Targa::checkHeader() - No data on this TGA file");
        default:
            throw Error("Targa::checkHeader() - Invalid type '" + this.header.image_type + "'");
        }
        if (this.header.width <= 0 || this.header.height <= 0) throw Error("Targa::checkHeader() - Invalid image size");
        if (this.header.pixel_size !== 8 && this.header.pixel_size !== 16 && this.header.pixel_size !== 24 && this.header.pixel_size !== 32) throw Error("Targa::checkHeader() - Invalid pixel size '" + this.header.pixel_size + "'");
    };
    e.prototype.parse = function (c) {
        var i;
        var b, a, d;
        b = this.header;
        a = b.pixel_size >> 3;
        d = b.width * b.height * a;
        if (this.use_pal) this.palettes =
            c.subarray(this.offset, this.offset += b.colormap_length * a);
        if (this.use_rle) {
            b = new Uint8Array(d);
            for (var g, f, e = 0, h = new Uint8Array(a); e < d;)
                if (g = c[this.offset++], f = (g & 127) + 1, g & 128) {
                    for (g = 0; g < a; ++g) h[g] = c[this.offset++];
                    for (g = 0; g < f; ++g) b.set(h, e + g * a);
                    e += a * f
                } else {
                    f *= a;
                    for (g = 0; g < f; ++g) b[e + g] = c[this.offset++];
                    e += f
                }
        } else i = c.subarray(this.offset, this.offset += this.use_pal ? b.width * b.height : d), b = i;
        this.image = b
    };
    e.prototype.getImageData = function (c) {
        var b = this.header.width,
            a = this.header.height,
            d, g, f, i;
        i = c || document &&
            document.createElement("canvas").getContext("2d").createImageData(b, a) || {
                width: b,
                height: a,
                data: new Uint8Array(b * a * 4)
        };
        switch ((this.header.flags & e.ORIGIN_MASK) >> e.ORIGIN_SHIFT) {
            default:
        case e.ORIGIN_UL:
            c = 0;
            d = 1;
            f = b;
            b = 0;
            g = 1;
            break;
        case e.ORIGIN_BL:
            c = 0;
            d = 1;
            f = b;
            b = a - 1;
            a = g = -1;
            break;
        case e.ORIGIN_UR:
            c = b - 1;
            f = d = -1;
            b = 0;
            g = 1;
            break;
        case e.ORIGIN_BR:
            c = b - 1, f = d = -1, b = a - 1, a = g = -1
        }
        this["getImageData" + (this.use_grey ? "Grey" : "") + this.header.pixel_size + "bits"](i.data, b, g, a, c, d, f);
        return i
    };
    e.prototype.getCanvas = function () {
        var c =
            document.createElement("canvas"),
            b = c.getContext("2d"),
            a = b.createImageData(this.header.width, this.header.height);
        c.width = this.header.width;
        c.height = this.header.height;
        b.putImageData(this.getImageData(a), 0, 0);
        return c
    };
    e.prototype.getDataURL = function (c) {
        return this.getCanvas().toDataURL(c || "image/png")
    };
    e.prototype.getImageData8bits = function (c, b, a, d, g, f, e) {
        var h = this.image,
            k = this.palettes,
            j = this.header.width,
            l = 0,
            m, o;
        for (o = b; o !== d; o += a)
            for (m = g; m !== e; m += f, l++) b = h[l], c[(m + j * o) * 4 + 3] = 255, c[(m + j * o) * 4 + 2] =
                k[b * 3 + 0], c[(m + j * o) * 4 + 1] = k[b * 3 + 1], c[(m + j * o) * 4 + 0] = k[b * 3 + 2];
        return c
    };
    e.prototype.getImageData16bits = function (c, b, a, d, g, f, e) {
        var h = this.image,
            k = this.header.width,
            j = 0,
            l, m;
        for (m = b; m !== d; m += a)
            for (l = g; l !== e; l += f, j += 2) b = h[j + 0] + (h[j + 1] << 8), c[(l + k * m) * 4 + 0] = (b & 31744) >> 7, c[(l + k * m) * 4 + 1] = (b & 992) >> 2, c[(l + k * m) * 4 + 2] = (b & 31) >> 3, c[(l + k * m) * 4 + 3] = b & 32768 ? 0 : 255;
        return c
    };
    e.prototype.getImageData24bits = function (c, b, a, d, g, f, e) {
        var h = this.image,
            k = this.header.width,
            j = 0,
            l;
        for (l = b; l !== d; l += a)
            for (b = g; b !== e; b += f, j += 3) c[(b + k * l) * 4 +
                3] = 255, c[(b + k * l) * 4 + 2] = h[j + 0], c[(b + k * l) * 4 + 1] = h[j + 1], c[(b + k * l) * 4 + 0] = h[j + 2];
        return c
    };
    e.prototype.getImageData32bits = function (c, b, a, d, g, f, e) {
        var h = this.image,
            k = this.header.width,
            j = 0,
            l;
        for (l = b; l !== d; l += a)
            for (b = g; b !== e; b += f, j += 4) c[(b + k * l) * 4 + 2] = h[j + 0], c[(b + k * l) * 4 + 1] = h[j + 1], c[(b + k * l) * 4 + 0] = h[j + 2], c[(b + k * l) * 4 + 3] = h[j + 3];
        return c
    };
    e.prototype.getImageDataGrey8bits = function (c, b, a, d, g, f, e) {
        var h = this.image,
            k = this.header.width,
            j = 0,
            l, m;
        for (m = b; m !== d; m += a)
            for (l = g; l !== e; l += f, j++) b = h[j], c[(l + k * m) * 4 + 0] = b, c[(l + k * m) *
                4 + 1] = b, c[(l + k * m) * 4 + 2] = b, c[(l + k * m) * 4 + 3] = 255;
        return c
    };
    e.prototype.getImageDataGrey16bits = function (c, b, a, d, g, f, e) {
        var h = this.image,
            k = this.header.width,
            j = 0,
            l;
        for (l = b; l !== d; l += a)
            for (b = g; b !== e; b += f, j += 2) c[(b + k * l) * 4 + 0] = h[j + 0], c[(b + k * l) * 4 + 1] = h[j + 0], c[(b + k * l) * 4 + 2] = h[j + 0], c[(b + k * l) * 4 + 3] = h[j + 1];
        return c
    };
    e.prototype.isSupported = function () {
        return !0
    };
    e.prototype.toString = function () {
        return "TgaLoader"
    };
    return e
});
define("goo/util/SimpleResourceUtil", [], function () {
    function e() {}
    e.countdown = function (c, b, a) {
        c[0]--;
        if (c[0] === 0) b.onSuccess(a)
    };
    e.loadTextAsset = function (c, b, a, d, g, f) {
        var i = new XMLHttpRequest;
        i.open("GET", a[b], !0);
        i.onreadystatechange = function () {
            if (i.readyState === 4)
                if (i.status >= 200 && i.status <= 299) g[d[b]] = i.responseText, e.countdown(c, f, g);
                else f.onError(i.statusText)
        };
        i.send()
    };
    e.loadTextAssets = function (c, b, a) {
        for (var d = [c.length], g = {}, f = 0, i = c.length; f < i; f++) e.loadTextAsset(d, f, c, b, g, a)
    };
    e.loadBinaryAsArrayBuffer =
        function (c, b) {
            var a = new XMLHttpRequest;
            a.open("GET", c);
            a.responseType = "arraybuffer";
            a.onload = function () {
                if (a.status !== 404) b.onSuccess(a.response);
                else a.onerror(null)
            };
            a.onerror = function () {
                b.onError(null)
            };
            a.send()
    };
    return e
});
define("goo/util/Latch", [], function () {
    function e(c, b) {
        this.count = c;
        this.callback = b
    }
    e.prototype.countDown = function () {
        this.count--;
        this.isDone() && this.callback && this.callback.done ? this.callback.done() : this.callback && this.callback.progress && this.callback.progress(this.count)
    };
    e.prototype.isDone = function () {
        return this.count === 0
    };
    return e
});
define("goo/renderer/TextureCreator", "goo/loaders/Loader,goo/renderer/Texture,goo/loaders/dds/DdsLoader,goo/loaders/crunch/CrunchLoader,goo/loaders/tga/TgaLoader,goo/util/SimpleResourceUtil,goo/renderer/Util,goo/util/Latch".split(","), function (e, c, b, a, d, g, f, i) {
    function h(c) {
        c = c || {};
        this.verticalFlip = c.verticalFlip !== void 0 ? c.verticalFlip : !0;
        this._loader = c.loader !== void 0 ? c.loader : new e;
        this.textureLoaders = {
            ".dds": new b,
            ".crn": new a,
            ".tga": new d
        }
    }

    function k(a, b) {
        return a.indexOf(b, a.length - b.length) !== -1
    }
    h.cache = {};
    h.UNSUPPORTED_FALLBACK = ".png";
    h.clearCache = function () {
        h.cache = {}
    };
    h.prototype.loadTexture2D = function (a, b, d) {
        if (h.cache[a] !== void 0) return d && d(), h.cache[a];
        var g = function (a) {
            r.load(a, u, n.verticalFlip, 0, a.byteLength);
            h._finishedLoading();
            d && d()
        }.bind(this),
            i = function (b) {
                console.warn("Error loading texture: " + a + " | " + b)
            }.bind(this),
            n = this,
            s;
        for (s in this.textureLoaders)
            if (k(a.toLowerCase(), s)) {
                var r = this.textureLoaders[s];
                if (!r || !r.isSupported()) {
                    a = a.substring(0, a.length - s.length);
                    a +=
                        h.UNSUPPORTED_FALLBACK;
                    b = b || {};
                    b.flipY = !1;
                    break
                }
                var u = new c(f.clone(h.DEFAULT_TEXTURE_2D.image), b);
                u.image.dataReady = !1;
                u.a = a;
                h.cache[a] = u;
                this._loader.load(a, null, e.ARRAY_BUFFER).then(g, i);
                return u
            }
        if (h.cache[a] !== void 0) return d && d(), h.cache[a];
        var q = new c(null, b);
        h.cache[a] = q;
        this._loader.loadImage(a).then(function (a) {
            q.setImage(a);
            h._finishedLoading(a);
            d && d()
        }).then(null, function (a) {
            console.error(a)
        });
        return q
    };
    h.prototype.loadTextureVideo = function (a, b, d, g) {
        if (h.cache[a] !== void 0) return h.cache[a];
        var e = document.createElement("video"),
            i;
        for (i in d) e[i] = d[i];
        e.loop = typeof b === "boolean" ? b : !0;
        e.addEventListener("error", function (b) {
            console.warn("Couldn't load video URL [" + a + "]", b);
            g && g(b)
        }, !1);
        var k = new c(e, {
            wrapS: "EdgeClamp",
            wrapT: "EdgeClamp"
        });
        k.readyCallback = function () {
            if (e.readyState >= 3) {
                console.log("Video ready: " + e.videoWidth + ", " + e.videoHeight);
                e.width = e.videoWidth;
                e.height = e.videoHeight;
                if (f.isPowerOfTwo(e.width) === !1 || f.isPowerOfTwo(e.height) === !1) k.generateMipmaps = !1, k.minFilter = "BilinearNoMipMaps";
                e.play();
                return e.dataReady = !0
            }
            return !1
        };
        k.updateCallback = function () {
            return !e.paused
        };
        e.crossOrigin = "anonymous";
        e.src = a;
        return h.cache[a] = k
    };
    h.prototype.loadTextureWebCam = function () {
        var a = document.createElement("video");
        a.autoplay = !0;
        a.loop = !0;
        var b = new c(a, {
            wrapS: "EdgeClamp",
            wrapT: "EdgeClamp"
        });
        b.readyCallback = function () {
            if (a.readyState >= 3) {
                console.log("WebCam video ready: " + a.videoWidth + ", " + a.videoHeight);
                a.width = a.videoWidth;
                a.height = a.videoHeight;
                if (f.isPowerOfTwo(a.width) === !1 || f.isPowerOfTwo(a.height) === !1) b.generateMipmaps = !1, b.minFilter = "BilinearNoMipMaps";
                return a.dataReady = !0
            }
            return !1
        };
        b.updateCallback = function () {
            return !a.paused
        };
        window.URL = window.URL || window.webkitURL;
        navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
        navigator.getUserMedia ? navigator.getUserMedia({
            video: !0
        }, function (b) {
            a.src = window.URL.createObjectURL(b)
        }, function (a) {
            console.warn("Unable to capture WebCam. Please reload the page.", a)
        }) : console.warn("No support for WebCam getUserMedia found!");
        return b
    };
    h.prototype.loadTextureCube = function (a, b) {
        var d = new c(null, b);
        d.variant = "CUBE";
        for (var g = [], f = new i(6, {
                done: function () {
                    for (var a = g[0].width, b = g[0].height, c = 0; c < 6; c++) {
                        var f = g[c];
                        if (a !== f.width || b !== f.height) d.generateMipmaps = !1, d.minFilter = "BilinearNoMipMaps", console.error("Images not all the same size!")
                    }
                    d.setImage(g);
                    d.image.dataReady = !0;
                    d.image.width = a;
                    d.image.height = b
                }
            }), h = this, e = 0; e < a.length; e++)(function (b) {
            var d = a[b];
            typeof d === "string" ? h._loader.loadImage(d).then(function (a) {
                g[b] =
                    a;
                f.countDown()
            }) : (g[b] = d, f.countDown())
        })(e);
        return d
    };
    h._globalCallback = null;
    h._finishedLoading = function (a) {
        if (h._globalCallback) try {
            h._globalCallback(a)
        } catch (b) {
            console.error("Error in texture callback:", b)
        }
    };
    g = new Uint8Array([255, 255, 255, 255]);
    h.DEFAULT_TEXTURE_2D = new c(g, null, 1, 1);
    h.DEFAULT_TEXTURE_CUBE = new c([g, g, g, g, g, g], null, 1, 1);
    h.DEFAULT_TEXTURE_CUBE.variant = "CUBE";
    return h
});
define("goo/renderer/pass/RenderTarget", ["goo/math/Vector2"], function (e) {
    function c(b, a, d) {
        this._glFrameBuffer = this._glRenderBuffer = this.glTexture = null;
        this.width = Math.floor(b);
        this.height = Math.floor(a);
        d = d || {};
        this.wrapS = d.wrapS !== void 0 ? d.wrapS : "EdgeClamp";
        this.wrapT = d.wrapT !== void 0 ? d.wrapT : "EdgeClamp";
        this.magFilter = d.magFilter !== void 0 ? d.magFilter : "Bilinear";
        this.minFilter = d.minFilter !== void 0 ? d.minFilter : "BilinearNoMipMaps";
        this.anisotropy = d.anisotropy !== void 0 ? d.anisotropy : 1;
        this.offset = new e(0,
            0);
        this.repeat = new e(1, 1);
        this.format = d.format !== void 0 ? d.format : "RGBA";
        this.type = d.type !== void 0 ? d.type : "UnsignedByte";
        this.variant = "2D";
        this.depthBuffer = d.depthBuffer !== void 0 ? d.depthBuffer : !0;
        this.stencilBuffer = d.stencilBuffer !== void 0 ? d.stencilBuffer : !0;
        this.generateMipmaps = !1
    }
    c.prototype.clone = function () {
        var b = new c(this.width, this.height);
        b.wrapS = this.wrapS;
        b.wrapT = this.wrapT;
        b.magFilter = this.magFilter;
        b.anisotropy = this.anisotropy;
        b.minFilter = this.minFilter;
        b.offset.copy(this.offset);
        b.repeat.copy(this.repeat);
        b.format = this.format;
        b.type = this.type;
        b.variant = this.variant;
        b.depthBuffer = this.depthBuffer;
        b.stencilBuffer = this.stencilBuffer;
        b.generateMipmaps = this.generateMipmaps;
        return b
    };
    return c
});
define("goo/entities/Entity", [], function () {
    function e(b, a) {
        this._world = b;
        this._components = [];
        Object.defineProperty(this, "id", {
            value: e.entityCount++,
            writable: !1
        });
        this.name = a !== void 0 ? a : "Entity_" + this.id;
        this.skip = !1
    }

    function c(b) {
        return b.charAt(0).toLowerCase() + b.substr(1)
    }
    e.prototype.addToWorld = function (b) {
        this._world.addEntity(this, b)
    };
    e.prototype.removeFromWorld = function (b) {
        this._world.removeEntity(this, b)
    };
    e.prototype.setComponent = function (b) {
        if (this.hasComponent(b.type))
            for (var a = 0; a < this._components.length; a++) {
                if (this._components[a].type ===
                    b.type) {
                    this._components[a] = b;
                    break
                }
            } else this._components.push(b);
        this[c(b.type)] = b;
        if (b.type === "TransformComponent") b.entity = this;
        this._world.entityManager.containsEntity(this) && this._world.changedEntity(this, b, "addedComponent")
    };
    e.prototype.hasComponent = function (b) {
        return this[c(b)] !== void 0
    };
    e.prototype.getComponent = function (b) {
        return this[c(b)]
    };
    e.prototype.clearComponent = function (b) {
        var a = this[c(b)],
            d = this._components.indexOf(a);
        if (d !== -1) {
            a = this._components[d];
            if (a.type === "TransformComponent") a.entity =
                void 0;
            this._components.splice(d, 1)
        }
        delete this[c(b)];
        this._world.entityManager.containsEntity(this) && this._world.changedEntity(this, a, "removedComponent")
    };
    e.prototype.toString = function () {
        return this.name
    };
    e.entityCount = 0;
    return e
});
define("goo/renderer/ShaderCall", [], function () {
    function e(a, b, c) {
        this.context = a;
        this.location = b;
        this.location.value = void 0;
        if (c) switch (c) {
        case "float":
            this.call = this.uniform1f;
            break;
        case "bool":
        case "int":
        case "integer":
        case "sampler2D":
        case "sampler3D":
        case "samplerCube":
            this.call = this.uniform1i;
            break;
        case "floatarray":
            this.call = this.uniform1fv;
            break;
        case "intarray":
        case "samplerArray":
            this.call = this.uniform1iv;
            break;
        case "vec2":
            this.call = this.uniform2fv;
            break;
        case "vec3":
            this.call = this.uniform3fv;
            break;
        case "vec4":
            this.call = this.uniform4fv;
            break;
        case "mat2":
            this.call = this.uniformMatrix2fv;
            break;
        case "mat3":
            this.call = this.uniformMatrix3fv;
            break;
        case "mat4":
            this.call = this.uniformMatrix4fv;
            break;
        default:
            throw "Uniform type not handled: " + c;
        }
    }

    function c(a, b, c) {
        if (c < 0) return !1;
        for (; c--;)
            if (a[c] !== b[c]) return !1;
        return !0
    }

    function b(a, b) {
        for (var c = a.length; c--;)
            if (a[c] !== b[c]) return !1;
        return !0
    }
    e.prototype.uniform1f = function (a) {
        if (this.location.value !== a) this.context.uniform1f(this.location, a), this.location.value =
            a
    };
    e.prototype.uniform1fv = function (a) {
        var d = this.location.value;
        if (!(d !== void 0 && b(a, d))) this.context.uniform1fv(this.location, a), this.location.value = a.slice()
    };
    e.prototype.uniform1i = function (a) {
        if (this.location.value !== a) this.context.uniform1i(this.location, a), this.location.value = a
    };
    e.prototype.uniform1iv = function (a) {
        var d = this.location.value;
        if (!(d !== void 0 && b(a, d))) this.context.uniform1iv(this.location, a), this.location.value = a.slice()
    };
    e.prototype.uniform2f = function (a, b) {
        var c = this.location.value;
        if (!(c !== void 0 && c.length === 2 && c[0] === a && c[1] === b)) this.context.uniform2f(this.location, a, b), this.location.value = [a, b]
    };
    e.prototype.uniform2fv = function (a) {
        var d = this.location.value;
        if (d !== void 0) {
            if (b(a, d)) return
        } else d = this.location.value = new Float64Array(a.length);
        this.context.uniform2fv(this.location, a);
        for (var c = a.length; c--;) d[c] = a[c]
    };
    e.prototype.uniform2i = function (a, b) {
        var c = this.location.value;
        if (!(c !== void 0 && c.length === 2 && c[0] === a && c[1] === b)) this.context.uniform2i(this.location, a, b), this.location.value = [a, b]
    };
    e.prototype.uniform2iv = function (a) {
        var d = this.location.value;
        if (!(d !== void 0 && b(a, d))) this.context.uniform2iv(this.location, a), this.location.value = a.slice()
    };
    e.prototype.uniform3f = function (a, b, c) {
        var f = this.location.value;
        if (!(f !== void 0 && f.length === 3 && f[0] === a && f[1] === b && f[2] === c)) this.context.uniform3f(this.location, a, b, c), this.location.value = [a, b, c]
    };
    e.prototype.uniform3fv = function (a) {
        var d = this.location.value;
        if (d !== void 0) {
            if (b(a, d)) return
        } else d = this.location.value = new Float64Array(a.length);
        this.context.uniform3fv(this.location, a);
        for (var c = a.length; c--;) d[c] = a[c]
    };
    e.prototype.uniform3i = function (a, b, c) {
        var f = this.location.value;
        if (!(f !== void 0 && f.length === 3 && f[0] === a && f[1] === b && f[2] === c)) this.context.uniform3i(this.location, a, b, c), this.location.value = [a, b, c]
    };
    e.prototype.uniform3iv = function (a) {
        var d = this.location.value;
        if (!(d !== void 0 && b(a, d))) this.context.uniform3iv(this.location, a), this.location.value = a.slice()
    };
    e.prototype.uniform4f = function (a, b, c, f) {
        var e = this.location.value;
        if (!(e !==
            void 0 && e.length === 4 && e[0] === a && e[1] === b && e[2] === c && e[3] === f)) this.context.uniform4f(this.location, a, b, c, f), this.location.value = [a, b, c, f]
    };
    e.prototype.uniform4fv = function (a) {
        var d = this.location.value;
        if (d !== void 0) {
            if (b(a, d)) return
        } else d = this.location.value = new Float64Array(a.length);
        this.context.uniform4fv(this.location, a);
        for (var c = a.length; c--;) d[c] = a[c]
    };
    e.prototype.uniform4i = function (a, b, c, f) {
        var e = this.location.value;
        if (!(e !== void 0 && e.length === 4 && e[0] === a && e[1] === b && e[2] === c && e[3] === f)) this.context.uniform4i(this.location,
            a, b, c, f), this.location.value = [a, b, c, f]
    };
    e.prototype.uniform4iv = function (a) {
        var d = this.location.value;
        if (!(d !== void 0 && b(a, d))) this.context.uniform4iv(this.location, a), this.location.value = a.slice()
    };
    e.prototype.uniformMatrix2fv = function (a, b) {
        b = b === !0;
        if (a.data) {
            var g = this.location.value;
            if (g !== void 0)
                if (c(g.data, a.data, 4)) return;
                else g.copy(a);
                else this.location.value = a.clone();
            this.context.uniformMatrix2fv(this.location, b, a.data)
        } else this.context.uniformMatrix2fv(this.location, b, a)
    };
    e.prototype.uniformMatrix3fv =
        function (a, b) {
            b = b === !0;
            if (a.data) {
                var g = this.location.value;
                if (g !== void 0)
                    if (c(g.data, a.data, 9)) return;
                    else g.copy(a);
                    else this.location.value = a.clone();
                this.context.uniformMatrix3fv(this.location, b, a.data)
            } else this.context.uniformMatrix3fv(this.location, b, a)
    };
    e.prototype.uniformMatrix4fv = function (a, d) {
        d = d === !0;
        if (a.data) {
            g = this.location.value;
            if (g !== void 0)
                if (c(g.data, a.data, 16)) return;
                else g.copy(a);
                else this.location.value = a.clone();
            this.context.uniformMatrix4fv(this.location, d, a.data)
        } else {
            var g =
                this.location.value;
            if (g !== void 0) {
                if (b(a, g)) return
            } else g = this.location.value = new Float64Array(a.length);
            this.context.uniformMatrix4fv(this.location, d, a);
            for (var f = a.length; f--;) g[f] = a[f]
        }
    };
    return e
});
define("goo/math/Matrix4x4", ["goo/math/MathUtils", "goo/math/Matrix"], function (e, c) {
    function b() {
        c.call(this, 4, 4);
        arguments.length === 0 ? this.setIdentity() : this.set(arguments)
    }
    b.prototype = Object.create(c.prototype);
    b.prototype.setupAliases([
        ["e00"],
        ["e10"],
        ["e20"],
        ["e30"],
        ["e01"],
        ["e11"],
        ["e21"],
        ["e31"],
        ["e02"],
        ["e12"],
        ["e22"],
        ["e32"],
        ["e03"],
        ["e13"],
        ["e23"],
        ["e33"]
    ]);
    b.IDENTITY = new b(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    b.add = function (a, d, c) {
        c || (c = new b);
        d instanceof b ? (c.e00 = a.e00 + d.e00, c.e10 = a.e10 + d.e10,
            c.e20 = a.e20 + d.e20, c.e30 = a.e30 + d.e30, c.e01 = a.e01 + d.e01, c.e11 = a.e11 + d.e11, c.e21 = a.e21 + d.e21, c.e31 = a.e31 + d.e31, c.e02 = a.e02 + d.e02, c.e12 = a.e12 + d.e12, c.e22 = a.e22 + d.e22, c.e32 = a.e32 + d.e32, c.e03 = a.e03 + d.e03, c.e13 = a.e13 + d.e13, c.e23 = a.e23 + d.e23, c.e33 = a.e33 + d.e33) : (c.e00 = a.e00 + d, c.e10 = a.e10 + d, c.e20 = a.e20 + d, c.e30 = a.e30 + d, c.e01 = a.e01 + d, c.e11 = a.e11 + d, c.e21 = a.e21 + d, c.e31 = a.e31 + d, c.e02 = a.e02 + d, c.e12 = a.e12 + d, c.e22 = a.e22 + d, c.e32 = a.e32 + d, c.e03 = a.e03 + d, c.e13 = a.e13 + d, c.e23 = a.e23 + d, c.e33 = a.e33 + d);
        return c
    };
    b.prototype.add =
        function (a) {
            return b.add(this, a, this)
    };
    b.sub = function (a, d, c) {
        c || (c = new b);
        d instanceof b ? (c.e00 = a.e00 - d.e00, c.e10 = a.e10 - d.e10, c.e20 = a.e20 - d.e20, c.e30 = a.e30 - d.e30, c.e01 = a.e01 - d.e01, c.e11 = a.e11 - d.e11, c.e21 = a.e21 - d.e21, c.e31 = a.e31 - d.e31, c.e02 = a.e02 - d.e02, c.e12 = a.e12 - d.e12, c.e22 = a.e22 - d.e22, c.e32 = a.e32 - d.e32, c.e03 = a.e03 - d.e03, c.e13 = a.e13 - d.e13, c.e23 = a.e23 - d.e23, c.e33 = a.e33 - d.e33) : (c.e00 = a.e00 - d, c.e10 = a.e10 - d, c.e20 = a.e20 - d, c.e30 = a.e30 - d, c.e01 = a.e01 - d, c.e11 = a.e11 - d, c.e21 = a.e21 - d, c.e31 = a.e31 - d, c.e02 = a.e02 -
            d, c.e12 = a.e12 - d, c.e22 = a.e22 - d, c.e32 = a.e32 - d, c.e03 = a.e03 - d, c.e13 = a.e13 - d, c.e23 = a.e23 - d, c.e33 = a.e33 - d);
        return c
    };
    b.prototype.sub = function (a) {
        return b.sub(this, a, this)
    };
    b.mul = function (a, d, c) {
        c || (c = new b);
        d instanceof b ? (c.e00 = a.e00 * d.e00, c.e10 = a.e10 * d.e10, c.e20 = a.e20 * d.e20, c.e30 = a.e30 * d.e30, c.e01 = a.e01 * d.e01, c.e11 = a.e11 * d.e11, c.e21 = a.e21 * d.e21, c.e31 = a.e31 * d.e31, c.e02 = a.e02 * d.e02, c.e12 = a.e12 * d.e12, c.e22 = a.e22 * d.e22, c.e32 = a.e32 * d.e32, c.e03 = a.e03 * d.e03, c.e13 = a.e13 * d.e13, c.e23 = a.e23 * d.e23, c.e33 = a.e33 * d.e33) :
            (c.e00 = a.e00 * d, c.e10 = a.e10 * d, c.e20 = a.e20 * d, c.e30 = a.e30 * d, c.e01 = a.e01 * d, c.e11 = a.e11 * d, c.e21 = a.e21 * d, c.e31 = a.e31 * d, c.e02 = a.e02 * d, c.e12 = a.e12 * d, c.e22 = a.e22 * d, c.e32 = a.e32 * d, c.e03 = a.e03 * d, c.e13 = a.e13 * d, c.e23 = a.e23 * d, c.e33 = a.e33 * d);
        return c
    };
    b.prototype.mul = function (a) {
        return b.mul(this, a, this)
    };
    b.div = function (a, d, c) {
        c || (c = new b);
        d instanceof b ? (c.e00 = a.e00 / d.e00, c.e10 = a.e10 / d.e10, c.e20 = a.e20 / d.e20, c.e30 = a.e30 / d.e30, c.e01 = a.e01 / d.e01, c.e11 = a.e11 / d.e11, c.e21 = a.e21 / d.e21, c.e31 = a.e31 / d.e31, c.e02 = a.e02 / d.e02,
            c.e12 = a.e12 / d.e12, c.e22 = a.e22 / d.e22, c.e32 = a.e32 / d.e32, c.e03 = a.e03 / d.e03, c.e13 = a.e13 / d.e13, c.e23 = a.e23 / d.e23, c.e33 = a.e33 / d.e33) : (d = 1 / d, c.e00 = a.e00 * d, c.e10 = a.e10 * d, c.e20 = a.e20 * d, c.e30 = a.e30 * d, c.e01 = a.e01 * d, c.e11 = a.e11 * d, c.e21 = a.e21 * d, c.e31 = a.e31 * d, c.e02 = a.e02 * d, c.e12 = a.e12 * d, c.e22 = a.e22 * d, c.e32 = a.e32 * d, c.e03 = a.e03 * d, c.e13 = a.e13 * d, c.e23 = a.e23 * d, c.e33 = a.e33 * d);
        return c
    };
    b.prototype.div = function (a) {
        return b.div(this, a, this)
    };
    b.combine = function (a, d, c) {
        c || (c = new b);
        var f = a.data,
            a = f[0],
            e = f[4],
            h = f[8],
            k = f[12],
            j = f[1],
            l = f[5],
            m = f[9],
            o = f[13],
            p = f[2],
            n = f[6],
            s = f[10],
            r = f[14],
            u = f[3],
            q = f[7],
            x = f[11],
            f = f[15],
            t = d.data,
            d = t[0],
            w = t[4],
            z = t[8],
            v = t[12],
            A = t[1],
            y = t[5],
            B = t[9],
            C = t[13],
            F = t[2],
            N = t[6],
            D = t[10],
            K = t[14],
            J = t[3],
            O = t[7],
            M = t[11],
            t = t[15],
            I = c.data;
        I[0] = a * d + e * A + h * F + k * J;
        I[4] = a * w + e * y + h * N + k * O;
        I[8] = a * z + e * B + h * D + k * M;
        I[12] = a * v + e * C + h * K + k * t;
        I[1] = j * d + l * A + m * F + o * J;
        I[5] = j * w + l * y + m * N + o * O;
        I[9] = j * z + l * B + m * D + o * M;
        I[13] = j * v + l * C + m * K + o * t;
        I[2] = p * d + n * A + s * F + r * J;
        I[6] = p * w + n * y + s * N + r * O;
        I[10] = p * z + n * B + s * D + r * M;
        I[14] = p * v + n * C + s * K + r * t;
        I[3] = u * d + q * A + x * F + f * J;
        I[7] = u * w + q * y + x * N + f * O;
        I[11] = u * z + q * B + x * D + f * M;
        I[15] = u * v + q * C + x * K + f * t;
        return c
    };
    b.prototype.combine = function (a) {
        return b.combine(this, a, this)
    };
    b.transpose = function (a, d) {
        d || (d = new b);
        var c = a.data,
            f = d.data;
        if (d === a) {
            var e = c[4],
                h = c[8],
                k = c[12],
                j = c[9],
                l = c[13],
                m = c[14];
            f[4] = c[1];
            f[8] = c[2];
            f[12] = c[3];
            f[9] = c[6];
            f[13] = c[7];
            f[14] = c[11];
            f[1] = e;
            f[2] = h;
            f[3] = k;
            f[6] = j;
            f[7] = l;
            f[11] = m;
            return d
        }
        f[0] = c[0];
        f[1] = c[4];
        f[2] = c[8];
        f[3] = c[12];
        f[4] = c[1];
        f[5] = c[5];
        f[6] = c[9];
        f[7] = c[13];
        f[8] = c[2];
        f[9] = c[6];
        f[10] = c[10];
        f[11] = c[14];
        f[12] =
            c[3];
        f[13] = c[7];
        f[14] = c[11];
        f[15] = c[15];
        return d
    };
    b.prototype.transpose = function () {
        return b.transpose(this, this)
    };
    b.invert = function (a, d) {
        d || (d = new b);
        if (d === a) return c.copy(b.invert(a), d);
        var g = a.determinant();
        if (Math.abs(g) < e.EPSILON) throw {
            name: "Singular Matrix",
            message: "The matrix is singular and cannot be inverted."
        };
        var f = a.data,
            i = d.data,
            g = 1 / g;
        i[0] = (f[5] * (f[10] * f[15] - f[14] * f[11]) - f[9] * (f[6] * f[15] - f[14] * f[7]) + f[13] * (f[6] * f[11] - f[10] * f[7])) * g;
        i[1] = (f[1] * (f[14] * f[11] - f[10] * f[15]) - f[9] * (f[14] * f[3] -
            f[2] * f[15]) + f[13] * (f[10] * f[3] - f[2] * f[11])) * g;
        i[2] = (f[1] * (f[6] * f[15] - f[14] * f[7]) - f[5] * (f[2] * f[15] - f[14] * f[3]) + f[13] * (f[2] * f[7] - f[6] * f[3])) * g;
        i[3] = (f[1] * (f[10] * f[7] - f[6] * f[11]) - f[5] * (f[10] * f[3] - f[2] * f[11]) + f[9] * (f[6] * f[3] - f[2] * f[7])) * g;
        i[4] = (f[4] * (f[14] * f[11] - f[10] * f[15]) - f[8] * (f[14] * f[7] - f[6] * f[15]) + f[12] * (f[10] * f[7] - f[6] * f[11])) * g;
        i[5] = (f[0] * (f[10] * f[15] - f[14] * f[11]) - f[8] * (f[2] * f[15] - f[14] * f[3]) + f[12] * (f[2] * f[11] - f[10] * f[3])) * g;
        i[6] = (f[0] * (f[14] * f[7] - f[6] * f[15]) - f[4] * (f[14] * f[3] - f[2] * f[15]) + f[12] *
            (f[6] * f[3] - f[2] * f[7])) * g;
        i[7] = (f[0] * (f[6] * f[11] - f[10] * f[7]) - f[4] * (f[2] * f[11] - f[10] * f[3]) + f[8] * (f[2] * f[7] - f[6] * f[3])) * g;
        i[8] = (f[4] * (f[9] * f[15] - f[13] * f[11]) - f[8] * (f[5] * f[15] - f[13] * f[7]) + f[12] * (f[5] * f[11] - f[9] * f[7])) * g;
        i[9] = (f[0] * (f[13] * f[11] - f[9] * f[15]) - f[8] * (f[13] * f[3] - f[1] * f[15]) + f[12] * (f[9] * f[3] - f[1] * f[11])) * g;
        i[10] = (f[0] * (f[5] * f[15] - f[13] * f[7]) - f[4] * (f[1] * f[15] - f[13] * f[3]) + f[12] * (f[1] * f[7] - f[5] * f[3])) * g;
        i[11] = (f[0] * (f[9] * f[7] - f[5] * f[11]) - f[4] * (f[9] * f[3] - f[1] * f[11]) + f[8] * (f[5] * f[3] - f[1] * f[7])) * g;
        i[12] = (f[4] * (f[13] * f[10] - f[9] * f[14]) - f[8] * (f[13] * f[6] - f[5] * f[14]) + f[12] * (f[9] * f[6] - f[5] * f[10])) * g;
        i[13] = (f[0] * (f[9] * f[14] - f[13] * f[10]) - f[8] * (f[1] * f[14] - f[13] * f[2]) + f[12] * (f[1] * f[10] - f[9] * f[2])) * g;
        i[14] = (f[0] * (f[13] * f[6] - f[5] * f[14]) - f[4] * (f[13] * f[2] - f[1] * f[14]) + f[12] * (f[5] * f[2] - f[1] * f[6])) * g;
        i[15] = (f[0] * (f[5] * f[10] - f[9] * f[6]) - f[4] * (f[1] * f[10] - f[9] * f[2]) + f[8] * (f[1] * f[6] - f[5] * f[2])) * g;
        return d
    };
    b.prototype.invert = function () {
        return b.invert(this, this)
    };
    b.prototype.isOrthogonal = function () {
        var a;
        a = this.e00 *
            this.e01 + this.e10 * this.e11 + this.e20 * this.e21 + this.e30 * this.e31;
        if (Math.abs(a) > e.EPSILON) return !1;
        a = this.e00 * this.e02 + this.e10 * this.e12 + this.e20 * this.e22 + this.e30 * this.e32;
        if (Math.abs(a) > e.EPSILON) return !1;
        a = this.e00 * this.e03 + this.e10 * this.e13 + this.e20 * this.e23 + this.e30 * this.e33;
        if (Math.abs(a) > e.EPSILON) return !1;
        a = this.e01 * this.e02 + this.e11 * this.e12 + this.e21 * this.e22 + this.e31 * this.e32;
        if (Math.abs(a) > e.EPSILON) return !1;
        a = this.e01 * this.e03 + this.e11 * this.e13 + this.e21 * this.e23 + this.e31 * this.e33;
        if (Math.abs(a) >
            e.EPSILON) return !1;
        a = this.e02 * this.e03 + this.e12 * this.e13 + this.e22 * this.e23 + this.e32 * this.e33;
        return Math.abs(a) > e.EPSILON ? !1 : !0
    };
    b.prototype.isNormal = function () {
        var a;
        a = this.e00 * this.e00 + this.e10 * this.e10 + this.e20 * this.e20 + this.e30 * this.e30;
        if (Math.abs(a - 1) > e.EPSILON) return !1;
        a = this.e01 * this.e01 + this.e11 * this.e11 + this.e21 * this.e21 + this.e31 * this.e31;
        if (Math.abs(a - 1) > e.EPSILON) return !1;
        a = this.e02 * this.e02 + this.e12 * this.e12 + this.e22 * this.e22 + this.e32 * this.e32;
        if (Math.abs(a - 1) > e.EPSILON) return !1;
        a = this.e03 *
            this.e03 + this.e13 * this.e13 + this.e23 * this.e23 + this.e33 * this.e33;
        return Math.abs(a - 1) > e.EPSILON ? !1 : !0
    };
    b.prototype.isOrthonormal = function () {
        return this.isOrthogonal() && this.isNormal()
    };
    b.prototype.determinant = function () {
        var a = this.data;
        return a[0] * (a[5] * a[10] * a[15] + a[9] * a[14] * a[7] + a[13] * a[6] * a[11] - a[13] * a[10] * a[7] - a[9] * a[6] * a[15] - a[5] * a[14] * a[11]) - a[4] * (a[1] * a[10] * a[15] + a[9] * a[14] * a[3] + a[13] * a[2] * a[11] - a[13] * a[10] * a[3] - a[9] * a[2] * a[15] - a[1] * a[14] * a[11]) + a[8] * (a[1] * a[6] * a[15] + a[5] * a[14] * a[3] + a[13] * a[2] *
            a[7] - a[13] * a[6] * a[3] - a[5] * a[2] * a[15] - a[1] * a[14] * a[7]) - a[12] * (a[1] * a[6] * a[11] + a[5] * a[10] * a[3] + a[9] * a[2] * a[7] - a[9] * a[6] * a[3] - a[5] * a[2] * a[11] - a[1] * a[10] * a[7])
    };
    b.prototype.setIdentity = function () {
        var a = this.data;
        a[0] = 1;
        a[1] = 0;
        a[2] = 0;
        a[3] = 0;
        a[4] = 0;
        a[5] = 1;
        a[6] = 0;
        a[7] = 0;
        a[8] = 0;
        a[9] = 0;
        a[10] = 1;
        a[11] = 0;
        a[12] = 0;
        a[13] = 0;
        a[14] = 0;
        a[15] = 1;
        return this
    };
    b.prototype.setRotationFromVector = function (a) {
        var b = Math.sin(a.x),
            c = Math.cos(a.x),
            f = Math.sin(a.y),
            e = Math.cos(a.y),
            h = Math.sin(a.z),
            a = Math.cos(a.z);
        this.e00 = a * e;
        this.e10 =
            h * e;
        this.e20 = 0 - f;
        this.e01 = a * f * b - h * c;
        this.e11 = h * f * b + a * c;
        this.e21 = e * b;
        this.e02 = a * f * c + h * b;
        this.e12 = h * f * c - a * b;
        this.e22 = e * c;
        return this
    };
    b.prototype.setRotationFromQuaternion = function (a) {
        var b = a.lengthSquared(),
            b = b > 0 ? 2 / b : 0,
            c = a.x * b,
            f = a.y * b,
            e = a.z * b,
            b = a.w * c,
            h = a.w * f,
            k = a.w * e;
        c *= a.x;
        var j = a.x * f,
            l = a.x * e;
        f *= a.y;
        var m = a.y * e,
            a = a.z * e;
        this.e00 = 1 - f - a;
        this.e10 = j + k;
        this.e20 = l - h;
        this.e01 = j - k;
        this.e11 = 1 - c - a;
        this.e21 = m + b;
        this.e02 = l + h;
        this.e12 = m - b;
        this.e22 = 1 - c - f;
        return this
    };
    b.prototype.setTranslation = function (a) {
        this.e03 =
            a.x;
        this.e13 = a.y;
        this.e23 = a.z;
        return this
    };
    b.prototype.getTranslation = function (a) {
        a.x = this.data[12];
        a.y = this.data[13];
        a.z = this.data[14];
        return this
    };
    b.prototype.getScale = function (a) {
        var b = Math.sqrt(a.setd(this.data[0], this.data[4], this.data[8]).lengthSquared()),
            c = Math.sqrt(a.setd(this.data[1], this.data[5], this.data[9]).lengthSquared()),
            f = Math.sqrt(a.setd(this.data[2], this.data[6], this.data[10]).lengthSquared());
        a.x = b;
        a.y = c;
        a.z = f;
        return this
    };
    b.prototype.setScale = function (a) {
        this.e00 *= a.x;
        this.e10 *=
            a.y;
        this.e20 *= a.z;
        this.e01 *= a.x;
        this.e11 *= a.y;
        this.e21 *= a.z;
        this.e02 *= a.x;
        this.e12 *= a.y;
        this.e22 *= a.z;
        return this
    };
    b.prototype.applyPre = function (a) {
        var b = a.data[0],
            c = a.data[1],
            f = a.data[2],
            e = a.data[3],
            h = this.data;
        a.data[0] = h[0] * b + h[1] * c + h[2] * f + h[3] * e;
        a.data[1] = h[4] * b + h[5] * c + h[6] * f + h[7] * e;
        a.data[2] = h[8] * b + h[9] * c + h[10] * f + h[11] * e;
        a.data[3] = h[12] * b + h[13] * c + h[14] * f + h[15] * e;
        return a
    };
    b.prototype.applyPost = function (a) {
        var b = a.data[0],
            c = a.data[1],
            f = a.data[2],
            e = a.data[3],
            h = this.data;
        a.data[0] = h[0] * b + h[4] * c +
            h[8] * f + h[12] * e;
        a.data[1] = h[1] * b + h[5] * c + h[9] * f + h[13] * e;
        a.data[2] = h[2] * b + h[6] * c + h[10] * f + h[14] * e;
        a.data[3] = h[3] * b + h[7] * c + h[11] * f + h[15] * e;
        return a
    };
    b.prototype.applyPostPoint = function (a) {
        var b = a.data[0],
            c = a.data[1],
            f = a.data[2],
            e = this.data;
        a.data[0] = e[0] * b + e[4] * c + e[8] * f + e[12];
        a.data[1] = e[1] * b + e[5] * c + e[9] * f + e[13];
        a.data[2] = e[2] * b + e[6] * c + e[10] * f + e[14];
        return a
    };
    b.prototype.applyPostVector = function (a) {
        var b = a.x,
            c = a.y,
            f = a.z,
            e = this.data;
        a.x = e[0] * b + e[4] * c + e[8] * f;
        a.y = e[1] * b + e[5] * c + e[9] * f;
        a.z = e[2] * b + e[6] * c + e[10] *
            f;
        return a
    };
    b.prototype.copy = function (a) {
        var b = this.data,
            a = a.data;
        b[0] = a[0];
        b[1] = a[1];
        b[2] = a[2];
        b[3] = a[3];
        b[4] = a[4];
        b[5] = a[5];
        b[6] = a[6];
        b[7] = a[7];
        b[8] = a[8];
        b[9] = a[9];
        b[10] = a[10];
        b[11] = a[11];
        b[12] = a[12];
        b[13] = a[13];
        b[14] = a[14];
        b[15] = a[15];
        return this
    };
    b.prototype.clone = function () {
        var a = this.data;
        return new b(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8], a[9], a[10], a[11], a[12], a[13], a[14], a[15])
    };
    return b
});
define("goo/entities/managers/EntityManager", [], function () {
    function e() {
        this.type = "EntityManager";
        this._entitiesById = [];
        this._entityCount = 0
    }
    e.prototype.added = function (c) {
        this.containsEntity(c) || (this._entitiesById[c.id] = c, this._entityCount++)
    };
    e.prototype.removed = function (c) {
        this.containsEntity(c) && (delete this._entitiesById[c.id], this._entityCount--)
    };
    e.prototype.containsEntity = function (c) {
        return this._entitiesById[c.id] !== void 0
    };
    e.prototype.getEntityById = function (c) {
        return this._entitiesById[c]
    };
    e.prototype.getEntityByName = function (c) {
        for (var b in this._entitiesById) {
            var a = this._entitiesById[b];
            if (a.name === c) return a
        }
    };
    e.prototype.size = function () {
        return this._entityCount
    };
    e.prototype.getEntities = function () {
        var c = [],
            b;
        for (b in this._entitiesById) c.push(this._entitiesById[b]);
        return c
    };
    e.prototype.getTopEntities = function () {
        var c = [],
            b;
        for (b in this._entitiesById) {
            var a = this._entitiesById[b];
            a.transformComponent ? a.transformComponent.parent || c.push(a) : c.push(a)
        }
        return c
    };
    return e
});
define("goo/math/Transform", ["goo/math/Vector3", "goo/math/Matrix3x3", "goo/math/Matrix4x4"], function (e, c, b) {
    function a() {
        this.matrix = new b;
        this.translation = new e;
        this.rotation = new c;
        this.scale = new e(1, 1, 1);
        this.tmpVec = new e;
        this.tmpVec2 = new e;
        this.tmpMat1 = new c
    }
    a.combine = function (b, g, f) {
        if (b.scale.data[0] !== b.scale.data[1] || b.scale.data[0] !== b.scale.data[2]) throw {
            name: "NonUniformScaleException",
            message: "Non-uniform scaling in left hand transform, cannot resolve combined transform"
        };
        var f = f || new a,
            e = f.tmpVec;
        e.setv(g.translation);
        b.rotation.applyPost(e);
        e.mulv(b.scale);
        e.addv(b.translation);
        var h = f.tmpVec2;
        h.setv(g.scale);
        h.mulv(b.scale);
        var k = f.tmpMat1;
        c.combine(b.rotation, g.rotation, k);
        f.rotation.copy(k);
        f.scale.setv(h);
        f.translation.setv(e);
        return f
    };
    a.prototype.combine = function (b) {
        return a.combine(this, b, this)
    };
    a.prototype.multiply = function (a, g) {
        b.combine(a.matrix, g.matrix, this.matrix);
        this.tmpMat1.data.set(a.rotation.data);
        this.rotation.data.set(g.rotation.data);
        c.combine(this.tmpMat1,
            this.rotation, this.rotation);
        this.translation.setv(g.translation);
        this.translation.mulv(a.scale);
        this.tmpMat1.applyPost(this.translation).addv(a.translation);
        this.scale.setv(a.scale).mulv(g.scale)
    };
    a.prototype.setIdentity = function () {
        this.matrix.setIdentity();
        this.translation.setv(e.ZERO);
        this.rotation.setIdentity();
        this.scale.setv(e.ONE)
    };
    a.prototype.applyForward = function (a, b) {
        b.setv(a);
        this.matrix.applyPostPoint(b);
        return b
    };
    a.prototype.applyForwardVector = function (a, b) {
        b.copy(a);
        b.set(b.x * this.scale.x,
            b.y * this.scale.y, b.z * this.scale.z);
        this.rotation.applyPost(b);
        return b
    };
    a.prototype.update = function () {
        var a = this.matrix.data,
            b = this.rotation.data,
            c = this.scale.data,
            e = this.translation.data;
        a[0] = c[0] * b[0];
        a[1] = c[0] * b[1];
        a[2] = c[0] * b[2];
        a[3] = 0;
        a[4] = c[1] * b[3];
        a[5] = c[1] * b[4];
        a[6] = c[1] * b[5];
        a[7] = 0;
        a[8] = c[2] * b[6];
        a[9] = c[2] * b[7];
        a[10] = c[2] * b[8];
        a[11] = 0;
        a[12] = e[0];
        a[13] = e[1];
        a[14] = e[2];
        a[15] = 1
    };
    a.prototype.copy = function (a) {
        this.matrix.copy(a.matrix);
        this.translation.setv(a.translation);
        this.rotation.copy(a.rotation);
        this.scale.setv(a.scale)
    };
    a.prototype.setRotationXYZ = function (a, b, c) {
        this.rotation.fromAngles(a, b, c)
    };
    a.prototype.lookAt = function (a, b) {
        this.tmpVec.setv(this.translation).subv(a).normalize();
        this.rotation.lookAt(this.tmpVec, b)
    };
    a.prototype.invert = function (b) {
        b || (b = new a);
        b.matrix.copy(this.matrix);
        b.matrix.invert();
        var c = b.rotation.copy(this.rotation);
        c.multiplyDiagonalPost(this.scale, c).invert();
        b.translation.copy(this.translation);
        b.rotation.applyPost(b.translation).invert();
        return b
    };
    a.prototype.toString =
        function () {
            return "" + this.matrix
    };
    return a
});
define("goo/entities/components/TransformComponent", ["goo/math/Transform", "goo/math/Vector3", "goo/entities/components/Component"], function (e, c, b) {
    function a() {
        this.type = "TransformComponent";
        this.parent = null;
        this.children = [];
        this.transform = new e;
        this.worldTransform = new e;
        this._dirty = !0;
        this._updated = !1
    }
    a.prototype = Object.create(b.prototype);
    a.prototype.setTranslation = function () {
        this.transform.translation.set(arguments);
        this._dirty = !0;
        return this
    };
    a.prototype.setScale = function () {
        this.transform.scale.set(arguments);
        this._dirty = !0;
        return this
    };
    a.prototype.addTranslation = function () {
        arguments.length === 3 ? this.transform.translation.add(arguments) : this.transform.translation.add(arguments[0]);
        this._dirty = !0;
        return this
    };
    a.prototype.setRotation = function (a, b, c) {
        this.transform.rotation.fromAngles(a, b, c);
        this._dirty = !0;
        return this
    };
    a.prototype.lookAt = function (a, b) {
        this.transform.lookAt(a, b);
        this._dirty = !0;
        return this
    };
    a.prototype.setUpdated = function () {
        this._dirty = !0
    };
    a.prototype.attachChild = function (a) {
        for (var b = this; b;) {
            if (b ===
                a) {
                console.warn("attachChild: An object can't be added as a descendant of itself.");
                return
            }
            b = b.parent
        }
        a.parent && a.parent.detachChild(a);
        a.parent = this;
        this.children.push(a)
    };
    a.prototype.detachChild = function (a) {
        if (a === this) console.warn("attachChild: An object can't be removed from itself.");
        else {
            var b = this.children.indexOf(a);
            if (b !== -1) a.parent = null, this.children.splice(b, 1)
        }
    };
    a.prototype.updateTransform = function () {
        this.transform.update()
    };
    a.prototype.updateWorldTransform = function () {
        this.parent ? this.worldTransform.multiply(this.parent.worldTransform,
            this.transform) : this.worldTransform.copy(this.transform);
        this._dirty = !1;
        this._updated = !0
    };
    return a
});
define("goo/entities/World", ["goo/entities/Entity", "goo/entities/managers/EntityManager", "goo/entities/components/TransformComponent"], function (e, c, b) {
    function a(a) {
        this.gooRunner = a;
        this._managers = [];
        this._systems = [];
        this._addedEntities = [];
        this._changedEntities = [];
        this._removedEntities = [];
        this.entityManager = new c;
        this.setManager(this.entityManager);
        this.time = 0;
        this.tpf = 1
    }
    a.time = 0;
    a.prototype.setManager = function (a) {
        this._managers.push(a)
    };
    a.prototype.getManager = function (a) {
        for (var b = 0; b < this._managers.length; b++) {
            var c =
                this._managers[b];
            if (c.type === a) return c
        }
    };
    a.prototype.setSystem = function (a) {
        this._systems.push(a)
    };
    a.prototype.getSystem = function (a) {
        for (var b = 0; b < this._systems.length; b++) {
            var c = this._systems[b];
            if (c.type === a) return c
        }
    };
    a.prototype.createEntity = function (a) {
        a = new e(this, a);
        a.setComponent(new b);
        return a
    };
    a.prototype.getEntities = function () {
        return this.entityManager.getEntities()
    };
    a.prototype.addEntity = function (a, b) {
        this._addedEntities.indexOf(a) === -1 && this._addedEntities.push(a);
        if (a.transformComponent &&
            (b === void 0 || b === !0))
            for (var c = a.transformComponent.children, e = 0; e < c.length; e++) this.addEntity(c[e].entity, b)
    };
    a.prototype.removeEntity = function (a, b) {
        this._removedEntities.indexOf(a) === -1 && this._removedEntities.push(a);
        var c = a.transformComponent;
        if (c.parent) c.parent.detachChild(c), c.parent = null;
        if (b === !1) {
            for (var e = c.children, h = 0; h < e.length; h++) e[h].parent = null;
            c.children = []
        } else {
            e = c.children;
            for (h = 0; h < e.length; h++) this._recursiveRemoval(e[h].entity, b)
        }
    };
    a.prototype._recursiveRemoval = function (a, b) {
        this._removedEntities.indexOf(a) === -1 && this._removedEntities.push(a);
        if (a.transformComponent && (b === void 0 || b === !0))
            for (var c = a.transformComponent.children, e = 0; e < c.length; e++) this._recursiveRemoval(c[e].entity, b)
    };
    a.prototype.changedEntity = function (a, b, c) {
        a = {
            entity: a
        };
        if (b !== void 0) a.component = b;
        if (c !== void 0) a.eventType = c;
        this._changedEntities.push(a)
    };
    a.prototype.process = function () {
        this._check(this._addedEntities, function (a, b) {
            a.added && a.added(b);
            if (a.addedComponent)
                for (var c = 0; c < b._components.length; c++) a.addedComponent(b, b._components[c])
        });
        this._check(this._changedEntities, function (a, b) {
            a.changed && a.changed(b.entity);
            if (b.eventType !== void 0 && a[b.eventType]) a[b.eventType](b.entity, b.component)
        });
        this._check(this._removedEntities, function (a, b) {
            a.removed && a.removed(b);
            if (a.removedComponent)
                for (var c = 0; c < b._components.length; c++) a.removedComponent(b, b._components[c])
        });
        for (var a = 0; a < this._systems.length; a++) {
            var b = this._systems[a];
            b.passive || b._process(this.tpf)
        }
    };
    a.prototype._check = function (a, b) {
        for (var c = 0; c < a.length; c++) {
            for (var e = a[c],
                    h = 0; h < this._managers.length; h++) b(this._managers[h], e);
            for (h = 0; h < this._systems.length; h++) b(this._systems[h], e)
        }
        a.length = 0
    };
    return a
});
define("goo/renderer/RenderQueue", ["goo/math/Vector3"], function (e) {
    function c() {
        var b = this,
            a = new e;
        this.opaqueSorter = function (c, g) {
            var f = c.meshRendererComponent.materials[0],
                e = g.meshRendererComponent.materials[0];
            if (f === null || e === null) return 0;
            if (f === e) return f = c.meshRendererComponent.worldBound, e = g.meshRendererComponent.worldBound, f = a.setv(b.camera.translation).subv(f.center).lengthSquared(), e = a.setv(b.camera.translation).subv(e.center).lengthSquared(), f - e;
            f = f.shader;
            e = e.shader;
            if (f === null || e ===
                null) return 0;
            return f._id === e._id ? (f = c.meshRendererComponent.worldBound, e = g.meshRendererComponent.worldBound, f = a.setv(b.camera.translation).subv(f.center).lengthSquared(), e = a.setv(b.camera.translation).subv(e.center).lengthSquared(), f - e) : f._id - e._id
        };
        this.transparentSorter = function (c, g) {
            var f = c.meshRendererComponent.worldBound,
                e = g.meshRendererComponent.worldBound,
                f = a.setv(b.camera.translation).subv(f.center).lengthSquared();
            return a.setv(b.camera.translation).subv(e.center).lengthSquared() - f
        };
        this.bucketSorter =
            function (a, b) {
                return a - b
        }
    }
    c.prototype.sort = function (b, a) {
        var d = 0;
        this.camera = a;
        for (var g = {}, f = [], e = 0; e < b.length; e++) {
            var h = b[e],
                k = h.meshRendererComponent;
            if (!k || k.materials.length === 0) b[d] = h, d++;
            else {
                var j = k.materials[0].getRenderQueue(),
                    k = g[j];
                k || (k = [], g[j] = k, f.push(j));
                k.push(h)
            }
        }
        f.length > 1 && f.sort(this.bucketSorter);
        for (h = 0; h < f.length; h++) {
            e = f[h];
            k = g[e];
            e <= c.TRANSPARENT ? k.sort(this.opaqueSorter) : k.sort(this.transparentSorter);
            for (e = 0; e < k.length; e++) b[d] = k[e], d++
        }
    };
    c.BACKGROUND = 0;
    c.OPAQUE = 1E3;
    c.TRANSPARENT =
        2E3;
    c.OVERLAY = 3E3;
    return c
});
define("goo/renderer/Shader", "goo/renderer/ShaderCall,goo/math/Matrix4x4,goo/math/Vector3,goo/entities/World,goo/renderer/RenderQueue,goo/renderer/Util".split(","), function (e, c, b, a, d, g) {
    function f(a, b) {
        if (!b.vshader || !b.fshader) throw Error("Missing shader sources for shader: " + a);
        this.shaderDefinition = this.originalShaderDefinition = b;
        this.name = a;
        this.origVertexSource = this.vertexSource = b.vshader;
        this.origFragmentSource = this.fragmentSource = b.fshader;
        this.shaderProgram = null;
        this.attributeMapping = {};
        this.attributeIndexMapping = {};
        this.uniformMapping = {};
        this.uniformCallMapping = {};
        this.textureSlots = [];
        this.textureSlotsNaming = {};
        this.currentCallbacks = {};
        this.overridePrecision = b.precision || null;
        this.processors = b.processors;
        this.defines = b.defines;
        this.attributes = b.attributes || {};
        this.uniforms = b.uniforms || {};
        this.renderQueue = d.OPAQUE;
        this._id = f.id++;
        this.errorOnce = !1
    }
    var i = window.WebGLRenderingContext;
    f.id = 0;
    f.prototype.clone = function () {
        return new f(this.name, g.clone({
            precision: this.precision,
            processors: this.processors,
            defines: this.defines,
            attributes: this.attributes,
            uniforms: this.uniforms,
            vshader: this.origVertexSource,
            fshader: this.origFragmentSource
        }))
    };
    f.prototype.cloneOriginal = function () {
        return new f(this.name, this.originalShaderDefinition)
    };
    var h = /\b(attribute|uniform)\s+(float|int|bool|vec2|vec3|vec4|mat3|mat4|sampler2D|sampler3D|samplerCube)\s+(\w+)(\s*\[\s*\w+\s*\])*;/g;
    f.prototype.apply = function (a, b) {
        var c = b.context,
            d = b.rendererRecord;
        this.shaderProgram === null && (this._investigateShaders(), this.addDefines(this.defines), this.addPrecision(this.overridePrecision ||
            b.shaderPrecision), this.compile(b));
        var f = !1;
        if (d.usedProgram !== this.shaderProgram) c.useProgram(this.shaderProgram), d.usedProgram = this.shaderProgram, f = !0;
        if (this.attributes) {
            var c = a.meshData.attributeMap,
                g;
            for (g in this.attributes)
                if (d = c[this.attributes[g]]) {
                    var e = this.attributeIndexMapping[g];
                    e !== void 0 && (f && b.context.enableVertexAttribArray(e), b.bindVertexAttribute(e, d))
                }
        }
        if (this.uniforms) try {
            this.textureIndex = 0;
            for (var h in this.uniforms) this._bindUniform(h, a);
            this.errorOnce = !1
        } catch (i) {
            if (this.errorOnce === !1) console.error(i.stack), this.errorOnce = !0
        }
    };
    f.prototype._bindUniform = function (a, b) {
        var c = this.uniformCallMapping[a];
        if (c !== void 0) {
            var d = b.material.uniforms[a] || this.uniforms[a];
            if (typeof d === "string")
                if (d = this.currentCallbacks[a]) d(c, b);
                else {
                    if (d = this.textureSlotsNaming[a], d !== void 0) {
                        var f = b.material.getTexture(d.mapping);
                        if (f instanceof Array) {
                            var g = [];
                            d.index = [];
                            for (var e = 0; e < f.length; e++) d.index.push(this.textureIndex), g.push(this.textureIndex++);
                            c.call(g)
                        } else d.index = this.textureIndex, c.call(this.textureIndex++)
                    }
                } else d =
                    typeof d === "function" ? d(b) : d, c.call(d)
        }
    };
    f.prototype.rebuild = function () {
        this.shaderProgram = null;
        this.attributeMapping = {};
        this.attributeIndexMapping = {};
        this.uniformMapping = {};
        this.uniformCallMapping = {};
        this.currentCallbacks = {};
        this.vertexSource = this.origVertexSource;
        this.fragmentSource = this.origFragmentSource
    };
    f.prototype._investigateShaders = function () {
        this.textureSlots = [];
        this.textureSlotsNaming = {};
        f.investigateShader(this.vertexSource, this);
        f.investigateShader(this.fragmentSource, this)
    };
    f.investigateShader =
        function (a, b) {
            h.lastIndex = 0;
            for (var c = h.exec(a); c !== null;) {
                var d = {
                    format: c[2]
                }, f = c[1],
                    g = c[3];
                if (c[4])
                    if (d.format === "float") d.format = "floatarray";
                    else if (d.format === "int") d.format = "intarray";
                else if (d.format.indexOf("sampler") === 0) d.format = "samplerArray";
                "attribute" === f ? b.attributeMapping[g] = d : (d.format.indexOf("sampler") === 0 && (c = {
                    format: d.format,
                    name: g,
                    mapping: b.uniforms[g],
                    index: b.textureSlots.length
                }, b.textureSlots.push(c), b.textureSlotsNaming[c.name] = c), b.uniformMapping[g] = d);
                c = h.exec(a)
            }
    };
    f.prototype.compile =
        function (a) {
            var a = a.context,
                b = this._getShader(a, i.VERTEX_SHADER, this.vertexSource),
                c = this._getShader(a, i.FRAGMENT_SHADER, this.fragmentSource);
            (b === null || c === null) && console.error("Shader error - no shaders");
            this.shaderProgram = a.createProgram();
            var d = a.getError();
            (this.shaderProgram === null || d !== i.NO_ERROR) && console.error("Shader error: " + d + " [shader: " + this.name + "]");
            a.attachShader(this.shaderProgram, b);
            a.attachShader(this.shaderProgram, c);
            a.linkProgram(this.shaderProgram);
            a.getProgramParameter(this.shaderProgram,
                i.LINK_STATUS) || console.error("Could not initialise shaders: " + a.getProgramInfoLog(this.shaderProgram));
            for (var f in this.attributeMapping) b = a.getAttribLocation(this.shaderProgram, f), b !== -1 && (this.attributeIndexMapping[f] = b);
            for (f in this.uniformMapping)
                if (b = a.getUniformLocation(this.shaderProgram, f), b === null) {
                    c = this.textureSlots.length;
                    for (b = 0; b < c; b++)
                        if (d = this.textureSlots[b], d.name === f) {
                            this.textureSlots.splice(b, 1);
                            for (delete this.textureSlotsNaming[d.name]; b < c - 1; b++) this.textureSlots[b].index--;
                            break
                        }
                } else this.uniformCallMapping[f] = new e(a, b, this.uniformMapping[f].format);
            if (this.uniforms) {
                if (this.uniforms.$link) {
                    a = this.uniforms.$link instanceof Array ? this.uniforms.$link : [this.uniforms.$link];
                    for (b = 0; b < a.length; b++)
                        for (f in c = a[b], c) this.uniforms[f] = c[f];
                    delete this.uniforms.$link
                }
                for (var g in this.uniforms) f = this.uniforms[g], this.defaultCallbacks[f] && (this.currentCallbacks[g] = this.defaultCallbacks[f])
            }
    };
    var k = /\bERROR: \d+:(\d+):\s(.+)\b/g;
    f.prototype._getShader = function (a, b, c) {
        var d =
            a.createShader(b);
        a.shaderSource(d, c);
        a.compileShader(d);
        if (!a.getShaderParameter(d, i.COMPILE_STATUS)) {
            a = a.getShaderInfoLog(d);
            b = b === i.VERTEX_SHADER ? "VertexShader" : "FragmentShader";
            k.lastIndex = 0;
            var f = k.exec(a);
            if (f !== null)
                for (; f !== null;) {
                    var d = c.split("\n"),
                        g = f[1],
                        f = f[2];
                    console.error("Error in " + b + " - [" + this.name + "][" + this._id + "] at line " + g + ":");
                    console.error("\tError: " + f);
                    console.error("\tSource: " + d[g - 1]);
                    f = k.exec(a)
                } else console.error("Error in " + b + " - [" + this.name + "][" + this._id + "] " + a);
            return null
        }
        return d
    };
    var j = /\bprecision\s+(lowp|mediump|highp)\s+(float|int);/g;
    f.prototype.addPrecision = function (a) {
        j.lastIndex = 0;
        if (j.exec(this.vertexSource) === null) this.vertexSource = "precision " + a + " float;\n" + this.vertexSource;
        j.lastIndex = 0;
        if (j.exec(this.fragmentSource) === null) this.fragmentSource = "precision " + a + " float;\n" + this.fragmentSource
    };
    f.prototype.addDefines = function (a) {
        if (a) a = this.generateDefines(a), this.vertexSource = a + "\n" + this.vertexSource, this.fragmentSource = a + "\n" + this.fragmentSource
    };
    f.prototype.generateDefines =
        function (a) {
            var b = [],
                c;
            for (c in a) {
                var d = a[c];
                d !== !1 && b.push("#define " + c + " " + d)
            }
            return b.join("\n")
    };
    f.prototype.getShaderDefinition = function () {
        return {
            vshader: this.vertexSource,
            fshader: this.fragmentSource,
            defines: this.defines,
            attributes: this.attributes,
            uniforms: this.uniforms
        }
    };
    f.prototype.toString = function () {
        return this.name
    };
    f.PROJECTION_MATRIX = "PROJECTION_MATRIX";
    f.VIEW_MATRIX = "VIEW_MATRIX";
    f.VIEW_INVERSE_MATRIX = "VIEW_INVERSE_MATRIX";
    f.VIEW_PROJECTION_MATRIX = "VIEW_PROJECTION_MATRIX";
    f.VIEW_PROJECTION_INVERSE_MATRIX =
        "VIEW_PROJECTION_INVERSE_MATRIX";
    f.WORLD_MATRIX = "WORLD_MATRIX";
    for (b = 0; b < 8; b++) f["LIGHT" + b] = "LIGHT" + b;
    f.CAMERA = "CAMERA";
    f.AMBIENT = "AMBIENT";
    f.EMISSIVE = "EMISSIVE";
    f.DIFFUSE = "DIFFUSE";
    f.SPECULAR = "SPECULAR";
    f.SPECULAR_POWER = "SPECULAR_POWER";
    f.NEAR_PLANE = "NEAR_PLANE";
    f.FAR_PLANE = "FAR_PLANE";
    f.MAIN_NEAR_PLANE = "NEAR_PLANE";
    f.MAIN_FAR_PLANE = "FAR_PLANE";
    f.MAIN_DEPTH_SCALE = "DEPTH_SCALE";
    f.TIME = "TIME";
    f.RESOLUTION = "RESOLUTION";
    f.DIFFUSE_MAP = "DIFFUSE_MAP";
    f.NORMAL_MAP = "NORMAL_MAP";
    f.SPECULAR_MAP = "SPECULAR_MAP";
    f.LIGHT_MAP = "LIGHT_MAP";
    f.SHADOW_MAP = "SHADOW_MAP";
    f.AO_MAP = "AO_MAP";
    f.EMISSIVE_MAP = "EMISSIVE_MAP";
    f.DEPTH_MAP = "DEPTH_MAP";
    f.DEFAULT_AMBIENT = [0, 0, 0, 1];
    f.DEFAULT_EMISSIVE = [0, 0, 0, 0];
    f.DEFAULT_DIFFUSE = [1, 1, 1, 1];
    f.DEFAULT_SPECULAR = [0.8, 0.8, 0.8, 1];
    f.DEFAULT_SHININESS = 16;
    f.prototype.defaultCallbacks = {};
    (function (b) {
        var d = new c;
        b[f.PROJECTION_MATRIX] = function (a, b) {
            var c = b.camera.getProjectionMatrix();
            a.uniformMatrix4fv(c)
        };
        b[f.VIEW_MATRIX] = function (a, b) {
            var c = b.camera.getViewMatrix();
            a.uniformMatrix4fv(c)
        };
        b[f.WORLD_MATRIX] = function (a, b) {
            a.uniformMatrix4fv(b.transform !== void 0 ? b.transform.matrix : d)
        };
        b[f.VIEW_INVERSE_MATRIX] = function (a, b) {
            var c = b.camera.getViewInverseMatrix();
            a.uniformMatrix4fv(c)
        };
        b[f.VIEW_PROJECTION_MATRIX] = function (a, b) {
            var c = b.camera.getViewProjectionMatrix();
            a.uniformMatrix4fv(c)
        };
        b[f.VIEW_PROJECTION_INVERSE_MATRIX] = function (a, b) {
            var c = b.camera.getViewProjectionInverseMatrix();
            a.uniformMatrix4fv(c)
        };
        for (var g = 0; g < 16; g++) b[f["TEXTURE" + g]] = function (a) {
            return function (b) {
                b.uniform1i(a)
            }
        }(g);
        for (g = 0; g < 8; g++) b[f["LIGHT" + g]] = function (a) {
            return function (b, c) {
                var d = c.lights[a];
                d !== void 0 ? b.uniform3f(d.translation.data[0], d.translation.data[1], d.translation.data[2]) : b.uniform3f(-20, 20, 20)
            }
        }(g);
        b[f.LIGHTCOUNT] = function (a, b) {
            a.uniform1i(b.lights.length)
        };
        b[f.CAMERA] = function (a, b) {
            var c = b.camera.translation;
            a.uniform3f(c.data[0], c.data[1], c.data[2])
        };
        b[f.NEAR_PLANE] = function (a, b) {
            a.uniform1f(b.camera.near)
        };
        b[f.FAR_PLANE] = function (a, b) {
            a.uniform1f(b.camera.far)
        };
        b[f.MAIN_NEAR_PLANE] = function (a,
            b) {
            a.uniform1f(b.mainCamera.near)
        };
        b[f.MAIN_FAR_PLANE] = function (a, b) {
            a.uniform1f(b.mainCamera.far)
        };
        b[f.MAIN_DEPTH_SCALE] = function (a, b) {
            a.uniform1f(1 / (b.mainCamera.far - b.mainCamera.near))
        };
        b[f.AMBIENT] = function (a, b) {
            a.uniform4fv(b.material.materialState !== void 0 ? b.material.materialState.ambient : f.DEFAULT_AMBIENT)
        };
        b[f.EMISSIVE] = function (a, b) {
            a.uniform4fv(b.material.materialState !== void 0 ? b.material.materialState.emissive : f.DEFAULT_EMISSIVE)
        };
        b[f.DIFFUSE] = function (a, b) {
            a.uniform4fv(b.material.materialState !==
                void 0 ? b.material.materialState.diffuse : f.DEFAULT_DIFFUSE)
        };
        b[f.SPECULAR] = function (a, b) {
            a.uniform4fv(b.material.materialState !== void 0 ? b.material.materialState.specular : f.DEFAULT_SPECULAR)
        };
        b[f.SPECULAR_POWER] = function (a, b) {
            var c = b.material.materialState !== void 0 ? b.material.materialState.shininess : f.DEFAULT_SHININESS,
                c = Math.max(c, 1);
            a.uniform1f(c)
        };
        b[f.TIME] = function (b) {
            b.uniform1f(a.time)
        };
        b[f.RESOLUTION] = function (a, b) {
            a.uniform2f(b.renderer.viewportWidth, b.renderer.viewportHeight)
        }
    })(f.prototype.defaultCallbacks);
    return f
});
define("goo/renderer/Material", ["goo/renderer/Shader"], function (e) {
    function c(b) {
        this.name = b;
        this.shader = null;
        this.uniforms = {};
        this._textureMaps = {};
        this.materialState = {
            ambient: e.DEFAULT_AMBIENT,
            diffuse: e.DEFAULT_DIFFUSE,
            emissive: e.DEFAULT_EMISSIVE,
            specular: e.DEFAULT_SPECULAR,
            shininess: e.DEFAULT_SHININESS
        };
        this.cullState = {
            enabled: !0,
            cullFace: "Back",
            frontFace: "CCW"
        };
        this.blendState = {
            blending: "NoBlending",
            blendEquation: "AddEquation",
            blendSrc: "SrcAlphaFactor",
            blendDst: "OneMinusSrcAlphaFactor"
        };
        this.depthState = {
            enabled: !0,
            write: !0
        };
        this.offsetState = {
            enabled: !1,
            factor: 1,
            units: 1
        };
        this.flat = this.wireframe = !1;
        this.renderQueue = null
    }
    c.prototype.setTexture = function (b, a) {
        this._textureMaps[b] = a
    };
    c.prototype.getTexture = function (b) {
        return this._textureMaps[b]
    };
    c.prototype.removeTexture = function (b) {
        delete this._textureMaps[b]
    };
    c.prototype.getTextures = function () {
        var b = [],
            a;
        for (a in this._textureMaps) b.push(this._textureMaps[a]);
        return b
    };
    c.prototype.getTextureEntries = function () {
        return this._textureMaps
    };
    c.prototype.getRenderQueue =
        function () {
            if (this.renderQueue !== null) return this.renderQueue;
            else if (this.shader !== null) return this.shader.renderQueue;
            return 1E3
    };
    c.prototype.setRenderQueue = function (b) {
        this.renderQueue = b
    };
    c.store = [];
    c.hash = [];
    c.createShader = function (b, a) {
        var d = c.store.indexOf(b);
        if (d !== -1) return c.hash[d];
        d = new e(a || null, b);
        if (d.name === null) d.name = "DefaultShader" + d._id;
        c.store.push(b);
        c.hash.push(d);
        return d
    };
    c.clearShaderCache = function () {
        c.store.length = 0;
        c.hash.length = 0
    };
    c.createMaterial = function (b, a) {
        var d = new c(a ||
            "DefaultMaterial");
        d.shader = c.createShader(b);
        return d
    };
    c.createEmptyMaterial = function (b, a) {
        var d = new c(a || "Empty Material");
        d.empty();
        d.shader = b ? c.createShader(b) : void 0;
        return d
    };
    c.prototype.empty = function () {
        this.cullState = {};
        this.blendState = {};
        this.depthState = {};
        this.offsetState = {};
        this.flat = this.renderQueue = this.wireframe = void 0;
        this._textureMaps = {};
        this.shader = void 0;
        this.uniforms = {}
    };
    return c
});
define("goo/renderer/shaders/ShaderFragment", [], function () {
    function e() {}
    e.noisecommon = "vec4 mod289(vec4 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\nvec3 mod289(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\nvec2 mod289(vec2 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\nvec3 permute(vec3 x) {\n  return mod289(((x*34.0)+1.0)*x);\n}\nvec4 permute(vec4 x) {\n  return mod289(((x*34.0)+1.0)*x);\n}";
    e.noise2d = [e.noisecommon, "float snoise(vec2 v)\n  {\n  const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0\n                      0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)\n                     -0.577350269189626,  // -1.0 + 2.0 * C.x\n                      0.024390243902439); // 1.0 / 41.0\n  vec2 i  = floor(v + dot(v, C.yy) );\n  vec2 x0 = v -   i + dot(i, C.xx);\n  vec2 i1;\n  //i1.x = step( x0.y, x0.x ); // x0.x > x0.y ? 1.0 : 0.0\n  //i1.y = 1.0 - i1.x;\n  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);\n  // x0 = x0 - 0.0 + 0.0 * C.xx ;\n  // x1 = x0 - i1 + 1.0 * C.xx ;\n  // x2 = x0 - 1.0 + 2.0 * C.xx ;\n  vec4 x12 = x0.xyxy + C.xxzz;\n  x12.xy -= i1;\n  i = mod289(i); // Avoid truncation effects in permutation\n  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))\n\t\t+ i.x + vec3(0.0, i1.x, 1.0 ));\n  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);\n  m = m*m ;\n  m = m*m ;\n  vec3 x = 2.0 * fract(p * C.www) - 1.0;\n  vec3 h = abs(x) - 0.5;\n  vec3 ox = floor(x + 0.5);\n  vec3 a0 = x - ox;\n  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );\n  vec3 g;\n  g.x  = a0.x  * x0.x  + h.x  * x0.y;\n  g.yz = a0.yz * x12.xz + h.yz * x12.yw;\n  return 130.0 * dot(m, g);\n}"].join("\n");
    e.noise3d = [e.noisecommon, "vec4 taylorInvSqrt(vec4 r) {\n\treturn 1.79284291400159 - 0.85373472095314 * r;\n}\nfloat snoise(vec3 v) {\n\tconst vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n\tconst vec4  D = vec4(0.0, 0.5, 1.0, 2.0);\n\tvec3 i  = floor(v + dot(v, C.yyy) );\n\tvec3 x0 =   v - i + dot(i, C.xxx) ;\n\tvec3 g = step(x0.yzx, x0.xyz);\n\tvec3 l = 1.0 - g;\n\tvec3 i1 = min( g.xyz, l.zxy );\n\tvec3 i2 = max( g.xyz, l.zxy );\n\tvec3 x1 = x0 - i1 + C.xxx;\n\tvec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\n\tvec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y\n\ti = mod289(i); \n\tvec4 p = permute( permute( permute( \n         i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n       + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) \n       + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\tfloat n_ = 0.142857142857; // 1.0/7.0\n\tvec3  ns = n_ * D.wyz - D.xzx;\n\tvec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)\n\tvec4 x_ = floor(j * ns.z);\n\tvec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\tvec4 x = x_ *ns.x + ns.yyyy;\n\tvec4 y = y_ *ns.x + ns.yyyy;\n\tvec4 h = 1.0 - abs(x) - abs(y);\n\tvec4 b0 = vec4( x.xy, y.xy );\n\tvec4 b1 = vec4( x.zw, y.zw );\n\tvec4 s0 = floor(b0)*2.0 + 1.0;\n\tvec4 s1 = floor(b1)*2.0 + 1.0;\n\tvec4 sh = -step(h, vec4(0.0));\n\tvec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n\tvec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;\n\tvec3 p0 = vec3(a0.xy,h.x);\n\tvec3 p1 = vec3(a0.zw,h.y);\n\tvec3 p2 = vec3(a1.xy,h.z);\n\tvec3 p3 = vec3(a1.zw,h.w);\n\tvec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n\tp0 *= norm.x;\n\tp1 *= norm.y;\n\tp2 *= norm.z;\n\tp3 *= norm.w;\n\tvec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n\tm = m * m;\n\treturn 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3) ) );\n}"].join("\n");
    e.methods = {
        packDepth: "vec4 packDepth( const in float depth ) {\n\tconst vec4 bit_shift = vec4( 256.0 * 256.0 * 256.0, 256.0 * 256.0, 256.0, 1.0 );\n\tconst vec4 bit_mask  = vec4( 0.0, 1.0 / 256.0, 1.0 / 256.0, 1.0 / 256.0 );\n\tvec4 res = fract( depth * bit_shift );\n\tres -= res.xxyz * bit_mask;\n\treturn res;\n}",
        unpackDepth: "float unpackDepth( const in vec4 rgba_depth ) {\n\tconst vec4 bit_shift = vec4( 1.0 / ( 256.0 * 256.0 * 256.0 ), 1.0 / ( 256.0 * 256.0 ), 1.0 / 256.0, 1.0 );\n\tfloat depth = dot( rgba_depth, bit_shift );\n\treturn depth;\n}",
        packDepth16: "vec2 packDepth16( const in float depth ) {\n\tconst vec2 bias = vec2(1.0 / 255.0, 0.0);\n\tvec2 res = vec2(depth, fract(depth * 255.0));\n\treturn res - (res.yy * bias);\n}",
        unpackDepth16: "float unpackDepth16( const in vec2 rg_depth ) {\n\treturn rg_depth.x + (rg_depth.y / 255.0);\n}"
    };
    return e
});
define("goo/renderer/light/Light", ["goo/math/Vector3"], function (e) {
    return function () {
        this.translation = new e;
        this.color = new e(1, 1, 1);
        this.specularIntensity = this.intensity = 1;
        this.shadowCaster = !1;
        this.shadowSettings = {
            size: 100,
            near: 1,
            far: 1E3,
            resolution: [512, 512],
            upVector: e.UNIT_Y
        };
        this.changedColor = this.changedProperties = !1
    }
});
define("goo/renderer/light/PointLight", ["goo/math/Vector3", "goo/renderer/light/Light"], function (e, c) {
    function b() {
        c.call(this);
        this.range = 1E3
    }
    b.prototype = Object.create(c.prototype);
    b.prototype.update = function (a) {
        a.matrix.getTranslation(this.translation)
    };
    return b
});
define("goo/renderer/light/DirectionalLight", ["goo/math/Vector3", "goo/renderer/light/Light"], function (e, c) {
    function b() {
        c.call(this);
        this.direction = new e
    }
    b.prototype = Object.create(c.prototype);
    b.prototype.update = function (a) {
        a.matrix.getTranslation(this.translation);
        this.direction.setd(0, 0, -1);
        a.matrix.applyPostVector(this.direction)
    };
    return b
});
define("goo/renderer/light/SpotLight", ["goo/math/Vector3", "goo/renderer/light/Light"], function (e, c) {
    function b() {
        c.call(this);
        this.direction = new e;
        this.range = 1E3;
        this.angle = 45;
        this.penumbra = null;
        this.exponent = 16
    }
    b.prototype = Object.create(c.prototype);
    b.prototype.update = function (a) {
        a.matrix.getTranslation(this.translation);
        this.direction.setd(0, 0, -1);
        a.matrix.applyPostVector(this.direction)
    };
    return b
});
define("goo/util/TangentGenerator", ["goo/math/Vector2", "goo/math/Vector3", "goo/renderer/MeshData"], function (e, c, b) {
    function a() {}
    a.addTangentBuffer = function (a, g) {
        function f(a) {
            for (var b = [], d = 0; d < a.length; d += 3) b.push(new c(a[d + 0], a[d + 1], a[d + 2]));
            return b
        }
        var g = g || 0,
            i = a.getAttributeBuffer(b.POSITION);
        if (!i) throw Error("Vertex buffer is null!");
        var h = a.getAttributeBuffer(b.NORMAL);
        if (!h) throw Error("Normal buffer is null!");
        var k = a.getAttributeBuffer("TEXCOORD" + g);
        !k && g !== 0 && (k = a.getAttributeBuffer(b.TEXCOORD0));
        if (!k) throw Error("Texture buffer is null!");
        var j = a.getIndexBuffer();
        if (!j) throw Error("Index buffer is null!");
        for (var l = a.vertexCount, m = a.indexCount / 3, o = [], p = [], n = 0; n < l; n++) o[n] = new c, p[n] = new c;
        i = f(i);
        h = f(h);
        n = function (a) {
            for (var b = [], c = 0; c < a.length; c += 2) b.push(new e(a[c + 0], a[c + 1]));
            return b
        }(k);
        for (k = 0; k < m; k++) {
            var s = j[k * 3],
                r = j[k * 3 + 1],
                u = j[k * 3 + 2],
                q = i[s],
                x = i[r],
                t = i[u],
                w = n[s],
                z = n[r],
                v = n[u],
                A = x.x - q.x,
                y = t.x - q.x,
                B = x.y - q.y,
                C = t.y - q.y,
                x = x.z - q.z,
                q = t.z - q.z,
                t = z.x - w.x,
                F = v.x - w.x,
                z = z.y - w.y,
                v = v.y - w.y,
                w = 1 / (t *
                    v - F * z);
            isFinite(w) !== !1 && (v = new c((v * A - z * y) * w, (v * B - z * C) * w, (v * x - z * q) * w), A = new c((t * y - F * A) * w, (t * C - F * B) * w, (t * q - F * x) * w), o[s].add(v), o[r].add(v), o[u].add(v), p[s].add(A), p[r].add(A), p[u].add(A))
        }
        a.attributeMap[b.TANGENT] = b.createAttribute(4, "Float");
        a.rebuildData(a.vertexCount, a.indexCount, !0);
        j = a.getAttributeBuffer(b.TANGENT);
        m = new c;
        i = new c;
        for (k = 0; k < l; k++) n = h[k], s = o[k], r = n.dot(s), m.copy(s).sub(i.copy(n).mul(r)).normalize(), j[k * 4 + 0] = m.x, j[k * 4 + 1] = m.y, j[k * 4 + 2] = m.z, r = m.copy(n).cross(s).dot(p[k]), j[k * 4 + 3] =
            r < 0 ? -1 : 1;
        return j
    };
    return a
});
define("goo/renderer/shaders/ShaderBuilder", "goo/renderer/shaders/ShaderFragment,goo/renderer/MeshData,goo/renderer/light/PointLight,goo/renderer/light/DirectionalLight,goo/renderer/light/SpotLight,goo/math/MathUtils,goo/util/TangentGenerator".split(","), function (e, c, b, a, d, g, f) {
    function i() {}
    e = new a;
    e.translation.setd(10, 10, 10);
    e.direction.setd(1, 1, 1).normalize();
    i.defaultLight = e;
    i.uber = {
        processor: function (a, b) {
            var d = b.meshData.attributeMap,
                g = b.material._textureMaps;
            a.defines = a.defines || {};
            for (var e in d) a.defines[e] ||
                (a.defines[e] = !0);
            for (var i in g)
                if (g[i] !== void 0 && i !== "SHADOW_MAP" && (a.defines[i] || (a.defines[i] = !0), i === "DIFFUSE_MAP")) {
                    var p = g[i].offset,
                        n = g[i].repeat;
                    a.uniforms.offsetRepeat = a.uniforms.offsetRepeat || [0, 0, 1, 1];
                    a.uniforms.offsetRepeat[0] = p.x;
                    a.uniforms.offsetRepeat[1] = p.y;
                    a.uniforms.offsetRepeat[2] = n.x;
                    a.uniforms.offsetRepeat[3] = n.y
                }
            for (e in a.defines) e === "MAX_POINT_LIGHTS" || e === "MAX_DIRECTIONAL_LIGHTS" || e === "MAX_SPOT_LIGHTS" || e === "SHADOW_TYPE" || e === "JOINT_COUNT" || e === "WEIGHTS" || e === "PHYSICALLY_BASED_SHADING" || !d[e] && !g[e] && delete a.defines[e];
            a.defines.NORMAL && a.defines.NORMAL_MAP && !b.meshData.getAttributeBuffer(c.TANGENT) && f.addTangentBuffer(b.meshData)
        }
    };
    i.light = {
        processor: function (c, f) {
            c.uniforms.materialAmbient = c.uniforms.materialAmbient || "AMBIENT";
            c.uniforms.materialEmissive = c.uniforms.materialEmissive || "EMISSIVE";
            c.uniforms.materialDiffuse = c.uniforms.materialDiffuse || "DIFFUSE";
            c.uniforms.materialSpecular = c.uniforms.materialSpecular || "SPECULAR";
            c.uniforms.materialSpecularPower = c.uniforms.materialSpecularPower ||
                "SPECULAR_POWER";
            var e = 0;
            c.uniforms.pointLightColor = c.uniforms.pointLightColor || [];
            c.uniforms.pointLight = c.uniforms.pointLight || [];
            var i = 0;
            c.uniforms.directionalLightColor = c.uniforms.directionalLightColor || [];
            c.uniforms.directionalLightDirection = c.uniforms.directionalLightDirection || [];
            var m = 0;
            c.uniforms.spotLightColor = c.uniforms.spotLightColor || [];
            c.uniforms.spotLight = c.uniforms.spotLight || [];
            c.uniforms.spotLightDirection = c.uniforms.spotLightDirection || [];
            c.uniforms.spotLightAngle = c.uniforms.spotLightAngle || [];
            c.uniforms.spotLightPenumbra = c.uniforms.spotLightPenumbra || [];
            for (var o = f.lights, p = 0; p < o.length; p++) {
                var n = o[p];
                if (n instanceof b) c.uniforms.pointLight[e * 4 + 0] = n.translation.data[0], c.uniforms.pointLight[e * 4 + 1] = n.translation.data[1], c.uniforms.pointLight[e * 4 + 2] = n.translation.data[2], c.uniforms.pointLight[e * 4 + 3] = n.range, c.uniforms.pointLightColor[e * 4 + 0] = n.color.data[0] * n.intensity, c.uniforms.pointLightColor[e * 4 + 1] = n.color.data[1] * n.intensity, c.uniforms.pointLightColor[e * 4 + 2] = n.color.data[2] * n.intensity,
                c.uniforms.pointLightColor[e * 4 + 3] = n.specularIntensity, e++;
                else if (n instanceof a) c.uniforms.directionalLightDirection[i * 3 + 0] = n.direction.data[0], c.uniforms.directionalLightDirection[i * 3 + 1] = n.direction.data[1], c.uniforms.directionalLightDirection[i * 3 + 2] = n.direction.data[2], c.uniforms.directionalLightColor[i * 4 + 0] = n.color.data[0] * n.intensity, c.uniforms.directionalLightColor[i * 4 + 1] = n.color.data[1] * n.intensity, c.uniforms.directionalLightColor[i * 4 + 2] = n.color.data[2] * n.intensity, c.uniforms.directionalLightColor[i *
                    4 + 3] = n.specularIntensity, i++;
                else if (n instanceof d) c.uniforms.spotLight[m * 4 + 0] = n.translation.data[0], c.uniforms.spotLight[m * 4 + 1] = n.translation.data[1], c.uniforms.spotLight[m * 4 + 2] = n.translation.data[2], c.uniforms.spotLight[m * 4 + 3] = n.range, c.uniforms.spotLightColor[m * 4 + 0] = n.color.data[0] * n.intensity, c.uniforms.spotLightColor[m * 4 + 1] = n.color.data[1] * n.intensity, c.uniforms.spotLightColor[m * 4 + 2] = n.color.data[2] * n.intensity, c.uniforms.spotLightColor[m * 4 + 3] = n.specularIntensity, c.uniforms.spotLightDirection[m *
                    3 + 0] = n.direction.data[0], c.uniforms.spotLightDirection[m * 3 + 1] = n.direction.data[1], c.uniforms.spotLightDirection[m * 3 + 2] = n.direction.data[2], c.uniforms.spotLightAngle[m] = Math.cos(n.angle * g.DEG_TO_RAD / 2), c.uniforms.spotLightPenumbra[m] = n.penumbra !== void 0 ? Math.sin(n.penumbra * g.DEG_TO_RAD / 4) : 0, m++
            }
            if (c.pointCount !== e) c.defines = c.defines || {}, c.defines.MAX_POINT_LIGHTS = e, c.uniforms.pointLight.length = e * 4, c.uniforms.pointLightColor.length = e * 4, c.pointCount = e;
            if (c.directionalCount !== i) c.defines = c.defines || {}, c.defines.MAX_DIRECTIONAL_LIGHTS = i, c.uniforms.directionalLightDirection.length = i * 3, c.uniforms.directionalLightColor.length = i * 4, c.directionalCount = i;
            if (c.spotCount !== m) c.defines = c.defines || {}, c.defines.MAX_SPOT_LIGHTS = m, c.uniforms.spotLight.length = m * 4, c.uniforms.spotLightColor.length = m * 4, c.uniforms.spotLightDirection.length = m * 3, c.uniforms.spotLightAngle.length = m * 1, c.spotCount = m;
            c.defines = c.defines || {};
            e = f.shadowHandler;
            i = e.shadowResults.length;
            if (i > 0) {
                c.defines.MAX_SHADOWS = i;
                c.uniforms.shadowLightMatrices = [];
                c.uniforms.shadowLightPositions = [];
                c.uniforms.cameraScales = [];
                c.uniforms.shadowMapSizes = [];
                for (p = 0; p < i; p++) {
                    m = e.shadowLights[p].shadowSettings.shadowData;
                    o = m.lightCamera.getViewProjectionMatrix().data;
                    for (n = 0; n < 16; n++) c.uniforms.shadowLightMatrices[p * 16 + n] = o[n];
                    o = m.lightCamera.translation.data;
                    c.uniforms.shadowLightPositions[p * 3 + 0] = o[0];
                    c.uniforms.shadowLightPositions[p * 3 + 1] = o[1];
                    c.uniforms.shadowLightPositions[p * 3 + 2] = o[2];
                    c.uniforms.cameraScales[p] = 1 / (m.lightCamera.far - m.lightCamera.near);
                    c.uniforms.shadowMapSizes[p *
                        2 + 0] = e.shadowLights[p].shadowSettings.resolution[0];
                    c.uniforms.shadowMapSizes[p * 2 + 1] = e.shadowLights[p].shadowSettings.resolution[1]
                }
                c.uniforms.shadowMaps = "SHADOW_MAP";
                p = 0;
                switch (e.shadowType) {
                case "VSM":
                    p = 2;
                    break;
                case "PCF":
                    p = 1;
                    break;
                default:
                    p = 0
                }
                c.defines.SHADOW_TYPE = p
            } else c.defines.MAX_SHADOWS && delete c.defines.MAX_SHADOWS
        },
        prevertex: "#ifndef MAX_SHADOWS\n#define MAX_SHADOWS 0\n#endif\n#if MAX_SHADOWS > 0\nuniform mat4 shadowLightMatrices[MAX_SHADOWS];\nvarying vec4 shadowLightDepths[MAX_SHADOWS];\nconst mat4 ScaleMatrix = mat4(0.5, 0.0, 0.0, 0.0, 0.0, 0.5, 0.0, 0.0, 0.0, 0.0, 0.5, 0.0, 0.5, 0.5, 0.5, 1.0);\n#endif",
        vertex: "#if MAX_SHADOWS > 0\nfor (int i = 0; i < MAX_SHADOWS; i++) {\nshadowLightDepths[i] = ScaleMatrix * shadowLightMatrices[i] * worldPos;\n}\n#endif",
        prefragment: "uniform vec4 materialAmbient;\nuniform vec4 materialEmissive;\nuniform vec4 materialDiffuse;\nuniform vec4 materialSpecular;\nuniform float materialSpecularPower;\n#ifndef MAX_DIRECTIONAL_LIGHTS\n#define MAX_DIRECTIONAL_LIGHTS 0\n#endif\n#ifndef MAX_POINT_LIGHTS\n#define MAX_POINT_LIGHTS 0\n#endif\n#ifndef MAX_SPOT_LIGHTS\n#define MAX_SPOT_LIGHTS 0\n#endif\n#ifndef MAX_SHADOWS\n#define MAX_SHADOWS 0\n#endif\n#if MAX_DIRECTIONAL_LIGHTS > 0\nuniform vec4 directionalLightColor[MAX_DIRECTIONAL_LIGHTS];\nuniform vec3 directionalLightDirection[MAX_DIRECTIONAL_LIGHTS];\n#endif\n#if MAX_POINT_LIGHTS > 0\nuniform vec4 pointLight[MAX_POINT_LIGHTS];\nuniform vec4 pointLightColor[MAX_POINT_LIGHTS];\n#endif\n#if MAX_SPOT_LIGHTS > 0\nuniform vec4 spotLightColor[MAX_SPOT_LIGHTS];\nuniform vec4 spotLight[MAX_SPOT_LIGHTS];\nuniform vec3 spotLightDirection[MAX_SPOT_LIGHTS];\nuniform float spotLightAngle[MAX_SPOT_LIGHTS];\nuniform float spotLightPenumbra[MAX_SPOT_LIGHTS];\n#endif\n#if MAX_SHADOWS > 0\n#ifndef SHADOW_TYPE\n#define SHADOW_TYPE 0\n#endif\nuniform sampler2D shadowMaps[MAX_SHADOWS];\nuniform vec2 shadowMapSizes[MAX_SHADOWS];\nuniform vec3 shadowLightPositions[MAX_SHADOWS];\nuniform float cameraScales[MAX_SHADOWS];\nvarying vec4 shadowLightDepths[MAX_SHADOWS];\nfloat ChebychevInequality(in vec2 moments, in float t) {\nif ( t <= moments.x ) return 1.0;\nfloat variance = moments.y - (moments.x * moments.x);\nvariance = max(variance, 0.02);\nfloat d = t - moments.x;\nreturn variance / (variance + d * d);\n}\nfloat VsmFixLightBleed(in float pMax, in float amount) {\nreturn clamp((pMax - amount) / (1.0 - amount), 0.0, 1.0);\n}\n#endif",
        fragment: "#ifdef SPECULAR_MAP\nfloat specularStrength = texture2D(specularMap, texCoord0).x;\n#else\nfloat specularStrength = 1.0;\n#endif\n#if MAX_POINT_LIGHTS > 0\nvec3 pointDiffuse  = vec3(0.0);\nvec3 pointSpecular = vec3(0.0);\nfor (int i = 0; i < MAX_POINT_LIGHTS; i++) {\nvec3 lVector = normalize(pointLight[i].xyz - vWorldPos.xyz);\nfloat lDistance = 1.0 - min((length(pointLight[i].xyz - vWorldPos.xyz) / pointLight[i].w), 1.0);\nfloat dotProduct = dot(N, lVector);\n#ifdef WRAP_AROUND\nfloat pointDiffuseWeightFull = max(dotProduct, 0.0);\nfloat pointDiffuseWeightHalf = max(0.5 * dotProduct + 0.5, 0.0);\nvec3 pointDiffuseWeight = mix(vec3(pointDiffuseWeightFull), vec3(pointDiffuseWeightHalf), wrapRGB);\n#else\nfloat pointDiffuseWeight = max(dotProduct, 0.0);\n#endif\npointDiffuse += materialDiffuse.rgb * pointLightColor[i].rgb * pointDiffuseWeight * lDistance;\nvec3 pointHalfVector = normalize(lVector + normalize(viewPosition));\nfloat pointDotNormalHalf = max(dot(N, pointHalfVector), 0.0);\nfloat pointSpecularWeight = pointLightColor[i].a * specularStrength * max(pow(pointDotNormalHalf, materialSpecularPower), 0.0);\n#ifdef PHYSICALLY_BASED_SHADING\nfloat specularNormalization = (materialSpecularPower + 2.0001 ) / 8.0;\nvec3 schlick = materialSpecular.rgb + vec3(1.0 - materialSpecular.rgb) * pow(1.0 - dot(lVector, pointHalfVector), 5.0);\npointSpecular += schlick * pointLightColor[i].rgb * pointSpecularWeight * pointDiffuseWeight * lDistance * specularNormalization;\n#else\npointSpecular += materialSpecular.rgb * pointLightColor[i].rgb * pointSpecularWeight * pointDiffuseWeight * lDistance;\n#endif\n}\n#endif\n#if MAX_SPOT_LIGHTS > 0\nvec3 spotDiffuse  = vec3(0.0);\nvec3 spotSpecular = vec3(0.0);\nfor (int i = 0; i < MAX_SPOT_LIGHTS; i++) {\nvec3 lVector = normalize(spotLight[i].xyz - vWorldPos.xyz);\nfloat lDistance = 1.0 - min((length(spotLight[i].xyz - vWorldPos.xyz) / spotLight[i].w), 1.0);\nfloat spotEffect = dot(normalize(-spotLightDirection[i]), lVector);\nif (spotEffect > spotLightAngle[i]) {\nif (spotLightPenumbra[i] > 0.0) {\nspotEffect = (spotEffect - spotLightAngle[i]) / spotLightPenumbra[i];\nspotEffect = clamp(spotEffect, 0.0, 1.0);\n} else {\nspotEffect = 1.0;\n}\nfloat dotProduct = dot(N, lVector);\n#ifdef WRAP_AROUND\nfloat spotDiffuseWeightFull = max(dotProduct, 0.0);\nfloat spotDiffuseWeightHalf = max(0.5 * dotProduct + 0.5, 0.0);\nvec3 spotDiffuseWeight = mix(vec3(spotDiffuseWeightFull), vec3(spotDiffuseWeightHalf), wrapRGB);\n#else\nfloat spotDiffuseWeight = max(dotProduct, 0.0);\n#endif\nspotDiffuse += materialDiffuse.rgb * spotLightColor[i].rgb * spotDiffuseWeight * lDistance * spotEffect;\nvec3 spotHalfVector = normalize(lVector + normalize(viewPosition));\nfloat spotDotNormalHalf = max(dot(N, spotHalfVector), 0.0);\nfloat spotSpecularWeight = spotLightColor[i].a * specularStrength * max(pow(spotDotNormalHalf, materialSpecularPower), 0.0);\n#ifdef PHYSICALLY_BASED_SHADING\nfloat specularNormalization = (materialSpecularPower + 2.0001) / 8.0;\nvec3 schlick = materialSpecular.rgb + vec3(1.0 - materialSpecular.rgb) * pow(1.0 - dot(lVector, spotHalfVector), 5.0);\nspotSpecular += schlick * spotLightColor[i].rgb * spotSpecularWeight * spotDiffuseWeight * lDistance * specularNormalization * spotEffect;\n#else\nspotSpecular += materialSpecular.rgb * spotLightColor[i].rgb * spotSpecularWeight * spotDiffuseWeight * lDistance * spotEffect;\n#endif\n}\n}\n#endif\n#if MAX_DIRECTIONAL_LIGHTS > 0\nvec3 dirDiffuse  = vec3(0.0);\nvec3 dirSpecular = vec3(0.0);\nfor(int i = 0; i < MAX_DIRECTIONAL_LIGHTS; i++) {\nvec4 lDirection = vec4(-directionalLightDirection[i], 0.0);\nvec3 dirVector = normalize(lDirection.xyz);\nfloat dotProduct = dot(N, dirVector);\n#ifdef WRAP_AROUND\nfloat dirDiffuseWeightFull = max(dotProduct, 0.0);\nfloat dirDiffuseWeightHalf = max(0.5 * dotProduct + 0.5, 0.0);\nvec3 dirDiffuseWeight = mix(vec3(dirDiffuseWeightFull), vec3(dirDiffuseWeightHalf), wrapRGB);\n#else\nfloat dirDiffuseWeight = max(dotProduct, 0.0);\n#endif\ndirDiffuse += materialDiffuse.rgb * directionalLightColor[i].rgb * dirDiffuseWeight;\nvec3 dirHalfVector = normalize(dirVector + normalize(viewPosition));\nfloat dirDotNormalHalf = max(dot(N, dirHalfVector), 0.0);\nfloat dirSpecularWeight = directionalLightColor[i].a * specularStrength * max(pow(dirDotNormalHalf, materialSpecularPower), 0.0);\n#ifdef PHYSICALLY_BASED_SHADING\nfloat specularNormalization = (materialSpecularPower + 2.0001) / 8.0;\nvec3 schlick = materialSpecular.rgb + vec3(1.0 - materialSpecular.rgb) * pow(1.0 - dot(dirVector, dirHalfVector), 5.0);\ndirSpecular += schlick * directionalLightColor[i].rgb * dirSpecularWeight * dirDiffuseWeight * specularNormalization;\n#else\ndirSpecular += materialSpecular.rgb * directionalLightColor[i].rgb * dirSpecularWeight * dirDiffuseWeight;\n#endif\n}\n#endif\nvec3 totalDiffuse = vec3(0.0);\nvec3 totalSpecular = vec3(0.0);\n#if MAX_DIRECTIONAL_LIGHTS > 0\ntotalDiffuse += dirDiffuse;\ntotalSpecular += dirSpecular;\n#endif\n#if MAX_POINT_LIGHTS > 0\ntotalDiffuse += pointDiffuse;\ntotalSpecular += pointSpecular;\n#endif\n#if MAX_SPOT_LIGHTS > 0\ntotalDiffuse += spotDiffuse;\ntotalSpecular += spotSpecular;\n#endif\nfloat shadow = 1.0;\n#if MAX_SHADOWS > 0\nfor (int i = 0; i < MAX_SHADOWS; i++) {\nvec3 depth = shadowLightDepths[i].xyz / shadowLightDepths[i].w;\ndepth.z = length(vWorldPos.xyz - shadowLightPositions[i]) * cameraScales[i];\nif (depth.x >= 0.0 && depth.x <= 1.0 && depth.y >= 0.0 && depth.y <= 1.0 && depth.z >= 0.0 && depth.z <= 1.0) {\n#if SHADOW_TYPE == 0\ndepth.z *= 0.96;\nfloat shadowDepth = texture2D(shadowMaps[i], depth.xy).x;\nif ( depth.z > shadowDepth ) shadow *= 0.5;\n#elif SHADOW_TYPE == 1\ndepth.z *= 0.96;\nfloat shadowPcf = 0.0;\nconst float shadowDelta = 1.0 / 9.0;\nfloat xPixelOffset = 1.0 / shadowMapSizes[i].x;\nfloat yPixelOffset = 1.0 / shadowMapSizes[i].y;\nfloat dx0 = -1.25 * xPixelOffset;\nfloat dy0 = -1.25 * yPixelOffset;\nfloat dx1 = 1.25 * xPixelOffset;\nfloat dy1 = 1.25 * yPixelOffset;\nfloat fDepth = 0.0;\nfDepth = texture2D(shadowMaps[i], depth.xy + vec2(dx0, dy0)).r;\nif (fDepth < depth.z) shadowPcf += shadowDelta;\nfDepth = texture2D(shadowMaps[i], depth.xy + vec2(0.0, dy0)).r;\nif (fDepth < depth.z) shadowPcf += shadowDelta;\nfDepth = texture2D(shadowMaps[i], depth.xy + vec2(dx1, dy0)).r;\nif (fDepth < depth.z) shadowPcf += shadowDelta;\nfDepth = texture2D(shadowMaps[i], depth.xy + vec2(dx0, 0.0)).r;\nif (fDepth < depth.z) shadowPcf += shadowDelta;\nfDepth =  texture2D(shadowMaps[i], depth.xy).r;\nif (fDepth < depth.z) shadowPcf += shadowDelta;\nfDepth = texture2D(shadowMaps[i], depth.xy + vec2(dx1, 0.0)).r;\nif (fDepth < depth.z) shadowPcf += shadowDelta;\nfDepth = texture2D(shadowMaps[i], depth.xy + vec2(dx0, dy1)).r;\nif (fDepth < depth.z) shadowPcf += shadowDelta;\nfDepth = texture2D(shadowMaps[i], depth.xy + vec2(0.0, dy1)).r;\nif (fDepth < depth.z) shadowPcf += shadowDelta;\nfDepth = texture2D(shadowMaps[i], depth.xy + vec2(dx1, dy1)).r;\nif (fDepth < depth.z) shadowPcf += shadowDelta;\nshadow *= (1.0 - shadowPcf) * 0.5 + 0.5;\n#elif SHADOW_TYPE == 2\nvec4 texel = texture2D(shadowMaps[i], depth.xy);\nvec2 moments = vec2(texel.x, texel.y);\nshadow *= ChebychevInequality(moments, depth.z);\n#endif\n}\n}\nshadow = clamp(shadow, 0.0, 1.0);\n#endif\nvec3 ambientLightColor = vec3(1.0, 1.0, 1.0);\n#ifdef METAL\nfinal_color.xyz = final_color.xyz * (materialEmissive.rgb + totalDiffuse * shadow + ambientLightColor * materialAmbient.rgb + totalSpecular * shadow);\n#else\nfinal_color.xyz = final_color.xyz * (materialEmissive.rgb + totalDiffuse * shadow + ambientLightColor * materialAmbient.rgb) + totalSpecular * shadow;\n#endif"
    };
    i.animation = {
        processor: function (a, b) {
            var c = b.currentPose;
            a.defines = a.defines || {};
            if (c) {
                if (!a.uniforms.jointPalette) a.uniforms.jointPalette = i.animation.jointPalette;
                a.defines.JOINT_COUNT = Math.max(b.meshData.paletteMap.length * 3, 80)
            } else delete a.defines.JOINT_COUNT
        },
        jointPalette: function (a) {
            var b = a.meshData;
            if (a = a.currentPose) {
                var a = a._matrixPalette,
                    c = b.store;
                if (!c) c = new Float32Array(b.paletteMap.length * 12), b.store = c;
                for (var d, f = 0; f < b.paletteMap.length; f++) {
                    d = a[b.paletteMap[f]];
                    for (var g = 0; g < 12; g++) c[f *
                        12 + g] = d.data[i.animation.order[g]]
                }
                return c
            }
        },
        order: [0, 4, 8, 12, 1, 5, 9, 13, 2, 6, 10, 14],
        prevertex: "#ifdef JOINTIDS\nattribute vec4 vertexJointIDs;\n#endif\n#ifdef WEIGHTS\nattribute vec4 vertexWeights;\n#endif\n#ifdef JOINT_COUNT\nuniform vec4 jointPalette[JOINT_COUNT];\n#endif",
        vertex: "#if defined(JOINT_COUNT) && defined(WEIGHTS) && defined(JOINTIDS)\nint x = 3*int(vertexJointIDs.x);\nint y = 3*int(vertexJointIDs.y);\nint z = 3*int(vertexJointIDs.z);\nint w = 3*int(vertexJointIDs.w);\nmat4 mat = mat4(0.0);\nmat += mat4(\n\tjointPalette[x+0].x, jointPalette[x+1].x, jointPalette[x+2].x, 0,\n\tjointPalette[x+0].y, jointPalette[x+1].y, jointPalette[x+2].y, 0,\n\tjointPalette[x+0].z, jointPalette[x+1].z, jointPalette[x+2].z, 0,\n\tjointPalette[x+0].w, jointPalette[x+1].w, jointPalette[x+2].w, 1\n) * vertexWeights.x;\nmat += mat4(\n\tjointPalette[y+0].x, jointPalette[y+1].x, jointPalette[y+2].x, 0,\n\tjointPalette[y+0].y, jointPalette[y+1].y, jointPalette[y+2].y, 0,\n\tjointPalette[y+0].z, jointPalette[y+1].z, jointPalette[y+2].z, 0,\n\tjointPalette[y+0].w, jointPalette[y+1].w, jointPalette[y+2].w, 1\n) * vertexWeights.y;\nmat += mat4(\n\tjointPalette[z+0].x, jointPalette[z+1].x, jointPalette[z+2].x, 0,\n\tjointPalette[z+0].y, jointPalette[z+1].y, jointPalette[z+2].y, 0,\n\tjointPalette[z+0].z, jointPalette[z+1].z, jointPalette[z+2].z, 0,\n\tjointPalette[z+0].w, jointPalette[z+1].w, jointPalette[z+2].w, 1\n) * vertexWeights.z;\nmat += mat4(\n\tjointPalette[w+0].x, jointPalette[w+1].x, jointPalette[w+2].x, 0,\n\tjointPalette[w+0].y, jointPalette[w+1].y, jointPalette[w+2].y, 0,\n\tjointPalette[w+0].z, jointPalette[w+1].z, jointPalette[w+2].z, 0,\n\tjointPalette[w+0].w, jointPalette[w+1].w, jointPalette[w+2].w, 1\n) * vertexWeights.w;\nwMatrix = wMatrix * mat / mat[3][3];\n#endif"
    };
    return i
});
define("goo/renderer/shaders/ShaderLib", ["goo/renderer/MeshData", "goo/renderer/Shader", "goo/renderer/shaders/ShaderFragment", "goo/renderer/shaders/ShaderBuilder", "goo/entities/World"], function (e, c, b, a, d) {
    function g() {}
    g.uber = {
        processors: [a.uber.processor, a.light.processor, a.animation.processor],
        attributes: {
            vertexPosition: e.POSITION,
            vertexNormal: e.NORMAL,
            vertexTangent: e.TANGENT,
            vertexColor: e.COLOR,
            vertexUV0: e.TEXCOORD0,
            vertexUV1: e.TEXCOORD1,
            vertexJointIDs: e.JOINTIDS,
            vertexWeights: e.WEIGHTS
        },
        uniforms: {
            viewProjectionMatrix: c.VIEW_PROJECTION_MATRIX,
            worldMatrix: c.WORLD_MATRIX,
            cameraPosition: c.CAMERA,
            diffuseMap: c.DIFFUSE_MAP,
            offsetRepeat: [0, 0, 1, 1],
            normalMap: c.NORMAL_MAP,
            specularMap: c.SPECULAR_MAP,
            emissiveMap: c.EMISSIVE_MAP,
            aoMap: c.AO_MAP,
            lightMap: c.LIGHT_MAP,
            color: [1, 1, 1]
        },
        vshader: ["attribute vec3 vertexPosition;\n#ifdef NORMAL\nattribute vec3 vertexNormal;\n#endif\n#ifdef TANGENT\nattribute vec4 vertexTangent;\n#endif\n#ifdef COLOR\nattribute vec4 vertexColor;\n#endif\n#ifdef TEXCOORD0\nattribute vec2 vertexUV0;\nuniform vec4 offsetRepeat;\nvarying vec2 texCoord0;\n#endif\n#ifdef TEXCOORD1\nattribute vec2 vertexUV1;\nvarying vec2 texCoord1;\n#endif\nuniform mat4 viewProjectionMatrix;\nuniform mat4 worldMatrix;\nuniform vec3 cameraPosition;\nvarying vec3 vWorldPos;\nvarying vec3 viewPosition;\n#ifdef NORMAL\nvarying vec3 normal;\n#endif\n#ifdef TANGENT\nvarying vec3 binormal;\nvarying vec3 tangent;\n#endif\n#ifdef COLOR\nvarying vec4 color;\n#endif",
            a.light.prevertex, a.animation.prevertex, "void main(void) {\nmat4 wMatrix = worldMatrix;", a.animation.vertex, "vec4 worldPos = wMatrix * vec4(vertexPosition, 1.0);\nvWorldPos = worldPos.xyz;\ngl_Position = viewProjectionMatrix * worldPos;\nviewPosition = cameraPosition - worldPos.xyz;\n#ifdef NORMAL\n\tnormal = normalize((wMatrix * vec4(vertexNormal, 0.0)).xyz);\n#endif\n#ifdef TANGENT\n\ttangent = normalize((wMatrix * vec4(vertexTangent.xyz, 0.0)).xyz);\n\tbinormal = cross(normal, tangent) * vec3(vertexTangent.w);\n#endif\n#ifdef COLOR\n\tcolor = vertexColor;\n#endif\n#ifdef TEXCOORD0\n\ttexCoord0 = vertexUV0 * offsetRepeat.zw + offsetRepeat.xy;\n#endif\n#ifdef TEXCOORD1\n\ttexCoord1 = vertexUV1;\n#endif",
            a.light.vertex, "}"
        ].join("\n"),
        fshader: ["#ifdef DIFFUSE_MAP\nuniform sampler2D diffuseMap;\n#endif\n#ifdef NORMAL_MAP\nuniform sampler2D normalMap;\n#endif\n#ifdef SPECULAR_MAP\nuniform sampler2D specularMap;\n#endif\n#ifdef EMISSIVE_MAP\nuniform sampler2D emissiveMap;\n#endif\n#ifdef AO_MAP\nuniform sampler2D aoMap;\n#endif\n#ifdef LIGHT_MAP\nuniform sampler2D lightMap;\n#endif\nvarying vec3 vWorldPos;\nvarying vec3 viewPosition;\n#ifdef NORMAL\nvarying vec3 normal;\n#endif\n#ifdef TANGENT\nvarying vec3 binormal;\nvarying vec3 tangent;\n#endif\n#ifdef COLOR\nvarying vec4 color;\n#endif\n#ifdef TEXCOORD0\nvarying vec2 texCoord0;\n#endif\n#ifdef TEXCOORD1\nvarying vec2 texCoord1; //Use for lightmap\n#endif",
            a.light.prefragment, "void main(void)\n{\nvec4 final_color = vec4(1.0);\n#ifdef DIFFUSE_MAP\nfinal_color *= texture2D(diffuseMap, texCoord0);\n#endif\n#ifdef COLOR\nfinal_color *= color;\n#endif\n#ifdef AO_MAP\n#ifdef TEXCOORD1\nfinal_color *= texture2D(aoMap, texCoord1);\n#else\nfinal_color *= texture2D(aoMap, texCoord0);\n#endif\n#endif\n#ifdef LIGHT_MAP\n#ifdef TEXCOORD1\nfinal_color *= texture2D(lightMap, texCoord1) * 2.0 - 0.5;\n#else\nfinal_color *= texture2D(lightMap, texCoord0) * 2.0 - 0.5;\n#endif\n#else\n#if defined(TANGENT) && defined(NORMAL_MAP)\nmat3 tangentToWorld = mat3(tangent, binormal, normal);\nvec3 tangentNormal = texture2D(normalMap, texCoord0).xyz * vec3(2.0) - vec3(1.0);\nvec3 worldNormal = (tangentToWorld * tangentNormal);\nvec3 N = normalize(worldNormal);\n#elif defined(NORMAL)\nvec3 N = normalize(normal);\n#else\nvec3 N = vec3(0.0, 1.0, 0.0);\n#endif",
            a.light.fragment, "#endif\n#ifdef EMISSIVE_MAP\nvec3 emissive = texture2D(emissiveMap, texCoord0).rgb;\nfinal_color.xyz += final_color.xyz * emissive;\n#endif\ngl_FragColor = final_color;\n}"
        ].join("\n")
    };
    g.uberUnlit = {
        processors: [a.uber.processor, a.animation.processor],
        attributes: {
            vertexPosition: e.POSITION,
            vertexNormal: e.NORMAL,
            vertexTangent: e.TANGENT,
            vertexUV0: e.TEXCOORD0,
            vertexUV1: e.TEXCOORD1,
            vertexJointIDs: e.JOINTIDS,
            vertexWeights: e.WEIGHTS
        },
        uniforms: {
            viewProjectionMatrix: c.VIEW_PROJECTION_MATRIX,
            worldMatrix: c.WORLD_MATRIX,
            cameraPosition: c.CAMERA,
            diffuseMap: c.DIFFUSE_MAP,
            offsetRepeat: [0, 0, 1, 1]
        },
        vshader: ["attribute vec3 vertexPosition;\n#ifdef NORMAL\nattribute vec3 vertexNormal;\n#endif\n#ifdef TANGENT\nattribute vec4 vertexTangent;\n#endif\n#ifdef COLOR\nattribute vec4 vertexColor;\n#endif\n#ifdef TEXCOORD0\nattribute vec2 vertexUV0;\nuniform vec4 offsetRepeat;\nvarying vec2 texCoord0;\n#endif\n#ifdef TEXCOORD1\nattribute vec2 vertexUV1;\nvarying vec2 texCoord1;\n#endif\nuniform mat4 viewProjectionMatrix;\nuniform mat4 worldMatrix;\nuniform vec3 cameraPosition;\nvarying vec3 vWorldPos;\nvarying vec3 viewPosition;\n#ifdef NORMAL\nvarying vec3 normal;\n#endif\n#ifdef TANGENT\nvarying vec3 binormal;\nvarying vec3 tangent;\n#endif\n#ifdef COLOR\nvarying vec4 color;\n#endif",
            a.animation.prevertex, "void main(void) {\nmat4 wMatrix = worldMatrix;", a.animation.vertex, "vec4 worldPos = wMatrix * vec4(vertexPosition, 1.0);\nvWorldPos = worldPos.xyz;\ngl_Position = viewProjectionMatrix * worldPos;\nviewPosition = cameraPosition - worldPos.xyz;\n#ifdef NORMAL\n\tnormal = normalize((wMatrix * vec4(vertexNormal, 0.0)).xyz);\n#endif\n#ifdef TANGENT\n\ttangent = normalize((wMatrix * vec4(vertexTangent.xyz, 0.0)).xyz);\n\tbinormal = cross(normal, tangent) * vec3(vertexTangent.w);\n#endif\n#ifdef COLOR\n\tcolor = vertexColor;\n#endif\n#ifdef TEXCOORD0\n\ttexCoord0 = vertexUV0 * offsetRepeat.zw + offsetRepeat.xy;\n#endif\n#ifdef TEXCOORD1\n\ttexCoord1 = vertexUV1;\n#endif",
            "}"
        ].join("\n"),
        fshader: ["#ifdef DIFFUSE_MAP\nuniform sampler2D diffuseMap;\n#endif\n#ifdef NORMAL_MAP\nuniform sampler2D normalMap;\n#endif\n#ifdef SPECULAR_MAP\nuniform sampler2D specularMap;\n#endif\n#ifdef EMISSIVE_MAP\nuniform sampler2D emissiveMap;\n#endif\n#ifdef AO_MAP\nuniform sampler2D aoMap;\n#endif\n#ifdef LIGHT_MAP\nuniform sampler2D lightMap;\n#endif\nvarying vec3 vWorldPos;\nvarying vec3 viewPosition;\n#ifdef NORMAL\nvarying vec3 normal;\n#endif\n#ifdef TANGENT\nvarying vec3 binormal;\nvarying vec3 tangent;\n#endif\n#ifdef COLOR\nvarying vec4 color;\n#endif\n#ifdef TEXCOORD0\nvarying vec2 texCoord0;\n#endif\n#ifdef TEXCOORD1\nvarying vec2 texCoord1; //Use for lightmap\n#endif",
             "void main(void)\n{\nvec4 final_color = vec4(1.0);\n#ifdef DIFFUSE_MAP\nfinal_color *= texture2D(diffuseMap, texCoord0);\n#endif\n#ifdef COLOR\nfinal_color *= color;\n#endif\n#ifdef AO_MAP\n#ifdef TEXCOORD1\nfinal_color *= texture2D(aoMap, texCoord1);\n#else\nfinal_color *= texture2D(aoMap, texCoord0);\n#endif\n#endif\n#ifdef LIGHT_MAP\n#ifdef TEXCOORD1\nfinal_color *= texture2D(lightMap, texCoord1) * 2.0 - 0.5;\n#else\nfinal_color *= texture2D(lightMap, texCoord0) * 2.0 - 0.5;\n#endif\n#else\n#if defined(TANGENT) && defined(NORMAL_MAP)\nmat3 tangentToWorld = mat3(tangent, binormal, normal);\nvec3 tangentNormal = texture2D(normalMap, texCoord0).xyz * vec3(2.0) - vec3(1.0);\nvec3 worldNormal = (tangentToWorld * tangentNormal);\nvec3 N = normalize(worldNormal);\n#elif defined(NORMAL)\nvec3 N = normalize(normal);\n#else\nvec3 N = vec3(0.0, 1.0, 0.0);\n#endif",
             "#endif\n#ifdef EMISSIVE_MAP\nvec3 emissive = texture2D(emissiveMap, texCoord0).rgb;\nfinal_color.xyz += final_color.xyz * emissive;\n#endif\ngl_FragColor = final_color;\n}"
        ].join("\n")
    };
    g.screenCopy = {
        attributes: {
            vertexPosition: e.POSITION,
            vertexUV0: e.TEXCOORD0
        },
        uniforms: {
            diffuseMap: c.DIFFUSE_MAP
        },
        vshader: "attribute vec3 vertexPosition;\nattribute vec2 vertexUV0;\nvarying vec2 texCoord0;\nvoid main(void) {\n\ttexCoord0 = vertexUV0;\n\tgl_Position = vec4(vertexPosition, 1.0);\n}",
        fshader: "uniform sampler2D diffuseMap;\nvarying vec2 texCoord0;\nvoid main(void)\n{\n\tgl_FragColor = texture2D(diffuseMap, texCoord0);\n}"
    };
    g.copy = {
        attributes: {
            vertexPosition: e.POSITION,
            vertexUV0: e.TEXCOORD0
        },
        uniforms: {
            viewProjectionMatrix: c.VIEW_PROJECTION_MATRIX,
            worldMatrix: c.WORLD_MATRIX,
            opacity: 1,
            diffuseMap: c.DIFFUSE_MAP
        },
        vshader: "attribute vec3 vertexPosition;\nattribute vec2 vertexUV0;\nuniform mat4 viewProjectionMatrix;\nuniform mat4 worldMatrix;\nvarying vec2 texCoord0;\nvoid main(void) {\n\ttexCoord0 = vertexUV0;\n\tgl_Position = viewProjectionMatrix * worldMatrix * vec4(vertexPosition, 1.0);\n}",
        fshader: "uniform sampler2D diffuseMap;\nuniform float opacity;\nvarying vec2 texCoord0;\nvoid main(void)\n{\n\tgl_FragColor = vec4(texture2D(diffuseMap, texCoord0).rgb, opacity);\n}"
    };
    g.copyPure = {
        attributes: {
            vertexPosition: e.POSITION,
            vertexUV0: e.TEXCOORD0
        },
        uniforms: {
            viewProjectionMatrix: c.VIEW_PROJECTION_MATRIX,
            worldMatrix: c.WORLD_MATRIX,
            opacity: 1,
            diffuseMap: c.DIFFUSE_MAP
        },
        vshader: "attribute vec3 vertexPosition;\nattribute vec2 vertexUV0;\nuniform mat4 viewProjectionMatrix;\nuniform mat4 worldMatrix;\nvarying vec2 texCoord0;\nvoid main(void) {\n\ttexCoord0 = vertexUV0;\n\tgl_Position = viewProjectionMatrix * worldMatrix * vec4(vertexPosition, 1.0);\n}",
        fshader: "uniform sampler2D diffuseMap;\nuniform float opacity;\nvarying vec2 texCoord0;\nvoid main(void)\n{\n\tvec4 col = texture2D(diffuseMap, texCoord0);\n\tgl_FragColor = vec4(col.rgb, col.a * opacity);\n}"
    };
    g.simple = {
        attributes: {
            vertexPosition: e.POSITION
        },
        uniforms: {
            viewProjectionMatrix: c.VIEW_PROJECTION_MATRIX,
            worldMatrix: c.WORLD_MATRIX
        },
        vshader: "attribute vec3 vertexPosition;\nuniform mat4 viewProjectionMatrix;\nuniform mat4 worldMatrix;\nvoid main(void) {\n\tgl_Position = viewProjectionMatrix * worldMatrix * vec4(vertexPosition, 1.0);\n}",
        fshader: "void main(void)\n{\n\tgl_FragColor = vec4(1.0);\n}"
    };
    g.simpleColored = {
        attributes: {
            vertexPosition: e.POSITION
        },
        uniforms: {
            viewProjectionMatrix: c.VIEW_PROJECTION_MATRIX,
            worldMatrix: c.WORLD_MATRIX,
            color: [1, 1, 1]
        },
        vshader: "attribute vec3 vertexPosition;\nuniform mat4 viewProjectionMatrix;\nuniform mat4 worldMatrix;\nvoid main(void) {\n\tgl_Position = viewProjectionMatrix * worldMatrix * vec4(vertexPosition, 1.0);\n}",
        fshader: "uniform vec3 color;\nvoid main(void)\n{\n\tgl_FragColor = vec4(color, 1.0);\n}"
    };
    g.simpleLit = {
        processors: [a.light.processor],
        defines: {
            NORMAL: !0
        },
        attributes: {
            vertexPosition: e.POSITION,
            vertexNormal: e.NORMAL
        },
        uniforms: {
            viewProjectionMatrix: c.VIEW_PROJECTION_MATRIX,
            worldMatrix: c.WORLD_MATRIX,
            cameraPosition: c.CAMERA
        },
        vshader: ["attribute vec3 vertexPosition;\nattribute vec3 vertexNormal;\nuniform mat4 viewProjectionMatrix;\nuniform mat4 worldMatrix;\nuniform vec3 cameraPosition;", a.light.prevertex, "varying vec3 normal;\nvarying vec3 vWorldPos;\nvarying vec3 viewPosition;\nvoid main(void) {\n\tvec4 worldPos = worldMatrix * vec4(vertexPosition, 1.0);\n vWorldPos = worldPos.xyz;\n\tgl_Position = viewProjectionMatrix * worldPos;", a.light.vertex, "\tnormal = (worldMatrix * vec4(vertexNormal, 0.0)).xyz;\n\tviewPosition = cameraPosition - worldPos.xyz;\n}"].join("\n"),
        fshader: ["#ifdef SPECULAR_MAP\nuniform sampler2D specularMap;\n#ifdef TEXCOORD0\nvarying vec2 texCoord0;\n#endif\n#endif", a.light.prefragment, "#ifdef NORMAL\nvarying vec3 normal;\n#endif\nvarying vec3 vWorldPos;\nvarying vec3 viewPosition;\nvoid main(void)\n{\n #ifdef NORMAL\n\tvec3 N = normalize(normal);\n #else\n vec3 N = vec3(0,0,1);\n #endif\n\tvec4 final_color = vec4(1.0);", a.light.fragment, "\tgl_FragColor = final_color;\n}"].join("\n")
    };
    g.billboard = {
        attributes: {
            vertexPosition: e.POSITION,
            vertexUV0: e.TEXCOORD0
        },
        uniforms: {
            viewProjectionMatrix: c.VIEW_PROJECTION_MATRIX,
            projectionMatrix: c.PROJECTION_MATRIX,
            viewMatrix: c.VIEW_MATRIX,
            worldMatrix: c.WORLD_MATRIX,
            diffuseMap: c.DIFFUSE_MAP
        },
        vshader: "attribute vec3 vertexPosition;\nattribute vec2 vertexUV0;\nuniform mat4 viewProjectionMatrix;\nuniform mat4 worldMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 viewMatrix;\nvarying vec2 texCoord0;\nvoid main(void) {\n\ttexCoord0 = vertexUV0;\n\tgl_Position = viewProjectionMatrix * worldMatrix * vec4(0.0, 0.0, 0.0, 1.0) + projectionMatrix * vec4(vertexPosition.x, vertexPosition.y, 0.0, 0.0);\n}",
        fshader: "uniform sampler2D diffuseMap;\nvarying vec2 texCoord0;\nvoid main(void)\n{\n\tgl_FragColor = texture2D(diffuseMap, texCoord0);\n}"
    };
    g.textured = {
        defines: {
            TEXCOORD0: !0,
            DIFFUSE_MAP: !0
        },
        attributes: {
            vertexPosition: e.POSITION,
            vertexUV0: e.TEXCOORD0
        },
        uniforms: {
            viewProjectionMatrix: c.VIEW_PROJECTION_MATRIX,
            worldMatrix: c.WORLD_MATRIX,
            diffuseMap: c.DIFFUSE_MAP
        },
        vshader: "attribute vec3 vertexPosition;\nattribute vec2 vertexUV0;\nuniform mat4 viewProjectionMatrix;\nuniform mat4 worldMatrix;\nvarying vec2 texCoord0;\nvoid main(void) {\n\ttexCoord0 = vertexUV0;\n\tgl_Position = viewProjectionMatrix * worldMatrix * vec4(vertexPosition, 1.0);\n}",
        fshader: "#if defined(TEXCOORD0) && defined(DIFFUSE_MAP)\nuniform sampler2D diffuseMap;\nvarying vec2 texCoord0;\n#endif\nvoid main(void)\n{\n #if defined(TEXCOORD0) && defined(DIFFUSE_MAP)\n\tgl_FragColor = texture2D(diffuseMap, texCoord0);\n #else\n gl_FragColor = vec4(1.0);\n #endif\n}"
    };
    g.texturedLit = {
        processors: [a.light.processor],
        attributes: {
            vertexPosition: e.POSITION,
            vertexNormal: e.NORMAL,
            vertexUV0: e.TEXCOORD0
        },
        uniforms: {
            viewProjectionMatrix: c.VIEW_PROJECTION_MATRIX,
            worldMatrix: c.WORLD_MATRIX,
            cameraPosition: c.CAMERA,
            diffuseMap: c.DIFFUSE_MAP
        },
        vshader: ["attribute vec3 vertexPosition;\nattribute vec3 vertexNormal;\nattribute vec2 vertexUV0;\nuniform mat4 viewProjectionMatrix;\nuniform mat4 worldMatrix;\nuniform vec3 cameraPosition;", a.light.prevertex, "varying vec3 normal;\nvarying vec3 vWorldPos;\nvarying vec3 viewPosition;\nvarying vec2 texCoord0;\nvoid main(void) {\n\tvec4 worldPos = worldMatrix * vec4(vertexPosition, 1.0);\n vWorldPos = worldPos.xyz;\n\tgl_Position = viewProjectionMatrix * worldPos;",
            a.light.vertex, "\tnormal = (worldMatrix * vec4(vertexNormal, 0.0)).xyz;\n\ttexCoord0 = vertexUV0;\n\tviewPosition = cameraPosition - worldPos.xyz;\n}"
        ].join("\n"),
        fshader: ["uniform sampler2D diffuseMap;", a.light.prefragment, "varying vec3 normal;\nvarying vec3 vWorldPos;\nvarying vec3 viewPosition;\nvarying vec2 texCoord0;\nvoid main(void)\n{\n\tvec3 N = normalize(normal);\n\tvec4 final_color = texture2D(diffuseMap, texCoord0);", a.light.fragment, "\tgl_FragColor = final_color;\n}"].join("\n")
    };
    g.convolution = {
        defines: {
            KERNEL_SIZE_FLOAT: "25.0",
            KERNEL_SIZE_INT: "25"
        },
        attributes: {
            position: e.POSITION,
            uv: e.TEXCOORD0
        },
        uniforms: {
            viewMatrix: c.VIEW_MATRIX,
            projectionMatrix: c.PROJECTION_MATRIX,
            worldMatrix: c.WORLD_MATRIX,
            tDiffuse: c.DIFFUSE_MAP,
            uImageIncrement: [0.001953125, 0],
            cKernel: []
        },
        vshader: "attribute vec3 position;\nattribute vec2 uv;\nuniform mat4 viewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 worldMatrix;\nuniform vec2 uImageIncrement;\nvarying vec2 vUv;\nvoid main() {\n\tvUv = uv - ( ( KERNEL_SIZE_FLOAT - 1.0 ) / 2.0 ) * uImageIncrement;\n\tgl_Position = projectionMatrix * viewMatrix * worldMatrix * vec4( position, 1.0 );\n}",
        fshader: "uniform float cKernel[ KERNEL_SIZE_INT ];\nuniform sampler2D tDiffuse;\nuniform vec2 uImageIncrement;\nvarying vec2 vUv;\nvoid main() {\n\tvec2 imageCoord = vUv;\n\tvec4 sum = vec4( 0.0 );\n\tfor( int i = 0; i < KERNEL_SIZE_INT; i ++ ) {\n\t\tsum += texture2D( tDiffuse, imageCoord ) * cKernel[ i ];\n\t\timageCoord += uImageIncrement;\n\t}\n\tgl_FragColor = sum;\n}",
        buildKernel: function (a) {
            var b, c, d, g, e = 2 * Math.ceil(a * 3) + 1;
            e > 25 && (e = 25);
            g = (e - 1) * 0.5;
            c = Array(e);
            for (b = d = 0; b < e; ++b) c[b] = Math.exp(-((b -
                g) * (b - g)) / (2 * a * a)), d += c[b];
            for (b = 0; b < e; ++b) c[b] /= d;
            return c
        }
    };
    g.showDepth = {
        attributes: {
            vertexPosition: e.POSITION
        },
        uniforms: {
            viewMatrix: c.VIEW_MATRIX,
            projectionMatrix: c.PROJECTION_MATRIX,
            worldMatrix: c.WORLD_MATRIX,
            near: c.NEAR_PLANE,
            far: c.FAR_PLANE
        },
        vshader: "attribute vec3 vertexPosition;\nuniform mat4 viewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 worldMatrix;\nvoid main(void) {\n\tgl_Position = projectionMatrix * viewMatrix * worldMatrix * vec4(vertexPosition, 1.0);\n}",
        fshader: "uniform float near;\nuniform float far;\nvoid main(void)\n{\n\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\n\tfloat d = 1.0 - smoothstep( near, far, depth );\n\tgl_FragColor = vec4(d);\n}"
    };
    g.showNormals = {
        defines: {
            NORMAL: !0
        },
        attributes: {
            vertexPosition: e.POSITION,
            vertexNormal: e.NORMAL
        },
        uniforms: {
            viewMatrix: c.VIEW_MATRIX,
            projectionMatrix: c.PROJECTION_MATRIX,
            viewProjectionMatrix: c.VIEW_PROJECTION_MATRIX,
            worldMatrix: c.WORLD_MATRIX,
            opacity: 1
        },
        vshader: "attribute vec3 vertexPosition;\nattribute vec3 vertexNormal;\nuniform mat4 viewProjectionMatrix;\nuniform mat4 worldMatrix;\nvarying vec3 normal;\nvoid main() {\nnormal = vec3(worldMatrix * vec4(vertexNormal, 0.0));\ngl_Position = viewProjectionMatrix * worldMatrix * vec4(vertexPosition, 1.0);\n}",
        fshader: "uniform float opacity;\n#ifdef NORMAL\nvarying vec3 normal;\n#else\nvec3 normal = vec3(0,0,1);\n#endif\nvoid main() {\ngl_FragColor = vec4( 0.5 * normalize( normal ) + 0.5, opacity );\n}"
    };
    g.bokehShader = {
        attributes: {
            position: e.POSITION,
            uv: e.TEXCOORD0
        },
        uniforms: {
            viewMatrix: c.VIEW_MATRIX,
            projectionMatrix: c.PROJECTION_MATRIX,
            worldMatrix: c.WORLD_MATRIX,
            tColor: c.DIFFUSE_MAP,
            tDepth: c.DEPTH_MAP,
            focus: 1,
            aspect: 1,
            aperture: 0.025,
            maxblur: 1
        },
        vshader: "attribute vec3 position;\nattribute vec2 uv;\nuniform mat4 viewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 worldMatrix;\nvarying vec2 vUv;\nvoid main() {\n\tvUv = uv;\n\tgl_Position = projectionMatrix * viewMatrix * worldMatrix * vec4( position, 1.0 );\n}",
        fshader: "varying vec2 vUv;\nuniform sampler2D tColor;\nuniform sampler2D tDepth;\nuniform float maxblur;\nuniform float aperture;\nuniform float focus;\nuniform float aspect;\nvoid main() {\nvec2 aspectcorrect = vec2( 1.0, aspect );\nvec4 depth1 = texture2D( tDepth, vUv );\nfloat factor = depth1.x - focus;\nvec2 dofblur = vec2 ( clamp( factor * aperture, -maxblur, maxblur ) );\nvec2 dofblur9 = dofblur * 0.9;\nvec2 dofblur7 = dofblur * 0.7;\nvec2 dofblur4 = dofblur * 0.4;\nvec4 col = vec4( 0.0 );\ncol += texture2D( tColor, vUv.xy );\ncol += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur );\ncol += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur );\ncol += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur );\ncol += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur );\ncol += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur );\ncol += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur );\ncol += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur );\ncol += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur );\ncol += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur );\ncol += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur );\ncol += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur );\ncol += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur );\ncol += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur );\ncol += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur );\ncol += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur );\ncol += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur );\ncol += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur9 );\ncol += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur9 );\ncol += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur9 );\ncol += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur9 );\ncol += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur9 );\ncol += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur9 );\ncol += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur9 );\ncol += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur9 );\ncol += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur7 );\ncol += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur7 );\ncol += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur7 );\ncol += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur7 );\ncol += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur7 );\ncol += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur7 );\ncol += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur7 );\ncol += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur7 );\ncol += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur4 );\ncol += texture2D( tColor, vUv.xy + ( vec2(  0.4,   0.0  ) * aspectcorrect ) * dofblur4 );\ncol += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur4 );\ncol += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur4 );\ncol += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur4 );\ncol += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur4 );\ncol += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur4 );\ncol += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur4 );\ngl_FragColor = col / 41.0;\ngl_FragColor.a = 1.0;\n}"
    };
    g.particles = {
        attributes: {
            vertexPosition: e.POSITION,
            vertexColor: e.COLOR,
            vertexUV0: e.TEXCOORD0
        },
        uniforms: {
            viewProjectionMatrix: c.VIEW_PROJECTION_MATRIX,
            worldMatrix: c.WORLD_MATRIX,
            diffuseMap: c.DIFFUSE_MAP
        },
        vshader: "attribute vec3 vertexPosition;\nattribute vec4 vertexColor;\nattribute vec2 vertexUV0;\nuniform mat4 viewProjectionMatrix;\nuniform mat4 worldMatrix;\nvarying vec2 texCoord0;\nvarying vec4 color;\nvoid main(void) {\n    texCoord0 = vertexUV0;\n    color = vertexColor;\n\t gl_Position = viewProjectionMatrix * worldMatrix * vec4(vertexPosition, 1.0);\n}",
        fshader: "uniform sampler2D diffuseMap;\nvarying vec2 texCoord0;\nvarying vec4 color;\nvoid main(void)\n{\n\tvec4 texCol = texture2D(diffuseMap, texCoord0);\n   if (color.a == 0.0 || texCol.a == 0.0) discard;\n\telse gl_FragColor = texCol * color;\n}"
    };
    g.sepia = {
        attributes: {
            vertexPosition: e.POSITION,
            vertexUV0: e.TEXCOORD0
        },
        uniforms: {
            viewMatrix: c.VIEW_MATRIX,
            projectionMatrix: c.PROJECTION_MATRIX,
            worldMatrix: c.WORLD_MATRIX,
            tDiffuse: c.DIFFUSE_MAP,
            amount: 1
        },
        vshader: "attribute vec3 vertexPosition;\nattribute vec2 vertexUV0;\nuniform mat4 viewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 worldMatrix;\nvarying vec2 vUv;\nvoid main() {\nvUv = vertexUV0;\ngl_Position = projectionMatrix * viewMatrix * worldMatrix * vec4( vertexPosition, 1.0 );\n}",
        fshader: "uniform float amount;\nuniform sampler2D tDiffuse;\nvarying vec2 vUv;\nvoid main() {\nvec4 color = texture2D( tDiffuse, vUv );\nvec3 c = color.rgb;\ncolor.r = dot( c, vec3( 1.0 - 0.607 * amount, 0.769 * amount, 0.189 * amount ) );\ncolor.g = dot( c, vec3( 0.349 * amount, 1.0 - 0.314 * amount, 0.168 * amount ) );\ncolor.b = dot( c, vec3( 0.272 * amount, 0.534 * amount, 1.0 - 0.869 * amount ) );\ngl_FragColor = vec4( min( vec3( 1.0 ), color.rgb ), color.a );\n}"
    };
    g.dotscreen = {
        attributes: {
            vertexPosition: e.POSITION,
            vertexUV0: e.TEXCOORD0
        },
        uniforms: {
            viewMatrix: c.VIEW_MATRIX,
            projectionMatrix: c.PROJECTION_MATRIX,
            worldMatrix: c.WORLD_MATRIX,
            tDiffuse: c.DIFFUSE_MAP,
            tSize: [256, 256],
            center: [0.5, 0.5],
            angle: 1.57,
            scale: 1
        },
        vshader: "attribute vec3 vertexPosition;\nattribute vec2 vertexUV0;\nuniform mat4 viewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 worldMatrix;\nvarying vec2 vUv;\nvoid main() {\nvUv = vertexUV0;\ngl_Position = projectionMatrix * viewMatrix * worldMatrix * vec4( vertexPosition, 1.0 );\n}",
        fshader: "uniform vec2 center;\nuniform float angle;\nuniform float scale;\nuniform vec2 tSize;\nuniform sampler2D tDiffuse;\nvarying vec2 vUv;\nfloat pattern() {\nfloat s = sin( angle ), c = cos( angle );\nvec2 tex = vUv * tSize - center;\nvec2 point = vec2( c * tex.x - s * tex.y, s * tex.x + c * tex.y ) * scale;\nreturn ( sin( point.x ) * sin( point.y ) ) * 4.0;\n}\nvoid main() {\nvec4 color = texture2D( tDiffuse, vUv );\nfloat average = ( color.r + color.g + color.b ) / 3.0;\ngl_FragColor = vec4( vec3( average * 10.0 - 5.0 + pattern() ), color.a );\n}"
    };
    g.vignette = {
        attributes: {
            vertexPosition: e.POSITION,
            vertexUV0: e.TEXCOORD0
        },
        uniforms: {
            viewMatrix: c.VIEW_MATRIX,
            projectionMatrix: c.PROJECTION_MATRIX,
            worldMatrix: c.WORLD_MATRIX,
            tDiffuse: c.DIFFUSE_MAP,
            offset: 1,
            darkness: 1.5
        },
        vshader: "attribute vec3 vertexPosition;\nattribute vec2 vertexUV0;\nuniform mat4 viewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 worldMatrix;\nvarying vec2 vUv;\nvoid main() {\nvUv = vertexUV0;\ngl_Position = projectionMatrix * viewMatrix * worldMatrix * vec4( vertexPosition, 1.0 );\n}",
        fshader: "uniform float offset;\nuniform float darkness;\nuniform sampler2D tDiffuse;\nvarying vec2 vUv;\nvoid main() {\nvec4 texel = texture2D( tDiffuse, vUv );\nvec2 uv = ( vUv - vec2( 0.5 ) ) * vec2( offset );\ngl_FragColor = vec4( mix( texel.rgb, vec3( 1.0 - darkness ), dot( uv, uv ) ), texel.a );\n}"
    };
    g.film = {
        attributes: g.copy.attributes,
        uniforms: {
            tDiffuse: c.DIFFUSE_MAP,
            time: function () {
                return d.time
            },
            nIntensity: 0.5,
            sIntensity: 0.5,
            sCount: 1024,
            grayscale: 0,
            $link: g.copy.uniforms
        },
        vshader: g.copy.vshader,
        fshader: "uniform float time;\nuniform bool grayscale;\nuniform float nIntensity;\nuniform float sIntensity;\nuniform float sCount;\nuniform sampler2D tDiffuse;\nvarying vec2 texCoord0;\nvoid main() {\n\tvec4 cTextureScreen = texture2D( tDiffuse, texCoord0 );\n\tfloat x = texCoord0.x * texCoord0.y * time * 1000.0;\nx = mod( x, 13.0 ) * mod( x, 123.0 );\nfloat dx = mod( x, 0.01 );\n\tvec3 cResult = cTextureScreen.rgb + cTextureScreen.rgb * clamp( 0.1 + dx * 100.0, 0.0, 1.0 );\n\tvec2 sc = vec2( sin( texCoord0.y * sCount ), cos( texCoord0.y * sCount ) );\n\tcResult += cTextureScreen.rgb * vec3( sc.x, sc.y, sc.x ) * sIntensity;\n\tcResult = cTextureScreen.rgb + clamp( nIntensity, 0.0,1.0 ) * ( cResult - cTextureScreen.rgb );\n\tif( grayscale ) {\n\t\tcResult = vec3( cResult.r * 0.3 + cResult.g * 0.59 + cResult.b * 0.11 );\n\t}\n\tgl_FragColor = vec4( cResult, cTextureScreen.a );\n}"
    };
    g.bleachbypass = {
        attributes: {
            vertexPosition: e.POSITION,
            vertexUV0: e.TEXCOORD0
        },
        uniforms: {
            viewMatrix: c.VIEW_MATRIX,
            projectionMatrix: c.PROJECTION_MATRIX,
            worldMatrix: c.WORLD_MATRIX,
            tDiffuse: c.DIFFUSE_MAP,
            opacity: 1
        },
        vshader: "attribute vec3 vertexPosition;\nattribute vec2 vertexUV0;\nuniform mat4 viewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 worldMatrix;\nvarying vec2 vUv;\nvoid main() {\nvUv = vertexUV0;\ngl_Position = projectionMatrix * viewMatrix * worldMatrix * vec4( vertexPosition, 1.0 );\n}",
        fshader: "uniform float opacity;\nuniform sampler2D tDiffuse;\nvarying vec2 vUv;\nvoid main() {\nvec4 base = texture2D( tDiffuse, vUv );\nvec3 lumCoeff = vec3( 0.25, 0.65, 0.1 );\nfloat lum = dot( lumCoeff, base.rgb );\nvec3 blend = vec3( lum );\nfloat L = min( 1.0, max( 0.0, 10.0 * ( lum - 0.45 ) ) );\nvec3 result1 = 2.0 * base.rgb * blend;\nvec3 result2 = 1.0 - 2.0 * ( 1.0 - blend ) * ( 1.0 - base.rgb );\nvec3 newColor = mix( result1, result2, L );\nfloat A2 = opacity * base.a;\nvec3 mixRGB = A2 * newColor.rgb;\nmixRGB += ( ( 1.0 - A2 ) * base.rgb );\ngl_FragColor = vec4( mixRGB, base.a );\n}"
    };
    g.horizontalTiltShift = {
        attributes: {
            vertexPosition: e.POSITION,
            vertexUV0: e.TEXCOORD0
        },
        uniforms: {
            viewMatrix: c.VIEW_MATRIX,
            projectionMatrix: c.PROJECTION_MATRIX,
            worldMatrix: c.WORLD_MATRIX,
            tDiffuse: c.DIFFUSE_MAP,
            h: 0.0078125,
            r: 0.5
        },
        vshader: "attribute vec3 vertexPosition;\nattribute vec2 vertexUV0;\nuniform mat4 viewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 worldMatrix;\nvarying vec2 vUv;\nvoid main() {\nvUv = vertexUV0;\ngl_Position = projectionMatrix * viewMatrix * worldMatrix * vec4( vertexPosition, 1.0 );\n}",
        fshader: "uniform sampler2D tDiffuse;\nuniform float h;\nuniform float r;\nvarying vec2 vUv;\nvoid main() {\nvec4 sum = vec4( 0.0 );\nfloat hh = h * abs( r - vUv.y );\nsum += texture2D( tDiffuse, vec2( vUv.x - 4.0 * hh, vUv.y ) ) * 0.051;\nsum += texture2D( tDiffuse, vec2( vUv.x - 3.0 * hh, vUv.y ) ) * 0.0918;\nsum += texture2D( tDiffuse, vec2( vUv.x - 2.0 * hh, vUv.y ) ) * 0.12245;\nsum += texture2D( tDiffuse, vec2( vUv.x - 1.0 * hh, vUv.y ) ) * 0.1531;\nsum += texture2D( tDiffuse, vec2( vUv.x,            vUv.y ) ) * 0.1633;\nsum += texture2D( tDiffuse, vec2( vUv.x + 1.0 * hh, vUv.y ) ) * 0.1531;\nsum += texture2D( tDiffuse, vec2( vUv.x + 2.0 * hh, vUv.y ) ) * 0.12245;\nsum += texture2D( tDiffuse, vec2( vUv.x + 3.0 * hh, vUv.y ) ) * 0.0918;\nsum += texture2D( tDiffuse, vec2( vUv.x + 4.0 * hh, vUv.y ) ) * 0.051;\ngl_FragColor = sum;\n}"
    };
    g.colorify = {
        attributes: {
            vertexPosition: e.POSITION,
            vertexUV0: e.TEXCOORD0
        },
        uniforms: {
            viewMatrix: c.VIEW_MATRIX,
            projectionMatrix: c.PROJECTION_MATRIX,
            worldMatrix: c.WORLD_MATRIX,
            tDiffuse: c.DIFFUSE_MAP,
            color: [1, 1, 1]
        },
        vshader: "attribute vec3 vertexPosition;\nattribute vec2 vertexUV0;\nuniform mat4 viewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 worldMatrix;\nvarying vec2 vUv;\nvoid main() {\nvUv = vertexUV0;\ngl_Position = projectionMatrix * viewMatrix * worldMatrix * vec4( vertexPosition, 1.0 );\n}",
        fshader: "uniform vec3 color;\nuniform sampler2D tDiffuse;\nvarying vec2 vUv;\nvoid main() {\nvec4 texel = texture2D( tDiffuse, vUv );\nvec3 luma = vec3( 0.299, 0.587, 0.114 );\nfloat v = dot( texel.xyz, luma );\ngl_FragColor = vec4( v * color, texel.w );\n}"
    };
    g.normalmap = {
        attributes: {
            vertexPosition: e.POSITION,
            vertexUV0: e.TEXCOORD0
        },
        uniforms: {
            viewMatrix: c.VIEW_MATRIX,
            projectionMatrix: c.PROJECTION_MATRIX,
            worldMatrix: c.WORLD_MATRIX,
            heightMap: c.DIFFUSE_MAP,
            resolution: [512, 512],
            height: 0.05
        },
        vshader: "attribute vec3 vertexPosition;\nattribute vec2 vertexUV0;\nuniform mat4 viewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 worldMatrix;\nvarying vec2 vUv;\nvoid main() {\nvUv = vertexUV0;\ngl_Position = projectionMatrix * viewMatrix * worldMatrix * vec4( vertexPosition, 1.0 );\n}",
        fshader: "uniform float height;\nuniform vec2 resolution;\nuniform sampler2D heightMap;\nvarying vec2 vUv;\nvoid main() {\nfloat val = texture2D( heightMap, vUv ).x;\nfloat valU = texture2D( heightMap, vUv + vec2( 1.0 / resolution.x, 0.0 ) ).x;\nfloat valV = texture2D( heightMap, vUv + vec2( 0.0, 1.0 / resolution.y ) ).x;\ngl_FragColor = vec4( ( 0.5 * normalize( vec3( val - valU, val - valV, height  ) ) + 0.5 ), 1.0 );\n}"
    };
    g.ssao = {
        attributes: {
            vertexPosition: e.POSITION,
            vertexUV0: e.TEXCOORD0
        },
        uniforms: {
            viewMatrix: c.VIEW_MATRIX,
            projectionMatrix: c.PROJECTION_MATRIX,
            worldMatrix: c.WORLD_MATRIX,
            tDiffuse: c.DIFFUSE_MAP,
            tDepth: c.DEPTH_MAP,
            size: [512, 512],
            cameraNear: c.MAIN_NEAR_PLANE,
            cameraFar: c.MAIN_FAR_PLANE,
            fogNear: c.MAIN_NEAR_PLANE,
            fogFar: c.MAIN_FAR_PLANE,
            fogEnabled: 0,
            onlyAO: 0,
            aoClamp: 0.3,
            lumInfluence: 0
        },
        vshader: "attribute vec3 vertexPosition;\nattribute vec2 vertexUV0;\nuniform mat4 viewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 worldMatrix;\nvarying vec2 vUv;\nvoid main() {\nvUv = vertexUV0;\ngl_Position = projectionMatrix * viewMatrix * worldMatrix * vec4( vertexPosition, 1.0 );\n}",
        fshader: "uniform float cameraNear;\nuniform float cameraFar;\nuniform float fogNear;\nuniform float fogFar;\nuniform bool fogEnabled;\nuniform bool onlyAO;\nuniform vec2 size;\nuniform float aoClamp;\nuniform float lumInfluence;\nuniform sampler2D tDiffuse;\nuniform sampler2D tDepth;\nvarying vec2 vUv;\n#define DL 2.399963229728653\n#define EULER 2.718281828459045\nfloat width = size.x;\nfloat height = size.y;\nfloat cameraFarPlusNear = cameraFar + cameraNear;\nfloat cameraFarMinusNear = cameraFar - cameraNear;\nfloat cameraCoef = 2.0 * cameraNear;\nconst int samples = 16;\nconst float radius = 2.0;\nconst bool useNoise = false;\nconst float noiseAmount = 0.0003;\nconst float diffArea = 0.4;\nconst float gDisplace = 0.4;\nconst vec3 onlyAOColor = vec3( 1.0, 1.0, 1.0 );\nfloat unpackDepth( const in vec4 rgba_depth ) {\nconst vec4 bit_shift = vec4( 1.0 / ( 256.0 * 256.0 * 256.0 ), 1.0 / ( 256.0 * 256.0 ), 1.0 / 256.0, 1.0 );\nfloat depth = dot( rgba_depth, bit_shift );\nreturn depth;\n}\nvec2 rand( const vec2 coord ) {\nvec2 noise;\nif ( useNoise ) {\nfloat nx = dot ( coord, vec2( 12.9898, 78.233 ) );\nfloat ny = dot ( coord, vec2( 12.9898, 78.233 ) * 2.0 );\nnoise = clamp( fract ( 43758.5453 * sin( vec2( nx, ny ) ) ), 0.0, 1.0 );\n} else {\nfloat ff = fract( 1.0 - coord.s * ( width / 2.0 ) );\nfloat gg = fract( coord.t * ( height / 2.0 ) );\nnoise = vec2( 0.25, 0.75 ) * vec2( ff ) + vec2( 0.75, 0.25 ) * gg;\n}\nreturn ( noise * 2.0  - 1.0 ) * noiseAmount;\n}\nfloat doFog() {\nfloat zdepth = unpackDepth( texture2D( tDepth, vUv ) );\nfloat depth = -cameraFar * cameraNear / ( zdepth * cameraFarMinusNear - cameraFar );\nreturn smoothstep( fogNear, fogFar, depth );\n}\nfloat readDepth( const in vec2 coord ) {\nreturn cameraCoef / ( cameraFarPlusNear - unpackDepth( texture2D( tDepth, coord ) ) * cameraFarMinusNear );\n}\nfloat compareDepths( const in float depth1, const in float depth2, inout int far ) {\nfloat garea = 2.0;\nfloat diff = ( depth1 - depth2 ) * 100.0;\nif ( diff < gDisplace ) {\ngarea = diffArea;\n} else {\nfar = 1;\n}\nfloat dd = diff - gDisplace;\nfloat gauss = pow( EULER, -2.0 * dd * dd / ( garea * garea ) );\nreturn gauss;\n}\nfloat calcAO( float depth, float dw, float dh ) {\nfloat dd = radius - depth * radius;\nvec2 vv = vec2( dw, dh );\nvec2 coord1 = vUv + dd * vv;\nvec2 coord2 = vUv - dd * vv;\nfloat temp1 = 0.0;\nfloat temp2 = 0.0;\nint far = 0;\ntemp1 = compareDepths( depth, readDepth( coord1 ), far );\nif ( far > 0 ) {\ntemp2 = compareDepths( readDepth( coord2 ), depth, far );\ntemp1 += ( 1.0 - temp1 ) * temp2;\n}\nreturn temp1;\n}\nvoid main() {\nvec2 noise = rand( vUv );\nfloat depth = readDepth( vUv );\nfloat tt = clamp( depth, aoClamp, 1.0 );\nfloat w = ( 1.0 / width )  / tt + ( noise.x * ( 1.0 - noise.x ) );\nfloat h = ( 1.0 / height ) / tt + ( noise.y * ( 1.0 - noise.y ) );\nfloat pw;\nfloat ph;\nfloat ao;\nfloat dz = 1.0 / float( samples );\nfloat z = 1.0 - dz / 2.0;\nfloat l = 0.0;\nfor ( int i = 0; i <= samples; i ++ ) {\nfloat r = sqrt( 1.0 - z );\npw = cos( l ) * r;\nph = sin( l ) * r;\nao += calcAO( depth, pw * w, ph * h );\nz = z - dz;\nl = l + DL;\n}\nao /= float( samples );\nao = 1.0 - ao;\nif ( fogEnabled ) {\nao = mix( ao, 1.0, doFog() );\n}\nvec3 color = texture2D( tDiffuse, vUv ).rgb;\nvec3 lumcoeff = vec3( 0.299, 0.587, 0.114 );\nfloat lum = dot( color.rgb, lumcoeff );\nvec3 luminance = vec3( lum );\nvec3 final = vec3( color * mix( vec3( ao ), vec3( 1.0 ), luminance * lumInfluence ) );\nif ( onlyAO ) {\nfinal = onlyAOColor * vec3( mix( vec3( ao ), vec3( 1.0 ), luminance * lumInfluence ) );\n}\ngl_FragColor = vec4( final, 1.0 );\n}"
    };
    g.skinning = {
        defines: {
            JOINT_COUNT: 56,
            WEIGHTS: 4
        },
        attributes: {
            vertexPosition: e.POSITION,
            vertexUV0: e.TEXCOORD0,
            vertexWeights: e.WEIGHTS,
            vertexJointIDs: e.JOINTIDS
        },
        uniforms: {
            viewProjectionMatrix: c.VIEW_PROJECTION_MATRIX,
            worldMatrix: c.WORLD_MATRIX,
            diffuseMap: c.DIFFUSE_MAP,
            jointPalette: function (a) {
                var a = a.meshData,
                    b = a.currentPose;
                if (b) {
                    var b = b._matrixPalette,
                        c = a.paletteMap.length * 16,
                        d = a.store;
                    if (!d) d = new Float32Array(c), a.store = d;
                    for (var g = 0; g < a.paletteMap.length; g++)
                        for (var c = b[a.paletteMap[g]], e = 0; e < 4; e++)
                            for (var m =
                                0; m < 4; m++) d[g * 16 + e * 4 + m] = c.data[m * 4 + e];
                    return d
                }
            }
        },
        vshader: "attribute vec3 vertexPosition;\nattribute vec2 vertexUV0;\nattribute vec4 vertexWeights;\nattribute vec4 vertexJointIDs;\nuniform mat4 viewProjectionMatrix;\nuniform mat4 worldMatrix;\nuniform mat4 jointPalette[JOINT_COUNT];\nvarying vec2 texCoord0;\nvoid main(void) {\n\tmat4 mat = mat4(0.0);\n\tmat += jointPalette[int(vertexJointIDs.x)] * vertexWeights.x;\n\tmat += jointPalette[int(vertexJointIDs.y)] * vertexWeights.y;\n\tmat += jointPalette[int(vertexJointIDs.z)] * vertexWeights.z;\n\tmat += jointPalette[int(vertexJointIDs.w)] * vertexWeights.w;\n\ttexCoord0 = vertexUV0;\n\tgl_Position = viewProjectionMatrix * worldMatrix * mat * vec4(vertexPosition, 1.0);\n}",
        fshader: "uniform sampler2D diffuseMap;\nvarying vec2 texCoord0;\nvoid main(void)\n{\n\tgl_FragColor = texture2D(diffuseMap, texCoord0);\n}"
    };
    g.rgbshift = {
        attributes: {
            vertexPosition: e.POSITION,
            vertexUV0: e.TEXCOORD0
        },
        uniforms: {
            viewMatrix: c.VIEW_MATRIX,
            projectionMatrix: c.PROJECTION_MATRIX,
            worldMatrix: c.WORLD_MATRIX,
            tDiffuse: c.DIFFUSE_MAP,
            amount: 0.005,
            angle: 0
        },
        vshader: "attribute vec3 vertexPosition;\nattribute vec2 vertexUV0;\nuniform mat4 viewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 worldMatrix;\nvarying vec2 vUv;\nvoid main() {\nvUv = vertexUV0;\ngl_Position = projectionMatrix * viewMatrix * worldMatrix * vec4( vertexPosition, 1.0 );\n}",
        fshader: "uniform sampler2D tDiffuse;\nuniform float amount;\nuniform float angle;\nvarying vec2 vUv;\nvoid main() {\nvec2 offset = amount * vec2( cos(angle), sin(angle));\nvec4 cr = texture2D(tDiffuse, vUv + offset);\nvec4 cga = texture2D(tDiffuse, vUv);\nvec4 cb = texture2D(tDiffuse, vUv - offset);\ngl_FragColor = vec4(cr.r, cga.g, cb.b, cga.a);\n}"
    };
    g.brightnesscontrast = {
        attributes: {
            vertexPosition: e.POSITION,
            vertexUV0: e.TEXCOORD0
        },
        uniforms: {
            viewMatrix: c.VIEW_MATRIX,
            projectionMatrix: c.PROJECTION_MATRIX,
            worldMatrix: c.WORLD_MATRIX,
            tDiffuse: c.DIFFUSE_MAP,
            brightness: 0,
            contrast: 0
        },
        vshader: "attribute vec3 vertexPosition;\nattribute vec2 vertexUV0;\nuniform mat4 viewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 worldMatrix;\nvarying vec2 vUv;\nvoid main() {\nvUv = vertexUV0;\ngl_Position = projectionMatrix * viewMatrix * worldMatrix * vec4( vertexPosition, 1.0 );\n}",
        fshader: "uniform sampler2D tDiffuse;\nuniform float brightness;\nuniform float contrast;\nvarying vec2 vUv;\nvoid main() {\ngl_FragColor = texture2D( tDiffuse, vUv );\ngl_FragColor.rgb += brightness;\nif (contrast > 0.0) {\ngl_FragColor.rgb = (gl_FragColor.rgb - 0.5) / (1.0 - contrast) + 0.5;\n} else {\ngl_FragColor.rgb = (gl_FragColor.rgb - 0.5) * (1.0 + contrast) + 0.5;\n}\n}"
    };
    g.luminosity = {
        attributes: {
            vertexPosition: e.POSITION,
            vertexUV0: e.TEXCOORD0
        },
        uniforms: {
            viewMatrix: c.VIEW_MATRIX,
            projectionMatrix: c.PROJECTION_MATRIX,
            worldMatrix: c.WORLD_MATRIX,
            tDiffuse: c.DIFFUSE_MAP
        },
        vshader: "attribute vec3 vertexPosition;\nattribute vec2 vertexUV0;\nuniform mat4 viewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 worldMatrix;\nvarying vec2 vUv;\nvoid main() {\nvUv = vertexUV0;\ngl_Position = projectionMatrix * viewMatrix * worldMatrix * vec4( vertexPosition, 1.0 );\n}",
        fshader: "uniform sampler2D tDiffuse;\nvarying vec2 vUv;\nvoid main() {\nvec4 texel = texture2D( tDiffuse, vUv );\nvec3 luma = vec3( 0.299, 0.587, 0.114 );\nfloat v = dot( texel.xyz, luma );\ngl_FragColor = vec4( v, v, v, texel.w );\n}"
    };
    g.point = {
        attributes: {
            vertexPosition: e.POSITION,
            vertexColor: e.COLOR
        },
        uniforms: {
            viewProjectionMatrix: c.VIEW_PROJECTION_MATRIX,
            worldMatrix: c.WORLD_MATRIX,
            pointSize: 2
        },
        vshader: "attribute vec3 vertexPosition;\nattribute vec4 vertexColor;\nuniform mat4 viewProjectionMatrix;\nuniform mat4 worldMatrix;\nuniform float pointSize;\nvarying vec4 color;\nvoid main(void) {\n\tcolor = vertexColor;\n\tgl_Position = viewProjectionMatrix * worldMatrix * vec4(vertexPosition, 1.0);\n\tgl_PointSize = pointSize;\n}",
        fshader: "varying vec4 color;\nvoid main(void)\n{\n\tgl_FragColor = color;\n}"
    };
    g.toon = {
        attributes: {
            vertexPosition: e.POSITION,
            vertexNormal: e.NORMAL
        },
        uniforms: {
            viewMatrix: c.VIEW_MATRIX,
            projectionMatrix: c.PROJECTION_MATRIX,
            worldMatrix: c.WORLD_MATRIX,
            cameraPosition: c.CAMERA,
            lightPosition: c.LIGHT0,
            HighlightColour: [0.9, 0.8, 0.7, 1],
            MidColour: [0.65, 0.55, 0.45, 1],
            ShadowColour: [0.4, 0.3, 0.2, 1],
            HighlightSize: 0.2,
            ShadowSize: 0.01,
            OutlineWidth: 0.15
        },
        vshader: "attribute vec3 vertexPosition;\nattribute vec3 vertexNormal;\nuniform mat4 viewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 worldMatrix;\nuniform vec3 cameraPosition;\nuniform vec3 lightPosition;\nvarying vec3 N;\nvarying vec3 V;\nvarying vec3 L;\nvoid main()\n{\n\tvec4 worldPos = worldMatrix * vec4(vertexPosition, 1.0);\n\tN = (worldMatrix * vec4(vertexNormal, 0.0)).xyz;\n\tL = lightPosition - worldPos.xyz;\n\tV = cameraPosition - worldPos.xyz;\n\tgl_Position = projectionMatrix * viewMatrix * worldPos;\n}",
        fshader: "uniform vec4 HighlightColour;\nuniform vec4 MidColour;\nuniform vec4 ShadowColour;\nuniform float HighlightSize;\nuniform float ShadowSize;\nuniform float OutlineWidth;\nvarying vec3 N;\nvarying vec3 L;\nvarying vec3 V;\nvoid main()\n{\n\tvec3 n = normalize(N);\n\tvec3 l = normalize(L);\n\tvec3 v = normalize(V);\n    float lambert = dot(l,n);\n    vec4 colour = MidColour;\n    if (lambert > 1.0 - HighlightSize) colour = HighlightColour;\n    if (lambert < ShadowSize) colour = ShadowColour;\n    if (dot(n,v) < OutlineWidth) colour = vec4(0.0,0.0,0.0,1.0);\n    gl_FragColor = colour;\n}"
    };
    g.differenceOfGaussians = {
        attributes: {
            vertexPosition: e.POSITION,
            vertexUV0: e.TEXCOORD0
        },
        uniforms: {
            viewMatrix: c.VIEW_MATRIX,
            projectionMatrix: c.PROJECTION_MATRIX,
            worldMatrix: c.WORLD_MATRIX,
            gaussBlurredImage1: "BLUR1",
            gaussBlurredImage2: "BLUR2",
            originalImage: "ORIGINAL",
            threshold: 0.01
        },
        vshader: "attribute vec3 vertexPosition;\nattribute vec2 vertexUV0;\nuniform mat4 viewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 worldMatrix;\nvarying vec2 texCoord0;\nvoid main(void) {\n\ttexCoord0 = vertexUV0;\n\tgl_Position = projectionMatrix * viewMatrix * worldMatrix * vec4(vertexPosition, 1.0);\n}",
        fshader: "uniform sampler2D gaussBlurredImage1;\nuniform sampler2D gaussBlurredImage2;\nuniform sampler2D originalImage;\nuniform float threshold;\nvarying vec2 texCoord0;\nvoid main(void)\n{\n\tvec4 blur1 = texture2D(gaussBlurredImage1, texCoord0);\n\tvec4 blur2 = texture2D(gaussBlurredImage2, texCoord0);\n\tvec4 originalColor = texture2D(originalImage, texCoord0);\n\tvec3 col = clamp(blur1.rgb - blur2.rgb, 0.0, 1.0);\n\tfloat value = (col.r + col.g + col.b) / 3.0;\n\tvalue = step(threshold, value);\n\tvec3 outputColor = mix(originalColor.rgb, vec3(value), value);\n\tgl_FragColor = vec4(outputColor, 1.0);\n}"
    };
    g.downsample = {
        attributes: {
            vertexPosition: e.POSITION,
            vertexUV0: e.TEXCOORD0
        },
        uniforms: {
            viewMatrix: c.VIEW_MATRIX,
            projectionMatrix: c.PROJECTION_MATRIX,
            worldMatrix: c.WORLD_MATRIX,
            tDiffuse: c.DIFFUSE_MAP
        },
        vshader: "attribute vec3 vertexPosition;\nattribute vec2 vertexUV0;\nuniform mat4 viewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 worldMatrix;\nvarying vec2 vUv;\nvoid main() {\nvUv = vertexUV0;\ngl_Position = projectionMatrix * viewMatrix * worldMatrix * vec4( vertexPosition, 1.0 );\n}",
        fshader: "uniform sampler2D tDiffuse;\nvarying vec2 vUv;\nvoid main() {\ngl_FragColor = texture2D( tDiffuse, vUv );\n}"
    };
    g.boxfilter = {
        attributes: {
            vertexPosition: e.POSITION,
            vertexUV0: e.TEXCOORD0
        },
        uniforms: {
            viewMatrix: c.VIEW_MATRIX,
            projectionMatrix: c.PROJECTION_MATRIX,
            worldMatrix: c.WORLD_MATRIX,
            tDiffuse: c.DIFFUSE_MAP,
            viewport: [128, 128]
        },
        vshader: "attribute vec3 vertexPosition;\nattribute vec2 vertexUV0;\nuniform mat4 viewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 worldMatrix;\nvarying vec2 vUv;\nvoid main() {\nvUv = vertexUV0;\ngl_Position = projectionMatrix * viewMatrix * worldMatrix * vec4( vertexPosition, 1.0 );\n}",
        fshader: "uniform sampler2D tDiffuse;\nuniform vec2 viewport;\nvarying vec2 vUv;\nvoid main() {\nvec3 result = vec3(0.0);\nfor(int x=-1; x<=1; x++) {\n\tfor(int y=-1; y<=1; y++) {\n\t\tresult += texture2D(tDiffuse, vUv + vec2(x, y) / viewport).rgb;\n\t}\n}\ngl_FragColor = vec4(result / vec3(9.0), 1.0);\n}"
    };
    g.lightDepth = {
        defines: {
            SHADOW_TYPE: 0
        },
        attributes: {
            vertexPosition: e.POSITION
        },
        uniforms: {
            viewMatrix: c.VIEW_MATRIX,
            projectionMatrix: c.PROJECTION_MATRIX,
            worldMatrix: c.WORLD_MATRIX,
            cameraScale: c.MAIN_DEPTH_SCALE
        },
        vshader: "attribute vec3 vertexPosition;\nuniform mat4 viewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 worldMatrix;\nvarying vec4 worldPosition;\nvoid main(void) {\nworldPosition = viewMatrix * worldMatrix * vec4(vertexPosition, 1.0);\ngl_Position = projectionMatrix * worldPosition;\n}",
        fshader: "#ifndef SHADOW_TYPE\n#define SHADOW_TYPE 0\n#endif\nuniform float cameraScale;\nvarying vec4 worldPosition;\nvoid main(void)\n{\nfloat linearDepth = length(worldPosition) * cameraScale;\n#if SHADOW_TYPE == 0\ngl_FragColor = vec4(linearDepth);\n#elif SHADOW_TYPE == 1\ngl_FragColor = vec4(linearDepth, linearDepth * linearDepth, 0.0, 0.0);\n#endif\n}"
    };
    g.packDepth = {
        attributes: {
            vertexPosition: e.POSITION
        },
        uniforms: {
            viewMatrix: c.VIEW_MATRIX,
            projectionMatrix: c.PROJECTION_MATRIX,
            worldMatrix: c.WORLD_MATRIX,
            farPlane: c.FAR_PLANE
        },
        vshader: "attribute vec3 vertexPosition;\nuniform mat4 viewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 worldMatrix;\nvarying vec4 vPosition;\nvoid main(void) {\n\tvPosition = viewMatrix * worldMatrix * vec4(vertexPosition, 1.0);\n\tgl_Position = projectionMatrix * vPosition;\n}",
        fshader: ["uniform float farPlane;", b.methods.packDepth,
            "varying vec4 vPosition;\nvoid main(void)\n{\n\tfloat linearDepth = min(length(vPosition), farPlane) / farPlane;\n\tgl_FragColor = packDepth(linearDepth);\n}"
        ].join("\n")
    };
    g.pickingShader = {
        defines: {
            WEIGHTS: !0,
            JOINTIDS: !0
        },
        attributes: {
            vertexPosition: e.POSITION,
            vertexJointIDs: e.JOINTIDS,
            vertexWeights: e.WEIGHTS
        },
        uniforms: {
            viewMatrix: c.VIEW_MATRIX,
            projectionMatrix: c.PROJECTION_MATRIX,
            worldMatrix: c.WORLD_MATRIX,
            cameraFar: c.FAR_PLANE,
            id: function (a) {
                return a.renderable.id + 1
            }
        },
        processors: [a.animation.processor],
        vshader: ["attribute vec3 vertexPosition;\nuniform mat4 viewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 worldMatrix;\nuniform float cameraFar;", a.animation.prevertex, "varying float depth;\nvoid main() {\nmat4 wMatrix = worldMatrix;", a.animation.vertex, "vec4 mvPosition = viewMatrix * wMatrix * vec4( vertexPosition, 1.0 );\ndepth = length(mvPosition.xyz) / cameraFar;\ngl_Position = projectionMatrix * mvPosition;\n}"].join("\n"),
        fshader: ["uniform float id;\nvarying float depth;", b.methods.packDepth16,
            "void main() {\nvec2 packedId = vec2(floor(id/255.0), mod(id, 255.0)) * vec2(1.0/255.0);\nvec2 packedDepth = packDepth16(depth);\ngl_FragColor = vec4(packedId, packedDepth);\n}"
        ].join("\n")
    };
    return g
});
define("goo/shapes/Cylinder", ["goo/renderer/MeshData", "goo/util/Enum", "goo/math/Vector3", "goo/math/MathUtils"], function (e, c, b, a) {
    function d(a, b, c) {
        if (arguments.length === 1 && arguments[0] instanceof Object) var g = arguments[0],
        a = g.radialSamples, b = g.radius, c = g.textureMode;
        this.radialSamples = a !== void 0 ? a : 8;
        this.radius = b !== void 0 ? b : 0.5;
        this.textureMode = c !== void 0 ? c : d.TextureModes.Polar;
        this.viewInside = !1;
        g = e.defaultMap([e.POSITION, e.NORMAL, e.TEXCOORD0]);
        e.call(this, g, 2 * (this.radialSamples + 1) + 2, 12 * this.radialSamples);
        this.rebuild()
    }

    function g(a, b, c) {
        a[c * 3 + 0] = a[b * 3 + 0];
        a[c * 3 + 1] = a[b * 3 + 1];
        a[c * 3 + 2] = a[b * 3 + 2]
    }
    d.prototype = Object.create(e.prototype);
    d.prototype.rebuild = function () {
        for (var c = this.getAttributeBuffer(e.POSITION), i = this.getAttributeBuffer(e.NORMAL), h = this.getAttributeBuffer(e.TEXCOORD0), k = this.getIndexBuffer(), j = 1 / this.radialSamples, l = 2 / 3, m = [], o = [], p = 0; p < this.radialSamples; p++) {
            var n = a.TWO_PI * j * p;
            o[p] = Math.cos(n);
            m[p] = Math.sin(n)
        }
        m[this.radialSamples] = m[0];
        o[this.radialSamples] = o[0];
        for (var n = 0, s = new b, r = new b,
                u = new b, q = 1; q < 3; q++) {
            var x = a.HALF_PI * (-1 + l * q),
                t = Math.sin(x),
                p = this.radius * t,
                w = r.set(0, 0, 0);
            w.z = q - 1.5;
            for (var z = Math.sqrt(Math.abs(this.radius * this.radius - p * p)), v, A = n, p = 0; p < this.radialSamples; p++) {
                var y = p * j;
                v = u.set(o[p], m[p], 0);
                b.mul(v, z, s);
                c[n * 3 + 0] = w.x + s.x;
                c[n * 3 + 1] = w.y + s.y;
                c[n * 3 + 2] = w.z + s.z;
                v = s.set(c[n * 3 + 0], c[n * 3 + 1], c[n * 3 + 2]);
                v.normalize();
                this.viewInside ? (i[n * 3 + 0] = -v.x, i[n * 3 + 1] = -v.y, i[n * 3 + 2] = -v.z) : (i[n * 3 + 0] = v.x, i[n * 3 + 1] = v.y, i[n * 3 + 2] = v.z);
                this.textureMode === d.TextureModes.Linear ? (h[n * 2 + 0] = y, h[n * 2 +
                    1] = 0.5 * (t + 1)) : this.textureMode === d.TextureModes.Projected ? (h[n * 2 + 0] = y, h[n * 2 + 1] = a.HALF_PI + Math.asin(t) / Math.PI) : this.textureMode === d.TextureModes.Polar && (y = (a.HALF_PI - Math.abs(x)) / Math.PI, v = y * m[p] + 0.5, h[n * 2 + 0] = y * o[p] + 0.5, h[n * 2 + 1] = v);
                n++
            }
            g(c, A, n);
            g(i, A, n);
            this.textureMode === d.TextureModes.Linear ? (h[n * 2 + 0] = 1, h[n * 2 + 1] = 0.5 * (t + 1)) : this.textureMode === d.TextureModes.Projected ? (h[n * 2 + 0] = 1, h[n * 2 + 1] = a.INV_PI * (a.HALF_PI + Math.asin(t))) : this.textureMode === d.TextureModes.Polar && (y = (a.HALF_PI - Math.abs(x)) / Math.PI,
                h[n * 2 + 0] = y + 0.5, h[n * 2 + 1] = 0.5);
            n++
        }
        c[n * 3 + 0] = 0;
        c[n * 3 + 1] = 0;
        c[n * 3 + 2] = -0.5;
        this.viewInside ? (i[n * 3 + 0] = 0, i[n * 3 + 1] = 0, i[n * 3 + 2] = 1) : (i[n * 3 + 0] = 0, i[n * 3 + 1] = 0, i[n * 3 + 2] = -1);
        this.textureMode === d.TextureModes.Polar ? (h[n * 2 + 0] = 0.5, h[n * 2 + 1] = 0.5) : (h[n * 2 + 0] = 0.5, h[n * 2 + 1] = 0);
        n++;
        c[n * 3 + 0] = 0;
        c[n * 3 + 1] = 0;
        c[n * 3 + 2] = 0.5;
        this.viewInside ? (i[n * 3 + 0] = 0, i[n * 3 + 1] = 0, i[n * 3 + 2] = -1) : (i[n * 3 + 0] = 0, i[n * 3 + 1] = 0, i[n * 3 + 2] = 1);
        this.textureMode === d.TextureModes.Polar ? (h[n * 2 + 0] = 0.5, h[n * 2 + 1] = 0.5) : (h[n * 2 + 0] = 0.5, h[n * 2 + 1] = 1);
        i = n = c = 0;
        h = i + 1;
        n += this.radialSamples +
            1;
        j = n;
        l = j + 1;
        for (n = 0; n < this.radialSamples; n++) this.viewInside ? (k[c++] = i++, k[c++] = j, k[c++] = h, k[c++] = h++, k[c++] = j++, k[c++] = l++) : (k[c++] = i++, k[c++] = h, k[c++] = j, k[c++] = h++, k[c++] = l++, k[c++] = j++);
        for (n = 0; n < this.radialSamples; n++) this.viewInside ? (k[c++] = n, k[c++] = n + 1, k[c++] = this.vertexCount - 2) : (k[c++] = n, k[c++] = this.vertexCount - 2, k[c++] = n + 1);
        i = this.radialSamples + 1;
        for (n = 0; n < this.radialSamples; n++) this.viewInside ? (k[c++] = n + i, k[c++] = this.vertexCount - 1, k[c++] = n + 1 + i) : (k[c++] = n + i, k[c++] = n + 1 + i, k[c++] = this.vertexCount -
            1);
        return this
    };
    d.TextureModes = new c("Linear", "Projected", "Polar");
    return d
});
define("goo/shapes/Torus", ["goo/renderer/MeshData", "goo/math/Vector3", "goo/math/MathUtils"], function (e, c, b) {
    function a(a, b, c, d) {
        if (arguments.length === 1 && arguments[0] instanceof Object) var k = arguments[0],
        a = k.circleSamples, b = k.radialSamples, c = k.tubeRadius, d = k.centerRadius;
        this._circleSamples = a !== void 0 ? a : 8;
        this._radialSamples = b !== void 0 ? b : 8;
        this._tubeRadius = c !== void 0 ? c : 1;
        this._centerRadius = d !== void 0 ? d : 2;
        this.viewInside = !1;
        k = e.defaultMap([e.POSITION, e.NORMAL, e.TEXCOORD0]);
        e.call(this, k, (this._circleSamples +
            1) * (this._radialSamples + 1), 6 * this._circleSamples * this._radialSamples);
        this.rebuild()
    }

    function d(a, b, c) {
        a[c * 3 + 0] = a[b * 3 + 0];
        a[c * 3 + 1] = a[b * 3 + 1];
        a[c * 3 + 2] = a[b * 3 + 2]
    }
    a.prototype = Object.create(e.prototype);
    a.prototype.rebuild = function () {
        for (var a = this.getAttributeBuffer(e.POSITION), f = this.getAttributeBuffer(e.NORMAL), i = this.getAttributeBuffer(e.TEXCOORD0), h = this.getIndexBuffer(), k = 1 / this._circleSamples, j = 1 / this._radialSamples, l = 0, m = new c, o = new c, p = new c, n = 0; n < this._circleSamples; n++) {
            var s = n * k,
                r = b.TWO_PI * s,
                u = Math.cos(r),
                r = Math.sin(r);
            m.set(u, r, 0);
            c.mul(m, this._centerRadius, o);
            u = l;
            for (r = 0; r < this._radialSamples; r++) {
                var q = r * j,
                    x = b.TWO_PI * q,
                    t = Math.cos(x),
                    x = Math.sin(x);
                p.copy(m).mul(t);
                p.z += x;
                p.normalize();
                this.viewInside ? (f[l * 3 + 0] = -p.x, f[l * 3 + 1] = -p.y, f[l * 3 + 2] = -p.z) : (f[l * 3 + 0] = p.x, f[l * 3 + 1] = p.y, f[l * 3 + 2] = p.z);
                p.mul(this._tubeRadius).add(o);
                a[l * 3 + 0] = p.x;
                a[l * 3 + 1] = p.y;
                a[l * 3 + 2] = p.z;
                i[l * 2 + 0] = q;
                i[l * 2 + 1] = s;
                l++
            }
            d(a, u, l);
            d(f, u, l);
            i[l * 2 + 0] = 1;
            i[l * 2 + 1] = s;
            l++
        }
        for (n = 0; n <= this._radialSamples; n++, l++) d(a, n, l), d(f, n, l), k = i,
        j = n, m = l, k[m * 2 + 0] = k[j * 2 + 0], k[m * 2 + 1] = k[j * 2 + 1], i[l * 2 + 1] = 1;
        for (n = f = a = 0; n < this._circleSamples; n++) {
            i = f;
            k = i + 1;
            f += this._radialSamples + 1;
            j = f;
            m = j + 1;
            for (l = 0; l < this._radialSamples; l++) this.viewInside ? (h[a++] = i++, h[a++] = k, h[a++] = j, h[a++] = k++, h[a++] = m++, h[a++] = j++) : (h[a++] = i++, h[a++] = j, h[a++] = k, h[a++] = k++, h[a++] = j++, h[a++] = m++)
        }
        return this
    };
    return a
});
define("goo/shapes/ShapeCreator", ["goo/shapes/Box", "goo/shapes/Quad", "goo/shapes/Sphere", "goo/shapes/Cylinder", "goo/shapes/Torus"], function (e, c, b, a, d) {
    function g() {}
    g.createQuad = function (a, b, d, g) {
        return new c(a, b, d, g)
    };
    g.createBox = function (a, b, c, d, g) {
        return new e(a, b, c, d, g)
    };
    g.createSphere = function (a, c, d, g) {
        return new b(a, c, d, g)
    };
    g.createCylinder = function (b, c, d) {
        return new a(b, c, d)
    };
    g.createTorus = function (a, b, c, g) {
        return new d(a, b, c, g)
    };
    return g
});
define("goo/util/Handy", [], function () {
    function e() {}
    e.deepFreeze = function (c) {
        var b, a;
        Object.freeze(c);
        for (a in c) b = c[a], c.hasOwnProperty(a) && !(typeof b !== "object" || Object.isFrozen(b)) && e.deepFreeze(b)
    };
    e.defineProperty = function (c, b, a, d) {
        var g = a;
        Object.defineProperty(c, b, {
            get: function () {
                return g
            },
            set: function (a) {
                g = a;
                d(g)
            },
            configurable: !0,
            enumerable: !0
        })
    };
    e.addListener = function (c, b, a, d) {
        var g = c[b];
        Object.defineProperty(c, b, {
            get: function () {
                a && a();
                return g
            },
            set: function (a) {
                g = a;
                d && d(g)
            },
            configurable: !0,
            enumerable: !0
        })
    };
    return e
});
define("goo/math/Plane", ["goo/math/Vector3"], function (e) {
    function c(a, b) {
        this.normal = a !== void 0 ? new e(a) : new e(e.UNIT_Y);
        this.constant = isNaN(b) ? 0 : b
    }
    c.XZ = new c(e.UNIT_Y, 0);
    c.XY = new c(e.UNIT_Z, 0);
    c.YZ = new c(e.UNIT_X, 0);
    c.prototype.pseudoDistance = function (a) {
        return this.normal.dot(a) - this.constant
    };
    c.prototype.setPlanePoints = function (a, b, c) {
        this.normal.set(b).subtractLocal(a);
        this.normal.crossLocal(c.x - a.x, c.y - a.y, c.z - a.z).normalizeLocal();
        this.constant = this.normal.dot(a);
        return this
    };
    c.prototype.reflectVector =
        function (a, b) {
            var c = b;
            c === null && (c = new e);
            var f = this.normal.dot(a) * 2;
            c.set(a).subtractLocal(this.normal.x * f, this.normal.y * f, this.normal.z * f);
            return c
    };
    var b = new e;
    c.prototype.rayIntersect = function (a, c) {
        var c = c || new e,
            g = a.direction.dot(this.normal);
        if (Math.abs(g) < 1.0E-8) return console.warn("Ray parallell with plane"), null;
        var f = this.constant,
            g = b.set(this.normal).muld(f, f, f).subv(a.origin).dot(this.normal) / g;
        return c.setv(a.direction).muld(g, g, g).addv(a.origin)
    };
    return c
});
define("goo/math/Ray", ["goo/math/Vector3", "goo/math/MathUtils"], function (e, c) {
    function b(a, b) {
        this.origin = a || new e;
        this.direction = b || (new e).copy(e.UNIT_Z);
        this.calcVec1 = new e;
        this.calcVec2 = new e;
        this.calcVec3 = new e;
        this.calcVec4 = new e
    }
    b.prototype.intersects = function (a, b, c) {
        if (a.length === 3) return this.intersectsTriangle(a[0], a[1], a[2], b, c);
        else if (a.length === 4) return this.intersectsTriangle(a[0], a[1], a[2], b, c) || this.intersectsTriangle(a[0], a[2], a[3], b, c);
        return !1
    };
    b.prototype.intersectsTriangle = function (a,
        b, g, f, i) {
        var h = this.calcVec1.set(this.origin).sub(a),
            b = this.calcVec2.set(b).sub(a),
            a = this.calcVec3.set(g).sub(a),
            k = this.calcVec4.set(b).cross(a),
            g = this.direction.dot(k),
            j;
        if (g > c.EPSILON) j = 1;
        else if (g < -c.EPSILON) j = -1, g = -g;
        else return !1;
        var a = j * this.direction.dot(e.cross(h, a, a)),
            l = !1;
        if (a >= 0 && (b = j * this.direction.dot(b.cross(h)), b >= 0 && a + b <= g && (h = -j * h.dot(k), h >= 0))) {
            if (!i) return !0;
            g = 1 / g;
            h *= g;
            f ? i.setd(h, a * g, b * g) : i.setv(this.origin).add_d(this.direction.x * h, this.direction.y * h, this.direction.z * h);
            l = !0
        }
        return l
    };
    b.prototype.getDistanceToPrimitive = function (a) {
        var b = this.calcVec1;
        return this.intersects(a, !1, b) ? this.origin.distance(b.x, b.y, b.z) : Infinity
    };
    b.prototype.intersectsPlane = function (a, b) {
        var c = a.normal,
            f = c.dot(this.direction);
        if (Math.abs(f) < 1.0E-5) return !1;
        c = (-c.dot(this.origin) + a.constant) / f;
        if (c < 1.0E-5) return !1;
        b !== null && b.set(this.direction).multiplyLocal(c).addLocal(this.origin);
        return !0
    };
    b.prototype.distanceSquared = function (a, b) {
        var c = this.calcVec1;
        c.set(a).subtractLocal(this.origin);
        var f = this.direction.dot(c);
        f > 0 ? (c.set(this.direction).multiplyLocal(f), c.addLocal(this.origin)) : c.set(this.origin);
        b !== null && b.set(c);
        a.subtract(c, c);
        return c.lengthSquared()
    };
    return b
});
define("goo/renderer/Camera", "goo/util/Handy,goo/math/Vector3,goo/math/Vector4,goo/math/Matrix4x4,goo/math/Plane,goo/math/MathUtils,goo/math/Ray,goo/renderer/bounds/BoundingBox,goo/renderer/bounds/BoundingSphere,goo/renderer/bounds/BoundingVolume".split(","), function (e, c, b, a, d, g, f, i, h, k) {
    function j(f, g, h, i) {
        this.translation = new c(0, 0, 0);
        this._left = new c(-1, 0, 0);
        this._up = new c(0, 1, 0);
        this._direction = new c(0, 0, -1);
        e.defineProperty(this, "this._depthRangeNear", 0, function () {
            this._depthRangeDirty = !0
        });
        e.defineProperty(this, "this._depthRangeFar", 1, function () {
            this._depthRangeDirty = !0
        });
        this._depthRangeDirty = !0;
        this._frustumNear = 1;
        this._frustumFar = 2;
        this._frustumLeft = -0.5;
        this._frustumTop = this._frustumRight = 0.5;
        this._frustumBottom = -0.5;
        this._coeffLeft = [];
        this._coeffRight = [];
        this._coeffBottom = [];
        this._coeffTop = [];
        this._viewPortLeft = 0;
        this._viewPortTop = this._viewPortRight = 1;
        this._viewPortBottom = 0;
        this._planeQuantity = 6;
        this._worldPlane = [];
        for (var k = 0; k < j.FRUSTUM_PLANES; k++) this._worldPlane[k] = new d;
        this._newDirection = new c;
        this.projectionMode = j.Perspective;
        this._updateInverseMVPMatrix = this._updateMVPMatrix = this._updatePMatrix = this._updateInverseMVMatrix = this._updateMVMatrix = !0;
        this.modelView = new a;
        this.modelViewInverse = new a;
        this.projection = new a;
        this.modelViewProjection = new a;
        this.modelViewProjectionInverse = new a;
        this._viewPortDirty = this._depthRangeDirty = !0;
        this._planeState = 0;
        this._clipPlane = new b;
        this._qCalc = new b;
        this._corners = [];
        for (k = 0; k < 8; k++) this._corners.push(new c);
        this._extents = new c;
        this.vNearPlaneCenter = new c;
        this.vFarPlaneCenter = new c;
        this.direction = new c;
        this.left = new c;
        this.up = new c;
        this.planeNormal = new c;
        this.changedProperties = !0;
        this.setFrustumPerspective(f, g, h, i);
        this.onFrameChange()
    }
    j.LEFT_PLANE = 0;
    j.RIGHT_PLANE = 1;
    j.BOTTOM_PLANE = 2;
    j.TOP_PLANE = 3;
    j.FAR_PLANE = 4;
    j.NEAR_PLANE = 5;
    j.FRUSTUM_PLANES = 6;
    j.Perspective = 0;
    j.Parallel = 1;
    j.Custom = 2;
    j.Outside = 0;
    j.Inside = 1;
    j.Intersects = 2;
    j.prototype.normalize = function () {
        this._left.normalize();
        this._up.normalize();
        this._direction.normalize();
        this.onFrameChange()
    };
    j.prototype.setFrustumPerspective = function (a, b, c, d) {
        if (a !== void 0 && a !== null) this.fov = a;
        if (b !== void 0 && b !== null) this.aspect = b;
        if (c !== void 0 && c !== null) this.near = c;
        if (d !== void 0 && d !== null) this.far = d;
        if (this.fov !== void 0) a = Math.tan(this.fov * g.DEG_TO_RAD * 0.5) * this.near, b = a * this.aspect, this._frustumLeft = -b, this._frustumRight = b, this._frustumBottom = -a, this._frustumTop = a, this._frustumNear = this.near, this._frustumFar = this.far, this.onFrustumChange()
    };
    j.prototype.setFrustum = function (a, b,
        c, d, f, g) {
        if (a !== void 0 && a !== null) {
            if (c !== void 0 && c !== null) {
                if (b !== void 0 && b !== null) this.far = this._frustumFar = b;
                this.near = this._frustumNear = a;
            } else {
                var half;
                if (a != 0) {
                    half = (this._frustumTop - this._frustumBottom)*(this.aspect)/2;
                    this._frustumRight = half;
                    this._frustumLeft = -half;
                } else {
                    half = (this._frustumRight - this._frustumLeft)/(this.aspect*2);
                    this._frustumTop = half;
                    this._frustumBottom = -half;
                    half = (this._frustumTop - this._frustumBottom)*(this.aspect)/2;
                    this._frustumRight = half;
                    this._frustumLeft = -half;
                }
            }
        } 
        
        if (c !== void 0 && c !== null) this._frustumLeft = c;
        if (d !== void 0 && d !== null) this._frustumRight = d;
        if (f !== void 0 && f !== null) this._frustumTop = f;
        if (g !== void 0 && g !== null) this._frustumBottom = g;
        this.onFrustumChange()
    };
    j.prototype.copy = function (a) {
        this.translation.setv(a.translation);
        this._left.setv(a._left);
        this._up.setv(a._up);
        this._direction.setv(a._direction);
        this.fov = a.fov;
        this.aspect = a.aspect;
        this.near = a.near;
        this.far = a.far;
        this._frustumLeft = a._frustumLeft;
        this._frustumRight = a._frustumRight;
        this._frustumBottom = a._frustumBottom;
        this._frustumTop =
            a._frustumTop;
        this._frustumNear = a._frustumNear;
        this._frustumFar = a._frustumFar;
        this.projectionMode = a.projectionMode;
        this._depthRangeDirty = !0;
        this.onFrustumChange();
        this.onFrameChange()
    };
    j.prototype.setFrame = function (a, b, c, d) {
        this._left.copy(b);
        this._up.copy(c);
        this._direction.copy(d);
        this.translation.copy(a);
        this.onFrameChange()
    };
    j.prototype.lookAt = function (a, b) {
        this._newDirection.copy(a).sub(this.translation).normalize();
        this._newDirection.equals(this._direction) || (this._direction.copy(this._newDirection),
            this._up.copy(b).normalize(), this._up.equals(c.ZERO) && this._up.copy(c.UNIT_Y), this._left.copy(this._up).cross(this._direction).normalize(), this._left.equals(c.ZERO) && (this._direction.x !== 0 ? this._left.set(this._direction.y, -this._direction.x, 0) : this._left.set(0, this._direction.z, -this._direction.y)), this._up.copy(this._direction).cross(this._left).normalize(), this.onFrameChange())
    };
    j.prototype.makeDirty = function () {
        this._viewPortDirty = this._depthRangeDirty = !0
    };
    j.prototype.update = function () {
        this._depthRangeDirty = !0;
        this.onFrustumChange();
        this.onFrameChange()
    };
    j.prototype.setViewPort = function () {
        console.warn("Camera.setViewPort() not implemented.")
    };
    j.prototype.contains = function (a) {
        if (!a) return j.Inside;
        for (var b = j.Inside, c = j.FRUSTUM_PLANES - 1; c >= 0; c--) switch (a.whichSide(this._worldPlane[c])) {
        case k.Inside:
            return j.Outside;
        case k.Intersects:
            b = j.Intersects
        }
        return b
    };
    j.prototype.onFrustumChange = function () {
        if (this.projectionMode === j.Perspective) {
            var a = this._frustumNear * this._frustumNear,
                b = this._frustumRight * this._frustumRight,
                c = this._frustumBottom * this._frustumBottom,
                d = this._frustumTop * this._frustumTop,
                f = 1 / Math.sqrt(a + this._frustumLeft * this._frustumLeft);
            this._coeffLeft[0] = this._frustumNear * f;
            this._coeffLeft[1] = -this._frustumLeft * f;
            f = 1 / Math.sqrt(a + b);
            this._coeffRight[0] = -this._frustumNear * f;
            this._coeffRight[1] = this._frustumRight * f;
            f = 1 / Math.sqrt(a + c);
            this._coeffBottom[0] = this._frustumNear * f;
            this._coeffBottom[1] = -this._frustumBottom * f;
            f = 1 / Math.sqrt(a + d);
            this._coeffTop[0] = -this._frustumNear * f;
            this._coeffTop[1] = this._frustumTop *
                f
        } else this.projectionMode === j.Parallel &&
        	(
        	this._frustumRight > this._frustumLeft ? 
        		(this._coeffLeft[0] = -1, this._coeffLeft[1] = 0, this._coeffRight[0] = 1) 
        	   :(this._coeffLeft[0] = 1, this._coeffLeft[1] = 0, this._coeffRight[0] = -1)
	        , this._coeffRight[1] = 0
	        , this._frustumTop > this._frustumBottom ? 
        		 (this._coeffBottom[0] = -1, this._coeffBottom[1] = 0, this._coeffTop[0] = 1) 
        	   : (this._coeffBottom[0] = 1, this._coeffBottom[1] = 0, this._coeffTop[0] = -1)
	        , this._coeffTop[1] = 0
        	);
        this.changedProperties = this._updateInverseMVPMatrix = this._updateInverseMVMatrix =
            this._updateMVPMatrix = this._updatePMatrix = !0
    };
    j.prototype.onFrameChange = function () {
        var a = this._direction.dot(this.translation),
            b = this.planeNormal;
        b.x = this._left.x * this._coeffLeft[0];
        b.y = this._left.y * this._coeffLeft[0];
        b.z = this._left.z * this._coeffLeft[0];
        b.add([this._direction.x * this._coeffLeft[1], this._direction.y * this._coeffLeft[1], this._direction.z * this._coeffLeft[1]]);
        this._worldPlane[j.LEFT_PLANE].normal.copy(b);
        this._worldPlane[j.LEFT_PLANE].constant = this.translation.dot(b);
        b.x = this._left.x *
            this._coeffRight[0];
        b.y = this._left.y * this._coeffRight[0];
        b.z = this._left.z * this._coeffRight[0];
        b.add([this._direction.x * this._coeffRight[1], this._direction.y * this._coeffRight[1], this._direction.z * this._coeffRight[1]]);
        this._worldPlane[j.RIGHT_PLANE].normal.copy(b);
        this._worldPlane[j.RIGHT_PLANE].constant = this.translation.dot(b);
        b.x = this._up.x * this._coeffBottom[0];
        b.y = this._up.y * this._coeffBottom[0];
        b.z = this._up.z * this._coeffBottom[0];
        b.add([this._direction.x * this._coeffBottom[1], this._direction.y *
            this._coeffBottom[1], this._direction.z * this._coeffBottom[1]
        ]);
        this._worldPlane[j.BOTTOM_PLANE].normal.copy(b);
        this._worldPlane[j.BOTTOM_PLANE].constant = this.translation.dot(b);
        b.x = this._up.x * this._coeffTop[0];
        b.y = this._up.y * this._coeffTop[0];
        b.z = this._up.z * this._coeffTop[0];
        b.add([this._direction.x * this._coeffTop[1], this._direction.y * this._coeffTop[1], this._direction.z * this._coeffTop[1]]);
        this._worldPlane[j.TOP_PLANE].normal.copy(b);
        this._worldPlane[j.TOP_PLANE].constant = this.translation.dot(b);
        if (this.projectionMode ===
            j.Parallel) this._frustumRight > this._frustumLeft ? (this._worldPlane[j.LEFT_PLANE].constant = this._worldPlane[j.LEFT_PLANE].contant + this._frustumLeft, this._worldPlane[j.RIGHT_PLANE].constant = this._worldPlane[j.RIGHT_PLANE].contant - this._frustumRight) : (this._worldPlane[j.LEFT_PLANE].constant = this._worldPlane[j.LEFT_PLANE].contant - this._frustumLeft, this._worldPlane[j.RIGHT_PLANE].constant = this._worldPlane[j.RIGHT_PLANE].contant + this._frustumRight), this._frustumBottom > this._frustumTop ? (this._worldPlane[j.TOP_PLANE].constant =
            this._worldPlane[j.TOP_PLANE].contant + this._frustumTop, this._worldPlane[j.BOTTOM_PLANE].constant = this._worldPlane[j.BOTTOM_PLANE].contant - this._frustumBottom) : (this._worldPlane[j.TOP_PLANE].constant = this._worldPlane[j.TOP_PLANE].contant - this._frustumTop, this._worldPlane[j.BOTTOM_PLANE].constant = this._worldPlane[j.BOTTOM_PLANE].contant + this._frustumBottom);
        b.copy(this._direction).invert();
        this._worldPlane[j.FAR_PLANE].normal.copy(b);
        this._worldPlane[j.FAR_PLANE].constant = -(a + this._frustumFar);
        this._worldPlane[j.NEAR_PLANE].normal.copy(this._direction);
        this._worldPlane[j.NEAR_PLANE].constant = a + this._frustumNear;
        this._updateInverseMVPMatrix = this._updateInverseMVMatrix = this._updateMVPMatrix = this._updateMVMatrix = !0
    };
    j.prototype.updateProjectionMatrix = function () {
        if (this.projectionMode === j.Parallel) {
            this.projection.setIdentity();
            var a = this.projection.data;
            a[0] = 2 / (this._frustumRight - this._frustumLeft);
            a[5] = 2 / (this._frustumTop - this._frustumBottom);
            a[10] = -2 / (this._frustumFar - this._frustumNear);
            a[12] = -(this._frustumRight + this._frustumLeft) / (this._frustumRight -
                this._frustumLeft);
            a[13] = -(this._frustumTop + this._frustumBottom) / (this._frustumTop - this._frustumBottom);
            a[14] = -(this._frustumFar + this._frustumNear) / (this._frustumFar - this._frustumNear)
        } else if (this.projectionMode === j.Perspective) this.projection.setIdentity(), a = this.projection.data, a[0] = 2 * this._frustumNear / (this._frustumRight - this._frustumLeft), a[5] = 2 * this._frustumNear / (this._frustumTop - this._frustumBottom), a[8] = (this._frustumRight + this._frustumLeft) / (this._frustumRight - this._frustumLeft), a[9] = (this._frustumTop +
            this._frustumBottom) / (this._frustumTop - this._frustumBottom), a[10] = -(this._frustumFar + this._frustumNear) / (this._frustumFar - this._frustumNear), a[11] = -1, a[14] = -(2 * this._frustumFar * this._frustumNear) / (this._frustumFar - this._frustumNear), a[15] = 0
    };
    j.prototype.updateModelViewMatrix = function () {
        this.modelView.setIdentity();
        var a = this.modelView.data;
        a[0] = -this._left.x;
        a[4] = -this._left.y;
        a[8] = -this._left.z;
        a[1] = this._up.x;
        a[5] = this._up.y;
        a[9] = this._up.z;
        a[2] = -this._direction.x;
        a[6] = -this._direction.y;
        a[10] = -this._direction.z;
        a[12] = this._left.dot(this.translation);
        a[13] = -this._up.dot(this.translation);
        a[14] = this._direction.dot(this.translation)
    };
    j.prototype.getPickRay = function (a, b, d, g, e) {
        e || (e = new f);
        var h = new c,
            i = new c;
        this.getWorldCoordinates(a, g - b, d, g, 0, h);
        this.getWorldCoordinates(a, g - b, d, g, 0.3, i).sub(h).normalize();
        e.origin.copy(h);
        e.direction.copy(i);
        return e
    };
    j.prototype.getWorldCoordinates = function (a, d, f, g, e, h) {
        h || (h = new c);
        this.checkInverseModelViewProjection();
        var i = new b;
        i.set((a / f - this._viewPortLeft) /
            (this._viewPortRight - this._viewPortLeft) * 2 - 1, (d / g - this._viewPortBottom) / (this._viewPortTop - this._viewPortBottom) * 2 - 1, e * 2 - 1, 1);
        this.modelViewProjectionInverse.applyPost(i);
        i.mul(1 / i.w);
        h.x = i.x;
        h.y = i.y;
        h.z = i.z;
        return h
    };
    j.prototype.getScreenCoordinates = function (a, b, c, d) {
        d = this.getNormalizedDeviceCoordinates(a, d);
        d.x = (d.x + 1) * (this._viewPortRight - this._viewPortLeft) / 2 * b;
        d.y = (d.y + 1) * (this._viewPortTop - this._viewPortBottom) / 2 * c;
        d.z = (d.z + 1) / 2;
        return d
    };
    j.prototype.getFrustumCoordinates = function (a, b) {
        b = this.getNormalizedDeviceCoordinates(a,
            b);
        b.x = (b.x + 1) * (this._frustumRight - this._frustumLeft) / 2 + this._frustumLeft;
        b.y = (b.y + 1) * (this._frustumTop - this._frustumBottom) / 2 + this._frustumBottom;
        b.z = (b.z + 1) * (this._frustumFar - this._frustumNear) / 2 + this._frustumNear;
        return b
    };
    j.prototype.getNormalizedDeviceCoordinates = function (a, d) {
        d || (d = new c);
        this.checkModelViewProjection();
        var f = new b;
        f.set(a.x, a.y, a.z, 1);
        this.modelViewProjection.applyPost(f);
        f.mul(1 / f.w);
        d.x = f.x;
        d.y = f.y;
        d.z = f.z;
        return d
    };
    j.prototype.checkModelView = function () {
        if (this._updateMVMatrix) this.updateModelViewMatrix(),
        this._updateMVMatrix = !1
    };
    j.prototype.checkProjection = function () {
        if (this._updatePMatrix) this.updateProjectionMatrix(), this._updatePMatrix = !1
    };
    j.prototype.checkModelViewProjection = function () {
        if (this._updateMVPMatrix) this.checkModelView(), this.checkProjection(), this.modelViewProjection.copy(this.getProjectionMatrix()).combine(this.getViewMatrix()), this._updateMVPMatrix = !1
    };
    j.prototype.checkInverseModelView = function () {
        if (this._updateInverseMVMatrix) this.checkModelView(), a.invert(this.modelView, this.modelViewInverse),
        this._updateInverseMVMatrix = !1
    };
    j.prototype.checkInverseModelViewProjection = function () {
        if (this._updateInverseMVPMatrix) this.checkModelViewProjection(), a.invert(this.modelViewProjection, this.modelViewProjectionInverse), this._updateInverseMVPMatrix = !1
    };
    j.prototype.getViewMatrix = function () {
        this.checkModelView();
        return this.modelView
    };
    j.prototype.getProjectionMatrix = function () {
        this.checkProjection();
        return this.projection
    };
    j.prototype.getViewProjectionMatrix = function () {
        this.checkModelViewProjection();
        return this.modelViewProjection
    };
    j.prototype.getViewInverseMatrix = function () {
        this.checkInverseModelView();
        return this.modelViewInverse
    };
    j.prototype.getViewProjectionInverseMatrix = function () {
        this.checkInverseModelViewProjection();
        return this.modelViewProjectionInverse
    };
    j.prototype.pack = function (a) {
        for (var c = a.center, d = this._corners, f = this._extents, g = 0; g < d.length; g++) d[g].set(c);
        a instanceof i ? f.setd(a.xExtent, a.yExtent, a.zExtent) : a instanceof h && f.setd(a.radius, a.radius, a.radius);
        d[0].add_d(f.x, f.y,
            f.z);
        d[1].add_d(f.x, -f.y, f.z);
        d[2].add_d(f.x, f.y, -f.z);
        d[3].add_d(f.x, -f.y, -f.z);
        d[4].add_d(-f.x, f.y, f.z);
        d[5].add_d(-f.x, -f.y, f.z);
        d[6].add_d(-f.x, f.y, -f.z);
        d[7].add_d(-f.x, -f.y, -f.z);
        for (var f = this.getViewMatrix(), a = Number.MAX_VALUE, c = -Number.MAX_VALUE, e = new b, g = 0; g < d.length; g++) e.setd(d[g].x, d[g].y, d[g].z, 1), f.applyPre(e), a = Math.min(-e.z, a), c = Math.max(-e.z, c);
        a = Math.min(Math.max(this._frustumNear, a), this._frustumFar);
        c = Math.max(a, Math.min(this._frustumFar, c));
        d = a / this._frustumNear;
        this._frustumLeft *=
            d;
        this._frustumRight *= d;
        this._frustumTop *= d;
        this._frustumBottom *= d;
        this._frustumNear = a;
        this._frustumFar = c
    };
    j.prototype.calculateFrustumCorners = function (a, b) {
        var a = a !== void 0 ? a : this._frustumNear,
            b = b !== void 0 ? b : this._frustumFar,
            c = (this._frustumTop - this._frustumBottom) * a * 0.5 / this._frustumNear,
            d = (this._frustumRight - this._frustumLeft) * a * 0.5 / this._frustumNear,
            f = (this._frustumTop - this._frustumBottom) * b * 0.5 / this._frustumNear,
            g = (this._frustumRight - this._frustumLeft) * b * 0.5 / this._frustumNear;
        this.projectionMode ===
            j.Parallel && (c = (this._frustumTop - this._frustumBottom) * 0.5, d = (this._frustumRight - this._frustumLeft) * 0.5, f = (this._frustumTop - this._frustumBottom) * 0.5, g = (this._frustumRight - this._frustumLeft) * 0.5);
        var e = this.vNearPlaneCenter,
            h = this.vFarPlaneCenter,
            i = this.direction,
            k = this.left,
            l = this.up;
        i.setv(this._direction).mul(a);
        e.setv(this.translation).addv(i);
        i.setv(this._direction).mul(b);
        h.setv(this.translation).addv(i);
        k.setv(this._left).mul(d);
        l.setv(this._up).mul(c);
        this._corners[0].setv(e).subv(k).subv(l);
        this._corners[1].setv(e).addv(k).subv(l);
        this._corners[2].setv(e).addv(k).addv(l);
        this._corners[3].setv(e).subv(k).addv(l);
        k.setv(this._left).mul(g);
        l.setv(this._up).mul(f);
        this._corners[4].setv(h).subv(k).subv(l);
        this._corners[5].setv(h).addv(k).subv(l);
        this._corners[6].setv(h).addv(k).addv(l);
        this._corners[7].setv(h).subv(k).addv(l);
        return this._corners
    };
    var l = function (a) {
        if (a > 0) return 1;
        else if (a < 0) return -1;
        return 0
    };
    j.prototype.setToObliqueMatrix = function (a, c) {
        var c = c || 0,
            d = this._clipPlane.setv(a);
        this.getViewMatrix().applyPost(d);
        d.w = this.translation.y * a.y + c;
        this._updatePMatrix = !0;
        var f = this.getProjectionMatrix();
        this._qCalc.setd((l(d.x) + f[8]) / f[0], (l(d.y) + f[9]) / f[5], -1, (1 + f[10]) / f[14]);
        d.mul(2 / b.dot(d, this._qCalc));
        f[2] = d.x;
        f[6] = d.y;
        f[10] = d.z + 1;
        f[14] = d.w;
        this._updateInverseMVPMatrix = this._updateMVPMatrix = !0
    };
    return j
});
define("goo/renderer/pass/FullscreenUtil", ["goo/shapes/ShapeCreator", "goo/renderer/Camera", "goo/math/Vector3"], function (e, c, b) {
    function a() {}
    var d = new c;
    d.projectionMode = c.Parallel;
    d.setFrustum(-1, 1, -1, 1, 1, -1);
    d._left.copy(b.UNIT_X).invert();
    d._up.copy(b.UNIT_Y);
    d._direction.copy(b.UNIT_Z);
    d.onFrameChange();
    a.camera = d;
    a.quad = e.createQuad(2, 2);
    return a
});
define("goo/renderer/pass/FullscreenPass", ["goo/renderer/Material", "goo/renderer/pass/FullscreenUtil", "goo/renderer/shaders/ShaderLib"], function (e, c, b) {
    function a(a) {
        this.material = e.createMaterial(a || b.simple);
        this.useReadBuffer = !0;
        this.renderToScreen = !1;
        this.renderable = {
            meshData: c.quad,
            materials: [this.material]
        };
        this.enabled = !0;
        this.clear = !1;
        this.needsSwap = !0
    }
    a.prototype.render = function (a, b, f) {
        this.useReadBuffer && this.material.setTexture("DIFFUSE_MAP", f);
        this.renderToScreen ? a.render(this.renderable,
            c.camera, [], null, this.clear) : a.render(this.renderable, c.camera, [], b, this.clear)
    };
    return a
});
define("goo/renderer/shadow/ShadowHandler", "goo/math/Vector3,goo/renderer/pass/FullscreenPass,goo/renderer/Camera,goo/renderer/Material,goo/renderer/shaders/ShaderLib,goo/renderer/pass/RenderTarget,goo/math/Vector4,goo/renderer/light/PointLight,goo/renderer/light/DirectionalLight,goo/renderer/light/SpotLight".split(","), function (e, c, b, a, d, g, f, i, h, k) {
    function j() {
        this.depthMaterial = a.createMaterial(d.lightDepth, "depthMaterial");
        this.fullscreenPass = new c;
        this.downsample = a.createShader(d.downsample,
            "downsample");
        this.boxfilter = a.createShader(d.boxfilter, "boxfilter");
        this.shadowType = "PCF";
        this.shadowTypeRecord = null;
        this.oldClearColor = new f(0, 0, 0, 0);
        this.shadowClearColor = new f(1, 1, 1, 1);
        this.renderList = [];
        this.shadowList = [];
        this.shadowLights = [];
        this.shadowResults = [];
        this.tmpVec = new e
    }
    j.prototype._createShadowData = function (a) {
        var c = a.resolution[0],
            d = a.resolution[1];
        a.shadowData = {
            shadowTarget: new g(c, d, {
                type: "Float",
                magFilter: "NearestNeighbor",
                minFilter: "NearestNeighborNoMipMaps"
            }),
            shadowTargetDown: new g(c /
                2, d / 2, {
                    type: "Float",
                    magFilter: "NearestNeighbor",
                    minFilter: "NearestNeighborNoMipMaps"
                }),
            shadowBlurred: new g(c / 2, d / 2, {
                type: "Float",
                magFilter: "NearestNeighbor",
                minFilter: "NearestNeighborNoMipMaps"
            }),
            lightCamera: new b(55, 1, 1, 1E3)
        };
        a.shadowRecord = {}
    };
    j.prototype._testStatesEqual = function (a, b) {
        var c = Object.keys(a),
            d = Object.keys(b);
        if (c.length !== d.length) return !1;
        for (d = 0; d < c.length; d++) {
            var f = c[d];
            if (a[f] !== b[f]) return !1
        }
        return !0
    };
    j.prototype.checkShadowRendering = function (a, c, d, f) {
        this.shadowResults = [];
        this.shadowLights = [];
        for (var g = 0; g < f.length; g++) {
            var h = f[g];
            if (h.shadowCaster) {
                var j = h.shadowSettings;
                j.shadowData || this._createShadowData(j);
                var u = j.shadowRecord,
                    q = j.shadowData.lightCamera;
                q.translation.copy(h.translation);
                h.direction ? (this.tmpVec.setv(h.translation).addv(h.direction), q.lookAt(this.tmpVec, j.upVector)) : q.lookAt(e.ZERO, j.upVector);
                if (u.angle !== h.angle || !u.resolution || u.resolution[0] !== j.resolution[0] || u.resolution[1] !== j.resolution[1] || u.near !== j.near || u.far !== j.far || u.size !== j.size) {
                    if (h instanceof k) q.setFrustumPerspective(h.angle, j.resolution[0] / j.resolution[1], j.near, j.far);
                    else if (h instanceof i) q.setFrustumPerspective(90, j.resolution[0] / j.resolution[1], j.near, j.far);
                    else {
                        var x = j.size;
                        q.setFrustum(j.near, j.far, -x, x, x, -x);
                        q.projectionMode = b.Parallel
                    }
                    q.update();
                    u.resolution = u.resolution || [];
                    u.resolution[0] = j.resolution[0];
                    u.resolution[1] = j.resolution[1];
                    u.angle = h.angle;
                    u.near = j.near;
                    u.far = j.far;
                    u.size = j.size
                }
                if (this.shadowTypeRecord !== this.shadowType) this.shadowType === "VSM" ? (this.depthMaterial.cullState.cullFace =
                    "Back", this.depthMaterial.shader.defines.SHADOW_TYPE = 2) : (this.depthMaterial.cullState.cullFace = "Back", this.depthMaterial.shader.defines.SHADOW_TYPE = 0), this.shadowTypeRecord = this.shadowType;
                q.onFrameChange();
                this.shadowLights.push(h);
                this.oldClearColor.copy(a.clearColor);
                a.setClearColor(this.shadowClearColor.r, this.shadowClearColor.g, this.shadowClearColor.b, this.shadowClearColor.a);
                for (h = this.shadowList.length = 0; h < d.length; h++) u = d[h], u.meshRendererComponent && u.meshRendererComponent.castShadows && this.shadowList.push(u);
                c.process(q, this.shadowList, this.renderList);
                a.render(this.renderList, q, [], j.shadowData.shadowTarget, !0, this.depthMaterial);
                switch (this.shadowType) {
                case "VSM":
                    this.fullscreenPass.material.shader = this.downsample;
                    this.fullscreenPass.render(a, j.shadowData.shadowTargetDown, j.shadowData.shadowTarget, 0);
                    this.boxfilter.uniforms.viewport = [j.resolution[0] / 2, j.resolution[1] / 2];
                    this.fullscreenPass.material.shader = this.boxfilter;
                    this.fullscreenPass.render(a, j.shadowData.shadowBlurred, j.shadowData.shadowTargetDown,
                        0);
                    this.shadowResults.push(j.shadowData.shadowBlurred);
                    break;
                case "PCF":
                    this.shadowResults.push(j.shadowData.shadowTarget);
                    break;
                case "Basic":
                    this.shadowResults.push(j.shadowData.shadowTarget);
                    break;
                default:
                    this.shadowResults.push(j.shadowData.shadowTarget)
                }
                a.setClearColor(this.oldClearColor.r, this.oldClearColor.g, this.oldClearColor.b, this.oldClearColor.a)
            }
        }
    };
    return j
});
define("goo/entities/EventHandler", [], function () {
    function e() {}
    e.listeners = [];
    e.dispatch = function () {
        if (arguments.length === 0) throw Error("Event needs to specify a callback as first argument");
        for (var c = arguments[0], b = Array.prototype.slice.call(arguments, 1), a = 0; a < e.listeners.length; a++) {
            var d = e.listeners[a];
            d[c] && d[c].apply(null, b)
        }
    };
    e.addListener = function (c) {
        e.listeners.indexOf(c) === -1 && e.listeners.push(c)
    };
    e.removeListener = function (c) {
        c = e.listeners.indexOf(c);
        c !== -1 && e.listeners.splice(c, 1)
    };
    return e
});
define("goo/renderer/Renderer", "goo/renderer/RendererRecord,goo/renderer/Util,goo/renderer/TextureCreator,goo/renderer/pass/RenderTarget,goo/math/Vector4,goo/entities/Entity,goo/renderer/Texture,goo/loaders/dds/DdsLoader,goo/loaders/dds/DdsUtils,goo/renderer/MeshData,goo/renderer/Material,goo/renderer/Shader,goo/math/Transform,goo/renderer/RenderQueue,goo/renderer/shaders/ShaderLib,goo/renderer/shadow/ShadowHandler,goo/entities/EventHandler".split(","), function (e, c, b, a, d, g, f, i, h, k, j, l, m, o, p, n, s) {
    function r(a) {
        var a =
            a || {}, b = a.canvas;
        if (b === void 0) b = document.createElement("canvas"), b.width = 500, b.height = 500;
        this.domElement = b;
        this._alpha = a.alpha !== void 0 ? a.alpha : !1;
        this._premultipliedAlpha = a.premultipliedAlpha !== void 0 ? a.premultipliedAlpha : !0;
        this._antialias = a.antialias !== void 0 ? a.antialias : !0;
        this._stencil = a.stencil !== void 0 ? a.stencil : !1;
        this._preserveDrawingBuffer = a.preserveDrawingBuffer !== void 0 ? a.preserveDrawingBuffer : !1;
        this._onError = a.onError;
        var c = {
            alpha: this._alpha,
            premultipliedAlpha: this._premultipliedAlpha,
            antialias: this._antialias,
            stencil: this._stencil,
            preserveDrawingBuffer: this._preserveDrawingBuffer
        };
        this.context = null;
        if (window.WebGLRenderingContext) {
            for (var f = ["experimental-webgl", "webgl", "moz-webgl", "webkit-3d"], g = 0; g < f.length; g++) try {
                if ((this.context = b.getContext(f[g], c)) && typeof this.context.getParameter === "function") break
            } catch (k) {}
            if (!this.context) throw {
                name: "GooWebGLError",
                message: "WebGL is supported but disabled",
                supported: !0,
                enabled: !1
            };
        } else throw {
            name: "GooWebGLError",
            message: "WebGL is not supported",
            supported: !1,
            enabled: !1
        }; if (a.debug) {
            var l = new XMLHttpRequest;
            l.open("GET", "/js/goo/lib/webgl-debug.js", !1);
            l.onreadystatechange = function () {
                l.readyState === 4 && l.status >= 200 && l.status <= 299 && window.eval.call(window, l.responseText)
            };
            l.send(null);
            typeof window.WebGLDebugUtils === "undefined" ? console.warn("You need to include webgl-debug.js in your script definition to run in debug mode.") : (console.log("Running in webgl debug mode."), a.validate ? (console.log('Running with "undefined arguments" validation.'),
                this.context = window.WebGLDebugUtils.makeDebugContext(this.context, this.onDebugError.bind(this), u)) : this.context = window.WebGLDebugUtils.makeDebugContext(this.context, this.onDebugError.bind(this)))
        }
        this.rendererRecord = new e;
        this.glExtensionCompressedTextureS3TC = i.SUPPORTS_DDS = h.isSupported(this.context);
        this.glExtensionTextureFloat = this.context.getExtension("OES_texture_float");
        this.glExtensionTextureFloatLinear = this.context.getExtension("OES_texture_float_linear");
        this.glExtensionTextureHalfFloat =
            this.context.getExtension("OES_texture_half_float");
        this.glExtensionStandardDerivatives = this.context.getExtension("OES_standard_derivatives");
        this.glExtensionTextureFilterAnisotropic = this.context.getExtension("EXT_texture_filter_anisotropic") || this.context.getExtension("MOZ_EXT_texture_filter_anisotropic") || this.context.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        this.glExtensionDepthTexture = this.context.getExtension("WEBGL_depth_texture") || this.context.getExtension("WEBKIT_WEBGL_depth_texture") ||
            this.context.getExtension("MOZ_WEBGL_depth_texture");
        this.glExtensionElementIndexUInt = this.context.getExtension("OES_element_index_uint");
        this.glExtensionTextureFloat || console.log("Float textures not supported.");
        this.glExtensionTextureFloatLinear || console.log("Float textures with linear filtering not supported.");
        this.glExtensionStandardDerivatives || console.log("Standard derivatives not supported.");
        this.glExtensionTextureFilterAnisotropic || console.log("Anisotropic texture filtering not supported.");
        this.glExtensionCompressedTextureS3TC || console.log("S3TC compressed textures not supported.");
        this.glExtensionDepthTexture || console.log("Depth textures not supported.");
        this.glExtensionElementIndexUInt || console.log("32 bit indices not supported.");
        if (this.context.getShaderPrecisionFormat === void 0) this.context.getShaderPrecisionFormat = function () {
            return {
                rangeMin: 1,
                rangeMax: 1,
                precision: 1
            }
        };
        this.capabilities = {
            maxTexureSize: this.context.getParameter(q.MAX_TEXTURE_SIZE),
            maxCubemapSize: this.context.getParameter(q.MAX_CUBE_MAP_TEXTURE_SIZE),
            maxRenderbufferSize: this.context.getParameter(q.MAX_RENDERBUFFER_SIZE),
            maxViewPortDims: this.context.getParameter(q.MAX_VIEWPORT_DIMS),
            maxAnisotropy: this.glExtensionTextureFilterAnisotropic ? this.context.getParameter(this.glExtensionTextureFilterAnisotropic.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0,
            maxVertexTextureUnits: this.context.getParameter(q.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
            maxFragmentTextureUnits: this.context.getParameter(q.MAX_TEXTURE_IMAGE_UNITS),
            maxCombinedTextureUnits: this.context.getParameter(q.MAX_COMBINED_TEXTURE_IMAGE_UNITS),
            maxVertexAttributes: this.context.getParameter(q.MAX_VERTEX_ATTRIBS),
            maxVertexUniformVectors: this.context.getParameter(q.MAX_VERTEX_UNIFORM_VECTORS),
            maxFragmentUniformVectors: this.context.getParameter(q.MAX_FRAGMENT_UNIFORM_VECTORS),
            maxVaryingVectors: this.context.getParameter(q.MAX_VARYING_VECTORS),
            aliasedPointSizeRange: this.context.getParameter(q.ALIASED_POINT_SIZE_RANGE),
            aliasedLineWidthRange: this.context.getParameter(q.ALIASED_LINE_WIDTH_RANGE),
            samples: this.context.getParameter(q.SAMPLES),
            sampleBuffers: this.context.getParameter(q.SAMPLE_BUFFERS),
            depthBits: this.context.getParameter(q.DEPTH_BITS),
            stencilBits: this.context.getParameter(q.STENCIL_BITS),
            subpixelBits: this.context.getParameter(q.SUBPIXEL_BITS),
            supportedExtensionsList: this.context.getSupportedExtensions(),
            renderer: this.context.getParameter(q.RENDERER),
            vendor: this.context.getParameter(q.VENDOR),
            version: this.context.getParameter(q.VERSION),
            shadingLanguageVersion: this.context.getParameter(q.SHADING_LANGUAGE_VERSION),
            vertexShaderHighpFloat: this.context.getShaderPrecisionFormat(this.context.VERTEX_SHADER,
                this.context.HIGH_FLOAT),
            vertexShaderMediumpFloat: this.context.getShaderPrecisionFormat(this.context.VERTEX_SHADER, this.context.MEDIUM_FLOAT),
            vertexShaderLowpFloat: this.context.getShaderPrecisionFormat(this.context.VERTEX_SHADER, this.context.LOW_FLOAT),
            fragmentShaderHighpFloat: this.context.getShaderPrecisionFormat(this.context.FRAGMENT_SHADER, this.context.HIGH_FLOAT),
            fragmentShaderMediumpFloat: this.context.getShaderPrecisionFormat(this.context.FRAGMENT_SHADER, this.context.MEDIUM_FLOAT),
            fragmentShaderLowpFloat: this.context.getShaderPrecisionFormat(this.context.FRAGMENT_SHADER,
                this.context.LOW_FLOAT),
            vertexShaderHighpInt: this.context.getShaderPrecisionFormat(this.context.VERTEX_SHADER, this.context.HIGH_INT),
            vertexShaderMediumpInt: this.context.getShaderPrecisionFormat(this.context.VERTEX_SHADER, this.context.MEDIUM_INT),
            vertexShaderLowpInt: this.context.getShaderPrecisionFormat(this.context.VERTEX_SHADER, this.context.LOW_INT),
            fragmentShaderHighpInt: this.context.getShaderPrecisionFormat(this.context.FRAGMENT_SHADER, this.context.HIGH_INT),
            fragmentShaderMediumpInt: this.context.getShaderPrecisionFormat(this.context.FRAGMENT_SHADER,
                this.context.MEDIUM_INT),
            fragmentShaderLowpInt: this.context.getShaderPrecisionFormat(this.context.FRAGMENT_SHADER, this.context.LOW_INT)
        };
        this.shaderPrecision = a.shaderPrecision || "highp";
        this.shaderPrecision = this.shaderPrecision === "highp" && this.capabilities.vertexShaderHighpFloat.precision > 0 && this.capabilities.fragmentShaderHighpFloat.precision > 0 ? "highp" : this.shaderPrecision !== "lowp" && this.capabilities.vertexShaderMediumpFloat.precision > 0 && this.capabilities.fragmentShaderMediumpFloat.precision > 0 ? "mediump" :
            "lowp";
        this.downScale = a.downScale || 1;
        this.clearColor = new d;
        this.setClearColor(0.3, 0.3, 0.3, 1);
        this.context.clearDepth(1);
        this.context.clearStencil(0);
        this.context.stencilMask(0);
        this.context.enable(q.DEPTH_TEST);
        this.context.depthFunc(q.LEQUAL);
        this.currentHeight = this.currentWidth = this.viewportHeight = this.viewportWidth = this.viewportY = this.viewportX = 0;
        this._overrideMaterials = [];
        this._mergedMaterial = new j("Merged Material");
        this.renderQueue = new o;
        this.info = {
            calls: 0,
            vertices: 0,
            indices: 0,
            reset: function () {
                this.indices =
                    this.vertices = this.calls = 0
            },
            toString: function () {
                return "Calls: " + this.calls + " Vertices: " + this.vertices + " Indices: " + this.indices
            }
        };
        this.shadowHandler = new n;
        this.hardwarePicking = null
    }

    function u(a, b) {
        for (var c = 0; c < b.length; ++c) b[c] === void 0 && console.error("undefined passed to gl." + a + "(" + window.WebGLDebugUtils.glFunctionArgsToString(a, b) + ")")
    }
    var q = window.WebGLRenderingContext;
    r.prototype.onDebugError = function (a, b, c) {
        for (var a = "WebGL error " + window.WebGLDebugUtils.glEnumToString(a) + " in " + b + "(", d = 0; d <
            c.length; ++d) a += (d === 0 ? "" : ", ") + window.WebGLDebugUtils.glFunctionArgToString(b, d, c[d]);
        a += ")";
        console.error(a);
        this._onError && this._onError(a)
    };
    r.mainCamera = null;
    s.addListener({
        setCurrentCamera: function (a) {
            r.mainCamera = a
        }
    });
    r.prototype.checkResize = function (a) {
        var b = this.domElement.offsetWidth / this.downScale,
            c = this.domElement.offsetHeight / this.downScale,
            previousWidth = this.domElement.width,
            previousHeight = this.domElement.height;
        (b !== this.domElement.width || c !== this.domElement.height) && this.setSize(b, c);
        b = this.domElement.width / this.domElement.height;
        if (a && a.aspect !== b) {
            // VICTOR
            a.aspect = b; 
            (a.projectionMode === a.Perspective?  a.setFrustumPerspective() : a.setFrustum(previousWidth - this.domElement.width, previousHeight - this.domElement.height));
            a.onFrameChange();
        }
    };
    r.prototype.setSize = function (a, b) {
        this.domElement.width = a;
        this.domElement.height = b;
        this.setViewport(0, 0, a, b);
        if (this.hardwarePicking !== null) this.hardwarePicking.pickingTarget = null
    };
    r.prototype.setViewport = function (a, b, c, d) {
        this.viewportX = a !== void 0 ? a : 0;
        this.viewportY = b !== void 0 ? b : 0;
        this.viewportWidth = c !== void 0 ? c : this.domElement.width;
        this.viewportHeight = d !== void 0 ? d : this.domElement.height;
        this.context.viewport(this.viewportX, this.viewportY, this.viewportWidth,
            this.viewportHeight)
    };
    r.prototype.setClearColor = function (a, b, c, d) {
        this.clearColor.set(a, b, c, d);
        this.context.clearColor(a, b, c, d)
    };
    r.prototype.bindData = function (a) {
        var b = a.glBuffer;
        if (b !== null) {
            if (this.setBoundBuffer(b, a.target), a._dataNeedsRefresh) this.context.bufferSubData(this.getGLBufferTarget(a.target), 0, a.data), a._dataNeedsRefresh = !1
        } else b = this.context.createBuffer(), a.glBuffer = b, this.rendererRecord.invalidateBuffer(a.target), this.setBoundBuffer(b, a.target), this.context.bufferData(this.getGLBufferTarget(a.target),
            a.data, this.getGLBufferUsage(a._dataUsage))
    };
    r.prototype.setShadowType = function (a) {
        this.shadowHandler.shadowType = a
    };
    r.prototype.updateShadows = function (a, b, c) {
        this.shadowHandler.checkShadowRendering(this, a, b, c)
    };
    r.prototype.render = function (a, b, d, f, g, e) {
        this._overrideMaterials = e ? e instanceof Array ? e : [e] : [];
        if (b) {
            if (r.mainCamera === null) r.mainCamera = b;
            this.setRenderTarget(f);
            g === void 0 || g === null || g === !0 ? this.clear() : typeof g === "object" && this.clear(g.color, g.depth, g.stencil);
            d = {
                camera: b,
                mainCamera: r.mainCamera,
                lights: d,
                shadowHandler: this.shadowHandler,
                renderer: this
            };
            if (Array.isArray(a)) {
                this.renderQueue.sort(a, b);
                for (b = 0; b < a.length; b++) this.fillRenderInfo(a[b], d), this.renderMesh(d)
            } else this.fillRenderInfo(a, d), this.renderMesh(d);
            f && f.generateMipmaps && c.isPowerOfTwo(f.width) && c.isPowerOfTwo(f.height) && this.updateRenderTargetMipmap(f)
        }
    };
    r.prototype.fillRenderInfo = function (a, b) {
        a instanceof g ? (b.meshData = a.meshDataComponent.meshData, b.materials = a.meshRendererComponent.materials, b.transform = a.particleComponent ?
            m.IDENTITY : a.transformComponent.worldTransform, a.meshDataComponent.currentPose ? b.currentPose = a.meshDataComponent.currentPose : delete b.currentPose) : (b.meshData = a.meshData, b.materials = a.materials, b.transform = a.transform);
        b.renderable = a
    };
    r.prototype.override = function (a, b, c) {
        c.empty();
        for (var d in c)
            if (c.hasOwnProperty(d))
                if (c[d] instanceof Object && d !== "shader") {
                    for (var f in a[d]) c[d][f] = a[d][f];
                    for (f in b[d]) c[d][f] === void 0 && (c[d][f] = b[d][f])
                } else c[d] = a[d], c[d] === void 0 && (c[d] = b[d])
    };
    r.prototype.renderMesh =
        function (a) {
            var t;
            var b = a.meshData;
            if (!(b.vertexData === null || b.vertexData !== null && b.vertexData.data.byteLength === 0 || b.indexData !== null && b.indexData.data.byteLength === 0)) {
                this.bindData(b.vertexData);
                for (var c = a.materials, d = null, f = b, g = 0, g = this._overrideMaterials.length === 0 ? c.length : this._overrideMaterials.length, e = 0; e < g; e++) {
                    var h = null,
                        i = null;
                    e < c.length && (h = c[e]);
                    e < this._overrideMaterials.length && (i = this._overrideMaterials[e]);
                    h && i ? (this.override(i, h, this._mergedMaterial), h = this._mergedMaterial) : i &&
                        (h = i);
                    if (h.shader) {
                        h.errorOnce = !1;
                        this.shadowHandler.shadowResults.length > 0 ? h.setTexture("SHADOW_MAP", this.shadowHandler.shadowResults) : h.getTexture("SHADOW_MAP") && h.removeTexture("SHADOW_MAP");
                        if (h.wireframe && d !== "wire") {
                            if (!b.wireframeData) b.wireframeData = b.buildWireframeData();
                            b = b.wireframeData;
                            this.bindData(b.vertexData);
                            d = "wire"
                        } else if (h.flat && d !== "flat") {
                            if (!b.flatMeshData) b.flatMeshData = b.buildFlatMeshData();
                            b = b.flatMeshData;
                            this.bindData(b.vertexData);
                            d = "flat"
                        } else !h.wireframe && !h.flat &&
                            d !== null && (b = f, this.bindData(b.vertexData), d = null);
                        a.material = h;
                        a.meshData = b;
                        i = h.shader;
                        if (i.processors || i.defines) {
                            if (i.processors)
                                for (var j = 0; j < i.processors.length; j++) i.processors[j](i, a);
                            for (var k = Object.keys(i.defines), l = k.length, n = [], j = 0; j < l; j++) {
                                var m = k[j];
                                n.push(m + "_" + i.defines[m])
                            }
                            n.sort();
                            j = n.join("_") + "_" + i.name;
                            k = this.rendererRecord.shaderCache = this.rendererRecord.shaderCache || {};
                            if (k[j]) {
                                if (i = k[j], i !== h.shader) {
                                    for (m in h.shader.uniforms) i.uniforms[m] = h.shader.uniforms[m];
                                    h.shader = i
                                }
                            } else t =
                                h.shader = i.clone(), i = t, k[j] = i
                        }
                        i.apply(a, this);
                        this.updateDepthTest(h);
                        this.updateCulling(h);
                        this.updateBlending(h);
                        this.updateOffset(h);
                        this.updateTextures(h);
                        this.updateLineAndPointSettings(h);
                        b.getIndexBuffer() !== null ? (this.bindData(b.getIndexData()), b.getIndexLengths() !== null ? this.drawElementsVBO(b.getIndexBuffer(), b.getIndexModes(), b.getIndexLengths()) : this.drawElementsVBO(b.getIndexBuffer(), b.getIndexModes(), [b.getIndexBuffer().length])) : b.getIndexLengths() !== null ? this.drawArraysVBO(b.getIndexModes(),
                            b.getIndexLengths()) : this.drawArraysVBO(b.getIndexModes(), [b.vertexCount]);
                        this.info.calls++;
                        this.info.vertices += b.vertexCount;
                        this.info.indices += b.indexCount
                    } else if (!h.errorOnce) console.warn("No shader set on material: " + h.name), h.errorOnce = !0
                }
            }
    };
    r.prototype.readPixels = function (a, b, c, d, f) {
        this.context.readPixels(a, b, c, d, q.RGBA, q.UNSIGNED_BYTE, f)
    };
    r.prototype.drawElementsVBO = function (a, b, c) {
        for (var d = 0, f = 0, g = a.type = a.type || this.getGLArrayType(a), a = this.getGLByteSize(a), e = 0; e < c.length; e++) {
            var h =
                c[e];
            this.context.drawElements(this.getGLIndexMode(b[f]), h, g, d * a);
            d += h;
            f < b.length - 1 && f++
        }
    };
    r.prototype.drawArraysVBO = function (a, b) {
        for (var c = 0, d = 0, f = 0; f < b.length; f++) {
            var g = b[f];
            this.context.drawArrays(this.getGLIndexMode(a[d]), c, g);
            c += g;
            d < a.length - 1 && d++
        }
    };
    r.prototype.renderToPick = function (b, c, f, g, e, h, i) {
        if (this.viewportWidth * this.viewportHeight !== 0) {
            if (this.hardwarePicking === null) g = j.createEmptyMaterial(p.pickingShader, "pickingMaterial"), g.blendState = {
                blending: "NoBlending",
                blendEquation: "AddEquation",
                blendSrc: "SrcAlphaFactor",
                blendDst: "OneMinusSrcAlphaFactor"
            }, this.hardwarePicking = {
                pickingTarget: new a(this.viewportWidth / 4, this.viewportHeight / 4, {
                    minFilter: "NearestNeighborNoMipMaps",
                    magFilter: "NearestNeighbor"
                }),
                pickingMaterial: g,
                pickingBuffer: new Uint8Array(4),
                clearColorStore: new d
            }, g = !1;
            else if (this.hardwarePicking.pickingTarget === null) this.hardwarePicking.pickingTarget = new a(this.viewportWidth / 4, this.viewportHeight / 4, {
                minFilter: "NearestNeighborNoMipMaps",
                magFilter: "NearestNeighbor"
            }), g = !1;
            if (g) this.setRenderTarget(this.hardwarePicking.pickingTarget);
            else {
                this.hardwarePicking.clearColorStore.setv(this.clearColor);
                e && h !== void 0 && i !== void 0 && (h = Math.floor(h / 4), i = Math.floor((this.viewportHeight - i) / 4), this.context.enable(q.SCISSOR_TEST), this.context.scissor(h, i, 1, 1));
                i = [];
                h = 0;
                for (g = b.length; h < g; h++) {
                    var k = b[h];
                    (!k.meshRendererComponent || k.meshRendererComponent.isPickable) && i.push(k)
                }
                this.render(i, c, [], this.hardwarePicking.pickingTarget, f, this.hardwarePicking.pickingMaterial);
                e && this.context.disable(q.SCISSOR_TEST)
            }
        }
    };
    r.prototype.pick = function (a, b,
        c, d) {
        this.viewportWidth * this.viewportHeight === 0 ? (c.id = -1, c.depth = 0) : (this.readPixels(Math.floor(a / 4), Math.floor((this.viewportHeight - b) / 4), 1, 1, this.hardwarePicking.pickingBuffer), a = (this.hardwarePicking.pickingBuffer[2] / 255 + this.hardwarePicking.pickingBuffer[3] / 65025) * d.far, c.id = this.hardwarePicking.pickingBuffer[0] * 255 + this.hardwarePicking.pickingBuffer[1] - 1, c.depth = a)
    };
    r.prototype.updateLineAndPointSettings = function (a) {
        var b = this.rendererRecord.lineRecord,
            a = a.lineWidth || 1;
        if (b.lineWidth !== a) this.context.lineWidth(a),
        b.lineWidth = a
    };
    r.prototype.updateDepthTest = function (a) {
        var b = this.rendererRecord.depthRecord,
            a = a.depthState;
        if (b.enabled !== a.enabled) a.enabled ? this.context.enable(q.DEPTH_TEST) : this.context.disable(q.DEPTH_TEST), b.enabled = a.enabled;
        if (b.write !== a.write) a.write ? this.context.depthMask(!0) : this.context.depthMask(!1), b.write = a.write
    };
    r.prototype.updateCulling = function (a) {
        var b = this.rendererRecord.cullRecord,
            c = a.cullState.cullFace,
            d = a.cullState.frontFace,
            a = a.cullState.enabled;
        if (b.enabled !== a) a ? this.context.enable(q.CULL_FACE) :
            this.context.disable(q.CULL_FACE), b.enabled = a;
        if (b.cullFace !== c) this.context.cullFace(c === "Front" ? q.FRONT : c === "Back" ? q.BACK : q.FRONT_AND_BACK), b.cullFace = c;
        if (b.frontFace !== d) {
            switch (d) {
            case "CCW":
                this.context.frontFace(q.CCW);
                break;
            case "CW":
                this.context.frontFace(q.CW)
            }
            b.frontFace = d
        }
    };
    r.prototype.updateTextures = function (d) {
        for (var f = this.context, g = d.shader.textureSlots, e = 0; e < g.length; e++) {
            var h = g[e],
                i = d.getTexture(h.mapping);
            if (i !== void 0) {
                var j = i;
                i instanceof Array === !1 && (j = [i]);
                for (var k = 0; k < j.length; k++) {
                    var i =
                        j[k],
                        l = h.index instanceof Array ? h.index[k] : h.index;
                    if (i === null || i instanceof a === !1 && (i.image === void 0 || i.checkDataReady() === !1))
                        if (h.format === "sampler2D") i = b.DEFAULT_TEXTURE_2D;
                        else if (h.format === "samplerCube") i = b.DEFAULT_TEXTURE_CUBE;
                    var n = this.rendererRecord.textureRecord[l];
                    n === void 0 && (n = this.rendererRecord.textureRecord[l] = {});
                    i.glTexture === null ? (i.glTexture = f.createTexture(), this.updateTexture(f, i, l, n)) : i instanceof a === !1 && i.checkNeedsUpdate() ? (this.updateTexture(f, i, l, n), i.needsUpdate = !1) :
                        this.bindTexture(f, i, l, n);
                    l = i.image !== void 0 ? i.image : i;
                    l = c.isPowerOfTwo(l.width) && c.isPowerOfTwo(l.height);
                    this.updateTextureParameters(i, l)
                }
            }
        }
    };
    r.prototype.updateTextureParameters = function (a, b) {
        var c = this.context,
            d = a.textureRecord;
        if (d === void 0) d = {}, a.textureRecord = d;
        var f = this.getGLType(a.variant);
        if (d.magFilter !== a.magFilter) c.texParameteri(f, q.TEXTURE_MAG_FILTER, this.getGLMagFilter(a.magFilter)), d.magFilter = a.magFilter;
        var g = b ? a.minFilter : this.getFilterFallback(a.minFilter);
        if (d.minFilter !== g) c.texParameteri(f,
            q.TEXTURE_MIN_FILTER, this.getGLMinFilter(g)), d.minFilter = g;
        g = b ? a.wrapS : "EdgeClamp";
        if (d.wrapS !== g) {
            var e = this.getGLWrap(g, c);
            c.texParameteri(f, q.TEXTURE_WRAP_S, e);
            d.wrapS = g
        }
        g = b ? a.wrapT : "EdgeClamp";
        if (d.wrapT !== g) e = this.getGLWrap(g, c), c.texParameteri(f, q.TEXTURE_WRAP_T, e), d.wrapT = g;
        if (this.glExtensionTextureFilterAnisotropic && a.type !== "Float" && (g = a.anisotropy, d.anisotropy !== g)) c.texParameterf(f, this.glExtensionTextureFilterAnisotropic.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(g, this.capabilities.maxAnisotropy)),
        d.anisotropy = g
    };
    r.prototype.bindTexture = function (a, b, c, d) {
        if (d.boundTexture === void 0 || b.glTexture !== void 0 && d.boundTexture !== b.glTexture) a.activeTexture(q.TEXTURE0 + c), a.bindTexture(this.getGLType(b.variant), b.glTexture), d.boundTexture = b.glTexture
    };
    r.prototype.getGLType = function (a) {
        switch (a) {
        case "2D":
            return q.TEXTURE_2D;
        case "CUBE":
            return q.TEXTURE_CUBE_MAP
        }
        throw "invalid texture type: " + a;
    };
    r.prototype.loadCompressedTexture = function (a, b, c, d) {
        var f = c.image.mipmapSizes,
            g = 0,
            e = 0,
            i = c.image.width,
            j = c.image.height,
            k = h.getDdsExtension(a),
            l = k.COMPRESSED_RGBA_S3TC_DXT5_EXT;
        if (c.format === "PrecompressedDXT1") l = k.COMPRESSED_RGB_S3TC_DXT1_EXT;
        else if (c.format === "PrecompressedDXT1A") l = k.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        else if (c.format === "PrecompressedDXT3") l = k.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        else if (c.format === "PrecompressedDXT5") l = k.COMPRESSED_RGBA_S3TC_DXT5_EXT;
        else throw Error("Unhandled compression format: " + d.getDataFormat().name()); if (typeof f === "undefined" || f === null) d instanceof Uint8Array ? a.compressedTexImage2D(b,
            0, l, i, j, 0, d) : a.compressedTexImage2D(b, 0, l, i, j, 0, new Uint8Array(d.buffer, d.byteOffset, d.byteLength));
        else {
            c.generateMipmaps = !1;
            if (d instanceof Array)
                for (k = 0; k < d.length; k++) a.compressedTexImage2D(b, k, l, i, j, 0, d[k]), i = ~~ (i / 2) > 1 ? ~~(i / 2) : 1, j = ~~ (j / 2) > 1 ? ~~(j / 2) : 1;
            else
                for (k = 0; k < f.length; k++) e = f[k], a.compressedTexImage2D(b, k, l, i, j, 0, new Uint8Array(d.buffer, d.byteOffset + g, e)), i = ~~ (i / 2) > 1 ? ~~(i / 2) : 1, j = ~~ (j / 2) > 1 ? ~~(j / 2) : 1, g += e;
            d = 1 + Math.ceil(Math.log(Math.max(c.image.height, c.image.width)) / Math.log(2));
            g = f[f.length -
                1];
            if (f.length < d)
                for (k = f.length; k < d; k++) g = ~~ ((i + 3) / 4) * ~~((j + 3) / 4) * c.image.bpp * 2, a.compressedTexImage2D(b, k, l, i, j, 0, new Uint8Array(g)), i = ~~ (i / 2) > 1 ? ~~(i / 2) : 1, j = ~~ (j / 2) > 1 ? ~~(j / 2) : 1
        }
    };
    r.prototype.updateTexture = function (a, b, c, d) {
        a.activeTexture(q.TEXTURE0 + c);
        a.bindTexture(this.getGLType(b.variant), b.glTexture);
        d.boundTexture = b.glTexture;
        a.pixelStorei(q.UNPACK_ALIGNMENT, b.unpackAlignment);
        a.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL, b.premultiplyAlpha);
        a.pixelStorei(q.UNPACK_FLIP_Y_WEBGL, b.flipY);
        c = b.image;
        if (b.variant === "2D")
            if (c) {
                if (!c.isCompressed && (b.generateMipmaps || c.width > this.capabilities.maxTexureSize || c.height > this.capabilities.maxTexureSize)) this.checkRescale(b, c, c.width, c.height, this.capabilities.maxTexureSize), c = b.image;
                c.isData === !0 ? c.isCompressed ? this.loadCompressedTexture(a, q.TEXTURE_2D, b, c.data) : a.texImage2D(q.TEXTURE_2D, 0, this.getGLInternalFormat(b.format), c.width, c.height, b.hasBorder ? 1 : 0, this.getGLInternalFormat(b.format), this.getGLPixelDataType(b.type), c.data) : a.texImage2D(q.TEXTURE_2D,
                    0, this.getGLInternalFormat(b.format), this.getGLInternalFormat(b.format), this.getGLPixelDataType(b.type), c);
                b.generateMipmaps && !c.isCompressed && a.generateMipmap(q.TEXTURE_2D)
            } else a.texImage2D(q.TEXTURE_2D, 0, this.getGLInternalFormat(b.format), b.width, b.height, 0, this.getGLInternalFormat(b.format), this.getGLPixelDataType(b.type), null);
            else if (b.variant === "CUBE") {
            if (c && (b.generateMipmaps || c.width > this.capabilities.maxCubemapSize || c.height > this.capabilities.maxCubemapSize)) {
                for (d = 0; d < f.CUBE_FACES.length; d++) this.checkRescale(b,
                    c.data[d], c.width, c.height, this.capabilities.maxCubemapSize);
                c = b.image
            }
            for (d = 0; d < f.CUBE_FACES.length; d++) {
                var g = f.CUBE_FACES[d];
                c ? c.isData === !0 ? c.isCompressed ? this.loadCompressedTexture(a, this.getGLCubeMapFace(g), b, c.data[d]) : a.texImage2D(this.getGLCubeMapFace(g), 0, this.getGLInternalFormat(b.format), c.width, c.height, b.hasBorder ? 1 : 0, this.getGLInternalFormat(b.format), this.getGLPixelDataType(b.type), c.data[d]) : a.texImage2D(this.getGLCubeMapFace(g), 0, this.getGLInternalFormat(b.format), this.getGLInternalFormat(b.format),
                    this.getGLPixelDataType(b.type), c.data[d]) : a.texImage2D(this.getGLCubeMapFace(g), 0, this.getGLInternalFormat(b.format), b.width, b.height, 0, this.getGLInternalFormat(b.format), this.getGLPixelDataType(b.type), null)
            }
            c && b.generateMipmaps && !c.isCompressed && a.generateMipmap(q.TEXTURE_CUBE_MAP)
        }
    };
    r.prototype.checkRescale = function (a, b, d, f, g) {
        var e = c.nearestPowerOfTwo(d),
            h = c.nearestPowerOfTwo(f),
            e = Math.min(e, g),
            h = Math.min(h, g);
        if (d !== e || f !== h) g = document.createElement("canvas"), g.width = e, g.height = h, g.getContext("2d").drawImage(b,
            0, 0, d, f, 0, 0, e, h), document.body.appendChild(g), g.dataReady = !0, a.image = g, g.parentNode.removeChild(g)
    };
    r.prototype.getGLWrap = function (a) {
        switch (a) {
        case "Repeat":
            return q.REPEAT;
        case "MirroredRepeat":
            return q.MIRRORED_REPEAT;
        case "EdgeClamp":
            return q.CLAMP_TO_EDGE
        }
        throw "invalid WrapMode type: " + a;
    };
    r.prototype.getGLInternalFormat = function (a) {
        switch (a) {
        case "RGBA":
            return q.RGBA;
        case "RGB":
            return q.RGB;
        case "Alpha":
            return q.ALPHA;
        case "Luminance":
            return q.LUMINANCE;
        case "LuminanceAlpha":
            return q.LUMINANCE_ALPHA;
        default:
            throw "Unsupported format: " + a;
        }
    };
    r.prototype.getGLPixelDataType = function (a) {
        switch (a) {
        case "UnsignedByte":
            return q.UNSIGNED_BYTE;
        case "UnsignedShort565":
            return q.UNSIGNED_SHORT_5_6_5;
        case "UnsignedShort4444":
            return q.UNSIGNED_SHORT_4_4_4_4;
        case "UnsignedShort5551":
            return q.UNSIGNED_SHORT_5_5_5_1;
        case "Float":
            return q.FLOAT;
        default:
            throw "Unsupported type: " + a;
        }
    };
    r.prototype.getFilterFallback = function (a) {
        switch (a) {
        case "NearestNeighborNoMipMaps":
        case "NearestNeighborNearestMipMap":
        case "NearestNeighborLinearMipMap":
            return "NearestNeighborNoMipMaps";
        case "BilinearNoMipMaps":
        case "Trilinear":
        case "BilinearNearestMipMap":
            return "BilinearNoMipMaps";
        default:
            return "NearestNeighborNoMipMaps"
        }
    };
    r.prototype.getGLMagFilter = function (a) {
        switch (a) {
        case "Bilinear":
            return q.LINEAR;
        case "NearestNeighbor":
            return q.NEAREST
        }
        throw "invalid MagnificationFilter type: " + a;
    };
    r.prototype.getGLMinFilter = function (a) {
        switch (a) {
        case "BilinearNoMipMaps":
            return q.LINEAR;
        case "Trilinear":
            return q.LINEAR_MIPMAP_LINEAR;
        case "BilinearNearestMipMap":
            return q.LINEAR_MIPMAP_NEAREST;
        case "NearestNeighborNoMipMaps":
            return q.NEAREST;
        case "NearestNeighborNearestMipMap":
            return q.NEAREST_MIPMAP_NEAREST;
        case "NearestNeighborLinearMipMap":
            return q.NEAREST_MIPMAP_LINEAR
        }
        throw "invalid MinificationFilter type: " + a;
    };
    r.prototype.getGLBufferTarget = function (a) {
        return a === "ElementArrayBuffer" ? q.ELEMENT_ARRAY_BUFFER : q.ARRAY_BUFFER
    };
    r.prototype.getGLArrayType = function (a) {
        if (a instanceof Uint8Array) return q.UNSIGNED_BYTE;
        else if (a instanceof Uint16Array) return q.UNSIGNED_SHORT;
        else if (a instanceof Uint32Array) return q.UNSIGNED_INT;
        else if (a instanceof Int8Array) return q.UNSIGNED_BYTE;
        else if (a instanceof Int16Array) return q.UNSIGNED_SHORT;
        else if (a instanceof Int32Array) return q.UNSIGNED_INT;
        return null
    };
    r.prototype.getGLByteSize = function (a) {
        if (!(a instanceof Uint8Array))
            if (a instanceof Uint16Array) return 2;
            else if (a instanceof Uint32Array) return 4;
        else if (!(a instanceof Int8Array))
            if (a instanceof Int16Array) return 2;
            else if (a instanceof Int32Array) return 4;
        return 1
    };
    r.prototype.getGLCubeMapFace =
        function (a) {
            switch (a) {
            case "PositiveX":
                return q.TEXTURE_CUBE_MAP_POSITIVE_X;
            case "NegativeX":
                return q.TEXTURE_CUBE_MAP_NEGATIVE_X;
            case "PositiveY":
                return q.TEXTURE_CUBE_MAP_POSITIVE_Y;
            case "NegativeY":
                return q.TEXTURE_CUBE_MAP_NEGATIVE_Y;
            case "PositiveZ":
                return q.TEXTURE_CUBE_MAP_POSITIVE_Z;
            case "NegativeZ":
                return q.TEXTURE_CUBE_MAP_NEGATIVE_Z
            }
            throw "Invalid cubemap face: " + a;
    };
    r.prototype.getGLBufferUsage = function (a) {
        var b = q.STATIC_DRAW;
        switch (a) {
        case "StaticDraw":
            b = q.STATIC_DRAW;
            break;
        case "DynamicDraw":
            b =
                q.DYNAMIC_DRAW;
            break;
        case "StreamDraw":
            b = q.STREAM_DRAW
        }
        return b
    };
    r.prototype.getGLIndexMode = function (a) {
        var b = q.TRIANGLES;
        switch (a) {
        case "Triangles":
            b = q.TRIANGLES;
            break;
        case "TriangleStrip":
            b = q.TRIANGLE_STRIP;
            break;
        case "TriangleFan":
            b = q.TRIANGLE_FAN;
            break;
        case "Lines":
            b = q.LINES;
            break;
        case "LineStrip":
            b = q.LINE_STRIP;
            break;
        case "LineLoop":
            b = q.LINE_LOOP;
            break;
        case "Points":
            b = q.POINTS
        }
        return b
    };
    r.prototype.updateBlending = function (a) {
        var b = this.rendererRecord.blendRecord,
            c = this.context,
            d = a.blendState.blending;
        if (d !== b.blending) d === "NoBlending" ? c.disable(q.BLEND) : d === "AdditiveBlending" ? (c.enable(q.BLEND), c.blendEquation(q.FUNC_ADD), c.blendFunc(q.SRC_ALPHA, q.ONE)) : d === "SubtractiveBlending" ? (c.enable(q.BLEND), c.blendEquation(q.FUNC_ADD), c.blendFunc(q.ZERO, q.ONE_MINUS_SRC_COLOR)) : d === "MultiplyBlending" ? (c.enable(q.BLEND), c.blendEquation(q.FUNC_ADD), c.blendFunc(q.DST_COLOR, q.ONE_MINUS_SRC_ALPHA)) : d === "AlphaBlending" ? (c.enable(q.BLEND), c.blendEquation(q.FUNC_ADD), c.blendFunc(q.SRC_ALPHA, q.ONE_MINUS_SRC_ALPHA)) :
            d === "CustomBlending" ? c.enable(q.BLEND) : (c.enable(q.BLEND), c.blendEquationSeparate(q.FUNC_ADD, q.FUNC_ADD), c.blendFuncSeparate(q.SRC_ALPHA, q.ONE_MINUS_SRC_ALPHA, q.ONE, q.ONE_MINUS_SRC_ALPHA)), b.blending = d;
        if (d === "CustomBlending") {
            var d = a.blendState.blendEquation,
                f = a.blendState.blendSrc,
                a = a.blendState.blendDst;
            if (d !== b.blendEquation) c.blendEquation(this.getGLBlendParam(d)), b.blendEquation = d;
            if (f !== b.blendSrc || a !== b.blendDst) c.blendFunc(this.getGLBlendParam(f), this.getGLBlendParam(a)), b.blendSrc = f, b.blendDst =
                a
        } else b.blendEquation = null, b.blendSrc = null, b.blendDst = null
    };
    r.prototype.updateOffset = function (a) {
        var b = this.rendererRecord.offsetRecord,
            c = this.context,
            d = a.offsetState.enabled,
            f = a.offsetState.factor,
            a = a.offsetState.units;
        if (b.enabled !== d) d ? c.enable(q.POLYGON_OFFSET_FILL) : c.disable(q.POLYGON_OFFSET_FILL), b.enabled = d;
        if (d && (b.factor !== f || b.units !== a)) c.polygonOffset(f, a), b.factor = f, b.units = a
    };
    r.prototype.setBoundBuffer = function (a, b) {
        var c = this.rendererRecord.currentBuffer[b];
        if (!c.valid || c.buffer !==
            a) this.context.bindBuffer(this.getGLBufferTarget(b), a), c.buffer = a, c.valid = !0
    };
    r.prototype.bindVertexAttribute = function (a, b) {
        this.context.vertexAttribPointer(a, b.count, this.getGLDataType(b.type), b.normalized, b.stride, b.offset)
    };
    r.prototype.getGLDataType = function (a) {
        switch (a) {
        case "Float":
        case "HalfFloat":
        case "Double":
            return q.FLOAT;
        case "Byte":
            return q.BYTE;
        case "UnsignedByte":
            return q.UNSIGNED_BYTE;
        case "Short":
            return q.SHORT;
        case "UnsignedShort":
            return q.UNSIGNED_SHORT;
        case "Int":
            return q.INT;
        case "UnsignedInt":
            return q.UNSIGNED_INT;
        default:
            throw "Unknown datatype: " + a;
        }
    };
    r.prototype.getGLBlendParam = function (a) {
        switch (a) {
        case "AddEquation":
            return q.FUNC_ADD;
        case "SubtractEquation":
            return q.FUNC_SUBTRACT;
        case "ReverseSubtractEquation":
            return q.FUNC_REVERSE_SUBTRACT;
        case "ZeroFactor":
            return q.ZERO;
        case "OneFactor":
            return q.ONE;
        case "SrcColorFactor":
            return q.SRC_COLOR;
        case "OneMinusSrcColorFactor":
            return q.ONE_MINUS_SRC_COLOR;
        case "SrcAlphaFactor":
            return q.SRC_ALPHA;
        case "OneMinusSrcAlphaFactor":
            return q.ONE_MINUS_SRC_ALPHA;
        case "DstAlphaFactor":
            return q.DST_ALPHA;
        case "OneMinusDstAlphaFactor":
            return q.ONE_MINUS_DST_ALPHA;
        case "DstColorFactor":
            return q.DST_COLOR;
        case "OneMinusDstColorFactor":
            return q.ONE_MINUS_DST_COLOR;
        case "SrcAlphaSaturateFactor":
            return q.SRC_ALPHA_SATURATE;
        default:
            throw "Unknown blend param: " + a;
        }
    };
    r.prototype.clear = function (a, b, c) {
        var d = 0;
        if (a === void 0 || a) d |= q.COLOR_BUFFER_BIT;
        if (b === void 0 || b) d |= q.DEPTH_BUFFER_BIT;
        if (c === void 0 || c) d |= q.STENCIL_BUFFER_BIT;
        a = this.rendererRecord.depthRecord;
        if (a.write !== !0) this.context.depthMask(!0), a.write = !0;
        this.context.clear(d)
    };
    r.prototype.flush = function () {
        this.context.flush()
    };
    r.prototype.finish = function () {
        this.context.finish()
    };
    r.prototype.setupFrameBuffer = function (a, b, c) {
        this.context.bindFramebuffer(q.FRAMEBUFFER, a);
        this.context.framebufferTexture2D(q.FRAMEBUFFER, q.COLOR_ATTACHMENT0, c, b.glTexture, 0)
    };
    r.prototype.setupRenderBuffer = function (a, b) {
        this.context.bindRenderbuffer(q.RENDERBUFFER, a);
        b.depthBuffer && !b.stencilBuffer ? (this.context.renderbufferStorage(q.RENDERBUFFER, q.DEPTH_COMPONENT16, b.width,
            b.height), this.context.framebufferRenderbuffer(q.FRAMEBUFFER, q.DEPTH_ATTACHMENT, q.RENDERBUFFER, a)) : b.depthBuffer && b.stencilBuffer ? (this.context.renderbufferStorage(q.RENDERBUFFER, q.DEPTH_STENCIL, b.width, b.height), this.context.framebufferRenderbuffer(q.FRAMEBUFFER, q.DEPTH_STENCIL_ATTACHMENT, q.RENDERBUFFER, a)) : this.context.renderbufferStorage(q.RENDERBUFFER, q.RGBA4, b.width, b.height)
    };
    r.prototype.setRenderTarget = function (a) {
        if (a && !a._glFrameBuffer) {
            if (a.depthBuffer === void 0) a.depthBuffer = !0;
            if (a.stencilBuffer ===
                void 0) a.stencilBuffer = !0;
            a.glTexture = this.context.createTexture();
            var b = c.isPowerOfTwo(a.width) && c.isPowerOfTwo(a.height),
                d = this.getGLInternalFormat(a.format),
                f = this.getGLDataType(a.type);
            a._glFrameBuffer = this.context.createFramebuffer();
            a._glRenderBuffer = this.context.createRenderbuffer();
            this.context.bindTexture(q.TEXTURE_2D, a.glTexture);
            this.updateTextureParameters(a, b);
            this.context.texImage2D(q.TEXTURE_2D, 0, d, a.width, a.height, 0, d, f, null);
            this.setupFrameBuffer(a._glFrameBuffer, a, q.TEXTURE_2D);
            this.setupRenderBuffer(a._glRenderBuffer, a);
            a.generateMipmaps && b && this.context.generateMipmap(q.TEXTURE_2D);
            this.context.bindTexture(q.TEXTURE_2D, null);
            this.context.bindRenderbuffer(q.RENDERBUFFER, null);
            this.context.bindFramebuffer(q.FRAMEBUFFER, null)
        }
        var g;
        a ? (b = a._glFrameBuffer, g = f = 0, d = a.width, a = a.height) : (b = null, f = this.viewportX, g = this.viewportY, d = this.viewportWidth, a = this.viewportHeight);
        if (b !== this.rendererRecord.currentFrameBuffer) this.context.bindFramebuffer(q.FRAMEBUFFER, b), this.context.viewport(f,
            g, d, a), this.rendererRecord.currentFrameBuffer = b, this.rendererRecord.textureRecord = [];
        this.currentWidth = d;
        this.currentHeight = a
    };
    r.prototype.updateRenderTargetMipmap = function (a) {
        this.context.bindTexture(q.TEXTURE_2D, a.glTexture);
        this.context.generateMipmap(q.TEXTURE_2D);
        this.context.bindTexture(q.TEXTURE_2D, null)
    };
    r.prototype.getCapabilitiesString = function () {
        var a = [],
            b;
        for (b in this.capabilities) {
            var c = this.capabilities[b],
                d = "";
            if (c instanceof ArrayBufferView) {
                d += "[";
                for (var f = 0; f < c.length; f++) d += c[f],
                f < c.length - 1 && (d += ",");
                d += "]"
            } else d = c;
            a.push(b + ": " + d)
        }
        return a.join("\n")
    };
    r.prototype._deallocateMeshData = function () {};
    r.prototype._deallocateTexture = function () {};
    r.prototype._deallocateRenderTarget = function () {};
    r.prototype._deallocateShader = function () {};
    return r
});
define("goo/addons/howler/systems/HowlerSystem", ["goo/entities/systems/System", "goo/math/Vector3", "goo/renderer/Renderer"], function (e, c, b) {
    function a(a) {
        e.call(this, "HowlerSystem", ["HowlerComponent"]);
        this.settings = a || {};
        this.settings.scale = this.settings.scale || 1
    }
    a.prototype = Object.create(e.prototype);
    a.prototype.deleted = function (a) {
        var a = a.howlerComponent.sounds,
            b;
        for (b in a) a[b].stop()
    };
    a.prototype.process = function (a) {
        for (var g = 0; g < a.length; g++) {
            var f = a[g],
                e = f.howlerComponent.sounds,
                h = new c;
            h.copy(f.transformComponent.transform.translation);
            var f = b.mainCamera.getViewMatrix().applyPostPoint(h),
                k;
            for (k in e) e[k].pos3d(f.data[0] * this.settings.scale, f.data[1] * this.settings.scale, f.data[2] * this.settings.scale)
        }
    };
    return a
});
define("goo/addons/scripts/PolyBoundingScript", [], function () {
    function e(c) {
        this.collidables = c || []
    }
    e.prototype.addCollidable = function (c) {
        this.collidables.push(c)
    };
    e.prototype.removeAllAt = function (c, b, a) {
        this.collidables = this.collidables.filter(function (d) {
            if (d.bottom <= a && d.top >= a) return !window.PolyK.ContainsPoint(d.poly, c, b)
        })
    };
    e.prototype.run = function (c) {
        for (var c = c.transformComponent, b = c.transform.translation, a = 0; a < this.collidables.length; a++) {
            var d = this.collidables[a];
            if (d.bottom <= b.data[1] && d.top >=
                b.data[1] && window.PolyK.ContainsPoint(d.poly, b.data[0], b.data[2])) {
                a = window.PolyK.ClosestEdge(d.poly, b.data[0], b.data[2]);
                b.data[0] = a.point.x;
                b.data[2] = a.point.y;
                c.setUpdated();
                break
            }
        }
    };
    return e
});
define("goo/addons/soundmanager2/components/SoundManager2Component", ["goo/entities/components/Component"], function (e) {
    function c(b) {
        this.type = "SoundManager2Component";
        this.settings = b || {};
        this.sounds = {}
    }
    c.prototype = Object.create(e.prototype);
    c.prototype.addSound = function (b, a) {
        this.sounds[b] = a
    };
    c.prototype.playSound = function (b) {
        this.sounds[b].soundObject.play()
    };
    return c
});
define("goo/addons/soundmanager2/systems/SoundManager2System", ["goo/entities/systems/System"], function (e) {
    function c() {
        e.call(this, "SoundManager2System", ["SoundManager2Component", "TransformComponent"]);
        this.isReady = !1;
        window.soundManager ? window.soundManager.bind(this).setup({
            url: "swf",
            onready: function () {
                this.isReady = !0
            },
            ontimeout: function () {
                console.warn("Failed to load soundmanager")
            }
        }) : console.warn("SoundManager2System: soundManager global not found")
    }
    c.prototype = Object.create(e.prototype);
    c.prototype.inserted =
        function (b) {
            for (var b = b.soundManager2Component, a = 0; a < b.sounds.length; a++) {
                var c = b.sounds[a],
                    g = window.soundManager.createSound(c);
                c.soundObject = g
            }
    };
    c.prototype.deleted = function () {};
    c.prototype.process = function () {};
    return c
});
define("goo/entities/components/MeshDataComponent", ["goo/renderer/bounds/BoundingSphere", "goo/entities/components/Component"], function (e, c) {
    function b(a) {
        this.type = "MeshDataComponent";
        this.meshData = a;
        this.modelBound = new e;
        this.autoCompute = !0;
        this.currentPose = null
    }
    b.prototype = Object.create(c.prototype);
    b.prototype.setModelBound = function (a, b) {
        this.modelBound = a;
        this.autoCompute = b
    };
    b.prototype.computeBoundFromPoints = function () {
        if (this.autoCompute && this.modelBound !== null) {
            var a = this.meshData.getAttributeBuffer("POSITION");
            if (a !== void 0) this.modelBound.computeFromPoints(a), this.autoCompute = !1
        }
    };
    return b
});
define("goo/entities/components/MeshRendererComponent", ["goo/entities/components/Component"], function (e) {
    function c() {
        this.type = "MeshRendererComponent";
        this.materials = [];
        this.worldBound = null;
        this.cullMode = "Dynamic";
        this.receiveShadows = this.castShadows = !1;
        this.isReflectable = this.isPickable = !0;
        this.hidden = !1
    }
    c.prototype = Object.create(e.prototype);
    c.prototype.updateBounds = function (b, a) {
        this.worldBound = b.transform(a, this.worldBound)
    };
    return c
});
define("goo/addons/terrain/Terrain", "goo/entities/components/MeshDataComponent,goo/entities/components/MeshRendererComponent,goo/renderer/MeshData,goo/renderer/Material,goo/renderer/Shader,goo/renderer/TextureCreator".split(","), function (e, c, b, a, d, g) {
    function f(b) {
        var c = a.createMaterial(i),
            d = (new g).loadTexture2D("../resources/head_diffuse.jpg");
        c.setTexture("DIFFUSE_MAP", d);
        var f = a.createMaterial(i);
        f.setTexture("HEIGHT_MAP", d);
        f.wireframe = !0;
        this.material = c;
        this.material2 = f;
        c = b.createEntity();
        c.addToWorld();
        for (d = 0; d < 6; d++) f = this.createClipmapLevel(b, d, d === 0), c.transformComponent.attachChild(f.transformComponent)
    }
    f.prototype.createClipmapLevel = function (a, b, c) {
        var d = a.createEntity(),
            f = Math.pow(2, b);
        d.transformComponent.transform.scale.set(f, f, 1);
        f = (2 * Math.pow(-1, b + 1) + Math.pow(2, b + 1)) / 6;
        b = b % 2 === 0 ? f : -f;
        d.transformComponent.transform.translation.set(b, -b, 0);
        d.addToWorld();
        this.createQuadEntity(a, d, 0, 0, 3, 3);
        this.createQuadEntity(a, d, 3, 0, 3, 3);
        this.createQuadEntity(a, d, 6, 0, 2, 3);
        this.createQuadEntity(a, d, 8,
            0, 3, 3);
        this.createQuadEntity(a, d, 11, 0, 3, 3);
        this.createQuadEntity(a, d, 0, 3, 3, 3);
        this.createQuadEntity(a, d, 11, 3, 3, 3);
        this.createQuadEntity(a, d, 0, 6, 3, 2);
        this.createQuadEntity(a, d, 11, 6, 3, 2);
        this.createQuadEntity(a, d, 0, 8, 3, 3);
        this.createQuadEntity(a, d, 11, 8, 3, 3);
        this.createQuadEntity(a, d, 0, 11, 3, 3);
        this.createQuadEntity(a, d, 3, 11, 3, 3);
        this.createQuadEntity(a, d, 6, 11, 2, 3);
        this.createQuadEntity(a, d, 8, 11, 3, 3);
        this.createQuadEntity(a, d, 11, 11, 3, 3);
        c && this.createQuadEntity(a, d, 3, 4, 7, 7);
        return d
    };
    f.prototype.createQuadEntity =
        function (a, b, d, f, g, i) {
            d = this.createGrid(d, f, g, i);
            a = a.createEntity();
            b.transformComponent.attachChild(a.transformComponent);
            b = new e(d);
            a.setComponent(b);
            b = new c;
            b.materials.push(this.material2);
            a.setComponent(b);
            a.addToWorld();
            return a
    };
    f.prototype.createGrid = function (a, c, d, f) {
        for (var g = b.defaultMap([b.POSITION, b.TEXCOORD0]), g = new b(g, (d + 1) * (f + 1), d * f * 6), e = g.getAttributeBuffer(b.POSITION), i = g.getAttributeBuffer(b.TEXCOORD0), n = g.getIndexBuffer(), s = 0; s < d + 1; s++)
            for (var r = 0; r < f + 1; r++) {
                var u = r * (d + 1) + s;
                e[u *
                    3 + 0] = s + a - 7;
                e[u * 3 + 1] = r + c - 7;
                e[u * 3 + 2] = 0;
                i[u * 2 + 0] = (s + a) / 15;
                i[u * 2 + 1] = (r + c) / 15
            }
        for (s = 0; s < d; s++)
            for (r = 0; r < f; r++) u = r * (d + 1) + s, a = r * d + s, n[a * 6 + 0] = u, n[a * 6 + 1] = u + 1, n[a * 6 + 2] = u + d + 1, n[a * 6 + 3] = u + 1, n[a * 6 + 4] = u + d + 1 + 1, n[a * 6 + 5] = u + d + 1;
        return g
    };
    var i = {
        attributes: {
            vertexPosition: b.POSITION,
            vertexUV0: b.TEXCOORD0
        },
        uniforms: {
            viewMatrix: d.VIEW_MATRIX,
            projectionMatrix: d.PROJECTION_MATRIX,
            worldMatrix: d.WORLD_MATRIX,
            diffuseMap: "DIFFUSE_MAP",
            time: d.TIME
        },
        vshader: "attribute vec3 vertexPosition;\nattribute vec2 vertexUV0;\nuniform mat4 viewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 worldMatrix;\nuniform float time;\nuniform sampler2D diffuseMap;\nvarying vec4 texCol;\nvoid main(void) {\n\ttexCol = texture2D(diffuseMap, vertexUV0 + vec2(time*0.0));\n\tfloat height = length(texCol.rgb);\n\tgl_Position = projectionMatrix * viewMatrix * worldMatrix * \n\t\tvec4(vertexPosition.x,vertexPosition.y,height*5.0, 1.0);\n}",
        fshader: "precision mediump float;\nvarying vec4 texCol;\nvoid main(void)\n{\n\tgl_FragColor = texCol;\n}"
    };
    return f
});
define("goo/addons/water/FlatWaterRenderer", "goo/renderer/MeshData,goo/renderer/Shader,goo/renderer/Camera,goo/math/Plane,goo/renderer/pass/RenderTarget,goo/math/Vector3,goo/math/Vector4,goo/renderer/Material,goo/renderer/TextureCreator,goo/renderer/shaders/ShaderLib,goo/entities/EventHandler,goo/renderer/shaders/ShaderFragment".split(","), function (e, c, b, a, d, g, f, i, h, k, j, l) {
    function m(c) {
        c = c || {};
        this.useRefraction = c.useRefraction !== void 0 ? c.useRefraction : !0;
        this.waterCamera = new b(45, 1, 0.1, 2E3);
        this.renderList = [];
        this.waterPlane = new a;
        var e = Math.floor(window.innerWidth / (c.divider || 2)),
            j = Math.floor(window.innerHeight / (c.divider || 2));
        this.reflectionTarget = new d(e, j);
        if (this.useRefraction) this.refractionTarget = new d(e, j), this.depthTarget = new d(e, j);
        e = i.createMaterial(o, "WaterMaterial");
        e.shader.defines.REFRACTION = this.useRefraction;
        e.cullState.enabled = !1;
        j = c.normalsUrl || "../resources/water/waternormals3.png";
        e.setTexture("NORMAL_MAP", (new h).loadTexture2D(j));
        e.setTexture("REFLECTION_MAP", this.reflectionTarget);
        this.useRefraction && (e.setTexture("REFRACTION_MAP", this.refractionTarget), e.setTexture("DEPTH_MAP", this.depthTarget));
        this.waterMaterial = e;
        this.followCam = !0;
        this.updateWaterPlaneFromEntity = c.updateWaterPlaneFromEntity !== void 0 ? this.updateWaterPlaneFromEntity : !0;
        this.calcVect = new g;
        this.camReflectDir = new g;
        this.camReflectUp = new g;
        this.camReflectLeft = new g;
        this.camLocation = new g;
        this.camReflectPos = new g;
        this.offset = new g;
        this.clipPlane = new f;
        this.waterEntity = null;
        this.depthMaterial = i.createMaterial(p,
            "depth")
    }
    m.prototype.process = function (a, b, c, d, f) {
        var b = b.filter(function (a) {
            return a.meshRendererComponent.isReflectable
        }),
            g = this.waterPlane;
        this.waterCamera.copy(d);
        if (this.updateWaterPlaneFromEntity) g.constant = this.waterEntity.transformComponent.transform.translation.y;
        var e = d.translation.y > g.constant;
        this.waterEntity.skip = !0;
        if (e) {
            this.useRefraction && (c.process(this.waterCamera, b, this.renderList), this.clipPlane.setd(g.normal.x, -g.normal.y, g.normal.z, g.constant), this.waterCamera.setToObliqueMatrix(this.clipPlane),
                a.render(this.renderList, this.waterCamera, f, this.depthTarget, !0, this.depthMaterial), a.render(this.renderList, this.waterCamera, f, this.refractionTarget, !0));
            var h = this.calcVect,
                i = this.camReflectDir,
                j = this.camReflectUp,
                k = this.camReflectLeft,
                l = this.camLocation,
                m = this.camReflectPos;
            l.set(d.translation);
            var o = g.pseudoDistance(l);
            h.set(g.normal).mul(o * 2);
            m.set(l.sub(h));
            l.set(d.translation).add(d._direction);
            o = g.pseudoDistance(l);
            h.set(g.normal).mul(o * 2);
            i.set(l.sub(h)).sub(m).normalize();
            l.set(d.translation).add(d._up);
            o = g.pseudoDistance(l);
            h.set(g.normal).mul(o * 2);
            j.set(l.sub(h)).sub(m).normalize();
            k.set(j).cross(i).normalize();
            this.waterCamera.translation.set(m);
            this.waterCamera._direction.set(i);
            this.waterCamera._up.set(j);
            this.waterCamera._left.set(k);
            this.waterCamera.normalize();
            this.waterCamera.update();
            if (this.skybox && this.followCam) h = this.skybox.transformComponent.worldTransform, h.translation.setv(m), h.update()
        }
        this.waterMaterial.shader.uniforms.abovewater = e;
        c.process(this.waterCamera, b, this.renderList);
        a.setRenderTarget(this.reflectionTarget);
        a.clear();
        if (this.skybox)
            if (this.skybox instanceof Array) {
                this.clipPlane.setd(g.normal.x, g.normal.y, g.normal.z, g.constant);
                this.waterCamera.setToObliqueMatrix(this.clipPlane, 10);
                for (b = 0; b < this.skybox.length; b++) a.render(this.skybox[b], this.waterCamera, f, this.reflectionTarget, !1), this.skybox[b].skip = !0
            } else a.render(this.skybox, this.waterCamera, f, this.reflectionTarget, !1), this.skybox.skip = !0;
        this.clipPlane.setd(g.normal.x, g.normal.y, g.normal.z, g.constant);
        this.waterCamera.setToObliqueMatrix(this.clipPlane);
        a.render(this.renderList, this.waterCamera, f, this.reflectionTarget, !1);
        this.waterEntity.skip = !1;
        if (this.skybox)
            if (this.skybox instanceof Array)
                for (b = 0; b < this.skybox.length; b++) this.skybox[b].skip = !1;
            else this.skybox.skip = !1;
        if (e && this.skybox && this.followCam) a = d.translation, h = this.skybox.transformComponent.worldTransform, h.translation.setv(a).addv(this.offset), h.update(), this.waterCamera._updatePMatrix = !0
    };
    m.prototype.setSkyBox = function (a) {
        this.skybox = a;
        if (a.meshRendererComponent) this.skybox.meshRendererComponent.materials[0].depthState.enabled = !1, this.skybox.meshRendererComponent.materials[0].renderQueue = 0, this.skybox.meshRendererComponent.cullMode = "Never"
    };
    m.prototype.setWaterEntity = function (a) {
        this.waterEntity = a;
        this.waterEntity.meshRendererComponent.materials[0] = this.waterMaterial
    };
    var o = {
        defines: {
            REFRACTION: !1
        },
        attributes: {
            vertexPosition: e.POSITION,
            vertexNormal: e.NORMAL
        },
        uniforms: {
            viewMatrix: c.VIEW_MATRIX,
            projectionMatrix: c.PROJECTION_MATRIX,
            worldMatrix: c.WORLD_MATRIX,
            cameraPosition: c.CAMERA,
            normalMap: "NORMAL_MAP",
            reflection: "REFLECTION_MAP",
            refraction: "REFRACTION_MAP",
            depthmap: "DEPTH_MAP",
            vertexTangent: [1, 0, 0, 1],
            waterColor: [0.0625, 0.0625, 0.0625],
            abovewater: !0,
            fogColor: [1, 1, 1],
            sunDirection: [0.66, 0.66, 0.33],
            sunColor: [1, 1, 0.5],
            sunShininess: 100,
            sunSpecPower: 4,
            fogStart: 0,
            fogScale: 2E3,
            timeMultiplier: 1,
            time: c.TIME,
            distortionMultiplier: 0.025,
            fresnelPow: 2,
            normalMultiplier: 3,
            fresnelMultiplier: 1,
            waterScale: 5,
            doFog: !0,
            resolution: c.RESOLUTION
        },
        vshader: "attribute vec3 vertexPosition;\nattribute vec3 vertexNormal;\nuniform vec4 vertexTangent;\nuniform mat4 viewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 worldMatrix;\nuniform vec3 cameraPosition;\nuniform float waterScale;\nvarying vec2 texCoord0;\nvarying vec3 eyeVec;\nvarying vec4 viewCoords;\nvarying vec3 worldPos;\nvoid main(void) {\n\tworldPos = (worldMatrix * vec4(vertexPosition, 1.0)).xyz;\n\ttexCoord0 = worldPos.xz * waterScale;\n\tmat3 normalMatrix = mat3(worldMatrix);\n\tvec3 n = normalize(normalMatrix * vec3(vertexNormal.x, vertexNormal.y, -vertexNormal.z));\n\tvec3 t = normalize(normalMatrix * vertexTangent.xyz);\n\tvec3 b = cross(n, t) * vertexTangent.w;\n\tmat3 rotMat = mat3(t, b, n);\n\tvec3 eyeDir = worldPos - cameraPosition;\n\teyeVec = eyeDir * rotMat;\n\tviewCoords = projectionMatrix * viewMatrix * worldMatrix * vec4(vertexPosition, 1.0);\n\tgl_Position = viewCoords;\n}",
        fshader: ["uniform sampler2D normalMap;\nuniform sampler2D reflection;\n#ifdef REFRACTION\nuniform sampler2D refraction;\nuniform sampler2D depthmap;\n#endif\nuniform vec3 waterColor;\nuniform bool abovewater;\nuniform vec3 fogColor;\nuniform float fogStart;\nuniform float fogScale;\nuniform float time;\nuniform float timeMultiplier;\nuniform float distortionMultiplier;\nuniform float fresnelPow;\nuniform vec3 sunDirection;\nuniform vec3 sunColor;\nuniform float sunShininess;\nuniform float sunSpecPower;\nuniform float normalMultiplier;\nuniform float fresnelMultiplier;\nuniform bool doFog;\nuniform vec2 resolution;\nvarying vec2 texCoord0;\nvarying vec3 eyeVec;\nvarying vec4 viewCoords;\nvarying vec3 worldPos;\nvec4 combineTurbulence(in vec2 coords) {\n\tfloat t = time * timeMultiplier;\n\tvec4 coarse1 = texture2D(normalMap, coords * vec2(0.0012, 0.001) + vec2(0.019 * t, 0.021 * t));\n\tvec4 coarse2 = texture2D(normalMap, coords * vec2(0.001, 0.0011) + vec2(-0.017 * t, 0.016 * t));\n\tvec4 detail1 = texture2D(normalMap, coords * vec2(0.008) + vec2(0.06 * t, 0.03 * t));\n\tvec4 detail2 = texture2D(normalMap, coords * vec2(0.006) + vec2(0.05 * t, -0.04 * t));\n\treturn (detail1 * 0.25 + detail2 * 0.25 + coarse1 * 0.75 + coarse2 * 1.0) / 2.25 - 0.48;\n}\n#ifdef REFRACTION",
            l.methods.unpackDepth, "#endif\nvoid main(void)\n{\n\tfloat fogDist = clamp((viewCoords.z-fogStart)/fogScale,0.0,1.0);\n\tvec2 normCoords = texCoord0;\n\tvec4 noise = combineTurbulence(normCoords);\n\tvec3 normalVector = normalize(noise.xyz * vec3(normalMultiplier, normalMultiplier, 1.0));\n\tvec3 localView = normalize(eyeVec);\n\tfloat fresnel = dot(normalize(normalVector * vec3(fresnelMultiplier, fresnelMultiplier, 1.0)), localView);\n\tif ( abovewater == false ) {\n\t\tfresnel = -fresnel;\n\t}\n\tfresnel *= 1.0 - fogDist;\n\tfloat fresnelTerm = 1.0 - fresnel;\n\tfresnelTerm = pow(fresnelTerm, fresnelPow);\n\tfresnelTerm = clamp(fresnelTerm, 0.0, 1.0);\n\tfresnelTerm = fresnelTerm * 0.95 + 0.05;\n\tvec2 projCoord = viewCoords.xy / viewCoords.q;\n\tprojCoord = (projCoord + 1.0) * 0.5;\n\tprojCoord.y -= 1.0 / resolution.y;\n#ifdef REFRACTION\n\tfloat depthUnpack = unpackDepth(texture2D(depthmap, projCoord));\n\tif (depthUnpack > 0.5) {depthUnpack = 0.0;}\n\tfloat depth2 = clamp(depthUnpack * 400.0, 0.0, 1.0);\n\tvec2 projCoordRefr = vec2(projCoord);\n\tprojCoordRefr += (normalVector.xy * distortionMultiplier) * (depth2);\n\tprojCoordRefr = clamp(projCoordRefr, 0.001, 0.999);\n\tdepthUnpack = unpackDepth(texture2D(depthmap, projCoordRefr));\n\tfloat depth = clamp(depthUnpack * 40.0, 0.8, 1.0);\n#endif\n\tprojCoord += (normalVector.xy * distortionMultiplier);\n\tprojCoord = clamp(projCoord, 0.001, 0.999);\n\tif ( abovewater == true ) {\n\t\tprojCoord.x = 1.0 - projCoord.x;\n\t}\n\tvec4 waterColorX = vec4(waterColor, 1.0);\n\tvec4 reflectionColor = texture2D(reflection, projCoord);\n\tif ( abovewater == false ) {\n\t\treflectionColor *= vec4(0.8,0.9,1.0,1.0);\n\t\tvec4 endColor = mix(reflectionColor,waterColorX,fresnelTerm);\n\t\tgl_FragColor = mix(endColor,waterColorX,fogDist);\n\t}\n\telse {\n\t\tvec3 sunSpecReflection = normalize(reflect(-sunDirection, normalVector));\n\t\tfloat sunSpecDirection = max(0.0, dot(localView, sunSpecReflection));\n\t\tvec3 specular = pow(sunSpecDirection, sunShininess) * sunSpecPower * sunColor;\n\t\tvec4 endColor = waterColorX;\n#ifdef REFRACTION\n\t\tvec4 refractionColor = texture2D(refraction, projCoordRefr) * vec4(0.6);\n\t\tendColor = mix(refractionColor, waterColorX, depth);\n#endif\n\t\tendColor = mix(endColor, reflectionColor, fresnelTerm);\n\t\tif (doFog) {\n\t\t\tgl_FragColor = (vec4(specular, 1.0) + mix(endColor,reflectionColor,fogDist)) * (1.0-fogDist) + vec4(fogColor, 1.0) * fogDist;\n\t\t} else {\n\t\t\tgl_FragColor = vec4(specular, 1.0) + mix(endColor,reflectionColor,fogDist);\n\t\t}\n\t}\n}"
        ].join("\n")
    },
        p = {
            attributes: {
                vertexPosition: e.POSITION
            },
            uniforms: {
                viewProjectionMatrix: c.VIEW_PROJECTION_MATRIX,
                worldMatrix: c.WORLD_MATRIX,
                farPlane: c.FAR_PLANE
            },
            vshader: "attribute vec3 vertexPosition;\nuniform mat4 viewProjectionMatrix;\nuniform mat4 worldMatrix;\nvarying vec4 vPosition;\nvoid main(void) {\n\tvPosition = worldMatrix * vec4(vertexPosition, 1.0);\n\tgl_Position = viewProjectionMatrix * vPosition;\n}",
            fshader: ["uniform float farPlane;", l.methods.packDepth, "varying vec4 vPosition;\nvoid main(void)\n{\n\tfloat linearDepth = abs(vPosition.y) / farPlane;\n\tgl_FragColor = packDepth(linearDepth);\n}"].join("\n")
        };
    return m
});
define("goo/addons/water/ProjectedGridWaterRenderer", "goo/renderer/MeshData,goo/renderer/Shader,goo/renderer/Camera,goo/math/Plane,goo/renderer/pass/RenderTarget,goo/renderer/pass/FullscreenPass,goo/math/Vector3,goo/renderer/Material,goo/renderer/TextureCreator,goo/renderer/shaders/ShaderLib,goo/renderer/shaders/ShaderFragment".split(","), function (e, c, b, a, d, g, f, i, h, k, j) {
    function l(c) {
        this.waterCamera = new b(45, 1, 0.1, 2E3);
        this.renderList = [];
        this.waterPlane = new a;
        var c = c || {}, j = window.innerWidth / (c.divider ||
                4),
            l = window.innerHeight / (c.divider || 4);
        this.renderTarget = new d(j, l);
        j = window.innerWidth / (c.divider || 1);
        l = window.innerHeight / (c.divider || 1);
        this.heightTarget = new d(j, l, {
            type: "Float"
        });
        this.normalTarget = new d(j, l, {});
        this.fullscreenPass = new g(k.normalmap);
        this.fullscreenPass.material.shader.uniforms.resolution = [j, l];
        c = this.waterMaterial = i.createMaterial(m, "WaterMaterial");
        c.cullState.enabled = !1;
        c.setTexture("NORMAL_MAP", (new h).loadTexture2D("../resources/water/waternormals3.png"));
        c.setTexture("REFLECTION_MAP",
            this.renderTarget);
        c.setTexture("BUMP_MAP", this.heightTarget);
        c.setTexture("NORMAL_MAP_COARSE", this.normalTarget);
        c = this.materialWire = i.createMaterial(k.simple, "mat");
        c.wireframe = !0;
        c.wireframeColor = [0, 0, 0];
        this.calcVect = new f;
        this.camReflectDir = new f;
        this.camReflectUp = new f;
        this.camReflectLeft = new f;
        this.camLocation = new f;
        this.camReflectPos = new f;
        this.waterEntity = null;
        c = this.projData = new e(e.defaultMap([e.POSITION]), 4, 6);
        c.getAttributeBuffer(e.POSITION).set([0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0]);
        c.getIndexBuffer().set([1,
            3, 0, 2, 3, 1
        ]);
        j = i.createMaterial(o, "mat");
        this.projRenderable = {
            meshData: c,
            materials: [j]
        }
    }
    l.prototype.updateHelper = function (a, b, c, d) {
        var f = this.projData.getAttributeBuffer(e.POSITION);
        f[0] = a.x / a.w;
        f[1] = 0;
        f[2] = a.z / a.w;
        f[3] = b.x / b.w;
        f[4] = 0;
        f[5] = b.z / b.w;
        f[6] = c.x / c.w;
        f[7] = 0;
        f[8] = c.z / c.w;
        f[9] = d.x / d.w;
        f[10] = 0;
        f[11] = d.z / d.w;
        this.projData.setVertexDataUpdated()
    };
    l.prototype.process = function (a, b, c, d, f) {
        var g = this.waterEntity.meshDataComponent.meshData;
        g.update(d);
        this.waterMaterial.shader.uniforms.intersectBottomLeft = [g.intersectBottomLeft.x, g.intersectBottomLeft.y, g.intersectBottomLeft.z, g.intersectBottomLeft.w];
        this.waterMaterial.shader.uniforms.intersectBottomRight = [g.intersectBottomRight.x, g.intersectBottomRight.y, g.intersectBottomRight.z, g.intersectBottomRight.w];
        this.waterMaterial.shader.uniforms.intersectTopLeft = [g.intersectTopLeft.x, g.intersectTopLeft.y, g.intersectTopLeft.z, g.intersectTopLeft.w];
        this.waterMaterial.shader.uniforms.intersectTopRight = [g.intersectTopRight.x, g.intersectTopRight.y, g.intersectTopRight.z,
            g.intersectTopRight.w
        ];
        this.updateHelper(g.intersectBottomLeft, g.intersectBottomRight, g.intersectTopRight, g.intersectTopLeft);
        a.render(this.projRenderable, d, f, this.heightTarget, !0);
        this.fullscreenPass.render(a, this.normalTarget, this.heightTarget, 0);
        var e = this.waterPlane;
        this.waterCamera.copy(d);
        e.constant = this.waterEntity.transformComponent.transform.translation.y;
        if (g = d.translation.y > e.constant) {
            var h = this.calcVect,
                i = this.camReflectDir,
                j = this.camReflectUp,
                k = this.camReflectLeft,
                l = this.camLocation,
                m = this.camReflectPos;
            l.set(d.translation);
            var o = e.pseudoDistance(l);
            h.set(e.normal).mul(o * 2);
            m.set(l.sub(h));
            l.set(d.translation).add(d._direction);
            o = e.pseudoDistance(l);
            h.set(e.normal).mul(o * 2);
            i.set(l.sub(h)).sub(m).normalize();
            l.set(d.translation).add(d._up);
            o = e.pseudoDistance(l);
            h.set(e.normal).mul(o * 2);
            j.set(l.sub(h)).sub(m).normalize();
            k.set(j).cross(i).normalize();
            this.waterCamera.translation.set(m);
            this.waterCamera._direction.set(i);
            this.waterCamera._up.set(j);
            this.waterCamera._left.set(k);
            this.waterCamera.normalize();
            this.waterCamera.update();
            if (this.skybox) e = this.skybox.transformComponent.worldTransform, e.translation.setv(m), e.update()
        }
        this.waterMaterial.shader.uniforms.abovewater = g;
        this.waterEntity.skip = !0;
        this.renderList.length = 0;
        c.process(this.waterCamera, b, this.renderList);
        a.render(this.renderList, this.waterCamera, f, this.renderTarget, !0);
        this.waterEntity.skip = !1;
        if (g && this.skybox) a = d.translation, e = this.skybox.transformComponent.worldTransform, e.translation.setv(a), e.update()
    };
    l.prototype.setSkyBox = function (a) {
        this.skybox = a
    };
    l.prototype.setWaterEntity = function (a) {
        this.waterEntity = a;
        this.waterEntity.meshRendererComponent.cullMode = "Never";
        this.waterEntity.meshRendererComponent.materials[0] = this.waterMaterial;
        a = this.waterEntity.meshDataComponent.meshData;
        this.waterMaterial.shader.uniforms.density = [a.densityX, a.densityY]
    };
    var m = {
        attributes: {
            vertexUV0: e.TEXCOORD0
        },
        uniforms: {
            viewMatrix: c.VIEW_MATRIX,
            projectionMatrix: c.PROJECTION_MATRIX,
            worldMatrix: c.WORLD_MATRIX,
            cameraPosition: c.CAMERA,
            normalMap: "NORMAL_MAP",
            reflection: "REFLECTION_MAP",
            bump: "BUMP_MAP",
            normalMapCoarse: "NORMAL_MAP_COARSE",
            vertexNormal: [0, -1, 0],
            vertexTangent: [1, 0, 0, 1],
            waterColor: [15, 15, 15],
            abovewater: !0,
            fogColor: [1, 1, 1, 1],
            sunDirection: [0.66, -0.1, 0.66],
            coarseStrength: 0.25,
            detailStrength: 2,
            fogStart: 0,
            camNear: c.NEAR_PLANE,
            camFar: c.FAR_PLANE,
            time: c.TIME,
            intersectBottomLeft: [0, 0, 0, 0],
            intersectTopLeft: [0, 0, 0, 0],
            intersectTopRight: [0, 0, 0, 0],
            intersectBottomRight: [0, 0, 0, 0],
            grid: !1,
            heightMultiplier: 50,
            density: [1, 1]
        },
        vshader: "attribute vec2 vertexUV0;\nuniform vec3 vertexNormal;\nuniform vec4 vertexTangent;\nuniform mat4 viewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 worldMatrix;\nuniform vec3 cameraPosition;\nuniform float time;\nuniform vec3 sunDirection;\nuniform float coarseStrength;\nuniform float heightMultiplier;\nuniform sampler2D bump;\nuniform vec4 intersectBottomLeft;\nuniform vec4 intersectTopLeft;\nuniform vec4 intersectTopRight;\nuniform vec4 intersectBottomRight;\nvarying vec2 texCoord0;\nvarying vec2 texCoord1;\nvarying vec3 eyeVec;\nvarying vec3 sunDir;\nvarying vec4 viewCoords;\nvarying vec3 worldPos;\nvarying vec3 normal;\nvoid main(void) {\n\tvec4 pointTop = mix(intersectTopLeft, intersectTopRight, vertexUV0.x);\n\tvec4 pointBottom = mix(intersectBottomLeft, intersectBottomRight, vertexUV0.x);\n\tvec4 pointFinal = mix(pointTop, pointBottom, 1.0 - vertexUV0.y);\n\tpointFinal.xz /= pointFinal.w;\n\tpointFinal.y = 0.0;\n\tvec4 screenpos = projectionMatrix * viewMatrix * worldMatrix * vec4(pointFinal.xyz, 1.0);\n\tvec2 projCoord = screenpos.xy / screenpos.q;\n\tprojCoord = (projCoord + 1.0) * 0.5;\n\tfloat height = texture2D(bump, projCoord).x;\n\tpointFinal.y = height * heightMultiplier;\n\ttexCoord1 = vertexUV0;\n\tvec4 pos = worldMatrix * vec4(pointFinal.xyz, 1.0);\n\tworldPos = pos.xyz;\n\ttexCoord0 = worldPos.xz * 2.0;\n\tmat3 normalMatrix = mat3(worldMatrix);\n vec3 n = normalize(normalMatrix * vertexNormal);\n\tvec3 t = normalize(normalMatrix * vertexTangent.xyz);\n\tvec3 b = cross(n, t) * vertexTangent.w;\n\tmat3 rotMat = mat3(t, b, n);\n\tvec3 eyeDir = worldPos - cameraPosition;\n\teyeVec = eyeDir * rotMat;\n\tsunDir = sunDirection * rotMat;\n\tviewCoords = projectionMatrix * viewMatrix * pos;\n\tgl_Position = viewCoords;\n}",
        fshader: "uniform sampler2D normalMap;\nuniform sampler2D reflection;\nuniform sampler2D normalMapCoarse;\nuniform vec3 waterColor;\nuniform bool abovewater;\nuniform vec4 fogColor;\nuniform float time;\nuniform bool grid;\nuniform vec2 density;\nuniform float camNear;\nuniform float camFar;\nuniform float fogStart;\nuniform float coarseStrength;\nuniform float detailStrength;\nvarying vec2 texCoord0;\nvarying vec2 texCoord1;\nvarying vec3 eyeVec;\nvarying vec3 sunDir;\nvarying vec4 viewCoords;\nvarying vec3 worldPos;\nvarying vec3 normal;\nconst vec3 sunColor = vec3(1.0, 0.96, 0.96);\nvec4 getNoise(vec2 uv) {\n    vec2 uv0 = (uv/123.0)+vec2(time/17.0, time/29.0);\n    vec2 uv1 = uv/127.0-vec2(time/-19.0, time/31.0);\n    vec2 uv2 = uv/vec2(897.0, 983.0)+vec2(time/51.0, time/47.0);\n    vec2 uv3 = uv/vec2(991.0, 877.0)-vec2(time/59.0, time/-63.0);\n    vec4 noise = (texture2D(normalMap, uv0)) +\n                 (texture2D(normalMap, uv1)) +\n                 (texture2D(normalMap, uv2)*3.0) +\n                 (texture2D(normalMap, uv3)*3.0);\n    return noise/4.0-1.0;\n}\nvoid sunLight(const vec3 surfaceNormal, const vec3 eyeDirection, float shiny, float spec, float diffuse,\n              inout vec3 diffuseColor, inout vec3 specularColor){\n    vec3 reflection = normalize(reflect(-sunDir, surfaceNormal));\n    float direction = max(0.0, dot(eyeDirection, reflection));\n    specularColor += pow(direction, shiny)*sunColor*spec;\n    diffuseColor += max(dot(sunDir, surfaceNormal),0.0)*sunColor*diffuse;\n}\nvoid main(void)\n{\n\tvec2 projCoord = viewCoords.xy / viewCoords.q;\n\tprojCoord = (projCoord + 1.0) * 0.5;\n\tfloat fs = camFar * fogStart;\n\tfloat fogDist = clamp(max(viewCoords.z - fs, 0.0)/(camFar - camNear - fs), 0.0, 1.0);\n\tvec3 coarseNormal = texture2D(normalMapCoarse, projCoord).xyz * 2.0 - 1.0;\n\tvec2 normCoords = texCoord0;\n\tvec4 noise = getNoise(normCoords);\n\tvec3 normalVector = normalize(noise.xyz * vec3(1.8 * detailStrength, 1.8 * detailStrength, 1.0) + coarseNormal.xyz * vec3(1.8 * coarseStrength, 1.8 * coarseStrength, 1.0));\n\tvec3 localView = normalize(eyeVec);\n\tfloat fresnel = dot(normalize(normalVector*vec3(1.0, 1.0, 1.0)), localView);\n\tif ( abovewater == false ) {\n\t\tfresnel = -fresnel;\n\t}\n\tfloat fresnelTerm = 1.0 - fresnel;\n\tfresnelTerm *= fresnelTerm;\n\tfresnelTerm *= fresnelTerm;\n\tfresnelTerm = fresnelTerm * 0.95 + 0.05;\n\tif ( abovewater == true ) {\n\t\tprojCoord.x = 1.0 - projCoord.x;\n\t}\n\tprojCoord += (normalVector.xy * 0.05);\n\tprojCoord = clamp(projCoord, 0.001, 0.999);\n vec4 waterColorX = vec4(waterColor / 255.0, 1.0);\n\tvec4 reflectionColor = texture2D(reflection, projCoord);\n\tif ( abovewater == false ) {\n\t\treflectionColor *= vec4(0.8,0.9,1.0,1.0);\n\t\tvec4 endColor = mix(reflectionColor,waterColorX,fresnelTerm);\n\t\tgl_FragColor = mix(endColor,waterColorX,fogDist);\n\t}\n\telse {\n\t\tvec3 diffuse = vec3(0.0);\n\t\tvec3 specular = vec3(0.0);\n\t    sunLight(normalVector, localView, 100.0, 2.0, 0.4, diffuse, specular);\n\t\tvec4 endColor = mix(waterColorX,reflectionColor,fresnelTerm);\n\t\tgl_FragColor = mix(vec4(diffuse*0.0 + specular, 1.0) + mix(endColor,reflectionColor,fogDist), fogColor, fogDist);\n\t}\n\tif (grid) {\n\t\tvec2 low = abs(fract(texCoord1*density)-0.5);\n\t\tfloat dist = 1.0 - step(min(low.x, low.y), 0.05);\n\t\tgl_FragColor *= vec4(dist);\n\t}\n}"
    },
        o = {
            attributes: {
                vertexPosition: e.POSITION
            },
            uniforms: {
                viewMatrix: c.VIEW_MATRIX,
                projectionMatrix: c.PROJECTION_MATRIX,
                worldMatrix: c.WORLD_MATRIX,
                time: c.TIME
            },
            vshader: "attribute vec3 vertexPosition;\nuniform mat4 viewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 worldMatrix;\nvarying vec4 worldPos;\nvarying vec4 viewCoords;\nvoid main(void) {\n\tworldPos = worldMatrix * vec4(vertexPosition, 1.0);\n\tviewCoords = viewMatrix * worldPos;\n\tgl_Position = projectionMatrix * viewMatrix * worldPos;\n}",
            fshader: ["precision mediump float;\nuniform float time;\nvarying vec4 worldPos;\nvarying vec4 viewCoords;", j.noise3d, "vec4 getNoise(sampler2D map, vec2 uv) {\n    vec2 uv0 = (uv/223.0)+vec2(time/17.0, time/29.0);\n    vec2 uv1 = uv/327.0-vec2(time/-19.0, time/31.0);\n    vec2 uv2 = uv/vec2(697.0, 983.0)+vec2(time/151.0, time/147.0);\n    vec2 uv3 = uv/vec2(791.0, 877.0)-vec2(time/259.0, time/263.0);\n    vec4 noise = (texture2D(map, uv0)*0.0) +\n                 (texture2D(map, uv1)*0.0) +\n                 (texture2D(map, uv2)*0.0) +\n                 (texture2D(map, uv3)*10.0);\n    return noise/5.0-1.0;\n}\nvoid main(void)\n{\n\tfloat fogDist = clamp(-viewCoords.z / 1000.0, 0.0, 1.0);\n\tgl_FragColor = vec4((snoise(vec3(worldPos.xz * 0.008, time * 0.4))+snoise(vec3(worldPos.xz * 0.02, time * 0.8))*0.5)/10.0);\n}"].join("\n")
        };
    return l
});
define("goo/animation/Joint", ["goo/math/Transform"], function (e) {
    function c(b) {
        this._name = b;
        this._parentIndex = this._index = 0;
        this._inverseBindPose = new e
    }
    c.NO_PARENT = -32768;
    return c
});
define("goo/animation/Skeleton", ["goo/animation/Joint"], function (e) {
    function c(b, a) {
        this._name = b;
        this._joints = a
    }
    c.prototype.copy = function () {
        for (var b = this._name, a = this._joints, d = [], g = 0, f = a.length; g < f; g++) {
            var i = a[g],
                h = new e(i._name);
            h._index = i._index;
            h._parentIndex = i._parentIndex;
            h._inverseBindPose.copy(i._inverseBindPose);
            h._inverseBindPose.update();
            d[g] = h
        }
        return new c(b, d)
    };
    return c
});
define("goo/animation/SkeletonPose", ["goo/math/Transform", "goo/animation/Joint", "goo/math/Matrix4x4"], function (e, c, b) {
    function a(a) {
        this._skeleton = a;
        this._localTransforms = [];
        this._globalTransforms = [];
        this._matrixPalette = [];
        this._poseListeners = [];
        for (var a = this._skeleton._joints.length, c = 0; c < a; c++) this._localTransforms[c] = new e;
        for (c = 0; c < a; c++) this._globalTransforms[c] = new e;
        for (c = 0; c < a; c++) this._matrixPalette[c] = new b;
        this.setToBindPose()
    }
    a.prototype.setToBindPose = function () {
        for (var a = 0; a < this._localTransforms.length; a++) {
            this._localTransforms[a].matrix.copy(this._skeleton._joints[a]._inverseBindPose.matrix).invert();
            var g = this._skeleton._joints[a]._parentIndex;
            g !== c.NO_PARENT && b.combine(this._skeleton._joints[g]._inverseBindPose.matrix, this._localTransforms[a].matrix, this._localTransforms[a].matrix)
        }
        this.updateTransforms()
    };
    a.prototype.updateTransforms = function () {
        for (var a = 0; a < this._skeleton._joints.length; a++) {
            var g = this._skeleton._joints[a]._parentIndex;
            g !== c.NO_PARENT ? b.combine(this._globalTransforms[g].matrix, this._localTransforms[a].matrix, this._globalTransforms[a].matrix) : this._globalTransforms[a].matrix.copy(this._localTransforms[a].matrix);
            b.combine(this._globalTransforms[a].matrix, this._skeleton._joints[a]._inverseBindPose.matrix, this._matrixPalette[a])
        }
        this.firePoseUpdated()
    };
    a.prototype.firePoseUpdated = function () {
        for (var a = this._poseListeners.length - 1; a >= 0; a--) this._poseListeners[a].poseUpdated(this)
    };
    return a
});
define("goo/animation/clip/TransformData", ["goo/math/Quaternion", "goo/math/Vector3"], function (e, c) {
    function b(a) {
        this._rotation = (new e).copy(a ? a._rotation : e.IDENTITY);
        this._scale = (new c).copy(a ? a._scale : c.ONE);
        this._translation = (new c).copy(a ? a._translation : c.ZERO)
    }
    b.prototype.applyTo = function (a) {
        a.setIdentity();
        a.rotation.copyQuaternion(this._rotation);
        a.scale.setv(this._scale);
        a.translation.setv(this._translation);
        a.update()
    };
    b.prototype.set = function (a) {
        this._rotation.copy(a._rotation);
        this._scale.copy(a._scale);
        this._translation.copy(a._translation)
    };
    b.prototype.blend = function (a, c, g) {
        g = g ? g : new b;
        g._translation.setv(this._translation).lerp(a._translation, c);
        g._scale.setv(this._scale).lerp(a._scale, c);
        e.slerp(this._rotation, a._rotation, c, g._rotation);
        return g
    };
    return b
});
define("goo/animation/blendtree/BinaryLERPSource", ["goo/math/MathUtils", "goo/animation/clip/TransformData"], function (e, c) {
    function b(a, b, c) {
        this._sourceA = a ? a : null;
        this._sourceB = b ? b : null;
        this.blendWeight = c ? c : null
    }
    b.prototype.getSourceData = function () {
        var a = this._sourceA ? this._sourceA.getSourceData() : null,
            c = this._sourceB ? this._sourceB.getSourceData() : null;
        return b.combineSourceData(a, c, this.blendWeight)
    };
    b.prototype.setTime = function (a) {
        var b = !1,
            c = !1;
        this._sourceA && (b = this._sourceA.setTime(a));
        this._sourceB &&
            (c = this._sourceB.setTime(a));
        return b || c
    };
    b.prototype.resetClips = function (a) {
        this._sourceA && this._sourceA.resetClips(a);
        this._sourceB && this._sourceB.resetClips(a)
    };
    b.prototype.setTimeScale = function (a) {
        this._sourceA.setTimeScale(a);
        this._sourceB.setTimeScale(a)
    };
    b.prototype.isActive = function () {
        var a = !1;
        this._sourceA && (a = a || this._sourceA.isActive());
        this._sourceB && (a = a || this._sourceB.isActive());
        return a
    };
    b.combineSourceData = function (a, d, g, f) {
        if (d) {
            if (!a) return d
        } else return a;
        var f = f ? f : {}, e;
        for (e in a) {
            var h =
                a[e],
                k = d[e];
            isNaN(h) ? h instanceof c ? k ? f[e] = h.blend(k, g, f[e]) : f[e] ? f[e].set(h) : f[e] = new h.constructor(h) : f[e] = h : b.blendFloatValues(f, e, g, h, k)
        }
        for (e in d) f[e] || (f[e] = d[e]);
        return f
    };
    b.blendFloatValues = function (a, b, c, f, i) {
        a[b] = isNaN(i) ? f : e.lerp(c, f[0], i[0])
    };
    return b
});
define("goo/animation/clip/AnimationClipInstance", ["goo/entities/World"], function (e) {
    function c() {
        this._active = !0;
        this._loopCount = 0;
        this._timeScale = 1;
        this._prevUnscaledClockTime = this._prevClockTime = this._startTime = 0;
        this._clipStateObjects = {}
    }
    c.prototype.setTimeScale = function (b, a) {
        a = a || e.time;
        if (this._active && this._timeScale !== b)
            if (this._timeScale !== 0 && b !== 0) {
                var c = a,
                    g = c - this._startTime;
                g *= this._timeScale;
                g /= b;
                this._startTime = c - g
            } else if (this._timeScale === 0) this._startTime = a - this._prevUnscaledClockTime;
        this._timeScale = b
    };
    c.prototype.getApplyTo = function (b) {
        var a = b._channelName,
            c = this._clipStateObjects[a];
        c || (c = b.createStateDataObject(), this._clipStateObjects[a] = c);
        return c
    };
    return c
});
define("goo/animation/blendtree/ClipSource", ["goo/math/MathUtils", "goo/animation/clip/AnimationClipInstance"], function (e, c) {
    function b(a, b, g) {
        this._clip = a;
        this._clipInstance = new c;
        this._filterChannels = {};
        if (b && g) {
            this._filter = ["Exclude", "Include"].indexOf(b) > -1 ? b : null;
            for (a = 0; a < g.length; a++) this._filterChannels[g[a]] = !0
        }
    }
    b.prototype.setTime = function (a) {
        var b = this._clipInstance;
        if (!b._startTime) b._startTime = a;
        if (b._active) {
            b._timeScale !== 0 ? (b._prevUnscaledClockTime = a - b._startTime, a = b._timeScale * b._prevUnscaledClockTime,
                b._prevClockTime = a) : a = b._prevClockTime;
            var c = this._clip._maxTime;
            if (c === -1) return !1;
            if (c !== 0 && (b._loopCount === -1 || b._loopCount > 1 && c * b._loopCount >= Math.abs(a) ? a < 0 ? a = c + a % c : a %= c : a < 0 && (a = c + a), a > c || a < 0)) a = e.clamp(a, 0, c), b._active = !1;
            this._clip.update(a, b)
        }
        return b._active
    };
    b.prototype.resetClips = function (a) {
        this._clipInstance._startTime = a;
        this._clipInstance._active = !0
    };
    b.prototype.setTimeScale = function (a) {
        this._clipInstance.setTimeScale(a)
    };
    b.prototype.isActive = function () {
        return this._clipInstance._active &&
            this._clip._maxTime !== -1
    };
    b.prototype.getSourceData = function () {
        if (!this._filter || !this._filterChannels) return this._clipInstance._clipStateObjects;
        var a = this._clipInstance._clipStateObjects,
            b = {}, c = this._filter === "Include",
            f;
        for (f in a) this._filterChannels[f] !== void 0 === c && (b[f] = a[f]);
        return b
    };
    return b
});
define("goo/animation/clip/AbstractAnimationChannel", [], function () {
    function e(c, b, a) {
        this._blendType = a || "Linear";
        this._channelName = c;
        this._times = (b instanceof Array || b instanceof Float32Array) && b.length ? new Float32Array(b) : [];
        this._lastStartFrame = 0
    }
    e.prototype.getSampleCount = function () {
        return this._times.length
    };
    e.prototype.getMaxTime = function () {
        return this._times.length ? this._times[this._times.length - 1] : 0
    };
    e.prototype.updateSample = function (c, b) {
        var a = this._times.length;
        if (a) {
            var d = a - 1;
            if (c < 0 || a ===
                1) this.setCurrentSample(0, 0, b);
            else if (c >= this._times[d]) this.setCurrentSample(d, 0, b);
            else {
                d = 0;
                if (c >= this._times[this._lastStartFrame])
                    for (var g = d = this._lastStartFrame; g < a - 1; g++) {
                        if (this._times[g] >= c) break;
                        d = g
                    } else
                        for (g = 0; g < this._lastStartFrame; g++) {
                            if (this._times[g] >= c) break;
                            d = g
                        }
                this.setCurrentSample(d, (c - this._times[d]) / (this._times[d + 1] - this._times[d]), b);
                this._lastStartFrame = d
            }
        }
    };
    return e
});
define("goo/animation/clip/TransformChannel", ["goo/animation/clip/AbstractAnimationChannel", "goo/animation/clip/TransformData", "goo/math/Quaternion", "goo/math/Vector3"], function (e, c, b, a) {
    function d(c, d, i, h, k, j) {
        e.call(this, c, d, j);
        if (i.length / 4 !== d.length || h.length / 3 !== d.length || k.length / 3 !== d.length) throw Error("All provided arrays must be the same length (accounting for type)! Channel: " + c);
        this._rotations = new Float32Array(i);
        this._translations = new Float32Array(h);
        this._scales = new Float32Array(k);
        this.tmpVec = new a;
        this.tmpQuat = new b;
        this.tmpQuat2 = new b
    }
    d.prototype = Object.create(e.prototype);
    d.prototype.createStateDataObject = function () {
        return new c
    };
    d.prototype.setCurrentSample = function (a, c, d) {
        var e = a * 4,
            k = a * 3,
            j = (a + 1) * 4,
            a = (a + 1) * 3;
        c === 0 ? (d._rotation.data[0] = this._rotations[e + 0], d._rotation.data[1] = this._rotations[e + 1], d._rotation.data[2] = this._rotations[e + 2], d._rotation.data[3] = this._rotations[e + 3], d._translation.data[0] = this._translations[k + 0], d._translation.data[1] = this._translations[k + 1],
            d._translation.data[2] = this._translations[k + 2], d._scale.data[0] = this._scales[k + 0], d._scale.data[1] = this._scales[k + 1], d._scale.data[2] = this._scales[k + 2]) : c === 1 ? (d._rotation.data[0] = this._rotations[j + 0], d._rotation.data[1] = this._rotations[j + 1], d._rotation.data[2] = this._rotations[j + 2], d._rotation.data[3] = this._rotations[j + 3], d._translation.data[0] = this._translations[a + 0], d._translation.data[1] = this._translations[a + 1], d._translation.data[2] = this._translations[a + 2], d._scale.data[0] = this._scales[a + 0], d._scale.data[1] =
            this._scales[a + 1], d._scale.data[2] = this._scales[a + 2]) : (d._rotation.data[0] = this._rotations[e + 0], d._rotation.data[1] = this._rotations[e + 1], d._rotation.data[2] = this._rotations[e + 2], d._rotation.data[3] = this._rotations[e + 3], this.tmpQuat.data[0] = this._rotations[j + 0], this.tmpQuat.data[1] = this._rotations[j + 1], this.tmpQuat.data[2] = this._rotations[j + 2], this.tmpQuat.data[3] = this._rotations[j + 3], d._rotation.equals(this.tmpQuat) || (b.slerp(d._rotation, this.tmpQuat, c, this.tmpQuat2), d._rotation.setv(this.tmpQuat2)),
            d._translation.data[0] = (1 - c) * this._translations[k + 0] + c * this._translations[a + 0], d._translation.data[1] = (1 - c) * this._translations[k + 1] + c * this._translations[a + 1], d._translation.data[2] = (1 - c) * this._translations[k + 2] + c * this._translations[a + 2], d._scale.data[0] = (1 - c) * this._scales[k + 0] + c * this._scales[a + 0], d._scale.data[1] = (1 - c) * this._scales[k + 1] + c * this._scales[a + 1], d._scale.data[2] = (1 - c) * this._scales[k + 2] + c * this._scales[a + 2])
    };
    d.prototype.getData = function (a, b) {
        var d = b ? b : new c;
        d.setRotation(this._rotations[a]);
        d.setScale(this._scales[a]);
        d.setTranslation(this._translations[a]);
        return d
    };
    return d
});
define("goo/animation/clip/JointData", ["goo/animation/clip/TransformData"], function (e) {
    function c(b) {
        e.call(this, b);
        this._jointIndex = b ? b._jointIndex : 0
    }
    c.prototype = Object.create(e.prototype);
    c.prototype.constructor = c;
    c.prototype.set = function (b) {
        e.prototype.set.call(this, b);
        this._jointIndex = b._jointIndex
    };
    c.prototype.blend = function (b, a, d) {
        if (d) {
            if (d instanceof c) d._jointIndex = this._jointIndex
        } else d = new c, d._jointIndex = this._jointIndex;
        return e.prototype.blend.call(this, b, a, d)
    };
    return c
});
define("goo/animation/clip/JointChannel", ["goo/animation/clip/TransformChannel", "goo/animation/clip/JointData"], function (e, c) {
    function b(a, c, g, f, i, h, k) {
        e.call(this, b.JOINT_CHANNEL_NAME + c, g, f, i, h, k);
        this._jointName = a;
        this._jointIndex = c
    }
    b.prototype = Object.create(e.prototype);
    b.JOINT_CHANNEL_NAME = "_jnt";
    b.prototype.createStateDataObject = function () {
        return new c
    };
    b.prototype.setCurrentSample = function (a, b, c) {
        e.prototype.setCurrentSample.call(this, a, b, c);
        c._jointIndex = this._jointIndex
    };
    b.prototype.getData =
        function (a, b) {
            var g = b ? b : new c;
            e.prototype.getData.call(this, a, g);
            g._jointIndex = this._jointIndex;
            return g
    };
    return b
});
define("goo/animation/blendtree/ExclusiveClipSource", ["goo/animation/clip/JointChannel", "goo/animation/blendtree/ClipSource"], function (e, c) {
    function b(a) {
        c.call(this, a);
        this._disabledChannels = {}
    }
    b.prototype = Object.create(c.prototype);
    b.prototype.clearDisabled = function () {
        this._disabledChannels = {}
    };
    b.prototype.addDisabledChannels = function () {
        if (arguments.length === 1 && typeof arguments[0] === "object")
            for (var a = 0; a < arguments[0].length; a++) this._disabledChannels[arguments[0][a]] = !0;
        else
            for (a = 0; a < arguments.length; a++) this._disabledChannels[arguments[a]] = !0
    };
    b.prototype.addDisabledJoints = function () {
        if (arguments.length === 1 && typeof arguments[0] === "object")
            for (var a = 0; a < arguments[0].length; a++) {
                var b = e.JOINT_CHANNEL_NAME + arguments[0][a];
                this._disabledChannels[b] = !0
            } else
                for (a = 0; a < arguments.length; a++) b = e.JOINT_CHANNEL_NAME + arguments[a], this._disabledChannels[b] = !0
    };
    b.prototype.getSourceData = function () {
        var a = c.prototype.getSourceData.call(this),
            b = {}, g;
        for (g in a) this._disabledChannels[g] || (b[g] = a[g]);
        return b
    };
    return b
});
define("goo/animation/blendtree/FrozenClipSource", [], function () {
    function e(c, b) {
        this._source = c;
        this._time = b
    }
    e.prototype.getSourceData = function () {
        return this._source.getSourceData()
    };
    e.prototype.resetClips = function () {
        this._source.resetClips(0)
    };
    e.prototype.setTime = function () {
        this._source.setTime(this._time);
        return !0
    };
    e.prototype.isActive = function () {
        return !0
    };
    e.prototype.setTimeScale = function () {};
    return e
});
define("goo/animation/blendtree/InclusiveClipSource", ["goo/animation/clip/JointChannel", "goo/animation/blendtree/ClipSource"], function (e, c) {
    function b(a) {
        c.call(this, a);
        this._enabledChannels = {}
    }
    b.prototype = Object.create(c.prototype);
    b.prototype.clearEnabled = function () {
        this._enabledChannels = {}
    };
    b.prototype.addEnabledChannels = function () {
        if (arguments.length === 1 && typeof arguments[0] === "object")
            for (var a = 0; a < arguments[0].length; a++) this._enabledChannels[arguments[0][a]] = !0;
        else
            for (a = 0; a < arguments.length; a++) this._enabledChannels[arguments[a]] = !0
    };
    b.prototype.addEnabledJoints = function () {
        if (arguments.length === 1 && typeof arguments[0] === "object")
            for (var a = 0; a < arguments[0].length; a++) {
                var b = e.JOINT_CHANNEL_NAME + arguments[0][a];
                this._enabledChannels[b] = !0
            } else
                for (a = 0; a < arguments.length; a++) b = e.JOINT_CHANNEL_NAME + arguments[a], this._enabledChannels[b] = !0
    };
    b.prototype.getSourceData = function () {
        var a = c.prototype.getSourceData.call(this),
            b = {}, g;
        for (g in this._enabledChannels) this._enabledChannels[g] && (b[g] = a[g]);
        return b
    };
    return b
});
define("goo/animation/blendtree/ManagedTransformSource", ["goo/animation/clip/JointChannel", "goo/animation/clip/JointData", "goo/animation/clip/JointChannel", "goo/animation/clip/JointData"], function (e, c, b, a) {
    function d(a) {
        this._sourceName = a ? a : null;
        this._data = {}
    }
    d.prototype.setTranslation = function (b, c) {
        var d = this._data[b];
        d instanceof a && d._translation.setv(c)
    };
    d.prototype.setScale = function (b, c) {
        var d = this._data[b];
        d instanceof a && d._scale.setv(c)
    };
    d.prototype.setRotation = function (b, c) {
        var d = this._data[b];
        d instanceof a && d._rotation.set(c)
    };
    d.prototype.initFromClip = function (a, b, c) {
        if (b === "Include" && c && c.length)
            for (var d = 0, e = c.length; d < e; d++) {
                var j = c[d],
                    l = a.findChannelByName(j),
                    l = l.getData(0);
                this._data[j] = l
            } else {
                d = 0;
                for (e = a._channels.length; d < e; d++) l = a._channels[d], j = l._channelName, b === "Exclude" && c && c.length && c.indexOf(j) > -1 && (l = l.getData(0), this._data[j] = l)
            }
    };
    d.prototype.resetClips = function () {};
    d.prototype.setTimeScale = function () {};
    d.prototype.setTime = function () {
        return !0
    };
    d.prototype.isActive = function () {
        return !0
    };
    d.prototype.getChannelData = function (a) {
        return this._data[a]
    };
    d.prototype.getSourceData = function () {
        return this._data
    };
    return d
});
define("goo/animation/clip/AnimationClip", [], function () {
    function e(c, b) {
        this._name = c;
        this._channels = b || [];
        this._maxTime = -1;
        this.updateMaxTimeIndex()
    }
    e.prototype.update = function (c, b) {
        for (var a = 0, d = this._channels.length; a < d; ++a) {
            var g = this._channels[a],
                f = b.getApplyTo(g);
            g.updateSample(c, f)
        }
    };
    e.prototype.addChannel = function (c) {
        this._channels.push(c);
        this.updateMaxTimeIndex()
    };
    e.prototype.removeChannel = function (c) {
        c = this._channels.indexOf(c);
        return c >= 0 ? (this._channels.splice(c, 1), this.updateMaxTimeIndex(), !0) : !1
    };
    e.prototype.findChannelByName = function (c) {
        for (var b = 0, a = this._channels.length; b < a; ++b) {
            var d = this._channels[b];
            if (c === d._channelName) return d
        }
        return null
    };
    e.prototype.updateMaxTimeIndex = function () {
        this._maxTime = -1;
        for (var c, b = 0; b < this._channels.length; b++)
            if (c = this._channels[b].getMaxTime(), c > this._maxTime) this._maxTime = c
    };
    e.prototype.toString = function () {
        return this._name + this._channels.length
    };
    return e
});
define("goo/animation/clip/InterpolatedFloatChannel", ["goo/animation/clip/AbstractAnimationChannel", "goo/math/MathUtils"], function (e, c) {
    function b(a, b, c, f) {
        e.call(this, a, b, f);
        this._values = c ? c.slice(0) : null
    }
    b.prototype = Object.create(e.prototype);
    b.prototype.createStateDataObject = function () {
        return [0]
    };
    b.prototype.setCurrentSample = function (a, b, g) {
        g[0] = c.lerp(b, this._values[a], this._values[a + 1])
    };
    b.prototype.getData = function (a, b) {
        var c = b || [];
        c[0] = this._values[a];
        return c
    };
    return b
});
define("goo/animation/clip/TriggerData", [], function () {
    function e() {
        this._currentTriggers = [];
        this._currentIndex = -1;
        this.armed = !1
    }
    e.prototype.arm = function (c, b) {
        if (b === null || b.length === 0) this._currentTriggers.length = 0, this.armed = !1;
        else if (c !== this._currentIndex) {
            for (var a = this._currentTriggers.length = 0, d = b.length; a < d; a++) b[a] && b[a] !== "" && this._currentTriggers.push(b[a]);
            this.armed = !0
        }
        this._currentIndex = c
    };
    return e
});
define("goo/animation/clip/TriggerChannel", ["goo/animation/clip/AbstractAnimationChannel", "goo/animation/clip/TriggerData"], function (e, c) {
    function b(a, b, c, f) {
        e.call(this, a, b, f);
        this._keys = c ? c.slice(0) : null;
        this.guarantee = !1
    }
    b.prototype = Object.create(e.prototype);
    b.prototype.createStateDataObject = function () {
        return new c
    };
    b.prototype.setCurrentSample = function (a, b, c) {
        var f = c._currentIndex,
            a = b !== 1 ? a : a + 1;
        if (f === a || !this.guarantee) c.arm(a, [this._keys[a]]);
        else {
            b = [];
            if (f > a) {
                for (f += 1; f < this._keys.length; f++) b.push(this._keys[f]);
                f = -1
            }
            for (f += 1; f <= a; f++) b.push(this._keys[f]);
            c.arm(a, b)
        }
    };
    return b
});
define("goo/animation/state/AbstractState", [], function () {
    function e() {
        this._globalStartTime = 0;
        this.onFinished = null
    }
    e.prototype.update = function () {};
    e.prototype.postUpdate = function () {};
    e.prototype.getCurrentSourceData = function () {};
    e.prototype.resetClips = function (c) {
        this._globalStartTime = c
    };
    return e
});
define("goo/animation/state/SteadyState", ["goo/animation/state/AbstractState"], function (e) {
    function c(b) {
        e.call(this);
        this._name = b;
        this._transitions = {};
        this._sourceTree = null
    }
    c.prototype = Object.create(e.prototype);
    c.prototype.update = function (b) {
        if (!this._sourceTree.setTime(b) && this.onFinished) this.onFinished()
    };
    c.prototype.getCurrentSourceData = function () {
        return this._sourceTree.getSourceData()
    };
    c.prototype.resetClips = function (b) {
        e.prototype.resetClips.call(this, b);
        this._sourceTree.resetClips(b)
    };
    c.prototype.setTimeScale =
        function (b) {
            this._sourceTree.setTimeScale(b)
    };
    return c
});
define("goo/animation/layer/AnimationLayer", ["goo/animation/state/SteadyState", "goo/entities/World"], function (e, c) {
    function b(a) {
        this._name = a;
        this._steadyStates = {};
        this._layerBlender = this._currentState = null;
        this._transitions = {};
        this._transitionStates = {}
    }
    b.BASE_LAYER_NAME = "-BASE_LAYER-";
    b.prototype.getStates = function () {
        return Object.keys(this._steadyStates)
    };
    b.prototype.getTransitions = function () {
        var a;
        a = this._currentState ? Object.keys(this._currentState._transitions) : [];
        if (this._transitions)
            for (var b in this._transitions) a.indexOf(b) === -1 && a.push(b);
        a.sort();
        return a
    };
    b.prototype.update = function (a) {
        this._currentState && this._currentState.update(a || c.time)
    };
    b.prototype.postUpdate = function () {
        this._currentState && this._currentState.postUpdate()
    };
    b.prototype.transitionTo = function (a, b) {
        var b = b || c.time,
            g = this._currentState,
            f;
        g && g._transitions && (f = g._transitions[a] || g._transitions["*"]);
        !f && this._transitions && (f = this._transitions[a] || this._transitions["*"]);
        if (g instanceof e && f) {
            var i = this._transitionStates[f.type];
            this._doTransition(i,
                g, this._steadyStates[a], f, b);
            return !0
        } else if (!g && (f = this._transitions[a]))
            if (i = this._transitionStates[f.type]) return this._doTransition(i, null, this._steadyStates[a], f, b), !0;
        return !1
    };
    b.prototype._doTransition = function (a, b, c, f, e) {
        if (b) {
            a._sourceState = b;
            if (!a.isValid(f.timeWindow || [-1, -1], e)) {
                console.warn("State not in allowed time window");
                return
            }
            b.onFinished = null
        }
        a._targetState = c;
        a.readFromConfig(f);
        a.resetClips(e);
        this.setCurrentState(a)
    };
    b.prototype.setCurrentState = function (a, b, g) {
        g = g || c.time;
        if (this._currentState = a) b && a.resetClips(g), a.onFinished = function () {
            this.setCurrentState(a._targetState || null);
            this.update()
        }.bind(this)
    };
    b.prototype.getCurrentState = function () {
        return this._currentState
    };
    b.prototype.setCurrentStateByName = function (a, b, c) {
        if (a) {
            var f = this._steadyStates[a];
            if (f) return this.setCurrentState(f, b, c), !0;
            else console.warn("unable to find SteadyState named: " + a)
        }
        return !1
    };
    b.prototype.getCurrentSourceData = function () {
        return this._layerBlender !== null ? this._layerBlender.getBlendedSourceData() :
            this._currentState !== null ? this._currentState.getCurrentSourceData() : null
    };
    b.prototype.updateLayerBlending = function (a) {
        if (this._layerBlender) this._layerBlender._layerA = a, this._layerBlender._layerB = this
    };
    b.prototype.clearCurrentState = function () {
        this.setCurrentState(null)
    };
    b.prototype.resetClips = function (a) {
        this._currentState && this._currentState.resetClips(a || c.time)
    };
    b.prototype.setTimeScale = function (a) {
        this._currentState && this._currentState.setTimeScale(a)
    };
    return b
});
define("goo/animation/layer/LayerLERPBlender", ["goo/animation/blendtree/BinaryLERPSource"], function (e) {
    function c() {
        this._layerB = this._layerA = this._blendWeight = null
    }
    c.prototype.getBlendedSourceData = function () {
        var b = this._layerA.getCurrentSourceData(),
            a = this._layerB._currentState ? this._layerB._currentState.getCurrentSourceData() : null;
        return e.combineSourceData(b, a, this._blendWeight)
    };
    return c
});
define("goo/animation/state/AbstractTransitionState", ["goo/animation/state/AbstractState", "goo/animation/blendtree/BinaryLERPSource", "goo/math/MathUtils"], function (e, c, b) {
    function a() {
        e.call(this);
        this._targetState = this._sourceState = null;
        this._percent = 0;
        this._sourceData = null;
        this._fadeTime = 0;
        this._blendType = "Linear"
    }
    a.prototype = Object.create(e.prototype);
    a.prototype.update = function (a) {
        a -= this._globalStartTime;
        if (a > this._fadeTime && this.onFinished) this.onFinished();
        else switch (a /= this._fadeTime, this._blendType) {
        case "SCurve3":
            this._percent =
                b.scurve3(a);
            break;
        case "SCurve5":
            this._percent = b.scurve5(a);
            break;
        default:
            this._percent = a
        }
    };
    a.prototype.readFromConfig = function (a) {
        if (a) {
            if (a.fadeTime !== void 0) this._fadeTime = a.fadeTime;
            if (a.blendType !== void 0) this._blendType = a.blendType
        }
    };
    a.prototype.getCurrentSourceData = function () {
        var a = this._sourceState ? this._sourceState.getCurrentSourceData() : null,
            b = this._targetState ? this._targetState.getCurrentSourceData() : null;
        if (!this._sourceData) this._sourceData = {};
        return c.combineSourceData(a, b, this._percent,
            this._sourceData)
    };
    a.prototype.isValid = function (a, b) {
        var c = b - this._sourceState._globalStartTime,
            e = a[0],
            h = a[1];
        return e <= 0 ? h <= 0 ? !0 : c <= h : h <= 0 ? c >= e : e <= h ? e <= c && c <= h : c >= e || c <= h
    };
    a.prototype.resetClips = function (a) {
        e.prototype.resetClips.call(this, a);
        this._percent = 0
    };
    a.prototype.setTimeScale = function (a) {
        this._sourceState && this._sourceState.setTimeScale(a);
        this._targetState && this._targetState.setTimeScale(a)
    };
    return a
});
define("goo/animation/state/FadeTransitionState", ["goo/animation/state/AbstractTransitionState"], function (e) {
    function c() {
        e.call(this)
    }
    c.prototype = Object.create(e.prototype);
    c.prototype.update = function (b) {
        e.prototype.update.call(this, b);
        this._sourceState !== null && this._sourceState.update(b);
        this._targetState !== null && this._targetState.update(b)
    };
    c.prototype.postUpdate = function () {
        this._sourceState !== null && this._sourceState.postUpdate();
        this._targetState !== null && this._targetState.postUpdate()
    };
    c.prototype.resetClips =
        function (b) {
            e.prototype.resetClips.call(this, b);
            this._targetState !== null && this._targetState.resetClips(b)
    };
    return c
});
define("goo/animation/state/FrozenTransitionState", ["goo/animation/state/AbstractTransitionState"], function (e) {
    function c() {
        e.call(this)
    }
    c.prototype = Object.create(e.prototype);
    c.prototype.update = function (b) {
        e.prototype.update.call(this, b);
        this._targetState !== null && this._targetState.update(b)
    };
    c.prototype.postUpdate = function () {
        this._targetState !== null && this._targetState.postUpdate()
    };
    c.prototype.resetClips = function (b) {
        e.prototype.resetClips.call(this, b);
        this._targetState.resetClips(b)
    };
    return c
});
define("goo/animation/state/SyncFadeTransitionState", ["goo/animation/state/FadeTransitionState"], function (e) {
    function c() {
        e.call(this)
    }
    c.prototype = Object.create(e.prototype);
    c.prototype.resetClips = function (b) {
        e.prototype.resetClips.call(this, b);
        this._targetState.resetClips(this._sourceState._globalStartTime)
    };
    return c
});
define("goo/entities/components/CameraComponent", ["goo/entities/components/Component", "goo/math/Vector3"], function (e, c) {
    function b(a) {
        this.type = "CameraComponent";
        this.camera = a;
        this.leftVec = new c(-1, 0, 0);
        this.upVec = new c(0, 1, 0);
        this.dirVec = new c(0, 0, -1)
    }
    b.prototype = Object.create(e.prototype);
    b.prototype.setUpVector = function (a) {
        a === 0 ? (this.leftVec.setd(0, -1, 0), this.upVec.setd(1, 0, 0), this.dirVec.setd(0, 0, -1)) : a === 2 ? (this.leftVec.setd(-1, 0, 0), this.upVec.setd(0, 0, 1), this.dirVec.setd(0, -1, 0)) : (this.leftVec.setd(-1,
            0, 0), this.upVec.setd(0, 1, 0), this.dirVec.setd(0, 0, -1))
    };
    b.prototype.updateCamera = function (a) {
        this.camera._left.setv(this.leftVec);
        a.matrix.applyPostVector(this.camera._left);
        this.camera._up.setv(this.upVec);
        a.matrix.applyPostVector(this.camera._up);
        this.camera._direction.setv(this.dirVec);
        a.matrix.applyPostVector(this.camera._direction);
        a.matrix.getTranslation(this.camera.translation);
        this.camera.update()
    };
    return b
});
define("goo/entities/components/LightComponent", ["goo/entities/components/Component"], function (e) {
    function c(b) {
        this.type = "LightComponent";
        this.light = b
    }
    c.prototype = Object.create(e.prototype);
    c.prototype.updateLight = function (b) {
        this.light.update(b)
    };
    return c
});
define("goo/entities/components/CSSTransformComponent", ["goo/entities/components/Component"], function (e) {
    function c(b, a) {
        e.call(this);
        this.type = "CSSTransformComponent";
        this.domElement = b;
        this.scale = 1;
        this.faceCamera = typeof a === "undefined" ? !1 : a
    }
    c.prototype = Object.create(e.prototype);
    return c
});
define("goo/entities/EntityUtils", "goo/entities/components/TransformComponent,goo/entities/components/MeshDataComponent,goo/entities/components/MeshRendererComponent,goo/entities/components/CameraComponent,goo/entities/components/LightComponent,goo/renderer/Camera,goo/renderer/light/Light,goo/renderer/Material,goo/renderer/MeshData,goo/math/Transform,goo/entities/components/CSSTransformComponent".split(","), function (e, c, b, a, d, g, f, i, h, k, j) {
    function l() {}

    function m(a, d, f) {
        for (var g = a.createEntity(d.name),
                h = 0; h < d._components.length; h++) {
            var i = d._components[h];
            if (i instanceof e) g.transformComponent.transform.copy(i.transform);
            else if (i instanceof c) {
                var j = new c(i.meshData);
                j.modelBound = new i.modelBound.constructor;
                if (i.currentPose) j.currentPose = i.currentPose;
                g.setComponent(j)
            } else if (i instanceof b) {
                for (var k = new b, j = 0; j < i.materials.length; j++) k.materials.push(i.materials[j]);
                g.setComponent(k)
            } else g.setComponent(i)
        }
        for (j = 0; j < d.transformComponent.children.length; j++) h = m(a, d.transformComponent.children[j].entity,
            f), g.transformComponent.attachChild(h.transformComponent);
        f.callback && f.callback(g);
        return g
    }
    l.clone = function (a, b, c) {
        c = c || {};
        c.shareData = c.shareData || !0;
        c.shareMaterial = c.shareMaterial || !0;
        c.cloneHierarchy = c.cloneHierarchy || !0;
        return m(a, b, c)
    };
    l.traverse = function (a, b, c) {
        c = c !== void 0 ? c : 0;
        b(a, c);
        for (var d = 0; d < a.transformComponent.children.length; d++) l.traverse(a.transformComponent.children[d].entity, b, c + 1)
    };
    l.updateWorldTransform = function (a) {
        a.updateWorldTransform();
        for (var b = 0; b < a.children.length; b++) l.updateWorldTransform(a.children[b])
    };
    l.createTypicalEntity = function (e) {
        for (var j = e.createEntity(), l = 1; l < arguments.length; l++) {
            var m = arguments[l];
            if (m instanceof h) {
                if (m = new c(m), j.setComponent(m), !j.hasComponent("MeshRendererComponent")) {
                    var r = new b;
                    j.setComponent(r)
                }
            } else m instanceof i ? (j.hasComponent("MeshRendererComponent") || (r = new b, j.setComponent(r)), j.meshRendererComponent.materials.push(m)) : m instanceof f ? (m = new d(m), j.setComponent(m)) : m instanceof g ? (m = new a(m), j.setComponent(m)) : m instanceof k ? j.transformComponent.transform =
                m : typeof m === "string" ? j.name = m : Array.isArray(m) && m.length === 3 && j.transformComponent.transform.translation.setd(m[0], m[1], m[2])
        }
        return j
    };
    l.createDOMEntity = function (a, b) {
        var c = a.createEntity();
        c.setComponent(new j(b));
        return c
    };
    return l
});
define("goo/util/MeshBuilder", ["goo/renderer/MeshData", "goo/math/Vector3", "goo/entities/EntityUtils"], function (e, c, b) {
    function a() {
        this.meshDatas = [];
        this.vertexData = {};
        this.indexData = [];
        this.indexCounter = this.vertexCounter = 0;
        this.indexLengths = [];
        this.indexModes = []
    }
    a.prototype.addEntity = function (a) {
        b.traverse(a, function () {
            a.transformComponent._dirty && a.transformComponent.updateTransform()
        });
        b.traverse(a, function () {
            a.transformComponent._dirty && b.updateWorldTransform(a.transformComponent)
        });
        b.traverse(a,
            function () {
                a.meshDataComponent && this.addMeshData(a.meshDataComponent.meshData, a.transformComponent.worldTransform)
            })
    };
    var d = new c;
    a.prototype.addMeshData = function (a, b) {
        if (a.vertexCount >= 65536) throw Error("Maximum number of vertices for a mesh to add is 65535. Got: " + a.vertexCount);
        else this.vertexCounter + a.vertexCount >= 65536 && this._generateMesh();
        var c = a.attributeMap,
            h;
        for (h in c) {
            var k = c[h],
                j = this.vertexData[h];
            if (!j) this.vertexData[h] = {}, j = this.vertexData[h], j.array = [], j.map = {
                count: k.count,
                type: k.type,
                stride: k.stride,
                offset: k.offset,
                normalized: k.normalized
            };
            var l = a.getAttributeBuffer(h),
                m = l.length,
                o = j.array;
            if (h === e.POSITION)
                for (j = 0; j < m; j += 3) d.setd(l[j + 0], l[j + 1], l[j + 2]), b.matrix.applyPostPoint(d), o[this.vertexCounter * k.count + j + 0] = d[0], o[this.vertexCounter * k.count + j + 1] = d[1], o[this.vertexCounter * k.count + j + 2] = d[2];
            else if (h === e.NORMAL)
                for (j = 0; j < m; j += 3) d.setd(l[j + 0], l[j + 1], l[j + 2]), b.rotation.applyPost(d), o[this.vertexCounter * k.count + j + 0] = d[0], o[this.vertexCounter * k.count + j + 1] = d[1], o[this.vertexCounter *
                    k.count + j + 2] = d[2];
            else if (h === e.TANGENT)
                for (j = 0; j < m; j += 3) d.setd(l[j + 0], l[j + 1], l[j + 2]), b.rotation.applyPost(d), o[this.vertexCounter * k.count + j + 0] = d[0], o[this.vertexCounter * k.count + j + 1] = d[1], o[this.vertexCounter * k.count + j + 2] = d[2];
            else
                for (j = 0; j < m; j++) o[this.vertexCounter * k.count + j] = l[j]
        }
        c = a.getIndexBuffer();
        j = 0;
        for (h = a.indexCount; j < h; j++) this.indexData[this.indexCounter + j] = c[j] + this.vertexCounter;
        this.vertexCounter += a.vertexCount;
        this.indexCounter += a.indexCount;
        this.indexLengths = a.indexLengths ? this.indexLengths.concat(a.indexLengths) :
            this.indexLengths.concat(a.getIndexBuffer().length);
        this.indexModes = this.indexModes.concat(a.indexModes)
    };
    a.prototype._generateMesh = function () {
        var a = {}, b;
        for (b in this.vertexData) {
            var c = this.vertexData[b];
            a[b] = c.map
        }
        a = new e(a, this.vertexCounter, this.indexCounter);
        for (b in this.vertexData) c = this.vertexData[b].array, a.getAttributeBuffer(b).set(c);
        a.getIndexBuffer().set(this.indexData);
        a.indexLengths = this.indexLengths;
        a.indexModes = this.indexModes;
        this.meshDatas.push(a);
        this.vertexData = {};
        this.indexData = [];
        this.indexCounter = this.vertexCounter = 0;
        this.indexLengths = [];
        this.indexModes = []
    };
    a.prototype.build = function () {
        this.vertexCounter > 0 && this._generateMesh();
        return this.meshDatas
    };
    return a
});
define("goo/debug/BoundingVolumeMeshBuilder", ["goo/renderer/bounds/BoundingBox", "goo/renderer/bounds/BoundingSphere", "goo/util/MeshBuilder", "goo/renderer/MeshData", "goo/math/Transform"], function (e, c, b, a, d) {
    function g() {}
    g.buildBox = function (b) {
        var c = b.xExtent,
            d = b.yExtent,
            b = b.zExtent,
            c = [c, d, b, c, d, -b, c, -d, b, c, -d, -b, -c, d, b, -c, d, -b, -c, -d, b, -c, -d, -b],
            d = [0, 1, 0, 2, 1, 3, 2, 3, 4, 5, 4, 6, 5, 7, 6, 7, 0, 4, 1, 5, 2, 6, 3, 7],
            b = new a(a.defaultMap([a.POSITION]), c.length / 3, d.length);
        b.getAttributeBuffer(a.POSITION).set(c);
        b.getIndexBuffer().set(d);
        b.indexLengths = null;
        b.indexModes = ["Lines"];
        return b
    };
    g.buildSphere = function (c) {
        var g = c.radius,
            g = g || 1,
            c = new b,
            e, k;
        e = g || 1;
        k = 128;
        for (var g = [], j = [], l = Math.PI * 2 / k, m = 0, o = 0; m < k; m++, o += l) g.push(Math.cos(o) * e, Math.sin(o) * e, 0), j.push(m, m + 1);
        j[j.length - 1] = 0;
        e = new a(a.defaultMap([a.POSITION]), k, j.length);
        e.getAttributeBuffer(a.POSITION).set(g);
        e.getIndexBuffer().set(j);
        e.indexLengths = null;
        e.indexModes = ["Lines"];
        g = new d;
        c.addMeshData(e, g);
        g = new d;
        g.rotation.fromAngles(0, Math.PI / 2, 0);
        g.update();
        c.addMeshData(e,
            g);
        g = new d;
        g.rotation.fromAngles(Math.PI / 2, Math.PI / 2, 0);
        g.update();
        c.addMeshData(e, g);
        return c.build()[0]
    };
    g.build = function (a) {
        if (a instanceof e) return g.buildBox(a);
        else if (a instanceof c) return g.buildSphere(a)
    };
    return g
});
define("goo/entities/systems/PickingSystem", ["goo/entities/systems/System"], function (e) {
    function c(b) {
        e.call(this, "PickingSystem", ["MeshRendererComponent", "TransformComponent"]);
        this.passive = !0;
        this.onPick = this.pickRay = null;
        b = b || {};
        this.setPickLogic(b.pickLogic || null)
    }
    c.prototype = Object.create(e.prototype);
    c.prototype.setPickLogic = function (b) {
        (this.pickLogic = b) && this.interests.indexOf("MeshDataComponent") === -1 && this.interests.push("MeshDataComponent")
    };
    c.prototype.inserted = function (b) {
        b.meshRendererComponent.isPickable &&
            this.pickLogic && this.pickLogic.added(b)
    };
    c.prototype.deleted = function (b) {
        this.pickLogic && this.pickLogic.removed(b)
    };
    c.prototype.process = function (b) {
        if (this.pickRay && this.onPick) {
            for (var a = [], c = 0; c < b.length; c++) {
                var g = b[c],
                    f = g.meshRendererComponent;
                f.isPickable && (this.pickLogic ? (this.pickLogic.isConstructed(g) || this.pickLogic.added(g), (f = this.pickLogic.getPickResult(this.pickRay, g)) && f.distances && f.distances.length && a.push({
                        entity: g,
                        intersection: f
                    })) : f.worldBound && (f = f.worldBound.intersectsRayWhere(this.pickRay)) &&
                    f.distances.length && a.push({
                        entity: g,
                        intersection: f
                    }))
            }
            a.sort(function (a, b) {
                return a.intersection.distances[0] - b.intersection.distances[0]
            });
            this.onPick(a)
        }
    };
    return c
});
define("goo/picking/BoundingTree", ["goo/renderer/bounds/BoundingBox", "goo/renderer/bounds/BoundingSphere", "goo/math/Vector3"], function (e, c, b) {
    function a(b) {
        this.worldBound = this.localBound = this.rightTree = this.leftTree = null;
        this.boundType = b ? b : a.BOUNDTYPE_BOX
    }
    a.BOUNDTYPE_SPHERE = "sphere";
    a.BOUNDTYPE_BOX = "box";
    a.MAX_PRIMITIVES_PER_LEAF = 16;
    a.prototype.construct = function (a) {
        if (!a.meshRendererComponent || !a.meshDataComponent || !a.transformComponent) console.warn("Entity missing required components for boundingtree construction: ",
            a);
        else {
            var b = a.meshDataComponent.meshData;
            b.updatePrimitiveCounts();
            if (b.getSectionCount() === 1) {
                this.primitiveIndices = [];
                for (var c = 0, b = b.getPrimitiveCount(0); c < b; c++) this.primitiveIndices.push(c);
                this.createTree(a, 0, 0, this.primitiveIndices.length)
            } else this.split(a, 0, b.getSectionCount())
        }
    };
    a.prototype.createTree = function (b, c, f, e) {
        var h = b.meshDataComponent.meshData;
        this.section = c;
        this.start = f;
        this.end = e;
        if (this.primitiveIndices && (this.createBounds(), this.localBound.computeFromPrimitives(h, c, this.primitiveIndices,
            f, e), !(e - f + 1 <= a.MAX_PRIMITIVES_PER_LEAF))) {
            if (!this.leftTree) this.leftTree = new a(this.boundType);
            this.leftTree.primitiveIndices = this.primitiveIndices;
            this.leftTree.createTree(b, c, f, Math.floor((f + e) / 2));
            if (!this.rightTree) this.rightTree = new a(this.boundType);
            this.rightTree.primitiveIndices = this.primitiveIndices;
            this.rightTree.createTree(b, c, Math.floor((f + e) / 2), e)
        }
    };
    a.prototype.split = function (b, c, f) {
        var e = f - c,
            h = Math.floor(e / 2);
        if (h === 1) {
            var k = c;
            this.leftTree = new a(this.boundType);
            this.leftTree.primitiveIndices = [];
            for (var j = 0; j < this.leftTree.primitiveIndices.length; j++) this.leftTree.primitiveIndices.push(j);
            this.leftTree.createTree(b, k, 0, this.leftTree.primitiveIndices.length)
        } else this.leftTree = new a(this.boundType), this.leftTree.split(b, c, c + h); if (e - h === 1) {
            k = c + 1;
            this.rightTree = new a(this.boundType);
            this.rightTree._primitiveIndices = [];
            for (j = 0; j < this.rightTree.primitiveIndices.length; j++) this.rightTree.primitiveIndices.push(j);
            this.rightTree.createTree(b, k, 0, this.rightTree.primitiveIndices.length)
        } else this.rightTree =
            new a(this.boundType), this.rightTree.split(b, c + h, f);
        this.localBound = this.leftTree.localBound.clone(this.localBound);
        this.localBound.merge(this.rightTree.localBound);
        this.worldBound = this.localBound.clone(this.worldBound)
    };
    a.prototype.createBounds = function () {
        switch (this.boundType) {
        case a.BOUNDTYPE_BOX:
            this.localBound = new e;
            this.worldBound = new e;
            break;
        case a.BOUNDTYPE_SPHERE:
            this.localBound = new c, this.worldBound = new c
        }
    };
    a.prototype.findPick = function (a, c, f) {
        f || (f = {});
        var e = c.transformComponent.worldTransform;
        this.localBound.transform(e, this.worldBound);
        if (!this.worldBound.intersectsRay(a)) return f;
        this.leftTree && this.leftTree.findPick(a, c, f);
        if (this.rightTree) this.rightTree.findPick(a, c, f);
        else if (!this.leftTree)
            for (var c = c.meshDataComponent.meshData, h = null, k = this.start; k < this.end; k++) {
                for (var h = c.getPrimitiveVertices(this.primitiveIndices[k], this.section, h), j = 0; j < h.length; j++) e.matrix.applyPostPoint(h[j]);
                j = new b;
                if (a.intersects(h, !1, j)) f.distances = f.distances || [], f.distances.push(a.origin.distance(j)),
                f.points = f.points || [], f.points.push(j)
            }
        return f
    };
    return a
});
define("goo/picking/PrimitivePickLogic", ["goo/picking/BoundingTree"], function (e) {
    function c() {}
    c.prototype.getPickResult = function (b, a) {
        var c = a.meshDataComponent.meshData.__boundingTree;
        return !c ? null : c.findPick(b, a, {})
    };
    c.prototype.added = function (b) {
        this.isConstructed(b) || this.rebuild(b)
    };
    c.prototype.removed = function (b) {
        b.meshDataComponent.meshData.__boundingTree = null
    };
    c.prototype.isConstructed = function (b) {
        return !!b.meshDataComponent.meshData.__boundingTree
    };
    c.prototype.rebuild = function (b) {
        b.meshDataComponent.meshData.__boundingTree =
            new e;
        b.meshDataComponent.meshData.__boundingTree.construct(b)
    };
    return c
});
define("goo/debug/components/MarkerComponent", ["goo/entities/components/Component", "goo/shapes/ShapeCreator", "goo/debug/BoundingVolumeMeshBuilder"], function (e, c, b) {
    function a(a) {
        this.type = "MarkerComponent";
        this.meshData = b.build(a.meshDataComponent.modelBound)
    }
    a.prototype = Object.create(e.prototype);
    return a
});
define("goo/debug/systems/MarkerSystem", "goo/entities/systems/System,goo/renderer/Material,goo/renderer/shaders/ShaderLib,goo/shapes/ShapeCreator,goo/debug/components/MarkerComponent,goo/renderer/Renderer".split(","), function (e, c, b, a, d, g) {
    function f(a) {
        e.call(this, "MarkerSystem", ["MarkerComponent"]);
        this.material = c.createMaterial(b.simpleColored, "");
        this.material.depthState.enabled = !1;
        this.material.shader.uniforms.color = [0, 1, 0];
        this.goo = a;
        this.renderer = this.goo.renderer;
        this.entities = [];
        this.goo.callbacks.push(function () {
            for (var a =
                0; a < this.entities.length; a++) {
                var b = this.entities[a];
                b.hasComponent("MarkerComponent") && this.goo.renderer.render({
                    meshData: b.markerComponent.meshData,
                    materials: [this.material],
                    transform: b.transformComponent.transform
                }, g.mainCamera, [], null, !1)
            }
        }.bind(this))
    }
    f.prototype = Object.create(e.prototype);
    f.prototype.process = function (a) {
        this.entities = a
    };
    return f
});
define("goo/debug/Debugger", "goo/entities/Entity,goo/entities/managers/EntityManager,goo/entities/components/TransformComponent,goo/math/Ray,goo/entities/systems/PickingSystem,goo/picking/PrimitivePickLogic,goo/renderer/Renderer,goo/debug/components/MarkerComponent,goo/debug/systems/MarkerSystem".split(","), function (e, c, b, a, d, g, f, i, h) {
    function k(a) {
        this.goo = null;
        this.exportPicked = a || !1;
        this.oldPicked = this.picked = null
    }

    function j() {
        var a = document.createElement("div");
        a.id = "debugdiv";
        var b = '<span style="font-size: x-small;font-family: sans-serif">Filter</span><br /><textarea cols="30" id="debugparams">name, Compo, tran, data</textarea><br /><span style="font-size: x-small;font-family: sans-serif">Result</span><br /><textarea readonly rows="10" cols="30" id="debugtex">Click on an entity</textarea><br />';
        b += '<hr /><span style="font-size: x-small;font-family: sans-serif">REPL</span><br /><textarea readonly rows="10" cols="30" id="replouttex">...</textarea><br /><textarea cols="30" id="replintex">entity.</textarea>';
        a.innerHTML = b;
        a.style.position = "absolute";
        a.style.zIndex = "2001";
        a.style.backgroundColor = "#DDDDDD";
        a.style.left = "10px";
        a.style.top = "100px";
        a.style.webkitTouchCallout = "none";
        a.style.webkitUserSelect = "none";
        a.style.khtmlUserSelect = "none";
        a.style.mozUserSelect = "none";
        a.style.msUserSelect = "none";
        a.style.userSelect = "none";
        a.style.padding = "3px";
        a.style.borderRadius = "6px";
        document.body.appendChild(a)
    }

    function l(a) {
        return a.split(",").map(function (a) {
            return a.replace(/(^[\s]+|[\s]+$)/g, "")
        }).filter(function (a) {
            return a.length > 0
        }).map(function (a) {
            return RegExp(a)
        })
    }

    function m(a, b, c, d) {
        if (b.length === 0) return "No interests specified;\n\nSome popular interests: is, tran, Compo\n\nEvery entry separated by a comma is a regex";
        if (d < 0) return c + "REACHED MAXIMUM DEPH\n";
        if (a === null) return c + "null\n";
        var f =
            typeof a;
        if (f === "undefined" || f === "number" || f === "boolean" || f === "string" || a instanceof Array && (typeof a[0] === "string" || typeof a[0] === "number" || typeof a[0] === "boolean")) return c + JSON.stringify(a) + "\n";
        if (Object.prototype.toString.call(a).indexOf("Array]") !== -1) {
            if (a.length === 0) a = "[]";
            else {
                b = "[" + a[0];
                for (d = 1; d < a.length; d++) b += " " + a[d];
                b += "]";
                a = b
            }
            return c + a + "\n"
        } else {
            var f = [],
                g;
            for (g in a)
                if (a.hasOwnProperty(g) && typeof a[g] !== "function")
                    for (var e in b)
                        if (b[e].test(g)) {
                            var h = m(a[g], b, c + " ", d - 1);
                            f.push(c +
                                g + "\n" + h);
                            break
                        }
            return f.join("")
        }
    }

    function o(a) {
        var b = l(document.getElementById("debugparams").value);
        a && console.log("==> ", a);
        a = m(a, b, "", 20);
        document.getElementById("debugtex").value = a
    }
    k.prototype._setUpREPL = function () {
        var a = "";
        document.getElementById("replintex").addEventListener("keyup", function (b) {
            b.stopPropagation();
            var c = document.getElementById("replintex"),
                d = document.getElementById("replouttex");
            if (b.keyCode === 13 && !b.shiftKey) {
                a = b = c.value.substr(0, c.value.length - 1);
                var f = "";
                try {
                    f += eval(b)
                } catch (g) {
                    f +=
                        g
                }
                c.value = "entity.";
                d.value += "\n-------\n" + f;
                o(this.picked)
            } else if (b.keyCode === 38) c.value = a
        }.bind(this), !1)
    };
    k.prototype._setUpPicking = function () {
        document.addEventListener("mouseup", function (a) {
            a.stopPropagation();
            this.goo.pick(a.pageX, a.pageY, function (a) {
                if (a = this.goo.world.entityManager.getEntityById(a)) {
                    this.oldPicked = this.picked;
                    this.picked = a;
                    if (this.picked === this.oldPicked) this.picked = null;
                    if (this.exportPicked) window.picked = this.picked;
                    o(this.picked);
                    var a = this.picked,
                        b = this.oldPicked;
                    a !== b ?
                        (b !== null && b.hasComponent("MarkerComponent") && b.clearComponent("MarkerComponent"), a !== null && a.setComponent(new i(a))) : a.hasComponent("MarkerComponent") ? a.clearComponent("MarkerComponent") : a.setComponent(new i(a))
                }
            }.bind(this))
        }.bind(this), !1)
    };
    k.prototype.inject = function (a) {
        this.goo = a;
        j();
        this.goo.world.getSystem("MarkerSystem") || this.goo.world.setSystem(new h(this.goo));
        this._setUpPicking();
        document.getElementById("debugparams").addEventListener("keyup", function () {
            o(this.picked)
        }.bind(this));
        this._setUpREPL();
        return this
    };
    return k
});
define("goo/debug/EntityCounter", [], function () {
    function e(b) {
        this.goo = null;
        this.skipFrames = b || 20;
        this.texHandle = null
    }

    function c() {
        var b = document.createElement("div");
        b.id = "_entitycounterdiv";
        b.innerHTML = '<span style="font-size: x-small;font-family: sans-serif">Counter</span><br /><textarea cols="30" rows="6" id="_entitycountertex">...</textarea>';
        b.style.position = "absolute";
        b.style.zIndex = "2001";
        b.style.backgroundColor = "#BBBBBB";
        b.style.left = "10px";
        b.style.bottom = "10px";
        b.style.webkitTouchCallout = "none";
        b.style.webkitUserSelect = "none";
        b.style.khtmlUserSelect = "none";
        b.style.mozUserSelect = "none";
        b.style.msUserSelect = "none";
        b.style.userSelect = "none";
        b.style.padding = "3px";
        b.style.borderRadius = "6px";
        document.body.appendChild(b);
        return document.getElementById("_entitycountertex")
    }
    e.prototype.inject = function (b) {
        this.goo = b;
        this.texHandle = c();
        var a = this,
            d = 0;
        this.goo.callbacks.push(function () {
            d--;
            if (d <= 0) {
                d = a.skipFrames;
                var b = "",
                    c;
                for (c in a.goo.world._systems) {
                    var e = a.goo.world._systems[c];
                    b += e.type + ": " +
                        e._activeEntities.length + "\n"
                }
                a.texHandle.value = b
            }
        });
        return this
    };
    return e
});
define("goo/util/ArrayUtil", [], function () {
    return {
        getTypedArray: function (e, c) {
            var b = c[0],
                a = c[1],
                d = c[2];
            if (d === "float32") return new Float32Array(e, b, a);
            else if (d === "uint8") return new Uint8Array(e, b, a);
            else if (d === "uint16") return new Uint16Array(e, b, a);
            else if (d === "uint32") return new Uint32Array(e, b, a);
            else throw Error("Binary format #{format} is not supported");
        },
        remove: function (e, c) {
            var b = e.indexOf(c);
            b > -1 && e.splice(b, 1)
        }
    }
});
define("goo/entities/Bus", ["goo/util/ArrayUtil"], function (e) {
    function c() {
        this.trie = {
            name: "",
            listeners: [],
            children: {}
        }
    }
    c.prototype.emit = function (b, a) {
        typeof b === "string" && (b = [b]);
        for (var c = 0; c < b.length; c++) this._emitToSingle(b[c], a)
    };
    c.prototype._getNode = function (b) {
        for (var a = this.trie, b = b.split("."), c = 0; c < b.length; c++) {
            var g = b[c];
            if (a.children[g]) a = a.children[g];
            else return
        }
        return a
    };
    c.prototype._emitToSingle = function (b, a) {
        var c = this._getNode(b);
        c && this._emitToAll(c, a)
    };
    c.prototype._emitToAll = function (b,
        a) {
        for (var c = 0; c < b.listeners.length; c++) b.listeners[c](a);
        for (var g = Object.keys(b.children), c = 0; c < g.length; c++) this._emitToAll(b.children[g], a)
    };
    c.prototype.addListener = function (b, a) {
        for (var c = this.trie, g = b.split("."), f = 0; f < g.length; f++) {
            var e = g[f];
            if (c.children[e]) c = c.children[e];
            else var h = {
                listeners: [],
                children: []
            }, c = c.children[e] = h
        }
        c.listeners.indexOf(a) === -1 && c.listeners.push(a)
    };
    c.prototype.removeListener = function (b, a) {
        var c = this._getNode(b);
        c && e.remove(c.listeners, a)
    };
    c.prototype.removeAllOnChannel =
        function (b) {
            if (b = this._getNode(b)) b.listeners = []
    };
    c.prototype.removeChannelAndChildren = function (b) {
        var b = b.split("."),
            a = b.pop();
        delete this._getNode(b.join(".")).children[a]
    };
    c.prototype._removeListener = function (b, a) {
        e.remove(b.listeners, a);
        for (var c = Object.keys(b.children), g = 0; g < c.length; g++) this._removeListener(b.children[c[g]], a)
    };
    c.prototype.removeListenerFromAllChannels = function (b) {
        this._removeListener(this.trie, b)
    };
    return c
});
define("goo/entities/systems/TransformSystem", ["goo/entities/systems/System"], function (e) {
    function c() {
        e.call(this, "TransformSystem", ["TransformComponent"])
    }
    c.prototype = Object.create(e.prototype);
    c.prototype.process = function (b) {
        var a, c;
        for (a = 0; a < b.length; a++) c = b[a].transformComponent, c._updated = !1, c._dirty && c.updateTransform();
        for (a = 0; a < b.length; a++) c = b[a].transformComponent, c._dirty && this.updateWorldTransform(c)
    };
    c.prototype.updateWorldTransform = function (b) {
        b.updateWorldTransform();
        for (var a = 0; a <
            b.children.length; a++) this.updateWorldTransform(b.children[a])
    };
    return c
});
define("goo/renderer/SimplePartitioner", ["goo/renderer/Camera"], function (e) {
    function c() {}
    c.prototype.added = function () {};
    c.prototype.removed = function () {};
    c.prototype.process = function (b, a, c) {
        for (var g = 0, f = 0; f < a.length; f++) {
            var i = a[f];
            if (!i.skip && !i.meshRendererComponent.hidden) i.meshRendererComponent.cullMode === "Never" ? (c[g++] = i, i.isVisible = !0) : b.contains(i.meshRendererComponent.worldBound) !== e.Outside ? (c[g++] = i, i.isVisible = !0) : i.isVisible = !1
        }
        c.length = g
    };
    return c
});
define("goo/entities/systems/RenderSystem", "goo/entities/systems/System,goo/entities/EventHandler,goo/renderer/SimplePartitioner,goo/renderer/Material,goo/renderer/shaders/ShaderLib,goo/renderer/Util".split(","), function (e, c, b, a, d, g) {
    function f() {
        e.call(this, "RenderSystem", ["MeshRendererComponent", "MeshDataComponent"]);
        this.entities = [];
        this.renderList = [];
        this.postRenderables = [];
        this.partitioner = new b;
        this.preRenderers = [];
        this.composers = [];
        this.doRender = !0;
        this._debugMaterials = {};
        this.overrideMaterials = [];
        this.camera = null;
        this.lights = [];
        this.currentTpf = 0;
        var a = this;
        c.addListener({
            setCurrentCamera: function (b) {
                a.camera = b
            },
            setLights: function (b) {
                a.lights = b
            }
        });
        this.picking = {
            doPick: !1,
            x: 0,
            y: 0,
            pickingStore: {},
            pickingCallback: function (a, b) {
                console.log(a, b)
            },
            skipUpdateBuffer: !1
        }
    }
    f.prototype = Object.create(e.prototype);
    f.prototype.pick = function (a, b, c, d) {
        this.picking.x = a;
        this.picking.y = b;
        this.picking.skipUpdateBuffer = d === void 0 ? !1 : d;
        if (c) this.picking.pickingCallback = c;
        this.picking.doPick = !0
    };
    f.prototype.inserted =
        function (a) {
            this.partitioner && this.partitioner.added(a)
    };
    f.prototype.deleted = function (a) {
        this.partitioner && this.partitioner.removed(a)
    };
    f.prototype.process = function (a, b) {
        this.entities = a;
        this.currentTpf = b
    };
    f.prototype.render = function (a) {
        if (this.doRender && this.camera) {
            a.updateShadows(this.partitioner, this.entities, this.lights);
            for (var b = 0; b < this.preRenderers.length; b++) this.preRenderers[b].process(a, this.entities, this.partitioner, this.camera, this.lights);
            this.partitioner.process(this.camera, this.entities,
                this.renderList);
            if (this.composers.length > 0)
                for (b = 0; b < this.composers.length; b++) this.composers[b].render(a, this.currentTpf, this.camera, this.lights, null, !0, this.overrideMaterials);
            else a.render(this.renderList, this.camera, this.lights, null, {
                color: !1,
                depth: !0,
                stencil: !0
            }, this.overrideMaterials)
        }
    };
    f.prototype.renderToPick = function (a, b) {
        a.renderToPick(this.renderList, this.camera, !0, b)
    };
    f.prototype._createDebugMaterial = function (b) {
        if (b !== "") {
            var c;
            switch (b) {
            case "wireframe":
            case "color":
                c = g.clone(d.simpleColored.fshader);
                break;
            case "lit":
                c = g.clone(d.simpleLit.fshader);
                break;
            case "texture":
                c = g.clone(d.textured.fshader);
                break;
            case "normals":
                c = g.clone(d.showNormals.fshader);
                break;
            case "simple":
                c = g.clone(d.simple.fshader)
            }
            var f = g.clone(d.uber);
            f.fshader = c;
            if (b !== "flat") {
                if (this._debugMaterials[b] = a.createMaterial(f, b), b === "wireframe") this._debugMaterials[b].wireframe = !0
            } else this._debugMaterials[b] = a.createEmptyMaterial(null, b), this._debugMaterials[b].flat = !0
        }
    };
    f.prototype.setDebugMaterial = function (a) {
        if (!a || a === "") this.overrideMaterials = [];
        else {
            var b = a.split("+");
            this.overrideMaterials = [];
            for (var c = 0; c < b.length; c++) a = b[c], this._debugMaterials[a] || this._createDebugMaterial(a), a === "" ? this.overrideMaterials.push(null) : this.overrideMaterials.push(this._debugMaterials[a])
        }
    };
    return f
});
define("goo/entities/systems/BoundingUpdateSystem", ["goo/entities/systems/System", "goo/renderer/bounds/BoundingBox"], function (e, c) {
    function b() {
        e.call(this, "BoundingUpdateSystem", ["TransformComponent", "MeshRendererComponent", "MeshDataComponent"]);
        this._worldBound = new c;
        this._computeWorldBound = null
    }
    b.prototype = Object.create(e.prototype);
    b.prototype.process = function (a) {
        for (var b = 0; b < a.length; b++) {
            var c = a[b],
                f = c.meshDataComponent,
                e = c.transformComponent,
                c = c.meshRendererComponent;
            f.autoCompute ? (f.computeBoundFromPoints(),
                c.updateBounds(f.modelBound, e.worldTransform)) : e._updated && c.updateBounds(f.modelBound, e.worldTransform)
        }
        if (this._computeWorldBound && this._computeWorldBound instanceof Function) {
            for (b = 0; b < a.length; b++) f = a[b].meshRendererComponent, b === 0 ? f.worldBound.clone(this._worldBound) : this._worldBound = this._worldBound.merge(f.worldBound);
            this._computeWorldBound(this._worldBound);
            this._computeWorldBound = null
        }
    };
    b.prototype.getWorldBound = function (a) {
        this._computeWorldBound = a
    };
    return b
});
define("goo/entities/systems/ScriptSystem", ["goo/entities/systems/System"], function (e) {
    function c(b) {
        e.call(this, "ScriptSystem", ["ScriptComponent"]);
        this.renderer = b;
        this.environment = {
            domElement: null,
            viewportWidth: 0,
            viewportHeight: 0
        }
    }
    c.prototype = Object.create(e.prototype);
    c.prototype.process = function (b, a) {
        this.environment.domElement = this.renderer.domElement;
        this.environment.viewportWidth = this.renderer.viewportWidth;
        this.environment.viewportHeight = this.renderer.viewportHeight;
        for (var c = 0; c < b.length; c++) b[c].scriptComponent.run(b[c],
            a, this.environment)
    };
    return c
});
define("goo/entities/systems/LightingSystem", ["goo/entities/systems/System", "goo/entities/EventHandler"], function (e, c) {
    function b() {
        e.call(this, "LightingSystem", ["LightComponent", "TransformComponent"]);
        this.lights = [];
        this.overrideLights = null
    }
    b.prototype = Object.create(e.prototype);
    b.prototype.addedComponent = function (a, b) {
        b.type === "LightComponent" && this.lights.indexOf(b.light) === -1 && (this.lights.push(b.light), this.overrideLights || c.dispatch("setLights", this.lights))
    };
    b.prototype.removedComponent = function (a,
        b) {
        if (b.type === "LightComponent") {
            var e = this.lights.indexOf(b.light);
            e !== -1 && (this.lights.splice(e, 1), this.overrideLights || c.dispatch("setLights", this.lights))
        }
    };
    b.prototype.setOverrideLights = function (a) {
        this.overrideLights = a;
        c.dispatch("setLights", this.overrideLights || this.lights)
    };
    b.prototype.process = function (a) {
        if (!this.overrideLights)
            for (var b = 0; b < a.length; b++) {
                var c = a[b],
                    f = c.transformComponent,
                    c = c.lightComponent;
                f._updated && c.updateLight(f.worldTransform)
            }
    };
    return b
});
define("goo/entities/managers/LightManager", ["goo/entities/EventHandler"], function (e) {
    function c() {
        this.type = "LightManager";
        this.lights = []
    }
    c.prototype.addedComponent = function (b, a) {
        a.type === "LightComponent" && this.lights.indexOf(a.light) === -1 && (this.lights.push(a.light), e.dispatch("setLights", this.lights))
    };
    c.prototype.removedComponent = function (b, a) {
        if (a.type === "LightComponent") {
            var c = this.lights.indexOf(a.light);
            c !== -1 && (this.lights.splice(c, 1), e.dispatch("setLights", this.lights))
        }
    };
    return c
});
define("goo/entities/systems/CameraSystem", ["goo/entities/systems/System", "goo/entities/EventHandler", "goo/renderer/Renderer"], function (e, c, b) {
    function a() {
        e.call(this, "CameraSystem", ["TransformComponent", "CameraComponent"]);
        this.mainCamera = null
    }
    a.prototype = Object.create(e.prototype);
    a.prototype.findMainCamera = function () {
        for (var a = null, e = 0; e < this._activeEntities.length; e++) {
            var f = this._activeEntities[e].cameraComponent;
            if (!a || f.isMain) a = f.camera
        }
        c.dispatch("setCurrentCamera", a);
        b.mainCamera = a
    };
    a.prototype.inserted =
        function () {
            this.findMainCamera()
    };
    a.prototype.deleted = function () {
        this.findMainCamera()
    };
    a.prototype.process = function (a) {
        for (var b = 0; b < a.length; b++) {
            var c = a[b],
                e = c.transformComponent,
                c = c.cameraComponent;
            e._updated && c.updateCamera(e.worldTransform)
        }
    };
    return a
});
define("goo/entities/systems/ParticlesSystem", ["goo/entities/systems/System"], function (e) {
    function c() {
        e.call(this, "ParticlesSystem", ["TransformComponent", "MeshRendererComponent", "MeshDataComponent", "ParticleComponent"]);
        this.passive = !1
    }
    c.prototype = Object.create(e.prototype);
    c.prototype.process = function (b, a) {
        if (!(a > 1))
            for (var c = 0, e = b.length; c < e; c++) {
                var f = b[c],
                    i = f.particleComponent;
                if (i.enabled) try {
                    this.updateParticles(f, i, a)
                } catch (h) {
                    console.log(h.stack)
                }
            }
    };
    c.prototype.updateParticles = function (b,
        a, c) {
        for (var e = 0, f = -1, i, h = !1, k = !1; e < a.particleCount;) {
            for (; i === void 0;)
                if (f++, a.emitters.length > f) {
                    i = a.emitters[f];
                    if (i.influences.length)
                        for (var j = 0, l = i.influences.length; j < l; j++) i.influences[j].prepare(b, i);
                    if (i.enabled) {
                        if (i.totalParticlesToSpawn !== 0) i.particlesWaitingToRelease += i.releaseRatePerSecond * c, i.particlesWaitingToRelease = Math.max(i.particlesWaitingToRelease, 0), k = !0;
                        i.particlesWaitingToRelease < 1 && (i = void 0)
                    } else i = void 0
                } else i = null;
            var m = a.particles[e];
            if (m.alive && m.emitter && m.emitter.influences.length) {
                j =
                    0;
                for (l = m.emitter.influences.length; j < l; j++) m.emitter.influences[j].enabled && m.emitter.influences[j].apply(c, m, e)
            }
            m.alive && (m.update(c, b), k = h = !0);
            if (!m.alive && i && (i.particlesWaitingToRelease--, i.totalParticlesToSpawn >= 1 && i.totalParticlesToSpawn--, m.respawnParticle(i), i.getEmissionPoint(m, b), i.getEmissionVelocity(m, b), i.particlesWaitingToRelease < 1 || i.totalParticlesToSpawn === 0)) i = void 0;
            e++
        }
        if (h) a.meshData.vertexData._dataNeedsRefresh = !0, b.meshDataComponent.autoCompute = !0;
        if (!k) a.enabled = !1
    };
    return c
});
define("goo/util/Stats", [], function () {
    return function () {
        var e = Date.now(),
            c = e,
            b = e,
            a = 0,
            d = Infinity,
            g = 0,
            f = 0,
            i = Infinity,
            h = 0,
            k = 0,
            j = 0,
            l = document.createElement("div");
        l.id = "stats";
        l.addEventListener("mousedown", function (a) {
            a.preventDefault();
            x(++j % 2)
        }, !1);
        l.style.cssText = "width:80px;cursor:pointer;z-index:1000;-webkit-touch-callout: none;-webkit-user-select: none;-khtml-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;";
        var m = document.createElement("div");
        m.id = "fps";
        m.style.cssText =
            "padding:0 0 3px 3px;text-align:left;background-color:#002";
        l.appendChild(m);
        var o = document.createElement("div");
        o.id = "fpsText";
        o.style.cssText = "color:#0ff;font-family:Helvetica,Arial,sans-serif;font-size:8px;font-weight:bold;line-height:13px";
        o.innerHTML = "FPS";
        m.appendChild(o);
        var p = document.createElement("div");
        p.id = "fpsGraph";
        p.style.cssText = "position:relative;width:74px;height:30px;background-color:#0ff";
        for (m.appendChild(p); p.children.length < 74;) {
            var n = document.createElement("span");
            n.style.cssText =
                "width:1px;height:30px;float:left;background-color:#113";
            p.appendChild(n)
        }
        var s = document.createElement("div");
        s.id = "ms";
        s.style.cssText = "padding:0 0 3px 3px;text-align:left;background-color:#020;display:none";
        l.appendChild(s);
        var r = document.createElement("div");
        r.id = "msText";
        r.style.cssText = "color:#0f0;font-family:Helvetica,Arial,sans-serif;font-size:8px;font-weight:bold;line-height:13px";
        r.innerHTML = "MS";
        s.appendChild(r);
        var u = document.createElement("div");
        u.id = "msGraph";
        u.style.cssText = "position:relative;width:74px;height:30px;background-color:#0f0";
        for (s.appendChild(u); u.children.length < 74;) n = document.createElement("span"), n.style.cssText = "width:1px;height:30px;float:left;background-color:#131", u.appendChild(n);
        n = document.createElement("div");
        n.id = "info";
        n.style.cssText = "padding:0 0 3px 3px;text-align:left;background-color:#200";
        l.appendChild(n);
        var q = document.createElement("div");
        q.id = "infoText";
        q.style.cssText = "color:#f66;font-family:Helvetica,Arial,sans-serif;font-size:8px;font-weight:bold;line-height:13px";
        q.innerHTML = "INFO";
        n.appendChild(q);
        var x = function (a) {
            j = a;
            switch (j) {
            case 0:
                m.style.display = "block";
                s.style.display = "none";
                break;
            case 1:
                m.style.display = "none", s.style.display = "block"
            }
        };
        this.domElement = l;
        this.setMode = x;
        this.begin = function () {
            e = Date.now()
        };
        this.end = function (j) {
            var l = Date.now();
            if (l > b + 100) {
                a = l - e;
                d = Math.min(d, a);
                g = Math.max(g, a);
                r.textContent = a + " MS (" + d + "-" + g + ")";
                var n = Math.min(30, 30 - a / 200 * 30);
                u.appendChild(u.firstChild).style.height = n + "px";
                b = l;
                if (j) q.innerHTML = "Calls: " + j.calls + "<br>Vertices: " + j.vertices + "<br>Indices: " +
                    j.indices
            }
            k++;
            if (l > c + 1E3) f = Math.round(k * 1E3 / (l - c)), i = Math.min(i, f), h = Math.max(h, f), o.textContent = f + " FPS (" + i + "-" + h + ")", j = Math.min(30, 30 - f / (Math.min(500, h) + 10) * 30), p.appendChild(p.firstChild).style.height = j + "px", c = l, k = 0;
            return l
        };
        this.update = function (a) {
            e = this.end(a)
        }
    }
});
define("goo/entities/systems/CSSTransformSystem", ["goo/entities/systems/System", "goo/renderer/Renderer", "goo/math/Matrix4x4", "goo/math/MathUtils", "goo/math/Vector3"], function (e, c, b, a, d) {
    function g(a) {
        e.call(this, "CSSTransformSystem", ["TransformComponent", "CSSTransformComponent"]);
        this.renderer = a;
        this.viewDom = document.querySelector("#view");
        this.containerDom = document.querySelector("#cam1");
        this.containerDom2 = document.querySelector("#cam2");
        this.tmpMatrix = new b;
        this.tmpMatrix2 = new b;
        this.tmpVector =
            new d
    }
    g.prototype = Object.create(e.prototype);
    var f = function (a) {
        return Math.abs(a) < 1.0E-6 ? 0 : a
    }, i = ["", "-webkit-", "-moz-", "-ms-", "-o-"],
        h = function (a, b, c) {
            for (var d = 0; d < i.length; d++) a.style[i[d] + b] = c
        }, k = function (a) {
            a = a.data;
            return "matrix3d(" + f(a[0]) + "," + f(-a[1]) + "," + f(a[2]) + "," + f(a[3]) + "," + f(a[4]) + "," + f(-a[5]) + "," + f(a[6]) + "," + f(a[7]) + "," + f(a[8]) + "," + f(-a[9]) + "," + f(a[10]) + "," + f(a[11]) + "," + f(a[12]) + "," + f(-a[13]) + "," + f(a[14]) + "," + f(a[15]) + ")"
        };
    g.prototype.process = function (b) {
        if (b.length !== 0) {
            var f = c.mainCamera,
                e = 0.5 / Math.tan(a.DEG_TO_RAD * f.fov * 0.5) * this.renderer.domElement.offsetHeight;
            h(this.viewDom, "perspective", e + "px");
            this.tmpMatrix.copy(f.getViewInverseMatrix());
            this.tmpMatrix2.copy(this.tmpMatrix);
            this.tmpMatrix.invert();
            this.tmpMatrix.setTranslation(new d(0, 0, e));
            var g = k(this.tmpMatrix);
            h(this.containerDom, "transform", g);
            this.tmpMatrix2.e03 = -this.tmpMatrix2.e03;
            this.tmpMatrix2.e23 = -this.tmpMatrix2.e23;
            this.tmpMatrix2.setRotationFromVector(new d(0, 0, 0));
            g = k(this.tmpMatrix2);
            h(this.containerDom2, "transform",
                g);
            for (e = 0; e < b.length; e++) {
                var g = b[e],
                    i = g.getComponent("CSSTransformComponent"),
                    n = i.domElement,
                    s = i.scale,
                    s = [s, -s, s].join(",");
                i.faceCamera ? (g.transformComponent.worldTransform.matrix.getTranslation(this.tmpVector), this.tmpMatrix.copy(f.getViewInverseMatrix()), this.tmpMatrix.setTranslation(this.tmpVector)) : this.tmpMatrix.copy(g.transformComponent.worldTransform.matrix);
                g = "translate3d(-50%,-50%,0) " + k(this.tmpMatrix) + "scale3d(" + s + ")";
                h(n, "transform", g);
                n.parentNode !== this.containerDom2 && this.containerDom2.appendChild(n)
            }
        }
    };
    return g
});
define("goo/entities/systems/AnimationSystem", ["goo/entities/systems/System", "goo/entities/World"], function (e, c) {
    function b() {
        e.call(this, "AnimationSystem", ["AnimationComponent"])
    }
    b.prototype = Object.create(e.prototype);
    b.prototype.process = function (a) {
        for (var b = 0; b < a.length; b++) {
            var e = a[b],
                f = e.animationComponent;

            f.update(c.time);
            f.apply(e.transformComponent);
            f.postUpdate()
        }
    };
    return b
});
define("goo/shapes/TextureGrid", ["goo/renderer/MeshData"], function (e) {
    function c(a, b) {
        this.matrix = a;
        this.textureUnitsPerLine = b || 8;
        for (var c = e.defaultMap([e.POSITION, e.NORMAL, e.TEXCOORD0]), f, i = f = 0; i < a.length; i++) f += a[i].length;
        e.call(this, c, f * 4, f * 6);
        this.rebuild()
    }

    function b(a) {
        var b = [];
        a.split("\n").forEach(function (a) {
            a = a.split("").map(function (a) {
                return a.charCodeAt(0)
            });
            b.push(a)
        });
        return b
    }
    c.prototype = Object.create(e.prototype);
    c.prototype.rebuild = function () {
        for (var a = [], b = [], c = [], f = [], i = 0, h =
                0; h < this.matrix.length; h++)
            for (var k = 0; k < this.matrix[h].length; k++) {
                a.push(k, -h - 1, 0, k, -h, 0, k + 1, -h, 0, k + 1, -h - 1, 0);
                b.push(0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1);
                var j = this.matrix[h][k] % this.textureUnitsPerLine / this.textureUnitsPerLine,
                    l = Math.floor(this.matrix[h][k] / this.textureUnitsPerLine) / this.textureUnitsPerLine,
                    l = 1 - l;
                f.push(j, l - 1 / this.textureUnitsPerLine, j, l, j + 1 / this.textureUnitsPerLine, l, j + 1 / this.textureUnitsPerLine, l - 1 / this.textureUnitsPerLine);
                c.push(i + 3, i + 1, i + 0, i + 2, i + 1, i + 3);
                i += 4
            }
        this.getAttributeBuffer(e.POSITION).set(a);
        this.getAttributeBuffer(e.NORMAL).set(b);
        this.getAttributeBuffer(e.TEXCOORD0).set(f);
        this.getIndexBuffer().set(c);
        return this
    };
    c.fromString = function (a) {
        return new c(b(a), 16)
    };
    return c
});
define("goo/entities/systems/TextSystem", ["goo/entities/systems/System", "goo/shapes/TextureGrid", "goo/entities/components/MeshDataComponent"], function (e, c, b) {
    function a() {
        e.call(this, "TextSystem", ["TextComponent"])
    }
    a.prototype = Object.create(e.prototype);
    a.prototype.process = function (a) {
        for (var e = 0; e < a.length; e++) {
            var f = a[e],
                i = f.textComponent;
            if (i.dirty) f.hasComponent("MeshDataComponent") ? f.getComponent("MeshDataComponent").meshData = c.fromString(i.text) : (i = c.fromString(i.text), i = new b(i), f.setComponent(i)),
            this.dirty = !1
        }
    };
    return a
});
define("goo/util/LightPointer", "goo/renderer/MeshData,goo/util/MeshBuilder,goo/math/Transform,goo/shapes/ShapeCreator,goo/entities/components/MeshDataComponent,goo/entities/components/MeshRendererComponent,goo/renderer/Material,goo/renderer/shaders/ShaderLib,goo/math/MathUtils,goo/renderer/light/PointLight,goo/renderer/light/DirectionalLight,goo/renderer/light/SpotLight".split(","), function (e, c, b, a, d, g, f, i, h, k, j, l) {
    function m() {}

    function o(a, b) {
        for (var a = a || 1, b = b || 8, c = [], d = [], f = Math.PI * 2 / b, g = 0, h =
                0; g < b; g++, h += f) c.push(Math.cos(h) * a, Math.sin(h) * a, 0), d.push(g, g + 1);
        d[d.length - 1] = 0;
        f = new e(e.defaultMap([e.POSITION]), b, d.length);
        f.getAttributeBuffer(e.POSITION).set(c);
        f.getIndexBuffer().set(d);
        f.indexLengths = null;
        f.indexModes = ["Lines"];
        return f
    }

    function p(d) {
        if (d instanceof k) {
            var f = new c,
                g = new b,
                i = d.range,
                i = i || 1,
                d = new c,
                i = o(i, 128),
                m;
            m = new b;
            d.addMeshData(i, m);
            m = new b;
            m.rotation.fromAngles(0, Math.PI / 2, 0);
            m.update();
            d.addMeshData(i, m);
            m = new b;
            m.rotation.fromAngles(Math.PI / 2, Math.PI / 2, 0);
            m.update();
            d.addMeshData(i, m);
            d = d.build()[0];
            i = a.createSphere(8, 8, 0.1);
            f.addMeshData(d, g);
            f.addMeshData(i, g);
            return f.build()[0]
        }
        if (d instanceof j) {
            f = new c;
            g = new b;
            g.scale.setd(1, 1, -1);
            g.update();
            d = new c;
            for (m = 0; m < 2; m++) {
                var p = o(2, 64),
                    i = new b;
                i.translation.set(0, 0, 10 * m);
                i.update();
                d.addMeshData(p, i)
            }
            p = 4;
            i = [];
            m = [];
            for (var t = Math.PI * 2 / p, w = 0, z = 0; w < p; w++, z += t) i.push(Math.cos(z), Math.sin(z), 0), i.push(Math.cos(z), Math.sin(z), 1), m.push(w * 2, w * 2 + 1);
            p = new e(e.defaultMap([e.POSITION]), p * 2, m.length);
            p.getAttributeBuffer(e.POSITION).set(i);
            p.getIndexBuffer().set(m);
            p.indexLengths = null;
            p.indexModes = ["Lines"];
            i = new b;
            i.scale.set(2, 2, 20);
            i.update();
            d.addMeshData(p, i);
            d = d.build()[0];
            i = a.createSphere(8, 8, 0.1);
            f.addMeshData(d, g);
            f.addMeshData(i, g);
            return f.build()[0]
        }
        if (d instanceof l) {
            f = new c;
            g = new b;
            m = d.angle;
            i = d.range;
            m = m || 45;
            i = i || 1;
            d = new c;
            i /= 2;
            m = Math.tan(m * h.DEG_TO_RAD / 2) * i;
            for (t = 1; t <= 2; t++) w = o(m * t, 64), p = new b, p.translation.set(0, 0, i * t), p.update(), d.addMeshData(w, p);
            for (var w = 4, p = [0, 0, 0], t = [], z = Math.PI * 2 / w, v = 0, A = 0; v < w; v++, A += z) p.push(Math.cos(A),
                Math.sin(A), 1), t.push(0, v + 1);
            w = new e(e.defaultMap([e.POSITION]), w + 1, t.length);
            w.getAttributeBuffer(e.POSITION).set(p);
            w.getIndexBuffer().set(t);
            w.indexLengths = null;
            w.indexModes = ["Lines"];
            p = new b;
            p.scale.set(m * 2, m * 2, i * 2);
            p.update();
            d.addMeshData(w, p);
            d = d.build()[0];
            i = a.createSphere(8, 8, 0.1);
            f.addMeshData(i, g);
            g.scale.setd(1, 1, -1);
            g.update();
            f.addMeshData(d, g);
            return f.build()[0]
        }
    }
    m.getMeshData = function (a) {
        return p(a)
    };
    m.attachPointer = function (a) {
        var b = a.getComponent("lightComponent").light,
            c = p(b),
            c = new d(c);
        a.setComponent(c);
        c = new g;
        a.setComponent(c);
        c = f.createMaterial(i.simpleColored, "");
        c.uniforms.color = [b.color.data[0], b.color.data[1], b.color.data[2]];
        a.meshRendererComponent.materials.push(c);
        return a
    };
    m.removeMesh = function (a) {
        a.clearComponent("meshDataComponent");
        a.clearComponent("meshRendererComponent");
        return a
    };
    return m
});
define("goo/entities/systems/LightDebugSystem", "goo/entities/systems/System,goo/entities/components/MeshDataComponent,goo/entities/components/MeshRendererComponent,goo/renderer/Material,goo/renderer/shaders/ShaderLib,goo/util/LightPointer".split(","), function (e, c, b, a, d, g) {
    function f() {
        e.call(this, "LightDebugSystem", ["LightDebugComponent"])
    }
    f.prototype = Object.create(e.prototype);
    f.prototype.inserted = function (f) {
        var e = f.lightComponent.light,
            k = g.getMeshData(e);
        f.setComponent(new c(k));
        k = a.createMaterial(d.simpleColored,
            "");
        k.uniforms.color = [e.color.data[0], e.color.data[1], e.color.data[2]];
        e = new b;
        e.materials.push(k);
        f.setComponent(e);
        e.updateBounds(f.meshDataComponent.modelBound, f.transformComponent.worldTransform)
    };
    f.prototype.process = function (a) {
        for (var b = 0; b < a.length; b++) {
            var c = a[b],
                d = c.lightComponent.light;
            if (d.changedProperties) d.changedProperties = !1, c.meshDataComponent.meshData = g.getMeshData(d), c.meshRendererComponent.updateBounds(c.meshDataComponent.modelBound, c.transformComponent.worldTransform);
            if (d.changedColor) d.changedColor = !1, c.meshRendererComponent.materials[0].uniforms.color = [d.color.data[0], d.color.data[1], d.color.data[2]]
        }
    };
    f.prototype.deleted = function (a) {
        a.clearComponent("MeshDataComponent");
        a.clearComponent("MeshRendererComponent")
    };
    return f
});
define("goo/util/FrustumViewer", "goo/renderer/MeshData,goo/util/MeshBuilder,goo/math/Transform,goo/shapes/ShapeCreator,goo/entities/components/MeshDataComponent,goo/entities/components/MeshRendererComponent,goo/renderer/Material,goo/renderer/shaders/ShaderLib,goo/shapes/Box,goo/shapes/Cylinder".split(","), function (e, c, b, a, d, g, f, i, h, k) {
    function j() {}

    function l(a, b, c, d) {
        var f, g, h, j, i, k, l, m, A, y, B, C, F, N, D, K, J, O, M, I, W;
        f = Math.tan(a * Math.PI / 180 / 2);
        M = -f * d * b;
        I = f * d;
        W = -d;
        K = -f * d * b;
        J = -f * d;
        O = -d;
        F = f * d * b;
        N = -f * d;
        D = -d;
        a = f * d * b;
        B = f * d;
        C = -d;
        m = -f * c * b;
        A = f * c;
        y = -c;
        i = -f * c * b;
        k = -f * c;
        l = -c;
        d = f * c * b;
        h = -f * c;
        j = -c;
        b *= f * c;
        f *= c;
        g = -c;
        c = [];
        c.push(M, I, W);
        c.push(K, J, O);
        c.push(F, N, D);
        c.push(a, B, C);
        c.push(m, A, y);
        c.push(i, k, l);
        c.push(d, h, j);
        c.push(b, f, g);
        a = [];
        a.push(0, 1);
        a.push(1, 2);
        a.push(2, 3);
        a.push(3, 0);
        a.push(4, 5);
        a.push(5, 6);
        a.push(6, 7);
        a.push(7, 4);
        a.push(0, 4);
        a.push(1, 5);
        a.push(2, 6);
        a.push(3, 7);
        B = new e(e.defaultMap([e.POSITION]), 8, 24);
        B.getAttributeBuffer(e.POSITION).set(c);
        B.getIndexBuffer().set(a);
        B.indexLengths = null;
        B.indexModes = ["Lines"];
        return B
    }

    function m(a) {
        var d = new c,
            f = new b,
            a = l(a.fov, a.aspect, a.near, a.far);
        d.addMeshData(a, f);
        var a = new k(32, 0.6),
            g = new k(32, 0.6),
            j = new h(0.3, 1, 1.6),
            i = new h(0.2, 0.15, 0.7);
        i.applyFunction(e.POSITION, function (a) {
            return [a.x + a.x / ((a.z + 1.1) * 0.3), a.y + a.y / ((a.z + 1.1) * 0.3), a.z]
        });
        f.translation.setd(0, 0, 0);
        f.update();
        d.addMeshData(i, f);
        f.translation.setd(0, 0, 1.3);
        f.update();
        d.addMeshData(j, f);
        f.scale.setd(1, 1, 0.5);
        f.setRotationXYZ(0, Math.PI / 2, 0);
        f.translation.setd(0, 1.2, 0.6);
        f.update();
        d.addMeshData(a,
            f);
        f.translation.setd(0, 1.2, 2);
        f.update();
        d.addMeshData(g, f);
        return d.build()[0]
    }
    j.getMeshData = function (a) {
        return m(a)
    };
    j.attachGuide = function (a) {
        var b = a.getComponent("CameraComponent").camera,
            b = l(b.fov, b.aspect, b.near, b.far - b.far / 1E3),
            b = new d(b);
        a.setComponent(b);
        var b = new g,
            c = f.createMaterial(i.simpleColored, "");
        c.uniforms.color = [0.5, 0.7, 1];
        b.materials.push(c);
        a.setComponent(b);
        return a
    };
    j.removeMesh = function (a) {
        a.hasComponent("cameraComponent") && (a.clearComponent("meshDataComponent"), a.clearComponent("meshRendererComponent"));
        return a
    };
    return j
});
define("goo/entities/systems/CameraDebugSystem", "goo/entities/systems/System,goo/entities/components/MeshDataComponent,goo/entities/components/MeshRendererComponent,goo/renderer/Material,goo/renderer/shaders/ShaderLib,goo/util/FrustumViewer".split(","), function (e, c, b, a, d, g) {
    function f() {
        e.call(this, "CameraDebugSystem", ["CameraDebugComponent"])
    }
    f.prototype = Object.create(e.prototype);
    f.prototype.inserted = function (f) {
        var e = g.getMeshData(f.cameraComponent.camera);
        f.setComponent(new c(e));
        e = a.createMaterial(d.simpleColored,
            "");
        e.uniforms.color = [0.4, 0.7, 1];
        var k = new b;
        k.materials.push(e);
        f.setComponent(k);
        k.updateBounds(f.meshDataComponent.modelBound, f.transformComponent.worldTransform)
    };
    f.prototype.process = function (a) {
        for (var b = 0; b < a.length; b++) {
            var c = a[b],
                d = c.cameraComponent.camera;
            if (d.changedProperties) c.meshDataComponent.meshData = g.getMeshData(d), c.meshRendererComponent.updateBounds(c.meshDataComponent.modelBound, c.transformComponent.worldTransform), d.changedProperties = !1
        }
    };
    f.prototype.deleted = function (a) {
        a.clearComponent("MeshDataComponent");
        a.clearComponent("MeshRendererComponent")
    };
    return f
});
define("goo/util/GameUtils", [], function () {
    function e() {}
    e.supported = {
        fullscreen: !0,
        pointerLock: !0
    };
    e.toggleFullScreen = function () {
        console.log("asdfs");
        document.fullscreenElement ? document.cancelFullScreen && document.cancelFullScreen() : document.documentElement.requestFullScreen && document.documentElement.requestFullScreen()
    };
    e.requestPointerLock = function () {
        document.documentElement.requestPointerLock && document.documentElement.requestPointerLock()
    };
    e.exitPointerLock = function () {
        document.exitPointerLock && document.exitPointerLock()
    };
    e.togglePointerLock = function () {
        document.pointerLockElement ? document.exitPointerLock && document.exitPointerLock() : document.documentElement.requestPointerLock && document.documentElement.requestPointerLock()
    };
    e.addVisibilityChangeListener = function (c) {
        if (typeof c === "function") {
            for (var b = ["", "ms", "moz", "webkit"], a, d, e = 0; e < b.length; ++e) {
                var f = b[e] + (b[e].length === 0 ? "hidden" : "Hidden"),
                    i = b[e] + "visibilitychange";
                if (typeof document[f] !== "undefined") {
                    a = f;
                    d = i;
                    break
                }
            }
            typeof document.addEventListener !== "undefined" &&
                typeof a !== "undefined" && document.addEventListener(d, function () {
                    document[a] ? c(!0) : c(!1)
                })
        }
    };
    e.initAllShims = function (c) {
        this.initAnimationShims();
        this.initFullscreenShims(c);
        this.initPointerLockShims(c)
    };
    e.initAnimationShims = function () {
        for (var c = 0, b = ["ms", "moz", "webkit", "o"], a = 0; a < b.length && !window.requestAnimationFrame; ++a) window.requestAnimationFrame = window[b[a] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[b[a] + "CancelAnimationFrame"] || window[b[a] + "CancelRequestAnimationFrame"];
        if (window.requestAnimationFrame ===
            void 0) window.requestAnimationFrame = function (a) {
            var b = Date.now(),
                f = Math.max(0, 16 - (b - c)),
                e = window.setTimeout(function () {
                    a(b + f)
                }, f);
            c = b + f;
            return e
        };
        if (window.cancelAnimationFrame === void 0) window.cancelAnimationFrame = function (a) {
            clearTimeout(a)
        }
    };
    e.initFullscreenShims = function (c) {
        function b() {
            var a = document.createEvent("CustomEvent");
            a.initCustomEvent("fullscreenchange", !0, !1, null);
            document.dispatchEvent(a)
        }

        function a() {
            var a = document.createEvent("CustomEvent");
            a.initCustomEvent("fullscreenerror", !0, !1, null);
            document.dispatchEvent(a)
        }
        var c = c || window,
            d = (c.HTMLElement || c.Element).prototype;
        if (!document.hasOwnProperty("fullscreenEnabled")) {
            var g = function () {
                if ("webkitIsFullScreen" in document) return function () {
                    return document.webkitFullscreenEnabled
                };
                if ("mozFullScreenEnabled" in document) return function () {
                    return document.mozFullScreenEnabled
                };
                e.supported.fullscreen = !1;
                return function () {
                    return !1
                }
            }();
            Object.defineProperty(document, "fullscreenEnabled", {
                enumerable: !0,
                configurable: !1,
                writeable: !1,
                get: g
            })
        }
        document.hasOwnProperty("fullscreenElement") ||
            (g = function () {
            for (var a = ["webkitCurrentFullScreenElement", "webkitFullscreenElement", "mozFullScreenElement"], b = function (b) {
                    return function () {
                        return document[a[b]]
                    }
                }, c = 0; c < a.length; c++)
                if (a[c] in document) return b(c);
            return function () {
                return null
            }
        }(), Object.defineProperty(document, "fullscreenElement", {
            enumerable: !0,
            configurable: !1,
            writeable: !1,
            get: g
        }));
        document.addEventListener("webkitfullscreenchange", b, !1);
        document.addEventListener("mozfullscreenchange", b, !1);
        document.addEventListener("webkitfullscreenerror",
            a, !1);
        document.addEventListener("mozfullscreenerror", a, !1);
        if (!d.requestFullScreen) d.requestFullScreen = function () {
            return d.webkitRequestFullScreen ? function () {
                this.webkitRequestFullScreen(c.Element.ALLOW_KEYBOARD_INPUT)
            } : d.mozRequestFullScreen ? function () {
                this.mozRequestFullScreen()
            } : function () {}
        }();
        if (!document.cancelFullScreen) document.cancelFullScreen = function () {
            return document.webkitCancelFullScreen || document.mozCancelFullScreen || function () {}
        }()
    };
    e.initPointerLockShims = function (c) {
        function b() {
            var a =
                document.createEvent("CustomEvent");
            a.initCustomEvent("pointerlockchange", !0, !1, null);
            document.dispatchEvent(a)
        }

        function a() {
            var a = document.createEvent("CustomEvent");
            a.initCustomEvent("pointerlockerror", !0, !1, null);
            document.dispatchEvent(a)
        }
        var c = c || window,
            d = (c.HTMLElement || c.Element).prototype,
            c = c.MouseEvent.prototype;
        "movementX" in c || Object.defineProperty(c, "movementX", {
            enumerable: !0,
            configurable: !1,
            writeable: !1,
            get: function () {
                return this.webkitMovementX || this.mozMovementX || 0
            }
        });
        "movementY" in c ||
            Object.defineProperty(c, "movementY", {
                enumerable: !0,
                configurable: !1,
                writeable: !1,
                get: function () {
                    return this.webkitMovementY || this.mozMovementY || 0
                }
            });
        if (!navigator.pointer) navigator.pointer = navigator.webkitPointer || navigator.mozPointer;
        document.addEventListener("webkitpointerlockchange", b, !1);
        document.addEventListener("webkitpointerlocklost", b, !1);
        document.addEventListener("mozpointerlockchange", b, !1);
        document.addEventListener("mozpointerlocklost", b, !1);
        document.addEventListener("webkitpointerlockerror",
            a, !1);
        document.addEventListener("mozpointerlockerror", a, !1);
        document.hasOwnProperty("pointerLockElement") || (c = function () {
            return "webkitPointerLockElement" in document ? function () {
                return document.webkitPointerLockElement
            } : "mozPointerLockElement" in document ? function () {
                return document.mozPointerLockElement
            } : function () {
                return null
            }
        }(), Object.defineProperty(document, "pointerLockElement", {
            enumerable: !0,
            configurable: !1,
            writeable: !1,
            get: c
        }));
        if (!d.requestPointerLock) d.requestPointerLock = function () {
            if (d.webkitRequestPointerLock) return function () {
                this.webkitRequestPointerLock()
            };
            if (d.mozRequestPointerLock) return function () {
                this.mozRequestPointerLock()
            };
            if (navigator.pointer) return function () {
                navigator.pointer.lock(this, b, a)
            };
            e.supported.pointerLock = !1;
            return function () {}
        }();
        if (!document.exitPointerLock) document.exitPointerLock = function () {
            return document.webkitExitPointerLock || document.mozExitPointerLock || function () {
                navigator.pointer && navigator.pointer.unlock()
            }
        }()
    };
    return e
});
define("goo/util/Logo", [], function () {
    function e() {}
    e.blue = "#2A3276";
    e.white = "#FFFFFF";
    var c = {
        color: e.blue,
        shadow: !1
    };
    e.getLogo = function (b) {
        var b = b || {}, a;
        for (a in c) b[a] === void 0 && (b[a] = c[a]);
        a = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        a.setAttribute("version", "1.1");
        a.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        a.setAttribute("x", "0px");
        a.setAttribute("y", "0px");
        a.setAttribute("viewBox", "0 0 396.603 277.343");
        a.setAttribute("enable-background", "new 0 0 396.603 277.343");
        a.setAttribute("xml:space", "preserve");
        b.width && a.setAttribute("width", b.width);
        b.height && a.setAttribute("height", b.height);
        var d = document.createElementNS("http://www.w3.org/2000/svg", "g");
        a.appendChild(d);
        var e = document.createElementNS("http://www.w3.org/2000/svg", "filter");
        e.setAttribute("id", "insetShadow");
        var f = document.createElementNS("http://www.w3.org/2000/svg", "feGaussianBlur");
        f.setAttribute("in", "SourceAlpha");
        f.setAttribute("stdDeviation", "0");
        var i = document.createElementNS("http://www.w3.org/2000/svg",
            "feOffset");
        i.setAttribute("dx", "0");
        i.setAttribute("dy", "-5");
        i.setAttribute("result", "offsetblur");
        var h = document.createElementNS("http://www.w3.org/2000/svg", "feComponentTransfer"),
            k = document.createElementNS("http://www.w3.org/2000/svg", "feFuncA");
        k.setAttribute("type", "linear");
        k.setAttribute("slope", "0.5");
        h.appendChild(k);
        var k = document.createElementNS("http://www.w3.org/2000/svg", "feMerge"),
            j = document.createElementNS("http://www.w3.org/2000/svg", "feMergeNode"),
            l = document.createElementNS("http://www.w3.org/2000/svg",
                "feMergeNode");
        l.setAttribute("in", "SourceGraphic");
        k.appendChild(j);
        k.appendChild(l);
        e.appendChild(f);
        e.appendChild(i);
        e.appendChild(h);
        e.appendChild(k);
        d.appendChild(e);
        f = document.createElementNS("http://www.w3.org/2000/svg", "path");
        f.setAttribute("d", "M303.337,46.286c-13.578,0-25.784,5.744-34.396,14.998c-9.86,10.59-26.319,10.59-36.172,0c-8.605-9.254-20.818-14.998-34.402-14.998c-25.936,0-46.971,21.034-46.971,46.978c0,25.936,21.035,46.972,46.971,46.972c13.584,0,25.797-5.744,34.402-14.998c9.853-10.598,26.325-10.598,36.172,0c8.612,9.254,20.818,14.998,34.396,14.998c25.941,0,46.977-21.036,46.977-46.972C350.313,67.32,329.278,46.286,303.337,46.286z M198.296,116.39c-12.785,0-23.146-10.359-23.146-23.144s10.361-23.151,23.146-23.151c12.795,0,23.156,10.367,23.156,23.151S211.091,116.39,198.296,116.39z M303.337,116.407c-12.785,0-23.146-10.36-23.146-23.144c0-12.784,10.36-23.151,23.146-23.151c12.795,0,23.156,10.367,23.156,23.151C326.493,106.047,316.132,116.407,303.337,116.407z M156.18,138.347c-14.087-3.23-22.316-17.482-18.068-31.305c3.704-12.072,2.568-25.511-4.22-37.256C120.927,47.323,92.22,39.63,69.766,52.587C47.317,65.552,39.624,94.26,52.581,116.713c6.795,11.761,17.853,19.462,30.17,22.282c14.084,3.235,22.314,17.497,18.074,31.317c-3.711,12.08-2.582,25.504,4.213,37.264c12.965,22.455,41.666,30.148,64.127,17.178c22.447-12.945,30.148-41.658,17.185-64.111C179.554,148.881,168.497,141.181,156.18,138.347z M104.802,113.287c-11.064,6.387-25.219,2.599-31.604-8.474c-6.397-11.07-2.604-25.225,8.474-31.609c11.057-6.398,25.22-2.598,31.611,8.46C119.673,92.741,115.872,106.897,104.802,113.287z M145.687,207.256c-12.785,0-23.145-10.361-23.145-23.145s10.359-23.15,23.145-23.15c12.797,0,23.156,10.367,23.156,23.15S158.483,207.256,145.687,207.256z");
        f.setAttribute("fill", b.color);
        b.shadow && (d.appendChild(e), f.setAttribute("style", "filter:url(#insetShadow)"));
        d.appendChild(f);
        return (new XMLSerializer).serializeToString(a)
    };
    return e
});
define("goo/entities/GooRunner", "goo/entities/World,goo/entities/systems/TransformSystem,goo/entities/systems/RenderSystem,goo/renderer/Renderer,goo/renderer/Material,goo/renderer/Util,goo/renderer/shaders/ShaderLib,goo/entities/systems/BoundingUpdateSystem,goo/entities/systems/ScriptSystem,goo/entities/systems/LightingSystem,goo/entities/managers/LightManager,goo/entities/systems/CameraSystem,goo/entities/systems/ParticlesSystem,goo/util/Stats,goo/entities/systems/CSSTransformSystem,goo/entities/systems/AnimationSystem,goo/entities/systems/TextSystem,goo/entities/systems/LightDebugSystem,goo/entities/systems/CameraDebugSystem,goo/util/GameUtils,goo/util/Logo".split(","), function (e,
    c, b, a, d, g, f, i, h, k, j, l, m, o, p, n, s, r, u, q, x) {
    function t(d) {
        d = d || {};
        this.world = new e(this);
        this.renderer = new a(d);
        this.world.setSystem(new h(this.renderer));
        this.world.setSystem(new c);
        this.world.setSystem(new l);
        this.world.setSystem(new p(this.renderer));
        this.world.setSystem(new m);
        this.world.setSystem(new i);
        this.world.setSystem(new k);
        this.world.setSystem(new n);
        this.world.setSystem(new r);
        this.world.setSystem(new u);
        this.renderSystem = new b;
        this.renderSystems = [this.renderSystem];
        this.world.setSystem(this.renderSystem);
        this.doRender = this.doProcess = !0;
        q.initAllShims();
        this.tpfSmoothingCount = d.tpfSmoothingCount !== void 0 ? d.tpfSmoothingCount : 10;
        if (d.showStats) this.stats = new o, this.stats.domElement.style.position = "absolute", this.stats.domElement.style.left = "10px", this.stats.domElement.style.top = "10px", document.body.appendChild(this.stats.domElement);
        if (d.logo === void 0 || d.logo) {
            var f = this._buildLogo(d.logo);
            document.body.appendChild(f)
        }
        this.callbacks = [];
        this.callbacksPreProcess = [];
        this.callbacksPreRender = [];
        this._takeSnapshots = [];
        var g = this;
        this.start = -1;
        this.run = function (a) {
            try {
                g._updateFrame(a)
            } catch (b) {
                b instanceof Error ? console.error(b.stack) : console.error(b)
            }
        };
        this.animationId = 0;
        d.manuallyStartGameLoop || this.startGameLoop(this.run);
        d.debugKeys && this._addDebugKeys();
        this._events = {
            click: null,
            mousedown: null,
            mouseup: null,
            mousemove: null
        };
        this._eventListeners = {
            click: [],
            mousedown: [],
            mouseup: [],
            mousemove: []
        };
        this._eventTriggered = {
            click: null,
            mousedown: null,
            mouseup: null,
            mousemove: null
        };
        q.addVisibilityChangeListener(function (a) {
            a ?
                this.stopGameLoop() : this.startGameLoop()
        }.bind(this));
        this._picking = {
            x: 0,
            y: 0,
            skipUpdateBuffer: !1,
            doPick: !1,
            pickingCallback: null,
            pickingStore: {},
            clearColorStore: []
        }
    }
    t.prototype.setRenderSystem = function (a, b) {
        this.world.setSystem(a);
        b !== void 0 ? this.renderSystems.splice(b, 0, a) : this.renderSystems.push(a)
    };
    var w = [],
        z = 0;
    t.prototype._updateFrame = function (b) {
        if (this.start < 0) this.start = b;
        var c = (b - this.start) / 1E3;
        if (c < 0 || c > 1) this.start = b;
        else {
            c = Math.max(Math.min(c, 0.5), 1.0E-4);
            w[z] = c;
            z = (z + 1) % this.tpfSmoothingCount;
            for (var d = c = 0; d < w.length; d++) c += w[d];
            c /= w.length;
            this.world.tpf = c;
            this.world.time += this.world.tpf;
            e.time = this.world.time;
            this.start = b;
            for (d = 0; d < this.callbacksPreProcess.length; d++) this.callbacksPreProcess[d](this.world.tpf);
            this.doProcess && this.world.process();
            this.renderer.info.reset();
            if (this.doRender) {
                this.renderer.checkResize(a.mainCamera);
                this.renderer.setRenderTarget();
                this.renderer.clear();
                for (d = 0; d < this.callbacksPreRender.length; d++) this.callbacksPreRender[d](this.world.tpf);
                for (d = 0; d < this.renderSystems.length; d++) this.renderSystems[d].render(this.renderer);
                if (this._picking.doPick) {
                    b = this.renderer.clearColor.data;
                    this._picking.clearColorStore[0] = b[0];
                    this._picking.clearColorStore[1] = b[1];
                    this._picking.clearColorStore[2] = b[2];
                    this._picking.clearColorStore[3] = b[3];
                    this.renderer.setClearColor(0, 0, 0, 1);
                    for (d = 0; d < this.renderSystems.length; d++) this.renderSystems[d].renderToPick && this.renderSystems[d].renderToPick(this.renderer, this._picking.skipUpdateBuffer);
                    this.renderer.pick(this._picking.x, this._picking.y, this._picking.pickingStore, a.mainCamera);
                    this._picking.pickingCallback(this._picking.pickingStore.id,
                        this._picking.pickingStore.depth);
                    this._picking.doPick = !1;
                    this.renderer.setClearColor.apply(this.renderer, this._picking.clearColorStore)
                }
            }
            for (d = 0; d < this.callbacks.length; d++) this.callbacks[d](this.world.tpf);
            this.stats && this.stats.update(this.renderer.info);
            if (this._takeSnapshots.length) {
                try {
                    for (var f = this.renderer.domElement.toDataURL(), d = this._takeSnapshots.length - 1; d >= 0; d--) this._takeSnapshots[d](f)
                } catch (g) {
                    console.error("Failed to take snapshot", g.message)
                }
                this._takeSnapshots = []
            }
        }
        this.animationId =
            window.requestAnimationFrame(this.run)
    };
    t.prototype._buildLogo = function (a) {
        var b = document.createElement("div"),
            c = x.getLogo({
                width: "70px",
                height: "50px",
                color: x.blue
            });
        b.innerHTML = '<a style="text-decoration: none;" href="http://www.gooengine.com" target="_blank"><span style="color: #EEE; font-family: Helvetica, sans-serif; font-size: 11px; display: inline-block; margin-top: 14px; margin-right: -3px; vertical-align: top;">Powered by</span>' + c + "</a>";
        b.style.position = "absolute";
        b.style.zIndex = "2000";
        a === "topright" ? (b.style.top = "10px", b.style.right = "10px") : a === "topleft" ? (b.style.top = "10px", b.style.left = "10px") : a === "bottomright" ? (b.style.bottom = "10px", b.style.right = "10px") : a === "bottomleft" ? (b.style.bottom = "10px", b.style.left = "10px") : (b.style.top = "10px", b.style.right = "10px");
        b.id = "goologo";
        b.style.webkitTouchCallout = "none";
        b.style.webkitUserSelect = "none";
        b.style.khtmlUserSelect = "none";
        b.style.mozUserSelect = "none";
        b.style.msUserSelect = "none";
        b.style.userSelect = "none";
        b.ondragstart = function () {
            return !1
        };
        return b
    };
    t.prototype._addDebugKeys = function () {
        document.addEventListener("keydown", function (a) {
            a.which === 32 && a.shiftKey ? q.toggleFullScreen() : a.which === 13 && a.shiftKey ? q.togglePointerLock() : a.which === 49 && a.shiftKey ? this.renderSystem.setDebugMaterial() : (a.which === 50 || a.which === 222) && a.shiftKey ? this.renderSystem.setDebugMaterial("normals") : a.which === 51 && a.shiftKey ? this.renderSystem.setDebugMaterial("lit") : a.which === 52 && a.shiftKey ? this.renderSystem.setDebugMaterial("color") : a.which === 53 && a.shiftKey ? this.renderSystem.setDebugMaterial("wireframe") :
                a.which === 54 && a.shiftKey ? this.renderSystem.setDebugMaterial("flat") : (a.which === 55 || a.which === 191) && a.shiftKey ? this.renderSystem.setDebugMaterial("texture") : a.which === 56 && a.shiftKey && this.renderSystem.setDebugMaterial("+wireframe")
        }.bind(this), !1);
        document.addEventListener("mousedown", function (a) {
            a.shiftKey && this.pick(a.clientX, a.clientY, function (a, b) {
                var c = this.world.entityManager.getEntityById(a);
                console.log("Picked entity:", c, "At depth:", b)
            }.bind(this))
        }.bind(this), !1)
    };
    t.prototype.addEventListener =
        function (a, b) {
            this._eventListeners[a] && !(this._eventListeners[a].indexOf(b) > -1) && typeof b === "function" && (this._eventListeners[a].push(b), this._eventListeners[a].length === 1 && this._enableEvent(a))
    };
    t.prototype.removeEventListener = function (a, b) {
        if (this._eventListeners[a]) {
            var c = this._eventListeners[a].indexOf(b);
            c > -1 && this._eventListeners[a].splice(c, 1);
            this._eventListeners[a].length === 0 && this._disableEvent(a)
        }
    };
    t.prototype._dispatchEvent = function (a) {
        for (var b in this._eventTriggered)
            if (this._eventTriggered[b] &&
                this._eventListeners[b]) {
                for (var c = {
                    entity: a.entity,
                    depth: a.depth,
                    x: a.x,
                    y: a.y,
                    type: b,
                    domEvent: this._eventTriggered[b],
                    id: a.id
                }, d = 0; d < this._eventListeners[b].length; d++)
                    if (this._eventListeners[b][d](c) === !1) break;
                this._eventTriggered[b] = null
            }
    };
    t.prototype._enableEvent = function (a) {
        if (!this._events[a]) {
            var b = function (b) {
                var c = b.offsetX,
                    d = b.offsetY;
                this._eventTriggered[a] = b;
                this.pick(c, d, function (a, b) {
                    this._dispatchEvent({
                        entity: this.world.entityManager.getEntityById(a),
                        depth: b,
                        x: c,
                        y: d,
                        id: a
                    })
                }.bind(this))
            }.bind(this);
            this.renderer.domElement.addEventListener(a, b);
            this._events[a] = b
        }
    };
    t.prototype._disableEvent = function (a) {
        this._events[a] && this.renderer.domElement.removeEventListener(a, this._events[a]);
        this._events[a] = null
    };
    t.prototype.startGameLoop = function () {
        if (!this.animationId) this.start = -1, this.animationId = window.requestAnimationFrame(this.run)
    };
    t.prototype.stopGameLoop = function () {
        window.cancelAnimationFrame(this.animationId);
        this.animationId = 0
    };
    t.prototype.takeSnapshot = function (a) {
        this._takeSnapshots.push(a)
    };
    t.prototype.pick = function (a, b, c, d) {
        this._picking.x = a;
        this._picking.y = b;
        this._picking.skipUpdateBuffer = d === void 0 ? !1 : d;
        if (c) this._picking.pickingCallback = c;
        this._picking.doPick = !0
    };
    return t
});
define("goo/entities/components/AnimationComponent", "goo/entities/components/Component,goo/entities/World,goo/animation/layer/AnimationLayer,goo/animation/clip/JointData,goo/animation/clip/TransformData,goo/animation/clip/TriggerData".split(","), function (e, c, b, a, d, g) {
    function f(a) {
        this.type = "AnimationComponent";
        this.layers = [];
        this.floats = {};
        this._updateRate = 1 / 60;
        this._lastUpdate = 0;
        this._triggerCallbacks = {};
        this.layers.push(new b(b.BASE_LAYER_NAME));
        this._skeletonPose = a
    }
    f.prototype = Object.create(e.prototype);
    f.prototype.transitionTo = function (a) {
        return this.layers[0].transitionTo(a)
    };
    f.prototype.getStates = function () {
        return this.layers[0].getStates()
    };
    f.prototype.getCurrentState = function () {
        return this.layers[0].getCurrentState()
    };
    f.prototype.getTransitions = function () {
        return this.layers[0].getTransitions()
    };
    f.prototype.update = function (a) {
        a = a || c.time;
        if (this._updateRate !== 0) {
            if (a > this._lastUpdate && a - this._lastUpdate < this._updateRate) return;
            this._lastUpdate = a - (a - this._lastUpdate) % this._updateRate
        }
        for (var b =
            0, d = this.layers.length; b < d; b++) this.layers[b].update(a)
    };
    f.prototype.apply = function (b) {
        var c = this.getCurrentSourceData(),
            f = this._skeletonPose;
        if (c) {
            for (var e in c) {
                var l = c[e];
                if (l instanceof a) f && l._jointIndex >= 0 && l.applyTo(f._localTransforms[l._jointIndex]);
                else if (l instanceof d) b && (l.applyTo(b.transform), b.updateTransform(), this._updateWorldTransform(b));
                else if (l instanceof g) {
                    if (l.armed) {
                        for (var m = 0, o = l._currentTriggers.length; m < o; m++) {
                            var p = this._triggerCallbacks[l._currentTriggers[m]];
                            if (p &&
                                p.length)
                                for (var n = 0, s = p.length; n < s; n++) p[n]()
                        }
                        l.armed = !1
                    }
                } else l instanceof Array && (this.floats[e] = l[0])
            }

            f && f.updateTransforms()
        }
    };
    f.prototype._updateWorldTransform = function (a) {
        a.updateWorldTransform();
        for (var b = 0; b < a.children.length; b++) this._updateWorldTransform(a.children[b])
    };
    f.prototype.postUpdate = function () {
        for (var a = 0, b = this.layers.length; a < b; a++) this.layers[a].postUpdate()
    };
    f.prototype.getCurrentSourceData = function () {
        for (var a = this.layers.length - 1, b = 0; b < a; b++) this.layers[b + 1].updateLayerBlending(this.layers[b]);
        return this.layers[a].getCurrentSourceData()
    };
    f.prototype.addLayer = function (a, b) {
        isNaN(b) ? this.layers.push(a) : this.layers.splice(b, 0, a)
    };
    f.prototype.resetClips = function (a) {
        for (var b = 0; b < this.layers.length; b++) this.layers[b].resetClips(a)
    };
    f.prototype.setTimeScale = function (a) {
        for (var b = 0; b < this.layers.length; b++) this.layers[b].setTimeScale(a)
    };
    return f
});
define("goo/entities/components/CameraDebugComponent", ["goo/entities/components/Component"], function (e) {
    function c() {
        this.type = "CameraDebugComponent"
    }
    c.prototype = Object.create(e.prototype);
    return c
});
define("goo/entities/components/LightDebugComponent", ["goo/entities/components/Component"], function (e) {
    function c() {
        this.type = "LightDebugComponent"
    }
    c.prototype = Object.create(e.prototype);
    return c
});
define("goo/entities/components/OccludeeComponent", ["goo/entities/components/Component", "goo/renderer/bounds/BoundingBox", "goo/renderer/bounds/BoundingSphere"], function (e, c, b) {
    function a(a, e) {
        this.type = "OccludeeComponent";
        this.modelBound = e === !0 ? new c : new b;
        var f = a.getAttributeBuffer("POSITION");
        f !== void 0 && this.modelBound.computeFromPoints(f);
        this.positionArray = new Float32Array(32);
        if (e === !0) {
            var f = this.modelBound.xExtent,
                i = this.modelBound.yExtent,
                h = this.modelBound.zExtent;
            this.positionArray.set([-f,
                i, -h, 1, -f, i, h, 1, f, i, h, 1, f, i, -h, 1, -f, -i, -h, 1, -f, -i, h, 1, f, -i, h, 1, f, -i, -h, 1
            ])
        }
    }
    a.prototype = Object.create(e.prototype);
    return a
});
define("goo/entities/components/OccluderComponent", ["goo/entities/components/Component"], function (e) {
    function c(b) {
        this.type = "OccluderComponent";
        this.meshData = b
    }
    c.prototype = Object.create(e.prototype);
    return c
});
define("goo/particles/ParticleUtils", ["goo/math/Vector3"], function (e) {
    function c() {}
    c.getRandomVelocityOffY = function (b, a, d, e, f) {
        a += Math.random() * (d - a);
        d = Math.PI * 2 * Math.random();
        b.x = Math.cos(d) * Math.sin(a);
        b.y = Math.cos(a);
        b.z = Math.sin(d) * Math.sin(a);
        f && c.applyEntityTransformVector(b, f);
        b.mul(e);
        return b
    };
    c.randomPointInCube = function (b, a, c, e, f) {
        b.x = Math.random() * 2 * a - a + (f ? f.x : 0);
        b.y = Math.random() * 2 * c - c + (f ? f.y : 0);
        b.z = Math.random() * 2 * e - e + (f ? f.z : 0);
        return b
    };
    c.createConstantForce = function (b) {
        var a = new e(b);
        return {
            enabled: !0,
            prepare: function () {},
            apply: function (b, c) {
                c.velocity.x += a.x * b;
                c.velocity.y += a.y * b;
                c.velocity.z += a.z * b
            }
        }
    };
    c.applyEntityTransformPoint = function (b, a) {
        return !a.transformComponent || !a.transformComponent.worldTransform ? b : a.transformComponent.worldTransform.applyForward(b, b)
    };
    c.applyEntityTransformVector = function (b, a) {
        return !a.transformComponent || !a.transformComponent.worldTransform ? b : a.transformComponent.worldTransform.applyForwardVector(b, b)
    };
    c.applyTimeline = function (b, a) {
        for (var c = b.age,
                e = b.lifeSpan, f = 0, i = 0, h = 0, k = 0, j = e, l = e, m = e, o = e, p = 0, n = 0, s = null, r = null, u = null, q = null, x = null, t = null, w = null, z = null, v = null, n = 0, A = a.length; n < A; n++) {
            var y = a[n];
            p += (y.timeOffset ? y.timeOffset : 0) * e;
            t === null && (p > c ? y.color !== void 0 && (j = p, t = y) : y.color !== void 0 && (f = p, s = y));
            w === null && (p > c ? y.mass !== void 0 && (l = p, w = y) : y.mass !== void 0 && (i = p, r = y));
            p <= c && y.uvIndex !== void 0 && (x = y);
            z === null && (p > c ? y.size !== void 0 && (m = p, z = y) : y.size !== void 0 && (h = p, u = y));
            v === null && (p > c ? y.spin !== void 0 && (o = p, v = y) : y.spin !== void 0 && (k = p, q = y))
        }
        n =
            (c - f) / (j - f);
        e = s !== null ? s.color : [1, 1, 1, 1];
        t = t !== null ? t.color : e;
        b.color.data[0] = (1 - n) * e[0] + n * t[0];
        b.color.data[1] = (1 - n) * e[1] + n * t[1];
        b.color.data[2] = (1 - n) * e[2] + n * t[2];
        b.color.data[3] = (1 - n) * e[3] + n * t[3];
        n = (c - i) / (l - i);
        e = r !== null ? r.mass : 1;
        t = w !== null ? w.mass : e;
        b.mass = (1 - n) * e + n * t;
        b.uvIndex = x !== null ? x.uvIndex : 0;
        n = (c - h) / (m - h);
        e = u !== null ? u.size : 1;
        t = z !== null ? z.size : e;
        b.size = (1 - n) * e + n * t;
        n = (c - k) / (o - k);
        e = q !== null ? q.spin : 0;
        t = v !== null ? v.spin : e;
        b.spin = (1 - n) * e + n * t
    };
    return c
});
define("goo/particles/Particle", ["goo/particles/ParticleUtils", "goo/math/Vector", "goo/math/Vector3", "goo/math/Vector4", "goo/renderer/MeshData"], function (e, c, b, a, d) {
    function g(c, d) {
        this.alive = !1;
        this.position = new b;
        this.velocity = new b;
        this.lifeSpan = 0;
        this.parent = c;
        this.age = 0;
        this.index = d;
        this.color = new a(1, 0, 0, 1);
        this.spin = this.size = 0;
        this.mass = 1;
        this.emitter = null;
        this.uvIndex = 0;
        this.lastUVIndex = -1;
        this.bbX = new b;
        this.bbY = new b;
        this.lastColor = new a
    }
    var f = new b;
    g.prototype.respawnParticle = function (a) {
        this.emitter =
            a;
        this.lifeSpan = a.nextParticleLifeSpan();
        this.alive = !0;
        this.age = 0
    };
    g.prototype.update = function (a, g) {
        if (this.alive)
            if (this.age += a, this.age > this.lifeSpan) this.kill();
            else {
                this.position.add_d(this.velocity.x * a, this.velocity.y * a, this.velocity.z * a);
                e.applyTimeline(this, this.emitter && this.emitter.timeline ? this.emitter.timeline : this.parent.timeline);
                if (!c.equals(this.lastColor, this.color)) {
                    var k = this.parent.meshData.getAttributeBuffer(d.COLOR);
                    k.set(this.color.data, this.index * 16 + 0);
                    k.set(this.color.data,
                        this.index * 16 + 4);
                    k.set(this.color.data, this.index * 16 + 8);
                    k.set(this.color.data, this.index * 16 + 12);
                    this.lastColor.setv(this.color)
                }
                this.emitter && this.emitter.getParticleBillboardVectors(this, g);
                if (this.spin === 0) this.bbX.muld(this.size, this.size, this.size), this.bbY.muld(this.size, this.size, this.size);
                else {
                    var k = Math.cos(this.spin) * this.size,
                        j = Math.sin(this.spin) * this.size,
                        l = this.bbY.x,
                        m = this.bbY.y,
                        o = this.bbY.z;
                    this.bbY.setv(this.bbX);
                    this.bbX.muld(k, k, k).add_d(l * j, m * j, o * j);
                    this.bbY.muld(-j, -j, -j).add_d(l *
                        k, m * k, o * k)
                }
                k = this.parent.meshData.getAttributeBuffer(d.POSITION);
                b.subv(this.position, this.bbX, f).subv(this.bbY);
                k.set(f.data, this.index * 12 + 0);
                b.subv(this.position, this.bbX, f).addv(this.bbY);
                k.set(f.data, this.index * 12 + 3);
                b.addv(this.position, this.bbX, f).addv(this.bbY);
                k.set(f.data, this.index * 12 + 6);
                b.addv(this.position, this.bbX, f).subv(this.bbY);
                k.set(f.data, this.index * 12 + 9);
                if (this.lastUVIndex !== this.uvIndex) k = this.parent.meshData.getAttributeBuffer(d.TEXCOORD0), j = this.uvIndex % this.parent.uRange /
                    this.parent.uRange, l = 1 - Math.floor(this.uvIndex / this.parent.vRange) / this.parent.vRange, m = 1 / this.parent.uRange, o = 1 / this.parent.vRange, k.set([j + m, l - o], this.index * 8 + 0), k.set([j + m, l], this.index * 8 + 2), k.set([j, l], this.index * 8 + 4), k.set([j, l - o], this.index * 8 + 6), this.lastUVIndex = this.uvIndex
            }
    };
    g.prototype.kill = function () {
        this.alive = !1;
        var a = this.parent.meshData.getAttributeBuffer(d.POSITION),
            b = a.subarray(this.index * 12, this.index * 12 + 3);
        a.set(b, this.index * 12 + 3);
        a.set(b, this.index * 12 + 6);
        a.set(b, this.index * 12 + 9)
    };
    return g
});
define("goo/particles/ParticleEmitter", ["goo/particles/ParticleUtils", "goo/renderer/Renderer"], function (e, c) {
    function b(a) {
        a = a || {};
        this.totalParticlesToSpawn = !isNaN(a.totalParticlesToSpawn) ? a.totalParticlesToSpawn : -1;
        this.maxLifetime = !isNaN(a.maxLifetime) ? a.maxLifetime : 3;
        this.minLifetime = !isNaN(a.minLifetime) ? a.minLifetime : 2;
        this.timeline = a.timeline ? a.timeline : void 0;
        this.influences = a.influences ? a.influences : [];
        this.getEmissionPoint = a.getEmissionPoint ? a.getEmissionPoint : function (a, b) {
            var c = a.position;
            c.setd(0, 0, 0);
            return e.applyEntityTransformPoint(c, b)
        };
        this.getEmissionVelocity = a.getEmissionVelocity ? a.getEmissionVelocity : function (a, b) {
            var c = a.velocity;
            c.setd(0, 1, 0);
            return e.applyEntityTransformVector(c, b)
        };
        this.getParticleBillboardVectors = a.getParticleBillboardVectors ? a.getParticleBillboardVectors : b.CAMERA_BILLBOARD_FUNC;
        this.releaseRatePerSecond = !isNaN(a.releaseRatePerSecond) ? a.releaseRatePerSecond : 10;
        this.particlesWaitingToRelease = 0;
        this.enabled = a.enabled !== void 0 ? a.enabled === !0 : !0
    }
    b.CAMERA_BILLBOARD_FUNC =
        function (a) {
            var b = c.mainCamera;
            a.bbX.setv(b._left);
            a.bbY.setv(b._up)
    };
    b.prototype.nextParticleLifeSpan = function () {
        return this.minLifetime + (this.maxLifetime - this.minLifetime) * Math.random()
    };
    return b
});
define("goo/entities/components/ParticleComponent", ["goo/entities/components/Component", "goo/particles/Particle", "goo/particles/ParticleEmitter", "goo/renderer/MeshData"], function (e, c, b, a) {
    function d(a) {
        this.type = "ParticleComponent";
        e.call(this);
        a = a || {};
        this.emitters = [];
        if (a.emitters)
            for (var c = 0, d = a.emitters.length; c < d; c++) this.emitters.push(new b(a.emitters[c]));
        this.timeline = a.timeline ? a.timeline : [];
        this.uRange = isNaN(a.uRange) ? 1 : a.uRange;
        this.vRange = isNaN(a.vRange) ? 1 : a.vRange;
        this.recreateParticles(isNaN(a.particleCount) ?
            100 : a.particleCount);
        this.enabled = !0
    }
    d.prototype = Object.create(e.prototype);
    d.prototype.generateMeshData = function () {
        var b = a.defaultMap([a.POSITION, a.COLOR, a.TEXCOORD0]);
        this.meshData = new a(b, this.particleCount * 4, this.particleCount * 6);
        for (var b = this.meshData.getAttributeBuffer(a.TEXCOORD0), c = this.meshData.getIndexBuffer(), d = 0, e = this.particleCount; d < e; d++) b.set([1, 0], d * 8 + 0), b.set([1, 1], d * 8 + 2), b.set([0, 1], d * 8 + 4), b.set([0, 0], d * 8 + 6), c.set([d * 4 + 0, d * 4 + 3, d * 4 + 1, d * 4 + 1, d * 4 + 3, d * 4 + 2], d * 6)
    };
    d.prototype.recreateParticles =
        function (a) {
            this.particleCount = a;
            this.particles = [];
            for (a = 0; a < this.particleCount; a++) this.particles[a] = new c(this, a);
            this.generateMeshData()
    };
    return d
});
define("goo/entities/components/PortalComponent", ["goo/entities/components/Component", "goo/renderer/pass/RenderTarget"], function (e, c) {
    function b(a, b, e, f) {
        b = b || 200;
        this.options = e || {};
        this.options.preciseRecursion = !! this.options.preciseRecursion;
        this.options.autoUpdate = this.options.autoUpdate !== !1;
        this.options.alwaysRender = !! this.options.alwaysRender;
        this.overrideMaterial = f;
        this.doUpdate = !0;
        e = a.aspect;
        this.type = "PortalComponent";
        this.camera = a;
        this.target = new c(b, b / e);
        if (this.options.preciseRecursion) this.secondaryTarget =
            new c(b, b / e)
    }
    b.prototype = Object.create(e.prototype);
    b.prototype.requestUpdate = function () {
        this.doUpdate = !0
    };
    return b
});
define("goo/entities/components/ScriptComponent", ["goo/entities/components/Component"], function (e) {
    function c(b) {
        this.type = "ScriptComponent";
        this.scripts = b instanceof Array ? b : b ? [b] : []
    }
    c.prototype = Object.create(e.prototype);
    c.prototype.run = function (b, a, c) {
        for (var e, f = 0, i = this.scripts.length; f < i; f++)(e = this.scripts[f]) && e.run && (e.enabled === void 0 || e.enabled) && e.run(b, a, c)
    };
    return c
});
define("goo/entities/components/TextComponent", ["goo/entities/components/Component", "goo/shapes/TextureGrid", "goo/entities/components/MeshDataComponent"], function (e) {
    function c(b) {
        this.type = "TextComponent";
        this.text = b || "";
        this.dirty = !0
    }
    c.prototype = Object.create(e.prototype);
    c.prototype.setText = function (b) {
        this.text = b;
        this.dirty = !0;
        return this
    };
    return c
});
define("goo/entities/managers/DebugManager", [], function () {
    function e() {
        this.type = "DebugManager";
        this._entities = {}
    }
    e.prototype.added = function (c) {
        this._entities[c.id] = c
    };
    e.prototype.removed = function (c) {
        delete this._entities[c.id]
    };
    e.prototype.getEntities = function () {
        var c = [],
            b;
        for (b in this._entities) c.push(this._entities[b]);
        return c
    };
    return e
});
define("goo/shapes/debug/LightDebug", "goo/renderer/MeshData,goo/util/MeshBuilder,goo/math/Transform,goo/shapes/ShapeCreator,goo/entities/components/MeshDataComponent,goo/entities/components/MeshRendererComponent,goo/renderer/Material,goo/renderer/shaders/ShaderLib,goo/math/MathUtils,goo/renderer/light/PointLight,goo/renderer/light/DirectionalLight,goo/renderer/light/SpotLight".split(","), function (e, c, b, a, d, g, f, i, h, k, j, l) {
    function m() {
        this._ball = a.createSphere(12, 12, 0.3);
        this._pointLightMesh = m._buildPointLightMesh();
        this._spotLightMesh = m._buildSpotLightMesh();
        this._directionalLightMesh = m._buildDirectionalLightMesh()
    }

    function o(a, b) {
        for (var a = a || 1, b = b || 8, c = [], d = [], f = Math.PI * 2 / b, g = 0, h = 0; g < b; g++, h += f) c.push(Math.cos(h) * a, Math.sin(h) * a, 0), d.push(g, g + 1);
        d[d.length - 1] = 0;
        f = new e(e.defaultMap([e.POSITION]), b, d.length);
        f.getAttributeBuffer(e.POSITION).set(c);
        f.getIndexBuffer().set(d);
        f.indexLengths = null;
        f.indexModes = ["Lines"];
        return f
    }
    m.prototype.getMesh = function (a) {
        if (a instanceof k) return [this._ball, this._pointLightMesh];
        else if (a instanceof l) return [this._ball, this._spotLightMesh];
        else if (a instanceof j) return [this._ball, this._directionalLightMesh]
    };
    m._buildPointLightMesh = function () {
        var a = new c,
            d = o(1, 128),
            f;
        f = new b;
        a.addMeshData(d, f);
        f = new b;
        f.rotation.fromAngles(0, Math.PI / 2, 0);
        f.update();
        a.addMeshData(d, f);
        f = new b;
        f.rotation.fromAngles(Math.PI / 2, Math.PI / 2, 0);
        f.update();
        a.addMeshData(d, f);
        return a.build()[0]
    };
    m._buildSpotLightMesh = function () {
        for (var a = new c, d = 1; d <= 2; d++) {
            var f = o(-0.5 * d, 64),
                g = new b;
            g.translation.set(0,
                0, -0.5 * d);
            g.update();
            a.addMeshData(f, g)
        }
        for (var f = 4, g = [0, 0, 0], d = [], h = Math.PI * 2 / f, j = 0, i = 0; j < f; j++, i += h) g.push(Math.cos(i), Math.sin(i), 1), d.push(0, j + 1);
        f = new e(e.defaultMap([e.POSITION]), f + 1, d.length);
        f.getAttributeBuffer(e.POSITION).set(g);
        f.getIndexBuffer().set(d);
        f.indexLengths = null;
        f.indexModes = ["Lines"];
        g = new b;
        g.scale.set(-1, -1, -1);
        g.update();
        a.addMeshData(f, g);
        return a.build()[0]
    };
    m._buildDirectionalLightMesh = function () {
        for (var a = new c, d = 0; d < 2; d++) {
            var f = o(1, 64),
                g = new b;
            g.translation.set(0, 0, -5 * d);
            g.update();
            a.addMeshData(f, g)
        }
        for (var f = 4, g = [], d = [], h = Math.PI * 2 / f, j = 0, i = 0; j < f; j++, i += h) g.push(Math.cos(i), Math.sin(i), 0), g.push(Math.cos(i), Math.sin(i), 1), d.push(j * 2, j * 2 + 1);
        f = new e(e.defaultMap([e.POSITION]), f * 2, d.length);
        f.getAttributeBuffer(e.POSITION).set(g);
        f.getIndexBuffer().set(d);
        f.indexLengths = null;
        f.indexModes = ["Lines"];
        g = new b;
        g.scale.set(1, 1, -10);
        g.update();
        a.addMeshData(f, g);
        return a.build()[0]
    };
    return m
});
define("goo/shapes/debug/CameraDebug", "goo/renderer/MeshData,goo/util/MeshBuilder,goo/math/Transform,goo/shapes/ShapeCreator,goo/entities/components/MeshDataComponent,goo/entities/components/MeshRendererComponent,goo/renderer/Material,goo/renderer/shaders/ShaderLib,goo/shapes/Box,goo/shapes/Cylinder".split(","), function (e, c, b, a, d, g, f, i, h, k) {
    function j() {
        this._camera = j.buildCamera()
    }
    j.prototype.getMesh = function (a) {
        return [this._camera, j.buildFrustum(a.far / a.near)]
    };
    j.buildFrustum = function (a) {
        var b,
            c, d, f, g, h, j, i, k, t, w, z, v, A, y, B, C, F, N, D = 1 / a;
        b = Math.tan(Math.PI / 4);
        F = -b * 1;
        N = b * 1;
        B = -b * 1;
        C = -b * 1;
        A = b * 1;
        y = -b * 1;
        z = b * 1;
        v = b * 1;
        k = -b * D * 1;
        t = b * D;
        w = -D;
        h = -b * D * 1;
        j = -b * D;
        i = -D;
        d = b * D * 1;
        f = -b * D;
        g = -D;
        a = b * D * 1;
        b *= D;
        c = -D;
        D = [];
        D.push(F, N, -1);
        D.push(B, C, -1);
        D.push(A, y, -1);
        D.push(z, v, -1);
        D.push(k, t, w);
        D.push(h, j, i);
        D.push(d, f, g);
        D.push(a, b, c);
        a = [];
        a.push(0, 1);
        a.push(1, 2);
        a.push(2, 3);
        a.push(3, 0);
        a.push(4, 5);
        a.push(5, 6);
        a.push(6, 7);
        a.push(7, 4);
        a.push(0, 4);
        a.push(1, 5);
        a.push(2, 6);
        a.push(3, 7);
        d = new e(e.defaultMap([e.POSITION]), 8,
            24);
        d.getAttributeBuffer(e.POSITION).set(D);
        d.getIndexBuffer().set(a);
        d.indexLengths = null;
        d.indexModes = ["Lines"];
        return d
    };
    j.buildCamera = function () {
        var a = new c,
            d = new b,
            f = new k(32, 0.6),
            g = new k(32, 0.6),
            j = new h(0.3, 1, 1.6),
            i = new h(0.2, 0.15, 0.7);
        i.applyFunction(e.POSITION, function (a) {
            return [a.x + a.x / ((a.z + 1.1) * 0.3), a.y + a.y / ((a.z + 1.1) * 0.3), a.z]
        });
        d.translation.setd(0, 0, 0);
        d.update();
        a.addMeshData(i, d);
        d.translation.setd(0, 0, 1.3);
        d.update();
        a.addMeshData(j, d);
        d.scale.setd(1, 1, 0.5);
        d.setRotationXYZ(0, Math.PI /
            2, 0);
        d.translation.setd(0, 1.2, 0.6);
        d.update();
        a.addMeshData(f, d);
        d.translation.setd(0, 1.2, 2);
        d.update();
        a.addMeshData(g, d);
        return a.build()[0]
    };
    return j
});
define("goo/shapes/debug/MeshRendererDebug", ["goo/renderer/MeshData"], function (e) {
    function c() {
        var b = [1, 1, 1, 1, 1, -1, 1, -1, 1, 1, -1, -1, -1, 1, 1, -1, 1, -1, -1, -1, 1, -1, -1, -1],
            a = [0, 1, 0, 2, 1, 3, 2, 3, 4, 5, 4, 6, 5, 7, 6, 7, 0, 4, 1, 5, 2, 6, 3, 7],
            c = new e(e.defaultMap([e.POSITION]), b.length / 3, a.length);
        c.getAttributeBuffer(e.POSITION).set(b);
        c.getIndexBuffer().set(a);
        c.indexLengths = null;
        c.indexModes = ["Lines"];
        this._meshes = [c, null]
    }
    c.prototype.getMesh = function () {
        return this._meshes
    };
    return c
});
define("goo/util/DebugDrawHelper", "goo/entities/components/LightComponent,goo/entities/components/CameraComponent,goo/entities/components/MeshRendererComponent,goo/renderer/light/PointLight,goo/renderer/light/DirectionalLight,goo/renderer/light/SpotLight,goo/shapes/debug/LightDebug,goo/shapes/debug/CameraDebug,goo/shapes/debug/MeshRendererDebug,goo/renderer/Material,goo/renderer/shaders/ShaderLib,goo/math/Transform".split(","), function (e, c, b, a, d, g, f, i, h, k, j, l) {
    var m = {}, o = new f,
        p = new i,
        n = new h;
    m.getRenderablesFor =
        function (a) {
            var b, c;
            a.type === "LightComponent" ? (b = o.getMesh(a.light), c = k.createMaterial(j.simpleColored, "DebugDrawLightMaterial")) : a.type === "CameraComponent" ? (b = p.getMesh(a.camera), c = k.createMaterial(j.simpleLit, "DebugDrawCameraMaterial"), c.uniforms.materialAmbient = [0.2, 0.2, 0.2, 1], c.uniforms.materialDiffuse = [0.8, 0.8, 0.8, 1], c.uniforms.materialSpecular = [0, 0, 0, 1]) : a.type === "MeshRendererComponent" && (b = n.getMesh(), c = k.createMaterial(j.simpleColored, "DebugMeshRendererComponentMaterial"));
            return [{
                meshData: b[0],
                transform: new l,
                materials: [c]
            }, {
                meshData: b[1],
                transform: new l,
                materials: [c]
            }]
    };
    m.update = function (a, b, c) {
        if (b.camera && b.camera.changedProperties) {
            var d = b.camera;
            if (d.far / d.near !== a[1].farNear) a[1].meshData = i.buildFrustum(d.far / d.near), a[1].farNear = d.far / d.near;
            b.camera.changedProperties = !1
        }
        m[b.type].updateMaterial(a[0].materials[0], b);
        m[b.type].updateTransform(a[1].transform, b, c);
        a[0].transform.scale.scale(c);
        a[0].transform.update()
    };
    m.LightComponent = {};
    m.CameraComponent = {};
    m.LightComponent.updateMaterial =
        function (a, b) {
            var c = b.light,
                d = a.uniforms.color = a.uniforms.color || [];
            d[0] = c.color.data[0];
            d[1] = c.color.data[1];
            d[2] = c.color.data[2]
    };
    m.LightComponent.updateTransform = function (a, b, c) {
        b = b.light;
        b instanceof d ? a.scale.scale(c) : (c = b.range, a.scale.setd(c, c, c), b instanceof g && (c = Math.tan(b.angle * Math.PI / 180 / 2), a.scale.muld(c, c, 1)));
        a.update()
    };
    m.CameraComponent.updateMaterial = function (a) {
        a.uniforms.color = a.uniforms.color || [1, 1, 1]
    };
    m.CameraComponent.updateTransform = function (a, b) {
        var c = b.camera,
            d = c.far,
            f =
                d * Math.tan(c.fov / 2 * Math.PI / 180);
        a.scale.setd(f * c.aspect, f, d);
        a.update()
    };
    return m
});
define("goo/entities/systems/DebugRenderSystem", "goo/entities/systems/System,goo/entities/EventHandler,goo/renderer/SimplePartitioner,goo/renderer/Material,goo/renderer/shaders/ShaderLib,goo/renderer/Util,goo/util/DebugDrawHelper".split(","), function (e, c, b, a, d, g, f) {
    function i() {
        e.call(this, "DebugRenderSystem", ["TransformComponent"]);
        this._renderablesTree = {};
        this.renderList = [];
        this.preRenderers = [];
        this.composers = [];
        this.doRender = {
            CameraComponent: !0,
            LightComponent: !0,
            MeshRendererComponent: !1
        };
        this.inserted();
        this._interestComponents = ["CameraComponent", "LightComponent"];
        this.camera = null;
        this.lights = [];
        this.currentTpf = 0;
        this.scale = 20;
        var a = this;
        c.addListener({
            setCurrentCamera: function (b) {
                a.camera = b
            },
            setLights: function (b) {
                a.lights = b
            }
        });
        this.selectionRenderable = f.getRenderablesFor({
            type: "MeshRendererComponent"
        });
        this.selectionActive = !1
    }
    i.prototype = Object.create(e.prototype);
    i.prototype.inserted = function () {};
    i.prototype.deleted = function () {};
    i.prototype.process = function (a, b) {
        for (var c = this.renderList.length =
            0, d = 0; d < a.length; d++)
            for (var e = a[d], g = 0, i = this._interestComponents.length; g < i; g++) {
                var n = this._interestComponents[g];
                if (e.hasComponent(n) && (this.doRender[n] || e.getComponent(n).forceDebug)) {
                    var s = e.getComponent(n),
                        r, u = this._renderablesTree[e.id] = this._renderablesTree[e.id] || {};
                    u[n] ? r = u[n] : (r = f.getRenderablesFor(s), r[0].id = e.id, r[1].id = e.id, u[n] = r);
                    r[0].transform.copy(e.transformComponent.worldTransform);
                    r[1].transform.copy(e.transformComponent.worldTransform);
                    f.update(r, s, this.scale);
                    this.renderList[c++] =
                        r[0];
                    this.renderList[c++] = r[1]
                }
            }
        this.selectionActive && (this.renderList[c++] = this.selectionRenderable[0]);
        this.renderList.length = c;
        this.currentTpf = b
    };
    i.prototype.render = function (a) {
        a.checkResize(this.camera);
        this.camera && a.render(this.renderList, this.camera, this.lights, null, !1)
    };
    i.prototype.renderToPick = function (a, b) {
        a.renderToPick(this.renderList, this.camera, !1, b)
    };
    return i
});
define("goo/util/gizmos/Gizmo", "goo/renderer/shaders/ShaderBuilder,goo/renderer/MeshData,goo/renderer/Shader,goo/renderer/Material,goo/renderer/Renderer,goo/math/Transform,goo/math/Matrix4x4,goo/math/Plane,goo/math/Ray,goo/math/Vector3".split(","), function (e, c, b, a, d, g, f, i, h, k) {
    function j(a) {
        this.name = a || "Default Gizmo";
        this._colors = [
            [1, 0, 0],
            [0, 1, 0],
            [0, 0, 1],
            [0.7, 0.7, 0.7]
        ];
        this._gizmoSize = 0.02;
        this._plane = new i;
        this._line = new k;
        this._activeHandle = null;
        this._mouse = {
            position: [0, 0],
            oldPosition: [0, 0]
        };
        this.visible = this.dirty = !1;
        this.transform = new g;
        this.renderables = [];
        this.onChange = null;
        this._oldRay = new h;
        this._newRay = new h;
        this._result = new k;
        this._v0 = new k;
        this._v1 = new k;
        this._v2 = new k;
        this._v3 = new k;
        this._s0 = new k;
        this._s1 = new k;
        this._s2 = new k;
        this._s3 = new k
    }
    j.handleStore = [];
    j.registerHandle = function (a) {
        var b = j.handleStore.length + 16E3;
        j.handleStore.push(a);
        return b
    };
    j.getHandle = function (a) {
        return a < 16E3 ? null : j.handleStore[a - 16E3]
    };
    j.prototype.activate = function (a) {
        this._activeHandle = a.data;
        this._mouse.oldPosition[0] =
            a.x;
        this._mouse.oldPosition[1] = a.y
    };
    j.prototype.copyTransform = function (a) {
        this.transform.setIdentity();
        a && (a.matrix.getTranslation(this.transform.translation), this.transform.rotation.copy(a.rotation), this.updateTransforms())
    };
    j.prototype.update = function (a) {
        this._mouse.position[0] = a[0];
        this._mouse.position[1] = a[1];
        this.dirty = !0
    };
    j.prototype.updateTransforms = function () {
        if (d.mainCamera) {
            var a = Math.sqrt(d.mainCamera.translation.distanceSquared(this.transform.translation)) * this._gizmoSize;
            this.transform.scale.setd(a,
                a, a)
        }
        this.transform.update();
        for (a = this.renderables.length - 1; a >= 0; a--) this.renderables[a].transform.update(), f.combine(this.transform.matrix, this.renderables[a].transform.matrix, this.renderables[a].transform.matrix)
    };
    j.prototype._setPlane = function () {
        var a = this._plane.normal,
            b = this._v0,
            c = this._v1,
            f = this._v2,
            e = this._v3,
            g = this._s0,
            h = this._s1,
            j = this._s2,
            i = this._s3;
        this._activeHandle.type === "Plane" ? (a.setv([k.UNIT_X, k.UNIT_Y, k.UNIT_Z][this._activeHandle.axis]), this.transform.matrix.applyPostVector(a),
            a.normalize(), b.setv(k.ZERO), this.transform.matrix.applyPostPoint(b)) : (b.setv(k.ZERO), this.transform.matrix.applyPostPoint(b), c.setv(k.UNIT_X), this.transform.matrix.applyPostPoint(c), f.setv(k.UNIT_Y), this.transform.matrix.applyPostPoint(f), e.setv(k.UNIT_Z), this.transform.matrix.applyPostPoint(e), d.mainCamera.getScreenCoordinates(b, 1, 1, g), d.mainCamera.getScreenCoordinates(c, 1, 1, h), h.subv(g), d.mainCamera.getScreenCoordinates(f, 1, 1, j), j.subv(g), d.mainCamera.getScreenCoordinates(e, 1, 1, i), i.subv(g), this._activeHandle.axis ===
            0 ? j.cross(h).length() > i.cross(h).length() ? a.setv(e).subv(b).normalize() : a.setv(f).subv(b).normalize() : this._activeHandle.axis === 1 ? i.cross(j).length() > h.cross(j).length() ? a.setv(c).subv(b).normalize() : a.setv(e).subv(b).normalize() : h.cross(i).length() > j.cross(i).length() ? a.setv(f).subv(b).normalize() : a.setv(c).subv(b).normalize());
        this._plane.constant = b.dot(a)
    };
    j.prototype._setLine = function () {
        this._line.setv([k.UNIT_X, k.UNIT_Y, k.UNIT_Z][this._activeHandle.axis]);
        this.transform.matrix.applyPostVector(this._line);
        this._line.normalize()
    };
    j.prototype._buildMaterialForAxis = function (b, c) {
        var d = a.createMaterial(j._shaderDef, b + "Material");
        d.uniforms.color = this._colors[b];
        if (c !== void 0 && c < 1) d.depthState.write = !0, d.depthState.enabled = !1, d.blendState.blending = "CustomBlending", d.uniforms.opacity = c;
        d.cullState.enabled = !1;
        return d
    };
    j._shaderDef = {
        attributes: {
            vertexPosition: c.POSITION,
            vertexNormal: c.NORMAL
        },
        uniforms: {
            viewProjectionMatrix: b.VIEW_PROJECTION_MATRIX,
            worldMatrix: b.WORLD_MATRIX,
            cameraPosition: b.CAMERA,
            color: [1,
                1, 1
            ],
            opacity: 1,
            light: [-20, 20, 20]
        },
        vshader: "attribute vec3 vertexPosition;\nattribute vec3 vertexNormal;\nuniform mat4 viewProjectionMatrix;\nuniform mat4 worldMatrix;\nuniform vec3 cameraPosition;\nvarying vec3 normal;\nvarying vec3 viewPosition;\nvoid main(void) {\n\tvec4 worldPos = worldMatrix * vec4(vertexPosition, 1.0);\n\tgl_Position = viewProjectionMatrix * worldPos;\n\tnormal = vertexNormal;\n\tviewPosition = cameraPosition - worldPos.xyz;\n}",
        fshader: [e.light.prefragment, "varying vec3 normal;\nvarying vec3 viewPosition;\nuniform vec3 color;\nuniform float opacity;\nuniform vec3 light;\nvoid main(void)\n{\n\tvec3 N = normalize(normal);\n\tvec4 final_color = vec4(color, 1.0);\n vec3 lVector = normalize(light);\n float dotProduct = dot(N, lVector);\n float diffuse = max(dotProduct, 0.0);\n final_color.rgb *= (0.7*diffuse+0.3);\n final_color.a = opacity;\n\tgl_FragColor = final_color;\n}"].join("\n")
    };
    return j
});
define("goo/shapes/Disk", ["goo/renderer/MeshData"], function (e) {
    function c(b, a, c) {
        if (arguments.length === 1 && arguments[0] instanceof Object) var g = arguments[0],
        b = g.nSegments, a = g.radius, c = g.pointiness;
        this.nSegments = b || 8;
        this.radius = a || 1;
        this.pointiness = c || 0;
        g = e.defaultMap([e.POSITION, e.NORMAL, e.TEXCOORD0]);
        e.call(this, g, this.nSegments + 1, this.nSegments + 2);
        this.indexModes = ["TriangleFan"];
        this.rebuild()
    }
    c.prototype = Object.create(e.prototype);
    c.prototype.rebuild = function () {
        var b = [],
            a = [],
            c = [],
            g = [];
        b.push(0,
            0, this.pointiness);
        a.push(0, 0, 1);
        c.push(0.5, 0.5);
        g.push(0);
        for (var f = Math.atan2(this.radius, this.pointiness), i = Math.PI * 2 / this.nSegments, h = 1, k = 0; h <= this.nSegments; h++, k += i) b.push(Math.cos(k) * this.radius, Math.sin(k) * this.radius, 0), a.push(Math.cos(k) * Math.cos(f), Math.sin(k) * Math.cos(f), Math.sin(f)), c.push(Math.cos(k) * 0.5 + 0.5, Math.sin(k) * 0.5 + 0.5), g.push(h);
        g.push(1);
        this.getAttributeBuffer(e.POSITION).set(b);
        this.getAttributeBuffer(e.NORMAL).set(a);
        this.getAttributeBuffer(e.TEXCOORD0).set(c);
        this.getIndexBuffer().set(g);
        return this
    };
    return c
});
define("goo/util/gizmos/TranslationGizmo", "goo/util/gizmos/Gizmo,goo/entities/components/MeshDataComponent,goo/entities/components/MeshRendererComponent,goo/renderer/MeshData,goo/util/MeshBuilder,goo/shapes/Disk,goo/shapes/Quad,goo/renderer/Material,goo/math/Transform,goo/entities/EntityUtils,goo/math/Vector3,goo/renderer/Renderer".split(","), function (e, c, b, a, d, g, f, i, h, k, j, l) {
    function m() {
        e.call(this, "TranslationGizmo");
        this._quadMesh = new f(2, 2);
        this._arrowMesh = this._buildArrowMesh();
        this._buildArrow(0);
        this._buildArrow(1);
        this._buildArrow(2)
    }
    m.prototype = Object.create(e.prototype);
    m.prototype.activate = function (a) {
        e.prototype.activate.call(this, a);
        this._setPlane();
        this._activeHandle.type === "Axis" && this._setLine()
    };
    m.prototype.process = function () {
        var a = this._mouse.oldPosition,
            b = this._mouse.position;
        l.mainCamera.getPickRay(a[0], a[1], 1, 1, this._oldRay);
        l.mainCamera.getPickRay(b[0], b[1], 1, 1, this._newRay);
        this._activeHandle.type === "Plane" ? this._moveOnPlane() : this._activeHandle.type === "Axis" && this._moveOnLine();
        a[0] = b[0];
        a[1] = b[1];
        this.updateTransforms();
        this.dirty = !1;
        if (this.onChange instanceof Function) this.onChange(this.transform.translation)
    };
    m.prototype.copyTransform = function (a, b) {
        e.prototype.copyTransform.call(this, a);
        a && b && (this.transform.rotation.setIdentity(), this.updateTransforms())
    };
    m.prototype._moveOnPlane = function () {
        var a = this._v0,
            b = this._v1,
            c = this._result;
        this._plane.rayIntersect(this._oldRay, a);
        this._plane.rayIntersect(this._newRay, b);
        c.setv(b).subv(a);
        this.transform.translation.add(c)
    };
    m.prototype._moveOnLine =
        function () {
            var a = this._v0,
                b = this._v1,
                c = this._result,
                d = this._line;
            this._plane.rayIntersect(this._oldRay, a);
            this._plane.rayIntersect(this._newRay, b);
            c.setv(b).subv(a);
            a = c.dot(d);
            c.setv(d).muld(a, a, a);
            this.transform.translation.addv(c)
    };
    m.prototype._buildArrow = function (a) {
        var b = new h,
            c = new h;
        a === 2 ? c.translation.setd(1, -1, 0) : a === 0 ? (c.translation.setd(0, -1, 1), c.setRotationXYZ(0, Math.PI / 2, 0), b.setRotationXYZ(0, Math.PI / 2, 0)) : a === 1 && (c.translation.setd(1, 0, 1), c.setRotationXYZ(Math.PI / 2, 0, 0), b.setRotationXYZ(Math.PI /
            2, 0, 0));
        this.renderables.push({
            meshData: this._arrowMesh,
            materials: [this._buildMaterialForAxis(a)],
            transform: b,
            id: e.registerHandle({
                type: "Axis",
                axis: a
            })
        });
        this.renderables.push({
            meshData: this._quadMesh,
            materials: [this._buildMaterialForAxis(a)],
            transform: c,
            id: e.registerHandle({
                type: "Plane",
                axis: a
            })
        })
    };
    m.prototype._buildArrowMesh = function () {
        var b = new d,
            c = new g(32, 0.5, 2),
            f = new g(32, 0.5),
            e = new a(a.defaultMap([a.POSITION]), 2, 2);
        e.getAttributeBuffer(a.POSITION).set([0, 0, 0, 0, 0, 1]);
        e.getIndexBuffer().set([0,
            1
        ]);
        e.indexLengths = null;
        e.indexModes = ["Lines"];
        var j = new h;
        j.translation.setd(0, 0, 10);
        j.update();
        b.addMeshData(c, j);
        j.setRotationXYZ(0, Math.PI, 0);
        j.update();
        b.addMeshData(f, j);
        j = new h;
        j.scale.setd(1, 1, 10);
        j.update();
        b.addMeshData(e, j);
        return b.build()[0]
    };
    return m
});
define("goo/util/gizmos/RotationGizmo", "goo/util/gizmos/Gizmo,goo/entities/components/MeshDataComponent,goo/entities/components/MeshRendererComponent,goo/renderer/MeshData,goo/util/MeshBuilder,goo/shapes/Sphere,goo/shapes/Torus,goo/renderer/Material,goo/entities/EntityUtils,goo/math/Vector3,goo/math/Matrix3x3,goo/math/Transform,goo/renderer/Renderer,goo/math/Ray".split(","), function (e, c, b, a, d, g, f, i, h, k, j, l, m, o) {
    function p() {
        e.call(this, "RotationGizmo");
        this._ballMesh = new g(32, 32, 1.3);
        this._torusMesh =
            new f(64, 8, 0.2);
        this._buildBall();
        this._buildTorus(0);
        this._buildTorus(1);
        this._buildTorus(2);
        this._rotation = new j;
        this._rotationScale = 4;
        this._axis = new k;
        this._direction = new k;
        this._ray = new o;
        this._m1 = new j;
        this._m2 = new j
    }
    p.prototype = Object.create(e.prototype);
    p.prototype.activate = function (a) {
        e.prototype.activate.call(this, a);
        var b = this._v0,
            c = this._v1,
            d = this._v2,
            f = this._axis,
            g = this._ray;
        if (this._activeHandle.axis < 3) {
            f.setv([k.UNIT_X, k.UNIT_Y, k.UNIT_Z][this._activeHandle.axis]);
            this.transform.rotation.applyPost(f);
            b.setv(k.ZERO);
            this.transform.matrix.applyPostPoint(b);
            m.mainCamera.getPickRay(a.x, a.y, 1, 1, g);
            c.setv(g.origin).subv(b);
            var h = c.length() * 0.9;
            c.setv(g.direction).muld(h, h, h).addv(g.origin);
            d.setv(c).subv(b);
            k.cross(f, d, d);
            d.addv(c);
            m.mainCamera.getScreenCoordinates(d, 1, 1, this._direction);
            this._direction.sub_d(a.x, 1 - a.y, 0);
            this._direction.y *= -1;
            this._direction.z = 0;
            this._direction.normalize()
        }
    };
    p.prototype.process = function () {
        var a = this._mouse.oldPosition,
            b = this._mouse.position,
            c = b[0] - a[0],
            d = b[1] - a[1];
        this._activeHandle.axis === 3 ? this._rotateOnScreen(c, d) : this._rotateOnAxis(c, d);
        a[0] = b[0];
        a[1] = b[1];
        this.updateTransforms();
        this.dirty = !1;
        if (this.onChange instanceof Function) this.onChange(this.transform.rotation)
    };
    p.prototype._rotateOnScreen = function (a, b) {
        this._rotation.setIdentity();
        this._rotation.rotateY(a * this._rotationScale);
        this._rotation.rotateX(b * this._rotationScale);
        var c = m.mainCamera.getViewMatrix().data,
            d = this._m1,
            f = this._m2;
        d.set(c[0], c[1], c[2], c[4], c[5], c[6], c[8], c[9], c[10]);
        f.set(d).invert();
        f.combine(this._rotation);
        f.combine(d);
        j.combine(f, this.transform.rotation, this.transform.rotation)
    };
    p.prototype._rotateOnAxis = function (a, b) {
        this._rotation.setIdentity();
        var c = a * this._direction.x + b * this._direction.y;
        c *= this._rotationScale;
        switch (this._activeHandle.axis) {
        case 0:
            this._rotation.rotateX(c);
            break;
        case 1:
            this._rotation.rotateY(c);
            break;
        case 2:
            this._rotation.rotateZ(c)
        }
        j.combine(this.transform.rotation, this._rotation, this.transform.rotation)
    };
    p.prototype._buildBall = function () {
        this.renderables.push({
            meshData: this._ballMesh,
            materials: [this._buildMaterialForAxis(3)],
            transform: new l,
            id: e.registerHandle({
                type: "Rotate",
                axis: 3
            })
        })
    };
    p.prototype._buildTorus = function (a) {
        var b = new l;
        a === 0 ? b.setRotationXYZ(0, Math.PI / 2, 0) : a === 1 && b.setRotationXYZ(Math.PI / 2, 0, 0);
        this.renderables.push({
            meshData: this._torusMesh,
            materials: [this._buildMaterialForAxis(a)],
            transform: b,
            id: e.registerHandle({
                type: "Rotate",
                axis: a
            })
        })
    };
    return p
});
define("goo/util/gizmos/ScaleGizmo", "goo/util/gizmos/Gizmo,goo/renderer/MeshData,goo/util/MeshBuilder,goo/shapes/Box,goo/renderer/Material,goo/math/Transform,goo/renderer/Renderer,goo/math/Vector3".split(","), function (e, c, b, a, d, g, f, i) {
    function h(b) {
        e.call(this, b, "ScaleGizmo");
        this._boxMesh = new a;
        this._arrowMesh = this._buildArrowMesh();
        this._scale = 1;
        this._transformScale = new i;
        this._transformScale.setd(1, 1, 1);
        this._buildBox();
        this._buildArrow(0);
        this._buildArrow(1);
        this._buildArrow(2)
    }
    h.prototype = Object.create(e.prototype);
    h.prototype.activate = function (a) {
        e.prototype.activate.call(this, a);
        this._activeHandle.axis !== 3 && (this._setPlane(), this._setLine())
    };
    h.prototype.copyTransform = function (a) {
        e.prototype.copyTransform.call(this, a);
        this._transformScale.setv(a.scale)
    };
    h.prototype.process = function () {
        var a = this._mouse.oldPosition,
            b = this._mouse.position;
        this._activeHandle.axis === 3 ? this._scaleUniform() : this._scaleNonUniform();
        a[0] = b[0];
        a[1] = b[1];
        this.updateTransforms();
        this.dirty = !1;
        if (this.onChange instanceof Function) this.onChange(this._transformScale)
    };
    h.prototype._scaleUniform = function () {
        var a = this._mouse.oldPosition,
            b = this._mouse.position,
            a = Math.pow(1 + b[0] + a[1] - a[0] - b[1], this._scale);
        this._transformScale.muld(a, a, a)
    };
    h.prototype._scaleNonUniform = function () {
        var a = this._mouse.position,
            b = this._mouse.oldPosition;
        f.mainCamera.getPickRay(b[0], b[1], 1, 1, this._oldRay);
        f.mainCamera.getPickRay(a[0], a[1], 1, 1, this._newRay);
        var c = this._v0,
            d = this._v1,
            a = this._line,
            b = this._result;
        this._plane.rayIntersect(this._oldRay, c);
        this._plane.rayIntersect(this._newRay, d);
        b.setv(d).subv(c);
        b.div(this.transform.scale).scale(0.07);
        c = b.dot(a);
        b.setv(a).muld(c, c, c);
        a = Math.pow(1 + c, this._scale);
        switch (this._activeHandle.axis) {
        case 0:
            this._transformScale.data[0] *= a;
            break;
        case 1:
            this._transformScale.data[1] /= a;
            break;
        case 2:
            this._transformScale.data[2] *= a
        }
    };
    h.prototype._buildBox = function () {
        this.renderables.push({
            meshData: this._boxMesh,
            materials: [this._buildMaterialForAxis(3)],
            transform: new g,
            id: e.registerHandle({
                type: "Scale",
                axis: 3
            })
        })
    };
    h.prototype._buildArrow = function (a) {
        var b =
            new g;
        a === 0 ? b.setRotationXYZ(0, Math.PI / 2, 0) : a === 1 && b.setRotationXYZ(Math.PI / 2, 0, 0);
        this.renderables.push({
            meshData: this._arrowMesh,
            materials: [this._buildMaterialForAxis(a)],
            transform: b,
            id: e.registerHandle({
                type: "Scale",
                axis: a
            })
        })
    };
    h.prototype._buildArrowMesh = function () {
        var d = new b,
            f = new a,
            e = new c(c.defaultMap([c.POSITION]), 2, 2);
        e.getAttributeBuffer(c.POSITION).set([0, 0, 0, 0, 0, 1]);
        e.getIndexBuffer().set([0, 1]);
        e.indexLengths = null;
        e.indexModes = ["Lines"];
        var h = new g;
        h.translation.setd(0, 0, 10);
        h.update();
        d.addMeshData(f, h);
        h = new g;
        h.scale.setd(1, 1, 10);
        h.update();
        d.addMeshData(e, h);
        return d.build()[0]
    };
    return h
});
define("goo/entities/systems/GizmoRenderSystem", "goo/entities/systems/System,goo/entities/EventHandler,goo/renderer/SimplePartitioner,goo/renderer/Material,goo/renderer/shaders/ShaderLib,goo/renderer/Util,goo/math/Matrix3x3,goo/math/Matrix4x4,goo/util/gizmos/Gizmo,goo/util/gizmos/TranslationGizmo,goo/util/gizmos/RotationGizmo,goo/util/gizmos/ScaleGizmo".split(","), function (e, c, b, a, d, g, f, i, h, k, j, l) {
    function m(a) {
        e.call(this, "GizmoRenderSystem", null);
        this.renderables = [];
        this.camera = null;
        this.gizmos = [new k, new j, new l];
        this.setupCallbacks(a);
        this.activeGizmo = this.boundEntity = null;
        this.viewportHeight = this.viewportWidth = 0;
        this.domElement = null;
        this.global = !1;
        this.mouseMove = function (a) {
            this.activeGizmo && this.activeGizmo.update([a.offsetX / this.viewportWidth, a.offsetY / this.viewportHeight])
        }.bind(this);
        var b = this;
        c.addListener({
            setCurrentCamera: function (a) {
                b.camera = a
            }
        })
    }
    m.prototype = Object.create(e.prototype);
    m.prototype.activate = function (a, b, c) {
        if ((a = h.getHandle(a)) && this.activeGizmo) this.activeGizmo.activate({
            data: a,
            x: b / this.viewportWidth,
            y: c / this.viewportHeight
        }), this.domElement.addEventListener("mousemove", this.mouseMove)
    };
    m.prototype.deactivate = function () {
        this.domElement.removeEventListener("mousemove", this.mouseMove)
    };
    m.prototype.show = function (a) {
        this.entity = a;
        this.activeGizmo && (this.entity ? this.showGizmo(this.activeGizmo) : this.hideGizmo(this.activeGizmo))
    };
    m.prototype.showGizmo = function (a) {
        a.copyTransform(this.entity.transformComponent.worldTransform, this.global);
        if (!a.visible) this.renderables = a.renderables,
        a.visible = !0
    };
    m.prototype.hideGizmo = function (a) {
        if (a.visible) this.renderables = [], a.visible = !1
    };
    m.prototype.setActiveGizmo = function (a) {
        this.activeGizmo && this.hideGizmo(this.activeGizmo);
        (this.activeGizmo = this.gizmos[a] || null) && this.entity && this.showGizmo(this.activeGizmo)
    };
    m.prototype.setGlobal = function (a) {
        if (this.global !== a) this.global = !! a, this.entity && this.activeGizmo && this.showGizmo(this.activeGizmo)
    };
    m.prototype.setupCallbacks = function (a) {
        if (a && a.length === 3) this.gizmos[0].onChange = a[0], this.gizmos[1].onChange =
            a[1], this.gizmos[2].onChange = a[2];
        else {
            var b = new f,
                c = new i;
            this.gizmos[0].onChange = function (a) {
                if (this.entity) {
                    var b = this.entity.transformComponent.transform.translation;
                    b.setv(a);
                    this.entity.transformComponent.parent && (c.copy(this.entity.transformComponent.parent.worldTransform.matrix), c.invert(), c.applyPostPoint(b));
                    this.entity.transformComponent.setUpdated()
                }
            }.bind(this);
            this.gizmos[1].onChange = function (a) {
                this.entity && (this.entity.transformComponent.transform.rotation.copy(a), this.entity.transformComponent.parent &&
                    (b.copy(this.entity.transformComponent.parent.worldTransform.rotation), b.invert()), f.combine(b, this.entity.transformComponent.transform.rotation, this.entity.transformComponent.transform.rotation), this.entity.transformComponent.setUpdated())
            }.bind(this);
            this.gizmos[2].onChange = function (a) {
                if (this.entity) {
                    var b = this.entity.transformComponent.transform.scale;
                    b.setv(a);
                    this.entity.transformComponent.parent && b.div(this.entity.transformComponent.parent.worldTransform.scale);
                    this.entity.transformComponent.setUpdated()
                }
            }.bind(this)
        }
    };
    m.prototype.inserted = function () {};
    m.prototype.deleted = function () {};
    m.prototype.process = function () {
        this.activeGizmo && (this.activeGizmo.dirty ? this.activeGizmo.process() : this.entity && this.entity.transformComponent._updated && this.activeGizmo.copyTransform(this.entity.transformComponent.worldTransform, this.global), this.activeGizmo.updateTransforms())
    };
    m.prototype.render = function (a) {
        a.checkResize(this.camera);
        if (!this.domElement) this.domElement = a.domElement;
        this.viewportHeight = a.viewportHeight;
        this.viewportWidth =
            a.viewportWidth;
        this.camera && a.render(this.renderables, this.camera, this.lights, null, {
            color: !1,
            stencil: !0,
            depth: !0
        }, this.overrideMaterials)
    };
    m.prototype.renderToPick = function (a, b) {
        a.renderToPick(this.renderables, this.camera, {
            color: !1,
            stencil: !0,
            depth: !0
        }, b)
    };
    return m
});
define("goo/shapes/Grid", ["goo/renderer/MeshData"], function (e) {
    function c(b, a, c, g) {
        if (arguments.length === 1 && arguments[0] instanceof Object) var f = arguments[0],
        b = f.xSegments, a = f.ySegments, c = f.width, g = f.height;
        this.xSegments = b || 10;
        this.ySegments = a || 10;
        this.width = c || 1;
        this.height = g || 1;
        f = e.defaultMap([e.POSITION]);
        e.call(this, f, 4 + (this.xSegments - 1) * 2 + (this.ySegments - 1) * 2, 8 + (this.xSegments - 1) * 2 + (this.ySegments - 1) * 2);
        this.indexModes[0] = "Lines";
        this.rebuild()
    }
    c.prototype = Object.create(e.prototype);
    c.prototype.rebuild =
        function () {
            var b = this.width / 2,
                a = this.height / 2,
                c = [],
                g = [];
            c.push(-b, -a, 0, -b, a, 0, b, a, 0, b, -a, 0);
            g.push(0, 1, 1, 2, 2, 3, 3, 0);
            for (var f, i = this.width / this.xSegments, h = 1; h < this.xSegments; h++) f = h * i - b, c.push(f, -a, 0, f, a, 0);
            i = this.height / this.ySegments;
            for (h = 1; h < this.ySegments; h++) f = h * i - a, c.push(-b, f, 0, b, f, 0);
            for (h = g.length / 2; h < c.length / 3; h += 2) g.push(h, h + 1);
            this.getAttributeBuffer(e.POSITION).set(c);
            this.getIndexBuffer().set(g)
    };
    return c
});
define("goo/entities/systems/GridRenderSystem", "goo/entities/systems/System,goo/entities/EventHandler,goo/renderer/SimplePartitioner,goo/renderer/MeshData,goo/renderer/Material,goo/renderer/Shader,goo/renderer/shaders/ShaderLib,goo/renderer/Util,goo/util/DebugDrawHelper,goo/math/Transform,goo/shapes/Grid,goo/shapes/Quad".split(","), function (e, c, b, a, d, g, f, i, h, k, j, l) {
    function m() {
        e.call(this, "GridRenderSystem", []);
        this.renderList = [];
        this.doRender = {
            grid: !0,
            surface: !0
        };
        this.camera = null;
        this.lights = [];
        this.transform = new k;
        this.transform.rotation.rotateX(-Math.PI / 2);
        this.transform.scale.setd(1E4, 1E4, 1E4);
        this.transform.update();
        var a = d.createMaterial(o, "Grid Material");
        a.depthState.write = !0;
        a.depthState.enabled = !0;
        this.grid = {
            meshData: new j(100, 100),
            materials: [a],
            transform: this.transform
        };
        a = i.clone(f.simpleLit);
        a.uniforms.opacity = 1;
        var b = a.fshader.split("\n");
        b.unshift("uniform float opacity;");
        b.splice(b.length - 2, 0, "final_color.a = opacity;");
        a.fshader = b.join("\n");
        a = d.createMaterial(a, "Surface Material");
        a.uniforms.materialAmbient = [0.4, 0.4, 0.4, 1];
        a.uniforms.materialDiffuse = [0.6, 0.6, 0.6, 1];
        a.uniforms.materialSpecular = [0.6, 0.6, 0.6, 1];
        a.uniforms.opacity = 0.9;
        a.blendState.blending = "CustomBlending";
        a.cullState.enabled = !1;
        a.depthState.write = !0;
        a.depthState.enabled = !0;
        a.offsetState.enabled = !0;
        a.offsetState.units = 10;
        a.offsetState.factor = 0.8;
        this.surface = {
            meshData: new l,
            materials: [a],
            transform: this.transform
        };
        var g = this;
        c.addListener({
            setCurrentCamera: function (a) {
                g.camera = a
            },
            setLights: function (a) {
                g.lights =
                    a
            }
        })
    }
    m.prototype = Object.create(e.prototype);
    m.prototype.inserted = function () {};
    m.prototype.deleted = function () {};
    m.prototype.process = function () {
        var a = this.renderList.length = 0;
        if (this.doRender.surface) this.renderList[a++] = this.surface;
        if (this.doRender.grid) this.renderList[a++] = this.grid;
        this.renderList.length = a
    };
    m.prototype.render = function (a) {
        a.checkResize(this.camera);
        this.camera && a.render(this.renderList, this.camera, this.lights, null, {
            color: !1,
            depth: !1,
            stencil: !1
        })
    };
    var o = {
        attributes: {
            vertexPosition: a.POSITION
        },
        uniforms: {
            viewMatrix: g.VIEW_MATRIX,
            projectionMatrix: g.PROJECTION_MATRIX,
            worldMatrix: g.WORLD_MATRIX,
            color: [0.5, 0.5, 0.5, 1],
            fogOn: !1,
            fogColor: [0.1, 0.1, 0.1, 1],
            fogNear: g.NEAR_PLANE,
            fogFar: g.FAR_PLANE
        },
        vshader: "attribute vec3 vertexPosition;\nuniform mat4 worldMatrix;\nuniform mat4 viewMatrix;\nuniform mat4 projectionMatrix;\nvarying float depth;\nvoid main(void)\n{\nvec4 viewPosition = viewMatrix * worldMatrix * vec4(vertexPosition, 1.0);\ndepth = viewPosition.z;\ngl_Position = projectionMatrix * viewPosition;\n}",
        fshader: "precision mediump float;\nuniform vec4 fogColor;\nuniform vec4 color;\nuniform float fogNear;\nuniform float fogFar;\nuniform bool fogOn;\nvarying float depth;\nvoid main(void)\n{\nif (fogOn) {\nfloat lerpVal = clamp(depth / (-fogFar + fogNear), 0.0, 1.0);\nlerpVal = pow(lerpVal, 1.5);\ngl_FragColor = mix(color, fogColor, lerpVal);\n} else {\ngl_FragColor = color;\n}\n}"
    };
    return m
});
define("goo/renderer/scanline/Edge", [], function () {
    function e() {
        this.zIncrement = this.xIncrement = this.dz = this.dy = this.dx = this.z1 = this.z0 = this.y1 = this.y0 = this.x1 = this.x0 = 0;
        this.betweenFaces = !1
    }
    e.prototype.setData = function (c, b) {
        var a = c.data[1],
            d = b.data[1];
        a < d ? (this.x0 = c.data[0], this.x1 = b.data[0], this.y0 = a, this.y1 = d, this.z0 = c.data[2], this.z1 = b.data[2]) : (this.x0 = b.data[0], this.x1 = c.data[0], this.y0 = d, this.y1 = a, this.z0 = b.data[2], this.z1 = c.data[2]);
        this.betweenFaces = !1
    };
    e.prototype.computeDerivedData = function () {
        var c =
            this.x1 - this.x0,
            b = this.y1 - this.y0,
            a = this.z1 - this.z0;
        this.dy = b;
        this.dx = c;
        this.dz = a;
        this.xIncrement = c / b;
        this.zIncrement = a / b
    };
    e.prototype.roundOccludeeCoordinates = function () {
        this.y0 = Math.round(this.y0);
        this.y1 = Math.round(this.y1)
    };
    return e
});
define("goo/renderer/scanline/EdgeData", [], function () {
    function e() {
        var c = 8 * Float32Array.BYTES_PER_ELEMENT;
        this._dataBuffer = new ArrayBuffer(2 * Int16Array.BYTES_PER_ELEMENT + c);
        this.floatData = new Float32Array(this._dataBuffer, 0, 8);
        this.integerData = new Int16Array(this._dataBuffer, c, 2)
    }
    e.prototype.setData = function (c) {
        this.integerData[0] = c[0];
        this.integerData[1] = c[1];
        this.floatData[0] = c[2];
        this.floatData[1] = c[3];
        this.floatData[2] = c[4];
        this.floatData[3] = c[5];
        this.floatData[4] = c[6];
        this.floatData[5] = c[7];
        this.floatData[6] = c[8];
        this.floatData[7] = c[9]
    };
    e.prototype.getStartLine = function () {
        return this.integerData[0]
    };
    e.prototype.getStopLine = function () {
        return this.integerData[1]
    };
    e.prototype.getLongX = function () {
        return this.floatData[0]
    };
    e.prototype.setLongX = function (c) {
        this.floatData[0] = c
    };
    e.prototype.getShortX = function () {
        return this.floatData[1]
    };
    e.prototype.setShortX = function (c) {
        this.floatData[1] = c
    };
    e.prototype.getLongZ = function () {
        return this.floatData[2]
    };
    e.prototype.getShortZ = function () {
        return this.floatData[3]
    };
    e.prototype.getLongXIncrement = function () {
        return this.floatData[4]
    };
    e.prototype.getShortXIncrement = function () {
        return this.floatData[5]
    };
    e.prototype.getLongZIncrement = function () {
        return this.floatData[6]
    };
    e.prototype.getShortZIncrement = function () {
        return this.floatData[7]
    };
    return e
});
define("goo/renderer/scanline/OccludeeTriangleData", [], function () {
    function e(c) {
        var b = c.numberOfPositions,
            c = c.numberOfIndices;
        this.indexCount = 0;
        var a = b * Float32Array.BYTES_PER_ELEMENT;
        this._dataBuffer = new ArrayBuffer(a + c * Uint8Array.BYTES_PER_ELEMENT);
        this.positions = new Float32Array(this._dataBuffer, 0, b);
        this.indices = new Uint8Array(this._dataBuffer, a, c)
    }
    e.prototype.addIndices = function (c) {
        var b = this.indexCount;
        this.indices[b] = c[0];
        b++;
        this.indices[b] = c[1];
        b++;
        this.indices[b] = c[2];
        b++;
        this.indexCount =
            b
    };
    e.prototype.clear = function () {
        this.indexCount = 0
    };
    return e
});
define("goo/renderer/scanline/BoundingBoxOcclusionChecker", ["goo/math/Matrix4x4", "goo/math/Vector4", "goo/math/Vector2", "goo/renderer/scanline/OccludeeTriangleData"], function (e, c, b, a) {
    function d(a) {
        this.renderer = a;
        this._clipY = a.height - 1;
        this._clipX = a.width - 1;
        this._halfClipX = this._clipX / 2;
        this._halfClipY = this._clipY / 2
    }
    var g = new Uint8Array(8),
        f = new Float32Array(32),
        i = new Float32Array(5),
        h = new Uint8Array([0, 3, 4, 3, 7, 4, 0, 4, 5, 0, 5, 1, 2, 1, 5, 2, 5, 6, 3, 2, 6, 3, 6, 7, 0, 1, 2, 0, 2, 3, 5, 4, 6, 7, 6, 4]),
        k = new Uint8Array([0, 1,
            1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 0, 0, 4, 1, 5, 2, 6, 3, 7
        ]),
        j = new a({
            numberOfPositions: 32,
            numberOfIndices: 18
        }),
        l = new c(0, 0, 0, 1),
        m = new c(0, 0, 0, 1),
        o = new c(0, 0, 0, 1),
        p = new Uint8Array(3),
        n = new e;
    d.prototype.occlusionCull = function (a, b) {
        return this._doSSAABBOcclusionTest(a, b)
    };
    d.prototype._doRenderedBoundingBoxOcclusionTest = function (a, b) {
        this._copyEntityVerticesToPositionArray(a);
        if (!this._projectionTransformTriangleData(a, b)) return !1;
        this._addVisibleTrianglesToTriangleData();
        this._screenSpaceTransformTriangleData();
        for (var c = j.indexCount, d = 0; d < c;)
            if (p[0] = j.indices[d++], p[1] = j.indices[d++], p[2] = j.indices[d++], !this.renderer.isRenderedTriangleOccluded(p, j.positions)) return !1;
        return !0
    };
    d.prototype._doSSAABBOcclusionTest = function (a, b) {
        this._copyEntityVerticesToPositionArray(a);
        e.combine(b, a.transformComponent.worldTransform.matrix, n);
        for (var c = 0; c < 32;) {
            var d = c++,
                g = c++,
                h = c++,
                j = c++;
            l.data[0] = f[d];
            l.data[1] = f[g];
            l.data[2] = f[h];
            l.data[3] = f[j];
            n.applyPost(l);
            h = l.data[3];
            if (h < this.renderer.camera.near) return !1;
            h = 1 / h;
            l.data[0] *= h;
            l.data[1] *= h;
            f[d] = (l.data[0] + 1) * this._halfClipX;
            f[g] = (l.data[1] + 1) * this._halfClipY;
            f[j] = h
        }
        this._clipBox(f);
        i[0] = Math.floor(i[0]);
        i[1] = Math.ceil(i[1]);
        i[2] = Math.floor(i[2]);
        i[3] = Math.ceil(i[3]);
        return this._isBoundingBoxScanlineOccluded(i)
    };
    d.prototype._copyEntityVerticesToPositionArray = function (a) {
        f.set(a.occludeeComponent.positionArray)
    };
    d.prototype._clipBox = function (a) {
        var b, c, d, f, e;
        b = Infinity;
        c = -Infinity;
        d = Infinity;
        e = f = -Infinity;
        for (var h, j = 0; j < 8; j++) {
            h = j * 4;
            l.data[0] = a[h];
            l.data[1] =
                a[h + 1];
            l.data[3] = a[h + 3];
            var n = this._calculateOutCode(l);
            g[j] = n;
            if (n === 0) {
                e = Math.max(e, l.data[3]);
                var p = l.data[0];
                b = Math.min(b, p);
                c = Math.max(c, p);
                p = l.data[1];
                d = Math.min(d, p);
                f = Math.max(f, p)
            }
        }
        for (n = 0; n < 24; n++) {
            p = k[n];
            h = p * 4;
            l.data[0] = a[h];
            l.data[1] = a[h + 1];
            l.data[3] = a[h + 3];
            j = g[p];
            n++;
            p = k[n];
            h = p * 4;
            m.data[0] = a[h];
            m.data[1] = a[h + 1];
            m.data[3] = a[h + 3];
            for (h = g[p];;) {
                if (!(j | h) || j & h) break;
                var y = j ? j : h,
                    B, C;
                if (y & 8) {
                    if (B = (this._clipY - l.data[1]) / (m.data[1] - l.data[1]), o.data[0] = l.data[0] + (m.data[0] - l.data[0]) * B, o.data[1] =
                        this._clipY, C = this._calculateOutCode(o), C === 0) f = this._clipY, p = o.data[0], b = Math.min(b, p), c = Math.max(c, p)
                } else if (y & 4) B = -l.data[1] / (m.data[1] - l.data[1]), o.data[0] = l.data[0] + (m.data[0] - l.data[0]) * B, o.data[1] = 0, C = this._calculateOutCode(o), C === 0 && (d = 0, p = o.data[0], b = Math.min(b, p), c = Math.max(c, p));
                else if (y & 2) {
                    if (B = (this._clipX - l.data[0]) / (m.data[0] - l.data[0]), o.data[1] = l.data[1] + (m.data[1] - l.data[1]) * B, o.data[0] = this._clipX, C = this._calculateOutCode(o), C === 0) c = this._clipX, p = o.data[1], d = Math.min(d, p), f = Math.max(f,
                        p)
                } else y & 1 && (B = -l.data[0] / (m.data[0] - l.data[0]), o.data[1] = l.data[1] + (m.data[1] - l.data[1]) * B, o.data[0] = 0, C = this._calculateOutCode(o), C === 0 && (b = 0, p = o.data[1], d = Math.min(d, p), f = Math.max(f, p)));
                y === j ? (j = C, p = (1 - B) * l.data[3] + B * m.data[3]) : (h = C, p = (1 - B) * m.data[3] + B * l.data[3]);
                e = Math.max(e, p)
            }
        }
        i[0] = b;
        i[1] = c;
        i[2] = d;
        i[3] = f;
        i[4] = e
    };
    d.prototype._calculateOutCode = function (a) {
        var b = 0;
        a.data[0] < 0 ? b |= 1 : a.data[0] > this._clipX && (b |= 2);
        a.data[1] < 0 ? b |= 4 : a.data[1] > this._clipY && (b |= 8);
        return b
    };
    d.prototype._isBoundingBoxScanlineOccluded =
        function (a) {
            for (var b = a[0], c = a[1], d = a[2], f = a[4], e = this.renderer.width, a = a[3]; a >= d; a--)
                for (var g = a * e + b, h = b; h <= c; h++) {
                    if (this.renderer._depthData[g] < f) return !1;
                    g++
                }
            return !0
    };
    d.prototype._projectionTransformTriangleData = function (a, b) {
        j.clear();
        e.combine(b, a.transformComponent.worldTransform.matrix, n);
        for (var c = f.length, d, g, h, i = 0; i < c; i++) {
            d = i + 1;
            g = i + 2;
            h = i + 3;
            l.data[0] = f[i];
            l.data[1] = f[d];
            l.data[2] = f[g];
            l.data[3] = 1;
            n.applyPost(l);
            g = l.data[3];
            if (g < this.renderer.camera.near) return !1;
            g = 1 / g;
            l.data[0] *= g;
            l.data[1] *=
                g;
            j.positions[i] = l.data[0];
            j.positions[d] = l.data[1];
            j.positions[h] = g;
            i = h
        }
        return !0
    };
    d.prototype._addVisibleTrianglesToTriangleData = function () {
        for (var a, b = 0; b < h.length; b++) p = [h[b], h[++b], h[++b]], a = p[0] * 4, l.data[0] = j.positions[a], l.data[1] = j.positions[a + 1], a = p[1] * 4, m.data[0] = j.positions[a], m.data[1] = j.positions[a + 1], a = p[2] * 4, o.data[0] = j.positions[a], o.data[1] = j.positions[a + 1], this.renderer._isBackFacingProjected(l, m, o) || j.addIndices(p)
    };
    d.prototype._screenSpaceTransformTriangleData = function () {
        for (var a =
            j.positions.length, b = 0; b < a; b += 4) {
            j.positions[b] = (j.positions[b] + 1) * this._halfClipX;
            var c = b + 1;
            j.positions[c] = (j.positions[c] + 1) * this._halfClipY
        }
    };
    return d
});
define("goo/renderer/scanline/BoundingSphereOcclusionChecker", ["goo/math/Matrix4x4", "goo/math/Vector4"], function (e, c) {
    function b(a) {
        this.renderer = a;
        this._clipY = a.height - 1;
        this._clipX = a.width - 1;
        this._halfClipX = this._clipX / 2;
        this._halfClipY = this._clipY / 2
    }
    var a = new c(0, 0, 0, 1),
        d = new e,
        g = new Float32Array(20),
        f = [0, 255, 0],
        i = [0, 190, 190];
    b.prototype.occlusionCull = function (b, c, f, i) {
        e.combine(c, b.transformComponent.worldTransform.matrix, d);
        c = b.meshDataComponent.modelBound;
        a.data[0] = 0;
        a.data[1] = 0;
        a.data[2] = 0;
        a.data[3] = 1;
        d.applyPost(a);
        var m = b.transformComponent.transform.scale.maxAxis() * c.radius,
            b = a.data[0],
            c = a.data[1],
            o = a.data[2],
            p = Math.sqrt(b * b + c * c + o * o);
        if (p <= m) return !1;
        m = p * Math.tan(Math.asin(m / p));
        p = o + m;
        if (p > i) return !1;
        g[0] = b;
        g[1] = c;
        g[2] = p;
        g[4] = b - m;
        g[5] = c;
        g[6] = o;
        g[8] = b + m;
        g[9] = c;
        g[10] = o;
        g[12] = b;
        g[13] = c + m;
        g[14] = o;
        g[16] = b;
        g[17] = c - m;
        g[18] = o;
        for (i = 0; i < 20;) b = i++, c = i++, m = i++, o = i++, a.data[0] = g[b], a.data[1] = g[c], a.data[2] = g[m], a.data[3] = 1, f.applyPost(a), m = 1 / a.data[3], a.data[0] *= m, a.data[1] *= m, g[b] = (a.data[0] +
            1) * this._halfClipX, g[c] = (a.data[1] + 1) * this._halfClipY, g[o] = m;
        return this._isSSAABBScanlineOccluded()
    };
    b.prototype._isSSAABBScanlineOccluded = function () {
        var a = g[3],
            b = g[4],
            c = g[8],
            d = g[13],
            e = g[17],
            b = Math.floor(b),
            c = Math.ceil(c),
            d = Math.ceil(d),
            e = Math.floor(e);
        b < 0 && (b = 0);
        if (c > this._clipX) c = this._clipX;
        if (d > this._clipY) d = this._clipY;
        e < 0 && (e = 0);
        for (var i = this.renderer.width, p = d; p >= e; p--)
            for (var d = p * i + b, n = b; n <= c; n++) {
                this.renderer._colorData.set(f, d * 4);
                if (this.renderer._depthData[d] < a) return !1;
                d++
            }
        return !0
    };
    b.prototype._isPythagorasCircleScanlineOccluded = function (a, b, c, d, f, e) {
        var g = a.y - c.y,
            n = c.y - b.y,
            s = c.x - a.x,
            r = s * s,
            u = this.renderer.width,
            q = u / this.renderer.height,
            x = a.y - 1;
        if (g <= 1 && n <= 1 || a.y <= 0 || b.y >= this._clipY) {
            var t;
            this._isCoordinateInsideScreen(a) && (t = a.y * u + a.x, this.renderer._colorData.set(i, t * 4));
            this._isCoordinateInsideScreen(b) && (t = b.y * u + b.x, this.renderer._colorData.set(i, t * 4));
            this._isCoordinateInsideScreen(d) && (t = d.y * u + d.x, this.renderer._colorData.set(i, t * 4));
            this._isCoordinateInsideScreen(c) &&
                (t = c.y * u + c.x, this.renderer._colorData.set(i, t * 4));
            return !0
        }
        u = 1;
        if (c.y >= this._clipY) g = 0, x = this._clipY;
        else {
            var w = x - this._clipY;
            if (w > 0) g -= w, u += w, x = this._clipY;
            w = -(c.y + 1);
            w > 0 && (g -= w)
        }
        g -= 1;
        for (w = 0; w < g; w++) {
            var z = s - q * u;
            t = Math.sqrt(r - z * z);
            var z = Math.ceil(a.x + t),
                v = Math.floor(a.x - t);
            v < 0 && (v = 0);
            if (z > this._clipX) z = this._clipX;
            for (t = x * this.width + v; v <= z; v++) {
                this.renderer._colorData.set(e, t * 4);
                if (this.renderer._depthData[t] < f) return !1;
                t++
            }
            x--;
            u++
        }
        if (x < 0) return !0;
        if (g >= -1 && c.y <= this._clipY) {
            v = d.x + 1;
            v < 0 && (v = 0);
            z = c.x - 1;
            if (z > this._clipX) z = this._clipX;
            d = x * this.width + v;
            for (w = v; w <= z; w++) {
                this.renderer._colorData.set(e, d * 4);
                if (this.renderer._depthData[d] < f) return !1;
                d++
            }
            x--
        }
        u = n - 1;
        w = c.y - x - 1;
        w > 0 && (n -= w, u -= w);
        d = -(b.y + 1);
        d > 0 && (n -= d);
        n -= 1;
        s = c.x - b.x;
        for (w = 0; w < n; w++) {
            z = s - q * u;
            t = Math.sqrt(r - z * z);
            z = Math.ceil(a.x + t);
            v = Math.floor(a.x - t);
            v < 0 && (v = 0);
            if (z > this._clipX) z = this._clipX;
            for (t = x * this.width + v; v <= z; v++) {
                this.renderer._colorData.set(e, t * 4);
                if (this.renderer._depthData[t] < f) return !1;
                t++
            }
            x--;
            u--
        }
        return !0
    };
    b.prototype._isOccluded =
        function (a, b, c) {
            return this._isCoordinateInsideScreen(a) ? (a = a.y * this.renderer.width + a.x, this.renderer._colorData.set(b, a * 4), c < this.renderer._depthData[a]) : !0
    };
    b.prototype._isCoordinateInsideScreen = function (a) {
        return a.data[0] >= 0 && a.data[0] <= this._clipX && a.data[1] <= this._clipY && a.data[1] >= 0
    };
    return b
});
define("goo/renderer/scanline/OccluderTriangleData", [], function () {
    function e(c) {
        var b = c.indexCount,
            c = c.vertCount * 4 + b / 3 * 8;
        b *= 2;
        this.posCount = 0;
        this.largestIndex = -1;
        this.indexCount = 0;
        var a = c * Float32Array.BYTES_PER_ELEMENT;
        this._dataBuffer = new ArrayBuffer(a + b * Uint8Array.BYTES_PER_ELEMENT);
        this.positions = new Float32Array(this._dataBuffer, 0, c);
        this.indices = new Uint8Array(this._dataBuffer, a, b)
    }
    e.prototype.addVertex = function (c) {
        var b = this.posCount;
        this.positions[b] = c[0];
        b++;
        this.positions[b] = c[1];
        b++;
        this.positions[b] =
            c[2];
        b++;
        this.positions[b] = c[3];
        b++;
        this.posCount = b;
        this.largestIndex++;
        return this.largestIndex
    };
    e.prototype.setCountersToNewEntity = function (c) {
        this.indexCount = 0;
        c /= 3;
        this.posCount = c * 4;
        this.largestIndex = c - 1
    };
    e.prototype.addIndices = function (c) {
        var b = this.indexCount;
        this.indices[b] = c[0];
        b++;
        this.indices[b] = c[1];
        b++;
        this.indices[b] = c[2];
        b++;
        this.indexCount = b
    };
    return e
});
define("goo/renderer/scanline/EdgeMap", ["goo/renderer/scanline/Edge"], function (e) {
    function c(b) {
        this._edges = Array(b);
        for (var a = this._edgeCount = 0; a < b; a++) this._edges[a] = new e;
        this._map = {};
        this.numberOfSharedEdges = 0
    }
    c.prototype.addEdge = function (b, a, c, e) {
        var f = this._indicesToKey(b, a);
        if (this._contains(f)) h = this._map[f], this._edges[h].betweenFaces = !0, this.numberOfSharedEdges++;
        else {
            var i = this._indicesToKey(a, b),
                h = this._edgeCount,
                k = this._edges[h];
            k.setData(c, e, b, a);
            k.computeDerivedData();
            this._map[f.toString()] =
                h;
            this._map[i.toString()] = h;
            this._edgeCount++
        }
    };
    c.prototype._contains = function (b) {
        return this._map.hasOwnProperty(b)
    };
    c.prototype.getEdge = function (b, a) {
        return this._edges[this._map[this._indicesToKey(b, a)]]
    };
    c.prototype.clear = function () {
        this._map = {};
        this.numberOfSharedEdges = this._edgeCount = 0
    };
    c.prototype._indicesToKey = function (b, a) {
        return (b << 8) + a
    };
    return c
});
define("goo/renderer/scanline/SoftwareRenderer", "goo/math/Vector4,goo/math/Matrix4x4,goo/renderer/scanline/Edge,goo/renderer/bounds/BoundingSphere,goo/renderer/bounds/BoundingBox,goo/renderer/scanline/EdgeData,goo/renderer/scanline/BoundingBoxOcclusionChecker,goo/renderer/scanline/BoundingSphereOcclusionChecker,goo/renderer/scanline/OccluderTriangleData,goo/renderer/scanline/EdgeMap".split(","), function (e, c, b, a, d, g, f, i, h, k) {
    function j(a) {
        a = a || {};
        this.width = a.width;
        this.height = a.height;
        this._clipY =
            this.height - 1;
        this._clipX = this.width - 1;
        this._halfClipX = this._clipX / 2;
        this._halfClipY = this._clipY / 2;
        this.camera = a.camera;
        var b = this.width * this.height,
            c = b * 4 * Uint8Array.BYTES_PER_ELEMENT,
            d = b * Float32Array.BYTES_PER_ELEMENT;
        this._frameBuffer = new ArrayBuffer(c + d * 2);
        this._colorData = new Uint8Array(this._frameBuffer, 0, b * 4);
        this._depthData = new Float32Array(this._frameBuffer, c, b);
        this._depthClear = new Float32Array(this._frameBuffer, c + d, b);
        for (c = 0; c < b; c++) this._depthClear[c] = 0;
        this._triangleData = new h({
            vertCount: a.maxVertCount,
            indexCount: a.maxIndexCount
        });
        this.edgeMap = new k(a.maxVertCount);
        this.boundingBoxModule = new f(this);
        this.boundingSphereModule = new i(this);
        s.data[2] = -this.camera.near
    }
    var l = new Uint8Array(4),
        m = new Uint16Array(3),
        o = new e(0, 0, 0, 1),
        p = new e(0, 0, 0, 1),
        n = new e(0, 0, 0, 1),
        s = new e(0, 0, 0, 1),
        r = [o, p, n],
        u = new Uint8Array(3),
        q = new Uint8Array(3),
        x = new Uint8Array(3),
        t = new c,
        w = new c,
        z = new g,
        v = [new b, new b, new b];
    j.prototype._clearDepthData = function () {
        this._depthData.set(this._depthClear)
    };
    j.prototype.render = function (a) {
        this._clearDepthData();
        for (var b = this.camera.getViewMatrix(), c = this.camera.getProjectionMatrix(), d, f = 0; f < a.length; f++) {
            this._setupTriangleDataForEntity(a[f], b, c);
            this._fillEdgeMap();
            d = this._triangleData.indexCount;
            for (var e = 0; e < d; e++) l[0] = this._triangleData.indices[e], l[1] = this._triangleData.indices[++e], l[2] = this._triangleData.indices[++e], this._renderTriangle(l)
        }
    };
    j.prototype._fillEdgeMap = function () {
        this.edgeMap.clear();
        for (var a = this._triangleData.indexCount, b = 0; b < a; b++) {
            var c = this._triangleData.indices[b],
                d = this._triangleData.indices[++b],
                f = this._triangleData.indices[++b],
                e = c * 4;
            o.data[0] = this._triangleData.positions[e];
            o.data[1] = this._triangleData.positions[e + 1];
            o.data[2] = this._triangleData.positions[e + 3];
            e = d * 4;
            p.data[0] = this._triangleData.positions[e];
            p.data[1] = this._triangleData.positions[e + 1];
            p.data[2] = this._triangleData.positions[e + 3];
            e = f * 4;
            n.data[0] = this._triangleData.positions[e];
            n.data[1] = this._triangleData.positions[e + 1];
            n.data[2] = this._triangleData.positions[e + 3];
            this.edgeMap.addEdge(c, d, o, p);
            this.edgeMap.addEdge(d, f, p, n);
            this.edgeMap.addEdge(f, c, n, o)
        }
    };
    j.prototype.performOcclusionCulling = function (b) {
        var f = this.camera.getViewMatrix(),
            e = this.camera.getProjectionMatrix();
        c.combine(e, f, t);
        for (var g = -this.camera.near, h = [], j = 0; j < b.length; j++) {
            var i = b[j];
            if (i.meshRendererComponent.cullMode !== "NeverOcclusionCull") {
                var k, l;
                l = i.occludeeComponent ? i.occludeeComponent.modelBound : i.modelBound;
                l instanceof a ? k = this.boundingSphereModule.occlusionCull(i, f, e, g) : l instanceof d && (k = this.boundingBoxModule.occlusionCull(i, t));
                k || h.push(i)
            } else h.push(i)
        }
        return h
    };
    j.prototype._viewSpaceTransformAndCopyVertices = function (a, b) {
        var d = a.occluderComponent.meshData.dataViews.POSITION;
        c.combine(b, a.transformComponent.worldTransform.matrix, w);
        o.data[3] = 1;
        for (var f = d.length, e = 0, g = 0; g < f; g++) o.data[0] = d[g], g++, o.data[1] = d[g], g++, o.data[2] = d[g], w.applyPost(o), this._triangleData.positions[e] = o.data[0], e++, this._triangleData.positions[e] = o.data[1], e++, this._triangleData.positions[e] = o.data[2], e += 2;
        this._triangleData.setCountersToNewEntity(f)
    };
    j.prototype._nearPlaneClipAndAddTriangle =
        function (a) {
            var b, c, d, f, e, g, h, j;
            switch (this._categorizeVertices(-a)) {
            case 0:
                this._triangleData.addIndices(l);
                break;
            case 1:
                b = u[0];
                c = r[b];
                d = c.data[0];
                f = c.data[1];
                e = r[q[0]];
                j = this._calculateIntersectionRatio(c, e, a);
                s.data[0] = d + j * (e.data[0] - d);
                s.data[1] = f + j * (e.data[1] - f);
                l[b] = this._triangleData.addVertex(s.data);
                e = r[q[1]];
                j = this._calculateIntersectionRatio(c, e, a);
                s.data[0] = d + j * (e.data[0] - d);
                s.data[1] = f + j * (e.data[1] - f);
                l[3] = this._triangleData.addVertex(s.data);
                a = q[0];
                c = l[3];
                x[0] = l[b];
                x[1] = l[a];
                x[2] = c;
                this._triangleData.addIndices(x);
                x[0] = c;
                x[2] = l[q[1]];
                this._triangleData.addIndices(x);
                break;
            case 2:
                e = r[q[0]], g = e.data[0], h = e.data[1], b = u[0], c = r[b], d = c.data[0], f = c.data[1], j = this._calculateIntersectionRatio(c, e, a), s.data[0] = d + j * (g - d), s.data[1] = f + j * (h - f), l[b] = this._triangleData.addVertex(s.data), b = u[1], c = r[b], d = c.data[0], f = c.data[1], j = this._calculateIntersectionRatio(c, e, a), s.data[0] = d + j * (g - d), s.data[1] = f + j * (h - f), l[b] = this._triangleData.addVertex(s.data), this._triangleData.addIndices(l)
            }
    };
    j.prototype._screenSpaceTransformTriangleData =
        function (a) {
            for (var b = this._triangleData.posCount, c = 0; c < b;) {
                var d = c++,
                    f = c++,
                    e = c++,
                    g = c++;
                o.data[0] = this._triangleData.positions[d];
                o.data[1] = this._triangleData.positions[f];
                o.data[2] = this._triangleData.positions[e];
                o.data[3] = 1;
                a.applyPost(o);
                var e = 1 / o.data[3],
                    h = o.data[1] * e;
                this._triangleData.positions[d] = (o.data[0] * e + 1) * this._halfClipX;
                this._triangleData.positions[f] = (h + 1) * this._halfClipY;
                this._triangleData.positions[g] = e
            }
    };
    j.prototype._setupTriangleDataForEntity = function (a, b, c) {
        this._viewSpaceTransformAndCopyVertices(a,
            b);
        for (var a = a.occluderComponent.meshData.indexData.data, b = a.length, d = this.camera.near, f = 0; f < b; f++) {
            l[0] = a[f];
            l[1] = a[++f];
            l[2] = a[++f];
            m[0] = l[0] * 4;
            m[1] = l[1] * 4;
            m[2] = l[2] * 4;
            var e = m[0];
            o.data[0] = this._triangleData.positions[e];
            o.data[1] = this._triangleData.positions[e + 1];
            o.data[2] = this._triangleData.positions[e + 2];
            e = m[1];
            p.data[0] = this._triangleData.positions[e];
            p.data[1] = this._triangleData.positions[e + 1];
            p.data[2] = this._triangleData.positions[e + 2];
            e = m[2];
            n.data[0] = this._triangleData.positions[e];
            n.data[1] =
                this._triangleData.positions[e + 1];
            n.data[2] = this._triangleData.positions[e + 2];
            this._isBackFacingCameraViewSpace(o, p, n) || this._nearPlaneClipAndAddTriangle(d)
        }
        this._screenSpaceTransformTriangleData(c)
    };
    j.prototype._categorizeVertices = function (a) {
        for (var b = 0, c = 0, d = 0; d < 3; d++) r[d].data[2] <= a ? (q[c] = d, c++) : (u[b] = d, b++);
        return b
    };
    j.prototype._calculateIntersectionRatio = function (a, b, c) {
        a = a.data[2];
        return (a + c) / (a - b.data[2])
    };
    j.prototype._isBackFacingCameraViewSpace = function (a, b, c) {
        var d = a.data[0],
            f = a.data[1],
            a = a.data[2],
            e = b.data[0] - d,
            g = b.data[1] - f,
            b = b.data[2] - a,
            h = c.data[0] - d,
            j = c.data[1] - f,
            c = c.data[2] - a;
        return (c * g - j * b) * d + (h * b - c * e) * f + (j * e - h * g) * a > 0
    };
    j.prototype._isBackFacingProjected = function (a, b, c) {
        var d = a.data[0],
            a = a.data[1];
        return (c.data[1] - a) * (b.data[0] - d) - (c.data[0] - d) * (b.data[1] - a) < 0
    };
    j.prototype._createOccludeeEdges = function (a, b) {
        var c = a[0] * 4;
        o.data[0] = b[c];
        o.data[1] = b[c + 1];
        o.data[2] = b[c + 3];
        c = a[1] * 4;
        p.data[0] = b[c];
        p.data[1] = b[c + 1];
        p.data[2] = b[c + 3];
        c = a[2] * 4;
        n.data[0] = b[c];
        n.data[1] = b[c + 1];
        n.data[2] =
            b[c + 3];
        v[0].setData(o, p);
        v[1].setData(p, n);
        v[2].setData(n, o);
        v[0].roundOccludeeCoordinates();
        v[1].roundOccludeeCoordinates();
        v[2].roundOccludeeCoordinates();
        v[0].computeDerivedData();
        v[1].computeDerivedData();
        v[2].computeDerivedData()
    };
    j.prototype._getLongEdgeAndShortEdgeIndices = function () {
        for (var a = v[0].dy, b = 0, c = 1; c < 3; c++) {
            var d = v[c].dy;
            d > a && (a = d, b = c)
        }
        return [b, (b + 1) % 3, (b + 2) % 3]
    };
    j.prototype._calculateOrientationData = function (a, b) {
        var c = z.getShortX();
        return [z.getLongX() > c, b.z1 < a.z0]
    };
    j.prototype.isRenderedTriangleOccluded =
        function (a, b) {
            this._createOccludeeEdges(a, b);
            var c = this._getLongEdgeAndShortEdgeIndices(),
                d = v[c[0]],
                f = c[1],
                c = c[2];
            if (this._verticalLongEdgeCull(d)) return console.log("renderingocclusion : vertical cull"), !0;
            var f = v[f],
                e = null;
            if (this._createEdgeData(d, f)) {
                e = this._calculateOrientationData(z, f, d);
                if (this._horizontalLongEdgeCull(d, e)) return console.log("renderingocclusion : horizontal cull"), !0;
                if (!this._isEdgeOccluded(z, e)) return !1
            }
            f = v[c];
            if (this._createEdgeData(d, f)) {
                if (e === null && (e = this._calculateOrientationData(z,
                    f, d), this._horizontalLongEdgeCull(d, e))) return console.log("renderingocclusion : horizontal cull"), !0;
                if (!this._isEdgeOccluded(z, e)) return !1
            }
            return !0
    };
    j.prototype._renderTriangle = function (a) {
        var b = a[0],
            c = a[1],
            a = a[2];
        v[0] = this.edgeMap.getEdge(b, c);
        v[1] = this.edgeMap.getEdge(c, a);
        v[2] = this.edgeMap.getEdge(a, b);
        c = this._getLongEdgeAndShortEdgeIndices();
        b = v[c[0]];
        a = c[1];
        c = c[2];
        if (!this._verticalLongEdgeCull(b)) {
            var a = v[a],
                d = [b.betweenFaces, a.betweenFaces],
                f = null;
            if (this._createEdgeData(b, a)) {
                f = this._calculateOrientationData(a,
                    b);
                if (this._horizontalLongEdgeCull(b, f)) return;
                this._drawEdges(z, f, d)
            }
            a = v[c];
            d = [b.betweenFaces, a.betweenFaces];
            this._createEdgeData(b, a) && (f = this._calculateOrientationData(a, b), this._horizontalLongEdgeCull(b, f) || this._drawEdges(z, f, d))
        }
    };
    j.prototype._verticalLongEdgeCull = function (a) {
        return a.y1 < 0 || a.y0 > this._clipY
    };
    j.prototype._horizontalLongEdgeCull = function (a, b) {
        return b[0] ? a.x1 < 0 && a.x0 < 0 : a.x1 > this._clipX && a.x0 > this._clipX
    };
    j.prototype._isEdgeOccluded = function (a, b) {
        var c = a.getStartLine(),
            d = a.getStopLine(),
            f = a.getLongXIncrement(),
            e = a.getShortXIncrement(),
            g = a.getLongZIncrement(),
            h = a.getShortZIncrement(),
            j, i, k, l, n;
        if (b[0])
            if (b[1])
                for (; c <= d; c++) {
                    j = a.getShortX();
                    i = a.getLongX();
                    j = Math.floor(j);
                    l = Math.ceil(i);
                    i = a.getShortZ();
                    k = a.getLongZ();
                    n = l - j;
                    n = 0.5 / (n + 1);
                    k = (1 - n) * k + n * i;
                    if (!this._isScanlineOccluded(j, l, c, i, k)) return !1;
                    a.floatData[0] += f;
                    a.floatData[1] += e;
                    a.floatData[2] += g;
                    a.floatData[3] += h
                } else
                    for (; c <= d; c++) {
                        j = a.getShortX();
                        i = a.getLongX();
                        j = Math.floor(j);
                        l = Math.ceil(i);
                        i = a.getShortZ();
                        k = a.getLongZ();
                        n = l -
                            j;
                        n = 0.5 / (n + 1);
                        i = (1 - n) * i + n * k;
                        if (!this._isScanlineOccluded(j, l, c, i, k)) return !1;
                        a.floatData[0] += f;
                        a.floatData[1] += e;
                        a.floatData[2] += g;
                        a.floatData[3] += h
                    } else if (b[1])
                        for (; c <= d; c++) {
                            j = a.getLongX();
                            i = a.getShortX();
                            j = Math.floor(j);
                            l = Math.ceil(i);
                            i = a.getLongZ();
                            k = a.getShortZ();
                            n = l - j;
                            n = 0.5 / (n + 1);
                            k = (1 - n) * k + n * i;
                            if (!this._isScanlineOccluded(j, l, c, i, k)) return !1;
                            a.floatData[0] += f;
                            a.floatData[1] += e;
                            a.floatData[2] += g;
                            a.floatData[3] += h
                        } else
                            for (; c <= d; c++) {
                                j = a.getLongX();
                                i = a.getShortX();
                                j = Math.floor(j);
                                l = Math.ceil(i);
                                i = a.getLongZ();
                                k = a.getShortZ();
                                n = l - j;
                                n = 0.5 / (n + 1);
                                i = (1 - n) * i + n * k;
                                if (!this._isScanlineOccluded(j, l, c, i, k)) return !1;
                                a.floatData[0] += f;
                                a.floatData[1] += e;
                                a.floatData[2] += g;
                                a.floatData[3] += h
                            }
                    return !0
    };
    j.prototype._drawEdges = function (a, b, c) {
        var d = a.getStartLine(),
            f = a.getStopLine(),
            e = a.getLongXIncrement(),
            g = a.getShortXIncrement(),
            h = a.getLongZIncrement(),
            j = a.getShortZIncrement(),
            i = c[0],
            c = c[1],
            k, l, n, m, o, p;
        n = 0.5;
        if (b[0])
            if (b[1]) {
                p = i;
                k = a.getShortX();
                l = a.getLongX();
                b = a.getShortZ();
                i = a.getLongZ();
                m = g;
                o = e;
                c = k + Math.abs(0.5 *
                    m);
                p ? (l += Math.abs(0.5 * o), n = -0.5) : l -= Math.abs(0.5 * o);
                c += 0.5;
                n = l - n;
                a.setLongX(n + o);
                a.setShortX(c + m);
                c = Math.ceil(c);
                n = Math.floor(n);
                a.floatData[3] += j;
                a.floatData[2] += h;
                this._fillPixels(c, n, d, b, i);
                for (d++; d <= f; d++) k = a.getShortX(), l = a.getLongX(), b = a.getShortZ(), i = a.getLongZ(), c = Math.ceil(k), n = Math.floor(l), m = c - k, l -= k, l = m / l, b = (1 - l) * b + l * i, l = n - c + 1, l = 0.5 / l, b = (1 - l) * b + l * i, this._fillPixels(c, n, d, b, i), a.floatData[0] += e, a.floatData[1] += g, a.floatData[2] += h, a.floatData[3] += j
            } else {
                p = i;
                k = a.getShortX();
                l = a.getLongX();
                b = a.getShortZ();
                i = a.getLongZ();
                m = g;
                o = e;
                c = k + Math.abs(0.5 * m);
                p ? (l += Math.abs(0.5 * o), n = -0.5) : l -= Math.abs(0.5 * o);
                c += 0.5;
                n = l - n;
                a.setLongX(n + o);
                a.setShortX(c + m);
                c = Math.ceil(c);
                n = Math.floor(n);
                a.floatData[3] += j;
                a.floatData[2] += h;
                this._fillPixels(c, n, d, b, i);
                for (d++; d <= f; d++) k = a.getShortX(), l = a.getLongX(), b = a.getShortZ(), i = a.getLongZ(), c = Math.ceil(k), n = Math.floor(l), m = l - n, l -= k, l = m / l, i = (1 - l) * i + l * b, l = n - c + 1, l = 0.5 / l, i = (1 - l) * i + l * b, this._fillPixels(c, n, d, b, i), a.floatData[0] += e, a.floatData[1] += g, a.floatData[2] += h,
                a.floatData[3] += j
            } else if (b[1]) {
            p = c;
            k = a.getLongX();
            l = a.getShortX();
            b = a.getLongZ();
            i = a.getShortZ();
            m = e;
            o = g;
            c = k + Math.abs(0.5 * m);
            p ? (l += Math.abs(0.5 * o), n = -0.5) : l -= Math.abs(0.5 * o);
            c += 0.5;
            n = l - n;
            a.setShortX(n + o);
            a.setLongX(c + m);
            c = Math.ceil(c);
            n = Math.floor(n);
            a.floatData[2] += j;
            a.floatData[3] += h;
            this._fillPixels(c, n, d, b, i);
            for (d++; d <= f; d++) k = a.getLongX(), l = a.getShortX(), b = a.getLongZ(), i = a.getShortZ(), c = Math.ceil(k), n = Math.floor(l), m = c - k, l -= k, l = m / l, b = (1 - l) * b + l * i, l = n - c + 1, l = 0.5 / l, b = (1 - l) * b + l * i, this._fillPixels(c,
                n, d, b, i), a.floatData[0] += e, a.floatData[1] += g, a.floatData[2] += h, a.floatData[3] += j
        } else {
            p = c;
            k = a.getLongX();
            l = a.getShortX();
            b = a.getLongZ();
            i = a.getShortZ();
            m = e;
            o = g;
            c = k + Math.abs(0.5 * m);
            p ? (l += Math.abs(0.5 * o), n = -0.5) : l -= Math.abs(0.5 * o);
            c += 0.5;
            n = l - n;
            a.setShortX(n + o);
            a.setLongX(c + m);
            c = Math.ceil(c);
            n = Math.floor(n);
            a.floatData[2] += j;
            a.floatData[3] += h;
            this._fillPixels(c, n, d, b, i);
            for (d++; d <= f; d++) k = a.getLongX(), l = a.getShortX(), b = a.getLongZ(), i = a.getShortZ(), c = Math.ceil(k), n = Math.floor(l), m = l - n, l -= k, l = m / l, i = (1 -
                l) * i + l * b, l = n - c + 1, l = 0.5 / l, i = (1 - l) * i + l * b, this._fillPixels(c, n, d, b, i), a.floatData[0] += e, a.floatData[1] += g, a.floatData[2] += h, a.floatData[3] += j
        }
    };
    j.prototype._createEdgeData = function (a, b) {
        var c = Math.ceil(b.y0),
            d = Math.floor(b.y1),
            f = a.zIncrement,
            e = b.zIncrement,
            g = b.xIncrement,
            h = a.xIncrement;
        if (c > d) return !1;
        else if (c === d)
            if (b.betweenFaces) h = g = 0;
            else return !1;
        var j = (b.y0 - a.y0) / a.dy,
            i = a.x0 + a.dx * j,
            j = a.z0 + a.dz * j,
            k = b.x0,
            l = b.z0,
            n = c - b.y0;
        i += n * h;
        k += n * g;
        j += n * f;
        l += n * e;
        c < 0 && (i += -c * h, k += -c * g, j += -c * f, l += -c * e, c = 0);
        d = Math.min(this._clipY,
            d);
        z.setData([c, d, i, k, j, l, h, g, f, e]);
        return !0
    };
    j.prototype._isScanlineOccluded = function (a, b, c, d, f) {
        if (b < a || b < 0 || a > this._clipX) return !0;
        var e;
        a < 0 && (e = -a / (b - a + 1), d = (1 - e) * d + e * f, a = 0);
        e = b - this._clipX + 1;
        if (e > 0) e /= b - a + 1, f = (1 - e) * f + e * d, b = this._clipX;
        c = c * this.width + a;
        e = d;
        for (d = (f - d) / (b - a); a <= b; a++) {
            this._colorData.set([Math.min(e * 255 + 50, 255), 0, 0], c * 4);
            if (e > this._depthData[c]) return !1;
            c++;
            e += d
        }
        return !0
    };
    j.prototype._fillPixels = function (a, b, c, d, f) {
        if (!(b < 0 || a > this._clipX || b < a)) {
            var e;
            a < 0 && (e = -a / (b - a + 1), d = (1 - e) *
                d + e * f, a = 0);
            e = b - this._clipX + 1;
            if (e > 0) e /= b - a + 1, f = (1 - e) * f + e * d, b = this._clipX;
            c = c * this.width + a;
            e = d;
            for (d = (f - d) / (b - a); a <= b; a++) e > this._depthData[c] && (this._depthData[c] = e), c++, e += d
        }
    };
    j.prototype.copyDepthToColor = function () {
        for (var a = 0, b = 0; b < this._depthData.length; b++) {
            var c = this._depthData[b];
            c > 0 ? (c *= 255, this._colorData[a] = c, this._colorData[++a] = c, this._colorData[++a] = c, this._colorData[++a] = 255) : (this._colorData[a] = 0, this._colorData[++a] = 0, this._colorData[++a] = 0, this._colorData[++a] = 0);
            a++
        }
    };
    j.prototype.getColorData =
        function () {
            return this._colorData
    };
    j.prototype.getDepthData = function () {
        return this._depthData
    };
    j.prototype.calculateDifference = function (a, b) {
        for (var c = 0; c < this._depthData.length; c++) {
            var d = 4 * c,
                f = a[d],
                e = a[d + 1],
                g = a[d + 2],
                h = a[d + 3];
            if (this._depthData[c] > 0 && !(f > b[0] * 256 || e > b[1] * 256 || g > b[2] * 256 || h > b[3] * 256)) this._colorData[d] = 255, this._colorData[d + 1] = 0, this._colorData[d + 2] = 0, this._colorData[d + 3] = 255
        }
    };
    return j
});
define("goo/entities/systems/OcclusionCullingSystem", ["goo/entities/systems/System", "goo/renderer/SimplePartitioner", "goo/renderer/scanline/SoftwareRenderer"], function (e, c, b) {
    function a(a) {
        e.call(this, "OcclusionCullingSystem", ["MeshRendererComponent"]);
        a = a || {};
        this.partitioner = new c;
        this.renderList = [];
        this.occluderList = [];
        this.camera = a.camera;
        this.renderer = new b({
            width: a.width,
            height: a.height,
            camera: a.camera
        })
    }
    a.prototype = Object.create(e.prototype);
    a.prototype.inserted = function (a) {
        this.partitioner &&
            this.partitioner.added(a)
    };
    a.prototype.deleted = function (a) {
        this.partitioner && this.partitioner.removed(a)
    };
    a.prototype.process = function (a) {
        this.renderList.length = 0;
        this.partitioner.process(this.camera, a, this.renderList);
        this._addVisibleOccluders();
        this.renderer.render(this.occluderList);
        this.renderer.copyDepthToColor();
        this.renderer.performOcclusionCulling(this.renderList)
    };
    a.prototype._addVisibleOccluders = function () {
        for (var a = this.occluderList.length = 0; a < this.renderList.length; a++) {
            var b = this.renderList[a];
            b.getComponent("OccluderComponent") && this.occluderList.push(b)
        }
    };
    return a
});
define("goo/entities/systems/PortalSystem", ["goo/entities/systems/System"], function (e) {
    function c(b, a) {
        e.call(this, "PortalSystem", ["MeshRendererComponent", "MeshDataComponent", "PortalComponent"]);
        this.renderer = b;
        this.renderSystem = a;
        this.renderList = []
    }
    c.prototype = Object.create(e.prototype);
    c.prototype.process = function (b) {
        for (var a = 0; a < b.length; a++) {
            var c = b[a],
                e = c.portalComponent;
            if (e.options.autoUpdate || e.doUpdate) {
                e.doUpdate = !1;
                var f = e.camera,
                    i = e.target,
                    h = e.secondaryTarget,
                    k = e.overrideMaterial;
                if (e.alwaysRender ||
                    c.isVisible)
                    if (this.render(this.renderer, f, i, k), c.meshRendererComponent.materials[0].setTexture("DIFFUSE_MAP", i), e.options.preciseRecursion) c = i, e.target = h, e.secondaryTarget = c
            }
        }
    };
    c.prototype.render = function (b, a, c, e) {
        b.updateShadows(this.renderSystem.partitioner, this.renderSystem.entities, this.renderSystem.lights);
        for (var f = 0; f < this.renderSystem.preRenderers.length; f++) this.renderSystem.preRenderers[f].process(b, this.renderSystem.entities, this.renderSystem.partitioner, a, this.renderSystem.lights);
        this.renderSystem.partitioner.process(a,
            this.renderSystem.entities, this.renderList);
        if (this.renderSystem.composers.length > 0)
            for (f = 0; f < this.renderSystem.composers.length; f++) this.renderSystem.composers[f].render(b, this.renderSystem.currentTpf, a, this.renderSystem.lights, null, !0);
        else b.render(this.renderList, a, this.renderSystem.lights, c, !0, e)
    };
    return c
});
define("goo/loaders/BundleLoader", ["goo/loaders/Loader", "goo/util/rsvp", "goo/renderer/Util"], function (e, c, b) {
    function a(a) {
        e.call(this, a);
        this._bundle = {}
    }
    a.prototype = Object.create(e.prototype);
    a.prototype.addBundle = function (a) {
        for (var b in a) a.hasOwnProperty(b) && (this._bundle[b] = a[b])
    };
    a.prototype.load = function (a, g, f) {
        if (this._bundle[a]) {
            var f = new c.Promise,
                a = b.clone(this._bundle[a]),
                i = f.then(function (a) {
                    return typeof g === "function" ? g(a) : a
                });
            f.resolve(a);
            return i
        }
        return e.prototype.load.call(this,
            a, g, f)
    };
    a.prototype.loadBundle = function (b) {
        var c = a.prototype._parse.bind(this);
        return e.prototype.load.call(this, b, c)
    };
    a.prototype._parse = function (a) {
        return this._bundle = JSON.parse(a)
    };
    return a
});
define("goo/loaders/handlers/ConfigHandler", [], function () {
    function e(c, b, a, d) {
        this.world = c;
        this.getConfig = b;
        this.updateObject = a;
        this.options = d
    }
    e.prototype.update = function () {};
    e.prototype.remove = function () {};
    e.handlerClasses = {};
    e.getHandler = function (c) {
        return e.handlerClasses[c]
    };
    e._registerClass = function (c, b) {
        b._type = c;
        return e.handlerClasses[c] = b
    };
    return e
});
define("goo/loaders/handlers/ComponentHandler", [], function () {
    function e(c, b, a, d) {
        this.world = c;
        this.getConfig = b;
        this.updateObject = a;
        this.options = d
    }
    e.prototype._prepare = function () {};
    e.prototype._create = function () {
        throw Error("ComponentHandler._create is abstract, use ComponentHandler.getHandler(type)");
    };
    e.prototype.update = function (c, b) {
        this._prepare(b);
        return c == null || c[this.constructor._type + "Component"] == null ? this._create(c, b) : c[this.constructor._type + "Component"]
    };
    e.prototype.remove = function (c) {
        c !=
            null && c.clearComponent(this.constructor._type + "Component");
        return c
    };
    e.handlerClasses = {};
    e.getHandler = function (c) {
        return e.handlerClasses[c]
    };
    e._registerClass = function (c, b) {
        b._type = c;
        e.handlerClasses[c] = b
    };
    return e
});
define("goo/util/StringUtil", [], function () {
    var e = {
        endsWith: function (c, b) {
            return c.indexOf(b, c.length - b.length) !== -1
        },
        startsWith: function (c, b) {
            return c.indexOf(b) === 0
        },
        capitalize: function (c) {
            return c.charAt(0).toUpperCase() + c.substring(1)
        },
        uncapitalize: function (c) {
            return c.charAt(0).toLowerCase() + c.substring(1)
        },
        getIndexedName: function (c, b, a) {
            a || (a = "_");
            var d = RegExp(c + "(" + a + "\\d+)?"),
                e, f = 0;
            for (e in b) {
                var i = d.exec(b[e]);
                i && (i.length > 1 && i[1] ? (i = parseInt(i[1].substring(a.length), 10), i >= f && (f = i + 1)) : f =
                    1)
            }
            return c + a + f
        }
    };
    e.getUniqueName = function (c, b, a) {
        return b.indexOf(c) === -1 ? c : e.getIndexedName(c, b, a)
    };
    e.toAscii = function (c) {
        return c.replace(/([^\x00-\x7F]|\s)*/g, "")
    };
    e.hashCode = function (c) {
        var b = 0;
        if (c.length === 0) return b;
        for (var a = 0; a < c.length; a++) {
            var d = c.charCodeAt(a),
                b = (b << 5) - b + d;
            b &= b
        }
        return btoa(b).replace("/", "_").replace("+", "-")
    };
    return e
});
define("goo/util/PromiseUtil", ["goo/util/rsvp"], function (e) {
    return {
        createDummyPromise: function (c, b) {
            var a;
            a = new e.Promise;
            b != null ? a.reject(b) : a.resolve(c);
            return a
        },
        defer: function (c, b) {
            var a, d, g;
            g = new e.Promise;
            if (b.apply) return a = new e.Promise, d = a.then(function () {
                return b()
            }), setTimeout(function () {
                a.resolve()
            }, c), d;
            else setTimeout(function () {
                g.resolve(b)
            }, c);
            return g
        }
    }
});
define("goo/util/ObjectUtil", [], function () {
    var e = {}, c = Array.prototype,
        b = Object.prototype,
        a = {}, d = c.slice,
        g = b.toString,
        f = b.hasOwnProperty,
        b = Array.isArray,
        i = Object.keys,
        h = c.forEach;
    e.has = function (a, b) {
        return f.call(a, b)
    };
    e.defaults = function (a) {
        k(d.call(arguments, 1), function (b) {
            if (b)
                for (var c in b)
                    if (typeof a[c] === "undefined" || a[c] === null) a[c] = b[c]
        });
        return a
    };
    e.extend = function (a) {
        k(d.call(arguments, 1), function (b) {
            if (b)
                for (var c in b) a[c] = b[c]
        });
        return a
    };
    e.isObject = function (a) {
        return a === Object(a)
    };
    e.clone = function (a) {
        return !e.isObject(a) ? a : e.isArray(a) ? a.slice() : e.extend({}, a)
    };
    e.keys = i || function (a) {
        if (a !== Object(a)) throw new TypeError("Invalid object");
        var b = [],
            c;
        for (c in a) e.has(a, c) && (b[b.length] = c);
        return b
    };
    e.isArray = b || function (a) {
        return g.call(a) === "[object Array]"
    };
    var k = e.each = e.forEach = function (b, c, d) {
        if (!(typeof b === "undefined" || b === null))
            if (h && b.forEach === h) b.forEach(c, d);
            else if (b.length === +b.length)
            for (var f = 0, g = b.length; f < g; f++) {
                if (c.call(d, b[f], f, b) === a) break
            } else
                for (f in b)
                    if (e.has(b,
                        f) && c.call(d, b[f], f, b) === a) break
    };
    e.deepClone = function (a) {
        if (!a) return a;
        var b;
        [Number, String, Boolean].forEach(function (c) {
            a instanceof c && (b = c(a))
        });
        if (typeof b == "undefined")
            if (Object.prototype.toString.call(a) === "[object Array]") b = [], a.forEach(function (a, c) {
                b[c] = e.deepClone(a)
            });
            else if (typeof a == "object")
            if (a.nodeType && typeof a.cloneNode == "function") b = a.cloneNode(!0);
            else if (a.prototype) b = a;
        else if (a instanceof Date) b = new Date(a);
        else {
            b = {};
            for (var c in a) b[c] = e.deepClone(a[c])
        } else b = a;
        return b
    };
    e.indexOf = function (a, b) {
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    };
    return e
});
define("goo/loaders/handlers/CameraComponentHandler", "goo/loaders/handlers/ComponentHandler,goo/entities/components/CameraComponent,goo/renderer/Camera,goo/util/rsvp,goo/util/PromiseUtil,goo/util/ObjectUtil".split(","), function (e, c, b, a, d, g) {
    function f() {
        e.apply(this, arguments)
    }
    f.prototype = Object.create(e.prototype);
    e._registerClass("camera", f);
    f.prototype.constructor = f;
    f.prototype._prepare = function (a) {
        return g.defaults(a, {
            fov: 45,
            near: 1,
            far: 1E4
        })
    };
    f.prototype._create = function (a) {
        var d = new b(45, 1, 1,
            1E3),
            d = new c(d);
        a.setComponent(d);
        return d
    };
    f.prototype.update = function (a, b) {
        var c = e.prototype.update.call(this, a, b);
        c.camera.setFrustumPerspective(b.fov, b.aspect || 1, b.near, b.far);
        return d.createDummyPromise(c)
    };
    f.prototype.remove = function (a) {
        a != null && a.cameraComponent != null && a.cameraComponent.camera != null && this.world.removeEntity(a.cameraComponent.camera);
        return e.prototype.remove.call(this, a)
    };
    return f
});
define("goo/loaders/handlers/EntityHandler", "goo/loaders/handlers/ConfigHandler,goo/loaders/handlers/ComponentHandler,goo/entities/Entity,goo/util/rsvp,goo/util/PromiseUtil,goo/util/ObjectUtil".split(","), function (e, c, b, a, d, g) {
    function f() {
        e.apply(this, arguments)
    }
    f.prototype = Object.create(e.prototype);
    e._registerClass("entity", f);
    f.prototype._prepare = function () {};
    f.prototype._create = function (a) {
        var b = this.world.createEntity(a);
        b.ref = a;
        return b
    };
    f.prototype.update = function (b, f) {
        function e(a) {
            return a.ref ===
                b
        }
        var j = this.world.entityManager.getEntityByName(b);
        if (j == null) {
            var l = this.world._addedEntities.filter(e);
            l != null && (j = l[0])
        }
        j == null && (j = this._create(b));
        j.skip = !! f.hidden;
        var l = [],
            m;
        for (m in f.components) {
            var o = f.components[m],
                p = c.getHandler(m);
            if (p) {
                if (this._componentHandlers == null) this._componentHandlers = {};
                var n = this._componentHandlers[m];
                n ? g.extend(n, {
                    world: this._world,
                    getConfig: this.getConfig,
                    updateObject: this.updateObject,
                    options: g.clone(this.options)
                }) : n = this._componentHandlers[m] = new p(this.world,
                    this.getConfig, this.updateObject, this.options);
                o = n.update(j, o);
                o == null || o.then == null ? console.error("Handler for " + m + " did not return promise") : l.push(o)
            } else console.warn("No componentHandler for " + m)
        }
        return l.length ? a.all(l).then(function () {
            return j
        }) : (console.error("No promises in " + b + " ", f), d.createDummyPromise(j))
    };
    f.prototype.remove = function (a) {
        this.world.removeEntity(this.world.entityManager.getEntityByName(a))
    };
    return f
});
define("goo/loaders/handlers/LightComponentHandler", "goo/loaders/handlers/ComponentHandler,goo/entities/components/LightComponent,goo/renderer/light/PointLight,goo/renderer/light/SpotLight,goo/renderer/light/DirectionalLight,goo/math/Vector,goo/util/rsvp,goo/util/PromiseUtil,goo/util/ObjectUtil,goo/math/Vector3".split(","), function (e, c, b, a, d, g, f, i, h, k) {
    function j() {
        e.apply(this, arguments)
    }
    j.prototype = Object.create(e.prototype);
    j.prototype.constructor = j;
    e._registerClass("light", j);
    j.prototype._prepare =
        function (a) {
            h.defaults(a, {
                direction: [0, 0, 0],
                color: [1, 1, 1, 1],
                attenuate: !0,
                shadowCaster: !1
            });
            if (a.type !== "DirectionalLight") a.range = a.range || 1E3;
            if (a.shadowCaster) a.shadowSettings = a.shadowSettings || {}, h.defaults(a.shadowSettings, {
                type: "Blur",
                projection: a.type === "DirectionalLight" ? "Parallel" : "Perspective",
                fov: 55,
                size: 400,
                near: 1,
                far: 1E3,
                resolution: [512, 512],
                upVector: k.UNIT_Y
            })
    };
    j.prototype._create = function (f, e) {
        var g;
        switch (e.type) {
        case "SpotLight":
            g = new a;
            break;
        case "DirectionalLight":
            g = new d;
            break;
        default:
            g = new b
        }
        g = new c(g);
        f.setComponent(g);
        return g
    };
    j.prototype.update = function (a, b) {
        var c = e.prototype.update.call(this, a, b),
            d = c.light,
            f;
        for (f in b) {
            var j = b[f];
            d.hasOwnProperty(f) && (d[f] instanceof g ? d[f].set(j) : d[f] = h.clone(j))
        }
        return i.createDummyPromise(c)
    };
    return j
});
define("goo/loaders/handlers/MaterialHandler", "goo/loaders/handlers/ConfigHandler,goo/renderer/Material,goo/renderer/Util,goo/renderer/shaders/ShaderLib,goo/util/rsvp,goo/util/PromiseUtil,goo/util/ObjectUtil".split(","), function (e, c, b, a, d, g, f) {
    function i() {
        e.apply(this, arguments);
        this._objects = {}
    }
    i.prototype = Object.create(e.prototype);
    e._registerClass("material", i);
    i.ENGINE_SHADER_PREFIX = "GOO_ENGINE_SHADERS/";
    i.prototype._prepare = function (a) {
        if (!a.blendState) a.blendState = {};
        f.defaults(a.blendState, {
            blending: "NoBlending",
            blendEquation: "AddEquation",
            blendSrc: "SrcAlphaFactor",
            blendDst: "OneMinusSrcAlphaFactor"
        });
        if (!a.cullState) a.cullState = {};
        f.defaults(a.cullState, {
            enabled: !0,
            cullFace: "Back",
            frontFace: "CCW"
        });
        if (!a.depthState) a.depthState = {};
        f.defaults(a.depthState, {
            enabled: !0,
            write: !0
        });
        if (a.renderQueue == null) a.renderQueue = -1
    };
    i.prototype._create = function (a) {
        if (!this._objects) this._objects = {};
        return this._objects[a] = new c(a)
    };
    i.prototype.update = function (a, c) {
        var e = this,
            g = this._objects[a] || this._create(a);
        this._prepare(c);
        return this._getShaderObject(c.shaderRef, c.wireframe).then(function (i) {
            if (i) {
                if (c.wireframe) g.wireframe = c.wireframe;
                g.blendState = b.clone(c.blendState);
                g.cullState = b.clone(c.cullState);
                g.depthState = b.clone(c.depthState);
                g.renderQueue = c.renderQueue === -1 ? null : c.renderQueue;
                g.shader = i;
                g.uniforms = {};
                for (var o in c.uniforms) typeof c.uniforms[o].enabled === "undefined" ? g.uniforms[o] = f.clone(c.uniforms[o]) : c.uniforms[o].enabled ? g.uniforms[o] = f.clone(c.uniforms[o].value) : delete g.uniforms[o];
                var p = [],
                    i = function (a, b) {
                        return p.push(e.getConfig(b).then(function (c) {
                            return e.updateObject(b, c, e.options).then(function (c) {
                                return {
                                    type: a,
                                    ref: b,
                                    texture: c
                                }
                            })
                        }))
                    }, n;
                for (n in c.texturesMapping) o = c.texturesMapping[n], typeof o === "string" ? i(n, o) : o && o.enabled ? i(n, o.textureRef) : g.removeTexture(n);
                return p.length ? d.all(p).then(function (a) {
                    for (var b = 0; b < a.length; b++) {
                        var c = a[b];
                        c.texture && g.setTexture(c.type, c.texture)
                    }
                    return g
                }).then(null, function (a) {
                    return console.error("Error loading textures: " + a)
                }) : g
            } else console.warn("Unknown shader",
                c.shaderRef, "- not updating material", a)
        })
    };
    i.prototype.remove = function (a) {
        return delete this._objects[a]
    };
    i.prototype._getShaderObject = function (b, f) {
        var e = this;
        if (f) {
            var l = new d.Promise,
                m = c.createShader(a.simple);
            l.resolve(m);
            return l
        } else return b ? b.indexOf(i.ENGINE_SHADER_PREFIX) === 0 ? (l = b.slice(i.ENGINE_SHADER_PREFIX.length), m = c.createShader(a[l]), g.createDummyPromise(m)) : this.getConfig(b).then(function (a) {
            return e.updateObject(b, a, e.options)
        }) : (l = c.createShader(a.texturedLit, "DefaultShader"),
            g.createDummyPromise(l))
    };
    return i
});
define("goo/loaders/handlers/MeshDataComponentHandler", "goo/loaders/handlers/ComponentHandler,goo/entities/components/MeshDataComponent,goo/renderer/bounds/BoundingBox,goo/shapes/Box,goo/shapes/Cylinder,goo/shapes/Disk,goo/shapes/Quad,goo/shapes/Sphere,goo/shapes/Torus,goo/shapes/Grid,goo/util/rsvp,goo/util/PromiseUtil,goo/util/ObjectUtil".split(","), function (e, c, b, a, d, g, f, i, h, k, j, l, m) {
    function o() {
        e.apply(this, arguments)
    }
    o.prototype = Object.create(e.prototype);
    e._registerClass("meshData", o);
    var p = {
        Box: a,
        Cylinder: d,
        Disk: g,
        Quad: f,
        Sphere: i,
        Torus: h,
        Grid: k
    };
    o.prototype._prepare = function (a) {
        return m.defaults(a, {
            meshRef: null
        })
    };
    o.prototype._create = function () {};
    o.prototype.update = function (a, d) {
        var f = this,
            g, h;
        e.prototype.update.call(this, a, d);
        if (d.shape && p[d.shape]) g = new p[d.shape](d.shapeOptions), g = l.createDummyPromise(g), h = l.createDummyPromise();
        else {
            var i = d.meshRef;
            i || console.error("No meshRef in meshDataComponent for " + a.ref);

            g = this.getConfig(i).then(function (a) {
                if (a == "") {
                    console.log("buuhh");
                }

                return f.updateObject(i, a)
            });
            var k =
                d.poseRef || d.pose;
            h = k ? this.getConfig(k).then(function (a) {
                return f.updateObject(k, a)
            }) : l.createDummyPromise()
        }
        return j.all([g, h]).then(function (d) {
            var f = d[0],
                d = d[1],
                e = new c(f);
            if (f.boundingBox) {
                var g = f.boundingBox.min,
                    h = f.boundingBox.max,
                    f = [h[0] - g[0], h[1] - g[1], h[2] - g[2]],
                    g = [(h[0] + g[0]) * 0.5, (h[1] + g[1]) * 0.5, (h[2] + g[2]) * 0.5],
                    h = new b;
                h.xExtent = f[0] / 2;
                h.yExtent = f[1] / 2;
                h.zExtent = f[2] / 2;
                h.center.seta(g);
                e.modelBound = h;
                e.autoCompute = !1
            }
            if (d) e.currentPose = d;
            a.setComponent(e);
            return e
        })
    };
    return o
});
define("goo/loaders/JsonUtils", "goo/renderer/BufferUtils,goo/math/Transform,goo/math/Matrix3x3,goo/math/Matrix4x4,goo/math/Vector3,goo/math/Quaternion".split(","), function (e, c, b, a, d, g) {
    function f() {}
    f.fillAttributeBufferFromCompressedString = function (a, b, c, d, e) {
        var b = b.getAttributeBuffer(c),
            c = d.length,
            g = a.length / d.length,
            o, p, n, s, r;
        for (r = 0; r < c; r++)
            if (d[r] === 0) return;
        for (r = 0; r < c; r++)
            for (s = o = 0; s < g; s++) p = a.charCodeAt(s + r * g), n = s * c + r, o += f.unzip(p), b[n] = (o + e[r]) * d[r]
    };
    f.fillAttributeBuffer = function (a, b, c) {
        b =
            b.getAttributeBuffer(c);
        for (c = 0; c < a.length; c++) b[c] = a[c]
    };
    f.getIntBuffer = function (a, b) {
        var c = e.createIndexBuffer(a.length, b);
        c.set(a);
        return c
    };
    f.rewrap = function (a) {
        a %= 61404;
        a < 0 && (a += 61404);
        return a
    };
    f.getIntBufferFromCompressedString = function (a, b) {
        for (var c = 0, d = e.createIndexBuffer(a.length, b), g = 0; g < a.length; ++g) {
            var m = a.charCodeAt(g),
                c = m = c + f.unzip(m);
            d[g] = this.rewrap(m)
        }
        return d
    };
    f.unzip = function (a) {
        a >= 57344 && (a -= 2048);
        a -= 35;
        return a >> 1 ^ -(a & 1)
    };
    f.parseTransform = function (a) {
        var b = new c;
        b.translation =
            f.parseVector3(a.translation);
        b.scale = f.parseVector3(a.scale);
        b.rotation = f.parseMatrix3(a.rotation);
        return b
    };
    f.parseTransformQuat = function (a) {
        var b = new c;
        b.translation = f.parseVector3(a.translation);
        b.scale = f.parseVector3(a.scale);
        b.rotation = f.parseQuaternion(a.rotation).toRotationMatrix();
        return b
    };
    f.parseTransformEuler = function (a) {
        var b = new c;
        b.translation = f.parseVector3(a.translation);
        b.scale = f.parseVector3(a.scale);
        a = f.parseVector3(a.rotation);
        b.setRotationXYZ(a.x, a.y, a.z);
        return b
    };
    f.parseTransformMatrix =
        function (a) {
            var b = new c;
            b.matrix = f.parseMatrix4(a.matrix);
            return b
    };
    f.parseMatrix3 = function (a) {
        var c = new b;
        c.e00 = a[0];
        c.e01 = a[1];
        c.e02 = a[2];
        c.e10 = a[3];
        c.e11 = a[4];
        c.e12 = a[5];
        c.e20 = a[6];
        c.e21 = a[7];
        c.e22 = a[8];
        return c
    };
    f.parseMatrix4 = function (b) {
        var c = new a;
        c.e00 = b[0];
        c.e01 = b[1];
        c.e02 = b[2];
        c.e03 = b[3];
        c.e10 = b[4];
        c.e11 = b[5];
        c.e12 = b[6];
        c.e13 = b[7];
        c.e20 = b[8];
        c.e21 = b[9];
        c.e22 = b[10];
        c.e23 = b[11];
        c.e30 = b[12];
        c.e31 = b[13];
        c.e32 = b[14];
        c.e33 = b[15];
        return c
    };
    f.parseQuaternion = function (a) {
        var b = new g;
        b.x = a[0];
        b.y =
            a[1];
        b.z = a[2];
        b.w = a[3];
        return b
    };
    f.parseVector3 = function (a) {
        return new d(a[0], a[1], a[2])
    };
    f.parseChannelTimes = function (a, b) {
        var c = a.times;
        if (c)
            if (b) {
                var d = a.timeOffsetScale;
                return f.parseFloatArrayFromCompressedString(c, [d[1]], [d[0]])
            } else return c;
        return null
    };
    f.parseFloatLERPValues = function (a, b) {
        var c = a.values;
        if (c)
            if (b) {
                var d = a.offsetScale;
                return f.parseFloatArrayFromCompressedString(c, [d[1]], [d[0]])
            } else return c;
        return null
    };
    f.parseRotationSamples = function (a, b, c) {
        return (a = a.rotationSamples) ?
            c ? (b = 1 - (b + 1 >> 1), c = 1 / -b, f.parseFloatArrayFromCompressedString(a, [c, c, c, c], [b, b, b, b])) : f.parseQuaternionSamples(a) : null
    };
    f.parseTranslationSamples = function (a, b, c) {
        var d = a.uniformTranslation;
        if (d) {
            for (var a = d[0], c = d[1], d = d[2], e = [], g = 0; g < b; g++) e[g * 3 + 0] = a, e[g * 3 + 1] = c, e[g * 3 + 2] = d;
            return e
        }
        return (b = a.translationSamples) ? c ? (a = a.translationOffsetScale, c = a[3], f.parseFloatArrayFromCompressedString(b, [c, c, c], [a[0], a[1], a[2]])) : f.parseVector3Samples(b) : null
    };
    f.parseScaleSamples = function (a, b, c) {
        var d = a.uniformScale;
        if (d) {
            for (var a = d, c = a[0], d = a[1], a = a[2], e = [], g = 0; g < b; g++) e[g * 3 + 0] = c, e[g * 3 + 1] = d, e[g * 3 + 2] = a;
            return e
        }
        return (b = a.scaleSamples) ? c ? (a = a.scaleOffsetScale, c = a[0], d = a[1], e = a[2], a = a[3], f.parseFloatArrayFromCompressedString(b, [a, a, a], [c, d, e])) : f.parseVector3Samples(b) : null
    };
    f.parseQuaternionSamples = function (a) {
        if (!a) return null;
        for (var b = [], c = new g, d = 0, f = a.length; d < f; d++) {
            var e = a[d];
            if (e === "*") b[d * 4 + 0] = c.x, b[d * 4 + 1] = c.y, b[d * 4 + 2] = c.z, b[d * 4 + 3] = c.w;
            else if (e instanceof Array && e.length === 4) c.set(e[0], e[1], e[2], e[3]),
            b[d * 4 + 0] = c.x, b[d * 4 + 1] = c.y, b[d * 4 + 2] = c.z, b[d * 4 + 3] = c.w
        }
        return b
    };
    f.parseVector3Samples = function (a) {
        if (!a) return null;
        for (var b = [], c = new d, f = 0, e = a.length; f < e; f++) {
            var g = a[f];
            if (g === "*") b[f * 3 + 0] = c.x, b[f * 3 + 1] = c.y, b[f * 3 + 2] = c.z;
            else if (g instanceof Array && g.length === 3) c.set(g[0], g[1], g[2]), b[f * 3 + 0] = c.x, b[f * 3 + 1] = c.y, b[f * 3 + 2] = c.z
        }
        return b
    };
    f.parseFloatArrayFromCompressedString = function (a, b, c) {
        var d = [],
            e = b.length,
            g = a.length / b.length,
            o, p, n, s, r;
        for (r = 0; r < e; r++)
            for (s = o = 0; s < g; s++) p = a.charCodeAt(s + r * g), n = s * e + r, o +=
                f.unzip(p), d[n] = (o + c[r]) * b[r];
        return d
    };
    return f
});
define("goo/loaders/handlers/MeshDataHandler", "goo/loaders/handlers/ConfigHandler,goo/renderer/MeshData,goo/animation/SkeletonPose,goo/loaders/JsonUtils,goo/util/PromiseUtil,goo/util/ObjectUtil,goo/util/ArrayUtil".split(","), function (e, c, b, a, d, g, f) {
    function i() {
        e.apply(this, arguments);
        this._objects = {}
    }
    i.prototype = Object.create(e.prototype);
    e._registerClass("mesh", i);
    i.prototype.update = function (a, b) {
        var c = this;
        return this._objects[a] ? d.createDummyPromise(this._objects[a]) : b.binaryRef ? this.getConfig(b.binaryRef).then(function (d) {
            if (!d) throw Error("Binary mesh data was empty");
            return c._createMeshData(b, d).then(function (b) {
                return c._objects[a] = b
            })
        }) : this._createMeshData(b, null).then(function (b) {
            return c._objects[a] = b
        })
    };
    i.prototype.remove = function () {};
    i.prototype._createMeshData = function (a, b) {
        var c;
        a.compression && a.compression.compressed && (c = {
            compressedVertsRange: a.compression.compressedVertsRange || 16383,
            compressedColorsRange: a.compression.compressedColorsRange || 255,
            compressedUnitVectorRange: a.compression.compressedUnitVectorRange || 1023
        });
        var f = this._createMeshDataObject(a);
        this._fillMeshData(f, a, b, c);
        return d.createDummyPromise(f)
    };
    i.prototype._createMeshDataObject = function (a) {
        var b, d, f, e, g;
        f = a.data || a;
        a.type === "SkinnedMesh" ? (g = 4, a = c.SKINMESH) : (g = 0, a = c.MESH);
        e = f.vertexCount;
        if (e === 0) return null;
        d = f.indexLengths != null ? f.indexLengths[0] : f.indices != null ? f.indices.length : 0;
        b = {};
        if (f.vertices && f.vertices.length > 0) b.POSITION = c.createAttribute(3, "Float");
        if (f.normals && f.normals.length > 0) b.NORMAL = c.createAttribute(3, "Float");
        if (f.tangents && f.tangents.length > 0) b.TANGENT = c.createAttribute(4,
            "Float");
        if (f.colors && f.colors.length > 0) b.COLOR = c.createAttribute(4, "Float");
        if (g > 0 && f.weights) b.WEIGHTS = c.createAttribute(4, "Float");
        if (g > 0 && f.joints) b.JOINTIDS = c.createAttribute(4, "Short");
        if (f.textureCoords && f.textureCoords.length > 0)
            for (g = 0; g < f.textureCoords.length; g++) b["TEXCOORD" + g] = c.createAttribute(2, "Float");
        f = new c(b, e, d);
        f.type = a;
        return f
    };
    i.prototype._fillMeshData = function (b, d, e, g) {
        var i = this,
            o = d.data || d,
            p;
        p = b.type === c.SKINMESH ? 4 : 0;
        var n = function (c, n) {
            var o;
            n != null && n.length && (g && typeof n ===
                "string" ? (o = i._getCompressionOptions(c, d, g), a.fillAttributeBufferFromCompressedString(n, b, c, o.scale, o.offset)) : e ? b.getAttributeBuffer(c).set(f.getTypedArray(e, n)) : a.fillAttributeBuffer(n, b, c))
        };
        n(c.POSITION, o.vertices);
        n(c.NORMAL, o.normals);
        n(c.TANGENT, o.tangents);
        n(c.COLOR, o.colors);
        b.type === c.SKINMESH && n(c.WEIGHTS, o.weights);
        if (o.textureCoords != null && o.textureCoords.length > 0)
            for (var s = o.textureCoords, r = 0; r < s.length; r++) {
                var u = s[r];
                n("TEXCOORD" + r, u.UVs || u)
            }
        if (p > 0 && o.joints != null && o.joints.length >
            0)
            if (n = b.getAttributeBuffer(c.JOINTIDS), s = this._getIntBuffer(o.joints, 32767, e, g), b.type === c.SKINMESH) {
                for (var r = [], q = u = 0; q < s.length; q++) {
                    var x = s[q];
                    r[x] === void 0 && (r[x] = u++);
                    n.set([r[x]], q)
                }
                n = [];
                for (x = 0; x < r.length; x++) u = r[x], u !== null && (n[u] = x);
                b.paletteMap = n;
                b.weightsPerVertex = p
            } else
                for (p = 0; 0 < s.capacity(); p++) n.putCast(p, s.get(p));
        o.indices && b.getIndexBuffer().set(this._getIntBuffer(o.indices, o.vertexCount, e, g));
        if (o.indexModes) b.indexModes = o.indexModes.slice(0);
        if (o.indexLengths) b.indexLengths =
            o.indexLengths.slice(0);
        if (o.boundingVolume)
            if (o.boundingVolume.type === "BoundingBox") b.boundingBox = {
                min: o.boundingVolume.min,
                max: o.boundingVolume.max
            };
            else throw Error("Bounding volume was not BoundingBox");
        return b
    };
    i.prototype._getIntBuffer = function (b, c, d, e) {
        return b ? e ? a.getIntBufferFromCompressedString(b, c) : d ? f.getTypedArray(d, b) : a.getIntBuffer(b, c) : null
    };
    i.prototype._getCompressionOptions = function (a, b, d) {
        var f, b = b.data || b;
        a === c.POSITION ? (d = b.vertexOffsets, f = {
            offset: [d.xOffset, d.yOffset, d.zOffset],
            scale: [b.vertexScale, b.vertexScale, b.vertexScale]
        }) : a === c.WEIGHTS ? (d = 1 / d.compressedVertsRange, f = {
            offset: [0],
            scale: [d]
        }) : a === c.NORMAL ? (b = 1 - (d.compressedUnitVectorRange + 1 >> 1), d = 1 / -b, f = {
            offset: [b, b, b],
            scale: [d, d, d]
        }) : a === c.TANGENT ? (b = 1 - (d.compressedUnitVectorRange + 1 >> 1), d = 1 / -b, f = {
            offset: [b, b, b, b],
            scale: [d, d, d, d]
        }) : a === c.COLOR ? (b = 0, d = 1 / (d.compressedColorsRange + 1), f = {
            offset: [b, b, b, b],
            scale: [d, d, d, d]
        }) : a.substr(0, 8) === "TEXCOORD" && (d = parseInt(a.substr(8), 10), d = b.textureCoords[d], f = {
            offset: d.UVOffsets,
            scale: d.UVScales
        });
        return f
    };
    return i
});
define("goo/loaders/handlers/MeshRendererComponentHandler", ["goo/loaders/handlers/ComponentHandler", "goo/entities/components/MeshRendererComponent", "goo/util/rsvp", "goo/util/PromiseUtil", "goo/util/ObjectUtil"], function (e, c, b, a, d) {
    function g() {
        e.apply(this, arguments)
    }
    g.prototype = Object.create(e.prototype);
    e._registerClass("meshRenderer", g);
    g.prototype.constructor = g;
    g.prototype._prepare = function (a) {
        return d.defaults(a, {
            materialRefs: [],
            cullMode: "Dynamic",
            castShadows: !1,
            receiveShadows: !1,
            hidden: !1
        })
    };
    g.prototype._create = function (a) {
        var b = new c;
        a.setComponent(b);
        return b
    };
    g.prototype.update = function (c, g) {
        var h, k = e.prototype.update.call(this, c, g);
        h = g.materialRefs;
        if (!h || h.length === 0) console.log("No material refs in config for", c), h = a.createDummyPromise([]);
        else {
            for (var j = [], l = 0; l < h.length; l++) j.push(this._getMaterial(h[l]));
            h = b.all(j)
        }
        return h.then(function (a) {
            var b;
            if (k.materials && k.materials.length) {
                for (var c, f = 0; f < k.materials.length; f++) {
                    var e = k.materials[f];
                    if (e.name === "gooSelectionIndicator") {
                        c =
                            e;
                        break
                    }
                }
                c && a.push(c)
            }
            k.materials = a;
            for (b in g) a = g[b], b !== "materials" && k.hasOwnProperty(b) && (k[b] = d.clone(a));
            return k
        }).then(null, function (a) {
            return console.error("Error handling materials " + a)
        })
    };
    g.prototype._getMaterial = function (a) {
        var b = this;
        return this.getConfig(a).then(function (c) {
            return b.updateObject(a, c, b.options)
        })
    };
    return g
});
define("goo/loaders/handlers/SceneHandler", ["goo/loaders/handlers/ConfigHandler", "goo/util/rsvp"], function (e, c) {
    function b() {
        e.apply(this, arguments)
    }
    b.prototype = Object.create(e.prototype);
    e._registerClass("scene", b);
    b.prototype._prepare = function () {};
    b.prototype._create = function () {};
    b.prototype.update = function (a, b) {
        var e = this,
            f = [];
        if (b.entityRefs != null && b.entityRefs.length) {
            for (var i = function (a) {
                return f.push(e.getConfig(a).then(function (b) {
                    return e.updateObject(a, b, e.options)
                }))
            }, h = 0; h < b.entityRefs.length; h++) i(b.entityRefs[h]);
            return c.all(f).then(function (a) {
                for (var b = 0; b < a.length; b++) {
                    var c = a[b];
                    (e.options.beforeAdd == null || e.options.beforeAdd.apply == null || e.options.beforeAdd(c)) && c.addToWorld()
                }
            }).then(null, function (a) {
                return console.error("Error updating entities: " + a)
            })
        } else return console.warn("No entity refs in scene " + a), b
    };
    b.prototype.remove = function () {};
    return b
});
define("goo/loaders/handlers/ShaderHandler", "goo/loaders/handlers/ConfigHandler,goo/renderer/Material,goo/renderer/MeshData,goo/renderer/Shader,goo/renderer/shaders/ShaderLib,goo/renderer/shaders/ShaderBuilder,goo/util/rsvp,goo/util/ObjectUtil".split(","), function (e, c, b, a, d, g, f, i) {
    function h() {
        e.apply(this, arguments)
    }
    h.prototype = Object.create(e.prototype);
    e._registerClass("shader", h);
    h.prototype._create = function () {};
    h.prototype.update = function (a, b) {
        var d;
        if (b != null && b.attributes != null && b.uniforms !=
            null) {
            d = {
                attributes: b.attributes,
                uniforms: b.uniforms
            };
            for (var e in d.uniforms) {
                var h = d.uniforms[e];
                if (typeof h === "string" && (h = h.match(/^function\s?\(([^\)]*)\)\s*\{(.*)\}$/), (h != null ? h.length : void 0) === 3)) {
                    var p = h[1].replace(" ", "").split(",");
                    d.uniforms[e] = new Function(p, h[2])
                }
            }
            if (b.processors) {
                d.processors = [];
                for (e = 0; e < b.processors.length; e++)
                    if (h = b.processors[e], g[h]) d.processors.push(g[h].processor);
                    else throw Error("Unknown processor: " + h);
            }
            if (b.defines) d.defines = b.defines
        } else d = this._getDefaultShaderDefinition();
        e = [this.getConfig(b.vshaderRef), this.getConfig(b.fshaderRef)];
        return f.all(e).then(function (f) {
            var e;
            e = f[0];
            f = f[1];
            if (e)
                if (f) return i.extend(d, {
                    attributes: b.attributes || {},
                    uniforms: b.uniforms || {},
                    vshader: e,
                    fshader: f
                }), c.createShader(d, a);
                else console.warn("Fragment shader", b.fshaderRef, "in shader", a, "not found");
                else console.warn("Vertex shader", b.vshaderRef, "in shader", a, "not found")
        })
    };
    h.prototype.remove = function () {};
    h.prototype._getDefaultShaderDefinition = function () {
        return {
            attributes: {
                vertexPosition: b.POSITION,
                vertexNormal: b.NORMAL,
                vertexUV0: b.TEXCOORD0
            },
            uniforms: {
                viewMatrix: a.VIEW_MATRIX,
                projectionMatrix: a.PROJECTION_MATRIX,
                worldMatrix: a.WORLD_MATRIX,
                cameraPosition: a.CAMERA,
                lightPosition: a.LIGHT0,
                diffuseMap: a.DIFFUSE_MAP,
                materialAmbient: a.AMBIENT,
                materialDiffuse: a.DIFFUSE,
                materialSpecular: a.SPECULAR,
                materialSpecularPower: a.SPECULAR_POWER
            }
        }
    };
    return h
});
define("goo/loaders/handlers/SkeletonHandler", "goo/loaders/handlers/ConfigHandler,goo/animation/Joint,goo/animation/Skeleton,goo/animation/SkeletonPose,goo/loaders/JsonUtils,goo/util/PromiseUtil".split(","), function (e, c, b, a, d, g) {
    function f() {
        e.apply(this, arguments)
    }
    f.prototype = Object.create(e.prototype);
    e._registerClass("skeleton", f);
    f.prototype._create = function (f) {
        for (var e = [], g = 0; g < f.joints.length; g++) {
            var j = f.joints[g],
                l = new c(j.name);
            l._index = Math.round(j.index);
            l._parentIndex = Math.round(j.parentIndex);
            l._inverseBindPose.copy((j.inverseBindPose.matrix ? d.parseTransformMatrix : j.inverseBindPose.rotation.length === 4 ? d.parseTransformQuat : j.inverseBindPose.rotation.length === 3 ? d.parseTransformEuler : d.parseTransform)(j.inverseBindPose));
            j.inverseBindPose.matrix || l._inverseBindPose.update();
            e.push(l)
        }
        f = new b(f.name, e);
        f = new a(f);
        f.setToBindPose();
        return f
    };
    f.prototype.update = function (a, b) {
        var c = this._create(b);
        return g.createDummyPromise(c)
    };
    f.prototype.remove = function () {};
    return f
});
define("goo/loaders/handlers/TextureHandler", "goo/loaders/handlers/ConfigHandler,goo/renderer/TextureCreator,goo/renderer/Texture,goo/loaders/dds/DdsLoader,goo/loaders/crunch/CrunchLoader,goo/loaders/tga/TgaLoader,goo/util/rsvp,goo/util/PromiseUtil,goo/renderer/Util,goo/util/ObjectUtil".split(","), function (e, c, b, a, d, g, f, i, h, k) {
    function j() {
        e.apply(this, arguments);
        this._objects = {}
    }
    j.prototype = Object.create(e.prototype);
    e._registerClass("texture", j);
    j.prototype.constructor = j;
    j.loaders = {
        dds: a,
        crn: d,
        tga: g
    };
    j.prototype._prepare = function (a) {
        k.defaults(a, {
            wrapU: "Repeat",
            wrapV: "Repeat",
            magFilter: "Bilinear",
            minFilter: "Trilinear",
            anisotropy: 1,
            offset: [0, 0],
            repeat: [1, 1],
            flipY: !0
        })
    };
    j.prototype._create = function (a) {
        a = this._objects[a] = new b(h.clone(c.DEFAULT_TEXTURE_2D.image));
        a.image.dataReady = !1;
        return a
    };
    j.prototype.update = function (a, b) {
        var d = b.url,
            e = d ? d.split(".").pop().toLowerCase() : void 0,
            g;
        if (e === "mp4") return d = new f.Promise, g = (new c).loadTextureVideo(b.url, !0), i.createDummyPromise(g);
        else if (g =
            this._objects[a] || this._create(a), this._prepare(b), g.wrapS = b.wrapU, g.wrapT = b.wrapV, g.magFilter = b.magFilter, g.minFilter = b.minFilter, g.anisotropy = b.anisotropy, g.offset.set(b.offset), g.repeat.set(b.repeat), g.flipY = b.flipY, g.setNeedsUpdate(), b.url)
            if (b.url !== g.a && b.url !== g.image.src)
                if (e in j.loaders) {
                    var h = new j.loaders[e];
                    g.a = d;
                    d = this.getConfig(d).then(function (a) {
                        if (a && a.preloaded) k.extend(g.image, a.image), g.format = a.format, g.needsUpdate = !0;
                        else if (h.load) h.load(a, g, b.flipY, 0, a.byteLength);
                        else throw Error("Loader for type " +
                            e + " has no load() function");
                        return g
                    }).then(null, function (a) {
                        console.error("Error loading texture: ", a)
                    })
                } else if (e === "jpg" || e === "jpeg" || e === "png" || e === "gif") d = this.getConfig(d).then(function (a) {
            g.setImage(a);
            return g
        }).then(null, function (a) {
            console.error("Error loading texture: ", a)
        });
        else throw Error("Unknown texture type " + e);
        else return i.createDummyPromise(g);
        else return console.log("Texture " + a + " has no url"), i.createDummyPromise(g);
        return this.options && this.options.dontWaitForTextures ? i.createDummyPromise(g) :
            d
    };
    j.prototype.remove = function (a) {
        console.log("Deleting texture " + a);
        return delete this._objects[a]
    };
    return j
});
define("goo/loaders/handlers/TransformComponentHandler", "goo/loaders/handlers/ComponentHandler,goo/entities/components/TransformComponent,goo/math/MathUtils,goo/math/Quaternion,goo/util/rsvp,goo/util/PromiseUtil,goo/util/ObjectUtil".split(","), function (e, c, b, a, d, g, f) {
    function i() {
        e.apply(this, arguments)
    }
    i.prototype = Object.create(e.prototype);
    i.prototype.constructor = i;
    e._registerClass("transform", i);
    i.prototype._prepare = function (a) {
        return f.defaults(a, {
            translation: [0, 0, 0],
            rotation: [0, 0, 0],
            scale: [1,
                1, 1
            ]
        })
    };
    i.prototype._create = function (a) {
        var b = new c;
        a.setComponent(b);
        return b
    };
    i.prototype.update = function (c, d) {
        var f = this,
            i = e.prototype.update.call(this, c, d);
        i.transform.translation.set(d.translation);
        d.rotation.length === 3 ? i.transform.setRotationXYZ(b.radFromDeg(d.rotation[0]), b.radFromDeg(d.rotation[1]), b.radFromDeg(d.rotation[2])) : d.rotation.length === 4 ? (new a(d.rotation)).toRotationMatrix(i.transform.rotation) : i.transform.rotation.set(d.rotation);
        i.transform.scale.set(d.scale);
        d.parentRef != null &&
            this.getConfig(d.parentRef).then(function (a) {
                return f.updateObject(d.parentRef, a, f.options).then(function (a) {
                    if (a != null) {
                        var b = i.parent;
                        if (b == null || b.entity !== a) return a.transformComponent.attachChild(i)
                    } else return console.warn("Could not find parent with ref " + d.parentRef)
                })
            });
        i.setUpdated();
        return g.createDummyPromise(i)
    };
    i.prototype.remove = function (a) {
        a = a.transformComponent;
        a.transform.translation.set(0, 0, 0);
        a.transform.setRotationXYZ(0, 0, 0);
        a.transform.scale.set(1, 1, 1);
        a.setUpdated()
    };
    return i
});
define("goo/loaders/handlers/AnimationComponentHandler", ["goo/loaders/handlers/ComponentHandler", "goo/entities/components/AnimationComponent", "goo/math/MathUtils", "goo/util/rsvp", "goo/util/PromiseUtil"], function (e, c, b, a, d) {
    function g() {
        e.apply(this, arguments)
    }
    g.prototype = Object.create(e.prototype);
    e._registerClass("animation", g);
    g.prototype._prepare = function () {};
    g.prototype._create = function (a) {
        var b = new c;
        a.setComponent(b);
        return b
    };
    g.prototype.update = function (b, c) {
        var g = this,
            k, j = e.prototype.update.call(this,
                b, c),
            l = c.layersRef,
            m = c.poseRef,
            o = [];
        k = m ? this.getConfig(m).then(function (a) {
            g.updateObject(m, a, g.options).then(function (a) {
                return j._skeletonPose = a
            })
        }) : d.createDummyPromise();
        o.push(k);
        l ? k = this._getAnimationLayers(l).then(function (a) {
            return j.layers = a
        }) : (console.warn("No animation tree ref"), k = d.createDummyPromise([]));
        o.push(k);
        return a.all(o).then(function () {
            return j
        })
    };
    g.prototype._getAnimationLayers = function (a) {
        var b = this;
        return this.getConfig(a).then(function (c) {
            return b.updateObject(a, c, b.options)
        })
    };
    return g
});
define("goo/loaders/handlers/AnimationLayersHandler", "goo/loaders/handlers/ConfigHandler,goo/animation/layer/AnimationLayer,goo/animation/layer/LayerLERPBlender,goo/animation/state/SteadyState,goo/animation/blendtree/ClipSource,goo/animation/blendtree/ManagedTransformSource,goo/animation/blendtree/BinaryLERPSource,goo/animation/blendtree/FrozenClipSource,goo/animation/state/FadeTransitionState,goo/animation/state/SyncFadeTransitionState,goo/animation/state/FrozenTransitionState,goo/util/rsvp,goo/util/PromiseUtil,goo/util/ObjectUtil".split(","), function (e,
    c, b, a, d, g, f, i, h, k, j, l, m, o) {
    function p() {
        e.apply(this, arguments)
    }
    p.prototype = Object.create(e);
    e._registerClass("animation", p);
    p.prototype._create = function (a) {
        var a = a.layers,
            b = [];
        b.push(this._parseLayer(a.DEFAULT));
        for (var c in a) {
            var d = a[c];
            c !== "DEFAULT" && b.push(this._parseLayer(d))
        }
        return l.all(b).then(function (a) {
            return a
        })
    };
    p.prototype._parseLayer = function (d) {
        var f = this,
            e = [],
            g = new c(d.name);
        if (d.blendWeight != null) g._layerBlender = new b, g._layerBlender._blendWeight = d.blendWeight;
        var h = function (a) {
            return e.push(f._parseClipSource(i.clipSource).then(function (b) {
                return a._sourceTree =
                    b
            }))
        }, j;
        for (j in d.states) {
            var i = d.states[j],
                k = new a(i.name);
            g._steadyStates[j] = k;
            h(k);
            if (i.transitions != null)
                for (var m in i.transitions)
                    if (k = i.transitions[m], d.states[m] != null || m === "*") k = o.clone(k), g._steadyStates[j]._transitions[m] = k, g._transitionStates[k.type] == null && (g._transitionStates[k.type] = this._getTransitionByType(k.type))
        }
        if (d.transitions != null)
            for (m in d.transitions)
                if (k = d.transitions[m], g._steadyStates[m] != null || m === "*") k = o.clone(k), g._transitions[m] = k, g._transitionStates[k.type] == null &&
                    (g._transitionStates[k.type] = this._getTransitionByType(k.type));
        return l.all(e).then(function () {
            d.defaultState != null && g.setCurrentStateByName(d.defaultState);
            return g
        })
    };
    p.prototype._parseClipSource = function (a) {
        var b = this;
        switch (a.type) {
        case "Clip":
            return this.getConfig(a.clipRef).then(function (c) {
                return b.updateObject(a.clipRef, c, b.options).then(function (b) {
                    b = new d(b, a.filter, a.channels);
                    if (a.loopCount) b._clipInstance._loopCount = a.loopCount;
                    if (a.timeScale) b._clipInstance._timeScale = a.timeScale;
                    return b
                })
            });
        case "Managed":
            var c = new g;
            return a.clipRef != null ? this.getConfig(a.clipRef).then(function (c) {
                return b.updateObject(a.clipRef, c, b.options)
            }).then(function (b) {
                return c.initFromClip(b, a.filter, a.channels)
            }) : m.createDummyPromise(c);
        case "Lerp":
            var e = [this._parseClipSource(a.clipSourceA), this._parseClipSource(a.clipSourceB)];
            return l.all(e).then(function (b) {
                b = new f(b[0], b[1]);
                if (a.blendWeight) b.blendWeight = a.blendWeight;
                return b
            });
        case "Frozen":
            return this._parseClipSource(a.clipSource).then(function (b) {
                return new i(b,
                    a.frozenTime || 0)
            });
        default:
            return console.error("Unable to parse clip source"), m.createDummyPromise()
        }
    };
    p.prototype._getTransitionByType = function (a) {
        switch (a) {
        case "Fade":
            return new h;
        case "SyncFade":
            return new k;
        case "Frozen":
            return new j;
        default:
            return console.log("Defaulting to frozen transition type"), new j
        }
    };
    p.prototype.update = function (a, b) {
        var c = this._create(b);
        return m.createDummyPromise(c)
    };
    return p
});
define("goo/loaders/handlers/AnimationClipHandler", "goo/loaders/handlers/ConfigHandler,goo/animation/clip/AnimationClip,goo/loaders/JsonUtils,goo/animation/clip/JointChannel,goo/animation/clip/TransformChannel,goo/animation/clip/InterpolatedFloatChannel,goo/animation/clip/TriggerChannel,goo/util/PromiseUtil,goo/util/ArrayUtil".split(","), function (e, c, b, a, d, g, f, i, h) {
    function k() {
        e.apply(this, arguments)
    }
    k.prototype = Object.create(e.prototype);
    e._registerClass("clip", k);
    k.prototype.update = function (a,
        b) {
        var c, d = this;
        return b.binaryRef ? this.getConfig(b.binaryRef).then(function (a) {
            if (!a) throw Error("Binary clip data was empty");
            return d._createAnimationClip(b, a)
        }) : (c = this._createAnimationClip(b), i.createDummyPromise(c))
    };
    k.prototype._createAnimationClip = function (e, i) {
        var k = new c(e.name),
            o = e.useCompression || !1,
            p = null;
        o && (p = e.compressedRange || 32767);
        if (e.channels && e.channels.length)
            for (var n = 0; n < e.channels.length; n++) {
                var s, r, u, q, x, t = e.channels[n];
                s = i ? h.getTypedArray(i, t.times) : new Float32Array(b.parseChannelTimes(t,
                    o));
                x = t.blendType;
                var w = t.type;
                if (w === "Joint" || w === "Transform") i ? (r = h.getTypedArray(i, t.rotationSamples), u = h.getTypedArray(i, t.translationSamples), q = h.getTypedArray(i, t.scaleSamples)) : (r = b.parseRotationSamples(t, p, o), u = b.parseTranslationSamples(t, s.length, o), q = b.parseScaleSamples(t, s.length, o));
                if (w === "Joint") s = new a(t.jointName, t.jointIndex, s, r, u, q, x);
                else if (t.type === "Transform") s = new d(t.name, s, r, u, q, x);
                else if (t.type === "FloatLERP") s = new g(t.name, s, b.parseFloatLERPValues(t, o), x);
                else if (t.type ===
                    "Trigger") {
                    if (s = new f(t.name, s, t.keys), t.guarantee) s.guarantee = !0
                } else {
                    console.warn("Unhandled channel type: " + t.type);
                    continue
                }
                k.addChannel(s)
            }
        return k
    };
    return k
});
define("goo/util/Skybox", "goo/shapes/ShapeCreator,goo/shapes/Sphere,goo/renderer/MeshData,goo/renderer/Material,goo/renderer/Shader,goo/entities/Entity,goo/renderer/TextureCreator,goo/entities/components/TransformComponent,goo/entities/components/MeshDataComponent,goo/entities/components/MeshRendererComponent,goo/entities/components/ScriptComponent,goo/math/Transform".split(","), function (e, c, b, a, d, g, f, i, h, k, j, l) {
    function m(b, g, h, j) {
        if (b === m.SPHERE) this.meshData = e.createSphere(48, 48, 1, h || c.TextureModes.Projected),
        g instanceof Array && (g = g[0]), g = (new f).loadTexture2D(g);
        else if (b === m.BOX) this.meshData = e.createBox(1, 1, 1), g = (new f).loadTextureCube(g);
        else throw Error("Unknown geometry type");
        b = a.createMaterial(o[b], "Skybox material");
        b.setTexture(d.DIFFUSE_MAP, g);
        b.cullState.cullFace = "Front";
        b.depthState.enabled = !1;
        b.renderQueue = 1;
        this.materials = [b];
        this.transform = new l;
        this.transform.rotation.fromAngles(-Math.PI / 2, j, 0);
        this.transform.update();
        this.active = !0
    }
    m.SPHERE = "sphere";
    m.BOX = "box";
    var o = {};
    o.box = {
        attributes: {
            vertexPosition: b.POSITION
        },
        uniforms: {
            viewMatrix: d.VIEW_MATRIX,
            projectionMatrix: d.PROJECTION_MATRIX,
            worldMatrix: d.WORLD_MATRIX,
            cameraPosition: d.CAMERA,
            diffuseMap: d.DIFFUSE_MAP
        },
        vshader: "attribute vec3 vertexPosition;\nuniform mat4 viewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 worldMatrix;\nuniform vec3 cameraPosition;\nvarying vec3 eyeVec;\nvoid main(void) {\n\tvec4 worldPos = worldMatrix * vec4(vertexPosition+cameraPosition, 1.0);\n\tgl_Position = projectionMatrix * viewMatrix * worldPos;\n\teyeVec = cameraPosition - worldPos.xyz;\n}",
        fshader: "precision mediump float;\nuniform samplerCube diffuseMap;\nvarying vec3 eyeVec;\nvoid main(void)\n{\n\tvec4 cube = textureCube(diffuseMap, eyeVec);\n\tgl_FragColor = cube;\n}"
    };
    o.sphere = {
        attributes: {
            vertexPosition: b.POSITION,
            vertexUV0: b.TEXCOORD0
        },
        uniforms: {
            viewMatrix: d.VIEW_MATRIX,
            projectionMatrix: d.PROJECTION_MATRIX,
            worldMatrix: d.WORLD_MATRIX,
            cameraPosition: d.CAMERA,
            near: d.NEAR_PLANE,
            diffuseMap: d.DIFFUSE_MAP
        },
        vshader: "attribute vec3 vertexPosition;\nattribute vec2 vertexUV0;\nuniform mat4 viewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 worldMatrix;\nuniform vec3 cameraPosition;\nuniform float near;\nvarying vec2 texCoord0;\nvarying vec3 eyeVec;\nvoid main(void) {\n\ttexCoord0 = vertexUV0;\n\tvec4 worldPos = worldMatrix * vec4(vertexPosition * near * 10.0, 1.0);\n worldPos += vec4(cameraPosition, 0.0);\n\tgl_Position = projectionMatrix * viewMatrix * worldPos;\n\teyeVec = cameraPosition - worldPos.xyz;\n}",
        fshader: "precision mediump float;\nuniform sampler2D diffuseMap;\nvarying vec2 texCoord0;\nvoid main(void)\n{\n\tgl_FragColor = texture2D(diffuseMap, texCoord0);\n}"
    };
    return m
});
define("goo/renderer/pass/Composer", ["goo/renderer/pass/RenderTarget", "goo/renderer/pass/FullscreenPass", "goo/renderer/shaders/ShaderLib"], function (e, c, b) {
    function a(a) {
        this.renderTarget1 = a;
        if (this.renderTarget1 === void 0) this.renderTarget1 = new e(window.innerWidth || 1, window.innerHeight || 1);
        this.renderTarget2 = this.renderTarget1.clone();
        this.writeBuffer = this.renderTarget1;
        this.readBuffer = this.renderTarget2;
        this.passes = [];
        this.copyPass = new c(b.copy)
    }
    a.prototype.swapBuffers = function () {
        var a = this.readBuffer;
        this.readBuffer = this.writeBuffer;
        this.writeBuffer = a
    };
    a.prototype.addPass = function (a) {
        this.passes.push(a)
    };
    a.prototype.render = function (a, b, c, e) {
        this.writeBuffer = this.renderTarget1;
        this.readBuffer = this.renderTarget2;
        var h, k, j = this.passes.length;
        for (k = 0; k < j; k++) h = this.passes[k], h.enabled && (h.render(a, this.writeBuffer, this.readBuffer, b, !1, c, e), h.needsSwap && this.swapBuffers())
    };
    return a
});
define("goo/renderer/pass/RenderPass", ["goo/renderer/Renderer", "goo/math/Vector4"], function (e, c) {
    function b(a, b) {
        this.renderList = a;
        this.filter = b;
        this.clearColor = new c(0, 0, 0, 0);
        this.oldClearColor = new c;
        this.renderToScreen = !1;
        this.overrideMaterial = null;
        this.clear = this.enabled = !0;
        this.needsSwap = !1
    }
    b.prototype.render = function (a, b, c, f, i, h, k) {
        h = h || e.mainCamera;
        k = k || [];
        this.clearColor && (this.oldClearColor.setv(a.clearColor), a.setClearColor(this.clearColor.r, this.clearColor.g, this.clearColor.b, this.clearColor.a));
        b = this.filter ? this.renderList.filter(this.filter) : this.renderList;
        this.renderToScreen ? a.render(b, h, k) : a.render(b, h, k, c, this.clear, this.overrideMaterial);
        this.clearColor && a.setClearColor(this.oldClearColor.r, this.oldClearColor.g, this.oldClearColor.b, this.oldClearColor.a)
    };
    return b
});
define("goo/loaders/handlers/ProjectHandler", "goo/loaders/handlers/ConfigHandler,goo/util/rsvp,goo/util/PromiseUtil,goo/util/Skybox,goo/shapes/Sphere,goo/renderer/Renderer,goo/renderer/pass/Composer,goo/renderer/pass/RenderPass,goo/math/Vector4,goo/renderer/shaders/ShaderLib,goo/renderer/pass/FullscreenPass,goo/renderer/Util,goo/entities/EntityUtils".split(","), function (e, c, b, a, d, g, f, i, h, k, j, l, m) {
    function o() {
        e.apply(this, arguments)
    }
    o.prototype = Object.create(e.prototype);
    e._registerClass("project",
        o);
    o.prototype._prepare = function () {};
    o.prototype._create = function () {};
    o.prototype._addSkybox = function (b, c, f, e) {
        c = new a(c, f, d.TextureModes.Projected, e);
        c = m.createTypicalEntity(b.world, c.meshData, c.materials[0], c.transform);
        c.transformComponent.updateWorldTransform();
        b.world.getSystem("RenderSystem").added(c)
    };
    o.prototype._updateSkybox = function (a) {
        a && this._addSkybox(this.world.gooRunner, a.shape.toLowerCase(), a.texturePaths, a.rotation)
    };
    o.prototype._updateEntities = function (a) {
        var d = this,
            f = [];
        if (a.entityRefs &&
            Array.isArray(a.entityRefs) && a.entityRefs.length > 0) {
            for (var e = function (a) {
                return f.push(d.getConfig(a).then(function (b) {
                    return d.updateObject(a, b, d.options)
                }))
            }, g = 0; g < a.entityRefs.length; g++) e(a.entityRefs[g]);
            return c.all(f).then(function (a) {
                for (var b = 0; b < a.length; b++) {
                    var c = a[b];
                    if (d.options.beforeAdd == null || d.options.beforeAdd.apply == null || d.options.beforeAdd(c)) console.log("Adding " + c.name + " to world"), c.addToWorld()
                }
            }).then(null, function (a) {
                return console.error("Error updating entities: " + a)
            })
        } else return console.warn("No entity refs in project"),
        b.createDummyPromise(a)
    };
    o.prototype._updatePosteffects = function (a) {
        var d = this,
            e = [];
        if (a.posteffectRefs && Array.isArray(a.posteffectRefs) && a.posteffectRefs.length > 0) {
            for (var g = function (a) {
                return e.push(d.getConfig(a).then(function (b) {
                    return d.updateObject(a, b, d.options)
                }))
            }, m = 0; m < a.posteffectRefs.length; m++) g(a.posteffectRefs[m]);
            return c.all(e).then(function (a) {
                var b = new f,
                    c = new i(d.world.getSystem("RenderSystem").renderList);
                c.clearColor = new h(0, 0, 0, 0);
                b.addPass(c);
                for (c = 0; c < a.length; c++) {
                    var e =
                        a[c];
                    console.log("Added posteffect", e);
                    b.addPass(e)
                }
                a = new j(l.clone(k.copy));
                a.renderToScreen = !0;
                b.addPass(a);
                d.world.gooRunner.renderSystem.composers.push(b)
            }).then(null, function (a) {
                return console.error("Error updating posteffects: " + a)
            })
        } else return console.log("No posteffect refs in project"), b.createDummyPromise(a)
    };
    o.prototype.update = function (a, b) {
        this._updateSkybox(b.skybox);
        var d = this._updateEntities(b),
            f = this._updatePosteffects(b);
        return c.all([d, f])
    };
    o.prototype.remove = function () {};
    return o
});
define("goo/loaders/handlers/ScriptComponentHandler", ["goo/loaders/handlers/ComponentHandler", "goo/entities/components/ScriptComponent", "goo/util/rsvp", "goo/util/PromiseUtil"], function (e, c, b, a) {
    function d() {
        e.apply(this, arguments)
    }
    d.prototype = Object.create(e.prototype);
    d.prototype.constructor = d;
    e._registerClass("script", d);
    d.prototype._prepare = function () {};
    d.prototype._create = function (a) {
        var b = new c;
        a.setComponent(b);
        return b
    };
    d.prototype.update = function (c, d) {
        function i(a) {
            return h.getConfig(a).then(function (b) {
                return h.updateObject(a,
                    b)
            })
        }
        var h = this,
            k = [],
            j = e.prototype.update.call(this, c, d);
        if (d.scriptRefs && d.scriptRefs.length)
            for (var l = d.scriptRefs, m = 0; m < l.length; m++) k.push(i(l[m]));
        return k.lenght > 0 ? b.all(k).then(function (a) {
            j.scripts = a[0] ? a : []
        }) : a.createDummyPromise(j)
    };
    return d
});
define("goo/scripts/OrbitCamControlScript", ["goo/math/Vector2", "goo/math/Vector3", "goo/math/MathUtils"], function (e, c, b) {
    function a(a) {
        var a = a || {}, b;
        for (b in d) this[b] = typeof d[b] === "boolean" ? a[b] !== void 0 ? a[b] === !0 : d[b] : isNaN(d[b]) ? d[b] instanceof c ? a[b] ? new c(a[b]) : (new c).set(d[b]) : a[b] || d[b] : !isNaN(a[b]) ? a[b] : d[b];
        this.name = "OrbitCamControlScript";
        this.timeSamples = [0, 0, 0, 0, 0];
        this.xSamples = [0, 0, 0, 0, 0];
        this.ySamples = [0, 0, 0, 0, 0];
        this.sample = 0;
        this.velocity = new e;
        this.targetSpherical = new c(this.spherical);
        this.cartesian = new c;
        this.dirty = !0;
        this.mouseState = {
            buttonDown: !1,
            lastX: NaN,
            lastY: NaN
        };
        this.domElement && this.setupMouseControls()
    }
    var d = {
        domElement: null,
        turnSpeedHorizontal: 0.005,
        turnSpeedVertical: 0.005,
        zoomSpeed: 0.2,
        dragOnly: !0,
        dragButton: -1,
        worldUpVector: new c(0, 1, 0),
        baseDistance: 15,
        minZoomDistance: 1,
        maxZoomDistance: 1E3,
        minAscent: -89.95 * b.DEG_TO_RAD,
        maxAscent: 89.95 * b.DEG_TO_RAD,
        clampAzimuth: !1,
        minAzimuth: 90 * b.DEG_TO_RAD,
        maxAzimuth: 270 * b.DEG_TO_RAD,
        releaseVelocity: !0,
        invertedX: !1,
        invertedY: !1,
        invertedWheel: !0,
        drag: 5,
        maxSampleTimeMS: 200,
        lookAtPoint: new c(0, 0, 0),
        spherical: new c(15, 0, 0),
        interpolationSpeed: 7,
        onRun: null
    };
    a.prototype.updateButtonState = function (a, c) {
        this.domElement !== document && this.domElement.focus();
        if (this.dragOnly && (this.dragButton === -1 || this.dragButton === a))(this.mouseState.buttonDown = c) ? (this.mouseState.lastX = NaN, this.mouseState.lastY = NaN, this.velocity.set(0, 0), this.spherical.y = b.moduloPositive(this.spherical.y, b.TWO_PI), this.targetSpherical.copy(this.spherical)) : this.applyReleaseDrift()
    };
    a.prototype.updateDeltas = function (a, b) {
        var c = 0,
            d = 0;
        !isNaN(this.mouseState.lastX) && !isNaN(this.mouseState.lastY) && (c = -(a - this.mouseState.lastX), d = b - this.mouseState.lastY);
        this.mouseState.lastX = a;
        this.mouseState.lastY = b;
        if (!(this.dragOnly && !this.mouseState.buttonDown || c === 0 && d === 0)) {
            this.timeSamples[this.sample] = Date.now();
            this.xSamples[this.sample] = c;
            this.ySamples[this.sample] = d;
            this.sample++;
            if (this.sample > this.timeSamples.length - 1) this.sample = 0;
            this.velocity.set(0, 0);
            this.move(this.turnSpeedHorizontal *
                c, this.turnSpeedVertical * d)
        }
    };
    a.prototype.move = function (a, c) {
        var d = this.invertedX ? -a : a,
            e = this.invertedY ? -c : c;
        if (this.clampAzimuth) {
            var k = this.targetSpherical,
                d = this.targetSpherical.y - d,
                j = this.minAzimuth,
                l = this.maxAzimuth,
                m = (j + l) / 2 + (l > j ? Math.PI : 0),
                o = b.moduloPositive(d - m, b.TWO_PI),
                p = b.moduloPositive(j - m, b.TWO_PI),
                m = b.moduloPositive(l - m, b.TWO_PI);
            d < 0 && j > 0 ? j -= b.TWO_PI : d > 0 && j < 0 && (j += b.TWO_PI);
            d > b.TWO_PI && l < b.TWO_PI && (l += b.TWO_PI);
            k.y = o < p ? j : o > m ? l : d
        } else this.targetSpherical.y -= d;
        this.targetSpherical.z =
            b.clamp(this.targetSpherical.z + e, this.minAscent, this.maxAscent);
        this.dirty = !0
    };
    a.prototype.applyWheel = function (a) {
        this.zoom(this.zoomSpeed * (this.invertedWheel ? -1 : 1) * Math.max(-1, Math.min(1, a.wheelDelta || -a.detail)))
    };
    a.prototype.zoom = function (a) {
        this.targetSpherical.x = b.clamp(this.targetSpherical.x + a * this.baseDistance, this.minZoomDistance, this.maxZoomDistance);
        this.dirty = !0
    };
    a.prototype.applyReleaseDrift = function () {
        for (var a = Date.now(), b = 0, c = 0, d = !1, e = 0, j = this.timeSamples.length; e < j; e++) a - this.timeSamples[e] <
            this.maxSampleTimeMS && (b += this.xSamples[e], c += this.ySamples[e], d = !0);
        d ? this.velocity.set(b * this.turnSpeedHorizontal / this.timeSamples.length, c * this.turnSpeedVertical / this.timeSamples.length) : this.velocity.set(0, 0)
    };
    a.prototype.setupMouseControls = function () {
        var a = this;
        this.domElement.addEventListener("mousedown", function (b) {
            a.updateButtonState(b.button, !0)
        }, !1);
        document.addEventListener("mouseup", function (b) {
            a.updateButtonState(b.button, !1)
        }, !1);
        document.addEventListener("mousemove", function (b) {
            a.updateDeltas(b.clientX,
                b.clientY)
        }, !1);
        this.domElement.addEventListener("mousewheel", function (b) {
            a.applyWheel(b)
        }, !1);
        this.domElement.addEventListener("DOMMouseScroll", function (b) {
            a.applyWheel(b)
        }, !1);
        this.domElement.addEventListener("dragstart", function (a) {
            a.preventDefault()
        }, !1);
        if (typeof window.Hammer !== "undefined") window.Hammer(this.domElement, {
            transform_always_block: !0,
            transform_min_scale: 1
        }).on("touch drag transform release", function (b) {
            switch (b.type) {
            case "transform":
                b = b.gesture.scale;
                b < 1 ? a.zoom(a.zoomSpeed * 1) : b >
                    1 && a.zoom(a.zoomSpeed * -1);
                break;
            case "touch":
                a.updateButtonState(0, !0);
                break;
            case "release":
                a.updateButtonState(0, !1);
                break;
            case "drag":
                a.updateDeltas(b.gesture.center.pageX, b.gesture.center.pageY)
            }
        });
        this.domElement.oncontextmenu = function () {
            return !1
        }
    };
    a.prototype.updateVelocity = function (a) {
        this.velocity.lengthSquared() > 1.0E-6 ? (this.move(this.velocity.x, this.velocity.y), this.velocity.mul(b.clamp(b.lerp(a, 1, 1 - this.drag), 0, 1)), this.dirty = !0) : this.velocity.set(0, 0, 0)
    };
    a.prototype.run = function (a, c, d) {
        if (d && !this.domElement && d.domElement) this.domElement = d.domElement, this.setupMouseControls();
        if (c = a.transformComponent)
            if (d = c.transform, this.releaseVelocity && this.updateVelocity(a._world.tpf), this.dirty) {
                a = this.interpolationSpeed * a._world.tpf;
                this.spherical.y = b.lerp(a, this.spherical.y, this.targetSpherical.y);
                this.spherical.x = b.lerp(a, this.spherical.x, this.targetSpherical.x);
                this.spherical.z = b.lerp(a, this.spherical.z, this.targetSpherical.z);
                b.sphericalToCartesian(this.spherical.x, this.spherical.y, this.spherical.z,
                    this.cartesian);

                d.translation.set(this.cartesian.add(this.lookAtPoint));
                d.translation.equals(this.lookAtPoint) || d.lookAt(this.lookAtPoint, this.worldUpVector);
                if (this.spherical.distanceSquared(this.targetSpherical) < 1.0E-6) this.dirty = !1, this.spherical.y = b.moduloPositive(this.spherical.y, b.TWO_PI), this.targetSpherical.copy(this.spherical);
                c.setUpdated()
            }
    };
    return a
});
define("goo/scripts/OrbitNPanControlScript", ["goo/scripts/OrbitCamControlScript", "goo/renderer/Renderer", "goo/math/Vector3"], function (e, c, b) {
    function a(a) {
        a = a || {};
        e.call(this, a);
        this.panState = {
            buttonDown: !1,
            lastX: NaN,
            lastY: NaN,
            lastPos: new b
        };
        this.viewportHeight = this.viewportWidth = 0;
        this.altKey = this.shiftKey = !1;
        this.goingToLookAt = (new b).setv(this.lookAtPoint)
    }
    a.prototype = Object.create(e.prototype);
    a.prototype.setupMouseControls = function () {
        var a = this;
        this.domElement.addEventListener("mousedown", function (b) {
            a.shiftKey =
                b.shiftKey;
            a.altKey = b.altKey;
            a.updateButtonState(b.button, !0, b)
        }, !1);
        document.addEventListener("mouseup", function (b) {
            a.updateButtonState(b.button, !1, b)
        }, !1);
        document.addEventListener("mousemove", function (b) {
            a.updateDeltas(b.clientX, b.clientY)
        }, !1);
        this.domElement.addEventListener("mousewheel", function (b) {
            a.applyWheel(b)
        }, !1);
        this.domElement.addEventListener("DOMMouseScroll", function (b) {
            a.applyWheel(b)
        }, !1);
        this.domElement.addEventListener("dragstart", function (a) {
            a.preventDefault()
        }, !1);
        this.domElement.oncontextmenu =
            function () {
                return !1
        }
    };
    a.prototype.updateButtonState = function (a, b) {
        if (a === 2 || a === 0 && this.shiftKey) e.prototype.updateButtonState.call(this, 0, b);
        else if (a === 1 || a === 0 && this.altKey)
            if (this.panState.buttonDown = b) this.panState.lastX = NaN, this.panState.lastY = NaN, this.panState.lastPos.setv(this.lookAtPoint)
    };
    a.prototype.updateDeltas = function (a, g) {
        e.prototype.updateDeltas.call(this, a, g);
        var f = new b,
            i = new b;
        if (isNaN(this.panState.lastX) || isNaN(this.panState.lastY)) this.panState.lastX = a, this.panState.lastY = g;
        if (this.panState.buttonDown) {
            var h = c.mainCamera;
            h.getScreenCoordinates(this.panState.lastPos, 1, 1, i);
            i.x -= (a - this.panState.lastX) / this.viewportWidth;
            i.y += (g - this.panState.lastY) / this.viewportHeight;
            h.getWorldCoordinates(i.x, i.y, 1, 1, i.z, f);
            this.lookAtPoint.setv(f);
            this.goingToLookAt.setv(this.lookAtPoint);
            this.dirty = !0
        }
    };
    a.prototype.run = function (a, b, c) {
        if (!this.goingToLookAt.equals(this.lookAtPoint)) this.lookAtPoint.lerp(this.goingToLookAt, b * 7), this.dirty = !0;
        e.prototype.run.call(this, a, b, c);
        if (c) this.viewportWidth =
            c.viewportWidth, this.viewportHeight = c.viewportHeight
    };
    return a
});
define("goo/scripts/WASDControlScript", ["goo/math/Vector", "goo/math/Vector3"], function (e, c) {
    function b(a) {
        a = a || {};
        this.name = "WASDControlScript";
        this.domElement = a.domElement || null;
        this.walkSpeed = !isNaN(a.walkSpeed) ? a.walkSpeed : 100;
        this.crawlSpeed = !isNaN(a.crawlSpeed) ? a.crawlSpeed : 10;
        this.fwdVector = a.fwdVector || new c(0, 0, -1);
        this.leftVector = a.leftVector || new c(-1, 0, 0);
        this.crawlKey = !isNaN(a.crawlKey) ? a.crawlKey : 16;
        this.forwardKey = !isNaN(a.forwardKey) ? a.forwardKey : 87;
        this.backKey = !isNaN(a.backKey) ? a.backKey :
            83;
        this.strafeLeftKey = !isNaN(a.strafeLeftKey) ? a.strafeLeftKey : 65;
        this.strafeRightKey = !isNaN(a.strafeRightKey) ? a.strafeRightKey : 68;
        this.XZ = a.XZ || !1;
        this.onRun = a.onRun;
        this.moveState = {
            strafeLeft: 0,
            strafeRight: 0,
            forward: 0,
            back: 0,
            crawling: !1
        };
        this.moveVector = new c(0, 0, 0);
        this.calcVector = new c;
        this.domElement && this.setupKeyControls()
    }
    b.prototype.updateMovementVector = function () {
        this.moveVector.x = this.moveState.strafeLeft - this.moveState.strafeRight;
        this.moveVector.z = this.moveState.forward - this.moveState.back
    };
    b.prototype.updateKeys = function (a, b) {
        if (!a.altKey) {
            var c = !1;
            switch (a.keyCode) {
            case this.crawlKey:
                this.moveState.crawling = b;
                break;
            case this.forwardKey:
                this.moveState.forward = b ? 1 : 0;
                c = !0;
                break;
            case this.backKey:
                this.moveState.back = b ? 1 : 0;
                c = !0;
                break;
            case this.strafeLeftKey:
                this.moveState.strafeLeft = b ? 1 : 0;
                c = !0;
                break;
            case this.strafeRightKey:
                this.moveState.strafeRight = b ? 1 : 0, c = !0
            }
            c && this.updateMovementVector()
        }
    };
    b.prototype.setupKeyControls = function () {
        var a = this;
        this.domElement.setAttribute("tabindex", -1);
        this.domElement.addEventListener("keydown", function (b) {
            a.updateKeys(b, !0)
        }, !1);
        this.domElement.addEventListener("keyup", function (b) {
            a.updateKeys(b, !1)
        }, !1)
    };
    b.prototype.run = function (a, b, g) {
        if (g && !this.domElement && g.domElement) this.domElement = g.domElement, this.setupKeyControls();
        b = a.transformComponent;
        g = b.transform;
        e.equals(this.moveVector, c.ZERO) || (this.calcVector.set(this.fwdVector.x * this.moveVector.z + this.leftVector.x * this.moveVector.x, this.fwdVector.y * this.moveVector.z + this.leftVector.y * this.moveVector.x,
            this.fwdVector.z * this.moveVector.z + this.leftVector.z * this.moveVector.x), this.calcVector.normalize(), this.calcVector.mul(a._world.tpf * (this.moveState.crawling ? this.crawlSpeed : this.walkSpeed)), g.rotation.applyPost(this.calcVector), this.XZ && (this.calcVector.data[1] = 0), g.translation.add(this.calcVector), b.setUpdated())
    };
    return b
});
define("goo/scripts/BasicControlScript", ["goo/math/Vector3", "goo/math/Matrix3x3"], function (e, c) {
    function b(a) {
        a = a || {};
        this.domElement = a.domElement === void 0 ? null : a.domElement.domElement || a.domElement;
        this.name = "BasicControlScript";
        this.movementSpeed = 10;
        this.rollSpeed = 2;
        this.movementSpeedMultiplier = 1;
        this.mouseStatus = 0;
        this.moveState = {
            up: 0,
            down: 0,
            left: 0,
            right: 0,
            forward: 0,
            back: 0,
            pitchUp: 0,
            pitchDown: 0,
            yawLeft: 0,
            yawRight: 0,
            rollLeft: 0,
            rollRight: 0
        };
        this.moveVector = new e(0, 0, 0);
        this.rotationVector = new e(0,
            0, 0);
        this.multiplier = new e(1, 1, 1);
        this.rotationMatrix = new c;
        this.tmpVec = new e;
        this.handleEvent = function (a) {
            if (typeof this[a.type] === "function") this[a.type](a)
        };
        this.keydown = function (a) {
            if (!a.altKey) {
                switch (a.keyCode) {
                case 16:
                    this.movementSpeedMultiplier = 0.1;
                    break;
                case 87:
                    this.moveState.forward = 1;
                    break;
                case 83:
                    this.moveState.back = 1;
                    break;
                case 65:
                    this.moveState.left = 1;
                    break;
                case 68:
                    this.moveState.right = 1;
                    break;
                case 82:
                    this.moveState.up = 1;
                    break;
                case 70:
                    this.moveState.down = 1;
                    break;
                case 38:
                    this.moveState.pitchUp =
                        1;
                    break;
                case 40:
                    this.moveState.pitchDown = 1;
                    break;
                case 37:
                    this.moveState.yawLeft = 1;
                    break;
                case 39:
                    this.moveState.yawRight = 1;
                    break;
                case 81:
                    this.moveState.rollLeft = 1;
                    break;
                case 69:
                    this.moveState.rollRight = 1
                }
                this.updateMovementVector();
                this.updateRotationVector()
            }
        };
        this.keyup = function (a) {
            switch (a.keyCode) {
            case 16:
                this.movementSpeedMultiplier = 1;
                break;
            case 87:
                this.moveState.forward = 0;
                break;
            case 83:
                this.moveState.back = 0;
                break;
            case 65:
                this.moveState.left = 0;
                break;
            case 68:
                this.moveState.right = 0;
                break;
            case 82:
                this.moveState.up =
                    0;
                break;
            case 70:
                this.moveState.down = 0;
                break;
            case 38:
                this.moveState.pitchUp = 0;
                break;
            case 40:
                this.moveState.pitchDown = 0;
                break;
            case 37:
                this.moveState.yawLeft = 0;
                break;
            case 39:
                this.moveState.yawRight = 0;
                break;
            case 81:
                this.moveState.rollLeft = 0;
                break;
            case 69:
                this.moveState.rollRight = 0
            }
            this.updateMovementVector();
            this.updateRotationVector()
        };
        this.mousedown = function (a) {
            this.domElement !== document && this.domElement.focus();
            a.preventDefault();
            a = a.touches && a.touches.length === 1 ? a.touches[0] : a;
            this.mouseDownX = a.pageX;
            this.mouseDownY = a.pageY;
            this.mouseStatus = 1;
            document.addEventListener("mousemove", this.mousemove, !1);
            document.addEventListener("mouseup", this.mouseup, !1);
            document.addEventListener("touchmove", this.mousemove, !1);
            document.addEventListener("touchend", this.mouseup, !1)
        }.bind(this);
        this.mousemove = function (a) {
            if (this.mouseStatus > 0) a = a.touches && a.touches.length === 1 ? a.touches[0] : a, this.moveState.yawLeft = a.pageX - this.mouseDownX, this.moveState.pitchDown = a.pageY - this.mouseDownY, this.updateRotationVector(), this.mouseDownX =
                a.pageX, this.mouseDownY = a.pageY
        }.bind(this);
        this.mouseup = function (a) {
            if (this.mouseStatus) a.preventDefault(), this.mouseStatus = 0, this.moveState.yawLeft = this.moveState.pitchDown = 0, this.updateRotationVector(), document.removeEventListener("mousemove", this.mousemove), document.removeEventListener("mouseup", this.mouseup), document.removeEventListener("touchmove", this.mousemove), document.removeEventListener("touchend", this.mouseup)
        }.bind(this);
        this.updateMovementVector = function () {
            var a = this.moveState.forward ||
                this.autoForward && !this.moveState.back ? 1 : 0;
            this.moveVector.x = -this.moveState.left + this.moveState.right;
            this.moveVector.y = -this.moveState.down + this.moveState.up;
            this.moveVector.z = -a + this.moveState.back
        };
        this.updateRotationVector = function () {
            this.rotationVector.x = -this.moveState.pitchDown + this.moveState.pitchUp;
            this.rotationVector.y = -this.moveState.yawRight + this.moveState.yawLeft;
            this.rotationVector.z = -this.moveState.rollRight + this.moveState.rollLeft
        };
        this.getContainerDimensions = function () {
            return this.domElement !==
                document ? {
                    size: [this.domElement.offsetWidth, this.domElement.offsetHeight],
                    offset: [this.domElement.offsetLeft, this.domElement.offsetTop]
            } : {
                size: [window.innerWidth, window.innerHeight],
                offset: [0, 0]
            }
        };
        this.domElement && this.setupMouseControls();
        this.updateMovementVector();
        this.updateRotationVector()
    }
    b.prototype.setupMouseControls = function () {
        this.domElement.setAttribute("tabindex", -1);
        this.domElement.addEventListener("mousedown", this.mousedown, !1);
        this.domElement.addEventListener("touchstart", this.mousedown, !1);
        this.domElement.addEventListener("keydown", this.keydown.bind(this), !1);
        this.domElement.addEventListener("keyup", this.keyup.bind(this), !1)
    };
    b.prototype.externals = function () {
        return [{
            variable: "movementSpeed",
            type: "number"
        }, {
            variable: "rollSpeed",
            type: "number"
        }]
    };
    b.prototype.run = function (a, b, c) {
        if (c && !this.domElement && c.domElement) this.domElement = c.domElement, this.setupMouseControls();
        var b = a.transformComponent,
            c = b.transform,
            f = a._world.tpf,
            a = f * this.movementSpeed * this.movementSpeedMultiplier,
            f = f * this.rollSpeed *
                this.movementSpeedMultiplier;
        if (!this.moveVector.equals(e.ZERO) || !this.rotationVector.equals(e.ZERO) || this.mouseStatus > 0) {
            c.translation.x += this.moveVector.x * a;
            c.translation.y += this.moveVector.y * a;
            c.translation.z += this.moveVector.z * a;
            this.tmpVec.x += -this.rotationVector.x * f * this.multiplier.x;
            this.tmpVec.y += this.rotationVector.y * f * this.multiplier.y;
            this.tmpVec.z += this.rotationVector.z * f * this.multiplier.z;
            c.rotation.fromAngles(this.tmpVec.x, this.tmpVec.y, this.tmpVec.z);
            if (this.mouseStatus > 0) this.moveState.yawLeft =
                0, this.moveState.pitchDown = 0, this.updateRotationVector();
            b.setUpdated()
        }
    };
    return b
});
define("goo/loaders/handlers/ScriptHandler", "goo/loaders/handlers/ConfigHandler,goo/util/rsvp,goo/scripts/OrbitCamControlScript,goo/scripts/OrbitNPanControlScript,goo/scripts/WASDControlScript,goo/scripts/BasicControlScript,goo/util/PromiseUtil".split(","), function (e, c, b, a, d, g, f) {
    function i() {
        e.apply(this, arguments)
    }
    i.scripts = {
        OrbitCamControlScript: b,
        OrbitNPanControlScript: a,
        WASDControlScript: d,
        BasicControlScript: g
    };
    i.prototype = Object.create(e.prototype);
    i.prototype.constructor = i;
    e._registerClass("script",
        i);
    i.prototype._prepare = function () {};
    i.prototype._create = function () {};
    i.prototype.update = function (a, b) {
        var c = b.className,
            d = null;
        i.scripts[c] instanceof Function && (d = new i.scripts[c](b.options));
        return f.createDummyPromise(d)
    };
    return i
});
define("goo/statemachine/FSMComponent", ["goo/entities/components/Component", "goo/entities/Bus"], function (e, c) {
    function b() {
        this.type = "FSMComponent";
        this._bus = new c;
        this._machines = [];
        this.entity = null;
        this.vars = {};
        this.active = !0
    }
    b.prototype = Object.create(e.prototype);
    b.vars = {};
    b.getVariable = function (a) {
        return b.vars[a]
    };
    b.prototype.getVariable = function (a) {
        return this.vars[a] !== void 0 ? this.vars[a] : b.getVariable(a)
    };
    b.applyOnVariable = function (a, c) {
        b.vars[a] = c(b.vars[a])
    };
    b.prototype.applyOnVariable = function (a,
        c) {
        this.vars[a] !== void 0 ? this.vars[a] = c(this.vars[a]) : b.applyOnVariable(a, c)
    };
    b.prototype.defineVariable = function (a, b) {
        this.vars[a] = b
    };
    b.prototype.removeVariable = function (a) {
        delete this.vars[a]
    };
    b.applyToVariable = function (a, c) {
        this.vars[a] ? this.vars[a] = c(this.vars[a]) : b.vars[a] && (b.vars[a] = c(b.vars[a]))
    };
    b.prototype.addMachine = function (a) {
        a._fsm = this;
        this._machines.push(a)
    };
    b.prototype.init = function () {
        for (var a = 0; a < this._machines.length; a++) {
            var b = this._machines[a];
            b.setRefs(this);
            b.reset();
            b.enter()
        }
    };
    b.prototype.update = function () {
        if (this.active)
            for (var a = 0; a < this._machines.length; a++) this._machines[a].update()
    };
    return b
});
define("goo/loaders/handlers/FSMComponentHandler", ["goo/loaders/handlers/ComponentHandler", "goo/statemachine/FSMComponent", "goo/util/rsvp", "goo/util/PromiseUtil"], function (e, c, b, a) {
    function d() {
        e.apply(this, arguments)
    }
    d.prototype = Object.create(e.prototype);
    d.prototype.constructor = d;
    e._registerClass("stateMachine", d);
    d.prototype._prepare = function () {};
    d.prototype._create = function (a) {
        var b = new c;
        a.setComponent(b);
        return b
    };
    d.prototype.update = function (c, d) {
        function i(a) {
            return h.getConfig(a).then(function (b) {
                return h.updateObject(a,
                    b)
            })
        }
        var h = this,
            k = [],
            j = e.prototype.update.call(this, c, d);
        if (d.machineRefs && d.machineRefs.length)
            for (var l = d.machineRefs, m = 0; m < l.length; m++) k.push(i(l[m]));
        return k.length > 0 ? b.all(k).then(function (a) {
            for (var b = 0; b < a.length; b++) j.addMachine(a[b])
        }) : a.createDummyPromise(j)
    };
    return d
});
define("goo/statemachine/State", ["goo/util/ArrayUtil"], function (e) {
    function c(b) {
        this.uuid = b;
        this._fsm = null;
        this._actions = [];
        this._machines = [];
        this._transitions = {};
        this.vars = {};
        this.transitionTarget = null;
        this.proxy = {
            getTpf: function () {
                return this._fsm.entity._world.tpf
            }.bind(this),
            getState: function () {
                return this
            }.bind(this),
            getFsm: function () {
                return this._fsm
            }.bind(this),
            getOwnerEntity: function () {
                return this._fsm.entity
            }.bind(this),
            send: function (a) {
                typeof a === "string" && this._transitions[a] && this.requestTransition(this._transitions[a])
            }.bind(this),
            addListener: function (a, b) {
                this._fsm._bus.addListener(a, b)
            }.bind(this),
            removeListener: function (a, b) {
                this._fsm._bus.removeListener(a, b)
            }.bind(this),
            defineVariable: function (a, b) {
                this.vars[a] = b
            }.bind(this),
            removeVariable: function (a) {
                delete this.vars[a]
            }.bind(this),
            getVariable: function (a) {
                return this.vars[a] !== void 0 ? this.vars[a] : this._fsm.getVariable(a)
            }.bind(this),
            applyOnVariable: function (a, b) {
                this.vars[a] !== void 0 ? this.vars[a] = b(this.vars[a]) : this._fsm.applyOnVariable(a, b)
            }.bind(this)
        }
    }
    c.prototype.setRefs =
        function (b) {
            this._fsm = b;
            for (var a = 0; a < this._machines.length; a++) this._machines[a].setRefs(b)
    };
    c.prototype.requestTransition = function (b) {
        this.transitionTarget = b
    };
    c.prototype.setTransition = function (b, a) {
        this._transitions[b] = a
    };
    c.prototype.clearTransition = function (b) {
        delete this._transitions[b]
    };
    c.prototype.update = function () {
        for (var b = 0; b < this._actions.length; b++)
            if (this._actions[b].update(this.proxy), this.transitionTarget) return b = this.transitionTarget, this.transitionTarget = null, b;
        for (var a, b = 0; b < this._machines.length; b++)
            if (a =
                this._machines[b].update()) return a
    };
    c.prototype.reset = function () {
        for (var b = 0; b < this._machines.length; b++) this._machines[b].reset()
    };
    c.prototype.kill = function () {
        for (var b = 0; b < this._machines.length; b++) this._machines[b].kill();
        for (b = 0; b < this._actions.length; b++) this._actions[b].exit(this.proxy)
    };
    c.prototype.enter = function () {
        for (var b = 0; b < this._actions.length; b++) this._actions[b].enter(this.proxy);
        for (b = 0; b < this._machines.length; b++) this._machines[b].enter()
    };
    c.prototype.getAction = function (b) {
        if (this._actions)
            for (var a =
                0; a < this._actions.length; a++) {
                var c = this._actions[a];
                if (b !== void 0 && c.id === b) return c
            }
    };
    c.prototype.addAction = function (b) {
        if (!this._actions[b.id]) {
            if (b.onCreate) b.onCreate(this.proxy);
            this._actions.push(b)
        }
    };
    c.prototype.removeAction = function (b) {
        if (b.onDestroy) b.onDestroy(this.proxy);
        e.remove(this._actions, b)
    };
    c.prototype.addMachine = function (b) {
        b._fsm = this._fsm;
        this._machines.push(b)
    };
    return c
});
define("goo/statemachine/Machine", [], function () {
    function e(c) {
        this.name = c;
        this._states = this._fsm = null;
        this.initialState = "entry";
        this.currentState = null
    }
    e.prototype.setRefs = function (c) {
        this._fsm = c;
        for (var b = Object.keys(this._states), a = 0; a < b.length; a++) this._states[b[a]].setRefs(c)
    };
    e.prototype.update = function () {
        var c = this.currentState.update();
        c && this.contains(c) && (this.currentState.kill(), this.setState(this._states[c]));
        return c
    };
    e.prototype.contains = function (c) {
        return !!this._states[c]
    };
    e.prototype.setState =
        function (c) {
            this.currentState = c;
            this.currentState.reset();
            this.currentState.enter()
    };
    e.prototype.reset = function () {
        this.currentState = this._states[this.initialState];
        this.currentState.reset()
    };
    e.prototype.kill = function () {
        this.currentState.kill()
    };
    e.prototype.enter = function () {
        this.currentState.enter()
    };
    e.prototype.addState = function (c) {
        if (!this._states) this._states = {}, this.initialState = c.uuid;
        c._fsm = this._fsm;
        this._states[c.uuid] = c
    };
    e.prototype.setInitialState = function (c) {
        this.initialState = c
    };
    return e
});
define("goo/statemachine/actions/Action", [], function () {
    function e(c, b) {
        this.id = c;
        this.configure(b || {})
    }
    e.prototype._setup = function () {};
    e.prototype._run = function () {};
    e.prototype.configure = function () {};
    e.prototype.enter = function (c) {
        this._setup(c);
        this.everyFrame || this._run(c)
    };
    e.prototype.update = function (c) {
        this.everyFrame && this._run(c)
    };
    e.prototype.exit = function () {};
    return e
});
define("goo/statemachine/actions/LogVariableAction", ["goo/statemachine/actions/Action"], function (e) {
    function c(b, a) {
        e.apply(this, arguments);
        this.currentTime = 0
    }
    c.prototype = Object.create(e.prototype);
    c.prototype.configure = function (b) {
        this.everyFrame = !! b.everyFrame;
        this.message = b.message || ""
    };
    c.external = {
        parameters: [{
            name: "Message",
            key: "message",
            type: "string",
            description: "message to print",
            "default": "hello"
        }, {
            name: "On every frame",
            key: "everyFrame",
            type: "boolean",
            description: "Do this action every frame",
            "default": !1
        }],
        transitions: []
    };
    c.prototype._run = function () {
        console.log(this.message)
    };
    return c
});
define("goo/statemachine/FSMUtil", [], function () {
    function e() {}
    e.getKey = function (b) {
        return e.keys[b] ? e.keys[b] : b.charCodeAt(0)
    };
    e.keys = {
        Backspace: 8,
        Tab: 9,
        Enter: 13,
        Shift: 16,
        Ctrl: 17,
        Alt: 18,
        Pause: 19,
        Capslock: 20,
        Esc: 27,
        Space: 32,
        Pageup: 33,
        Pagedown: 34,
        End: 35,
        Home: 36,
        Leftarrow: 37,
        Uparrow: 38,
        Rightarrow: 39,
        Downarrow: 40,
        Insert: 45,
        Delete: 46,
        0: 48,
        1: 49,
        2: 50,
        3: 51,
        4: 52,
        5: 53,
        6: 54,
        7: 55,
        8: 56,
        9: 57,
        a: 65,
        b: 66,
        c: 67,
        d: 68,
        e: 69,
        f: 70,
        g: 71,
        h: 72,
        i: 73,
        j: 74,
        k: 75,
        l: 76,
        m: 77,
        n: 78,
        o: 79,
        p: 80,
        q: 81,
        r: 82,
        s: 83,
        t: 84,
        u: 85,
        v: 86,
        w: 87,
        x: 88,
        y: 89,
        z: 90,
        A: 65,
        B: 66,
        C: 67,
        D: 68,
        E: 69,
        F: 70,
        G: 71,
        H: 72,
        I: 73,
        J: 74,
        K: 75,
        L: 76,
        M: 77,
        N: 78,
        O: 79,
        P: 80,
        Q: 81,
        R: 82,
        S: 83,
        T: 84,
        U: 85,
        V: 86,
        W: 87,
        X: 88,
        Y: 89,
        Z: 90,
        "0numpad": 96,
        "1numpad": 97,
        "2numpad": 98,
        "3numpad": 99,
        "4numpad": 100,
        "5numpad": 101,
        "6numpad": 102,
        "7numpad": 103,
        "8numpad": 104,
        "9numpad": 105,
        Multiply: 106,
        Plus: 107,
        Minus: 109,
        Dot: 110,
        Slash1: 111,
        F1: 112,
        F2: 113,
        F3: 114,
        F4: 115,
        F5: 116,
        F6: 117,
        F7: 118,
        F8: 119,
        F9: 120,
        F10: 121,
        F11: 122,
        F12: 123,
        Equals: 187,
        Comma: 188,
        Slash: 191,
        Backslash: 220
    };
    e.keyInverse = [];
    e.keyInverse = function (b) {
        for (var a = [], c = Object.keys(b), e = 0; e < c.length; e++) a[b[c[e]]] = c[e];
        return a
    }(e.keys);
    e.keyForCode = function (b) {
        return e.keyInverse[b] ? e.keyInverse[b] : "FSMUtil.keyForCode: key not found for code " + b
    };
    var c = function () {
        return Math.floor((1 + Math.random()) * 65536).toString(16).substring(1)
    };
    e.guid = function () {
        return c() + c() + "-" + c() + "-" + c() + "-" + c() + "-" + c() + c() + c()
    };
    e.getValue = function (b, a) {
        return typeof b === "number" ? b : a.getVariable(b)
    };
    return e
});
define("goo/statemachine/actions/SetVariableAction", ["goo/statemachine/actions/Action", "goo/statemachine/FSMUtil"], function (e, c) {
    function b(a) {
        e.apply(this, arguments)
    }
    b.prototype = Object.create(e.prototype);
    b.prototype.configure = function (a) {
        this.everyFrame = a.everyFrame !== !1;
        this.variable = a.variable || null;
        this.amount = a.amount || 0
    };
    b.external = {
        parameters: [{
            name: "Variable",
            key: "variable",
            type: "identifier"
        }, {
            name: "Amount",
            key: "amount",
            type: "float"
        }, {
            name: "On every frame",
            key: "everyFrame",
            type: "boolean",
            description: "Do this action every frame",
            "default": !1
        }],
        transitions: []
    };
    b.prototype._run = function (a) {
        this.variable && a.applyOnVariable(this.variable, function () {
            return c.getValue(this.amount, a)
        }.bind(this))
    };
    return b
});
define("goo/statemachine/actions/AddPositionAction", ["goo/statemachine/actions/Action", "goo/statemachine/FSMUtil"], function (e, c) {
    function b(a, b) {
        e.apply(this, arguments)
    }
    b.prototype = Object.create(e.prototype);
    b.prototype.configure = function (a) {
        this.everyFrame = a.everyFrame !== !1;
        this.entity = a.entity || null;
        this.amountX = a.amountX || 0;
        this.amountY = a.amountY || 0;
        this.amountZ = a.amountZ || 0;
        this.speed = a.speed || 1
    };
    b.external = {
        parameters: [{
            name: "Entity",
            key: "entity",
            type: "entity",
            description: "Entity to move"
        }, {
            name: "Amount X",
            key: "amountX",
            type: "float",
            description: "Amount to move on the X axis",
            "default": 0
        }, {
            name: "Amount Y",
            key: "amountY",
            type: "float",
            description: "Amount to move on the Y axis",
            "default": 0
        }, {
            name: "Amount Z",
            key: "amountZ",
            type: "float",
            description: "Amount to move on the Z axis",
            "default": 0
        }, {
            name: "Speed",
            key: "speed",
            type: "float",
            description: "Speed to multiply",
            "default": 1
        }, {
            name: "On every frame",
            key: "everyFrame",
            type: "boolean",
            description: "Do this action every frame",
            "default": !0
        }],
        transitions: []
    };
    b.prototype._run =
        function (a) {
            if (this.entity !== null) {
                var b = a.getTpf(),
                    e = c.getValue(this.amountX, a),
                    f = c.getValue(this.amountY, a),
                    a = c.getValue(this.amountZ, a);
                this.entity.transformComponent.transform.translation.add_d(e * this.speed * b, f * this.speed * b, a * this.speed * b);
                this.entity.transformComponent.setUpdated()
            }
    };
    return b
});
define("goo/statemachine/actions/MouseClickAction", ["goo/statemachine/actions/Action"], function (e) {
    function c(b) {
        e.apply(this, arguments);
        this.currentTime = 0;
        this.updated = !1;
        this.eventListener = function () {
            this.updated = !0
        }.bind(this)
    }
    c.prototype = Object.create(e.prototype);
    c.prototype.configure = function (b) {
        this.everyFrame = !0;
        this.eventToEmit = {
            channel: b.transitions.click
        };
        this.positionVariable = b.positionVariable || null
    };
    c.external = {
        parameters: [{
            name: "Position variable",
            key: "positionVariable",
            type: "identifier"
        }],
        transitions: [{
            name: "click",
            description: "Fired on click"
        }]
    };
    c.prototype._setup = function () {
        document.addEventListener("click", this.eventListener)
    };
    c.prototype._run = function (b) {
        if (this.updated) this.updated = !1, this.eventToEmit && b.send(this.eventToEmit.channel, this.eventToEmit.data)
    };
    c.prototype.exit = function () {
        document.removeEventListener("click", this.eventListener)
    };
    return c
});
define("goo/statemachine/actions/SetPositionAction", ["goo/statemachine/actions/Action"], function (e) {
    function c(b) {
        e.apply(this, arguments)
    }
    c.prototype = Object.create(e.prototype);
    c.prototype.configure = function (b) {
        this.everyFrame = !! b.everyFrame;
        this.entity = b.entity || null;
        this.amountX = b.amountX || 0;
        this.amountY = b.amountY || 0;
        this.amountZ = b.amountZ || 0
    };
    c.external = {
        parameters: [{
            name: "Entity",
            key: "entity",
            type: "entity",
            description: "Entity to move"
        }, {
            name: "Amount X",
            key: "amountX",
            type: "float",
            description: "Position on the X axis",
            "default": 0
        }, {
            name: "Amount Y",
            key: "amountY",
            type: "float",
            description: "Position on the Y axis",
            "default": 0
        }, {
            name: "Amount Z",
            key: "amountZ",
            type: "float",
            description: "Position on the Z axis",
            "default": 0
        }, {
            name: "On every frame",
            key: "everyFrame",
            type: "boolean",
            description: "Do this action every frame",
            "default": !0
        }],
        transitions: []
    };
    c.prototype._run = function (b) {
        this.entity !== null && (this.entity.transformComponent.transform.translation.setd(FSMUtil.getValue(this.amountX, b), FSMUtil.getValue(this.amountY, b),
            FSMUtil.getValue(this.amountZ, b)), this.entity.transformComponent.setUpdated())
    };
    return c
});
define("goo/statemachine/actions/AddVariableAction", ["goo/statemachine/actions/Action", "goo/statemachine/FSMUtil"], function (e, c) {
    function b(a) {
        e.apply(this, arguments)
    }
    b.prototype = Object.create(e.prototype);
    b.prototype.configure = function (a) {
        this.everyFrame = !! a.everyFrame;
        this.variable = a.variable || null;
        this.amount = a.amount || 1
    };
    b.external = {
        parameters: [{
            name: "Variable",
            key: "variable",
            type: "identifier"
        }, {
            name: "Amount",
            key: "amount",
            type: "float"
        }, {
            name: "On every frame",
            key: "everyFrame",
            type: "boolean",
            description: "Do this action every frame",
            "default": !1
        }],
        transitions: []
    };
    b.prototype._run = function (a) {
        a.applyToVariable(this.variable, function (b) {
            return b + c.getValue(this.amount, a)
        }.bind(this))
    };
    return b
});
define("goo/statemachine/actions/SetRotationAction", ["goo/statemachine/actions/Action"], function (e) {
    function c(b) {
        e.apply(this, arguments)
    }
    c.prototype = Object.create(e.prototype);
    c.prototype.configure = function (b) {
        this.everyFrame = !! b.everyFrame;
        this.entity = b.entity || null;
        this.amountX = b.amountX || 0;
        this.amountY = b.amountY || 0;
        this.amountZ = b.amountZ || 0
    };
    c.external = {
        parameters: [{
            name: "Entity",
            key: "entity",
            type: "entity",
            description: "Entity to move"
        }, {
            name: "Amount X",
            key: "amountX",
            type: "float",
            description: "Amount to rotate on the X axis",
            "default": 0
        }, {
            name: "Amount Y",
            key: "amountY",
            type: "float",
            description: "Amount to rotate on the Y axis",
            "default": 0
        }, {
            name: "Amount Z",
            key: "amountZ",
            type: "float",
            description: "Amount to rotate on the Z axis",
            "default": 0
        }, {
            name: "On every frame",
            key: "everyFrame",
            type: "boolean",
            description: "Do this action every frame",
            "default": !0
        }],
        transitions: []
    };
    c.prototype._run = function (b) {
        this.entity !== null && (this.entity.transformComponent.transform.setRotationXYZ(FSMUtil.getValue(this.amountX, b), FSMUtil.getValue(this.amountY,
            b), FSMUtil.getValue(this.amountZ, b)), this.entity.transformComponent.setUpdated())
    };
    return c
});
define("goo/statemachine/actions/MultiplyVariableAction", ["goo/statemachine/actions/Action", "goo/statemachine/FSMUtil"], function (e, c) {
    function b(a) {
        e.apply(this, arguments)
    }
    b.prototype = Object.create(e.prototype);
    b.prototype.configure = function (a) {
        this.everyFrame = !! a.everyFrame;
        this.variable = a.variable || null;
        this.amount = a.amount || 1
    };
    b.external = {
        parameters: [{
            name: "Variable",
            key: "variable",
            type: "identifier"
        }, {
            name: "Amount",
            key: "amount",
            type: "float"
        }, {
            name: "On every frame",
            key: "everyFrame",
            type: "boolean",
            description: "Do this action every frame",
            "default": !1
        }],
        transitions: []
    };
    b.prototype._run = function (a) {
        a.applyOnVariable(this.variable, function (b) {
            return b * c.getValue(this.amount, a)
        }.bind(this))
    };
    return b
});
define("goo/statemachine/actions/NumberCompareAction", ["goo/statemachine/actions/Action", "goo/statemachine/FSMUtil"], function (e, c) {
    function b(a) {
        e.apply(this, arguments)
    }
    b.prototype = Object.create(e.prototype);
    b.prototype.configure = function (a) {
        this.everyFrame = a.everyFrame !== !1;
        this.leftHand = a.leftHand || 0;
        this.rightHand = a.rightHand || 0;
        this.tolerance = a.tolerance || 1.0E-4;
        this.lessThanEvent = {
            channel: a.transitions.less
        };
        this.equalEvent = {
            channel: a.transitions.equal
        };
        this.greaterThanEvent = {
            channel: a.transitions.greater
        }
    };
    b.external = {
        parameters: [{
            name: "Left hand value",
            key: "leftHand",
            type: "float"
        }, {
            name: "Right hand value",
            key: "rightHand",
            type: "float"
        }, {
            name: "Tolerance",
            key: "tolerance",
            type: "float",
            "default": 1.0E-4
        }, {
            name: "On every frame",
            key: "everyFrame",
            type: "boolean",
            description: "Do this action every frame",
            "default": !0
        }],
        transitions: [{
            name: "less",
            description: "Event fired if left hand argument is smaller than right hand argument"
        }, {
            name: "equal",
            description: "Event fired if both sides are approximately equal"
        }, {
            name: "greater",
            description: "Event fired if left hand argument is greater than right hand argument"
        }]
    };
    b.prototype._run = function (a) {
        var b = c.getValue(this.leftHand, a),
            b = c.getValue(this.rightHand, a) - b;
        Math.abs(b) <= this.tolerance ? this.equalEvent.channel && a.send(this.equalEvent.channel) : b > 0 ? this.lessThanEvent.channel && a.send(this.lessThanEvent.channel) : this.greaterThanEvent.channel && a.send(this.greaterThanEvent.channel)
    };
    return b
});
define("goo/statemachine/actions/GetPositionAction", ["goo/statemachine/actions/Action"], function (e) {
    function c(b) {
        e.apply(this, arguments)
    }
    c.prototype = Object.create(e.prototype);
    c.prototype.configure = function (b) {
        this.everyFrame = b.everyFrame !== !1;
        this.entity = b.entity || null;
        this.variableX = b.variableX || null;
        this.variableY = b.variableY || null;
        this.variableZ = b.variableZ || null
    };
    c.external = {
        parameters: [{
            name: "VariableX",
            key: "variableX",
            type: "identifier"
        }, {
            name: "VariableY",
            key: "variableY",
            type: "identifier"
        }, {
            name: "VariableZ",
            key: "variableZ",
            type: "identifier"
        }, {
            name: "On every frame",
            key: "everyFrame",
            type: "boolean",
            description: "Do this action every frame",
            "default": !0
        }],
        transitions: []
    };
    c.prototype._run = function (b) {
        var a = this.entity.transformComponent.transform.translation;
        this.entity !== null && (this.variableX && b.applyOnVariable(this.variableX, function () {
            return a.data[0]
        }), this.variableY && b.applyOnVariable(this.variableY, function () {
            return a.data[1]
        }), this.variableZ && b.applyOnVariable(this.variableZ, function () {
            return a.data[2]
        }))
    };
    return c
});
define("goo/statemachine/actions/SetAnimationAction", ["goo/statemachine/actions/Action"], function (e) {
    function c(b) {
        b = b || {};
        this.everyFrame = b.everyFrame || !1;
        this.entity = b.entity || null;
        this.animation = b.animation || null
    }
    c.prototype = Object.create(e.prototype);
    c.external = [{
        name: "Entity",
        key: "entity",
        type: "entity"
    }, {
        name: "Animation",
        key: "animation",
        type: "string"
    }];
    c.prototype._run = function () {
        this.entity !== null && this.animation !== null && this.entity.animationComponent && this.entity.animationComponent.animationManager.getBaseAnimationLayer().doTransition(this.animation)
    };
    return c
});
define("goo/statemachine/actions/KeyDownAction", ["goo/statemachine/actions/Action", "goo/statemachine/FSMUtil"], function (e, c) {
    function b(a, b) {
        e.apply(this, arguments);
        this.updated = !1;
        this.eventListener = function (a) {
            if (a.which === this.key) this.updated = !0
        }.bind(this)
    }
    b.prototype = Object.create(e.prototype);
    b.prototype.configure = function (a) {
        this.everyFrame = !0;
        this.eventToEmit = {
            channel: a.transitions.keydown
        };
        var b = a.key || "a";
        this.key = typeof b === "number" ? b : c.getKey(b);
        this.keyVariable = a.keyVariable
    };
    b.external = {
        parameters: [{
            name: "Key",
            key: "key",
            type: "key",
            description: "Key to listen for"
        }, {
            name: "Key variable",
            key: "keyVariable",
            type: "identifier",
            description: "Variable to store the key in"
        }],
        transitions: [{
            name: "keydown",
            description: "Fired on key down"
        }]
    };
    b.prototype._setup = function () {
        document.addEventListener("keydown", this.eventListener)
    };
    b.prototype._run = function (a) {
        if (this.updated) this.updated = !1, this.eventToEmit && a.send(this.eventToEmit.channel, this.eventToEmit.data)
    };
    b.prototype.exit = function () {
        document.removeEventListener("keydown",
            this.eventListener)
    };
    return b
});
define("goo/statemachine/actions/SetClearColorAction", ["goo/statemachine/actions/Action", "goo/statemachine/FSMUtil"], function (e, c) {
    function b(a) {
        e.apply(this, arguments)
    }
    b.prototype = Object.create(e.prototype);
    b.prototype.configure = function (a) {
        this.everyFrame = a.everyFrame !== !1;
        this.color = a.color || [0, 0.05, 0.1, 1]
    };
    b.external = {
        parameters: [{
            name: "Color",
            key: "color",
            type: "color"
        }, {
            name: "On every frame",
            key: "everyFrame",
            type: "boolean",
            description: "Do this action every frame",
            "default": !1
        }],
        transitions: []
    };
    b.prototype.onCreate = function (a) {
        console.log("Setting clear color to " + JSON.stringify(this.color));
        a.getEngine().renderer.setClearColor(c.getValue(this.this.color[0], a), c.getValue(this.this.color[1], a), c.getValue(this.this.color[2], a), c.getValue(this.this.color[3], a))
    };
    return b
});
define("goo/statemachine/actions/KeyUpAction", ["goo/statemachine/actions/Action", "goo/statemachine/FSMUtil"], function (e, c) {
    function b(a, b) {
        e.apply(this, arguments);
        this.updated = !1;
        this.eventListener = function (a) {
            if (a.which === this.key) this.updated = !0
        }.bind(this)
    }
    b.prototype = Object.create(e.prototype);
    b.prototype.configure = function (a) {
        this.everyFrame = !0;
        this.eventToEmit = {
            channel: a.transitions.keyup
        };
        var b = a.key || "a";
        this.key = typeof b === "number" ? b : c.keys[b];
        this.keyVariable = a.keyVariable
    };
    b.external = {
        parameters: [{
            name: "Key",
            key: "key",
            type: "key",
            description: "Key to listen for"
        }, {
            name: "Key variable",
            key: "keyVariable",
            type: "identifier",
            description: "Variable to store the key in"
        }],
        transitions: [{
            name: "keydown",
            description: "Fired on key up"
        }]
    };
    b.prototype._setup = function () {
        document.addEventListener("keyup", this.eventListener)
    };
    b.prototype._run = function (a) {
        if (this.updated) this.updated = !1, this.eventToEmit && a.send(this.eventToEmit.channel, this.eventToEmit.data)
    };
    b.prototype.exit = function () {
        document.removeEventListener("keyup",
            this.eventListener)
    };
    return b
});
define("goo/statemachine/actions/SetLightRangeAction", ["goo/statemachine/actions/Action"], function (e) {
    function c(b, a) {
        e.apply(this, arguments)
    }
    c.prototype = Object.create(e.prototype);
    c.prototype.configure = function (b) {
        this.everyFrame = !! b.everyFrame;
        this.entity = b.entity || null;
        this.range = b.range || 100
    };
    c.external = {
        parameters: [{
            name: "Entity",
            key: "entity",
            type: "entity",
            description: "Light entity"
        }, {
            name: "Range",
            key: "range",
            type: "real",
            description: "Light range",
            "default": 100,
            min: 0
        }, {
            name: "On every frame",
            key: "everyFrame",
            type: "boolean",
            description: "Do this action every frame",
            "default": !0
        }],
        transitions: []
    };
    c.prototype._run = function () {
        if (this.entity && this.entity.lightComponent && this.entity.lightComponent.light) this.entity.lightComponent.light.range = this.range
    };
    return c
});
define("goo/statemachine/actions/Actions", "goo/util/StringUtil,goo/util/ObjectUtil,goo/statemachine/actions/LogVariableAction,goo/statemachine/actions/SetVariableAction,goo/statemachine/actions/AddPositionAction,goo/statemachine/actions/MouseClickAction,goo/statemachine/actions/SetPositionAction,goo/statemachine/actions/AddVariableAction,goo/statemachine/actions/SetRotationAction,goo/statemachine/actions/MultiplyVariableAction,goo/statemachine/actions/NumberCompareAction,goo/statemachine/actions/GetPositionAction,goo/statemachine/actions/SetAnimationAction,goo/statemachine/actions/KeyDownAction,goo/statemachine/actions/SetClearColorAction,goo/statemachine/actions/KeyUpAction,goo/statemachine/actions/SetLightRangeAction".split(","), function (e,
    c) {
    var b = {}, a = {
            register: function (a, c) {
                b[a] = c
            },
            actionForType: function (a) {
                return b[a]
            },
            allActions: function () {
                for (var a = {}, c = Object.keys(b), f = 0; f < c.length; f++) {
                    var e = c[f];
                    a[e] = b[e]
                }
                return a
            },
            menuItems: function () {
                for (var a = c.keys(b).sort(), g = {}, f = 0; f < a.length; f++) {
                    var i = a[f];
                    g[e.uncapitalize(i)] = {
                        name: i
                    }
                }
                return g
            }
        };
    (function (b) {
        for (var c = 2; c < b.length; c++) {
            var f = b[c],
                e = f.toString(),
                e = e.substring(9, e.indexOf("("));
            a.register(e, f)
        }
    })(arguments);
    return a
});
define("goo/loaders/handlers/MachineHandler", "goo/loaders/handlers/ConfigHandler,goo/renderer/MeshData,goo/animation/SkeletonPose,goo/loaders/JsonUtils,goo/util/PromiseUtil,goo/statemachine/State,goo/statemachine/Machine,goo/statemachine/actions/Actions,goo/util/rsvp".split(","), function (e, c, b, a, d, g, f, i, h) {
    function k() {
        e.apply(this, arguments);
        this._objects = {}
    }
    k.prototype = Object.create(e.prototype);
    e._registerClass("machine", k);
    k.prototype._updateActions = function (a, b) {
        for (var c = 0; c < b.actions.length; c++) {
            var d =
                b.actions[c],
                f = a.getAction(d.id);
            f === void 0 ? (f = i.actionForType(d.type), f instanceof Function && (f = new f(d.id, d.options), a.addAction(f))) : f.configure(d.options)
        }
    };
    k.prototype._updateTransitions = function (a, b) {
        for (var c = Object.keys(b.transitions), d = 0; d < c.length; d++) {
            var f = c[d];
            a.setTransition(f, b.transitions[f])
        }
    };
    k.prototype._updateState = function (a, b) {
        function c(a) {
            return e.getConfig(a).then(function (b) {
                return e.updateObject(a, b)
            })
        }
        var f = a._states ? a._states[b.id] : void 0;
        f === void 0 && (f = new g(b.id), a.addState(f));
        f.name = b.name;
        this._updateActions(f, b);
        this._updateTransitions(f, b);
        for (var e = this, i = [], k = 0; k < b.machineRefs.length; k++) i.push(c(b.machineRefs[k]));
        return i.length > 0 ? h.all(i).then(function (a) {
            a.forEach(function (a) {
                f.addMachine(a)
            })
        }) : d.createDummyPromise(f)
    };
    k.prototype.update = function (a, b) {
        var c = this._objects[a];
        c || (c = this._objects[a] = new f(b.name));
        c.setInitialState(b.initialState);
        for (var d = [], e = 0; e < b.states.length; e++) d.push(this._updateState(c, b.states[e]));
        return h.all(d).then(function () {
            return c
        })
    };
    return k
});
define("goo/renderer/pass/BlurPass", ["goo/renderer/Material", "goo/renderer/pass/FullscreenUtil", "goo/renderer/pass/RenderTarget", "goo/renderer/Util", "goo/renderer/shaders/ShaderLib"], function (e, c, b, a, d) {
    function g(f) {
        f = f || {};
        this.target = f.target !== void 0 ? f.target : null;
        var i = f.strength !== void 0 ? f.strength : 1,
            h = f.kernelSize !== void 0 ? f.kernelSize : 25,
            k = f.sigma !== void 0 ? f.sigma : 4,
            j = f.sizeX !== void 0 ? f.sizeX : 256,
            f = f.sizeY !== void 0 ? f.sizeY : 256;
        this.renderTargetX = new b(j, f);
        this.renderTargetY = new b(j, f);
        this.renderable = {
            meshData: c.quad,
            materials: []
        };
        this.copyShader = a.clone(d.copyPure);
        this.copyShader.uniforms.opacity = i;
        this.copyMaterial = e.createMaterial(this.copyShader);
        this.convolutionShader = a.clone(d.convolution);
        this.convolutionShader.defines = {
            KERNEL_SIZE_FLOAT: h.toFixed(1),
            KERNEL_SIZE_INT: h.toFixed(0)
        };
        this.convolutionShader.uniforms.uImageIncrement = g.blurX;
        this.convolutionShader.uniforms.cKernel = this.convolutionShader.buildKernel(k);
        this.convolutionMaterial = e.createMaterial(this.convolutionShader);
        this.enabled = !0;
        this.needsSwap = this.clear = !1
    }
    g.prototype.render = function (a, b, d) {
        this.renderable.materials[0] = this.convolutionMaterial;
        this.convolutionMaterial.setTexture("DIFFUSE_MAP", d);
        this.convolutionShader.uniforms.uImageIncrement = g.blurX;
        a.render(this.renderable, c.camera, [], this.renderTargetX, !0);
        this.convolutionMaterial.setTexture("DIFFUSE_MAP", this.renderTargetX);
        this.convolutionShader.uniforms.uImageIncrement = g.blurY;
        a.render(this.renderable, c.camera, [], this.renderTargetY, !0);
        this.renderable.materials[0] =
            this.copyMaterial;
        this.copyMaterial.setTexture("DIFFUSE_MAP", this.renderTargetY);
        this.target !== null ? a.render(this.renderable, c.camera, [], this.target, this.clear) : a.render(this.renderable, c.camera, [], d, this.clear)
    };
    g.blurX = [0.001953125, 0];
    g.blurY = [0, 0.001953125];
    return g
});
define("goo/renderer/pass/BloomPass", ["goo/renderer/pass/BlurPass"], function (e) {
    function c(b) {
        e.call(this, b);
        this.copyMaterial.blendState.blending = "AdditiveBlending"
    }
    c.prototype = Object.create(e.prototype);
    return c
});
define("goo/loaders/handlers/PosteffectHandler", "goo/loaders/handlers/ConfigHandler,goo/util/rsvp,goo/util/PromiseUtil,goo/renderer/Util,goo/renderer/shaders/ShaderLib,goo/renderer/pass/FullscreenPass,goo/renderer/pass/BloomPass".split(","), function (e, c, b, a, d, g, f) {
    function i() {
        e.apply(this, arguments)
    }
    i.posteffects = {
        Vignette: function () {
            return new g(a.clone(d.sepia))
        },
        Bloom: function (a) {
            return new f(a)
        }
    };
    i.prototype = Object.create(e.prototype);
    i.prototype.constructor = i;
    e._registerClass("posteffect", i);
    i.prototype._prepare = function () {};
    i.prototype._create = function () {};
    i.prototype.update = function (a, c) {
        var d = c.name,
            f = null;
        i.posteffects[d] instanceof Function && (f = i.posteffects[d](c.options));
        return b.createDummyPromise(f)
    };
    return i
});
define("goo/loaders/handlers/SoundComponentHandler", ["goo/loaders/handlers/ComponentHandler", "goo/addons/howler/components/HowlerComponent", "goo/util/rsvp", "goo/util/PromiseUtil"], function (e, c, b, a) {
    function d() {
        e.apply(this, arguments)
    }
    d.prototype = Object.create(e.prototype);
    e._registerClass("sound", d);
    d.prototype.contructor = d;
    d.prototype._create = function (a) {
        var b = new c;
        a.setComponent(b);
        return b
    };
    d.prototype.update = function (c, d) {
        if (!window.Howl) throw Error("Howler is missing");
        var i = e.prototype.update.call(this,
            c, d);
        if (i.sounds instanceof Object) {
            for (var h in i.sounds) i.sounds.pause();
            i.sounds = {}
        }
        var k = d.soundsMapping;
        if (k instanceof Object) {
            var j = [];
            for (h in k) j.push(this._getSound(h, k[h]));
            return b.all(j).then(function (a) {
                for (var b = 0; b < a.length; b++) i.sounds[a[b].key] = a[b].sound;
                return i
            })
        } else return a.createDummyPromise(i)
    };
    d.prototype._getSound = function (a, b) {
        var c = this;
        return this.getConfig(b).then(function (a) {
            return c.updateObject(b, a, c.options)
        }).then(function (c) {
            return {
                key: a,
                soundRef: b,
                sound: c
            }
        })
    };
    return d
});
define("goo/loaders/handlers/SoundHandler", ["goo/loaders/handlers/ConfigHandler", "goo/util/rsvp", "goo/util/PromiseUtil", "goo/util/ObjectUtil"], function (e, c, b, a) {
    function d() {
        e.apply(this, arguments);
        this._objects = {}
    }
    d.prototype = Object.create(e.prototype);
    e._registerClass("sound", d);
    d.prototype.constructor = d;
    d.prototype._prepare = function (b) {
        a.defaults(b, {
            loop: !1,
            urls: [],
            volume: 1,
            name: "A Sound"
        })
    };
    d.prototype._create = function (a) {
        var b = new window.Howl({});
        b._loaded = !0;
        return this._objects[a] = b
    };
    d.prototype.update =
        function (a, b) {
            if (!window.Howl) throw Error("Howler is missing");
            this._prepare(b);
            var d = this._objects[a] || this._create(a, b),
                e = [],
                k;
            for (k in b)
                if (k !== "urls" && d[k] instanceof Function) d[k](b[k]);
            for (k = 0; k < b.urls.length; k++) e.push(this.getConfig(b.urls[k]));
            return c.all(e).then(function (a) {
                d.urls(a);
                return d
            })
    };
    d.prototype.remove = function (a) {
        this._objects[a].stop();
        delete this._objects[a]
    };
    return d
});
define("goo/loaders/DynamicLoader", "goo/loaders/handlers/ConfigHandler,goo/loaders/handlers/ComponentHandler,goo/util/Ajax,goo/renderer/TextureCreator,goo/util/rsvp,goo/util/StringUtil,goo/util/PromiseUtil,goo/util/ObjectUtil,goo/loaders/handlers/CameraComponentHandler,goo/loaders/handlers/EntityHandler,goo/loaders/handlers/LightComponentHandler,goo/loaders/handlers/MaterialHandler,goo/loaders/handlers/MeshDataComponentHandler,goo/loaders/handlers/MeshDataHandler,goo/loaders/handlers/MeshRendererComponentHandler,goo/loaders/handlers/SceneHandler,goo/loaders/handlers/ShaderHandler,goo/loaders/handlers/SkeletonHandler,goo/loaders/handlers/TextureHandler,goo/loaders/handlers/TransformComponentHandler,goo/loaders/handlers/AnimationComponentHandler,goo/loaders/handlers/AnimationLayersHandler,goo/loaders/handlers/AnimationClipHandler,goo/loaders/handlers/ProjectHandler,goo/loaders/handlers/ScriptComponentHandler,goo/loaders/handlers/ScriptHandler,goo/loaders/handlers/FSMComponentHandler,goo/loaders/handlers/MachineHandler,goo/loaders/handlers/PosteffectHandler,goo/loaders/handlers/SoundComponentHandler,goo/loaders/handlers/SoundHandler".split(","), function (e,
    c, b, a, d, g, f, i) {
    function h(a) {
        this.options = a;
        this._objects = {};
        i.defaults(this.options, {
            ajax: !0
        });
        if (this.options.world) this._world = this.options.world;
        else throw Error("World argument cannot be null"); if (this.options.rootPath) this.setRootPath(this.options.rootPath);
        else throw Error("parameters.rootPath must be defined");
        this._configs = {};
        if (this.options.ajax) this._ajax = new b
    }
    var k = /\.(shader|script|entity|material|scene|mesh|texture|skeleton|animation|clip|bundle|project|machine|posteffect)$/,
        j = i.keys(e.getHandler("texture").loaders),
        l = ["jpg", "jpeg", "png", "gif"],
        m = ["dat", "bin"],
        o = ["mp3", "wav"],
        p = e.getHandler("material").ENGINE_SHADER_PREFIX;
    h.prototype.preloadCache = function (a, b) {
        b == null && (b = !1);
        return b ? this._configs = a : i.extend(this._configs, a)
    };
    h.prototype.loadFromConfig = function (a, b, c) {
        c == null && (c = {});
        i.defaults(c, this.options);
        if (b != null) c.noCache ? this._configs = b : i.extend(this._configs, b);
        if (this._configs[a]) throw Error("" + a + " not found in the supplied configs Available keys: \n" + i.keys(this._configs).join("\n"));
        return this.load(a,
            c)
    };
    h.prototype.loadFromBundle = function (a, b, c) {
        var d = this;
        c == null && (c = {});
        i.defaults(c, this.options);
        return this._loadRef(b).then(function (f) {
            c.noCache ? d._configs = f : i.extend(d._configs, f);
            if (d._configs[a] == null) throw Error("" + a + " not found in bundle " + b + ". Available keys: \n" + i.keys(d._configs).join("\n"));
            return d.load(a, c)
        })
    };
    h.prototype.load = function (a, b) {
        b == null && (b = {});
        return this.update(a, null, b)
    };
    h.prototype.update = function (a, b, c) {
        var f = this;
        c == null && (c = {});
        i.defaults(c, this.options, {
            recursive: !0
        });
        b && (this._configs[a] = b);
        delete this._objects[a];
        return this._loadRef(a).then(function (b) {
            var g = 0,
                h = [];
            if (c.recursive && e.getHandler(f._getTypeForRef(a)))
                for (var j = f._getRefsFromConfig(b), i = function (a) {
                        return h.push(f._loadRef(a).then(function (b) {
                            g++;
                            c.progressCallback && c.progressCallback.call && c.progressCallback.call(null, g, h.length);
                            return f._handle(a, b, c)
                        }))
                    }, k = 0; k < j.length; k++) i(j[k]);
            h.push(f._handle(a, b, c));
            return d.all(h)
        }).then(function () {
            return f._configs
        }).then(null, function (b) {
            return console.error("Error updating " +
                a + " " + b)
        })
    };
    h.prototype.remove = function (a) {
        delete this._objects[a];
        delete this._configs[a];
        return this._handle(a, null)
    };
    h.prototype._handle = function (a, b, c) {
        var d = this,
            g, h, j;
        c == null && (c = {});
        if (this._objects[a])
            if (this._objects[a].then) return this._objects[a];
            else {
                if (!c.noCache) return f.createDummyPromise(this._objects[a])
            } else if (j = this._getTypeForRef(a), h = e.getHandler(j)) {
            if (this._handlers == null) this._handlers = {};
            (g = this._handlers[j]) ? i.extend(g, {
                world: this._world,
                getConfig: this._loadRef.bind(this),
                updateObject: this._handle.bind(this),
                options: i.clone(c)
            }) : g = this._handlers[j] = new h(this._world, this._loadRef.bind(this), this._handle.bind(this), c);
            return b != null ? this._objects[a] = g.update(a, b).then(function (b) {
                return d._objects[a] = b
            }) : (g.remove(a), f.createDummyPromise(null))
        } else return console.warn("No handler for type " + j), f.createDummyPromise(null)
    };
    h.prototype._loadRef = function (a, c) {
        var d, e = this;
        a.indexOf(p) === 0 && (d = f.createDummyPromise(null), this._configs[a] = d);
        c == null && (c = !1);
        if (this._configs[a]) {
            if (this._configs[a].then) return this._configs[a];
            if (!c) return f.createDummyPromise(this._configs[a])
        }
        if (!this._ajax) return f.createDummyPromise(null);
        d = this._rootPath + window.escape(a);
        d = this._isImageRef(a) ? this._ajax.loadImage(d) : this._isBinaryRef(a) ? this._ajax.load(d, b.ARRAY_BUFFER) : this._isUrlRef(a) ? f.createDummyPromise(d) : this._ajax.load(d);
        d = d.then(function (b) {
            return k.test(a) ? e._configs[a] = JSON.parse(b) : e._configs[a] = b
        }).then(null, function (b) {
            delete e._configs[a];
            return b
        });
        return this._configs[a] = d
    };
    h.prototype._getRefsFromConfig = function (a) {
        var b = [],
            c = function (a, d) {
                var f;
                if (g.endsWith(a, "Refs")) b = b.concat(d);
                else if (g.endsWith(a, "Ref")) b.push(d);
                else if (d instanceof Object)
                    for (f in d) d.hasOwnProperty(f) && c(f, d[f])
            };
        c("", a);
        return b
    };
    h.prototype._getTypeForRef = function (a) {
        return a.split(".").pop().toLowerCase()
    };
    h.prototype._isImageRef = function (a) {
        a = this._getTypeForRef(a);
        return i.indexOf(l, a) >= 0
    };
    h.prototype._isBinaryRef = function (a) {
        a = this._getTypeForRef(a);
        return i.indexOf(j, a) >= 0 || i.indexOf(m, a) >= 0
    };
    h.prototype._isUrlRef = function (a) {
        a = this._getTypeForRef(a);
        return i.indexOf(o, a) >= 0
    };
    h.prototype.getCachedObjectForRef = function (a) {
        return this._objects ? this._objects[a] : void 0
    };
    h.prototype.setRootPath = function (a) {
        this._rootPath = a;
        a.length > 1 && a.charAt(a.length - 1) !== "/" && (this._rootPath += "/")
    };
    return h
});
define("goo/loaders/ShaderLoader", ["goo/util/rsvp", "goo/renderer/MeshData", "goo/renderer/Shader", "goo/loaders/Loader", "goo/renderer/shaders/ShaderBuilder"], function (e, c, b, a, d) {
    function g(b) {
        if (typeof b === "undefined" || b === null) throw Error("ShaderLoader(): Argument `parameters` was undefined/null");
        if (typeof b.loader === "undefined" || !(b.loader instanceof a) || b.loader === null) throw Error("ShaderLoader(): Argument `parameters.loader` was invalid/undefined/null");
        this._loader = b.loader;
        this._cache = {};
        this._doCache =
            b.cacheShader !== void 0 ? b.cacheShader : !0
    }
    g.prototype.load = function (a) {
        if (this._cache[a] && this._doCache) return this._cache[a];
        var b = this._parse.bind(this),
            c = this._loader.load(a, function (a) {
                return b(a)
            });
        return this._cache[a] = c
    };
    g.prototype._parse = function (a) {
        typeof a === "string" && (a = JSON.parse(a));
        var c = [],
            g;
        if (a && a.attributes && a.uniforms) {
            g = {
                attributes: a.attributes,
                uniforms: a.uniforms
            };
            for (var k in g.uniforms)
                if (g.uniforms.hasOwnProperty(k)) {
                    var j = g.uniforms[k];
                    if (typeof j === "string" && (j = j.match(/^function\s?\(([^\)]+)\)\s*\{(.*)}$/)) &&
                        j.length === 3) {
                        var l = j[1].replace(" ", "").split(",");
                        g.uniforms[k] = new Function(l, j[2])
                    }
                }
            if (a.defines) g.defines = a.defines;
            if (a.processors) {
                g.processors = [];
                for (k = 0; k < a.processors.length; k++) g.processors.push(d[a.processors[k]].processor)
            }
        } else g = this._getDefaultShaderDefinition();
        a && a.vshaderRef && a.fshaderRef && (k = this._loader.load(a.vshaderRef).then(function (a) {
            return g.vshader = a
        }), c.push(k), k = this._loader.load(a.fshaderRef).then(function (a) {
            return g.fshader = a
        }), c.push(k));
        return c.length === 0 ? (k = new e.Promise,
            k.reject("Shader definition `" + a + "` does not seem to contain any shader data."), k) : e.all(c).then(function () {
            return new b(a.name, g)
        })
    };
    g.prototype._getDefaultShaderDefinition = function () {
        return {
            attributes: {
                vertexPosition: c.POSITION,
                vertexNormal: c.NORMAL,
                vertexUV0: c.TEXCOORD0
            },
            uniforms: {
                viewMatrix: b.VIEW_MATRIX,
                projectionMatrix: b.PROJECTION_MATRIX,
                worldMatrix: b.WORLD_MATRIX,
                cameraPosition: b.CAMERA,
                lightPosition: b.LIGHT0,
                diffuseMap: b.DIFFUSE_MAP,
                materialAmbient: b.AMBIENT,
                materialDiffuse: b.DIFFUSE,
                materialSpecular: b.SPECULAR,
                materialSpecularPower: b.SPECULAR_POWER
            }
        }
    };
    return g
});
define("goo/loaders/MaterialLoader", "goo/util/rsvp,goo/renderer/MeshData,goo/renderer/Shader,goo/renderer/TextureCreator,goo/renderer/Material,goo/loaders/Loader,goo/loaders/ShaderLoader,goo/renderer/shaders/ShaderLib".split(","), function (e, c, b, a, d, g, f, i) {
    function h(a) {
        if (typeof a === "undefined" || a === null) throw Error("MaterialLoader(): Argument `parameters` was undefined/null");
        if (typeof a.loader === "undefined" || !(a.loader instanceof g) || a.loader === null) throw Error("MaterialLoader(): Argument `parameters.loader` was invalid/undefined/null");
        this._loader = a.loader;
        this._cache = {};
        this._shaderLoader = new f(a);
        this._waitForTextures = a.waitForTextures !== void 0 ? a.waitForTextures : !0
    }
    h.prototype.load = function (a) {
        if (this._cache[a]) return this._cache[a];
        var b = this,
            c = this._loader.load(a, function (a) {
                return b._parse(a)
            }).then(null, function () {
                return d.createMaterial(i.texturedLit, "DefaultShader")
            });
        return this._cache[a] = c
    };
    h.prototype._parse = function (b) {
        function c(b, d) {
            typeof d === "string" && (d = JSON.parse(d));
            if (d.url) {
                var g = new a({
                    loader: f._loader
                });
                if (f._waitForTextures) {
                    var h = new e.Promise;
                    n[b] = g.loadTexture2D(d.url, null, function () {
                        h.resolve()
                    });
                    return h
                } else n[b] = g.loadTexture2D(d.url)
            } else n[b] = null
        }
        typeof b === "string" && (b = JSON.parse(b));
        var f = this,
            g = [],
            h, p = {}, n = {}, s = b.name || "DefaultMaterial";
        if (b) {
            var r;
            (r = b.shaderRef) ? r = this._shaderLoader.load(r).then(function (a) {
                return h = a
            }) : (r = new e.Promise, r.then(function (a) {
                return h = a
            }), r.resolve(d.createShader(i.texturedLit, "DefaultShader")));
            g.push(r);
            if (b.uniforms)
                for (var u in b.uniforms) p[u] = b.uniforms[u];
            if (b.texturesMapping && Object.keys(b.texturesMapping).length)
                for (u in b.texturesMapping) {
                    r = b.texturesMapping[u];
                    var q = c.bind(null, u);
                    r = this._loader.load(r).then(q);
                    g.push(r)
                } else if (b.textureRefs && b.textureRefs.length) {
                    u = ["DIFFUSE_MAP", "NORMAL_MAP", "SPECULAR_MAP"];
                    for (var x = Math.min(b.textureRefs.length, u.length), t = 0; t < x; t++) r = b.textureRefs[t], q = c.bind(null, u[t]), r = this._loader.load(r).then(q), g.push(r)
                }
        }
        return g.length === 0 ? (r = new e.Promise, r.reject("Material definition `" + b + "` does not seem to contain a shader definition."),
            r) : e.all(g).then(function () {
            var a = new d(s);
            a.shader = h;
            a._textureMaps = n;
            a.materialState = void 0;
            a.uniforms = p;
            if (b) {
                var c = function (a, b) {
                    if (b)
                        for (var c in b) a[c] = b[c]
                };
                c(a.cullState, b.cullState);
                c(a.blendState, b.blendState);
                c(a.depthState, b.depthState);
                c(a.offsetState, b.offsetState);
                if (typeof b.renderQueue === "number" && b.renderQueue > -1) a.renderQueue = b.renderQueue;
                if (typeof b.wireframe === "boolean") a.wireframe = b.wireframe
            }
            return a
        })
    };
    h.prototype._getDefaultMaterialState = function () {
        return {
            ambient: [0.1, 0.1,
                0.1, 1
            ],
            emissive: [0, 0, 0, 0],
            diffuse: [1, 1, 1, 1],
            specular: [0.8, 0.8, 0.8, 1],
            shininess: 16
        }
    };
    return h
});
define("goo/loaders/SkeletonLoader", ["goo/animation/Skeleton", "goo/animation/SkeletonPose", "goo/animation/Joint", "goo/loaders/Loader", "goo/loaders/JsonUtils"], function (e, c, b, a, d) {
    function g(a) {
        if (typeof a === "undefined" || a === null) throw Error("SkeletonLoader(): Argument `parameters` was undefined/null");
        if (typeof a.loader === "undefined" || a.loader === null) throw Error("SkeletonLoader(): Argument `parameters.loader` was invalid/undefined/null");
        this._loader = a.loader;
        this._cache = {}
    }
    g.prototype.load = function (a) {
        if (this._cache[a]) return this._cache[a];
        var b = g.prototype._loadSkeleton.bind(this),
            c = g.prototype._parseSkeleton.bind(this),
            d = g.prototype._createSkeletonPose.bind(this),
            b = b(a).then(c).then(d);
        return this._cache[a] = b
    };
    g.prototype._loadSkeleton = function (a) {
        return this._loader.load(a)
    };
    g.prototype._parseSkeleton = function (a) {
        typeof a === "string" && (a = JSON.parse(a));
        for (var c = a.Name, a = a.Joints, g = [], k = 0, j = a.length; k < j; k++) {
            var l = a[k],
                m = new b(l.Name);
            m._index = Math.round(l.Index);
            m._parentIndex = Math.round(l.ParentIndex);
            l.InverseBindPose.Matrix ? m._inverseBindPose.copy(d.parseTransformMatrix(l.InverseBindPose)) :
                (l.InverseBindPose.Rotation.length === 4 ? m._inverseBindPose.copy(d.parseTransformQuat(l.InverseBindPose)) : l.InverseBindPose.Rotation.length === 3 ? m._inverseBindPose.copy(d.parseTransformEuler(l.InverseBindPose)) : m._inverseBindPose.copy(d.parseTransform(l.InverseBindPose)), m._inverseBindPose.update());
            g[k] = m
        }
        return new e(c, g)
    };
    g.prototype._createSkeletonPose = function (a) {
        a = new c(a);
        a.setToBindPose();
        return a
    };
    return g
});
define("goo/loaders/MeshLoader", ["goo/util/rsvp", "goo/loaders/JsonUtils", "goo/renderer/MeshData", "goo/loaders/SkeletonLoader"], function (e, c, b, a) {
    function d(b) {
        if (typeof b === "undefined" || b === null) throw Error("MeshLoader(): Argument `parameters` was undefined/null");
        if (typeof b.loader === "undefined" || b.loader === null) throw Error("MeshLoader(): Argument `parameters.loader` was invalid/undefined/null");
        this._loader = b.loader;
        this._skeletonLoader = new a(b);
        this._cache = {}
    }
    d.prototype.load = function (a) {
        if (this._cache[a]) return this._cache[a];
        var b = this,
            c = this._loader.load(a, function (a) {
                return b._parse(a)
            });
        return this._cache[a] = c
    };
    d.prototype._parse = function (a) {
        typeof a === "string" && (a = JSON.parse(a));
        var c = new e.Promise;
        try {
            if (Object.keys(a).length === 0) return c.reject("Empty meshdata"), c;
            if (a.compression) this.useCompression = a.compression.compressed || !1, this.compressedVertsRange = a.compression.compressedVertsRange || 16383, this.compressedColorsRange = a.compression.compressedColorsRange || 255, this.compressedUnitVectorRange = a.compression.compressedUnitVectorRange ||
                1023;
            var d = a.type === "SkinnedMesh" ? "SkinnedMesh" : "Mesh",
                h;
            a.type === "SkinnedMesh" ? (h = this._parseMeshData(a.data || a, 4, d), h.type = b.SKINMESH) : (h = this._parseMeshData(a.data || a, 0, d), h.type = b.MESH);
            a.pose ? c = this._skeletonLoader.load(a.pose).then(function (a) {
                h.currentPose = a;
                return h
            }) : c.resolve(h)
        } catch (k) {
            c.reject(k)
        }
        return c
    };
    d.prototype._parseMeshData = function (a, d, e) {
        var h = a.vertexCount;
        if (h === 0) return null;
        var k = a.indexLengths ? a.indexLengths[0] : a.indices ? a.indices.length : 0,
            j = {};
        if (a.vertices && a.vertices.length >
            0) j.POSITION = b.createAttribute(3, "Float");
        if (a.normals && a.normals.length > 0) j.NORMAL = b.createAttribute(3, "Float");
        if (a.tangents && a.tangents.length > 0) j.TANGENT = b.createAttribute(4, "Float");
        if (a.colors && a.colors.length > 0) j.COLOR = b.createAttribute(4, "Float");
        if (d > 0 && a.weights) j.WEIGHTS = b.createAttribute(4, "Float");
        if (d > 0 && a.joints) j.JOINTIDS = b.createAttribute(4, "Short");
        if (a.textureCoords && a.textureCoords.length > 0)
            for (var l in a.textureCoords) j["TEXCOORD" + l] = b.createAttribute(2, "Float");
        k = new b(j, h, k);
        if (a.vertices && a.vertices.length > 0) this.useCompression ? (l = a.vertexOffsets, c.fillAttributeBufferFromCompressedString(a.vertices, k, b.POSITION, [a.vertexScale, a.vertexScale, a.vertexScale], [l.xOffset, l.yOffset, l.zOffset])) : c.fillAttributeBuffer(a.vertices, k, b.POSITION);
        d > 0 && a.weights && (this.useCompression ? (j = 1 / this.compressedVertsRange, c.fillAttributeBufferFromCompressedString(a.weights, k, b.WEIGHTS, [j], [0])) : c.fillAttributeBuffer(a.weights, k, b.WEIGHTS));
        a.normals && a.normals.length > 0 && (this.useCompression ?
            (l = 1 - (this.compressedUnitVectorRange + 1 >> 1), j = 1 / -l, c.fillAttributeBufferFromCompressedString(a.normals, k, b.NORMAL, [j, j, j], [l, l, l])) : c.fillAttributeBuffer(a.normals, k, b.NORMAL));
        a.tangents && a.tangents.length > 0 && (this.useCompression ? (l = 1 - (this.compressedUnitVectorRange + 1 >> 1), j = 1 / -l, c.fillAttributeBufferFromCompressedString(a.tangents, k, b.TANGENT, [j, j, j, j], [l, l, l, l])) : c.fillAttributeBuffer(a.tangents, k, b.TANGENT));
        a.colors && a.colors.length > 0 && (this.useCompression ? (l = 0, j = 255 / (this.compressedColorsRange +
            1), c.fillAttributeBufferFromCompressedString(a.colors, k, b.COLOR, [j, j, j, j], [l, l, l, l])) : c.fillAttributeBuffer(a.colors, k, b.COLOR));
        if (a.textureCoords && a.textureCoords.length > 0)
            if (j = a.textureCoords, this.useCompression)
                for (l = 0; l < j.length; l++) {
                    var m = j[l];
                    c.fillAttributeBufferFromCompressedString(m.UVs, k, "TEXCOORD" + l, m.UVScales, m.UVOffsets)
                } else
                    for (l = 0; l < j.length; l++) c.fillAttributeBuffer(j[l], k, "TEXCOORD" + l);
        if (d > 0 && a.joints)
            if (j = k.getAttributeBuffer(b.JOINTIDS), m = this.useCompression ? c.getIntBufferFromCompressedString(a.joints,
                32767) : c.getIntBuffer(a.joints, 32767), e === "SkinnedMesh") {
                var e = [],
                    o = 0;
                l = 0;
                for (var p = m.length; l < p; l++) {
                    var n = m[l];
                    e[n] === void 0 && (e[n] = o++);
                    j.set([e[n]], l)
                }
                l = [];
                for (n = 0; n < e.length; n++) o = e[n], o !== void 0 && (l[o] = n);
                k.paletteMap = l;
                k.weightsPerVertex = d
            } else {
                l = 0;
                for (p = m.capacity(); l < p; l++) j.putCast(l, m.get(l))
            }
        a.indices && (this.useCompression ? k.getIndexBuffer().set(c.getIntBufferFromCompressedString(a.indices, h)) : k.getIndexBuffer().set(c.getIntBuffer(a.indices, h)));
        if (a.indexModes)
            if (d = a.indexModes, d.length ===
                1) k.indexModes[0] = d[0];
            else {
                h = [];
                for (l = 0; l < d.length; l++) h[l] = d[l];
                k.indexModes = h
            }
        if (a.indexLengths) {
            d = a.indexLengths;
            h = [];
            for (l = 0; l < d.length; l++) h[l] = d[l];
            k.indexLengths = h
        }
        if (a.boundingBox) k.boundingBox = a.boundingBox;
        return k
    };
    return d
});
define("goo/loaders/EntityLoader", "goo/entities/Entity,goo/renderer/Camera,goo/entities/components/CameraComponent,goo/entities/components/TransformComponent,goo/entities/components/MeshRendererComponent,goo/entities/components/MeshDataComponent,goo/renderer/MeshData,goo/math/Vector3,goo/math/MathUtils,goo/renderer/bounds/BoundingBox,goo/util/rsvp,goo/loaders/MaterialLoader,goo/loaders/MeshLoader,goo/loaders/Loader".split(","), function (e, c, b, a, d, g, f, i, h, k, j, l, m, o) {
    function p(a) {
        if (typeof a === "undefined" ||
            a === null) throw Error("EntityLoader(): Argument `parameters` was undefined/null");
        if (typeof a.loader === "undefined" || !(a.loader instanceof o) || a.loader === null) throw Error("EntityLoader(): Argument `parameters.loader` was invalid/undefined/null");
        if (typeof a.world === "undefined" || a.world === null) throw Error("EntityLoader(): Argument `parameters.world` was undefined/null");
        this._loader = a.loader;
        this._world = a.world;
        this._cache = {};
        this._materialLoader = new l(a);
        this._meshLoader = new m(a)
    }
    p.prototype.load = function (a) {
        if (this._cache[a]) return this._cache[a];
        var b = this._loader.load(a, function (b) {
            return this._parse(b, a)
        }.bind(this));
        return this._cache[a] = b
    };
    p.prototype._parse = function (a, b) {
        typeof a === "string" && (a = JSON.parse(a));
        var c = [],
            d = [],
            g = this;
        if (a.components) {
            var h;
            (h = a.components.transform) && d.push(this._getTransformComponent(h));
            (h = a.components.camera) && d.push(this._getCameraComponent(h));
            if (h = a.components.meshRenderer) h = this._getMeshRendererComponent(h).then(function (a) {
                d.push(a);
                return a
            }), c.push(h);
            if (h = a.components.meshData) h = this._getMeshDataComponent(h).then(function (a) {
                d.push(a);
                return a
            }), c.push(h)
        }
        return d.length === 0 && c.length === 0 ? (h = new j.Promise, h.reject("Entity definition `" + a + "` does not seem to contain any components."), h) : j.all(c).then(function () {
            var c = new e(g._world, a.name || b);
            c.ref = b;
            for (var h in d) d[h].type === "TransformComponent" && c.clearComponent("transformComponent"), c.setComponent(d[h]);
            if (c.meshDataComponent && c.meshDataComponent.meshData.type === f.SKINMESH && c.meshRendererComponent && c.meshRendererComponent.materials.length) {
                var j = c.meshRendererComponent.materials,
                    i;
                h = 0;
                for (var k = j.length; h < k; h++)
                    if ((i = j[h].shader.defines) && i.JOINT_COUNT !== void 0 && i.WEIGHTS !== void 0) i.JOINT_COUNT = c.meshDataComponent.meshData.paletteMap.length, i.WEIGHTS = c.meshDataComponent.meshData.weightsPerVertex
            }
            return c
        })
    };
    p.prototype._getTransformComponent = function (b) {
        var c = new a;
        c.transform.translation.set(b.translation);
        c.transform.scale.set(b.scale);
        c.transform.rotation.fromAngles(h.radFromDeg(b.rotation[0]), h.radFromDeg(b.rotation[1]), h.radFromDeg(b.rotation[2]));
        (b = b.parentRef) && this.load(b).then(function (a) {
            a.transformComponent.attachChild(c);
            return a
        });
        return c
    };
    p.prototype._getCameraComponent = function (a) {
        a = new c(a.fov || 45, a.aspect || 1, a.near || 1, a.far || 100);
        return new b(a)
    };
    p.prototype._getMeshRendererComponent = function (a) {
        var b = [],
            c = this._materialLoader,
            e;
        for (e in a)
            if (e === "materialRefs")
                for (var f in a[e]) {
                    var g = c.load(a[e][f]);
                    b.push(g)
                }
            return j.all(b).then(function (b) {
            var c = new d,
                e;
            for (e in a) c.hasOwnProperty(e) && e !== "materials" && (c[e] = a[e]);
            for (var f in b) c.materials.push(b[f]);
            return c
        })
    };
    p.prototype._getMeshDataComponent = function (a) {
        var b = [],
            c = this._meshLoader,
            d;
        for (d in a)
            if (d === "meshRef") {
                var e = c.load(a[d]);
                b.push(e)
            }
        return j.all(b).then(function (a) {
            var b = new g(a[0]);
            if (a[0].boundingBox) {
                var c = a[0].boundingBox.min,
                    d = a[0].boundingBox.max,
                    a = [d[0] - c[0], d[1] - c[1], d[2] - c[2]],
                    c = [(d[0] + c[0]) * 0.5, (d[1] + c[1]) * 0.5, (d[2] + c[2]) * 0.5],
                    d = new k;
                d.xExtent = a[0];
                d.yExtent = a[1];
                d.zExtent = a[2];
                d.center.seta(c);
                b.modelBound = d;
                b.autoCompute = !1
            }
            return b
        })
    };
    return p
});
define("goo/loaders/SceneLoader", ["goo/loaders/Loader", "goo/loaders/EntityLoader", "goo/util/rsvp"], function (e, c, b) {
    function a(a) {
        if (typeof a === "undefined" || a === null) throw Error("SceneLoader(): Argument `parameters` was undefined/null");
        if (typeof a.loader === "undefined" || !(a.loader instanceof e) || a.loader === null) throw Error("SceneLoader(): Argument `parameters.loader` was invalid/undefined/null");
        if (typeof a.world === "undefined" || a.world === null) throw Error("SceneLoader(): Argument `parameters.world` was undefined/null");
        this._parameters = a;
        this._loader = a.loader;
        this._world = a.world;
        this._cacheShader = a.cacheShader
    }
    a.prototype.load = function (a) {
        var b = this;
        return this._loader.load(a, function (c) {
            return b._parse(c, a)
        })
    };
    a.prototype._parse = function (a) {
        typeof a === "string" && (a = JSON.parse(a));
        var e = [];
        if (a && a.entityRefs && a.entityRefs.length)
            for (var f = new c(this._parameters), i = 0; i < a.entityRefs.length; ++i) e.push(f.load(a.entityRefs[i]));
        this.globals = a.globals;
        return b.all(e).then(function (a) {
            return a
        })
    };
    a.prototype._buildWorld =
        function (a) {
            for (var b = 0; b < a.length; ++b) a[b].addToWorld();
            this._world.process();
            return this._world
    };
    return a
});
define("goo/loaders/ScriptLoader", ["goo/util/rsvp", "goo/loaders/Loader"], function (e, c) {
    function b(a) {
        if (typeof a === "undefined" || a === null) throw Error("ScriptLoader(): Argument `parameters` was undefined/null");
        if (typeof a.loader === "undefined" || !(a.loader instanceof c) || a.loader === null) throw Error("ScriptLoader(): Argument `parameters.loader` was invalid/undefined/null");
        this._loader = a.loader;
        this._cache = {}
    }
    b.prototype.load = function (a, b) {
        if (this._cache[a]) return this._cache[a].then(function (a) {
            return new a(b)
        });
        var c = this._parse.bind(this),
            e = this._loader.load(a, function (a) {
                return c(a)
            });
        this._cache[a] = e;
        return e.then(function (a) {
            return new a(b)
        })
    };
    b.prototype._parse = function (a) {
        typeof a === "string" && (a = JSON.parse(a));
        return this._loadScript(a.jsRef)
    };
    b.prototype._loadScript = function (a) {
        var b = new e.Promise;
        require([this._loader.rootPath + a], function (a) {
            b.resolve(a)
        });
        return b
    };
    return b
});
define("goo/math/Matrix2x2", ["goo/math/MathUtils", "goo/math/Matrix"], function (e, c) {
    function b() {
        c.call(this, 2, 2);
        arguments.length === 0 ? this.setIdentity() : this.set(arguments)
    }
    b.prototype = Object.create(c.prototype);
    b.prototype.setupAliases([
        ["e00"],
        ["e10"],
        ["e01"],
        ["e11"]
    ]);
    b.IDENTITY = new b(1, 0, 0, 1);
    b.add = function (a, c, e) {
        e || (e = new b);
        c instanceof b ? (e.e00 = a.e00 + c.e00, e.e10 = a.e10 + c.e10, e.e01 = a.e01 + c.e01, e.e11 = a.e11 + c.e11) : (e.e00 = a.e00 + c, e.e10 = a.e10 + c, e.e01 = a.e01 + c, e.e11 = a.e11 + c);
        return e
    };
    b.prototype.add =
        function (a) {
            return b.add(this, a, this)
    };
    b.sub = function (a, c, e) {
        e || (e = new b);
        c instanceof b ? (e.e00 = a.e00 - c.e00, e.e10 = a.e10 - c.e10, e.e01 = a.e01 - c.e01, e.e11 = a.e11 - c.e11) : (e.e00 = a.e00 - c, e.e10 = a.e10 - c, e.e01 = a.e01 - c, e.e11 = a.e11 - c);
        return e
    };
    b.prototype.sub = function (a) {
        return b.sub(this, a, this)
    };
    b.mul = function (a, c, e) {
        e || (e = new b);
        c instanceof b ? (e.e00 = a.e00 * c.e00, e.e10 = a.e10 * c.e10, e.e01 = a.e01 * c.e01, e.e11 = a.e11 * c.e11) : (e.e00 = a.e00 * c, e.e10 = a.e10 * c, e.e01 = a.e01 * c, e.e11 = a.e11 * c);
        return e
    };
    b.prototype.mul = function (a) {
        return b.mul(this,
            a, this)
    };
    b.div = function (a, c, e) {
        e || (e = new b);
        c instanceof b ? (e.e00 = a.e00 / c.e00, e.e10 = a.e10 / c.e10, e.e01 = a.e01 / c.e01, e.e11 = a.e11 / c.e11) : (c = 1 / c, e.e00 = a.e00 * c, e.e10 = a.e10 * c, e.e01 = a.e01 * c, e.e11 = a.e11 * c);
        return e
    };
    b.prototype.div = function (a) {
        return b.div(this, a, this)
    };
    b.combine = function (a, d, e) {
        e || (e = new b);
        if (e === a || e === d) return c.copy(b.combine(a, d), e);
        e.e00 = a.e00 * d.e00 + a.e01 * d.e10;
        e.e10 = a.e10 * d.e00 + a.e11 * d.e10;
        e.e01 = a.e00 * d.e01 + a.e01 * d.e11;
        e.e11 = a.e10 * d.e01 + a.e11 * d.e11;
        return e
    };
    b.prototype.combine = function (a) {
        return b.combine(this,
            a, this)
    };
    b.transpose = function (a, d) {
        d || (d = new b);
        if (d === a) return c.copy(b.transpose(a), d);
        d.e00 = a.e00;
        d.e10 = a.e01;
        d.e01 = a.e10;
        d.e11 = a.e11;
        return d
    };
    b.prototype.transpose = function () {
        return b.transpose(this, this)
    };
    b.invert = function (a, d) {
        d || (d = new b);
        if (d === a) return c.copy(b.invert(a), d);
        var g = a.determinant();
        if (Math.abs(g) < e.EPSILON) throw {
            name: "Singular Matrix",
            message: "The matrix is singular and cannot be inverted."
        };
        g = 1 / g;
        d.e00 = a.e11 * g;
        d.e10 = 0 - a.e10 * g;
        d.e01 = 0 - a.e01 * g;
        d.e11 = a.e00 * g;
        return d
    };
    b.prototype.invert =
        function () {
            return b.invert(this, this)
    };
    b.prototype.isOrthogonal = function () {
        return Math.abs(this.e00 * this.e01 + this.e10 * this.e11) > e.EPSILON ? !1 : !0
    };
    b.prototype.isNormal = function () {
        var a;
        a = this.e00 * this.e00 + this.e10 * this.e10;
        if (Math.abs(a - 1) > e.EPSILON) return !1;
        a = this.e01 * this.e01 + this.e11 * this.e11;
        return Math.abs(a - 1) > e.EPSILON ? !1 : !0
    };
    b.prototype.isOrthonormal = function () {
        return this.isOrthogonal() && this.isNormal()
    };
    b.prototype.determinant = function () {
        return this.e00 * this.e11 - this.e01 * this.e10
    };
    b.prototype.setIdentity =
        function () {
            this.set(b.IDENTITY);
            return this
    };
    return b
});
define("goo/math/Versor", ["goo/math/Matrix3x3", "goo/math/Matrix4x4", "goo/math/Vector"], function (e, c, b) {
    function a() {
        b.call(this, 4);
        this.set(arguments.length !== 0 ? arguments : [0, 0, 0, 1])
    }
    a.prototype = Object.create(b.prototype);
    a.prototype.setupAliases([
        ["x"],
        ["y"],
        ["z"],
        ["w"]
    ]);
    a.IDENTITY = new a(0, 0, 0, 1);
    a.combine = function (c, e, f) {
        f || (f = new a);
        if (f === c || f === e) return b.copy(a.combine(c, e), f);
        f.data[0] = c.data[3] * e.data[0] + e.data[3] * c.data[0] + e.data[2] * c.data[1] - e.data[1] * c.data[2];
        f.data[1] = c.data[3] * e.data[1] +
            e.data[3] * c.data[1] + e.data[0] * c.data[2] - e.data[2] * c.data[0];
        f.data[2] = c.data[3] * e.data[2] + e.data[3] * c.data[2] + e.data[1] * c.data[0] - e.data[0] * c.data[1];
        f.data[3] = c.data[3] * e.data[3] - (c.data[0] * e.data[0] + c.data[1] * e.data[1] + c.data[2] * e.data[2]);
        return f
    };
    a.prototype.combine = function (b) {
        return a.combine(this, b, this)
    };
    a.invert = function (b, c) {
        c || (c = new a);
        c.data[0] = 0 - b.data[0];
        c.data[1] = 0 - b.data[1];
        c.data[2] = 0 - b.data[2];
        c.data[3] = b.data[3];
        return c
    };
    a.prototype.invert = function () {
        return a.invert(this, this)
    };
    a.fromAngleAxis = function (b, c, e) {
        var i = Math.sin(b * 0.5),
            b = Math.cos(b * 0.5);
        e || (e = new a);
        c.normalize();
        e.data[0] = c.data[0] * i;
        e.data[1] = c.data[1] * i;
        e.data[2] = c.data[2] * i;
        e.data[3] = b;
        return e
    };
    a.prototype.fromAngleAxis = function (b, c) {
        return a.fromAngleAxis(b, c, this)
    };
    a.fromAngleNormalAxis = function (b, c, e) {
        var i = Math.sin(b * 0.5),
            b = Math.cos(b * 0.5);
        e || (e = new a);
        e.data[0] = c.data[0] * i;
        e.data[1] = c.data[1] * i;
        e.data[2] = c.data[2] * i;
        e.data[3] = b;
        return e
    };
    a.prototype.fromAngleNormalAxis = function (b, c) {
        return a.fromAngleNormalAxis(b,
            c, this)
    };
    a.toMatrix3x3 = function (a, b) {
        b || (b = new e);
        var c = 2 * a.data[0] * a.data[0],
            i = 2 * a.data[1] * a.data[1],
            h = 2 * a.data[2] * a.data[2],
            k = 2 * a.data[0] * a.data[1],
            j = 2 * a.data[0] * a.data[2],
            l = 2 * a.data[1] * a.data[2],
            m = 2 * a.data[0] * a.data[3],
            o = 2 * a.data[1] * a.data[3],
            p = 2 * a.data[2] * a.data[3];
        b.e00 = 1 - (i + h);
        b.e10 = k + p;
        b.e20 = j - o;
        b.e01 = k - p;
        b.e11 = 1 - (c + h);
        b.e21 = l + m;
        b.e02 = j + o;
        b.e12 = l - m;
        b.e22 = 1 - (c + i);
        return b
    };
    a.prototype.toMatrix3x3 = function (b) {
        return a.toMatrix3x3(this, b)
    };
    a.toMatrix4x4 = function (a, b) {
        b || (b = new c);
        var e = 2 * a.data[0] *
            a.data[0],
            i = 2 * a.data[1] * a.data[1],
            h = 2 * a.data[2] * a.data[2],
            k = 2 * a.data[0] * a.data[1],
            j = 2 * a.data[0] * a.data[2],
            l = 2 * a.data[1] * a.data[2],
            m = 2 * a.data[0] * a.data[3],
            o = 2 * a.data[1] * a.data[3],
            p = 2 * a.data[2] * a.data[3];
        b.e00 = 1 - (i + h);
        b.e10 = k + p;
        b.e20 = j - o;
        b.e30 = 0;
        b.e01 = k - p;
        b.e11 = 1 - (e + h);
        b.e21 = l + m;
        b.e31 = 0;
        b.e02 = j + o;
        b.e12 = l - m;
        b.e22 = 1 - (e + i);
        b.e32 = 0;
        b.e03 = 0;
        b.e13 = 0;
        b.e23 = 0;
        b.e33 = 1;
        return b
    };
    a.prototype.toMatrix4x4 = function (b) {
        return a.toMatrix4x4(this, b)
    };
    return a
});
define("goo/noise/Noise", ["goo/math/MathUtils"], function (e) {
    function c() {}
    c.shifter = [37, 91, 12, 128, 216, 96, 51, 153, 39, 231, 223, 180, 160, 157, 135, 179, 74, 50, 205, 151, 4, 213, 196, 58, 212, 120, 53, 45, 10, 195, 137, 159, 103, 144, 109, 170, 202, 48, 121, 13, 245, 68, 232, 28, 210, 174, 197, 80, 107, 206, 156, 116, 155, 240, 162, 79, 41, 59, 147, 117, 0, 242, 118, 164, 129, 101, 98, 126, 214, 105, 89, 26, 130, 254, 85, 199, 8, 165, 76, 75, 187, 166, 64, 143, 217, 149, 78, 7, 172, 230, 87, 119, 42, 247, 84, 139, 16, 141, 134, 86, 154, 71, 253, 60, 99, 235, 168, 30, 34, 55, 113, 140, 191, 69, 31, 106, 40,
        82, 73, 33, 81, 14, 234, 131, 255, 88, 169, 136, 248, 148, 220, 138, 219, 102, 44, 127, 36, 200, 95, 208, 54, 152, 47, 20, 23, 15, 52, 123, 177, 224, 122, 171, 215, 173, 211, 188, 190, 133, 244, 167, 236, 35, 63, 145, 221, 104, 65, 24, 70, 100, 56, 150, 49, 77, 110, 228, 112, 209, 198, 1, 237, 185, 250, 225, 93, 201, 124, 108, 218, 72, 243, 21, 22, 6, 114, 38, 125, 29, 66, 249, 222, 111, 241, 11, 186, 61, 176, 183, 17, 163, 229, 161, 57, 238, 227, 132, 67, 83, 207, 226, 46, 189, 115, 193, 194, 233, 182, 192, 18, 27, 25, 2, 3, 252, 97, 62, 184, 239, 175, 92, 246, 142, 251, 204, 203, 32, 146, 90, 19, 9, 178, 158, 181, 94, 43, 5
    ];
    c.split =
        function (b) {
            var a = Math.floor(b),
                b = e.scurve5(b - a);
            return {
                i0: a + 0,
                i1: a + 1,
                f0: 1 - b,
                f1: 0 + b
            }
    };
    c.fractal1d = function (b, a, c, e, f, i) {
        for (var h = 0, k = 1, j = 0, l = 0; l < c; l++) h += k * i.evaluate1d(b, a), j += k, k *= e, b *= f;
        return h / j
    };
    c.fractal2d = function (b, a, c, e, f, i, h) {
        for (var k = 0, j = 1, l = 0, m = 0; m < e; m++) k += j * h.evaluate2d(b, a, c), l += j, j *= f, b *= i, a *= i;
        return k / l
    };
    c.fractal3d = function (b, a, c, e, f, i, h, k) {
        for (var j = 0, l = 1, m = 0, o = 0; o < f; o++) j += l * k.evaluate3d(b, a, c, e), m += l, l *= i, b *= h, a *= h, c *= h;
        return j / m
    };
    c.fractal4d = function (b, a, c, e, f, i, h, k, j) {
        for (var l =
            0, m = 1, o = 0, p = 0; p < i; p++) l += m * j.evaluate4d(b, a, c, e, f), o += m, m *= h, b *= k, a *= k, c *= k, e *= k;
        return l / o
    };
    return c
});
define("goo/noise/ValueNoise", ["goo/noise/Noise"], function (e) {
    function c() {
        e.call(this)
    }
    c.prototype = Object.create(e.prototype);
    c.sources = [0, 1 / 15, 2 / 15, 0.2, 4 / 15, 5 / 15, 0.4, 7 / 15, 8 / 15, 0.6, 10 / 15, 11 / 15, 0.8, 13 / 15, 14 / 15, 1];
    c.evaluate1d = function (b, a) {
        var d = e.split(b / a),
            g = e.shifter[d.i1 & 255] & 15,
            f = 0;
        f += d.f0 * c.sources[e.shifter[d.i0 & 255] & 15];
        f += d.f1 * c.sources[g];
        return f
    };
    c.evaluate2d = function (b, a, d) {
        var b = e.split(b / d),
            a = e.split(a / d),
            d = e.shifter[e.shifter[a.i0 & 255] + b.i1 & 255] & 15,
            g = e.shifter[e.shifter[a.i1 & 255] +
                b.i0 & 255] & 15,
            f = e.shifter[e.shifter[a.i1 & 255] + b.i1 & 255] & 15,
            i = 0;
        i += a.f0 * b.f0 * c.sources[e.shifter[e.shifter[a.i0 & 255] + b.i0 & 255] & 15];
        i += a.f0 * b.f1 * c.sources[d];
        i += a.f1 * b.f0 * c.sources[g];
        i += a.f1 * b.f1 * c.sources[f];
        return i
    };
    c.evaluate3d = function (b, a, d, g) {
        var b = e.split(b / g),
            a = e.split(a / g),
            d = e.split(d / g),
            g = e.shifter[e.shifter[e.shifter[d.i0 & 255] + a.i0 & 255] + b.i1 & 255] & 15,
            f = e.shifter[e.shifter[e.shifter[d.i0 & 255] + a.i1 & 255] + b.i0 & 255] & 15,
            i = e.shifter[e.shifter[e.shifter[d.i0 & 255] + a.i1 & 255] + b.i1 & 255] & 15,
            h = e.shifter[e.shifter[e.shifter[d.i1 &
                255] + a.i0 & 255] + b.i0 & 255] & 15,
            k = e.shifter[e.shifter[e.shifter[d.i1 & 255] + a.i0 & 255] + b.i1 & 255] & 15,
            j = e.shifter[e.shifter[e.shifter[d.i1 & 255] + a.i1 & 255] + b.i0 & 255] & 15,
            l = e.shifter[e.shifter[e.shifter[d.i1 & 255] + a.i1 & 255] + b.i1 & 255] & 15,
            m = 0;
        m += d.f0 * a.f0 * b.f0 * c.sources[e.shifter[e.shifter[e.shifter[d.i0 & 255] + a.i0 & 255] + b.i0 & 255] & 15];
        m += d.f0 * a.f0 * b.f1 * c.sources[g];
        m += d.f0 * a.f1 * b.f0 * c.sources[f];
        m += d.f0 * a.f1 * b.f1 * c.sources[i];
        m += d.f1 * a.f0 * b.f0 * c.sources[h];
        m += d.f1 * a.f0 * b.f1 * c.sources[k];
        m += d.f1 * a.f1 * b.f0 * c.sources[j];
        m += d.f1 * a.f1 * b.f1 * c.sources[l];
        return m
    };
    c.evaluate4d = function (b, a, d, g, f) {
        var b = e.split(b / f),
            a = e.split(a / f),
            d = e.split(d / f),
            g = e.split(g / f),
            f = e.shifter[e.shifter[e.shifter[e.shifter[g.i0 & 255] + d.i0 & 255] + a.i0 & 255] + b.i1 & 255] & 15,
            i = e.shifter[e.shifter[e.shifter[e.shifter[g.i0 & 255] + d.i0 & 255] + a.i1 & 255] + b.i0 & 255] & 15,
            h = e.shifter[e.shifter[e.shifter[e.shifter[g.i0 & 255] + d.i0 & 255] + a.i1 & 255] + b.i1 & 255] & 15,
            k = e.shifter[e.shifter[e.shifter[e.shifter[g.i0 & 255] + d.i1 & 255] + a.i0 & 255] + b.i0 & 255] & 15,
            j = e.shifter[e.shifter[e.shifter[e.shifter[g.i0 &
                255] + d.i1 & 255] + a.i0 & 255] + b.i1 & 255] & 15,
            l = e.shifter[e.shifter[e.shifter[e.shifter[g.i0 & 255] + d.i1 & 255] + a.i1 & 255] + b.i0 & 255] & 15,
            m = e.shifter[e.shifter[e.shifter[e.shifter[g.i0 & 255] + d.i1 & 255] + a.i1 & 255] + b.i1 & 255] & 15,
            o = e.shifter[e.shifter[e.shifter[e.shifter[g.i1 & 255] + d.i0 & 255] + a.i0 & 255] + b.i0 & 255] & 15,
            p = e.shifter[e.shifter[e.shifter[e.shifter[g.i1 & 255] + d.i0 & 255] + a.i0 & 255] + b.i1 & 255] & 15,
            n = e.shifter[e.shifter[e.shifter[e.shifter[g.i1 & 255] + d.i0 & 255] + a.i1 & 255] + b.i0 & 255] & 15,
            s = e.shifter[e.shifter[e.shifter[e.shifter[g.i1 &
                255] + d.i0 & 255] + a.i1 & 255] + b.i1 & 255] & 15,
            r = e.shifter[e.shifter[e.shifter[e.shifter[g.i1 & 255] + d.i1 & 255] + a.i0 & 255] + b.i0 & 255] & 15,
            u = e.shifter[e.shifter[e.shifter[e.shifter[g.i1 & 255] + d.i1 & 255] + a.i0 & 255] + b.i1 & 255] & 15,
            q = e.shifter[e.shifter[e.shifter[e.shifter[g.i1 & 255] + d.i1 & 255] + a.i1 & 255] + b.i0 & 255] & 15,
            x = e.shifter[e.shifter[e.shifter[e.shifter[g.i1 & 255] + d.i1 & 255] + a.i1 & 255] + b.i1 & 255] & 15,
            t = 0;
        t += g.f0 * d.f0 * a.f0 * b.f0 * c.sources[e.shifter[e.shifter[e.shifter[e.shifter[g.i0 & 255] + d.i0 & 255] + a.i0 & 255] + b.i0 & 255] & 15];
        t +=
            g.f0 * d.f0 * a.f0 * b.f1 * c.sources[f];
        t += g.f0 * d.f0 * a.f1 * b.f0 * c.sources[i];
        t += g.f0 * d.f0 * a.f1 * b.f1 * c.sources[h];
        t += g.f0 * d.f1 * a.f0 * b.f0 * c.sources[k];
        t += g.f0 * d.f1 * a.f0 * b.f1 * c.sources[j];
        t += g.f0 * d.f1 * a.f1 * b.f0 * c.sources[l];
        t += g.f0 * d.f1 * a.f1 * b.f1 * c.sources[m];
        t += g.f1 * d.f0 * a.f0 * b.f0 * c.sources[o];
        t += g.f1 * d.f0 * a.f0 * b.f1 * c.sources[p];
        t += g.f1 * d.f0 * a.f1 * b.f0 * c.sources[n];
        t += g.f1 * d.f0 * a.f1 * b.f1 * c.sources[s];
        t += g.f1 * d.f1 * a.f0 * b.f0 * c.sources[r];
        t += g.f1 * d.f1 * a.f0 * b.f1 * c.sources[u];
        t += g.f1 * d.f1 * a.f1 * b.f0 * c.sources[q];
        t += g.f1 * d.f1 * a.f1 * b.f1 * c.sources[x];
        return t
    };
    return c
});
define("goo/particles/ParticleInfluence", [], function () {
    return function (e) {
        e = e || {};
        this.prepare = e.prepare ? e.prepare : function () {};
        this.apply = e.apply ? e.apply : function () {};
        this.enabled = e.enabled !== void 0 ? e.enabled === !0 : !0
    }
});
define("goo/renderer/OcclusionPartitioner", ["goo/renderer/SimplePartitioner", "goo/renderer/scanline/SoftwareRenderer"], function (e, c) {
    function b(a) {
        this._viewFrustumCuller = new e;
        this.occluderList = [];
        this.renderer = new c(a);
        this.debugContext = a.debugContext;
        this.imagedata = this.debugContext.createImageData(a.width, a.height)
    }
    b.prototype.added = function (a) {
        this._viewFrustumCuller.added(a)
    };
    b.prototype.removed = function (a) {
        this._viewFrustumCuller.added(a)
    };
    b.prototype.process = function (a, b, c) {
        this._viewFrustumCuller.process(a,
            b, c);
        this._addVisibleOccluders(c);
        this.renderer.render(this.occluderList);
        a = this.renderer.performOcclusionCulling(c);
        for (b = c.length = 0; b < a.length; b++) c[b] = a[b]
    };
    b.prototype._writeDebugData = function () {
        this.imagedata.data.set(this.renderer.getColorData());
        this.debugContext.putImageData(this.imagedata, 0, 0)
    };
    b.prototype._addVisibleOccluders = function (a) {
        for (var b = this.occluderList.length = 0; b < a.length; b++) {
            var c = a[b];
            c.occluderComponent && this.occluderList.push(c)
        }
    };
    return b
});
define("goo/renderer/pass/DOFPass", "goo/renderer/Material,goo/renderer/pass/RenderTarget,goo/renderer/MeshData,goo/renderer/Shader,goo/renderer/shaders/ShaderFragment,goo/renderer/pass/RenderPass,goo/renderer/pass/FullscreenPass,goo/renderer/pass/BlurPass,goo/renderer/Util,goo/util/Skybox".split(","), function (e, c, b, a, d, g, f, i, h, k) {
    function j(a, b) {
        this.depthPass = new g(a, function (a) {
            return !(a instanceof k)
        });
        this.regularPass = new g(a);
        this.depthPass.overrideMaterial = e.createMaterial(l);
        this.outPass = new f(b ||
            m);
        this.outPass.useReadBuffer = !1;
        this.outPass.renderToScreen = !0;
        var d = window.innerWidth || 1,
            j = window.innerHeight || 1,
            i = h.nearestPowerOfTwo(Math.max(d, j));
        this.depthTarget = new c(d, j);
        this.regularTarget = new c(i / 2, i / 2);
        this.regularTarget2 = new c(d, j);
        this.regularTarget.generateMipmaps = !0;
        this.regularTarget.minFilter = "Trilinear";
        this.enabled = !0;
        this.clear = !1;
        this.needsSwap = !0
    }
    j.prototype.render = function (b, c, d, e) {
        this.depthPass.render(b, null, this.depthTarget, e);
        this.regularPass.render(b, null, this.regularTarget,
            e);
        this.regularPass.render(b, null, this.regularTarget2, e);
        this.outPass.material.setTexture(a.DEPTH_MAP, this.depthTarget);
        this.outPass.material.setTexture(a.DIFFUSE_MAP, this.regularTarget);
        this.outPass.material.setTexture("DIFFUSE_MIP", this.regularTarget2);
        this.outPass.render(b, c, d, e)
    };
    var l = {
        attributes: {
            vertexPosition: b.POSITION
        },
        uniforms: {
            viewMatrix: a.VIEW_MATRIX,
            projectionMatrix: a.PROJECTION_MATRIX,
            worldMatrix: a.WORLD_MATRIX,
            farPlane: a.FAR_PLANE
        },
        vshader: "attribute vec3 vertexPosition;\nuniform mat4 viewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 worldMatrix;\nvarying vec4 vPosition;\nvoid main(void) {\n\tvPosition = viewMatrix * worldMatrix * vec4(vertexPosition, 1.0);\n\tgl_Position = projectionMatrix * vPosition;\n}",
        fshader: ["precision mediump float;\nuniform float farPlane;", d.methods.packDepth, "varying vec4 vPosition;\nvoid main(void)\n{\n\tfloat linearDepth = min(-vPosition.z, farPlane) / farPlane;\n\tgl_FragColor = packDepth(linearDepth);\n}"].join("\n")
    }, m = {
            attributes: {
                vertexPosition: b.POSITION,
                vertexUV0: b.TEXCOORD0
            },
            uniforms: {
                worldMatrix: a.WORLD_MATRIX,
                viewProjectionMatrix: a.VIEW_PROJECTION_MATRIX,
                depthMap: a.DEPTH_MAP,
                diffuseMap: a.DIFFUSE_MAP,
                diffuseMip: "DIFFUSE_MIP",
                zfar: a.FAR_PLANE,
                focalDepth: 100,
                fStop: 2,
                CoC: 0.003,
                focalLength: 75,
                maxBlur: 16
            },
            vshader: "attribute vec3 vertexPosition;\nattribute vec2 vertexUV0;\nuniform mat4 viewProjectionMatrix;\nuniform mat4 worldMatrix;\nvarying vec2 texCoord0;\nvoid main(void) {\n\ttexCoord0 = vertexUV0;\n\tgl_Position = viewProjectionMatrix * worldMatrix * vec4(vertexPosition, 1.0);\n}",
            fshader: "uniform sampler2D diffuseMap;\nuniform sampler2D diffuseMip;\nuniform sampler2D depthMap;\nuniform float zfar; //camera clipping end\nuniform float focalDepth;\nuniform float focalLength;\nuniform float fStop;\nuniform float CoC;\nuniform float maxBlur;\nvarying vec2 texCoord0;\n" +
                d.methods.unpackDepth + "void main() \n{\n\tfloat depth = unpackDepth(texture2D(depthMap,texCoord0)) * zfar;\n\tfloat f = focalLength; //focal length in mm\n\tfloat d = focalDepth*1000.0; //focal plane in mm\n\tfloat o = depth*1000.0; //depth in mm\n\tfloat a = (o*f)/(o-f); \n\tfloat b = (d*f)/(d-f); \n\tfloat c = (d-f)/(d*fStop*CoC); \n\tfloat blur = clamp(abs(a-b)*c, 0.0, maxBlur);\n if (blur < 0.3) {\n   gl_FragColor = texture2D(diffuseMip, texCoord0);\n } else { \n   gl_FragColor = texture2D(diffuseMap, texCoord0, log2(blur));\n }\n gl_FragColor.a = 1.0;}"
        };
    return j
});
define("goo/renderer/pass/DepthPass", "goo/renderer/Material,goo/renderer/pass/RenderTarget,goo/renderer/MeshData,goo/renderer/Shader,goo/renderer/shaders/ShaderFragment,goo/renderer/pass/RenderPass,goo/renderer/pass/FullscreenPass,goo/renderer/pass/BlurPass".split(","), function (e, c, b, a, d, g, f, i) {
    function h(a, b) {
        this.depthPass = new g(a);
        this.depthPass.overrideMaterial = e.createMaterial(k);
        this.blurTarget = new c(256, 256);
        this.blurPass = new i({
            target: this.blurTarget
        });
        this.outPass = new f(b || j);
        this.outPass.useReadBuffer = !1;
        this.depthTarget = new c(window.innerWidth || 1, window.innerHeight || 1);
        this.enabled = !0;
        this.clear = !1;
        this.needsSwap = !0
    }
    h.prototype.render = function (b, c, d, e) {
        this.depthPass.render(b, null, this.depthTarget, e);
        this.blurPass.render(b, c, d, e);
        this.outPass.material.setTexture(a.DEPTH_MAP, this.depthTarget);
        this.outPass.material.setTexture(a.DIFFUSE_MAP, d);
        this.outPass.material.setTexture("BLUR_MAP", this.blurTarget);
        this.outPass.render(b, c, d, e)
    };
    var k = {
        attributes: {
            vertexPosition: b.POSITION
        },
        uniforms: {
            viewMatrix: a.VIEW_MATRIX,
            projectionMatrix: a.PROJECTION_MATRIX,
            worldMatrix: a.WORLD_MATRIX,
            farPlane: a.FAR_PLANE
        },
        vshader: "attribute vec3 vertexPosition;\nuniform mat4 viewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 worldMatrix;\nvarying vec4 vPosition;\nvoid main(void) {\n\tvPosition = viewMatrix * worldMatrix * vec4(vertexPosition, 1.0);\n\tgl_Position = projectionMatrix * vPosition;\n}",
        fshader: ["precision mediump float;\nuniform float farPlane;", d.methods.packDepth, "varying vec4 vPosition;\nvoid main(void)\n{\n\tfloat linearDepth = min(length(vPosition), farPlane) / farPlane;\n\tgl_FragColor = packDepth(linearDepth);\n}"].join("\n")
    },
        j = {
            attributes: {
                vertexPosition: b.POSITION,
                vertexUV0: b.TEXCOORD0
            },
            uniforms: {
                viewMatrix: a.VIEW_MATRIX,
                projectionMatrix: a.PROJECTION_MATRIX,
                worldMatrix: a.WORLD_MATRIX,
                depthMap: a.DEPTH_MAP,
                diffuseMap: a.DIFFUSE_MAP
            },
            vshader: "attribute vec3 vertexPosition;\nattribute vec2 vertexUV0;\nuniform mat4 viewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 worldMatrix;\nvarying vec2 texCoord0;\nvoid main(void) {\n\ttexCoord0 = vertexUV0;\n\tgl_Position = projectionMatrix * viewMatrix * worldMatrix * vec4(vertexPosition, 1.0);\n}",
            fshader: ["precision mediump float;\nuniform sampler2D depthMap;\nuniform sampler2D diffuseMap;\nvarying vec2 texCoord0;", d.methods.unpackDepth, "void main(void)\n{\n\tvec4 depthCol = texture2D(depthMap, texCoord0);\n\tvec4 diffuseCol = texture2D(diffuseMap, texCoord0);\n\tfloat depth = unpackDepth(depthCol);\n\tgl_FragColor = diffuseCol * vec4(depth);\n}"].join("\n")
        };
    return h
});
define("goo/renderer/pass/DoGPass", ["goo/renderer/Material", "goo/renderer/pass/FullscreenUtil", "goo/renderer/pass/RenderTarget", "goo/renderer/Util", "goo/renderer/shaders/ShaderLib"], function (e, c, b, a, d) {
    function g(f) {
        f = f || {};
        this.target = f.target !== void 0 ? f.target : null;
        var g = f.width !== void 0 ? f.width : 512,
            h = f.height !== void 0 ? f.height : 512,
            k = f.sigma !== void 0 ? f.sigma : 0.6,
            f = f.threshold !== void 0 ? f.threshold : 0.005;
        k > 2.5 && (k = 2.5);
        this.renderTargetX = new b(g, h);
        this.gaussian1 = new b(g, h);
        this.gaussian2 = new b(g,
            h);
        this.renderable = {
            meshData: c.quad,
            materials: []
        };
        this.convolutionShader1 = a.clone(d.convolution);
        this.convolutionShader2 = a.clone(d.convolution);
        this.differenceShader = a.clone(d.differenceOfGaussians);
        this.differenceShader.uniforms.threshold = f;
        this.differenceMaterial = e.createMaterial(this.differenceShader);
        var f = this.convolutionShader1.buildKernel(k),
            k = this.convolutionShader2.buildKernel(1.6 * k),
            j = f.length;
        this.convolutionShader1.defines = {
            KERNEL_SIZE_FLOAT: j.toFixed(1),
            KERNEL_SIZE_INT: j.toFixed(0)
        };
        j = k.length;
        this.convolutionShader2.defines = {
            KERNEL_SIZE_FLOAT: j.toFixed(1),
            KERNEL_SIZE_INT: j.toFixed(0)
        };
        this.convolutionShader1.uniforms.cKernel = f;
        this.convolutionShader2.uniforms.cKernel = k;
        this.blurX = [0.5 / g, 0];
        this.blurY = [0, 0.5 / h];
        this.convolutionMaterial1 = e.createMaterial(this.convolutionShader1);
        this.convolutionMaterial2 = e.createMaterial(this.convolutionShader2);
        this.enabled = !0;
        this.needsSwap = this.clear = !1
    }
    g.prototype.render = function (a, b, d) {
        this.renderable.materials[0] = this.convolutionMaterial1;
        this.convolutionMaterial1.setTexture("DIFFUSE_MAP", d);
        this.convolutionShader1.uniforms.uImageIncrement = this.blurX;
        a.render(this.renderable, c.camera, [], this.renderTargetX, !0);
        this.convolutionMaterial1.setTexture("DIFFUSE_MAP", this.renderTargetX);
        this.convolutionShader1.uniforms.uImageIncrement = this.blurY;
        a.render(this.renderable, c.camera, [], this.gaussian1, !0);
        this.renderable.materials[0] = this.convolutionMaterial2;
        this.convolutionMaterial2.setTexture("DIFFUSE_MAP", d);
        this.convolutionShader2.uniforms.uImageIncrement =
            this.blurX;
        a.render(this.renderable, c.camera, [], this.renderTargetX, !0);
        this.convolutionMaterial2.setTexture("DIFFUSE_MAP", this.renderTargetX);
        this.convolutionShader2.uniforms.uImageIncrement = this.blurY;
        a.render(this.renderable, c.camera, [], this.gaussian2, !0);
        this.renderable.materials[0] = this.differenceMaterial;
        this.differenceMaterial.setTexture("BLUR1", this.gaussian1);
        this.differenceMaterial.setTexture("BLUR2", this.gaussian2);
        this.differenceMaterial.setTexture("ORIGINAL", d);
        this.target !== null ? a.render(this.renderable,
            c.camera, [], this.target, this.clear) : a.render(this.renderable, c.camera, [], d, this.clear)
    };
    return g
});
define("goo/renderer/pass/NesPass", ["goo/renderer/TextureCreator", "goo/renderer/Material", "goo/renderer/pass/FullscreenUtil", "goo/renderer/shaders/ShaderLib"], function (e, c, b, a) {
    function d(a) {
        this.material = c.createMaterial(g);
        this.renderToScreen = !1;
        this.renderable = {
            meshData: b.quad,
            materials: [this.material]
        };
        this.mapping = (new e).loadTexture2D(a);
        this.mapping.minFilter = "NearestNeighborNoMipMaps";
        this.mapping.magFilter = "NearestNeighbor";
        this.mapping.generateMipmaps = !1;
        this.enabled = !0;
        this.clear = !1;
        this.needsSwap = !0
    }
    d.prototype.render = function (a, c, d) {
        this.material.setTexture("DIFFUSE_MAP", d);
        this.material.setTexture("COLOR_MAPPING", this.mapping);
        this.renderToScreen ? a.render(this.renderable, b.camera, [], null, this.clear) : a.render(this.renderable, b.camera, [], c, this.clear)
    };
    var g = {
        attributes: a.copy.attributes,
        uniforms: {
            diffuse: "DIFFUSE_MAP",
            mapping: "COLOR_MAPPING",
            $link: a.copy.uniforms
        },
        vshader: a.copy.vshader,
        fshader: "precision mediump float;\nuniform sampler2D diffuse;\nuniform sampler2D mapping;\nvarying vec2 texCoord0;\nvoid main() {\n\tvec4 texCol = texture2D( diffuse, texCoord0 );\n\tfloat r = floor(texCol.r * 31.0);\n\tfloat g = floor(texCol.g * 31.0);\n\tfloat b = floor(texCol.b * 31.0);\n\tvec4 texPalette = texture2D( mapping, vec2((r * 32.0 + g)/1024.0, b / 32.0) );\n\tgl_FragColor = vec4( texPalette.rgb, 1.0 );\n}"
    };
    return d
});
define("goo/renderer/pass/SSAOPass", "goo/renderer/Material,goo/renderer/pass/RenderTarget,goo/renderer/Util,goo/renderer/MeshData,goo/renderer/Shader,goo/renderer/shaders/ShaderFragment,goo/renderer/pass/RenderPass,goo/renderer/pass/FullscreenPass,goo/renderer/pass/BlurPass,goo/renderer/shaders/ShaderLib".split(","), function (e, c, b, a, d, g, f, i, h, k) {
    function j(a) {
        this.depthPass = new f(a);
        this.depthPass.clearColor.set(1, 1, 1, 1);
        this.depthPass.overrideMaterial = e.createMaterial(l);
        var a = window.innerWidth / 4,
            d = window.innerHeight / 4,
            g = b.clone(k.ssao);
        g.uniforms.size = [a, d];
        this.outPass = new i(g);
        this.outPass.useReadBuffer = !1;
        this.blurPass = new h({
            sizeX: a,
            sizeY: d
        });
        this.depthTarget = new c(a, d, {
            magFilter: "NearestNeighbor",
            minFilter: "NearestNeighborNoMipMaps"
        });
        this.enabled = !0;
        this.clear = !1;
        this.needsSwap = !0
    }
    j.prototype.render = function (a, b, c, e) {
        this.depthPass.render(a, null, this.depthTarget, e);
        this.outPass.material.setTexture(d.DIFFUSE_MAP, c);
        this.outPass.material.setTexture(d.DEPTH_MAP, this.depthTarget);
        this.outPass.render(a,
            b, c, e)
    };
    var l = {
        attributes: {
            vertexPosition: a.POSITION
        },
        uniforms: {
            viewMatrix: d.VIEW_MATRIX,
            projectionMatrix: d.PROJECTION_MATRIX,
            worldMatrix: d.WORLD_MATRIX
        },
        vshader: "attribute vec3 vertexPosition;\nuniform mat4 viewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 worldMatrix;\nvoid main(void) {\n\tgl_Position = projectionMatrix * viewMatrix * worldMatrix * vec4(vertexPosition, 1.0);\n}",
        fshader: ["precision mediump float;", g.methods.packDepth, "void main(void) {\n\tgl_FragColor = packDepth(gl_FragCoord.z);\n}"].join("\n")
    };
    return j
});
define("goo/scripts/HeightMapBoundingScript", [], function () {
    function e(c, b) {
        var a = new Image;
        a.src = c;
        this.canvas = document.createElement("canvas");
        this.con2d = this.canvas.getContext("2d");
        this.loaded = !1;
        var d = this;
        a.onload = function () {
            d.canvas.width = a.width;
            d.canvas.height = a.height;
            d.con2d.drawImage(a, 0, 0);
            d.loaded = !0;
            b(this)
        }
    }
    e.prototype.getMatrix = function () {
        for (var c = [], b = 0; b < this.canvas.width; b++) {
            c.push([]);
            for (var a = 0; a < this.canvas.height; a++) c[b].push(this.getAt(b, a))
        }
        return c
    };
    e.prototype.getAt = function (c,
        b) {
        return c < 0 || c > this.canvas.width || b < 0 || b > this.canvas.height ? 0 : this.con2d.getImageData(c, b, 1, 1).data[0] / 255 * 8
    };
    e.prototype.getInterpolated = function (c, b) {
        var a = this.getAt(Math.ceil(c), Math.ceil(b)),
            d = this.getAt(Math.ceil(c), Math.floor(b)),
            e = this.getAt(Math.floor(c), Math.ceil(b)),
            f = this.getAt(Math.floor(c), Math.floor(b)),
            i = c - Math.floor(c),
            h = b - Math.floor(b);
        return (a * i + e * (1 - i)) * h + (d * i + f * (1 - i)) * (1 - h)
    };
    e.prototype.run = function (c) {
        c = c.transformComponent.transform.translation;
        c.data[1] = this.getInterpolated(c.data[0],
            c.data[2])
    };
    return e
});
define("goo/scripts/MouseLookControlScript", ["goo/math/Vector3", "goo/math/Matrix3x3", "goo/math/MathUtils"], function (e, c, b) {
    function a(a) {
        a = a || {};
        this.name = "MouseLookControlScript";
        this.domElement = a.domElement || null;
        this.turnSpeedHorizontal = !isNaN(a.turnSpeedHorizontal) ? a.turnSpeed : 0.01;
        this.turnSpeedVertical = !isNaN(a.turnSpeedVertical) ? a.turnSpeed : 0.01;
        this.dragOnly = a.dragOnly !== void 0 ? a.dragOnly === !0 : !0;
        this.dragButton = !isNaN(a.dragButton) ? a.dragButton : -1;
        this.worldUpVector = new e(a.worldUpVector) ||
            new e(0, 1, 0);
        this.localLeftVector = new e(a.localLeftVector) || new e(-1, 0, 0);
        this.onRun = a.onRun;
        this.maxAscent = a.maxAscent !== void 0 ? a.maxAscent : 89.95 * b.DEG_TO_RAD;
        this.minAscent = a.minAscent !== void 0 ? a.minAscent : -89.95 * b.DEG_TO_RAD;
        this.calcVector = new e;
        this.calcMat1 = new c;
        this.calcMat2 = new c;
        this.rotY = this.rotX = 0;
        this.resetMouseState();
        this.domElement && this.setupMouseControls()
    }
    a.prototype.resetMouseState = function () {
        this.mouseState = {
            buttonDown: !1,
            lastX: NaN,
            lastY: NaN,
            dX: 0,
            dY: 0
        }
    };
    a.prototype.updateButtonState =
        function (a, b) {
            this.domElement !== document && this.domElement.focus();
            if (this.dragOnly && (this.dragButton === -1 || this.dragButton === a.button)) this.mouseState.buttonDown = b, a.preventDefault()
    };
    a.prototype.updateDeltas = function (a) {
        isNaN(this.mouseState.lastX) || isNaN(this.mouseState.lastY) ? (this.mouseState.dX = 0, this.mouseState.dY = 0) : (this.mouseState.dX = a.clientX - this.mouseState.lastX, this.mouseState.dY = a.clientY - this.mouseState.lastY);
        this.mouseState.lastX = a.clientX;
        this.mouseState.lastY = a.clientY
    };
    var d, g,
        f, i = function (a) {
            this.resetMouseState();
            this.updateButtonState(a, !0);
            g = h.bind(this);
            f = k.bind(this);
            document.addEventListener("mousemove", g, !1);
            document.addEventListener("mouseup", f, !1);
            document.addEventListener("mouseout", f, !1)
        }, h = function (a) {
            this.updateDeltas(a)
        }, k = function (a) {
            this.updateButtonState(a, !1);
            document.removeEventListener("mousemove", g);
            document.removeEventListener("mouseup", f);
            document.removeEventListener("mouseout", f)
        };
    a.prototype.setupMouseControls = function () {
        d = i.bind(this);
        this.domElement.addEventListener("mousedown",
            d, !1)
    };
    a.prototype.run = function (a, b, c) {
        if (c && !this.domElement && c.domElement) this.domElement = c.domElement, this.setupMouseControls();
        if (a = a.transformComponent) {
            b = a.transform;
            b.rotation.toAngles(this.calcVector);
            this.rotY = this.calcVector.x;
            this.rotX = this.calcVector.y;
            if (!(this.dragOnly && !this.mouseState.buttonDown || this.mouseState.dX === 0 && this.mouseState.dY === 0)) {
                var c = this.turnSpeedHorizontal,
                    d = this.turnSpeedVertical;
                this.mouseState.dX !== 0 && (this.rotX -= c * this.mouseState.dX);
                if (this.mouseState.dY !==
                    0)
                    if (this.rotY -= d * this.mouseState.dY, this.rotY > this.maxAscent) this.rotY = this.maxAscent;
                    else if (this.rotY < this.minAscent) this.rotY = this.minAscent;
                b.rotation.fromAngles(this.rotY, this.rotX, 0);
                a.setUpdated()
            }
            this.mouseState.dX = 0;
            this.mouseState.dY = 0
        }
    };
    return a
});
define("goo/scripts/RotationControlScript", ["goo/math/Matrix3x3"], function (e) {
    function c(a) {
        a = a || {};
        this.bindings = {
            attach: b.bind(this),
            update: null,
            remove: null
        };
        this.element = a.domElement || null;
        this.name = "RotationControlScript";
        this.states = {
            dirty: !1,
            x: null,
            y: null,
            dx: null,
            dy: null
        };
        this.element && this.setupMouseControls()
    }
    var b = function (b) {
        b = b.touches && b.touches.length === 1 ? b.touches[0] : b;
        this.states.dx = 0;
        this.states.dy = 0;
        this.states.x = b.pageX;
        this.states.y = b.pageY;
        this.bindings.update = a.bind(this);
        this.bindings.remove =
            d.bind(this);
        document.addEventListener("mousemove", this.bindings.update, !1);
        document.addEventListener("touchmove", this.bindings.update, !1);
        document.addEventListener("mouseup", this.bindings.remove, !1);
        document.addEventListener("touchend", this.bindings.remove, !1)
    }, a = function (a) {
            a = a.touches && a.touches.length === 1 ? a.touches[0] : a;
            this.states.dirty = !0;
            this.states.dx += a.pageX - this.states.x;
            this.states.dy += a.pageY - this.states.y;
            this.states.x = a.pageX;
            this.states.y = a.pageY
        }, d = function () {
            document.removeEventListener("mousemove",
                this.bindings.update);
            document.removeEventListener("touchmove", this.bindings.update);
            document.removeEventListener("mouseup", this.bindings.remove);
            document.removeEventListener("touchend", this.bindings.remove)
        };
    c.prototype.setupMouseControls = function () {
        this.element.addEventListener("mousedown", this.bindings.attach, !1);
        this.element.addEventListener("touchstart", this.bindings.attach, !1)
    };
    c.prototype.run = function (a, b, c) {
        if (c && !this.element && c.domElement) this.element = c.domElement, this.setupMouseControls();
        if (this.states.dirty) {
            var d = Math.PI * this.states.dy / this.element.clientHeight,
                c = Math.PI * this.states.dx / this.element.clientWidth,
                b = Math.cos(d),
                d = Math.sin(d),
                k = Math.cos(c),
                c = Math.sin(c),
                b = new e(k, d * c, 0 - b * c, 0, b, d, c, 0 - d * k, b * k);
            e.combine(b, a.transformComponent.transform.rotation, a.transformComponent.transform.rotation);
            a.transformComponent.setUpdated();
            this.states.dirty = !1;
            this.states.dx = 0;
            this.states.dy = 0
        }
    };
    return c
});
define("goo/scripts/SparseHeightMapBoundingScript", [], function () {
    function e(c) {
        this.elevationData = c
    }
    e.prototype.getClosest = function (c, b) {
        for (var a = Number.MAX_VALUE, d = -1, e = 0; e < this.elevationData.length; e += 3) {
            var f = Math.pow(this.elevationData[e + 0] - c, 2) + Math.pow(this.elevationData[e + 2] - b, 2);
            f < a && (a = f, d = e)
        }
        return this.elevationData[d + 1]
    };
    e.prototype.run = function (c) {
        var c = c.transformComponent.transform.translation,
            b = this.getClosest(c.data[0], c.data[2]);
        c.data[1] -= (c.data[1] - b) * 0.1
    };
    return e
});
define("goo/scripts/SplineInterpolator", ["goo/math/Matrix4x4", "goo/math/Vector4"], function (e, c) {
    function b(a) {
        a = a || {};
        this.controlPoint = 0;
        this.controlPoints = a.controlPoints || [];
        this.elapsedTime = 0;
        this.enabled = a.enabled || !0;
        this.firstIteration = !0;
        this.tolerance = a.tolerance || 0.01;
        this.beforeFunction = a.beforeFunction || function (a) {
            return a.transformComponent.transform.translation.clone().data
        };
        this.updateFunction = a.updateFunction || function (a, b) {
            a.transformComponent.transform.translation.set(b);
            a.transformComponent.setUpdated()
        };
        this.afterFunction = a.afterFunction || function () {}
    }
    b.CATMULL_ROM = new e(-0.5, 1, -0.5, 0, 1.5, -2.5, 0, 1, -1.5, 2, 0.5, 0, 0.5, -0.5, 0, 0);
    b.UNIFORM_CUBIC = new e(-0.16667, 0.5, -0.5, 0.16667, 0.5, -1, 0, 0.66667, -0.5, 0.5, 0.5, 0.16667, 0.16667, 0, 0, 0);
    b.prototype.run = function (a, d) {
        if (this.firstIteration) {
            this.firstIteration = !1;
            try {
                this.controlPoints.unshift({
                    time: 0,
                    value: this.beforeFunction(a)
                })
            } catch (e) {
                this.enabled = !1;
                return
            }
        }
        for (var f = Math.min(Math.max(this.controlPoint - 1, 0), this.controlPoints.length - 1), i = Math.min(Math.max(this.controlPoint +
                0, 0), this.controlPoints.length - 1), h = Math.min(Math.max(this.controlPoint + 1, 0), this.controlPoints.length - 1), k = Math.min(Math.max(this.controlPoint + 2, 0), this.controlPoints.length - 1), j = this.controlPoints[h].time > this.controlPoints[i].time ? (this.elapsedTime - this.controlPoints[i].time) / (this.controlPoints[h].time - this.controlPoints[i].time) : 0, j = b.CATMULL_ROM.applyPre(new c(j * j * j, j * j, j, 1)), l = Array(this.controlPoints[0].value.length), m = 0, o = 0; o < l.length; o++) l[o] = 0, l[o] += this.controlPoints[f].value[o] * j[0],
        l[o] += this.controlPoints[i].value[o] * j[1], l[o] += this.controlPoints[h].value[o] * j[2], l[o] += this.controlPoints[k].value[o] * j[3], m += Math.abs(this.controlPoints[this.controlPoints.length - 1].value[o] - l[o]);
        try {
            this.updateFunction(a, l)
        } catch (p) {
            this.enabled = !1;
            return
        }
        this.elapsedTime += d;
        this.elapsedTime >= this.controlPoints[h].time && this.controlPoint++;
        if (this.controlPoint >= this.controlPoints.length || m < this.tolerance) {
            try {
                this.afterFunction(a)
            } catch (n) {}
            this.enabled = !1
        }
    };
    return b
});
define("goo/shapes/FilledPolygon", ["goo/renderer/MeshData", "goo/math/MathUtils"], function (e, c) {
    function b(a, b) {
        this.verts = a;
        var c;
        if (b) c = b;
        else {
            var f = a.length / 3;
            if (f < 3) c = [];
            else {
                c = [];
                for (var i = [], h = 0; h < f; h++) i.push(h);
                for (h = 0; f > 3;) {
                    var k = i[(h + 0) % f],
                        j = i[(h + 1) % f],
                        l = i[(h + 2) % f],
                        m = a[3 * k],
                        o = a[3 * k + 1],
                        p = a[3 * j],
                        n = a[3 * j + 1],
                        s = a[3 * l],
                        r = a[3 * l + 1],
                        u = !1;
                    if ((o - n) * (s - p) + (p - m) * (r - n) >= 0)
                        for (var u = !0, q = 0; q < f; q++) {
                            var x = i[q];
                            if (!(x === k || x === j || x === l)) {
                                var t = s - m,
                                    w = r - o,
                                    z = p - m,
                                    v = n - o,
                                    A = a[3 * x] - m,
                                    y = a[3 * x + 1] - o,
                                    x = t * t + w * w,
                                    B = t * z +
                                        w * v,
                                    t = t * A + w * y,
                                    w = z * z + v * v,
                                    z = z * A + v * y,
                                    v = 1 / (x * w - B * B),
                                    A = (w * t - B * z) * v,
                                    x = (x * z - B * t) * v;
                                if (A >= 0 && x >= 0 && A + x < 1) {
                                    u = !1;
                                    break
                                }
                            }
                        }
                    if (u) c.push(k, j, l), i.splice((h + 1) % f, 1), f--, h = 0;
                    else if (h++ > 3 * f) break
                }
                c.push(i[0], i[1], i[2])
            }
        }
        this.indices = c;
        c = e.defaultMap([e.POSITION, e.NORMAL, e.TEXCOORD0]);
        e.call(this, c, this.verts.length / 3, this.indices.length);
        this.rebuild()
    }
    b.prototype = Object.create(e.prototype);
    b.prototype.rebuild = function () {
        var a, b, g, f;
        this.getAttributeBuffer(e.POSITION).set(this.verts);
        var i = [];
        for (f = 0; f < this.indices.length; f +=
            3) a = c.getTriangleNormal(this.verts[this.indices[f + 0] * 3 + 0], this.verts[this.indices[f + 0] * 3 + 1], this.verts[this.indices[f + 0] * 3 + 2], this.verts[this.indices[f + 1] * 3 + 0], this.verts[this.indices[f + 1] * 3 + 1], this.verts[this.indices[f + 1] * 3 + 2], this.verts[this.indices[f + 2] * 3 + 0], this.verts[this.indices[f + 2] * 3 + 1], this.verts[this.indices[f + 2] * 3 + 2]), i[this.indices[f + 0] * 3 + 0] = a[0], i[this.indices[f + 0] * 3 + 1] = a[1], i[this.indices[f + 0] * 3 + 2] = a[2], i[this.indices[f + 1] * 3 + 0] = a[0], i[this.indices[f + 1] * 3 + 1] = a[1], i[this.indices[f + 1] *
            3 + 2] = a[2], i[this.indices[f + 2] * 3 + 0] = a[0], i[this.indices[f + 2] * 3 + 1] = a[1], i[this.indices[f + 2] * 3 + 2] = a[2];
        this.getAttributeBuffer(e.NORMAL).set(i);
        this.getIndexBuffer().set(this.indices);
        i = [];
        a = this.verts;
        var h = a[0];
        b = a[0];
        g = a[1];
        f = a[1];
        for (var k = 3; k < a.length; k += 3) h = h < a[k + 0] ? h : a[k + 0], b = b > a[k + 0] ? b : a[k + 0], g = g < a[k + 1] ? g : a[k + 1], f = f > a[k + 1] ? f : a[k + 1];
        a = h;
        b -= a;
        h = f - g;
        for (f = 0; f < this.verts.length; f += 3) i.push((this.verts[f + 0] - a) / b, (this.verts[f + 1] - g) / h);
        this.getAttributeBuffer(e.TEXCOORD0).set(i);
        return this
    };
    return b
});
define("goo/shapes/Surface", ["goo/renderer/MeshData", "goo/math/MathUtils"], function (e, c) {
    function b(a, b, c) {
        this.verts = a;
        this.vertsPerLine = b || 2;
        this.verticallyClosed = !! c;
        a = e.defaultMap([e.POSITION, e.NORMAL, e.TEXCOORD0]);
        b = this.verts.length / 3;
        e.call(this, a, b, (b / this.vertsPerLine - 1) * (this.vertsPerLine - 1) * 6);
        this.rebuild()
    }
    b.prototype = Object.create(e.prototype);
    b.prototype.rebuild = function () {
        var a, b, g, f;
        this.getAttributeBuffer(e.POSITION).set(this.verts);
        var i = [];
        a = [];
        var h = [];
        g = this.verts.length / 3 / this.vertsPerLine;
        for (f = 0; f < g - 1; f++) {
            for (b = 0; b < this.vertsPerLine - 1; b++) {
                var h = (f + 0) * this.vertsPerLine + (b + 0),
                    k = (f + 1) * this.vertsPerLine + (b + 0),
                    j = (f + 0) * this.vertsPerLine + (b + 1);
                i.push(h, k, j, j, k, (f + 1) * this.vertsPerLine + (b + 1));
                h = c.getTriangleNormal(this.verts[h * 3 + 0], this.verts[h * 3 + 1], this.verts[h * 3 + 2], this.verts[k * 3 + 0], this.verts[k * 3 + 1], this.verts[k * 3 + 2], this.verts[j * 3 + 0], this.verts[j * 3 + 1], this.verts[j * 3 + 2]);
                a.push(h[0], h[1], h[2])
            }
            this.verticallyClosed && (h = (f + 0) * this.vertsPerLine + 0, k = (f + 1) * this.vertsPerLine + 0, j = (f + 0) * this.vertsPerLine +
                1, h = c.getTriangleNormal(this.verts[h * 3 + 0], this.verts[h * 3 + 1], this.verts[h * 3 + 2], this.verts[k * 3 + 0], this.verts[k * 3 + 1], this.verts[k * 3 + 2], this.verts[j * 3 + 0], this.verts[j * 3 + 1], this.verts[j * 3 + 2]));
            a.push(h[0], h[1], h[2])
        }
        f--;
        for (b = 0; b < this.vertsPerLine - 1; b++) h = (f + 0) * this.vertsPerLine + (b + 0), k = (f + 1) * this.vertsPerLine + (b + 0), j = (f + 0) * this.vertsPerLine + (b + 1), h = c.getTriangleNormal(this.verts[h * 3 + 0], this.verts[h * 3 + 1], this.verts[h * 3 + 2], this.verts[k * 3 + 0], this.verts[k * 3 + 1], this.verts[k * 3 + 2], this.verts[j * 3 + 0], this.verts[j *
            3 + 1], this.verts[j * 3 + 2]), a.push(h[0], h[1], h[2]);
        a.push(h[0], h[1], h[2]);
        this.getAttributeBuffer(e.NORMAL).set(a);
        this.getIndexBuffer().set(i);
        i = [];
        a = this.verts;
        h = a[0];
        b = a[0];
        g = a[1];
        f = a[1];
        for (k = 3; k < a.length; k += 3) h = h < a[k + 0] ? h : a[k + 0], b = b > a[k + 0] ? b : a[k + 0], g = g < a[k + 1] ? g : a[k + 1], f = f > a[k + 1] ? f : a[k + 1];
        a = h;
        b -= a;
        h = f - g;
        for (f = 0; f < this.verts.length; f += 3) i.push((this.verts[f + 0] - a) / b, (this.verts[f + 1] - g) / h);
        this.getAttributeBuffer(e.TEXCOORD0).set(i);
        return this
    };
    b.createFromHeightMap = function (a, c, e) {
        for (var c = c || 1, e =
                e || 1, f = [], i = 0; i < a.length; i++)
            for (var h = 0; h < a[i].length; h++) f.push(i * c, h * e, a[i][h]);
        return new b(f, a[0].length)
    };
    return b
});
define("goo/shapes/PolyLine", ["goo/renderer/MeshData", "goo/shapes/Surface"], function (e, c) {
    function b(a, b) {
        this.verts = a;
        this.closed = !! b;
        var c = e.defaultMap([e.POSITION]);
        e.call(this, c, this.verts.length / 3, this.verts.length / 3);
        this.indexModes = this.closed ? ["LineLoop"] : ["LineStrip"];
        this.rebuild()
    }
    b.prototype = Object.create(e.prototype);
    b.prototype.rebuild = function () {
        this.getAttributeBuffer(e.POSITION).set(this.verts);
        for (var a = [], b = this.verts.length / 3, c = 0; c < b; c++) a.push(c);
        this.getIndexBuffer().set(a);
        return this
    };
    b.prototype.mul = function (a) {
        if (a instanceof b) {
            for (var d = a.verts.length / 3, e = [], f = 0; f < this.verts.length; f += 3)
                for (var i = 0; i < a.verts.length; i += 3) e.push(this.verts[f + 0] + a.verts[i + 0], this.verts[f + 1] + a.verts[i + 1], this.verts[f + 2] + a.verts[i + 2]);
            return new c(e, d)
        }
    };
    b.prototype.pipe = function (a) {
        if (a instanceof b) {
            for (var d = a.verts.length / 3, e = [], f = 0; f < this.verts.length; f += 3) {
                var i;
                var h = this.verts,
                    k = f / 3,
                    j = h.length / 3,
                    l = void 0,
                    m = void 0,
                    o = void 0,
                    p = i = void 0,
                    n = void 0;
                k === 0 ? (o = h[0], i = h[2], p = h[3], n = h[5],
                    i = Math.atan2(n - i, p - o) - Math.PI / 2) : k === j - 1 ? (l = h[(j - 2) * 3 + 0], m = h[(j - 2) * 3 + 2], o = h[(j - 1) * 3 + 0], i = h[(j - 1) * 3 + 2], i = Math.atan2(i - m, o - l) - Math.PI / 2) : (l = h[(k - 1) * 3 + 0], m = h[(k - 1) * 3 + 2], o = h[k * 3 + 0], i = h[k * 3 + 2], p = h[(k + 1) * 3 + 0], n = h[(k + 1) * 3 + 2], h = o - l, m = i - m, o = p - o, i = n - i, p = Math.sqrt(h * h + m * m), n = h / p, p = m / p, m = Math.sqrt(o * o + i * i), i = Math.atan2(p + i / m, n + o / m) - Math.PI / 2);
                for (n = 0; n < a.verts.length; n += 3) e.push(this.verts[f + 0] + a.verts[n + 2] * Math.cos(i), this.verts[f + 1] + a.verts[n + 1], this.verts[f + 2] + a.verts[n + 2] * Math.sin(i))
            }
            return new c(e, d)
        } else console.error("pipe operation can only be applied to PolyLines")
    };
    b.prototype.lathe = function (a) {
        for (var a = a || 8, b = Math.PI * 2 / a, e = [], f = 0; f < this.verts.length; f += 3)
            for (var i = 0, h = 0; i <= a; i++, h += b) e.push(Math.cos(h) * this.verts[f + 0], this.verts[f + 1], Math.sin(h) * this.verts[f + 0]);
        return new c(e, a + 1, !0)
    };
    b.prototype.concat = function (a, c) {
        if (a instanceof b) return new b(this.verts.concat(a.verts), c);
        else console.error("concat operation can only be applied to PolyLines")
    };
    b.fromCubicBezier = function (a, c, e) {
        if (a.length !== 12) console.error("PolyLine.fromCubicBezier takes an array of exactly 12 coordinates");
        else {
            for (var c = c || 16, f = [], i = [], h = [], k = [], j = [], l = [], m = [], e = e || 0; e <= c; e++) {
                var o = e / c;
                i[0] = a[0] + (a[3] - a[0]) * o;
                i[1] = a[1] + (a[4] - a[1]) * o;
                i[2] = a[2] + (a[5] - a[2]) * o;
                h[0] = a[3] + (a[6] - a[3]) * o;
                h[1] = a[4] + (a[7] - a[4]) * o;
                h[2] = a[5] + (a[8] - a[5]) * o;
                k[0] = a[6] + (a[9] - a[6]) * o;
                k[1] = a[7] + (a[10] - a[7]) * o;
                k[2] = a[8] + (a[11] - a[8]) * o;
                j[0] = i[0] + (h[0] - i[0]) * o;
                j[1] = i[1] + (h[1] - i[1]) * o;
                j[2] = i[2] + (h[2] - i[2]) * o;
                l[0] = h[0] + (k[0] - h[0]) * o;
                l[1] = h[1] + (k[1] - h[1]) * o;
                l[2] = h[2] + (k[2] - h[2]) * o;
                m[0] = j[0] + (l[0] - j[0]) * o;
                m[1] = j[1] + (l[1] - j[1]) * o;
                m[2] = j[2] +
                    (l[2] - j[2]) * o;
                f.push(m[0], m[1], m[2])
            }
            return new b(f)
        }
    };
    b.fromCubicSpline = function (a, c, e) {
        if (e) {
            if (a.length % 3 !== 0 && a.length / 3 % 3 !== 0) {
                console.error("Wrong number of coordinates supplied in first argument to PolyLine.fromCubicSpline");
                return
            }
            e = a.length / 3;
            e /= 3;
            for (var f = b.fromCubicBezier(a.slice(0, 12), c, 1), i = 1; i < e - 1; i++) var h = b.fromCubicBezier(a.slice(i * 9, i * 9 + 12), c, 1),
            f = f.concat(h);
            h = b.fromCubicBezier(a.slice(i * 9, i * 9 + 9).concat(a.slice(0, 3)), c, 1);
            f = f.concat(h)
        } else {
            if (a.length % 3 !== 0 && a.length / 3 % 3 !== 1) {
                console.error("Wrong number of coordinates supplied in first argument to PolyLine.fromCubicSpline");
                return
            }
            e = a.length / 3;
            e = (e - 1) / 3;
            f = b.fromCubicBezier(a.slice(0, 12), c, 1);
            for (i = 1; i < e; i++) h = b.fromCubicBezier(a.slice(i * 9, i * 9 + 12), c, 1), f = f.concat(h)
        }
        return f
    };
    return b
});
define("goo/shapes/ProjectedGrid", "goo/renderer/MeshData,goo/math/Vector2,goo/math/Vector3,goo/math/Vector4,goo/math/Matrix4x4,goo/renderer/Camera,goo/math/MathUtils".split(","), function (e, c, b, a, d, g, f) {
    function i(f, i) {
        this.densityX = f !== void 0 ? f : 20;
        this.densityY = i !== void 0 ? i : 20;
        this.projectorCamera = new g(45, 1, 0.1, 2E3);
        this.mainCamera = new g(45, 1, 0.1, 2E3);
        this.freezeProjector = !1;
        this.upperBound = 20;
        this.origin = new a;
        this.direction = new a;
        this.source = new c;
        this.rangeMatrix = new d;
        this.intersectBottomLeft =
            new a;
        this.intersectTopLeft = new a;
        this.intersectTopRight = new a;
        this.intersectBottomRight = new a;
        this.planeIntersection = new b;
        this.freezeProjector = !1;
        this.projectorMinHeight = 50;
        this.intersections = [];
        for (var j = 0; j < 24; j++) this.intersections.push(new b);
        this.connections = [0, 3, 1, 2, 0, 4, 1, 5, 2, 6, 3, 7, 4, 7, 5, 6];
        var j = this.densityX * this.densityY,
            l = (this.densityX - 1) * (this.densityY - 1) * 6,
            m = e.defaultMap([e.POSITION, e.TEXCOORD0]);
        e.call(this, m, j, l);
        this.rebuild()
    }
    i.prototype = Object.create(e.prototype);
    i.prototype.update =
        function (c) {
            var e = this.upperBound,
                g = this.mainCamera;
            this.freezeProjector || g.copy(c);
            c = g.translation;
            c.y > 0 && c.y < e + g.near ? g.translation.setd(c.x, e + g.near, c.z) : c.y < 0 && c.y > -e - g.near && g.translation.setd(c.x, -e - g.near, c.z);
            for (var i = g.calculateFrustumCorners(), m = 0, o = new b, p = 0; p < 8; p++) {
                var c = this.connections[p * 2],
                    n = this.connections[p * 2 + 1];
                (i[c].y > e && i[n].y < e || i[c].y < e && i[n].y > e) && this.getWorldIntersectionSimple(e, i[c], i[n], this.intersections[m++], o);
                (i[c].y > -e && i[n].y < -e || i[c].y < -e && i[n].y > -e) && this.getWorldIntersectionSimple(-e,
                        i[c], i[n], this.intersections[m++], o)
            }
            for (p = 0; p < 8; p++) i[p].y < e && i[p].y > -e && this.intersections[m++].set(i[p]);
            if (m === 0) return !1;
            e = this.projectorCamera;
            e.copy(g);
            if (e.translation.y > 0 && e._direction.y > 0 || e.translation.y < 0 && e._direction.y < 0) e._direction.y = -e._direction.y, c = new b, c.setv(e._direction).cross(e._left).normalize(), e._up.setv(c);
            c = this.source;
            p = this.planeIntersection;
            c.set(0.5, 0.5);
            this.getWorldIntersection(0, c, e.getViewProjectionInverseMatrix(), p);
            g = e.translation;
            g.y > 0 && g.y < this.projectorMinHeight *
                2 ? (i = (this.projectorMinHeight * 2 - g.y) / (this.projectorMinHeight * 2), e.translation.setd(g.x, this.projectorMinHeight * 2 - this.projectorMinHeight * i, g.z)) : g.y < 0 && g.y > -this.projectorMinHeight * 2 && (i = (-this.projectorMinHeight * 2 - g.y) / (-this.projectorMinHeight * 2), e.translation.setd(g.x, -this.projectorMinHeight * 2 + this.projectorMinHeight * i, g.z));
            p.subv(e.translation);
            p.y = 0;
            g = p.length();
            if (g > Math.abs(e.translation.y)) p.normalize(), p.mul(Math.abs(e.translation.y));
            else if (g < f.EPSILON) p.addv(e._up), p.y = 0, p.normalize(),
            p.mul(0.1);
            p.addv(e.translation);
            p.y = 0;
            e.lookAt(p, b.UNIT_Y);
            i = e.getViewProjectionMatrix();
            o = new a;
            g = this.intersections;
            for (p = 0; p < m; p++) o.set(g[p].x, 0, this.intersections[p].z, 1), i.applyPost(o), g[p].set(o.x, o.y, 0), g[p].div(o.w);
            for (var i = Number.MAX_VALUE, o = -Number.MAX_VALUE, n = Number.MAX_VALUE, s = -Number.MAX_VALUE, p = 0; p < m; p++) {
                if (g[p].x < i) i = g[p].x;
                if (g[p].x > o) o = g[p].x;
                if (g[p].y < n) n = g[p].y;
                if (g[p].y > s) s = g[p].y
            }
            m = this.rangeMatrix;
            m.setIdentity();
            m.e00 = o - i;
            m.e11 = s - n;
            m.e03 = i;
            m.e13 = n;
            e = e.getViewProjectionInverseMatrix();
            d.combine(e, m, m);
            c.set(0.5, 0.5);
            this.getWorldIntersectionHomogenous(0, c, m, this.intersectBottomLeft);
            c.set(0.5, 1);
            this.getWorldIntersectionHomogenous(0, c, m, this.intersectTopLeft);
            c.set(1, 1);
            this.getWorldIntersectionHomogenous(0, c, m, this.intersectTopRight);
            c.set(1, 0.5);
            this.getWorldIntersectionHomogenous(0, c, m, this.intersectBottomRight);
            return !0
    };
    i.prototype.getWorldIntersectionHomogenous = function (a, b, c, d) {
        this.calculateIntersection(a, b, c);
        d.setv(this.origin)
    };
    i.prototype.getWorldIntersection = function (a,
        b, c, d) {
        this.calculateIntersection(a, b, c);
        d.setd(this.origin.x, this.origin.y, this.origin.z).div(this.origin.w)
    };
    i.prototype.getWorldIntersectionSimple = function (a, b, c, d, e) {
        b = d.setv(b);
        c = e.setv(c).sub(b);
        a = (a - b.y) / c.y;
        c.mul(a);
        b.addv(c);
        return a >= 0 && a <= 1
    };
    i.prototype.calculateIntersection = function (a, b, c) {
        this.origin.setd(b.x * 2 - 1, b.y * 2 - 1, -1, 1);
        this.direction.setd(b.x * 2 - 1, b.y * 2 - 1, 1, 1);
        c.applyPost(this.origin);
        c.applyPost(this.direction);
        this.direction.sub(this.origin);
        Math.abs(this.direction.y) > f.EPSILON ?
            this.direction.mul((a - this.origin.y) / this.direction.y) : (this.direction.normalize(), this.direction.mul(this.mainCamera._frustumFar));
        this.origin.add(this.direction)
    };
    i.prototype.rebuild = function () {
        for (var a = this.getAttributeBuffer(e.POSITION), b = this.getAttributeBuffer(e.TEXCOORD0), c = this.getIndexBuffer(), d = this.densityX, f = this.densityY, g = 0; g < d; g++)
            for (var i = 0; i < f; i++) a[(g + i * d) * 3 + 0] = g, a[(g + i * d) * 3 + 1] = 0, a[(g + i * d) * 3 + 2] = i, b[(g + i * d) * 2 + 0] = g / (d - 1), b[(g + i * d) * 2 + 1] = i / (f - 1);
        for (b = a = 0; b < d * (f - 1); b++) b % (d * (Math.floor(b /
            d) + 1) - 1) === 0 && b !== 0 || (c[a++] = b, c[a++] = 1 + d + b, c[a++] = 1 + b, c[a++] = b, c[a++] = d + b, c[a++] = 1 + d + b);
        return this
    };
    return i
});
define("goo/shapes/RegularPolygon", ["goo/renderer/MeshData", "goo/shapes/PolyLine"], function (e, c) {
    function b(a, b) {
        this.nSegments = a || 5;
        this.radius = b || 1;
        for (var e = [], f = Math.PI * 2 / a, i = 0, h = 0; i < this.nSegments; i++, h += f) e.push(Math.cos(h) * this.radius, Math.sin(h) * this.radius, 0);
        c.call(this, e, !0);
        this.rebuild()
    }
    b.prototype = Object.create(c.prototype);
    return b
});
define("goo/shapes/SimpleBox", ["goo/renderer/MeshData"], function (e) {
    function c(b, a, c) {
        this.xExtent = b !== void 0 ? b * 0.5 : 0.5;
        this.yExtent = a !== void 0 ? a * 0.5 : 0.5;
        this.zExtent = c !== void 0 ? c * 0.5 : 0.5;
        b = e.defaultMap([e.POSITION]);
        e.call(this, b, 8, 36);
        this.rebuild()
    }
    c.prototype = Object.create(e.prototype);
    c.prototype.rebuild = function () {
        var b = this.xExtent,
            a = this.yExtent,
            c = this.zExtent;
        this.getAttributeBuffer(e.POSITION).set([-b, -a, -c, b, -a, -c, b, a, -c, -b, a, -c, -b, -a, c, b, -a, c, b, a, c, -b, a, c]);
        this.getIndexBuffer().set([0,
            1, 2, 2, 3, 0, 7, 6, 5, 5, 4, 7, 0, 3, 7, 7, 4, 0, 1, 2, 6, 6, 5, 1, 3, 2, 6, 6, 7, 3, 0, 1, 5, 5, 4, 0
        ]);
        return this
    };
    return c
});
define("goo/shapes/Triangle", ["goo/renderer/MeshData", "goo/math/MathUtils"], function (e, c) {
    function b(a) {
        this.verts = a;
        a = e.defaultMap([e.POSITION, e.NORMAL]);
        e.call(this, a, 3, 3);
        this.rebuild()
    }
    b.prototype = Object.create(e.prototype);
    b.prototype.rebuild = function () {
        this.getAttributeBuffer(e.POSITION).set(this.verts);
        var a = c.getTriangleNormal(this.verts[0], this.verts[1], this.verts[2], this.verts[3], this.verts[4], this.verts[5], this.verts[6], this.verts[7], this.verts[8]);
        this.getAttributeBuffer(e.NORMAL).set([a[0],
            a[1], a[2], a[0], a[1], a[2], a[0], a[1], a[2]
        ]);
        this.getIndexBuffer().set([0, 1, 2]);
        return this
    };
    return b
});
define("goo/statemachine/FSMSystem", ["goo/entities/systems/System", "goo/statemachine/actions/Actions"], function (e) {
    function c(b) {
        e.call(this, "FSMSystem", ["FSMComponent"]);
        this.engine = b;
        this.resetRequest = !1;
        this.active = !0
    }
    c.prototype = Object.create(e.prototype);
    c.prototype.process = function (b, a) {
        var c;
        if (this.resetRequest) {
            this.resetRequest = !1;
            for (var e = 0; e < b.length; e++) c = b[e].fSMComponent, c.init()
        }
        if (this.active)
            for (e = 0; e < b.length; e++) c = b[e].fSMComponent, c.update(a)
    };
    c.prototype.inserted = function (b) {
        var a =
            b.fSMComponent;
        a.entity = b;
        a.init()
    };
    c.prototype.pause = function () {
        this.active = !1
    };
    c.prototype.play = function () {
        this.active = !0
    };
    c.prototype.reset = function () {
        this.resetRequest = !0;
        this.active = !1
    };
    return c
});
define("goo/statemachine/actions/AddVectorAction", ["goo/statemachine/actions/Action"], function (e) {
    function c(b) {
        b = b || {};
        this.everyFrame = b.everyFrame || !0;
        this.entity = b.entity || null;
        this.vector = b.vector || [0, 0, 0];
        this.speed = b.speed || 1;
        this.mode = b.mode || 0
    }
    c.prototype = Object.create(e.prototype);
    c.external = {
        entity: ["entity", "Entity"],
        vector: ["vec3", "Position"],
        speed: ["float", "Speed"],
        mode: ["list", "Mode", ["Position", "Rotation", "Scale"]]
    };
    c.prototype._run = function (b) {
        if (this.entity !== null) {
            var a = this.vector[0] *
                this.speed * b.getTpf(),
                c = this.vector[1] * this.speed * b.getTpf(),
                b = this.vector[2] * this.speed * b.getTpf();
            this.mode === 0 ? this.entity.transformComponent.transform.translation.add_d(a, c, b) : this.mode === 1 ? this.entity.transformComponent.transform.setRotationXYZ(a, c, b) : this.mode === 2 && this.entity.transformComponent.transform.scale.add_d(a, c, b);
            this.entity.transformComponent.setUpdated()
        }
    };
    return c
});
define("goo/statemachine/actions/EventListenerAction", ["goo/statemachine/actions/Action"], function (e) {
    function c(b) {
        b = b || {};
        this.everyFrame = b.everyFrame || !0;
        this.eventName = b.eventName || "input";
        this.event = b.event || "output"
    }
    c.prototype = Object.create(e.prototype);
    c.external = [{
        name: "Listen To",
        key: "listen",
        type: "event"
    }, {
        name: "Send Event",
        key: "event",
        type: "event"
    }];
    c.prototype.listen = function (b) {
        console.log("cool", b)
    };
    c.prototype._onEnter = function (b) {
        b.addListener(this.eventName, this.listen)
    };
    c.prototype.exit =
        function (b) {
            b.removeListener(this.eventName, this.listen)
    };
    return c
});
define("goo/statemachine/actions/FollowEntityAction", ["goo/statemachine/actions/Action"], function (e) {
    function c(b) {
        b = b || {};
        this.everyFrame = b.everyFrame || !0;
        this.sourceEntity = b.sourceEntity || null;
        this.targetEntity = b.targetEntity || null;
        this.offset = b.offset || [0, 0, 0]
    }
    c.prototype = Object.create(e.prototype);
    c.external = [{
        name: "Source Entity",
        key: "sourceEntity",
        type: "entity"
    }, {
        name: "Target Entity",
        key: "targetEntity",
        type: "entity"
    }, {
        name: "Offset",
        key: "offset",
        type: "vec3"
    }];
    c.prototype._run = function () {
        if (this.sourceEntity !==
            null && this.targetEntity !== null) {
            var b = this.targetEntity.transformComponent.transform.translation;
            b.setv(this.sourceEntity.transformComponent.transform.translation);
            b.add_d(this.offset[0], this.offset[1], this.offset[2]);
            this.targetEntity.transformComponent.setUpdated()
        }
    };
    return c
});
define("goo/statemachine/actions/GuiButtonAction", ["goo/statemachine/actions/Action"], function (e) {
    function c(b) {
        b = b || {};
        this.everyFrame = b.everyFrame || !0;
        this.name = b.name || "Button";
        this.event = b.event || "dummy"
    }
    c.prototype = Object.create(e.prototype);
    c.external = [{
        name: "Name",
        key: "name",
        type: "string"
    }, {
        name: "Send Event",
        key: "event",
        type: "event"
    }];
    c.prototype._setup = function (b) {
        this.button = $("<button/>", {
            text: this.name,
            css: {
                position: "relative",
                "z-index": 1E4
            },
            click: function () {
                b.send(this.event)
            }.bind(this)
        }).appendTo($("body"))
    };
    c.prototype.exit = function () {
        this.button && this.button.remove()
    };
    return c
});
define("goo/statemachine/actions/KeyPressAction", ["goo/statemachine/actions/Action", "goo/statemachine/FSMUtil"], function (e, c) {
    function b(a) {
        a = a || {};
        this.everyFrame = a.everyFrame || !0;
        var b = a.key || "w";
        this.key = parseFloat(b) === b ? b : c.keys[b];
        this.event = a.event || "dummy"
    }
    b.prototype = Object.create(e.prototype);
    b.external = [{
        name: "Key",
        key: "key",
        type: "key"
    }, {
        name: "Send event",
        key: "event",
        type: "event"
    }];
    b.prototype.onCreate = function (a) {
        $(document).keypress(function (b) {
            (b.which || b.keyCode) === this.key && a.handle(this.event)
        }.bind(this))
    };
    b.prototype.onDestroy = function () {
        $(document).off("keypress")
    };
    return b
});
define("goo/statemachine/actions/MouseMoveAction", ["goo/statemachine/actions/Action"], function (e) {
    function c(b) {
        b = b || {};
        this.everyFrame = b.everyFrame || !0;
        this.posVariable = b.posVariable || null;
        this.eventToEmit = b.eventToEmit || null;
        this.currentTime = 0;
        this.updated = !1;
        this.eventListener = function () {
            this.updated = !0
        }.bind(this)
    }
    c.prototype = Object.create(e.prototype);
    c.external = [{
        name: "Store for click position",
        key: "posVariable",
        type: "string"
    }];
    c.prototype._setup = function () {
        document.addEventListener("mousemove",
            this.eventListener)
    };
    c.prototype._run = function (b) {
        if (this.updated) this.updated = !1, this.eventToEmit && b.send(this.eventToEmit.channel, this.eventToEmit.data)
    };
    c.prototype.exit = function () {
        document.removeEventListener("mousemove", this.eventListener)
    };
    return c
});
define("goo/statemachine/actions/RandomEventAction", ["goo/statemachine/actions/Action"], function (e) {
    function c(b) {
        b = b || {};
        this.everyFrame = b.everyFrame || !0;
        this.events = b.events || []
    }
    c.prototype = Object.create(e.prototype);
    c.external = [{
        key: ["string", "Key"],
        event: ["string", "Send event"]
    }];
    c.prototype._run = function (b) {
        var a = Math.floor(Math.random() * this.events.length);
        b.send(this.events[a])
    };
    return c
});
define("goo/statemachine/actions/ScriptAction", ["goo/statemachine/actions/Action"], function (e) {
    function c(b) {
        this.script = b || 'console.log("hello!")';
        this.external = [{
            name: "Script",
            key: "script",
            type: "string"
        }]
    }
    c.prototype = Object.create(e.prototype);
    c.prototype.onCreate = function () {
        eval(this.script)
    };
    return c
});
define("goo/statemachine/actions/SetCssPropertyAction", ["goo/statemachine/actions/Action"], function (e) {
    function c(b) {
        b = b || {};
        this.everyFrame = b.everyFrame || !1;
        this.selector = b.selector || "body";
        this.property = b.property || "background-color";
        this.value = b.value || "black"
    }
    c.prototype = Object.create(e.prototype);
    c.external = [{
        selector: ["string", "Selector"],
        property: ["string", "Property"],
        value: ["string", "Value"]
    }];
    c.prototype.onCreate = function () {
        $(this.selector).css(this.property, this.value)
    };
    return c
});
define("goo/statemachine/actions/TestAngleAction", ["goo/statemachine/actions/Action"], function (e) {
    function c(b) {
        b = b || {};
        this.everyFrame = b.everyFrame || !0;
        this.entity = b.entity || null;
        this.rangeMin = b.rangeMin || 0;
        this.rangeMax = b.rangeMax || Math.PI;
        this.eventInRange = b.eventInRange || "inRange";
        this.eventOutRange = b.eventOutRange || "outRange"
    }
    c.prototype = Object.create(e.prototype);
    c.external = [{
        name: "Entity",
        key: "entity",
        type: "entity"
    }, {
        name: "RangeMin",
        key: "rangeMin",
        type: "spinner"
    }, {
        name: "RangeMax",
        key: "rangeMax",
        type: "spinner"
    }, {
        name: "Event In Range",
        key: "eventInRange",
        type: "event"
    }, {
        name: "Event Out Of Range",
        key: "eventOutRange",
        type: "event"
    }];
    c.prototype.onUpdate = function (b) {
        if (this.entity !== null && this.entity.body) {
            var a = this.entity.body.GetAngle() % (Math.PI * 2);
            a < 0 && (a = Math.PI * 2 + a);
            a >= this.rangeMin && a <= this.rangeMax ? b.handle(this.eventInRange) : b.handle(this.eventOutRange)
        }
    };
    return c
});
define("goo/statemachine/actions/TestCollisionAction", ["goo/statemachine/actions/Action"], function (e) {
    function c(b) {
        b = b || {};
        this.everyFrame = b.everyFrame || !0;
        this.entity1 = b.entity1 || null;
        this.entity2 = b.entity2 || null;
        this.noCollisionEvent = b.noCollisionEvent || "noCollision";
        this.collisionEvent = b.collisionEvent || "collision"
    }
    c.prototype = Object.create(e.prototype);
    c.external = [{
        entity1: ["entity", "Entity 1"],
        entity2: ["entity", "Entity 2"],
        noCollisionEvent: ["string", "No collision event"],
        collisionEvent: ["string",
            "Collision event"
        ]
    }];
    c.prototype.onUpdate = function (b) {
        this.entity1 !== null && this.entity2 !== null && (this.entity1.meshRendererComponent.worldBound.intersects(this.entity2.meshRendererComponent.worldBound) ? b.handle(this.collisionEvent) : b.handle(this.noCollisionEvent))
    };
    return c
});
define("goo/statemachine/actions/TestSpeedAction", ["goo/statemachine/actions/Action"], function (e) {
    function c(b) {
        this.type = "TestSpeedAction";
        this.everyFrame = b.everyFrame || !0;
        b = b || {};
        this.entity = b.entity || null;
        this.rangeMin = b.rangeMin || 0;
        this.rangeMax = b.rangeMax || Math.PI;
        this.eventInRange = b.eventInRange || "inRange";
        this.eventOutRange = b.eventOutRange || "outRange"
    }
    c.prototype = Object.create(e.prototype);
    c.external = [{
        name: "Entity",
        key: "entity",
        type: "entity"
    }, {
        name: "RangeMin",
        key: "rangeMin",
        type: "spinner"
    }, {
        name: "RangeMax",
        key: "rangeMax",
        type: "spinner"
    }, {
        name: "Event In Range",
        key: "eventInRange",
        type: "event"
    }, {
        name: "Event Out Of Range",
        key: "eventOutRange",
        type: "event"
    }];
    c.prototype.onUpdate = function (b) {
        if (this.entity !== null && this.entity.body) {
            var a = this.entity.body.GetLinearVelocity().Length();
            a >= this.rangeMin && a <= this.rangeMax ? b.handle(this.eventInRange) : b.handle(this.eventOutRange)
        }
    };
    return c
});
define("goo/statemachine/actions/TweenAction", ["goo/statemachine/actions/Action", "goo/statemachine/FSMUtil"], function (e, c) {
    function b(a) {
        a = a || {};
        this.everyFrame = a.everyFrame || !0;
        this.script = a.script || "$('button').css('padding-left', this.x + 'px');";
        this.time = a.time || 1E3;
        this.event = a.event || "dummy";
        this.from = a.from || {
            x: 0
        };
        this.to = a.to || {
            x: 100
        };
        this.easing = a.easing || window.TWEEN.Easing.Elastic.InOut;
        this.tween = new window.TWEEN.Tween;
        this.external = {
            script: ["string", "Tween action"],
            time: ["int", "Time"],
            event: ["string", "Send event"],
            from: ["json", "From"],
            to: ["json", "To"],
            easing: ["function", "Easing"]
        }
    }
    b.prototype = Object.create(e.prototype);
    b.prototype.onCreate = function (a) {
        var b = this;
        this.tween.from(c.clone(this.from)).to(this.to, this.time).easing(this.easing).onUpdate(function () {
            eval(b.script)
        }).onComplete(function () {
            a.handle(this.event);
            console.log("complete:", this.event)
        }.bind(this)).start()
    };
    b.prototype.onDestroy = function () {
        this.tween.stop()
    };
    return b
});
define("goo/statemachine/actions/TweenPositionAction", ["goo/statemachine/actions/Action", "goo/statemachine/FSMUtil"], function (e, c) {
    function b(a) {
        a = a || {};
        this.everyFrame = a.everyFrame || !0;
        this.entity = a.entity || null;
        this.time = a.time || 2E3;
        this.event = a.event || "dummy";
        this.from = a.from || {
            x: -5,
            y: 0,
            z: 0
        };
        this.to = a.to || {
            x: 5,
            y: 0,
            z: 0
        };
        this.easing = a.easing || window.TWEEN.Easing.Elastic.InOut;
        this.tween = new window.TWEEN.Tween
    }
    b.prototype = Object.create(e.prototype);
    b.external = [{
        entity: ["entity", "Entity"],
        time: ["int",
            "Time"
        ],
        event: ["string", "Send event"],
        from: ["json", "From"],
        to: ["json", "To"],
        easing: ["function", "Easing"]
    }];
    b.prototype.onCreate = function (a) {
        var b = this;
        this.tween.from(c.clone(this.from)).to(this.to, this.time).easing(this.easing).onUpdate(function () {
            b.entity !== null && (b.entity.transformComponent.transform.translation.setd(this.x, this.y, this.z), b.entity.transformComponent.setUpdated())
        }).onComplete(function () {
            a.handle(this.event);
            console.log("complete:", this.event)
        }.bind(this)).start()
    };
    b.prototype.onDestroy =
        function () {
            this.tween.stop()
    };
    return b
});
define("goo/statemachine/actions/TweenRotationAction", ["goo/statemachine/actions/Action", "goo/statemachine/FSMUtil"], function (e, c) {
    function b(a) {
        a = a || {};
        this.everyFrame = a.everyFrame || !0;
        this.entity = a.entity || null;
        this.time = a.time || 2E3;
        this.event = a.event || "dummy";
        this.from = a.from || {
            x: 0,
            y: 0,
            z: 0
        };
        this.to = a.to || {
            x: 0,
            y: 0,
            z: Math.PI * 2
        };
        this.easing = a.easing || window.TWEEN.Easing.Elastic.InOut;
        this.tween = new window.TWEEN.Tween;
        this.external = [{
            name: "Entity",
            key: "entity",
            type: "entity"
        }, {
            name: "Time",
            key: "time",
            type: "spinner"
        }, {
            name: "Send event",
            key: "event",
            type: "event"
        }, {
            name: "From",
            key: "from",
            type: "json"
        }, {
            name: "To",
            key: "to",
            type: "json"
        }, {
            name: "Easing",
            key: "easing",
            type: "function"
        }]
    }
    b.prototype = Object.create(e.prototype);
    b.prototype.onCreate = function (a) {
        var b = this;
        this.tween.from(c.clone(this.from)).to(this.to, this.time).easing(this.easing).onUpdate(function () {
            b.entity !== null && (b.entity.transformComponent.transform.setRotationXYZ(this.x, this.y, this.z), b.entity.transformComponent.setUpdated())
        }).onComplete(function () {
            a.handle(this.event);
            console.log("complete:", this.event)
        }.bind(this)).start()
    };
    b.prototype.onDestroy = function () {
        this.tween.stop()
    };
    return b
});
define("goo/statemachine/actions/WaitAction", ["goo/statemachine/actions/Action"], function (e) {
    function c(b) {
        b = b || {};
        this.everyFrame = b.everyFrame || !0;
        this.time = b.time || 1E3;
        this.event = b.event || "dummy";
        this.external = {
            time: ["int", "Time"],
            event: ["string", "Send event"]
        };
        this.currentTime = 0
    }
    c.prototype = Object.create(e.prototype);
    c.prototype.onCreate = function () {
        this.currentTime = 0
    };
    c.prototype.onUpdate = function (b) {
        this.currentTime += ~~(b.getTpf() * 1E3);
        this.currentTime >= this.time && b.handle(this.event)
    };
    return c
});
define("goo/util/ColorUtil", ["goo/math/Vector4"], function (e) {
    function c() {}
    c.arrayToVector4 = function (a, b) {
        b = b || new e;
        b.seta(a);
        return b
    };
    c.hexToArray = function (a, b) {
        b = b || [];
        a = Math.floor(a);
        b[0] = (a >> 16 & 255) / 255;
        b[1] = (a >> 8 & 255) / 255;
        b[2] = (a & 255) / 255;
        return b
    };
    c.arrayToHex = function (a) {
        return a[0] * 255 << 16 ^ a[1] * 255 << 8 ^ a[2] * 255 << 0
    };
    c.arrayToHexString = function (a) {
        return ("000000" + c.arrayToHex(a).toString(16)).slice(-6)
    };
    var b = /^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i,
        a = /^rgb\(\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*\)$/i,
        d = /^\#([0-9a-f])([0-9a-f])([0-9a-f])$/i,
        g = /^\#([0-9a-f]{6})$/i,
        f = /^(\w+)$/i;
    c.cssToArray = function (e, h) {
        h = h || [];
        if (b.test(e)) {
            var k = b.exec(e);
            h[0] = Math.min(255, parseInt(k[1], 10)) / 255;
            h[1] = Math.min(255, parseInt(k[2], 10)) / 255;
            h[2] = Math.min(255, parseInt(k[3], 10)) / 255;
            return h
        }
        if (a.test(e)) return k = a.exec(e), h[0] = Math.min(100, parseInt(k[1], 10)) / 100, h[1] = Math.min(100, parseInt(k[2], 10)) / 100, h[2] = Math.min(100, parseInt(k[3], 10)) / 100, h;
        if (g.test(e)) return k = g.exec(e), this.hexToArray(parseInt(k[1], 16), h);
        if (d.test(e)) return k =
            d.exec(e), this.hexToArray(parseInt(k[1] + k[1] + k[2] + k[2] + k[3] + k[3], 16), h);
        if (f.test(e)) return this.hexToArray(c.color[e], h);
        console.warn("No matching style found");
        h[0] = h[1] = h[2] = 0;
        return h
    };
    c.HSLToArray = function (a, b, c, d) {
        d = d || [];
        if (b === 0) d[0] = d[1] = d[2] = c;
        else {
            var e = function (a, b, c) {
                c < 0 && (c += 1);
                c > 1 && (c -= 1);
                return c < 1 / 6 ? a + (b - a) * 6 * c : c < 0.5 ? b : c < 2 / 3 ? a + (b - a) * 6 * (2 / 3 - c) : a
            }, b = c <= 0.5 ? c * (1 + b) : c + b - c * b,
                c = 2 * c - b;
            d[0] = e(c, b, a + 1 / 3);
            d[1] = e(c, b, a);
            d[2] = e(c, b, a - 1 / 3)
        }
        return d
    };
    c.arrayToHSL = function (a, b) {
        var b = b || [],
            c = a[0],
            d = a[1],
            e = a[2],
            f = Math.max(c, d, e),
            g = Math.min(c, d, e),
            p, n = (g + f) / 2;
        if (g === f) g = p = 0;
        else {
            var s = f - g,
                g = n <= 0.5 ? s / (f + g) : s / (2 - f - g);
            switch (f) {
            case c:
                p = (d - e) / s + (d < e ? 6 : 0);
                break;
            case d:
                p = (e - c) / s + 2;
                break;
            case e:
                p = (c - d) / s + 4
            }
            p /= 6
        }
        b[0] = p;
        b[1] = g;
        b[2] = n;
        return b
    };
    c.HSBToArray = function (a, b, c, d) {
        var d = d || [],
            e = 0,
            f = 0,
            g = 0;
        if (b === 0) e = f = g = c;
        else {
            var a = (a - Math.floor(a)) * 6,
                p = a - Math.floor(a),
                n = c * (1 - b),
                s = c * (1 - b * p),
                b = c * (1 - b * (1 - p));
            switch (a) {
            case 0:
                e = c;
                f = b;
                g = n;
                break;
            case 1:
                e = s;
                f = c;
                g = n;
                break;
            case 2:
                e = n;
                f = c;
                g = b;
                break;
            case 3:
                e = n;
                f = s;
                g = c;
                break;
            case 4:
                e = b;
                f = n;
                g = c;
                break;
            case 5:
                e = c, f = n, g = s
            }
        }
        d[0] = e;
        d[1] = f;
        d[2] = g;
        return d
    };
    c.arrayToHSB = function (a, b) {
        var b = b || [],
            c = a[0],
            d = a[1],
            e = a[2],
            f, g = c > d ? c : d;
        e > g && (g = e);
        var p = c < d ? c : d;
        e < p && (p = e);
        f = g !== 0 ? (g - p) / g : 0;
        if (f === 0) c = 0;
        else {
            var n = (g - c) / (g - p),
                s = (g - d) / (g - p),
                e = (g - e) / (g - p),
                c = c === g ? e - s : d === g ? 2 + n - e : 4 + s - n;
            c /= 6;
            c < 0 && (c += 1)
        }
        b[0] = c;
        b[1] = f;
        b[2] = g / 255;
        return b
    };
    c.arrayToCSS = function (a) {
        return "rgb(" + (a[0] * 255 | 0) + "," + (a[1] * 255 | 0) + "," + (a[2] * 255 | 0) + ")"
    };
    c.color = {
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074
    };
    return c
});
define("goo/util/ConsoleUtil", ["goo/util/ObjectUtil"], function (e) {
    var c = {}, b = null,
        a = ["debug", "log", "info", "warn", "error"],
        d = function () {};
    c.setLogLevel = function (g) {
        var f, i;
        b == null && (b = e.clone(window.console));
        c.clearLogLevel();
        for (i = 0; i < a.length; i++) {
            f = a[i];
            if (f === g) break;
            window.console[f] = d
        }
    };
    c.clearLogLevel = function () {
        var c, d;
        if (b)
            for (d = 0; d < a.length; d++) c = a[d], window.console[c] = b[c]
    };
    return c
});
define("goo/util/DebugDraw", [], function () {
    function e() {}
    e.prototype.countDown = function () {};
    return e
});
define("goo/util/Promise", [], function () {
    function e() {
        this._state = "pending";
        this._resolved = [];
        this._rejected = [];
        this._always = []
    }
    e.prototype.then = function (c, b) {
        c && c !== null && this._resolved.push(c);
        b && b !== null && this._rejected.push(b);
        return this
    };
    e.prototype.done = function (c) {
        this._state === "pending" ? this.then(c) : this._state === "resolved" && c(this._data);
        return this
    };
    e.prototype.fail = function (c) {
        this._state === "pending" ? this.then(null, c) : this._state === "rejected" && c(this._data);
        return this
    };
    e.prototype.always =
        function (c) {
            typeof c !== "undefined" && c !== null && (this._state === "pending" ? this._always.push(c) : c(this._data));
            return this
    };
    return e
});
define("goo/util/Deferred", ["goo/util/Promise"], function (e) {
    function c(b) {
        this._promise = b || new e
    }
    c.prototype.promise = function () {
        return this._promise
    };
    c.prototype.resolve = function (b) {
        if (this._promise._state === "pending") this._promise._data = b, this._promise._resolved.every(function (a) {
            a(b);
            return !0
        }), this._promise._always.every(function (a) {
            a(b);
            return !0
        }), this._promise._state = "resolved";
        return this._promise
    };
    c.prototype.reject = function (b) {
        if (this._promise._state === "pending") this._promise._data = b, this._promise._rejected.every(function (a) {
            if (b instanceof Error) throw b;
            a(b);
            return !0
        }), this._promise._always.every(function (a) {
            a(b);
            return !0
        }), this._promise._state = "rejected";
        return this._promise
    };
    c.prototype.then = function (b, a) {
        return this._promise.then(b, a)
    };
    c.prototype.done = function (b) {
        return this._promise.done(b)
    };
    c.prototype.fail = function (b) {
        return this._promise.fail(b)
    };
    c.prototype.always = function (b) {
        return this._promise.always(b)
    };
    c.when = function () {
        var b = Array.prototype.slice.call(arguments),
            a = b.length,
            d = a,
            e = new c,
            f = [],
            i = function (a, b) {
                return function (c) {
                    b[a] =
                        c;
                    --d <= 0 && e.resolve(b)
                }
            };
        if (a > 0) {
            var a = function (a) {
                e.reject(a)
            }, h;
            for (h in b) b[h] && Object.prototype.toString.call(b[h].constructor) === "[object Function]" ? b[h].done(i(h, f)).fail(a) : --d
        }
        d || e.resolve(f);
        return e.promise()
    };
    return c
});
define("goo/util/FastBuilder", ["goo/renderer/MeshData", "goo/math/Vector3"], function (e, c) {
    function b(a, b, c) {
        if (a.vertexCount >= 65536) throw Error("Maximum number of vertices for a mesh to add is 65535. Got: " + a.vertexCount);
        this.callback = c || {
            progress: function () {},
            done: function () {}
        };
        this.meshDatas = [];
        this.dataCounter = 0;
        for (c = b;;) {
            var i = Math.floor(65535 / a.vertexCount),
                i = Math.min(i, b),
                h = a.vertexCount * i,
                k = a.indexCount * i,
                j = {}, l;
            for (l in a.attributeMap) {
                var m = a.attributeMap[l];
                j[l] = {
                    count: m.count,
                    type: m.type,
                    stride: m.stride,
                    offset: m.offset,
                    normalized: m.normalized
                }
            }
            h = new e(j, h, k);
            c -= i;
            this.meshDatas.push(h);
            if (c <= 0) break
        }
        this.indexCounter = this.vertexCounter = 0;
        this.callback.progress(0)
    }
    var a = new c;
    b.prototype.addMeshData = function (b, c) {
        if (b.vertexCount >= 65536) throw Error("Maximum number of vertices for a mesh to add is 65535. Got: " + b.vertexCount);
        else if (this.vertexCounter + b.vertexCount >= 65536) this.dataCounter++, this.vertexData = {}, this.indexData = [], this.indexCounter = this.vertexCounter = 0, this.callback.progress(this.dataCounter /
            (this.meshDatas.length - 1));
        var f = this.meshDatas[this.dataCounter],
            i = b.attributeMap,
            h;
        for (h in i) {
            var k = this.vertexCounter * i[h].count,
                j = b.getAttributeBuffer(h),
                l = j.length,
                m = f.getAttributeBuffer(h);
            if (h === e.POSITION)
                for (var o = 0; o < l; o += 3) a.setd(j[o + 0], j[o + 1], j[o + 2]), c.matrix.applyPostPoint(a), m[k + o + 0] = a.data[0], m[k + o + 1] = a.data[1], m[k + o + 2] = a.data[2];
            else if (h === e.NORMAL)
                for (o = 0; o < l; o += 3) a.setd(j[o + 0], j[o + 1], j[o + 2]), c.rotation.applyPost(a), m[k + o + 0] = a.data[0], m[k + o + 1] = a.data[1], m[k + o + 2] = a.data[2];
            else if (h ===
                e.TANGENT)
                for (o = 0; o < l; o += 3) a.setd(j[o + 0], j[o + 1], j[o + 2]), c.rotation.applyPost(a), m[k + o + 0] = a.data[0], m[k + o + 1] = a.data[1], m[k + o + 2] = a.data[2];
            else
                for (o = 0; o < l; o++) m[k + o] = j[o]
        }
        i = b.getIndexBuffer();
        m = f.getIndexBuffer();
        o = 0;
        for (f = b.indexCount; o < f; o++) m[this.indexCounter + o] = i[o] + this.vertexCounter;
        this.vertexCounter += b.vertexCount;
        this.indexCounter += b.indexCount
    };
    b.prototype.build = function () {
        this.callback.done();
        return this.meshDatas
    };
    return b
});
define("goo/util/Grid", "goo/entities/Entity,goo/entities/EntityUtils,goo/entities/components/MeshDataComponent,goo/entities/components/MeshRendererComponent,goo/renderer/MeshData,goo/renderer/Material,goo/renderer/Shader,goo/shapes/ShapeCreator,goo/renderer/shaders/ShaderLib,goo/renderer/Util".split(","), function (e, c, b, a, d, g, f, i, h, k) {
    function j(d, e) {
        e = e || {};
        this.topEntity = d.createEntity(this.name);
        e.floor && this.topEntity.transformComponent.transform.rotation.rotateX(-Math.PI / 2);
        if (e.surface) {
            var f =
                i.createQuad(e.width, e.height),
                f = c.createTypicalEntity(d, f),
                j = g.createMaterial(h.simpleLit);
            j.uniforms.materialDiffuse = e.surfaceColor || [1, 1, 1, 1];
            j.depthState = {
                writable: !1,
                enabled: !1
            };
            j.renderQueue = 9;
            f.meshRendererComponent.materials.push(j);
            this.topEntity.transformComponent.attachChild(f.transformComponent)
        }
        this.gridShader = this._buildGridShader(e);
        if (!e.grids) e.grids = [];
        e.grids.length === 0 && e.grids.push(k.clone(l));
        this.grids = e.grids;
        for (var s, r = 0; r < e.grids.length; r++) j = e.grids[r], this._fillDefaults(j,
            l), j._width = e.width || 1, j._height = e.height || 1, f = d.createEntity("grid_" + r), f.setComponent(new b(this._buildGrid(j))), s = new a, s.materials.push(this._buildGridMaterial(j, r)), f.setComponent(s), this.topEntity.transformComponent.attachChild(f.transformComponent)
    }
    var l = {
        stepX: 1,
        stepY: 1,
        color: [0, 0, 0, 1],
        width: 1
    };
    j.prototype.addToWorld = function () {
        c.traverse(this.topEntity, function (a) {
            a.addToWorld()
        })
    };
    j.prototype._collides = function (a, b, c) {
        for (var c = "step" + c, d = 0; d < this.grids.length; d++) {
            if (a === this.grids[d]) break;
            if (b % this.grids[d][c] === 0) return !0
        }
        return !1
    };
    j.prototype._buildGrid = function (a) {
        var b = Math.ceil(a._width / a.stepX),
            c = Math.ceil(a._height / a.stepY),
            e = a._width / 2,
            f = a._height / 2,
            g = [],
            h = [];
        a === this.grids[0] && (g.push(-e, -f, 0, -e, f, 0, e, f, 0, e, -f, 0), h.push(0, 1, 1, 2, 2, 3, 3, 0));
        for (var i, j = 1; j < b; j++) i = a.stepX * j, this._collides(a, i, "X") || (i -= e, g.push(i, -f, 0, i, f, 0));
        for (j = 1; j < c; j++) b = a.stepY * j, this._collides(a, b, "Y") || (b -= f, g.push(-e, b, 0, e, b, 0));
        for (j = h.length / 2; j < g.length / 3; j += 2) h.push(j, j + 1);
        a = new d(d.defaultMap([d.POSITION]),
            g.length, h.length);
        a.getAttributeBuffer(d.POSITION).set(g);
        a.getIndexBuffer().set(h);
        a.indexModes[0] = "Lines";
        return a
    };
    j.prototype._buildGridMaterial = function (a, b) {
        var c = new g("GridMaterial_" + b);
        if (this.gridShader) c.shader = this.gridShader;
        c.uniforms.color = a.color;
        c.lineWidth = a.width;
        c.depthState = {
            enabled: !1,
            write: !1
        };
        c.renderQueue = 10 + b;
        return c
    };
    j.prototype._fillDefaults = function (a, b) {
        for (var c in b) a[c] === void 0 && (a[c] = typeof b[c] === "array" || b[c] instanceof Object ? k.clone(b[c]) : b[c])
    };
    j.prototype._buildGridShader =
        function (a) {
            return g.createShader({
                attributes: {
                    vertexPosition: d.POSITION
                },
                uniforms: {
                    viewMatrix: f.VIEW_MATRIX,
                    projectionMatrix: f.PROJECTION_MATRIX,
                    worldMatrix: f.WORLD_MATRIX,
                    color: [0, 0, 0, 1],
                    fogOn: a.fogOn || !1,
                    fogColor: a.fogColor || [0, 0, 0, 1],
                    fogNear: f.MAIN_NEAR_PLANE,
                    fogFar: a.fogFar || f.MAIN_FAR_PLANE
                },
                vshader: "attribute vec3 vertexPosition;\nuniform mat4 worldMatrix;\nuniform mat4 viewMatrix;\nuniform mat4 projectionMatrix;\nvarying float depth;\nvoid main(void)\n{\nvec4 viewPosition = viewMatrix * worldMatrix * vec4(vertexPosition, 1.0);\ndepth = viewPosition.z;\ngl_Position = projectionMatrix * viewPosition;\n}",
                fshader: "precision mediump float;\nuniform vec4 fogColor;\nuniform vec4 color;\nuniform float fogNear;\nuniform float fogFar;\nuniform bool fogOn;\nvarying float depth;\nvoid main(void)\n{\nif (fogOn) {\nfloat lerpVal = clamp(depth / (-fogFar - fogNear), 0.0, 1.0);\nlerpVal = pow(lerpVal, 0.4);\ngl_FragColor = mix(color, fogColor, lerpVal);\n} else {\ngl_FragColor = color;\n}\n}"
            }, "Grid Shader")
    };
    return j
});
define("goo/util/NoWebGL", ["goo/util/Logo"], function (e) {
    function c(b) {
        this.template = c.templates[b] ? c.templates[b] : c.templates.standard
    }
    c.prototype.upgradeLocation = "http://goodemos.com/recommended.html";
    c.prototype.gooLocation = "http://gooengine.com";
    c.templates = {};
    c.templates.standard = {};
    c.templates.standard.css = "#unsupportedBrowser {z-index: 10000;position: absolute;top: 0;left: 0;width: 100%;background: #1c1c1c;border-top: 1px solid #2a3276;font-family: Helvetica Neue, Helvetica, sans-serif;font-size: 90%;line-height: 145%;}#unsupportedBrowser a.button {-webkit-border-radius: 18px;-moz-border-radius: 18px;-o-border-radius: 18px;border-radius: 18px;margin: 5px 20px 0 0;text-align: left;padding: 10px 25px;color: #1d1d1d;font-weight: 600;font-style: italic;display: inline-block;text-shadow: 0px 1px 1px #8372da;filter: dropshadow(color=#02c2df, offx=0, offy=1);-moz-box-shadow: inset 1px 1px 2px 0 #a9b1fd;-o-box-shadow: inset 1px 1px 2px 0 #a9b1fd;-webkit-box-shadow: inset 1px 1px 2px 0 #a9b1fd;box-shadow: inset 1px 1px 2px 0 #a9b1fd;background: #2a3276;background-image: -ms-linear-gradient(top, #2a3276 0%, #6b7aff 100%);background-image: -moz-linear-gradient(top, #2a3276 0%, #6b7aff 100%);background-image: -o-linear-gradient(top, #2a3276 0%, #6b7aff 100%);background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, #2a3276), color-stop(1, #6b7aff));background-image: -webkit-linear-gradient(top, #2a3276 0%, #6b7aff 100%);background-image: linear-gradient(top, #2a3276 0%, #6b7aff 100%);filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#2a3276\", endColorstr=\"#6b7aff\");}#unsupportedBrowser a.button:hover {-moz-box-shadow: inset 3px 3px 5px 0 #a9b1fd;-o-box-shadow: inset 3px 3px 5px 0 #a9b1fd;-webkit-box-shadow: inset 3px 3px 5px 0 #a9b1fd;box-shadow: inset 3px 3px 5px 0 #a9b1fd;background: #6b7aff;background-image: -ms-linear-gradient(top, #6b7aff 0%, #2a3276 100%);background-image: -moz-linear-gradient(top, #6b7aff 0%, #2a3276 100%);background-image: -o-linear-gradient(top, #6b7aff 0%, #2a3276 100%);background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, #6b7aff), color-stop(1, #2a3276));background-image: -webkit-linear-gradient(top, #6b7aff 0%, #2a3276 100%);background-image: linear-gradient(top, #6b7aff 0%, #2a3276 100%);filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#6b7aff', endColorstr='#2a3276'); }#unsupportedBrowser > svg {margin-top: 5px;}#unsupportedBrowser > .logo {background-image: -moz-radial-gradient(50% 250px, circle farthest-corner, #6b7aff, #2a3276 100%);background-image: -webkit-radial-gradient(50% 250px, circle farthest-corner, #6b7aff, #2a3276 100%);background-image: -o-radial-gradient(50% 250px, circle farthest-corner, #6b7aff, #2a3276 100%);background-image: -ms-radial-gradient(50% 250px, circle farthest-corner, #6b7aff, #2a3276 100%);background-image: radial-gradient(50% 250px, circle farthest-corner, #6b7aff, #2a3276 100%);}#unsupportedBrowser > .content {color: #9f9f9f;max-width: 700px;margin-left: 120px;margin-right: 20px;padding-top: 1em;}#unsupportedBrowser p {margin: 0 0 25px 0;}#unsupportedBrowser h1 {display: inline-block;max-width: 600px;margin: 13px 0 25px 20px;color: #f1eee5;vertical-align: top;font-weight: normal}";
    c.templates.standard.html = '<div class="logo"><a href="http://gooengine.com">' + e.getLogo({
        color: e.white,
        shadow: !0,
        width: "100px",
        height: "70px"
    }) + '</a><h1>Whoopsie daisy!</h1></div><div class="content"><p>Your browser doesn\'t seem to support HTML5 and WebGL. The best thing to do is upgrade to a modern browser that supports all the awesome things the web has to offer.</p><p><a data-upgrade class="button" href="">Upgrade my browser!</a><a data-close class="button" href="">Not now</a></p></div>';
    c.prototype.show =
        function () {
            var b = document.createElement("div");
            b.innerHTML = this.template.html;
            b.setAttribute("id", "unsupportedBrowser");
            var a = document.createElement("style");
            a.type = "text/css";
            a.setAttribute("id", "unsupportedBrowserStyles");
            a.stylesheet ? a.stylesheet.cssText = this.template.css : a.appendChild(document.createTextNode(this.template.css));
            document.head.appendChild(a);
            document.body.appendChild(b);
            var a = b.querySelector("[data-close]"),
                c = function (a) {
                    a.preventDefault();
                    a.stopPropagation();
                    document.location.href =
                        this.gooLocation;
                    document.body.removeChild(document.querySelector("div#unsupportedBrowser"));
                    document.head.removeChild(document.querySelector("#unsupportedBrowserStyles"))
                }.bind(this);
            a.addEventListener("click", c);
            b = b.querySelector("[data-upgrade]");
            a = function (a) {
                a.preventDefault();
                a.stopPropagation();
                document.location.href = this.upgradeLocation
            }.bind(this);
            b.addEventListener("click", a)
    };
    c.prototype.addTemplate = function (b, a) {
        c.templates[b] ? console.error("Template " + b + " already exists") : c.templates[b] =
            a
    };
    return c
});
define("goo/util/Rc4Random", [], function () {
    return function (e) {
        var c = [],
            b = 0,
            a = 0;
        (function (a) {
            for (var b = 0; b < 256; b++) c[b] = b;
            for (var e = 0, b = 0; b < 256; b++) {
                var e = (e + c[b] + a.charCodeAt(b % a.length)) % 256,
                    i = c[b];
                c[b] = c[e];
                c[e] = i
            }
        })(e);
        this.getRandomNumber = function () {
            for (var d = 0, e = 1, f = 0; f < 8; f++) {
                b = (b + 1) % 256;
                a = (a + c[b]) % 256;
                var i = c[b];
                c[b] = c[a];
                c[a] = i;
                d += c[(c[b] + c[a]) % 256] * e;
                e *= 256
            }
            return d / 1.8446744073709552E19
        }
    }
});
define("goo/util/URLTools", [], function () {
    function e() {}
    e.getDirectory = function (c) {
        var b = /.*\//.exec(c);
        return !b ? c + "/" : b[0]
    };
    return e
});
require("goo/addons/box2d/components/Box2DComponent,goo/addons/box2d/systems/Box2DSystem,goo/addons/cannon/components/CannonjsComponent,goo/addons/cannon/systems/CannonjsSystem,goo/addons/howler/components/HowlerComponent,goo/addons/howler/systems/HowlerSystem,goo/addons/scripts/PolyBoundingScript,goo/addons/soundmanager2/components/SoundManager2Component,goo/addons/soundmanager2/systems/SoundManager2System,goo/addons/terrain/Terrain,goo/addons/water/FlatWaterRenderer,goo/addons/water/ProjectedGridWaterRenderer,goo/animation/Joint,goo/animation/Skeleton,goo/animation/SkeletonPose,goo/animation/blendtree/BinaryLERPSource,goo/animation/blendtree/ClipSource,goo/animation/blendtree/ExclusiveClipSource,goo/animation/blendtree/FrozenClipSource,goo/animation/blendtree/InclusiveClipSource,goo/animation/blendtree/ManagedTransformSource,goo/animation/clip/AbstractAnimationChannel,goo/animation/clip/AnimationClip,goo/animation/clip/AnimationClipInstance,goo/animation/clip/InterpolatedFloatChannel,goo/animation/clip/JointChannel,goo/animation/clip/JointData,goo/animation/clip/TransformChannel,goo/animation/clip/TransformData,goo/animation/clip/TriggerChannel,goo/animation/clip/TriggerData,goo/animation/layer/AnimationLayer,goo/animation/layer/LayerLERPBlender,goo/animation/state/AbstractState,goo/animation/state/AbstractTransitionState,goo/animation/state/FadeTransitionState,goo/animation/state/FrozenTransitionState,goo/animation/state/SteadyState,goo/animation/state/SyncFadeTransitionState,goo/debug/BoundingVolumeMeshBuilder,goo/debug/Debugger,goo/debug/EntityCounter,goo/debug/components/MarkerComponent,goo/debug/systems/MarkerSystem,goo/entities/Bus,goo/entities/Entity,goo/entities/EntityUtils,goo/entities/EventHandler,goo/entities/GooRunner,goo/entities/World,goo/entities/components/AnimationComponent,goo/entities/components/CSSTransformComponent,goo/entities/components/CameraComponent,goo/entities/components/CameraDebugComponent,goo/entities/components/Component,goo/entities/components/LightComponent,goo/entities/components/LightDebugComponent,goo/entities/components/MeshDataComponent,goo/entities/components/MeshRendererComponent,goo/entities/components/OccludeeComponent,goo/entities/components/OccluderComponent,goo/entities/components/ParticleComponent,goo/entities/components/PortalComponent,goo/entities/components/ScriptComponent,goo/entities/components/TextComponent,goo/entities/components/TransformComponent,goo/entities/managers/DebugManager,goo/entities/managers/EntityManager,goo/entities/managers/LightManager,goo/entities/systems/AnimationSystem,goo/entities/systems/BoundingUpdateSystem,goo/entities/systems/CSSTransformSystem,goo/entities/systems/CameraDebugSystem,goo/entities/systems/CameraSystem,goo/entities/systems/DebugRenderSystem,goo/entities/systems/GizmoRenderSystem,goo/entities/systems/GridRenderSystem,goo/entities/systems/LightDebugSystem,goo/entities/systems/LightingSystem,goo/entities/systems/OcclusionCullingSystem,goo/entities/systems/ParticlesSystem,goo/entities/systems/PickingSystem,goo/entities/systems/PortalSystem,goo/entities/systems/RenderSystem,goo/entities/systems/ScriptSystem,goo/entities/systems/System,goo/entities/systems/TextSystem,goo/entities/systems/TransformSystem,goo/loaders/BundleLoader,goo/loaders/DynamicLoader,goo/loaders/EntityLoader,goo/loaders/JsonUtils,goo/loaders/Loader,goo/loaders/MaterialLoader,goo/loaders/MeshLoader,goo/loaders/SceneLoader,goo/loaders/ScriptLoader,goo/loaders/ShaderLoader,goo/loaders/SkeletonLoader,goo/loaders/crunch/CrunchLoader,goo/loaders/dds/DdsLoader,goo/loaders/dds/DdsUtils,goo/loaders/handlers/AnimationClipHandler,goo/loaders/handlers/AnimationComponentHandler,goo/loaders/handlers/AnimationLayersHandler,goo/loaders/handlers/CameraComponentHandler,goo/loaders/handlers/ComponentHandler,goo/loaders/handlers/ConfigHandler,goo/loaders/handlers/EntityHandler,goo/loaders/handlers/FSMComponentHandler,goo/loaders/handlers/LightComponentHandler,goo/loaders/handlers/MachineHandler,goo/loaders/handlers/MaterialHandler,goo/loaders/handlers/MeshDataComponentHandler,goo/loaders/handlers/MeshDataHandler,goo/loaders/handlers/MeshRendererComponentHandler,goo/loaders/handlers/PosteffectHandler,goo/loaders/handlers/ProjectHandler,goo/loaders/handlers/SceneHandler,goo/loaders/handlers/ScriptComponentHandler,goo/loaders/handlers/ScriptHandler,goo/loaders/handlers/ShaderHandler,goo/loaders/handlers/SkeletonHandler,goo/loaders/handlers/SoundComponentHandler,goo/loaders/handlers/SoundHandler,goo/loaders/handlers/TextureHandler,goo/loaders/handlers/TransformComponentHandler,goo/loaders/tga/TgaLoader,goo/math/MathUtils,goo/math/Matrix,goo/math/Matrix2x2,goo/math/Matrix3x3,goo/math/Matrix4x4,goo/math/Plane,goo/math/Quaternion,goo/math/Ray,goo/math/Transform,goo/math/Vector,goo/math/Vector2,goo/math/Vector3,goo/math/Vector4,goo/math/Versor,goo/noise/Noise,goo/noise/ValueNoise,goo/particles/Particle,goo/particles/ParticleEmitter,goo/particles/ParticleInfluence,goo/particles/ParticleUtils,goo/picking/BoundingTree,goo/picking/PrimitivePickLogic,goo/renderer/BufferData,goo/renderer/BufferUtils,goo/renderer/Camera,goo/renderer/Material,goo/renderer/MeshData,goo/renderer/OcclusionPartitioner,goo/renderer/RenderQueue,goo/renderer/Renderer,goo/renderer/RendererRecord,goo/renderer/Shader,goo/renderer/ShaderCall,goo/renderer/SimplePartitioner,goo/renderer/Texture,goo/renderer/TextureCreator,goo/renderer/Util,goo/renderer/bounds/BoundingBox,goo/renderer/bounds/BoundingSphere,goo/renderer/bounds/BoundingVolume,goo/renderer/light/DirectionalLight,goo/renderer/light/Light,goo/renderer/light/PointLight,goo/renderer/light/SpotLight,goo/renderer/pass/BloomPass,goo/renderer/pass/BlurPass,goo/renderer/pass/Composer,goo/renderer/pass/DOFPass,goo/renderer/pass/DepthPass,goo/renderer/pass/DoGPass,goo/renderer/pass/FullscreenPass,goo/renderer/pass/FullscreenUtil,goo/renderer/pass/NesPass,goo/renderer/pass/RenderPass,goo/renderer/pass/RenderTarget,goo/renderer/pass/SSAOPass,goo/renderer/scanline/BoundingBoxOcclusionChecker,goo/renderer/scanline/BoundingSphereOcclusionChecker,goo/renderer/scanline/Edge,goo/renderer/scanline/EdgeData,goo/renderer/scanline/EdgeMap,goo/renderer/scanline/OccludeeTriangleData,goo/renderer/scanline/OccluderTriangleData,goo/renderer/scanline/SoftwareRenderer,goo/renderer/shaders/ShaderBuilder,goo/renderer/shaders/ShaderFragment,goo/renderer/shaders/ShaderLib,goo/renderer/shadow/ShadowHandler,goo/scripts/BasicControlScript,goo/scripts/HeightMapBoundingScript,goo/scripts/MouseLookControlScript,goo/scripts/OrbitCamControlScript,goo/scripts/OrbitNPanControlScript,goo/scripts/RotationControlScript,goo/scripts/SparseHeightMapBoundingScript,goo/scripts/SplineInterpolator,goo/scripts/WASDControlScript,goo/shapes/Box,goo/shapes/Cylinder,goo/shapes/Disk,goo/shapes/FilledPolygon,goo/shapes/Grid,goo/shapes/PolyLine,goo/shapes/ProjectedGrid,goo/shapes/Quad,goo/shapes/RegularPolygon,goo/shapes/ShapeCreator,goo/shapes/SimpleBox,goo/shapes/Sphere,goo/shapes/Surface,goo/shapes/TextureGrid,goo/shapes/Torus,goo/shapes/Triangle,goo/shapes/debug/CameraDebug,goo/shapes/debug/LightDebug,goo/shapes/debug/MeshRendererDebug,goo/statemachine/FSMComponent,goo/statemachine/FSMSystem,goo/statemachine/FSMUtil,goo/statemachine/Machine,goo/statemachine/State,goo/statemachine/actions/Action,goo/statemachine/actions/Actions,goo/statemachine/actions/AddPositionAction,goo/statemachine/actions/AddVariableAction,goo/statemachine/actions/AddVectorAction,goo/statemachine/actions/EventListenerAction,goo/statemachine/actions/FollowEntityAction,goo/statemachine/actions/GetPositionAction,goo/statemachine/actions/GuiButtonAction,goo/statemachine/actions/KeyDownAction,goo/statemachine/actions/KeyPressAction,goo/statemachine/actions/KeyUpAction,goo/statemachine/actions/LogVariableAction,goo/statemachine/actions/MouseClickAction,goo/statemachine/actions/MouseMoveAction,goo/statemachine/actions/MultiplyVariableAction,goo/statemachine/actions/NumberCompareAction,goo/statemachine/actions/RandomEventAction,goo/statemachine/actions/ScriptAction,goo/statemachine/actions/SetAnimationAction,goo/statemachine/actions/SetClearColorAction,goo/statemachine/actions/SetCssPropertyAction,goo/statemachine/actions/SetLightRangeAction,goo/statemachine/actions/SetPositionAction,goo/statemachine/actions/SetRotationAction,goo/statemachine/actions/SetVariableAction,goo/statemachine/actions/TestAngleAction,goo/statemachine/actions/TestCollisionAction,goo/statemachine/actions/TestSpeedAction,goo/statemachine/actions/TweenAction,goo/statemachine/actions/TweenPositionAction,goo/statemachine/actions/TweenRotationAction,goo/statemachine/actions/WaitAction,goo/util/Ajax,goo/util/ArrayUtil,goo/util/ColorUtil,goo/util/ConsoleUtil,goo/util/DebugDraw,goo/util/DebugDrawHelper,goo/util/Deferred,goo/util/Enum,goo/util/FastBuilder,goo/util/FrustumViewer,goo/util/GameUtils,goo/util/Grid,goo/util/Handy,goo/util/Latch,goo/util/LightPointer,goo/util/Logo,goo/util/MeshBuilder,goo/util/NoWebGL,goo/util/ObjectUtil,goo/util/Promise,goo/util/PromiseUtil,goo/util/Rc4Random,goo/util/SimpleResourceUtil,goo/util/Skybox,goo/util/Stats,goo/util/StringUtil,goo/util/TangentGenerator,goo/util/URLTools,goo/util/gizmos/Gizmo,goo/util/gizmos/RotationGizmo,goo/util/gizmos/ScaleGizmo,goo/util/gizmos/TranslationGizmo,goo/util/rsvp".split(","));
define("req_temp", function () {});