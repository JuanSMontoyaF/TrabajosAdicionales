const {Router} = require('express');
const router = Router();
const db = require('../db.js');

router.post('/add', (req,res) => {
    console.log(req.body);
    var datos_json = req.body;

    sql = "INSERT INTO books VALUES ?";
    var values = [
        [datos_json.id, datos_json.title, datos_json.description, datos_json.author]
    ];
    console.log(values);
    db.query(sql, [values], function(err, result){
        if(err){
            console.log(err);
        }else{
            console.log("Registro insertado");
        }
    });
    res.send("OK");
});

router.delete('/books/:id', (req, res) => {
    id = req.params.id;

    var datos;
    var sql = "DELETE FROM books WHERE id = ?";
    db.query(sql, id, function (err, result) {
        if (err) throw err;

        datos = result;
        res.send("Eliminado");
    });
});

router.put('/books/:id', (req, res) => {
    id = req.params.id;
    
    var datos_json = req.body;

    var datos;
    var sql = "UPDATE books SET title = ?, description = ?, author = ? WHERE id = id";
    values = [datos_json.title, datos_json.description, datos_json.author, datos_json.id];
    db.query(sql, values, function (err, result) {
        if (err) throw err;

        datos = result;
        res.send("datos");
    });

});

router.get('/books', async (req,res) =>{
    var datos;
    var sql = "SELECT * FROM books";
    db.query(sql , function (err, result) {
        if (err) throw err;
        datos = result;
        res.send(datos);
    });
});

router.get('/books/:id', async (req,res) =>{

    id = req.params.id;

    var datos;
    var sql = "SELECT * FROM books WHERE id = ?";
    db.query(sql, id , function (err, result) {
        if (err) throw err;

        datos = result;
        res.send(datos);
    });
});

router 

module.exports = router