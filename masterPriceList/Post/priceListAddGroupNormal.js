const request = require('supertest');
const baseUrl = require('../../env');

describe('Add Price List Normal', () => {
    it('This must return response code 200 and response body that are expected', async () => {
        const { expect } = await import('chai');
        const response = await request(baseUrl())
            .post('/pricelist/add')
            .set('Content-type', 'application/json')
            .send({
              "type_Price": "Group Normal",
              "accountId": "151516171821",
              "client": "REZA BOS",
              "price_Year": "2024-07-01",
              "startDate": null,
              "endDate": null,
              "isActive": true,
              "currency": "IDR",
              "createdBy": "REZAQA",
              "details": [
                {
                  "wasteProfile": "10003",
                  "wasteType": "QATESTlagi",
                  "containerNo": "QATESTlagi",
                  "unit": "Liter",
                  "chargedBy": "DA",
                  "price": 10000,
                  "minWeight": 5,
                  "maxWeight": 10,
                  "quantity": 5
                }
              ]
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