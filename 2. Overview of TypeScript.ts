const gameplayer: {
  name: String;
  age?: Number;
} = {
  name: "gh",
};

type Playerx = {
  name: string;
  age?: number;
};

const ghx: Playerx = {
  name: "gh",
};

const ny: Playerx = {
  name: "ny",
  age: 30,
};

function playMaker(name: string): Playerx {
  return {
    name,
  };
}
playMaker("gh");

const number: readonly number[] = [1, 2, 3, 4];
// number.push(20)  // Error!

// api를 사용할때 이러방식의 array를 줄때가 있다. 그러면 해당 가이드북을 보고 입력값을 넣어준다.
const human: [string, number, boolean] = ["gh", 30, true];
// human[0] = 1 // Error!

//  Python의 tupple과 같은 기능이다.
const human1: readonly [string, number, boolean] = ["gh", 30, true];
// human1[0] = "ny" // Error!

const a1: undefined = undefined;
const a2: null = null;
const a3: any[] = [1, "hi", null, true, undefined];

let b1: unknown;
// let b2 = b1 +1; // Error!
if (typeof b1 === "number") {
  // 이 범위내에서는 b1은 number이다.
  const b2 = b1 + 1;
}
if (typeof b1 === "string") {
  const b2 = b1.toUpperCase();
}

// never는 결과값을 내놓지 않는다. 에러 배출할때 사용되곤 한다.
function b3(): never {
  throw new Error("xxx");
}
function b4(args: string | number) {
  // args + 1 // Error!
  if (typeof args === "number") {
  } else if (typeof args === "string") {
  } else {
    args; // >>> typeof : never
  }
}
