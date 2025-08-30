const board = document.getElementById("board") //  getElementById (pega p elemento com id no html) //
const restartBtn = document.getElementById("restart-btn")

const cardsArray = ["❤️","❤️",   "💕","💕",   "💖","💖",   "💔","💔",   "💗","💗",   "💞","💞",   "💘","💘",   "💓","💓",]

let flippedCards = []
let matchedCards = []
let lockBoard =  false

function shuffleCards() {
    let shuffledArray = [...cardsArray]

    for (let i = shuffledArray.length - 1; 
        i > 0 ; i-- ) {
            const j = Math.floor(Math.random() * (i + 1))
            
            [shuffledArray[i], shuffledArray[j] = shuffledArray[j], shuffledArray[i]]
        }
        return shuffledArray
}

function createBoard() {
    board.innerHTML = ""
    const shuffleCards = shuffleCards() 

    shuffleCards.array.forEach( (card, index) => {
        const  cardElement =  document.createElement("div")
        cardElement.classList.add("card") 
        cardElement.dataset.card = card
        cardElement.dataset.index =  index

        cardElement.addEventListener("click".flipCard)
        board.appendChild(cardElement)
    });
}
createBoard()