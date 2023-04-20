function imc(){
const altura = (document.getElementById('altura').value)/100
const peso = document.getElementById('peso').value;



const valorimc = ( peso/(altura*altura )).toFixed(1) ;


if(valorimc <18.5){
   alert (`seu IMC é ${valorimc}, então voçê tá magrin!`);
}else if(valorimc <24.9){
    alert (`seu IMC é ${valorimc}, então voçê tá um pitel!`)
}else if(valorimc > 30){
    alert (`seu IMC é ${valorimc}, então voçê tá gordin`)
}

document.getElementById('text_area').innerText= `seu imc é = ${valorimc} `

}

