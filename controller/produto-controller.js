let produtos = []

//Trazer no banco de dados
//----------------Conectando ao banco----------------//
const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://travelmond:FullMetal10!@clustertest.93qpga6.mongodb.net/?retryWrites=true&w=majority")

// -----------------Criando um Schema(Collection)-----------------//
const ProdutoSchema = new mongoose.Schema({descricao:String,preco:Number,imagem:String})

// -----------------Criando o Modelo-----------------//
const Produto = mongoose.model("produtos",ProdutoSchema)

// -----------------Criando o Modelo-----------------//
produtos =await Produto.find({})
console.log(produtos)


//Produto.find().then((arr)=>console.log(arr)) //Busca na coleção de produtos

//----------------REPOSITÓRIOS------------------------------//
Init()





//---------------------# Funções Controller----------------

function getProduto(req, res){
    res.json(produtos)
}

function postProduto(req,res){
    produtos.push(req.body)
    res.json(req.body)
}

function deleteProduto(req,res){
    let indice = req.query.i
    produtos.splice(indice,1)

    res.status(200)
    res.send("removido indice: "+indice)
}

function putProduto(req,res){
    let indice = req.query.i
    let produto = req.body

    produtos[indice] = produto
    res.send("Alterado com sucesso")
}

module.exports = {getProduto,postProduto,deleteProduto,putProduto}