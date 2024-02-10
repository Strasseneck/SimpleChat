import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Message } from './message';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { consumerPollProducersForChange } from '@angular/core/primitives/signals';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {
  
  private baseUrl = 'http://localhost:3000';
  
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  
  constructor(public http: HttpClient) { }


  // get chat history for a bot
  getChatHistory(bot: string): Observable<Message[]> {
    const url = `${this.baseUrl}/messages/${bot}`;
    const httpOptions = {
      headers: new HttpHeaders()
      .set('Content-Type','application/json')
    };
    return this.http.get <Message[]> (url);
  }

  // save a new message
  saveMessage(message: Message): Observable<Message> {
    const url = `${this.baseUrl}/messages`
    return this.http.post<Message>(url, message)
      .pipe(
        catchError(this.handleError('saveMessage', message))
      )
  }

  // get a random bot reply
   getBotReply(bot: string): Observable<Message[]> {
    const url = `${this.baseUrl}/botReply`
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type':  'application/json', 'Bot': `${bot}`})
    };
    return this.http.get <Message[]> (url)
  }

}
