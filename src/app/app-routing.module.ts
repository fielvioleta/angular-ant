import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkbenchComponent } from './workbench/workbench.component';
import { GenesisComponent } from './genesis/genesis.component';
import { ProjectsComponent } from './projects/projects.component';
import { StudioComponent } from './studio/studio.component';
import { ModelDevelopmentComponent } from './model-development/model-development.component';
import { ModelValidationComponent } from './model-validation/model-validation.component';

const routes: Routes = [
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
                  children: [
                    {
                      path: 'model-development',
                      component: ModelDevelopmentComponent
                    },
                    {
                      path: 'model-validation',
                      component: ModelValidationComponent
                    }
                  ]
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
