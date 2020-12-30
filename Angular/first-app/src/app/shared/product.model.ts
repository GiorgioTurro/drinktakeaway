export class Product {
    public name: string;
    public price: number;
    public category: string;
    public quantity: number;

    constructor(name: string, price: number, category: string){
        this.name=name;
        this.price=price;
        this.category=category;
        this.quantity=0;
    }


}
