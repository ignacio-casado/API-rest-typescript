import  express  from "express";
import * as gymServices from "../services/gymServices"
//routes
const router = express.Router()

router.get('/', (_req, res)=>{
    res.send(gymServices.getEntriesMissingAny())
})

router.get('/:id', (req, res)=>{
    const diary = gymServices.findById(+req.params.id)
    
    return(diary !== null)
        ? res.send(diary)
        :res.sendStatus(404)
})

router.post('/', (req, res)=>{
    try{
        const {name, age, payment, process} = req.body

        const addNewGymEntry = gymServices.postEntries({
            name,
            age,
            payment,
            process
        }
            
        )
        res.json(addNewGymEntry)
    }catch{
        res.status(400)
    }
    
})

export default router