const request = require('supertest');
const baseUrl= require('../../env');

describe('This is Unit Test for API Service Cost Inquiry', () => {
    it('This must be return Service Cost Inquiry', async() => {
        const { expect } = await import('chai');
        const response = await request(baseUrl())
        .post('/serviceCost/inquiry')
        .set('Content-type', 'application/json')
        .send({
            "draw": 0,
            "start": 0,
            "length": 0,
            "search": "string",
            "startDate": "2024-05-30T03:07:01.030Z",
            "endDate": "2024-05-30T03:07:01.030Z"
          })
          //Check response code as same as QA expected
          expect(response.status).to.equal(200);
          console.log('Response status is expected', response.status);
          console.log('Response body json are: ', response.body);
    });
});