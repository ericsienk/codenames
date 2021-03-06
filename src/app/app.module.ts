import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { BoardComponent } from './board/board.component';
import { GridService } from './services/grid.service';
import { RandoUtilService } from './services/rando-util.service';
import { HttpClientModule } from '@angular/common/http';
import { ActionBarComponent } from './action-bar/action-bar.component';
import { MenuComponent } from './menu/menu.component';
import { AnswersComponent } from './answers/answers.component';
import { GameComponent } from './game/game.component';
import { SettingsComponent } from './settings/settings.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ControlBarComponent } from './answers/control-bar/control-bar.component';
import { BarComponent } from './bar/bar.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    BoardComponent,
    ActionBarComponent,
    MenuComponent,
    AnswersComponent,
    GameComponent,
    SettingsComponent,
    NavbarComponent,
    ControlBarComponent,
    BarComponent
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
