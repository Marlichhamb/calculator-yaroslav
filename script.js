const outPut = document.getElementById('out-put')

let operand1 = '';
let operand2 = '';
let operator = '';

console.log('operator', !!operator)


function clickButton (btn) {
  if (operator) {
    operand1 += btn;
    outPut.innerHTML = operand1;
  } else {
    operand2 += btn;
    outPut.innerHTML = operand2;
  }
}

function clickOperationButton (btn) {
 operator =  btn;
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
      case 'plus':
        result = Number(operand2) + Number(operand1);
        break;
      case 'minus':
        result = operand1 - operand2;
        break;
      case 'multi':
        result = operand2 * operand1;
        break;
      case 'div':
          result = operand1 / operand2;
        break;
      default:
        result = 0;

    }
    reset();

    outPut.innerHTML = result;
  }
