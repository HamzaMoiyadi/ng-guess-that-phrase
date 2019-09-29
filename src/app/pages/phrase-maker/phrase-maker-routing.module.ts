import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { PhraseMakerPage } from "./page/phrase-maker.page";
const routes: Routes = [{ path: "", component: PhraseMakerPage }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhraseMakerRoutingModule {}
