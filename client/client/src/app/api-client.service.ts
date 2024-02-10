import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Message } from './message';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {
  
  private baseUrl = 'http://localhoste:3000';
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  

  constructor(public http: HttpClient) { }


  // get chat history for a bot
  getChatHistory(bot: string): Observable<Message[]> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type':  'application/json', 'Chat': `${bot}`})
    };
    return this.http.get <Message[]> (`${this.baseUrl}/messages`);
  }

  // save a new message
  saveMessage(message: Message): Observable<Message> {
    return this.http.post<Message>(`${this.baseUrl}/messages`, message)
      .pipe(
        catchError(this.handleError('saveMessage', message))
      )
  }

}
