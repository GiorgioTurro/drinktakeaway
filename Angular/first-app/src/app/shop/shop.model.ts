import { Product } from "../shared/product.model";
export class Shop {
    public name: string;
    public address: string;
    public menu: Product[];
    constructor(name: string, address: string, menu: Product[]){
        this.name=name;
        this.address=address;
        this.menu=menu;
    }
}
