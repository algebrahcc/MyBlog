import{d as p,u as _,l as k,a as f,w as x,r as b,o as a,c as r,e,t as n,f as t,F as h,m as v,n as y,b as N,p as C,q as w}from"./app-fff56513.js";const V=e("div",{"text-4xl":""},[e("div",{"i-carbon-pedestrian":"","inline-block":""})],-1),g={"text-sm":"","opacity-75":""},B={key:0,"mt-4":"","text-sm":""},L={"opacity-75":""},F=p({__name:"[name]",props:{name:null},setup(u){const c=u,m=_(),i=k(),{t:o}=f();return x(()=>{i.setNewName(c.name)}),(R,l)=>{const d=b("RouterLink");return a(),r("div",null,[V,e("p",null,n(t(o)("intro.hi",{name:c.name})),1),e("p",g,[e("em",null,n(t(o)("intro.dynamic-route")),1)]),t(i).otherNames.length?(a(),r("div",B,[e("span",L,n(t(o)("intro.aka"))+":",1),e("ul",null,[(a(!0),r(h,null,v(t(i).otherNames,s=>(a(),r("li",{key:s},[N(d,{to:`/hi/${s}`,replace:""},{default:C(()=>[w(n(s),1)]),_:2},1032,["to"])]))),128))])])):y("",!0),e("div",null,[e("button",{m:"3 t6","text-sm":"",btn:"",onClick:l[0]||(l[0]=s=>t(m).back())},n(t(o)("button.back")),1)])])}}});export{F as default};
