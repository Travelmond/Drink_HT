//carregando o express na aplicação 
const express = require("express")
const cors = require("cors")
const produtoRouter = require("./router/produto-router")

const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://travelmond:FullMetal10!@clustertest.93qpga6.mongodb.net/?retryWrites=true&w=majority")

const app4 = express() //invocando a function do express
const port = 3000 //definindo a porta do serviço
app4.use(cors())//conecta a função cors() com o express()
app4.use(express.json())//serve para reconhecer arquivos JSON no código
