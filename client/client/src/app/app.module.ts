import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ChatContainerComponent } from './chat-container/chat-container.component';
import { ChatHeaderComponent } from './chat-header/chat-header.component';
import { ChatInputComponent } from './chat-input/chat-input.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    ChatContainerComponent,
    ChatHeaderComponent,
    ChatInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
