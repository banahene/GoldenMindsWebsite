import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {


  // constructor(public galleryImages) {
  //   this.galleryImages = [
  //     'https://drive.google.com/uc?id=1cq7piMZCg50ADqpEhdc9mBHJMOjYaxUV',
  //     'https://drive.google.com/uc?id=1cq7piMZCg50ADqpEhdc9mBHJMOjYaxUV'
  //   ];
  //  }

  private images: string[];

  constructor() {
    this.images = ['https://drive.google.com/uc?id=1cq7piMZCg50ADqpEhdc9mBHJMOjYaxUV',
    'https://drive.google.com/uc?id=1cq7piMZCg50ADqpEhdc9mBHJMOjYaxUV'];
  }

  ngOnInit() {
  }

}
