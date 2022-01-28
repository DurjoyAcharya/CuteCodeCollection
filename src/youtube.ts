// import { Player, Student } from "./Player.js";
const addID = <T>(obj: T) => {
  let id = Math.floor(Math.random() * 100);
  return { ...obj, id };
};
let user2 = addID({
  name: "Durjoy Acharya",
  age: 24,
});
console.log(user2);
const Gdemo = <T extends Object>(obj: T) => {
  let id = Math.floor(Math.random() * 10000);
  return { ...obj, id };
};
let user = Gdemo({
  name: "Durjoy Acharya",
  age: 24,
  country: "Bangladesh",
});
console.log(user.name);
interface APIResponse<T> {
  status: number;
  type: string;
  data: T;
}
const response: APIResponse<Object> = {
  status: 404,
  type: "Bad",
  data: {
    name: "Testing",
    something: 500,
  },
};
let arr = [3, "Hello", { PI: 3.14159 }];
let brr: [number, string, object] = [4, "World", { T: 1001 }];
