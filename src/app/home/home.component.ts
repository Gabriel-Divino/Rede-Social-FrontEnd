import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  Storage : any;

  constructor(private router: Router) {
    
   }

  ngOnInit(): void {
   const user : any = localStorage.getItem('user')
    if(user == null){
      this.router.navigate(['/login']);
    }
  }



}
