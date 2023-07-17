//variable
let operator = '';
let nums = ['', ''];

//makes display
let display = document.querySelector('#display')
display.textContent = 'this is a calculator'

//make buttons
let add = document.querySelector('#add')
add.addEventListener('click', () => {operator = '+', display.textContent = nums[0] + operator + nums[1]});

let subtract = document.querySelector('#subtract')
subtract.addEventListener('click', () => {operator = '-', display.textContent = nums[0] + operator + nums[1]})

let multiply = document.querySelector('#multiply')
multiply.addEventListener('click', () => {operator = '*', display.textContent = nums[0] + operator + nums[1]})

let divide = document.querySelector('#divide')
divide.addEventListener('click', () => {operator = '/', display.textContent = nums[0] + operator + nums[1]})


//numbers
let one = document.querySelector('#one')
one.addEventListener('click', () => {if (nums[0] === '') {nums.splice(0, 1, '1')} else{nums.splice(1, 1, 1)}display.textContent = nums[0] + operator + nums[1]})
let two = document.querySelector('#two')
two.addEventListener('click', () => {if (nums[0] === '') {nums.splice(0, 1, '2')} else{nums.splice(1, 1, '2')}display.textContent = nums[0] + operator + nums[1]})
let three = document.querySelector('#three')
three.addEventListener('click', () => {if (nums[0] === '') {nums.splice(0, 1, '3')} else{nums.splice(1, 1, '3')}display.textContent = nums[0] + operator + nums[1]})
let four = document.querySelector('#four')
four.addEventListener('click', () => {if (nums[0] === '') {nums.splice(0, 1, '4')} else{nums.splice(1, 1, '4')}display.textContent = nums[0] + operator + nums[1]})
let five = document.querySelector('#five')
five.addEventListener('click', () => {if (nums[0] === '') {nums.splice(0, 1, '5')} else{nums.splice(1, 1, '5')}display.textContent = nums[0] + operator + nums[1]})
let six = document.querySelector('#six')
six.addEventListener('click', () => {if (nums[0] === '') {nums.splice(0, 1, '6')} else{nums.splice(1, 1, '6')}display.textContent = nums[0] + operator + nums[1]})
let seven = document.querySelector('#seven')
seven.addEventListener('click', () => {if (nums[0] === '') {nums.splice(0, 1, '7')} else{nums.splice(1, 1, '7')}display.textContent = nums[0] + operator + nums[1]})
let eight = document.querySelector('#eight')
eight.addEventListener('click', () => {if (nums[0] === '') {nums.splice(0, 1, '8')} else{nums.splice(1, 1, '8')}display.textContent = nums[0] + operator + nums[1]})
let nine = document.querySelector('#nine')
nine.addEventListener('click', () => {if (nums[0] === '') {nums.splice(0, 1, '9')} else{nums.splice(1, 1, '9')}display.textContent = nums[0] + operator + nums[1]})
let zero = document.querySelector('#zero')
zero.addEventListener('click', () => {if (nums[0] === '') {nums.splice(0, 1, '0')} else{nums.splice(1, 1, '0')}display.textContent = nums[0] + operator + nums[1]})

//clear button
let clear = document.querySelector('#clear')
clear.addEventListener('click', () => {operator = '';
nums = ['', ''], display.textContent = 'Display Cleared'})




// let display = document.createElement('display')
// display.style = '#display'
// displayParent.appendChild(display)
// display.addEventListener('click', () => {console.log()})



operate = (num1, operation, num2) => {
    if (operator === '') {
        display.textContent = 'no operator, add an operator and try again'
    }
    if (operation = '+') {
        console.log(num1 + num2)
    }
    
    let solution = console.log(num1, operation, num2)
    
}

let calculateButton = document.querySelector('#calculate')
calculateButton.addEventListener('click', () => {operate(nums[0], operator, nums[1])});
