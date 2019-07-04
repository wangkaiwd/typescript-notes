const createButton = (content: string, className?: string): void => {
  const button: HTMLButtonElement = document.createElement('button');
  const div: HTMLElement = document.createElement('div');
  button.innerText = content;
  button.classList.add('button');
  div.classList.add('col');
  if (className) {
    div.classList.add(className);
  }
  div.appendChild(button);
  // 强制断言为HTMLElement
  (<HTMLElement>document.querySelector('.calculator')).appendChild(div);
};

const texts: string[] = ['clear', '÷', '7', '8', '9', '×', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
texts.forEach((item: string): void => {
  createButton(item, `item-${item}`);
});
