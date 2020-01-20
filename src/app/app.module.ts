import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { BoardComponent } from './board/board.component';
import { GridService } from './services/grid.service';
import { RandoUtilService } from './services/rando-util.service';
import { HttpClientModule } from '@angular/common/http';
import { ActionBarComponent } from './board/action-bar/action-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    BoardComponent,
    ActionBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [GridService, RandoUtilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
