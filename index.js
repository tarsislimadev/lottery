const app = document.createElement('div')
document.body.append(app)
document.body.style.margin = '1rem'

const state = { nums: [], wins: [] }

const title = document.createElement('div')
title.innerText = 'Lottery'
title.style.marginBottom = '1rem'
app.append(title)

const inputNumber = document.createElement('input')
inputNumber.type = 'number'
inputNumber.style.marginBottom = '1rem'
app.append(inputNumber)

const btnSave = document.createElement('button')
btnSave.innerText = 'save'
btnSave.addEventListener('click', () => {
  state.nums = Array.from(Array(+inputNumber.value)).map((_, i) => i + 1)
})
btnSave.style.marginBottom = '1rem'
app.append(btnSave)

const btnRandom = document.createElement('button')
btnRandom.innerText = 'random'
btnRandom.addEventListener('click', () => {
  if (state.nums.length == state.wins.length) {
    alert('all numbers')
    return
  }
  let index = -1
  do index = Math.floor(Math.random() * state.nums.length)
  while (state.wins.indexOf(index) != -1)
  state.wins.push(index)
  txtNumber.innerText = state.nums.at(index)
})
btnRandom.style.marginBottom = '1rem'
app.append(btnRandom)

const txtNumber = document.createElement('div')
txtNumber.style.marginBottom = '1rem'
app.append(txtNumber)
