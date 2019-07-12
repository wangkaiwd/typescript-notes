class Tree {
  name: string;
  subFiles: Tree[] = [];

  constructor (name: string) {
    this.name = name;
  }

  makeSubFile (child: Tree): void {
    this.subFiles.push(child);
  }

  display (n: number = 0): void {
    if (n === 0) {console.log(this.name);}
    n++;
    const prefix = '--'.repeat(n);
    this.subFiles.map(item => {
      console.log(`${prefix} ${item.name}`);
      item.display(n);
    });
  }
}

const createTree = (): void => {
  for (let i = 1; i < 4; i++) {
    const parent = new Tree(`dir${i}`);
    for (let j = 1; j < 4; j++) {
      const child = new Tree(`dir${i}${j}`);
      const subChild = new Tree(`dir${i}${j}${i}`);
      parent.makeSubFile(child);
      child.makeSubFile(subChild);
    }
    parent.display();
  }
};
createTree();

export {};
