import{v as f,n as u}from"./vendor.41c6d5da.js";const p=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}};p();function g(d={}){const{immediate:o=!1,onNeedRefresh:s,onOfflineReady:r,onRegistered:e,onRegisterError:t}=d;let n,l;const c=async(i=!0)=>{i&&(n==null||n.addEventListener("controlling",a=>{a.isUpdate&&window.location.reload()})),l&&l.waiting&&await u(l.waiting,{type:"SKIP_WAITING"})};if("serviceWorker"in navigator){n=new f("/sw.js",{scope:"/"}),n.addEventListener("activated",i=>{i.isUpdate||r==null||r()});{const i=()=>{s==null||s()};n.addEventListener("waiting",i),n.addEventListener("externalwaiting",i)}n.register({immediate:o}).then(i=>{l=i,e==null||e(i)}).catch(i=>{t==null||t(i)})}return c}const m=g({onNeedRefresh:()=>{UIkit.modal.confirm("\u662F\u5426\u66F4\u65B0\u7CFB\u7EDF",{labels:{ok:"\u786E\u8BA4",cancel:"\u53D6\u6D88"}}).then(function(){m()},function(){console.log("\u53D6\u6D88\u66F4\u65B0.")})}});var h=UIkit;export{h as U};
