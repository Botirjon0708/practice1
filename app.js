const numberOfFilms = +prompt("How many movies have you already watched? ", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};



for (let i = 0; i < 2; i++){
  const a = prompt("One of the last movies have you watched?", ""),
    b = prompt("На сколько оцените его?", "");
  
  if (a != null && b != null && a != "" && b != "" && a.length < 50) {
    
    personalMovieDB.movies[ a ] = b;
    console.log('done');
  } else {
    console.log('error');
    i--;
  }
  
}
if (personalMovieDB.count < 10) {
    console.log("Watched quite a less movies");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30 ){
    console.log("You are a good  viewer");
} else if (personalMovieDB.count >= 30) {
  console.log("You are a cinemaddict");

} else {
  console.log("Error");
}
  

console.log(personalMovieDB);


