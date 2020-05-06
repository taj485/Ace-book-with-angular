import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service'

@Component({
  selector: 'nav-bar',
  templateUrl: './nav.component.html',
  styleUrls:['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public authService:AuthService) { }

  ngOnInit(): void {
  }

}
