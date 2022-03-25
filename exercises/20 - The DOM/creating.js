
console.log('it works')

const myParagraph = document.createElement('p')
myParagraph.textContent = "I am a P"
myParagraph.classList.add('special')

console.log(myParagraph)

const myImage = document.createElement('img')
myImage.src = "https://picsum.photos/500"
myImage.alt = "nice photo"

console.log(myImage)

const myDiv = document.createElement('div')

myDiv.classList.add('wrapper')
console.log(myDiv)

myDiv.appendChild(myParagraph)
myDiv.appendChild(myImage)
document.body.appendChild(myDiv)

const heading = document.createElement('h2')
heading.textContent = "Cool things"

myDiv.insertAdjacentElement('afterbegin', heading)

myUl = document.createElement('ul')

const ary = [1,2,3,4,5]
for (const element of ary) {
  var myLi = document.createElement('li')
  myLi.classList = `li_${element}`
  myLi.textContent = "element number " + element
  myUl.appendChild(myLi) 
}

document.body.appendChild(myUl)
