"use strict";
(self["webpackChunkvue_toast_notification"] = self["webpackChunkvue_toast_notification"] || []).push([[179],{

/***/ 923:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ./node_modules/.pnpm/@vue+runtime-dom@3.2.26/node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js
var runtime_dom_esm_bundler = __webpack_require__(628);
// EXTERNAL MODULE: ./node_modules/.pnpm/@vue+runtime-core@3.2.26/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(975);
// EXTERNAL MODULE: ./node_modules/.pnpm/@vue+shared@3.2.26/node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(104);
;// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_26251eab09162b25a254715ee98d7c5c/node_modules/babel-loader/lib/index.js!./node_modules/.pnpm/vue-loader@16.8.3_webpack@5.65.0/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/.pnpm/vue-loader@16.8.3_webpack@5.65.0/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/js/Component.vue?vue&type=template&id=f73c8b4e


const _hoisted_1 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", {
  class: "v-toast__icon"
}, null, -1);

const _hoisted_2 = ["innerHTML"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(runtime_dom_esm_bundler/* Transition */.uT, {
    "enter-active-class": _ctx.transition.enter,
    "leave-active-class": _ctx.transition.leave
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* withDirectives */.wy)((0,runtime_core_esm_bundler/* createElementVNode */._)("div", {
      ref: "root",
      role: "alert",
      class: (0,shared_esm_bundler/* normalizeClass */.C_)(["v-toast__item", ["v-toast__item--".concat(_ctx.type), "v-toast__item--".concat(_ctx.position)]]),
      onMouseover: _cache[0] || (_cache[0] = $event => _ctx.toggleTimer(true)),
      onMouseleave: _cache[1] || (_cache[1] = $event => _ctx.toggleTimer(false)),
      onClick: _cache[2] || (_cache[2] = function () {
        return _ctx.whenClicked && _ctx.whenClicked(...arguments);
      })
    }, [_hoisted_1, (0,runtime_core_esm_bundler/* createElementVNode */._)("p", {
      class: "v-toast__text",
      innerHTML: _ctx.message
    }, null, 8, _hoisted_2)], 34), [[runtime_dom_esm_bundler/* vShow */.F8, _ctx.isActive]])]),
    _: 1
  }, 8, ["enter-active-class", "leave-active-class"]);
}
;// CONCATENATED MODULE: ./src/js/Component.vue?vue&type=template&id=f73c8b4e

;// CONCATENATED MODULE: ./src/js/helpers.js

function removeElement(el) {
  if (typeof el.remove !== 'undefined') {
    el.remove();
  } else {
    var _el$parentNode;

    (_el$parentNode = el.parentNode) === null || _el$parentNode === void 0 ? void 0 : _el$parentNode.removeChild(el);
  }
}
function createComponent(component, props, parentContainer) {
  let slots = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  const vNode = (0,runtime_core_esm_bundler.h)(component, props, slots);
  const container = document.createElement('div');
  container.classList.add('v-toast--pending');
  parentContainer.appendChild(container);
  (0,runtime_dom_esm_bundler/* render */.sY)(vNode, container);
  return vNode.component;
}
;// CONCATENATED MODULE: ./src/js/timer.js
// https://stackoverflow.com/a/3969760
class Timer {
  constructor(callback, delay) {
    this.startedAt = Date.now();
    this.callback = callback;
    this.delay = delay;
    this.timer = setTimeout(callback, delay);
  }

  pause() {
    this.stop();
    this.delay -= Date.now() - this.startedAt;
  }

  resume() {
    this.stop();
    this.startedAt = Date.now();
    this.timer = setTimeout(this.callback, this.delay);
  }

  stop() {
    clearTimeout(this.timer);
  }

}
;// CONCATENATED MODULE: ./src/js/positions.js
/* harmony default export */ const positions = (Object.freeze({
  TOP_RIGHT: 'top-right',
  TOP: 'top',
  TOP_LEFT: 'top-left',
  BOTTOM_RIGHT: 'bottom-right',
  BOTTOM: 'bottom',
  BOTTOM_LEFT: 'bottom-left'
}));
;// CONCATENATED MODULE: ./node_modules/.pnpm/mitt@3.0.0/node_modules/mitt/dist/mitt.mjs
/* harmony default export */ function mitt(n){return{all:n=n||new Map,on:function(t,e){var i=n.get(t);i?i.push(e):n.set(t,[e])},off:function(t,e){var i=n.get(t);i&&(e?i.splice(i.indexOf(e)>>>0,1):n.set(t,[]))},emit:function(t,e){var i=n.get(t);i&&i.slice().map(function(n){n(e)}),(i=n.get("*"))&&i.slice().map(function(n){n(t,e)})}}}
//# sourceMappingURL=mitt.mjs.map

;// CONCATENATED MODULE: ./src/js/bus.js

const eventBus = mitt();
/* harmony default export */ const bus = (eventBus);
;// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_26251eab09162b25a254715ee98d7c5c/node_modules/babel-loader/lib/index.js!./node_modules/.pnpm/vue-loader@16.8.3_webpack@5.65.0/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/js/Component.vue?vue&type=script&lang=js





/* harmony default export */ const Componentvue_type_script_lang_js = ((0,runtime_core_esm_bundler/* defineComponent */.aZ)({
  name: 'Toast',
  props: {
    message: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'success'
    },
    position: {
      type: String,
      default: positions.BOTTOM_RIGHT,

      validator(value) {
        return Object.values(positions).includes(value);
      }

    },
    duration: {
      type: Number,
      default: 3000
    },
    dismissible: {
      type: Boolean,
      default: true
    },
    onDismiss: {
      type: Function,
      default: () => {}
    },
    onClick: {
      type: Function,
      default: () => {}
    },
    queue: Boolean,
    pauseOnHover: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      isActive: false,
      parentTop: null,
      parentBottom: null,
      isHovered: false
    };
  },

  beforeMount() {
    this.setupContainer();
  },

  mounted() {
    this.showNotice();
    bus.on('toast-clear', this.dismiss);
  },

  methods: {
    setupContainer() {
      this.parentTop = document.querySelector('.v-toast.v-toast--top');
      this.parentBottom = document.querySelector('.v-toast.v-toast--bottom'); // No need to create them, they already exists

      if (this.parentTop && this.parentBottom) return;

      if (!this.parentTop) {
        this.parentTop = document.createElement('div');
        this.parentTop.className = 'v-toast v-toast--top';
      }

      if (!this.parentBottom) {
        this.parentBottom = document.createElement('div');
        this.parentBottom.className = 'v-toast v-toast--bottom';
      }

      const container = document.body;
      container.appendChild(this.parentTop);
      container.appendChild(this.parentBottom);
    },

    shouldQueue() {
      if (!this.queue) return false;
      return this.parentTop.childElementCount > 0 || this.parentBottom.childElementCount > 0;
    },

    dismiss() {
      if (this.timer) this.timer.stop();
      clearTimeout(this.queueTimer);
      this.isActive = false; // Timeout for the animation complete before destroying

      setTimeout(() => {
        this.onDismiss.apply(null, arguments);
        const wrapper = this.$refs.root; // unmount the component

        (0,runtime_dom_esm_bundler/* render */.sY)(null, wrapper);
        removeElement(wrapper);
      }, 150);
    },

    showNotice() {
      if (this.shouldQueue()) {
        // Call recursively if it should queue
        this.queueTimer = setTimeout(this.showNotice, 250);
        return;
      }

      const wrapper = this.$refs.root.parentElement;
      this.correctParent.insertAdjacentElement('afterbegin', this.$refs.root);
      removeElement(wrapper);
      this.isActive = true;

      if (this.duration) {
        this.timer = new Timer(this.dismiss, this.duration);
      }
    },

    whenClicked() {
      if (!this.dismissible) return;
      this.onClick.apply(null, arguments);
      this.dismiss();
    },

    toggleTimer(newVal) {
      if (!this.pauseOnHover || !this.timer) return;
      newVal ? this.timer.pause() : this.timer.resume();
    }

  },
  computed: {
    correctParent() {
      switch (this.position) {
        case positions.TOP:
        case positions.TOP_RIGHT:
        case positions.TOP_LEFT:
          return this.parentTop;

        case positions.BOTTOM:
        case positions.BOTTOM_RIGHT:
        case positions.BOTTOM_LEFT:
          return this.parentBottom;
      }
    },

    transition() {
      switch (this.position) {
        case positions.TOP:
        case positions.TOP_RIGHT:
        case positions.TOP_LEFT:
          return {
            enter: 'v-toast--fade-in-down',
            leave: 'v-toast--fade-out'
          };

        case positions.BOTTOM:
        case positions.BOTTOM_RIGHT:
        case positions.BOTTOM_LEFT:
          return {
            enter: 'v-toast--fade-in-up',
            leave: 'v-toast--fade-out'
          };
      }
    }

  },

  beforeUnmount() {
    bus.off('toast-clear', this.dismiss);
  }

}));
;// CONCATENATED MODULE: ./src/js/Component.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@16.8.3_webpack@5.65.0/node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(553);
;// CONCATENATED MODULE: ./src/js/Component.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(Componentvue_type_script_lang_js, [['render',render]])

/* harmony default export */ const Component = (__exports__);
;// CONCATENATED MODULE: ./src/js/api.js



const useToast = function () {
  let globalProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    open(options) {
      let message = null;
      if (typeof options === 'string') message = options;
      const defaultProps = {
        message
      };
      const propsData = Object.assign({}, defaultProps, globalProps, options);
      const instance = createComponent(Component, propsData, document.body);
      return {
        dismiss: instance.ctx.dismiss
      };
    },

    clear() {
      bus.emit('toast-clear');
    },

    success(message) {
      let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.open(Object.assign({}, {
        message,
        type: 'success'
      }, options));
    },

    error(message) {
      let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.open(Object.assign({}, {
        message,
        type: 'error'
      }, options));
    },

    info(message) {
      let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.open(Object.assign({}, {
        message,
        type: 'info'
      }, options));
    },

    warning(message) {
      let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.open(Object.assign({}, {
        message,
        type: 'warning'
      }, options));
    },

    default(message) {
      let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.open(Object.assign({}, {
        message,
        type: 'default'
      }, options));
    }

  };
};
;// CONCATENATED MODULE: ./src/index.js



const ToastPlugin = {
  install: function (app) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    let instance = useToast(options);
    app.config.globalProperties.$toast = instance;
    app.provide('$toast', instance);
  }
};
/* harmony default export */ const src = (ToastPlugin);

;// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_26251eab09162b25a254715ee98d7c5c/node_modules/babel-loader/lib/index.js!./node_modules/.pnpm/vue-loader@16.8.3_webpack@5.65.0/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/.pnpm/vue-loader@16.8.3_webpack@5.65.0/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./examples/App.vue?vue&type=template&id=710072ef


const Appvue_type_template_id_710072ef_hoisted_1 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createStaticVNode */.uE)("<nav class=\"navbar navbar-expand-lg navbar navbar-light bg-white shadow-sm mb-3\"><span class=\"navbar-brand mb-0\">Vue.js Toast</span><ul class=\"navbar-nav ml-auto\"><li class=\"nav-item\"><a class=\"nav-link\" href=\"https://github.com/ankurk91/vue-toast-notification\" target=\"_blank\"> GitHub</a></li></ul></nav>", 1);

const Appvue_type_template_id_710072ef_hoisted_2 = {
  class: "container"
};
const _hoisted_3 = {
  class: "row"
};
const _hoisted_4 = {
  class: "col-md-8 mb-3"
};
const _hoisted_5 = {
  class: "card"
};
const _hoisted_6 = {
  class: "form-group"
};

const _hoisted_7 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("label", null, [/*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)("Message "), /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("code", null, "(required)")], -1);

const _hoisted_8 = {
  class: "form-group"
};

const _hoisted_9 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("label", null, "Type", -1);

const _hoisted_10 = ["value", "id"];
const _hoisted_11 = ["for"];
const _hoisted_12 = {
  class: "form-group"
};

const _hoisted_13 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)("Duration ");

const _hoisted_14 = {
  class: "form-row"
};
const _hoisted_15 = {
  class: "col-md-3"
};
const _hoisted_16 = {
  class: "form-group"
};

const _hoisted_17 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("label", null, "Dismissible", -1);

const _hoisted_18 = {
  class: "custom-control custom-checkbox"
};

const _hoisted_19 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("label", {
  class: "custom-control-label",
  for: "checkbox-dismissible"
}, "Dismiss on click", -1);

const _hoisted_20 = {
  class: "col-md-9"
};
const _hoisted_21 = {
  class: "form-group"
};

const _hoisted_22 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("label", null, "Queue", -1);

const _hoisted_23 = {
  class: "custom-control custom-checkbox"
};

const _hoisted_24 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("label", {
  class: "custom-control-label",
  for: "checkbox-queue"
}, "Wait for previous to dismiss before showing new", -1);

const _hoisted_25 = {
  class: "form-group"
};

const _hoisted_26 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("label", null, "Position", -1);

const _hoisted_27 = ["value", "id"];
const _hoisted_28 = ["for"];

const _hoisted_29 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("hr", null, null, -1);

const _hoisted_30 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("button", {
  type: "submit",
  class: "btn btn-primary mr-3"
}, "Show notification", -1);

const _hoisted_31 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createStaticVNode */.uE)("<aside class=\"col-md-4 mb-3\"><div class=\"card\"><div class=\"card-header\"> Links</div><div class=\"card-body\"><ul><li><a href=\"https://github.com/ankurk91/vue-toast-notification\" target=\"_blank\">GitHub</a></li><li><a href=\"https://www.npmjs.com/package/vue-toast-notification\" target=\"_blank\">npm</a></li></ul></div></div></aside>", 1);

const _hoisted_32 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("footer", {
  class: "text-center text-muted small mb-3"
}, [/*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" Created by "), /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("a", {
  href: "https://twitter.com/ankurk91",
  target: "_blank",
  rel: "noopener"
}, "@ankurk91")], -1);

function Appvue_type_template_id_710072ef_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", null, [Appvue_type_template_id_710072ef_hoisted_1, (0,runtime_core_esm_bundler/* createElementVNode */._)("main", Appvue_type_template_id_710072ef_hoisted_2, [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_3, [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_4, [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_5, [(0,runtime_core_esm_bundler/* createElementVNode */._)("form", {
    class: "card-body",
    method: "post",
    onSubmit: _cache[8] || (_cache[8] = (0,runtime_dom_esm_bundler/* withModifiers */.iM)(function () {
      return $options.show && $options.show(...arguments);
    }, ["prevent"]))
  }, [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_6, [_hoisted_7, (0,runtime_core_esm_bundler/* withDirectives */.wy)((0,runtime_core_esm_bundler/* createElementVNode */._)("input", {
    type: "text",
    required: "",
    class: "form-control",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => $data.form.message = $event),
    name: "message"
  }, null, 512), [[runtime_dom_esm_bundler/* vModelText */.nr, $data.form.message, void 0, {
    trim: true
  }]])]), (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_8, [_hoisted_9, (0,runtime_core_esm_bundler/* createElementVNode */._)("div", null, [((0,runtime_core_esm_bundler/* openBlock */.wg)(true), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, null, (0,runtime_core_esm_bundler/* renderList */.Ko)($data.types, item => {
    return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", {
      key: item,
      class: "custom-control custom-radio custom-control-inline"
    }, [(0,runtime_core_esm_bundler/* withDirectives */.wy)((0,runtime_core_esm_bundler/* createElementVNode */._)("input", {
      "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => $data.form.type = $event),
      value: item,
      type: "radio",
      id: "radio-type-".concat(item),
      class: "custom-control-input"
    }, null, 8, _hoisted_10), [[runtime_dom_esm_bundler/* vModelRadio */.G2, $data.form.type]]), (0,runtime_core_esm_bundler/* createElementVNode */._)("label", {
      class: "custom-control-label text-capitalize",
      for: "radio-type-".concat(item)
    }, (0,shared_esm_bundler/* toDisplayString */.zw)(item), 9, _hoisted_11)]);
  }), 128))])]), (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_12, [(0,runtime_core_esm_bundler/* createElementVNode */._)("label", null, [_hoisted_13, (0,runtime_core_esm_bundler/* createElementVNode */._)("code", null, "(" + (0,shared_esm_bundler/* toDisplayString */.zw)($data.form.duration / 1000) + " seconds)", 1)]), (0,runtime_core_esm_bundler/* withDirectives */.wy)((0,runtime_core_esm_bundler/* createElementVNode */._)("input", {
    type: "range",
    class: "custom-range",
    min: "0",
    step: "1000",
    max: "60000",
    "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => $data.form.duration = $event)
  }, null, 512), [[runtime_dom_esm_bundler/* vModelText */.nr, $data.form.duration, void 0, {
    number: true
  }]])]), (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_14, [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_15, [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_16, [_hoisted_17, (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_18, [(0,runtime_core_esm_bundler/* withDirectives */.wy)((0,runtime_core_esm_bundler/* createElementVNode */._)("input", {
    "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => $data.form.dismissible = $event),
    type: "checkbox",
    class: "custom-control-input",
    id: "checkbox-dismissible"
  }, null, 512), [[runtime_dom_esm_bundler/* vModelCheckbox */.e8, $data.form.dismissible]]), _hoisted_19])])]), (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_20, [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_21, [_hoisted_22, (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_23, [(0,runtime_core_esm_bundler/* withDirectives */.wy)((0,runtime_core_esm_bundler/* createElementVNode */._)("input", {
    "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => $data.form.queue = $event),
    type: "checkbox",
    class: "custom-control-input",
    id: "checkbox-queue"
  }, null, 512), [[runtime_dom_esm_bundler/* vModelCheckbox */.e8, $data.form.queue]]), _hoisted_24])])])]), (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_25, [_hoisted_26, (0,runtime_core_esm_bundler/* createElementVNode */._)("div", null, [((0,runtime_core_esm_bundler/* openBlock */.wg)(true), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, null, (0,runtime_core_esm_bundler/* renderList */.Ko)($data.positions, item => {
    return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", {
      key: item,
      class: "custom-control custom-radio custom-control-inline"
    }, [(0,runtime_core_esm_bundler/* withDirectives */.wy)((0,runtime_core_esm_bundler/* createElementVNode */._)("input", {
      "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => $data.form.position = $event),
      value: item,
      type: "radio",
      id: "radio-position-".concat(item),
      class: "custom-control-input"
    }, null, 8, _hoisted_27), [[runtime_dom_esm_bundler/* vModelRadio */.G2, $data.form.position]]), (0,runtime_core_esm_bundler/* createElementVNode */._)("label", {
      class: "custom-control-label text-capitalize",
      for: "radio-position-".concat(item)
    }, (0,shared_esm_bundler/* toDisplayString */.zw)(item), 9, _hoisted_28)]);
  }), 128))])]), _hoisted_29, _hoisted_30, (0,runtime_core_esm_bundler/* createElementVNode */._)("button", {
    type: "button",
    class: "btn btn-outline-info mr-3",
    onClick: _cache[6] || (_cache[6] = function () {
      return $options.showAll && $options.showAll(...arguments);
    })
  }, "Demo all"), (0,runtime_core_esm_bundler/* createElementVNode */._)("button", {
    type: "button",
    class: "btn btn-secondary",
    onClick: _cache[7] || (_cache[7] = function () {
      return $options.clearAll && $options.clearAll(...arguments);
    })
  }, "Hide all")], 32)])]), _hoisted_31])]), _hoisted_32]);
}
;// CONCATENATED MODULE: ./examples/App.vue?vue&type=template&id=710072ef

;// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_26251eab09162b25a254715ee98d7c5c/node_modules/babel-loader/lib/index.js!./node_modules/.pnpm/vue-loader@16.8.3_webpack@5.65.0/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./examples/App.vue?vue&type=script&lang=js

/* harmony default export */ const Appvue_type_script_lang_js = ({
  name: 'app',

  data() {
    return {
      form: {
        message: 'This is a sample message',
        type: 'success',
        duration: 10000,
        dismissible: true,
        queue: false,
        position: 'bottom-right',
        onClick: this.onClick,
        onDismiss: this.onDismiss
      },
      types: ['success', 'error', 'warning', 'info', 'default'],
      positions: positions
    };
  },

  components: {},

  mounted() {
    // Lets show some toasts on page load
    this.showAll();
  },

  methods: {
    showAll() {
      this.types.forEach(type => {
        this.$toast.open(Object.assign(this.form, {
          type
        }));
      });
    },

    onClick() {
      console.log("User dismissed the notification.");
    },

    onDismiss() {
      console.log("Toast was dismissed.");
    },

    show() {
      this.$toast.open(this.form);
    },

    clearAll() {
      this.$toast.clear();
    }

  }
});
;// CONCATENATED MODULE: ./examples/App.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./examples/App.vue




;
const App_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(Appvue_type_script_lang_js, [['render',Appvue_type_template_id_710072ef_render]])

/* harmony default export */ const App = (App_exports_);
;// CONCATENATED MODULE: ./examples/index.js




 //import '../src/themes/default/index.scss'



const app = (0,runtime_dom_esm_bundler/* createApp */.ri)(App);
app.use(src);
app.mount('#app');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [736], () => (__webpack_exec__(923)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);