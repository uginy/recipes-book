import { Component } from '@angular/core';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  providers: [ConfirmationService]
})
export class ConfirmationComponent {
  constructor(private confirmationService: ConfirmationService) {}
}
