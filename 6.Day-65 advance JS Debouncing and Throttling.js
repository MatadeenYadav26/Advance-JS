// Debouncing and Throttling : 

// function debounce(fn,delay){
//     let timer;
//     return function(){
//         clearTimeout(timer);
//         timer = setTimeout(fn , delay);
//     };
// }

// // debounce is done for now , backend ka part h , no need to learn code!

// document.querySelector("#search")
// .addEventListener("input", debounce(function(){
//     console.log("Chala");
    
// }, 400)
// );


// Throttling:

// window.addEventListener("mousemove", function(e){
//     console.log(e.clientX , e.clientY);
// });



// function throttle (fn,delay){
//     let last = 0 ;
//     return function(){
//         const now = Date.now();
//         if(now - last >= delay){
//             last = now ;
//             fn();
//         }
//     }
// }


// window.addEventListener("mousemove",throttle(function(){
//     console.log("aman");
// },2000))

// har 2 second me jab jab mai mouse ghumaunga tab tab aman print karega and jese hi mouse ghumana stops it will be stopped printing aman!



// json parse : parse k through : aap json se object banate ho!
// json stringify : stringify k through aap json banate ho!

// JSON.stringify({name : "aman" , age : 21}) // check in console


// if kisi ne json form me dediya and kaha isse object banao
// we use json.parse
// JSON.parse('{"name" : "aman" , "age" : 21}')


