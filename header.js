const body=document.body;
const header=document.createElement("header");

const headerInside=`<nav id="header">
<a href="./index.html" id="logo">Kevin's Portfolio Site</a>
<ul>
  <li>
    <a id="./home" href="index.html" class="headerOption">Home</a>
    <a href="./writing.html" class="headerOption">Blogs</a>
    <a href="./design.html" class="headerOption">Design</a>
    <a href="./essay.html" class="headerOption">Essay</a>
    <a href="./aboutme.html" class="headerOption">About</a>
  </li>
</ul>
</nav>`

header.innerHTML=headerInside;

body.append(header);