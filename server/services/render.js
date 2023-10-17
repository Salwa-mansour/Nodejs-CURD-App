const axios =require('axios');
const { response } = require('express');



exports.homeRouters=(req,res)=>{
   //  res.render('index',{users:`${req.hostname}/${process.env.PORT}`})
    axios.get(`${req.hostname}/${process.env.PORT}/api.coding`)
    .then((response)=>{
        res.render('index',{users:response.data})
    })
    .catch(err =>{
        res.send(err);
    })
}
exports.add_user=(req,res)=>{
    res.render('add_user');
}
exports.update_user=(req,res)=>{
    res.render('update_user');
} 