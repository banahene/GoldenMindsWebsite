import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  public viewport = new Object();

  constructor() {
    this.setDimensions();
   }

   getSliderWidth() {
     return document.documentElement.clientWidth;
   }

   getSliderHeight() {
     return document.documentElement.clientHeight;
   }

   setDimensions() {
     let sliderDiv = document.getElementById
     console.log(sliderDiv);
   }

  ngOnInit() {
  }

}
