import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PhraseDisplayComponent } from "./components/";
import { MainGameRoutingModule } from "./main-game-routing.module";

import { MainGamePage } from "./page/main-game.page";
import { LetterWindowComponent } from "./components/letter-window/letter-window.component";

import { FormsModule } from "@angular/forms";

// Shared Modules
import { UniversalHomeButtonModule } from "src/app/modules/universal-home-button/universal-home-button.module";

@NgModule({
  declarations: [PhraseDisplayComponent, MainGamePage, LetterWindowComponent],
  imports: [
    CommonModule,
    MainGameRoutingModule,
    FormsModule,
    UniversalHomeButtonModule
  ],
  exports: [],
  providers: []
})
export class MainGameModule {}
