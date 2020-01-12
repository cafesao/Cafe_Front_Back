const { Schema, model } = require('mongoose')

const CafeSchema = new Schema({
    nome: {
        type: String,
        required: true
    },
    especie: {
        type: String,
        required: false,
        default: 'Coffea arabica'
    },
    cafeina: {
        type: String,
        required: false,
        default: '0,8-1,4%'
    },
    caracteristicas: {
        type: String,
        required: true
    },
    temperatura: {
        type: String,
        required: false,
        default: 'Pede temperaturas mais amenas'
    },
    lavoura: {
        type: String,
        required: false,
        default: 'Plantas sensíveis e mais sujeitas a pragas e intempéries devido ao formato triangular. Exigem mais cuidados para garantir a qualidade dos grãos.'
    },
    colheita: {
        type: String,
        required: false,
        default: 'É seletiva e, geralmente, manual. Quando mecanizada, passa por beneficiamento para seleção dos grãos.'
    },
    grao: {
        type: String,
        required: false,
        default: 'Oval'
    },
    deriva: {
        type: String,
        required: false,
        default: 'Arábica'
    },
    atitude: {
        type: String,
        required: false,
        default: '800 - 1400m'
    },
    preco: {
        type: Number,
        required: true
    },
    peso: {
        type: String,
        required: false,
        default: 'KG'
    },
    moeda: {
        type: String,
        required: false,
        default: 'BRL'
    }
})

module.exports = model('cafe', CafeSchema)