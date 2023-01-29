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
//     let clickedButton 
//     switch (e.target.id) {
//         case 'num-1': 
//             clickedButton = 1
//             break
//         case 'num-2':
//             clickedButton = 2 
//             break
//         case 'num-3':
//             clickedButton = 3
//             break
//         case 'num-4':
//             clickedButton = 4
//             break
//         case 'num-5':
//             clickedButton = 5
//             break
//         case 'num-6':
//             clickedButton = 6 
//             break
//         case 'num-7':
//             clickedButton = 7
//             break
//         case 'num-8':
//             clickedButton = 8
//             break
//         case 'num-9':
//             clickedButton = 9 
//             break
//         case 'num-0':
//             clickedButton = 0 
//             break
//         case 'num-0':
//             clickedButton = 0 
//             break
//         case 'num-0':
//             clickedButton = 0 
//             break
                        
//         default:
//             clickedButton = undefined
//             break;
//     }
//     console.log(clickedButton);
// }

function clickedButton (btn) {
    outPut.innerHTML = btn;
}

let op; 
  function func() {
    let result;
    let num1 = Number(document.getElementsByClassName('number').value);
    let num2 = Number(document.getElementsByClassName('number').value);
    switch (op) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        if (num2) {
          result = num1 / num2;
        } else {
          result = 'бесконечность';
        }
        break;

    }

    document.getElementById("out-put").innerHTML = result;
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