import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { contact } from '../app/contact/models/contact';
import 'rxjs/add/operator/map';
@Injectable()
export class ContactService {

  constructor(private http:HttpClient,private contact:contact,private jHttp:Http) { }


    getContact(){
      return this.jHttp.get('http://localhost:3030/api/contact').map(res=>res.json());
    
    }



    AddContact(newContact){
      return this.jHttp.post('http://localhost:3030/api/contact',newContact).map(res=>res.json());
    }



    DeleteContact(id){
     
      return this.jHttp.delete('http://localhost:3030/api/contact/'+id).map(res=>res.json());
    
    }



}
