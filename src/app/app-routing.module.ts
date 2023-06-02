import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { AllBooksComponent } from './all-books/all-books.component';
import { RecommentedBooksComponent } from './recommented-books/recommented-books.component';
import { IssuedBooksComponent } from './issued-books/issued-books.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminHomePageComponent } from './admin-home-page/admin-home-page.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { AdminMaintabComponent } from './admin-maintab/admin-maintab.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { AdminAllbooksComponent } from './admin-allbooks/admin-allbooks.component';
import { AdminAddbooksComponent } from './admin-addbooks/admin-addbooks.component';
import { AdminIssuereportComponent } from './admin-issuereport/admin-issuereport.component';
import { AdminRecombooksComponent } from './admin-recombooks/admin-recombooks.component';
import { AdminAllissuedbooksComponent } from './admin-allissuedbooks/admin-allissuedbooks.component';
import { AdminHomeviewComponent } from './admin-homeview/admin-homeview.component';
const routes: Routes = [
  {
    path:'', component:HeaderComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'adminlogin',component:AdminLoginComponent
  },
  {
    path:'adminhmpage',component:AdminHomePageComponent
  },
  {
    path:'register',component:RegisterComponent
  },
  {
    path:'dashboard',component:AdminDashboardComponent
  },
  {
    path:'all-books',component:AllBooksComponent
  },
  {
    path:'adminnavbar',component:AdminNavbarComponent
  },
  {
    path:'adminmaintab',component:AdminMaintabComponent
  },
  {
    path:'adminsidebar',component:AdminSidebarComponent
  },
  {
    path:'recommented',component:RecommentedBooksComponent
  },
  {
    path:'adminbooks',component:AdminAllbooksComponent
  },
  {
    path:'adminadd',component:AdminAddbooksComponent
  },
  {
    path:'adminissue',component:AdminIssuereportComponent
  },
  {
    path:'adminrecobooks',component:AdminRecombooksComponent
  },
  {
    path:'adminallissue',component:AdminAllissuedbooksComponent
  },
  {
    path:'adminhmview',component:AdminHomeviewComponent
  },
  {
    path:'issuedbook',component:IssuedBooksComponent
  },
  {
    path:'**',component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
