const result01 = document.querySelector(`#result01`)
const result02 = document.querySelector(`#result02`)

function calculate() {
  reset.classList.add(`active`)
  const mainNumberInput01 = document.querySelector(`#main_number_input_01`)
  const mainNumberInput02 = document.querySelector(`#main_number_input_02`)

  const bill = Number(document.querySelector(`#bill`).value)
  const tipPercentage = getTipPercentage()
  const numberOfPeople = Number(document.querySelector(`#numberOfPeople`).value)
  const tipAmountPerPerson = (bill * tipPercentage) / 100 / numberOfPeople
  const totalPerPerson = bill / numberOfPeople

  if (bill <= 0) {
    mainNumberInput01.classList.add(`error`)
    mainNumberInput02.classList.remove(`error`)
    if (numberOfPeople <= 0) {
      mainNumberInput02.classList.add(`error`)
    }
  } else if (numberOfPeople <= 0) {
    mainNumberInput02.classList.add(`error`)
    mainNumberInput01.classList.remove(`error`)
    if (bill <= 0) {
      mainNumberInput01.classList.add(`error`)
    }
  } else if (
    tipAmountPerPerson !== null &&
    tipAmountPerPerson !== Infinity &&
    totalPerPerson !== null &&
    totalPerPerson !== Infinity
  ) {
    mainNumberInput01.classList.remove(`error`)
    mainNumberInput02.classList.remove(`error`)
    result01.innerHTML = tipAmountPerPerson.toFixed(2)
    result02.innerHTML = totalPerPerson.toFixed(2)
  }
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

function removeInputNumberValue(inputSelector) {
  const percentageNumberInput = document.querySelector(`${inputSelector}`)
  percentageNumberInput.value = ``
}

function resetApp() {
  if ((reset.classList.contains(`active`))) {
    const mainNumberInput01 = document.querySelector(`#main_number_input_01`)
    const mainNumberInput02 = document.querySelector(`#main_number_input_02`)

    uncheckRadioButtons()
    removeInputNumberValue(`#percentage_number_input`)
    removeInputNumberValue(`#bill`)
    removeInputNumberValue(`#numberOfPeople`)

    mainNumberInput01.classList.remove(`error`)
    mainNumberInput02.classList.remove(`error`)
    result01.innerHTML = `0.00`
    result02.innerHTML = `0.00`
    reset.classList.remove(`active`)
  }
}
