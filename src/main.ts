// var myname: string = "abc";
// let myage: number  = 20;
// const myheight: number = 1.88;

// let message = "Hello World"; // string类型
// let age = 20; // number类型
// let isFlag = true; // boolean类型

// let name = "coderwhy";

// 1.数组类型
let num = 100;
num = 20;
num = 6.66;

// 2.其他进制表示
num = 100; // 十进制
num = 0b110; // 二进制
num = 0o555; // 八进制
num = 0xf23; // 十六进制

// boolean类型的表示
let flag: boolean = true;
flag = false;
flag = 20 > 30;

// string类型表示
// let message: string = "Hello World";
// message = 'Hello TypeScript';

// const name = "why";
const age = 18;
const height = 1.88;

const info = `my name is ${name}, age is ${age}, height is ${height}`;
console.log(info);

const names1: string[] = ["why", "abc", "cba"];
const names2: Array<string> = ["why", "abc", "cba"];

// object类型表示
const myinfo = {
  name: "why",
  age: 20,
  height: 1.88,
};

console.log(myinfo.name);

const s1 = Symbol("identity");
const s2 = Symbol("identity");

const person = {
  [s1]: "程序员",
  [s2]: "老师",
};

const n: null = null;
const u: undefined = undefined;

enum Direction {
  EAST = 10,
  WEST = 20,
  NORTH = 30,
  SOUTH = 40,
}

const d1 = Direction.EAST;
const d2 = Direction.NORTH;

console.log(d1); // 10
console.log(d2); // 30

console.log(Direction[10]); // EAST
console.log(Direction[30]); // NORTH

const tInfo: [string, number, number] = ["why", 18, 1.88];
const item1 = tInfo[0]; // why, 并且知道类型是string类型
const item2 = tInfo[1]; // 18, 并且知道类型是number类型

const aInfo: Array<string|number> = ["why", 18, 1.88];
const itema = aInfo[0]; // why，但是并不知道itema是string类型还是number类型

let a: any = "why";
a = 123;
a = true;

const aArray: any[] = ["why", 18, 1.88];




const sum: (num1: number, num2: number) => number = (num1: number, num2: number) => {
  return num1 + num2;
};

const sayHello: (name: string) => void = (name: string) => {
  console.log("hello " + name);
};





const loopFunc = () => {
  while (true) {
    console.log(123);
  }
};

const errFunc = () => {
  throw new Error("函数发生错误");
};

// 交叉类型
const info1 = {
  name: "why",
  age: 18,
};

const info2 = {
  name: "kobe",
  height: 1.98,
}

const newInfo = Object.assign(info1, info2);
console.log(newInfo.height);

interface IA {
  name: string;
  age: number;
  sayHello: (name: string) => void;
}

interface IB {
  name: string;
  height: number;
  run: () => void;
}

const abc: IA & IB = {
  name: "why",
  age: 18,
  height: 1.88,
  sayHello: (name: string) => {
    console.log("Hello " + name);
  },
  run: () => {
    console.log("running");
  },
};

// 数组中的元素类型是联合类型中的一个
const newArray: Array<string | number> = ["why", 18, 1.88];

// 定义一个对象，只要满足其中一个即可赋值
const cba: IA | IB = {
  name: "why",
  age: 18,
  sayHello: (name: string) => {
    console.log("Hello " + name);
  },
};

export {};
