// number 1

let dog = {
    name:'Fido',
    numLegs: 4
  };

// number 2

let dog = {
    name: "Spot",
    numLegs: 4
  };
  // Only change code below this line
  console.log(dog.name)
  console.log(dog.numLegs)

// number 3

let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function (){return 'This dog has 4 legs.'}
  };
  
  dog.sayLegs();

// number 4

let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
  };
  
  dog.sayLegs();

// number 5

function Dog(){
    this.name = 'Spot';  
    this.color = 'brown';
    this.numLegs = 4
  
  }

// number 6

function Dog() {
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;
  }
  
  let hound = new Dog();

// number 7

function Dog(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4
    }
    
    let terrier = new Dog ("Albert","Black")

// number 8

function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
  }
  
  // Only change code below this line
  
  let myHouse = new House (7)
  
  myHouse instanceof House

// number 9

function Bird(name) {
    this.name = name;
    this.numLegs = 2;
  }
  
  let canary = new Bird("Tweety");
  let ownProps = [];
  // Only change code below this line
  
  for (let property in canary){
    if(canary.hasOwnProperty(property)){
      ownProps.push(property);
    }
  }

//number 10

function Dog(name) {
    this.name = name;
  }
  
  
  Dog.prototype.numLegs = 4
  // Only change code above this line
  let beagle = new Dog("Snoopy");
  