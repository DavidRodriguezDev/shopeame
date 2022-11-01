import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  image : string = "https://img.freepik.com/vector-premium/letra-s-logo-vector_23987-138.jpg?w=2000";

  constructor() { }

  ngOnInit(): void {
  }

}
