import { Component } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-model-validation',
  templateUrl: './model-validation.component.html',
  styleUrls: ['./model-validation.component.css']
})
export class ModelValidationComponent {
  isShowModal = false;
  records: any = [];
    
  constructor(
    private commonService: CommonService
  ) {
    this.commonService.generateRecords().then(res => {
        this.records = res;
    });
  }

  showModal(){
    this.isShowModal = true;
  }

  closeModal() {
    this.isShowModal = false;
  }
}
