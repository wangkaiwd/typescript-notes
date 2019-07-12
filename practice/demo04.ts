class Calculator {
  element: HTMLElement;
  textList: string[] = ['clear', '/', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];

  constructor (selector: string) {
    this.element = document.querySelector<HTMLElement>(selector)!;
    this.initButtons();
    this.bindEvent();
  }

  initButtons () {
    this.textList.forEach((text: string) => {
      this.createButton(text, `item-${text}`);
    });
  }

  createButton (text: string, className: string) {
    // 这里多创建一个div的目的是要通过padding来间隔子元素button
    const div: HTMLDivElement = document.createElement('div');
    const button: HTMLButtonElement = document.createElement('button');
    button.classList.add('button');
    button.innerText = text;
    div.classList.add('col', className);
    div.appendChild(button);
    this.element.appendChild(div);
  }

  bindEvent () {
    this.element.addEventListener('click', (e: MouseEvent) => {
      console.log(e.target);
    });
  }
}

const calculator = new Calculator('.calculator');

// export {};