const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/success',(req,res,next)=>
{
    res.sendFile(path.join(__dirname,'../','views','success.html'))    
});

router.post('/success',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/success')
})

module.exports = router;
