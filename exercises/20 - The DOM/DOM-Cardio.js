// Make a div
const mydiv = document.createElement('div') 
mydiv.textContent = "this is a div"

// add a class of wrapper to it
mydiv.classList = 'wrapper'

// put it into the body
document.body.appendChild(mydiv)

// make an unordered list
const myUl = document.createElement('ul')

// add three list items with the words "one, two, three" in them
// put that list into the above wrapper
const myLi1 = document.createElement('li')
myLi1.textContent = "one"
const myLi2 = document.createElement('li')
myLi2.textContent = "two"
const myLi3 = document.createElement('li')
myLi3.textContent = "three"

mydiv.appendChild(myUl)
myUl.appendChild(myLi1)
myUl.appendChild(myLi2)
myUl.appendChild(myLi3)

// create an image
const img = document.createElement('img')

// set the source to an image
img.src = 'https://placedog.net/400'
// set the width to 250
img.width = 250
// add a class of cute
img.classList.add('cute')
// add an alt of Cute Puppy
img.alt = "Cute Puppy"
// Append that image to the wrapper
mydiv.appendChild(img)

// with HTML string, make a div, with two paragraphs inside of it
const html = `<div>
    <p>Here is my first text</p>
    <p>Here is my second text</p>
</div>`
// put this div before the unordered list from above
myUl.insertAdjacentHTML('beforebegin', html)

// add a class to the second paragraph called warning
const ps = document.querySelectorAll("div > p")
ps[1].classList = "warning"
// remove the first paragraph
ps[0].remove()

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
function generatePlayerCard(name, age, height) {
    const ageInDogYears = age * 7
    const html = `<div class="playerCard">
        <h2>${name} - ${age}</h2>
        <p>They are ${height} and ${age} years old. In dog years this person would be ${ageInDogYears}. That would be a tall dog!</p>
    </div>`
    return html
}

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards
const cardContainer = document.createElement('div')
cardContainer.classList = "cards"

// make 4 player cards using generatePlayerCard
const card1 = generatePlayerCard("Bob", 10, 200)
const card2 = generatePlayerCard("Lucy", 20, 300)
const card3 = generatePlayerCard("Shirley", 30, 400)
const card4 = generatePlayerCard("Stan", 40, 500)

// append those cards to the div
cardContainer.insertAdjacentHTML('afterbegin', card4)
cardContainer.insertAdjacentHTML('afterbegin', card3)
cardContainer.insertAdjacentHTML('afterbegin', card2)
cardContainer.insertAdjacentHTML('afterbegin', card1)

// put the div into the DOM just before the wrapper element
mydiv.insertAdjacentElement('afterbegin', cardContainer)
// Bonus, put a delete Button on each card so when you click it, the whole card is removed
document.querySelectorAll("div.playerCard").forEach(ele => {
    const button = document.createElement("button")
    button.textContent = `Delete`
    button.addEventListener("click", deleteCard)
    ele.appendChild(button)
})
// select all the buttons!
// make out delete function
function deleteCard(event) {
  event.currentTarget.closest('.playerCard').remove()
}
// loop over them and attach a listener
