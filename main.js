const showLuck = document.querySelector('#ShowLuck')
const openNew = document.querySelector('#OpenNew')
const screen1 = document.querySelector('.Screen1')
const screen2 = document.querySelector('.Screen2')
const respostas = [
    "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
    "O sucesso está ao seu alcance. Acredite em si mesmo.",
    "A sorte está sempre do lado daqueles que persistem.",
    "Grandes coisas começam com pequenos passos.",
    "Não tenha medo de falhar. É uma oportunidade para aprender e crescer.",
    "Seja grato por todas as coisas boas que acontecem em sua vida.",
    "A paciência é uma virtude. Continue trabalhando duro e sua hora chegará.",
    "Todas as grandes conquistas começam com um sonho.",
    "Não se preocupe com o que as outras pessoas pensam. Acredite em si mesmo e siga em frente.",
    "Aproveite cada momento da vida. Eles não voltam.",
    "Acredite no poder do amor e da bondade.",
    "A vida é uma jornada emocionante. Aproveite cada passo do caminho.",
    "Mantenha-se positivo e coisas positivas acontecerão.",
    "Aprenda com seus erros e você se tornará mais forte.",
    "A felicidade não é algo que você busca, é algo que você cria.",
    "Não tenha medo de tentar coisas novas. Você pode se surpreender com o resultado.",
    "A gratidão é a chave para a felicidade.",
    "O fracasso não é o fim. É uma oportunidade para tentar novamente.",
    "Mantenha seus olhos no prêmio e continue trabalhando duro.",
    "Acredite em si mesmo e você pode alcançar qualquer coisa.",
  ]
const  totalRespostas = respostas.length
let numeroAleatorio = Math.floor(Math.random() * totalRespostas)

showLuck.addEventListener('click',handleShowLuck)
openNew.addEventListener('click',handleOpenNew)
document.addEventListener('keydown', function (e) {
    if (e.key=='Enter' && screen1.classList.contains('hide')) {
        handleOpenNew()
    }
})

function handleShowLuck () {
    screen2.querySelector("p").innerText = respostas[numeroAleatorio]
    toogleScreen()
}

function handleOpenNew () {
    numeroAleatorio = Math.floor(Math.random() * totalRespostas)
    toogleScreen()
}

function toogleScreen () {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}