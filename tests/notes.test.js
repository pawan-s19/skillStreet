const request = require("supertest");
const app = require("../app");
const mongoose = require("mongoose");

const noteId = "6593cdf935f0f6d7578a753c"; //this is the id for update, delete, and get notes query

beforeAll(async () => {
  await mongoose.connect(process.env.DB_URL);
});

describe("GET /api/note", () => {
  it("should return all notes", async () => {
    const response = await request(app)("/api/note");
    expect(response.statusCode).toBe(201);
    expect(response.type).toBe("application/json");
    expect(response.body).toBeInstanceOf(Object);
  });
});

describe("GET /api/note/:noteId", () => {
  it("should return a note", async () => {
    const response = await request(app).get(`/api/note/${noteId}`);
    expect(response.statusCode).toBe(201);
    expect(response.type).toBe("application/json");
    expect(response.body).toBeInstanceOf(Object);
  });
});

describe("POST /api/note", () => {
  it("should create a note", async () => {
    const response = await request(app).post("/api/note").send({
      title: "test note",
      content: "test content",
    });
    expect(response.body.message).toBe("Created successfully");
    expect(response.statusCode).toBe(201);
    expect(response.type).toBe("application/json");
    expect(response.body).toBeInstanceOf(Object);
    expect(response.body.data.title).toBe("test note");
    expect(response.body.data.content).toBe("test content");
  });
});

describe("PUT /api/note/:noteId", () => {
  it("should update a note", async () => {
    const response = await request(app).put(`/api/note/${noteId}`).send({
      title: "update test note",
      content: "update test content",
    });
    expect(response.body.message).toBe("Updated successfully");
    expect(response.statusCode).toBe(201);
    expect(response.type).toBe("application/json");
    expect(response.body).toBeInstanceOf(Object);
    expect(response.body.data.title).toBe("update test note");
    expect(response.body.data.content).toBe("update test content");
  });
});

describe("DELETE /api/note/:noteId", () => {
  it("should delete a note", async () => {
    const response = await request(app).delete(`/api/note/${noteId}`);
    expect(response.body.message).toBe("Deleted successfully");
    expect(response.statusCode).toBe(201);
    expect(response.type).toBe("application/json");
    expect(response.body).toBeInstanceOf(Object);
  });
});

afterAll(async () => {
  await mongoose.disconnect();
});
