import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertComponent } from './alert/alert.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { PlaceholderDirective } from './placeholder/placeholder.directive';
import { DropdownDirective } from './dropdown.directive';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
@NgModule({
  declarations: [
    AlertComponent,
    LoadingSpinnerComponent,
    PlaceholderDirective,
    DropdownDirective
  ],
  imports: [CommonModule, ConfirmDialogModule],
  exports: [
    AlertComponent,
    LoadingSpinnerComponent,
    PlaceholderDirective,
    DropdownDirective,
    CommonModule,
    ConfirmDialogModule
  ],
  entryComponents: [AlertComponent]
})
export class SharedModule {}
