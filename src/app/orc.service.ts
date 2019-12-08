import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ORCService {
baseURL = 'http://localhost:5000/' ;
  constructor(private http: HttpClient) { }


  upload_file(file): Observable<any> {
    const formData: any = new FormData();
    formData.append('file', file);

    return this.http.post(
      this.baseURL + `api/upload`,
      formData , {responseType: 'text'}
    );
  }
  getText(pdf): Observable<any> {
    return this.http.get(this.baseURL + `api/ocr/${pdf}`);
  }
}
