import{_ as s,o as a,c as n,Q as p}from"./chunks/framework.a84cb14f.js";const _=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"api/is/isEmptyArray.md","filePath":"api/is/isEmptyArray.md"}'),l={name:"api/is/isEmptyArray.md"},e=p(`<h3 id="isemptyarray" tabindex="-1">isEmptyArray <a class="header-anchor" href="#isemptyarray" aria-label="Permalink to &quot;isEmptyArray&quot;">​</a></h3><ul><li>判断传入的参数是否为数组</li></ul><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { isEmptyArray } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;lexi-utils&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#B392F0;">isEmptyArray</span><span style="color:#E1E4E8;">([]); </span><span style="color:#6A737D;">//true</span></span>
<span class="line"><span style="color:#B392F0;">isEmptyArray</span><span style="color:#E1E4E8;">([</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">]); </span><span style="color:#6A737D;">//false</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { isEmptyArray } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;lexi-utils&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6F42C1;">isEmptyArray</span><span style="color:#24292E;">([]); </span><span style="color:#6A737D;">//true</span></span>
<span class="line"><span style="color:#6F42C1;">isEmptyArray</span><span style="color:#24292E;">([</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">]); </span><span style="color:#6A737D;">//false</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,3),r=[e];function t(o,i,c,y,E,m){return a(),n("div",null,r)}const u=s(l,[["render",t]]);export{_ as __pageData,u as default};