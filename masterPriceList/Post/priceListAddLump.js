const request = require('supertest');
const baseUrl = require('../../env');

describe('Add Price List Normal', () => {
    it('This must return response code 200 and response body that are expected', async () => {
        const { expect } = await import('chai');
        const response = await request(baseUrl())
            .post('/pricelist/add')
            .set('Content-type', 'application/json')
            .send({
              "type_Price": "Lump",
              "wasteType": "INFECTIOUS WASTE",
              "startDate": null,
              "endDate": null,
              "containerNo": "DRL500C",
              "unit": "KG",
              "accountId": "10010007",
              "quantity": 1,
              "client": "KOSAMBI MATERNAL & CHILDREN CENTER RAWAMANGUN (KMNC)",
              "price_Year": "2024-06-27",
              "price": 100000,
              "wasteProfile": "TESTYOK!!",
              "currency": "IDR",
              "createdBy": "REZAQA",
              "chargedBy": "DA",
              "details": [
                {
                  "wasteType": "Waste Testing",
                  "wasteProfile": "100",
                  "unit": "Kg",
                  "quantity": 1,
                  "maxWeight": 5
                },
                {
                  "wasteType": "Waste Testing",
                  "wasteProfile": "200",
                  "unit": "Kg",
                  "quantity": 10,
                  "maxWeight": 25
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