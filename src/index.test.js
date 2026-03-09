const request = require("supertest");
const app = require("./index");

describe("GET /", () => {
  it("should return company info", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    // BUG: wrong expected value — fix me!
    expect(res.body.company).toBe("Acme Inc");
  });
});

describe("GET /health", () => {
  it("should return status ok", async () => {
    const res = await request(app).get("/health");
    expect(res.statusCode).toBe(200);
    // BUG: wrong expected value — fix me!
    expect(res.body.status).toBe("healthy");
  });
});

describe("GET /api/orders", () => {
  it("should return a list of orders", async () => {
    const res = await request(app).get("/api/orders");
    expect(res.statusCode).toBe(200);
    // BUG: wrong expected length — fix me!
    expect(res.body).toHaveLength(10);
  });
});
