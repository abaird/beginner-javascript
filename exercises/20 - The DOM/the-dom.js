// const p = document.querySelector("p")
// const images = document.querySelectorAll(".item img")
// console.log(p)
// console.log(images)

// const heading = document.querySelector("h2")
// heading.textContent = "Alan is awesome"
// console.dir(heading.textContent)
// console.log(heading.innerHTML)
// console.log(heading.outerHTML)

// const pizzaList = document.querySelector(".pizza")
// console.log(pizzaList.textContent)

// pizzaList.insertAdjacentText("afterbegin", "🍕")


// classes
const pic = document.querySelector('.nice')
console.log(pic.classList)

function toggleRound(){
    pic.classList.toggle('round')
}
pic.addEventListener('click', toggleRound)

pic.alt = "stock pic"