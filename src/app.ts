import express from 'express';
import routes from './routes'
require('dotenv').config();
const app = express();

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`App is running in port ${port}`)
    routes(app)
})