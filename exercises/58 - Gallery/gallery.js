function Gallery(gallery) {
  if(!gallery) {
    throw new Error("No Gallery Found!")
  }

  const images = Array.from(gallery.querySelectorAll('img'))
  const modal = document.querySelector('.modal')
  const prevButton = modal.querySelector('.prev')
  const nextButton = modal.querySelector('.next')
  let currentImage

  function openModal() {
    console.log("opening modal");
    if(modal.matches('.open')){
      return
    }
    modal.classList.add('open')

    modal.addEventListener('click', handleClickOutside)
    nextButton.addEventListener('click', handleNextButton)
    prevButton.addEventListener('click', handlePrevButton)
    window.addEventListener('keyup', handleKeyUp)
  }

  function closeModal() {
    if(!modal.matches('.open')){
      return
    }
    modal.classList.remove('open')

    modal.removeEventListener('click', handleClickOutside)
    nextButton.removeEventListener('click', handleNextButton)
    prevButton.removeEventListener('click', handlePrevButton)
    window.removeEventListener('keyup', handleKeyUp)
}

  function handleClickOutside(e){
    console.log("in handleClickOutside");
    if (e.target === e.currentTarget) {
      closeModal()
    }
  }

  function handleKeyUp(event) {
    if (event.key === "Escape") return closeModal()
    if (event.key === "ArrowRight") return handleNextButton()
    if (event.key === "ArrowLeft") return handlePrevButton()
  }

  function handleNextButton() {
    showImage(currentImage.nextElementSibling || gallery.firstElementChild)
  }

  function handlePrevButton() {
    showImage(currentImage.previousElementSibling || gallery.lastElementChild)
  }

  function showImage(el) {
    if (!el) {
      console.info('no image to show')
      return
    }

    modal.querySelector('img').src = el.src
    modal.querySelector('h2').textContent = el.title
    modal.querySelector('figure p').textContent = el.dataset.description
    currentImage =el
    openModal()
  }

  images.forEach(image => {
    image.addEventListener('click', event => showImage(event.currentTarget))
  })

  images.forEach(image => {
    image.addEventListener('keyup', event => {
      if(event.key === "Enter"){
        showImage(event.currentTarget)
      }
    })
  })
}

const gallery1 = Gallery(document.querySelector('.gallery1'))
const gallery2 = Gallery(document.querySelector('.gallery2'))