import { Component, Output, EventEmitter} from '@angular/core';
import { ApiClientService } from '../api-client.service';
import { Message } from '../message';
@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrl: './chat-input.component.css'
})
export class ChatInputComponent {

  content: string = '';
  // message: Message;

  constructor(private apiClientServices: ApiClientService) {}

  // save a new message on the server
  saveMessage(content: string) {
    const newMessage = {
      author: 'user',
      content: content, 
      timestamp: 'testtimestamp'
    }
    this.apiClientServices.saveMessage(newMessage)
    .subscribe(response => {
      console.log(response);
      this.sendNewMessage(response);
    })
  }

  @Output() newMessageSent = new EventEmitter <Message>();

  sendNewMessage (newMessage: Message) {
    this.newMessageSent.emit(newMessage)
  }


}

