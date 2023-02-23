import express from 'express'
import gymDiary from './routes/gymEnter'

const app = express()
app.use(express.json())

const PORT = process.env.PORT || 8080

app.use('/api/diaries', gymDiary)

app.get('/', (_req, res)=>{
    console.log('new enter')
    res.send('Hola mundo')
})
app.listen(PORT, ()=>{
    console.log(`Server Up on port ${PORT}`)
})