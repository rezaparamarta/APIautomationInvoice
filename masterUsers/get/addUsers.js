const request = require('supertest');
const baseUrl = require('../../env');

describe('This is Unit Test for API adding User', ()=> {
    it('This must display the payload sent correctly and verify the response', async() => {
        const {expect} = await import('chai');
        const payload = {
            
                "userID": "Harari",
                "userName": "Yuval Noah Harari",
                "password": "QA1234567",
                "email": "rparamarta7@gmail.com",
                "userGroup": "Buat Testing",
                "active": true,
                "online": true,
                "createUser": "QAEngineer"
              
        };

        console.log('Payload being sent:', payload);

        const response = await request(baseUrl())
            .post('/users/add')
            .set('Content-type', 'application/json')
            .send(payload);

        // Check response code as same as QA expected
        expect(response.status).to.equal(200);
        console.log('Expected response status is ', response.status);

        // Verify the response body
        console.log('Response body json are: ', response.body);
    });
});
