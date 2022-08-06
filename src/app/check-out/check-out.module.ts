import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckOutRoutingModule } from './check-out-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CheckOutComponent } from './components/check-out/check-out.component';

@NgModule({
  declarations: [CheckOutComponent],
  imports: [CommonModule, CheckOutRoutingModule, SharedModule],
})
export class CheckOutModule {}
