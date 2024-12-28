//Contrato de lo que contiene un usuario
interface IProduct {
    name: string;
    size: string;
    weight: number;
    price: number;
    color?: string;
    material?: string;
    SKU?: number;
}

class Product {
    //Propiedades de la clase
    name: string;
    size: string;
    weight: number;
    price: number;
    color: string;
    material: string;
    SKU: number;

    //Se define lo que se necesita para usar la clase User
    constructor(props: IProduct) {
        this.name = props.name;
        this.size = props.size;
        this.weight = props.weight;
        this.price = props.price;
        this.color = props.color || 'Blanco';
        this.material = props.material || 'Plástico';
        this.SKU = props.SKU || 0;

    }

    create() {
        console.log('Creando el producto: ', this.name);
    }
}

//Se EXPORTA Product1 = "instancia" de la clase Product
export const Product1 = new Product({
    name: 'Ventilador',
    size: 'Mediano',
    weight: 20,
    price: 50,
    color: 'Blanco',
    material: 'Plástico',
    SKU: 123456,
})