import{_ as s,o as a,c as e,Q as l}from"./chunks/framework.a84cb14f.js";const E=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"api/tools/getUrlParamsByKey.md","filePath":"api/tools/getUrlParamsByKey.md"}'),n={name:"api/tools/getUrlParamsByKey.md"},o=l(`<h3 id="geturlparamsbykey" tabindex="-1">getUrlParamsByKey <a class="header-anchor" href="#geturlparamsbykey" aria-label="Permalink to &quot;getUrlParamsByKey&quot;">​</a></h3><ul><li>获取字符串制定key的值（一般可用于解析url中的参数）</li></ul><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> {getUrlParamsByKey} </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;lexi-utils&#39;</span></span>
<span class="line"><span style="color:#B392F0;">getUrlParamsByKey</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;a=&amp;b=2&#39;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&#39;a&#39;</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> {getUrlParamsByKey} </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;lexi-utils&#39;</span></span>
<span class="line"><span style="color:#6F42C1;">getUrlParamsByKey</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;a=&amp;b=2&#39;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&#39;a&#39;</span><span style="color:#24292E;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,3),t=[o];function r(p,c,i,y,m,d){return a(),e("div",null,t)}const u=s(n,[["render",r]]);export{E as __pageData,u as default};