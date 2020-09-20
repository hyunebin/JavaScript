
const { request } = require('express')
const express = require('express')
const app = express()


const items = [
    {
        name: '우유',
        price: "2000"
    },
    {
        name: '홍차',
        price:'3000'
    },
    {
        name: '커피',
        price:'500'
    }
]

app.all("/data", (requset, response) =>{
    console.log(request.method)
    console.log(request.url)
    response.send("hello")
})

app.use(express.static('public'))
app.listen(52273, () =>{
    console.log("run")
})