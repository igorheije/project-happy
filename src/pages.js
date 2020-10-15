const orfanatos = require('./database/fakedata.js')
module.exports = {

    index(req, res){
        return res.render('index')
    },

    orfanato(req, res){
        return res.render( 'orfanato' )
    },

    orfanatos(req, res){
        return res.render('orfanatos', {orfanatos})
    },

    createOrfanat(req, res){
        return res.render('create-orfanat' )
    }
}