// 1. call signature : 함수위에 마우스를 올렸을때 볼 수 있는 창
function add(a: number, b: number) {
  return a + b;
}
const add2 = (a: number, b: number) => a + b;
// call signature type
type Add = (a: number, b: number) => number;
// function add3(a:Add,b:Add) { // Error!
//      return a+b
// }
const add4: Add = (a, b) => a + b;

// overloading : 함수가 여러개의 call signature를 갖고 있을때 사용한다.
type Add2 = {
  (a: number, b: number): number;
  (a: number, b: string): number;
};
// a,b type : any 발생. Typescript 설치
const add5: Add2 = (a, b) => {
  if (typeof b === "string") return a;
  return a + b;
};

type Config2 = {
  path: string;
  state: object;
};
type Push = {
  (path: string): void;
  (config: Config2): void;
};
const push: Push = (config) => {
  if (typeof config === "string") {
    console.log(config);
  } else {
    console.log(config.path);
  }
};

type Add3 = {
  (a: number, b: number): number;
  (a: number, b: number, c: number): number;
};
const add6: Add3 = (a, b, c?: number) => {
  if (c) return a + b + c;
  return a + b;
};
add6(1, 2);
add6(1, 2, 3);

// Polymorphism
// concrete type : 지금까지 우리가 써왔던 타입들. >>> number, string, undefind ...
// generic type : placeholder 같은 것. 꺽새안에 특정명칭을 넣어주며 type부분에 해당 generic을 넣어준다.
type SuperPrint = {
  // (arr: number[]):void
  // (arr: boolean[]):void
  // (arr: any[]):void
  // <T, V>(arr: number[]):void
  <TypePlaceHolder>(arr: TypePlaceHolder[]): TypePlaceHolder;
};

const superPrint: SuperPrint = (arr) => {
  // arr.forEach(i => {
  //     console.log(i)
  // });
  return arr[0];
};

const e = superPrint([1, 2, 3, 4]);
const e2 = superPrint([true, false, true]);
const e3 = superPrint([1, "string", true, undefined]);

// Conclusion
function superPrint2<T>(a: T[]) {
  return a[0];
}
const f = superPrint([1, 2, 3, 4]);
const f2 = superPrint<boolean>([true, false, true]);

type Player2<E> = {
  name: string;
  extraInfo: E;
};
type NicoExtra = {
  favFood: string;
};

type NicoPlayer = Player2<NicoExtra>;

const nico2: NicoPlayer = {
  name: "Nico",
  extraInfo: {
    favFood: "Kimchi",
  },
};

const gh2: Player2<{ favFood: string }> = {
  name: "gh",
  extraInfo: {
    favFood: "mola",
  },
};
