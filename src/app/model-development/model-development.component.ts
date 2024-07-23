import { Component } from '@angular/core';

@Component({
  selector: 'app-model-development',
  templateUrl: './model-development.component.html',
  styleUrls: ['./model-development.component.css']
})
export class ModelDevelopmentComponent {
  isShowModal = true;
  records: any = [];
    
  constructor() {
    this.generateRecords();
  }

  showModal(){
    this.isShowModal = true;
  }

  closeModal() {
    this.isShowModal = false;
  }

  generateRecords() {
    const baseDate = new Date(Date.UTC(2024, 0, 1, 1, 0, 0)); 

    for (let i = 1; i <= 16; i++) {
      const projectDate = new Date(baseDate);
      projectDate.setUTCDate(baseDate.getUTCDate() + (i - 1));
      projectDate.setUTCHours(1 + (i - 1) % 24);

      this.records.push({
        name: `Project ${i}`,
        code: `PROJECT_${i}`,
        description: `This is project ${i}`,
        created: projectDate.toISOString()
      });
    }
  }
}
