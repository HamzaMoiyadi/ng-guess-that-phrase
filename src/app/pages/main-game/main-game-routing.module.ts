import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MainGamePage } from './page/main-game.page';

const routes: Routes = [
    { path: '', component: MainGamePage }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainGameRoutingModule {}
