import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  lorem : string = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime quae aperiam natus illum, fugiat, quibusdam ipsum id distinctio, tenetur sapiente totam aliquid odio itaque. Natus id tenetur exercitationem ullam neque! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime quae aperiam natus illum, fugiat, quibusdam ipsum id distinctio, tenetur sapiente totam aliquid odio itaque. Natus id tenetur exercitationem ullam neque! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime quae aperiam natus illum, fugiat, quibusdam ipsum id distinctio, tenetur sapiente totam aliquid odio itaque. Natus id tenetur exercitationem ullam neque!"
  
  company : string = "Shopéame";
  
  constructor() { }

  ngOnInit(): void {
  }

}
