const request = require('supertest');
const baseUrl = require('../../env');

describe('Add Price List Normal', function () {
    // Tambahkan timeout yang lebih panjang di sini
    this.timeout(10000); // 10 detik

    it('This must return response code 200 and response body that are expected', async () => {
        const { expect } = await import('chai');
        const response = await request(baseUrl())
            .post('/pricelist/add')
            .set('Content-Type', 'application/json')
            .send({
                "type_Price": "Normal",
                "accountId": "999999C",
                "client": "PT ARTHA DJAYA GROUP",
                "price_Year": "2024-06-27",
                "startDate": "2024-06-27T02:35:17.512Z",
                "endDate": "2024-06-27T02:35:17.512Z",
                "isActive": true,
                "currency": "IDR",
                "createdBy": "SET",
                "details": [
                  {
                    "wasteProfile": "45689",
                    "wasteType": "ACID OIL",
                    "containerNo": "",
                    "unit": "Kg",
                    "chargedBy": "C",
                    "price": 1000,
                    "minWeight": null,
                    "maxWeight": null,
                    "quantity": 10
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
