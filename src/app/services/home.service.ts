import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private _http: HttpClient) { }

  getCollectedEmails() {
    return this._http.get(`${environment.apiurl}getAllCollectedEmail`);
  }

  saveAvailableEmail(data) {
    return this._http.post(`${environment.apiurl}/savePosibleEmail`, data);
  }
}
