// function f1() {
//     var age = prompt('Enter Your Age', '30');
//     if (age >= 14 && age <=57){
//         alert('OK');
//     }
//
//     else if (age === null){
//         alert('Cancel');
//     }
//
//     else {
//         alert('Wrong!!!');
//     }
// }
//
// f1();

// function f2() {
//
//     var age = prompt('Enter Your Age', '30');
//     if (age >= 14 && age <= 57) {
//         alert('Wrong!!!');
//     }
//
//     else if (age == null) {
//         alert('Cancel');
//     }
//
//     else {
//         alert('OK');
//     }
// }
//
// f2();

// function integer() {
//     var i = 0;
//     for (; i <= 10; i++) {
//         if (i % 2 == 0) {
//             alert(i);
//         }
//     }
// }
//
// integer();

// function notAnInteger() {
//     var i = 0;
//     for (; i <= 10; i++){
//         if (i % 2) {
//             alert(i);
//         }
//     }
// }
// notAnInteger();

// var num1 = prompt('Enter Number 1', ' ');
// var num2 = prompt('Enter Number 2', ' ');
//
// function f3(num1, num2){
// var little = (num1 < num2) ? num1 : (num1 > num2) ? num2 : 'Wrong';
//
// alert(little);
// }
// f3(num1, num2);

// var a = +prompt('Enter Number', ' ');
// function f4(num) {
//     switch (num) {
//         case 1:
//             alert('wrong');
//             break;
//         case 2:
//             alert('wrong');
//             break;
//         case 3:
//             alert('Вы выбрали вид карты VISA');
//             break;
//         case 4:
//             alert('wrong');
//             break;
//         default:
//             alert('Unknown Value');
//     }
// }
// (f4(a));

// function fibonacci(x) {
//
//     if (x > 1){
//         return (fibonacci(x - 1) + fibonacci(x - 2));
//     } else{
//         return x;
//     }
//
// }
// alert(fibonacci(10));

// function factorial(x) {
//
//   if (x){
//       return (x * factorial(x - 1));
//   } else{
//       return 1;
//   }
// }
//
// alert(factorial(10));

// function changeColor() {
//
//
//     function randomInteger(min, max) {
//         var rand = min - 0.5 + Math.random() * (max - min + 1);
//         rand = Math.round(rand);
//         return rand;
//     }
//
//     var color1 = randomInteger(0, 255);
//     var color2 = randomInteger(0, 255);
//     var color3 = randomInteger(0, 255);
//
//     var myblock = document.getElementById('square');
//
//     square.style.backgroundColor = 'rgb(' + color1 + ', ' + color2 + ', ' + color3 + ')';
//
// }
//
// setInterval(changeColor,1000);

// function uppercase() {
//     var input = prompt('Enter Text',' ');
//     var letter = input[0].toUpperCase();
//     document.write(letter + input.substring(1));
//
// }
//
// uppercase();

// var person = {
//     'Aram': 1000,
//     'Petros': 5000,
//     'Edgar': 3000
// }
//
// function maxValue(n) {
//     var count = 0;
//     var name = ' ';
//     for (var key in n) {
//         if (count < n[key]) {
//             count = n[key];
//             name = key;
//         }
//     }
//     alert(name + ' - ' + count);
// }
// maxValue(person);

// function toggleNav(n){
//     var drop = document.getElementById(n);
//     var arrow = document.getElementById('arrow');
//     var myHeight = '150px';
//
//     if (drop.style.height === myHeight){
//         drop.style.height = '0px';
//         arrow.innerHTML = '&#9662';
//     } else {
//         drop.style.height = myHeight;
//         arrow.innerHTML = '&#9652';
//     }
// }
//
// toggleNav(n);

// function myNav() {
//     document.getElementById('menu1').classList.toggle('display');
// }

// function carInfo() {
//
//     var carInfo = [
//         "Nissal",
//         ["Japan", "X_Trail", "50.000$"],
//         "BMW",
//         ["Germany", "X-5", "100.000$"],
//         "KIA",
//         ["Korea", "RIO", "40.000$"]
//     ];
//
//     for (var i = 0; i < carInfo.length; i++) {
//         if (Array.isArray(carInfo[i])) {
//             for (var j = 0; j < carInfo[i].length; j++) {
//                 document.write("<span style='color: darkblue; margin-left: 10px;'>" + carInfo[i][j] + "</span> <br>");
//             }
//         } else {
//             document.write("<span style='color: darkred;'>" + carInfo[i] + "</span> <br>");
//         }
//
//     }
// }
// carInfo();

// function penultimateValue() {
//
//     var names = ['Aram', 'Artur', 'Vazgen', 'Karen', 'Armen', 'Poxos', 'Petros'];
//
//     for (var i = 0; i < names.length; i++) {
//         if (i === names.length - 2) {
//             document.write("<span style='color: darkred;'>" + names[i] + "</span> <br>");
//         } else {
//             document.write("<span style='color: blue;'>" + names[i] + "</span> <br>");
//         }
//     }
// }
//
// penultimateValue();

// var number = [1,2,3,4,5,6,7,8,9];
//
// function getMaxArray(num) {
//
//
//     var max = num[0];
//     for (var i = 0; i < num.length; i++){
//     if(max < num[i]){
//             max = num[i];
//         }
//     }
//     document.write(max);
// }
//
// getMaxArray(number);

// var number = [1,2,3,4,5,6,7,8,9];
//
// function getMinArray(num) {
//
//     var min = num[0];
//     for( var i = 0; i<num.length; i++){
//         if(min > num[i]){
//             min = num[i];
//         }
//     }
//     document.write(min);
// }
//
// getMinArray(number);

// var dash = 'border-left-width';
//
// function withoutDash(str) {
//     var array = str.split('-');
//
//     for (var i = 1; i < array.length; i++){
//
//         array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
//
//     }
//     return array.join('');
// }
//
// document.write(withoutDash(dash));

// var name = prompt('Enter You Name And Username', ' ');
//
// function capitalize(str) {
//     var array = str.split(' ');
//
//     for (var i = 0; i < array.length; i++){
//
//         array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
//
//     }
//     return array.join(' ');
// }
//
// document.write(capitalize(name));

// var cssClassesObj = {className: 'open menu'};
//
// function clsCheck(cssClassesObj, cls) {
//
//     var check = (cssClassesObj.className) ? cssClassesObj.className.split(' ') : [];
//
//     for (var i = 0; i < check.length; i++){
//         if (check[i] === cls){
//             alert('This Class Is Exist');
//             return;
//         }
//     }
//     check.push(cls);
//     cssClassesObj.className = check.join(' ');
// }
//
// clsCheck(cssClassesObj, 'container');
// alert(cssClassesObj.className);
// clsCheck(cssClassesObj, 'menu');

// var age = prompt('Enter Your Age', '27');
//
// function yourAgeInYear(age) {
//
//     var now = new Date();
//     var year = now.getFullYear();
//
//     if (age > 99){
//         document.write('Вы Уже На Том Свете');
//         return;
//     }
//
//     if (age < 0){
//         document.write('Вы Еще Не Родились');
//     }
//
//     for (var i = age; i >= 0; i--, year-- ) {
//
//         if (i == 0) {
//             document.write('Вы родились в ' + year + ' - ом году');
//         } else {
//             document.write('В ' + year + ' - ом году Вам было ' + i + '<br>');
//         }
//     }
// }
//
// yourAgeInYear(age);

// function presentTime(){
//     var clock = document.getElementById('myClock');
//
//     var date = new Date();
//
//     var hours = date.getHours();
//     if (hours < 10){
//         hours = '0' + hours;
//     }
//     var minutes = date.getMinutes();
//     if (minutes < 10){
//         minutes = '0' + minutes;
//     }
//     var seconds = date.getSeconds();
//     if (seconds < 10){
//         seconds = '0' + seconds;
//     }
//
//     var milliSeconds = date.getMilliseconds();
//     if (milliSeconds < 100){
//         milliSeconds = '0' + milliSeconds;
//     }
//
//     clock.innerHTML = hours + ' : ' + minutes + ' : ' + seconds + ' : ' + milliSeconds;
// }
// setInterval(presentTime);

// function presentDate() {
//     var currentdate = document.getElementById('myDate');
//
//     var date = new Date();
//
//     var year = date.getFullYear();
//
//     var month = date.getMonth();
//     if (month < 10){
//         month = '0' + month;
//     }
//
//     var monthDate = date.getDate();
//     if (monthDate < 10){
//         monthDate = '0' + monthDate;
//     }
//
//     var day = date.getDay();
//
//     currentdate.innerHTML = monthDate + ' : ' + month + ' : ' + year + ' Weekday ' + day;
// }
//
// setInterval(presentDate);