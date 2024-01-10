import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Observable} from "rxjs";
import {Item} from "../../model/Item";

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

  createItem(item: Item, username: string, password: string): Observable<Item> {
    const headers = {
      headers: {
        'Content-Type': 'application/json',
        'username': username,
        'password': password,
      }
    };

    return this.http.post<Item>(this.url, item, headers);
  }
}
