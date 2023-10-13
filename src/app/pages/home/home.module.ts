import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './components/header/header.component';
import { NavegationComponent } from '../../shared/navegation/navegation.component';
import { StretchedCardComponent } from './components/stretched-card/stretched-card.component';
import { BigCardComponent } from './components/big-card/big-card.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
  HeaderComponent,
  StretchedCardComponent,
  BigCardComponent,
  ],
  exports: [
    HeaderComponent,
    StretchedCardComponent,
    BigCardComponent,

  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    SharedModule,
    FormsModule
  ],
})
export class HomeModule { }
