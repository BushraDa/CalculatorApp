var firstOperand;
var secondOperand;
var operation;

function calculate() {
    value = $('.screen').text();
    idx = value.indexOf(operation);
    secondOperand = Number(value.substring(idx+1, value.length));
    if (operation === '+') {
        result = firstOperand + secondOperand;
    } else if (operation === '-') {
        result = firstOperand - secondOperand;
    } else if (operation === '*') {
        result = firstOperand * secondOperand;
    } else if (operation === '/') {
        result = firstOperand / secondOperand;
    }
  
    $('.screen').text(result);
}

function operator(elem) {
    firstOperand = Number($('.screen').text());
    operation = elem.innerText;
    updateScreen(elem);
}

function resetCalculator() {
    $('.screen').text('0');
}

function deleteCalculator() {
    value = $('.screen').text();
    value = value.substring(0,value.length-1);
    if (value.length != 0)
        $('.screen').text(value);
    else
        $('.screen').text('0');
}

function updateScreen(elem) {
    value = $('.screen').text();
    newVal = elem.innerText;
    if (value == 0 || value == 'NaN')
        $('.screen').text(newVal);
    else
        $('.screen').text(value + newVal);
}
