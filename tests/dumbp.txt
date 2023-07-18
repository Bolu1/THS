// import Home from "../pages/index";
// import "@testing-library/jest-dom";
// import { fireEvent, render, screen } from "@testing-library/react";

// describe("Calculator", () => {
//   it("renders a calculator", () => {
//     render(<Home />);
//     // check if all components are rendered
//     expect(screen.getByTestId("dateInput")).toBeInTheDocument();
//   });
// });


/**
 * @jest-environment node
 */
// my-broken-node-only-test.js

// import { createMocks } from "node-mocks-http";
// import get from "../pages/api/providers/get";

// // jest.setTimeout(70 * SECONDS)

// describe("/api/providers/get", () => {
//   test("returns providers", async () => {
//     const { req, res } = createMocks({
//       method: "GET",
//     });
    
//     const ee = await get(req, res);
//     console.log(ee)
    
//     expect(res._getStatusCode()).toBe(200);
//     //   expect(JSON.parse(res._getData())).toEqual(
//     //     expect.objectContaining({
//     //       message: 'Your favorite animal is dog',
//     //     }),
//     //   );
//   });
// });




// import http from 'http';

// import { apiResolver } from 'next/dist/next-server/server/api-utils';
// import supertest from 'supertest';

// import get from "../pages/api/providers/get";

// jest.setTimeout(10e3);

// jest.setTimeout(70 * SECONDS)

// describe("/api/providers/get", () => {

//   test("returns providers", async () => {
//     const requestHandler = (req, res) => apiResolver(req, res, undefined, handler)
//     const server = http.createServer(requestHandler)
//     const result = await supertest(server)
//       .get('/api/providers/get')
//       .expect(200)

//     it('fetches providers', async () => {
//       const body = {
//         name: 'John Doe',
//         email: 'johndoe@example.com',
//         password: 'ji32k7au4a83',
//       };
//       const result = await supertest(server)
//         .post('/api/auth/register')
//         .send(body)
//         .expect(201)
//         .expect('Content-Type', /json/);
  
//       expect(result.body).toBeDefined();
//     });
  
//   });
// });





