// let prm = new Promise((resolve , reject)=>{
//     setTimeout(() => {
//         // resolve();
//         reject();
//     },3000);
// })

// prm
//     .then(function() {
//         console.log("resolved");
//     })
//     .catch(function(){
//         console.log("rejected");
//     })


// fetch(`https://randomuser.me/api/`)
//     .then(function (data){
//         return data.json()
//     })
//     .then(function(realdata){
//     })


// fetch(`https://randomuser.me/api/`)
// .then((raw) => raw.json())
// .then((data) => {
//     console.log(data.results[0].name.first);
// });

// fetch(`https://randomuser.me/api/`)
// .then(raw=> raw.json())
// .then(data =>{
//     console.log(data.results[0].name.first);
// })
// .catch((err) => {
//     console.log(err); 
// })




// async function abcd(){
//     let raw = await fetch(`https://randomuser.me/api/`) // wait until data na ajaye
//     let data =  await raw.json(); // data row to json convert karo
//     console.log(data); // after conversion print it.    
// }   

// abcd();


// new Promise((resolved,reject) => {
//     setTimeout(()=>{
//         let num = Math.floor(Math.random()*10);
//     if(num < 5 )resolve(); 
//     else reject();
//     })
    
// })


function getNum(){
    return new Promise((resolve,reject) => {
    setTimeout(()=>{
        let num = Math.floor(Math.random()*10);
    if(num < 5 )resolve(true); 
    else reject(false);
    },500)
    
})
}

async function abcd() {
    let v = await getNum();
    console.log(v);
}

abcd();
