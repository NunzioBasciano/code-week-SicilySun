// Array delle province siciliane principali
const provinces = ['Trapani', 'Palermo', 'Catania', 'Messina', 'Siracusa', 'Ragusa', 'Enna', 'Caltanissetta', 'Agrigento',];

// Array delle località marine con coordinate geografiche
const marineLocations = [
    { name: "Riserva dello Zingaro", lat: 38.0794, lon: 12.8226 },
    { name: "Marettimo", lat: 37.9725, lon: 12.0657 },
    { name: "Levanzo", lat: 38.0008, lon: 12.3264 },
    { name: "Favignana", lat: 37.9244, lon: 12.3248 },
    { name: "Scala dei Turchi", lat: 37.2881, lon: 13.4762 },
    { name: "San Vito Lo Capo", lat: 38.1742, lon: 12.7366 },
    { name: "Cefalù", lat: 38.0386, lon: 14.0226 },
    { name: "Taormina", lat: 37.8526, lon: 15.2876 },
    { name: "Mondello", lat: 38.1989, lon: 13.3167 }
];

// Array delle immagini di sfondo associate alle province
const backgrounds = [
    { name: 'Trapani', image: 'images/trapani-background.jpg' },
    { name: 'Palermo', image: 'images/palermo-background.jpeg' },
    { name: 'Catania', image: 'images/catania-background.jpg' },
    { name: 'Messina', image: 'images/messina-background.jpg' },
    { name: 'Siracusa', image: 'images/siracusa-background.jpg' },
    { name: 'Ragusa', image: 'images/ragusa-background.jpg' },
    { name: 'Enna', image: 'images/enna-background.jpg' },
    { name: 'Caltanissetta', image: 'images/caltanissetta-background.jpg' },
    { name: 'Agrigento', image: 'images/agrigento-background.jpg' },

];


// Array delle immagini di sfondo associate alle località marine
const backgroundsSea = [
    { name: 'Riserva dello Zingaro', image: 'images/zingaro-background.jpg' },
    { name: 'Marettimo', image: 'images/marettimo-background.jpg' },
    { name: 'Levanzo', image: 'images/levanzo-background.jpg' },
    { name: 'Favignana', image: 'images/favignana-background.jpg' },
    { name: 'Scala dei Turchi', image: 'images/scala-dei-turchi-background.jpg' },
    { name: 'San Vito Lo Capo', image: 'images/san-vito-lo-capo-background.jpg' },
    { name: 'Cefalù', image: 'images/cefalu-background.jpg' },
    { name: 'Taormina', image: 'images/taormina-background.jpg' },
    { name: 'Mondello', image: 'images/mondello-background.jpg' }
];


export {
    provinces,
    marineLocations,
    backgrounds,
    backgroundsSea
}