import { type } from "os";

// interface：接口
// 1.在JavaScript存在的问题
// 1.2. TypeScript代码重构一
// const getUserInfo = (user: {name: string, age: number}): string => {
//   return `name: ${user.name} age: ${user.age}`;
// };

// // 正确的调用
// console.log(getUserInfo({name: "coderwhy", age: 18}));

// // 错误的调用
// getUserInfo(); // 错误信息：An argument for 'user' was not provided.
// getUserInfo({name: "coderwhy"}); // 错误信息： Property 'age' is missing in type '{ name: string; }'
// getUserInfo({name: "coderwhy", height: 1.88}); // 错误信息：类型不匹配

// interface IUser {
//   name: string;
//   age: number;
// }

// const getUserInfo = (user: IUser): string => {
//   return `name: ${user.name}, age: ${user.age}`;
// };

// getUserInfo({name: "coderwhy", age: 18});

// getUserInfo(); // 错误的调用，其他也是一样

// interface IUser {
//   name: string;
//   age: number;
// }

// interface IUserInfoFunc {
//   (user: IUser): string;
// }

// // type IUserInfoFunc = (user: IUser) => string;

// const getUserInfo: IUserInfoFunc = (user) => {
//   return `name: ${user.name}, age: ${user.age}`;
// };

// // 正确的调用
// getUserInfo({name: "coderwhy", age: 18});

// // 错误的调用
// getUserInfo();

// 2.接口的定义
// interface Person {
//   readonly name: string;
//   age?: number;
//   run(): void;
//   eat(): void;
//   study?(): void;
// }

// const p: Person = {
//   name: "why",
//   run() {
//     console.log("running");
//   },
//   eat() {
//     console.log("eating");
//   },
// };

// console.log(p.age); // undefined
// // p.study(); // 不能调用可能是“未定义”的对象。

// if (p.study) {
//   p.study();
// }

// console.log(p.name);
// p.name = "流川枫"; // Cannot assign to 'name' because it is a read-only property.

// 函数类型的定义
// interface SumFunc {
//   (num1: number, num2: number): number;
// }

// type SumFunc = (num1: number, num2: number) => number;

// const sum: SumFunc = (num1, num2) => {
//   return num1 + num2;
// };

// console.log(sum(20, 30));

// 3.1.接口的索引
// interface RoleMap {
//   [index: number]: string;
// }

// const roleMap1: RoleMap = {
//   0: "学生",
//   1: "讲师",
//   2: "班主任",
// };

// const roleMap2 = ["鲁班七号", "露娜", "李白"];

// console.log(roleMap1[0]); // 学生
// console.log(roleMap2[1]); // 露娜

// interface RoleMap {
//   [name: string]: string;
// }

// const roleMap: RoleMap = {
//   aaa: "鲁班七号",
//   bbb: "露娜",
//   ccc: "李白",
// };

// console.log(roleMap.aaa);
// console.log(roleMap["aaa"]); // 警告：不推荐这样来取

// class Person {
//   private name: string = "";
// }

// class Student extends Person {
//   private sno: number = 0;
// }

// interface IndexSubject {
//   [index: number]: Student;
//   [name: string]: Person;

//   letter: string;
// }

// 类实现接口
// interface Entity {
//   title: string;
//   log(): void;
// }

// class Post implements Entity {
//   title: string;

//   constructor(title: string) {
//     this.title = title;
//   }

//   log(): void {
//     console.log(this.title);
//   }
// }

interface Barkable {
  barking(): void;
}

interface Shakable {
  shaking(): void;
}

interface Petable extends Barkable, Shakable {
  eating(): void;
}

class Dog implements Petable {
  barking(): void {
    console.log("汪汪叫");
  }

  shaking(): void {
    console.log("摇尾巴");
  }

  eating(): void {
    console.log("吃骨头");
  }
}



export {};
