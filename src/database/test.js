const dataBase = require('./db')
const saveOrfanato = require('./saveOrfanato')

dataBase.then(async db => {
    // inserir dados na tabela 
    await saveOrfanato(db, {
        lat: "-17.5400234", 
        lng: "-39.7283858",
        name: "Lar dos meninos",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "99999999999",
        images: [
            "https://images.unsplash.com/photo-1595295403848-3f1d04c4e95e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9", "https://images.unsplash.com/photo-1596908905631-7fe2dd220d24?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9", "https://images.unsplash.com/photo-1595295403848-3f1d04c4e95e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9", "https://images.unsplash.com/photo-1596908905631-7fe2dd220d24?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9", "https://images.unsplash.com/photo-1595207011175-3d72f5a3b21c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Das 8h até 18 h",
        opening_weekends: "0"

    })

    //cunsultar dados da tabela
   const selectedOrfanatos = await db.all("SELECT * FROM orfanatos")  
   console.log(selectedOrfanatos) 

   //cunsultar somente 1 orfantato, pelo id
   //const orfanat = await db.all('SELECT * FROM orfanatos WHERE id = "2"')
   //console.log(orfanat)

   //deletar dado da tabela 
   //console.log(await db.run("DELETE FROM orfanatos WHERE id ='4'"))

})