const numberOfFilms = +prompt("How many movies have you already watched? ", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};


const a = prompt("one of the last movies you watched?", ""),
    b = prompt("На сколько оцените его?", ""),
    c = prompt("one of the last movies you watched?", ""),
    d = prompt("На сколько оцените его?", "");

personalMovieDB.movies[ a ] = b
personalMovieDB.movies[ c ] = d

console.log(personalMovieDB);

