const request = require('supertest');
const baseUrl = require('../env');

describe('This is Unit Test API for update detail Waste', () => {
    it('This must be return update detail information of waste', async() => {
        //const jsonString = JSON.stringify("[{\"id\": 0}]");
        const { expect } = await import('chai');
        const response = await request(baseUrl())
        .put('/waste/detail')
        .set('Content-type', 'application/json')
        .send({
            "id": 46195
        });
        expect(response.status).to.equal(200);
        console.log('Response status is ', response.status);
        console.log('Response body are ', response.body);
    });
});