import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PhraseDisplayComponent } from "./components/";
import { MainGameRoutingModule } from "./main-game-routing.module";

import { IndexScreen, SetPhraseScreen, GameScreen } from "./screens/";
import { LetterWindowComponent } from "./components/letter-window/letter-window.component";

import { FormsModule } from "@angular/forms";

// Shared Modules
import { UniversalComponentsModule } from "src/app/modules/universal-components/universal-components.module";
import { PhraseSetDisplayComponent } from './components/phrase-set-display/phrase-set-display.component';


@NgModule({
  declarations: [
    PhraseDisplayComponent,
    LetterWindowComponent,
    IndexScreen,
    SetPhraseScreen,
    GameScreen,
    PhraseSetDisplayComponent,
    
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
