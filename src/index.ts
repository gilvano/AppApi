import express, { json } from "express";

const app = express();
app.use(json());

app.get("/", (request, response) => {
  console.log('get request');
  return response.json({ message: "Hello get, TypeScript!!!" });
});

app.post("/", (request, response) => {
  console.log('post request');
  return response.json({ message: "Hello post, TypeScript!!!" });
});

app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});