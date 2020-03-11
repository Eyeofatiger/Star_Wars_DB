export default class SwapiService {

    _apiBase = 'https://swapi.co/api';

     getResource = async (url)=>{
        const res = await fetch(url);

        if(!res.ok){
            throw new Error(`Could not fetch ${url}, received ${res.status}`);
        }
        return await res.json();
    };

    getAllPeople = async ()=> {
        const res = await this.getResource(`${this._apiBase}/people/`);
        return res.results.map(this._transformPerson);
    };

    getPerson = async (id)=> {
        const person = await this.getResource(`${this._apiBase}/people/${id}`);
        return this._transformPerson(person);
    };

    getAllPlanets = async ()=> {
        const res = await this.getResource(`${this._apiBase}/planets/`);
        return res.results.map(this._transformPlanet);
    };

    getPlanet = async (id)=> {
        const planet = await this.getResource(`${this._apiBase}/planets/${id}`);
        return this._transformPlanet(planet);
    };

    getAllStarships = async ()=> {
        const res = await this.getResource(`${this._apiBase}/starships/`);
        return res.results.map(this._transformStarships);
    };

    getStarship = async (id)=> {
        const starship = await this.getResource(`${this._apiBase}/starships/${id}`);
        return this._transformStarships(starship);
    };

    _extractId = (item)=> {
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1];
    };

    _transformPlanet = (planet)=> {
        return {
            name: planet.name,
            id: this._extractId(planet),
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        };
    };

    _transformStarships = (starship)=> {
        return {
            name: starship.name,
            id: this._extractId(starship),
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.costInCredits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargoCapacity
        };
    };

    _transformPerson = (person)=> {
        return {
            name: person.name,
            id: this._extractId(person),
            gender: person.gender,
            birthYear: person.birthYear,
            eyeColor: person.eyeColor            
        };
    };
}