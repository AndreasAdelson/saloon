"use strict";let videos=document.getElementsByClassName("gs-video-element"),YTAPI=!1,ytPlyaerInterval;for(let video of videos){var e,t=video.dataset.provider,a=video.dataset.overlay,o=video.dataset.lightbox,i=video.nextSibling;if("false"===a)switch(t){case"video":let s=document.body;s.addEventListener("mouseover",getGSHostedVideo(video),{once:!0}),s.addEventListener("touchmove",getGSHostedVideo(video),{once:!0}),s.addEventListener("scroll",getGSHostedVideo(video),{once:!0}),s.addEventListener("keydown",getGSHostedVideo(video),{once:!0});break;case"youtube":getGSYoutubeVideo(video);break;case"vimeo":getGSVimeoVideo(video)}else i.onclick=function(){let t=this.previousSibling,a=this.dataset.type,o=this.dataset.lightbox,i=this;if("true"!==o){switch(a){case"video":getGSHostedVideo(t);break;case"youtube":getGSYoutubeVideo(t);break;case"vimeo":getGSVimeoVideo(t)}this.remove()}else{let s=t.closest(".gs-video"),r=SimpleLightbox.open({content:t,elementClass:"gs-video-popup",beforeClose:function(o){lightboxCloseHanlder(a,t,r,e),i.parentNode.insertBefore(t,i)}});switch(a){case"video":getGSHostedVideo(t,s,r);break;case"youtube":getGSYoutubeVideo(t,r);break;case"vimeo":getGSVimeoVideo(t,r)}}}}function getGSHostedVideo(e,t="",a){let o=t||e.closest(".gs-video");if(o){let i="vidload"+o.getAttribute("id");if(!document.getElementById(i)){var s=document.createElement("video");s.setAttribute("class","gs-video-element"),s.setAttribute("src",e.dataset.src),s.setAttribute("id",i),s.setAttribute("poster",e.dataset.poster),s.autoplay="true"===e.dataset.autoplay,s.playsInline="true"===e.dataset.playsinline,s.controls="true"===e.dataset.controls,s.loop="true"===e.dataset.loop,s.muted="true"===e.dataset.mute,e.replaceWith(s),"true"===e.dataset.autoplay&&playHtml5Video(s,e,a)}}}function getGSVideoIDFromURL(e,t){var a=e.match(t);return a&&a[1]}function getGSYoutubeRegex(){return/^(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:youtu\.be\/|youtube\.com\/(?:(?:watch)?\?(?:.*&)?vi?=|(?:embed|v|vi|user)\/))([^?&"'>]+)/}function getGSYoutubeVideo(t,a){var o="https://www.youtube.com/embed/"+getGSVideoIDFromURL(t.dataset.src,getGSYoutubeRegex())+"?autoplay="+("true"===t.dataset.autoplay?"1":"0")+"&loop="+("true"===t.dataset.loop?"1":"0")+"&playsinline="+("true"===t.dataset.playsinline?"1":"0")+"&controls="+("true"===t.dataset.controls?"1":"0")+"&modestbranding="+("true"===t.dataset.modestbranding?"1":"0")+"&rel="+("true"===t.dataset.rel?"1":"0")+"&mute="+("true"===t.dataset.mute?"1":"0")+(t.dataset.start&&"false"===t.dataset.loop?"&start="+t.dataset.start:"")+(t.dataset.end&&"false"===t.dataset.loop?"&end="+t.dataset.end:"")+"&enablejsapi=1";t.setAttribute("allow","autoplay"),t.setAttribute("src",o),"true"==t.dataset.lightbox&&initYTapi(t,a,e)}function getGSVimeoRegex(){return/^(?:https?:\/\/)?(?:www|player\.)?(?:vimeo\.com\/)?(?:video\/|external\/)?(\d+)([^.?&#"'>]?)/}function getGSVimeoVideo(t,a){var o={id:getGSVideoIDFromURL(t.dataset.src,getGSVimeoRegex()),autoplay:"true"===t.dataset.autoplay?1:0,loop:"true"===t.dataset.loop?1:0,playsinline:"true"===t.dataset.playsinline?1:0,muted:"true"===t.dataset.mute?1:0,controls:"true"===t.dataset.controls?1:0,title:"true"===t.dataset.title?1:0,portrait:"true"===t.dataset.portrait?1:0,byline:"true"===t.dataset.byline?1:0};e=new Vimeo.Player(t,o),isNaN(t.dataset.start)||e.setCurrentTime(parseInt(t.dataset.start));let i,s=0;"true"==t.dataset.lightbox&&e.on("timeupdate",e=>{i=e.duration,s=e.seconds,a.elaspedTime=parseInt(s)<parseInt(i-5)?s:0})}function playHtml5Video(e,t,a){try{if(e){e.currentTime=t?.dataset?.start?t.dataset.start:0;let o=e.play();if(void 0!==o&&o.then(()=>{}).catch(t=>{e.muted=!0,e.play()}),"true"==t.dataset.lightbox){let i,s=0;e.ontimeupdate=e=>{s=e.target.duration,i=e?.target?.currentTime?parseInt(e.target.currentTime):0,a.elaspedTime=i<parseInt(s-5)?i:0}}}}catch(r){}}function initYTapi(e,t,a){if(!YTAPI){var o=document.createElement("script");o.src="//www.youtube.com/iframe_api";var i=document.getElementsByTagName("script")[0];i.parentNode.insertBefore(o,i)}new Promise(e=>{YTAPI?e():window.onYouTubeIframeAPIReady=function(){e(),YTAPI=!0}}).then(function(){(a=new YT.Player(e,{})).addEventListener("onStateChange",e=>{if(e.data===YT.PlayerState.PLAYING){let o=a?.playerInfo?.duration,i=0;ytPlyaerInterval=window.setInterval(()=>{i=a?.playerInfo?.currentTime?a.playerInfo.currentTime:0,t.elaspedTime=parseInt(i)<parseInt(o-5)?i:0},900,e.target)}else window.clearInterval(ytPlyaerInterval)})})}function lightboxCloseHanlder(e,t,a,o){let i=a?.elaspedTime?a.elaspedTime:0;switch(t.setAttribute("data-start",parseInt(i)),e){case"video":break;case"youtube":window.clearInterval(ytPlyaerInterval),t.removeAttribute("src");break;case"vimeo":o.destroy().then(function(){}).catch(e=>console.log(e))}}