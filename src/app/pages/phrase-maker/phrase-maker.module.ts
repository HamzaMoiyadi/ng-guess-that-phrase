import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PhraseMakerRoutingModule } from "./phrase-maker-routing.module";
import { PhraseMakerScreen } from "./screens/phrase-maker/phrase-maker.screen";

import { FormsModule,ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [PhraseMakerScreen],
  imports: [CommonModule, PhraseMakerRoutingModule, FormsModule, ReactiveFormsModule]
})
export class PhraseMakerModule {}
