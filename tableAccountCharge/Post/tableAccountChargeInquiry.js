const request = require('supertest');
const baseUrl = require('../../env');

describe('This is Unit Test API for Table Account Charge', () => {
    it('This must be return response code and Response body that expected for check inquiry', async() => {
        const {expect} = await import('chai')
        const response = await request(baseUrl())
        .post('/table-account-charge/inquiry')
        .set('Content-type', 'application/json')
        .send({
            "draw": 0,
            "start": 0,
            "length": 3,
            "search": "Kartiks Incomes",
            "startDate": null,
            "endDate": null
          });

        // expect response code and response body
        expect(response.status).to.equal(200);
        console.log('Response status is ', response.status);
        console.log('Response body are ', response.body);
    });
});