/**
 * Import node packages
 * */

import cors from "cors";
import express from "express";

/**
 * Import required modules
 * */
import { setupDatabase, setupRoutes, setupServer } from "./helpers";

const app = express();

/**
 * Use required express middleware
 * */

app
  /** CORS adds the necessary headers to the response to tell the client that it's allowed to make requests from a different origin */
  .use(cors())
  /** It parses the JSON data & converts it into a JavaScript object */
  .use(express.json());

/**
 * Setup the routes
 * */
setupRoutes(app);

/**
 * Setup the MongoDB database
 * */
setupDatabase();

/**
 * Setup the server according to http and https module
 * */
setupServer(app);

export default app;
