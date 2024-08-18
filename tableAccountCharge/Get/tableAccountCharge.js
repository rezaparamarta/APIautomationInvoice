const request = require('supertest');
const baseUrl = require('../../env');

describe('This is Unit Test API for Table Account Charge', () => {
    it('This must be return response code and Response body that expected ', async() => {
        const {expect} = await import('chai')
        const response = await request(baseUrl())
        .get('/table-account-charge')
        .set('Content-type', 'application/json')

        // expect response code and response body
        expect(response.status).to.equal(200);
        console.log('Response status is ', response.status);
        console.log('Response body are ', response.body);
    });
});