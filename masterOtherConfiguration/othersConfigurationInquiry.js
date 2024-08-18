/*const request = require('supertest');
const baseUrl = require('../env');

describe('This is Unit Test API for Other Configuration Inquiry', () => {
    it('It must be return expected response code and response body', async() => {
        const {expect} = await import('chai');
        const response = await request(baseUrl())
        .post('/othersConfiguration/inquiry')
        .set('Content-type', 'application/json')
        .send({
            "draw": 0,
            "start": 0,
            "length": 0,
            "search": "WHT",
            "startDate": "2024-05-31T15:05:21.230Z",
            "endDate": "2024-05-31T15:05:21.230Z"
          })
        expect(response.status).to.equal(200);
        console.log('Response status is ', response.status);
        console.log('Response body are ', response.body);
    });
});*/
const request = require('supertest');
const baseUrl = require('../env');

describe('This is Unit Test API for Other Configuration Inquiry', () => {
    it('It must return expected response code and response body', async() => {
        const {expect} = await import('chai');
        const response = await request(baseUrl())
        .post('/othersConfiguration/inquiry')
        .set('Content-type', 'application/json')
        .send({
            "draw": 0,
            "start": 0,
            "length": 10,
            "search": "",
            "startDate": null,
            "endDate": null
        });

        expect(response.status).to.equal(200);
        console.log('Response status is', response.status);
        console.log('Response body are', response.body);

        const data = response.body.data;
        if (data.length > 0) {
            console.log('Data array:');
            data.forEach((item, index) => {
                console.log(`Item ${index + 1}:`, item);
            });
        } else {
            console.log('Data array is empty');
        }
    });
});
