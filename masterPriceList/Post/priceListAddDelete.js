const request = require('supertest');
const baseUrl = require('../../env');

describe('Delete data Price List', () => {
  it('This must return response code 200 and response body that are expected', async () => {
      
      const jsonString = JSON.stringify("[{\"id\": 33632}]");
      const { expect } = await import('chai');
      const response = await request(baseUrl())
          .post('/pricelist/delete')
          .set('Content-Type', 'application/json')
          .send(jsonString);

      // Jika status respons bukan 200, log pesan error dan respons lengkap
      if (response.status !== 204) {
          console.error('Error status: ', response.status);
          console.error('Error message: ', response.body.errors || response.body);
      }

      // Verifikasi bahwa status adalah 200
      expect(response.status).to.equal(200);
  });
});