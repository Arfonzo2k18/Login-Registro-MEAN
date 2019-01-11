import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { HomeComponent } from './components/home/home.component';
import { CoursesComponent } from './components/courses/courses.component';
import { AuthGuardService } from './services/auth-guard.service';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

const routes: Routes = [
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'userprofile',
    component: UserProfileComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'courses',
    component: CoursesComponent
  },
  {
    path: 'courses/:id',
    component: CourseDetailsComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'not-found',
    component: NotfoundComponent
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
