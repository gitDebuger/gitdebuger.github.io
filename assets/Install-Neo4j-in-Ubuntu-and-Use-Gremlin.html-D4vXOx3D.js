import{_ as t,c as r,a as n,b as s,d as l,e as i,o,r as p}from"./app-BPTACKkd.js";const d={},c={href:"https://github.com/neo4j/neo4j",target:"_blank",rel:"noopener noreferrer"},u={href:"https://github.com/jenv/jenv",target:"_blank",rel:"noopener noreferrer"},m={href:"https://tinkerpop.apache.org/download.html",target:"_blank",rel:"noopener noreferrer"},v={href:"https://tinkerpop.apache.org/download.html",target:"_blank",rel:"noopener noreferrer"};function h(g,e){const a=p("ExternalLinkIcon");return o(),r("div",null,[e[14]||(e[14]=n("h1",{id:"install-neo4j-in-ubuntu-and-use-gremlin",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#install-neo4j-in-ubuntu-and-use-gremlin"},[n("span",null,"Install Neo4j in Ubuntu and Use Gremlin")])],-1)),e[15]||(e[15]=n("h2",{id:"_1-reason-why-installing-neo4j-in-ubuntu",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-reason-why-installing-neo4j-in-ubuntu"},[n("span",null,"1. Reason why installing Neo4j in Ubuntu")])],-1)),e[16]||(e[16]=n("p",null,"In previous article, we say that we will use Gremlin to Access Neo4j.",-1)),e[17]||(e[17]=n("p",null,[s("However, there is a problem, that Gremlin cannot support Neo4j whose version is too high, while Neo4j Desktop in Windows can only install Neo4j database whose lowest version is "),n("code",null,"4.1.0"),s(" .")],-1)),n("p",null,[e[1]||(e[1]=s("So, we will install Neo4j in Ubuntu. Of course, we can install Neo4j of any version from ")),n("a",c,[e[0]||(e[0]=s("GitHub")),l(a)]),e[2]||(e[2]=s(", but it is more easy to use ")),e[3]||(e[3]=n("code",null,"apt",-1)),e[4]||(e[4]=s(" to install it."))]),e[18]||(e[18]=i('<p><em><strong>All things following will be done by <code>root</code> credential!!!</strong></em></p><h2 id="_2-install-neo4j-in-ubuntu" tabindex="-1"><a class="header-anchor" href="#_2-install-neo4j-in-ubuntu"><span>2. Install Neo4j in Ubuntu</span></a></h2><p>We will use Neo4j whose version is <code>3.3.9</code> .</p><h3 id="_2-1-install-jdk-1-8" tabindex="-1"><a class="header-anchor" href="#_2-1-install-jdk-1-8"><span>2.1 Install JDK-1.8</span></a></h3><p>Neo4j <code>3.3.9</code> only support JDK-1.8, but we use JDK-17 or higher now, so we need install JDK-1.8 before installing Neo4j.</p><p>JDK-1.8 is too old and it is only used to run Neo4j, so we need to manage JDK versions in our computer.</p>',6)),n("p",null,[e[6]||(e[6]=s("We will use ")),n("a",u,[e[5]||(e[5]=s("JENV")),l(a)]),e[7]||(e[7]=s(" to do this."))]),e[19]||(e[19]=i(`<p>First we clone this repository:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token function">git</span> clone https://github.com/jenv/jenv.git ~/.jenv</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Then add <code>jenv</code> to <code>PATH</code> environment:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token comment"># ~/.bashrc</span></span>
<span class="line"><span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token string">&quot;<span class="token environment constant">$HOME</span>/.jenv/bin:<span class="token environment constant">$PATH</span>&quot;</span></span>
<span class="line"><span class="token builtin class-name">eval</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span>jenv init -<span class="token variable">)</span></span>&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Finally, we restart terminal or use a new terminal or run command following:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token builtin class-name">source</span> ~/.bashrc</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>We can use command following to check whether it has been installed correctly:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line">jenv <span class="token parameter variable">--version</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>After that, we can install JDK-1.8:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> openjdk-8-jdk <span class="token comment"># JDK-1.8</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Then add JDKs in our computer to <code>jenv</code> :</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token comment"># JDK installed by \`apt\` is commonly here</span></span>
<span class="line">jenv <span class="token function">add</span> /usr/lib/jvm/java-8-openjdk-amd64</span>
<span class="line"><span class="token comment"># And other JDKs...</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>After adding them, we can run command following to view them:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line">jenv versions</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>But Neo4j uses environment variable <code>JAVA_HOME</code> to find where JDK is, we need to enable plugin <code>export</code> in <code>jenv</code> to automatically manage it. Run command following:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line">jenv enable-plugin <span class="token builtin class-name">export</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>This plugin can automatically set <code>JAVA_HOME</code> according to the version of JDK chosen by us.</p><p>The usage of <code>jenv</code> is as follows:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token comment"># View Java version added</span></span>
<span class="line">jenv versions</span>
<span class="line"><span class="token comment"># Add new Java version to \`jenv\`</span></span>
<span class="line">jenv <span class="token function">add</span> <span class="token operator">&lt;</span>java-path<span class="token operator">&gt;</span></span>
<span class="line"><span class="token comment"># Set global Java version</span></span>
<span class="line">jenv global <span class="token operator">&lt;</span>version<span class="token operator">&gt;</span></span>
<span class="line"><span class="token comment"># Set Java version used in current directory or project</span></span>
<span class="line">jenv <span class="token builtin class-name">local</span> <span class="token operator">&lt;</span>version<span class="token operator">&gt;</span></span>
<span class="line"><span class="token comment"># Set Java version used in current shell</span></span>
<span class="line">jenv shell <span class="token operator">&lt;</span>version<span class="token operator">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Finally, we change to JDK-1.8 to do following things:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line">jenv global <span class="token number">1.8</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_2-2-install-neo4j" tabindex="-1"><a class="header-anchor" href="#_2-2-install-neo4j"><span>2.2 Install Neo4j</span></a></h3><p>Run commands following:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token function">wget</span> <span class="token parameter variable">-O</span> - https://debian.neo4j.com/neotechnology.gpg.key <span class="token operator">|</span> <span class="token function">sudo</span> apt-key <span class="token function">add</span> -</span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token string">&#39;deb https://debian.neo4j.com stable legacy&#39;</span> <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> /etc/apt/sources.list.d/neo4j.list</span>
<span class="line"><span class="token function">apt</span> update</span>
<span class="line"><span class="token function">apt</span> list <span class="token parameter variable">-a</span> neo4j</span>
<span class="line"><span class="token function">apt</span> <span class="token function">install</span> <span class="token assign-left variable">neo4j</span><span class="token operator">=</span><span class="token number">1</span>:3.3.9</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>We can use command following to check whether it can run:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line">neo4j start</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Then we can see information following if successful:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">Active database: graph.db</span>
<span class="line">Directories in use:</span>
<span class="line">  home:         /var/lib/neo4j</span>
<span class="line">  config:       /etc/neo4j</span>
<span class="line">  logs:         /var/log/neo4j</span>
<span class="line">  plugins:      /var/lib/neo4j/plugins</span>
<span class="line">  import:       /var/lib/neo4j/import</span>
<span class="line">  data:         /var/lib/neo4j/data</span>
<span class="line">  certificates: /var/lib/neo4j/certificates</span>
<span class="line">  run:          /var/run/neo4j</span>
<span class="line">Starting Neo4j.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>It will run at <code>7474</code> port and we can visit it from our browser. We can run command to check the status of Neo4j:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line">neo4j status</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>If we want to connect it from other computer, we can change its configuration:</p><div class="language-properties line-numbers-mode" data-highlighter="prismjs" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="line"><span class="token key attr-name">dbms.connectors.default_listen_address</span><span class="token punctuation">=</span><span class="token value attr-value">0.0.0.0</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Then restart Neo4j:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line">neo4j restart</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="_3-install-gremlin-and-connect" tabindex="-1"><a class="header-anchor" href="#_3-install-gremlin-and-connect"><span>3. Install Gremlin and Connect</span></a></h2><p><em><strong>Gremlin can support many versions of JDK, so we can discard JDK-1.8 now!!!</strong></em></p><h3 id="_3-1-install-gremlin" tabindex="-1"><a class="header-anchor" href="#_3-1-install-gremlin"><span>3.1 Install Gremlin</span></a></h3>`,37)),n("p",null,[e[9]||(e[9]=s("Download from this web page: ")),n("a",m,[e[8]||(e[8]=s("Apache TinkerPop")),l(a)]),e[10]||(e[10]=s("."))]),e[20]||(e[20]=i(`<p>Or download with <code>wget</code> command:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token function">wget</span> https://dlcdn.apache.org/tinkerpop/3.7.2/apache-tinkerpop-gremlin-server-3.7.2-bin.zip</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Then unzip it.</p><p>Change to this directory and change its configuration:</p><p>File <code>conf/gremlin-server-neo4j.yaml</code> :</p><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="line"><span class="token comment"># Allow all address to connect</span></span>
<span class="line"><span class="token key atrule">host</span><span class="token punctuation">:</span> 0.0.0.0</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>File <code>neo4j-empty.properties</code> :</p><div class="language-properties line-numbers-mode" data-highlighter="prismjs" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="line"><span class="token key attr-name">gremlin.neo4j.directory</span><span class="token punctuation">=</span><span class="token value attr-value">/var/lib/neo4j/data/databases/graph.db</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Before running Gremlin, we need to install some dependencies:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token comment"># version of dependencies is according to the version of gremlin</span></span>
<span class="line">bin/gremlin-server.sh <span class="token function">install</span> org.apache.tinkerpop neo4j-gremlin <span class="token number">3.7</span>.2</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>In addition, we need to stop Neo4j server, because they two cannot run in the same time:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line">neo4j stop</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Then we run command following to check whether Gremlin server can run successfully:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line">bin/gremlin-server.sh conf/gremlin-server-neo4j.yaml</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>If it can run successfully, stop it and change file <code>bin/gremlin-server.sh</code> :</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token comment"># Other codes</span></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token parameter variable">-z</span> <span class="token string">&quot;<span class="token variable">$GREMLIN_YAML</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span></span>
<span class="line"></span>
<span class="line">  <span class="token assign-left variable">GREMLIN_YAML</span><span class="token operator">=</span><span class="token variable">$GREMLIN_HOME</span>/conf/gremlin-server-neo4j.yaml</span>
<span class="line"></span>
<span class="line"><span class="token keyword">fi</span></span>
<span class="line"><span class="token comment"># Other codes</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then start Gremlin server:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line">bin/gremlin-server.sh start</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Now Gremlin server is running in the background.</p><h3 id="_3-2-connect-to-gremlin-server-with-gremlin-console" tabindex="-1"><a class="header-anchor" href="#_3-2-connect-to-gremlin-server-with-gremlin-console"><span>3.2 Connect to Gremlin Server with Gremlin Console</span></a></h3><p>We can use Gremlin console to connect to Gremlin server.</p>`,21)),n("p",null,[e[12]||(e[12]=s("Download from this web page: ")),n("a",v,[e[11]||(e[11]=s("Apache TinkerPop")),l(a)]),e[13]||(e[13]=s("."))]),e[21]||(e[21]=i(`<p>Or download with <code>wget</code> command:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token function">wget</span> https://dlcdn.apache.org/tinkerpop/3.7.2/apache-tinkerpop-gremlin-console-3.7.2-bin.zip</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Then unzip it and change to this directory.</p><p>Make file <code>remote.yaml</code> consistent with where Gremlin server is running or add a new file:</p><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="line"><span class="token key atrule">hosts</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>localhost<span class="token punctuation">]</span></span>
<span class="line"><span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8182</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>Then run Gremlin console:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line">bin/gremlin.sh</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>If successful, we can see information following:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">Oct 12, 2024 8:07:13 PM java.util.prefs.FileSystemPreferences$1 run</span>
<span class="line">INFO: Created user preferences directory.</span>
<span class="line"></span>
<span class="line">         \\,,,/</span>
<span class="line">         (o o)</span>
<span class="line">-----oOOo-(3)-oOOo-----</span>
<span class="line">plugin activated: tinkerpop.server</span>
<span class="line">plugin activated: tinkerpop.utilities</span>
<span class="line">plugin activated: tinkerpop.tinkergraph</span>
<span class="line">gremlin&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then run command to connect to Gremlin server:</p><div class="language-gremlin line-numbers-mode" data-highlighter="prismjs" data-ext="gremlin" data-title="gremlin"><pre class="language-gremlin"><code><span class="line">:remote connect tinkerpop.server conf/remote.yaml</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>If successful, we can run command following to change to remote mode:</p><div class="language-gremlin line-numbers-mode" data-highlighter="prismjs" data-ext="gremlin" data-title="gremlin"><pre class="language-gremlin"><code><span class="line">:remote console</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_3-3-connect-to-gremlin-server-in-wsl-from-windows" tabindex="-1"><a class="header-anchor" href="#_3-3-connect-to-gremlin-server-in-wsl-from-windows"><span>3.3 Connect to Gremlin Server in WSL from Windows</span></a></h3><p>First we need to find the IP of WSL.</p><p>If <code>localhost</code> of WSL is the same as that of Windows, just use <code>localhost</code> is OK.</p><p>Or, we can run command in WSL to get it:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token function">ip</span> addr show eth0</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>We can see output like this:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">2: eth0: &lt;BROADCAST,MULTICAST,UP,LOWER_UP&gt; mtu 1500 qdisc mq state UP group default qlen 1000</span>
<span class="line">    link/ether 00:15:5d:c7:ff:e6 brd ff:ff:ff:ff:ff:ff</span>
<span class="line">    inet 172.18.50.12/20 brd 172.18.63.255 scope global eth0</span>
<span class="line">       valid_lft forever preferred_lft forever</span>
<span class="line">    inet6 fe80::215:5dff:fec7:ffe6/64 scope link</span>
<span class="line">       valid_lft forever preferred_lft forever</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The output indicates that <code>172.18.50.12</code> is the IP of WSL.</p><p>Then we can connect to the Gremlin server running in WSL from Windows.</p><p>Just like the previous subsection, download and unzip file, and change configuration file. Then run the console:</p><div class="language-powershell line-numbers-mode" data-highlighter="prismjs" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="line"><span class="token punctuation">.</span>\\bin\\gremlin<span class="token punctuation">.</span>bat</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Other things is the same as those in Ubuntu.</p><h2 id="_4-problem" tabindex="-1"><a class="header-anchor" href="#_4-problem"><span>4. Problem</span></a></h2><p>Neo4j and Gremlin server cannot run at the same time, just say that we cannot use Neo4j to view the graph in a visual way.</p><p>How can we resolve this problem? Just look at the next article!</p>`,28))])}const k=t(d,[["render",h],["__file","Install-Neo4j-in-Ubuntu-and-Use-Gremlin.html.vue"]]),f=JSON.parse('{"path":"/blogs/ArkAnalyzer/Install-Neo4j-in-Ubuntu-and-Use-Gremlin.html","title":"Install Neo4j in Ubuntu and Use Gremlin","lang":"en-US","frontmatter":{"categories":["ArkAnalyzer"]},"headers":[{"level":2,"title":"1. Reason why installing Neo4j in Ubuntu","slug":"_1-reason-why-installing-neo4j-in-ubuntu","link":"#_1-reason-why-installing-neo4j-in-ubuntu","children":[]},{"level":2,"title":"2. Install Neo4j in Ubuntu","slug":"_2-install-neo4j-in-ubuntu","link":"#_2-install-neo4j-in-ubuntu","children":[{"level":3,"title":"2.1 Install JDK-1.8","slug":"_2-1-install-jdk-1-8","link":"#_2-1-install-jdk-1-8","children":[]},{"level":3,"title":"2.2 Install Neo4j","slug":"_2-2-install-neo4j","link":"#_2-2-install-neo4j","children":[]}]},{"level":2,"title":"3. Install Gremlin and Connect","slug":"_3-install-gremlin-and-connect","link":"#_3-install-gremlin-and-connect","children":[{"level":3,"title":"3.1 Install Gremlin","slug":"_3-1-install-gremlin","link":"#_3-1-install-gremlin","children":[]},{"level":3,"title":"3.2 Connect to Gremlin Server with Gremlin Console","slug":"_3-2-connect-to-gremlin-server-with-gremlin-console","link":"#_3-2-connect-to-gremlin-server-with-gremlin-console","children":[]},{"level":3,"title":"3.3 Connect to Gremlin Server in WSL from Windows","slug":"_3-3-connect-to-gremlin-server-in-wsl-from-windows","link":"#_3-3-connect-to-gremlin-server-in-wsl-from-windows","children":[]}]},{"level":2,"title":"4. Problem","slug":"_4-problem","link":"#_4-problem","children":[]}],"git":{"createdTime":1728736537000,"updatedTime":1728736537000,"contributors":[{"name":"gitDebuger","email":"hygchn04@gmail.com","commits":1}]},"filePathRelative":"blogs/ArkAnalyzer/Install-Neo4j-in-Ubuntu-and-Use-Gremlin.md"}');export{k as comp,f as data};