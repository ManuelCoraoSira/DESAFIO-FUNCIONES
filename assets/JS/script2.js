const div1 = document.getElementById("box2");
const div2 = document.getElementById("box3");
const div3 = document.getElementById("box4");
const div4 = document.getElementById("box5");
  
const cambiarColor = (box) => {
    box.srcElement.style.backgroundColor ="black";
}

div1.addEventListener("click", cambiarColor);
div2.addEventListener("click", cambiarColor); 
div3.addEventListener("click", cambiarColor);
div4.addEventListener("click", cambiarColor);

function createDiv(color){
    const newDiv = document.createElement("div")
    newDiv.style.height = "200px";
    newDiv.style.width = "200px";
    newDiv.style.backgroundColor = color;
    document.body.appendChild(newDiv)
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'a' || event.key === "A") {key.style.backgroundColor = "pink"; document.querySelector("#colorResult").innerHTML =
    "Color seleccionado: Rosado";
    } else if (event.key === 's' || event.key === "S") {key.style.backgroundColor = "orange"; document.querySelector("#colorResult").innerHTML =
    "Color seleccionado: Naranja";
    } else if (event.key === 'd' || event.key === "D") {key.style.backgroundColor = "skyblue";  document.querySelector("#colorResult").innerHTML =
    "Color seleccionado: Azul Cielo";
    } else if(event.key === "q" || event.key === "Q"){
    createDiv("yellow");
    } else if(event.key === "w" || event.key === "W"){
    createDiv("sienna");
    } else if(event.key === "e" || event.key === "E"){
    createDiv("navy");
    }
})

  