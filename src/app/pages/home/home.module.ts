import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomePage } from "./page/home.page";
import { HomeRoutingModule } from "./home-routing,module";

// Shared Modules
import { UniversalHomeButtonModule } from "src/app/modules/universal-home-button/universal-home-button.module";
@NgModule({
  declarations: [HomePage],
  imports: [CommonModule, HomeRoutingModule, UniversalHomeButtonModule],
  exports: [],
  providers: []
})
export class HomeModule {}
