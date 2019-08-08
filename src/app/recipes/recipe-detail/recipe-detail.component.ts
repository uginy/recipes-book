import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, switchMap } from 'rxjs/operators';

import { Recipe } from '../recipe.model';
import * as fromApp from '../../store/app.reducer';
import * as RecipesActions from '../store/recipe.actions';
import * as ShoppingListActions from '../../shopping-list/store/shopping-list.actions';

import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
  providers: [ConfirmationService]
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(
    private route: ActivatedRoute,
    private confirmationService: ConfirmationService,
    private router: Router,
    private store: Store<fromApp.AppState>
  ) {}

  confirm() {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => {
        this.onDeleteRecipe();
      }
    });
  }

  ngOnInit() {
    this.route.params
      .pipe(
        map(params => {
          return +params.id;
        }),
        switchMap(id => {
          this.id = id;
          return this.store.select('recipes');
        }),
        map(recipesState => {
          return recipesState.recipes.find((recipe, index) => {
            return index === this.id;
          });
        })
      )
      .subscribe(recipe => {
        this.recipe = recipe;
      });
  }

  onAddToShoppingList() {
    this.store.dispatch(
      new ShoppingListActions.AddIngredients(this.recipe.ingredients)
    );
  }

  onEditRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

  onDeleteRecipe() {
    this.store.dispatch(new RecipesActions.DeleteRecipe(this.id));
    this.router.navigate(['/recipes']);
  }
}
