// import express from "express";

// const app = express();

// to make app understand json
// app.use(express.json());

//routes
// app.get("/say-hello", (req, res) => {
//   return res.status(200).send("Hello Kazal,");
// });
// let movieList = [];
// add movie
// app.post("/movie/add", (req, res) => {
  //extract new movie from req.body
  // const newMovie = req.body;
  // add new movie to movieList
  // movieList.push(newMovie);
  // return res.status(200).send({ message: "movie is added successfully." });
// });
//network port and server
// app.get("movie/list", (req, res) => {
  // return res.status(200).send({ message: "success", movie: movieList });
// });
//delete a movie
//app.delete('/movie/delete',(req,res) =>{
//  const requiredMovie =
//})
// const PORT = 8001;
// app.listen(PORT, () => {
  // console.log(`App is listening on port ${PORT}`);
// });



//REWRITTING THE ABOVE CODE :


import express from "express";

// create app
const app = express();

// to make app understand json
// JSON=> Javascript Object Notation
// {"name":"Reema"}
app.use(express.json());

// ?req methods
// ? post(create/add),get(read/retrieve),put(edit/update),delete(remove/delete)

let studentList = [];

// ?add student
app.post("/student/add", (req, res) => {
  console.log(req.body);
  // extract new student from req.body
  const newStudent = req.body;

  // add new student to student list
  studentList.push(newStudent);

  return res.status(201).send({ message: "Student is added successfully." });
});

// ?read student list
app.get("/student/list", (req, res) => {
  return res.status(200).send({ message: "success", students: studentList });
});

// network port
const PORT = 8000;

app.listen(PORT, () => {
  console.log(App is listening on port ${PORT});
});