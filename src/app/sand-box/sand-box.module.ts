import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SandBoxRoutingModule } from './sand-box-routing.module';
import { SandBoxComponent } from './components/sand-box/sand-box.component';

@NgModule({
  declarations: [SandBoxComponent],
  imports: [CommonModule, SandBoxRoutingModule],
})
export class SandBoxModule {}
