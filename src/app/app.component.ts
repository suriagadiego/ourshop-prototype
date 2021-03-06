import { Component } from '@angular/core';
import { fromEvent, Observable, Subscription } from "rxjs";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public innerWidth: any;
  resizeObservable$: Observable<Event>
  resizeSubscription$: Subscription
  title = 'ourshopPrototype';
  ngOnInit() {
    this.resizeObservable$ = fromEvent(window, 'resize')
    this.resizeSubscription$ = this.resizeObservable$.subscribe( evt => {
      this.innerWidth = window.innerWidth
      // console.log(innerWidth)
    })  
}
}
