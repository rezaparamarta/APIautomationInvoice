const request = require('supertest');
const assert = require('assert');
const baseUrl = require('../../env');

describe('This is Unit Test for API Table Container Convertion Inquiry', () => {
    it('This must be return response code and response body ', async() => {

        // Setup
        const expectedStatus = 200;
        const expectedBody = {
            id: 2136,
            conType: '2024',
            conDesc: 'Software Engineer',
            size: 21,
            tareWeight: 2500,
            quantity: 20,
            type: 'C',
            liter: 9000,
            changeD_BY: 'Reza Paramarta',
            changeD_DT: null
        };

        // Exercise
        const response = await request(baseUrl())
        .put('/table-container-convertion/update') // Pastikan endpoint benar
        .set('Content-type', 'application/json')
        .send({
            "id": 2136,
            "conType": "2024",
            "conDesc": "Software Engineer",
            "size": 21,
            "tareWeight": 2500,
            "quantity": 20,
            "type": "C",
            "liter": 9000,
            "changeD_BY": "Reza Paramarta",
            "changeD_DT": "2024-06-04T09:37:59.226Z"
        });

          // Verify
          assert.equal(response.status, expectedStatus);
          assert.equal(response.body.id, expectedBody.id);
          assert.equal(response.body.conType, expectedBody.conType);
          assert.equal(response.body.conDesc, expectedBody.conDesc);
          assert.equal(response.body.size, expectedBody.size);
          assert.equal(response.body.tareWeight, expectedBody.tareWeight);
          assert.equal(response.body.quantity, expectedBody.quantity);
          assert.equal(response.body.type, expectedBody.type);
          assert.equal(response.body.liter, expectedBody.liter); // Error kemungkinan di sini
          assert.equal(response.body.changeD_BY, expectedBody.changeD_BY);
          assert.equal(response.body.changeD_DT, expectedBody.changeD_DT);// Error kemungkinan di sini
          //expect(response.status).to.equal(200);
          console.log('Response status is ', response.status);
          console.log('Response body are ', response.body);
    });
});



