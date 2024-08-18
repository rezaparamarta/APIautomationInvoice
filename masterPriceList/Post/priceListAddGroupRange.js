const request = require('supertest');
const baseUrl = require('../../env');

describe('Add Price List Normal', () => {
    it('This must return response code 200 and response body that are expected', async () => {
        const { expect } = await import('chai');
        const response = await request(baseUrl())
            .post('/pricelist/add')
            .set('Content-type', 'application/json')
            .send({
              "type_Price": "Group Range",
              "accountId": "909080807062",
              "client": "PT SET",
              "price_Year": "2024-06-27",
              "startDate": null,
              "endDate": null,
              "isActive": true,
              "currency": "IDR",
              "createdBy": "Person",
              "details": [
                
            {

                  "wasteProfile": "ANDROID16",
                  "wasteType": "ANDROID",
                  "containerNo": "2",
                  "unit": "L",
                  "chargedBy": "DA",
                  "price": 1000000,
                  "minWeight": 1,
                  "maxWeight": 5,
                  "quantity": null
                },
            {

                  "wasteProfile": "ANDRIOD17",
                  "wasteType": "ANDRIOD",
                  "containerNo": "2",
                  "unit": "C",
                  "chargedBy": "DA",
                  "price": 200000,
                  "minWeight": 1,
                  "maxWeight": 5,
                  "quantity": null
                },
                {

                  "wasteProfile": "ANDROID18",
                  "wasteType": "ANDROID",
                  "containerNo": "2",
                  "unit": "L",
                  "chargedBy": "DA",
                  "price": 1500000,
                  "minWeight": 1,
                  "maxWeight": 5,
                  "quantity": null
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