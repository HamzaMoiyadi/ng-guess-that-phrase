import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginPage } from "./page/login.page";
import { UniversalComponentsModule } from "src/app/modules/universal-components/universal-components.module";
import { LoginRoutingModule } from "./login-routing.module";

@NgModule({
  declarations: [LoginPage],
  imports: [CommonModule, LoginRoutingModule, UniversalComponentsModule]
})
export class LoginModule {}
