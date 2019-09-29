import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { PhraseSetterPage } from "./page/phrase-setter.page";
const routes: Routes = [{ path: "", component: PhraseSetterPage }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhraseSetterRoutingModule {}
