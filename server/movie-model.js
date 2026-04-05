/* Task 1.1. Add your movie data here 
   and export it so it's available in server.js */

const movies = {
    tt0084787: {
        imdbID: "tt0084787",
        Title: "The Thing",
        Released: "1982-06-25",
        Runtime: 109,
        Genres: ["Horror", "Mystery", "Sci-Fi"],
        Directors: ["John Carpenter"],
        Writers: ["Bill Lancaster", "John W. Campbell Jr."],
        Actors: ["Kurt Russell", "Wilford Brimley", "Keith David"],
        Plot: "A research team in Antarctica is hunted by a shape-shifting alien that assumes the appearance of its victims.",
        Poster: "https://m.media-amazon.com/images/M/MV5BNGViZWZmM2EtNGYzZi00ZDAyLTk3ODMtNzIyZTBjN2Y1NmM1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
        Metascore: 57,
        imdbRating: 8.2
    },

    tt0078748: {
        imdbID: "tt0078748",
        Title: "Alien",
        Released: "1979-06-22",
        Runtime: 117,
        Genres: ["Horror", "Sci-Fi"],
        Directors: ["Ridley Scott"],
        Writers: ["Dan O'Bannon", "Ronald Shusett"],
        Actors: ["Sigourney Weaver", "Tom Skerritt", "John Hurt"],
        Plot: "After a space merchant vessel receives an unknown transmission as a distress call, one of the crew is attacked by a mysterious lifeform.",
        Poster: "https://upload.wikimedia.org/wikipedia/en/c/c3/Alien_movie_poster.jpg",
        Metascore: 89,
        imdbRating: 8.5
    },

    tt0083658: {
        imdbID: "tt0083658",
        Title: "Blade Runner",
        Released: "1982-06-25",
        Runtime: 117,
        Genres: ["Sci-Fi", "Thriller"],
        Directors: ["Ridley Scott"],
        Writers: ["Hampton Fancher", "David Webb Peoples", "Philip K. Dick"],
        Actors: ["Harrison Ford", "Rutger Hauer", "Sean Young"],
        Plot: "A blade runner must pursue and terminate four replicants who stole a ship in space and have returned to Earth to find their creator.",
        Poster: "https://upload.wikimedia.org/wikipedia/en/5/53/Blade_Runner_poster.jpg",
        Metascore: 84,
        imdbRating: 8.1
    }
}

module.exports = movies