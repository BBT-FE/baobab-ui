webpackJsonp([0], { 0: function(t, e, n) {
  t.exports = n('eitI')
}, '2u/B': function(t, e, n) {
  'use strict'; function o(t) {
    return t && t.__esModule ? t : { default: t }
  }Object.defineProperty(e, '__esModule', { value: !0 }), n('ZM5X'); var r = n('taqJ'), i = o(r), a = n('kiAW'), c = o(a), u = [i.default, c.default]; e.default = { install: function(t) {
    u.forEach(function(e) {
      e.install(t)
    })
  }, version: 'v1.0.0' }
}, '38Js': function(t, e, n) {
  var o; !(function() {
    'use strict'/**
	 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
	 *
	 * @codingstandard ftlabs-jsv2
	 * @copyright The Financial Times Limited [All Rights Reserved]
	 * @license MIT License (see LICENSE.txt)
	 */
    function r(t, e) {
      var n; if (e = e || {}, this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = e.touchBoundary || 10, this.layer = t, this.tapDelay = e.tapDelay || 200, this.tapTimeout = e.tapTimeout || 700, !r.notNeeded(t)) {
        for (var o = ['onMouse', 'onClick', 'onTouchStart', 'onTouchMove', 'onTouchEnd', 'onTouchCancel'], i = this, c = 0, u = o.length; c < u; c++) {
          i[o[c]] = (function(t, e) {
            return function() {
              return t.apply(e, arguments)
            }
          }(i[o[c]], i))
        } a && (t.addEventListener('mouseover', this.onMouse, !0), t.addEventListener('mousedown', this.onMouse, !0), t.addEventListener('mouseup', this.onMouse, !0)), t.addEventListener('click', this.onClick, !0), t.addEventListener('touchstart', this.onTouchStart, !1), t.addEventListener('touchmove', this.onTouchMove, !1), t.addEventListener('touchend', this.onTouchEnd, !1), t.addEventListener('touchcancel', this.onTouchCancel, !1), Event.prototype.stopImmediatePropagation || (t.removeEventListener = function(e, n, o) {
          var r = Node.prototype.removeEventListener; e === 'click' ? r.call(t, e, n.hijacked || n, o) : r.call(t, e, n, o)
        }, t.addEventListener = function(e, n, o) {
            var r = Node.prototype.addEventListener; e === 'click' ? r.call(t, e, n.hijacked || (n.hijacked = function(t) {
              t.propagationStopped || n(t)
            }), o) : r.call(t, e, n, o)
          }), typeof t.onclick === 'function' && (n = t.onclick, t.addEventListener('click', function(t) {
          n(t)
        }, !1), t.onclick = null)
      }
    } var i = navigator.userAgent.indexOf('Windows Phone') >= 0, a = navigator.userAgent.indexOf('Android') > 0 && !i, c = /iP(ad|hone|od)/.test(navigator.userAgent) && !i, u = c && /OS 4_\d(_\d)?/.test(navigator.userAgent), s = c && /OS [6-7]_\d/.test(navigator.userAgent), l = navigator.userAgent.indexOf('BB10') > 0; r.prototype.needsClick = function(t) {
      switch (t.nodeName.toLowerCase()) {
      case 'button':case 'select':case 'textarea':if (t.disabled) return !0; break; case 'input':if (c && t.type === 'file' || t.disabled) return !0; break; case 'label':case 'iframe':case 'video':return !0
      } return /\bneedsclick\b/.test(t.className)
    }, r.prototype.needsFocus = function(t) {
      switch (t.nodeName.toLowerCase()) {
      case 'textarea':return !0; case 'select':return !a; case 'input':switch (t.type) {
      case 'button':case 'checkbox':case 'file':case 'image':case 'radio':case 'submit':return !1
        } return !t.disabled && !t.readOnly; default:return /\bneedsfocus\b/.test(t.className)
      }
    }, r.prototype.sendClick = function(t, e) {
      var n, o; document.activeElement && document.activeElement !== t && document.activeElement.blur(), o = e.changedTouches[0], n = document.createEvent('MouseEvents'), n.initMouseEvent(this.determineEventType(t), !0, !0, window, 1, o.screenX, o.screenY, o.clientX, o.clientY, !1, !1, !1, !1, 0, null), n.forwardedTouchEvent = !0, t.dispatchEvent(n)
    }, r.prototype.determineEventType = function(t) {
      return a && t.tagName.toLowerCase() === 'select' ? 'mousedown' : 'click'
    }, r.prototype.focus = function(t) {
      var e; c && t.setSelectionRange && t.type.indexOf('date') !== 0 && t.type !== 'time' && t.type !== 'month' ? (e = t.value.length, t.setSelectionRange(e, e)) : t.focus()
    }, r.prototype.updateScrollParent = function(t) {
      var e, n; if (!(e = t.fastClickScrollParent) || !e.contains(t)) {
        n = t; do {
          if (n.scrollHeight > n.offsetHeight) {
            e = n, t.fastClickScrollParent = n; break
          }n = n.parentElement
        } while (n)
      }e && (e.fastClickLastScrollTop = e.scrollTop)
    }, r.prototype.getTargetElementFromEventTarget = function(t) {
      return t.nodeType === Node.TEXT_NODE ? t.parentNode : t
    }, r.prototype.onTouchStart = function(t) {
      var e, n, o; if (t.targetTouches.length > 1) return !0; if (e = this.getTargetElementFromEventTarget(t.target), n = t.targetTouches[0], c) {
        if (o = window.getSelection(), o.rangeCount && !o.isCollapsed) return !0; if (!u) {
          if (n.identifier && n.identifier === this.lastTouchIdentifier) return t.preventDefault(), !1; this.lastTouchIdentifier = n.identifier, this.updateScrollParent(e)
        }
      } return this.trackingClick = !0, this.trackingClickStart = t.timeStamp, this.targetElement = e, this.touchStartX = n.pageX, this.touchStartY = n.pageY, t.timeStamp - this.lastClickTime < this.tapDelay && t.preventDefault(), !0
    }, r.prototype.touchHasMoved = function(t) {
      var e = t.changedTouches[0], n = this.touchBoundary; return Math.abs(e.pageX - this.touchStartX) > n || Math.abs(e.pageY - this.touchStartY) > n
    }, r.prototype.onTouchMove = function(t) {
      return !this.trackingClick || ((this.targetElement !== this.getTargetElementFromEventTarget(t.target) || this.touchHasMoved(t)) && (this.trackingClick = !1, this.targetElement = null), !0)
    }, r.prototype.findControl = function(t) {
      return void 0 !== t.control ? t.control : t.htmlFor ? document.getElementById(t.htmlFor) : t.querySelector('button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea')
    }, r.prototype.onTouchEnd = function(t) {
      var e, n, o, r, i, l = this.targetElement; if (!this.trackingClick) return !0; if (t.timeStamp - this.lastClickTime < this.tapDelay) return this.cancelNextClick = !0, !0; if (t.timeStamp - this.trackingClickStart > this.tapTimeout) return !0; if (this.cancelNextClick = !1, this.lastClickTime = t.timeStamp, n = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, s && (i = t.changedTouches[0], l = document.elementFromPoint(i.pageX - window.pageXOffset, i.pageY - window.pageYOffset) || l, l.fastClickScrollParent = this.targetElement.fastClickScrollParent), (o = l.tagName.toLowerCase()) === 'label') {
        if (e = this.findControl(l)) {
          if (this.focus(l), a) return !1; l = e
        }
      }
      else if (this.needsFocus(l)) return t.timeStamp - n > 100 || c && window.top !== window && o === 'input' ? (this.targetElement = null, !1) : (this.focus(l), this.sendClick(l, t), c && o === 'select' || (this.targetElement = null, t.preventDefault()), !1); return !(!c || u || !(r = l.fastClickScrollParent) || r.fastClickLastScrollTop === r.scrollTop) || (this.needsClick(l) || (t.preventDefault(), this.sendClick(l, t)), !1)
    }, r.prototype.onTouchCancel = function() {
      this.trackingClick = !1, this.targetElement = null
    }, r.prototype.onMouse = function(t) {
      return !this.targetElement || (!!t.forwardedTouchEvent || (!t.cancelable || (!(!this.needsClick(this.targetElement) || this.cancelNextClick) || (t.stopImmediatePropagation ? t.stopImmediatePropagation() : t.propagationStopped = !0, t.stopPropagation(), t.preventDefault(), !1))))
    }, r.prototype.onClick = function(t) {
      var e; return this.trackingClick ? (this.targetElement = null, this.trackingClick = !1, !0) : t.target.type === 'submit' && t.detail === 0 || (e = this.onMouse(t), e || (this.targetElement = null), e)
    }, r.prototype.destroy = function() {
      var t = this.layer; a && (t.removeEventListener('mouseover', this.onMouse, !0), t.removeEventListener('mousedown', this.onMouse, !0), t.removeEventListener('mouseup', this.onMouse, !0)), t.removeEventListener('click', this.onClick, !0), t.removeEventListener('touchstart', this.onTouchStart, !1), t.removeEventListener('touchmove', this.onTouchMove, !1), t.removeEventListener('touchend', this.onTouchEnd, !1), t.removeEventListener('touchcancel', this.onTouchCancel, !1)
    }, r.notNeeded = function(t) {
      var e, n, o; if (void 0 === window.ontouchstart) return !0; if (n = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) {
        if (!a) return !0; if (e = document.querySelector('meta[name=viewport]')) {
          if (e.content.indexOf('user-scalable=no') !== -1) return !0; if (n > 31 && document.documentElement.scrollWidth <= window.outerWidth) return !0
        }
      } if (l && (o = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/), o[1] >= 10 && o[2] >= 3 && (e = document.querySelector('meta[name=viewport]')))) {
        if (e.content.indexOf('user-scalable=no') !== -1) return !0; if (document.documentElement.scrollWidth <= window.outerWidth) return !0
      } return t.style.msTouchAction === 'none' || t.style.touchAction === 'manipulation' || (!!(+(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1] >= 27 && (e = document.querySelector('meta[name=viewport]')) && (e.content.indexOf('user-scalable=no') !== -1 || document.documentElement.scrollWidth <= window.outerWidth)) || (t.style.touchAction === 'none' || t.style.touchAction === 'manipulation'))
    }, r.attach = function(t, e) {
      return new r(t, e)
    }, void 0 !== (o = function() {
      return r
    }.call(e, n, e, t)) && (t.exports = o)
  }())
}, '4WKH': function(t, e) {}, 6988: function(t, e) {}, '6O9Z': function(t, e) {}, KBAU: function(t, e, n) {
  'use strict'; Object.defineProperty(e, '__esModule', { value: !0 }); var o = n('xtQE'), r = (function(t) {
    return t && t.__esModule ? t : { default: t }
  }(o)); n('6O9Z'), e.default = (0, r.default)({})
}, RaJb: function(t, e) {}, ZGrA: function(t, e, n) {
  'use strict'; Object.defineProperty(e, '__esModule', { value: !0 }); var o = n('feIk'), r = (function(t) {
    return t && t.__esModule ? t : { default: t }
  }(o)); n('6988'), e.default = (0, r.default)({ data: function() {
    return { title: 'about' }
  } })
}, ZM5X: function(t, e) {}, c10t: function(t, e) {
  var n = function() {
      var t = this, e = t.$createElement; t._self._c; return t._m(0)
    }, o = [function() {
      var t = this, e = t.$createElement, n = t._self._c || e; return n('div', [n('p', [t._v('tabItem')])])
    }]; t.exports = function(t) {
    var e = typeof t === 'function' ? t.options : t; return e.render = n, e.staticRenderFns = o, t
  }
}, eitI: function(t, e, n) {
  'use strict'; function o(t) {
    return t && t.__esModule ? t : { default: t }
  } var r = Object.assign || function(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e]; for (var o in n)Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
      } return t
    }, i = n('QPfz'), a = o(i), c = n('gXwj'), u = o(c), s = n('38Js'), l = o(s), d = n('KBAU'), f = o(d), h = n('2u/B'), p = o(h); a.default.use(p.default), l.default.attach(document.body), new a.default(r({ el: '#app', router: u.default }, f.default))
}, feIk: function(t, e) {
  var n = function() {
      var t = this, e = t.$createElement, n = t._self._c || e; return n('div', [n('span', [t._v('title')]), t._v(' '), n('TabBar', [n('TabItem')], 1)], 1)
    }, o = []; t.exports = function(t) {
    var e = typeof t === 'function' ? t.options : t; return e.render = n, e.staticRenderFns = o, t
  }
}, gXwj: function(t, e, n) {
  'use strict'; function o(t) {
    return t && t.__esModule ? t : { default: t }
  }Object.defineProperty(e, '__esModule', { value: !0 }); var r = n('QPfz'), i = o(r), a = n('7ov2'), c = o(a), u = n('ZGrA'), s = o(u); i.default.use(c.default); var l = [{ path: '/', redirect: '/about' }, { path: '/about', component: s.default }]; e.default = new c.default({ routes: l })
}, kiAW: function(t, e, n) {
  'use strict'; Object.defineProperty(e, '__esModule', { value: !0 }); var o = n('c10t'), r = (function(t) {
    return t && t.__esModule ? t : { default: t }
  }(o)); n('4WKH'); var i = (0, r.default)({ name: 'TabItem', data: function() {
    return {}
  } }); e.default = { install: function(t) {
    t.component(i.name, i)
  } }
}, taqJ: function(t, e, n) {
  'use strict'; Object.defineProperty(e, '__esModule', { value: !0 }); var o = n('wPct'), r = (function(t) {
    return t && t.__esModule ? t : { default: t }
  }(o)); n('RaJb'); var i = (0, r.default)({ name: 'TabBar', data: function() {
    return {}
  } }); e.default = { install: function(t) {
    t.component(i.name, i)
  } }
}, wPct: function(t, e) {
  var n = function() {
      var t = this, e = t.$createElement; return (t._self._c || e)('div', [t._t('default')], 2)
    }, o = []; t.exports = function(t) {
    var e = typeof t === 'function' ? t.options : t; return e.render = n, e.staticRenderFns = o, t
  }
}, xtQE: function(t, e) {
  var n = function() {
      var t = this, e = t.$createElement, n = t._self._c || e; return n('div', [n('router-view')], 1)
    }, o = []; t.exports = function(t) {
    var e = typeof t === 'function' ? t.options : t; return e.render = n, e.staticRenderFns = o, t
  }
} }, [0])
