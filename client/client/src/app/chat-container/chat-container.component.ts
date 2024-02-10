import { Component, OnInit} from '@angular/core'
import { ApiClientService } from '../api-client.service';
import { Message } from '../message';
@Component({
  selector: 'app-chat-container',
  templateUrl: './chat-container.component.html',
  styleUrl: './chat-container.component.css'
})
export class ChatContainerComponent implements OnInit{
  
  chatHistory: Message[] = [];
  currentBot: string = 'friendlyBot';

  constructor(private apiClientServices: ApiClientService) {}

  ngOnInit(): void {
    // get friendlyBot messages
    this.apiClientServices.getChatHistory(this.currentBot)
      .subscribe(response => {
        this.chatHistory = response;
        // console.log(this.chatHistory)
      })
  }
}
