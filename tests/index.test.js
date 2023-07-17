/**
 * @jest-environment node
 */
// my-broken-node-only-test.js

import { testApiHandler } from "next-test-api-route-handler";
import get from "../pages/api/providers/get";
import getProvidersAvailability from "../pages/api/providers/[id]";
import getAvailability from "../pages/api/providers/availability/[id]";
import createAppointment from "../pages/api/appointments/new";
import { createConnection } from "../config/db";


describe("[GET] /api/providers/get", () => {

  const handler = get

  it("should fetch all providers and return 200 status code", async () => {
    await testApiHandler({
      handler,
      test: async ({ fetch }) => {
        const res = await fetch({ method: "GET" });
        await expect(res.status).toBe(200);
      },
    });
  });

});


describe("[GET] /api/providers/[id]", () => {

  const handler = getProvidersAvailability

  it("should fetch the first provider's time slots and return 200 status code", async () => {
    await testApiHandler({
      handler,
      paramsPatcher: (params) => (params.id = 1),
      test: async ({ fetch }) => {
        const res = await fetch({ method: "GET" });
        await expect(res.status).toBe(200);
      },
    });
  });
});


describe("[GET] /api/providers/availability", () => {

  const handler = getAvailability

  it("should fetch the first available time slots and return 200 status code", async () => {
    await testApiHandler({
      handler,
      paramsPatcher: (params) => (params.id = 1),
      test: async ({ fetch }) => {
        const res = await fetch({ method: "GET" });
        await expect(res.status).toBe(200);
      },
    });
  });
});


describe("[POST] /api/appointments/[id]", () => {

  const handler = createAppointment

  const requestPayload = {
    duration: "30 mins",
    reminder_email: "aleshpelumi@getMaxListeners.com",
    availability_id: "212",
  }

  it("should create an appointment with an invalid request payload and return 400 status code", async () => {
    await testApiHandler({
      handler,
      test: async ({ fetch }) => {
        const res = await fetch({ method: "POST", data: requestPayload });
        await expect(res.status).toBe(400);
      },
    });
  });
});