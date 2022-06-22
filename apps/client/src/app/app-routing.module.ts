import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [
//   { path: 'heroes', component: HeroesComponent },
//   { path: 'home', component: DashboardComponent },
//   { path: '', redirectTo: '/home', pathMatch: 'full' },
//   { path: 'post/:id', component: HeroDetailComponent },
// ];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
