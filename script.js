const outPut = document.getElementById('out-put')
// const numberOne = document.getElementById('num-1')
// const numberTwo = document.getElementById('num-2')
// const numberThree = document.getElementById('num-3')
// const numberFour = document.getElementById('num-4')
// const numberFive = document.getElementById('num-5')
// const numberSix = document.getElementById('num-6')
// const numberSeven = document.getElementById('num-7')
// const numberEight = document.getElementById('num-8')
// const numberNine = document.getElementById('num-9')
// const numberZero = document.getElementById('num-0')
// const multiply = document.getElementById('num-multiply')
// const point = document.getElementById('num-point')
// const plus = document.getElementById('num-plus')
// const minus = document.getElementById('num-minus')
// const divide = document.getElementById('num-divide')
// const equals = document.getElementById('num-equals')
// const erase = document.getElementById('num-erase')


// function handleClick (e) {
//     let clickButton 
//     switch (e.target.id) {
//         case 'num-1': 
//             clickButton = 1
//             break
//         case 'num-2':
//             clickButton = 2 
//             break
//         case 'num-3':
//             clickButton = 3
//             break
//         case 'num-4':
//             clickButton = 4
//             break
//         case 'num-5':
//             clickButton = 5
//             break
//         case 'num-6':
//             clickButton = 6 
//             break
//         case 'num-7':
//             clickButton = 7
//             break
//         case 'num-8':
//             clickButton = 8
//             break
//         case 'num-9':
//             clickButton = 9 
//             break
//         case 'num-0':
//             clickButton = 0 
//             break
//         case 'num-0':
//             clickButton = 0 
//             break
//         case 'num-0':
//             clickButton = 0 
//             break
                        
//         default:
//             clickButton = undefined
//             break;
//     }
//     console.log(clickButton);
// }

let operand1 = '';
let operand2 = '';
let operator = '';


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
      case '/':
        if ('div') {
          result = operand1 / operand2;
        } else {
          result = 'бесконечность';
        }
        break;
      default:
        result = 0;

    }
    operand2 = ''
    operand1 = ''

    outPut.innerHTML = result;
  }


// numberOne.addEventListener('click', handleClick)
// numberTwo.addEventListener('click', handleClick)
// numberThree.addEventListener('click', handleClick)
// numberFour.addEventListener('click', handleClick)
// numberFive.addEventListener('click', handleClick)
// numberSix.addEventListener('click', handleClick)
// numberSeven.addEventListener('click', handleClick)
// numberEight.addEventListener('click', handleClick)
// numberNine.addEventListener('click', handleClick)
// numberZero.addEventListener('click', handleClick)
