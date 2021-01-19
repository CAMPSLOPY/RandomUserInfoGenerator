// All the Variables we will be working with
const main = document.getElementById("main");
const addUser = document.getElementById("add-user");
const double = document.getElementById("double");
const showMillie = document.getElementById("show-millionaires");
const sort = document.getElementById("sort");
const calculateWealthTotal = document.getElementById("calculate-wealth");

// this is where the data for the people and their money will be stored
let data = [1,2,3,4,5,6,7];


// Create the functionality for the APP
// fetch random user and add  money
// async is a better way of calling the fetch API
async function getRandomUser() {
  const res = await fetch("https://randomuser.me/api/1.3/");
  const data = await res.json();

  const user = data.results[0];
  console.log(user);
}
getRandomUser();
getRandomUser();
getRandomUser();
