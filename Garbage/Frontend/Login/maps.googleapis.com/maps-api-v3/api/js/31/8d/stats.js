google.maps.__gjsload__('stats', function(_) {
    var O1 = function() {
            this.b = new _.Il
        },
        P1 = function(a) {
            var b = 0,
                c = 0;
            a.b.forEach(function(a) {
                b += a.bp;
                c += a.Co
            });
            return c ? b / c : 0
        },
        Q1 = function(a, b, c) {
            var d = [];
            _.ab(a, function(a, c) {
                d.push(c + b + a)
            });
            return d.join(c)
        },
        R1 = function(a) {
            var b = {};
            _.ab(a, function(a, d) {
                b[(0, window.encodeURIComponent)(d)] = (0, window.encodeURIComponent)(a).replace(/%7C/g, "|")
            });
            return Q1(b, ":", ",")
        },
        S1 = function() {
            var a = _.Uf[35] ? _.M(_.yf(_.Q), 11) : _.Ow,
                b = window.document;
            this.l = _.pj;
            this.f = a + "/maps/gen_204";
            this.j = b
        },
        T1 = function(a, b, c, d) {
            var e = {};
            e.host = window.document.location && window.document.location.host || window.location.host;
            e.v = a;
            e.r = Math.round(1 / b);
            c && (e.client = c);
            d && (e.key = d);
            return e
        },
        U1 = function(a, b, c, d) {
            var e = _.L(_.Q, 0, 1);
            this.m = a;
            this.C = b;
            this.l = e;
            this.f = c;
            this.j = d;
            this.b = new _.Il;
            this.B = _.Sa()
        },
        W1 = function(a, b, c, d, e) {
            var f = _.L(_.Q, 23, 500);
            var g = _.L(_.Q, 22, 2);
            this.D = a;
            this.F = b;
            this.H = f;
            this.l = g;
            this.C = c;
            this.m = d;
            this.B = e;
            this.f = new _.Il;
            this.b = 0;
            this.j = _.Sa();
            V1(this)
        },
        V1 = function(a) {
            window.setTimeout(function() {
                    X1(a);
                    V1(a)
                },
                Math.min(a.H * Math.pow(a.l, a.b), 2147483647))
        },
        Y1 = function(a, b, c) {
            a.f.set(b, c)
        },
        X1 = function(a) {
            var b = T1(a.F, a.C, a.m, a.B);
            b.t = a.b + "-" + (_.Sa() - a.j);
            a.f.forEach(function(a, d) {
                a = a();
                0 < a && (b[d] = Number(a.toFixed(2)) + (_.Km() ? "-if" : ""))
            });
            a.D.b({
                ev: "api_snap"
            }, b);
            ++a.b
        },
        Z1 = function(a, b, c, d, e) {
            this.B = a;
            this.C = b;
            this.m = c;
            this.j = d;
            this.l = e;
            this.f = {};
            this.b = []
        },
        $1 = function(a, b, c) {
            var d = _.Df;
            this.j = a;
            _.F.bind(this.j, "set_at", this, this.l);
            _.F.bind(this.j, "insert_at", this, this.l);
            this.B = b;
            this.C = d;
            this.m = c;
            this.f =
                0;
            this.b = {};
            this.l()
        },
        a2 = function() {
            this.j = _.M(_.Q, 6);
            this.C = _.xf();
            this.b = new S1;
            _.ij && new $1(_.ij, (0, _.t)(this.b.b, this.b), !!this.j);
            var a = _.M(new _.rf(_.Q.data[3]), 1);
            this.D = a.split(".")[1] || a;
            this.F = {};
            this.B = {};
            this.m = {};
            this.H = {};
            this.O = _.L(_.Q, 0, 1);
            _.oj && (this.l = new W1(this.b, this.D, this.O, this.j, this.C))
        };
    O1.prototype.f = function(a, b, c) {
        this.b.set(_.Sc(a), {
            bp: b,
            Co: c
        })
    };
    S1.prototype.b = function(a, b) {
        b = b || {};
        var c = _.qk().toString(36);
        b.src = "apiv3";
        b.token = this.l;
        b.ts = c.substr(c.length - 6);
        a.cad = R1(b);
        a = Q1(a, "=", "&");
        a = this.f + "?target=api&" + a;
        this.j.createElement("img").src = a;
        (b = _.ib.__gm_captureCSI) && b(a)
    };
    U1.prototype.D = function(a, b) {
        b = _.p(b) ? b : 1;
        this.b.isEmpty() && window.setTimeout((0, _.t)(function() {
            var a = T1(this.C, this.l, this.f, this.j);
            a.t = _.Sa() - this.B;
            var b = this.b;
            _.Jl(b);
            for (var e = {}, f = 0; f < b.b.length; f++) {
                var g = b.b[f];
                e[g] = b.G[g]
            }
            _.fA(a, e);
            this.b.clear();
            this.m.b({
                ev: "api_maprft"
            }, a)
        }, this), 500);
        b = this.b.get(a, 0) + b;
        this.b.set(a, b)
    };
    Z1.prototype.D = function(a) {
        this.f[a] || (this.f[a] = !0, this.b.push(a), 2 > this.b.length && _.CA(this, this.F, 500))
    };
    Z1.prototype.F = function() {
        for (var a = T1(this.C, this.m, this.j, this.l), b = 0, c; c = this.b[b]; ++b) a[c] = "1";
        a.hybrid = +_.om();
        this.b.length = 0;
        this.B.b({
            ev: "api_mapft"
        }, a)
    };
    $1.prototype.l = function() {
        for (var a; a = this.j.removeAt(0);) {
            var b = a.bo;
            a = a.timestamp - this.C;
            ++this.f;
            this.b[b] || (this.b[b] = 0);
            ++this.b[b];
            if (20 <= this.f && !(this.f % 5)) {
                var c = {};
                c.s = b;
                c.sr = this.b[b];
                c.tr = this.f;
                c.te = a;
                c.hc = this.m ? "1" : "0";
                this.B({
                    ev: "api_services"
                }, c)
            }
        }
    };
    a2.prototype.wa = function(a) {
        a = _.Sc(a);
        this.F[a] || (this.F[a] = new Z1(this.b, this.D, this.O, this.j, this.C));
        return this.F[a]
    };
    a2.prototype.U = function(a) {
        a = _.Sc(a);
        this.B[a] || (this.B[a] = new U1(this.b, this.D, this.j, this.C));
        return this.B[a]
    };
    a2.prototype.f = function(a) {
        if (this.l) {
            this.m[a] || (this.m[a] = new _.xB, Y1(this.l, a, function() {
                return b.hb()
            }));
            var b = this.m[a];
            return b
        }
    };
    a2.prototype.R = function(a) {
        if (this.l) {
            this.H[a] || (this.H[a] = new O1, Y1(this.l, a, function() {
                return P1(b)
            }));
            var b = this.H[a];
            return b
        }
    };
    var b2 = new a2;
    _.ge("stats", b2);
});