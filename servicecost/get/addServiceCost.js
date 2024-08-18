const request = require('supertest');
const baseUrl = require('../../env');

describe('This is Unit Test for API adding Service Cost', ()=> {
    it('This must display the payload sent correctly and verify the response', async() => {
        const {expect} = await import('chai');
        const payload = {
            "nominalAccount": "999999-9-1005",
            "description": "TestInjekAPI5",
            "type": "ServiceSuddenly5",
            "cntlacct": "W02045",
            "createD_BY": "RZAP"
        };

        console.log('Payload being sent:', payload);

        // Ensure payload is correct before sending request
        expect(payload).to.have.property('nominalAccount', '999999-9-1005');
        expect(payload).to.have.property('description', 'TestInjekAPI5');
        expect(payload).to.have.property('type', 'ServiceSuddenly5');
        expect(payload).to.have.property('cntlacct', 'W02045');
        expect(payload).to.have.property('createD_BY', 'RZAP');

        const response = await request(baseUrl())
            .post('/serviceCost/add')
            .set('Content-type', 'application/json')
            .send(payload);

        // Check response code as same as QA expected
        expect(response.status).to.equal(200);
        console.log('Expected response status is 200 : actual is ', response.status);

        // Verify the response body
        console.log('Response body json are: ', response.body.payload);
    });
});
