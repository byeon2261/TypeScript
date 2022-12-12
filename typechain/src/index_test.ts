// import { init, exit } from "myPackage";
// import { init, exit } from "./myPackage"; // Error! d.ts파일이 있어서 에러가 발생한다. 이유는 모름
import { init, exit } from "./myPackage2"; // Typescript전체 폴더로 열 경우에는 에러가 발생함. tsconfig.js파일을 인식을 하지 못하는거 같다.

