import { IRecipie } from "../types/Recipe.interface";

export class Recipe implements IRecipie {
    public name: string;
    public description: string;
    public imgUrl: string;
    public preparation: string;
    public ingredients: string[];
    public difficulty: string;
    public ifVege: boolean;

    constructor(
        name: string,
        description: string,
        imgUrl: string,
        preparation: string,
        ingredients: string[],
        difficulty: string,
        ifVege: boolean,
    ) {
        this.name = name;
        this.description = description;
        this.imgUrl = imgUrl;
        this.preparation = preparation;
        this.ingredients = ingredients;
        this.difficulty = difficulty;
        this.ifVege = ifVege;
    };
};