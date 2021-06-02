var firstOperand;
var secondOperand;
var operation;

const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme == 'theme2') {
        $('#theme2')[0].checked = true;
    } else if (currentTheme == 'theme3') {
        $('#theme3')[0].checked = true;
    }
}

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

function setTheme(theme) {
    if (theme.value == 'theme1') {
        document.documentElement.setAttribute('data-theme', 'theme1');
        localStorage.setItem('theme', 'theme1');
    } else if (theme.value == 'theme2') {
        document.documentElement.setAttribute('data-theme', 'theme2');
        localStorage.setItem('theme', 'theme2');
    } else if (theme.value == 'theme3') {
        document.documentElement.setAttribute('data-theme', 'theme3');
        localStorage.setItem('theme', 'theme3');
    }
  }