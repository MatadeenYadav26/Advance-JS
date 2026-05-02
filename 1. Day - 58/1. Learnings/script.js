// // Class Expression:
// // - No Hoisting is possible : Pehle Class Banao Then Use karo , pehle use nahi karte hai.


// let Animal = class{
//     constructor(){
//         this.name = "Dojo";
//         this.breed = "Dog";
//     }
// };

// console.log(Animal);
// let an = new Animal(); // no error in code , some issue in console.



// 2. Inheritence :

// class Animal {
//     constructor(){
//         this.hands = 2;
//         this.legs = 2;
//     }

//     eat (){}
//     breathe() {}
// }

// // inheritence means dursi class ki properties inherit karna and  usko extend karna in new class.
// // new class is extending the base class.
// // it means ab uske paas sari prop of animal class exist karta h : hands , legs , eat , breathe.
// class kekda extends Animal {   
//     constructor(){ 
//     super();
//     this.legs = 8;
//     this.hands = 0;
//     }
//     susu(){} // ye additional function hai jo call krne pe kaam krta h where as construcotr works automatically without call.
// }

// let k1 = new kekda();


// 3. getter and setter :
// set is used to update or set or update value in pvt wala property and get gives you the changed value.

class Animal{
    constructor(){
        this.name = "Dodo"; // ye ek pvt variable nahi hai.
        this._age - 18;  // ye v ek pvt variable nahi h but "_" ye indicate karega ki treat it as pvt to your development team. altough you can change the age if you want in fututre.
    }

    set age(val){ // age k jagah koi v naam rakh skte ho
        if(val<0){
            console.error("not");
            return; // return karne se hoga ye ki aage ka code work nahi karega.            
        }
        this._age = val;
        return this._age;
    }

    get age(){
        return this._age;
    }

}

let a1 = new Animal();
a1.age = 37;   // age ya jo v variable use karoge in get and set wahi yaha pe use karna hai.
console.log(a1.age);  // a1.age likhte hi get ka function automatically run hojata hai.


