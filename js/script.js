const numbers = document.querySelectorAll('.numbers div')
const operators = document.querySelectorAll('.operators div')
const input = document.getElementById('input')
const result = document.getElementById('result')

let decimalFlag = false
let operatorsFlag = false
let equalFlag = false


let arrNums = []
let arrOperations = []

result.addEventListener('click', equals)



for (let i =0; i < numbers.length; i++) {
  numbers[i].addEventListener('click', function(event){
    if (operatorsFlag || equalFlag){
      operatorsFlag = false
      decimalFlag = false
      input.innerHTML = ''
      if(equalFlag){
        equalFlag = false
        arrNums =[]
      }
    }
    
    if (event.target.innerHTML == 'C'){
      input.innerHTML = ""
      decimalFlag = false
      arrNums = []
      arrOperations = []
    }
    else {
      if (event.target.innerHTML != '.'){
        input.innerHTML += event.target.innerHTML
        console.log(input.innerHTML)
      }
      else if (!decimalFlag && event.target.innerHTML == '.'){
        decimalFlag = true
        input.innerHTML += event.target.innerHTML
      }
      
    }

    
  })
  console.log(arrNums)
}

for (let i=0; i < operators.length; i++) {
  operators[i].addEventListener('click', function(event) {
    if(!operatorsFlag && input.innerHTML != '' && input.innerHTML != '.'){
      arrOperations.push(operators[i].innerHTML)
      operatorsFlag = true
      if(!equalFlag){
        num = parseFloat(input.innerHTML)
        arrNums.push(num)
      }
      equalFlag = false
      if(arrNums.length == 2){
        calculate(arrOperations[arrOperations.length - 2])
      }
    }
  })
}

function equals(){
  if (equalFlag){
    return
  }
  else if (arrNums.length == 0 && input.innerHTML != '' && input.innerHTML != '.' ){
    num = parseFloat(input.innerHTML)
    arrNums.push(num)
    equalFlag = true
  }
  else if (arrNums.length == 1 && input.innerHTML != '' && input.innerHTML != '.'){
    num = parseFloat(input.innerHTML)
    arrNums.push(num)
    calculate(arrOperations[arrOperations.length - 1])
    equalFlag = true
  }
  else if (input.innerHTML == '.'){
    input.innerHTML = ''
  }
}


function calculate(opperation){
  let total = 0
  if(opperation == '+'){
    total = arrNums[0] + arrNums[1]
  }
  else if (opperation == '-'){
    total = arrNums[0] - arrNums[1]
  }
  else if (opperation == '*'){
    total = arrNums[0] * arrNums[1]
  }
  else if (opperation == '/'){
    total = arrNums[0] / arrNums[1]
  }
  input.innerHTML = total
  arrNums = [total]
}



