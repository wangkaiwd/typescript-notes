// 目前小结：
//    1. 将css样式进行了初步的搭建
//    2. 动态创建计算器的按钮
var texts = ['clear', '÷', '7', '8', '9', '×', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
var createButton = function (content, className) {
    var button = document.createElement('button');
    var div = document.createElement('div');
    button.innerText = content;
    button.classList.add('button');
    div.classList.add('col');
    if (className) {
        div.classList.add(className);
    }
    div.appendChild(button);
    // 强制断言为HTMLElement
    document.querySelector('.calculator').appendChild(div);
};
var appendButtons = function () {
    texts.forEach(function (item) {
        createButton(item, "item-" + item);
    });
};
var createResultBox = function () {
    var div = document.createElement('div');
    div.classList.add('result-box');
    div.innerText = '0';
    document.querySelector('.calculator').appendChild(div);
};
var removeZero = function (result) {
    if (result.indexOf('0') === 0 && result.length > 1) {
        return result.slice(1);
    }
    return result;
};
var calculateResult = function (number1, number2, operator) {
    var resultMap = {
        '+': number1 + number2,
        '-': number1 - number2,
        '×': number1 * number2,
        '÷': number1 / number2
    };
    return resultMap[operator];
};
var bindEvent = function () {
    var buttons = document.querySelectorAll('.button');
    // !: https://stackoverflow.com/questions/43951090/typescript-object-is-possibly-null
    // 当我们确认当前值既不是null也不是undefined但是编译器不知道的时候，你能使用non-null(非空)断言操作符!来向编译
    // 器传达这个信息。
    var result = document.querySelector('.result-box');
    var cache = 0;
    var operator;
    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            var text = button.innerText;
            if ('0123456789.'.indexOf(text) > -1) {
                result.innerText = removeZero(result.innerText + text);
            }
            else if ('+-×÷'.indexOf(text) > -1) {
                operator = text;
                cache = Number(result.innerText);
                result.innerText = '0';
            }
            else if (text === '=') {
                cache = calculateResult(cache, Number(result.innerText), operator);
                result.innerText = cache.toString();
            }
            else {
                cache = 0;
                result.innerText = '0';
            }
        });
    });
};
createResultBox();
appendButtons();
bindEvent();
