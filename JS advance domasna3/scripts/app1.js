let body = document.getElementsByTagName("body")[0];
let higher3 = document.getElementById("higher3");
let femaleGrades = document.getElementById("femaleGrade5");
let maleSkopje = document.getElementById("maleSkopje");
let femaleAge24 = document.getElementById("femaleAge24");
let maleB = document.getElementById("maleB");
let higher3List = document.getElementById("higher3List");
let femaleGrade5List = document.getElementById("femaleGrade5List");
let maleSkopjeList = document.getElementById("maleSkopjeList");
let femaleAge24List = document.getElementById("femaleAge24List");
let maleBList = document.getElementById("maleBList");

let empty = function (ul) {
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
};

let helperService = {
  functions: function (data) {
    let higher3Array = data.filter((d) => d.averageGrade > 3);
    let femaleGrade5Array = data
      .filter((d) => d.gender.toLowerCase() == "female")
      .filter((d) => d.averageGrade === 5);
    let maleSkopjeArray = data
      .filter((d) => d.gender.toLowerCase() == "male")
      .filter((d) => d.city.toLowerCase() === "skopje")
      .filter((d) => d.age > 18);
    let femaleAge24Array = data
      .filter((d) => d.gender.toLowerCase() == "female")
      .filter((d) => d.age > 24);
    let maleBArray = data
      .filter((d) => d.gender.toLowerCase() == "male")
      .filter((d) => d.firstName.charAt(0).toLowerCase() == "b")
      .filter((d) => d.averageGrade > 2);
    return {
      high3: higher3Array,
      fGrade5: femaleGrade5Array,
      malSkopje: maleSkopjeArray,
      female24: femaleAge24Array,
      malB: maleBArray,
    };
  },
};

let uiService = {
  showH3List: function (statisticsData) {
    empty(higher3List);
    statisticsData.high3.forEach((element) => {
      let h3Li = document.createElement("li");
      h3Li.textContent = `Id: ${element.id} -- Name: ${element.firstName} -- Last Name: ${element.lastName} -- Email: ${element.email} --- Gender: ${element.gender} -- City: ${element.city} -- Average Grade: ${element.averageGrade} -- Age: ${element.age}`;
      higher3List.appendChild(h3Li);
    });
    body.appendChild(higher3List);
    higher3List.classList.remove("hidden");
    femaleGrade5List.classList.add("hidden");
    maleSkopjeList.classList.add("hidden");
    femaleAge24List.classList.add("hidden");
    maleBList.classList.add("hidden");
  },
  showF5List: function (statisticsData) {
    empty(femaleGrade5List);
    statisticsData.fGrade5.forEach((element) => {
      let fG5 = document.createElement("li");
      fG5.textContent = ` Id: ${element.id}--- Name: ${element.firstName} --- Last Name: ${element.lastName} --- Email: ${element.email} --- Gender: ${element.gender} --- City: ${element.city} --- Average Grade: ${element.averageGrade} --- Age: ${element.age}`;
      femaleGrade5List.appendChild(fG5);
    });
    body.appendChild(femaleGrade5List);
    higher3List.classList.add("hidden");
    femaleGrade5List.classList.remove("hidden");
    maleSkopjeList.classList.add("hidden");
    femaleAge24List.classList.add("hidden");
    maleBList.classList.add("hidden");
  },
  showMSkopjeList: function (statisticsData) {
    empty(maleSkopjeList);
    statisticsData.malSkopje.forEach((element) => {
      let mSkopje = document.createElement("li");
      mSkopje.textContent = `Full Name: ${element.firstName} ${element.lastName}`;
      maleSkopjeList.appendChild(mSkopje);
    });
    body.appendChild(maleSkopjeList);
    higher3List.classList.add("hidden");
    femaleGrade5List.classList.add("hidden");
    maleSkopjeList.classList.remove("hidden");
    femaleAge24List.classList.add("hidden");
    maleBList.classList.add("hidden");
  },
  showF24List: function (statisticsData) {
    empty(femaleAge24List);
    statisticsData.female24.forEach((element) => {
      let f24 = document.createElement("li");
      f24.textContent = `Full Name: ${element.firstName} ${element.lastName} -- Average Grade: ${element.averageGrade} `;
      femaleAge24List.appendChild(f24);
    });
    body.appendChild(femaleAge24List);
    higher3List.classList.add("hidden");
    femaleGrade5List.classList.add("hidden");
    maleSkopjeList.classList.add("hidden");
    femaleAge24List.classList.remove("hidden");
    maleBList.classList.add("hidden");
  },
  showmBList: function (statisticsData) {
    empty(maleBList);
    statisticsData.malB.forEach((element) => {
      let mB = document.createElement("li");
      mB.textContent = ` Id: ${element.id}--- Name: ${element.firstName} --- Last Name: ${element.lastName} --- Email: ${element.email} --- Gender: ${element.gender} --- City: ${element.city} --- Average Grade: ${element.averageGrade} --- Age: ${element.age}`;
      maleBList.appendChild(mB);
    });
    body.appendChild(maleBList);
    higher3List.classList.add("hidden");
    femaleGrade5List.classList.add("hidden");
    maleSkopjeList.classList.add("hidden");
    femaleAge24List.classList.add("hidden");
    maleBList.classList.remove("hidden");
  },
};

let studentService = {
  getData: function (btn) {
    fetch(
      ` https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json`
    )
      .then((response) => {
        response.json().then((data) => {
          if (!data) {
            let h1 = document.createElement("h1");
            h1.innerText = "ERROR";
            e.target.parentNode.appendChild(h1);
          } else {
            let aggregatedData = helperService.functions(data);

            if (btn === "h3") {
              uiService.showH3List(aggregatedData);
            }
            if (btn === "f5") {
              uiService.showF5List(aggregatedData);
            }
            if (btn === "MS") {
              uiService.showMSkopjeList(aggregatedData);
            }
            if (btn === "f24") {
              uiService.showF24List(aggregatedData);
            }
            if (btn === "mB") {
              uiService.showmBList(aggregatedData);
            }
          }
        });
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
higher3.addEventListener("click", (e) => {
  e.preventDefault();
  studentService.getData("h3");
});
femaleGrades.addEventListener("click", (e) => {
  e.preventDefault();
  studentService.getData("f5");
});
maleSkopje.addEventListener("click", (e) => {
  e.preventDefault();
  studentService.getData("MS");
});
femaleAge24.addEventListener("click", (e) => {
  e.preventDefault();
  studentService.getData("f24");
});
maleB.addEventListener("click", (e) => {
  e.preventDefault();
  studentService.getData("mB");
});
