import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showEmailForm: boolean = false;
  private subject = new Subject<any>();

  constructor() { }
  
  toggleEmailForm(): void {
    this.showEmailForm = !this.showEmailForm;
    this.subject.next(this.showEmailForm);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
  
}
