// // let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&exclude={part}&appid={apikey}`
// // let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&exclude={part}&appid={000e6c09c39e3d3c7bf423b43bb494c8}`




    // async function getWeather(city) {

    //     try{
            
    //     let apikey = `000e6c09c39e3d3c7bf423b43bb494c8`;
        
    //     let rawdata = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`
    //     );

    //     if(!rawdata.ok) {
    //         throw new Error("City Not Found or Something Wet Wrong!");
    //     }

    // let realData = await rawdata.json();
    //     if(realData.main.temp<0){
    //         console.warn("Too cold out there !");
    //     }
    //     else if (realData.main.temp>40){
    //         console.warn(`Too hot out there !   : ${realData.main.temp}°C`)};

    // console.log(realData.main.temp);
    // // console.log(rawdata); // ok ki value false means data nahi aya hai!
    //     }
    //     catch(err){
    //         console.error(err.message); 
    //     }
    // } 

    // getWeather("Delhi");
    // getWeather("Surat");
    // getWeather("Barrow");





// async function getWeather(city) {

//     try {

//         let apikey = `000e6c09c39e3d3c7bf423b43bb494c8`;

//         let rawdata = await fetch(
//         `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`
//         );

//         if (!rawdata.ok) {
//             throw new Error("City Not Found or Something Went Wrong!");
//         }

//         let realData = await rawdata.json();

//         if (realData.main.temp < 0) {
//             console.warn(`Too cold out there in ${city}!`);
//         }
//         else if (realData.main.temp > 40) {
//             console.warn(`Too hot out there in ${city}! : ${realData.main.temp}°C`);
//         }

//         console.log(`${city} : ${realData.main.temp}°C`);

//     }
//     catch (err) {
//         console.error(err.message);
//     }
// }

// getWeather("Delhi");
// getWeather("Surat");
// getWeather("Barrow");




// Scenerio 2 :

const users = [
  "aaravsharma01@gmail.com",
  "priyapatil22@gmail.com",
  "rohanverma99@gmail.com"
];


function sendEmail(email){
    return new Promise((resolve,reject) => {
        let time = Math.floor(Math.random()*5);
        
        
        setTimeout(() => {
            let probability = Math.floor(Math.random()*10);
            if (probability  <= 5) resolve("Gmail sent successfully")
            else reject("Gmail not sent!")
        },time*1000);
    })
}

// sendEmail("aaravsharma01@gmail.com")
// .then(function(data){
//     console.log(data);
// })
// .catch(function(err){
//     console.log(err);
    
// })

async function sendEmails(userlist){
   let allresponses =  userlist.map(function(email){
        return sendEmail(email)
        .then(function(data){
            return data;
        })
        .catch(function(err){
            return err;
        });
    });

    // console.log(allresponses);
    let ans = await Promise.all(allresponses);
    // console.log(ans);

    ans.forEach(function (status) {
        console.log(status);
    });
    
    
}

sendEmails(users); 
