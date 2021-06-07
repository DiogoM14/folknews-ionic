import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePage } from './screens/home/home.page';
import { NewDetailsPage } from './screens/new-details/new-details.page';
import { SearchPage } from './screens/search/search.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'ultimas',
    pathMatch: 'full'
  },
  {
    path: 'search',
    component: SearchPage
  },
  {
    path: 'search/:news',
    component: SearchPage
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
    path: 'ambiente',
    component: HomePage
  },
  {
    path: 'new-details/:id',
    component: NewDetailsPage
  },
  {
    path: 'home',
    loadChildren: () => import('./screens/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'ultimas',
    loadChildren: () => import('./screens/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'header',
    loadChildren: () => import('./components/header/header.module').then( m => m.HeaderPageModule)
  },
  {
    path: 'card',
    loadChildren: () => import('./components/card/card.module').then( m => m.CardPageModule)
  },
  {
    path: 'new-details',
    loadChildren: () => import('./screens/new-details/new-details.module').then( m => m.NewDetailsPageModule)
  },
  {
    path: 'header-new-details',
    loadChildren: () => import('./components/header-new-details/header-new-details.module').then( m => m.HeaderNewDetailsPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./components/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'categories',
    loadChildren: () => import('./screens/categories/categories.module').then( m => m.CategoriesPageModule)
  },
  {
    path: 'header-categories',
    loadChildren: () => import('./components/header-categories/header-categories.module').then( m => m.HeaderCategoriesPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./screens/search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'commentaries',
    loadChildren: () => import('./components/commentaries/commentaries.module').then( m => m.CommentariesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
