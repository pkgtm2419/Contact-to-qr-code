import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private _http: HttpClient) { }

  createContact(data: any): Observable<any[]> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'})};
    return this._http.post<any[]>(`${environment._url}/contact/create`, data, httpOptions);
  }

  getContactList(): Observable<any[]> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'})};
    return this._http.get<any[]>(`${environment._url}/contact`, httpOptions);
  }

  countryCode(): Observable<any[]> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'})};
    return this._http.get<any[]>(`../../assets/CountryCodes.json`, httpOptions);
  }

  getContactDetails(id: number): Observable<any[]> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'})};
    return this._http.get<any[]>(`${environment._url}/contact/${id}`, httpOptions);
  }

  deleteContactData(id: number): Observable<any[]> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'})};
    return this._http.get<any[]>(`${environment._url}/contact/delete/${id}`, httpOptions);
  }

  updateContactData(data: any, id: number): Observable<any[]> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'})};
    return this._http.post<any[]>(`${environment._url}/contact/update/${id}`, data, httpOptions);
  }

  uploadFiles(data: any): Observable<any[]> {
    const httpOptions = { headers: new HttpHeaders({})};
    return this._http.post<any[]>(`${environment._url}/contact/upload`, data, httpOptions);
  }
}
