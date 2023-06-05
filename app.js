let weeklyDevBlogs
let acc = document.getElementsByClassName("toggle");
let weeklyDevBlogButtons = document.getElementsByClassName("wdbButton");
//console.log(weeklyDevBlogButtons)
if(!weeklyDevBlogButtons.length==0)
{
  weeklyDevBlogs = [...wdb];  
  console.log("weeklydevblog");
}

/*let btns = document.querySelectorAll("button");*/
//console.log(acc);
///*console.log(btns);*/

let i;
console.log(acc[1]);
console.log(i);
console.log(weeklyDevBlogs)

for (i = 0; i < acc.length; i++) {
  if(acc[i].classList.contains("wdbButton"))
  {
    FetchContent(acc[i], i, weeklyDevBlogs)
  }else if(acc[i].classList.contains("arButton"))
  {
    FetchContent(acc[i], i, weeklyDevBlogs)
    console.log("cheese" + i);
  }
 
  ClickButton(acc[i] , i)
  OnEnter(acc[i]);
  OnExit(acc[i]);
}

ClearEmptyParagraphs();

function ClearEmptyParagraphs()
{
  let paragraphs=document.querySelectorAll("p");
  let k;
  for(k=0; k<paragraphs.length; k++)
  {
    if(paragraphs[k].textContent==="")
    {
      paragraphs[k].style.display="none";
    }
  }
}

//fetching the corresponding WDB content for WDB buttons.
//This functin looks long but it only does 4 things
//1-creates an article section which is a child of the button
//2-assigns the information from the wdb*-**-
 function FetchContent(btn, i, weeklyDevBlogs)
 {
  let panel=CreateArticle(btn);
  let {headingOne,
  oneParagraphOne,
  oneParagraphTwo,
  oneParagraphThree,
  headingTwo,
  twoParagraphOne,
  twoParagraphTwo,
  twoParagraphThree,
  headingThree,
  threeParagraphOne,
  threeParagraphTwo,
  threeParagraphThree,
  references,
  referenceOne,
  referenceTwo,} = weeklyDevBlogs[i];
 panel.innerHTML=`
  <p><strong>${headingOne}</strong>${oneParagraphOne}</p>
  <p>${oneParagraphTwo}</p>
  <p>${oneParagraphThree}</p>
  <p><strong>${headingTwo}</strong>${twoParagraphOne}</p>
  <p>${twoParagraphTwo}</p>
  <p>${twoParagraphThree}</p>
  <p><strong>${headingThree}</strong>${threeParagraphOne}</p>
  <p>${threeParagraphTwo}</p>
  <p>${threeParagraphThree}</p>
  <strong>References: </strong>
  <p>${referenceOne}</p>
  <p>${referenceTwo}</p>`;
 }

 function CreateArticle(btn){
  let panel=document.createElement("article")
  btn.appendChild(panel);
  panel.classList.add("weeks");
  return panel;
 }

//assign eventlisteners for each button
function ClickButton(btn, index)
  {
    let panel = btn.querySelector("article");
    btn.addEventListener("click", function(){
      this.classList.toggle("active");
      Clicked(panel, btn);
    })
  }

  //assign mouseenter eventlistener
  function OnEnter(btn)
  {
    if(!btn.classList.contains("hasDesc"))
    {
      return;
    }
    let header=btn.querySelector("h3");
    let desc=btn.querySelector("p");
    btn.addEventListener("mouseenter", function(){
      header.style.display= "none";
      desc.style.display="block";
    })
  }

  ////assign mouseleave eventlistener
  function OnExit(btn)
  {
    if(!btn.classList.contains("hasDesc"))
    {
      return;
    }
    let header=btn.querySelector("h3");
    let desc=btn.querySelector("p");
    btn.addEventListener("mouseleave", function(){
      header.style.display= "block";
      desc.style.display="none";
    })
  }

  //click event listener options
  function Clicked(panel, btn){

    btn.classList.toggle("active");
    if (panel.style.display === "block") {
      panel.style.display = "none";
      btn.style.backgroundColor = "rgba(245,245,220,1)";
    } else {
      panel.style.display = "block";
      btn.style.backgroundColor = "rgba(245,245,220,0.5)";
    }
  }
