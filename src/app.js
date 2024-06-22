import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'

const app = express()

app.use(cors({
    origin : process.env.CORS_ORIGIN,
    credentials : true
}))

app.use(express.json({limit : "16kb"}))
app.use(express.urlencoded({extended:true,limit : "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())


// questions
import questionRouter from './routes/question.route.js'
app.use("/",questionRouter)

//solve 
import solveRouter from './routes/solve.route.js'
app.use("/",solveRouter)

export default app