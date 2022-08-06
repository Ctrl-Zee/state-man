import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SandBoxComponent } from './components/sand-box/sand-box.component';

const routes: Routes = [
  {
    path: '',
    component: SandBoxComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SandBoxRoutingModule {}
