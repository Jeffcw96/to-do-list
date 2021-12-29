import request from 'supertest'
import createServer from '../server'
import {MongoMemoryServer} from 'mongodb-memory-server'
import mongoose from 'mongoose'
const app = createServer()

describe('author', ()=>{
    beforeAll(async()=>{
        const mongoServer = await MongoMemoryServer.create()
        await mongoose.connect(mongoServer.getUri())
    })
    afterAll(async()=>{
        await mongoose.disconnect()
        await mongoose.connection.close()
    })
    it('it should return 200 when record is created', async()=>{
        const res = await request(app).post('/api/author').send({name:"Wohoo Baby", age:19, country:"Thailand"})
        expect(res.statusCode).toEqual(200)
    })
})