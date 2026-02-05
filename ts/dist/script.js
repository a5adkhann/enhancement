"use strict";
/*
Basic Types
Number, Boolean, String
Arrays, Tuples
Any, Unknown, Never, Void
Enums
*/
Object.defineProperty(exports, "__esModule", { value: true });
// Array
// let arr = [1, 2, 3, 4, "Asad"];
// Tuple
// let arr : [number, string] = [1, "Asad"];
// let variable : any;
// variable = "Asad";
// variable = 12;
// function runInfinite() : never{
//     while(true){
//         console.log("Infinite run");
//     }
// }
// runInfinite();
// console.log("Run After Func");
// function abcd() : void {
//     console.log("Void Func")
// }
// abcd();
// enum Direction{
//     top = "TOP",
//     left = "LEFT",
//     right = "RIGHT",
//     bottom = "BOTTOM"
// }
// Direction.top;
// enum MousePosition {
//     x = 0,
//     y = 0
// }
// MousePosition.x;   
// MousePosition.y;
// enum Human {
//     name = "Asad",
//     age = 25
// }
// Human.age
// let variable : string | number;
// variable = 12;
// if (typeof variable === "string") {
//     variable.toLowerCase();
// }
// else if(typeof variable === "number"){
//     variable.toFixed();
// }
// function abcd(variable : string | number){
//  if (typeof variable === "string") {
//     variable.toLowerCase();
// }
// else if(typeof variable === "number"){
//     variable.toFixed();
// }   
// }
// abcd("aa");
// abcd(12);
// abcd(true);
// union
// let a: number | string;
// intersection
// let a : string & number;
// type Clasmates = {
//     section: string
// }
// type Students = {
//     name : string
// }
// type ClassmatesInStudents = Clasmates & Students;
// let a : ClassmatesInStudents = {
//     section : "a",
//     name : "Asad"
// }
// type City = {
//     name : string,
//     population : number
// }
// type Planet = {
//     name : string,
//     cities : number
// }
// type CitiesInPlanet = City & Planet;
// let value : CitiesInPlanet = {
//     name : "Karachi",
//     population : 45000,
//     cities : 12
// }
let a;
a = 15;
console.log(a);
console.log("hey");
//# sourceMappingURL=script.js.map