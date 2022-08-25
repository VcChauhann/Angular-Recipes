import { Ingridients } from "../shared/ingridient.model";

export class Recipe{
    public name: string;
    public description:string;
    public imgPath: string;
    public ingredients:Ingridients[];

    constructor(na:string,desc:string,iPath:string,ings:Ingridients[]){
        this.name=na;
        this.description = desc;
        this.imgPath = iPath;
        this.ingredients = ings;
    }
}