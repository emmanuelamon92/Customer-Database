// <article>
//     <img src="https://randomuser.me/api/portraits/men/0.jpg" alt="John Doe">
//     <h2>John Doe</h2>
//     <p>JOHN.DOE@COMPANY.COM</p>
//     <div class="iconAddress">
//         <p>1234 Street Address</p>
//         <p>Cool City, GA 303030</p>
//         <p>555-555-5555</p>
//     </div>
// </articl>

// function createFighterListItem (fighterObj) {
//   first_name
//   last_name
//   profile_image
//   wins
//   losses
  // const tmplStr = `
  //   <section class="fighter">
  //     <div class="division">${fighterObj.weight_class}</div>
  //     <img src="${fighterObj.profile_image}" alt="${fighterObj.first_name} ${fighterObj.last_name}">
  //     <p class="name">${fighterObj.first_name} ${fighterObj.last_name}</p>
  //     <p class="record">${fighterObj.wins}-${fighterObj.losses}-${fighterObj.draws} ( W-L-D )</p>
  //     <button>More</button>
  //   </section>
  // `
//   return tmplStr;
// }
//
// let allHTML = "";
//
// fighters.forEach(function (item, idx, arr) {
//   allHTML += createFighterListItem(item)
// })

// let j = 0
// while (j < 100) {
//   allHTML += createFighterListItem(fighters[j])
//   j++
// }

//
//
//
// const fighterDOM = document.querySelectorAll('.fighters')[0]
// fighterDOM.innerHTML = allHTML;
// console.log(customers.results.indexOf(" "));




function internalCompanyDirectory (compDirectory){

  console.log(compDirectory.picture);

    const companyCard =`
        <article>
            <section class = "internalCard">
               <img src="${compDirectory.picture.large}" alt = "${compDirectory.name.first} ${compDirectory.name.last}">
               <h2>${compDirectory.name.first} ${compDirectory.name.last}</h2>
               <p>${compDirectory.email}</p>
               <div class = "iconAddress">
                    <p>${compDirectory.location.street}</p>
                    <p>${compDirectory.location.city} ${compDirectory.location.state} ${compDirectory.location.postcode}</p>
                    <p>${compDirectory.phone}</p>
               </div>
            </section>
        </article>
  `
return companyCard;
}

let allHTML = "";

// customers.forEach(function(item, idx, arr)){
//   allHTML += internalCompanyDirectory(item)
// });

customers.results.forEach(function(compDirectory){

  allHTML += internalCompanyDirectory(compDirectory);
});

const customerDOM = document.querySelectorAll('.customers')[0]
customerDOM.innerHTML = allHTML;

// function arr() {
//   console.log(arr);
// }
//
//
//
// arr(); //calling functio
