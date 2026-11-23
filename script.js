"use strict";

// Завдання 1. Підключення JavaScript //

console.log("JavaScript успішно підключено!");

// Завдання 2. Створення змінних різних типів //

const userName = "Олександр";
let userAge = 18;
let averageGrade = 91.5;
const isStudent = true;

let undefinedVar;
const nullVar = null;
const bigIntVar = 9007199254740991n;
const symbolId = Symbol("id");

console.log("userName:", userName, "| typeof:", typeof userName);
console.log("userAge:", userAge, "| typeof:", typeof userAge);
console.log("averageGrade:", averageGrade, "| typeof:", typeof averageGrade);
console.log("isStudent:", isStudent, "| typeof:", typeof isStudent);
console.log("undefinedVar:", undefinedVar, "| typeof:", typeof undefinedVar);
console.log("nullVar:", nullVar, "| typeof:", typeof nullVar);
console.log("bigIntVar:", bigIntVar, "| typeof:", typeof bigIntVar);
console.log("symbolId:", symbolId, "| typeof:", typeof symbolId);

// Завдання 3. Перетворення типів даних //

const val1 = "125";
const res1 = Number(val1);
console.log("Input:", val1, "(", typeof val1, ") -> Output:", res1, "(", typeof res1, ")");

const val2 = "15.75";
const res2 = Number(val2);
console.log("Input:", val2, "(", typeof val2, ") -> Output:", res2, "(", typeof res2, ")");

const val3 = 250;
const res3 = String(val3);
console.log("Input:", val3, "(", typeof val3, ") -> Output:", res3, "(", typeof res3, ")");

const val4 = true;
const res4 = String(val4);
console.log("Input:", val4, "(", typeof val4, ") -> Output:", res4, "(", typeof res4, ")");

const val5 = "false";
const res5 = Boolean(val5);
console.log("Input:", val5, "(", typeof val5, ") -> Output:", res5, "(", typeof res5, ")");

const val6 = 0;
const res6 = Boolean(val6);
console.log("Input:", val6, "(", typeof val6, ") -> Output:", res6, "(", typeof res6, ")");

const val7 = 1;
const res7 = Boolean(val7);
console.log("Input:", val7, "(", typeof val7, ") -> Output:", res7, "(", typeof res7, ")");

const val8 = null;
const res8 = Number(val8);
console.log("Input:", val8, "(", typeof val8, ") -> Output:", res8, "(", typeof res8, ")");

const val9 = "45px";
const res9 = parseInt(val9, 10);
console.log("Input:", val9, "(", typeof val9, ") -> Output:", res9, "(", typeof res9, ")");

const val10 = "12.5kg";
const res10 = parseFloat(val10);
console.log("Input:", val10, "(", typeof val10, ") -> Output:", res10, "(", typeof res10, ")");

// Завдання 4. Арифметичні операції //

const strNum1 = "25";
const strNum2 = "5";

const num1 = Number(strNum1);
const num2 = Number(strNum2); 

const sum = num1 + num2;
const diff = num1 - num2;
const prod = num1 * num2;

console.log("Сума:", sum);
console.log("Різниця:", diff);
console.log("Добуток:", prod);

const rawConcat = strNum1 + strNum2;
console.log('"25" + "5" без перетворення:', rawConcat);

// Завдання 5. Дослідження перетворення типів //

console.log('Number("hello"):', Number("hello")); 
console.log('Number(""):', Number(""));          
console.log('Boolean("0"):', Boolean("0"));       
console.log('Boolean(""):', Boolean(""));         
console.log('String(null):', String(null));       
console.log('"10" + 5:', "10" + 5);              
console.log('"10" - 5:', "10" - 5);               
console.log('typeof null:', typeof null);         