import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Email } from 'interface/email';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient) { }
  sendEmail(obj: any): Observable<Email> {
    return this.http.post<Email>('http://localhost:5000/sendEmail', obj);
  }
}
