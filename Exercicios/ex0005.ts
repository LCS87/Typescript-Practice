class Person {
    constructor(name) {
        this.name = name;
    }
    dance() {
        console.log(this.name + " is dancing");
    }
}
var brad = new Person("Brad");
brad.dance();
class AwesomePerson extends Person {
    dance() {
        console.log("Awesome");
        super.dance();
    }
}
var rob = new AwesomePerson("Robb");