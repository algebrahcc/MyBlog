import{_ as o,r as s,o as l,c,g as i,d,w as r,h as n,a as t,b as e}from"./app-4af1fca6.js";const p="/assets/1-4.figure01-a02ed4bb.png",u={},h=n(`<h1 id="第-1-章-数据类型" tabindex="-1"><a class="header-anchor" href="#第-1-章-数据类型" aria-hidden="true">#</a> 第 1 章 数据类型</h1><h2 id="_1-1-深入浅出课程介绍" tabindex="-1"><a class="header-anchor" href="#_1-1-深入浅出课程介绍" aria-hidden="true">#</a> 1-1 深入浅出课程介绍</h2><p>略</p><h2 id="_1-2-六种数据类型" tabindex="-1"><a class="header-anchor" href="#_1-2-六种数据类型" aria-hidden="true">#</a> 1-2 六种数据类型</h2><p>原始类型（基本类型）：</p><ul><li><code>number</code></li><li><code>string</code></li><li><code>boolean</code></li><li><code>null</code></li><li><code>undefined</code></li></ul><p>除此之外，JavaScript 还有一种对象类型（复合类型）<code>object</code>。</p><p><code>object</code> 包含以下类型：</p><ul><li><code>Function</code></li><li><code>Array</code></li><li><code>Date</code></li><li>...</li></ul><h2 id="_1-3-隐式转换" tabindex="-1"><a class="header-anchor" href="#_1-3-隐式转换" aria-hidden="true">#</a> 1-3 隐式转换</h2><p>关于<code>+</code>和<code>-</code>：<br><code>+</code>隐式转为字符串，<code>-</code>隐式转换为数字。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string">&#39;37&#39;</span> <span class="token operator">-</span> <span class="token number">7</span> <span class="token comment">// 30</span>
<span class="token string">&#39;37&#39;</span> <span class="token operator">+</span> <span class="token number">7</span> <span class="token comment">// 377</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>因此可以巧用<code>+</code>和<code>-</code>转换数据类型，比如使用<code>- 0</code>（减 0），转换为数字，使用<code>+ &#39;&#39;</code>（加空字符串）转换为字符串。</p><p>因此可以巧用<code>+</code>和<code>-</code>转换数据类型，比如使用<code>- 0</code>（减 0），转换为数字，使用<code>+ &#39;&#39;</code>（加空字符串）转换为字符串。</p><h2 id="_1-4-包装对象" tabindex="-1"><a class="header-anchor" href="#_1-4-包装对象" aria-hidden="true">#</a> 1-4 包装对象</h2><p><a href="#_1-2-%E5%85%AD%E7%A7%8D%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B">1-2 六种数据类型</a> 中介绍的 5 种基本类型和一种对象类型，其中 5 中基本类型都有其对应的包装类型。</p><p>当把一个基本类型作为对象使用时，JavaScript 会尝试将基本类型转换为包装对象，想定于 new 了一个临时对象，对象的值为基本类型的值。</p><p>使用基本对象访问对象的方法后，这个临时对象会被销毁掉，所以再次访问对象的方法时就会变成 undefined。</p><p>如下图：<br><img src="`+p+'" alt="图片1" loading="lazy"></p><div class="hint-container warning"><p class="hint-container-title">Note</p><p>图片名中不能出现<code>#</code>，否则会会有问题：</p><ol><li>Markdown 插入图片的方式，不能显示图片</li><li>HTML 插入图片的方式会报错。</li></ol></div><h2 id="_1-5-类型检查" tabindex="-1"><a class="header-anchor" href="#_1-5-类型检查" aria-hidden="true">#</a> 1-5 类型检查</h2><p>JavaScript 中检查类型的方法有很多，比如：</p><ul><li><p><code>typeof</code></p></li><li><p><code>instanceof</code></p></li><li><p><code>Object.prototype.toString</code></p></li><li><p><code>constructor</code></p><p>注意：使用 textlint 时，报<code>TypeError: entry.split is not a function</code>，所以上面加了引号。</p></li><li><p>duck type</p></li></ul><h3 id="typeof" tabindex="-1"><a class="header-anchor" href="#typeof" aria-hidden="true">#</a> <code>typeof</code></h3><p><code>typeof</code>返回一个字符串，它非常适合函数对象和基本类型的判断。</p><p>比如：</p><table><thead><tr><th style="text-align:right;">命令</th><th style="text-align:left;">结果</th></tr></thead><tbody><tr><td style="text-align:right;">typeof 100</td><td style="text-align:left;">&quot;number&quot;</td></tr><tr><td style="text-align:right;">typeof true</td><td style="text-align:left;">&quot;boolean&quot;</td></tr><tr><td style="text-align:right;">typeof function() {}</td><td style="text-align:left;">&quot;function&quot;</td></tr><tr><td style="text-align:right;">typeof Function</td><td style="text-align:left;">&quot;function&quot;</td></tr><tr><td style="text-align:right;">typeof undefined</td><td style="text-align:left;">&quot;undefined&quot;</td></tr><tr><td style="text-align:right;">typeof null</td><td style="text-align:left;">&quot;object&quot;</td></tr><tr><td style="text-align:right;">typeof new Object()</td><td style="text-align:left;">&quot;object&quot;</td></tr><tr><td style="text-align:right;">typeof [1, 2]</td><td style="text-align:left;">&quot;object&quot;</td></tr><tr><td style="text-align:right;">typeof NaN</td><td style="text-align:left;">&quot;number&quot;</td></tr></tbody></table><h3 id="instanceof" tabindex="-1"><a class="header-anchor" href="#instanceof" aria-hidden="true">#</a> <code>instanceof</code></h3><p><code>instanceof</code>常用于对象类型的判断，它是基于<code>原型链</code>的形式去判断的操作符。</p><p>它期望左操作树是一个对象，如果不是对象而是基本类型的话，直接返回 false。</p><table><thead><tr><th style="text-align:right;">命令</th><th style="text-align:left;">结果</th></tr></thead><tbody><tr><td style="text-align:right;">1 instanceof Number</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:right;">true instanceof Boolean</td><td style="text-align:left;">false</td></tr></tbody></table><p>它期望右操作树是一个函数对象，或函数构造器，如果不是的话就会跑出一个 TypeError 异常。</p><table><thead><tr><th style="text-align:right;">命令</th><th style="text-align:left;">结果</th></tr></thead><tbody><tr><td style="text-align:right;">[1, 2] instanceof Array</td><td style="text-align:left;">true</td></tr><tr><td style="text-align:right;">new Object() instanceof Array</td><td style="text-align:left;">false</td></tr></tbody></table><p><code>instanceof</code>的大概原理就是它会判断左边的操作树的对象的原型链上，是否有右边的构造函数的 prototype 属性。</p><p>例子：</p>',35),y=t("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[t("pre",{class:"language-javascript"},[t("code",null,[t("span",{class:"token keyword"},"function"),e(),t("span",{class:"token function"},"Person"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token punctuation"},"{"),t("span",{class:"token punctuation"},"}"),e(`
`),t("span",{class:"token keyword"},"function"),e(),t("span",{class:"token function"},"Student"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token punctuation"},"{"),t("span",{class:"token punctuation"},"}"),e(`
`),t("span",{class:"token class-name"},"Student"),t("span",{class:"token punctuation"},"."),e("prototype "),t("span",{class:"token operator"},"="),e(),t("span",{class:"token keyword"},"new"),e(),t("span",{class:"token class-name"},"Person"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),e(`
`),t("span",{class:"token class-name"},"Student"),t("span",{class:"token punctuation"},"."),e("prototype"),t("span",{class:"token punctuation"},"."),e("constructor "),t("span",{class:"token operator"},"="),e(` Student
`),t("span",{class:"token keyword"},"var"),e(" bosn "),t("span",{class:"token operator"},"="),e(),t("span",{class:"token keyword"},"new"),e(),t("span",{class:"token class-name"},"Student"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),e(`
console`),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"log"),t("span",{class:"token punctuation"},"("),e("bosn "),t("span",{class:"token keyword"},"instanceof"),e(),t("span",{class:"token class-name"},"Student"),t("span",{class:"token punctuation"},")"),e(`
`),t("span",{class:"token keyword"},"var"),e(" one "),t("span",{class:"token operator"},"="),e(),t("span",{class:"token keyword"},"new"),e(),t("span",{class:"token class-name"},"Person"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),e(`
console`),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"log"),t("span",{class:"token punctuation"},"("),e("one "),t("span",{class:"token keyword"},"instanceof"),e(),t("span",{class:"token class-name"},"Person"),t("span",{class:"token punctuation"},")"),e(`

console`),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"log"),t("span",{class:"token punctuation"},"("),e("one "),t("span",{class:"token keyword"},"instanceof"),e(),t("span",{class:"token class-name"},"Student"),t("span",{class:"token punctuation"},")"),e(`
console`),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"log"),t("span",{class:"token punctuation"},"("),e("bosn "),t("span",{class:"token keyword"},"instanceof"),e(),t("span",{class:"token class-name"},"Person"),t("span",{class:"token punctuation"},")"),e(`
`)])]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"})])],-1),f=n('<p>打开开发者工具看结果，或者打开 Codepen 在线调试。</p><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>Caution!<br> 不同 window 或 iframe 间的对象类型检查不能使用 instanceof!</p></div><h3 id="object-prototype-tostring" tabindex="-1"><a class="header-anchor" href="#object-prototype-tostring" aria-hidden="true">#</a> <code>Object.prototype.toString</code></h3><table><thead><tr><th style="text-align:right;">命令</th><th style="text-align:left;">结果</th></tr></thead><tbody><tr><td style="text-align:right;">Object.prototype.toString.apply([])</td><td style="text-align:left;">&quot;[object Array]&quot;</td></tr><tr><td style="text-align:right;">Object.prototype.toString.apply(function(){})</td><td style="text-align:left;">&quot;[object Function]&quot;</td></tr><tr><td style="text-align:right;">Object.prototype.toString.apply(null)</td><td style="text-align:left;">&quot;[object Null]&quot;</td></tr><tr><td style="text-align:right;">Object.prototype.toString.apply(undefined)</td><td style="text-align:left;">&quot;[object Undefined]&quot;</td></tr></tbody></table><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>IE6/7/8 Object.prototype.toString.apply(null)返回&quot;[object Object]&quot;</p></div><h3 id="类型检查小结" tabindex="-1"><a class="header-anchor" href="#类型检查小结" aria-hidden="true">#</a> 类型检查小结</h3><ul><li><code>typeof</code><br> 适合基本类型及 function 检测，遇到 null 失效。</li><li><code>Object.prototype.toString</code><br> 通过 Object.prototype.toString 拿到，适合内置对象和基本类型，遇到 null 和 undefined 失效（IE6/7/8 等返回[object Object]）。</li><li><code>instanceof</code><br> 适合自定义对象，也可以用来检测原生对象，在不同 iframe 和 window 间检测时失效。</li></ul>',7);function g(b,k){const a=s("CodeDemo");return l(),c("div",null,[i(" markdownlint-disable MD051 "),h,d(a,{id:"code-demo-325",type:"normal",title:"instanceof%20demo",code:"eJx9jkEKwjAQRa8SsqqbHEDwDoLbbGqcSqX8KclEkdK7m2iMBUuXM/Penz/pW9B73UU46RnqSD4wmp2aZou6PUm8EKSsy2RGz8LyHEkdFOhR3RXCOEYQH52wT3S5W9xbr84cUBLqH4ss8EBm4GvzJvoU0MIRd18sUdln/BdY2vm+kD9QYjap34utIjVLzy+I5XpP"},{default:r(()=>[y]),_:1}),f])}const x=o(u,[["render",g],["__file","chapter01.html.vue"]]);export{x as default};