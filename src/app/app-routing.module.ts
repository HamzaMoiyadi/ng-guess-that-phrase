import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "./guards/auth/auth.guard";

const routes: Routes = [
  {
    path: "login",
    loadChildren: () =>
      import("./pages/login/login.module").then(m => m.LoginModule)
  },

  {
    path: "",
    loadChildren: () =>
      import("./pages/home/home.module").then(m => m.HomeModule),
    canActivate: [AuthGuard]
  },
  {
    path: "main-game",
    loadChildren: () =>
      import("./pages/main-game/main-game.module").then(m => m.MainGameModule),
    canActivate: [AuthGuard]
  },
  {
    path: "phrase-set-maker",
    loadChildren: () =>
      import("./pages/phrase-maker/phrase-maker.module").then(
        m => m.PhraseMakerModule
      ),
    canActivate: [AuthGuard]
  },
  {
    path: "phrase-setter",
    loadChildren: () =>
      import("./pages/phrase-setter/phrase-setter.module").then(
        m => m.PhraseSetterModule
      ),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
