import {Route} from "@angular/router";
import {HomeComponent} from "./app/home/home/home.component";
export const routes: Route[] = [
  {path: '', pathMatch: 'full', redirectTo: '/home'},
  {
    path: 'home',
    component: HomeComponent
  }, {
    path: 'about',
    loadChildren: 'app/about/about.module#AboutModule'
  },
  { path: '**', redirectTo: '/home'}
];
