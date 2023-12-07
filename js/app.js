let cardUser = document.querySelector('.card__user');
let cardComp = document.querySelector('.card__comp');
let btnGenerate = document.querySelector('.generate');
let scoreUser = document.querySelector('.score__user')
let scoreComp = document.querySelector('.score__comp')
let triesHtml = document.querySelector('.tries')
let restart = document.querySelector('.restart')
let end = document.querySelector('.end')
let sU = document.querySelector('.card__score-user')
let sC = document.querySelector('.card__score-comp')
let userName = prompt("Введіть ваше ім'я");

let userNameClass = document.querySelector('.username')
userNameClass.innerHTML = userName
let counterScoresUser = 0;
let counterScoresComp = 0;
let tries = 0;


function dima(){
    tries++;
    triesHtml.innerHTML = '<span class="tries">Спроба ' + tries + ' з 3</span>'
    let arrImg = ['6.png', '7.png', '8.png', '9.png', '10.png', 'valet.png', 'dama.png', 'korol.png', 'tuz.png']
    let arrScore = [6, 7, 8, 9, 10, 2, 3, 4, 11]

    let randomNumUser = Math.floor(Math.random()*arrImg.length)
    let randomNumComp = Math.floor(Math.random()*arrImg.length)
    

    cardUser.innerHTML = '<img width="180px" height="275px" src="img/' + arrImg[randomNumUser] + '" alt="">'
    cardComp.innerHTML = '<img width="180px" height="275px" src="img/' + arrImg[randomNumComp] + '" alt="">'

    counterScoresUser += arrScore[randomNumUser]
    counterScoresComp += arrScore[randomNumComp]
    sU.innerHTML = arrScore[randomNumUser]
    sC.innerHTML = arrScore[randomNumComp]
    scoreUser.innerHTML = counterScoresUser
    scoreComp.innerHTML = counterScoresComp


    if (tries == 3) {
        end.style.display = 'block'

        if (counterScoresUser >= counterScoresComp) {
            end.innerHTML += '<span>Ви перемогли!</span>'
        } else if (counterScoresUser <= counterScoresComp) {
            end.innerHTML += '<span>Ви програли :(</span>'

        } else {
            end.innerHTML += '<span>Нічия</span>'
        }
        restart.style.display = 'block'
        restart.addEventListener('click', () => {
            location.reload();
        })
        
        btnGenerate.removeEventListener('click', dima)
    }
}


btnGenerate.addEventListener('click', dima)


