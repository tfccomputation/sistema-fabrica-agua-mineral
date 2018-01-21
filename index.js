var app = require('./app_config.js')
var db = require('./db_config.js')

var http = app.listen(8080,'127.0.0.1',()=>{
    console.log('Servidor iniciado!')
})

// inicializando o websocket
var io = require('socket.io')(http)

io.on('connection', function(socket){
    console.log('+ websocket iniciado')
})

// Servicos
require('./service/cliente-service.js').services(app)
require('./service/usuario-service.js').services(app)
require('./service/produto-service.js').services(app)
require('./service/venda-service.js').services(app)
require('./service/sensor-service.js').services(app, io)
