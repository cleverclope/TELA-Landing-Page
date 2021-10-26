import { AboutComponent } from './about/about.component';
import { TelaHealthComponent } from './tela-health/tela-health.component';
import { TelaVaccinationComponent } from './tela-vaccination/tela-vaccination.component';
import { TelaSchoolComponent } from './tela-school/tela-school.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo: "home", pathMatch:"full"},
  {path:'schools', component: TelaSchoolComponent},
  {path:'health', component: TelaHealthComponent},
  {path:'vaccination', component: TelaVaccinationComponent},
  {path:'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
