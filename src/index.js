const noRoast = document.getElementById('no-roast')
const roast = document.getElementById('roast')
const backdropButton = document.getElementById('backdrop-button')
const dragableConteiner = document.getElementById('dragable-conteiner')
const zonered = document.getElementById('zonered')
const zoneblack = document.getElementById('zoneblack')

backdropButton.addEventListener('dragstart', dragstart1)
backdropButton.addEventListener('drag', drag)
backdropButton.addEventListener('dragend', dragend1)

function dragstart1(event) {
  zonered.addEventListener('dragenter', ondragenterred)
  zoneblack.addEventListener('dragenter', ondragenterblack)
  zonered.addEventListener('dragleave', ondragdragleavered)
  zoneblack.addEventListener('dragleave', ondragdragleaveblack)
  setTimeout(() => event.target.classList.add('none'), 0)
}

function drag(event) {
  setTimeout(() => event.target.classList.add('none'), 0)
}

function dragend1(event) {
  roast.classList.remove('active-res-black')
  noRoast.classList.remove('active-no-res-black')
  roast.classList.remove('active-res-red')
  noRoast.classList.remove('active-no-red')
  event.target.classList.remove('none')
}

function ondragenterred(event) {
  roast.classList.add('active-res-red')
  noRoast.classList.add('active-no-res-red')
}
function ondragenterblack(event) {
  roast.classList.add('active-res-black')
  noRoast.classList.add('active-no-res-black')
}
function ondragdragleavered(event) {
  roast.classList.remove('active-res-red')
  noRoast.classList.remove('active-no-res-red')
}
function ondragdragleaveblack(event) {
  roast.classList.remove('active-res-black')
  noRoast.classList.remove('active-no-res-black')
}
// f
