import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmallCardComponent } from './small-card/small-card.component';
import { FooterComponent } from './footer/footer.component';
import { NavegationComponent } from './navegation/navegation.component';
import { FormsModule } from '@angular/forms';
import { LoaderComponent } from './loader/loader.component';
import { ShortNewDescriptionPipe } from '../pipes/short-new-description.pipe';
import { PipesModule } from '../pipes/pipes.module';



@NgModule({
  declarations: [
    SmallCardComponent,
    FooterComponent,
    NavegationComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PipesModule
  ],
  exports: [
    SmallCardComponent,
    FooterComponent,
    NavegationComponent,
    LoaderComponent
  ],
  
})
export class SharedModule { }
