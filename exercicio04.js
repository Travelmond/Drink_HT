
const express = require("express")//Carrega o framework express
const cors = require("cors")//Carrega o framework cors
const exercicio_04 = express()//invoke framework express
const port = 3000//Port of service
exercicio_04.use(express.json())//Utilizar arquivos JSON



let m =[] 
let soma = 0
for (let i = 0; i < m.length; i++) {
    soma = soma+m[i]
}

pessoa = []

exercicio_04.get("/adcionar-pessoa", (req, res) => {
    atraindo.json = atraindo.ds
    
    res.push("GET principal")
})
exercicio_04.get("/calculo", (req, res) => {
    res.send("Teste /Calculo")

})

//POST Somar
exercicio_04.post("/somar", (req, res) => {
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
exercicio_04.post("/subtrair", (req, res) => {
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
exercicio_04.post("/multiplicar", (req, res) => {
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
exercicio_04.post("/dividir", (req, res) => {
    //Ler dados do body postman
    function Dividir(){
    let n1 = parseFloat(req.body.n1)
    let n2 = parseFloat(req.body.n2)
    let resultado = n1 / n2
    res.json({resultado:resultado})
    }
    Dividir()
})



exercicio_04.listen(port, () => {
    console.log(`Port: ${port}`)
})