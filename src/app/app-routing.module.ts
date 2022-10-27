import { EditPageComponent } from './pages/edit-page/edit-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', loadChildren: () =>
    import('./pages/home-page/home-page.module').then(m => m.HomePageModule)
  },
  {
    path: 'products', loadChildren: () =>
    import('./pages/products-page/products-page.module').then(m => m.ProductsPageModule)
  },  {
    path: 'edit', loadChildren: () =>
    import('./pages/edit-page/edit-page.module').then(m => m.EditPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
