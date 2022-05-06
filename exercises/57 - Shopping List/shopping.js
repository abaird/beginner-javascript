const shoppingForm = document.querySelector('.shopping')
const list = document.querySelector('.list')

let items = []

function handleSubmit(e) {
  e.preventDefault()
  const name = e.currentTarget.item.value
  if (!name) return
  items.push({
    name: name, 
    id: Date.now(),
    complete: false
  })
  console.log(items)
  e.target.reset()
  list.dispatchEvent(new CustomEvent('itemsUpdated'))
}

function displayItems() {
  if(items.length == 0) {
    list.innerHTML = ''
  } else {
    const html = items.map(obj => {
      return `<li class="shopping-item">
        <input 
          type='checkbox' 
          value="${obj.id}" 
          ${obj.complete && "checked"}>
        <span class="itemName">${obj.name}</span>
        <button 
          aria-label="Remove ${obj.name}"
          value="${obj.id}">
          &times;
        </button>
      </li>`
    }).join('')
    list.innerHTML = html
  }
}

function mirrorToLocalStorage() {
  localStorage.setItem('items', JSON.stringify(items))
}

function restoreFromLocalStorage(){
  const fromStorage = JSON.parse(localStorage.getItem("items"))
  if(fromStorage.length) {
    items.push(...fromStorage)
    list.dispatchEvent(new CustomEvent('itemsUpdated'))
  }
}

function deleteItem(id) {
  console.log('deleting item', id);
  items = items.filter(x => x.id !== id)
  list.dispatchEvent(new CustomEvent('itemsUpdated'))
}

function handleCheck(itemId) {
  items = items.map(x => {
    if(x.id === itemId){
      x.complete = !x.complete
    }
    return x
  })
  list.dispatchEvent(new CustomEvent('itemsUpdated'))
}

shoppingForm.addEventListener('submit', handleSubmit)
list.addEventListener('itemsUpdated', displayItems)
list.addEventListener('itemsUpdated', mirrorToLocalStorage)
list.addEventListener('click', function(e) {
  if(e.target.matches('button')) {
    deleteItem(parseInt(e.target.value));
  }
  if(e.target.matches('input[type="checkbox"]')) {
    handleCheck(parseInt(e.target.value))
  }
})

restoreFromLocalStorage()
 