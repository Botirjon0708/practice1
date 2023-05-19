

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    personalMovieDB.count = +prompt(
      "How many movies have you already watched? ",
      ""
    );

    while (
      personalMovieDB.count == "" ||
      personalMovieDB.count == null ||
      isNaN(personalMovieDB.count)
    ) {
      personalMovieDB.count = +prompt(
        "How many movies have you already watched? ",
        ""
      );
    }
  },
  rememberMyFilms: function () {
    for (let i = 0; i < 2; i++) {
      const a = prompt("One of the last movies have you watched?", "").trim(),
        b = prompt("На сколько оцените его?", "");

      if (a != null && b != null && a != "" && b != "" && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log("done");
      } else {
        console.log("error");
        i--;
      }
    }
  },
  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      console.log("Watched quite a less movies");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log("You are a good  viewer");
    } else if (personalMovieDB.count >= 30) {
      console.log("You are a cinemaddict");
    } else {
      console.log("Error");
    }
  },
  showMyDb: function (hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },
  toggleVisibleMyDB: function () {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false
    } else {
      personalMovieDB.privat = true;
    }
  },
  writeYourGenres: function() {
    for (let i = 1; i < 2; i++) {
      //   let genre = prompt(`Your favorite genre ${i}`);
      //   if (genre === '' || genre == null) {
      //     console.log('You entered incorrect data or did not enter it at all ');
      //     i--;
      //   } else {
      //     personalMovieDB.genres[ i - 1 ] = genre;
      //   }
      let genres = prompt(`Enter your favorite genres separated by commas`).toLocaleLowerCase();
      if (genres === '' || genres == null) {
        console.log('You entered incorrect data or did not enter it at all ');
        i--;
      } else {
        personalMovieDB.genres = genres.split(',') 
        personalMovieDB.genres.sort();
        }
    }
    personalMovieDB.genres.forEach((item, i) => {
      console.log(`favorite genre ${i + 1} - It is ${item}`);
    });
  }
};


