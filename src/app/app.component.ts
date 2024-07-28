import { Component, OnInit } from '@angular/core';
import { AppearanceService } from './portfolio-module/services/appearance.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-my-portfolio-v3';

  ngOnInit(): void {}
}
