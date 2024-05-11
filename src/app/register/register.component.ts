import { Component } from '@angular/core';


interface RegisterForm{
    email:String;
    password:String;
    confirm_password:String;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  Email : String = "";
  Password : String  = "";
  Confirm_Password : String = "" ;

  register(){

    const register_form : RegisterForm = {email:this.Email,password:this.Password,confirm_password:this.Confirm_Password}
    console.log(register_form)

  }

}
