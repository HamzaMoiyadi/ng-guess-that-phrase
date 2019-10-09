import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PhraseMakerRoutingModule } from "./phrase-maker-routing.module";
import { PhraseMakerScreen } from "./screens/phrase-maker/phrase-maker.screen";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PhraseFormComponent } from "./components/phrase-form/phrase-form.component";
import { UniversalComponentsModule } from "src/app/modules/universal-components/universal-components.module";
@NgModule({
  declarations: [PhraseMakerScreen, PhraseFormComponent],
  imports: [
    CommonModule,
    PhraseMakerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    UniversalComponentsModule
  ]
})
export class PhraseMakerModule {}
