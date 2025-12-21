import express from 'express'
import { createUserValidationSchema } from '../Scripts/utils/validationSchemas.mjs'
import { validationResult, matchData, checkSchema } from 'express-validator'

const app = express()

const PORT = 3000

//Users
const users = [
    {
        id: 1,
        user_name: 'Mohammed Shafeek. A'
    },
    {
        id: 2,
        user_name: 'Malavika. G'
    },
    {
        id: 3,
        user_name: 'Sivaponnuvel .S'
    },
]

//Products
const products = [
    {
        id: 1,
        product_name: 'Samsung Galexy A35'
    },
    {
        id: 2,
        product_name: 'Samsung Galexy S23 Ultra'
    },
    {
        id: 3,
        product_name: 'Samsung Galexy Flip'
    },
]

const getUserIndexByID = (req, res, next) => {
    const id = parseInt(req.params.id)
    if (isNaN(id)) {
        return res.status(400).send({ msg: "Bad Request. Invalid ID" })
    }
    const userIndex = users.findIndex((user) =>
        (user.id === id)
    )
    if (userIndex === -1) {
        return res.status(404).send({ msg: "User Not Found" })
    }
    req.userIndex = userIndex
    next()
}

const getParamsId = (req, res, next) =>{
    const id = parseInt(req.params.id)
    if (isNaN(id)) {
        return res.status(400).send({ msg: "Bad Request. Invalid ID" })
    }
    req.id = id
    next()
}

app.get('/', (req, res) => {
    res.send({ msg: "Root" })
})

// Query Params
//users
app.get('/api/users', (req, res) => {
    const {query:{filter, value}} = req
    if(filter && value){
        return res.send(users.filter(((user)=>user[filter].toLowerCase().includes(value.toLowerCase()))))
    }
    res.send(users)
})

//products
app.get('/api/products', (req, res) => {
    const {query:{filter, value}} = req
    if(filter && value){
        return res.send(products.filter(((product)=>product[filter].toLowerCase().includes(value.toLowerCase()))))
    }
    res.send({msg: 'Product Not Found'})
})

// Route Params
//users endpoint
app.get('/api/users/:id', getParamsId, (req, res) => {
    const {id} = req
    const user = users.find((user) =>
        (user.id === id)
    )
    if (user) {
        return res.send(user)
    }
    return res.status(404).send({ msg: "User Not Found" })
})

//product endpoint
app.get('/api/products/:id', getParamsId, (req, res) => {
    const {id} = req
    const product = products.find((product) =>
        (product.id === id)
    )
    if (product) {
        return res.send(product)
    }
    return res.status(404).send({ msg: "User Not Found" })
})

//covert data to json formal
app.use(express.json())

// Insert new user using POST request
app.post('/api/users', checkSchema(createUserValidationSchema), (req, res)=>{
    const result = validationResult(req)

    if(!result.isEmpty()){
        return res.status(400).send({error: result.array()})
    }

    const body = matchData(req)
    const newUser = {id: users[users.length-1].id+1, ...body}
    users.push(newUser)
    res.status(201).send(newUser)
})

//Update User using PUT Request
app.put('/api/users/:id', getUserIndexByID, (req, res)=>{
    const {userIndex, body} = req
    users[userIndex] = {id: id, ...body}
    return res.status(200).send({msg: "User Upated"})
})

//Update User using PATCH Request
app.patch('/api/users/:id', getUserIndexByID, (req, res)=>{
    const {userIndex, body} = req
    users[userIndex] = {...users[userIndex], ...body}
    return res.status(200).send({msg: "User Upated"})
})

//Delete User using DELETE Request
app.delete('/api/users/:id', getUserIndexByID, (req, res)=>{
    const {userIndex} = req
    users.splice(userIndex, 1)
    return res.status(200).send({msg: "User Deleted"})
})

app.listen(PORT, () => {
    console.log(`App is Running on PORT: ${PORT}`);
})