// OOP Challenges

let car = {
    color: 'red',
    brand: 'furd',
    name: 'daisy',
    drive: function() {
      console.log('vroom vroom')
    }
    getBrand: function() {
      console.log(this.brand)
    }
  }
  
  
  class Animal {
    constructor(name){
      this.name = name
    }
  
    speak() {
      console.log(this.name + 'Animal Speaks')
    }
  }
  
  class Dog extends Animal{
    speak() {
      console.log('Woof')
    }
  }
  
  let buddy = new Dog();
  buddy.speak()
  
  //Example One 
  
  
  let multiplier = {
    value: 1,
    multiply: function(multiplier) {
      this.value = this.value * multiplier
    },
    getCurrentValue: function() {
      return this.value
    }
  }
  
  multiplier.getCurrentValue()// Returns 1 if you have not run any code on it
  multiplier.multiply(25)
  multiplier.getCurrentValue() //Returns 25
  multiplier.multiply(2)
  multiplier.getCurrentValue() //Returns 50
  
  
  //Example Two - Album
  
    class Album{
      constructor(name){
        this.name = name
        this.photos = []
      }
  
      addPhoto(photoInput){
        photoInput.id = this.photos.length;
        console.log(photoInput)
        this.photos.push(photoInput)
      }
  
      findPhoto(locationMatched) {
        //How did you guys do this one?
      }
  
      listPhotos() {
        for(photo of this.photos) {
          console.log(photo)
        }
      }
    }
  
    class Photo{
      constructor(link,place,id){
        this.link = link
        this.place = place
      }
    }
  
  
     let familyAlbum = new Album('Family Vacation #1')
     let famphoto = new Photo('http://i.imgur.com/07OiOrs.png', 'Italy')
     let famphototwo = new Photo('http://Blah.png', 'Spain')
     let famphotothree = new Photo('jshdashdjsd', 'Italy')
      //Each method may or may not need arguments. The dots dont represent anything.
      familyAlbum.addPhoto(famphoto)
      familyAlbum.addPhoto(famphototwo)
      familyAlbum.addPhoto(famphotothree)
      // familyAlbum.listPhotos()
      // familyAlbum.findPhoto('Italy')
  
  
  //Family - this isnt the ideal scenerio and would only be relevant if you were doing one family
  
  class Grandfather{
    constructor(name,goodGenetics){
      this.name = name
      this.goodGenetics = goodGenetics
    }
  }
  
  class Father extends Grandfather {
    constructor(familyName, age){
      super('Bob', true);
      this.familyName = familyName;
      this.age = age;
    }
  }
  
  class Son extends Father { 
    constructor(firstName, goodChild) {
      super('Patlut', 50)
      this.firstName = firstName;
      this.goodChild = goodChild;
    }
  
    sayName() {
      return `My name is ${this.firstName} ${this.familyName}.`
    }
  
  }
  
  let bob = new Grandfather ("Bob", true);
  let bill = new Father ( "Bobson", 44);
  let biff = new Son ("Biff", false);
  
  console.log(biff.sayName());
  console.log(biff);
