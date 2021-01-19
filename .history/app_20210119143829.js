// All the Variables we will be working with
const main = document.getElementById("main");
const addUser = document.getElementById("add-user");
const double = document.getElementById("double");
const showMillie = document.getElementById("show-millionaires");
const sort = document.getElementById("sort");
const calculateWealthTotal = document.getElementById("calculate-wealth");

// this is where the data for the people and their money will be stored
let data = [];

getRandomUser();
getRandomUser();
getRandomUser();
// Create the functionality for the APP
// fetch random user and add  money
// async is a better way of calling the fetch API
async function getRandomUser() {
  const res = await fetch('https://v6.exchangerate-api.com/v6/1fc3a53e3285ffb4990d7d56/latest/USD');
  const data = await res.json();
  console.log(data);
}


