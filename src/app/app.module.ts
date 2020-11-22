import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { DateComponent } from './components/date/date.component';
import { MenuComponent } from './components/menu/menu.component';
import {registerLocaleData} from '@angular/common';
import localeEs from '@angular/common/locales/es'

registerLocaleData(localeEs, 'es');
@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormComponent,
    DateComponent,
    MenuComponent
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  
  ],
  providers: [{provide: LOCALE_ID, useValue: 'es'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
