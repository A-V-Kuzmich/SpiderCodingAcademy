parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"yCDU":[function(require,module,exports) {

},{"./images\\hero-bg.svg":[["hero-bg.0a327b79.svg","qOtP"],"qOtP"],"./images\\Group1.svg":[["Group1.d4b0658c.svg","AquF"],"AquF"],"./images\\Group2.svg":[["Group2.10015fa3.svg","HnVr"],"HnVr"],"./images\\Group3.svg":[["Group3.5d6e6349.svg","MtIy"],"MtIy"]}],"Focm":[function(require,module,exports) {
"use strict";require("./main.scss");const e={mod:document.getElementsByTagName("body")[0],btnCloseModal:document.querySelector("[closeModal]"),modal:document.querySelector("[data-modal]"),burger:document.querySelector("[burger]"),logo:document.querySelector("[mobile-logo]"),modalMobile:document.querySelector("[data-menu]"),modalMobileItems:document.querySelector("[data-menu-items]"),openModalBtn:document.querySelector("[data-modal-open]"),openBackdropModalBtn:document.querySelector("[data-modal-open-2]"),openModalBtnHero:document.querySelector("[data-modal-open-hero]")};function o(){e.modalMobile.classList.toggle("is-open"),e.mod.classList.toggle("no-scrol"),e.burger.classList.toggle("burger-active"),e.logo.classList.toggle("mobile-menu-logo")}function t(){o(),n()}function n(){e.modal.classList.toggle("is-hidden"),e.mod.classList.toggle("no-scrol")}function l(){n()}function d(o){o.target===e.modal&&n()}function c(){document.body.scrollTop>300||document.documentElement.scrollTop>300?document.getElementById("buttonUp").style.display="block":document.getElementById("buttonUp").style.display="none"}e.modal.addEventListener("click",d),e.btnCloseModal.addEventListener("click",l),e.burger.addEventListener("click",o),e.modalMobileItems.addEventListener("click",o),e.openBackdropModalBtn.addEventListener("click",t),e.openModalBtn.addEventListener("click",n),e.openModalBtnHero.addEventListener("click",n),document.getElementById("buttonUp").onclick=function(){document.body.scrollTop=0,document.documentElement.scrollTop=0},window.onscroll=function(){c()};
},{"./main.scss":"yCDU"}]},{},["Focm"], null)
//# sourceMappingURL=/SpiderCodingAcademy/src.f8ac4ea6.js.map