import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BreadcrumbService } from './services/breadcrumb.service';
import { CommonService } from './services/common.service';

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
    private breadcrumbService: BreadcrumbService,
    private commonService:CommonService
  ) {
    this.translate.setDefaultLang('en');

    this.breadcrumbService.breadcrumbs$.subscribe((breadcrumbs: any) => {
      this.breadcrumbs = breadcrumbs
    });
  }

  switchLanguage(language: string) {
    this.translate.setDefaultLang(language);
  }

  formatLabel(string: any) {
    return this.commonService.formatLabel(string);
  }
}
