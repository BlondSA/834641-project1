"use strict";
/* 1
    Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

// const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
// };

// const questionOne = prompt("Один из последних просмотренных фильмов?", "");
// const questionTwo = prompt("На сколько оцените его?", "");
// const questionThree = prompt("Один из последних просмотренных фильмов?", "");
// const questionFour = prompt("На сколько оцените его?", "");

// personalMovieDB.movies[questionOne] = questionTwo;
// personalMovieDB.movies[questionThree] = questionFour;

// console.log(personalMovieDB);

/* 2
    Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

// // Вариант 1:
// const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

// const personalMovieDB = {
//   actors: {},
//   count: numberOfFilms,
//   genres: [],
//   movies: {},
//   privat: false,
// };

// let i = 0;

// while (i < 2) {
//   const questionOne = prompt("Один из последних просмотренных фильмов?", "");
//   const questionTwo = prompt("На сколько оцените его?", "");
//   i++;

//   if (
//     questionOne != null &&
//     questionTwo != null &&
//     questionOne != "" &&
//     questionTwo != "" &&
//     questionOne.length < 50 &&
//     questionTwo.length < 50
//   ) {
//     personalMovieDB.movies[questionOne] = questionTwo;
//     console.log("Done");
//   } else {
//     console.log("Error");
//     i--;
//   }
// }

// if (personalMovieDB.count < 10) {
//   alert("Просмотрено довольно мало фильмов");
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
//   alert("Вы классический зритель");
// } else if (personalMovieDB.count > 30) {
//   alert("Вы киноман");
// } else {
//   alert("Произошла ошибка");
// }

// console.log(personalMovieDB);

// // Вариант 2:
// const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

// const personalMovieDB = {
//   actors: {},
//   count: numberOfFilms,
//   genres: [],
//   movies: {},
//   privat: false,
// };

// let i = 0;

// do {
//   const questionOne = prompt("Один из последних просмотренных фильмов?", "");
//   const questionTwo = prompt("На сколько оцените его?", "");
//   i++;

//   if (
//     questionOne != null &&
//     questionTwo != null &&
//     questionOne != "" &&
//     questionTwo != "" &&
//     questionOne.length < 50 &&
//     questionTwo.length < 50
//   ) {
//     personalMovieDB.movies[questionOne] = questionTwo;
//     console.log("Done");
//   } else {
//     console.log("Error");
//     i--;
//   }
// } while (i < 2);

// if (personalMovieDB.count < 10) {
//   alert("Просмотрено довольно мало фильмов");
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
//   alert("Вы классический зритель");
// } else if (personalMovieDB.count > 30) {
//   alert("Вы киноман");
// } else {
//   alert("Произошла ошибка");
// }

// console.log(personalMovieDB);

// Вариант 3:

/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

const personalMovieDB = {
  actors: {},
  count: 0,
  genres: [],
  movies: {},
  privat: false,

  start: function () {
    personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (
      personalMovieDB.count == "" ||
      personalMovieDB.count == null ||
      isNaN(personalMovieDB.count)
    ) {
      personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
  },

  rememberMyFilms: function () {
    for (let i = 0; i < 2; i++) {
      const questionOne = prompt(
        "Один из последних просмотренных фильмов?",
        ""
      );
      const questionTwo = prompt("На сколько оцените его?", "");

      if (
        questionOne != null &&
        questionTwo != null &&
        questionOne != "" &&
        questionTwo != "" &&
        questionOne.length < 50 &&
        questionTwo.length < 50
      ) {
        personalMovieDB.movies[questionOne] = questionTwo;
        console.log("Done");
      } else {
        console.log("Error");
        i--;
      }
    }
  },

  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      alert("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
      alert("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
      alert("Вы киноман");
    } else {
      alert("Произошла ошибка");
    }
  },

  writeYourGenres: function () {
    for (let i = 1; i < 4; i++) {
      const yourFavoriteGenre = prompt(`Ваш любимый жанр под номером ${i}`, "");
      if (yourFavoriteGenre != null && yourFavoriteGenre != "") {
        personalMovieDB.genres.push(yourFavoriteGenre);
        console.log("Done");
      } else {
        console.log("Error");
        i--;
      }
    }
    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Любимый жанр ${i} - это ${item}`);
    });
  },

  showMyDB: function () {
    if (personalMovieDB.privat == false) {
      console.log(personalMovieDB);
    }
  },

  toggleVisibleMyDB: function () {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  }
}

personalMovieDB.start();

personalMovieDB.rememberMyFilms();

personalMovieDB.detectPersonalLevel();

personalMovieDB.writeYourGenres();

personalMovieDB.showMyDB();

personalMovieDB.toggleVisibleMyDB();

console.log(personalMovieDB);
