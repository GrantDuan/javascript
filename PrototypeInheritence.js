function Person(name, age) {
    this.className = "Person"
    this.name = name;
    this.age = age;
}

Person.prototype.speak = function (somethingStupid) {
    if (somethingStupid)
        console.log(somethingStupid)
    else
        console.log("bla bla bla");
}

function Student(name, age, major) {
    this.className = "Student"
    Person.call(this, name, age);
    this.major = major;
}

let std = new Student("Lian", 7, "fun");
try{
std.speak();
}
catch(error){
    console.error(error);
}

console.log(std);
console.log(Student.prototype);
console.log(Object.getOwnPropertyNames(Student.prototype))


//to inherit functions of Person
Student.prototype = Object.create(Person.prototype);
Object.defineProperty(Student.prototype, "constructor", {
    value: Student,
    enumerable: false,
    writable: true
})
//have to create a object again, the new object will ref to the new prototype
std = new Student("Lian", 8, "fun");
std.speak();
console.log(Object.getOwnPropertyNames(Student.prototype))
console.log(Student.prototype);

