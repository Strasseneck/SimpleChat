import { Component, Input } from '@angular/core';
import { Message } from '../message';

@Component({
  selector: 'app-chat-app',
  templateUrl: './chat-app.component.html',
  styleUrl: './chat-app.component.css'
})
export class ChatAppComponent {

  displayMessage: Message | null = null; 

  // update the value of the new message based on event
  @Input() 
  setDisplayMessage(newMessage: Message) {
    this.displayMessage = newMessage;
    console.log(this.displayMessage)
  }

}
