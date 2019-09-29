import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PhraseDisplayComponent } from "./components/";
import { MainGameRoutingModule } from "./main-game-routing.module";

import { MainGamePage } from "./page/main-game.page";
import { LetterWindowComponent } from './components/letter-window/letter-window.component';

import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [PhraseDisplayComponent, MainGamePage, LetterWindowComponent],
  imports: [CommonModule, MainGameRoutingModule, FormsModule],
  exports: [],
  providers: []
})
export class MainGameModule {}
