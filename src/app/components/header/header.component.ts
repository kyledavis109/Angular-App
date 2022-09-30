import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Angular Emailer';
  showEmailForm: boolean = true;
  subscription!: Subscription;

  constructor(private uiService: UiService, private router: Router) { 
    this.subscription = this.uiService.onToggle().subscribe((value) => (this.showEmailForm = value));
  }

  ngOnInit(): void {
  }

  toggleEmailForm() {
    this.uiService.toggleEmailForm();
  }

  hasRoute(route: string) {
    return this.router.url === route;
  }

}
