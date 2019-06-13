import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  {path: 'search', component: SearchComponent},
  {path: '',   redirectTo: '/search', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
        useHash: true, // <-- debugging purposes only
        enableTracing: true
      }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
