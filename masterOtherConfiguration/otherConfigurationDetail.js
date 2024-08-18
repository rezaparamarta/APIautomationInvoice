const request = require('supertest');
const baseUrl = require('../env');

describe('This is unit test for API other configuration Save', () => {
    it('This must be return response status dan response body that are expected', async() => {
        const { expect } = await import('chai');
        const response = await request(baseUrl())
        .put('/othersConfiguration/detail')
        .set('Content-type', 'application/json')
        .send({
            "type": "PPN",
            "systeM_TYPE": "VAT"
          });
          expect(response.status).to.equal(200);
          console.log('Response status is', response.status);
          console.log('Response body are', response.body);
  
          const data = response.body;
          if (data.length > 0) {
              console.log('Data array:');
              data.forEach((item, index) => {
                  console.log(`Item ${index + 1}:`, item);
              });
          } else {
              console.log('Data array is empty');
          }
          console.log('length', data.length);
    });
});