import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from "./app-routing.module";
import { InterfaceModule } from "./modules/interface/interface.module";

import { AppComponent } from './app.component';
import { NavbarComponent } from "./layout/navbar/navbar.component";
import { RecipesComponent } from "./views/recipes/recipes.component";
import { RecipeComponent } from "./views/recipe/recipe.component";
import { HomeComponent } from "./views/home/home.components";
import { NotFoundComponent } from "./views/not-found/not-found.component";
import { RecipeCardComponent } from "./content/recipe-card/recipe-card.component";
import { FooterComponent } from "./layout/footer/footer.component";

@NgModule({
    declarations: [
        AppComponent,

        NavbarComponent,
        FooterComponent,

        HomeComponent,
        NotFoundComponent,

        RecipesComponent,
        RecipeCardComponent,
        RecipeComponent
    ],

    imports: [
        BrowserModule,
        AppRoutingModule,

        InterfaceModule
    ],

    providers: [],

    bootstrap: [
        AppComponent
    ],
})

export class AppModule {};
