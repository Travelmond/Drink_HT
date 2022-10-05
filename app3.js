//Carregando o express na aplicação
const express = require("express")
const cors = require("cors")
const app = express() // invoke function express
const port = 3000 //Port of service
app.use(cors())//Conectando a function com o express
app.use(express.json())//reconhecendo os request que possui JSON no body
const produtoController = require("./controller/produto-controller")



//############ GET -- POST -- DELETE -- PUT ##################
app.get("/", (req,res) =>{
    res.send("Teste")
})

//GET --Lista de produtos
app.get("/produtos", produtoController.getProduto)

//POST --Inserir lista de produtos
app.post("/produtos", produtoController.postProduto)

//DELETE --Deleta lista de produtos pelo indice
app.delete("/produtos",produtoController.deleteProduto)

//PUT --Edita lista de produtos pelo indice
app.put("/produtos",produtoController.putProduto)


app.listen(port, () =>{
    console.log(`App runnin on port ${port}`)
})
