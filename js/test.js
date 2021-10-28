//Переменные
// const numberOfSibling = 1 + 3;
// const numberOfCandies = 8;
// console.log(numberOfSibling / numberOfCandies);

// const secondsInAMinute = 60;
// const minutesInAnHour = 60;
// const secondsInAnHour = secondsInAMinute * minutesInAnHour;
// console.log(secondsInAnHour);

// const hoursInDay = 24;
// const secondsInADay = secondsInAnHour * hoursInDay;
// console.log(secondsInADay);

// const daysInAYear = 365;
// const secondsInAYear = secondsInADay * daysInAYear ;
// console.log(secondsInAYear);

// const age = 62;
// ageSeconds = age * secondsInAYear;
// console.log(ageSeconds);

// // Инкримент / декремент
// let x = 5;

// console.log(++x) 
// console.log(++x)
// console.log(++x)
// // Увелчивает на 1 при каждой итерации

// // += (плюс-равно) и –= (минус-равно)
// let value = 10;
// value += 10;
// console.log(value);

// let test = 15;
// test -= 10;
// console.log(test);

// // let ballons = 100;
// // ballons *= 2;
// // console.log(ballons);

// let ballons = 100;
// ballons /= 2;
// console.log(ballons);

// // Строки

// let myThing = 5;
// myThing = 'Это строка';
// console.log(myThing);

// let numberNine = 9;
// let stringNine = '9';
// let total = numberNine + numberNine;
// console.log(total);
// // Сумма 18;
// let total1 = stringNine + numberNine;
// console.log(total);
// // Сумма 18;

// let total2 = stringNine + stringNine;
// console.log(total2)
// // Сумма 99 - склеивает строк

// let greeting = 'Привет ';
// let myName = 'Vlad';
// result = greeting + myName;
// console.log(result);
// // Склеются, если не добавить пробел между последней буквой и ';


// //  Длинна строки

// let string = 'superCountry';
// result = 'superCountry'.length;
// result = string.length;
// console.log(result);
// // Узнаем длинну строки = 12, можно задать значению и самой переменной;

// // const numberOne = 2;
// // const nuberTwo = 3;
// // total = numberOne * nuberTwo;
// // console.log(total);

// // Получение отдельного символа строки

// const myName = 'Vlad';
// result = myName[0];
// console.log(result);

// const codeWord1 = 'Space';
// const codeWord2 = 'Between';
// const codeWord3 = 'Wrong';
// const codeWord4 = 'Help';
// result = codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1];
// console.log(result);
// Получаем слово'pere'

// Получение среза строки (slice)
// const longString = 'MynameisVladislav';
// result = longString.slice(0, 6 );
// console.log(result);
// Получаем 'Myname'

// Перевод строки в заглавный или строчный регистр
// const isTest = 'IsTeSt';
// result = isTest.toUpperCase();
// console.log(result);
// Значение стало в верхнем регистре

// const isTest = 'IsTeSt';
// result = isTest.toLowerCase();
// console.log(result);
//  Значение стало в нижнем регистре


// const isName = 'BagEveryDay';
// const yesName = isName.toLowerCase();
// Перевели все в нижний регистр
// const firstName = yesName[0];
// Выделили 1 букву
// const thingName = firstName.toUpperCase();
// Переводим ее в верхний регистр

// const lastName = yesName.slice(1);
// Получаем все буквы кроме первой в нижнем регистре
// result = thingName + lastName;
// Все объединяем
// console.log(result);
// В итоге получили 'Bageveryday';

// const isName = 'BagEveryDay';
// result = isName[0].toUpperCase() + isName.slice(1).toLowerCase();
// console.log(result);
// Простой вариант: 1 букву отделяем и перводим в вехний регистре
// вырезаем все буквы кроме первой и певодим внижний регистре
// Затем все складываем

// Булевы значения
// 1. Амперсант &&
// const hadShower = true;
// const hasBackpack = true;
// result = hadShower && hasBackpack;
// console.log(result);
// В этом случае true

// 2. пайп || (Наоборот)
// const hadShower = false;
// const hasBackpack = true;
// result = hadShower || hasBackpack;
// console.log(result);
// // В этом случае true
// 3. !
// const isWeekend = true;
// const heedIsShower = !isWeekend;
// console.log(heedIsShower);
//  В этом случае false
// const isWeekend = false;
// const hadShower = true;
// const hasApplle = false;
// const hasOrange  = true;
// const shouldGoToSchool = !isWeekend && hadShower && (hasApplle ||
//     hasOrange);
    
// console.log(shouldGoToSchool);
// Ответ true

// Сравнение
// const height = 150;
// const heightRestriction = 155;
// const result = height < heightRestriction;
// console.log(result);
// Результат true

// const height = 150;
// const heightRestriction = 150;
// const result = height >= heightRestriction;
// console.log(result);
// Результат true

// const age = 11;
// const accopaniment = true;
// const control = 12;

// const result = age + accopaniment ===  control;
// console.log(result);
// Результат true

// undefined and null

// const Name = null;

// console.log(Name);
// Если в значении пусто будет undefined(не присвоено) есл null будет null(ничто)

// Массивы
// const myTreeDinosaurus = ['Тиранозавр', 'Велоцираптор', 'Стегозавр',
//     ' Узурпатор', 'Насильник', 'Сволочь'];
// total = myTreeDinosaurus[2];
// console.log(total);
// Выдало Стегозавр(3 элемент)

// Изменение и создание элементов
// const myTreeDinosaurus = ['Тиранозавр', 'Велоцираптор', 'Стегозавр',
//     ' Узурпатор', 'Насильник', 'Сволочь'];
// total = myTreeDinosaurus[3] = 'Узурпатор new';
// console.log(total);
// Изменился на 'Узурпатор new'

// const dinosaurus = [];
// dinosaurus[0] = 'Тиранозавр';
// dinosaurus[1] = 'Насильник';
// dinosaurus[4] = 'Велоцираптор';
// dinosaurus[3] = ' Узурпатор';
// dinosaurus[55] = 'Mudak';
// console.log(dinosaurus);
// Добавились в соответсвии с номерами, 'Mudak' - последний

// Разные типы данных в одном массиве
// Длинна массива
// const maniacs = ['Yako', 'Nik', 'Sofia'];
// let=maniacs[0];
// let=maniacs[1];
// let = maniacs[2];
// result = maniacs.length;
// console.log(result);
// Длинна(3)
//  Свойство(length) 
// const maniacs = ['Yako', 'Nik', 'Sofia'];
// let=maniacs[0];
// let=maniacs[1];
// let = maniacs[2];
// result = maniacs[maniacs.length-1];
// console.log(result);
// При -1, всегда последний индекс, т.к последний
// индекс массива всегда на единицу меньше длины этого массива.

//      Вызов метода(puch)
// const animels = [];
// animels.push('Cat');
// animels.push('Dog');
// animels.push('Bird');

// console.log(animels.length);
// Создает массив из трех элементов(animels)
// Указывает длинну из 3 элементов(animels.length)

// Чтобы добавить элемент в начало массива, используйте
// метод .unshift(элемент)

// const animels = [];
// animels.push('Cat');
// animels.push('Dog');
// animels.push('Bird');
// animels.unshift('Monkey');
// console.log(animels);
// При объвлении animels.unshift('Monkey'), добавился 4 индекс, причем
// он становится 1;
// При объвлении animels  'Monkey''Cat''Dog' 'Bird'

// Удаление элементов массива(pop)
// const animels = ['Cat', 'Dog', 'Bird', 'Monkey' ];
// lastAnimels = animels.pop();
// lastAnimels = animels.pop();
// animels.unshift(lastAnimels);
// console.log(animels);
// При lastAnimels = animels.pop(); удаляет по одному индексу сзади
// При animels.unshift(lastAnimels); добавляет последний удаленный в начало

// Метод animals.shift() только удаляет 1 индекс

// const animels = ['Cat', 'Dog', 'Bird', 'Monkey'];
// const firstAnimels = animels.shift();
// animels.unshift(firstAnimels);
// console.log(animels);
// При  animels.shift(); удаляет 1 индекс
// При animels.unshift(firstAnimels); возвращает 1 индекс в начало
// 59 страница











