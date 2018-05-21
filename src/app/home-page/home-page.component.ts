import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  zoomedImageSrc = "http://shoptommy.scene7.com/is/image/ShopTommy/78A2884_083_BCK";
  smallImageSrc = "http://shoptommy.scene7.com/is/image/ShopTommy/78A2884_083_FNT";
  width = "300";
  height = "400";
  

  //
  //<img [imageZoom]="zoomedImageSrc" [src]="smallImageSrc" [style.width.px]="width" [style.height.px]="height">
  
}
