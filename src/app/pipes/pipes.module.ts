import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortNewDescriptionPipe } from './short-new-description.pipe';



@NgModule({
  declarations: [ ShortNewDescriptionPipe ],
  exports: [
    ShortNewDescriptionPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
