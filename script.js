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
    if (this.currentOperand === '') return
    if (this.previousOperand !== '') {
      this.compute()
    }
    this.operation = operation
    this.previousOperand = this.currentOperand
    this.currentOperand = ''
  }

  //computes single value on display
  compute() {
    let computation
    const prev = parseFloat(this.previousOperand)
    const current = parseFloat(this.currentOperand)
    if (isNaN(prev) || isNaN(current)) return
    switch (this.operation) {
      case '+':
        computation = prev + current
        break
      case '-':
        computation = prev - current
        break
      case '*': 
        computation = prev * current
        break
      case '÷':
        computation = prev / current
        break
      default:
        return
    }
    this.currentOperand = computation
    this.operation = undefined
    this.previousOperand = ''
  }

  //pulls current diplay number
  getDisplayNumber(number) {

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

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

//number click
numberButtons.forEach(button => {
  //event listener for button click
  button.addEventListener('click', () => {
    //adds whichever button is selected to current value
    calculator.appendNumber(button.innerText)
    //dissplay updates as buttons are clicked
    calculator.updateDisplay()
  })
})

//operation click
operationButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.chooseOperation(button.innerText)
    calculator.updateDisplay()
  })
})

//equals output
equalsButton.addEventListener('click', button => {
  calculator.compute()
  calculator.updateDisplay()
})

//clear value click
allClearButton.addEventListener('click', button => {
  calculator.clear()
  calculator.updateDisplay()
})

//deletes current calue clicked
deleteButton.addEventListener('click', button => {
  calculator.delete()
  calculator.updateDisplay()
})