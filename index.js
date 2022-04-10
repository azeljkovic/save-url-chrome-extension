const saveButton = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
let myLeads = [];
const deleteBtn = document.getElementById("delete-btn");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocalStorage){
  myLeads = leadsFromLocalStorage;
  renderLeads();
}
console.log(leadsFromLocalStorage);

deleteBtn.addEventListener("dblclick", cleanup)

function cleanup() {
  myLeads = [];
  localStorage.clear();
  renderLeads();
}


function pushLeads() {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  renderLeads();
  console.log( localStorage.getItem("myLeads") );
}

saveButton.addEventListener("click", pushLeads);

function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    listItems += `
        <li>
            <a href="${myLeads[i]}" target="_blank">
                ${myLeads[i]}
            </a>
        </li>`;
  }
  ulEl.innerHTML = listItems;
}


