const request = require('supertest');
const baseUrl = require('../../env');

describe('This is unit test for API to get users', () => {
    it('All users returned', async() => {
        const {expect} = await import('chai');
        const response = await request(baseUrl())
        .get('/users')
        .set('Content-Type', 'application-json')

        expect(response.status).to.equal(200);
        console.log('Response code is ', response.status);
        console.log('Response body are ', response.body);
    });
});