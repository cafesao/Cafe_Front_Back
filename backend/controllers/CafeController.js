const CafeModel = require('../model/CafeModel')

module.exports = {
    async mostrarTudo(req, res) {
        const cafes = await CafeModel.find()

        return res.json(cafes)
    },

    async mostrar(req, res) {
        const nomeCafe = req.params.nome
        const cafe = await CafeModel.findOne({nome: nomeCafe})

        if(cafe) {
            return res.json(cafe)
        }
        return res.status(400).json({erro: 'Café não existe no banco de dados'})
    },

    async criar(req, res) {
        const sobreCafe = req.body
        const cafe = await CafeModel.create(sobreCafe)

        return res.json(cafe)
    }
}