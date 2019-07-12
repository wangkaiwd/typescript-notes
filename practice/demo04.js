var Calculator = /** @class */ (function () {
    function Calculator(selector) {
        this.textList = ['clear', '/', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
        this.result = '0';
        this.cache = '0';
        this.element = document.querySelector(selector);
        this.createResultBox();
        this.initButtons();
        this.bindEvent();
    }
    Calculator.prototype.initButtons = function () {
        var _this = this;
        this.textList.forEach(function (text) {
            _this.createButton(text, "item-" + text);
        });
    };
    Calculator.prototype.createButton = function (text, className) {
        // 这里多创建一个div的目的是要通过padding来间隔子元素button
        var div = document.createElement('div');
        var button = document.createElement('button');
        button.classList.add('button');
        button.innerText = text;
        div.classList.add('col', className);
        div.appendChild(button);
        this.element.appendChild(div);
    };
    Calculator.prototype.createResultBox = function () {
        var div = document.createElement('div');
        div.classList.add('result-box');
        div.innerText = this.result;
        this.element.appendChild(div);
        this.resultBox = div;
    };
    Calculator.prototype.bindEvent = function () {
        var _this = this;
        // 事件代理
        this.element.addEventListener('click', function (e) {
            // e.target：指向事件触发的元素
            // e.currentTarget: 指向事件绑定的元素
            if (e.target instanceof HTMLElement) {
                var text = e.target.innerText;
                if ('0123456789.'.indexOf(text) !== -1) {
                    _this.result = _this.result + text;
                    _this.resultBox.innerText = _this.removeZero(_this.result);
                }
                else if ('+-x/'.indexOf(text) > -1) {
                    _this.cache = _this.result;
                    _this.operator = text;
                    _this.resultBox.innerText = _this.result = '0';
                }
                else if ('='.indexOf(text) === 0) {
                    if (_this.operator) {
                        _this.result = _this.getResult(_this.cache, _this.result, _this.operator);
                        _this.resultBox.innerText = _this.result;
                    }
                }
                else {
                    _this.result = '0';
                    _this.cache = '0';
                    _this.resultBox.innerText = '0';
                }
            }
        });
    };
    Calculator.prototype.removeZero = function (result) {
        if (result.indexOf('0') === 0 && result.length > 0) {
            result = result.slice(1);
        }
        return result;
    };
    Calculator.prototype.getResult = function (n1, n2, operator) {
        var newN1 = Number(n1), newN2 = Number(n2);
        var resultMap = {
            '+': newN1 + newN2,
            '-': newN1 - newN2,
            'x': newN1 * newN2,
            '/': newN1 / newN2
        };
        return resultMap[operator].toString();
    };
    return Calculator;
}());
var calculator = new Calculator('.calculator');
// export {};
