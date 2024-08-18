const request = require('supertest');
const baseUrl = require('../../env');

describe('This is Unit Test API for Update Service Cost', () => {
    it('This API call must return data that has been updated successfuly', async() => {
        const { expect } = await import('chai');
        const response = await request(baseUrl())
        .put('/serviceCost/update')
        .set('Content-type', 'application/json')
        .send({
            "id": 1,
            "type": "string",
            "changeD_BY": "string"
          })
        //Check response code as same as QA expected
        expect(response.status).to.equal(200) // (204);
        console.log('Response status is expected', response.status);
        console.log('Response body json are: ', response.body);
    });
});