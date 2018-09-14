
const express=require('express');
const router=express.Router();
const mongojs=require('mongojs');
const db=mongojs('mongodb://Aniket:19951113aa@ds155492.mlab.com:55492/contact-list');

//import the schema
const contact=require('../models/Contact');


//Retreiving the contact
router.get('/contact',(req,res,next)=>{
        db.List.find((err,data)=>{
                if(err) console.log(err);
                res.json(data);
        });
});


//Update the Contact
router.post('/contact',(req,res,next)=>{
    
    let newContact=new contact({
        FirstName:req.body.FirstName,
        LastName:req.body.LastName,
        PhoneNumber:req.body.PhoneNumber
    });


db.List.save(newContact,(err,result)=>{
        if(err)
            res.json({msg:"Their has been error"+err})
        else    
            res.json(result);
        });

});

//Delete the contact
router.delete('/contact/:id',(req,res,next)=>{
    db.List.remove({_id:mongojs.ObjectId(req.params.id)},(err,result)=>{
        if(err)
            console.log(err);
            else
            res.json(result);     
    });
});

module.exports=router;