const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
const basicAuth = require("express-basic-auth");

const swagger = require("./swagger");

const app = express();
swagger(app);

const errorMiddleware = require("./middlewares/error");

dotenv.config({ path: "./.env" });
app.use(express.json());
app.use(morgan("dev")); //Required for logging out requests on the console
app.use(cors({ origin: "" })); // Required with the client setup, for now origin is blank

//Setting up basic authentication, this requires a username and password from the client, that is mentioned below
USERNAME = admin;
PASSWORD = admin123;
app.use(
  basicAuth({
    users: { admin: "admin123" },
    unauthorizedResponse: "Unauthorized",
    challenge: true,
  })
);

//Route imports
const noteRoutes = require("./routes/note");

app.use("/api", noteRoutes);

//Error middleware
app.use(errorMiddleware);

module.exports = app;
