import { NgModule } from '@angular/core';
import { RouterModule, Route } from "@angular/router";

import { HomeComponent } from "./views/home/home.components";
import { NotFoundComponent } from "./views/not-found/not-found.component";
import { RecipesComponent } from "./views/recipes/recipes.component";
import { RecipeComponent } from "./views/recipe/recipe.component";
import { recipeResolver } from "./resolvers/recipe.resolver";

const appRoutes: Route[] = [
    {
        path: '',
        component: HomeComponent,
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
        path: '**',
        component: NotFoundComponent,
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule { };