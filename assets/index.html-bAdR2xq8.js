import{_ as t,c as n,a as l,b as i,d as o,e as r,o as s,r as d}from"./app-CNYnZXky.js";const c={},p={href:"https://github.com/gitDebuger/2024-os-lab",target:"_blank",rel:"noopener noreferrer"};function h(g,e){const a=d("ExternalLinkIcon");return s(),n("div",null,[e[3]||(e[3]=l("h1",{id:"北航2024操作系统实验",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#北航2024操作系统实验"},[l("span",null,"北航2024操作系统实验")])],-1)),l("p",null,[e[1]||(e[1]=i("这里是每次实验的实验报告，实验代码仓库位于")),l("a",p,[e[0]||(e[0]=i("2024-os-lab")),o(a)]),e[2]||(e[2]=i(" 。"))]),e[4]||(e[4]=r('<h2 id="实验内容" tabindex="-1"><a class="header-anchor" href="#实验内容"><span>实验内容</span></a></h2><p>本课程设计的操作系统实验分为6个实验（Lab1 ~ Lab6），目标是在一学期内自主开发一个小型操作系统。具体实验内容如下。</p><ul><li>内核、启动和 <code>printf</code> ：通过PC启动的实验，掌握硬件的启动过程，理解链接地址、加载地址和重定位的概念，学习如何编写裸机代码。</li><li>内存管理：理解虚拟内存和物理内存的管理，实现操作系统对虚拟内存空间的管理。</li><li>进程与异常：通过设置进程控制块和编写进程创建、进程中止和进程调度程序，实现进程管理；编写通用中断分派程序和时钟中断例程，实现中断管理。</li><li>系统调用与 <code>fork</code> ：掌握系统调用的实现方法，理解系统调用的处理流程，实现本实验所需的系统调用。</li><li>文件系统：通过实现一个简单的、基于磁盘的、微内核方式的文件系统，掌握文件系统的实现方法和层次结构。</li><li>管道与 <code>shell</code> ：实现具有管道，重定向功能的命令解释程序 <code>shell</code> ，能够执行一些简单的命令。最后将6部分链接起来，使之成为一个能够运行的操作系统。</li></ul><h2 id="实验内容的关系" tabindex="-1"><a class="header-anchor" href="#实验内容的关系"><span>实验内容的关系</span></a></h2><p>另外，考虑有些学生对Linux系统、GCC编译器、<code>Makefile</code> 和 <code>git</code> 等工具不熟悉，专门设置了一个Lab0，主要介绍Linux、<code>Makefile</code> 、<code>git</code> 、<code>vi</code> 和仿真器的使用以及基本的 <code>shell</code> 编程等，为后续实验的顺利实施打好基础。</p><h2 id="实验设计" tabindex="-1"><a class="header-anchor" href="#实验设计"><span>实验设计</span></a></h2><p>由于开发一个实际的操作系统难度大、工作量繁重，为了保证教学效果，在核心能力部分采用微内核结构和增量式设计的原则，因此可以从最基本的硬件管理功能逐步扩充，最后完成一个完整的系统。实验内容的设计满足以下条件。</p><ul><li>每个实验可独立运行与测试，便于调试与评测，可获得阶段性成果。</li><li>每个实验内容包含相对独立的知识点，并只依赖其前序实验。</li><li>基本保证在两周内完成一个实验，这样在一学期内可以完成整个实验。</li><li>各个实验提交的代码一直伴随整个实验过程，可以不断改进、完善代码。</li></ul><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明"><span>补充说明</span></a></h2><p>本人在实验课中的成绩如下，所以请放心答案的正确性：</p><p><img src="https://github.com/gitDebuger/2024-os-lab/raw/documents/pic/result.png" alt="result"></p><p><strong>希望大家能体验到自己动手完成一个小操作系统的乐趣！</strong></p>',12))])}const m=t(c,[["render",h],["__file","index.html.vue"]]),b=JSON.parse('{"path":"/blogs/OS/","title":"北航2024操作系统实验","lang":"en-US","frontmatter":{"categories":["OS"]},"headers":[{"level":2,"title":"实验内容","slug":"实验内容","link":"#实验内容","children":[]},{"level":2,"title":"实验内容的关系","slug":"实验内容的关系","link":"#实验内容的关系","children":[]},{"level":2,"title":"实验设计","slug":"实验设计","link":"#实验设计","children":[]},{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[]}],"git":{"createdTime":1726994140000,"updatedTime":1726994140000,"contributors":[{"name":"gitDebuger","email":"hygchn04@gmail.com","commits":1}]},"filePathRelative":"blogs/OS/README.md"}');export{m as comp,b as data};
