import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PhraseMakerRoutingModule } from "./phrase-maker-routing.module";
import { PhraseMakerPage } from "./page/phrase-maker.page";

import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [PhraseMakerPage],
  imports: [CommonModule, PhraseMakerRoutingModule, FormsModule]
})
export class PhraseMakerModule {}
