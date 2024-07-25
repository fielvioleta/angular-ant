import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {
  private breadcrumbsSubject = new BehaviorSubject<Array<{ label: string, url: string }>>([]);
  breadcrumbs$ = this.breadcrumbsSubject.asObservable();

  constructor(private router: Router) {

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.breadcrumbsSubject.next(this.createBreadcrumbs(this.router.routerState.snapshot.root));
    });

  }

  private createBreadcrumbs(route: ActivatedRouteSnapshot, url: string = '', breadcrumbs: any = []) {
    
    if (route?.routeConfig?.path) {
      const routeURL: any = route.routeConfig ? route.routeConfig.path : '';
      if (routeURL !== null) {
        url += `/${routeURL}`;
      }
      breadcrumbs.push({ label: route?.routeConfig?.path, url });
    }
    
    if (route.children.length > 0) {
      route.children.forEach(child => this.createBreadcrumbs(child, url , breadcrumbs));
    }

    return breadcrumbs;
  }
}
