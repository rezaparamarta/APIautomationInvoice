const request = require('supertest');
const baseUrl = require('../../env');

describe('This is unit test API for add customer', () => {
    it('This must be return response code and display response body', async() => {
        const {expect} = await import('chai');
        const response = await request(baseUrl())
        .post('/master-customer/add')
        .set('Content-type', 'application/json')
        .send({
            "clientId": "20242023",
            "accountId": "TestingAPI",
            "compName": "string",
            "adress": "string",
            "adressA": "string",
            "adressB": "string",
            "adressC": "string",
            "city": "string",
            "zip": "string",
            "fullName": "string",
            "primaryPhone": "string",
            "primaryFax": "string",
            "custType": "string",
            "weightClinet": "string",
            "inDirect": "string",
            "isActive": true,
            "invSchedule": "string",
            "flagTransport": true,
            "createdDate": "2024-06-20T02:53:03.088Z",
            "updatedDate": "2024-06-20T02:53:03.088Z",
            "createdBy": "string",
            "changedBy": "string",
            "customerHold": true,
            "billTo": 0,
            "bilLRateUSD": true,
            "vatLevel": "string",
            "generatedBy": true,
            "group_Id": 0
          })
          expect(response.status).to.equal(200);
          console.log('Response status is ', response.status);
          console.log('Response body are ', response.body);
    });
});