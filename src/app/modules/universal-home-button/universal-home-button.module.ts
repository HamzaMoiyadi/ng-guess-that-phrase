import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UniversalHomeButtonComponent } from "./components/universal-home-button/universal-home-button.component";
import { UHBRoutingModule } from "./universal-home-button-routing.module";
@NgModule({
  declarations: [UniversalHomeButtonComponent],
  imports: [CommonModule, UHBRoutingModule],
  exports: [UniversalHomeButtonComponent, CommonModule, UHBRoutingModule]
})
export class UniversalHomeButtonModule {}
