import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageHomeComponent } from './page/page-home/page-home.component';
import { PageDetailsComponent } from './page/page-details/page-details.component';
import { CmpCommitCardComponent } from './partials/cmp-commit-card/cmp-commit-card.component';
import { CmpFileChangesCardComponent } from './partials/cmp-file-changes-card/cmp-file-changes-card.component';
import { CmpLoadingComponent } from './partials/cmp-loading/cmp-loading.component';

@NgModule({
  declarations: [
    AppComponent,
    PageHomeComponent,
    PageDetailsComponent,
    CmpCommitCardComponent,
    CmpFileChangesCardComponent,
    CmpLoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
