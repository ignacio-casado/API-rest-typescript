import  express  from "express";

const router = express.Router()

router.get('/', (_req, res)=>{
    res.send('All entrys')
})

router.post('/', (_req, res)=>{
    res.send('New entry')
})

export default router