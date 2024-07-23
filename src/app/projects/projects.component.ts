import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  public selectedTab: string = '';

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.firstChild?.params.subscribe(params => {
      this.selectedTab = params['tab'] || 'model-development';
    });
  }
  
  navigateTo(tab: string) {
    this.router.navigate([tab], { relativeTo: this.route });
    this.selectedTab = tab;
  }
}
