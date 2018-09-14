import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { contact } from './models/contact';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contacts:contact[];
  contact:contact;
  first_name:string;
  last_name:string;
  phone_number:string;

  constructor(private contactService:ContactService) { }

  ngOnInit() {
      this.contactService.getContact()
      .subscribe(res=>{
        this.contacts=res;
        console.log(res);
      });
      

    
  }


  AddContact()
{
 var tempContact={
    FirstName:this.first_name,
    LastName:this.last_name,
    PhoneNumber:this.phone_number
  }

this.contactService.AddContact(tempContact).subscribe(data=>{
     
        this.contacts.push(data);

      this.contactService.getContact()
      .subscribe(res=>{
        this.contacts=res;
       
      });

});



}
  deleteContact(id:any){
    let cont=this.contacts;
    this.contactService.DeleteContact(id).subscribe((data)=>
    {
          if(data.n==1){
              for(var i=0;i<cont.length;i++){
                if(cont[i]._id==id)
                this.contacts.splice(i,1);
              }        
          }      
    });
    
    
    
  }
}
