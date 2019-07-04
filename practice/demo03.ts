interface ClassMap {
  [key: string]: string
}
const createButton = (content: string, className?: string): void => {
  const button: HTMLButtonElement = document.createElement('button');
  const div: HTMLElement = document.createElement('div');
  button.innerText = content;
  div.classList.add('col');
  if (className) {
    div.classList.add(className);
  }
  div.appendChild(button);
  document.querySelector('.calculator-content').appendChild(div);
};

'Clear,÷,7,8,9,×,4,5,6,-,1,2,3,+,0,.,='.split(',')
  .forEach((item: string): void => {
    const classMap: ClassMap = { Clear: 'clear', 0: 'zero' };
    const className: string | undefined = classMap[item] ? classMap[item] : undefined;
    createButton(item, className);
  });
