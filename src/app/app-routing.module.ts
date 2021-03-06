import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './pages/dashboard/signup/signup.component';
import { LoginComponent } from './pages/dashboard/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProfileComponent } from './pages/dashboard/profile/profile.component';
import { WorkoutplanComponent } from './pages/workoutplan/workoutplan.component';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Home' },
  },
  {
    path: 'workoutplan',
    component: WorkoutplanComponent,
    data: { title: 'Workout Plan' },
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Log in' },
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: { title: 'Dashboard' },
  },
  // profile page that has to include the signed in user's id #
  {
    path: 'dashboard/profile:id',
    component: ProfileComponent,
    data: { title: 'Profile' },
  },
  {
    path: 'signup',
    component: SignupComponent,
    data: { title: 'Sign Up' },
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }, // <-- debugging purposes only
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
