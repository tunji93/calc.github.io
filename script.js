const numbers = document.querySelectorAll('.number')
const operators = document.querySelectorAll(".operators")
const equals = document.querySelector('.equals')
const clear = document.querySelector('.clear')
const percentage = document.querySelector('.percentage')

const operations = document.querySelector('#operation')
const result = document.querySelector('#result')

console.log(numbers)

class Calculator  {
    constructor(operations, result) {
        this.operations = operations
        this.result = result
        this.activeOperand= " "
        this.previousOperand = " "
        this.operator= null
    }

    display() {
        this.operations.innerText = this.activeOperand


    }

    getNumber(number) {
        if(number === '.' && this.activeOperand.includes('.')) return
            
        
        this.activeOperand = this.activeOperand.toString() + number.toString()
        

    }
    chooseOperation() {

    }
    init() {
        this.activeOperand= " "
        this.previousOperand = " "
        this.operator= null
    }
    compute() {

    }
}

const machine = new Calculator(operations,result)

numbers.forEach(button => {
    button.addEventListener('click' ,() => {
       let number = button.innerText
       machine.getNumber(number)
       machine.display()
    })

})