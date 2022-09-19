import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Angular Email App';
  showAddTask: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
