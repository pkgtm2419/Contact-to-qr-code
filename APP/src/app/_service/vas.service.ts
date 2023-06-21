import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VasService {

  constructor(private _http: HttpClient) { }

  uploadImageInVAS(data: any): Observable<any[]> {
    return this._http.post<any[]>(`${environment._vasURL}/vas/process-frame`, data);
  }

}
