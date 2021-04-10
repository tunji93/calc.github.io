const numbers = document.querySelectorAll('.number')
const operators = document.querySelectorAll(".operator")
const equals = document.querySelector('.equals')
const clear = document.querySelector('.clear')
const percentage = document.querySelector('.percentage')
const del = document.querySelector('.del')

const operations = document.querySelector('#operation')
const result = document.querySelector('#result')

console.log(operators)

class Calculator  {
    constructor(operations, result) {
        this.operations = operations
        this.result = result
        this.activeOperand= " "
        this.previousOperand = " "
        this.operator= null
    }

    display() {
        if(this.activeOperand.toString().length> 19) {
            alert(" The value you entered is greater than the allowable limit, kindly restart calculator" )
            return 
        }

        this.result.innerText = this.activeOperand
        this.operations.innerText = this.previousOperand


    }

    getNumber(number) {
        if(number === '.' && this.activeOperand.includes('.')) return
            
        
        this.activeOperand = this.activeOperand.toString() + number.toString()
        

    }
    chooseOperation(operator) {
        if(this.activeOperand === " ") return
        if(this.previousOperand !== " ") {
            this.compute()
        }
        this.operator = operator
        this.previousOperand = this.activeOperand
        this.activeOperand= " "


    }
    init() {
        this.activeOperand= " "
        this.previousOperand = " "
        this.operator= null
    }
    compute() {
      let computation 
      let prev = parseFloat(this.previousOperand)  
      let curr = parseFloat(this.activeOperand)
      if (isNaN(prev) || isNaN(curr)) return
      if(this.operator === "+") {
        computation = prev + curr
      }
      else if(this.operator === "-") {
        computation = prev - curr
      }
      else if(this.operator === "*") {
        computation = prev * curr
      }
      else if(this.operator === "÷") {
        computation = prev / curr
      }
      else {return}
      this.activeOperand = computation
      this.operation = null
      this.previousOperand = ""

    }
    delete() {
        if(this.activeOperand.toString().length === 0) return
        this.activeOperand = this.activeOperand.toString().slice(0,-1)
    }
    computePercentage() {
        this.activeOperand = this.activeOperand / 100
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

operators.forEach(button => {
    button.addEventListener('click' ,() => {
       let operator = button.innerText
       machine.chooseOperation(operator)
       machine.display()
    })

})

equals.addEventListener('click', ()=> {
    machine.compute()
    machine.display()
})
clear.addEventListener('click', ()=> {
    machine.init()
    machine.display()
   
})
del.addEventListener('click', ()=> {
    machine.delete()
    machine.display()
   
})
percentage.addEventListener('click', ()=> {
    machine.computePercentage()
    machine.display()
   
})