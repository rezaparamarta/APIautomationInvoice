const request = require('supertest');
const baseUrl = require('../env');

describe('This is Unit Test for API Waste to Update data', () => {
    it('This must be return updated data after the method is call', async() => {
        const { expect } = await import('chai');
        const response = await request(baseUrl())
        .put('/waste/update')
        .set('Content-type', 'application/json')
        .send({
            "id": 46195,
            "clientID": "10101",
            "projectName": "INFECTIOUS VENOM",
            "projectNo": "00070-007",
            "status": "Active",
            "classNo": "string",
            "ratingCode": "11.9.10",
            "bapNo": "A007-1",
            "siteCode": "0000000007",
            "wasteProfile": "61961",
            "salesCode": "2122",
            "treatmentCode": "21.2",
            "expDate": "Apr 4 2024 02:00PM",
            "paExpDate": "2024-05-30T08:12:57.532Z",
            "active": true,
            "holdWps": true,
            "changeD_BY": "string",
            "changeD_DT": "2024-05-30T08:12:57.532Z",
            "updateUser": "string"
          });
          expect(response.status).to.equal(200);
          console.log('Response status is ', response.status);
          console.log('Response body are ', response.body);
    });
});