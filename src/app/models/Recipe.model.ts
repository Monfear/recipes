import { IRecipie } from "../types/Recipe.interface";

export class Recipe implements IRecipie {
    public name: string;
    public ingredients: string[];
    public preparation: string;
    public imgUrl: string;

    constructor(name: string, ingredients: string[], preparation: string, imgUrl: string) {
        this.name = name;
        this.ingredients = ingredients;
        this.preparation = preparation;
        this.imgUrl = imgUrl;
    };
};