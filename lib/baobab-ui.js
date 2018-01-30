(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define(["vue"], factory);
	else if(typeof exports === 'object')
		exports["baobab-ui"] = factory(require("vue"));
	else
		root["baobab-ui"] = factory(root["Vue"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(2);

var _TabBar = __webpack_require__(3);

var _TabBar2 = _interopRequireDefault(_TabBar);

var _TabItem = __webpack_require__(6);

var _TabItem2 = _interopRequireDefault(_TabItem);

var _Badge = __webpack_require__(9);

var _Badge2 = _interopRequireDefault(_Badge);

var _Cell = __webpack_require__(12);

var _Cell2 = _interopRequireDefault(_Cell);

var _CellGroup = __webpack_require__(15);

var _CellGroup2 = _interopRequireDefault(_CellGroup);

var _Field = __webpack_require__(18);

var _Field2 = _interopRequireDefault(_Field);

var _Modal = __webpack_require__(21);

var _Modal2 = _interopRequireDefault(_Modal);

var _Section = __webpack_require__(24);

var _Section2 = _interopRequireDefault(_Section);

var _Button = __webpack_require__(27);

var _Button2 = _interopRequireDefault(_Button);

var _Spinner = __webpack_require__(30);

var _Spinner2 = _interopRequireDefault(_Spinner);

var _Filter = __webpack_require__(33);

var _Filter2 = _interopRequireDefault(_Filter);

var _SingleCard = __webpack_require__(36);

var _SingleCard2 = _interopRequireDefault(_SingleCard);

var _CheckCard = __webpack_require__(39);

var _CheckCard2 = _interopRequireDefault(_CheckCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var components = [_TabBar2.default, _TabItem2.default, _Badge2.default, _Cell2.default, _CellGroup2.default, _Field2.default, _Modal2.default, _Section2.default, _Button2.default, _Spinner2.default,
// some component belong filter
_Filter2.default, _SingleCard2.default, _CheckCard2.default];

// install方法将所有组件全局注册

// filter group
exports.default = {
  install: function install(Vue) {
    components.forEach(function (component) {
      component.install(Vue);
    });
  },


  version: 'v1.0.0'
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(4);

var _index2 = _interopRequireDefault(_index);

__webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var component = (0, _index2.default)({
  name: 'TabBar',

  props: {
    visiable: {
      type: Boolean,
      default: true
    },
    bgcolor: {
      type: String,
      default: 'rgba(255, 255, 255, .9)'
    },
    fixed: {
      type: Boolean,
      default: false
    }
  }
});

exports.default = {
  install: function install(Vue) {
    Vue.component(component.name, component);
  }
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

var render = function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"TabBar baobab-border-top",class:{'TabBar--hide': !_vm.visiable, 'TabBar--fixed': _vm.fixed},style:({backgroundColor: _vm.bgcolor})},[_vm._t("default")],2)}
var staticRenderFns = []
module.exports = function (_exports) {
  var options = typeof _exports === 'function'
    ? _exports.options
    : _exports
  options.render = render
  options.staticRenderFns = staticRenderFns
  return _exports
}


/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(7);

var _index2 = _interopRequireDefault(_index);

__webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var component = (0, _index2.default)({
  name: 'TabItem',

  props: {
    title: {
      type: String,
      required: true,
      default: ''
    },
    to: String,
    selected: {
      type: Boolean,
      required: false,
      default: undefined
    }
  },

  computed: {
    hasSlot: function hasSlot() {
      return Object.keys(this.$slots).length > 0;
    }
  },

  methods: {
    handleClick: function handleClick() {
      if (this.to && this.$router) {
        this.$router.replace(this.to);
      } else {
        // 如果不存在to则执行方法
        this.$emit('click');
      }
    }
  }
});

exports.default = {
  install: function install(Vue) {
    Vue.component(component.name, component); // 注册全局组件
  }
};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

var render = function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"TabItem",class:{'selected': _vm.selected},on:{"click":_vm.handleClick}},[_c('div',{staticClass:"TabItem--main"},[(_vm.hasSlot)?_c('div',{staticClass:"TabItem--icon"},[(_vm.selected === false)?_vm._t("icon"):_vm._e(),_vm._v(" "),(_vm.selected === true)?_vm._t("icon-selected"):_vm._e(),_vm._v(" "),(_vm.selected === undefined)?_vm._t("icon-disabled"):_vm._e(),_vm._v(" "),_c('div',{staticClass:"TabItem--badge"},[_vm._t("badge")],2)],2):_vm._e(),_vm._v(" "),_c('div',{staticClass:"TabItem--title",class:{'TabItem--disabled': _vm.selected === undefined && _vm.to === undefined}},[_vm._v(_vm._s(_vm.title))])])])}
var staticRenderFns = []
module.exports = function (_exports) {
  var options = typeof _exports === 'function'
    ? _exports.options
    : _exports
  options.render = render
  options.staticRenderFns = staticRenderFns
  return _exports
}


/***/ }),
/* 8 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(10);

var _index2 = _interopRequireDefault(_index);

__webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var component = (0, _index2.default)({
  name: 'Badge',

  props: {
    tipNum: {
      type: [String, Number],
      required: false
    }
  }
});

exports.default = {
  install: function install(Vue) {
    Vue.component(component.name, component);
  }
};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

var render = function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"Badge",class:{'Badge--single': _vm.tipNum !== undefined && _vm.tipNum.toString().length === 1, 'Badge--dot': _vm.tipNum === undefined || _vm.tipNum === ''}},[_vm._v(_vm._s(_vm.tipNum))])}
var staticRenderFns = []
module.exports = function (_exports) {
  var options = typeof _exports === 'function'
    ? _exports.options
    : _exports
  options.render = render
  options.staticRenderFns = staticRenderFns
  return _exports
}


/***/ }),
/* 11 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(13);

var _index2 = _interopRequireDefault(_index);

__webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var component = (0, _index2.default)({
  name: 'Cell',
  props: {
    borderBottom: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    to: {
      type: [String, Object]
    },
    arrow: undefined,
    bgColor: {
      type: String,
      default: 'rgba(255,255,255,1)'
    }
  },

  methods: {
    handleClick: function handleClick() {
      if (this.to) {
        if (/^https?:/.test(this.to)) {
          window.location = this.to;
        } else {
          if (this.$router) {
            this.$router.push(this.to);
          } else {
            this.$emit('click');
          }
        }
      } else {
        this.$emit('click');
      }
    }
  },

  computed: {
    hasIcon: function hasIcon() {
      return this.$slots.icon;
    },

    // 如果有to属性, 则不必写arrow
    hasArrow: function hasArrow() {
      if (this.arrow) {
        return this.arrow;
      }
      if (this.to) {
        return true;
      }
      return false;
    }
  }
});

exports.default = {
  install: function install(Vue) {
    Vue.component(component.name, component);
  }
};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

var render = function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"CellBox",style:({'background-color': _vm.bgColor}),on:{"click":_vm.handleClick}},[_c('div',{staticClass:"Cell",class:{'baobab-border-bottom': _vm.borderBottom}},[(_vm.hasIcon)?_c('div',{staticClass:"Cell--icon"},[_vm._t("icon")],2):_vm._e(),_vm._v(" "),_vm._t("header",[(_vm.title)?_c('div',{staticClass:"Cell--hd"},[_vm._v(_vm._s(_vm.title))]):_vm._e()]),_vm._v(" "),_vm._t("body",[(_vm.content)?_c('div',{staticClass:"Cell--bd"},[_vm._v(_vm._s(_vm.content))]):_vm._e()]),_vm._v(" "),(_vm.hasArrow)?_c('i',{staticClass:"Cell--arrow"}):_vm._e()],2)])}
var staticRenderFns = []
module.exports = function (_exports) {
  var options = typeof _exports === 'function'
    ? _exports.options
    : _exports
  options.render = render
  options.staticRenderFns = staticRenderFns
  return _exports
}


/***/ }),
/* 14 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(16);

var _index2 = _interopRequireDefault(_index);

__webpack_require__(17);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var component = (0, _index2.default)({
  name: 'CellGroup',

  props: {}
});

exports.default = {
  install: function install(Vue) {
    Vue.component(component.name, component);
  }
};

/***/ }),
/* 16 */
/***/ (function(module, exports) {

var render = function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"CellGroup"},[_vm._t("default")],2)}
var staticRenderFns = []
module.exports = function (_exports) {
  var options = typeof _exports === 'function'
    ? _exports.options
    : _exports
  options.render = render
  options.staticRenderFns = staticRenderFns
  return _exports
}


/***/ }),
/* 17 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(19);

var _index2 = _interopRequireDefault(_index);

__webpack_require__(20);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var component = (0, _index2.default)({
  name: 'Field'
});

exports.default = {
  install: function install(Vue) {
    Vue.component(component.name, component);
  }
};

/***/ }),
/* 19 */
/***/ (function(module, exports) {

var render = function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._v("\n\tfield\n")])}
var staticRenderFns = []
module.exports = function (_exports) {
  var options = typeof _exports === 'function'
    ? _exports.options
    : _exports
  options.render = render
  options.staticRenderFns = staticRenderFns
  return _exports
}


/***/ }),
/* 20 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(22);

var _index2 = _interopRequireDefault(_index);

__webpack_require__(23);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var component = (0, _index2.default)({
  name: 'Modal',

  props: {
    // 使用v-model, 实现父子组件通信
    value: {
      type: Boolean
    },
    bgColor: {
      type: String,
      default: '#fff'
    },
    zIndex: {
      type: [String, Number],
      default: 2
    },
    anim: {
      validator: function validator(v) {
        // 验证数据准确性
        var names = ['none', 'bottomUp', 'fade'];
        return names.indexOf(v) > -1;
      },
      default: 'none'
    },
    // 是否点击Modal时隐藏Modal, 默认点击不隐藏
    dismissOnClick: {
      type: Boolean,
      default: false
    }
  },

  data: function data() {
    return {
      visiable: false
    };
  },


  computed: {
    animName: function animName() {
      var name = this.anim;
      if (name === 'none') {
        return '';
      } else {
        return 'baobab--anim--' + name;
      }
    }
  },

  watch: {
    value: function value(newVal) {
      this.visiable = newVal;
    }
  },

  methods: {
    handleClick: function handleClick(e) {
      if (e.target === this.$refs.modal && this.dismissOnClick) {
        this.$emit('input', false); // 更新父组件v-model传递过来的值
      }
    }
  }
});

exports.default = {
  install: function install(Vue) {
    Vue.component(component.name, component);
  }
};

/***/ }),
/* 22 */
/***/ (function(module, exports) {

var render = function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":_vm.animName}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.visiable),expression:"visiable"}],ref:"modal",staticClass:"Modal",style:({'backgroundColor': _vm.bgColor, 'zIndex': _vm.zIndex}),on:{"click":_vm.handleClick}},[_vm._t("default")],2)])}
var staticRenderFns = []
module.exports = function (_exports) {
  var options = typeof _exports === 'function'
    ? _exports.options
    : _exports
  options.render = render
  options.staticRenderFns = staticRenderFns
  return _exports
}


/***/ }),
/* 23 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(25);

var _index2 = _interopRequireDefault(_index);

__webpack_require__(26);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MAXLENTG = 5;
var WHITE_BG = 'rgba(255,255,255,1)';
var component = (0, _index2.default)({
  name: 'Section',
  props: {
    sectionList: {
      type: Array,
      default: []
    },
    bgColor: {
      type: String,
      default: WHITE_BG
    }
  },
  data: function data() {
    return {
      activeIndex: 0,
      isOverFlow: false,
      defaultColor: WHITE_BG
    };
  },
  created: function created() {
    if (this.sectionList.length >= MAXLENTG) {
      this.isOverFlow = true;
    }
    // if(this.bgColor) []
  },

  methods: {
    changeActive: function changeActive(index, item) {
      this.activeIndex = index;
      this.$emit('onChange', Object.assign({}, item));
    }
  }
});
exports.default = {
  install: function install(Vue) {
    Vue.component(component.name, component);
  }
};

/***/ }),
/* 25 */
/***/ (function(module, exports) {

var render = function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"Section-Plugin baobab-border-bottom",class:{'overflow-style': _vm.isOverFlow},style:({'backgroundColor': _vm.bgColor})},_vm._l((_vm.sectionList),function(item,index){return _c('div',{staticClass:"section-item-wrapper",class:{'overflow-style': _vm.isOverFlow},on:{"click":function($event){_vm.changeActive(index,item)}}},[_c('div',{staticClass:"section-item",class:{'isActive': _vm.activeIndex === index ? true : false,'isChangeColor': _vm.bgColor !== _vm.defaultColor ? true : false}},[_c('div',{staticClass:"badge--wrapper"},[(item.hasBadge === true)?_c('Badge',{attrs:{"tipNum":item.value}}):_vm._e()],1),_vm._v(" "),_c('span',[_vm._v(_vm._s(item.title))])])])}))}
var staticRenderFns = []
module.exports = function (_exports) {
  var options = typeof _exports === 'function'
    ? _exports.options
    : _exports
  options.render = render
  options.staticRenderFns = staticRenderFns
  return _exports
}


/***/ }),
/* 26 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(28);

var _index2 = _interopRequireDefault(_index);

__webpack_require__(29);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var component = (0, _index2.default)({
  name: 'Btn',

  props: {
    width: {
      type: String,
      default: ''
    },

    height: {
      type: String,
      default: '44px'
    },

    radius: {
      type: String,
      default: '2px'
    },

    tintColor: {
      type: String,
      default: '#3E81F1'
    },

    // spinnerBgColor
    spinnerBgColor: {
      type: String,
      default: 'rgba(255, 255, 255, .5)'
    },

    foreColor: {
      type: String,
      default: '#fff'
    },

    type: {
      default: 'normal',
      validator: function validator(type) {
        var types = ['normal', 'simple', 'cutout'];
        return types.indexOf(type) > -1;
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },

    loading: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    // 不可点击样式
    // mixClass() {
    //   return {
    //     'disabled': this.disabled || this.loading
    //   }
    // },

    overlayStyles: function overlayStyles() {
      var type = this.type,
          tintColor = this.tintColor;

      var styles = {};
      if (type === 'normal') {
        styles['background-color'] = tintColor;
      } else if (type === 'simple') {
        styles['background-color'] = '#fff';
      } else if (type === 'cutout') {
        styles['background-color'] = '#fff';
      }
      return styles;
    },
    style: function style() {
      var type = this.type,
          tintColor = this.tintColor;


      var styles = {
        width: this.width,
        height: this.height,
        'border-radius': this.radius,
        'font-size': this.size
      };
      if (type === 'normal') {
        styles['color'] = '#fff';
        styles['background-color'] = tintColor;
      } else if (type === 'simple') {
        styles['color'] = tintColor;
        styles['background-color'] = '#fff';
      } else if (type === 'cutout') {
        styles['border'] = '1px solid ' + tintColor;
        styles['color'] = tintColor;
        styles['background-color'] = '#fff';
      }

      return styles;
    },
    spinnerSize: function spinnerSize() {
      var size = parseFloat(this.height) * 0.45;
      return size < 12 ? 12 : size;
    }
  },

  methods: {
    handleClick: function handleClick() {
      if (!this.loading && !this.disabled) {
        this.$emit('click');
      }
    }
  }
});

exports.default = {
  install: function install(Vue) {
    Vue.component(component.name, component);
  }
};

/***/ }),
/* 28 */
/***/ (function(module, exports) {

var render = function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"Button",style:(_vm.style),on:{"click":_vm.handleClick}},[(_vm.loading && _vm.disabled)?_c('Spinner',{staticClass:"Button--spinner",attrs:{"size":_vm.spinnerSize,"width":"1","bgColor":_vm.spinnerBgColor,"foreColor":_vm.foreColor}}):_vm._e(),_vm._v(" "),_c('div',{staticClass:"Button--name"},[_vm._t("default")],2),_vm._v(" "),(_vm.disabled || _vm.loading)?_c('div',{staticClass:"Button--overlay",style:(_vm.overlayStyles)}):_vm._e()],1)}
var staticRenderFns = []
module.exports = function (_exports) {
  var options = typeof _exports === 'function'
    ? _exports.options
    : _exports
  options.render = render
  options.staticRenderFns = staticRenderFns
  return _exports
}


/***/ }),
/* 29 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(31);

var _index2 = _interopRequireDefault(_index);

__webpack_require__(32);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var component = (0, _index2.default)({
  name: 'Spinner',

  props: {
    size: {
      type: [Number, String],
      default: 36
    },

    // 边框宽度
    width: {
      type: [Number, String],
      default: 2
    },

    bgColor: {
      type: String,
      default: '#c2c2c2'
    },

    foreColor: {
      type: String,
      default: '#444'
    }

  },

  computed: {
    style: function style() {
      return {
        width: this.size + 'px',
        height: this.size + 'px',
        'border-top-color': this.bgColor,
        'border-right-color': this.bgColor,
        'border-bottom-color': this.bgColor,
        'border-left-color': this.foreColor,
        'border-width': this.width + 'px'
      };
    }
  }
});

exports.default = {
  install: function install(Vue) {
    Vue.component(component.name, component);
  }
};

/***/ }),
/* 31 */
/***/ (function(module, exports) {

var render = function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"Spinner",style:(_vm.style)})}
var staticRenderFns = []
module.exports = function (_exports) {
  var options = typeof _exports === 'function'
    ? _exports.options
    : _exports
  options.render = render
  options.staticRenderFns = staticRenderFns
  return _exports
}


/***/ }),
/* 32 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(34);

var _index2 = _interopRequireDefault(_index);

__webpack_require__(35);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// data list for example
// filterList: [
// 	{ title: '选项标题1',
// 		type: 'single',
// 		selected: false,
// 		list: [
// 			{ name: '选项一', value: 0 },
// 			{ name: '选项二', value: 0 },
// 			{ name: '选项三', value: 0 }
// 		]
// 	},
// 	{ title: '选项标题1',
// 		type: 'selection',
// 		selected: true,
// 		list: [
// 			{ name: '选项一', value: 0 },
// 			{ name: '选项二', value: 0 },
// 			{ name: '选项三', value: 0 },
// 			{ name: '选项四aaa', value: 0 }
// 		]
// 	}
// ]

var component = (0, _index2.default)({
  name: 'FilterCard',
  props: {
    filterList: {
      type: Array,
      default: []
    }
  },
  data: function data() {
    return {
      typeList: ['single', 'selection'],
      dataList: null,
      selectedList: [],
      flag: false
    };
  },
  created: function created() {
    var _this = this;

    this.dataList = this.filterList;
    this.dataList.forEach(function (item) {
      var one = Object.assign({}, item);
      one.list = [];
      _this.selectedList.push(one);
    });
  },

  methods: {
    // filter titile clicked
    selected: function selected(selectedIndex) {
      var flag = this.dataList[selectedIndex].selected;
      this.dataList.forEach(function (item, index) {
        item.selected = false;
      });
      this.dataList[selectedIndex].selected = !flag;
    },
    getSelected: function getSelected(value) {
      if (!this.flag) this.flag = true;
      this.onSelect(value);
    },
    onSelect: function onSelect(value) {
      this.selectedList[value.index].list = value.list;
      this.$emit('onchange', this.selectedList);
    }
  }
});

exports.default = {
  install: function install(Vue) {
    Vue.component(component.name, component);
  }
};

/***/ }),
/* 34 */
/***/ (function(module, exports) {

var render = function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"filter--wrapper"},_vm._l((_vm.dataList),function(item,index){return (_vm.dataList != null)?_c('div',{staticClass:"filter--item"},[_c('div',{staticClass:"title--wrapper baobab-border-bottom",class:{'selected':item.selected ? true :false},on:{"click":function($event){_vm.selected(index)}}},[_c('span',[_vm._v(_vm._s(item.title))]),_c('i',{staticClass:"right--trangle"})]),_vm._v(" "),_c('transition',{attrs:{"name":"fade"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(item.selected),expression:"item.selected"}],staticClass:"section--wrapper baobab-border-bottom"},[(item.type===_vm.typeList[0])?_c('SingleCard',{attrs:{"list":item.list,"parentIndex":index},on:{"onchange":_vm.getSelected}}):_vm._e(),_vm._v(" "),(item.type === _vm.typeList[1])?_c('CheckCard',{attrs:{"list":item.list,"parentIndex":index},on:{"onchange":_vm.getSelected}}):_vm._e()],1)])],1):_vm._e()}))}
var staticRenderFns = []
module.exports = function (_exports) {
  var options = typeof _exports === 'function'
    ? _exports.options
    : _exports
  options.render = render
  options.staticRenderFns = staticRenderFns
  return _exports
}


/***/ }),
/* 35 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(37);

var _index2 = _interopRequireDefault(_index);

__webpack_require__(38);

var _vue = __webpack_require__(0);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var component = (0, _index2.default)({
  name: 'SingleCard',
  props: {
    list: {
      type: Array,
      default: [],
      validator: function validator(value) {
        return value.length > 0;
      }
    },
    parentIndex: {
      type: [String, Number],
      required: true,
      validator: function validator(value) {
        return value >= 0;
      }
    }
  },
  data: function data() {
    return {
      dataList: [],
      selectedIndex: -1
    };
  },
  created: function created() {
    this.dataList = this.list;
  },

  computed: {
    selectedItem: function selectedItem() {
      var item = {};
      item = this.dataList[this.selectedIndex];
      return item;
    }
  },
  watch: {
    selectedIndex: function selectedIndex(value) {
      this.$emit('onchange', { index: this.parentIndex, list: [this.dataList[value]] });
    }
  },
  methods: {
    radio: function radio(index) {
      this.dataList.forEach(function (item, index) {
        _vue2.default.set(item, 'isSelected', false);
      });
      this.selectedIndex = index;
      this.dataList[index].isSelected = true;
    }
  }
});
exports.default = {
  install: function install(Vue) {
    Vue.component(component.name, component);
  }
};

/***/ }),
/* 37 */
/***/ (function(module, exports) {

var render = function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"single--wrapper"},_vm._l((_vm.dataList),function(each,index){return _c('div',{staticClass:"section--item",class:{'baobab-border-bottom': index === _vm.dataList.length-1 ? false :true},on:{"click":function($event){$event.stopPropagation();_vm.radio(index)}}},[_c('div',{staticClass:"section--item-name",class:{'selected':each.isSelected ? true : false}},[_vm._v(_vm._s(each.name))]),_vm._v(" "),_c('div',{staticStyle:{"flex":"1"}}),_vm._v(" "),(each.isSelected)?_c('div',{staticClass:"section--item-selected"}):_vm._e()])}))}
var staticRenderFns = []
module.exports = function (_exports) {
  var options = typeof _exports === 'function'
    ? _exports.options
    : _exports
  options.render = render
  options.staticRenderFns = staticRenderFns
  return _exports
}


/***/ }),
/* 38 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
		value: true
});

var _index = __webpack_require__(40);

var _index2 = _interopRequireDefault(_index);

__webpack_require__(41);

var _vue = __webpack_require__(0);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var component = (0, _index2.default)({
		name: 'CheckCard',
		props: {
				list: {
						type: Array,
						default: [],
						validator: function validator(value) {
								return value.length > 0;
						}
				},
				parentIndex: {
						type: [String, Number],
						required: true,
						validator: function validator(value) {
								return value >= 0;
						}
				}
		},
		data: function data() {
				return {
						dataList: [],
						selectedList: []
				};
		},
		created: function created() {
				this.dataList = this.list;
		},

		watch: {
				selectedList: function selectedList(value) {
						this.$emit('onchange', { index: this.parentIndex, list: value || [] });
				}
		},
		methods: {
				// checkbox clicked
				checkBox: function checkBox(index) {
						var item = this.dataList[index];
						// when item do not have isSelected property
						if (!item.isSelected) {
								_vue2.default.set(item, 'isSelected', true);
						} else {
								item.isSelected = false;
						}
						this.dataList[index] = item;
						var list = this.selectedList;
						if (item.isSelected) {
								if (list.indexOf(item) === -1) {
										list.push(item);
								}
						} else {
								var pos = list.indexOf(item);
								if (pos !== -1) {
										list.splice(pos, 1);
								}
						}
						this.selectedList = list.sort(this.sortForSe());
				},
				reset: function reset() {
						this.resetSelectArr();
				},
				resetSelectArr: function resetSelectArr() {
						this.dataList.forEach(function (item) {
								item.isSelected = false;
						});
						this.selectedList = [];
				},
				confirm: function confirm() {
						this.$emit('onconfirm', this.selectedList);
				},
				sortForSe: function sortForSe() {
						var _this = this;

						return function (before, after) {
								return _this.dataList.indexOf(before) > _this.dataList.indexOf(after);
						};
				}
		}
});
exports.default = {
		install: function install(Vue) {
				Vue.component(component.name, component);
		}
};

/***/ }),
/* 40 */
/***/ (function(module, exports) {

var render = function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"section--selected baobab-border-bottom"},[_vm._l((_vm.dataList),function(each,index){return _c('div',{staticClass:"section--item",class:{'selected':each.isSelected ? true : false},on:{"click":function($event){$event.stopPropagation();_vm.checkBox(index)}}},[_c('div',{staticClass:"section--item-name",class:{'selected':each.isSelected ? true : false}},[_c('div',{staticClass:"name--wrapper"},[_vm._v(_vm._s(each.name))])])])}),_vm._v(" "),_c('div',{staticClass:"btn--wrapper"},[_c('div',{staticClass:"btn"},[_c('Btn',{staticStyle:{"font-size":"16px"},attrs:{"type":"simple","radius":"0px"},on:{"click":function($event){_vm.reset(_vm.index)}}},[_vm._v("重置")])],1),_vm._v(" "),_c('div',{staticClass:"btn"},[_c('Btn',{staticStyle:{"font-size":"16px"},attrs:{"type":"normal","radius":"0px"},on:{"click":function($event){_vm.confirm(_vm.index)}}},[_vm._v("确定")])],1)])],2)}
var staticRenderFns = []
module.exports = function (_exports) {
  var options = typeof _exports === 'function'
    ? _exports.options
    : _exports
  options.render = render
  options.staticRenderFns = staticRenderFns
  return _exports
}


/***/ }),
/* 41 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
});
//# sourceMappingURL=baobab-ui.js.map