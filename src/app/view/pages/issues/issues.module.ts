import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IssuesComponent } from './issues.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [IssuesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: IssuesComponent
      }
    ])
  ]
})
export class IssuesModule { }
