const request = require("supertest");
const server = require("./server.js");
const db = require("../data/db-config.js");
const { intersect } = require("../data/db-config.js");
const { expectCt } = require("helmet");

describe("GET /", () => {
  it("should return 200 OK", async () => {
    const res = await request(server).get("/");
    expect(res.status).toBe(200);
  });
});
