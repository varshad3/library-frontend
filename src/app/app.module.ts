import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AllBooksComponent } from './all-books/all-books.component';
import { RecommentedBooksComponent } from './recommented-books/recommented-books.component';
import { IssuedBooksComponent } from './issued-books/issued-books.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminHomePageComponent } from './admin-home-page/admin-home-page.component';
import {MatButtonModule} from '@angular/material/button';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { AdminMaintabComponent } from './admin-maintab/admin-maintab.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import { AdminAllbooksComponent } from './admin-allbooks/admin-allbooks.component';
import { AdminAddbooksComponent } from './admin-addbooks/admin-addbooks.component';
import { AdminIssuereportComponent } from './admin-issuereport/admin-issuereport.component';
import { AdminRecombooksComponent } from './admin-recombooks/admin-recombooks.component';
import { AdminAllissuedbooksComponent } from './admin-allissuedbooks/admin-allissuedbooks.component';
import { AdminHomeviewComponent } from './admin-homeview/admin-homeview.component';
import { SearchPipe } from './pipes/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    AdminDashboardComponent,
    PageNotFoundComponent,
    HeaderComponent,
    LoginComponent,
    AllBooksComponent,
    RecommentedBooksComponent,
    IssuedBooksComponent,
    AdminLoginComponent,
    AdminHomePageComponent,
    AdminNavbarComponent,
    AdminSidebarComponent,
    AdminMaintabComponent,
    AdminAllbooksComponent,
    AdminAddbooksComponent,
    AdminIssuereportComponent,
    AdminRecombooksComponent,
    AdminAllissuedbooksComponent,
    AdminHomeviewComponent,
    SearchPipe
      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
