import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';

// Deepak, Parmeet, Kunal --- Modules
import { MatStepperModule } from '@angular/material/stepper';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatCardModule } from '@angular/material/card';

//Divya, Vaishanavi, Manan --- Modules

import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { PrfComponent } from './components/accordians-types/prf/prf.component';
import { ApdiComponent } from './components/accordians-types/apdi/apdi.component';
import { ApdiDialogComponent } from './components/dialog-box/apdi-dialog/apdi-dialog.component';
import { AmComponent } from './components/accordians-types/am/am.component';
import { CdComponent } from './components/accordians-types/cd/cd.component';
import { FacilityComponent } from './components/accordians-types/facility/facility.component';
import { DialogComponentComponent } from './components/dialog-component/dialog-component.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BreadcrumbComponent,
    PrfComponent,
    ApdiComponent,
    ApdiDialogComponent,
    AmComponent,
    CdComponent,
    FacilityComponent,
    DialogComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatExpansionModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatDialogModule,
    MatStepperModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatButtonToggleModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
