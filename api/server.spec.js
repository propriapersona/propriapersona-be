const request = require("supertest");
const server = require("./server.js");
const db = require("../data/db-config.js");

describe("GET /", () => {
  it("should return 200 OK", async () => {
    const res = await request(server).get("/");
    expect(res.status).toBe(200);
  });

  it("should return text", async () => {
    const res = await request(server).get("/");
    expect(res.type).toBe("text/html");
  });
});
