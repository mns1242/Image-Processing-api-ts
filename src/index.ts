import express from 'express'
import routes from './routes/main'
import fs from 'fs';
import path from 'path';




const app = express()

//Port Number
const _Port = 3000;

app.use('/',routes)



app.listen(_Port,()=>{
     // make sure thumb folder exists
     const thumbPath = path.resolve( '..//Image-Processing-API-Project//thumb');

     if (!fs.existsSync(thumbPath)) {
         fs.mkdirSync(thumbPath);
     }
 
    console.log(`Server Running At port: ${_Port}`)
})

export default app