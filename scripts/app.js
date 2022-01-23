const form = document.querySelector(".form-quizz");
const responses = ['c', 'a', 'b', 'a', 'c'];
const emojis = ['✔️','✨','👀','😭','👎'];
const titreResultats = document.querySelector(".resultats h2");
const noteResultats = document.querySelector(".note");
const aideResultats = document.querySelector(".aide");
const touteLesQuestions = document.querySelectorAll(".question-block");
let tabResultats = [];
let verifTableau = [];



form.addEventListener('submit', (e) => {
    e.preventDefault();
    tabResultats = [];

    for(let i = 1; i < touteLesQuestions.length +1; i++ ){
        tabResultats.push(document.querySelector(`input[name="q${i}"]:checked`).value);
        console.log(tabResultats)
        
    }
    verifFunc(tabResultats);

})

function verifFunc(tabResultats){
    let i = 0;
    verifTableau = [];
    for(let element of tabResultats){
        if(element === responses[i]){
            verifTableau.push(true);
        }else{
            verifTableau.push(false);
        }
        i++;
    }
    afficheResultats(verifTableau);
    couleurFonction(verifTableau);
}


function afficheResultats(tabcheck){
    const nbDeFautes = tabcheck.filter(element => element !== true).length;
    console.log(nbDeFautes);
    switch (nbDeFautes){
        case 0:
            titreResultats.innerText = `${emojis[0]} Bravo c'est un sans faute ${emojis[0]}`;
            aideResultats.innerText = '';
            noteResultats.innerText = '5/5';
            break;
        case 1:
            titreResultats.innerText = `${emojis[1]} Vous y etes presques... ${emojis[1]}`;
            aideResultats.innerText = 'Retenter une autre réponse dans les cases rouges et re-validez !';
            noteResultats.innerText = '4/5';
            break;
        case 2:
            titreResultats.innerText = `${emojis[1]} Encore un effort... ${emojis[2]}`;
            aideResultats.innerText = 'Retenter une autre réponse dans les cases rouges et re-validez !';
            noteResultats.innerText = '3/5';
            break;
        case 3:
            titreResultats.innerText = `${emojis[2]} Il reste encore quelques erreur ${emojis[3]}`;
            aideResultats.innerText = 'Retenter une autre réponse dans les cases rouges et re-validez !';
            noteResultats.innerText = '2/5';
            break;
        case 4:
            titreResultats.innerText = `${emojis[3]} Peut mieux faire... ${emojis[3]}`;
            aideResultats.innerText = 'Retenter une autre réponse dans les cases rouges et re-validez !';
            noteResultats.innerText = '1/5';
            break;
        case 5:
            titreResultats.innerText = `${emojis[4]} Bravo c'est un sans faute ${emojis[4]}`;
            aideResultats.innerText = 'Retenter une autre réponse dans les cases rouges et re-validez !';
            noteResultats.innerText = '0/5';
            break;
        default:
            aideResultats.innerText = 'Oups cas innatendu apparemment.. '
            
    }
}

function couleurFonction(tabValBool){
    let i = 0;
    for(let i = 0; i < tabValBool.length; i++){
        console.log(touteLesQuestions[i])
        if(tabValBool[i]){
            touteLesQuestions[i].style.background = "lightgreen";
        }else{
            touteLesQuestions[i].style.background = "red";
            touteLesQuestions[i].classList.add('echec');

            setTimeout(() => {
                touteLesQuestions[i].classList.remove('echec');

            }, 500);

        }
        

    }
}


touteLesQuestions.forEach(element => {
    element.addEventListener('click', () => {
        element.style.background = 'white';
    })
})