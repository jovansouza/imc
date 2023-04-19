function imc(){
const altura = (document.getElementById('altura').value)/100
const peso = document.getElementById('peso').value;



const valorimc = peso/(altura*altura) ;
const text =''
if(valorimc <18.5){
   alert ('tá magrin')
}else if(valorimc <24.9){
    alert ('tá um pitel')
}else if(valorimc <29.9){
    alert ('tá gordin')
}

document.getElementById('text_area').innerText= valorimc
}