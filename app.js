
const http = require("http") //importação
const hostname = "127.0.0.1" //endereço local (localhost)
const port = 3000 //porta

//CRIANDO SERVIÇO
const server = http.createServer((req, res) => {
    res.status = 200;
    res.setHeader("Content-Type", "application/json");

    switch (req.method) {
        case "POST":
            res.end("Cadastrado com sucesso!")
            break;
        case "PUT":
            res.end("Alterado com sucesso!")
            break;
        case "DELETE":
            res.end("Deletado com sucesso!")
            break;
        case "GET":
            let produtos = []
            let p1 = {
                descricao: "Suco de Uva",
                preco: "10.5",
                imagem: "http://i.mlcdn.com.br/portaldalu/fotosconteudo/58836.jpg"
            }
            let p2 = {
                descricao: "Suco de Banana",
                preco: "11.5",
                imagem: "http://i.mlcdn.com.br/portaldalu/fotosconteudo/58836.jpg",
            }
            let p3 = {
                descricao: "Suco de Laranja",
                preco: "12.5",
                imagem: "http://i.mlcdn.com.br/portaldalu/fotosconteudo/58836.jpg",
            }

            //Carga no array com 3 produtos
            produtos.push(p1, p2, p3)


            //Resposta do servidor
            res.end(JSON.stringify(produtos))
            break;
            default:
                res.end("Não sei esta função!")
                break;
            
    }
})

//ATIVAR SERVIÇO
server.listen(port, hostname, () => {
    console.log(`Servidor local está rodando em http://${hostname}:${port}`)
})




















