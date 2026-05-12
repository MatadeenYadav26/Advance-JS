//Error Handling:

//1): Syntax Error:
// leat a = 12;
// a let = 24;

// 2):run-time error:
// function abc(){
//     let a = 12;
//     // console.log(a.name);
//     console.log(a.name.first);
// }
// abc();

//3): Logical Error:
// function add(a,b){
//     console.log(a-b);
// }
// add(10,5);




//normally after error no code runs:
// console.log(b.name.age);
// console.log("aman");



// in try & catch : it runs codes after error;
// try{
//     console.log(a.name.age);
    
// }
// catch(err){
//     console.log(err);
//     console.error(err);
    
// }

// console.log("hello");



// Error Object's (message , name , stack):

// try {
//     let a = 12;
//     console.log(a.name.age);
// }    catch(err) {
//     console.log(err.message);
//     console.log(err.stack);
//     console.log(err.name);
// }


// try-catch-finally

// try{
//     let a = 12;
//     // console.log(a);
//     console.log(a.name.first);
// }
// catch(err){
//     console.log(err);
// }
// finally{
//         console.log("huihui this is finally humesha chalega code"); // usecase: loader
// }



//throw error:

try{
    let a = 12;
    console.log(a.name.first);
}
catch(err) {
// throw new Error("Kuch toh gadabad hui hai Daya!")
// console.error("Kuch toh gadabad hui hai Daya!")
console.log(new Error("Kuch toh gadabad hui hai Daya!")
);
}
