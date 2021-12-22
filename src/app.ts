import express from 'express';
import routes from './routes'
import db from './utils/db'
import 'module-alias/register';
require('dotenv').config();
const app = express();
app.use(express.json())
const port = process.env.PORT || 3000;
routes(app)
db()

app.listen(port, async ()=>{
    console.log(`App is running in port ${port}`)
})