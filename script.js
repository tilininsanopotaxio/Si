function uno(){
   let cantidad = document.getElementById("Cantidad_1").value;
   let total = parseInt(cantidad) * 145;
   document.getElementById("total_1").value = total;
}
function dos(){
   let cantidad1 = document.getElementById("cantidad_2").value;
   let total2 = parseInt(cantidad1) * 175;
   document.getElementById("total_2").value = total2;
}
function tres(){
   let cantidad3 = document.getElementById("cantidad_3").value;
   let total3 = parseInt(cantidad3) * 225;
   document.getElementById("total_3").value = total3;
}
function cuatro(){
   let cantidad4 = document.getElementById("cantidad_4").value;
   let total4 = parseInt(cantidad4) * 347;
   document.getElementById("total_4").value = total4;
}
function cinco(){
   let cantidad5 = document.getElementById("cantidad_5").value;
   let total5 = parseInt(cantidad5) * 455;
   document.getElementById("total_5").value = total5;
}
function seis(){
   let cantidad6 = document.getElementById("cantidad_6").value;
   let total6 = parseInt(cantidad6) * 400;
   document.getElementById("total_6").value = total6;
}
function siete(){
   let cantidad7 = document.getElementById("cantidad_7").value;
   let total7 = parseInt(cantidad7) * 600;
   document.getElementById("total_7").value = total7;
}
function ocho(){
   let cantidad8 = document.getElementById("cantidad_8").value;
   let total8 = parseInt(cantidad8) * 377;
   document.getElementById("total_8").value = total8;
}
function nueve(){
   let cantidad9 = document.getElementById("cantidad_9").value;
   let total9 = parseInt(cantidad9) * 238;
   document.getElementById("total_9").value = total9;
}
function diez(){
   let cantidad10 = document.getElementById("cantidad_10").value;
   let total10 = parseInt(cantidad10) * 347;
   document.getElementById("total_10").value = total10;
}
function once(){
   let cantidad11 = document.getElementById("cantidad_11").value;
   let total11 = parseInt(cantidad11) * 258;
   document.getElementById("total_11").value = total11;
}
function doce(){
   let cantidad12 = document.getElementById("cantidad_12").value;
   let total12 = parseInt(cantidad12) * 258;
   document.getElementById("total_12").value = total12;
}
window.onscroll = function(){
   if(document.documentElement.scrollTop > 100){
      document.querySelector(".go-top-container")
      .classList.add("show");
   }else{
      document.querySelector(".go-top-container")
      .classList.remove("show");
   }
}
document.querySelector(".go-top-container")
.addEventListener("click", () =>(
   window.scrollTo({
      top:0,
      behavior: "smooth"
   })
))