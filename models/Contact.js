var mongoos=require('mongoose');
//Creating the Schema
var ContactSchema=mongoos.Schema({
        FirstName:{
            type:String,
            required:true
        },
        LastName:{
            type:String,
            required:true
        },
        PhoneNumber:{
            type:String,
            required:true
        }
});


var Contact=mongoos.model('contact',ContactSchema);

module.exports=Contact;



