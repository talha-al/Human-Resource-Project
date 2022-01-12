import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { CandidatesComponent } from './candidates/candidates.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'aboutUs', component: AboutUsComponent },
  { path: 'candidates', component: CandidatesComponent },
  { path: "**", component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
