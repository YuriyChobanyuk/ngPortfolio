import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';

@Component({
  selector: 'app-navigation',
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass']
})
export class NavigationComponent implements OnInit {
  location: Location;

  constructor(public router: Router, location: Location) {
    this.router = router;
    this.location = location;
  }

  ngOnInit() {
    const navLinks = document.querySelectorAll('nav a');
    [].forEach.call(navLinks, item => {
      if (this.location.isCurrentPathEqualTo('/' + item.getAttribute('routerLink'))) {
        item.classList.add('active-link');
    }
    });
    this.router.events.subscribe(() => {
      [].forEach.call(navLinks, item => {
        if (this.location.isCurrentPathEqualTo('/' + item.getAttribute('routerLink'))) {
          item.classList.add('active-link');
        } else {
          item.classList.remove('active-link');
        }
      });
    });
  }

}
