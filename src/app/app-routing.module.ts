import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// route Pagers
import { SildeMenuComponent } from './pages/silde-menu/silde-menu.component';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  {path: 'sildemenu', component: SildeMenuComponent},
  {path: '' , redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: '**', redirectTo: '/home', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
