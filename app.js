document.addEventListener('DOMContentLoaded', () => {
  //list all card options
  const cardArray = [
    {
      name: 'mario',
      img: 'images/mario.png'
    },
    {
      name: 'luigi',
      img: 'images/luigi.png'
    },
    {
      name: 'bowser',
      img: 'images/bowser.png'
    },
    {
      name: 'goomba',
      img: 'images/goomba.png'
    },
    {
      name: 'peach',
      img: 'images/peach.png'
    },
    {
      name: 'yoshi',
      img: 'images/yoshi.png'
    },
    {
      name: 'mario',
      img: 'images/mario.png'
    },
    {
      name: 'luigi',
      img: 'images/luigi.png'
    },
    {
      name: 'bowser',
      img: 'images/bowser.png'
    },
    {
      name: 'goomba',
      img: 'images/goomba.png'
    },
    {
      name: 'peach',
      img: 'images/peach.png'
    },
    {
      name: 'yoshi',
      img: 'images/yoshi.png'
    }
  ]

  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  let cardsChosen = []
  let cardsChosenId = []
  let cardsWon = []

  //create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img')
      card.setAttribute('src', 'images/mario_box.jpg')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }

  //check for matches
  function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/mario_box.jpg')
      cards[optionTwoId].setAttribute('src', 'images/mario_box.jpg')
      alert('You have clicked the same image!')
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      alert('You found a match.')
      cards[optionOneId].setAttribute('src', 'images/white.png')
      cards[optionTwoId].setAttribute('src', 'images/white.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'images/mario_box.jpg')
      cards[optionTwoId].setAttribute('src', 'images/mario_box.jpg')
      alert('Not this time! Try again.')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = 'Yay! You found them all!'
    }
  }

  //flip your card
  function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 500)
    }
  }

  createBoard()
})
