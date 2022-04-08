const saveButton = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"];

function logSomething() {
  myLeads.push(inputEl.value);
  // console.log(myLeads);
}

saveButton.addEventListener("click", logSomething);

for(let i = 0; i < myLeads.length; i++){
  ulEl.innerHTML += "<li>" + myLeads[i] + "</li>";
}
