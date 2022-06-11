function Slider(slider) {
  if (!slider instanceof Element){
    throw new Error("no slider passed in!")
  }

  this.slider = slider
  this.slides = this.slider.querySelector('.slides')
  const prevButton = this.slider.querySelector('.goToPrev')
  const nextButton = this.slider.querySelector('.goToNext')

  // console.log(this);
  this.startSlider()
  this.applyClasses()

  prevButton.addEventListener('click', () => this.move('back'))
  nextButton.addEventListener('click', () => this.move())
}

Slider.prototype.startSlider = function() {
  this.current = this.slider.querySelector('.current') || this.slides.firstElementChild
  this.prev = this.current.previousElementSibling || this.slides.lastElementChild
  this.next = this.current.nextElementSibling || this.slides.firstElementChild
  // console.log({current: this.current.textContent, prev: this.prev.textContent, next: this.next.textContent});
}

Slider.prototype.applyClasses = function() {
  this.current.classList.add('current')  
  this.prev.classList.add('prev')  
  this.next.classList.add('next')  
}

Slider.prototype.move = function(direction) {
  const classesToRemove = ['prev', 'current', 'next'];
  // console.log(prev, current, next);
  [this.prev, this.current, this.next].forEach(el => el.classList.remove(...classesToRemove))

  if (direction === 'back') {
    [this.prev, this.current, this.next] = [
      this.prev.previousElementSibling || this.slides.lastElementChild, 
      this.prev, 
      this.current ]
  } else {
    [this.prev, this.current, this.next] = [
      this.current, 
      this.next, 
      this.next.nextElementSibling || this.slides.firstElementChild
    ]
  }

  this.applyClasses()
}

const mySlider = new Slider(document.querySelector('.slider'))
const dogSlider = new Slider(document.querySelector('.dog-slider'))

// console.log(mySlider);
// console.log(dogSlider);

window.dogSlider = dogSlider

window.addEventListener('keyup', function(event){
  if (event.key == "ArrowRight") {
    dogSlider.move()
  } 
  if (event.key == "ArrowLeft"){
    dogSlider.move('back')
  } 
})
