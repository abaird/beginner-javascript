
console.log('it works')

const item = document.querySelector(".item")

const width = 500;
const src = `https://placedog.net/400?${width}`
const desc = 'Cute Pup'
const myHTML = `
  <div className="wrapper">
      <h2>${desc}
      <img src="${src}" alt="${desc}" />
  </div>
`

const myFragment = document.createRange()
  .createContextualFragment(myHTML)

document.body.appendChild(myFragment)
