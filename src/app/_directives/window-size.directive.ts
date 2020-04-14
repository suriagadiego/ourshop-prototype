import { Directive, OnInit } from '@angular/core';
import { fromEvent, Observable, Subscription } from "rxjs";

@Directive({
  selector: '[appWindowSize]'
})
export class WindowSizeDirective implements OnInit{
  public innerWidth: any;
  resizeObservable$: Observable<Event>
  resizeSubscription$: Subscription

  constructor() { }
  ngOnInit(){
    this.resizeObservable$ = fromEvent(window, 'resize')
    this.resizeSubscription$ = this.resizeObservable$.subscribe( evt => {
      this.innerWidth = window.innerWidth
      console.log("TRUEASD " + innerWidth)
    })
  }
}
