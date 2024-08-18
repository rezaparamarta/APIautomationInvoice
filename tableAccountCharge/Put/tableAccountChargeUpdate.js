const request = require('supertest');
const baseUrl = require('../../env');

describe('This is Unit Test API for check update of Table Account Charge', () => {
    it('This must be return response status dan response body that display on detail of updated data', async() => {
        const {expect} = await import('chai');
        const response = await request(baseUrl())
        .put('/table-account-charge/update')
        .set('Content-type', 'application/json')
        .send({
            id: 63,
            acctId: '0406199218',
            acctDesc: 'Super Test',
            acctType: null,
            acctFmttd: 'AHIWWW',
            cntlAcct: 'WW4',
            changedBy: 'Reza Dong'
        });

        // Expect response status and response body
        expect(response.status).to.equal(200);
        console.log('Response status is ', response.status);
        console.log('Response body are ', response.body);
    });
});