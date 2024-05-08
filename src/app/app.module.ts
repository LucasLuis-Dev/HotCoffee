import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './pages/home/home.module';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SmallCardComponent } from './shared/small-card/small-card.component';
import { SearchModule } from './pages/search/search.module';
import { SharedModule } from './shared/shared.module';
import { ShortNewDescriptionPipe } from './pipes/short-new-description.pipe';
import { PipesModule } from './pipes/pipes.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    SearchModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    PipesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
