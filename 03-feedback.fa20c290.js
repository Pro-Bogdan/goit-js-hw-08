function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,o=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,g=function(){return l.Date.now()};function p(e,t,n){var r,i,a,o,u,f,c=0,l=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=r,a=i;return r=i=void 0,c=t,o=e.apply(a,n)}function h(e){return c=e,u=setTimeout(j,t),l?b(e):o}function w(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-c>=a}function j(){var e=g();if(w(e))return S(e);u=setTimeout(j,function(e){var n=t-(e-f);return s?m(n,a-(e-c)):n}(e))}function S(e){return u=void 0,p&&r?b(e):(r=i=void 0,o)}function T(){var e=g(),n=w(e);if(r=arguments,i=this,f=e,n){if(void 0===u)return h(f);if(s)return u=setTimeout(j,t),b(f)}return void 0===u&&(u=setTimeout(j,t)),o}return t=y(t)||0,v(n)&&(l=!!n.leading,a=(s="maxWait"in n)?d(y(n.maxWait)||0,t):a,p="trailing"in n?!!n.trailing:p),T.cancel=function(){void 0!==u&&clearTimeout(u),c=0,r=f=i=u=void 0},T.flush=function(){return void 0===u?o:S(g())},T}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=a.test(e);return n||o.test(e)?u(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return v(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:r,maxWait:t,trailing:i})};const b=document.querySelector(".feedback-form"),h=document.querySelector('.feedback-form input[name="email"]'),w=document.querySelector('.feedback-form textarea[name="message"]'),j={email:"",message:"",setDataInput(e,t){this.email=e,this.message=t},clearDataInput(){this.email="",this.message=""}};window.addEventListener("load",(function(){let e;try{e=JSON.parse(localStorage.getItem("feedback-form-state"))}catch(e){console.log("Error getting data",e.message)}if(!e)return;h.value=e.email,w.value=e.message,j.setDataInput(e.email,e.message)})),b.addEventListener("input",e(t)((function(e){j[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(j))}),500)),b.addEventListener("submit",(function(e){e.preventDefault(),localStorage.clear(),e.currentTarget.reset(),console.log(j),j.clearDataInput()}));
//# sourceMappingURL=03-feedback.fa20c290.js.map
