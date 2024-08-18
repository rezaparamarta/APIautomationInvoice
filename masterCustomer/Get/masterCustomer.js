const request = require('supertest');
const baseUrl = require('../../env');

describe('This is unit test API for check master customer Get Method', () => {
    it('This must be return 200 and display data', async() => {
        const { expect } = await import('chai');
        const response = await request(baseUrl())
        .get('/master-customer')
        .set('Content-type', 'application/json')
        
        //expect response code dan return response body
        expect(response.status).to.equal(200);
        console.log('Response status is ', response.status);
        console.log('Response body are ', response.body);
    });
});