var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n="Expected a function",a=0/0,o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,l=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof e&&e&&e.Object===Object&&e,s="object"==typeof self&&self&&self.Object===Object&&self,c=u||s||Function("return this")(),m=Object.prototype.toString,g=Math.max,d=Math.min,v=function(){return c.Date.now()};function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==m.call(t))return a;if(p(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=p(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var u=r.test(e);return u||l.test(e)?f(e.slice(2),u?2:8):i.test(e)?a:+e}t=function(e,t,a){var o=!0,i=!0;if("function"!=typeof e)throw TypeError(n);return p(a)&&(o="leading"in a?!!a.leading:o,i="trailing"in a?!!a.trailing:i),function(e,t,a){var o,i,r,l,f,u,s=0,c=!1,m=!1,b=!0;if("function"!=typeof e)throw TypeError(n);function h(t){var n=o,a=i;return o=i=void 0,s=t,l=e.apply(a,n)}function j(e){var n=e-u,a=e-s;return void 0===u||n>=t||n<0||m&&a>=r}function O(){var e,n,a,o=v();if(j(o))return S(o);f=setTimeout(O,(e=o-u,n=o-s,a=t-e,m?d(a,r-n):a))}function S(e){return(f=void 0,b&&o)?h(e):(o=i=void 0,l)}function T(){var e,n=v(),a=j(n);if(o=arguments,i=this,u=n,a){if(void 0===f)return s=e=u,f=setTimeout(O,t),c?h(e):l;if(m)return f=setTimeout(O,t),h(u)}return void 0===f&&(f=setTimeout(O,t)),l}return t=y(t)||0,p(a)&&(c=!!a.leading,r=(m="maxWait"in a)?g(y(a.maxWait)||0,t):r,b="trailing"in a?!!a.trailing:b),T.cancel=function(){void 0!==f&&clearTimeout(f),s=0,o=u=i=f=void 0},T.flush=function(){return void 0===f?l:S(v())},T}(e,t,{leading:o,maxWait:t,trailing:i})};const b=document.querySelector(".feedback-form"),h={};try{b.email.value=h.email=JSON.parse(localStorage.getItem("feedback-form-state")).email}catch(e){b.email.value=h.email=""}try{b.message.value=h.message=JSON.parse(localStorage.getItem("feedback-form-state")).message}catch(e){b.message.value=h.message=""}b.addEventListener("input",(function(e){return e&&e.__esModule?e.default:e})(t)(function(e){"email"===e.target.type&&(h.email=e.target.value),"textarea"===e.target.type&&(h.message=e.target.value),localStorage.setItem("feedback-form-state",JSON.stringify(h))},500)),b.addEventListener("submit",function(e){if(e.preventDefault(),!h.email||!h.message)return console.log("Заповніть усі поля");console.log(h),localStorage.removeItem("feedback-form-state"),b.email.value=h.email="",b.message.value=h.message="",console.log(h)}),console.log(h);
//# sourceMappingURL=03-feedback.795894e5.js.map
