const request = require('supertest');
const baseUrl = require('../../env');

describe('This is Unit Test for API Table Container Convertion delete data', () => {
    it('This must be return response code and response body ', async() => {
        const jsonString = JSON.stringify("[{\"id\": 2135}]");
        const {expect} = await import('chai');
        const response = await request(baseUrl())
        .post('/table-container-convertion/delete')
        .set('Content-type', 'application/json')
        .send(jsonString);
          expect(response.status).to.equal(200);
          console.log('Response status is ', response.status);
          console.log('Response body are ', response.body);
    });
});