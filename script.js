function imc(){
const altura = (document.getElementById('altura').value)/100
const peso = document.getElementById('peso').value;



const valorimc = peso/(altura*altura) ;
const text =''
if(valorimc <18.5){
   
}else if(valorimc <24.9){
 
}else if(valorimc <29.9){
 
}

document.getElementById('text_area').innerText= valorimc
}