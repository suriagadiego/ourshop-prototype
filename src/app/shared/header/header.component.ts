import { Component, OnInit, HostListener} from "@angular/core";
import categories from "../../_files/categories.json";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  width: number

	@HostListener('window:resize', ['$event'])
	onResize(event) {
		this.width = event.target.innerWidth;
  }

  constructor() {}

  img: string = "./pictures/ourshop-logo.png";
  ngOnInit() {
    this.width = window.innerWidth;
    console.log("HEADER INITIALIZED width =>" , this.width)
  }
  public categories: { name: string }[] = categories;

  openNavbar(){
    document.getElementById("mySidenav").style.width = "80%";
  }
  closeNavbar(){
    document.getElementById("mySidenav").style.width = "0px";
  }
}
