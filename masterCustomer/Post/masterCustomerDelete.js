const request = require('supertest');
const baseUrl = require('../../env');

describe('This is Unit Test API for Deleting data', () => {
    it('This must be return response code 200 and response body that tells the data was deleted', async() => {
        const jsonString = JSON.stringify("[{\"id\": 3046}]");
        const {expect} = await import('chai');
        const response = await request(baseUrl())
        .post('/master-customer/delete')
        .set('Content-type', 'application/json')
        .send(jsonString);

        // expect response status
        expect(response.status).to.equal(200);
        console.log('Response code is ', response.status);
        console.log('Response body is ', response.body);
    });
});