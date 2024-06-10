import { Component } from '@angular/core';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app_firebase } from '../firebase-connect';
import { Router } from '@angular/router';
 
interface LoginForm{
  email:any;
  password:any;
};

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})




export class LoginComponent {

  
  constructor(private router: Router) {
    
  }


  Email : String = "";
  Password : String = "";

  changeStatus:String = "alert alert-primary";
  changeText:String = "Use o Formulário Abaixo Para Fazer Login !";




  login(){
    
    let login_form : LoginForm = {email:this.Email,password:this.Password};
    console.log(login_form)

    try{
      const auth = getAuth(app_firebase);
    signInWithEmailAndPassword(auth,login_form.email, login_form.password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
        this.changeStatus = "alert alert-success"
        this.changeText = "Login Realizado com sucesso !"

        localStorage.setItem('user',login_form.email)
        this.router.navigate(['/'])
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        this.changeText = errorCode
        this.changeStatus = "alert alert-danger"
      });
    }catch(e){
      console.log(e)
    }


  }


}
