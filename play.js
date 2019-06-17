
// var name = "Max";
// var age = 33;
// var hasHobbies = true;

// function summarizeuser(userName, userAge, userHobby) {
//   return(   /* since return statement contains multiple lines, we wrap it in parenthesis;otherwise it would add Semi-colon automatically(ASI), and below lines will be ignored by javascript  */
//     "Name is " + userName + 
//     ", Age is " + userAge + 
//     ", He has hobbies? " + userHobby
//   )
// }

// console.log(summarizeuser(name="amol", age, hasHobbies));


// 6) Array with 'for of' loop: We use 'for of' loop to iterate through each array item..
const hobbies = ["Sports", "Music", 123];

for(let hobby of hobbies) {
  // if (hobby === 123){
  //   console.log(hobby, "this is number");
  // }
  // console.log("hobby: ", hobby)
}

// console.log(hobbies.map((hobby) => { return hobby = "Hobby: " + hobby }))
//  console.log(hobbies.map(hobby => "Hobby: " + hobby ))
//  console.log(hobbies);


// array.slice method to copy all the items of one array into another array..
// var copiedArray = hobbies.slice();
var copiedArray = [...hobbies, "Another element"];
console.log("copiedArray is:", copiedArray);

// refernce type; only store, an address, pointing at the place in memory where that array is stored. 