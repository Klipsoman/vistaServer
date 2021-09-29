const express = require('express')
const cors = require('cors')
const userRouter = require('./routes/userRouter')
const app = express()
const PORT = 5000

app.use(cors())
app.use('/users', userRouter)

app.listen(PORT, ()=>{
    console.log('server star on PORT: ' + PORT)
})

