(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{21:function(e,t,n){},41:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),i=n(15),s=n.n(i),o=(n(21),n(5)),r=n.n(o),l=n(16),j=n(3),d=n(6),b=n.n(d),p=(n(41),n(0)),u=function(e){var t=e.handleChange,n=e.onSubmit,c=e.pokemonName;return Object(p.jsxs)("div",{className:"navbar",children:[Object(p.jsx)("h1",{children:"PokePedia"}),Object(p.jsxs)("form",{children:[Object(p.jsx)("input",{type:"text",placeholder:"Enter a Pokemon's name",onChange:t,value:c||""}),Object(p.jsx)("button",{type:"submit",onClick:n})]})]})},m=(n(43),function(e){var t=e.pokemonData,n=e.pokemonType,c=t.name,a=t.height,i=t.weight,s=t.abilities,o=t.stats,r=t.sprites,l=n;return Object(p.jsxs)("div",{className:"info",children:[Object(p.jsx)("h2",{children:c}),Object(p.jsxs)("div",{className:"info__container",children:[Object(p.jsxs)("div",{className:"info__image",children:[Object(p.jsx)("img",{src:null===r||void 0===r?void 0:r.front_default,alt:"".concat(c," front image")}),Object(p.jsx)("img",{src:null===r||void 0===r?void 0:r.front_shiny,alt:"".concat(c," front image")}),Object(p.jsx)("img",{src:null===r||void 0===r?void 0:r.back_default,alt:"".concat(c," back image")}),Object(p.jsx)("img",{src:null===r||void 0===r?void 0:r.back_shiny,alt:"".concat(c," back image")})]}),Object(p.jsxs)("div",{className:"info__content",children:[Object(p.jsxs)("div",{className:"info__content__basic",children:[Object(p.jsxs)("p",{children:["Height: ",a,'"']}),Object(p.jsxs)("p",{children:["Weight: ",i," lb"]}),Object(p.jsxs)("p",{children:["Type: ",l]}),Object(p.jsx)("p",{children:"Abilities: "}),Object(p.jsx)("ul",{className:"info__content__basic__ability",children:null===s||void 0===s?void 0:s.map((function(e,t){return Object(p.jsx)("li",{children:e.ability.name},t)}))})]}),Object(p.jsx)("div",{className:"info__content__stats",children:null===o||void 0===o?void 0:o.map((function(e,t){return Object(p.jsxs)("p",{children:[e.stat.name,": ",e.base_stat]},t)}))})]})]})]})}),h=function(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)({}),s=Object(j.a)(i,2),o=s[0],d=s[1],h=Object(c.useState)(""),v=Object(j.a)(h,2),O=v[0],f=v[1];Object(c.useEffect)((function(){b.a.get("https://pokeapi.co/api/v2/pokemon/ditto").then((function(e){f(e.data.types[0].type.name),d(e.data)}))}),[]);var x=function(){var e=Object(l.a)(r.a.mark((function e(){var t,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="https://pokeapi.co/api/v2/pokemon/".concat(n),e.next=4,b.a.get(t);case 4:c=e.sent,f(c.data.types[0].type.name),d(c.data),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{className:"app",children:[Object(p.jsx)(u,{handleChange:function(e){a(e.target.value.toLowerCase())},onSubmit:function(e){e.preventDefault(),x(),a("")},pokemonName:n}),Object(p.jsx)(m,{pokemonData:o,pokemonType:O})]})};s.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(h,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.7861141f.chunk.js.map