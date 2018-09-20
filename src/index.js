const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const Pessoa = require('./schemas/PessoaSchema')
const http = require('http');
  
app.use(bodyParser());


const dbName = 'crud-pessoa';
const dbUser = 'sistema';
const dbPassword ='admin123'
// mongoose.connect(`mongodb://${dbUser}:${dbPassword}@ds243212.mlab.com:43212/${dbName}`);
// var db = mongoose.connection;

// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
  
  app.use((req,res,next) => {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Custom-Header');
  })
  
  app.get('/pessoas', async (req, res, next) => {
      res.json(await Pessoa.find().exec())
  })
  
  app.get('/pessoa/:id', async (req, res, next) => {
      res.json(await Pessoa.findById(req.params.id).exec())
  })
  
  app.post('/pessoa', async (req, res, next) => {
      const pessoa = new Pessoa(req.body)
      const saved = await pessoa.save()
      res.json(saved);
  })
  
  app.put('/pessoa', async (req, res, next) => {
      const pessoa = new Pessoa(req.body)
      const saved = await pessoa.save()
      res.json(saved);
  })
  
  app.delete('/pessoa/delete/:id', async (req, res, next) => {
      const saved = await Pessoa.deleteOne({id: req.params.id})
      res.json(saved);
  })
  

  http.createServer(app).listen(process.env.PORT, process.env.IP);
  console.log("Sucesso")
// });