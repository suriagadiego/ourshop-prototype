import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adbox',
  templateUrl: './adbox.component.html',
  styleUrls: ['./adbox.component.css']
})
export class AdboxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ads: string[] = [
    'assets/images/ads/1.jpg',
    'assets/images/ads/2.jpg',
    'assets/images/ads/3.jpg',
    'assets/images/ads/4.jpg',
    'assets/images/ads/5.jpg',
    'assets/images/ads/6.jpg',
  ]

}
