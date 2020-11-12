import { Menu } from './menu.model';
export class Shop {
    public name: string;
    public address: string;
    public city: string;

    constructor(name: string, address: string, city: string){
        this.name=name;
        this.address=address;
        this.city=city;
    }
}
