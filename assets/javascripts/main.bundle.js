!function(e){function t(t){for(var i,s,l=t[0],r=t[1],c=t[2],u=0,g=[];u<l.length;u++)s=l[u],n[s]&&g.push(n[s][0]),n[s]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i]);for(d&&d(t);g.length;)g.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],i=!0,l=1;l<a.length;l++){var r=a[l];0!==n[r]&&(i=!1)}i&&(o.splice(t--,1),e=s(s.s=a[0]))}return e}var i={},n={1:0},o=[];function s(t){if(i[t])return i[t].exports;var a=i[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=i,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:a})},s.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var l=window.webpackJsonp=window.webpackJsonp||[],r=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var d=r;o.push([17,0]),a()}([function(e,t){e.exports=jQuery},,,,,function(e,t,a){"use strict";(function(e){t.a=function(){var t,a=e(".top-bar a.lang"),i=(a.data("current-lang"),a.data("to-lang")),n=a.data("href"),o=localStorage.getItem("lang");if(t=window.location.href.includes("/en/")?"en":"de",console.log("urlLang: "+t),a.on("click",function(e){localStorage.setItem("lang",i),console.log(n),window.location.replace(n),e.preventDefault()}),o?console.log("storedLang: "+o):console.log("storedLang not set"),!navigator.language.includes("de")&&!o&&"de"==t&&(console.log("ask if they want to switch"),e("#language_prompt").addClass("is-active")),o&&o!==t){console.log("redirecting cus wrong lang: "+s);var s=a.data("href")}e('#language_prompt .close, #language_prompt button[data-action="close"]').on("click",function(){console.log("leave it in de"),localStorage.setItem("lang","de"),e("#language_prompt").removeClass("is-active")}),e('#language_prompt button[data-action="english"]').on("click",function(){console.log("change it to en"),localStorage.setItem("lang","en");var e=a.data("href");console.log(e),window.location.replace(e)})}}).call(this,a(0))},function(e,t,a){"use strict";(function(e){t.a=function(){e("ul#linkedin-con h2").remove();var t=e("section.socialgrid.is-hidden-mobile .logo1"),a=e("section.socialgrid.is-hidden-mobile .logo2");t.prependTo(".is-hidden-mobile #linkedin-con"),a.appendTo(".is-hidden-mobile #linkedin-con"),e(".is-hidden-mobile .linkedin-item").not(".logo").each(function(){e("a").each(function(){var t;e(this).text().includes("lnkd.in")&&(t="en"==(new URL(window.location.href).searchParams.get("lang")||"de")?"More":"Mehr",e(this).text(t))}),e(".linkedin-update-image").each(function(){var t='<div class="img-box" style="background-image: url('+e(this).attr("src")+'); height: 100%; margin-bottom: 6px;     background-size: cover; background-position: center center;">&nbsp;</div>';e(this).replaceWith(t)})})}}).call(this,a(0))},function(e,t,a){"use strict";(function(e){var i=a(2);t.a=function(){var t;e(".glide").length&&e(".glide").each(function(){var a=e(this).attr("id");"anwalte-glide"==a?t={type:"carousel",perView:1}:"news-glide"==a?t={type:"carousel",perView:1}:"socialgrid-glide"==a?(t={type:"carousel",perView:1.23},e(".socialgrid.is-hidden-tablet ul#linkedin-con .glide__slide").unwrap()):t={type:"carousel",perView:1},e("#"+a).length?new i.a("#"+a,t).mount():new i.a(".glide",t).mount()})}}).call(this,a(0))},,function(e,t,a){"use strict";(function(e){t.a=function(){var t=e("#search"),a=e("#main-menu"),i=e(".menu-toggle");e("a.search-button").on("click",function(n){t.toggleClass("is-active"),e("#s").focus(),a.hasClass("is-active")&&(a.removeClass("is-active"),i.removeClass("is-active")),n.preventDefault()})}}).call(this,a(0))},function(e,t,a){"use strict";(function(e){var i=a(1);t.a=function(){var t=e(window).height()/2;e(".scrollToTop").hasClass("hidden")||e(".scrollToTop").addClass("hidden"),e(window).off().on("scroll",function(){var a=e(window).scrollTop();a<t&&!e(".scrollToTop").hasClass("hidden")?e(".scrollToTop").addClass("hidden"):a>t&&e(".scrollToTop").hasClass("hidden")&&e(".scrollToTop").removeClass("hidden")}),e(".scrollToTop").off().on("click",function(){Object(i.a)("body")})}}).call(this,a(0))},function(e,t,a){"use strict";(function(e){t.a=function(){var t=new URLSearchParams(window.location.search);if(t.toString()){if(e("body").hasClass("post-type-archive-anwalte")){if(t.has("standort")){e('button[data-filtertoggle="standorte"]').trigger("click");var a=t.get("standort");e('[data-filter="'+a+'"]').trigger("click")}if(t.has("k")){e('button[data-filtertoggle="kompetenzen"]').trigger("click");var i=t.get("k"),n=[];i.includes(",")?n=i.split(","):n.push(i),n.forEach(function(t){e('[data-filter="'+t+'"]').trigger("click")})}}e("body").hasClass("post-type-archive-news")&&(t.has("veranstaltungen")&&e('[data-filter="veranstaltungen"]').trigger("click"),t.has("karriereveranstaltungen")&&e('[data-filter="karriereveranstaltungen"]').trigger("click"))}}}).call(this,a(0))},function(e,t,a){"use strict";(function(e){t.a=function(){var t=e("a.menu-toggle"),a=e("#main-menu"),i=e("#search"),n=e("#site-header");t.on("click",function(e){t.toggleClass("is-active"),a.toggleClass("is-active"),i.hasClass("is-active")&&i.removeClass("is-active"),!!n.hasClass("has-breaking")&&n.toggleClass("has-breaking"),e.preventDefault()}),e("#site-header .back-button").on("click",function(e){document.referrer||history.length||history.previous?window.history.back():window.location.href="/",e.preventDefault()});var o=sessionStorage.getItem("breakingClosed"),s=!1;n.hasClass("has-breaking-latent")&&(s=!0),console.log(o),"true"!==o&&s&&e("#site-header").removeClass("has-breaking-latent").addClass("has-breaking"),e(".breaking .close").on("click",function(t){e("#site-header").removeClass("has-breaking"),sessionStorage.setItem("breakingClosed",!0),t.preventDefault()}),e(".awards .toggle").on("click",function(t){e(".award.hide").removeClass("hide"),e(this).addClass("is-hidden"),t.preventDefault()})}}).call(this,a(0))},function(e,t,a){"use strict";(function(e){t.a=function(){e("[data-filtertoggle]").on("click",function(){var t=e(this).data("filtertoggle");"all"===t||"alle"===t?(e("[data-filtertoggletarget]").addClass("is-filtered"),e(".rotate90").removeClass("rotate90"),e("[data-filtertoggle]").removeClass("is-active"),e(".all[data-filtertoggle]").addClass("is-active")):(e(".all").removeClass("is-active"),e('[data-filtertoggletarget="'+t+'"]').toggleClass("is-filtered"),e(this).find(".icon").toggleClass("rotate90"),e(this).toggleClass("is-active"))})}}).call(this,a(0))},function(e,t,a){"use strict";(function(e){var i=a(4);t.a=function(){if(e(".shuffler").length){console.log("shuffler");var t=[],a=".shuffler-item",n=document.querySelector(".shuffler"),o=n.querySelector(a),s=new i.a(n,{itemSelector:a,sizer:o,staggerAmount:150,filterMode:i.a.FilterMode.ALL});e("[data-filter]").on("click",function(){var a=e(this).data("filter"),i=e(this).data("filtertype");if("multi"===i&&(e(this).toggleClass("is-active"),e(this).hasClass("is-active")?t.push(a):t=t.filter(function(e){return e!==a})),"single"===i){var n,o=e(this);o.hasClass("is-active")?(o.removeClass("is-active"),n=!1):(o.addClass("is-active"),n=!0),n?(o.closest(".filter").find(".is-active").not(e(this)).each(function(){var a=e(this).data("filter");console.log("remove: "+a),e(this).removeClass("is-active"),t=t.filter(function(e){return e!==a})}),t.push(e(this).data("filter"))):t=[],"veranstaltungen"===a||"karriereveranstaltungen"===a?e(".karriere-logos").removeClass("is-hidden"):e(".karriere-logos").addClass("is-hidden"),"karriereveranstaltungen"===a?e(".career-text").removeClass("is-hidden"):e(".career-text").addClass("is-hidden")}e(".filter-toggle.all, .filter-all").on("click",function(){console.log("all"),e(".filter-item.is-active").removeClass("is-active"),e(this).addClass("is-active"),t=[],s.filter(t)}),console.log(t),s.filter(t)}),("ontouchstart"in window||navigator.msMaxTouchPoints)&&e(".shuffler-item").on("click touch",function(){e(this).toggleClass("touch")})}}}).call(this,a(0))},function(e,t,a){"use strict";(function(e){t.a=function(){var t=e(".hero");if(t.length){var a=1.2*t.height(),i=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame,n=e(window),o=n.scrollTop(),s=function(){var t=n.scrollTop();o!==t?((o=t)<a?e(".hero:hidden").show():o>a&&e(".hero:visible").hide(),i(s)):i(s)};i&&s()}}}).call(this,a(0))},function(e,t,a){"use strict";a.r(t),function(e){var t=a(15),i=a(14),n=a(13),o=a(12),s=a(11),l=a(10),r=a(9),c=a(3),d=a.n(c),u=a(8),g=a.n(u),h=a(7),f=a(6),v=a(5),p=a(1);d.a.init({disable:"mobile",once:!0});var m;(m=!e("body").hasClass("single-screens"))&&g()({notify:{e:11,f:-4,o:-4,s:-2,c:-6},insecure:!0,unsupported:!0,api:5}),e(function(){w()});var w=function(){Object(o.a)(),Object(t.a)(),Object(n.a)(),Object(i.a)(),Object(s.a)(),Object(l.a)(),Object(r.a)(),Object(f.a)(),d.a.refresh(),Object(h.a)(),e(".single-anwalte .vita li").each(function(){var t=e(this).text();t.includes("joining")&&(console.log(t),e(this).text(t.replace("joining","joined")))}),function(){if(e(".auto-anchor").hasClass("enabled")){var t=0;e("post content").find("h2, h3, h4").each(function(){e(this).attr("data-n",t).addClass("anchor");var a=e(this).text(),i=e('<div class="column is-4"><a href="#" data-n="'+t+'" class="kompetenz-link">'+a+"</a></div>");e(i).appendTo(".kompetenzen-list"),t+=1}),e(".auto-anchor a").on("click",function(t){var a=e(this).data("n"),i=-1*(e(".top-bar").height()+20);return console.log(i),Object(p.a)('.anchor[data-n="'+a+'"]',{offset:i}),t.preventDefault(),!1})}}(),m?Object(v.a)():e("html").css({overflow:"hidden","overflow-y":"hidden","overflow-x":"hidden"})}}.call(this,a(0))},function(e,t,a){a(16),e.exports=a(26)},,,,,,,,,function(e,t){}]);
//# sourceMappingURL=main.bundle.js.map