import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CandidatesComponent } from './candidates/candidates.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { InfoDialogComponent } from './candidates/info-dialog/info-dialog.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    CandidatesComponent,
    NavbarComponent,
    FooterComponent,
    InfoDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    HttpClientModule,
    MatDialogModule,
    MatTooltipModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
