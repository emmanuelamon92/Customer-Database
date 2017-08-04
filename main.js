// <div class="icon">
//     <img src="https://randomuser.me/api/portraits/men/0.jpg" alt="John Doe">
//     <h2>John Doe</h2>
//     <p>JOHN.DOE@COMPANY.COM</p>
//     <div class="iconAddress">
//         <p>1234 Street Address</p>
//         <p>Cool City, GA 303030</p>
//         <p>555-555-5555</p>
//     </div>
// </div>


// for (var i = 0; i < customers.results.length; i++) {
//   customers.results[i]

let divIcon = document.createElement("div");
divIcon.className = "icon"
let rowSelect = document.querySelector("#row1");
rowSelect.appendChild(divIcon);

let imgMain = document.createElement("img");
let imgName = document.createElement("h2");
let imgEmail = document.createElement("p");
let iconAddress = document.createElement("div");
iconAddress.className = "iconAddress";
let imgSelfie = document.querySelector(".icon");
imgSelfie.appendChild(imgMain);
imgSelfie.appendChild(imgName);
imgSelfie.appendChild(imgEmail);
imgSelfie.appendChild(iconAddress);

let streetAdd = document.createElement("p");
let cityAdd = document.createElement("p");
let phoneAdd = document.createElement("p");
let iconAddressClass = document.querySelector(".iconAddress");
iconAddressClass.appendChild("streetAdd");
iconAddressClass.appendChild("cityAdd");
iconAddressClass.appendChild("phoneAdd");

//create a card and make it reusable and use a function to pull data from array

// console.log(customers);
//
// function createFighterListItem (fighterObj) {
//   first_name
//   last_name
//   profile_image
//   wins
//   losses
//   const tmplStr = `
//     <section class="fighter">
//       <div class="division">${fighterObj.weight_class}</div>
//       <img src="${fighterObj.profile_image}" alt="${fighterObj.first_name} ${fighterObj.last_name}">
//       <p class="name">${fighterObj.first_name} ${fighterObj.last_name}</p>
//       <p class="record">${fighterObj.wins}-${fighterObj.losses}-${fighterObj.draws} ( W-L-D )</p>
//       <button>More</button>
//     </section>
//   `
//   return tmplStr;
// }
//
// let allHTML = "";
//
// fighters.forEach(function (item, idx, arr) {
//   allHTML += createFighterListItem(item)
// })
//
// // let j = 0
// // while (j < 100) {
// //   allHTML += createFighterListItem(fighters[j])
// //   j++
// // }
//
//
//
//
// const fighterDOM = document.querySelectorAll('.fighters')[0]
// fighterDOM.innerHTML = allHTML;
