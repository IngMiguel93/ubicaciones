import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { SignupComponent } from './examples/signup/signup.component';
import { LandingComponent } from './examples/landing/landing.component';
import { NoFoundComponent } from './components/no-found/no-found.component';
import { TemploComponent } from './components/templo/templo.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { TrasmisionComponent } from './components/trasmision/trasmision.component';

const routes: Routes =[
    { path: '', redirectTo: '**', pathMatch: 'full' },
    { path: 'home',             component: ComponentsComponent },
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'signup',           component: SignupComponent },
    { path: 'landing',          component: LandingComponent },
    { path: 'templo',      component: TemploComponent },
    { path: 'brindis',      component: NoFoundComponent },
    { path: 'asado',      component: NoFoundComponent },
    { path: 'trasmision',      component: TrasmisionComponent },
    { path: 'formulario',      component: FormularioComponent },
    { path: '**',      component: NoFoundComponent },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
