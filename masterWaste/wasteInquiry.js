const request = require('supertest');
const baseUrl = require('../env');

describe('This is Unit Test API for Master Waste', function() {
    it('This must be return response body that inform sending data successfully sending to application', async function() {
        this.timeout(5000); // Set timeout to 5 seconds (5000 milliseconds) for this test

        const {expect} = await import('chai');
        
        // Menambahkan delay 3 detik sebelum mengirimkan permintaan
        await new Promise(resolve => setTimeout(resolve, 3000));
        
        const response = await request(baseUrl())
            .post('/waste/inquiry')
            .set('Content-type', 'application/json')
            .send({
                "draw": 0,
                "start": 0,
                "length": 0,
                "search": "infectious waste",
                "startDate": "2024-05-30T05:47:15.618Z",
                "endDate": "2024-05-30T05:47:15.618Z"
            });
        
        expect(response.status).to.equal(200);
        console.log('Response status is ', response.status);
        console.log('Response body are ', response.body);
    });
});
