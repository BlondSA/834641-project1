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

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
  actors: {},
  count: numberOfFilms,
  genres: [],
  movies: {},
  privat: false,
};

for (let i = 0; i <= 1; i++) {
  const questionOne = prompt("Один из последних просмотренных фильмов?", "");
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

if (personalMovieDB.count < 10) {
  alert("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
  alert("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
  alert("Вы киноман");
} else {
  alert("Произошла ошибка");
}

console.log(personalMovieDB);
