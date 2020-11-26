import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit() {
    if (window.innerWidth < 635) {
      localStorage.setItem('view', 'mobile');
    } else {
      localStorage.setItem('view', 'desktop');
    }

    localStorage.setItem('role', 'teacher');
  }
}
