import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PhraseSetterPage } from "./page/phrase-setter.page";
import { PhraseSetterRoutingModule } from './phrase-setter-routing.module';


@NgModule({
  declarations: [PhraseSetterPage],
  imports: [CommonModule, PhraseSetterRoutingModule]
})
export class PhraseSetterModule {}
