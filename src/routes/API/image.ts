import express from 'express'
import path from 'path'
import fs from 'fs'
import processing from '../../processing'
const {resizeImage} = processing


const image = express.Router()






image.get('/', (req: express.Request, res: express.Response) => {

    //get Filename , width , height from Url by using req.query 
    const filename: any = req.query.filename
    const width = Number(req.query.width)
    const height = Number(req.query.height)

    //display the image after processed to theuser 
    const Display_Image = `${path.resolve('./')}/thumb/${filename}+${width}X${height}output.jpg`

    //Name of the files  
    const Image_name_array: string[] = ['encenadaport', 'fjord', 'icelandwaterfall', 'santamonica', 'palmtunnel']

    // Check for valid width and height value
    if (width < 1 || Number.isNaN(width)) {
        res.send('width is invalid')

    }
    if (height < 1 || Number.isNaN(height)) {
        res.send('height is invalid')
    }
    //check file name
    if (filename === null) {
        res.send(Error)
    }
    else if (!Image_name_array.includes(filename)) {
        res.send(`no file with this name ${filename}`)

    }

    else {

        //if statment to check if the file exsist or not 
        if (fs.existsSync(`thumb/${filename}+${width}X${height}output.jpg`)) {
            res.send(`This file exists with this name ${Display_Image} `)

        }

        else {

            resizeImage(filename, width, height)
                .then(() => {
                    res.sendFile(`${Display_Image}`)
                })
                .catch((err) => {
                    console.log(err)
                })



        }








    }



})
export default image

