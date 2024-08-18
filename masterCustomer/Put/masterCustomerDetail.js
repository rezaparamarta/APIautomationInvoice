const request = require('supertest');
const baseUrl = require('../../env');

describe('This is Unit Test for API master customer detail', () => {
    it('this must be return response status 200 dan response body that retrieve', async() => {
        const {expect} = await import('chai');
        const response = await request(baseUrl())
        .put('/master-customer/detail')
        .set('Content-type', 'application/json')
        .send({
            "id": 1
          });
        expect(response.status).to.equal(200);
        console.log('response status is ', response.status);
        console.log('response body are ', response.body);
    });
});