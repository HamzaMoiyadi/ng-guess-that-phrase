import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { PhraseMakerScreen } from "./screens/phrase-maker/phrase-maker.screen";
const routes: Routes = [{ path: "", component: PhraseMakerScreen }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhraseMakerRoutingModule {}
