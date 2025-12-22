import express from 'express'
import router from './routes/router.mjs'
import cookieParser from 'cookie-parser'
import session from 'express-session'

const app = express()

//covert data to json formal
app.use(express.json())

app.use(cookieParser("{Ben} % {Ten} & {Alien} * {Force}"))

app.use(session({
    secret: '<Ben> $ <Ten> ! <Ultimate> ^ <Force>',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: 60000 * 60
    }
}))

app.use(router)

const PORT = 3000

app.get('/', (req, res) => {
    res.cookie("user", "admin", {maxAge: 60000 * 60, signed: true})
    console.log(req.session.id);
    req.sessionStore.get(req.session.id, (err, sessionData) => {
        if(err){
            console.log(err);
            
        }
        else{
            console.log(sessionData);
            
        }
    })
    res.send({ msg: "Root" })
})

app.listen(PORT, () => {
    console.log(`App is Running on PORT: ${PORT}`);
})