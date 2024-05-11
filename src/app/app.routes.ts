import { Routes,RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    {path:'register',component:RegisterComponent}
];


@NgModule({
    declarations:[HomeComponent,HeaderComponent,LoginComponent,RegisterComponent],
    imports: [RouterModule.forRoot(routes),FormsModule,CommonModule],
    exports: [RouterModule],
    providers:[]
  })
  export class AppRoutingModule { }