function t(){return void 0!==navigator.brave&&void 0!==navigator.brave.isBrave}function e(){return"string"==typeof navigator.userAgent&&navigator.userAgent.match(/Opera|OPR\//)}function n(){return new Promise((function(t,e){var n=new XMLHttpRequest;n.onreadystatechange=function(){4==n.readyState&&t(n)},n.open("GET","https://raw.githubusercontent.com/wmcmurray/just-detect-adblock/master/baits/pagead2.googlesyndication.com",!0),n.send()}))}function r(t){return 200===t.status&&!t.responseText.match(/^thistextshouldbethere(\n|)$/)}function o(t){return 0===t.status&&!t.responseText.match(/^thistextshouldbethere(\n|)$/)}function i(){if(null!==window.document.body.getAttribute("abp"))return!0;var t=function(){var t=document.createElement("div");return t.setAttribute("class","pub_300x250 pub_300x250m pub_728x90 text-ad textAd text_ad text_ads text-ads text-ad-links ad-text adSense adBlock adContent adBanner"),t.setAttribute("style","width: 1px !important; height: 1px !important; position: absolute !important; left: -10000px !important; top: -1000px !important;"),t}();window.document.body.appendChild(t);var e=function(t){if(null===t.offsetParent||0==t.offsetHeight||0==t.offsetLeft||0==t.offsetTop||0==t.offsetWidth||0==t.clientHeight||0==t.clientWidth)return!0;if(void 0!==window.getComputedStyle){var e=window.getComputedStyle(t,null);if(e&&("none"==e.getPropertyValue("display")||"hidden"==e.getPropertyValue("visibility")))return!0}return!1}(t);return window.document.body.removeChild(t),e}var a,u={detectAnyAdblocker:function(){return new Promise((function(a,u){if(i())return a(!0);t()||e()?n().then((function(n){return t()?a(r(n)):e()?a(o(n)):void a(!1)})):a(!1)}))},detectDomAdblocker:(a=i,function(){var t=arguments;return new Promise((function(e,n){e(a.apply(this,t))}))}),detectBraveShields:function(){return new Promise((function(e,o){t()?n().then((function(t){e(r(t))})):e(!1)}))},detectOperaAdblocker:function(){return new Promise((function(t,r){e()?n().then((function(e){t(o(e))})):t(!1)}))},isDetected:function(t,e){return function(){return console.warn("just-detect-adblock : "+(e||"This method is deprecated.")),t.apply(this,arguments)}}(i,"The `isDetected()` method is now deprecated, please use `detectAnyAdblocker()` instead, which returns a Promise and can detect more stuff (like Brave Shields).")};export default u;