import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "./guards/auth/auth.guard";
import { RoleBasedGuard } from "./guards/role-based/role-based.guard";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./pages/home/home.module").then(m => m.HomeModule),
    canActivate: [AuthGuard]
  },
  {
    path: "login",
    loadChildren: () =>
      import("./pages/login/login.module").then(m => m.LoginModule),
    canActivate: [RoleBasedGuard],
    data: { role: "admin" }
  },
  {
    path: "main-game",
    loadChildren: () =>
      import("./pages/main-game/main-game.module").then(m => m.MainGameModule),
    canActivate: [AuthGuard]
  },
  {
    path: "make-phrase-set",
    loadChildren: () =>
      import("./pages/phrase-maker/phrase-maker.module").then(
        m => m.PhraseMakerModule
      ),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
