import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = `${environment.backendUrl}/customer`
  }

  authenticate(email: string, password: string): Observable<any> {
    const credentials = {email, password};
    return this.http.post(`${this.url}/customer`, credentials);
  }
}
