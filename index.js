const state = { nums: [], wins: [] }

const txtNumber = document.getElementById('txtNumber')

const btnSave = document.getElementById('btnSave')
btnSave.addEventListener('click', () => {
  console.log('btnSave click')
  state.nums = Array.from(Array(+txtNumber.value)).map((_, i) => i + 1)
})

const txtResult = document.getElementById('txtResult')

const btnRandom = document.getElementById('btnRandom')
btnRandom.addEventListener('click', () => {
  console.log('btnRandom click')
  if (state.nums.length == state.wins.length)
    return alert('all numbers')
  txtResult.innerText = randomNumber()
})

const randomNumber = () => {
  let index = -1
  do index = Math.floor(Math.random() * state.nums.length)
  while (state.wins.indexOf(index) != -1)
  state.wins.push(index)
  return state.nums.at(index)
}
