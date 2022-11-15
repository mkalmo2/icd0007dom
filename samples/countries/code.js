const table = document.getElementById('table');
const searchBox = document.getElementById('searchBox');
const cleanSearchIcon = document.getElementById('cleanSearchIcon');
const regionSelect = document.getElementById('region-select');

const allCountries = await fetch('data.json').then(r => r.json());

createRegionSelect(allCountries);

renderTable(allCountries);

searchBox.addEventListener('keyup', () => {
    renderTable(filterByInputs(allCountries));
});

regionSelect.addEventListener('change', () => {
    renderTable(filterByInputs(allCountries));
});

function filterByInputs(countries) {
    const region = regionSelect.value;
    const searchString = searchBox.value;

    return countries
        .filter(c => includes(c.name, searchString))
        .filter(c => region === '' || includes(region, c.region));
}

cleanSearchIcon.addEventListener('click', () => {

    searchBox.value = '';

    renderTable(filterByInputs(allCountries));
});

function displayDetails(country) {
    const mainDiv = document.getElementById('selectedCountry');
    const nameSpan = document.getElementById('selectedName');
    const capitalSpan = document.getElementById('selectedCapital');
    const areaSpan = document.getElementById('selectedArea');
    const populationSpan = document.getElementById('selectedPopulation');

    mainDiv.style.display = 'block';
    nameSpan.innerText = country.name;
    capitalSpan.innerText = country.capital;
    areaSpan.innerText = formatNumber(country.area);
    populationSpan.innerText = formatNumber(country.population);

    displayFlag(country.flag);
}

function displayFlag(src) {
    const flagDiv = document.getElementById('selectedFlag');

    removeChildren(flagDiv);

    const img = document.createElement('img');
    img.src = src;

    flagDiv.appendChild(img);
}

function renderTable(countries) {
    removeChildren(table);

    for (const country of countries) {
        addRow(country);
    }
}

function addRow(country) {
    const row = document.createElement('tr');

    row.appendChild(createCell(country.name));
    row.appendChild(createCell(country.region));

    row.onclick = function () {
        displayDetails(country);
    };

    table.appendChild(row);
}

function createRegionSelect(countries) {
    regionSelect.appendChild(createOption(''));

    const set = new Set();
    countries.map(c => c.region).forEach(set.add.bind(set));
    const sortedNames = Array.from(set).sort();

    for (const name of sortedNames) {
        regionSelect.appendChild(createOption(name));
    }
}

function createCell(contents) {
    const td = document.createElement('td');
    td.innerText = contents;
    return td;
}

function createOption(value) {
    const option = document.createElement('option');
    option.value = value;
    option.innerText = value;
    return option;
}

function removeChildren(node) {
    while (node.hasChildNodes()) {
        node.removeChild(node.lastChild);
    }
}

function includes(subject, needle) {
    return subject.toLowerCase().includes(needle.toLowerCase());
}

function formatNumber(num) {

    const reverse = s => s.split("").reverse().join('');

    num = reverse(num.toString());
    num = num.replaceAll(/(.{3})/g, '$1 ');
    return reverse(num).trim();
}
