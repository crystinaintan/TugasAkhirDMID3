!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("react"),require("classnames"),require("@material/react-ripple/dist/index.js"));else if("function"==typeof define&&define.amd)define(["react","classnames","@material/react-ripple/dist/index.js"],t);else{var n="object"==typeof exports?t(require("react"),require("classnames"),require("@material/react-ripple/dist/index.js")):t(e.react,e.classnames,e["@material/react-ripple/dist/index.js"]);for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}("undefined"!=typeof self?self:this,function(e,t,n){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=53)}({0:function(t,n){t.exports=e},1:function(e,n){e.exports=t},162:function(e,t,n){"use strict";n.r(t);"function"==typeof Symbol&&Symbol.iterator;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};var i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var a=function(){function e(e){void 0===e&&(e={}),this.adapter_=e}return Object.defineProperty(e,"cssClasses",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{}},enumerable:!0,configurable:!0}),e.prototype.init=function(){},e.prototype.destroy=function(){},e}(),o=n(6);n.d(t,"MDCCheckboxFoundation",function(){return c});
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var c=function(e){function t(n){var r=e.call(this,i({},t.defaultAdapter,n))||this;return r.currentCheckState_=o.strings.TRANSITION_STATE_INIT,r.currentAnimationClass_="",r.animEndLatchTimer_=0,r.enableAnimationEndHandler_=!1,r}return function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),Object.defineProperty(t,"cssClasses",{get:function(){return o.cssClasses},enumerable:!0,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return o.strings},enumerable:!0,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return o.numbers},enumerable:!0,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},forceLayout:function(){},hasNativeControl:function(){return!1},isAttachedToDOM:function(){return!1},isChecked:function(){return!1},isIndeterminate:function(){return!1},removeClass:function(){},removeNativeControlAttr:function(){},setNativeControlAttr:function(){},setNativeControlDisabled:function(){}}},enumerable:!0,configurable:!0}),t.prototype.init=function(){this.currentCheckState_=this.determineCheckState_(),this.updateAriaChecked_(),this.adapter_.addClass(o.cssClasses.UPGRADED)},t.prototype.destroy=function(){clearTimeout(this.animEndLatchTimer_)},t.prototype.setDisabled=function(e){this.adapter_.setNativeControlDisabled(e),e?this.adapter_.addClass(o.cssClasses.DISABLED):this.adapter_.removeClass(o.cssClasses.DISABLED)},t.prototype.handleAnimationEnd=function(){var e=this;this.enableAnimationEndHandler_&&(clearTimeout(this.animEndLatchTimer_),this.animEndLatchTimer_=setTimeout(function(){e.adapter_.removeClass(e.currentAnimationClass_),e.enableAnimationEndHandler_=!1},o.numbers.ANIM_END_LATCH_MS))},t.prototype.handleChange=function(){this.transitionCheckState_()},t.prototype.transitionCheckState_=function(){if(this.adapter_.hasNativeControl()){var e=this.currentCheckState_,t=this.determineCheckState_();if(e!==t){this.updateAriaChecked_();var n=o.strings.TRANSITION_STATE_UNCHECKED,r=o.cssClasses.SELECTED;t===n?this.adapter_.removeClass(r):this.adapter_.addClass(r),this.currentAnimationClass_.length>0&&(clearTimeout(this.animEndLatchTimer_),this.adapter_.forceLayout(),this.adapter_.removeClass(this.currentAnimationClass_)),this.currentAnimationClass_=this.getTransitionAnimationClass_(e,t),this.currentCheckState_=t,this.adapter_.isAttachedToDOM()&&this.currentAnimationClass_.length>0&&(this.adapter_.addClass(this.currentAnimationClass_),this.enableAnimationEndHandler_=!0)}}},t.prototype.determineCheckState_=function(){var e=o.strings.TRANSITION_STATE_INDETERMINATE,t=o.strings.TRANSITION_STATE_CHECKED,n=o.strings.TRANSITION_STATE_UNCHECKED;return this.adapter_.isIndeterminate()?e:this.adapter_.isChecked()?t:n},t.prototype.getTransitionAnimationClass_=function(e,n){var r=o.strings.TRANSITION_STATE_INIT,i=o.strings.TRANSITION_STATE_CHECKED,a=o.strings.TRANSITION_STATE_UNCHECKED,c=t.cssClasses,s=c.ANIM_UNCHECKED_CHECKED,u=c.ANIM_UNCHECKED_INDETERMINATE,d=c.ANIM_CHECKED_UNCHECKED,l=c.ANIM_CHECKED_INDETERMINATE,f=c.ANIM_INDETERMINATE_CHECKED,p=c.ANIM_INDETERMINATE_UNCHECKED;switch(e){case r:return n===a?"":n===i?f:p;case a:return n===i?s:u;case i:return n===a?d:l;default:return n===i?f:p}},t.prototype.updateAriaChecked_=function(){this.adapter_.isIndeterminate()?this.adapter_.setNativeControlAttr(o.strings.ARIA_CHECKED_ATTR,o.strings.ARIA_CHECKED_INDETERMINATE_VALUE):this.adapter_.removeNativeControlAttr(o.strings.ARIA_CHECKED_ATTR)},t}(a);t.default=c},5:function(e,t){e.exports=n},53:function(e,t,n){"use strict";var r,i=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),a=this&&this.__assign||function(){return(a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},o=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n},c=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var s=c(n(0)),u=c(n(1)),d=n(162),l=n(6),f=n(5),p=c(n(54)),h=function(e){function t(t){var n=e.call(this,t)||this;return n.inputElement=s.default.createRef(),n.init=function(e){n.inputElement.current&&n.props.initRipple(e,n.inputElement.current)},n.handleChange=function(e,t){n.setState({checked:e,indeterminate:t},function(){n.foundation.handleChange(),n.inputElement.current&&(n.inputElement.current.indeterminate=t)})},n.updateState=function(e,t){n.setState(function(n){var r;return a({},n,((r={})[e]=t,r))})},n.removeState=function(e){return n.updateState(e,!1)},n.onChange=function(e){var t=n.props.onChange,r=e.target,i=r.checked,a=r.indeterminate;n.handleChange(i,a),t(e)},n.state={checked:t.checked,indeterminate:t.indeterminate,classList:new Set,"aria-checked":"false",disabled:t.disabled},n}return i(t,e),t.prototype.componentDidMount=function(){this.foundation=new d.MDCCheckboxFoundation(this.adapter),this.foundation.init(),this.foundation.setDisabled(this.props.disabled),this.inputElement.current&&(this.inputElement.current.indeterminate=this.state.indeterminate)},t.prototype.componentDidUpdate=function(e){var t=this.props,n=t.checked,r=t.indeterminate,i=t.disabled;n===e.checked&&r===e.indeterminate||this.handleChange(n,r),i!==e.disabled&&this.foundation.setDisabled(i)},t.prototype.componentWillUnmount=function(){this.foundation&&this.foundation.destroy()},Object.defineProperty(t.prototype,"classes",{get:function(){var e=this.state.classList,t=this.props.className;return u.default("mdc-checkbox",Array.from(e),this.state.disabled?l.cssClasses.DISABLED:null,t)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"adapter",{get:function(){var e=this;return{addClass:function(t){var n=e.state.classList;n.add(t),e.setState({classList:n})},removeClass:function(t){var n=e.state.classList;n.delete(t),e.setState({classList:n})},hasNativeControl:function(){return!0},isAttachedToDOM:function(){return!0},isChecked:function(){return e.state.checked},isIndeterminate:function(){return e.state.indeterminate},setNativeControlAttr:this.updateState,setNativeControlDisabled:function(t){e.updateState("disabled",t)},removeNativeControlAttr:this.removeState,forceLayout:function(){return null}}},enumerable:!0,configurable:!0}),t.prototype.render=function(){var e=this,t=this.props,n=(t.className,t.checked,t.indeterminate,t.initRipple,t.onChange,t.unbounded,t.disabled,t.nativeControlId),r=t.name,i=o(t,["className","checked","indeterminate","initRipple","onChange","unbounded","disabled","nativeControlId","name"]);return s.default.createElement("div",a({className:this.classes,onAnimationEnd:function(){return e.foundation.handleAnimationEnd()},ref:this.init},i),s.default.createElement(p.default,{id:n,checked:this.state.checked,disabled:this.state.disabled,"aria-checked":this.state["aria-checked"]||this.state.checked.toString(),name:r,onChange:this.onChange,rippleActivatorRef:this.inputElement}),s.default.createElement("div",{className:"mdc-checkbox__background"},s.default.createElement("svg",{className:"mdc-checkbox__checkmark",viewBox:"0 0 24 24",focusable:"false"},s.default.createElement("path",{className:"mdc-checkbox__checkmark-path",fill:"none",d:"M1.73,12.91 8.1,19.28 22.79,4.59"})),s.default.createElement("div",{className:"mdc-checkbox__mixedmark"})))},t.defaultProps={checked:!1,className:"",disabled:!1,indeterminate:!1,onChange:function(){},unbounded:!0},t}(s.default.Component);t.Checkbox=h,t.default=f.withRipple(h)},54:function(e,t,n){"use strict";var r,i=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),a=this&&this.__assign||function(){return(a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},o=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n},c=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var s=c(n(0)),u=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),t.prototype.render=function(){var e=this.props,t=e.rippleActivatorRef,n=o(e,["rippleActivatorRef"]);return s.default.createElement("input",a({type:"checkbox",className:"mdc-checkbox__native-control",ref:t},n))},t.defaultProps={checked:!1,disabled:!1,onChange:function(){}},t}(s.default.Component);t.NativeControl=u,t.default=u},6:function(e,t,n){"use strict";n.r(t),n.d(t,"cssClasses",function(){return r}),n.d(t,"strings",function(){return i}),n.d(t,"numbers",function(){return a});
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var r={ANIM_CHECKED_INDETERMINATE:"mdc-checkbox--anim-checked-indeterminate",ANIM_CHECKED_UNCHECKED:"mdc-checkbox--anim-checked-unchecked",ANIM_INDETERMINATE_CHECKED:"mdc-checkbox--anim-indeterminate-checked",ANIM_INDETERMINATE_UNCHECKED:"mdc-checkbox--anim-indeterminate-unchecked",ANIM_UNCHECKED_CHECKED:"mdc-checkbox--anim-unchecked-checked",ANIM_UNCHECKED_INDETERMINATE:"mdc-checkbox--anim-unchecked-indeterminate",BACKGROUND:"mdc-checkbox__background",CHECKED:"mdc-checkbox--checked",CHECKMARK:"mdc-checkbox__checkmark",CHECKMARK_PATH:"mdc-checkbox__checkmark-path",DISABLED:"mdc-checkbox--disabled",INDETERMINATE:"mdc-checkbox--indeterminate",MIXEDMARK:"mdc-checkbox__mixedmark",NATIVE_CONTROL:"mdc-checkbox__native-control",ROOT:"mdc-checkbox",SELECTED:"mdc-checkbox--selected",UPGRADED:"mdc-checkbox--upgraded"},i={ARIA_CHECKED_ATTR:"aria-checked",ARIA_CHECKED_INDETERMINATE_VALUE:"mixed",NATIVE_CONTROL_SELECTOR:".mdc-checkbox__native-control",TRANSITION_STATE_CHECKED:"checked",TRANSITION_STATE_INDETERMINATE:"indeterminate",TRANSITION_STATE_INIT:"init",TRANSITION_STATE_UNCHECKED:"unchecked"},a={ANIM_END_LATCH_MS:250}}})});
//# sourceMappingURL=checkbox.js.map