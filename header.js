//Displaying the header with JavaScript

const body=document.body;
const header=document.createElement("header");

const headerInside=`            <nav id="header">
<a href="./index.html" id="logo">Kevin's Portfolio Site</a>
<input type="checkbox" name="" class="check" id="burgerButtonMenu" />
<label for="burgerButtonMenu" class="burgerButton"
  ><img src="./Images/burgetbutton.png" alt=""
/></label>
<ul id="headerNavSmall">
  <li>
    <a id="./home" href="index.html" class="headerOption">Home</a>
    <a href="writing.html" class="headerOption">Blogs</a>
    <a href="./design.html" class="headerOption">Design</a>
    <a href="./essay.html" class="headerOption">Essay</a>
    <a href="./aboutme.html" class="headerOption">About</a>
  </li>
</ul>
</nav>`

header.innerHTML=headerInside;

body.append(header);

//After creating the header, check which page the user is on and make that header option selected

const currentUrl = window.location.href;
const pageName = currentUrl.split("/").pop();

let headerOptions=document.getElementsByClassName("headerOption");
let n=0;

for(n; n<headerOptions.length; n++)
{
  let headerPage=headerOptions[n].href.split("/").pop();;
  if(pageName===headerPage)
  {
    headerOptions[n].classList.add("active");
  }
}