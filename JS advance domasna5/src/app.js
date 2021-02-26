let btn = document.getElementById("sub");
let body = document.getElementsByTagName("body")[0];
body.style.backgroundColor = "cyan";

async function getData(code) {
  let response = await fetch(`https://restcountries.eu/rest/v2/${code}`);
  let json = await response.json();
  return json;
}

function uiService(country) {
  body.innerHTML = `<table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">Capital</th>
      <th scope="col">Country</th>
      <th scope="col">Top Level domain</th>
      <th scope="col">Alpha 2 Code</th>
      <th scope="col">Alpha 3 Code</th>
      <th scope="col">Calling Codes</th>
      <th scope="col">Alt Spellings</th>
      <th scope="col">Region</th>
      <th scope="col">Sub Region</th>
      <th scope="col">Population</th>
      <th scope="col">Coordinates</th>
      <th scope="col">Demonym</th>
      <th scope="col">Area</th>
      <th scope="col">Gini</th>
      <th scope="col">Time zones</th>
      <th scope="col">Borders</th>
      <th scope="col">Native name</th>
      <th scope="col">Numeric Code</th>
      <th scope="col">Currencies</th>
      <th scope="col">Language</th>
      <th scope="col">Translations</th>
      <th scope="col">Regional Blocks</th>
      <th scope="col">Cioc</th>
      <th scope="col">Flag</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">${country.capital}</th>
      <td>${country.name}</td>
      <td>${country.topLevelDomain[0]}</td>
      <td>${country.alpha2Code}</td>
      <td>${country.alpha3Code}</td>
      <td>${country.callingCodes[0]}</td>
      <td>
      ${country.altSpellings[0]}<br></br>
      ${country.altSpellings[1]}<br></br>
      ${country.altSpellings[2]}<br></br>
      ${country.altSpellings[3]}
      </td>
      <td>${country.region}</td>
      <td>${country.subregion}</td>
      <td>${country.population}</td>
      <td>
      Lat: ${country.latlng[0]}<br></br>
      Lng: ${country.latlng[1]}
      </td>
      <td>${country.demonym}</td>
      <td>${country.area}</td>
      <td>${country.gini}</td>
      <td>${country.timezones[0]}</td>
      <td>${country.borders[0]}<br></br>${country.borders[1]}</td>
      <td>${country.nativeName}</td>
      <td>${country.numericCode}</td>
      <td>
      Code: ${country.currencies[0].code}<br></br>
      Name:${country.currencies[0].name}<br></br>
      Symbol: ${country.currencies[0].symbol}<br></br> 
      </td>
      <td>${country.languages[0].name}</td>
      <td>
      DE: ${country.translations.de}<br></br>
      ES: ${country.translations.es}<br></br>
      FR: ${country.translations.fr}<br></br>
      JA: ${country.translations.ja}<br></br>
      IT: ${country.translations.it}<br></br>
      BR: ${country.translations.br}<br></br>
      PT: ${country.translations.pt}<br></br>
      NL: ${country.translations.nl}<br></br>
      HR: ${country.translations.hr}<br></br>
      FA: ${country.translations.fa}<br></br>
</td>
      <td>${country.regionalBlocs[0].name}</td>
      <td>${country.cioc}</td>
      <td><img src="${country.flag}" width="40px" height="20px"></td>
    </tr>
  </tbody>
</table>`;
}

function uiServiceNum(length, curr) {
  let h3 = document.createElement("h3");
  h3.textContent = `There are ${length} countries that use ${curr.name} ${curr.symbol} as main currency. `;
  body.appendChild(h3);
}
async function runEverything() {
  let tallinn = await getData(`capital/tallinn `);
  let currency = tallinn[0].currencies[0];
  uiService(tallinn[0]);
  let country = await getData(`currency/${currency.code}`);
  uiServiceNum(country.length, currency);
}

btn.addEventListener("click", (e) => {
  e.preventDefault();
  runEverything();
});
