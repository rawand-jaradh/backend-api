const express = require('express');
var bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.json());

//write your code 
app.get('/user',(req,res)=>{
   
    res.json({massge : "Hello" , name:req.query.name});
})
// for post method
app.post('/user/post',(req,res)=>{
    res.json({ message:"hello" ,name:req.body.name });
    
})

app.listen(4001,()=>{
   console.log('server running on port 3000'); 
});

