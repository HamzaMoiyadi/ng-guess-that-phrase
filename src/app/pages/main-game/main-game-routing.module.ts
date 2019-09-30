import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { SetPhraseScreen, IndexScreen, GameScreen } from "./screens";

const routes: Routes = [
  { path: "", component: IndexScreen },
  { path: "set-phrase", component: SetPhraseScreen },
  { path: "game", component: GameScreen },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainGameRoutingModule {}
