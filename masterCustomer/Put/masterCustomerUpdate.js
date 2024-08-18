const request = require('supertest');
const baseUrl = require('../../env');

describe('This is Unit Test API for Update Master Customer data', () => {
    it('This must be return response code that expected and return some response body ', async() => {
        const {expect} = await import('chai');
        const response = await request(baseUrl())
        .put('/master-customer/update')
        .set('Content-type', 'application/json')
        .send({
            "id": 3048,
            "clientId": "500",
            "accountId": "Ujung Berung",
            "compName": "Jl.Cijambe\nHouse",
            "adress": "Jl.Cijambe\nHouse",
            "adressA": "Jl.Cijambe\nHouse",
            "adressB": "Jl.Cijambe\nHouse",
            "adressC": "Jl.Cijambe\nHouse",
            "city": "Bandung",
            "zip": "60166",
            "fullName": "Raisa Adriana",
            "primaryPhone": "081311437259",
            "primaryFax": "414432",
            "custType": "Cust",
            "weightClinet": "12",
            "inDirect": "Y",
            "isActive": true,
            "invSchedule": "Daily",
            "flagTransport": true,
            "createdDate": "2024-06-03T08:36:08.813Z",
            "updatedDate": "2024-06-03T08:36:08.813Z",
            "createdBy": "reza",
            "changedBy": "reza",
            "customerHold": true,
            "billTo": "Jalan hijau",
            "bilLRateUSD": true,
            "vatLevel": "global",
            "generatedBy": true
          });
          expect(response.status).to.equal(200);
          console.log('Response status is ', response.status);
          console.log('Response body are ', response.body);
    });
});