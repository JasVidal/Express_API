interface IAnimal {
    name: string;
    age: number;
    size: string;
    gender: string;
    race?: string;
    behavior?: string;
}

class Animal {
    //Propiedades de la clase
    name: string;
    age: number;
    size: string;
    gender: string;
    race: string;
    behavior: string;

    constructor(props: IAnimal) {
        this.name = props.name;
        this.age = props.age;
        this.size = props.size;
        this.gender = props.gender;
        this.race = props.race || 'Golden';
        this.behavior = props.behavior || 'Friendly';
    }

    create() {
        console.log('Creando el animal: ', this.name);
    }

    saludar() {
        console.log('Hola, soy: ', this.name);
    }
}

//Se EXPORTA Product1 = "instancia" de la clase Product
export const Animal1 = new Animal({
    name: 'Toto',
    age: 1,
    size: 'Mediano',
    gender: 'Macho',
    race: 'Golden',
    behavior: 'Amigable',
})

Animal1.saludar();
