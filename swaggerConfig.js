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
      url: "https://skillstreet-production.up.railway.app/", // Update with your server URL
      description: "prod Server",
    },
  ],
};

module.exports = swaggerDefinition;
