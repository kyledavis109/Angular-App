import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iinfo } from 'interface/info';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient) { }
  sendEmail(obj: any): Observable<Iinfo> {
    return this.http.post<Iinfo>('http://localhost:5000/sendEmail', obj);
  }
}
