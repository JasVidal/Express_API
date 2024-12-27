//Contrato de lo que contiene un usuario
interface IUser {
    name: string;
    email: string;
    password: string;
    active?: boolean;
    registerNumber?: number;
}

export class User {
    //Propiedades de la clase
    name: string;
    email: string;
    password: string;
    active?: boolean;
    registerNumber?: number;

    //Se define lo que se necesita para usar la clase User
    constructor(props: IUser) {
        this.name = props.name;
        this.email = props.email;
        this.password = props.password;
        this.active = props.active || false;
        this.registerNumber = props.registerNumber || 0;

    }

    //Se EXPORTA la Person1 = "instancia" de la clase User
    create() {
        console.log('Creando al usuario: ', this.name);
    }
}

export const Person1 = new User({
    name: 'Pablita',
    email: 'pabli@gmail.com',
    password: '123456',
})