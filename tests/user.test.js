const request = require('supertest')
const app = require('../src/app')

test('should sihnup a new user', async () => {
    await request(app).post('/users').send({
        name:'mahsun',
        email: 'testemail@gmail.com',
        password: 'testpassword'
    }).expect(201)
})