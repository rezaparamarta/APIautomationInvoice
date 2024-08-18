const request = require('supertest');
const baseUrl = require('../../env');

describe('Add Price List LOAD', () => {
    it('This must return response code 200 and response body that are expected', async () => {
        const { expect } = await import('chai');
        const response = await request(baseUrl())
            .post('/pricelist/add')
            .set('Content-type', 'application/json')
            .send({
                "type_Price": "Load",
                "accountId": "999999A",
                "client": "SAYAP PERUNGGU UTAMA",
                "price_Year": "2024-06-27",
                "startDate": null,
                "endDate": null,
                "isActive": true,
                "currency": "IDR",
                "createdBy": "QAEngineer",
                "details": [
                    {
                        "wasteProfile": "QA123457",
                        "wasteType": "GREENGLUE",
                        "containerNo": null,
                        "unit": "KG",
                        "chargedBy": "ASM",
                        "price": 100000,
                        "minWeight": 10,
                        "maxWeight": null,
                        "quantity": 2
                    }
                ]
            });

        expect(response.status).to.equal(200);
        console.log('Response code is ', response.status);
        console.log('Response body are ', response.body);

        // Akses array details dan tampilkan isinya
        const details = response.body.data[0].details;
        console.log('Details: ', details);

        // Jika ingin memverifikasi isi dari details
        details.forEach(detail => {
        console.log(`Waste Profile: ${detail.wasteProfile}, Price: ${detail.price}`);
        });
    });
});