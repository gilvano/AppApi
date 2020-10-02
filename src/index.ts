import "reflect-metadata";
import { createConnection } from "typeorm";
import express from "express";
import config from "./config/ormconfig";


//Connects to the Database -> then starts the express
createConnection(config)
  .then(async connection => {
    // Create a new express application instance
    const app = express();

    // Call midlewares
    // app.use(cors());
    // app.use(helmet());
    // app.use(bodyParser.json());

    //Set all routes from routes folder
    // app.use("/", routes);

    app.get("/", (request, response) => {
      console.log('get request');
      return response.json({ message: "Hello get, TypeScript!!!" });
    });
    
    app.post("/", (request, response) => {
      console.log('post request');
      return response.json({ message: "Hello post, TypeScript!!!" });
    });

    app.listen(3000, () => {
      console.log("Server started on port 3000!");
    });
  })
  .catch(error => console.log(error));