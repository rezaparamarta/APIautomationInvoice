const request = require('supertest');
const baseUrl = require('../../env');

describe('Add Price Range', () => {
    it('This must return response code 200 and response body that are expected', async () => {
        const { expect } = await import('chai');
        const response = await request(baseUrl())
            .post('/pricelist/add')
            .set('Content-type', 'application/json')
            .send({
                "type_Price": "Range",
                "accountId": "999999B",
                "client": "SAYAP COKLAT UTAMA",
                "price_Year": "2024-07-27",
                "startDate": null,
                "endDate": null,
                "isActive": true,
                "currency": "IDR",
                "createdBy": "SoftEngineerinTest",
                "details": [
                  
              {
                    "id": 0,
                    "pricelistId": 33694,
                    "wasteProfile": "SET22",
                    "wasteType": "VENOM ACID",
                    "containerNo": null,
                    "unit": "KG",
                    "chargedBy": "C",
                    "price": 13500,
                    "minWeight": 2,
                    "maxWeight": 10,
                    "quantity": 5
                  },
              {
                    "id": 0,
                    "pricelistId": 33695,
                    "wasteProfile": "SET23",
                    "wasteType": "CARNAGE ACID",
                    "containerNo": "2",
                    "unit": "KG",
                    "chargedBy": "DA",
                    "price": 42000,
                    "minWeight": 1,
                    "maxWeight": 22,
                    "quantity": 3
                  },
              {
                    "id": 0,
                    "pricelistId": 33646,
                    "wasteProfile": "SET22",
                    "wasteType": "SPIDER ACID",
                    "containerNo": null,
                    "unit": "Kg",
                    "chargedBy": "C",
                    "price": 2000,
                    "minWeight": 1,
                    "maxWeight": 5,
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