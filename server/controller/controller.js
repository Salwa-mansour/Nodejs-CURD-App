var Userdb = require('../model/model.js');


//create and save new user
exports.create =(req,res)=>{
 // validate request
 if(!req.body){
    res.status(400).send({message:"Content can not be empty."});
    return;
 }

 //new user
  const user= new Userdb({
    name:req.body.name,
    email:req.body.email,
    gender:req.body.gender,
    status:req.body.status
  })

  user
  .save(user)
  .then(data=>{
    res.send(data)
  })
  .catch(err=>{
    res.status(500).send({
        message:err.message||"Some error occured while create opration"
    })
  })

}

// retrieve and returen all users/retrive and return a single user
exports.find=(req,res)=>{

        if(req.query.id){
            const id=req.query.id;

            Userdb.findById(id)
            .then(data=>{
                if(!data){
                      res.status(404).send({message:`Not Found user with id ${id}`})
                }else{
                    res.send(data)
                }
            })
            .catch(error=>{
                res.status(500).send({message:`error retrieving user with id${id} `})
            })
        }else{
            Userdb.find()
            .then(user =>{
                res.send(user)
            }) 
            .catch(err=>{
                res.status(500).send({
                    message:err.message||"Some error occured while retriving user info."
                })
            })
        }


}

// Update a new identifed user by user id
exports.update=(req,res)=>{
 // validate request
 if(!req.body){
    res.status(400).send({message:"data to update can not be empty."});
    return;
 }

 const id =req.params.id;
 Userdb.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
 .then(data=>{
    if(!data){
        res.status(404).send({message:`Cannot upadate user ${id},Meybe user not found. `})
    }else{
        res.send(data);
    }
 } )
 .catch(err=>{
    res.status(500).send({message:"Error Update user information."})
 }

 )}





// Delete a user with specified user id in the request
exports.delete=(req,res)=>{
 const id = req.params.id;
  Userdb.findByIdAndDelete(id)
  .then(data=>{
    if(!data){
        res.status(404).send({message:`Cannot delete with id ${id} maybe id is wrong`})
    }else{
        res.send({
            message:'User was deleted successfully.'
        })
    }
  })
  .catch(err=>{
    res.status(500).send({
        message:`Could not delete User with id ${id} due to server error`
    })
  })
}