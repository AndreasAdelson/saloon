"use strict";function GSEL_ajax_load(e){let t=e.currentTarget;if(t||(t=e.target),t.classList.contains("loaded"))return;var l=t.getAttribute("class").match(/load-block-([0-9]+)/)[1],l=parseInt(l),s=document.getElementsByClassName("gs-ajax-load-block-"+l);for(let a=0;a<s.length;a++)s[a].classList.add("gspreloader");let n=new XMLHttpRequest;n.open("POST",gsreusablevars.ajax_url,!0),n.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"),n.responseType="json",n.onload=function(){if(this.status>=200&&this.status<400){let e=this.response.data;t.classList.add("loaded");for(let l=0;l<s.length;l++){let a=s[l];if(a.classList.remove("gspreloader"),a.classList.contains("loaded"))continue;a.insertAdjacentHTML("beforeend",e),a.classList.add("loaded");let n=a.getElementsByClassName("gs-gsap-wrap");if(n.length>0)for(let r=0;r<n.length;r++)GSinit(n[r]);let o=a.querySelectorAll("[data-gsapinit]");if(o.length>0)for(let i=0;i<o.length;i++)GSinit(o[i]);let c=a.getElementsByClassName("gs-prlx-mouse");if(c.length>0)for(let g=0;g<c.length;g++)GSmousemoveinit(c[g]);let d=a.getElementsByClassName("gs-flip-wrap");if(d.length>0)for(let f=0;f<d.length;f++)GSFlipinit(d[f]);let u=a.getElementsByClassName("gs-sequencer-wrap");if(u.length>0)for(let h=0;h<u.length;h++){let m=u[h],p=JSON.parse(m.getAttribute("data-images"));p.length>0&&(p.forEach(e=>{GSpreloadImage(e)}),GSSeqinit(m))}let E=a.getElementsByClassName("gs-reveal-wrap");if(E.length>0)for(let $=0;$<E.length;$++)GSrevealinit(E[$]);let v=a.getElementsByClassName("gspb-flipfilters");if(v.length>0)for(let L=0;L<v.length;L++){let b=v[L],y=b.querySelector(".gspb-checkbox-filter-all"),w=gsap.utils.toArray(b.querySelectorAll(".gspb-checkbox-filter-item")),k=gsap.utils.toArray(b.querySelectorAll(".gs-flipfilter"));w.forEach(e=>e.addEventListener("click",function(e){GSFlipFilters(k,w,y)})),y.addEventListener("click",function(e){w.forEach(e=>e.checked=y.checked),GSFlipFilters(k,w,y)})}"undefined"!=typeof ScrollTrigger&&ScrollTrigger.refresh()}}},n.onerror=function(){},n.send("action=gspb_el_reusable_load&security="+gsreusablevars.reusablenonce+"&post_id="+l)}window.onload=function(){let e=document.getElementsByClassName("gs-el-onhover");for(let t=0;t<e.length;t++){let l=e[t];document.documentElement.clientWidth>1024?l.addEventListener("mouseenter",function(e){GSEL_ajax_load(e)}):l.addEventListener("click",function(e){e.preventDefault(),GSEL_ajax_load(e)})}let s=document.getElementsByClassName("gs-el-onclick");for(let a=0;a<s.length;a++)s[a].addEventListener("click",function(e){e.preventDefault(),GSEL_ajax_load(e)})};const gsELLoadonviewObserves=document.getElementsByClassName("gs-el-onview");let gselobserver=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&GSEL_ajax_load(e)})});for(let itemobserve of gsELLoadonviewObserves)gselobserver.observe(itemobserve);