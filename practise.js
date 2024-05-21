import express from "express";

const app = express();

// to make app understand json
app.use(express.json());

// routes
app.get("/say-hello", (req, res) => {
  return res.status(200).send("Hello");
});

let movieList = [];

// add movie
app.post("/movie/add", (req, res) => {
  //  extract new movie from req.body
  const newMovie = req.body;

  //   add new movie to movieList
  movieList.push(newMovie);

  //   send response
  return res.status(200).send({ message: "Movie is added successfully." });
});

// get movies
app.get("/movie/list", (req, res) => {
  return res.status(200).send({ message: "success", movies: movieList });
});

// delete a movie
app.delete("/movie/delete", (req, res) => {
  //   extract movie name from req.body
  const movieNameToBeDeleted = req.body.name;

  //   find movie with provided name on  movie list
  const requiredMovie = movieList.find((item) => {
    if (item.name === movieNameToBeDeleted) {
      return item;
    }
  });

  //    if not movie, throw error
  if (!requiredMovie) {
    return res.status(404).send({ message: "Movie does not exist." });
  }

  //   remove movie from list
  const newMovieList = movieList.filter((item, index, array) => {
    if (item.name !== movieNameToBeDeleted) {
      return item;
    }
  });

  //   replace movie list with new movie list
  movieList = structuredClone(newMovieList);

  //   send response
  return res.status(200).send({ message: "Movie is deleted successfully," });
});

// network port and server
const PORT = 8001;

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
