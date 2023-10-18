import { NgModule } from '@angular/core';
import { RouterModule, Route } from "@angular/router";

import { HomeComponent } from "./views/home/home.components";
import { NotFoundComponent } from "./views/not-found/not-found.component";
import { RecipesComponent } from "./views/recipes/recipes.component";
import { RecipeComponent } from "./views/recipe/recipe.component";
import { recipeResolver } from "./resolvers/recipe.resolver";
import { AddRecipeComponent } from "./views/add-recipe/add-recipe.component";
import { EditRecipeComponent } from "./views/edit-recipe/edit-recipe.component";
import { LoginViewComponent } from "./views/login/login.component";
import { RegisterViewComponent } from "./views/register/register.component";
import { AccountViewComponent } from "./views/account/account.component";
import { accountGuard } from "./guards/account.guard";

const appRoutes: Route[] = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full',
    },
    {
        path: 'recipes',
        component: RecipesComponent,
    },
    {
        path: 'recipes/:id',
        component: RecipeComponent,
        resolve: {
            recipe: recipeResolver,
        },
    },
    {
        path: 'add-recipe',
        component: AddRecipeComponent,
    },
    {
        path: 'recipes/:id/edit-recipe',
        component: EditRecipeComponent,
        resolve: {
            recipe: recipeResolver
        }
    },
    {
        path: 'register',
        component: RegisterViewComponent,
    },
    {
        path: 'login',
        component: LoginViewComponent,
    },
    {
        path: 'account',
        component: AccountViewComponent,
        canActivate: [accountGuard]
    },

    {
        path: 'not-found',
        component: NotFoundComponent,
    },
    {
        path: '**',
        component: NotFoundComponent,
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {};