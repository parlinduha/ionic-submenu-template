import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/menu/main',
    pathMatch: 'full',
  },
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: 'main',
        loadChildren: () =>
          import('../main/main.module').then((m) => m.MainPageModule),
      },
      {
        path: 'ionic',
        loadChildren: () =>
          import('../ionic/ionic.module').then((m) => m.IonicPageModule),
      },
      {
        path: 'flutter',
        loadChildren: () =>
          import('../flutter/flutter.module').then((m) => m.FlutterPageModule),
      },
      {
        path: 'django',
        loadChildren: () =>
          import('../django/django.module').then((m) => m.DjangoPageModule),
      },
      {
        path: 'firebase',
        loadChildren: () =>
          import('../firebase/firebase.module').then(
            (m) => m.FirebasePageModule
          ),
      },
      {
        path: 'react',
        loadChildren: () =>
          import('../react/react.module').then((m) => m.ReactPageModule),
      },
      {
        path: 'angular',
        loadChildren: () =>
          import('../angular/angular.module').then((m) => m.AngularPageModule),
      },
      {
        path: 'aws',
        loadChildren: () =>
          import('../aws/aws.module').then((m) => m.AwsPageModule),
      },
      {
        path: 'expressjs',
        loadChildren: () =>
          import('../expressjs/expressjs.module').then(
            (m) => m.ExpressjsPageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
