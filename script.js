const outPut = document.getElementById('out-put')

let operand1 = '';
let operand2 = '';
let operator = '';

function clickButton (btn) {
  if (operator) {
    operand2 += btn;
    outPut.innerHTML = operand2;
    
  } else {
    operand1 += btn;
    outPut.innerHTML = operand1;
  }
}

function clickOperationButton (btn) {
 operator =  btn;
 outPut.innerHTML = operator
}

function reset() {
  operand1 = '';
  operand2 = '';
  operator = '';
  outPut.innerHTML = '0';
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
