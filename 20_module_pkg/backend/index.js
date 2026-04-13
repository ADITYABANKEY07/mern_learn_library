import dotenv from "dotenv"
dotenv.config()
import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import userRoute from "./route/userRoute.js"   // ⚠️ extension required

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use("/user", userRoute)

// DB connection with error handling
mongoose.connect(process.env.MONGO_URL)
.then(() => {
    console.log("DB connected successfully!!!")
})
.catch((err) => {
    console.log("DB ERROR:", err)
})

app.listen(process.env.PORT || 5000, () => {
    console.log(`Server running on port ${process.env.PORT}`)
})