import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient) { }
  sendEmail(body: any) {
    return this.http.post('http://localhost:5000/sendEmail', body);
  }
}
