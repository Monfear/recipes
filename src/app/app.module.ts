import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from "@angular/forms";
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
import { LoginViewComponent } from "./views/login/login.component";
import { RegisterViewComponent } from "./views/register/register.component";
import { RegisterFormComponent } from "./content/register-form/register-form.component";
import { LoginFormComponent } from "./content/login-form/login-form.component";
import { AccountViewComponent } from "./views/account/account.component";

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
        RegisterViewComponent,
        LoginViewComponent,
        AccountViewComponent,

        // layout
        NavbarComponent,
        FooterComponent,
        ModalComponent,

        // content
        RecipeCardComponent,
        RecipeFormComponent,
        RegisterFormComponent,
        LoginFormComponent,
    ],

    imports: [
        AppRoutingModule,
        BrowserModule,
        ReactiveFormsModule,
        FormsModule,

        InterfaceModule,
        ControlsModule,
    ],

    providers: [],

    bootstrap: [
        AppComponent
    ],
})

export class AppModule { };
