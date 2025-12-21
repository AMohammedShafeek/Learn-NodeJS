import express from 'express'
import router from './routes/router.mjs'
import cookieParser from 'cookie-parser'

const app = express()

//covert data to json formal
app.use(express.json())

app.use(cookieParser())

app.use(router)

const PORT = 3000

app.get('/', (req, res) => {
    res.cookie("user", "admin", {maxAge: 60000 * 60})
    res.send({ msg: "Root" })
})

app.listen(PORT, () => {
    console.log(`App is Running on PORT: ${PORT}`);
})