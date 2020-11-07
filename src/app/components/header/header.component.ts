import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  auth$ = this.router.events.pipe(map(() => !!this.router.url.includes('auth')));

  constructor(private router: Router) {}
}
