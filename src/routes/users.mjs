import { Router } from "express";
import { getParamsId, getUserIndexByID } from '../utils/middlewares.mjs'
import { users } from "../utils/dataConsts.mjs";
import { createUserValidationSchema } from '../utils/validationSchemas.mjs'
import { validationResult, matchedData, checkSchema } from 'express-validator'

const router = Router()

router.get('/api/users', (req, res) => {

    console.log(req.cookies);
    if (req.cookies.user && req.cookies.user === "admin") {
        const { query: { filter, value } } = req
        if (filter && value) {
            return res.send(users.filter(((user) => user[filter].toLowerCase().includes(value.toLowerCase()))))
        }
        return res.send(users)
    }
    else{
        res.send({msg: "You don't have a Access"})
    }
})

// Route Params
//users endpoint
router.get('/api/users/:id', getParamsId, (req, res) => {
    const { id } = req
    const user = users.find((user) =>
        (user.id === id)
    )
    if (user) {
        return res.send(user)
    }
    return res.status(404).send({ msg: "User Not Found" })
})

// Insert new user using POST request
router.post('/api/users', checkSchema(createUserValidationSchema), (req, res) => {
    const result = validationResult(req)

    if (!result.isEmpty()) {
        return res.status(400).send({ error: result.array() })
    }

    const body = matchedData(req)
    const newUser = { id: users[users.length - 1].id + 1, ...body }
    users.push(newUser)
    res.status(201).send(newUser)
})

//Update User using PUT Request
router.put('/api/users/:id', getUserIndexByID, (req, res) => {
    const { userIndex, body } = req
    users[userIndex] = { id: id, ...body }
    return res.status(200).send({ msg: "User Upated" })
})

//Update User using PATCH Request
router.patch('/api/users/:id', getUserIndexByID, (req, res) => {
    const { userIndex, body } = req
    users[userIndex] = { ...users[userIndex], ...body }
    return res.status(200).send({ msg: "User Upated" })
})

//Delete User using DELETE Request
router.delete('/api/users/:id', getUserIndexByID, (req, res) => {
    const { userIndex } = req
    users.splice(userIndex, 1)
    return res.status(200).send({ msg: "User Deleted" })
})


export default router