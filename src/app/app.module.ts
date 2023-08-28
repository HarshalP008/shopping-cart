import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { AddItemFormAComponent } from './add-item-form-a/add-item-form-a.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormService } from './form.service';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingCartComponent,
    AddItemFormAComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [FormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
