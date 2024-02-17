class Calculator {
  //calculator targets the previous opperand value
  constructor(previousOperandTextElement, previousOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement
    this.previousOperandTextElementStyle = previousOperandTextElement
  }
  
  //clears elements
  clear() {

  }

  //deletes current element
  delete() {

  }

  //number the user selects
  appendNumber(number) {

  }

  //Operation the user selects
  chooseOperation(operation) {

  }

  //computes single value on display
  compute() {

  }

  //updates values inside of display
  updateDisplay() {

  }
}


//button variables
const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')