const express = require('express')
const autoRouter = require('./routes/auth')
const postRoutes = require('./routes/posts')
const app = express()
const dotenv = require('dotenv').config()
const connectionDB =require('./model/connectionDB')
connectionDB()
app.use(express.json())
app.use('/api/user',autoRouter)
app.use('/api/posts',postRoutes)

app.listen(process.env.PORT,()=>{
    console.log(`server is running ${process.env.PORT}`);
})