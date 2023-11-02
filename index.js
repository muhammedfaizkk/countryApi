


fetch("https://restcountries.com/v2/all")
  .then((res) => res.json())
  .then((data) => getCountryDetails(data))
  .catch((err) => alert("err"));


function getCountryDetails(data) {
  let country = document.getElementById("countrySelect");
  data.forEach(element => {
    let option = document.createElement('option');
    option.value = element.name;
    // console.log(option.value);
    option.text = element.name;
    country.append(option);



  });
}


function displayCountry() {
  let country = document.getElementById("countrySelect").value
  let contentHtml = "";
  // console.log(country);
  fetch(`https://restcountries.com/v2/name/${country}?fullText=true`)
    .then((details) => details.json())
    .then((countryData) => {
      // console.log(countryData);
      let countryName = country;
      // console.log(countryName);
      let population = countryData[0].population;
      // console.log(population);
      let capital = countryData[0].capital;
      // console.log(capital);
      let language = countryData[0].languages[0].name;
      // console.log(language);
      let currency = countryData[0].currencies[0].name;
      // console.log(currency);
      let symbol = countryData[0].currencies[0].symbol;
      // console.log(symbol);
      let flags = countryData[0].flags.png;
      // console.log(flags);

      contentHtml += `
      <div class="card" style="width: 18rem;">
      <img  src="${flags}" class="card-img-top" alt="...">
      <div class="card-body">
          <div class="country-name">
              <h4><b>${countryName}</b></h4>
          </div>
          <ol class="details">
              <li id="Population">Population: ${population}</li>
              <li id="Capital">Capital: ${capital}</li>
              <li id="Language">Language: ${language}</li>
              <li id="Currency">Currency Name: ${currency}</li>
              <li id="Symbol">Currency Symbol: ${symbol}</li>
          </ol>

      </div>
  </div>
      `
  

      document.getElementById('card-prnt').innerHTML = contentHtml
    })
    




}






