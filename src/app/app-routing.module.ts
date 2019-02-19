import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsFeedsComponent } from './news-feeds/news-feeds.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/News-Feeds', pathMatch: 'full'
  },
  {
    path: 'News-Feeds', component: NewsFeedsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
