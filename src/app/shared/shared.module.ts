import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';

// Prime NG
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    RouterModule,
  ],
  exports: [
    CommonModule,
    HeaderComponent,
    CardModule,
    ButtonModule,
    InputTextModule,
    RouterModule,
  ],
})
export class SharedModule {}
