import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  width: number

	@HostListener('window:resize', ['$event'])
	onResize(event) {
		this.width = event.target.innerWidth;
  }
  constructor() { }

  ngOnInit() {
    this.width = window.innerWidth;
  }

}
