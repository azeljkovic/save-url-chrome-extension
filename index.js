let myLeads = [];

const saveButton = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

const tabs = [
  {url: "https://www.someurl.com/"}
]

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}
console.log(leadsFromLocalStorage);

deleteBtn.addEventListener("dblclick", cleanup)
tabBtn.addEventListener("click", saveUrl);

function saveUrl() {
  myLeads.push(tabs[0].url);
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);
}

function cleanup() {
  myLeads = [];
  localStorage.clear();
  render(myLeads);
}


function pushLeads() {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);
  console.log(localStorage.getItem("myLeads"));
}

saveButton.addEventListener("click", pushLeads);

function render(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    listItems += `
        <li>
            <a href="${leads[i]}" target="_blank">
                ${leads[i]}
            </a>
        </li>`;
  }
  ulEl.innerHTML = listItems;
}


