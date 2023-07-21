function pintar(elemento, color = "green") {
    elemento.style.backgroundColor = color;
  }
  
  ele = document.getElementById("box1");
  pintar(ele);
  
  ele.addEventListener("click", function () {
    pintar(ele, "yellow");
    });