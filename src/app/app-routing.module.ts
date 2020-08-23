import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';

const rutas: Routes = [
  // path: '/dashboard' PagesRouting
  // path: '/auth'  AuthRouting
  { path: '',   redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: NopagefoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot( rutas ),
    PagesRoutingModule,
    AuthRoutingModule ],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }
