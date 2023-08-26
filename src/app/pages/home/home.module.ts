import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './components/header/header.component';
import { NavegationComponent } from './components/navegation/navegation.component';
import { StretchedCardComponent } from './components/stretched-card/stretched-card.component';
import { SmallCardComponent } from './components/small-card/small-card.component';
import { BigCardComponent } from './components/big-card/big-card.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
  HeaderComponent,
  NavegationComponent,
  StretchedCardComponent,
  SmallCardComponent,
  BigCardComponent,
  FooterComponent,
  ],
  exports: [
    HeaderComponent,
    NavegationComponent,
    StretchedCardComponent,
    SmallCardComponent,
    BigCardComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    FormsModule
  ],
})
export class HomeModule { }
