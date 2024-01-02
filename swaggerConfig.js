const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "NOTE TAKING APPLICATION (API)",
    version: "1.0.0",
    description:
      "This api exposes endpoints, that allows users to perform CRUD operations, that is to create, read, update, delete a note. Note contains a title and a content field",
  },
  servers: [
    {
      url: "http://localhost:8080", // Update with your server URL
      description: "Dev Server",
    },
  ],
};

module.exports = swaggerDefinition;
