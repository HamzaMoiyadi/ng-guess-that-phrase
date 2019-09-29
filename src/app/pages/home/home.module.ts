import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomePage } from "./page/home.page";
import { HomeRoutingModule } from "./home-routing,module";

// Shared Modules
import { UniversalComponentsModule } from "src/app/modules/universal-components/universal-components.module";
@NgModule({
  declarations: [HomePage],
  imports: [CommonModule, HomeRoutingModule, UniversalComponentsModule],
  exports: [],
  providers: []
})
export class HomeModule {}
