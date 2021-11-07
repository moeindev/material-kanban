import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {Observable} from "rxjs";
import {Board} from "../models/board";


const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class BoardsServiceService {
  private apiURL = 'http://localhost:3000/boards';

  constructor(private client: HttpClient) {}

  boards(): Observable<Board[]> {
    return this.client.get<Board[]>(this.apiURL);
  }

  board(id: number): Observable<Board> {
    const url = `${this.apiURL}/${id}`;
    return this.client.get<Board>(url);
  }


  add(board: Board): Observable<Board> {
    return this.client.post<Board>(this.apiURL, board, httpOptions);
  }

  delete(board: Board): Observable<Board> {
    const url = `${this.apiURL}/${board.id}`;
    return this.client.delete<Board>(url);
  }

  update(board: Board): Observable<Board> {
    const url = `${this.apiURL}/${board.id}`;
    return this.client.put<Board>(url, board, httpOptions);
  }
}
