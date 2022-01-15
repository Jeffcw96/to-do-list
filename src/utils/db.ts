import mongoose from 'mongoose'


async function connect() {
    const dbUri = process.env.mongoConnection || 'mongodb://mongo:27017/todo'
    try {
        await mongoose.connect(dbUri)
        console.log("Connected to DB")
    } catch (error) {
        console.log("ERROR",error)
        console.error("Failed Connect to DB")
        process.exit(1)
    }

}

export default connect