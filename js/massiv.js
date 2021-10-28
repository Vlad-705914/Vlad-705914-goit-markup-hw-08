// const MyFirstStep = 'Java Script';
// console.log(MyFirstStep);
// В консоли вернет Java Script

// let username;
// console.log(username);
// В консоли undefined(неопознано), при const username(ошибка)

// let age = 10;

// age = 15;
// console.log(age);
// В консоли 15

// Оператор typeof - определитель значения

//   let userName;
// console.log(userName);
// in consol undefined
// let inputValue = null;
// console.log(typeof inputValue);
// in console object
// const myString = 'Java Script';
// console.log(typeof myString);
// in console string
// const myNumber = 1959;
// console.log(typeof myNumber);
// in console number
// Описательный вывод
// const name = 'Vlad';
// console.log('Name', name);
// is console Name Vlad
// const message = 'Help';
// alert(message);
// Выводит модальное окно

// Получение данных confirm
// Просим подтвердить согласие клиента на бронь
// И сохраняем результаты в переменной
// const isComing = confirm("Please confirm hotel reservation");
// console.log(isComing);
// Модальное окно, ок-true, отмена - falsе
// prompt
// Спрашиваем имя отеля в котором бы хотел остановиться клиента
// Сщхраняем в переменную результаты

// const hotelName = prompt ('Please enter disired name hotel');
// console.log(hotelName);
// // Выводит модальное окно куда вводим название отеля
// // Если нет то null
// Важная особенность prompt в том, что не зависимо что ввел
// пользователь, всегда вернется строка.То есть, если пользователь
//  ввел 5,
//   то вернется не число 5, а строка "5".

// Приведение к числу
// const valueA = '5';
// console.log(Number(valueA));
// console.log(typeof Number(valueA));
// in console 5 and number
// const valueB = 'Hello';
// console.log(Number(valueB));
// console.log(typeof Number(valueB));
// in console NaN and Number

// Методы Number.parseInt() и Number.parseFloat()

// console.log(Number.parseInt('5px'));
// console.log(Number.parseInt('5d me 12'));
// console.log(Number.parseInt('12.74 kju 12'));
// console.log(Number.parseInt('kjlkh'));
// Парсит целое число в консоли получаем  5, 5, 12, NaN

// console.log(Number.parseFloat("5px"));
// console.log(Number.parseFloat("12qwe74"));
// console.log(Number.parseFloat("12.46qwe79"));
// console.log(Number.parseFloat("qweqwe"));
// //  Парсит целое число  и дробь в консоли получаем  5, 12, 12.46, NaN

// Проверка на число

// // const validNumber = Number('51'); //true
// console.log(Number.isNaN(validNumber)); //false
// const validNumber = Number('hjhgh'); //false
// console.log(Number.isNaN(validNumber))// true
// Для всех значений кроме NaN будет false

// Сложение чисел с плавающей точкой

// При сложении 0.17 и 0.24, две неточности складываются,
//   получается незначительная,
//   но всё же ошибка в вычислениях.
//   console.log(0.17 + 0.24); // 0.41000000000000003)
//   применим метод toFixed() в скобках на какой дроби остановиться
// console.log((0.17 + 0.24).toFixed(2));// 0.41
//     Math
// // Math.floor(num) - возвращает наибольшее целое число,
// // меньшее, либо равное указанному
// console.log(Math.floor(1.7)); // 1

// // Math.ceil(num) - возвращает наименьшее целое число,
// // большее, либо равное указанному числу.
// console.log(Math.ceil(1.2)); // 2

// // Math.round(num) - возвращает значение числа,
// // округлённое до ближайшего целого
// console.log(Math.round(1.2)); // 1
// console.log(Math.round(1.5)); // 2

// // Math.max(num1, num2, ...) - возвращает наибольшее число из набора
// console.log(Math.max(20, 10, 50, 40)); // 50

// // Math.min(num1, num2, ...) - возвращает наименьшее число из набора
// console.log(Math.min(20, 10, 50, 40)); // 10

// // Math.pow(base, exponent) - возведение в степень
// console.log(Math.pow(2, 4)); // 16

// // Math.random() - возвращает псевдослучайное число в диапазоне [0, 1)
// console.log(Math.random()); // случайное число между 0 и 1
// console.log(Math.random() * (10 - 1) + 1); // псевдослучайное число от 1 до 10

// // Строки//

// const message = 'Mango' + 'is' + 'Grapes';
// console.log(message);// MangoisGrapes

// const total = 1 + 2 + '3';
// console.log(1 + "2" + 4); // "124"
// console.log(total);// 33
// Цифры складываются, строки склеиваются

// Возвращает позицию(индекс) на которой находится первое
//  совпадение подстроки или - 1, если ничего не найдено.

//  Метод indexOf()

// const message = "Welcome to Bahamas!";
// console.log(message.indexOf("to")); // 8
// console.log(message.indexOf("hello")); // -1

// Метод includes()#

// Проверяет входит ли подстрока в строку, возвращает буль - true если входит и false в противном случае.Регистр символов в строке и подстроке имеет значение, так как например буква "a" не равна букве "А".

// const productName = "Ремонтный дроид";

// console.log(productName.includes("н")); // true
// console.log(productName.includes("Н")); // false
// console.log(productName.includes("дроид")); // true
// console.log(productName.includes("Дроид")); // false
// console.log(productName.includes("Ремонтный")); // true
// console.log(productName.includes("ремонтный")); // false

// Методы replace() и replaceAll()#
// Возвращают новую строку, в которой первое(replace)
//  или все совпадения(replaceAll) подстроки заменены на 
//  указанное значение.

// const jsFileName = "script.js";
// const minifiedJsFileName = jsFileName.replace(".js", ".min.js");
// console.log(minifiedJsFileName); // "script.min.js"

// const cssFileNames = "styles.css, about.css, portfolio.css";
// const minifiedCssFileNames = cssFileNames.replaceAll(".css", ".min.css");
// console.log(minifiedCssFileNames); // "styles.min.css, about.min.css, 
// portfolio.min.css"

// Методы replace() и replaceAll() (замена)
// Возвращают новую строку, в которой первое(replace)
//  или все совпадения(replaceAll)
//  подстроки заменены на указанное значение.
// const jsName = 'script.js';
// const miniFiend = jsName.replace('.js', '.min.js');
// console.log(miniFiend); // script.min.js

// const jsNames = 'styles.css , about.css, portfolio.css';
// const miniFiends = jsNames.replace('.css', '.min.css', 'portfolio.css');
// console.log(miniFiends); // styles.min.css , about.css, portfolio.css

// Метод slice()#
// Метод строк slice(startIndex, endIndex) используется для создания копии
//  части или всей строки.Он делает копию элементов строки от startIndex и
// до, но не включая endIndex и возвращает новую строку, не изменяя оригинал.

// const productName = "Repair droid";
// console.log(productName.slice(0, 4)); // "Repa"
// console.log(productName.slice(3, 9)); // "air dr"
// console.log(productName.slice(0, productName.length)); // "Repair droid"
// console.log(productName.slice(7, productName.length)); // "droid"

// Циклы

// let country = 0;
// while (country<10) {
//     console.log('country:', country);
//     country += 1;


// }


// let counter = 0;

// while (counter < 10) {
//   console.log("counter: ", counter);
//   counter += 1;
// }

// let clientCounter = 18;
// let maxClients = 25;
// while (clientCounter < maxClients) {
//     console.log('clientCounter:', clientCounter);
//     clientCounter += 1;

// }

// let password = '';
// do {
//     password = prompt('Введите пароль длиннее 4 символов', '');
// } while (password.length < 5);
// console.log('Ввели пароль', password);

for (let i = 0; i <= 20; i = 5){
    console.log(i);
}
