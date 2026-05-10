// Questions : Objects and OOPS Thinking (Foundation)

// 1. Create a user object that stores names and email and has login method which prints "user logged in"

// let user = {
//     name : "Aman",
//     email : "xyz@gmail.com",
//     login: function(){
//         console.log("User Logged In")
//     }
// };

// user.login(); 

// Now , imagine you have 5 users 
// First imagine , how would you manage them withoutusing a class
// Then convert the same logic using class and observe how the code becomes cleaner. Write code for both the approaches.

// let user1 = {
//     name : "Aman",
//     email : "xzz@gmail.com",
//     login: function(){
//         console.log("User Logged In")
//     }
// };

// let user2 = {
//     name : "man",
//     email : "xy@gmail.com",
//     login: function(){
//         console.log("User Logged In")
//     }
// };

// let user3 = {
//     name : "Amn",
//     email : "xyz@gmail.com",
//     login: function(){
//         console.log("User Logged In")
//     }
// };

// let user4 = {
//     name : "Ama",
//     email : "xz@gmail.com",
//     login: function(){
//         console.log("User Logged In")
//     }
// };

// let user5 = {
//     name : "Aan",
//     email : "yz@gmail.com",
//     login: function(){
//         console.log("User Logged In")
//     }
// };


// Now Class Approach for same pronblem:

// class User {
//     constructor (name, email) {
//         this.name = name;
//         this.email = email;
//         // this.loggedin = function(){       // agar tum constructor k andar function run karoge toh vo constructor ka part ban jayega! sabke liye alag se add hoga individually not in shared memory
//         //     console.log("User Logged in");
//         // }
//     }
//     loggedins(){       // agar tum constructor k bahar banaoge toh vo ese bahar banega and prototype k andar show hoga , ye shared memory me hota h sabke k liye individually grow nahi hoga!
//             console.log("User Logged in Successful");
//         }
// }

// let user1 = new User("Harsh","xyz@mail.xom");
// let user2 = new User("Aman","yz@mail.xom");
// let user3 = new User("Hardik","xz@mail.xom");
// let user4 = new User("Harry","xy@mail.xom");
// let user5 = new User("Hemant","abc@mail.xom");




//2. Create a product object that stores name aand price and has a method which returns the final price after discount:

// creating an object named "product":

// let product = {
//     name: "Cap",
//     price: 3300,
//     discountedPrice : function(){
//          return this.price - 500;
//     },
// };

// console.log(product.discountedPrice());


// The goal of this section is to understand why keeping data and behaviour together makes code easier to manage.



// Section-2 : Classes and Objects :-

// Create a car class with the following :
// brand
// speed
// a driving method that prints car's brand and speed

// class Car {
//     constructor(brand,speed){
//         this.brand = brand;
//         this.speed = speed;
//     }

//     drive(){
//         return this.brand + " - " +this.speed   ;
//     }
// };

// let car1  = new Car("Hyundai",180);
// let car2  = new Car("Nissan",220);



// 2): Create 2 diffrent car objects from the same class and verify that their data is diffrent.

// class Car {
//     constructor(brand,speed){
//         this.brand = brand;
//         this.speed = speed;
//     }

//     drive(){
//         return this.brand + " - " +this.speed   ;
//     }
// };

// let car1  = new Car("Hyundai",180);
// let car2  = new Car("Nissan",220);

// Aswer in your own words : 
//  If classes didnot exist , how would u write this logic , and what problems you might occur when the project becomes larger?

// Ans: Esa hota ki same cheez ko karne k liye without class , mujhe bohot sare objects banane pdte, fir kisi car k agar speed pe change ya kuch v update karna hota toh boht jada  dhundna hota! so overall difficuilt hojata , sab kuch!


// Section 3 : COnstructor and This Key-Word:

//1. Create a student class whose constructor accepts name and roll number.
//1.2. Add a method introduce that prints both values
//1.3. Inside constructor try setting values using this.
//1.4. Then try removing and notice what error occurs and why.

// class student{
//     constructor(name,rollnumber){  //constructor me accept krne wali cheeze humesha ,inside its paranthesis likho    
//         // this.name = name;
//         // this.rollnumber = rollnumber;

//         //without this:
//         name = name;
//         rollnumber = rollnumber;
//         // undefined undefined output will come, therefore we must use this to avoid that.
//     }
    
//     introduce(){
//     console.log(this.name + " " + this.rollnumber);
    
//     }
// }

// let std1 = new student("Aman",21)
// let std2 = new student("man",22)
// let std3 = new student("Annie",18)

// std1.introduce();



// 2. Create an onject using 2 methods:
// 2.1 One method using normal function
// 2.2 One method using arrow function
// 2.3 Insdie both observe and print diffrence:


// let obj = {
//     sayName : function(){
//         console.log(this); // isme poora ka poora object k value print hoga!
        
//     },
//     sayArrowName : ()=>{
//         console.log(this); // arrow function apna poora output arrowfunction se leta h 
//     },
// }

// obj.sayName(); // So yaha this k value as object milegi 
// obj.sayArrowName(); // yaha this k value as window milegi

//Section - 4 : Section Function and ProtoTypes:

//Create a User constructor fuction (dont use class syntax).*#Important // naam captital letter se start karo!

// bina class k bhi constructor function banta hai!
// ES6 se pehle constructor function ese banta tha 
// Add login method in two ways:
// First, inside the constructor
// Then, move to the prototype , prototype me add karoge toh ye shared hojayega!


// function User(){
//     this.name ="harsh";
//     // this.login = function(){  // inside the constructor!
//     //     console.log("Login Successful");
//     // }
// }

// User.prototype.login = function(){  // outside the constructor!
//         console.log("Login Successful"); 
//     };

// let us1 = new User(); // this is called a constructor functio , jab class name ka concept JS me nahi tha!



//Create 2 user objects and compare there login methods using equality
// explain why the result is true or false.

// function User(name){
//     this.name =name;
// }

// User.prototype.login = function(){  
//         console.log("Login Successful"); 
//     };

// let user1 = new User("harsh");
// let user2 = new User("aman");
// True for outside , means in prototype as tey share the resource!

// but what if we remove it from prototype and keep it inside 

// function User(name){
//     this.name =name;
//     this.login = function(){  
//         console.log("Login Successful"); 
//     };
// }

// let user1 = new User("harsh");
// let user2 = new User("aman");

// False aya kyu ? : whenever u make a new user it has its own login , and both are diff , ex 2 pp, w 2 parle g biscuit , the buscuit packs cant be same , both hae thier own diff biscut of same company not same , but in case of prototype the resousce is shared so , it means 1 hi biscuit share ho rha h , so yea then both will be same!  jab constuctor function k andar add krdete ho toh dono ka apna apna login hoga and prototype me shared hota h!

// Section-5  : call , apply , bind 

// 1. Create a function that prints this.name . 

function abcd(){
    console.log(this.name);  // by default this ki value function me window hoti hai!
}
// function abcd(a,b,c,d){
//     console.log(this.name);  // by default this ki value function me window hoti hai!
// }

let obj = {
    name: "aman",
};

// abcd.call(obj);

// abcd(); // blank milega bcoz : kisi v function me thus k value window hoti h , abcd me v this k value window hai , window k andar name naam k field exist krti  hai but uski value blank hoti hai toh yaha pe blank mil rha hai. 

// abcd.call(obj);// for simple and no input

// abcd.apply(obj , [1,2,3,4]); // isme array me value pass hoti hai!
// bind : run nahi krta ye ek new function deta h !

let fnc = abcd.bind(obj);
fnc();
