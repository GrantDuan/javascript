var Car = (function Car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
});

let car1 = new Car('Eagle', 'Talon TSi', 1993);
let car2 = new Car('Nissan', '300ZX', 1992);

print(car1);
print(car2);

function print(car){
    console.log(car.make + " " +car.model +" " +car.year);
}