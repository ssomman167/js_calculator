const numberButtons=document.querySelectorAll("[data-number]")
const operationButtons=document.querySelectorAll("[data-operation]")
const equalButton=document.querySelector("[data-equals]")
const deleteButton=document.querySelector("[data-delete]")
const prev=document.querySelector("[data-prev]")
const curr=document.querySelector("[data-curr]")
const allclear=document.querySelector("[data-allclear]")

console.log(prev,curr)

class Calculator{
    constructor(prev,curr){
        this.prev=prev
        this.curr=curr
        this.clear()
    }
    clear(){
  this.currNumber=""
  this.prevNumber=""
  this.operation=undefined
//   this.updateDisplay()
    }
    delete(){

        this.currNumber=this.currNumber.toString().slice(0,-1)

    }
    append(number){
        if(number==="." && this.currNumber.includes('.'))
        return

        this.currNumber=this.currNumber.toString()+number.toString()
    }
    choose(operation){
        console.log(this.currNumber,"us")
        if(this.currNumber=="")
        return
        if(this.prevNumber!="")
        {
            this.compute()
        }
        this.operation=operation
        this.prevNumber=this.currNumber+operation.toString()
        this.currNumber=""

    }

    compute(){
let computed
const prev=parseFloat(this.prevNumber)
const current=parseFloat(this.currNumber)

if(isNaN(current)  || isNaN(prev))
return

switch(this.operation)
{
    case '+':
    computed=prev+current
    break
    case '-':
    computed=prev-current
    break
    case '*':
    computed=prev*current
    break
    case '/':
    computed=prev/current
    break
    default:
        return
}

console.log(prev,current,computed)

this.currNumber=computed
this.operation=undefined
this.prevNumber=""

    }
displayNumber(number){
    const stringNumber=number.toString()
    
    const decimalPart=stringNumber.split(".")[1]
    const integerPart=parseFloat(stringNumber.split(".")[0])
    console.log(decimalPart)
    let integerDisplay
    if(isNaN(integerPart))
    {
        integerDisplay="" 
    }
    else
    {
        integerDisplay=integerPart 
    }
    if(decimalPart==null)
    {
        return integerDisplay
    }
    else
    {
        return `${integerDisplay}.${decimalPart}`
    }


}
    updateDisplay(){
this.curr.innerText=this.currNumber=this.displayNumber(this.currNumber)

if(this.operation==undefined)
this.prev.innerText=""
else
this.prev.innerText=`${this.displayNumber(this.prevNumber)} ${this.operation}`


    }
}


const Calc=new Calculator(prev,curr)

allclear.addEventListener("click",()=>{
    // console.log("clicked")
    Calc.clear()
    Calc.updateDisplay()
})






numberButtons.forEach((button)=>{
    button.addEventListener("click",()=>{
        Calc.append(button.innerText)
        Calc.updateDisplay()
    })

})


operationButtons.forEach((button)=>{
    button.addEventListener("click",()=>{
        // console.log(button.innerText)
        Calc.choose(button.innerText)
        Calc.updateDisplay()
    })

})

equalButton.addEventListener("click",(button)=>{
     Calc.compute()
     Calc.updateDisplay()
})

deleteButton.addEventListener("click",()=>{
     Calc.delete()
     Calc.updateDisplay()
})