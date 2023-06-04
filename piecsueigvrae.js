var acc = document.getElementsByClassName("toggle");
console.log(acc.length);
var i;

for (i = 0; i < acc.length; i++) {
  ClickButton(acc[i])
  OnEnter(acc[i]);
  OnExit(acc[i]);
}

function ClickButton(btn)
  {
    let panel = btn.querySelector("article");
    btn.addEventListener("click", function(){
      this.classList.toggle("active");
      Clicked(panel, btn);
      /*if (panel.style.display === "block") {
        panel.style.display = "none";
        btn.style.backgroundColor = "rgba(245,245,220,1)";
      } else {
        panel.style.display = "block";
        btn.style.backgroundColor = "rgba(245,245,220,0.5)";
      }*/
    })
  }

  function OnEnter(btn)
  {
    let header=btn.querySelector("h3");
    let desc=btn.querySelector("p");
    btn.addEventListener("mouseenter", function(){
      header.style.display= "none";
      desc.style.display="block";
    })
  }
  function OnExit(btn)
  {
    let header=btn.querySelector("h3");
    let desc=btn.querySelector("p");
    btn.addEventListener("mouseleave", function(){
      header.style.display= "block";
      desc.style.display="none";
    })
  }

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
