const tabs = document.querySelector('.tabs')
const tabButtons = tabs.querySelectorAll('[role="tab"')
const tabPanels = tabs.querySelectorAll('[role="tabpanel"')

const handleTabClick = (event) => {
  console.log(event.currentTarget)
  const {id} = event.currentTarget
  tabPanels.forEach(panel => {
    if(panel.getAttribute("aria-labelledby") === id) {
      panel.hidden = false
    } else {
      panel.hidden = true
    }
  })
  tabButtons.forEach(button => {
    if(button.id === id){
      button.setAttribute("aria-selected", true)
    } else {
      button.setAttribute("aria-selected", false)
    }
  })
}

tabButtons.forEach(button => button.addEventListener('click', 
  handleTabClick
))

