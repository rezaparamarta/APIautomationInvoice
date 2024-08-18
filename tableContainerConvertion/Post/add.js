const request = require('supertest');
const baseUrl = require('../../env');

describe('This is Unit Test for API Table Container Convertion Inquiry', () => {
    it('This must be return response code and response body ', async() => {
        const {expect} = await import('chai');
        const response = await request(baseUrl())
        .post('/table-container-convertion/add')
        .set('Content-type', 'application/json')
        .send({
            "conType": "2030",
            "conDesc": "Batman VS Superman",
            "size": 20,
            "tareWeight": 2000,
            "quantity": 15,
            "type": "C",
            "liter": 500,
            "createD_BY": "Hamish Daud",
            "createD_DT": "2024-06-04T09:28:06.237Z"
          });
          expect(response.status).to.equal(200);
          console.log('Response status is ', response.status);
          console.log('Response body are ', response.body);
    });
});