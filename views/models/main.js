const express = require('express');
const dotenv = require('dotenv').config();
const app = express();
const router = express.Router();
const path = require('path');
const myusers = require('./users');



app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.get('/', function(req, res) {
    //res.send(myusers).json;
   res.sendFile(path.join(__dirname + '/index.html'));
    
});

app.post('/blog' , function(req,res){

     var title = req.body.title;
    var content = req.body.text;
    console.log(title);
    console.log(content);


    res.send('post sent by ' + title + ' ' + content);
    


});

app.get('/allposts', function(req,res){

    res.send('all posts');

});


app.listen(process.env.PORT || 3000, function(){
    console.log('server is running on port 3000');
});
