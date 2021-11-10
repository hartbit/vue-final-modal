!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("vue"),require("@vueuse/core")):"function"==typeof define&&define.amd?define(["exports","vue","@vueuse/core"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).VueFinalModal={},e.Vue,e.VueUse)}(this,(function(e,t,n){"use strict";const o="enter",a="entering",i="leave",l="leavng",r=()=>{const e=t.ref(null),n={beforeEnter(){e.value=a},afterEnter(){e.value=o},beforeLeave(){e.value=l},afterLeave(){e.value=i}};return{state:e,listeners:n}},s=e=>e==document.activeElement;class d{constructor(){this.root=null,this.elements=[],this.onKeyDown=this.onKeyDown.bind(this)}get lastElement(){return this.elements[this.elements.length-1]||null}get firstElement(){return this.elements[0]||null}get isEnabled(){return!!this.root}onKeyDown(e){if((e=>"Tab"===e.key||9===e.keyCode)(e)){if(!e.shiftKey)return!document.activeElement||s(this.lastElement)?(this.firstElement.focus(),void e.preventDefault()):void 0;s(this.firstElement)&&(this.lastElement.focus(),e.preventDefault())}}enable(e){e&&(this.root=e,this.elements=((e,t)=>[...e.querySelectorAll(t)||[]])(this.root,'button:not([disabled]), select:not([disabled]), a[href]:not([disabled]), area[href]:not([disabled]), [contentEditable=""]:not([disabled]), [contentEditable="true"]:not([disabled]), [contentEditable="TRUE"]:not([disabled]), textarea:not([disabled]), iframe:not([disabled]), input:not([disabled]), summary:not([disabled]), [tabindex]:not([tabindex="-1"])'),this.root.addEventListener("keydown",this.onKeyDown))}disable(){this.root.removeEventListener("keydown",this.onKeyDown),this.root=null}}let u=null;function c({props:e,vfmContainer:n,modalTransitionState:a}){return null==u&&(u=new d),t.watch(a,(t=>{switch(t){case o:(e.focusRetain||e.focusTrap)&&n.value.focus(),e.focusTrap&&u.enable(n.value);break;case l:u.enabled&&u.disable()}})),{focusTrap:u}}const f=e=>{const{clientX:t,clientY:n}=e.targetTouches?e.targetTouches[0]:e;return{x:t,y:n}},m={down:{pc:"mousedown",m:"touchstart"},move:{pc:"mousemove",m:"touchmove"},up:{pc:"mouseup",m:"touchend"}},v=(e,t,n)=>{t&&t.addEventListener(m[e].pc,n),t&&t.addEventListener(m[e].m,n,{passive:!1})},p=(e,t,n)=>{t&&t.removeEventListener(m[e].pc,n),t&&t.removeEventListener(m[e].m,n)};const h={t:"ns-resize",tr:"nesw-resize",r:"ew-resize",br:"nwse-resize",b:"ns-resize",bl:"nesw-resize",l:"ew-resize",tl:"nwse-resize"},y=(e,t,n)=>("number"!=typeof e&&(e=Math.min(t,n)||t),"number"!=typeof n&&(n=Math.max(t,e)),Math.min(Math.max(t,e),n)),b=e=>e&&Number(e.replace(/px$/,""))||0;function g({props:e,visible:n,vfmContainer:a,vfmContent:l,vfmResize:r,modalTransitionState:s,onEvent:d=(()=>{})}){const u=t.ref(!1),c=t.ref(null),m=t.ref({});function g(t){t.stopPropagation();const n="resize",o="drag",i=t.target.getAttribute("direction");let r;if(i)r=n;else{if(!((e,t,n)=>""===n||[...t.querySelectorAll(n)].includes(e.target))(t,l.value,e.dragSelector))return;r=o}c.value=`${r}:start`,d?.(t);const s=f(t),u=a.value.getBoundingClientRect(),g=l.value.getBoundingClientRect(),w="absolute"===window.getComputedStyle(l.value).position,x=b(m.value.top),S=b(m.value.left),k=(()=>{if(e.fitParent){const e={absolute:()=>({minTop:0,minLeft:0,maxTop:u.height-g.height,maxLeft:u.width-g.width}),relative:()=>({minTop:x+u.top-g.top,minLeft:S+u.left-g.left,maxTop:x+u.bottom-g.bottom,maxLeft:S+u.right-g.right})};return w?e.absolute():e.relative()}return{}})(),E=r===n&&((e,t,n)=>{const o=e.style[t];return e.style[t]=n,()=>{e.style[t]=o}})(document.body,"cursor",h[i]),T=t=>{t.stopPropagation(),c.value=`${r}:move`,d?.(t);const a=f(t);let l,v,p={x:a.x-s.x,y:a.y-s.y};r===n&&(p=function(t,n,o,a,i){const l=t=>{let o=n[t.axis];o=e.fitParent?y(t.min,o,t.max):o;let a=y(t.minEdge,t.getEdge(o),t.maxEdge);return o=t.getOffsetAxis(a,i),{[t.edgeName]:a,[t.axis]:o}},r=(t,n,i,l)=>{const r=a[n],s=o[t]-a[t],d=(u=n).charAt(0).toUpperCase()+u.slice(1);var u;return{axis:i,edgeName:n,min:l?s:-r,max:l?r:s,minEdge:e[`min${d}`],maxEdge:e[`max${d}`],getEdge:e=>a[n]-e*(l?1:-1),getOffsetAxis:(e,t)=>{const o=a[n]-e;return t?l?o:0:(l?1:-1)*o/2}}},s={t:["top","height","y",!0],b:["bottom","height","y",!1],l:["left","width","x",!0],r:["right","width","x",!1]};let d={x:0,y:0};return t.split("").forEach((e=>{const t=r(...s[e]);d={...d,...l(t)}})),d}(i,p,u,g,w)),w?(l=g.top-u.top+p.y,v=g.left-u.left+p.x):(l=x+p.y,v=S+p.x),r===o&&e.fitParent&&(l=y(k.minTop,l,k.maxTop),v=y(k.minLeft,v,k.maxLeft));const h={position:"relative",top:l+"px",left:v+"px",margin:"unset",touchAction:"none",...w&&{position:"absolute",transform:"unset",width:g.width+"px",height:g.height+"px"},...p.width&&{width:p.width+"px"},...p.height&&{height:p.height+"px"}};m.value={...m.value,...h}},C=e=>{e.stopPropagation(),r===n&&E&&E(),setTimeout((()=>{c.value=`${r}:end`,d?.(e)})),p("move",document,T),p("up",document,C)};v("move",document,T),v("up",document,C)}function w(){v("down",l.value,g),m.value.touchAction="none"}function x(){p("down",l.value,g)}function S(){u.value=!0,t.nextTick((()=>{v("down",r.value,g)}))}function k(){p("down",r.value,g),u.value=!1}return t.watch(s,(t=>{switch(t){case o:e.drag&&w(),e.resize&&S();break;case i:e.keepChangedStyle||(m.value={})}})),t.watch((()=>e.drag),(e=>{n.value&&(e?w():x())})),t.watch((()=>e.resize),(e=>{n.value&&(e?S():k())})),t.watch((()=>e.keepChangedStyle),(e=>{e||(m.value={})})),{resizeVisible:u,state:c,dragResizeStyle:m,removeDragDown:x,removeResizeDown:k}}let w=!1;if("undefined"!=typeof window){const e={get passive(){w=!0}};window.addEventListener("testPassive",null,e),window.removeEventListener("testPassive",null,e)}const x="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1);let S,k,E=[],T=!1,C=0,M=-1;const z=(e,t)=>{let n=!1;return(e=>{const t=[];for(;e;){if(t.push(e),e.classList.contains("vfm"))return t;e=e.parentElement}return t})(e).forEach((e=>{(e=>{if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const t=window.getComputedStyle(e);return["auto","scroll"].includes(t.overflowY)&&e.scrollHeight>e.clientHeight})(e)&&((e,t)=>!(0===e.scrollTop&&t<0||e.scrollTop+e.clientHeight+t>=e.scrollHeight&&t>0))(e,t)&&(n=!0)})),n},L=e=>E.some((()=>z(e,-C))),O=e=>{const t=e||window.event;return!!L(t.target)||(t.touches.length>1||(t.preventDefault&&t.preventDefault(),!1))},B=(e,t)=>{if(!e)return void console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");if(E.some((t=>t.targetElement===e)))return;const n={targetElement:e,options:t||{}};E=[...E,n],x?(e.ontouchstart=e=>{1===e.targetTouches.length&&(M=e.targetTouches[0].clientY)},e.ontouchmove=t=>{1===t.targetTouches.length&&((e,t)=>{C=e.targetTouches[0].clientY-M,!L(e.target)&&(t&&0===t.scrollTop&&C>0||(e=>!!e&&e.scrollHeight-e.scrollTop<=e.clientHeight)(t)&&C<0?O(e):e.stopPropagation())})(t,e)},T||(document.addEventListener("touchmove",O,w?{passive:!1}:void 0),T=!0)):(e=>{if(void 0===k){const t=!!e&&!0===e.reserveScrollBarGap,n=window.innerWidth-document.documentElement.clientWidth;if(t&&n>0){const e=parseInt(getComputedStyle(document.body).getPropertyValue("padding-right"),10);k=document.body.style.paddingRight,document.body.style.paddingRight=`${e+n}px`}}void 0===S&&(S=document.body.style.overflow,document.body.style.overflow="hidden")})(t)},D=e=>{e?(E=E.filter((t=>t.targetElement!==e)),x?(e.ontouchstart=null,e.ontouchmove=null,T&&0===E.length&&(document.removeEventListener("touchmove",O,w?{passive:!1}:void 0),T=!1)):E.length||(void 0!==k&&(document.body.style.paddingRight=k,k=void 0),void 0!==S&&(document.body.style.overflow=S,S=void 0))):console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.")};function V({props:e,vfmContainer:n,modalTransitionState:o}){function a(){e.modelValue&&t.nextTick((()=>{e.lockScroll?n.value&&B(n.value,{reserveScrollBarGap:!0}):l()}))}function l(){e.lockScroll&&n.value&&D(n.value)}return t.watch((()=>e.lockScroll),a),t.watch(o,(e=>{e===i&&l()})),t.onBeforeUnmount((()=>{l()})),{handleLockScroll:a}}const _=()=>{};var I={props:{name:{type:String,default:null},modelValue:{type:Boolean,default:!1},displayDirective:{type:String,default:"show",validator:e=>-1!==["if","show"].indexOf(e)},classes:{type:[String,Object,Array],default:""},overlayClass:{type:[String,Object,Array],default:""},contentClass:{type:[String,Object,Array],default:""},styles:{type:[Object,Array],default:()=>({})},overlayStyle:{type:[Object,Array],default:()=>({})},contentStyle:{type:[Object,Array],default:()=>({})},lockScroll:{type:Boolean,default:!0},hideOverlay:{type:Boolean,default:!1},clickToClose:{type:Boolean,default:!0},escToClose:{type:Boolean,default:!1},nonModal:{type:Boolean,default:!1},attach:{type:null,default:!1,validator(e){const t=typeof e;return"boolean"===t||"string"===t||e.nodeType===Node.ELEMENT_NODE}},transition:{type:[String,Object],default:"vfm"},overlayTransition:{type:[String,Object],default:"vfm"},zIndexAuto:{type:Boolean,default:!0},zIndexBase:{type:[String,Number],default:1e3},zIndex:{type:[Boolean,String,Number],default:!1},focusRetain:{type:Boolean,default:!0},focusTrap:{type:Boolean,default:!1},fitParent:{type:Boolean,default:!0},drag:{type:Boolean,default:!1},dragSelector:{type:String,default:""},keepChangedStyle:{type:Boolean,default:!1},resize:{type:Boolean,default:!1},resizeDirections:{type:Array,default:()=>["t","tr","r","br","b","bl","l","tl"],validator:e=>["t","tr","r","br","b","bl","l","tl"].filter((t=>-1!==e.indexOf(t))).length===e.length},minWidth:{type:[Number,String],default:0},minHeight:{type:[Number,String],default:0},maxWidth:{type:[Number,String],default:1/0},maxHeight:{type:[Number,String],default:1/0}},emits:["update:modelValue","click-outside","before-open","opened","_before-close","before-close","closed","_before-open","_opened","_closed","drag:start","drag:move","drag:end","resize:start","resize:move","resize:end"],setup(e,{emit:n}){const a=Symbol("vfm"),l=t.ref(null),s=t.ref(null),d=t.ref(null),u=t.ref(null),f=t.ref(null),m=t.ref(null),v=t.ref(null),p=t.ref(!1),h=t.reactive({modal:!1,overlay:!1}),{state:y,listeners:b}=r(),{state:w,listeners:x}=r(),S=t.ref(!1),{focusTrap:k}=c({props:e,vfmContainer:s,modalTransitionState:w}),{resizeVisible:E,state:T,dragResizeStyle:C,removeDragDown:M,removeResizeDown:z}=g({props:e,visible:p,vfmContainer:s,vfmContent:d,vfmResize:u,modalTransitionState:w,onEvent(e){n(T.value,e)}}),{handleLockScroll:L}=V({props:e,vfmContainer:s,modalTransitionState:w}),O=t.ref(null);let B=_,D=_;const I=t.computed((()=>"string"==typeof e.overlayTransition?{name:e.overlayTransition}:{...e.overlayTransition})),R=t.computed((()=>"string"==typeof e.transition?{name:e.transition}:{...e.transition})),N=t.computed((()=>(e.hideOverlay||y.value===i)&&w.value===i)),A=t.computed((()=>!1===e.zIndex?!!e.zIndexAuto&&+e.zIndexBase+2*(v.value||0):e.zIndex)),P=t.computed((()=>({...!1!==A.value&&{zIndex:A.value}}))),H=t.computed((()=>{let t=[C.value];return Array.isArray(e.contentStyle)?t.push(...e.contentStyle):t.push(e.contentStyle),t}));function $(){return{uid:a,props:e,emit:n,vfmContainer:s,vfmContent:d,vfmResize:u,vfmOverlayTransition:f,vfmTransition:m,getAttachElement:U,modalStackIndex:v,visibility:h,handleLockScroll:L,toggle:G}}function j(){if(e.modelValue){if(n("_before-open",K({type:"_before-open"})),W("before-open",!1))return void D("show");let t=U();if(t||!1===e.attach){!1!==e.attach&&t.appendChild(l.value);let n=e.api.openedModals.findIndex((e=>e.uid===a));-1!==n&&e.api.openedModals.splice(n,1),e.api.openedModals.push($()),v.value=e.api.openedModals.length-1,L(),e.api.openedModals.filter((e=>e.uid!==a)).forEach(((e,n)=>{e.getAttachElement()===t&&(e.modalStackIndex.value=n,e.visibility.overlay=!1)})),p.value=!0,h.overlay=!0,h.modal=!0}else!1!==t&&console.warn("Unable to locate target ".concat(e.attach))}}function F(){let n=e.api.openedModals.findIndex((e=>e.uid===a));if(-1!==n&&e.api.openedModals.splice(n,1),e.api.openedModals.length>0){const n=e.api.openedModals[e.api.openedModals.length-1];n.props.focusTrap&&t.nextTick((()=>{k.enable(n.vfmContainer.value),k.firstElement.focus()})),(n.props.focusRetain||n.props.focusTrap)&&n.vfmContainer.value.focus(),!n.props.hideOverlay&&(n.visibility.overlay=!0)}e.drag&&M(),e.resize&&z(),T.value=null,h.overlay=!1,h.modal=!1}function U(){let t;return t=!1!==e.attach&&("string"==typeof e.attach?!!window&&window.document.querySelector(e.attach):e.attach),t}function K(e={}){return{ref:$(),...e}}function W(e,o){let a=!1;const i=K({type:e,stop(){a=!0}});return n(e,i),!!a&&(S.value=!0,t.nextTick((()=>{n("update:modelValue",o)})),!0)}function G(t){return new Promise(((o,a)=>{B=e=>{o(e),B=_},D=e=>{a(e),D=_};const i="boolean"==typeof t?t:!e.modelValue;n("update:modelValue",i)}))}return t.watch((()=>e.modelValue),(e=>{if(S.value)S.value=!1;else if(j(),!e){if(n("_before-close",K({type:"_before-close"})),W("before-close",!0))return void D("hide");F()}})),t.watch((()=>e.hideOverlay),(t=>{e.modelValue&&!t&&(h.overlay=!0)})),t.watch((()=>e.attach),j),t.watch(N,(e=>{e&&(p.value=!1,s.value.style.display="none")}),{flush:"post"}),t.watch(w,(e=>{switch(e){case o:n("_opened"),n("opened",K({type:"opened"})),B("show");break;case i:v.value=null,n("_closed"),n("closed",K({type:"closed"})),B("hide")}})),e.api.modals.push($()),t.onMounted((()=>{j()})),t.onBeforeUnmount((()=>{F(),l?.value?.remove();let t=e.api.modals.findIndex((e=>e.uid===a));e.api.modals.splice(t,1)})),{root:l,vfmContainer:s,vfmContent:d,vfmResize:u,vfmOverlayTransition:f,vfmTransition:m,computedOverlayTransition:I,computedTransition:R,overlayListeners:b,modalListeners:x,visible:p,visibility:h,resizeVisible:E,calculateZIndex:A,bindStyle:P,bindContentStyle:H,onMousedown:function(e){O.value=e?.target},onMouseupContainer:function(){O.value===s.value&&"resize:move"!==T.value&&(n("click-outside",K({type:"click-outside"})),e.clickToClose&&n("update:modelValue",!1))},onEsc:function(){p.value&&e.escToClose&&n("update:modelValue",!1)}}}};const R=["aria-expanded"],N={key:0,ref:"vfmResize",class:"vfm__resize vfm--absolute vfm--inset vfm--prevent-none vfm--select-none vfm--touch-none"},A=["direction"];function P(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===n&&o.firstChild?o.insertBefore(a,o.firstChild):o.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}P("\n.vfm--fixed[data-v-72c09f54] {\n  position: fixed;\n}\n.vfm--absolute[data-v-72c09f54] {\n  position: absolute;\n}\n.vfm--inset[data-v-72c09f54] {\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n.vfm--overlay[data-v-72c09f54] {\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.vfm--prevent-none[data-v-72c09f54] {\n  pointer-events: none;\n}\n.vfm--prevent-auto[data-v-72c09f54] {\n  pointer-events: auto;\n}\n.vfm--outline-none[data-v-72c09f54]:focus {\n  outline: none;\n}\n.vfm-enter-active[data-v-72c09f54],\n.vfm-leave-active[data-v-72c09f54] {\n  transition: opacity 0.2s;\n}\n.vfm-enter-from[data-v-72c09f54],\n.vfm-leave-to[data-v-72c09f54] {\n  opacity: 0;\n}\n.vfm--touch-none[data-v-72c09f54] {\n  touch-action: none;\n}\n.vfm--select-none[data-v-72c09f54] {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.vfm--resize-tr[data-v-72c09f54],\n.vfm--resize-br[data-v-72c09f54],\n.vfm--resize-bl[data-v-72c09f54],\n.vfm--resize-tl[data-v-72c09f54] {\n  width: 12px;\n  height: 12px;\n  z-index: 10;\n}\n.vfm--resize-t[data-v-72c09f54] {\n  top: -6px;\n  left: 0;\n  width: 100%;\n  height: 12px;\n  cursor: ns-resize;\n}\n.vfm--resize-tr[data-v-72c09f54] {\n  top: -6px;\n  right: -6px;\n  cursor: nesw-resize;\n}\n.vfm--resize-r[data-v-72c09f54] {\n  top: 0;\n  right: -6px;\n  width: 12px;\n  height: 100%;\n  cursor: ew-resize;\n}\n.vfm--resize-br[data-v-72c09f54] {\n  bottom: -6px;\n  right: -6px;\n  cursor: nwse-resize;\n}\n.vfm--resize-b[data-v-72c09f54] {\n  bottom: -6px;\n  left: 0;\n  width: 100%;\n  height: 12px;\n  cursor: ns-resize;\n}\n.vfm--resize-bl[data-v-72c09f54] {\n  bottom: -6px;\n  left: -6px;\n  cursor: nesw-resize;\n}\n.vfm--resize-l[data-v-72c09f54] {\n  top: 0;\n  left: -6px;\n  width: 12px;\n  height: 100%;\n  cursor: ew-resize;\n}\n.vfm--resize-tl[data-v-72c09f54] {\n  top: -6px;\n  left: -6px;\n  cursor: nwse-resize;\n}\n"),I.render=function(e,n,o,a,i,l){return"if"!==o.displayDirective||a.visible?t.withDirectives((t.openBlock(),t.createElementBlock("div",{key:0,ref:"root",style:t.normalizeStyle(a.bindStyle),class:t.normalizeClass(["vfm vfm--inset",[!1===o.attach?"vfm--fixed":"vfm--absolute",{"vfm--prevent-none":o.nonModal}]]),onKeydown:n[3]||(n[3]=t.withKeys(((...e)=>a.onEsc&&a.onEsc(...e)),["esc"]))},[t.createVNode(t.Transition,t.mergeProps(a.computedOverlayTransition,t.toHandlers(a.overlayListeners)),{default:t.withCtx((()=>[!o.hideOverlay&&a.visibility.overlay?(t.openBlock(),t.createElementBlock("div",{key:0,class:t.normalizeClass(["vfm__overlay vfm--overlay vfm--absolute vfm--inset",o.overlayClass]),style:t.normalizeStyle(o.overlayStyle)},null,6)):t.createCommentVNode("v-if",!0)])),_:1},16),t.createVNode(t.Transition,t.mergeProps(a.computedTransition,t.toHandlers(a.modalListeners)),{default:t.withCtx((()=>[t.withDirectives(t.createElementVNode("div",{ref:"vfmContainer",class:t.normalizeClass(["vfm__container vfm--absolute vfm--inset vfm--outline-none",o.classes]),style:t.normalizeStyle(o.styles),"aria-expanded":a.visibility.modal.toString(),role:"dialog","aria-modal":"true",tabindex:"-1",onMouseup:n[1]||(n[1]=t.withModifiers(((...e)=>a.onMouseupContainer&&a.onMouseupContainer(...e)),["self"])),onMousedown:n[2]||(n[2]=t.withModifiers(((...e)=>a.onMousedown&&a.onMousedown(...e)),["self"]))},[t.createElementVNode("div",{ref:"vfmContent",class:t.normalizeClass(["vfm__content",[o.contentClass,{"vfm--prevent-auto":o.nonModal}]]),style:t.normalizeStyle(a.bindContentStyle),onMousedown:n[0]||(n[0]=e=>a.onMousedown(null))},[t.renderSlot(e.$slots,"default",{close:()=>e.$emit("update:modelValue",!1)}),a.resizeVisible&&a.visibility.modal?(t.openBlock(),t.createElementBlock("div",N,[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(o.resizeDirections,(e=>(t.openBlock(),t.createElementBlock("div",{key:e,direction:e,class:t.normalizeClass([`vfm--resize-${e}`,"vfm--absolute vfm--prevent-auto"])},null,10,A)))),128))],512)):t.createCommentVNode("v-if",!0)],38)],46,R),[[t.vShow,a.visibility.modal]])])),_:3},16)],38)),[[t.vShow,"show"!==o.displayDirective||a.visible]]):t.createCommentVNode("v-if",!0)},I.__scopeId="data-v-72c09f54",I.__file="src/VueFinalModal.vue";var H={methods:{slice(e){this.api.dynamicModals.splice(e,1)},closed(e,t){this.slice(e),t.closed&&t.closed()},beforeClose(e){e.value&&e?.rejectClose("hide")},async beforeOpen(e,t,n){await this.$nextTick(),await this.$nextTick(),t.value||(this.slice(n),t?.reject("show"))},isString:e=>"string"==typeof e}};const $={class:"modals-container"},j=["innerHTML"];H.render=function(e,n,o,a,i,l){return t.openBlock(),t.createElementBlock("div",$,[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(e.api.dynamicModals,((e,n)=>(t.openBlock(),t.createBlock(t.resolveDynamicComponent(e.component),t.mergeProps({key:e.id},e.bind,{modelValue:e.value,"onUpdate:modelValue":t=>e.value=t},t.toHandlers(e.on),{on_beforeClose:t=>l.beforeClose(e),on_closed:t=>l.closed(n,e),on_beforeOpen:t=>l.beforeOpen(t,e,n),on_opened:e.opened}),t.createSlots({_:2},[t.renderList(e.slots,((e,n)=>({name:n,fn:t.withCtx((()=>[t.createCommentVNode(" eslint-disable vue/no-v-html "),l.isString(e)?(t.openBlock(),t.createElementBlock("div",{key:0,innerHTML:e},null,8,j)):(t.openBlock(),t.createBlock(t.resolveDynamicComponent(e.component),t.mergeProps({key:1},e.bind,t.toHandlers(e.on||{})),null,16))]))})))]),1040,["modelValue","onUpdate:modelValue","on_beforeClose","on_closed","on_beforeOpen","on_opened"])))),128))])},H.__file="src/ModalsContainer.vue";class F{constructor(){const e=e=>{const n={...e,props:{...e.props}};return Object.assign(n.props,{api:{type:Object,default:()=>this}}),t.markRaw(n)};this.modals=[],this.openedModals=[],this.VueFinalModal=e(I),this.dynamicModals=t.shallowReactive([]),this.ModalsContainer=e(H)}show(e,...t){switch(typeof e){case"string":return this.toggle(e,!0,...t);case"object":{const{show:n}=this.useModal(e,t[0]);return n()}}}hide(...e){return this.toggle(e,!1)}hideAll(){return this.hide(...this.openedModals.map((e=>e.props.name)))}toggle(e,...t){const n=Array.isArray(e)?this.get(...e):this.get(e);return Promise.allSettled(n.map((e=>e.toggle(...t))))}get(...e){return this.modals.filter((t=>e.includes(t.props.name)))}existModal(e){return-1!==this.dynamicModals.indexOf(e)}useModal(e){let n=t.reactive({value:!1,component:this.VueFinalModal,id:Symbol("useModal"),bind:{},slots:{},on:{},...e});return{show:()=>this.existModal(n)?Promise.resolve("[Vue Final Modal] modal is already opened"):new Promise(((e,t)=>{n.value=!0,n.reject=t,n.opened=()=>{e("show")},this.dynamicModals.push(n)})),hide:()=>this.existModal(n)?new Promise(((e,t)=>{n.value=!1,n.rejectClose=t,n.closed=()=>{e("hide")}})):Promise.resolve("[Vue Final Modal] modal is already closed"),options:n}}}const U=()=>{let e=new F;return{$vfm:e,VueFinalModal:e.VueFinalModal,ModalsContainer:e.ModalsContainer,useModal:e.useModal.bind(e)}},K=U(),{$vfm:W,VueFinalModal:G,ModalsContainer:Y,useModal:q}=K;var X={setup(e,{emit:o}){const a="DOWN",i=t.useAttrs(),l=t.ref(null),r=t.ref(0);let s=null,d=!1;const{lengthY:u,direction:c,isSwiping:f}=n.useSwipe(l,{threshold:0,onSwipeStart(e){s=(new Date).getTime(),d=m(e.target)},onSwipe(){var e,t,n;d&&(c.value===a&&(r.value=(e=Math.abs(u.value),t=0,n=l.value.offsetHeight,-(e>n?n:e<t?t:e))))},onSwipeEnd(e,t){const n=(new Date).getTime(),i=t===a,c=Math.abs(u.value)>.1*l.value.offsetHeight;d&&i&&(c||n-s<=300)?o("update:modelValue",!1):r.value=0}});function m(e){const t=0===e.scrollTop;return e===l.value?t:t&&m(e.parentElement)}return t.watch((()=>i.modelValue),(e=>{e&&(r.value=0)})),(e,n)=>(t.openBlock(),t.createBlock(t.unref(G),{transition:{"enter-active-class":"slideInDown","leave-active-class":"slideOutDown"}},{default:t.withCtx((()=>[t.createElementVNode("div",{ref:(e,t)=>{t.bottomSheetEl=e,l.value=e},class:t.normalizeClass(["vfm-bottom-sheet",{"vfm-transition":!t.unref(f)}]),style:t.normalizeStyle({transform:`translateY(${-r.value}px)`})},[t.renderSlot(e.$slots,"default")],6)])),_:3}))}};P("\n.vfm-bottom-sheet[data-v-730a320a] {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  max-height: 90%;\n  overflow-y: auto;\n  background-color: #fff;\n  border-top-left-radius: 12px;\n  border-top-right-radius: 12px;\n}\n.vfm-transition[data-v-730a320a] {\n  transition-property: transform;\n  transition-duration: 150ms;\n}\n@-webkit-keyframes slideInDown-730a320a {\nfrom {\n    transform: translate3d(0, 100%, 0);\n}\nto {\n    transform: translate3d(0, 0, 0);\n}\n}\n@keyframes slideInDown-730a320a {\nfrom {\n    transform: translate3d(0, 100%, 0);\n}\nto {\n    transform: translate3d(0, 0, 0);\n}\n}\n[data-v-730a320a] .slideInDown {\n  -webkit-animation-name: slideInDown-730a320a;\n          animation-name: slideInDown-730a320a;\n  -webkit-animation-duration: 0.3s;\n          animation-duration: 0.3s;\n}\n@-webkit-keyframes slideOutDown-730a320a {\nfrom {\n    transform: translate3d(0, 0, 0);\n}\nto {\n    transform: translate3d(0, 100%, 0);\n}\n}\n@keyframes slideOutDown-730a320a {\nfrom {\n    transform: translate3d(0, 0, 0);\n}\nto {\n    transform: translate3d(0, 100%, 0);\n}\n}\n[data-v-730a320a] .slideOutDown {\n  -webkit-animation-name: slideOutDown-730a320a;\n          animation-name: slideOutDown-730a320a;\n  -webkit-animation-duration: 0.3s;\n          animation-duration: 0.3s;\n}\n"),X.__scopeId="data-v-730a320a",X.__file="src/hoc/VBottomSheet.vue";const Z="UP",J="RIGHT",Q="DOWN",ee="LEFT",te="NONE";function ne(e,{threshold:o=50,onSwipeStart:a,onSwipe:i,onSwipeEnd:l,passive:r=!0}){const s=t.reactive({x:0,y:0}),d=t.reactive({x:0,y:0}),u=t.computed((()=>s.x-d.x)),c=t.computed((()=>s.y-d.y)),{max:m,abs:v}=Math,p=t.computed((()=>m(v(u.value),v(c.value))>=o)),h=t.ref(!1),y=t.computed((()=>p.value?v(u.value)>v(c.value)?u.value>0?ee:J:c.value>0?Z:Q:te)),b=(e,t)=>{d.x=e,d.y=t};let g;const w=function(e){const t=()=>{};if(!e)return!1;let n=!1;const o={get passive(){return n=!0,!1}};return e.addEventListener("x",t,o),e.removeEventListener("x",t),n}(window?.document);let x;function S(t){g.capture&&!g.passive&&t.preventDefault();const{x:o,y:i}=f(t);((e,t)=>{s.x=e,s.y=t})(o,i),b(o,i),a?.(t),x=[n.useEventListener(e,"mousemove",k,g),n.useEventListener(e,"touchmove",k,g),n.useEventListener(e,"mouseup",E,g),n.useEventListener(e,"touchend",E,g),n.useEventListener(e,"touchcancel",E,g)]}function k(e){const{x:t,y:n}=f(e);b(t,n),!h.value&&p.value&&(h.value=!0),h.value&&i?.(e)}function E(e){h.value&&l?.(e,y.value),h.value=!1,x.forEach((e=>e()))}g=r?w?{passive:!0}:{capture:!1}:w?{passive:!1,capture:!0}:{capture:!0};const T=[n.useEventListener(e,"mousedown",S,g),n.useEventListener(e,"touchstart",S,g)];return{isPassiveEventSupported:w,isSwiping:h,direction:y,coordsStart:s,coordsEnd:d,lengthX:u,lengthY:c,stop:()=>{T.forEach((e=>e())),x.forEach((e=>e()))}}}var oe=Object.assign({inheritAttrs:!1},{props:{fullScreenClass:{type:[String,Object,Array],default:""},fullScreenStyle:{type:[Object,Array],default:()=>({})},swipeToCloseDirection:{type:String,default:"",validator:e=>-1!==["","RIGHT","LEFT"].includes(e)}},setup:function(e,{emit:n}){const o=e,a=t.useAttrs(),i=t.ref(null),l=t.ref(0);let r=null,s=!1;const d=t.computed((()=>o.swipeToCloseDirection?{"enter-active-class":"RIGHT"===o.swipeToCloseDirection?"slideInRight":"slideInLeft","leave-active-class":"RIGHT"===o.swipeToCloseDirection?"slideOutRight":"slideOutLeft"}:{})),{lengthX:u,direction:c,isSwiping:f}=o.swipeToCloseDirection?ne(i,{threshold:0,onSwipeStart(e){r=(new Date).getTime(),s=m(e.target)},onSwipe(){var e,t,n;if(s&&c.value===o.swipeToCloseDirection){const a=(e=Math.abs(u.value),t=0,n=i.value.offsetWidth,e>n?n:e<t?t:e);l.value="RIGHT"===o.swipeToCloseDirection?-a:a}},onSwipeEnd(e,t){const a=(new Date).getTime(),d=t===o.swipeToCloseDirection,c=Math.abs(u.value)>.1*i.value.offsetWidth;s&&d&&(c||a-r<=300)?n("update:modelValue",!1):l.value=0}}):{};function m(e){const t=0===e.scrollLeft;return e===i.value?t:t&&m(e.parentElement)}return t.watch((()=>a.modelValue),(e=>{e&&(l.value=0)})),(n,o)=>(t.openBlock(),t.createBlock(t.unref(G),t.mergeProps(t.unref(a),{"hide-overlay":"",transition:t.unref(d),"content-style":[{transform:`translateX(${-l.value}px)`}],"content-class":{"vfm-transition":!t.unref(f)},onMousedown:o[0]||(o[0]=t.withModifiers((()=>{}),["stop"])),onTouchstart:o[1]||(o[1]=t.withModifiers((()=>{}),["stop"]))}),{default:t.withCtx((()=>[t.renderSlot(n.$slots,"prepend"),t.createElementVNode("div",{ref:(e,t)=>{t.modalContent=e,i.value=e},class:t.normalizeClass(["vfm-full-screen",e.fullScreenClass]),style:t.normalizeStyle(e.fullScreenStyle)},[t.renderSlot(n.$slots,"default")],6),t.renderSlot(n.$slots,"append")])),_:3},16,["transition","content-style","content-class"]))}});P("\n.vfm-full-screen[data-v-1a4bac96] {\n  width: 100%;\n  height: 100%;\n  overflow-y: auto;\n  background-color: #fff;\n}\n[data-v-1a4bac96] .vfm-transition {\n  transition-property: transform;\n  transition-duration: 0.3s;\n}\n[data-v-1a4bac96] .vfm__content {\n  width: 100%;\n  height: 100%;\n}\n@-webkit-keyframes slideInLeft-1a4bac96 {\nfrom {\n    transform: translate3d(-100%, 0, 0);\n}\nto {\n    transform: translate3d(0, 0, 0);\n}\n}\n@keyframes slideInLeft-1a4bac96 {\nfrom {\n    transform: translate3d(-100%, 0, 0);\n}\nto {\n    transform: translate3d(0, 0, 0);\n}\n}\n[data-v-1a4bac96] .slideInLeft {\n  -webkit-animation-name: slideInLeft-1a4bac96;\n          animation-name: slideInLeft-1a4bac96;\n  -webkit-animation-duration: 0.3s;\n          animation-duration: 0.3s;\n}\n@-webkit-keyframes slideInRight-1a4bac96 {\nfrom {\n    transform: translate3d(100%, 0, 0);\n}\nto {\n    transform: translate3d(0, 0, 0);\n}\n}\n@keyframes slideInRight-1a4bac96 {\nfrom {\n    transform: translate3d(100%, 0, 0);\n}\nto {\n    transform: translate3d(0, 0, 0);\n}\n}\n[data-v-1a4bac96] .slideInRight {\n  -webkit-animation-name: slideInRight-1a4bac96;\n          animation-name: slideInRight-1a4bac96;\n  -webkit-animation-duration: 0.3s;\n          animation-duration: 0.3s;\n}\n@-webkit-keyframes slideOutLeft-1a4bac96 {\nfrom {\n    transform: translate3d(0, 0, 0);\n}\nto {\n    transform: translate3d(-100%, 0, 0);\n}\n}\n@keyframes slideOutLeft-1a4bac96 {\nfrom {\n    transform: translate3d(0, 0, 0);\n}\nto {\n    transform: translate3d(-100%, 0, 0);\n}\n}\n[data-v-1a4bac96] .slideOutLeft {\n  -webkit-animation-name: slideOutLeft-1a4bac96;\n          animation-name: slideOutLeft-1a4bac96;\n  -webkit-animation-duration: 0.3s;\n          animation-duration: 0.3s;\n}\n@-webkit-keyframes slideOutRight-1a4bac96 {\nfrom {\n    transform: translate3d(0, 0, 0);\n}\nto {\n    transform: translate3d(100%, 0, 0);\n}\n}\n@keyframes slideOutRight-1a4bac96 {\nfrom {\n    transform: translate3d(0, 0, 0);\n}\nto {\n    transform: translate3d(100%, 0, 0);\n}\n}\n[data-v-1a4bac96] .slideOutRight {\n  -webkit-animation-name: slideOutRight-1a4bac96;\n          animation-name: slideOutRight-1a4bac96;\n  -webkit-animation-duration: 0.3s;\n          animation-duration: 0.3s;\n}\n"),oe.__scopeId="data-v-1a4bac96",oe.__file="src/hoc/VFullScreen.vue",e.$vfm=W,e.ModalInstance=F,e.ModalsContainer=Y,e.VBottomSheet=X,e.VFullScreen=oe,e.VueFinalModal=G,e.createModalInstance=U,e.useModal=q,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=VueFinalModal.umd.js.map
