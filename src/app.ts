import createServer from "./server";
import db from './utils/db'
require('dotenv').config();
db()

const app = createServer()
const port = process.env.PORT || 3000;
app.listen(port, async ()=>{
    console.log(`App is running in port ${port}`)
})