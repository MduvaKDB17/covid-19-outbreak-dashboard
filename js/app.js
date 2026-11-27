function populateCountryDropdown(countries) {
    const countrySelect = document.getElementById("country-select");

    countries.forEach(function(country) {
        const option = document.createElement("option");

        option.value = country.code;
        option.textContent = country.country;

        countrySelect.appendChild(option);
    });
}

function handleCountrySelection(countries) {
    const countrySelect = document.getElementById("country-select");

    countrySelect.addEventListener("change", function() {
        const selectedCode = countrySelect.value;

        if (selectedCode === "") {
            console.log("No country selected");
            return;
        }

        const selectedCountry = countries.find(function(country) {
            return country.code === selectedCode;
        });

        console.log(selectedCountry);
    });
}

async function initializeDashboard() {
    try {
        const covidData = await loadCovidData();

        console.log(covidData);

        populateCountryDropdown(covidData.countries);

        handleCountrySelection(covidData.countries);

    } catch (error) {
        console.error("Dashboard initialization failed:", error);
    }
}

initializeDashboard();