const request = require('supertest');
const baseUrl = require('../env');


describe('This is Unit Test API for Normal Invoice', function() { // Ganti arrow function dengan function declaration
    this.timeout(25000); // Pindahkan this.timeout ke dalam function declaration

    it('This must be call ticket on invoice normal', async () => {
        const { expect } = await import('chai'); // Pindahkan import chai ke luar function
        const response = await request(baseUrl())
            .post('/normal-invoice/get-ticket')
            .set('Content-Type', 'application/json') // Perbaiki penulisan Content-Type
            .send({
                "customedId": "10436A",
                "siteId": "PPLI",
                "wasteProfile": "69901",
                "startDate": "2024-03-29T13:13:19.783Z",
                "endDate": "2024-03-29T13:13:19.784Z"
            });

        expect(response.status).to.equal(200);
        console.log('Response code is ', response.status);
        console.log('Response body are ', response.body);
    });
});
