import { Component, OnInit } from '@angular/core';
import {log} from 'util';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  setActivePoint(event) {
    const navLinks = document.querySelectorAll('nav a');
    if ([].includes.call(navLinks, event.target)) {
      [].forEach.call(navLinks, item => {
        item.classList.remove('active-link');
        if (event.target === item) {
          item.classList.add('active-link');
        }
      });
    }
  }

}
