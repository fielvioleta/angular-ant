import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, NonNullableFormBuilder, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-add-genesis-project-modal',
  templateUrl: './add-genesis-project-modal.component.html',
  styleUrls: ['./add-genesis-project-modal.component.css']
})
export class AddGenesisProjectModalComponent {
  @Input() isVisible: boolean = false;
  @Output() closedModal = new EventEmitter();

  isConfirmLoading = false;

  validateForm: FormGroup<{
    projectType: FormControl<any>;
    name: FormControl<string>;
    code: FormControl<string>;
    description: FormControl<string>;
  }>;

  constructor(
    private fb: NonNullableFormBuilder, 
    private router: Router,
    private commonService: CommonService
  ) {
    this.validateForm = this.fb.group({
      projectType: [{ 
        value: this.commonService.formatLabel(this.router.url.split('/').pop()),
        disabled: true
      }],
      name: ['', [Validators.required, this.nameValidator]],
      code: ['', [Validators.required, this.codeValidator]],
      description: ['', [this.descriptionValidator]],
    });

  }

  handleOk() {
    this.submitForm()
  }

  handleCancel() {
    this.isVisible = false;
    this.validateForm.reset();
    this.closedModal.emit();
  }

  submitForm() {
    if (this.validateForm.valid) {
      
      this.isConfirmLoading = true;

      setTimeout(() => {
        this.isVisible = false;
        this.isConfirmLoading = false;
        this.closedModal.emit(this.validateForm.value);
        this.validateForm.reset();
      }, 1000);

    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  isError(name: string) {
    return this.validateForm.get(name)?.invalid && !this.validateForm.get(name)?.pristine;
  }

  codeValidator(control: any) {
    const pattern = /^[a-zA-Z0-9-_]+$/;
    if (!control.value || pattern.test(control.value)) {
      return null;
    }
    return { invalid: true };
  }

  nameValidator(control: any) {
    const pattern = /^[\p{L}\p{N}.,'(){}\[\]"_& -]+$/u;
    if (!control.value || pattern.test(control.value)) {
      return null;
    }
    return { invalid: true };
  }

  descriptionValidator(control: any) {
    const pattern = /^[\p{L}\p{N}.,?!:;'()\[\]"_& /<>-]+$/u;
    if (!control.value || pattern.test(control.value)) {
      return null;
    }
    return { invalid: true };
  }

  getErrorTip(controlName: string) {
    const control = this.validateForm.get(controlName);
    if (control?.hasError('required')) {
      return `${controlName.toUpperCase} input is required`;
    }
    if (control?.hasError('invalid')) {
      return 'Invalid format';
    }
    return '';
  }
}
