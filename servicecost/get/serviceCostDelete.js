const request = require('supertest');
const baseUrl = require('../../env');


describe('This is Unit Test API for Deleting an Item on Service Cost', () => {
    it('This must return that data has been deleted', async () => {
        try {
            // Mengirim payload string JSON
            const jsonString = JSON.stringify("[{\"id\": 77}]");
            const { expect } = await import('chai');
            const response = await request(baseUrl())
                .post('/serviceCost/delete')
                .set('Content-Type', 'application/json')
                .send(jsonString);

            // Memeriksa kode status respons sesuai harapan QA
            expect(response.status).to.equal(204);
            console.log('Response status is expected', response.status);
            console.log('Response body json are:', response.body);
        } catch (error) {
            if (error.response && error.response.status === 400) {
                console.error('Bad Request: The server could not understand the request due to invalid syntax.');
                console.error('Response body:', error.response.body);
            } else {
                console.error('Error during the request:', error.message);
            }
            throw error; // Melempar ulang kesalahan untuk memastikan tes gagal
        }
    });
});
