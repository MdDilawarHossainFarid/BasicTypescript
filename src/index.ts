//Built-in  data type declaration

let a: string = 'TypeScript';
let b: number = 24;
let c: number = 23.8;
let d: undefined = undefined;
let e: boolean = true;
let f = false;

console.log(a, b, c, d, e, f);

// User define data type
// Array

let array: string[] = ['a', 'b'];
let array1 = [1, 2, 3];

console.log(array[0], array1[1]);

// Object
let object = {};

type nestType = {
  name: string;
  age: number;
};

type objectType = {
  name: string;
  age: number;
  nested: nestType;
};

let object1: objectType = {
  name: 'tsScript',
  age: 12,
  nested: {
    name: 'javaScript',
    age: 20,
  },
};

console.log(object1.name, object1.nested.name);

// Union
let data: string | number | boolean = true;
let data1: string | number | boolean = 990;

console.log(data, data1);

// Interface
interface person {
  name: string;
  phone: number;
}

let student: person = {
  name: 'student1',
  phone: 123456789,
};

console.log(student.phone);

// Tuple
let array2: number[] | string[] = ['a', 'b', 'c'];
let array3: [number, string, boolean] = [1, a, true];

console.log(array2[2], array3[2]);

// Function
function sum(): number {
  return 2 + 2;
}

function sum1(a: number, b: number): number {
  return a + b;
}

function print() {
  console.log('hello typeScript');
}

console.log(sum(), sum1(10, 10), print());

// literal
function sum2(
  a: number | string,
  b: number | string,
  type: 'as-number' | 'as-string'
) {
  if (type === 'as-number') {
    return +a + +b;
  } else {
    return a.toString() + b.toString();
  }
}

console.log(sum2(50, 50, 'as-number'));
console.log(sum2('hi', 'hello', 'as-string'));

// Unknown
let value: unknown;
value = 20;
value = 'hello';
let item: string;

if (typeof value === 'string') {
  item = value;
  console.log(item);
}
// Class
class App {
  name: string = 'typescript';
  constructor(name: string) {
    this.name = name;
  }
  getName(): void {
    console.log(this.name);
  }
}

let obj = new App('javascript');
obj.getName();

// Inheritance
class Parent {
  name: string = 'hi';
  setName(name: string): void {
    this.name = name;
  }
}
class Child extends Parent {
  getName(): string {
    return this.name;
  }
}

let obj1 = new Child();
obj1.setName('Parent last name');
console.log(obj1.getName());
