import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { SmallCardComponent } from '../home/components/small-card/small-card.component';
import { HomeModule } from '../home/home.module';



@NgModule({
  declarations: [
    SearchComponent,
  ],
  exports: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    HomeModule
  ]
})
export class SearchModule { }
