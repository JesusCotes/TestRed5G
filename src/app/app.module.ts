import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChoiceFormComponent } from './choice-form/choice-form.component';
import { FormularyComponent } from './formulary/formulary.component';

const routes: Routes =[
  { path: '', component: ChoiceFormComponent },
  { path: 'formulary', component: FormularyComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    ChoiceFormComponent,
    FormularyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
 RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
