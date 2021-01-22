// Csster version 1.3.2; Copyright (c) Andrew J. Peterson / ndpsoftware.com. All Rights Reserved
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Csster=e():t.Csster=e()}(window,(function(){return function(t){var e={};function r(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=t,r.c=e,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(o,i,function(e){return t[e]}.bind(null,i));return o},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=1)}([function(t,e,r){"use strict";(function(t){r.d(e,"a",(function(){return i}));const o={};if("undefined"!=typeof navigator){const t=function(t){t=t.toLowerCase();const e=/(webkit)[ \/]([\w.]+)/.exec(t)||/(opera)(?:.*version)?[ \/]([\w.]+)/.exec(t)||/(msie) ([\w.]+)/.exec(t)||!/compatible/.test(t)&&/(mozilla)(?:.*? rv:([\w.]+))?/.exec(t)||[];return{browser:e[1]||"",version:e[2]||"0"}}(navigator.userAgent);t.browser&&(o[t.browser]=!0,o.version=t.version)}const i=()=>void 0!==t&&t.browserOverride?t.browserOverride:o}).call(this,r(4))},function(t,e,r){r(2),t.exports=r(3)},function(t,e){"undefined"!=typeof jQuery&&(jQuery.fn.csster=function(t){var e={};return e[this.selector]=t,Csster.style(e),this})},function(t,e,r){t.exports=r(5).Csster},function(t,e){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,e,r){"use strict";r.r(e),r.d(e,"Csster",(function(){return at}));var o={};r.r(o),r.d(o,"setConfig",(function(){return C})),r.d(o,"addNames",(function(){return M})),r.d(o,"error",(function(){return O}));var i={};function n(t){var e=t.length;return function r(){var o=Array.prototype.slice.call(arguments,0);return o.length>=e?t.apply(null,o):function(){var t=Array.prototype.slice.call(arguments,0);return r.apply(null,o.concat(t))}}}r.r(i),r.d(i,"roundedCorners",(function(){return L})),r.d(i,"boxShadow",(function(){return E})),r.d(i,"horizontalCentering",(function(){return G})),r.d(i,"verticalCentering",(function(){return X})),r.d(i,"linearGradient",(function(){return D})),r.d(i,"clearfix",(function(){return Y})),r.d(i,"imageReplacement",(function(){return Z}));const a=function(){var t=arguments;return function(){for(var e=arguments,r=t.length;r-- >0;)e=[t[r].apply(this,e)];return e[0]}},s=(t,...e)=>{for(let r=0;r<e.length;r++)for(let o in e[r])t[o]=e[r][o];return t},l=n((t,e)=>{if("object"!=typeof e)return e;let r={};for(let o in e)r[t(o)]=e[o];return r}),c=n((function(t,e){if("object"==typeof e)for(let r in e)"object"==typeof e[r]&&t(e[r],r);return e})),d=n((function(t,e){if("object"!=typeof e)return e;let r={};for(let o in e){let i=t(e[o],o);"object"==typeof i&&(i=d(t,i)),r[o]=i}return r})),u=n((function(t,e){let r=t(e);for(let e in r)"object"==typeof r[e]&&(r[e]=u(t,r[e]));return r})),b=t=>"object"==typeof t&&"[object Array]"===Object.prototype.toString.call(t),f=(t,e)=>{for(let r=0;r<t.length;)e(t[r],r++);return t},p=t=>((t,e,r)=>(f(t,(function(t,o){e=r(e,t,o)})),e))(t,[],(function(t,e){return b(e)?t.concat(p(e)):(t.push(e),t)}));const m=n((t,e)=>"string"==typeof e?t(e):e),g=m(t=>t.replace(/([A-Z])/g,(function(t){return"-"+t.toLowerCase()}))),h=m((function(t){return(t||"").replace(/^(\s|\u00A0)+|(\s|\u00A0)+$/g,"")}));let k={has:y,mixin:y,mixins:y};function w(t){return!!k[t]}function y(...t){const e={};return function(t,e){let r=[];if(b(e))for(let o=0;o<e.length;)r.push(t(e[o],o++));else r=t(e)}(t=>{"function"==typeof t&&(t=t()),s(e,t)},t),e}const x=u((function t(e){if("object"!=typeof e)return e;const r={};for(let o in e){const i=e[o];if(w(o)){const e=k[o].apply(null,b(i)?i:[i]);s(r,t(e))}else r[o]=i}return r}));function v(t,e){const r=e.split(",");for(let e=0;e<r.length;e++){let o=h(r[e]);o="&"==o.substr(0,1)?o.substr(1):" "+o,r[e]=t+o}return h(r.join(","))}function z(t,e){return!!t.match(/^\.\#\&/)||"object"==typeof e&&!w(t)}l(t=>{for(;t.match(/.*#.*#.*/);)t=t.replace(/^.*#.*#/,"#");return t});const j={},S={strictNames:!0,anyBrowserExtension:!0};function C(t,e){S[t]=e}function M(...t){const e=p([t]);for(let t of e)j[t]=!0}function O(t){if(/^\-\w+\-/.exec(t)){if(!S.anyBrowserExtension&&!j[t])return'Unrecognized "'+t+'" browser extension property name'}else if(S.strictNames&&!j[t])return'Unrecognized "'+t+'" property name';return null}M(["-webkit-line-clamp",":active","additive-symbols","::after (:after)","align-content","align-items","align-self","align-tracks","all","animation","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-timing-function","@annotation","annotation",":any-link","appearance","aspect-ratio","attr","::backdrop","backdrop-filter","backface-visibility","background","background-attachment","background-blend-mode","background-clip","background-color","background-image","background-origin","background-position","background-position-x","background-position-y","background-repeat","background-size",":blank","bleed","block-overflow","block-size","blur","border","border-block","border-block-color","border-block-end","border-block-end-color","border-block-end-style","border-block-end-width","border-block-start","border-block-start-color","border-block-start-style","border-block-start-width","border-block-style","border-block-width","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-end-end-radius","border-end-start-radius","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-inline","border-inline-color","border-inline-end","border-inline-end-color","border-inline-end-style","border-inline-end-width","border-inline-start","border-inline-start-color","border-inline-start-style","border-inline-start-width","border-inline-style","border-inline-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-right-color","border-right-style","border-right-width","border-spacing","border-start-end-radius","border-start-start-radius","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","@bottom-center","box-decoration-break","box-shadow","box-sizing","break-after","break-before","break-inside","brightness","calc","caption-side","caret-color","ch","@character-variant","character-variant","@charset",":checked","circle","clamp","clear","clip","clip-path","cm","color","color-adjust","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","conic-gradient","contain","content","content-visibility","contrast","counter-increment","counter-reset","counter-set","@counter-style","counters","cross-fade","cubic-bezier","::cue","::cue-region",":current","cursor",":default",":defined","deg",":dir","direction",":disabled","display","<display-legacy>","dpcm","dpi","dppx","drop-shadow","E","element","ellipse","em",":empty","empty-cells",":enabled","env","ex","F","fallback","filter",":first",":first-child","::first-letter (:first-letter)","::first-line (:first-line)",":first-of-type","fit-content","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float",":focus",":focus-visible",":focus-within","font","font-display","@font-face","font-family","font-family","font-feature-settings","font-feature-settings","@font-feature-values","font-kerning","font-language-override","font-optical-sizing","font-size","font-size-adjust","font-stretch","font-stretch","font-style","font-style","font-synthesis","font-variant","font-variant","font-variant-alternates","font-variant-caps","font-variant-east-asian","font-variant-ligatures","font-variant-numeric","font-variant-position","font-variation-settings","font-variation-settings","font-weight","font-weight","forced-color-adjust","format","fr",":fullscreen",":future","G","gap","grad","::grammar-error","grayscale","grid","grid-area","grid-auto-columns","grid-auto-flow","grid-auto-rows","grid-column","grid-column-end","grid-column-start","grid-row","grid-row-end","grid-row-start","grid-template","grid-template-areas","grid-template-columns","grid-template-rows","Hz","hanging-punctuation",":has","height","height","@historical-forms",":host",":host-context",":hover","hsl","hsla","hue-rotate","hyphens","image","image-orientation","image-rendering","image-resolution","image-set","@import","in",":in-range",":indeterminate","inherit","inherits","initial","initial-letter","initial-letter-align","initial-value","inline-size","inset","inset","inset-block","inset-block-end","inset-block-start","inset-inline","inset-inline-end","inset-inline-start",":invalid","invert",":is","isolation","justify-content","justify-items","justify-self","justify-tracks","kHz","@keyframes",":lang",":last-child",":last-of-type","leader",":left","left","@left-bottom","letter-spacing","line-break","line-clamp","line-height","line-height-step","linear-gradient",":link","list-style","list-style-image","list-style-position","list-style-type","local",":local-link","margin","margin-block","margin-block-end","margin-block-start","margin-bottom","margin-inline","margin-inline-end","margin-inline-start","margin-left","margin-right","margin-top","margin-trim","::marker","marks","mask","mask-border","mask-border-mode","mask-border-outset","mask-border-repeat","mask-border-slice","mask-border-source","mask-border-width","mask-clip","mask-composite","mask-image","mask-mode","mask-origin","mask-position","mask-repeat","mask-size","mask-type","masonry-auto-flow","math-style","matrix","matrix3d","max","max-block-size","max-height","max-height","max-inline-size","max-lines","max-width","max-width","max-zoom","@media","min","min-block-size","min-height","min-height","min-inline-size","min-width","min-width","min-zoom","minmax","mix-blend-mode","mm","ms","@namespace","negative",":not",":nth-child",":nth-col",":nth-last-child",":nth-last-col",":nth-last-of-type",":nth-of-type","object-fit","object-position","offset","offset-anchor","offset-distance","offset-path","offset-position","offset-rotate",":only-child",":only-of-type","opacity","opacity",":optional","order","orientation","@ornaments","ornaments","orphans",":out-of-range","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-anchor","overflow-block","overflow-inline","overflow-wrap","overflow-x","overflow-y","overscroll-behavior","overscroll-behavior-block","overscroll-behavior-inline","overscroll-behavior-x","overscroll-behavior-y","Pseudo-classes","Pseudo-elements","pad","padding","padding-block","padding-block-end","padding-block-start","padding-bottom","padding-inline","padding-inline-end","padding-inline-start","padding-left","padding-right","padding-top","@page","page-break-after","page-break-before","page-break-inside","paint","paint-order","::part",":past","path",":paused","pc","perspective","perspective","perspective-origin",":picture-in-picture","place-content","place-items","place-self","::placeholder",":placeholder-shown",":playing","pointer-events","polygon","position","prefix","@property","pt","px","quotes","rad","radial-gradient","range",":read-only",":read-write","rect","rem","repeat","repeating-linear-gradient","repeating-radial-gradient",":required","resize","revert","rgb","rgba",":right","right","@right-bottom",":root","rotate","rotate","rotate3d","rotateX","rotateY","rotateZ","row-gap","ruby-align","ruby-merge","ruby-position","saturate","scale","scale","scale3d","scaleX","scaleY","scaleZ",":scope","scroll-behavior","scroll-margin","scroll-margin-block","scroll-margin-block-end","scroll-margin-block-start","scroll-margin-bottom","scroll-margin-inline","scroll-margin-inline-end","scroll-margin-inline-start","scroll-margin-left","scroll-margin-right","scroll-margin-top","scroll-padding","scroll-padding-block","scroll-padding-block-end","scroll-padding-block-start","scroll-padding-bottom","scroll-padding-inline","scroll-padding-inline-end","scroll-padding-inline-start","scroll-padding-left","scroll-padding-right","scroll-padding-top","scroll-snap-align","scroll-snap-stop","scroll-snap-type","scrollbar-color","scrollbar-gutter","scrollbar-width","::selection","selector","sepia","shape-image-threshold","shape-margin","shape-outside","size","skew","skewX","skewY","::slotted","speak-as","::spelling-error","src","steps","@styleset","styleset","@stylistic","stylistic","suffix","@supports","@swash","swash","symbols","symbols","syntax","system","tab-size","table-layout",":target","target-counter","target-counters","target-text",":target-within","text-align","text-align-last","text-combine-upright","text-decoration","text-decoration-color","text-decoration-line","text-decoration-skip","text-decoration-skip-ink","text-decoration-style","text-decoration-thickness","text-emphasis","text-emphasis-color","text-emphasis-position","text-emphasis-style","text-indent","text-justify","text-orientation","text-overflow","text-rendering","text-shadow","text-size-adjust","text-transform","text-underline-offset","text-underline-position","top","@top-center","touch-action","transform","transform-box","transform-origin","transform-style","transition","transition-delay","transition-duration","transition-property","transition-timing-function","translate","translate","translate3d","translateX","translateY","translateZ","turn","unicode-bidi","unicode-range","unset","url",":user-invalid","user-select","user-zoom",":valid","var","vertical-align","vh","@viewport","viewport-fit","visibility",":visited","vmax","vmin","vw",":where","white-space","widows","width","width","will-change","word-break","word-spacing","word-wrap","writing-mode","z-index","zoom"]),M(["-moz-binding","-moz-border-radius","-moz-border-radius-topleft","-moz-border-radius-topright","-moz-border-radius-bottomright","-moz-border-radius-bottomleft","-moz-border-top-colors","-moz-border-right-colors","-moz-border-bottom-colors","-moz-border-left-colors","-moz-box-shadow","-moz-opacity","-moz-outline","-moz-outline-color","-moz-outline-style","-moz-outline-width","-moz-user-focus","-moz-user-input","-moz-user-modify","-moz-user-select"]),M(["-webkit-animation","-webkit-animation-delay","-webkit-animation-direction","-webkit-animation-duration","-webkit-animation-iteration-count","-webkit-animation-name","-webkit-animation-play-state","-webkit-animation-timing-function","-webkit-appearance","-webkit-backface-visibility","-webkit-background-clip","-webkit-background-composite","-webkit-background-origin","-webkit-background-size","-webkit-border-bottom-left-radius","-webkit-border-bottom-right-radius","-webkit-border-horizontal-spacing","-webkit-border-image","-webkit-border-radius","-webkit-border-top-left-radius","-webkit-border-top-right-radius","-webkit-border-vertical-spacing","-webkit-box-align","-webkit-box-direction","-webkit-box-flex","-webkit-box-flex-group","-webkit-box-lines","-webkit-box-ordinal-group","-webkit-box-orient","-webkit-box-pack","-webkit-box-reflect","-webkit-box-shadow","-webkit-box-sizing","-webkit-column-break-after","-webkit-column-break-before","-webkit-column-break-inside","-webkit-column-count","-webkit-column-gap","-webkit-column-rule","-webkit-column-rule-color","-webkit-column-rule-style","-webkit-column-rule-width","-webkit-column-width","-webkit-columns","-webkit-dashboard-region","-webkit-line-break","-webkit-margin-bottom-collapse","-webkit-margin-collapse","-webkit-margin-start","-webkit-margin-top-collapse","-webkit-marquee","-webkit-marquee-direction","-webkit-marquee-increment","-webkit-marquee-repetition","-webkit-marquee-speed","-webkit-marquee-style","-webkit-mask","-webkit-mask-attachment","-webkit-mask-box-image","-webkit-mask-clip","-webkit-mask-composite","-webkit-mask-image","-webkit-mask-origin","-webkit-mask-position","-webkit-mask-position-x","-webkit-mask-position-y","-webkit-mask-repeat","-webkit-mask-size","-webkit-nbsp-mode","-webkit-padding-start","-webkit-perspective","-webkit-perspective-origin","-webkit-rtl-ordering","-webkit-tap-highlight-color","-webkit-text-fill-color","-webkit-text-security","-webkit-text-size-adjust","-webkit-text-stroke","-webkit-text-stroke-color","-webkit-text-stroke-width","-webkit-touch-callout","-webkit-transform","-webkit-transform-origin","-webkit-transform-origin-x","-webkit-transform-origin-y","-webkit-transform-origin-z","-webkit-transform-style","-webkit-transition","-webkit-transition-delay","-webkit-transition-duration","-webkit-transition-property","-webkit-transition-timing-function","-webkit-user-drag","-webkit-user-modify","-webkit-user-select"]);const q=l(g),H=c((t,e)=>{for(let r in t){let t=O(r);if(t)throw t+'. Context: "'+e+'"'}}),T=a(H,d(q),t=>{const e={};return function t(r,o){for(var i in r){const l=r[i];if(z(i,l)){t(l,v(o,i))}else a=i,s=l,n=h(n=o),e[n]=e[n]||{},e[n][a]&&console.log("Replacing property ",a," in ",n,"; ",e[n][a]," => ",s),e[n][a]=s}var n,a,s}(t,""),e},x);const A=function(t){const e=g(t);return O(e)?null:e},N=["z-index","opacity","zoom"],P=(t,e)=>(t=>A(t))(t)+": "+((t,e)=>t+(t&&"number"==typeof t&&-1==N.indexOf(e)?"px":""))(e,t)+";\r",R=t=>{return t.sel+" { "+(e=t.props,Object.keys(e).reduce((t,r)=>t+P(r,e[r]),"")+" }\n");var e};const B=a((function(t){return t.reduce((t,e)=>t+R(e),"")}),(function(t){const e=p([t]),r=[];return f(e,t=>r.push(function(t){const e=[];for(let r in t)e.push({sel:r,props:t[r]});return e}(T(t)))),p(r)}));var I=function(t){const e=document.createElement("STYLE"),r=document.createAttribute("type");r.nodeValue="text/css",e.setAttributeNode(r);document.getElementsByTagName("HEAD")[0].appendChild(e);try{e.appendChild(document.createTextNode(t))}catch(e){const r=document.styleSheets[document.styleSheets.length-1];r.cssText=""+r.cssText+t}};function L(t,e){if(e||(e=t||10,t="all"),"all"==t)return{"-moz-border-radius":e,"border-radius":e,"-webkit-border-radius":e};var r={};return"tl"!=t&&"top"!=t&&"left"!=t||(r["-moz-border-radius-topleft"]=e,r["-webkit-border-top-left-radius"]=e,r["border-top-left-radius"]=e),"tr"!=t&&"top"!=t&&"right"!=t||(r["-webkit-border-top-right-radius"]=e,r["-moz-border-radius-topright"]=e,r["border-top-right-radius"]=e),"bl"!=t&&"bottom"!=t&&"left"!=t||(r["-webkit-border-bottom-left-radius"]=e,r["-moz-border-radius-bottomleft"]=e,r["border-bottom-left-radius"]=e),"br"!=t&&"bottom"!=t&&"right"!=t||(r["-webkit-border-bottom-right-radius"]=e,r["-moz-border-radius-bottomright"]=e,r["border-bottom-right-radius"]=e),r}function E(t,e,r){var o,i,n,a;if(void 0===t.length)throw"Not yet supported";if(2!=t.length)throw"boxShadow requires a direction (degree) or [xOffset, yOffset] in px measurements.";return{"-moz-box-shadow":(o=t[0])+"px "+(i=t[1])+"px "+e+"px "+r,"-webkit-box-shadow":o+"px "+i+"px "+e+"px "+r,boxShadow:o+"px "+i+"px "+e+"px "+r,"-ms-filter":"progid:DXImageTransform.Microsoft.Shadow(Strength="+(n=4)+", Direction="+(a=135)+", Color='"+r+"')",filter:"progid:DXImageTransform.Microsoft.Shadow(Strength="+n+", Direction="+a+", Color='"+r+"')"}}function G(t){return{width:t,position:"absolute",left:"50%",marginLeft:-t/2}}function X(t){return{height:t,position:"absolute",top:"50%",marginTop:-t/2}}var _=r(0);function D(t,e,r,o){let i="",n="";Object(_.a)().webkit?i="-webkit":Object(_.a)().mozilla&&(i="-moz");const a=[];for(var s=0;s<arguments.length;s++){var l=arguments[s];if("string"==typeof l)a.push(l);else if(b(l))for(var c=0;c<l.length;c++)a.push(l[c]);else for(var d in arguments[s])a.push(l[d]+(0!=d&&"100"!=d?" "+d+"%":""))}for(n=i+"-linear-gradient(",s=0;s<a.length;s++)0!==s&&(n+=", "),n+=a[s];return n+=")",n}function Y(){var t={display:"inline-block","&:after":{content:" ",display:"block",width:0,height:0,lineHeight:0,fontSize:0,clear:"both",visibility:"hidden"}};return Object(_.a)().msie&&(t.zoom="1"),t}function Z(t,e,r,o,i){if(void 0===t||void 0===e||void 0===r)throw"imageReplacement() requires width, height and img";return{display:"block",width:t,height:e,backgroundImage:"url("+r+")",backgroundRepeat:"no-repeat",backgroundPosition:(o||0)+"px "+(i||0)+"px",textIndent:-2e4,overflow:"hidden"}}const F={black:"#000000",silver:"#c0c0c0",gray:"#808080",white:"#ffffff",maroon:"#800000",red:"#ff0000",purple:"#800080",fuchsia:"#ff00ff",green:"#008000",lime:"#00ff00",olive:"#808000",yellow:"#ffff00",navy:"#000080",blue:"#0000ff",teal:"#008080",aqua:"#00ffff"},Q={},U=function(t){return Q[t]||(Q[t]={}),Q[t]},V=function(){return"#"==this.substr(0,1)&&7==this.length?U(this).hex=""+this:"#"==this.substr(0,1)&&4==this.length?U(this).hex="#"+this.substr(1,1)+this.substr(1,1)+this.substr(2,1)+this.substr(2,1)+this.substr(3,1)+this.substr(3,1):U(this).hex=F[this],U(this).hex},$=function(){const t=U(this);if(t.rgb)return t.rgb;const e=this.toHexColor();return t.rgb=[parseInt(e.substr(1,2),16),parseInt(e.substr(3,2),16),parseInt(e.substr(5,2),16)],t.rgb},J=function(){return this.toRGB()[0]},K=function(){return this.toRGB()[1]},W=function(){return this.toRGB()[2]},tt=function(t){const e=this.toHSL(),r=[e[0],e[1],Math.min(100,e[2]+t)];return it(r)},et=function(t){const e=this.toHSL(),r=[e[0],e[1],Math.max(0,e[2]-t)];return it(r)},rt=function(t){const e=this.toHSL(),r=[e[0],Math.min(100,Math.max(0,e[1]+t)),e[2]];return it(r)},ot=function(){this.toRGB();const t=this.red()/255,e=this.green()/255,r=this.blue()/255,o=Math.max(t,e,r),i=Math.min(t,e,r),n=o-i;let a,s,l=(o+i)/2;if(0==n)a=0,s=0;else{s=n/(l<.5?o+i:2-o-i);const c=((o-t)/6+n/2)/n,d=((o-e)/6+n/2)/n,u=((o-r)/6+n/2)/n;t==o?a=u-d:e==o?a=1/3+c-u:r==o&&(a=2/3+d-c),a<0&&(a+=1),a>0&&(a-=1)}a=Math.round(360*a),a<0&&(a+=360);const c=U(this);return c.hsl=[a,Math.round(100*s),Math.round(100*l)],c.hsl},it=function(t,e,r){function o(t,e,r){return r<0&&(r+=1),r>1&&(r-=1),6*r<1?t+6*(e-t)*r:2*r<1?e:3*r<2?t+(e-t)*(2/3-r)*6:t}function i(t){let e=Math.round(t).toString(16);return 1==e.length&&(e="0"+e),e.substr(0,1)+e.substr(1,1)}b(t)&&(r=t[2]||0,e=t[1]||0,t=t[0]||0);const n=function(t,e,r){let i,n,a;if(0==e)i=255*r,n=255*r,a=255*r;else{const s=r<.5?r*(1+e):r+e-e*r,l=2*r-s;i=255*o(l,s,t+1/3),n=255*o(l,s,t),a=255*o(l,s,t-1/3)}return[i,n,a]}(t=(t+360)%360/360,e/=100,r/=100);return"#"+i(n[0])+i(n[1])+i(n[2])},nt=M,at={buildCss:B,insertCss:I,style:a(I,B),macros:i,setMacro:function(t,e){k[t]=e},arrayFlatten:p,browserInfo:_.a,hslToHexColor:it,addPropertyNames:nt,propertyNameValidator:o,colorizeString:()=>{String.prototype.toHexColor=V,String.prototype.toRGB=$,String.prototype.red=J,String.prototype.green=K,String.prototype.blue=W,String.prototype.lighten=tt,String.prototype.darken=et,String.prototype.saturate=rt,String.prototype.toHSL=ot}}}])}));
