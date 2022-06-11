function Gallery(gallery) {
  if(!gallery) {
    throw new Error("No Gallery Found!")
  }

  this.gallery = gallery 

  this.images = Array.from(gallery.querySelectorAll('img'))
  this.modal = document.querySelector('.modal')
  this.prevButton = this.modal.querySelector('.prev')
  this.nextButton = this.modal.querySelector('.next')

  this.handleNextButton = this.handleNextButton.bind(this);
  this.handlePrevButton = this.handlePrevButton.bind(this)
  this.handleKeyUp  = this.handleKeyUp.bind(this)
  this.handleClickOutside = this.handleClickOutside.bind(this)

  this.images.forEach(image => {
    image.addEventListener('click', event => this.showImage(event.currentTarget))
  })

  this.images.forEach(image => {
    image.addEventListener('keyup', event => {
      if(event.key === "Enter"){
        this.showImage(event.currentTarget)
      }
    })
  })
}

Gallery.prototype.openModal = function() {
  console.log("opening modal");
  if(this.modal.matches('.open')){
    return
  }
  this.modal.classList.add('open')

  this.modal.addEventListener('click', this.handleClickOutside)
  this.nextButton.addEventListener('click', this.handleNextButton)
  this.prevButton.addEventListener('click', this.handlePrevButton)
  window.addEventListener('keyup', this.handleKeyUp)
}

Gallery.prototype.closeModal = function() {
  if(!this.modal.matches('.open')){
    return
  }
  this.modal.classList.remove('open') 

  this.modal.removeEventListener('click', this.handleClickOutside)
  this.nextButton.removeEventListener('click', this.handleNextButton)
  this.prevButton.removeEventListener('click', this.handlePrevButton)
  window.removeEventListener('keyup', this.handleKeyUp)
}

Gallery.prototype.handleClickOutside = function(e) {
  console.log("in handleClickOutside");
  if (e.target === e.currentTarget) {
    this.closeModal()
  }
}

Gallery.prototype.handleKeyUp = function(event) {
  if (event.key === "Escape") return this.closeModal()
  if (event.key === "ArrowRight") return this.handleNextButton()
  if (event.key === "ArrowLeft") return this.handlePrevButton()
}

Gallery.prototype.handleNextButton = function () {
  this.showImage(this.currentImage.nextElementSibling || this.gallery.firstElementChild)
}

Gallery.prototype.handlePrevButton = function() {
  this.showImage(this.currentImage.previousElementSibling || this.gallery.lastElementChild)
}

Gallery.prototype.showImage = function(el) {
  if (!el) {
    console.info('no image to show')
    return
  }

  this.modal.querySelector('img').src = el.src
  this.modal.querySelector('h2').textContent = el.title
  this.modal.querySelector('figure p').textContent = el.dataset.description
  this.currentImage =el
  this.openModal()
}


const gallery1 = new Gallery(document.querySelector('.gallery1'))
const gallery2 = new Gallery(document.querySelector('.gallery2'))

console.log(gallery1);
console.log(gallery2);