import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        children: [
          {
            path: 'issues',
            loadChildren: './view/pages/issues/issues.module#IssuesModule'
          },
          {
            path: 'board',
            loadChildren: './view/pages/board/board.module#BoardModule'
          }
        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
