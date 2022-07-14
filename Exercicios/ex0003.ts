var Stark = (function () {
    function Stark(saying) {
        if (saying === void 0) { saying = "Winter"; }
        this.saying = saying;
    }
    Stark.prototype.hello = function (person) {
        console.log('Hello ' + person);
    };
    Stark.castle = "Winterfell";
    return Stark;
}());
var ned = new Stark("Hello");
console.log(ned.saying);
ned.hello("Bob");