import request from 'supertest'
import createServer from '../server'
import {MongoMemoryServer} from 'mongodb-memory-server'
import mongoose, { mongo } from 'mongoose'
import { RecordNotFoundException } from '@/config/exception/common'
const app = createServer()

interface ResObject{
    [k :string]: any
}
let created:ResObject = {} 
describe('author', ()=>{
    beforeAll(async()=>{
        const mongoServer = await MongoMemoryServer.create()
        await mongoose.connect(mongoServer.getUri())
    })
    afterAll(async()=>{
        await mongoose.disconnect()
        await mongoose.connection.close()
    })

    describe('Create Author', ()=>{
        it('it should return 200 when record is created', async()=>{
            const res = await request(app).post('/api/author').send({name:"Wohoo Baby", age:19, country:"Thailand"})
            created = res.body
            expect(res.statusCode).toEqual(200)
        })
    })

    describe('Get Author', ()=>{
        it('it should return 404 when record is not found', async()=>{
            const invalidId = '1231asda123'
            const res = await request(app).get(`/api/author/${invalidId}`)
            expect(res.statusCode).toEqual(404)
        })
        it('it should return COMMON_ERROR_004 when record is not found', async()=>{
            const invalidId = '1231asda123'
            const res = await request(app).get(`/api/author/${invalidId}`)
            const errorMessage = new RecordNotFoundException()
            expect(res.body.errorCode).toEqual(errorMessage.errorCode)
        })
        it('it should return 200 when record is found', async()=>{            
            const res = await request(app).get(`/api/author/${created.ref_id}`)
            expect(res.statusCode).toEqual(200)
        })
    })
})