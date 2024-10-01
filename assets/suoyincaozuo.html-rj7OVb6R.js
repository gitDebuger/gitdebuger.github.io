import{_ as n,c as a,e,o as l}from"./app-B42q5VFX.js";const p={};function i(t,s){return l(),a("div",null,s[0]||(s[0]=[e(`<h1 id="索引操作" tabindex="-1"><a class="header-anchor" href="#索引操作"><span>索引操作</span></a></h1><h2 id="_1-索引的实战场景" tabindex="-1"><a class="header-anchor" href="#_1-索引的实战场景"><span>1. 索引的实战场景</span></a></h2><p>场景一：将采集的不同业务类型的数据存储到不同的索引</p><p>场景二：按日期切分存储日志索引</p><h2 id="_2-索引的基本操作" tabindex="-1"><a class="header-anchor" href="#_2-索引的基本操作"><span>2. 索引的基本操作</span></a></h2><ul><li>创建索引</li><li>删除索引</li><li>查询索引</li><li>修改索引</li></ul><h3 id="_2-1-创建索引" tabindex="-1"><a class="header-anchor" href="#_2-1-创建索引"><span>2.1 创建索引</span></a></h3><p>创建索引的基本语法如下：</p><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre class="language-json"><code><span class="line">PUT /index_name</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 索引设置</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;mappings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">// 字段映射</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>必要参数：</p><ul><li>索引名称（<code>index_name</code>）：必须是小写字母，可以包含数字和下划线。</li><li>索引设置（<code>settings</code>）： <ul><li>分片数量（<code>number_of_shards</code>）：一个索引的分片数决定了索引的并行度和数据分布。</li><li>副本数量（<code>number_of_replicas</code>）：副本提高了数据的可用性和容错能力。</li></ul></li><li>映射（<code>mappings</code>）： <ul><li>字段属性（<code>properties</code>）：定义索引中文档的字段及其类型，常用字段类型包括 <code>text</code> <code>keyword</code> <code>integer</code> <code>float</code> <code>date</code> 等。</li></ul></li></ul><blockquote><p>索引设置和映射具有默认值，可以省略索引设置和映射创建索引。</p></blockquote><h3 id="_2-2-删除索引" tabindex="-1"><a class="header-anchor" href="#_2-2-删除索引"><span>2.2 删除索引</span></a></h3><p>删除索引的语法很简单：</p><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre class="language-json"><code><span class="line">DELETE /index_name</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_2-3-查询索引" tabindex="-1"><a class="header-anchor" href="#_2-3-查询索引"><span>2.3 查询索引</span></a></h3><p>查询操作可以分为两类：检索索引信息和搜索索引中的文档。</p><p>基本语法如下：</p><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre class="language-json"><code><span class="line"><span class="token comment">// 获取索引信息</span></span>
<span class="line">GET /index_name</span>
<span class="line"></span>
<span class="line"><span class="token comment">// 搜索索引中的文档</span></span>
<span class="line">GET /index_name/_search</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 查询条件</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-修改索引" tabindex="-1"><a class="header-anchor" href="#_2-4-修改索引"><span>2.4 修改索引</span></a></h3><p>修改索引包括动态更新索引设置和动态更新索引的部分映射字段信息。</p><p>基本语法如下：</p><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre class="language-json"><code><span class="line"><span class="token comment">// 动态更新索引设置</span></span>
<span class="line">PUT /index_name/_settings</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;setting_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;setting_value&quot;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 动态更新索引映射</span></span>
<span class="line">PUT /index_name/_mapping</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;new_field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;field_type&quot;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-索引别名" tabindex="-1"><a class="header-anchor" href="#_3-索引别名"><span>3. 索引别名</span></a></h2><h3 id="_3-1-为什么需要别名" tabindex="-1"><a class="header-anchor" href="#_3-1-为什么需要别名"><span>3.1 为什么需要别名</span></a></h3><p>场景一：面对PB级别的增量数据，对外提供服务的是基于日期切分的多个不同索引，每次检索都要指定数十个甚至数百个索引，非常麻烦。</p><p>场景二：线上提供服务的某个索引设计不合理，比如某字段分词定义不准确，那么如何保证对外提供服务不停止，也就是在不更改业务代码的前提下更换索引？</p><h3 id="_3-2-如何为索引添加别名" tabindex="-1"><a class="header-anchor" href="#_3-2-如何为索引添加别名"><span>3.2 如何为索引添加别名</span></a></h3><p>可以在创建索引时指定别名：</p><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre class="language-json"><code><span class="line">PUT /index_name</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 索引设置</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;mappings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">// 字段映射</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;aliases&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;alias&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以为现有索引添加别名：</p><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre class="language-json"><code><span class="line">POST /_aliases</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">&quot;actions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">&quot;add&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;index_name&quot;</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token property">&quot;alias&quot;</span><span class="token operator">:</span> <span class="token string">&quot;alias_name&quot;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-多索引检索实现方案" tabindex="-1"><a class="header-anchor" href="#_2-3-多索引检索实现方案"><span>2.3 多索引检索实现方案</span></a></h3><h4 id="_2-3-1-不使用别名的方案" tabindex="-1"><a class="header-anchor" href="#_2-3-1-不使用别名的方案"><span>2.3.1 不使用别名的方案</span></a></h4><p>方式一：使用逗号对多个索引名称进行分隔</p><p>方式二：使用通配符</p><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre class="language-json"><code><span class="line">PUT /index1<span class="token punctuation">,</span>index2<span class="token punctuation">,</span>index3/_search</span>
<span class="line">PUT /index_*/search</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-3-2-使用别名的方案" tabindex="-1"><a class="header-anchor" href="#_2-3-2-使用别名的方案"><span>2.3.2 使用别名的方案</span></a></h4><p>使用别名进行多索引查询分为两步：</p><ol><li>使别名关联已有索引</li><li>使用别名进行查询</li></ol><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre class="language-json"><code><span class="line"><span class="token comment">// 关联索引</span></span>
<span class="line">POST /_alias</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">&quot;actions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">&quot;add&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;index1&quot;</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token property">&quot;alias&quot;</span><span class="token operator">:</span> <span class="token string">&quot;alias&quot;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">&quot;add&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;index2&quot;</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token property">&quot;alias&quot;</span><span class="token operator">:</span> <span class="token string">&quot;alias&quot;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">&quot;add&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;index3&quot;</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token property">&quot;alias&quot;</span><span class="token operator">:</span> <span class="token string">&quot;alias&quot;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 使用别名进行查询</span></span>
<span class="line">GET /alias</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-使用别名和基于索引的检索效率一样吗" tabindex="-1"><a class="header-anchor" href="#_2-4-使用别名和基于索引的检索效率一样吗"><span>2.4 使用别名和基于索引的检索效率一样吗</span></a></h3><p>若索引和别名指向相同，则在相同检索条件下的检索效率是一致的，因为索引别名只是物理索引的软链接的名称而已。</p><p>但是要注意以下几点：</p><ol><li>对相同索引别名的物理索引建议有一致的映射，以提升检索效率。</li><li>推荐充分发挥索引别名在检索方面的优势，但在写入和更新时使用物理索引。</li></ol>`,45)]))}const o=n(p,[["render",i],["__file","suoyincaozuo.html.vue"]]),d=JSON.parse('{"path":"/blogs/ElasticSearch/suoyincaozuo.html","title":"索引操作","lang":"en-US","frontmatter":{"categories":["ElasticSearch"]},"headers":[{"level":2,"title":"1. 索引的实战场景","slug":"_1-索引的实战场景","link":"#_1-索引的实战场景","children":[]},{"level":2,"title":"2. 索引的基本操作","slug":"_2-索引的基本操作","link":"#_2-索引的基本操作","children":[{"level":3,"title":"2.1 创建索引","slug":"_2-1-创建索引","link":"#_2-1-创建索引","children":[]},{"level":3,"title":"2.2 删除索引","slug":"_2-2-删除索引","link":"#_2-2-删除索引","children":[]},{"level":3,"title":"2.3 查询索引","slug":"_2-3-查询索引","link":"#_2-3-查询索引","children":[]},{"level":3,"title":"2.4 修改索引","slug":"_2-4-修改索引","link":"#_2-4-修改索引","children":[]}]},{"level":2,"title":"3. 索引别名","slug":"_3-索引别名","link":"#_3-索引别名","children":[{"level":3,"title":"3.1 为什么需要别名","slug":"_3-1-为什么需要别名","link":"#_3-1-为什么需要别名","children":[]},{"level":3,"title":"3.2 如何为索引添加别名","slug":"_3-2-如何为索引添加别名","link":"#_3-2-如何为索引添加别名","children":[]},{"level":3,"title":"2.3 多索引检索实现方案","slug":"_2-3-多索引检索实现方案","link":"#_2-3-多索引检索实现方案","children":[]},{"level":3,"title":"2.4 使用别名和基于索引的检索效率一样吗","slug":"_2-4-使用别名和基于索引的检索效率一样吗","link":"#_2-4-使用别名和基于索引的检索效率一样吗","children":[]}]}],"git":{"createdTime":1727794553000,"updatedTime":1727794553000,"contributors":[{"name":"gitDebuger","email":"hygchn04@gmail.com","commits":1}]},"filePathRelative":"blogs/ElasticSearch/索引操作.md"}');export{o as comp,d as data};
