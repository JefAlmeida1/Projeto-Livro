const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const fs = require('fs')

app.use(bodyParser.urlencoded({extended:true}))

console.log('conectado')

fs.access('C:/Users/Jaf/Documents/Projeto Livro/servidor/node_modules/accepts/data/items.json', fs.constants.F_OK, (error) =>{
    console.log(error ? 'Arquivo items.json não existe' : '')
})

const readFile = () =>{
    const atual = fs.readFileSync('C:/Users/Jaf/Documents/Projeto Livro/servidor/node_modules/accepts/data/items.json', 'utf-8')
    return atual == '' ? [] : JSON.parse(atual)
}

const writeFile = (arrayElemet) =>{
    const currentData = readFile()
    currentData.push(arrayElemet)
    const updataFile = JSON.stringify(currentData)
    fs.writeFileSync('C:/Users/Jaf/Documents/Projeto Livro/servidor/node_modules/accepts/data/items.json', updataFile, 'utf-8')
}

app.post('/', (req, resp) =>{
    writeFile(req.body)
    console.log(req.body)
    resp.send('<a href="..//Projeto Livro/net.html">Voltar ao Inicio</a>')
})

app.get('/getAtributes', (req, resp) =>{
    resp.send(readFile())
})

app.listen(8082)