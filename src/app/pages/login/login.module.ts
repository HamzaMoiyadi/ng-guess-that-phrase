import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPage } from './page/login.page';
import { UniversalComponentsModule } from 'src/app/modules/universal-components/universal-components.module';



@NgModule({
  declarations: [LoginPage],
  imports: [
    CommonModule,
    UniversalComponentsModule
  ]
})
export class LoginModule { }
