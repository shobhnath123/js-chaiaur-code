// Dates

let myDate = new Date();

// console.log(myDate.toString()); 

// console.log(myDate.toDateString()); // Mon Oct 23 2023
// console.log(myDate.toTimeString()); // 10:30:00 GMT+0530 (India Standard Time)
// console.log(myDate.toLocaleString()); // 10/23/2023, 10:30:00 AM
// console.log(myDate.toLocaleDateString()); // 10/23/2023
// console.log(myDate.toLocaleTimeString()); // 10:30:00 AM
// console.log(myDate.toISOString()); // 2023-10-23T05:00:00.000Z
// console.log(myDate.toUTCString()); // Mon, 23 Oct 2023 05:00:00 GMT

// // let myCreatedDate = new Date(2023,0, 23);
// // let myCreatedDate = new Date(2023,0, 23 , 5 , 3);
// let myCreatedDate = new Date("2023-01-14");

// console.log(myCreatedDate.toLocaleString()); // Mon Jan 23 2023 00:00:00 GMT+0530 (India Standard Time)

// let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date();

// console.log(newDate)
// console.log(newDate.getMonth());
// console.log(newDate.getDate());
// console.log(newDate.getFullYear());



console.log(newDate.toLocaleString("default",{
    weekday: "long",
    timeZone: "Asia/Kolkata",
    year: "numeric",
}))




