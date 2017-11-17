import { SLIDERTEXT, SliderText } from './slider-text';
import { Component, OnInit } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('sliderAnimation', [
        state('void',style({ opacity: 0, transform: 'scale(0.98) translateX(10px)' })),
        transition('* => fadeIn', animate('600ms ease-in', style({
          opacity: 1, transform: 'scale(1) translateX(0)'
        }))),
        transition('* => fadeOut', animate('600ms ease-out', style({
          opacity: 0, transform: 'scale(0.98) translateX(10px)'
        }))),
    ]),
  ]
})
export class HeaderComponent implements OnInit {

  public sliderTextVar:string;
  public sliderState:string;

  constructor() { }

  ngOnInit() {
    this.changeSliderText();
  }
  
  changeSliderText() {
    var count = 1;
    this.sliderTextVar = SLIDERTEXT[0].text;
    this.sliderState = 'fadeIn';
    var maxCount = SLIDERTEXT.length - 1;  

    this.sliderTextAnimate(count,maxCount);    
  }

  sliderTextAnimate(count,maxCount) {
    setTimeout(() => {
      this.sliderState = 'fadeOut';
      setTimeout(() => {
        this.sliderTextVar = SLIDERTEXT[count].text;        
        this.sliderState = 'fadeIn';      
        if(count === maxCount){
          count = 0;
        }
        count++;
        this.sliderTextAnimate(count, maxCount);        
      },500);
    },4000);

  }
  
}
