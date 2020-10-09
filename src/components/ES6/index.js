import React from "react";

export default function ES6(){

  // --------------------------------------------------------------------
  // Scope
  // --------------------------------------------------------------------
    const globalScope = "global scope";

    function helloScope(){ 
      const functionScope = "function scope";

      {
        const blockScope = "block scope";
        
        console.log(globalScope);
        console.log(functionScope);
        console.log(blockScope);

      }

        console.log(globalScope);
        console.log(functionScope);
        //console.log(blockScope); // Will error
    }

    console.log(globalScope);
    // console.log(functionScope); // Will error
    // console.log(blockScope); // Will error

    helloScope();


  // --------------------------------------------------------------------
  // Loop
  // --------------------------------------------------------------------
    const someList = [1,2,3,4,5];

    // blocked scoped i 
    for(let i=0; i < someList.length; i++){
      console.log(i);
    }

  // --------------------------------------------------------------------
  // Concatenation
  // --------------------------------------------------------------------

    // Pre-ES6
    var name = "Bob";
    console.log("Hello " + name);

    // Post-ES6
    const name2 = "Dave";
    console.log(`Hello ${name2}, with "inline quotes" and 2 + 2 = ${2+2}`);

  // --------------------------------------------------------------------
  // Object Literals
  // --------------------------------------------------------------------

      // Pre-ES6
      function getOldBook(title, author) {
        return {
          title: title,
          author: author
        };
      }

      var oldBook = getOldBook("Harry Potter", "JK Rowling");
      console.log(oldBook);


      // Post-ES6
      function getNewBook(title, author) {
        return {
          title,
          author
        };
      }

      var newBook = getNewBook("Kidnapped", "Robinson Crusoe");
      console.log(newBook);

  // --------------------------------------------------------------------
  // Object Deconstruction
  // --------------------------------------------------------------------

    // Pre-ES6
    var oldList = {
      name: "Bob",
      colours: ["red", "green", "blue"]
    };

    var oldName = oldList.name;
    var oldColours = oldList.colours;

    console.log(oldName, oldColours);

    // Post-ES6
    const newList = {
      newName: "Steve",
      newColours: ["pink", "purple", "yellow"]
    };

    const { newName, newColours } = newList;
    console.log(newName, newColours);

  // --------------------------------------------------------------------
  // Arrow Functions - Basic
  // --------------------------------------------------------------------
    
    // Pre-ES6
    function sayName(name) {
      console.log("My name is " + name);
    }

    var sayAge = function (age) {
      console.log("My age " + age);
    }

    sayName('Bob');
    sayAge(23);

    // Post-ES6

    const sayLocation = (location) => {
      console.log(`location is ${location}`);
    }

    sayLocation('Space Camp');

  // --------------------------------------------------------------------
  // Arrow Functions - Changes to 'this' keyword
  // --------------------------------------------------------------------
    
    // Pre-ES6
    var oldUser = {
      name: "Bob",
      age: 25,
      sayName: function(){
        console.log("My name is " + this.name);
        var that = this;  // 'this' reference needs peristed locally for nested function. Otherwise points to Window b default
        var fullName = function() {
          console.log("My name is " + that.name + ", my age is " + that.age);
        };
        fullName();
      }
    }

    oldUser.sayName();
    // Post-ES6

    const newUser = {
      name: "Wully",
      age: 29,
      sayName: function() {
        console.log(`My name is ${this.name}`);
        const sayFullName = () => {
          console.log(`Myname is ${this.name}, my age is ${this.age}`) // 'this' reference available throughout arrow function
        };
        sayFullName();
      }
    };
   
    newUser.sayName();


  // --------------------------------------------------------------------
  // Default Parameters
  // --------------------------------------------------------------------

    // Pre-ES6
    function oldMultiply(x, y){
      var a = x || 1;
      var b = y || 1;
      console.log(a * b);
    }

    oldMultiply(5, 10);

    // Post-ES6

    const newMultiply = (x = 1, y = 1) => {
      console.log(x * y);
    };

    newMultiply();

  // --------------------------------------------------------------------
  // Array Functions
  // --------------------------------------------------------------------

    // Pre-ES6
    
    // Post-ES6
    const shoppingList = ['Milk', 'Eggs', 'Chicken', 'Bacon'];

    // ForEach
    shoppingList.forEach((item, index) => {
      console.log(`Item = ${item}, index = ${index}`);
    });

    // Map - full
    const shoppingList2 = shoppingList.map(item => {
      return item + ' (copy 2)';
    });
    
    console.log(shoppingList2);

    // Map - refactored
    const shoppingList3 = shoppingList.map(item => item + ' (copy 3)');
    console.log(shoppingList3);

    // Filter - full
    const shoppingList5 = shoppingList.filter((item) => {
      return item === 'Eggs';
    });
    console.log(shoppingList5);

    // Filter - refactored
    const shoppingList6 = shoppingList.filter(item => item === 'Eggs');
    console.log(shoppingList6);


  // --------------------------------------------------------------------
  // Classes
  // --------------------------------------------------------------------

    // Pre-ES6
    function OldDude(name, age, colour){
      this.name = name;
      this.age = age;
      this.colour = colour;
    }

    OldDude.prototype.sayName = function(){
      console.log("My name is " + this.name);
    };

    function OldFriend(count, name, age, colour){
      OldDude.call(this, name, age, colour)
      this.count = count;
    };

    var myOldDude = new OldDude('Bob', 99, 'Red');
    console.log(myOldDude);
    myOldDude.sayName();
    
    // To copy methods added to base class prototype to inherited class
    OldFriend.prototype = Object.create(OldDude.prototype);

    var myOldFriend = new OldFriend(15, 'Bob', 99, 'Red');
    console.log(myOldFriend);
    myOldFriend.sayName();

    // Post-ES6
    class NewDude {

      constructor(name, age, colour) {
        this.name = name;
        this.age = age;
        this.colour = colour;
      };

      sayName(){
        console.log("My name is " + this.name);
      }
    };

    const myNewDude = new NewDude('Bob', 99, 'Red');
    console.log(myNewDude);
    myNewDude.sayName();

    class NewFriend extends NewDude{
      
      constructor(count, name, age, colour) {
        super(name, age, colour); // Extend with specific properties on parent ('super'class)

        this.count = count;
        this.name = name;
        this.age = age;
        this.colour = colour;
      };

    };

    const myNewFriend = new NewFriend(15, 'Bob', 99, 'Red');
    console.log(myNewFriend);
    myNewFriend.sayName();


  // --------------------------------------------------------------------
  // Promises
  // --------------------------------------------------------------------

  console.log("Async - start");

  // Pre-ES6 (using callback)
  function getOldData(data, callback){
    setTimeout(() => { 
      console.log("Getting data...");
      callback({result: data * 5}); // Call the callback function passed in passing back the data
      console.log("Got data.");
    }, 2000);
  };
    
  getOldData(200, function(result){
    console.log(result);
  });

  console.log("Async - finish");

  // Post-ES6 (see here for wrapping promise in function to pass params: https://stackoverflow.com/questions/35318442/how-to-pass-parameter-to-a-promise-function)
  const prom = new Promise((resolve, reject, data) => {
    
    const dummyError = false; // toggle to test

    setTimeout(() => {
      
      if(dummyError === false){
        resolve({data: 'Promise is resolved' + data * 5});
      } else {
        reject(new Error('Something went wrong'));
      }
      
    }, 2000);
    
  });

  prom.then((result) => {
    console.log(result); return result;
  })
  .catch((err) => {
    console.log(err);
  });
  



  return (
    <h1>ES6 (console output...)</h1>
  );
};



