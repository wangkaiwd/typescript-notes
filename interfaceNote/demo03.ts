interface Human {
  name: string;
  age: number;
  readonly gender: string;
  score: {
    music: number,
    sport: number
  };
  likeGames?: string[];

  say (word: string): void;
}

// 定义一个稍微复杂一些的对象
const human: Human = {
  name: 'wangkaiwd',
  age: 12,
  gender: 'man',
  score: { music: 10, sport: 6 },
  likeGames: ['吃鸡', '王者荣耀', '古代战争'],
  say (word: string) {
    console.log(`${this.name} say: ${word}`);
  }
};
human.say('I am saying');
export {};
