import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { NewDetailsPage } from './new-details/new-details.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'ultimas',
    pathMatch: 'full'
  },
  {
    path: 'desporto',
    component: HomePage
  },
  {
    path: 'popular',
    component: HomePage
  },
  {
    path: 'saude',
    component: HomePage
  },
  {
    path: 'mundo',
    component: HomePage
  },
  {
    path: 'politica',
    component: HomePage
  },
  {
    path: 'economia',
    component: HomePage
  },
  {
    path: 'new-details/:id',
    component: NewDetailsPage
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'ultimas',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'header',
    loadChildren: () => import('./header/header.module').then( m => m.HeaderPageModule)
  },
  {
    path: 'card',
    loadChildren: () => import('./card/card.module').then( m => m.CardPageModule)
  },
  {
    path: 'search-bar',
    loadChildren: () => import('./search-bar/search-bar.module').then( m => m.SearchBarPageModule)
  },
  {
    path: 'new-details',
    loadChildren: () => import('./new-details/new-details.module').then( m => m.NewDetailsPageModule)
  },
  {
    path: 'header-new-details',
    loadChildren: () => import('./header-new-details/header-new-details.module').then( m => m.HeaderNewDetailsPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'categories',
    loadChildren: () => import('./categories/categories.module').then( m => m.CategoriesPageModule)
  },
  {
    path: 'header-categories',
    loadChildren: () => import('./header-categories/header-categories.module').then( m => m.HeaderCategoriesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
