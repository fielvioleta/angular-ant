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
}
