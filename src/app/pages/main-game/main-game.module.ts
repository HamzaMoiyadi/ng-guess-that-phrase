import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PhraseDisplayComponent } from "./components/";
import { MainGameRoutingModule } from "./main-game-routing.module";

import { IndexScreen, SetPhraseScreen, GameScreen } from "./screens/";
import { LetterWindowComponent } from "./components/letter-window/letter-window.component";

import { FormsModule } from "@angular/forms";

// Shared Modules
import { UniversalComponentsModule } from "src/app/modules/universal-components/universal-components.module";
import { PhraseSetterPage } from "../phrase-setter/page/phrase-setter.page";

@NgModule({
  declarations: [
    PhraseDisplayComponent,
    LetterWindowComponent,
    PhraseSetterPage,
    IndexScreen,
    SetPhraseScreen,
    GameScreen
  ],
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
