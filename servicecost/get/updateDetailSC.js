const request = require('supertest');
const baseUrl = require('../../env');

describe('This is Unit Test API for Update Service Cost Detail', () => {
    it('This must be return that data updated successfully', async() => {
        const { expect } = await import('chai')
        const response = await request(baseUrl())
        .put('/serviceCost/detail')
        .set('Content-type', 'application/json')
        .send({
            "id": 1
          })
        //Check response code as same as QA expected
        expect(response.status).to.equal(200) // (204);
        console.log('Response status is expected', response.status);
        console.log('Response body json are: ', response.body);
    });
});