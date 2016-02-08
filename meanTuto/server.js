var express = require('express');
var app = express();
var mongo = require('mongojs');
var db = mongo();

app.use(express.static(__dirname + '/'));

app.get('/', function (req,res){
    console.log('aca llegue');  
    res.send('holas');
});


app.get('/callServiu', function (req,res){
    /*var p1 = {
            nombre: 'pepe',
            documento: '39956868',
            mail: 'pepe@sublime.com',
            telefono: '5400-4409'
        }
    var p2 = {
            nombre: 'sargento',
            documento: '29940513',
            mail: 'sgt@pennyLane.com',
            telefono: '3005-1233'
        }
    var personas = [p1,p2];*/
    
    
    var personas;
    res.json(personas);
}); 


console.log('cuchando en el 8090');  
app.listen('8090');