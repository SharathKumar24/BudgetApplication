var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://test:test@ds133231.mlab.com:33231/todoappsharath');

var budgetSchema = new mongoose.Schema({
  item : String,
  amount : Number
});

var budget = mongoose.model('budget', budgetSchema);

var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app){

  app.get('/budget', function(req, res){
    budget.find({}, function(err, data){
      if(err) throw err;
      res.render('index', {data: data});
    });
  });

  app.post('/budget', urlencodedParser, function(req, res){
       var newbudget = budget(req.body).save(function( err, data){
         if(err) throw err;
         res.json(data);
       });
  });

  app.delete('/budget/:item', function(req, res){
     budget.find({item: req.params.item.replace(/\-/g," ")}).remove(function( err, data){
       if(err) throw err;
       res.json(data);
     });
  });

}
