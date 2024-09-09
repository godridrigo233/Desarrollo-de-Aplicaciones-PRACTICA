// A) Creación de Objetos
// 1. Creación de objetos utilizando iniciadores de objetos
let car1 = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2020,
    printDetails: function() {
      console.log(`${this.make} ${this.model} (${this.year})`);
    }
  };
  car1.printDetails(); 
  // 2. Creación de objetos utilizando un constructor
  function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.printDetails = function() {
      console.log(`${this.make} ${this.model} (${this.year})`);
    };
  }
  let car2 = new Car('Honda', 'Civic', 2019);
  car2.printDetails(); 
  
  // 3. Creación de objetos utilizando el método Object.create()
  const carProto = {
    printDetails: function() {
      console.log(`${this.make} ${this.model} (${this.year})`);
    }
  };
  let car3 = Object.create(carProto);
  car3.make = 'Mazda';
  car3.model = '3';
  car3.year = 2021;
  car3.printDetails(); 
  // B) Agregando Propiedades a los Objetos
  // 1. Agregar propiedades utilizando iniciadores de objetos
  let dog1 = {
    name: 'Buddy',
    breed: 'Golden Retriever',
    age: 5
  };
  console.log(dog1); 
  // 2. Agregar propiedades utilizando un constructor
  function Dog(name, breed) {
    this.name = name;
    this.breed = breed;
  }
  let dog2 = new Dog('Max', 'Bulldog');
  dog2.age = 3; 
  console.log(dog2); 
  // 3. Agregar propiedades utilizando Object.create()
  const dogProto = {
    printDetails: function() {
      console.log(`${this.name}, ${this.breed}, ${this.age}`);
    }
  };
  let dog3 = Object.create(dogProto);
  dog3.name = 'Lucy';
  dog3.breed = 'Beagle';
  dog3.age = 4;
  dog3.printDetails();
  // 4. Grabar y probar los cambios en los objetos
  // Ejecución ya realizada con los ejemplos anteriores
  