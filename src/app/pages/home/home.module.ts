import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomePage } from "./page/home.page";
import { HomeRoutingModule } from "./home-routing,module";
@NgModule({
  declarations: [HomePage],
  imports: [CommonModule, HomeRoutingModule],
  exports: [],
  providers: []
})
export class HomeModule {}
