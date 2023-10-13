import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmallCardComponent } from './small-card/small-card.component';
import { FooterComponent } from './footer/footer.component';
import { NavegationComponent } from './navegation/navegation.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SmallCardComponent,
    FooterComponent,
    NavegationComponent
  ],
  exports: [
    SmallCardComponent,
    FooterComponent,
    NavegationComponent
  ],
  imports: [
    CommonModule,
    FormsModule

  ]
})
export class SharedModule { }
