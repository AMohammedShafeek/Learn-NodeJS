import { Router } from "express";
import { getParamsId } from '../utils/middlewares.mjs'
import { products } from "../utils/dataConsts.mjs";

const router = Router()

//products
router.get('/api/products', (req, res) => {
    req.session.visited = true
    console.log(req.session.id);
    
    const {query:{filter, value}} = req
    if(filter && value){
        return res.send(products.filter(((product)=>product[filter].toLowerCase().includes(value.toLowerCase()))))
    }
    res.send(products)
})

//product endpoint
router.get('/api/products/:id', getParamsId, (req, res) => {
    const {id} = req
    const product = products.find((product) =>
        (product.id === id)
    )
    if (product) {
        return res.send(product)
    }
    return res.status(404).send({ msg: "User Not Found" })
})

export default router
