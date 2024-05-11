import { Component } from '@angular/core';

interface LoginForm{
  email:String;
  password:String;
};

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})




export class LoginComponent {

  

  Email : String = "";
  Password : String = "";

  login(){
    
    let login_form : LoginForm = {email:this.Email,password:this.Password};
    console.log(login_form)


  }


}
