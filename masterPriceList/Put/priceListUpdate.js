const request = require('supertest');
const baseUrl = require('../../env');


describe('This is Unit Test API for Update Price List', () => {
    it('it must be return response code 200 and response body that expected', async () => {
        const { expect } = await import('chai');
        const response = await request(baseUrl())
        .put('/pricelist/update')
        .set('Content-type', 'application/json')
        .send({
            "id": 33674,
            "type_Price": "range",
            "client": "TEST ABDUL",
            "startDate": "2024-07-01T06:40:40.761Z",
            "endDate": "2024-07-01T06:40:40.761Z",
            "accountId": "1459876",
            "currency": "IDR",
            "createdBy": "C",
            "details": [
              {
                "id": 33697,
                "pricelistId": 33674,
                "wasteProfile": "GOCHART",
                "wasteType": "GOCHART",
                "containerNo": "DR500L",
                "unit": "CAN",
                "chargedBy": "TESTYOK!",
                "price": 120000,
                "minWeight": 1,
                "maxWeight": 5,
                "quantity": 2,
                "changed_Dt": "2024-07-01T06:40:40.761Z"
              },
              {
                "id": 33696,
                "pricelistId": 33674,
                "wasteProfile": "GOCHART",
                "wasteType": "GOCHART",
                "containerNo": "DR500L",
                "unit": "CAN",
                "chargedBy": "TESTYOK!",
                "price": 120000,
                "minWeight": 1,
                "maxWeight": 5,
                "quantity": 2,
                "changed_Dt": "2024-07-01T06:40:40.761Z"
              }
            ]
          });
          expect (response.status).to.equal(200);
          console.log('Response code is ', response.status);
          console.log('Response body are ', response.body);
    })
})