import { cardGen, GET, getWithCoordinates, capitalize } from "./modules/components.js";

import { provinces, marineLocations, backgrounds, backgroundsSea } from "./modules/data.js";

// Seleziona il contenitore principale delle card delle province
const containerEl = document.querySelector('.container-card');

// Seleziona il contenitore principale delle card delle località marine
const containerSeaEl = document.querySelector('.container-sea');

// Seleziona l'elemento di selezione delle province nel DOM
const selectElement = document.getElementById('provinces');

const searchFormEl = document.querySelector('#search-location');
const searchInputEl = document.querySelector('.search-input');
const defaultBackgroundImage = 'images/background-default.png';

// Funzione asincrona per generare le card delle località marine
const generateCardsSea = async () => {
    try {
        // Cicla attraverso tutte le località marine per ottenere i dati e generare le card
        for (let i = 0; i < marineLocations.length; i++) {
            const location = marineLocations[i];

            // Chiamata GET per ottenere i dati della località marina usando le coordinate
            const data = await getWithCoordinates(location.lat, location.lon);

            // Trova lo sfondo corrispondente alla località marina
            const background = backgroundsSea.find(bg => bg.name.toLowerCase() === marineLocations[i].name.toLowerCase());

            // Genera la card utilizzando i dati e lo sfondo trovato
            const card = cardGen(data, background.image, location.name);

            // Aggiungi la card al contenitore delle località marine
            containerSeaEl.appendChild(card);
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

// Funzione asincrona per generare le card delle province siciliane
const generateCards = async () => {
    try {
        containerEl.textContent = ''; // Svuota il contenitore delle card

        // Cicla attraverso tutte le province per ottenere i dati e generare le card
        for (let i = 0; i < provinces.length; i++) {
            const location = provinces[i];

            // Chiamata GET per ottenere i dati della provincia
            const data = await GET(provinces[i]);

            // Trova lo sfondo corrispondente alla provincia
            const background = backgrounds.find(bg => bg.name.toLowerCase() === provinces[i].toLowerCase());

            // Genera la card utilizzando i dati e lo sfondo trovato
            const card = cardGen(data, background.image, location);

            // Aggiungi la card al contenitore
            containerEl.appendChild(card);
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

// Funzione per generare la card della provincia selezionata o di tutte le province siciliane
const generateSelectedCard = async (selectedProvince) => {
    try {
        containerEl.textContent = ''; // Svuota il contenitore delle card delle province

        // Se non è stata selezionata una provincia o è selezionato "seleziona una provincia siciliana", carica tutte le card delle province
        if (!selectedProvince || selectedProvince === 'seleziona una provincia siciliana') {
            await generateCards();  // Carica tutte le card delle province

        } else {
            // Ottieni i dati della provincia selezionata
            const data = await GET(selectedProvince);

            // Trova lo sfondo corrispondente alla provincia selezionata
            const background = backgrounds.find(bg => bg.name === selectedProvince);

            // Genera la card utilizzando i dati, lo sfondo trovato e la provincia selezionata
            const card = cardGen(data, background.image, selectedProvince);

            // Aggiungi la card al contenitore delle province
            containerEl.appendChild(card);
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

const generateSearchCard = async (cityName) => {
    try {

        const data = await GET(cityName);
        const card = cardGen(data, defaultBackgroundImage, cityName);
        containerEl.append(card);

    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

// Event listener per il cambio della select delle province
selectElement.addEventListener('change', async function () {

    const selectedProvince = selectElement.value;  // Ottiene il valore selezionato
    generateSelectedCard(selectedProvince); // Chiama la funzione per generare la card della provincia selezionata
});

searchFormEl.addEventListener('submit', async (event) => {
    event.preventDefault();
    const cityName = searchInputEl.value.trim();

    if (cityName) {
        containerEl.textContent = '';
        await generateSearchCard(cityName);
    }
})

// Inizializzazione: genera tutte le card delle province e delle località marine
/* generateCards(); */
generateCardsSea();

const addFavoritesBtnEl = document.querySelector('.add-favorites');
const removeFavoritesBtnEl = document.querySelector('.remove-favorites');
const inputFavoriteEl = document.querySelector('#favourites-input');
let favoriteStorage = JSON.parse(localStorage.getItem('favorites')) || [];

addFavoritesBtnEl.addEventListener('click', async (event) => {
    event.stopPropagation();
    const favoriteEL = capitalize(inputFavoriteEl.value.trim());
    if (favoriteEL && !favoriteStorage.includes(favoriteEL)) {
        favoriteStorage.push(favoriteEL);
        localStorage.setItem('favorites', JSON.stringify(favoriteStorage));
        containerEl.innerHTML = '';
        /*  for (let i = 0; i < favoriteStorage.length; i++) {
             generateSearchCard(favoriteStorage[i]);
         } */
        favoriteStorage.map(el => generateSearchCard(el));
    }
});


if (favoriteStorage.length > 0) {
    containerEl.innerHTML = '';
    for (let i = 0; i < favoriteStorage.length; i++) {
        generateSearchCard(favoriteStorage[i]);
    }
} else {
    const favoritesContainerEl = document.querySelector('.favorites-list-container');
    favoritesContainerEl.classList.add('display');
    generateCards();
}


removeFavoritesBtnEl.addEventListener('click', async (event) => {
    const deleteEl = capitalize(inputFavoriteEl.value.trim());
    if (favoriteStorage.includes(deleteEl)) {
        const indexToDelete = favoriteStorage.indexOf(deleteEl);
        favoriteStorage.splice(indexToDelete, 1);

        // aggiorna localstorage
        localStorage.setItem('favorites', JSON.stringify(favoriteStorage));
    }
    window.location.reload();
});
