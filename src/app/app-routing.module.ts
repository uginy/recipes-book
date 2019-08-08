import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/auth.guard';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule' },
  {
    path: 'shopping-list',
    loadChildren: './shopping-list/shopping-list.module#ShoppingListModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'auth',
    loadChildren: './auth/auth.module#AuthModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
