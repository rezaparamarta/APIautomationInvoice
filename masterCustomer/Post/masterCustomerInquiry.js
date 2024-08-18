const request = require('supertest');
const baseUrl = require('../../env');

describe('This is Unit Test API for Master Customer Inquiry', () => {
    it('This must be return filter inquiry with response code and response body', async() => {
        const {expect} = await import('chai');
        const response = await request(baseUrl())
        .post('/master-customer/inquiry')
        .set('Content-type', 'application/json')
        .send({
            "draw": 0,
            "start": 0,
            "length": 100,
            "search": "",
            "startDate": null,
            "endDate": null
          });
          expect(response.status).to.equal(200);
          console.log('Response status is ', response.status);
          console.log('response body are ', response.body);
    });
});