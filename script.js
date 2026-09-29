const botoesCurtir = document.querySelectorAll(".curtir");
botoesCurtir.ForEach(function(botaoCurtir){
    let  curtiu = false;
    botaoCurtir.addEventListener("click", curtir);
    function curtir (){
        const contador = botaoCurtir.querySelector("span");
        if(curtiu === false){
            contador.textContent++;0
            curtiu = true;
        }
else {
    contador.textContent--;
    curtiu = false;
           }
}
} 
);
