import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-add-genesis-project-modal',
  templateUrl: './add-genesis-project-modal.component.html',
  styleUrls: ['./add-genesis-project-modal.component.css']
})
export class AddGenesisProjectModalComponent {
  @Input() isVisible: boolean = false;
  @Output() closedModal = new EventEmitter<void>();

  isConfirmLoading = false;

  constructor() {}

  handleOk() {
    this.isConfirmLoading = true;

    setTimeout(() => {
      this.isVisible = false;
      this.isConfirmLoading = false;
      this.closedModal.emit();
    }, 1000);
  }

  handleCancel() {
    this.isVisible = false;
    this.closedModal.emit();
  }
}
