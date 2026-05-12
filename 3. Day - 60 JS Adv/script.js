// Question- 01:

// Ek function banao afterDelay
// Requirements
// ye function 2 cheeze lega
// time(milliseconds)
// callback function
// Given time k baad call back kare
// Callback k andar "Callback Executed" print hona chahiye"
// Use Case Socho:
// "2sec baad ek kaam karna hai"
// Goal:
// Samjhana ki callback delay k baad kese execute hota hai
// Ye setTimeout + callback connection hai


// function afterDelay(time,callback){
//     setTimeout(function(){
//         callback();
//         },time)
// }

// afterDelay(3000,function(){
//     console.log("Callback Executed!");
    
// })



// Question - 02:

//Ek function banao guest User

//REQUIREMENTS:
// Username lega
// 1 sec k baad callback ko object de
// id
// username 
// Then:
// Callback k anadr aur ek function call karo getUserPosts
// getUserPosts
// userIdLega
// 1 sec k baad callback ko post ka array de

// FinalOutput:
// User ka username print ho fir uske posts print ho

//Goal:
// samajhna hai ki async ka result next async ko kese milta hai!


// ans


// function getUser(username,cb){
//     console.log("Getting User Details...");
    
//     setTimeout(() => {
//          cb({id : 1,username : "aman"});
//     },1000);
// }


// function getUserPosts(id,cb){
//     console.log("Getting User's Post's ");
    
//     setTimeout(() => {
//         cb(["GM","GN","GAF"]);
//     },2000)
// }

// getUser("aman", function(data){
//     getUserPosts(data.id, function (allposts){
//         console.log(data.username, allposts);
//     });
// });






//
// function instagramSeDataLao (username,cb){
//     console.log("Getting user-data...");
    
//     setTimeout(()=>{
//         cb({uniqueNum : 1234 , username:"Aman"});
//     },3000);
// }

// function metaPeJaoDataLaao(uniqueNum, cb){
//     console.log("Getting images...");
    
//     setTimeout(()=>{
//         cb(["img1","img2","img3","img4","img5"]);
//     },4000);
// }

// instagramSeDataLao("aman",function(data){
//     metaPeJaoDataLaao(data.uniqueNum,function(image){
//         console.log(image);
        
//     });
// });





// Question - 3:
// 3 functions banao
// login user
// 1 second baad callback ko user object de
// fetch permission
// userId lega
// 1 second baad callback ko permission array de
// load Dashboard
// permissions lega
// 1 sec baad callback ko dashboard loaded bole
// Flow:
// pehle login user
// uske andar fetch permission
// uske andar loadDashboard
// final output console me print ho 
// Goal:
// callback nesting ko feel karna
// yhi structure baad me callback hell banata hai





function loginUser(username,cb){
    console.log("logging in user...");
    
    setTimeout(()=>{
        cb({id:1234,username:"aman"});
    },1000);
}
function fetchPermissions(id , cb){
    console.log("fetching permissions...");
    
    setTimeout(()=>{
        cb(["read","write","delete"]);
    },2000);
}
function loadDashboard(permissions, cb){
    console.log("loading dashboard...");
    setTimeout(()=>{
        cb(); 
    },2000)
}



loginUser("aman" , function(userdata){
    fetchPermissions(userdata.id, function(permissions){
        loadDashboard(permissions, function() {
            console.log("dashboard Loaded!");
            
        });
    });
});  // this is a call-back hell : cb k andar cb k andar cb!

