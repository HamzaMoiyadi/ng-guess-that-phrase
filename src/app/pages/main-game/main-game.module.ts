import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PhraseDisplayComponent } from "./components/";
import { MainGameRoutingModule } from "./main-game-routing.module";

import { MainGamePage } from "./page/main-game.page";
import { LetterWindowComponent } from "./components/letter-window/letter-window.component";

import { FormsModule } from "@angular/forms";

// Shared Modules
import { UniversalComponentsModule } from "src/app/modules/universal-components/universal-components.module";

@NgModule({
  declarations: [PhraseDisplayComponent, MainGamePage, LetterWindowComponent],
  imports: [
    CommonModule,
    MainGameRoutingModule,
    FormsModule,
    UniversalComponentsModule
  ],
  exports: [],
  providers: []
})
export class MainGameModule {}
