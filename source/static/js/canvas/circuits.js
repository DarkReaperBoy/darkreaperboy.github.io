function runCircuitsAnimation() {
    function a() {
        o.clearRect(0, 0, f, g), j.draw(), o.drawImage(j.canvas, 0, 0), requestAnimationFrame(a)
    }
    class b {
        constructor(a) {
            this.rows = Array.apply(null, Array(a)).map(() => 0), this.free = a
        }
    }
    class c {
        constructor(a, b) {
            this.start = a, this.cellSize = b, this.path = [], this.end = null, this.things = [], this.length = 0, this.coords = []
        }
    }
    class d {
        constructor(a, b, c = 0) {
            this.circuit = a, this.velocity = b, this.done = c, this.x = 0, this.y = 0, this.dots = []
        }
        update() {
            const a = this.circuit,
                b = a.cellSize;
            let c = 0,
                d = 0;
            const e = a.length,
                f = a.start,
                g = a.end,
                h = a.path;
            if (this.done += this.velocity, 0 >= this.done ? (this.done = 0, this.velocity = -this.velocity) : this.done >= e && (this.done = e, this.velocity = -this.velocity), this.done <= b / 2) c = f[0] * b + b / 2 + this.done * h[0][0], d = f[1] * b + b / 2 + this.done * h[0][1];
            else if (this.done > e - b / 2) c = g[0] * b + b / 2 - (e - this.done) * h[h.length - 1][0], d = g[1] * b + b / 2 - (e - this.done) * h[h.length - 1][1];
            else {
                const e = ~~(this.done / b),
                    f = this.done - e * b,
                    g = [h[e][0], h[e][1]],
                    i = a.coords[e];
                c = i[0] * b + b / 2 + f * g[0], d = i[1] * b + b / 2 + f * g[1]
            }
            c = ~~c, d = ~~d, this.x = c, this.y = d
        }
        distFromSister() {
            const a = this.circuit;
            let b = 1 / 0,
                c = null;
            return a.things.forEach(a => {
                a !== this && (c = Math.abs(a.done - this.done), c < b && (b = c))
            }), b
        }
    }
    const e = document.createElement("canvas"),
        f = e.width = window.innerWidth,
        g = e.height = window.innerHeight,
        h = e.getContext("2d");
    e.className = "background", document.getElementById("canvasContainer").appendChild(e);
    const i = new class {
            constructor(a, b, c) {
                this.spacing = c, this.dots = [], this.alphaStep = 1 / 10, this.cols = Math.floor(a / c), this.rows = Math.floor(b / c);
                const d = document.createElement("canvas"),
                    e = d.getContext("2d");
                d.className = "background", document.getElementById("canvasContainer").appendChild(d), d.width = a, d.height = b, this.canvas = d, this.ctx = e, this.draw()
            }
            draw() {
                const a = this.ctx,
                    b = this.spacing;
                a.fillStyle = "rgba(24, 129, 141, .1)", this.dots = Array.apply(null, Array(this.cols)).map((c, d) => Array.apply(null, Array(this.rows)).map((c, e) => {
                    let f = {
                        opacity: .1,
                        x: d * b,
                        y: e * b
                    };
                    return a.fillRect(f.x, f.y, 1, 1), f
                }))
            }
            ghost() {
                const a = document.createElement("canvas");
                a.className = "background", document.getElementById("canvasContainer").appendChild(a), a.width = this.canvas.width, a.height = this.canvas.height;
                const b = a.getContext("2d");
                return b.fillStyle = "rgb(24, 129, 141)", this.dots.forEach(a => {
                    a.forEach(a => {
                        b.fillRect(a.x, a.y, 1, 1)
                    })
                }), a
            }
        }(f, g, 2),
        j = new class {
            constructor(a, b) {
                this.width = a, this.height = b, this.canvas = document.createElement("canvas"), this.canvas.className = "background", document.getElementById("canvasContainer").appendChild(this.canvas), this.canvas.width = a, this.canvas.height = b, this.ctx = this.canvas.getContext("2d"), this.collection = []
            }
            create(a, b, c = 0) {
                const e = new d(a, b, c);
                return this.collection.push(e), e
            }
            update() {
                this.collection.forEach(a => {
                    a.update()
                })
            }
            draw() {
                const a = this.ctx,
                    b = this.lightRadius;
                let c = null,
                    d = null,
                    e = null;
                a.clearRect(0, 0, this.width, this.height), this.collection.forEach(f => {
                    f.update(), c = this.ghostRadial, d = e = b, f.distFromSister() <= b / 3 && (c = this.ghostSuperRadial, d = c.width / 2, e = c.height / 2), a.drawImage(c, f.x - d, f.y - e, c.width, c.height)
                }), a.save(), a.globalCompositeOperation = "destination-in", a.drawImage(this.dotsGhost, 0, 0), a.restore(), a.save(), a.globalCompositeOperation = "source-over", a.fillStyle = "#afe3e9", this.collection.forEach(c => {
                    a.beginPath(), a.arc(c.x, c.y, b / 6, 0, 2 * Math.PI, !1), a.fill()
                }), a.restore()
            }
            setDotsGhost(a) {
                this.dotsGhost = a
            }
            setLight(a) {
                this.lightRadius = a, this.ghostRadial = document.createElement("canvas"), this.ghostRadial.className = "background", document.getElementById("canvasContainer").appendChild(this.ghostRadial), this.ghostRadial.width = 2 * a, this.ghostRadial.height = 2 * a;
                const b = this.ghostRadial.getContext("2d");
                let c = b.createRadialGradient(a, a, a, a, a, 0);
                c.addColorStop(0, "rgba(24, 129, 141, 0)"), c.addColorStop(1, "rgba(24, 129, 141, .6)"), b.fillStyle = c, b.fillRect(0, 0, 2 * a, 2 * a), this.ghostSuperRadial = document.createElement("canvas"), this.ghostSuperRadial.className = "background", document.getElementById("canvasContainer").appendChild(this.ghostSuperRadial);
                const d = this.ghostSuperRadial.width = 15 * a,
                    e = this.ghostSuperRadial.height = 20 * a,
                    f = this.ghostSuperRadial.getContext("2d");
                c = f.createRadialGradient(d / 2, e / 2, d / 2, d / 2, e / 2, 0), c.addColorStop(0, "rgba(37, 203, 223, 0)"), c.addColorStop(1, "rgba(37, 203, 223,  .4)"), f.fillStyle = c, f.beginPath(), f.moveTo(d / 2 + a / 6, e / 2 - a / 3), f.lineTo(d, 0), f.lineTo(d / 2 + a / 3, e / 2 - a / 6), f.lineTo(3 * d / 4, e / 2), f.lineTo(d / 2 + a / 3, e / 2 + a / 6), f.lineTo(d, e), f.lineTo(d / 2 + a / 6, e / 2 + a / 3), f.lineTo(d / 2, 3 * e / 4), f.lineTo(d / 2 - a / 6, e / 2 + a / 3), f.lineTo(0, e), f.lineTo(d / 2 - a / 3, e / 2 + a / 6), f.lineTo(d / 4, e / 2), f.lineTo(d / 2 - a / 3, e / 2 - a / 6), f.lineTo(0, 0), f.lineTo(d / 2 - a / 6, e / 2 - a / 3), f.lineTo(d / 2, e / 4), f.lineTo(d / 2 + a / 6, e / 2 - a / 3), f.fill()
            }
        }(f, g);
    j.setDotsGhost(i.ghost()), j.setLight(4 * i.spacing);
    const k = new class {
            constructor(a, c, d, e, f) {
                this.size = d, this.width = a, this.height = c, this.cols = ~~(a / d), this.rows = ~~(c / d), this.scene = Array.apply(null, Array(this.cols)).map(() => new b(this.rows)), this.collection = [], this.minLength = e, this.maxLength = f, this.populate(), this.draw()
            }
            draw() {
                const a = document.createElement("canvas"),
                    b = a.getContext("2d"),
                    c = this.size;
                a.className = "background", document.getElementById("canvasContainer").appendChild(a), a.width = this.width, a.height = this.height, b.strokeStyle = "#21B1E5", b.lineWidth = Math.round(c / 10), this.collection.forEach(a => {
                    let d = [a.start[0], a.start[1]],
                        e = a.path;
                    b.beginPath(), b.moveTo(d[0] * c + c / 2 + e[0][0] * c / 4, d[1] * c + c / 2 + e[0][1] * c / 4), e.forEach((a, f) => {
                        d[0] += a[0], d[1] += a[1], f === e.length - 1 ? b.lineTo(d[0] * c + c / 2 - a[0] * c / 4, d[1] * c + c / 2 - a[1] * c / 4) : b.lineTo(d[0] * c + c / 2, d[1] * c + c / 2)
                    }), b.stroke()
                }), b.lineWidth = ~~(this.size / 5), b.strokeStyle = "rgba(59, 177, 188, .6)", this.collection.forEach(a => {
                    b.beginPath(), b.arc(a.start[0] * c + c / 2, a.start[1] * c + c / 2, c / 4, 0, 2 * Math.PI, !1), b.stroke(), b.beginPath(), b.arc(a.end[0] * c + c / 2, a.end[1] * c + c / 2, c / 4, 0, 2 * Math.PI, !1), b.stroke()
                }), this.canvas = a
            }
            populate() {
                const a = this.size;
                for (let b = null, d = 300, e = this.maxLength, f = this.minLength, g = 0, h = null;
                    (b = this.getStart()) && d--;)
                    if (g = f + ~~(Math.random() * (e - f)), h = this.getDir(b), this.setUsed(b[0], b[1]), 0 !== h[0] || 0 !== h[1]) {
                        let d = new c(b, a),
                            i = !0,
                            k = [b[0], b[1]],
                            l = [b[0], b[1]];
                        for (g--; i && g;) d.path.push(h), d.coords.push([k[0], k[1]]), k[0] += h[0], k[1] += h[1], this.setUsed(k[0], k[1]), h = this.getDir(k, h), 0 === h[0] && 0 === h[1] && (i = !1), g--;
                        if (d.path.length >= f) {
                            d.end = k, d.coords.push([k[0], k[1]]);
                            let b = .5 * Math.random() + .5;
                            d.things.push(j.create(d, 1 * b)), d.path.length > e / 3 && (b = .5 * Math.random() + .5, d.things.push(j.create(d, -b, d.path.length * a))), d.path.length > e / 1.5 && (b = .5 * Math.random() + .5 * (.5 <= Math.random() ? -1 : 1), d.things.push(j.create(d, b, Math.random() * d.path.length * a))), d.length = d.path.length * a, this.collection.push(d)
                        }
                    }
            }
            getStart() {
                let a = null,
                    b = null,
                    c = [],
                    d = !1;
                const e = this.scene;
                return e.forEach((a, b) => {
                    a.free && c.push(b)
                }), c.length && (a = this.pickOne(c), c.length = 0, e[a].rows.forEach((a, b) => {
                    0 === a && c.push(b)
                }), b = this.pickOne(c), d = [a, b]), d
            }
            pickOne(a) {
                return a[~~(Math.random() * a.length)]
            }
            setUsed(a, b) {
                this.scene[a].rows[b] = 1, this.scene[a].free--
            }
            isAvailable(a, b) {
                const c = this.scene;
                let d = !1;
                return "undefined" != typeof c[a] && "undefined" != typeof c[a].rows[b] && 0 === c[a].rows[b] && (d = !0), d
            }
            getDir(a, b = null) {
                const c = [],
                    d = [],
                    e = [0, 0];
                return b && .5 >= Math.random() && this.isAvailable(a[0] + b[0], a[1] + b[1]) ? b : (this.isAvailable(a[0] - 1, a[1]) && c.push(-1), this.isAvailable(a[0] + 1, a[1]) && c.push(1), this.isAvailable(a[0], a[1] - 1) && d.push(-1), this.isAvailable(a[0], a[1] + 1) && d.push(1), c.length && .5 > Math.random() ? e[0] = this.pickOne(c) : d.length && (e[1] = this.pickOne(d)), e)
            }
        }(f, g, 10, 3, 16),
        l = new class {
            constructor(a, b) {
                this.width = a, this.height = b
            }
            getBackground() {
                const a = document.createElement("canvas"),
                    b = a.getContext("2d");
                return a.className = "background", document.getElementById("canvasContainer").appendChild(a), a.width = this.width, a.height = this.height, b.fillStyle = "#000", b.fillRect(0, 0, this.width, this.height), b.drawImage(i.canvas, 0, 0), b.drawImage(k.canvas, 0, 0), a
            }
        }(f, g),
        m = l.getBackground();
    h.drawImage(m, 0, 0);
    const n = document.createElement("canvas"),
        o = n.getContext("2d");
    n.width = f, n.height = g, n.className = "background", document.getElementById("canvasContainer").appendChild(n), a()
}
runCircuitsAnimation();