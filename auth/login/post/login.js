const request = require('supertest');
const baseUrl = require('../../../env');
//const baseToken = require('../../token');

describe('Pengujian API untuk login dan otorisasi PPLi IWS', () => {
    it('Kode respon statusnya harus 200', async() => {
        const { expect } = await import('chai');
        const response = await request(baseUrl())
        .post('/auth/login')
        .send({
            'password':'1234567',
            'userID': 'admin'
        });
        expect(response.status).to.equal(200);
        console.log('Response code is', response.status);
        expect(response.body).to.haveOwnProperty('message');
        console.log('Response body are', response.body);
    });
});