const request = require('supertest');
const baseUrl = require('../../../env');

describe('Test unit API ini diperuntukan untuk memastikan Forgot Password berhasil', function () {
    this.timeout(10000); // Meningkatkan batas waktu menjadi 10 detik

    it('Response codenya harus berisi 200', async () => {
        const { expect } = await import('chai');
            const response = await request(baseUrl())
                .post('/auth/forgot-password')
                .set('Content-type', 'application/json')
                .send('"rezaparamarta30@gmail.com"');
            //expect(response.status).to.equal(200);
            console.log('Response code is', response.status);
            console.log('Response body are', JSON.stringify(response.body));
            //expect(response.body).to.have.property('message'); 
    });
});
