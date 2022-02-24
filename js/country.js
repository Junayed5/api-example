const loadCountry = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountry(data))
}

loadCountry();

const displayCountry = country => {
    const countriesDiv = document.getElementById('countries')

    country.forEach(countries => {
        // console.log(countries.name.common);
        const div = document.createElement('div')
        div.classList.add('country')
            div.innerHTML = `
            <h3>${countries.name.common}</h3>
            <p>${countries.capital}</p>
            <button onclick="loadCountryByName('${countries.name.common}')">Details</button>
        `;
        countriesDiv.appendChild(div)

    });
}

const loadCountryByName = name => {
    fetch(`https://restcountries.com/v3.1/name/${name}`)
        .then(res => res.json())
        .then(data => displayCountryDetails(data[0]))
    // console.log(name);
}

const displayCountryDetails = country => {
    // console.log(country);
    const countryDiv = document.getElementById('country-details')
    countryDiv.innerHTML = `
        <h3>Name:${country.name.common}</h3>
        <p>Population:${country.population}</p>
        <img width="150px" src="${country.flags.svg}">
    `
}