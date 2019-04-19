import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board.component';
import { RouterModule } from '@angular/router';
import { UiKitModule } from '../../../shared/ui-kit/ui-kit.module';

@NgModule({
  declarations: [BoardComponent],
  imports: [
    CommonModule,
    UiKitModule,
    RouterModule.forChild([
      { path: '', component: BoardComponent }
    ])
  ]
})
export class BoardModule {
}
