// ========================
// Puerto 
// ========================

process.env.PORT = process.env.PORT || 3000;

// ========================
// Entorno 
// ========================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


// ========================
// Base de datos 
// ========================

let urlDB;

if ( process.env.NODE_ENV === 'dev' ) {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb+srv://llconstantine:Matanoobsxd123@cluster0.fdbv9.mongodb.net/cafe';
}


// mongodb://localhost:27017/cafe

// mongodb+srv://llconstantine:Matanoobsxd123@cluster0.fdbv9.mongodb.net/cafe


process.env.URLDB = urlDB;