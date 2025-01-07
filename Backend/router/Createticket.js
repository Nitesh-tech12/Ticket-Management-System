const express = require('express')
const router = express.Router()
const LogCreateticket = require('../models/Createticket')

router.get('/',(req,res)=>{
    if(req.query.id){
       return LogCreateticket.find({_id:req.query.id})
        .then(users => res.json(users))
        .catch(error => res.json(error));
    }
  else{
    return LogCreateticket.find()
    .then(users => res.json(users))
    .catch(error => res.json(error));
  }
});

router.post('/', async(req,res)=>{

        try{
            debugger;
            console.log(req.body);
            const {name , email , title , product,description} = req.body
            if(!name || !email || !title || !product || !description){
                    return res.status(400).json({error:'All field are available'})
                }
                
                const existingUser =await LogCreateticket.findOne({email});
                if(existingUser){
                    console.log("existed this user")
                    return res.status(409).json({error:'User with this email is already exists'});
                } 
            
            const userdata = await LogCreateticket.create({
                name: name,
                email: email,
                title: title,
                product:product,
                description:description
            })
            res.json(userdata)
        }
        catch(error){
    console.log(error)
        }
        });
 

module.exports = router