const request = require('supertest');
const baseUrl = require('../../env');

describe('This is Unit Test for SAGE Invoice', () => {
    it('Generate ticket invoice from SAGE', async() => {
        const {expect} = await import('chai');
        const response = await request(baseUrl())
        .post('/')
        .set('Content-type', 'application/json')
        .send({
            
        });
        expect(response.status).to.equal(200);
        console.log('Response status is ', response.status);
        console.log('Response body are ', response.body);
    });
});