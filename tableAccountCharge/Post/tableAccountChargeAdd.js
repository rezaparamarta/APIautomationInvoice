const request = require('supertest');
const baseUrl = require('../../env');

describe('This is Unit Test API for Table Account Charge', () => {
    it('This must be return response code and Response body that expected for adding data', async() => {
        const {expect} = await import('chai')
        const response = await request(baseUrl())
        .post('/table-account-charge/add')
        .set('Content-type', 'application/json')
        .send({
            "acctId": "0406199218",
            "acctDesc": "TESTING",
            "accType": "I",
            "acctFmttd": "AHIWWW",
            "cntlAcct": "WW4",
            "createdBy": "Administrator"
        });

        // expect response code and response body
        expect(response.status).to.equal(200);
        console.log('Response status is ', response.status);
        console.log('Response body are ', response.body.data);
    });
});