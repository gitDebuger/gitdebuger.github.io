import{_ as n,c as a,e,o as l}from"./app-BPAT15QX.js";const i={};function p(c,s){return l(),a("div",null,s[0]||(s[0]=[e(`<h1 id="lab0实验报告" tabindex="-1"><a class="header-anchor" href="#lab0实验报告"><span>Lab0实验报告</span></a></h1><h2 id="思考题" tabindex="-1"><a class="header-anchor" href="#思考题"><span>思考题</span></a></h2><h3 id="thinking-0-1" tabindex="-1"><a class="header-anchor" href="#thinking-0-1"><span>Thinking 0.1</span></a></h3><p>思考下列有关Git的问题。</p><p>依次执行命令：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token function">touch</span> README.txt</span>
<span class="line"><span class="token function">git</span> status <span class="token operator">&gt;</span> Untracked.txt</span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token string">&quot;This a test file&quot;</span> <span class="token operator">&gt;</span> README.txt</span>
<span class="line"><span class="token function">git</span> <span class="token function">add</span> <span class="token parameter variable">-A</span></span>
<span class="line"><span class="token function">git</span> status <span class="token operator">&gt;</span> Stage.txt</span>
<span class="line"><span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;student ID: 22371264&quot;</span></span>
<span class="line"><span class="token function">cat</span> Untracked.txt</span>
<span class="line"><span class="token function">cat</span> Stage.txt</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>两次运行，文件 <code>README.txt</code> 分别位于**“未跟踪的文件”<strong>和</strong>“要提交的变更”**标签下。</p><p><img src="https://github.com/gitDebuger/2024-os-lab/blob/documents/pic/lab0-1.png?raw=true" alt="lab0-1"></p><p>依次执行命令：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token builtin class-name">echo</span> <span class="token string">&quot;new content<span class="token entity" title="\\n">\\n</span>&quot;</span> <span class="token operator">&gt;&gt;</span> README.txt</span>
<span class="line"><span class="token function">git</span> status <span class="token operator">&gt;</span> Modified.txt</span>
<span class="line"><span class="token function">cat</span> Modified.txt</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>本次运行，文件 <code>README.txt</code> 位于**“尚未暂存以备提交的变更”**标签下。</p><p>因为该文件已经被跟踪过，所以不会位于未跟踪标签下，而是相对于上次提交发生了变化，所以会位于已变更标签下。</p><p><img src="https://github.com/gitDebuger/2024-os-lab/blob/documents/pic/lab0-2.png?raw=true" alt="lab0-2"></p><h3 id="thinking-0-2" tabindex="-1"><a class="header-anchor" href="#thinking-0-2"><span>Thinking 0.2</span></a></h3><p>对应的命令如下：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token comment"># add the file</span></span>
<span class="line"><span class="token function">git</span> <span class="token function">add</span></span>
<span class="line"><span class="token comment"># stage the file</span></span>
<span class="line"><span class="token function">git</span> <span class="token function">add</span></span>
<span class="line"><span class="token comment"># commit</span></span>
<span class="line"><span class="token function">git</span> commit</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="thinking-0-3" tabindex="-1"><a class="header-anchor" href="#thinking-0-3"><span>Thinking 0.3</span></a></h3><p>使用的命令如下：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token comment"># 代码文件 print.c 被错误删除</span></span>
<span class="line"><span class="token function">git</span> checkout print.c</span>
<span class="line"><span class="token comment"># 或者</span></span>
<span class="line"><span class="token function">git</span> restore print.c</span>
<span class="line"><span class="token comment"># 代码文件 print.c 被错误删除后并且执行了 git rm print.c 命令</span></span>
<span class="line"><span class="token function">git</span> reset HEAD print.c</span>
<span class="line"><span class="token function">git</span> checkout print.c</span>
<span class="line"><span class="token comment"># 或者</span></span>
<span class="line"><span class="token function">git</span> reset HEAD print.c</span>
<span class="line"><span class="token function">git</span> restore print.c</span>
<span class="line"><span class="token comment"># 无关文件 hello.txt 已经被添加到暂存区</span></span>
<span class="line"><span class="token comment"># 在不删除此文件的前提下将其移出暂存区</span></span>
<span class="line"><span class="token function">git</span> <span class="token function">rm</span> <span class="token parameter variable">--cached</span> hello.txt</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="thinking-0-4" tabindex="-1"><a class="header-anchor" href="#thinking-0-4"><span>Thinking 0.4</span></a></h3><p>依次执行命令：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token builtin class-name">echo</span> <span class="token string">&quot;Testing 1&quot;</span> <span class="token operator">&gt;&gt;</span> README.txt</span>
<span class="line"><span class="token function">git</span> <span class="token function">add</span> README.txt</span>
<span class="line"><span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;1&quot;</span></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token string">&quot;Testing 2&quot;</span> <span class="token operator">&gt;&gt;</span> README.txt</span>
<span class="line"><span class="token function">git</span> <span class="token function">add</span> README.txt</span>
<span class="line"><span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;2&quot;</span></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token string">&quot;Testing 3&quot;</span> <span class="token operator">&gt;&gt;</span> README.txt</span>
<span class="line"><span class="token function">git</span> <span class="token function">add</span> README.txt</span>
<span class="line"><span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;3&quot;</span></span>
<span class="line"><span class="token function">git</span> log</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>日志内容如下(更早的日志已省略)：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">commit daf67700a3390e0617f086e84521d72be2ad3cf8 (HEAD -&gt; master)</span>
<span class="line">Author: HuYunge &lt;silver_wolf@hyg&gt;</span>
<span class="line">Date:   Wed Mar 13 23:15:18 2024 +0800</span>
<span class="line"></span>
<span class="line">    3</span>
<span class="line"></span>
<span class="line">commit dbf59701cf1a15c4d8b93c137792bc1368166b57</span>
<span class="line">Author: HuYunge &lt;silver_wolf@hyg&gt;</span>
<span class="line">Date:   Wed Mar 13 23:15:03 2024 +0800</span>
<span class="line"></span>
<span class="line">    2</span>
<span class="line"></span>
<span class="line">commit 009ed016c831acffacb54289c8f07e77a5537749</span>
<span class="line">Author: HuYunge &lt;silver_wolf@hyg&gt;</span>
<span class="line">Date:   Wed Mar 13 23:14:41 2024 +0800</span>
<span class="line"></span>
<span class="line">    1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>提交说明 <code>3</code> 的哈希值为 <code>daf67700a3390e0617f086e84521d72be2ad3cf8</code> 。</p><p>依次执行命令：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token function">git</span> reset <span class="token parameter variable">--hard</span> HEAD^</span>
<span class="line"><span class="token function">git</span> log</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>日志内容如下(更早的日志已省略)：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">commit dbf59701cf1a15c4d8b93c137792bc1368166b57 (HEAD -&gt; master)</span>
<span class="line">Author: HuYunge &lt;silver_wolf@hyg&gt;</span>
<span class="line">Date:   Wed Mar 13 23:15:03 2024 +0800</span>
<span class="line"></span>
<span class="line">    2</span>
<span class="line"></span>
<span class="line">commit 009ed016c831acffacb54289c8f07e77a5537749</span>
<span class="line">Author: HuYunge &lt;silver_wolf@hyg&gt;</span>
<span class="line">Date:   Wed Mar 13 23:14:41 2024 +0800</span>
<span class="line"></span>
<span class="line">    1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以发现第三次提交的内容被清除了，回退到了第二次提交后的状态。</p><p>依次执行命令：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token function">git</span> reset <span class="token parameter variable">--hard</span> 009ed016c831acffacb54289c8f07e77a5537749</span>
<span class="line"><span class="token function">git</span> log</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>日志内容如下(更早的日志已省略)：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">commit 009ed016c831acffacb54289c8f07e77a5537749 (HEAD -&gt; master)</span>
<span class="line">Author: HuYunge &lt;silver_wolf@hyg&gt;</span>
<span class="line">Date:   Wed Mar 13 23:14:41 2024 +0800</span>
<span class="line"></span>
<span class="line">    1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以发现回到了第一次提交后的状态。</p><p>如果尝试回到最新提交也就是第三次提交后的状态，依次执行如下命令：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token function">git</span> reset <span class="token parameter variable">--hard</span> daf67700a3390e0617f086e84521d72be2ad3cf8</span>
<span class="line"><span class="token function">git</span> log</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>日志内容如下(更早的日志已省略)：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line">commit daf67700a3390e0617f086e84521d72be2ad3cf8 <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> master<span class="token punctuation">)</span></span>
<span class="line">Author: HuYunge <span class="token operator">&lt;</span>silver_wolf@hyg<span class="token operator">&gt;</span></span>
<span class="line">Date:   Wed Mar <span class="token number">13</span> <span class="token number">23</span>:15:18 <span class="token number">2024</span> +0800</span>
<span class="line"></span>
<span class="line">    <span class="token number">3</span></span>
<span class="line"></span>
<span class="line">commit dbf59701cf1a15c4d8b93c137792bc1368166b57</span>
<span class="line">Author: HuYunge <span class="token operator">&lt;</span>silver_wolf@hyg<span class="token operator">&gt;</span></span>
<span class="line">Date:   Wed Mar <span class="token number">13</span> <span class="token number">23</span>:15:03 <span class="token number">2024</span> +0800</span>
<span class="line"></span>
<span class="line">    <span class="token number">2</span></span>
<span class="line"></span>
<span class="line">commit 009ed016c831acffacb54289c8f07e77a5537749</span>
<span class="line">Author: HuYunge <span class="token operator">&lt;</span>silver_wolf@hyg<span class="token operator">&gt;</span></span>
<span class="line">Date:   Wed Mar <span class="token number">13</span> <span class="token number">23</span>:14:41 <span class="token number">2024</span> +0800</span>
<span class="line"></span>
<span class="line">    <span class="token number">1</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以发现回到了第三次提交后的状态，并且第二次提交后的日志记录也被恢复了。</p><h3 id="thinking-0-5" tabindex="-1"><a class="header-anchor" href="#thinking-0-5"><span>Thinking 0.5</span></a></h3><p>依次执行命令：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token comment"># 控制台输出一行first</span></span>
<span class="line"><span class="token builtin class-name">echo</span> first</span>
<span class="line"><span class="token comment"># 文件一行内容second</span></span>
<span class="line"><span class="token builtin class-name">echo</span> second <span class="token operator">&gt;</span> output.txt</span>
<span class="line"><span class="token function">cat</span> output.txt</span>
<span class="line"><span class="token comment"># 文件一行内容third</span></span>
<span class="line"><span class="token builtin class-name">echo</span> third <span class="token operator">&gt;</span> output.txt</span>
<span class="line"><span class="token function">cat</span> output.txt</span>
<span class="line"><span class="token comment"># 文件两行内容</span></span>
<span class="line"><span class="token comment"># 第一行third</span></span>
<span class="line"><span class="token comment"># 第二行fourth</span></span>
<span class="line"><span class="token builtin class-name">echo</span> fourth <span class="token operator">&gt;&gt;</span> output.txt</span>
<span class="line"><span class="token function">cat</span> output.txt</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果不添加重定向，默认输出到标准输出——控制台。</p><p>重定向时使用 <code>&gt;</code> 意为覆盖，使用 <code>&gt;&gt;</code> 意为追加。</p><h3 id="thinking-0-6" tabindex="-1"><a class="header-anchor" href="#thinking-0-6"><span>Thinking 0.6</span></a></h3><p>文件 <code>command.sh</code> 的内容如下：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token shebang important">#!/bin/bash</span></span>
<span class="line"><span class="token assign-left variable">file</span><span class="token operator">=</span>test.sh</span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token string">&#39;#!/bin/bash</span>
<span class="line">echo Shell Start...</span>
<span class="line">echo set a = 1</span>
<span class="line">a=1</span>
<span class="line">echo set b = 2</span>
<span class="line">b=2</span>
<span class="line">echo set c = a+b</span>
<span class="line">c=$[$a+$b]</span>
<span class="line">echo c = $c</span>
<span class="line">echo save c to ./file1</span>
<span class="line">echo $c&gt;file1</span>
<span class="line">echo save b to ./file2</span>
<span class="line">echo $b&gt;file2</span>
<span class="line">echo save a to ./file3</span>
<span class="line">echo $a&gt;file3</span>
<span class="line">echo save file1 file2 file3 to file4</span>
<span class="line">cat file1&gt;file4</span>
<span class="line">cat file2&gt;&gt;file4</span>
<span class="line">cat file3&gt;&gt;file4</span>
<span class="line">echo save file4 to ./result</span>
<span class="line">cat file4&gt;&gt;result&#39;</span> <span class="token operator">&gt;</span> <span class="token variable">$file</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>文件 <code>test.sh</code> 的内容如下：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token shebang important">#!/bin/bash</span></span>
<span class="line"><span class="token comment"># 输出文本内容 Shell Start</span></span>
<span class="line"><span class="token builtin class-name">echo</span> Shell Start<span class="token punctuation">..</span>.</span>
<span class="line"><span class="token comment"># 输出文本内容 set a = 1</span></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token builtin class-name">set</span> a <span class="token operator">=</span> <span class="token number">1</span></span>
<span class="line"><span class="token comment"># 将变量a的值设置为1</span></span>
<span class="line"><span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token number">1</span></span>
<span class="line"><span class="token comment"># 输出文本内容 set b = 2</span></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token builtin class-name">set</span> b <span class="token operator">=</span> <span class="token number">2</span></span>
<span class="line"><span class="token comment"># 将变量b的值设置为2</span></span>
<span class="line"><span class="token assign-left variable">b</span><span class="token operator">=</span><span class="token number">2</span></span>
<span class="line"><span class="token comment"># 输出文本内容 set c = a+b</span></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token builtin class-name">set</span> c <span class="token operator">=</span> a+b</span>
<span class="line"><span class="token comment"># 取变量a的值和变量b的值相加得到临时变量再取该临时变量的值赋给变量c</span></span>
<span class="line"><span class="token assign-left variable">c</span><span class="token operator">=</span>$<span class="token punctuation">[</span><span class="token variable">$a</span>+<span class="token variable">$b</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token comment"># 输出文本内容 c = 3</span></span>
<span class="line"><span class="token comment"># 因为此时c的值为3</span></span>
<span class="line"><span class="token builtin class-name">echo</span> c <span class="token operator">=</span> <span class="token variable">$c</span></span>
<span class="line"><span class="token comment"># 输出文本内容 save c to ./file1</span></span>
<span class="line"><span class="token builtin class-name">echo</span> save c to ./file1</span>
<span class="line"><span class="token comment"># 输出c的值将标准输出重定向到file1</span></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token variable">$c</span><span class="token operator">&gt;</span>file1</span>
<span class="line"><span class="token comment"># 输出文本内容 save b to ./file2</span></span>
<span class="line"><span class="token builtin class-name">echo</span> save b to ./file2</span>
<span class="line"><span class="token comment"># 输出b的值将标准输出重定向到file2</span></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token variable">$b</span><span class="token operator">&gt;</span>file2</span>
<span class="line"><span class="token comment"># 输出文本内容 save a to ./file3</span></span>
<span class="line"><span class="token builtin class-name">echo</span> save a to ./file3</span>
<span class="line"><span class="token comment"># 输出a的值将标准输出重定向到file3</span></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token variable">$a</span><span class="token operator">&gt;</span>file3</span>
<span class="line"><span class="token comment"># 输出文本内容 save file1 file2 file3 to file4</span></span>
<span class="line"><span class="token builtin class-name">echo</span> save file1 file2 file3 to file4</span>
<span class="line"><span class="token comment"># 以覆盖形式输出file1文件的内容到file4文件</span></span>
<span class="line"><span class="token comment"># 此时file4中有一行 3</span></span>
<span class="line"><span class="token function">cat</span> file<span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span>file4</span>
<span class="line"><span class="token comment"># 以追加形式输出file2文件的内容到file4文件</span></span>
<span class="line"><span class="token comment"># 此时file4中有两行</span></span>
<span class="line"><span class="token comment"># 第一行内容 3</span></span>
<span class="line"><span class="token comment"># 第二行内容 2</span></span>
<span class="line"><span class="token function">cat</span> file<span class="token operator"><span class="token file-descriptor important">2</span>&gt;&gt;</span>file4</span>
<span class="line"><span class="token comment"># 以追加形式输出file3文件的内容到file4文件</span></span>
<span class="line"><span class="token comment"># 此时file4中有三行</span></span>
<span class="line"><span class="token comment"># 第一行内容 3</span></span>
<span class="line"><span class="token comment"># 第二行内容 2</span></span>
<span class="line"><span class="token comment"># 第三行内容 1</span></span>
<span class="line"><span class="token function">cat</span> file<span class="token operator"><span class="token file-descriptor important">3</span>&gt;&gt;</span>file4</span>
<span class="line"><span class="token comment"># 输出文本内容 save file4 to ./result</span></span>
<span class="line"><span class="token builtin class-name">echo</span> save file4 to ./result</span>
<span class="line"><span class="token comment"># 以追加形式输出file4文件的内容到result文件</span></span>
<span class="line"><span class="token comment"># 此时result中有三行</span></span>
<span class="line"><span class="token comment"># 第一行内容 3</span></span>
<span class="line"><span class="token comment"># 第二行内容 2</span></span>
<span class="line"><span class="token comment"># 第三行内容 1</span></span>
<span class="line"><span class="token function">cat</span> file<span class="token operator"><span class="token file-descriptor important">4</span>&gt;&gt;</span>result</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>文件 <code>result</code> 的内容如下：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token number">3</span></span>
<span class="line"><span class="token number">2</span></span>
<span class="line"><span class="token number">1</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解释说明见 <code>test.sh</code> 中的注释。</p><p>然后是两组代码对比：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token comment"># Group 1</span></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token builtin class-name">echo</span> Shell Start   <span class="token comment"># 输出 echo Shell Start</span></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">echo</span> Shell Start<span class="token variable">\`</span></span> <span class="token comment"># 输出 Shell Start</span></span>
<span class="line"><span class="token comment"># Group 2</span></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token builtin class-name">echo</span> <span class="token variable">$c</span><span class="token operator">&gt;</span>file1   <span class="token comment"># 输出 echo $c&gt;file1</span></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">echo</span> $c<span class="token operator">&gt;</span>file1<span class="token variable">\`</span></span> <span class="token comment"># 输出 空行</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不使用反引号的内容会以字符串的形式输出，使用反引号包裹的内容会以指令形式执行，然后返回值作为整段代码的一部分继续执行。</p><h2 id="难点分析" tabindex="-1"><a class="header-anchor" href="#难点分析"><span>难点分析</span></a></h2><h3 id="makefile" tabindex="-1"><a class="header-anchor" href="#makefile"><span>Makefile</span></a></h3><ul><li>在Makefile文件中可以引用其他Makefile文件，通过多级Makefile实现对复杂程序的编译和链接。</li><li>使用 <code>.PHONY</code> 定义伪目标形成合理的生成层次。</li><li>在编写Makefile文件时使用通配符、隐式规则和自动变量简化文件编写。</li><li>定义变量实现代码的复用，同时便于修改。</li><li>使用 <code>VPATH</code> 和 <code>vpath</code> 指定搜索路径，避免手动硬编码路径，同时提高Makefile文件的泛用性。</li></ul><h3 id="shell-programming" tabindex="-1"><a class="header-anchor" href="#shell-programming"><span>Shell Programming</span></a></h3><ul><li><p>使用 <code>sed</code> 命令对文档进行删除、替换和查找等操作。</p></li><li><p>在使用命令时利用双引号对以 <code>$</code> 开头的字符串整体或部分进行值替换，从而执行更灵活的操作。</p></li><li><p>使用通配符进行批量操作。</p></li><li><p>使用管道将多个命令串联操作。</p></li><li><p>使用 <code>grep</code> 命令对文本执行特定的查找任务。</p></li><li><p>利用双圆括号的算数扩展功能执行运算和判断操作。</p></li><li><p>使用大括号将需要替换的部分包裹起来，使用 <code>&amp;</code> 引用文件描述符指定的文件。</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;<span class="token variable">\${n}</span>p&quot;</span> err.txt<span class="token operator">&gt;</span><span class="token file-descriptor important">&amp;2</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>在 <code>.sh</code> 文件中使用 <code>getopts</code> 和 <code>case</code> 对命令行参数进行解析。</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token keyword">while</span> <span class="token builtin class-name">getopts</span> <span class="token string">&quot;f:q:p:sh&quot;</span> opt<span class="token punctuation">;</span> <span class="token keyword">do</span></span>
<span class="line">    <span class="token keyword">case</span> <span class="token variable">$opt</span> <span class="token keyword">in</span></span>
<span class="line">        f<span class="token punctuation">)</span> <span class="token assign-left variable">FILE</span><span class="token operator">=</span><span class="token variable">\${OPTARG}</span> <span class="token punctuation">;</span><span class="token punctuation">;</span></span>
<span class="line">        q<span class="token punctuation">)</span> <span class="token assign-left variable">CMD</span><span class="token operator">=</span><span class="token variable">\${OPTARG}</span> <span class="token punctuation">;</span><span class="token punctuation">;</span></span>
<span class="line">        p<span class="token punctuation">)</span> <span class="token assign-left variable">PID</span><span class="token operator">=</span><span class="token variable">\${OPTARG}</span> <span class="token punctuation">;</span><span class="token punctuation">;</span></span>
<span class="line">        s<span class="token punctuation">)</span> <span class="token assign-left variable">SORT</span><span class="token operator">=</span>true <span class="token punctuation">;</span><span class="token punctuation">;</span></span>
<span class="line">        h<span class="token punctuation">)</span> usage<span class="token punctuation">;</span> <span class="token builtin class-name">exit</span> <span class="token number">0</span> <span class="token punctuation">;</span><span class="token punctuation">;</span></span>
<span class="line">        ?<span class="token punctuation">)</span> usage<span class="token punctuation">;</span> <span class="token builtin class-name">exit</span> <span class="token number">1</span> <span class="token punctuation">;</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">esac</span></span>
<span class="line"><span class="token keyword">done</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>在 <code>awk</code> 命令中使用 <code>-v</code> 参数向传给 <code>awk</code> 的代码中传递变量的值。</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token function">awk</span> <span class="token parameter variable">-v</span> <span class="token assign-left variable">input</span><span class="token operator">=</span><span class="token variable">$CMD</span> <span class="token string">&#39;{if(index($5,input)!=0){print $0}}&#39;</span> <span class="token variable">$FILE</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>使用 <code>awk</code> 命令利用其内置的代码执行功能对文本执行复杂的处理工作。</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token function">awk</span> <span class="token parameter variable">-v</span> <span class="token assign-left variable">input</span><span class="token operator">=</span><span class="token variable">$PID</span> <span class="token string">&#39;{</span>
<span class="line">                       pid[NR] = $2</span>
<span class="line">                       ppid[NR] = $3</span>
<span class="line">                   } END {</span>
<span class="line">                       p = input</span>
<span class="line">                       for (i = 1; p != 0; ++i) {</span>
<span class="line">                           if (pid[i] == p) {</span>
<span class="line">                               p = ppid[i]</span>
<span class="line">                               print p</span>
<span class="line">                               i = 0</span>
<span class="line">                           }</span>
<span class="line">                       }</span>
<span class="line">                   }&#39;</span> <span class="token variable">$FILE</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>使用 <code>sort</code> 命令对文本进行排序。</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token function">sort</span> <span class="token parameter variable">-k4nr</span> <span class="token parameter variable">-k2n</span> <span class="token variable">$FILE</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li></ul><h2 id="实验体会" tabindex="-1"><a class="header-anchor" href="#实验体会"><span>实验体会</span></a></h2><ul><li>限时实验难度并不低，课下必须做好充足的准备。</li><li>注意读题，确保文件路径正确。</li><li>题目中的tips对解题能够提供很多帮助。</li><li>可以通过 <code>man</code> 查看命令说明文档，获取详细的使用信息。</li><li>确保检查无误后再进行提交，提交冷却时间会逐渐增加，影响做题进度。</li></ul>`,63)]))}const d=n(i,[["render",p],["__file","lab0.html.vue"]]),o=JSON.parse('{"path":"/blogs/OS/lab0.html","title":"Lab0实验报告","lang":"en-US","frontmatter":{"categories":["OS"]},"headers":[{"level":2,"title":"思考题","slug":"思考题","link":"#思考题","children":[{"level":3,"title":"Thinking 0.1","slug":"thinking-0-1","link":"#thinking-0-1","children":[]},{"level":3,"title":"Thinking 0.2","slug":"thinking-0-2","link":"#thinking-0-2","children":[]},{"level":3,"title":"Thinking 0.3","slug":"thinking-0-3","link":"#thinking-0-3","children":[]},{"level":3,"title":"Thinking 0.4","slug":"thinking-0-4","link":"#thinking-0-4","children":[]},{"level":3,"title":"Thinking 0.5","slug":"thinking-0-5","link":"#thinking-0-5","children":[]},{"level":3,"title":"Thinking 0.6","slug":"thinking-0-6","link":"#thinking-0-6","children":[]}]},{"level":2,"title":"难点分析","slug":"难点分析","link":"#难点分析","children":[{"level":3,"title":"Makefile","slug":"makefile","link":"#makefile","children":[]},{"level":3,"title":"Shell Programming","slug":"shell-programming","link":"#shell-programming","children":[]}]},{"level":2,"title":"实验体会","slug":"实验体会","link":"#实验体会","children":[]}],"git":{"createdTime":1726994140000,"updatedTime":1726994140000,"contributors":[{"name":"gitDebuger","email":"hygchn04@gmail.com","commits":1}]},"filePathRelative":"blogs/OS/lab0.md"}');export{d as comp,o as data};
