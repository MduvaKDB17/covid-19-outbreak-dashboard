async function loadCovidData() {
    const response = await fetch("data/covid-19.json");

    if (!response.ok) {
        throw new Error("Failed to load COVID-19 data");
    }

    const data = await response.json();

    return data;
}