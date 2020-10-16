function saveOrfanato(db, orfanato){
    return db.run(`
    INSERT INTO orfanatos (
        lat, 
        lng,
        name,
        about,
        whatsapp,
        images,
        instructions,
        opening_hours,
        opening_weekends
    ) VALUES (
        "${orfanato.lat}",
        "${orfanato.lng}", 
        "${orfanato.name}", 
        "${orfanato.about}", 
        "${orfanato.whatsapp}", 
        "${orfanato.images}",
        "${orfanato.instructions}", 
        "${orfanato.opening_hours}", 
        "${orfanato.opening_weekends}"


    );
`)
}


module.exports = saveOrfanato