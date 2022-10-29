let el, i;
let data = [
    { firstname: "Bertha", lastname: "Morales Roque", yearold: "20", profession: "Maestra", Title: "si", Date:"22/10/2003"},
    { firstname: "Pablo", lastname: "Rodriguez Perez", yearold: "31", profession: "Doctor", Title: "si", Date: "10/05/2011" },
    { firstname: "Jazmin", lastname: " Estevez Miranda ", yearold: "26", profession: "Contadora", Title: "No", Date: "01/07/2012" },
    { firstname: "Saul", lastname: "Mendez Solis", yearold: "40", profession: "Abogado", Title: "si", Date: "19/12/2009" }
];
let panel = document.querySelector("#panel");


function clearForm() {
  document.querySelector("#fname").value = "";
    document.querySelector("#lname").value = "";
    document.querySelector("#old").value = "";
    document.querySelector("#profession").value = "";
    document.querySelector("#Title").value = "";
    document.querySelector("#Date").value = "";
}

function renderItem() {

  panel.textContent = "";
  data.forEach(x => {
    el = document.createElement("option");
      el.innerText = `${x.firstname} ${x.lastname} ${x.yearold} ${x.profession} ${x.Title}   ${x.Date} `;
    panel.append(el);
  });
}

function create() {
  let fn = document.querySelector("#fname").value;
    let ln = document.querySelector("#lname").value;
    let ol = document.querySelector("#old").value;
    let pr = document.querySelector("#profession").value;
    let tl = document.querySelector("#Title").value;
    let dt = document.querySelector("#Date").value;
    data = [...data, { firstname: fn, lastname: ln, yearold: ol, profession: pr, Title: tl, Date:dt }];
  clearForm();
  console.log(data)
  renderItem();
}

function panelClick() {
  i = panel.selectedIndex;
  document.querySelector("#fname").value = data[i].firstname;
    document.querySelector("#lname").value = data[i].lastname;
    document.querySelector("#old").value = data[i].yearold;
    document.querySelector("#profession").value = data[i].profession;
    document.querySelector("#Title").value = data[i].Title;
    document.querySelector("#Date").value = data[i].Date;
}

function update() {
  data[i].firstname = document.querySelector("#fname").value;
    data[i].lastname = document.querySelector("#lname").value;
    data[i].yearold = document.querySelector("#old").value;
    data[i].profession = document.querySelector("#profession").value;
    data[i].Title = document.querySelector("#Title").value;
    data[i].Title = document.querySelector("#Date").value;
  renderItem();
}

function deleteItem() {
  data.splice(i, 1);
  renderItem();
}

 renderItem();