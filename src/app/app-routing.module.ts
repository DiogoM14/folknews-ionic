import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'ultimas',
    pathMatch: 'full'
  },
  {
    path: ':categoria',
    loadChildren: () => import('./screens/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'new-details/:id',
    loadChildren: () => import('./screens/new-details/new-details.module').then( m => m.NewDetailsPageModule)
  },
  {
    path: 'categorias/home',
    loadChildren: () => import('./screens/categories/categories.module').then( m => m.CategoriesPageModule)
  },
  {
    path: 'search/home',
    loadChildren: () => import('./screens/search/search.module').then( m => m.SearchPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
