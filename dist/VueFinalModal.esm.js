import{ref as e,inject as t,reactive as n,computed as o,watch as a,onMounted as r,onBeforeUnmount as l,nextTick as i,withDirectives as u,openBlock as f,createBlock as d,createVNode as s,Transition as c,vShow as v,withModifiers as y,renderSlot as m,createCommentVNode as p,withScopeId as b}from"vue";function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){E(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function k(e){return function(e){if(Array.isArray(e))return C(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return C(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return C(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var w=function(e){return function(e,t){return k(e.querySelectorAll(t)||[])}(e,'button:not([disabled]), select:not([disabled]), a[href]:not([disabled]), area[href]:not([disabled]), [contentEditable=""]:not([disabled]), [contentEditable="true"]:not([disabled]), [contentEditable="TRUE"]:not([disabled]), textarea:not([disabled]), iframe:not([disabled]), input:not([disabled]), summary:not([disabled]), [tabindex]:not([tabindex="-1"])')},M=function(e){return e==document.activeElement},x=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.root=null,this.elements=[],this.onKeyDown=this.onKeyDown.bind(this),this.enable=this.enable.bind(this),this.disable=this.disable.bind(this),this.firstElement=this.firstElement.bind(this),this.lastElement=this.lastElement.bind(this)}var t,n,o;return t=e,(n=[{key:"lastElement",value:function(){return this.elements[this.elements.length-1]||null}},{key:"firstElement",value:function(){return this.elements[0]||null}},{key:"onKeyDown",value:function(e){if(function(e){return"Tab"===e.key||9===e.keyCode}(e)){if(!e.shiftKey)return!document.activeElement||M(this.lastElement())?(this.firstElement().focus(),void e.preventDefault()):void 0;M(this.firstElement())&&(this.lastElement().focus(),e.preventDefault())}}},{key:"enabled",value:function(){return!!this.root}},{key:"enable",value:function(e){e&&(this.root=e,this.elements=w(this.root),this.root.addEventListener("keydown",this.onKeyDown))}},{key:"disable",value:function(){this.root.removeEventListener("keydown",this.onKeyDown),this.root=null}}])&&g(t.prototype,n),o&&g(t,o),e}(),A=function(e){return!(!e||e.nodeType!==Node.ELEMENT_NODE)},T=function(e,t){t&&A(e)&&(e.style[t]="")};var j={name:"VueFinalModal",props:{name:{type:String,default:null},modelValue:{type:Boolean,default:!1},ssr:{type:Boolean,default:!0},classes:{type:[String,Object,Array],default:""},overlayClass:{type:[String,Object,Array],default:""},contentClass:{type:[String,Object,Array],default:""},styles:{type:[String,Object,Array],default:""},overlayStyle:{type:[String,Object,Array],default:""},contentStyle:{type:[String,Object,Array],default:""},lockScroll:{type:Boolean,default:!0},hideOverlay:{type:Boolean,default:!1},clickToClose:{type:Boolean,default:!0},escToClose:{type:Boolean,default:!1},preventClick:{type:Boolean,default:!1},attach:{type:null,default:!1,validator:function(e){var t=h(e);return"boolean"===t||"string"===t||e.nodeType===Node.ELEMENT_NODE}},transition:{type:String,default:"vfm"},overlayTransition:{type:String,default:"vfm"},zIndexBase:{type:[String,Number],default:1e3},zIndex:{type:[Boolean,String,Number],default:!1},focusRetain:{type:Boolean,default:!0},focusTrap:{type:Boolean,default:!1}},emits:["update:modelValue","click-outside","before-open","opened","before-close","closed"],setup:function(u,f){var d=f.emit,s="enter",c="entering",v="leave",y="leavng",m=Symbol("vfm"),p=e(null),b=e(null),h=e(null),g=t(u._key),E=e(null),O=new x,S=e(!1),k=n({modal:!1,overlay:!1}),C=e(null),w=e(null),M=o((function(){return(u.hideOverlay||C.value===v)&&w.value===v})),j=o((function(){return"boolean"==typeof u.zIndex?u.attach?"unset":u.zIndexBase+2*(E.value||0):u.zIndex}));function B(){return{uid:m,name:u.name,emit:d,vfmContainer:h,vfmContent:b,getAttachElement:N,modalStackIndex:E,visibility:k,handleLockScroll:D,hideOverlay:u.hideOverlay,focusRetain:u.focusRetain,focusTrap:u.focusTrap,$focusTrap:O}}function I(){if(u.modelValue){var e=N();if(e||!1===u.attach){!1!==u.attach&&e.appendChild(p.value);var t=g.openedModals.findIndex((function(e){return e.uid===m}));-1!==t&&g.openedModals.splice(t,1),g.openedModals.push(B()),E.value=g.openedModals.length-1,D(),g.openedModals.filter((function(e){return e.uid!==m})).forEach((function(t,n){t.getAttachElement()===e&&(t.modalStackIndex.value=n,t.visibility.overlay=!1)})),S.value=!0,i((function(){k.overlay=!0,k.modal=!0}))}else!1!==e&&console.warn("Unable to locate target ".concat(u.attach))}}function _(){var e=g.openedModals.findIndex((function(e){return e.uid===m}));if(-1!==e&&g.openedModals.splice(e,1),g.openedModals.length>0){var t=g.openedModals[g.openedModals.length-1];t.handleLockScroll(),t.focusTrap&&t.$focusTrap.firstElement().focus(),(t.focusRetain||t.focusTrap)&&t.vfmContainer.value.focus(),!t.hideOverlay&&(t.visibility.overlay=!0)}k.overlay=!1,k.modal=!1}function D(){var e,t,n;u.modelValue&&(u.lockScroll?(e=document.body,n="hidden",(t="overflow")&&A(e)&&(e.style[t]=n)):T(document.body,"overflow"))}function N(){return!1!==u.attach&&("string"==typeof u.attach?!!window&&window.document.querySelector(u.attach):u.attach)}return a((function(){return u.modelValue}),(function(e){I(),e||_()})),a((function(){return u.lockScroll}),D),a((function(){return u.hideOverlay}),(function(e){u.modelValue&&!e&&(k.overlay=!0)})),a((function(){return u.attach}),I),a(M,(function(e){e&&(S.value=!1)}),{flush:"post"}),g.modals.push(B()),r((function(){I()})),l((function(){_(),p.value.remove();var e=g.modals.findIndex((function(e){return e.uid===m}));g.modals.splice(e,1)})),{root:p,vfmContent:b,vfmContainer:h,visible:S,visibility:k,calculateZIndex:j,beforeOverlayEnter:function(){C.value=c},afterOverlayEnter:function(){C.value=s},beforeOverlayLeave:function(){C.value=y},afterOverlayLeave:function(){C.value=v},beforeModalEnter:function(){d("before-open"),w.value=c},afterModalEnter:function(){w.value=s,(u.focusRetain||u.focusTrap)&&h.value.focus(),u.focusTrap&&O.enable(h.value),d("opened")},beforeModalLeave:function(){d("before-close"),w.value=y,O.enabled()&&O.disable()},afterModalLeave:function(){w.value=v,E.value=null,0===g.openedModals.length&&u.lockScroll&&T(document.body,"overflow"),d("closed")},onClickContainer:function(){d("click-outside"),u.clickToClose&&d("update:modelValue",!1)},onEsc:function(e){27===e.keyCode&&S.value&&u.escToClose&&d("update:modelValue",!1)}}}};const B=b("data-v-2836fdb5"),I=B((function(e,t,n,o,a,r){return n.ssr||o.visible?u((f(),d("div",{key:0,ref:"root",style:{zIndex:o.calculateZIndex},class:["vfm vfm--inset",[!1===n.attach?"vfm--fixed":"vfm--absolute",{"vfm--prevent-none":n.preventClick}]],onKeydown:t[3]||(t[3]=(...e)=>o.onEsc(...e))},[s(c,{name:n.overlayTransition,"onBefore-enter":o.beforeOverlayEnter,"onAfter-enter":o.afterOverlayEnter,"onBefore-leave":o.beforeOverlayLeave,"onAfter-leave":o.afterOverlayLeave},{default:B((()=>[u(s("div",{class:["vfm__overlay vfm--overlay vfm--absolute vfm--inset",n.overlayClass],style:n.overlayStyle},null,6),[[v,!n.hideOverlay&&o.visibility.overlay]])])),_:1},8,["name","onBefore-enter","onAfter-enter","onBefore-leave","onAfter-leave"]),s(c,{name:n.transition,"onBefore-enter":o.beforeModalEnter,"onAfter-enter":o.afterModalEnter,"onBefore-leave":o.beforeModalLeave,"onAfter-leave":o.afterModalLeave},{default:B((()=>[u(s("div",{ref:"vfmContainer",class:["vfm__container vfm--absolute vfm--inset vfm--outline-none",n.classes],style:n.styles,"aria-expanded":o.visibility.modal.toString(),role:"dialog","aria-modal":"true",tabindex:"-1",onClick:t[2]||(t[2]=(...e)=>o.onClickContainer(...e))},[s("div",{ref:"vfmContent",class:["vfm__content",[n.contentClass,{"vfm--prevent-auto":n.preventClick}]],style:n.contentStyle,onClick:t[1]||(t[1]=y((()=>{}),["stop"]))},[m(e.$slots,"default")],6)],14,["aria-expanded"]),[[v,o.visibility.modal]])])),_:3},8,["name","onBefore-enter","onAfter-enter","onBefore-leave","onAfter-leave"])],38)),[[v,!n.ssr||o.visible]]):p("v-if",!0)}));!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===n&&o.firstChild?o.insertBefore(a,o.firstChild):o.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}("\n.vfm--fixed[data-v-2836fdb5] {\n  position: fixed;\n}\n.vfm--absolute[data-v-2836fdb5] {\n  position: absolute;\n}\n.vfm--inset[data-v-2836fdb5] {\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n.vfm--overlay[data-v-2836fdb5] {\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.vfm--prevent-none[data-v-2836fdb5] {\n  pointer-events: none;\n}\n.vfm--prevent-auto[data-v-2836fdb5] {\n  pointer-events: auto;\n}\n.vfm--outline-none[data-v-2836fdb5]:focus {\n  outline: none;\n}\n.vfm-enter-active[data-v-2836fdb5],\n.vfm-leave-active[data-v-2836fdb5] {\n  transition: opacity 0.2s;\n}\n.vfm-enter-from[data-v-2836fdb5],\n.vfm-leave-to[data-v-2836fdb5] {\n  opacity: 0;\n}\n"),j.render=I,j.__scopeId="data-v-2836fdb5",j.__file="lib/VueFinalModal.vue";var _={componentName:"VueFinalModal",key:"$vfm"};export default function(){return{install:function(e,t){var n=Object.assign({},_,t),o=e.config.globalProperties[n.key];e._context.components[n.componentName]?console.warn(o?"[vue-final-modal] Duplicate registration API key and componentName of VueFinalModal.":"[vue-final-modal] Duplicate registration componentName of VueFinalModal."):(o||function(e,t){var n=t.key,o={openedModals:[],modals:[],show:function(e){this.toggle(e,!0)},hide:function(e){this.toggle(e,!1)},hideAll:function(){this.openedModals.forEach((function(e){e.emit("update:modelValue",!1)}))},toggle:function(e,t){var n=this.modals.find((function(t){return t.name===e}));void 0!==n&&n.emit("update:modelValue",void 0===t?!n.value:t)}};Object.defineProperty(e.config.globalProperties,n,{get:function(){return o}}),e.provide(n,o)}(e,n),function(e,t){var n=t.componentName,o=t.key;e.component(n,S(S({},j),{},{props:S(S({},j.props),{},{_key:{type:String,default:o}})}))}(e,n))}}}
//# sourceMappingURL=VueFinalModal.esm.js.map
