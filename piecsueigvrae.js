var acc = document.getElementsByClassName("toggle");
let weeklyDevBlogs = [...wdb];
console.log([weeklyDevBlogs[1]]);
//console.log(acc.length);
var i;


for (i = 0; i < acc.length; i++) {
  ClickButton(acc[i] , i)
  OnEnter(acc[i]);
  OnExit(acc[i]);

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

  //when a button gets clicked
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
