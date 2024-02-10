import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';


import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatContainerComponent } from './chat-container/chat-container.component';
import { ChatHeaderComponent } from './chat-header/chat-header.component';
import { ChatInputComponent } from './chat-input/chat-input.component';
import { ChatSelectComponent } from './chat-select/chat-select.component';
import { MessageComponent } from './message/message.component';
import { ChatAppComponent } from './chat-app/chat-app.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatContainerComponent,
    ChatHeaderComponent,
    ChatInputComponent,
    ChatSelectComponent,
    MessageComponent,
    ChatAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
