const btn = document.querySelectorAll(".btn");
const js = document.querySelector(".js");
const au = document.querySelector(".au");
btn[0].addEventListener("click", () => {
  js.style.color = "orange";
  btn[0].style.boxShadow = "8px 8px 4px orange";
  btn[1].style.boxShadow = "8px 8px 4px rgb(100, 81, 81)";
  btn[2].style.boxShadow = "8px 8px 4px rgb(100, 81, 81)";
  btn[3].style.boxShadow = "8px 8px 4px rgb(100, 81, 81)";

});

btn[1].addEventListener("click", () => {
  js.style.color = "yellow";
  btn[0].style.boxShadow = "8px 8px 4px rgb(100, 81, 81)";
  btn[2].style.boxShadow = "8px 8px 4px rgb(100, 81, 81)";
  btn[3].style.boxShadow = "8px 8px 4px rgb(100, 81, 81)";
  btn[1].style.boxShadow = "8px 8px 4px yellow";
});
btn[2].addEventListener("click", () => {
  js.style.color = "chartreuse";
   btn[0].style.boxShadow = "8px 8px 4px rgb(100, 81, 81)";
   btn[1].style.boxShadow = "8px 8px 4px rgb(100, 81, 81)";
   btn[2].style.boxShadow = "8px 8px 4px chartreuse";
   btn[3].style.boxShadow = "8px 8px 4px rgb(100, 81, 81)";
  
  
});
btn[3].addEventListener("click", () => {
  js.style.color = "red";
  btn[0].style.boxShadow = "8px 8px 4px rgb(100, 81, 81)";
   btn[3].style.boxShadow = "8px 8px 4px red";
   btn[2].style.boxShadow = "8px 8px 4px rgb(100, 81, 81)";
   btn[1].style.boxShadow = "8px 8px 4px rgb(100, 81, 81)";

});

