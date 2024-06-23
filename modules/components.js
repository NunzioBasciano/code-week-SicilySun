import { API_KEY } from "../key.js";
const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather';

function capitalize(value) {
    const valueToLowerCase = value.toLowerCase()
    const firstLetterUppercase = (valueToLowerCase.charAt(0).toUpperCase());
    const valueWithoutFirstLetter = valueToLowerCase.substring(1);
    return firstLetterUppercase + valueWithoutFirstLetter;
}

const cardGen = (obj, backgroundImage, locationName) => {

    // Crea il contenitore principale per la scheda della città
    const containerEl = document.createElement('div');
    containerEl.className = 'city-card';
    containerEl.style.backgroundImage = `url(${backgroundImage})`

    // Crea e imposta il titolo utilizzando il parametro locationName
    const titleCard = document.createElement('h2');
    titleCard.textContent = capitalize(locationName);
    titleCard.className = 'city-card-title';

    // Crea l'elemento dell'icona meteo
    const iconWeatherEl = document.createElement('img');
    const image = obj.weather.map(el => el.icon)
    iconWeatherEl.src = `https://openweathermap.org/img/wn/${image}@2x.png`;
    const description = obj.weather.map(el => el.description)
    iconWeatherEl.alt = description;
    iconWeatherEl.className = 'city-card-weather-image';

    // Crea il contenitore per la temperatura
    const containerTempEl = document.createElement('div');
    containerTempEl.className = 'city-card-container-temperature';

    // Crea il titolo per la sezione temperatura
    const tempTitleEl = document.createElement('h3');
    tempTitleEl.textContent = 'TEMPERATURE';
    tempTitleEl.className = 'city-card-temperature-title';

    // Crea il contenitore per la sezione inferiore della temperatura
    const containerBottomTempEl = document.createElement('div');
    containerBottomTempEl.className = 'city-card-temperature-bottom-section';

    // Crea il contenitore per la sezione sinistra della temperatura
    const containerTempLeftEl = document.createElement('div');
    containerTempLeftEl.className = 'city-card-temperature-section-left';

    // Crea l'elemento del valore della temperatura
    const temperatureValueEl = document.createElement('h4');
    temperatureValueEl.className = 'city-card-temperature-value';
    temperatureValueEl.textContent = `${obj.main.temp} °C`;

    // Crea l'elemento della temperatura percepita
    const temperatureFeelsLikeEl = document.createElement('p');
    temperatureFeelsLikeEl.className = 'city-card-temperature-feels-like';
    temperatureFeelsLikeEl.textContent = 'PERCEPITA';

    // Crea l'elemento del valore della temperatura percepita
    const temperatureFeelsLikeValueEl = document.createElement('p');
    temperatureFeelsLikeValueEl.className = 'city-card-temperature-feels-like-value';
    temperatureFeelsLikeValueEl.textContent = `${obj.main.feels_like} °C`;

    // Crea il contenitore per la sezione destra della temperatura
    const containerTempRightEl = document.createElement('div');
    containerTempRightEl.className = 'city-card-temperature-section-right';

    // Crea il contenitore per la temperatura minima
    const containerTempMinEl = document.createElement('div');
    containerTempMinEl.className = 'city-card-temperature-min-container';

    // Crea il titolo per la temperatura minima
    const tempMinTitleEl = document.createElement('h5');
    tempMinTitleEl.className = 'city-card-temperature-min';
    tempMinTitleEl.textContent = 'MINIME';

    // Crea l'elemento del valore della temperatura minima
    const tempMinValueEl = document.createElement('h4');
    tempMinValueEl.className = 'city-card-temperature-min-value';
    tempMinValueEl.textContent = `${obj.main.temp_min} °C`;

    // Crea il contenitore per la temperatura massima
    const containerTempMaxEl = document.createElement('div');
    containerTempMaxEl.className = 'city-card-temperature-max-container';

    // Crea il titolo per la temperatura massima
    const tempMaxTitleEl = document.createElement('h5');
    tempMaxTitleEl.className = 'city-card-temperature-max';
    tempMaxTitleEl.textContent = 'MASSIME';

    // Crea l'elemento del valore della temperatura massima
    const tempMaxValueEl = document.createElement('h4');
    tempMaxValueEl.className = 'city-card-temperature-max-value';
    tempMaxValueEl.textContent = `${obj.main.temp_max} °C`;

    // Crea il contenitore per la sezione dei venti
    const containerWindEl = document.createElement('div');
    containerWindEl.className = 'city-card-container-wind';

    // Crea il titolo per la sezione dei venti
    const windTitleEl = document.createElement('h3');
    windTitleEl.textContent = 'VENTI';
    windTitleEl.className = 'city-card-wind-title';

    // Crea il contenitore per la sezione inferiore dei venti
    const containerBottomWindEl = document.createElement('div');
    containerBottomWindEl.className = 'city-card-wind-bottom-section';

    // Crea il contenitore per la velocità del vento
    const containerWindSpeedEl = document.createElement('div');
    containerWindSpeedEl.className = 'city-card-wind-container-speed';

    // Crea il titolo per la velocità del vento
    const windSpeedTitleEl = document.createElement('h5');
    windSpeedTitleEl.className = 'city-card-wind-speed';
    windSpeedTitleEl.textContent = 'VELOCITA\'';

    // Crea l'elemento del valore della velocità del vento
    const windSpeedValueEl = document.createElement('h4');
    windSpeedValueEl.className = 'city-card-wind-speed-value';
    windSpeedValueEl.textContent = `${obj.wind.speed} m/s`;

    // Crea il contenitore per la direzione del vento
    const containerWindDirectionEl = document.createElement('div');
    containerWindDirectionEl.className = 'city-card-wind-container-direction';

    // Crea il titolo per la direzione del vento
    const windDirectionTitleEl = document.createElement('h5');
    windDirectionTitleEl.className = 'city-card-wind-direction';
    windDirectionTitleEl.textContent = 'DIREZIONE';

    // Crea l'elemento del valore della direzione del vento
    const windDirectionValueEl = document.createElement('h4');
    windDirectionValueEl.className = 'city-card-wind-direction-value';
    windDirectionValueEl.textContent = getWindDirection(obj.wind.deg);

    // Crea il contenitore per la sezione piogge e nuvole
    const containerRainCloudsEl = document.createElement('div');
    containerRainCloudsEl.className = 'city-card-container-rain-clouds';

    // Crea il contenitore per le piogge
    const containerRainEl = document.createElement('div');
    containerRainEl.className = 'city-card-container-rain';

    // Crea l'elemento del valore delle piogge
    const rainTitleEl = document.createElement('h5');
    rainTitleEl.className = 'city-card-rain-title';
    rainTitleEl.textContent = 'PIOGGE';

    // Crea l'elemento del valore delle piogge
    const rainValueEl = document.createElement('h4');
    rainValueEl.className = 'city-card-rain-value';
    rainValueEl.textContent = obj.rain && obj.rain['1h'] > 0 ? `${obj.rain['1h']} mm/h` : '0 mm/h';

    // Crea il contenitore per le nuvole
    const containerCloudsEl = document.createElement('div');
    containerCloudsEl.className = 'city-card-container-clouds';

    // Crea il titolo per le nuvole
    const cloudsTitleEl = document.createElement('h5');
    cloudsTitleEl.className = 'city-card-clouds-title';
    cloudsTitleEl.textContent = 'NUVOLE';

    // Crea l'elemento del valore delle nuvole
    const cloudsValueEl = document.createElement('h4');
    cloudsValueEl.className = 'city-card-clouds-value';
    cloudsValueEl.textContent = `${obj.clouds.all} %`;

    // Aggiungi tutti gli elementi al contenitore principale
    containerEl.append(titleCard,
        iconWeatherEl,
        containerTempEl,
        containerWindEl,
        containerRainCloudsEl);

    // Sezione temperatura
    containerTempEl.append(tempTitleEl, containerBottomTempEl);
    containerBottomTempEl.append(containerTempLeftEl, containerTempRightEl);
    containerTempLeftEl.append(temperatureValueEl, temperatureFeelsLikeEl, temperatureFeelsLikeValueEl);
    containerTempRightEl.append(containerTempMinEl, containerTempMaxEl);
    containerTempMinEl.append(tempMinTitleEl, tempMinValueEl);
    containerTempMaxEl.append(tempMaxTitleEl, tempMaxValueEl);

    // Sezione venti
    containerWindEl.append(windTitleEl, containerBottomWindEl);
    containerBottomWindEl.append(containerWindSpeedEl, containerWindDirectionEl);
    containerWindSpeedEl.append(windSpeedTitleEl, windSpeedValueEl);
    containerWindDirectionEl.append(windDirectionTitleEl, windDirectionValueEl);

    // Sezione piogge e nuvole
    containerRainCloudsEl.append(containerRainEl, containerCloudsEl);
    containerRainEl.append(rainTitleEl, rainValueEl);
    containerCloudsEl.append(cloudsTitleEl, cloudsValueEl);
    return containerEl;
    /* END SEZIONE PIOGGE E NUVOLE */
}

//  * Funzione asincrona per gestire una richiesta HTTP usando fetch.
const handleRequest = async (requestUrl, options = {}) => {
    try {
        // Esegue la richiesta HTTP con il metodo fetch
        const res = await fetch(requestUrl);

        // Controlla lo stato della risposta HTTP
        if (!res.ok) { // Se res.ok è false, significa che la richiesta non è andata a buon fine 
            const errorData = await res.json(); // Legge il corpo della risposta come JSON per ottenere i dettagli dell'errore

            // Genera un errore con il messaggio ricevuto dal server o un messaggio di default
            throw new Error(errorData.message || 'Request failed'); // Se errorData.message non è disponibile, viene usato il messaggio predefinito 'Request failed'.
        }
        if (res.status === 204) { // Se lo status della risposta è 204 (No Content) 

            return null; // Non c'è contenuto da ritornare, quindi restituisce null
        }
        // Ritorna i dati della risposta come JSON
        return await res.json();

    } catch (error) {

        // Se si verifica un errore durante la richiesta o la lettura dei dati JSON
        throw error; // Rilancia l'errore per gestirlo più avanti
    }
};

const handleFeedback = (error, errorMessage = null, successMessage = null) => {

    // Seleziona gli elementi nel DOM per mostrare i feedback
    const errorFeedbackEl = document.querySelector('.feedback-error');
    const successFeedbackEl = document.querySelector('.feedback-success');

    if (error) {
        console.error(error);
        errorFeedbackEl.textContent = errorMessage || `Error: ${error.message}`;
        errorFeedbackEl.style.display = 'block';
        successFeedbackEl.style.display = 'none';
    } else {
        successFeedbackEl.textContent = successMessage || 'Operation successful';
        successFeedbackEl.style.display = 'block';
        errorFeedbackEl.style.display = 'none';
    }

    setTimeout(() => {
        errorFeedbackEl.style.display = 'none';
        successFeedbackEl.style.display = 'none';
    }, 3000); // Nasconde il feedback dopo 3 secondi
};

//  Esegue una richiesta GET per ottenere i dati meteorologici di una città specificata.
/* (`${BASE_URL}?q=${cityName}&appid=${API_KEY}&units=metric&lang=it`) */
const GET = async (cityName) => {
    try {
        // Costruisce l'URL per la richiesta GET utilizzando i parametri specificati
        const url = (`${BASE_URL}?q=${cityName}&appid=${API_KEY}&units=metric&lang=it`);

        // Esegue la richiesta GET utilizzando la funzione handleRequest
        const res = await handleRequest(url);

        // Ritorna la risposta della richiesta GET
        return res;

    } catch (error) {
        // Gestisce gli errori chiamando la funzione handleFeedback per visualizzare un feedback appropriato
        handleFeedback(error, `Error in search product: ${error.message}`);
    }
};

// Esegue una richiesta GET per ottenere i dati meteorologici utilizzando le coordinate di latitudine e longitudine
/* http://api.openweathermap.org/data/2.5/weather?lat=38.0794&lon=12.8226&units=metric&lang=it&appid=088eceadea6ab2df7f89f3beac7f315d*/
const getWithCoordinates = async (lat, lon) => {
    try {
        // Costruisce l'URL per la richiesta GET utilizzando le coordinate specificate
        const url = (`${BASE_URL}?lat=${lat}&lon=${lon}&units=metric&lang=it&appid=${API_KEY}`);

        // Esegue la richiesta GET utilizzando la funzione handleRequest
        const res = await handleRequest(url);

        // Ritorna la risposta della richiesta GET
        return res;

    } catch (error) {
        // Gestisce gli errori chiamando la funzione handleFeedback per visualizzare un feedback appropriato
        handleFeedback(error, `Error in search product: ${error.message}`);
    }
};

// Converte l'angolo di direzione del vento in una stringa corrispondente alla direzione cardinale o intercardinale della bussola.
function getWindDirection(degrees) {
    if (degrees >= 0 && degrees < 22.5) {
        return 'Tramontana - N';
    } else if (degrees >= 22.5 && degrees < 67.5) {
        return 'Grecale - NE';
    } else if (degrees >= 67.5 && degrees < 112.5) {
        return 'Levante - E';
    } else if (degrees >= 112.5 && degrees < 157.5) {
        return 'Scirocco - SE';
    } else if (degrees >= 157.5 && degrees < 202.5) {
        return 'Ostro - S';
    } else if (degrees >= 202.5 && degrees < 247.5) {
        return 'Libeccio - SO';
    } else if (degrees >= 247.5 && degrees < 292.5) {
        return 'Ponente - O';
    } else if (degrees >= 292.5 && degrees < 337.5) {
        return 'Maestrale -NO';
    } else if (degrees >= 337.5 && degrees <= 360) {
        return 'Tramontana - N';
    } else {
        return 'Invalid degrees'; // Gestione dei casi non validi
    }
}

// Ottiene la data e l'ora correnti formattate.
const getDataTime = () => {

    // Ottiene l'oggetto data e ora corrente
    const now = new Date();

    // Ottiene le ore e i minuti attuali, formattati con due cifre (es. 08:30)
    const huors = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    // Ottiene il giorno della settimana in formato testuale
    const dayOfWeek = getStringday(now.getDay());

    // Ottiene il giorno, mese e anno attuali, formattati con due cifre per giorno e mese (es. 01/01/2023)
    const day = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0'); // aggiungo 1 in quanto i mesi vengono restituiti da 0 a 11. (es. gennaio = 0)
    const year = now.getFullYear();

    // Costruisce la stringa formattata completa
    const formattedDate = `${huors}:${minutes}:${seconds} - ${dayOfWeek} ${day}/${month}/${year}`;

    return formattedDate;
}

// Restituisce il nome completo del giorno della settimana in italiano
const getStringday = (value) => {
    if (value === 1) {
        return 'lunedì';
    } else if (value === 2) {
        return 'martedì';
    } else if (value === 3) {
        return 'mercoledì';
    } else if (value === 4) {
        return 'giovedì';
    } else if (value === 5) {
        return 'venerdì';
    } else if (value === 6) {
        return 'sabato';
    } else if (value === 0) {
        return 'domenica';
    }
}

// Aggiorna l'elemento HTML con la data e l'ora corrente.
const updateTime = () => {
    // Ottiene la data e l'ora corrente formattate
    const currentDate = getDataTime();

    // Seleziona l'elemento HTML che mostra la data
    const dateEl = document.querySelector('.date');

    // Aggiorna il testo dell'elemento con la data e l'ora corrente formattate
    dateEl.textContent = currentDate;
}

// Esegue updateTime una volta all'inizio per inizializzare l'elemento con l'ora corrente
updateTime();

// Imposta un intervallo per chiamare updateTime ogni secondo (1000 millisecondi)
setInterval(updateTime, 1000);

export {
    cardGen,
    handleRequest,
    handleFeedback,
    GET,
    getDataTime,
    getStringday,
    getWithCoordinates,
    capitalize
}