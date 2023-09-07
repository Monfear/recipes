import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from "./app-routing.module";
import { InterfaceModule } from "./modules/interface/interface.module";
import { ControlsModule } from "./modules/controls/controls.module";

import { AppComponent } from './app.component';
import { NavbarComponent } from "./layout/navbar/navbar.component";
import { RecipesComponent } from "./views/recipes/recipes.component";
import { RecipeComponent } from "./views/recipe/recipe.component";
import { HomeComponent } from "./views/home/home.components";
import { NotFoundComponent } from "./views/not-found/not-found.component";
import { RecipeCardComponent } from "./content/recipe-card/recipe-card.component";
import { FooterComponent } from "./layout/footer/footer.component";
import { AddRecipeComponent } from "./views/add-recipe/add-recipe.component";
import { EditRecipeComponent } from "./views/edit-recipe/edit-recipe.component";
import { RecipeFormComponent } from "./content/recipe-form/recipe-form.component";
import { ModalComponent } from "./layout/modal/modal.component";

@NgModule({
    declarations: [
        // app
        AppComponent,

        // views
        HomeComponent,
        NotFoundComponent,

        RecipesComponent,
        RecipeComponent,
        AddRecipeComponent,
        EditRecipeComponent,

        // layout
        NavbarComponent,
        FooterComponent,
        ModalComponent,

        // content
        RecipeCardComponent,
        RecipeFormComponent
    ],

    imports: [
        AppRoutingModule,
        BrowserModule,
        ReactiveFormsModule,

        InterfaceModule,
        ControlsModule,
    ],

    providers: [],

    bootstrap: [
        AppComponent
    ],
})

export class AppModule { };
