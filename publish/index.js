module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=28)}([function(e,t){e.exports=require("@babel/runtime-corejs3/helpers/defineProperty")},function(e,t){e.exports=require("react")},function(e,t){e.exports=require("@babel/runtime-corejs3/helpers/assertThisInitialized")},function(e,t){e.exports=require("@babel/runtime-corejs3/core-js-stable/reflect/construct")},function(e,t){e.exports=require("prop-types")},function(e,t){e.exports=require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors")},function(e,t){e.exports=require("@babel/runtime-corejs3/core-js-stable/instance/for-each")},function(e,t){e.exports=require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor")},function(e,t){e.exports=require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols")},function(e,t){e.exports=require("@babel/runtime-corejs3/helpers/getPrototypeOf")},function(e,t){e.exports=require("@babel/runtime-corejs3/core-js-stable/date/now")},function(e,t){e.exports=require("@babel/runtime-corejs3/core-js-stable/object/define-property")},function(e,t){e.exports=require("@babel/runtime-corejs3/core-js-stable/object/define-properties")},function(e,t){e.exports=require("@babel/runtime-corejs3/core-js-stable/instance/filter")},function(e,t){e.exports=require("@babel/runtime-corejs3/core-js-stable/object/keys")},function(e,t){e.exports=require("@babel/runtime-corejs3/core-js-stable/instance/map")},function(e,t){e.exports=require("@babel/runtime-corejs3/helpers/classCallCheck")},function(e,t){e.exports=require("@babel/runtime-corejs3/helpers/createClass")},function(e,t){e.exports=require("@babel/runtime-corejs3/helpers/inherits")},function(e,t){e.exports=require("@babel/runtime-corejs3/helpers/possibleConstructorReturn")},function(e,t){e.exports=require("@babel/runtime-corejs3/core-js-stable/set-timeout")},function(e,t){e.exports=require("core-js/modules/es.date.to-string")},function(e,t){e.exports=require("core-js/modules/es.object.to-string")},function(e,t){e.exports=require("core-js/modules/es.regexp.to-string")},function(e,t,n){var r=n(25),i=n(26);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1},a=(r(i,o),i.locals?i.locals:{});e.exports=a},function(e,t,n){"use strict";var r,i=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function s(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},r=[],i=0;i<e.length;i++){var o=e[i],c=t.base?o[0]+t.base:o[0],u=n[c]||0,l="".concat(c," ").concat(u);n[c]=u+1;var f=s(l),d={css:o[1],media:o[2],sourceMap:o[3]};-1!==f?(a[f].references++,a[f].updater(d)):a.push({identifier:l,updater:b(d,t),references:1}),r.push(l)}return r}function u(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var l,f=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function d(e,t,n,r){var i=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=f(t,i);else{var o=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function p(e,t,n){var r=n.css,i=n.media,o=n.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),o&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var h=null,m=0;function b(e,t){var n,r,i;if(t.singleton){var o=m++;n=h||(h=u(t)),r=d.bind(null,n,o,!1),i=d.bind(null,n,o,!0)}else n=u(t),r=p.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=i());var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var i=s(n[r]);a[i].references--}for(var o=c(e,t),u=0;u<n.length;u++){var l=s(n[u]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}n=o}}}},function(e,t,n){(t=n(27)(!1)).push([e.i,".mt-ad-space {\n  overflow: hidden;\n  padding: 0;\n  margin: 0;\n}\n.mt-ad-space-wrapper {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: start;\n  -webkit-justify-content: flex-start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n}\n",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=(a=r,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),o=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(o).concat([i]).join("\n")}var a,s,c;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);r&&i[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Q}));n(21),n(22),n(23);var r=n(11),i=n.n(r),o=n(12),a=n.n(o),s=n(5),c=n.n(s),u=n(6),l=n.n(u),f=n(7),d=n.n(f),p=n(13),h=n.n(p),m=n(8),b=n.n(m),v=n(14),x=n.n(v),j=n(3),y=n.n(j),g=n(15),w=n.n(g),q=n(16),X=n.n(q),S=n(17),R=n.n(S),M=n(2),O=n.n(M),C=n(18),T=n.n(C),A=n(19),L=n.n(A),k=n(9),E=n.n(k),D=n(0),F=n.n(D),I=n(1),P=n.n(I),N=n(4),_=n.n(N),Y=n(20),U=n.n(Y),z=n(10),B=n.n(z);!function(){if(!window.requestAnimationFrame){for(var e=["webkit","moz"],t=0;t<e.length;t++)if(window.requestAnimationFrame=window["".concat(e[t],"RequestAnimationFrame")],H)return void(window.cancelAnimationFrame=window["".concat(e[t],"CancelAnimationFrame")]);var n=0;window.requestAnimationFrame=function(e){var t=B()(),r=Math.max(0,16-(t-n));return U()((function(){n=B()(),e()}),r)},window.cancelAnimationFrame=function(e){clearTimeout(e),e=null}}}();var H=window.requestAnimationFrame,J=window.cancelAnimationFrame;n(24);function W(e,t){var n=x()(e);if(b.a){var r=b()(e);t&&(r=h()(r).call(r,(function(t){return d()(e,t).enumerable}))),n.push.apply(n,r)}return n}function G(e){for(var t=1;t<arguments.length;t++){var n,r=null!=arguments[t]?arguments[t]:{};if(t%2)l()(n=W(Object(r),!0)).call(n,(function(t){F()(e,t,r[t])}));else if(c.a)a()(e,c()(r));else{var o;l()(o=W(Object(r))).call(o,(function(t){i()(e,t,d()(r,t))}))}}return e}function K(){if("undefined"==typeof Reflect||!y.a)return!1;if(y.a.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(y()(Date,[],(function(){}))),!0}catch(e){return!1}}var Q=function(e){T()(r,e);var t,n=(t=r,function(){var e,n=E()(t);if(K()){var r=E()(this).constructor;e=y()(n,arguments,r)}else e=n.apply(this,arguments);return L()(this,e)});function r(e){var t;return X()(this,r),t=n.call(this,e),F()(O()(t),"handleTouchStart",(function(e){t.requestAnimationID&&(J(t.requestAnimationID),t.requestAnimationID=null,t.offsetX=t.dist),t.startX=e.touches[0].clientX,t.startY=e.touches[0].clientY,t.slideX=0,t.slideStatus="running"})),F()(O()(t),"handleTouchMove",(function(e){t.slideX=e.changedTouches[0].clientX-t.startX,t.slideY=e.changedTouches[0].clientY-t.startY,Math.abs(t.slideX)>=Math.abs(t.slideY)&&"running"===t.slideStatus?(e.preventDefault(),t.slideStatus="horizontal"):Math.abs(t.slideX)<Math.abs(t.slideY)&&"running"===t.slideStatus&&(t.slideStatus="vertical"),"vertical"!==t.slideStatus&&t.translateX(t.offsetX+t.slideX)})),F()(O()(t),"handleTouchEnd",(function(){var e=t.state.index,n=e;"vertical"!==t.slideStatus?(t.offsetX+=t.slideX,0===e&&t.slideX>0||e===t.len&&t.slideX<0||(t.slideX>0&&t.slideX>=50?n-=1:t.slideX<0&&t.slideX<-50&&(n+=1)),t.animation(n)):t.animation(n)})),F()(O()(t),"animation",(function(e){var n,r=t.state.index,i=0,o=(n=0===e?0:e===t.len?-t.maxOffsetLeft:1===e&&0===r?-t.minOffsetLeft:e===t.len-1&&r===t.len?-(t.maxOffsetLeft-t.minOffsetLeft):-((e-1)*t.width+t.minOffsetLeft))-t.offsetX,a=Math.abs(o/10),s=function e(){var r,s;i+=1,t.dist=(r=i,s=t.offsetX,-o*(r/=a)*(r-2)+s),i+1>=a&&(t.dist=n),t.translateX(t.dist),i<a?t.requestAnimationID=H(e):(J(t.requestAnimationID),t.requestAnimationID=null,t.offsetX=t.dist)};e===r?s():t.setState({index:e},(function(){t.props.onChange(e),s()}))})),F()(O()(t),"translateX",(function(e){t.wrapperRef.current.style.transform="translateX(".concat(e,"px)"),t.wrapperRef.current.style.webkitTransform="translateX(".concat(e,"px)")})),t.state={index:0},t.wrapperRef=Object(I.createRef)(null),t.boxRef=Object(I.createRef)(null),t.width=e.width+e.spacing,t.offsetX=0,t}return R()(r,[{key:"componentDidMount",value:function(){var e=this.props,t=e.children,n=e.width,r=e.spacing,i=this.boxRef.current.clientWidth,o=Math.floor(i/n);this.minOffsetLeft=r+this.width-(i-(n*o+(o-1)*r))/2,this.maxOffsetLeft=this.wrapperRef.current.scrollWidth-i,this.len=t.length-o,this.wrapperRef.current.addEventListener("touchstart",this.handleTouchStart,!1),this.wrapperRef.current.addEventListener("touchmove",this.handleTouchMove,!1),this.wrapperRef.current.addEventListener("touchend",this.handleTouchEnd,!1)}},{key:"render",value:function(){var e,t=this.props,n=t.children,r=t.spacing,i=t.width;return P.a.createElement("div",{className:"mt-ad-space",ref:this.boxRef},P.a.createElement("div",{className:"mt-ad-space-wrapper",style:{paddingLeft:"".concat(n.length>1?r:0,"px"),width:"".concat(n.length>1?"".concat(n.length*(i+r),"px"):"100%")},ref:this.wrapperRef},w()(e=P.a.Children).call(e,n,(function(e){return P.a.cloneElement(e,{style:G({margin:"".concat(n.length>1?"0 ".concat(r,"px 0 0"):"auto"),width:"".concat(i,"px")},e.props.style)})}))))}}]),r}(I.PureComponent);F()(Q,"propTypes",{width:_.a.number.isRequired,spacing:_.a.number.isRequired,children:_.a.node,onChange:_.a.func}),F()(Q,"defaultProps",{children:[],onChange:function(){}})}]);