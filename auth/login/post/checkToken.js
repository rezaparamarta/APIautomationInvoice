const request = require('supertest');
const baseUrl = require('../../../env');

describe('This is Unit Test for Check Token', () => {
    it('Token tersedia', async() => {
        const {expect} = await import('chai');
        const response = await request(baseUrl())
        .post('/auth/check-token')
        .set('Content-type', 'application/json')
        .send('"40F479BCD6EC3E43FB51C57B391394D5C24CFD8A0212A2B1885C1027C3D9B9BF1D7965F452FEC4A75F72EE9B55C6B968490191E00FBCAD565B359097D9CC0131"');
        expect(response.status).to.equal(200);
        console.log('Response code is', response.status);
        //expect(response.body).to.haveOwnProperty('message');
        console.log('Response body are', response.body);
    });
});