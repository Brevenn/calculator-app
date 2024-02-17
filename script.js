class Calculator {
  //calculator targets the opperand values
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement
    this.currentOperandTextElementStyle = currentOperandTextElement
    this.clear()
  }
  
  //clears elements
  clear() {
    this.currentOperandTextElement = ''
    this.previousOperandTextElement = ''
    this.operation = undefined
  }

  //deletes current element
  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1)
  }

  //number the user selects
  appendNumber(number) {
    if (number === '.' && this.currentOperand.includes('.')) return
    this.currentOperand = this.currentOperand.toString() + number.toString()
  }

  //Operation the user selects
  chooseOperation(operation) {

  }

  //computes single value on display
  compute() {

  }

  //updates values inside of display
  updateDisplay() {
    this.currentOperandTextElement.innerText = this.currentOperand
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

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
  //event listener for button click
  button.addEventListener('click', () => {
    //adds whichever button is selected to current value
    calculator.appendNumber(button.innerText)
    //dissplay updates as buttons are clicked
    calculator.updateDisplay()
  })
})