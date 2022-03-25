console.log("works!")

const cardButtons = document.querySelectorAll('.card button')
const modalInner = document.querySelector('.modal-inner')
const modalOuter = document.querySelector('.modal-outer')
const modalCloseButton = modalOuter.querySelector('.modal-actions button')

function handleCardButtonClick(event) {
  const button = event.currentTarget;
  const card = button.closest('.card')
  const imgSrc = card.querySelector('img').src;
  console.log(imgSrc)
  const desc = card.dataset.description;
  const name = card.querySelector('h2').textContent
  console.log(desc)
  modalInner.innerHTML = `
    <img width="600" height="600" src="${imgSrc.replace('200', '600')} alt="${name}>
    <p>${desc}</p>
  `
  modalOuter.classList.add('open')
}

cardButtons.forEach(button =>
    button.addEventListener('click', handleCardButtonClick)
)

function modalClose(){
    modalOuter.classList.remove('open')
}

modalCloseButton.addEventListener('click', modalClose)

modalOuter.addEventListener('click', function(event){
    const isOutside = !event.target.closest('.modal-inner')
    if(isOutside) {
      modalClose()
    }
})

window.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
        modalClose()
    }
})