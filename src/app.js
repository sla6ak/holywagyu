import { Draggable } from '@shopify/draggable'
const noRoast = document.getElementById('no-roast')
const roast = document.getElementById('roast')
const backdropButton = document.getElementById('backdrop-button')
const dragableConteiner = document.getElementById('dragable-conteiner')

console.log(backdropButton.x, backdropButton.y)
const startPositionX = backdropButton.x
const startPositionY = backdropButton.y

backdropButton.addEventListener('dragstart', dragstart1)
backdropButton.addEventListener('dragend', dragend1)

function dragstart1(event) {
  roast.classList.add('active-res')
  noRoast.classList.add('active-no-res')
  roast.style.top = '20px'
  console.log(roast.style)
  setTimeout(() => event.target.classList.add('none'), 0)
}
function dragend1(event) {
  roast.classList.remove('active-res')
  noRoast.classList.remove('active-no-res')

  event.target.classList.remove('none')
}

dragableConteiner.addEventListener('mousemove', (event) => {
  console.log('mousemove', event.clientX, event.clientY)
})
