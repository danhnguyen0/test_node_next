const request = require("supertest");
const createServer = require("../createServer");

let server;

beforeAll(async () => {
  server = await createServer();
});

test("GET /api/hello returns JSON message", async () => {
  const res = await request(server).get("/api/hello");
  expect(res.statusCode).toBe(200);
  expect(res.body).toEqual({ message: "Hello from Express API!" });
});
