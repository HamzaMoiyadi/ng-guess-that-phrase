import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./pages/home/home.module").then(m => m.HomeModule)
  },
  {
    path: "main-game",
    loadChildren: () =>
      import("./pages/main-game/main-game.module").then(m => m.MainGameModule)
  },
  {
    path: "phrase-set-maker",
    loadChildren: () =>
      import("./pages/phrase-maker/phrase-maker.module").then(
        m => m.PhraseMakerModule
      )
  },
  {
    path: "phrase-setter",
    loadChildren: () =>
      import("./pages/phrase-setter/phrase-setter.module").then(
        m => m.PhraseSetterModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
