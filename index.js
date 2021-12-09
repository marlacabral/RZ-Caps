const express = require('express');
const cors = require('cors')
const ColCaps = require('./models/cap');
const app = express();
app.use(cors());
app.use(express.json());

const Conn = require('./conn/conn');

Conn();

const capAdd = new ColCaps({
    titulo: "GSX",
    descricao: "boné",
    valor: 50,
    imagem: "www",
})

/*capAdd.save()
.then(() => console.log('cap salvo!'))
.catch((err) => console.log(err));
*/

app.get('/caps', async (req, res) =>{
    
    try {
        const caps = await ColCaps.find()
        console.log(caps);
        res.send(caps);
    } catch (error) {
        console.log(error)
    }
})

app.get('/caps/id/:id', async (req, res) => {
    const capById = await ColCaps.findOne({ _id: req.params.id })
    res.send(capById);
})

app.delete('/caps/delete/:id', async (req, res) => {
    await ColCaps.deleteOne({ _id: req.params.id });
    res.status(200).send({
        message: 'Excluido com sucesso',
        })
})

app.post('/caps/add', async (req, res) => {
    await ColCaps.create(req.body)
    .then(() => {
        res.status(201).send({
            message: 'Criado com sucesso.'
        
    })
})
    .catch((err) => {
        res.status(400).send({
            error: 'Algo deu errado, tente novamente'
        })
        console.log(err);
    })
})

app.put('/caps/update/:id', async (req, res) => {
    await ColCaps.updateOne({
        _id: req.params.id}, req.body)
        .then(() => {
            res.status(200).send({
                message: 'Atualizado com sucesso',
            })
            .catch((err) => {
                console.log(err),
                res.status(400).send({
                    error: err
            })
        })
    })
})


const port = 3000;
app.listen(port, () => {
console.log(`Rodando na porta ${port}.`)

})