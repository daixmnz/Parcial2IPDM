import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full' },
  { path: 'search', loadChildren: () => import('./search/search.module').then(m => m.SearchPageModule) },
  { path: 'listing', loadChildren: () => import('./listing/listing.module').then(m => m.ListingPageModule) },
  { path: 'details/:id', loadChildren: () => import('./details/details.module').then(m => m.DetailsPageModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }