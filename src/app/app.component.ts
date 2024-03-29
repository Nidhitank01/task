import { Component, OnInit } from '@angular/core';
import { Router,RouterEvent,Event, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { filter } from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Task1';
  showLoader: boolean = false;
 constructor(private router:Router){}

  ngOnInit()
  {
      this.router.events.subscribe((routerEvent:Event)=>
      {
        if(routerEvent instanceof NavigationStart){
          this.showLoader=true;
        }
        if(routerEvent instanceof NavigationEnd || routerEvent instanceof NavigationCancel
          || routerEvent instanceof NavigationError){
          this.showLoader=false
        }
      })
  }
}
