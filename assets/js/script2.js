const box1 = document.getElementById("b1");
const box2 = document.getElementById("b2");
const box3 = document.getElementById("b3");
const box4 = document.getElementById("b4");
const colorSel = document.getElementById("colorSel");
// color defecto
let colorDef = "";



box1.addEventListener("click", () => {
    box1.style.backgroundColor = colorDef
 })
 box2.addEventListener("click", () => {
    box2.style.backgroundColor = colorDef
 })
 box3.addEventListener("click", () => {
    box3.style.backgroundColor = colorDef
 })
 box4.addEventListener("click", () => {
    box4.style.backgroundColor = colorDef
 })

document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
      colorDef = "red"
      colorSel.innerHTML = "Rojo"
         return
    }
    if (event.key === 's') {
      colorDef = "blue"
      colorSel.innerHTML = "Azul"
         return
    }
    if (event.key === 'd') {
      colorDef = "yellow"
      colorSel.innerHTML = "Amarillo"
         return 
    }
    })
    

console.log(colorDef)