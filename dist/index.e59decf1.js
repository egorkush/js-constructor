function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},s={},o=n.parcelRequire5634;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in s){var t=s[e];delete s[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){s[e]=t},n.parcelRequire5634=o),o.register("dRo73",(function(t,n){var r,s;e(t.exports,"register",(()=>r),(e=>r=e)),e(t.exports,"resolve",(()=>s),(e=>s=e));var o={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)o[t[n]]=e[t[n]]},s=function(e){var t=o[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o("dRo73").register(JSON.parse('{"kh1xT":"index.e59decf1.js","dtERz":"image.ddba245d.jpg","9yGhT":"index.21b42353.css"}'));var i;i=new URL(o("dRo73").resolve("dtERz"),import.meta.url).toString();const a=(e,t)=>`<div class="row" style="${t}">${e}</div>`,l=e=>`<div class="col-sm">${e}</div>`,c=(e={})=>{if("string"==typeof e)return e;return Object.keys(e).map((t=>`${t}:${e[t]}`)).join(";")};function d(e){return`\n        <form name="${e}">\n            <h5>${e}</h5>\n                <div class="form-group">\n                    <input class="form-control form-control-sm" name="value" placeholder="value">\n                </div>\n                <div class="form-group">\n                    <input class="form-control form-control-sm" name="styles" placeholder="styles">\n                </div>\n                <button type="submit" class="btn btn-primary btn-sm">Add</button>\n        </form>\n        <hr />\n    `}class u{constructor(e,t){this.value=e,this.options=t}toHTML(){throw new Error("Method toHTML must be implemented")}}class p extends u{constructor(e,t){super(e,t)}toHTML(){const{tag:e="h1",styles:t}=this.options;return a(l(`<${e}>${this.value}</${e}>`),c(t))}}class h extends u{constructor(e,t){super(e,t)}toHTML(){return a(l(`<p>${this.value}</p>`),c(this.options.styles))}}const f=[new p("Website builder on pure JavaScript",{tag:"h2",styles:{background:"radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",color:"white",padding:"1.5rem","text-align":"center"}}),new class extends u{constructor(e,t){super(e,t)}toHTML(){const{styles:e,imageStyles:t,alt:n=""}=this.options;return a(`<img src="${this.value}" alt="${n}" style="${c(t)}">`,c(e))}}(t(i),{styles:{padding:"2rem 0",display:"flex","justify-content":"center"},imageStyles:{width:"500px",height:"auto",padding:"0"},alt:"This is image"}),new class extends u{constructor(e,t){super(e,t)}toHTML(){const e=this.value.map(l).join("");return a(e,c(this.options.styles))}}(["Application in pure javascript without the use of libraries","Learn how solid and oop principles work in javascript in one course","Javascript is easy, interesting. Learn how to create any UI with your own hands"],{styles:{background:"linear-gradient(to bottom, #8e2de2, #4a00e0)",padding:"2rem",color:"#fff","font-weight":"bold"}}),new h('Cool videos and  JavaScript lessons here: <a href="https://www.youtube.com/@VladilenMinin" target="_blank"></a> Here you will find comprehensive information on any aspect of the language, any framework such as React, Vue, Angular, Node, Svelte, Express, Next, Nuxt and much more. Join in!',{styles:{background:"pink",padding:"1rem","font-weight":"bold"}})];class m{constructor(e){this.$el=document.querySelector(e)}render(e){this.$el.innerHTML="",e.forEach((e=>{this.$el.insertAdjacentHTML("beforeend",e.toHTML())}))}}class g{constructor(e,t){this.$el=document.querySelector(e),this.update=t,this.init()}init(){this.$el.insertAdjacentHTML("afterbegin",this.template),this.$el.addEventListener("submit",this.add.bind(this))}get template(){return[d("text"),d("title")].join("")}add(e){e.preventDefault();const t=e.target.name,n=e.target.value.value,r=e.target.styles.value,s="text"===t?new h(n,{styles:r}):new p(n,{styles:r});this.update(s),e.target.value.value="",e.target.styles.value=""}}new class{constructor(e){this.model=e}init(){const e=new m("#site");e.render(this.model);new g("#panel",(t=>{this.model.push(t),e.render(this.model)}))}}(f).init();