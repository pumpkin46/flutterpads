import{a as p,R as f}from"./chunk-C37GKA54-Bp-yZdMk.js";import"./index-BsBXEE0m.js";function x(i,{insertAt:t}={}){if(typeof document>"u")return;const n=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style");e.type="text/css",t==="top"&&n.firstChild?n.insertBefore(e,n.firstChild):n.appendChild(e),e.styleSheet?e.styleSheet.cssText=i:e.appendChild(document.createTextNode(i))}x(`@keyframes fillout-embed-loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fillout-embed-popup-container {
  padding: 40px 80px;
}
.fillout-embed-popup-iframe {
  border-radius: 10px;
  height: 100%;
}
.fillout-embed-popup-close {
  position: absolute;
  top: -15px;
  right: -15px;
  background: #171717;
}
.fillout-embed-popup-close:hover {
  background: #272727;
}
.fillout-embed-slider-main {
  position: relative;
}
.fillout-embed-slider-close {
  padding: 20px 4px;
}
@media screen and (max-width: 480px) {
  .fillout-embed-popup-container {
    padding: 0;
  }
  .fillout-embed-popup-main {
    display: flex;
    flex-flow: column;
    width: 100% !important;
    height: 100% !important;
  }
  .fillout-embed-popup-iframe {
    border-radius: 0;
    height: unset;
    flex-grow: 1;
  }
  .fillout-embed-popup-close {
    position: unset;
    top: 0;
    right: 0;
    margin: 4px 8px 4px auto;
  }
  .fillout-embed-slider-main {
    flex-flow: column-reverse !important;
    position: unset;
    left: 0 !important;
    right: 0 !important;
  }
  .fillout-embed-slider-iframe {
    width: 100% !important;
  }
  .fillout-embed-slider-close {
    padding: 6px;
    border-radius: 50% !important;
    margin: 4px 8px 4px auto;
  }
}
`);var E="https://embed.fillout.com",y=()=>`${Math.floor(Math.random()*9e13)+1e13}`,w=({filloutId:i,domain:t,inheritParameters:n,parameters:e,dynamicResize:a})=>{const[l,s]=p.useState(),[o,d]=p.useState();if(p.useEffect(()=>{s(new URLSearchParams(window.location.search)),d(y())},[]),!l||!o)return;const c=t?`https://${t}`:E,r=new URL(`${c}/t/${encodeURIComponent(i)}`);if(n&&l)for(const[m,u]of l.entries())r.searchParams.set(m,u);if(e)for(const[m,u]of Object.entries(e))u&&r.searchParams.set(m,u);return r.searchParams.set("fillout-embed-id",o),a&&r.searchParams.set("fillout-embed-dynamic-resize","true"),{iframeUrl:r.toString(),origin:c,embedId:o}},S=()=>f.createElement("div",{style:{border:"solid 2px #aaa",borderBottomColor:"white",borderRadius:"50%",width:32,height:32,animation:"fillout-embed-loading 1s infinite linear"}}),h=(i,t,n,e)=>{const a=!(e!=null&&e.disabled);p.useEffect(()=>{if(i&&a){const l=location.href.includes("FILLOUT_EMBED_DEBUG"),s=o=>{try{o.origin===i.origin&&o.data.embedId===i.embedId&&o.data.type===t&&(l&&console.log(["fillout embed MESSAGE",t,o.data]),n(o.data))}catch{}};return l&&console.log(["fillout embed MOUNT",t]),window.addEventListener("message",s),()=>{l&&console.log(["fillout embed UNMOUNT",t]),window.removeEventListener("message",s)}}},[i,t,n,a])},U=(i,t)=>{h(i,"form_init",n=>{var e;return(e=t.onInit)==null?void 0:e.call(t,n.submissionUuid)},{disabled:!t.onInit}),h(i,"page_change",n=>{var e;return(e=t.onPageChange)==null?void 0:e.call(t,n.submissionUuid,n.stepId)},{disabled:!t.onPageChange}),h(i,"form_submit",n=>{var e;return(e=t.onSubmit)==null?void 0:e.call(t,n.submissionUuid)},{disabled:!t.onSubmit})},v=({filloutId:i,domain:t,inheritParameters:n,parameters:e,dynamicResize:a,onInit:l,onPageChange:s,onSubmit:o})=>{const[d,c]=p.useState(!0),r=w({filloutId:i,domain:t,inheritParameters:n,parameters:e,dynamicResize:a});U(r,{onInit:l,onPageChange:s,onSubmit:o});const[m,u]=p.useState();return h(r,"form_resized",g=>{const b=g.size;typeof b=="number"&&u(b)},{disabled:!a}),f.createElement("div",{className:"fillout-standard-embed",style:{height:a?typeof m=="number"?m:256:"100%",transition:a?"height 150ms ease":void 0}},d&&f.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%",minHeight:256}},f.createElement(S,null)),r&&f.createElement("iframe",{src:r.iframeUrl,allow:"microphone; camera; geolocation",title:"Embedded Form",onLoad:()=>c(!1),style:{width:d?0:"100%",height:d?0:"100%",opacity:d?0:1,borderRadius:10,border:0,minHeight:256}}))};export{v as S};
