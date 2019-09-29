import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UniversalHomeButtonComponent } from "./components/universal-home-button/universal-home-button.component";
import { UniversalComponentsRoutingModule } from "./universal-components-routing.module";
import { SignOutButtonComponent } from "./components/sign-out-button/sign-out-button.component";
import { SignInButtonComponent } from "./components/sign-in-button/sign-in-button.component";

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

@NgModule({
  declarations: [
    UniversalHomeButtonComponent,
    SignOutButtonComponent,
    SignInButtonComponent
  ],
  imports: [CommonModule, UniversalComponentsRoutingModule, FontAwesomeModule],
  exports: [
    SignOutButtonComponent,
    SignInButtonComponent,
    UniversalHomeButtonComponent,
    CommonModule,
    UniversalComponentsRoutingModule
  ]
})
export class UniversalComponentsModule {}
