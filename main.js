// ***********************________1________*************************
// var missionsArray = [
//     {
//         missionName: "clean",
//         isCompleted: true
//     },
//     {
//         missionName: "order",
//         isCompleted: false
//     },
//     {
//         missionName: "shop",
//         isCompleted: true
//     },
//     {
//         missionName: "study",
//         isCompleted: true
//     },
//     {
//         missionName: "eat",
//         isCompleted: false
//     }
// ];

// var container = document.getElementById("container");

// for (var i = 0; i < missionsArray.length; i++) {
//     if (missionsArray[i].isCompleted) {
//         document.write(`<p style="background: red">mission name:${missionsArray[i].missionName} is Completed:${missionsArray[i].isCompleted}.</p>`)
//     }
//     else {
//         document.write(`<p>mission name:${missionsArray[i].missionName} is Completed:${missionsArray[i].isCompleted}.</p>`)
//     }
// }

// var addMissionBtn = document.getElementById("addMissionBtn");
// var addMissionInput = document.getElementById("addMissionInput");

// addMissionBtn.onclick = function () {
//     var addMissionObj = {
//         missionName: addMissionInput.value,
//         isCompleted: false
//     }
//     missionsArray.push(addMissionObj);
//     container.innerHTML += `<p>mission name:${addMissionObj.missionName} is Completed:${addMissionObj.isCompleted}.</p>`;
//     for (var i = 0; i < missionsArray.length; i++) {
//         missionsArray[i].Id = Math.ceil(Math.random() * 2000);


//     }
//     console.log(missionsArray);
// }
// ***********************________1________*************************


// ***********************________1________*************************
// var movies = [
//     {
//         name: "bad boys1",
//         image: "https://www.hollywoodreporter.com/wp-content/uploads/2020/03/bad_boys_-_photofest_still_-_h_2020_.jpg?w=1024",
//         actors: ["will smith", "martin lawrence", "Gabrielle Union"]
//     },
//     {
//         name: "bad boys2",
//         image: "https://m.media-amazon.com/images/M/MV5BZmU4NzVkZjEtZmQxMi00ZDY5LWI3ZDYtMWRmZjE5YmYwZjQzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
//         actors: ["martin lawrence", "will smith", "Gabrielle Union"]
//     },
//     {
//         name: "bad boys3",
//         image: "https://media.elcinema.com/uploads/_315x420_67eb4eddabdb2840a0a86a6c180fcbdf3c547ac830be25cf6818d63095c31267.jpg",
//         actors: ["Gabrielle Union", "will smith", "martin lawrence"]
//     },
// ];

// for (var i = 0; i < movies.length; i++) {
//     document.write(`<p>movie name:${movies[i].name}</p>`);
//     document.write(`<p><img src="${movies[i].image}"width="400px" height="400px"></p>`);
//     for (let j = 0; j < movies[i].actors.length; j++) {
//         document.write(`<p>${movies[i].actors[j]}</p>`)
//     }
// }
// ***********************________1________*************************


// ***********************________2________*************************
// var mission3Input = document.getElementById("mission3Input");
// var mission3Btn = document.getElementById("mission3Btn");
// var mission3Div = document.getElementById("mission3Div");

// mission3Btn.onclick = function(){
//     mission3Div.innerText += mission3Input.value
// }
// ***********************________2________*************************


// ***********************_______3________*************************
// var mission3Input1 = document.getElementById("mission3Input1");
// var mission3Input2 = document.getElementById("mission3Input2");
// var mission3Btn = document.getElementById("mission3Btn");

// mission3Btn.onclick = function () {
//     var obj = {
//         firstName: mission3Input1.value,
//         lastName: mission3Input2.value
//     }
// }
// ***********************_______3________*************************


// ***********************________4________*************************
// var mission4Name = document.getElementById("mission4Name");
// var mission4Email = document.getElementById("mission4Email");
// var mission4Age = document.getElementById("mission4Age");
// var mission4Btn = document.getElementById("mission4Btn");
// var mission4Div = document.getElementById("mission4Div");

// mission4Btn.onclick = function () {
//     var userObj = {
//         userName: mission4Name.value,
//         userEmail: mission4Email.value,
//         userAge: mission4Age.value
//     }
//     console.log(userObj);
//     mission4Div.innerText += `name:${userObj.userName}, email:${userObj.userEmail}, age:${userObj.userAge}`;
// }
// ***********************________4________*************************


// ***********************________5________*************************
// var mission5FName = document.getElementById("mission5FName");
// var mission5LName = document.getElementById("mission5LName");
// var mission5Btn = document.getElementById("mission5Btn");

// mission5Btn.onclick = function () {
//     var userObj={
//         firstName:mission5FName.value,
//         lastName:mission5LName.value
//     }
//     console.log(userObj);
// }
// ***********************________5________*************************


// ***********************________6________*************************
// for(var i=0; i<10;i++){
//     document.write(`<p>${i}</p>`);
// }
// ***********************________6________*************************


// ***********************________7________*************************
// var emails = [
//     { email: "marcos@gmail.com" },
//     { email: "matan@gmail.com" },
//     { email: "lior@gmail.com" },
//     { email: "aschalow@gmail.com" },
//     { email: "haim@gmail.com" }
// ];

// var mission7Input = document.getElementById("mission7Input");
// var mission7P = document.getElementById("mission7P");
// var mission7Btn = document.getElementById("mission7Btn");
// var mission7P = document.getElementById("mission7P");

// mission7Btn.onclick = function () {
//     for (var i = 0; i < emails.length; i++) {
//         if (emails[i].email == mission7Input.value) {
//             mission7P.innerText = "your email is here";
//             break;
//         }
//         else {
//             mission7P.innerText = "welcome";
//         }
//     }
// }
// ***********************________7________*************************


// ***********************________8________*************************
// var mission8Input = document.getElementById("mission8Input");
// var mission8Btn = document.getElementById("mission8Btn");
// var mission8P = document.getElementById("mission8P");

// mission8Btn.onclick = function () {
//     mission8P.innerText = `the text is ${mission8Input.value} and the length is ${mission8Input.value.length}`
// }
// ***********************________8________*************************


// ***********************________9________*************************
// var mission9Name = document.getElementById("mission9Name");
// var mission9Country = document.getElementById("mission9Country");
// var mission9Flag = document.getElementById("mission9Flag");
// var mission9Age = document.getElementById("mission9Age");
// var mission9Btn = document.getElementById("mission9Btn");
// var mission9Div = document.getElementById("mission9Div");

// mission9Btn.onclick = function () {
//     var person = {
//         fullName: mission9Name.value,
//         country: mission9Country.value,
//         age: mission9Age.value,
//         flag: mission9Flag.value
//     }
//     console.log(person);

//     mission9Div.innerHTML = `<p>name:${person.fullName}, country:${person.country},age:${person.age}</p>`
//     mission9Div.innerHTML += `<p> <img src="${person.flag}"</p>`;
// }
// ***********************________9________*************************