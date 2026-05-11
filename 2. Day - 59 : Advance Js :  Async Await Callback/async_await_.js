// Sync-Async

// console.log("Hey1");
// console.log("Hey2");
// setTimeout(() => {
//     console.log("Hey3");
    
// },2000);
// console.log("Hey4");


//   Sync-Async

// function kuchDerBaadChalunga(val){
//     setTimeout( () => {
//         console.log(val);
//     }, Math.floor(Math.random()*10)*1000);
// }

// kuchDerBaadChalunga(12);




// Call-back


// function kuchDerBaadChalunga(fnc){
//     setTimeout(fnc , Math.floor(Math.random()*10)*1000);
// }

// kuchDerBaadChalunga(function (){   // ye jo function aapne yaha bheja usko kehte h call back!
//     console.log("Hey");
// });


// backend function which exist somewhere : ye sab library me hoti hai already

// function ProfileLekarAao(username,cb){
//     console.log("Fetching Profile Data...");
    
//     setTimeout(()=>{
//         // console.log(`Profile fetched of ${username}`);
//         cb( {_id:23444 , username , age:22 , email:"HuiHui@gmail.com"})
//     },2000);
// }

// function saarePostLekarAao(id , cb){
//     console.log("Fetching all posts...");
    
//     setTimeout(()=>{
//         cb({_id: id , posts: ["hey" ,"hello" , "wow" ]});
//     },3000);
// }

// function savedPostsNikalo(id , cb){
//     console.log("Fetching saved posts...");
//     setTimeout(() => {
//         cb({_id:id , saved:[1,2,13,18,45,17,333,26]})
//     },3000);
// }

// // frontend se usko call karna to run it : ye sab hume likhna padta hai
// ProfileLekarAao("Aman",function(data){
//     console.log(data);
//     saarePostLekarAao(data._id, function(posts){
//         console.log(posts);
//         savedPostsNikalo(data._id , function(saved){
//             console.log(saved);
            
//         })
//     });
    
// });
//ye upar functtions ko call pe call krte rehne ko call-back hell bolte hai , like a christmas-tree.
// call back me call back 
// old legacy codes 



// Promises : resolve , reject , then , catch

//Promise: resolve and reject

// let pr = new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         // resolve("aman");
//         let rn = Math.floor(Math.random()*10);
//         if (rn>5) res("resolved with "+ rn);
//         else reject("rejected with "+ rn);    

//     },3000);
// })

// // yaha pe is pr k 3 states ho skti hai : pending , resolved , rejected!

// // resolve hua toh then chalega and reject hua toh  catch chalega!

// pr
// .then(function(val){
//     console.log(val);
    
// })
// .catch(function(val){
//     console.log(val);
    
// })





// async-await syntax , error handling with try-catch: chainign async operations

// let pr = new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         // resolve("aman");
//         let rn = Math.floor(Math.random()*10);
//         if (rn>5) resolve("resolved with "+ rn);
//         else reject("rejected with "+ rn);    

//     },1000);
// })

// // pr
// // .then(function(val){
// //     console.log(val);
    
// // })
// // .catch(function(val){
// //     console.log(val);
    
// // })

// async function abcd() {
//     try{
//         let val = await pr;
//         console.log(val);
//     }

//     catch(err){
//         console.log(err);
        
//     }

// }

//     abcd();
//         // await means wait karo until promise ka output resolve ya reject me 
//         // nahi aa jata!






let pr = new Promise(function(resolve, reject) {
    setTimeout(() => {
        let rn = Math.floor(Math.random() * 10);
        if (rn > 5) resolve("resolved with " + rn);  // ✅ was: res(...)
        else reject("rejected with " + rn);
    }, 1000);
});

async function abcd() {
    try {
        let val = await pr;
        console.log(val);
    } catch(err) {
        console.log(err);
    }
}          // ✅ closing brace was missing before the call

abcd();    // ✅ moved outside the function
