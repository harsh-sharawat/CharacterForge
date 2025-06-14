/*!
 * Bootstrap v5.0.1 (https://getbootstrap.com/)
 * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e(require("@popperjs/core")) : "function" == typeof define && define.amd ? define(["@popperjs/core"], e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = e(t.Popper)
}(this, (function(t) {
    "use strict";

    function e(t) {
        if (t && t.__esModule) return t;
        var e = Object.create(null);
        return t && Object.keys(t).forEach((function(s) {
            if ("default" !== s) {
                var i = Object.getOwnPropertyDescriptor(t, s);
                Object.defineProperty(e, s, i.get ? i : {
                    enumerable: !0,
                    get: function() {
                        return t[s]
                    }
                })
            }
        })), e.default = t, Object.freeze(e)
    }
    var s = e(t);
    const i = {
            find: (t, e = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(e, t)),
            findOne: (t, e = document.documentElement) => Element.prototype.querySelector.call(e, t),
            children: (t, e) => [].concat(...t.children).filter(t => t.matches(e)),
            parents(t, e) {
                const s = [];
                let i = t.parentNode;
                for (; i && i.nodeType === Node.ELEMENT_NODE && 3 !== i.nodeType;) i.matches(e) && s.push(i), i = i.parentNode;
                return s
            },
            prev(t, e) {
                let s = t.previousElementSibling;
                for (; s;) {
                    if (s.matches(e)) return [s];
                    s = s.previousElementSibling
                }
                return []
            },
            next(t, e) {
                let s = t.nextElementSibling;
                for (; s;) {
                    if (s.matches(e)) return [s];
                    s = s.nextElementSibling
                }
                return []
            }
        },
        n = t => {
            do {
                t += Math.floor(1e6 * Math.random())
            } while (document.getElementById(t));
            return t
        },
        o = t => {
            let e = t.getAttribute("data-bs-target");
            if (!e || "#" === e) {
                let s = t.getAttribute("href");
                if (!s || !s.includes("#") && !s.startsWith(".")) return null;
                s.includes("#") && !s.startsWith("#") && (s = "#" + s.split("#")[1]), e = s && "#" !== s ? s.trim() : null
            }
            return e
        },
        r = t => {
            const e = o(t);
            return e && document.querySelector(e) ? e : null
        },
        a = t => {
            const e = o(t);
            return e ? document.querySelector(e) : null
        },
        l = t => {
            if (!t) return 0;
            let {
                transitionDuration: e,
                transitionDelay: s
            } = window.getComputedStyle(t);
            const i = Number.parseFloat(e),
                n = Number.parseFloat(s);
            return i || n ? (e = e.split(",")[0], s = s.split(",")[0], 1e3 * (Number.parseFloat(e) + Number.parseFloat(s))) : 0
        },
        c = t => {
            t.dispatchEvent(new Event("transitionend"))
        },
        h = t => !(!t || "object" != typeof t) && (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType),
        d = t => h(t) ? t.jquery ? t[0] : t : "string" == typeof t && t.length > 0 ? i.findOne(t) : null,
        u = (t, e) => {
            let s = !1;
            const i = e + 5;
            t.addEventListener("transitionend", (function e() {
                s = !0, t.removeEventListener("transitionend", e)
            })), setTimeout(() => {
                s || c(t)
            }, i)
        },
        g = (t, e, s) => {
            Object.keys(s).forEach(i => {
                const n = s[i],
                    o = e[i],
                    r = o && h(o) ? "element" : null == (a = o) ? "" + a : {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase();
                var a;
                if (!new RegExp(n).test(r)) throw new TypeError(`${t.toUpperCase()}: Option "${i}" provided type "${r}" but expected type "${n}".`)
            })
        },
        f = t => {
            if (!t) return !1;
            if (t.style && t.parentNode && t.parentNode.style) {
                const e = getComputedStyle(t),
                    s = getComputedStyle(t.parentNode);
                return "none" !== e.display && "none" !== s.display && "hidden" !== e.visibility
            }
            return !1
        },
        p = t => !t || t.nodeType !== Node.ELEMENT_NODE || !!t.classList.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled")),
        m = t => {
            if (!document.documentElement.attachShadow) return null;
            if ("function" == typeof t.getRootNode) {
                const e = t.getRootNode();
                return e instanceof ShadowRoot ? e : null
            }
            return t instanceof ShadowRoot ? t : t.parentNode ? m(t.parentNode) : null
        },
        _ = () => {},
        b = t => t.offsetHeight,
        v = () => {
            const {
                jQuery: t
            } = window;
            return t && !document.body.hasAttribute("data-bs-no-jquery") ? t : null
        },
        y = () => "rtl" === document.documentElement.dir,
        w = t => {
            var e;
            e = () => {
                const e = v();
                if (e) {
                    const s = t.NAME,
                        i = e.fn[s];
                    e.fn[s] = t.jQueryInterface, e.fn[s].Constructor = t, e.fn[s].noConflict = () => (e.fn[s] = i, t.jQueryInterface)
                }
            }, "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", e) : e()
        },
        E = t => {
            "function" == typeof t && t()
        },
        T = new Map;
    var A = {
        set(t, e, s) {
            T.has(t) || T.set(t, new Map);
            const i = T.get(t);
            i.has(e) || 0 === i.size ? i.set(e, s) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(i.keys())[0]}.`)
        },
        get: (t, e) => T.has(t) && T.get(t).get(e) || null,
        remove(t, e) {
            if (!T.has(t)) return;
            const s = T.get(t);
            s.delete(e), 0 === s.size && T.delete(t)
        }
    };
    const k = /[^.]*(?=\..*)\.|.*/,
        L = /\..*/,
        C = /::\d+$/,
        D = {};
    let N = 1;
    const S = {
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        },
        O = /^(mouseenter|mouseleave)/i,
        I = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);

    function x(t, e) {
        return e && `${e}::${N++}` || t.uidEvent || N++
    }

    function j(t) {
        const e = x(t);
        return t.uidEvent = e, D[e] = D[e] || {}, D[e]
    }

    function P(t, e, s = null) {
        const i = Object.keys(t);
        for (let n = 0, o = i.length; n < o; n++) {
            const o = t[i[n]];
            if (o.originalHandler === e && o.delegationSelector === s) return o
        }
        return null
    }

    function M(t, e, s) {
        const i = "string" == typeof e,
            n = i ? s : e;
        let o = B(t);
        return I.has(o) || (o = t), [i, n, o]
    }

    function H(t, e, s, i, n) {
        if ("string" != typeof e || !t) return;
        if (s || (s = i, i = null), O.test(e)) {
            const t = t => function(e) {
                if (!e.relatedTarget || e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget)) return t.call(this, e)
            };
            i ? i = t(i) : s = t(s)
        }
        const [o, r, a] = M(e, s, i), l = j(t), c = l[a] || (l[a] = {}), h = P(c, r, o ? s : null);
        if (h) return void(h.oneOff = h.oneOff && n);
        const d = x(r, e.replace(k, "")),
            u = o ? function(t, e, s) {
                return function i(n) {
                    const o = t.querySelectorAll(e);
                    for (let {
                            target: r
                        } = n; r && r !== this; r = r.parentNode)
                        for (let a = o.length; a--;)
                            if (o[a] === r) return n.delegateTarget = r, i.oneOff && $.off(t, n.type, e, s), s.apply(r, [n]);
                    return null
                }
            }(t, s, i) : function(t, e) {
                return function s(i) {
                    return i.delegateTarget = t, s.oneOff && $.off(t, i.type, e), e.apply(t, [i])
                }
            }(t, s);
        u.delegationSelector = o ? s : null, u.originalHandler = r, u.oneOff = n, u.uidEvent = d, c[d] = u, t.addEventListener(a, u, o)
    }

    function R(t, e, s, i, n) {
        const o = P(e[s], i, n);
        o && (t.removeEventListener(s, o, Boolean(n)), delete e[s][o.uidEvent])
    }

    function B(t) {
        return t = t.replace(L, ""), S[t] || t
    }
    const $ = {
        on(t, e, s, i) {
            H(t, e, s, i, !1)
        },
        one(t, e, s, i) {
            H(t, e, s, i, !0)
        },
        off(t, e, s, i) {
            if ("string" != typeof e || !t) return;
            const [n, o, r] = M(e, s, i), a = r !== e, l = j(t), c = e.startsWith(".");
            if (void 0 !== o) {
                if (!l || !l[r]) return;
                return void R(t, l, r, o, n ? s : null)
            }
            c && Object.keys(l).forEach(s => {
                ! function(t, e, s, i) {
                    const n = e[s] || {};
                    Object.keys(n).forEach(o => {
                        if (o.includes(i)) {
                            const i = n[o];
                            R(t, e, s, i.originalHandler, i.delegationSelector)
                        }
                    })
                }(t, l, s, e.slice(1))
            });
            const h = l[r] || {};
            Object.keys(h).forEach(s => {
                const i = s.replace(C, "");
                if (!a || e.includes(i)) {
                    const e = h[s];
                    R(t, l, r, e.originalHandler, e.delegationSelector)
                }
            })
        },
        trigger(t, e, s) {
            if ("string" != typeof e || !t) return null;
            const i = v(),
                n = B(e),
                o = e !== n,
                r = I.has(n);
            let a, l = !0,
                c = !0,
                h = !1,
                d = null;
            return o && i && (a = i.Event(e, s), i(t).trigger(a), l = !a.isPropagationStopped(), c = !a.isImmediatePropagationStopped(), h = a.isDefaultPrevented()), r ? (d = document.createEvent("HTMLEvents"), d.initEvent(n, l, !0)) : d = new CustomEvent(e, {
                bubbles: l,
                cancelable: !0
            }), void 0 !== s && Object.keys(s).forEach(t => {
                Object.defineProperty(d, t, {
                    get: () => s[t]
                })
            }), h && d.preventDefault(), c && t.dispatchEvent(d), d.defaultPrevented && void 0 !== a && a.preventDefault(), d
        }
    };
    class z {
        constructor(t) {
            (t = d(t)) && (this._element = t, A.set(this._element, this.constructor.DATA_KEY, this))
        }
        dispose() {
            A.remove(this._element, this.constructor.DATA_KEY), $.off(this._element, this.constructor.EVENT_KEY), Object.getOwnPropertyNames(this).forEach(t => {
                this[t] = null
            })
        }
        _queueCallback(t, e, s = !0) {
            if (!s) return void E(t);
            const i = l(e);
            $.one(e, "transitionend", () => E(t)), u(e, i)
        }
        static getInstance(t) {
            return A.get(t, this.DATA_KEY)
        }
        static get VERSION() {
            return "5.0.1"
        }
        static get NAME() {
            throw new Error('You have to implement the static method "NAME", for each component!')
        }
        static get DATA_KEY() {
            return "bs." + this.NAME
        }
        static get EVENT_KEY() {
            return "." + this.DATA_KEY
        }
    }
    class U extends z {
        static get NAME() {
            return "alert"
        }
        close(t) {
            const e = t ? this._getRootElement(t) : this._element,
                s = this._triggerCloseEvent(e);
            null === s || s.defaultPrevented || this._removeElement(e)
        }
        _getRootElement(t) {
            return a(t) || t.closest(".alert")
        }
        _triggerCloseEvent(t) {
            return $.trigger(t, "close.bs.alert")
        }
        _removeElement(t) {
            t.classList.remove("show");
            const e = t.classList.contains("fade");
            this._queueCallback(() => this._destroyElement(t), t, e)
        }
        _destroyElement(t) {
            t.parentNode && t.parentNode.removeChild(t), $.trigger(t, "closed.bs.alert")
        }
        static jQueryInterface(t) {
            return this.each((function() {
                let e = A.get(this, "bs.alert");
                e || (e = new U(this)), "close" === t && e[t](this)
            }))
        }
        static handleDismiss(t) {
            return function(e) {
                e && e.preventDefault(), t.close(this)
            }
        }
    }
    $.on(document, "click.bs.alert.data-api", '[data-bs-dismiss="alert"]', U.handleDismiss(new U)), w(U);
    class q extends z {
        static get NAME() {
            return "button"
        }
        toggle() {
            this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"))
        }
        static jQueryInterface(t) {
            return this.each((function() {
                let e = A.get(this, "bs.button");
                e || (e = new q(this)), "toggle" === t && e[t]()
            }))
        }
    }

    function F(t) {
        return "true" === t || "false" !== t && (t === Number(t).toString() ? Number(t) : "" === t || "null" === t ? null : t)
    }

    function W(t) {
        return t.replace(/[A-Z]/g, t => "-" + t.toLowerCase())
    }
    $.on(document, "click.bs.button.data-api", '[data-bs-toggle="button"]', t => {
        t.preventDefault();
        const e = t.target.closest('[data-bs-toggle="button"]');
        let s = A.get(e, "bs.button");
        s || (s = new q(e)), s.toggle()
    }), w(q);
    const K = {
            setDataAttribute(t, e, s) {
                t.setAttribute("data-bs-" + W(e), s)
            },
            removeDataAttribute(t, e) {
                t.removeAttribute("data-bs-" + W(e))
            },
            getDataAttributes(t) {
                if (!t) return {};
                const e = {};
                return Object.keys(t.dataset).filter(t => t.startsWith("bs")).forEach(s => {
                    let i = s.replace(/^bs/, "");
                    i = i.charAt(0).toLowerCase() + i.slice(1, i.length), e[i] = F(t.dataset[s])
                }), e
            },
            getDataAttribute: (t, e) => F(t.getAttribute("data-bs-" + W(e))),
            offset(t) {
                const e = t.getBoundingClientRect();
                return {
                    top: e.top + document.body.scrollTop,
                    left: e.left + document.body.scrollLeft
                }
            },
            position: t => ({
                top: t.offsetTop,
                left: t.offsetLeft
            })
        },
        V = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0,
            touch: !0
        },
        Q = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean",
            touch: "boolean"
        },
        X = "next",
        Y = "prev",
        G = "left",
        Z = "right";
    class J extends z {
        constructor(t, e) {
            super(t), this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e), this._indicatorsElement = i.findOne(".carousel-indicators", this._element), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent), this._addEventListeners()
        }
        static get Default() {
            return V
        }
        static get NAME() {
            return "carousel"
        }
        next() {
            this._isSliding || this._slide(X)
        }
        nextWhenVisible() {
            !document.hidden && f(this._element) && this.next()
        }
        prev() {
            this._isSliding || this._slide(Y)
        }
        pause(t) {
            t || (this._isPaused = !0), i.findOne(".carousel-item-next, .carousel-item-prev", this._element) && (c(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
        }
        cycle(t) {
            t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config && this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
        }
        to(t) {
            this._activeElement = i.findOne(".active.carousel-item", this._element);
            const e = this._getItemIndex(this._activeElement);
            if (t > this._items.length - 1 || t < 0) return;
            if (this._isSliding) return void $.one(this._element, "slid.bs.carousel", () => this.to(t));
            if (e === t) return this.pause(), void this.cycle();
            const s = t > e ? X : Y;
            this._slide(s, this._items[t])
        }
        _getConfig(t) {
            return t = { ...V,
                ...t
            }, g("carousel", t, Q), t
        }
        _handleSwipe() {
            const t = Math.abs(this.touchDeltaX);
            if (t <= 40) return;
            const e = t / this.touchDeltaX;
            this.touchDeltaX = 0, e && this._slide(e > 0 ? Z : G)
        }
        _addEventListeners() {
            this._config.keyboard && $.on(this._element, "keydown.bs.carousel", t => this._keydown(t)), "hover" === this._config.pause && ($.on(this._element, "mouseenter.bs.carousel", t => this.pause(t)), $.on(this._element, "mouseleave.bs.carousel", t => this.cycle(t))), this._config.touch && this._touchSupported && this._addTouchEventListeners()
        }
        _addTouchEventListeners() {
            const t = t => {
                    !this._pointerEvent || "pen" !== t.pointerType && "touch" !== t.pointerType ? this._pointerEvent || (this.touchStartX = t.touches[0].clientX) : this.touchStartX = t.clientX
                },
                e = t => {
                    this.touchDeltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - this.touchStartX
                },
                s = t => {
                    !this._pointerEvent || "pen" !== t.pointerType && "touch" !== t.pointerType || (this.touchDeltaX = t.clientX - this.touchStartX), this._handleSwipe(), "hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(t => this.cycle(t), 500 + this._config.interval))
                };
            i.find(".carousel-item img", this._element).forEach(t => {
                $.on(t, "dragstart.bs.carousel", t => t.preventDefault())
            }), this._pointerEvent ? ($.on(this._element, "pointerdown.bs.carousel", e => t(e)), $.on(this._element, "pointerup.bs.carousel", t => s(t)), this._element.classList.add("pointer-event")) : ($.on(this._element, "touchstart.bs.carousel", e => t(e)), $.on(this._element, "touchmove.bs.carousel", t => e(t)), $.on(this._element, "touchend.bs.carousel", t => s(t)))
        }
        _keydown(t) {
            /input|textarea/i.test(t.target.tagName) || ("ArrowLeft" === t.key ? (t.preventDefault(), this._slide(Z)) : "ArrowRight" === t.key && (t.preventDefault(), this._slide(G)))
        }
        _getItemIndex(t) {
            return this._items = t && t.parentNode ? i.find(".carousel-item", t.parentNode) : [], this._items.indexOf(t)
        }
        _getItemByOrder(t, e) {
            const s = t === X,
                i = t === Y,
                n = this._getItemIndex(e),
                o = this._items.length - 1;
            if ((i && 0 === n || s && n === o) && !this._config.wrap) return e;
            const r = (n + (i ? -1 : 1)) % this._items.length;
            return -1 === r ? this._items[this._items.length - 1] : this._items[r]
        }
        _triggerSlideEvent(t, e) {
            const s = this._getItemIndex(t),
                n = this._getItemIndex(i.findOne(".active.carousel-item", this._element));
            return $.trigger(this._element, "slide.bs.carousel", {
                relatedTarget: t,
                direction: e,
                from: n,
                to: s
            })
        }
        _setActiveIndicatorElement(t) {
            if (this._indicatorsElement) {
                const e = i.findOne(".active", this._indicatorsElement);
                e.classList.remove("active"), e.removeAttribute("aria-current");
                const s = i.find("[data-bs-target]", this._indicatorsElement);
                for (let e = 0; e < s.length; e++)
                    if (Number.parseInt(s[e].getAttribute("data-bs-slide-to"), 10) === this._getItemIndex(t)) {
                        s[e].classList.add("active"), s[e].setAttribute("aria-current", "true");
                        break
                    }
            }
        }
        _updateInterval() {
            const t = this._activeElement || i.findOne(".active.carousel-item", this._element);
            if (!t) return;
            const e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
            e ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = e) : this._config.interval = this._config.defaultInterval || this._config.interval
        }
        _slide(t, e) {
            const s = this._directionToOrder(t),
                n = i.findOne(".active.carousel-item", this._element),
                o = this._getItemIndex(n),
                r = e || this._getItemByOrder(s, n),
                a = this._getItemIndex(r),
                l = Boolean(this._interval),
                c = s === X,
                h = c ? "carousel-item-start" : "carousel-item-end",
                d = c ? "carousel-item-next" : "carousel-item-prev",
                u = this._orderToDirection(s);
            if (r && r.classList.contains("active")) return void(this._isSliding = !1);
            if (this._triggerSlideEvent(r, u).defaultPrevented) return;
            if (!n || !r) return;
            this._isSliding = !0, l && this.pause(), this._setActiveIndicatorElement(r), this._activeElement = r;
            const g = () => {
                $.trigger(this._element, "slid.bs.carousel", {
                    relatedTarget: r,
                    direction: u,
                    from: o,
                    to: a
                })
            };
            if (this._element.classList.contains("slide")) {
                r.classList.add(d), b(r), n.classList.add(h), r.classList.add(h);
                const t = () => {
                    r.classList.remove(h, d), r.classList.add("active"), n.classList.remove("active", d, h), this._isSliding = !1, setTimeout(g, 0)
                };
                this._queueCallback(t, n, !0)
            } else n.classList.remove("active"), r.classList.add("active"), this._isSliding = !1, g();
            l && this.cycle()
        }
        _directionToOrder(t) {
            return [Z, G].includes(t) ? y() ? t === G ? Y : X : t === G ? X : Y : t
        }
        _orderToDirection(t) {
            return [X, Y].includes(t) ? y() ? t === Y ? G : Z : t === Y ? Z : G : t
        }
        static carouselInterface(t, e) {
            let s = A.get(t, "bs.carousel"),
                i = { ...V,
                    ...K.getDataAttributes(t)
                };
            "object" == typeof e && (i = { ...i,
                ...e
            });
            const n = "string" == typeof e ? e : i.slide;
            if (s || (s = new J(t, i)), "number" == typeof e) s.to(e);
            else if ("string" == typeof n) {
                if (void 0 === s[n]) throw new TypeError(`No method named "${n}"`);
                s[n]()
            } else i.interval && i.ride && (s.pause(), s.cycle())
        }
        static jQueryInterface(t) {
            return this.each((function() {
                J.carouselInterface(this, t)
            }))
        }
        static dataApiClickHandler(t) {
            const e = a(this);
            if (!e || !e.classList.contains("carousel")) return;
            const s = { ...K.getDataAttributes(e),
                    ...K.getDataAttributes(this)
                },
                i = this.getAttribute("data-bs-slide-to");
            i && (s.interval = !1), J.carouselInterface(e, s), i && A.get(e, "bs.carousel").to(i), t.preventDefault()
        }
    }
    $.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", J.dataApiClickHandler), $.on(window, "load.bs.carousel.data-api", () => {
        const t = i.find('[data-bs-ride="carousel"]');
        for (let e = 0, s = t.length; e < s; e++) J.carouselInterface(t[e], A.get(t[e], "bs.carousel"))
    }), w(J);
    const tt = {
            toggle: !0,
            parent: ""
        },
        et = {
            toggle: "boolean",
            parent: "(string|element)"
        };
    class st extends z {
        constructor(t, e) {
            super(t), this._isTransitioning = !1, this._config = this._getConfig(e), this._triggerArray = i.find(`[data-bs-toggle="collapse"][href="#${this._element.id}"],[data-bs-toggle="collapse"][data-bs-target="#${this._element.id}"]`);
            const s = i.find('[data-bs-toggle="collapse"]');
            for (let t = 0, e = s.length; t < e; t++) {
                const e = s[t],
                    n = r(e),
                    o = i.find(n).filter(t => t === this._element);
                null !== n && o.length && (this._selector = n, this._triggerArray.push(e))
            }
            this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
        }
        static get Default() {
            return tt
        }
        static get NAME() {
            return "collapse"
        }
        toggle() {
            this._element.classList.contains("show") ? this.hide() : this.show()
        }
        show() {
            if (this._isTransitioning || this._element.classList.contains("show")) return;
            let t, e;
            this._parent && (t = i.find(".show, .collapsing", this._parent).filter(t => "string" == typeof this._config.parent ? t.getAttribute("data-bs-parent") === this._config.parent : t.classList.contains("collapse")), 0 === t.length && (t = null));
            const s = i.findOne(this._selector);
            if (t) {
                const i = t.find(t => s !== t);
                if (e = i ? A.get(i, "bs.collapse") : null, e && e._isTransitioning) return
            }
            if ($.trigger(this._element, "show.bs.collapse").defaultPrevented) return;
            t && t.forEach(t => {
                s !== t && st.collapseInterface(t, "hide"), e || A.set(t, "bs.collapse", null)
            });
            const n = this._getDimension();
            this._element.classList.remove("collapse"), this._element.classList.add("collapsing"), this._element.style[n] = 0, this._triggerArray.length && this._triggerArray.forEach(t => {
                t.classList.remove("collapsed"), t.setAttribute("aria-expanded", !0)
            }), this.setTransitioning(!0);
            const o = "scroll" + (n[0].toUpperCase() + n.slice(1));
            this._queueCallback(() => {
                this._element.classList.remove("collapsing"), this._element.classList.add("collapse", "show"), this._element.style[n] = "", this.setTransitioning(!1), $.trigger(this._element, "shown.bs.collapse")
            }, this._element, !0), this._element.style[n] = this._element[o] + "px"
        }
        hide() {
            if (this._isTransitioning || !this._element.classList.contains("show")) return;
            if ($.trigger(this._element, "hide.bs.collapse").defaultPrevented) return;
            const t = this._getDimension();
            this._element.style[t] = this._element.getBoundingClientRect()[t] + "px", b(this._element), this._element.classList.add("collapsing"), this._element.classList.remove("collapse", "show");
            const e = this._triggerArray.length;
            if (e > 0)
                for (let t = 0; t < e; t++) {
                    const e = this._triggerArray[t],
                        s = a(e);
                    s && !s.classList.contains("show") && (e.classList.add("collapsed"), e.setAttribute("aria-expanded", !1))
                }
            this.setTransitioning(!0), this._element.style[t] = "", this._queueCallback(() => {
                this.setTransitioning(!1), this._element.classList.remove("collapsing"), this._element.classList.add("collapse"), $.trigger(this._element, "hidden.bs.collapse")
            }, this._element, !0)
        }
        setTransitioning(t) {
            this._isTransitioning = t
        }
        _getConfig(t) {
            return (t = { ...tt,
                ...t
            }).toggle = Boolean(t.toggle), g("collapse", t, et), t
        }
        _getDimension() {
            return this._element.classList.contains("width") ? "width" : "height"
        }
        _getParent() {
            let {
                parent: t
            } = this._config;
            t = d(t);
            const e = `[data-bs-toggle="collapse"][data-bs-parent="${t}"]`;
            return i.find(e, t).forEach(t => {
                const e = a(t);
                this._addAriaAndCollapsedClass(e, [t])
            }), t
        }
        _addAriaAndCollapsedClass(t, e) {
            if (!t || !e.length) return;
            const s = t.classList.contains("show");
            e.forEach(t => {
                s ? t.classList.remove("collapsed") : t.classList.add("collapsed"), t.setAttribute("aria-expanded", s)
            })
        }
        static collapseInterface(t, e) {
            let s = A.get(t, "bs.collapse");
            const i = { ...tt,
                ...K.getDataAttributes(t),
                ..."object" == typeof e && e ? e : {}
            };
            if (!s && i.toggle && "string" == typeof e && /show|hide/.test(e) && (i.toggle = !1), s || (s = new st(t, i)), "string" == typeof e) {
                if (void 0 === s[e]) throw new TypeError(`No method named "${e}"`);
                s[e]()
            }
        }
        static jQueryInterface(t) {
            return this.each((function() {
                st.collapseInterface(this, t)
            }))
        }
    }
    $.on(document, "click.bs.collapse.data-api", '[data-bs-toggle="collapse"]', (function(t) {
        ("A" === t.target.tagName || t.delegateTarget && "A" === t.delegateTarget.tagName) && t.preventDefault();
        const e = K.getDataAttributes(this),
            s = r(this);
        i.find(s).forEach(t => {
            const s = A.get(t, "bs.collapse");
            let i;
            s ? (null === s._parent && "string" == typeof e.parent && (s._config.parent = e.parent, s._parent = s._getParent()), i = "toggle") : i = e, st.collapseInterface(t, i)
        })
    })), w(st);
    const it = new RegExp("ArrowUp|ArrowDown|Escape"),
        nt = y() ? "top-end" : "top-start",
        ot = y() ? "top-start" : "top-end",
        rt = y() ? "bottom-end" : "bottom-start",
        at = y() ? "bottom-start" : "bottom-end",
        lt = y() ? "left-start" : "right-start",
        ct = y() ? "right-start" : "left-start",
        ht = {
            offset: [0, 2],
            boundary: "clippingParents",
            reference: "toggle",
            display: "dynamic",
            popperConfig: null,
            autoClose: !0
        },
        dt = {
            offset: "(array|string|function)",
            boundary: "(string|element)",
            reference: "(string|element|object)",
            display: "string",
            popperConfig: "(null|object|function)",
            autoClose: "(boolean|string)"
        };
    class ut extends z {
        constructor(t, e) {
            super(t), this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
        }
        static get Default() {
            return ht
        }
        static get DefaultType() {
            return dt
        }
        static get NAME() {
            return "dropdown"
        }
        toggle() {
            p(this._element) || (this._element.classList.contains("show") ? this.hide() : this.show())
        }
        show() {
            if (p(this._element) || this._menu.classList.contains("show")) return;
            const t = ut.getParentFromElement(this._element),
                e = {
                    relatedTarget: this._element
                };
            if (!$.trigger(this._element, "show.bs.dropdown", e).defaultPrevented) {
                if (this._inNavbar) K.setDataAttribute(this._menu, "popper", "none");
                else {
                    if (void 0 === s) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
                    let e = this._element;
                    "parent" === this._config.reference ? e = t : h(this._config.reference) ? e = d(this._config.reference) : "object" == typeof this._config.reference && (e = this._config.reference);
                    const i = this._getPopperConfig(),
                        n = i.modifiers.find(t => "applyStyles" === t.name && !1 === t.enabled);
                    this._popper = s.createPopper(e, this._menu, i), n && K.setDataAttribute(this._menu, "popper", "static")
                }
                "ontouchstart" in document.documentElement && !t.closest(".navbar-nav") && [].concat(...document.body.children).forEach(t => $.on(t, "mouseover", _)), this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.toggle("show"), this._element.classList.toggle("show"), $.trigger(this._element, "shown.bs.dropdown", e)
            }
        }
        hide() {
            if (p(this._element) || !this._menu.classList.contains("show")) return;
            const t = {
                relatedTarget: this._element
            };
            this._completeHide(t)
        }
        dispose() {
            this._popper && this._popper.destroy(), super.dispose()
        }
        update() {
            this._inNavbar = this._detectNavbar(), this._popper && this._popper.update()
        }
        _addEventListeners() {
            $.on(this._element, "click.bs.dropdown", t => {
                t.preventDefault(), this.toggle()
            })
        }
        _completeHide(t) {
            $.trigger(this._element, "hide.bs.dropdown", t).defaultPrevented || ("ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach(t => $.off(t, "mouseover", _)), this._popper && this._popper.destroy(), this._menu.classList.remove("show"), this._element.classList.remove("show"), this._element.setAttribute("aria-expanded", "false"), K.removeDataAttribute(this._menu, "popper"), $.trigger(this._element, "hidden.bs.dropdown", t))
        }
        _getConfig(t) {
            if (t = { ...this.constructor.Default,
                    ...K.getDataAttributes(this._element),
                    ...t
                }, g("dropdown", t, this.constructor.DefaultType), "object" == typeof t.reference && !h(t.reference) && "function" != typeof t.reference.getBoundingClientRect) throw new TypeError("dropdown".toUpperCase() + ': Option "reference" provided type "object" without a required "getBoundingClientRect" method.');
            return t
        }
        _getMenuElement() {
            return i.next(this._element, ".dropdown-menu")[0]
        }
        _getPlacement() {
            const t = this._element.parentNode;
            if (t.classList.contains("dropend")) return lt;
            if (t.classList.contains("dropstart")) return ct;
            const e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
            return t.classList.contains("dropup") ? e ? ot : nt : e ? at : rt
        }
        _detectNavbar() {
            return null !== this._element.closest(".navbar")
        }
        _getOffset() {
            const {
                offset: t
            } = this._config;
            return "string" == typeof t ? t.split(",").map(t => Number.parseInt(t, 10)) : "function" == typeof t ? e => t(e, this._element) : t
        }
        _getPopperConfig() {
            const t = {
                placement: this._getPlacement(),
                modifiers: [{
                    name: "preventOverflow",
                    options: {
                        boundary: this._config.boundary
                    }
                }, {
                    name: "offset",
                    options: {
                        offset: this._getOffset()
                    }
                }]
            };
            return "static" === this._config.display && (t.modifiers = [{
                name: "applyStyles",
                enabled: !1
            }]), { ...t,
                ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig
            }
        }
        _selectMenuItem(t) {
            const e = i.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter(f);
            if (!e.length) return;
            let s = e.indexOf(t.target);
            "ArrowUp" === t.key && s > 0 && s--, "ArrowDown" === t.key && s < e.length - 1 && s++, s = -1 === s ? 0 : s, e[s].focus()
        }
        static dropdownInterface(t, e) {
            let s = A.get(t, "bs.dropdown");
            if (s || (s = new ut(t, "object" == typeof e ? e : null)), "string" == typeof e) {
                if (void 0 === s[e]) throw new TypeError(`No method named "${e}"`);
                s[e]()
            }
        }
        static jQueryInterface(t) {
            return this.each((function() {
                ut.dropdownInterface(this, t)
            }))
        }
        static clearMenus(t) {
            if (t && (2 === t.button || "keyup" === t.type && "Tab" !== t.key)) return;
            const e = i.find('[data-bs-toggle="dropdown"]');
            for (let s = 0, i = e.length; s < i; s++) {
                const i = A.get(e[s], "bs.dropdown");
                if (!i || !1 === i._config.autoClose) continue;
                if (!i._element.classList.contains("show")) continue;
                const n = {
                    relatedTarget: i._element
                };
                if (t) {
                    const e = t.composedPath(),
                        s = e.includes(i._menu);
                    if (e.includes(i._element) || "inside" === i._config.autoClose && !s || "outside" === i._config.autoClose && s) continue;
                    if (i._menu.contains(t.target) && ("keyup" === t.type && "Tab" === t.key || /input|select|option|textarea|form/i.test(t.target.tagName))) continue;
                    "click" === t.type && (n.clickEvent = t)
                }
                i._completeHide(n)
            }
        }
        static getParentFromElement(t) {
            return a(t) || t.parentNode
        }
        static dataApiKeydownHandler(t) {
            if (/input|textarea/i.test(t.target.tagName) ? "Space" === t.key || "Escape" !== t.key && ("ArrowDown" !== t.key && "ArrowUp" !== t.key || t.target.closest(".dropdown-menu")) : !it.test(t.key)) return;
            const e = this.classList.contains("show");
            if (!e && "Escape" === t.key) return;
            if (t.preventDefault(), t.stopPropagation(), p(this)) return;
            const s = () => this.matches('[data-bs-toggle="dropdown"]') ? this : i.prev(this, '[data-bs-toggle="dropdown"]')[0];
            if ("Escape" === t.key) return s().focus(), void ut.clearMenus();
            e || "ArrowUp" !== t.key && "ArrowDown" !== t.key ? e && "Space" !== t.key ? ut.getInstance(s())._selectMenuItem(t) : ut.clearMenus() : s().click()
        }
    }
    $.on(document, "keydown.bs.dropdown.data-api", '[data-bs-toggle="dropdown"]', ut.dataApiKeydownHandler), $.on(document, "keydown.bs.dropdown.data-api", ".dropdown-menu", ut.dataApiKeydownHandler), $.on(document, "click.bs.dropdown.data-api", ut.clearMenus), $.on(document, "keyup.bs.dropdown.data-api", ut.clearMenus), $.on(document, "click.bs.dropdown.data-api", '[data-bs-toggle="dropdown"]', (function(t) {
        t.preventDefault(), ut.dropdownInterface(this)
    })), w(ut);
    const gt = () => {
            const t = document.documentElement.clientWidth;
            return Math.abs(window.innerWidth - t)
        },
        ft = (t = gt()) => {
            pt(), mt("body", "paddingRight", e => e + t), mt(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", "paddingRight", e => e + t), mt(".sticky-top", "marginRight", e => e - t)
        },
        pt = () => {
            const t = document.body.style.overflow;
            t && K.setDataAttribute(document.body, "overflow", t), document.body.style.overflow = "hidden"
        },
        mt = (t, e, s) => {
            const n = gt();
            i.find(t).forEach(t => {
                if (t !== document.body && window.innerWidth > t.clientWidth + n) return;
                const i = t.style[e],
                    o = window.getComputedStyle(t)[e];
                K.setDataAttribute(t, e, i), t.style[e] = s(Number.parseFloat(o)) + "px"
            })
        },
        _t = () => {
            bt("body", "overflow"), bt("body", "paddingRight"), bt(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", "paddingRight"), bt(".sticky-top", "marginRight")
        },
        bt = (t, e) => {
            i.find(t).forEach(t => {
                const s = K.getDataAttribute(t, e);
                void 0 === s ? t.style.removeProperty(e) : (K.removeDataAttribute(t, e), t.style[e] = s)
            })
        },
        vt = {
            isVisible: !0,
            isAnimated: !1,
            rootElement: document.body,
            clickCallback: null
        },
        yt = {
            isVisible: "boolean",
            isAnimated: "boolean",
            rootElement: "element",
            clickCallback: "(function|null)"
        };
    class wt {
        constructor(t) {
            this._config = this._getConfig(t), this._isAppended = !1, this._element = null
        }
        show(t) {
            this._config.isVisible ? (this._append(), this._config.isAnimated && b(this._getElement()), this._getElement().classList.add("show"), this._emulateAnimation(() => {
                E(t)
            })) : E(t)
        }
        hide(t) {
            this._config.isVisible ? (this._getElement().classList.remove("show"), this._emulateAnimation(() => {
                this.dispose(), E(t)
            })) : E(t)
        }
        _getElement() {
            if (!this._element) {
                const t = document.createElement("div");
                t.className = "modal-backdrop", this._config.isAnimated && t.classList.add("fade"), this._element = t
            }
            return this._element
        }
        _getConfig(t) {
            return (t = { ...vt,
                ..."object" == typeof t ? t : {}
            }).rootElement = t.rootElement || document.body, g("backdrop", t, yt), t
        }
        _append() {
            this._isAppended || (this._config.rootElement.appendChild(this._getElement()), $.on(this._getElement(), "mousedown.bs.backdrop", () => {
                E(this._config.clickCallback)
            }), this._isAppended = !0)
        }
        dispose() {
            this._isAppended && ($.off(this._element, "mousedown.bs.backdrop"), this._getElement().parentNode.removeChild(this._element), this._isAppended = !1)
        }
        _emulateAnimation(t) {
            if (!this._config.isAnimated) return void E(t);
            const e = l(this._getElement());
            $.one(this._getElement(), "transitionend", () => E(t)), u(this._getElement(), e)
        }
    }
    const Et = {
            backdrop: !0,
            keyboard: !0,
            focus: !0
        },
        Tt = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean"
        };
    class At extends z {
        constructor(t, e) {
            super(t), this._config = this._getConfig(e), this._dialog = i.findOne(".modal-dialog", this._element), this._backdrop = this._initializeBackDrop(), this._isShown = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1
        }
        static get Default() {
            return Et
        }
        static get NAME() {
            return "modal"
        }
        toggle(t) {
            return this._isShown ? this.hide() : this.show(t)
        }
        show(t) {
            if (this._isShown || this._isTransitioning) return;
            this._isAnimated() && (this._isTransitioning = !0);
            const e = $.trigger(this._element, "show.bs.modal", {
                relatedTarget: t
            });
            this._isShown || e.defaultPrevented || (this._isShown = !0, ft(), document.body.classList.add("modal-open"), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), $.on(this._element, "click.dismiss.bs.modal", '[data-bs-dismiss="modal"]', t => this.hide(t)), $.on(this._dialog, "mousedown.dismiss.bs.modal", () => {
                $.one(this._element, "mouseup.dismiss.bs.modal", t => {
                    t.target === this._element && (this._ignoreBackdropClick = !0)
                })
            }), this._showBackdrop(() => this._showElement(t)))
        }
        hide(t) {
            if (t && t.preventDefault(), !this._isShown || this._isTransitioning) return;
            if ($.trigger(this._element, "hide.bs.modal").defaultPrevented) return;
            this._isShown = !1;
            const e = this._isAnimated();
            e && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), $.off(document, "focusin.bs.modal"), this._element.classList.remove("show"), $.off(this._element, "click.dismiss.bs.modal"), $.off(this._dialog, "mousedown.dismiss.bs.modal"), this._queueCallback(() => this._hideModal(), this._element, e)
        }
        dispose() {
            [window, this._dialog].forEach(t => $.off(t, ".bs.modal")), this._backdrop.dispose(), super.dispose(), $.off(document, "focusin.bs.modal")
        }
        handleUpdate() {
            this._adjustDialog()
        }
        _initializeBackDrop() {
            return new wt({
                isVisible: Boolean(this._config.backdrop),
                isAnimated: this._isAnimated()
            })
        }
        _getConfig(t) {
            return t = { ...Et,
                ...K.getDataAttributes(this._element),
                ...t
            }, g("modal", t, Tt), t
        }
        _showElement(t) {
            const e = this._isAnimated(),
                s = i.findOne(".modal-body", this._dialog);
            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0, s && (s.scrollTop = 0), e && b(this._element), this._element.classList.add("show"), this._config.focus && this._enforceFocus(), this._queueCallback(() => {
                this._config.focus && this._element.focus(), this._isTransitioning = !1, $.trigger(this._element, "shown.bs.modal", {
                    relatedTarget: t
                })
            }, this._dialog, e)
        }
        _enforceFocus() {
            $.off(document, "focusin.bs.modal"), $.on(document, "focusin.bs.modal", t => {
                document === t.target || this._element === t.target || this._element.contains(t.target) || this._element.focus()
            })
        }
        _setEscapeEvent() {
            this._isShown ? $.on(this._element, "keydown.dismiss.bs.modal", t => {
                this._config.keyboard && "Escape" === t.key ? (t.preventDefault(), this.hide()) : this._config.keyboard || "Escape" !== t.key || this._triggerBackdropTransition()
            }) : $.off(this._element, "keydown.dismiss.bs.modal")
        }
        _setResizeEvent() {
            this._isShown ? $.on(window, "resize.bs.modal", () => this._adjustDialog()) : $.off(window, "resize.bs.modal")
        }
        _hideModal() {
            this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide(() => {
                document.body.classList.remove("modal-open"), this._resetAdjustments(), _t(), $.trigger(this._element, "hidden.bs.modal")
            })
        }
        _showBackdrop(t) {
            $.on(this._element, "click.dismiss.bs.modal", t => {
                this._ignoreBackdropClick ? this._ignoreBackdropClick = !1 : t.target === t.currentTarget && (!0 === this._config.backdrop ? this.hide() : "static" === this._config.backdrop && this._triggerBackdropTransition())
            }), this._backdrop.show(t)
        }
        _isAnimated() {
            return this._element.classList.contains("fade")
        }
        _triggerBackdropTransition() {
            if ($.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented) return;
            const t = this._element.scrollHeight > document.documentElement.clientHeight;
            t || (this._element.style.overflowY = "hidden"), this._element.classList.add("modal-static");
            const e = l(this._dialog);
            $.off(this._element, "transitionend"), $.one(this._element, "transitionend", () => {
                this._element.classList.remove("modal-static"), t || ($.one(this._element, "transitionend", () => {
                    this._element.style.overflowY = ""
                }), u(this._element, e))
            }), u(this._element, e), this._element.focus()
        }
        _adjustDialog() {
            const t = this._element.scrollHeight > document.documentElement.clientHeight,
                e = gt(),
                s = e > 0;
            (!s && t && !y() || s && !t && y()) && (this._element.style.paddingLeft = e + "px"), (s && !t && !y() || !s && t && y()) && (this._element.style.paddingRight = e + "px")
        }
        _resetAdjustments() {
            this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
        }
        static jQueryInterface(t, e) {
            return this.each((function() {
                const s = At.getInstance(this) || new At(this, "object" == typeof t ? t : {});
                if ("string" == typeof t) {
                    if (void 0 === s[t]) throw new TypeError(`No method named "${t}"`);
                    s[t](e)
                }
            }))
        }
    }
    $.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', (function(t) {
        const e = a(this);
        ["A", "AREA"].includes(this.tagName) && t.preventDefault(), $.one(e, "show.bs.modal", t => {
            t.defaultPrevented || $.one(e, "hidden.bs.modal", () => {
                f(this) && this.focus()
            })
        }), (At.getInstance(e) || new At(e)).toggle(this)
    })), w(At);
    const kt = {
            backdrop: !0,
            keyboard: !0,
            scroll: !1
        },
        Lt = {
            backdrop: "boolean",
            keyboard: "boolean",
            scroll: "boolean"
        };
    class Ct extends z {
        constructor(t, e) {
            super(t), this._config = this._getConfig(e), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._addEventListeners()
        }
        static get NAME() {
            return "offcanvas"
        }
        static get Default() {
            return kt
        }
        toggle(t) {
            return this._isShown ? this.hide() : this.show(t)
        }
        show(t) {
            this._isShown || $.trigger(this._element, "show.bs.offcanvas", {
                relatedTarget: t
            }).defaultPrevented || (this._isShown = !0, this._element.style.visibility = "visible", this._backdrop.show(), this._config.scroll || (ft(), this._enforceFocusOnElement(this._element)), this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add("show"), this._queueCallback(() => {
                $.trigger(this._element, "shown.bs.offcanvas", {
                    relatedTarget: t
                })
            }, this._element, !0))
        }
        hide() {
            this._isShown && ($.trigger(this._element, "hide.bs.offcanvas").defaultPrevented || ($.off(document, "focusin.bs.offcanvas"), this._element.blur(), this._isShown = !1, this._element.classList.remove("show"), this._backdrop.hide(), this._queueCallback(() => {
                this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._element.style.visibility = "hidden", this._config.scroll || _t(), $.trigger(this._element, "hidden.bs.offcanvas")
            }, this._element, !0)))
        }
        dispose() {
            this._backdrop.dispose(), super.dispose(), $.off(document, "focusin.bs.offcanvas")
        }
        _getConfig(t) {
            return t = { ...kt,
                ...K.getDataAttributes(this._element),
                ..."object" == typeof t ? t : {}
            }, g("offcanvas", t, Lt), t
        }
        _initializeBackDrop() {
            return new wt({
                isVisible: this._config.backdrop,
                isAnimated: !0,
                rootElement: this._element.parentNode,
                clickCallback: () => this.hide()
            })
        }
        _enforceFocusOnElement(t) {
            $.off(document, "focusin.bs.offcanvas"), $.on(document, "focusin.bs.offcanvas", e => {
                document === e.target || t === e.target || t.contains(e.target) || t.focus()
            }), t.focus()
        }
        _addEventListeners() {
            $.on(this._element, "click.dismiss.bs.offcanvas", '[data-bs-dismiss="offcanvas"]', () => this.hide()), $.on(this._element, "keydown.dismiss.bs.offcanvas", t => {
                this._config.keyboard && "Escape" === t.key && this.hide()
            })
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = A.get(this, "bs.offcanvas") || new Ct(this, "object" == typeof t ? t : {});
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                    e[t](this)
                }
            }))
        }
    }
    $.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', (function(t) {
        const e = a(this);
        if (["A", "AREA"].includes(this.tagName) && t.preventDefault(), p(this)) return;
        $.one(e, "hidden.bs.offcanvas", () => {
            f(this) && this.focus()
        });
        const s = i.findOne(".offcanvas.show");
        s && s !== e && Ct.getInstance(s).hide(), (A.get(e, "bs.offcanvas") || new Ct(e)).toggle(this)
    })), $.on(window, "load.bs.offcanvas.data-api", () => {
        i.find(".offcanvas.show").forEach(t => (A.get(t, "bs.offcanvas") || new Ct(t)).show())
    }), w(Ct);
    const Dt = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
        Nt = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/i,
        St = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
        Ot = (t, e) => {
            const s = t.nodeName.toLowerCase();
            if (e.includes(s)) return !Dt.has(s) || Boolean(Nt.test(t.nodeValue) || St.test(t.nodeValue));
            const i = e.filter(t => t instanceof RegExp);
            for (let t = 0, e = i.length; t < e; t++)
                if (i[t].test(s)) return !0;
            return !1
        };

    function It(t, e, s) {
        if (!t.length) return t;
        if (s && "function" == typeof s) return s(t);
        const i = (new window.DOMParser).parseFromString(t, "text/html"),
            n = Object.keys(e),
            o = [].concat(...i.body.querySelectorAll("*"));
        for (let t = 0, s = o.length; t < s; t++) {
            const s = o[t],
                i = s.nodeName.toLowerCase();
            if (!n.includes(i)) {
                s.parentNode.removeChild(s);
                continue
            }
            const r = [].concat(...s.attributes),
                a = [].concat(e["*"] || [], e[i] || []);
            r.forEach(t => {
                Ot(t, a) || s.removeAttribute(t.nodeName)
            })
        }
        return i.body.innerHTML
    }
    const xt = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
        jt = new Set(["sanitize", "allowList", "sanitizeFn"]),
        Pt = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(array|string|function)",
            container: "(string|element|boolean)",
            fallbackPlacements: "array",
            boundary: "(string|element)",
            customClass: "(string|function)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            allowList: "object",
            popperConfig: "(null|object|function)"
        },
        Mt = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: y() ? "left" : "right",
            BOTTOM: "bottom",
            LEFT: y() ? "right" : "left"
        },
        Ht = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: [0, 0],
            container: !1,
            fallbackPlacements: ["top", "right", "bottom", "left"],
            boundary: "clippingParents",
            customClass: "",
            sanitize: !0,
            sanitizeFn: null,
            allowList: {
                "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
                a: ["target", "href", "title", "rel"],
                area: [],
                b: [],
                br: [],
                col: [],
                code: [],
                div: [],
                em: [],
                hr: [],
                h1: [],
                h2: [],
                h3: [],
                h4: [],
                h5: [],
                h6: [],
                i: [],
                img: ["src", "srcset", "alt", "title", "width", "height"],
                li: [],
                ol: [],
                p: [],
                pre: [],
                s: [],
                small: [],
                span: [],
                sub: [],
                sup: [],
                strong: [],
                u: [],
                ul: []
            },
            popperConfig: null
        },
        Rt = {
            HIDE: "hide.bs.tooltip",
            HIDDEN: "hidden.bs.tooltip",
            SHOW: "show.bs.tooltip",
            SHOWN: "shown.bs.tooltip",
            INSERTED: "inserted.bs.tooltip",
            CLICK: "click.bs.tooltip",
            FOCUSIN: "focusin.bs.tooltip",
            FOCUSOUT: "focusout.bs.tooltip",
            MOUSEENTER: "mouseenter.bs.tooltip",
            MOUSELEAVE: "mouseleave.bs.tooltip"
        };
    class Bt extends z {
        constructor(t, e) {
            if (void 0 === s) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
            super(t), this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this._config = this._getConfig(e), this.tip = null, this._setListeners()
        }
        static get Default() {
            return Ht
        }
        static get NAME() {
            return "tooltip"
        }
        static get Event() {
            return Rt
        }
        static get DefaultType() {
            return Pt
        }
        enable() {
            this._isEnabled = !0
        }
        disable() {
            this._isEnabled = !1
        }
        toggleEnabled() {
            this._isEnabled = !this._isEnabled
        }
        toggle(t) {
            if (this._isEnabled)
                if (t) {
                    const e = this._initializeOnDelegatedTarget(t);
                    e._activeTrigger.click = !e._activeTrigger.click, e._isWithActiveTrigger() ? e._enter(null, e) : e._leave(null, e)
                } else {
                    if (this.getTipElement().classList.contains("show")) return void this._leave(null, this);
                    this._enter(null, this)
                }
        }
        dispose() {
            clearTimeout(this._timeout), $.off(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this.tip && this.tip.parentNode && this.tip.parentNode.removeChild(this.tip), this._popper && this._popper.destroy(), super.dispose()
        }
        show() {
            if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
            if (!this.isWithContent() || !this._isEnabled) return;
            const t = $.trigger(this._element, this.constructor.Event.SHOW),
                e = m(this._element),
                i = null === e ? this._element.ownerDocument.documentElement.contains(this._element) : e.contains(this._element);
            if (t.defaultPrevented || !i) return;
            const o = this.getTipElement(),
                r = n(this.constructor.NAME);
            o.setAttribute("id", r), this._element.setAttribute("aria-describedby", r), this.setContent(), this._config.animation && o.classList.add("fade");
            const a = "function" == typeof this._config.placement ? this._config.placement.call(this, o, this._element) : this._config.placement,
                l = this._getAttachment(a);
            this._addAttachmentClass(l);
            const {
                container: c
            } = this._config;
            A.set(o, this.constructor.DATA_KEY, this), this._element.ownerDocument.documentElement.contains(this.tip) || (c.appendChild(o), $.trigger(this._element, this.constructor.Event.INSERTED)), this._popper ? this._popper.update() : this._popper = s.createPopper(this._element, o, this._getPopperConfig(l)), o.classList.add("show");
            const h = "function" == typeof this._config.customClass ? this._config.customClass() : this._config.customClass;
            h && o.classList.add(...h.split(" ")), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach(t => {
                $.on(t, "mouseover", _)
            });
            const d = this.tip.classList.contains("fade");
            this._queueCallback(() => {
                const t = this._hoverState;
                this._hoverState = null, $.trigger(this._element, this.constructor.Event.SHOWN), "out" === t && this._leave(null, this)
            }, this.tip, d)
        }
        hide() {
            if (!this._popper) return;
            const t = this.getTipElement();
            if ($.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented) return;
            t.classList.remove("show"), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach(t => $.off(t, "mouseover", _)), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1;
            const e = this.tip.classList.contains("fade");
            this._queueCallback(() => {
                this._isWithActiveTrigger() || ("show" !== this._hoverState && t.parentNode && t.parentNode.removeChild(t), this._cleanTipClass(), this._element.removeAttribute("aria-describedby"), $.trigger(this._element, this.constructor.Event.HIDDEN), this._popper && (this._popper.destroy(), this._popper = null))
            }, this.tip, e), this._hoverState = ""
        }
        update() {
            null !== this._popper && this._popper.update()
        }
        isWithContent() {
            return Boolean(this.getTitle())
        }
        getTipElement() {
            if (this.tip) return this.tip;
            const t = document.createElement("div");
            return t.innerHTML = this._config.template, this.tip = t.children[0], this.tip
        }
        setContent() {
            const t = this.getTipElement();
            this.setElementContent(i.findOne(".tooltip-inner", t), this.getTitle()), t.classList.remove("fade", "show")
        }
        setElementContent(t, e) {
            if (null !== t) return h(e) ? (e = d(e), void(this._config.html ? e.parentNode !== t && (t.innerHTML = "", t.appendChild(e)) : t.textContent = e.textContent)) : void(this._config.html ? (this._config.sanitize && (e = It(e, this._config.allowList, this._config.sanitizeFn)), t.innerHTML = e) : t.textContent = e)
        }
        getTitle() {
            let t = this._element.getAttribute("data-bs-original-title");
            return t || (t = "function" == typeof this._config.title ? this._config.title.call(this._element) : this._config.title), t
        }
        updateAttachment(t) {
            return "right" === t ? "end" : "left" === t ? "start" : t
        }
        _initializeOnDelegatedTarget(t, e) {
            const s = this.constructor.DATA_KEY;
            return (e = e || A.get(t.delegateTarget, s)) || (e = new this.constructor(t.delegateTarget, this._getDelegateConfig()), A.set(t.delegateTarget, s, e)), e
        }
        _getOffset() {
            const {
                offset: t
            } = this._config;
            return "string" == typeof t ? t.split(",").map(t => Number.parseInt(t, 10)) : "function" == typeof t ? e => t(e, this._element) : t
        }
        _getPopperConfig(t) {
            const e = {
                placement: t,
                modifiers: [{
                    name: "flip",
                    options: {
                        fallbackPlacements: this._config.fallbackPlacements
                    }
                }, {
                    name: "offset",
                    options: {
                        offset: this._getOffset()
                    }
                }, {
                    name: "preventOverflow",
                    options: {
                        boundary: this._config.boundary
                    }
                }, {
                    name: "arrow",
                    options: {
                        element: `.${this.constructor.NAME}-arrow`
                    }
                }, {
                    name: "onChange",
                    enabled: !0,
                    phase: "afterWrite",
                    fn: t => this._handlePopperPlacementChange(t)
                }],
                onFirstUpdate: t => {
                    t.options.placement !== t.placement && this._handlePopperPlacementChange(t)
                }
            };
            return { ...e,
                ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(e) : this._config.popperConfig
            }
        }
        _addAttachmentClass(t) {
            this.getTipElement().classList.add("bs-tooltip-" + this.updateAttachment(t))
        }
        _getAttachment(t) {
            return Mt[t.toUpperCase()]
        }
        _setListeners() {
            this._config.trigger.split(" ").forEach(t => {
                if ("click" === t) $.on(this._element, this.constructor.Event.CLICK, this._config.selector, t => this.toggle(t));
                else if ("manual" !== t) {
                    const e = "hover" === t ? this.constructor.Event.MOUSEENTER : this.constructor.Event.FOCUSIN,
                        s = "hover" === t ? this.constructor.Event.MOUSELEAVE : this.constructor.Event.FOCUSOUT;
                    $.on(this._element, e, this._config.selector, t => this._enter(t)), $.on(this._element, s, this._config.selector, t => this._leave(t))
                }
            }), this._hideModalHandler = () => {
                this._element && this.hide()
            }, $.on(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this._config.selector ? this._config = { ...this._config,
                trigger: "manual",
                selector: ""
            } : this._fixTitle()
        }
        _fixTitle() {
            const t = this._element.getAttribute("title"),
                e = typeof this._element.getAttribute("data-bs-original-title");
            (t || "string" !== e) && (this._element.setAttribute("data-bs-original-title", t || ""), !t || this._element.getAttribute("aria-label") || this._element.textContent || this._element.setAttribute("aria-label", t), this._element.setAttribute("title", ""))
        }
        _enter(t, e) {
            e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger["focusin" === t.type ? "focus" : "hover"] = !0), e.getTipElement().classList.contains("show") || "show" === e._hoverState ? e._hoverState = "show" : (clearTimeout(e._timeout), e._hoverState = "show", e._config.delay && e._config.delay.show ? e._timeout = setTimeout(() => {
                "show" === e._hoverState && e.show()
            }, e._config.delay.show) : e.show())
        }
        _leave(t, e) {
            e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger["focusout" === t.type ? "focus" : "hover"] = e._element.contains(t.relatedTarget)), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = "out", e._config.delay && e._config.delay.hide ? e._timeout = setTimeout(() => {
                "out" === e._hoverState && e.hide()
            }, e._config.delay.hide) : e.hide())
        }
        _isWithActiveTrigger() {
            for (const t in this._activeTrigger)
                if (this._activeTrigger[t]) return !0;
            return !1
        }
        _getConfig(t) {
            const e = K.getDataAttributes(this._element);
            return Object.keys(e).forEach(t => {
                jt.has(t) && delete e[t]
            }), (t = { ...this.constructor.Default,
                ...e,
                ..."object" == typeof t && t ? t : {}
            }).container = !1 === t.container ? document.body : d(t.container), "number" == typeof t.delay && (t.delay = {
                show: t.delay,
                hide: t.delay
            }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), g("tooltip", t, this.constructor.DefaultType), t.sanitize && (t.template = It(t.template, t.allowList, t.sanitizeFn)), t
        }
        _getDelegateConfig() {
            const t = {};
            if (this._config)
                for (const e in this._config) this.constructor.Default[e] !== this._config[e] && (t[e] = this._config[e]);
            return t
        }
        _cleanTipClass() {
            const t = this.getTipElement(),
                e = t.getAttribute("class").match(xt);
            null !== e && e.length > 0 && e.map(t => t.trim()).forEach(e => t.classList.remove(e))
        }
        _handlePopperPlacementChange(t) {
            const {
                state: e
            } = t;
            e && (this.tip = e.elements.popper, this._cleanTipClass(), this._addAttachmentClass(this._getAttachment(e.placement)))
        }
        static jQueryInterface(t) {
            return this.each((function() {
                let e = A.get(this, "bs.tooltip");
                const s = "object" == typeof t && t;
                if ((e || !/dispose|hide/.test(t)) && (e || (e = new Bt(this, s)), "string" == typeof t)) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }))
        }
    }
    w(Bt);
    const $t = new RegExp("(^|\\s)bs-popover\\S+", "g"),
        zt = { ...Bt.Default,
            placement: "right",
            offset: [0, 8],
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        },
        Ut = { ...Bt.DefaultType,
            content: "(string|element|function)"
        },
        qt = {
            HIDE: "hide.bs.popover",
            HIDDEN: "hidden.bs.popover",
            SHOW: "show.bs.popover",
            SHOWN: "shown.bs.popover",
            INSERTED: "inserted.bs.popover",
            CLICK: "click.bs.popover",
            FOCUSIN: "focusin.bs.popover",
            FOCUSOUT: "focusout.bs.popover",
            MOUSEENTER: "mouseenter.bs.popover",
            MOUSELEAVE: "mouseleave.bs.popover"
        };
    class Ft extends Bt {
        static get Default() {
            return zt
        }
        static get NAME() {
            return "popover"
        }
        static get Event() {
            return qt
        }
        static get DefaultType() {
            return Ut
        }
        isWithContent() {
            return this.getTitle() || this._getContent()
        }
        setContent() {
            const t = this.getTipElement();
            this.setElementContent(i.findOne(".popover-header", t), this.getTitle());
            let e = this._getContent();
            "function" == typeof e && (e = e.call(this._element)), this.setElementContent(i.findOne(".popover-body", t), e), t.classList.remove("fade", "show")
        }
        _addAttachmentClass(t) {
            this.getTipElement().classList.add("bs-popover-" + this.updateAttachment(t))
        }
        _getContent() {
            return this._element.getAttribute("data-bs-content") || this._config.content
        }
        _cleanTipClass() {
            const t = this.getTipElement(),
                e = t.getAttribute("class").match($t);
            null !== e && e.length > 0 && e.map(t => t.trim()).forEach(e => t.classList.remove(e))
        }
        static jQueryInterface(t) {
            return this.each((function() {
                let e = A.get(this, "bs.popover");
                const s = "object" == typeof t ? t : null;
                if ((e || !/dispose|hide/.test(t)) && (e || (e = new Ft(this, s), A.set(this, "bs.popover", e)), "string" == typeof t)) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }))
        }
    }
    w(Ft);
    const Wt = {
            offset: 10,
            method: "auto",
            target: ""
        },
        Kt = {
            offset: "number",
            method: "string",
            target: "(string|element)"
        };
    class Vt extends z {
        constructor(t, e) {
            super(t), this._scrollElement = "BODY" === this._element.tagName ? window : this._element, this._config = this._getConfig(e), this._selector = `${this._config.target} .nav-link, ${this._config.target} .list-group-item, ${this._config.target} .dropdown-item`, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, $.on(this._scrollElement, "scroll.bs.scrollspy", () => this._process()), this.refresh(), this._process()
        }
        static get Default() {
            return Wt
        }
        static get NAME() {
            return "scrollspy"
        }
        refresh() {
            const t = this._scrollElement === this._scrollElement.window ? "offset" : "position",
                e = "auto" === this._config.method ? t : this._config.method,
                s = "position" === e ? this._getScrollTop() : 0;
            this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), i.find(this._selector).map(t => {
                const n = r(t),
                    o = n ? i.findOne(n) : null;
                if (o) {
                    const t = o.getBoundingClientRect();
                    if (t.width || t.height) return [K[e](o).top + s, n]
                }
                return null
            }).filter(t => t).sort((t, e) => t[0] - e[0]).forEach(t => {
                this._offsets.push(t[0]), this._targets.push(t[1])
            })
        }
        dispose() {
            $.off(this._scrollElement, ".bs.scrollspy"), super.dispose()
        }
        _getConfig(t) {
            if ("string" != typeof(t = { ...Wt,
                    ...K.getDataAttributes(this._element),
                    ..."object" == typeof t && t ? t : {}
                }).target && h(t.target)) {
                let {
                    id: e
                } = t.target;
                e || (e = n("scrollspy"), t.target.id = e), t.target = "#" + e
            }
            return g("scrollspy", t, Kt), t
        }
        _getScrollTop() {
            return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
        }
        _getScrollHeight() {
            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
        }
        _getOffsetHeight() {
            return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
        }
        _process() {
            const t = this._getScrollTop() + this._config.offset,
                e = this._getScrollHeight(),
                s = this._config.offset + e - this._getOffsetHeight();
            if (this._scrollHeight !== e && this.refresh(), t >= s) {
                const t = this._targets[this._targets.length - 1];
                this._activeTarget !== t && this._activate(t)
            } else {
                if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
                for (let e = this._offsets.length; e--;) this._activeTarget !== this._targets[e] && t >= this._offsets[e] && (void 0 === this._offsets[e + 1] || t < this._offsets[e + 1]) && this._activate(this._targets[e])
            }
        }
        _activate(t) {
            this._activeTarget = t, this._clear();
            const e = this._selector.split(",").map(e => `${e}[data-bs-target="${t}"],${e}[href="${t}"]`),
                s = i.findOne(e.join(","));
            s.classList.contains("dropdown-item") ? (i.findOne(".dropdown-toggle", s.closest(".dropdown")).classList.add("active"), s.classList.add("active")) : (s.classList.add("active"), i.parents(s, ".nav, .list-group").forEach(t => {
                i.prev(t, ".nav-link, .list-group-item").forEach(t => t.classList.add("active")), i.prev(t, ".nav-item").forEach(t => {
                    i.children(t, ".nav-link").forEach(t => t.classList.add("active"))
                })
            })), $.trigger(this._scrollElement, "activate.bs.scrollspy", {
                relatedTarget: t
            })
        }
        _clear() {
            i.find(this._selector).filter(t => t.classList.contains("active")).forEach(t => t.classList.remove("active"))
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = Vt.getInstance(this) || new Vt(this, "object" == typeof t ? t : {});
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }))
        }
    }
    $.on(window, "load.bs.scrollspy.data-api", () => {
        i.find('[data-bs-spy="scroll"]').forEach(t => new Vt(t))
    }), w(Vt);
    class Qt extends z {
        static get NAME() {
            return "tab"
        }
        show() {
            if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains("active")) return;
            let t;
            const e = a(this._element),
                s = this._element.closest(".nav, .list-group");
            if (s) {
                const e = "UL" === s.nodeName || "OL" === s.nodeName ? ":scope > li > .active" : ".active";
                t = i.find(e, s), t = t[t.length - 1]
            }
            const n = t ? $.trigger(t, "hide.bs.tab", {
                relatedTarget: this._element
            }) : null;
            if ($.trigger(this._element, "show.bs.tab", {
                    relatedTarget: t
                }).defaultPrevented || null !== n && n.defaultPrevented) return;
            this._activate(this._element, s);
            const o = () => {
                $.trigger(t, "hidden.bs.tab", {
                    relatedTarget: this._element
                }), $.trigger(this._element, "shown.bs.tab", {
                    relatedTarget: t
                })
            };
            e ? this._activate(e, e.parentNode, o) : o()
        }
        _activate(t, e, s) {
            const n = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? i.children(e, ".active") : i.find(":scope > li > .active", e))[0],
                o = s && n && n.classList.contains("fade"),
                r = () => this._transitionComplete(t, n, s);
            n && o ? (n.classList.remove("show"), this._queueCallback(r, t, !0)) : r()
        }
        _transitionComplete(t, e, s) {
            if (e) {
                e.classList.remove("active");
                const t = i.findOne(":scope > .dropdown-menu .active", e.parentNode);
                t && t.classList.remove("active"), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1)
            }
            t.classList.add("active"), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), b(t), t.classList.contains("fade") && t.classList.add("show");
            let n = t.parentNode;
            if (n && "LI" === n.nodeName && (n = n.parentNode), n && n.classList.contains("dropdown-menu")) {
                const e = t.closest(".dropdown");
                e && i.find(".dropdown-toggle", e).forEach(t => t.classList.add("active")), t.setAttribute("aria-expanded", !0)
            }
            s && s()
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = A.get(this, "bs.tab") || new Qt(this);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }))
        }
    }
    $.on(document, "click.bs.tab.data-api", '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', (function(t) {
        ["A", "AREA"].includes(this.tagName) && t.preventDefault(), p(this) || (A.get(this, "bs.tab") || new Qt(this)).show()
    })), w(Qt);
    const Xt = {
            animation: "boolean",
            autohide: "boolean",
            delay: "number"
        },
        Yt = {
            animation: !0,
            autohide: !0,
            delay: 5e3
        };
    class Gt extends z {
        constructor(t, e) {
            super(t), this._config = this._getConfig(e), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners()
        }
        static get DefaultType() {
            return Xt
        }
        static get Default() {
            return Yt
        }
        static get NAME() {
            return "toast"
        }
        show() {
            $.trigger(this._element, "show.bs.toast").defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove("hide"), b(this._element), this._element.classList.add("showing"), this._queueCallback(() => {
                this._element.classList.remove("showing"), this._element.classList.add("show"), $.trigger(this._element, "shown.bs.toast"), this._maybeScheduleHide()
            }, this._element, this._config.animation))
        }
        hide() {
            this._element.classList.contains("show") && ($.trigger(this._element, "hide.bs.toast").defaultPrevented || (this._element.classList.remove("show"), this._queueCallback(() => {
                this._element.classList.add("hide"), $.trigger(this._element, "hidden.bs.toast")
            }, this._element, this._config.animation)))
        }
        dispose() {
            this._clearTimeout(), this._element.classList.contains("show") && this._element.classList.remove("show"), super.dispose()
        }
        _getConfig(t) {
            return t = { ...Yt,
                ...K.getDataAttributes(this._element),
                ..."object" == typeof t && t ? t : {}
            }, g("toast", t, this.constructor.DefaultType), t
        }
        _maybeScheduleHide() {
            this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(() => {
                this.hide()
            }, this._config.delay)))
        }
        _onInteraction(t, e) {
            switch (t.type) {
                case "mouseover":
                case "mouseout":
                    this._hasMouseInteraction = e;
                    break;
                case "focusin":
                case "focusout":
                    this._hasKeyboardInteraction = e
            }
            if (e) return void this._clearTimeout();
            const s = t.relatedTarget;
            this._element === s || this._element.contains(s) || this._maybeScheduleHide()
        }
        _setListeners() {
            $.on(this._element, "click.dismiss.bs.toast", '[data-bs-dismiss="toast"]', () => this.hide()), $.on(this._element, "mouseover.bs.toast", t => this._onInteraction(t, !0)), $.on(this._element, "mouseout.bs.toast", t => this._onInteraction(t, !1)), $.on(this._element, "focusin.bs.toast", t => this._onInteraction(t, !0)), $.on(this._element, "focusout.bs.toast", t => this._onInteraction(t, !1))
        }
        _clearTimeout() {
            clearTimeout(this._timeout), this._timeout = null
        }
        static jQueryInterface(t) {
            return this.each((function() {
                let e = A.get(this, "bs.toast");
                if (e || (e = new Gt(this, "object" == typeof t && t)), "string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t](this)
                }
            }))
        }
    }
    return w(Gt), {
        Alert: U,
        Button: q,
        Carousel: J,
        Collapse: st,
        Dropdown: ut,
        Modal: At,
        Offcanvas: Ct,
        Popover: Ft,
        ScrollSpy: Vt,
        Tab: Qt,
        Toast: Gt,
        Tooltip: Bt
    }
}));