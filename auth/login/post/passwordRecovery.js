const request = require('supertest');
const baseUrl = require('../../../env');

describe('Unit test API for Password recovery', () => {
    it('This test will Execute response status and body', async() => {
        const {expect} = await import('chai');
        const response = await request(baseUrl())
        .post('/auth/password-recovery')
        .set('Content-type', 'application/json')
        .send({
            'token':'40F479BCD6EC3E43FB51C57B391394D5C24CFD8A0212A2B1885C1027C3D9B9BF1D7965F452FEC4A75F72EE9B55C6B968490191E00FBCAD565B359097D9CC0131',
            'password': '123456777'
        });
        console.log('Response status is', response.status);
        console.log('Response body are ', response.body);
    });
});


