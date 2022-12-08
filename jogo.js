var musica = document.getElementById("oi");
var musica1 = document.getElementById("morre");
var musica2 = document.getElementById("pulo");
var pontuacao = 0;

 musica.play();
 function tocar(){
    tocar_musica = setInterval(()=>{
        musica.play();
    }, 30000)
    musica.play();

    pontos = setInterval(()=>{
        if(pontuacao >= 5){
            window.location = "final.html";
        }
        pontuacao = pontuacao + 1;
        document.getElementById("pontos").innerHTML = pontuacao;
    }, 1000)
}


const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");

const jump = () => {
    mario.classList.add("jump");

    setTimeout(() =>{
        mario.classList.remove("jump");
    }, 500);
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    if(pipePosition <= 120 && pipePosition > 0 && marioPosition <80){
        setTimeout(pontos) ;
        pontuacao = 0;
        musica1.play();
        pipe.style.animation = 'none';
        pipe.style.left =`${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.left =`${marioPosition}px`;


        mario.src = 'game-over.png';
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        clearInterval(loop);
    }

}, 10);


document.addEventListener("keydown", jump);

