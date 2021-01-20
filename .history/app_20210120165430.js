// All the Variables we will be working with
const main = document.getElementById("main");
const addUserBtn = document.getElementById("add-user");
const doubleBtn = document.getElementById("double");
const showMillieBtn = document.getElementById("show-millionaires");
const sortBtn = document.getElementById("sort");
const calculateWealthTotal = document.getElementById("calculate-wealth");

// this is where the data for the people and their money will be stored
let data = [];

// Create the functionality for the APP
// fetch random user and add  money
// async is a better way of calling the fetch API
async function getRandomUser() {
  const res = await fetch("https://randomuser.me/api/1.3/");
  const data = await res.json();
  //   we created the user const to attach the data to the results of the called API
  const user = data.results[0];

  //   we now access the API results by creating a new user
  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000),
  };
  //   we are adding the newUser object to a function called addData
  addData(newUser);
}

// add new obj to data array

function addData(obj) {
  // we are going to push the newUser which is an obj into this function using
  // push()
  data.push(obj);

  // lets add the created DOM function to this
  updateDOM();
}

function updateDOM(providedData = data) {
  // the (= data means the if the parameter (provideddata is
  //  empty then it should return the data array)

  // WE HAVE TO CLEAR THE MAIN DIV FIRST
  main.innerHTML = "<h2><strong>Person</strong> Wealth</h2>";

  providedData.forEach((item) => {
    // now we have to create a new div element inside the main section in our HTML
    const element = document.createElement("div");
    element.classList.add("person");
    element.innerHTML = `<strong> ${item.name}</strong> ${formatMoney(
      item.money
    )}`;
    main.appendChild(element);
  });
}

// we need to format the numbers so that they can come in a money format
function formatMoney(number) {
  return "$" + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
}

// this will double everyones money when the double
//  money btn is clicked
// created with the map() method
function doubleMoney() {
  // will get the initial data and map through it
  data = data.map((user) => {
    return { ...user, money: user.money * 2 };
  });
  updateDOM();
}
// here we use the SORT() to arrange the
// order from ascending to descending
function sortByRichest() {
  data.sort(function (a, b) {
    return b.money - a.money;
  });
  updateDOM();
}

// filter only millionaires
function filterByRichest() {
  data = data.filter(function (user) {
    return user.money > 1000000;
  });

  updateDOM();
}

// calculate the total wealth with REDUCE()
 function totalWealthCalculator(){
   const wealth = data.reduce(function (acc,user){
    acc += user.money
   })
 }
// event Listeners
addUserBtn.addEventListener("click", getRandomUser);
doubleBtn.addEventListener("click", doubleMoney);
sortBtn.addEventListener("click", sortByRichest);
showMillieBtn.addEventListener("click", filterByRichest);
calculateWealthTotal.addEventListener("click", totalWealthCalculator);
