import express from 'express'
import router from './routes/router.mjs'

const app = express()

//covert data to json formal
app.use(express.json())

app.use(router)

const PORT = 3000

app.get('/', (req, res) => {
    res.send({ msg: "Root" })
})

app.listen(PORT, () => {
    console.log(`App is Running on PORT: ${PORT}`);
})