import { Component } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-model-development',
  templateUrl: './model-development.component.html',
  styleUrls: ['./model-development.component.css']
})
export class ModelDevelopmentComponent {
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

  closeModal(event: any) {
    
    this.isShowModal = false;

    this.records = [{...event, created: new Date().toISOString()}, ...this.records];
  }
}
