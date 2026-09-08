import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard/dashboard';
import { Contact } from './dashboard/header/contact/contact';
import { Content } from './dashboard/dashboard/content/content';
import { EmpDashboard } from './emp-dashboard/emp-dashboard';
import { Services } from './dashboard/header/services/services';
import { ReactiveForms } from './reactive-forms/reactive-forms';
import { Signals } from './signals/signals';
import { RXJS } from './rxjs/rxjs';
import { Login } from './login/login';
import { authGuard } from './auth/auth-guard';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: Login
  },
  {
    path: 'dashboard',
    component: Dashboard,
    canActivate: [authGuard],
    children: [
      {
        path: '',
        component: Content
      },
      {
        path: 'content',
        component: Content
      },
      {
        path: 'contact',
        component: Contact
      },
      {
        path: 'contact/:id',
        component: Contact
      },
      {
        path: 'services',
        component: Services
      },
      {
        path: 'emp-dashboard',
        component: EmpDashboard
      },
      {
        path: 'reactive-forms',
        component: ReactiveForms
      },
      {
        path: 'signals',
        component: Signals
      },
      {
        path: 'student-list',
        loadComponent: () => import('./students/student-list/student-list')
          .then((m) => m.StudentList)
      },
      {
        path: 'students/add',
        loadComponent: () => import('./students/student-form/student-form')
          .then((m) => m.StudentForm)
      },
      {
        path: 'students/edit/:id',
        loadComponent: () => import('./students/student-form/student-form')
          .then((m) => m.StudentForm)
      },
      {
        path: 'students/:id',
        loadComponent: () => import('./students/student-detail/student-detail')
          .then((m) => m.StudentDetail)
      },
      {
        path: 'rxjs',
        component: RXJS
      }
    ]
  },

  // try - lazy loading ::
  // this route for parent/ child route :

  {
    path: 'employee',
    component: EmpDashboard,

    children: [
      {
        path: 'list',
        component: Content
      },
      {
        path: 'contact',
        component: Services
      }
    ]
  },

  // redirect Route ::
  {
    path: 'emp',
    redirectTo: 'emp-dashboard',
    pathMatch: 'full'
  },


  // Route Data - Static information attached to a route.
  {
    path: 'extra',
    component: ReactiveForms,
    data: {
      title: 'New Reactive Forms',
      description: 'This is a new reactive forms page'
    }
  },
  // {
  //   path: '**',
  //   component: NotFoundComponent
  // }
  {
    path: '**',
    redirectTo: 'login'
  }
];
