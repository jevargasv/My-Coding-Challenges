// What is "this"?

/* 
A Car 
brand : “ford”
numOfWheels : 12
color : “red”
*/

/* 
A Wizard
universe : “Lord of the Rings”
powers : [“Regeneration” , “Magic Staff”, “Fire Bolt”]
age : 106 
*/

/* 
A Video Game Level 
levelOfDifficulty : 5
isFoggy : true 
monstersExist : true
*/

let car =  {
    brand: “ford”,
    numOfWheels: 12,
    color: “red”
}

let wizard =  {
    universe: "Lords of the Rings",
    powers: [“Regeneration” , “Magic Staff”, “Fire Bolt”],
    age: 106
}

let videoGameLevel = {
    levelOfDifficulty: 5,
    isFoggy: true,
    monstersExist: true
}

let wizard = function(universe, powers, age) {
    this.universe = universe;
    this.powers = powers;
    this.age = age;
    this.staff = true;
}

let gandalf = new Wizard('Lord of the Rings', ['fire', 'water'], 108);

gandalf.age = 1;
gandalf.callEagles = function() {
    console.log('THE EAGLES WON THE SUPER BOWL!');
}

//Example One - No Inheritance 

class Animal {
    constructor(typeOfAnimal, size) {
      this.typeOfAnimal = typeOfAnimal;
      this.size = size;
   }
   
 eat(){
    //some functionality to eat
       console.log('Some Functionality from the animal class')
   }
 }
  
 class Turtle {
     constructor(shellType, age){
         this.shellType = shellType;
         this.age = age;
     }
     
     eat(){
        //some type of functionality 
         console.log('Some Functionality from the turtle class');
     }
 }
 
 
let amphibian = new Animal('amphibian', 'big');
let turtleBob = new Turtle('Hard', 109)
 
amphibian.eat();
turtleBob.eat();
 
 
 //----------------------------------------------
 
 
// Example Two - With Inheritance
  class Animal {
    constructor(typeOfAnimal, size) {
      this.typeOfAnimal = typeOfAnimal;
      this.size = size;
    }
   
   eat(){
        console.log('functionality - eat method in the animal class');
    }
  }
 
  let amphibian = new Animal('amphibian', 'big');
  
 
 
 // Case One : Sub Class - No constructor
 //Lets for a second not add a constructor and see what happens.
  class Turtle extends Animal {
 
  }
 
  let turtleBob = new Turtle()
 
 
 //Case Two : Sub Class - Constructor
  
  class Turtle extends Animal {
    constructor(shellType, age){
 //          //Super is required!
 //          //This is a ES6 thing.
          super('amphibian', 'small');
 //        //Can also be called like this super();
 //         this.shellType = shellType;
 //         this.age = age;
 //     }
 // }
 
 
 // let turtleBob = new Turtle('Hard', 109)
 
 // amphibian.eat();
 // turtleBob.eat();
 
 //Not only do we inhert the methods but also the properties. 
 // console.log(turtleBob)
 
 
 // Case Three - Sub Class + Methods
 // class Turtle extends Animal {
 //   constructor(shellType, age){
 //           // Super is required!
 //           // This is a ES6 thing.
 //         super('amphibian', 'small');
 //         this.shellType = shellType;
 //         this.age = age;
 //     }
 
 //   eat(){
 //     // I could also do both by calling the super method
 //     // super.eat();
 //     console.log("I am overriding the animal eat method!")
 //   }
 
 //   crawl(){
 //     console.log('I am a regular method in the turtle class')
 //     //Since we are inhereting the properties of the super class
 //     //We also can access those properties we defined
 //     console.log(``${this.typeOfAnimal} is crawling!` `)
 //   }
 // }
 
 // let turtleBob = new Turtle('Hard', 109);
 // turtleBob.eat();
 // turtleBob.crawl();
 
 
 
 //Case Four - Three levels deep
  class Turtle extends Animal {
    constructor(shellType, age){
            // Super is required!
            // This is a ES6 thing.
          super('amphibian', 'small');
          this.shellType = shellType;
          this.age = age;
      }
 
 //   //If I did not have this, it would inherit and run the super super class method.
 //   eat(){
 //     console.log('This is the eat method from the turtle class')
 //   }
 // }
 
 // class subClassOfTurtle extends Turtle {
 //   constructor(name, wings){
 //     super('Hard', 100)
 //     this.name = name;
 //     this.wings = wings;
 //   }
 
 //   subClassMethod(){
 //     console.log('This is a method in my 3 level deep subclass')
 //   }
 // }
 
  let bobbie = new subClassOfTurtle('Bobbie', false);
  bobbie.subClassMethod();
  bobbie.eat();
  console.log(bobbie)
 
 
 //----------------------------------------------
 //Appropriate Use Cases 
 
 //Only use Inheritance if appropriate
 //ONLY IF THEY REALLY INHERIT 'SOMETHING' FROM EACHOTHER
 // Animal -> type of animal (Dog,turtle,cat)
 // Family -> Genus -> Species
 
 //Do not use inheritance for 'Containment' of objects
 // Album -> Photo
 // Classroom -> Teacher  or Classroom -> Students
 
 //Always ask yourself, Does this thing really inherit anything? Does my student really inherit anything from the classroom? Or does my classroom just 'contain' that thing
 
 //Example of nested objects use case
 
  class ClassRoom {
    constructor(name){
      this.name = name;
      this.studentsArray = []
    }
 
    addStudent(student){
      this.studentsArray.push(student)
    }
 
    printStudents(){
      for(student of this.studentsArray){
        console.log(student.name)
      }
    }
  }
 
  class Student {
    constructor(name, age){
      this.name = name;
      this.age = age;
    }
  }
 
  let madison = new ClassRoom('madison')
  let bobbi = new Student('bobbi', 23);
  let sam = new Student('sam', 18);
 
  madison.addStudent(bobbi);
  madison.addStudent(sam);
  madison.printStudents();
 
 
