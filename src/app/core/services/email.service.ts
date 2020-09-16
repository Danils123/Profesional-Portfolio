import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Email } from '../../shared/models/Email.Model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private path: string = 'https://lit-hollows-62072.herokuapp.com/sendmail';
  constructor(private http: HttpClient) {}

  sendEmail(mail: Email): Observable<Email> {
    return this.http.post<Email>(this.path, mail);
  }
}
