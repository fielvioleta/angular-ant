import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkbenchComponent } from './workbench/workbench.component';
import { GenesisComponent } from './genesis/genesis.component';
import { ProjectsComponent } from './projects/projects.component';
import { StudioComponent } from './studio/studio.component';

const routes: Routes = [
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },

  { 
    path: 'workbench', 
    component: WorkbenchComponent,
    children: [
      {
          path: 'genesis',
          component: GenesisComponent,
          children: [
              {
                  path: 'projects',
                  component: ProjectsComponent,
              },
              {
                path: 'studio',
                component: StudioComponent,
              }
          ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
