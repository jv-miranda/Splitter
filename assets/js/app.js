function calculate() {
  const bill = Number(document.querySelector(`#bill`).value)
  const tipPercentage = getTipPercentage()
  const numberOfPeople = Number(document.querySelector(`#numberOfPeople`).value)
  const tipAmountPerPerson = (bill * tipPercentage) / 100 / numberOfPeople
  const totalPerPerson = bill / numberOfPeople
  const result01 = document.querySelector(`#result01`)
  const result02 = document.querySelector(`#result02`)
  
  result01.innerHTML = tipAmountPerPerson.toFixed(2)
  result02.innerHTML = totalPerPerson.toFixed(2)
}

function getTipPercentage() {
  const percentagesNodeList = document.querySelectorAll(`.tip_percentage`)
  const percentageNumberInput = Number(
    document.querySelector(`#percentage_number_input`).value
  )

  for (let percentage of percentagesNodeList) {
    if (percentage.checked) {
      return Number(percentage.value)
    }
  }
  return percentageNumberInput
}

function uncheckRadioButtons() {
  const percentagesNodeList = document.querySelectorAll(`.tip_percentage`)
  for (let percentage of percentagesNodeList) {
    if (percentage.checked) {
      percentage.checked = false
      break
    }
  }
}

function removeInputNumberValue() {
  const percentageNumberInput = document.querySelector(
    `#percentage_number_input`
  )
  percentageNumberInput.value = ``
}
