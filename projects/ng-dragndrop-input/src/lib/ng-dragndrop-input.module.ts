import { NgModule } from '@angular/core';
import { NgDragndropInputComponent } from './ng-dragndrop-input.component';
import { DragNDropDirective } from './directives/drag-n-drop.directive';



@NgModule({
  declarations: [NgDragndropInputComponent, DragNDropDirective],
  imports: [
  ],
  exports: [NgDragndropInputComponent]
})
export class NgDragndropInput { }
