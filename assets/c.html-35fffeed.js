import{_ as n,X as s,Y as a,a3 as e}from"./framework-4fd9cd42.js";const t={},i=e(`<h1 id="c语言笔记" tabindex="-1"><a class="header-anchor" href="#c语言笔记" aria-hidden="true">#</a> C语言笔记</h1><h1 id="待补充" tabindex="-1"><a class="header-anchor" href="#待补充" aria-hidden="true">#</a> 待补充...</h1><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">// 预编译 指在编译时包含stdio.h这个头文件</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token comment">// 主函数 从main函数执行</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \\n 换行符</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Hello, World!\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// \\\\ 反斜杠</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Hello, World!\\\\&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// \\&quot; 双引号</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Hello, World!\\&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// \\t 制表符</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Hello, World!\\t&#39;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),c=[i];function o(l,p){return s(),a("div",null,c)}const d=n(t,[["render",o],["__file","c.html.vue"]]);export{d as default};
