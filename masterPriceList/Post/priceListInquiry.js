const request = require('supertest');
const baseUrl = require('../../env');

describe('Price List Inquiry', () => {
    it('This must return response code 200 and response body that are expected', async () => {
        const { expect } = await import('chai');
        const response = await request(baseUrl())
            .post('/pricelist/inquiry')
            .set('Content-type', 'application/json')
            .send({
              "draw": 0,
              "start": 1,
              "length": 20,
              "search": "",
              "startDate": null,
              "endDate": null
            });

            if (response.status !== 200) {
              console.error('Error message: ', response.body.errors);
        }    
        expect(response.status).to.equal(200);
        console.log('Response code is ', response.status);
        console.log('Response body are ', response.body);

        // Verifikasi bahwa status adalah 200
        expect(response.status).to.equal(200);

        // Akses array details dan tampilkan isinya
        const details = response.body.data[0].details;
        console.log('Details: ', details);

        // Jika ingin memverifikasi isi dari details
        details.forEach(detail => {
        console.log(`Waste Profile: ${detail.wasteProfile}, Price: ${detail.price}`);
        });
    });
});