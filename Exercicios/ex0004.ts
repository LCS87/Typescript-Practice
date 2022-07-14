class Stark {
    name: string;
    static castle: string = "Winterfell";
    saying: string;
    private favoriteColor: string;
  
    constructor(saying: string = "Winter") {
      this.saying = saying;
    }
  
    hello(person: string) {
      console.log('Hello ' + person);
    }
  }
  
  var ned = new Stark("Hello")
  console.log(ned.saying);
  ned.hello("Bob");