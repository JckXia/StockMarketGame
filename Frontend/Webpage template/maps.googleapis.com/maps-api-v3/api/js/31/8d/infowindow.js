google.maps.__gjsload__('infowindow', function(_) {
    var mV = function() {
            this.b = new _.xB
        },
        oV = function() {
            this.b = _.Y("div");
            this.m = _.Y("div", this.b);
            nV(this.m, "rgba(0,0,0,0.1)", !1);
            this.f = _.Y("div", this.b, _.ri);
            this.f.style.backgroundColor = "rgba(0,0,0,0.2)";
            _.BB(this.f, _.W(2));
            _.AB(this.f, "0 1px 4px -1px rgba(0,0,0,0.3)");
            this.l = _.Y("div", this.b);
            nV(this.l, "#fff", !0);
            this.j = _.Y("div", this.b, new _.y(1, 1));
            _.BB(this.j, _.W(2));
            this.j.style.backgroundColor = "#fff"
        },
        nV = function(a, b, c) {
            if (c) {
                c = _.Dm.b;
                var d = _.Y("div", a);
                a = _.Y("div", a);
                var e = _.Y("div", d),
                    f = _.Y("div",
                        a);
                e.style.position = d.style.position = f.style.position = a.style.position = "absolute";
                d.style.overflow = a.style.overflow = "hidden";
                e.style.left = f.style.left = a.style.top = "0";
                d.style.left = _.W(-6);
                d.style.top = a.style.top = _.W(-1);
                e.style.left = _.W(6);
                a.style.left = _.W(10);
                d.style.width = a.style.width = _.W(16);
                d.style.height = a.style.height = _.W(30);
                e.style.backgroundColor = f.style.backgroundColor = b;
                c && (e.style[c] = "skewX(22.6deg)", f.style[c] = "skewX(-22.6deg)", e.style[c + "Origin"] = "0 0", f.style[c + "Origin"] = _.W(10) + " 0");
                e.style.height = f.style.height = _.W(24);
                e.style.width = f.style.width = _.W(10);
                e.style.boxShadow = f.style.boxShadow = "rgba(0,0,0,0.6) 0px 1px " + _.W(6)
            } else _.Sf(a, _.si), a.style.borderLeft = a.style.borderRight = "0 solid transparent", a.style.borderTop = "0 solid " + b, a.style.borderLeftWidth = a.style.borderRightWidth = _.W(10)
        },
        pV = function(a, b) {
            var c = a.offsetWidth,
                d = a.offsetHeight;
            this.b = window.setInterval(function() {
                var e = a.offsetWidth,
                    f = a.offsetHeight;
                if (e != c || f != d) b(new _.z(e, f)), c = e, d = f
            }, 100)
        },
        rV = function(a, b,
            c, d, e) {
            this.l = null;
            this.F = b;
            var f = this.f = _.Y("div");
            _.Am(f, "default");
            f.style.position = "absolute";
            a.floatPane.appendChild(this.f);
            a = b.ia();
            _.tm(a, _.ri);
            this.f.appendChild(a);
            this.b = _.Y("div", f);
            this.b.style.top = _.W(9);
            this.b.style.position = "absolute";
            c ? this.b.style.right = _.W(15) : this.b.style.left = _.W(15);
            _.FH();
            _.fm(this.b, "gm-style-iw");
            this.j = _.Y("div", this.b);
            this.j.style.display = "inline-block";
            this.j.style.overflow = "auto";
            d && this.b.appendChild(d);
            _.F.addDomListener(f, "mousedown", _.Ec);
            _.F.addDomListener(f,
                "mouseup", _.Ec);
            _.F.addDomListener(f, "mousemove", _.Ec);
            _.F.addDomListener(f, "pointerdown", _.Ec);
            _.F.addDomListener(f, "pointerup", _.Ec);
            _.F.addDomListener(f, "pointermove", _.Ec);
            _.F.addDomListener(f, "dblclick", _.Ec);
            _.F.addDomListener(f, "click", _.Ec);
            _.F.addDomListener(f, "touchstart", _.Ec);
            _.F.addDomListener(f, "touchend", _.Ec);
            _.F.addDomListener(f, "touchmove", _.Ec);
            _.F.Y(f, "contextmenu", this, this.Jm);
            _.F.Y(f, "wheel", this, _.Ec);
            _.F.Y(f, "mousewheel", this, _.Bc);
            _.F.Y(f, "MozMousePixelScroll", this, _.Bc);
            new _.KH(this.f, (0, _.t)(this.Xm, this), e || qV);
            this.m = null;
            this.D = !1;
            this.C = new _.qo(function() {
                !this.D && this.get("content") && this.get("visible") && (_.F.trigger(this, "domready"), this.D = !0)
            }, 0, this);
            this.B = null
        },
        sV = function(a, b) {
            _.rB(a.f, b);
            a.b.style.overflow = b ? "" : "hidden";
            b || _.Sf(a.b, _.si)
        },
        tV = function(a) {
            var b = a.get("position"),
                c = a.get("pixelOffset");
            if (a.l && b && c) {
                var d = a.l.width,
                    e = a.l.height + 24,
                    f = b.x + c.width - (d >> 1);
                b = b.y + c.height - e;
                _.tm(a.f, new _.y(f, b));
                var g = a.get("zIndex");
                _.Bm(a.f, _.Hb(g) ? g : b);
                e = b + e + 5;
                0 > c.height && (e -= c.height);
                a.set("pixelBounds", _.jc(f - 5, b - 5, f + d + 5, e))
            }
        },
        vV = function(a) {
            a = a.__gm.get("panes");
            var b = _.Y("div");
            b.style.borderTop = "1px solid #ccc";
            b.style.marginTop = "9px";
            b.style.paddingTop = "6px";
            var c = new _.ph(b),
                d = new rV(a, new oV, _.jx.b, b);
            _.F.addListener(c, "place_changed", function() {
                var a = c.get("place");
                d.set("apiContentSize", a ? uV : _.si);
                _.oB(b, !!a)
            });
            return {
                ao: c,
                view: d
            }
        },
        wV = function(a, b) {
            this.m = !0;
            var c = b.__gm;
            this.T = null;
            this.T = new _.DH;
            this.T.bindTo("latLngPosition", a, "position");
            this.T.bindTo("center", c, "projectionCenterQ");
            this.T.bindTo("zoom", c);
            this.T.bindTo("offset", c);
            this.T.bindTo("projection", b);
            this.T.bindTo("focus", b, "position");
            this.b = b instanceof _.Rd ? a.b.get("logAsInternal") ? "Ia" : "Id" : null;
            this.f = [];
            var d = new _.PC(["scale"], "visible", function(a) {
                return null == a || .3 <= a
            });
            this.T && d.bindTo("scale", this.T);
            var e = vV(b);
            this.B = e.ao;
            this.l = e.view;
            e = this.B;
            var f = this.l;
            e && (e.bindTo("place", a), e.bindTo("attribution", a));
            f.set("logAsInternal", !!a.b.get("logAsInternal"));
            f.bindTo("zIndex", a);
            f.bindTo("layoutPixelBounds", c);
            f.bindTo("maxWidth", a);
            f.bindTo("content", a);
            f.bindTo("pixelOffset", a);
            f.bindTo("visible", d);
            this.T && f.bindTo("position", this.T, "pixelPosition");
            this.j = new _.qo(function() {
                var a = f.get("pixelBounds");
                a ? _.F.trigger(c, "pantobounds", a) : this.j.start()
            }, 150, this);
            var g = this;
            a.get("disableAutoPan") || g.j.start();
            f.set("open", !0);
            this.f.push(_.F.forward(b, "forceredraw", f), _.F.addListener(f, "domready", function() {
                a.trigger("domready")
            }));
            this.f.push(_.F.addListener(f,
                "closeclick",
                function() {
                    a.close();
                    a.trigger("closeclick");
                    g.b && _.En(g.b, "-i", g, !!b.Z)
                }));
            if (this.b) {
                var h = this.b;
                _.Cn(b, this.b);
                _.En(h, "-p", this, !!b.Z);
                d = function() {
                    var c = a.get("position"),
                        d = b.getBounds();
                    c && d && d.contains(c) ? _.En(h, "-v", g, !!b.Z) : _.Fn(h, "-v", g)
                };
                this.f.push(_.F.addListener(b, "idle", d));
                d()
            }
        };
    oV.prototype.ia = _.qa("b");
    oV.prototype.setSize = function(a) {
        var b = a.width,
            c = a.height;
        _.Sf(this.f, a);
        _.Sf(this.j, new _.z(b - 2, c - 2));
        this.m.style.borderTopWidth = this.l.style.borderTopWidth = _.W(24);
        a = Math.round(b / 2) - 10;
        _.tm(this.m, new _.y(a, c));
        _.tm(this.l, new _.y(a, c - 3))
    };
    pV.prototype.cancel = function() {
        window.clearInterval(this.b)
    };
    _.u(rV, _.G);
    var qV = new _.y(12, 10),
        xV = new _.z(0, 24);
    _.m = rV.prototype;
    _.m.open_changed = rV.prototype.content_changed = function() {
        var a = !!this.get("open");
        sV(this, a);
        var b = this.get("content");
        a = a ? b : null;
        a != this.m && (a && (this.D = !1, this.j.appendChild(b)), this.m && (b = this.m.parentNode, b == this.j && b.removeChild(this.m)), this.m = a, this.xe())
    };
    _.m.ga = function() {
        this.f.parentNode.removeChild(this.f);
        this.C.stop();
        this.C.ga()
    };
    _.m.apiContentSize_changed = rV.prototype.pixelOffset_changed = function() {
        this.xe()
    };
    _.m.xe = function() {
        this.B && (this.B.$k.cancel(), this.B.tl.cancel(), this.B = null);
        var a = this.get("layoutPixelBounds");
        var b = this.get("maxWidth");
        var c = this.get("pixelOffset");
        if (c) {
            if (a) {
                var d = a.K - a.I - (xV.width + 23 + 30);
                a = a.L - a.J - (xV.height + 18 + -c.height)
            } else a = d = 654;
            d = Math.min(d, 654);
            null != b && (d = Math.min(d, b));
            d = Math.max(0, d);
            a = Math.max(0, a);
            b = new _.z(d, a)
        } else b = null;
        b && (d = this.get("apiContentSize") || _.si, this.j.style.maxHeight = _.W(Math.max(0, b.height - d.height)), this.j.style.maxWidth = _.W(b.width), this.b.style.width =
            _.W(b.width), d = 30 + Math.min(b.width, Math.max(this.j.offsetWidth, d.width)) + 23, this.b.style.width = _.W(d - 30), this.b.style.height = "", this.l = new _.z(d, 18 + Math.min(b.height, this.b.offsetHeight)), this.F.setSize(this.l), _.Sf(this.f, this.l), tV(this), this.C.start(), b = (0, _.t)(this.xe, this), b = new pV(this.j, b), d = (0, _.t)(this.xe, this), d = new pV(this.b, d), this.B = {
                tl: b,
                $k: d
            })
    };
    _.m.Xm = function(a) {
        _.Ec(a);
        _.F.trigger(this, "closeclick");
        this.set("open", !1)
    };
    _.m.position_changed = function() {
        this.get("position") ? (sV(this, !!this.get("open")), tV(this)) : sV(this, !1)
    };
    _.m.zIndex_changed = function() {
        tV(this)
    };
    _.m.visible_changed = function() {
        _.oB(this.f, this.get("visible"));
        this.C.start()
    };
    _.m.Jm = function(a) {
        for (var b = !1, c = this.get("content"), d = a.target; !b && d;) b = d == c, d = d.parentNode;
        b ? _.Bc(a) : _.Dc(a)
    };
    var uV = new _.z(180, 38);
    wV.prototype.close = function() {
        if (this.m) {
            this.m = !1;
            this.b && (_.Fn(this.b, "-p", this), _.Fn(this.b, "-v", this));
            _.w(this.f, _.F.removeListener);
            this.f.length = 0;
            this.j.stop();
            this.j.ga();
            var a = this.B;
            a && (a.unbindAll(), a.setPlace(null), a.setAttribution(null));
            a = this.l;
            a.unbindAll();
            a.set("open", !1);
            a.ga();
            this.T && this.T.unbindAll()
        }
    };
    _.ge("infowindow", {
        Pk: function(a) {
            var b = null;
            _.uk(a, "map_changed", function d() {
                var e = a.get("map");
                b && (b.Wg.b.remove(a), b.Gn.close(), b = null);
                if (e) {
                    var f = e.__gm;
                    f.get("panes") ? (f = new wV(a, e), e = e.__gm, e = e.IW_AUTO_CLOSER = e.IW_AUTO_CLOSER || new mV, b = {
                        Gn: f,
                        Wg: e
                    }, f = b.Wg, 1 == f.b.hb() && (e = f.b.Oa()[0], e.f != a.f && (e.set("map", null), f.b.remove(e))), f.b.add(a)) : _.F.addListenerOnce(f, "panes_changed", d)
                }
            })
        }
    });
});