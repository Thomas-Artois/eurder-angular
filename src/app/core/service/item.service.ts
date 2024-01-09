import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {Item} from "../model/Item";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private url: string;
  constructor(private http: HttpClient) {
    this.url = `${environment.backendUrl}/item`
  }

  getItems(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }
}
