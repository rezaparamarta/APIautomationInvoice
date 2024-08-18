const request = require('supertest');
const baseUrl = require('../../env');

describe('This is Unit Test for API Table Container Convertion Inquiry', () => {
    it('This must be return response code and response body ', async() => {
        const {expect} = await import('chai');
        const response = await request(baseUrl())
        .post('/table-container-convertion/inquiry')
        .set('Content-type', 'application/json')
        .send({
            "draw": 0,
            "start": 0,
            "length": 10,
            "search": "",
            "startDate": null,
            "endDate": null
          });
          expect(response.status).to.equal(200);
          console.log('Response status is ', response.status);
          console.log('Response body are ', response.body);
    });
});