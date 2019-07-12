interface ResultMap {
  [key: string]: number
}

class Calculator {
  element: HTMLElement;
  resultBox: HTMLElement;
  textList: string[] = ['clear', '/', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
  result: string = '0';
  cache: string = '0';
  operator: string;

  constructor (selector: string) {
    this.element = document.querySelector<HTMLElement>(selector)!;
    this.createResultBox();
    this.initButtons();
    this.bindEvent();
  }

  initButtons (): void {
    this.textList.forEach((text: string) => {
      this.createButton(text, `item-${text}`);
    });
  }

  createButton (text: string, className: string): void {
    // 这里多创建一个div的目的是要通过padding来间隔子元素button
    const div: HTMLDivElement = document.createElement('div');
    const button: HTMLButtonElement = document.createElement('button');
    button.classList.add('button');
    button.innerText = text;
    div.classList.add('col', className);
    div.appendChild(button);
    this.element.appendChild(div);
  }

  createResultBox (): void {
    const div: HTMLDivElement = document.createElement('div');
    div.classList.add('result-box');
    div.innerText = this.result;
    this.element.appendChild(div);
    this.resultBox = div;
  }

  bindEvent (): void {
    // 事件代理
    this.element.addEventListener('click', (e: MouseEvent) => {
      // e.target：指向事件触发的元素
      // e.currentTarget: 指向事件绑定的元素
      if (e.target instanceof HTMLElement) {
        const text: string = e.target.innerText;
        if ('0123456789.'.indexOf(text) !== -1) {
          this.result = this.result + text;
          this.resultBox.innerText = this.removeZero(this.result);
        } else if ('+-x/'.indexOf(text) > -1) {
          this.cache = this.result;
          this.operator = text;
          this.resultBox.innerText = this.result = '0';
        } else if ('='.indexOf(text) === 0) {
          if (this.operator) {
            this.result = this.getResult(this.cache, this.result, this.operator);
            this.resultBox.innerText = this.result;
          }
        } else {
          this.result = '0';
          this.cache = '0';
          this.resultBox.innerText = '0';
        }
      }
    });
  }

  removeZero (result: string): string {
    if (result.indexOf('0') === 0 && result.length > 0) {
      result = result.slice(1);
    }
    return result;
  }

  getResult (n1: string, n2: string, operator: string): string {
    const newN1 = Number(n1), newN2 = Number(n2);
    const resultMap: ResultMap = {
      '+': newN1 + newN2,
      '-': newN1 - newN2,
      'x': newN1 * newN2,
      '/': newN1 / newN2
    };
    return resultMap[operator].toString();
  }
}

const calculator = new Calculator('.calculator');

// export {};