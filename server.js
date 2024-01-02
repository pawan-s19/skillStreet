const app = require("./app");
const connectDb = require("./models/db");
const errorMiddleware = require("./middlewares/error");

//Uncaught exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting down due to uncaught exception");
});

connectDb(); //connecting database

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});

//Unhandled promise rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting down due to unhandled rejection");
  server.close(() => {
    process.exit(1);
  });
});
