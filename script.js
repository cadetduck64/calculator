//need to:
//type the first number
//press operator
//type second number
//operate

//variable
//make a new function that concatonate strings

let operator = ''; // variable that holds what operation you will do
let nums = ['','']; // holds the two numbers being operated on (will also be changed by functions based on situation)
let entry // numbers user picks
let sum // result of operations and nums



//makes display
let display = document.querySelector('#display')
display.textContent = 'this is a calculator'

//make buttons
let add = document.querySelector('#add')
add.addEventListener('click', () => {operator = '+', numberBank(entry, operator)}); //addition
let subtract = document.querySelector('#subtract')
subtract.addEventListener('click', () => {operator = '-', numberBank(entry, operator)}) //subtraction
let multiply = document.querySelector('#multiply')
multiply.addEventListener('click', () => {operator = '*', numberBank(entry, operator)}) //multiplication
let divide = document.querySelector('#divide')
divide.addEventListener('click', () => {operator = '/', numberBank(entry, operator)}) //division


let numberList = [] //populated first entry. utilized by function for  taking numbers user punched in
let secondNumberList = [] //populated second entry. utilized by function for  taking numbers user punched in

numberBank = (number, operand) => {
    console.log(operand)
    if (operand == "") {operand = undefined}
    console.log(operand)
    console.log(number)
    if (number == undefined) {return operator = undefined, display.textContent = 'Syntax error, no operater, add a number first'} // if user had not inputted a number, the function stops
    
    if (operand == undefined)     //checks to see if operand is empty,
    {numberList.push(number),  //if operater is empty add to array 
    console.log(numberList)
    concatedNumber = numberList.join(''), //and combine the numbers
    nums.splice(0, 1, concatedNumber), // replaces the first entry of nums with user entered numbers
    console.log(numberList), //logs the array, operator and combined number
    console.log(concatedNumber),
    display.textContent = '' + concatedNumber
    } 
    
    else if (operand != undefined) // if operator is not blank go to the second number
    {display.textContent = '' + concatedNumber + operand
    console.log('going to second number')};

    console.log('SECOND LIST', secondNumberList)

    if (operand !== undefined && numberList.length > 0)    // if the operater is blank and the first entry has something in it make the first number of the second entry blank,
                                                    // this is to prevent the last number of the previous entry from populating the first number 
    {console.log('NOW ENTERING SECOND NUMBER', number), secondNumberList.splice(1, 1, ''),// of the previous entry
    secondNumberList.push(number), // add the user number to list of numbers to be joined later
    secondConcatedNumber = secondNumberList.join(''), //join the numbers
    console.log(secondConcatedNumber), //log the number
    nums.splice(1, 1, secondConcatedNumber) // replaces the second entry of nums with user entered numbers
    
    //
    
    if (sum == undefined) // if there has been no previous calculation, skip this function
    {console.log('skipping')}
    else {concatedNumber = sum} // if there has been a previous calculation, make the previous calculation the first entry

    console.log(numberList) //logs the array of first entry numbers
    console.log(secondNumberList) //logs the array of second entry numbers

    concatedNumber = Number(concatedNumber) //turns the first entry into a real number
    secondConcatedNumber = Number(secondConcatedNumber) // turns the second entry into a real number

    console.log('now calcing', concatedNumber, operand, secondConcatedNumber) //readability
    display.textContent = '' + concatedNumber + operand + secondConcatedNumber

};
console.log('--------------------')
}



//Numbers
let one = document.querySelector('#one')
one.addEventListener('click', () => {entry =  1, numberBank(entry, operator)})
let two = document.querySelector('#two')
two.addEventListener('click', () => {entry =  2, numberBank(entry, operator)})
let three = document.querySelector('#three')
three.addEventListener('click', () => {entry =  3, numberBank(entry, operator)})
let four = document.querySelector('#four')
four.addEventListener('click', () => {entry =  4, numberBank(entry, operator)})
let five = document.querySelector('#five')
five.addEventListener('click', () => {entry =  5, numberBank(entry, operator)})
let six = document.querySelector('#six')
six.addEventListener('click', () => {entry =  6, numberBank(entry, operator)})
let seven = document.querySelector('#seven')
seven.addEventListener('click', () => {entry =  7, numberBank(entry, operator)})
let eight = document.querySelector('#eight')
eight.addEventListener('click', () => {entry =  8, numberBank(entry, operator)})
let nine = document.querySelector('#nine')
nine.addEventListener('click', () => {entry =  9, numberBank(entry, operator)})
let zero = document.querySelector('#zero')
zero.addEventListener('click', () => {entry =  0, numberBank(entry, operator)})


//clear button
let clear = document.querySelector('#clear')
clear.addEventListener('click', () => {operator = '';
nums = [concatedNumber = 0, secondConcatedNumber = 0], operand = undefined, display.textContent = 'Display Cleared'})


operate = (num1, operation, num2) => {
    if (operator == '') {
        display.textContent = 'no operator, add an operator and try again'
    }

    console.log(typeof operation)
    console.log(operation)


    if (operation == '+') 
        {sum = num1 += num2}
    else if (operation == '-')
        {sum = num1 - num2}
    else if (operation == '*')
        {sum = num1 * num2}
    else if (operation == '/') 
        {sum = num1 / num2}

    console.log(sum)

    nums[0] = sum
    secondNumberList = []

    console.log(sum)
    display.textContent = sum

}

let calculateButton = document.querySelector('#calculate')
calculateButton.addEventListener('click', () => {if (operator === '') {
   return display.textContent = 'Syntax error: No Operater', console.log('no operater')}
   operate(concatedNumber, operator, secondConcatedNumber)});
