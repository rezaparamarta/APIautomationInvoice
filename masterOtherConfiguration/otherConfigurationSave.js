const request = require('supertest');
const baseUrl = require('../env');

describe('This is unit test for API other configuration Save', () => {
    it('This must be return response status dan response body that are expected', async() => {
        const { expect } = await import('chai');
        const response = await request(baseUrl())
        .post('/othersConfiguration/save')
        .set('Content-type', 'application/json')
        .send({
            "Type": "INVOICE",
            "Json_data": "[{\"Value\": 160, \"Status\": 1, \"IsUsed\": 0}, {\"Value\": 161, \"Status\": 1, \"IsUsed\": 0}]",
            "Username": "arkamaya.yesica"
          });
        expect(response.status).to.equal(200);
        console.log('response status is ', response.status);
        console.log('Response body are ', response.body);
    });
});