//Global Variables
let heldValue = null;
let heldOperation = null;
let nextValue = null;


//Controls
$(".digits button").click( function() {
//Updates value with clicked digits.
    if (nextValue === null)
        nextValue = 0;
    nextValue = nextValue + $(this).text();
    $(".next-value").text(nextValue);
    updateDisplay();
})

$(".add").click( function() {
//Updates values when .add button is clicked.
    //Passes add function into setHeldOperation.
    setHeldOperation(add);
    $('.next-operation').text("+");
    updateDisplay();
})

$(".subtract").click( function() {
//Updates values when .subtract button is clicked.
    //Passes subtract function into setHeldOperation.
    setHeldOperation(subtract);
    $('.next-operation').text("-");
    updateDisplay();
})

$(".multiply").click( function() {
//Updates values when .multiply button is clicked.
    //Passes multiply function into setHeldOperation.
    setHeldOperation(multiply);
    $('.next-operation').text("x");
    updateDisplay();
})

$(".divide").click( function() {
//Updates values when .divide button is clicked.
    //Passes divide function into setHeldOperation.
    setHeldOperation(divide);
    $('.next-operation').text("/");
    updateDisplay();
})

$(".equals").click( function() {
//Updates values when .equals button is clicked.
    //Passes null into setHeldOperation to reset heldOperation.
    setHeldOperation(null);
    $(`.next-operation`).text(null);
    updateDisplay();
})

$(".clear-all").click( function() {
//Clears all and updates display.
    clearAll();
    updateDisplay();
})

$(".clear-entry").click( function() {
//Clears entry and updates display.
    clearEntry();
    updateDisplay();
})

//Adding these functions within the context of the setHeldOperation was a pain.
//The way it is set up is not friendly for adding new buttons that work in a different fashion to the default ones. (I.E. sqrt, inverse)
//If I had more time and drive to improve the functionality, I would make this a dynamic calculator or have the additional buttons more
//hardcoded into the base functionality.

//Also, I had to fiddle with the width of the calculator to make it so that the buttons weren't floating off of it.
//In it's current state it kind of looks like poo poo, but it is much better for dynamically adding buttons.
$(".sqrt").click( function() {
    //Updates values when .sqrt button is clicked.
        //Passes sqrt function into setHeldOperation.
        setSpecialOperation(sqrt);
        $('.next-operation').text('\u221a');
        updateDisplay();
})

$(".plusmn").click( function() {
    //Updates values when .plusmn button is clicked.
        //Passes plusmn function into setHeldOperation.
        setHeldOperation(plusmn);
        $('.next-operation').text('\u00b1');
        updateDisplay();
})


//Helper Functions
function showValue(location, value) {
//Converts value to number to erase 0.
    if (value === null)
        $(location).text('');
    else
        $(location).text(Number(value))
}

function updateDisplay() {
//Updates held and next values.
    showValue('.held-value', heldValue)
    showValue('.next-value', nextValue)
}

function clearAll() {
//Clears all values and operations.
    heldValue = null;
    heldOperation = null;
    nextValue = null;
    $(`.next-operation`).text(null);
}

function clearEntry() {
//Clears only next value.
    nextValue = null;
}

function setHeldOperation(operation) {
//Handles operation controls.
    //Checks for heldOperation.
    if (heldOperation !== null)
        //Runs heldOperation and stores ouput in heldValue.
        heldValue = heldOperation(heldValue, nextValue);
    //Checks for nextValue.
    else if (nextValue !== null)
        heldValue = nextValue;
    //Resets nextValue.
    nextValue = null;
    //Sets heldOperation equal to the passed in Operation/Math Function.
    heldOperation = operation;
}


//Opertaion/Math Functions
function add(x, y) {
//Adds passed numbers.
    return Number(x) + Number(y)
}

function subtract(x, y) {
//Subtracts passed numbers.
    return Number(x) - Number(y)
}

function multiply(x, y) {
//Multiplies passed numbers.
    return Number(x) * Number(y)
}

function divide(x, y) {
//Divides passed numbers.
    return Number(x) / Number(y)
}

function sqrt(x) {
    return Math.sqrt(x)
}

function plusmn(x) {
    return Number(x) * -1
}