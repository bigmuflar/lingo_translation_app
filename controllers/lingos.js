var Lingo = require('../models/lingoModel');
var request = require('request');

function create (req, res){
  var oword = req.body.oword;
  console.log('getting to translate ', oword);
  var translatedWord;
  var gtEndpoint = 'https://www.googleapis.com/language/translate/v2?key=AIzaSyCLGUGn7uSe2i1oeNaxH9Mur6TM0uJ1jh8';
  var gtSource = "en"
  var gtTarget = "es"
  request(`${gtEndpoint}&q=${oword}&source=${gtSource}&target=${gtTarget}`, (err, response, body) => {

      if (err) {
          console.log("The Error", err)
      }
      translatedWord = JSON.parse(response.body).data.translations[0].translatedText
          //console.log("Translated Word in translateWord function: ", translatedWord)
      //return translatedWord;

      var newDoc = new Lingo({
        oword: oword,
        tword: translatedWord
      });

      newDoc.save((err, doc) =>{
        if(err){
          res.send(err);
        }else {
          res.send(doc);
        }
      });
  });
}

function get (req, res) {
    // get One
    if(req.params.id){
        Lingo.findOne({_id : req.params.id}, (err, document)=>{
            if(err){
                // if(err.name === "CastError" && err.kind === "ObjectId"){
                //     return res.send(`That ain't no ID`)
                // }

                return res.send(err);
            }
            if(!document){
                return res.send('Word not in database')
            }
            res.send(document);
        });
    }
    // get Many
    else{
        Lingo.find({}, (err, documents)=>{
            // res.send(err || documents)
            if(err){
                return res.send(err);
            }
            res.send(documents);
        });
    }
}

module.exports = {
    create : create,
    get    : get,
}
