function MovingObject (name) {
  this.name = name;
} //parent

MovingObject.prototype.fly = function() {
  console.log(`${this.name} is flying!`)
}

function Ship () {
  MovingObject.call(this, name)
}

Ship.inherits(MovingObject);

function Asteroid () {}
Asteroid.inherits(MovingObject);


Function.prototype.inherits = function(parentClass) {

  function Surrogate () {}
  // Surrogate.prototype.__prot = MovingObject.prototype
    Surrogate.prototype = parentClass.prototype;
    this.prototype = new Surrogate();
    this.prototype.constructor = this;
};

Function.prototype.inherits2 = function inherits2 (parentClass) {
  // function Surrogate () {}
  this.prototype = Object.create(parentClass);
  this.prototype.constructor = this;
};
