import { SetupComponent } from './setup/setup.component';
import { SpecCityComponent } from './components/spec-city/spec-city.component';
import { ConfComponent } from './components/conf/conf.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  // { path: 'home', component: HomeComponent },
  { path: 'setup', component: SetupComponent },
  { path: 'spec-city/:id', component: SpecCityComponent },

  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
