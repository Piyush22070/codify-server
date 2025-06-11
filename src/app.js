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
import questionRouter from './routes/questions.route.js'
app.use("/",questionRouter)

//solve 
import submissionRouter from './routes/submission.route.js'
app.use("/",submissionRouter)

// register user Router 
import userRouter from './routes/user.route.js'
app.use("/",userRouter)

import singleQuestionRouter from './routes/singleQuestion.route.js'
app.use("/question/",singleQuestionRouter)

import resultRouter from './routes/result.route.js'
app.use('/result',resultRouter)


export default app