import express from "express"
import  products from "./data/products.js"
import cors from "cors"

const port = 5000

const app = express()

app.use(cors())

app.get("/", (req, res) => {
    res.send("Hello")
})

app.get("/api/products", (req, res) => {
    res.json(products)
})
app.get("/api/products/:id", (req, res) => {
    console.log(req.params);
    const product = products.find((p)=> p._id === req.params.id) //params bcause of colon
    res.json(product)
})

app.listen(port, () => console.log(`My server is running on port ${port}`))