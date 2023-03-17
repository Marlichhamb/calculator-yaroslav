const outPut = document.getElementById('out-put')
const exp = document.getElementById('experiment')

let operand1 = '';
let operand2 = '';
let operator = '';
let expString = '';
let operandToArray = '';
const enterArray = [];

function clickButton (btn) {

  expString += btn;
  exp.innerHTML = expString;

  if (operator) {
    operand2 += btn;
    outPut.innerHTML = operand2;
    
  } else {
    operand1 += btn;
    outPut.innerHTML = operand1;
}
  operandToArray += btn;

}

function clickOperationButton (btn) {

  enterArray.push(operandToArray);
  operandToArray = '';
  enterArray.push(btn)
  expString += btn;
  operator =  btn;
  outPut.innerHTML = operator;
  exp.innerHTML = expString;
  console.log(enterArray);
}

function reset() {
  operand1 = '';
  operand2 = '';
  operator = '';
  expString = '';
  outPut.innerHTML = '0';
  exp.innerHTML = '';  
}

  function calculate() {
    let result = 0;

    switch (operator) {
      case '+':
        result = Number(operand2) + Number(operand1);
        break;
      case '-':
        result = Number(operand1) - Number(operand2);
        break;
      case '*':
        result = Number(operand1) * Number(operand2);
        break;
      case '/':
        result = Number(operand1) / Number(operand2);
        break;
      default:
        result = 0;

    }
    reset();

    outPut.innerHTML = result;
  }
