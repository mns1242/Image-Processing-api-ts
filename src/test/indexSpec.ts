import index from '../index'
import supertest from 'supertest';
import processing from '../processing'
const {imageExist} = processing






const reques = supertest(index)



describe("Test The App",()=>{

describe("Test The Endpoint",()=>{
    it("get The api/image endpoint",async()=> {
        const response = await reques.get('/api/image?filename=fjord&width=950&height=188');
        expect(response.status).toBe(200);
        
      },5000)

      describe('Testing our utilities functions', () => {
        it('Expecting imageExist("fjord") to be true )', () => {
          expect(imageExist('fjord')).toBe(true)
        })
      })
})




})