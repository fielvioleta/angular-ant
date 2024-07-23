import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BreadcrumbService } from './services/breadcrumb.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isCollapsed = false;
  breadcrumbs: Array<{ label: string, url: string }> = [];

  constructor(
    private translate: TranslateService,
    private breadcrumbService: BreadcrumbService
  ) {
    this.translate.setDefaultLang('en');

    this.breadcrumbService.breadcrumbs$.subscribe((breadcrumbs: any) => {
      this.breadcrumbs = breadcrumbs
    });
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }

  formatLabel(label: string): string {
    return label
      .replace(/-/g, ' ') // Replace hyphens with spaces
      .replace(/\b\w/g, char => char.toUpperCase()); // Capitalize the first letter of each word
  }
}
