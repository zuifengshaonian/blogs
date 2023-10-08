import{_ as d}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as p,c as v,d as l,w as s,a as n,b as e,f as c}from"./app-2fcafaad.js";const m={},h=c(`<h1 id="工具集" tabindex="-1"><a class="header-anchor" href="#工具集" aria-hidden="true">#</a> 工具集</h1><h2 id="jenv" tabindex="-1"><a class="header-anchor" href="#jenv" aria-hidden="true">#</a> jenv</h2><p>jEnv的作用<br> 简单理解就是Java环境管理器、可以根据项目情况切换java版本</p><h3 id="_1、安装" tabindex="-1"><a class="header-anchor" href="#_1、安装" aria-hidden="true">#</a> 1、安装</h3><div class="language-Homebrew line-numbers-mode" data-ext="Homebrew"><pre class="language-Homebrew"><code>brew install jenv
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2、环境配置" tabindex="-1"><a class="header-anchor" href="#_2、环境配置" aria-hidden="true">#</a> 2、环境配置</h3><p>mac 根据自己使用的终端自行配置</p>`,7),u=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token builtin class-name"},"echo"),e(),n("span",{class:"token string"},`'export PATH="$HOME/.jenv/bin:$PATH"'`),e(),n("span",{class:"token operator"},">>"),e(` ~/.bash_profile
`),n("span",{class:"token builtin class-name"},"echo"),e(),n("span",{class:"token string"},`'eval "$(jenv init -)"'`),e(),n("span",{class:"token operator"},">>"),e(` ~/.bash_profile
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),b=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token builtin class-name"},"echo"),e(),n("span",{class:"token string"},`'export PATH="$HOME/.jenv/bin:$PATH"'`),e(),n("span",{class:"token operator"},">>"),e(` ~/.zshrc
`),n("span",{class:"token builtin class-name"},"echo"),e(),n("span",{class:"token string"},`'eval "$(jenv init -)"'`),e(),n("span",{class:"token operator"},">>"),e(` ~/.zshrc
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),k=c(`<p>以 <em>zsh</em> 为例</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 打开 .zshrc 文件</span>
<span class="token function">vim</span> ~/.zshrc
<span class="token comment"># 进去编辑模式 </span>
i
<span class="token comment"># 添加如下内容</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token string">&quot;<span class="token environment constant">$HOME</span>/.jenv/bin:<span class="token environment constant">$PATH</span>&quot;</span>
<span class="token builtin class-name">eval</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span>jenv init -<span class="token variable">)</span></span>&quot;</span>
<span class="token comment"># 退出编辑模式</span>
esc
<span class="token comment"># 保存并退出文件</span>
:wq
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),_={href:"https://github.com/jenv/jenv",target:"_blank",rel:"noopener noreferrer"};function g(f,x){const o=t("CodeTabs"),r=t("ExternalLinkIcon");return p(),v("div",null,[h,l(o,{id:"19",data:[{id:"bash"},{id:"zsh"}]},{title0:s(({value:a,isActive:i})=>[e("bash")]),title1:s(({value:a,isActive:i})=>[e("zsh")]),tab0:s(({value:a,isActive:i})=>[u]),tab1:s(({value:a,isActive:i})=>[b]),_:1}),k,n("p",null,[e("参考文献："),n("a",_,[e("Jenv"),l(r)])])])}const A=d(m,[["render",g],["__file","1.html.vue"]]);export{A as default};