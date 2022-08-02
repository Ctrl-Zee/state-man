import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';

// Prime NG
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, CardModule, ButtonModule],
  exports: [HeaderComponent, CardModule, ButtonModule],
})
export class SharedModule {}
