const request = require('supertest');
const baseUrl = require('../../env');

describe('Unit Test API for Getting Service Cost', ()=> {
    it('It must be fetch data that get by API method', async() => {
        const {expect} = await import('chai');
        const response = await request(baseUrl())
        .get('/serviceCost')
        .set('Content-type', 'application/json')
        

        //Check response code as same as QA expected
        expect(response.status).to.equal(200);
        console.log('Response status is expected', response.status);
        console.log('Response body json are: ', response.body);
    });
});