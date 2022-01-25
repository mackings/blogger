const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');
const dotenv = require('dotenv').config();
const posts = require('./posts');



app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.get('/', function(req, res) {
    //res.send(myusers).json;
   res.sendFile(path.join(__dirname + '/index.html'));
    
});

app.post('/blog' , function(req,res){

    var postname = req.body.title;
    var postcontent = req.body.content;
    var author = req.body.author;

    console.log('postname: ' + postname + ' postcontent: ' + postcontent + ' author: ' + author);

    res.send('postname: ' + postname + ' postcontent: ' + postcontent + ' author: ' + author);

     


});

app.get('/allposts', function(req,res){

    res.send('all posts');

});


app.listen(process.env.PORT || 3000, function(){
    console.log('server is running on port 3000');
});
