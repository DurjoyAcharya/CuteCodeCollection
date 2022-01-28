"use strict";
// import { Player, Student } from "./Player.js";
const addID = (obj) => {
    let id = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { id });
};
let user2 = addID({
    name: "Durjoy Acharya",
    age: 24,
});
console.log(user2);
const Gdemo = (obj) => {
    let id = Math.floor(Math.random() * 10000);
    return Object.assign(Object.assign({}, obj), { id });
};
let user = Gdemo({
    name: "Durjoy Acharya",
    age: 24,
    country: "Bangladesh",
});
console.log(user.name);
const response = {
    status: 404,
    type: "Bad",
    data: {
        name: "Testing",
        something: 500,
    },
};
let arr = [3, "Hello", { PI: 3.14159 }];
let brr = [4, "World", { T: 1001 }];
