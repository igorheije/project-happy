const dataBase = require('sqlite-async')




function execute(db){
    return db.exec(`
        CREATE TABLE IF NOT EXISTS orfanatos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            lat TEXT,
            lng TEXT,
            name TEXT,
            about TEXT,
            whatsapp TEXT,
            images TEXT,
            instructions TEXT,
            opening_hours TEXT,
            opening_weekends TEXT 
        );
    `) 
}

module.exports = dataBase.open(__dirname + '/database.sqlite').then(execute)