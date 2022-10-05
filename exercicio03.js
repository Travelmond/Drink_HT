//carrega o express
const express = require("express")
const cors = require("cors")
const exercicio_03 = express() // invoke function express
const port = 3000 //Port of service
exercicio_03.use(express.json())//utilizar arquivos JSON




exercicio_03.get("/", (req, res) => {
    res.send("GET principal")
})
exercicio_03.get("/calculo", (req, res) => {
    res.send("Teste /Calculo")

})

//POST Somar
exercicio_03.post("/somar", (req, res) => {
    //Ler dados do body postman
    function Somar(){
    let n1 = parseFloat(req.body.n1)
    let n2 = parseFloat(req.body.n2)
    let resultado = n1 + n2
    res.json({resultado:resultado})
    }
    Somar()
})

//POST Subtrair
exercicio_03.post("/subtrair", (req, res) => {
    //Ler dados do body postman
    function Subtrair(){
    let n1 = parseFloat(req.body.n1)
    let n2 = parseFloat(req.body.n2)
    let resultado = n1 - n2
    res.json({resultado:resultado})
    }
    Subtrair()
})

//POST Multiplicar
exercicio_03.post("/multiplicar", (req, res) => {
    //Ler dados do body postman
    function Multiplicar(){
    let n1 = parseFloat(req.body.n1)
    let n2 = parseFloat(req.body.n2)
    let resultado = n1 * n2
    res.json({resultado:resultado})
    }
    Multiplicar()
})

//POST Dividir
exercicio_03.post("/dividir", (req, res) => {
    //Ler dados do body postman
    function Dividir(){
    let n1 = parseFloat(req.body.n1)
    let n2 = parseFloat(req.body.n2)
    let resultado = n1 / n2
    res.json({resultado:resultado})
    }
    Dividir()
})



exercicio_03.listen(port, () => {
    console.log(`Port: ${port}`)
})