const dataBase = require('./database/db')
const saveOrfanato = require('./database/saveOrfanato')

module.exports = {

    index(req, res){
        return res.render('index')
    },

    async orfanato(req, res){

        const id = req.query.id
        
        try {
            const db = await dataBase
            const results = await db.all(`SELECT * FROM orfanatos WHERE id = "${id}"`)
            const orfanato = results[0]

            orfanato.images = orfanato.images.split(",")
            orfanato.firstImage = orfanato.images[0]

            if(orfanato.opening_weekends == "0"){
                orfanato.opening_weekends = false
            } else {
                orfanato.opening_weekends = true
            }

            return res.render('orfanato', {orfanato})
        } catch (error) {
            console.log(error)
            return res.send('Erro no banco de dados!')
        }
    },

    async orfanatos (req, res) {
        try{
            const db = await dataBase
            const orfanatos = await db.all("SELECT * FROM orfanatos")
            return res.render('orfanatos', {orfanatos})

        } catch(error) {
            console.log(error)
            return res.send('Erro no banco de dados!')
        }
        
    },

    createOrfanat(req, res){
        return res.render('create-orfanat' )
    }
}