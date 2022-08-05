import express from "express"
import image from "./API/image"

const router = express.Router()


router.get('/',(req,res)=>{
    res.send("API Router")
})

router.use('/api/image',image)

export default router