import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {ChartsModule} from 'ng2-charts/ng2-charts';
import {DataTableModule} from 'angular2-datatable';
import {NgSlimScrollModule, SLIMSCROLL_DEFAULTS} from 'ngx-slimscroll';
import {MyDatePickerModule} from 'mydatepicker';
import {TooltipModule} from 'ngx-bootstrap/tooltip';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {MorrisJsModule} from 'angular-morris-js';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {enableProdMode} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {EmployeeMainComponent} from './employees/employee-main/employee-main.component';
import {AllEmployeesComponent} from './employees/all-employees/all-employees.component';
import {HolidaysComponent} from './employees/holidays/holidays.component';
import {LeavesComponent} from './employees/leaves/leaves.component';
import {AttendanceComponent} from './employees/attendance/attendance.component';
import {DepartmentsComponent} from './employees/departments/departments.component';
import {DesignationsComponent} from './employees/designations/designations.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {HeaderComponent} from './header/header.component';
import {ClientComponent} from './clients/client/client.component';
import {ClientDetailsComponent} from './clients/client-details/client-details.component';
import {EmployeeDetailsComponent} from './employees/employee-details/employee-details.component';
import {HolidayDetailsComponent} from './employees/holiday-details/holiday-details.component';
import {DepartmentDetailsComponent} from './employees/department-details/department-details.component';
import {DesignationDetailsComponent} from './employees/designation-details/designation-details.component';
import {LeaveDetailsComponent} from './employees/leave-details/leave-details.component';
import {ClientProfileDetailsComponent} from './clients/client-profile-details/client-profile-details.component';
import {ClientProfileEditComponent} from './clients/client-profile-edit/client-profile-edit.component';
import {EmployeeProfileEditComponent} from './employees/employee-profile-edit/employee-profile-edit.component';
import {EmployeeProfileDetailsComponent} from './employees/employee-profile-details/employee-profile-details.component';
import {UsersComponent} from './users/users.component';

import {SettingsmainComponent} from './settings/settingsmain/settingsmain.component';
import {SettingscompanyComponent} from './settings/settingscompany/settingscompany.component';
import {SettingslocalizationComponent} from './settings/settingslocalization/settingslocalization.component';
import {SettingsthemeComponent} from './settings/settingstheme/settingstheme.component';
import {SettingsrolesComponent} from './settings/settingsroles/settingsroles.component';
import {SettingsemailsComponent} from './settings/settingsemails/settingsemails.component';
import {SettingsinvoiceComponent} from './settings/settingsinvoice/settingsinvoice.component';
import {SettingsalaryComponent} from './settings/settingsalary/settingsalary.component';
import {SettingsnotificationsComponent} from './settings/settingsnotifications/settingsnotifications.component';
import {SettingspasswordComponent} from './settings/settingspassword/settingspassword.component';
import {SettingsleaveComponent} from './settings/settingsleave/settingsleave.component';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {RegisterPageComponent} from './pages/register-page/register-page.component';
import {ForgetPageComponent} from './pages/forget-page/forget-page.component';
import {ProfilePageComponent} from './pages/profile-page/profile-page.component';
import {ProfileEditComponent} from './pages/profile-edit/profile-edit.component';
import {AuthService} from './services/auth/auth.service';
import {TokenInterceptor} from './interceptors/token.interceptor';
import {DataService} from './services/data.service';
import {AuthGuard} from './services/auth/auth.guard';
import {TruncatePipe} from './pipes/truncate.pipe';

enableProdMode();

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {
    path: 'users', component: EmployeeMainComponent, children: [
      {path: '', redirectTo: 'all-users', pathMatch: 'full'},
      {path: 'all-users', component: AllEmployeesComponent},
      {path: 'all-users/edit', component: EmployeeDetailsComponent},
      {path: 'recordings', component: DesignationsComponent},
      {path: 'holidays', component: HolidaysComponent},
      {path: 'holidays/edit', component: HolidayDetailsComponent},
      {path: 'all-ponds', component: LeavesComponent},
      {path: 'all-ponds/edit', component: LeaveDetailsComponent},
      {path: 'attendance', component: AttendanceComponent},
      {path: 'departments', component: DepartmentsComponent},
      {path: 'departments/edit', component: DepartmentDetailsComponent},
      {path: 'designations/edit', component: DesignationDetailsComponent}
    ]
  },
  {path: 'clients', component: ClientComponent},
  {path: 'clients/edit', component: ClientDetailsComponent},
  {path: 'clients/profile/details', component: ClientProfileDetailsComponent},
  {path: 'clients/profile/edit', component: ClientProfileEditComponent},
  {path: 'my-ponds', component: UsersComponent},
  {
    path: 'settings', component: SettingsmainComponent, children: [
      {path: '', redirectTo: 'company-settings', pathMatch: 'full'},
      {path: 'company-settings', component: SettingscompanyComponent},
      {path: 'localization', component: SettingslocalizationComponent},
      {path: 'theme-settings', component: SettingsthemeComponent},
      {path: 'roles-permissions', component: SettingsrolesComponent},
      {path: 'email-settings', component: SettingsemailsComponent},
      {path: 'invoive-settings', component: SettingsinvoiceComponent},
      {path: 'salary-settings', component: SettingsalaryComponent},
      {path: 'notifications', component: SettingsnotificationsComponent},
      {path: 'change-password', component: SettingspasswordComponent},
      {path: 'leave-type', component: SettingsleaveComponent}
    ]
  },
  {path: 'pages/login', component: LoginPageComponent},
  {path: 'pages/register', component: RegisterPageComponent},
  {path: 'pages/forgot-password', component: ForgetPageComponent},
  {path: 'profile', component: ProfilePageComponent},
  {path: 'profile/edit', component: ProfileEditComponent},
  {path: '**', redirectTo: 'pages/login'}
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EmployeeMainComponent,
    AllEmployeesComponent,
    HolidaysComponent,
    LeavesComponent,
    AttendanceComponent,
    DepartmentsComponent,
    DesignationsComponent,
    SidebarComponent,
    HeaderComponent,
    ClientComponent,
    ClientDetailsComponent,
    EmployeeDetailsComponent,
    HolidayDetailsComponent,
    DepartmentDetailsComponent,
    DesignationDetailsComponent,
    LeaveDetailsComponent,
    ClientProfileDetailsComponent,
    ClientProfileEditComponent,
    EmployeeProfileEditComponent,
    EmployeeProfileDetailsComponent,
    UsersComponent,
    SettingsmainComponent,
    SettingscompanyComponent,
    SettingslocalizationComponent,
    SettingsthemeComponent,
    SettingsrolesComponent,
    SettingsemailsComponent,
    SettingsinvoiceComponent,
    SettingsalaryComponent,
    SettingsnotificationsComponent,
    SettingspasswordComponent,
    SettingsleaveComponent,
    LoginPageComponent,
    RegisterPageComponent,
    ForgetPageComponent,
    ProfilePageComponent,
    ProfileEditComponent,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ChartsModule,
    DataTableModule,
    NgSlimScrollModule,
    MyDatePickerModule,
    NgxDatatableModule,
    MorrisJsModule,
    HttpClientModule,
    TooltipModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [
    AuthService,
    DataService,
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
    {provide: SLIMSCROLL_DEFAULTS, useValue: {alwaysVisible: false}},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
