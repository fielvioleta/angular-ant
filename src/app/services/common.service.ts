import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  formatLabel(label: any): any {
    return label
      .replace(/-/g, ' ') // Replace hyphens with spaces
      .replace(/\b\w/g, (char: any) => char.toUpperCase()); // Capitalize the first letter of each word
  }

  generateRecords(): Promise<any[]> {
    return new Promise((resolve) => {
      const baseDate = new Date(Date.UTC(2024, 0, 1, 1, 0, 0)); 
      const records = [];
  
      for (let i = 1; i <= 16; i++) {
        const projectDate = new Date(baseDate);
        projectDate.setUTCDate(baseDate.getUTCDate() + (i - 1));
        projectDate.setUTCHours(1 + (i - 1) % 24);
  
        records.push({
          name: `Project ${i}`,
          code: `PROJECT_${i}`,
          description: `This is project ${i}`,
          created: projectDate.toISOString()
        });
      }
  
      resolve(records);
    });
  }
}
