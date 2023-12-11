/**
    Para selecionar emojis no Visual Studio Code (VSCode) no Linux, você pode: 
    - Pressionar Cmd/Ctrl + Shift + X
    - Executar o comando Emojisense: Pick an emoji
    - Usar as teclas de atalho padrão: Ctrl + Alt + I

    Para Windows:
    - Digitar **Windows tecla do logotipo + . (ponto)** durante a entrada de texto

    Para Mac:
    - Selecionar Editar > Emoji e Símbolos
    - Usar o atalho Control + Command + Espaço
    - Procurar o emoji desejado e aplicá-lo ao texto
 */

const emojis = ["😟", "😟", "😞", "😞", "😕", "😕", "😄", "😄", "😖", "😖", "😐", "😐", "😢", "😢", "😮", "😮"]; 
let openCards = [];

let shuffleEmojis = emojis.sort(()=>(Math.random() > 0.5 ? 2 : -1));

for (let i = 0; i < emojis.length; i++){
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = shuffleEmojis[i]; 
    box.onclick = handleClick;

    document.querySelector(".game").appendChild(box);
}

function handleClick(){
    if (openCards.length < 2){
        this.classList.add("boxOpen");
        openCards.push(this);
    }

    if (openCards.length == 2){
        setTimeout(checkMatch, 500);
    }
}

function checkMatch(){
    if (openCards[0].innerHTML === openCards[1].innerHTML){
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");
    }
    else {
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");
    }

    openCards = [];

    if (document.querySelectorAll(".boxMatch").length === emojis.length){
        alert("Você venceu!");
    }
}

